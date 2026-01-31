import type React from "react"
import type { Metadata } from "next"

// Japanese language metadata override
export const metadata: Metadata = {
  openGraph: {
    locale: 'ja_JP',
  },
}

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  // NavbarSimple is already rendered in the root layout, so we just pass through children
  return <>{children}</>
}
