"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { PartnerWithUsSection } from "@/components/ui/partner-with-us-section"
import { PremiumCTA } from "@/components/ui/premium-cta"

export default function ServicesClient() {
  const pathname = usePathname()
  const isJapanese = pathname?.startsWith('/ja')
  
  // Localized content for H1 and description (SEO fix for duplicate H1 tags)
  const content = {
    h1: isJapanese ? 'プロフェッショナルITサービス' : 'Professional IT Services',
    description: isJapanese 
      ? '日本および世界中の企業向けに設計された、堅牢でスケーラブルかつ安全なソリューション。下記のコアサービスをご覧ください。'
      : 'Robust, scalable, and secure solutions designed for enterprises in Japan and worldwide. Explore our core offerings below.',
    featuresTitle: isJapanese ? '総合ITサービス' : 'Comprehensive IT Services',
    featuresDescription: isJapanese
      ? '当社のエキスパートがビジネスクリティカルなネットワーク運用、セキュリティ、クラウドをエンドツーエンドで管理します。'
      : 'Our experts handle business-critical network operations, security, and cloud—end to end.',
    ctaTitle: isJapanese ? 'IT運用の最適化をお考えですか？' : 'Ready to optimize your IT operations?',
    ctaDescription: isJapanese
      ? 'ワイヤレスネットワーク設計からグローバルIT展開まで、セキュリティ強化と効率化を実現するカスタマイズソリューションを提供します。'
      : 'From wireless network design to global IT deployments, our services are tailored to enhance security and drive efficiency.',
    ctaButton: isJapanese ? '今すぐ始める' : 'Get Started Today',
  }

  // AKRIN Services - ONLY existing services
  const services = [
    {
      title: "Managed IT Support",
      description: "Complete IT management and support for your business operations with 24/7 monitoring and proactive maintenance.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60",
      href: "/services/it-managed-services",
      buttonText: "Managed IT Support"
    },
    {
      title: "IT Consulting & Project Management",
      description: "Strategy, PMO, and delivery for complex IT initiatives to drive your business forward.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60",
      href: "/services/it-consulting-project-management",
      buttonText: "Consulting & PMO"
    },
    {
      title: "Cloud Infrastructure Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses with Azure, AWS, and GCP expertise.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60",
      href: "/services/cloud-infrastructure",
      buttonText: "Cloud Infrastructure"
    },
    {
      title: "Cybersecurity & IT Security",
      description: "Advanced security measures to protect your digital assets from cyber threats with comprehensive protection.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60",
      href: "/services/it-security",
      buttonText: "Cybersecurity"
    },
    {
      title: "Network Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities and strengthen your network defenses.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60",
      href: "/services/network-penetration-testing",
      buttonText: "Penetration Testing"
    },
    {
      title: "IT Security Services",
      description: "Shield endpoints, email, and data with AKRIN's layered IT security—EDR, M365 security, backup, and policy enforcement.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60",
      href: "/services/it-security",
      buttonText: "IT Security"
    }
  ]

  return (
    <div className="bg-white">
      {/* Professional Header */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900"
              >
                {content.h1}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-gray-600 text-base lg:text-lg max-w-2xl"
              >
                {content.description}
              </motion.p>
              <nav className="mt-6 flex flex-wrap gap-2" aria-label="Quick links">
                {services.slice(0, 4).map((s) => (
                  <Link key={s.href} href={s.href} className="px-3 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800">
                    {s.buttonText}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="relative hidden md:block">
              <div className="relative aspect-[12/8] rounded-xl overflow-hidden">
                <Image
                  src="/images/banners/it-managed-services/banner.avif"
                  alt="AKRIN professional IT services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 600px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colorful Services Grid - optimized */}
      <main aria-labelledby="services-heading" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 id="services-heading" className="sr-only">Our Services</h2>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Service categories">
          {services.map((service, index) => (
            <article
              key={service.href}
              className="group relative block rounded-xl overflow-hidden border border-gray-100 bg-white"
            >
              <div className={`relative overflow-hidden rounded-b-none ${
                index === 0 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                index === 2 ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
                index === 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                index === 4 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                'bg-gradient-to-br from-green-400 to-green-600'
              } aspect-[12/7] sm:aspect-[12/8] lg:aspect-[12/9]`}
              >
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out absolute top-0 start-0 object-cover opacity-85"
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="auto"
                  quality={60}
                />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  <Link href={service.href} className="hover:text-[hsl(var(--primary))]">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {service.description.length > 140 ? service.description.substring(0, 140) + '…' : service.description}
                </p>
                <div className="mt-4">
                  <Link 
                    className="inline-flex items-center gap-x-2 text-sm font-medium text-[hsl(var(--primary))] hover:underline"
                    href={service.href}
                    aria-label={`Read more about ${service.title}`}
                  >
                    {service.buttonText}
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Services Features Grid - SEO-friendly */}
      <section aria-labelledby="features-heading" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 id="features-heading" className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">{content.featuresTitle}</h2>
          <p className="mt-1 text-gray-600">{content.featuresDescription}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.href} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/11] rounded-t-xl overflow-hidden">
                <Image
                  className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="auto"
                  quality={60}
                />
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link href={service.href} className="hover:text-[hsl(var(--primary))]">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-gray-500 flex-1">
                  {service.description}
                </p>
                <div className="mt-5">
                  <Link 
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-[hsl(var(--primary))] hover:underline"
                    href={service.href}
                  >
                    {service.buttonText}
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Premium CTA Section */}
      <PremiumCTA
        variant="dark"
        title={content.ctaTitle}
        description={content.ctaDescription}
        buttonText={content.ctaButton}
        buttonHref={isJapanese ? "/ja/contact" : "/contact"}
      />

      {/* Partner With Us Section */}
      <PartnerWithUsSection />
    </div>
  )
}