import fs from 'fs'
import { Post } from './posts'

const baseUrl = 'https://www.brenobaptista.com'

const generateRssItem = (post: Post): string => `
    <item>
      <guid>${baseUrl}/posts/${post.id}</guid>
      <title>${post.title}</title>
      <link>${baseUrl}/posts/${post.id}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`

const generateRssChannel = (
  posts: Post[]
): string => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Breno Baptista</title>
    <link>${baseUrl}</link>
    <description>I’m a software engineer who likes to explore new things every day. I write blog posts about things I’ve found interesting during my daily explorations on the web.</description>
    <language>en</language>
    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(generateRssItem).join('')}
  </channel>
</rss>`

const generateRss = (allPostsData: Post[]): void => {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  const rss = generateRssChannel(allPostsData)

  fs.writeFileSync('public/rss.xml', rss)
}

export default generateRss
