// Regenerate the lightweight catalog metadata after adding/removing courses:
//   node scripts/gen-courses-meta.mjs
// Reads each course file directly (index.js is code-split and no longer holds
// the full course objects). Preserves existing catalog order and appends new courses.
import { readdirSync, writeFileSync, existsSync } from 'node:fs'

const COURSES_DIR = new URL('../src/data/courses/', import.meta.url)
const META_PATH = new URL('../src/data/courses-meta.js', import.meta.url)

// Existing order (if any) so the catalog order stays stable.
let priorOrder = []
if (existsSync(META_PATH)) {
  const { coursesMeta } = await import(META_PATH.href)
  priorOrder = coursesMeta.map(c => c.id)
}

// Load every course file that exports a real course (has id + units).
const files = readdirSync(COURSES_DIR).filter(f => f.endsWith('.js'))
const byId = {}
for (const f of files) {
  const mod = await import(new URL(f, COURSES_DIR).href)
  const c = mod.default
  if (!c || !c.id || !Array.isArray(c.units)) continue // skip helpers like physics-supplement.js
  byId[c.id] = c
}

// Order: prior order first, then any new ids not seen before (appended).
const order = [...priorOrder.filter(id => byId[id]), ...Object.keys(byId).filter(id => !priorOrder.includes(id))]

const meta = order.map(id => {
  const c = byId[id]
  return {
    id: c.id, title: c.title, titleZh: c.titleZh, subject: c.subject, level: c.level,
    description: c.description, descriptionZh: c.descriptionZh,
    unitCount: c.units.length,
    lessonCount: c.units.reduce((n, u) => n + u.lessons.length, 0),
  }
})

const out = '// AUTO-GENERATED lightweight catalog metadata (no lesson content/problems).\n'
  + '// Regenerate after adding/removing courses: node scripts/gen-courses-meta.mjs\n'
  + 'export const coursesMeta = ' + JSON.stringify(meta, null, 2) + '\n'
writeFileSync(META_PATH, out)
console.log('wrote courses-meta.js with', meta.length, 'courses')
const newOnes = order.filter(id => !priorOrder.includes(id))
console.log('newly added:', newOnes.join(', ') || 'none')
