// Service Icons for Managed IT Services

export const MonitoringIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="6" cy="8" r="1" fill="currentColor"/>
    <circle cx="18" cy="8" r="1" fill="currentColor"/>
    <circle cx="6" cy="16" r="1" fill="currentColor"/>
  </svg>
)

export const SupportTeamIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="11" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21v-1a3 3 0 0 0-3-3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const InfrastructureIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="8" r="1" fill="currentColor"/>
    <circle cx="10" cy="8" r="1" fill="currentColor"/>
  </svg>
)

export const SecurityIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const PlanningIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="14" r="1" fill="currentColor"/>
    <circle cx="12" cy="14" r="1" fill="currentColor"/>
    <circle cx="16" cy="14" r="1" fill="currentColor"/>
  </svg>
)
