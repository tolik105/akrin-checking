"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"

export function NavbarProfessional() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const originalScrollPosition = useRef(0)
  const overlayRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Enhanced body scroll lock with iOS support
  const lockBodyScroll = useCallback((lock: boolean) => {
    if (typeof window === 'undefined') return;
    
    const body = document.body;
    const html = document.documentElement;
    
    if (lock) {
      // Store current scroll position
      originalScrollPosition.current = window.pageYOffset;
      
      // Lock scroll
      body.style.position = 'fixed';
      body.style.top = `-${originalScrollPosition.current}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.overflow = 'hidden';
      
      // Prevent iOS bounce
      html.style.overflow = 'hidden';
      html.style.position = 'fixed';
      html.style.height = '100%';
      html.style.width = '100%';
    } else {
      // Unlock scroll
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      
      html.style.overflow = '';
      html.style.position = '';
      html.style.height = '';
      html.style.width = '';
      
      // Restore scroll position
      window.scrollTo(0, originalScrollPosition.current);
    }
  }, []);

  useEffect(() => {
    lockBodyScroll(isMenuOpen);
    
    return () => {
      lockBodyScroll(false);
    };
  }, [isMenuOpen, lockBodyScroll]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    setActiveDropdown(null);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((id: string) => {
    setActiveDropdown(prev => prev === id ? null : id);
  }, []);

  const services = [
    { key: "managedItSupport", href: `${langPrefix}/services/it-managed-services` },
    { key: "itConsultingProjectManagement", href: `${langPrefix}/services/it-consulting-project-management` },
    { key: "cloudInfrastructure", href: `${langPrefix}/services/cloud-infrastructure` },
    { key: "cybersecurity", href: `${langPrefix}/services/cybersecurity` },
    { key: "networkPenetrationTesting", href: `${langPrefix}/services/network-penetration-testing` },
    { key: "itSecurity", href: `${langPrefix}/services/it-security` },
  ];

  return (
    <>
      <header className="w-full">
        {/* Top Contact Bar - Mobile Optimized */}
        <div className="bg-gray-50 py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <a href="mailto:support@akrin.jp" className="flex items-center gap-1 sm:gap-2 hover:text-gray-900 transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                <span className="hidden sm:inline">support@akrin.jp</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a href="tel:+81-3-6821-1223" className="flex items-center gap-1 sm:gap-2 hover:text-gray-900 transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                <span className="hidden sm:inline">+81 (0) 3-6821-1223</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
            {/* Language selector on desktop only */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
          </div>
        </div>

        {/* Main Navigation - Mobile Optimized */}
        <div className={`bg-white border-b transition-all duration-300 ${scrolled ? 'shadow-sm' : ''} sticky top-0 z-40`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <Link href={langPrefix || "/"} className="flex-shrink-0">
                <Image
                  src="/akrin-logo.svg"
                  alt="AKRIN IT Solutions"
                  width={140}
                  height={45}
                  className="h-8 sm:h-10 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation - Show on md and larger */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href={langPrefix || "/"}
                 className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors"
                >
                  {t('nav.home')}
                </Link>
                
                <div className="relative group">
                 <button className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors flex items-center gap-1">
                    {t('nav.services')}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.key}
                          href={service.href}
                         className="block px-3 py-2 text-sm text-gray-600 hover:text-[hsl(var(--primary))] hover:bg-gray-50 rounded transition-colors"
                        >
                          {t(`nav.${service.key}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={`${langPrefix}/about`}
                 className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors"
                >
                  {t('nav.aboutUs')}
                </Link>
                <Link
                  href="/blog"
                 className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors"
                >
                  {t('nav.blog')}
                </Link>
                <Link
                  href="/contact"
                 className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors"
                >
                  {t('nav.contact')}
                </Link>
                
                <Link
                  href="/book-consultation"
                 className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium"
                >
                  Book a Call
                </Link>
              </nav>

              {/* Mobile Menu Button - Enhanced for reliability */}
              <button
                onClick={toggleMenu}
                className="md:hidden relative w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 group active:scale-95 touch-manipulation"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                type="button"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-200" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Preline Style */}
      {isMounted && (
        <div 
          ref={overlayRef}
          className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 visible z-[60]' : 'opacity-0 invisible z-[-1]'
          }`} 
          onClick={closeMenu}
          aria-hidden="true"
          style={{ 
            touchAction: 'none',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        />
      )}

      {/* Mobile Menu - Preline Style Design */}
      {isMounted && (
        <div 
          ref={menuRef}
          id="mobile-menu"
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white transform transition-all duration-300 ease-out md:hidden ${
            isMenuOpen ? 'translate-x-0 z-[70] shadow-xl' : 'translate-x-full z-[-1]'
          }`}
          aria-label="Mobile navigation menu"
          role="dialog"
          aria-modal="true"
          style={{ 
            touchAction: 'pan-y',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header - Preline Style */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <Link 
                href={langPrefix || "/"} 
                onClick={closeMenu}
               className="focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] rounded"
              >
                <Image
                  src="/akrin-logo.svg"
                  alt="AKRIN IT Solutions"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <button
                onClick={closeMenu}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close menu"
                type="button"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links - Preline Style */}
            <nav className="flex-1 overflow-y-auto py-6" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="px-6 space-y-1">
                <Link
                  href={langPrefix || "/"}
                  onClick={closeMenu}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  {t('nav.home')}
                </Link>

                {/* Services - Preline Style dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown('services')}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={activeDropdown === 'services'}
                    type="button"
                  >
                    <div className="flex items-center">
                      <svg className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      {t('nav.services')}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeDropdown === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mt-1 ml-7 space-y-1 pb-2">
                      {services.slice(0, 4).map((service, index) => (
                        <Link
                          key={service.key}
                          href={service.href}
                          onClick={closeMenu}
                          className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 rounded transition-colors duration-200"
                          style={{
                            transitionDelay: activeDropdown === 'services' ? `${index * 30}ms` : '0ms'
                          }}
                        >
                          {t(`nav.${service.key}`)}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={closeMenu}
                       className="block px-3 py-1.5 text-sm text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] rounded font-medium transition-colors duration-200"
                        style={{
                          transitionDelay: activeDropdown === 'services' ? '120ms' : '0ms'
                        }}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href={`${langPrefix}/about`}
                  onClick={closeMenu}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {t('nav.aboutUs')}
                </Link>
                
                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z"/>
                  </svg>
                  {t('nav.blog')}
                </Link>
                
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="flex-shrink-0 w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {t('nav.contact')}
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Footer - Preline Style */}
            <div className="px-6 py-4 border-t border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <LanguageSelector />
                </div>
                <Link
                  href="/book-consultation"
                  onClick={closeMenu}
                 className="flex items-center justify-center w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}