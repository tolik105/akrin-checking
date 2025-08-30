import { generatePageMetadata } from "@/lib/metadata-helpers"
import ITConsultingProjectManagementClient from "./client"

export const metadata = generatePageMetadata({
  title: 'IT Consulting & Project Management | AKRIN Japan',
  description: 'Strategy, PMO, and delivery for complex IT initiatives. AKRIN plans, budgets, and executes technology projects in Japan with zero day downtime.',
  keywords: ['IT consulting Japan', 'project management', 'PMO services', 'IT strategy', 'technology consulting', 'project delivery', 'IT governance', 'digital transformation'],
  path: '/services/it-consulting-project-management'
})

export default function ITConsultingProjectManagementPage() {
  return <ITConsultingProjectManagementClient />
}
