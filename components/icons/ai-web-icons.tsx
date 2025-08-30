import React from 'react'

interface IconProps {
  className?: string
}

export const AIBrainIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12C22.0589 12 14 20.0589 14 30V34C14 43.9411 22.0589 52 32 52C41.9411 52 50 43.9411 50 34V30C50 20.0589 41.9411 12 32 12Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M26 28C26 25.7909 27.7909 24 30 24H34C36.2091 24 38 25.7909 38 28V32C38 34.2091 36.2091 36 34 36H30C27.7909 36 26 34.2091 26 32V28Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="22" cy="30" r="2" fill="currentColor"/>
    <circle cx="42" cy="30" r="2" fill="currentColor"/>
    <path d="M32 36V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 42H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 26C10 26 8 24 8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 26C54 26 56 24 56 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const WebDevelopmentIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="48" height="36" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 20H56" stroke="currentColor" strokeWidth="2"/>
    <circle cx="14" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="26" cy="16" r="1.5" fill="currentColor"/>
    <path d="M20 28L16 32L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 28L32 32L28 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 40H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 52H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 28V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 32H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const MachineLearningIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <path d="M32 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 44V52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 32H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 32H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18.08 18.08L23.74 23.74" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40.26 40.26L45.92 45.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18.08 45.92L23.74 40.26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40.26 23.74L45.92 18.08" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="52" cy="32" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="52" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="32" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const DataScienceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 48L16 36L28 40L40 24L56 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="48" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="36" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="28" cy="40" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="40" cy="24" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="56" cy="32" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 16H20V24H12V16Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M28 8H36V16H28V8Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M44 12H52V20H44V12Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 56H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const AutomationIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L42 18V30L32 40L22 30V18L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 18L32 24L42 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 24V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 40L12 44L16 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 40L52 44L48 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 44H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="52" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M26 56L20 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 56L44 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const BlockchainIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="8" width="16" height="16" stroke="currentColor" strokeWidth="2"/>
    <rect x="8" y="24" width="16" height="16" stroke="currentColor" strokeWidth="2"/>
    <rect x="40" y="24" width="16" height="16" stroke="currentColor" strokeWidth="2"/>
    <rect x="24" y="40" width="16" height="16" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 24V40" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 32H8" stroke="currentColor" strokeWidth="2"/>
    <path d="M40 32H56" stroke="currentColor" strokeWidth="2"/>
    <path d="M28 12H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 20H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 28H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 36H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 28H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 36H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 44H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 52H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)