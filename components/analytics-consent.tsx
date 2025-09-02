"use client"

import { useEffect, useState } from 'react'

// Minimal analytics loader that defers GA until user interacts
export function AnalyticsConsent({ enabled = true }: { enabled?: boolean }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!enabled || loaded) return

    const loadGA = () => {
      if (loaded) return
      // Append GA only after interaction/idle
      const s1 = document.createElement('script')
      s1.async = true
      s1.src = 'https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE'
      document.head.appendChild(s1)

      const s2 = document.createElement('script')
      s2.id = 'google-analytics'
      s2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'G-6YTE9HVKEE', { cookie_domain: 'akrin.jp' });
      `
      document.head.appendChild(s2)

      setLoaded(true)
      window.removeEventListener('scroll', loadGA)
      window.removeEventListener('pointerdown', loadGA)
    }

    // Wait for first user interaction
    window.addEventListener('scroll', loadGA, { passive: true })
    window.addEventListener('pointerdown', loadGA, { passive: true })

    // Fallback: load after idle
    const idle = setTimeout(loadGA, 6000)
    return () => {
      clearTimeout(idle)
      window.removeEventListener('scroll', loadGA)
      window.removeEventListener('pointerdown', loadGA)
    }
  }, [enabled, loaded])

  return null
}

