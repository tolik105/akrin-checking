/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://akrin.jp',
  generateRobotsTxt: false, // We serve robots via app/robots.ts
  generateIndexSitemap: true,
  sitemapBaseFileName: 'sitemap',
  outDir: 'public',
  exclude: [
    '/api/*',
    '/admin*',
    '/private/*',
    '/thank-you',
    '/404',
    '/500',
    '/book-consultation/success',
    '/book-reservation/success',
    '/ja/ja*',
  ],
  // Use default transform. hreflang is handled in head via <HreflangLinks />.
}

export default config


