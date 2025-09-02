import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const ROOT = process.cwd()
const sitemapPath = path.join(ROOT, 'public', 'sitemap-0.xml')
const reportsDir = path.join(ROOT, 'reports', 'lighthouse')
fs.mkdirSync(reportsDir, { recursive: true })

const formFactor = process.argv.includes('--desktop') ? 'desktop' : 'mobile'

const xml = fs.readFileSync(sitemapPath, 'utf8')
const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1])
// Map to localhost and keep path portion
const urls = Array.from(new Set(locs.map(u => {
  try {
    const url = new URL(u)
    url.protocol = 'http:'
    url.host = 'localhost:3000'
    return url.toString()
  } catch {
    return null
  }
}).filter(Boolean)))

const summary = []

function safeNameFromUrl(u) {
  const { pathname } = new URL(u)
  // e.g., / -> home, /about -> about, /blog/foo -> blog-foo
  return pathname === '/' ? 'home' : pathname.replace(/\/+/, '/').replace(/^\//, '').replace(/\//g, '-').replace(/[^a-zA-Z0-9-_]/g, '') || 'root'
}

function runLH(url) {
  const base = safeNameFromUrl(url) + (formFactor === 'desktop' ? '-desktop' : '-mobile')
  const outBase = path.join(reportsDir, base)
  const cmd = [
    'npx --yes lighthouse',
    url,
    '--only-categories=performance',
    `--emulatedFormFactor=${formFactor}`,
    '--output html --output json',
    `--output-path=${outBase}.html`
  ].join(' ')
  const started = Date.now()
  let score = null
  try {
    execSync(cmd, { stdio: 'ignore' })
    const jsonPath = `${outBase}.report.json`
    const json = fs.readFileSync(jsonPath, 'utf8')
    const data = JSON.parse(json)
    score = Math.round((data.categories?.performance?.score ?? 0) * 100)
  } catch (e) {
    score = null
  }
  const durationMs = Date.now() - started
  return { url, score, durationMs }
}

console.log(`Running Lighthouse on ${urls.length} URLs (${formFactor})...`) 

for (const url of urls) {
  const res = runLH(url)
  summary.push(res)
  console.log(`${res.score === null ? 'ERR' : res.score + '%'} \t ${url}`)
}

const summaryPath = path.join(reportsDir, `summary-${formFactor}.json`)
fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2))

const csvPath = path.join(reportsDir, `summary-${formFactor}.csv`)
const csv = ['score,url,durationMs', ...summary.map(r => `${r.score ?? ''},${r.url},${r.durationMs}`)].join('\n')
fs.writeFileSync(csvPath, csv)

console.log(`\nSummary saved to:\n- ${path.relative(ROOT, summaryPath)}\n- ${path.relative(ROOT, csvPath)}\nReports at ${path.relative(ROOT, reportsDir)}`)

