"use client"

import { motion } from "framer-motion"
import { CalendlyPopupButton } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from "lucide-react"

export default function BookConsultationClient() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--primary))] text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-8 md:px-16 lg:px-24 py-24 md:py-32"
        >
          <div className="max-w-7xl mx-auto">
            <Link href="/contact" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Contact
            </Link>
            
            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
              >
                Book Your Free
                <span className="block font-semibold bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent">
                  IT Consultation
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl"
              >
                Let's discuss your IT challenges and explore how our AI-powered solutions can transform your technology infrastructure.
              </motion.p>
            </div>
          </div>
        </motion.div>
        
        {/* Background elements - static for professional appearance */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--primary))] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--primary))] rounded-full filter blur-3xl opacity-20"></div>
      </section>

      {/* What to Expect Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              What to Expect From Your
              <span className="block font-semibold text-[hsl(var(--primary))]">Free Consultation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Meet Our Experts",
                description: "Connect with senior IT engineers who understand your industry"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Assess Your Needs",
                description: "We'll analyze your current IT infrastructure and identify opportunities"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Custom Solutions",
                description: "Receive tailored recommendations specific to your business goals"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Clear Next Steps",
                description: "Get a roadmap with timeline and investment options"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[hsl(var(--primary))]/10 dark:bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              Click below to choose a convenient time for your consultation. We'll send you a confirmation with all the meeting details.
            </p>
            
            <CalendlyPopupButton
              text="Schedule Your Free Consultation"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-medium rounded-none shadow-2xl hover:shadow-3xl transition-all duration-300"
            />

            <p className="text-gray-600 dark:text-gray-400 mt-8">
              Can't find a suitable time? Contact us directly and we'll work around your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button
                variant="outline"
                className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 dark:hover:bg-[hsl(var(--primary))]/20"
                asChild
              >
                <a href="tel:+81-3-6821-1223">
                  Call: +81-3-6821-1223
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 dark:hover:bg-[hsl(var(--primary))]/20"
                asChild
              >
                <a href="mailto:support@akrin.jp">
                  Email: support@akrin.jp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 md:px-16 lg:px-24 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long is the consultation?",
                answer: "Our initial consultations typically last 30-45 minutes, giving us enough time to understand your needs and provide valuable insights."
              },
              {
                question: "What should I prepare for the meeting?",
                answer: "Having a general idea of your current IT challenges and business goals is helpful, but not required. We'll guide the conversation."
              },
              {
                question: "Will I receive a proposal?",
                answer: "Yes, after our consultation, we'll send you a customized proposal with recommendations and pricing within 48 hours."
              },
              {
                question: "Is there any obligation?",
                answer: "No, our consultations are completely free with no obligation. We believe in earning your business through value, not pressure."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}