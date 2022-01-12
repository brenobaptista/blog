---
title: 'Using Asynchronous Functions in JavaScript'
description: 'I’m on it. When I’m done, I’ll send you the result.'
date: '2021-07-10'
---

When executing an operation that needs a response from an external resource, you have to use asynchronous code to wait until the result has returned what you want before running the next operation. If you don't do that, it will run the next line of code immediately after the previous line without waiting for a valid response.

## Table of Contents

## Promise object

A `Promise` is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

> A promise is said to be settled if it is either fulfilled or rejected, but not pending.

## Creating promises

### Promise

When creating your promises from the ground up (like in your libraries), use the good old Promise with the help of `.then.catch`.

```js[class="line-numbers"]
// creating the promise
const promise = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000)
  setTimeout(() => reject(new Error("Whoops!")), 5000)
})

// using the promise
promise()
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Promise is settled!")) // optional
```

#### Chained Promises

You can use .then.then.then... instead of using .then().catch() inside a .then multiple times.

```js[class="line-numbers"]
myPromise
  .then(handleFirst)
  .then(handleSecond)
  .then(handleThird)
  .catch(handleAnyReject)
```

#### Other methods

You can check methods like Promise.all and Promise.race on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods).

### Async/await

When using a promise somebody else created, use `async/await`. It's just syntactic sugar for promise use.

`async` is used to tell JavaScript that the function is asynchronous, while `await` means "wait for this promise to resolve before running the next line of code".

```js[class="line-numbers"]
// imported oldPromise from a library or some file

const newPromise = async () => {
  try {
    const result = await oldPromise()

    return result
  } catch (error) {
    throw new Error(error)
  }
}
```

> When you are at the top level you can't use await, so you need to use .then().catch() in this case.

## Reviewing code

Now that you understand async functions in JavaScript, let's analyze the **wrong** code below I found in real life:

```js[class="line-numbers"]
async fetchDashboardData(uid) {
  return await firebase
    .database()
    .ref(`dashboard/${uid}`)
    .once('value')
    .then(snapshot => {
      return snapshot.val()
    })
}
```

This Firebase method is asynchronous, so the author used await. But notice that at the end we have .then(), so JavaScript already knows this function is async. Also, he is returning the promise (and returning twice, did you notice that?).

We could use either of these three methods to fix that function:

### 1) Promise

```js[class="line-numbers"]
const fetchDashboardData = uid => new Promise((resolve, reject) => {
  firebase
    .database()
    .ref(`dashboard/${uid}`)
    .once('value')
    .then(snapshot => {
      resolve(snapshot.val())
    })
    .catch(error => {
      reject(error)
    })
}
```

### 2) .then().catch()

```js[class="line-numbers"]
const fetchDashboardData = uid => {
  firebase
    .database()
    .ref(`dashboard/${uid}`)
    .once('value')
    .then(snapshot => {
      return snapshot.val()
    })
    .catch(error => {
      throw new Error(error)
    })
}
```

### 3) async/await

```js[class="line-numbers"]
const fetchDashboardData = async uid => {
  try {
    const snapshot = await firebase.database().ref(`dashboard/${uid}`).once('value')

    return snapshot.val()
  } catch (error) {
    throw new Error(error)
  }
}
```

## That's all Folks!

The best way to learn how to use asynchronous functions in JavaScript is to practice a lot in your projects. So this is your homework:

- Create a simple project and practice using [Firebase](https://firebase.google.com/) methods (they are asynchronous). Use this post as a reference when you're stuck.
