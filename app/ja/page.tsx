import { generatePageMetadata } from "@/lib/metadata-helpers"
import HomeClient from "../home-client"
import { HeroStatic } from "@/components/hero-static"
import jaCommon from "../../public/locales/ja/common.json"

export const metadata = generatePageMetadata({
  title: 'AKRIN株式会社 - 日本をリードするITソリューションプロバイダー | マネージドサービス＆サポート',
  description: 'AKRIN株式会社の包括的なITソリューションでビジネスを変革しましょう。マネージドサービス、サイバーセキュリティ、クラウド移行、24時間365日サポートを日本および世界中で提供しています。',
  keywords: [
    'ITソリューション 日本',
    'マネージドITサービス 東京',
    'サイバーセキュリティ 日本',
    'クラウド移行サービス',
    'ITサポート 東京',
    'ITコンサルティング 日本',
    'デジタルトランスフォーメーション',
    'エンタープライズITソリューション',
    '24時間ITサポート',
    '日本のIT企業'
  ],
  path: '/ja'
})

// Generate FAQ schema for Japanese homepage
const faqDataJA = [
  {
    question: "AKRINは日本でどのようなITサービスを提供していますか？",
    answer: "AKRINは包括的なテクノロジーソリューションを提供しています—マネージドITサービス、24時間365日ヘルプデスクサポート、サイバーセキュリティ＆コンプライアンス、クラウド移行、オンサイトサポート、ワイヤレス調査、カスタム開発—複数のベンダーを管理することなく、ビジネスの運営と拡張を可能にします。"
  },
  {
    question: "AKRINはオンサイトエンジニアを迅速に派遣できますか？",
    answer: "はい。東京を拠点とするフィールドチームは、日本全国どこでも対応可能です—関東地域では当日、全国では24時間以内—重要なインシデント、プロジェクト展開、定期メンテナンスに対応します。"
  },
  {
    question: "AKRINはバイリンガル（英語＆日本語）環境をサポートできますか？",
    answer: "はい。すべてのコンサルタントとヘルプデスクスタッフはバイリンガルです。チケット、レポート、会議をどちらの言語でも提供します—日本で活動する多国籍チームに最適です。"
  },
  {
    question: "クラウド移行プロジェクトの一般的なタイムラインは？",
    answer: "標準的な中規模移行（50-150ワークロード）は4-8週間：評価（1週）、計画（1週）、パイロット（1週）、段階的カットオーバー（1-3週）、最適化（1週）。AKRINのゼロダウンタイム手法により、重要なアプリケーションはオンラインのままです。"
  }
]

const faqSchemaJA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqDataJA.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function JapaneseHomePage() {
  const heroCopy = jaCommon.hero
  return (
    <>
      {/* Structured Data for Japanese FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaJA)
        }}
      />
      
      <HeroStatic
        title={heroCopy.title}
        subtitle={heroCopy.subtitle}
        ctaLabel={heroCopy.cta}
        ctaHref="/ja/contact"
      />

      {/* Use the same home client component */}
      <HomeClient />
    </>
  )
}
