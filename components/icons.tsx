import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

// IT Security / Shield Icon
export const SecurityIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2L4 7V12C4 16.5 6.84 20.74 11 21.9C11.35 22.02 11.66 22.02 12 21.9C16.16 20.74 19 16.5 19 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Cloud Solutions Icon
export const CloudIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18.5 10C18.5 10 18.5 10 18.5 10C18.5 6.13 15.37 3 11.5 3C8.18 3 5.42 5.18 4.61 8.16C2.5 8.68 1 10.54 1 12.75C1 15.37 3.13 17.5 5.75 17.5H18.25C20.32 17.5 22 15.82 22 13.75C22 11.91 20.68 10.38 18.93 10.09C18.78 10.06 18.64 10.03 18.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14L12 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Service Desk / Support Icon
export const SupportIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 22C12 22 21 18 21 12V5L12 2L3 5V12C3 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15.5 10.5L17.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.5 15.5L8.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15.5 13.5L17.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.5 8.5L8.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// IT Consulting / Strategy Icon
export const ConsultingIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M21 8.5C21 7.67 20.33 7 19.5 7H14.5C13.67 7 13 7.67 13 8.5V15.5C13 16.33 13.67 17 14.5 17H19.5C20.33 17 21 16.33 21 15.5V8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 8.5C3 7.67 3.67 7 4.5 7H9.5C10.33 7 11 7.67 11 8.5V15.5C11 16.33 10.33 17 9.5 17H4.5C3.67 17 3 16.33 3 15.5V8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7V5C7 3.9 7.9 3 9 3H15C16.1 3 17 3.9 17 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V19C12 20.1 11.1 21 10 21H14C12.9 21 12 20.1 12 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="12" r="1" fill="currentColor"/>
    <circle cx="17" cy="12" r="1" fill="currentColor"/>
  </svg>
)

// Managed IT Services / Server Icon
export const ManagedServicesIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="3" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="2" y="12" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="6" r="1" fill="currentColor"/>
    <circle cx="10" cy="6" r="1" fill="currentColor"/>
    <circle cx="6" cy="15" r="1" fill="currentColor"/>
    <circle cx="10" cy="15" r="1" fill="currentColor"/>
    <path d="M18 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Cyber Security / Lock Icon
export const CyberSecurityIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2C9.24 2 7 4.24 7 7V10H6C4.9 10 4 10.9 4 12V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V12C20 10.9 19.1 10 18 10H17V7C17 4.24 14.76 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10V7C9 5.35 10.35 4 12 4C13.65 4 15 5.35 15 7V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Global Network Icon
export const GlobalIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// 24/7 Support / Clock Icon
export const Support247Icon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 14L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 10L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 16L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Award / Certification Icon
export const CertificationIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 15L8.5 21.5L10 17L6 17L7.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15L15.5 21.5L14 17L18 17L16.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6L13 8L15 8.5L13.5 10L14 12L12 11L10 12L10.5 10L9 8.5L11 8L12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Growth / Scalable Icon
export const ScalableIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M22 2L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="13" width="4" height="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="10" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="17" y="5" width="4" height="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Check Circle / Success Icon
export const SuccessIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Team / Users Icon
export const TeamIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 19V17C3 15.35 4.35 14 6 14H12C13.65 14 15 15.35 15 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 14H18C19.65 14 21 15.35 21 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Arrow Right Icon
export const ArrowRightIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Hardware / Equipment Icon
export const HardwareIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="5" y="6" width="14" height="8" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Network / Wireless Icon
export const NetworkIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M5 12.55C6.97 10.6 9.41 9.5 12 9.5C14.59 9.5 17.03 10.6 19 12.55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.42 9C4.34 6.08 8.06 4.5 12 4.5C15.94 4.5 19.66 6.08 22.58 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.53 16.11C9.51 15.13 10.73 14.6 12 14.6C13.27 14.6 14.49 15.13 15.47 16.11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="19" r="1" fill="currentColor"/>
  </svg>
)

// Relocation / Moving Icon
export const RelocationIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M20 8H17L14 2H10L7 8H4L2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12L20 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 8V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 16L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Recruitment / Hiring Icon
export const RecruitmentIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 20V19C5 16.24 7.24 14 10 14H14C16.76 14 19 16.24 19 19V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7L17 8L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// E-Waste / Recycling Icon
export const EWasteIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 3L14.5 7H17L19 11L17 15H14.5L12 19L9.5 15H7L5 11L7 7H9.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V11L14 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Asset Management Icon
export const AssetIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M17.5 15.5L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Custom Solutions Icon
export const CustomIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2L14.5 4.5L18 3L19 6.5L22 7.5L20.5 11L22 14.5L19 15.5L18 19L14.5 17.5L12 20L9.5 17.5L6 19L5 15.5L2 14.5L3.5 11L2 7.5L5 6.5L6 3L9.5 4.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Workforce Solutions Icon
export const WorkforceIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Onsite Support Icon
export const OnsiteIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2L4 7V11C4 15.5 6.5 19.5 10.5 20.8C11 20.9 11.5 21 12 21C12.5 21 13 20.9 13.5 20.8C17.5 19.5 20 15.5 20 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Menu Icon
export const MenuIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Close Icon
export const CloseIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Chevron Down Icon
export const ChevronDownIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Monitoring / Eye Icon
export const MonitoringIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Alert / Warning Icon
export const AlertIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor"/>
  </svg>
)

// Compliance / File Check Icon
export const ComplianceIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 15L11 17L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Speed / Performance Icon
export const PerformanceIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6V12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Settings / Configuration Icon
export const SettingsIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 1V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 18V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4.22 4.22L7.05 7.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16.95 16.95L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M1 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4.22 19.78L7.05 16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16.95 7.05L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Database Icon
export const DatabaseIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 5C21 6.66 16.97 8 12 8C7.03 8 3 6.66 3 5" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Export all icons as a collection
export const Icons = {
  Security: SecurityIcon,
  Cloud: CloudIcon,
  Support: SupportIcon,
  Consulting: ConsultingIcon,
  ManagedServices: ManagedServicesIcon,
  CyberSecurity: CyberSecurityIcon,
  Global: GlobalIcon,
  Support247: Support247Icon,
  Certification: CertificationIcon,
  Scalable: ScalableIcon,
  Success: SuccessIcon,
  Team: TeamIcon,
  ArrowRight: ArrowRightIcon,
  Hardware: HardwareIcon,
  Network: NetworkIcon,
  Relocation: RelocationIcon,
  Recruitment: RecruitmentIcon,
  EWaste: EWasteIcon,
  Asset: AssetIcon,
  Custom: CustomIcon,
  Workforce: WorkforceIcon,
  Onsite: OnsiteIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
  ChevronDown: ChevronDownIcon,
  Monitoring: MonitoringIcon,
  Alert: AlertIcon,
  Compliance: ComplianceIcon,
  Performance: PerformanceIcon,
  Settings: SettingsIcon,
  Database: DatabaseIcon
}