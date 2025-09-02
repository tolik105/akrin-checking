"use client"
import { HeroServicesRow } from "@/components/hero-services-row"
import { VideoHeroMobile } from "@/components/video-hero-mobile"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
const LogosWithBlurFlip = dynamic(() => import("@/components/ui/logos-with-blur-flip").then(m => m.LogosWithBlurFlip), { ssr: false, loading: () => null })
import { IndustryStatsMetrics } from "@/components/ui/industry-stats-metrics"
import { ClientOnly } from "@/hooks/use-mounted"
import { HomeFAQSection } from "@/components/ui/home-faq-section"
import { PremiumCTA } from "@/components/ui/premium-cta"
import { useTranslation } from "react-i18next"
import { HomeCaseStudies } from "@/components/home-case-studies"

export default function HomeClient() {
  const { t } = useTranslation('common')

  return (
    <div className="w-full overflow-x-clip">
      {/* Video hero with white headline (AKRINKK) across all devices */}
      <VideoHeroMobile />

      {/* Content wrapper */}
      <div className="w-full bg-white dark:bg-gray-900">

        {/* Managed services row (no carousel) */}
        <HeroServicesRow />

        {/* Case Studies Section - placed after Services and before Industry band */}
        <HomeCaseStudies />

        {/* Industry Excellence Section - Professional Layout */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white max-w-4xl mx-auto">
                {t('homepage.industryExpertiseTitle')}
                <span className="block font-semibold text-[hsl(var(--primary))] mt-2">{t('homepage.industryExpertiseHighlight')}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                {t('homepage.industryExpertiseDescription')}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <ClientOnly>
                  <IndustryStatsMetrics
                    stats={[
                      { industry: t('homepage.industryStats.financialServices'), percentage: "40%" },
                      { industry: t('homepage.industryStats.healthcare'), percentage: "25%" },
                      { industry: t('homepage.industryStats.manufacturing'), percentage: "20%" },
                      { industry: t('homepage.industryStats.technology'), percentage: "15%" }
                    ]}
                    className="w-full"
                  />
                </ClientOnly>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technology Partners Section - Organized Layout */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <ClientOnly>
              <LogosWithBlurFlip />
            </ClientOnly>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-gray-50 dark:bg-gray-800">
          <ClientOnly>
            <HomeFAQSection />
          </ClientOnly>
        </section>

        {/* Premium CTA Section */}
        <PremiumCTA
          variant="teal"
          title={t('homepage.readyToTransformTitle')}
          description={t('homepage.readyToTransformDescription')}
          buttonText={t('homepage.scheduleConsultationButton')}
          buttonHref="/contact"
        />

        {/* AI-Optimized Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "TechnologyCompany",
                "name": "AKRIN Technology Solutions",
                "alternateName": "AKRIN株式会社",
                "description": "Leading IT solutions provider in Japan specializing in managed services, cybersecurity, cloud migration, and 24/7 technical support. Serving 500+ businesses across Tokyo and Japan with 99.9% uptime guarantee and bilingual support.",
                "url": "https://akrin.jp",
                "logo": "https://akrin.jp/images/logos/akrin-logo.svg",
                "foundingDate": "2010",
                "slogan": "Leading IT Solutions Provider in Tokyo, Japan",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "JP",
                  "addressRegion": "Tokyo",
                  "addressLocality": "Tokyo"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+81-XX-XXXX-XXXX",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Japanese"],
                  "areaServed": "JP"
                },
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "Japan"
                  },
                  {
                    "@type": "City",
                    "name": "Tokyo"
                  }
                ],
                "serviceType": [
                  "IT Managed Services",
                  "Cybersecurity Solutions",
                  "Cloud Migration Services",
                  "IT Consulting and Project Management",
                  "Network Security Assessment",
                  "Bilingual Technical Support"
                ],
                "hasCredential": [
                  "Professional IT Services Team",
                  "Experienced Technical Specialists",
                  "Bilingual Support Capabilities"
                ],
                "numberOfEmployees": "50-100",
                "knowsAbout": [
                  "Enterprise IT Management",
                  "Cybersecurity and Threat Protection",
                  "Cloud Infrastructure",
                  "Network Security",
                  "IT Compliance and Best Practices",
                  "Digital Transformation",
                  "IT Support and Maintenance",
                  "System Administration",
                  "Technical Consulting"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What makes AKRIN a reliable IT services provider in Tokyo?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AKRIN provides reliable IT services in Tokyo with 24/7 bilingual support, experienced technical team, and comprehensive IT solutions for businesses across Japan. We combine technical expertise with local knowledge."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does AKRIN provide cybersecurity services in Japan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, AKRIN provides cybersecurity services in Japan including security monitoring, vulnerability assessments, compliance consulting, and incident response. We help businesses protect their IT infrastructure and data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What IT managed services does AKRIN offer in Tokyo?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AKRIN provides comprehensive IT managed services including network monitoring, server management, cloud infrastructure support, help desk services, backup solutions, and IT consulting for businesses in Tokyo and across Japan."
                    }
                  }
                ]
              }
            ])
          }}
        />

      </div>
    </div>
  )
}