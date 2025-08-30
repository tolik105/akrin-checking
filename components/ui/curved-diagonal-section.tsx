"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CurvedDiagonalSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main curved diagonal container */}
      <div className="curved-diagonal-section relative w-full bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-indigo-800 text-white pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(65deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 60px)`,
              backgroundSize: '240px 120px',
              backgroundPosition: '0 0, 60px 60px'
            }}
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Our Solutions
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"></div>
              </div>
              
              <div className="space-y-4 text-[hsl(var(--primary))]/20">
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  From wireless network design and Ekahau surveys to global IT deployments, onsite engineering, and staff augmentation, our services are tailored to optimize performance, enhance security, and drive efficiency.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">
                    Get Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Globe/Network Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Globe container with network effect */}
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Main globe background */}
                <div className="relative aspect-square rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-2xl overflow-hidden">
                  {/* Network grid overlay */}
                  <div className="absolute inset-0 opacity-60">
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                      {/* Longitude lines */}
                      <path d="M200 0 Q200 100 200 200 Q200 300 200 400" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
                      <path d="M100 0 Q150 100 200 200 Q250 300 300 400" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
                      <path d="M300 0 Q250 100 200 200 Q150 300 100 400" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
                      
                      {/* Latitude lines */}
                      <ellipse cx="200" cy="100" rx="150" ry="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
                      <ellipse cx="200" cy="200" rx="180" ry="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
                      <ellipse cx="200" cy="300" rx="150" ry="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
                      
                      {/* Connection points */}
                      <circle cx="120" cy="150" r="3" fill="rgba(255,255,255,0.8)"/>
                      <circle cx="280" cy="180" r="3" fill="rgba(255,255,255,0.8)"/>
                      <circle cx="200" cy="120" r="3" fill="rgba(255,255,255,0.8)"/>
                      <circle cx="160" cy="250" r="3" fill="rgba(255,255,255,0.8)"/>
                      <circle cx="240" cy="280" r="3" fill="rgba(255,255,255,0.8)"/>
                      
                      {/* Animated connection lines */}
                      <g className="animate-pulse">
                        <line x1="120" y1="150" x2="280" y2="180" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                        <line x1="200" y1="120" x2="160" y2="250" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                        <line x1="280" y1="180" x2="240" y2="280" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
                      </g>
                    </svg>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
                </div>
                
                {/* Floating connection indicators */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  )
}
