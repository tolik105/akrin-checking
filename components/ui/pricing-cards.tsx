'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface PricingPlan {
  name: string
  price: string
  period?: string
  description?: string
  bullets: string[]
  highlighted?: boolean
}

interface PricingCardsProps {
  plans: PricingPlan[]
}

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Diagonal gradient band background motif */}
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

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 lg:mb-18"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
            Pricing Models
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Guideline ranges for transparent planning
          </p>
        </motion.div>

        {/* Pricing Cards Grid - Mobile Responsive with Better Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`bg-white rounded-xl border transition-all duration-300 relative p-4 sm:p-6 lg:p-8 ${
                plan.highlighted
                  ? 'border-violet-200 shadow-lg lg:transform lg:scale-105'
                  : 'border-gray-100 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-violet-600 text-white text-xs sm:text-sm font-medium px-3 sm:px-6 py-1 sm:py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-600">{plan.price}</span>
                </div>
                {plan.period && (
                  <div className="text-gray-500 text-xs sm:text-sm">per {plan.period}</div>
                )}
                {plan.description && (
                  <p className="text-gray-600 font-normal mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                    {plan.description}
                  </p>
                )}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-gray-700 font-normal text-lg sm:text-xl leading-relaxed" style={{ lineHeight: '1.6' }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl py-4 sm:py-5 font-semibold transition-all duration-300 text-lg sm:text-xl min-h-[60px] touch-manipulation active:scale-95 ${
                  plan.highlighted
                    ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'
                }`}
                style={{ touchAction: 'manipulation' }}
                asChild
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <p className="text-gray-600 font-normal max-w-3xl mx-auto mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed px-4" style={{ lineHeight: '1.6' }}>
            All plans include remote support, monitoring, patching, and monthly reporting. On-site hours vary by tier.
          </p>
          <Button
            asChild
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold shadow-lg w-full sm:w-auto max-w-sm mx-auto min-h-[60px] touch-manipulation active:scale-95"
            style={{ touchAction: 'manipulation' }}
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
