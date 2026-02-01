"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function ContactClient() {
  const pathname = usePathname()
  const isJapanese = pathname?.startsWith('/ja')

  const content = {
    h1: isJapanese ? 'AKRINへのお問い合わせ' : 'Contact AKRIN',
    subtitle: isJapanese ? '日本のITコンサルティング＆マネージドサービス' : 'IT Consulting & Managed Services in Japan',
    description: isJapanese ? 'AKRINに関するご質問にお答えします' : 'Get answers to your questions about anything AKRIN',
    talkToUs: isJapanese ? 'お電話でのお問い合わせ' : 'Talk to us',
    callsFromJapan: isJapanese ? '国内からのお電話' : 'Calls from Japan',
    outsideJapan: isJapanese ? '海外からのお電話' : 'Outside Japan',
    writeToUs: isJapanese ? 'メールでのお問い合わせ' : 'Write to us',
    emailOrForm: isJapanese ? '（メールまたは下記フォームをご利用ください）' : '(Email us or use the form below)',
    aboutServices: isJapanese ? 'AKRINのITサービスについて' : 'To know more about AKRIN IT services',
    otherQueries: isJapanese ? 'その他のお問い合わせ' : 'For any other queries',
    visitUs: isJapanese ? '所在地' : 'Visit us',
    headquarters: isJapanese ? '本社' : 'Corporate Headquarters',
    contactButton: isJapanese ? 'お問い合わせフォーム →' : 'Contact us →',
    contactFormHref: isJapanese ? '/ja/contact-form' : '/contact-form',
  }

  return (
    <main className="bg-white">
      <section className="bg-[#F8F9FA] min-h-[400px] sm:min-h-[450px] md:min-h-[500px]" aria-labelledby="contact-heading">
        <div className="flex flex-col md:flex-row h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
          <div className="flex-none md:w-2/5 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col justify-center order-2 md:order-1 py-8 sm:py-12 md:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-none"
            >
              <h1 id="contact-heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-semibold leading-[1.05] tracking-tight text-gray-900 mb-4 sm:mb-5 md:mb-6 antialiased"
                  style={{
                    fontFamily: "'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: '600',
                    fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
                    fontOpticalSizing: 'auto',
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}>
                {content.h1}
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed antialiased"
                 style={{
                   fontFamily: "'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                   fontWeight: '500',
                   fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
                   fontOpticalSizing: 'auto',
                   textRendering: 'optimizeLegibility',
                   WebkitFontSmoothing: 'antialiased',
                   MozOsxFontSmoothing: 'grayscale'
                 }}>
                {content.subtitle}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed antialiased mt-2 sm:mt-3"
                 style={{
                   fontFamily: "'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                   fontWeight: '400',
                   fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
                   fontOpticalSizing: 'auto',
                   textRendering: 'optimizeLegibility',
                   WebkitFontSmoothing: 'antialiased',
                   MozOsxFontSmoothing: 'grayscale'
                 }}>
                {content.description}
              </p>
            </motion.div>
          </div>

          <div className="flex-none md:w-3/5 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[250px] sm:h-[300px] md:h-full md:min-h-[500px]"
            >
              <img
                src="https://res.cloudinary.com/dtmdovevn/image/upload/v1752615791/roma_20454_Two_business_professionals_one_female_one_male_in_sm_c1a6a181-20ef-4379-b3b7-284c27c20233_mc3hkz.png"
                alt="AKRIN business professionals discussing IT solutions"
                className="w-full h-full object-cover object-center"
                style={{
                  imageRendering: 'crisp-edges',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
                loading="eager"
                decoding="sync"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" aria-labelledby="contact-methods">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="contact-methods" className="sr-only">Contact Methods</h2>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=""
            >
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{content.talkToUs}</h3>
                <div className="w-12 h-0.5 bg-[hsl(var(--primary))]"></div>
              </div>

              <address className="space-y-6 not-italic">
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">
                    <a href="tel:+81-3-6821-1223" className="hover:text-[hsl(var(--primary))] transition-colors">
                      03-6821-1223
                    </a>
                  </p>
                  <p className="text-gray-600">{content.callsFromJapan}</p>
                </div>

                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">
                    <a href="tel:+81-3-6821-1223" className="hover:text-[hsl(var(--primary))] transition-colors">
                      +81-3-6821-1223
                    </a>
                  </p>
                  <p className="text-gray-600">{content.outsideJapan}</p>
                </div>
              </address>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=""
            >
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{content.writeToUs}</h3>
                <div className="w-12 h-0.5 bg-[hsl(var(--primary))]"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">{content.emailOrForm}</p>

                  <address className="space-y-4 not-italic">
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        <a href="mailto:support@akrin.jp" className="hover:text-[hsl(var(--primary))] transition-colors">
                          support@akrin.jp
                        </a>
                      </p>
                      <p className="text-gray-600">{content.aboutServices}</p>
                    </div>

                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        <a href="mailto:inquiry@akrin.jp" className="hover:text-[hsl(var(--primary))] transition-colors">
                          inquiry@akrin.jp
                        </a>
                      </p>
                      <p className="text-gray-600">{content.otherQueries}</p>
                    </div>
                  </address>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=""
            >
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{content.visitUs}</h3>
                <div className="w-12 h-0.5 bg-[hsl(var(--primary))]"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{content.headquarters}</p>
                  <address className="text-gray-600 space-y-1 not-italic">
                    {isJapanese ? (
                      <>
                        <p>〒107-0062 東京都港区</p>
                        <p>南青山2-4-15</p>
                        <p>日本</p>
                      </>
                    ) : (
                      <>
                        <p>〒107-0062 Tokyo, Minato City</p>
                        <p>Minami Aoyama 2-4-15</p>
                        <p>Japan</p>
                      </>
                    )}
                  </address>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href={content.contactFormHref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-8 py-3 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] font-medium hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200 inline-block text-center"
            >
              {content.contactButton}
            </motion.a>


          </div>
        </div>
      </section>


    </main>
  )
}