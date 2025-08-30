"use client"

import React, { useCallback, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface RecaptchaV2Props {
  onVerify: (token: string | null) => void
  onExpired?: () => void
  onError?: () => void
}

export function RecaptchaV2({ onVerify, onExpired, onError }: RecaptchaV2Props) {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [hasError, setHasError] = useState(false)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const handleChange = useCallback((token: string | null) => {
    console.log('reCAPTCHA token received:', token ? 'Token received' : 'Token cleared')
    onVerify(token)
  }, [onVerify])

  const handleExpired = useCallback(() => {
    console.log('reCAPTCHA expired')
    onVerify(null)
    if (onExpired) onExpired()
  }, [onExpired, onVerify])

  const handleError = useCallback(() => {
    console.error('reCAPTCHA error - This usually happens when the domain is not authorized in the reCAPTCHA admin console')
    setHasError(true)
    onVerify(null)
    if (onError) onError()
  }, [onError, onVerify])

  if (!siteKey) {
    console.error('reCAPTCHA site key is not configured')
    return <div className="text-red-500 text-sm">reCAPTCHA not configured. Please check your environment variables.</div>
  }

  if (hasError) {
    return (
      <div className="text-yellow-600 text-sm p-3 bg-yellow-50 rounded-md">
        <p className="font-medium">reCAPTCHA temporarily unavailable</p>
        <p className="text-xs mt-1">Please proceed without verification. We'll validate your submission manually.</p>
      </div>
    )
  }

  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={handleChange}
        onExpired={handleExpired}
        onErrored={handleError}
        theme="light"
        size="normal"
      />
    </div>
  )
}