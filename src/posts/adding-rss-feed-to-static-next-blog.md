---
title: 'Adding RSS Feed to a Static Next.js Blog'
description: 'Allow visitors to get updated for new content on your blog.'
date: '2021-04-17'
---

An RSS feed is a standardized XML file that contains information about your blog and all its articles. Check the [RSS 2.0 specification page](https://validator.w3.org/feed/docs/rss2.html) for further information. I use [QuiteRSS](https://quiterss.org/en/download) to consume content over the internet because of the dark mode.

## Really Simple Syndication (rss.xml)

This is my `lib/rss.ts` so you can modify it to fit your case:

```tsx[class="line-numbers"]
import fs from 'fs'
import { Post } from './posts'

const generateRssItem = (post: Post): string => `
  <item>
    <guid>https://brenobaptista.vercel.app/posts/${post.id}</guid>
    <title>${post.title}</title>
    <link>https://brenobaptista.vercel.app/posts/${post.id}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`

const generateRssChannel = (posts: Post[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Breno Baptista</title>
      <link>https://brenobaptista.vercel.app</link>
      <description>I'm a full-stack developer from Brazil.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://brenobaptista.vercel.app/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`

const generateRss = (allPostsData: Post[]): void => {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  const rss = generateRssChannel(allPostsData)

  fs.writeFileSync('public/rss.xml', rss)
}

export default generateRss
```

Import the `generateRss` function in the `pages/index.tsx` file and add it to the `getStaticProps` to make sure Next.js will call this function during the build of the `pages/index.tsx` page in production and generate the sitemap.

```tsx[class="line-numbers"]
export async function getStaticProps() {
  // ...

  const allPostsData = getSortedPostsData()

  generateRss(allPostsData)

  return {
    // ...
  }
}
```

> I implemented a function called getSortedPostsData that is a method that parses my markdown files to extract metadata about my blog posts. You can check the [source code](https://github.com/brenobaptista/blog/blob/main/src/lib/posts.ts).

The last step is to add a link to the RSS feed inside your <head> tag. You should put the code inside `pages/_document.tsx` to make it available to all pages. This code is responsible to tell search engine crawlers that this page has an alternate version.

```tsx[class="line-numbers"]
<link
  rel='alternate'
  type='application/rss+xml'
  title='RSS feed for blog posts'
  href='https://brenobaptista.vercel.app/rss.xml'
/>
```

This is [my rss.xml](http://brenobaptista.vercel.app/rss.xml) in production.

You can check if your RSS is valid through the [W3C Feed Validation Service](https://validator.w3.org/feed/).

## Sharing your RSS Feed

People need to subscribe to your RSS feed in your blog. Check the header of my [homepage](/). Notice that the last social icon is an RSS icon that shares my RSS feed.

In case you want to add this icon to your blog, check my blog post about [working with SVGs in React using SVGR](/posts/working-with-svgs-in-react-using-svgr). I got the SVG for free from [Font Awesome](https://fontawesome.com/).
