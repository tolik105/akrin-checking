"use client";

import Link from "next/link";
import { PremiumCTA } from "@/components/ui/premium-cta";
import { useEffect, useRef } from "react";

export default function AboutClient() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const attemptPlay = () => {
      try {
        v.muted = true
        const p: any = v.play()
        if (p && typeof p.catch === "function") p.catch(() => {})
      } catch {}
    }
    attemptPlay()
    const onClick = () => attemptPlay()
    window.addEventListener("click", onClick, { once: true })
    return () => window.removeEventListener("click", onClick)
  }, [])
  return (
    <div className="bg-white">
      {/* Hero Section with Background Video */}
      <section className="relative py-16 lg:py-20 overflow-hidden min-h-[60vh] pt-20 sm:pt-24">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/og-image.png"
            aria-hidden="true"
          >
            <source src="/video/about-us.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              AKRINについて
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              エンタープライズ級の信頼性、スタートアップの俊敏性
            </p>
            <div className="mt-6">
              <Link
                href="/ja/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#20B2AA] hover:bg-[#1a9a94] transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <div className="py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちについて</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AKRINは2025年、経験豊富なインフラエンジニアにより東京で設立。15年以上の大規模IT運用の知見を、無駄のないオートメーションファーストの考え方と融合させています。
                </p>
                <p>
                  私たちの使命は明確です。日本の成長企業に、フォーチュン500が享受する稼働率・セキュリティ・イノベーションを、エンタープライズ価格ではなく、適正なコストで提供すること。
                </p>
                <p>
                  これを実現するために、次の3つを重視しています。
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>エンジニア主導のサービス</li>
                  <li>オートメーションファースト</li>
                  <li>ジャパン・グローバルブリッジ</li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AKRINのチーム"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The AKRIN Story Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AKRINのストーリー</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Partnership */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ビジネスパートナーシップ</h3>
              <p className="text-gray-600 text-sm">
                アカウントマネージャーの伝言ゲームなし。シニアエンジニアに直接アクセスでき、ビジネスと技術の両面を深く理解します。
              </p>
            </div>

            {/* Continuous Reliability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">継続的な信頼性</h3>
              <p className="text-gray-600 text-sm">
                24時間365日の監視、2時間以内のSLA対応、99.9%の稼働率保証。止まらないインフラで、止まらないビジネスを。
              </p>
            </div>

            {/* Systematic Growth */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">体系的な成長</h3>
              <p className="text-gray-600 text-sm">
                ビジネスの成長に合わせて拡張できるソリューション。スタートアップからエンタープライズまで、成功を支えるインフラ基盤を提供します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">提供サービス</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">マネージドIT・クラウド</h3>
              <p className="text-gray-600">
                Microsoft 365、Azure、AWS、ハイブリッド環境における設計・移行・24時間運用までを一気通貫で提供。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ネットワークエンジニアリング</h3>
              <p className="text-gray-600">
                有線／無線ネットワークの設計・構築・最適化。拠点間WANからオフィス内Wi‑Fiサイトサーベイまで対応。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">プロジェクトマネジメント・デリバリー</h3>
              <p className="text-gray-600">
                PMPに基づくフレームワークで、複雑なロールアウトを納期・予算・ドキュメントの面で確実に遂行。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">カスタムAIソリューション</h3>
              <p className="text-gray-600">
                業務ドメインに特化したチャットボット、ワークフロー自動化、データコパイロットを、貴社のスタックに合わせて構築。自社内プラットフォームの知見をクライアント案件へ還元します。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">サイバーセキュリティ・コンプライアンス</h3>
              <p className="text-gray-600">
                ハードニング、リアルタイム監視、インシデント対応、ISO 27001等のフレームワーク取得に向けた実践的支援。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why AKRIN Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AKRINが選ばれる理由</h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    柱
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    お客様のメリット
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    エンジニア主導のサービス
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    アカウントマネージャー経由なしでシニアエンジニアに直接アクセス。
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    オートメーションファースト
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    スクリプトによる自動復旧でMTTRを最大40%短縮。
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ジャパン・グローバルブリッジ
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    本社標準と日本の規制を、EN/JPバイリンガル体制で確実に橋渡し。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">コアバリュー</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">明瞭さ</h3>
              <p className="text-gray-600 text-sm">
                平易な提案書と透明なコスト提示。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">スピード</h3>
              <p className="text-gray-600 text-sm">
                キックオフから本番まで数週間で。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">責任</h3>
              <p className="text-gray-600 text-sm">
                営業日2時間以内のSLA対応。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">パートナーシップ</h3>
              <p className="text-gray-600 text-sm">
                貴社のKPIを私たちのロードマップに反映。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <PremiumCTA
        variant="dark"
        title="ITインフラを変革しませんか？"
        description="専門家による無料相談で、貴社の成長を加速させる最適解をご提案します。"
        buttonText="相談を予約"
        buttonHref="/ja/contact"
      />
    </div>
  );
}



