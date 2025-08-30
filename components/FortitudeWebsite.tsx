'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const FortitudeWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#00947C]">
                Fortitude
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#00947C] transition-colors font-medium">
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-[#00947C] transition-colors font-medium">
                  Solutions
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00947C]">
                    Enterprise Solutions
                  </a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00947C]">
                    Cloud Services
                  </a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00947C]">
                    Consulting
                  </a>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-[#00947C] transition-colors font-medium">
                About FNG
              </a>
              <a href="#" className="text-gray-700 hover:text-[#00947C] transition-colors font-medium">
                Contact Us
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button className="bg-[#00947C] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#007A66] transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 font-medium">
                Home
              </a>
              <a href="#" className="block text-gray-700 font-medium">
                Solutions
              </a>
              <a href="#" className="block text-gray-700 font-medium">
                About FNG
              </a>
              <a href="#" className="block text-gray-700 font-medium">
                Contact Us
              </a>
              <button className="w-full bg-[#00947C] text-white px-4 py-2.5 rounded-lg font-medium mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Your
                <span className="text-[#00947C] block">Digital Future</span>
              </h1>
              <p className="text-xl text-[#707584] mb-8 leading-relaxed">
                Transform your business with cutting-edge technology solutions designed to drive growth, 
                efficiency, and innovation in today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#00947C] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#007A66] transition-colors">
                  Explore Solutions
                </button>
                <button className="border-2 border-[#00947C] text-[#00947C] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#00947C] hover:text-white transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-[#00947C] rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#00947C] rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded"></div>
                      </div>
                      <div>
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                        <div className="h-3 bg-gray-100 rounded w-16 mt-2"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">99.9% Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-[#707584] max-w-3xl mx-auto">
              Comprehensive technology services tailored to meet your business needs 
              and drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Infrastructure",
                description: "Scalable, secure, and reliable cloud solutions for modern businesses.",
                icon: "☁️"
              },
              {
                title: "Enterprise Security",
                description: "Advanced cybersecurity measures to protect your digital assets.",
                icon: "🔒"
              },
              {
                title: "Data Analytics",
                description: "Transform raw data into actionable insights for better decisions.",
                icon: "📊"
              },
              {
                title: "Digital Transformation",
                description: "Modernize your operations with cutting-edge technology.",
                icon: "⚡"
              },
              {
                title: "IT Consulting",
                description: "Expert guidance to optimize your technology investments.",
                icon: "💡"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support to keep you running.",
                icon: "🛟"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#00947C] hover:shadow-lg transition-all duration-300 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00947C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#707584] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00947C] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss how our solutions can drive your success forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#00947C] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-[#00947C] transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#00947C] mb-4">
                Fortitude
              </div>
              <p className="text-gray-400">
                Empowering businesses with innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cloud Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fortitude NICSA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-[#00947C] hover:bg-[#007A66] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </button>
        
        {/* Chat Widget (when opened) */}
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#00947C] text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Live Support</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 h-64 bg-gray-50">
              <div className="bg-white p-3 rounded-lg mb-3 shadow-sm">
                <p className="text-sm text-gray-700">
                  👋 Hi! How can we help you today?
                </p>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#00947C]"
                />
                <button className="bg-[#00947C] text-white px-4 py-2 rounded-r-lg hover:bg-[#007A66] transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FortitudeWebsite; 