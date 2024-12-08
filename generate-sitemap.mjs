import fs from 'fs'
import { routes } from './src/routes.js' // Importe as rotas manualmente

const baseURL = 'https://fexcompany.me'

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseURL}${route.path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`

fs.writeFileSync('public/sitemap.xml', sitemapContent)
console.log('Sitemap gerado em public/sitemap.xml!')
