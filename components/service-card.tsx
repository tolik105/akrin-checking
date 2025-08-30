import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link?: string
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  const card = (
    <Card className="h-full border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-200 cursor-pointer bg-white dark:bg-gray-900">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
  
  if (link) {
    return <Link href={link} className="block h-full">{card}</Link>
  }
  
  return card
}