'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { getAlternatesForPath, normalizePath } from '@/lib/route-map'

export function HreflangLinks() {
  const pathname = usePathname() || '/'

  // Prefer runtime origin; fall back to production domain (akrin.jp)
  const origin = (typeof window !== 'undefined' && window.location?.origin)
    ? window.location.origin
    : (process.env.NEXT_PUBLIC_SITE_URL || 'https://akrin.jp')

  const pair = useMemo(() => getAlternatesForPath(pathname), [pathname])

  // Only render on indexable routes present in the route map
  if (!pair) return null

  const enUrl = `${origin}${normalizePath(pair.en)}`
  const jaUrl = `${origin}${normalizePath(pair.ja)}`

  // Ensure no duplicates and always include x-default -> EN
  return (
    <>
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ja" href={jaUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  )
}