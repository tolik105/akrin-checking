"use client"

import React, { useState, useEffect } from "react"
import Script from "next/script"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import { HeroDiagonal } from "@/components/hero-diagonal"


const FAQItem = ({
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
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <svg
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-[#20B2AA] transition-all duration-200",
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
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-[#20B2AA] transition-all duration-200",
              isOpen && "rotate-0 scale-100",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
import Image from "next/image"

export default function ITConsultingProjectManagementClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Akrin managed our small-office cloud migration end-to-end—all with a single weekend of downtime.",
      author: "IT Manager, Tokyo design agency"
    },
    {
      title: "Regional cloud migration completed in 48 hours",
      quote: "Akrin moved a 240-user, five-site retail chain from on-prem Exchange to Microsoft 365. All mailboxes cut over overnight; legacy servers decommissioned within 48 hours—no data loss, zero business-hour downtime.",
      author: "IT Director, Japan retail group"
    },
    {
      quote: "Akrin shut down our Nagoya and Osaka on-prem rooms and shifted everything to colocation in 27 calendar days—every drive wiped and documented. Our auditors had zero follow-ups.",
      author: "IT Infrastructure Manager, mid-size manufacturing group"
    },
    {
      quote: "Their team arrived Friday night, unplugged 18 racks, and by Monday morning our workloads were live in Azure. Not a single user ticket Monday.",
      author: "Head of Systems, regional healthcare network"
    },
    {
      quote: "We had six branch offices running closet servers; Akrin mapped, packed, and disposed of the hardware across three prefectures in two weekends. The process was so smooth finance asked if we'd postponed it.",
      author: "Director of Operations, e-commerce retailer"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

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
              IT Consulting &<br />
              Management<br />
              Services
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/services' },
              { label: 'IT Consulting & Project Management' }
            ]}
            imageSrc="/images/banners/it-consulting-project-management/hero-banner.avif"
            imageAlt="IT Consulting Team Meeting"
          />
        </section>

        {/* IT Infrastructure Project Management Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  IT Infrastructure Project<br />
                  Management
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  From initial project scoping and planning through implementation and ongoing support, we provide comprehensive IT project management services that ensure successful delivery of complex technology initiatives.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Comprehensive project planning and resource management</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Risk assessment and mitigation strategies</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Vendor coordination and stakeholder management</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Quality assurance and delivery oversight</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Post-implementation support and optimization</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Our experienced project managers work closely with your team to ensure projects are delivered on time, within budget, and to your exact specifications.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <Image
                  src="/images/banners/it-consulting-project-management/ITInfrastructureProjectManagement.avif"
                  alt="IT Infrastructure Project Management"
                  width={1024}
                  height={768}
                  className="w-full h-auto rounded-lg shadow-lg"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Office Relocation Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Office Relocation Services"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Office Relocation
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Moving your office requires careful coordination of IT infrastructure, equipment, and personnel. Our comprehensive relocation services ensure minimal business disruption while maintaining full operational capability throughout the transition.
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Pre-move IT infrastructure assessment and planning</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Network and telecommunications setup at new location</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Equipment relocation and secure data migration</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Testing and validation of all systems</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Employee training and support during transition</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Whether relocating within the same building or across the country, we handle every aspect of your IT move with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Center Build / Relocations - EireSystems Style 4-Column Layout */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                Data Center Builds / Relocations
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                From initial site assessment through final commissioning, we provide end-to-end data center build and relocation services that minimize downtime and maximize operational efficiency.
              </p>
            </div>

            {/* 4-Column Service Grid - Exact EireSystems Style */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {/* Column 1: Planning */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2zm8 0h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Planning & Design</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Site assessment and analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Infrastructure design and layout</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Capacity planning and scalability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Risk assessment and mitigation</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Build */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Build & Installation</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Power and cooling systems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Network infrastructure deployment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Server rack and cabinet installation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Security and access control systems</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Migration */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Migration & Testing</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Data migration and transfer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Application relocation and testing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Performance validation and optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Disaster recovery verification</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Support */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.236a2 2 0 100 4 2 2 0 000-4zM12 17.764a2 2 0 100 4 2 2 0 000-4zM4.343 4.343a2 2 0 100 4 2 2 0 000-4zM19.657 4.343a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Ongoing Support</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 monitoring and alerting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Preventive maintenance programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Capacity management and scaling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Documentation and training</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Center Image */}
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Data Center Infrastructure"
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-[#F8FAFC] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto py-12 px-6 md:px-12 lg:px-20 bg-white rounded-lg shadow-md border-l-4 border-[#20B2AA] relative overflow-hidden">

              {/* Testimonial Content */}
              <div className="relative">
                {testimonials[currentTestimonial].title && (
                  <h3 className="text-slate-800 font-semibold text-lg mb-4 transition-opacity duration-500">
                    {testimonials[currentTestimonial].title}
                  </h3>
                )}
                <blockquote className="text-slate-700 leading-relaxed italic text-lg mb-6 transition-opacity duration-500">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <hr className="border-t border-slate-200 mb-4" />
                <cite className="text-slate-500 text-sm font-normal tracking-wide transition-opacity duration-500" style={{fontVariant: 'small-caps'}}>
                  {testimonials[currentTestimonial].author}
                </cite>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-[#20B2AA]' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Continuity Planning Section - EireSystems Mint Green Background */}
        <div className="bg-[#F0F8F5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                Business Continuity Planning
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                Ensure business resilience with comprehensive continuity planning that protects your operations from disruption while maintaining critical business functions during unexpected events.
              </p>
            </div>

            {/* Phase-based Structure - EireSystems Style */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Phase 1: Assessment */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#20B2AA] text-white rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">Assessment Phase</h3>
                </div>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Business impact analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Risk assessment and vulnerability identification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Critical process mapping</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recovery time objectives (RTO) definition</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2: Planning */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#20B2AA] text-white rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">Planning Phase</h3>
                </div>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Disaster recovery strategy development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Emergency response procedures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Communication protocols and chains</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Resource allocation and backup systems</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3: Implementation */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#20B2AA] text-white rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">Implementation</h3>
                </div>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Plan testing and validation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Staff training and awareness programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Documentation and procedure updates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ongoing monitoring and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="text-center">
              <p className="text-lg text-[#666666] leading-relaxed max-w-4xl mx-auto">
                Our systematic approach to business continuity planning ensures your organization can respond effectively to any disruption, maintaining essential operations and protecting your business reputation.
              </p>
            </div>
          </div>
        </div>

        {/* Business Analysis for IT Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Business Analysis for IT
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Bridge the gap between business requirements and technical solutions. Our business analysis services ensure that IT initiatives align with strategic objectives and deliver measurable business value.
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Requirements gathering and stakeholder analysis</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Process mapping and workflow optimization</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Solution design and technical specifications</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Change impact assessment and management</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Our experienced business analysts work closely with your stakeholders to translate business needs into actionable IT strategies that drive organizational success.
                </p>
              </div>

              {/* Right Image - World Map/Global Strategy */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Global Business Strategy"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Migration and Technology Renewal Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Technology Migration"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  Migrations and<br />
                  Technology Renewal
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  Modernize your IT infrastructure with expert migration services and technology renewal strategies. We ensure seamless transitions that minimize disruption while maximizing performance and efficiency.
                </p>

                {/* Service breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Legacy system migration and modernization</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Cloud migration and hybrid infrastructure</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Technology stack optimization and renewal</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">Data migration and integrity validation</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Our proven methodologies ensure successful technology transitions that enhance operational efficiency and position your organization for future growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 md:px-8">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-600 mb-8 sm:mb-12 dark:text-neutral-50">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800 max-w-3xl mx-auto">
              <FAQItem
                question="What size projects do you accept?"
                answer="We typically handle projects between 20 – 500 seats or 1 – 20 racks, but feel free to ask about other scopes."
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <FAQItem
                question="Do you work outside Tokyo?"
                answer="Yes — our consultants travel anywhere in Japan, and remote planning workshops are available."
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <FAQItem
                question="Which project-tracking tools do you use?"
                answer="MS Project for high-level timelines and Jira for issue tracking, but we'll adapt if you have a preferred platform."
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <FAQItem
                question="How much lead time do you need?"
                answer="For most office moves and mid-size migrations, 4 – 6 weeks notice is ideal."
                open={openFaq}
                setOpen={setOpenFaq}
              />
            </div>
          </div>
        </div>

        {/* CTA Section - EireSystems Style */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              An Entire IT Infrastructure Solution for Small, Medium<br />
              and Large Scale Enterprises
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Ready to accelerate your IT initiatives? Get in touch with our consulting experts to discuss your project requirements and discover how we can help drive your digital transformation forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us Now
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
              "name": "IT Consulting & Project Management",
              "alternateName": "ITコンサルティング＆プロジェクト管理",
              "serviceType": "IT Consulting and Project Management Services",
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
              "url": "https://akrin.jp/services/it-consulting-project-management",
              "description": "Strategic IT consulting, project management office (PMO) services, and digital transformation guidance. Drive successful IT initiatives with expert planning and execution."
            })
          }}
        />
      </div>
    </div>
  )
}