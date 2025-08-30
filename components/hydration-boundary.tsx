"use client"

import { useEffect, useState } from 'react'

/**
 * HydrationBoundary component to handle browser extension interference
 * This prevents hydration mismatches caused by browser extensions that modify the DOM
 */
export function HydrationBoundary({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Mark as hydrated after the component mounts
    setIsHydrated(true)
    
    // Clean up any browser extension attributes that might cause hydration issues
    const cleanupBrowserExtensionAttributes = () => {
      const body = document.body
      if (body) {
        // Remove common browser extension attributes
        const extensionAttributes = [
          'cz-shortcut-listen',
          'data-new-gr-c-s-check-loaded',
          'data-gr-ext-installed',
          'spellcheck',
          'data-gramm',
          'data-gramm_editor',
          'data-enable-grammarly'
        ]
        
        extensionAttributes.forEach(attr => {
          if (body.hasAttribute(attr)) {
            body.removeAttribute(attr)
          }
        })
      }
    }

    // Clean up immediately
    cleanupBrowserExtensionAttributes()
    
    // Set up a mutation observer to clean up any future extension modifications
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.target === document.body) {
          cleanupBrowserExtensionAttributes()
        }
      })
    })

    // Start observing
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [
        'cz-shortcut-listen',
        'data-new-gr-c-s-check-loaded',
        'data-gr-ext-installed',
        'spellcheck',
        'data-gramm',
        'data-gramm_editor',
        'data-enable-grammarly'
      ]
    })

    // Cleanup function
    return () => {
      observer.disconnect()
    }
  }, [])

  // During SSR and initial hydration, render children normally
  // After hydration, continue rendering normally but with cleanup active
  return <>{children}</>
}

/**
 * NoSSR component that only renders on the client side
 * Use this for components that should never be server-rendered
 */
export function NoSSR({ children, fallback = null }: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

/**
 * ClientOnly component that prevents hydration mismatches
 * This is a more aggressive approach that completely skips SSR for wrapped content
 */
export function ClientOnly({ 
  children, 
  fallback = null 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

/**
 * SafeHydration component that handles hydration errors gracefully
 * This component catches hydration errors and re-renders on the client
 */
export function SafeHydration({ children }: { children: React.ReactNode }) {
  const [hasHydrationError, setHasHydrationError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Listen for hydration errors
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('hydration') || event.message.includes('Hydration')) {
        setHasHydrationError(true)
      }
    }

    window.addEventListener('error', handleError)
    
    return () => {
      window.removeEventListener('error', handleError)
    }
  }, [])

  // If there's a hydration error, force client-side rendering
  if (hasHydrationError) {
    return isClient ? <>{children}</> : null
  }

  return <>{children}</>
}

/**
 * BrowserExtensionSafeWrapper - Comprehensive solution for browser extension issues
 * This component combines multiple strategies to handle browser extension interference
 */
export function BrowserExtensionSafeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Comprehensive cleanup of browser extension artifacts
    const cleanupExtensionArtifacts = () => {
      // Clean up body attributes
      const body = document.body
      if (body) {
        const extensionAttributes = [
          'cz-shortcut-listen',
          'data-new-gr-c-s-check-loaded',
          'data-gr-ext-installed',
          'spellcheck',
          'data-gramm',
          'data-gramm_editor',
          'data-enable-grammarly',
          'data-lt-installed',
          'data-adblock',
          'data-honey-extension',
          'data-lastpass',
          'data-bitwarden'
        ]
        
        extensionAttributes.forEach(attr => {
          if (body.hasAttribute(attr)) {
            body.removeAttribute(attr)
          }
        })
      }

      // Clean up any extension-injected elements
      const extensionSelectors = [
        '[data-honey-extension]',
        '[data-grammarly-extension]',
        '[data-lastpass-extension]',
        '[data-bitwarden-extension]',
        '.honey-extension',
        '.grammarly-extension'
      ]

      extensionSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          if (el.parentNode) {
            el.parentNode.removeChild(el)
          }
        })
      })
    }

    // Initial cleanup
    cleanupExtensionArtifacts()

    // Set up periodic cleanup (every 100ms for the first 2 seconds)
    const cleanupInterval = setInterval(cleanupExtensionArtifacts, 100)
    
    // Stop aggressive cleanup after 2 seconds
    const stopAggressiveCleanup = setTimeout(() => {
      clearInterval(cleanupInterval)
      
      // Set up less frequent cleanup (every 5 seconds)
      const gentleCleanupInterval = setInterval(cleanupExtensionArtifacts, 5000)
      
      // Return cleanup function for the gentle interval
      return () => clearInterval(gentleCleanupInterval)
    }, 2000)

    // Cleanup function
    return () => {
      clearInterval(cleanupInterval)
      clearTimeout(stopAggressiveCleanup)
    }
  }, [])

  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  )
}
