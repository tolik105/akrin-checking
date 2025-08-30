"use client"

import { useEffect, useCallback } from 'react'
import Script from 'next/script'

interface RecaptchaV3Props {
  onVerify: (token: string) => void
  action?: string
}

declare global {
  interface Window {
    grecaptcha: any
    onRecaptchaLoad: () => void
  }
}

export function RecaptchaV3({ onVerify, action = 'submit' }: RecaptchaV3Props) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const executeRecaptcha = useCallback(async () => {
    if (!window.grecaptcha || !siteKey) {
      console.error('reCAPTCHA not loaded or site key missing')
      return
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action })
      onVerify(token)
    } catch (error) {
      console.error('reCAPTCHA execution error:', error)
    }
  }, [siteKey, action, onVerify])

  useEffect(() => {
    window.onRecaptchaLoad = () => {
      window.grecaptcha.ready(() => {
        executeRecaptcha()
      })
    }
  }, [executeRecaptcha])

  if (!siteKey) {
    return <div className="text-red-500 text-sm">reCAPTCHA not configured</div>
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
      />
      <div className="text-xs text-gray-500 text-center">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
          Terms of Service
        </a>{' '}
        apply.
      </div>
    </>
  )
}