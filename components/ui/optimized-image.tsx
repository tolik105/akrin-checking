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
  
  // Convert file extensions to AVIF first, then WebP fallback
  const avifSrc = originalSrc
    .replace(/\.(jpeg|jpg|png|webp)$/i, '.avif')
  
  return avifSrc
}

// Function to get fallback image sources
function getImageFallbacks(originalSrc: string): string[] {
  const fallbacks: string[] = []
  
  // Add AVIF version
  const avifSrc = originalSrc.replace(/\.(jpeg|jpg|png|webp)$/i, '.avif')
  fallbacks.push(avifSrc)
  
  // Add WebP version
  const webpSrc = originalSrc.replace(/\.(jpeg|jpg|png)$/i, '.webp')
  fallbacks.push(webpSrc)
  
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
      "transition-opacity duration-300",
      hasError && "opacity-50",
      className
    ),
    style: {
      objectFit: fill ? objectFit : undefined,
      objectPosition: fill ? objectPosition : undefined,
    },
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? "eager" : loading,
    ...props
  }

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
  const aspectRatioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    '9/16': 'aspect-[9/16]',
  }[aspectRatio]

  return (
    <div className={cn('relative w-full overflow-hidden rounded-lg', aspectRatioClass, containerClassName)}>
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
        sizes="100vw"
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
