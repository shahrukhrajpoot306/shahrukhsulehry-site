// Runs after "vite build". Creates a real HTML file for the case-study page
// with its own title/description, so LinkedIn/WhatsApp link previews show the
// right text (they don't run JavaScript).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const html = readFileSync('dist/index.html', 'utf8')
const page = (title, desc, path) =>
  html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replaceAll(/(name="description" content=")[^"]*/g, `$1${desc}`)
    .replaceAll(/(property="og:description" content=")[^"]*/g, `$1${desc}`)
    .replaceAll(/(property="og:title" content=")[^"]*/g, `$1${title}`)
    .replaceAll(/(property="og:url" content=")[^"]*/g, `$1https://shahrukhsulehry.com${path}`)
    .replace(/(rel="canonical" href=")[^"]*/, `$1https://shahrukhsulehry.com${path}`)

// Home page: always take title + description from site.ts, so link previews never go stale
const { site, caseStudies } = await import('../src/content/site.ts')
writeFileSync('dist/index.html', page(site.seo.title, site.seo.description, '/'))

// One static HTML file per case study (list comes from src/content/site.ts)
for (const c of caseStudies) {
  const slug = `work/${c.slug}`
  mkdirSync(`dist/${slug}`, { recursive: true })
  writeFileSync(`dist/${slug}/index.html`, page(c.seoTitle, c.seoDescription, `/${slug}`))
}
// Real estate page
mkdirSync('dist/real-estate', { recursive: true })
writeFileSync('dist/real-estate/index.html', page(site.realEstate.seoTitle, site.realEstate.seoDescription, '/real-estate'))

// sitemap.xml: home + real estate page + every case study
const urls = ['/', '/real-estate', ...caseStudies.map((c) => `/work/${c.slug}`)]
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>https://shahrukhsulehry.com${u}</loc></url>`).join('\n')}
</urlset>
`)
writeFileSync('dist/404.html', page('Page not found | ShahRukh Sulehry', 'This page does not exist.', '/404'))
console.log(`postbuild: ${caseStudies.length} case-study page(s) + 404 written`)
