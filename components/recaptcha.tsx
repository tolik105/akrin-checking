"use client"

import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface RecaptchaProps {
  onChange: (token: string | null) => void
  onExpired?: () => void
  onError?: () => void
}

export function Recaptcha({ onChange, onExpired, onError }: RecaptchaProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    console.error('reCAPTCHA site key is not configured')
    return null
  }

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
      onExpired={onExpired}
      onErrored={onError}
      theme="light"
    />
  )
}