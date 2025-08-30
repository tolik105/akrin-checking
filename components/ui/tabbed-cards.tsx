'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TabItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  content: {
    title: string
    subline: string
    bullets: string[]
  }
}

interface TabbedCardsProps {
  tabs: TabItem[]
}

export function TabbedCards({ tabs }: TabbedCardsProps) {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Diagonal gradient band background motif */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: `repeating-linear-gradient(65deg, #6F3AFF 0px, #6F3AFF 1px, transparent 1px, transparent 60px)`,
            backgroundSize: '240px 120px',
            backgroundPosition: '0 0, 60px 60px'
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 lg:mb-18"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
            Our Comprehensive Service Components
          </h2>
        </motion.div>

        {/* Large Rounded White Card - Mobile Responsive */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          
          {/* Tab Navigation - Mobile Horizontal Scroll */}
          <div className="border-b border-gray-200 pb-4 mb-6 sm:mb-8">
            <div className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-2">
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={`flex-shrink-0 cursor-pointer text-center px-2 sm:px-4 py-2 relative transition-all duration-300 min-w-[120px] sm:min-w-[140px] ${
                   selectedTab === index ? 'border-b-2 border-[hsl(var(--primary))]' : ''
                  }`}
                  role="tab"
                  aria-selected={selectedTab === index}
                  tabIndex={0}
                >
                  {/* Icon Circle - Smaller on mobile */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selectedTab === index
                      ? 'bg-[hsl(var(--primary))]/20'
                      : 'bg-white border-2 border-gray-300'
                  }`}>
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${
                      selectedTab === index ? 'text-white' : 'text-gray-500'
                    }`}>
                      <tab.icon className="w-full h-full" />
                    </div>
                  </div>
                  
                  {/* Label - Responsive text */}
                  <div className={`text-xs sm:text-sm leading-tight ${
                    selectedTab === index 
                      ? 'font-bold text-[hsl(var(--primary))]' 
                      : 'font-medium text-gray-600'
                  }`}>
                    <div className="break-words">{tab.label}</div>
                  </div>

                  {/* Animated Underline */}
                  {selectedTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(var(--primary))]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Panel - Mobile Responsive */}
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="tabpanel"
            className="mt-4 sm:mt-6"
          >
            {tabs[selectedTab] && (
              <div>
                {/* H3 Typography - Responsive */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {tabs[selectedTab].content.title}
                </h3>
                
                {/* Subline - Responsive */}
                <p className="text-lg sm:text-xl text-gray-700 font-normal mb-4 sm:mb-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  {tabs[selectedTab].content.subline}
                </p>

                {/* Bullets - Mobile Optimized */}
                <ul className="space-y-3 sm:space-y-4">
                  {tabs[selectedTab].content.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-500 mr-3 mt-1 flex-shrink-0 text-lg">•</span>
                      <span className="text-gray-700 font-normal text-lg sm:text-xl leading-relaxed" style={{ lineHeight: '1.6' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
