"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ServicesContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    emailAddress: '',
    phoneNumber: '',
    websiteUrl: '',
    enquiry: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
  <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--primary))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - AKRIN Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Partner With Us
            </h2>
            
            <p className="text-lg sm:text-xl mb-6 text-white/90 leading-relaxed">
              At AKRIN, we are more than just a solutions provider
              — we are a partner in your journey toward greater efficiency,
              performance, and success.
            </p>

            <p className="text-base sm:text-lg mb-6 text-white/80 leading-relaxed">
              Whether you're seeking to enhance your IT operations or expand your service
              offerings, our team is here to help you achieve your goals.
            </p>

            <p className="text-base sm:text-lg mb-8 text-white/80 leading-relaxed">
              Contact us today to discover how we can transform your business with our
              innovative IT solutions.
            </p>
            
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/contact">
                <span className="flex items-center gap-2">
                  <span>→</span>
                  Book A FREE Discovery Call
                </span>
              </a>
            </Button>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Make An Enquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Row - Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    required
                  />
                  <span className="text-red-500 text-sm">*</span>
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    required
                  />
                  <span className="text-red-500 text-sm">*</span>
                </div>
              </div>

              {/* Second Row - Job & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    required
                  />
                  <span className="text-red-500 text-sm">*</span>
                </div>
                <div>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    required
                  />
                  <span className="text-red-500 text-sm">*</span>
                </div>
              </div>

              {/* Third Row - Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    required
                  />
                  <span className="text-red-500 text-sm">*</span>
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                    required
                  />
                  <span className="text-red-500 text-sm">*</span>
                </div>
              </div>

              {/* Website URL */}
              <div>
                <Input
                  type="url"
                  name="websiteUrl"
                  placeholder="Website URL"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                />
              </div>

              {/* Enquiry Message */}
              <div>
                <Textarea
                  name="enquiry"
                  placeholder="Enquiry"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  required
                />
                <span className="text-red-500 text-sm">*</span>
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="flex items-center gap-3 py-4">
                <input type="checkbox" className="w-5 h-5" required />
                <span className="text-sm text-gray-600">I'm not a robot</span>
                <div className="ml-auto text-xs text-gray-500">reCAPTCHA</div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>→</span>
                  Send Enquiry
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
