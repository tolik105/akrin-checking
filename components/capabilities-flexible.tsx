'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Cloud, Headphones, Users, Settings, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const capabilities = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Managed IT Services",
    description: "Comprehensive IT management with 24/7 monitoring, proactive maintenance, and expert support to keep your business running smoothly.",
    features: ["24/7 Monitoring", "Proactive Support", "Issue Prevention", "Expert Team"],
    link: "/services/it-managed-services",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with seamless migration services, optimization, and comprehensive security for modern businesses.",
    features: ["Cloud Migration", "Auto Scaling", "Security First", "Cost Optimization"],
    link: "/services/cloud-infrastructure",
    color: "from-[hsl(var(--primary))] to-indigo-500",
    bgColor: "bg-[hsl(var(--primary))]/10",
    textColor: "text-[hsl(var(--primary))]"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "IT Consulting",
    description: "Strategic IT guidance and project management that aligns technology with business goals for sustainable growth.",
    features: ["Strategic Planning", "Project Management", "Risk Assessment", "Business Alignment"],
    link: "/services/it-consulting-project-management",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Advanced threat protection, security audits, and compliance management to safeguard your digital assets.",
    features: ["Threat Detection", "Security Audits", "Compliance", "24/7 Protection"],
    link: "/services/cybersecurity",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600"
  }
]

export function CapabilitiesFlexible() {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
        <div className="w-12 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 leading-tight max-w-4xl mx-auto">
            Capabilities that define the future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We combine deep technical expertise with industry-leading partnerships to deliver
            transformative solutions at enterprise scale.
          </p>
        </motion.div>

        {/* Flexible Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-gray-300">
                {/* Card Header with Icon */}
                <div className={`${capability.bgColor} p-6 sm:p-8`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${capability.textColor} p-3 rounded-xl bg-white shadow-sm`}>
                      {capability.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                {/* Card Body with Features */}
                <div className="p-6 sm:p-8">
                  <ul className="space-y-3 mb-6">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={capability.link}
                   className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] font-semibold text-sm sm:text-base transition-colors group-hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Width Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center mb-4">
             <Users className="w-6 h-6 text-[hsl(var(--primary))] mr-3" />
             <span className="text-sm font-semibold text-[hsl(var(--primary))] uppercase tracking-wider">
                  Enterprise Scale
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
                Trusted by industry leaders
             <span className="block text-[hsl(var(--primary))] font-semibold">worldwide</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                From startups to Fortune 500 companies, we deliver scalable IT solutions that grow with your business. 
                Our proven methodology ensures successful outcomes every time.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))]">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))]">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center lg:text-left col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-[hsl(var(--primary))]">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base"
                  asChild
                >
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base"
                  asChild
                >
                  <Link href="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[hsl(var(--primary))]/10 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-16 h-16 bg-[hsl(var(--primary))]/60 rounded-full"></div>
                  <div className="absolute top-16 right-8 w-8 h-8 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-pink-400 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-cyan-400 rounded-full"></div>
                </div>
                
                {/* Center Icon */}
                <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg">
                <Headphones className="w-16 h-16 text-[hsl(var(--primary))]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}