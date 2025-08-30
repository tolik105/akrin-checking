"use client"

import React, { useState } from "react"
import Script from "next/script"
import Link from "next/link"
import { HeroDiagonal } from "@/components/hero-diagonal"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import CapabilityCards from "@/components/CapabilityCards"

const MobileFriendlyFAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-3 sm:py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-3 sm:mr-4 mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0">
          <svg
            className={cn(
              "absolute inset-0 h-full w-full transform text-[#20B2AA] transition-all duration-200",
              isOpen && "rotate-90 scale-0",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <svg
            className={cn(
              "absolute inset-0 h-full w-full rotate-90 scale-0 transform text-[#20B2AA] transition-all duration-200",
              isOpen && "rotate-0 scale-100",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-medium text-neutral-700 dark:text-neutral-200 leading-tight">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400 mt-2 sm:mt-3"
              >
                <p className="text-sm sm:text-base leading-relaxed">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function WiFiAssessmentJaClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const accordionItems = [
    {
      title: "サイト調査・RF分析",
      body: "RFスペクトラム分析、信号強度マッピング、干渉特定を含む包括的な無線サイト調査により、無線ネットワークパフォーマンスを最適化します。"
    },
    {
      title: "カバレッジ・容量計画",
      body: "無線カバレッジエリア、容量要件、ユーザー密度計画の詳細分析により、すべての場所で最適なパフォーマンスを確保します。"
    },
    {
      title: "干渉検出・軽減",
      body: "RF干渉源、チャネル競合、無線パフォーマンスに影響する環境要因の特定と詳細な修復推奨事項を提供します。"
    },
    {
      title: "セキュリティ評価",
      body: "暗号化分析、不正アクセスポイント検出、セキュリティポリシー評価を含む無線セキュリティ評価により、ネットワーク保護を確保します。"
    },
    {
      title: "パフォーマンス最適化",
      body: "ネットワークパフォーマンス分析、スループットテスト、最適化推奨事項により、無線ネットワーク効率とユーザーエクスペリエンスを最大化します。"
    },
    {
      title: "コンプライアンス・標準レビュー",
      body: "業界標準、規制要件、エンタープライズ無線展開のベストプラクティスに対する無線ネットワークコンプライアンスの評価。"
    }
  ]

  const faqItems = [
    {
      q: "WiFi評価にはどのくらい時間がかかりますか？",
      a: "評価期間は施設の規模と複雑さによって異なり、標準的なオフィスでは1～3日、大規模なエンタープライズ環境では1～2週間が一般的です。"
    },
    {
      q: "評価にはどのような機器を使用しますか？",
      a: "正確で包括的な評価を提供するため、プロフェッショナルグレードのスペクトラムアナライザー、無線調査ツール、エンタープライズテスト機器を使用します。"
    },
    {
      q: "詳細なレポートは提供されますか？",
      a: "はい。ヒートマップ、カバレッジ分析、パフォーマンス指標、改善のための詳細な推奨事項を含む包括的なレポートを提供します。"
    },
    {
      q: "既存の無線ネットワークを評価できますか？",
      a: "はい。最適化のための既存無線ネットワークと、無線ネットワーク計画・設計のための新しい環境の両方を評価します。"
    },
    {
      q: "どのような種類の施設を評価しますか？",
      a: "オフィス、倉庫、製造工場、小売店舗、医療施設、教育機関など、あらゆる種類の施設を評価します。"
    },
    {
      q: "セキュリティ脆弱性を特定しますか？",
      a: "はい。評価には無線セキュリティ評価、不正アクセスポイント検出、潜在的なセキュリティリスクの特定が含まれます。"
    },
    {
      q: "規制遵守を支援できますか？",
      a: "はい。特定の環境と使用ケースに対して、無線ネットワークが地域規制、業界標準、ベストプラクティスに準拠することを確保します。"
    },
    {
      q: "実装サポートは提供していますか？",
      a: "はい。推奨される無線ネットワーク改善の展開を支援するため、実装サポートとプロジェクト管理サービスを提供できます。"
    }
  ]

  const AssessmentIcon = ({ index }: { index: number }) => {
    const common = "h-12 w-12 md:h-14 md:w-14"
    switch (index) {
      case 0: // Site Survey & RF Analysis
        return (
          <svg className={`${common} text-[#20B2AA]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      case 1: // Coverage & Capacity Planning
        return (
          <svg className={`${common} text-[#20B2AA]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case 2: // Interference Detection & Mitigation
        return (
          <svg className={`${common} text-[#20B2AA]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )
      case 3: // Security Assessment
        return (
          <svg className={`${common} text-[#20B2AA]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      case 4: // Performance Optimization
        return (
          <svg className={`${common} text-[#20B2AA]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case 5: // Compliance & Standards Review
        return (
          <svg className={`${common} text-[#20B2AA]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )
      default:
        return (
          <svg className={`${common} text-[#20B2AA]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
    }
  }

  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE');
        `}
      </Script>

      <div className="bg-white font-sans">
        {/* Breadcrumb removed */}

        {/* 標準化ヒーロー（HeroDiagonal） */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              Wi‑Fi評価<br />
              & 最適化
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/ja/services' },
              { label: 'Wi‑Fi Assessment' }
            ]}
            imageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            imageAlt="Wi‑Fi評価"
          />
        </section>

        {/* Section 1 - Why it matters */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">なぜWi‑Fi評価が<br />重要なのか</h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">無線パフォーマンスの低下は、生産性、ユーザーエクスペリエンス、ビジネス運営に大きな影響を与える可能性があります。プロフェッショナルなWi‑Fi評価は、カバレッジギャップ、干渉問題、最適化の機会を特定し、無線ネットワークが信頼性の高い高性能接続を提供することを確保します。</p>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">私たちの包括的な評価アプローチは、高度なRF分析、サイト調査、パフォーマンステストを組み合わせて、詳細な洞察と無線インフラストラクチャ最適化のための実用的な推奨事項を提供します。</p>
                <div className="space-y-3 sm:space-y-4">
                  {accordionItems.slice(0,4).map((it, idx) => (
                    <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">{it.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <img src="/images/banners/wifi-assessment/survey.webp" alt="Wi‑Fi評価" className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Capabilities */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">Wi‑Fi評価機能</h2>
              <p className="text-base sm:text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">包括的な無線ネットワーク評価サービスにより、最適なパフォーマンス、セキュリティ、カバレッジを確保します。</p>
            </div>
            <CapabilityCards
              items={accordionItems.map((item, index) => ({
                title: item.title,
                description: item.body,
                icon: <AssessmentIcon index={index} />
              }))}
            />
          </div>
        </div>

        {/* Section 3 - FAQ */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">よくあるご質問</h2>
              <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">Wi‑Fi評価サービスに関するよくある質問にお答えします。</p>
            </div>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              <MobileFriendlyFAQItem
                question="WiFi評価にはどのくらい時間がかかりますか？"
                answer="評価期間は施設の規模と複雑さによって異なり、標準的なオフィスでは1～3日、大規模なエンタープライズ環境では1～2週間が一般的です。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="評価にはどのような機器を使用しますか？"
                answer="正確で包括的な評価を提供するため、プロフェッショナルグレードのスペクトラムアナライザー、無線調査ツール、エンタープライズテスト機器を使用します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="詳細なレポートは提供されますか？"
                answer="はい。ヒートマップ、カバレッジ分析、パフォーマンス指標、改善のための詳細な推奨事項を含む包括的なレポートを提供します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="既存の無線ネットワークを評価できますか？"
                answer="はい。最適化のための既存無線ネットワークと、無線ネットワーク計画・設計のための新しい環境の両方を評価します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="どのような種類の施設を評価しますか？"
                answer="オフィス、倉庫、製造工場、小売店舗、医療施設、教育機関など、あらゆる種類の施設を評価します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="セキュリティ脆弱性を特定しますか？"
                answer="はい。評価には無線セキュリティ評価、不正アクセスポイント検出、潜在的なセキュリティリスクの特定が含まれます。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="規制遵守を支援できますか？"
                answer="はい。特定の環境と使用ケースに対して、無線ネットワークが地域規制、業界標準、ベストプラクティスに準拠することを確保します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="実装サポートは提供していますか？"
                answer="はい。推奨される無線ネットワーク改善の展開を支援するため、実装サポートとプロジェクト管理サービスを提供できます。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
            </div>
          </div>
        </div>

        {/* Section 4 - CTA */}
        <div className="bg-[#20B2AA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">Wi‑Fiネットワークを最適化する準備はできていますか？</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">プロフェッショナルなWi‑Fi評価でネットワークパフォーマンスを向上させましょう。包括的な分析と専門的な推奨事項で無線接続を最適化します。</p>
            <Link href="/ja/contact" className="inline-flex items-center px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#20B2AA] font-bold text-lg sm:text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              Wi‑Fi評価開始
              <svg className="ml-3 h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "WiFi評価・最適化（日本の無線ネットワーク評価）",
              "alternateName": "WiFi Assessment & Optimization",
              "serviceType": "無線ネットワーク評価・最適化サービス",
              "provider": {
                "@type": "Organization",
                "name": "AKRIN株式会社",
                "url": "https://akrin.jp"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Japan"
              },
              "availableLanguage": ["ja", "en"],
              "url": "https://akrin.jp/ja/services/wifi-assessment",
              "description": "プロフェッショナルな無線ネットワーク評価、サイト調査、最適化サービス。ビジネス環境で最適なWiFiパフォーマンス、カバレッジ、セキュリティを確保します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "WiFi評価にはどのくらい時間がかかりますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "評価期間は施設の規模と複雑さによって異なり、標準的なオフィスでは1～3日、大規模なエンタープライズ環境では1～2週間が一般的です。"}
                },
                {
                  "@type": "Question",
                  "name": "評価にはどのような機器を使用しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "正確で包括的な評価を提供するため、プロフェッショナルグレードのスペクトラムアナライザー、無線調査ツール、エンタープライズテスト機器を使用します。"}
                },
                {
                  "@type": "Question",
                  "name": "詳細なレポートは提供されますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。ヒートマップ、カバレッジ分析、パフォーマンス指標、改善のための詳細な推奨事項を含む包括的なレポートを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "既存の無線ネットワークを評価できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。最適化のための既存無線ネットワークと、無線ネットワーク計画・設計のための新しい環境の両方を評価します。"}
                },
                {
                  "@type": "Question",
                  "name": "どのような種類の施設を評価しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "オフィス、倉庫、製造工場、小売スペース、医療施設、教育機関を含むあらゆる種類の施設を評価します。"}
                },
                {
                  "@type": "Question",
                  "name": "セキュリティ脆弱性を特定しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。評価には無線セキュリティ評価、不正アクセスポイント検出、潜在的なセキュリティリスクの特定が含まれます。"}
                },
                {
                  "@type": "Question",
                  "name": "規制コンプライアンスを支援できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。お客様の特定の環境と使用ケースに対して、無線ネットワークが地域規制、業界標準、ベストプラクティスに準拠することを確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "実装サポートは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。推奨される無線ネットワーク改善の展開を支援するため、実装サポートとプロジェクト管理サービスを提供できます。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
