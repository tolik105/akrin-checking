'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import { ComponentType } from 'react'

interface ServiceFeatureCardProps {
  icon: LucideIcon | ComponentType<{ className?: string }>
  title: string
  description: string
  index?: number
  variant?: 'default' | 'gradient' | 'bordered'
}

export function ServiceFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  index = 0,
  variant = 'default' 
}: ServiceFeatureCardProps) {
  const cardVariants = {
    default: "bg-card hover:shadow-xl",
    gradient: "bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 border-primary/20",
    bordered: "border-2 hover:border-primary hover:shadow-xl"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className={`h-full transition-all duration-300 ${cardVariants[variant]}`}>
        <CardHeader>
          <div className="mb-4 inline-flex">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}