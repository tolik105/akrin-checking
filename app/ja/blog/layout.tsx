import type { Metadata } from "next"
// import { Footer } from "@/components/footer"
import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { I18nProvider } from "@/components/i18n-provider"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/cookie-consent"
import { GoogleAnalytics } from "@/components/google-analytics"
import { HreflangLinks } from "@/components/hreflang-links"
import { BrowserExtensionSafeWrapper } from "@/components/hydration-boundary"
import { HydrationErrorBoundary } from "@/components/hydration-error-boundary"
import { MobilePerformanceOptimizer } from "@/components/mobile-performance"
import PrelineInit from "@/components/preline-init"

export const metadata: Metadata = {
  title: {
    default: 'AKRIN ITブログ - 専門家の洞察とテクノロジートレンド',
    template: '%s | AKRIN ITブログ'
  },
  description: 'AKRIN技術専門家による日本のITインフラ、サイバーセキュリティ、デジタルトランスフォーメーションに関する専門的な洞察。',
}

interface BlogLayoutProps {
  children: React.ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <HydrationErrorBoundary>
      <BrowserExtensionSafeWrapper>
        <div suppressHydrationWarning={true} data-blog-page>
          <I18nProvider>
            <LanguageProvider>
              <PrelineInit />
              <MobilePerformanceOptimizer />
              {/* No main site navigation - blog pages have their own navigation */}
              <main id="main-content" className="flex-grow min-h-screen">{children}</main>
              {/* Footer, Toaster, CookieConsent are provided by root layout */}
            </LanguageProvider>
          </I18nProvider>
        </div>
      </BrowserExtensionSafeWrapper>
    </HydrationErrorBoundary>
  )
}
