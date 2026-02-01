"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export type Breadcrumb = { label: string; href?: string }

export type HeroDiagonalProps = {
  title: React.ReactNode
  breadcrumbs: Breadcrumb[]
  // Prefer AVIF with optional WebP fallback. If not provided, imageSrc is used with Next/Image.
  imageAvif?: string
  imageWebp?: string
  imageSrc?: string
  imageAlt: string
  imageObjectPosition?: string
  maxWidthClass?: string
  className?: string
  imageScale?: number
  imagePriority?: boolean
}

export function HeroDiagonal({
  title,
  breadcrumbs,
  imageAvif,
  imageWebp,
  imageSrc,
  imageAlt,
  imageObjectPosition = "center bottom",
  maxWidthClass = "max-w-[1280px]",
  className = "",
  imageScale = 1,
  imagePriority = true,
}: HeroDiagonalProps) {
  return (
    <section className={`relative bg-white overflow-hidden ${className}`} aria-labelledby="hero-heading">
      <div className="relative min-h-[64vh] sm:min-h-[72vh] lg:min-h-[84vh] overflow-hidden">
        {/* Grid Container */}
        <div className={`mx-auto ${maxWidthClass} h-full grid grid-cols-12 gap-6 px-6 pt-32 sm:pt-36 md:pt-32`}>
          {/* Breadcrumbs */}
          <div className="col-span-12 pt-3 z-20">
            <nav className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap overflow-x-auto pb-2">
              {breadcrumbs.map((bc, idx) => (
                <span key={idx} className="inline">
                  {idx > 0 && <span className="text-[#6B7280] mx-1">›</span>}
                  {bc.href ? (
                    <Link href={bc.href} className={`inline transition-colors ${idx === breadcrumbs.length - 1 ? "text-[#20B2AA] font-semibold" : "text-[#6B7280] hover:text-[#20B2AA]"}`}>
                      {bc.label}
                    </Link>
                  ) : (
                    <span className={`inline ${idx === breadcrumbs.length - 1 ? "text-[#20B2AA] font-semibold" : "text-[#6B7280]"}`}>{bc.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>

          {/* Main Heading */}
          <div className="col-span-12 sm:col-start-2 sm:col-end-11 row-start-2 z-10 pr-4 sm:pr-8 md:pr-12 xl:pr-16">
            <h1
              id="hero-heading"
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-extrabold text-[#111111] leading-[0.95] tracking-tight mb-2 font-sans max-w-[22ch] md:max-w-[24ch]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title}
            </h1>
          </div>
        </div>

        {/* Diagonal Media Band */}
        <div
          className="absolute inset-0 z-0 diagonal-clip"
          style={{
            // Conservative diagonal to ensure text never intersects the media band
            clipPath: 'polygon(0% 90%, 100% 30%, 100% 100%, 0% 100%)',
          }}
        >
          <div className="absolute inset-0">
            {/* Use Next/Image with AVIF source when available; Next will serve WebP fallback per next.config images.formats */}
            <Image
              src={(imageSrc || imageAvif || imageWebp) ?? ''}
              alt={imageAlt}
              fill
              className="object-cover"
              style={{ objectPosition: imageObjectPosition, transform: `scale(${imageScale})` }}
              priority={imagePriority}
              loading={imagePriority ? 'eager' : 'lazy'}
              quality={75}
              sizes="100vw"
            />
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1280px) {
            .diagonal-clip {
              clip-path: polygon(0% 92%, 100% 36%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 1024px) {
            .diagonal-clip {
              clip-path: polygon(0% 85%, 100% 45%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 768px) {
            .diagonal-clip {
              clip-path: polygon(0% 80%, 100% 55%, 100% 100%, 0% 100%) !important;
            }
          }
          @media (max-width: 640px) {
            .diagonal-clip {
              clip-path: polygon(0% 75%, 100% 65%, 100% 100%, 0% 100%) !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

