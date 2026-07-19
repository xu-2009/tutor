// Lightweight catalog metadata loads on first paint (see courses-meta.js).
// Full course content (lessons + problems) is code-split: each course is a
// separate chunk fetched on demand via getCourse(id), so the initial bundle
// stays small no matter how many courses exist.
import { coursesMeta } from './courses-meta.js'

export { coursesMeta }

// The catalog pages (Courses, Landing) only need metadata — expose it as `courses`.
export const courses = coursesMeta

// Vite turns this glob into a map of lazy loaders, one dynamic import per file.
const loaders = import.meta.glob('./courses/*.js')
const cache = new Map()

// Async: returns the full course object (with units/lessons/problems), or null.
export async function getCourse(id) {
  if (cache.has(id)) return cache.get(id)
  const loader = loaders[`./courses/${id}.js`]
  if (!loader) return null
  const mod = await loader()
  cache.set(id, mod.default)
  return mod.default
}

// Sync: returns a full course only if it's already been loaded (else null).
export function getCourseCached(id) {
  return cache.get(id) || null
}
