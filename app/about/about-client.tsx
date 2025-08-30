"use client";

import Link from "next/link";
import { PremiumCTA } from "@/components/ui/premium-cta";
import { useEffect, useRef } from "react";

export default function AboutClient() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const attemptPlay = () => {
      try {
        v.muted = true
        const p: any = v.play()
        if (p && typeof p.catch === "function") p.catch(() => {})
      } catch {}
    }
    attemptPlay()
    const onClick = () => attemptPlay()
    window.addEventListener("click", onClick, { once: true })
    return () => window.removeEventListener("click", onClick)
  }, [])
  return (
    <div className="bg-white">
      {/* Hero Section with Background Video */}
      <section className="relative py-16 lg:py-20 overflow-hidden min-h-[60vh] pt-20 sm:pt-24">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/og-image.png"
            aria-hidden="true"
          >
            <source src="/video/about-us.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About AKRIN
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Enterprise Reliability, Startup Agility
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#20B2AA] hover:bg-[#1a9a94] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <div className="py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in Tokyo in 2025 by veteran infrastructure engineers, AKRIN blends 15 years of large‑scale IT experience with a lean, automation‑first mindset.
                </p>
                <p>
                  Our mission is simple: give high‑growth companies in Japan the uptime, security, and innovation the Fortune 500 enjoy—without the enterprise price tag.
                </p>
                <p>
                  We achieve this through:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Engineer‑Led Service</li>
                  <li>Automation First</li>
                  <li>Japan‑Global Bridge</li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AKRIN Team"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The AKRIN Story Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The AKRIN Story</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Partnership */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business partnership</h3>
              <p className="text-gray-600 text-sm">
                Direct access to senior engineers; no account‑manager relay. We understand your business needs and technical challenges equally.
              </p>
            </div>

            {/* Continuous Reliability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous reliability</h3>
              <p className="text-gray-600 text-sm">
                24/7 monitoring, &lt; 2h response SLA, and 99.9% uptime guarantee. Your infrastructure stays running so your business never stops.
              </p>
            </div>

            {/* Systematic Growth */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Systematic growth</h3>
              <p className="text-gray-600 text-sm">
                Scalable solutions that grow with your business. From startup to enterprise, we provide the infrastructure foundation for success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Managed IT & Cloud</h3>
              <p className="text-gray-600">
                End‑to‑end design, migration, and 24/7 operations for Microsoft 365, Azure, AWS, and hybrid environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Engineering</h3>
              <p className="text-gray-600">
                Planning, installation, and optimisation of wired / wireless networks—from multi‑site WANs to in‑office Wi‑Fi surveys.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Management & Delivery</h3>
              <p className="text-gray-600">
                PMP‑driven frameworks that keep complex roll‑outs on time, on budget, and fully documented.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom AI Solutions</h3>
              <p className="text-gray-600">
                We build domain‑specific chatbots, workflow automations, and data copilots tailored to your stack. Our own internal platform is in private beta, and lessons learned flow directly into client projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity & Compliance</h3>
              <p className="text-gray-600">
                Hardening, real‑time monitoring, incident response, and hands‑on guidance toward frameworks such as ISO 27001.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why AKRIN Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why AKRIN</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pillar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Benefit to You
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Engineer‑Led Service
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Direct access to senior engineers; no account‑manager relay.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Automation First
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Scripted remediation cuts mean‑time‑to‑restore by up to 40%.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Japan‑Global Bridge
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Bilingual (EN/JP) team aligning HQ standards with local regulations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clarity</h3>
              <p className="text-gray-600 text-sm">
                Plain‑language proposals and transparent costs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Velocity</h3>
              <p className="text-gray-600 text-sm">
                Weeks, not quarters, from kickoff to production.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accountability</h3>
              <p className="text-gray-600 text-sm">
                &lt; 2 h response SLA during business hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">
                Your KPIs shape our roadmap.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <PremiumCTA
        variant="dark"
        title="Ready to transform your IT infrastructure?"
        description="Get expert consultation and discover how our solutions can drive your business forward."
        buttonText="Schedule Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}