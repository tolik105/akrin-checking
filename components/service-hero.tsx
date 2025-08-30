'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ServiceHeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref?: string
  backgroundPattern?: boolean
}

export function ServiceHero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaHref = '/book-reservation',
  backgroundPattern = true 
}: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-foreground/20 text-primary-foreground py-32 overflow-hidden">
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
      )}
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            {subtitle}
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href={ctaHref}>
              {ctaText}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}