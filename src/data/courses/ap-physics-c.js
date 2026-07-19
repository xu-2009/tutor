export default {
  "id": "ap-physics-c",
  "title": "AP Physics C",
  "titleZh": "AP 物理 C",
  "subject": "science",
  "level": "AP",
  "description": "The complete calculus-based AP Physics C course covering both exams: Mechanics (official Units 1–7) and Electricity & Magnetism (official Units 8–13), deriving results with derivatives, integrals, and differential equations.",
  "descriptionZh": "完整的微积分基础 AP 物理 C 课程，覆盖两门考试：力学（官方第 1–7 单元）与电磁学（官方第 8–13 单元），全程用导数、积分和微分方程推导物理结论。",
  "units": [
    {
      "id": "kinematics",
      "title": "Unit 1: Kinematics",
      "titleZh": "第一单元：运动学",
      "lessons": [
        {
          "id": "calculus-of-motion",
          "title": "Calculus of Motion",
          "titleZh": "运动的微积分",
          "content": [
            {
              "type": "h2",
              "en": "Position, Velocity, and Acceleration",
              "zh": "位置、速度与加速度"
            },
            {
              "type": "p",
              "en": "In AP Physics C, motion is described with calculus. If an object’s position is a function of time $x(t)$, then its velocity is the time derivative of position, and its acceleration is the time derivative of velocity.",
              "zh": "在 AP 物理 C 中，我们用微积分描述运动。若物体的位置是时间的函数 $x(t)$，则速度是位置对时间的导数，加速度是速度对时间的导数。"
            },
            {
              "type": "math",
              "tex": "v(t) = \\frac{dx}{dt}, \\qquad a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}"
            },
            {
              "type": "p",
              "en": "The chain rule gives a useful alternative form for acceleration that eliminates time: $a = \\frac{dv}{dt} = \\frac{dv}{dx}\\frac{dx}{dt} = v\\frac{dv}{dx}$. This is powerful when acceleration is given as a function of position.",
              "zh": "链式法则给出一个消去时间的加速度替代形式：$a = \\frac{dv}{dt} = \\frac{dv}{dx}\\frac{dx}{dt} = v\\frac{dv}{dx}$。当加速度是位置的函数时，这个形式非常有用。"
            },
            {
              "type": "h3",
              "en": "Going Backward: Integration",
              "zh": "逆向运算：积分"
            },
            {
              "type": "p",
              "en": "To recover velocity from acceleration and position from velocity, we integrate. Each integration introduces a constant fixed by initial conditions.",
              "zh": "要从加速度求速度、从速度求位置，我们进行积分。每次积分都会引入一个由初始条件确定的常数。"
            },
            {
              "type": "math",
              "tex": "v(t) = v_0 + \\int_0^t a\\,dt"
            },
            {
              "type": "math",
              "tex": "x(t) = x_0 + \\int_0^t v\\,dt"
            },
            {
              "type": "p",
              "en": "Geometrically, the area under an acceleration-time graph is the change in velocity, and the area under a velocity-time graph is the displacement. The slope of an $x$-$t$ graph is velocity; the slope of a $v$-$t$ graph is acceleration.",
              "zh": "从几何上看，加速度-时间图下的面积是速度的变化量，速度-时间图下的面积是位移。$x$-$t$ 图的斜率是速度，$v$-$t$ 图的斜率是加速度。"
            },
            {
              "type": "note",
              "en": "AP exam tip: The constant-acceleration kinematics equations (like $x = x_0 + v_0 t + \\tfrac{1}{2}at^2$) are ONLY valid when $a$ is constant. If acceleration varies with time or position, you must integrate. A common mistake is plugging a variable acceleration into these formulas.",
              "zh": "AP 考试提示：匀加速运动学公式（如 $x = x_0 + v_0 t + \\tfrac{1}{2}at^2$）仅在 $a$ 为常数时成立。若加速度随时间或位置变化，必须积分。常见错误是把变化的加速度代入这些公式。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Differentiating position",
                "zh": "例题 1：对位置求导"
              },
              "problem": {
                "en": "A particle moves along a line with $x(t) = 4t^3 - 6t^2 + 2$ (SI units). Find its velocity and acceleration at $t = 2\\,\\text{s}$.",
                "zh": "一质点沿直线运动，$x(t) = 4t^3 - 6t^2 + 2$（国际单位）。求 $t = 2\\,\\text{s}$ 时的速度和加速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate to get velocity:",
                  "zh": "求导得到速度："
                },
                {
                  "type": "math",
                  "tex": "v(t) = \\frac{dx}{dt} = 12t^2 - 12t"
                },
                {
                  "type": "p",
                  "en": "Differentiate again for acceleration:",
                  "zh": "再求导得到加速度："
                },
                {
                  "type": "math",
                  "tex": "a(t) = \\frac{dv}{dt} = 24t - 12"
                },
                {
                  "type": "p",
                  "en": "At $t = 2$: $v = 12(4) - 12(2) = 24\\,\\text{m/s}$ and $a = 24(2) - 12 = 36\\,\\text{m/s}^2$.",
                  "zh": "当 $t = 2$：$v = 12(4) - 12(2) = 24\\,\\text{m/s}$，$a = 24(2) - 12 = 36\\,\\text{m/s}^2$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Integrating acceleration",
                "zh": "例题 2：对加速度积分"
              },
              "problem": {
                "en": "An object starts at rest at the origin and has acceleration $a(t) = 6t\\,\\text{m/s}^2$. Find its velocity and position as functions of time.",
                "zh": "一物体从原点静止出发，加速度为 $a(t) = 6t\\,\\text{m/s}^2$。求速度和位置关于时间的函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Integrate acceleration, using $v_0 = 0$:",
                  "zh": "对加速度积分，代入 $v_0 = 0$："
                },
                {
                  "type": "math",
                  "tex": "v(t) = \\int_0^t 6t\\,dt = 3t^2"
                },
                {
                  "type": "p",
                  "en": "Integrate velocity, using $x_0 = 0$:",
                  "zh": "对速度积分，代入 $x_0 = 0$："
                },
                {
                  "type": "math",
                  "tex": "x(t) = \\int_0^t 3t^2\\,dt = t^3"
                },
                {
                  "type": "p",
                  "en": "So $v = 3t^2\\,\\text{m/s}$ and $x = t^3\\,\\text{m}$.",
                  "zh": "所以 $v = 3t^2\\,\\text{m/s}$，$x = t^3\\,\\text{m}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $x(t) = 5t^2 - 3t$, what is the velocity $v(t)$?",
                "zh": "若 $x(t) = 5t^2 - 3t$，速度 $v(t)$ 是多少？"
              },
              "choices": [
                "$5t - 3$",
                "$10t - 3$",
                "$10t$",
                "$\\frac{5}{3}t^3 - \\frac{3}{2}t^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Velocity is $dx/dt$. The derivative of $5t^2$ is $10t$ and of $-3t$ is $-3$, giving $v = 10t - 3$.",
                "zh": "速度是 $dx/dt$。$5t^2$ 的导数是 $10t$，$-3t$ 的导数是 $-3$，所以 $v = 10t - 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The area under a velocity-versus-time graph represents which quantity?",
                "zh": "速度-时间图下的面积代表哪个量？"
              },
              "choices": [
                "Jerk",
                "Acceleration",
                "Displacement",
                "Force"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $x = x_0 + \\int v\\,dt$, the area under a $v$-$t$ graph is the displacement.",
                "zh": "由于 $x = x_0 + \\int v\\,dt$，$v$-$t$ 图下的面积就是位移。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle has $v(t) = 3t^2 - 4t$. What is its acceleration at $t = 1\\,\\text{s}$?",
                "zh": "一质点 $v(t) = 3t^2 - 4t$。$t = 1\\,\\text{s}$ 时加速度是多少？"
              },
              "choices": [
                "$0\\,\\text{m/s}^2$",
                "$6\\,\\text{m/s}^2$",
                "$-1\\,\\text{m/s}^2$",
                "$2\\,\\text{m/s}^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$a = dv/dt = 6t - 4$. At $t = 1$, $a = 6(1) - 4 = 2\\,\\text{m/s}^2$.",
                "zh": "$a = dv/dt = 6t - 4$。当 $t = 1$，$a = 6(1) - 4 = 2\\,\\text{m/s}^2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A car’s position is $x(t) = 2t^3\\,\\text{m}$. Find its speed (in m/s) at $t = 3\\,\\text{s}$.",
                "zh": "一辆车的位置为 $x(t) = 2t^3\\,\\text{m}$。求 $t = 3\\,\\text{s}$ 时的速率（m/s）。"
              },
              "answer": "54",
              "accept": [
                "54.0",
                "54 m/s"
              ],
              "explanation": {
                "en": "$v = dx/dt = 6t^2$. At $t = 3$, $v = 6(9) = 54\\,\\text{m/s}$.",
                "zh": "$v = dx/dt = 6t^2$。当 $t = 3$，$v = 6(9) = 54\\,\\text{m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An object starts from rest with acceleration $a(t) = 4t\\,\\text{m/s}^2$. What is its velocity (in m/s) at $t = 2\\,\\text{s}$?",
                "zh": "一物体从静止出发，加速度 $a(t) = 4t\\,\\text{m/s}^2$。$t = 2\\,\\text{s}$ 时速度（m/s）是多少？"
              },
              "answer": "8",
              "accept": [
                "8.0",
                "8 m/s"
              ],
              "explanation": {
                "en": "$v = \\int_0^t 4t\\,dt = 2t^2$. At $t = 2$, $v = 2(4) = 8\\,\\text{m/s}$.",
                "zh": "$v = \\int_0^t 4t\\,dt = 2t^2$。当 $t = 2$，$v = 2(4) = 8\\,\\text{m/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Acceleration is given as a function of position: $a = -kx$. Which relation best isolates velocity as a function of position?",
                "zh": "加速度是位置的函数：$a = -kx$。哪个关系式最适合把速度表示为位置的函数？"
              },
              "choices": [
                "$v\\,dv = -kx\\,dx$",
                "$dv = -kx\\,dt$",
                "$v = -kx\\,t$",
                "$a = -k\\frac{dx}{dt}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Using $a = v\\frac{dv}{dx}$, we get $v\\frac{dv}{dx} = -kx$, so $v\\,dv = -kx\\,dx$, which can be integrated directly.",
                "zh": "利用 $a = v\\frac{dv}{dx}$，得 $v\\frac{dv}{dx} = -kx$，即 $v\\,dv = -kx\\,dx$，可直接积分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle has $x(t) = t^3 - 6t^2 + 9t$. At what time (in s, the smaller value) is the velocity zero?",
                "zh": "一质点 $x(t) = t^3 - 6t^2 + 9t$。速度为零的时刻（s，较小值）是多少？"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "1 s",
                "t=1"
              ],
              "explanation": {
                "en": "$v = 3t^2 - 12t + 9 = 3(t-1)(t-3)$. Velocity is zero at $t = 1\\,\\text{s}$ and $t = 3\\,\\text{s}$; the smaller is $1\\,\\text{s}$.",
                "zh": "$v = 3t^2 - 12t + 9 = 3(t-1)(t-3)$。速度在 $t = 1\\,\\text{s}$ 和 $t = 3\\,\\text{s}$ 为零；较小值为 $1\\,\\text{s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If acceleration $a(t)$ is constant and nonzero, which graph of $x$ versus $t$ is correct?",
                "zh": "若加速度 $a(t)$ 为非零常数，$x$ 关于 $t$ 的图像是哪种？"
              },
              "choices": [
                "A horizontal line",
                "A straight line",
                "A parabola",
                "A sine curve"
              ],
              "answer": 2,
              "explanation": {
                "en": "Constant $a$ integrates to $x = x_0 + v_0 t + \\tfrac{1}{2}at^2$, a quadratic in $t$, which is a parabola.",
                "zh": "常数 $a$ 积分得 $x = x_0 + v_0 t + \\tfrac{1}{2}at^2$，关于 $t$ 是二次函数，图像为抛物线。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "force-translational-dynamics",
      "title": "Unit 2: Force and Translational Dynamics",
      "titleZh": "第二单元：力与平动动力学",
      "lessons": [
        {
          "id": "newtons-laws-forces",
          "title": "Newton’s Laws & Force Analysis",
          "titleZh": "牛顿定律与受力分析",
          "content": [
            {
              "type": "h2",
              "en": "The Three Laws",
              "zh": "三大定律"
            },
            {
              "type": "p",
              "en": "Newton’s first law says an object keeps constant velocity unless a net force acts on it. The second law relates net force to acceleration, and is most generally stated in terms of momentum: $\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}$. For constant mass this reduces to the familiar $\\vec{F}_{net} = m\\vec{a}$. The third law says forces come in equal and opposite pairs acting on different bodies.",
              "zh": "牛顿第一定律指出，除非有净力作用，物体保持匀速运动。第二定律把净力与加速度联系起来，最一般的形式用动量表示：$\\vec{F}_{net} = \\frac{d\\vec{p}}{dt}$。当质量不变时化为熟悉的 $\\vec{F}_{net} = m\\vec{a}$。第三定律指出力总是成对出现，大小相等、方向相反，作用在不同物体上。"
            },
            {
              "type": "math",
              "tex": "\\vec{F}_{net} = \\sum \\vec{F}_i = m\\vec{a}"
            },
            {
              "type": "h3",
              "en": "Free-Body Diagrams",
              "zh": "受力图"
            },
            {
              "type": "p",
              "en": "To solve any dynamics problem, draw a free-body diagram (FBD) showing every force on the object: gravity $mg$, normal force $N$, tension $T$, friction $f$, and applied forces. Then apply Newton’s second law along each axis. On an incline, choose axes parallel and perpendicular to the surface.",
              "zh": "解决任何动力学问题，先画受力图，标出物体所受的每个力：重力 $mg$、法向力 $N$、张力 $T$、摩擦力 $f$ 和外加力。然后沿每个坐标轴应用牛顿第二定律。在斜面上，坐标轴应取平行和垂直于斜面方向。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Static friction: $f_s \\le \\mu_s N$ (adjusts to prevent motion, up to a maximum).",
                  "zh": "静摩擦力：$f_s \\le \\mu_s N$（自动调整以阻止运动，直到最大值）。"
                },
                {
                  "en": "Kinetic friction: $f_k = \\mu_k N$ (opposes sliding motion).",
                  "zh": "动摩擦力：$f_k = \\mu_k N$（与滑动方向相反）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: The normal force does NOT always equal $mg$. On an incline $N = mg\\cos\\theta$; in an accelerating elevator $N = m(g \\pm a)$. Always find $N$ from Newton’s second law perpendicular to the surface, not by assumption.",
              "zh": "常见错误：法向力并不总等于 $mg$。在斜面上 $N = mg\\cos\\theta$；在加速电梯中 $N = m(g \\pm a)$。务必用垂直于表面的牛顿第二定律求 $N$，而不要想当然。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Block on an incline",
                "zh": "例题 1：斜面上的木块"
              },
              "problem": {
                "en": "A block of mass $m$ rests on a frictionless incline of angle $\\theta$. Find its acceleration down the incline.",
                "zh": "质量为 $m$ 的木块置于倾角为 $\\theta$ 的无摩擦斜面上。求其沿斜面向下的加速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Choose the x-axis pointing down the incline. The component of gravity along the incline is $mg\\sin\\theta$; the normal force is perpendicular and does no work here.",
                  "zh": "取 x 轴沿斜面向下。重力沿斜面的分量为 $mg\\sin\\theta$；法向力垂直于斜面。"
                },
                {
                  "type": "math",
                  "tex": "mg\\sin\\theta = ma \\;\\Rightarrow\\; a = g\\sin\\theta"
                },
                {
                  "type": "p",
                  "en": "The acceleration is $g\\sin\\theta$, independent of mass.",
                  "zh": "加速度为 $g\\sin\\theta$，与质量无关。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Atwood machine",
                "zh": "例题 2：阿特伍德机"
              },
              "problem": {
                "en": "Two masses $m_1 = 3\\,\\text{kg}$ and $m_2 = 5\\,\\text{kg}$ hang over an ideal pulley. Find the acceleration of the system. Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "两个质量 $m_1 = 3\\,\\text{kg}$ 和 $m_2 = 5\\,\\text{kg}$ 挂在理想滑轮两侧。求系统加速度。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For the heavier mass (down positive) and lighter mass (up positive), the two equations are $m_2 g - T = m_2 a$ and $T - m_1 g = m_1 a$. Adding eliminates $T$:",
                  "zh": "对较重的物体（向下为正）和较轻的物体（向上为正），两个方程为 $m_2 g - T = m_2 a$ 和 $T - m_1 g = m_1 a$。相加消去 $T$："
                },
                {
                  "type": "math",
                  "tex": "a = \\frac{(m_2 - m_1)g}{m_1 + m_2} = \\frac{(5-3)(10)}{8} = 2.5\\,\\text{m/s}^2"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A 2 kg object experiences a net force of 10 N. What is its acceleration?",
                "zh": "一个 2 kg 的物体受到 10 N 的净力。加速度是多少？"
              },
              "choices": [
                "$20\\,\\text{m/s}^2$",
                "$5\\,\\text{m/s}^2$",
                "$0.2\\,\\text{m/s}^2$",
                "$12\\,\\text{m/s}^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$a = F/m = 10/2 = 5\\,\\text{m/s}^2$.",
                "zh": "$a = F/m = 10/2 = 5\\,\\text{m/s}^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The most general statement of Newton’s second law is:",
                "zh": "牛顿第二定律最一般的表述是："
              },
              "choices": [
                "$\\vec{F} = \\frac{d\\vec{v}}{dt}$",
                "$\\vec{F} = m\\vec{v}$",
                "$\\vec{F} = \\frac{d\\vec{p}}{dt}$",
                "$\\vec{F} = \\frac{1}{2}m v^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Force equals the rate of change of momentum, $\\vec{F} = d\\vec{p}/dt$. This reduces to $m\\vec{a}$ only when mass is constant.",
                "zh": "力等于动量的变化率 $\\vec{F} = d\\vec{p}/dt$。仅当质量不变时才化为 $m\\vec{a}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A block sits on a horizontal surface with $\\mu_s = 0.4$. If the block weighs 50 N, what is the maximum static friction force?",
                "zh": "一木块置于水平面上，$\\mu_s = 0.4$。若木块重 50 N，最大静摩擦力是多少？"
              },
              "choices": [
                "0.4 N",
                "50 N",
                "125 N",
                "20 N"
              ],
              "answer": 3,
              "explanation": {
                "en": "$f_{s,\\max} = \\mu_s N = 0.4 \\times 50 = 20\\,\\text{N}$ (here $N = mg = 50\\,\\text{N}$).",
                "zh": "$f_{s,\\max} = \\mu_s N = 0.4 \\times 50 = 20\\,\\text{N}$（这里 $N = mg = 50\\,\\text{N}$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A block slides down a frictionless incline of angle $30°$. Find its acceleration (in m/s²). Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "一木块沿倾角 $30°$ 的无摩擦斜面下滑。求加速度（m/s²）。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "5 m/s^2"
              ],
              "explanation": {
                "en": "$a = g\\sin\\theta = 10\\sin 30° = 10(0.5) = 5\\,\\text{m/s}^2$.",
                "zh": "$a = g\\sin\\theta = 10\\sin 30° = 10(0.5) = 5\\,\\text{m/s}^2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An elevator accelerates upward at $2\\,\\text{m/s}^2$. A 60 kg person stands inside. What normal force (in N) does the floor exert? Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "电梯以 $2\\,\\text{m/s}^2$ 向上加速。一个 60 kg 的人站在里面。地板对人的法向力（N）是多少？取 $g = 10\\,\\text{m/s}^2$。"
              },
              "answer": "720",
              "accept": [
                "720 N"
              ],
              "explanation": {
                "en": "$N - mg = ma \\Rightarrow N = m(g+a) = 60(10+2) = 720\\,\\text{N}$.",
                "zh": "$N - mg = ma \\Rightarrow N = m(g+a) = 60(10+2) = 720\\,\\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "By Newton’s third law, if the Earth pulls a falling apple with force $F$, the apple pulls the Earth with:",
                "zh": "根据牛顿第三定律，若地球以力 $F$ 拉下落的苹果，则苹果拉地球的力为："
              },
              "choices": [
                "Force $F$, upward on the Earth",
                "Zero force",
                "A much smaller force",
                "Force $F$, downward"
              ],
              "answer": 0,
              "explanation": {
                "en": "Third-law pairs are equal in magnitude and opposite in direction and act on different bodies. The apple pulls Earth up with the same magnitude $F$.",
                "zh": "第三定律的力对大小相等、方向相反，作用在不同物体上。苹果以同样大小 $F$ 向上拉地球。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In an Atwood machine, $m_1 = 2\\,\\text{kg}$ and $m_2 = 6\\,\\text{kg}$. Find the acceleration (in m/s²). Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "阿特伍德机中 $m_1 = 2\\,\\text{kg}$，$m_2 = 6\\,\\text{kg}$。求加速度（m/s²）。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "$a = \\frac{(m_2-m_1)g}{m_1+m_2} = \\frac{(6-2)(10)}{8} = 5\\,\\text{m/s}^2$.",
                "zh": "$a = \\frac{(m_2-m_1)g}{m_1+m_2} = \\frac{(6-2)(10)}{8} = 5\\,\\text{m/s}^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A 4 kg block on a rough horizontal surface ($\\mu_k = 0.25$) is pushed with a horizontal force of 20 N. What is its acceleration? Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "粗糙水平面（$\\mu_k = 0.25$）上一个 4 kg 木块受 20 N 水平推力。加速度是多少？取 $g = 10\\,\\text{m/s}^2$。"
              },
              "choices": [
                "$1\\,\\text{m/s}^2$",
                "$5\\,\\text{m/s}^2$",
                "$2.5\\,\\text{m/s}^2$",
                "$0\\,\\text{m/s}^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Friction $f_k = \\mu_k mg = 0.25(4)(10) = 10\\,\\text{N}$. Net force $= 20 - 10 = 10\\,\\text{N}$, so $a = 10/4 = 2.5\\,\\text{m/s}^2$.",
                "zh": "摩擦力 $f_k = \\mu_k mg = 0.25(4)(10) = 10\\,\\text{N}$。净力 $= 20 - 10 = 10\\,\\text{N}$，所以 $a = 10/4 = 2.5\\,\\text{m/s}^2$。"
              }
            }
          ]
        },
        {
          "id": "variable-forces-diffeq",
          "title": "Variable Forces & Differential Equations",
          "titleZh": "变力与微分方程",
          "content": [
            {
              "type": "h2",
              "en": "Forces That Depend on Velocity",
              "zh": "依赖速度的力"
            },
            {
              "type": "p",
              "en": "When a force depends on velocity — like air resistance or drag — Newton’s second law becomes a differential equation. A common model is linear drag $F_{drag} = -bv$, giving:",
              "zh": "当力依赖于速度时——如空气阻力或黏滞阻力——牛顿第二定律变成一个微分方程。一个常见模型是线性阻力 $F_{drag} = -bv$，给出："
            },
            {
              "type": "math",
              "tex": "m\\frac{dv}{dt} = mg - bv"
            },
            {
              "type": "p",
              "en": "We solve by separation of variables. Terminal velocity occurs when acceleration is zero, i.e. when the drag balances gravity: $v_t = \\frac{mg}{b}$. The full solution approaches this value exponentially.",
              "zh": "我们用分离变量法求解。终端速度出现在加速度为零时，即阻力与重力平衡：$v_t = \\frac{mg}{b}$。完整解以指数方式趋近这个值。"
            },
            {
              "type": "math",
              "tex": "v(t) = \\frac{mg}{b}\\left(1 - e^{-bt/m}\\right)"
            },
            {
              "type": "h3",
              "en": "The Exponential Time Constant",
              "zh": "指数时间常数"
            },
            {
              "type": "p",
              "en": "The quantity $\\tau = m/b$ is the time constant: after one time constant the velocity has reached about 63% of its terminal value. Exponential approach appears again in RC and RL circuits later in this course.",
              "zh": "量 $\\tau = m/b$ 是时间常数：经过一个时间常数后，速度达到终端值的约 63%。指数趋近在本课程后面的 RC 和 RL 电路中会再次出现。"
            },
            {
              "type": "note",
              "en": "AP exam tip: You are often asked to SET UP the differential equation and identify terminal velocity WITHOUT fully solving it. To find terminal velocity, set $\\frac{dv}{dt} = 0$ and solve the resulting algebraic equation — no calculus required for that step.",
              "zh": "AP 考试提示：题目常要求你列出微分方程并求终端速度，而不必完全求解。求终端速度时，令 $\\frac{dv}{dt} = 0$，解得到的代数方程——这一步不需要微积分。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Terminal velocity",
                "zh": "例题 1：终端速度"
              },
              "problem": {
                "en": "A 2 kg ball falls subject to linear drag $F = -bv$ with $b = 4\\,\\text{kg/s}$. Find its terminal velocity. Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "一个 2 kg 的球下落，受线性阻力 $F = -bv$，$b = 4\\,\\text{kg/s}$。求终端速度。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At terminal velocity, acceleration is zero, so net force is zero:",
                  "zh": "在终端速度时加速度为零，故净力为零："
                },
                {
                  "type": "math",
                  "tex": "mg - bv_t = 0 \\;\\Rightarrow\\; v_t = \\frac{mg}{b} = \\frac{2(10)}{4} = 5\\,\\text{m/s}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Position-dependent force",
                "zh": "例题 2：位置相关的力"
              },
              "problem": {
                "en": "A particle of mass $m$ experiences force $F = -kx$. Show that this leads to oscillation and find the angular frequency.",
                "zh": "质量为 $m$ 的质点受力 $F = -kx$。证明这将导致振动并求角频率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Newton’s second law gives the differential equation:",
                  "zh": "牛顿第二定律给出微分方程："
                },
                {
                  "type": "math",
                  "tex": "m\\frac{d^2x}{dt^2} = -kx \\;\\Rightarrow\\; \\frac{d^2x}{dt^2} = -\\frac{k}{m}x"
                },
                {
                  "type": "p",
                  "en": "This is the SHM equation $\\ddot{x} = -\\omega^2 x$ with $\\omega = \\sqrt{k/m}$. The solution is sinusoidal: $x(t) = A\\cos(\\omega t + \\phi)$.",
                  "zh": "这是简谐运动方程 $\\ddot{x} = -\\omega^2 x$，其中 $\\omega = \\sqrt{k/m}$。解是正弦形式：$x(t) = A\\cos(\\omega t + \\phi)$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For a falling object with linear drag $F = mg - bv$, terminal velocity is:",
                "zh": "对于受线性阻力 $F = mg - bv$ 的下落物体，终端速度为："
              },
              "choices": [
                "$\\frac{b}{mg}$",
                "$\\frac{mg}{b}$",
                "$\\frac{bg}{m}$",
                "$mgb$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Set $dv/dt = 0$: $mg - bv_t = 0$, so $v_t = mg/b$.",
                "zh": "令 $dv/dt = 0$：$mg - bv_t = 0$，所以 $v_t = mg/b$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The differential equation $m\\frac{dv}{dt} = mg - bv$ is solved by which method?",
                "zh": "微分方程 $m\\frac{dv}{dt} = mg - bv$ 用哪种方法求解？"
              },
              "choices": [
                "Cross product",
                "The quadratic formula",
                "Separation of variables",
                "Dot product"
              ],
              "answer": 2,
              "explanation": {
                "en": "It is a first-order separable ODE; separate $v$ and $t$ terms and integrate both sides.",
                "zh": "这是一阶可分离常微分方程；将 $v$ 和 $t$ 项分离后两边积分。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the SHM equation $\\frac{d^2x}{dt^2} = -\\frac{k}{m}x$, the angular frequency is:",
                "zh": "对于简谐运动方程 $\\frac{d^2x}{dt^2} = -\\frac{k}{m}x$，角频率为："
              },
              "choices": [
                "$m/k$",
                "$k/m$",
                "$\\sqrt{m/k}$",
                "$\\sqrt{k/m}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Comparing to $\\ddot{x} = -\\omega^2 x$ gives $\\omega^2 = k/m$, so $\\omega = \\sqrt{k/m}$.",
                "zh": "与 $\\ddot{x} = -\\omega^2 x$ 比较得 $\\omega^2 = k/m$，故 $\\omega = \\sqrt{k/m}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 5 kg object falls with linear drag coefficient $b = 2\\,\\text{kg/s}$. Find its terminal velocity (in m/s). Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "一个 5 kg 物体下落，线性阻力系数 $b = 2\\,\\text{kg/s}$。求终端速度（m/s）。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "answer": "25",
              "accept": [
                "25.0",
                "25 m/s"
              ],
              "explanation": {
                "en": "$v_t = mg/b = 5(10)/2 = 25\\,\\text{m/s}$.",
                "zh": "$v_t = mg/b = 5(10)/2 = 25\\,\\text{m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For a mass falling with drag, the time constant is $\\tau = m/b$. If $m = 3\\,\\text{kg}$ and $b = 6\\,\\text{kg/s}$, find $\\tau$ (in s).",
                "zh": "对于受阻力下落的质量，时间常数为 $\\tau = m/b$。若 $m = 3\\,\\text{kg}$，$b = 6\\,\\text{kg/s}$，求 $\\tau$（s）。"
              },
              "answer": "0.5",
              "accept": [
                "1/2",
                ".5"
              ],
              "explanation": {
                "en": "$\\tau = m/b = 3/6 = 0.5\\,\\text{s}$.",
                "zh": "$\\tau = m/b = 3/6 = 0.5\\,\\text{s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "After one time constant $\\tau$, a falling object with linear drag reaches approximately what fraction of terminal velocity?",
                "zh": "经过一个时间常数 $\\tau$ 后，受线性阻力下落的物体大约达到终端速度的多少？"
              },
              "choices": [
                "63%",
                "37%",
                "50%",
                "100%"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $v = v_t(1 - e^{-t/\\tau})$, at $t = \\tau$ we get $v = v_t(1 - e^{-1}) \\approx 0.63 v_t$.",
                "zh": "由于 $v = v_t(1 - e^{-t/\\tau})$，当 $t = \\tau$ 时 $v = v_t(1 - e^{-1}) \\approx 0.63 v_t$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A force $F = -kx$ acting on a mass produces motion that is:",
                "zh": "力 $F = -kx$ 作用于质量产生的运动是："
              },
              "choices": [
                "Exponential decay",
                "Uniformly accelerated",
                "Simple harmonic",
                "Constant velocity"
              ],
              "answer": 2,
              "explanation": {
                "en": "A restoring force proportional to displacement yields $\\ddot{x} = -\\omega^2 x$, the equation of simple harmonic motion.",
                "zh": "与位移成正比的回复力给出 $\\ddot{x} = -\\omega^2 x$，即简谐运动方程。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A quadratic drag model gives terminal velocity from $mg = cv_t^2$. If $m = 8\\,\\text{kg}$, $c = 0.2\\,\\text{kg/m}$, and $g = 10\\,\\text{m/s}^2$, find $v_t$ (in m/s).",
                "zh": "平方阻力模型由 $mg = cv_t^2$ 给出终端速度。若 $m = 8\\,\\text{kg}$，$c = 0.2\\,\\text{kg/m}$，$g = 10\\,\\text{m/s}^2$，求 $v_t$（m/s）。"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20 m/s"
              ],
              "explanation": {
                "en": "$v_t = \\sqrt{mg/c} = \\sqrt{8(10)/0.2} = \\sqrt{400} = 20\\,\\text{m/s}$.",
                "zh": "$v_t = \\sqrt{mg/c} = \\sqrt{8(10)/0.2} = \\sqrt{400} = 20\\,\\text{m/s}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "work-energy-power",
      "title": "Unit 3: Work, Energy, and Power",
      "titleZh": "第三单元：功、能与功率",
      "lessons": [
        {
          "id": "work-and-energy",
          "title": "Work and the Work-Energy Theorem",
          "titleZh": "功与动能定理",
          "content": [
            {
              "type": "h2",
              "en": "Work as an Integral",
              "zh": "功作为积分"
            },
            {
              "type": "p",
              "en": "Work done by a force is the integral of force over displacement. For a constant force, $W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta$. For a variable force, we integrate:",
              "zh": "力做的功是力对位移的积分。对于恒力，$W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta$。对于变力，我们积分："
            },
            {
              "type": "math",
              "tex": "W = \\int_{x_i}^{x_f} \\vec{F}\\cdot d\\vec{x}"
            },
            {
              "type": "p",
              "en": "For a spring obeying Hooke’s law $F = -kx$, the work done by the spring from $0$ to $x$ is $W_{spring} = -\\int_0^x kx\\,dx = -\\tfrac{1}{2}kx^2$. The area under a force-position graph equals the work.",
              "zh": "对于服从胡克定律 $F = -kx$ 的弹簧，弹簧从 $0$ 到 $x$ 做的功为 $W_{spring} = -\\int_0^x kx\\,dx = -\\tfrac{1}{2}kx^2$。力-位置图下的面积等于功。"
            },
            {
              "type": "h3",
              "en": "The Work-Energy Theorem",
              "zh": "动能定理"
            },
            {
              "type": "p",
              "en": "The net work done on an object equals its change in kinetic energy, where $K = \\tfrac{1}{2}mv^2$:",
              "zh": "对物体做的净功等于其动能的变化，其中 $K = \\tfrac{1}{2}mv^2$："
            },
            {
              "type": "math",
              "tex": "W_{net} = \\Delta K = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2"
            },
            {
              "type": "p",
              "en": "Power is the rate of doing work: $P = \\frac{dW}{dt} = \\vec{F}\\cdot\\vec{v}$. Average power is $W/\\Delta t$.",
              "zh": "功率是做功的速率：$P = \\frac{dW}{dt} = \\vec{F}\\cdot\\vec{v}$。平均功率为 $W/\\Delta t$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: Only the component of force along the displacement does work. A force perpendicular to motion (like the normal force or centripetal force in uniform circular motion) does zero work. Watch the $\\cos\\theta$ factor.",
              "zh": "AP 考试提示：只有沿位移方向的力分量做功。垂直于运动方向的力（如匀速圆周运动中的法向力或向心力）不做功。注意 $\\cos\\theta$ 因子。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Work by a variable force",
                "zh": "例题 1：变力做功"
              },
              "problem": {
                "en": "A force $F(x) = 3x^2\\,\\text{N}$ acts on an object as it moves from $x = 0$ to $x = 2\\,\\text{m}$. Find the work done.",
                "zh": "力 $F(x) = 3x^2\\,\\text{N}$ 作用于物体，使其从 $x = 0$ 移动到 $x = 2\\,\\text{m}$。求所做的功。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Integrate the force over the displacement:",
                  "zh": "对位移积分力："
                },
                {
                  "type": "math",
                  "tex": "W = \\int_0^2 3x^2\\,dx = \\left[x^3\\right]_0^2 = 8\\,\\text{J}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Work-energy theorem",
                "zh": "例题 2：动能定理"
              },
              "problem": {
                "en": "A 2 kg block moving at $3\\,\\text{m/s}$ is pushed by a net force that does $16\\,\\text{J}$ of work. Find its final speed.",
                "zh": "一个 2 kg 的木块以 $3\\,\\text{m/s}$ 运动，被净力做了 $16\\,\\text{J}$ 的功。求末速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the work-energy theorem:",
                  "zh": "应用动能定理："
                },
                {
                  "type": "math",
                  "tex": "W_{net} = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2"
                },
                {
                  "type": "math",
                  "tex": "16 = \\tfrac{1}{2}(2)v_f^2 - \\tfrac{1}{2}(2)(3)^2 = v_f^2 - 9"
                },
                {
                  "type": "p",
                  "en": "So $v_f^2 = 25$ and $v_f = 5\\,\\text{m/s}$.",
                  "zh": "所以 $v_f^2 = 25$，$v_f = 5\\,\\text{m/s}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Work is most generally defined as:",
                "zh": "功最一般的定义是："
              },
              "choices": [
                "$\\frac{dF}{dx}$",
                "$\\int \\vec{F}\\cdot d\\vec{x}$",
                "$m\\vec{a}$",
                "$\\frac{1}{2}mv^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Work is the line integral of force over displacement, $W = \\int \\vec{F}\\cdot d\\vec{x}$.",
                "zh": "功是力对位移的线积分，$W = \\int \\vec{F}\\cdot d\\vec{x}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The net work done on an object equals its change in:",
                "zh": "对物体做的净功等于其什么的变化："
              },
              "choices": [
                "Velocity",
                "Momentum",
                "Kinetic energy",
                "Force"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the work-energy theorem, $W_{net} = \\Delta K$.",
                "zh": "由动能定理，$W_{net} = \\Delta K$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How much work does the centripetal force do on an object in uniform circular motion over one full revolution?",
                "zh": "在一整圈匀速圆周运动中，向心力对物体做多少功？"
              },
              "choices": [
                "$2\\pi r F$",
                "Positive and equal to $K$",
                "Negative",
                "Zero"
              ],
              "answer": 3,
              "explanation": {
                "en": "The centripetal force is always perpendicular to velocity, so it does zero work; speed and kinetic energy stay constant.",
                "zh": "向心力始终垂直于速度，故不做功；速率和动能保持不变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A force $F(x) = 4x\\,\\text{N}$ acts from $x = 0$ to $x = 3\\,\\text{m}$. Find the work done (in J).",
                "zh": "力 $F(x) = 4x\\,\\text{N}$ 从 $x = 0$ 作用到 $x = 3\\,\\text{m}$。求所做的功（J）。"
              },
              "answer": "18",
              "accept": [
                "18.0",
                "18 J"
              ],
              "explanation": {
                "en": "$W = \\int_0^3 4x\\,dx = [2x^2]_0^3 = 2(9) = 18\\,\\text{J}$.",
                "zh": "$W = \\int_0^3 4x\\,dx = [2x^2]_0^3 = 2(9) = 18\\,\\text{J}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 3 kg object accelerates from rest to $4\\,\\text{m/s}$. How much net work (in J) was done on it?",
                "zh": "一个 3 kg 物体从静止加速到 $4\\,\\text{m/s}$。对它做的净功（J）是多少？"
              },
              "answer": "24",
              "accept": [
                "24.0",
                "24 J"
              ],
              "explanation": {
                "en": "$W = \\Delta K = \\tfrac{1}{2}(3)(4^2) - 0 = 24\\,\\text{J}$.",
                "zh": "$W = \\Delta K = \\tfrac{1}{2}(3)(4^2) - 0 = 24\\,\\text{J}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A 1000 W motor lifts a load at constant velocity. If the load weighs 500 N, at what speed does it rise?",
                "zh": "一台 1000 W 的电机匀速提升负载。若负载重 500 N，它上升的速率是多少？"
              },
              "choices": [
                "$2\\,\\text{m/s}$",
                "$0.5\\,\\text{m/s}$",
                "$500\\,\\text{m/s}$",
                "$5\\,\\text{m/s}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$P = Fv \\Rightarrow v = P/F = 1000/500 = 2\\,\\text{m/s}$.",
                "zh": "$P = Fv \\Rightarrow v = P/F = 1000/500 = 2\\,\\text{m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A spring with $k = 200\\,\\text{N/m}$ is compressed $0.1\\,\\text{m}$. How much elastic potential energy (in J) is stored?",
                "zh": "一个 $k = 200\\,\\text{N/m}$ 的弹簧被压缩 $0.1\\,\\text{m}$。储存了多少弹性势能（J）？"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "1 J"
              ],
              "explanation": {
                "en": "$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.1)^2 = \\tfrac{1}{2}(200)(0.01) = 1\\,\\text{J}$.",
                "zh": "$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.1)^2 = 1\\,\\text{J}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The work done by a spring force $F = -kx$ as the spring stretches from $0$ to $x$ is:",
                "zh": "弹簧力 $F = -kx$ 在弹簧从 $0$ 拉伸到 $x$ 过程中做的功为："
              },
              "choices": [
                "$-kx$",
                "$+\\tfrac{1}{2}kx^2$",
                "$-\\tfrac{1}{2}kx^2$",
                "$kx^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$W = \\int_0^x (-kx)\\,dx = -\\tfrac{1}{2}kx^2$; the spring does negative work as it is stretched.",
                "zh": "$W = \\int_0^x (-kx)\\,dx = -\\tfrac{1}{2}kx^2$；弹簧被拉伸时做负功。"
              }
            }
          ]
        },
        {
          "id": "potential-energy-conservation",
          "title": "Potential Energy & Conservation",
          "titleZh": "势能与守恒",
          "content": [
            {
              "type": "h2",
              "en": "Conservative Forces and Potential Energy",
              "zh": "保守力与势能"
            },
            {
              "type": "p",
              "en": "A conservative force (gravity, springs, electrostatics) has a potential energy function $U$ such that the force is the negative gradient of $U$. In one dimension:",
              "zh": "保守力（重力、弹簧力、静电力）有一个势能函数 $U$，使得力是 $U$ 的负梯度。在一维中："
            },
            {
              "type": "math",
              "tex": "F_x = -\\frac{dU}{dx}, \\qquad \\Delta U = -\\int \\vec{F}\\cdot d\\vec{x}"
            },
            {
              "type": "p",
              "en": "Conversely, potential energy is found by integrating force. Gravitational PE near Earth is $U = mgh$; spring PE is $U = \\tfrac{1}{2}kx^2$; universal gravitational PE is $U = -\\frac{Gm_1 m_2}{r}$.",
              "zh": "反过来，势能通过对力积分得到。地表附近的重力势能为 $U = mgh$；弹簧势能为 $U = \\tfrac{1}{2}kx^2$；万有引力势能为 $U = -\\frac{Gm_1 m_2}{r}$。"
            },
            {
              "type": "h3",
              "en": "Conservation of Mechanical Energy",
              "zh": "机械能守恒"
            },
            {
              "type": "p",
              "en": "When only conservative forces do work, mechanical energy $E = K + U$ is conserved. If non-conservative forces (like friction) act, the change in mechanical energy equals the work they do.",
              "zh": "当只有保守力做功时，机械能 $E = K + U$ 守恒。若有非保守力（如摩擦）作用，机械能的变化等于它们所做的功。"
            },
            {
              "type": "math",
              "tex": "K_i + U_i = K_f + U_f \\quad (\\text{no friction})"
            },
            {
              "type": "h3",
              "en": "Energy Diagrams",
              "zh": "能量图"
            },
            {
              "type": "p",
              "en": "A plot of $U(x)$ reveals the dynamics. Minima of $U$ are stable equilibria; the force $F = -dU/dx$ points toward lower potential energy. Turning points occur where $E = U(x)$, i.e. where $K = 0$.",
              "zh": "$U(x)$ 的图像揭示了动力学。$U$ 的极小值是稳定平衡；力 $F = -dU/dx$ 指向势能较低处。折返点出现在 $E = U(x)$ 处，即 $K = 0$ 处。"
            },
            {
              "type": "note",
              "en": "Common mistake: The relation $F = -dU/dx$ means a positive slope of $U$ gives a force in the negative direction. At a potential energy minimum the slope is zero, so the net force is zero — that is why minima are equilibria. Do not forget the negative sign.",
              "zh": "常见错误：关系 $F = -dU/dx$ 表示 $U$ 的正斜率给出负方向的力。在势能极小处斜率为零，故净力为零——这就是极小值是平衡点的原因。不要漏掉负号。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Force from potential energy",
                "zh": "例题 1：从势能求力"
              },
              "problem": {
                "en": "A particle has potential energy $U(x) = 2x^3 - 6x\\,\\text{J}$. Find the force at $x = 2\\,\\text{m}$ and locate the equilibrium points.",
                "zh": "一质点势能为 $U(x) = 2x^3 - 6x\\,\\text{J}$。求 $x = 2\\,\\text{m}$ 处的力并找出平衡点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The force is the negative derivative:",
                  "zh": "力是负导数："
                },
                {
                  "type": "math",
                  "tex": "F = -\\frac{dU}{dx} = -(6x^2 - 6) = 6 - 6x^2"
                },
                {
                  "type": "p",
                  "en": "At $x = 2$: $F = 6 - 24 = -18\\,\\text{N}$. Equilibria occur where $F = 0$: $6x^2 = 6$, so $x = \\pm 1\\,\\text{m}$.",
                  "zh": "当 $x = 2$：$F = 6 - 24 = -18\\,\\text{N}$。平衡点在 $F = 0$ 处：$6x^2 = 6$，故 $x = \\pm 1\\,\\text{m}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Conservation of energy",
                "zh": "例题 2：能量守恒"
              },
              "problem": {
                "en": "A ball is released from rest at height $h = 5\\,\\text{m}$. Find its speed at the bottom (frictionless). Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "一个球从高度 $h = 5\\,\\text{m}$ 静止释放。求落到底部的速率（无摩擦）。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set initial PE equal to final KE:",
                  "zh": "令初始势能等于末动能："
                },
                {
                  "type": "math",
                  "tex": "mgh = \\tfrac{1}{2}mv^2 \\;\\Rightarrow\\; v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = 10\\,\\text{m/s}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The relationship between a conservative force and potential energy is:",
                "zh": "保守力与势能的关系是："
              },
              "choices": [
                "$F_x = \\frac{dU}{dx}$",
                "$F_x = -\\frac{dU}{dx}$",
                "$U = F x$",
                "$F_x = -U$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A conservative force equals the negative gradient of potential energy, $F_x = -dU/dx$.",
                "zh": "保守力等于势能的负梯度，$F_x = -dU/dx$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is NOT a conservative force?",
                "zh": "下列哪个不是保守力？"
              },
              "choices": [
                "Spring force",
                "Gravity",
                "Kinetic friction",
                "Electrostatic force"
              ],
              "answer": 2,
              "explanation": {
                "en": "Kinetic friction dissipates energy and depends on path, so it is non-conservative; the others have well-defined potential energy functions.",
                "zh": "动摩擦力耗散能量且与路径有关，故为非保守力；其余的都有明确的势能函数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At a stable equilibrium point on a $U(x)$ curve, the graph has a:",
                "zh": "在 $U(x)$ 曲线的稳定平衡点上，图像具有："
              },
              "choices": [
                "Vertical asymptote",
                "Local maximum",
                "Constant positive slope",
                "Local minimum"
              ],
              "answer": 3,
              "explanation": {
                "en": "A local minimum of $U$ gives zero slope (zero force) and a restoring force for small displacements — a stable equilibrium.",
                "zh": "$U$ 的局部极小值给出零斜率（零力），且对小位移有回复力——即稳定平衡。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 2 kg object is dropped from $20\\,\\text{m}$. Using energy conservation, find its speed (in m/s) at the ground. Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "一个 2 kg 物体从 $20\\,\\text{m}$ 落下。用能量守恒求落地速率（m/s）。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20 m/s"
              ],
              "explanation": {
                "en": "$v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20\\,\\text{m/s}$.",
                "zh": "$v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20\\,\\text{m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $U(x) = 3x^2\\,\\text{J}$, find the magnitude of the force (in N) at $x = 4\\,\\text{m}$.",
                "zh": "已知 $U(x) = 3x^2\\,\\text{J}$，求 $x = 4\\,\\text{m}$ 处力的大小（N）。"
              },
              "answer": "24",
              "accept": [
                "24.0",
                "24 N"
              ],
              "explanation": {
                "en": "$F = -dU/dx = -6x$. At $x = 4$, $F = -24\\,\\text{N}$, magnitude $24\\,\\text{N}$.",
                "zh": "$F = -dU/dx = -6x$。当 $x = 4$，$F = -24\\,\\text{N}$，大小为 $24\\,\\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A pendulum swings down from a height where it had $10\\,\\text{J}$ of PE. At the lowest point (frictionless), its KE is:",
                "zh": "一个单摆从具有 $10\\,\\text{J}$ 势能的高度摆下。在最低点（无摩擦），它的动能是："
              },
              "choices": [
                "10 J",
                "5 J",
                "0 J",
                "20 J"
              ],
              "answer": 0,
              "explanation": {
                "en": "With no friction, all PE converts to KE: $K = 10\\,\\text{J}$.",
                "zh": "无摩擦时，全部势能转化为动能：$K = 10\\,\\text{J}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A block slides down a rough incline, starting with $50\\,\\text{J}$ of PE and arriving with $30\\,\\text{J}$ of KE. How much energy (in J) was lost to friction?",
                "zh": "一木块沿粗糙斜面下滑，初始有 $50\\,\\text{J}$ 势能，到达时有 $30\\,\\text{J}$ 动能。摩擦损耗了多少能量（J）？"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20 J"
              ],
              "explanation": {
                "en": "Energy lost = $U_i - K_f = 50 - 30 = 20\\,\\text{J}$ (converted to heat by friction).",
                "zh": "损耗能量 = $U_i - K_f = 50 - 30 = 20\\,\\text{J}$（被摩擦转化为热）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The universal gravitational potential energy between two masses is $U = -\\frac{Gm_1 m_2}{r}$. As $r$ increases, $U$:",
                "zh": "两个质量之间的万有引力势能为 $U = -\\frac{Gm_1 m_2}{r}$。当 $r$ 增大时，$U$："
              },
              "choices": [
                "Stays constant",
                "Decreases without bound",
                "Increases toward zero",
                "Becomes more negative"
              ],
              "answer": 2,
              "explanation": {
                "en": "As $r \\to \\infty$, $U \\to 0^-$; since $U$ is negative and $\\propto -1/r$, increasing $r$ makes $U$ less negative, i.e. it increases toward zero.",
                "zh": "当 $r \\to \\infty$，$U \\to 0^-$；由于 $U$ 为负且 $\\propto -1/r$，增大 $r$ 使 $U$ 变得不那么负，即趋向零。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "linear-momentum",
      "title": "Unit 4: Linear Momentum",
      "titleZh": "第四单元：线动量",
      "lessons": [
        {
          "id": "momentum-collisions",
          "title": "Momentum, Center of Mass & Collisions",
          "titleZh": "动量、质心与碰撞",
          "content": [
            {
              "type": "h2",
              "en": "Impulse and Momentum",
              "zh": "冲量与动量"
            },
            {
              "type": "p",
              "en": "Momentum is $\\vec{p} = m\\vec{v}$. The impulse-momentum theorem states that the impulse (integral of force over time) equals the change in momentum:",
              "zh": "动量为 $\\vec{p} = m\\vec{v}$。冲量-动量定理指出，冲量（力对时间的积分）等于动量的变化："
            },
            {
              "type": "math",
              "tex": "\\vec{J} = \\int \\vec{F}\\,dt = \\Delta\\vec{p}"
            },
            {
              "type": "p",
              "en": "The area under a force-time graph is the impulse. For a system with no external net force, total momentum is conserved.",
              "zh": "力-时间图下的面积是冲量。对于没有外部净力的系统，总动量守恒。"
            },
            {
              "type": "h3",
              "en": "Center of Mass",
              "zh": "质心"
            },
            {
              "type": "p",
              "en": "The center of mass of a system is the mass-weighted average position. For discrete masses and continuous bodies:",
              "zh": "系统的质心是按质量加权的平均位置。对于离散质量和连续物体："
            },
            {
              "type": "math",
              "tex": "x_{cm} = \\frac{\\sum m_i x_i}{\\sum m_i} = \\frac{1}{M}\\int x\\,dm"
            },
            {
              "type": "p",
              "en": "The center of mass moves as if all mass were concentrated there and all external forces acted on it: $\\vec{F}_{ext} = M\\vec{a}_{cm}$.",
              "zh": "质心的运动就好像全部质量都集中在那里、所有外力都作用于它：$\\vec{F}_{ext} = M\\vec{a}_{cm}$。"
            },
            {
              "type": "h3",
              "en": "Collisions",
              "zh": "碰撞"
            },
            {
              "type": "p",
              "en": "In all collisions momentum is conserved. In elastic collisions kinetic energy is also conserved; in inelastic collisions it is not. In a perfectly inelastic collision the objects stick together.",
              "zh": "在所有碰撞中动量守恒。在弹性碰撞中动能也守恒；在非弹性碰撞中动能不守恒。在完全非弹性碰撞中物体粘在一起。"
            },
            {
              "type": "note",
              "en": "AP exam tip: Momentum is conserved in EVERY collision (no external net force), but kinetic energy is conserved ONLY in elastic collisions. When two objects stick together, always use momentum conservation first; do not assume KE is conserved.",
              "zh": "AP 考试提示：动量在每次碰撞中都守恒（无外部净力），但动能仅在弹性碰撞中守恒。当两物体粘在一起时，务必先用动量守恒；不要假设动能守恒。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Perfectly inelastic collision",
                "zh": "例题 1：完全非弹性碰撞"
              },
              "problem": {
                "en": "A 2 kg cart moving at $3\\,\\text{m/s}$ collides and sticks to a 1 kg cart at rest. Find their common final velocity.",
                "zh": "一个 2 kg 小车以 $3\\,\\text{m/s}$ 运动，与静止的 1 kg 小车碰撞并粘在一起。求它们共同的末速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Conserve momentum:",
                  "zh": "动量守恒："
                },
                {
                  "type": "math",
                  "tex": "m_1 v_1 = (m_1 + m_2)v_f"
                },
                {
                  "type": "math",
                  "tex": "v_f = \\frac{2(3)}{2+1} = 2\\,\\text{m/s}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Impulse from a graph",
                "zh": "例题 2：由图求冲量"
              },
              "problem": {
                "en": "A force on a 0.5 kg ball rises linearly from 0 to 20 N over $0.4\\,\\text{s}$. Find the impulse and the change in the ball’s velocity.",
                "zh": "作用在 0.5 kg 球上的力在 $0.4\\,\\text{s}$ 内从 0 线性增加到 20 N。求冲量和球速度的变化。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Impulse is the area under the force-time graph, a triangle:",
                  "zh": "冲量是力-时间图下的面积，一个三角形："
                },
                {
                  "type": "math",
                  "tex": "J = \\tfrac{1}{2}(0.4)(20) = 4\\,\\text{N·s}"
                },
                {
                  "type": "p",
                  "en": "Then $\\Delta v = J/m = 4/0.5 = 8\\,\\text{m/s}$.",
                  "zh": "于是 $\\Delta v = J/m = 4/0.5 = 8\\,\\text{m/s}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The impulse-momentum theorem states that impulse equals:",
                "zh": "冲量-动量定理指出冲量等于："
              },
              "choices": [
                "Change in kinetic energy",
                "Change in momentum",
                "Force times distance",
                "Mass times acceleration"
              ],
              "answer": 1,
              "explanation": {
                "en": "Impulse $\\vec{J} = \\int \\vec{F}\\,dt = \\Delta \\vec{p}$, the change in momentum.",
                "zh": "冲量 $\\vec{J} = \\int \\vec{F}\\,dt = \\Delta \\vec{p}$，即动量的变化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In which type of collision is kinetic energy conserved?",
                "zh": "在哪种碰撞中动能守恒？"
              },
              "choices": [
                "Inelastic",
                "Perfectly inelastic",
                "Elastic",
                "All collisions"
              ],
              "answer": 2,
              "explanation": {
                "en": "Only elastic collisions conserve kinetic energy; momentum is conserved in all of them.",
                "zh": "只有弹性碰撞守恒动能；动量在所有碰撞中都守恒。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two equal masses at positions $x = 0$ and $x = 6\\,\\text{m}$ have a center of mass at:",
                "zh": "两个相等质量分别位于 $x = 0$ 和 $x = 6\\,\\text{m}$，质心位于："
              },
              "choices": [
                "$12\\,\\text{m}$",
                "$6\\,\\text{m}$",
                "$0\\,\\text{m}$",
                "$3\\,\\text{m}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "For equal masses, $x_{cm}$ is the midpoint: $(0+6)/2 = 3\\,\\text{m}$.",
                "zh": "对于相等质量，$x_{cm}$ 是中点：$(0+6)/2 = 3\\,\\text{m}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 4 kg object moving at $5\\,\\text{m/s}$ has what momentum (in kg·m/s)?",
                "zh": "一个 4 kg 物体以 $5\\,\\text{m/s}$ 运动，动量（kg·m/s）是多少？"
              },
              "answer": "20",
              "accept": [
                "20.0"
              ],
              "explanation": {
                "en": "$p = mv = 4 \\times 5 = 20\\,\\text{kg·m/s}$.",
                "zh": "$p = mv = 4 \\times 5 = 20\\,\\text{kg·m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 3 kg cart at $4\\,\\text{m/s}$ sticks to a 1 kg cart at rest. Find their common speed (in m/s).",
                "zh": "一个 3 kg 小车以 $4\\,\\text{m/s}$ 与静止的 1 kg 小车粘在一起。求共同速率（m/s）。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "3 m/s"
              ],
              "explanation": {
                "en": "$v_f = \\frac{3(4)}{3+1} = \\frac{12}{4} = 3\\,\\text{m/s}$.",
                "zh": "$v_f = \\frac{3(4)}{3+1} = \\frac{12}{4} = 3\\,\\text{m/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A 0.2 kg ball hits a wall at $10\\,\\text{m/s}$ and bounces back at $10\\,\\text{m/s}$. The magnitude of the impulse on the ball is:",
                "zh": "一个 0.2 kg 的球以 $10\\,\\text{m/s}$ 撞墙并以 $10\\,\\text{m/s}$ 弹回。球所受冲量的大小是："
              },
              "choices": [
                "$4\\,\\text{N·s}$",
                "$2\\,\\text{N·s}$",
                "$0\\,\\text{N·s}$",
                "$20\\,\\text{N·s}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\Delta p = m(v_f - v_i) = 0.2(-10 - 10) = -4$; magnitude $4\\,\\text{N·s}$. The velocity reverses, so the change is $2mv$.",
                "zh": "$\\Delta p = m(v_f - v_i) = 0.2(-10 - 10) = -4$；大小为 $4\\,\\text{N·s}$。速度反向，故变化为 $2mv$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An impulse of $12\\,\\text{N·s}$ is applied to a 3 kg object initially at rest. Find its final speed (in m/s).",
                "zh": "对一个初始静止的 3 kg 物体施加 $12\\,\\text{N·s}$ 的冲量。求末速率（m/s）。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "4 m/s"
              ],
              "explanation": {
                "en": "$J = \\Delta p = mv_f \\Rightarrow v_f = 12/3 = 4\\,\\text{m/s}$.",
                "zh": "$J = \\Delta p = mv_f \\Rightarrow v_f = 12/3 = 4\\,\\text{m/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A cannon fires a shell. The internal forces are the explosion. The total momentum of the cannon-plus-shell system:",
                "zh": "一门大炮发射炮弹。内力是爆炸力。大炮加炮弹系统的总动量："
              },
              "choices": [
                "Increases backward",
                "Increases forward",
                "Stays the same (conserved)",
                "Doubles"
              ],
              "answer": 2,
              "explanation": {
                "en": "The explosion is an internal force, so the system’s total momentum is conserved (remains zero if it started at rest): the cannon recoils backward.",
                "zh": "爆炸是内力，故系统总动量守恒（若初始静止则保持为零）：大炮向后反冲。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "torque-rotational-dynamics",
      "title": "Unit 5: Torque and Rotational Dynamics",
      "titleZh": "第五单元：力矩与转动动力学",
      "lessons": [
        {
          "id": "rotational-kinematics-inertia",
          "title": "Rotational Kinematics and Moment of Inertia",
          "titleZh": "转动运动学与转动惯量",
          "content": [
            {
              "type": "h2",
              "en": "Angular Kinematics with Calculus",
              "zh": "用微积分描述角运动"
            },
            {
              "type": "p",
              "en": "A rigid body rotating about a fixed axis is described by its angular position $\\theta(t)$, measured in radians. Exactly as in linear motion, the angular velocity is the time derivative of angular position, and the angular acceleration is the time derivative of angular velocity.",
              "zh": "绕固定轴转动的刚体由角位置 $\\theta(t)$ 描述，单位为弧度。与直线运动完全类似，角速度是角位置对时间的导数，角加速度是角速度对时间的导数。"
            },
            {
              "type": "math",
              "tex": "\\omega = \\frac{d\\theta}{dt}, \\qquad \\alpha = \\frac{d\\omega}{dt} = \\frac{d^2\\theta}{dt^2}"
            },
            {
              "type": "p",
              "en": "To go backward we integrate, with constants fixed by initial conditions. If $\\alpha$ depends on time, you must integrate — the constant-$\\alpha$ formulas like $\\theta = \\theta_0 + \\omega_0 t + \\tfrac{1}{2}\\alpha t^2$ do not apply. The chain rule also gives the time-free form $\\alpha = \\omega\\,\\frac{d\\omega}{d\\theta}$, useful when $\\alpha$ is a function of angle.",
              "zh": "逆向运算就是积分，积分常数由初始条件确定。若 $\\alpha$ 随时间变化，必须积分——匀角加速公式如 $\\theta = \\theta_0 + \\omega_0 t + \\tfrac{1}{2}\\alpha t^2$ 不再适用。链式法则还给出消去时间的形式 $\\alpha = \\omega\\,\\frac{d\\omega}{d\\theta}$，当 $\\alpha$ 是角度的函数时很有用。"
            },
            {
              "type": "math",
              "tex": "\\omega(t) = \\omega_0 + \\int_0^t \\alpha\\,dt, \\qquad \\theta(t) = \\theta_0 + \\int_0^t \\omega\\,dt"
            },
            {
              "type": "h3",
              "en": "The Rigid-Body Constraint: $v = r\\omega$",
              "zh": "刚体约束：$v = r\\omega$"
            },
            {
              "type": "p",
              "en": "In a rigid body every point sweeps the same angle in the same time, so all points share the same $\\omega$ and $\\alpha$. A point at distance $r$ from the axis travels arc length $s = r\\theta$; differentiating gives its speed and tangential acceleration. Because the point also moves in a circle, it has a centripetal acceleration directed toward the axis.",
              "zh": "刚体上每一点在相同时间内扫过相同的角度，因此所有点具有相同的 $\\omega$ 和 $\\alpha$。距轴 $r$ 处的点走过弧长 $s = r\\theta$；求导得到它的速率和切向加速度。由于该点还在做圆周运动，它有指向轴的向心加速度。"
            },
            {
              "type": "math",
              "tex": "v = r\\omega, \\qquad a_t = r\\alpha, \\qquad a_c = \\omega^2 r = \\frac{v^2}{r}"
            },
            {
              "type": "h3",
              "en": "Moment of Inertia: $I = \\int r^2\\,dm$",
              "zh": "转动惯量：$I = \\int r^2\\,dm$"
            },
            {
              "type": "p",
              "en": "The moment of inertia measures how hard a body is to spin up. For point masses $I = \\sum m_i r_i^2$; for a continuous body we slice it into mass elements $dm$ and integrate. Mass far from the axis counts much more because of the $r^2$ weighting. The strategy is always the same: express $dm$ using a density (linear $\\lambda = M/L$, or surface $\\sigma = M/A$), write $r^2\\,dm$, and integrate over the body.",
              "zh": "转动惯量衡量物体被转动起来的难易程度。对质点系 $I = \\sum m_i r_i^2$；对连续体则把它切成质量元 $dm$ 再积分。由于 $r^2$ 的权重，离轴远的质量贡献大得多。策略始终相同：用密度（线密度 $\\lambda = M/L$ 或面密度 $\\sigma = M/A$）表示 $dm$，写出 $r^2\\,dm$，再对整个物体积分。"
            },
            {
              "type": "math",
              "tex": "I = \\int r^2\\,dm"
            },
            {
              "type": "p",
              "en": "Uniform rod of mass $M$, length $L$, axis through its center, perpendicular to the rod: take $dm = \\lambda\\,dx = \\frac{M}{L}dx$ and integrate $x^2$ from $-L/2$ to $L/2$:",
              "zh": "质量 $M$、长 $L$ 的均匀细杆，转轴过中心且垂直于杆：取 $dm = \\lambda\\,dx = \\frac{M}{L}dx$，把 $x^2$ 从 $-L/2$ 积到 $L/2$："
            },
            {
              "type": "math",
              "tex": "I_{cm} = \\int_{-L/2}^{L/2} x^2 \\frac{M}{L}\\,dx = \\frac{M}{L}\\left[\\frac{x^3}{3}\\right]_{-L/2}^{L/2} = \\frac{1}{12}ML^2"
            },
            {
              "type": "p",
              "en": "Same rod, axis through one end: the limits become $0$ to $L$, giving $I_{end} = \\frac{M}{L}\\cdot\\frac{L^3}{3} = \\frac{1}{3}ML^2$. A thin hoop of radius $R$ about its symmetry axis is immediate — all mass sits at $r = R$, so $I = MR^2$. For a uniform disk, slice it into thin rings: a ring of radius $r$ and width $dr$ has $dm = \\sigma\\,(2\\pi r\\,dr)$ with $\\sigma = \\frac{M}{\\pi R^2}$:",
              "zh": "同一根杆，转轴过一端：积分限变为 $0$ 到 $L$，得 $I_{end} = \\frac{M}{L}\\cdot\\frac{L^3}{3} = \\frac{1}{3}ML^2$。半径 $R$ 的细圆环绕其对称轴的结果是显然的——所有质量都在 $r = R$ 处，故 $I = MR^2$。对均匀圆盘，把它切成细圆环：半径 $r$、宽 $dr$ 的圆环有 $dm = \\sigma\\,(2\\pi r\\,dr)$，其中 $\\sigma = \\frac{M}{\\pi R^2}$："
            },
            {
              "type": "math",
              "tex": "I_{disk} = \\int_0^R r^2\\,\\frac{2M}{R^2}r\\,dr = \\frac{2M}{R^2}\\cdot\\frac{R^4}{4} = \\frac{1}{2}MR^2"
            },
            {
              "type": "h3",
              "en": "The Parallel Axis Theorem",
              "zh": "平行轴定理"
            },
            {
              "type": "p",
              "en": "If $I_{cm}$ is the moment of inertia about an axis through the center of mass, then about any parallel axis a distance $d$ away, $I = I_{cm} + Md^2$. Proof sketch: place the origin at the center of mass with the new axis shifted by $d$ along $x$. Then $I = \\int\\left[(x+d)^2 + y^2\\right]dm = \\int (x^2+y^2)\\,dm + 2d\\int x\\,dm + d^2\\int dm$. The middle term vanishes because $\\int x\\,dm = 0$ about the center of mass, leaving $I_{cm} + Md^2$.",
              "zh": "设 $I_{cm}$ 是绕过质心的轴的转动惯量，则绕与之平行、相距 $d$ 的任意轴，$I = I_{cm} + Md^2$。证明思路：把原点放在质心，新轴沿 $x$ 方向平移 $d$。于是 $I = \\int\\left[(x+d)^2 + y^2\\right]dm = \\int (x^2+y^2)\\,dm + 2d\\int x\\,dm + d^2\\int dm$。因为绕质心 $\\int x\\,dm = 0$，中间项为零，剩下 $I_{cm} + Md^2$。"
            },
            {
              "type": "math",
              "tex": "I = I_{cm} + Md^2"
            },
            {
              "type": "p",
              "en": "Check it on the rod: $I_{end} = \\frac{1}{12}ML^2 + M\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{3}ML^2$, matching the direct integral. For composite objects, moments of inertia about the SAME axis simply add: shift each piece to the common axis with the parallel axis theorem, then sum.",
              "zh": "用杆来检验：$I_{end} = \\frac{1}{12}ML^2 + M\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{3}ML^2$，与直接积分一致。对组合体，绕同一轴的转动惯量可以直接相加：用平行轴定理把每一部分移到公共轴上，再求和。"
            },
            {
              "type": "note",
              "en": "AP exam tip: The parallel axis theorem only works FROM a center-of-mass axis. To relate two axes neither of which passes through the CM, go through the CM in two steps. Also note $I = I_{cm} + Md^2 \\ge I_{cm}$: of all parallel axes, the one through the center of mass always has the minimum moment of inertia.",
              "zh": "AP 考试提示：平行轴定理只能从过质心的轴出发使用。若两条轴都不过质心，必须经由质心分两步计算。另外注意 $I = I_{cm} + Md^2 \\ge I_{cm}$：在所有平行轴中，过质心的轴的转动惯量总是最小的。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Time-varying angular acceleration",
                "zh": "例题 1：随时间变化的角加速度"
              },
              "problem": {
                "en": "A flywheel starts from rest at $\\theta_0 = 0$ with angular acceleration $\\alpha(t) = 6t\\,\\text{rad/s}^3 \\cdot t$... precisely, $\\alpha(t) = 6t\\,\\text{rad/s}^2$ (with $t$ in seconds). Find $\\omega$ and $\\theta$ at $t = 2\\,\\text{s}$.",
                "zh": "一飞轮从静止出发，$\\theta_0 = 0$，角加速度为 $\\alpha(t) = 6t\\,\\text{rad/s}^2$（$t$ 以秒计）。求 $t = 2\\,\\text{s}$ 时的 $\\omega$ 与 $\\theta$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The acceleration is not constant, so integrate. With $\\omega_0 = 0$:",
                  "zh": "角加速度不是常数，必须积分。代入 $\\omega_0 = 0$："
                },
                {
                  "type": "math",
                  "tex": "\\omega(t) = \\int_0^t 6t\\,dt = 3t^2 \\;\\Rightarrow\\; \\omega(2) = 12\\,\\text{rad/s}"
                },
                {
                  "type": "p",
                  "en": "Integrate again with $\\theta_0 = 0$:",
                  "zh": "再积分一次，代入 $\\theta_0 = 0$："
                },
                {
                  "type": "math",
                  "tex": "\\theta(t) = \\int_0^t 3t^2\\,dt = t^3 \\;\\Rightarrow\\; \\theta(2) = 8\\,\\text{rad}"
                },
                {
                  "type": "p",
                  "en": "Using $\\theta = \\tfrac{1}{2}\\alpha t^2$ with $\\alpha(2) = 12\\,\\text{rad/s}^2$ would give the wrong answer ($24\\,\\text{rad}$) — those formulas require constant $\\alpha$.",
                  "zh": "若用 $\\theta = \\tfrac{1}{2}\\alpha t^2$ 并代入 $\\alpha(2) = 12\\,\\text{rad/s}^2$，会得到错误答案（$24\\,\\text{rad}$）——那些公式要求 $\\alpha$ 为常数。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Composite object about a pivot",
                "zh": "例题 2：组合体绕支点的转动惯量"
              },
              "problem": {
                "en": "A uniform rod of mass $M = 6\\,\\text{kg}$ and length $L = 2\\,\\text{m}$ is pivoted about a perpendicular axis through one end. A small $3\\,\\text{kg}$ ball (treat as a point mass) is attached to the far end. Find the total moment of inertia about the pivot.",
                "zh": "质量 $M = 6\\,\\text{kg}$、长 $L = 2\\,\\text{m}$ 的均匀细杆绕过一端的垂直轴转动。远端固定一个 $3\\,\\text{kg}$ 的小球（视为质点）。求整体绕支点的转动惯量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Moments of inertia about the same axis add. The rod about its end: $I_{rod} = \\tfrac{1}{3}ML^2 = \\tfrac{1}{3}(6)(2)^2 = 8\\,\\text{kg}\\cdot\\text{m}^2$ (equivalently $\\tfrac{1}{12}ML^2 + M(L/2)^2$ by the parallel axis theorem).",
                  "zh": "绕同一轴的转动惯量可以相加。杆绕端点：$I_{rod} = \\tfrac{1}{3}ML^2 = \\tfrac{1}{3}(6)(2)^2 = 8\\,\\text{kg}\\cdot\\text{m}^2$（也可由平行轴定理 $\\tfrac{1}{12}ML^2 + M(L/2)^2$ 得到）。"
                },
                {
                  "type": "p",
                  "en": "The point mass at distance $L$: $I_{ball} = mL^2 = 3(2)^2 = 12\\,\\text{kg}\\cdot\\text{m}^2$.",
                  "zh": "距轴 $L$ 处的质点：$I_{ball} = mL^2 = 3(2)^2 = 12\\,\\text{kg}\\cdot\\text{m}^2$。"
                },
                {
                  "type": "math",
                  "tex": "I_{total} = 8 + 12 = 20\\,\\text{kg}\\cdot\\text{m}^2"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A wheel has angular position $\\theta(t) = 2t^3 - 3t^2$ (rad, $t$ in s). What is its angular velocity at $t = 2\\,\\text{s}$?",
                "zh": "一轮的角位置为 $\\theta(t) = 2t^3 - 3t^2$（弧度，$t$ 以秒计）。$t = 2\\,\\text{s}$ 时的角速度是多少？"
              },
              "choices": [
                "$24\\,\\text{rad/s}$",
                "$12\\,\\text{rad/s}$",
                "$4\\,\\text{rad/s}$",
                "$18\\,\\text{rad/s}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\omega = d\\theta/dt = 6t^2 - 6t$. At $t = 2$: $\\omega = 24 - 12 = 12\\,\\text{rad/s}$. Choosing $24\\,\\text{rad/s}$ comes from differentiating only the first term and forgetting the $-6t$.",
                "zh": "$\\omega = d\\theta/dt = 6t^2 - 6t$。当 $t = 2$：$\\omega = 24 - 12 = 12\\,\\text{rad/s}$。选 $24\\,\\text{rad/s}$ 的错误在于只对第一项求导，漏掉了 $-6t$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A thin hoop, a uniform disk, a uniform solid sphere, and a point mass located ON the axis all have the same mass $M$; the hoop, disk, and sphere have the same radius $R$. About their common central axis, which has the LARGEST moment of inertia?",
                "zh": "一个细圆环、一个均匀圆盘、一个均匀实心球和一个位于轴上的质点质量都为 $M$；圆环、圆盘和球半径都为 $R$。绕公共中心轴，哪个的转动惯量最大？"
              },
              "choices": [
                "The solid sphere",
                "The uniform disk",
                "The thin hoop",
                "The point mass on the axis"
              ],
              "answer": 2,
              "explanation": {
                "en": "Because of the $r^2$ weighting in $I = \\int r^2\\,dm$, the hoop ($I = MR^2$, all mass at $r = R$) beats the disk ($\\tfrac{1}{2}MR^2$) and sphere ($\\tfrac{2}{5}MR^2$); the on-axis point mass has $I = 0$. The disk is tempting because it \"fills\" the circle, but its mass is spread at radii smaller than $R$.",
                "zh": "由于 $I = \\int r^2\\,dm$ 中 $r^2$ 的权重，圆环（$I = MR^2$，所有质量都在 $r = R$）大于圆盘（$\\tfrac{1}{2}MR^2$）和球（$\\tfrac{2}{5}MR^2$）；轴上的质点 $I = 0$。圆盘看似\"填满\"了圆而容易被误选，但它的质量分布在小于 $R$ 的半径上。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform disk has mass $M = 4\\,\\text{kg}$ and radius $R = 0.5\\,\\text{m}$. Compute its moment of inertia about its central symmetry axis, in $\\text{kg}\\cdot\\text{m}^2$. Give a decimal.",
                "zh": "一均匀圆盘质量 $M = 4\\,\\text{kg}$，半径 $R = 0.5\\,\\text{m}$。求它绕中心对称轴的转动惯量（$\\text{kg}\\cdot\\text{m}^2$）。请填一个小数。"
              },
              "answer": "0.5",
              "accept": [
                "0.50",
                ".5",
                "1/2"
              ],
              "explanation": {
                "en": "$I = \\tfrac{1}{2}MR^2 = \\tfrac{1}{2}(4)(0.5)^2 = \\tfrac{1}{2}(4)(0.25) = 0.5\\,\\text{kg}\\cdot\\text{m}^2$.",
                "zh": "$I = \\tfrac{1}{2}MR^2 = \\tfrac{1}{2}(4)(0.5)^2 = \\tfrac{1}{2}(4)(0.25) = 0.5\\,\\text{kg}\\cdot\\text{m}^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A uniform rod (mass $M$, length $L$) has $I_{cm} = \\tfrac{1}{12}ML^2$ about a perpendicular axis through its center. Using the parallel axis theorem, its moment of inertia about a parallel axis through one END is",
                "zh": "均匀细杆（质量 $M$，长 $L$）绕过中心的垂直轴有 $I_{cm} = \\tfrac{1}{12}ML^2$。由平行轴定理，它绕过一端的平行轴的转动惯量是"
              },
              "choices": [
                "$\\frac{1}{12}ML^2 + ML^2$",
                "$\\frac{1}{6}ML^2$",
                "$\\frac{1}{2}ML^2$",
                "$\\frac{1}{3}ML^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The end is $d = L/2$ from the center, so $I = \\tfrac{1}{12}ML^2 + M(L/2)^2 = \\tfrac{1}{12}ML^2 + \\tfrac{1}{4}ML^2 = \\tfrac{1}{3}ML^2$. The first choice is the classic error of using $d = L$ instead of $d = L/2$.",
                "zh": "端点距中心 $d = L/2$，故 $I = \\tfrac{1}{12}ML^2 + M(L/2)^2 = \\tfrac{1}{12}ML^2 + \\tfrac{1}{4}ML^2 = \\tfrac{1}{3}ML^2$。第一个选项是把 $d$ 误取为 $L$ 而不是 $L/2$ 的经典错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A turntable starts from rest with angular acceleration $\\alpha(t) = 4t\\,\\text{rad/s}^2$ ($t$ in s). Find its angular velocity in rad/s at $t = 3\\,\\text{s}$. Give an integer.",
                "zh": "一转盘从静止出发，角加速度 $\\alpha(t) = 4t\\,\\text{rad/s}^2$（$t$ 以秒计）。求 $t = 3\\,\\text{s}$ 时的角速度（rad/s）。请填一个整数。"
              },
              "answer": "18",
              "accept": [
                "18.0",
                "18 rad/s"
              ],
              "explanation": {
                "en": "Since $\\alpha$ is not constant, integrate: $\\omega = \\int_0^t 4t\\,dt = 2t^2$. At $t = 3$: $\\omega = 2(9) = 18\\,\\text{rad/s}$. Using $\\omega = \\alpha t$ with $\\alpha(3) = 12$ would wrongly give $36$.",
                "zh": "$\\alpha$ 不是常数，必须积分：$\\omega = \\int_0^t 4t\\,dt = 2t^2$。当 $t = 3$：$\\omega = 2(9) = 18\\,\\text{rad/s}$。若用 $\\omega = \\alpha t$ 并代入 $\\alpha(3) = 12$，会错误地得到 $36$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Among all axes parallel to a given direction, the axis through a body that gives the MINIMUM moment of inertia is the one passing through",
                "zh": "在所有平行于给定方向的轴中，使物体转动惯量最小的轴通过"
              },
              "choices": [
                "the center of mass",
                "the geometric edge of the body",
                "the point where the most mass is concentrated",
                "any point — all parallel axes give the same $I$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The parallel axis theorem $I = I_{cm} + Md^2$ shows $I$ grows with $d^2$, so it is smallest when $d = 0$, i.e., through the center of mass. The \"most mass\" choice is tempting but the theorem involves the CM of the whole body, not local mass concentration.",
                "zh": "平行轴定理 $I = I_{cm} + Md^2$ 表明 $I$ 随 $d^2$ 增大，故当 $d = 0$（轴过质心）时最小。\"质量最集中处\"的选项有迷惑性，但定理涉及的是整个物体的质心，而非局部质量集中处。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To measure a plate's $I_{cm}$ and mass, a student measures its moment of inertia $I$ about several parallel axes at distances $d$ from the center of mass, then plots $I$ (vertical) versus $d^2$ (horizontal). Which analysis is correct?",
                "zh": "为测量一块平板的 $I_{cm}$ 与质量，一名学生测出它绕若干条与质心相距 $d$ 的平行轴的转动惯量 $I$，然后以 $I$ 为纵轴、$d^2$ 为横轴作图。下列哪种分析是正确的？"
              },
              "choices": [
                "The graph is a parabola; its curvature gives $M$",
                "The slope gives $I_{cm}$ and the intercept gives $M$",
                "The slope gives $M$ and the vertical intercept gives $I_{cm}$",
                "The graph passes through the origin, so no intercept information exists"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the parallel axis theorem $I = Md^2 + I_{cm}$, which is linear in the variable $d^2$: slope $= M$, intercept $= I_{cm}$. Swapping slope and intercept (the second choice) is the tempting mix-up; plotting against $d^2$ rather than $d$ is exactly what makes the graph a straight line.",
                "zh": "由平行轴定理 $I = Md^2 + I_{cm}$，它关于变量 $d^2$ 是线性的：斜率 $= M$，截距 $= I_{cm}$。第二个选项把斜率和截距弄反了，很有迷惑性；正是以 $d^2$（而非 $d$）为横轴才使图线成为直线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform rod of mass $3\\,\\text{kg}$ and length $2\\,\\text{m}$ is pivoted about a perpendicular axis through one end, with a $2\\,\\text{kg}$ point mass attached at the far end. Find the total moment of inertia about the pivot, in $\\text{kg}\\cdot\\text{m}^2$. Give an integer.",
                "zh": "质量 $3\\,\\text{kg}$、长 $2\\,\\text{m}$ 的均匀细杆绕过一端的垂直轴转动，远端固定一个 $2\\,\\text{kg}$ 的质点。求整体绕支点的转动惯量（$\\text{kg}\\cdot\\text{m}^2$）。请填一个整数。"
              },
              "answer": "12",
              "accept": [
                "12.0",
                "12 kg·m^2"
              ],
              "explanation": {
                "en": "Rod about its end: $\\tfrac{1}{3}ML^2 = \\tfrac{1}{3}(3)(4) = 4$. Point mass: $mL^2 = 2(4) = 8$. Total: $I = 4 + 8 = 12\\,\\text{kg}\\cdot\\text{m}^2$. A common slip is using $\\tfrac{1}{12}ML^2$ for the rod even though the axis is at its end.",
                "zh": "杆绕端点：$\\tfrac{1}{3}ML^2 = \\tfrac{1}{3}(3)(4) = 4$。质点：$mL^2 = 2(4) = 8$。合计：$I = 4 + 8 = 12\\,\\text{kg}\\cdot\\text{m}^2$。常见失误是轴在端点却仍用 $\\tfrac{1}{12}ML^2$。"
              }
            }
          ]
        },
        {
          "id": "torque-rotational-dynamics",
          "title": "Torque and Rotational Dynamics",
          "titleZh": "力矩与转动动力学",
          "content": [
            {
              "type": "h2",
              "en": "Torque as a Cross Product",
              "zh": "力矩是叉积"
            },
            {
              "type": "p",
              "en": "Torque measures the turning effectiveness of a force about a chosen pivot. It is defined as the cross product of the position vector $\\vec{r}$ (from pivot to the point of application) with the force $\\vec{F}$. Its magnitude is $rF\\sin\\phi$, where $\\phi$ is the angle between $\\vec{r}$ and $\\vec{F}$; its direction follows the right-hand rule (point fingers along $\\vec{r}$, curl toward $\\vec{F}$; the thumb gives $\\vec{\\tau}$, along the rotation axis).",
              "zh": "力矩衡量一个力绕选定支点的转动效果。它定义为位置矢量 $\\vec{r}$（从支点指向力的作用点）与力 $\\vec{F}$ 的叉积。其大小为 $rF\\sin\\phi$，其中 $\\phi$ 是 $\\vec{r}$ 与 $\\vec{F}$ 之间的夹角；方向由右手定则确定（四指从 $\\vec{r}$ 弯向 $\\vec{F}$，拇指指向 $\\vec{\\tau}$，沿转轴方向）。"
            },
            {
              "type": "math",
              "tex": "\\vec{\\tau} = \\vec{r} \\times \\vec{F}, \\qquad |\\vec{\\tau}| = rF\\sin\\phi"
            },
            {
              "type": "p",
              "en": "Equivalently, $\\tau = F \\cdot (r\\sin\\phi)$: the force times the lever arm, the perpendicular distance from the pivot to the force's line of action. Two immediate consequences: a force applied AT the pivot ($r = 0$) exerts no torque, and a force whose line of action passes through the pivot ($\\sin\\phi = 0$) exerts no torque.",
              "zh": "等价地，$\\tau = F \\cdot (r\\sin\\phi)$：力乘以力臂，即支点到力的作用线的垂直距离。两个直接推论：作用在支点上的力（$r = 0$）不产生力矩；作用线通过支点的力（$\\sin\\phi = 0$）也不产生力矩。"
            },
            {
              "type": "h3",
              "en": "Deriving $\\tau_{net} = I\\alpha$ from First Principles",
              "zh": "从第一性原理推导 $\\tau_{net} = I\\alpha$"
            },
            {
              "type": "p",
              "en": "Consider one particle of mass $m_i$ at radius $r_i$ in a rigid body rotating about a fixed axis. Newton's second law in the tangential direction gives $F_{t,i} = m_i a_{t,i} = m_i r_i \\alpha$. The torque of this force about the axis is $\\tau_i = r_i F_{t,i} = m_i r_i^2 \\alpha$. Summing over all particles (internal torques cancel in pairs by Newton's third law):",
              "zh": "考虑刚体中一个质量为 $m_i$、半径为 $r_i$ 的质点，刚体绕固定轴转动。切向的牛顿第二定律给出 $F_{t,i} = m_i a_{t,i} = m_i r_i \\alpha$。该力绕轴的力矩为 $\\tau_i = r_i F_{t,i} = m_i r_i^2 \\alpha$。对所有质点求和（由牛顿第三定律，内力矩成对抵消）："
            },
            {
              "type": "math",
              "tex": "\\tau_{net} = \\sum_i m_i r_i^2\\,\\alpha = \\left(\\sum_i m_i r_i^2\\right)\\alpha = I\\alpha"
            },
            {
              "type": "p",
              "en": "This is the rotational form of Newton's second law: the net EXTERNAL torque about a fixed axis equals the moment of inertia about that axis times the angular acceleration. Torque plays the role of force, $I$ plays the role of mass, and $\\alpha$ plays the role of acceleration.",
              "zh": "这就是牛顿第二定律的转动形式：绕固定轴的合外力矩等于绕该轴的转动惯量乘以角加速度。力矩相当于力，$I$ 相当于质量，$\\alpha$ 相当于加速度。"
            },
            {
              "type": "h3",
              "en": "Massive Pulleys: Coupled Equations",
              "zh": "有质量的滑轮：联立方程"
            },
            {
              "type": "p",
              "en": "When a pulley has mass, it needs a net torque to angularly accelerate, so the tensions on its two sides are NOT equal. Write Newton's second law for each hanging mass, $\\tau_{net} = I\\alpha$ for the pulley, and connect them with the no-slip constraint $a = R\\alpha$. For an Atwood machine with masses $m_1 < m_2$ over a uniform disk pulley of mass $M_p$ and radius $R$:",
              "zh": "当滑轮有质量时，它需要净力矩才能产生角加速度，所以两侧绳的张力不相等。对每个悬挂物体写牛顿第二定律，对滑轮写 $\\tau_{net} = I\\alpha$，再用不打滑约束 $a = R\\alpha$ 把它们联系起来。对于质量 $m_1 < m_2$ 挂在质量 $M_p$、半径 $R$ 的均匀圆盘滑轮两侧的阿特伍德机："
            },
            {
              "type": "math",
              "tex": "m_2 g - T_2 = m_2 a, \\qquad T_1 - m_1 g = m_1 a, \\qquad (T_2 - T_1)R = \\left(\\tfrac{1}{2}M_p R^2\\right)\\frac{a}{R}"
            },
            {
              "type": "math",
              "tex": "\\Rightarrow\\; a = \\frac{(m_2 - m_1)g}{m_1 + m_2 + \\tfrac{1}{2}M_p}"
            },
            {
              "type": "p",
              "en": "Note that $R$ cancels: the pulley enters only through $\\tfrac{1}{2}M_p$, its \"effective mass.\" Setting $M_p = 0$ recovers the ideal-pulley result, a good limiting-case check.",
              "zh": "注意 $R$ 被消去：滑轮只通过其\"等效质量\" $\\tfrac{1}{2}M_p$ 出现。令 $M_p = 0$ 即回到理想滑轮的结果，这是一个很好的极限检验。"
            },
            {
              "type": "h3",
              "en": "A Rod Released from Horizontal: Why Constant-$\\alpha$ Kinematics Fails",
              "zh": "从水平位置释放的杆：为什么匀角加速公式失效"
            },
            {
              "type": "p",
              "en": "A uniform rod of mass $M$ and length $L$ is pivoted at one end and released from rest in a horizontal position. Gravity acts at the center of mass, a distance $L/2$ from the pivot. When the rod makes angle $\\theta$ below the horizontal, the lever arm of gravity is $(L/2)\\cos\\theta$, so",
              "zh": "质量 $M$、长 $L$ 的均匀细杆一端固定在支点上，从水平位置由静止释放。重力作用在质心，距支点 $L/2$。当杆转到水平线下方 $\\theta$ 角时，重力的力臂为 $(L/2)\\cos\\theta$，因此"
            },
            {
              "type": "math",
              "tex": "\\alpha(\\theta) = \\frac{\\tau}{I} = \\frac{Mg\\frac{L}{2}\\cos\\theta}{\\frac{1}{3}ML^2} = \\frac{3g\\cos\\theta}{2L}"
            },
            {
              "type": "p",
              "en": "At the instant of release ($\\theta = 0$) this gives $\\alpha = \\frac{3g}{2L}$, and the tip's tangential acceleration is $L\\alpha = \\frac{3g}{2} > g$ — the tip accelerates faster than free fall! But because $\\alpha$ depends on $\\theta$, the constant-acceleration equations (like $\\omega^2 = 2\\alpha\\theta$) are INVALID for the swing. To find $\\omega$ at the bottom, use energy conservation instead: the center of mass falls $L/2$, so $Mg\\frac{L}{2} = \\frac{1}{2}\\left(\\frac{1}{3}ML^2\\right)\\omega^2$, giving $\\omega = \\sqrt{3g/L}$. (One could also integrate $\\alpha = \\omega\\,d\\omega/d\\theta$ to get the same result.)",
              "zh": "在释放瞬间（$\\theta = 0$）得 $\\alpha = \\frac{3g}{2L}$，杆端的切向加速度为 $L\\alpha = \\frac{3g}{2} > g$——杆端加速得比自由落体还快！但由于 $\\alpha$ 依赖于 $\\theta$，匀角加速公式（如 $\\omega^2 = 2\\alpha\\theta$）在整个摆动过程中不成立。要求最低点的 $\\omega$，应改用能量守恒：质心下降 $L/2$，故 $Mg\\frac{L}{2} = \\frac{1}{2}\\left(\\frac{1}{3}ML^2\\right)\\omega^2$，得 $\\omega = \\sqrt{3g/L}$。（也可以对 $\\alpha = \\omega\\,d\\omega/d\\theta$ 积分得到同样的结果。）"
            },
            {
              "type": "h3",
              "en": "Static Equilibrium",
              "zh": "静力平衡"
            },
            {
              "type": "p",
              "en": "A rigid body is in static equilibrium when $\\sum\\vec{F} = 0$ AND $\\sum\\vec{\\tau} = 0$. Crucially, if both conditions hold, the net torque is zero about EVERY point — so you may choose the pivot wherever it is most convenient. The classic application is a ladder leaning against a frictionless wall: the wall pushes horizontally, the floor supplies a normal force and friction, and gravity acts at the ladder's center.",
              "zh": "当 $\\sum\\vec{F} = 0$ 且 $\\sum\\vec{\\tau} = 0$ 时，刚体处于静力平衡。关键在于：若两个条件都满足，则绕任何一点的合力矩都为零——因此可以把支点选在最方便的位置。经典应用是靠在无摩擦墙上的梯子：墙施加水平推力，地面提供法向力和摩擦力，重力作用在梯子中心。"
            },
            {
              "type": "note",
              "en": "AP exam tip: In equilibrium problems, choose the torque pivot at the point where the MOST unknown forces act — those forces then have zero lever arm and drop out. For the ladder, taking torques about the base eliminates both floor forces in one stroke. Also remember: gravity's torque is computed as if all mass were at the center of mass.",
              "zh": "AP 考试提示：在平衡问题中，把力矩支点选在未知力最多的作用点——这些力的力臂为零，直接从方程中消失。对梯子问题，绕梯脚取矩可一举消去地面的两个力。还要记住：计算重力矩时可把全部质量视为集中在质心。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Atwood machine with a massive pulley",
                "zh": "例题 1：有质量滑轮的阿特伍德机"
              },
              "problem": {
                "en": "Masses $m_1 = 2\\,\\text{kg}$ and $m_2 = 6\\,\\text{kg}$ hang from a light string over a uniform disk pulley of mass $M_p = 4\\,\\text{kg}$ and radius $R = 0.1\\,\\text{m}$. The string does not slip. Find the acceleration and both tensions. Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "质量 $m_1 = 2\\,\\text{kg}$ 与 $m_2 = 6\\,\\text{kg}$ 用轻绳挂在质量 $M_p = 4\\,\\text{kg}$、半径 $R = 0.1\\,\\text{m}$ 的均匀圆盘滑轮两侧，绳不打滑。求加速度和两侧张力。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Three equations: $m_2 g - T_2 = m_2 a$; $T_1 - m_1 g = m_1 a$; $(T_2 - T_1)R = \\tfrac{1}{2}M_p R^2 \\cdot (a/R)$, i.e., $T_2 - T_1 = \\tfrac{1}{2}M_p a$. Adding all three:",
                  "zh": "三个方程：$m_2 g - T_2 = m_2 a$；$T_1 - m_1 g = m_1 a$；$(T_2 - T_1)R = \\tfrac{1}{2}M_p R^2 \\cdot (a/R)$，即 $T_2 - T_1 = \\tfrac{1}{2}M_p a$。三式相加："
                },
                {
                  "type": "math",
                  "tex": "a = \\frac{(m_2 - m_1)g}{m_1 + m_2 + \\tfrac{1}{2}M_p} = \\frac{(6-2)(10)}{2 + 6 + 2} = 4\\,\\text{m/s}^2"
                },
                {
                  "type": "p",
                  "en": "Then $T_1 = m_1(g + a) = 2(14) = 28\\,\\text{N}$ and $T_2 = m_2(g - a) = 6(6) = 36\\,\\text{N}$. Check: $(T_2 - T_1) = 8\\,\\text{N} = \\tfrac{1}{2}(4)(4)$ ✓. The unequal tensions are exactly what spins the pulley.",
                  "zh": "于是 $T_1 = m_1(g + a) = 2(14) = 28\\,\\text{N}$，$T_2 = m_2(g - a) = 6(6) = 36\\,\\text{N}$。检验：$(T_2 - T_1) = 8\\,\\text{N} = \\tfrac{1}{2}(4)(4)$ ✓。张力不相等正是滑轮转起来的原因。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: The ladder problem",
                "zh": "例题 2：梯子问题"
              },
              "problem": {
                "en": "A uniform ladder of mass $10\\,\\text{kg}$ and length $L$ leans against a frictionless wall, making a $45°$ angle with the floor. Find the wall's normal force, the floor's forces, and the minimum coefficient of static friction with the floor. Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "质量 $10\\,\\text{kg}$、长 $L$ 的均匀梯子靠在无摩擦的墙上，与地面成 $45°$ 角。求墙的法向力、地面的作用力以及地面所需的最小静摩擦系数。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Forces: weight $W = 100\\,\\text{N}$ at the center, wall force $N_w$ (horizontal), floor normal force $N_f$ (vertical), friction $f$ (horizontal, toward the wall). Force balance: $N_f = W = 100\\,\\text{N}$ and $f = N_w$.",
                  "zh": "受力：重力 $W = 100\\,\\text{N}$ 作用在中心，墙的力 $N_w$（水平），地面法向力 $N_f$（竖直），摩擦力 $f$（水平，指向墙）。力平衡：$N_f = W = 100\\,\\text{N}$，$f = N_w$。"
                },
                {
                  "type": "p",
                  "en": "Torque about the base (eliminating $N_f$ and $f$): the wall force acts at height $L\\sin 45°$ and the weight acts at horizontal distance $\\tfrac{L}{2}\\cos 45°$:",
                  "zh": "绕梯脚取矩（消去 $N_f$ 和 $f$）：墙的力作用在高度 $L\\sin 45°$ 处，重力的水平力臂为 $\\tfrac{L}{2}\\cos 45°$："
                },
                {
                  "type": "math",
                  "tex": "N_w L\\sin 45° = W\\,\\frac{L}{2}\\cos 45° \\;\\Rightarrow\\; N_w = \\frac{W}{2\\tan 45°} = 50\\,\\text{N}"
                },
                {
                  "type": "p",
                  "en": "So $f = 50\\,\\text{N}$, and the minimum coefficient is $\\mu_{min} = f/N_f = 50/100 = 0.5$. Note that a steeper ladder (larger angle) needs less friction — consistent with $N_w = \\frac{W}{2\\tan\\theta}$ decreasing as $\\theta$ grows.",
                  "zh": "所以 $f = 50\\,\\text{N}$，最小摩擦系数 $\\mu_{min} = f/N_f = 50/100 = 0.5$。注意梯子越陡（角度越大）所需摩擦越小——与 $N_w = \\frac{W}{2\\tan\\theta}$ 随 $\\theta$ 增大而减小一致。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A force of $10\\,\\text{N}$ is applied to a wrench at a point $0.5\\,\\text{m}$ from the bolt, at $30°$ to the wrench handle (the position vector). What is the magnitude of the torque about the bolt?",
                "zh": "一个 $10\\,\\text{N}$ 的力作用在扳手上距螺栓 $0.5\\,\\text{m}$ 处，与扳手柄（位置矢量）成 $30°$ 角。绕螺栓的力矩大小是多少？"
              },
              "choices": [
                "$5\\,\\text{N}\\cdot\\text{m}$",
                "$4.3\\,\\text{N}\\cdot\\text{m}$",
                "$2.5\\,\\text{N}\\cdot\\text{m}$",
                "$0.25\\,\\text{N}\\cdot\\text{m}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\tau = rF\\sin\\phi = (0.5)(10)\\sin 30° = (0.5)(10)(0.5) = 2.5\\,\\text{N}\\cdot\\text{m}$. The $4.3\\,\\text{N}\\cdot\\text{m}$ distractor comes from using $\\cos 30°$ instead of $\\sin 30°$; $5\\,\\text{N}\\cdot\\text{m}$ forgets the angle entirely.",
                "zh": "$\\tau = rF\\sin\\phi = (0.5)(10)\\sin 30° = (0.5)(10)(0.5) = 2.5\\,\\text{N}\\cdot\\text{m}$。$4.3\\,\\text{N}\\cdot\\text{m}$ 这一干扰项错在用了 $\\cos 30°$ 而非 $\\sin 30°$；$5\\,\\text{N}\\cdot\\text{m}$ 则完全忽略了角度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A force is applied to a rigid body pivoted at point P. The torque about P is ZERO if the force's line of action",
                "zh": "一个力作用在以 P 点为支点的刚体上。若该力的作用线满足哪个条件，则它绕 P 的力矩为零？"
              },
              "choices": [
                "passes through P",
                "is perpendicular to the position vector $\\vec{r}$",
                "is horizontal",
                "is applied as far from P as possible"
              ],
              "answer": 0,
              "explanation": {
                "en": "If the line of action passes through the pivot, the lever arm (and $\\sin\\phi$) is zero, so $\\tau = 0$. Perpendicular to $\\vec{r}$ is the opposite extreme — it MAXIMIZES the torque for a given $r$ and $F$, which is why that distractor is tempting.",
                "zh": "若作用线通过支点，力臂（以及 $\\sin\\phi$）为零，故 $\\tau = 0$。垂直于 $\\vec{r}$ 恰恰是另一个极端——在给定 $r$ 和 $F$ 时它使力矩最大，这正是该干扰项的迷惑之处。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Masses $m_1 = 2\\,\\text{kg}$ and $m_2 = 4\\,\\text{kg}$ hang over a uniform disk pulley of mass $M_p = 4\\,\\text{kg}$ (string does not slip). Using $g = 10\\,\\text{m/s}^2$, find the acceleration of the blocks in $\\text{m/s}^2$. Give a decimal.",
                "zh": "质量 $m_1 = 2\\,\\text{kg}$ 与 $m_2 = 4\\,\\text{kg}$ 挂在质量 $M_p = 4\\,\\text{kg}$ 的均匀圆盘滑轮两侧（绳不打滑）。取 $g = 10\\,\\text{m/s}^2$，求物块的加速度（$\\text{m/s}^2$）。请填一个小数。"
              },
              "answer": "2.5",
              "accept": [
                "2.50",
                "5/2",
                "2.5 m/s^2"
              ],
              "explanation": {
                "en": "$a = \\dfrac{(m_2 - m_1)g}{m_1 + m_2 + \\tfrac{1}{2}M_p} = \\dfrac{(4-2)(10)}{2 + 4 + 2} = \\dfrac{20}{8} = 2.5\\,\\text{m/s}^2$. Forgetting the pulley's effective mass $\\tfrac{1}{2}M_p$ gives the ideal-pulley answer $3.3\\,\\text{m/s}^2$, which is too large.",
                "zh": "$a = \\dfrac{(m_2 - m_1)g}{m_1 + m_2 + \\tfrac{1}{2}M_p} = \\dfrac{(4-2)(10)}{2 + 4 + 2} = \\dfrac{20}{8} = 2.5\\,\\text{m/s}^2$。若忘记滑轮的等效质量 $\\tfrac{1}{2}M_p$，会得到理想滑轮的答案 $3.3\\,\\text{m/s}^2$，偏大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A uniform rod pivoted at one end is released from rest in a horizontal position. Why can the equation $\\omega^2 = 2\\alpha\\Delta\\theta$ NOT be used with the initial $\\alpha$ to find the angular speed at the vertical position?",
                "zh": "一均匀细杆一端固定，从水平位置由静止释放。为什么不能用 $\\omega^2 = 2\\alpha\\Delta\\theta$ 代入初始的 $\\alpha$ 来求竖直位置的角速度？"
              },
              "choices": [
                "Because the moment of inertia changes as the rod swings",
                "Because the torque, and hence $\\alpha$, decreases as the rod swings down",
                "Because energy is not conserved during the swing",
                "Because $\\omega$ and $\\alpha$ point in different directions"
              ],
              "answer": 1,
              "explanation": {
                "en": "The lever arm of gravity is $(L/2)\\cos\\theta$, so $\\alpha = \\frac{3g\\cos\\theta}{2L}$ shrinks from $\\frac{3g}{2L}$ at horizontal to $0$ at vertical. Constant-$\\alpha$ kinematics therefore fails; use energy conservation. The first choice is tempting, but $I = \\tfrac{1}{3}ML^2$ is constant for a rigid rod about a fixed pivot.",
                "zh": "重力的力臂为 $(L/2)\\cos\\theta$，所以 $\\alpha = \\frac{3g\\cos\\theta}{2L}$ 从水平时的 $\\frac{3g}{2L}$ 逐渐减小到竖直时的 $0$。因此匀角加速公式失效，应改用能量守恒。第一个选项有迷惑性，但刚性杆绕固定支点的 $I = \\tfrac{1}{3}ML^2$ 是不变的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A uniform rod of mass $M$ and length $L$, pivoted at one end, is held horizontal and released. Immediately after release, its angular acceleration is",
                "zh": "质量 $M$、长 $L$ 的均匀细杆一端固定，保持水平后释放。释放后的瞬间，其角加速度为"
              },
              "choices": [
                "$\\frac{3g}{2L}$",
                "$\\frac{g}{L}$",
                "$\\frac{2g}{3L}$",
                "$\\frac{g}{2L}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\alpha = \\tau/I = \\dfrac{Mg(L/2)}{\\tfrac{1}{3}ML^2} = \\dfrac{3g}{2L}$. The distractor $\\frac{g}{2L}$ comes from using $I = ML^2$ (treating all mass at the end); $\\frac{g}{L}$ comes from putting gravity at the end but keeping $I = \\tfrac{1}{3}ML^2$... always match the lever arm ($L/2$, at the CM) with the correct $I$.",
                "zh": "$\\alpha = \\tau/I = \\dfrac{Mg(L/2)}{\\tfrac{1}{3}ML^2} = \\dfrac{3g}{2L}$。干扰项 $\\frac{g}{2L}$ 错在用了 $I = ML^2$（把全部质量当作在杆端）；务必把正确的力臂（$L/2$，在质心处）与正确的 $I$ 配对使用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform ladder of weight $200\\,\\text{N}$ leans against a frictionless wall at $45°$ to the floor and is in equilibrium. Find the friction force from the floor, in N. Give an integer.",
                "zh": "重 $200\\,\\text{N}$ 的均匀梯子以 $45°$ 角靠在无摩擦的墙上并保持平衡。求地面的摩擦力（N）。请填一个整数。"
              },
              "answer": "100",
              "accept": [
                "100.0",
                "100 N"
              ],
              "explanation": {
                "en": "Torque about the base: $N_w L\\sin 45° = W(L/2)\\cos 45°$, so $N_w = \\frac{W}{2\\tan 45°} = 100\\,\\text{N}$. Horizontal force balance then gives $f = N_w = 100\\,\\text{N}$.",
                "zh": "绕梯脚取矩：$N_w L\\sin 45° = W(L/2)\\cos 45°$，故 $N_w = \\frac{W}{2\\tan 45°} = 100\\,\\text{N}$。再由水平方向力平衡得 $f = N_w = 100\\,\\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To measure a wheel's moment of inertia, a student applies several known torques $\\tau$ and measures the resulting angular acceleration $\\alpha$ each time, then plots $\\tau$ (vertical) versus $\\alpha$ (horizontal). The best-fit line has slope $2.0$ (SI units) and passes near the origin. The wheel's moment of inertia is closest to",
                "zh": "为测量一只轮子的转动惯量，一名学生施加几个已知力矩 $\\tau$，每次测量相应的角加速度 $\\alpha$，然后以 $\\tau$ 为纵轴、$\\alpha$ 为横轴作图。最佳拟合直线的斜率为 $2.0$（国际单位）且几乎过原点。该轮的转动惯量最接近"
              },
              "choices": [
                "$0.5\\,\\text{kg}\\cdot\\text{m}^2$",
                "$4.0\\,\\text{kg}\\cdot\\text{m}^2$",
                "$1.0\\,\\text{kg}\\cdot\\text{m}^2$",
                "$2.0\\,\\text{kg}\\cdot\\text{m}^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Since $\\tau = I\\alpha$, a plot of $\\tau$ versus $\\alpha$ is a line through the origin with slope $I$, so $I = 2.0\\,\\text{kg}\\cdot\\text{m}^2$. The $0.5$ distractor is the inverse slope — plotting $\\alpha$ versus $\\tau$ instead would give slope $1/I$, so always check which variable is on which axis.",
                "zh": "由 $\\tau = I\\alpha$，$\\tau$–$\\alpha$ 图是过原点、斜率为 $I$ 的直线，故 $I = 2.0\\,\\text{kg}\\cdot\\text{m}^2$。干扰项 $0.5$ 是斜率的倒数——若把 $\\alpha$ 作纵轴、$\\tau$ 作横轴，斜率才是 $1/I$，所以务必看清坐标轴。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform rod of length $L = 1.2\\,\\text{m}$ is pivoted at one end, held horizontal, and released from rest. Using energy conservation with $g = 10\\,\\text{m/s}^2$, find its angular speed in rad/s as it swings through the vertical position. Give an integer.",
                "zh": "长 $L = 1.2\\,\\text{m}$ 的均匀细杆一端固定，保持水平后由静止释放。用能量守恒并取 $g = 10\\,\\text{m/s}^2$，求它摆到竖直位置时的角速度（rad/s）。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "5 rad/s"
              ],
              "explanation": {
                "en": "The center of mass falls $L/2$, so $Mg\\frac{L}{2} = \\frac{1}{2}\\left(\\frac{1}{3}ML^2\\right)\\omega^2$, giving $\\omega = \\sqrt{3g/L} = \\sqrt{3(10)/1.2} = \\sqrt{25} = 5\\,\\text{rad/s}$. A common error is dropping $L$ as if the whole mass fell $L$: that gives $\\omega = \\sqrt{6g/L}$, too large by $\\sqrt{2}$.",
                "zh": "质心下降 $L/2$，故 $Mg\\frac{L}{2} = \\frac{1}{2}\\left(\\frac{1}{3}ML^2\\right)\\omega^2$，得 $\\omega = \\sqrt{3g/L} = \\sqrt{3(10)/1.2} = \\sqrt{25} = 5\\,\\text{rad/s}$。常见错误是把整根杆的质量当作下降了 $L$：那样会得到 $\\omega = \\sqrt{6g/L}$，偏大 $\\sqrt{2}$ 倍。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "rotating-systems",
      "title": "Unit 6: Energy and Momentum of Rotating Systems",
      "titleZh": "第六单元：转动系统的能量与动量",
      "lessons": [
        {
          "id": "rolling-rotational-energy",
          "title": "Rotational Energy and Rolling",
          "titleZh": "转动能量与滚动",
          "content": [
            {
              "type": "h2",
              "en": "Rotational Kinetic Energy",
              "zh": "转动动能"
            },
            {
              "type": "p",
              "en": "A rigid body rotating at angular speed $\\omega$ is really a collection of mass elements $dm$, each moving in a circle of radius $r$ with speed $v = \\omega r$. Summing the kinetic energy $\\tfrac{1}{2}v^2\\,dm$ of every element gives the rotational kinetic energy, and the integral that appears is exactly the rotational inertia $I$.",
              "zh": "以角速度 $\\omega$ 转动的刚体，实际上是无数质量元 $dm$ 的集合，每个质量元以速率 $v = \\omega r$ 沿半径为 $r$ 的圆周运动。把每个质量元的动能 $\\tfrac{1}{2}v^2\\,dm$ 求和，就得到转动动能，其中出现的积分正是转动惯量 $I$。"
            },
            {
              "type": "math",
              "tex": "K_{rot} = \\int \\frac{1}{2}v^2\\,dm = \\frac{1}{2}\\omega^2 \\int r^2\\,dm = \\frac{1}{2}I\\omega^2"
            },
            {
              "type": "p",
              "en": "For round objects it is convenient to write the rotational inertia about the center of mass as $I = cmr^2$, where $c$ is a pure number determined by how the mass is distributed:",
              "zh": "对于圆形物体，把绕质心的转动惯量写成 $I = cmr^2$ 很方便，其中 $c$ 是由质量分布决定的纯数："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Thin hoop or ring: $c = 1$ (all mass at the rim).",
                  "zh": "薄圆环：$c = 1$（全部质量在边缘）。"
                },
                {
                  "en": "Solid cylinder or disk: $c = \\frac{1}{2}$.",
                  "zh": "实心圆柱或圆盘：$c = \\frac{1}{2}$。"
                },
                {
                  "en": "Solid sphere: $c = \\frac{2}{5}$.",
                  "zh": "实心球：$c = \\frac{2}{5}$。"
                },
                {
                  "en": "Hollow (thin-shell) sphere: $c = \\frac{2}{3}$.",
                  "zh": "空心（薄壳）球：$c = \\frac{2}{3}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Rolling Without Slipping",
              "zh": "无滑滚动"
            },
            {
              "type": "p",
              "en": "When a wheel rolls without slipping, the point touching the ground is instantaneously at rest — it has zero velocity relative to the surface. This gives the rolling constraint $v_{cm} = r\\omega$ and, differentiating, $a_{cm} = r\\alpha$. The total kinetic energy is the translational energy of the center of mass plus the rotational energy about the center of mass:",
              "zh": "当轮子无滑滚动时，与地面接触的点瞬时静止——它相对地面的速度为零。这给出滚动约束 $v_{cm} = r\\omega$，求导得 $a_{cm} = r\\alpha$。总动能等于质心的平动动能加上绕质心的转动动能："
            },
            {
              "type": "math",
              "tex": "K = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I_{cm}\\omega^2 = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}(cmr^2)\\frac{v_{cm}^2}{r^2} = \\frac{1}{2}(1+c)\\,mv_{cm}^2"
            },
            {
              "type": "p",
              "en": "Since the contact point is momentarily at rest, rolling can also be viewed as pure rotation about an axis through the contact point. By the parallel-axis theorem, $I_P = I_{cm} + mr^2 = (1+c)mr^2$, so $K = \\tfrac{1}{2}I_P\\omega^2 = \\tfrac{1}{2}(1+c)mv_{cm}^2$ — the same answer, as it must be.",
              "zh": "由于接触点瞬时静止，滚动也可以看作绕过接触点的轴的纯转动。由平行轴定理，$I_P = I_{cm} + mr^2 = (1+c)mr^2$，故 $K = \\tfrac{1}{2}I_P\\omega^2 = \\tfrac{1}{2}(1+c)mv_{cm}^2$——结果必然相同。"
            },
            {
              "type": "h3",
              "en": "Energy Method on a Ramp",
              "zh": "斜面上的能量法"
            },
            {
              "type": "p",
              "en": "Suppose a round object of mass $m$ and inertia coefficient $c$ rolls from rest down a ramp, dropping a height $h$. The static friction force at the contact point does no work, because the point where it acts has zero velocity. Mechanical energy is therefore conserved:",
              "zh": "设质量为 $m$、惯量系数为 $c$ 的圆形物体从静止开始沿斜面滚下，下降高度 $h$。接触点处的静摩擦力不做功，因为其作用点速度为零。因此机械能守恒："
            },
            {
              "type": "math",
              "tex": "mgh = \\frac{1}{2}(1+c)mv^2 \\;\\Rightarrow\\; v = \\sqrt{\\frac{2gh}{1+c}}"
            },
            {
              "type": "p",
              "en": "The dynamics method gives the same physics. Along the incline, $mg\\sin\\theta - f = ma$; torque about the center of mass gives $fr = I_{cm}\\alpha = cmr^2(a/r)$, so $f = cma$. Substituting eliminates $f$ and yields the acceleration below. Note that the required friction $f = \\frac{c\\,mg\\sin\\theta}{1+c}$ must not exceed $\\mu_s mg\\cos\\theta$, or the object slips.",
              "zh": "动力学方法给出同样的结果。沿斜面方向 $mg\\sin\\theta - f = ma$；对质心取矩得 $fr = I_{cm}\\alpha = cmr^2(a/r)$，即 $f = cma$。代入消去 $f$ 得到下面的加速度。注意所需摩擦力 $f = \\frac{c\\,mg\\sin\\theta}{1+c}$ 不能超过 $\\mu_s mg\\cos\\theta$，否则物体会打滑。"
            },
            {
              "type": "math",
              "tex": "a = \\frac{g\\sin\\theta}{1+c}, \\qquad f = \\frac{c\\,mg\\sin\\theta}{1+c}"
            },
            {
              "type": "p",
              "en": "Both results depend only on $c$, not on the mass or radius separately. So in a race down a ramp, any solid sphere beats any solid cylinder, which beats any hoop, regardless of size — smaller $c$ means less energy is diverted into rotation.",
              "zh": "两个结果都只依赖于 $c$，与质量和半径本身无关。所以在斜面比赛中，任何实心球都胜过任何实心圆柱，实心圆柱又胜过任何圆环，与尺寸无关——$c$ 越小，被分流到转动的能量越少。"
            },
            {
              "type": "note",
              "en": "AP exam tip: For rolling WITHOUT slipping, do NOT subtract \"work done by friction\" in your energy equation — static friction does no work because its point of application is at rest. Energy is only dissipated if the object slips, in which case kinetic friction acts and $v = r\\omega$ no longer holds. Writing $mgh = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}I\\omega^2 - f d$ is a classic error that loses points.",
              "zh": "AP 考试提示：无滑滚动时，不要在能量方程里减去\"摩擦做的功\"——静摩擦不做功，因为其作用点静止。只有物体打滑时才有能量耗散，此时是动摩擦在起作用，且 $v = r\\omega$ 不再成立。写成 $mgh = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}I\\omega^2 - f d$ 是会丢分的典型错误。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Sphere rolling down a ramp (energy method)",
                "zh": "例题 1：球沿斜面滚下（能量法）"
              },
              "problem": {
                "en": "A uniform solid sphere ($c = \\frac{2}{5}$) is released from rest at the top of a ramp and rolls without slipping through a vertical drop of $h = 1.75\\,\\text{m}$. Use $g = 10\\,\\text{m/s}^2$. (a) Find its speed at the bottom. (b) Compare with a frictionless sliding block released from the same height.",
                "zh": "一个均匀实心球（$c = \\frac{2}{5}$）从斜面顶端由静止释放，无滑滚下，竖直下降高度 $h = 1.75\\,\\text{m}$。取 $g = 10\\,\\text{m/s}^2$。(a) 求到达底端时的速率。(b) 与从同一高度无摩擦下滑的滑块比较。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Energy conservation with the rolling kinetic energy $\\tfrac{1}{2}(1+c)mv^2$:",
                  "zh": "(a) 用含滚动动能 $\\tfrac{1}{2}(1+c)mv^2$ 的能量守恒："
                },
                {
                  "type": "math",
                  "tex": "v = \\sqrt{\\frac{2gh}{1+c}} = \\sqrt{\\frac{2(10)(1.75)}{1.4}} = \\sqrt{25} = 5\\,\\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "(b) A frictionless block would reach $v = \\sqrt{2gh} = \\sqrt{35} \\approx 5.9\\,\\text{m/s}$. The sphere is slower because the fraction $\\frac{c}{1+c} = \\frac{2}{7}$ of its kinetic energy is stored in rotation.",
                  "zh": "(b) 无摩擦滑块的速率为 $v = \\sqrt{2gh} = \\sqrt{35} \\approx 5.9\\,\\text{m/s}$。球更慢，因为其动能中有 $\\frac{c}{1+c} = \\frac{2}{7}$ 的比例储存在转动中。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Acceleration of a rolling hoop (dynamics method)",
                "zh": "例题 2：滚动圆环的加速度（动力学法）"
              },
              "problem": {
                "en": "A thin hoop ($c = 1$) rolls without slipping down a $30^\\circ$ incline. Use $g = 10\\,\\text{m/s}^2$. Find its acceleration, and determine the minimum coefficient of static friction required.",
                "zh": "一个薄圆环（$c = 1$）沿 $30^\\circ$ 斜面无滑滚下。取 $g = 10\\,\\text{m/s}^2$。求其加速度，并求所需的最小静摩擦系数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Newton's second law along the incline and the torque equation about the center of mass give $mg\\sin\\theta - f = ma$ and $fr = mr^2(a/r)$, so $f = ma$. Adding:",
                  "zh": "沿斜面的牛顿第二定律和对质心的转矩方程给出 $mg\\sin\\theta - f = ma$ 和 $fr = mr^2(a/r)$，即 $f = ma$。联立得："
                },
                {
                  "type": "math",
                  "tex": "a = \\frac{g\\sin\\theta}{1+c} = \\frac{10 \\times 0.5}{2} = 2.5\\,\\text{m/s}^2"
                },
                {
                  "type": "p",
                  "en": "The friction needed is $f = ma = 2.5m$. Requiring $f \\le \\mu_s N = \\mu_s mg\\cos 30^\\circ$ gives $\\mu_s \\ge \\frac{2.5}{10(\\sqrt{3}/2)} = \\frac{1}{2\\sqrt{3}} \\approx 0.29$.",
                  "zh": "所需摩擦力为 $f = ma = 2.5m$。由 $f \\le \\mu_s N = \\mu_s mg\\cos 30^\\circ$ 得 $\\mu_s \\ge \\frac{2.5}{10(\\sqrt{3}/2)} = \\frac{1}{2\\sqrt{3}} \\approx 0.29$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A solid sphere, a solid cylinder, and a thin hoop of equal mass and radius are released from rest at the top of the same ramp and roll without slipping. Which reaches the bottom with the greatest speed?",
                "zh": "质量和半径相同的实心球、实心圆柱和薄圆环从同一斜面顶端由静止释放，无滑滚下。哪个到达底端时速率最大？"
              },
              "choices": [
                "The hoop",
                "The solid cylinder",
                "The solid sphere",
                "All arrive with equal speeds"
              ],
              "answer": 2,
              "explanation": {
                "en": "From $v = \\sqrt{2gh/(1+c)}$, the smallest $c$ gives the largest speed: sphere ($c = 2/5$) beats cylinder ($c = 1/2$) beats hoop ($c = 1$). \"All equal\" is tempting by analogy with frictionless sliding, but rolling objects divert different fractions of energy into rotation.",
                "zh": "由 $v = \\sqrt{2gh/(1+c)}$，$c$ 最小者速率最大：球（$c = 2/5$）胜圆柱（$c = 1/2$）胜圆环（$c = 1$）。\"全部相同\"这个选项容易让人联想到无摩擦下滑的情形，但滚动物体分流到转动的能量比例各不相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A uniform solid sphere rolls without slipping. What fraction of its total kinetic energy is rotational?",
                "zh": "一个均匀实心球无滑滚动。其总动能中转动动能占多大比例？"
              },
              "choices": [
                "$\\frac{2}{5}$",
                "$\\frac{2}{7}$",
                "$\\frac{5}{7}$",
                "$\\frac{1}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "With $I = \\frac{2}{5}mr^2$, $K_{rot} = \\frac{1}{2}cmv^2$ and $K_{total} = \\frac{1}{2}(1+c)mv^2$, so the fraction is $\\frac{c}{1+c} = \\frac{2/5}{7/5} = \\frac{2}{7}$. Choosing $\\frac{2}{5}$ confuses the coefficient $c$ itself with the energy fraction.",
                "zh": "由 $I = \\frac{2}{5}mr^2$，$K_{rot} = \\frac{1}{2}cmv^2$，$K_{total} = \\frac{1}{2}(1+c)mv^2$，比例为 $\\frac{c}{1+c} = \\frac{2/5}{7/5} = \\frac{2}{7}$。选 $\\frac{2}{5}$ 是把系数 $c$ 本身误当成了能量比例。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A wheel rolls without slipping at constant velocity on a horizontal floor. Why does the friction force at the contact point do no work on the wheel?",
                "zh": "一个轮子在水平地面上以恒定速度无滑滚动。为什么接触点处的摩擦力对轮子不做功？"
              },
              "choices": [
                "Because the friction force is zero for any rolling object",
                "Because friction is perpendicular to the motion of the center of mass",
                "Because the wheel's kinetic energy is constant, so no force can do work",
                "Because the contact point where friction acts is instantaneously at rest"
              ],
              "answer": 3,
              "explanation": {
                "en": "Work is force times the displacement of its point of application. In rolling without slipping the contact point has zero velocity, so static friction does no work. Choice (a) is tempting but wrong in general: on an incline or during angular acceleration, static friction is nonzero yet still does no work.",
                "zh": "功等于力乘以其作用点的位移。无滑滚动时接触点速度为零，所以静摩擦不做功。选项 (a) 有迷惑性但一般不成立：在斜面上或有角加速度时，静摩擦不为零，但仍然不做功。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball rolls without slipping UP an incline, slowing down. What is the direction of the static friction force on the ball?",
                "zh": "一个球无滑滚动地沿斜面向上运动，逐渐减速。球所受静摩擦力的方向是？"
              },
              "choices": [
                "Up the incline",
                "Down the incline",
                "Zero — no friction is needed",
                "Perpendicular to the incline"
              ],
              "answer": 0,
              "explanation": {
                "en": "The ball's angular speed must decrease to keep $v = r\\omega$. Only friction can supply a torque about the center of mass, and to produce an angular deceleration (for a ball moving up while rotating \"forward\") friction must point up the incline. Taking up-slope positive: $-mg\\sin\\theta + f = ma$ and $-fr = I\\alpha$ with $\\alpha = a/r < 0$ give $f = -cma > 0$. Many students guess \"down the incline\" because the ball moves up, but friction opposes relative slipping tendency, not motion.",
                "zh": "为保持 $v = r\\omega$，球的角速度必须减小。只有摩擦力能对质心提供转矩，而要使正向滚动的球产生角减速度，摩擦力必须指向斜面上方。取沿斜面向上为正：$-mg\\sin\\theta + f = ma$ 与 $-fr = I\\alpha$（$\\alpha = a/r < 0$）联立得 $f = -cma > 0$。很多学生因为球向上运动就猜\"沿斜面向下\"，但摩擦力对抗的是相对滑动趋势，而不是运动本身。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To identify an unknown round object, a student lets it roll from rest down an incline with $\\sin\\theta = 0.8$ and measures its acceleration to be $a = 4.0\\,\\text{m/s}^2$ (take $g = 10\\,\\text{m/s}^2$). Using $a = \\frac{g\\sin\\theta}{1+c}$, the object is most likely a",
                "zh": "为鉴别一个未知圆形物体，学生让它从静止沿 $\\sin\\theta = 0.8$ 的斜面滚下，测得加速度 $a = 4.0\\,\\text{m/s}^2$（取 $g = 10\\,\\text{m/s}^2$）。利用 $a = \\frac{g\\sin\\theta}{1+c}$，该物体最可能是"
              },
              "choices": [
                "solid sphere ($c = 2/5$)",
                "thin hoop ($c = 1$)",
                "solid cylinder ($c = 1/2$)",
                "hollow sphere ($c = 2/3$)"
              ],
              "answer": 1,
              "explanation": {
                "en": "Solve for $c$: $c = \\frac{g\\sin\\theta}{a} - 1 = \\frac{10(0.8)}{4.0} - 1 = 2 - 1 = 1$, a thin hoop. This experimental-design pattern — extracting $c$ (hence $I$) from a measured acceleration — appears regularly on AP free-response questions.",
                "zh": "解出 $c$：$c = \\frac{g\\sin\\theta}{a} - 1 = \\frac{10(0.8)}{4.0} - 1 = 2 - 1 = 1$，是薄圆环。这种从测得的加速度反推 $c$（进而得到 $I$）的实验设计题型在 AP 自由问答题中经常出现。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform solid cylinder ($c = \\frac{1}{2}$) rolls from rest without slipping down a ramp, descending a vertical height of $1.2\\,\\text{m}$. Take $g = 10\\,\\text{m/s}^2$. Find its speed at the bottom, in m/s. Give an integer.",
                "zh": "一个均匀实心圆柱（$c = \\frac{1}{2}$）从静止开始无滑滚下斜面，竖直下降 $1.2\\,\\text{m}$。取 $g = 10\\,\\text{m/s}^2$。求它到达底端时的速率（m/s）。请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "4 m/s"
              ],
              "explanation": {
                "en": "$mgh = \\frac{1}{2}(1+c)mv^2$ gives $v = \\sqrt{\\frac{2gh}{1+c}} = \\sqrt{\\frac{2(10)(1.2)}{1.5}} = \\sqrt{16} = 4\\,\\text{m/s}$.",
                "zh": "由 $mgh = \\frac{1}{2}(1+c)mv^2$ 得 $v = \\sqrt{\\frac{2gh}{1+c}} = \\sqrt{\\frac{2(10)(1.2)}{1.5}} = \\sqrt{16} = 4\\,\\text{m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A thin hoop of mass $2\\,\\text{kg}$ ($c = 1$) rolls without slipping with center-of-mass speed $3\\,\\text{m/s}$. What is its TOTAL kinetic energy, in joules? Give an integer.",
                "zh": "质量为 $2\\,\\text{kg}$ 的薄圆环（$c = 1$）以质心速率 $3\\,\\text{m/s}$ 无滑滚动。其总动能是多少焦耳？请填一个整数。"
              },
              "answer": "18",
              "accept": [
                "18.0",
                "18 J"
              ],
              "explanation": {
                "en": "$K = \\frac{1}{2}(1+c)mv^2 = \\frac{1}{2}(2)(2)(3)^2 = 18\\,\\text{J}$. For a hoop the translational and rotational parts are equal: $9\\,\\text{J}$ each. Answering $9$ means the rotational half was forgotten.",
                "zh": "$K = \\frac{1}{2}(1+c)mv^2 = \\frac{1}{2}(2)(2)(3)^2 = 18\\,\\text{J}$。对圆环而言平动与转动动能相等，各为 $9\\,\\text{J}$。答 $9$ 说明漏掉了转动的那一半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform solid cylinder ($c = \\frac{1}{2}$) rolls without slipping down an incline with $\\sin\\theta = 0.6$. Take $g = 10\\,\\text{m/s}^2$. Find the magnitude of its acceleration, in m/s$^2$. Give your answer to one decimal place.",
                "zh": "一个均匀实心圆柱（$c = \\frac{1}{2}$）沿 $\\sin\\theta = 0.6$ 的斜面无滑滚下。取 $g = 10\\,\\text{m/s}^2$。求其加速度大小（m/s$^2$），保留一位小数。"
              },
              "answer": "4.0",
              "accept": [
                "4",
                "4.0 m/s^2",
                "4 m/s^2"
              ],
              "explanation": {
                "en": "$a = \\frac{g\\sin\\theta}{1+c} = \\frac{10(0.6)}{1.5} = 4.0\\,\\text{m/s}^2$. A sliding block would have $a = g\\sin\\theta = 6\\,\\text{m/s}^2$; rolling reduces the acceleration by the factor $1+c$.",
                "zh": "$a = \\frac{g\\sin\\theta}{1+c} = \\frac{10(0.6)}{1.5} = 4.0\\,\\text{m/s}^2$。若是滑动的滑块则 $a = g\\sin\\theta = 6\\,\\text{m/s}^2$；滚动使加速度缩小为原来的 $\\frac{1}{1+c}$。"
              }
            }
          ]
        },
        {
          "id": "angular-momentum-gravitation",
          "title": "Angular Momentum, Gravitation, and Orbits",
          "titleZh": "角动量、引力与轨道",
          "content": [
            {
              "type": "h2",
              "en": "Angular Momentum",
              "zh": "角动量"
            },
            {
              "type": "p",
              "en": "The angular momentum of a particle about an origin is the cross product $\\vec{L} = \\vec{r} \\times \\vec{p}$, with magnitude $L = mvr\\sin\\theta = mv\\,d$, where $d$ is the perpendicular distance (lever arm) from the origin to the line of motion. Even a particle moving in a straight line has angular momentum about a point not on its path. For a rigid body rotating about a fixed axis, summing over all mass elements gives $L = I\\omega$.",
              "zh": "质点关于某原点的角动量是叉积 $\\vec{L} = \\vec{r} \\times \\vec{p}$，大小为 $L = mvr\\sin\\theta = mv\\,d$，其中 $d$ 是原点到运动直线的垂直距离（力臂）。即使沿直线运动的质点，关于不在其路径上的点也有角动量。对绕固定轴转动的刚体，对所有质量元求和得 $L = I\\omega$。"
            },
            {
              "type": "math",
              "tex": "\\vec{L} = \\vec{r} \\times \\vec{p}, \\qquad L_{rigid} = I\\omega"
            },
            {
              "type": "p",
              "en": "Differentiating with the product rule reveals the rotational analog of Newton's second law. The first term vanishes because $\\vec{v} \\times m\\vec{v} = 0$ (parallel vectors), and the second is the net torque:",
              "zh": "用乘积法则求导即可得到牛顿第二定律的转动形式。第一项因 $\\vec{v} \\times m\\vec{v} = 0$（平行矢量叉积为零）而消失，第二项就是净转矩："
            },
            {
              "type": "math",
              "tex": "\\frac{d\\vec{L}}{dt} = \\frac{d\\vec{r}}{dt} \\times \\vec{p} + \\vec{r} \\times \\frac{d\\vec{p}}{dt} = 0 + \\vec{r} \\times \\vec{F}_{net} = \\vec{\\tau}_{net}"
            },
            {
              "type": "h3",
              "en": "Conservation of Angular Momentum",
              "zh": "角动量守恒"
            },
            {
              "type": "p",
              "en": "If the net external torque on a system is zero, its total angular momentum is constant. The classic example is a spinning skater: pulling her arms in decreases $I$, so $\\omega$ increases to keep $L = I\\omega$ fixed. Her kinetic energy $K = \\frac{L^2}{2I}$ actually increases — the extra energy comes from the work her muscles do pulling the arms inward.",
              "zh": "若系统所受净外转矩为零，其总角动量守恒。经典例子是旋转的滑冰运动员：收拢手臂使 $I$ 减小，$\\omega$ 随之增大以保持 $L = I\\omega$ 不变。她的动能 $K = \\frac{L^2}{2I}$ 实际上增大了——多出的能量来自肌肉把手臂拉向内侧所做的功。"
            },
            {
              "type": "p",
              "en": "Rotational collisions: suppose a dart of mass $m$ moving at speed $v$ strikes and sticks to a rod that is pivoted at one end, hitting perpendicular to the rod at distance $d$ from the pivot. During the collision the pivot exerts a large external force, so linear momentum is NOT conserved. But that pivot force has zero lever arm about the pivot, so angular momentum about the pivot IS conserved: $mvd = (I_{rod} + md^2)\\,\\omega$.",
              "zh": "转动碰撞：设质量为 $m$、速率为 $v$ 的飞镖垂直击中一端有转轴的杆并粘在上面，击中点距转轴 $d$。碰撞过程中转轴施加很大的外力，所以线动量不守恒。但该轴承力对转轴的力臂为零，因此关于转轴的角动量守恒：$mvd = (I_{rod} + md^2)\\,\\omega$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: In pivoted-collision problems, always take angular momentum about the pivot so the unknown pivot force drops out. Two classic traps: (1) linear momentum is not conserved when a pivot is present; (2) kinetic energy is not conserved in a sticking (perfectly inelastic) collision, even though angular momentum is.",
              "zh": "AP 考试提示：在含转轴的碰撞问题中，一定要以转轴为参考点计算角动量，这样未知的轴承力就不出现。两个经典陷阱：(1) 有转轴时线动量不守恒；(2) 粘连（完全非弹性）碰撞中动能不守恒，尽管角动量守恒。"
            },
            {
              "type": "h3",
              "en": "Universal Gravitation and Energy",
              "zh": "万有引力与能量"
            },
            {
              "type": "p",
              "en": "Newton's law of universal gravitation gives the attractive force between two masses separated by distance $r$:",
              "zh": "牛顿万有引力定律给出相距 $r$ 的两个质量之间的吸引力："
            },
            {
              "type": "math",
              "tex": "F = \\frac{GMm}{r^2}, \\qquad G = 6.67 \\times 10^{-11}\\,\\text{N·m}^2/\\text{kg}^2"
            },
            {
              "type": "p",
              "en": "The potential energy is obtained by integration, choosing $U(\\infty) = 0$. With the radial force component $F_r = -\\frac{GMm}{r^2}$ (negative because it pulls inward):",
              "zh": "取 $U(\\infty) = 0$，通过积分得到势能。引力的径向分量为 $F_r = -\\frac{GMm}{r^2}$（指向内侧故为负）："
            },
            {
              "type": "math",
              "tex": "U(r) = -\\int_{\\infty}^{r} F_{r'}\\,dr' = -\\int_{\\infty}^{r} \\left(-\\frac{GMm}{r'^2}\\right) dr' = -\\frac{GMm}{r}"
            },
            {
              "type": "p",
              "en": "Escape speed follows from energy conservation. To just barely escape from the surface of a planet of mass $M$ and radius $R$, the total energy must be zero: $\\frac{1}{2}mv_{esc}^2 - \\frac{GMm}{R} = 0$, so $v_{esc} = \\sqrt{\\frac{2GM}{R}}$. Notice it is independent of the projectile's mass and of the launch direction.",
              "zh": "逃逸速度由能量守恒得出。要恰好从质量 $M$、半径 $R$ 的行星表面逃逸，总能量必须为零：$\\frac{1}{2}mv_{esc}^2 - \\frac{GMm}{R} = 0$，故 $v_{esc} = \\sqrt{\\frac{2GM}{R}}$。注意它与抛体的质量和发射方向都无关。"
            },
            {
              "type": "h3",
              "en": "Circular Orbits and Kepler's Laws",
              "zh": "圆轨道与开普勒定律"
            },
            {
              "type": "p",
              "en": "For a circular orbit of radius $r$, gravity supplies the centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$, so $v^2 = \\frac{GM}{r}$ and $K = \\frac{GMm}{2r}$. The kinetic energy is exactly half the magnitude of the potential energy ($K = -\\frac{U}{2}$), and the total energy is negative — the hallmark of a bound orbit:",
              "zh": "对半径为 $r$ 的圆轨道，引力提供向心力：$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$，故 $v^2 = \\frac{GM}{r}$，$K = \\frac{GMm}{2r}$。动能恰好是势能大小的一半（$K = -\\frac{U}{2}$），总能量为负——这是束缚轨道的标志："
            },
            {
              "type": "math",
              "tex": "E = K + U = \\frac{GMm}{2r} - \\frac{GMm}{r} = -\\frac{GMm}{2r}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Kepler's first law: planets move on ellipses with the Sun at one focus.",
                  "zh": "开普勒第一定律：行星沿椭圆轨道运动，太阳位于椭圆的一个焦点上。"
                },
                {
                  "en": "Kepler's second law: the radius vector sweeps out equal areas in equal times — a direct consequence of angular momentum conservation.",
                  "zh": "开普勒第二定律：矢径在相等时间内扫过相等面积——这是角动量守恒的直接结果。"
                },
                {
                  "en": "Kepler's third law: $T^2 \\propto r^3$. For circular orbits, setting $\\frac{GMm}{r^2} = m\\left(\\frac{2\\pi}{T}\\right)^2 r$ gives $T^2 = \\frac{4\\pi^2}{GM}r^3$.",
                  "zh": "开普勒第三定律：$T^2 \\propto r^3$。对圆轨道，令 $\\frac{GMm}{r^2} = m\\left(\\frac{2\\pi}{T}\\right)^2 r$ 得 $T^2 = \\frac{4\\pi^2}{GM}r^3$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Proof of the second law: in time $dt$ the radius vector sweeps a thin triangle of area $dA = \\frac{1}{2}|\\vec{r} \\times \\vec{v}\\,dt|$. Since gravity is central, the torque about the Sun is zero and $L = |\\vec{r} \\times m\\vec{v}|$ is constant, so the areal rate is constant:",
              "zh": "第二定律的证明：在时间 $dt$ 内，矢径扫过面积为 $dA = \\frac{1}{2}|\\vec{r} \\times \\vec{v}\\,dt|$ 的细三角形。由于引力是有心力，关于太阳的转矩为零，$L = |\\vec{r} \\times m\\vec{v}|$ 守恒，因此扫面速率恒定："
            },
            {
              "type": "math",
              "tex": "\\frac{dA}{dt} = \\frac{|\\vec{r} \\times \\vec{v}|}{2} = \\frac{L}{2m} = \\text{constant}"
            },
            {
              "type": "p",
              "en": "A useful corollary for elliptical orbits: at perihelion and aphelion the velocity is perpendicular to the radius, so $L = mv_p r_p = mv_a r_a$, giving $\\frac{v_p}{v_a} = \\frac{r_a}{r_p}$ — the planet moves fastest at its closest approach.",
              "zh": "椭圆轨道的一个有用推论：在近日点和远日点速度垂直于矢径，故 $L = mv_p r_p = mv_a r_a$，即 $\\frac{v_p}{v_a} = \\frac{r_a}{r_p}$——行星在最接近太阳处运动最快。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Clay dropped on a turntable",
                "zh": "例题 1：粘土落在转盘上"
              },
              "problem": {
                "en": "A uniform disk of mass $4\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ spins freely at $\\omega_0 = 4\\,\\text{rad/s}$ about a frictionless vertical axle through its center. A lump of clay of mass $2\\,\\text{kg}$ drops straight down and sticks to the rim. Find the new angular speed and the kinetic energy lost.",
                "zh": "质量 $4\\,\\text{kg}$、半径 $0.5\\,\\text{m}$ 的均匀圆盘绕过其中心的无摩擦竖直轴以 $\\omega_0 = 4\\,\\text{rad/s}$ 自由旋转。一块质量 $2\\,\\text{kg}$ 的粘土竖直落下并粘在盘缘。求新的角速度和损失的动能。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The axle force and the clay's weight exert no torque about the axle, so angular momentum about the axle is conserved. Disk: $I_0 = \\frac{1}{2}(4)(0.5)^2 = 0.5\\,\\text{kg·m}^2$; clay at the rim adds $mR^2 = 2(0.5)^2 = 0.5\\,\\text{kg·m}^2$.",
                  "zh": "轴承力和粘土的重力对转轴都不产生转矩，故关于转轴的角动量守恒。圆盘：$I_0 = \\frac{1}{2}(4)(0.5)^2 = 0.5\\,\\text{kg·m}^2$；盘缘的粘土增加 $mR^2 = 2(0.5)^2 = 0.5\\,\\text{kg·m}^2$。"
                },
                {
                  "type": "math",
                  "tex": "\\omega = \\frac{I_0\\omega_0}{I_0 + mR^2} = \\frac{(0.5)(4)}{1.0} = 2\\,\\text{rad/s}"
                },
                {
                  "type": "p",
                  "en": "Kinetic energy: $K_0 = \\frac{1}{2}(0.5)(4)^2 = 4\\,\\text{J}$ and $K = \\frac{1}{2}(1.0)(2)^2 = 2\\,\\text{J}$, so $2\\,\\text{J}$ is dissipated as the clay grips the disk. Angular momentum is conserved; kinetic energy is not.",
                  "zh": "动能：$K_0 = \\frac{1}{2}(0.5)(4)^2 = 4\\,\\text{J}$，$K = \\frac{1}{2}(1.0)(2)^2 = 2\\,\\text{J}$，粘土与盘面咬合的过程耗散了 $2\\,\\text{J}$。角动量守恒，动能不守恒。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Energetics of a circular orbit",
                "zh": "例题 2：圆轨道的能量分析"
              },
              "problem": {
                "en": "A $1000\\,\\text{kg}$ satellite is in a circular orbit of radius $r = 2.0 \\times 10^7\\,\\text{m}$ around Earth. Take $GM_E = 4.0 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$. Find its orbital speed, kinetic energy, potential energy, and total energy.",
                "zh": "一颗 $1000\\,\\text{kg}$ 的卫星绕地球做半径 $r = 2.0 \\times 10^7\\,\\text{m}$ 的圆轨道运动。取 $GM_E = 4.0 \\times 10^{14}\\,\\text{m}^3/\\text{s}^2$。求其轨道速率、动能、势能和总能量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "From $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$: $v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{4.0 \\times 10^{14}}{2.0 \\times 10^7}} = \\sqrt{2.0 \\times 10^7} \\approx 4.5 \\times 10^3\\,\\text{m/s}$.",
                  "zh": "由 $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$：$v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{4.0 \\times 10^{14}}{2.0 \\times 10^7}} = \\sqrt{2.0 \\times 10^7} \\approx 4.5 \\times 10^3\\,\\text{m/s}$。"
                },
                {
                  "type": "math",
                  "tex": "K = \\frac{GMm}{2r} = 1.0 \\times 10^{10}\\,\\text{J}, \\quad U = -\\frac{GMm}{r} = -2.0 \\times 10^{10}\\,\\text{J}"
                },
                {
                  "type": "p",
                  "en": "Total energy: $E = K + U = -1.0 \\times 10^{10}\\,\\text{J}$. Note the pattern $E = -K = \\frac{U}{2}$, true for every circular orbit.",
                  "zh": "总能量：$E = K + U = -1.0 \\times 10^{10}\\,\\text{J}$。注意 $E = -K = \\frac{U}{2}$ 这一规律对所有圆轨道都成立。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A particle moves at constant velocity along a straight line that misses the origin by perpendicular distance $d$. Its angular momentum about the origin is",
                "zh": "一质点沿一条与原点垂直距离为 $d$ 的直线匀速运动。它关于原点的角动量"
              },
              "choices": [
                "zero, because the path is straight",
                "constant and nonzero, with magnitude $mvd$",
                "increasing as it approaches the origin",
                "constant in magnitude but changing in direction"
              ],
              "answer": 1,
              "explanation": {
                "en": "$L = mvr\\sin\\theta = mv\\,d$, where the lever arm $d$ is the same for every point on the line, so $L$ is constant and nonzero. \"Zero because straight\" is the classic trap — angular momentum depends on the reference point, not on whether the path curves. This is consistent with $\\tau = dL/dt$: no force means no torque, so $L$ cannot change.",
                "zh": "$L = mvr\\sin\\theta = mv\\,d$，直线上每一点的力臂都是同一个 $d$，故 $L$ 恒定且不为零。\"直线运动所以为零\"是经典陷阱——角动量取决于参考点，而不是路径是否弯曲。这与 $\\tau = dL/dt$ 一致：无力则无转矩，$L$ 不会改变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An ice skater spinning with arms extended pulls her arms in, halving her rotational inertia. Which statement is correct?",
                "zh": "一名张开双臂旋转的滑冰运动员收拢手臂，使转动惯量减半。下列哪个说法正确？"
              },
              "choices": [
                "Her angular momentum doubles and her kinetic energy doubles",
                "Her angular momentum is constant and her kinetic energy is constant",
                "Her angular momentum is constant and her kinetic energy doubles",
                "Her angular momentum halves and her kinetic energy is constant"
              ],
              "answer": 2,
              "explanation": {
                "en": "With no external torque, $L = I\\omega$ is constant, so halving $I$ doubles $\\omega$. Then $K = \\frac{L^2}{2I}$ doubles. Choice (b) is tempting — \"everything is conserved\" — but the skater's muscles do positive work pulling her arms inward against the centripetal tendency, adding kinetic energy.",
                "zh": "无外转矩时 $L = I\\omega$ 守恒，$I$ 减半则 $\\omega$ 加倍。于是 $K = \\frac{L^2}{2I}$ 加倍。选项 (b)（\"一切都守恒\"）有迷惑性——但运动员的肌肉在向内收臂时克服离心趋势做正功，增加了动能。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball of clay flies horizontally and sticks to the end of a uniform rod that hangs from a frictionless pivot at its top. During the brief collision, which quantity of the clay-rod system is conserved?",
                "zh": "一团粘土水平飞来，粘在一根顶端悬挂于无摩擦转轴上的均匀杆的下端。在短暂的碰撞过程中，粘土-杆系统的哪个量守恒？"
              },
              "choices": [
                "Linear momentum only",
                "Kinetic energy and angular momentum about the pivot",
                "Both linear and angular momentum",
                "Angular momentum about the pivot only"
              ],
              "answer": 3,
              "explanation": {
                "en": "The pivot exerts an external impulsive force, so linear momentum is not conserved; and the clay sticks (perfectly inelastic), so kinetic energy is lost. The pivot force has zero lever arm about the pivot, so angular momentum about the pivot is conserved. Choice (c) is the common error of forgetting the pivot's impulsive reaction force.",
                "zh": "转轴施加外部冲击力，故线动量不守恒；粘土粘连（完全非弹性），动能有损失。轴承力对转轴的力臂为零，所以关于转轴的角动量守恒。选项 (c) 是忘记轴承冲击反力的常见错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A satellite is in a circular orbit with kinetic energy $K$. Its total mechanical energy $E$ and potential energy $U$ satisfy",
                "zh": "一颗卫星在圆轨道上运行，动能为 $K$。其总机械能 $E$ 和势能 $U$ 满足"
              },
              "choices": [
                "$E = -K$ and $U = -2K$",
                "$E = K$ and $U = 2K$",
                "$E = -2K$ and $U = -K$",
                "$E = 0$ and $U = -K$"
              ],
              "answer": 0,
              "explanation": {
                "en": "From $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$, $K = \\frac{GMm}{2r}$ while $U = -\\frac{GMm}{r} = -2K$, so $E = K + U = -K$. Choice (d) confuses a bound orbit ($E < 0$) with the escape condition ($E = 0$).",
                "zh": "由 $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$ 得 $K = \\frac{GMm}{2r}$，而 $U = -\\frac{GMm}{r} = -2K$，故 $E = K + U = -K$。选项 (d) 把束缚轨道（$E < 0$）与逃逸条件（$E = 0$）混淆了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Students measure the orbital period $T$ and orbital radius $r$ of four moons of a planet, then plot $T^2$ on the vertical axis versus $r^3$ on the horizontal axis, obtaining a straight line through the origin. The slope of this line equals",
                "zh": "学生测量某行星四颗卫星的轨道周期 $T$ 和轨道半径 $r$，然后以 $T^2$ 为纵轴、$r^3$ 为横轴作图，得到一条过原点的直线。该直线的斜率等于"
              },
              "choices": [
                "$\\frac{GM}{4\\pi^2}$",
                "$\\frac{2\\pi}{GM}$",
                "$\\frac{4\\pi^2}{GM}$",
                "$GM$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Kepler's third law for circular orbits is $T^2 = \\frac{4\\pi^2}{GM}r^3$, a line of slope $\\frac{4\\pi^2}{GM}$ in these variables. Measuring the slope lets you compute the planet's mass $M$ — a favorite AP data-analysis task. Choice (a) is the reciprocal, from solving the linearization backwards.",
                "zh": "圆轨道的开普勒第三定律为 $T^2 = \\frac{4\\pi^2}{GM}r^3$，在这组变量下是斜率为 $\\frac{4\\pi^2}{GM}$ 的直线。测出斜率即可算出行星质量 $M$——这是 AP 数据分析题的常见考法。选项 (a) 是把线性化关系颠倒后得到的倒数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform rod of mass $3\\,\\text{kg}$ and length $2\\,\\text{m}$ can rotate freely about a pivot at one end ($I_{rod} = \\frac{1}{3}ML^2$). A $0.5\\,\\text{kg}$ dart moving at $12\\,\\text{m/s}$ perpendicular to the rod strikes and sticks to the free end. Find the angular speed just after the collision, in rad/s. Give an integer.",
                "zh": "质量 $3\\,\\text{kg}$、长 $2\\,\\text{m}$ 的均匀杆可绕一端的转轴自由转动（$I_{rod} = \\frac{1}{3}ML^2$）。一支 $0.5\\,\\text{kg}$ 的飞镖以 $12\\,\\text{m/s}$ 垂直于杆的方向击中杆的自由端并粘住。求碰撞后瞬间的角速度（rad/s）。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "2 rad/s"
              ],
              "explanation": {
                "en": "Angular momentum about the pivot: $L_i = mvL = (0.5)(12)(2) = 12\\,\\text{kg·m}^2/\\text{s}$. Final inertia: $I = \\frac{1}{3}(3)(2)^2 + (0.5)(2)^2 = 4 + 2 = 6\\,\\text{kg·m}^2$. So $\\omega = \\frac{12}{6} = 2\\,\\text{rad/s}$.",
                "zh": "关于转轴的角动量：$L_i = mvL = (0.5)(12)(2) = 12\\,\\text{kg·m}^2/\\text{s}$。末态转动惯量：$I = \\frac{1}{3}(3)(2)^2 + (0.5)(2)^2 = 4 + 2 = 6\\,\\text{kg·m}^2$。故 $\\omega = \\frac{12}{6} = 2\\,\\text{rad/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A planet has $GM = 3.2 \\times 10^{13}\\,\\text{m}^3/\\text{s}^2$ and radius $R = 1.0 \\times 10^6\\,\\text{m}$. Find the escape speed from its surface, in m/s. Give an integer.",
                "zh": "某行星的 $GM = 3.2 \\times 10^{13}\\,\\text{m}^3/\\text{s}^2$，半径 $R = 1.0 \\times 10^6\\,\\text{m}$。求从其表面逃逸的逃逸速度（m/s）。请填一个整数。"
              },
              "answer": "8000",
              "accept": [
                "8000.0",
                "8000 m/s",
                "8e3"
              ],
              "explanation": {
                "en": "Setting total energy to zero: $v_{esc} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{2(3.2 \\times 10^{13})}{1.0 \\times 10^6}} = \\sqrt{6.4 \\times 10^7} = 8000\\,\\text{m/s}$. Forgetting the factor of 2 (using the circular-orbit speed $\\sqrt{GM/R} \\approx 5657\\,\\text{m/s}$) is the standard mistake.",
                "zh": "令总能量为零：$v_{esc} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{\\frac{2(3.2 \\times 10^{13})}{1.0 \\times 10^6}} = \\sqrt{6.4 \\times 10^7} = 8000\\,\\text{m/s}$。漏掉因子 2（误用圆轨道速度 $\\sqrt{GM/R} \\approx 5657\\,\\text{m/s}$）是最常见的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A comet orbits the Sun on an ellipse. Its aphelion distance is 5 times its perihelion distance ($r_a = 5r_p$). What is the ratio of its speed at perihelion to its speed at aphelion, $v_p / v_a$? Give an integer.",
                "zh": "一颗彗星绕太阳沿椭圆轨道运动，远日点距离是近日点距离的 5 倍（$r_a = 5r_p$）。它在近日点与远日点的速率之比 $v_p / v_a$ 是多少？请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "5/1"
              ],
              "explanation": {
                "en": "At perihelion and aphelion the velocity is perpendicular to the radius vector, so conservation of angular momentum gives $mv_p r_p = mv_a r_a$, hence $\\frac{v_p}{v_a} = \\frac{r_a}{r_p} = 5$. This is Kepler's second law in action: the comet sweeps equal areas in equal times, so it must move fastest when closest to the Sun.",
                "zh": "在近日点和远日点，速度垂直于矢径，角动量守恒给出 $mv_p r_p = mv_a r_a$，故 $\\frac{v_p}{v_a} = \\frac{r_a}{r_p} = 5$。这正是开普勒第二定律的体现：彗星在相等时间内扫过相等面积，因此离太阳最近时运动最快。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "oscillations",
      "title": "Unit 7: Oscillations",
      "titleZh": "第七单元：振动",
      "lessons": [
        {
          "id": "shm-differential-equation",
          "title": "SHM as a Differential Equation",
          "titleZh": "简谐运动的微分方程",
          "content": [
            {
              "type": "h2",
              "en": "From a Restoring Force to an Equation of Motion",
              "zh": "从回复力到运动方程"
            },
            {
              "type": "p",
              "en": "Consider a block of mass $m$ on a frictionless surface attached to a spring of stiffness $k$. When the block is displaced by $x$ from equilibrium, the spring pulls it back with a force proportional to the displacement and opposite in direction: $F = -kx$ (Hooke’s law). This is the defining feature of simple harmonic motion (SHM): a restoring force linear in the displacement.",
              "zh": "考虑一个质量为 $m$ 的滑块，置于无摩擦表面上，连接劲度系数为 $k$ 的弹簧。当滑块偏离平衡位置 $x$ 时，弹簧以正比于位移、方向相反的力把它拉回：$F = -kx$（胡克定律）。这正是简谐运动（SHM）的本质：回复力与位移成线性关系。"
            },
            {
              "type": "p",
              "en": "Applying Newton’s second law $F = m\\ddot{x}$ (where $\\ddot{x} = d^2x/dt^2$) turns this force law into a differential equation:",
              "zh": "应用牛顿第二定律 $F = m\\ddot{x}$（其中 $\\ddot{x} = d^2x/dt^2$），把这个力的关系变成一个微分方程："
            },
            {
              "type": "math",
              "tex": "m\\frac{d^2x}{dt^2} = -kx \\;\\Rightarrow\\; \\frac{d^2x}{dt^2} = -\\frac{k}{m}\\,x"
            },
            {
              "type": "p",
              "en": "Defining the angular frequency by $\\omega^2 = k/m$, every SHM system reduces to the same universal equation. Whenever you can show a system obeys it, the motion is guaranteed to be simple harmonic with angular frequency $\\omega$.",
              "zh": "定义角频率 $\\omega^2 = k/m$，任何简谐系统都化为同一个普适方程。只要能证明某系统满足它，运动就必然是角频率为 $\\omega$ 的简谐运动。"
            },
            {
              "type": "math",
              "tex": "\\ddot{x} = -\\omega^2 x, \\qquad \\omega = \\sqrt{\\frac{k}{m}}"
            },
            {
              "type": "h3",
              "en": "Verifying the Solution",
              "zh": "验证解"
            },
            {
              "type": "p",
              "en": "We claim that $x(t) = A\\cos(\\omega t + \\phi)$ solves the equation, where $A$ is the amplitude and $\\phi$ is the phase constant. Differentiate twice and substitute:",
              "zh": "我们断言 $x(t) = A\\cos(\\omega t + \\phi)$ 是该方程的解，其中 $A$ 是振幅，$\\phi$ 是相位常数。求两次导并代入："
            },
            {
              "type": "math",
              "tex": "\\dot{x} = -A\\omega\\sin(\\omega t + \\phi), \\qquad \\ddot{x} = -A\\omega^2\\cos(\\omega t + \\phi)"
            },
            {
              "type": "p",
              "en": "The second derivative is exactly $-\\omega^2$ times the original position, so $\\ddot{x} = -\\omega^2 x$ is satisfied for any $A$ and $\\phi$. The period follows from the argument advancing by $2\\pi$: $T = 2\\pi/\\omega$.",
              "zh": "二阶导数恰好等于 $-\\omega^2$ 乘以原位置，因此对任意 $A$ 和 $\\phi$ 都满足 $\\ddot{x} = -\\omega^2 x$。周期由相位每增加 $2\\pi$ 得出：$T = 2\\pi/\\omega$。"
            },
            {
              "type": "h3",
              "en": "Fixing the Phase Constant from Initial Conditions",
              "zh": "由初始条件确定相位常数"
            },
            {
              "type": "p",
              "en": "The constants $A$ and $\\phi$ are not set by the differential equation — they are fixed by the initial position and velocity. Evaluating at $t = 0$:",
              "zh": "常数 $A$ 和 $\\phi$ 不由微分方程决定——它们由初始位置和速度确定。在 $t = 0$ 处求值："
            },
            {
              "type": "math",
              "tex": "x_0 = A\\cos\\phi, \\qquad v_0 = -A\\omega\\sin\\phi"
            },
            {
              "type": "p",
              "en": "Dividing gives $\\tan\\phi = -v_0/(\\omega x_0)$, and $A = \\sqrt{x_0^2 + (v_0/\\omega)^2}$. If the mass is released from rest at $x_0 = +A$, then $v_0 = 0$ forces $\\phi = 0$; if it starts at equilibrium moving in the $+x$ direction, $\\phi = -\\pi/2$.",
              "zh": "相除得 $\\tan\\phi = -v_0/(\\omega x_0)$，且 $A = \\sqrt{x_0^2 + (v_0/\\omega)^2}$。若质点从 $x_0 = +A$ 静止释放，则 $v_0 = 0$ 迫使 $\\phi = 0$；若从平衡位置沿 $+x$ 方向出发，则 $\\phi = -\\pi/2$。"
            },
            {
              "type": "h3",
              "en": "Energy and Time Averages",
              "zh": "能量与时间平均"
            },
            {
              "type": "p",
              "en": "The total mechanical energy is the sum of spring potential and kinetic energy. Using the solution, $\\tfrac{1}{2}kx^2 + \\tfrac{1}{2}m\\dot{x}^2$ collapses to a constant because $\\sin^2 + \\cos^2 = 1$ and $m\\omega^2 = k$:",
              "zh": "总机械能是弹性势能与动能之和。代入解后，由于 $\\sin^2 + \\cos^2 = 1$ 且 $m\\omega^2 = k$，$\\tfrac{1}{2}kx^2 + \\tfrac{1}{2}m\\dot{x}^2$ 化为常数："
            },
            {
              "type": "math",
              "tex": "E = \\tfrac{1}{2}kA^2 = \\text{constant}"
            },
            {
              "type": "p",
              "en": "Energy sloshes back and forth between potential and kinetic. Over one full period the average of $\\cos^2(\\omega t + \\phi)$ is $\\tfrac{1}{2}$, so the time-averaged potential and kinetic energies are equal, each carrying half the total:",
              "zh": "能量在势能与动能之间来回转换。在一个完整周期内 $\\cos^2(\\omega t + \\phi)$ 的平均值为 $\\tfrac{1}{2}$，因此势能与动能的时间平均值相等，各占总能量的一半："
            },
            {
              "type": "math",
              "tex": "\\langle U \\rangle = \\langle K \\rangle = \\tfrac{1}{4}kA^2 = \\tfrac{1}{2}E"
            },
            {
              "type": "note",
              "en": "AP exam tip: $\\omega = \\sqrt{k/m}$ is an angular frequency in rad/s, NOT the frequency $f$ in hertz. They differ by a factor of $2\\pi$: $\\omega = 2\\pi f = 2\\pi/T$. A very common error on the exam is to report $\\sqrt{k/m}$ as the period or to forget the $2\\pi$ when converting. Also note that $\\omega$ is independent of amplitude — doubling $A$ does not change the period.",
              "zh": "AP 考试提示：$\\omega = \\sqrt{k/m}$ 是角频率，单位为 rad/s，不是以赫兹为单位的频率 $f$。二者相差 $2\\pi$：$\\omega = 2\\pi f = 2\\pi/T$。考试中很常见的错误是把 $\\sqrt{k/m}$ 当作周期，或换算时漏掉 $2\\pi$。还要注意 $\\omega$ 与振幅无关——把 $A$ 加倍不改变周期。"
            },
            {
              "type": "h3",
              "en": "The Simple Pendulum: Small-Angle Approximation",
              "zh": "单摆：小角度近似"
            },
            {
              "type": "p",
              "en": "A bob of mass $m$ on a massless string of length $L$ swings under gravity. Taking torques about the pivot, the restoring torque is $\\tau = -mgL\\sin\\theta$ and the rotational form of Newton’s second law gives $mL^2\\ddot{\\theta} = -mgL\\sin\\theta$. This is not linear because of $\\sin\\theta$. For small angles we use the Taylor approximation $\\sin\\theta \\approx \\theta$:",
              "zh": "质量为 $m$ 的摆球挂在长为 $L$ 的无质量细绳上，在重力作用下摆动。对支点取力矩，回复力矩为 $\\tau = -mgL\\sin\\theta$，牛顿第二定律的转动形式给出 $mL^2\\ddot{\\theta} = -mgL\\sin\\theta$。由于 $\\sin\\theta$ 的存在，它不是线性的。对于小角度，用泰勒近似 $\\sin\\theta \\approx \\theta$："
            },
            {
              "type": "math",
              "tex": "\\ddot{\\theta} = -\\frac{g}{L}\\,\\theta \\;\\Rightarrow\\; \\omega = \\sqrt{\\frac{g}{L}}, \\quad T = 2\\pi\\sqrt{\\frac{L}{g}}"
            },
            {
              "type": "p",
              "en": "The linearized equation has the same universal form $\\ddot{\\theta} = -\\omega^2\\theta$, so the small-amplitude pendulum is simple harmonic with a period independent of both amplitude and bob mass.",
              "zh": "线性化方程具有相同的普适形式 $\\ddot{\\theta} = -\\omega^2\\theta$，因此小振幅单摆是简谐运动，其周期与振幅和摆球质量都无关。"
            },
            {
              "type": "h3",
              "en": "The Physical Pendulum",
              "zh": "物理摆（复摆）"
            },
            {
              "type": "p",
              "en": "When the swinging object is an extended rigid body rather than a point mass, it is a physical pendulum. Let $I$ be the moment of inertia about the pivot and $d$ the distance from pivot to center of mass. The small-angle torque equation $I\\ddot{\\theta} = -mgd\\,\\theta$ again gives SHM:",
              "zh": "当摆动的物体是延展的刚体而非质点时，就是物理摆。设 $I$ 为绕支点的转动惯量，$d$ 为支点到质心的距离。小角度力矩方程 $I\\ddot{\\theta} = -mgd\\,\\theta$ 同样给出简谐运动："
            },
            {
              "type": "math",
              "tex": "\\omega = \\sqrt{\\frac{mgd}{I}}, \\qquad T = 2\\pi\\sqrt{\\frac{I}{mgd}}"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Rod pivoted at one end",
                "zh": "例题 1：一端为支点的均匀杆"
              },
              "problem": {
                "en": "A uniform thin rod of length $L = 1.0\\,\\text{m}$ is pivoted at one end and swings as a physical pendulum. Find its period of small oscillations. Use $g = 9.8\\,\\text{m/s}^2$ and the moment of inertia of a rod about its end, $I = \\tfrac{1}{3}mL^2$.",
                "zh": "一根长 $L = 1.0\\,\\text{m}$ 的均匀细杆以一端为支点，作物理摆摆动。求其小振动周期。取 $g = 9.8\\,\\text{m/s}^2$，杆绕一端的转动惯量为 $I = \\tfrac{1}{3}mL^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The center of mass of a uniform rod is at its midpoint, so $d = L/2$. Substitute $I = \\tfrac{1}{3}mL^2$ and $d = L/2$ into the physical-pendulum formula; the mass $m$ cancels:",
                  "zh": "均匀杆的质心在中点，所以 $d = L/2$。把 $I = \\tfrac{1}{3}mL^2$ 和 $d = L/2$ 代入物理摆公式，质量 $m$ 消去："
                },
                {
                  "type": "math",
                  "tex": "T = 2\\pi\\sqrt{\\frac{\\tfrac{1}{3}mL^2}{mg(L/2)}} = 2\\pi\\sqrt{\\frac{2L}{3g}}"
                },
                {
                  "type": "p",
                  "en": "Plugging in numbers:",
                  "zh": "代入数值："
                },
                {
                  "type": "math",
                  "tex": "T = 2\\pi\\sqrt{\\frac{2(1.0)}{3(9.8)}} = 2\\pi\\sqrt{0.0680} \\approx 1.64\\,\\text{s}"
                },
                {
                  "type": "p",
                  "en": "Note the effective length of an equivalent simple pendulum would be $2L/3 \\approx 0.67\\,\\text{m}$, shorter than the rod itself — the distributed mass makes it swing faster than a bob at the tip.",
                  "zh": "注意等效单摆的有效长度为 $2L/3 \\approx 0.67\\,\\text{m}$，比杆本身还短——分布的质量使它比末端的摆球摆得更快。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Combining springs",
                "zh": "例题 2：弹簧的组合"
              },
              "problem": {
                "en": "A block of mass $m = 2.0\\,\\text{kg}$ is connected to two springs of stiffness $k_1 = 300\\,\\text{N/m}$ and $k_2 = 600\\,\\text{N/m}$. Find the effective stiffness and the angular frequency (a) when the springs are in parallel (both attached side by side to the block), and (b) when they are in series (joined end to end).",
                "zh": "一个质量 $m = 2.0\\,\\text{kg}$ 的滑块连接两根劲度系数分别为 $k_1 = 300\\,\\text{N/m}$ 和 $k_2 = 600\\,\\text{N/m}$ 的弹簧。求（a）两弹簧并联（并排接在滑块上）和（b）串联（首尾相接）时的等效劲度系数和角频率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Parallel springs share the same displacement $x$, so their forces add: $F = -(k_1 + k_2)x$. The effective stiffness is the sum:",
                  "zh": "并联弹簧共享相同的位移 $x$，它们的力相加：$F = -(k_1 + k_2)x$。等效劲度系数为二者之和："
                },
                {
                  "type": "math",
                  "tex": "k_\\text{parallel} = k_1 + k_2 = 300 + 600 = 900\\,\\text{N/m}"
                },
                {
                  "type": "math",
                  "tex": "\\omega = \\sqrt{\\frac{900}{2.0}} = \\sqrt{450} \\approx 21.2\\,\\text{rad/s}"
                },
                {
                  "type": "p",
                  "en": "Series springs feel the same tension but their stretches add, so the compliances (inverse stiffnesses) add:",
                  "zh": "串联弹簧受到相同的张力，但它们的伸长量相加，因此柔度（劲度系数的倒数）相加："
                },
                {
                  "type": "math",
                  "tex": "\\frac{1}{k_\\text{series}} = \\frac{1}{k_1} + \\frac{1}{k_2} = \\frac{1}{300} + \\frac{1}{600} = \\frac{3}{600} \\;\\Rightarrow\\; k_\\text{series} = 200\\,\\text{N/m}"
                },
                {
                  "type": "math",
                  "tex": "\\omega = \\sqrt{\\frac{200}{2.0}} = \\sqrt{100} = 10\\,\\text{rad/s}"
                },
                {
                  "type": "p",
                  "en": "As expected, parallel springs are stiffer (higher $k$, faster oscillation) and series springs are softer than either spring alone.",
                  "zh": "正如预期，并联更硬（$k$ 更大，振动更快），而串联比任一根单独的弹簧都更软。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A mass-spring system obeys $\\ddot{x} = -\\omega^2 x$. In terms of the mass $m$ and spring constant $k$, the angular frequency $\\omega$ equals:",
                "zh": "一个弹簧振子满足 $\\ddot{x} = -\\omega^2 x$。用质量 $m$ 和弹簧常数 $k$ 表示，角频率 $\\omega$ 等于："
              },
              "choices": [
                "$\\sqrt{m/k}$",
                "$k/m$",
                "$\\sqrt{k/m}$",
                "$2\\pi\\sqrt{m/k}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "From $m\\ddot{x} = -kx$ we get $\\ddot{x} = -(k/m)x$, so $\\omega^2 = k/m$ and $\\omega = \\sqrt{k/m}$. The tempting choice $\\sqrt{m/k}$ has the ratio inverted, and $2\\pi\\sqrt{m/k}$ is actually the period $T$, not $\\omega$.",
                "zh": "由 $m\\ddot{x} = -kx$ 得 $\\ddot{x} = -(k/m)x$，故 $\\omega^2 = k/m$，$\\omega = \\sqrt{k/m}$。诱人的选项 $\\sqrt{m/k}$ 把比值倒了，而 $2\\pi\\sqrt{m/k}$ 其实是周期 $T$，不是 $\\omega$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which function is a solution of the differential equation $\\ddot{x} = -\\omega^2 x$?",
                "zh": "下列哪个函数是微分方程 $\\ddot{x} = -\\omega^2 x$ 的解？"
              },
              "choices": [
                "$x = Ae^{\\omega t}$",
                "$x = A\\cos(\\omega t + \\phi)$",
                "$x = At^2$",
                "$x = A\\omega t$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Differentiating $A\\cos(\\omega t + \\phi)$ twice gives $-\\omega^2 A\\cos(\\omega t + \\phi) = -\\omega^2 x$. The exponential $Ae^{\\omega t}$ satisfies $\\ddot{x} = +\\omega^2 x$ (note the sign), which describes runaway growth, not oscillation.",
                "zh": "对 $A\\cos(\\omega t + \\phi)$ 求两次导得 $-\\omega^2 A\\cos(\\omega t + \\phi) = -\\omega^2 x$。指数函数 $Ae^{\\omega t}$ 满足 $\\ddot{x} = +\\omega^2 x$（注意符号），描述的是发散增长而非振动。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A block is pulled to $x = +A$ and released from rest at $t = 0$. Using $x(t) = A\\cos(\\omega t + \\phi)$, the phase constant $\\phi$ is:",
                "zh": "一滑块被拉到 $x = +A$，在 $t = 0$ 时由静止释放。用 $x(t) = A\\cos(\\omega t + \\phi)$，相位常数 $\\phi$ 为："
              },
              "choices": [
                "$0$",
                "$\\pi/2$",
                "$-\\pi/2$",
                "$\\pi$"
              ],
              "answer": 0,
              "explanation": {
                "en": "At $t=0$, $x_0 = A\\cos\\phi = +A$ requires $\\cos\\phi = 1$, and $v_0 = -A\\omega\\sin\\phi = 0$ requires $\\sin\\phi = 0$. Both are met by $\\phi = 0$. Choosing $\\phi = \\pi$ would give $x_0 = -A$ (the opposite extreme).",
                "zh": "在 $t=0$，$x_0 = A\\cos\\phi = +A$ 要求 $\\cos\\phi = 1$，而 $v_0 = -A\\omega\\sin\\phi = 0$ 要求 $\\sin\\phi = 0$。$\\phi = 0$ 同时满足两者。选 $\\phi = \\pi$ 会给出 $x_0 = -A$（相反的极端）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two springs of stiffness $k_1$ and $k_2$ are attached in parallel to the same block. The effective spring constant is:",
                "zh": "两根劲度系数为 $k_1$ 和 $k_2$ 的弹簧并联接在同一滑块上。等效弹簧常数为："
              },
              "choices": [
                "$\\dfrac{k_1 k_2}{k_1 + k_2}$",
                "$k_1 + k_2$",
                "$\\sqrt{k_1 k_2}$",
                "$\\dfrac{k_1 + k_2}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Parallel springs undergo the same displacement, so their restoring forces add: $k_\\text{eff} = k_1 + k_2$. The distractor $k_1 k_2/(k_1+k_2)$ is the series result, where the springs share the same tension but their stretches add.",
                "zh": "并联弹簧发生相同的位移，故回复力相加：$k_\\text{eff} = k_1 + k_2$。干扰项 $k_1 k_2/(k_1+k_2)$ 是串联的结果，那时弹簧受相同张力但伸长量相加。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a lab, students measure the period $T$ of a simple pendulum for several lengths $L$ and plot $T^2$ against $L$. The graph is a straight line through the origin. Its slope equals:",
                "zh": "在实验中，学生测量单摆在不同长度 $L$ 下的周期 $T$，并作 $T^2$ 关于 $L$ 的图。图像是过原点的直线，其斜率等于："
              },
              "choices": [
                "$\\dfrac{g}{4\\pi^2}$",
                "$\\dfrac{4\\pi^2}{g}$",
                "$\\dfrac{2\\pi}{g}$",
                "$4\\pi^2 g$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Squaring $T = 2\\pi\\sqrt{L/g}$ gives $T^2 = (4\\pi^2/g)L$, a line through the origin with slope $4\\pi^2/g$. So $g = 4\\pi^2/\\text{slope}$. The inverted choice $g/4\\pi^2$ is a common sign of forgetting to square or dividing the wrong way.",
                "zh": "将 $T = 2\\pi\\sqrt{L/g}$ 平方得 $T^2 = (4\\pi^2/g)L$，是过原点、斜率为 $4\\pi^2/g$ 的直线。故 $g = 4\\pi^2/\\text{斜率}$。倒置的选项 $g/4\\pi^2$ 常常源于忘记平方或除反了方向。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A block of mass $m = 0.5\\,\\text{kg}$ is attached to a spring with $k = 200\\,\\text{N/m}$. Find the angular frequency $\\omega$ in rad/s. Give an integer.",
                "zh": "质量 $m = 0.5\\,\\text{kg}$ 的滑块连接劲度系数 $k = 200\\,\\text{N/m}$ 的弹簧。求角频率 $\\omega$（rad/s）。请填一个整数。"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20 rad/s"
              ],
              "explanation": {
                "en": "$\\omega = \\sqrt{k/m} = \\sqrt{200/0.5} = \\sqrt{400} = 20\\,\\text{rad/s}$.",
                "zh": "$\\omega = \\sqrt{k/m} = \\sqrt{200/0.5} = \\sqrt{400} = 20\\,\\text{rad/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A spring with $k = 100\\,\\text{N/m}$ oscillates with amplitude $A = 0.2\\,\\text{m}$. Find the total mechanical energy in joules. Give an integer.",
                "zh": "劲度系数 $k = 100\\,\\text{N/m}$ 的弹簧以振幅 $A = 0.2\\,\\text{m}$ 振动。求总机械能（焦耳）。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "2 J"
              ],
              "explanation": {
                "en": "$E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}(100)(0.2)^2 = \\tfrac{1}{2}(100)(0.04) = 2\\,\\text{J}$. A common slip is to forget to square the amplitude, which would wrongly give $10\\,\\text{J}$.",
                "zh": "$E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}(100)(0.2)^2 = \\tfrac{1}{2}(100)(0.04) = 2\\,\\text{J}$。常见失误是忘记把振幅平方，那样会错误地得到 $10\\,\\text{J}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two springs with $k_1 = 300\\,\\text{N/m}$ and $k_2 = 600\\,\\text{N/m}$ are connected in series. Find the effective spring constant in N/m. Give an integer.",
                "zh": "两根 $k_1 = 300\\,\\text{N/m}$ 和 $k_2 = 600\\,\\text{N/m}$ 的弹簧串联。求等效弹簧常数（N/m）。请填一个整数。"
              },
              "answer": "200",
              "accept": [
                "200.0",
                "200 N/m"
              ],
              "explanation": {
                "en": "$\\frac{1}{k} = \\frac{1}{300} + \\frac{1}{600} = \\frac{2}{600} + \\frac{1}{600} = \\frac{3}{600} = \\frac{1}{200}$, so $k = 200\\,\\text{N/m}$. Note the series result is smaller than either spring — adding a spring in series makes the system softer.",
                "zh": "$\\frac{1}{k} = \\frac{1}{300} + \\frac{1}{600} = \\frac{2}{600} + \\frac{1}{600} = \\frac{3}{600} = \\frac{1}{200}$，故 $k = 200\\,\\text{N/m}$。注意串联结果比任一根弹簧都小——串联接入弹簧会让系统更软。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "charges-fields-gauss",
      "title": "Unit 8: Electric Charges, Fields, and Gauss’s Law",
      "titleZh": "第八单元：电荷、电场与高斯定律",
      "lessons": [
        {
          "id": "coulomb-electric-fields",
          "title": "Coulomb’s Law and Electric Fields",
          "titleZh": "库仑定律与电场",
          "content": [
            {
              "type": "h2",
              "en": "Electric Charge and Coulomb’s Law",
              "zh": "电荷与库仑定律"
            },
            {
              "type": "p",
              "en": "Electric charge is a fundamental property of matter that comes in two signs. Charge is quantized: any observable charge is an integer multiple of the elementary charge, $q = ne$ with $e = 1.6\\times10^{-19}\\,\\text{C}$. Charge is also conserved: in any process, the total charge of an isolated system never changes — charge can be transferred between objects but never created or destroyed.",
              "zh": "电荷是物质的基本属性，有正负两种。电荷是量子化的：任何可观测的电荷量都是基本电荷的整数倍，$q = ne$，其中 $e = 1.6\\times10^{-19}\\,\\text{C}$。电荷还满足守恒定律：在任何过程中，孤立系统的总电荷保持不变——电荷可以在物体间转移，但不能被创造或消灭。"
            },
            {
              "type": "p",
              "en": "The force between two point charges $q_1$ and $q_2$ separated by distance $r$ is given by Coulomb’s law. The force acts along the line joining the charges: repulsive for like signs, attractive for opposite signs.",
              "zh": "相距 $r$ 的两个点电荷 $q_1$ 和 $q_2$ 之间的作用力由库仑定律给出。力沿两电荷连线方向：同号相斥，异号相吸。"
            },
            {
              "type": "math",
              "tex": "F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1 q_2|}{r^2} = k\\frac{|q_1 q_2|}{r^2}, \\qquad k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2"
            },
            {
              "type": "p",
              "en": "When several charges act on one charge, use superposition: compute each pairwise Coulomb force as a vector (magnitude from the formula, direction from geometry), then add the vectors component by component. Never add magnitudes blindly — forces in different directions partially cancel.",
              "zh": "当多个电荷同时作用于一个电荷时，使用叠加原理：把每一对库仑力当作矢量计算（大小用公式，方向看几何关系），再按分量把矢量相加。切勿盲目把大小直接相加——方向不同的力会部分抵消。"
            },
            {
              "type": "h3",
              "en": "The Electric Field",
              "zh": "电场"
            },
            {
              "type": "p",
              "en": "The electric field at a point is defined operationally: place a small positive test charge $q_0$ there and measure the force on it. The field is force per unit charge, $\\vec{E} = \\vec{F}/q_0$, with units N/C. Once $\\vec{E}$ is known, the force on any charge $q$ placed in the field is $\\vec{F} = q\\vec{E}$ — parallel to $\\vec{E}$ for positive $q$, antiparallel for negative $q$.",
              "zh": "某点的电场是通过操作来定义的：在该点放一个很小的正试探电荷 $q_0$，测量它受的力。电场等于单位电荷所受的力，$\\vec{E} = \\vec{F}/q_0$，单位为 N/C。一旦知道 $\\vec{E}$，放入场中的任意电荷 $q$ 受力为 $\\vec{F} = q\\vec{E}$——$q$ 为正时与 $\\vec{E}$ 同向，为负时反向。"
            },
            {
              "type": "math",
              "tex": "\\vec{E} = \\frac{\\vec{F}}{q_0}, \\qquad E_{\\text{point charge}} = \\frac{kq}{r^2} \\;\\; \\text{(radially outward for } q>0\\text{)}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Field lines start on positive charges and end on negative charges (or at infinity).",
                  "zh": "电场线从正电荷出发，终止于负电荷（或无穷远）。"
                },
                {
                  "en": "The field direction at a point is tangent to the field line through that point; lines never cross, because $\\vec{E}$ has a unique direction at each point.",
                  "zh": "某点的场方向沿过该点电场线的切线；电场线永不相交，因为每点的 $\\vec{E}$ 方向唯一。"
                },
                {
                  "en": "Line density (lines per area) is proportional to field strength: crowded lines mean strong field.",
                  "zh": "电场线的疏密（单位面积的条数）正比于场强：线越密，场越强。"
                },
                {
                  "en": "The number of lines leaving or entering a charge is proportional to the magnitude of the charge.",
                  "zh": "从电荷发出或进入电荷的线数正比于电荷量的大小。"
                }
              ]
            },
            {
              "type": "p",
              "en": "An electric dipole is a pair of equal and opposite charges $\\pm q$ separated by a small distance. Its field lines loop from the positive charge to the negative one. Far away, the $1/r^2$ fields of the two charges nearly cancel, and the net dipole field falls off as $1/r^3$ — faster than a point charge.",
              "zh": "电偶极子是相隔小距离的一对等量异号电荷 $\\pm q$。其电场线从正电荷绕到负电荷。在远处，两个电荷的 $1/r^2$ 场几乎抵消，偶极子的净场按 $1/r^3$ 衰减——比点电荷衰减得更快。"
            },
            {
              "type": "h3",
              "en": "Continuous Charge Distributions",
              "zh": "连续电荷分布"
            },
            {
              "type": "p",
              "en": "For a continuous distribution, slice the object into infinitesimal charge elements $dq$, treat each as a point charge, and integrate the vector contributions. Use a linear density $\\lambda = Q/L$ for a line of charge, so $dq = \\lambda\\,dx$.",
              "zh": "对于连续分布，把带电体切成无穷小电荷元 $dq$，将每个电荷元当作点电荷处理，再对矢量贡献积分。线电荷用线密度 $\\lambda = Q/L$，于是 $dq = \\lambda\\,dx$。"
            },
            {
              "type": "math",
              "tex": "\\vec{E} = \\int \\frac{k\\,dq}{r^2}\\,\\hat{r}"
            },
            {
              "type": "p",
              "en": "Ring of charge, on-axis: a ring of radius $R$ carries total charge $Q$ uniformly. At a point on the axis a distance $x$ from the center, every element $dq$ is the same distance $\\sqrt{x^2+R^2}$ from the point. By symmetry the components perpendicular to the axis cancel in pairs; only the axial component, a factor $\\cos\\theta = x/\\sqrt{x^2+R^2}$ of each contribution, survives. Since $k/(x^2+R^2)$ and $\\cos\\theta$ are the same for every element, they factor out of the integral and $\\int dq = Q$:",
              "zh": "带电圆环轴线上的场：半径为 $R$ 的圆环均匀带有总电荷 $Q$。在轴线上距圆心 $x$ 处，每个电荷元 $dq$ 到该点的距离都是 $\\sqrt{x^2+R^2}$。由对称性，垂直于轴的分量成对抵消；只有轴向分量（每个贡献乘以 $\\cos\\theta = x/\\sqrt{x^2+R^2}$）留下来。因为 $k/(x^2+R^2)$ 和 $\\cos\\theta$ 对每个电荷元都相同，可以提出积分号外，而 $\\int dq = Q$："
            },
            {
              "type": "math",
              "tex": "E_x = \\int \\frac{k\\,dq}{x^2+R^2}\\cdot\\frac{x}{\\sqrt{x^2+R^2}} = \\frac{kQx}{(x^2+R^2)^{3/2}}"
            },
            {
              "type": "p",
              "en": "Check the limits: at the center ($x=0$) the field is zero by symmetry, and for $x \\gg R$ the result reduces to $kQ/x^2$, a point charge. The on-axis field is maximum at $x = R/\\sqrt{2}$, which you can confirm by setting $dE_x/dx = 0$.",
              "zh": "检验极限情形：在圆心处（$x=0$）由对称性场为零；当 $x \\gg R$ 时结果退化为点电荷的 $kQ/x^2$。轴线上的场在 $x = R/\\sqrt{2}$ 处最大，可通过令 $dE_x/dx = 0$ 验证。"
            },
            {
              "type": "h3",
              "en": "Motion of a Charge in a Uniform Field",
              "zh": "电荷在匀强电场中的运动"
            },
            {
              "type": "p",
              "en": "In a uniform field $\\vec{E}$, a charge $q$ of mass $m$ has constant acceleration $\\vec{a} = q\\vec{E}/m$. The motion is exactly analogous to projectile motion: constant velocity perpendicular to the field, uniform acceleration along it, producing a parabolic trajectory. For example, an electron entering midway between parallel plates with horizontal speed $v_0$ deflects vertically by $\\tfrac{1}{2}(eE/m)t^2$ while crossing in time $t = L/v_0$.",
              "zh": "在匀强电场 $\\vec{E}$ 中，质量为 $m$、电荷为 $q$ 的粒子具有恒定加速度 $\\vec{a} = q\\vec{E}/m$。这种运动与抛体运动完全类似：垂直于场的方向匀速，沿场的方向匀加速，轨迹为抛物线。例如，一个电子以水平速度 $v_0$ 从平行板中间射入，穿越时间 $t = L/v_0$ 内竖直偏转 $\\tfrac{1}{2}(eE/m)t^2$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: In Coulomb’s law and field calculations, keep the signs OUT of the formulas — compute magnitudes with $|q_1 q_2|$, then assign directions from the physics (like charges repel, field points away from positive charge). Plugging signed charges into $kq_1q_2/r^2$ and trusting the sign of the result is the single most common source of direction errors on the free-response section.",
              "zh": "AP 考试提示：在库仑定律和电场计算中，不要把符号代入公式——先用 $|q_1 q_2|$ 算出大小，再根据物理规律确定方向（同号相斥，场从正电荷指向外）。把带符号的电荷代入 $kq_1q_2/r^2$ 并轻信结果的正负号，是自由作答题中方向出错最常见的原因。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Superposition of fields",
                "zh": "例题 1：电场的叠加"
              },
              "problem": {
                "en": "A charge $q_1 = +3\\,\\mu\\text{C}$ is at $x = 0$ and a charge $q_2 = -3\\,\\mu\\text{C}$ is at $x = 2\\,\\text{m}$. Find the electric field (magnitude and direction) at the midpoint $x = 1\\,\\text{m}$. Use $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$.",
                "zh": "电荷 $q_1 = +3\\,\\mu\\text{C}$ 位于 $x = 0$，电荷 $q_2 = -3\\,\\mu\\text{C}$ 位于 $x = 2\\,\\text{m}$。求中点 $x = 1\\,\\text{m}$ 处电场的大小和方向。取 $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Each charge is $1\\,\\text{m}$ from the midpoint. The field of $q_1$ (positive) points away from it, i.e. in the $+x$ direction. The field of $q_2$ (negative) points toward it, also in the $+x$ direction. The two magnitudes are equal:",
                  "zh": "每个电荷到中点的距离都是 $1\\,\\text{m}$。正电荷 $q_1$ 的场指向远离它的方向，即 $+x$ 方向；负电荷 $q_2$ 的场指向它，也是 $+x$ 方向。两者大小相等："
                },
                {
                  "type": "math",
                  "tex": "E_1 = E_2 = \\frac{(9.0\\times10^9)(3\\times10^{-6})}{(1)^2} = 2.7\\times10^{4}\\,\\text{N/C}"
                },
                {
                  "type": "p",
                  "en": "Since both contributions point in $+x$, they add: $E = 5.4\\times10^{4}\\,\\text{N/C}$, directed from the positive charge toward the negative charge. Note that the fields reinforce between opposite charges — they would cancel at the midpoint of two equal like charges.",
                  "zh": "由于两个贡献都沿 $+x$ 方向，直接相加：$E = 5.4\\times10^{4}\\,\\text{N/C}$，方向从正电荷指向负电荷。注意异号电荷之间的场相互加强——若是两个等量同号电荷，中点处的场会抵消为零。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Field of a finite line of charge (on axis)",
                "zh": "例题 2：有限长线电荷的轴向电场"
              },
              "problem": {
                "en": "A thin rod of length $L$ carries total charge $Q$ spread uniformly along it. Find the electric field at point $P$ on the rod’s axis, a distance $d$ from the near end.",
                "zh": "长为 $L$ 的细棒均匀带有总电荷 $Q$。求棒的延长线上距近端 $d$ 处 $P$ 点的电场。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Put $P$ at the origin and let the rod occupy $x = d$ to $x = d + L$. A slice of thickness $dx$ at position $x$ carries $dq = \\lambda\\,dx$ with $\\lambda = Q/L$, and lies a distance $x$ from $P$. Every slice pushes in the same direction (along the axis, away from the rod for $Q > 0$), so the magnitudes integrate directly:",
                  "zh": "把 $P$ 放在原点，设棒占据 $x = d$ 到 $x = d + L$。位于 $x$ 处、厚度为 $dx$ 的薄片带电 $dq = \\lambda\\,dx$（$\\lambda = Q/L$），到 $P$ 的距离为 $x$。每个薄片的场方向相同（沿轴线，$Q > 0$ 时背离棒），故大小可直接积分："
                },
                {
                  "type": "math",
                  "tex": "E = \\int_{d}^{d+L} \\frac{k\\lambda\\,dx}{x^2} = k\\lambda\\left[\\frac{-1}{x}\\right]_{d}^{d+L} = k\\lambda\\left(\\frac{1}{d} - \\frac{1}{d+L}\\right)"
                },
                {
                  "type": "math",
                  "tex": "E = \\frac{k\\lambda L}{d(d+L)} = \\frac{kQ}{d(d+L)}"
                },
                {
                  "type": "p",
                  "en": "Limit check: as $d \\gg L$, $E \\to kQ/d^2$ — the rod looks like a point charge from far away, as it must.",
                  "zh": "极限检验：当 $d \\gg L$ 时，$E \\to kQ/d^2$——从远处看，棒就像一个点电荷，符合预期。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is a physically possible net charge for an isolated object?",
                "zh": "下列哪个电荷量是一个孤立物体可能带有的净电荷？"
              },
              "choices": [
                "$2.4\\times10^{-19}\\,\\text{C}$",
                "$4.8\\times10^{-19}\\,\\text{C}$",
                "$0.8\\times10^{-19}\\,\\text{C}$",
                "$4.0\\times10^{-19}\\,\\text{C}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Charge is quantized in multiples of $e = 1.6\\times10^{-19}\\,\\text{C}$. Only $4.8\\times10^{-19} = 3e$ is an integer multiple. The others correspond to $1.5e$, $0.5e$, and $2.5e$ — tempting because they look like round numbers, but they are not whole multiples of $e$.",
                "zh": "电荷以 $e = 1.6\\times10^{-19}\\,\\text{C}$ 为单位量子化。只有 $4.8\\times10^{-19} = 3e$ 是整数倍。其余分别对应 $1.5e$、$0.5e$ 和 $2.5e$——看起来是整齐的数字，但都不是 $e$ 的整数倍。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two point charges attract each other with force $F$. If both charges are doubled and the distance between them is also doubled, the new force is:",
                "zh": "两个点电荷相互吸引，作用力为 $F$。若两电荷都加倍，且它们之间的距离也加倍，新的作用力为："
              },
              "choices": [
                "$F/4$",
                "$2F$",
                "$F$",
                "$4F$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Doubling both charges multiplies the force by $2\\times2 = 4$; doubling the distance divides it by $2^2 = 4$. The effects cancel, leaving $F$ unchanged. Choosing $4F$ means forgetting the inverse-square factor; choosing $F/4$ means forgetting the charges.",
                "zh": "两电荷都加倍使力乘以 $2\\times2 = 4$；距离加倍使力除以 $2^2 = 4$。两个效果抵消，力仍为 $F$。选 $4F$ 是忘了平方反比因子；选 $F/4$ 是忘了电荷的变化。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two point charges $q_1 = 2\\,\\mu\\text{C}$ and $q_2 = 5\\,\\mu\\text{C}$ are $0.30\\,\\text{m}$ apart. Using $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$, find the magnitude of the force between them in newtons. Give your answer to two significant figures.",
                "zh": "两个点电荷 $q_1 = 2\\,\\mu\\text{C}$ 和 $q_2 = 5\\,\\mu\\text{C}$ 相距 $0.30\\,\\text{m}$。取 $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$，求它们之间作用力的大小（单位：N，保留两位有效数字）。"
              },
              "answer": "1.0",
              "accept": [
                "1",
                "1.0 N",
                "1 N"
              ],
              "explanation": {
                "en": "$F = kq_1q_2/r^2 = (9.0\\times10^9)(2\\times10^{-6})(5\\times10^{-6})/(0.30)^2 = 0.09/0.09 = 1.0\\,\\text{N}$.",
                "zh": "$F = kq_1q_2/r^2 = (9.0\\times10^9)(2\\times10^{-6})(5\\times10^{-6})/(0.30)^2 = 0.09/0.09 = 1.0\\,\\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about electric field lines is correct?",
                "zh": "关于电场线，下列哪个说法正确？"
              },
              "choices": [
                "Field lines can cross where two fields overlap",
                "A charged particle always moves along a field line",
                "Field lines point from regions of high potential energy to low",
                "Field lines never cross, and their density indicates field strength"
              ],
              "answer": 3,
              "explanation": {
                "en": "The field has a unique direction at each point, so lines cannot cross, and crowded lines mean a stronger field. The particle-motion choice is the classic trap: a field line gives the direction of force (for positive charge), not the trajectory — a particle with sideways velocity follows a curved path that leaves the line.",
                "zh": "电场在每一点方向唯一，所以电场线不能相交，线越密场越强。“粒子沿电场线运动”是经典陷阱：电场线给出的是（正电荷所受）力的方向，不是轨迹——具有横向速度的粒子会沿曲线偏离电场线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student measures the force $F$ between two fixed charges at several separations $r$ to verify Coulomb’s law. To obtain a straight-line graph, the student should plot $F$ versus:",
                "zh": "一名学生测量两个固定电荷在不同间距 $r$ 下的作用力 $F$，以验证库仑定律。为得到一条直线图像，该学生应将 $F$ 对哪一个量作图？"
              },
              "choices": [
                "$r$",
                "$1/r$",
                "$1/r^2$",
                "$r^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $F = kq_1q_2\\,(1/r^2)$, plotting $F$ against $1/r^2$ gives a straight line through the origin with slope $kq_1q_2$. Plotting $F$ vs $1/r$ is tempting but gives a curve, since $F$ is proportional to the inverse square, not the inverse.",
                "zh": "由 $F = kq_1q_2\\,(1/r^2)$，将 $F$ 对 $1/r^2$ 作图可得过原点的直线，斜率为 $kq_1q_2$。对 $1/r$ 作图很有诱惑性，但会得到曲线，因为 $F$ 与距离的平方成反比，而不是与距离成反比。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle of mass $0.50\\,\\text{kg}$ carrying charge $+4.0\\,\\text{mC}$ is released in a uniform field of magnitude $2500\\,\\text{N/C}$. Find the magnitude of its acceleration in m/s². Give an integer.",
                "zh": "质量为 $0.50\\,\\text{kg}$、带电 $+4.0\\,\\text{mC}$ 的粒子在大小为 $2500\\,\\text{N/C}$ 的匀强电场中由静止释放。求其加速度大小（单位：m/s²，请填一个整数）。"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "20 m/s^2",
                "20 m/s²"
              ],
              "explanation": {
                "en": "$F = qE = (4.0\\times10^{-3})(2500) = 10\\,\\text{N}$, so $a = F/m = 10/0.50 = 20\\,\\text{m/s}^2$, directed along the field since the charge is positive.",
                "zh": "$F = qE = (4.0\\times10^{-3})(2500) = 10\\,\\text{N}$，故 $a = F/m = 10/0.50 = 20\\,\\text{m/s}^2$，因电荷为正，方向沿电场方向。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Point charges $+q$ and $+4q$ are fixed a distance $d$ apart. At what point on the line between them is the net electric field zero?",
                "zh": "点电荷 $+q$ 与 $+4q$ 固定放置，相距 $d$。在它们连线之间的哪一点净电场为零？"
              },
              "choices": [
                "$d/3$ from $+q$",
                "$d/2$ from $+q$",
                "$d/4$ from $+q$",
                "$d/3$ from $+4q$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Setting $kq/x^2 = k(4q)/(d-x)^2$ gives $(d-x)^2 = 4x^2$, so $d - x = 2x$ and $x = d/3$ from the smaller charge. The zero point must sit closer to the weaker charge to balance the stronger one; the midpoint $d/2$ is the tempting but wrong symmetric guess.",
                "zh": "令 $kq/x^2 = k(4q)/(d-x)^2$，得 $(d-x)^2 = 4x^2$，即 $d - x = 2x$，$x = d/3$（距较小电荷）。零场点必须更靠近较弱的电荷才能与较强电荷平衡；中点 $d/2$ 是诱人但错误的对称猜测。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rod of length $L = 1.0\\,\\text{m}$ carries charge $Q = 5.0\\,\\mu\\text{C}$ uniformly. Using $E = kQ/[d(d+L)]$ with $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$, find the field magnitude in N/C at a point on the rod’s axis $d = 0.50\\,\\text{m}$ from the near end. Give an integer.",
                "zh": "长 $L = 1.0\\,\\text{m}$ 的细棒均匀带电 $Q = 5.0\\,\\mu\\text{C}$。利用 $E = kQ/[d(d+L)]$，取 $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$，求棒延长线上距近端 $d = 0.50\\,\\text{m}$ 处的场强（单位：N/C，请填一个整数）。"
              },
              "answer": "60000",
              "accept": [
                "60000.0",
                "6.0e4",
                "6e4",
                "60000 N/C"
              ],
              "explanation": {
                "en": "$E = kQ/[d(d+L)] = (9.0\\times10^9)(5.0\\times10^{-6})/[(0.50)(1.5)] = 45000/0.75 = 6.0\\times10^4\\,\\text{N/C}$. This comes from integrating $k\\lambda\\,dx/x^2$ from $d$ to $d+L$ — note it is NOT $kQ/d^2$, which ignores the rod’s extent.",
                "zh": "$E = kQ/[d(d+L)] = (9.0\\times10^9)(5.0\\times10^{-6})/[(0.50)(1.5)] = 45000/0.75 = 6.0\\times10^4\\,\\text{N/C}$。该结果来自对 $k\\lambda\\,dx/x^2$ 从 $d$ 到 $d+L$ 积分——注意它不是 $kQ/d^2$，后者忽略了棒的长度。"
              }
            }
          ]
        },
        {
          "id": "gauss-law",
          "title": "Gauss’s Law",
          "titleZh": "高斯定律",
          "content": [
            {
              "type": "h2",
              "en": "Electric Flux",
              "zh": "电通量"
            },
            {
              "type": "p",
              "en": "Electric flux measures how much electric field \"flows\" through a surface — think of it as counting the field lines that pierce the surface. For a flat surface in a uniform field, $\\Phi = EA\\cos\\theta$, where $\\theta$ is the angle between $\\vec{E}$ and the normal (perpendicular) to the surface. Flux is maximal when the field is perpendicular to the surface ($\\theta = 0$) and zero when the field skims parallel to it ($\\theta = 90°$).",
              "zh": "电通量衡量电场“穿过”某个面的多少——可以想成数一数穿过该面的电场线条数。对于匀强电场中的平面，$\\Phi = EA\\cos\\theta$，其中 $\\theta$ 是 $\\vec{E}$ 与面的法线（垂直方向）之间的夹角。电场垂直于面时（$\\theta = 0$）通量最大，电场平行掠过面时（$\\theta = 90°$）通量为零。"
            },
            {
              "type": "math",
              "tex": "\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{A}"
            },
            {
              "type": "p",
              "en": "For a general surface, we sum $\\vec{E}\\cdot d\\vec{A}$ over infinitesimal patches. For a closed surface, $d\\vec{A}$ points outward by convention, so outgoing field lines count as positive flux and incoming lines as negative. Units: N·m²/C.",
              "zh": "对于一般曲面，把 $\\vec{E}\\cdot d\\vec{A}$ 在无穷小面元上求和。对于闭合曲面，约定 $d\\vec{A}$ 指向外侧，因此向外穿出的电场线计为正通量，向内穿入的计为负通量。单位：N·m²/C。"
            },
            {
              "type": "h3",
              "en": "Gauss’s Law and When to Use It",
              "zh": "高斯定律及其适用时机"
            },
            {
              "type": "math",
              "tex": "\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}"
            },
            {
              "type": "p",
              "en": "Gauss’s law states that the net flux through any closed surface equals the enclosed charge divided by $\\varepsilon_0 = 8.85\\times10^{-12}\\,\\text{C}^2/\\text{N·m}^2$. It is always true, but it only lets you solve for $E$ when symmetry guarantees that $E$ is constant in magnitude and either perpendicular or parallel to the Gaussian surface everywhere. Then the integral collapses to $E$ times an area.",
              "zh": "高斯定律指出：穿过任意闭合曲面的净通量等于所包围的电荷除以 $\\varepsilon_0 = 8.85\\times10^{-12}\\,\\text{C}^2/\\text{N·m}^2$。它永远成立，但只有当对称性保证 $E$ 在高斯面上处处大小相同、且方向处处垂直或平行于面时，才能用它解出 $E$——此时积分化为 $E$ 乘以一个面积。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Spherical symmetry (point charge, uniform sphere, shells): use a concentric sphere, $\\oint E\\,dA = E\\cdot 4\\pi r^2$.",
                  "zh": "球对称（点电荷、均匀带电球、球壳）：取同心球面，$\\oint E\\,dA = E\\cdot 4\\pi r^2$。"
                },
                {
                  "en": "Cylindrical symmetry (infinite line or cylinder): use a coaxial cylinder of length $L$, curved-side flux $E\\cdot 2\\pi r L$, zero flux through the end caps.",
                  "zh": "柱对称（无限长直线或圆柱）：取同轴圆柱面，长为 $L$，侧面通量 $E\\cdot 2\\pi r L$，两端面通量为零。"
                },
                {
                  "en": "Planar symmetry (infinite sheet): use a pillbox straddling the sheet; flux exits both flat faces.",
                  "zh": "面对称（无限大平面）：取跨越平面的扁盒（药盒）；通量从两个平面端面穿出。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Three Classic Derivations",
              "zh": "三个经典推导"
            },
            {
              "type": "p",
              "en": "Infinite line of charge, density $\\lambda$: by symmetry $\\vec{E}$ points radially outward and depends only on the distance $r$ from the line. Choose a coaxial cylinder of radius $r$ and length $L$. The end caps contribute nothing ($\\vec{E}$ is parallel to them), and on the curved side $E$ is constant and perpendicular:",
              "zh": "线密度为 $\\lambda$ 的无限长线电荷：由对称性，$\\vec{E}$ 沿径向指向外，且只与到直线的距离 $r$ 有关。取半径 $r$、长 $L$ 的同轴圆柱面。两端面无通量（$\\vec{E}$ 与其平行），侧面上 $E$ 大小恒定且垂直于面："
            },
            {
              "type": "math",
              "tex": "E\\,(2\\pi r L) = \\frac{\\lambda L}{\\varepsilon_0} \\;\\Rightarrow\\; E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r} = \\frac{2k\\lambda}{r}"
            },
            {
              "type": "p",
              "en": "Infinite plane of charge, surface density $\\sigma$: by symmetry $\\vec{E}$ points straight away from the plane on both sides. Choose a pillbox (a short cylinder) with faces of area $A$ straddling the plane. Flux exits through both faces; the curved side contributes nothing:",
              "zh": "面密度为 $\\sigma$ 的无限大带电平面：由对称性，$\\vec{E}$ 在平面两侧都垂直指离平面。取一个横跨平面、端面面积为 $A$ 的扁盒（短圆柱）。通量从两个端面穿出，侧面无贡献："
            },
            {
              "type": "math",
              "tex": "2EA = \\frac{\\sigma A}{\\varepsilon_0} \\;\\Rightarrow\\; E = \\frac{\\sigma}{2\\varepsilon_0} \\quad \\text{(uniform, independent of distance)}"
            },
            {
              "type": "p",
              "en": "Uniformly charged insulating solid sphere, radius $R$, total charge $Q$: use a concentric Gaussian sphere of radius $r$. Outside ($r \\ge R$) the enclosed charge is all of $Q$, so $E = kQ/r^2$ — identical to a point charge. Inside ($r < R$), only the fraction of charge within radius $r$ counts: $q_{\\text{enc}} = Q\\,(r^3/R^3)$ since charge is proportional to volume. Then $E\\cdot4\\pi r^2 = Q r^3/(\\varepsilon_0 R^3)$, giving $E = kQr/R^3$ — the field grows linearly with $r$ inside, peaks at the surface, then falls off as $1/r^2$.",
              "zh": "半径 $R$、总电荷 $Q$ 的均匀带电绝缘实心球：取半径 $r$ 的同心高斯球面。球外（$r \\ge R$）包围全部电荷 $Q$，故 $E = kQ/r^2$——与点电荷完全相同。球内（$r < R$）只计入半径 $r$ 以内的电荷：由于电荷正比于体积，$q_{\\text{enc}} = Q\\,(r^3/R^3)$。于是 $E\\cdot4\\pi r^2 = Q r^3/(\\varepsilon_0 R^3)$，得 $E = kQr/R^3$——球内场强随 $r$ 线性增大，在表面达到最大，随后按 $1/r^2$ 衰减。"
            },
            {
              "type": "math",
              "tex": "E_{\\text{inside}} = \\frac{kQ}{R^3}\\,r \\;\\; (r < R), \\qquad E_{\\text{outside}} = \\frac{kQ}{r^2} \\;\\; (r \\ge R)"
            },
            {
              "type": "h3",
              "en": "Conductors in Electrostatic Equilibrium",
              "zh": "静电平衡中的导体"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$E = 0$ everywhere inside the conducting material — otherwise free electrons would move, contradicting equilibrium.",
                  "zh": "导体内部处处 $E = 0$——否则自由电子会移动，与平衡矛盾。"
                },
                {
                  "en": "Any excess charge resides entirely on the surface: a Gaussian surface just inside the conductor has zero flux, so it encloses zero net charge.",
                  "zh": "所有多余电荷都分布在表面：紧贴导体内侧的高斯面通量为零，故其包围的净电荷为零。"
                },
                {
                  "en": "Just outside the surface, $\\vec{E}$ is perpendicular to the surface with magnitude $\\sigma/\\varepsilon_0$ (from a pillbox with one face inside where $E = 0$ and one face outside).",
                  "zh": "紧贴表面外侧，$\\vec{E}$ 垂直于表面，大小为 $\\sigma/\\varepsilon_0$（用一个扁盒推得：一个端面在导体内 $E = 0$，另一个在导体外）。"
                },
                {
                  "en": "Cavity arguments: an empty cavity inside a conductor has $E = 0$ and no charge on the cavity wall. If a point charge $+q$ sits in the cavity, a charge $-q$ is induced on the cavity wall (so a Gaussian surface in the metal encloses zero) and $+q$ appears on the outer surface.",
                  "zh": "空腔论证：导体内的空腔中 $E = 0$，腔壁上无电荷。若腔内放入点电荷 $+q$，腔壁会感应出 $-q$（使得穿过金属内部的高斯面包围的净电荷为零），外表面则出现 $+q$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: Zero net flux does NOT mean zero field. A closed surface with no charge inside can still have a strong field passing through it — equal flux enters and exits. Conversely, on the exam, justify every Gauss’s-law step: state the symmetry, explain why flux through certain faces vanishes, and only then write $E \\cdot (\\text{area}) = q_{\\text{enc}}/\\varepsilon_0$. Also remember the factor-of-2 trap: an isolated sheet gives $\\sigma/2\\varepsilon_0$, but the field just outside a conductor’s surface is $\\sigma/\\varepsilon_0$.",
              "zh": "AP 考试提示：净通量为零并不意味着电场为零。内部无电荷的闭合曲面仍可能有很强的电场穿过——只是进出通量相等。反过来，在考试中要论证高斯定律的每一步：说明对称性、解释为何某些面的通量为零，然后才能写 $E \\cdot (\\text{面积}) = q_{\\text{enc}}/\\varepsilon_0$。还要记住“因子 2”陷阱：孤立带电平面的场是 $\\sigma/2\\varepsilon_0$，而导体表面外侧的场是 $\\sigma/\\varepsilon_0$。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Field of a uniformly charged sphere, inside and out",
                "zh": "例题 1：均匀带电球体内外的电场"
              },
              "problem": {
                "en": "An insulating sphere of radius $R = 0.20\\,\\text{m}$ carries charge $Q = 8.0\\,\\mu\\text{C}$ distributed uniformly through its volume. Find the electric field at $r = 0.10\\,\\text{m}$ and at $r = 0.40\\,\\text{m}$ from the center. Use $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$.",
                "zh": "半径 $R = 0.20\\,\\text{m}$ 的绝缘球体内均匀分布着电荷 $Q = 8.0\\,\\mu\\text{C}$。求距球心 $r = 0.10\\,\\text{m}$ 和 $r = 0.40\\,\\text{m}$ 处的电场。取 $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Inside ($r = 0.10\\,\\text{m} = R/2$): the Gaussian sphere encloses $q_{\\text{enc}} = Q(r/R)^3 = 8.0\\,\\mu\\text{C}\\times(1/2)^3 = 1.0\\,\\mu\\text{C}$. Gauss’s law with area $4\\pi r^2$ gives:",
                  "zh": "球内（$r = 0.10\\,\\text{m} = R/2$）：高斯球面包围 $q_{\\text{enc}} = Q(r/R)^3 = 8.0\\,\\mu\\text{C}\\times(1/2)^3 = 1.0\\,\\mu\\text{C}$。用面积为 $4\\pi r^2$ 的高斯定律得："
                },
                {
                  "type": "math",
                  "tex": "E = \\frac{kq_{\\text{enc}}}{r^2} = \\frac{(9.0\\times10^9)(1.0\\times10^{-6})}{(0.10)^2} = 9.0\\times10^{5}\\,\\text{N/C}"
                },
                {
                  "type": "p",
                  "en": "Outside ($r = 0.40\\,\\text{m}$): the full charge is enclosed, so the sphere acts as a point charge:",
                  "zh": "球外（$r = 0.40\\,\\text{m}$）：包围了全部电荷，球体等效于点电荷："
                },
                {
                  "type": "math",
                  "tex": "E = \\frac{kQ}{r^2} = \\frac{(9.0\\times10^9)(8.0\\times10^{-6})}{(0.40)^2} = 4.5\\times10^{5}\\,\\text{N/C}"
                },
                {
                  "type": "p",
                  "en": "A graph of $E$ versus $r$ rises linearly from zero at the center to a maximum $kQ/R^2 = 1.8\\times10^6\\,\\text{N/C}$ at $r = R$, then decreases as $1/r^2$.",
                  "zh": "$E$ 随 $r$ 的图像从球心处的零线性上升，在 $r = R$ 处达到最大值 $kQ/R^2 = 1.8\\times10^6\\,\\text{N/C}$，然后按 $1/r^2$ 下降。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Point charge inside a conducting shell",
                "zh": "例题 2：导体球壳内的点电荷"
              },
              "problem": {
                "en": "A point charge $+q$ sits at the center of a neutral conducting spherical shell with inner radius $a$ and outer radius $b$. Find the induced charges and the electric field in each of the three regions: $r < a$, $a < r < b$, and $r > b$.",
                "zh": "点电荷 $+q$ 位于内半径 $a$、外半径 $b$ 的电中性导体球壳中心。求感应电荷以及三个区域（$r < a$、$a < r < b$、$r > b$）中的电场。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Region $a < r < b$ (inside the metal): $E = 0$ in a conductor at equilibrium. A Gaussian sphere in the metal must therefore enclose zero net charge, so a charge $-q$ is induced on the inner surface ($r = a$). Since the shell is neutral overall, $+q$ must appear on the outer surface ($r = b$).",
                  "zh": "区域 $a < r < b$（金属内部）：平衡导体中 $E = 0$。因此位于金属中的高斯球面包围的净电荷必须为零，故内表面（$r = a$）感应出 $-q$。由于球壳整体电中性，外表面（$r = b$）必然出现 $+q$。"
                },
                {
                  "type": "p",
                  "en": "Region $r < a$ (the cavity): a Gaussian sphere encloses only the point charge, so $E = kq/r^2$, radially outward — the shell does not shield the cavity from its own central charge.",
                  "zh": "区域 $r < a$（空腔）：高斯球面只包围点电荷，故 $E = kq/r^2$，沿径向向外——球壳并不屏蔽腔内自身电荷产生的场。"
                },
                {
                  "type": "p",
                  "en": "Region $r > b$: the enclosed charge is $+q - q + q = +q$, so $E = kq/r^2$ outward, exactly as if the shell were absent. If the shell were instead grounded, the outer $+q$ would drain away and the exterior field would vanish.",
                  "zh": "区域 $r > b$：包围的总电荷为 $+q - q + q = +q$，故 $E = kq/r^2$ 沿径向向外，与没有球壳时完全一样。若球壳接地，外表面的 $+q$ 会流走，外部电场则消失。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A point charge $q$ is placed at the center of a cube. What is the electric flux through ONE face of the cube?",
                "zh": "一个点电荷 $q$ 放在立方体的中心。穿过该立方体一个面的电通量是多少？"
              },
              "choices": [
                "$q/\\varepsilon_0$",
                "$q/(4\\varepsilon_0)$",
                "$q/(6\\varepsilon_0)$",
                "$0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By Gauss’s law the total flux through the closed cube is $q/\\varepsilon_0$, and by symmetry it splits equally among the six identical faces, giving $q/(6\\varepsilon_0)$ each. Choosing $q/\\varepsilon_0$ is tempting but that is the flux through the entire closed surface, not one face.",
                "zh": "由高斯定律，穿过整个封闭立方体的总通量为 $q/\\varepsilon_0$；由对称性，它在六个相同的面之间均分，每个面为 $q/(6\\varepsilon_0)$。选 $q/\\varepsilon_0$ 很有诱惑性，但那是穿过整个闭合面的通量，不是一个面的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform field of magnitude $200\\,\\text{N/C}$ passes through a flat surface of area $0.50\\,\\text{m}^2$. The angle between the field and the normal to the surface is $60°$. Find the flux in N·m²/C. Give an integer.",
                "zh": "大小为 $200\\,\\text{N/C}$ 的匀强电场穿过面积为 $0.50\\,\\text{m}^2$ 的平面，电场与该面法线的夹角为 $60°$。求电通量（单位：N·m²/C，请填一个整数）。"
              },
              "answer": "50",
              "accept": [
                "50.0",
                "50 N·m²/C",
                "50 N*m^2/C"
              ],
              "explanation": {
                "en": "$\\Phi = EA\\cos\\theta = (200)(0.50)\\cos 60° = 100\\times0.5 = 50\\,\\text{N·m}^2/\\text{C}$. Watch the angle definition: $60°$ from the NORMAL, so the factor is $\\cos 60° = 0.5$, not $\\cos 30°$.",
                "zh": "$\\Phi = EA\\cos\\theta = (200)(0.50)\\cos 60° = 100\\times0.5 = 50\\,\\text{N·m}^2/\\text{C}$。注意角度的定义：是与法线成 $60°$，所以因子是 $\\cos 60° = 0.5$，而不是 $\\cos 30°$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A closed surface encloses an electric dipole ($+q$ and $-q$). Which statement is correct?",
                "zh": "一个闭合曲面包围一个电偶极子（$+q$ 和 $-q$）。下列哪个说法正确？"
              },
              "choices": [
                "The net flux is zero, and $\\vec{E}$ is zero everywhere on the surface",
                "The net flux is zero, but $\\vec{E}$ need not be zero on the surface",
                "The net flux is $2q/\\varepsilon_0$",
                "The net flux is positive because flux from $+q$ dominates"
              ],
              "answer": 1,
              "explanation": {
                "en": "The enclosed charge is $+q + (-q) = 0$, so the net flux is zero. But the dipole’s field certainly pierces the surface — flux out near $+q$ is balanced by flux in near $-q$. The first choice is the classic conflation of zero flux with zero field.",
                "zh": "包围的净电荷为 $+q + (-q) = 0$，故净通量为零。但偶极子的电场显然穿过曲面——靠近 $+q$ 处流出的通量被靠近 $-q$ 处流入的通量抵消。第一个选项是把“通量为零”与“场为零”混为一谈的经典错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For an insulating sphere of radius $R$ charged uniformly throughout its volume, which graph best describes $E(r)$?",
                "zh": "对于体内均匀带电、半径为 $R$ 的绝缘球体，哪种图像最能描述 $E(r)$？"
              },
              "choices": [
                "Constant for $r<R$, then decreasing as $1/r^2$",
                "Increasing linearly to a maximum at $r=R$, then decreasing as $1/r^2$",
                "Zero for $r<R$, then decreasing as $1/r^2$",
                "Decreasing as $1/r^2$ everywhere, diverging at $r=0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Inside, $q_{\\text{enc}} \\propto r^3$ while the Gaussian area grows as $r^2$, so $E = kQr/R^3 \\propto r$: linear growth to a peak of $kQ/R^2$ at the surface, then point-charge behavior outside. \"Zero inside\" describes a CONDUCTOR (or a shell), not a uniformly charged insulator — that is the tempting wrong answer.",
                "zh": "球内 $q_{\\text{enc}} \\propto r^3$，而高斯面面积按 $r^2$ 增长，故 $E = kQr/R^3 \\propto r$：线性上升，在表面达到峰值 $kQ/R^2$，球外则按点电荷规律衰减。“内部为零”描述的是导体（或球壳），而不是均匀带电的绝缘体——那是诱人的错误选项。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An infinite line of charge has linear density $\\lambda = 5.0\\,\\mu\\text{C/m}$. Using $E = 2k\\lambda/r$ with $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$, find the field magnitude in N/C at $r = 0.30\\,\\text{m}$. Give an integer.",
                "zh": "无限长线电荷的线密度为 $\\lambda = 5.0\\,\\mu\\text{C/m}$。利用 $E = 2k\\lambda/r$，取 $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$，求 $r = 0.30\\,\\text{m}$ 处的场强（单位：N/C，请填一个整数）。"
              },
              "answer": "300000",
              "accept": [
                "300000.0",
                "3.0e5",
                "3e5",
                "300000 N/C"
              ],
              "explanation": {
                "en": "$E = 2k\\lambda/r = 2(9.0\\times10^9)(5.0\\times10^{-6})/0.30 = (9.0\\times10^4)/0.30 = 3.0\\times10^5\\,\\text{N/C}$. This $1/r$ dependence comes from the cylindrical Gaussian surface: $E(2\\pi rL) = \\lambda L/\\varepsilon_0$.",
                "zh": "$E = 2k\\lambda/r = 2(9.0\\times10^9)(5.0\\times10^{-6})/0.30 = (9.0\\times10^4)/0.30 = 3.0\\times10^5\\,\\text{N/C}$。这种 $1/r$ 关系来自圆柱形高斯面：$E(2\\pi rL) = \\lambda L/\\varepsilon_0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A point charge $+q$ is placed off-center inside the cavity of a neutral conducting shell. What is the induced charge on the cavity wall (inner surface)?",
                "zh": "点电荷 $+q$ 放在电中性导体球壳空腔内的非中心位置。腔壁（内表面）上的感应电荷是多少？"
              },
              "choices": [
                "$+q$",
                "$0$, because the shell is neutral",
                "$-q/2$",
                "$-q$"
              ],
              "answer": 3,
              "explanation": {
                "en": "A Gaussian surface drawn within the metal must have zero flux (since $E=0$ in the conductor), so it must enclose zero net charge: the inner surface carries exactly $-q$, even when the charge is off-center (the induced charge is then distributed non-uniformly). \"Zero because neutral\" is tempting, but neutrality only fixes the TOTAL charge — the outer surface carries $+q$ to compensate.",
                "zh": "在金属内部作高斯面，其通量必为零（导体内 $E=0$），故包围的净电荷必须为零：内表面恰好带 $-q$，即使电荷不在中心（此时感应电荷分布不均匀）。“因为中性所以为零”很有诱惑性，但中性只约束总电荷——外表面会带 $+q$ 来补偿。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The field just outside a charged conductor’s surface is $\\sigma/\\varepsilon_0$, twice the field $\\sigma/(2\\varepsilon_0)$ of an isolated sheet with the same $\\sigma$. Why?",
                "zh": "带电导体表面外侧的场是 $\\sigma/\\varepsilon_0$，是相同 $\\sigma$ 的孤立带电薄片的场 $\\sigma/(2\\varepsilon_0)$ 的两倍。为什么？"
              },
              "choices": [
                "Conductors amplify electric fields by polarization",
                "For the conductor pillbox, flux exits only the outer face since $E=0$ inside the metal",
                "The conductor carries twice as much charge",
                "The isolated sheet result is wrong; both are $\\sigma/\\varepsilon_0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "For an isolated sheet, the pillbox flux exits through BOTH faces ($2EA$); for a conductor, one face of the pillbox is inside the metal where $E = 0$, so all the flux $\\sigma A/\\varepsilon_0$ exits through the single outer face, giving $E = \\sigma/\\varepsilon_0$. The \"amplification\" choice sounds plausible but has no basis — it is purely a matter of where the flux can exit.",
                "zh": "对孤立薄片，扁盒的通量从两个端面穿出（$2EA$）；对导体，扁盒的一个端面位于金属内部（$E = 0$），所以全部通量 $\\sigma A/\\varepsilon_0$ 只从外侧一个端面穿出，得 $E = \\sigma/\\varepsilon_0$。“放大场”的选项听起来合理，但毫无依据——这纯粹是通量从哪里穿出的问题。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An insulating sphere of radius $R = 0.30\\,\\text{m}$ carries $Q = 4.0\\,\\mu\\text{C}$ uniformly throughout its volume. Using $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$, find the field magnitude in N/C at $r = 0.15\\,\\text{m}$ from the center. Give an integer.",
                "zh": "半径 $R = 0.30\\,\\text{m}$ 的绝缘球体内均匀分布着 $Q = 4.0\\,\\mu\\text{C}$ 的电荷。取 $k = 9.0\\times10^{9}\\,\\text{N·m}^2/\\text{C}^2$，求距球心 $r = 0.15\\,\\text{m}$ 处的场强（单位：N/C，请填一个整数）。"
              },
              "answer": "200000",
              "accept": [
                "200000.0",
                "2.0e5",
                "2e5",
                "200000 N/C"
              ],
              "explanation": {
                "en": "Inside a uniform sphere, $E = kQr/R^3 = (9.0\\times10^9)(4.0\\times10^{-6})(0.15)/(0.30)^3 = 5400/0.027 = 2.0\\times10^5\\,\\text{N/C}$. Equivalently, $q_{\\text{enc}} = Q(r/R)^3 = 0.5\\,\\mu\\text{C}$ and $E = kq_{\\text{enc}}/r^2$ — do NOT use the full $Q$ at $r < R$.",
                "zh": "均匀球体内部 $E = kQr/R^3 = (9.0\\times10^9)(4.0\\times10^{-6})(0.15)/(0.30)^3 = 5400/0.027 = 2.0\\times10^5\\,\\text{N/C}$。等价地，$q_{\\text{enc}} = Q(r/R)^3 = 0.5\\,\\mu\\text{C}$，$E = kq_{\\text{enc}}/r^2$——在 $r < R$ 处切勿使用全部电荷 $Q$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "electric-potential",
      "title": "Unit 9: Electric Potential",
      "titleZh": "第九单元：电势",
      "lessons": [
        {
          "id": "electric-potential",
          "title": "Electric Potential",
          "titleZh": "电势",
          "content": [
            {
              "type": "h2",
              "en": "Electric Potential Energy",
              "zh": "电势能"
            },
            {
              "type": "p",
              "en": "The Coulomb force is conservative, so we can define a potential energy for any assembly of charges. To find the potential energy of two point charges $q_1$ and $q_2$, compute the work an external agent must do to bring $q_2$ from infinity to a distance $r$ from $q_1$ (moving it quasi-statically). Since the external force just balances the Coulomb force, $W_{ext} = -W_{Coulomb} = \\Delta U$:",
              "zh": "库仑力是保守力，因此可以为任意电荷组合定义势能。要求两个点电荷 $q_1$ 与 $q_2$ 的势能，可以计算外力把 $q_2$ 从无穷远缓慢移到距 $q_1$ 为 $r$ 处所做的功。由于外力恰好平衡库仑力，$W_{ext} = -W_{Coulomb} = \\Delta U$："
            },
            {
              "type": "math",
              "tex": "U(r) = -W_{field} = -\\int_{\\infty}^{r} \\frac{kq_1q_2}{r'^2}\\,dr' = \\frac{kq_1q_2}{r}, \\qquad U(\\infty) \\equiv 0"
            },
            {
              "type": "p",
              "en": "The sign is automatic: like charges give $U > 0$ (it costs work to push them together), while opposite charges give $U < 0$ (they are bound). For a system of several point charges, the total potential energy is the sum over every distinct pair: $U = \\sum_{pairs} \\frac{kq_iq_j}{r_{ij}}$. Count each pair once.",
              "zh": "正负号是自动的：同号电荷 $U > 0$（把它们推近需要做功），异号电荷 $U < 0$（它们处于束缚态）。对多个点电荷组成的系统，总势能是对每一对电荷求和：$U = \\sum_{pairs} \\frac{kq_iq_j}{r_{ij}}$。每一对只计一次。"
            },
            {
              "type": "h3",
              "en": "Potential: Energy per Unit Charge",
              "zh": "电势：单位电荷的能量"
            },
            {
              "type": "p",
              "en": "The electric potential $V$ at a point is the potential energy per unit charge that a small test charge $q$ would have there: $V = U/q$, measured in volts ($1\\,\\text{V} = 1\\,\\text{J/C}$). The huge advantage of $V$ over the field $\\vec{E}$ is that potential is a SCALAR: to find the potential of several point charges you simply add numbers — with their signs, but with no components, no angles, no vector addition.",
              "zh": "某点的电势 $V$ 是一个小试探电荷 $q$ 在该点具有的单位电荷势能：$V = U/q$，单位是伏特（$1\\,\\text{V} = 1\\,\\text{J/C}$）。$V$ 相对于场 $\\vec{E}$ 的巨大优势在于电势是标量：求多个点电荷的电势时只需把数字（带正负号）直接相加——没有分量、没有角度、没有矢量合成。"
            },
            {
              "type": "math",
              "tex": "V = \\sum_i \\frac{kq_i}{r_i}"
            },
            {
              "type": "p",
              "en": "A charge $q$ placed where the potential is $V$ has potential energy $U = qV$, and moving it between two points changes its energy by $\\Delta U = q\\,\\Delta V$. Energy conservation then reads $\\tfrac{1}{2}mv_f^2 = \\tfrac{1}{2}mv_i^2 - q\\,\\Delta V$ when only the electric force acts. This energy method is usually far faster than integrating forces.",
              "zh": "把电荷 $q$ 放在电势为 $V$ 的位置，它的势能为 $U = qV$；在两点之间移动时能量改变 $\\Delta U = q\\,\\Delta V$。只有电场力做功时，能量守恒写作 $\\tfrac{1}{2}mv_f^2 = \\tfrac{1}{2}mv_i^2 - q\\,\\Delta V$。这种能量方法通常远比对力积分快。"
            },
            {
              "type": "h3",
              "en": "Connecting V and E in Both Directions",
              "zh": "双向联系 V 与 E"
            },
            {
              "type": "p",
              "en": "Field and potential contain the same information. Given the field, integrate along any path to get the potential difference; given the potential as a function of position, differentiate to recover the field component:",
              "zh": "场和电势包含相同的信息。已知场，沿任意路径积分可得电势差；已知电势关于位置的函数，求导即可还原场的分量："
            },
            {
              "type": "math",
              "tex": "V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{l}, \\qquad E_x = -\\frac{dV}{dx}"
            },
            {
              "type": "p",
              "en": "The minus signs encode a simple fact: $\\vec{E}$ points from high potential toward low potential, \"downhill\" on the potential landscape. Where $V$ changes rapidly with position, the field is strong; where $V$ is flat, $E = 0$ (but $V$ itself need not be zero!).",
              "zh": "负号表达了一个简单事实：$\\vec{E}$ 从高电势指向低电势，即电势\"地形\"的下坡方向。$V$ 随位置变化快的地方场强大；$V$ 平坦的地方 $E = 0$（但 $V$ 本身不一定为零！）。"
            },
            {
              "type": "h3",
              "en": "Equipotentials and Conductors",
              "zh": "等势面与导体"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Equipotential surfaces are always perpendicular to field lines. Moving a charge along an equipotential takes zero work, so $\\vec{E}$ can have no component along the surface.",
                  "zh": "等势面总是垂直于电场线。沿等势面移动电荷不做功，所以 $\\vec{E}$ 在面内不能有分量。"
                },
                {
                  "en": "In electrostatic equilibrium, $E = 0$ everywhere inside a conductor, so the entire conductor — interior and surface — sits at one constant potential.",
                  "zh": "静电平衡时导体内部处处 $E = 0$，因此整个导体——内部和表面——处于同一个恒定电势。"
                },
                {
                  "en": "Closely spaced equipotentials mean a strong field: $|E| \\approx |\\Delta V|/\\Delta x$ between neighboring surfaces.",
                  "zh": "等势面密集意味着场强大：相邻等势面之间 $|E| \\approx |\\Delta V|/\\Delta x$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For a conducting sphere of radius $R$ carrying charge $Q$: outside, Gauss's law gives the point-charge field, so $V(r) = kQ/r$ for $r \\ge R$. Inside, $E = 0$, so integrating from the surface inward adds nothing — the potential stays at its surface value:",
              "zh": "对半径为 $R$、带电 $Q$ 的导体球：球外由高斯定律得点电荷场，故 $r \\ge R$ 时 $V(r) = kQ/r$。球内 $E = 0$，从表面向内积分不再改变电势——电势保持表面值："
            },
            {
              "type": "math",
              "tex": "V(r) = \\frac{kQ}{r} \\;\\; (r \\ge R), \\qquad V(r) = \\frac{kQ}{R} \\;\\; (r \\le R)"
            },
            {
              "type": "note",
              "en": "AP exam tip: $E = 0$ does NOT imply $V = 0$, and $V = 0$ does not imply $E = 0$. Midway between two equal positive charges, $E = 0$ but $V = 2kq/d \\ne 0$; midway between $+q$ and $-q$, $V = 0$ but $E \\ne 0$. Also, potential is a scalar — a very common error is to \"add components\" of potentials or to drop the sign of a negative charge.",
              "zh": "AP 考试提示：$E = 0$ 不代表 $V = 0$，$V = 0$ 也不代表 $E = 0$。两个等量正电荷连线中点处 $E = 0$ 但 $V = 2kq/d \\ne 0$；$+q$ 与 $-q$ 连线中点处 $V = 0$ 但 $E \\ne 0$。另外电势是标量——常见错误是给电势\"分解分量\"，或漏掉负电荷的符号。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Potential of a ring, then E by differentiation",
                "zh": "例题 1：圆环的电势，再求导得 E"
              },
              "problem": {
                "en": "A thin ring of radius $R$ carries total charge $Q$ uniformly distributed. Find the potential $V(x)$ at a point on the ring's axis a distance $x$ from its center, then obtain the axial field $E_x$ by differentiation.",
                "zh": "半径为 $R$ 的细圆环均匀带有总电荷 $Q$。求轴线上距环心 $x$ 处的电势 $V(x)$，再通过求导得到轴向场 $E_x$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Every element of charge $dq$ on the ring is the SAME distance $\\sqrt{x^2 + R^2}$ from the axial point. Because potential is a scalar, we just add the contributions with no components:",
                  "zh": "环上每个电荷元 $dq$ 到轴上该点的距离都相同，为 $\\sqrt{x^2 + R^2}$。由于电势是标量，直接相加、无需分量："
                },
                {
                  "type": "math",
                  "tex": "V(x) = \\int \\frac{k\\,dq}{\\sqrt{x^2+R^2}} = \\frac{k}{\\sqrt{x^2+R^2}} \\int dq = \\frac{kQ}{\\sqrt{x^2+R^2}}"
                },
                {
                  "type": "p",
                  "en": "By symmetry the field on the axis points along the axis, so $E_x = -dV/dx$:",
                  "zh": "由对称性，轴上的场沿轴向，因此 $E_x = -dV/dx$："
                },
                {
                  "type": "math",
                  "tex": "E_x = -\\frac{d}{dx}\\left[kQ(x^2+R^2)^{-1/2}\\right] = \\frac{kQx}{(x^2+R^2)^{3/2}}"
                },
                {
                  "type": "p",
                  "en": "Checks: at $x = 0$, $E_x = 0$ (symmetry), and for $x \\gg R$, $E_x \\to kQ/x^2$, the point-charge field. Note how much easier this was than integrating vector field contributions directly.",
                  "zh": "检验：$x = 0$ 时 $E_x = 0$（对称性）；$x \\gg R$ 时 $E_x \\to kQ/x^2$，即点电荷场。注意这比直接对矢量场积分容易得多。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Energy method for a released charge",
                "zh": "例题 2：释放电荷的能量方法"
              },
              "problem": {
                "en": "A point charge $Q = +4\\,\\mu\\text{C}$ is fixed in place. A small ball of mass $m = 5.0\\,\\text{g}$ carrying charge $q = +3\\,\\mu\\text{C}$ is released from rest at a distance $r = 0.30\\,\\text{m}$ from $Q$. Ignoring gravity, find the ball's speed when it is very far away. Use $k = 9.0\\times10^9\\,\\text{N·m}^2/\\text{C}^2$.",
                "zh": "点电荷 $Q = +4\\,\\mu\\text{C}$ 固定不动。质量 $m = 5.0\\,\\text{g}$、带电 $q = +3\\,\\mu\\text{C}$ 的小球从距 $Q$ 为 $r = 0.30\\,\\text{m}$ 处由静止释放。忽略重力，求小球到达很远处时的速度。取 $k = 9.0\\times10^9\\,\\text{N·m}^2/\\text{C}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The force varies with distance, so Newton's second law with constant acceleration fails — use energy conservation. Initial potential energy:",
                  "zh": "力随距离变化，不能用匀加速公式——改用能量守恒。初始势能："
                },
                {
                  "type": "math",
                  "tex": "U_i = \\frac{kQq}{r} = \\frac{(9.0\\times10^9)(4\\times10^{-6})(3\\times10^{-6})}{0.30} = 0.36\\,\\text{J}"
                },
                {
                  "type": "p",
                  "en": "Far away, $U_f \\to 0$, so all of it becomes kinetic energy:",
                  "zh": "很远处 $U_f \\to 0$，势能全部转化为动能："
                },
                {
                  "type": "math",
                  "tex": "\\tfrac{1}{2}mv^2 = 0.36\\,\\text{J} \\;\\Rightarrow\\; v = \\sqrt{\\frac{2(0.36)}{0.0050}} = 12\\,\\text{m/s}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Charges $+3\\,\\mu\\text{C}$ and $-3\\,\\mu\\text{C}$ are fixed $2.0\\,\\text{m}$ apart. What is the electric potential at the midpoint between them?",
                "zh": "电荷 $+3\\,\\mu\\text{C}$ 和 $-3\\,\\mu\\text{C}$ 固定相距 $2.0\\,\\text{m}$。两者连线中点处的电势是多少？"
              },
              "choices": [
                "$54{,}000\\,\\text{V}$",
                "$27{,}000\\,\\text{V}$",
                "$0\\,\\text{V}$",
                "$-27{,}000\\,\\text{V}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Potentials add as signed scalars: $V = k(+3\\,\\mu\\text{C})/1.0 + k(-3\\,\\mu\\text{C})/1.0 = 0$. Choosing $54{,}000\\,\\text{V}$ is tempting if you add magnitudes and ignore the sign of the negative charge — but note the field at the midpoint is NOT zero.",
                "zh": "电势按带符号的标量相加：$V = k(+3\\,\\mu\\text{C})/1.0 + k(-3\\,\\mu\\text{C})/1.0 = 0$。若忽略负电荷的符号、只加大小，就会误选 $54{,}000\\,\\text{V}$——但注意中点处的电场并不为零。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about equipotential surfaces is correct?",
                "zh": "关于等势面的说法哪项正确？"
              },
              "choices": [
                "They are parallel to the electric field lines",
                "Moving a charge along one requires zero work by the electric force",
                "They can cross each other in empty space",
                "The field is always zero on an equipotential surface"
              ],
              "answer": 1,
              "explanation": {
                "en": "Along an equipotential, $\\Delta V = 0$, so $W = -q\\,\\Delta V = 0$. Equipotentials are perpendicular (not parallel) to field lines, two different equipotentials cannot cross (a point cannot have two potentials), and the field on one need not be zero — it is merely perpendicular to it.",
                "zh": "沿等势面 $\\Delta V = 0$，故 $W = -q\\,\\Delta V = 0$。等势面与电场线垂直而非平行；两个不同的等势面不能相交（一点不能有两个电势）；面上的场不必为零——只是与面垂直。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A point charge $q = 2.0\\,\\mu\\text{C}$ is in vacuum. Find the electric potential (in volts, an integer) at a distance of $0.30\\,\\text{m}$. Use $k = 9.0\\times10^9\\,\\text{N·m}^2/\\text{C}^2$.",
                "zh": "真空中有点电荷 $q = 2.0\\,\\mu\\text{C}$。求距其 $0.30\\,\\text{m}$ 处的电势（单位伏特，填一个整数）。取 $k = 9.0\\times10^9\\,\\text{N·m}^2/\\text{C}^2$。"
              },
              "answer": "60000",
              "accept": [
                "60000.0",
                "60000 V",
                "6.0e4"
              ],
              "explanation": {
                "en": "$V = kq/r = (9.0\\times10^9)(2.0\\times10^{-6})/0.30 = 60{,}000\\,\\text{V}$.",
                "zh": "$V = kq/r = (9.0\\times10^9)(2.0\\times10^{-6})/0.30 = 60{,}000\\,\\text{V}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The potential along the x-axis is $V(x) = 5x^2 - 3x$ (volts, $x$ in meters). What is $E_x$ at $x = 1\\,\\text{m}$?",
                "zh": "沿 x 轴电势为 $V(x) = 5x^2 - 3x$（伏特，$x$ 以米计）。$x = 1\\,\\text{m}$ 处 $E_x$ 是多少？"
              },
              "choices": [
                "$-7\\,\\text{V/m}$",
                "$7\\,\\text{V/m}$",
                "$2\\,\\text{V/m}$",
                "$-2\\,\\text{V/m}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$E_x = -dV/dx = -(10x - 3)$. At $x = 1$, $E_x = -(10 - 3) = -7\\,\\text{V/m}$. Forgetting the minus sign in $E_x = -dV/dx$ gives the tempting $+7\\,\\text{V/m}$; evaluating $V$ instead of its derivative gives $2$.",
                "zh": "$E_x = -dV/dx = -(10x - 3)$。在 $x = 1$ 处 $E_x = -(10-3) = -7\\,\\text{V/m}$。忘记 $E_x = -dV/dx$ 中的负号会误选 $+7\\,\\text{V/m}$；误算 $V$ 本身而非其导数会得到 $2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Three charges of $+2.0\\,\\mu\\text{C}$ each sit at the corners of an equilateral triangle with side $0.20\\,\\text{m}$. Find the total electric potential energy of the assembly in joules (give a decimal, e.g. 0.75). Use $k = 9.0\\times10^9$.",
                "zh": "三个 $+2.0\\,\\mu\\text{C}$ 的电荷分别位于边长 $0.20\\,\\text{m}$ 的等边三角形三个顶点。求该系统的总电势能（单位焦耳，填小数，如 0.75）。取 $k = 9.0\\times10^9$。"
              },
              "answer": "0.54",
              "accept": [
                "0.540",
                ".54",
                "0.54 J"
              ],
              "explanation": {
                "en": "There are three pairs, each with the same separation: $U = 3 \\times \\frac{kq^2}{d} = 3 \\times \\frac{(9.0\\times10^9)(2.0\\times10^{-6})^2}{0.20} = 3(0.18) = 0.54\\,\\text{J}$. A common error is counting each pair twice (giving 1.08 J) or only once total (0.18 J).",
                "zh": "共有三对电荷，每对间距相同：$U = 3 \\times \\frac{kq^2}{d} = 3 \\times \\frac{(9.0\\times10^9)(2.0\\times10^{-6})^2}{0.20} = 3(0.18) = 0.54\\,\\text{J}$。常见错误是每对算两次（得 1.08 J）或总共只算一对（0.18 J）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An isolated conducting sphere of radius $R$ carries charge $+Q$. What is the potential at its center?",
                "zh": "半径为 $R$ 的孤立导体球带电 $+Q$。球心处的电势是多少？"
              },
              "choices": [
                "$0$",
                "$\\frac{kQ}{2R}$",
                "$\\text{Infinite}$",
                "$\\frac{kQ}{R}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Inside a conductor $E = 0$, so the potential cannot change as you move inward: the center is at the same potential as the surface, $kQ/R$. Answering $0$ confuses \"zero field\" with \"zero potential\" — the classic trap.",
                "zh": "导体内部 $E = 0$，向内移动时电势不再变化：球心与表面同电势，即 $kQ/R$。答 $0$ 是把\"场为零\"与\"电势为零\"混为一谈——经典陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In an equipotential-mapping lab with conductive paper, a student draws equipotential lines at $2.0\\,\\text{V}$ intervals. Near the center of the paper, adjacent lines are $4.0\\,\\text{mm}$ apart. The best estimate of the field magnitude there, and its direction, is:",
                "zh": "在导电纸等势线实验中，学生每隔 $2.0\\,\\text{V}$ 画一条等势线。纸中央附近相邻两条线相距 $4.0\\,\\text{mm}$。该处场强大小及方向的最佳估计是："
              },
              "choices": [
                "$500\\,\\text{V/m}$, parallel to the lines",
                "$500\\,\\text{V/m}$, perpendicular to the lines, toward decreasing $V$",
                "$8.0\\,\\text{V/m}$, perpendicular to the lines",
                "$0.5\\,\\text{V/m}$, toward increasing $V$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$|E| \\approx |\\Delta V|/\\Delta x = 2.0/0.0040 = 500\\,\\text{V/m}$, directed perpendicular to the equipotentials from high to low potential. Multiplying instead of dividing gives the tempting $8.0\\,\\text{V/m}$ ($2 \\times 4$); the field is never parallel to equipotential lines.",
                "zh": "$|E| \\approx |\\Delta V|/\\Delta x = 2.0/0.0040 = 500\\,\\text{V/m}$，方向垂直于等势线、由高电势指向低电势。误把相乘当相除会得到 $8.0\\,\\text{V/m}$（$2 \\times 4$）；场永远不会平行于等势线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ring of radius $R = 0.30\\,\\text{m}$ carries charge $Q = 5.0\\,\\mu\\text{C}$. Using $E_x = \\frac{kQx}{(x^2+R^2)^{3/2}}$, find the field magnitude (in V/m, an integer) on the axis at $x = 0.40\\,\\text{m}$. Use $k = 9.0\\times10^9$.",
                "zh": "半径 $R = 0.30\\,\\text{m}$ 的圆环带电 $Q = 5.0\\,\\mu\\text{C}$。利用 $E_x = \\frac{kQx}{(x^2+R^2)^{3/2}}$，求轴线上 $x = 0.40\\,\\text{m}$ 处的场强（单位 V/m，填一个整数）。取 $k = 9.0\\times10^9$。"
              },
              "answer": "144000",
              "accept": [
                "144000.0",
                "144000 V/m",
                "1.44e5"
              ],
              "explanation": {
                "en": "$x^2 + R^2 = 0.16 + 0.09 = 0.25$, so $(x^2+R^2)^{3/2} = 0.25^{3/2} = 0.125$. Then $E_x = \\frac{(9.0\\times10^9)(5.0\\times10^{-6})(0.40)}{0.125} = \\frac{18{,}000}{0.125} = 144{,}000\\,\\text{V/m}$. This formula itself comes from differentiating $V(x) = kQ/\\sqrt{x^2+R^2}$.",
                "zh": "$x^2 + R^2 = 0.16 + 0.09 = 0.25$，故 $(x^2+R^2)^{3/2} = 0.25^{3/2} = 0.125$。于是 $E_x = \\frac{(9.0\\times10^9)(5.0\\times10^{-6})(0.40)}{0.125} = \\frac{18{,}000}{0.125} = 144{,}000\\,\\text{V/m}$。该公式本身来自对 $V(x) = kQ/\\sqrt{x^2+R^2}$ 求导。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "conductors-capacitors",
      "title": "Unit 10: Conductors and Capacitors",
      "titleZh": "第十单元：导体与电容器",
      "lessons": [
        {
          "id": "capacitors-dielectrics",
          "title": "Capacitance and Dielectrics",
          "titleZh": "电容与电介质",
          "content": [
            {
              "type": "h2",
              "en": "What Capacitance Measures",
              "zh": "电容衡量什么"
            },
            {
              "type": "p",
              "en": "A capacitor is any pair of conductors carrying charges $+Q$ and $-Q$. Doubling the charge doubles the field everywhere (superposition), which doubles the potential difference — so the ratio $Q/V$ is fixed by geometry alone. That ratio is the capacitance:",
              "zh": "电容器是带电 $+Q$ 和 $-Q$ 的任意一对导体。电荷加倍时，处处的场都加倍（叠加原理），于是电势差也加倍——所以比值 $Q/V$ 仅由几何形状决定。这个比值就是电容："
            },
            {
              "type": "math",
              "tex": "C = \\frac{Q}{V} \\qquad (1\\,\\text{F} = 1\\,\\text{C/V})"
            },
            {
              "type": "p",
              "en": "A farad is enormous; real capacitors are typically picofarads to millifarads. Note that $Q$ means the charge on ONE plate — the total charge of a capacitor is zero.",
              "zh": "一法拉非常大；实际电容器通常在皮法到毫法之间。注意 $Q$ 指其中一块极板上的电荷——电容器的总电荷为零。"
            },
            {
              "type": "h3",
              "en": "Deriving C from Geometry",
              "zh": "由几何推导电容"
            },
            {
              "type": "p",
              "en": "The universal recipe: (1) put $\\pm Q$ on the conductors, (2) find $\\vec{E}$ between them with Gauss's law, (3) integrate $V = \\int \\vec{E}\\cdot d\\vec{l}$ from one conductor to the other, (4) form $C = Q/V$. For parallel plates of area $A$ and separation $d$, a Gaussian pillbox through one plate gives $E = \\sigma/\\varepsilon_0 = Q/(\\varepsilon_0 A)$, uniform between the plates, so $V = Ed = Qd/(\\varepsilon_0 A)$:",
              "zh": "通用步骤：(1) 给两导体加上 $\\pm Q$；(2) 用高斯定律求两者之间的 $\\vec{E}$；(3) 从一个导体到另一个积分 $V = \\int \\vec{E}\\cdot d\\vec{l}$；(4) 计算 $C = Q/V$。对面积 $A$、间距 $d$ 的平行板，穿过一块板的高斯\"药盒\"给出 $E = \\sigma/\\varepsilon_0 = Q/(\\varepsilon_0 A)$，板间均匀，故 $V = Ed = Qd/(\\varepsilon_0 A)$："
            },
            {
              "type": "math",
              "tex": "C_{plate} = \\frac{\\varepsilon_0 A}{d}"
            },
            {
              "type": "p",
              "en": "For coaxial cylinders (radii $a < b$, length $L$), Gauss gives $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$, and $V = \\int_a^b E\\,dr = \\frac{\\lambda}{2\\pi\\varepsilon_0}\\ln\\frac{b}{a}$. For concentric spheres (radii $a < b$), $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$ and $V = \\frac{Q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$. Dividing $Q$ by $V$:",
              "zh": "对同轴圆柱（半径 $a < b$，长度 $L$），高斯定律给出 $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$，$V = \\int_a^b E\\,dr = \\frac{\\lambda}{2\\pi\\varepsilon_0}\\ln\\frac{b}{a}$。对同心球壳（半径 $a < b$），$E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$，$V = \\frac{Q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$。用 $Q$ 除以 $V$："
            },
            {
              "type": "math",
              "tex": "C_{cyl} = \\frac{2\\pi\\varepsilon_0 L}{\\ln(b/a)}, \\qquad C_{sph} = \\frac{4\\pi\\varepsilon_0 ab}{b-a}"
            },
            {
              "type": "h3",
              "en": "Series and Parallel — Reason It Out",
              "zh": "串联与并联——用推理导出"
            },
            {
              "type": "p",
              "en": "In PARALLEL, both capacitors span the same two nodes, so they share the same $V$; the total stored charge is $Q = Q_1 + Q_2 = C_1V + C_2V$, so $C_{eq} = Q/V = C_1 + C_2$. In SERIES, the section between the two capacitors is an isolated conductor: charge cannot enter or leave it, so induction forces every capacitor in the chain to hold the SAME $Q$. The voltages add: $V = Q/C_1 + Q/C_2$, so:",
              "zh": "并联时两个电容器跨接同样的两个节点，电压 $V$ 相同；总电荷 $Q = Q_1 + Q_2 = C_1V + C_2V$，故 $C_{eq} = Q/V = C_1 + C_2$。串联时两电容器之间的一段是孤立导体：电荷无法进出，感应使链中每个电容器都带相同的 $Q$。电压相加：$V = Q/C_1 + Q/C_2$，故："
            },
            {
              "type": "math",
              "tex": "\\text{Parallel: } C_{eq} = \\sum_i C_i, \\qquad \\text{Series: } \\frac{1}{C_{eq}} = \\sum_i \\frac{1}{C_i}"
            },
            {
              "type": "note",
              "en": "AP exam tip: capacitors combine \"opposite\" to resistors — parallel capacitances add directly. And remember: series capacitors ALL carry the same charge, no matter how different their capacitances are. Blindly adding series capacitances is one of the most common multiple-choice traps.",
              "zh": "AP 考试提示：电容器的组合规律与电阻\"相反\"——并联电容直接相加。并且记住：串联的电容器无论电容差多少，都带相同的电荷。把串联电容直接相加是最常见的选择题陷阱之一。"
            },
            {
              "type": "h3",
              "en": "Stored Energy",
              "zh": "储存的能量"
            },
            {
              "type": "p",
              "en": "Charging a capacitor means moving charge against a growing potential difference. When charge $q$ is already present, moving the next $dq$ requires $dW = V\\,dq = (q/C)\\,dq$. Integrating from $0$ to $Q$:",
              "zh": "给电容器充电就是逆着不断增大的电势差搬运电荷。已有电荷 $q$ 时，再搬 $dq$ 需要 $dW = V\\,dq = (q/C)\\,dq$。从 $0$ 积分到 $Q$："
            },
            {
              "type": "math",
              "tex": "U = \\int_0^Q \\frac{q}{C}\\,dq = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2 = \\frac{1}{2}QV"
            },
            {
              "type": "p",
              "en": "For a parallel-plate capacitor, $U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}\\frac{\\varepsilon_0 A}{d}(Ed)^2 = \\tfrac{1}{2}\\varepsilon_0 E^2 (Ad)$. Since $Ad$ is the volume between the plates, the energy per unit volume stored in any electric field is $u = \\tfrac{1}{2}\\varepsilon_0 E^2$ — the energy lives in the field itself.",
              "zh": "对平行板电容器，$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}\\frac{\\varepsilon_0 A}{d}(Ed)^2 = \\tfrac{1}{2}\\varepsilon_0 E^2 (Ad)$。由于 $Ad$ 是板间体积，任何电场中单位体积储存的能量为 $u = \\tfrac{1}{2}\\varepsilon_0 E^2$——能量储存在场本身之中。"
            },
            {
              "type": "h3",
              "en": "Dielectrics: the Connected-vs-Isolated Trap",
              "zh": "电介质：接通与断开的经典陷阱"
            },
            {
              "type": "p",
              "en": "A dielectric of constant $\\kappa > 1$ between the plates polarizes: its bound surface charges create an internal field opposing the applied one, reducing the net field by the factor $\\kappa$ for a given plate charge. The result is always $C = \\kappa C_0$. But what happens to $Q$, $V$, $E$, and $U$ when you insert the slab depends on what the capacitor is connected to:",
              "zh": "介电常数 $\\kappa > 1$ 的电介质置于板间会极化：其束缚面电荷产生与外场相反的内场，使给定极板电荷下的净场减小为原来的 $1/\\kappa$。结果总是 $C = \\kappa C_0$。但插入介质后 $Q$、$V$、$E$、$U$ 如何变化，取决于电容器接在什么上："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Battery stays CONNECTED ($V$ fixed): $C \\to \\kappa C_0$, $V$ unchanged, $E = V/d$ unchanged, $Q = CV \\to \\kappa Q_0$ (the battery delivers more charge), $U = \\tfrac{1}{2}CV^2 \\to \\kappa U_0$.",
                  "zh": "电池保持接通（$V$ 固定）：$C \\to \\kappa C_0$，$V$ 不变，$E = V/d$ 不变，$Q = CV \\to \\kappa Q_0$（电池补充更多电荷），$U = \\tfrac{1}{2}CV^2 \\to \\kappa U_0$。"
                },
                {
                  "en": "Battery DISCONNECTED first ($Q$ fixed): $C \\to \\kappa C_0$, $Q$ unchanged (isolated plates), $V = Q/C \\to V_0/\\kappa$, $E \\to E_0/\\kappa$, $U = \\tfrac{Q^2}{2C} \\to U_0/\\kappa$ — the energy DROPS because the slab is pulled inward and the field does positive work on it.",
                  "zh": "先断开电池（$Q$ 固定）：$C \\to \\kappa C_0$，$Q$ 不变（极板孤立），$V = Q/C \\to V_0/\\kappa$，$E \\to E_0/\\kappa$，$U = \\tfrac{Q^2}{2C} \\to U_0/\\kappa$——能量减小，因为介质板被吸入，电场对它做正功。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: before answering ANY \"insert/remove a dielectric\" or \"change the plate separation\" question, first ask: is the battery still connected (then $V$ is fixed) or has it been removed (then $Q$ is fixed)? Then use whichever energy form keeps the fixed quantity explicit: $\\tfrac{1}{2}CV^2$ for fixed $V$, $\\tfrac{Q^2}{2C}$ for fixed $Q$.",
              "zh": "AP 考试提示：回答任何\"插入/取出介质\"或\"改变板间距\"的问题之前，先问：电池还接着吗（则 $V$ 固定），还是已断开（则 $Q$ 固定）？然后选用能显式保留固定量的能量公式：$V$ 固定用 $\\tfrac{1}{2}CV^2$，$Q$ 固定用 $\\tfrac{Q^2}{2C}$。"
            },
            {
              "type": "p",
              "en": "Applications are everywhere: camera flashes and defibrillators dump stored energy quickly ($U = \\tfrac{1}{2}CV^2$ released in milliseconds); DRAM stores each bit as charge on a tiny capacitor; touch screens and some keyboards sense the capacitance change when a finger or keypress alters the geometry or effective dielectric.",
              "zh": "应用无处不在：相机闪光灯和除颤器在毫秒内释放储存的能量（$U = \\tfrac{1}{2}CV^2$）；DRAM 用微小电容器上的电荷存储每一位数据；触摸屏和部分键盘通过手指或按键改变几何结构或等效介质引起的电容变化来感应输入。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Deriving the spherical capacitor",
                "zh": "例题 1：推导球形电容器"
              },
              "problem": {
                "en": "A spherical capacitor consists of an inner conducting sphere of radius $a$ with charge $+Q$ and a concentric outer shell of radius $b$ with charge $-Q$. Derive its capacitance from first principles.",
                "zh": "球形电容器由半径为 $a$、带电 $+Q$ 的内导体球和半径为 $b$、带电 $-Q$ 的同心外壳组成。从基本原理推导其电容。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1 — field: a spherical Gaussian surface of radius $r$ with $a < r < b$ encloses only $+Q$, so by symmetry $E(4\\pi r^2) = Q/\\varepsilon_0$, giving $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$, radially outward.",
                  "zh": "第一步——求场：半径 $r$（$a < r < b$）的球形高斯面只包围 $+Q$，由对称性 $E(4\\pi r^2) = Q/\\varepsilon_0$，得 $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$，沿径向向外。"
                },
                {
                  "type": "p",
                  "en": "Step 2 — potential difference, integrating from inner to outer conductor:",
                  "zh": "第二步——电势差，从内导体积分到外导体："
                },
                {
                  "type": "math",
                  "tex": "V = \\int_a^b \\frac{Q}{4\\pi\\varepsilon_0 r^2}\\,dr = \\frac{Q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right) = \\frac{Q}{4\\pi\\varepsilon_0}\\,\\frac{b-a}{ab}"
                },
                {
                  "type": "p",
                  "en": "Step 3 — capacitance:",
                  "zh": "第三步——电容："
                },
                {
                  "type": "math",
                  "tex": "C = \\frac{Q}{V} = \\frac{4\\pi\\varepsilon_0 ab}{b-a}"
                },
                {
                  "type": "p",
                  "en": "Check the limit $b \\to a + d$ with $d \\ll a$: $C \\to \\frac{4\\pi\\varepsilon_0 a^2}{d} = \\frac{\\varepsilon_0 A}{d}$ — the parallel-plate result, as it must be when the gap is thin.",
                  "zh": "检验极限 $b \\to a + d$（$d \\ll a$）：$C \\to \\frac{4\\pi\\varepsilon_0 a^2}{d} = \\frac{\\varepsilon_0 A}{d}$——正是平行板结果，间隙很薄时理应如此。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Dielectric inserted after disconnecting",
                "zh": "例题 2：断开电源后插入介质"
              },
              "problem": {
                "en": "A $6.0\\,\\mu\\text{F}$ capacitor is charged by a $12\\,\\text{V}$ battery, then DISCONNECTED. A dielectric slab with $\\kappa = 3.0$ is slid in, filling the gap. Find the new charge, voltage, and stored energy, and compare the energy to its initial value.",
                "zh": "一个 $6.0\\,\\mu\\text{F}$ 的电容器用 $12\\,\\text{V}$ 电池充电后断开电源。随后插入 $\\kappa = 3.0$ 的介质板填满间隙。求新的电荷、电压和储能，并与初始能量比较。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Initially $Q_0 = C_0V_0 = (6.0\\,\\mu\\text{F})(12\\,\\text{V}) = 72\\,\\mu\\text{C}$ and $U_0 = \\tfrac{1}{2}C_0V_0^2 = \\tfrac{1}{2}(6.0\\times10^{-6})(144) = 432\\,\\mu\\text{J}$.",
                  "zh": "初始 $Q_0 = C_0V_0 = (6.0\\,\\mu\\text{F})(12\\,\\text{V}) = 72\\,\\mu\\text{C}$，$U_0 = \\tfrac{1}{2}C_0V_0^2 = \\tfrac{1}{2}(6.0\\times10^{-6})(144) = 432\\,\\mu\\text{J}$。"
                },
                {
                  "type": "p",
                  "en": "Disconnected means the plates are isolated: $Q = 72\\,\\mu\\text{C}$ stays FIXED. The capacitance becomes $C = \\kappa C_0 = 18\\,\\mu\\text{F}$, so:",
                  "zh": "断开电源意味着极板孤立：$Q = 72\\,\\mu\\text{C}$ 保持不变。电容变为 $C = \\kappa C_0 = 18\\,\\mu\\text{F}$，于是："
                },
                {
                  "type": "math",
                  "tex": "V = \\frac{Q}{C} = \\frac{72\\,\\mu\\text{C}}{18\\,\\mu\\text{F}} = 4.0\\,\\text{V}, \\qquad U = \\frac{Q^2}{2C} = \\frac{(72\\times10^{-6})^2}{2(18\\times10^{-6})} = 144\\,\\mu\\text{J}"
                },
                {
                  "type": "p",
                  "en": "The energy fell to $U_0/\\kappa$ ($432 \\to 144\\,\\mu\\text{J}$). The missing $288\\,\\mu\\text{J}$ went into mechanical work: the fringing field pulls the slab inward, so you would have to do negative work (hold it back) as it enters.",
                  "zh": "能量降为 $U_0/\\kappa$（$432 \\to 144\\,\\mu\\text{J}$）。减少的 $288\\,\\mu\\text{J}$ 转化为机械功：边缘场把介质板向内吸，插入过程中你反而要拉住它（做负功）。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A parallel-plate capacitor stays connected to a battery while the plate separation $d$ is doubled. What happens to the charge on the plates?",
                "zh": "平行板电容器始终接在电池上，板间距 $d$ 加倍。极板上的电荷如何变化？"
              },
              "choices": [
                "It doubles",
                "It halves",
                "It is unchanged",
                "It drops to one quarter"
              ],
              "answer": 1,
              "explanation": {
                "en": "Connected to the battery means $V$ is fixed. $C = \\varepsilon_0 A/d$ halves when $d$ doubles, so $Q = CV$ halves. \"Unchanged\" is the trap for students who assume charge is always conserved on the plates — that is only true when the battery is disconnected.",
                "zh": "接着电池意味着 $V$ 固定。$d$ 加倍时 $C = \\varepsilon_0 A/d$ 减半，故 $Q = CV$ 减半。\"不变\"是陷阱——只有断开电池时极板电荷才保持不变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A parallel-plate capacitor has plate area $A = 0.020\\,\\text{m}^2$ and separation $d = 1.0\\,\\text{mm}$. Find its capacitance in picofarads (3 significant figures). Use $\\varepsilon_0 = 8.85\\times10^{-12}\\,\\text{F/m}$.",
                "zh": "平行板电容器板面积 $A = 0.020\\,\\text{m}^2$，间距 $d = 1.0\\,\\text{mm}$。求其电容，单位皮法（保留 3 位有效数字）。取 $\\varepsilon_0 = 8.85\\times10^{-12}\\,\\text{F/m}$。"
              },
              "answer": "177",
              "accept": [
                "177.0",
                "177 pF"
              ],
              "explanation": {
                "en": "$C = \\varepsilon_0 A/d = (8.85\\times10^{-12})(0.020)/(0.0010) = 1.77\\times10^{-10}\\,\\text{F} = 177\\,\\text{pF}$. Watch the unit conversion: $1\\,\\text{mm} = 10^{-3}\\,\\text{m}$.",
                "zh": "$C = \\varepsilon_0 A/d = (8.85\\times10^{-12})(0.020)/(0.0010) = 1.77\\times10^{-10}\\,\\text{F} = 177\\,\\text{pF}$。注意单位换算：$1\\,\\text{mm} = 10^{-3}\\,\\text{m}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A $6.0\\,\\mu\\text{F}$ and a $3.0\\,\\mu\\text{F}$ capacitor are connected in series. The equivalent capacitance is:",
                "zh": "$6.0\\,\\mu\\text{F}$ 与 $3.0\\,\\mu\\text{F}$ 的电容器串联。等效电容是："
              },
              "choices": [
                "$9.0\\,\\mu\\text{F}$",
                "$4.5\\,\\mu\\text{F}$",
                "$3.0\\,\\mu\\text{F}$",
                "$2.0\\,\\mu\\text{F}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "In series, $\\frac{1}{C_{eq}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$, so $C_{eq} = 2.0\\,\\mu\\text{F}$ — always smaller than the smallest member. $9.0\\,\\mu\\text{F}$ is the parallel answer, the classic mix-up because capacitors combine opposite to resistors.",
                "zh": "串联时 $\\frac{1}{C_{eq}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$，故 $C_{eq} = 2.0\\,\\mu\\text{F}$——总小于其中最小的电容。$9.0\\,\\mu\\text{F}$ 是并联的结果，因电容器组合规律与电阻相反而成为经典混淆项。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $4.0\\,\\mu\\text{F}$ capacitor is charged to $100\\,\\text{V}$. How much energy does it store, in joules? (Give a decimal, e.g. 0.05.)",
                "zh": "一个 $4.0\\,\\mu\\text{F}$ 的电容器充电到 $100\\,\\text{V}$。它储存多少能量？单位焦耳（填小数，如 0.05）。"
              },
              "answer": "0.02",
              "accept": [
                "0.020",
                ".02",
                "0.02 J"
              ],
              "explanation": {
                "en": "$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(4.0\\times10^{-6})(100)^2 = \\tfrac{1}{2}(4.0\\times10^{-6})(10^4) = 0.02\\,\\text{J}$. Forgetting the factor $\\tfrac{1}{2}$ (giving 0.04 J) is the most common slip.",
                "zh": "$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(4.0\\times10^{-6})(100)^2 = \\tfrac{1}{2}(4.0\\times10^{-6})(10^4) = 0.02\\,\\text{J}$。最常见的失误是漏掉系数 $\\tfrac{1}{2}$（得 0.04 J）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A charged capacitor is DISCONNECTED from its battery, then a dielectric ($\\kappa = 2$) fills the gap. Which set of changes is correct?",
                "zh": "充电后的电容器先与电池断开，再用 $\\kappa = 2$ 的介质填满间隙。哪组变化正确？"
              },
              "choices": [
                "$Q$ unchanged, $V$ halves, $U$ halves",
                "$Q$ doubles, $V$ unchanged, $U$ doubles",
                "$Q$ unchanged, $V$ unchanged, $U$ unchanged",
                "$Q$ halves, $V$ halves, $U$ quarters"
              ],
              "answer": 0,
              "explanation": {
                "en": "Isolated plates fix $Q$. With $C \\to 2C_0$, $V = Q/C$ halves and $U = Q^2/2C$ halves. Choice B describes the connected-battery case — the classic trap of not checking what is held fixed.",
                "zh": "孤立极板使 $Q$ 固定。$C \\to 2C_0$ 后，$V = Q/C$ 减半，$U = Q^2/2C$ 减半。选项 B 描述的是电池仍接通的情形——不先确认哪个量固定正是经典陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A parallel-plate capacitor remains CONNECTED to a battery while a dielectric ($\\kappa = 2$) is inserted. What happens to the electric field between the plates?",
                "zh": "平行板电容器保持与电池接通，插入 $\\kappa = 2$ 的介质。板间电场如何变化？"
              },
              "choices": [
                "It halves",
                "It doubles",
                "It is unchanged",
                "It drops to zero"
              ],
              "answer": 2,
              "explanation": {
                "en": "The battery holds $V$ fixed and the geometry gives $E = V/d$, so $E$ is unchanged. The tempting answer \"halves\" applies to the isolated case, where fixed $Q$ makes $E \\to E_0/\\kappa$. Here the battery supplies extra charge ($Q \\to 2Q_0$) that exactly compensates the dielectric's screening.",
                "zh": "电池使 $V$ 固定，而几何关系给出 $E = V/d$，故 $E$ 不变。诱人的\"减半\"适用于孤立情形（$Q$ 固定使 $E \\to E_0/\\kappa$）。这里电池补充了额外电荷（$Q \\to 2Q_0$），恰好抵消介质的屏蔽作用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $12\\,\\mu\\text{F}$ and a $6.0\\,\\mu\\text{F}$ capacitor in series are connected across a $12\\,\\text{V}$ battery. Find the charge on the $6.0\\,\\mu\\text{F}$ capacitor, in microcoulombs (an integer).",
                "zh": "$12\\,\\mu\\text{F}$ 与 $6.0\\,\\mu\\text{F}$ 的电容器串联后接在 $12\\,\\text{V}$ 电池上。求 $6.0\\,\\mu\\text{F}$ 电容器上的电荷，单位微库仑（填一个整数）。"
              },
              "answer": "48",
              "accept": [
                "48.0",
                "48 uC",
                "48 μC"
              ],
              "explanation": {
                "en": "$C_{eq} = \\frac{(12)(6)}{12+6} = 4.0\\,\\mu\\text{F}$, so the series charge is $Q = C_{eq}V = (4.0\\,\\mu\\text{F})(12\\,\\text{V}) = 48\\,\\mu\\text{C}$ — and series capacitors all carry this same charge. (As a check: $V_6 = 48/6 = 8\\,\\text{V}$, $V_{12} = 48/12 = 4\\,\\text{V}$, and $8 + 4 = 12\\,\\text{V}$.)",
                "zh": "$C_{eq} = \\frac{(12)(6)}{12+6} = 4.0\\,\\mu\\text{F}$，串联电荷 $Q = C_{eq}V = (4.0\\,\\mu\\text{F})(12\\,\\text{V}) = 48\\,\\mu\\text{C}$——串联的每个电容器都带这个电荷。（检验：$V_6 = 48/6 = 8\\,\\text{V}$，$V_{12} = 48/12 = 4\\,\\text{V}$，$8 + 4 = 12\\,\\text{V}$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To measure $\\varepsilon_0 A$ for a parallel-plate capacitor, a student measures $C$ at several separations $d$ and plots $C$ versus $1/d$, obtaining a straight line through the origin with slope $4.425\\times10^{-13}\\,\\text{F·m}$. Using $\\varepsilon_0 = 8.85\\times10^{-12}\\,\\text{F/m}$, the plate area is:",
                "zh": "为测定平行板电容器的 $\\varepsilon_0 A$，学生在多个间距 $d$ 下测量 $C$，并作 $C$ 对 $1/d$ 的图，得到过原点的直线，斜率为 $4.425\\times10^{-13}\\,\\text{F·m}$。取 $\\varepsilon_0 = 8.85\\times10^{-12}\\,\\text{F/m}$，板面积为："
              },
              "choices": [
                "$0.20\\,\\text{m}^2$",
                "$0.050\\,\\text{m}^2$",
                "$3.9\\times10^{-24}\\,\\text{m}^2$",
                "$20\\,\\text{m}^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $C = \\varepsilon_0 A \\cdot \\frac{1}{d}$, the slope of $C$ vs. $1/d$ is $\\varepsilon_0 A$. So $A = \\frac{4.425\\times10^{-13}}{8.85\\times10^{-12}} = 0.050\\,\\text{m}^2$. Multiplying slope by $\\varepsilon_0$ instead of dividing gives the absurd $3.9\\times10^{-24}$ — always check that units and magnitude are physically reasonable.",
                "zh": "由 $C = \\varepsilon_0 A \\cdot \\frac{1}{d}$，$C$ 对 $1/d$ 图的斜率就是 $\\varepsilon_0 A$。故 $A = \\frac{4.425\\times10^{-13}}{8.85\\times10^{-12}} = 0.050\\,\\text{m}^2$。把斜率乘以 $\\varepsilon_0$ 而不是除以它会得到荒谬的 $3.9\\times10^{-24}$——务必检查单位和数量级是否合理。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "electric-circuits",
      "title": "Unit 11: Electric Circuits",
      "titleZh": "第十一单元：电路",
      "lessons": [
        {
          "id": "dc-circuits-kirchhoff",
          "title": "DC Circuits and Kirchhoff's Rules",
          "titleZh": "直流电路与基尔霍夫定律",
          "content": [
            {
              "type": "h2",
              "en": "Current, Resistance, and Ohm's Law",
              "zh": "电流、电阻与欧姆定律"
            },
            {
              "type": "p",
              "en": "Electric current is the rate at which charge passes through a cross-section of a conductor: $I = \\frac{dQ}{dt}$, measured in amperes ($1\\,\\text{A} = 1\\,\\text{C/s}$). Microscopically, current is carried by electrons drifting slowly (typically $\\sim 10^{-4}\\,\\text{m/s}$) through the lattice. If a wire has $n$ charge carriers per unit volume, each with charge $q$, moving with drift speed $v_d$ through cross-sectional area $A$, then in time $dt$ a charge $dQ = nqA(v_d\\,dt)$ crosses any section.",
              "zh": "电流是电荷通过导体某一横截面的速率：$I = \\frac{dQ}{dt}$，单位为安培（$1\\,\\text{A} = 1\\,\\text{C/s}$）。从微观上看，电流由电子在晶格中缓慢漂移（通常约 $10^{-4}\\,\\text{m/s}$）形成。若导线单位体积内有 $n$ 个载流子，每个带电荷 $q$，以漂移速度 $v_d$ 通过横截面积 $A$，则在时间 $dt$ 内通过任一截面的电荷为 $dQ = nqA(v_d\\,dt)$。"
            },
            {
              "type": "math",
              "tex": "I = \\frac{dQ}{dt} = nqAv_d"
            },
            {
              "type": "p",
              "en": "Resistance comes from collisions between drifting electrons and the lattice. Doubling a wire's length is like putting two identical resistors in series (twice the collisions along the path), so $R \\propto L$. Doubling the cross-sectional area is like putting two identical wires in parallel (twice the paths for current), so $R \\propto 1/A$. The material-dependent constant of proportionality is the resistivity $\\rho$:",
              "zh": "电阻来源于漂移电子与晶格的碰撞。把导线长度加倍，相当于两个相同电阻串联（路径上的碰撞加倍），所以 $R \\propto L$；把横截面积加倍，相当于两根相同导线并联（电流通道加倍），所以 $R \\propto 1/A$。与材料有关的比例常数叫电阻率 $\\rho$："
            },
            {
              "type": "math",
              "tex": "R = \\frac{\\rho L}{A}"
            },
            {
              "type": "p",
              "en": "Ohm's law, $V = IR$, states that for many materials the current is proportional to the applied potential difference, with $R$ constant. This is an empirical property of \"ohmic\" materials, not a law of nature: a light-bulb filament heats up so its resistance grows with current (its $I$-$V$ curve bends over), and a diode conducts in only one direction. For a non-ohmic device, $R = V/I$ still defines a resistance, but it changes with operating point.",
              "zh": "欧姆定律 $V = IR$ 指出：对许多材料，电流与所加电势差成正比，$R$ 为常数。这是\"欧姆性\"材料的经验性质，并非自然界的普遍定律：灯泡灯丝因电流发热使电阻随电流增大（其 $I$-$V$ 曲线向下弯曲），二极管只允许单向导通。对非欧姆元件，$R = V/I$ 仍定义电阻，但它随工作点变化。"
            },
            {
              "type": "h3",
              "en": "Series and Parallel Resistors — Derived",
              "zh": "串联与并联电阻——推导"
            },
            {
              "type": "p",
              "en": "In series, the same current $I$ flows through every resistor, and the potential drops add: $V = IR_1 + IR_2 + \\cdots = I(R_1 + R_2 + \\cdots)$. In parallel, every resistor has the same potential difference $V$, and the currents add at the junction: $I = \\frac{V}{R_1} + \\frac{V}{R_2} + \\cdots$. Dividing each result by the common quantity gives:",
              "zh": "串联时，同一电流 $I$ 流过每个电阻，电势降相加：$V = IR_1 + IR_2 + \\cdots = I(R_1 + R_2 + \\cdots)$。并联时，每个电阻两端电势差相同为 $V$，电流在节点处相加：$I = \\frac{V}{R_1} + \\frac{V}{R_2} + \\cdots$。将各结果除以公共量即得："
            },
            {
              "type": "math",
              "tex": "R_{series} = \\sum_i R_i, \\qquad \\frac{1}{R_{parallel}} = \\sum_i \\frac{1}{R_i}"
            },
            {
              "type": "p",
              "en": "Note the consequences: the series equivalent is larger than any individual resistor, while the parallel equivalent is smaller than the smallest individual resistor.",
              "zh": "注意其推论：串联等效电阻大于任何一个单独电阻，而并联等效电阻小于其中最小的电阻。"
            },
            {
              "type": "h3",
              "en": "Kirchhoff's Rules from Conservation Laws",
              "zh": "由守恒定律得到基尔霍夫定律"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Junction rule: the total current into a junction equals the total current out, $\\sum I_{in} = \\sum I_{out}$. This is conservation of charge — charge cannot pile up at (or vanish from) a node in steady state.",
                  "zh": "节点定律：流入节点的总电流等于流出的总电流，$\\sum I_{in} = \\sum I_{out}$。这是电荷守恒——稳态下电荷不能在节点堆积或消失。"
                },
                {
                  "en": "Loop rule: the sum of potential changes around any closed loop is zero, $\\sum \\Delta V = 0$. This is conservation of energy — the electric potential is single-valued, so a charge returning to its starting point has zero net change in potential energy.",
                  "zh": "回路定律：沿任意闭合回路电势变化之和为零，$\\sum \\Delta V = 0$。这是能量守恒——电势是单值的，电荷回到出发点时电势能净变化为零。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Sign conventions for a loop traversal: crossing a resistor in the direction of the assumed current is $-IR$ (potential drops); against the current is $+IR$. Crossing a battery from $-$ terminal to $+$ terminal is $+\\mathcal{E}$; from $+$ to $-$ is $-\\mathcal{E}$. If a solved current comes out negative, the actual direction is opposite to your assumption — the magnitude is still correct.",
              "zh": "回路遍历的符号约定：沿假设电流方向经过电阻记 $-IR$（电势下降），逆电流方向记 $+IR$；从电池负极到正极记 $+\\mathcal{E}$，从正极到负极记 $-\\mathcal{E}$。若解出的电流为负，说明实际方向与假设相反——大小仍然正确。"
            },
            {
              "type": "h3",
              "en": "Real Batteries, Power, and Meters",
              "zh": "真实电池、功率与电表"
            },
            {
              "type": "p",
              "en": "A real battery is modeled as an ideal emf $\\mathcal{E}$ in series with a small internal resistance $r$. When it delivers current $I$, the terminal voltage is $V_{term} = \\mathcal{E} - Ir$, which is less than $\\mathcal{E}$ under load and equals $\\mathcal{E}$ only when $I = 0$ (open circuit). Power delivered to a circuit element with current $I$ and voltage $V$ is $P = IV$; combining with $V = IR$ gives the equivalent forms below. An ammeter is placed in series and is ideally a zero-resistance wire; a voltmeter is placed in parallel across an element and ideally has infinite resistance so it draws no current.",
              "zh": "真实电池的模型是理想电动势 $\\mathcal{E}$ 与一个小的内阻 $r$ 串联。当输出电流为 $I$ 时，端电压为 $V_{term} = \\mathcal{E} - Ir$，带载时小于 $\\mathcal{E}$，仅在 $I = 0$（开路）时等于 $\\mathcal{E}$。电流为 $I$、电压为 $V$ 的元件消耗功率 $P = IV$；结合 $V = IR$ 得到下面的等价形式。电流表应串联接入电路，理想情况下电阻为零；电压表应并联在元件两端，理想情况下电阻无穷大，不分走电流。"
            },
            {
              "type": "math",
              "tex": "P = IV = I^2R = \\frac{V^2}{R}"
            },
            {
              "type": "note",
              "en": "AP exam tip: When ranking power dissipation, choose the right formula for what is shared. Resistors in series share $I$, so use $P = I^2R$ (bigger $R$ dissipates more). Resistors in parallel share $V$, so use $P = V^2/R$ (smaller $R$ dissipates more). A very common FRQ error is a sign mistake in the loop rule — pick a traversal direction, write every term's sign from the conventions, and never flip signs mid-loop.",
              "zh": "AP 考试提示：比较功率大小时，要按\"共享量\"选公式。串联电阻共享电流 $I$，用 $P = I^2R$（$R$ 大者功率大）；并联电阻共享电压 $V$，用 $P = V^2/R$（$R$ 小者功率大）。FRQ 中最常见的错误是回路定律的符号错误——先定遍历方向，按约定写出每一项的符号，中途绝不随意变号。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Two-battery multi-loop circuit",
                "zh": "例题 1：双电池多回路电路"
              },
              "problem": {
                "en": "Two vertical branches connect top node $A$ to bottom node $B$ through batteries: the left branch has a $10\\,\\text{V}$ battery ($+$ terminal up) in series with $R_1 = 2\\,\\Omega$; the right branch has a $6\\,\\text{V}$ battery ($+$ terminal up) in series with $R_2 = 2\\,\\Omega$. A middle branch connects $A$ directly to $B$ through $R_3 = 1\\,\\Omega$. Find the current in each branch.",
                "zh": "两条竖直支路通过电池连接上节点 $A$ 与下节点 $B$：左支路为 $10\\,\\text{V}$ 电池（正极朝上）与 $R_1 = 2\\,\\Omega$ 串联；右支路为 $6\\,\\text{V}$ 电池（正极朝上）与 $R_2 = 2\\,\\Omega$ 串联。中间支路经 $R_3 = 1\\,\\Omega$ 直接连接 $A$ 与 $B$。求每条支路中的电流。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $I_1$ flow up the left branch into $A$, $I_2$ flow up the right branch into $A$, and $I_3$ flow down the middle branch from $A$ to $B$. The junction rule at $A$ gives $I_1 + I_2 = I_3$. The left loop (left branch down through the middle) and the right loop give:",
                  "zh": "设 $I_1$ 沿左支路向上流入 $A$，$I_2$ 沿右支路向上流入 $A$，$I_3$ 沿中间支路从 $A$ 流向 $B$。节点 $A$ 处的节点定律给出 $I_1 + I_2 = I_3$。左回路（左支路配合中间支路）与右回路给出："
                },
                {
                  "type": "math",
                  "tex": "10 - 2I_1 - 1\\cdot I_3 = 0, \\qquad 6 - 2I_2 - 1\\cdot I_3 = 0"
                },
                {
                  "type": "p",
                  "en": "Solve each for the branch current: $I_1 = (10 - I_3)/2$ and $I_2 = (6 - I_3)/2$. Substitute into the junction equation:",
                  "zh": "分别解出支路电流：$I_1 = (10 - I_3)/2$，$I_2 = (6 - I_3)/2$。代入节点方程："
                },
                {
                  "type": "math",
                  "tex": "I_3 = \\frac{10 - I_3}{2} + \\frac{6 - I_3}{2} = 8 - I_3 \\;\\Rightarrow\\; I_3 = 4\\,\\text{A}"
                },
                {
                  "type": "p",
                  "en": "Then $I_1 = 3\\,\\text{A}$ and $I_2 = 1\\,\\text{A}$. Check: junction $3 + 1 = 4$ ✓; left loop $10 - 2(3) - 4 = 0$ ✓; right loop $6 - 2(1) - 4 = 0$ ✓. All currents came out positive, so the assumed directions were correct.",
                  "zh": "于是 $I_1 = 3\\,\\text{A}$，$I_2 = 1\\,\\text{A}$。验证：节点 $3 + 1 = 4$ ✓；左回路 $10 - 2(3) - 4 = 0$ ✓；右回路 $6 - 2(1) - 4 = 0$ ✓。所有电流均为正，说明假设方向正确。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Internal resistance and energy accounting",
                "zh": "例题 2：内阻与能量核算"
              },
              "problem": {
                "en": "A battery with emf $\\mathcal{E} = 12\\,\\text{V}$ and internal resistance $r = 0.5\\,\\Omega$ drives a single external resistor $R = 5.5\\,\\Omega$. Find the current, the terminal voltage, and verify that the battery's total power output equals the power dissipated.",
                "zh": "电动势 $\\mathcal{E} = 12\\,\\text{V}$、内阻 $r = 0.5\\,\\Omega$ 的电池连接单个外接电阻 $R = 5.5\\,\\Omega$。求电流、端电压，并验证电池的总输出功率等于耗散的总功率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The loop rule around the single loop gives $\\mathcal{E} - Ir - IR = 0$, so:",
                  "zh": "对唯一回路应用回路定律得 $\\mathcal{E} - Ir - IR = 0$，故："
                },
                {
                  "type": "math",
                  "tex": "I = \\frac{\\mathcal{E}}{R + r} = \\frac{12}{5.5 + 0.5} = 2\\,\\text{A}"
                },
                {
                  "type": "p",
                  "en": "Terminal voltage: $V_{term} = \\mathcal{E} - Ir = 12 - 2(0.5) = 11\\,\\text{V}$ — exactly the voltage across $R$: $IR = 2(5.5) = 11\\,\\text{V}$ ✓.",
                  "zh": "端电压：$V_{term} = \\mathcal{E} - Ir = 12 - 2(0.5) = 11\\,\\text{V}$——恰好等于 $R$ 两端电压：$IR = 2(5.5) = 11\\,\\text{V}$ ✓。"
                },
                {
                  "type": "p",
                  "en": "Energy check: the battery converts chemical energy at rate $P = \\mathcal{E}I = 24\\,\\text{W}$. The external resistor dissipates $I^2R = 4(5.5) = 22\\,\\text{W}$ and the internal resistance dissipates $I^2r = 4(0.5) = 2\\,\\text{W}$, and $22 + 2 = 24\\,\\text{W}$ ✓.",
                  "zh": "能量核算：电池以 $P = \\mathcal{E}I = 24\\,\\text{W}$ 的功率转化化学能。外接电阻耗散 $I^2R = 4(5.5) = 22\\,\\text{W}$，内阻耗散 $I^2r = 4(0.5) = 2\\,\\text{W}$，且 $22 + 2 = 24\\,\\text{W}$ ✓。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A $6\\,\\Omega$ resistor and a $3\\,\\Omega$ resistor are connected in parallel. What is the equivalent resistance?",
                "zh": "一个 $6\\,\\Omega$ 电阻与一个 $3\\,\\Omega$ 电阻并联。等效电阻是多少？"
              },
              "choices": [
                "$9\\,\\Omega$",
                "$4.5\\,\\Omega$",
                "$2\\,\\Omega$",
                "$18\\,\\Omega$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\frac{1}{R} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$, so $R = 2\\,\\Omega$. Note the parallel equivalent must be smaller than the smallest resistor ($3\\,\\Omega$); $9\\,\\Omega$ is the tempting series answer.",
                "zh": "$\\frac{1}{R} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$，故 $R = 2\\,\\Omega$。注意并联等效电阻必须小于最小的电阻（$3\\,\\Omega$）；$9\\,\\Omega$ 是误按串联计算的诱人错误答案。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $24\\,\\text{V}$ ideal battery is connected to a $4\\,\\Omega$ resistor in series with a parallel combination of a $6\\,\\Omega$ and a $12\\,\\Omega$ resistor. What current (in A) flows through the battery? Give an integer.",
                "zh": "一个 $24\\,\\text{V}$ 理想电池与一个 $4\\,\\Omega$ 电阻串联，再接一个由 $6\\,\\Omega$ 和 $12\\,\\Omega$ 电阻组成的并联组合。通过电池的电流是多少（单位 A）？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "3 A"
              ],
              "explanation": {
                "en": "The parallel pair: $\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4}$, so $R_p = 4\\,\\Omega$. Total resistance $= 4 + 4 = 8\\,\\Omega$, giving $I = 24/8 = 3\\,\\text{A}$.",
                "zh": "并联部分：$\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4}$，故 $R_p = 4\\,\\Omega$。总电阻 $= 4 + 4 = 8\\,\\Omega$，所以 $I = 24/8 = 3\\,\\text{A}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Kirchhoff's loop rule, $\\sum \\Delta V = 0$ around any closed loop, is a direct consequence of the conservation of which quantity?",
                "zh": "基尔霍夫回路定律——沿任意闭合回路 $\\sum \\Delta V = 0$——是哪一个量守恒的直接推论？"
              },
              "choices": [
                "Charge",
                "Energy",
                "Momentum",
                "Mass"
              ],
              "answer": 1,
              "explanation": {
                "en": "The loop rule expresses conservation of energy: a charge returning to its starting point must have zero net change in potential energy, since the electric potential is single-valued. Conservation of charge is tempting, but that underlies the junction rule instead.",
                "zh": "回路定律表达的是能量守恒：电势是单值的，电荷回到出发点时电势能净变化必为零。电荷守恒是诱人的错误选项，但它对应的是节点定律。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A cylindrical wire of resistance $R$ is stretched uniformly to twice its original length; its volume stays constant. Its new resistance is:",
                "zh": "一根电阻为 $R$ 的圆柱形导线被均匀拉伸到原长的两倍，体积保持不变。新的电阻是："
              },
              "choices": [
                "$R/4$",
                "$R/2$",
                "$2R$",
                "$4R$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Constant volume $LA$ means doubling $L$ halves $A$. Then $R' = \\frac{\\rho(2L)}{A/2} = 4\\frac{\\rho L}{A} = 4R$. The distractor $2R$ comes from remembering $R \\propto L$ but forgetting that the area must shrink too.",
                "zh": "体积 $LA$ 不变，长度加倍则横截面积减半。于是 $R' = \\frac{\\rho(2L)}{A/2} = 4\\frac{\\rho L}{A} = 4R$。错误选项 $2R$ 来自只记得 $R \\propto L$，却忘了面积也随之减小。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To measure the potential difference across a resistor with minimal disturbance to the circuit, a voltmeter should be connected:",
                "zh": "为了在尽量不影响电路的情况下测量电阻两端的电势差，电压表应当："
              },
              "choices": [
                "In parallel with the resistor, with very large (ideally infinite) internal resistance",
                "In series with the resistor, with very large internal resistance",
                "In parallel with the resistor, with very small internal resistance",
                "In series with the resistor, with very small internal resistance"
              ],
              "answer": 0,
              "explanation": {
                "en": "A voltmeter must be in parallel to read the same potential difference as the element, and must have huge resistance so it draws negligible current. A low-resistance parallel meter would short out the resistor; the series options describe an ammeter's placement.",
                "zh": "电压表必须并联才能测到与元件相同的电势差，且必须有极大的电阻以几乎不分走电流。低电阻并联会把电阻短路；串联的选项描述的是电流表的接法。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A battery has emf $9.0\\,\\text{V}$. When it delivers $2.0\\,\\text{A}$ to a circuit, its terminal voltage is $8.0\\,\\text{V}$. Find its internal resistance in $\\Omega$. Give your answer as a decimal to one decimal place.",
                "zh": "一电池电动势为 $9.0\\,\\text{V}$。当它向电路输出 $2.0\\,\\text{A}$ 电流时，端电压为 $8.0\\,\\text{V}$。求其内阻（单位 $\\Omega$）。请填保留一位小数的小数。"
              },
              "answer": "0.5",
              "accept": [
                "0.50",
                ".5",
                "1/2"
              ],
              "explanation": {
                "en": "From $V_{term} = \\mathcal{E} - Ir$: $8.0 = 9.0 - 2.0r$, so $r = 1.0/2.0 = 0.5\\,\\Omega$.",
                "zh": "由 $V_{term} = \\mathcal{E} - Ir$：$8.0 = 9.0 - 2.0r$，故 $r = 1.0/2.0 = 0.5\\,\\Omega$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Resistors $R$ and $2R$ are connected in series with an ideal battery. Which statement about power dissipation is correct?",
                "zh": "电阻 $R$ 与 $2R$ 与理想电池串联。关于功率耗散，下列哪个说法正确？"
              },
              "choices": [
                "The resistor $R$ dissipates more power because more current flows through smaller resistances",
                "The resistor $2R$ dissipates twice the power of $R$",
                "Both dissipate equal power because they carry the same current",
                "Which dissipates more depends on the emf of the battery"
              ],
              "answer": 1,
              "explanation": {
                "en": "In series both resistors carry the same current $I$, so $P = I^2R$: the $2R$ resistor dissipates $I^2(2R)$, exactly twice $I^2R$. The \"same current means same power\" distractor forgets that power depends on $R$ as well as $I$; the ratio of powers is independent of the emf.",
                "zh": "串联时两电阻电流 $I$ 相同，用 $P = I^2R$：$2R$ 耗散 $I^2(2R)$，恰为 $I^2R$ 的两倍。\"电流相同故功率相同\"这一错误选项忽略了功率还依赖于 $R$；功率之比与电动势无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Experimental design: a student measures the resistance $R$ of several wires cut from the same spool, each with cross-sectional area $A = 8.0 \\times 10^{-7}\\,\\text{m}^2$, and plots $R$ (vertical axis) versus length $L$ (horizontal axis). The best-fit line passes through the origin with slope $2.0\\,\\Omega/\\text{m}$. Find the resistivity of the metal in units of $10^{-6}\\,\\Omega\\cdot\\text{m}$, to two significant figures.",
                "zh": "实验设计：一名学生测量从同一线轴上剪下的若干导线的电阻 $R$，每根横截面积均为 $A = 8.0 \\times 10^{-7}\\,\\text{m}^2$，并以 $R$（纵轴）对长度 $L$（横轴）作图。最佳拟合直线过原点，斜率为 $2.0\\,\\Omega/\\text{m}$。求该金属的电阻率，以 $10^{-6}\\,\\Omega\\cdot\\text{m}$ 为单位，保留两位有效数字。"
              },
              "answer": "1.6",
              "accept": [
                "1.60",
                "1.6e-6"
              ],
              "explanation": {
                "en": "Since $R = \\frac{\\rho}{A}L$, the slope of the $R$-$L$ graph is $\\rho/A$. Therefore $\\rho = (\\text{slope})\\cdot A = (2.0)(8.0 \\times 10^{-7}) = 1.6 \\times 10^{-6}\\,\\Omega\\cdot\\text{m}$.",
                "zh": "因为 $R = \\frac{\\rho}{A}L$，$R$-$L$ 图的斜率为 $\\rho/A$。因此 $\\rho = (\\text{斜率})\\cdot A = (2.0)(8.0 \\times 10^{-7}) = 1.6 \\times 10^{-6}\\,\\Omega\\cdot\\text{m}$。"
              }
            }
          ]
        },
        {
          "id": "rc-circuits",
          "title": "RC Circuits",
          "titleZh": "RC 电路",
          "content": [
            {
              "type": "h2",
              "en": "Charging a Capacitor Through a Resistor",
              "zh": "通过电阻给电容器充电"
            },
            {
              "type": "p",
              "en": "Connect an ideal battery of emf $\\mathcal{E}$, a resistor $R$, and an initially uncharged capacitor $C$ in a single series loop, and close the switch at $t = 0$. At any instant the loop rule gives $\\mathcal{E} - IR - \\frac{q}{C} = 0$, where $q$ is the charge on the capacitor. Because the charging current is the rate at which charge arrives on the capacitor, $I = \\frac{dq}{dt}$, and the loop rule becomes a differential equation:",
              "zh": "将电动势为 $\\mathcal{E}$ 的理想电池、电阻 $R$ 与初始不带电的电容器 $C$ 串联成单一回路，在 $t = 0$ 时闭合开关。任一时刻回路定律给出 $\\mathcal{E} - IR - \\frac{q}{C} = 0$，其中 $q$ 为电容器上的电荷。由于充电电流就是电荷到达电容器的速率，$I = \\frac{dq}{dt}$，回路方程变为一个微分方程："
            },
            {
              "type": "math",
              "tex": "R\\frac{dq}{dt} = \\mathcal{E} - \\frac{q}{C}"
            },
            {
              "type": "p",
              "en": "Solve by separation of variables. Rearranging, $\\frac{dq}{C\\mathcal{E} - q} = \\frac{dt}{RC}$. Integrate the left side from $0$ to $q$ and the right side from $0$ to $t$:",
              "zh": "用分离变量法求解。整理得 $\\frac{dq}{C\\mathcal{E} - q} = \\frac{dt}{RC}$。左边从 $0$ 积到 $q$，右边从 $0$ 积到 $t$："
            },
            {
              "type": "math",
              "tex": "-\\ln\\!\\left(\\frac{C\\mathcal{E} - q}{C\\mathcal{E}}\\right) = \\frac{t}{RC} \\;\\Rightarrow\\; q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)"
            },
            {
              "type": "p",
              "en": "Differentiating gives the current, which starts at the maximum value $\\mathcal{E}/R$ and decays exponentially:",
              "zh": "求导得到电流：从最大值 $\\mathcal{E}/R$ 开始按指数衰减："
            },
            {
              "type": "math",
              "tex": "I(t) = \\frac{dq}{dt} = \\frac{\\mathcal{E}}{R}e^{-t/RC}"
            },
            {
              "type": "h3",
              "en": "The Time Constant and Limiting Behavior",
              "zh": "时间常数与极限行为"
            },
            {
              "type": "p",
              "en": "The combination $\\tau = RC$ has units of seconds and sets the timescale of the exponential. After one time constant, a charging capacitor reaches $1 - e^{-1} \\approx 63\\%$ of its final charge $C\\mathcal{E}$, while the current has fallen to $e^{-1} \\approx 37\\%$ of its initial value. After $5\\tau$ the circuit is within $1\\%$ of its final state — effectively \"fully charged.\"",
              "zh": "组合量 $\\tau = RC$ 具有秒的单位，决定指数变化的时间尺度。经过一个时间常数，充电中的电容器达到最终电荷 $C\\mathcal{E}$ 的 $1 - e^{-1} \\approx 63\\%$，而电流降到初始值的 $e^{-1} \\approx 37\\%$。经过 $5\\tau$，电路与最终状态相差不到 $1\\%$——实际上已\"充满\"。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "At $t = 0$: an uncharged capacitor has $V_C = q/C = 0$, so it behaves like a bare wire (short circuit). Compute initial currents by replacing the capacitor with a wire.",
                  "zh": "在 $t = 0$：不带电的电容器有 $V_C = q/C = 0$，表现得像一根裸导线（短路）。计算初始电流时可把电容器换成导线。"
                },
                {
                  "en": "As $t \\to \\infty$: the capacitor is fully charged and no current flows into it, so it behaves like an open switch (broken wire). Compute steady-state currents by removing the capacitor branch.",
                  "zh": "当 $t \\to \\infty$：电容器充满电，不再有电流流入，表现得像断开的开关（断路）。计算稳态电流时可把电容器支路移除。"
                },
                {
                  "en": "Graphs: $q(t)$ and $V_C(t)$ rise from $0$ and saturate toward $C\\mathcal{E}$ and $\\mathcal{E}$ with ever-decreasing slope; $I(t)$ and $V_R(t)$ start at their maxima ($\\mathcal{E}/R$ and $\\mathcal{E}$) and decay exponentially to $0$. At every instant $V_C + V_R = \\mathcal{E}$.",
                  "zh": "图像：$q(t)$ 与 $V_C(t)$ 从 $0$ 上升并以不断减小的斜率趋于 $C\\mathcal{E}$ 和 $\\mathcal{E}$；$I(t)$ 与 $V_R(t)$ 从最大值（$\\mathcal{E}/R$ 和 $\\mathcal{E}$）开始指数衰减到 $0$。任一时刻 $V_C + V_R = \\mathcal{E}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Discharging",
              "zh": "放电"
            },
            {
              "type": "p",
              "en": "Now remove the battery and let a capacitor with initial charge $Q_0$ discharge through $R$. The loop rule gives $\\frac{q}{C} - IR = 0$ with $I = -\\frac{dq}{dt}$ (the charge is decreasing), so $\\frac{dq}{dt} = -\\frac{q}{RC}$. Separating and integrating:",
              "zh": "现在移去电池，让初始电荷为 $Q_0$ 的电容器通过 $R$ 放电。回路定律给出 $\\frac{q}{C} - IR = 0$，其中 $I = -\\frac{dq}{dt}$（电荷在减少），所以 $\\frac{dq}{dt} = -\\frac{q}{RC}$。分离变量并积分："
            },
            {
              "type": "math",
              "tex": "q(t) = Q_0\\,e^{-t/RC}, \\qquad I(t) = \\frac{Q_0}{RC}e^{-t/RC}"
            },
            {
              "type": "p",
              "en": "Charge, voltage, and current all decay exponentially with the same time constant $\\tau = RC$: after each interval $\\tau$, each quantity falls to $37\\%$ of its previous value.",
              "zh": "电荷、电压和电流都以同一时间常数 $\\tau = RC$ 指数衰减：每经过一个 $\\tau$，各量都降为原值的 $37\\%$。"
            },
            {
              "type": "h3",
              "en": "Energy Accounting: Where Does Half the Energy Go?",
              "zh": "能量核算：一半的能量去哪了？"
            },
            {
              "type": "p",
              "en": "While charging to final charge $Q = C\\mathcal{E}$, the battery moves total charge $Q$ through a fixed emf, doing work $W_{batt} = Q\\mathcal{E} = C\\mathcal{E}^2$. The capacitor ends up storing only $U_C = \\frac{1}{2}C\\mathcal{E}^2$. The other half is dissipated in the resistor, as a direct integration shows — remarkably, the result is independent of $R$:",
              "zh": "充电到最终电荷 $Q = C\\mathcal{E}$ 的过程中，电池把总电荷 $Q$ 搬运过固定的电动势，做功 $W_{batt} = Q\\mathcal{E} = C\\mathcal{E}^2$。而电容器最终只储存 $U_C = \\frac{1}{2}C\\mathcal{E}^2$。另一半在电阻中耗散——直接积分即可证明，且结果竟与 $R$ 无关："
            },
            {
              "type": "math",
              "tex": "W_R = \\int_0^\\infty I^2R\\,dt = \\frac{\\mathcal{E}^2}{R}\\int_0^\\infty e^{-2t/RC}\\,dt = \\frac{\\mathcal{E}^2}{R}\\cdot\\frac{RC}{2} = \\frac{1}{2}C\\mathcal{E}^2"
            },
            {
              "type": "note",
              "en": "AP exam tip: For multi-resistor RC circuits, do two separate easy problems instead of one hard one — at $t = 0$ redraw the circuit with the capacitor as a plain wire, and at steady state redraw it with the capacitor branch open. A classic mistake is claiming the steady-state capacitor voltage equals the battery emf; it actually equals the potential difference across whatever element it is in parallel with.",
              "zh": "AP 考试提示：处理多电阻 RC 电路时，把一道难题拆成两道简单题——在 $t = 0$ 把电容器画成普通导线重画电路，在稳态把电容器支路断开重画电路。经典错误是认为稳态电容器电压等于电池电动势；它实际上等于与它并联的元件两端的电势差。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A complete charging solution",
                "zh": "例题 1：完整的充电求解"
              },
              "problem": {
                "en": "A $12\\,\\text{V}$ battery, a $2.0\\,\\text{k}\\Omega$ resistor, and an uncharged $500\\,\\mu\\text{F}$ capacitor are connected in series and the switch closes at $t = 0$. Find the time constant, the initial current, $q(t)$, and the charge at $t = 1.0\\,\\text{s}$.",
                "zh": "一个 $12\\,\\text{V}$ 电池、一个 $2.0\\,\\text{k}\\Omega$ 电阻和一个不带电的 $500\\,\\mu\\text{F}$ 电容器串联，开关在 $t = 0$ 闭合。求时间常数、初始电流、$q(t)$ 以及 $t = 1.0\\,\\text{s}$ 时的电荷。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Time constant: $\\tau = RC = (2.0 \\times 10^3)(500 \\times 10^{-6}) = 1.0\\,\\text{s}$. Initial current (capacitor acts like a wire): $I_0 = \\mathcal{E}/R = 12/2000 = 6.0\\,\\text{mA}$. Final charge: $Q = C\\mathcal{E} = (500\\,\\mu\\text{F})(12\\,\\text{V}) = 6.0\\,\\text{mC}$.",
                  "zh": "时间常数：$\\tau = RC = (2.0 \\times 10^3)(500 \\times 10^{-6}) = 1.0\\,\\text{s}$。初始电流（电容器如同导线）：$I_0 = \\mathcal{E}/R = 12/2000 = 6.0\\,\\text{mA}$。最终电荷：$Q = C\\mathcal{E} = (500\\,\\mu\\text{F})(12\\,\\text{V}) = 6.0\\,\\text{mC}$。"
                },
                {
                  "type": "math",
                  "tex": "q(t) = 6.0\\left(1 - e^{-t/1.0}\\right)\\,\\text{mC}"
                },
                {
                  "type": "p",
                  "en": "At $t = 1.0\\,\\text{s} = \\tau$: $q = 6.0(1 - e^{-1}) = 6.0(0.632) \\approx 3.8\\,\\text{mC}$ — the expected $63\\%$ of the final charge.",
                  "zh": "在 $t = 1.0\\,\\text{s} = \\tau$ 时：$q = 6.0(1 - e^{-1}) = 6.0(0.632) \\approx 3.8\\,\\text{mC}$——正是最终电荷的 $63\\%$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Multi-resistor RC circuit at t = 0 and steady state",
                "zh": "例题 2：多电阻 RC 电路的初始与稳态"
              },
              "problem": {
                "en": "A $12\\,\\text{V}$ ideal battery connects through $R_1 = 4.0\\,\\Omega$ to a pair of parallel branches that return to the battery: one branch contains $R_2 = 8.0\\,\\Omega$, the other contains an uncharged capacitor $C = 2.0\\,\\mu\\text{F}$. The switch closes at $t = 0$. Find the battery current at $t = 0$, the battery current in steady state, and the final charge on the capacitor.",
                "zh": "一个 $12\\,\\text{V}$ 理想电池经 $R_1 = 4.0\\,\\Omega$ 接到两条并联支路后回到电池：一条支路是 $R_2 = 8.0\\,\\Omega$，另一条是不带电的电容器 $C = 2.0\\,\\mu\\text{F}$。开关在 $t = 0$ 闭合。求 $t = 0$ 时的电池电流、稳态时的电池电流以及电容器的最终电荷。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At $t = 0$ the uncharged capacitor acts like a wire, short-circuiting $R_2$ (zero volts across the parallel section means zero current through $R_2$). The circuit is just $\\mathcal{E}$ and $R_1$:",
                  "zh": "在 $t = 0$，不带电的电容器如同导线，把 $R_2$ 短路（并联部分电压为零，故 $R_2$ 中无电流）。电路只剩 $\\mathcal{E}$ 与 $R_1$："
                },
                {
                  "type": "math",
                  "tex": "I(0) = \\frac{\\mathcal{E}}{R_1} = \\frac{12}{4.0} = 3.0\\,\\text{A}"
                },
                {
                  "type": "p",
                  "en": "In steady state no current enters the capacitor branch, so the circuit is $R_1$ and $R_2$ in series: $I_\\infty = \\frac{12}{4.0 + 8.0} = 1.0\\,\\text{A}$. The capacitor is in parallel with $R_2$, so its final voltage is $V_C = I_\\infty R_2 = 8.0\\,\\text{V}$ — not $12\\,\\text{V}$.",
                  "zh": "稳态时电容器支路无电流，电路成为 $R_1$ 与 $R_2$ 串联：$I_\\infty = \\frac{12}{4.0 + 8.0} = 1.0\\,\\text{A}$。电容器与 $R_2$ 并联，最终电压为 $V_C = I_\\infty R_2 = 8.0\\,\\text{V}$——而不是 $12\\,\\text{V}$。"
                },
                {
                  "type": "math",
                  "tex": "Q = CV_C = (2.0\\,\\mu\\text{F})(8.0\\,\\text{V}) = 16\\,\\mu\\text{C}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A capacitor charges through a resistor from an ideal battery. After exactly one time constant $\\tau = RC$, the charge on the capacitor is approximately what fraction of its final value?",
                "zh": "电容器通过电阻由理想电池充电。恰好经过一个时间常数 $\\tau = RC$ 后，电容器上的电荷约为最终值的多少？"
              },
              "choices": [
                "$37\\%$",
                "$50\\%$",
                "$63\\%$",
                "$100\\%$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$q(\\tau) = C\\mathcal{E}(1 - e^{-1}) \\approx 0.63\\,C\\mathcal{E}$. The distractor $37\\%$ is $e^{-1}$ — that is the fraction of the initial current remaining, or the charge remaining during a discharge, not the charge accumulated during charging.",
                "zh": "$q(\\tau) = C\\mathcal{E}(1 - e^{-1}) \\approx 0.63\\,C\\mathcal{E}$。错误选项 $37\\%$ 是 $e^{-1}$——那是剩余电流的比例（或放电时剩余电荷的比例），而不是充电时已积累的电荷比例。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A discharging circuit consists of a $2.0\\,\\text{M}\\Omega$ resistor and a $3.0\\,\\mu\\text{F}$ capacitor. What is the time constant in seconds? Give an integer.",
                "zh": "一个放电电路由 $2.0\\,\\text{M}\\Omega$ 电阻和 $3.0\\,\\mu\\text{F}$ 电容器组成。时间常数是多少秒？请填一个整数。"
              },
              "answer": "6",
              "accept": [
                "6.0",
                "6 s"
              ],
              "explanation": {
                "en": "$\\tau = RC = (2.0 \\times 10^6\\,\\Omega)(3.0 \\times 10^{-6}\\,\\text{F}) = 6.0\\,\\text{s}$. Note how the mega and micro prefixes cancel.",
                "zh": "$\\tau = RC = (2.0 \\times 10^6\\,\\Omega)(3.0 \\times 10^{-6}\\,\\text{F}) = 6.0\\,\\text{s}$。注意\"兆\"与\"微\"两个词头恰好相消。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At the instant a switch connects an ideal battery $\\mathcal{E}$, resistor $R$, and uncharged capacitor $C$ in series, the current in the circuit is:",
                "zh": "开关闭合、将理想电池 $\\mathcal{E}$、电阻 $R$ 和不带电的电容器 $C$ 串联的瞬间，电路中的电流是："
              },
              "choices": [
                "Zero, because the capacitor blocks all current",
                "$\\mathcal{E}/R$, because the uncharged capacitor momentarily acts like a wire",
                "$\\mathcal{E}/(RC)$, by dimensional analysis",
                "Infinite, because the capacitor has no resistance"
              ],
              "answer": 1,
              "explanation": {
                "en": "An uncharged capacitor has $V_C = q/C = 0$, so the full emf appears across $R$ and $I(0) = \\mathcal{E}/R$. \"The capacitor blocks current\" is only true in steady state ($t \\to \\infty$), which is the tempting confusion; and $\\mathcal{E}/(RC)$ has units of A/s, not amperes.",
                "zh": "不带电的电容器有 $V_C = q/C = 0$，全部电动势加在 $R$ 上，故 $I(0) = \\mathcal{E}/R$。\"电容器阻断电流\"只在稳态（$t \\to \\infty$）成立，这是易混淆之处；而 $\\mathcal{E}/(RC)$ 的单位是 A/s，不是安培。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A capacitor discharges through a resistor. After a time equal to $2\\tau$, approximately what fraction of the initial charge remains?",
                "zh": "电容器通过电阻放电。经过 $2\\tau$ 的时间后，剩余电荷约为初始电荷的多少？"
              },
              "choices": [
                "$50\\%$",
                "$37\\%$",
                "$25\\%$",
                "$13.5\\%$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Discharge is exponential: $q = Q_0e^{-t/\\tau}$, so at $t = 2\\tau$, $q/Q_0 = e^{-2} \\approx 0.135$. The distractor $25\\%$ treats each $\\tau$ as \"halving\" — but each $\\tau$ multiplies the charge by $e^{-1} \\approx 0.37$, so two constants give $(0.37)^2 \\approx 13.5\\%$.",
                "zh": "放电是指数式的：$q = Q_0e^{-t/\\tau}$，故 $t = 2\\tau$ 时 $q/Q_0 = e^{-2} \\approx 0.135$。错误选项 $25\\%$ 把每个 $\\tau$ 当成\"减半\"——实际上每个 $\\tau$ 使电荷乘以 $e^{-1} \\approx 0.37$，两个时间常数后为 $(0.37)^2 \\approx 13.5\\%$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An $18\\,\\text{V}$ ideal battery connects through a $3.0\\,\\Omega$ resistor to a parallel combination of a $6.0\\,\\Omega$ resistor and a capacitor. After the switch has been closed a very long time, what is the voltage across the capacitor in volts? Give an integer.",
                "zh": "一个 $18\\,\\text{V}$ 理想电池经 $3.0\\,\\Omega$ 电阻接到由 $6.0\\,\\Omega$ 电阻与电容器组成的并联组合。开关闭合很长时间后，电容器两端的电压是多少伏？请填一个整数。"
              },
              "answer": "12",
              "accept": [
                "12.0",
                "12 V"
              ],
              "explanation": {
                "en": "In steady state the capacitor branch carries no current, so the circuit is a series pair: $I = 18/(3.0 + 6.0) = 2.0\\,\\text{A}$. The capacitor is in parallel with the $6.0\\,\\Omega$ resistor, so $V_C = (2.0)(6.0) = 12\\,\\text{V}$, not the full $18\\,\\text{V}$.",
                "zh": "稳态时电容器支路无电流，电路成为串联：$I = 18/(3.0 + 6.0) = 2.0\\,\\text{A}$。电容器与 $6.0\\,\\Omega$ 电阻并联，故 $V_C = (2.0)(6.0) = 12\\,\\text{V}$，而不是全部的 $18\\,\\text{V}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which best describes the graph of current versus time while a capacitor charges through a resistor?",
                "zh": "电容器通过电阻充电时，电流随时间变化的图像最符合下列哪种描述？"
              },
              "choices": [
                "It increases linearly from zero",
                "It is constant at $\\mathcal{E}/R$",
                "It starts at $\\mathcal{E}/R$ and decays exponentially toward zero",
                "It starts at zero and rises exponentially toward $\\mathcal{E}/R$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$I(t) = (\\mathcal{E}/R)e^{-t/RC}$: maximum at $t = 0$ (uncharged capacitor acts like a wire), decaying to zero as the capacitor fills. The last choice describes the shape of the charge (or capacitor voltage) graph, not the current — a very common mix-up.",
                "zh": "$I(t) = (\\mathcal{E}/R)e^{-t/RC}$：在 $t = 0$ 最大（不带电的电容器如同导线），随电容器充满而衰减到零。最后一个选项描述的是电荷（或电容器电压）图像的形状，不是电流——这是非常常见的混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A capacitor is charged from zero to full charge through a resistor $R$ by an ideal battery. What fraction of the total energy supplied by the battery ends up as heat in the resistor?",
                "zh": "理想电池通过电阻 $R$ 把电容器从零电荷充到充满。电池提供的总能量中有多大比例最终变成电阻中的热量？"
              },
              "choices": [
                "It depends on the value of $R$ — a larger $R$ wastes more energy",
                "Exactly one half, independent of $R$",
                "A fraction $e^{-1} \\approx 37\\%$",
                "None — all the energy is stored in the capacitor"
              ],
              "answer": 1,
              "explanation": {
                "en": "The battery does work $Q\\mathcal{E} = C\\mathcal{E}^2$, the capacitor stores $\\frac{1}{2}C\\mathcal{E}^2$, and the integral $\\int_0^\\infty I^2R\\,dt = \\frac{1}{2}C\\mathcal{E}^2$ confirms the other half is dissipated. It is tempting to think a larger $R$ wastes more, but a larger $R$ also slows the charging with smaller current, and the $R$-dependence cancels exactly.",
                "zh": "电池做功 $Q\\mathcal{E} = C\\mathcal{E}^2$，电容器储存 $\\frac{1}{2}C\\mathcal{E}^2$，积分 $\\int_0^\\infty I^2R\\,dt = \\frac{1}{2}C\\mathcal{E}^2$ 证实另一半被耗散。人们容易以为 $R$ 越大浪费越多，但 $R$ 越大充电也越慢、电流越小，对 $R$ 的依赖恰好完全抵消。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Data analysis: a student discharges a capacitor through an unknown resistor, records the capacitor voltage $V$ over time, and plots $\\ln V$ (vertical axis) versus $t$ (horizontal axis). The plot is a straight line with slope $-0.25\\,\\text{s}^{-1}$. If $C = 8.0 \\times 10^{-4}\\,\\text{F}$, find the resistance in ohms. Give an integer.",
                "zh": "数据分析：一名学生让电容器通过未知电阻放电，记录电容器电压 $V$ 随时间的变化，并以 $\\ln V$（纵轴）对 $t$（横轴）作图。图线为直线，斜率为 $-0.25\\,\\text{s}^{-1}$。若 $C = 8.0 \\times 10^{-4}\\,\\text{F}$，求电阻是多少欧姆。请填一个整数。"
              },
              "answer": "5000",
              "accept": [
                "5000.0",
                "5e3",
                "5000 ohms"
              ],
              "explanation": {
                "en": "Discharge gives $V = V_0e^{-t/RC}$, so $\\ln V = \\ln V_0 - \\frac{t}{RC}$: the slope is $-1/(RC)$. Thus $RC = 1/0.25 = 4.0\\,\\text{s}$ and $R = 4.0/(8.0 \\times 10^{-4}) = 5000\\,\\Omega$. Linearizing an exponential with a log plot is a favorite AP lab-analysis move.",
                "zh": "放电给出 $V = V_0e^{-t/RC}$，故 $\\ln V = \\ln V_0 - \\frac{t}{RC}$：斜率为 $-1/(RC)$。于是 $RC = 1/0.25 = 4.0\\,\\text{s}$，$R = 4.0/(8.0 \\times 10^{-4}) = 5000\\,\\Omega$。用对数图把指数关系线性化是 AP 实验数据分析的经典手法。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "magnetic-fields",
      "title": "Unit 12: Magnetic Fields and Electromagnetism",
      "titleZh": "第十二单元：磁场与电磁学",
      "lessons": [
        {
          "id": "magnetic-forces",
          "title": "Magnetic Forces on Charges and Currents",
          "titleZh": "磁场对电荷与电流的作用力",
          "content": [
            {
              "type": "h2",
              "en": "The Magnetic Force on a Moving Charge",
              "zh": "运动电荷所受的磁场力"
            },
            {
              "type": "p",
              "en": "A charge $q$ moving with velocity $\\vec{v}$ through a magnetic field $\\vec{B}$ experiences a force given by a cross product. Its magnitude is $F = |q|vB\\sin\\theta$, where $\\theta$ is the angle between $\\vec{v}$ and $\\vec{B}$. The direction follows the right-hand rule: point your fingers along $\\vec{v}$, curl them toward $\\vec{B}$, and your thumb gives the force on a positive charge. For a negative charge, reverse the direction.",
              "zh": "以速度 $\\vec{v}$ 在磁场 $\\vec{B}$ 中运动的电荷 $q$ 受到一个由叉积给出的力。其大小为 $F = |q|vB\\sin\\theta$，其中 $\\theta$ 是 $\\vec{v}$ 与 $\\vec{B}$ 之间的夹角。方向由右手定则确定：手指指向 $\\vec{v}$，向 $\\vec{B}$ 方向弯曲，拇指指向正电荷所受的力。若为负电荷，方向相反。"
            },
            {
              "type": "math",
              "tex": "\\vec{F} = q\\vec{v}\\times\\vec{B}, \\qquad F = |q|vB\\sin\\theta"
            },
            {
              "type": "p",
              "en": "A crucial consequence: the magnetic force is always perpendicular to the velocity, so it does no work. Formally, $W = \\int \\vec{F}\\cdot d\\vec{l} = \\int q(\\vec{v}\\times\\vec{B})\\cdot\\vec{v}\\,dt = 0$, since a cross product $\\vec{v}\\times\\vec{B}$ is perpendicular to $\\vec{v}$. A magnetic field can change the direction of a particle’s motion but never its speed or kinetic energy.",
              "zh": "一个关键推论：磁场力始终垂直于速度，因此不做功。形式上，$W = \\int \\vec{F}\\cdot d\\vec{l} = \\int q(\\vec{v}\\times\\vec{B})\\cdot\\vec{v}\\,dt = 0$，因为叉积 $\\vec{v}\\times\\vec{B}$ 垂直于 $\\vec{v}$。磁场可以改变粒子运动的方向，但永远不能改变其速率或动能。"
            },
            {
              "type": "h3",
              "en": "Circular Motion in a Uniform Field",
              "zh": "匀强磁场中的圆周运动"
            },
            {
              "type": "p",
              "en": "If a charge enters a uniform field $\\vec{B}$ with $\\vec{v}$ perpendicular to $\\vec{B}$, the constant-magnitude, always-perpendicular force acts as a centripetal force, producing uniform circular motion. Setting $qvB = mv^2/r$ gives the radius:",
              "zh": "若电荷以垂直于 $\\vec{B}$ 的速度进入匀强磁场，这个大小不变、始终垂直于速度的力充当向心力，产生匀速圆周运动。令 $qvB = mv^2/r$ 得到半径："
            },
            {
              "type": "math",
              "tex": "r = \\frac{mv}{qB}"
            },
            {
              "type": "p",
              "en": "The angular frequency (cyclotron frequency) and period follow from $\\omega = v/r$:",
              "zh": "角频率（回旋频率）与周期由 $\\omega = v/r$ 得出："
            },
            {
              "type": "math",
              "tex": "\\omega = \\frac{qB}{m}, \\qquad T = \\frac{2\\pi m}{qB}"
            },
            {
              "type": "p",
              "en": "Notice that $\\omega$ and $T$ do not depend on the speed: a faster particle travels a proportionally larger circle in exactly the same time. This speed-independence is what makes cyclotrons work — the accelerating voltage can flip at a fixed frequency.",
              "zh": "注意 $\\omega$ 与 $T$ 不依赖于速率：更快的粒子在完全相同的时间内走过成比例更大的圆。这种与速率无关的性质正是回旋加速器的原理——加速电压可以以固定频率翻转。"
            },
            {
              "type": "h3",
              "en": "Velocity Selector and Mass Spectrometer",
              "zh": "速度选择器与质谱仪"
            },
            {
              "type": "p",
              "en": "In a velocity selector, uniform $\\vec{E}$ and $\\vec{B}$ fields are crossed (mutually perpendicular) so the electric force $qE$ and magnetic force $qvB$ on a charge are opposite. Only particles for which the forces balance pass through undeflected:",
              "zh": "在速度选择器中，匀强电场 $\\vec{E}$ 与磁场 $\\vec{B}$ 相互垂直（交叉），使电荷所受的电场力 $qE$ 与磁场力 $qvB$ 方向相反。只有两力平衡的粒子才能不偏转地通过："
            },
            {
              "type": "math",
              "tex": "qE = qvB \\;\\Rightarrow\\; v = \\frac{E}{B}"
            },
            {
              "type": "p",
              "en": "A mass spectrometer combines a velocity selector with a second region of uniform field $B'$, where the ion bends in a semicircle of radius $r = mv/(qB')$. Measuring $r$ determines the mass: $m = qB'r/v$. Ions of different mass land at different positions, which is how isotopes are separated and identified.",
              "zh": "质谱仪将速度选择器与第二个匀强磁场区域 $B'$ 结合，离子在其中沿半径 $r = mv/(qB')$ 的半圆偏转。测量 $r$ 即可确定质量：$m = qB'r/v$。不同质量的离子落在不同位置，这正是分离和鉴别同位素的方法。"
            },
            {
              "type": "h3",
              "en": "Force on a Current-Carrying Wire and Torque on a Loop",
              "zh": "载流导线受力与线圈力矩"
            },
            {
              "type": "p",
              "en": "A current is a stream of moving charges, so a wire in a magnetic field feels a force. For a straight segment of length $L$ carrying current $I$, summing the force on each carrier ($n$ carriers per volume, drift speed $v_d$, cross-section $A$) gives $F = (nAL)qv_dB = (nAqv_d)LB = BIL$ when the wire is perpendicular to the field. In vector form:",
              "zh": "电流是运动电荷的集合，所以磁场中的载流导线会受力。对长为 $L$、载流 $I$ 的直导线段，把每个载流子所受的力求和（单位体积 $n$ 个载流子，漂移速率 $v_d$，横截面积 $A$）：当导线垂直于磁场时 $F = (nAL)qv_dB = (nAqv_d)LB = BIL$。矢量形式为："
            },
            {
              "type": "math",
              "tex": "\\vec{F} = I\\vec{L}\\times\\vec{B}"
            },
            {
              "type": "p",
              "en": "A closed current loop in a uniform field feels zero net force but generally a nonzero torque. Defining the magnetic moment $\\vec{\\mu}$ with magnitude $\\mu = NIA$ (N turns, area A), directed perpendicular to the loop by the right-hand rule (curl fingers along the current), the torque is:",
              "zh": "匀强磁场中的闭合载流线圈所受合力为零，但一般存在力矩。定义磁矩 $\\vec{\\mu}$，大小为 $\\mu = NIA$（$N$ 匝、面积 $A$），方向由右手定则（手指沿电流方向弯曲）垂直于线圈平面。力矩为："
            },
            {
              "type": "math",
              "tex": "\\vec{\\tau} = \\vec{\\mu}\\times\\vec{B}, \\qquad \\tau = NIAB\\sin\\theta"
            },
            {
              "type": "p",
              "en": "Here $\\theta$ is the angle between $\\vec{\\mu}$ and $\\vec{B}$. The torque is maximum when the plane of the loop is parallel to the field ($\\vec{\\mu}\\perp\\vec{B}$) and zero when $\\vec{\\mu}$ aligns with $\\vec{B}$ — the loop settles into that orientation, which is the principle of a motor’s rotation and a compass needle.",
              "zh": "这里 $\\theta$ 是 $\\vec{\\mu}$ 与 $\\vec{B}$ 的夹角。当线圈平面与磁场平行（$\\vec{\\mu}\\perp\\vec{B}$）时力矩最大；当 $\\vec{\\mu}$ 与 $\\vec{B}$ 同向时力矩为零——线圈会转向该取向，这正是电动机转动和指南针的原理。"
            },
            {
              "type": "note",
              "en": "AP exam tip: Two classic traps. (1) For a NEGATIVE charge, the force is opposite to what the right-hand rule gives — many students forget the sign flip for electrons. (2) Since the magnetic force does no work, it can never change a particle’s speed or kinetic energy; if a question asks how the speed changes in a pure magnetic field, the answer is “it doesn’t.”",
              "zh": "AP 考试提示：两个经典陷阱。（1）对负电荷，力的方向与右手定则给出的相反——很多学生忘记对电子翻转方向。（2）磁场力不做功，因此永远不能改变粒子的速率或动能；若题目问粒子在纯磁场中速率如何变化，答案是“不变”。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Radius and period of circular motion",
                "zh": "例题 1：圆周运动的半径与周期"
              },
              "problem": {
                "en": "A doubly ionized atom ($q = 3.2\\times10^{-19}\\,\\text{C}$, $m = 6.4\\times10^{-27}\\,\\text{kg}$) moves at $v = 1.0\\times10^{6}\\,\\text{m/s}$ perpendicular to a uniform field $B = 0.20\\,\\text{T}$. Find the radius of its path and the period of the motion.",
                "zh": "一个二价离子（$q = 3.2\\times10^{-19}\\,\\text{C}$，$m = 6.4\\times10^{-27}\\,\\text{kg}$）以 $v = 1.0\\times10^{6}\\,\\text{m/s}$ 垂直于匀强磁场 $B = 0.20\\,\\text{T}$ 运动。求其轨道半径和运动周期。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The magnetic force supplies the centripetal force, $qvB = mv^2/r$, so:",
                  "zh": "磁场力提供向心力，$qvB = mv^2/r$，因此："
                },
                {
                  "type": "math",
                  "tex": "r = \\frac{mv}{qB} = \\frac{(6.4\\times10^{-27})(1.0\\times10^{6})}{(3.2\\times10^{-19})(0.20)} = 0.10\\,\\text{m}"
                },
                {
                  "type": "p",
                  "en": "The period is independent of $v$:",
                  "zh": "周期与 $v$ 无关："
                },
                {
                  "type": "math",
                  "tex": "T = \\frac{2\\pi m}{qB} = \\frac{2\\pi(6.4\\times10^{-27})}{(3.2\\times10^{-19})(0.20)} = 2\\pi\\times10^{-7}\\,\\text{s} \\approx 6.3\\times10^{-7}\\,\\text{s}"
                },
                {
                  "type": "p",
                  "en": "If the ion were moving twice as fast, the radius would double to $0.20\\,\\text{m}$, but the period would still be $6.3\\times10^{-7}\\,\\text{s}$.",
                  "zh": "若离子速率加倍，半径将加倍为 $0.20\\,\\text{m}$，但周期仍为 $6.3\\times10^{-7}\\,\\text{s}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A mass spectrometer measurement",
                "zh": "例题 2：质谱仪测量"
              },
              "problem": {
                "en": "In a mass spectrometer, singly charged ions ($q = 1.6\\times10^{-19}\\,\\text{C}$) first pass through a velocity selector with $E = 6.0\\times10^{4}\\,\\text{V/m}$ and $B = 0.30\\,\\text{T}$. They then enter a region of uniform field $B' = 0.50\\,\\text{T}$ and bend in a semicircle of radius $5.0\\,\\text{cm}$. Find the speed of the ions and their mass.",
                "zh": "在质谱仪中，一价离子（$q = 1.6\\times10^{-19}\\,\\text{C}$）先通过速度选择器，其中 $E = 6.0\\times10^{4}\\,\\text{V/m}$，$B = 0.30\\,\\text{T}$。随后进入匀强磁场 $B' = 0.50\\,\\text{T}$ 区域，沿半径 $5.0\\,\\text{cm}$ 的半圆偏转。求离子的速率及其质量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "In the selector, only ions with balanced electric and magnetic forces pass straight through:",
                  "zh": "在选择器中，只有电场力与磁场力平衡的离子才能直线通过："
                },
                {
                  "type": "math",
                  "tex": "v = \\frac{E}{B} = \\frac{6.0\\times10^{4}}{0.30} = 2.0\\times10^{5}\\,\\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "In the second region, $r = mv/(qB')$, so:",
                  "zh": "在第二个区域中，$r = mv/(qB')$，因此："
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{qB'r}{v} = \\frac{(1.6\\times10^{-19})(0.50)(0.050)}{2.0\\times10^{5}} = 2.0\\times10^{-26}\\,\\text{kg}"
                },
                {
                  "type": "p",
                  "en": "A heavier isotope with the same charge and speed would trace a larger radius and strike the detector farther away — the spacing between landing points is how the spectrometer resolves masses.",
                  "zh": "相同电荷和速率的更重同位素会沿更大半径运动，打在探测器上更远的位置——落点之间的间距正是质谱仪分辨质量的方式。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A positive charge moves in the $+x$ direction through a uniform magnetic field pointing in the $+z$ direction. What is the direction of the magnetic force on it?",
                "zh": "一个正电荷沿 $+x$ 方向运动，穿过指向 $+z$ 方向的匀强磁场。它所受磁场力的方向是？"
              },
              "choices": [
                "$+y$",
                "$-z$",
                "$-y$",
                "$+x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\vec{F} = q\\vec{v}\\times\\vec{B}$ with $\\hat{x}\\times\\hat{z} = -\\hat{y}$, so the force is in the $-y$ direction. Choosing $+y$ is the classic error of computing $\\hat{z}\\times\\hat{x}$ instead — order matters in a cross product.",
                "zh": "$\\vec{F} = q\\vec{v}\\times\\vec{B}$，而 $\\hat{x}\\times\\hat{z} = -\\hat{y}$，所以力沿 $-y$ 方向。选 $+y$ 是把叉积算成 $\\hat{z}\\times\\hat{x}$ 的经典错误——叉积的顺序很重要。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why can a magnetic force never change the kinetic energy of a charged particle?",
                "zh": "为什么磁场力永远不能改变带电粒子的动能？"
              },
              "choices": [
                "The force is too weak to do measurable work",
                "The force is always perpendicular to the velocity, so $\\vec{F}\\cdot\\vec{v} = 0$",
                "The force only acts on particles at rest",
                "Magnetic fields carry no energy"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $\\vec{F} = q\\vec{v}\\times\\vec{B}$ is perpendicular to $\\vec{v}$, the power delivered is $\\vec{F}\\cdot\\vec{v} = 0$ at every instant, so no work is done and kinetic energy is constant. The first choice is tempting but wrong: the force can be very large; it simply points the wrong way to do work.",
                "zh": "因为 $\\vec{F} = q\\vec{v}\\times\\vec{B}$ 垂直于 $\\vec{v}$，所以每一瞬间功率 $\\vec{F}\\cdot\\vec{v} = 0$，不做功，动能不变。第一个选项有迷惑性但错误：这个力可以很大，只是方向决定了它不做功。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A proton moves in a circle in a uniform magnetic field. If its speed is doubled, what happens to the period of its circular motion?",
                "zh": "一个质子在匀强磁场中做圆周运动。若其速率加倍，圆周运动的周期如何变化？"
              },
              "choices": [
                "It doubles",
                "It is halved",
                "It quadruples",
                "It stays the same"
              ],
              "answer": 3,
              "explanation": {
                "en": "$T = 2\\pi m/(qB)$ contains no $v$: doubling the speed doubles the radius ($r = mv/qB$), so the circumference doubles too, and the time around is unchanged. “It doubles” is tempting if you think only about the larger circle and forget the particle also moves faster.",
                "zh": "$T = 2\\pi m/(qB)$ 中不含 $v$：速率加倍使半径加倍（$r = mv/qB$），周长也加倍，环绕一周的时间不变。若只想到圆变大而忘了粒子也变快，就会误选“加倍”。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An ion with charge $q = 1.6\\times10^{-19}\\,\\text{C}$ and mass $m = 3.2\\times10^{-26}\\,\\text{kg}$ moves at $2.0\\times10^{5}\\,\\text{m/s}$ perpendicular to a $0.40\\,\\text{T}$ field. Find the radius of its circular path in meters (give a decimal, e.g. 0.25).",
                "zh": "一个电荷 $q = 1.6\\times10^{-19}\\,\\text{C}$、质量 $m = 3.2\\times10^{-26}\\,\\text{kg}$ 的离子以 $2.0\\times10^{5}\\,\\text{m/s}$ 垂直于 $0.40\\,\\text{T}$ 的磁场运动。求其圆轨道半径，单位米（填小数，如 0.25）。"
              },
              "answer": "0.1",
              "accept": [
                "0.10",
                ".1",
                "0.1 m"
              ],
              "explanation": {
                "en": "$r = mv/(qB) = (3.2\\times10^{-26})(2.0\\times10^{5})/[(1.6\\times10^{-19})(0.40)] = 6.4\\times10^{-21}/6.4\\times10^{-20} = 0.10\\,\\text{m}$.",
                "zh": "$r = mv/(qB) = (3.2\\times10^{-26})(2.0\\times10^{5})/[(1.6\\times10^{-19})(0.40)] = 6.4\\times10^{-21}/6.4\\times10^{-20} = 0.10\\,\\text{m}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A velocity selector has $E = 500\\,\\text{V/m}$ and $B = 0.25\\,\\text{T}$, mutually perpendicular. What speed (in m/s, integer) passes through undeflected?",
                "zh": "一个速度选择器中 $E = 500\\,\\text{V/m}$，$B = 0.25\\,\\text{T}$，两场相互垂直。速率为多少（m/s，整数）的粒子能不偏转地通过？"
              },
              "answer": "2000",
              "accept": [
                "2000.0",
                "2000 m/s",
                "2e3"
              ],
              "explanation": {
                "en": "Undeflected means $qE = qvB$, so $v = E/B = 500/0.25 = 2000\\,\\text{m/s}$. Note the charge cancels — the selector works for any charge magnitude.",
                "zh": "不偏转意味着 $qE = qvB$，所以 $v = E/B = 500/0.25 = 2000\\,\\text{m/s}$。注意电荷被约去——选择器对任何电荷量都适用。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A straight wire carries current $I$ parallel to a uniform magnetic field $\\vec{B}$. The magnetic force on the wire is:",
                "zh": "一根直导线载有电流 $I$，方向与匀强磁场 $\\vec{B}$ 平行。导线所受的磁场力为："
              },
              "choices": [
                "$BIL$, perpendicular to the wire",
                "Zero",
                "$BIL$, along the wire",
                "$BIL/2$, perpendicular to the wire"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\vec{F} = I\\vec{L}\\times\\vec{B}$, and the cross product of parallel vectors is zero ($\\sin 0° = 0$). The distractor $BIL$ is the maximum force, which occurs only when the wire is perpendicular to the field.",
                "zh": "$\\vec{F} = I\\vec{L}\\times\\vec{B}$，平行矢量的叉积为零（$\\sin 0° = 0$）。干扰项 $BIL$ 是最大力，只在导线垂直于磁场时出现。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $0.30\\,\\text{m}$ straight wire carries $4.0\\,\\text{A}$ perpendicular to a uniform $0.50\\,\\text{T}$ field. Find the magnitude of the force on the wire in newtons (give a decimal, e.g. 0.5).",
                "zh": "一根长 $0.30\\,\\text{m}$ 的直导线载有 $4.0\\,\\text{A}$ 电流，方向垂直于 $0.50\\,\\text{T}$ 的匀强磁场。求导线所受力的大小，单位牛顿（填小数，如 0.5）。"
              },
              "answer": "0.6",
              "accept": [
                "0.60",
                ".6",
                "0.6 N"
              ],
              "explanation": {
                "en": "$F = BIL\\sin 90° = (0.50)(4.0)(0.30) = 0.60\\,\\text{N}$.",
                "zh": "$F = BIL\\sin 90° = (0.50)(4.0)(0.30) = 0.60\\,\\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rectangular coil of $N = 50$ turns, area $A = 0.010\\,\\text{m}^2$, carries $I = 2.0\\,\\text{A}$. It sits in a uniform field $B = 0.20\\,\\text{T}$ with the plane of the coil parallel to the field. What is the torque on the coil?",
                "zh": "一个 $N = 50$ 匝、面积 $A = 0.010\\,\\text{m}^2$ 的矩形线圈载有 $I = 2.0\\,\\text{A}$ 电流，置于 $B = 0.20\\,\\text{T}$ 的匀强磁场中，线圈平面与磁场平行。线圈所受力矩为多少？"
              },
              "choices": [
                "$0\\,\\text{N·m}$",
                "$0.10\\,\\text{N·m}$",
                "$0.20\\,\\text{N·m}$",
                "$0.40\\,\\text{N·m}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\mu = NIA = (50)(2.0)(0.010) = 1.0\\,\\text{A·m}^2$. When the plane is parallel to $\\vec{B}$, the moment $\\vec{\\mu}$ is perpendicular to $\\vec{B}$, so $\\tau = \\mu B\\sin 90° = (1.0)(0.20) = 0.20\\,\\text{N·m}$. Choosing $0$ is the trap of thinking “parallel plane means no torque” — in fact the torque is maximum in that orientation; it is zero when $\\vec{\\mu}$ is parallel to $\\vec{B}$ (plane perpendicular to the field).",
                "zh": "$\\mu = NIA = (50)(2.0)(0.010) = 1.0\\,\\text{A·m}^2$。当线圈平面与 $\\vec{B}$ 平行时，磁矩 $\\vec{\\mu}$ 垂直于 $\\vec{B}$，所以 $\\tau = \\mu B\\sin 90° = (1.0)(0.20) = 0.20\\,\\text{N·m}$。选 $0$ 是“平面平行就没有力矩”的陷阱——实际上该取向力矩最大；当 $\\vec{\\mu}$ 与 $\\vec{B}$ 平行（平面垂直于磁场）时力矩才为零。"
              }
            }
          ]
        },
        {
          "id": "biot-savart-ampere",
          "title": "Biot–Savart and Ampère’s Law",
          "titleZh": "毕奥-萨伐尔定律与安培定律",
          "content": [
            {
              "type": "h2",
              "en": "The Biot–Savart Law",
              "zh": "毕奥-萨伐尔定律"
            },
            {
              "type": "p",
              "en": "Moving charges create magnetic fields. The Biot–Savart law gives the field contribution $d\\vec{B}$ from a short current element $I\\,d\\vec{l}$ at a point a distance $r$ away, where $\\hat{r}$ points from the element to the field point:",
              "zh": "运动电荷产生磁场。毕奥-萨伐尔定律给出一小段电流元 $I\\,d\\vec{l}$ 在距离 $r$ 处某点的磁场贡献 $d\\vec{B}$，其中 $\\hat{r}$ 从电流元指向场点："
            },
            {
              "type": "math",
              "tex": "d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\,\\frac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}"
            },
            {
              "type": "p",
              "en": "Here $\\mu_0 = 4\\pi\\times10^{-7}\\,\\text{T·m/A}$ is the permeability of free space. To find the total field, integrate the contributions from every element of the current — this is a vector integral, so symmetry arguments about which components cancel are essential.",
              "zh": "这里 $\\mu_0 = 4\\pi\\times10^{-7}\\,\\text{T·m/A}$ 是真空磁导率。要求总磁场，需对电流的每一个元素的贡献积分——这是矢量积分，因此判断哪些分量相互抵消的对称性分析至关重要。"
            },
            {
              "type": "h3",
              "en": "Derivation: Field at the Center of a Ring",
              "zh": "推导：圆环中心的磁场"
            },
            {
              "type": "p",
              "en": "For a circular loop of radius $R$ carrying current $I$, consider the field at the center. Every element $d\\vec{l}$ is perpendicular to $\\hat{r}$ (which points inward along a radius), and every $d\\vec{B}$ points the same way — along the axis, by the right-hand rule. So the magnitudes simply add:",
              "zh": "对半径为 $R$、载流 $I$ 的圆环，考虑其中心处的磁场。每个电流元 $d\\vec{l}$ 都垂直于 $\\hat{r}$（$\\hat{r}$ 沿半径指向中心），且由右手定则，每个 $d\\vec{B}$ 都指向同一方向——沿轴线方向。因此各贡献的大小直接相加："
            },
            {
              "type": "math",
              "tex": "B = \\int dB = \\frac{\\mu_0 I}{4\\pi R^2}\\int dl = \\frac{\\mu_0 I}{4\\pi R^2}(2\\pi R) = \\frac{\\mu_0 I}{2R}"
            },
            {
              "type": "p",
              "en": "The same setup extends to a point on the axis a distance $z$ from the center: each element is a distance $\\sqrt{R^2+z^2}$ away, the components perpendicular to the axis cancel around the ring, and the axial components add to give $B = \\mu_0 I R^2 / [2(R^2+z^2)^{3/2}]$, which reduces to $\\mu_0 I/2R$ at $z = 0$.",
              "zh": "同样的思路可推广到轴线上距中心 $z$ 处的点：每个电流元与该点相距 $\\sqrt{R^2+z^2}$，垂直于轴的分量沿环相互抵消，轴向分量相加得 $B = \\mu_0 I R^2 / [2(R^2+z^2)^{3/2}]$，在 $z = 0$ 时化为 $\\mu_0 I/2R$。"
            },
            {
              "type": "h3",
              "en": "The Long Straight Wire and Forces Between Wires",
              "zh": "长直导线与平行导线间的作用力"
            },
            {
              "type": "p",
              "en": "Applying Biot–Savart to an infinite straight wire (integrating $dB = \\frac{\\mu_0 I}{4\\pi}\\frac{\\sin\\theta\\,dl}{r^2}$ along the wire’s length) yields a field that circles the wire, with magnitude at perpendicular distance $r$:",
              "zh": "将毕奥-萨伐尔定律应用于无限长直导线（沿导线长度积分 $dB = \\frac{\\mu_0 I}{4\\pi}\\frac{\\sin\\theta\\,dl}{r^2}$），得到环绕导线的磁场，在垂直距离 $r$ 处大小为："
            },
            {
              "type": "math",
              "tex": "B = \\frac{\\mu_0 I}{2\\pi r}"
            },
            {
              "type": "p",
              "en": "The direction follows a second right-hand rule: point your thumb along the current and your fingers curl in the direction of $\\vec{B}$. Two long parallel wires a distance $d$ apart interact: wire 1 creates $B_1 = \\mu_0 I_1/(2\\pi d)$ at wire 2, which then feels $F = I_2 L B_1$. The force per unit length is:",
              "zh": "方向由另一个右手定则确定：拇指指向电流方向，四指弯曲的方向即为 $\\vec{B}$ 的方向。相距 $d$ 的两根长平行导线相互作用：导线 1 在导线 2 处产生 $B_1 = \\mu_0 I_1/(2\\pi d)$，导线 2 因而受力 $F = I_2 L B_1$。单位长度受力为："
            },
            {
              "type": "math",
              "tex": "\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}"
            },
            {
              "type": "p",
              "en": "Working out the cross-product directions shows that currents in the same direction attract, while opposite currents repel. (A quick check: each wire’s field at the other wire, crossed with that wire’s current direction, points toward the first wire when the currents are parallel.)",
              "zh": "分析叉积方向可知：同向电流相互吸引，反向电流相互排斥。（快速验证：当电流同向时，一根导线在另一根导线处的磁场与该导线电流方向的叉积指向第一根导线。）"
            },
            {
              "type": "h3",
              "en": "Ampère’s Law and Symmetry",
              "zh": "安培定律与对称性"
            },
            {
              "type": "p",
              "en": "Ampère’s law relates the line integral of $\\vec{B}$ around any closed loop to the net current passing through the loop:",
              "zh": "安培定律把 $\\vec{B}$ 沿任意闭合回路的线积分与穿过该回路的净电流联系起来："
            },
            {
              "type": "math",
              "tex": "\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enc}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Thick wire of radius $R$ with uniform current density: outside ($r > R$), a circular Amperian loop encloses all of $I$, giving $B = \\mu_0 I/(2\\pi r)$. Inside ($r < R$), the loop encloses only the fraction $I(r^2/R^2)$, so $B = \\mu_0 I r/(2\\pi R^2)$ — the field grows linearly to the surface, then falls off as $1/r$.",
                  "zh": "半径为 $R$、电流密度均匀的粗导线：在外部（$r > R$），圆形安培环包围全部电流 $I$，得 $B = \\mu_0 I/(2\\pi r)$。在内部（$r < R$），环只包围 $I(r^2/R^2)$，所以 $B = \\mu_0 I r/(2\\pi R^2)$——磁场随 $r$ 线性增大到表面，之后按 $1/r$ 衰减。"
                },
                {
                  "en": "Ideal solenoid ($n$ turns per unit length): take a rectangular loop with one side of length $\\ell$ inside, parallel to the axis, and one side outside where $B \\approx 0$. The two perpendicular sides contribute nothing ($\\vec{B}\\perp d\\vec{l}$), so $\\oint\\vec{B}\\cdot d\\vec{l} = B\\ell = \\mu_0(n\\ell)I$, giving $B = \\mu_0 n I$ — uniform, independent of position inside.",
                  "zh": "理想螺线管（单位长度 $n$ 匝）：取一矩形回路，一条长 $\\ell$ 的边在管内平行于轴线，另一条边在管外（那里 $B \\approx 0$）。两条垂直边不贡献（$\\vec{B}\\perp d\\vec{l}$），所以 $\\oint\\vec{B}\\cdot d\\vec{l} = B\\ell = \\mu_0(n\\ell)I$，得 $B = \\mu_0 n I$——管内均匀，与位置无关。"
                },
                {
                  "en": "Toroid ($N$ total turns): a circular loop of radius $r$ inside the windings encloses $NI$, so $B = \\mu_0 N I/(2\\pi r)$ — not uniform, stronger near the inner edge.",
                  "zh": "螺绕环（共 $N$ 匝）：绕组内部半径为 $r$ 的圆形回路包围电流 $NI$，所以 $B = \\mu_0 N I/(2\\pi r)$——不均匀，靠近内缘处更强。"
                }
              ]
            },
            {
              "type": "p",
              "en": "When to use which law: Ampère’s law is always true but only useful when symmetry makes $\\vec{B}$ constant in magnitude and parallel (or perpendicular) to the loop — infinite wires and cylinders, solenoids, toroids. For finite geometries like a ring, an arc, or a point off a short wire, use Biot–Savart and integrate.",
              "zh": "何时用哪条定律：安培定律永远成立，但只有当对称性使 $\\vec{B}$ 大小恒定且与回路平行（或垂直）时才实用——无限长导线与圆柱、螺线管、螺绕环。对有限几何结构，如圆环、圆弧或短导线外一点，应使用毕奥-萨伐尔定律并积分。"
            },
            {
              "type": "note",
              "en": "AP exam tip: In Ampère’s law, $I_{enc}$ is only the current passing THROUGH your chosen loop, and $\\oint\\vec{B}\\cdot d\\vec{l} = 0$ does not mean $\\vec{B} = 0$ on the loop — nearby currents outside the loop still create fields there; their contributions to the line integral just cancel. FRQs often ask you to justify the choice of Amperian loop: state the symmetry (field magnitude constant, direction tangent to the loop) explicitly.",
              "zh": "AP 考试提示：安培定律中的 $I_{enc}$ 只是穿过所选回路的电流；且 $\\oint\\vec{B}\\cdot d\\vec{l} = 0$ 并不意味着回路上 $\\vec{B} = 0$——回路外的电流仍在那里产生磁场，只是它们对线积分的贡献相互抵消。FRQ 常要求论证安培环的选取：要明确写出对称性（场大小恒定、方向沿回路切线）。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Field at the center of a current loop",
                "zh": "例题 1：载流圆环中心的磁场"
              },
              "problem": {
                "en": "A circular loop of radius $R = 2.0\\,\\text{cm}$ carries a current $I = 10\\,\\text{A}$. Use the Biot–Savart law to find the magnetic field at the center of the loop.",
                "zh": "一个半径 $R = 2.0\\,\\text{cm}$ 的圆环载有电流 $I = 10\\,\\text{A}$。用毕奥-萨伐尔定律求环中心处的磁场。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Every element $d\\vec{l}$ is perpendicular to $\\hat{r}$ and sits at the same distance $R$, and all contributions point along the axis, so:",
                  "zh": "每个电流元 $d\\vec{l}$ 都垂直于 $\\hat{r}$，且与中心距离都是 $R$，所有贡献都沿轴线方向，因此："
                },
                {
                  "type": "math",
                  "tex": "B = \\frac{\\mu_0 I}{4\\pi R^2}\\oint dl = \\frac{\\mu_0 I}{4\\pi R^2}(2\\pi R) = \\frac{\\mu_0 I}{2R}"
                },
                {
                  "type": "math",
                  "tex": "B = \\frac{(4\\pi\\times10^{-7})(10)}{2(0.020)} = \\pi\\times10^{-4} \\approx 3.1\\times10^{-4}\\,\\text{T}"
                },
                {
                  "type": "p",
                  "en": "Note this is a case where Ampère’s law is useless: no loop around a single ring has the symmetry needed to pull $B$ out of the integral.",
                  "zh": "注意这是安培定律无能为力的情形：对单个圆环，找不到具有足够对称性、能把 $B$ 提出积分号的回路。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Field inside and outside a thick wire",
                "zh": "例题 2：粗导线内外的磁场"
              },
              "problem": {
                "en": "A long cylindrical wire of radius $R$ carries total current $I$ distributed uniformly over its cross-section. Derive $B(r)$ for $r < R$ and $r > R$.",
                "zh": "一根半径为 $R$ 的长圆柱导线载有总电流 $I$，电流均匀分布在横截面上。推导 $r < R$ 与 $r > R$ 时的 $B(r)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By symmetry, $\\vec{B}$ circles the axis with constant magnitude on any concentric circle. Choose a circular Amperian loop of radius $r$. For $r > R$, the loop encloses all of $I$:",
                  "zh": "由对称性，$\\vec{B}$ 绕轴线呈圆形分布，在任意同心圆上大小相同。取半径为 $r$ 的圆形安培环。当 $r > R$ 时，环包围全部电流 $I$："
                },
                {
                  "type": "math",
                  "tex": "B(2\\pi r) = \\mu_0 I \\;\\Rightarrow\\; B = \\frac{\\mu_0 I}{2\\pi r}"
                },
                {
                  "type": "p",
                  "en": "For $r < R$, uniform current density $J = I/(\\pi R^2)$ means the enclosed current is $I_{enc} = J(\\pi r^2) = I r^2/R^2$:",
                  "zh": "当 $r < R$ 时，均匀电流密度 $J = I/(\\pi R^2)$ 意味着被包围的电流为 $I_{enc} = J(\\pi r^2) = I r^2/R^2$："
                },
                {
                  "type": "math",
                  "tex": "B(2\\pi r) = \\mu_0 \\frac{I r^2}{R^2} \\;\\Rightarrow\\; B = \\frac{\\mu_0 I r}{2\\pi R^2}"
                },
                {
                  "type": "p",
                  "en": "The field rises linearly from zero at the axis, peaks at $r = R$ where both formulas give $\\mu_0 I/(2\\pi R)$, then falls off as $1/r$. Sketching $B$ versus $r$ — a straight line up to $R$, then a decaying curve — is a favorite AP graph question.",
                  "zh": "磁场从轴线处的零开始线性增大，在 $r = R$ 处达到峰值（两个公式都给出 $\\mu_0 I/(2\\pi R)$），之后按 $1/r$ 衰减。画出 $B$ 随 $r$ 变化的图像——先是直线上升到 $R$，然后是衰减曲线——是 AP 常考的作图题。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The magnetic field a distance $r$ from a long straight wire is $B_0$. What is the field at distance $2r$?",
                "zh": "距长直导线 $r$ 处的磁场为 $B_0$。距离 $2r$ 处的磁场是多少？"
              },
              "choices": [
                "$B_0/4$",
                "$B_0/2$",
                "$B_0$",
                "$2B_0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$B = \\mu_0 I/(2\\pi r)$ falls off as $1/r$, so doubling the distance halves the field. $B_0/4$ is tempting if you confuse this with the $1/r^2$ dependence of a point-charge field or a single Biot–Savart element.",
                "zh": "$B = \\mu_0 I/(2\\pi r)$ 按 $1/r$ 衰减，距离加倍则磁场减半。若把它与点电荷场或单个毕奥-萨伐尔电流元的 $1/r^2$ 关系混淆，就会误选 $B_0/4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A long straight wire carries $I = 10\\,\\text{A}$. Find the magnitude of the magnetic field at a perpendicular distance of $0.050\\,\\text{m}$, in microteslas ($\\mu$T, integer).",
                "zh": "一根长直导线载有 $I = 10\\,\\text{A}$ 电流。求垂直距离 $0.050\\,\\text{m}$ 处磁场的大小，单位微特斯拉（$\\mu$T，整数）。"
              },
              "answer": "40",
              "accept": [
                "40.0",
                "40 uT",
                "40 μT"
              ],
              "explanation": {
                "en": "$B = \\mu_0 I/(2\\pi r) = (2\\times10^{-7})(10/0.050) = 4.0\\times10^{-5}\\,\\text{T} = 40\\,\\mu\\text{T}$. The shortcut $\\mu_0/2\\pi = 2\\times10^{-7}$ in SI units is worth memorizing.",
                "zh": "$B = \\mu_0 I/(2\\pi r) = (2\\times10^{-7})(10/0.050) = 4.0\\times10^{-5}\\,\\text{T} = 40\\,\\mu\\text{T}$。国际单位制中 $\\mu_0/2\\pi = 2\\times10^{-7}$ 这个捷径值得记住。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two long parallel wires carry currents in the same direction. The magnetic force between them is:",
                "zh": "两根长平行导线载有同向电流。它们之间的磁场力是："
              },
              "choices": [
                "Repulsive",
                "Zero",
                "Attractive",
                "Along the wires"
              ],
              "answer": 2,
              "explanation": {
                "en": "Wire 1’s field at wire 2 circles wire 1; crossing wire 2’s current direction with that field ($I\\vec{L}\\times\\vec{B}$) gives a force pointing toward wire 1. Parallel currents attract; antiparallel currents repel. “Repulsive” tempts students who reason from like charges repelling — but currents are not static charges.",
                "zh": "导线 1 在导线 2 处的磁场环绕导线 1；将导线 2 的电流方向与该磁场作叉积（$I\\vec{L}\\times\\vec{B}$），得到指向导线 1 的力。同向电流相吸，反向电流相斥。“排斥”会诱惑那些用同种电荷相斥来类比的学生——但电流不是静止电荷。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two long parallel wires each carry $5.0\\,\\text{A}$ and are separated by $0.10\\,\\text{m}$. Find the magnitude of the force per unit length between them, in micronewtons per meter ($\\mu$N/m, integer).",
                "zh": "两根长平行导线各载有 $5.0\\,\\text{A}$ 电流，相距 $0.10\\,\\text{m}$。求它们之间单位长度的作用力大小，单位微牛每米（$\\mu$N/m，整数）。"
              },
              "answer": "50",
              "accept": [
                "50.0",
                "50 uN/m"
              ],
              "explanation": {
                "en": "$F/L = \\mu_0 I_1 I_2/(2\\pi d) = (2\\times10^{-7})(5.0)(5.0)/0.10 = 5.0\\times10^{-5}\\,\\text{N/m} = 50\\,\\mu\\text{N/m}$.",
                "zh": "$F/L = \\mu_0 I_1 I_2/(2\\pi d) = (2\\times10^{-7})(5.0)(5.0)/0.10 = 5.0\\times10^{-5}\\,\\text{N/m} = 50\\,\\mu\\text{N/m}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An ideal solenoid has $n$ turns per meter and carries current $I$. If the number of turns per meter is doubled while the current is halved, the interior field:",
                "zh": "一个理想螺线管每米 $n$ 匝，载流 $I$。若单位长度匝数加倍而电流减半，管内磁场："
              },
              "choices": [
                "Doubles",
                "Is halved",
                "Quadruples",
                "Stays the same"
              ],
              "answer": 3,
              "explanation": {
                "en": "$B = \\mu_0 n I$ depends only on the product $nI$: doubling $n$ and halving $I$ leaves $nI$ unchanged. Note $B$ is also independent of the solenoid’s radius — a fact the AP exam likes to test.",
                "zh": "$B = \\mu_0 n I$ 只依赖乘积 $nI$：$n$ 加倍、$I$ 减半后 $nI$ 不变。注意 $B$ 也与螺线管半径无关——这是 AP 考试爱考的知识点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solenoid has $1000$ turns per meter and carries $2.0\\,\\text{A}$. Find the field inside, in milliteslas (2 significant figures, e.g. 1.3).",
                "zh": "一个螺线管每米 $1000$ 匝，载流 $2.0\\,\\text{A}$。求管内磁场，单位毫特斯拉（保留 2 位有效数字，如 1.3）。"
              },
              "answer": "2.5",
              "accept": [
                "2.51",
                "2.5 mT"
              ],
              "explanation": {
                "en": "$B = \\mu_0 n I = (4\\pi\\times10^{-7})(1000)(2.0) = 8\\pi\\times10^{-4} \\approx 2.5\\times10^{-3}\\,\\text{T} = 2.5\\,\\text{mT}$.",
                "zh": "$B = \\mu_0 n I = (4\\pi\\times10^{-7})(1000)(2.0) = 8\\pi\\times10^{-4} \\approx 2.5\\times10^{-3}\\,\\text{T} = 2.5\\,\\text{mT}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A closed Amperian loop encloses zero net current, yet a current-carrying wire lies just outside the loop. Which statement is correct?",
                "zh": "一个闭合安培环包围的净电流为零，但环外不远处有一根载流导线。下列哪个说法正确？"
              },
              "choices": [
                "$\\oint\\vec{B}\\cdot d\\vec{l} = 0$ and $\\vec{B} = 0$ everywhere on the loop",
                "$\\oint\\vec{B}\\cdot d\\vec{l} = 0$ but $\\vec{B}$ need not be zero on the loop",
                "$\\oint\\vec{B}\\cdot d\\vec{l} \\ne 0$ because the wire is nearby",
                "$\\vec{B}$ is constant in magnitude on the loop"
              ],
              "answer": 1,
              "explanation": {
                "en": "Ampère’s law fixes only the line integral: with $I_{enc} = 0$, the integral vanishes, but the external wire still creates a nonzero field at points on the loop — the positive and negative contributions to the integral cancel. The first choice is the classic misreading of Ampère’s law as a statement about $\\vec{B}$ itself.",
                "zh": "安培定律只约束线积分：$I_{enc} = 0$ 时积分为零，但环外导线仍在环上各点产生非零磁场——只是积分的正负贡献相互抵消。第一个选项是把安培定律误读为对 $\\vec{B}$ 本身的断言的经典错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student measures the field $B$ at several distances $r$ from a long straight wire and plots $B$ versus $1/r$, obtaining a straight line through the origin with slope $4.0\\times10^{-6}\\,\\text{T·m}$. What is the current in the wire?",
                "zh": "一名学生在距长直导线不同距离 $r$ 处测量磁场 $B$，并作 $B$ 对 $1/r$ 的图像，得到一条过原点的直线，斜率为 $4.0\\times10^{-6}\\,\\text{T·m}$。导线中的电流是多少？"
              },
              "choices": [
                "$10\\,\\text{A}$",
                "$40\\,\\text{A}$",
                "$20\\,\\text{A}$",
                "$6.3\\,\\text{A}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $B = \\frac{\\mu_0 I}{2\\pi}\\cdot\\frac{1}{r}$, the slope of $B$ vs $1/r$ is $\\mu_0 I/(2\\pi) = (2\\times10^{-7})I$. So $I = (4.0\\times10^{-6})/(2\\times10^{-7}) = 20\\,\\text{A}$. Answer $10\\,\\text{A}$ comes from using $\\mu_0/\\pi$ instead of $\\mu_0/2\\pi$; linearizing data and interpreting slopes this way is a standard AP lab skill.",
                "zh": "因为 $B = \\frac{\\mu_0 I}{2\\pi}\\cdot\\frac{1}{r}$，$B$ 对 $1/r$ 图线的斜率为 $\\mu_0 I/(2\\pi) = (2\\times10^{-7})I$。所以 $I = (4.0\\times10^{-6})/(2\\times10^{-7}) = 20\\,\\text{A}$。误用 $\\mu_0/\\pi$ 代替 $\\mu_0/2\\pi$ 会得到 $10\\,\\text{A}$；这种数据线性化并解读斜率的方法是 AP 实验题的标准技能。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-induction",
      "title": "Unit 13: Electromagnetic Induction",
      "titleZh": "第十三单元：电磁感应",
      "lessons": [
        {
          "id": "faradays-law-lenz",
          "title": "Faraday's Law and Lenz's Law",
          "titleZh": "法拉第定律与楞次定律",
          "content": [
            {
              "type": "h2",
              "en": "Magnetic Flux",
              "zh": "磁通量"
            },
            {
              "type": "p",
              "en": "Electromagnetic induction is about producing an EMF from a changing magnetic field. The key quantity is the magnetic flux $\\Phi_B$ through a surface, which measures how much magnetic field pierces the loop. For a general field it is the surface integral of $\\vec{B}$ dotted with the area element $d\\vec{A}$.",
              "zh": "电磁感应研究的是如何用变化的磁场产生电动势（EMF）。核心量是穿过某曲面的磁通量 $\\Phi_B$，它衡量有多少磁场穿过回路。对一般的场，它是 $\\vec{B}$ 与面元 $d\\vec{A}$ 点乘后的曲面积分。"
            },
            {
              "type": "math",
              "tex": "\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}"
            },
            {
              "type": "p",
              "en": "When $\\vec{B}$ is uniform over a flat area $A$, this simplifies to $\\Phi_B = BA\\cos\\theta$, where $\\theta$ is the angle between $\\vec{B}$ and the area vector $\\vec{A}$ (which points perpendicular to the surface). Flux has SI units of the weber, $1\\,\\text{Wb} = 1\\,\\text{T}\\cdot\\text{m}^2$.",
              "zh": "当 $\\vec{B}$ 在平面面积 $A$ 上均匀时，简化为 $\\Phi_B = BA\\cos\\theta$，其中 $\\theta$ 是 $\\vec{B}$ 与面积矢量 $\\vec{A}$（垂直于曲面）之间的夹角。磁通量的国际单位是韦伯，$1\\,\\text{Wb} = 1\\,\\text{T}\\cdot\\text{m}^2$。"
            },
            {
              "type": "h2",
              "en": "Faraday's Law",
              "zh": "法拉第定律"
            },
            {
              "type": "p",
              "en": "Faraday's law states that the induced EMF around a loop equals the negative rate of change of the magnetic flux through the loop. If the loop has $N$ turns, each turn contributes, so we multiply by $N$.",
              "zh": "法拉第定律指出，回路中的感应电动势等于穿过回路的磁通量变化率的相反数。若回路有 $N$ 匝，每匝都有贡献，故乘以 $N$。"
            },
            {
              "type": "math",
              "tex": "\\varepsilon = -N\\frac{d\\Phi_B}{dt}"
            },
            {
              "type": "note",
              "en": "AP exam tip: The minus sign is Lenz's law. The induced current flows in the direction that opposes the CHANGE in flux — it creates its own magnetic field to fight the change. This is required by energy conservation: if the induced current reinforced the change, flux would grow without bound and you would get free energy. On the exam, use Lenz's law to get the DIRECTION, then use the magnitude $|\\varepsilon| = N|d\\Phi/dt|$ for the size.",
              "zh": "AP 考试提示：负号就是楞次定律。感应电流的方向总是阻碍磁通量的变化——它产生自己的磁场来对抗这一变化。这是能量守恒的要求：若感应电流助长变化，磁通量将无限增大，等于凭空得到能量。考试时先用楞次定律判断方向，再用大小 $|\\varepsilon| = N|d\\Phi/dt|$ 求数值。"
            },
            {
              "type": "h3",
              "en": "Three Ways to Change the Flux",
              "zh": "改变磁通量的三种方式"
            },
            {
              "type": "p",
              "en": "Since $\\Phi_B = BA\\cos\\theta$, any of the three factors can change to induce an EMF. Recognizing which one is changing tells you how to differentiate.",
              "zh": "由于 $\\Phi_B = BA\\cos\\theta$，三个因子中任一个变化都能产生电动势。判断哪个在变化，就知道该对什么求导。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Change $B$: a magnet moving toward the loop, or a nearby circuit whose current changes (a transformer).",
                  "zh": "改变 $B$：磁体靠近回路，或邻近电路的电流变化（变压器）。"
                },
                {
                  "en": "Change $A$: a stretching or shrinking loop, or a sliding rod that changes the enclosed area.",
                  "zh": "改变 $A$：拉伸或收缩的回路，或改变所围面积的滑动导杆。"
                },
                {
                  "en": "Change $\\theta$: a loop rotating in a fixed field — this is exactly how a generator works.",
                  "zh": "改变 $\\theta$：在固定磁场中转动的回路——这正是发电机的原理。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Motional EMF",
              "zh": "动生电动势"
            },
            {
              "type": "p",
              "en": "Consider a conducting rod of length $L$ moving with speed $v$ perpendicular to a uniform field $B$. Each free charge $q$ in the rod feels a magnetic force $\\vec{F} = q\\vec{v}\\times\\vec{B}$ of magnitude $qvB$ along the rod. Charges pile up until an electric field balances this force, producing a potential difference — this is the motional EMF.",
              "zh": "考虑一根长为 $L$ 的导杆，以速度 $v$ 垂直于均匀磁场 $B$ 运动。杆中每个自由电荷 $q$ 受到磁力 $\\vec{F} = q\\vec{v}\\times\\vec{B}$，大小为 $qvB$，沿杆方向。电荷积累直到电场平衡该力，产生电势差——这就是动生电动势。"
            },
            {
              "type": "p",
              "en": "The work per unit charge to move a charge across the rod gives $\\varepsilon = \\int (\\vec{v}\\times\\vec{B})\\cdot d\\vec{\\ell} = BLv$. We get the SAME answer from flux: if the rod slides on rails a distance $x$, the enclosed area is $Lx$, so $\\Phi = BLx$ and $\\varepsilon = d\\Phi/dt = BL\\,dx/dt = BLv$.",
              "zh": "把电荷移过杆所做的单位电荷功给出 $\\varepsilon = \\int (\\vec{v}\\times\\vec{B})\\cdot d\\vec{\\ell} = BLv$。用磁通量得到相同结果：若杆在导轨上滑过距离 $x$，所围面积为 $Lx$，故 $\\Phi = BLx$，且 $\\varepsilon = d\\Phi/dt = BL\\,dx/dt = BLv$。"
            },
            {
              "type": "math",
              "tex": "\\varepsilon = BLv"
            },
            {
              "type": "h3",
              "en": "Rod on Rails: Force and Power",
              "zh": "导轨上的杆：力与功率"
            },
            {
              "type": "p",
              "en": "If the rails are connected by a resistor $R$, the EMF drives a current $I = BLv/R$. This current in the field feels a force $F = BIL = B^2L^2v/R$ that opposes the motion (Lenz again). To keep the rod at constant velocity, an external agent must push with this force. The mechanical power delivered, $P = Fv = B^2L^2v^2/R$, exactly equals the electrical power dissipated $I^2R = (BLv)^2/R$ — energy is conserved.",
              "zh": "若导轨用电阻 $R$ 相连，电动势驱动电流 $I = BLv/R$。该电流在磁场中受到力 $F = BIL = B^2L^2v/R$，方向阻碍运动（又是楞次定律）。要让杆匀速运动，外力必须提供这个力。所输入的机械功率 $P = Fv = B^2L^2v^2/R$ 恰好等于电阻耗散的电功率 $I^2R = (BLv)^2/R$——能量守恒。"
            },
            {
              "type": "p",
              "en": "If instead the rod is released and allowed to fall or coast with no driving force, the opposing magnetic force acts like a velocity-dependent drag $F = -B^2L^2v/R$, and the rod approaches a terminal velocity where the driving force (e.g. gravity) balances this magnetic braking force.",
              "zh": "若不加驱动力而让杆下落或滑行，阻碍性的磁力就像与速度成正比的阻力 $F = -B^2L^2v/R$，杆趋于终极速度，此时驱动力（如重力）与磁制动力平衡。"
            },
            {
              "type": "h3",
              "en": "Eddy Currents and Generators",
              "zh": "涡电流与发电机"
            },
            {
              "type": "p",
              "en": "When a solid conductor moves through a changing flux, induced currents swirl in closed loops within the metal — eddy currents. They dissipate energy and oppose the motion, which is used in magnetic braking and induction cooktops. A generator is the rotating-loop case: spinning a coil at angular frequency $\\omega$ in a field gives $\\Phi = BA\\cos(\\omega t)$, so $\\varepsilon = BA\\omega\\sin(\\omega t)$ — a sinusoidal AC EMF.",
              "zh": "当实心导体在变化的磁通量中运动时，感应电流在金属内部沿闭合回路涡旋——即涡电流。它们耗散能量并阻碍运动，用于磁制动和电磁炉。发电机就是转动回路的情形：以角频率 $\\omega$ 转动线圈得 $\\Phi = BA\\cos(\\omega t)$，故 $\\varepsilon = BA\\omega\\sin(\\omega t)$——正弦交流电动势。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Shrinking loop",
                "zh": "例题 1：收缩的回路"
              },
              "problem": {
                "en": "A single circular loop lies in a uniform field $B = 0.50\\,\\text{T}$ pointing out of the plane of the loop. Its radius shrinks steadily so that its area decreases at a constant rate $dA/dt = -0.020\\,\\text{m}^2/\\text{s}$. Find the magnitude of the induced EMF and state the direction of the induced current.",
                "zh": "一个单匝圆形回路处于均匀磁场 $B = 0.50\\,\\text{T}$ 中，磁场垂直回路平面向外。其半径稳定收缩，使面积以恒定速率 $dA/dt = -0.020\\,\\text{m}^2/\\text{s}$ 减小。求感应电动势的大小并指出感应电流方向。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The field is perpendicular to the loop, so $\\Phi = BA$ with $B$ constant. Differentiate:",
                  "zh": "磁场垂直于回路，故 $\\Phi = BA$，其中 $B$ 为常数。求导："
                },
                {
                  "type": "math",
                  "tex": "|\\varepsilon| = \\left|B\\frac{dA}{dt}\\right| = (0.50)(0.020) = 0.010\\,\\text{V}"
                },
                {
                  "type": "p",
                  "en": "The outward flux is decreasing, so by Lenz's law the induced current flows to maintain outward flux — that is, counterclockwise as seen from the side the field points toward (out of the plane).",
                  "zh": "向外的磁通量在减小，故由楞次定律，感应电流的方向要维持向外的磁通量——即从磁场指向的一侧（平面外）看去为逆时针。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Rod reaching terminal velocity",
                "zh": "例题 2：达到终极速度的导杆"
              },
              "problem": {
                "en": "A rod of mass $m = 0.10\\,\\text{kg}$ and length $L = 0.50\\,\\text{m}$ slides without friction down two vertical rails separated by $L$, connected at the bottom by a resistor $R = 2.0\\,\\Omega$. A uniform horizontal field $B = 0.80\\,\\text{T}$ is perpendicular to the plane of the rails. Find the terminal speed. Use $g = 10\\,\\text{m/s}^2$.",
                "zh": "一根质量 $m = 0.10\\,\\text{kg}$、长 $L = 0.50\\,\\text{m}$ 的导杆沿相距 $L$ 的两条竖直导轨无摩擦下滑，导轨底端由电阻 $R = 2.0\\,\\Omega$ 相连。均匀水平磁场 $B = 0.80\\,\\text{T}$ 垂直于导轨平面。求终极速度。取 $g = 10\\,\\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At terminal velocity the net force is zero, so gravity equals the magnetic braking force $B^2L^2v/R$:",
                  "zh": "在终极速度时净力为零，故重力等于磁制动力 $B^2L^2v/R$："
                },
                {
                  "type": "math",
                  "tex": "mg = \\frac{B^2L^2 v_t}{R} \\;\\Rightarrow\\; v_t = \\frac{mgR}{B^2L^2}"
                },
                {
                  "type": "p",
                  "en": "Plug in: $v_t = \\dfrac{(0.10)(10)(2.0)}{(0.80)^2(0.50)^2} = \\dfrac{2.0}{0.16} = 12.5\\,\\text{m/s}$.",
                  "zh": "代入：$v_t = \\dfrac{(0.10)(10)(2.0)}{(0.80)^2(0.50)^2} = \\dfrac{2.0}{0.16} = 12.5\\,\\text{m/s}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A bar magnet is pushed north-pole-first toward a conducting ring. As it approaches, the induced current in the ring, viewed from the magnet, is:",
                "zh": "一根条形磁体以 N 极朝前推向一个导电圆环。当它靠近时，从磁体一侧看，环中的感应电流是："
              },
              "choices": [
                "Counterclockwise, to attract the magnet",
                "Clockwise, to repel the magnet",
                "Zero, since the ring has no battery",
                "Clockwise, to attract the magnet"
              ],
              "answer": 1,
              "explanation": {
                "en": "The approaching north pole increases flux toward the ring, so by Lenz's law the ring opposes the increase by presenting its own north pole to repel the magnet; viewed from the magnet this current is clockwise. A tempting wrong choice is 'zero' — but induction needs no battery, only changing flux.",
                "zh": "靠近的 N 极使指向环的磁通量增加，故由楞次定律，环以自身 N 极对抗增加，从而排斥磁体；从磁体看该电流为顺时针。诱人的错误选项是\"零\"——但感应无需电池，只需变化的磁通量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A square loop of side $a$ lies flat in a uniform field $B$ that is perpendicular to the loop. Which action induces NO EMF?",
                "zh": "一个边长为 $a$ 的方形回路平放在垂直于回路的均匀磁场 $B$ 中。哪个操作不产生电动势？"
              },
              "choices": [
                "Steadily increasing $B$",
                "Rotating the loop about an in-plane axis",
                "Translating the loop at constant velocity within the uniform field",
                "Shrinking the side length $a$"
              ],
              "answer": 2,
              "explanation": {
                "en": "In a UNIFORM field, sliding the loop sideways does not change the flux $BA\\cos\\theta$, so no EMF. Rotating changes $\\theta$, increasing $B$ changes $B$, and shrinking changes $A$ — all induce an EMF.",
                "zh": "在均匀磁场中，平移回路不改变磁通量 $BA\\cos\\theta$，故无电动势。转动改变 $\\theta$，增大 $B$ 改变 $B$，收缩改变 $A$——都会产生电动势。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rod slides on rails at speed $v$ through field $B$, driving current through resistor $R$. If $v$ is doubled, the power dissipated in $R$:",
                "zh": "一根杆以速度 $v$ 在导轨上穿过磁场 $B$ 运动，驱动电流通过电阻 $R$。若 $v$ 加倍，$R$ 上耗散的功率："
              },
              "choices": [
                "Halves",
                "Doubles",
                "Is unchanged",
                "Quadruples"
              ],
              "answer": 3,
              "explanation": {
                "en": "$P = (BLv)^2/R \\propto v^2$. Doubling $v$ multiplies power by four. A common mistake is answering \"doubles\" by forgetting the EMF itself scales with $v$ before squaring.",
                "zh": "$P = (BLv)^2/R \\propto v^2$。$v$ 加倍使功率变为四倍。常见错误是答\"加倍\"，忽略了电动势本身正比于 $v$，再平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A generator coil of $N$ turns and area $A$ spins at angular frequency $\\omega$ in field $B$. The peak EMF is:",
                "zh": "一个 $N$ 匝、面积为 $A$ 的发电机线圈在磁场 $B$ 中以角频率 $\\omega$ 转动。峰值电动势是："
              },
              "choices": [
                "$NBA\\omega$",
                "$NBA$",
                "$NBA\\omega^2$",
                "$NBA/\\omega$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\Phi = BA\\cos(\\omega t)$ per turn, so $\\varepsilon = -N\\,d\\Phi/dt = NBA\\omega\\sin(\\omega t)$, with peak value $NBA\\omega$. The bare $NBA$ omits the $d/dt$ factor of $\\omega$.",
                "zh": "每匝 $\\Phi = BA\\cos(\\omega t)$，故 $\\varepsilon = -N\\,d\\Phi/dt = NBA\\omega\\sin(\\omega t)$，峰值为 $NBA\\omega$。$NBA$ 漏掉了求导带来的因子 $\\omega$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A coil of $200$ turns encloses an area of $0.010\\,\\text{m}^2$. The field through it drops uniformly from $0.60\\,\\text{T}$ to $0.20\\,\\text{T}$ in $0.20\\,\\text{s}$. Find the magnitude of the induced EMF in volts. Give your answer to one decimal place.",
                "zh": "一个 $200$ 匝的线圈围出 $0.010\\,\\text{m}^2$ 的面积。穿过它的磁场在 $0.20\\,\\text{s}$ 内均匀地从 $0.60\\,\\text{T}$ 降到 $0.20\\,\\text{T}$。求感应电动势的大小（伏特），保留一位小数。"
              },
              "answer": "4.0",
              "accept": [
                "4",
                "4.0 V"
              ],
              "explanation": {
                "en": "$|\\varepsilon| = N A |dB/dt| = 200(0.010)\\dfrac{0.40}{0.20} = 200(0.010)(2.0) = 4.0\\,\\text{V}$.",
                "zh": "$|\\varepsilon| = N A |dB/dt| = 200(0.010)\\dfrac{0.40}{0.20} = 200(0.010)(2.0) = 4.0\\,\\text{V}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rod of length $0.40\\,\\text{m}$ moves at $3.0\\,\\text{m/s}$ perpendicular to a field $B = 0.50\\,\\text{T}$. Find the motional EMF in volts. Give your answer to one decimal place.",
                "zh": "一根长 $0.40\\,\\text{m}$ 的杆以 $3.0\\,\\text{m/s}$ 垂直于磁场 $B = 0.50\\,\\text{T}$ 运动。求动生电动势（伏特），保留一位小数。"
              },
              "answer": "0.6",
              "accept": [
                "0.60",
                "0.6 V"
              ],
              "explanation": {
                "en": "$\\varepsilon = BLv = (0.50)(0.40)(3.0) = 0.60\\,\\text{V}$.",
                "zh": "$\\varepsilon = BLv = (0.50)(0.40)(3.0) = 0.60\\,\\text{V}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The flux through a loop is $\\Phi(t) = 3t^2 - 2t$ (in Wb, $t$ in s). Find the magnitude of the induced EMF (in V) at $t = 2\\,\\text{s}$. Give an integer.",
                "zh": "穿过回路的磁通量为 $\\Phi(t) = 3t^2 - 2t$（单位 Wb，$t$ 以 s 计）。求 $t = 2\\,\\text{s}$ 时感应电动势的大小（V）。请填一个整数。"
              },
              "answer": "10",
              "accept": [
                "10 V",
                "-10",
                "10.0"
              ],
              "explanation": {
                "en": "$\\varepsilon = -d\\Phi/dt = -(6t - 2)$. At $t = 2$, $|\\varepsilon| = |6(2) - 2| = 10\\,\\text{V}$.",
                "zh": "$\\varepsilon = -d\\Phi/dt = -(6t - 2)$。当 $t = 2$，$|\\varepsilon| = |6(2) - 2| = 10\\,\\text{V}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To measure how induced EMF depends on speed, a student slides a rod on rails at several constant speeds and records the peak current through a fixed resistor. Which graph should be a straight line through the origin?",
                "zh": "为研究感应电动势如何依赖速度，一名学生让杆以几种恒定速度在导轨上滑动，记录通过固定电阻的峰值电流。哪个图应是过原点的直线？"
              },
              "choices": [
                "Current versus $1/\\text{speed}$",
                "Current versus (speed)$^2$",
                "Current versus speed",
                "Current versus time"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $I = BLv/R$, current is directly proportional to $v$, giving a line through the origin with slope $BL/R$. Power would go as $v^2$, but current itself is linear in $v$.",
                "zh": "由于 $I = BLv/R$，电流与 $v$ 成正比，给出过原点、斜率为 $BL/R$ 的直线。功率随 $v^2$ 变化，但电流本身与 $v$ 成线性关系。"
              }
            }
          ]
        },
        {
          "id": "inductance-lr-lc",
          "title": "Inductance, LR, and LC Circuits",
          "titleZh": "电感、LR 与 LC 电路",
          "content": [
            {
              "type": "h2",
              "en": "Self-Inductance",
              "zh": "自感"
            },
            {
              "type": "p",
              "en": "When the current in a coil changes, its own changing flux induces an EMF that opposes the change. The self-inductance $L$ is defined as the flux linkage per unit current, $L = N\\Phi_B / I$. Combining with Faraday's law gives the induced EMF across an inductor in terms of the rate of change of current.",
              "zh": "当线圈中的电流变化时，其自身变化的磁通量会产生一个阻碍该变化的电动势。自感 $L$ 定义为单位电流的磁链，$L = N\\Phi_B / I$。结合法拉第定律，可用电流的变化率表示电感两端的感应电动势。"
            },
            {
              "type": "math",
              "tex": "\\varepsilon_L = -L\\frac{dI}{dt}"
            },
            {
              "type": "p",
              "en": "Inductance has SI units of the henry, $1\\,\\text{H} = 1\\,\\text{V}\\cdot\\text{s}/\\text{A}$. For a solenoid of $n$ turns per meter, length $\\ell$, and cross-section $A$, the internal field is $B = \\mu_0 n I$, so the flux per turn is $\\mu_0 n I A$ and the total flux linkage is $N\\Phi = (n\\ell)(\\mu_0 n I A)$. Dividing by $I$:",
              "zh": "电感的国际单位是亨利，$1\\,\\text{H} = 1\\,\\text{V}\\cdot\\text{s}/\\text{A}$。对每米 $n$ 匝、长度 $\\ell$、截面积 $A$ 的螺线管，内部磁场为 $B = \\mu_0 n I$，故每匝磁通量为 $\\mu_0 n I A$，总磁链为 $N\\Phi = (n\\ell)(\\mu_0 n I A)$。除以 $I$："
            },
            {
              "type": "math",
              "tex": "L = \\mu_0 n^2 \\ell A = \\mu_0 n^2 (\\text{Volume})"
            },
            {
              "type": "note",
              "en": "AP exam tip: An inductor resists CHANGES in current, not current itself. Just after a switch is thrown ($t = 0$), the current cannot jump, so an inductor initially acts like an OPEN circuit (it carries whatever current flowed before, often zero). After a long time in DC steady state, $dI/dt = 0$ so $\\varepsilon_L = 0$ and the inductor acts like an ideal WIRE. A common mistake is treating an inductor like a resistor at these limits.",
              "zh": "AP 考试提示：电感抵抗电流的变化，而非电流本身。刚合上开关时（$t = 0$），电流不能突变，故电感起初像断路（保持之前的电流，常为零）。经过很长时间达到直流稳态后，$dI/dt = 0$，故 $\\varepsilon_L = 0$，电感像理想导线。常见错误是在这两个极限把电感当作电阻处理。"
            },
            {
              "type": "h2",
              "en": "The LR Circuit",
              "zh": "LR 电路"
            },
            {
              "type": "p",
              "en": "Connect a battery of EMF $V$, a resistor $R$, and an inductor $L$ in series and close the switch at $t = 0$. Kirchhoff's voltage law gives $V - IR - L\\,dI/dt = 0$, a first-order linear ODE for the current.",
              "zh": "把电动势为 $V$ 的电池、电阻 $R$ 和电感 $L$ 串联，在 $t = 0$ 合上开关。基尔霍夫电压定律给出 $V - IR - L\\,dI/dt = 0$，这是关于电流的一阶线性常微分方程。"
            },
            {
              "type": "math",
              "tex": "L\\frac{dI}{dt} + RI = V"
            },
            {
              "type": "p",
              "en": "Separating variables and integrating with $I(0) = 0$ gives a current that rises exponentially toward its final value $V/R$. The time constant is $\\tau = L/R$.",
              "zh": "分离变量并在 $I(0) = 0$ 下积分，得到电流按指数上升趋向终值 $V/R$。时间常数为 $\\tau = L/R$。"
            },
            {
              "type": "math",
              "tex": "I(t) = \\frac{V}{R}\\left(1 - e^{-tR/L}\\right)"
            },
            {
              "type": "p",
              "en": "At $t = 0$ the current is zero (inductor blocks the sudden change); as $t \\to \\infty$ it approaches $V/R$ (inductor becomes a wire). If the battery is then shorted out, the current decays as $I = I_0 e^{-tR/L}$.",
              "zh": "在 $t = 0$ 电流为零（电感阻止突变）；当 $t \\to \\infty$ 电流趋于 $V/R$（电感变成导线）。若随后将电池短路，电流按 $I = I_0 e^{-tR/L}$ 衰减。"
            },
            {
              "type": "h3",
              "en": "Energy Stored in an Inductor",
              "zh": "电感储存的能量"
            },
            {
              "type": "p",
              "en": "The power delivered to an inductor is $P = I\\varepsilon_L = LI\\,dI/dt$. Integrating the energy $\\int P\\,dt = \\int_0^I L I\\,dI$ gives the stored magnetic energy. Rewriting the solenoid result in terms of the field gives a general energy density stored in the magnetic field itself.",
              "zh": "输送给电感的功率为 $P = I\\varepsilon_L = LI\\,dI/dt$。对能量积分 $\\int P\\,dt = \\int_0^I L I\\,dI$ 得到储存的磁能。用磁场改写螺线管结果，可得储存于磁场本身的一般能量密度。"
            },
            {
              "type": "math",
              "tex": "U = \\tfrac{1}{2}LI^2, \\qquad u_B = \\frac{B^2}{2\\mu_0}"
            },
            {
              "type": "h2",
              "en": "The LC Circuit",
              "zh": "LC 电路"
            },
            {
              "type": "p",
              "en": "Connect a charged capacitor $C$ across an inductor $L$ with no resistance. Kirchhoff's law gives $Q/C + L\\,dI/dt = 0$. Using $I = -dQ/dt$ (the capacitor discharges), this becomes a simple harmonic oscillator equation for the charge.",
              "zh": "把充好电的电容 $C$ 接在无电阻的电感 $L$ 两端。基尔霍夫定律给出 $Q/C + L\\,dI/dt = 0$。利用 $I = -dQ/dt$（电容放电），它化为关于电荷的简谐振子方程。"
            },
            {
              "type": "math",
              "tex": "\\frac{d^2Q}{dt^2} = -\\frac{1}{LC}Q \\;\\Rightarrow\\; \\omega = \\frac{1}{\\sqrt{LC}}"
            },
            {
              "type": "p",
              "en": "The charge oscillates as $Q(t) = Q_0\\cos(\\omega t)$ at angular frequency $\\omega = 1/\\sqrt{LC}$. Energy sloshes back and forth between the capacitor (electric energy $Q^2/2C$) and the inductor (magnetic energy $LI^2/2$), with the total conserved. This is exactly analogous to a mass on a spring: $L$ plays the role of mass (inertia), $1/C$ plays the role of the spring constant, charge is like position, and current is like velocity.",
              "zh": "电荷以 $Q(t) = Q_0\\cos(\\omega t)$ 振荡，角频率 $\\omega = 1/\\sqrt{LC}$。能量在电容（电能 $Q^2/2C$）和电感（磁能 $LI^2/2$）之间来回流动，总量守恒。这与弹簧振子完全类比：$L$ 相当于质量（惯性），$1/C$ 相当于劲度系数，电荷类比位置，电流类比速度。"
            },
            {
              "type": "h3",
              "en": "Maxwell's Equations Overview",
              "zh": "麦克斯韦方程组概览"
            },
            {
              "type": "p",
              "en": "Faraday's law is one of the four Maxwell's equations that unify all of electricity and magnetism. In integral form they are: Gauss's law ($\\oint \\vec{E}\\cdot d\\vec{A} = Q_{enc}/\\varepsilon_0$), Gauss's law for magnetism ($\\oint \\vec{B}\\cdot d\\vec{A} = 0$, no magnetic monopoles), Faraday's law ($\\oint \\vec{E}\\cdot d\\vec{\\ell} = -d\\Phi_B/dt$), and the Ampere-Maxwell law ($\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I_{enc} + \\mu_0\\varepsilon_0\\,d\\Phi_E/dt$). Together they predict electromagnetic waves traveling at $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$.",
              "zh": "法拉第定律是统一全部电磁学的四个麦克斯韦方程之一。其积分形式为：高斯定律（$\\oint \\vec{E}\\cdot d\\vec{A} = Q_{enc}/\\varepsilon_0$）、磁场的高斯定律（$\\oint \\vec{B}\\cdot d\\vec{A} = 0$，无磁单极子）、法拉第定律（$\\oint \\vec{E}\\cdot d\\vec{\\ell} = -d\\Phi_B/dt$）和安培-麦克斯韦定律（$\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I_{enc} + \\mu_0\\varepsilon_0\\,d\\Phi_E/dt$）。它们共同预言了以 $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ 传播的电磁波。"
            },
            {
              "type": "h2",
              "en": "Worked Examples",
              "zh": "例题精讲"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: LR circuit growth",
                "zh": "例题 1：LR 电路的电流增长"
              },
              "problem": {
                "en": "A $12\\,\\text{V}$ battery is connected in series with $R = 4.0\\,\\Omega$ and $L = 2.0\\,\\text{H}$. The switch closes at $t = 0$. Find (a) the final steady current, (b) the time constant, and (c) the current at $t = \\tau$.",
                "zh": "一个 $12\\,\\text{V}$ 电池与 $R = 4.0\\,\\Omega$、$L = 2.0\\,\\text{H}$ 串联。开关在 $t = 0$ 合上。求 (a) 最终稳态电流，(b) 时间常数，(c) $t = \\tau$ 时的电流。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At steady state the inductor is a wire, so $I_\\infty = V/R = 12/4.0 = 3.0\\,\\text{A}$.",
                  "zh": "稳态时电感相当于导线，故 $I_\\infty = V/R = 12/4.0 = 3.0\\,\\text{A}$。"
                },
                {
                  "type": "math",
                  "tex": "\\tau = \\frac{L}{R} = \\frac{2.0}{4.0} = 0.50\\,\\text{s}"
                },
                {
                  "type": "p",
                  "en": "At $t = \\tau$, $I = I_\\infty(1 - e^{-1}) = 3.0(1 - 0.368) = 1.9\\,\\text{A}$.",
                  "zh": "当 $t = \\tau$，$I = I_\\infty(1 - e^{-1}) = 3.0(1 - 0.368) = 1.9\\,\\text{A}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: LC oscillation frequency and energy",
                "zh": "例题 2：LC 振荡的频率与能量"
              },
              "problem": {
                "en": "A capacitor $C = 2.0\\,\\mu\\text{F}$ charged to $Q_0 = 6.0\\,\\mu\\text{C}$ is connected across an inductor $L = 0.50\\,\\text{H}$. Find the angular frequency of oscillation and the maximum current.",
                "zh": "一个 $C = 2.0\\,\\mu\\text{F}$ 的电容充电到 $Q_0 = 6.0\\,\\mu\\text{C}$，接在电感 $L = 0.50\\,\\text{H}$ 两端。求振荡角频率和最大电流。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The angular frequency is",
                  "zh": "角频率为"
                },
                {
                  "type": "math",
                  "tex": "\\omega = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{(0.50)(2.0\\times10^{-6})}} = 1000\\,\\text{rad/s}"
                },
                {
                  "type": "p",
                  "en": "All the energy that starts in the capacitor ends up in the inductor when the current peaks, so $\\tfrac{1}{2}LI_{max}^2 = \\tfrac{Q_0^2}{2C}$. Alternatively $I_{max} = \\omega Q_0 = 1000(6.0\\times10^{-6}) = 6.0\\times10^{-3}\\,\\text{A} = 6.0\\,\\text{mA}$.",
                  "zh": "起初在电容中的全部能量在电流达到峰值时转入电感，故 $\\tfrac{1}{2}LI_{max}^2 = \\tfrac{Q_0^2}{2C}$。或者 $I_{max} = \\omega Q_0 = 1000(6.0\\times10^{-6}) = 6.0\\times10^{-3}\\,\\text{A} = 6.0\\,\\text{mA}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Immediately after the switch closes in a series LR circuit (no prior current), the inductor behaves like:",
                "zh": "在串联 LR 电路中（此前无电流）合上开关的瞬间，电感的行为像："
              },
              "choices": [
                "An ideal wire (zero voltage)",
                "An open circuit (no current flows yet)",
                "A resistor equal to $R$",
                "A charged capacitor"
              ],
              "answer": 1,
              "explanation": {
                "en": "The inductor opposes the sudden change in current, so at $t=0$ the current is still zero — it acts like an open circuit. A tempting error is picking \"ideal wire,\" which is actually the long-time steady-state behavior.",
                "zh": "电感抵抗电流的突变，故在 $t=0$ 电流仍为零——它像断路。诱人的错误是选\"理想导线\"，那其实是长时间后的稳态行为。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In an LC circuit, at the instant the capacitor is fully charged, the current is:",
                "zh": "在 LC 电路中，电容充满电的瞬间，电流是："
              },
              "choices": [
                "Half its maximum",
                "Maximum",
                "Zero, and it is about to grow",
                "Undefined"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the spring analogy, fully charged capacitor is like maximum displacement — all energy is electric, current (velocity) is zero. Picking \"maximum\" confuses charge extremes with current extremes; current peaks when the capacitor is empty.",
                "zh": "按弹簧类比，电容充满电如同最大位移——全部能量是电能，电流（速度）为零。选\"最大\"是把电荷极值和电流极值弄混；电流在电容放空时达到峰值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solenoid has inductance $L$. If the number of turns per unit length is doubled while keeping the length and cross-section fixed, the inductance becomes:",
                "zh": "一个螺线管的电感为 $L$。若在长度和截面积不变的情况下把每单位长度的匝数加倍，电感变为："
              },
              "choices": [
                "$L/2$",
                "$2L$",
                "$L$",
                "$4L$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Since $L = \\mu_0 n^2 \\ell A \\propto n^2$, doubling $n$ multiplies inductance by four. Answering \"$2L$\" forgets the square on $n$.",
                "zh": "由于 $L = \\mu_0 n^2 \\ell A \\propto n^2$，$n$ 加倍使电感变为四倍。答\"$2L$\"忽略了 $n$ 的平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The energy density stored in a magnetic field of magnitude $B$ is:",
                "zh": "大小为 $B$ 的磁场储存的能量密度是："
              },
              "choices": [
                "$\\dfrac{B^2}{2\\mu_0}$",
                "$\\dfrac{\\mu_0 B^2}{2}$",
                "$\\dfrac{B}{2\\mu_0}$",
                "$\\dfrac{1}{2}\\varepsilon_0 B^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Magnetic energy density is $u_B = B^2/(2\\mu_0)$. The choice with $\\varepsilon_0$ is the electric-field energy density, a common mix-up.",
                "zh": "磁场能量密度是 $u_B = B^2/(2\\mu_0)$。含 $\\varepsilon_0$ 的选项是电场能量密度，是常见的混淆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An LR circuit has $L = 3.0\\,\\text{H}$ and $R = 6.0\\,\\Omega$. Find the time constant in seconds. Give your answer to one decimal place.",
                "zh": "一个 LR 电路有 $L = 3.0\\,\\text{H}$、$R = 6.0\\,\\Omega$。求时间常数（秒），保留一位小数。"
              },
              "answer": "0.5",
              "accept": [
                "0.50",
                "0.5 s"
              ],
              "explanation": {
                "en": "$\\tau = L/R = 3.0/6.0 = 0.50\\,\\text{s}$.",
                "zh": "$\\tau = L/R = 3.0/6.0 = 0.50\\,\\text{s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An inductor $L = 4.0\\,\\text{H}$ carries a steady current of $2.0\\,\\text{A}$. How much energy (in J) is stored? Give an integer.",
                "zh": "一个电感 $L = 4.0\\,\\text{H}$ 通有 $2.0\\,\\text{A}$ 的稳恒电流。储存多少能量（J）？请填一个整数。"
              },
              "answer": "8",
              "accept": [
                "8 J",
                "8.0"
              ],
              "explanation": {
                "en": "$U = \\tfrac{1}{2}LI^2 = \\tfrac{1}{2}(4.0)(2.0)^2 = 8\\,\\text{J}$.",
                "zh": "$U = \\tfrac{1}{2}LI^2 = \\tfrac{1}{2}(4.0)(2.0)^2 = 8\\,\\text{J}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An LC circuit has $L = 0.20\\,\\text{H}$ and $C = 5.0\\,\\mu\\text{F}$ ($5.0\\times10^{-6}\\,\\text{F}$). Find the angular frequency of oscillation in rad/s. Give an integer.",
                "zh": "一个 LC 电路有 $L = 0.20\\,\\text{H}$、$C = 5.0\\,\\mu\\text{F}$（$5.0\\times10^{-6}\\,\\text{F}$）。求振荡角频率（rad/s）。请填一个整数。"
              },
              "answer": "1000",
              "accept": [
                "1000 rad/s",
                "1.0e3"
              ],
              "explanation": {
                "en": "$\\omega = 1/\\sqrt{LC} = 1/\\sqrt{(0.20)(5.0\\times10^{-6})} = 1/\\sqrt{1.0\\times10^{-6}} = 1000\\,\\text{rad/s}$.",
                "zh": "$\\omega = 1/\\sqrt{LC} = 1/\\sqrt{(0.20)(5.0\\times10^{-6})} = 1/\\sqrt{1.0\\times10^{-6}} = 1000\\,\\text{rad/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a series LR circuit driven by a battery, a student wants to measure the time constant experimentally. Which procedure best gives $\\tau$?",
                "zh": "在由电池驱动的串联 LR 电路中，一名学生想通过实验测量时间常数。哪种做法最能得到 $\\tau$？"
              },
              "choices": [
                "Measure the final current and divide by $R$",
                "Find the time for the current to reach its maximum",
                "Find the time for the current to reach $63\\%$ of its final value",
                "Measure the battery voltage and divide by $L$"
              ],
              "answer": 2,
              "explanation": {
                "en": "At $t = \\tau$, $I = I_\\infty(1 - e^{-1}) \\approx 0.63\\,I_\\infty$, so the time to reach $63\\%$ of the final current is exactly one time constant. The current only reaches its true maximum as $t \\to \\infty$, so that is not measurable directly.",
                "zh": "在 $t = \\tau$ 时，$I = I_\\infty(1 - e^{-1}) \\approx 0.63\\,I_\\infty$，故电流达到终值 $63\\%$ 所需的时间恰为一个时间常数。电流只有当 $t \\to \\infty$ 才真正达到最大值，无法直接测量。"
              }
            }
          ]
        }
      ]
    }
  ]
}
