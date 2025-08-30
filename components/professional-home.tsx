"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Shield, Cloud, Zap } from "lucide-react"
import Image from "next/image"

export function ProfessionalHome() {
  const { t } = useTranslation('common')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
  <section className="relative bg-gradient-to-br from-slate-900 via-[hsl(var(--primary))]/30 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--primary))]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <Badge className="mb-6 bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))]/70 border-[hsl(var(--primary))]/30">
                🚀 Leading IT Solutions Provider in Japan
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-pink-400">
                  Digital Future
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                Expert managed services, cybersecurity solutions, and cloud infrastructure 
                that empower businesses across Japan and globally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              <Button size="lg" variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]/70 hover:bg-[hsl(var(--primary))]/10 px-8 py-4 text-lg rounded-xl">
                  View Our Services
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>500+ Clients Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>ISO Certified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From managed services to cybersecurity, we provide end-to-end technology 
              solutions that drive growth and ensure business continuity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Cybersecurity & IT Security",
                description: "Advanced threat protection, security audits, and compliance management to safeguard your digital assets.",
                image: "/api/placeholder/400/240",
                badge: "Most Popular",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Infrastructure",
                description: "Scalable cloud solutions, migration services, and 24/7 monitoring for optimal performance.",
                image: "/api/placeholder/400/240",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Managed IT Services",
                description: "Proactive IT support, system maintenance, and strategic technology planning for your business.",
                image: "/api/placeholder/400/240",
        color: "from-[hsl(var(--primary))] to-indigo-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group overflow-hidden border-0 shadow-lg">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200" />
                    {service.badge && (
                      <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                        {service.badge}
                      </Badge>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
            <Button variant="ghost" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] p-0 h-auto font-semibold">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
  <section className="py-24 bg-gradient-to-r from-[hsl(var(--primary))]/30 to-indigo-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Served", icon: <Users className="w-8 h-8" /> },
              { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "24/7", label: "Support Available", icon: <Shield className="w-8 h-8" /> },
              { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-white"
              >
          <div className="flex justify-center mb-4 text-[hsl(var(--primary))]/50">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
          <div className="text-[hsl(var(--primary))]/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses transform their IT infrastructure 
              and achieve remarkable results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-green-100 text-green-800">Case Study</Badge>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Financial Services Firm Achieves 99.99% Uptime
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                How our managed services and proactive monitoring helped a leading 
                financial institution eliminate downtime and improve operational efficiency by 40%.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Reduced system downtime by 99%</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Improved security posture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">40% increase in operational efficiency</span>
                </div>
              </div>
              
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
          <div className="aspect-video bg-gradient-to-br from-[hsl(var(--primary))]/10 to-blue-100 rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/20 to-blue-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-[hsl(var(--primary))]/30">📊</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-24 bg-gradient-to-r from-[hsl(var(--primary))] to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT?
            </h2>
          <p className="text-xl text-[hsl(var(--primary))]/20 mb-12 max-w-2xl mx-auto">
              Get a free consultation and discover how our expert team can optimize 
              your technology infrastructure for growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                Download Service Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}