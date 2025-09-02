"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TurnstileWidget from "@/components/turnstile-widget"

export function PartnerWithUsSection() {
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

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formEl = e.currentTarget as HTMLFormElement
      const fd = new FormData(formEl)
      const captchaToken = (fd.get('cf-turnstile-response') as string) || ''

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.emailAddress,
          message: `Job Title: ${formData.jobTitle}\nCompany: ${formData.companyName}\nPhone: ${formData.phoneNumber}\nWebsite: ${formData.websiteUrl || 'Not provided'}\n\nEnquiry:\n${formData.enquiry}`,
          'cf-turnstile-response': captchaToken,
        }),
      })

      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          jobTitle: '',
          companyName: '',
          emailAddress: '',
          phoneNumber: '',
          websiteUrl: '',
          enquiry: ''
        })
        alert('Thank you for your enquiry. We\'ll get back to you within 24 hours.')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      alert('Failed to send your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="mb-10 lg:mb-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold md:text-4xl md:leading-tight xl:text-5xl xl:leading-tight text-gray-800"
          >
            Partner With Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-gray-600"
          >
            At AKRIN, we are more than just a solutions provider — we are a partner in your journey toward greater efficiency, performance, and success.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-gray-600"
          >
            Whether you're seeking to enhance your IT operations or expand your service offerings, our team is here to help you achieve your goals.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 text-gray-600"
          >
            Contact us today to discover how we can transform your business with our innovative IT solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7 lg:mt-10"
          >
            <h3 className="text-lg font-semibold text-gray-800">Get in Touch</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex space-x-3">
                <div className="flex-shrink-0">
                  <svg className="flex-shrink-0 size-4 mt-0.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-10 5L2 7"/>
                  </svg>
                </div>
                <div className="grow">
                  <span className="text-sm text-gray-600">Email: support@akrin.jp</span>
                </div>
              </li>

              <li className="flex space-x-3">
                <div className="flex-shrink-0">
                  <svg className="flex-shrink-0 size-4 mt-0.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="grow">
                  <span className="text-sm text-gray-600">Phone: +81-3-6821-1223</span>
                </div>
              </li>

              <li className="flex space-x-3">
                <div className="flex-shrink-0">
                  <svg className="flex-shrink-0 size-4 mt-0.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="grow">
                  <span className="text-sm text-gray-600">Response Time: Within 24 hours</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8"
          >
            <h2 className="mb-8 text-xl font-semibold text-gray-800">Make An Enquiry</h2>
            <p className="text-sm text-gray-600 mb-6">Fill out the form below and we'll get back to you soon.</p>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      id="firstName" 
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      id="lastName" 
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="jobTitle" className="sr-only">Job Title</label>
                  <input 
                    type="text" 
                    name="jobTitle" 
                    id="jobTitle" 
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="Job Title *"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="sr-only">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName" 
                    id="companyName" 
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="emailAddress" className="sr-only">Email Address</label>
                  <input 
                    type="email" 
                    name="emailAddress" 
                    id="emailAddress" 
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="Email Address *"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber" 
                    id="phoneNumber" 
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="Phone Number *"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="sr-only">Website URL</label>
                  <input 
                    type="url" 
                    name="websiteUrl" 
                    id="websiteUrl" 
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="https://your-website.com"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="enquiry" className="sr-only">Enquiry</label>
                  <textarea 
                    name="enquiry" 
                    id="enquiry" 
                    rows={4} 
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="Please describe your enquiry in detail... *"
                    value={formData.enquiry}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                <p className="text-sm text-yellow-700 font-medium">reCAPTCHA temporarily unavailable</p>
                <p className="text-xs text-yellow-600 mt-1">Please proceed without verification. We'll validate your submission manually.</p>
              </div>

              <div className="pt-2">
                <TurnstileWidget />
              </div>

              <div className="mt-4 grid">
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}