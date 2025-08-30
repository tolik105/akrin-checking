// Central mapping for case study hero images stored under public/images/case-studies
// Prefer AVIF where available; fall back to WEBP if present; pages will fallback to /case-assets otherwise.
export const caseStudyHeroMap: Record<string, string> = {
  // AVIF provided by user
  'cloud-migration-manufacturing': '/images/case-studies/cloud-migration-manufacturing/cloud-migration.avif',
  'datacenter-relocation-colo-to-colo': '/images/case-studies/datacenter-relocation-colo-to-colo/data-center-relocation.avif',
  'itad-tokyo-kobe-consolidation': '/images/case-studies/itad-tokyo-kobe-consolidation/e-waste.avif',
  'pentest-fintech-tokyo': '/images/case-studies/pentest-fintech-tokyo/Penetration-Testing.avif',
  'rack-buildout-9racks-campus': '/images/case-studies/rack-buildout-9racks-campus/rack-build.avif',
  'sdwan-insurance-30-sites-japan': '/images/case-studies/sdwan-insurance-30-sites-japan/sd-wan.avif',

  // Present as WEBP under public; still prefer public path for consistency
  'managed-it-services-cpg-tokyo': '/images/case-studies/managed-it-services-cpg-tokyo/managed-it.avif',
  'nationwide-wifi-30-offices': '/images/case-studies/nationwide-wifi-30-offices/hero.webp',
  'wifi-assessment-retail-tokyo': '/images/case-studies/wifi-assessment-retail-tokyo/wifi-assessment.avif',
}

export function getCaseStudyHero(slug: string): string {
  // Prefer mapped public asset
  if (caseStudyHeroMap[slug]) return caseStudyHeroMap[slug]
  // Fallback to legacy route handler-backed asset
  return `/case-assets/${slug}/hero.webp`
}

