"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Mail, Phone, Calendar } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"

export function Navbar() {
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
    { key: "itad", href: `${langPrefix}/services/itad-japan-apac-us` },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Handle escape key and outside clicks
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
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
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      {/* Top contact bar removed globally */}

      {/* Main navbar - responsive */}
      <div className="flex items-center justify-between py-responsive-sm container relative">
        <div className="flex items-center">
          <Link href={langPrefix || "/"} className="block focus:outline-none focus:ring-2 focus:ring-teal-600 rounded">
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
        
        {/* Desktop Navigation - responsive */}
        <div className="hidden md:flex items-center">
          <nav>
            <ul className="flex items-center gap-responsive-sm">
              <li>
                <Link
                  href={langPrefix || "/"}
                  className="text-sm xl:text-base font-semibold hover:text-teal-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-2 py-1"
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
                  className="text-sm xl:text-base font-semibold hover:text-teal-600 transition-colors text-gray-800 flex items-center focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-2 py-1"
                  aria-haspopup="menu"
                  aria-expanded={activeDropdown === 'services'}
                >
                  {t('nav.services')}
                  <svg className="ml-1 h-3 w-3 xl:h-4 xl:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Responsive services dropdown */}
                {activeDropdown === 'services' && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-[95vw] max-w-[600px] min-w-[320px] bg-white shadow-xl border border-gray-100 rounded-lg z-50 overflow-hidden animate-fade-in"
                    role="menu"
                    aria-label="Services menu"
                  >
                    <div className="p-responsive-md">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-responsive-sm">
                        {/* Left Column */}
                        <div className="space-y-1 lg:space-y-2">
                          <Link
                            href={`${langPrefix}/services/it-managed-services`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2 px-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            role="menuitem"
                          >
                            {t('nav.managedItSupport')}
                          </Link>
                          <Link
                            href={`${langPrefix}/services/cloud-infrastructure`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2"
                            role="menuitem"
                          >
                            {t('nav.cloudInfrastructure')}
                          </Link>
                          <Link
                            href={`${langPrefix}/services/network-penetration-testing`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2"
                            role="menuitem"
                          >
                            {t('nav.networkPenetrationTesting')}
                          </Link>
                          <Link
                            href={`${langPrefix}/services/wifi-design`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2"
                            role="menuitem"
                          >
                            {t('nav.wifiDesign')}
                          </Link>
                        </div>
                        
                        {/* Right Column */}
                        <div className="space-y-1 lg:space-y-2">
                          <Link
                            href={`${langPrefix}/services/it-consulting-project-management`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2 px-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            role="menuitem"
                          >
                            {t('nav.itConsultingProjectManagement')}
                          </Link>
                          <Link
                            href={`${langPrefix}/services/cybersecurity`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2"
                            role="menuitem"
                          >
                            {t('nav.cybersecurity')}
                          </Link>
                          <Link
                            href={`${langPrefix}/services/wifi-assessment`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2"
                            role="menuitem"
                          >
                            {t('nav.wifiAssessment')}
                          </Link>
                          <Link
                            href={`${langPrefix}/services/it-security`}
                            className="block text-sm text-gray-700 hover:text-teal-600 transition-colors py-2"
                            role="menuitem"
                          >
                            {t('nav.itSecurity')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href={`${langPrefix}/about`}
                  className="text-sm xl:text-base font-semibold hover:text-teal-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-2 py-1"
                >
                  {t('nav.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`${langPrefix}/case-studies`}
                  className="text-sm xl:text-base font-semibold hover:text-teal-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-2 py-1"
                >
                  {t('nav.caseStudies')}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm xl:text-base font-semibold hover:text-teal-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-2 py-1"
                >
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm xl:text-base font-semibold hover:text-teal-600 transition-colors text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded px-2 py-1"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Language Switcher and Book a Call button - responsive */}
          <div className="flex items-center gap-responsive-sm ml-4">
            <LanguageSelector />
            <Link href="/book-consultation" className="flex items-center text-white text-xs xl:text-sm font-bold bg-teal-600 rounded-full border-2 border-teal-600 py-2 xl:py-3 px-4 md:px-6 xl:px-8 pl-8 md:pl-10 xl:pl-14 relative hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 whitespace-nowrap">
              {t('nav.bookConsultation')}
            </Link>
          </div>
        </div>
        
        {/* Mobile menu button - responsive */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none focus:ring-2 focus:ring-teal-600 rounded">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - responsive */}
      {isMenuOpen && (
       <div className="md:hidden fixed inset-0 bg-[hsl(var(--primary))] pt-[100px] sm:pt-[115px] z-40 overflow-auto animate-fade-in">
          <div className="flex flex-col h-full justify-between w-full mx-auto pb-responsive-md px-responsive-md">
            <ul className="list-none mb-responsive-md pl-0">
              <li className="text-xl sm:text-2xl font-bold flex justify-between items-center pb-responsive-sm">
                <Link href={langPrefix || "/"} className="text-white text-xl sm:text-2xl block focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
              </li>
              <li className="text-xl sm:text-2xl font-bold flex justify-between items-center pb-responsive-sm">
                <span className="text-white text-xl sm:text-2xl block">{t('nav.services')}</span>
                <button
                  className="font-normal bg-transparent block text-center align-middle border p-0 rounded-md border-solid border-transparent focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => toggleDropdown('services')}
                  aria-label="Toggle services menu"
                >
                 <span className="inline-block h-8 w-8 sm:h-9 sm:w-9 p-2 rounded-full border-2 border-solid border-white text-white hover:bg-white hover:text-[hsl(var(--primary))] transition-colors">
                    {activeDropdown === 'services' ? '−' : '+'}
                  </span>
                </button>
              </li>
              {activeDropdown === 'services' && (
                <li className="pb-responsive-sm animate-slide-up">
                  <div className="pl-responsive-md space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.key}
                        href={service.href}
                        className="block text-white/80 text-sm sm:text-base hover:text-white transition-colors py-2 px-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(`nav.${service.key}`)}
                      </Link>
                    ))}
                  </div>
                </li>
              )}
              <li className="text-xl sm:text-2xl font-bold flex justify-between items-center pb-responsive-sm">
                <Link href={`${langPrefix}/about`} className="text-white text-xl sm:text-2xl block focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>{t('nav.aboutUs')}</Link>
              </li>
              <li className="text-xl sm:text-2xl font-bold flex justify-between items-center pb-responsive-sm">
                <Link href={`${langPrefix}/case-studies`} className="text-white text-xl sm:text-2xl block focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>{t('nav.caseStudies')}</Link>
              </li>
              <li className="text-xl sm:text-2xl font-bold flex justify-between items-center pb-responsive-sm">
                <Link href="/blog" className="text-white text-xl sm:text-2xl block focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>{t('nav.blog')}</Link>
              </li>
              <li className="text-xl sm:text-2xl font-bold flex justify-between items-center pb-responsive-sm">
                <Link href="/contact" className="text-white text-xl sm:text-2xl block focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
              </li>
            </ul>
            <div>
              <ul className="list-none mb-6 pl-0">
                <li className="mb-3">
                  <a href="mailto:support@akrin.jp" className="text-white flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    support@akrin.jp
                  </a>
                </li>
                <li className="mb-3">
                  <a href="tel:+81-3-6821-1223" className="text-white flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    +81 (0) 3-6821-1223
                  </a>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                <Link href="/contact" className="relative text-black text-sm font-bold items-center bg-white flex justify-center leading-[18.2px] text-center w-full pl-[60px] pr-[30px] py-[15px] rounded-[4472.99px] border-2 border-solid border-white">
                  <span className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black w-10 h-10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </span>
                  {t('common.contactUs')}
                </Link>
                <Link href="/book-consultation" className="relative text-black text-sm font-bold items-center bg-white flex justify-center leading-[18.2px] text-center w-full pl-[60px] pr-[30px] py-[15px] rounded-[4472.99px] border-2 border-solid border-white">
                  <span className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black w-10 h-10 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </span>
                  {t('nav.bookConsultation')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
