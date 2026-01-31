"use client"

import { useTranslation } from "react-i18next"

export default function TermsClient() {
  const { t } = useTranslation('common')
  
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{t('terms.title')}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('terms.lastUpdated')}
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.acceptance.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.acceptance.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.services.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.services.content')}
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('terms.services.item1')}</li>
                  <li>{t('terms.services.item2')}</li>
                  <li>{t('terms.services.item3')}</li>
                  <li>{t('terms.services.item4')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.userResponsibilities.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.userResponsibilities.content')}
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('terms.userResponsibilities.item1')}</li>
                  <li>{t('terms.userResponsibilities.item2')}</li>
                  <li>{t('terms.userResponsibilities.item3')}</li>
                  <li>{t('terms.userResponsibilities.item4')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.payment.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.payment.content')}
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('terms.payment.item1')}</li>
                  <li>{t('terms.payment.item2')}</li>
                  <li>{t('terms.payment.item3')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.intellectualProperty.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.intellectualProperty.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.confidentiality.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.confidentiality.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.limitation.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.limitation.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.termination.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.termination.content')}
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('terms.termination.item1')}</li>
                  <li>{t('terms.termination.item2')}</li>
                  <li>{t('terms.termination.item3')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.governingLaw.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.governingLaw.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.changes.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.changes.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('terms.contact.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('terms.contact.content')}
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <p className="font-semibold">{t('terms.contact.company')}</p>
                  <p>{t('terms.contact.email')}</p>
                  <p>{t('terms.contact.phone')}</p>
                  <p>{t('terms.contact.address')}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
