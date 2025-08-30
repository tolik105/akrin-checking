"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProfessionalFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="/akrin-logo.svg"
                alt="AKRIN IT Solutions"
                width={160}
                height={50}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading IT solutions provider in Japan, delivering expert managed services, 
              cybersecurity, and cloud infrastructure solutions.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="border-[hsl(var(--primary))]/50 text-[hsl(var(--primary))]/60">
                ISO 27001
              </Badge>
              <Badge variant="outline" className="border-green-400 text-green-300">
                SOC 2
              </Badge>
              <Badge variant="outline" className="border-blue-400 text-blue-300">
                ITIL Certified
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="p-2 h-auto text-gray-400 hover:text-white hover:bg-[hsl(var(--primary))]">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 h-auto text-gray-400 hover:text-white hover:bg-blue-600">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 h-auto text-gray-400 hover:text-white hover:bg-blue-700">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/it-managed-services" className="text-gray-300 hover:text-white transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/it-consulting-project-management" className="text-gray-300 hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/network-penetration-testing" className="text-gray-300 hover:text-white transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services/wifi-design" className="text-gray-300 hover:text-white transition-colors">
                  Network Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div className="text-gray-300">
                  <div>2-4-15 Minamiaoyama 4F</div>
                  <div>Minato City, Tokyo 107-0062</div>
                  <div>Japan</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+81-3-6821-1223" className="text-gray-300 hover:text-white transition-colors">
                  +81 (0) 3-6821-1223
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:support@akrin.jp" className="text-gray-300 hover:text-white transition-colors">
                  support@akrin.jp
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 AKRIN株式会社. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}