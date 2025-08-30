'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface PicturesSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaHref?: string
  image: string
  imageAlt: string
  variant?: 'purple' | 'blue' | 'teal' | 'gradient'
}

export function DiagonalPicturesSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref = '#',
  image,
  imageAlt,
  variant = 'purple'
}: PicturesSectionProps) {
  
  const backgroundVariants = {
    purple: 'bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900',
    blue: 'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900',
    teal: 'bg-gradient-to-br from-teal-900 via-teal-800 to-blue-900',
    gradient: 'bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900'
  }

  const buttonVariants = {
    purple: 'bg-purple-500 hover:bg-purple-600 border-purple-400',
    blue: 'bg-blue-500 hover:bg-blue-600 border-blue-400',
    teal: 'bg-teal-500 hover:bg-teal-600 border-teal-400',
    gradient: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-purple-400'
  }

  return (
    <section className={`relative overflow-hidden py-16 lg:py-24 ${backgroundVariants[variant]} text-white`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              65deg,
              transparent,
              transparent 120px,
              rgba(255, 255, 255, 0.1) 120px,
              rgba(255, 255, 255, 0.1) 122px
            )`,
            backgroundSize: '240px 120px',
            backgroundPosition: '0 0, 60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center px-8 md:px-16 lg:px-24 py-16 lg:py-24"
          >
            <div className="space-y-8 max-w-lg">
              {/* Subtitle */}
              <div className="space-y-2">
                <p className="text-sm font-medium tracking-wider uppercase text-white/80">
                  {subtitle}
                </p>
                
                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {description}
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  className={`inline-flex items-center gap-2 px-8 py-4 ${buttonVariants[variant]} text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl border`}
                  asChild
                >
                  <a href={ctaHref}>
                    {ctaText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Diagonal Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Diagonal Cut Container */}
            <div className="relative h-full min-h-[500px] lg:min-h-full">
              {/* Diagonal Background Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              />
              
              {/* Main Image */}
              <div
                className="relative w-full h-full"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                
                {/* Image Overlay for Better Integration */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
