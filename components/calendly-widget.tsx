"use client"

import { useEffect } from "react"
import Script from "next/script"

interface CalendlyButtonProps {
  url?: string
  text?: string
  className?: string
  prefill?: {
    email?: string
    firstName?: string
    lastName?: string
    name?: string
    customAnswers?: Record<string, string>
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
}

export function CalendlyButton({ 
  url = "https://calendly.com/akrin-support?primary_color=8a2be2",
  text = "Schedule time with me",
  className = "",
  prefill,
  utm
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup
      const links = document.head.querySelectorAll('link[href*="calendly.com"]')
      links.forEach(link => link.remove())
    }
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url,
        prefill,
        utm
      })
    }
    return false
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <a
        href=""
        onClick={handleClick}
        className={className}
      >
        {text}
      </a>
    </>
  )
}

// Button component for Calendly popup
import { Button } from "@/components/ui/button"

export function CalendlyPopupButton({ 
  url = "https://calendly.com/akrin-support?primary_color=8a2be2",
  text = "Schedule a Consultation",
  className = "",
  variant = "default" as any,
  size = "default" as any,
  prefill,
  utm
}: CalendlyButtonProps & { variant?: any; size?: any }) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup
      const links = document.head.querySelectorAll('link[href*="calendly.com"]')
      links.forEach(link => link.remove())
    }
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url,
        prefill,
        utm
      })
    }
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <Button
        onClick={handleClick}
        className={className}
        variant={variant}
        size={size}
        type="button"
      >
        {text}
      </Button>
    </>
  )
}