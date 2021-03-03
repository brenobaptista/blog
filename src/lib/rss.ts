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
      <description>I'm a full-stack developer based in Fortaleza, Brazil.</description>
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
