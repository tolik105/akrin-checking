'use client'

import { ServiceHero } from '@/components/service-hero'
import { ServiceFeatureCard } from '@/components/service-feature-card'
import { ServiceProcessCard } from '@/components/service-process-card'
import { ServiceCTASection } from '@/components/service-cta-section'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ServiceSection {
  title: string
  subtitle?: string
  items: Array<{
    icon?: LucideIcon
    title: string
    description: string
    step?: number
  }>
  type: 'features' | 'process' | 'benefits'
  variant?: 'default' | 'accent' | 'gradient'
}

interface ServicePageTemplateProps {
  heroTitle: string
  heroSubtitle: string
  heroCtaText: string
  heroCtaHref?: string
  sections: ServiceSection[]
  ctaTitle: string
  ctaDescription: string
  ctaText: string
  ctaHref?: string
  ctaVariant?: 'primary' | 'accent' | 'gradient'
}

export function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  heroCtaText,
  heroCtaHref,
  sections,
  ctaTitle,
  ctaDescription,
  ctaText,
  ctaHref,
  ctaVariant = 'gradient'
}: ServicePageTemplateProps) {
  const { t } = useTranslation('common')

  const sectionVariants = {
    default: '',
    accent: 'bg-accent',
    gradient: 'bg-gradient-to-b from-background to-accent/5'
  }

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={heroCtaText}
        ctaHref={heroCtaHref}
      />

      {sections.map((section, sectionIndex) => (
        <section 
          key={sectionIndex} 
          className={`py-24 ${sectionVariants[section.variant || 'default']}`}
        >
          <div className="container">
            {section.title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {section.subtitle}
                  </p>
                )}
              </motion.div>
            )}
            
            <div className={`grid gap-8 ${
              section.type === 'process' 
                ? 'md:grid-cols-1 lg:grid-cols-2' 
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {section.items.map((item, index) => {
                if (section.type === 'process' && item.step) {
                  return (
                    <ServiceProcessCard
                      key={index}
                      step={item.step}
                      title={item.title}
                      description={item.description}
                      index={index}
                    />
                  )
                } else if (item.icon) {
                  return (
                    <ServiceFeatureCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      index={index}
                      variant={
                        section.type === 'benefits' 
                          ? 'bordered' 
                          : index % 3 === 0 
                            ? 'gradient' 
                            : 'default'
                      }
                    />
                  )
                }
                return null
              })}
            </div>
          </div>
        </section>
      ))}

      <ServiceCTASection
        title={ctaTitle}
        description={ctaDescription}
        ctaText={ctaText}
        ctaHref={ctaHref}
        variant={ctaVariant}
      />
    </main>
  )
}