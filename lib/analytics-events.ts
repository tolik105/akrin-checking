'use client'

// Lightweight lead-conversion tracking helpers (GA4 via existing gtag).
// After deploy: in GA4 (property G-6YTE9HVKEE) mark generate_lead and
// whatsapp_click as key events, then import them as conversions in Google Ads.

type GtagFn = (...args: any[]) => void

function gtagSafe(): GtagFn | null {
  if (typeof window === 'undefined') return null
  const w = window as any
  return typeof w.gtag === 'function' ? (w.gtag as GtagFn) : null
}

/** Fire when a contact/lead form is successfully submitted. */
export function trackLead(source: string) {
  const gtag = gtagSafe()
  if (!gtag) return
  gtag('event', 'generate_lead', {
    event_category: 'lead',
    event_label: source,
    source,
  })
}

/** Fire when a visitor clicks the WhatsApp contact button. */
export function trackWhatsAppClick(location: string = 'floating_button') {
  const gtag = gtagSafe()
  if (!gtag) return
  gtag('event', 'whatsapp_click', {
    event_category: 'lead',
    event_label: location,
    location,
  })
}
