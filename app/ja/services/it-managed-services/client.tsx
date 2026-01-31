"use client"

import React from "react"
import Script from "next/script"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { ServiceProcessCard } from "@/components/service-process-card"
import { cn } from "@/lib/utils"
import { HeroDiagonal } from "@/components/hero-diagonal"

function SpotlightLogoCloud() {
  const logos = [
    {
      name: "Microsoft",
      src: "https://img.logo.dev/microsoft.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Amazon AWS",
      src: "https://img.logo.dev/aws.amazon.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Google Cloud",
      src: "https://img.logo.dev/cloud.google.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "VMware",
      src: "https://img.logo.dev/vmware.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Cisco",
      src: "https://img.logo.dev/cisco.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "Dell",
      src: "https://img.logo.dev/dell.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "HP",
      src: "https://img.logo.dev/hp.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
    {
      name: "IBM",
      src: "https://img.logo.dev/ibm.com?size=128&format=png&token=pk_UEr0qEZTRlmPOWFTe-G1XA",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-20">
      <AmbientColor />
      <h3 className="bg-gradient-to-b from-[#2C2C2C] to-[#666666] bg-clip-text pb-4 text-center font-sans text-2xl font-bold text-transparent md:text-3xl">
        テクノロジーパートナー
      </h3>
      <p className="text-[#666666] mb-10 mt-4 text-center font-sans text-base">
        業界をリードするテクノロジーパートナーと協力して、最高クラスのソリューションを提供します
      </p>
      <div className="relative mx-auto grid w-full max-w-4xl grid-cols-2 md:grid-cols-4 gap-8">
        {logos.map((logo, idx) => (
          <div
            key={logo.name + idx + "logo-spotlight"}
            className="flex items-center justify-center"
          >
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#20B2AA] hover:scale-105 w-[120px] h-[120px] flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="w-full max-w-[100px] h-auto select-none object-contain opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const AmbientColor = () => {
  return (
    <div className="pointer-events-none absolute left-40 top-0 z-40 h-screen w-screen">
      <div
        style={{
          transform: "translateY(-350px) rotate(-45deg)",
          width: "560px",
          height: "1380px",
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(174, 62%, 47%, .15) 0, hsla(174, 62%, 47%, .08) 50%, hsla(174, 62%, 47%, .03) 80%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
        className="absolute left-0 top-0"
      />

      <div
        style={{
          transform: "rotate(-45deg) translate(5%, -50%)",
          transformOrigin: "top left",
          width: "240px",
          height: "1380px",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(174, 62%, 47%, .1) 0, hsla(174, 62%, 47%, .05) 80%, transparent 100%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
        className="absolute left-0 top-0"
      />

      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          transform: "rotate(-45deg) translate(-180%, -70%)",
          transformOrigin: "top left",
          top: 0,
          left: 0,
          width: "240px",
          height: "1380px",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(174, 62%, 47%, .08) 0, hsla(174, 62%, 47%, .03) 80%, transparent 100%)",
          filter: "blur(20px)",
        }}
        className="absolute left-0 top-0"
      />
    </div>
  );
};

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

export default function ITManagedServicesClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <>
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
        {/* Breadcrumb removed */}

        {/* Standardized Hero Section (HeroDiagonal) */}
        <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
          <HeroDiagonal
            title={<>
              ITマネージドサービス<br />
              ソリューション
            </>}
            breadcrumbs={[
              { label: 'Services', href: '/ja/services' },
              { label: 'IT Managed Services' }
            ]}
            imageSrc="/images/banners/it-managed-services/banner.avif"
            imageAlt="ITマネージドサービスチーム"

          />
        </section>

        {/* 24/7 Network Monitoring Section - EireSystems Style */}
        <div className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                  24時間365日<br />
                  ネットワーク監視
                </h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                  御社のITインフラ全体を継続的に監視し、問題がビジネス運営に影響を与える前に予防的な問題検出と解決を行います。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">リアルタイムのシステムパフォーマンス監視</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">自動アラートシステムおよび通知</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">予防的な問題解決と防止</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">ネットワークセキュリティおよび脅威検出</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">パフォーマンス最適化とキャパシティプランニング</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  当社の高度な監視システムにより、ITインフラが最小限のダウンタイムで最大の信頼性と最高のパフォーマンスを維持します。
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-8 lg:mt-0">
                <img
                  src="/images/banners/it-managed-services/monitoring.webp"
                  alt="ネットワーク監視ダッシュボード"
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Help Desk Support Section - EireSystems Style */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                <img
                  src="/images/banners/it-managed-services/Help-Desk-Support.webp"
                  alt="ヘルプデスクサポートチーム"
                  className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none brightness-105 saturate-90"
                  style={{ filter: 'brightness(1.05) saturate(0.9) hue-rotate(10deg)' }}
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 leading-tight">
                  無制限ヘルプデスク<br />
                  サポート
                </h2>
                <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
                  24時間365日の技術サポートと保証された応答時間。経験豊富な技術者が、あらゆるITのご要望に即時対応いたします。
                </p>

                {/* Bullet Points with EireSystems styling */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">重大な問題は30分以内に解決</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">標準のご依頼は4時間以内に対応</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">マルチチャネルサポート（電話・メール・チャット）</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">リモートおよびオンサイトの技術支援</span>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-sm sm:text-base lg:text-lg leading-relaxed">英語・日本語のバイリンガルサポート</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  専任のサポートチームが、御社の従業員の生産性維持を迅速かつ信頼性の高い技術支援でサポートいたします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Management Section - EireSystems Style 4-Column Layout */}
        <div className="bg-[#F8F9FA] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                完全インフラ管理
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                サーバーからクラウドプラットフォームまで、御社のITインフラ全体を専門知識と精度をもって管理し、最適なパフォーマンスとセキュリティを保証します。
              </p>
            </div>

            {/* 4-Column Service Grid - Exact EireSystems Style */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {/* Column 1: Server Management */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">サーバー管理</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Windows & Linux管理</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>仮想化管理</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>パフォーマンス最適化</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>セキュリティパッチ適用</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Network Management */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">ネットワーク管理</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>WAN/LAN最適化</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>WiFi設計・管理</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>ファイアウォール設定</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>VPN設定・保守</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Cloud Operations */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">クラウド運用</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Microsoft 365管理</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Azure、AWS、GCPの運用</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>バックアップと災害復旧</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>コスト最適化</span>
                  </li>
                </ul>
              </div>

              {/* Column 4: Security & Compliance */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">セキュリティ＆コンプライアンス</h3>
                <ul className="text-[#666666] space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>エンドポイント保護</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>セキュリティ監視</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>コンプライアンス管理</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0"></div>
                    <span>脆弱性評価</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Infrastructure Image */}
            <div className="text-center">
              <img
                src="/images/banners/it-managed-services/Infrastructure-Management.webp"
                alt="ITインフラ管理"
                className="w-full max-w-5xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Strategic IT Planning Section - EireSystems Mint Green Background */}
        <div className="bg-[#F0F8F5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                戦略的IT計画・ガバナンス
              </h2>
              <p className="text-lg text-[#666666] max-w-4xl mx-auto leading-relaxed">
                御社のビジネス目標に合わせた長期的なテクノロジーロードマップの策定、予算計画、戦略的技術提案を含みます。
              </p>
            </div>

            {/* Phase-based Structure - Modern Process Cards */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <ServiceProcessCard
                step={1}
                title="技術評価"
                description="現状インフラ評価、ビジネス要件分析、技術ギャップ特定、ROIコスト効果分析により、現状を把握します。"
                index={0}
              />
              <ServiceProcessCard
                step={2}
                title="戦略的計画"
                description="技術ロードマップ策定、予算計画・予測、ベンダー評価・選定、実装タイムライン作成など、将来に向けてプランニングします。"
                index={1}
              />
              <ServiceProcessCard
                step={3}
                title="継続的ガバナンス"
                description="四半期ごとのビジネスレビュー、パフォーマンス監視、継続的最適化、戦略的調整により、長期的な成功を支えます。"
                index={2}
              />
            </div>

            {/* Strategic Planning Visual */}
            <div className="text-center mb-12">
              <img
                src="/images/banners/it-managed-services/board-room.webp"
                alt="戦略的IT計画"
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Bottom Content */}
            <div className="text-center mb-8">
              <p className="text-lg text-[#666666] leading-relaxed max-w-4xl mx-auto">
                当社の戦略的アプローチにより、技術投資がビジネス目標と連動し、長期的な成功へ向けて測定可能な価値をもたらします。
              </p>
            </div>

            {/* Technology Partners Spotlight */}
            <SpotlightLogoCloud />
          </div>
        </div>

        {/* Your IT Partner Section - EireSystems Style */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                  信頼できるITパートナー
                </h2>
                <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                  お客様のビジネスと共に成長する、持続的な技術パートナーシップを構築します。当社のマネージドITサービスはお客様のニーズに合わせて進化し、継続的なサポートと戦略的なガイダンスを長期にわたりご提供します。
                </p>

                {/* Strategic positioning with EireSystems styling */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">予防的なIT管理体制</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">予測可能な月額コストと予算管理</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">エンタープライズレベルの専門知識へのアクセス</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#20B2AA] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-[#2C2C2C] text-lg leading-relaxed">成長に合わせて拡大可能なソリューション</span>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  スタートアップから大手企業まで、今日のデジタル社会でビジネスの成長を支える技術基盤を提供します。
                </p>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="/images/banners/it-managed-services/trusted-partner.webp"
                  alt="ITパートナーシップ＆戦略"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
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
              <MobileFriendlyFAQItem
                question="マネージドITサービスには何が含まれますか？"
                answer="24時間365日ネットワーク監視、無制限ヘルプデスクサポート、予防的保守、セキュリティ管理、バックアップ・災害復旧、戦略的IT計画、必要に応じたオンサイトサポートなど、包括的なサービスをご提供します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="ITの問題への対応時間はどのくらいですか？"
                answer="重大な問題は30分以内、標準のご依頼は4時間以内に解決します。24時間365日のヘルプデスクにより、電話・メール・チャットですぐにご対応いたします。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="バイリンガル対応は可能ですか？"
                answer="はい、英語と日本語でのバイリンガルサポートを提供し、貴社の組織内のすべての関係者との円滑なコミュニケーションを実現します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="既存のITインフラにも対応できますか？"
                answer="もちろんです。現状のインフラを評価した上で、完全管理または現在のITチームを補完する形でシームレスにサービスを統合します。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="マネージドITサービスによる一般的なコスト削減効果はどの程度ですか？"
                answer="多くのお客様が、予防的な保守、ダウンタイムの削減、予測可能な月額料金、緊急修理コストの削減により、ITコストを30%〜50%削減しています。"
                open={openFaq}
                setOpen={setOpenFaq}
              />
              <MobileFriendlyFAQItem
                question="データセキュリティとコンプライアンスはどのように確保していますか？"
                answer="エンドポイント保護、ネットワーク監視、定期的なセキュリティ評価、ISO 27001やGDPRなどの基準に対応したコンプライアンス管理を含む多層的なセキュリティ対策を実施しています。"
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
              IT運営を変革する準備はできていますか？
            </h2>

            <Link
              href="/ja/contact"
              className="inline-flex items-center px-12 py-4 bg-white text-[#20B2AA] font-bold text-xl rounded-sm hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              コンサルテーションを予約
              <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Enhanced JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "ITマネージドサービス",
                "alternateName": "IT Managed Services",
                "serviceType": "マネージドITサービスとサポート",
                "provider": {
                  "@type": "Organization",
                  "name": "AKRIN株式会社",
                  "url": "https://akrin.jp",
                  "logo": "https://akrin.jp/akrin-logo.svg",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+81-3-6821-1223",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Japanese"]
                  }
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Japan"
                },
                "availableLanguage": ["en", "ja"],
                "url": "https://akrin.jp/ja/services/it-managed-services",
                "description": "24時間365日の監視、無制限ヘルプデスクサポート、戦略的IT計画を含む包括的なITサポートおよび管理サービス。",
                "offers": {
                  "@type": "Offer",
                  "description": "24時間365日ITモニタリング、無制限ヘルプデスクサポート、プロアクティブメンテナンス",
                  "availability": "https://schema.org/InStock"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "ITマネージドサービス",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "24時間365日ネットワーク監視"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "無制限ヘルプデスクサポート"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "インフラストラクチャ管理"
                      }
                    }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "ホーム",
                    "item": "https://akrin.jp/ja"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "サービス",
                    "item": "https://akrin.jp/ja/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "ITマネージドサービス",
                    "item": "https://akrin.jp/ja/services/it-managed-services"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "マネージドITサービスには何が含まれますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "包括的なマネージドITサービスには、24時間365日のネットワーク監視、無制限のヘルプデスクサポート、プロアクティブメンテナンス、セキュリティ管理、バックアップと災害復旧、戦略的IT計画、必要に応じたオンサイトサポートが含まれます。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "IT問題にどのくらい迅速に対応しますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "重要な問題は30分以内に解決され、標準的なリクエストは4時間以内に対応します。24時間365日のヘルプデスクが電話、メール、チャットサポートを通じて即座にサポートを提供します。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "バイリンガルサポートを提供していますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "はい、私たちのチームは英語と日本語での完全なバイリンガルサポートを提供し、組織内のすべての関係者との明確なコミュニケーションを確保します。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "既存のITインフラストラクチャと連携できますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "もちろんです。現在のインフラストラクチャを評価し、完全な管理が必要か、既存のITチームと並行した補完的なサポートが必要かに関わらず、サービスをシームレスに統合します。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "マネージドITサービスによる一般的なコスト削減効果は？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ほとんどのクライアントは、プロアクティブメンテナンス、ダウンタイムの削減、予測可能な月額料金、緊急修理コストの削減により、ITコストの30-50%削減を実現しています。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "データセキュリティとコンプライアンスをどのように確保しますか？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "エンドポイント保護、ネットワーク監視、定期的なセキュリティ評価、ISO 27001やGDPRなどの基準に対するコンプライアンス管理を含む多層セキュリティを実装しています。"
                    }
                  }
                ]
              }
            ])
          }}
        />
      </div>
    </div>
    </>
  )
}