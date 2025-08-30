import React from 'react'

interface IconProps {
  className?: string
}

// Managed Services - 24/7 monitoring, maintenance, multi-layered infrastructure
export const ManagedServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clock face representing 24/7 */}
    <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
    <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Clock markers */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
      const rad = (angle - 90) * Math.PI / 180
      const x1 = 60 + 38 * Math.cos(rad)
      const y1 = 60 + 38 * Math.sin(rad)
      const x2 = 60 + 42 * Math.cos(rad)
      const y2 = 60 + 42 * Math.sin(rad)
      return <path key={angle} d={`M${x1} ${y1}L${x2} ${y2}`} stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    })}
    
    {/* Central monitoring hub */}
    <rect x="45" y="45" width="30" height="30" stroke="currentColor" strokeWidth="0.5"/>
    <rect x="50" y="50" width="20" height="20" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <rect x="55" y="55" width="10" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    
    {/* Service layers */}
    <path d="M30 40L45 45V75L30 80V40Z" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <path d="M90 40L75 45V75L90 80V40Z" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <path d="M45 30H75L75 45H45L45 30Z" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <path d="M45 75H75L75 90H45L45 75Z" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    
    {/* Data flow indicators */}
    <path d="M60 15V30M60 90V105" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2"/>
    <path d="M15 60H30M90 60H105" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2"/>
    
    {/* Monitoring nodes */}
    <circle cx="30" cy="30" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="90" cy="30" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="30" cy="90" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="90" cy="90" r="3" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Connection lines */}
    <path d="M33 33L45 45M87 33L75 45M33 87L45 75M87 87L75 75" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    
    {/* Status indicators */}
    <circle cx="60" cy="60" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="50" cy="60" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="70" cy="60" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="60" cy="50" r="1" fill="currentColor" opacity="0.5"/>
    <circle cx="60" cy="70" r="1" fill="currentColor" opacity="0.5"/>
  </svg>
)

// IT Security - Multi-layered protection, encryption, threat detection
export const ITSecurityIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer shield layers */}
    <path d="M60 15L30 25V50C30 75 40 90 60 100C80 90 90 75 90 50V25L60 15Z" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M60 25L40 32V50C40 65 45 75 60 85C75 75 80 65 80 50V32L60 25Z" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <path d="M60 35L50 39V50C50 55 52 60 60 65C68 60 70 55 70 50V39L60 35Z" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    
    {/* Encryption matrix */}
    <g opacity="0.5">
      {[40, 45, 50, 55, 60, 65, 70, 75].map(y => 
        <path key={y} d={`M40 ${y}H80`} stroke="currentColor" strokeWidth="0.2"/>
      )}
      {[40, 45, 50, 55, 60, 65, 70, 75, 80].map(x => 
        <path key={x} d={`M${x} 40V75`} stroke="currentColor" strokeWidth="0.2"/>
      )}
    </g>
    
    {/* Lock mechanism */}
    <rect x="52" y="52" width="16" height="12" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M55 52V48C55 45 57 43 60 43C63 43 65 45 65 48V52" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="60" cy="58" r="2" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Threat detection radar */}
    <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 2"/>
    <path d="M60 25L60 95M25 60L95 60" stroke="currentColor" strokeWidth="0.2" opacity="0.3"/>
    <path d="M60 60L85 35" stroke="currentColor" strokeWidth="0.3" opacity="0.5">
      <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="8s" repeatCount="indefinite"/>
    </path>
    
    {/* Security nodes */}
    <circle cx="25" cy="25" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="95" cy="25" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="25" cy="95" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="95" cy="95" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    
    {/* Connection paths */}
    <path d="M27 27L40 40M93 27L80 40M27 93L40 80M93 93L80 80" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    
    {/* Binary data streams */}
    <text x="20" y="60" fill="currentColor" opacity="0.2" fontSize="8" fontFamily="monospace">01101</text>
    <text x="85" y="60" fill="currentColor" opacity="0.2" fontSize="8" fontFamily="monospace">10010</text>
  </svg>
)

// IT Support - Help desk, ticketing system, multi-channel support
export const ITSupportIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central support hub */}
    <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    
    {/* Support channels radiating out */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = angle * Math.PI / 180
      const x1 = 60 + 20 * Math.cos(rad)
      const y1 = 60 + 20 * Math.sin(rad)
      const x2 = 60 + 40 * Math.cos(rad)
      const y2 = 60 + 40 * Math.sin(rad)
      const x3 = 60 + 45 * Math.cos(rad)
      const y3 = 60 + 45 * Math.sin(rad)
      
      return (
        <g key={angle}>
          <path d={`M${x1} ${y1}L${x2} ${y2}`} stroke="currentColor" strokeWidth="0.5"/>
          <circle cx={x3} cy={y3} r="4" stroke="currentColor" strokeWidth="0.5"/>
          {/* Channel type indicators */}
          {i === 0 && <path d={`M${x3-2} ${y3-2}L${x3+2} ${y3+2}M${x3-2} ${y3+2}L${x3+2} ${y3-2}`} stroke="currentColor" strokeWidth="0.3"/>}
          {i === 1 && <circle cx={x3} cy={y3} r="1" fill="currentColor"/>}
          {i === 2 && <rect x={x3-1.5} y={y3-1.5} width="3" height="3" stroke="currentColor" strokeWidth="0.3"/>}
          {i === 3 && <path d={`M${x3} ${y3-2}L${x3} ${y3+2}M${x3-2} ${y3}L${x3+2} ${y3}`} stroke="currentColor" strokeWidth="0.3"/>}
        </g>
      )
    })}
    
    {/* Ticket queue visualization */}
    <rect x="52" y="52" width="16" height="16" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M55 56H65M55 60H65M55 64H65" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    
    {/* Help desk terminal */}
    <rect x="50" y="50" width="20" height="15" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M50 55H70" stroke="currentColor" strokeWidth="0.3"/>
    <circle cx="53" cy="52.5" r="0.5" fill="currentColor"/>
    <circle cx="56" cy="52.5" r="0.5" fill="currentColor"/>
    <circle cx="59" cy="52.5" r="0.5" fill="currentColor"/>
    
    {/* Response time indicators */}
    <path d="M25 25Q35 20 45 25T65 25T85 25T95 25" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    <path d="M25 95Q35 100 45 95T65 95T85 95T95 95" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    
    {/* Priority levels */}
    <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="90" cy="30" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="30" cy="90" r="2" fill="currentColor" opacity="0.4"/>
    <circle cx="90" cy="90" r="2" fill="currentColor" opacity="0.2"/>
  </svg>
)

// IT Consulting - Strategic planning, roadmap, analysis
export const ITConsultingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Strategic roadmap paths */}
    <path d="M20 90Q30 70 40 75T60 65T80 60T100 30" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M20 80Q35 65 50 70T75 55T95 50T110 40" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <path d="M20 70Q40 60 60 65T85 50T105 45T115 25" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    
    {/* Decision nodes */}
    <g>
      <path d="M40 75L50 65L60 75L50 85L40 75Z" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="50" cy="75" r="3" stroke="currentColor" strokeWidth="0.5"/>
    </g>
    <g>
      <path d="M60 55L70 45L80 55L70 65L60 55Z" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="70" cy="55" r="3" stroke="currentColor" strokeWidth="0.5"/>
    </g>
    <g>
      <path d="M80 40L90 30L100 40L90 50L80 40Z" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="90" cy="40" r="3" stroke="currentColor" strokeWidth="0.5"/>
    </g>
    
    {/* Analysis grid */}
    <g opacity="0.3">
      <path d="M15 15H105V105H15V15Z" stroke="currentColor" strokeWidth="0.3"/>
      {[30, 45, 60, 75, 90].map(n => (
        <g key={n}>
          <path d={`M15 ${n}H105`} stroke="currentColor" strokeWidth="0.2"/>
          <path d={`M${n} 15V105`} stroke="currentColor" strokeWidth="0.2"/>
        </g>
      ))}
    </g>
    
    {/* Strategic indicators */}
    <path d="M30 30L35 25L40 30" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    <path d="M80 25L85 20L90 25" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    <path d="M85 85L90 90L95 85" stroke="currentColor" strokeWidth="0.5" fill="none"/>
    
    {/* Knowledge base */}
    <rect x="20" y="95" width="15" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <rect x="40" y="95" width="15" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <rect x="60" y="95" width="15" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Consultation points */}
    <circle cx="30" cy="60" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="60" cy="45" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="85" cy="35" r="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
  </svg>
)

// Cloud Services - Multi-cloud architecture, migration, optimization
export const CloudServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Multiple cloud layers */}
    <path d="M30 45C30 35 37 30 45 30C48 20 58 15 68 15C78 15 85 20 88 30C96 30 103 35 103 45C103 55 96 60 88 60H45C37 60 30 55 30 45Z" 
          stroke="currentColor" strokeWidth="0.5"/>
    <path d="M25 55C25 48 30 45 36 45C38 38 45 35 52 35C59 35 64 38 66 45C72 45 77 48 77 55C77 62 72 65 66 65H36C30 65 25 62 25 55Z" 
          stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <path d="M43 65C43 60 47 58 52 58C54 53 59 51 65 51C71 51 75 53 77 58C82 58 86 60 86 65C86 70 82 72 77 72H52C47 72 43 70 43 65Z" 
          stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    
    {/* Cloud infrastructure */}
    <rect x="45" y="35" width="8" height="8" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    <rect x="55" y="35" width="8" height="8" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    <rect x="65" y="35" width="8" height="8" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    <rect x="50" y="45" width="8" height="8" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    <rect x="60" y="45" width="8" height="8" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    
    {/* Data migration paths */}
    <path d="M20 85L30 75M30 75L40 80M30 75L35 65" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M100 85L90 75M90 75L80 80M90 75L85 65" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M60 72V85M55 80L60 85L65 80" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Network connections */}
    <circle cx="20" cy="85" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="60" cy="85" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="100" cy="85" r="3" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Optimization indicators */}
    <path d="M15 30Q25 25 35 30T55 30T75 30T95 30T105 30" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 2"/>
    <path d="M15 50Q25 55 35 50T55 50T75 50T95 50T105 50" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 2"/>
    
    {/* Service mesh */}
    <g opacity="0.3">
      <path d="M45 40L55 45L65 40" stroke="currentColor" strokeWidth="0.3"/>
      <path d="M50 50L60 55L70 50" stroke="currentColor" strokeWidth="0.3"/>
      <path d="M45 40L50 50M65 40L70 50" stroke="currentColor" strokeWidth="0.3"/>
    </g>
  </svg>
)

// Cyber Security - Advanced threat protection, monitoring, incident response
export const CyberSecurityIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Threat detection radar */}
    <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
    <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Scanning beam */}
    <path d="M60 60L90 30" stroke="currentColor" strokeWidth="0.5" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="4s" repeatCount="indefinite"/>
    </path>
    
    {/* Security matrix */}
    <g opacity="0.3">
      {[20, 30, 40, 50, 70, 80, 90, 100].map(n => (
        <g key={n}>
          <path d={`M20 ${n}H100`} stroke="currentColor" strokeWidth="0.2"/>
          <path d={`M${n} 20V100`} stroke="currentColor" strokeWidth="0.2"/>
        </g>
      ))}
    </g>
    
    {/* Threat indicators */}
    <circle cx="35" cy="35" r="3" stroke="currentColor" strokeWidth="0.5" fill="none">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="85" cy="45" r="3" stroke="currentColor" strokeWidth="0.5" fill="none">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="85" r="3" stroke="currentColor" strokeWidth="0.5" fill="none">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    
    {/* Central security core */}
    <path d="M60 45L70 55V65L60 75L50 65V55L60 45Z" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M60 50L65 55V60L60 65L55 60V55L60 50Z" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    
    {/* Firewall layers */}
    <path d="M30 60H50M70 60H90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2"/>
    <path d="M60 30V50M60 70V90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2"/>
    
    {/* Incident response paths */}
    <path d="M25 25L35 35M85 25L75 35M25 95L35 85M85 95L75 85" stroke="currentColor" strokeWidth="0.3" opacity="0.5"/>
    
    {/* Binary streams */}
    <text x="15" y="60" fill="currentColor" opacity="0.15" fontSize="6" fontFamily="monospace">01101001</text>
    <text x="85" y="60" fill="currentColor" opacity="0.15" fontSize="6" fontFamily="monospace">10010110</text>
    <text x="50" y="15" fill="currentColor" opacity="0.15" fontSize="6" fontFamily="monospace">11010</text>
    <text x="50" y="110" fill="currentColor" opacity="0.15" fontSize="6" fontFamily="monospace">00101</text>
  </svg>
)

// Wireless Survey - Signal mapping, coverage analysis, optimization
export const WirelessSurveyIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Signal waves */}
    <circle cx="60" cy="60" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
    <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
    
    {/* Access points */}
    <g>
      <rect x="55" y="55" width="10" height="10" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="60" cy="60" r="2" fill="currentColor"/>
    </g>
    
    {/* Coverage zones */}
    <path d="M30 30Q40 25 50 30T70 30T90 30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeDasharray="2 2"/>
    <path d="M30 60Q40 55 50 60T70 60T90 60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeDasharray="2 2"/>
    <path d="M30 90Q40 85 50 90T70 90T90 90" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeDasharray="2 2"/>
    
    {/* Signal strength indicators */}
    <rect x="25" y="35" width="3" height="8" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    <rect x="29" y="33" width="3" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <rect x="33" y="31" width="3" height="12" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
    <rect x="37" y="29" width="3" height="14" stroke="currentColor" strokeWidth="0.5" opacity="1"/>
    
    <rect x="80" y="35" width="3" height="8" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    <rect x="84" y="33" width="3" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    <rect x="88" y="31" width="3" height="12" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
    <rect x="92" y="29" width="3" height="14" stroke="currentColor" strokeWidth="0.5" opacity="1"/>
    
    {/* Heat map grid */}
    <g opacity="0.2">
      {[20, 35, 50, 65, 80, 95].map(x => 
        [20, 35, 50, 65, 80, 95].map(y => 
          <rect key={`${x}-${y}`} x={x} y={y} width="12" height="12" 
                stroke="currentColor" strokeWidth="0.3" fill="none"/>
        )
      )}
    </g>
    
    {/* Measurement points */}
    <circle cx="35" cy="35" r="1.5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="85" cy="35" r="1.5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="35" cy="85" r="1.5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    <circle cx="85" cy="85" r="1.5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5 0.5"/>
    
    {/* Optimization paths */}
    <path d="M35 35L60 60M85 35L60 60M35 85L60 60M85 85L60 60" stroke="currentColor" strokeWidth="0.2" opacity="0.3"/>
  </svg>
)

// Custom Solutions - Tailored development, integration, unique architectures
export const CustomSolutionsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Modular components */}
    <g>
      {/* Component 1 - hexagon */}
      <path d="M30 35L40 30L50 35L50 45L40 50L30 45L30 35Z" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="40" cy="40" r="3" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      
      {/* Component 2 - square */}
      <rect x="65" y="25" width="20" height="20" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M70 30L80 40M80 30L70 40" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      
      {/* Component 3 - triangle */}
      <path d="M50 70L65 85L35 85L50 70Z" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="50" cy="80" r="3" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      
      {/* Component 4 - circle */}
      <circle cx="85" cy="75" r="10" stroke="currentColor" strokeWidth="0.5"/>
      <rect x="80" y="70" width="10" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    </g>
    
    {/* Integration paths */}
    <path d="M50 40L65 35M70 45L75 65M65 80L70 75M50 70L45 50" 
          stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
    
    {/* Connection nodes */}
    <circle cx="50" cy="40" r="1.5" fill="currentColor"/>
    <circle cx="65" cy="35" r="1.5" fill="currentColor"/>
    <circle cx="70" cy="45" r="1.5" fill="currentColor"/>
    <circle cx="75" cy="65" r="1.5" fill="currentColor"/>
    <circle cx="65" cy="80" r="1.5" fill="currentColor"/>
    <circle cx="45" cy="50" r="1.5" fill="currentColor"/>
    
    {/* Blueprint grid */}
    <g opacity="0.1">
      <path d="M15 15H105V105H15V15Z" stroke="currentColor" strokeWidth="0.3"/>
      {[30, 45, 60, 75, 90].map(n => (
        <g key={n}>
          <path d={`M15 ${n}H105`} stroke="currentColor" strokeWidth="0.2"/>
          <path d={`M${n} 15V105`} stroke="currentColor" strokeWidth="0.2"/>
        </g>
      ))}
    </g>
    
    {/* Customization indicators */}
    <path d="M20 20L25 15L30 20" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M90 20L95 15L100 20" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M20 100L25 95L30 100" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M90 100L95 95L100 100" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Version control */}
    <text x="95" y="105" fill="currentColor" opacity="0.3" fontSize="6" fontFamily="monospace">v2.1</text>
  </svg>
)

// Asset Management - Inventory tracking, lifecycle management, optimization
export const AssetManagementIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Database layers */}
    <ellipse cx="60" cy="25" rx="30" ry="8" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M30 25V35C30 39 42 42 60 42C78 42 90 39 90 35V25" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M30 35V45C30 49 42 52 60 52C78 52 90 49 90 45V35" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M30 45V55C30 59 42 62 60 62C78 62 90 59 90 55V45" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Asset tracking grid */}
    <g opacity="0.5">
      <rect x="35" y="70" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="47" y="70" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="59" y="70" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="71" y="70" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
      
      <rect x="35" y="80" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="47" y="80" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="59" y="80" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="71" y="80" width="10" height="8" stroke="currentColor" strokeWidth="0.3"/>
    </g>
    
    {/* Lifecycle indicators */}
    <circle cx="40" cy="74" r="1" fill="currentColor" opacity="0.8"/>
    <circle cx="52" cy="74" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="64" cy="74" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="76" cy="74" r="1" fill="currentColor" opacity="0.2"/>
    
    {/* Barcode/QR representation */}
    <g opacity="0.6">
      <path d="M40 95V100M42 95V100M44 95V98M46 95V100M48 95V98M50 95V100" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M52 95V98M54 95V100M56 95V100M58 95V98M60 95V100M62 95V98" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M64 95V100M66 95V98M68 95V100M70 95V98M72 95V100M74 95V100" stroke="currentColor" strokeWidth="0.5"/>
    </g>
    
    {/* Flow connections */}
    <path d="M60 62V70M55 66L60 70L65 66" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M30 30L20 35M90 30L100 35" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Status nodes */}
    <circle cx="20" cy="35" r="3" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="100" cy="35" r="3" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Optimization curves */}
    <path d="M15 15Q25 10 35 15T55 15T75 15T95 15T105 15" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
    <path d="M15 105Q25 100 35 105T55 105T75 105T95 105T105 105" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
  </svg>
)

// Hardware Maintenance - Diagnostics, repair workflows, component tracking
export const HardwareMaintenanceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circuit board base */}
    <rect x="25" y="35" width="70" height="50" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Circuit traces */}
    <g opacity="0.5">
      <path d="M30 45H50M50 45V55M50 55H70M70 55V65M70 65H90" stroke="currentColor" strokeWidth="0.3"/>
      <path d="M30 55H40M40 55V65M40 65H60M60 65V75M60 75H90" stroke="currentColor" strokeWidth="0.3"/>
      <path d="M35 40V50M35 50H45M45 50V60M45 60H55" stroke="currentColor" strokeWidth="0.3"/>
      <path d="M75 40V50M75 50H85M85 50V60M85 60V70" stroke="currentColor" strokeWidth="0.3"/>
    </g>
    
    {/* Components */}
    <rect x="45" y="45" width="15" height="10" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="50" cy="50" r="1" fill="currentColor"/>
    <circle cx="55" cy="50" r="1" fill="currentColor"/>
    
    <rect x="65" y="60" width="12" height="8" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M68 64H74" stroke="currentColor" strokeWidth="0.3"/>
    
    <circle cx="35" cy="65" r="4" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="35" cy="65" r="2" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
    
    {/* Diagnostic indicators */}
    <circle cx="30" cy="40" r="1.5" fill="currentColor" opacity="0.8"/>
    <circle cx="40" cy="40" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="50" cy="40" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="60" cy="40" r="1.5" fill="currentColor" opacity="0.2"/>
    
    {/* Tools */}
    <g transform="translate(15, 15)">
      <path d="M0 5L5 0L10 5L8 7L5 4L2 7L0 5Z" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M5 4V15" stroke="currentColor" strokeWidth="0.5"/>
    </g>
    
    <g transform="translate(95, 15)">
      <circle cx="5" cy="5" r="5" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M5 10V20" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M2 8L8 8" stroke="currentColor" strokeWidth="0.3"/>
    </g>
    
    {/* Connection ports */}
    <rect x="20" y="55" width="5" height="10" stroke="currentColor" strokeWidth="0.5"/>
    <rect x="95" y="55" width="5" height="10" stroke="currentColor" strokeWidth="0.5"/>
    
    {/* Status flow */}
    <path d="M60 85V95M55 90L60 95L65 90" stroke="currentColor" strokeWidth="0.5"/>
    <rect x="50" y="95" width="20" height="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Test points */}
    <circle cx="70" cy="50" r="0.5" fill="currentColor"/>
    <circle cx="80" cy="55" r="0.5" fill="currentColor"/>
    <circle cx="85" cy="65" r="0.5" fill="currentColor"/>
    <circle cx="75" cy="70" r="0.5" fill="currentColor"/>
  </svg>
)