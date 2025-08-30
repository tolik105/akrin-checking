"use client"

import { motion, useInView } from "framer-motion"
import React from "react"
import { cn } from "@/lib/utils"

interface IndustryStatsBarsProps {
  stats: Array<{
    industry: string
    percentage: string
  }>
  className?: string
}

export function IndustryStatsBars({ stats, className }: IndustryStatsBarsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, idx) => (
          <BarCard key={idx} label={s.industry} percentage={parseInt(s.percentage)} index={idx} />
        ))}
      </div>
    </div>
  )
}

function BarCard({ label, percentage, index }: { label: string; percentage: number; index: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="flex flex-col bg-white dark:bg-gray-900 p-5 md:p-6 rounded-lg shadow-sm border border-gray-200/70 dark:border-white/10">
      <div className="flex items-baseline justify-between mb-3">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-tight max-w-[12ch]">{label}</div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))]"
          style={{ letterSpacing: "-0.04em" }}
        >
          {percentage}%
        </motion.div>
      </div>

      <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 0.8, delay: 0.15 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)"
          }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  )
}












