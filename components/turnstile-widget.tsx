"use client"

import { useEffect, useRef } from "react"

export function TurnstileWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const hiddenInputRef = useRef<HTMLInputElement | null>(null)
  const widgetIdRef = useRef<any>(null)

  useEffect(() => {
    const setToken = (token: string) => {
      if (hiddenInputRef.current) hiddenInputRef.current.value = token || ""
    }
    const clearToken = () => {
      if (hiddenInputRef.current) hiddenInputRef.current.value = ""
    }

    const renderWidget = () => {
      const ts: any = (window as any).turnstile
      if (!ts || !containerRef.current) return false
      try {
        widgetIdRef.current = ts.render(containerRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: (token: string) => setToken(token),
          'expired-callback': () => clearToken(),
          'error-callback': () => clearToken(),
        })
        ;(window as any).__tsWidgetId = widgetIdRef.current
        return true
      } catch {
        return false
      }
    }

    let attempts = 0
    const interval = window.setInterval(() => {
      attempts += 1
      if (renderWidget() || attempts > 50) {
        window.clearInterval(interval)
      }
    }, 100)

    return () => {
      window.clearInterval(interval)
      const ts: any = (window as any).turnstile
      if (ts && widgetIdRef.current) {
        try { ts.remove(widgetIdRef.current) } catch {}
      }
    }
  }, [])

  return (
    <>
      <div ref={containerRef} />
      <input ref={hiddenInputRef} type="hidden" name="cf-turnstile-response" />
    </>
  )
}

export default TurnstileWidget


