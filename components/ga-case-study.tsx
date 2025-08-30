'use client'

import { useEffect } from 'react'

type Props = {
  slug: string
  title: string
  locale: 'en' | 'ja'
}

export function GACaseStudy({ slug, title, locale }: Props) {
  useEffect(() => {
    let attempts = 0
    const maxAttempts = 40 // ~2s at 50ms interval
    const interval = setInterval(() => {
      // @ts-ignore
      const gtag = typeof window !== 'undefined' ? (window as any).gtag : undefined
      if (gtag) {
        const params = {
          page_path: typeof window !== 'undefined' ? window.location.pathname : `/case-studies/${slug}`,
          page_title: title,
          page_location: typeof window !== 'undefined' ? window.location.href : undefined,
          content_type: 'case_study',
          language: locale,
          slug,
        }
        try {
          gtag('event', 'view_case_study', params)
        } catch {}
        clearInterval(interval)
      } else if (++attempts >= maxAttempts) {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [slug, title, locale])

  return null
}

