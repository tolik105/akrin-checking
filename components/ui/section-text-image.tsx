'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SectionTextImageProps {
  heading: string
  body: string
  imageSrc: string
  imageSide: 'left' | 'right'
}

export function SectionTextImage({ heading, body, imageSrc, imageSide }: SectionTextImageProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
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
        {/* Mobile: Stack vertically, text first - Better spacing */}
        <div className="block lg:hidden space-y-10 sm:space-y-12">
          {/* Content Column - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center sm:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8 tracking-tight" style={{ lineHeight: '1.3' }}>
              {heading}
            </h2>
            <div 
              className="text-gray-600 font-normal text-lg sm:text-xl leading-relaxed"
              style={{ lineHeight: '1.6' }}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </motion.div>

          {/* Image Column - Mobile Second */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] shadow-lg">
              <Image
                src={imageSrc}
                alt={heading}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: imageSide === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`col-span-7 ${imageSide === 'right' ? 'order-2' : ''}`}
          >
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] shadow-lg">
              <Image
                src={imageSrc}
                alt={heading}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 600px"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: imageSide === 'left' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`col-span-5 ${imageSide === 'right' ? 'order-1' : ''}`}
          >
            <div className="px-8">
              <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
                {heading}
              </h2>
              <div 
                className="text-gray-600 font-normal text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
