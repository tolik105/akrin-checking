"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface HeroVisualSingularityProps {
  reducedMotion?: boolean
  className?: string
}

export default function HeroVisualSingularity({ 
  reducedMotion: propReducedMotion,
  className = ""
}: HeroVisualSingularityProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const reducedMotion = propReducedMotion ?? prefersReducedMotion

  // Intersection Observer for lazy initialization
  useEffect(() => {
    if (!wrapperRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [])

  // Mouse parallax effect
  useEffect(() => {
    if (reducedMotion || !isVisible) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return
      
      const rect = wrapperRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const x = Math.min(Math.max((e.clientX - centerX) / rect.width, -0.5), 0.5)
      const y = Math.min(Math.max((e.clientY - centerY) / rect.height, -0.5), 0.5)
      
      setMousePosition({ x: x * 12, y: y * 12 }) // ±6px range
    }
    
    let throttled = false
    const throttledMouseMove = (e: MouseEvent) => {
      if (!throttled) {
        throttled = true
        setTimeout(() => {
          handleMouseMove(e)
          throttled = false
        }, 60)
      }
    }
    
    window.addEventListener('mousemove', throttledMouseMove)
    return () => window.removeEventListener('mousemove', throttledMouseMove)
  }, [reducedMotion, isVisible])

  // Animation variants
  const spineVariants = {
    hidden: { scale: 0.985, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.22,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  }

  const baseVariants = {
    hidden: { x: -12, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.26,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const particlesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.24,
        delay: 0.16
      }
    }
  }

  return (
    <div 
      ref={wrapperRef}
      className={`relative aspect-square w-full max-w-[clamp(360px,38vw,840px)] overflow-visible ${className}`}
      style={{ 
        width: 'clamp(360px, 38vw, 840px)',
        height: 'clamp(360px, 38vw, 840px)'
      }}
      aria-hidden="true"
      role="presentation"
    >
      {isVisible && (
        <>
          {/* Black Spine Triangle */}
          <motion.div
            className="absolute inset-0"
            variants={reducedMotion ? undefined : spineVariants}
            initial={reducedMotion ? undefined : "hidden"}
            animate={reducedMotion ? undefined : "visible"}
            style={{
              transform: reducedMotion ? undefined : `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
              willChange: reducedMotion ? undefined : 'transform'
            }}
          >
            <svg 
              viewBox="0 0 840 840" 
              className="w-full h-full" 
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Black spine triangle - height: 840px, base: 240px, lean: 8° forward */}
              <path
                d="M 480 0 L 600 840 L 360 840 Z"
                fill="#111112"
                transform="skewX(8)"
                style={{ transformOrigin: '480px 420px' }}
              />
            </svg>
          </motion.div>

          {/* Purple Base Parallelogram */}
          <motion.div
            className="absolute bottom-0 left-0"
            variants={reducedMotion ? undefined : baseVariants}
            initial={reducedMotion ? undefined : "hidden"}
            animate={reducedMotion ? undefined : "visible"}
            style={{
              transform: reducedMotion ? undefined : `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
              willChange: reducedMotion ? undefined : 'transform'
            }}
          >
            <svg 
              viewBox="0 0 220 120" 
              className="w-[220px] h-[120px]" 
              style={{ 
                position: 'absolute',
                bottom: '120px',
                left: '140px'
              }}
            >
              {/* Purple parallelogram - 220×120px, 8° slant */}
              <path
                d="M 0 120 L 0 0 L 220 0 L 220 120 Z"
                fill="#7A28FF"
                fillOpacity="0.9"
                transform="skewX(8)"
              />
            </svg>
          </motion.div>

          {/* Triangular Aperture with Particles */}
          <motion.div
            className="absolute inset-0"
            variants={reducedMotion ? undefined : particlesVariants}
            initial={reducedMotion ? undefined : "hidden"}
            animate={reducedMotion ? undefined : "visible"}
            style={{
              transform: reducedMotion ? undefined : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              willChange: reducedMotion ? undefined : 'transform'
            }}
          >
            <svg 
              viewBox="0 0 840 840" 
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Triangular clipPath for particles */}
                <clipPath id="triangular-aperture">
                  <path d="M 260 520 L 520 220 L 160 220 Z" />
                </clipPath>
                
                {/* Particle patterns */}
                <pattern id="particles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="30" r="1.5" fill="#B388FF" opacity="0.6">
                    <animate attributeName="cy" values="30;20;30" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="60" r="1" fill="#78E7F1" opacity="0.8">
                    <animate attributeName="cy" values="60;50;60" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="80" r="1.2" fill="#B388FF" opacity="0.5">
                    <animate attributeName="cy" values="80;70;80" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="30" cy="90" r="0.8" fill="#78E7F1" opacity="0.7">
                    <animate attributeName="cy" values="90;80;90" dur="7s" repeatCount="indefinite" />
                  </circle>
                </pattern>
              </defs>
              
              {/* Particles clipped to triangular aperture */}
              <rect 
                width="100%" 
                height="100%" 
                fill="url(#particles)" 
                clipPath="url(#triangular-aperture)"
                opacity={reducedMotion ? 0.3 : 1}
              >
                {!reducedMotion && (
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0;0,-20;0,0"
                    dur="16s"
                    repeatCount="indefinite"
                  />
                )}
              </rect>
              
              {/* Subtle particle surge every 6s */}
              {!reducedMotion && (
                <rect 
                  width="100%" 
                  height="100%" 
                  fill="url(#particles)" 
                  clipPath="url(#triangular-aperture)"
                  opacity="0"
                >
                  <animate
                    attributeName="opacity"
                    values="0;0;0.15;0;0;0;0;0;0;0"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </rect>
              )}
            </svg>
          </motion.div>
        </>
      )}
    </div>
  )
}