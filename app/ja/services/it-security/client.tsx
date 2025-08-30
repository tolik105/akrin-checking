"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"

import { HeroDiagonal } from "@/components/hero-diagonal"

export default function ITSecurityJaClient() {

  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE', { cookie_domain: 'akrin.jp' });
        `}
      </Script>

      <div className="bg-white font-sans">
        {/* 標準化ヒーロー（HeroDiagonal） */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              ITセキュリティ<br />
              ソリューション &<br />
              プロテクション
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/ja/services' },
              { label: 'IT Security' }
            ]}
            imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            imageAlt="ITセキュリティソリューション"
          />
        </section>

        {/* Endpoint Security Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  エンドポイント<br />
                  セキュリティ
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  アンチウイルス、アンチマルウェア、デバイス暗号化、モバイルデバイス管理（MDM）を含む包括的なエンドポイント保護により、接続されたすべてのデバイスを保護します。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">高度なマルウェア・ランサムウェア保護</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">デバイス暗号化・データ保護</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">モバイルデバイス管理（MDM）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">リアルタイム脅威検知・対応</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">一元管理・監視</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  私たちの高度なエンドポイントセキュリティソリューションは、すべてのデバイスを包括的に保護し、ビジネスの継続性を確保します。
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="エンドポイントセキュリティ"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Network Security Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="ネットワークセキュリティ・ファイアウォール"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  ネットワークセキュリティ &<br />
                  ファイアウォール管理
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  次世代ファイアウォール、侵入検知システム、VPNセットアップ、ネットワークセグメンテーションを含むネットワークセキュリティ実装により、包括的な保護を提供します。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">次世代ファイアウォール（NGFW）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">侵入検知・防止システム（IDS/IPS）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">セキュアVPN・リモートアクセス</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">ネットワークセグメンテーション</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">24/7ネットワーク監視</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  私たちの包括的なネットワークセキュリティソリューションは、外部・内部の脅威から組織を保護し、安全なネットワーク環境を維持します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Security Partner Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  セキュリティ<br />
                  パートナー
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  効果的なITセキュリティには、最新の脅威情勢、高度なセキュリティツール、迅速なインシデント対応能力の深い理解が必要です。認定されたセキュリティ専門家が業界のベストプラクティスと最先端技術を使用します。
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">認定セキュリティ専門家・エシカルハッカー</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">業界標準セキュリティ手法</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">包括的レポートとインシデント対応</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">コンプライアンスフレームワークサポート</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  エンドポイントセキュリティからネットワーク保護、データ暗号化まで、セキュリティリスクを理解し、ビジネスを保護するための包括的なソリューションを提供します。
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="セキュリティパートナーシップ"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - EireSystems Style */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              セキュリティ防御を強化する準備はできていますか？
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              進化するサイバー脅威から先手を打ちましょう。包括的なITセキュリティソリューションと専門的な監視でビジネスを保護します。
            </p>
            <Link
              href="/ja/contact"
              className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              セキュリティ評価開始
              <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              "name": "ITセキュリティソリューション＆プロテクション",
              "alternateName": "IT Security Solutions & Protection",
              "serviceType": "ITセキュリティ・情報セキュリティサービス",
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
              "url": "https://akrin.jp/ja/services/it-security",
              "description": "包括的なITセキュリティソリューション、脅威検知、インシデント対応。多層セキュリティアプローチで進化するサイバー脅威からビジネスを保護します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "どのようなセキュリティ脅威から保護しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "マルウェア、ランサムウェア、フィッシング攻撃、データ侵害、内部脅威、高度持続的脅威（APT）から多層セキュリティアプローチで保護します。"}
                },
                {
                  "@type": "Question",
                  "name": "24/7セキュリティ監視は提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。リアルタイムで脅威を検知・対応するための24/7セキュリティ監視・インシデント対応サービスを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "コンプライアンス要件はどのように対応しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "ISO 27001、GDPR、日本の個人情報保護法、業界固有の基準を含む様々な規制への準拠を支援します。"}
                },
                {
                  "@type": "Question",
                  "name": "セキュリティインシデント時の事業継続性はどのように確保しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "事業継続計画、セキュアバックアップシステム、迅速な復旧手順を実装し、セキュリティインシデント時のダウンタイムを最小限に抑えます。"}
                },
                {
                  "@type": "Question",
                  "name": "既存のセキュリティツールと統合できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。既存のセキュリティインフラストラクチャと統合・強化し、一元管理・監視を提供できます。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
