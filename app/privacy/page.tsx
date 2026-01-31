import { generatePageMetadata } from "@/lib/metadata-helpers"
import PrivacyClient from "./privacy-client"

export const metadata = generatePageMetadata({
  title: 'Privacy Policy | AKRIN IT Solutions',
  description: 'Privacy Policy for AKRIN IT Solutions. Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'AKRIN privacy', 'data protection', 'personal information Japan'],
  path: '/privacy'
})

export default function PrivacyPage() {
  return <PrivacyClient />
}
