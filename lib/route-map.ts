// Canonical route map for building hreflang and sitemap
// Single source of truth for localized, indexable routes

export type LocalizedPair = {
  en: string
  ja: string
}

export type RouteMap = {
  // Localized pairs that exist in both EN and JA and should be indexable
  localized: LocalizedPair[]
}

// Static pages with parity
const staticPairs: LocalizedPair[] = [
  { en: '/', ja: '/ja' },
  { en: '/about', ja: '/ja/about' },
  { en: '/services', ja: '/ja/services' },
  { en: '/case-studies', ja: '/ja/case-studies' },
  { en: '/blog', ja: '/ja/blog' },
  { en: '/contact', ja: '/ja/contact' },
  { en: '/contact-form', ja: '/ja/contact-form' },
  { en: '/terms', ja: '/ja/terms' },
  { en: '/privacy', ja: '/ja/privacy' },
  { en: '/cookies', ja: '/ja/cookies' },
  { en: '/book-consultation', ja: '/ja/book-consultation' },
]

// Service pages with parity
const serviceSlugsWithParity = [
  'cloud-infrastructure',
  'cybersecurity',
  'it-consulting-project-management',
  'it-managed-services',
  'it-security',
  'itad-japan-apac-us',
  'network-penetration-testing',
  'wifi-assessment',
  'wifi-design',
] as const

const servicePairs: LocalizedPair[] = serviceSlugsWithParity.map((slug) => ({
  en: `/services/${slug}`,
  ja: `/ja/services/${slug}`,
}))

// Case studies: parity slugs from shared data
import { caseStudiesEN } from './case-studies-data'
const caseStudyPairs: LocalizedPair[] = caseStudiesEN.map((c) => ({
  en: `/case-studies/${c.slug}`,
  ja: `/ja/case-studies/${c.slug}`,
}))

// Blog posts: include only slugs that exist in BOTH EN and JA
import { blogPostsEN, blogPostsJA } from './blog-data'
const blogSlugsEN = new Set(Object.keys(blogPostsEN))
const blogSlugsJA = new Set(Object.keys(blogPostsJA))
const blogCommonSlugs: string[] = Array.from(blogSlugsEN).filter((s) => blogSlugsJA.has(s))
const blogPairs: LocalizedPair[] = blogCommonSlugs.map((slug) => ({
  en: `/blog/${slug}`,
  ja: `/ja/blog/${slug}`,
}))

export const routeMap: RouteMap = {
  localized: [
    ...staticPairs,
    ...servicePairs,
    ...caseStudyPairs,
    ...blogPairs,
  ],
}

// Helper for finding alternates for a given pathname
export function getAlternatesForPath(pathname: string): null | LocalizedPair {
  const normalized = normalizePath(pathname)
  for (const pair of routeMap.localized) {
    if (normalizePath(pair.en) === normalized || normalizePath(pair.ja) === normalized) {
      return pair
    }
  }
  return null
}

export function normalizePath(input: string): string {
  if (!input) return '/'
  try {
    const u = new URL(input, 'https://akrin.jp')
    const p = u.pathname.trim()
    if (p !== '/' && p.endsWith('/')) return p.slice(0, -1)
    return p || '/'
  } catch {
    const p = input.trim()
    if (p !== '/' && p.endsWith('/')) return p.slice(0, -1)
    return p || '/'
  }
}


