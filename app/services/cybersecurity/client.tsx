"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"
import { PremiumCTA } from "@/components/ui/premium-cta"
import { HeroDiagonal } from "@/components/hero-diagonal"


import Image from "next/image"

export default function CybersecurityClient() {

  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE');
        `}
      </Script>

      <div className="bg-white font-sans">
        {/* Standardized Hero Section (HeroDiagonal) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              Cybersecurity<br />
              Solutions &<br />
              Protection
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/services' },
              { label: 'Cybersecurity' }
            ]}
            imageSrc="/images/banners/cybersecurity/banner1.avif"
            imageAlt="Cybersecurity Solutions"
          />
        </section>

        {/* Security Assessment Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                  Security Assessment<br />
                  & Audit
                </h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                  Comprehensive security evaluations including vulnerability assessments, penetration testing, and compliance audits to identify and address security gaps in your infrastructure.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Vulnerability assessments and penetration testing</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Compliance audits and gap analysis</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Risk assessment and prioritization</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Security policy development</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Remediation planning and implementation</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  Our thorough security assessments provide clear insights into your security posture with actionable recommendations for improvement.
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/images/banners/cybersecurity/Security-Assessment.avif"
                  alt="Security Assessment and Audit"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Managed Detection & Response Section - EireSystems Style */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/banners/cybersecurity/detection-response.avif"
                  alt="Managed Detection and Response"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  quality={70}
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                  Managed Detection<br />
                  & Response (MDR)
                </h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                  24/7 threat monitoring and incident response services with advanced threat detection, real-time analysis, and rapid response to security incidents.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">24/7 security monitoring and alerting</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Advanced threat detection and analysis</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Rapid incident response and containment</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Threat intelligence and hunting</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Forensic analysis and reporting</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  Our expert security analysts provide continuous protection with immediate response to threats, minimizing business impact and ensuring rapid recovery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Operations Center Section - EireSystems Style 4-Column Layout */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                Security Operations Center (SOC)
              </h2>
              <p className="text-base sm:text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                Dedicated security monitoring with expert analysts providing continuous surveillance, threat intelligence, and proactive security management.
              </p>
            </div>

            {/* 4-Column Service Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Column 1: Monitoring */}
              <div className="text-center sm:text-left lg:text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto sm:mx-0 lg:mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">Continuous Monitoring</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 security surveillance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Real-time threat detection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automated alert correlation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Behavioral analysis</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Analysis */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Threat Analysis</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert security analysts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Threat intelligence integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Risk assessment and scoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Attack pattern recognition</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Response */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Incident Response</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rapid threat containment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automated response actions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Forensic investigation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recovery coordination</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Compliance */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Compliance Management</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ISO 27001 support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>SOC 2 compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>GDPR documentation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Audit preparation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SOC Image */}
            <div className="text-center">
              <Image
                src="/images/banners/cybersecurity/Security-Operations.webp"
                alt="Security Operations Center"
                width={1280}
                height={720}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
                quality={70}
              />
            </div>
          </div>
        </div>

        {/* Your Security Partner Section - EireSystems Style */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                  Your Cybersecurity<br />
                  Partner
                </h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                  Building effective cybersecurity requires expertise, advanced tools, and continuous vigilance. Our security experts work as an extension of your team, providing the knowledge and resources needed to defend against modern threats.
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Enterprise-grade security tools and platforms</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Certified security professionals</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Proven incident response methodologies</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Continuous threat landscape monitoring</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  We combine cutting-edge technology with proven methodologies to deliver comprehensive security solutions that evolve with the threat landscape.
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/images/banners/cybersecurity/Cybersecurity-Partner.avif"
                  alt="Cybersecurity Partnership"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA Section */}
        <PremiumCTA
          variant="teal"
          title="Ready to Strengthen Your Security?"
          description="Join hundreds of companies that trust AKRIN for comprehensive cybersecurity. Get enterprise-grade protection with expert support and 24/7 monitoring."
          buttonText="Start Security Assessment"
          buttonHref="/contact"
        />

        {/* Enhanced JSON-LD Schema for AI Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AKRIN Cybersecurity Solutions - Leading Security Provider in Japan",
              "alternateName": "サイバーセキュリティ＆脅威対策",
              "serviceType": "Cybersecurity and Information Security Services",
              "description": "AKRIN provides cybersecurity services in Japan including security monitoring, vulnerability assessments, compliance consulting, and incident response. Experienced team serving businesses across Japan with comprehensive security solutions.",
              "provider": {
                "@type": "Organization",
                "name": "AKRIN Technology Solutions",
                "alternateName": "AKRIN株式会社",
                "url": "https://akrin.jp",
                "logo": "https://akrin.jp/images/logos/akrin-logo.svg",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "JP",
                  "addressRegion": "Tokyo",
                  "addressLocality": "Tokyo"
                },
                "hasCredential": [
                  "Experienced Cybersecurity Team",
                  "Professional IT Security Specialists",
                  "Bilingual Technical Support"
                ]
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
              "availableLanguage": ["en", "ja"],
              "url": "https://akrin.jp/services/cybersecurity",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cybersecurity Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "24/7 Security Operations Center (SOC)",
                      "description": "Continuous monitoring and threat detection services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Penetration Testing",
                      "description": "Comprehensive security assessments and vulnerability testing by experienced security professionals"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Compliance Management",
                      "description": "IT compliance consulting and best practices implementation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Incident Response",
                      "description": "Rapid response to security incidents with expert remediation team"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5"
              }
            })
          }}
        />
      </div>
    </div>
  )
}
