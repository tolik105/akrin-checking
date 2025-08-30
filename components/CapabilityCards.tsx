import React from "react"

type Item = { title: string; body: string; icon: React.ReactNode }

// Decorative teal icon badge with inline SVG (outline only)
function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#20B2AA]/15 text-[#20B2AA]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 md:h-7 md:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  )
}

// Icons per spec (outline only)
const IconWave = () => (
  <IconCircle>
    <path d="M3 12c3-6 6 6 9 0s6 6 9 0" />
  </IconCircle>
)

const IconGrid = () => (
  <IconCircle>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </IconCircle>
)

const IconInterference = () => (
  <IconCircle>
    <path d="M4 4l16 16" />
    <path d="M20 4L4 20" />
    <path d="M8 12h8" />
  </IconCircle>
)

const IconShield = () => (
  <IconCircle>
    <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4Z" />
  </IconCircle>
)

const IconDial = () => (
  <IconCircle>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 12l4-3" />
  </IconCircle>
)

const IconDoc = () => (
  <IconCircle>
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h6" />
  </IconCircle>
)

const items: Item[] = [
  {
    title: "Site Survey & RF Analysis",
    body:
      "Comprehensive wireless site surveys including RF spectrum analysis, signal strength mapping, and interference identification to optimize wireless network performance.",
    icon: <IconWave />,
  },
  {
    title: "Coverage & Capacity Planning",
    body:
      "Detailed analysis of wireless coverage areas, capacity requirements, and user density planning to ensure optimal performance across all locations.",
    icon: <IconGrid />,
  },
  {
    title: "Interference Detection & Mitigation",
    body:
      "Identification of RF interference sources, channel conflicts, and environmental factors affecting wireless performance with detailed remediation recommendations.",
    icon: <IconInterference />,
  },
  {
    title: "Security Assessment",
    body:
      "Wireless security evaluation including encryption analysis, rogue access point detection, and security policy assessment to ensure network protection.",
    icon: <IconShield />,
  },
  {
    title: "Performance Optimization",
    body:
      "Network performance analysis, throughput testing, and optimization recommendations to maximize wireless network efficiency and user experience.",
    icon: <IconDial />,
  },
  {
    title: "Compliance & Standards Review",
    body:
      "Assessment of wireless network compliance with industry standards, regulatory requirements, and best practices for enterprise wireless deployments.",
    icon: <IconDoc />,
  },
]

export default function CapabilityCards() {
  return (
    <section className="bg-[#F6F8FA]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-22">
        <div className="text-center">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold tracking-tight text-[#0B1E33]">
            Assessment areas
          </h2>
          <p className="mt-2 md:mt-3 text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] text-slate-600">
            What we analyze to deliver reliable, high-performance Wi‑Fi.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <article
              key={it.title}
              tabIndex={0}
              className={[
                "relative rounded-3xl border bg-white p-6 md:p-8",
                "border-[#E6EDF5] shadow-[0_1px_2px_rgba(16,24,40,0.06)]",
                i === 1
                  ? "border-[#20B2AA] ring-1 ring-[rgba(32,178,170,0.28)] shadow-md"
                  : "",
                "transition-shadow motion-safe:transition-transform motion-reduce:transform-none motion-reduce:transition-none",
                "hover:shadow-md motion-safe:hover:-translate-y-0.5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B2AA] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                "min-h-[280px] md:min-h-[300px]",
              ].join(" ")}
            >
              <span className="absolute top-2 right-2 text-slate-300 text-[12px] font-medium tracking-[0.06em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-start gap-4">
                {it.icon}
              </div>
              <h3 className="mt-4 text-[22px] md:text-[24px] leading-[30px] md:leading-[32px] font-semibold text-[#0B1E33]">
                {it.title}
              </h3>
              <p className="mt-2 text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] text-slate-600">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


