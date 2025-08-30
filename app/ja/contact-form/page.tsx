import { generatePageMetadata } from "@/lib/metadata-helpers"
import ContactFormClient from "../../contact-form/contact-form-client"

export const metadata = generatePageMetadata({
  title: 'お問い合わせフォーム | AKRIN株式会社 - ITソリューション',
  description: 'AKRIN株式会社のお問い合わせフォーム。ITサービス、マネージドサポート、サイバーセキュリティ、クラウドソリューションについてお気軽にご相談ください。専門家が迅速に対応いたします。',
  keywords: [
    'AKRIN お問い合わせフォーム',
    'ITサービス 相談',
    'マネージドサービス 問い合わせ',
    'サイバーセキュリティ 相談',
    'クラウド移行 問い合わせ',
    'ITサポート 相談',
    'AKRIN株式会社 フォーム',
    'IT専門家 相談'
  ],
  path: '/ja/contact-form'
})

export default function JapaneseContactFormPage() {
  return <ContactFormClient />
}
