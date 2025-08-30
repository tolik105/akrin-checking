'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeadlineText, BodyText } from '@/components/ui/premium-typography'
import Link from 'next/link'
import Image from 'next/image'

const capabilities = [
  {
    title: "Managed IT Services",
    subtitle: "Professional Services",
    description: "Comprehensive IT management that keeps your business running smoothly. 24/7 monitoring, proactive maintenance, and expert support to prevent issues before they impact your operations.",
    capabilities: ["24/7 proactive monitoring", "Expert technical support", "Preventive maintenance", "Rapid issue resolution"],
    link: "/services/it-managed-services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    title: "IT Consulting & Project Management",
    subtitle: "Professional Services",
    description: "Strategic guidance and expert project delivery from planning to implementation. We align technology with business value and deliver outcomes on time and on scope.",
    capabilities: ["Business-aligned IT roadmaps", "PMO discipline & governance", "Zero downtime migrations", "Risk & compliance management"],
    link: "/services/it-consulting-project-management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  }
]

export function CapabilitiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % capabilities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % capabilities.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
      {/* Header - Enhanced Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12 md:mb-16"
      >
        <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-violet-600 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        <HeadlineText
          element="h2"
          className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2"
        >
          Capabilities that define the future
        </HeadlineText>
        <BodyText className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
          We combine deep technical expertise with industry-leading partnerships to deliver
          transformative solutions at enterprise scale.
        </BodyText>
      </motion.div>

      {/* Carousel Container - Mobile Optimized Navigation */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Navigation Arrows - Mobile Touch Friendly */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12 rounded-full touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12 rounded-full touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
        </Button>

        {/* Slides Container - Mobile Optimized */}
        <div className="overflow-hidden rounded-lg shadow-professional-lg bg-white dark:bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row"
            >
              {/* Left Column - Image - Proper Fit */}
              <div className="w-full lg:w-3/5 relative order-1 lg:order-1">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px]">
                  <Image
                    src={capabilities[currentSlide].image}
                    alt={`${capabilities[currentSlide].title} - Professional IT Services`}
                    fill
                    className="object-contain lg:object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  {/* Subtle overlay matching your brand */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/10 to-gray-900/20"></div>
                </div>
              </div>

              {/* Right Column - Content - Mobile Optimized */}
              <div className="w-full lg:w-2/5 bg-white dark:bg-gray-900 flex items-center justify-center p-4 xs:p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16 relative order-2 lg:order-2 min-h-[300px] sm:min-h-[350px] lg:min-h-[500px] xl:min-h-[550px]">
                <div className="relative z-10 w-full text-center sm:text-left">
                  <div className="text-xs font-semibold text-[hsl(var(--primary))] mb-2 uppercase tracking-wider"
                       style={{
                         fontFamily: "'Inter', sans-serif",
                         fontWeight: '600'
                       }}>
                    {capabilities[currentSlide].subtitle}
                  </div>

                  <h3 className="text-lg leading-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-3 sm:mb-4 text-gray-900 dark:text-white"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontWeight: '300',
                        letterSpacing: '-0.01em'
                      }}>
                    {capabilities[currentSlide].title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed sm:text-base md:text-lg mb-4 sm:mb-6"
                     style={{
                       fontFamily: "'Inter', sans-serif",
                       fontWeight: '400',
                       lineHeight: '1.5'
                     }}>
                    {capabilities[currentSlide].description}
                  </p>

                  {/* Capabilities List - Mobile Optimized */}
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {capabilities[currentSlide].capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start text-gray-600 dark:text-gray-400 justify-center sm:justify-start">
                        <div className="w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm font-medium leading-relaxed text-center sm:text-left"
                              style={{
                                fontFamily: "'Inter', sans-serif"
                              }}>{capability}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center sm:justify-start">
                    <Link
                      href={capabilities[currentSlide].link}
                      className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] font-medium transition-all duration-300 group text-sm bg-[hsl(var(--primary))]/10 hover:bg-[hsl(var(--primary))]/15 px-4 py-2 rounded-lg"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: '500'
                      }}
                    >
                      <span>Click here for details</span>
                      <ChevronRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators - Responsive */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-4">
          {capabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 group ${
                index === currentSlide
                  ? 'text-[hsl(var(--primary))]'
                  : 'text-gray-400 hover:text-[hsl(var(--primary))]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Arrow Icon */}
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                  index === currentSlide ? 'scale-110' : 'scale-100 group-hover:scale-105'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {/* Underline */}
              <div className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[hsl(var(--primary))] scale-x-100'
                  : 'bg-gray-400 scale-x-0 group-hover:scale-x-75'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
