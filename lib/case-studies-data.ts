export type CaseStudyItem = {
  id: string
  slug: string
  titleEN: string
  titleJA: string
  categoryEN: string
  categoryJA: string
  excerptEN: string
  excerptJA: string
  metrics?: string[]
}

export const caseStudiesEN: CaseStudyItem[] = [
  {
    id: 'cs-1',
    slug: 'managed-it-services-cpg-tokyo',
    titleEN: 'Managed IT',
    titleJA: '運用保守',
    categoryEN: 'Managed IT Services',
    categoryJA: '運用保守',
    excerptEN: 'Comprehensive IT support for a major consumer goods manufacturer, delivering 28% reduction in monthly tickets and 98.7% SLA compliance.',
    excerptJA: '大手消費財メーカー向け包括的IT運用保守。月次チケット28%削減、SLA 98.7%達成。',
    metrics: ['−28% tickets', '98.7% SLA', '−41% repeats']
  },
  {
    id: 'cs-2',
    slug: 'cloud-migration-manufacturing',
    titleEN: 'Cloud Migration',
    titleJA: 'クラウド移行',
    categoryEN: 'Cloud Migration',
    categoryJA: 'クラウド移行',
    excerptEN: 'Multi-site cloud migration for manufacturing operations, achieving 23% TCO reduction and RPO under 15 minutes.',
    excerptJA: '製造業の複数拠点クラウド移行。インフラTCO 23%削減、RPO 15分未満を実現。',
    metrics: ['−23% TCO', 'RPO < 15m', '2 sites']
  },
  {
    id: 'cs-3',
    slug: 'pentest-fintech-tokyo',
    titleEN: 'Penetration Testing',
    titleJA: '脆弱性診断',
    categoryEN: 'Security Testing',
    categoryJA: 'セキュリティ診断',
    excerptEN: 'Comprehensive penetration testing for fintech applications, achieving zero critical/high vulnerabilities across 3 releases.',
    excerptJA: 'フィンテックアプリケーションの包括的脆弱性診断。3リリース連続で重大・高リスク脆弱性0件を達成。',
    metrics: ['0 critical/high', '3 releases', '−31% remediation']
  },
  {
    id: 'cs-4',
    slug: 'wifi-assessment-retail-tokyo',
    titleEN: 'Wi‑Fi Assessment',
    titleJA: 'Wi‑Fiアセスメント',
    categoryEN: 'Wireless Assessment',
    categoryJA: 'Wi-Fiアセスメント',
    excerptEN: 'Wi-Fi performance optimization for retail operations, reducing disconnects by 62% and VoIP re-association under 1.5 seconds.',
    excerptJA: '小売業務向けWi-Fi性能最適化。切断62%削減、VoIP再接続1.5秒未満を実現。',
    metrics: ['−62% disconnects', 'VoIP < 1.5s', '2 locations']
  },

  {
    id: 'cs-6',
    slug: 'itad-tokyo-kobe-consolidation',
    titleEN: 'IT Asset Disposition',
    titleJA: 'IT資産処分',
    categoryEN: 'IT Asset Disposition',
    categoryJA: 'IT資産処分',
    excerptEN: 'Secure IT asset disposition across multiple sites, achieving zero security incidents and 37% net cost reduction.',
    excerptJA: '複数拠点でのセキュアなIT資産処分。セキュリティインシデント0件、ネットコスト37%削減を実現。',
    metrics: ['0 incidents', '−37% cost', '48h evidence']
  },

  {
    id: 'cs-8',
    slug: 'datacenter-relocation-colo-to-colo',
    titleEN: 'Data Center Relocation',
    titleJA: 'データセンター移設',
    categoryEN: 'Data Center Services',
    categoryJA: 'データセンター',
    excerptEN: 'Complex data center migration and consolidation project in metropolitan Tokyo, ensuring zero downtime during transition.',
    excerptJA: '首都圏での複雑なデータセンター移設・集約プロジェクト。移行期間中のダウンタイム0を実現。',
    metrics: ['0 downtime', '3 facilities', '24/7 support']
  },
  {
    id: 'cs-9',
    slug: 'sdwan-insurance-30-sites-japan',
    titleEN: 'SD‑WAN Deployment',
    titleJA: 'SD‑WAN導入',
    categoryEN: 'Network Infrastructure',
    categoryJA: 'ネットワークインフラ',
    excerptEN: 'Nationwide SD-WAN deployment for major insurance company, connecting 30+ sites with improved performance and reliability.',
    excerptJA: '大手保険会社向け全国SD-WAN導入。30拠点超を接続し、性能と信頼性を向上。',
    metrics: ['30+ sites', 'Nationwide', 'High availability']
  },

  {
    id: 'cs-11',
    slug: 'rack-buildout-9racks-campus',
    titleEN: 'Rack Build‑out',
    titleJA: 'ラック新設・配線',
    categoryEN: 'Infrastructure Build-out',
    categoryJA: 'インフラ構築',
    excerptEN: 'Professional rack installation and structured cabling for enterprise campus, supporting high-density equipment deployment.',
    excerptJA: 'エンタープライズキャンパス向けプロフェッショナルラック設置・構造化配線。高密度機器展開をサポート。',
    metrics: ['8-9 racks', 'Structured cabling', 'High density']
  },
  {
    id: 'cs-12',
    slug: 'nationwide-wifi-30-offices',
    titleEN: 'Nationwide Wi‑Fi',
    titleJA: 'Wi‑Fi標準化',
    categoryEN: 'Wireless Infrastructure',
    categoryJA: 'ワイヤレスインフラ',
    excerptEN: 'Comprehensive Wi-Fi standardization across 30 nationwide offices, ensuring consistent performance and management.',
    excerptJA: '全国30拠点でのWi-Fi標準化。一貫した性能と管理を実現。',
    metrics: ['30 offices', 'Standardized', 'Centralized mgmt']
  }
]

export const outcomesTable = {
  headersEN: ['Area', 'Key Outcomes'],
  headersJA: ['分野', '主要成果'],
  rowsEN: [
    ['Managed IT', '−28% tickets, −41% repeats, 98.7% SLA'],
    ['Cloud', '−23% TCO, RPO < 15m'],
    ['PenTest', '0 critical/high across 3 releases, −31% remediation LT'],
    ['Wi‑Fi Assessment', '−62% disconnects; VoIP re‑assoc < 1.5s'],
    ['Enterprise Wi‑Fi', 'Stable UC; avg latency < 35 ms; −40% lobby queue'],
    ['ITAD', '0 incidents; −37% net cost; evidence within 48h']
  ],
  rowsJA: [
    ['運用保守', '月次チケット −28%、再発 −41%、SLA 98.7%'],
    ['クラウド移行', 'インフラTCO −23%、RPO < 15分'],
    ['セキュリティ（PenTest）', '重大/高 0件（3リリース連続）、是正LT −31%'],
    ['Wi‑Fiアセスメント', '切断 −62%、VoIP再接続 <1.5秒'],
    ['エンタープライズWi‑Fi', 'UC品質安定、平均遅延 <35ms、滞留 −40%'],
    ['ITAD', '漏えい0件、ネットコスト −37%、証跡 48時間内']
  ]
}

