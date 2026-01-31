"use client"

import React from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { cn } from "@/lib/utils"

interface IndustryStatsMetricsProps {
  stats: Array<{ industry: string; percentage: string }>
  className?: string
}

export function IndustryStatsMetrics({ stats, className }: IndustryStatsMetricsProps) {
  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("w-full", className)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-gray-200/70 dark:border-white/10">
          {stats.map((s, i) => (
            <m.div
              key={s.industry}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={cn(
                "flex flex-col items-center justify-center text-center py-10 md:py-14",
                // vertical divider for desktop
                i > 0 && "lg:border-l lg:border-gray-200/70 lg:dark:border-white/10",
                // horizontal divider for mobile/tablet rows
                i > 0 && "sm:border-t sm:border-gray-200/70 sm:dark:border-white/10 lg:border-t-0"
              )}
            >
              <div
                className="text-6xl md:text-7xl font-light text-[hsl(var(--primary))]"
                style={{ letterSpacing: "-0.04em" }}
              >
                {s.percentage}
              </div>
              <div className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-[22ch] leading-snug">
                {s.industry}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </LazyMotion>
  )
}












