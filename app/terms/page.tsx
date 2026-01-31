import { generatePageMetadata } from "@/lib/metadata-helpers"
import TermsClient from "./terms-client"

export const metadata = generatePageMetadata({
  title: 'Terms of Service | AKRIN IT Solutions',
  description: 'Terms of Service for AKRIN IT Solutions. Read about our service terms, user responsibilities, payment terms, and more.',
  keywords: ['terms of service', 'AKRIN terms', 'IT services agreement', 'service terms Japan'],
  path: '/terms'
})

export default function TermsPage() {
  return <TermsClient />
}
