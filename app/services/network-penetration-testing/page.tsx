import { getServiceMetadata } from "@/lib/service-metadata"
import NetworkPenetrationTestingClient from "./client"

export const metadata = getServiceMetadata('network-penetration-testing')

export default function NetworkPenetrationTestingPage() {
  return <NetworkPenetrationTestingClient />
}