import algebra1 from './courses/algebra1.js'
import geometry from './courses/geometry.js'
import algebra2 from './courses/algebra2.js'
import precalculus from './courses/precalculus.js'
import apCalcAB from './courses/ap-calculus-ab.js'
import apCalcBC from './courses/ap-calculus-bc.js'
import physics from './courses/physics.js'
import chemistry from './courses/chemistry.js'
import biology from './courses/biology.js'
import english from './courses/english.js'

export const courses = [
  algebra1,
  geometry,
  algebra2,
  precalculus,
  apCalcAB,
  apCalcBC,
  physics,
  chemistry,
  biology,
  english,
]

export const getCourse = (id) => courses.find(c => c.id === id)
