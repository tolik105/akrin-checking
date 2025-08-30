import { NavbarSimple } from "@/components/navbar-simple"
import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavbarSimple />
      {children}
    </>
  )
}
