import { NextResponse } from 'next/server'
import { caseStudiesEN } from '@/lib/case-studies-data'

export const dynamic = 'force-static'

type CaseItem = { title: string; slug: string; locale: 'en' | 'ja' }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = (searchParams.get('locale') as 'en' | 'ja') || 'en'
  const limitParam = searchParams.get('limit')
  const limit = limitParam ? Math.max(1, Math.min(12, Number(limitParam))) : undefined

  const EXCLUDED = new Set([
    'enterprise-wifi-hq-koujimachi',
    'office-relocation-tokyo-hq-move',
    'sdwan-retail-40-sites',
  ])

  const all: CaseItem[] = caseStudiesEN
    .filter((i) => !EXCLUDED.has(i.slug))
    .map((i) => ({
      slug: i.slug,
      title: locale === 'ja' ? i.titleJA : i.titleEN,
      locale,
    }))

  const limited = typeof limit === 'number' ? all.slice(0, limit) : all

  return NextResponse.json(limited, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300' },
  })
}







