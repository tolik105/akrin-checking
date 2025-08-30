"use client"
import { HeroServicesRow } from "@/components/hero-services-row"
import { VideoHeroMobile } from "@/components/video-hero-mobile"

import { motion } from "framer-motion"
import { LogosWithBlurFlip } from "@/components/ui/logos-with-blur-flip"
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

      </div>
    </div>
  )
}