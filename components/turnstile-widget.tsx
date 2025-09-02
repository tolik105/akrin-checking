"use client"

import { useEffect } from "react"

export function TurnstileWidget() {
  useEffect(() => {}, [])
  return (
    <div
      className="cf-turnstile"
      data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
    />
  )
}

export default TurnstileWidget


