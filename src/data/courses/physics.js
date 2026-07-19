import apPhysics1 from './ap-physics-1.js'
import supplementalUnits from './physics-supplement.js'

const generalizeText = value => {
  if (typeof value === 'string') {
    return value
      .replaceAll('AP Physics 1', 'this algebra-based course')
      .replaceAll('AP exam tip', 'Course tip')
      .replaceAll('the AP exam', 'physics problems')
      .replaceAll('an AP exam', 'a physics assessment')
      .replaceAll('AP exam', 'course assessment')
  }
  if (Array.isArray(value)) return value.map(generalizeText)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, generalizeText(item)]))
  }
  return value
}

const apUnit = (id, title, titleZh, lessonIds = null) => {
  const source = apPhysics1.units.find(unit => unit.id === id)
  const lessons = lessonIds
    ? lessonIds.map(lessonId => source.lessons.find(item => item.id === lessonId))
    : source.lessons
  return { id, title, titleZh, lessons: generalizeText(lessons) }
}

const extendedUnits = [
  apUnit('linear-momentum', 'Momentum and Collisions', '动量与碰撞'),
  apUnit('dynamics', 'Circular Motion and Gravitation', '圆周运动与万有引力', ['circular-motion-gravitation']),
  apUnit('torque-rotational-dynamics', 'Rotational Motion and Torque', '转动运动与力矩'),
  apUnit('rotating-systems', 'Rotational Energy and Angular Momentum', '转动能量与角动量'),
  apUnit('oscillations', 'Oscillations', '振动'),
  apUnit('fluids', 'Fluid Mechanics', '流体力学'),
]

const balanceAnswerPositions = units => {
  let nextAnswer = 0
  const refsChoiceLetter = problem =>
    /\b(choice|option|answer)\s*[A-D]\b|选项\s*[A-D]/.test(
      (problem.explanation?.en || '') + ' ' + (problem.explanation?.zh || '')
    )
  return units.map(unit => ({
    ...unit,
    lessons: unit.lessons.map(lesson => ({
      ...lesson,
      problems: lesson.problems.map(problem => {
        if (problem.type !== 'mc') return problem
        // Skip problems whose explanation names a choice by letter — rotating the
        // choices would make that reference point at the wrong option.
        if (refsChoiceLetter(problem)) return problem
        const target = nextAnswer++ % problem.choices.length
        const offset = (problem.answer - target + problem.choices.length) % problem.choices.length
        return {
          ...problem,
          choices: problem.choices.map((_, index) => problem.choices[(index + offset) % problem.choices.length]),
          answer: target,
        }
      }),
    })),
  }))
}

export default {
  id: 'physics',
  title: 'Physics',
  titleZh: '物理',
  subject: 'science',
  level: 'Standard',
  description: 'A complete algebra-based U.S. high-school physics course covering laboratory skills, mechanics, fluids, thermal physics, waves, optics, electricity, magnetism, and modern physics.',
  descriptionZh: '完整的美国高中代数型普通物理课程，涵盖实验技能、力学、流体、热学、波、光学、电学、磁学与近代物理。',
  units: balanceAnswerPositions([
    supplementalUnits[0],
    {
      id: 'kinematics',
      title: 'Kinematics',
      titleZh: '运动学',
      lessons: [
        {
          id: 'describing-motion',
          title: 'Position, Velocity, and Acceleration',
          titleZh: '位置、速度与加速度',
          content: [
            { type: 'h2', en: 'Describing Motion in One Dimension', zh: '一维运动的描述' },
            { type: 'p', en: 'Kinematics is the branch of physics that describes motion without asking what causes it. To describe motion along a straight line we pick an origin and a positive direction, then track the object’s position $x$ as a function of time $t$. The change in position, $\\Delta x = x_f - x_i$, is called the displacement. Displacement is a vector-like quantity: it can be positive or negative, and it is different from distance, which is the total length of the path traveled.', zh: '运动学是描述运动而不追问运动原因的物理分支。要描述沿直线的运动，我们先选定原点和正方向，然后追踪物体位置 $x$ 随时间 $t$ 的变化。位置的变化 $\\Delta x = x_f - x_i$ 称为位移。位移具有矢量性质：它可正可负，并且与路程不同——路程是物体实际走过路径的总长度。' },
            { type: 'h3', en: 'Average and Instantaneous Velocity', zh: '平均速度与瞬时速度' },
            { type: 'p', en: 'Average velocity is displacement divided by the time interval:', zh: '平均速度等于位移除以时间间隔：' },
            { type: 'math', tex: 'v_{avg} = \\frac{\\Delta x}{\\Delta t}' },
            { type: 'p', en: 'Instantaneous velocity is the velocity at a single moment — the slope of the position–time graph at that instant. Speed is the magnitude of velocity, so speed is never negative. On a position–time graph, a straight line means constant velocity, and a curved line means the velocity is changing.', zh: '瞬时速度是某一时刻的速度——即位置-时间图像在该时刻的斜率。速率是速度的大小，因此速率永远不为负。在位置-时间图像上，直线代表匀速运动，曲线代表速度在变化。' },
            { type: 'h3', en: 'Acceleration', zh: '加速度' },
            { type: 'p', en: 'Acceleration measures how quickly velocity changes:', zh: '加速度衡量速度变化的快慢：' },
            { type: 'math', tex: 'a_{avg} = \\frac{\\Delta v}{\\Delta t}' },
            { type: 'p', en: 'Its SI unit is meters per second squared ($\\text{m/s}^2$). On a velocity–time graph, acceleration is the slope, and the displacement is the area between the graph and the time axis. Throughout this course we take the magnitude of gravitational acceleration to be $g = 9.8\\ \\text{m/s}^2$.', zh: '其国际单位是米每二次方秒（$\\text{m/s}^2$）。在速度-时间图像上，加速度是斜率，而位移是图线与时间轴之间的面积。本课程中重力加速度的大小取 $g = 9.8\\ \\text{m/s}^2$。' },
            { type: 'note', en: 'Common misconception: negative acceleration does NOT always mean slowing down. An object slows down only when its acceleration and velocity point in opposite directions. A ball thrown downward with downward acceleration speeds up even though both quantities may be negative.', zh: '常见误区：负加速度并不一定意味着减速。只有当加速度与速度方向相反时，物体才在减速。一个向下抛出的球，其加速度也向下，即使两个量都为负，它仍在加速。' },
            {
              type: 'example',
              title: { en: 'Example 1: Average velocity vs. average speed', zh: '例题 1：平均速度与平均速率' },
              problem: { en: 'A runner jogs 300 m east in 100 s, then 100 m west in 50 s. Find her average speed and average velocity for the whole trip (take east as positive).', zh: '一名跑步者先向东跑 300 m 用时 100 s，再向西跑 100 m 用时 50 s。求全程的平均速率和平均速度（以向东为正方向）。' },
              solution: [
                { type: 'p', en: 'Total distance is $300 + 100 = 400$ m, and total time is $150$ s, so the average speed is', zh: '总路程为 $300 + 100 = 400$ m，总时间为 $150$ s，故平均速率为' },
                { type: 'math', tex: '\\text{speed}_{avg} = \\frac{400\\ \\text{m}}{150\\ \\text{s}} \\approx 2.7\\ \\text{m/s}' },
                { type: 'p', en: 'The displacement is $+300 - 100 = +200$ m, so the average velocity is', zh: '位移为 $+300 - 100 = +200$ m，故平均速度为' },
                { type: 'math', tex: 'v_{avg} = \\frac{+200\\ \\text{m}}{150\\ \\text{s}} \\approx +1.3\\ \\text{m/s}' },
                { type: 'p', en: 'Average speed and average velocity differ whenever the path doubles back.', zh: '只要路径有折返，平均速率与平均速度就会不同。' },
              ],
            },
            {
              type: 'example',
              title: { en: 'Example 2: Reading acceleration from velocities', zh: '例题 2：由速度求加速度' },
              problem: { en: 'A car’s velocity changes from $+24\\ \\text{m/s}$ to $+6\\ \\text{m/s}$ in $6.0$ s. Find its average acceleration and describe the motion.', zh: '一辆汽车的速度在 $6.0$ s 内从 $+24\\ \\text{m/s}$ 变为 $+6\\ \\text{m/s}$。求平均加速度并描述该运动。' },
              solution: [
                { type: 'math', tex: 'a_{avg} = \\frac{\\Delta v}{\\Delta t} = \\frac{6 - 24}{6.0} = -3.0\\ \\text{m/s}^2' },
                { type: 'p', en: 'The velocity is positive but the acceleration is negative, so they point in opposite directions: the car is moving forward while slowing down.', zh: '速度为正而加速度为负，二者方向相反：汽车在向前行驶的同时减速。' },
              ],
            },
          ],
          problems: [
            {
              type: 'mc',
              question: { en: 'A student walks 3 m east and then 4 m west. What is the magnitude of her displacement?', zh: '一名学生先向东走 3 m，再向西走 4 m。她位移的大小是多少？' },
              choices: ['$1\\ \\text{m}$', '$7\\ \\text{m}$', '$5\\ \\text{m}$', '$12\\ \\text{m}$'],
              answer: 0,
              explanation: { en: 'Displacement is the net change in position: $+3 - 4 = -1$ m, so its magnitude is 1 m. The distance traveled (7 m) is different.', zh: '位移是位置的净变化：$+3 - 4 = -1$ m，大小为 1 m。走过的路程（7 m）与之不同。' },
            },
            {
              type: 'mc',
              question: { en: 'On a position–time graph, the slope of the curve at a point represents:', zh: '在位置-时间图像上，某点处曲线的斜率表示：' },
              choices: ['instantaneous velocity | 瞬时速度', 'acceleration | 加速度', 'displacement | 位移', 'distance | 路程'],
              answer: 0,
              explanation: { en: 'Slope of $x$ vs. $t$ is $\\Delta x / \\Delta t$, which is velocity. Acceleration is the slope of a velocity–time graph instead.', zh: '$x$-$t$ 图的斜率是 $\\Delta x / \\Delta t$，即速度。加速度则是速度-时间图的斜率。' },
            },
            {
              type: 'input',
              question: { en: 'A cyclist travels 150 m in 12.5 s at constant velocity. Find the velocity in m/s (to one decimal place).', zh: '一名骑行者以恒定速度在 12.5 s 内行进 150 m。求速度，单位 m/s（保留一位小数）。' },
              answer: '12.0',
              accept: ['12'],
              explanation: { en: 'Constant velocity means $v = \\Delta x / \\Delta t = 150 / 12.5 = 12.0$ m/s.', zh: '匀速运动中 $v = \\Delta x / \\Delta t = 150 / 12.5 = 12.0$ m/s。' },
            },
            {
              type: 'input',
              question: { en: 'A train speeds up from 8.0 m/s to 20.0 m/s in 6.0 s. Find its average acceleration in m/s² (to one decimal place).', zh: '一列火车在 6.0 s 内从 8.0 m/s 加速到 20.0 m/s。求平均加速度，单位 m/s²（保留一位小数）。' },
              answer: '2.0',
              accept: ['2'],
              explanation: { en: '$a = \\Delta v / \\Delta t = (20.0 - 8.0)/6.0 = 2.0\\ \\text{m/s}^2$. The velocity gains 2.0 m/s during each second.', zh: '$a = \\Delta v / \\Delta t = (20.0 - 8.0)/6.0 = 2.0\\ \\text{m/s}^2$，即每秒速度增加 2.0 m/s。' },
            },
            {
              type: 'mc',
              question: { en: 'An object has a negative velocity and a positive acceleration. The object is:', zh: '某物体速度为负、加速度为正。该物体正在：' },
              choices: ['slowing down | 减速', 'speeding up | 加速', 'at rest | 静止', 'moving at constant speed | 匀速运动'],
              answer: 0,
              explanation: { en: 'When velocity and acceleration have opposite signs, they point in opposite directions, so the speed decreases. Sign alone does not tell you speeding up or slowing down — the comparison of directions does.', zh: '当速度与加速度符号相反时，二者方向相反，速率减小。仅凭正负号无法判断加速还是减速——要比较两者的方向。' },
            },
            {
              type: 'mc',
              question: { en: 'On a velocity–time graph, the area between the curve and the time axis represents:', zh: '在速度-时间图像上，图线与时间轴之间的面积表示：' },
              choices: ['displacement | 位移', 'acceleration | 加速度', 'average speed | 平均速率', 'force | 力'],
              answer: 0,
              explanation: { en: 'Each thin strip of area is $v\\,\\Delta t$, which is a small displacement; adding them up gives the total displacement.', zh: '每一小条面积等于 $v\\,\\Delta t$，即一小段位移；把它们加起来就得到总位移。' },
            },
            {
              type: 'input',
              question: { en: 'A car moving at $+30$ m/s brakes with a constant acceleration of $-5.0$ m/s². How many seconds does it take to stop? (One decimal place.)', zh: '一辆以 $+30$ m/s 行驶的汽车以 $-5.0$ m/s² 的恒定加速度刹车。它需要多少秒停下？（保留一位小数）' },
              answer: '6.0',
              accept: ['6'],
              explanation: { en: 'Set $v = v_0 + at = 0$: $t = -v_0/a = -30/(-5.0) = 6.0$ s. The velocity drops by 5 m/s each second, so 30 m/s takes 6 s to remove.', zh: '令 $v = v_0 + at = 0$，得 $t = -v_0/a = -30/(-5.0) = 6.0$ s。速度每秒减少 5 m/s，30 m/s 需 6 s 减完。' },
            },
            {
              type: 'input',
              question: { en: 'A velocity–time graph shows constant $v = 9.0$ m/s for 4.0 s, then constant $v = 3.0$ m/s for 6.0 s. Find the total displacement in m (whole number).', zh: '速度-时间图像显示：前 4.0 s 内速度恒为 9.0 m/s，随后 6.0 s 内速度恒为 3.0 m/s。求总位移，单位 m（整数）。' },
              answer: '54',
              explanation: { en: 'Displacement is the area under the graph: $9.0 \\times 4.0 + 3.0 \\times 6.0 = 36 + 18 = 54$ m.', zh: '位移等于图线下的面积：$9.0 \\times 4.0 + 3.0 \\times 6.0 = 36 + 18 = 54$ m。' },
            },
          ],
        },
        {
          id: 'kinematic-equations-free-fall',
          title: 'Kinematic Equations and Free Fall',
          titleZh: '运动学方程与自由落体',
          content: [
            { type: 'h2', en: 'The Kinematic Equations', zh: '运动学方程' },
            { type: 'p', en: 'When acceleration is constant, four equations connect the five quantities $x$ (displacement), $v_0$ (initial velocity), $v$ (final velocity), $a$ (acceleration), and $t$ (time). Each equation omits exactly one of the five, so a good strategy is: list what you know, identify what you want, and choose the equation that skips the quantity you neither know nor need.', zh: '当加速度恒定时，有四个方程把五个量联系起来：位移 $x$、初速度 $v_0$、末速度 $v$、加速度 $a$ 和时间 $t$。每个方程恰好缺少其中一个量，所以好的解题策略是：列出已知量，明确所求量，然后选择恰好跳过"既不知道也不需要"的那个量的方程。' },
            { type: 'math', tex: 'v = v_0 + at' },
            { type: 'math', tex: 'x = v_0 t + \\tfrac{1}{2} a t^2' },
            { type: 'math', tex: 'v^2 = v_0^2 + 2ax' },
            { type: 'math', tex: 'x = \\tfrac{v_0 + v}{2}\\, t' },
            { type: 'note', en: 'These equations are valid ONLY for constant acceleration. If the acceleration changes (for example, a rocket burning fuel), you must break the motion into intervals where the acceleration is constant, or use graphs.', zh: '这些方程只在加速度恒定时成立。如果加速度变化（例如燃烧燃料的火箭），必须把运动分成加速度恒定的几段，或者使用图像法。' },
            { type: 'h2', en: 'Free Fall', zh: '自由落体' },
            { type: 'p', en: 'An object in free fall moves under gravity alone, with constant downward acceleration of magnitude $g = 9.8\\ \\text{m/s}^2$ (we use this value throughout). This is true on the way up, at the very top, and on the way down. If we take up as positive, then $a = -9.8\\ \\text{m/s}^2$ at every moment of the flight.', zh: '自由落体是只受重力作用的运动，向下的加速度大小恒为 $g = 9.8\\ \\text{m/s}^2$（本课程始终采用此值）。无论物体上升、到达最高点还是下落，这都成立。若取向上为正方向，则整个飞行过程中 $a = -9.8\\ \\text{m/s}^2$。' },
            { type: 'note', en: 'Common misconception: at the top of its flight a tossed ball has zero velocity but NOT zero acceleration. Gravity still acts, so $a = -g$ even at the instant $v = 0$. If the acceleration were zero at the top, the ball would stay there forever.', zh: '常见误区：抛出的球在最高点速度为零，但加速度不为零。重力依然作用，因此即使在 $v = 0$ 的瞬间也有 $a = -g$。如果最高点加速度为零，球将永远停在那里。' },
            {
              type: 'example',
              title: { en: 'Example 1: Braking distance', zh: '例题 1：刹车距离' },
              problem: { en: 'A car traveling at $20\\ \\text{m/s}$ brakes with constant acceleration $-4.0\\ \\text{m/s}^2$. How far does it travel before stopping?', zh: '一辆以 $20\\ \\text{m/s}$ 行驶的汽车以 $-4.0\\ \\text{m/s}^2$ 的恒定加速度刹车。停下前它行驶了多远？' },
              solution: [
                { type: 'p', en: 'Known: $v_0 = 20\\ \\text{m/s}$, $v = 0$, $a = -4.0\\ \\text{m/s}^2$. Time is neither known nor needed, so use $v^2 = v_0^2 + 2ax$:', zh: '已知 $v_0 = 20\\ \\text{m/s}$，$v = 0$，$a = -4.0\\ \\text{m/s}^2$。时间既未知也不需要，故用 $v^2 = v_0^2 + 2ax$：' },
                { type: 'math', tex: '0 = (20)^2 + 2(-4.0)x \\quad\\Rightarrow\\quad x = \\frac{400}{8.0} = 50\\ \\text{m}' },
                { type: 'p', en: 'The car travels 50 m while stopping. Note that doubling the speed would quadruple this distance.', zh: '汽车刹停前行驶 50 m。注意若速度加倍，刹车距离将变为四倍。' },
              ],
            },
            {
              type: 'example',
              title: { en: 'Example 2: Ball thrown straight up', zh: '例题 2：竖直上抛' },
              problem: { en: 'A ball is thrown straight up at $14.7\\ \\text{m/s}$. (a) How long does it take to reach the highest point? (b) How high does it rise? Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一个球以 $14.7\\ \\text{m/s}$ 竖直上抛。(a) 到达最高点需要多长时间？(b) 上升多高？取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: '(a) Take up as positive, so $a = -9.8\\ \\text{m/s}^2$. At the top $v = 0$:', zh: '(a) 取向上为正，则 $a = -9.8\\ \\text{m/s}^2$。最高点处 $v = 0$：' },
                { type: 'math', tex: 't = \\frac{v - v_0}{a} = \\frac{0 - 14.7}{-9.8} = 1.5\\ \\text{s}' },
                { type: 'p', en: '(b) Use $v^2 = v_0^2 + 2ax$ with $v = 0$:', zh: '(b) 用 $v^2 = v_0^2 + 2ax$，令 $v = 0$：' },
                { type: 'math', tex: 'x = \\frac{-v_0^2}{2a} = \\frac{-(14.7)^2}{2(-9.8)} = \\frac{216.09}{19.6} \\approx 11.0\\ \\text{m}' },
                { type: 'p', en: 'The ball rises about 11.0 m in 1.5 s, then takes another 1.5 s to fall back — the flight is symmetric.', zh: '球在 1.5 s 内上升约 11.0 m，然后再用 1.5 s 落回——运动是对称的。' },
              ],
            },
          ],
          problems: [
            {
              type: 'mc',
              question: { en: 'Which kinematic equation should you use when you know $v_0$, $a$, and $x$, and want $v$ without knowing the time?', zh: '已知 $v_0$、$a$ 和 $x$，想在不知道时间的情况下求 $v$，应选用哪个运动学方程？' },
              choices: ['$v^2 = v_0^2 + 2ax$', '$v = v_0 + at$', '$x = v_0 t + \\tfrac{1}{2}at^2$', '$x = \\tfrac{v_0+v}{2}t$'],
              answer: 0,
              explanation: { en: 'Each kinematic equation omits one variable. $v^2 = v_0^2 + 2ax$ is the only one that does not contain $t$, so it links the known quantities directly to $v$.', zh: '每个运动学方程都缺少一个变量。$v^2 = v_0^2 + 2ax$ 是唯一不含 $t$ 的方程，能把已知量直接与 $v$ 联系起来。' },
            },
            {
              type: 'input',
              question: { en: 'A sprinter accelerates from rest at $3.0\\ \\text{m/s}^2$ for 4.0 s. Find her final speed in m/s (whole number).', zh: '一名短跑运动员从静止开始以 $3.0\\ \\text{m/s}^2$ 加速 4.0 s。求末速度，单位 m/s（整数）。' },
              answer: '12',
              accept: ['12.0'],
              explanation: { en: '$v = v_0 + at = 0 + 3.0 \\times 4.0 = 12$ m/s.', zh: '$v = v_0 + at = 0 + 3.0 \\times 4.0 = 12$ m/s。' },
            },
            {
              type: 'input',
              question: { en: 'How far does the same sprinter (from rest, $a = 3.0\\ \\text{m/s}^2$, $t = 4.0$ s) travel? Answer in m (whole number).', zh: '这名运动员（从静止出发，$a = 3.0\\ \\text{m/s}^2$，$t = 4.0$ s）跑了多远？单位 m（整数）。' },
              answer: '24',
              accept: ['24.0'],
              explanation: { en: '$x = v_0 t + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(3.0)(4.0)^2 = 24$ m. Notice this is the average velocity $(0+12)/2 = 6$ m/s times 4 s.', zh: '$x = v_0 t + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(3.0)(4.0)^2 = 24$ m。也可用平均速度 $(0+12)/2 = 6$ m/s 乘以 4 s 得到。' },
            },
            {
              type: 'mc',
              question: { en: 'A ball is thrown straight up. At its highest point:', zh: '一个球被竖直上抛。在最高点：' },
              choices: ['$v = 0$ and $a = -g$ | 速度为零，加速度为 $-g$', '$v = 0$ and $a = 0$ | 速度和加速度都为零', '$v \\neq 0$ and $a = 0$ | 速度不为零，加速度为零', '$v = 0$ and $a = +g$ upward | 速度为零，加速度竖直向上为 $+g$'],
              answer: 0,
              explanation: { en: 'Velocity is momentarily zero at the top, but gravity never stops acting, so the acceleration remains $9.8\\ \\text{m/s}^2$ downward the whole time.', zh: '最高点速度瞬间为零，但重力始终作用，因此加速度全程保持竖直向下 $9.8\\ \\text{m/s}^2$。' },
            },
            {
              type: 'input',
              question: { en: 'A rock is dropped from rest off a cliff. How far does it fall in 3.0 s? Use $g = 9.8\\ \\text{m/s}^2$. Answer in m (one decimal place).', zh: '一块石头从悬崖上由静止释放。3.0 s 内下落多远？取 $g = 9.8\\ \\text{m/s}^2$。单位 m（保留一位小数）。' },
              answer: '44.1',
              explanation: { en: '$x = \\tfrac{1}{2}gt^2 = \\tfrac{1}{2}(9.8)(3.0)^2 = 44.1$ m. From rest, the fall distance grows with the square of the time.', zh: '$x = \\tfrac{1}{2}gt^2 = \\tfrac{1}{2}(9.8)(3.0)^2 = 44.1$ m。由静止下落时，下落距离与时间的平方成正比。' },
            },
            {
              type: 'mc',
              question: { en: 'Ball A is dropped and ball B is thrown horizontally from the same height at the same time (ignore air resistance). Which lands first?', zh: '小球 A 自由下落，小球 B 同时从同一高度被水平抛出（忽略空气阻力）。哪个先落地？' },
              choices: ['They land at the same time | 同时落地', 'A lands first | A 先落地', 'B lands first | B 先落地', 'It depends on B’s speed | 取决于 B 的速度'],
              answer: 0,
              explanation: { en: 'Vertical and horizontal motions are independent. Both balls start with zero vertical velocity and accelerate downward at $g$, so their vertical motions — and landing times — are identical.', zh: '竖直方向与水平方向的运动相互独立。两球初始竖直速度都为零，都以 $g$ 向下加速，所以竖直运动完全相同，落地时间也相同。' },
            },
            {
              type: 'input',
              question: { en: 'A ball is thrown straight up at 19.6 m/s. What is its total time in the air before returning to the launch height? Use $g = 9.8\\ \\text{m/s}^2$. Answer in s (one decimal place).', zh: '一个球以 19.6 m/s 竖直上抛。它回到抛出高度前在空中的总时间是多少？取 $g = 9.8\\ \\text{m/s}^2$。单位 s（保留一位小数）。' },
              answer: '4.0',
              accept: ['4'],
              explanation: { en: 'Time to the top: $t = v_0/g = 19.6/9.8 = 2.0$ s. By symmetry the trip down takes another 2.0 s, so the total flight time is 4.0 s.', zh: '到最高点的时间 $t = v_0/g = 19.6/9.8 = 2.0$ s。由对称性下落也需 2.0 s，总时间为 4.0 s。' },
            },
            {
              type: 'input',
              question: { en: 'A jet lands at 72 m/s and must stop within 720 m. What is the minimum magnitude of its constant deceleration in m/s²? (One decimal place.)', zh: '一架喷气式飞机以 72 m/s 着陆，必须在 720 m 内停下。所需恒定减速度的最小值是多少，单位 m/s²？（保留一位小数）' },
              answer: '3.6',
              explanation: { en: 'Use $v^2 = v_0^2 + 2ax$ with $v = 0$: $a = -v_0^2/(2x) = -(72)^2/(2 \\times 720) = -3.6\\ \\text{m/s}^2$, so the magnitude is 3.6 m/s². Any smaller deceleration would overrun the runway.', zh: '用 $v^2 = v_0^2 + 2ax$，令 $v = 0$：$a = -v_0^2/(2x) = -(72)^2/(2 \\times 720) = -3.6\\ \\text{m/s}^2$，大小为 3.6 m/s²。减速度再小就会冲出跑道。' },
            },
          ],
        },
        {
          id: 'vectors-projectile-motion',
          title: 'Vectors and Projectile Motion',
          titleZh: '矢量与抛体运动',
          content: [
            { type: 'h2', en: 'Vectors in Two Dimensions', zh: '二维矢量' },
            { type: 'p', en: 'A vector has both magnitude and direction (displacement, velocity, acceleration, force); a scalar has magnitude only (distance, speed, time, mass). To work with a vector of magnitude $A$ at angle $\\theta$ above the $x$-axis, break it into components:', zh: '矢量既有大小又有方向（位移、速度、加速度、力）；标量只有大小（路程、速率、时间、质量）。处理大小为 $A$、与 $x$ 轴成 $\\theta$ 角的矢量时，将它分解为分量：' },
            { type: 'math', tex: 'A_x = A\\cos\\theta, \\qquad A_y = A\\sin\\theta' },
            { type: 'p', en: 'To add vectors, add their components separately. To recover magnitude and direction from components, use $A = \\sqrt{A_x^2 + A_y^2}$ and $\\tan\\theta = A_y / A_x$.', zh: '矢量相加时，分别把各分量相加。由分量求大小和方向时，用 $A = \\sqrt{A_x^2 + A_y^2}$ 和 $\\tan\\theta = A_y / A_x$。' },
            { type: 'h2', en: 'Projectile Motion', zh: '抛体运动' },
            { type: 'p', en: 'A projectile is any object moving under gravity alone after launch. The key insight: horizontal and vertical motions are independent. Horizontally there is no acceleration, so $v_x$ stays constant. Vertically the object is in free fall with $a_y = -g$. Time is the only quantity shared by both directions.', zh: '抛体是发射后只受重力作用的物体。关键思想是：水平运动与竖直运动相互独立。水平方向没有加速度，$v_x$ 保持不变；竖直方向是加速度 $a_y = -g$ 的自由落体。时间是两个方向唯一共享的量。' },
            { type: 'list', items: [
              { en: 'Horizontal: $x = v_{0x} t$ with $v_{0x} = v_0\\cos\\theta$ (constant)', zh: '水平方向：$x = v_{0x} t$，其中 $v_{0x} = v_0\\cos\\theta$（恒定）' },
              { en: 'Vertical: $y = v_{0y} t - \\tfrac{1}{2} g t^2$ with $v_{0y} = v_0\\sin\\theta$', zh: '竖直方向：$y = v_{0y} t - \\tfrac{1}{2} g t^2$，其中 $v_{0y} = v_0\\sin\\theta$' },
              { en: 'The trajectory is a parabola; at the peak $v_y = 0$ but $v_x \\neq 0$.', zh: '轨迹是抛物线；在最高点 $v_y = 0$ 但 $v_x \\neq 0$。' },
            ] },
            { type: 'note', en: 'Common misconception: a projectile’s velocity at the top of its arc is not zero — only the vertical component is. The projectile keeps its full horizontal velocity $v_0\\cos\\theta$ throughout the flight (ignoring air resistance).', zh: '常见误区：抛体在轨迹最高点的速度并不为零——只有竖直分量为零。整个飞行过程中（忽略空气阻力），抛体始终保持水平速度 $v_0\\cos\\theta$。' },
            {
              type: 'example',
              title: { en: 'Example 1: Horizontal launch', zh: '例题 1：平抛运动' },
              problem: { en: 'A ball rolls off a 4.9 m high table at $3.0\\ \\text{m/s}$. How long is it in the air, and how far from the table’s base does it land? Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一个球以 $3.0\\ \\text{m/s}$ 的速度从 4.9 m 高的桌面滚出。它在空中多长时间？落点离桌脚多远？取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: 'Vertical: starts with $v_{0y} = 0$ and falls 4.9 m:', zh: '竖直方向：初速度 $v_{0y} = 0$，下落 4.9 m：' },
                { type: 'math', tex: '4.9 = \\tfrac{1}{2}(9.8)t^2 \\quad\\Rightarrow\\quad t^2 = 1.0 \\quad\\Rightarrow\\quad t = 1.0\\ \\text{s}' },
                { type: 'p', en: 'Horizontal: constant velocity for that same time:', zh: '水平方向：在同一时间内匀速运动：' },
                { type: 'math', tex: 'x = v_x t = 3.0 \\times 1.0 = 3.0\\ \\text{m}' },
                { type: 'p', en: 'The fall time depends only on the height, not on the launch speed.', zh: '下落时间只取决于高度，与水平初速度无关。' },
              ],
            },
            {
              type: 'example',
              title: { en: 'Example 2: Launch at an angle', zh: '例题 2：斜抛运动' },
              problem: { en: 'A soccer ball is kicked at $20\\ \\text{m/s}$ at $30^\\circ$ above the horizontal from level ground. Find its time of flight and horizontal range. Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一个足球以 $20\\ \\text{m/s}$、与水平方向成 $30^\\circ$ 角从平地上踢出。求飞行时间和水平射程。取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: 'Components: $v_{0x} = 20\\cos 30^\\circ = 17.3\\ \\text{m/s}$, $v_{0y} = 20\\sin 30^\\circ = 10\\ \\text{m/s}$.', zh: '分量：$v_{0x} = 20\\cos 30^\\circ = 17.3\\ \\text{m/s}$，$v_{0y} = 20\\sin 30^\\circ = 10\\ \\text{m/s}$。' },
                { type: 'p', en: 'Flight time (returns to launch height when $v_y = -v_{0y}$):', zh: '飞行时间（回到抛出高度时 $v_y = -v_{0y}$）：' },
                { type: 'math', tex: 't = \\frac{2v_{0y}}{g} = \\frac{2(10)}{9.8} \\approx 2.04\\ \\text{s}' },
                { type: 'p', en: 'Range:', zh: '射程：' },
                { type: 'math', tex: 'R = v_{0x} t = 17.3 \\times 2.04 \\approx 35.3\\ \\text{m}' },
              ],
            },
          ],
          problems: [
            {
              type: 'mc',
              question: { en: 'Which of the following is a scalar quantity?', zh: '下列哪个是标量？' },
              choices: ['speed | 速率', 'velocity | 速度', 'displacement | 位移', 'acceleration | 加速度'],
              answer: 0,
              explanation: { en: 'Speed has magnitude only. Velocity, displacement, and acceleration all require a direction, making them vectors.', zh: '速率只有大小。速度、位移和加速度都需要方向，因此是矢量。' },
            },
            {
              type: 'input',
              question: { en: 'A velocity vector has magnitude 50 m/s at $37^\\circ$ above the horizontal. Find its horizontal component in m/s, using $\\cos 37^\\circ = 0.8$ (whole number).', zh: '一个速度矢量大小为 50 m/s，与水平方向成 $37^\\circ$ 角。取 $\\cos 37^\\circ = 0.8$，求其水平分量，单位 m/s（整数）。' },
              answer: '40',
              explanation: { en: '$v_x = v\\cos\\theta = 50 \\times 0.8 = 40$ m/s. The vertical component would be $50\\sin 37^\\circ = 30$ m/s — a classic 3-4-5 triangle.', zh: '$v_x = v\\cos\\theta = 50 \\times 0.8 = 40$ m/s。竖直分量为 $50\\sin 37^\\circ = 30$ m/s——经典的 3-4-5 三角形。' },
            },
            {
              type: 'mc',
              question: { en: 'A projectile is launched at an angle. Ignoring air resistance, which quantity stays constant during flight?', zh: '一个物体以某角度被抛出。忽略空气阻力，飞行中哪个量保持不变？' },
              choices: ['horizontal velocity $v_x$ | 水平速度 $v_x$', 'vertical velocity $v_y$ | 竖直速度 $v_y$', 'speed | 速率', 'height | 高度'],
              answer: 0,
              explanation: { en: 'Gravity acts only vertically, so nothing changes $v_x$. The vertical velocity changes by $-g$ each second, which also changes the overall speed.', zh: '重力只沿竖直方向作用，没有任何因素改变 $v_x$。竖直速度每秒变化 $-g$，这也使总速率不断变化。' },
            },
            {
              type: 'input',
              question: { en: 'A stone is thrown horizontally at 15 m/s from a 19.6 m cliff. How long until it hits the ground? Use $g = 9.8\\ \\text{m/s}^2$. Answer in s (one decimal place).', zh: '一块石头以 15 m/s 从 19.6 m 高的悬崖上水平抛出。多长时间后落地？取 $g = 9.8\\ \\text{m/s}^2$。单位 s（保留一位小数）。' },
              answer: '2.0',
              accept: ['2'],
              explanation: { en: 'The fall is governed by the vertical motion alone: $19.6 = \\tfrac{1}{2}(9.8)t^2$ gives $t^2 = 4.0$, so $t = 2.0$ s. The 15 m/s horizontal speed is irrelevant to the fall time.', zh: '落地时间只由竖直运动决定：$19.6 = \\tfrac{1}{2}(9.8)t^2$，得 $t^2 = 4.0$，$t = 2.0$ s。15 m/s 的水平速度与下落时间无关。' },
            },
            {
              type: 'input',
              question: { en: 'For the stone in the previous problem, how far from the base of the cliff does it land? Answer in m (whole number).', zh: '上题中的石头落地点离崖底多远？单位 m（整数）。' },
              answer: '30',
              accept: ['30.0'],
              explanation: { en: 'Horizontal distance is constant velocity times fall time: $x = 15 \\times 2.0 = 30$ m.', zh: '水平距离等于恒定水平速度乘以下落时间：$x = 15 \\times 2.0 = 30$ m。' },
            },
            {
              type: 'mc',
              question: { en: 'At the highest point of a projectile’s arc (launched at an angle), its acceleration is:', zh: '斜抛物体在轨迹最高点处的加速度是：' },
              choices: ['$9.8\\ \\text{m/s}^2$ downward | 竖直向下 $9.8\\ \\text{m/s}^2$', 'zero | 零', '$9.8\\ \\text{m/s}^2$ in the direction of motion | 沿运动方向 $9.8\\ \\text{m/s}^2$', 'less than $9.8\\ \\text{m/s}^2$ | 小于 $9.8\\ \\text{m/s}^2$'],
              answer: 0,
              explanation: { en: 'Gravity is the only force acting, everywhere along the path. The acceleration is $g$ downward at every point, including the peak, where only $v_y$ is zero.', zh: '整个轨迹中物体只受重力，加速度处处为竖直向下的 $g$，最高点也不例外——那里只是 $v_y$ 为零。' },
            },
            {
              type: 'input',
              question: { en: 'A projectile is launched from level ground at 28 m/s with a vertical velocity component of 19.6 m/s. Find its total flight time. Use $g = 9.8\\ \\text{m/s}^2$. Answer in s (one decimal place).', zh: '一个抛体从平地上以 28 m/s 抛出，竖直速度分量为 19.6 m/s。求总飞行时间。取 $g = 9.8\\ \\text{m/s}^2$。单位 s（保留一位小数）。' },
              answer: '4.0',
              accept: ['4'],
              explanation: { en: 'Total flight time on level ground is $t = 2v_{0y}/g = 2(19.6)/9.8 = 4.0$ s. Only the vertical component matters for the flight time.', zh: '平地上总飞行时间为 $t = 2v_{0y}/g = 2(19.6)/9.8 = 4.0$ s。飞行时间只与竖直分量有关。' },
            },
            {
              type: 'mc',
              question: { en: 'Two identical projectiles are launched at $30^\\circ$ and $60^\\circ$ with the same speed on level ground. Compare their ranges (no air resistance).', zh: '两个相同的抛体以相同速率分别以 $30^\\circ$ 和 $60^\\circ$ 从平地上抛出。比较它们的射程（无空气阻力）。' },
              choices: ['Equal ranges; the $60^\\circ$ one flies longer | 射程相等；$60^\\circ$ 的飞行时间更长', 'The $60^\\circ$ launch goes farther | $60^\\circ$ 的射程更远', 'The $30^\\circ$ launch goes farther | $30^\\circ$ 的射程更远', 'Cannot be determined | 无法确定'],
              answer: 0,
              explanation: { en: 'Range is $R = \\frac{v_0^2 \\sin 2\\theta}{g}$, and $\\sin 60^\\circ = \\sin 120^\\circ$, so complementary angles give equal ranges. The steeper launch spends more time in the air but moves more slowly horizontally.', zh: '射程公式为 $R = \\frac{v_0^2 \\sin 2\\theta}{g}$，而 $\\sin 60^\\circ = \\sin 120^\\circ$，所以互余角射程相等。角度大的飞行时间长，但水平速度小。' },
            },
          ],
        },
      ],
    },
    {
      id: 'forces-newtons-laws',
      title: 'Forces and Newton’s Laws',
      titleZh: '力与牛顿运动定律',
      lessons: [
        {
          id: 'newtons-three-laws',
          title: 'Newton’s Three Laws and Free-Body Diagrams',
          titleZh: '牛顿三大定律与受力图',
          content: [
            { type: 'h2', en: 'What Is a Force?', zh: '什么是力？' },
            { type: 'p', en: 'A force is a push or a pull — an interaction between two objects. Forces are vectors, measured in newtons (N), where $1\\ \\text{N} = 1\\ \\text{kg}\\cdot\\text{m/s}^2$. Common forces include gravity (weight $F_g = mg$, always downward near Earth’s surface, with $g = 9.8\\ \\text{m/s}^2$), the normal force $N$ (a surface pushing perpendicular to itself), tension $T$ (a rope pulling along its length), and friction $f$ (parallel to a surface, opposing sliding).', zh: '力是推或拉——两个物体之间的相互作用。力是矢量，单位为牛顿（N），$1\\ \\text{N} = 1\\ \\text{kg}\\cdot\\text{m/s}^2$。常见的力包括重力（重量 $F_g = mg$，在地表附近始终竖直向下，$g = 9.8\\ \\text{m/s}^2$）、法向力 $N$（表面垂直于自身方向的支持力）、张力 $T$（绳沿其长度方向的拉力）以及摩擦力 $f$（平行于表面、阻碍滑动）。' },
            { type: 'h2', en: 'The Three Laws', zh: '三大定律' },
            { type: 'list', items: [
              { en: 'First law (inertia): if the net force on an object is zero, its velocity does not change — it stays at rest or moves in a straight line at constant speed.', zh: '第一定律（惯性定律）：若物体所受合力为零，其速度不变——保持静止或做匀速直线运动。' },
              { en: 'Second law: the net force equals mass times acceleration, $\\vec{F}_{net} = m\\vec{a}$. Acceleration points in the direction of the net force.', zh: '第二定律：合力等于质量乘以加速度，$\\vec{F}_{net} = m\\vec{a}$。加速度方向与合力方向相同。' },
              { en: 'Third law: when object A pushes on object B, B pushes back on A with a force equal in magnitude and opposite in direction. The two forces act on different objects.', zh: '第三定律：当物体 A 对物体 B 施力时，B 也对 A 施加一个大小相等、方向相反的力。这两个力作用在不同的物体上。' },
            ] },
            { type: 'math', tex: '\\vec{F}_{net} = \\sum \\vec{F} = m\\vec{a}' },
            { type: 'note', en: 'Common misconception: motion does not require a force. A hockey puck gliding on frictionless ice keeps moving forever with no forward force. Forces cause CHANGES in velocity, not velocity itself. Also, third-law pairs never cancel, because they act on different objects.', zh: '常见误区：运动并不需要力来维持。在无摩擦冰面上滑行的冰球不需要向前的力也会一直滑下去。力引起的是速度的"变化"，而不是速度本身。另外，第三定律的作用力与反作用力永远不会抵消，因为它们作用在不同物体上。' },
            { type: 'h3', en: 'Free-Body Diagrams', zh: '受力图' },
            { type: 'p', en: 'A free-body diagram (FBD) shows one object as a dot with every force acting ON it drawn as an arrow. Do not include forces the object exerts on other things. Once the FBD is drawn, choose axes (usually along the acceleration), decompose forces, and apply $F_{net,x} = ma_x$ and $F_{net,y} = ma_y$ separately.', zh: '受力图（FBD）把研究对象画成一个点，把作用在它身上的每个力画成箭头。不要画物体施加给其他物体的力。画好受力图后，选取坐标轴（通常沿加速度方向），分解各力，然后分别应用 $F_{net,x} = ma_x$ 和 $F_{net,y} = ma_y$。' },
            {
              type: 'example',
              title: { en: 'Example 1: Net force and acceleration', zh: '例题 1：合力与加速度' },
              problem: { en: 'A 4.0 kg crate on a frictionless floor is pushed right with 26 N while friction-free air drag pushes left with 6.0 N. Find the crate’s acceleration.', zh: '一只 4.0 kg 的箱子放在无摩擦地板上，受到向右 26 N 的推力和向左 6.0 N 的空气阻力。求箱子的加速度。' },
              solution: [
                { type: 'p', en: 'Take right as positive. The net horizontal force is', zh: '取向右为正方向。水平合力为' },
                { type: 'math', tex: 'F_{net} = 26 - 6.0 = 20\\ \\text{N}' },
                { type: 'math', tex: 'a = \\frac{F_{net}}{m} = \\frac{20}{4.0} = 5.0\\ \\text{m/s}^2 \\ \\text{(to the right)}' },
                { type: 'p', en: 'Vertically, the normal force balances the weight ($N = mg = 39.2$ N), so there is no vertical acceleration.', zh: '竖直方向上，法向力与重力平衡（$N = mg = 39.2$ N），因此没有竖直加速度。' },
              ],
            },
            {
              type: 'example',
              title: { en: 'Example 2: Tension in an elevator cable', zh: '例题 2：电梯缆绳中的张力' },
              problem: { en: 'A 600 kg elevator accelerates upward at $2.0\\ \\text{m/s}^2$. Find the tension in the cable. Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一部 600 kg 的电梯以 $2.0\\ \\text{m/s}^2$ 向上加速。求缆绳中的张力。取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: 'FBD: tension $T$ up, weight $mg$ down. Take up as positive and apply Newton’s second law:', zh: '受力图：张力 $T$ 向上，重力 $mg$ 向下。取向上为正，应用牛顿第二定律：' },
                { type: 'math', tex: 'T - mg = ma \\quad\\Rightarrow\\quad T = m(g + a) = 600(9.8 + 2.0) = 7080\\ \\text{N}' },
                { type: 'p', en: 'The tension exceeds the weight (5880 N) because the cable must both support the elevator and accelerate it upward.', zh: '张力大于重量（5880 N），因为缆绳既要支撑电梯，又要使它向上加速。' },
              ],
            },
          ],
          problems: [
            {
              type: 'mc',
              question: { en: 'A book rests on a table. According to Newton’s third law, the reaction to the table pushing up on the book is:', zh: '一本书静放在桌上。根据牛顿第三定律，桌子对书向上的支持力的反作用力是：' },
              choices: ['the book pushing down on the table | 书对桌子向下的压力', 'gravity pulling down on the book | 地球对书向下的重力', 'the table pushing down on the floor | 桌子对地板向下的压力', 'the book’s weight | 书的重量'],
              answer: 0,
              explanation: { en: 'Third-law pairs swap the two interacting objects: table-on-book pairs with book-on-table. Gravity on the book is exerted by the Earth, so its reaction is the book pulling up on the Earth.', zh: '作用力与反作用力互换两个相互作用的物体：桌对书的力与书对桌的力配对。书受的重力由地球施加，其反作用力是书对地球向上的引力。' },
            },
            {
              type: 'input',
              question: { en: 'A net force of 24 N acts on a 8.0 kg object. Find its acceleration in m/s² (one decimal place).', zh: '24 N 的合力作用在 8.0 kg 的物体上。求加速度，单位 m/s²（保留一位小数）。' },
              answer: '3.0',
              accept: ['3'],
              explanation: { en: 'Newton’s second law: $a = F_{net}/m = 24/8.0 = 3.0\\ \\text{m/s}^2$.', zh: '牛顿第二定律：$a = F_{net}/m = 24/8.0 = 3.0\\ \\text{m/s}^2$。' },
            },
            {
              type: 'input',
              question: { en: 'What is the weight of a 5.0 kg backpack? Use $g = 9.8\\ \\text{m/s}^2$. Answer in N (whole number).', zh: '一只 5.0 kg 的背包重量是多少？取 $g = 9.8\\ \\text{m/s}^2$。单位 N（整数）。' },
              answer: '49',
              accept: ['49.0'],
              explanation: { en: 'Weight is the gravitational force: $F_g = mg = 5.0 \\times 9.8 = 49$ N. Mass (kg) and weight (N) are different quantities.', zh: '重量是重力：$F_g = mg = 5.0 \\times 9.8 = 49$ N。质量（kg）与重量（N）是不同的物理量。' },
            },
            {
              type: 'mc',
              question: { en: 'A car moves at constant velocity on a straight highway. The net force on it is:', zh: '一辆汽车在笔直的公路上匀速行驶。它所受的合力是：' },
              choices: ['zero | 零', 'forward | 向前', 'backward | 向后', 'equal to its weight | 等于其重量'],
              answer: 0,
              explanation: { en: 'Constant velocity means zero acceleration, so by Newton’s second law the net force must be zero — the engine’s drive force exactly balances friction and drag.', zh: '匀速意味着加速度为零，由牛顿第二定律合力必为零——发动机的驱动力恰好与摩擦和阻力平衡。' },
            },
            {
              type: 'mc',
              question: { en: 'Two forces act on a 2.0 kg object: 10 N east and 10 N north. The magnitude of its acceleration is about:', zh: '一个 2.0 kg 的物体受两个力：向东 10 N 和向北 10 N。其加速度大小约为：' },
              choices: ['$7.1\\ \\text{m/s}^2$', '$10\\ \\text{m/s}^2$', '$5.0\\ \\text{m/s}^2$', '$14\\ \\text{m/s}^2$'],
              answer: 0,
              explanation: { en: 'The net force is the vector sum: $\\sqrt{10^2 + 10^2} = 14.1$ N at $45^\\circ$. Then $a = 14.1/2.0 \\approx 7.1\\ \\text{m/s}^2$. Perpendicular forces add by the Pythagorean theorem, not directly.', zh: '合力是矢量和：$\\sqrt{10^2 + 10^2} = 14.1$ N，方向 $45^\\circ$。则 $a = 14.1/2.0 \\approx 7.1\\ \\text{m/s}^2$。相互垂直的力用勾股定理合成，不能直接相加。' },
            },
            {
              type: 'input',
              question: { en: 'A 70 kg person stands on a scale in an elevator accelerating upward at $1.4\\ \\text{m/s}^2$. What does the scale read in N? Use $g = 9.8\\ \\text{m/s}^2$. (Whole number.)', zh: '一个 70 kg 的人站在以 $1.4\\ \\text{m/s}^2$ 向上加速的电梯内的体重计上。体重计读数是多少 N？取 $g = 9.8\\ \\text{m/s}^2$。（整数）' },
              answer: '784',
              explanation: { en: 'The scale reads the normal force. From $N - mg = ma$: $N = m(g+a) = 70(9.8+1.4) = 70 \\times 11.2 = 784$ N — more than the true weight of 686 N, which is why you feel heavier.', zh: '体重计读数是法向力。由 $N - mg = ma$ 得 $N = m(g+a) = 70(9.8+1.4) = 784$ N——大于真实重量 686 N，所以你会感觉变重。' },
            },
            {
              type: 'input',
              question: { en: 'A 1200 kg car accelerates from rest to 24 m/s in 8.0 s. Find the net force on it in N (whole number).', zh: '一辆 1200 kg 的汽车在 8.0 s 内从静止加速到 24 m/s。求它所受的合力，单位 N（整数）。' },
              answer: '3600',
              explanation: { en: 'First find the acceleration: $a = \\Delta v/\\Delta t = 24/8.0 = 3.0\\ \\text{m/s}^2$. Then $F_{net} = ma = 1200 \\times 3.0 = 3600$ N.', zh: '先求加速度：$a = \\Delta v/\\Delta t = 24/8.0 = 3.0\\ \\text{m/s}^2$。再由 $F_{net} = ma = 1200 \\times 3.0 = 3600$ N。' },
            },
            {
              type: 'mc',
              question: { en: 'Blocks of 2.0 kg and 3.0 kg are in contact on a frictionless floor. A 10 N force pushes the 2.0 kg block, which pushes the 3.0 kg block ahead of it. What force does the 2.0 kg block exert on the 3.0 kg block?', zh: '2.0 kg 和 3.0 kg 的两个木块在无摩擦地板上相互接触。10 N 的力推 2.0 kg 木块，它再推动前面的 3.0 kg 木块。2.0 kg 木块对 3.0 kg 木块施加多大的力？' },
              choices: ['$6.0\\ \\text{N}$', '$10\\ \\text{N}$', '$4.0\\ \\text{N}$', '$5.0\\ \\text{N}$'],
              answer: 0,
              explanation: { en: 'The system accelerates at $a = 10/(2.0+3.0) = 2.0\\ \\text{m/s}^2$. The only horizontal force on the 3.0 kg block is the contact force, so it equals $ma = 3.0 \\times 2.0 = 6.0$ N. The full 10 N is not transmitted because part of it accelerates the front of the pair’s pusher.', zh: '系统加速度为 $a = 10/(2.0+3.0) = 2.0\\ \\text{m/s}^2$。3.0 kg 木块只受接触力这一个水平力，故接触力 $= ma = 3.0 \\times 2.0 = 6.0$ N。10 N 不会全部传递，因为其中一部分用于加速 2.0 kg 木块本身。' },
            },
          ],
        },
        {
          id: 'friction-inclined-planes',
          title: 'Friction and Inclined Planes',
          titleZh: '摩擦力与斜面',
          content: [
            { type: 'h2', en: 'Friction', zh: '摩擦力' },
            { type: 'p', en: 'Friction is a contact force parallel to a surface. Static friction acts on objects that are not sliding and adjusts itself up to a maximum value; kinetic friction acts on sliding objects and has a nearly constant magnitude:', zh: '摩擦力是平行于接触面的接触力。静摩擦力作用在没有滑动的物体上，其大小可自行调节，但有一个最大值；动摩擦力作用在滑动的物体上，大小近似恒定：' },
            { type: 'math', tex: 'f_s \\le \\mu_s N, \\qquad f_k = \\mu_k N' },
            { type: 'p', en: 'Here $\\mu_s$ and $\\mu_k$ are the coefficients of static and kinetic friction, and $N$ is the normal force — not always equal to $mg$! Typically $\\mu_s > \\mu_k$, which is why it is harder to start an object sliding than to keep it sliding.', zh: '其中 $\\mu_s$ 和 $\\mu_k$ 分别是静摩擦系数和动摩擦系数，$N$ 是法向力——它并不总等于 $mg$！通常 $\\mu_s > \\mu_k$，这就是启动滑动比维持滑动更费力的原因。' },
            { type: 'note', en: 'Common misconception: the formula $f_s = \\mu_s N$ gives only the MAXIMUM static friction. If you push a heavy box with 10 N and it does not move, static friction is exactly 10 N — whatever is needed to prevent sliding, up to the maximum.', zh: '常见误区：公式 $f_s = \\mu_s N$ 给出的只是静摩擦力的"最大值"。如果你用 10 N 推一个重箱子而它不动，那么静摩擦力恰好是 10 N——静摩擦力总是"按需提供"，直到达到最大值为止。' },
            { type: 'h2', en: 'Inclined Planes', zh: '斜面' },
            { type: 'p', en: 'On a ramp of angle $\\theta$, tilt the axes so $x$ points along the incline and $y$ is perpendicular to it. Gravity then splits into two components:', zh: '在倾角为 $\\theta$ 的斜面上，把坐标轴旋转，使 $x$ 轴沿斜面方向、$y$ 轴垂直于斜面。重力于是分解为两个分量：' },
            { type: 'math', tex: 'F_{g,\\parallel} = mg\\sin\\theta \\quad (\\text{down the slope}), \\qquad F_{g,\\perp} = mg\\cos\\theta' },
            { type: 'p', en: 'Perpendicular to the surface there is no acceleration, so $N = mg\\cos\\theta$. Along the surface, Newton’s second law with friction gives the acceleration. A frictionless incline yields the elegant result $a = g\\sin\\theta$, independent of mass.', zh: '垂直于斜面方向没有加速度，因此 $N = mg\\cos\\theta$。沿斜面方向，把摩擦力代入牛顿第二定律即可求出加速度。无摩擦斜面给出简洁的结果 $a = g\\sin\\theta$，与质量无关。' },
            {
              type: 'example',
              title: { en: 'Example 1: Sliding with kinetic friction', zh: '例题 1：有动摩擦的滑动' },
              problem: { en: 'A 10 kg box slides across a horizontal floor with $\\mu_k = 0.30$ while pushed by a 50 N horizontal force. Find its acceleration. Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一只 10 kg 的箱子在水平地板上滑动，$\\mu_k = 0.30$，同时受到 50 N 的水平推力。求其加速度。取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: 'Vertical balance: $N = mg = 10 \\times 9.8 = 98$ N. Kinetic friction:', zh: '竖直方向平衡：$N = mg = 10 \\times 9.8 = 98$ N。动摩擦力：' },
                { type: 'math', tex: 'f_k = \\mu_k N = 0.30 \\times 98 = 29.4\\ \\text{N}' },
                { type: 'p', en: 'Horizontal Newton’s second law:', zh: '水平方向应用牛顿第二定律：' },
                { type: 'math', tex: 'a = \\frac{50 - 29.4}{10} = \\frac{20.6}{10} \\approx 2.1\\ \\text{m/s}^2' },
              ],
            },
            {
              type: 'example',
              title: { en: 'Example 2: Frictionless incline', zh: '例题 2：无摩擦斜面' },
              problem: { en: 'A 2.0 kg cart is released from rest on a frictionless ramp inclined at $30^\\circ$. Find its acceleration and the normal force. Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一辆 2.0 kg 的小车从静止释放，沿倾角 $30^\\circ$ 的无摩擦斜面下滑。求加速度和法向力。取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: 'Along the incline, the only force component is gravity’s parallel part:', zh: '沿斜面方向，唯一的力分量是重力的平行分量：' },
                { type: 'math', tex: 'a = g\\sin\\theta = 9.8 \\times \\sin 30^\\circ = 9.8 \\times 0.5 = 4.9\\ \\text{m/s}^2' },
                { type: 'p', en: 'Perpendicular to the incline:', zh: '垂直于斜面方向：' },
                { type: 'math', tex: 'N = mg\\cos\\theta = 2.0 \\times 9.8 \\times \\cos 30^\\circ \\approx 17.0\\ \\text{N}' },
                { type: 'p', en: 'Note $N < mg = 19.6$ N: the surface supports only the perpendicular component of the weight.', zh: '注意 $N < mg = 19.6$ N：斜面只需支撑重力的垂直分量。' },
              ],
            },
          ],
          problems: [
            {
              type: 'mc',
              question: { en: 'You push a stationary 200 N crate with a 30 N horizontal force and it does not move ($\\mu_s = 0.40$). The static friction force on the crate is:', zh: '你用 30 N 的水平力推一只重 200 N 的静止箱子，它没有动（$\\mu_s = 0.40$）。箱子受到的静摩擦力是：' },
              choices: ['$30\\ \\text{N}$', '$80\\ \\text{N}$', '$200\\ \\text{N}$', '$0\\ \\text{N}$'],
              answer: 0,
              explanation: { en: 'Static friction matches the applied force until its maximum ($\\mu_s N = 0.40 \\times 200 = 80$ N) is reached. Since 30 N < 80 N, friction is exactly 30 N to keep the crate in equilibrium.', zh: '静摩擦力与外力相匹配，直到达到最大值（$\\mu_s N = 0.40 \\times 200 = 80$ N）。因为 30 N < 80 N，摩擦力恰为 30 N，使箱子保持平衡。' },
            },
            {
              type: 'input',
              question: { en: 'A 20 kg box slides on a floor with $\\mu_k = 0.25$. Find the kinetic friction force in N. Use $g = 9.8\\ \\text{m/s}^2$. (Whole number.)', zh: '一只 20 kg 的箱子在 $\\mu_k = 0.25$ 的地板上滑动。求动摩擦力，单位 N。取 $g = 9.8\\ \\text{m/s}^2$。（整数）' },
              answer: '49',
              explanation: { en: '$N = mg = 196$ N on a horizontal floor, so $f_k = \\mu_k N = 0.25 \\times 196 = 49$ N.', zh: '水平地板上 $N = mg = 196$ N，故 $f_k = \\mu_k N = 0.25 \\times 196 = 49$ N。' },
            },
            {
              type: 'mc',
              question: { en: 'Why is it harder to start pushing a heavy box than to keep it moving?', zh: '为什么推动一只重箱子起步比让它保持滑动更费力？' },
              choices: ['because $\\mu_s > \\mu_k$ | 因为 $\\mu_s > \\mu_k$', 'because the box gains inertia while moving | 因为箱子运动时惯性变大', 'because the normal force decreases once moving | 因为运动后法向力变小', 'because kinetic friction acts forward | 因为动摩擦力方向向前'],
              answer: 0,
              explanation: { en: 'For most surfaces the static coefficient exceeds the kinetic one, so the peak force needed to break the box free exceeds the force needed to balance kinetic friction afterward. Inertia and normal force do not change.', zh: '大多数表面的静摩擦系数大于动摩擦系数，因此使箱子开始滑动所需的力大于之后平衡动摩擦所需的力。惯性和法向力都没有变化。' },
            },
            {
              type: 'input',
              question: { en: 'A block slides down a frictionless incline of $37^\\circ$. Find its acceleration in m/s², using $\\sin 37^\\circ = 0.6$ and $g = 9.8\\ \\text{m/s}^2$ (two decimal places).', zh: '一个木块沿 $37^\\circ$ 的无摩擦斜面下滑。取 $\\sin 37^\\circ = 0.6$、$g = 9.8\\ \\text{m/s}^2$，求加速度，单位 m/s²（保留两位小数）。' },
              answer: '5.88',
              explanation: { en: 'On a frictionless incline $a = g\\sin\\theta = 9.8 \\times 0.6 = 5.88\\ \\text{m/s}^2$, independent of the block’s mass.', zh: '无摩擦斜面上 $a = g\\sin\\theta = 9.8 \\times 0.6 = 5.88\\ \\text{m/s}^2$，与木块质量无关。' },
            },
            {
              type: 'mc',
              question: { en: 'A 10 kg block rests on a $30^\\circ$ incline. The normal force on it is:', zh: '一个 10 kg 的木块静止在 $30^\\circ$ 的斜面上。它受到的法向力是：' },
              choices: ['$mg\\cos 30^\\circ \\approx 85\\ \\text{N}$', '$mg = 98\\ \\text{N}$', '$mg\\sin 30^\\circ = 49\\ \\text{N}$', '$mg\\tan 30^\\circ \\approx 57\\ \\text{N}$'],
              answer: 0,
              explanation: { en: 'Perpendicular to the incline the block is in equilibrium, so $N = mg\\cos\\theta = 98 \\times 0.866 \\approx 85$ N. The normal force equals $mg$ only on a horizontal surface with no other vertical forces.', zh: '垂直于斜面方向木块处于平衡，故 $N = mg\\cos\\theta = 98 \\times 0.866 \\approx 85$ N。只有在水平面上且无其他竖直力时法向力才等于 $mg$。' },
            },
            {
              type: 'input',
              question: { en: 'For the block above (10 kg, $30^\\circ$ incline, at rest), find the static friction force holding it in place, in N. Use $g = 9.8\\ \\text{m/s}^2$. (Whole number.)', zh: '上题中的木块（10 kg，$30^\\circ$ 斜面，静止），求使其保持不动的静摩擦力，单位 N。取 $g = 9.8\\ \\text{m/s}^2$。（整数）' },
              answer: '49',
              explanation: { en: 'The block is in equilibrium along the slope, so friction balances the parallel weight component: $f_s = mg\\sin 30^\\circ = 98 \\times 0.5 = 49$ N, directed up the slope.', zh: '木块沿斜面方向平衡，摩擦力与重力平行分量相等：$f_s = mg\\sin 30^\\circ = 98 \\times 0.5 = 49$ N，方向沿斜面向上。' },
            },
            {
              type: 'input',
              question: { en: 'A 5.0 kg sled decelerates on level snow due to friction alone, with $\\mu_k = 0.10$. Find the magnitude of its deceleration in m/s², with $g = 9.8\\ \\text{m/s}^2$ (two decimal places).', zh: '一架 5.0 kg 的雪橇仅因摩擦在水平雪地上减速，$\\mu_k = 0.10$。取 $g = 9.8\\ \\text{m/s}^2$，求减速度大小，单位 m/s²（保留两位小数）。' },
              answer: '0.98',
              explanation: { en: 'Friction is the only horizontal force: $a = f_k/m = \\mu_k mg / m = \\mu_k g = 0.10 \\times 9.8 = 0.98\\ \\text{m/s}^2$. The mass cancels.', zh: '摩擦力是唯一的水平力：$a = f_k/m = \\mu_k mg/m = \\mu_k g = 0.10 \\times 9.8 = 0.98\\ \\text{m/s}^2$。质量被约去。' },
            },
            {
              type: 'mc',
              question: { en: 'A block slides down an incline at constant speed. Which statement is true?', zh: '一个木块沿斜面匀速下滑。下列哪个说法正确？' },
              choices: ['Kinetic friction exactly balances $mg\\sin\\theta$ | 动摩擦力恰好与 $mg\\sin\\theta$ 平衡', 'There is no friction | 没有摩擦力', 'The net force points down the incline | 合力沿斜面向下', 'The normal force equals $mg$ | 法向力等于 $mg$'],
              answer: 0,
              explanation: { en: 'Constant speed means zero net force. Along the incline, kinetic friction (up the slope) must equal the gravity component $mg\\sin\\theta$ (down the slope). This condition also implies $\\mu_k = \\tan\\theta$.', zh: '匀速意味着合力为零。沿斜面方向，动摩擦力（沿斜面向上）必须等于重力分量 $mg\\sin\\theta$（沿斜面向下）。这一条件也意味着 $\\mu_k = \\tan\\theta$。' },
            },
          ],
        },
      ],
    },
    {
      id: 'work-energy-power',
      title: 'Work, Energy, and Power',
      titleZh: '功、能量与功率',
      lessons: [
        {
          id: 'work-kinetic-energy',
          title: 'Work and Kinetic Energy',
          titleZh: '功与动能',
          content: [
            { type: 'h2', en: 'Work Done by a Force', zh: '力做的功' },
            { type: 'p', en: 'In physics, work has a precise meaning: a force does work on an object when the object moves and the force has a component along the motion. For a constant force $F$ acting at angle $\\theta$ to a displacement $d$:', zh: '在物理学中，"功"有精确的含义：当物体发生位移，且力在运动方向上有分量时，力才对物体做功。对与位移 $d$ 成 $\\theta$ 角的恒力 $F$：' },
            { type: 'math', tex: 'W = Fd\\cos\\theta' },
            { type: 'p', en: 'Work is a scalar measured in joules ($1\\ \\text{J} = 1\\ \\text{N}\\cdot\\text{m}$). It is positive when the force helps the motion ($\\theta < 90^\\circ$), negative when it opposes the motion (like friction, $\\theta = 180^\\circ$), and zero when the force is perpendicular to the motion ($\\theta = 90^\\circ$).', zh: '功是标量，单位为焦耳（$1\\ \\text{J} = 1\\ \\text{N}\\cdot\\text{m}$）。当力促进运动时（$\\theta < 90^\\circ$）功为正；当力阻碍运动时（如摩擦力，$\\theta = 180^\\circ$）功为负；当力与运动方向垂直时（$\\theta = 90^\\circ$）功为零。' },
            { type: 'note', en: 'Common misconception: holding a heavy barbell stationary above your head feels exhausting, but you do zero physical work on it because the displacement is zero. Likewise, the normal force on a sliding block and gravity on a horizontally moving cart do no work — they are perpendicular to the motion.', zh: '常见误区：把重杠铃举在头顶保持不动虽然很累，但你对它做的功为零，因为位移为零。同理，滑动木块受到的法向力、水平运动小车所受的重力都不做功——它们与运动方向垂直。' },
            { type: 'h2', en: 'Kinetic Energy and the Work–Energy Theorem', zh: '动能与动能定理' },
            { type: 'p', en: 'A moving object carries kinetic energy', zh: '运动的物体具有动能' },
            { type: 'math', tex: 'KE = \\tfrac{1}{2}mv^2' },
            { type: 'p', en: 'The work–energy theorem says the NET work done on an object equals its change in kinetic energy:', zh: '动能定理指出：合力对物体做的总功等于物体动能的变化：' },
            { type: 'math', tex: 'W_{net} = \\Delta KE = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2' },
            { type: 'p', en: 'This is often faster than kinematics: it skips over time entirely and connects forces directly to speeds. Because $KE$ depends on $v^2$, doubling an object’s speed quadruples its kinetic energy — one reason highway crashes are so much worse than parking-lot bumps.', zh: '这常常比运动学方法更快：它完全绕开时间，把力与速率直接联系起来。由于动能与 $v^2$ 成正比，速度加倍动能变为四倍——这也是高速公路事故远比停车场剐蹭严重的原因之一。' },
            {
              type: 'example',
              title: { en: 'Example 1: Work at an angle', zh: '例题 1：斜向拉力做的功' },
              problem: { en: 'A student pulls a sled 20 m across level snow with a 50 N rope held at $60^\\circ$ above the horizontal. How much work does the rope do?', zh: '一名学生用与水平方向成 $60^\\circ$ 角、拉力为 50 N 的绳子把雪橇在水平雪地上拉了 20 m。绳子做了多少功？' },
              solution: [
                { type: 'math', tex: 'W = Fd\\cos\\theta = 50 \\times 20 \\times \\cos 60^\\circ = 50 \\times 20 \\times 0.5 = 500\\ \\text{J}' },
                { type: 'p', en: 'Only the horizontal component of the tension ($50\\cos 60^\\circ = 25$ N) does work; the vertical component merely lightens the load on the snow.', zh: '只有张力的水平分量（$50\\cos 60^\\circ = 25$ N）做功；竖直分量只是减轻了雪地承受的压力。' },
              ],
            },
            {
              type: 'example',
              title: { en: 'Example 2: Work–energy theorem', zh: '例题 2：动能定理' },
              problem: { en: 'A 0.50 kg hockey puck moving at 12 m/s slides onto rough ice and slows to 8.0 m/s. How much work did friction do on the puck?', zh: '一个 0.50 kg 的冰球以 12 m/s 滑上粗糙冰面，减速到 8.0 m/s。摩擦力对冰球做了多少功？' },
              solution: [
                { type: 'math', tex: 'W_{net} = \\tfrac{1}{2}(0.50)(8.0)^2 - \\tfrac{1}{2}(0.50)(12)^2 = 16 - 36 = -20\\ \\text{J}' },
                { type: 'p', en: 'Friction did $-20$ J of work. The negative sign shows friction removed kinetic energy from the puck (converting it into thermal energy).', zh: '摩擦力做了 $-20$ J 的功。负号表示摩擦力从冰球移除了动能（转化为热能）。' },
              ],
            },
          ],
          problems: [
            {
              type: 'mc',
              question: { en: 'A waiter carries a tray horizontally at constant velocity across a room. The work done by the upward force of his hand on the tray is:', zh: '服务员端着托盘以恒定速度水平走过房间。他的手对托盘向上的支持力做的功是：' },
              choices: ['zero | 零', 'positive | 正功', 'negative | 负功', 'equal to $mgd$ | 等于 $mgd$'],
              answer: 0,
              explanation: { en: 'The supporting force is vertical while the displacement is horizontal, so $\\theta = 90^\\circ$ and $W = Fd\\cos 90^\\circ = 0$. Feeling tired is not the same as doing physical work.', zh: '支持力竖直向上而位移水平，$\\theta = 90^\\circ$，故 $W = Fd\\cos 90^\\circ = 0$。感觉累不等于做了物理意义上的功。' },
            },
            {
              type: 'input',
              question: { en: 'A 60 N horizontal force pushes a box 5.0 m across a floor in the direction of the force. How much work is done, in J? (Whole number.)', zh: '60 N 的水平力沿力的方向把箱子推了 5.0 m。做了多少功，单位 J？（整数）' },
              answer: '300',
              explanation: { en: '$W = Fd\\cos 0^\\circ = 60 \\times 5.0 \\times 1 = 300$ J.', zh: '$W = Fd\\cos 0^\\circ = 60 \\times 5.0 \\times 1 = 300$ J。' },
            },
            {
              type: 'input',
              question: { en: 'Find the kinetic energy of a 1000 kg car moving at 20 m/s, in J. (Whole number.)', zh: '求一辆以 20 m/s 行驶的 1000 kg 汽车的动能，单位 J。（整数）' },
              answer: '200000',
              accept: ['2e5', '200,000'],
              explanation: { en: '$KE = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2}(1000)(20)^2 = 200{,}000$ J $= 200$ kJ.', zh: '$KE = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2}(1000)(20)^2 = 200{,}000$ J $= 200$ kJ。' },
            },
            {
              type: 'mc',
              question: { en: 'If a car’s speed triples, its kinetic energy becomes:', zh: '若汽车速度变为原来的三倍，其动能变为：' },
              choices: ['9 times as large | 原来的 9 倍', '3 times as large | 原来的 3 倍', '6 times as large | 原来的 6 倍', 'unchanged | 不变'],
              answer: 0,
              explanation: { en: 'Kinetic energy is proportional to $v^2$, so tripling $v$ multiplies $KE$ by $3^2 = 9$. This quadratic growth is why stopping distance grows so quickly with speed.', zh: '动能与 $v^2$ 成正比，速度变为三倍则动能变为 $3^2 = 9$ 倍。这种平方增长正是刹车距离随速度迅速增大的原因。' },
            },
            {
              type: 'mc',
              question: { en: 'Friction does $-150$ J of work on a sliding box. This means:', zh: '摩擦力对滑动的箱子做了 $-150$ J 的功。这意味着：' },
              choices: ['the box loses 150 J of kinetic energy to heat | 箱子损失 150 J 动能，转化为热', 'the box gains 150 J of kinetic energy | 箱子获得 150 J 动能', 'the box’s potential energy rises by 150 J | 箱子的势能增加 150 J', 'no energy is transferred | 没有能量转移'],
              answer: 0,
              explanation: { en: 'Negative work by friction removes mechanical energy from the box; it reappears as thermal energy in the surfaces. If friction is the only horizontal force, $\\Delta KE = -150$ J.', zh: '摩擦力做负功从箱子移除机械能，能量以热的形式出现在接触面上。若摩擦是唯一的水平力，则 $\\Delta KE = -150$ J。' },
            },
            {
              type: 'input',
              question: { en: 'A net force does 96 J of work on a 3.0 kg object starting from rest. Find its final speed in m/s (whole number).', zh: '合力对一个从静止开始的 3.0 kg 物体做了 96 J 的功。求其末速率，单位 m/s（整数）。' },
              answer: '8',
              accept: ['8.0'],
              explanation: { en: 'Work–energy theorem: $96 = \\tfrac{1}{2}(3.0)v^2$, so $v^2 = 64$ and $v = 8$ m/s.', zh: '动能定理：$96 = \\tfrac{1}{2}(3.0)v^2$，得 $v^2 = 64$，$v = 8$ m/s。' },
            },
            {
              type: 'input',
              question: { en: 'A 2.0 kg block slides at 6.0 m/s onto a rough patch and stops. How much work does friction do on the block, in J? Include the sign. (Whole number.)', zh: '一个 2.0 kg 的木块以 6.0 m/s 滑上粗糙路段并停下。摩擦力对木块做了多少功，单位 J？请带符号。（整数）' },
              answer: '-36',
              explanation: { en: '$W = \\Delta KE = 0 - \\tfrac{1}{2}(2.0)(6.0)^2 = -36$ J. Friction must remove all the initial kinetic energy, so its work is negative.', zh: '$W = \\Delta KE = 0 - \\tfrac{1}{2}(2.0)(6.0)^2 = -36$ J。摩擦力必须移除全部初动能，所以做负功。' },
            },
            {
              type: 'input',
              question: { en: 'A 1200 kg car traveling at 25 m/s brakes to a stop in 62.5 m. Find the magnitude of the average braking force in N, using the work–energy theorem. (Whole number.)', zh: '一辆 1200 kg 的汽车以 25 m/s 行驶，在 62.5 m 内刹停。用动能定理求平均制动力的大小，单位 N。（整数）' },
              answer: '6000',
              explanation: { en: '$\\Delta KE = -\\tfrac{1}{2}(1200)(25)^2 = -375{,}000$ J. Since $W = -Fd$, we get $F = 375{,}000 / 62.5 = 6000$ N.', zh: '$\\Delta KE = -\\tfrac{1}{2}(1200)(25)^2 = -375{,}000$ J。由 $W = -Fd$ 得 $F = 375{,}000/62.5 = 6000$ N。' },
            },
          ],
        },
        {
          id: 'potential-energy-conservation-power',
          title: 'Potential Energy, Conservation of Energy, and Power',
          titleZh: '势能、能量守恒与功率',
          content: [
            { type: 'h2', en: 'Potential Energy', zh: '势能' },
            { type: 'p', en: 'Potential energy is stored energy associated with position. Near Earth’s surface, gravitational potential energy relative to a chosen reference height is', zh: '势能是与位置相关的储存能量。在地表附近，相对于选定参考高度的重力势能为' },
            { type: 'math', tex: 'PE_g = mgh' },
            { type: 'p', en: 'with $g = 9.8\\ \\text{m/s}^2$. A stretched or compressed spring with spring constant $k$ stores elastic potential energy $PE_s = \\tfrac{1}{2}kx^2$, where $x$ is the deformation. Only CHANGES in potential energy matter, so you may put $h = 0$ wherever it is convenient.', zh: '其中 $g = 9.8\\ \\text{m/s}^2$。劲度系数为 $k$、形变量为 $x$ 的弹簧储存弹性势能 $PE_s = \\tfrac{1}{2}kx^2$。只有势能的"变化"才有物理意义，因此可以把 $h = 0$ 设在任何方便的位置。' },
            { type: 'h2', en: 'Conservation of Mechanical Energy', zh: '机械能守恒' },
            { type: 'p', en: 'If only conservative forces (like gravity and springs) do work — no friction, no air resistance — mechanical energy is conserved:', zh: '如果只有保守力（如重力和弹簧弹力）做功——没有摩擦、没有空气阻力——则机械能守恒：' },
            { type: 'math', tex: 'KE_i + PE_i = KE_f + PE_f' },
            { type: 'p', en: 'When friction does work $W_f$ (negative), the equation becomes $KE_i + PE_i + W_f = KE_f + PE_f$; the "missing" energy becomes thermal energy. Energy methods answer "how fast?" questions without tracking the path or the time.', zh: '当摩擦力做功 $W_f$（为负）时，方程变为 $KE_i + PE_i + W_f = KE_f + PE_f$；"消失"的能量转化为热能。能量方法可以在不追踪路径和时间的情况下回答"有多快"的问题。' },
            { type: 'note', en: 'Common misconception: on a frictionless track, the speed at the bottom of a hill does not depend on the steepness or shape of the slope — only on the vertical drop $h$. A curvy slide and a straight drop of equal height give the same final speed $v = \\sqrt{2gh}$.', zh: '常见误区：在无摩擦轨道上，坡底的速率与坡的陡峭程度或形状无关——只取决于竖直下降高度 $h$。同样高度的弯曲滑道和竖直下落给出相同的末速率 $v = \\sqrt{2gh}$。' },
            { type: 'h2', en: 'Power', zh: '功率' },
            { type: 'p', en: 'Power is the rate of doing work, measured in watts ($1\\ \\text{W} = 1\\ \\text{J/s}$):', zh: '功率是做功的快慢，单位为瓦特（$1\\ \\text{W} = 1\\ \\text{J/s}$）：' },
            { type: 'math', tex: 'P = \\frac{W}{t} = Fv' },
            { type: 'p', en: 'The form $P = Fv$ is handy when a machine pushes with force $F$ at speed $v$ — for instance, a car engine maintaining highway speed against drag.', zh: '$P = Fv$ 这种形式在机器以力 $F$、速度 $v$ 推动物体时特别方便——例如汽车发动机克服阻力维持高速行驶。' },
            {
              type: 'example',
              title: { en: 'Example 1: Roller coaster speed', zh: '例题 1：过山车的速率' },
              problem: { en: 'A roller coaster car starts from rest at the top of a 20 m hill. Ignoring friction, how fast is it moving at the bottom? Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一辆过山车从 20 m 高的坡顶由静止出发。忽略摩擦，它到达坡底时的速率是多少？取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: 'Set $h = 0$ at the bottom. Energy conservation with $KE_i = 0$ and $PE_f = 0$:', zh: '把坡底设为 $h = 0$。由能量守恒，$KE_i = 0$，$PE_f = 0$：' },
                { type: 'math', tex: 'mgh = \\tfrac{1}{2}mv^2 \\quad\\Rightarrow\\quad v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 20} = \\sqrt{392} \\approx 19.8\\ \\text{m/s}' },
                { type: 'p', en: 'The mass cancels — a heavy car and a light car reach the same speed.', zh: '质量被约去——重车和轻车到达坡底的速率相同。' },
              ],
            },
            {
              type: 'example',
              title: { en: 'Example 2: Power to climb stairs', zh: '例题 2：爬楼梯的功率' },
              problem: { en: 'A 50 kg student runs up a staircase 4.9 m high in 7.0 s. What average power does she develop against gravity? Use $g = 9.8\\ \\text{m/s}^2$.', zh: '一名 50 kg 的学生在 7.0 s 内跑上高 4.9 m 的楼梯。她克服重力输出的平均功率是多少？取 $g = 9.8\\ \\text{m/s}^2$。' },
              solution: [
                { type: 'p', en: 'Work done against gravity:', zh: '克服重力做的功：' },
                { type: 'math', tex: 'W = mgh = 50 \\times 9.8 \\times 4.9 = 2401\\ \\text{J}' },
                { type: 'math', tex: 'P = \\frac{W}{t} = \\frac{2401}{7.0} \\approx 343\\ \\text{W}' },
                { type: 'p', en: 'That is about the power of three bright incandescent light bulbs — sustained human power output is surprisingly modest.', zh: '这大约相当于三只白炽灯泡的功率——人体能持续输出的功率其实相当有限。' },
              ],
            },
          ],
          problems: [
            {
              type: 'input',
              question: { en: 'A 2.0 kg book is lifted 3.0 m. How much gravitational potential energy does it gain? Use $g = 9.8\\ \\text{m/s}^2$. Answer in J (one decimal place).', zh: '把一本 2.0 kg 的书举高 3.0 m。它的重力势能增加多少？取 $g = 9.8\\ \\text{m/s}^2$。单位 J（保留一位小数）。' },
              answer: '58.8',
              explanation: { en: '$\\Delta PE = mgh = 2.0 \\times 9.8 \\times 3.0 = 58.8$ J.', zh: '$\\Delta PE = mgh = 2.0 \\times 9.8 \\times 3.0 = 58.8$ J。' },
            },
            {
              type: 'mc',
              question: { en: 'A pendulum swings back and forth without friction. At the lowest point of the swing:', zh: '一个无摩擦的单摆来回摆动。在最低点：' },
              choices: ['KE is maximum and PE is minimum | 动能最大，势能最小', 'KE is minimum and PE is maximum | 动能最小，势能最大', 'KE and PE are both maximum | 动能和势能都最大', 'the total energy is momentarily zero | 总能量瞬间为零'],
              answer: 0,
              explanation: { en: 'Energy shuttles between forms while the total stays fixed. The lowest point has the least height (minimum PE), so the speed — and hence KE — must be greatest there.', zh: '能量在不同形式之间转换而总量不变。最低点高度最小（势能最小），所以速率和动能在此处最大。' },
            },
            {
              type: 'input',
              question: { en: 'A ball is dropped from rest from a height of 10 m (no air resistance). Find its speed just before impact in m/s. Use $g = 9.8\\ \\text{m/s}^2$. (One decimal place.)', zh: '一个球从 10 m 高处由静止落下（无空气阻力）。求它落地前瞬间的速率，单位 m/s。取 $g = 9.8\\ \\text{m/s}^2$。（保留一位小数）' },
              answer: '14.0',
              accept: ['14'],
              explanation: { en: '$mgh = \\tfrac{1}{2}mv^2$ gives $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 10} = \\sqrt{196} = 14.0$ m/s.', zh: '由 $mgh = \\tfrac{1}{2}mv^2$ 得 $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 10} = \\sqrt{196} = 14.0$ m/s。' },
            },
            {
              type: 'mc',
              question: { en: 'Two frictionless slides start at the same height: one is steep and straight, the other long and winding. Compared to the steep slide, a child on the winding slide reaches the bottom with:', zh: '两个无摩擦滑梯起点等高：一个又陡又直，另一个又长又弯。与陡滑梯相比，弯滑梯上的孩子到达底部时：' },
              choices: ['the same speed but after more time | 速率相同，但用时更长', 'a smaller speed | 速率更小', 'a larger speed | 速率更大', 'the same speed and the same time | 速率相同且用时相同'],
              answer: 0,
              explanation: { en: 'With no friction, final speed depends only on the vertical drop: $v = \\sqrt{2gh}$. The path length affects the travel time but not the final speed.', zh: '无摩擦时末速率只取决于竖直落差：$v = \\sqrt{2gh}$。路径长短影响所用时间，但不影响末速率。' },
            },
            {
              type: 'input',
              question: { en: 'A spring with $k = 400$ N/m is compressed 0.10 m. How much elastic potential energy is stored, in J? (One decimal place.)', zh: '一根 $k = 400$ N/m 的弹簧被压缩 0.10 m。储存的弹性势能是多少，单位 J？（保留一位小数）' },
              answer: '2.0',
              accept: ['2'],
              explanation: { en: '$PE_s = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(400)(0.10)^2 = 2.0$ J. Note the square: doubling the compression stores four times the energy.', zh: '$PE_s = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(400)(0.10)^2 = 2.0$ J。注意平方关系：压缩量加倍，储能变为四倍。' },
            },
            {
              type: 'input',
              question: { en: 'A motor lifts a 20 kg load 15 m in 10 s at constant speed. Find its output power in W. Use $g = 9.8\\ \\text{m/s}^2$. (Whole number.)', zh: '一台电动机以恒定速度在 10 s 内把 20 kg 的重物提升 15 m。求其输出功率，单位 W。取 $g = 9.8\\ \\text{m/s}^2$。（整数）' },
              answer: '294',
              explanation: { en: '$W = mgh = 20 \\times 9.8 \\times 15 = 2940$ J, so $P = W/t = 2940/10 = 294$ W.', zh: '$W = mgh = 20 \\times 9.8 \\times 15 = 2940$ J，故 $P = W/t = 2940/10 = 294$ W。' },
            },
            {
              type: 'mc',
              question: { en: 'A car needs 12 kW to cruise at 20 m/s on a level road. The total resistive force on it is:', zh: '一辆汽车在平路上以 20 m/s 巡航需要 12 kW 的功率。它受到的总阻力是：' },
              choices: ['$600\\ \\text{N}$', '$240{,}000\\ \\text{N}$', '$1.7\\ \\text{N}$', '$1200\\ \\text{N}$'],
              answer: 0,
              explanation: { en: 'At constant speed the drive force equals the resistance, and $P = Fv$ gives $F = P/v = 12{,}000/20 = 600$ N.', zh: '匀速时驱动力等于阻力，由 $P = Fv$ 得 $F = P/v = 12{,}000/20 = 600$ N。' },
            },
            {
              type: 'input',
              question: { en: 'A 0.50 kg ball is thrown downward at 4.0 m/s from a height of 5.0 m. Using energy conservation (no air resistance, $g = 9.8\\ \\text{m/s}^2$), find its speed at the ground in m/s (one decimal place).', zh: '一个 0.50 kg 的球从 5.0 m 高处以 4.0 m/s 向下抛出。用能量守恒（无空气阻力，$g = 9.8\\ \\text{m/s}^2$）求它落地时的速率，单位 m/s（保留一位小数）。' },
              answer: '10.7',
              explanation: { en: '$\\tfrac{1}{2}v_f^2 = \\tfrac{1}{2}v_i^2 + gh$, so $v_f = \\sqrt{4.0^2 + 2(9.8)(5.0)} = \\sqrt{16 + 98} = \\sqrt{114} \\approx 10.7$ m/s. The mass cancels, and the launch direction does not matter for the speed.', zh: '$\\tfrac{1}{2}v_f^2 = \\tfrac{1}{2}v_i^2 + gh$，故 $v_f = \\sqrt{4.0^2 + 2(9.8)(5.0)} = \\sqrt{114} \\approx 10.7$ m/s。质量被约去，且抛出方向不影响末速率大小。' },
            },
          ],
        },
      ],
    },
    ...extendedUnits,
    ...supplementalUnits.slice(1),
  ]),
}
