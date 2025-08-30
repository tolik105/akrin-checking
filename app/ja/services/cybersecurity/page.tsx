import { generatePageMetadata } from "@/lib/metadata-helpers"
import CybersecurityJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'サイバーセキュリティサービス＆マネージドセキュリティ運用 | AKRIN',
  description: 'セキュリティ監査、継続監視、SOC、インシデント対応。AKRINが日本でプロアクティブなサイバーセキュリティによりビジネスを保護。',
  keywords: ['サイバーセキュリティ 日本', 'セキュリティオペレーションセンター', 'SOCサービス', 'インシデント対応', 'セキュリティ監視', 'SIEM XDR', 'ISO 27001', 'セキュリティ監査 日本'],
  path: '/ja/services/cybersecurity'
})

export default function CybersecurityJaPage() {
  return <CybersecurityJaClient />
}