import React from 'react'

interface IconProps {
  className?: string
}

// Managed Services - Continuous monitoring and management
export const ManagedServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central monitoring dashboard */}
    <rect x="35" y="25" width="30" height="20" stroke="currentColor" strokeWidth="1.5" rx="2"/>
    <path d="M35 30H65" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="27.5" r="1" fill="currentColor"/>
    <circle cx="45" cy="27.5" r="1" fill="currentColor"/>
    
    {/* Flowing data streams */}
    <path d="M20 55C25 50 30 52 35 48C40 44 45 46 50 42C55 38 60 40 65 36C70 32 75 34 80 30" 
          stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M20 65C25 60 30 62 35 58C40 54 45 56 50 52C55 48 60 50 65 46C70 42 75 44 80 40" 
          stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    {/* Service nodes with orange accents */}
    <circle cx="25" cy="60" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="25" cy="60" r="3" fill="#FF5C35"/>
    
    <circle cx="50" cy="70" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="50" cy="70" r="3" fill="#FF5C35"/>
    
    <circle cx="75" cy="60" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="75" cy="60" r="3" fill="#FF5C35"/>
    
    {/* Connection lines */}
    <path d="M33 58L42 68M58 68L67 58" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M50 45V62" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)

// IT Security - Shield with layered protection
export const ITSecurityIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main shield outline */}
    <path d="M50 20L30 28V45C30 60 38 70 50 75C62 70 70 60 70 45V28L50 20Z" 
          stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Inner shield layer */}
    <path d="M50 30L40 34V45C40 52 44 57 50 60C56 57 60 52 60 45V34L50 30Z" 
          stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    {/* Lock icon with orange accent */}
    <rect x="45" y="45" width="10" height="8" stroke="currentColor" strokeWidth="1" rx="1"/>
    <path d="M47 45V42C47 40 48.5 38 50 38C51.5 38 53 40 53 42V45" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="49" r="1.5" fill="#FF5C35"/>
    
    {/* Protection waves */}
    <path d="M25 25C30 20 35 22 40 18" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M60 18C65 22 70 20 75 25" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M25 75C30 80 35 78 40 82" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M60 82C65 78 70 80 75 75" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
  </svg>
)

// IT Support - Connected support network
export const ITSupportIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central support hub */}
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="50" cy="50" r="5" fill="#FF5C35"/>
    
    {/* Support channels as abstract shapes */}
    <path d="M35 20L40 30M65 20L60 30" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 35L30 40M80 35L70 40" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 65L30 60M80 65L70 60" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M35 80L40 70M65 80L60 70" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Communication dots */}
    <circle cx="35" cy="20" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="65" cy="20" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="35" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="80" cy="35" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="65" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="80" cy="65" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="35" cy="80" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="65" cy="80" r="3" stroke="currentColor" strokeWidth="1"/>
    
    {/* Flowing connections */}
    <path d="M45 45C40 40 35 35 30 30" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M55 45C60 40 65 35 70 30" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M45 55C40 60 35 65 30 70" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M55 55C60 60 65 65 70 70" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
  </svg>
)

// IT Consulting - Strategic planning visualization
export const ITConsultingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract document/plan shapes */}
    <rect x="25" y="20" width="20" height="25" stroke="currentColor" strokeWidth="1.5" rx="2" 
          transform="rotate(-10 35 32.5)"/>
    <rect x="35" y="25" width="20" height="25" stroke="currentColor" strokeWidth="1.5" rx="2" 
          transform="rotate(5 45 37.5)"/>
    <rect x="45" y="30" width="20" height="25" stroke="currentColor" strokeWidth="1.5" rx="2" 
          transform="rotate(-5 55 42.5)" fill="#FF5C35" opacity="0.2"/>
    
    {/* Strategic arrow paths */}
    <path d="M30 65L45 55L60 60L75 50" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M73 48L75 50L73 52" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Planning nodes */}
    <circle cx="30" cy="65" r="3" fill="currentColor"/>
    <circle cx="45" cy="55" r="3" fill="currentColor"/>
    <circle cx="60" cy="60" r="3" fill="#FF5C35"/>
    <circle cx="75" cy="50" r="3" fill="currentColor"/>
    
    {/* Abstract data visualization */}
    <path d="M25 75L30 70M35 75L40 70M45 75L50 70" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)

// Cloud Services - Abstract cloud with flowing connections
export const CloudServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main cloud shape */}
    <path d="M30 45C30 38 35 35 40 35C42 28 48 25 55 25C62 25 67 28 69 35C74 35 79 38 79 45C79 52 74 55 69 55H40C35 55 30 52 30 45Z" 
          stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Data flow arrows with orange accents */}
    <path d="M25 65L35 60" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M35 60L33 62M35 60L37 62" stroke="#FF5C35" strokeWidth="1.5"/>
    
    <path d="M50 55L50 70" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M50 70L48 68M50 70L52 68" stroke="#FF5C35" strokeWidth="1.5"/>
    
    <path d="M65 60L75 65" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M65 60L63 62M65 60L67 58" stroke="#FF5C35" strokeWidth="1.5"/>
    
    {/* Cloud internal structure */}
    <circle cx="45" cy="40" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="55" cy="37" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="60" cy="45" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    {/* Connection nodes */}
    <circle cx="25" cy="65" r="2" fill="currentColor"/>
    <circle cx="50" cy="70" r="2" fill="currentColor"/>
    <circle cx="75" cy="65" r="2" fill="currentColor"/>
  </svg>
)

// Custom Solutions - Modular components fitting together
export const CustomSolutionsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Puzzle-like pieces */}
    <path d="M30 30H45C45 25 50 25 50 30H65V45C70 45 70 50 65 50V65H50C50 70 45 70 45 65H30V50C25 50 25 45 30 45V30Z" 
          stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Inner component with orange accent */}
    <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="1" rx="2"/>
    <circle cx="50" cy="50" r="5" fill="#FF5C35" opacity="0.3"/>
    
    {/* Extending connectors */}
    <path d="M20 20L30 30M70 30L80 20M30 70L20 80M70 70L80 80" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    {/* Corner nodes */}
    <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="80" cy="20" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="80" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="80" cy="80" r="3" stroke="currentColor" strokeWidth="1"/>
    
    {/* Integration indicators */}
    <path d="M45 45L55 55M55 45L45 55" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)

// Asset Management - Database layers with tracking
export const AssetManagementIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Database cylinders */}
    <ellipse cx="50" cy="30" rx="25" ry="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M25 30V50C25 54 35 57 50 57C65 57 75 54 75 50V30" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M25 50V70C25 74 35 77 50 77C65 77 75 74 75 70V50" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Data flow with orange accent */}
    <path d="M50 57V65" stroke="#FF5C35" strokeWidth="2"/>
    <path d="M50 65L47 62M50 65L53 62" stroke="#FF5C35" strokeWidth="2"/>
    
    {/* Tracking indicators */}
    <rect x="30" y="35" width="8" height="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <rect x="42" y="35" width="8" height="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <rect x="54" y="35" width="8" height="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    <rect x="30" y="55" width="8" height="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <rect x="42" y="55" width="8" height="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <rect x="54" y="55" width="8" height="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    {/* Status dots */}
    <circle cx="34" cy="38" r="1" fill="#FF5C35"/>
    <circle cx="46" cy="38" r="1" fill="currentColor"/>
    <circle cx="58" cy="38" r="1" fill="currentColor"/>
  </svg>
)

// Hardware Maintenance - Circuit board with tools
export const HardwareMaintenanceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circuit board */}
    <rect x="30" y="35" width="40" height="30" stroke="currentColor" strokeWidth="1.5" rx="2"/>
    
    {/* Circuit traces */}
    <path d="M35 45H45M45 45V55M45 55H55M55 55V45M55 45H65" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M40 40V50M50 40V50M60 40V50" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    {/* Components with orange accents */}
    <rect x="42" y="47" width="6" height="6" stroke="currentColor" strokeWidth="1"/>
    <circle cx="45" cy="50" r="1" fill="#FF5C35"/>
    
    <circle cx="55" cy="45" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="55" cy="45" r="1" fill="#FF5C35"/>
    
    {/* Tool indicators */}
    <path d="M20 25L25 20M25 20L30 25M25 20V30" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M70 25C72 23 74 23 76 25C78 27 78 29 76 31C74 33 72 33 70 31L70 25Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M73 28L78 33" stroke="currentColor" strokeWidth="1"/>
    
    {/* Diagnostic waves */}
    <path d="M25 70C30 68 35 72 40 70C45 68 50 72 55 70C60 68 65 72 70 70" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)

// Network/Infrastructure - Connected grid system
export const InfrastructureIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Server racks */}
    <rect x="20" y="30" width="15" height="40" stroke="currentColor" strokeWidth="1.5" rx="2"/>
    <rect x="42.5" y="25" width="15" height="50" stroke="currentColor" strokeWidth="1.5" rx="2"/>
    <rect x="65" y="30" width="15" height="40" stroke="currentColor" strokeWidth="1.5" rx="2"/>
    
    {/* Server indicators with orange accents */}
    <circle cx="27.5" cy="35" r="1" fill="#FF5C35"/>
    <circle cx="27.5" cy="40" r="1" fill="currentColor"/>
    <circle cx="27.5" cy="45" r="1" fill="currentColor"/>
    
    <circle cx="50" cy="30" r="1" fill="currentColor"/>
    <circle cx="50" cy="35" r="1" fill="#FF5C35"/>
    <circle cx="50" cy="40" r="1" fill="currentColor"/>
    
    <circle cx="72.5" cy="35" r="1" fill="currentColor"/>
    <circle cx="72.5" cy="40" r="1" fill="currentColor"/>
    <circle cx="72.5" cy="45" r="1" fill="#FF5C35"/>
    
    {/* Network connections */}
    <path d="M35 50H42.5M57.5 50H65" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M27.5 70V80M50 75V80M72.5 70V80" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Connection nodes */}
    <circle cx="27.5" cy="80" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="80" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="72.5" cy="80" r="2" stroke="currentColor" strokeWidth="1"/>
    
    {/* Data flow waves */}
    <path d="M15 15C20 13 25 17 30 15C35 13 40 17 45 15" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M55 15C60 13 65 17 70 15C75 13 80 17 85 15" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
  </svg>
)

// Wireless/Network Survey - Signal propagation
export const WirelessIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central router/AP */}
    <rect x="45" y="45" width="10" height="10" stroke="currentColor" strokeWidth="1.5" rx="2"/>
    <circle cx="50" cy="50" r="2" fill="#FF5C35"/>
    
    {/* Signal waves */}
    <path d="M40 40C35 35 35 65 40 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M60 40C65 35 65 65 60 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    
    <path d="M35 35C25 25 25 75 35 65" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M65 35C75 25 75 75 65 65" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    
    <path d="M30 30C15 15 15 85 30 70" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
    <path d="M70 30C85 15 85 85 70 70" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
    
    {/* Signal strength indicators */}
    <rect x="20" y="80" width="3" height="5" fill="currentColor" opacity="0.3"/>
    <rect x="25" y="78" width="3" height="7" fill="currentColor" opacity="0.5"/>
    <rect x="30" y="76" width="3" height="9" fill="currentColor" opacity="0.7"/>
    <rect x="35" y="74" width="3" height="11" fill="#FF5C35"/>
    
    {/* Coverage points */}
    <circle cx="25" cy="25" r="1.5" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="75" cy="25" r="1.5" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="25" cy="65" r="1.5" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="75" cy="65" r="1.5" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)