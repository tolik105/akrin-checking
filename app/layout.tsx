import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { headers as nextHeaders } from "next/headers"
// Using local variable fonts instead of Google Fonts imports
import "./globals.css"

import { NavbarSimple } from "@/components/navbar-simple"
import { Footer } from "@/components/footer"
import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { I18nProvider } from "@/components/i18n-provider"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/cookie-consent"
import { GoogleAnalytics } from "@/components/google-analytics"
import { AnalyticsConsent } from "@/components/analytics-consent"
import { BrowserExtensionSafeWrapper } from "@/components/hydration-boundary"
import { HydrationErrorBoundary } from "@/components/hydration-error-boundary"
import { MobilePerformanceOptimizer } from "@/components/mobile-performance"
import PrelineInit from "@/components/preline-init"
import { WebVitals } from "@/components/web-vitals"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Variable fonts are loaded via CSS @font-face declarations in globals.css

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://akrin.jp'),
  title: {
    default: 'AKRIN株式会社 (AKRIN K.K.) - IT Solutions that Transform Your Business | Japan & Global',
    template: '%s | AKRIN株式会社'
  },
  description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support. Transform your business with our expert IT consulting.',
  keywords: ['AKRIN株式会社', 'AKRIN K.K.', 'アクリン', 'IT solutions Japan', 'managed IT services', 'cybersecurity Japan', 'cloud migration', 'IT support Tokyo', 'IT consulting', 'digital transformation', 'Akrin'],
  authors: [{ name: 'AKRIN株式会社' }],
  creator: 'AKRIN株式会社',
  publisher: 'AKRIN株式会社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AKRIN株式会社 - IT Solutions that Transform Your Business',
    description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support.',
    url: 'https://akrin.jp',
    siteName: 'AKRIN株式会社',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AKRIN株式会社 - Transform Your Business',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKRIN株式会社 - IT Solutions that Transform Your Business',
    description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support.',
    creator: '@akrin',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    ...(process.env.GOOGLE_VERIFICATION_CODE && { google: process.env.GOOGLE_VERIFICATION_CODE }),
    // yandex: process.env.YANDEX_VERIFICATION_CODE, // Uncomment and add if using Yandex
  },
  icons: {
    // Versioned query params to force-refresh in browsers with sticky favicon caches
    icon: [
      { url: '/favicon-32x32.v3.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.v3.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-96x96.v3.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.v3.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon-32x32.v3.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://akrin.jp',
    languages: {
      'en': 'https://akrin.jp',
      'ja': 'https://akrin.jp/ja',
      'x-default': 'https://akrin.jp'
    }
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // During SSR, read the middleware-injected header to set html lang
  // Use multiple fallbacks for reliability
  let lang = 'en'
  try {
    const headersList = await nextHeaders()
    // First try the explicit language header
    const langHeader = headersList.get('x-akrin-lang')
    if (langHeader) {
      lang = langHeader
    } else {
      // Fallback: check pathname header
      const pathname = headersList.get('x-pathname') || ''
      if (pathname.startsWith('/ja')) {
        lang = 'ja'
      }
    }
  } catch {
    // Fallback if headers not available
  }
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Critical resource preloads for better LCP */}
        <link
          rel="preload"
          href="/images/mobile-background/mobile-background.avif"
          as="image"
          type="image/avif"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          href="/fonts/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://akrin.jp/#organization",
                  "name": "AKRIN K.K.",
                  "url": "https://akrin.jp",
                  "logo": "https://akrin.jp/akrin-logo.svg",
                  "sameAs": ["https://www.linkedin.com/company/akrin-kk"],
                  "contactPoint": [{
                    "@type": "ContactPoint",
                    "telephone": "+81-3-6821-1223",
                    "contactType": "customer service",
                    "availableLanguage": ["en", "ja"],
                    "areaServed": ["JP", "Worldwide"]
                  }],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2-4-15 Minamiaoyama 4F",
                    "addressLocality": "Minato City",
                    "addressRegion": "Tokyo",
                    "postalCode": "107-0062",
                    "addressCountry": "JP"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://akrin.jp/#localbusiness",
                  "name": "AKRIN K.K.",
                  "image": "https://akrin.jp/og-image.png",
                  "priceRange": "$$$$",
                  "telephone": "+81-3-6821-1223",
                  "email": "support@akrin.jp",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2-4-15 Minamiaoyama 4F",
                    "addressLocality": "Minato City",
                    "addressRegion": "Tokyo",
                    "postalCode": "107-0062",
                    "addressCountry": "JP"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 35.6712,
                    "longitude": 139.7195
                  },
                  "url": "https://akrin.jp",
                  "areaServed": {"@type": "Country", "name": "Japan"},
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "IT Services",
                    "itemListElement": [
                      { "@type": "Service", "name": "Managed IT Services" },
                      { "@type": "Service", "name": "Cybersecurity Solutions" },
                      { "@type": "Service", "name": "Cloud Migration" },
                      { "@type": "Service", "name": "IT Support" }
                    ]
                  }
                }
              ]
            }),
          }}
        />


        {/* Premium Font Preloading for Performance */}
        <link
          rel="preload"
          href="/fonts/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lora.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Explicit favicon links for robust browser support (v3 teal) */}
        <link rel="icon" href="/favicon-32x32.v3.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.v3.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon-32x32.v3.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
        <link rel="preconnect" href="https://img.logo.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//img.logo.dev" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        {/* Critical CSS for mobile performance and immediate hero rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical: Ensure hero text renders immediately with system fonts */
            h1, h2, p { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              visibility: visible !important;
            }
            /* Critical mobile-first styles */
            @media (max-width: 768px) {
              body { font-size: 16px; line-height: 1.5; }
              video { display: none !important; }
            }
            /* Prevent layout shift */
            img, video { max-width: 100%; height: auto; }
            /* Font-face with swap */
            @font-face {
              font-family: "Inter Var";
              src: url("/fonts/Inter.var.woff2") format("woff2");
              font-display: swap;
              font-weight: 100 900;
            }
          `
        }} />

      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans" data-lang={undefined}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {/* Defer GA until user interaction to reduce unused JS in LCP */}
        <AnalyticsConsent />

        {/* Browser Extension Cleanup Script - Minified for performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var a=['cz-shortcut-listen','data-new-gr-c-s-check-loaded','data-gr-ext-installed','spellcheck','data-gramm','data-gramm_editor','data-enable-grammarly','data-lt-installed'];function c(){var b=document.body;if(b)a.forEach(function(x){b.hasAttribute(x)&&b.removeAttribute(x)})}c();document.readyState==='loading'?document.addEventListener('DOMContentLoaded',c):c();typeof MutationObserver!=='undefined'&&new MutationObserver(function(m){m.forEach(function(x){x.type==='attributes'&&x.target===document.body&&c()})}).observe(document.body,{attributes:true,attributeFilter:a.slice(0,7)})})();`
          }}
        />




        <HydrationErrorBoundary>
          <BrowserExtensionSafeWrapper>
            <div suppressHydrationWarning={true}>
              <I18nProvider>
                <LanguageProvider>
                  <PrelineInit />
                  <MobilePerformanceOptimizer />
                  <NavbarSimple />
                  <main id="main-content" className="flex-grow">{children}</main>
                  <Footer />
	                  <WhatsAppFloat />

                  <Toaster />
                  <CookieConsent />
                  <WebVitals />
                </LanguageProvider>
              </I18nProvider>
            </div>
          </BrowserExtensionSafeWrapper>
        </HydrationErrorBoundary>
      </body>
    </html>
  )
}

