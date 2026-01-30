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
    '/book-reservation',
    '/services/it-managed-services-v2',
    '/thank-you',
    '/404',
    '/500',
  ]

  return {
    rules: [
      { userAgent: '*', allow, disallow },
      // Allow AI crawlers for GEO (Generative Engine Optimization) visibility
      // This enables content to appear in AI-powered search results (ChatGPT, Perplexity, Claude, etc.)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      // Major search engines
      { userAgent: 'Googlebot', allow, disallow },
      { userAgent: 'Bingbot', allow, disallow },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}