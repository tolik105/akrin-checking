import { generatePageMetadata } from "@/lib/metadata-helpers"
import WifiDesignClient from "./client"

export const metadata = generatePageMetadata({
  title: 'Enterprise Wi‑Fi Design & Deployment Services | AKRIN',
  description: 'Scalable wireless network design for offices, warehouses, and campuses. Predictive modeling, AP placement, and turnkey deployment.',
  keywords: ['Enterprise Wi-Fi design Japan', 'wireless network deployment', 'predictive WiFi modeling', 'AP placement', 'enterprise wireless', 'WiFi architecture', 'turnkey WiFi deployment', 'wireless infrastructure'],
  path: '/services/wifi-design'
})

export default function WifiDesignPage() {
  return <WifiDesignClient />
}