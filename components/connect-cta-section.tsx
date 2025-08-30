'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ConnectCTASectionProps {
  title?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  showPattern?: boolean
  variant?: 'light' | 'dark'
}

export function ConnectCTASection({
  title = "Connect with us",
  description = "Do you have a specific IT challenge, interest in a career at AKRIN, or just want to get in touch?",
  primaryCTA = { text: "Let's talk", href: "/contact" },
  secondaryCTA = { text: "Subscribe to our newsletter", href: "/newsletter" },
  showPattern = true,
  variant = 'light'
}: ConnectCTASectionProps) {
  const bgClass = variant === 'light'
    ? 'bg-gradient-to-br from-slate-100 via-slate-50 to-gray-100'
    : 'bg-[#20B2AA] text-white'

  return (
    <section className={`relative overflow-hidden ${bgClass}`}>
      {/* Soft pattern background at ~4% opacity */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="soft-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#soft-grid)" />
        </svg>
      </div>
      <div className="relative px-10 md:px-14 py-10 md:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-10 md:p-14 bg-transparent">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Content - 5 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              {/* Main Heading - Exact Typography Match */}
              <h2 className={`text-4xl leading-[1.2] font-semibold mb-6 ${variant === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h2>

              {/* Description - Matching Screenshot */}
              <p className={`text-base md:text-lg mb-8 leading-relaxed max-w-md font-normal ${variant === 'dark' ? 'text-white/90' : 'text-gray-600'}`}>
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center rounded-xl bg-white text-[#20B2AA] hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-2xl transition-colors"
                >
                  {primaryCTA.text}
                </Link>
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center rounded-xl border border-white/80 text-white hover:bg-white hover:text-[#20B2AA] px-8 py-4 text-lg font-semibold transition-colors"
                  >
                    {secondaryCTA.text}
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Right Geometric Pattern - 7 columns */}
            {showPattern && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-7 hidden lg:flex justify-end items-center"
              >
                <div className="relative w-full max-w-lg h-80">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 500 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Precise Zigzag Pattern Matching Screenshot */}
                    {Array.from({ length: 14 }, (_, i) => {
                      const x = 50 + i * 28
                      const amplitude = 40
                      return (
                        <g key={i}>
                          <path
                            d={`M${x} 40 L${x + 14} ${40 + amplitude} L${x + 28} 40 L${x + 42} ${40 + amplitude} L${x + 56} 40 L${x + 70} ${40 + amplitude} L${x + 84} 40 L${x + 98} ${40 + amplitude} L${x + 112} 40 L${x + 126} ${40 + amplitude} L${x + 140} 40 L${x + 154} ${40 + amplitude} L${x + 168} 40 L${x + 182} ${40 + amplitude} L${x + 196} 40 L${x + 210} ${40 + amplitude} L${x + 224} 40 L${x + 238} ${40 + amplitude} L${x + 252} 40 L${x + 266} ${40 + amplitude} L${x + 280} 40`}
                            stroke="#f87171"
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      )
                    })}
                  </svg>
                </div>
              </motion.div>
            )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Element */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center space-x-4"
        >
          <span className="text-xl md:text-2xl font-light text-violet-600 tracking-wide">
            AKRIN
          </span>
          <div className="flex space-x-3">
            <a
              href="https://linkedin.com/company/akrin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-violet-600 transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/akrin_jp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-violet-600 transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
