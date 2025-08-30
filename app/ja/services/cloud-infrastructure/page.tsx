import { generatePageMetadata } from "@/lib/metadata-helpers"
import CloudInfrastructureJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'クラウド移行＆マネージドクラウドサービス | AKRIN 日本',
  description: 'Azure、AWS、GCPへのゼロダウンタイム移行、24/7管理、コスト最適化。AKRINが日本でセキュアでコンプライアント対応のクラウド運用を提供。',
  keywords: ['クラウド移行 日本', 'Azureサービス', 'AWS移行', 'GCPサービス', 'クラウド管理', 'クラウド最適化', 'FinOps', 'クラウドセキュリティ 日本'],
  path: '/ja/services/cloud-infrastructure'
})

export default function CloudInfrastructureJaPage() {
  return <CloudInfrastructureJaClient />
}