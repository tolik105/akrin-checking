"use client"

import React, { useState, useEffect } from "react"
import Script from "next/script"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"
import { HeroDiagonal } from "@/components/hero-diagonal"

const FAQItem = ({
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
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <svg
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-[#20B2AA] transition-all duration-200",
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
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-[#20B2AA] transition-all duration-200",
              isOpen && "rotate-0 scale-100",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function ITConsultingProjectManagementJaClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "AKRINは私たちの小規模オフィスのクラウド移行をエンドツーエンドで管理し、わずか週末1回のダウンタイムで完了しました。",
      author: "ITマネージャー、東京デザイン会社"
    },
    {
      title: "48時間で完了した地域クラウド移行",
      quote: "AKRINは240ユーザー、5拠点の小売チェーンをオンプレミスExchangeからMicrosoft 365に移行しました。すべてのメールボックスを一晩で切り替え、レガシーサーバーを48時間以内に廃止—データ損失なし、営業時間中のダウンタイムゼロでした。",
      author: "ITディレクター、日本小売グループ"
    },
    {
      quote: "AKRINは名古屋と大阪のオンプレミスルームを閉鎖し、27暦日ですべてをコロケーションに移行しました—すべてのドライブが消去され文書化されました。監査人からのフォローアップは一切ありませんでした。",
      author: "ITインフラストラクチャマネージャー、中規模製造グループ"
    },
    {
      quote: "彼らのチームは金曜日の夜に到着し、18ラックを取り外し、月曜日の朝にはワークロードがAzureで稼働していました。月曜日にユーザーチケットは1件もありませんでした。",
      author: "システム責任者、地域医療ネットワーク"
    },
    {
      quote: "6つの支店でクローゼットサーバーを運用していましたが、AKRINは3県にわたるハードウェアを2週末でマッピング、梱包、廃棄しました。プロセスがあまりにもスムーズだったため、財務部門は延期したのかと尋ねました。",
      author: "運営ディレクター、eコマース小売業者"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

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

      <div className="bg-white font-sans">
        {/* Standardized Hero Section (HeroDiagonal) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              ITコンサルティング＆<br />
              プロジェクト<br />
              管理サービス
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/ja/services' },
              { label: 'ITコンサルティング＆プロジェクト管理' }
            ]}
            imageSrc="/images/banners/it-consulting-project-management/hero-banner.webp"
            imageAlt="ITコンサルティングチームミーティング"
          />
        </section>

        {/* IT Infrastructure Project Management Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  ITインフラストラクチャ<br />
                  プロジェクト管理
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  初期プロジェクトスコープと計画から実装と継続的サポートまで、複雑なテクノロジーイニシアチブの成功した配信を確保する包括的なITプロジェクト管理サービスを提供します。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">包括的なプロジェクト計画とリソース管理</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">リスク評価と軽減戦略</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">ベンダー調整とステークホルダー管理</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">品質保証と配信監督</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">実装後サポートと最適化</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  経験豊富なプロジェクトマネージャーがお客様のチームと密接に連携し、プロジェクトが時間通り、予算内で、お客様の正確な仕様に従って配信されることを確保します。
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="ITインフラストラクチャプロジェクト管理"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Office Relocation Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="オフィス移転サービス"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  オフィス移転
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  オフィスの移転には、ITインフラストラクチャ、機器、人員の慎重な調整が必要です。私たちの包括的な移転サービスは、移行期間中の完全な運用能力を維持しながら、ビジネスの中断を最小限に抑えることを確保します。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">移転前ITインフラストラクチャ評価と計画</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">新しい場所でのネットワークと通信設定</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">機器移転と安全なデータ移行</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">すべてのシステムのテストと検証</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">移行期間中の従業員トレーニングとサポート</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  同じ建物内での移転でも全国規模での移転でも、精密さと注意深さでIT移転のあらゆる側面を処理します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Center Build / Relocations - EireSystems Style 4-Column Layout */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                データセンター構築・移転
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                初期サイト評価から最終コミッショニングまで、ダウンタイムを最小化し運用効率を最大化するエンドツーエンドのデータセンター構築・移転サービスを提供します。
              </p>
            </div>

            {/* 4-Column Service Grid - Exact EireSystems Style */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {/* Column 1: Planning */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2zm8 0h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">計画・設計</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>サイト評価と分析</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>インフラストラクチャ設計とレイアウト</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>容量計画とスケーラビリティ</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>リスク評価と軽減</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Build */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">構築・設置</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>電源・冷却システム</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ネットワークインフラストラクチャ展開</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>サーバーラック・キャビネット設置</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>セキュリティ・アクセス制御システム</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Migration */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">移行・テスト</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>データ移行・転送</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>アプリケーション移転・テスト</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>パフォーマンス検証・最適化</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>災害復旧検証</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Support */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.236a2 2 0 100 4 2 2 0 000-4zM12 17.764a2 2 0 100 4 2 2 0 000-4zM4.343 4.343a2 2 0 100 4 2 2 0 000-4zM19.657 4.343a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">継続的サポート</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7監視・アラート</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>予防保守プログラム</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>容量管理・スケーリング</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ドキュメント・トレーニング</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Center Image */}
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="データセンターインフラストラクチャ"
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-[#F8FAFC] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto py-12 px-6 md:px-12 lg:px-20 bg-white rounded-lg shadow-md border-l-4 border-[#20B2AA] relative overflow-hidden">

              {/* Testimonial Content */}
              <div className="relative">
                {testimonials[currentTestimonial].title && (
                  <h3 className="text-slate-800 font-semibold text-lg mb-4 transition-opacity duration-500">
                    {testimonials[currentTestimonial].title}
                  </h3>
                )}
                <blockquote className="text-slate-700 leading-relaxed italic text-lg mb-6 transition-opacity duration-500">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <hr className="border-t border-slate-200 mb-4" />
                <cite className="text-slate-500 text-sm font-normal tracking-wide transition-opacity duration-500" style={{fontVariant: 'small-caps'}}>
                  {testimonials[currentTestimonial].author}
                </cite>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-[#20B2AA]' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Continuity Planning Section - EireSystems Mint Green Background */}
        <div className="bg-[#F0F8F5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                事業継続計画
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                予期しない事象の際に重要なビジネス機能を維持しながら、運用の中断からビジネスを保護する包括的な継続計画でビジネスの回復力を確保します。
              </p>
            </div>

            {/* Phase-based Structure - EireSystems Style */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Phase 1: Assessment */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#20B2AA] text-white rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">評価フェーズ</h3>
                </div>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ビジネス影響分析</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>リスク評価と脆弱性特定</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>重要プロセスマッピング</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>復旧時間目標（RTO）定義</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2: Planning */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#20B2AA] text-white rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">計画フェーズ</h3>
                </div>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>災害復旧戦略開発</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>緊急対応手順</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>コミュニケーションプロトコルとチェーン</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>リソース配分とバックアップシステム</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3: Implementation */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#20B2AA] text-white rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">実装</h3>
                </div>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>計画テストと検証</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>スタッフトレーニングと意識向上プログラム</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ドキュメントと手順更新</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>継続的監視と保守</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="text-center">
              <p className="text-lg text-[#666666] leading-relaxed max-w-4xl mx-auto">
                事業継続計画への体系的なアプローチにより、組織があらゆる中断に効果的に対応し、必須業務を維持し、ビジネスの評判を保護できることを確保します。
              </p>
            </div>
          </div>
        </div>

        {/* Business Analysis for IT Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  IT向けビジネス分析
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  ビジネス要件と技術ソリューションの間のギャップを埋めます。私たちのビジネス分析サービスは、ITイニシアチブが戦略的目標と整合し、測定可能なビジネス価値を提供することを確保します。
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">要件収集とステークホルダー分析</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">プロセスマッピングとワークフロー最適化</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">ソリューション設計と技術仕様</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">変更影響評価と管理</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  経験豊富なビジネスアナリストがお客様のステークホルダーと密接に連携し、ビジネスニーズを組織の成功を推進する実行可能なIT戦略に変換します。
                </p>
              </div>

              {/* Right Image - World Map/Global Strategy */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="グローバルビジネス戦略"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Migration and Technology Renewal Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="テクノロジー移行"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  移行と<br />
                  テクノロジー更新
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  専門的な移行サービスとテクノロジー更新戦略でITインフラストラクチャを近代化します。パフォーマンスと効率を最大化しながら中断を最小化するシームレスな移行を確保します。
                </p>

                {/* Service breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">レガシーシステム移行と近代化</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">クラウド移行とハイブリッドインフラストラクチャ</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">テクノロジースタック最適化と更新</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">データ移行と整合性検証</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  実証済みの方法論により、運用効率を向上させ、将来の成長に向けて組織を位置づける成功したテクノロジー移行を確保します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
            <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-600 md:text-left md:text-6xl dark:text-neutral-50">
              よくある質問
            </h2>
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
              <FAQItem
                question="どのような規模のプロジェクトを受け入れますか？"
                answer="通常、20～500席または1～20ラックのプロジェクトを扱いますが、他の規模についてもお気軽にお問い合わせください。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <FAQItem
                question="東京以外でも作業しますか？"
                answer="はい。コンサルタントは日本全国どこでも出張し、リモート計画ワークショップも利用可能です。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <FAQItem
                question="どのようなプロジェクト追跡ツールを使用しますか？"
                answer="高レベルのタイムラインにはMS Project、課題追跡にはJiraを使用しますが、お客様の希望するプラットフォームに適応します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <FAQItem
                question="どのくらいのリードタイムが必要ですか？"
                answer="ほとんどのオフィス移転や中規模移行では、4～6週間の事前通知が理想的です。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
            </div>
          </div>
        </div>

        {/* CTA Section - EireSystems Style */}
        <div className="bg-[#20B2AA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              小規模、中規模、大規模企業向けの<br />
              完全なITインフラストラクチャソリューション
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              ITイニシアチブを加速する準備はできていますか？コンサルティング専門家にお問い合わせいただき、プロジェクト要件について話し合い、デジタルトランスフォーメーションの推進をどのようにサポートできるかをご確認ください。
            </p>
            <Link
              href="/ja/contact"
              className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              今すぐお問い合わせ
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
              "name": "ITコンサルティング＆プロジェクト管理",
              "alternateName": "IT Consulting & Project Management",
              "serviceType": "ITコンサルティング・プロジェクト管理サービス",
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
              "url": "https://akrin.jp/ja/services/it-consulting-project-management",
              "description": "戦略的ITコンサルティング、プロジェクト管理、デジタルトランスフォーメーションサービス。テクノロジーイニシアチブ、ベンダー管理、IT戦略の整合性に関する専門的ガイダンス。"
            })
          }}
        />
      </div>
    </div>
  )
}
