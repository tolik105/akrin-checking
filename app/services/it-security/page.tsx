import { getServiceMetadata } from "@/lib/service-metadata"
import ITSecurityClient from "./client"

export const metadata = getServiceMetadata('it-security')

export default function ITSecurityPage() {
  return <ITSecurityClient />
}