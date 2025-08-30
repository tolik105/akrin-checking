'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

export type FAQItem = { q: string; a: string }

export function ServiceFAQ({ items, title = 'Frequently asked questions' }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<string | null>(null)

  const MobileFriendlyFAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const isOpen = open === question
    return (
      <div className="cursor-pointer py-3 sm:py-4" onClick={() => setOpen(isOpen ? null : question)}>
        <div className="flex items-start">
          <div className="relative mr-3 sm:mr-4 mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0">
            {/* Plus icon */}
            <svg className={cn('absolute inset-0 h-full w-full transform text-[#20B2AA] transition-all duration-200', isOpen && 'rotate-90 scale-0')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {/* Minus icon */}
            <svg className={cn('absolute inset-0 h-full w-full rotate-90 scale-0 transform text-[#20B2AA] transition-all duration-200', isOpen && 'rotate-0 scale-100')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-medium text-neutral-700 leading-tight">{question}</h3>
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="overflow-hidden text-neutral-600 mt-2 sm:mt-3">
                  <p className="text-sm sm:text-base leading-relaxed">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-12 sm:py-20 md:grid-cols-2 md:px-8 lg:py-32">
        <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-neutral-600 md:text-left md:text-5xl lg:text-6xl">{title}</h2>
        <div className="divide-y divide-neutral-200">
          {items.map((it, idx) => (
            <MobileFriendlyFAQItem key={idx} question={it.q} answer={it.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

