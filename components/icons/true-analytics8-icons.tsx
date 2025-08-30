import React from 'react'

interface IconProps {
  className?: string
}

// Data Strategy - Complex overlapping geometric patterns
export const DataStrategyIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer hexagon framework */}
    <path d="M50 10L75 25V45L75 75L50 90L25 75V45V25L50 10Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Inner diamond grid */}
    <path d="M50 20L65 35L50 50L35 35L50 20Z" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M50 50L65 65L50 80L35 65L50 50Z" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M35 35L50 50L65 35M35 65L50 50L65 65" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Circular orbits */}
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
    
    {/* Connection nodes */}
    <circle cx="50" cy="20" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    <circle cx="65" cy="35" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    <circle cx="65" cy="65" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    <circle cx="50" cy="80" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    <circle cx="35" cy="65" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    <circle cx="35" cy="35" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    
    {/* Flowing data lines */}
    <path d="M20 30Q30 40 40 30T60 30T80 30" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    <path d="M20 50Q30 60 40 50T60 50T80 50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    <path d="M20 70Q30 80 40 70T60 70T80 70" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Central core */}
    <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="50" cy="50" r="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1"/>
  </svg>
)

// Data Management - Layered architectural structure
export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base platform layers */}
    <ellipse cx="50" cy="75" rx="35" ry="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    <ellipse cx="50" cy="65" rx="30" ry="7" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    <ellipse cx="50" cy="55" rx="25" ry="6" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Vertical pillars */}
    <path d="M30 25V75M40 20V75M50 15V75M60 20V75M70 25V75" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Cross connections */}
    <path d="M30 35H70M30 45H70M30 55H70M30 65H70" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Top structure */}
    <path d="M50 15L70 25V35L50 45L30 35V25L50 15Z" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M40 20L60 20M35 30L65 30M40 40L60 40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Floating elements */}
    <circle cx="25" cy="30" r="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.3"/>
    <circle cx="75" cy="30" r="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.3"/>
    
    {/* Data flow indicators */}
    <path d="M50 45V55M45 50L50 55L55 50" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M35 25L30 20M65 25L70 20" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
  </svg>
)

// Analytics - Complex data visualization
export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid system */}
    <path d="M20 20H80V80H20V20Z" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
    <path d="M20 35H80M20 50H80M20 65H80" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
    <path d="M35 20V80M50 20V80M65 20V80" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
    
    {/* Multiple data streams */}
    <path d="M20 70Q30 60 35 65T45 60T55 55T65 45T80 40" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M20 60Q25 50 30 55T40 45T50 40T60 35T70 30T80 25" stroke="currentColor" strokeWidth="0.5" opacity="0.7"/>
    <path d="M20 50S30 45 35 40S45 35 50 30S60 25 65 20S75 15 80 20" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Data points with halos */}
    <g opacity="0.8">
      <circle cx="35" cy="65" r="2" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="35" cy="65" r="4" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    </g>
    <g opacity="0.8">
      <circle cx="45" cy="60" r="2" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="45" cy="60" r="4" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    </g>
    <g opacity="0.8">
      <circle cx="55" cy="55" r="2" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="55" cy="55" r="4" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    </g>
    <g opacity="0.8">
      <circle cx="65" cy="45" r="2" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="65" cy="45" r="4" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    </g>
    
    {/* Projection lines */}
    <path d="M35 65V75M45 60V75M55 55V75M65 45V75" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="1 1"/>
    <path d="M35 65H25M45 60H25M55 55H25M65 45H25" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="1 1"/>
    
    {/* Decorative elements */}
    <path d="M15 15L25 25M75 75L85 85M15 85L25 75M75 25L85 15" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
  </svg>
)

// Cloud Services - Multi-layered cloud architecture
export const CloudServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background grid */}
    <path d="M30 30Q30 20 40 20Q45 10 55 10Q65 10 70 20Q80 20 80 30Q90 30 90 40Q90 50 80 50Q80 60 70 60Q70 70 60 70Q50 70 40 70Q30 70 30 60Q20 60 20 50Q20 40 30 40Q30 30 30 30Z" 
          stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
    
    {/* Primary cloud structure */}
    <path d="M35 45Q35 35 45 35Q48 28 58 28Q68 28 71 35Q81 35 81 45Q81 55 71 55H45Q35 55 35 45Z" 
          stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Internal architecture */}
    <rect x="45" y="40" width="10" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <rect x="55" y="40" width="10" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <rect x="50" y="35" width="10" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Connection paths */}
    <path d="M50 50V65M45 60L50 65L55 60" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M40 45H30M30 45L25 40M30 45L25 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M70 45H80M80 45L85 40M80 45L85 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Orbital elements */}
    <circle cx="30" cy="30" r="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.3"/>
    <circle cx="70" cy="30" r="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.3"/>
    <circle cx="50" cy="70" r="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.3"/>
    
    {/* Data flow streams */}
    <path d="M20 20Q30 25 40 20T60 20T80 20" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    <path d="M20 75Q30 80 40 75T60 75T80 75" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
  </svg>
)

// IT Support - Technical support network
export const ITSupportIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central hub */}
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Radiating support network */}
    <g>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 50 + 15 * Math.cos(rad)
        const y1 = 50 + 15 * Math.sin(rad)
        const x2 = 50 + 35 * Math.cos(rad)
        const y2 = 50 + 35 * Math.sin(rad)
        const x3 = 50 + 40 * Math.cos(rad)
        const y3 = 50 + 40 * Math.sin(rad)
        return (
          <g key={i}>
            <path d={`M${x1} ${y1}L${x2} ${y2}`} stroke="currentColor" strokeWidth="0.5"/>
            <circle cx={x3} cy={y3} r="3" stroke="currentColor" strokeWidth="0.5"/>
          </g>
        )
      })}
    </g>
    
    {/* Technical patterns */}
    <path d="M35 35L65 65M65 35L35 65" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    <path d="M50 30V70M30 50H70" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    
    {/* Corner elements */}
    <path d="M20 20L25 20L20 25M80 20L75 20L80 25M20 80L25 80L20 75M80 80L75 80L80 75" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Floating indicators */}
    <circle cx="25" cy="25" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="75" cy="25" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="25" cy="75" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="75" cy="75" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
  </svg>
)

// Security - Multi-layered security shield
export const SecurityIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer shield */}
    <path d="M50 15L25 25V45C25 65 35 75 50 85C65 75 75 65 75 45V25L50 15Z" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Inner shields */}
    <path d="M50 25L35 32V45C35 55 40 62 50 68C60 62 65 55 65 45V32L50 25Z" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M50 35L42 39V45C42 50 45 54 50 57C55 54 58 50 58 45V39L50 35Z" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Circuit patterns */}
    <path d="M30 35H40M40 35V45M40 45H50M50 45V55M50 55H60M60 55V45M60 45H70" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    <circle cx="30" cy="35" r="1.5" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="70" cy="35" r="1.5" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="40" cy="45" r="1.5" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="60" cy="45" r="1.5" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="50" cy="55" r="1.5" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Lock mechanism */}
    <rect x="45" y="45" width="10" height="8" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M47 45V42C47 40 48 38 50 38C52 38 53 40 53 42V45" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Surrounding elements */}
    <path d="M20 20L15 15M80 20L85 15M20 70L15 75M80 70L85 75" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    <circle cx="50" cy="85" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5" opacity="0.5"/>
  </svg>
)

// Consulting - Strategic connections
export const ConsultingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central diamond structure */}
    <path d="M50 20L70 40L50 60L30 40L50 20Z" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M50 30L60 40L50 50L40 40L50 30Z" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Extending pathways */}
    <path d="M50 20V10M70 40H80M50 60V70M30 40H20" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M50 10L45 5M50 10L55 5" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M80 40L85 35M80 40L85 45" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M50 70L45 75M50 70L55 75" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M20 40L15 35M20 40L15 45" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Strategic nodes */}
    <circle cx="50" cy="10" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="80" cy="40" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="50" cy="70" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="20" cy="40" r="3" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Orbital rings */}
    <circle cx="50" cy="40" r="25" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 2"/>
    <circle cx="50" cy="40" r="35" stroke="currentColor" strokeWidth="0.3" opacity="0.2" strokeDasharray="3 3"/>
    
    {/* Corner accents */}
    <path d="M25 15L30 15L25 20M75 15L70 15L75 20M25 65L30 65L25 60M75 65L70 65L75 60" 
          stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
  </svg>
)

// Custom Solutions - Interlocking components
export const CustomSolutionsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Interlocking gears */}
    <circle cx="35" cy="40" r="15" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="65" cy="40" r="15" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="50" cy="60" r="15" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Gear teeth patterns */}
    <g opacity="0.5">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 35 + 15 * Math.cos(rad)
        const y = 40 + 15 * Math.sin(rad)
        return <path key={`g1-${i}`} d={`M${x} ${y}L${35 + 18 * Math.cos(rad)} ${40 + 18 * Math.sin(rad)}`} stroke="currentColor" strokeWidth="0.5"/>
      })}
    </g>
    <g opacity="0.5">
      {[30, 90, 150, 210, 270, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 65 + 15 * Math.cos(rad)
        const y = 40 + 15 * Math.sin(rad)
        return <path key={`g2-${i}`} d={`M${x} ${y}L${65 + 18 * Math.cos(rad)} ${40 + 18 * Math.sin(rad)}`} stroke="currentColor" strokeWidth="0.5"/>
      })}
    </g>
    
    {/* Central connections */}
    <circle cx="35" cy="40" r="5" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <circle cx="65" cy="40" r="5" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <circle cx="50" cy="60" r="5" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Connection lines */}
    <path d="M35 40L50 60L65 40" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    
    {/* Floating elements */}
    <path d="M20 20Q30 15 40 20T60 20T80 20" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    <path d="M20 80Q30 85 40 80T60 80T80 80" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    
    {/* Corner markers */}
    <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5" opacity="0.5"/>
    <circle cx="80" cy="20" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5" opacity="0.5"/>
    <circle cx="50" cy="85" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5" opacity="0.5"/>
  </svg>
)

// Infrastructure - Complex network grid
export const InfrastructureIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main grid structure */}
    <rect x="30" y="20" width="40" height="60" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M30 30H70M30 40H70M30 50H70M30 60H70M30 70H70" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    <path d="M40 20V80M50 20V80M60 20V80" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    
    {/* Node points */}
    <g>
      {[30, 40, 50, 60, 70].map(y => 
        [30, 40, 50, 60, 70].map(x => 
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="currentColor" opacity="0.5"/>
        )
      )}
    </g>
    
    {/* External connections */}
    <path d="M20 25H30M70 25H80M20 35H30M70 35H80M20 45H30M70 45H80M20 55H30M70 55H80M20 65H30M70 65H80M20 75H30M70 75H80" 
          stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Terminal nodes */}
    <circle cx="20" cy="25" r="2" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="80" cy="25" r="2" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="20" cy="55" r="2" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="80" cy="55" r="2" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="20" cy="75" r="2" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="80" cy="75" r="2" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Top and bottom connections */}
    <path d="M40 20V10M50 20V10M60 20V10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M40 80V90M50 80V90M60 80V90" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Decorative frame */}
    <path d="M15 15L25 15L15 25M85 15L75 15L85 25M15 85L25 85L15 75M85 85L75 85L85 75" 
          stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
  </svg>
)