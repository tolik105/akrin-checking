import type { MetadataRoute } from 'next'
import { routeMap } from '@/lib/route-map'

const SITE_URL = 'https://akrin.jp'

/**
 * Sitemap built from the same route map used for hreflang.
 * Includes all indexable pages: static, services, case studies, blog.
 * Served at /sitemap.xml (App Router takes precedence over public/sitemap.xml).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Flatten all localized pairs into unique URLs (EN + JA for each pair)
  const seen = new Set<string>()
  const entries: MetadataRoute.Sitemap = []

  for (const pair of routeMap.localized) {
    for (const path of [pair.en, pair.ja]) {
      if (seen.has(path)) continue
      seen.add(path)
      const isHome = path === '/' || path === '/ja'
      entries.push({
        url: `${SITE_URL}${path === '/' ? '' : path}`,
        lastModified: now,
        changeFrequency: isHome ? ('daily' as const) : ('weekly' as const),
        priority: isHome ? 1 : 0.8,
      })
    }
  }

  return entries
}
