import fs from 'fs'
import globby from 'globby'

const generateSitemap = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  // Fetch all routes based on patterns
  const pages = await globby([
    'src/pages/**/*.{ts,tsx,md}', // All routes inside /pages
    'src/posts/**/*.md', // All markdown files inside /posts
    '!src/pages/**/[*.{ts,tsx}', // Ignore the dynamic route index (/pages/posts/[id].tsx)
    '!src/pages/_*.{ts,tsx}', // Ignore Next.js files
    '!src/pages/404.tsx', // Ignore custom 404 page
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
