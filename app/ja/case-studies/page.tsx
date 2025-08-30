import CaseStudiesGrid from "@/components/CaseStudiesGrid"
import { Metadata } from "next"
import { generatePageMetadata } from '@/lib/metadata-helpers'

export const metadata: Metadata = generatePageMetadata({
  title: "導入事例 | AKRIN — ITサービス",
  description: "AKRINの導入事例（運用保守、クラウド、セキュリティ、ネットワーク、ITAD）。",
  path: '/ja/case-studies'
})

export default function CaseStudiesPageJA() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <CaseStudiesGrid />
    </main>
  )
}

