'use client'

import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { ReactNode, useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isJaPath = pathname?.startsWith('/ja/') || pathname === '/ja'
  const targetLang = isJaPath ? 'ja' : 'en'

  // Apply language after mount to avoid setState during render
  useLayoutEffect(() => {
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang)
    }
  }, [targetLang])

  useEffect(() => {
    const isJa = pathname?.startsWith('/ja/') || pathname === '/ja'
    const nextLang = isJa ? 'ja' : 'en'
    if (i18n.language !== nextLang) {
      i18n.changeLanguage(nextLang)
    }
  }, [pathname])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}