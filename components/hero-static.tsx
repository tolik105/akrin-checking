import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroVideoBackground } from "./hero-video-background"

interface HeroStaticProps {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
}

export function HeroStatic({ title, subtitle, ctaLabel, ctaHref }: HeroStaticProps) {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white min-h-[100dvh] sm:min-h-[95vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-24 md:pt-28"
      style={{ contain: "layout style paint" }}
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Mobile: Static image only - no video download */}
        <div className="w-full h-full relative block md:hidden">
          <Image
            src="/images/mobile-background/mobile-background.avif"
            alt="AKRIN Technology Background"
            fill
            className="object-cover"
            priority
            quality={60}
            sizes="100vw"
            style={{ filter: "brightness(0.6)" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Tablet/Desktop: Video background - client component to prevent mobile download */}
        <HeroVideoBackground />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-center">
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <h1
            className="font-black text-white leading-[0.9] sm:leading-[0.95] tracking-tight text-center"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(2.5rem, 10vw, 6rem)",
              lineHeight: "clamp(0.9, 0.95, 1.0)",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </h1>
        </div>
        <p
          className="text-gray-200 leading-relaxed max-w-2xl text-center font-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "clamp(1.125rem, 3.5vw, 1.75rem)",
            lineHeight: "clamp(1.5, 1.6, 1.7)",
            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            letterSpacing: "-0.011em",
          }}
        >
          {subtitle}
        </p>
        <div className="mt-2 sm:mt-4 md:mt-6 flex justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements (static) */}
      <div className="absolute inset-0 w-full h-full z-5 pointer-events-none overflow-hidden">
        {/* Mobile decorative elements */}
        <div className="block md:hidden absolute bottom-0 right-0 w-full h-2/5 z-5">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tl from-pink-400/15 to-[hsl(var(--primary))]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tl from-teal-400/15 to-blue-400/15 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Tablet decorative elements */}
        <div className="hidden md:block lg:hidden absolute top-1/4 right-0 w-1/2 h-3/4 z-5">
          <div className="relative w-full h-full">
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-pink-400/10 to-[hsl(var(--primary))]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-16 w-64 h-64 bg-gradient-to-tl from-teal-400/10 to-blue-400/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
