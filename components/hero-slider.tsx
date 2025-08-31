'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const heroSlides = [
  {
    id: 1,
    title: "IT Managed Services",
    image: "/images/banners/it-managed-services/banner.avif",
    link: "/services/it-managed-services"
  },
  {
    id: 2,
    title: "Cybersecurity",
    image: "/images/banners/cybersecurity/banner1.jpeg",
    link: "/services/cybersecurity"
  },
  {
    id: 3,
    title: "IT Consulting & Project Management",
    image: "/images/banners/it-consulting-project-management/hero-banner.webp",
    link: "/services/it-consulting-project-management"
  }
]

export function HeroSlider() {
  return (
    <section className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
          <Splide
        options={{
          type: 'fade',
          rewind: true,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          pauseOnFocus: true,
          arrows: true,
          pagination: true,
          speed: 1200,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          keyboard: true,
          drag: false,
          wheel: false,
          waitForTransition: true,
          breakpoints: {
            768: {
              arrows: false,
              drag: true,
              pagination: true
            }
          }
        }}
        aria-label="AKRIN Hero Services Slider"
        className="hero-slider-container"
      >
        {heroSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="relative h-[450px] sm:h-[500px] lg:h-[550px] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  loading={slide.id === 1 ? "eager" : "lazy"}
                  quality={80}
                  sizes="100vw"
                />
                {/* Professional Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[hsl(var(--primary))]/30 to-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center">
                  {/* Service Title */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                    {slide.title}
                  </h1>

                  {/* Learn More Button - Exact Teal Button from Screenshot */}
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
        </Splide>
        </div>
      </div>

      {/* Professional Slider Styles */}
      <style jsx global>{`
        .hero-slider-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero-slider-container .splide__track {
          overflow: hidden;
        }

        .hero-slider-container .splide__list {
          align-items: stretch;
        }

        .hero-slider-container .splide__slide {
          opacity: 1;
        }

        /* Arrows styled with AKRIN purple */
        .hero-slider-container .splide__arrow {
          position: absolute;
          width: 48px;
          height: 48px;
          background: rgba(147, 51, 234, 0.15);
          border: 2px solid rgba(147, 51, 234, 0.35);
          border-radius: 50%;
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 30;
          opacity: 0.9;
        }

        .hero-slider-container .splide__arrow:hover {
          background: rgba(147, 51, 234, 0.9);
          border-color: rgba(147, 51, 234, 1);
          opacity: 1;
          box-shadow: 0 8px 32px rgba(147, 51, 234, 0.3);
        }

        .hero-slider-container .splide__arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .hero-slider-container .splide__arrow svg {
          width: 20px;
          height: 20px;
          fill: white;
          transition: transform 0.3s ease;
        }

        .hero-slider-container .splide__arrow:hover svg {
          transform: scale(1.1);
        }

        .hero-slider-container .splide__arrow--prev {
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .hero-slider-container .splide__arrow--next {
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .hero-slider-container .splide__arrow--prev:hover {
          transform: translateY(-50%) scale(1.1);
        }

        .hero-slider-container .splide__arrow--next:hover {
          transform: translateY(-50%) scale(1.1);
        }

        /* Pagination - minimalist dots */
        .hero-slider-container .splide__pagination {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          display: flex;
          gap: 0.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .hero-slider-container .splide__pagination__page {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          margin: 0;
          padding: 0;
          position: relative;
        }

        .hero-slider-container .splide__pagination__page:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.1);
        }

        .hero-slider-container .splide__pagination__page.is-active {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-slider-container .splide__arrow {
            width: 42px;
            height: 42px;
          }

          .hero-slider-container .splide__arrow svg {
            width: 18px;
            height: 18px;
          }

          .hero-slider-container .splide__arrow--prev {
            left: 1rem;
          }

          .hero-slider-container .splide__arrow--next {
            right: 1rem;
          }

          .hero-slider-container .splide__pagination {
            bottom: 1.25rem;
            gap: 0.5rem;
          }

          .hero-slider-container .splide__pagination__page {
            width: 8px;
            height: 8px;
          }
        }

        @media (max-width: 480px) {
          .hero-slider-container .splide__arrow {
            width: 38px;
            height: 38px;
          }

          .hero-slider-container .splide__arrow svg {
            width: 16px;
            height: 16px;
          }

          .hero-slider-container .splide__arrow--prev {
            left: 0.75rem;
          }

          .hero-slider-container .splide__arrow--next {
            right: 0.75rem;
          }

          .hero-slider-container .splide__pagination {
            bottom: 1rem;
          }

          .hero-slider-container .splide__pagination__page {
            width: 7px;
            height: 7px;
          }
        }

        /* Smooth fade transitions */
        .hero-slider-container .splide__slide {
          transition: opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hero-slider-container .splide__slide:not(.is-active) {
          opacity: 0;
        }

        .hero-slider-container .splide__slide.is-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
