"use client"

import React from 'react'
import Link from 'next/link'

// Lightweight WhatsApp floating button with zero external JS and minimal CSS
// Uses existing /public/whatsapp.svg icon. Number provided by user: 09037728638 (Japan)
// We will convert to international format 81 + strip initial 0 => 819037728638

const PHONE_INTL = '819037728638'
const TEXT = encodeURIComponent('Hello AKRIN — please contact me about IT services')

export function WhatsAppFloat() {
  // Use native anchor; rely on CSS utilities only to avoid any perf impact
  // aria-label for accessibility; rel noopener for security
  return (
    <Link
      href={`https://wa.me/${PHONE_INTL}?text=${TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="24/7 Whatsapp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-lg bg-[#21B3AA] hover:bg-[#1a9891] text-white focus-visible:outline-[hsl(var(--primary))] transition-colors"
      prefetch={false}
    >
      <span className="inline-flex items-center justify-center">
        <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6 invert" loading="lazy" />
      </span>
      <span className="text-sm font-semibold">24/7 Whatsapp</span>
    </Link>
  )
}

