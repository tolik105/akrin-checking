"use client"

import { useEffect, useState } from "react"

export function HeroVideoBackground() {
  const [shouldShowVideo, setShouldShowVideo] = useState(false)

  useEffect(() => {
    // Only show video on screens wider than 768px (tablet and up)
    const checkScreenSize = () => {
      setShouldShowVideo(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Don't render anything on mobile - prevents video download
  if (!shouldShowVideo) {
    return null
  }

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024

  return (
    <div className="w-full h-full relative hidden md:block">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/og-image.png"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          filter: isDesktop ? "brightness(0.8) contrast(1.1)" : "brightness(0.7)" 
        }}
      >
        <source src="/video/AKRINKK.mp4" type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${isDesktop ? "bg-black/20" : "bg-black/25"}`} />
    </div>
  )
}
