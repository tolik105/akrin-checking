"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"

import { HeroDiagonal } from "@/components/hero-diagonal"
import Image from "next/image"

export default function ITSecurityClient() {

  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE', { cookie_domain: 'akrin.jp' });
        `}
      </Script>

      <div className="bg-white font-sans">
        {/* Standardized Hero Section (HeroDiagonal) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              IT Security<br />
              Solutions &<br />
              Protection
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/services' },
              { label: 'IT Security' }
            ]}
            imageSrc="/images/banners/cybersecurity/banner1.avif"
            imageAlt="IT Security Solutions"
          />
        </section>

        {/* Endpoint Security Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Endpoint Security &<br />
                  Device Management
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Comprehensive endpoint protection including antivirus, anti-malware, device encryption, and mobile device management (MDM) to secure all connected devices.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Advanced antivirus and anti-malware protection</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Device encryption and data protection</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Mobile device management (MDM)</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Remote device monitoring and control</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Compliance and policy enforcement</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Our endpoint security solutions protect all devices in your network, from laptops and desktops to mobile devices and IoT endpoints.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <Image
                  src="/images/banners/cybersecurity/Security-Assessment.avif"
                  alt="Endpoint Security and Device Management"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Network Security Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/banners/cybersecurity/detection-response.avif"
                  alt="Network Security and Firewall Management"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg"
                  quality={70}
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Network Security &<br />
                  Firewall Management
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Network security implementation including next-generation firewalls, intrusion detection systems, VPN setup, and network segmentation for comprehensive protection.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Next-generation firewall deployment</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Intrusion detection and prevention systems</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">VPN setup and secure remote access</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Network segmentation and access control</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Continuous network monitoring</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Our network security solutions create multiple layers of defense to protect your infrastructure from external and internal threats.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your IT Security Partner Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Your IT Security<br />
                  Partner
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Building effective IT security requires specialized expertise, advanced tools, and continuous vigilance. Our security professionals work as an extension of your team, providing the knowledge and resources needed to defend against modern cyber threats.
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Multi-layered security approach</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">24/7 monitoring and incident response</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Compliance and regulatory support</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Proactive threat management</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  From endpoint protection to network security and incident response, we deliver comprehensive security solutions that evolve with the threat landscape.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <Image
                  src="/images/banners/cybersecurity/Cybersecurity-Partner.avif"
                  alt="IT Security Partnership"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - EireSystems Style */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Protect your organization with comprehensive IT security solutions. Get enterprise-grade protection with expert support and 24/7 monitoring.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Security Consultation
              <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "IT Security Services",
              "alternateName": "ITセキュリティサービス",
              "serviceType": "IT Security and Cybersecurity Services",
              "provider": {
                "@type": "Organization",
                "name": "AKRIN株式会社",
                "url": "https://akrin.jp"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Japan"
              },
              "availableLanguage": ["en", "ja"],
              "url": "https://akrin.jp/services/it-security",
              "description": "Comprehensive IT security solutions including endpoint protection, network security, and threat monitoring. Protect your business with enterprise-grade security against evolving cyber threats.",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of security threats do you protect against?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We protect against malware, ransomware, phishing attacks, data breaches, insider threats, and advanced persistent threats (APTs) using a multi-layered security approach."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide 24/7 security monitoring?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we offer 24/7 security monitoring and incident response services to detect and respond to threats in real-time."}
                },
                {
                  "@type": "Question",
                  "name": "How do you handle compliance requirements?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We help ensure compliance with various regulations including ISO 27001, GDPR, Japanese Personal Information Protection Law, and industry-specific standards."}
                },
                {
                  "@type": "Question",
                  "name": "Can you secure remote work environments?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide comprehensive remote work security including VPN setup, endpoint protection, secure cloud access, and remote device management."}
                },
                {
                  "@type": "Question",
                  "name": "What is your incident response process?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Our incident response includes immediate threat containment, forensic analysis, system recovery, and post-incident review to prevent future occurrences."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide security training for employees?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we offer security awareness training, phishing simulations, and ongoing education to help employees recognize and avoid security threats."}
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure business continuity during security incidents?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We implement business continuity plans, secure backup systems, and rapid recovery procedures to minimize downtime during security incidents."}
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate with existing security tools?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we can integrate with and enhance existing security infrastructure to provide centralized management and monitoring."}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
