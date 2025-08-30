import { generatePageMetadata } from "@/lib/metadata-helpers"
import WifiDesignJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'エンタープライズWi‑Fi設計＆展開サービス | AKRIN',
  description: 'オフィス、倉庫、キャンパス向けスケーラブル無線ネットワーク設計。予測モデリング、AP配置、ターンキー展開。',
  keywords: ['エンタープライズWi-Fi設計', 'ワイヤレス展開 日本', 'Wi-Fi設置', '予測設計', 'AP配置', '高密度Wi-Fi', 'Meraki Cisco Aruba', 'ワイヤレスインフラ'],
  path: '/ja/services/wifi-design'
})

export default function WifiDesignJaPage() {
  return <WifiDesignJaClient />
}