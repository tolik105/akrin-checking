"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"
import { motion, AnimatePresence } from "framer-motion"

export function NavbarMcKinseyDark() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Detect language from URL path and sync with i18n
  const isJaPath = pathname.startsWith('/ja/')
  const langPrefix = isJaPath ? '/ja' : ''

  // Handle mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const targetLang = isJaPath ? 'ja' : 'en'
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang)
    }
  }, [pathname, i18n, isJaPath])

  // Body scroll lock when overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* McKinsey-style Dark Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Left: Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center-Left: AKRIN Logo */}
            <Link href={langPrefix || "/"} className="text-white text-lg sm:text-xl font-light tracking-wide">
              AKRIN
              <span className="text-white/60 font-light ml-1 hidden sm:inline">& Company</span>
            </Link>

            {/* Center: Desktop Navigation Items */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href={`${langPrefix}/services`}
                className="text-white/90 hover:text-white text-sm font-light transition-colors duration-200"
              >
                {t('nav.services')} ▼
              </Link>
              <Link
                href={`${langPrefix}/about`}
                className="text-white/90 hover:text-white text-sm font-light transition-colors duration-200"
              >
                {t('nav.aboutUs')}
              </Link>
              <Link
                href="/blog"
                className="text-white/90 hover:text-white text-sm font-light transition-colors duration-200"
              >
                {t('nav.blog')}
              </Link>
            </nav>

            {/* Right: Sign In, Language, Search */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link
                href="/contact"
                className="hidden lg:block text-white/90 hover:text-white text-sm font-light transition-colors duration-200"
              >
                Sign In
              </Link>
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>
              <button
                className="text-white/90 hover:text-white transition-colors duration-200 p-2"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
          >
            <div className="h-full flex flex-col">
            
            {/* Overlay Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
              <Link href={langPrefix || "/"} onClick={closeMenu} className="text-white text-lg sm:text-xl font-light tracking-wide">
                AKRIN
                <span className="text-white/60 font-light ml-1">& Company</span>
              </Link>
              <button
                onClick={closeMenu}
                className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 sm:p-6 border-b border-white/10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition-colors duration-200 text-sm sm:text-base"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 p-4 sm:p-6">
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <button className="flex items-center justify-between w-full text-left text-white text-xl sm:text-2xl font-light mb-3 sm:mb-4 hover:text-gray-300 transition-colors duration-200">
                    {t('nav.services')}
                    <span className="text-white/60">→</span>
                  </button>
                  <div className="pl-6 space-y-3 text-white/80">
                    <Link href={`${langPrefix}/services/it-managed-services`} onClick={closeMenu} className="block hover:text-white transition-colors duration-200">
                      {t('nav.managedItSupport')}
                    </Link>
                    <Link href={`${langPrefix}/services/cybersecurity`} onClick={closeMenu} className="block hover:text-white transition-colors duration-200">
                      {t('nav.cybersecurity')}
                    </Link>
                    <Link href={`${langPrefix}/services/cloud-infrastructure`} onClick={closeMenu} className="block hover:text-white transition-colors duration-200">
                      {t('nav.cloudInfrastructure')}
                    </Link>
                    <Link href={`${langPrefix}/services/it-consulting-project-management`} onClick={closeMenu} className="block hover:text-white transition-colors duration-200">
                      {t('nav.itConsultingProjectManagement')}
                    </Link>
                  </div>
                </motion.div>

                {/* Other Navigation Items */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <Link href={`${langPrefix}/about`} onClick={closeMenu} className="flex items-center justify-between text-white text-xl sm:text-2xl font-light hover:text-gray-300 transition-colors duration-200">
                    {t('nav.aboutUs')}
                    <span className="text-white/60">→</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Link href="/blog" onClick={closeMenu} className="flex items-center justify-between text-white text-xl sm:text-2xl font-light hover:text-gray-300 transition-colors duration-200">
                    {t('nav.blog')}
                    <span className="text-white/60">→</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Link href="/contact" onClick={closeMenu} className="flex items-center justify-between text-white text-xl sm:text-2xl font-light hover:text-gray-300 transition-colors duration-200">
                    {t('nav.contact')}
                    <span className="text-white/60">→</span>
                  </Link>
                </motion.div>

              </motion.nav>
            </div>

            {/* Overlay Footer */}
            <div className="p-4 sm:p-6 border-t border-white/20">
              <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <LanguageSelector />
                  <Link href="/contact" onClick={closeMenu} className="text-white/80 hover:text-white text-sm transition-colors duration-200">
                    Sign In
                  </Link>
                </div>
                <Link
                  href="/book-consultation"
                  onClick={closeMenu}
                  className="bg-white text-black px-6 py-3 sm:py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200 text-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}