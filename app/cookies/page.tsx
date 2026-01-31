import { generatePageMetadata } from "@/lib/metadata-helpers"
import CookiesClient from "./cookies-client"

export const metadata = generatePageMetadata({
  title: 'Cookie Policy | AKRIN IT Solutions',
  description: 'Cookie Policy for AKRIN IT Solutions. Learn about the cookies we use and how to manage your preferences.',
  keywords: ['cookie policy', 'AKRIN cookies', 'website cookies', 'cookie management Japan'],
  path: '/cookies'
})

export default function CookiesPage() {
  return <CookiesClient />
}
