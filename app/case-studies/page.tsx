import CaseStudiesGrid from "@/components/CaseStudiesGrid"
import { Metadata } from "next"
import { generatePageMetadata } from '@/lib/metadata-helpers'
import { client } from "@/lib/sanity.client"
import { caseStudiesQuery } from "@/lib/sanity.queries"

export const metadata: Metadata = generatePageMetadata({
  title: "Case Studies | AKRIN — IT Services in Japan",
  description: "Explore AKRIN case studies across managed IT, cloud, security, network, and ITAD.",
  path: '/case-studies'
})

// ISR with hourly revalidation (same as blog)
export const revalidate = 3600

// Fetch case studies from Sanity
async function getCaseStudies() {
  return await client.fetch(caseStudiesQuery)
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <CaseStudiesGrid caseStudies={caseStudies} language="en" />
    </main>
  )
}

