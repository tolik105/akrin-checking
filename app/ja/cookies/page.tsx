import { generatePageMetadata } from "@/lib/metadata-helpers"

export const metadata = generatePageMetadata({
  title: 'クッキーポリシー | AKRIN株式会社',
  description: 'AKRIN株式会社のクッキーポリシー。当社ウェブサイトでのクッキーの使用方法と管理について説明します。',
  keywords: [
    'クッキーポリシー',
    'Cookie ポリシー',
    'ウェブサイト クッキー',
    'AKRIN クッキー',
    'プライバシー設定',
    'ウェブ追跡'
  ],
  path: '/ja/cookies'
})

export default function JapaneseCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">クッキーポリシー</h1>
          
          <div className="text-sm text-gray-600 mb-8">
            最終更新日: 2024年1月1日
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. クッキーとは</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              クッキーは、ウェブサイトがお客様のコンピューターやモバイルデバイスに保存する小さなテキストファイルです。クッキーにより、ウェブサイトはお客様のデバイスを認識し、設定や好みを記憶することができます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 使用するクッキーの種類</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">必須クッキー</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ウェブサイトの基本機能を提供するために必要なクッキーです。これらのクッキーは無効にすることができません。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">機能性クッキー</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              言語設定やログイン情報など、お客様の設定を記憶するためのクッキーです。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">分析クッキー</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ウェブサイトの使用状況を分析し、サービス改善に役立てるためのクッキーです。Google Analyticsなどのサービスを使用しています。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">マーケティングクッキー</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              お客様の興味に基づいた広告を表示するためのクッキーです。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 使用目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は以下の目的でクッキーを使用します：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>ウェブサイトの基本機能の提供</li>
              <li>ユーザー体験の向上</li>
              <li>言語設定の記憶</li>
              <li>ウェブサイトの使用状況の分析</li>
              <li>セキュリティの確保</li>
              <li>カスタマイズされたコンテンツの提供</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 第三者のクッキー</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社のウェブサイトでは、以下の第三者サービスのクッキーを使用する場合があります：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> ウェブサイトの使用状況分析</li>
              <li><strong>LinkedIn:</strong> ソーシャルメディア統合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. クッキーの管理</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              お客様はブラウザの設定でクッキーを管理することができます：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>クッキーの受け入れを拒否する</li>
              <li>クッキーを削除する</li>
              <li>特定のウェブサイトからのクッキーをブロックする</li>
              <li>クッキーが設定される前に通知を受ける</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              ただし、クッキーを無効にすると、ウェブサイトの一部機能が正常に動作しない場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. ブラウザ別設定方法</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Chrome</h4>
                <p className="text-gray-700">設定 → プライバシーとセキュリティ → Cookieと他のサイトデータ</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Firefox</h4>
                <p className="text-gray-700">設定 → プライバシーとセキュリティ → Cookieとサイトデータ</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Safari</h4>
                <p className="text-gray-700">環境設定 → プライバシー → Cookieとウェブサイトのデータ</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              クッキーポリシーに関するご質問は、以下までお問い合わせください：
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
        </div>
      </div>
    </div>
  )
}
