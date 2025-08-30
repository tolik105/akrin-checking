'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface SectionHeroProps {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
  imageSrc: string
}

export function SectionHero({ title, subtitle, ctaLabel, ctaHref, imageSrc }: SectionHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-[500px] sm:h-[550px] lg:h-[600px] flex items-center">
      {/* Diagonal gradient band background motif */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: `repeating-linear-gradient(65deg, #6F3AFF 0px, #6F3AFF 1px, transparent 1px, transparent 60px)`,
            backgroundSize: '240px 120px',
            backgroundPosition: '0 0, 60px 60px'
          }}
        />
      </div>

      {/* Desktop Layout - FNG-Inspired Geometric Design */}
      <div className="hidden lg:block">
        {/* Clean white background like FNG */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Geometric Image with SVG Mask - Professional FNG Style */}
        <div className="absolute top-0 right-0 w-[65%] h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <mask id="geometricMask">
                <rect width="100" height="100" fill="white"/>
                <polygon points="0,0 30,0 0,100" fill="black"/>
              </mask>
            </defs>
            <foreignObject width="100" height="100" mask="url(#geometricMask)">
              <div className="w-full h-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="65vw"
                  priority
                />
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Content Container - Proper FNG Layout */}
        <div className="relative z-20 flex items-center h-full max-w-[1400px] mx-auto px-8 lg:px-12 xl:px-16">
          <div className="w-full">
            <div className="max-w-[45%] pr-8">
              {/* Clean H1 Typography - FNG Style */}
              <h1 className="font-bold mb-6 lg:mb-8 text-gray-900 leading-tight" style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                lineHeight: '1.1',
                fontWeight: '700'
              }}>
                {title}
              </h1>

              {/* Brand-colored subtitle - Like FNG's pink text */}
            <p className="text-[hsl(var(--primary))] font-medium mb-8 lg:mb-10 leading-relaxed" style={{ 
                fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                lineHeight: '1.5'
              }}>
                {subtitle}
              </p>

              {/* Clean CTA Button - Same as Services Hero */}
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <Link href={ctaHref} className="flex items-center">
                  {ctaLabel}
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout - FNG-Inspired Clean Design */}
      <div className="hidden md:block lg:hidden h-[550px] lg:h-[600px] bg-white flex items-center">
        <div className="px-6 md:px-8 max-w-[1200px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content First - FNG Style */}
            <div className="order-1">
              <h1 className="font-bold mb-6 md:mb-8 leading-tight text-gray-900" style={{ 
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                lineHeight: '1.1'
              }}>
                {title}
              </h1>
            <p className="text-[hsl(var(--primary))] font-medium mb-8 md:mb-10 leading-relaxed" style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.5'
              }}>
                {subtitle}
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full md:w-auto group"
                asChild
              >
                <Link href={ctaHref} className="flex items-center justify-center">
                  {ctaLabel}
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </div>
            
            {/* Image with Geometric Shape - Simplified for tablet */}
            <div className="order-2">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Clean diagonal overlay for consistency */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <polygon points="0,0 15,0 0,100" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Layout - Clean FNG-Inspired Design */}
      <div className="block md:hidden h-[500px] sm:h-[550px] bg-white flex items-center">
        <div className="px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
          {/* Text First - Clean FNG Style */}
          <div className="mb-6 text-center sm:text-left">
            {/* Bold H1 Typography - FNG Style */}
            <h1 className="font-bold mb-6 sm:mb-8 leading-tight text-gray-900" style={{ 
              fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
              lineHeight: '1.1'
            }}>
              {title}
            </h1>

            {/* Brand-colored subtitle - Like FNG's approach */}
          <p className="text-[hsl(var(--primary))] font-medium mb-6 sm:mb-8 max-w-2xl mx-auto sm:mx-0 leading-relaxed" style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              lineHeight: '1.5'
            }}>
              {subtitle}
            </p>

            {/* Professional CTA button */}
            <Button
              size="lg"
              variant="secondary"
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto group"
              asChild
            >
              <Link href={ctaHref} className="flex items-center justify-center">
                {ctaLabel}
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Mobile - No image for consistency with other service pages */}
        </div>
      </div>
    </section>
  )
}
