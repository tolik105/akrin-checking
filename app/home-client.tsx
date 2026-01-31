"use client"
import dynamic from "next/dynamic"
import { ClientOnly } from "@/hooks/use-mounted"
import { useTranslation } from "react-i18next"

// Dynamic imports for below-fold components to reduce initial bundle
const HeroServicesRow = dynamic(() => import("@/components/hero-services-row").then(m => m.HeroServicesRow), {
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />
})
const HomeCaseStudies = dynamic(() => import("@/components/home-case-studies").then(m => m.HomeCaseStudies), {
  loading: () => <div className="min-h-[300px] bg-gray-50 animate-pulse" />
})
const HomeIndustrySection = dynamic(
  () => import("@/components/home-industry-section").then(m => m.HomeIndustrySection),
  { ssr: false, loading: () => <div className="min-h-[300px] bg-gray-50 animate-pulse" /> }
)
const LogosWithBlurFlip = dynamic(() => import("@/components/ui/logos-with-blur-flip").then(m => m.LogosWithBlurFlip), {
  ssr: false,
  loading: () => null
})
const HomeFAQSection = dynamic(() => import("@/components/ui/home-faq-section").then(m => m.HomeFAQSection), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})
const PremiumCTA = dynamic(() => import("@/components/ui/premium-cta").then(m => m.PremiumCTA), {
  loading: () => <div className="min-h-[200px] bg-teal-600 animate-pulse" />
})

export default function HomeClient() {
  const { t } = useTranslation('common')

  return (
    <div className="w-full overflow-x-clip">
      {/* Content wrapper */}
      <div className="w-full bg-white dark:bg-gray-900">

        {/* Managed services row (no carousel) */}
        <div style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
          <HeroServicesRow />
        </div>

        {/* Case Studies Section - placed after Services and before Industry band */}
        <div style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
          <HomeCaseStudies />
        </div>

        {/* Industry Excellence Section - Professional Layout */}
        <div style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}>
          <HomeIndustrySection />
        </div>

        {/* Technology Partners Section - Organized Layout */}
        <div style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
          <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <ClientOnly>
                <LogosWithBlurFlip />
              </ClientOnly>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <div style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
          <section className="w-full bg-gray-50 dark:bg-gray-800">
            <ClientOnly>
              <HomeFAQSection />
            </ClientOnly>
          </section>
        </div>

        {/* Premium CTA Section */}
        <div style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}>
          <PremiumCTA
            variant="teal"
            title={t('homepage.readyToTransformTitle')}
            description={t('homepage.readyToTransformDescription')}
            buttonText={t('homepage.scheduleConsultationButton')}
            buttonHref="/contact"
          />
        </div>

{/* Structured data is generated in parent page.tsx to avoid duplication */}

      </div>
    </div>
  )
}