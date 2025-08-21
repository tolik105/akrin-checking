import fs from 'node:fs/promises'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { generateMetaDescription } from '@/lib/seo-utils'
import { GACaseStudy } from '@/components/ga-case-study'
import { ServiceFAQ } from '@/components/ui/service-faq'

import { caseStudiesEN } from '@/lib/case-studies-data'

const slugToMdxFile: Record<string, string> = {
  'managed-it-services-cpg-tokyo': 'ja-managed-it-services-cpg-tokyo.mdx',
  'cloud-migration-manufacturing': 'ja-cloud-migration-manufacturing.mdx',
  'pentest-fintech-tokyo': 'ja-pentest-fintech-tokyo.mdx',
  'wifi-assessment-retail-tokyo': 'ja-wifi-assessment-retail-tokyo.mdx',
  
  'itad-tokyo-kobe-consolidation': 'ja-itad-tokyo-kobe-consolidation.mdx',
  
  'datacenter-relocation-colo-to-colo': 'ja-datacenter-relocation-colo-to-colo.mdx',
  'sdwan-insurance-30-sites-japan': 'ja-sdwan-insurance-30-sites-japan.mdx',
  
  'rack-buildout-9racks-campus': 'ja-rack-buildout-9racks-campus.mdx',
  'nationwide-wifi-30-offices': 'ja-nationwide-wifi-30-offices.mdx',
}

function mdToHtml(src: string): string {
  let s = src.replace(/\r\n?/g, '\n')
  s = s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
  s = s.replace(/```([\s\S]*?)```/g, (_m, code) => `<pre><code>${code.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c] as string))}</code></pre>\n`)
  s = s.replace(/!\[([^\]]*)\]\(([^\s\)]+)(?:\s+\"([^\"]*)\")?\)/g, (_m, alt, url, title) => `<img src="${url}" alt="${alt||''}"${title?` title="${title}"`:''} />`)
  s = s.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>')
  // headings: demote one level to keep only one H1 on the page
  s = s.replace(/^######\s+(.+)$/gm, '<h6>$1<\/h6>')
       .replace(/^#####\s+(.+)$/gm, '<h6>$1<\/h6>')
       .replace(/^####\s+(.+)$/gm, '<h5>$1<\/h5>')
       .replace(/^###\s+(.+)$/gm, '<h4>$1<\/h4>')
       .replace(/^##\s+(.+)$/gm, '<h3>$1<\/h3>')
       .replace(/^#\s+(.+)$/gm, '<h2>$1<\/h2>')
  s = s.replace(/^>\s?(.*)$/gm, '<blockquote><p>$1<\/p><\/blockquote>')
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1<\/strong>')
       .replace(/(^|\W)\*([^*]+)\*/g, '$1<em>$2<\/em>')
  s = s.replace(/(?:^|\n)(-\s.+(?:\n-\s.+)*)/g, (m) => {
    const items = m.trim().split(/\n/).map(l => l.replace(/^-\s+/, '').trim()).filter(Boolean)
    if (items.length < 2 && !/^-/m.test(m)) return m
    return `\n<ul>` + items.map(i => `<li>${i}<\/li>`).join('') + `<\/ul>`
  })
  const lines = s.split(/\n{2,}/).map(block => {
    if (/^<\/?(h\d|ul|pre|blockquote|img)/.test(block.trim())) return block
    return `<p>${block.replace(/\n/g, '<br/>')}<\/p>`
  })
  return lines.join('\n')
}

async function loadCaseStudyMdx(slug: string) {
  try {
    const filename = slugToMdxFile[slug]
    if (!filename) return null
    const filePath = path.join(process.cwd(), 'japanese-case-studies-mdx', filename)
    const raw = await fs.readFile(filePath, 'utf8')

    const fmMatch = raw.match(/^---([\s\S]*?)---/)
    let hero: any = {}
    const gallery: any[] = []
    let body = raw

    if (fmMatch) {
      const fm = fmMatch[1]
      const lines = fm.split('\n')
      let section: 'root' | 'hero' | 'gallery' = 'root'
      let current: any | null = null
      for (let line of lines) {
        const l = line.trim()
        if (!l) continue
        if (l.startsWith('hero:')) { section = 'hero'; continue }
        if (l.startsWith('gallery:')) { section = 'gallery'; continue }
        if (section === 'root') {
          const m = l.match(/^(title|date|image|locale|metaDescription):\s*(.*)$/)
          if (m) {
            const key = m[1]
            let val: any = m[2]
            if (key === 'title' || key === 'image' || key === 'locale' || key === 'metaDescription') {
              val = val.replace(/^"|"$/g, '')
            }
            ;(hero as any).__fm = { ...(hero as any).__fm, [key]: val }
          }
        } else if (section === 'hero') {
          const m = l.match(/^(src|alt|caption|width|height):\s*(.*)$/)
          if (m) {
            const key = m[1]
            let val: any = m[2]
            if (key === 'width' || key === 'height') val = Number(val)
            hero[key] = val
          }
        } else if (section === 'gallery') {
          if (l.startsWith('- ')) {
            if (current) gallery.push(current)
            current = {}
            const m = l.match(/-\s*src:\s*(.*)$/)
            if (m) current.src = m[1]
          } else if (current) {
            const m = l.match(/^(alt|caption):\s*(.*)$/)
            if (m) current[m[1]] = m[2]
          }
        }
      }
      if (current) gallery.push(current)
      body = raw.slice(fmMatch[0].length).trim()
    }

    const bodyHtmlJa = mdToHtml(body)
    const fmMeta = (hero as any).__fm || {}
    return { hero, gallery, bodyHtmlJa, fmMeta }
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = caseStudiesEN.find(cs => cs.slug === slug)
  let description: string | undefined
  try {
    const filename = slugToMdxFile[slug]
    if (filename) {
      const filePath = path.join(process.cwd(), 'japanese-case-studies-mdx', filename)
      const raw = await fs.readFile(filePath, 'utf8')
      const fm = raw.match(/^---([\s\S]*?)---/)
      const metaDescMatch = fm?.[1].match(/metaDescription:\s*(.*)/)
      const fmDesc = metaDescMatch ? metaDescMatch[1].replace(/^"|"$/g, '') : undefined
      if (fmDesc) description = fmDesc
      else {
        const body = raw.replace(/^---[\s\S]*?---/, '').trim()
        description = generateMetaDescription(mdToHtml(body))
      }
    }
  } catch {}
  const title = item ? `${item.titleJA} | 導入事例 | AKRIN` : '導入事例 | AKRIN'
  return {
    title,
    description,
    alternates: {
      canonical: `/ja/case-studies/${slug}`,
      languages: {
        en: `/case-studies/${slug}`,
        ja: `/ja/case-studies/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      images: item ? [`/case-assets/${slug}/hero.webp`] : undefined,
      url: `/ja/case-studies/${slug}`,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: item ? [`/case-assets/${slug}/hero.webp`] : undefined,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(slugToMdxFile).map(slug => ({ slug }))
}

export default async function CaseStudyDetailJA({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await loadCaseStudyMdx(slug)
  if (!data) notFound()
  const cs = caseStudiesEN.find(c => c.slug === slug)

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <section className="container py-responsive-xl">
        <div className="mb-responsive-lg">
          <Link href="/ja/case-studies" className="text-sm text-gray-600 hover:text-teal-700">← 導入事例一覧へ</Link>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-normal md:tracking-[-0.01em] text-gray-900">
            {cs?.titleJA || '事例'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-prose">{cs?.excerptJA}</p>
          {cs?.metrics && (
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.metrics.map(m => (
                <span key={m} className="text-[11px] px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">{m}</span>
              ))}
            </div>
          )}
        </div>

        {data?.hero?.src && (
          <figure className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image src={data.hero.src} alt={data.hero.alt || ''} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 1200px" />
            </div>
            {(data.hero.caption || data.hero.alt) && (
              <figcaption className="p-3 text-xs text-gray-600">{data.hero.caption || data.hero.alt}</figcaption>
            )}
          </figure>
        )}

        {data?.bodyHtmlJa && (
          <article className="bg-white rounded-xl border border-gray-200 p-6 md:p-10 mb-10">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-teal-700 hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-teal-200 prose-blockquote:bg-teal-50">
              <div dangerouslySetInnerHTML={{ __html: data.bodyHtmlJa }} />
            </div>
        {/* JSON-LD CaseStudy/Article */}
        {(() => {
          const title = cs?.titleJA || '導入事例'
          const url = `/ja/case-studies/${slug}`
          const description = (data as any)?.fmMeta?.metaDescription || cs?.excerptJA || ''
          const image = data?.hero?.src || (cs ? `/case-assets/${slug}/hero.webp` : undefined)
          const schema = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            image,
            inLanguage: 'ja',
            datePublished: (data as any)?.fmMeta?.date || undefined,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            author: { '@type': 'Organization', name: 'AKRIN' },
            publisher: { '@type': 'Organization', name: 'AKRIN' }
          }
          return (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          )
        })()}

        {/* Related links */}
        <aside className="mt-10 text-sm text-gray-600">
          <div className="flex flex-wrap gap-3">
            <Link href="/ja/services/it-managed-services" className="underline hover:text-teal-700">ITマネージドサービス</Link>
            <Link href="/ja/services/cloud-infrastructure" className="underline hover:text-teal-700">クラウドインフラ</Link>
            <Link href="/ja/blog" className="underline hover:text-teal-700">ブログ</Link>
          </div>
        </aside>

        {/* FAQ (short) */}
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

        {/* ギャラリー（この事例のフォルダのみ許可） */}
        {(() => {
          const base = `/case-assets/${slug}/`
          const safe = (data?.gallery || []).filter((g: any) => typeof g.src === 'string' && g.src.startsWith(base))
          return safe.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {safe.map((g: any, idx: number) => (
                <figure key={idx} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={g.src} alt={g.alt || ''} fill className="object-cover object-center transform scale-90" />
                  </div>
                  {(g.caption || g.alt) && (
                    <figcaption className="p-3 text-xs text-gray-600">{g.caption || g.alt}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : null
        })()}
        {/* Google Analytics: case study view event */}
        <GACaseStudy slug={slug} title={cs?.titleJA || '導入事例'} locale="ja" />

      </section>
    </main>
  )
}

