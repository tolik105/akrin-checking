import { generatePageMetadata } from "@/lib/metadata-helpers"
import WifiAssessmentClient from "./client"

export const metadata = generatePageMetadata({
  title: 'Wi‑Fi Site Survey & Performance Optimization | AKRIN Japan',
  description: 'Ekahau-certified Wi‑Fi assessments, spectrum analysis, and remediation plans. Eliminate dead zones and slow speeds across your offices.',
  keywords: ['Wi-Fi site survey Japan', 'wireless optimization', 'Ekahau certified', 'Wi-Fi assessment', 'spectrum analysis', 'wireless network optimization', 'dead zone elimination', 'Wi-Fi performance'],
  path: '/services/wifi-assessment'
})

export default function WifiAssessmentPage() {
  return <WifiAssessmentClient />
}