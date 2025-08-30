"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface IndustryStatsStackedProps {
  stats: Array<{ industry: string; percentage: string }>
  className?: string
}

export function IndustryStatsStacked({ stats, className }: IndustryStatsStackedProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const values = stats.map((s) => parseInt(s.percentage))
  const total = values.reduce((a, b) => a + b, 0)

  return (
    <div ref={ref} className={cn("w-full max-w-5xl", className)}>
      {/* Stacked bar */}
      <div className="w-full rounded-full bg-gray-100 dark:bg-gray-800 h-4 md:h-5 overflow-hidden border border-gray-200/80 dark:border-white/10">
        <div className="flex w-full h-full">
          {stats.map((s, i) => {
            const pct = Math.max(0, Math.min(100, parseInt(s.percentage)))
            const width = `${(pct / total) * 100}%`
            // subtle shade shift per segment
            const alpha = 0.85 - i * 0.12
            return (
              <motion.div
                key={s.industry}
                initial={{ width: 0 }}
                animate={isInView ? { width } : {}}
                transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
                style={{ background: `hsl(var(--primary) / ${alpha})` }}
                aria-label={`${s.industry} ${s.percentage}`}
              />
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.industry}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            className="flex items-start gap-3"
          >
            <span
              className="mt-1 inline-block size-2.5 rounded-full flex-none"
              style={{ background: `hsl(var(--primary) / ${0.9 - i * 0.12})` }}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{s.industry}</span>
                <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100" style={{ letterSpacing: "-0.02em" }}>{s.percentage}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}












