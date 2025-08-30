"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Mail, Phone, Calendar, Menu, X, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"
import { LanguageSelectorMobile } from "@/components/language-selector-mobile"
import { AShapeVideo, AShapeAnimated } from "@/components/a-shape-video"

export function NavbarMobileOptimized() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // Detect language from URL path and sync with i18n
  const isJaPath = pathname.startsWith('/ja/')
  const langPrefix = isJaPath ? '/ja' : ''

  useEffect(() => {
    const targetLang = isJaPath ? 'ja' : 'en'
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang)
    }
  }, [pathname, i18n, isJaPath])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Simple services list for basic dropdown
  const services = [
    { key: "managedItSupport", href: `${langPrefix}/services/it-managed-services` },
    { key: "itConsultingProjectManagement", href: `${langPrefix}/services/it-consulting-project-management` },
    { key: "cloudInfrastructure", href: `${langPrefix}/services/cloud-infrastructure` },
    { key: "cybersecurity", href: `${langPrefix}/services/cybersecurity` },
    { key: "networkPenetrationTesting", href: `${langPrefix}/services/network-penetration-testing` },
    { key: "itSecurity", href: `${langPrefix}/services/it-security` },
    { key: "wifiAssessment", href: `${langPrefix}/services/wifi-assessment` },
    { key: "wifiDesign", href: `${langPrefix}/services/wifi-design` },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Handle escape key and outside clicks
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('[data-services-menu]')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <>
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        {/* Mobile-optimized contact bar */}
        <div className="hidden md:flex justify-end py-2 px-4 lg:px-6 container mx-auto">
          <a href="mailto:support@akrin.jp" className="flex items-center text-sm ml-4 text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] px-2">
            <Mail className="w-4 h-4 mr-2 text-teal-600" />
            <span className="hidden lg:inline">support@akrin.jp</span>
            <span className="lg:hidden">Email</span>
          </a>
          <a href="tel:+81-3-6821-1223" className="flex items-center text-sm ml-4 text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] px-2">
            <Phone className="w-4 h-4 mr-2 text-teal-600" />
            <span className="hidden lg:inline">+81 (0) 3-6821-1223</span>
            <span className="lg:hidden">Call</span>
          </a>
        </div>

        {/* Main navbar - mobile optimized */}
        <div className="flex items-center justify-between py-3 px-4 lg:px-6 container mx-auto">
          <div className="flex items-center">
            <Link href={langPrefix || "/"} className="block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">
              <Image
                src="/akrin-logo.svg"
                alt="Akrin IT Solutions"
                width={160}
                height={50}
                className="h-8 sm:h-10 lg:h-12 w-auto transition-all duration-200"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href={langPrefix || "/"}
                    className="text-base font-semibold hover:text-violet-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-3 py-2"
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li
                  className="relative"
                  data-services-menu
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="text-base font-semibold hover:text-violet-600 transition-colors text-gray-800 flex items-center focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-3 py-2"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === 'services'}
                  >
                    {t('nav.services')}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Desktop services dropdown */}
                  {activeDropdown === 'services' && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[600px] min-w-[320px] bg-white shadow-xl border border-gray-100 rounded-lg z-50 overflow-hidden animate-fade-in"
                      role="menu"
                      aria-label="Services menu"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <Link
                              key={service.key}
                              href={service.href}
                              className="block text-sm text-gray-700 hover:text-violet-600 transition-colors py-3 px-3 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-600"
                              role="menuitem"
                            >
                              {t(`nav.${service.key}`)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href={`${langPrefix}/about`}
                    className="text-base font-semibold hover:text-violet-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-3 py-2"
                  >
                    {t('nav.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-base font-semibold hover:text-violet-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-3 py-2"
                  >
                    {t('nav.blog')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-base font-semibold hover:text-violet-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-3 py-2"
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Language Switcher and Book a Call button */}
            <div className="flex items-center gap-4 ml-6">
              <LanguageSelector />
              <Link 
                href="/book-consultation" 
                className="flex items-center text-white text-sm font-bold bg-violet-600 rounded-full border-2 border-violet-600 py-3 px-8 pl-14 relative hover:bg-violet-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
              >
                <span className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-violet-600" />
                </span>
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button - enhanced */}
          <div className="lg:hidden">
            <button 
              name="menu" 
              type="button" 
              className="flex items-center justify-center bg-purple-600 h-12 w-12 rounded-full border border-purple-600 transition-all duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - full screen overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />
      
      {/* Mobile Menu - slide in panel */}
      <div 
        className={`lg:hidden fixed right-0 top-0 h-full w-full sm:w-[85%] max-w-[400px] bg-purple-600 z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500">
            <Link href={langPrefix || "/"} onClick={toggleMenu}>
              <Image
                src="/akrin-logo.svg"
                alt="Akrin IT Solutions"
                width={120}
                height={40}
                className="h-8 w-auto filter brightness-0 invert"
              />
            </Link>
            <div className="flex items-center gap-4">
              {/* A-shaped video in mobile menu */}
              <AShapeVideo size="small" className="opacity-80" />
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-purple-500 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile menu content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              {/* Language Switcher in Mobile Menu */}
              <div className="mb-6 pb-6 border-b border-purple-500">
                <LanguageSelectorMobile />
              </div>
              
              <ul className="space-y-2">
                <li>
                  <Link 
                    href={langPrefix || "/"} 
                    className="block text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-purple-500 transition-colors"
                    onClick={toggleMenu}
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <button
                    className="w-full flex items-center justify-between text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-purple-500 transition-colors"
                    onClick={() => toggleDropdown('services')}
                  >
                    <span>{t('nav.services')}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="mt-2 ml-4 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.key}
                          href={service.href}
                          className="block text-white/80 text-base py-2 px-4 rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
                          onClick={toggleMenu}
                        >
                          {t(`nav.${service.key}`)}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <Link 
                    href={`${langPrefix}/about`} 
                    className="block text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-purple-500 transition-colors"
                    onClick={toggleMenu}
                  >
                    {t('nav.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="block text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-purple-500 transition-colors"
                    onClick={toggleMenu}
                  >
                    {t('nav.blog')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="block text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-purple-500 transition-colors"
                    onClick={toggleMenu}
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile menu footer */}
          <div className="p-4 border-t border-purple-500">
            {/* Featured A-shaped video */}
            <div className="flex justify-center mb-6">
              <AShapeVideo size="medium" className="opacity-90" />
            </div>
            
            <div className="space-y-3 mb-4">
              <a href="mailto:support@akrin.jp" className="flex items-center text-white/90 hover:text-white">
                <Mail className="w-5 h-5 mr-3" />
                support@akrin.jp
              </a>
              <a href="tel:+81-3-6821-1223" className="flex items-center text-white/90 hover:text-white">
                <Phone className="w-5 h-5 mr-3" />
                +81 (0) 3-6821-1223
              </a>
            </div>
            <div className="space-y-3">
              <Link 
                href="/contact" 
                className="block w-full text-center bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Link 
                href="/book-consultation" 
                className="block w-full text-center bg-purple-700 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-800 transition-colors"
                onClick={toggleMenu}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}