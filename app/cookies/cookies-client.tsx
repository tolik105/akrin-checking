"use client"

export default function CookiesClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

          <div className="text-sm text-gray-600 mb-8">Last updated: January 1, 2024</div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What are cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that a website stores on your computer or mobile device.
              Cookies allow a website to recognize your device and remember your settings and
              preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of cookies we use</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Necessary cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are essential to provide the basic functions of the website. They cannot
              be disabled.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies remember your settings, such as language preferences and login
              information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies help us analyze how visitors use our website so we can improve services.
              We may use tools such as Google Analytics.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are used to deliver advertising relevant to your interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Purposes of use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use cookies to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Provide the basic functions of the website</li>
              <li>Improve user experience</li>
              <li>Remember language and display preferences</li>
              <li>Analyze site usage and performance</li>
              <li>Ensure security</li>
              <li>Provide personalized content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third‑party cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may use third‑party services that set cookies, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> Usage analytics</li>
              <li><strong>LinkedIn:</strong> Social media integration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can manage cookies via your browser settings:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Reject cookies</li>
              <li>Delete cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Be notified before cookies are set</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Disabling cookies may impact the functionality of parts of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Browser‑specific instructions</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Chrome</h4>
                <p className="text-gray-700">Settings → Privacy and security → Cookies and other site data</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Firefox</h4>
                <p className="text-gray-700">Settings → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Safari</h4>
                <p className="text-gray-700">Preferences → Privacy → Cookies and Website Data</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>AKRIN K.K.</strong><br />
                Email: <a href="mailto:privacy@akrin.jp" className="underline text-primary hover:text-primary">privacy@akrin.jp</a><br />
                Phone: +81-3-6821-1223<br />
                Address: 〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15, Japan
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
