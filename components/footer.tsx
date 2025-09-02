"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { ClientOnly } from "@/hooks/use-mounted"

import { EmailIcon, LinkedInIcon, TwitterIcon } from "@/components/icons/social"

// Custom sophisticated footer icons
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M2 6L12 13L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="13" r="2" fill="currentColor" opacity="0.5"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" 
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="17" cy="7" r="1.5" fill="currentColor" opacity="0.6"/>
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="12" cy="9" r="1" fill="currentColor" opacity="0.8"/>
  </svg>
)



const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="13" r="2" fill="currentColor" opacity="0.3"/>
  </svg>
)

export function Footer() {
  const { t } = useTranslation('common')
  return (
    <footer className="relative bg-white text-gray-900 mt-auto overflow-hidden border-t border-gray-100/80">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>

      <div className="relative z-10 max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 font-inter">
        {/* Logo and Social Icons Row - responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-responsive-lg gap-responsive-sm">
          <Link href="/" className="inline-block group">
            <Image
              src="/akrin-logo.svg"
              alt="Akrin IT Solutions - Professional IT Services in Japan"
              width={120}
              height={48}
              className="object-contain transition-opacity group-hover:opacity-80 h-6 sm:h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-responsive-sm">
            <motion.a
              href="https://www.linkedin.com/company/akrin-kk"
              className="text-gray-600/80 hover:text-gray-900 transition-all duration-300 p-1 group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 group-hover:text-gray-900 transition-colors">
                <LinkedInIcon />
              </div>
            </motion.a>
            <motion.a
              href="https://twitter.com/akrin_kk"
              className="text-gray-600/80 hover:text-gray-900 transition-all duration-300 p-1 group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 group-hover:text-gray-900 transition-colors">
                <TwitterIcon />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Main footer content - 4 columns: Company, Services, Resources, Contact */}
        <ClientOnly fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16 antialiased">
            <div className="">
              <h3 className="text-base font-bold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-1.5 text-sm font-medium">
                <li><Link href="/about" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Contact</Link></li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-base font-bold text-gray-900 mb-3">Services</h3>
              <ul className="space-y-1.5 text-sm font-medium">
                <li><Link href="/services/it-managed-services" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Managed IT Support</Link></li>
                <li><Link href="/services/cloud-infrastructure" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Cloud Infrastructure</Link></li>
                <li><Link href="/services/cybersecurity" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Cybersecurity</Link></li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-base font-bold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-1.5 text-sm font-medium">
                <li><Link href="/services" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Services</Link></li>
                <li><Link href="/blog" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Blog</Link></li>
                <li><Link href="/privacy" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-900 mb-3">Contact Info</h3>
              <div className="flex items-start gap-3 text-sm text-gray-700/90">
                <div className="w-5 h-5 text-gray-700"><LocationIcon /></div>
                <div>
                  <p>〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15</p>
                  <a href="https://share.google/q4RmURkp1eOTFtFUN" target="_blank" rel="noopener noreferrer" className="text-gray-700/90 hover:text-gray-900">View on map</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700/90">
                <div className="w-5 h-5 text-gray-700"><EmailIcon /></div>
                <a href="mailto:support@akrin.jp" className="hover:text-gray-900">support@akrin.jp</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700/90">
                <div className="w-5 h-5 text-gray-700"><PhoneIcon /></div>
                <a href="tel:+81-3-6821-1223" className="hover:text-gray-900">+81-3-6821-1223</a>
              </div>
            </div>
          </div>
        }>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16 antialiased">
          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="">
            <h3 className="text-base font-bold text-gray-900 mb-3">{t('footer.company', { defaultValue: 'Company' })}</h3>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <Link href="/about" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">
                  {t('nav.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.blog')}</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.contact')}</Link>
              </li>
            </ul>
          </motion.div>
          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="">
            <h3 className="text-base font-bold text-gray-900 mb-3">{t('nav.services')}</h3>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <Link href="/services/it-managed-services" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.managedItSupport')}</Link>
              </li>
              <li>
                <Link href="/services/cloud-infrastructure" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.cloudInfrastructure')}</Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.cybersecurity')}</Link>
              </li>
              <li>
                <Link href="/services/it-consulting-project-management" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.itConsultingProjectManagement')}</Link>
              </li>
              <li>
                <Link href="/services/wifi-assessment" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.wifiAssessment')}</Link>
              </li>
              <li>
                <Link href="/services/wifi-design" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.wifiDesign')}</Link>
              </li>
              <li>
                <Link href="/services/itad-japan-apac-us" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">ITAD (Japan/APAC/US)</Link>
              </li>
            </ul>
          </motion.div>
          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="">
            <h3 className="text-base font-bold text-gray-900 mb-3">{t('footer.quickLinks')}</h3>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <Link href="/services" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.services')}</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('nav.blog')}</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('footer.privacyPolicy')}</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-700/90 hover:text-gray-900 transition-colors duration-300 py-1 block focus:outline-none focus:ring-2 focus:ring-violet-600 rounded">{t('footer.termsOfService')}</Link>
              </li>
            </ul>
          </motion.div>
          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-base font-bold text-gray-900 mb-3">{t('footer.contactInfo')}</h3>
            <div className="flex items-start gap-3 text-sm text-gray-700/90">
              <div className="w-5 h-5 text-gray-700"><LocationIcon /></div>
              <div>
                <p>{t('contact.info.addressText')}</p>
                <a href="https://share.google/q4RmURkp1eOTFtFUN" target="_blank" rel="noopener noreferrer" className="text-gray-700/90 hover:text-gray-900">{t('footer.viewOnMap', { defaultValue: 'View on map' })}</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700/90">
              <div className="w-5 h-5 text-gray-700"><EmailIcon /></div>
              <a href="mailto:support@akrin.jp" className="hover:text-gray-900">support@akrin.jp</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700/90">
              <div className="w-5 h-5 text-gray-700"><PhoneIcon /></div>
              <a href="tel:+81-3-6821-1223" className="hover:text-gray-900">+81-3-6821-1223</a>
            </div>
          </motion.div>
        </motion.div>
        </ClientOnly>

        {/* Bottom copyright bar - responsive */}
        <ClientOnly fallback={
          <div className="pt-6 sm:pt-8 border-t border-gray-200/80">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm text-gray-700/90 text-center sm:text-left font-medium">
                Copyright © {new Date().getFullYear()} AKRIN株式会社. All rights reserved.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <Link href="/privacy" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-1">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-1">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        }>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-6 sm:pt-8 border-t border-gray-200/80">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-700/90 text-center sm:text-left font-medium">
              Copyright © {new Date().getFullYear()} AKRIN株式会社. {t('footer.allRightsReserved')}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-1">
                {t('footer.privacyPolicy')}
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 rounded px-1">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </motion.div>
        </ClientOnly>
      </div>
    </footer>
  )
}