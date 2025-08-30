"use client"

import { useEffect, useRef, useState } from 'react'

interface AShapeVideoProps {
  className?: string
  videoSrc?: string
  size?: 'small' | 'medium' | 'large'
}

export function AShapeVideo({
  className = '',
  videoSrc,
  size = 'medium'
}: AShapeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented, ignore
      })
    }
  }, [])

  // Determine video source based on device type if not explicitly provided
  const getVideoSrc = () => {
    if (videoSrc) return videoSrc
    return isMobile ? '/video/AKRINKK-M.mp4' : '/video/AKRINKK.mp4'
  }

  // Size configurations
  const sizeConfig = {
    small: { width: 120, height: 120, viewBox: "0 0 600 600" },
    medium: { width: 200, height: 200, viewBox: "0 0 600 600" },
    large: { width: 300, height: 300, viewBox: "0 0 600 600" }
  }

  const config = sizeConfig[size]

  return (
    <div className={`relative inline-block ${className}`} style={{ width: config.width, height: config.height }}>
      <svg 
        width={config.width} 
        height={config.height} 
        viewBox={config.viewBox}
        className="absolute inset-0"
      >
        <defs>
          <clipPath id={`aLetterClipMobile-${size}`}>
            {/* Simplified A shape for mobile */}
            <path d="M300 100 L450 500 L380 500 L340 380 L260 380 L220 500 L150 500 L300 100 Z M300 200 L280 320 L320 320 L300 200 Z" fill="white"/>
          </clipPath>
          {/* Gradient for fallback */}
          <linearGradient id={`aGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Background A shape with gradient */}
        <path 
          d="M300 100 L450 500 L380 500 L340 380 L260 380 L220 500 L150 500 L300 100 Z M300 200 L280 320 L320 320 L300 200 Z" 
          fill={`url(#aGradient-${size})`}
          opacity="0.1"
        />
        
        {/* Video clipped to A shape */}
        <foreignObject 
          x="0" 
          y="0" 
          width={config.width} 
          height={config.height} 
          clipPath={`url(#aLetterClipMobile-${size})`}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              width: config.width, 
              height: config.height,
            }}
          >
            <source src={getVideoSrc()} type="video/mp4" />
          </video>
        </foreignObject>
        
        {/* A outline */}
        <path 
          d="M300 100 L450 500 L380 500 L340 380 L260 380 L220 500 L150 500 L300 100 Z M300 200 L280 320 L320 320 L300 200 Z" 
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}

// Animated A shape without video (for performance)
export function AShapeAnimated({ 
  className = '', 
  size = 'medium' 
}: Omit<AShapeVideoProps, 'videoSrc'>) {
  const sizeConfig = {
    small: { width: 120, height: 120, viewBox: "0 0 600 600" },
    medium: { width: 200, height: 200, viewBox: "0 0 600 600" },
    large: { width: 300, height: 300, viewBox: "0 0 600 600" }
  }

  const config = sizeConfig[size]

  return (
    <div className={`relative inline-block ${className}`} style={{ width: config.width, height: config.height }}>
      <svg 
        width={config.width} 
        height={config.height} 
        viewBox={config.viewBox}
        className="absolute inset-0"
      >
        <defs>
          {/* Animated gradient */}
          <linearGradient id={`aGradientAnimated-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899">
              <animate attributeName="stop-color" values="#ec4899;#8b5cf6;#06b6d4;#ec4899" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#06b6d4;#ec4899;#8b5cf6" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4;#ec4899;#8b5cf6;#06b6d4" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Glow filter */}
          <filter id={`glow-${size}`}>
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated A shape */}
        <path 
          d="M300 100 L450 500 L380 500 L340 380 L260 380 L220 500 L150 500 L300 100 Z M300 200 L280 320 L320 320 L300 200 Z" 
          fill={`url(#aGradientAnimated-${size})`}
          filter={`url(#glow-${size})`}
          className="animate-pulse"
        />
        
        {/* A outline */}
        <path 
          d="M300 100 L450 500 L380 500 L340 380 L260 380 L220 500 L150 500 L300 100 Z M300 200 L280 320 L320 320 L300 200 Z" 
          fill="none"
          stroke="white"
          strokeWidth="3"
          opacity="0.8"
        />
      </svg>
    </div>
  )
}