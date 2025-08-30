'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const professionalServices = [
  {
    title: "Professional Services",
    description: "We can flexibly respond to changes in the number of required personnel and man-hours. We can dispatch high-quality job seekers and prevent sudden excessive work. Our consultants will help you optimize your work environment.",
    link: "/services/managed-services",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
  },
  {
    title: "IT Consulting Services",
    description: "Strategic technology consulting that aligns with your business objectives. Our experienced consultants provide expert guidance on digital transformation, system architecture, and technology roadmaps.",
    link: "/services/it-consulting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Managed IT Services",
    description: "Comprehensive IT support services that keep your business running smoothly. 24/7 monitoring, proactive maintenance, and rapid response to ensure maximum uptime and productivity.",
    link: "/services/it-managed-services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  }
]

interface ProfessionalServicesSectionProps {
  className?: string
}

export function ProfessionalServicesSection({ className = '' }: ProfessionalServicesSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % professionalServices.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % professionalServices.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + professionalServices.length) % professionalServices.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-gray-200 shadow-professional hover:shadow-professional-lg transition-all duration-300 w-10 h-10 rounded-md"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-gray-200 shadow-professional hover:shadow-professional-lg transition-all duration-300 w-10 h-10 rounded-md"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </Button>

        {/* Slides Container */}
        <div className="overflow-hidden rounded-lg shadow-professional-lg bg-white dark:bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex min-h-[500px] md:min-h-[600px]"
            >
              {/* Left Column - Image */}
              <div className="w-full lg:w-3/5 relative">
                <div className="relative w-full h-full">
                  <Image
                    src={professionalServices[currentSlide].image}
                    alt="Professional business consultation and teamwork"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                    priority
                  />
                  {/* Subtle overlay matching your brand */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-gray-900/20"></div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="w-full lg:w-2/5 bg-white dark:bg-gray-900 flex items-center justify-center p-8 md:p-12 lg:p-16 relative">

                <div className="relative z-10 max-w-lg">
                  {/* Section Title */}
                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-6 leading-tight"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      fontWeight: '300',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {professionalServices[currentSlide].title}
                  </h2>

                  {/* Content Text */}
                  <p
                    className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: '400',
                      lineHeight: '1.6'
                    }}
                  >
                    {professionalServices[currentSlide].description}
                  </p>

                  {/* Call-to-Action */}
                  <Link
                    href={professionalServices[currentSlide].link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-all duration-300 group"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    <span>Click here for details</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {professionalServices.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-6 h-2 bg-purple-600 rounded-full'
                  : 'w-2 h-2 bg-gray-300 hover:bg-purple-300 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
