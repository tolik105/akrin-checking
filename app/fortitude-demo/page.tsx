import FortitudeWebsite from '@/components/FortitudeWebsite';
import { generatePageMetadata } from '@/lib/metadata-helpers'

export default function FortitudeDemoPage() {
  return <FortitudeWebsite />;
}

export const metadata = generatePageMetadata({
  title: 'Fortitude Website Demo - Figma to React',
  description: 'A React demo of the Fortitude NICSA design using Tailwind CSS.',
  path: '/fortitude-demo'
})