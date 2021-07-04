import fs from 'fs'
import globby from 'globby'

const generateSitemap = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  const pages = await globby([
    'src/pages/**/*.{ts,tsx,md}',
    'src/posts/**/*.md',
    '!src/pages/**/[*.{ts,tsx}',
    '!src/pages/_*.{ts,tsx}',
    '!src/pages/404.tsx',
    '!src/pages/api'
  ])

  const urlSet = pages
    .map(page => {
      const path = page
        .replace('src', '')
        .replace('/pages', '')
        .replace(/\.(tsx|ts)/, '')
        .replace('.md', '')

      const route = path === '/index' ? '' : path

      return `<url><loc>https://brenobaptista.vercel.app${route}</loc></url>`
    })
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

export default generateSitemap
