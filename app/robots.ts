import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://akrin.jp'
  const allow = [
    '/_next/static/',
    '/_next/static',
    '/_next/image',
    '/_next/image/',
    '/_next/data/',
    '/_next/data',
    '/',
  ]
  const disallow = [
    '/api/*',
    '/admin/*',
    '/private/',
    '/*.json',
    '/book-consultation/success',
    '/book-reservation/success',
    '/thank-you',
    '/404',
    '/500',
  ]

  return {
    rules: [
      { userAgent: '*', allow, disallow },
      // Block AI crawlers for content protection
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ChatGPT-User', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
      { userAgent: 'Claude-Web', disallow: '/' },
      { userAgent: 'PerplexityBot', disallow: '/' },
      // Redundant explicit rules for major engines (same as generic)
      { userAgent: 'Googlebot', allow, disallow },
      { userAgent: 'Bingbot', allow, disallow },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}