---
title: 'Generating a Dynamic Sitemap in Next.js'
description: 'Improve your SEO by providing a sitemap to search engines.'
date: '2021-03-27'
---

You can provide search engines with all the <abbr title="Uniform Resource Locator">URLs</abbr> for your website using a sitemap. This allows for easier indexing and more efficient crawling by the search engines. In case you have a blog or another website that creates new pages constantly, it's better to generate a dynamic sitemap.

I'm using markdown files to manage my blog posts, but there is also a way to dynamically create a sitemap if you get your content from a <abbr title="Content Management System">CMS</abbr>.

## Sitemap (sitemap.xml)

First, install [globby](https://www.npmjs.com/package/globby) in your project. We'll use it to get all the routes from the `pages` folder using a [glob](https://en.wikipedia.org/wiki/Glob_%28programming%29).

```bash[class="command-line"]
yarn add globby
```

This is my `lib/sitemap.ts` so you can modify it to fit your case:

```tsx[class="line-numbers"]
import fs from 'fs'
import globby from 'globby'

const generateSitemap = async (): Promise<void> => {
  // Only generate a sitemap in production
  if (process.env.NODE_ENV === 'development') {
    return
  }

  // Fetch all routes based on patterns
  const pages = await globby([
    'src/pages/**/*.{ts,tsx,md}', // All routes inside /pages
    'src/posts/**/*.md', // All markdown files inside /posts
    '!src/pages/**/[*.{ts,tsx}', // Ignore the dynamic route index (/pages/posts/[id].tsx)
    '!src/pages/_*.{ts,tsx}', // Ignore Next.js files
    '!src/pages/api' // Ignore API routes
  ])

  const urlSet = pages
    .map(page => {
      // Remove parts of filename that are not route related.
      const path = page
        .replace('src', '')
        .replace('/pages', '')
        .replace(/\.(tsx|ts)/, '')
        .replace('.md', '')
      // Remove the word index from route
      const route = path === '/index' ? '' : path
      // Build url portion of sitemap.xml
      return `<url><loc>https://brenobaptista.vercel.app${route}</loc></url>`
    })
    .join('')

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`

  // Create sitemap file
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

export default generateSitemap
```

Import the `generateSitemap` function in the `pages/index.tsx` file and add it to the `getStaticProps` to make sure Next.js will call this function during the build of the `pages/index.tsx` page in production and generate the sitemap.

```tsx[class="line-numbers"]
export async function getStaticProps() {
  // ...

  await generateSitemap()

  return {
    // ...
  }
}
```

In my case, this is [my sitemap.xml](https://brenobaptista.vercel.app/sitemap.xml). It gets updated dynamically as I push new content.

## Robots exclusion standard (robots.txt)

You can use `robots.txt` to tell search engines where is your sitemap instead of manually submitting it to all of them. You can also tell them which routes they are or are not allowed to index.

This is my `public/robots.txt` so you can modify it to fit your case:

```markup[class="line-numbers"]
User-agent: *
Disallow:

Sitemap: https://brenobaptista.vercel.app/sitemap.xml
```

This is [my robots.txt](https://brenobaptista.vercel.app/robots.txt) in production.
