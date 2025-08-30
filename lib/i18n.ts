import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from '../public/locales/en/common.json'
import jaCommon from '../public/locales/ja/common.json'

const resources = {
  en: {
    common: enCommon
  },
  ja: {
    common: jaCommon
  }
}

// Initialize with default language to prevent hydration mismatch
// Language will be updated on client side after mount
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Always start with 'en' to prevent hydration mismatch
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })

// Update language from localStorage after initialization (client-side only)
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage && savedLanguage !== i18n.language) {
    i18n.changeLanguage(savedLanguage)
  }
}

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng)
  }
})

export default i18n