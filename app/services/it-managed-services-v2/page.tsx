import { getServiceMetadata } from "@/lib/service-metadata"
import ITManagedServicesClient from "./client"

export const metadata = getServiceMetadata('it-managed-services')

export default function ITManagedServicesPage() {
  return <ITManagedServicesClient />
}
