import fs from 'fs'
import { Post } from './posts'

const baseUrl = 'https://www.brenobaptista.com'

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
