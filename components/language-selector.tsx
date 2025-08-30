"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { languages } from "@/utils/languages"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/contexts/language-context"
import { usePathname, useRouter } from "next/navigation"

export function LanguageSelector() {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-auto px-2">
          <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
          {languages.find((lang) => lang.code === currentLanguage)?.name || 'English'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLanguage === lang.code ? "bg-accent" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

