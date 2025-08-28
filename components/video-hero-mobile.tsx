"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimationProps } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"

export function VideoHeroMobile() {
  const { t } = useTranslation('common')
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Defer loading/playing the background video until idle or interaction,
  // ensuring the text hero can be LCP.
  useEffect(() => {
    const start = () => setShouldPlayVideo(true)
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        ;(window as any).requestIdleCallback(start, { timeout: 2000 })
      } else {
        setTimeout(start, 1200)
      }
      // Also start on first user interaction
      window.addEventListener('scroll', start, { once: true })
      window.addEventListener('pointerdown', start, { once: true })
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', start)
        window.removeEventListener('pointerdown', start)
      }
    }
  }, [])

  // Enhanced animation variants with better mobile performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 30 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  // Animated Text Component with blur fade-in effect
  const AnimatedText = ({
    children,
    className,
    delay = 0,
    ...animationProps
  }: {
    children: string;
    className?: string;
    delay?: number;
  } & AnimationProps) => {
    return (
      <motion.h1
        {...animationProps}
        className={cn("font-black text-white leading-[0.9] sm:leading-[0.95] tracking-tight text-center", className)}
        style={{
          fontFamily: "'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          fontSize: 'clamp(2.5rem, 10vw, 6rem)',
          lineHeight: 'clamp(0.9, 0.95, 1.0)',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          fontFeatureSettings: '"kern" 1, "liga" 1, "clig" 1, "calt" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv11" 1',
          letterSpacing: '-0.025em'
        }}
      >
        {children.split(" ").map((word, index) => (
          <motion.span
            key={`word-${index}-${word}`}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: delay + index * 0.08,
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    );
  };

  // Animated Subtitle Component
  const AnimatedSubtitle = ({
    children,
    className,
    delay = 0,
    ...animationProps
  }: {
    children: string;
    className?: string;
    delay?: number;
  } & AnimationProps) => {
    return (
      <motion.p
        {...animationProps}
        className={cn("text-gray-200 leading-relaxed max-w-2xl text-center font-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12", className)}
        style={{
          fontFamily: "'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          fontSize: 'clamp(1.125rem, 3.5vw, 1.75rem)',
          lineHeight: 'clamp(1.5, 1.6, 1.7)',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)',
          fontFeatureSettings: '"kern" 1, "liga" 1, "clig" 1, "calt" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv11" 1',
          letterSpacing: '-0.011em'
        }}
      >
        {children.split(" ").map((word, index) => (
          <motion.span
            key={`subtitle-word-${index}-${word}`}
            initial={{
              opacity: 0,
              filter: "blur(8px)",
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.25,
              delay: delay + index * 0.04,
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[100dvh] sm:min-h-[95vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-24 md:pt-28">

        {/* Enhanced Background with better mobile performance */}
        <div className="absolute inset-0 w-full h-full z-0">
          {isMobile ? (
            // Mobile: Video background with overlay for readability
            <div className="w-full h-full relative">
              {shouldPlayVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'brightness(0.6)' }}
                  poster="/images/banners/it-managed-services/banner.avif"
                >
                  <source src="/video/AKRINKK.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="/images/banners/it-managed-services/banner.avif"
                  alt="AKRIN hero background"
                  className="absolute inset-0 w-full h-full object-cover"
                  fetchPriority="high"
                />
              )}
               <div className="absolute inset-0 bg-black/30" />
            </div>
          ) : isTablet ? (
            // Tablet: Video background with overlay
            <div className="w-full h-full relative">
              {shouldPlayVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'brightness(0.7)' }}
                  poster="/images/banners/it-managed-services/banner.avif"
                >
                  <source src="/video/AKRINKK.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="/images/banners/it-managed-services/banner.avif"
                  alt="AKRIN hero background"
                  className="absolute inset-0 w-full h-full object-cover"
                  fetchPriority="high"
                />
              )}
               <div className="absolute inset-0 bg-black/25" />
            </div>
          ) : (
            // Desktop: Full video background with subtle overlay
            <div className="w-full h-full relative">
              {shouldPlayVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                  poster="/images/banners/it-managed-services/banner.avif"
                >
                  <source src="/video/AKRINKK.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="/images/banners/it-managed-services/banner.avif"
                  alt="AKRIN hero background"
                  className="absolute inset-0 w-full h-full object-cover"
                  fetchPriority="high"
                />
              )}
               <div className="absolute inset-0 bg-black/20" />
            </div>
          )}
        </div>

        {/* DIRECT CENTERED CONTENT - NO NESTED CONTAINERS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-center"
        >
              {/* Animated Typography with blur fade-in effect */}
              <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <AnimatedText delay={0.2}>
                  {t('hero.title')}
                </AnimatedText>
              </div>

              {/* Animated subtitle with blur fade-in effect */}
              <AnimatedSubtitle delay={1.5}>
                {t('hero.subtitle')}
              </AnimatedSubtitle>

              {/* CTA button centered below subtitle */}
              <motion.div
                variants={itemVariants}
                className="mt-2 sm:mt-4 md:mt-6 flex justify-center"
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    {t('hero.cta')}
                  </Link>
                </Button>
              </motion.div>
        </motion.div>
        


        {/* Enhanced Mobile/Tablet Decorative Elements */}
        {(isMobile || isTablet) && (
          <div className="absolute inset-0 w-full h-full z-5 pointer-events-none overflow-hidden">
            {/* Mobile decorative elements */}
            {isMobile && (
              <div className="absolute bottom-0 right-0 w-full h-2/5 z-5">
                <div className="relative w-full h-full">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tl from-pink-400/15 to-[hsl(var(--primary))]/15 rounded-full blur-3xl"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tl from-teal-400/15 to-blue-400/15 rounded-full blur-2xl"
                  />
                </div>
              </div>
            )}
            
            {/* Tablet decorative elements */}
            {isTablet && (
              <div className="absolute top-1/4 right-0 w-1/2 h-3/4 z-5">
                <div className="relative w-full h-full">
                  <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-pink-400/10 to-[hsl(var(--primary))]/10 rounded-full blur-3xl"
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.9 }}
                    className="absolute top-1/2 right-16 w-64 h-64 bg-gradient-to-tl from-teal-400/10 to-blue-400/10 rounded-full blur-2xl"
                  />
                </div>
              </div>
            )}
          </div>
        )}

    </section>
  )
}
