import { generatePageMetadata } from "@/lib/metadata-helpers"
import BookConsultationClient from "../../book-consultation/book-consultation-client"

export const metadata = generatePageMetadata({
  title: '無料ITコンサルテーション予約 | AKRIN株式会社',
  description: 'AKRIN株式会社の専門家との無料ITコンサルテーションを予約しましょう。マネージドサービス、サイバーセキュリティ、クラウド移行、デジタルトランスフォーメーションについてご相談ください。',
  keywords: [
    'IT相談 予約',
    '無料コンサルテーション',
    'AKRIN 予約',
    'ITコンサルティング 東京',
    'マネージドサービス 相談',
    'サイバーセキュリティ 相談',
    'クラウド移行 相談',
    'IT専門家 予約',
    'デジタルトランスフォーメーション 相談'
  ],
  path: '/ja/book-consultation'
})

// Generate service schema for Japanese booking page
const serviceSchemaJA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ITコンサルテーションサービス",
  "description": "AKRIN株式会社の専門家による包括的なITコンサルテーション。マネージドサービス、サイバーセキュリティ、クラウドソリューション、デジタルトランスフォーメーションについてご相談いただけます。",
  "provider": {
    "@type": "Organization",
    "name": "AKRIN株式会社",
    "url": "https://akrin.jp"
  },
  "serviceType": "ITコンサルティング",
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ITコンサルテーションサービス",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "マネージドITサービス相談"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "サイバーセキュリティ評価"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "クラウド移行計画"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "デジタルトランスフォーメーション戦略"
        }
      }
    ]
  }
}

export default function JapaneseBookConsultationPage() {
  return (
    <>
      {/* Structured Data for Japanese Consultation Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemaJA)
        }}
      />
      
      {/* Use the same booking client component */}
      <BookConsultationClient />
    </>
  )
}
