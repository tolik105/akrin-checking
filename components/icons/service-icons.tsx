import React from 'react'

interface IconProps {
  className?: string
}

export const DataStrategyIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L8 20V44L32 56L56 44V20L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 32V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 20L32 32L56 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 26V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 26V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="16" rx="20" ry="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 16V32C12 36.4183 20.9543 40 32 40C43.0457 40 52 36.4183 52 32V16" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 32V48C12 52.4183 20.9543 56 32 56C43.0457 56 52 52.4183 52 48V32" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 24V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 40V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 40L24 32L32 36L48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="48" cy="20" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 48V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 48V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 48V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 48V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const CloudServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 28C44 18.0589 35.9411 10 26 10C16.0589 10 8 18.0589 8 28C8 36.5 13.5 43.5 21 45.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 40C38 35.5817 41.5817 32 46 32C50.4183 32 54 35.5817 54 40C54 43.5 51.5 46.5 48 47.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 44H48C51.3137 44 54 46.6863 54 50C54 53.3137 51.3137 56 48 56H20C16.6863 56 14 53.3137 14 50C14 46.6863 16.6863 44 20 44Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 28V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 32H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const ConsultingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 56V52C20 47.5817 23.5817 44 28 44H36C40.4183 44 44 47.5817 44 52V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M48 20L52 16L56 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M52 16V28C52 32.4183 48.4183 36 44 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 20L12 16L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V28C12 32.4183 15.5817 36 20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const SecurityIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L12 16V32C12 44 20 52 32 56C44 52 52 44 52 32V16L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 20V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 38H32.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 28L32 36L40 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SupportIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 36.5 9.5 40.5 12 44L8 56L20 52C23.5 54.5 27.5 56 32 56Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 28C22 22.4772 26.4772 18 32 18C37.5228 18 42 22.4772 42 28C42 30.5 41 32.5 39 34C37 35.5 36 37 36 39V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="36" cy="46" r="2" fill="currentColor"/>
  </svg>
)

export const NetworkIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="52" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="52" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="52" cy="52" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M28 28L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 28L48 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 36L16 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 36L48 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const ServerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="8" width="40" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="12" y="24" width="40" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="12" y="40" width="40" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="16" r="2" fill="currentColor"/>
    <circle cx="20" cy="32" r="2" fill="currentColor"/>
    <circle cx="20" cy="48" r="2" fill="currentColor"/>
    <path d="M28 16H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 32H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 48H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const IntegrationIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 32C24 27.5817 20.4183 24 16 24C11.5817 24 8 27.5817 8 32C8 36.4183 11.5817 40 16 40C20.4183 40 24 36.4183 24 32Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M56 32C56 27.5817 52.4183 24 48 24C43.5817 24 40 27.5817 40 32C40 36.4183 43.5817 40 48 40C52.4183 40 56 36.4183 56 32Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 32H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 16V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="48" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const OptimizationIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 44V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 32H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 32H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 32L40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const WorkforceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="44" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 48V44C8 39.5817 11.5817 36 16 36H24C28.4183 36 32 39.5817 32 44V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 48V44C32 39.5817 35.5817 36 40 36H48C52.4183 36 56 39.5817 56 44V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 52H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 52V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const RelocationIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 28H36" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 20V12H28V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 32L52 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M48 20H52V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 36H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 40H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 52H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const RecycleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L20 28H44L32 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 28L12 44L28 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 28L52 44L36 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 36L12 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M48 36L52 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const AssetManagementIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="24" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 24V16C20 13.7909 21.7909 12 24 12H40C42.2091 12 44 13.7909 44 16V24" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 32H44" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 40H44" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 48H36" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="16" r="2" fill="currentColor"/>
  </svg>
)

export const HardwareIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 28H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 36H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M48 28H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M48 36H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 44V52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 44V52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 44V52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="26" y="28" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
)