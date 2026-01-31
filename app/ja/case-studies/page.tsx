import CaseStudiesGrid from "@/components/CaseStudiesGrid"
import { Metadata } from "next"
import { generatePageMetadata } from '@/lib/metadata-helpers'
import { client } from "@/lib/sanity.client"
import { caseStudiesQuery } from "@/lib/sanity.queries"

export const metadata: Metadata = generatePageMetadata({
  title: "導入事例 | AKRIN — ITサービス",
  description: "AKRINの導入事例（運用保守、クラウド、セキュリティ、ネットワーク、ITAD）。",
  path: '/ja/case-studies'
})

// ISR with hourly revalidation (same as blog)
export const revalidate = 3600

// Fetch case studies from Sanity
async function getCaseStudies() {
  return await client.fetch(caseStudiesQuery)
}

export default async function CaseStudiesPageJA() {
  const caseStudies = await getCaseStudies()

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <CaseStudiesGrid caseStudies={caseStudies} language="ja" />
    </main>
  )
}

