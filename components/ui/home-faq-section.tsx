"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { HeadlineText, BodyText } from "@/components/ui/premium-typography"
import { EmbeddedContactForm } from "@/components/ui/embedded-contact-form"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

interface FAQItem {
  question: string
  answer: string
}

function useLocalizedFaq(): FAQItem[] {
  const { t } = useTranslation('common')
  return [
    {
      question: t('faq.q1.question'),
      answer: t('faq.q1.answer')
    },
    {
      question: t('faq.q2.question'),
      answer: t('faq.q2.answer')
    },
    {
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer')
    },
    {
      question: t('faq.q7.question'),
      answer: t('faq.q7.answer')
    },
    {
      question: t('faq.q3.question'),
      answer: t('faq.q3.answer')
    },
    {
      question: t('faq.q4.question'),
      answer: t('faq.q4.answer')
    }
  ]
}

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

export function HomeFAQSection() {
  const { t } = useTranslation('common')
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const faqData = useLocalizedFaq()

  return (
    <>
      {/* FAQ Section */}
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40">
        <h2 className="text-center text-4xl font-medium tracking-tight text-neutral-600 md:text-5xl dark:text-neutral-50">
          {t('sections.faq')}
        </h2>
        <p className="mx-auto max-w-lg text-center text-base text-neutral-600 dark:text-neutral-50">
          {t("sections.faqDesc")} {" "}
          <a
            href="mailto:support@akrin.jp"
            className="text-blue-500 underline"
          >
            support@akrin.jp
          </a>
        </p>
        <div className="mx-auto mt-10 w-full max-w-3xl">
          {faqData.slice(0, 6).map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={openFaq}
              setOpen={setOpenFaq}
            />
          ))}
          <a
            href="/contact-form"
            className="mb-3 block w-full rounded-xl border border-[#EEF2F6] p-5 md:p-6 bg-white hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-neutral-800">{t('faq.didntFindAnswer')}</span>
              <span className="text-[hsl(var(--primary))] font-medium">{t('common.contactUs')} →</span>
            </div>
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gray-50 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <BodyText className="text-lg text-gray-600 dark:text-gray-400">
              {t('faq.stillHaveQuestions')}
            </BodyText>
          </div>
          <EmbeddedContactForm />
        </div>
      </motion.div>
    </>
  )
}
