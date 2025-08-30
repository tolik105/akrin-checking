import { generatePageMetadata } from "@/lib/metadata-helpers"
import ServicesClient from "../../services/services-client"

export const metadata = generatePageMetadata({
  title: 'ITサービス | AKRIN株式会社 - 包括的なテクノロジーソリューション',
  description: '現代のビジネスに向けたAKRIN株式会社の包括的なITサービス。マネージドサービス、サイバーセキュリティ、クラウドソリューション、ITコンサルティング、24時間365日サポートを提供しています。',
  keywords: [
    'ITサービス 日本',
    'マネージドITサービス',
    'サイバーセキュリティサービス',
    'クラウドソリューション',
    'ITコンサルティング',
    'ネットワークセキュリティ',
    'IT資産処分',
    'ワイヤレス評価',
    'ITサポート 東京',
    'AKRIN サービス'
  ],
  path: '/ja/services'
})

// Generate service catalog schema for Japanese services page
const serviceCatalogSchemaJA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AKRIN株式会社 ITサービス",
  "description": "AKRIN株式会社が提供する包括的なITサービスとソリューション",
  "url": "https://akrin.jp/ja/services",
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "マネージドITサービス",
        "description": "お客様の業務を最適化する包括的なIT管理ソリューション",
        "url": "https://akrin.jp/ja/services/it-managed-services"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "クラウドインフラストラクチャ",
        "description": "スケーラブルで安全なクラウドソリューション",
        "url": "https://akrin.jp/ja/services/cloud-infrastructure"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "サイバーセキュリティ",
        "description": "進化するサイバー脅威と脆弱性に対する包括的な保護",
        "url": "https://akrin.jp/ja/services/cybersecurity"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "ネットワーク侵入テスト",
        "description": "攻撃者が発見する前に脆弱性を特定",
        "url": "https://akrin.jp/ja/services/network-penetration-testing"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "ITコンサルティング・プロジェクト管理",
        "description": "ビジネス目標とITを連携させる戦略的テクノロジーガイダンス",
        "url": "https://akrin.jp/ja/services/it-consulting-project-management"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Wi-Fiアセスメント・最適化",
        "description": "プロフェッショナルなワイヤレスネットワーク評価と最適化",
        "url": "https://akrin.jp/ja/services/wifi-assessment"
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "name": "エンタープライズWi-Fi設計・導入",
        "description": "企業向けワイヤレスネットワークの設計と導入",
        "url": "https://akrin.jp/ja/services/wifi-design"
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Service",
        "name": "ITAD（日本・APAC・米国）",
        "description": "安全なデータ破壊とIT資産処分サービス",
        "url": "https://akrin.jp/ja/services/itad-japan-apac-us"
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Service",
        "name": "ITセキュリティサービス",
        "description": "サイバー脅威からデジタル資産を守る高度なセキュリティ対策",
        "url": "https://akrin.jp/ja/services/it-security"
      }
    }
  ]
}

export default function JapaneseServicesPage() {
  return (
    <>
      {/* Structured Data for Japanese Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceCatalogSchemaJA)
        }}
      />
      
      {/* Use the same services client component */}
      <ServicesClient />
    </>
  )
}
