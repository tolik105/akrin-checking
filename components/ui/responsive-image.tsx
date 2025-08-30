"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  aspectRatio?: "square" | "video" | "4-3" | "3-2" | "auto"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  quality?: number
  loading?: "lazy" | "eager"
  onLoad?: () => void
  onError?: () => void
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes = "(max-width: 352px) 100vw, (max-width: 425px) 90vw, (max-width: 576px) 85vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw",
  aspectRatio = "auto",
  objectFit = "cover",
  placeholder = "blur",
  blurDataURL,
  quality = 90,
  loading = "lazy",
  onLoad,
  onError,
  ...props
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    "4-3": "aspect-4-3",
    "3-2": "aspect-[3/2]",
    auto: ""
  }

  // Fortitude-inspired intersection observer for lazy loading
  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Load 50px before coming into view
        threshold: 0.1
      }
    )

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div className={cn(
        "flex items-center justify-center bg-gray-100 text-gray-400 text-sm",
        aspectRatioClasses[aspectRatio],
        className
      )}>
        <div className="text-center">
          <div className="mb-2">📷</div>
          <div>Image unavailable</div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={imgRef}
      className={cn(
        "relative overflow-hidden",
        aspectRatioClasses[aspectRatio],
        className
      )}
      style={{
        // Fortitude-style contain-intrinsic-size for layout stability
        containIntrinsicSize: aspectRatio === "auto" ? undefined : "300px 200px"
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      )}
      
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          quality={quality}
          loading={priority ? "eager" : "lazy"}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={cn(
            "transition-all duration-500 ease-out",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            objectFit === "none" && "object-none",
            objectFit === "scale-down" && "object-scale-down",
            isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  )
}

// Fortitude-Inspired Preset responsive image components
export function HeroImage(props: Omit<ResponsiveImageProps, "aspectRatio" | "sizes">) {
  return (
    <ResponsiveImage
      {...props}
      aspectRatio="video"
      sizes="100vw"
      priority
      quality={95}
      className={cn("hero-image", props.className)}
    />
  )
}

export function CardImage(props: Omit<ResponsiveImageProps, "aspectRatio" | "sizes">) {
  return (
    <ResponsiveImage
      {...props}
      aspectRatio="4-3"
      sizes="(max-width: 352px) 100vw, (max-width: 425px) 90vw, (max-width: 576px) 85vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
      quality={85}
      className={cn("card-image", props.className)}
    />
  )
}

export function AvatarImage(props: Omit<ResponsiveImageProps, "aspectRatio" | "sizes">) {
  return (
    <ResponsiveImage
      {...props}
      aspectRatio="square"
      sizes="(max-width: 352px) 60px, (max-width: 425px) 70px, (max-width: 576px) 80px, (max-width: 768px) 90px, 120px"
      quality={80}
      className={cn("avatar-image", props.className)}
    />
  )
}

export function LogoImage(props: Omit<ResponsiveImageProps, "aspectRatio" | "objectFit">) {
  return (
    <ResponsiveImage
      {...props}
      aspectRatio="auto"
      objectFit="contain"
      quality={100}
      className={cn("logo-image", props.className)}
    />
  )
}

export function ThumbnailImage(props: Omit<ResponsiveImageProps, "aspectRatio" | "sizes">) {
  return (
    <ResponsiveImage
      {...props}
      aspectRatio="square"
      sizes="(max-width: 352px) 120px, (max-width: 425px) 140px, (max-width: 576px) 160px, (max-width: 768px) 180px, 200px"
      quality={80}
      className={cn("thumbnail-image", props.className)}
    />
  )
}