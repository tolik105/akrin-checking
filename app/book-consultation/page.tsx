import BookConsultationClient from "./book-consultation-client"
import { generatePageMetadata } from '@/lib/metadata-helpers'

export const metadata = generatePageMetadata({
  title: "Book a Consultation | Akrin IT Solutions",
  description: "Schedule a free consultation with our IT experts to discuss your IT needs.",
  path: '/book-consultation'
})

export default function BookConsultationPage() {
  return <BookConsultationClient />
}