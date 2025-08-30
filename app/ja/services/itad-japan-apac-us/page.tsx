import { generatePageMetadata } from "@/lib/metadata-helpers"
import ITADJaClient from "./client"

export const metadata = generatePageMetadata({
  title: "ITAD 日本・APAC・米国 | 安全なデータ破壊 | AKRIN",
  description:
    "エンタープライズ向けIT資産処分: 現地/施設でのデータ破壊、リマーケティング、適正リサイクル、完全なチェーン・オブ・カストディ—日本・APAC・米国。",
  path: "/ja/services/itad-japan-apac-us",
  image: "/og-image.png"
})

export default function ITADJaPage() {
  return <ITADJaClient />
}




