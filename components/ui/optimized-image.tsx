"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
  loading?: "lazy" | "eager"
  onLoad?: () => void
  onError?: () => void
}

// Function to get the best available image format
function getOptimizedImageSrc(originalSrc: string): string {
  // If it's already an AVIF file, return as is
  if (originalSrc.endsWith('.avif')) {
    return originalSrc
  }
  // Convert .webp or .jpg/.png to .avif if possible (basic heuristic)
  if (originalSrc.endsWith('.webp')) {
    return originalSrc.replace('.webp', '.avif')
  }
  if (originalSrc.endsWith('.jpg')) {
    return originalSrc.replace('.jpg', '.avif')
  }
  if (originalSrc.endsWith('.jpeg')) {
    return originalSrc.replace('.jpeg', '.avif')
  }
  if (originalSrc.endsWith('.png')) {
    return originalSrc.replace('.png', '.avif')
  }
  return originalSrc
}

function getImageFallbacks(originalSrc: string): string[] {
  const fallbacks: string[] = []

  // Prefer AVIF
  const avif = getOptimizedImageSrc(originalSrc)
  if (avif !== originalSrc) fallbacks.push(avif)

  // WebP fallback
  if (!originalSrc.endsWith('.webp')) {
    if (originalSrc.endsWith('.avif')) {
      fallbacks.push(originalSrc.replace('.avif', '.webp'))
    } else {
      fallbacks.push(originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp'))
    }
  }
  
  // Add original
  fallbacks.push(originalSrc)
  
  return fallbacks
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px",
  quality = 85,
  placeholder = "blur",
  blurDataURL,
  objectFit = "cover",
  objectPosition = "center",
  loading = "lazy",
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(getOptimizedImageSrc(src))
  const [hasError, setHasError] = useState(false)
  const [fallbackIndex, setFallbackIndex] = useState(0)
  
  const fallbacks = getImageFallbacks(src)

  const handleError = () => {
    // Try next fallback
    if (fallbackIndex < fallbacks.length - 1) {
      const nextIndex = fallbackIndex + 1
      setFallbackIndex(nextIndex)
      setImageSrc(fallbacks[nextIndex])
    } else {
      setHasError(true)
      onError?.()
    }
  }

  const handleLoad = () => {
    setHasError(false)
    onLoad?.()
  }

  // Reset fallback index when src changes
  useEffect(() => {
    setFallbackIndex(0)
    setImageSrc(getOptimizedImageSrc(src))
    setHasError(false)
  }, [src])

  const imageProps = {
    src: imageSrc,
    alt,
    priority,
    quality,
    placeholder,
    blurDataURL: blurDataURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
    sizes,
    className: cn(
      "transition-opacity duration-300 object-cover",
      hasError && "opacity-50",
      className
    ),
    // Avoid inline style differences between SSR and client to prevent hydration mismatches
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? "eager" : loading,
    ...props
  } as const

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
      />
    )
  }

  return (
    <Image
      {...imageProps}
      width={width || 1200}
      height={height || 800}
    />
  )
}

// Responsive image wrapper with aspect ratio
interface ResponsiveOptimizedImageProps extends OptimizedImageProps {
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '9/16'
  containerClassName?: string
}

export function ResponsiveOptimizedImage({
  aspectRatio = '16/9',
  containerClassName,
  ...imageProps
}: ResponsiveOptimizedImageProps) {
  const [w, h] = aspectRatio.split('/')
  return (
    <div className={cn('relative w-full rounded-md overflow-hidden', containerClassName, `aspect-[${w}/${h}]`)}>
      <OptimizedImage {...imageProps} fill />
    </div>
  )
}

// Hero image component optimized for AVIF/WebP
export function HeroOptimizedImage({
  src,
  alt,
  priority = true,
  className,
  containerClassName,
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
  containerClassName?: string
}) {
  return (
    <div className={cn('relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]', containerClassName)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        quality={90}
      />
    </div>
  )
}

// Card image component optimized for AVIF/WebP
export function CardOptimizedImage({
  src,
  alt,
  className,
  containerClassName,
}: {
  src: string
  alt: string
  className?: string
  containerClassName?: string
}) {
  return (
    <ResponsiveOptimizedImage
      src={src}
      alt={alt}
      aspectRatio="16/9"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={className}
      containerClassName={containerClassName}
      quality={85}
    />
  )
}
