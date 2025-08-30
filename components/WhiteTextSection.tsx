import type React from "react"

interface WhiteTextSectionProps {
  children: React.ReactNode
  className?: string
}

export function WhiteTextSection({ children, className = "" }: WhiteTextSectionProps) {
  return <div className={`text-white-section ${className}`}>{children}</div>
}

