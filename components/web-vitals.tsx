'use client'

import { useEffect } from 'react'
import { onCLS, onFID, onLCP, onINP, onTTFB, type Metric } from 'web-vitals'

function sendToGtag(metric: Metric) {
  try {
    const gtag = (window as any).gtag as undefined | ((...args: any[]) => void)
    if (!gtag) return
    const value = metric.name === 'CLS' ? metric.delta * 1000 : metric.delta
    gtag('event', metric.name, {
      value: Math.round(value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    })
  } catch {
    // no-op
  }
}

export function WebVitals() {
  useEffect(() => {
    onCLS(sendToGtag)
    onFID(sendToGtag)
    onLCP(sendToGtag)
    onINP(sendToGtag)
    onTTFB(sendToGtag)
  }, [])
  return null
}



