'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface MobileFirstCTAProps {
  headline: string
  sub: string
  buttonLabel: string
  buttonHref: string
  secondaryLinks?: {
    label: string
    href: string
  }[]
}

export function MobileFirstCTA({ 
  headline, 
  sub, 
  buttonLabel, 
  buttonHref, 
  secondaryLinks 
}: MobileFirstCTAProps) {
  return (
    <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-violet-800 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background pattern */}
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
        className="container relative z-10"
      >
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 lg:mb-8 tracking-tight text-white leading-tight">
            {headline}
          </h2>
          
          {/* Subtitle */}
          <p className="opacity-90 max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-12 font-normal text-base md:text-lg lg:text-xl leading-relaxed">
            {sub}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-sm md:max-w-none md:w-auto"
            >
              <Link
                href={buttonHref}
                className="inline-flex items-center justify-center w-full md:w-auto bg-white text-violet-900 hover:bg-gray-100 px-6 md:px-8 lg:px-10 py-4 md:py-5 text-base md:text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 touch-target focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-700"
                style={{ touchAction: 'manipulation' }}
              >
                {buttonLabel}
              </Link>
            </motion.div>

            {/* Secondary Links */}
            {secondaryLinks && secondaryLinks.length > 0 && (
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-white/80 text-center">
                {secondaryLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 font-medium underline underline-offset-4 text-sm md:text-base touch-target focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-700 rounded px-2 py-1"
                    style={{ touchAction: 'manipulation' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* CSS for touch targets and accessibility */
const styles = `
  .touch-target {
    min-height: 44px;
    min-width: 44px;
    -webkit-tap-highlight-color: transparent;
  }
  
  @media (min-width: 768px) {
    .touch-target {
      min-height: 48px;
    }
  }
  
  /* Focus styles for better accessibility */
  .touch-target:focus {
    outline: 2px solid #ffffff !important;
    outline-offset: 2px;
  }
  
  /* Ensure proper contrast */
  @media (prefers-contrast: high) {
    .bg-white {
      background-color: #ffffff !important;
      color: #000000 !important;
    }
    .text-violet-900 {
      color: #000000 !important;
    }
  }
  
  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    .transition-all,
    .transition-colors {
      transition: none !important;
    }
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}
