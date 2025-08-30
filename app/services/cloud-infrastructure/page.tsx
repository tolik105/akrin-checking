import { getServiceMetadata } from "@/lib/service-metadata"
import CloudInfrastructureClient from "./client"

export const metadata = getServiceMetadata('cloud-infrastructure')

export default function CloudInfrastructurePage() {
  return <CloudInfrastructureClient />
}