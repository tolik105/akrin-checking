import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity.client'
import { caseStudyBySlugQuery, caseStudiesQuery } from '@/lib/sanity.queries'
import { GACaseStudy } from '@/components/ga-case-study'
import { ServiceFAQ } from '@/components/ui/service-faq'

// ISR with hourly revalidation
export const revalidate = 3600

// Fetch single case study from Sanity
async function getCaseStudy(slug: string) {
  return await client.fetch(caseStudyBySlugQuery, { slug })
}

// Fetch all case studies for static params
async function getAllCaseStudies() {
  return await client.fetch(caseStudiesQuery)
}

// Get image URL from case study
function getCaseStudyImage(cs: any): string {
  if (cs.mainImage?.asset?.url) {
    return cs.mainImage.asset.url
  }
  if (cs.imageUrl) {
    return cs.imageUrl
  }
  const slug = typeof cs.slug === 'string' ? cs.slug : cs.slug?.current
  return `/case-assets/${slug}/hero.webp`
}

// Get slug string
function getSlugStr(cs: any): string {
  return typeof cs.slug === 'string' ? cs.slug : cs.slug?.current || ''
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudy(slug)

  if (!cs) {
    return {
      title: '導入事例が見つかりません | AKRIN',
      description: 'リクエストされた導入事例が見つかりませんでした。'
    }
  }

  const title = `${cs.titleJA} | 導入事例 | AKRIN`
  const description = cs.metaDescriptionJA || cs.excerptJA
  const image = getCaseStudyImage(cs)

  return {
    title,
    description,
    alternates: {
      canonical: `/ja/case-studies/${slug}`,
      languages: {
        'en': `/case-studies/${slug}`,
        'ja': `/ja/case-studies/${slug}`,
        'x-default': `/case-studies/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      images: image ? [image] : undefined,
      url: `/ja/case-studies/${slug}`,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies()
  return caseStudies.map((cs: any) => ({
    slug: getSlugStr(cs),
  }))
}

export default async function CaseStudyDetailJA({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = await getCaseStudy(slug)

  if (!cs) {
    notFound()
  }

  const image = getCaseStudyImage(cs)
  const slugStr = getSlugStr(cs)

  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-20 sm:pt-24">
      <section className="container py-responsive-xl">
        <div className="mb-responsive-lg">
          <Link href="/ja/case-studies" className="text-sm text-gray-600 hover:text-teal-700">← 導入事例一覧へ</Link>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-normal md:tracking-[-0.01em] text-gray-900">
            {cs.titleJA || '事例'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-prose">{cs.excerptJA}</p>
          {cs.metrics && cs.metrics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.metrics.map((m: string) => (
                <span key={m} className="text-[11px] px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">{m}</span>
              ))}
            </div>
          )}
        </div>

        {/* Hero Image */}
        <figure className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[16/9] w-full">
            <Image 
              src={image} 
              alt={cs.mainImage?.altJA || cs.mainImage?.alt || cs.titleJA || '導入事例ヒーロー画像'} 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 1280px) 100vw, 1600px" 
              quality={95} 
            />
          </div>
          {cs.mainImage?.caption && (
            <figcaption className="p-3 text-xs text-gray-600">{cs.mainImage.caption}</figcaption>
          )}
        </figure>

        {/* Body Content from Sanity */}
        {cs.htmlContentJA && (
          <article className="bg-white rounded-xl border border-gray-200 p-6 md:p-10 mb-10">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-teal-700 hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-teal-200 prose-blockquote:bg-teal-50">
              <div dangerouslySetInnerHTML={{ __html: cs.htmlContentJA }} />
            </div>

            {/* JSON-LD CaseStudy/Article */}
            <script 
              type="application/ld+json" 
              dangerouslySetInnerHTML={{ 
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Article',
                  headline: cs.titleJA,
                  description: cs.metaDescriptionJA || cs.excerptJA,
                  image: image,
                  inLanguage: 'ja',
                  datePublished: cs.publishedAt || undefined,
                  mainEntityOfPage: { '@type': 'WebPage', '@id': `/ja/case-studies/${slugStr}` },
                  author: { '@type': 'Organization', name: 'AKRIN' },
                  publisher: { '@type': 'Organization', name: 'AKRIN' }
                })
              }} 
            />

            {/* Related links */}
            <aside className="mt-10 text-sm text-gray-600">
              <div className="flex flex-wrap gap-3">
                <Link href="/ja/services/it-managed-services" className="underline hover:text-teal-700">ITマネージドサービス</Link>
                <Link href="/ja/services/cloud-infrastructure" className="underline hover:text-teal-700">クラウドインフラ</Link>
                <Link href="/ja/blog" className="underline hover:text-teal-700">ブログ</Link>
              </div>
            </aside>

            {/* FAQ */}
            <div className="mt-6">
              <ServiceFAQ
                title="よくある質問"
                items={[
                  { q: 'どれくらいの期間で開始できますか？', a: '東京案件は通常3〜5営業日で着手、全国案件は1〜2週間で開始可能です。' },
                  { q: '既存のツールに合わせられますか？', a: 'はい。Microsoft 365、Azure、Freshservice 等のスタックに適応しつつ、ベストプラクティスを維持します。' },
                  { q: '定額での提供は可能ですか？', a: '標準成果物は定額、オープンスコープはタイム&マテリアルで提供します。' },
                  { q: '日英バイリンガルの対応は？', a: '英日バイリンガル対応が可能で、成果物も必要に応じて二言語で提供します。' },
                ]}
              />
            </div>
          </article>
        )}

        {/* Google Analytics: case study view event */}
        <GACaseStudy slug={slugStr} title={cs.titleJA || '導入事例'} locale="ja" />
      </section>
    </main>
  )
}
