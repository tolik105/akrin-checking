import type React from "react"
import type { Metadata } from "next"

// Japanese language metadata with proper hreflang configuration
// Fixed: Using 'en' and 'ja' instead of 'en-US' and 'ja-JP' for proper hreflang output
export const metadata: Metadata = {
  metadataBase: new URL('https://akrin.jp'),
  alternates: {
    canonical: 'https://akrin.jp/ja',
    languages: {
      'en': 'https://akrin.jp',
      'ja': 'https://akrin.jp/ja',
      'x-default': 'https://akrin.jp'
    }
  },
  openGraph: {
    locale: 'ja_JP',
    alternateLocale: 'en_US',
  },
}

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  // NavbarSimple is already rendered in the root layout, so we just pass through children
  // Added: Script to ensure lang="ja" is set for all Japanese pages
  // This fixes the hreflang/lang mismatch issue detected by SE Ranking
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `if(document.documentElement.lang!=='ja'){document.documentElement.lang='ja';}`
        }}
      />
      {children}
    </>
  )
}
