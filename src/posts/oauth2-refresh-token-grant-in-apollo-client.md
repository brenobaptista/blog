---
title: 'OAuth2 refresh token grant in Apollo Client'
description: 'An elegant solution to this problem.'
date: '2023-10-29'
---

This article assumes the reader has already setup the access token flow and now wants to use the refresh tokens to get new access tokens without logging the users out.

## How the lock works

Let's break down how it works:

Imagine you send three simultaneous requests for token refresh (Request A, Request B, and Request C) while the flag is false.

**Request A:**

- The flag is false, so Request A enters the block where it sets the flag to true, indicating that a refresh is in progress.
- Request A proceeds to perform the token refresh operation.
- When the refresh is complete, Request A sets flag back to false, indicating that the refresh operation has finished.

**Request B and Request C:**

- Both Request B and Request C find that flag is true, indicating that a refresh operation is already in progress.
- Instead of proceeding immediately, Request B and Request C enter the waiting phase. They each create a promise and a timeout mechanism to periodically check if flag becomes false.
- Request B and Request C wait for the ongoing token refresh (Request A) to complete. They use the promise with a timeout to periodically check the lock status.
- After Request A sets flag to false upon completion, Request B and Request C detect this change then are released.

This ensures that only one request performs the token refresh operation, while other requests wait for be released. It prevents concurrent refresh operations and errors caused by multiple simultaneous token refresh requests.

This is possible because JavaScript is a single-thread language - this code wouldn't work in Go because all three requests would see that the lock is false then try to refresh at the same time.

## Implementation in React

We start by implementing a lock mechanism to prevent multiple concurrent token refresh requests. We can use a flag in local storage (or cookie) to achieve this. Using local storage (or cookie) allow us to use multiple tabs at the same time without triggering an unexpected logout or error to the users.

We set the flag to true when a refresh operation starts and set it to false when it's complete. This will effectively block other refresh requests until the current one is finished.

```tsx[class="line-numbers"]
const refreshLock = async () => {
  const isRefreshLocked = getCookie(AppCookie.RefreshLock)

  try {
    if (!isRefreshLocked) {
      setCookie(AppCookie.RefreshLock, 'true', {
        // set expiry to 10 seconds (request should be max 100ms)
        expires: new Date(Date.now() + 10 * 1000)
      })
      await oauth2Refresh()
      deleteCookie(AppCookie.RefreshLock)
    } else {
      await waitForRefreshCompletion()
    }
  } catch (err) {
    deleteCookie(AppCookie.RefreshLock)
    throw new GraphQLError(err)
  }
}

const waitForRefreshCompletion = () =>
  new Promise<void>(resolve => {
    const interval = setInterval(() => {
      const isRefreshLocked = getCookie(AppCookie.RefreshLock)

      if (!isRefreshLocked) {
        clearInterval(interval)
        resolve()
      }
    }, 100)
  })
```

## Complementary code

This is the code that only the first request should execute. It requests new tokens and saves them as cookies:

```tsx[class="line-numbers"]
const oauth2Refresh = async () => {
  try {
    const refreshToken = getCookie(AppCookie.Refresh)

    const { data }: Pick<OAuth2RefreshMutationResult, 'data'> =
      await SSRClient.mutate({
        mutation: OAuth2RefreshDocument,
        variables: {
          refreshToken
        }
      })

    if (!data?.OAuth2Refresh?.id_token || !data?.OAuth2Refresh?.refresh_token) {
      throw new GraphQLError('Invalid token response')
    }

    setCookie(AppCookie.Token, data?.OAuth2Refresh?.id_token, {
      // set expiry to 1 hour
      expires: new Date(Date.now() + 3600 * 1000)
    })

    setCookie(AppCookie.Refresh, data?.OAuth2Refresh?.refresh_token, {
      // set expiry to 1 month
      expires: new Date(Date.now() + 86400 * 30 * 1000)
    })
  } catch (err) {
    throw new GraphQLError(err)
  }
}
```

In errorLink, we call refreshLock when a 401 or 403 error occurs.

```tsx[class="line-numbers"]
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }: ErrorResponse) => {
    if (graphQLErrors && graphQLErrors?.length > 0) {
      for (const [index, error] of graphQLErrors.entries()) {
        const { extensions } = error
        // only process first error to avoid multiple messages
        if (index === 0 && !networkError) {
          if ((extensions?.status) === 401 || (extensions?.status) === 403) {
            const observable = new Observable<FetchResult<Record<string, any>>>(
              observer => {
                const retryPreviousRequest = () => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                  }

                  forward(operation).subscribe(subscriber)
                }

                const handleUnauthorizedRequest = async () => {
                  try {
                    // the first request locks, refresh then retries request
                    // consecutive requests wait for refresh then retry request
                    await refreshLock()
                    retryPreviousRequest()
                  } catch (err) {
                    observer.error(err)
                  }
                }

                handleUnauthorizedRequest()
              }
            )

            return observable
          } else {
            // Handle other errors...
          }
        }
      }
    }

    if (networkError) {
      // Handle network errors...
    }
  }
)
```

Apollo Client with SSR (Server-Side Rendering):

```tsx[class="line-numbers"]
const ssrClient = new ApolloClient({
  // order matters here - put errorLink first so the refresh token flow works
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  ssrMode: true,
  ...otherOptions
})
```
