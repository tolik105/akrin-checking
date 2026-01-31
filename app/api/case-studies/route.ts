import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity.client'
import { caseStudiesQuery } from '@/lib/sanity.queries'

// Revalidate every 5 minutes
export const revalidate = 300

type CaseItem = { title: string; slug: string; locale: 'en' | 'ja' }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = (searchParams.get('locale') as 'en' | 'ja') || 'en'
  const limitParam = searchParams.get('limit')
  const limit = limitParam ? Math.max(1, Math.min(12, Number(limitParam))) : undefined

  // Fetch from Sanity
  const caseStudies = await client.fetch(caseStudiesQuery)

  const all: CaseItem[] = caseStudies.map((cs: any) => ({
    slug: typeof cs.slug === 'string' ? cs.slug : cs.slug?.current || '',
    title: locale === 'ja' ? cs.titleJA : cs.titleEN,
    locale,
  }))

  const limited = typeof limit === 'number' ? all.slice(0, limit) : all

  return NextResponse.json(limited, {
    headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300' },
  })
}







