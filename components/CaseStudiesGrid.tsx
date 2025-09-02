"use client"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { caseStudiesEN, CaseStudyItem } from "@/lib/case-studies-data"
import { getCaseStudyHero } from "@/lib/case-study-assets"

export default function CaseStudiesGrid() {
  const { i18n } = useTranslation("common")
  const isJa = i18n.language === "ja"

  // Exclude duplicate/redundant case studies per content policy
  const EXCLUDED = new Set([
    'enterprise-wifi-hq-koujimachi',
    'office-relocation-tokyo-hq-move',
    'sdwan-retail-40-sites',
  ])
  const items: CaseStudyItem[] = caseStudiesEN.filter(cs => !EXCLUDED.has(cs.slug)) // mirror: values contain JA fields too

  return (
    <section className="container pt-16 sm:pt-20 md:pt-24 pb-responsive-xl">
      <div className="mb-responsive-lg">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-normal md:tracking-[-0.01em] text-gray-900"
          style={{ letterSpacing: 'normal', fontFeatureSettings: '"kern" 1, "liga" 1, "clig" 1, "calt" 1' }}
        >
          {isJa ? "導入事例" : "Case Studies"}
        </h1>
        <p className="mt-3 text-gray-600 max-w-prose">
          {isJa
            ? "AKRINの実績をご覧ください。日本の企業様に提供した運用保守、クラウド移行、無線設計、セキュリティ診断、IT資産処分などの成果を、具体的な数値で示しています。"
            : "Explore AKRIN client outcomes across managed IT, cloud migration, wireless, security, and ITAD—presented with concrete, verifiable metrics."}
        </p>
      </div>

      {/* Grid mirrors blog cards styling */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((cs) => (
          <article
            key={cs.id}
            className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={`${isJa ? "/ja" : ""}/case-studies/${cs.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-teal-600">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Show actual case study hero image; fall back visually with noise overlay */}
                <Image
                  src={getCaseStudyHero(cs.slug)}
                  alt={(isJa ? cs.titleJA : cs.titleEN) || ''}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) calc(100vw / 3), (min-width: 640px) calc(100vw / 2), 100vw"
                  quality={50}
                  priority={false}
                />

              </div>
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {isJa ? cs.titleJA : cs.titleEN}
                </h3>
                {cs.metrics && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span key={m} className="text-[11px] px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                        {m}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  <span className="inline-flex items-center text-sm font-medium text-teal-700 group-hover:text-teal-800">
                    {isJa ? '詳しく見る' : 'Learn more'}
                    <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

