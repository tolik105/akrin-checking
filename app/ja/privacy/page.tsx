import { generatePageMetadata } from "@/lib/metadata-helpers"

export const metadata = generatePageMetadata({
  title: 'プライバシーポリシー | AKRIN株式会社',
  description: 'AKRIN株式会社のプライバシーポリシー。個人情報の収集、使用、保護に関する当社の方針をご確認ください。',
  keywords: [
    'プライバシーポリシー',
    '個人情報保護',
    'データ保護',
    'AKRIN プライバシー',
    '個人情報取扱い',
    'データセキュリティ'
  ],
  path: '/ja/privacy'
})

export default function JapanesePrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
          
          <div className="text-sm text-gray-600 mb-8">
            最終更新日: 2024年1月1日
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. はじめに</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AKRIN株式会社（以下「当社」）は、お客様の個人情報の保護を重要視しており、個人情報保護法およびその他の関連法令を遵守し、適切な個人情報の取扱いに努めます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 収集する情報</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は以下の情報を収集する場合があります：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>お名前、メールアドレス、電話番号などの連絡先情報</li>
              <li>会社名、部署、役職などの業務関連情報</li>
              <li>サービス利用に関する情報</li>
              <li>ウェブサイトの利用状況に関する情報</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 情報の利用目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              収集した個人情報は以下の目的で利用いたします：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>サービスの提供および顧客サポート</li>
              <li>お問い合わせへの対応</li>
              <li>サービスの改善および新サービスの開発</li>
              <li>重要なお知らせの配信</li>
              <li>法的義務の履行</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 情報の共有</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、法的要求がある場合、またはお客様の同意がある場合を除き、第三者に個人情報を開示することはありません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. セキュリティ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、個人情報を不正アクセス、紛失、破壊、改ざん、漏洩から保護するため、適切な技術的および組織的セキュリティ対策を実施しています。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. お客様の権利</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              お客様は、ご自身の個人情報について以下の権利を有します：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>個人情報の開示請求</li>
              <li>個人情報の訂正・削除請求</li>
              <li>個人情報の利用停止請求</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              プライバシーポリシーに関するご質問やご意見がございましたら、以下までお問い合わせください：
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>AKRIN株式会社</strong><br />
                メール: support@akrin.jp<br />
                電話: 03-6821-1223<br />
                住所: 〒107-0062 東京都港区南青山2-4-15
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. ポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、必要に応じてこのプライバシーポリシーを更新する場合があります。重要な変更がある場合は、ウェブサイト上でお知らせいたします。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
