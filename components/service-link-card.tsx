'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { ComponentType } from 'react'

interface ServiceLinkCardProps {
  icon?: LucideIcon | ComponentType<{ className?: string }>
  title: string
  description: string
  href: string
  ctaText: string
  index?: number
  featured?: boolean
}

export function ServiceLinkCard({ 
  icon: Icon, 
  title, 
  description, 
  href, 
  ctaText,
  index = 0,
  featured = false
}: ServiceLinkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg bg-white border-gray-200">
        <CardHeader className="flex-1">
          {Icon && (
            <div className="mb-4">
              <Icon className="h-16 w-16" />
            </div>
          )}
          <CardTitle className="text-xl font-semibold mb-2 text-gray-900">{title}</CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Link 
            href={href}
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {ctaText}
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}