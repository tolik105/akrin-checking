'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  title: string
  body: string
}

interface MobileFirstAccordionProps {
  items: AccordionItem[]
  title?: string
  subtitle?: string
}

export function MobileFirstAccordion({ items, title, subtitle }: MobileFirstAccordionProps) {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: `repeating-linear-gradient(65deg, #6F3AFF 0px, #6F3AFF 1px, transparent 1px, transparent 60px)`,
            backgroundSize: '240px 120px',
            backgroundPosition: '0 0, 60px 60px'
          }}
        />
      </div>

      <div className="container relative">
        {/* Section Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base md:text-lg text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Accordion Items */}
        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Accordion Header */}
              <div className={`${
                openIndex === index 
                  ? 'bg-gradient-to-r from-violet-600 to-violet-700 text-white' 
                  : 'bg-gradient-to-r from-violet-500 to-violet-600 text-white hover:from-violet-600 hover:to-violet-700'
              } transition-all duration-300`}>
                <button
                  className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 touch-target"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-content-${index}`}
                  style={{ touchAction: 'manipulation' }}
                >
                  <h3 className="font-medium text-white text-lg md:text-xl lg:text-2xl leading-tight pr-4 flex-1">
                    {item.title}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 text-white flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Accordion Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`accordion-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-700 font-normal text-base md:text-lg leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
    outline: 2px solid #a855f7;
    outline-offset: 2px;
  }
  
  /* Ensure proper contrast for text */
  @media (prefers-contrast: high) {
    .text-white {
      color: #ffffff !important;
    }
    .text-gray-700 {
      color: #000000 !important;
    }
  }
  
  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    .transition-all,
    .transition-transform,
    .transition-shadow {
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
