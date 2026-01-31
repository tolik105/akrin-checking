"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import dynamic from "next/dynamic"
import { ClientOnly } from "@/hooks/use-mounted"
import { useTranslation } from "react-i18next"

const IndustryStatsMetrics = dynamic(
  () => import("@/components/ui/industry-stats-metrics").then((m) => m.IndustryStatsMetrics),
  { ssr: false, loading: () => <div className="min-h-[200px] animate-pulse" /> }
)

export function HomeIndustrySection() {
  const { t } = useTranslation("common")

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white max-w-4xl mx-auto">
              {t("homepage.industryExpertiseTitle")}
              <span className="block font-semibold text-[hsl(var(--primary))] mt-2">
                {t("homepage.industryExpertiseHighlight")}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              {t("homepage.industryExpertiseDescription")}
            </p>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <ClientOnly>
                <IndustryStatsMetrics
                  stats={[
                    { industry: t("homepage.industryStats.financialServices"), percentage: "40%" },
                    { industry: t("homepage.industryStats.healthcare"), percentage: "25%" },
                    { industry: t("homepage.industryStats.manufacturing"), percentage: "20%" },
                    { industry: t("homepage.industryStats.technology"), percentage: "15%" },
                  ]}
                  className="w-full"
                />
              </ClientOnly>
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  )
}
