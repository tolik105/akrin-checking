import type { Metadata, Viewport } from "next"
// Using local variable fonts instead of Google Fonts imports
import "./globals.css"
import "./mobile-optimizations.css"

import { NavbarSimple } from "@/components/navbar-simple"
import { Footer } from "@/components/footer"
import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { I18nProvider } from "@/components/i18n-provider"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/cookie-consent"
import { GoogleAnalytics } from "@/components/google-analytics"
import { RecaptchaScript } from "@/components/recaptcha-script"
import { HreflangLinks } from "@/components/hreflang-links"
import { BrowserExtensionSafeWrapper } from "@/components/hydration-boundary"
import { HydrationErrorBoundary } from "@/components/hydration-error-boundary"
import { MobilePerformanceOptimizer } from "@/components/mobile-performance"
import PrelineInit from "@/components/preline-init"
import { WebVitals } from "@/components/web-vitals"

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
      en: 'https://akrin.jp',
      ja: 'https://akrin.jp/ja',
      'x-default': 'https://akrin.jp'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // During SSR, read the middleware-injected header to set html lang
  // Fallback to 'en' when not available (static export or client nav)
  const lang = (typeof headers === 'function' ? (require('next/headers').headers().get('x-akrin-lang') as string | null) : null) || 'en'
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <HreflangLinks />
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

      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans" data-lang={undefined}>
        <link rel="preconnect" href="https://img.logo.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//img.logo.dev" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[hsl(var(--primary))] focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <GoogleAnalytics />
        <RecaptchaScript />

        {/* Browser Extension Cleanup Script - Runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Clean up browser extension attributes immediately
                function cleanupExtensionAttributes() {
                  var body = document.body;
                  if (body) {
                    var extensionAttributes = [
                      'cz-shortcut-listen',
                      'data-new-gr-c-s-check-loaded',
                      'data-gr-ext-installed',
                      'spellcheck',
                      'data-gramm',
                      'data-gramm_editor',
                      'data-enable-grammarly',
                      'data-lt-installed'
                    ];

                    extensionAttributes.forEach(function(attr) {
                      if (body.hasAttribute(attr)) {
                        body.removeAttribute(attr);
                      }
                    });
                  }
                }

                // Run cleanup immediately
                cleanupExtensionAttributes();

                // Run cleanup when DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', cleanupExtensionAttributes);
                } else {
                  cleanupExtensionAttributes();
                }

                // Set up a mutation observer to prevent future extension modifications
                if (typeof MutationObserver !== 'undefined') {
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      if (mutation.type === 'attributes' && mutation.target === document.body) {
                        cleanupExtensionAttributes();
                      }
                    });
                  });

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
                  });
                }
              })();
            `
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

