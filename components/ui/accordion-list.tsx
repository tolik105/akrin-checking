'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface AccordionItem {
  title: string
  body: string
}

interface AccordionListProps {
  items: AccordionItem[]
}

export function AccordionList({ items }: AccordionListProps) {
  const [openIndex, setOpenIndex] = useState(0) // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

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

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
            Services Provided by IT Managed Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
            Our comprehensive managed IT services cover every aspect of your technology infrastructure,
            ensuring optimal performance, security, and reliability.
          </p>
        </motion.div>

        {/* Accordion Items */}
        <div className="max-w-4xl mx-auto space-y-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <div className={`${openIndex === index ? 'bg-gradient-to-b from-violet-900 via-violet-800 to-violet-700 text-white' : 'bg-gradient-to-b from-violet-800 via-violet-700 to-violet-600 text-white hover:from-violet-700 hover:via-violet-600 hover:to-violet-500'} transition-all duration-200`}>
                <button
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between focus:outline-none min-h-[60px] sm:min-h-[70px]"
                  onClick={() => toggleAccordion(index)}
                >
                  {/* Responsive H3 Typography: 18px/24px on mobile, 20px/28px on sm, 24px/32px on lg */}
                  <h3 className="font-medium text-white text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 lg:leading-8 pr-4">
                    {item.title}
                  </h3>
                  <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 text-white flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                </button>
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-gray-50 border-t border-gray-100"
                >
                  {/* Responsive Body Typography: 16px/24px on mobile, 18px/28px on lg */}
                  <p className="text-gray-700 font-normal text-base lg:text-lg leading-6 lg:leading-7">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
