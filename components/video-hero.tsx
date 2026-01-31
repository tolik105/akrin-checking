"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

export function VideoHero() {
  const { t } = useTranslation('common')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen w-full overflow-hidden bg-white pt-24 sm:pt-28">
      {/* Hero Background SVG - Responsive */}
      <div className="absolute inset-0 w-full h-full z-0">
        <picture>
          <source srcSet="/Mask group.svg" type="image/svg+xml" />
          <img
            src="/Mask group.svg"
            alt=""
            className="w-full h-full object-cover opacity-100"
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
      
      {/* Responsive Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
        {/* Content Panel - Full width on mobile, left side on desktop */}
        <div className="relative z-20 flex w-full lg:w-[55%] items-center justify-center lg:justify-start">
          <m.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 lg:py-16 max-w-2xl w-full"
          >
            <m.div variants={itemVariants} className="mb-6 lg:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-pink-600">Rewiring</span><br />
                enterprise <span className="text-pink-600">IT</span><br />
                with <span className="text-pink-600">AI</span>
              </h1>
            </m.div>
            
            <m.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed"
            >
              Expert managed services, cybersecurity, and 24/7 support.
            </m.p>

            <m.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <Button
                size="lg"
                className="bg-pink-600 text-white hover:bg-pink-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg transition-all duration-300 hover:shadow-xl w-full sm:w-auto"
                asChild
              >
                <Link href="/services">
                  {t('hero.exploreServices')}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 bg-white text-teal-600 hover:bg-teal-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  {t('hero.requestConsultation')}
                </Link>
              </Button>
            </m.div>
          </m.div>
        </div>

        {/* Right Panel - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block lg:relative lg:w-[45%] lg:min-h-screen">
          {/* Empty space for the A-shape in background */}
        </div>
      </div>
      
      {/* Video positioned to fill only the white A letter space */}
      <div className="absolute inset-0 w-full h-full z-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <clipPath id="aLetterClip">
              {/* Triangle part of A */}
              <path d="M1534.5 298L1811 861H1618.01L1438 497.084L1534.5 298Z"/>
              {/* Base part of A */}
              <path d="M1346.01 704H1525L1433.09 861H1257L1346.01 704Z"/>
            </clipPath>
          </defs>
          <foreignObject x="0" y="0" width="1920" height="1080" clipPath="url(#aLetterClip)">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              loading="lazy"
              style={{
                width: '1920px',
                height: '1080px',
                objectFit: 'cover'
              }}
            >
              <source src={isMobile ? "/video/AKRINKK-M.mp4" : "/video/AKRINKK.mp4"} type="video/mp4" />
            </video>
          </foreignObject>
        </svg>
      </div>
      </section>
    </LazyMotion>
  )
}