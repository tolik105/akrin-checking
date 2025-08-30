'use client'

import { motion } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

interface MobileFirstFAQProps {
  items: FAQItem[]
  title?: string
}

export function MobileFirstFAQ({ items, title = "Frequently Asked Questions" }: MobileFirstFAQProps) {
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
            {title}
          </h2>
        </motion.div>

        {/* FAQ Grid - Mobile-first approach */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white p-4 md:p-6 lg:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-300"
            >
              {/* Question */}
              <h3 className="font-medium mb-3 md:mb-4 text-gray-900 text-lg md:text-xl lg:text-2xl leading-tight">
                {faq.q}
              </h3>
              
              {/* Answer */}
              <p className="text-gray-600 font-normal text-base md:text-lg leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
