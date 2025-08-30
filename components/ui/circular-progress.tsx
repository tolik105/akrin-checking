'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CircularProgressProps {
  percentage: number
  label: string
  size?: number
  strokeWidth?: number
  className?: string
  delay?: number
}

export function CircularProgress({
  percentage,
  label,
  size = 200,
  strokeWidth = 8,
  className,
  delay = 0
}: CircularProgressProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  
  const radius = (size - strokeWidth) / 2
  const centerX = size / 2
  const centerY = size / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = percentage / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= percentage) {
          setAnimatedPercentage(percentage)
          clearInterval(timer)
        } else {
          setAnimatedPercentage(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isInView, percentage])

  // Calculate stroke dash properties
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  const gradId = `grad-${label.replace(/\W+/g, '')}`

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={cn('flex flex-col items-center group', className)}
    >
      {/* Circular progress container */}
      <div 
        className="relative" 
        style={{ 
          width: size, 
          height: size
        }}
      >
        <img
          src="/images/cycle.svg"
          alt="Industry distribution"
          className="w-full h-full object-contain"
        />
        {/* Overlay vector ring for percentage */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
          role="img"
          aria-label={`${animatedPercentage}% ${label}`}
        >
		  <defs>
				<linearGradient id={`grad-${label.replace(/\W+/g, '')}`}>
					<stop offset="0%" stopColor={"hsl(var(--primary))"} />
					<stop offset="100%" stopColor={"hsl(var(--primary))"} />
				</linearGradient>
			</defs>
          {/* Track */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            opacity={0.5}
          />
          {/* Progress */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke={`url(#grad-${label.replace(/\W+/g, '')})`}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${centerX} ${centerY})`}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
            className="text-center group-hover:scale-105 transition-transform duration-500"
          >
				<div 
					className="text-5xl lg:text-6xl font-bold"
					style={{
						fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
						fontWeight: '700',
						letterSpacing: '-0.04em',
						color: 'hsl(var(--primary))'
					}}
				>
              {animatedPercentage}%
            </div>
          </motion.div>
        </div>
      </div>

      {/* Label */}
      <div className="mt-4 text-center max-w-[200px]">
        <h4 
          className="text-sm lg:text-base font-medium text-gray-900 dark:text-gray-100 leading-tight"
          style={{
            fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
            fontWeight: '500',
            lineHeight: '1.3',
            letterSpacing: '-0.01em'
          }}
        >
          {label}
        </h4>
      </div>
    </motion.div>
  )
}

// High-fidelity segmented circular stat (dashed arc style)
interface SegmentedCircularProgressProps {
  percentage: number
  label: string
  size?: number
  strokeWidth?: number
  segments?: number
  className?: string
  delay?: number
}

function interpolateColorHex(start: string, end: string, t: number): string {
  const s = start.replace('#', '')
  const e = end.replace('#', '')
  const sr = parseInt(s.substring(0, 2), 16)
  const sg = parseInt(s.substring(2, 4), 16)
  const sb = parseInt(s.substring(4, 6), 16)
  const er = parseInt(e.substring(0, 2), 16)
  const eg = parseInt(e.substring(2, 4), 16)
  const eb = parseInt(e.substring(4, 6), 16)
  const r = Math.round(sr + (er - sr) * t)
  const g = Math.round(sg + (eg - sg) * t)
  const b = Math.round(sb + (eb - sb) * t)
  const hex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${hex(r)}${hex(g)}${hex(b)}`
}

export function SegmentedCircularProgress({
  percentage,
  label,
  size = 240,
  strokeWidth = 14,
  segments = 72,
  className,
  delay = 0
}: SegmentedCircularProgressProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const center = size / 2
  const radius = (size - strokeWidth) / 2
  const step = (2 * Math.PI) / segments
  const arc = step * 0.65
  const activeSegments = Math.floor((percentage / 100) * segments)
  const startAngle = Math.PI / 2
  const segmentsArray = Array.from({ length: segments }, (_, i) => i)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={cn('flex flex-col items-center', className)}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative z-10">
          {segmentsArray.map((i) => {
            const a1 = startAngle + i * step
            const a2 = a1 + arc
            const x1 = center + radius * Math.cos(a1)
            const y1 = center + radius * Math.sin(a1)
            const x2 = center + radius * Math.cos(a2)
            const y2 = center + radius * Math.sin(a2)
            const isActive = i < activeSegments
            const t = segments <= 1 ? 1 : i / Math.max(activeSegments - 1, 1)
            const stroke = isActive
              ? interpolateColorHex('#0fb5a9', '#0b857e', Math.min(Math.max(t, 0), 1))
              : '#E5E7EB'
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            )
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
          <div className="text-6xl font-bold" style={{ color: 'hsl(var(--primary))', letterSpacing: '-0.04em' }}>
            {percentage}%
          </div>
        </div>
      </div>

      <div className="mt-4 text-center max-w-[220px]">
        <h4 className="text-sm lg:text-base font-medium text-gray-900 dark:text-gray-100 leading-tight">
          {label}
        </h4>
      </div>
    </motion.div>
  )
}

interface IndustryStatsProps {
  stats: Array<{
    industry: string
    percentage: string
  }>
  className?: string
}

export function IndustryStats({ stats, className }: IndustryStatsProps) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 py-8', className)}>
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-center">
          <SegmentedCircularProgress
            percentage={parseInt(stat.percentage)}
            label={stat.industry}
            size={240}
            strokeWidth={14}
            segments={72}
            delay={index * 0.15}
            className="hover:scale-105 transition-all duration-500 ease-out"
          />
        </div>
      ))}
    </div>
  )
}