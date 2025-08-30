"use client"

import React, { useState } from "react"
import Script from "next/script"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { HeroDiagonal } from "@/components/hero-diagonal"

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

export default function WiFiDesignJaClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const faqItems = [
    {
      q: "WiFi設計にはどのような情報が必要ですか？",
      a: "建物の平面図、ユーザー要件、デバイス数、アプリケーションニーズ、既存ネットワークインフラストラクチャの詳細、特定のカバレッジやパフォーマンス要件が必要です。"
    },
    {
      q: "設計プロセスにはどのくらい時間がかかりますか？",
      a: "設計タイムラインは複雑さによって異なり、標準的なオフィスでは1～2週間、複数の建物を持つ大規模なエンタープライズ環境では3～6週間が一般的です。"
    },
    {
      q: "設置サービスは提供していますか？",
      a: "はい。プロジェクト管理、機器設置、設定、テスト、文書化を含む完全な設置サービスを提供します。"
    },
    {
      q: "特定のアプリケーション向けに設計できますか？",
      a: "はい。VoIP、ビデオストリーミング、IoTデバイス、高密度環境、ミッションクリティカルアプリケーションを含む特定のアプリケーション向けに最適化されたネットワークを設計します。"
    },
    {
      q: "どのベンダーと連携していますか？",
      a: "Cisco、Aruba、Ruckus、Ubiquitiなどの主要無線ベンダーと連携し、お客様の特定の要件と予算に最適なソリューションを選択します。"
    },
    {
      q: "継続的なサポートは提供していますか？",
      a: "はい。継続的な最適パフォーマンスを確保するため、ネットワーク監視、最適化、トラブルシューティング、拡張計画を含む継続的なサポートを提供します。"
    },
    {
      q: "既存ネットワークと統合できますか？",
      a: "はい。既存の有線インフラストラクチャ、セキュリティシステム、ネットワーク管理プラットフォームとシームレスに統合する無線ネットワークを設計します。"
    },
    {
      q: "将来の拡張についてはどうですか？",
      a: "私たちの設計には、ビジネス成長と進化するテクノロジー要件に対応するためのスケーラビリティ計画と将来の拡張考慮事項が含まれています。"
    }
  ]

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
        {/* Standardized Hero Section (HeroDiagonal) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              Wi‑Fi設計 &<br />
              導入
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/ja/services' },
              { label: 'Wi‑Fi設計' }
            ]}
            imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            imageAlt="Wi‑Fi設計"
          />
        </section>

        {/* Section 1 - Why it matters */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">なぜプロフェッショナルな<br />Wi‑Fi設計が重要なのか</h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">効果的な無線ネットワークには、適切な計画、戦略的設計、専門的な実装が必要です。プロフェッショナルなWi‑Fi設計は、最適なカバレッジ、パフォーマンス、スケーラビリティを確保し、ビジネス要件をサポートし、将来の成長に対応します。</p>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">私たちの包括的な設計アプローチは、高度なRFモデリング、容量計画、セキュリティ実装を組み合わせて、信頼性が高く効率的で安全な無線ネットワークソリューションを提供します。</p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">予測設計・RFモデリング</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">戦略的アクセスポイント配置</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">ネットワークアーキテクチャ設計</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">容量計画・スケーラビリティ</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Wi‑Fi設計" className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Your Partner */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Wi‑Fi設計パートナー" className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none" />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">Wi‑Fi設計<br />パートナー</h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">成功する無線ネットワーク設計には、RF原理、ネットワークアーキテクチャ、業界標準の深い理解が必要です。認定された無線設計専門家が最新のツールと方法論を使用して、お客様の特定の要件に合わせた包括的なソリューションを提供します。</p>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">初期計画から最終実装まで、無線ネットワークがビジネス目標を達成し、ユーザーの期待を上回る一貫した信頼性の高いパフォーマンスを提供することを確保するために必要な専門知識を提供します。</p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">認定無線設計専門家</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">業界標準設計手法</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">包括的実装サポート</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">継続的最適化・サポート</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - FAQ */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">よくあるご質問</h2>
              <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">Wi‑Fi設計サービスに関するよくある質問にお答えします。</p>
            </div>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              <MobileFriendlyFAQItem
                question="WiFi設計にはどのような情報が必要ですか？"
                answer="建物の平面図、ユーザー要件、デバイス数、アプリケーションニーズ、既存ネットワークインフラストラクチャの詳細、特定のカバレッジやパフォーマンス要件が必要です。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="設計プロセスにはどのくらい時間がかかりますか？"
                answer="設計タイムラインは複雑さによって異なり、標準的なオフィスでは1～2週間、複数の建物を持つ大規模なエンタープライズ環境では3～6週間が一般的です。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="設置サービスは提供していますか？"
                answer="はい。プロジェクト管理、機器設置、設定、テスト、文書化を含む完全な設置サービスを提供します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="特定のアプリケーション向けに設計できますか？"
                answer="はい。VoIP、ビデオストリーミング、IoTデバイス、高密度環境、ミッションクリティカルアプリケーションを含む特定のアプリケーション向けに最適化されたネットワークを設計します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="どのベンダーと連携していますか？"
                answer="Cisco、Aruba、Ruckus、Ubiquitiなどの主要無線ベンダーと連携し、お客様の特定の要件と予算に最適なソリューションを選択します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="継続的なサポートは提供していますか？"
                answer="はい。継続的な最適パフォーマンスを確保するため、ネットワーク監視、最適化、トラブルシューティング、拡張計画を含む継続的なサポートを提供します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="既存ネットワークと統合できますか？"
                answer="はい。既存の有線インフラストラクチャ、セキュリティシステム、ネットワーク管理プラットフォームとシームレスに統合する無線ネットワークを設計します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="将来の拡張についてはどうですか？"
                answer="私たちの設計には、ビジネス成長と進化するテクノロジー要件に対応するためのスケーラビリティ計画と将来の拡張考慮事項が含まれています。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
            </div>
          </div>
        </div>

        {/* Section 4 - CTA */}
        <div className="bg-[#20B2AA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">Wi‑Fiネットワークを設計する準備はできていますか？</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">プロフェッショナルなWi‑Fi設計・実装サービスを受けましょう。ビジネス環境で信頼性の高い高性能無線ネットワークを構築します。</p>
            <Link href="/ja/contact" className="inline-flex items-center px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#20B2AA] font-bold text-lg sm:text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              Wi‑Fi設計開始
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
              "name": "Wi‑Fi設計・実装",
              "alternateName": "WiFi Design & Implementation",
              "serviceType": "Wi‑Fi設計・無線ネットワーク実装サービス",
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
              "url": "https://akrin.jp/ja/services/wifi-design",
              "description": "プロフェッショナルな無線ネットワーク設計、計画、実装サービス。ビジネス環境で最適なWi‑Fiパフォーマンス、カバレッジ、スケーラビリティを確保します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "WiFi設計にはどのような情報が必要ですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "建物の平面図、ユーザー要件、デバイス数、アプリケーションニーズ、既存ネットワークインフラストラクチャの詳細、特定のカバレッジやパフォーマンス要件が必要です。"}
                },
                {
                  "@type": "Question",
                  "name": "設計プロセスにはどのくらい時間がかかりますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "設計タイムラインは複雑さによって異なり、標準的なオフィスでは1～2週間、複数の建物を持つ大規模なエンタープライズ環境では3～6週間が一般的です。"}
                },
                {
                  "@type": "Question",
                  "name": "設置サービスは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。プロジェクト管理、機器設置、設定、テスト、文書化を含む完全な設置サービスを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "特定のアプリケーション向けに設計できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。VoIP、ビデオストリーミング、IoTデバイス、高密度環境、ミッションクリティカルアプリケーションを含む特定のアプリケーション向けに最適化されたネットワークを設計します。"}
                },
                {
                  "@type": "Question",
                  "name": "どのベンダーと連携していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "Cisco、Aruba、Ruckus、Ubiquitiなどの主要無線ベンダーと連携し、お客様の特定の要件と予算に最適なソリューションを選択します。"}
                },
                {
                  "@type": "Question",
                  "name": "継続的なサポートは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。継続的な最適パフォーマンスを確保するため、ネットワーク監視、最適化、トラブルシューティング、拡張計画を含む継続的なサポートを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "既存ネットワークと統合できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。既存の有線インフラストラクチャ、セキュリティシステム、ネットワーク管理プラットフォームとシームレスに統合する無線ネットワークを設計します。"}
                },
                {
                  "@type": "Question",
                  "name": "将来の拡張についてはどうですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "私たちの設計には、ビジネス成長と進化するテクノロジー要件に対応するためのスケーラビリティ計画と将来の拡張考慮事項が含まれています。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
