"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import { useTranslation } from "react-i18next"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('en') // Always start with 'en' to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  // Set mounted state and initialize language from URL path or localStorage
  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      // Check if we're on a Japanese route
      const pathname = window.location.pathname
      const isJapanesePage = pathname.startsWith('/ja/') || pathname === '/ja'
      const detectedLanguage = isJapanesePage ? 'ja' : 'en'

      // Use URL-based language detection first, then localStorage
      const savedLanguage = localStorage.getItem('language')
      const targetLanguage = isJapanesePage ? 'ja' : (savedLanguage || 'en')

      if (targetLanguage !== language) {
        setLanguage(targetLanguage)
        i18n.changeLanguage(targetLanguage)
        // Save the detected language to localStorage
        localStorage.setItem('language', targetLanguage)
      }
    }
  }, [i18n, language])

  // Sync with i18n language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng)
    }

    i18n.on('languageChanged', handleLanguageChange)

    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

