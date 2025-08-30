import { generatePageMetadata } from "@/lib/metadata-helpers"
import ITADPageClient from "./client"

export const metadata = generatePageMetadata({
  title: "ITAD Japan, APAC & US | Secure Data Destruction | AKRIN",
  description:
    "Enterprise-grade IT asset disposition: on-site/off-site data destruction, remarketing, compliant recycling, full chain of custody—Japan, APAC & US.",
  path: "/services/itad-japan-apac-us",
  image: "/og-image.png"
})

export default function ITADPage() {
  return <ITADPageClient />
}




