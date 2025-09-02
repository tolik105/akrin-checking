"use client"

import { useEffect } from 'react'
import { lazyLoadImages, isMobileDevice, shouldReduceData } from '@/lib/mobile-utils'

export function MobilePerformanceOptimizer() {
  useEffect(() => {
    // Initialize lazy loading for images (deferred to idle to avoid blocking LCP/TBT)
    if (typeof (window as any).requestIdleCallback === 'function') {
      (window as any).requestIdleCallback(() => { try { lazyLoadImages() } catch {} })
    } else {
      setTimeout(() => { try { lazyLoadImages() } catch {} }, 1)
    }

    // Add mobile-specific performance optimizations
    if (isMobileDevice()) {
      // Reduce animation complexity on mobile
      document.documentElement.classList.add('mobile-device')
      
      // Check for slow connection
      if (shouldReduceData()) {
        document.documentElement.classList.add('reduce-data')
      }
    }
    
    // Add touch-specific classes and optimizations
    if ('ontouchstart' in window) {
      document.documentElement.classList.add('touch-device')

      // Add mobile touch optimizations
      const style = document.createElement('style')
      style.textContent = `
        /* Mobile touch optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }

        /* Touch optimization for better responsiveness */
        button, a, [role="button"] {
          touch-action: manipulation;
          cursor: pointer;
        }

        /* Reduce input delay */
        input, textarea, select {
          touch-action: manipulation;
        }

        /* Optimize scrolling performance */
        body {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: none;
        }

        /* Optimize images for mobile */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `
      document.head.appendChild(style)
    }
    
    // Handle viewport height changes (for mobile browsers with dynamic toolbars)
    function updateViewportHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    
    updateViewportHeight()
    window.addEventListener('resize', updateViewportHeight)
    window.addEventListener('orientationchange', updateViewportHeight)
    
    // Clean up safe area CSS variables
    const safeAreaTop = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top)')
    const safeAreaBottom = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)')
    const safeAreaLeft = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-left)')
    const safeAreaRight = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-right)')
    
    document.documentElement.style.setProperty('--sat', safeAreaTop || '0px')
    document.documentElement.style.setProperty('--sab', safeAreaBottom || '0px')
    document.documentElement.style.setProperty('--sal', safeAreaLeft || '0px')
    document.documentElement.style.setProperty('--sar', safeAreaRight || '0px')
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight)
      window.removeEventListener('orientationchange', updateViewportHeight)
    }
  }, [])
  
  return null
}