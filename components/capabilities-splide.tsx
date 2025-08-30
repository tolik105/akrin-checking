'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'

const capabilities = [
  {
    number: "01",
    title: "Managed IT Services",
    description: "Comprehensive IT management with 24/7 monitoring, proactive maintenance, and expert support to keep your business running smoothly.",
    link: "/services/it-managed-services"
  },
  {
    number: "02",
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with seamless migration services, optimization, and comprehensive security for modern businesses.",
    link: "/services/cloud-infrastructure"
  },
  {
    number: "03",
    title: "IT Consulting",
    description: "Strategic IT guidance and project management that aligns technology with business goals for sustainable growth.",
    link: "/services/it-consulting-project-management"
  },
  {
    number: "04",
    title: "Cybersecurity",
    description: "Advanced threat protection, security audits, and compliance management to safeguard your digital assets.",
    link: "/services/cybersecurity"
  },
  {
    number: "05",
    title: "Strategic IT Planning",
    description: "Long-term technology roadmaps and strategic guidance to align IT investments with business objectives.",
    link: "/services/it-consulting-project-management"
  },
  {
    number: "06",
    title: "24/7 Support",
    description: "Round-the-clock technical support with guaranteed response times and expert resolution for all your IT needs.",
    link: "/services/it-managed-services"
  }
]

export function CapabilitiesSplide() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Capabilities that define the future
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine deep technical expertise with industry-leading partnerships to deliver transformative solutions at enterprise scale.
          </p>
        </div>

        {/* Splide Carousel - Exact Style from splidejs.com */}
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            pauseOnFocus: true,
            arrows: true,
            pagination: true,
            breakpoints: {
              1024: {
                perPage: 2,
                gap: '1rem',
              },
              768: {
                perPage: 1,
                gap: '1rem',
              },
            },
          }}
          aria-label="AKRIN Capabilities Carousel"
        >
          {capabilities.map((capability, index) => (
            <SplideSlide key={index}>
              <div className="splide-slide-content">
                <div className="slide-number">{capability.number}</div>
                <div className="slide-content">
                  <h3 className="slide-title">{capability.title}</h3>
                  <p className="slide-description">{capability.description}</p>
                  <a href={capability.link} className="slide-link">Learn More →</a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Exact Splide.js Website Styling */}
      <style jsx global>{`
        .splide-slide-content {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          padding: 2rem;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .slide-number {
          font-size: 4rem;
          font-weight: 900;
          opacity: 0.3;
          position: absolute;
          top: 1rem;
          left: 1.5rem;
          line-height: 1;
        }

        .slide-content {
          z-index: 2;
          position: relative;
        }

        .slide-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .slide-description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          max-width: 280px;
        }

        .slide-link {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .slide-link:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Different gradient for each slide */
        .splide-slide-content:nth-child(1) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .splide-slide-content:nth-child(2) {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .splide-slide-content:nth-child(3) {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .splide-slide-content:nth-child(4) {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .splide-slide-content:nth-child(5) {
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        .splide-slide-content:nth-child(6) {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        /* Splide default styling adjustments */
        .splide__arrow {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          opacity: 1;
        }

        .splide__arrow:hover {
          background: white;
        }

        .splide__arrow svg {
          fill: #333;
        }

        .splide__pagination__page {
          background: rgba(255, 255, 255, 0.5);
          border: none;
          border-radius: 50%;
          width: 0.75rem;
          height: 0.75rem;
          margin: 0 0.25rem;
          opacity: 1;
        }

        .splide__pagination__page.is-active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  )
}
