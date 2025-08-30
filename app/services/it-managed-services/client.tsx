"use client"

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import Script from "next/script"
import Link from "next/link"
import { RelatedLinks } from '@/components/ui/related-links'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { ServiceProcessCard } from "@/components/service-process-card"
import { cn } from "@/lib/utils"
function ManagedServicesHero() {
  return (
    <div className="w-full bg-white" aria-labelledby="hero-heading" role="banner" aria-label="IT Managed Services hero">
      {/* Hero Section with Diagonal Design */}
      <div className="relative min-h-[64vh] sm:min-h-[72vh] lg:min-h-[84vh] overflow-hidden">
        {/* Grid Container */}
        <div className="mx-auto max-w-[1280px] h-full grid grid-cols-12 gap-6 px-6 pt-32 sm:pt-36 md:pt-32">

          {/* Breadcrumbs */}
          <div className="col-span-12 sm:col-start-2 sm:col-end-8 pt-3 z-20">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              <span className="text-[#6B7280] hover:text-[#20B2AA] transition-colors cursor-pointer">
                Services
              </span>
              <span className="text-[#6B7280]">›</span>
              <span className="text-[#20B2AA] font-semibold">IT Managed Services</span>
            </nav>
          </div>

          {/* Main Heading */}
          <div className="col-span-12 sm:col-start-2 sm:col-end-11 row-start-2 z-10">
            <h1
              id="hero-heading"
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-extrabold text-[#111111] leading-[0.95] tracking-tight mb-2"
              style={{ letterSpacing: '-0.02em' }}
            >
              IT Managed Services
            </h1>
          </div>



        </div>

        {/* Diagonal Media Band - Abstract Ribbons */}
        <div
          className="absolute inset-0 z-0 diagonal-clip"
          style={{
            // Slightly larger image band on bottom; still keeps text untouched
            clipPath: 'polygon(0% 86%, 100% 22%, 100% 100%, 0% 100%)',
          }}
        >
          <div className="absolute inset-0">
            <img
              src="/images/banners/it-managed-services/banner.avif"
              alt="Burgundy/purple metallic ribbons on a dark background"
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center bottom'
              }}
              fetchPriority="high"
            />

          </div>
        </div>

        {/* Responsive adjustments so the diagonal stays below the headline on all screens */}
        <style jsx>{`
          /* Large desktops fallback handled by inline style */
          @media (max-width: 1280px) {
            .diagonal-clip {
              clip-path: polygon(0% 88%, 100% 26%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 1024px) {
            .diagonal-clip {
              clip-path: polygon(0% 90%, 100% 32%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 768px) {
            .diagonal-clip {
              clip-path: polygon(0% 92%, 100% 38%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 640px) {
            .diagonal-clip {
              clip-path: polygon(0% 93%, 100% 42%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 480px) {
            .diagonal-clip {
              clip-path: polygon(0% 94%, 100% 46%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 380px) {
            .diagonal-clip {
              clip-path: polygon(0% 95%, 100% 50%, 100% 100%, 0% 100%) !important;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

function SpotlightLogoCloud() {
  const logos = [
    {
      name: "Microsoft",
      src: "https://logo.clearbit.com/microsoft.com",
    },
    {
      name: "Amazon AWS",
      src: "https://logo.clearbit.com/aws.amazon.com",
    },
    {
      name: "Google Cloud",
      src: "https://logo.clearbit.com/cloud.google.com",
    },
    {
      name: "VMware",
      src: "https://logo.clearbit.com/vmware.com",
    },
    {
      name: "Cisco",
      src: "https://logo.clearbit.com/cisco.com",
    },
    {
      name: "Dell",
      src: "https://logo.clearbit.com/dell.com",
    },
    {
      name: "HP",
      src: "https://logo.clearbit.com/hp.com",
    },
    {
      name: "IBM",
      src: "https://logo.clearbit.com/ibm.com",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      <AmbientColor />
      <h3 className="bg-gradient-to-b from-[#2C2C2C] to-[#666666] bg-clip-text pb-3 sm:pb-4 text-center font-sans text-xl sm:text-2xl md:text-3xl font-bold text-transparent">
        Technology Partners
      </h3>
      <p className="text-[#666666] mb-8 sm:mb-10 mt-3 sm:mt-4 text-center font-sans text-sm sm:text-base px-4">
        We work with industry-leading technology partners to deliver best-in-class solutions
      </p>
      <div className="relative mx-auto grid w-full max-w-4xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
        {logos.map((logo, idx) => (
          <div
            key={logo.name + idx + "logo-spotlight"}
            className="flex items-center justify-center"
          >
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#20B2AA] hover:scale-105 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="w-full max-w-[60px] sm:max-w-[80px] lg:max-w-[100px] h-auto select-none object-contain opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
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
          <h3 className="text-base sm:text-lg font-medium text-neutral-700 dark:text-neutral-200 leading-tight">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400 mt-2 sm:mt-3"
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

export default function ITManagedServicesClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <>
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
        {/* Breadcrumb removed */}

        {/* Hero Section (IT Managed Services) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <ManagedServicesHero />
        </section>

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
                <Image
                  src="/images/banners/it-managed-services/monitoring.webp"
                  alt="Network Monitoring Dashboard"
                  width={1024}
                  height={768}
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
                <Image
                  src="/images/banners/it-managed-services/Help-Desk-Support.webp"
                  alt="Help Desk Support Team"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none brightness-105 saturate-90"
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

        {/* Infrastructure Management Section - Mobile-Optimized */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                Complete Infrastructure Management
              </h2>
              <p className="text-base sm:text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                From servers to cloud platforms, we manage your entire IT infrastructure with expertise and precision, ensuring optimal performance and security.
              </p>
            </div>

            {/* Mobile-First Service Grid - 1 col mobile, 2 col tablet, 4 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Column 1: Server Management */}
              <div className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">Server Management</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
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
              <div className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">Network Management</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
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
              <div className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">Cloud Operations</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
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
              <div className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">Security & Compliance</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
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
              <Image
                src="/images/banners/it-managed-services/Infrastructure-Management.webp"
                alt="IT Infrastructure Management"
                width={1440}
                height={810}
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Strategic IT Planning Section - EireSystems Mint Green Background */}
        <div className="bg-[#F0F8F5] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
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

            {/* Strategic Planning Visual */}
            <div className="text-center mb-12">
              <Image
                src="/images/banners/it-managed-services/board-room.webp"
                alt="Strategic IT Planning Board Room"
                width={1280}
                height={720}
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
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
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
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
                  src="/images/banners/it-managed-services/trusted-partner.webp"
                  alt="IT Partnership and Strategy"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>



        {/* FAQ Section - Original Style with Mobile Improvements */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-12 sm:py-20 md:grid-cols-2 md:px-8 lg:py-40">
            <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-neutral-600 md:text-left md:text-5xl lg:text-6xl dark:text-neutral-50">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              <MobileFriendlyFAQItem
                question="What's included in your managed IT services?"
                answer="Our comprehensive managed IT services include 24/7 network monitoring, unlimited help desk support, proactive maintenance, security management, backup and disaster recovery, strategic IT planning, and on-site support when needed."
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="How quickly do you respond to IT issues?"
                answer="Critical issues are resolved within 30 minutes, standard requests within 4 hours. Our 24/7 help desk provides immediate assistance through phone, email, and chat support."
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="Do you provide bilingual support?"
                answer="Yes, our team provides full bilingual support in English and Japanese, ensuring clear communication with all stakeholders in your organization."
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="Can you work with our existing IT infrastructure?"
                answer="Absolutely. We assess your current infrastructure and integrate our services seamlessly, whether you need full management or supplementary support alongside your existing IT team."
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="What's the typical cost savings with managed IT services?"
                answer="Most clients see 30-50% reduction in IT costs through proactive maintenance, reduced downtime, predictable monthly pricing, and elimination of emergency repair costs."
                open={openFaq}
                setOpen={setOpenFaq}
              />
            </div>
          </div>
        </div>

        {/* CTA Section - EireSystems Style */}
        <div className="bg-[#20B2AA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your IT Operations?
            </h2>

            <Link
              href="/contact"
              className="block sm:inline-flex w-full sm:w-auto justify-center items-center px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#20B2AA] font-bold text-lg sm:text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
              <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Enhanced JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "IT Managed Services",
                "alternateName": "ITマネージドサービス",
                "serviceType": "Managed IT Services and Support",
                "provider": {
                  "@type": "Organization",
                  "name": "AKRIN株式会社",
                  "url": "https://akrin.jp",
                  "logo": "https://akrin.jp/akrin-logo.svg",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+81-3-6821-1223",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Japanese"]
                  }
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Japan"
                },
                "availableLanguage": ["en", "ja"],
                "url": "https://akrin.jp/services/it-managed-services",
                "description": "Comprehensive IT support and management services with 24/7 monitoring, help desk support, and strategic IT planning for businesses in Japan.",
                "offers": {
                  "@type": "Offer",
                  "description": "24/7 IT monitoring, unlimited help desk support, proactive maintenance",
                  "availability": "https://schema.org/InStock"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "IT Managed Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "24/7 Network Monitoring"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Unlimited Help Desk Support"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Infrastructure Management"
                      }
                    }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://akrin.jp"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://akrin.jp/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "IT Managed Services",
                    "item": "https://akrin.jp/services/it-managed-services"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What's included in your managed IT services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our comprehensive managed IT services include 24/7 network monitoring, unlimited help desk support, proactive maintenance, security management, backup and disaster recovery, strategic IT planning, and on-site support when needed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly do you respond to IT issues?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Critical issues are resolved within 30 minutes, standard requests within 4 hours. Our 24/7 help desk provides immediate assistance through phone, email, and chat support."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide bilingual support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our team provides full bilingual support in English and Japanese, ensuring clear communication with all stakeholders in your organization."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you work with our existing IT infrastructure?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We assess your current infrastructure and integrate our services seamlessly, whether you need full management or supplementary support alongside your existing IT team."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the typical cost savings with managed IT services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most clients see 30-50% reduction in IT costs through proactive maintenance, reduced downtime, predictable monthly pricing, and elimination of emergency repair costs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you ensure data security and compliance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We implement multi-layered security including endpoint protection, network monitoring, regular security assessments, and compliance management for standards like ISO 27001 and GDPR."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </div>
    </div>
    </>
  )
}