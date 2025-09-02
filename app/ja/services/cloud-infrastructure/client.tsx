"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

import { HeroDiagonal } from "@/components/hero-diagonal"

export default function CloudInfrastructureJaClient() {
  const accordionItems = [
    {
      title: "クラウド準備状況・TCO評価",
      body: "現在のインフラストラクチャとアプリケーションの包括的な分析を行い、クラウド準備状況を判定し、情報に基づいた移行決定のための詳細なROI/TCOモデルを作成します。"
    },
    {
      title: "セキュアな移行・モダナイゼーション",
      body: "CI/CDパイプラインとInfrastructure as Code（Terraform/Bicep）を使用して、リフト＆シフトまたはリファクタリング戦略を実行し、効率的なクラウド変革を実現します。"
    },
    {
      title: "コスト・パフォーマンス最適化",
      body: "オートスケーリング、リザーブドインスタンス、FinOpsレポートを実装して、クラウド効率を最大化し、大幅なコスト削減を実現します。"
    },
    {
      title: "マネージドクラウド運用（24/7）",
      body: "パッチ適用、監視、バックアップ、インシデント対応を含む、24時間体制での完全なクラウド運用管理を提供します。"
    },
    {
      title: "セキュリティ・コンプライアンス管理",
      body: "暗号化、IAM、継続的監視、規制業界向けコンプライアンス管理を含む、エンタープライズグレードのセキュリティ実装を提供します。"
    },
    {
      title: "マルチクラウド・ハイブリッドソリューション",
      body: "Azure、AWS、GCPにわたるマルチクラウドアーキテクチャを設計・管理し、オンプレミスシステムとのシームレスなハイブリッド接続を実現します。"
    }
  ]



  const faqItems = [
    {
      q: "一般的な移行期間は？",
      a: "小規模で4～6週間、大規模で3～6ヶ月が目安です。アプリケーションの複雑さとデータ量によってタイムラインが決まります。"
    },
    {
      q: "既存MSP／社内ITとの併用は可能？",
      a: "可能です。補完または全面委託どちらも対応します。協調的なアプローチを専門としています。"
    },
    {
      q: "Azureだけですか？",
      a: "Azure／AWS／GCPすべてに対応します。お客様の特定のニーズに最適なプラットフォームの選択をお手伝いします。"
    },
    {
      q: "移行時のセキュリティは？",
      a: "暗号化、最小権限IAM、ペンテスト、移行プロセス全体を通じた継続的監視で安全性を確保します。"
    },
    {
      q: "クラウドとオンプレミス両方の管理に対応できますか？",
      a: "はい。ハイブリッド環境が標準です。M365、AWS/Azure/GCPとオンプレミスサーバーを併せて管理します。"
    },
    {
      q: "コスト最適化について教えてください",
      a: "FinOpsプラクティス、適正サイジング、リザーブドインスタンス、継続的コスト監視を実装してクラウド支出を最適化します。"
    },
    {
      q: "コンプライアンス要件への対応は可能ですか？",
      a: "はい。お客様の業界固有のSOC2、ISO27001、GDPR、その他の規制要件への準拠を確保します。"
    },
    {
      q: "移行中に問題が発生した場合はどうなりますか？",
      a: "包括的なロールバック手順を用意し、ビジネス継続性を確保するため移行中は並行環境を維持します。"
    }
  ]

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
              クラウド<br />
              インフラストラクチャ<br />
              サービス
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/ja/services' },
              { label: 'Cloud Infrastructure' }
            ]}
            imageSrc="/images/banners/cloud-infrastructure/banner.avif"
            imageAlt="クラウドインフラストラクチャ"
          />
        </section>

        {/* Section 1: Cloud Readiness & TCO Assessment - mirror EN */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  クラウド準備状況 &<br />
                  TCO評価
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  現在のインフラとアプリケーションを包括的に分析し、クラウド適合性を判断。移行判断のための詳細なROI/TCOモデルを作成します。
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">現行インフラの評価とマッピング</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">アプリケーション依存関係の分析</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">コスト・ベネフィット分析とROIモデリング</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">移行戦略の提言</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">リスク評価と緩和計画</span>
                  </div>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  綿密なアセスメントにより、コスト・効果・タイムラインを明確化し、確信を持ってクラウド移行を進められます。
                </p>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70"
                  alt="クラウドアセスメントと計画"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Secure Migration & Modernization - mirror EN */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70"
                  alt="移行とモダナイゼーション"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={70}
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  セキュアな移行 &<br />
                  モダナイゼーション
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  CI/CD と IaC を用い、リフト&シフトまたはリファクタリング戦略でゼロダウンタイムの変革を実現します。
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">リフト&シフト移行戦略</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">アプリケーションのリファクタリング/近代化</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">CI/CD パイプライン実装</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">IaC (Terraform/Bicep)</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">データ移行と検証</span>
                  </div>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  実績ある手法で、業務影響を最小化しつつ効率的な移行を実現します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Managed Cloud Operations (24/7) - mirror EN 4-column */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">24/7 マネージドクラウド運用</h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                監視・最適化・セキュリティ・サポートまで、主要クラウドに渡る運用を包括管理します。
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">24/7 モニタリング</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>パフォーマンス監視</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>可用性アラート</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>SLAレポート</span></li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3h3m0 0V5m0 3h-3c-1.657 0-3 1.343-3 3v7m0 0H6a2 2 0 01-2-2v-5a2 2 0 012-2h3"/></svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">セキュリティ運用</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>脅威検知と対応</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>ポリシー準拠</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>監査ログ管理</span></li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6l-2 2m13-5l-7 7-3-3"/></svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">SRE/運用最適化</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>自動化とオートスケール</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>パフォーマンス最適化</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>ランブック/インシデント対応</span></li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 11h14M7 15h10"/></svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">FinOps/コスト最適化</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>リザーブド/セービングプラン</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>適正サイジング</span></li>
                  <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div><span>コスト可視化レポート</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Your Cloud Transformation Partner - mirror EN */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">クラウド変革パートナー</h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  成功するクラウド戦略には、専門知識・計画・継続的な最適化が不可欠です。当社のソリューションはビジネスニーズに合わせて進化し、スケーラブルで安全かつコスト効率的な運用を提供します。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4"><div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div><span className="text-[#2C2C2C] text-lg leading-relaxed">実証済みの方法論で確実な成果</span></div>
                  <div className="flex items-start space-x-4"><div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div><span className="text-[#2C2C2C] text-lg leading-relaxed">スタートアップから大企業まで対応</span></div>
                  <div className="flex items-start space-x-4"><div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div><span className="text-[#2C2C2C] text-lg leading-relaxed">セキュリティとコンプライアンスを堅持</span></div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/banners/cloud-infrastructure/banner.avif"
                  alt="クラウド変革のロードマップ"
                  width={1280}
                  height={720}
                  className="w-full h-auto rounded-lg shadow-lg"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - mirror EN colors/layout */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">インフラをモダナイズする準備はできていますか？</h2>
            <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">200社以上の企業がAKRINをクラウド変革のパートナーとして選んでいます。SMB向け価格でエンタープライズグレードのクラウドを。</p>
            <Link href="/ja/contact" className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">クラウドジャーニーを開始</Link>
          </div>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "クラウドインフラソリューション（日本のクラウド移行・管理）",
              "alternateName": "Cloud Infrastructure Solutions",
              "serviceType": "クラウド移行・マネージドクラウドサービス",
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
              "url": "https://akrin.jp/ja/services/cloud-infrastructure",
              "description": "Azure、AWS、GCPでのゼロダウンタイム移行、最適化、24/7運用。エンタープライズグレードのセキュリティとコスト効率でインフラストラクチャを変革します。",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "クラウド評価",
                  "price": "500000",
                  "priceCurrency": "JPY",
                  "description": "クラウド準備状況と移行計画"
                },
                {
                  "@type": "Offer",
                  "name": "クラウド移行",
                  "price": "2000000",
                  "priceCurrency": "JPY",
                  "description": "完全なクラウド移行サービス"
                },
                {
                  "@type": "Offer",
                  "name": "マネージド運用",
                  "price": "300000",
                  "priceCurrency": "JPY",
                  "description": "月額クラウド管理とサポート"
                }
              ],
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "一般的な移行期間は？",
                  "acceptedAnswer": {"@type": "Answer", "text": "小規模で4～6週間、大規模で3～6ヶ月が目安です。アプリケーションの複雑さとデータ量によってタイムラインが決まります。"}
                },
                {
                  "@type": "Question",
                  "name": "既存MSP／社内ITとの併用は可能？",
                  "acceptedAnswer": {"@type": "Answer", "text": "可能です。補完または全面委託どちらも対応します。協調的なアプローチを専門としています。"}
                },
                {
                  "@type": "Question",
                  "name": "Azureだけですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "Azure／AWS／GCPすべてに対応します。お客様の特定のニーズに最適なプラットフォームの選択をお手伝いします。"}
                },
                {
                  "@type": "Question",
                  "name": "移行時のセキュリティは？",
                  "acceptedAnswer": {"@type": "Answer", "text": "暗号化、最小権限IAM、ペンテスト、移行プロセス全体を通じた継続的監視で安全性を確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "クラウドとオンプレミス両方の管理に対応できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。ハイブリッド環境が標準です。M365、AWS/Azure/GCPとオンプレミスサーバーを併せて管理します。"}
                },
                {
                  "@type": "Question",
                  "name": "コスト最適化について教えてください",
                  "acceptedAnswer": {"@type": "Answer", "text": "FinOpsプラクティス、適正サイジング、リザーブドインスタンス、継続的コスト監視を実装してクラウド支出を最適化します。"}
                },
                {
                  "@type": "Question",
                  "name": "コンプライアンス要件への対応は可能ですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。お客様の業界固有のSOC2、ISO27001、GDPR、その他の規制要件への準拠を確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "移行中に問題が発生した場合はどうなりますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "包括的なロールバック手順を用意し、ビジネス継続性を確保するため移行中は並行環境を維持します。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
