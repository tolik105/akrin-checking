import { generatePageMetadata } from "@/lib/metadata-helpers"
import ITManagedServicesJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'マネージドITサービス＆24/7サポート | AKRIN 日本MSP',
  description: '24/7監視と無制限ヘルプデスク、オンサイト対応。ITコストを30～50％削減し、稼働率99.9％を実現する日本発の信頼できるMSP。',
  keywords: ['マネージドITサービス', '24/7サポート', 'MSP 日本', 'IT監視', 'ヘルプデスク', 'プロアクティブIT管理', 'ITコスト削減', 'バイリンガルITサポート', 'ITインフラ管理', 'セキュリティ監視', 'クラウド管理', 'ネットワーク監視'],
  path: '/ja/services/it-managed-services',
  alternates: {
    canonical: 'https://akrin.jp/ja/services/it-managed-services',
    languages: {
      'en': 'https://akrin.jp/services/it-managed-services',
      'ja': 'https://akrin.jp/ja/services/it-managed-services',
      'x-default': 'https://akrin.jp/services/it-managed-services'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
})

export default function ITManagedServicesJaPage() {
  return <ITManagedServicesJaClient />
}
