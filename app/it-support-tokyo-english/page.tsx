import { generatePageMetadata } from "@/lib/metadata-helpers"
import Link from "next/link"

// DRAFT PAGE - opened as a PR for review. Do not merge without editorial review.
// Target keyword: "english speaking it support tokyo" (SurferSEO Content Editor draft #16364210)

export const metadata = generatePageMetadata({
  title: "English-Speaking IT Support in Tokyo | AKRIN",
  description:
    "Bilingual English/Japanese IT support for international companies in Tokyo. Helpdesk, onsite support, managed IT, and cybersecurity with clear English communication.",
  keywords: [
    "english speaking it support tokyo",
    "bilingual it support japan",
    "it support tokyo english",
    "english it helpdesk japan",
    "it support for international companies japan",
    "managed it services tokyo english",
    "english speaking msp japan"
  ],
  path: "/it-support-tokyo-english",
  image: "/og-image.png"
})

export default function ITSupportTokyoEnglishPage() {
  return (
    <main className="min-h-screen bg-white pt-20 sm:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          English-Speaking IT Support in Tokyo
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Finding reliable IT support in Japan is hard enough. Finding a team that explains problems,
          contracts, and fixes in clear English is even harder. AKRIN is a Tokyo-based IT services
          company built for international companies: our engineers work in both English and Japanese,
          so your headquarters abroad and your staff in Japan always get the same clear answers.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Why international companies in Tokyo choose AKRIN</h2>
        <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-6">
          <li>Fully bilingual support: every ticket, report, and meeting available in English or Japanese.</li>
          <li>One partner for everything: helpdesk, onsite visits, infrastructure, cloud, and security.</li>
          <li>Local presence in Tokyo with nationwide coverage across Japan and the wider APAC region.</li>
          <li>Experience with global standards: we work daily with headquarters in the US, Europe, and Asia.</li>
          <li>Transparent, fixed monthly pricing with no surprise fees.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Our English-speaking IT support services</h2>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">Bilingual IT helpdesk</h3>
        <p className="mt-3 text-gray-600">
          A single point of contact for your employees in Japan. Users open tickets by email, phone, or
          chat in English or Japanese and get a response from an engineer, not a call script. Typical
          requests include account setup, device troubleshooting, software issues, email and Microsoft
          365 problems, and VPN access. We track response and resolution times against agreed SLAs and
          report them every month.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">Onsite IT support in Tokyo</h3>
        <p className="mt-3 text-gray-600">
          Some problems cannot be fixed remotely. Our engineers visit your office for hardware
          replacement, network troubleshooting, meeting room setup, office moves, and scheduled onsite
          days. We support offices across central Tokyo and can dispatch engineers nationwide for
          branch locations, warehouses, and retail sites.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">Managed IT services</h3>
        <p className="mt-3 text-gray-600">
          For companies that want to hand over day-to-day IT completely, our{" "}
          <Link href="/services/it-managed-services" className="text-teal-600 hover:underline">managed IT services</Link>{" "}
          cover monitoring, patching, asset management, vendor management, and user lifecycle from
          onboarding to offboarding. You get a stable IT environment and a predictable monthly cost,
          without hiring an internal IT team in Japan.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">Cybersecurity</h3>
        <p className="mt-3 text-gray-600">
          Compliance requirements from headquarters do not stop at the Japanese border. We provide{" "}
          <Link href="/services/cybersecurity" className="text-teal-600 hover:underline">cybersecurity services</Link>{" "}
          including endpoint protection, email security, security assessments, and incident response,
          aligned with the policies your global security team already uses.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">Cloud and infrastructure</h3>
        <p className="mt-3 text-gray-600">
          From Microsoft 365 and Azure to AWS and hybrid setups, our{" "}
          <Link href="/services/cloud-infrastructure" className="text-teal-600 hover:underline">cloud and infrastructure team</Link>{" "}
          designs, migrates, and operates the platforms your business runs on, including office
          networks, Wi-Fi, and servers.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Who we serve</h2>
        <p className="mt-4 text-gray-600">
          Most of our clients are foreign-capital companies operating in Japan: regional offices of
          global enterprises, fast-growing startups opening their first Tokyo office, and mid-sized
          companies that need an IT partner who can talk to both local staff and overseas headquarters.
          Industries include finance, software, manufacturing, retail, and professional services.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">How onboarding works</h2>
        <ol className="mt-4 space-y-3 text-gray-600 list-decimal pl-6">
          <li><strong>Consultation.</strong> A free call in English to understand your environment, pain points, and goals.</li>
          <li><strong>Assessment.</strong> We document your current infrastructure, accounts, licenses, and risks.</li>
          <li><strong>Transition plan.</strong> A clear scope, SLA, and fixed monthly price, agreed before we start.</li>
          <li><strong>Go live.</strong> Your team gets the helpdesk contact details, and we take over day-to-day IT.</li>
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Frequently asked questions</h2>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">Do your engineers really speak English?</h3>
        <p className="mt-3 text-gray-600">
          Yes. English is a working language at AKRIN. Tickets, documentation, reports, and meetings are
          available in English by default, with Japanese support for your local staff and vendors.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">Can you support both our Tokyo office and other locations in Japan?</h3>
        <p className="mt-3 text-gray-600">
          Yes. Remote support covers all of Japan, and we dispatch engineers onsite nationwide,
          including Osaka, Nagoya, Fukuoka, and regional sites.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">We already have IT at headquarters. Can you work with them?</h3>
        <p className="mt-3 text-gray-600">
          This is our most common setup: your global IT team keeps ownership of policy and platforms,
          and AKRIN acts as local hands, eyes, and helpdesk in Japan, following your standards and
          reporting in English.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">How fast do you respond?</h3>
        <p className="mt-3 text-gray-600">
          Response targets are defined in your SLA. Critical issues are picked up within business
          minutes, not days, and we report actual response and resolution times monthly.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">What does English-speaking IT support cost in Tokyo?</h3>
        <p className="mt-3 text-gray-600">
          Pricing depends on user count, locations, and scope. Most clients choose a fixed monthly fee
          per user. Contact us for a quote; we respond within one business day.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Talk to an engineer, not a sales script</h2>
        <p className="mt-4 text-gray-600">
          Tell us what is not working, and we will tell you honestly how we would fix it. Book a free
          consultation or send us a message; both go straight to our engineering team.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/book-consultation" className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700">
            Book a free consultation
          </Link>
          <Link href="/contact-form" className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
