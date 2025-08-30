"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"

import { HeroDiagonal } from "@/components/hero-diagonal"

export default function NetworkPenetrationTestingClient() {

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
              Network<br />
              Penetration<br />
              Testing
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/services' },
              { label: 'Network Penetration Testing' }
            ]}
            imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            imageAlt="Network Penetration Testing"
          />
        </section>

        {/* Network Vulnerability Assessment Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Network Vulnerability<br />
                  Assessment
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Comprehensive network scanning and vulnerability identification using industry-standard tools to discover security weaknesses in your network infrastructure.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Automated vulnerability scanning</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Network topology mapping</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Service and port enumeration</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Risk assessment and prioritization</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Detailed vulnerability reporting</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Our systematic approach identifies security weaknesses before attackers can exploit them, providing clear remediation guidance.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Network Vulnerability Assessment"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Penetration Testing Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ethical Hacking and Penetration Testing"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Ethical Hacking &<br />
                  Penetration Testing
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Simulate real-world attacks to identify exploitable vulnerabilities and test your security defenses with controlled, ethical hacking methodologies.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">External and internal penetration testing</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Web application security testing</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Wireless network security assessment</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Social engineering simulations</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Post-exploitation analysis</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Our certified ethical hackers use the same techniques as malicious attackers to identify vulnerabilities before they can be exploited.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Methodology Section - EireSystems Style 4-Column Layout */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                Comprehensive Testing Methodology
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                Our systematic approach combines automated tools with manual testing techniques to provide thorough security assessment across all attack vectors.
              </p>
            </div>

            {/* 4-Column Service Grid - Exact EireSystems Style */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {/* Column 1: Reconnaissance */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Reconnaissance</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Information gathering</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Network discovery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Service enumeration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Target identification</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Scanning */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Vulnerability Scanning</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automated scanning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Manual verification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>False positive filtering</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Risk prioritization</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Exploitation */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Exploitation</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Controlled exploitation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Privilege escalation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lateral movement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Impact assessment</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Reporting */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Reporting</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Executive summaries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Technical findings</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Remediation guidance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Compliance mapping</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testing Image */}
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Security Testing Methodology"
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Your Security Testing Partner Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Your Security Testing<br />
                  Partner
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Effective security testing requires deep technical expertise, ethical hacking skills, and understanding of the latest attack vectors. Our certified security professionals use industry-standard methodologies and cutting-edge tools.
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Certified ethical hackers and security experts</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Industry-standard testing methodologies</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Comprehensive reporting and remediation guidance</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Compliance framework support</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  From network infrastructure to web applications and wireless systems, we provide comprehensive testing that helps you understand your security risks.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Security Testing Partnership"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - EireSystems Style */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Test Your Security Defenses?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover vulnerabilities before attackers do. Get comprehensive security testing and expert recommendations to strengthen your security posture.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Security Assessment
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
              "name": "Network & Penetration Testing",
              "alternateName": "ネットワーク＆ペネトレーションテスト",
              "serviceType": "Network Security Testing and Penetration Testing Services",
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
              "url": "https://akrin.jp/services/network-penetration-testing",
              "description": "Comprehensive security testing, vulnerability assessment, and penetration testing services. Identify and address security weaknesses before attackers do."
            })
          }}
        />
      </div>
    </div>
  )
}
