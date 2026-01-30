"use client"

import Script from "next/script"
import { useEffect, useRef, useState } from "react"

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export function TurnstileWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const hiddenInputRef = useRef<HTMLInputElement | null>(null)
  const widgetIdRef = useRef<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if sitekey is available
    if (!TURNSTILE_SITE_KEY) {
      setError("CAPTCHA configuration missing")
      console.error("TurnstileWidget: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set")
      return
    }

    const setToken = (token: string) => {
      if (hiddenInputRef.current) hiddenInputRef.current.value = token || ""
      setError(null)
    }
    const clearToken = () => {
      if (hiddenInputRef.current) hiddenInputRef.current.value = ""
    }

    const renderWidget = () => {
      const ts: any = (window as any).turnstile
      if (!ts || !containerRef.current) return false
      try {
        widgetIdRef.current = ts.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setToken(token),
          'expired-callback': () => clearToken(),
          'error-callback': () => {
            clearToken()
            setError("CAPTCHA verification failed. Please refresh.")
          },
        })
        ;(window as any).__tsWidgetId = widgetIdRef.current
        return true
      } catch (e) {
        console.error("TurnstileWidget render error:", e)
        setError("CAPTCHA failed to load")
        return false
      }
    }

    let attempts = 0
    const interval = window.setInterval(() => {
      attempts += 1
      if (renderWidget() || attempts > 50) {
        window.clearInterval(interval)
        if (attempts > 50 && !widgetIdRef.current) {
          setError("CAPTCHA failed to load. Please refresh.")
        }
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
      <Script
        id="turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div ref={containerRef} />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
      <input ref={hiddenInputRef} type="hidden" name="cf-turnstile-response" />
    </>
  )
}

export default TurnstileWidget


