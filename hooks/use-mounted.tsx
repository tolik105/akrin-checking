"use client"

import { useEffect, useState } from 'react'

/**
 * Hook to prevent hydration mismatches by ensuring components only render on client
 * Returns true only after the component has mounted on the client side
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

/**
 * Component wrapper that prevents hydration mismatches
 * Only renders children after component has mounted on client side
 * Enhanced version that also handles browser extension interference
 */
export function ClientOnly({
  children,
  fallback = null
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Clean up browser extension attributes that might cause hydration issues
    const cleanupExtensionAttributes = () => {
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

    cleanupExtensionAttributes()
  }, [])

  if (!mounted) {
    return <>{fallback}</>
  }

  return <div suppressHydrationWarning>{children}</div>
}
