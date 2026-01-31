"use client"

import Link from "next/link"

import { HeroDiagonal } from "@/components/hero-diagonal"

export default function ITADJaClient() {
  return (
    <div className="bg-white font-sans">
      {/* Breadcrumb removed */}

      {/* 標準化ヒーロー（HeroDiagonal） */}
      <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
        <HeroDiagonal
          title={<>
            日本・APAC・米国向け<br />
            IT資産処分（ITAD）
          </>}
          breadcrumbs={[{ label: 'Services', href: '/ja/services' }, { label: 'ITAD Japan/APAC/US' }]}
          imageSrc="/images/banners/itad/itad.avif"
          imageAlt="ITAD ヒーロー背景"
        />

      </section>

      <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">ITADでAKRINを選ぶ理由</h2>
          <ul className="grid md:grid-cols-2 gap-4 sm:gap-6 text-[#666666]">
            <li>セキュリティ第一：NIST 800-88のガイダンス、ISO27001相当の管理に整合。</li>
            <li>完全なチェーン・オブ・カストディ：集荷→輸送→処理→証明書をシリアルで追跡。</li>
            <li>グローバル対応・ローカル知見：日本/APAC/米国の多言語チームと現地パートナー。</li>
            <li>価値回収：対象資産を監査・グレーディング・再販して費用を相殺。</li>
            <li>透明なレポート：オンラインダッシュボード、COI、破壊/リサイクル証明書。</li>
            <li>週末切替や高セキュリティ帯同も可能。変更ウィンドウに合わせて実施。</li>
          </ul>
        </div>
      </section>

      {/* 以下、英語版と同じ構成・余白。画像は後で差し替えられるよう空枠 */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">提供内容（エンドツーエンド）</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">セキュアな撤去・物流</h3>
              <p className="text-[#666666] mt-2">現地調査、ラベリング、シリアル/資産タグの取得。改ざん防止梱包、封印容器、GPS追跡輸送、受け渡し毎の署名。</p>
              <h3 className="mt-6 text-xl font-semibold text-[#2C2C2C]">データ破壊（現地/施設）</h3>
              <ul className="mt-2 text-[#666666] list-disc ml-6 space-y-1">
                <li>NIST 800-88準拠の暗号消去/ソフトウェア消去</li>
                <li>HDD/SSDの消磁・物理破砕（現地またはセキュア施設）</li>
                <li>媒体シリアル記載の証明書で検証</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">資産監査・リマーケティング</h3>
              <p className="text-[#666666] mt-2">対象ラップトップ、デスクトップ、サーバー、ドライブ、ネットワーク機器を評価・整備・再販。データ消去、外観修復、販売チャネルまで一括管理—収益はお客様へ還元。</p>
              <h3 className="mt-6 text-xl font-semibold text-[#2C2C2C]">適正リサイクル（E-waste）</h3>
              <p className="text-[#666666] mt-2">再販不可品は認証リサイクルパートナー（R2v3/e‑Stewards整合等）へ。下流文書をご提供。</p>
              <h3 className="mt-6 text-xl font-semibold text-[#2C2C2C]">レポート＆証明書</h3>
              <p className="text-[#666666] mt-2">品目別在庫、必要に応じた写真、カストディログ、CODD（データ破壊）/COR（リサイクル）。CSV/PDFでエクスポート。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">対応地域</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">日本</h3>
              <p className="text-[#666666] mt-2">東京・大阪・名古屋ほか全国。日英レポート、ビル管理・共用部調整に対応。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">APAC</h3>
              <p className="text-[#666666] mt-2">シンガポール、香港、ソウル、シドニーほかパートナーネットワークで多国展開に最適。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2C2C2C]">米国</h3>
              <p className="text-[#666666] mt-2">データセンター撤去や大規模オフィス統合に対応する全国チーム。</p>
            </div>
          </div>
          <p className="text-[#666666] mt-6">記載のない地域もご相談ください。案件規模に応じて新規ラインを開設します。</p>
        </div>
      </section>

      {/* 画像エリア（空枠） */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-64 bg-gray-100 rounded-lg border border-gray-200" aria-hidden="true" />
            <div className="w-full h-64 bg-gray-100 rounded-lg border border-gray-200" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">進め方</h2>
          <ol className="grid md:grid-cols-3 gap-6 list-decimal ml-6 text-[#666666]">
            <li><span className="block font-semibold text-[#2C2C2C]">スコープ策定</span> 資産リスト、タイムライン、準拠要件、現地/施設破壊の選定。</li>
            <li><span className="block font-semibold text-[#2C2C2C]">回収・処理</span> シリアル追跡のカストディ、破壊またはリマーケティングの流れ。</li>
            <li><span className="block font-semibold text-[#2C2C2C]">レポート・精算</span> 証明書、監査ログ、再販収益、リサイクル集計。</li>
          </ol>
        </div>
      </section>

      <section className="bg-[#20B2AA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">安心して撤去を進めませんか？</h2>
          <p className="text-white/90 mb-6">日本・APAC・米国に最適化したプランをご提案します。</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/ja/contact?service=itad" className="inline-flex items-center px-8 py-3 bg-white text-[#20B2AA] font-semibold rounded-md hover:bg-gray-100 transition-colors">ITADプロジェクトを開始</Link>
            <Link href="/ja/contact-form" className="inline-flex items-center px-8 py-3 border border-white/80 text-white font-semibold rounded-md hover:bg-white/10 transition-colors">質問する</Link>
          </div>
        </div>
      </section>
    </div>
  )
}


