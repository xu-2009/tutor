import secondaryMath1Honors from './courses/secondary-math-1-honors.js'
import algebra1 from './courses/algebra1.js'
import geometry from './courses/geometry.js'
import algebra2 from './courses/algebra2.js'
import precalculus from './courses/precalculus.js'
import apCalcAB from './courses/ap-calculus-ab.js'
import apCalcBC from './courses/ap-calculus-bc.js'
import physics from './courses/physics.js'
import chemistry from './courses/chemistry.js'
import biology from './courses/biology.js'
import english9 from './courses/english-9.js'
import english10 from './courses/english-10.js'
import english11 from './courses/english-11.js'
import english12 from './courses/english-12.js'
import apChemistry from './courses/ap-chemistry.js'
import apPhysics1 from './courses/ap-physics-1.js'
import apPhysicsC from './courses/ap-physics-c.js'
import apUsHistory from './courses/ap-us-history.js'
import apChinese from './courses/ap-chinese.js'
import spanish1Honors from './courses/spanish-1-honors.js'

export const courses = [
  secondaryMath1Honors,
  algebra1,
  geometry,
  algebra2,
  precalculus,
  apCalcAB,
  apCalcBC,
  physics,
  chemistry,
  biology,
  apChemistry,
  apPhysics1,
  apPhysicsC,
  english9,
  english10,
  english11,
  english12,
  apChinese,
  spanish1Honors,
  apUsHistory,
]

export const getCourse = (id) => courses.find(c => c.id === id)
