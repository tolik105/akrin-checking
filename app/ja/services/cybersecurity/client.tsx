"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"
import { PremiumCTA } from "@/components/ui/premium-cta"
import { HeroDiagonal } from "@/components/hero-diagonal"
import Image from "next/image"


export default function CybersecurityJaClient() {

  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE');
        `}
      </Script>

      <style jsx>{`
        .japanese-typography {
          font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic", "Meiryo", "Yu Gothic Medium", "Yu Gothic", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        .japanese-typography h1, .japanese-typography h2, .japanese-typography h3 {
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .japanese-typography p, .japanese-typography span, .japanese-typography li {
          letter-spacing: 0.03em;
          line-height: 1.7;
        }
        @media (max-width: 640px) {
          .japanese-typography h1 { font-size: 1.75rem; line-height: 1.3; }
          .japanese-typography h2 { font-size: 1.5rem; line-height: 1.3; }
          .japanese-typography h3 { font-size: 1.125rem; line-height: 1.4; }
          .japanese-typography p { font-size: 0.875rem; line-height: 1.7; }
        }
      `}</style>

      <div className="bg-white font-sans japanese-typography">
        {/* 標準化ヒーロー（HeroDiagonal） */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              サイバーセキュリティ<br />
              ソリューション＆<br />
              プロテクション
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/ja/services' },
              { label: 'Cybersecurity' }
            ]}
            imageSrc="/images/banners/cybersecurity/banner1.avif"
            imageAlt="サイバーセキュリティソリューション"
          />
        </section>

        {/* Security Assessment Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-[1.3]" style={{ letterSpacing: '0.02em' }}>
                  セキュリティ評価<br />
                  ＆監査
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#666666] mb-6 sm:mb-8 leading-[1.7]" style={{ letterSpacing: '0.05em' }}>
                  脆弱性評価、ペネトレーションテスト、コンプライアンス監査を含む包括的なセキュリティ評価により、お客様のインフラにおけるセキュリティギャップを特定し、対処します。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-base leading-[1.6]" style={{ letterSpacing: '0.03em' }}>脆弱性評価とペネトレーションテスト</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-base leading-[1.6]" style={{ letterSpacing: '0.03em' }}>コンプライアンス監査とギャップ分析</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-base leading-[1.6]" style={{ letterSpacing: '0.03em' }}>リスク評価と優先順位付け</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-base leading-[1.6]" style={{ letterSpacing: '0.03em' }}>セキュリティポリシーの策定</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-base leading-[1.6]" style={{ letterSpacing: '0.03em' }}>改善計画と実施</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-[1.7]" style={{ letterSpacing: '0.05em' }}>
                  当社の徹底したセキュリティ評価により、お客様のセキュリティ状況を明確に把握し、改善のための実行可能な推奨事項を提示します。
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/images/banners/cybersecurity/Security-Assessment.avif"
                  alt="セキュリティ評価・監査"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Managed Detection & Response Section - EireSystems Style */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/banners/cybersecurity/detection-response.avif"
                  alt="マネージド検知・対応"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={70}
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-[1.3]" style={{ letterSpacing: '0.02em' }}>
                  マネージド検知<br />
                  ＆対応（MDR）
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#666666] mb-6 sm:mb-8 leading-[1.7]" style={{ letterSpacing: '0.05em' }}>
                  高度な脅威検知、リアルタイム分析、セキュリティインシデントへの迅速な対応による、24時間365日の脅威監視とインシデント対応サービス。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">24時間365日のセキュリティ監視とアラート</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">高度な脅威検知と分析</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">迅速なインシデント対応と封じ込め</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">脅威インテリジェンス＆ハンティング</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">フォレンジック分析とレポート</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  当社の専門セキュリティアナリストが脅威への即時対応による継続的な保護を提供し、ビジネスへの影響を最小限に抑え、迅速な復旧を実現します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Operations Center Section - EireSystems Style 4-Column Layout */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-[1.3]" style={{ letterSpacing: '0.02em' }}>
                セキュリティオペレーションセンター（SOC）
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#666666] max-w-4xl mx-auto leading-[1.7]" style={{ letterSpacing: '0.05em' }}>
                専門アナリストによる専用セキュリティ監視により、継続的な監視、脅威インテリジェンス、プロアクティブなセキュリティ管理を提供します。
              </p>
            </div>

            {/* 4-Column Service Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Column 1: Monitoring */}
              <div className="text-center sm:text-left lg:text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto sm:mx-0 lg:mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2C2C2C] mb-3 sm:mb-4 leading-[1.4]" style={{ letterSpacing: '0.02em' }}>継続的な監視</h3>
                <ul className="text-[#666666] space-y-2 text-left text-xs sm:text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span style={{ letterSpacing: '0.03em', lineHeight: '1.6' }}>24時間365日のセキュリティ監視</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span style={{ letterSpacing: '0.03em', lineHeight: '1.6' }}>リアルタイム脅威検知</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span style={{ letterSpacing: '0.03em', lineHeight: '1.6' }}>アラートの自動相関</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span style={{ letterSpacing: '0.03em', lineHeight: '1.6' }}>行動分析</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Analysis */}
              <div className="text-center sm:text-left lg:text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto sm:mx-0 lg:mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">脅威分析</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>専門セキュリティ・アナリスト</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>脅威インテリジェンスの統合</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>リスク評価とスコアリング</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>攻撃パターン認識</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Response */}
              <div className="text-center sm:text-left lg:text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto sm:mx-0 lg:mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">インシデント対応</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>迅速な脅威の封じ込め</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>自動化されたレスポンス・アクション</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>フォレンジック調査</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>復旧の調整</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Compliance */}
              <div className="text-center sm:text-left lg:text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto sm:mx-0 lg:mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">コンプライアンス管理</h3>
                <ul className="text-[#666666] space-y-2 text-left text-sm sm:text-base">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ISO 27001サポート</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>SOC 2コンプライアンス</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>GDPR文書化</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>監査準備</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SOC Image */}
            <div className="text-center">
              <Image
                src="/images/banners/cybersecurity/Security-Operations.webp"
                alt="セキュリティオペレーションセンター"
                width={1280}
                height={720}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
                quality={70}
              />
            </div>
          </div>
        </div>

        {/* Your Security Partner Section - EireSystems Style */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-[1.3]" style={{ letterSpacing: '0.02em' }}>
                  お客様のサイバーセキュリティ<br />
                  パートナー
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#666666] mb-6 sm:mb-8 leading-[1.7]" style={{ letterSpacing: '0.05em' }}>
                  効果的なサイバーセキュリティの構築には、専門知識、高度なツール、継続的な監視が必要です。当社のセキュリティ専門家がお客様のチームの延長として機能し、現代の脅威から防御するために必要な知識とリソースを提供します。
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">エンタープライズグレードのセキュリティツールとプラットフォーム</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">認定セキュリティ専門家</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">実証済みのインシデント対応手法</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">継続的な脅威状況の監視</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  最先端のテクノロジーと実証済みの手法を組み合わせ、脅威の状況に合わせて進化する包括的なセキュリティソリューションを提供します。
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-8 lg:mt-0">
                <Image
                  src="/images/banners/cybersecurity/Cybersecurity-Partner.avif"
                  alt="サイバーセキュリティ・パートナーシップ"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA Section */}
        <PremiumCTA
          variant="teal"
          title="セキュリティ強化の準備はできていますか？"
          description="包括的なサイバーセキュリティでAKRINを信頼する数百社の企業に加わりましょう。専門サポートと24時間365日の監視によるエンタープライズグレードの保護を手に入れましょう。"
          buttonText="セキュリティ評価を開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "サイバーセキュリティ＆脅威対策",
              "alternateName": "Cybersecurity & Threat Protection",
              "serviceType": "サイバーセキュリティ・情報セキュリティサービス",
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
              "url": "https://akrin.jp/ja/services/cybersecurity",
              "description": "24時間365日のセキュリティ監視、脅威検知、インシデント対応。進化するサイバー脅威からエンタープライズグレードのセキュリティソリューションでビジネスを保護します。"
            })
          }}
        />
      </div>
    </div>
  )
}
