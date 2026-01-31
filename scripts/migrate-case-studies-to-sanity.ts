import { createClient } from "@sanity/client"
import * as fs from "fs"
import * as path from "path"
import { caseStudiesEN } from "../lib/case-studies-data"
import { caseStudyHeroMap } from "../lib/case-study-assets"

const client = createClient({
  projectId: "t424dnfi",
  dataset: "production",
  token: "skTVpaOyaQlU1gKSwEfv1cAZFJN1AwGQx740RyoLJmHBdCjUGuDV1gwOCCKoxxH75di13Z75FpnzuU6OdomexgdjowO3ND8Ion0B3IVdLzImu4pWXUgiYIi8dy0fADdqFmy4pDMOW89caETLVxi9HhB7insTjzL1Yp9ktpKTyR7miBjjUU2T",
  useCdn: false,
  apiVersion: "2024-01-01",
})

// Markdown to HTML converter (same as in the page components)
function mdToHtml(src: string): string {
  let s = src.replace(/\r\n?/g, '\n')
  // strip script tags for safety
  s = s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
  // code fences ```
  s = s.replace(/```([\s\S]*?)```/g, (_m, code) => `<pre><code>${code.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c] as string))}</code></pre>\n`)
  // images ![alt](src "title")
  s = s.replace(/!\[([^\]]*)\]\(([^\s\)]+)(?:\s+\"([^\"]*)\")?\)/g, (_m, alt, url, title) => `<img src="${url}" alt="${alt||''}"${title?` title="${title}"`:''} />`)
  // links [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>')
  // headings: demote one level to keep only one H1 on the page
  s = s.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>')
       .replace(/^#####\s+(.+)$/gm, '<h6>$1</h6>')
       .replace(/^####\s+(.+)$/gm, '<h5>$1</h5>')
       .replace(/^###\s+(.+)$/gm, '<h4>$1</h4>')
       .replace(/^##\s+(.+)$/gm, '<h3>$1</h3>')
       .replace(/^#\s+(.+)$/gm, '<h2>$1</h2>')
  // blockquotes
  s = s.replace(/^>\s?(.*)$/gm, '<blockquote><p>$1</p></blockquote>')
  // bold/italic
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
       .replace(/(^|\W)\*([^*]+)\*/g, '$1<em>$2</em>')
  // unordered lists
  s = s.replace(/(?:^|\n)(-\s.+(?:\n-\s.+)*)/g, (m) => {
    const items = m.trim().split(/\n/).map(l => l.replace(/^-\s+/, '').trim()).filter(Boolean)
    if (items.length < 2 && !/^-/m.test(m)) return m
    return `\n<ul>` + items.map(i => `<li>${i}</li>`).join('') + `</ul>`
  })
  // paragraphs: wrap plain lines into <p>
  const lines = s.split(/\n{2,}/).map(block => {
    if (/^<\/?(h\d|ul|pre|blockquote|img)/.test(block.trim())) return block
    return `<p>${block.replace(/\n/g, '<br/>')}</p>`
  })
  return lines.join('\n')
}

// Parse frontmatter from MDX file
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const fmMatch = content.match(/^---([\s\S]*?)---/)
  if (!fmMatch) {
    return { frontmatter: {}, body: content }
  }

  const fm = fmMatch[1]
  const frontmatter: Record<string, any> = {}
  const lines = fm.split('\n')
  
  for (const line of lines) {
    const l = line.trim()
    if (!l) continue
    
    // Match key: value patterns
    const match = l.match(/^(\w+):\s*(.*)$/)
    if (match) {
      const key = match[1]
      let value: any = match[2]
      
      // Remove surrounding quotes
      value = value.replace(/^"|"$/g, '').replace(/^'|'$/g, '')
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value.replace(/'/g, '"'))
        } catch {
          // Keep as string if parse fails
        }
      }
      
      frontmatter[key] = value
    }
  }

  const body = content.slice(fmMatch[0].length).trim()
  return { frontmatter, body }
}

// Read and parse MDX file
function readMdxFile(filePath: string): { frontmatter: Record<string, any>; htmlContent: string } | null {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const { frontmatter, body } = parseFrontmatter(raw)
    
    // Remove leading inline image from body (MDX often repeats hero)
    let htmlContent = mdToHtml(body).replace(/^\s*<img[^>]*\/>\s*/, '')
    
    return { frontmatter, htmlContent }
  } catch (error) {
    console.error(`Failed to read file: ${filePath}`, error)
    return null
  }
}

// Map slugs to MDX filenames
const slugToEnFile: Record<string, string> = {
  'managed-it-services-cpg-tokyo': 'en-managed-it-services-cpg-tokyo.mdx',
  'cloud-migration-manufacturing': 'en-cloud-migration-manufacturing.mdx',
  'pentest-fintech-tokyo': 'en-pentest-fintech-tokyo.mdx',
  'wifi-assessment-retail-tokyo': 'en-wifi-assessment-retail-tokyo.mdx',
  'itad-tokyo-kobe-consolidation': 'en-itad-tokyo-kobe-consolidation.mdx',
  'datacenter-relocation-colo-to-colo': 'en-datacenter-relocation-colo-to-colo.mdx',
  'sdwan-insurance-30-sites-japan': 'en-sdwan-insurance-30-sites-japan.mdx',
  'rack-buildout-9racks-campus': 'en-rack-buildout-9racks-campus.mdx',
  'nationwide-wifi-30-offices': 'en-nationwide-wifi-30-offices.mdx',
}

const slugToJaFile: Record<string, string> = {
  'managed-it-services-cpg-tokyo': 'ja-managed-it-services-cpg-tokyo.mdx',
  'cloud-migration-manufacturing': 'ja-cloud-migration-manufacturing.mdx',
  'pentest-fintech-tokyo': 'ja-pentest-fintech-tokyo.mdx',
  'wifi-assessment-retail-tokyo': 'ja-wifi-assessment-retail-tokyo.mdx',
  'itad-tokyo-kobe-consolidation': 'ja-itad-tokyo-kobe-consolidation.mdx',
  'datacenter-relocation-colo-to-colo': 'ja-datacenter-relocation-colo-to-colo.mdx',
  'sdwan-insurance-30-sites-japan': 'ja-sdwan-insurance-30-sites-japan.mdx',
  'rack-buildout-9racks-campus': 'ja-rack-buildout-9racks-campus.mdx',
  'nationwide-wifi-30-offices': 'ja-nationwide-wifi-30-offices.mdx',
}

async function migrateCaseStudies() {
  console.log("🚀 Starting Case Studies Migration to Sanity...\n")
  
  const enDir = path.join(process.cwd(), 'english-case-studies-mdx')
  const jaDir = path.join(process.cwd(), 'japanese-case-studies-mdx')
  
  let successCount = 0
  let failCount = 0
  
  for (let i = 0; i < caseStudiesEN.length; i++) {
    const caseStudy = caseStudiesEN[i]
    const slug = caseStudy.slug
    
    console.log(`[${i + 1}/${caseStudiesEN.length}] Migrating: ${caseStudy.titleEN}`)
    
    try {
      // Read English MDX
      const enFile = slugToEnFile[slug]
      const enPath = enFile ? path.join(enDir, enFile) : null
      const enData = enPath && fs.existsSync(enPath) ? readMdxFile(enPath) : null
      
      // Read Japanese MDX
      const jaFile = slugToJaFile[slug]
      const jaPath = jaFile ? path.join(jaDir, jaFile) : null
      const jaData = jaPath && fs.existsSync(jaPath) ? readMdxFile(jaPath) : null
      
      if (!enData && !jaData) {
        console.log(`  ⚠ Warning: No MDX files found for ${slug}`)
      }
      
      // Get hero image URL from asset map
      const imageUrl = caseStudyHeroMap[slug] || `/case-assets/${slug}/hero.webp`
      
      // Build the Sanity document
      const newCaseStudy = {
        _type: "caseStudy",
        _id: `caseStudy-${slug}`,
        slug: { _type: "slug", current: slug },
        
        // Titles from case-studies-data.ts
        titleEN: caseStudy.titleEN,
        titleJA: caseStudy.titleJA,
        
        // Categories
        categoryEN: caseStudy.categoryEN,
        categoryJA: caseStudy.categoryJA,
        
        // Excerpts (short descriptions)
        excerptEN: caseStudy.excerptEN,
        excerptJA: caseStudy.excerptJA,
        
        // Meta descriptions from MDX frontmatter
        metaDescriptionEN: enData?.frontmatter?.metaDescription || caseStudy.excerptEN,
        metaDescriptionJA: jaData?.frontmatter?.metaDescription || caseStudy.excerptJA,
        
        // Legacy image URL (from public folder)
        imageUrl: imageUrl,
        
        // HTML content converted from MDX
        htmlContentEN: enData?.htmlContent || '',
        htmlContentJA: jaData?.htmlContent || '',
        
        // Metrics (badges)
        metrics: caseStudy.metrics || [],
        
        // Tags from MDX frontmatter
        tags: enData?.frontmatter?.tags || jaData?.frontmatter?.tags || [],
        
        // Published date
        publishedAt: enData?.frontmatter?.date 
          ? new Date(enData.frontmatter.date).toISOString() 
          : new Date().toISOString(),
        
        // Display order (based on original array order)
        order: i + 1,
        
        // Not featured by default
        featured: false,
      }
      
      await client.createOrReplace(newCaseStudy)
      console.log(`  ✓ Success: ${caseStudy.titleEN}`)
      successCount++
      
    } catch (error) {
      console.error(`  ✗ Failed: ${caseStudy.titleEN}`, error)
      failCount++
    }
  }
  
  console.log("\n" + "=".repeat(50))
  console.log(`✅ Migration Complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Failed: ${failCount}`)
  console.log("=".repeat(50))
}

// Run migration
migrateCaseStudies()
