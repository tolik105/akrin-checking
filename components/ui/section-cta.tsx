'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SectionCTAProps {
  headline: string
  sub: string
  buttonLabel: string
  buttonHref: string
}

export function SectionCTA({ headline, sub, buttonLabel, buttonHref }: SectionCTAProps) {
  return (
    <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-violet-800 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Diagonal gradient band background motif */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(65deg, #6F3AFF 0px, #6F3AFF 1px, transparent 1px, transparent 60px)`,
            backgroundSize: '240px 120px',
            backgroundPosition: '0 0, 60px 60px'
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6"
      >
        <div className="text-center">
          {/* Responsive H2 Typography: 28px/32px on mobile, 32px/36px on sm, 40px/48px on lg */}
          <h2 className="font-semibold mb-6 sm:mb-8 tracking-tight text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
            {headline}
          </h2>

          {/* Responsive Body Typography: 16px/24px on mobile, 18px/28px on lg */}
          <p className="opacity-90 max-w-3xl mx-auto mb-8 sm:mb-12 font-normal text-base lg:text-lg leading-6 lg:leading-7">
            {sub}
          </p>

          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-violet-900 hover:bg-gray-100 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 min-h-[60px] touch-manipulation"
                style={{
                  touchAction: 'manipulation'
                }}
                asChild
              >
                <Link href={buttonHref}>{buttonLabel}</Link>
              </Button>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white/80 text-center sm:text-left">
              <Link
                href="/services"
                className="hover:text-white transition-colors duration-300 font-medium underline underline-offset-4 text-sm sm:text-base"
              >
                Download service guide
              </Link>
              <Link
                href="#pricing"
                className="hover:text-white transition-colors duration-300 font-medium underline underline-offset-4 text-sm sm:text-base"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
