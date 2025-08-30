"use client"

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  isHydrationError: boolean
}

/**
 * Error Boundary specifically designed to catch and handle hydration errors
 * This component will catch hydration mismatches and gracefully recover
 */
export class HydrationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, isHydrationError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if this is a hydration error
    const isHydrationError = 
      error.message.includes('hydration') ||
      error.message.includes('Hydration') ||
      error.message.includes('server rendered HTML') ||
      error.message.includes('client properties') ||
      error.stack?.includes('hydration')

    return {
      hasError: true,
      isHydrationError
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log hydration errors for debugging
    if (this.state.isHydrationError) {
      console.warn('Hydration error caught by boundary:', error.message)
      console.warn('Error info:', errorInfo)
      
      // Clean up browser extension attributes when hydration error occurs
      this.cleanupBrowserExtensions()
    } else {
      console.error('Non-hydration error caught:', error, errorInfo)
    }
  }

  cleanupBrowserExtensions = () => {
    try {
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
    } catch (e) {
      console.warn('Failed to cleanup browser extension attributes:', e)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.state.isHydrationError) {
        // For hydration errors, try to recover by re-rendering on client side
        return (
          <div suppressHydrationWarning>
            {this.props.children}
          </div>
        )
      } else {
        // For other errors, show fallback UI
        return this.props.fallback || (
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-red-600">Something went wrong</h2>
            <p className="text-sm text-gray-600 mt-2">
              Please refresh the page to try again.
            </p>
          </div>
        )
      }
    }

    return this.props.children
  }
}

/**
 * Hook-based hydration error handler for functional components
 */
export function useHydrationErrorHandler() {
  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (
        event.message.includes('hydration') ||
        event.message.includes('Hydration') ||
        event.message.includes('server rendered HTML')
      ) {
        console.warn('Hydration error detected:', event.message)
        
        // Clean up browser extension attributes
        const body = document.body
        if (body) {
          const extensionAttributes = [
            'cz-shortcut-listen',
            'data-new-gr-c-s-check-loaded',
            'data-gr-ext-installed'
          ]
          
          extensionAttributes.forEach(attr => {
            if (body.hasAttribute(attr)) {
              body.removeAttribute(attr)
            }
          })
        }
      }
    }

    window.addEventListener('error', handleError)
    
    return () => {
      window.removeEventListener('error', handleError)
    }
  }, [])
}

/**
 * Comprehensive hydration-safe wrapper component
 * Combines error boundary with client-side rendering for maximum compatibility
 */
export function HydrationSafeWrapper({ 
  children, 
  fallback 
}: { 
  children: ReactNode
  fallback?: ReactNode 
}) {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
    
    // Clean up browser extension attributes on mount
    const cleanupExtensions = () => {
      const body = document.body
      if (body) {
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
    
    cleanupExtensions()
    
    // Set up periodic cleanup for aggressive extensions
    const cleanupInterval = setInterval(cleanupExtensions, 1000)
    
    // Stop after 10 seconds
    const stopCleanup = setTimeout(() => {
      clearInterval(cleanupInterval)
    }, 10000)
    
    return () => {
      clearInterval(cleanupInterval)
      clearTimeout(stopCleanup)
    }
  }, [])

  // Use error boundary to catch hydration errors
  return (
    <HydrationErrorBoundary fallback={fallback}>
      <div suppressHydrationWarning>
        {mounted ? children : (fallback || children)}
      </div>
    </HydrationErrorBoundary>
  )
}
