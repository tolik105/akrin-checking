"use client"

import { useTranslation } from "react-i18next"

export default function PrivacyPage() {
  const { t } = useTranslation('common')
  
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{t('privacy.title')}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('privacy.lastUpdated')}
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.introduction.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('privacy.introduction.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.informationWeCollect.title')}</h2>
                <h3 className="text-xl font-semibold mb-3">{t('privacy.informationWeCollect.personal.title')}</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('privacy.informationWeCollect.personal.item1')}</li>
                  <li>{t('privacy.informationWeCollect.personal.item2')}</li>
                  <li>{t('privacy.informationWeCollect.personal.item3')}</li>
                  <li>{t('privacy.informationWeCollect.personal.item4')}</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">{t('privacy.informationWeCollect.technical.title')}</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('privacy.informationWeCollect.technical.item1')}</li>
                  <li>{t('privacy.informationWeCollect.technical.item2')}</li>
                  <li>{t('privacy.informationWeCollect.technical.item3')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.howWeUse.title')}</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('privacy.howWeUse.item1')}</li>
                  <li>{t('privacy.howWeUse.item2')}</li>
                  <li>{t('privacy.howWeUse.item3')}</li>
                  <li>{t('privacy.howWeUse.item4')}</li>
                  <li>{t('privacy.howWeUse.item5')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataProtection.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('privacy.dataProtection.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataSharing.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('privacy.dataSharing.content')}
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('privacy.dataSharing.item1')}</li>
                  <li>{t('privacy.dataSharing.item2')}</li>
                  <li>{t('privacy.dataSharing.item3')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.yourRights.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('privacy.yourRights.content')}
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>{t('privacy.yourRights.item1')}</li>
                  <li>{t('privacy.yourRights.item2')}</li>
                  <li>{t('privacy.yourRights.item3')}</li>
                  <li>{t('privacy.yourRights.item4')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.cookies.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('privacy.cookies.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('privacy.contact.content')}
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <p className="font-semibold">{t('privacy.contact.company')}</p>
                  <p>{t('privacy.contact.email')}</p>
                  <p>{t('privacy.contact.phone')}</p>
                  <p>{t('privacy.contact.address')}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}