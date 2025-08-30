"use client"
import { Button } from "@/components/ui/button"
import { Globe, Check } from "lucide-react"
import { languages } from "@/utils/languages"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/contexts/language-context"
import { usePathname, useRouter } from "next/navigation"

export function LanguageSelectorMobile({ useOverlay = false }: { useOverlay?: boolean }) {
  const { i18n } = useTranslation()
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)
    i18n.changeLanguage(langCode)

    // Handle URL routing based on language
    if (langCode === 'ja') {
      // Switch to Japanese version
      if (pathname.startsWith('/ja/') || pathname === '/ja') {
        // Already on Japanese version, no need to change
        return
      } else {
        // Switch from English to Japanese
        const newPath = pathname === '/' ? '/ja' : `/ja${pathname}`
        router.push(newPath)
      }
    } else {
      // Switch to English version
      if (pathname.startsWith('/ja/') || pathname === '/ja') {
        // Switch from Japanese to English
        const newPath = pathname.replace('/ja', '') || '/'
        router.push(newPath)
      } else {
        // Already on English version, no need to change
        return
      }
    }
  }

  // Detect current language from URL
  const currentLanguage = (pathname.startsWith('/ja/') || pathname === '/ja') ? 'ja' : 'en'

  // Dynamic styling based on overlay mode
  const labelClasses = useOverlay ? 'text-white/80' : 'text-slate-600'
  const activeButtonClasses = useOverlay
    ? "bg-white text-slate-800 hover:bg-gray-100"
    : "bg-primary text-primary-foreground hover:bg-primary/90"
  const inactiveButtonClasses = useOverlay
    ? "bg-transparent text-white border-white/50 hover:bg-white/10"
    : "bg-transparent text-slate-700 border-slate-300 hover:bg-slate-50"

  return (
    <div className="w-full">
      <div className={`flex items-center gap-2 mb-2 ${labelClasses}`}>
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">Language</span>
      </div>
      <div className="flex gap-2 w-full">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            variant={currentLanguage === lang.code ? "default" : "outline"}
            className={`flex-1 min-h-[48px] ${
              currentLanguage === lang.code
                ? activeButtonClasses
                : inactiveButtonClasses
            }`}
          >
            {currentLanguage === lang.code && <Check className="w-4 h-4 mr-2" />}
            {lang.name}
          </Button>
        ))}
      </div>
    </div>
  )
}