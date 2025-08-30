import { generatePageMetadata } from "@/lib/metadata-helpers"
import WifiAssessmentJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'Wi‑Fiサイトサーベイ＆パフォーマンス最適化 | AKRIN 日本',
  description: 'Ekahau認定Wi‑Fi評価、スペクトラム分析、修正計画。オフィス全体でデッドゾーンと低速通信を排除。',
  keywords: ['Wi-Fiサイトサーベイ 日本', 'ワイヤレス評価', 'Ekahau認定', 'スペクトラム分析', 'Wi-Fi最適化', 'ワイヤレスネットワーク設計', 'ヒートマップ分析', 'Wi-Fiトラブルシューティング'],
  path: '/ja/services/wifi-assessment'
})

export default function WifiAssessmentJaPage() {
  return <WifiAssessmentJaClient />
}