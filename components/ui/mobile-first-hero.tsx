'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface MobileFirstHeroProps {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
  imageSrc: string
}

export function MobileFirstHero({ title, subtitle, ctaLabel, ctaHref, imageSrc }: MobileFirstHeroProps) {
  return (
    <section className="relative bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-[hsl(var(--primary))]">Home</Link>
              <span className="mx-2">></span>
              <span className="text-gray-900">{title}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">

          {/* Centered Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-normal max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          {/* Two-Column Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    Our comprehensive approach ensures your business stays ahead of the curve with cutting-edge technology solutions tailored to your specific needs.
                  </p>
                  <p className="text-lg leading-relaxed">
                    From strategic planning to implementation and ongoing support, we deliver results that drive growth and efficiency.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href={ctaHref}
                   className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                  >
                    {ctaLabel}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={imageSrc}
                  alt="Professional IT Services"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
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
    outline: 2px solid #a855f7 !important;
    outline-offset: 2px;
  }
  
  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    .transition-all,
    .transition-transform {
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
