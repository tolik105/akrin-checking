import { generatePageMetadata } from "@/lib/metadata-helpers"

export const metadata = generatePageMetadata({
  title: '利用規約 | AKRIN株式会社',
  description: 'AKRIN株式会社のサービス利用規約。当社のITサービスをご利用いただく際の条件と規約をご確認ください。',
  keywords: [
    '利用規約',
    'サービス規約',
    'AKRIN 規約',
    'ITサービス 利用条件',
    '契約条件',
    'サービス利用'
  ],
  path: '/ja/terms'
})

export default function JapaneseTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">利用規約</h1>
          
          <div className="text-sm text-gray-600 mb-8">
            最終更新日: 2024年1月1日
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. はじめに</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本利用規約（以下「本規約」）は、AKRIN株式会社（以下「当社」）が提供するITサービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただく際は、本規約に同意いただいたものとみなします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. サービスの内容</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は以下のITサービスを提供いたします：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>マネージドITサービス</li>
              <li>サイバーセキュリティソリューション</li>
              <li>クラウドインフラストラクチャサービス</li>
              <li>ITコンサルティング</li>
              <li>ネットワーク侵入テスト</li>
              <li>その他関連するITサービス</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 利用者の義務</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              利用者は以下の義務を負います：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>本規約および関連法令を遵守すること</li>
              <li>正確な情報を提供すること</li>
              <li>サービス利用料金を期日までに支払うこと</li>
              <li>当社の知的財産権を尊重すること</li>
              <li>第三者の権利を侵害しないこと</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 禁止事項</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              利用者は以下の行為を行ってはなりません：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>法令に違反する行為</li>
              <li>当社または第三者に損害を与える行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>不正アクセスやハッキング行為</li>
              <li>ウイルスやマルウェアの配布</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 料金と支払い</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              サービス料金は別途定める料金表に従います。支払いは請求書発行後30日以内に行っていただきます。支払いが遅延した場合、遅延損害金が発生する場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 免責事項</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、天災、戦争、テロ、政府の行為、ネットワーク障害など、当社の責に帰すべからざる事由により生じた損害については責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 契約の解除</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、利用者が本規約に違反した場合、事前の通知なくサービス提供を停止または契約を解除することができます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 準拠法と管轄</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本規約は日本法に準拠し、本規約に関する紛争については東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本規約に関するご質問は、以下までお問い合わせください：
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>AKRIN株式会社</strong><br />
                メール: support@akrin.jp<br />
                電話: 03-6821-1223<br />
                住所: 〒107-0062 東京都港区南青山2-4-15 4F
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
