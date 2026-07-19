import { useState, useEffect } from 'react'
import { getCourse, getCourseCached } from './index.js'

// Loads a code-split course by id. Returns { course, loading }.
// If the course chunk is already cached, it's available synchronously (no flash).
export function useCourse(courseId) {
  const [course, setCourse] = useState(() => (courseId ? getCourseCached(courseId) : null))
  const [loading, setLoading] = useState(() => !!courseId && !getCourseCached(courseId))

  useEffect(() => {
    let active = true
    const cached = courseId ? getCourseCached(courseId) : null
    if (cached || !courseId) {
      setCourse(cached)
      setLoading(false)
      return
    }
    setLoading(true)
    getCourse(courseId).then(c => {
      if (!active) return
      setCourse(c)
      setLoading(false)
    })
    return () => { active = false }
  }, [courseId])

  return { course, loading }
}
