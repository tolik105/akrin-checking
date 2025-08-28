"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { X, Cookie } from "lucide-react"
import { cn } from "@/lib/utils"

export function CookieConsent() {
  const { t } = useTranslation('common')
  const [showBanner, setShowBanner] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    if (typeof window !== 'undefined') {
      // Check if user has already made a choice
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) {
        // Defer showing banner until after first paint and interaction idle
        const onIdle = () => {
          // additional micro-delay to ensure hero paints first
          setTimeout(() => {
            setShowBanner(true)
            setIsLoading(false)
          }, 800)
        }
        if ('requestIdleCallback' in window) {
          ;(window as any).requestIdleCallback(onIdle, { timeout: 2500 })
        } else {
          // Fallback: show shortly after interactive
          setTimeout(onIdle, 1500)
        }
        return () => {}
      }
    }
    setIsLoading(false)
  }, [])

  const acceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'accepted')
      localStorage.setItem('cookie-consent-date', new Date().toISOString())
    }
    setShowBanner(false)

    // Initialize analytics or other cookie-dependent services here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }

    // Notify listeners (e.g., GA component) that consent was granted
    try {
      window.dispatchEvent(new Event('ga-consent-granted'))
    } catch {}
  }

  const declineCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'declined')
      localStorage.setItem('cookie-consent-date', new Date().toISOString())
    }
    setShowBanner(false)

    // Disable analytics or other cookie-dependent services here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  if (isLoading || !showBanner) return null

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6",
      "animate-in slide-in-from-bottom-5 duration-500"
    )}>
      <Card className="mx-auto max-w-4xl bg-white dark:bg-gray-900 shadow-xl">
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('cookies.title', 'We use cookies')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('cookies.description', 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.')}
                  {' '}
                  <Link 
                    href="/cookies" 
                    className="text-primary hover:text-primary/90 underline underline-offset-2"
                    aria-label="Learn more about our cookie policy"
                  >
                    {t('cookies.learnMore', 'Learn more about our cookie policy')}
                  </Link>
                </p>
              </div>
            </div>
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              onClick={acceptCookies}
              className="w-full sm:w-auto"
            >
              {t('cookies.accept', 'Accept All Cookies')}
            </Button>
            <Button 
              onClick={declineCookies}
              variant="outline"
              className="w-full sm:w-auto"
            >
              {t('cookies.decline', 'Decline Optional Cookies')}
            </Button>
            <Link href="/cookies" className="w-full sm:w-auto">
              <Button 
                variant="ghost"
                className="w-full"
              >
                {t('cookies.customize', 'Cookie Settings')}
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}