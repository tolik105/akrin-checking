"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"
import { motion, AnimatePresence } from "framer-motion"

export function NavbarMcKinsey() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  // Scroll handler with improved performance
  useEffect(() => {
    let ticking = false
    const updateScrolled = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    return () => window.removeEventListener('scroll', requestTick)
  }, [scrolled])

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  // Handle dropdown hover with delay
  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 100)
  }

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
    setActiveDropdown(null)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [])

  // Service categories with McKinsey-style organization
  const serviceCategories = [
    {
      category: "Core IT Services",
      services: [
        {
          key: "managedItSupport",
          href: `${langPrefix}/services/it-managed-services`,
          description: "24/7 monitoring, maintenance, and support for your IT infrastructure"
        },
        {
          key: "cloudInfrastructure",
          href: `${langPrefix}/services/cloud-infrastructure`,
          description: "Cloud migration, optimization, and management services"
        }
      ]
    },
    {
      category: "Security & Compliance",
      services: [
        {
          key: "cybersecurity",
          href: `${langPrefix}/services/cybersecurity`,
          description: "Comprehensive security solutions to protect your business"
        },
        {
          key: "networkPenetrationTesting",
          href: `${langPrefix}/services/network-penetration-testing`,
          description: "Identify vulnerabilities before attackers do"
        },
        {
          key: "itSecurity",
          href: `${langPrefix}/services/it-security`,
          description: "End-to-end security strategy and implementation"
        }
      ]
    },
    {
      category: "Advisory & Consulting",
      services: [
        {
          key: "itConsultingProjectManagement",
          href: `${langPrefix}/services/it-consulting-project-management`,
          description: "Strategic IT consulting and project delivery"
        }
      ]
    }
  ]

  return (
    <>
      {/* Main Navigation - McKinsey Style */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white border-b border-gray-100'
      }`}>
        <div className="w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link href={langPrefix || "/"} className="flex-shrink-0">
                <Image
                  src="/akrin-logo.svg"
                  alt="AKRIN"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                <Link
                  href={langPrefix || "/"}
                 className="text-gray-800 hover:text-gray-900 font-normal text-[14px] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(var(--primary))] hover:after:w-full after:transition-all after:duration-300"
                >
                  {t('nav.home')}
                </Link>
                
                {/* Services Mega Menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                 <button className="text-gray-800 hover:text-gray-900 font-normal text-[14px] tracking-wide transition-colors duration-200 flex items-center gap-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(var(--primary))] hover:after:w-full after:transition-all after:duration-300">
                    {t('nav.services')}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                       className="absolute top-full left-0 mt-0 w-[900px] bg-white shadow-xl border-t-2 border-[hsl(var(--primary))]"
                        onMouseEnter={() => handleMouseEnter('services')}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="p-8 grid grid-cols-3 gap-8">
                          {serviceCategories.map((category, idx) => (
                            <div key={idx}>
                              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                                {category.category}
                              </h3>
                              <div className="space-y-3">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.key}
                                    href={service.href}
                                    className="group block"
                                  >
                                   <p className="text-[14px] font-medium text-gray-900 group-hover:text-[hsl(var(--primary))] transition-colors duration-200 mb-1">
                                      {t(`nav.${service.key}`)}
                                    </p>
                                    <p className="text-[12px] text-gray-500 leading-relaxed">
                                      {service.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                          <Link
                            href="/services"
                           className="inline-flex items-center text-sm font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
                          >
                            View all services
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href={`${langPrefix}/about`}
                 className="text-gray-800 hover:text-gray-900 font-normal text-[14px] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(var(--primary))] hover:after:w-full after:transition-all after:duration-300"
                >
                  {t('nav.aboutUs')}
                </Link>
                <Link
                  href="/blog"
                 className="text-gray-800 hover:text-gray-900 font-normal text-[14px] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(var(--primary))] hover:after:w-full after:transition-all after:duration-300"
                >
                  {t('nav.blog')}
                </Link>
                <Link
                  href="/contact"
                 className="text-gray-800 hover:text-gray-900 font-normal text-[14px] tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(var(--primary))] hover:after:w-full after:transition-all after:duration-300"
                >
                  {t('nav.contact')}
                </Link>
              </nav>

              {/* Right side actions */}
              <div className="hidden lg:flex items-center space-x-6">
                {/* Search Button */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>

                {/* Language Selector */}
                <LanguageSelector />
                
                {/* CTA Button */}
                <Link
                  href="/book-consultation"
                 className="bg-primary text-primary-foreground px-6 py-2.5 text-[13px] font-medium hover:bg-primary/90 transition-all duration-200 tracking-wide"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar - Expandable */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden border-t border-gray-200"
              >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-4">
                  <div className="relative">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search services, solutions, or insights..."
                     className="w-full px-4 py-3 pr-12 text-gray-900 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))] placeholder:text-gray-400"
                    />
                   <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[hsl(var(--primary))] transition-colors duration-200">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu - Slide-out Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[60] lg:hidden"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Link href={langPrefix || "/"} onClick={closeMenu}>
                    <Image
                      src="/akrin-logo.svg"
                      alt="AKRIN"
                      width={100}
                      height={33}
                      className="h-7 w-auto"
                    />
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-6 py-6">
                  <div className="space-y-6">
                    <Link
                      href={langPrefix || "/"}
                      onClick={closeMenu}
                     className="block text-lg font-medium text-gray-900 hover:text-[hsl(var(--primary))] transition-colors duration-200"
                    >
                      {t('nav.home')}
                    </Link>

                    {/* Mobile Services */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        {t('nav.services')}
                      </h3>
                      <div className="space-y-4 pl-4">
                        {serviceCategories.map((category, idx) => (
                          <div key={idx}>
                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                              {category.category}
                            </h4>
                            <div className="space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.key}
                                  href={service.href}
                                  onClick={closeMenu}
                                  className="block text-gray-600 hover:text-[hsl(var(--primary))] transition-colors duration-200"
                                >
                                  {t(`nav.${service.key}`)}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`${langPrefix}/about`}
                      onClick={closeMenu}
                     className="block text-lg font-medium text-gray-900 hover:text-[hsl(var(--primary))] transition-colors duration-200"
                    >
                      {t('nav.aboutUs')}
                    </Link>
                    
                    <Link
                      href="/blog"
                      onClick={closeMenu}
                     className="block text-lg font-medium text-gray-900 hover:text-[hsl(var(--primary))] transition-colors duration-200"
                    >
                      {t('nav.blog')}
                    </Link>
                    
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                     className="block text-lg font-medium text-gray-900 hover:text-[hsl(var(--primary))] transition-colors duration-200"
                    >
                      {t('nav.contact')}
                    </Link>
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <LanguageSelector />
                  <Link
                    href="/book-consultation"
                    onClick={closeMenu}
                   className="block w-full bg-primary text-primary-foreground py-3 px-4 text-center text-[13px] font-medium hover:bg-primary/90 transition-all duration-200 tracking-wide"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}