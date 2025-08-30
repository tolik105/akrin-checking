"use client"
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { getCaseStudyHero } from '@/lib/case-study-assets'

type CaseCard = {
  title: string
  slug: string
  date?: string
  locale: 'en' | 'ja'
  image?: string
}

export function HomeCaseStudies() {
  const { i18n } = useTranslation('common')
  const isJa = i18n.language === 'ja'
  const [items, setItems] = useState<CaseCard[] | null>(null)

  useEffect(() => {
    let cancelled = false
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/case-studies?locale=${isJa ? 'ja' : 'en'}&limit=4`, { cache: 'no-store' })
        const data: CaseCard[] = await res.json()
        if (!cancelled) setItems(data)
      } catch {
        if (!cancelled) setItems([])
      }
    }
    fetchData()
    return () => { cancelled = true }
  }, [isJa])

  const prefix = isJa ? '/ja' : ''
  const sectionTitle = isJa ? '導入事例' : 'Case Studies'
  const seeMore = isJa ? 'もっと見る →' : 'See more →'
  const cta = isJa ? '詳しく見る' : 'Learn more'

  const handleCardClick = (card: CaseCard, index: number) => {
    try {
      ;(window as any)?.dataLayer?.push({
        event: 'case_card_click',
        slug: card.slug,
        title: card.title,
        index,
        locale: isJa ? 'ja' : 'en'
      })
    } catch {}
  }

  const handleSeeMore = () => {
    try {
      ;(window as any)?.dataLayer?.push({ event: 'case_see_more_click', locale: isJa ? 'ja' : 'en' })
    } catch {}
  }

  const cards = useMemo(() => items || [], [items])

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header bar matching NSC design exactly */}
        <div className="mb-4">
          <div className="flex items-center justify-between bg-gray-100 px-6 py-5 rounded-t-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{sectionTitle}</h2>
            <Link href={`${prefix}/case-studies`} prefetch className="group inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]" aria-label={seeMore} onClick={handleSeeMore}>
              See more
              <svg className="h-3 w-3 text-[hsl(var(--primary))] transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Tile strip - edge-to-edge, chamfered bottom-right corner like NSC */}
        <div
          className="overflow-hidden rounded-b-2xl rounded-t-none"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 h-[340px] sm:h-96 lg:h-[420px]">
          {(cards.length ? cards : Array.from({ length: 4 }).map(() => null)).slice(0, 4).map((card, index) => {
            const href = `${prefix}/case-studies/${card?.slug ?? ''}`
            const title = card?.title ?? ''
            const alt = isJa ? `${title} — 導入事例ヒーロー画像` : `${title} — case study hero`
            const imgSrc = card ? getCaseStudyHero(card.slug) : null
            return (
              <Link
                key={card ? card.slug : `placeholder-${index}`}
                href={card ? href : `${prefix}/case-studies`}
                prefetch
                aria-label={title ? (isJa ? `導入事例: ${title}` : `Case study: ${title}`) : sectionTitle}
                role="link"
                className="cs-card group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(var(--primary))]"
                onClick={() => card && handleCardClick(card, index)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={alt}
                      fill
                      className="object-cover object-center transform transition duration-200 ease-out md:group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
                      sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={95}
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300" />
                  )}

                  {/* Title overlay - positioned like NSC reference */}
                  <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/50 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 p-4 sm:p-5 lg:p-6 text-white">
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-[1.2] tracking-tight break-words hyphens-auto" lang={isJa ? 'ja' : 'en'}>
                      {title}
                    </div>
                  </div>

                  {/* Hover overlay - brand color panel (desktop only) */}
                  <div className="panel absolute inset-0 bg-[hsl(var(--primary))] hidden md:block md:translate-x-[-100%] md:group-hover:translate-x-0 transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none">
                    <div className="h-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 text-white">
                      <div className="flex-1 flex items-start pt-2">
                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-[1.2] tracking-tight break-words hyphens-auto" lang={isJa ? 'ja' : 'en'}>
                          {title}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="cta inline-flex items-center px-4 py-2.5 rounded-full bg-white text-gray-900 text-sm font-medium shadow-sm">
                          {cta}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}


