"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface AkrinLogoProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
  color?: 'default' | 'white' | 'purple' | 'monochrome'
}

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6', 
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
}

export const AkrinLogo: React.FC<AkrinLogoProps> = ({ 
  className, 
  size = 'md', 
  variant = 'icon',
  color = 'default'
}) => {
  const getColors = () => {
    switch (color) {
      case 'white':
        return {
          purple: '#FFFFFF',
          black: '#FFFFFF'
        }
      case 'purple':
        return {
          purple: '#7A28FF',
          black: '#7A28FF'
        }
      case 'monochrome':
        return {
          purple: 'currentColor',
          black: 'currentColor'
        }
      default:
        return {
          purple: '#7A28FF',
          black: '#1a1a1a'
        }
    }
  }

  const colors = getColors()

  if (variant === 'icon') {
    return (
      <svg
        className={cn(sizeClasses[size], className)}
        viewBox="192 557 499 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_1)">
          {/* Purple accent triangle */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z"
            fill={colors.purple}
            fillOpacity="0.9"
          />
          {/* Black A shape */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z"
            fill={colors.black}
          />
          {/* AKRIN text */}
          <text
            x="320"
            y="600"
            fontSize="24"
            fontWeight="bold"
            fill={colors.black}
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            AKRIN
          </text>
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect width="499" height="80" fill="none" transform="translate(192 557)" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (variant === 'text') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <svg
          className={sizeClasses[size]}
          viewBox="192 557 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z"
              fill={colors.purple}
              fillOpacity="0.9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z"
              fill={colors.black}
            />
          </g>
          <defs>
            <clipPath id="clip0_0_2">
              <rect width="100" height="80" fill="none" transform="translate(192 557)" />
            </clipPath>
          </defs>
        </svg>
        <span 
          className={cn(
            'font-bold tracking-wider',
            size === 'xs' && 'text-xs',
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-base',
            size === 'lg' && 'text-lg',
            size === 'xl' && 'text-xl'
          )}
          style={{ color: colors.black }}
        >
          AKRIN
        </span>
      </div>
    )
  }

  // Full logo with complete branding
  return (
    <svg
      className={cn(sizeClasses[size], className)}
      viewBox="192 557 499 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z"
          fill={colors.purple}
          fillOpacity="0.9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z"
          fill={colors.black}
        />
        <text
          x="320"
          y="600"
          fontSize="32"
          fontWeight="bold"
          fill={colors.black}
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          AKRIN
        </text>
      </g>
      <defs>
        <clipPath id="clip0_0_3">
          <rect width="499" height="80" fill="none" transform="translate(192 557)" />
        </clipPath>
      </defs>
    </svg>
  )
}

// Simplified icon version for small spaces
export const AkrinIcon: React.FC<{
  className?: string;
  size?: number;
  color?: 'default' | 'white' | 'purple' | 'monochrome'
}> = ({
  className,
  size = 16,
  color = 'default'
}) => {
  const getIconColors = () => {
    switch (color) {
      case 'white':
        return {
          purple: '#FFFFFF',
          black: '#FFFFFF'
        }
      case 'purple':
        return {
          purple: '#7A28FF',
          black: '#7A28FF'
        }
      case 'monochrome':
        return {
          purple: 'currentColor',
          black: 'currentColor'
        }
      default:
        return {
          purple: '#7A28FF',
          black: '#1a1a1a'
        }
    }
  }

  const colors = getIconColors()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(32, 32)">
        <g transform="scale(0.75) translate(-236.5, -596)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z"
            fill={colors.purple}
            fillOpacity="0.9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z"
            fill={colors.black}
          />
        </g>
      </g>
    </svg>
  )
}

// Brand colors utility
export const akrinColors = {
  purple: {
    50: '#f3ebff',
    100: '#e6d7ff',
    200: '#cdb0ff',
    300: '#b388ff',
    400: '#9a61ff',
    500: '#7A28FF', // Main brand color
    600: '#6220cc',
    700: '#4a1899',
    800: '#311066',
    900: '#190833'
  },
  gray: {
    50: '#f8f8f8',
    100: '#f0f0f0',
    200: '#e0e0e0',
    300: '#c0c0c0',
    400: '#808080',
    500: '#606060',
    600: '#404040',
    700: '#303030',
    800: '#202020',
    900: '#1a1a1a' // Main brand black
  },
  accent: {
    light: '#e6d7ff',
    dark: '#190833'
  }
}
