import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <Card className="h-full border-0 shadow-lg bg-white dark:bg-gray-900">
      <CardContent className="p-8">
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <svg className="h-8 w-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {content}
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}