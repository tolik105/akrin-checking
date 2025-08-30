'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceProcessCardProps {
  step: number
  title: string
  description: string
  index?: number
}

export function ServiceProcessCard({ step, title, description, index = 0 }: ServiceProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full relative overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#20B2AA]">
        <div className="absolute -top-8 -right-8 text-8xl font-bold text-[#20B2AA]/5">
          {step}
        </div>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20B2AA] text-white font-bold">
              {step}
            </span>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}