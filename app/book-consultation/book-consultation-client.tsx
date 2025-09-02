"use client"

import { motion, AnimatePresence } from "framer-motion"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="mb-3 w-full rounded-xl border border-[#EEF2F6] bg-white p-5 md:p-6 cursor-pointer"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
          {question}
        </h3>
        <div className="relative h-6 w-6 flex-shrink-0">
          <span
            className={cn(
              "absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 bg-slate-700 transition-opacity duration-200",
              "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 block h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-slate-700 transition-all duration-200",
              isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
            )}
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="text-slate-600 pt-3">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function BookConsultationClient() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--primary))] text-white will-change-transform">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-8 md:px-16 lg:px-24 py-8 md:py-12"
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
                Let's discuss your IT challenges and explore how our comprehensive solutions can transform your technology infrastructure.
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
              Choose a convenient time for your consultation. We'll send you a confirmation with all the meeting details.
            </p>

            {/* Cal.com Booking Button */}
            <button
              type="button"
              data-cal-link="akrinsupport/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center px-12 py-6 bg-[#21B3AA] hover:bg-[#1a9891] text-white font-bold text-xl rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                // @ts-ignore
                if (typeof Cal !== 'undefined' && Cal?.ns?.['30min']) {
                  // Prefer element-click behavior to ensure in-page popup
                  const el = document.querySelector('[data-cal-link="akrinsupport/30min"]');
                  if (el) {
                    el.dispatchEvent(new Event('click', { bubbles: true }));
                  } else {
                    // @ts-ignore
                    Cal.ns['30min']('ui', { open: true, layout: 'month_view', calLink: 'akrinsupport/30min' });
                  }
                }
              }}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Schedule Your Free Consultation
            </button>

            <p className="text-gray-600 dark:text-gray-400 mt-8">
              Can't find a suitable time? Contact us directly and we'll work around your schedule.
            </p>

            {/* Cal element-click embed code (robust Next.js Script init) */}
            <Script
              id="cal-embed-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function (C, A, L) {
                    let p = function (a, ar) { a.q.push(ar); };
                    let d = C.document;
                    C.Cal = C.Cal || function () {
                      let cal = C.Cal;
                      let ar = arguments;
                      if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = cal.q || [];
                        d.head.appendChild(d.createElement("script")).src = A;
                        cal.loaded = true;
                      }
                      if (ar[0] === L) {
                        const api = function () { p(api, arguments); };
                        const namespace = ar[1];
                        api.q = api.q || [];
                        if (typeof namespace === "string") {
                          cal.ns[namespace] = cal.ns[namespace] || api;
                          p(cal.ns[namespace], ar);
                          p(cal, ["initNamespace", namespace]);
                        } else p(cal, ar);
                        return;
                      }
                      p(cal, ar);
                    };
                  })(window, "https://app.cal.com/embed/embed.js", "init");

                  Cal("init", "30min", { origin: "https://app.cal.com" });

                  Cal.ns["30min"]("ui", {
                    theme: "light",
                    cssVarsPerTheme: {
                      light: { "cal-brand": "#21B3AA" },
                      dark: { "cal-brand": "#21B3AA" }
                    },
                    layout: "month_view"
                  });
                `
              }}
            />
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

      {/* FAQ Section - Matching Website Design */}
      <section className="px-8 md:px-16 lg:px-24 py-20 bg-white">
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

          <div className="space-y-3">
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
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                open={openFaq}
                setOpen={setOpenFaq}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}