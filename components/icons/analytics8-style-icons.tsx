import React from 'react'

interface IconProps {
  className?: string
}

// Data Strategy - Abstract interconnected nodes with data flow
export const DataStrategyIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="20" r="4" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="40" r="4" stroke="currentColor" strokeWidth="1"/>
    <circle cx="60" cy="40" r="4" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="60" r="4" stroke="currentColor" strokeWidth="1"/>
    <path d="M40 24V36M40 44V56" stroke="currentColor" strokeWidth="1"/>
    <path d="M24 40H36M44 40H56" stroke="currentColor" strokeWidth="1"/>
    <path d="M37 23L23 37M43 23L57 37" stroke="currentColor" strokeWidth="1"/>
    <path d="M23 43L37 57M57 43L43 57" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M15 20L10 15M65 20L70 15M15 60L10 65M65 60L70 65" stroke="currentColor" strokeWidth="1"/>
  </svg>
)

// Data Management - Layered database with flowing connections
export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="20" rx="16" ry="6" stroke="currentColor" strokeWidth="1"/>
    <path d="M24 20V30C24 33.3137 31.1634 36 40 36C48.8366 36 56 33.3137 56 30V20" stroke="currentColor" strokeWidth="1"/>
    <path d="M24 30V40C24 43.3137 31.1634 46 40 46C48.8366 46 56 43.3137 56 40V30" stroke="currentColor" strokeWidth="1"/>
    <path d="M24 40V50C24 53.3137 31.1634 56 40 56C48.8366 56 56 53.3137 56 50V40" stroke="currentColor" strokeWidth="1"/>
    <path d="M15 25L24 25M56 25L65 25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M15 35L24 35M56 35L65 35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M15 45L24 45M56 45L65 45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <circle cx="40" cy="65" r="2" stroke="currentColor" strokeWidth="1"/>
    <path d="M40 56V63" stroke="currentColor" strokeWidth="1"/>
  </svg>
)

// Analytics - Abstract visualization with growth trends
export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 65L25 50L35 55L45 35L55 40L65 25" stroke="currentColor" strokeWidth="1"/>
    <circle cx="15" cy="65" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="25" cy="50" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="35" cy="55" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="45" cy="35" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="55" cy="40" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="65" cy="25" r="2" stroke="currentColor" strokeWidth="1"/>
    <path d="M15 15V65H65" stroke="currentColor" strokeWidth="1"/>
    <path d="M20 60H25M30 60H35M40 60H45M50 60H55M60 60H65" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M20 20V15M20 30V25M20 40V35M20 50V45" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)

// Generation AI - Neural network inspired design
export const GenerationAIIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="55" cy="25" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="25" cy="55" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="55" cy="55" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="40" r="6" stroke="currentColor" strokeWidth="1"/>
    <path d="M28 28L36 36M52 28L44 36M28 52L36 44M52 52L44 44" stroke="currentColor" strokeWidth="1"/>
    <path d="M25 28V52M55 28V52M28 25H52M28 55H52" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" opacity="0.5"/>
    <path d="M40 15V25M40 55V65M15 40H25M55 40H65" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="15" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="65" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="15" cy="40" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="65" cy="40" r="2" stroke="currentColor" strokeWidth="1"/>
  </svg>
)

// Data Governance - Shield with data flow patterns
export const DataGovernanceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 15L25 22V35C25 47 32 55 40 60C48 55 55 47 55 35V22L40 15Z" stroke="currentColor" strokeWidth="1"/>
    <path d="M40 25V50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M30 30H50M30 40H50" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <circle cx="35" cy="35" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="45" cy="35" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="45" r="2" stroke="currentColor" strokeWidth="1"/>
    <path d="M15 30L25 30M55 30L65 30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M20 45L25 42M60 45L55 42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
  </svg>
)

// Modern Data Architecture - Abstract building blocks
export const ModernDataIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="15" width="30" height="10" stroke="currentColor" strokeWidth="1"/>
    <rect x="15" y="30" width="20" height="10" stroke="currentColor" strokeWidth="1"/>
    <rect x="45" y="30" width="20" height="10" stroke="currentColor" strokeWidth="1"/>
    <rect x="25" y="45" width="30" height="10" stroke="currentColor" strokeWidth="1"/>
    <rect x="35" y="60" width="10" height="5" stroke="currentColor" strokeWidth="1"/>
    <path d="M40 25V30M25 40V45M55 40V45M40 55V60" stroke="currentColor" strokeWidth="1"/>
    <path d="M10 20L15 20M65 20L70 20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M10 35L15 35M65 35L70 35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M10 50L15 50M65 50L70 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <circle cx="40" cy="20" r="1" fill="currentColor"/>
    <circle cx="25" cy="35" r="1" fill="currentColor"/>
    <circle cx="55" cy="35" r="1" fill="currentColor"/>
    <circle cx="40" cy="50" r="1" fill="currentColor"/>
  </svg>
)

// Custom Solutions - Interconnected puzzle pieces
export const CustomSolutionsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 25H35C35 20 45 20 45 25H50V35C55 35 55 45 50 45V50H40C40 55 30 55 30 50H25V40C20 40 20 30 25 30V25Z" stroke="currentColor" strokeWidth="1"/>
    <circle cx="30" cy="30" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="30" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="30" cy="50" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="50" r="2" stroke="currentColor" strokeWidth="1"/>
    <path d="M32 32L48 48M48 32L32 48" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M15 15L25 25M55 25L65 15M25 55L15 65M55 55L65 65" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
  </svg>
)

// Cloud Architecture - Abstract cloud with data nodes
export const CloudArchitectureIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 35C50 30 46 26 41 26C36 26 32 30 32 35C28 35 25 38 25 42C25 46 28 49 32 49H48C52 49 55 46 55 42C55 38 52 35 48 35H50Z" stroke="currentColor" strokeWidth="1"/>
    <circle cx="35" cy="38" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="45" cy="38" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="44" r="2" stroke="currentColor" strokeWidth="1"/>
    <path d="M35 38L45 38M35 38L40 44M45 38L40 44" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M20 20L30 26M60 20L50 26" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M40 49V60M30 55L40 60L50 55" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="60" cy="20" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="60" r="2" stroke="currentColor" strokeWidth="1"/>
  </svg>
)

// Support Services - Interconnected support network
export const SupportServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="20" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="55" cy="30" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="55" cy="50" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="60" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="25" cy="50" r="3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="25" cy="30" r="3" stroke="currentColor" strokeWidth="1"/>
    <path d="M40 23V37M52 32L42 38M52 48L42 42M40 43V57M28 48L38 42M28 32L38 38" stroke="currentColor" strokeWidth="1"/>
    <circle cx="40" cy="40" r="3" stroke="currentColor" strokeWidth="1"/>
    <path d="M15 15L25 27M65 15L55 27M15 65L25 53M65 65L55 53" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" opacity="0.5"/>
  </svg>
)

// IT Infrastructure - Network grid pattern
export const ITInfrastructureIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="15" width="20" height="8" stroke="currentColor" strokeWidth="1"/>
    <rect x="30" y="28" width="20" height="8" stroke="currentColor" strokeWidth="1"/>
    <rect x="30" y="41" width="20" height="8" stroke="currentColor" strokeWidth="1"/>
    <rect x="30" y="54" width="20" height="8" stroke="currentColor" strokeWidth="1"/>
    <path d="M25 19H30M50 19H55M25 32H30M50 32H55M25 45H30M50 45H55M25 58H30M50 58H55" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="19" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="60" cy="19" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="32" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="60" cy="32" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="45" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="60" cy="45" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="20" cy="58" r="2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="60" cy="58" r="2" stroke="currentColor" strokeWidth="1"/>
    <path d="M15 19V58M65 19V58" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
    <circle cx="35" cy="19" r="1" fill="currentColor"/>
    <circle cx="45" cy="19" r="1" fill="currentColor"/>
    <circle cx="35" cy="32" r="1" fill="currentColor"/>
    <circle cx="45" cy="32" r="1" fill="currentColor"/>
  </svg>
)