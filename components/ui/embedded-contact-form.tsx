"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import TurnstileWidget from "@/components/turnstile-widget"

export function EmbeddedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    need: "",
    phone: "",
    country: "JP",
    serviceType: "",
    hearAboutUs: "",
    message: "",
    agreeToPrivacy: false
  })
  const { toast } = useToast()

  const validateStep = (currentStep: 1 | 2) => {
    const newErrors: Record<string, string> = {}
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email"
      if (!formData.company.trim()) newErrors.company = "Company is required"
      if (!formData.need) newErrors.need = "Please choose a need"
    }
    if (currentStep === 2) {
      if (!formData.message.trim()) newErrors.message = "Please add a few details"
      if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = "Please agree to the privacy policy"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateStep(2)) return

    setIsSubmitting(true)

    try {
      const nativeForm = e.currentTarget
      const fd = new FormData(nativeForm)
      const captchaToken = (fd.get('cf-turnstile-response') as string) || ''

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Company: ${formData.company}\nPhone: ${formData.phone} (${formData.country})\nService Type: ${formData.serviceType}\nHow did you hear about us: ${formData.hearAboutUs}\n\nMessage:\n${formData.message}`,
          'cf-turnstile-response': captchaToken
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setStep(1)
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          need: "",
          phone: "",
          country: "JP",
          serviceType: "",
          hearAboutUs: "",
          message: "",
          agreeToPrivacy: false
        })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mt-4 sm:mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      {submitted ? (
        <div className="rounded-xl bg-white dark:bg-gray-700 p-6 text-center">
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">Thanks, your message is on its way.</p>
          <p className="text-gray-600 dark:text-gray-300">We reply within 1 business day.</p>
        </div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-[14px] leading-5 font-medium text-gray-900 dark:text-white mb-1">First name</label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="block w-full rounded-md bg-white dark:bg-gray-700 px-3 h-12 text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[hsl(var(--primary))]"
                  />
                  {errors.firstName && <p className="mt-1 text-[12px] leading-[18px] text-[#EF4444]">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-[14px] leading-5 font-medium text-gray-900 dark:text-white mb-1">Last name</label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="block w-full rounded-md bg-white dark:bg-gray-700 px-3 h-12 text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[hsl(var(--primary))]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-[14px] leading-5 font-medium text-gray-900 dark:text-white mb-1">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="block w-full rounded-md bg-white dark:bg-gray-700 px-3 h-12 text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[hsl(var(--primary))]"
                />
                {errors.company && <p className="mt-1 text-[12px] leading-[18px] text-[#EF4444]">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-[14px] leading-5 font-medium text-gray-900 dark:text-white mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="block w-full rounded-md bg-white dark:bg-gray-700 px-3 h-12 text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[hsl(var(--primary))]"
                />
                {errors.email && <p className="mt-1 text-[12px] leading-[18px] text-[#EF4444]">{errors.email}</p>}
              </div>
              <div>
                <span className="block text-[14px] leading-5 font-medium text-gray-900 dark:text-white mb-2">What do you need?</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: "Managed IT", value: "Managed IT Support" },
                    { label: "Cloud migration", value: "Cloud Solutions & Migration" },
                    { label: "Security review", value: "Cybersecurity & Compliance" },
                    { label: "Other", value: "Other" },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setFormData({ ...formData, need: opt.value, serviceType: opt.value })}
                      className={`h-12 rounded-md text-sm px-3 border transition-colors ${formData.need === opt.value ? 'bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors.need && <p className="mt-1 text-[12px] leading-[18px] text-[#EF4444]">{errors.need}</p>}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => { if (validateStep(1)) setStep(2) }}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[hsl(var(--primary))] text-white text-sm font-medium hover:bg-[hsl(var(--primary))]/90 transition-colors"
                >
                  Next
                </button>
              </div>
              <p className="text-xs text-gray-500">We reply within 1 business day.</p>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="message" className="block text-[14px] leading-5 font-medium text-gray-900 dark:text-white mb-1">Tell us a bit more</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="block w-full rounded-md bg-white dark:bg-gray-700 px-3 py-3 text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[hsl(var(--primary))] resize-y"
                  placeholder="Share details, timelines, or goals."
                />
                {errors.message && <p className="mt-1 text-[12px] leading-[18px] text-[#EF4444]">{errors.message}</p>}
              </div>
              <div>
                <label htmlFor="hear-about-us" className="block text-[14px] leading-5 font-medium text-gray-900 dark:text-white mb-1">How did you hear about us?</label>
                <select
                  id="hear-about-us"
                  name="hear-about-us"
                  value={formData.hearAboutUs}
                  onChange={(e) => setFormData({...formData, hearAboutUs: e.target.value})}
                  className="block w-full rounded-md bg-white dark:bg-gray-700 px-3 h-12 text-sm text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[hsl(var(--primary))]"
                >
                  <option value="">Select an option...</option>
                  <option value="Web Search">Web Search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="From a Partner">From a Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="agree-privacy"
                    name="agree-privacy"
                    type="checkbox"
                    checked={formData.agreeToPrivacy}
                    onChange={(e) => setFormData({...formData, agreeToPrivacy: e.target.checked})}
                    className="h-4 w-4 rounded border-gray-300 text-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))]"
                  />
                </div>
                <div className="ml-2 text-xs">
                  <label htmlFor="agree-privacy" className="text-gray-600 dark:text-gray-400">
                    I agree to the <a href="/privacy" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]">privacy policy</a>
                  </label>
                  {errors.agreeToPrivacy && <p className="mt-1 text-[12px] leading-[18px] text-[#EF4444]">{errors.agreeToPrivacy}</p>}
                </div>
              </div>
              <div className="pt-2">
                <TurnstileWidget />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[hsl(var(--primary))] text-white text-sm font-medium hover:bg-[hsl(var(--primary))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
              </div>
            </div>
          )}
        </motion.form>
      )}
    </div>
  )
}
