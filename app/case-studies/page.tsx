import CaseStudiesGrid from "@/components/CaseStudiesGrid"
import { Metadata } from "next"
import { generatePageMetadata } from '@/lib/metadata-helpers'

export const metadata: Metadata = generatePageMetadata({
  title: "Case Studies | AKRIN — IT Services in Japan",
  description: "Explore AKRIN case studies across managed IT, cloud, security, network, and ITAD.",
  path: '/case-studies'
})

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <CaseStudiesGrid />
    </main>
  )
}

