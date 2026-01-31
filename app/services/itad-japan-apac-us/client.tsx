"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

import { HeroDiagonal } from "@/components/hero-diagonal"

// Reuse the services hero pattern: split layout with diagonal image area on large screens

export default function ITADPageClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const faqItems = [
    {
      q: "How fast can you schedule a pickup?",
      a: "Most metros in Japan/APAC/US can be scheduled within 5–10 business days after scope confirmation. Expedited windows available."
    },
    {
      q: "Can you destroy data on-site?",
      a: "Yes—on-site degaussing or shredding for drives/tapes, and software wipes for live devices. You receive serial-level certificates."
    },
    {
      q: "What about value recovery?",
      a: "Eligible assets are tested, wiped, graded and remarketed through approved channels. Proceeds offset program costs."
    },
    {
      q: "Do you handle multi-country projects?",
      a: "Yes—one SOW, unified reporting, local pickups across Japan/APAC/US with standardized chain of custody."
    },
    {
      q: "Can you work in secure facilities?",
      a: "We support escorts, NDAs, background-checked crews, no-phone zones, and weekend/after-hours windows."
    }
  ]

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
  return (
    <div className="bg-white font-sans">
      {/* Breadcrumb removed */}

      {/* Standardized Hero Section (HeroDiagonal) */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
        <HeroDiagonal
          title={<>
            IT Asset Disposition (ITAD)<br />
            Services
          </>}
          breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'ITAD Japan/APAC/US' }]}
          imageSrc="/images/banners/itad/itad.avif"
          imageAlt="ITAD hero backdrop"
        />

      </section>

      {/* Why AKRIN */}
      <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">Why AKRIN for ITAD</h2>
          <ul className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <li className="text-[#666666]">Security first: processes aligned to NIST 800-88 data-sanitization guidance and ISO27001-style controls.</li>
            <li className="text-[#666666]">Full chain of custody: serialized capture at pickup → transit → processing → certificates.</li>
            <li className="text-[#666666]">Global coverage, local know-how: multilingual teams, local trucking and recycling partners in Japan/APAC/US.</li>
            <li className="text-[#666666]">Value recovery: audit, grade and remarket eligible assets to offset program costs.</li>
            <li className="text-[#666666]">Transparent reporting: online dashboards, COIs, Certificates of Data Destruction & Recycling.</li>
            <li className="text-[#666666]">Need a weekend cutover or high-security escort? We schedule around your change windows.</li>
          </ul>
        </div>
      </section>

      {/* What we do (add image placeholders to match pattern) */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">What we do (end-to-end)</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Secure Decommissioning & Logistics</h3>
              <p className="text-[#666666] mt-2">
                On-site survey, labeling and serial/asset tag capture. Anti-tamper packs, sealed containers, GPS-tracked transport and sign-offs at every hand-off.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-[#2C2C2C]">Data Destruction (on-site or off-site)</h3>
              <ul className="mt-2 text-[#666666] list-disc ml-6 space-y-1">
                <li>Cryptographic erase / software wipe to NIST 800-88 guidelines</li>
                <li>Degaussing and physical shredding for HDD/SSD (on-site or secure facility)</li>
                <li>Verified results with media serials on certificate</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Asset Audit & Remarketing</h3>
              <p className="text-[#666666] mt-2">
                Grade, refurbish and resell eligible laptops, desktops, servers, drives and network gear. We manage data wipe, cosmetic repair and channel resale—revenue share credited back to you.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-[#2C2C2C]">Compliant Recycling (E-waste)</h3>
              <p className="text-[#666666] mt-2">
                For non-resellable gear, we route to certified recycling partners (e.g., R2v3/e-Stewards aligned) for responsible material recovery. You get downstream documentation.
              </p>
              <h3 className="mt-6 text-xl font-semibold text-[#2C2C2C]">Reporting & Certificates</h3>
              <p className="text-[#666666] mt-2">
                Itemized inventories, photo proof where required, chain-of-custody logs, CODD (data destruction) and COR (recycling). Export to CSV/PDF for audit.
              </p>
              {/* Compliance logos */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="w-full h-40 bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center">
                  <Image
                    src="/r-2logo.webp"
                    alt="R2 Responsible Recycling certification logo"
                    width={120}
                    height={80}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="w-full h-40 bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center">
                  <Image
                    src="/nist_logo.webp"
                    alt="NIST National Institute of Standards and Technology logo"
                    width={120}
                    height={80}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional coverage */}
      <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">Regional coverage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Japan</h3>
              <p className="text-[#666666] mt-2">Tokyo, Osaka, Nagoya and nationwide pickups. Japanese/English reporting, coordination with building management and security procedures common in JP facilities.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">APAC</h3>
              <p className="text-[#666666] mt-2">Primary hubs: Singapore, Hong Kong, Seoul, Sydney, and more via partner network—ideal for multi-country refreshes and roll-outs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">United States</h3>
              <p className="text-[#666666] mt-2">Nationwide field teams and facilities for data-center decommissions and large office consolidations.</p>
            </div>
          </div>
          <p className="text-[#666666] mt-6">Don’t see your location? Ask—we add lanes on demand for project volumes.</p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">How it works</h2>
          <ol className="grid md:grid-cols-3 gap-6 list-decimal ml-6 text-[#666666]">
            <li><span className="block font-semibold text-[#2C2C2C]">Scope & plan</span> asset list, timelines, compliance requirements, on-site or off-site destruction.</li>
            <li><span className="block font-semibold text-[#2C2C2C]">Secure pickup & processing</span> serialized chain of custody, destruction or remarketing flows.</li>
            <li><span className="block font-semibold text-[#2C2C2C]">Report & reconcile</span> certificates, audit trail, resale proceeds and recycling summaries.</li>
          </ol>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">Equipment we handle</h2>
          <p className="text-[#666666]">Laptops & desktops • Workstations • Servers & blades • Network & security appliances • Drives & tapes • Mobile devices • POS & peripherals • Racks & PDUs (on request)</p>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">Compliance & assurance</h2>
          <p className="text-[#666666] max-w-5xl">We operate to industry best practices and partner with certified processors. Programs can be aligned with your policies (e.g., NIST 800-88, ISO 27001-style controls, environmental standards such as R2v3/e-Stewards via partners). We’ll map deliverables to your internal audit checklist.</p>
        </div>
      </section>

      {/* FAQ (same interaction + styling used on Wi‑Fi pages) */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-12 sm:py-20 md:grid-cols-2 md:px-8 lg:py-32">
          <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-neutral-600 md:text-left md:text-5xl lg:text-6xl">Frequently asked questions</h2>
          <div className="divide-y divide-neutral-200">
            {faqItems.map((it, idx) => (
              <MobileFriendlyFAQItem key={idx} question={it.q} answer={it.a} open={openFaq} setOpen={setOpenFaq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (match services style) */}
      <section className="bg-[#20B2AA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Ready to decommission with confidence?</h2>
          <Link href="/contact?service=itad" className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">Start your ITAD project
            <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}


