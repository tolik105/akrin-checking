import { generatePageMetadata } from "@/lib/metadata-helpers"
import ITConsultingProjectManagementJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'ITコンサルティング＆プロジェクトマネジメント | AKRIN Japan',
  description: '戦略策定、PMO、実行支援まで。AKRINは日本で複雑なITプロジェクトをゼロダウンタイムで計画・推進・完遂します。',
  keywords: ['ITコンサルティング', 'プロジェクトマネジメント', 'PMOサービス', 'IT戦略', 'テクノロジーコンサルティング', 'プロジェクト実行', 'ITガバナンス', 'デジタルトランスフォーメーション'],
  path: '/ja/services/it-consulting-project-management'
})

export default function ITConsultingProjectManagementJaPage() {
  return <ITConsultingProjectManagementJaClient />
}
