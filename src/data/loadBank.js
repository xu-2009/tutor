import { useState, useEffect } from 'react'

// Per-course diagnostic question banks live in ./banks/<courseId>.js and are
// loaded on demand (only when a diagnostic is taken). A bank is:
//   export default { "<unitId>/<lessonId>": [ {problem}, ...up to 20 ], ... }
// If a course has no bank file, the diagnostic falls back to the lesson's own problems.
const bankLoaders = import.meta.glob('./banks/*.js')
const cache = new Map()

export async function getBank(courseId) {
  if (cache.has(courseId)) return cache.get(courseId)
  const loader = bankLoaders[`./banks/${courseId}.js`]
  if (!loader) { cache.set(courseId, null); return null }
  try {
    const mod = await loader()
    cache.set(courseId, mod.default || null)
    return cache.get(courseId)
  } catch {
    cache.set(courseId, null)
    return null
  }
}

// { bank, loading } — bank is null when the course has no bank file (use fallback).
export function useBank(courseId) {
  const [bank, setBank] = useState(() => (courseId && cache.has(courseId) ? cache.get(courseId) : null))
  const [loading, setLoading] = useState(() => !!courseId && !cache.has(courseId))

  useEffect(() => {
    let active = true
    if (!courseId) { setBank(null); setLoading(false); return }
    if (cache.has(courseId)) { setBank(cache.get(courseId)); setLoading(false); return }
    setLoading(true)
    getBank(courseId).then(b => { if (active) { setBank(b); setLoading(false) } })
    return () => { active = false }
  }, [courseId])

  return { bank, loading }
}
