"use client"

import React, { useState } from "react"
import Script from "next/script"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

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

export default function WiFiDesignClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const accordionItems = [
    {
      title: "Predictive Design & Modeling",
      body: "Advanced RF modeling and predictive design using professional tools to create optimal wireless network layouts before deployment, ensuring comprehensive coverage and performance."
    },
    {
      title: "Access Point Placement & Configuration",
      body: "Strategic access point positioning, power settings, and channel planning to maximize coverage, minimize interference, and optimize network performance across all areas."
    },
    {
      title: "Network Architecture & Controller Selection",
      body: "Complete network architecture design including wireless controller selection, VLAN planning, security implementation, and integration with existing network infrastructure."
    },
    {
      title: "Capacity Planning & Scalability",
      body: "User density analysis, bandwidth requirements assessment, and scalable design planning to ensure the network can handle current and future capacity demands."
    },
    {
      title: "Security Design & Implementation",
      body: "Comprehensive wireless security design including encryption standards, authentication methods, guest network isolation, and security policy implementation."
    },
    {
      title: "Installation Planning & Documentation",
      body: "Detailed installation plans, cable routing, power requirements, mounting specifications, and comprehensive documentation for successful deployment and maintenance."
    }
  ]

  const faqItems = [
    {
      q: "What information do you need for WiFi design?",
      a: "We need building floor plans, user requirements, device counts, application needs, existing network infrastructure details, and any specific coverage or performance requirements."
    },
    {
      q: "How long does the design process take?",
      a: "Design timeline varies based on complexity, typically 1-2 weeks for standard offices and 3-6 weeks for large enterprise environments with multiple buildings."
    },
    {
      q: "Do you provide installation services?",
      a: "Yes, we provide complete installation services including project management, equipment installation, configuration, testing, and documentation."
    },
    {
      q: "Can you design for specific applications?",
      a: "Yes, we design networks optimized for specific applications including VoIP, video streaming, IoT devices, high-density environments, and mission-critical applications."
    },
    {
      q: "What vendors do you work with?",
      a: "We work with leading wireless vendors including Cisco, Aruba, Ruckus, Ubiquiti, and others, selecting the best solution for your specific requirements and budget."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer ongoing support including network monitoring, optimization, troubleshooting, and expansion planning to ensure continued optimal performance."
    },
    {
      q: "Can you integrate with existing networks?",
      a: "Yes, we design wireless networks that seamlessly integrate with existing wired infrastructure, security systems, and network management platforms."
    },
    {
      q: "What about future expansion?",
      a: "Our designs include scalability planning and future expansion considerations to accommodate business growth and evolving technology requirements."
    }
  ]

  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE');
        `}
      </Script>

      <div className="bg-white font-sans">
        {/* Breadcrumb removed */}

        {/* Hero */}
        {/* Standardized Hero Section (HeroDiagonal) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              Wi‑Fi Design &<br />
              Deployment
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/services' },
              { label: 'Wi‑Fi Design' }
            ]}
            imageSrc="/images/banners/wifi-assessment/survey.avif"
            imageAlt="Wi‑Fi Design"
          />
        </section>

        {/* Section 1 */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">Why Professional Wi‑Fi<br />Design Matters</h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">Successful wireless networks require careful planning, professional design, and expert implementation. Poor Wi‑Fi design leads to coverage gaps, performance issues, and user frustration. Our professional design approach ensures optimal performance, scalability, and reliability.</p>
                <p className="text-base sm:text-lg text-[#666666] leading-relaxed">Using advanced RF modeling tools and industry best practices, we create comprehensive wireless network designs that deliver consistent, high‑performance connectivity while meeting your specific business requirements and budget constraints.</p>
              </div>
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/images/banners/cloud-infrastructure/banner.avif"
                  alt="Wi‑Fi Design"
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

        {/* Capabilities (from accordion items) */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                <Image
                  src="/images/banners/cloud-infrastructure/banner.avif"
                  alt="Deployment"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={70}
                />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">Your Wi‑Fi Design<br />Partner</h2>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {accordionItems.slice(0,4).map((it, idx) => (
                    <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">{it.title}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-[#666666] leading-relaxed">From initial planning through deployment and ongoing optimization, we provide comprehensive design and implementation services that ensure your wireless network delivers the performance, coverage, and reliability your business demands.</p>
              </div>
            </div>
          </div>
        </div>

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

        {/* CTA */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Ready to design your optimal Wi‑Fi network?</h2>
            <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#20B2AA] font-bold text-base sm:text-lg rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">Start Wi‑Fi design
              <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>

        {/* JSON-LD Schema (unchanged) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "WiFi Design & Deployment",
          "alternateName": "WiFi設計・展開",
          "serviceType": "Wireless Network Design and Deployment Services",
          "provider": {"@type": "Organization","name": "AKRIN株式会社","url": "https://akrin.jp"},
          "areaServed": {"@type": "Country","name": "Japan"},
          "availableLanguage": ["en", "ja"],
          "url": "https://akrin.jp/services/wifi-design",
          "description": "Professional wireless network design, planning, and deployment services. Create high-performance WiFi networks with optimal coverage, capacity, and security for your business.",
          "mainEntity": faqItems.map(f => ({"@type": "Question","name": f.q, "acceptedAnswer": {"@type": "Answer","text": f.a}}))
        }) }} />
      </div>
    </div>
  )
}
