import fs from 'node:fs'
import path from 'node:path'

function mdToText(md: string) {
  return md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/!\[[^\]]*\]\([^\)]*\)/g, '')
    .replace(/\[[^\]]*\]\([^\)]*\)/g, '')
    .replace(/[>#*_\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function wc(p: string) {
  const raw = fs.readFileSync(p, 'utf8')
  const body = raw.replace(/^---[\s\S]*?---/, '')
  const text = mdToText(body)
  return text.split(/\s+/).filter(Boolean).length
}

function scan(dir: string) {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => ({ file: path.join(dir, f), words: wc(path.join(dir, f)) }))
}

const enDir = 'english-case-studies-mdx'
const jaDir = 'japanese-case-studies-mdx'

const en = scan(enDir)
const ja = scan(jaDir)

const minWords = 300

const report = {
  threshold: minWords,
  en: en.map(e => ({ file: path.basename(e.file), words: e.words, ok: e.words >= minWords })),
  ja: ja.map(j => ({ file: path.basename(j.file), words: j.words, ok: j.words >= minWords })),
}

console.log(JSON.stringify(report, null, 2))

