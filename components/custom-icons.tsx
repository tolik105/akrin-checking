// Analytics8-style custom icons with strokeWidth="1.5" and strategic use of #FF5C35 for accents

export const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#0066CC" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="9" fill="#FF5C35" opacity="0.2"/>
    <path d="M8 12L10.5 14.5L16 9" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 8L19 12L15 16" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const CheckSquareIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0066CC" strokeWidth="1.5"/>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#FF5C35" opacity="0.2"/>
    <path d="M8 12L10.5 14.5L16 9" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Relocation page icons
export const PackageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 9.5L7.5 4.5M12 2L2 7V17L12 22L22 17V7L12 2ZM12 22V12" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L22 7V17L12 22V12Z" fill="#FF5C35" opacity="0.2"/>
  </svg>
)

export const ServerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="6" rx="1" stroke="#0066CC" strokeWidth="1.5"/>
    <rect x="3" y="11" width="18" height="6" rx="1" stroke="#0066CC" strokeWidth="1.5"/>
    <rect x="3" y="19" width="18" height="2" rx="1" stroke="#0066CC" strokeWidth="1.5"/>
    <circle cx="6" cy="6" r="1" fill="#FF5C35"/>
    <circle cx="6" cy="14" r="1" fill="#FF5C35"/>
    <path d="M9 6H18M9 14H18" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="3" y="11" width="18" height="6" rx="1" fill="#FF5C35" opacity="0.2"/>
  </svg>
)

export const NetworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2" stroke="#0066CC" strokeWidth="1.5"/>
    <circle cx="6" cy="12" r="2" stroke="#0066CC" strokeWidth="1.5"/>
    <circle cx="18" cy="12" r="2" stroke="#0066CC" strokeWidth="1.5"/>
    <circle cx="12" cy="19" r="2" fill="#FF5C35" opacity="0.2"/>
    <circle cx="12" cy="19" r="2" stroke="#FF5C35" strokeWidth="1.5"/>
    <path d="M12 7V17M6 10L18 10" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.5 10.5L10.5 7.5M16.5 10.5L13.5 7.5M10.5 16.5L7.5 13.5M13.5 16.5L16.5 13.5" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 7V11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11V7L12 2Z" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L4 7V11C4 15.4183 7.58172 19 12 19V2Z" fill="#FF5C35" opacity="0.2"/>
    <path d="M9 12L11 14L15 10" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0066CC" strokeWidth="1.5"/>
    <path d="M16 2V6M8 2V6M3 10H21" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="13" width="4" height="4" rx="0.5" fill="#FF5C35" opacity="0.2"/>
    <rect x="6" y="13" width="4" height="4" rx="0.5" stroke="#FF5C35" strokeWidth="1.5"/>
    <circle cx="16" cy="15" r="1" fill="#FF5C35"/>
  </svg>
)

export const ClipboardListIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3H19C19.5523 3 20 3.44772 20 4V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V4C4 3.44772 4.44772 3 5 3H9V2Z" stroke="#0066CC" strokeWidth="1.5"/>
    <path d="M9 1H15V3H9V1Z" fill="#FF5C35" opacity="0.2"/>
    <path d="M8 10H16M8 14H16M8 18H12" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="18" r="2" fill="#FF5C35" opacity="0.2"/>
    <path d="M15 18L15.5 18.5L17 17" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#0066CC" strokeWidth="1.5"/>
    <circle cx="12" cy="10" r="3" fill="#FF5C35" opacity="0.2"/>
    <circle cx="12" cy="10" r="3" stroke="#FF5C35" strokeWidth="1.5"/>
  </svg>
)

export const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M5 21V7L12 3L19 7V21" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="9" y="9" width="2" height="2" fill="#FF5C35"/>
    <rect x="13" y="9" width="2" height="2" fill="#FF5C35"/>
    <rect x="9" y="13" width="2" height="2" fill="#FF5C35"/>
    <rect x="13" y="13" width="2" height="2" fill="#FF5C35"/>
    <rect x="10" y="17" width="4" height="4" fill="#FF5C35" opacity="0.2"/>
    <rect x="10" y="17" width="4" height="4" stroke="#FF5C35" strokeWidth="1.5"/>
  </svg>
)

export const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="3" stroke="#0066CC" strokeWidth="1.5"/>
    <path d="M3 19C3 16.2386 5.23858 14 8 14C8.5 14 9 14.05 9.5 14.15" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="11" r="3" fill="#FF5C35" opacity="0.2"/>
    <circle cx="16" cy="11" r="3" stroke="#FF5C35" strokeWidth="1.5"/>
    <path d="M16 14C18.7614 14 21 16.2386 21 19V21H11V19C11 17.5 11.5 16 12.5 15" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#FF5C35" opacity="0.2"/>
  </svg>
)

// AI Brain Icon for "AI-Enhanced Everything"
export const AIBrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C13.5 3 14.5 2 16 2C17.5 2 18.5 3 18.5 4.5C18.5 4.5 20 4.5 20 6C20 7.5 19 7.5 19 7.5C19 7.5 21 8.5 21 10.5C21 12.5 19 12.5 19 12.5C19 12.5 20 13 20 14.5C20 16 18.5 16 18.5 16C18.5 16 18.5 17.5 17 18.5C15.5 19.5 14.5 18 14.5 18H9.5C9.5 18 8.5 19.5 7 18.5C5.5 17.5 5.5 16 5.5 16C5.5 16 4 16 4 14.5C4 13 5 12.5 5 12.5C5 12.5 3 12.5 3 10.5C3 8.5 5 7.5 5 7.5C5 7.5 4 7.5 4 6C4 4.5 5.5 4.5 5.5 4.5C5.5 3 6.5 2 8 2C9.5 2 10.5 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="10" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="15" cy="10" r="1.5" fill="currentColor" opacity="0.3"/>
    <path d="M8.5 14C8.5 14 9.5 15.5 12 15.5C14.5 15.5 15.5 14 15.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7V8M12 11V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Lightning Bolt Icon for "Startup Speed, Enterprise Quality"
export const LightningBoltIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2L3 13H11L9 22L21 8H13L15 2H9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 2L3 13H11V8H13L15 2H9Z" fill="currentColor" opacity="0.2"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.3"/>
  </svg>
)

// Innovation Bulb Icon for "SMB-Focused Innovation"
export const InnovationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C15.314 2 18 4.686 18 8C18 10.2091 16.2091 12 15 13V16C15 16.5523 14.5523 17 14 17H10C9.44772 17 9 16.5523 9 16V13C7.79086 12 6 10.2091 6 8C6 4.686 8.686 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2C15.314 2 18 4.686 18 8C18 10.2091 16.2091 12 15 13H9C7.79086 12 6 10.2091 6 8C6 4.686 8.686 2 12 2Z" fill="currentColor" opacity="0.2"/>
    <path d="M9 21H15M10 17V19M14 17V19M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 7L11 9H13L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Globe Network Icon for "Japan-Global Expertise"
export const GlobeNetworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 12H22M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
    <circle cx="19" cy="8" r="2" fill="currentColor" opacity="0.3"/>
    <circle cx="5" cy="16" r="2" fill="currentColor" opacity="0.3"/>
    <path d="M19 8L12 12L5 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5"/>
  </svg>
)