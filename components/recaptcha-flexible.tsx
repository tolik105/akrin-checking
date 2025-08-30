"use client"

import React, { useState, useEffect } from 'react'
import { RecaptchaV2 } from './recaptcha-v2'
import { RecaptchaV3 } from './recaptcha-v3'

interface FlexibleRecaptchaProps {
  onChange: (token: string | null) => void
  version?: 'v2' | 'v3' | 'auto'
}

export function FlexibleRecaptcha({ onChange, version = 'auto' }: FlexibleRecaptchaProps) {
  const [detectedVersion, setDetectedVersion] = useState<'v2' | 'v3'>('v2')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    // Try to detect which version based on the key format or by testing
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) {
      setError('No reCAPTCHA site key configured')
      return
    }

    // For now, let's default to v2 since that's what we implemented
    // You can change this to 'v3' if your keys are for v3
    setDetectedVersion('v2')
  }, [])

  if (error) {
    return <div className="text-red-500 text-sm text-center">{error}</div>
  }

  // If version is specified, use that
  const actualVersion = version === 'auto' ? detectedVersion : version

  if (actualVersion === 'v3') {
    return <RecaptchaV3 onVerify={onChange} />
  }

  return (
    <RecaptchaV2
      onVerify={onChange}
      onExpired={() => onChange(null)}
      onError={() => {
        setError('reCAPTCHA error. Please verify your keys are for v2 checkbox.')
        onChange(null)
      }}
    />
  )
}