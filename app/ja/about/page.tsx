import { generatePageMetadata } from "@/lib/metadata-helpers"
import AboutClient from "./about-client"

export const metadata = generatePageMetadata({
  title: 'AKRIN株式会社について | 日本をリードするITソリューションプロバイダー',
  description: 'AKRIN株式会社について詳しく知る。10年以上の経験を持つ、日本および世界の企業にサービスを提供する信頼のITソリューションプロバイダー。私たちの使命、価値観、専門知識をご覧ください。',
  keywords: [
    'AKRIN株式会社',
    'AKRIN K.K.',
    'アクリン',
    '会社概要',
    'ITソリューションプロバイダー 日本',
    'IT企業 東京',
    'マネージドサービス 日本',
    'ITコンサルティング',
    'デジタルトランスフォーメーション',
    '企業情報'
  ],
  path: '/ja/about'
})

// Generate organization schema for Japanese about page
const organizationSchemaJA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://akrin.jp/ja/about#organization",
  "name": "AKRIN株式会社",
  "legalName": "AKRIN株式会社",
  "alternateName": ["Akrin Co., Ltd.", "Akrin IT Solutions", "AKRIN K.K.", "アクリン"],
  "url": "https://akrin.jp/ja/about",
  "logo": "https://akrin.jp/akrin-logo.svg",
  "description": "AKRIN株式会社は、日本および世界各地の企業にサービスを提供する大手ITソリューションプロバイダーです。10年以上の経験を持つ当社は、デジタルトランスフォーメーションとビジネスの成長を促進する包括的なテクノロジーサービスの提供を専門としています。",
  "foundingDate": "2010",
  "numberOfEmployees": "50-100",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "南青山2-4-15 4F",
    "addressLocality": "港区",
    "addressRegion": "東京都",
    "postalCode": "107-0062",
    "addressCountry": "JP"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+81-3-6821-1223",
    "contactType": "customer service",
    "availableLanguage": ["Japanese", "English", "日本語", "英語"],
    "areaServed": "JP"
  },
  "sameAs": [
    "https://www.linkedin.com/company/akrin-kk"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ITサービス",
    "itemListElement": [
      { "@type": "Service", "name": "マネージドITサービス" },
      { "@type": "Service", "name": "サイバーセキュリティソリューション" },
      { "@type": "Service", "name": "クラウド移行" },
      { "@type": "Service", "name": "ITサポート" },
      { "@type": "Service", "name": "ITコンサルティング" }
    ]
  },
  "knowsAbout": [
    "ITインフラストラクチャ",
    "サイバーセキュリティ",
    "クラウドコンピューティング",
    "デジタルトランスフォーメーション",
    "マネージドサービス",
    "ITコンサルティング"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  }
}

export default function JapaneseAboutPage() {
  return (
    <>
      {/* Structured Data for Japanese Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchemaJA)
        }}
      />
      
      {/* Use the same about client component */}
      <AboutClient />
    </>
  )
}
