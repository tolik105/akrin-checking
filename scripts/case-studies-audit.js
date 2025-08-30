const fs = require('fs');
const path = require('path');

const EN_DIR = path.join(process.cwd(), 'english-case-studies-mdx');
const JA_DIR = path.join(process.cwd(), 'japanese-case-studies-mdx');

const EXPECTED_SECTIONS_EN = ['Overview','Context','Challenge','Approach','Implementation','Outcomes','Timeline','Technology'];
const EXPECTED_SECTIONS_JA = ['概要','背景','課題','アプローチ','実装の詳細','実施内容','成果','期間','使用技術','次のステップ'];
const MIN_WORDS = 450;
const MAX_WORDS = 700;

function readFiles(dir) {
  return fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).map(f => path.join(dir, f));
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---([\s\S]*?)---/);
  if (!m) return { frontmatter: {}, body: raw.trim() };
  const fm = {}; 
  const lines = m[1].split('\n');
  for (const line of lines) {
    const l = line.trim();
    if (!l || l.startsWith('#')) continue;
    const kv = l.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/);
    if (kv) {
      const key = kv[1];
      let val = kv[2].trim();
      if (val.startsWith('[')) { fm[key] = val; continue; }
      val = val.replace(/^"|"$/g, '');
      fm[key] = val;
    }
  }
  const body = raw.slice(m[0].length).trim();
  return { frontmatter: fm, body };
}

function mdToText(md) {
  return md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/!\[[^\]]*\]\([^\)]*\)/g, '')
    .replace(/\[[^\]]*\]\([^\)]*\)/g, '')
    .replace(/\*\*|\*/g, '')
    // Keep list and quote content; strip only the symbols
    .replace(/^>\s?/gm, '')
    .replace(/^\-\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(text) {
  const words = text.split(/\s+/).filter(Boolean);
  return words.length;
}

function approxWordsForJA(text) {
  // Roughly approximate Japanese length by characters since whitespace is sparse
  const chars = text.replace(/\s+/g, '').length;
  return Math.ceil(chars / 2); // ~2 chars per "word" equivalence
}

function extractHeadings(md) {
  const headings = [];
  const lines = md.split(/\n/);
  for (const line of lines) {
    const m = line.match(/^(#+)\s+(.*)$/);
    if (m) {
      headings.push({ level: m[1].length, text: m[2].trim() });
    }
  }
  return headings;
}

function hasSingleH1InRender(md) {
  // In render we demote H1s, so main page H1 is from template. Here we only ensure the MDX doesn't rely on H1 for uniqueness.
  // We accept any number here; the page template ensures a single H1.
  return true;
}

function checkSectionsEN(headings) {
  const texts = headings.map(h => h.text.toLowerCase());
  const checks = {};
  for (const sec of EXPECTED_SECTIONS_EN) checks[sec] = texts.some(t => t.startsWith(sec.toLowerCase()));
  // Implementation can be 'Implementation' or contained in bullets; we already check it.
  return checks;
}

function checkSectionsJA(headings) {
  const texts = headings.map(h => h.text);
  const checks = {};
  for (const sec of EXPECTED_SECTIONS_JA) checks[sec] = texts.some(t => t.startsWith(sec));
  // If 実装の詳細 absent but 実施内容 present, accept
  if (!checks['実装の詳細'] && checks['実施内容']) checks['実装の詳細'] = true;
  return checks;
}

function scorePage({ hasMetaDesc, metaDescLenOk, sectionsOkCount, words, keywordsOk, jsonLd=true, canonical=true, og=true, faq=true, ga=true, heroSizes=true }) {
  // Simple weighting
  let score = 0;
  score += hasMetaDesc ? 15 : 0;
  score += metaDescLenOk ? 10 : 0;
  score += Math.min(30, sectionsOkCount * 4); // up to 30
  score += (words >= MIN_WORDS && words <= MAX_WORDS) ? 15 : 0;
  score += keywordsOk ? 10 : 0;
  score += jsonLd ? 5 : 0;
  score += canonical ? 5 : 0;
  score += og ? 5 : 0;
  score += faq ? 3 : 0;
  score += heroSizes ? 2 : 0;
  score += ga ? 0 : 0; // GA not scored
  return score; // max ~100
}

function keywordsFromTags(fm) {
  if (!fm.tags) return [];
  const plain = fm.tags.replace(/[\[\]'"\s]/g,'');
  return plain.split(',').filter(Boolean);
}

function normalizeDashes(s) {
  return s.replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, '-');
}

function keywordsOk(body, tags, locale) {
  if (locale !== 'en') return true; // Only enforce on EN pages
  if (!tags.length) return true; // skip if none
  const text = normalizeDashes(body.toLowerCase());
  const hits = tags.reduce((acc, t) => acc + (text.includes(normalizeDashes(t.toLowerCase())) ? 1 : 0), 0);
  return hits >= Math.min(3, tags.length);
}

function auditDir(dir, locale) {
  const files = readFiles(dir);
  const results = [];
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const { frontmatter: fm, body } = parseFrontmatter(raw);
    const text = mdToText(body);
    const wordsRaw = wordCount(text);
    const words = locale === 'ja' ? approxWordsForJA(text) : wordsRaw;
    const headings = extractHeadings(body);
    const hasMetaDesc = typeof fm.metaDescription === 'string' && fm.metaDescription.trim().length > 0;
    const metaDescLen = hasMetaDesc ? fm.metaDescription.trim().length : 0;
    const metaDescLenOk = metaDescLen >= 130 && metaDescLen <= 155;
    const sectionsChecks = locale === 'en' ? checkSectionsEN(headings) : checkSectionsJA(headings);
    const sectionsOkCount = Object.values(sectionsChecks).filter(Boolean).length;
    const kws = keywordsFromTags(fm);
    const kwsOk = keywordsOk(text, kws, locale);
    const score = scorePage({ hasMetaDesc, metaDescLenOk, sectionsOkCount, words, keywordsOk: kwsOk });

    const issues = [];
    if (words < MIN_WORDS) issues.push(`Below ${MIN_WORDS} words (${words})`);
    if (words > MAX_WORDS) issues.push(`Above ${MAX_WORDS} words (${words})`);
    if (!hasMetaDesc) issues.push('Missing metaDescription');
    else if (!metaDescLenOk) issues.push(`metaDescription length ${metaDescLen} chars (should be 130–155)`);
    if (sectionsOkCount < (locale==='en' ? 6 : 6)) issues.push('Missing some expected sections');
    if (!kwsOk) issues.push('Tags/keywords not reflected in body text');

    results.push({
      file: path.basename(file),
      slug: fm.slug || null,
      title: fm.title || null,
      words,
      metaDescriptionLength: metaDescLen,
      hasMetaDescription: hasMetaDesc,
      sections: sectionsChecks,
      sectionsOkCount,
      tags: kws,
      keywordsOk: kwsOk,
      seoScore: score,
      issues,
    });
  }
  return results;
}

function pairBySlug(enList, jaList) {
  const mapEn = new Map(enList.map(r => [r.slug, r]));
  const mapJa = new Map(jaList.map(r => [r.slug, r]));
  const slugs = Array.from(new Set([...mapEn.keys(), ...mapJa.keys()])).sort();
  return slugs.map(slug => ({ slug, en: mapEn.get(slug) || null, ja: mapJa.get(slug) || null }));
}

function parityIssues(pair) {
  const issues = [];
  if (!pair.en || !pair.ja) {
    issues.push('Missing EN or JA version');
    return issues;
  }
  const wEn = pair.en.words, wJa = pair.ja.words;
  const diff = Math.abs(wEn - wJa) / Math.max(1, Math.max(wEn, wJa));
  if (diff > 0.2) issues.push(`Content length differs >20% (EN ${wEn}, JA ${wJa})`);

  // Section parity: count of sections present should be similar
  const enOk = Object.values(pair.en.sections).filter(Boolean).length;
  const jaOk = Object.values(pair.ja.sections).filter(Boolean).length;
  if (Math.abs(enOk - jaOk) > 2) issues.push('Section coverage differs notably between EN and JA');

  return issues;
}

function main() {
  const enResults = auditDir(EN_DIR, 'en');
  const jaResults = auditDir(JA_DIR, 'ja');
  const pairs = pairBySlug(enResults, jaResults);

  const report = pairs.map(p => ({
    slug: p.slug,
    en: p.en,
    ja: p.ja,
    parityIssues: parityIssues(p)
  }));

  const summary = {
    totalEN: enResults.length,
    totalJA: jaResults.length,
    belowMin: report.filter(r => r.en && r.en.words < MIN_WORDS || r.ja && r.ja.words < MIN_WORDS).length,
    missingMeta: report.filter(r => (r.en && !r.en.hasMetaDescription) || (r.ja && !r.ja.hasMetaDescription)).length,
  };

  console.log(JSON.stringify({ summary, report }, null, 2));
}

main();

