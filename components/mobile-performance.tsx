"use client"

import { useEffect } from 'react'
import { lazyLoadImages, isMobileDevice, shouldReduceData } from '@/lib/mobile-utils'

export function MobilePerformanceOptimizer() {
  useEffect(() => {
    // Initialize lazy loading for images
    lazyLoadImages()
    
    // Add mobile-specific performance optimizations
    if (isMobileDevice()) {
      // Reduce animation complexity on mobile
      document.documentElement.classList.add('mobile-device')
      
      // Check for slow connection
      if (shouldReduceData()) {
        document.documentElement.classList.add('reduce-data')
      }
    }
    
    // Add touch-specific classes
    if ('ontouchstart' in window) {
      document.documentElement.classList.add('touch-device')
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