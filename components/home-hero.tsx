"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HomeHero() {
  return (
    <section className="relative bg-white overflow-hidden" aria-labelledby="home-hero-heading">
      <div className="h-[500px] sm:h-[550px] lg:h-[600px] flex items-center">
        {/* Right-side diagonal image like Managed Services */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
          <div className="relative h-full overflow-hidden">
            <img
              src="/images/banners/it-managed-services/banner.avif"
              alt="Technology Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <polygon points="0,0 25,0 0,100" fill="white" />
            </svg>
          </div>
        </div>

        {/* Left content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:w-1/2">
              <motion.h1 
                id="home-hero-heading" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                <span className="text-pink-600">Rewiring</span><br />
                enterprise <span className="text-pink-600">IT</span><br />
                with <span className="text-pink-600">AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
              >
                Expert managed services, cybersecurity, and 24/7 support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 w-full"
              >
                <Button
                  size="lg"
                  className="bg-pink-600 text-white hover:bg-pink-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg transition-all duration-300 hover:shadow-xl w-full sm:w-auto"
                  asChild
                >
                  <Link href="/services">Explore services</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 bg-white text-teal-600 hover:bg-teal-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full transition-all duration-300 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">Request consultation</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



