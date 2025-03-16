import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import { resolve } from 'path'

async function generateSitemap() {
  const hostname = 'https://contoh.com' // Ganti dengan domain situs
  const pages = [
    '/',
    '/basic_machine_learning',
    '/dasar_python' 
  ]

  const sitemap = new SitemapStream({ hostname })
  const writeStream = createWriteStream(resolve('docs/public/sitemap.xml'))

  pages.forEach(page => sitemap.write(page))
  sitemap.end()

  await streamToPromise(sitemap).then(sm => writeStream.write(sm))
  console.log('✅ Sitemap berhasil dibuat!')
}

generateSitemap()
