"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { ServiceProcessCard } from "@/components/service-process-card"

function SpotlightLogoCloud() {
  const logos = [
    {
      name: "Microsoft",
      src: "https://img.logo.dev/microsoft.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Amazon AWS",
      src: "https://img.logo.dev/aws.amazon.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Google Cloud",
      src: "https://img.logo.dev/cloud.google.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "VMware",
      src: "https://img.logo.dev/vmware.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Cisco",
      src: "https://img.logo.dev/cisco.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Dell",
      src: "https://img.logo.dev/dell.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "HP",
      src: "https://img.logo.dev/hp.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "IBM",
      src: "https://img.logo.dev/ibm.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-20">
      <AmbientColor />
      <h3 className="bg-gradient-to-b from-[#2C2C2C] to-[#666666] bg-clip-text pb-4 text-center font-sans text-2xl font-bold text-transparent md:text-3xl">
        Technology Partners
      </h3>
      <p className="text-[#666666] mb-10 mt-4 text-center font-sans text-base">
        We work with industry-leading technology partners to deliver best-in-class solutions
      </p>
      <div className="relative mx-auto grid w-full max-w-4xl grid-cols-2 md:grid-cols-4 gap-8">
        {logos.map((logo, idx) => (
          <div
            key={logo.name + idx + "logo-spotlight"}
            className="flex items-center justify-center"
          >
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#20B2AA] hover:scale-105 w-[120px] h-[120px] flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="w-full max-w-[100px] h-auto select-none object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const AmbientColor = () => {
  return (
    <div className="pointer-events-none absolute left-40 top-0 z-40 h-screen w-screen">
      <div
        style={{
          transform: "translateY(-350px) rotate(-45deg)",
          width: "560px",
          height: "1380px",
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(174, 62%, 47%, .15) 0, hsla(174, 62%, 47%, .08) 50%, hsla(174, 62%, 47%, .03) 80%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
        className="absolute left-0 top-0"
      />

      <div
        style={{
          transform: "rotate(-45deg) translate(5%, -50%)",
          transformOrigin: "top left",
          width: "240px",
          height: "1380px",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(174, 62%, 47%, .1) 0, hsla(174, 62%, 47%, .05) 80%, transparent 100%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
        className="absolute left-0 top-0"
      />

      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          transform: "rotate(-45deg) translate(-180%, -70%)",
          transformOrigin: "top left",
          top: 0,
          left: 0,
          width: "240px",
          height: "1380px",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(174, 62%, 47%, .08) 0, hsla(174, 62%, 47%, .03) 80%, transparent 100%)",
          filter: "blur(20px)",
        }}
        className="absolute left-0 top-0"
      />
    </div>
  );
};

export default function ITManagedServicesClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: "What's included in your managed IT services?",
      answer: "Our comprehensive managed IT services include 24/7 network monitoring, unlimited help desk support, proactive maintenance, security management, backup and disaster recovery, strategic IT planning, and on-site support when needed."
    },
    {
      question: "How quickly do you respond to IT issues?",
      answer: "Critical issues are resolved within 30 minutes, standard requests within 4 hours. Our 24/7 help desk provides immediate assistance through phone, email, and chat support."
    },
    {
      question: "Do you provide bilingual support?",
      answer: "Yes, our team provides full bilingual support in English and Japanese, ensuring clear communication with all stakeholders in your organization."
    },
    {
      question: "Can you work with our existing IT infrastructure?",
      answer: "Absolutely. We assess your current infrastructure and integrate our services seamlessly, whether you need full management or supplementary support alongside your existing IT team."
    },
    {
      question: "What's the typical cost savings with managed IT services?",
      answer: "Most clients see 30-50% reduction in IT costs through proactive maintenance, reduced downtime, predictable monthly pricing, and elimination of emergency repair costs."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We implement multi-layered security including endpoint protection, network monitoring, regular security assessments, and compliance management for standards like ISO 27001 and GDPR."
    }
  ]

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
        {/* Hero Section - Flexible & Optimized */}
        <div className="relative bg-white overflow-hidden">
          <div className="h-[500px] sm:h-[550px] lg:h-[600px] flex items-center">
            
            {/* Background Image with Diagonal Cut */}
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
              <div className="relative h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="IT Managed Services Team"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Clean diagonal overlay */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <polygon points="0,0 25,0 0,100" fill="white" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:w-1/2">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    IT Managed<br />
                    Services<br />
                    Solutions
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-teal-500 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-teal-600 transition-all duration-200"
                  >
                    Get Managed IT Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 24/7 Network Monitoring Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                  24/7 Network<br />
                  Monitoring
                </h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                  Continuous monitoring of your entire IT infrastructure with proactive issue detection and resolution before problems impact your business operations.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Real-time system performance monitoring</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Automated alert systems and notifications</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Proactive issue resolution and prevention</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Network security and threat detection</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Performance optimization and capacity planning</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  Our advanced monitoring systems ensure your IT infrastructure operates at peak performance with minimal downtime and maximum reliability.
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-8 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Network Monitoring Dashboard"
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Help Desk Support Section - EireSystems Style */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Help Desk Support Team"
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                  Unlimited Help Desk<br />
                  Support
                </h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                  Round-the-clock technical support with guaranteed response times. Our expert technicians provide immediate assistance for all your IT needs.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Critical issues resolved within 30 minutes</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Standard requests within 4 hours</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Multi-channel support (phone, email, chat)</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Remote and on-site technical assistance</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">Bilingual support in English and Japanese</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  Our dedicated support team ensures your employees stay productive with fast, reliable technical assistance whenever they need it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Management Section - EireSystems Style 4-Column Layout */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                Complete Infrastructure Management
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                From servers to cloud platforms, we manage your entire IT infrastructure with expertise and precision, ensuring optimal performance and security.
              </p>
            </div>

            {/* 4-Column Service Grid - Exact EireSystems Style */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {/* Column 1: Server Management */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Server Management</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Windows & Linux administration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Virtualization management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Security patching</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Network Management */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Network Management</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>WAN/LAN optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>WiFi design and management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Firewall configuration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>VPN setup and maintenance</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Cloud Operations */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Cloud Operations</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Microsoft 365 management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Azure, AWS, GCP operations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Backup and disaster recovery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cost optimization</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Security & Compliance */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Security & Compliance</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Endpoint protection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Security monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Compliance management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Vulnerability assessments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Infrastructure Image */}
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="IT Infrastructure Management"
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Strategic IT Planning Section - EireSystems Mint Green Background */}
        <div className="bg-[#F0F8F5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                Strategic IT Planning & Governance
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                Long-term technology roadmap development aligned with your business goals, including budget planning and strategic technology recommendations.
              </p>
            </div>

            {/* Phase-based Structure - Modern Process Cards */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <ServiceProcessCard
                step={1}
                title="Technology Assessment"
                description="Current infrastructure evaluation, business requirements analysis, technology gap identification, and ROI cost-benefit analysis to understand your current state."
                index={0}
              />
              <ServiceProcessCard
                step={2}
                title="Strategic Planning"
                description="Technology roadmap development, budget planning and forecasting, vendor evaluation and selection, and implementation timeline creation for your future."
                index={1}
              />
              <ServiceProcessCard
                step={3}
                title="Ongoing Governance"
                description="Quarterly business reviews, performance monitoring, continuous optimization, and strategic adjustments to ensure long-term success."
                index={2}
              />
            </div>

            {/* Bottom Content */}
            <div className="text-center mb-8">
              <p className="text-lg text-[#666666] leading-relaxed max-w-4xl mx-auto">
                Our strategic approach ensures your technology investments align with business objectives and deliver measurable value for long-term success.
              </p>
            </div>

            {/* Technology Partners Spotlight */}
            <SpotlightLogoCloud />
          </div>
        </div>

        {/* Your IT Partner Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Your Trusted IT Partner
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Building lasting technology partnerships that grow with your business. Our managed IT services are designed to evolve with your needs, providing consistent support and strategic guidance for years to come.
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Proactive approach to IT management</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Predictable monthly costs and budgeting</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Access to enterprise-level expertise</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Scalable solutions that grow with you</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  From startups to established enterprises, we provide the technology foundation that enables your business to thrive in today's digital landscape.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IT Partnership and Strategy"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              {/* Violet accent line */}
              <div className="w-12 h-1 bg-violet-600 mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Get answers to common questions about our managed IT services
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 hover:border-violet-600 transition-all duration-300 hover:shadow-md rounded-lg">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900 pr-4 leading-tight">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDownIcon className="w-5 h-5 text-violet-600" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <div className="w-12 h-1 bg-violet-600 mb-3"></div>
                            <p className="text-base text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - EireSystems Style */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your IT Operations?
            </h2>

            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
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
              "name": "IT Managed Services",
              "alternateName": "ITマネージドサービス",
              "serviceType": "Managed IT Services and Support",
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
              "url": "https://akrin.jp/services/it-managed-services",
              "description": "Comprehensive IT support and management services with 24/7 monitoring, help desk support, and strategic IT planning for businesses in Japan."
            })
          }}
        />
      </div>
    </div>
  )
}