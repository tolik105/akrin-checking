import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity.client'
import { caseStudyBySlugQuery, caseStudiesQuery } from '@/lib/sanity.queries'
import { GACaseStudy } from '@/components/ga-case-study'
import { ServiceFAQ } from '@/components/ui/service-faq'
import { RelatedLinks } from '@/components/ui/related-links'

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
      title: 'Case Study Not Found | AKRIN',
      description: 'The requested case study could not be found.'
    }
  }

  const title = `${cs.titleEN} | Case Study | AKRIN`
  const description = cs.metaDescriptionEN || cs.excerptEN
  const image = getCaseStudyImage(cs)

  return {
    title,
    description,
    alternates: {
      canonical: `/case-studies/${slug}`,
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
      url: `/case-studies/${slug}`,
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

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
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
          <Link href="/case-studies" className="text-sm text-gray-600 hover:text-teal-700">← Back to Case Studies</Link>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-normal md:tracking-[-0.01em] text-gray-900">
            {cs.titleEN || 'Case Study'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-prose">{cs.excerptEN}</p>
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
              alt={cs.mainImage?.alt || cs.titleEN || 'Case study hero image'} 
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
        {cs.htmlContentEN && (
          <article className="bg-white rounded-xl border border-gray-200 p-6 md:p-10 mb-10">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-teal-700 hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-teal-200 prose-blockquote:bg-teal-50">
              <div dangerouslySetInnerHTML={{ __html: cs.htmlContentEN }} />
            </div>
          </article>
        )}

        {/* JSON-LD CaseStudy/Article */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: cs.titleEN,
              description: cs.metaDescriptionEN || cs.excerptEN,
              image: image,
              inLanguage: 'en',
              datePublished: cs.publishedAt || undefined,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `/case-studies/${slugStr}` },
              author: { '@type': 'Organization', name: 'AKRIN' },
              publisher: { '@type': 'Organization', name: 'AKRIN' }
            })
          }} 
        />

        <RelatedLinks
          links={[
            { href: '/services/it-managed-services', label: 'Managed IT Services' },
            { href: '/services/cloud-infrastructure', label: 'Cloud Infrastructure' },
            { href: '/services/it-security', label: 'IT Security' },
            { href: '/blog', label: 'Blog' },
          ]}
        />

        {/* FAQ */}
        <div className="mt-6">
          <ServiceFAQ
            title="Frequently asked questions"
            items={[
              { q: 'How fast can you start?', a: 'For Tokyo HQ projects, discovery typically starts within 3–5 business days; nationwide work within 1–2 weeks.' },
              { q: 'Can you work with our tools?', a: 'Yes—our runbooks adapt to your stack (Microsoft 365, Azure, Freshservice, etc.) while keeping best practices.' },
              { q: 'Do you offer fixed‑price?', a: 'We provide fixed‑scope pricing for standard deliverables and time‑and‑materials for open‑ended work.' },
              { q: 'What about bilingual support?', a: 'English/Japanese bilingual support is available for stakeholders, with translated artifacts as needed.' },
            ]}
          />
        </div>

        {/* Google Analytics: case study view event */}
        <GACaseStudy slug={slugStr} title={cs.titleEN || 'Case Study'} locale="en" />
      </section>
    </main>
  )
}
