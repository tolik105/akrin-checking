import fs from 'node:fs/promises'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudiesEN } from '@/lib/case-studies-data'
import { generateMetaDescription } from '@/lib/seo-utils'
import { GACaseStudy } from '@/components/ga-case-study'
import { ServiceFAQ } from '@/components/ui/service-faq'
import { RelatedLinks } from '@/components/ui/related-links'
import { getCaseStudyHero } from '@/lib/case-study-assets'

// Map full slugs (as used in CaseStudiesGrid/lib data) to specific MDX files inside english-case-studies-mdx
const slugToMdxFile: Record<string, string> = {
  'managed-it-services-cpg-tokyo': 'en-managed-it-services-cpg-tokyo.mdx',
  'cloud-migration-manufacturing': 'en-cloud-migration-manufacturing.mdx',
  'pentest-fintech-tokyo': 'en-pentest-fintech-tokyo.mdx',
  'wifi-assessment-retail-tokyo': 'en-wifi-assessment-retail-tokyo.mdx',
  
  'itad-tokyo-kobe-consolidation': 'en-itad-tokyo-kobe-consolidation.mdx',
  
  'datacenter-relocation-colo-to-colo': 'en-datacenter-relocation-colo-to-colo.mdx',
  'sdwan-insurance-30-sites-japan': 'en-sdwan-insurance-30-sites-japan.mdx',
  
  'rack-buildout-9racks-campus': 'en-rack-buildout-9racks-campus.mdx',
  'nationwide-wifi-30-offices': 'en-nationwide-wifi-30-offices.mdx',
}

// Tiny markdown-to-HTML (subset) converter to avoid new deps
function mdToHtml(src: string): string {
  let s = src.replace(/\r\n?/g, '\n')
  // strip script tags for safety
  s = s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
  // code fences ```
  s = s.replace(/```([\s\S]*?)```/g, (_m, code) => `<pre><code>${code.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c] as string))}</code></pre>\n`)
  // images ![alt](src "title")
  s = s.replace(/!\[([^\]]*)\]\(([^\s\)]+)(?:\s+\"([^\"]*)\")?\)/g, (_m, alt, url, title) => `<img src="${url}" alt="${alt||''}"${title?` title="${title}"`:''} />`)
  // links [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>')
  // headings: demote one level to keep only one H1 on the page
  s = s.replace(/^######\s+(.+)$/gm, '<h6>$1<\/h6>')
       .replace(/^#####\s+(.+)$/gm, '<h6>$1<\/h6>')
       .replace(/^####\s+(.+)$/gm, '<h5>$1<\/h5>')
       .replace(/^###\s+(.+)$/gm, '<h4>$1<\/h4>')
       .replace(/^##\s+(.+)$/gm, '<h3>$1<\/h3>')
       .replace(/^#\s+(.+)$/gm, '<h2>$1<\/h2>')
  // blockquotes
  s = s.replace(/^>\s?(.*)$/gm, '<blockquote><p>$1<\/p><\/blockquote>')
  // bold/italic
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1<\/strong>')
       .replace(/(^|\W)\*([^*]+)\*/g, '$1<em>$2<\/em>')
  // unordered lists
  s = s.replace(/(?:^|\n)(-\s.+(?:\n-\s.+)*)/g, (m) => {
    const items = m.trim().split(/\n/).map(l => l.replace(/^-\s+/, '').trim()).filter(Boolean)
    if (items.length < 2 && !/^-/m.test(m)) return m
    return `\n<ul>` + items.map(i => `<li>${i}<\/li>`).join('') + `<\/ul>`
  })
  // paragraphs: wrap plain lines into <p>
  const lines = s.split(/\n{2,}/).map(block => {
    if (/^<\/?(h\d|ul|pre|blockquote|img)/.test(block.trim())) return block
    return `<p>${block.replace(/\n/g, '<br/>')}<\/p>`
  })
  return lines.join('\n')
}

// Parse frontmatter (images) and return language-specific bodies
async function loadCaseStudyMdx(slug: string): Promise<null | {
  hero?: { src: string; alt: string; caption?: string; width?: number; height?: number }
  gallery: Array<{ src: string; alt?: string; caption?: string }>
  bodyHtmlEn?: string
  bodyHtmlJa?: string
}> {
  try {
    const filename = slugToMdxFile[slug]
    if (!filename) return null
    const filePath = path.join(process.cwd(), 'english-case-studies-mdx', filename)
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
              // strip surrounding quotes if present
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

    // Split body by language markers
    const jpStart = body.search(/^\s*#\s*.*日本語.*$/m) !== -1 ? body.search(/^\s*#\s*.*日本語.*$/m) : body.search(/^\s*#\s*導入事例.*$/m)
    const enStart = body.search(/^\s*#\s*Case Study.*$/m)
    let bodyJa = ''
    let bodyEn = ''
    if (jpStart !== -1 && enStart !== -1) {
      if (jpStart < enStart) {
        bodyJa = body.slice(jpStart, enStart).trim()
        bodyEn = body.slice(enStart).trim()
      } else {
        bodyEn = body.slice(enStart, jpStart).trim()
        bodyJa = body.slice(jpStart).trim()
      }
    } else if (jpStart !== -1) {
      bodyJa = body.slice(jpStart).trim()
    } else if (enStart !== -1) {
      bodyEn = body.slice(enStart).trim()
    } else {
      // Fallback: no explicit language headings; treat whole body as EN
      bodyEn = body.trim()
    }

    // Strip a leading inline image from the body (the MDX often repeats the hero as the first line)
    const bodyHtmlEn = bodyEn ? mdToHtml(bodyEn).replace(/^\s*<img[^>]*\/>\s*/, '') : undefined
    const bodyHtmlJa = bodyJa ? mdToHtml(bodyJa).replace(/^\s*<img[^>]*\/>\s*/, '') : undefined

    const fmMeta = (hero as any).__fm || {}
    return { hero, gallery, bodyHtmlEn, bodyHtmlJa, fmMeta }
  } catch (e) {
    console.error('Failed to read MDX file:', e)
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
      const filePath = path.join(process.cwd(), 'english-case-studies-mdx', filename)
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

  const title = item ? `${item.titleEN} | Case Study | AKRIN` : 'Case Study | AKRIN'
  return {
    title,
    description: description || item?.excerptEN,
    alternates: {
      canonical: `/case-studies/${slug}`,
      languages: {
        en: `/case-studies/${slug}`,
        ja: `/ja/case-studies/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      images: item ? [getCaseStudyHero(slug)] : undefined,
      url: `/case-studies/${slug}`,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: item ? [getCaseStudyHero(slug)] : undefined,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(slugToMdxFile).map((slug) => ({ slug }))
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await loadCaseStudyMdx(slug)
  if (!data) notFound()
  const cs = caseStudiesEN.find(c => c.slug === slug)

  return (
    <main className="min-h-screen bg-[#F8F9FA] pt-20 sm:pt-24">
      <section className="container py-responsive-xl">
        <div className="mb-responsive-lg">
          <Link href="/case-studies" className="text-sm text-gray-600 hover:text-teal-700">← Back to Case Studies</Link>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-normal md:tracking-[-0.01em] text-gray-900">
            {cs?.titleEN || 'Case Study'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-prose">{cs?.excerptEN}</p>
          {cs?.metrics && (
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.metrics.map(m => (
                <span key={m} className="text-[11px] px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">{m}</span>
              ))}
            </div>
          )}
        </div>

        {/* Hero Image */}
        <figure className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[16/9] w-full">
            <Image src={getCaseStudyHero(slug)} alt={data?.hero?.alt || cs?.titleEN || ''} fill className="object-cover" priority sizes="(max-width: 1280px) 100vw, 1600px" quality={95} />
          </div>
          {(data?.hero?.caption || data?.hero?.alt) && (
            <figcaption className="p-3 text-xs text-gray-600">{data?.hero?.caption || data?.hero?.alt}</figcaption>
          )}
        </figure>

        {/* Body Content from MD/MDX (English only on EN route) */}
        {data?.bodyHtmlEn && (
          <article className="bg-white rounded-xl border border-gray-200 p-6 md:p-10 mb-10">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-teal-700 hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-teal-200 prose-blockquote:bg-teal-50">
              <div dangerouslySetInnerHTML={{ __html: data.bodyHtmlEn }} />
            </div>
          </article>
        )}

        {/* JSON-LD CaseStudy/Article */}
        {(() => {
          const title = cs?.titleEN || 'Case Study'
          const url = `/case-studies/${slug}`
          const description = (data as any)?.fmMeta?.metaDescription || cs?.excerptEN || ''
          const image = data?.hero?.src || getCaseStudyHero(slug)
          const schema = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            image,
            inLanguage: 'en',
            datePublished: (data as any)?.fmMeta?.date || undefined,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            author: { '@type': 'Organization', name: 'AKRIN' },
            publisher: { '@type': 'Organization', name: 'AKRIN' }
          }
          return (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          )
        })()}

        <RelatedLinks
          links={[
            { href: '/services/it-managed-services', label: 'Managed IT Services' },
            { href: '/services/cloud-infrastructure', label: 'Cloud Infrastructure' },
            { href: '/services/it-security', label: 'IT Security' },
            { href: '/blog', label: 'Blog' },
          ]}
        />

        {/* FAQ (short) */}
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



        {/* Gallery (strict to this case's folder) */}
        {(() => {
          const base = `/case-assets/${slug}/`
          const safe = (data?.gallery || [])
            .filter(g => typeof g.src === 'string' && g.src.startsWith(base))
            // Hide duplicate hero image (hero.*) from gallery to avoid repeating captions like "Wi‑Fi survey heatmap (redacted)"
            .filter(g => {
              try { const name = path.posix.basename(g.src || ''); return !/^hero\./i.test(name) } catch { return true }
            })
          return safe.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {safe.map((g, idx) => (
                <figure key={idx} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={g.src} alt={g.alt || ''} fill className="object-cover object-center" quality={95} sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw" />
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
        <GACaseStudy slug={slug} title={cs?.titleEN || 'Case Study'} locale="en" />

      </section>
    </main>
  )
}

