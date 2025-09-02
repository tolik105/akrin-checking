"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { PartnerWithUsSection } from "@/components/ui/partner-with-us-section"
import { PremiumCTA } from "@/components/ui/premium-cta"

export default function ServicesClient() {
  // AKRIN Services - ONLY existing services
  const services = [
    {
      title: "Managed IT Support",
      description: "Complete IT management and support for your business operations with 24/7 monitoring and proactive maintenance.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/services/it-managed-services",
      buttonText: "Managed IT Support solutions"
    },
    {
      title: "IT Consulting & Project Management",
      description: "Strategy, PMO, and delivery for complex IT initiatives to drive your business forward.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/services/it-consulting-project-management",
      buttonText: "IT Consulting & Project Management solutions"
    },
    {
      title: "Cloud Infrastructure Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses with Azure, AWS, and GCP expertise.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/services/cloud-infrastructure",
      buttonText: "Cloud Infrastructure Solutions solutions"
    },
    {
      title: "Cybersecurity & IT Security",
      description: "Advanced security measures to protect your digital assets from cyber threats with comprehensive protection.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/services/it-security",
      buttonText: "Cybersecurity & IT Security solutions"
    },
    {
      title: "Network Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities and strengthen your network defenses.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/services/network-penetration-testing",
      buttonText: "Network Penetration Testing solutions"
    },
    {
      title: "IT Security Services",
      description: "Shield endpoints, email, and data with AKRIN's layered IT security—EDR, M365 security, backup, and policy enforcement.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/services/it-security",
      buttonText: "IT Security Services solutions"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section - Mobile First */}
      <div className="relative overflow-clip bg-white">
        <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div className="order-2 md:order-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight"
              >
                Our Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 text-lg text-gray-800"
              >
                From wireless network design, Ekahau surveys to global IT deployments, onsite engineering staff augmentation, our services are tailored to optimise performance, enhance security, and drive efficiency.
              </motion.p>
            </div>

            <div className="order-1 md:order-2 relative ms-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full rounded-md overflow-hidden relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Global Network Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  fetchPriority="high"
                  priority
                  quality={50}
                />
              </motion.div>
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
            </div>
          </div>
        </div>
      </div>


      {/* Colorful Services Grid - Mobile First Preline Style */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative block rounded-xl overflow-hidden"
            >
              <div className={`aspect-w-12 aspect-h-7 sm:aspect-h-8 lg:aspect-h-9 overflow-hidden ${
                index === 0 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                index === 2 ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
                index === 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                index === 4 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                'bg-gradient-to-br from-green-400 to-green-600'
              }`}>
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out absolute top-0 start-0 object-cover rounded-xl opacity-80"
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={50}
                />
              </div>

              <div className="absolute bottom-0 start-0 end-0 p-4 sm:p-6">
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-white/80 text-sm">
                    {service.description.length > 100 ? service.description.substring(0, 100) + '...' : service.description}
                  </p>
                  <div className="mt-4">
                    <Link 
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
                      href={service.href}
                    >
                      Read more
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Features Grid - Mobile First Clean Cards */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">Comprehensive IT Services</h2>
          <p className="mt-1 text-gray-600">Our expert effectively and efficiently handle every aspect of your business critical network operations and maintenance requirements.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-11 rounded-t-xl overflow-hidden">
                <Image
                  className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={50}
                />
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-500 flex-1">
                  {service.description}
                </p>
                <div className="mt-5">
                  <Link 
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                    href={service.href}
                  >
                    {service.buttonText}
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium CTA Section */}
      <PremiumCTA
        variant="dark"
        title="Ready to optimize your IT operations?"
        description="From wireless network design to global IT deployments, our services are tailored to enhance security and drive efficiency."
        buttonText="Get Started Today"
        buttonHref="/contact"
      />

      {/* Partner With Us Section */}
      <PartnerWithUsSection />
    </div>
  )
}