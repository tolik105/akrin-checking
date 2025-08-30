'use client'

import { motion } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
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

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Responsive H2 Typography: 28px/32px on mobile, 32px/36px on sm, 40px/48px on lg */}
          <h2 className="font-semibold text-gray-900 mb-4 tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Grid - Mobile-optimized */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-300"
            >
              {/* Responsive H3 Typography: 18px/24px on mobile, 20px/28px on sm, 24px/32px on lg */}
              <h3 className="font-medium mb-3 sm:mb-4 text-gray-900 text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-8">
                {faq.q}
              </h3>
              {/* Responsive Body Typography: 16px/24px on mobile, 18px/28px on lg */}
              <p className="text-gray-600 font-normal text-base lg:text-lg leading-6 lg:leading-7">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
