import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MobileImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  fill?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
}

export function MobileImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes,
  fill = false,
  quality = 75,
  placeholder,
  blurDataURL,
  objectFit = 'cover',
  objectPosition = 'center',
}: MobileImageProps) {
  // Default sizes for responsive images
  const defaultSizes = sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  
  // Common image props
  const imageProps = {
    src,
    alt,
    priority,
    quality,
    placeholder,
    blurDataURL,
    sizes: defaultSizes,
    className: cn(
      'transition-opacity duration-300',
      fill && 'object-cover',
      className
    ),
    style: {
      objectFit,
      objectPosition,
    },
  }

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          {...imageProps}
          fill
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
    )
  }

  return (
    <Image
      {...imageProps}
      width={width || 1200}
      height={height || 800}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}

// Responsive image wrapper with aspect ratio
interface ResponsiveImageProps extends MobileImageProps {
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '9/16'
  containerClassName?: string
}

export function ResponsiveImage({
  aspectRatio = '16/9',
  containerClassName,
  ...imageProps
}: ResponsiveImageProps) {
  const aspectRatioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    '9/16': 'aspect-[9/16]',
  }[aspectRatio]

  return (
    <div className={cn('relative w-full overflow-hidden rounded-lg', aspectRatioClass, containerClassName)}>
      <MobileImage {...imageProps} fill />
    </div>
  )
}

// Hero image component optimized for mobile
export function HeroImage({
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
      <MobileImage
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

// Card image component optimized for mobile
export function CardImage({
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
    <ResponsiveImage
      src={src}
      alt={alt}
      aspectRatio="16/9"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={className}
      containerClassName={containerClassName}
      quality={70}
    />
  )
}

// Thumbnail image component
export function ThumbnailImage({
  src,
  alt,
  size = 80,
  className,
}: {
  src: string
  alt: string
  size?: number
  className?: string
}) {
  return (
    <div className={cn(`relative w-[${size}px] h-[${size}px]`, className)}>
      <MobileImage
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        quality={60}
        objectFit="cover"
      />
    </div>
  )
}