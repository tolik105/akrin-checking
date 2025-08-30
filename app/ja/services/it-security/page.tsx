import { generatePageMetadata } from "@/lib/metadata-helpers"
import ITSecurityJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'ITセキュリティサービス：エンドポイント、メール＆データ保護 | AKRIN',
  description: 'AKRINの階層化ITセキュリティでエンドポイント、メール、データを保護。EDR、M365セキュリティ、バックアップ、ポリシー執行。',
  keywords: ['ITセキュリティ 日本', 'エンドポイント保護', 'EDRサービス', 'メールセキュリティ', 'M365セキュリティ', 'バックアップ災害復旧', 'セキュリティポリシー', 'データ保護 日本'],
  path: '/ja/services/it-security'
})

export default function ITSecurityJaPage() {
  return <ITSecurityJaClient />
}