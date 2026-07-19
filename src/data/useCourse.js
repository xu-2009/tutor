import { useState, useEffect } from 'react'
import { getCourse, getCourseCached } from './index.js'

// Loads a code-split course by id. Returns { course, loading, error }.
// State is bound to courseId so a course switch never returns the previous course,
// and a failed chunk load surfaces an error instead of hanging on a spinner forever.
function initialState(courseId) {
  const cached = courseId ? getCourseCached(courseId) : null
  return { courseId, course: cached, loading: !!courseId && !cached, error: null }
}

export function useCourse(courseId) {
  const [state, setState] = useState(() => initialState(courseId))

  useEffect(() => {
    let active = true
    if (!courseId) { setState({ courseId, course: null, loading: false, error: null }); return }
    const cached = getCourseCached(courseId)
    if (cached) { setState({ courseId, course: cached, loading: false, error: null }); return }
    setState({ courseId, course: null, loading: true, error: null })
    getCourse(courseId)
      .then(c => { if (active) setState({ courseId, course: c, loading: false, error: c ? null : new Error('not-found') }) })
      .catch(err => { if (active) setState({ courseId, course: null, loading: false, error: err }) })
    return () => { active = false }
  }, [courseId])

  // Guard the first render after courseId changes, before the effect runs: never
  // hand back state that belongs to the previous courseId.
  if (state.courseId !== courseId) return initialState(courseId)
  return { course: state.course, loading: state.loading, error: state.error }
}
