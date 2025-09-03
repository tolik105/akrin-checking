"use client"
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { OptimizedImage } from '@/components/ui/optimized-image'

export function HeroServicesRow() {
  const { t } = useTranslation('common')

  const services = [
    {
      id: 1,
      title: t('nav.managedItSupport'),
      image: '/images/banners/it-managed-services/banner.avif',
      link: '/services/it-managed-services',
      blurb: t('services.managedIT.description')
    },
    {
      id: 2,
      title: t('nav.cybersecurity'),
      image: '/images/banners/cybersecurity/banner1.avif',
      link: '/services/cybersecurity',
      blurb: t('services.cyberSecurity.description')
    },
    {
      id: 3,
      title: t('nav.itConsultingProjectManagement'),
      image: '/images/banners/it-consulting-project-management/hero-banner.avif',
      link: '/services/it-consulting-project-management',
      blurb: t('services.consulting.description')
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((s, index) => {
          const isReversed = index % 2 === 1
          return (
            <div
              key={s.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12 border-t border-gray-200 first:border-t-0"
            >
              {/* Image */}
              <div className={`relative h-64 sm:h-80 lg:h-96 ${isReversed ? 'md:order-2' : ''}`}>
                <OptimizedImage
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover rounded-lg"
                  priority={false}
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  quality={85}
                  placeholder="empty"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-gray-200" />
              </div>

              {/* Text */}
              <div className={`${isReversed ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                  {s.title}
                </h3>
                {s.blurb && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {s.blurb}
                  </p>
                )}
                <div className="mt-6">
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
                    aria-label={`${s.title} – ${t('common.learnMore')}`}
                  >
                    <span className="text-sm sm:text-base font-medium">{t('common.learnMore')}</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
