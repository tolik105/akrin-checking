"use client"

import React, { useState } from "react"
import Script from "next/script"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import CapabilityCards from "@/components/CapabilityCards"
import { HeroDiagonal } from "@/components/hero-diagonal"
import Image from "next/image"


const MobileFriendlyFAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-3 sm:py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-3 sm:mr-4 mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0">
          <svg
            className={cn(
              "absolute inset-0 h-full w-full transform text-[#20B2AA] transition-all duration-200",
              isOpen && "rotate-90 scale-0",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <svg
            className={cn(
              "absolute inset-0 h-full w-full rotate-90 scale-0 transform text-[#20B2AA] transition-all duration-200",
              isOpen && "rotate-0 scale-100",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-medium text-neutral-700 leading-tight">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-600 mt-2 sm:mt-3"
              >
                <p className="text-sm sm:text-base leading-relaxed">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function WiFiAssessmentClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const accordionItems = [
    {
      title: "Site Survey & RF Analysis",
      body: "Comprehensive wireless site surveys including RF spectrum analysis, signal strength mapping, and interference identification to optimize wireless network performance."
    },
    {
      title: "Coverage & Capacity Planning",
      body: "Detailed analysis of wireless coverage areas, capacity requirements, and user density planning to ensure optimal performance across all locations."
    },
    {
      title: "Interference Detection & Mitigation",
      body: "Identification of RF interference sources, channel conflicts, and environmental factors affecting wireless performance with detailed remediation recommendations."
    },
    {
      title: "Security Assessment",
      body: "Wireless security evaluation including encryption analysis, rogue access point detection, and security policy assessment to ensure network protection."
    },
    {
      title: "Performance Optimization",
      body: "Network performance analysis, throughput testing, and optimization recommendations to maximize wireless network efficiency and user experience."
    },
    {
      title: "Compliance & Standards Review",
      body: "Assessment of wireless network compliance with industry standards, regulatory requirements, and best practices for enterprise wireless deployments."
    }
  ]

  const faqItems = [
    {
      q: "How long does a WiFi assessment take?",
      a: "Assessment duration varies based on facility size and complexity, typically ranging from 1-3 days for standard offices to 1-2 weeks for large enterprise environments."
    },
    {
      q: "What equipment do you use for assessments?",
      a: "We use professional-grade spectrum analyzers, wireless survey tools, and enterprise testing equipment to provide accurate and comprehensive assessments."
    },
    {
      q: "Do you provide detailed reports?",
      a: "Yes, we provide comprehensive reports including heat maps, coverage analysis, performance metrics, and detailed recommendations for improvements."
    },
    {
      q: "Can you assess existing wireless networks?",
      a: "Yes, we assess both existing wireless networks for optimization and new environments for wireless network planning and design."
    },
    {
      q: "What types of facilities do you assess?",
      a: "We assess all types of facilities including offices, warehouses, manufacturing plants, retail spaces, healthcare facilities, and educational institutions."
    },
    {
      q: "Do you identify security vulnerabilities?",
      a: "Yes, our assessments include wireless security evaluation, rogue access point detection, and identification of potential security risks."
    },
    {
      q: "Can you help with regulatory compliance?",
      a: "Yes, we ensure wireless networks comply with local regulations, industry standards, and best practices for your specific environment and use case."
    },
    {
      q: "Do you provide implementation support?",
      a: "Yes, we can provide implementation support and project management services to help deploy the recommended wireless network improvements."
    }
  ]

  const AssessmentIcon = ({ index }: { index: number }) => {
    const common = "h-12 w-12 md:h-14 md:w-14"
    switch (index) {
      case 0: // Site Survey & RF Analysis
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common} strokeWidth="1.5">
            <path d="M3 12c4-4 14-4 18 0" strokeLinecap="round"/>
            <path d="M5 15c3-3 11-3 14 0" strokeLinecap="round"/>
            <path d="M8 18c2-2 6-2 8 0" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="1.5"/>
          </svg>
        )
      case 1: // Coverage & Capacity Planning
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common} strokeWidth="1.5">
            <path d="M12 20v-6M6 20v-4M18 20v-8" strokeLinecap="round"/>
            <path d="M3 8h18M3 12h18M3 16h18" strokeLinecap="round" opacity=".7"/>
          </svg>
        )
      case 2: // Interference Detection
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common} strokeWidth="1.5">
            <path d="M4 12h4M16 12h4" strokeLinecap="round"/>
            <path d="M2 6l6 6-6 6M22 6l-6 6 6 6" strokeLinecap="round"/>
          </svg>
        )
      case 3: // Security Assessment
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common} strokeWidth="1.5">
            <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"/>
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 4: // Performance Optimization
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common} strokeWidth="1.5">
            <circle cx="12" cy="12" r="8"/>
            <path d="M12 12l4-3" strokeLinecap="round"/>
            <path d="M7 9a8 8 0 0110 0" opacity=".6"/>
          </svg>
        )
      default: // Compliance & Standards Review
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common} strokeWidth="1.5">
            <rect x="4" y="3" width="16" height="18" rx="2"/>
            <path d="M8 7h8M8 11h8M8 15h5" strokeLinecap="round"/>
          </svg>
        )
    }
  }

  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE', { cookie_domain: 'akrin.jp' });
        `}
      </Script>

      <div className="bg-white font-sans">
        {/* Breadcrumb removed */}

        {/* Standardized Hero Section (HeroDiagonal) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              Wi‑Fi Assessment<br />
              & Optimization
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/services' },
              { label: 'Wi‑Fi Assessment' }
            ]}
            imageSrc="/images/banners/wifi-assessment/survey.avif"
            imageAlt="Wi‑Fi Assessment"
          />
        </section>

        {/* Section 1 - Why it matters */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">Why Wi‑Fi Assessment<br />Matters</h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">Poor wireless performance can significantly impact productivity, user experience, and business operations. Professional Wi‑Fi assessment identifies coverage gaps, interference issues, and optimization opportunities to ensure your wireless network delivers reliable, high‑performance connectivity.</p>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">Our comprehensive assessment approach combines advanced RF analysis, site surveys, and performance testing to provide detailed insights and actionable recommendations for optimizing your wireless infrastructure.</p>
                <div className="space-y-3 sm:space-y-4">
                  {accordionItems.slice(0,4).map((it, idx) => (
                    <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">{it.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/images/banners/wifi-assessment/survey.avif"
                  alt="Wi‑Fi Assessment"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Partner */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                <Image
                  src="/images/banners/cloud-infrastructure/banner.avif"
                  alt="Wi‑Fi Optimization"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={70}
                />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">Your Wi‑Fi Optimization<br />Partner</h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">Effective wireless network optimization requires specialized expertise, professional tools, and deep understanding of RF principles and enterprise networking. Our certified wireless professionals use industry‑standard assessment methodologies and cutting‑edge tools to deliver comprehensive analysis.</p>
                <p className="text-base sm:text-lg text-[#666666] leading-relaxed">From initial site surveys to ongoing optimization, we provide the expertise needed to ensure your wireless network delivers consistent, reliable performance that supports your business objectives and user requirements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment areas - polished card grid */}
        <CapabilityCards />

        {/* FAQ */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-12 sm:py-20 md:grid-cols-2 md:px-8 lg:py-32">
            <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-neutral-600 md:text-left md:text-5xl lg:text-6xl">Frequently asked questions</h2>
            <div className="divide-y divide-neutral-200">
              {faqItems.slice(0,6).map((it, idx) => (
                <MobileFriendlyFAQItem key={idx} question={it.q} answer={it.a} open={openFaq} setOpen={setOpenFaq} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA - teal band */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Ready to optimize your Wi‑Fi network?</h2>
            <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#20B2AA] font-bold text-base sm:text-lg rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">Start Wi‑Fi assessment
              <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>

        {/* JSON-LD Schema (unchanged) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "WiFi Assessment & Optimization",
          "alternateName": "WiFi評価・最適化",
          "serviceType": "Wireless Network Assessment and Optimization Services",
          "provider": {"@type": "Organization","name": "AKRIN株式会社","url": "https://akrin.jp"},
          "areaServed": {"@type": "Country","name": "Japan"},
          "availableLanguage": ["en", "ja"],
          "url": "https://akrin.jp/services/wifi-assessment",
          "description": "Professional wireless network assessment, site surveys, and optimization services. Ensure optimal WiFi performance, coverage, and security for your business environment.",
          "mainEntity": faqItems.map(f => ({"@type": "Question","name": f.q, "acceptedAnswer": {"@type": "Answer","text": f.a}}))
        }) }} />
      </div>
    </div>
  )
}
