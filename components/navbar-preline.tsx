"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Mail, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"

export function NavbarPreline() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
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
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { key: "managedItSupport", href: `${langPrefix}/services/it-managed-services` },
    { key: "itConsultingProjectManagement", href: `${langPrefix}/services/it-consulting-project-management` },
    { key: "cloudInfrastructure", href: `${langPrefix}/services/cloud-infrastructure` },
    { key: "cybersecurity", href: `${langPrefix}/services/cybersecurity` },
    { key: "networkPenetrationTesting", href: `${langPrefix}/services/network-penetration-testing` },
    { key: "itSecurity", href: `${langPrefix}/services/it-security` },
  ]

  return (
    <>
      {/* Top Contact Bar removed globally */}

      {/* Main Navigation */}
      <header className={`flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 ${scrolled ? 'shadow-sm' : ''}`}>
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <Link className="flex-none text-xl font-semibold text-black focus:outline-none focus:opacity-80" href={langPrefix || "/"} aria-label="AKRIN">
              <Image
                src="/akrin-logo.svg"
                alt="AKRIN IT Solutions"
                width={140}
                height={45}
                className="h-8 sm:h-10 w-auto"
                priority
              />
            </Link>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          </div>
          <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <Link className="font-medium text-gray-600 hover:text-gray-400 sm:py-6" href={langPrefix || "/"}>
                {t('nav.home')}
              </Link>
              
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--is-collapse:true] sm:[--is-collapse:false]">
                <button id="hs-mega-menu-basic-dr" type="button" className="hs-dropdown-toggle flex items-center w-full text-gray-600 hover:text-gray-400 font-medium">
                  {t('nav.services')}
                  <svg className="hs-dropdown-open:rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-80 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 sm:border border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.key}
                        className="flex gap-x-3 md:gap-x-4 hover:bg-gray-100 rounded-lg p-2"
                        href={service.href}
                      >
                        <div className="grow">
                          <p className="text-sm text-gray-800 font-semibold">
                            {t(`nav.${service.key}`)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link className="font-medium text-gray-600 hover:text-gray-400 sm:py-6" href={`${langPrefix}/about`}>
                {t('nav.aboutUs')}
              </Link>
              <Link className="font-medium text-gray-600 hover:text-gray-400 sm:py-6" href="/blog">
                {t('nav.blog')}
              </Link>
              <Link className="font-medium text-gray-600 hover:text-gray-400 sm:py-6" href="/contact">
                {t('nav.contact')}
              </Link>
              
              <div className="py-2 sm:py-0">
                <LanguageSelector />
              </div>

              <Link className="flex items-center gap-x-2 py-2 px-3 bg-primary text-primary-foreground text-sm rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none" href="/book-consultation">
                Book a Call
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}