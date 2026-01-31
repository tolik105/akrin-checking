import type React from "react"
import type { Metadata } from "next"

// Japanese language metadata with proper hreflang configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://akrin.jp'),
  alternates: {
    canonical: 'https://akrin.jp/ja',
    languages: {
      'en-US': 'https://akrin.jp',
      'ja-JP': 'https://akrin.jp/ja',
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
  return <>{children}</>
}
