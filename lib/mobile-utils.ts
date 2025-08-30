// Mobile utility functions for optimizing the website

// Check if device is mobile
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  const userAgent = window.navigator.userAgent.toLowerCase()
  const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone']
  
  return mobileKeywords.some(keyword => userAgent.includes(keyword)) || window.innerWidth < 768
}

// Check if device supports touch
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  )
}

// Get viewport dimensions
export function getViewportDimensions() {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 }
  }
  
  return {
    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  }
}

// Debounce function for scroll/resize events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Lock body scroll (useful for modals/menus)
export function lockBodyScroll(lock: boolean = true) {
  if (typeof document === 'undefined') return
  
  const body = document.body
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
  
  if (lock) {
    body.style.overflow = 'hidden'
    body.style.paddingRight = `${scrollBarWidth}px`
  } else {
    body.style.overflow = ''
    body.style.paddingRight = ''
  }
}

// Smooth scroll to element
export function smoothScrollTo(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId)
  if (!element) return
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

// Lazy load images using Intersection Observer
export function lazyLoadImages(selector: string = 'img[data-lazy]') {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
  
  const images = document.querySelectorAll(selector)
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        const src = img.dataset.src
        
        if (src) {
          img.src = src
          img.classList.add('loaded')
          img.removeAttribute('data-lazy')
          observer.unobserve(img)
        }
      }
    })
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  })
  
  images.forEach(img => imageObserver.observe(img))
}

// Get responsive image sizes based on viewport
export function getResponsiveImageSizes(breakpoints: {
  mobile: number
  tablet: number
  desktop: number
}) {
  const viewportWidth = getViewportDimensions().width
  
  if (viewportWidth < 640) {
    return `${breakpoints.mobile}vw`
  } else if (viewportWidth < 1024) {
    return `${breakpoints.tablet}vw`
  } else {
    return `${breakpoints.desktop}px`
  }
}

// Format phone number for mobile click-to-call
export function formatPhoneLink(phoneNumber: string): string {
  // Remove all non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, '')
  return `tel:${cleaned}`
}

// Check if reduced motion is preferred
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

// Mobile-friendly date formatter
export function formatDateMobile(date: Date): string {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    return 'Today'
  } else if (diffDays === 1) {
    return 'Yesterday'
  } else if (diffDays < 7) {
    return `${diffDays} days ago`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  } else {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    })
  }
}

// Optimize video for mobile
export function getVideoSource(isMobile: boolean): string {
  return isMobile ? 'mobile' : 'desktop'
}

// Check network connection type
export function getNetworkType(): string {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown'
  }
  
  // @ts-ignore
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  return connection?.effectiveType || 'unknown'
}

// Should reduce data usage (for slow connections)
export function shouldReduceData(): boolean {
  const networkType = getNetworkType()
  return ['slow-2g', '2g', '3g'].includes(networkType)
}

// Mobile-optimized animation duration
export function getAnimationDuration(baseMs: number): number {
  if (prefersReducedMotion()) return 0
  if (isMobileDevice()) return baseMs * 0.8 // Slightly faster on mobile
  return baseMs
}

// Touch event helpers
export const touchEvents = {
  start: isTouchDevice() ? 'touchstart' : 'mousedown',
  move: isTouchDevice() ? 'touchmove' : 'mousemove',
  end: isTouchDevice() ? 'touchend' : 'mouseup'
}

// Get safe area insets for modern phones
export function getSafeAreaInsets() {
  if (typeof window === 'undefined') return { top: 0, bottom: 0, left: 0, right: 0 }
  
  const computedStyle = getComputedStyle(document.documentElement)
  
  return {
    top: parseInt(computedStyle.getPropertyValue('--sat') || '0'),
    bottom: parseInt(computedStyle.getPropertyValue('--sab') || '0'),
    left: parseInt(computedStyle.getPropertyValue('--sal') || '0'),
    right: parseInt(computedStyle.getPropertyValue('--sar') || '0')
  }
}