'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface LogoCarouselProps {
  logos: {
    name: string
    logo?: string
    className?: string
  }[]
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}

export function LogoCarousel({
  logos,
  className,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true
}: LogoCarouselProps) {
  const speedClass = {
    slow: 'animate-scroll-slow',
    normal: 'animate-scroll',
    fast: 'animate-scroll-fast'
  }[speed]

  const directionClass = direction === 'right' ? 'reverse' : ''

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max',
          speedClass,
          directionClass,
          pauseOnHover && 'hover:pause'
        )}
        style={{
          animation: `scroll-${direction} ${speed === 'slow' ? '60s' : speed === 'fast' ? '20s' : '40s'} linear infinite`
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center justify-center mx-6 lg:mx-8 flex-shrink-0"
          >
            {logo.logo ? (
              <div className="relative w-32 lg:w-40 h-16 lg:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group-hover:scale-105 shadow-sm">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className={cn(
                    'h-10 lg:h-12 w-auto max-w-[120px] lg:max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300',
                    logo.className
                  )}
                  style={{
                    imageRendering: 'auto',
                    WebkitImageRendering: '-webkit-optimize-contrast'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-xs font-medium text-gray-700 dark:text-gray-300 text-center px-3" style="font-family: Inter, sans-serif; font-weight: 500;">${logo.name}</span>`;
                    }
                  }}
                />
              </div>
            ) : (
              <div className="w-32 lg:w-40 h-16 lg:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg shadow-sm">
                <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 text-center px-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '500'
                      }}>
                  {logo.name}
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center justify-center mx-6 lg:mx-8 flex-shrink-0"
          >
            {logo.logo ? (
              <div className="relative w-32 lg:w-40 h-16 lg:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group-hover:scale-105 shadow-sm">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className={cn(
                    'h-10 lg:h-12 w-auto max-w-[120px] lg:max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300',
                    logo.className
                  )}
                  style={{
                    imageRendering: 'auto',
                    WebkitImageRendering: '-webkit-optimize-contrast'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-xs font-medium text-gray-700 dark:text-gray-300 text-center px-3" style="font-family: Inter, sans-serif; font-weight: 500;">${logo.name}</span>`;
                    }
                  }}
                />
              </div>
            ) : (
              <div className="w-32 lg:w-40 h-16 lg:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg shadow-sm">
                <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 text-center px-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '500'
                      }}>
                  {logo.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple-50 to-transparent dark:from-purple-900/20 pointer-events-none z-10" />
    </div>
  )
}
