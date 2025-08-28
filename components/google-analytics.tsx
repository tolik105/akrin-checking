'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

/**
 * Loads GA only after explicit consent. Until then, no network requests are made.
 * When consent is granted, we initialize GA with consent mode updated to granted.
 */
export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('cookie-consent') : null
      if (stored === 'accepted') setHasConsent(true)

      const onGranted = () => setHasConsent(true)
      window.addEventListener('ga-consent-granted', onGranted as EventListener)
      return () => window.removeEventListener('ga-consent-granted', onGranted as EventListener)
    } catch {}
  }, [])

  if (!hasConsent) {
    // Do not load GA until consent; also set default denied consent mode if gtag exists later
    return null
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          // Consent granted already; ensure consent mode reflects this state
          gtag('consent', 'update', { 'analytics_storage': 'granted' });
          gtag('config', 'G-6YTE9HVKEE', { cookie_domain: 'akrin.jp' });
        `}
      </Script>
    </>
  )
}