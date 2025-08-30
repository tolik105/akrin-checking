import { generatePageMetadata } from "@/lib/metadata-helpers"
import ContactClient from "../../contact/contact-client"

export const metadata = generatePageMetadata({
  title: 'AKRIN株式会社へのお問い合わせ – 日本のITコンサルティング＆マネージドサービス',
  description: 'AKRIN株式会社にお問い合わせください。マネージドITサービス、サイバーセキュリティ、クラウドソリューション、24時間365日サポートについてご相談ください。東京オフィス: 03-6821-1223',
  keywords: [
    'AKRIN お問い合わせ',
    'ITサポート 東京',
    'マネージドサービス 相談',
    'サイバーセキュリティ 問い合わせ',
    'クラウド移行 相談',
    'ITコンサルティング 東京',
    'AKRIN株式会社 連絡先',
    '24時間ITサポート',
    'IT緊急対応'
  ],
  path: '/ja/contact'
})

// Generate contact schema for Japanese contact page
const contactSchemaJA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "AKRIN株式会社へのお問い合わせ",
  "description": "AKRIN株式会社のITサービスについてお問い合わせください。マネージドサービス、サイバーセキュリティ、クラウドソリューションの専門家がサポートいたします。",
  "url": "https://akrin.jp/ja/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "AKRIN株式会社",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+81-3-6821-1223",
        "contactType": "customer service",
        "availableLanguage": ["Japanese", "English"],
        "areaServed": "JP",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "support@akrin.jp",
        "contactType": "customer service",
        "availableLanguage": ["Japanese", "English"],
        "areaServed": "JP"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "南青山2-4-15 4F",
      "addressLocality": "港区",
      "addressRegion": "東京都",
      "postalCode": "107-0062",
      "addressCountry": "JP"
    }
  }
}

export default function JapaneseContactPage() {
  return (
    <>
      {/* Structured Data for Japanese Contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchemaJA)
        }}
      />
      
      {/* Use the same contact client component */}
      <ContactClient />
    </>
  )
}
