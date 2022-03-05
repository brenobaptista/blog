---
title: 'Generating a Dynamic Sitemap in Next.js'
description: 'Improve your SEO by providing a sitemap to search engines.'
date: '2021-03-27'
---

You can provide search engines with all the <abbr title="Uniform Resource Locator">URLs</abbr> for your website using a sitemap. This allows for easier indexing and more efficient crawling by the search engines. In case you have a blog or another website that creates new pages constantly, it's better to generate a dynamic sitemap.

I'm using markdown files to manage my blog posts, but there is also a way to dynamically create a sitemap if you get your content from a <abbr title="Content Management System">CMS</abbr>.

## Sitemap (sitemap.xml)

Create a `lib/sitemap.ts` file and add this code (modify it to fit your case):

```tsx[class="line-numbers"]
import fs from 'fs'
import { Post } from './posts'

const baseUrl = 'https://brenobaptista.vercel.app'

const generateSitemapItem = (post: Post): string => `
  <url>
    <loc>${`${baseUrl}/posts/${post.id}`}</loc>
  </url>`

const generateSitemapChannel = (
  posts: Post[]
): string => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
  </url>
  <url>
    <loc>${baseUrl}/resume</loc>
  </url>
  ${posts.map(generateSitemapItem).join('')}
</urlset>`

const generateSitemap = (allPostsData: Post[]): void => {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  const sitemap = generateSitemapChannel(allPostsData)

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

export default generateSitemap
```

You may notice that the indentation seems a little weird, but it's required to make the generated file look properly formatted.

Import the `generateSitemap` function in the `pages/index.tsx` file and add it to the `getStaticProps` to make sure Next.js will call this function during the build of the `pages/index.tsx` page in production and generate the sitemap.

```tsx[class="line-numbers"]
export async function getStaticProps() {
  // ...

  const allPostsData = getSortedPostsData()

  generateSitemap(allPostsData)

  return {
    // ...
  }
}
```

This is [my sitemap.xml](https://brenobaptista.vercel.app/sitemap.xml) in production.

## Robots exclusion standard (robots.txt)

You can use `robots.txt` to tell search engines where is your sitemap instead of manually submitting it to all of them. You can also tell them which routes they are or are not allowed to index.

This is my `public/robots.txt` so you can modify it to fit your case:

```markup[class="line-numbers"]
User-agent: *
Disallow:

Sitemap: https://brenobaptista.vercel.app/sitemap.xml
```

This is [my robots.txt](https://brenobaptista.vercel.app/robots.txt) in production.
