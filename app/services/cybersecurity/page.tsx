import { getServiceMetadata } from "@/lib/service-metadata"
import CybersecurityClient from "./client"

export const metadata = getServiceMetadata('cybersecurity')

export default function CybersecurityPage() {
  return <CybersecurityClient />
}