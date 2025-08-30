import { generatePageMetadata } from "@/lib/metadata-helpers"
import NetworkPentestJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'ネットワーク侵入テスト＆エシカルハッキング | AKRIN 日本',
  description: '攻撃者が発見する前に脆弱性を特定。AKRINの認定テスターが実用的なペンテストレポートと修正ガイダンスを提供。',
  keywords: ['侵入テスト 日本', 'ペンテスト', 'エシカルハッキング', '脆弱性評価', 'OSCP認定', 'セキュリティテスト', 'ネットワークセキュリティ', 'OWASPテスト'],
  path: '/ja/services/network-penetration-testing'
})

export default function NetworkPentestJaPage() {
  return <NetworkPentestJaClient />
}