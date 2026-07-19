export default {
  "id": "ap-physics-1",
  "title": "AP Physics 1",
  "titleZh": "AP 物理 1",
  "subject": "science",
  "level": "AP",
  "description": "The complete algebra-based AP Physics 1 course following the official College Board eight-unit framework: kinematics, dynamics, energy, momentum, rotation, oscillations, and fluids.",
  "descriptionZh": "完整的代数基础 AP 物理 1 课程，按照 College Board 官方八个单元的框架编排：运动学、动力学、能量、动量、转动、振动与流体。",
  "units": [
    {
      "id": "kinematics",
      "title": "Unit 1: Kinematics",
      "titleZh": "第一单元：运动学",
      "lessons": [
        {
          "id": "position-velocity-acceleration",
          "title": "Position, Velocity, and Acceleration",
          "titleZh": "位置、速度与加速度",
          "content": [
            {
              "type": "h2",
              "en": "Describing Motion",
              "zh": "描述运动"
            },
            {
              "type": "p",
              "en": "Kinematics is the study of how objects move without yet asking why they move. To describe motion we need three linked quantities: position, velocity, and acceleration. Each is a vector, meaning it has both a size (magnitude) and a direction. In one dimension we capture direction with a sign: positive or negative along a chosen axis.",
              "zh": "运动学研究物体如何运动，暂不追问运动的原因。描述运动需要三个相互关联的量：位置、速度和加速度。每一个都是矢量，即既有大小（模）又有方向。在一维情形中，我们用正负号表示方向：沿选定坐标轴取正或取负。"
            },
            {
              "type": "p",
              "en": "Position $x$ tells you where an object is relative to an origin. Displacement $\\Delta x = x_f - x_i$ is the change in position, a vector pointing from the start to the end. Distance, by contrast, is the total path length travelled and is always positive.",
              "zh": "位置 $x$ 表示物体相对于原点的位置。位移 $\\Delta x = x_f - x_i$ 是位置的变化，是一个从起点指向终点的矢量。而路程是所走路径的总长度，始终为正。"
            },
            {
              "type": "h3",
              "en": "Velocity",
              "zh": "速度"
            },
            {
              "type": "p",
              "en": "Average velocity is displacement divided by the time interval. It is a vector in the direction of the displacement. Average speed uses distance instead and is a scalar.",
              "zh": "平均速度是位移除以时间间隔，方向与位移相同，是矢量。平均速率用路程计算，是标量。"
            },
            {
              "type": "math",
              "tex": "\\vec{v}_{avg} = \\frac{\\Delta x}{\\Delta t}"
            },
            {
              "type": "p",
              "en": "Instantaneous velocity is the velocity at a single instant — the value the average velocity approaches as the time interval shrinks toward zero. On a position-versus-time graph it is the slope of the tangent line at that instant.",
              "zh": "瞬时速度是某一时刻的速度——当时间间隔趋于零时平均速度所趋近的值。在位置-时间图上，它是该时刻切线的斜率。"
            },
            {
              "type": "h3",
              "en": "Acceleration",
              "zh": "加速度"
            },
            {
              "type": "p",
              "en": "Acceleration is the rate of change of velocity. Whenever velocity changes — speeding up, slowing down, or changing direction — there is acceleration. A common misconception is that acceleration always means speeding up; a negative acceleration can mean slowing down or speeding up in the negative direction.",
              "zh": "加速度是速度的变化率。只要速度发生变化——加速、减速或改变方向——就存在加速度。一个常见误解是认为加速度总意味着加速；负加速度可能表示减速，也可能表示沿负方向加速。"
            },
            {
              "type": "math",
              "tex": "\\vec{a}_{avg} = \\frac{\\Delta v}{\\Delta t}"
            },
            {
              "type": "note",
              "en": "AP exam tip: an object slows down only when its velocity and acceleration point in opposite directions (opposite signs). It speeds up when they share the same sign. Do not judge from the sign of acceleration alone.",
              "zh": "AP 考试提示：只有当速度与加速度方向相反（符号相反）时物体才减速；符号相同时物体加速。不能仅凭加速度的符号判断。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Average velocity",
                "zh": "例题 1：平均速度"
              },
              "problem": {
                "en": "A runner moves from $x_i = 4\\ \\text{m}$ to $x_f = 24\\ \\text{m}$ in $5\\ \\text{s}$. Find the average velocity.",
                "zh": "一名跑步者在 $5\\ \\text{s}$ 内从 $x_i = 4\\ \\text{m}$ 移动到 $x_f = 24\\ \\text{m}$。求平均速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Displacement is $\\Delta x = 24 - 4 = 20\\ \\text{m}$.",
                  "zh": "位移为 $\\Delta x = 24 - 4 = 20\\ \\text{m}$。"
                },
                {
                  "type": "math",
                  "tex": "v_{avg} = \\frac{20\\ \\text{m}}{5\\ \\text{s}} = 4\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "The positive sign shows motion in the $+x$ direction.",
                  "zh": "正号表示沿 $+x$ 方向运动。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Acceleration from a change in velocity",
                "zh": "例题 2：由速度变化求加速度"
              },
              "problem": {
                "en": "A car's velocity changes from $30\\ \\text{m/s}$ to $12\\ \\text{m/s}$ in $6\\ \\text{s}$. Find the average acceleration.",
                "zh": "一辆汽车的速度在 $6\\ \\text{s}$ 内从 $30\\ \\text{m/s}$ 变为 $12\\ \\text{m/s}$。求平均加速度。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "a = \\frac{\\Delta v}{\\Delta t} = \\frac{12 - 30}{6} = \\frac{-18}{6} = -3\\ \\text{m/s}^2"
                },
                {
                  "type": "p",
                  "en": "The negative sign, opposite to the positive velocity, tells us the car is slowing down.",
                  "zh": "负号与正的速度方向相反，说明汽车正在减速。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which quantity is a vector?",
                "zh": "下列哪个量是矢量？"
              },
              "choices": [
                "Distance",
                "Speed",
                "Displacement",
                "Time"
              ],
              "answer": 2,
              "explanation": {
                "en": "Displacement has both magnitude and direction. Distance, speed, and time are scalars.",
                "zh": "位移既有大小又有方向。路程、速率和时间都是标量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On a position-time graph, instantaneous velocity is represented by:",
                "zh": "在位置-时间图上，瞬时速度由什么表示？"
              },
              "choices": [
                "The area under the curve",
                "The slope of the tangent line",
                "The y-intercept",
                "The curvature"
              ],
              "answer": 1,
              "explanation": {
                "en": "Velocity is the rate of change of position, which is the slope of the position-time graph at that instant.",
                "zh": "速度是位置的变化率，即位置-时间图在该时刻的斜率。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An object moves from $x = -3\\ \\text{m}$ to $x = 9\\ \\text{m}$. What is its displacement in meters?",
                "zh": "一个物体从 $x = -3\\ \\text{m}$ 移动到 $x = 9\\ \\text{m}$。位移是多少米？"
              },
              "answer": "12",
              "explanation": {
                "en": "$\\Delta x = x_f - x_i = 9 - (-3) = 12\\ \\text{m}$.",
                "zh": "$\\Delta x = x_f - x_i = 9 - (-3) = 12\\ \\text{m}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cyclist travels $150\\ \\text{m}$ in $30\\ \\text{s}$. What is the average speed in m/s?",
                "zh": "一名骑车者在 $30\\ \\text{s}$ 内行驶 $150\\ \\text{m}$。平均速率是多少 m/s？"
              },
              "answer": "5",
              "explanation": {
                "en": "Average speed $= 150/30 = 5\\ \\text{m/s}$.",
                "zh": "平均速率 $= 150/30 = 5\\ \\text{m/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball moving in the $+x$ direction has a negative acceleration. The ball is:",
                "zh": "一个沿 $+x$ 方向运动的球具有负加速度。该球："
              },
              "choices": [
                "Speeding up",
                "Slowing down",
                "Moving at constant velocity",
                "At rest"
              ],
              "answer": 1,
              "explanation": {
                "en": "Velocity is positive and acceleration is negative — opposite signs — so the ball slows down.",
                "zh": "速度为正、加速度为负——符号相反——所以球在减速。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A train speeds up from $8\\ \\text{m/s}$ to $20\\ \\text{m/s}$ in $4\\ \\text{s}$. Find the acceleration in m/s².",
                "zh": "一列火车在 $4\\ \\text{s}$ 内从 $8\\ \\text{m/s}$ 加速到 $20\\ \\text{m/s}$。求加速度，单位 m/s²。"
              },
              "answer": "3",
              "explanation": {
                "en": "$a = (20-8)/4 = 12/4 = 3\\ \\text{m/s}^2$.",
                "zh": "$a = (20-8)/4 = 12/4 = 3\\ \\text{m/s}^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An object has zero velocity but nonzero acceleration at an instant. This is possible for:",
                "zh": "某一时刻物体速度为零但加速度不为零。这种情况可能发生于："
              },
              "choices": [
                "An object at permanent rest",
                "A ball at the top of its vertical toss",
                "An object moving at constant velocity",
                "This is never possible"
              ],
              "answer": 1,
              "explanation": {
                "en": "At the peak of a toss the velocity is momentarily zero, but gravity still gives it a downward acceleration of $9.8\\ \\text{m/s}^2$.",
                "zh": "在抛掷最高点速度瞬间为零，但重力仍给它 $9.8\\ \\text{m/s}^2$ 的向下加速度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A car travels $40\\ \\text{m}$ east then $10\\ \\text{m}$ west. What is the magnitude of its displacement in meters?",
                "zh": "一辆汽车向东行驶 $40\\ \\text{m}$，再向西行驶 $10\\ \\text{m}$。位移的大小是多少米？"
              },
              "answer": "30",
              "explanation": {
                "en": "Taking east as positive: $\\Delta x = 40 - 10 = 30\\ \\text{m}$. (Distance travelled would be $50\\ \\text{m}$.)",
                "zh": "取向东为正：$\\Delta x = 40 - 10 = 30\\ \\text{m}$。（路程则为 $50\\ \\text{m}$。）"
              }
            }
          ]
        },
        {
          "id": "motion-graphs",
          "title": "Motion Graphs and Kinematic Equations",
          "titleZh": "运动图象与运动学方程",
          "content": [
            {
              "type": "h2",
              "en": "Reading Motion Graphs",
              "zh": "解读运动图象"
            },
            {
              "type": "p",
              "en": "Three graphs describe motion: position versus time ($x$-$t$), velocity versus time ($v$-$t$), and acceleration versus time ($a$-$t$). Moving between them is one of the most tested skills on the AP exam. The two key operations are slope and area.",
              "zh": "三种图象描述运动：位置-时间图（$x$-$t$）、速度-时间图（$v$-$t$）和加速度-时间图（$a$-$t$）。在这些图象之间转换是 AP 考试最常考的技能之一。两个关键操作是斜率和面积。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Slope of an $x$-$t$ graph = velocity.",
                  "zh": "$x$-$t$ 图的斜率 = 速度。"
                },
                {
                  "en": "Slope of a $v$-$t$ graph = acceleration.",
                  "zh": "$v$-$t$ 图的斜率 = 加速度。"
                },
                {
                  "en": "Area under a $v$-$t$ graph = displacement.",
                  "zh": "$v$-$t$ 图下的面积 = 位移。"
                },
                {
                  "en": "Area under an $a$-$t$ graph = change in velocity.",
                  "zh": "$a$-$t$ 图下的面积 = 速度变化。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: reading a value off the wrong graph. A horizontal line on a $v$-$t$ graph means constant velocity (zero acceleration), NOT zero velocity. Always check which quantity the vertical axis shows.",
              "zh": "常见错误：从错误的图象上读取数值。$v$-$t$ 图上的水平线表示匀速（加速度为零），而不是速度为零。务必确认纵轴表示的是哪个量。"
            },
            {
              "type": "h2",
              "en": "The Kinematic Equations",
              "zh": "运动学方程"
            },
            {
              "type": "p",
              "en": "When acceleration is constant, four equations relate the five quantities $x$, $v_0$, $v$, $a$, and $t$. Each equation is missing exactly one of these variables, so you pick the equation that avoids the quantity you neither know nor want.",
              "zh": "当加速度恒定时，四个方程将五个量 $x$、$v_0$、$v$、$a$、$t$ 联系起来。每个方程恰好缺少其中一个变量，因此选择那个避开你既不知道也不需要的量的方程。"
            },
            {
              "type": "math",
              "tex": "v = v_0 + a t"
            },
            {
              "type": "math",
              "tex": "\\Delta x = v_0 t + \\tfrac{1}{2} a t^2"
            },
            {
              "type": "math",
              "tex": "v^2 = v_0^2 + 2 a \\Delta x"
            },
            {
              "type": "math",
              "tex": "\\Delta x = \\tfrac{1}{2}(v_0 + v)\\, t"
            },
            {
              "type": "p",
              "en": "These only apply when acceleration is constant. A key strategy: list your known quantities first, identify the unknown, then choose the matching equation.",
              "zh": "这些方程仅在加速度恒定时适用。关键策略：先列出已知量，确定未知量，再选择匹配的方程。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Using $v^2 = v_0^2 + 2a\\Delta x$",
                "zh": "例题 1：使用 $v^2 = v_0^2 + 2a\\Delta x$"
              },
              "problem": {
                "en": "A car starting at $5\\ \\text{m/s}$ accelerates at $2\\ \\text{m/s}^2$ over $30\\ \\text{m}$. Find its final speed.",
                "zh": "一辆初速为 $5\\ \\text{m/s}$ 的汽车以 $2\\ \\text{m/s}^2$ 加速行驶 $30\\ \\text{m}$。求末速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "We know $v_0$, $a$, $\\Delta x$ and want $v$; time is missing, so use the third equation.",
                  "zh": "已知 $v_0$、$a$、$\\Delta x$，求 $v$；缺少时间，故用第三个方程。"
                },
                {
                  "type": "math",
                  "tex": "v^2 = 5^2 + 2(2)(30) = 25 + 120 = 145"
                },
                {
                  "type": "math",
                  "tex": "v = \\sqrt{145} \\approx 12.0\\ \\text{m/s}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Area under a $v$-$t$ graph",
                "zh": "例题 2：$v$-$t$ 图下的面积"
              },
              "problem": {
                "en": "An object moves at a constant $6\\ \\text{m/s}$ for $4\\ \\text{s}$, then decelerates uniformly to rest over the next $2\\ \\text{s}$. Find the total displacement.",
                "zh": "一个物体以恒定 $6\\ \\text{m/s}$ 运动 $4\\ \\text{s}$，随后在接下来的 $2\\ \\text{s}$ 内匀减速至静止。求总位移。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Displacement is the area under the $v$-$t$ graph: a rectangle plus a triangle.",
                  "zh": "位移是 $v$-$t$ 图下的面积：一个矩形加一个三角形。"
                },
                {
                  "type": "math",
                  "tex": "\\Delta x = (6)(4) + \\tfrac{1}{2}(6)(2) = 24 + 6 = 30\\ \\text{m}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The slope of a velocity-time graph gives:",
                "zh": "速度-时间图的斜率给出："
              },
              "choices": [
                "Displacement",
                "Position",
                "Acceleration",
                "Distance"
              ],
              "answer": 2,
              "explanation": {
                "en": "Acceleration is the rate of change of velocity, which is the slope of a $v$-$t$ graph.",
                "zh": "加速度是速度的变化率，即 $v$-$t$ 图的斜率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A horizontal (flat) line on a velocity-time graph indicates:",
                "zh": "速度-时间图上的水平线表示："
              },
              "choices": [
                "The object is at rest",
                "Constant velocity, zero acceleration",
                "Constant acceleration",
                "The object is speeding up"
              ],
              "answer": 1,
              "explanation": {
                "en": "A flat $v$-$t$ line means velocity is not changing, so acceleration is zero. The velocity itself may be nonzero.",
                "zh": "$v$-$t$ 图上的水平线表示速度不变，故加速度为零。速度本身可以不为零。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball starts from rest and accelerates at $4\\ \\text{m/s}^2$ for $3\\ \\text{s}$. What is its final velocity in m/s?",
                "zh": "一个球从静止开始以 $4\\ \\text{m/s}^2$ 加速 $3\\ \\text{s}$。末速度是多少 m/s？"
              },
              "answer": "12",
              "explanation": {
                "en": "$v = v_0 + at = 0 + 4(3) = 12\\ \\text{m/s}$.",
                "zh": "$v = v_0 + at = 0 + 4(3) = 12\\ \\text{m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Starting from rest with $a = 2\\ \\text{m/s}^2$, how far does an object travel in $5\\ \\text{s}$? Give meters.",
                "zh": "从静止开始，$a = 2\\ \\text{m/s}^2$，物体在 $5\\ \\text{s}$ 内前进多远？以米为单位。"
              },
              "answer": "25",
              "explanation": {
                "en": "$\\Delta x = v_0 t + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(2)(25) = 25\\ \\text{m}$.",
                "zh": "$\\Delta x = v_0 t + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(2)(25) = 25\\ \\text{m}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The area under an acceleration-time graph gives:",
                "zh": "加速度-时间图下的面积给出："
              },
              "choices": [
                "Displacement",
                "Change in velocity",
                "Final position",
                "Jerk"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $a = \\Delta v / \\Delta t$, the area (acceleration × time) equals the change in velocity.",
                "zh": "因为 $a = \\Delta v / \\Delta t$，面积（加速度×时间）等于速度的变化。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A car decelerates from $20\\ \\text{m/s}$ to $0$ over $50\\ \\text{m}$. Find the magnitude of its acceleration in m/s².",
                "zh": "一辆汽车在 $50\\ \\text{m}$ 内从 $20\\ \\text{m/s}$ 减速到 $0$。求加速度的大小，单位 m/s²。"
              },
              "answer": "4",
              "explanation": {
                "en": "$v^2 = v_0^2 + 2a\\Delta x \\Rightarrow 0 = 400 + 2a(50) \\Rightarrow a = -4\\ \\text{m/s}^2$; magnitude is $4$.",
                "zh": "$v^2 = v_0^2 + 2a\\Delta x \\Rightarrow 0 = 400 + 2a(50) \\Rightarrow a = -4\\ \\text{m/s}^2$；大小为 $4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On an $x$-$t$ graph, a curve that gets steeper over time indicates:",
                "zh": "在 $x$-$t$ 图上，一条随时间越来越陡的曲线表示："
              },
              "choices": [
                "Constant velocity",
                "Increasing speed",
                "The object is at rest",
                "Negative displacement"
              ],
              "answer": 1,
              "explanation": {
                "en": "A steeper slope means larger velocity, so an increasingly steep $x$-$t$ curve shows the object is speeding up.",
                "zh": "斜率越陡表示速度越大，故 $x$-$t$ 曲线越来越陡说明物体在加速。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An object moving at $8\\ \\text{m/s}$ has a constant velocity for $6\\ \\text{s}$. Find its displacement in meters.",
                "zh": "一个以 $8\\ \\text{m/s}$ 匀速运动的物体持续 $6\\ \\text{s}$。求其位移，单位米。"
              },
              "answer": "48",
              "explanation": {
                "en": "With zero acceleration, $\\Delta x = vt = 8(6) = 48\\ \\text{m}$ (the rectangular area under the $v$-$t$ graph).",
                "zh": "加速度为零时，$\\Delta x = vt = 8(6) = 48\\ \\text{m}$（$v$-$t$ 图下的矩形面积）。"
              }
            }
          ]
        },
        {
          "id": "projectile-motion",
          "title": "Free Fall and Projectile Motion",
          "titleZh": "自由落体与抛体运动",
          "content": [
            {
              "type": "h2",
              "en": "Free Fall",
              "zh": "自由落体"
            },
            {
              "type": "p",
              "en": "Near Earth's surface, gravity gives every freely falling object the same downward acceleration, $g = 9.8\\ \\text{m/s}^2$ (often rounded to $10\\ \\text{m/s}^2$ on the AP exam for quick estimates). \"Free fall\" means gravity is the only force acting — air resistance is neglected. The kinematic equations apply directly, with $a = -g$ if up is positive.",
              "zh": "在地球表面附近，重力使每个自由下落的物体获得相同的向下加速度 $g = 9.8\\ \\text{m/s}^2$（AP 考试常近似为 $10\\ \\text{m/s}^2$ 便于估算）。“自由落体”指重力是唯一作用力——忽略空气阻力。运动学方程可直接使用，若向上为正则 $a = -g$。"
            },
            {
              "type": "h2",
              "en": "Projectile Motion",
              "zh": "抛体运动"
            },
            {
              "type": "p",
              "en": "A projectile is any object launched and then moving under gravity alone. The central idea is that horizontal and vertical motion are independent. Gravity acts only vertically, so:",
              "zh": "抛体是指被抛出后仅在重力作用下运动的物体。核心思想是水平运动与竖直运动相互独立。重力只在竖直方向起作用，所以："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Horizontal: constant velocity, $a_x = 0$, so $x = v_{0x} t$.",
                  "zh": "水平方向：匀速，$a_x = 0$，故 $x = v_{0x} t$。"
                },
                {
                  "en": "Vertical: free fall, $a_y = -g$, so the vertical kinematic equations apply.",
                  "zh": "竖直方向：自由落体，$a_y = -g$，竖直方向的运动学方程成立。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The two motions share only one thing: time. Time is the bridge that links what happens horizontally to what happens vertically.",
              "zh": "两种运动只共享一个量：时间。时间是连接水平与竖直发生情况的桥梁。"
            },
            {
              "type": "note",
              "en": "AP exam tip: for a projectile launched horizontally, the initial vertical velocity is zero. The time to hit the ground depends ONLY on the launch height, not on how fast it was thrown horizontally. A bullet fired horizontally and one dropped from the same height land at the same time.",
              "zh": "AP 考试提示：水平抛出的抛体，初始竖直速度为零。落地时间仅取决于抛出高度，与水平抛出速度无关。从同一高度水平射出的子弹和自由下落的物体同时落地。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A dropped object",
                "zh": "例题 1：自由下落的物体"
              },
              "problem": {
                "en": "A rock is dropped from rest off a $45\\ \\text{m}$ cliff. Using $g = 10\\ \\text{m/s}^2$, how long until it lands?",
                "zh": "一块石头从 $45\\ \\text{m}$ 高的悬崖上由静止落下。取 $g = 10\\ \\text{m/s}^2$，多久后落地？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Vertical motion with $v_0 = 0$: use $\\Delta y = \\tfrac{1}{2} g t^2$.",
                  "zh": "竖直运动 $v_0 = 0$：用 $\\Delta y = \\tfrac{1}{2} g t^2$。"
                },
                {
                  "type": "math",
                  "tex": "45 = \\tfrac{1}{2}(10) t^2 \\Rightarrow t^2 = 9 \\Rightarrow t = 3\\ \\text{s}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Horizontal launch",
                "zh": "例题 2：水平抛射"
              },
              "problem": {
                "en": "A ball rolls off a table $1.25\\ \\text{m}$ high at $3\\ \\text{m/s}$. Using $g = 10\\ \\text{m/s}^2$, how far from the base does it land?",
                "zh": "一个球以 $3\\ \\text{m/s}$ 滚离 $1.25\\ \\text{m}$ 高的桌子。取 $g = 10\\ \\text{m/s}^2$，落地点离桌脚多远？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find the fall time from the vertical motion:",
                  "zh": "先由竖直运动求下落时间："
                },
                {
                  "type": "math",
                  "tex": "1.25 = \\tfrac{1}{2}(10)t^2 \\Rightarrow t^2 = 0.25 \\Rightarrow t = 0.5\\ \\text{s}"
                },
                {
                  "type": "p",
                  "en": "Then use the horizontal motion with this time:",
                  "zh": "再用此时间计算水平运动："
                },
                {
                  "type": "math",
                  "tex": "x = v_{0x} t = 3 \\times 0.5 = 1.5\\ \\text{m}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For a projectile, the horizontal acceleration (ignoring air resistance) is:",
                "zh": "对于抛体（忽略空气阻力），水平加速度是："
              },
              "choices": [
                "$9.8\\ \\text{m/s}^2$",
                "Zero",
                "Equal to the vertical acceleration",
                "Increasing"
              ],
              "answer": 1,
              "explanation": {
                "en": "Gravity acts only vertically, so the horizontal acceleration is zero and horizontal velocity is constant.",
                "zh": "重力只在竖直方向起作用，所以水平加速度为零，水平速度恒定。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball is thrown horizontally and another is dropped from the same height at the same moment. Which lands first?",
                "zh": "一个球被水平抛出，另一个在同一时刻从同一高度落下。哪个先落地？"
              },
              "choices": [
                "The thrown ball",
                "The dropped ball",
                "They land at the same time",
                "It depends on the mass"
              ],
              "answer": 2,
              "explanation": {
                "en": "Vertical motion is identical for both (same height, same $a_y = -g$, same $v_{0y} = 0$), so they land together.",
                "zh": "两者的竖直运动完全相同（相同高度、相同 $a_y = -g$、相同 $v_{0y} = 0$），所以同时落地。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An object is dropped from rest. Using $g = 10\\ \\text{m/s}^2$, what is its speed after $2\\ \\text{s}$? Give m/s.",
                "zh": "一个物体由静止落下。取 $g = 10\\ \\text{m/s}^2$，$2\\ \\text{s}$ 后速度是多少 m/s？"
              },
              "answer": "20",
              "explanation": {
                "en": "$v = gt = 10(2) = 20\\ \\text{m/s}$.",
                "zh": "$v = gt = 10(2) = 20\\ \\text{m/s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball is thrown horizontally at $4\\ \\text{m/s}$ and falls for $2\\ \\text{s}$. How far horizontally does it travel in meters?",
                "zh": "一个球以 $4\\ \\text{m/s}$ 水平抛出，下落 $2\\ \\text{s}$。水平方向前进多少米？"
              },
              "answer": "8",
              "explanation": {
                "en": "Horizontal motion is constant velocity: $x = v_{0x} t = 4(2) = 8\\ \\text{m}$.",
                "zh": "水平方向为匀速运动：$x = v_{0x} t = 4(2) = 8\\ \\text{m}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At the highest point of a ball thrown straight up, its velocity and acceleration are:",
                "zh": "竖直上抛的球在最高点，其速度和加速度分别为："
              },
              "choices": [
                "Both zero",
                "Velocity zero, acceleration $g$ downward",
                "Velocity $g$, acceleration zero",
                "Both equal to $g$"
              ],
              "answer": 1,
              "explanation": {
                "en": "At the peak the velocity is momentarily zero, but gravity still acts, giving acceleration $g$ downward.",
                "zh": "在最高点速度瞬间为零，但重力仍起作用，加速度为 $g$ 向下。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $g = 10\\ \\text{m/s}^2$, how long does it take an object dropped from rest to fall $20\\ \\text{m}$? Give seconds.",
                "zh": "取 $g = 10\\ \\text{m/s}^2$，一个由静止落下的物体下落 $20\\ \\text{m}$ 需要多长时间？以秒为单位。"
              },
              "answer": "2",
              "explanation": {
                "en": "$20 = \\tfrac{1}{2}(10)t^2 \\Rightarrow t^2 = 4 \\Rightarrow t = 2\\ \\text{s}$.",
                "zh": "$20 = \\tfrac{1}{2}(10)t^2 \\Rightarrow t^2 = 4 \\Rightarrow t = 2\\ \\text{s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A projectile is launched at an angle. Which quantity stays constant throughout the flight (ignoring air resistance)?",
                "zh": "一个抛体以某角度射出。整个飞行过程中（忽略空气阻力）哪个量保持不变？"
              },
              "choices": [
                "Vertical velocity",
                "Horizontal velocity",
                "Total speed",
                "Vertical position"
              ],
              "answer": 1,
              "explanation": {
                "en": "With no horizontal force, the horizontal velocity component is constant. The vertical velocity changes due to gravity.",
                "zh": "没有水平方向的力，水平速度分量恒定。竖直速度因重力而变化。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball thrown straight up at $30\\ \\text{m/s}$ reaches its peak when $v = 0$. Using $g = 10\\ \\text{m/s}^2$, how many seconds to reach the peak?",
                "zh": "一个以 $30\\ \\text{m/s}$ 竖直上抛的球在 $v = 0$ 时到达最高点。取 $g = 10\\ \\text{m/s}^2$，到达最高点需多少秒？"
              },
              "answer": "3",
              "explanation": {
                "en": "$v = v_0 - gt \\Rightarrow 0 = 30 - 10t \\Rightarrow t = 3\\ \\text{s}$.",
                "zh": "$v = v_0 - gt \\Rightarrow 0 = 30 - 10t \\Rightarrow t = 3\\ \\text{s}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "dynamics",
      "title": "Unit 2: Force and Translational Dynamics",
      "titleZh": "第二单元：力与平动动力学",
      "lessons": [
        {
          "id": "newtons-laws",
          "title": "Newton's Three Laws of Motion",
          "titleZh": "牛顿三大运动定律",
          "content": [
            {
              "type": "h2",
              "en": "Forces Cause Changes in Motion",
              "zh": "力引起运动的改变"
            },
            {
              "type": "p",
              "en": "Dynamics explains why objects move the way they do. The cause of any change in motion is a force — a push or pull, measured in newtons ($\\text{N}$). Newton's three laws connect forces to acceleration.",
              "zh": "动力学解释物体为何这样运动。任何运动改变的原因都是力——一种推或拉，以牛顿（$\\text{N}$）为单位。牛顿三定律将力与加速度联系起来。"
            },
            {
              "type": "h3",
              "en": "First Law: Inertia",
              "zh": "第一定律：惯性"
            },
            {
              "type": "p",
              "en": "An object at rest stays at rest, and an object in motion continues at constant velocity, unless acted on by a net force. This tendency to resist changes in motion is called inertia, and mass is its measure.",
              "zh": "物体保持静止，或保持匀速直线运动，除非受到净力作用。这种抵抗运动改变的倾向称为惯性，质量是其量度。"
            },
            {
              "type": "h3",
              "en": "Second Law: $F_{net} = ma$",
              "zh": "第二定律：$F_{net} = ma$"
            },
            {
              "type": "p",
              "en": "The net force on an object equals its mass times its acceleration. Acceleration points in the same direction as the net force and is inversely proportional to mass.",
              "zh": "物体所受净力等于质量乘以加速度。加速度方向与净力相同，且与质量成反比。"
            },
            {
              "type": "math",
              "tex": "\\vec{F}_{net} = m\\vec{a}"
            },
            {
              "type": "h3",
              "en": "Third Law: Action–Reaction",
              "zh": "第三定律：作用与反作用"
            },
            {
              "type": "p",
              "en": "For every force that object A exerts on object B, object B exerts an equal and opposite force on A. These two forces act on different objects, so they never cancel each other.",
              "zh": "物体 A 对物体 B 施加的每一个力，B 都对 A 施加一个大小相等、方向相反的力。这两个力作用在不同物体上，所以永远不会相互抵消。"
            },
            {
              "type": "note",
              "en": "Common mistake: thinking action–reaction pairs cancel. They act on different objects, so they never add to zero on a single object. Only forces on the SAME object can cancel to give zero net force.",
              "zh": "常见错误：认为作用-反作用力对会抵消。它们作用在不同物体上，所以对单个物体永远不会相加为零。只有作用在同一物体上的力才能抵消得到零净力。"
            },
            {
              "type": "h2",
              "en": "Mass versus Weight",
              "zh": "质量与重量"
            },
            {
              "type": "p",
              "en": "Mass ($m$, in kg) is the amount of matter and is the same everywhere. Weight ($W$, in N) is the gravitational force on an object, $W = mg$. Weight changes with location because $g$ changes.",
              "zh": "质量（$m$，单位 kg）是物质的多少，处处相同。重量（$W$，单位 N）是物体所受的引力，$W = mg$。重量随位置变化，因为 $g$ 会改变。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Second law",
                "zh": "例题 1：第二定律"
              },
              "problem": {
                "en": "A net force of $12\\ \\text{N}$ acts on a $3\\ \\text{kg}$ box. Find its acceleration.",
                "zh": "一个 $12\\ \\text{N}$ 的净力作用在 $3\\ \\text{kg}$ 的箱子上。求其加速度。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "a = \\frac{F_{net}}{m} = \\frac{12\\ \\text{N}}{3\\ \\text{kg}} = 4\\ \\text{m/s}^2"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Weight",
                "zh": "例题 2：重量"
              },
              "problem": {
                "en": "What is the weight of a $6\\ \\text{kg}$ object on Earth? Use $g = 9.8\\ \\text{m/s}^2$.",
                "zh": "一个 $6\\ \\text{kg}$ 的物体在地球上的重量是多少？取 $g = 9.8\\ \\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "W = mg = 6 \\times 9.8 = 58.8\\ \\text{N}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Newton's first law is also known as the law of:",
                "zh": "牛顿第一定律又称为什么定律？"
              },
              "choices": [
                "Acceleration",
                "Inertia",
                "Action–reaction",
                "Gravitation"
              ],
              "answer": 1,
              "explanation": {
                "en": "The first law describes inertia — the tendency of objects to resist changes in their motion.",
                "zh": "第一定律描述惯性——物体抵抗运动状态改变的倾向。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $5\\ \\text{kg}$ object accelerates at $3\\ \\text{m/s}^2$. What net force acts on it in newtons?",
                "zh": "一个 $5\\ \\text{kg}$ 的物体以 $3\\ \\text{m/s}^2$ 加速。作用在其上的净力是多少牛顿？"
              },
              "answer": "15",
              "explanation": {
                "en": "$F_{net} = ma = 5 \\times 3 = 15\\ \\text{N}$.",
                "zh": "$F_{net} = ma = 5 \\times 3 = 15\\ \\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A book rests on a table. The reaction force to the book's weight (Earth pulling the book) is:",
                "zh": "一本书放在桌上。书的重量（地球拉书）的反作用力是："
              },
              "choices": [
                "The table pushing up on the book",
                "The book pulling up on Earth",
                "The book pushing down on the table",
                "Gravity from the table"
              ],
              "answer": 1,
              "explanation": {
                "en": "The reaction to \"Earth pulls book down\" is \"book pulls Earth up\" — same type of force, on the other object. The table's normal force is a separate pair.",
                "zh": "“地球向下拉书”的反作用力是“书向上拉地球”——同类型的力，作用在另一物体上。桌子的法向力是另一对力。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "On the Moon, $g = 1.6\\ \\text{m/s}^2$. What is the weight of a $10\\ \\text{kg}$ mass on the Moon in newtons?",
                "zh": "月球上 $g = 1.6\\ \\text{m/s}^2$。一个 $10\\ \\text{kg}$ 的质量在月球上的重量是多少牛顿？"
              },
              "answer": "16",
              "explanation": {
                "en": "$W = mg = 10 \\times 1.6 = 16\\ \\text{N}$. The mass is unchanged, but the weight is much less than on Earth.",
                "zh": "$W = mg = 10 \\times 1.6 = 16\\ \\text{N}$。质量不变，但重量远小于地球上。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If the net force on an object is zero, the object must be:",
                "zh": "如果物体所受净力为零，则该物体一定："
              },
              "choices": [
                "At rest",
                "Moving with constant velocity",
                "Either at rest or moving at constant velocity",
                "Accelerating"
              ],
              "answer": 2,
              "explanation": {
                "en": "Zero net force means zero acceleration, so the object is in equilibrium: at rest OR moving at constant velocity.",
                "zh": "零净力意味着零加速度，故物体处于平衡：静止或匀速直线运动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A constant net force gives a $2\\ \\text{kg}$ cart an acceleration of $6\\ \\text{m/s}^2$. What acceleration would the same force give a $4\\ \\text{kg}$ cart, in m/s²?",
                "zh": "一个恒定净力使 $2\\ \\text{kg}$ 小车获得 $6\\ \\text{m/s}^2$ 的加速度。同样的力使 $4\\ \\text{kg}$ 小车获得的加速度是多少 m/s²？"
              },
              "answer": "3",
              "explanation": {
                "en": "Force $= 2 \\times 6 = 12\\ \\text{N}$. Then $a = 12/4 = 3\\ \\text{m/s}^2$. Doubling mass halves acceleration.",
                "zh": "力 $= 2 \\times 6 = 12\\ \\text{N}$。则 $a = 12/4 = 3\\ \\text{m/s}^2$。质量加倍，加速度减半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rocket pushes exhaust gases backward. The rocket moves forward because:",
                "zh": "火箭向后喷出废气。火箭向前运动是因为："
              },
              "choices": [
                "The gases push against the air",
                "The exhaust exerts a forward reaction force on the rocket",
                "Gravity pulls it forward",
                "The gases have no mass"
              ],
              "answer": 1,
              "explanation": {
                "en": "By Newton's third law, the rocket pushes gas back and the gas pushes the rocket forward with an equal and opposite force.",
                "zh": "根据牛顿第三定律，火箭向后推气体，气体以大小相等、方向相反的力向前推火箭。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $1000\\ \\text{kg}$ car accelerates from rest to $20\\ \\text{m/s}$ in $10\\ \\text{s}$. What net force is required, in newtons?",
                "zh": "一辆 $1000\\ \\text{kg}$ 的汽车在 $10\\ \\text{s}$ 内从静止加速到 $20\\ \\text{m/s}$。需要多少净力，单位牛顿？"
              },
              "answer": "2000",
              "explanation": {
                "en": "First $a = \\Delta v/\\Delta t = 20/10 = 2\\ \\text{m/s}^2$. Then $F = ma = 1000 \\times 2 = 2000\\ \\text{N}$.",
                "zh": "先求 $a = \\Delta v/\\Delta t = 20/10 = 2\\ \\text{m/s}^2$。再求 $F = ma = 1000 \\times 2 = 2000\\ \\text{N}$。"
              }
            }
          ]
        },
        {
          "id": "free-body-diagrams",
          "title": "Free-Body Diagrams and Applying Newton's Laws",
          "titleZh": "受力图与牛顿定律的应用",
          "content": [
            {
              "type": "h2",
              "en": "Drawing Free-Body Diagrams",
              "zh": "绘制受力图"
            },
            {
              "type": "p",
              "en": "A free-body diagram (FBD) isolates one object and shows every force acting ON it as an arrow, drawn from the object and pointing in the force's direction. Getting the FBD right is the single most important step in every dynamics problem.",
              "zh": "受力图（FBD）将一个物体单独隔离，把作用在它上面的每一个力用箭头表示，从物体出发指向力的方向。正确画出受力图是每个动力学问题中最重要的一步。"
            },
            {
              "type": "p",
              "en": "Common forces to include:",
              "zh": "常见需要包含的力："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Weight $\\vec{F}_g = m\\vec{g}$, always straight down.",
                  "zh": "重力 $\\vec{F}_g = m\\vec{g}$，始终竖直向下。"
                },
                {
                  "en": "Normal force $\\vec{F}_N$, perpendicular to the surface.",
                  "zh": "法向力 $\\vec{F}_N$，垂直于接触面。"
                },
                {
                  "en": "Tension $\\vec{F}_T$, along a rope or string, pulling away from the object.",
                  "zh": "张力 $\\vec{F}_T$，沿绳方向，背离物体拉。"
                },
                {
                  "en": "Friction $\\vec{F}_f$, parallel to the surface, opposing relative sliding.",
                  "zh": "摩擦力 $\\vec{F}_f$，平行于接触面，阻碍相对滑动。"
                },
                {
                  "en": "Applied force $\\vec{F}_{app}$, any push or pull.",
                  "zh": "外加力 $\\vec{F}_{app}$，任何推或拉。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Newton's Second Law in Components",
              "zh": "牛顿第二定律的分量形式"
            },
            {
              "type": "p",
              "en": "After drawing the FBD, apply $\\vec{F}_{net} = m\\vec{a}$ separately in the $x$ and $y$ directions. Choose axes to simplify the problem; on an incline it usually helps to tilt the axes so $x$ is along the slope.",
              "zh": "画好受力图后，在 $x$ 和 $y$ 方向分别应用 $\\vec{F}_{net} = m\\vec{a}$。选择坐标轴以简化问题；在斜面上通常把坐标轴倾斜，使 $x$ 沿斜面方向。"
            },
            {
              "type": "math",
              "tex": "\\Sigma F_x = m a_x \\qquad \\Sigma F_y = m a_y"
            },
            {
              "type": "note",
              "en": "AP exam tip: the normal force is NOT always equal to $mg$. It equals $mg$ only for an object on a flat surface with no vertical applied forces or acceleration. On an incline, $F_N = mg\\cos\\theta$. If you push down on the object, $F_N$ increases.",
              "zh": "AP 考试提示：法向力并不总等于 $mg$。只有当物体在水平面上且无竖直外力或竖直加速度时才等于 $mg$。在斜面上 $F_N = mg\\cos\\theta$。若你向下压物体，$F_N$ 会增大。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Elevator",
                "zh": "例题 1：电梯"
              },
              "problem": {
                "en": "A $70\\ \\text{kg}$ person stands in an elevator accelerating upward at $2\\ \\text{m/s}^2$. Find the normal force from the floor. Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $70\\ \\text{kg}$ 的人站在以 $2\\ \\text{m/s}^2$ 向上加速的电梯里。求地板的法向力。取 $g = 10\\ \\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Two vertical forces: $F_N$ up, weight down. Take up as positive:",
                  "zh": "两个竖直力：$F_N$ 向上，重力向下。取向上为正："
                },
                {
                  "type": "math",
                  "tex": "F_N - mg = ma \\Rightarrow F_N = m(g+a)"
                },
                {
                  "type": "math",
                  "tex": "F_N = 70(10+2) = 840\\ \\text{N}"
                },
                {
                  "type": "p",
                  "en": "The person feels heavier than their $700\\ \\text{N}$ weight because the floor must both support them and accelerate them.",
                  "zh": "此人感觉比 $700\\ \\text{N}$ 的重量更重，因为地板既要支撑他又要使他加速。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Frictionless incline",
                "zh": "例题 2：无摩擦斜面"
              },
              "problem": {
                "en": "A block slides down a frictionless $30^\\circ$ incline. Find its acceleration. Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个滑块沿无摩擦的 $30^\\circ$ 斜面下滑。求其加速度。取 $g = 10\\ \\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Along the incline, the only force component is $mg\\sin\\theta$. So:",
                  "zh": "沿斜面方向，唯一的力分量是 $mg\\sin\\theta$。所以："
                },
                {
                  "type": "math",
                  "tex": "ma = mg\\sin\\theta \\Rightarrow a = g\\sin\\theta = 10\\sin 30^\\circ = 5\\ \\text{m/s}^2"
                },
                {
                  "type": "p",
                  "en": "The mass cancels — all objects slide down a frictionless incline with the same acceleration.",
                  "zh": "质量约去——所有物体沿无摩擦斜面下滑的加速度相同。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A free-body diagram should show:",
                "zh": "受力图应显示："
              },
              "choices": [
                "All forces the object exerts on others",
                "Only the net force",
                "All forces acting on the object",
                "Velocity and acceleration vectors"
              ],
              "answer": 2,
              "explanation": {
                "en": "An FBD shows every force acting ON the chosen object, not forces it exerts on others.",
                "zh": "受力图显示作用在所选物体上的每一个力，而不是它对其他物体施加的力。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $4\\ \\text{kg}$ box sits on a flat floor with no vertical applied force. What is the normal force in newtons? Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $4\\ \\text{kg}$ 的箱子静置在水平地面上，无竖直外力。法向力是多少牛顿？取 $g = 10\\ \\text{m/s}^2$。"
              },
              "answer": "40",
              "explanation": {
                "en": "On a flat surface with no vertical acceleration, $F_N = mg = 4 \\times 10 = 40\\ \\text{N}$.",
                "zh": "在无竖直加速度的水平面上，$F_N = mg = 4 \\times 10 = 40\\ \\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A block on a frictionless incline of angle $\\theta$. The component of gravity along the incline is:",
                "zh": "一个滑块在倾角为 $\\theta$ 的无摩擦斜面上。重力沿斜面的分量是："
              },
              "choices": [
                "$mg$",
                "$mg\\cos\\theta$",
                "$mg\\sin\\theta$",
                "$mg\\tan\\theta$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The component of weight along the incline (causing sliding) is $mg\\sin\\theta$; the perpendicular component is $mg\\cos\\theta$.",
                "zh": "重力沿斜面的分量（导致下滑）为 $mg\\sin\\theta$；垂直分量为 $mg\\cos\\theta$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A block slides down a frictionless $30^\\circ$ incline. Find its acceleration in m/s². Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个滑块沿无摩擦的 $30^\\circ$ 斜面下滑。求其加速度，单位 m/s²。取 $g = 10\\ \\text{m/s}^2$。"
              },
              "answer": "5",
              "explanation": {
                "en": "$a = g\\sin\\theta = 10\\sin 30^\\circ = 10(0.5) = 5\\ \\text{m/s}^2$.",
                "zh": "$a = g\\sin\\theta = 10\\sin 30^\\circ = 10(0.5) = 5\\ \\text{m/s}^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A person stands in an elevator moving upward at constant velocity. The normal force on the person is:",
                "zh": "一个人站在匀速上升的电梯里。作用在此人上的法向力是："
              },
              "choices": [
                "Greater than their weight",
                "Equal to their weight",
                "Less than their weight",
                "Zero"
              ],
              "answer": 1,
              "explanation": {
                "en": "Constant velocity means zero acceleration, so net force is zero and $F_N = mg$, equal to the weight.",
                "zh": "匀速意味着加速度为零，故净力为零，$F_N = mg$，等于重量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $60\\ \\text{kg}$ person is in an elevator accelerating downward at $2\\ \\text{m/s}^2$. Find the normal force in newtons. Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $60\\ \\text{kg}$ 的人在以 $2\\ \\text{m/s}^2$ 向下加速的电梯里。求法向力，单位牛顿。取 $g = 10\\ \\text{m/s}^2$。"
              },
              "answer": "480",
              "explanation": {
                "en": "$mg - F_N = ma \\Rightarrow F_N = m(g-a) = 60(10-2) = 480\\ \\text{N}$. The person feels lighter.",
                "zh": "$mg - F_N = ma \\Rightarrow F_N = m(g-a) = 60(10-2) = 480\\ \\text{N}$。此人感觉更轻。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two forces act on a $2\\ \\text{kg}$ object: $10\\ \\text{N}$ right and $4\\ \\text{N}$ left. The acceleration is:",
                "zh": "两个力作用于 $2\\ \\text{kg}$ 物体：$10\\ \\text{N}$ 向右和 $4\\ \\text{N}$ 向左。加速度是："
              },
              "choices": [
                "$3\\ \\text{m/s}^2$ right",
                "$7\\ \\text{m/s}^2$ right",
                "$3\\ \\text{m/s}^2$ left",
                "$5\\ \\text{m/s}^2$ right"
              ],
              "answer": 0,
              "explanation": {
                "en": "Net force $= 10 - 4 = 6\\ \\text{N}$ right, so $a = 6/2 = 3\\ \\text{m/s}^2$ to the right.",
                "zh": "净力 $= 10 - 4 = 6\\ \\text{N}$ 向右，故 $a = 6/2 = 3\\ \\text{m/s}^2$ 向右。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $5\\ \\text{kg}$ block hangs from a rope and is at rest. What is the tension in the rope in newtons? Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $5\\ \\text{kg}$ 的滑块用绳悬挂且静止。绳中张力是多少牛顿？取 $g = 10\\ \\text{m/s}^2$。"
              },
              "answer": "50",
              "explanation": {
                "en": "At rest, tension balances weight: $F_T = mg = 5 \\times 10 = 50\\ \\text{N}$.",
                "zh": "静止时张力平衡重力：$F_T = mg = 5 \\times 10 = 50\\ \\text{N}$。"
              }
            }
          ]
        },
        {
          "id": "friction",
          "title": "Friction",
          "titleZh": "摩擦力",
          "content": [
            {
              "type": "h2",
              "en": "Static and Kinetic Friction",
              "zh": "静摩擦与动摩擦"
            },
            {
              "type": "p",
              "en": "Friction is a contact force that opposes relative sliding between two surfaces. It comes in two forms. Static friction acts when surfaces are not sliding, and it adjusts itself up to a maximum to prevent motion. Kinetic friction acts when surfaces are already sliding and has a fixed value.",
              "zh": "摩擦力是一种接触力，阻碍两表面之间的相对滑动。它有两种形式。静摩擦作用于表面尚未滑动时，会自我调整到某最大值以阻止运动。动摩擦作用于表面已经滑动时，具有固定值。"
            },
            {
              "type": "math",
              "tex": "f_s \\le \\mu_s F_N \\qquad f_k = \\mu_k F_N"
            },
            {
              "type": "p",
              "en": "Here $\\mu_s$ and $\\mu_k$ are the coefficients of static and kinetic friction, dimensionless numbers that depend on the pair of surfaces. Usually $\\mu_s > \\mu_k$, which is why it takes more force to start something sliding than to keep it sliding.",
              "zh": "这里 $\\mu_s$ 和 $\\mu_k$ 是静摩擦系数和动摩擦系数，是无量纲数，取决于两接触表面。通常 $\\mu_s > \\mu_k$，这就是为什么让物体开始滑动比维持滑动需要更大的力。"
            },
            {
              "type": "note",
              "en": "AP exam tip: static friction is a range, not a fixed value. The formula $f_s = \\mu_s F_N$ gives only the MAXIMUM static friction. If a smaller force is applied, static friction exactly matches it so the object stays at rest. Friction also does not depend on the contact area or on the sliding speed.",
              "zh": "AP 考试提示：静摩擦是一个范围，不是固定值。公式 $f_s = \\mu_s F_N$ 只给出最大静摩擦。若施加较小的力，静摩擦会恰好与之相等，使物体保持静止。摩擦力也不依赖于接触面积或滑动速度。"
            },
            {
              "type": "h2",
              "en": "Solving Friction Problems",
              "zh": "求解摩擦问题"
            },
            {
              "type": "p",
              "en": "The steps: draw the FBD, find the normal force (often from the vertical equation), compute friction from $f = \\mu F_N$, then apply Newton's second law along the direction of motion.",
              "zh": "步骤：画受力图，求法向力（常由竖直方向方程得到），用 $f = \\mu F_N$ 计算摩擦力，再沿运动方向应用牛顿第二定律。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Kinetic friction",
                "zh": "例题 1：动摩擦"
              },
              "problem": {
                "en": "A $10\\ \\text{kg}$ crate is pushed across a floor with $\\mu_k = 0.3$. Find the friction force. Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $10\\ \\text{kg}$ 的板条箱在 $\\mu_k = 0.3$ 的地面上被推动。求摩擦力。取 $g = 10\\ \\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "On a flat floor, $F_N = mg = 100\\ \\text{N}$.",
                  "zh": "在水平地面上，$F_N = mg = 100\\ \\text{N}$。"
                },
                {
                  "type": "math",
                  "tex": "f_k = \\mu_k F_N = 0.3 \\times 100 = 30\\ \\text{N}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Net force with friction",
                "zh": "例题 2：含摩擦的净力"
              },
              "problem": {
                "en": "The same $10\\ \\text{kg}$ crate is pushed with a horizontal force of $50\\ \\text{N}$. With $f_k = 30\\ \\text{N}$, find its acceleration.",
                "zh": "同一 $10\\ \\text{kg}$ 板条箱受到 $50\\ \\text{N}$ 的水平推力。已知 $f_k = 30\\ \\text{N}$，求其加速度。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "F_{net} = F_{app} - f_k = 50 - 30 = 20\\ \\text{N}"
                },
                {
                  "type": "math",
                  "tex": "a = \\frac{F_{net}}{m} = \\frac{20}{10} = 2\\ \\text{m/s}^2"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Kinetic friction on a sliding object depends on:",
                "zh": "滑动物体所受的动摩擦力取决于："
              },
              "choices": [
                "The contact area",
                "The sliding speed",
                "The normal force and $\\mu_k$",
                "The object's volume"
              ],
              "answer": 2,
              "explanation": {
                "en": "Kinetic friction $f_k = \\mu_k F_N$ depends only on the coefficient and the normal force, not area or speed.",
                "zh": "动摩擦 $f_k = \\mu_k F_N$ 只取决于系数和法向力，与面积或速度无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $20\\ \\text{kg}$ box on a flat floor has $\\mu_k = 0.4$. Find the kinetic friction force in newtons. Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $20\\ \\text{kg}$ 的箱子在水平地面上，$\\mu_k = 0.4$。求动摩擦力，单位牛顿。取 $g = 10\\ \\text{m/s}^2$。"
              },
              "answer": "80",
              "explanation": {
                "en": "$F_N = mg = 200\\ \\text{N}$, so $f_k = 0.4 \\times 200 = 80\\ \\text{N}$.",
                "zh": "$F_N = mg = 200\\ \\text{N}$，故 $f_k = 0.4 \\times 200 = 80\\ \\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why is it harder to start an object sliding than to keep it sliding?",
                "zh": "为什么让物体开始滑动比维持滑动更难？"
              },
              "choices": [
                "$\\mu_s > \\mu_k$ usually",
                "$\\mu_k > \\mu_s$ usually",
                "The normal force increases",
                "Kinetic friction is zero"
              ],
              "answer": 0,
              "explanation": {
                "en": "The maximum static friction usually exceeds kinetic friction because $\\mu_s > \\mu_k$.",
                "zh": "最大静摩擦通常大于动摩擦，因为 $\\mu_s > \\mu_k$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $5\\ \\text{kg}$ box has a maximum static friction with $\\mu_s = 0.5$. What minimum horizontal force is needed to start it moving, in newtons? Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $5\\ \\text{kg}$ 的箱子最大静摩擦系数 $\\mu_s = 0.5$。使其开始运动所需的最小水平力是多少牛顿？取 $g = 10\\ \\text{m/s}^2$。"
              },
              "answer": "25",
              "explanation": {
                "en": "Maximum static friction $= \\mu_s mg = 0.5 \\times 5 \\times 10 = 25\\ \\text{N}$; you must exceed this to start motion.",
                "zh": "最大静摩擦 $= \\mu_s mg = 0.5 \\times 5 \\times 10 = 25\\ \\text{N}$；必须超过此值才能开始运动。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A $3\\ \\text{kg}$ box sits still while pushed with $5\\ \\text{N}$, below the maximum static friction of $12\\ \\text{N}$. The actual friction force is:",
                "zh": "一个 $3\\ \\text{kg}$ 的箱子被 $5\\ \\text{N}$ 推着但保持静止，最大静摩擦为 $12\\ \\text{N}$。实际摩擦力是："
              },
              "choices": [
                "$12\\ \\text{N}$",
                "$5\\ \\text{N}$",
                "$0\\ \\text{N}$",
                "$7\\ \\text{N}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Static friction adjusts to match the applied force to keep the box still: $5\\ \\text{N}$, not the maximum.",
                "zh": "静摩擦会自我调整以匹配外加力使箱子静止：$5\\ \\text{N}$，而非最大值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $10\\ \\text{kg}$ box is pushed with $60\\ \\text{N}$ against kinetic friction of $20\\ \\text{N}$. Find its acceleration in m/s².",
                "zh": "一个 $10\\ \\text{kg}$ 的箱子受 $60\\ \\text{N}$ 推力，动摩擦为 $20\\ \\text{N}$。求其加速度，单位 m/s²。"
              },
              "answer": "4",
              "explanation": {
                "en": "$F_{net} = 60 - 20 = 40\\ \\text{N}$, so $a = 40/10 = 4\\ \\text{m/s}^2$.",
                "zh": "$F_{net} = 60 - 20 = 40\\ \\text{N}$，故 $a = 40/10 = 4\\ \\text{m/s}^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "You place a heavy book on top of a box, doubling the normal force. The maximum static friction:",
                "zh": "你在箱子上放一本重书，使法向力加倍。最大静摩擦："
              },
              "choices": [
                "Stays the same",
                "Doubles",
                "Halves",
                "Becomes zero"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $f_s^{max} = \\mu_s F_N$, doubling $F_N$ doubles the maximum static friction.",
                "zh": "由于 $f_s^{max} = \\mu_s F_N$，$F_N$ 加倍则最大静摩擦加倍。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $2\\ \\text{kg}$ block slides on a surface with $\\mu_k = 0.25$ and no other horizontal force. Find its deceleration in m/s². Use $g = 10\\ \\text{m/s}^2$.",
                "zh": "一个 $2\\ \\text{kg}$ 的滑块在 $\\mu_k = 0.25$ 的表面上滑动，无其他水平力。求其减速度，单位 m/s²。取 $g = 10\\ \\text{m/s}^2$。"
              },
              "answer": "2.5",
              "explanation": {
                "en": "$f_k = \\mu_k mg = 0.25 \\times 2 \\times 10 = 5\\ \\text{N}$; $a = f_k/m = 5/2 = 2.5\\ \\text{m/s}^2$. Note the mass cancels: $a = \\mu_k g$.",
                "zh": "$f_k = \\mu_k mg = 0.25 \\times 2 \\times 10 = 5\\ \\text{N}$；$a = f_k/m = 5/2 = 2.5\\ \\text{m/s}^2$。注意质量约去：$a = \\mu_k g$。"
              }
            }
          ]
        },
        {
          "id": "circular-motion-gravitation",
          "title": "Circular Motion and Gravitation",
          "titleZh": "圆周运动与引力",
          "content": [
            {
              "type": "h2",
              "en": "Uniform Circular Motion",
              "zh": "匀速圆周运动"
            },
            {
              "type": "p",
              "en": "An object in uniform circular motion travels around a circle at constant speed. Constant speed does not mean zero acceleration: the direction of the velocity vector is changing at every instant, and any change in velocity — magnitude or direction — is an acceleration. This acceleration always points toward the center of the circle and is called centripetal (\"center-seeking\") acceleration.",
              "zh": "做匀速圆周运动的物体以恒定速率沿圆周运动。速率恒定并不意味着加速度为零：速度矢量的方向每时每刻都在改变，而速度的任何变化——无论是大小还是方向——都是加速度。这个加速度始终指向圆心，称为向心（\"指向中心\"）加速度。"
            },
            {
              "type": "math",
              "tex": "a_c = \\frac{v^2}{r}"
            },
            {
              "type": "p",
              "en": "Here $v$ is the object's speed and $r$ is the radius of the circle. Because the acceleration is perpendicular to the velocity, it changes only the direction of motion, never the speed. Notice the strong dependence on speed: doubling $v$ quadruples $a_c$.",
              "zh": "其中 $v$ 是物体的速率，$r$ 是圆的半径。由于加速度垂直于速度，它只改变运动方向，不改变速率。注意加速度对速率的强烈依赖：$v$ 加倍会使 $a_c$ 变为四倍。"
            },
            {
              "type": "h3",
              "en": "Centripetal Force Is Not a New Force",
              "zh": "向心力不是一种新的力"
            },
            {
              "type": "p",
              "en": "By Newton's second law, an inward acceleration requires an inward net force of magnitude $F_{net} = ma_c = mv^2/r$. This net force is nicknamed the \"centripetal force,\" but it is not a separate interaction like gravity or tension. It is simply whatever real force (or combination of forces) happens to point toward the center. On a free-body diagram you should never draw an arrow labeled $F_c$ — draw only the real forces, then set their inward components equal to $mv^2/r$.",
              "zh": "根据牛顿第二定律，指向圆心的加速度需要一个指向圆心、大小为 $F_{net} = ma_c = mv^2/r$ 的合力。这个合力被称为\"向心力\"，但它并不是像重力或张力那样的独立相互作用。它只是恰好指向圆心的真实力（或几个力的组合）。在受力图上绝不要画一个标着 $F_c$ 的箭头——只画真实的力，然后令它们指向圆心的分量之和等于 $mv^2/r$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Ball whirled on a string: tension supplies the centripetal force.",
                  "zh": "用细绳甩动的小球：绳的张力提供向心力。"
                },
                {
                  "en": "Car rounding a flat curve: static friction from the road supplies it.",
                  "zh": "汽车在水平弯道转弯：路面的静摩擦力提供向心力。"
                },
                {
                  "en": "Satellite orbiting a planet: gravity supplies it.",
                  "zh": "绕行星运行的卫星：引力提供向心力。"
                },
                {
                  "en": "Rider pressed against the wall of a spinning cylinder: the normal force supplies it.",
                  "zh": "被压在旋转圆筒内壁上的乘客：法向力（支持力）提供向心力。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: if the force supplying the centripetal force disappears (the string breaks, the road turns icy), the object does NOT fly outward along the radius. It moves off in a straight line tangent to the circle, by Newton's first law. \"Centrifugal force\" is not a real force in an inertial frame.",
              "zh": "AP 考试提示：如果提供向心力的力消失了（绳断了、路面结冰），物体不会沿半径向外飞出，而是根据牛顿第一定律沿圆周的切线方向做直线运动。在惯性参考系中，\"离心力\"不是真实存在的力。"
            },
            {
              "type": "h3",
              "en": "Vertical Circles and Apparent Weight",
              "zh": "竖直圆周运动与视重"
            },
            {
              "type": "p",
              "en": "In a vertical circle the net inward force still equals $mv^2/r$, but gravity now helps or hinders depending on position. For a rider inside a loop of radius $r$: at the top, both the normal force $N$ and gravity point downward (toward the center), so $N + mg = mv^2/r$. At the bottom, $N$ points up (toward the center) while gravity points down, so $N - mg = mv^2/r$.",
              "zh": "在竖直圆周运动中，指向圆心的合力仍等于 $mv^2/r$，但重力的作用取决于位置。对于在半径为 $r$ 的圆环内侧运动的乘客：在最高点，法向力 $N$ 和重力都指向下方（指向圆心），故 $N + mg = mv^2/r$；在最低点，$N$ 指向上方（指向圆心）而重力向下，故 $N - mg = mv^2/r$。"
            },
            {
              "type": "math",
              "tex": "\\text{top: } N = \\frac{mv^2}{r} - mg \\qquad \\text{bottom: } N = \\frac{mv^2}{r} + mg"
            },
            {
              "type": "p",
              "en": "The normal force is what you feel as your apparent weight. At the bottom of the loop you feel heavier than $mg$; at the top you feel lighter. The minimum speed to maintain contact at the top occurs when $N = 0$, giving $v_{min} = \\sqrt{gr}$ — at that speed gravity alone supplies exactly the required centripetal force.",
              "zh": "法向力就是你感受到的视重。在圆环最低点你感觉比 $mg$ 更重；在最高点感觉更轻。在最高点保持接触的最小速率出现在 $N = 0$ 时，即 $v_{min} = \\sqrt{gr}$——此时仅靠重力恰好提供所需的向心力。"
            },
            {
              "type": "h2",
              "en": "Newton's Law of Universal Gravitation",
              "zh": "牛顿万有引力定律"
            },
            {
              "type": "p",
              "en": "Every pair of masses attracts with a force along the line joining their centers. The force is proportional to each mass and inversely proportional to the square of the center-to-center distance $r$.",
              "zh": "任何两个质量之间都存在沿两者中心连线方向的引力。引力与每个质量成正比，与中心间距 $r$ 的平方成反比。"
            },
            {
              "type": "math",
              "tex": "F_g = \\frac{G m_1 m_2}{r^2}, \\qquad G = 6.67 \\times 10^{-11}\\ \\text{N·m}^2/\\text{kg}^2"
            },
            {
              "type": "note",
              "en": "Common mistake: $r$ is the distance between the CENTERS of the two objects, not the surface-to-surface gap or the altitude above the surface. For a satellite at altitude $h$ above a planet of radius $R$, use $r = R + h$.",
              "zh": "常见错误：$r$ 是两物体中心之间的距离，不是表面之间的间隙，也不是离地面的高度。对于在半径为 $R$ 的行星上方高度 $h$ 处的卫星，应取 $r = R + h$。"
            },
            {
              "type": "h3",
              "en": "Gravitational Field Strength and Orbits",
              "zh": "引力场强度与轨道运动"
            },
            {
              "type": "p",
              "en": "Dividing the gravitational force on a test mass $m$ by $m$ gives the gravitational field strength $g$ — the acceleration any object would have in free fall at that location. Near Earth's surface this is the familiar $9.8\\ \\text{m/s}^2$; it weakens as $1/r^2$ farther out. At a distance of $2R_E$ from Earth's center, $g$ is only one quarter of its surface value.",
              "zh": "将作用在检验质量 $m$ 上的引力除以 $m$，就得到引力场强度 $g$——即物体在该处自由下落时的加速度。在地球表面附近它就是熟悉的 $9.8\\ \\text{m/s}^2$；离地心越远，它按 $1/r^2$ 减弱。在距地心 $2R_E$ 处，$g$ 只有表面值的四分之一。"
            },
            {
              "type": "math",
              "tex": "g = \\frac{F_g}{m} = \\frac{GM}{r^2}"
            },
            {
              "type": "p",
              "en": "For a satellite in a circular orbit, gravity is the only force and it supplies the entire centripetal force. Setting $GMm/r^2 = mv^2/r$ gives the orbital speed $v = \\sqrt{GM/r}$. Two important consequences: the orbital speed does not depend on the satellite's own mass, and larger orbits are slower.",
              "zh": "对于做圆轨道运动的卫星，引力是唯一的力，它提供全部向心力。令 $GMm/r^2 = mv^2/r$，得轨道速率 $v = \\sqrt{GM/r}$。两个重要结论：轨道速率与卫星自身质量无关；轨道半径越大，速率越小。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Tension supplies the centripetal force",
                "zh": "例题 1：张力提供向心力"
              },
              "problem": {
                "en": "A $0.5\\ \\text{kg}$ ball on a string moves in a horizontal circle of radius $2.0\\ \\text{m}$ on a frictionless table at a constant $4.0\\ \\text{m/s}$. Find the centripetal acceleration and the tension in the string.",
                "zh": "一个 $0.5\\ \\text{kg}$ 的小球系在细绳上，在无摩擦的桌面上以恒定速率 $4.0\\ \\text{m/s}$ 做半径为 $2.0\\ \\text{m}$ 的水平圆周运动。求向心加速度和绳中张力。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "a_c = \\frac{v^2}{r} = \\frac{(4.0)^2}{2.0} = 8.0\\ \\text{m/s}^2"
                },
                {
                  "type": "p",
                  "en": "The only horizontal force is the tension, so it must supply the entire net inward force.",
                  "zh": "水平方向唯一的力是张力，因此它必须提供全部指向圆心的合力。"
                },
                {
                  "type": "math",
                  "tex": "T = ma_c = (0.5)(8.0) = 4.0\\ \\text{N}"
                },
                {
                  "type": "p",
                  "en": "Note that we never drew a separate \"centripetal force\" — the tension IS the centripetal force here.",
                  "zh": "注意我们并没有画一个单独的\"向心力\"——在这里张力本身就是向心力。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Minimum speed at the top of a loop",
                "zh": "例题 2：圆环最高点的最小速率"
              },
              "problem": {
                "en": "A roller-coaster car goes around the inside of a vertical loop of radius $2.5\\ \\text{m}$. Using $g = 10\\ \\text{m/s}^2$, find the minimum speed at the top of the loop for the car to maintain contact with the track.",
                "zh": "一辆过山车沿半径为 $2.5\\ \\text{m}$ 的竖直圆环内侧运动。取 $g = 10\\ \\text{m/s}^2$，求过山车在最高点保持与轨道接触的最小速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At the top, both gravity and the normal force point toward the center: $N + mg = mv^2/r$. The minimum speed occurs when the track pushes with zero force, $N = 0$.",
                  "zh": "在最高点，重力和法向力都指向圆心：$N + mg = mv^2/r$。当轨道的作用力为零（$N = 0$）时速率最小。"
                },
                {
                  "type": "math",
                  "tex": "mg = \\frac{mv_{min}^2}{r} \\implies v_{min} = \\sqrt{gr} = \\sqrt{(10)(2.5)} = 5.0\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "The mass cancels — the minimum speed is the same for any car. Below this speed, gravity exceeds the required centripetal force and the car leaves the track.",
                  "zh": "质量被约去——最小速率与车的质量无关。低于此速率时，重力大于所需的向心力，车会脱离轨道。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A car moves at constant speed around a circular track. Its acceleration is:",
                "zh": "一辆汽车以恒定速率沿圆形跑道行驶。它的加速度："
              },
              "choices": [
                "Zero, because the speed is constant",
                "Directed toward the center of the circle",
                "Directed away from the center of the circle",
                "Directed along the velocity, tangent to the circle"
              ],
              "answer": 1,
              "explanation": {
                "en": "The velocity direction changes continuously, so the car accelerates even at constant speed. The acceleration $v^2/r$ points toward the center. \"Zero because speed is constant\" is the classic trap — acceleration is any change in the velocity vector, including direction.",
                "zh": "速度方向在不断变化，所以即使速率恒定汽车也有加速度。加速度 $v^2/r$ 指向圆心。\"速率恒定所以加速度为零\"是经典陷阱——速度矢量的任何变化（包括方向）都是加速度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An object moves in a circle of radius $3\\ \\text{m}$ at a constant speed of $6\\ \\text{m/s}$. What is its centripetal acceleration in m/s²? Give an integer.",
                "zh": "一个物体以恒定速率 $6\\ \\text{m/s}$ 沿半径为 $3\\ \\text{m}$ 的圆周运动。它的向心加速度是多少 m/s²？请填一个整数。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "$a_c = v^2/r = 36/3 = 12\\ \\text{m/s}^2$, directed toward the center.",
                "zh": "$a_c = v^2/r = 36/3 = 12\\ \\text{m/s}^2$，方向指向圆心。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A car rounds a flat (unbanked) curve at constant speed. Which force supplies the centripetal force?",
                "zh": "一辆汽车以恒定速率通过水平（无倾斜）弯道。哪个力提供向心力？"
              },
              "choices": [
                "The normal force from the road",
                "The car's engine force",
                "Static friction between the tires and the road",
                "A centripetal force exerted by the curve"
              ],
              "answer": 2,
              "explanation": {
                "en": "On a flat curve, the normal force and gravity are vertical and cancel; the only horizontal force is static friction, which points toward the center. Choice D is tempting but wrong: \"centripetal force\" is a role played by real forces, not a separate force.",
                "zh": "在水平弯道上，法向力和重力都是竖直方向且相互抵消；唯一的水平力是指向圆心的静摩擦力。选项 D 有迷惑性但是错误的：\"向心力\"是真实力所扮演的角色，不是一种独立的力。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two objects attract each other gravitationally. If both masses are doubled AND the distance between their centers is doubled, the gravitational force becomes:",
                "zh": "两个物体相互吸引。如果两个质量都加倍，且中心间距也加倍，引力将变为原来的："
              },
              "choices": [
                "$4$ times as large",
                "$2$ times as large",
                "The same as before",
                "$\\frac{1}{4}$ as large"
              ],
              "answer": 2,
              "explanation": {
                "en": "Doubling each mass multiplies $F$ by $2 \\times 2 = 4$; doubling $r$ divides it by $2^2 = 4$. The factors cancel, so the force is unchanged. Answer A is tempting if you forget the inverse-square dependence on distance.",
                "zh": "两个质量各加倍使 $F$ 乘以 $2 \\times 2 = 4$；$r$ 加倍使其除以 $2^2 = 4$。两个因子抵消，引力不变。若忘记与距离的平方反比关系，就容易误选 A。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball is whirled counterclockwise in a horizontal circle on a string. At the instant the string breaks, the ball will:",
                "zh": "一个小球系在细绳上沿水平圆周逆时针旋转。绳子断开的瞬间，小球将："
              },
              "choices": [
                "Fly radially outward, away from the center",
                "Move in a straight line tangent to the circle",
                "Continue along the circular path",
                "Spiral gradually outward"
              ],
              "answer": 1,
              "explanation": {
                "en": "With no net force, Newton's first law says the ball keeps its instantaneous velocity, which is tangent to the circle. \"Radially outward\" is the tempting answer because riders feel \"thrown outward,\" but that sensation is just inertia — no outward force exists.",
                "zh": "合力消失后，根据牛顿第一定律，小球保持其瞬时速度，方向沿圆周切线。\"沿半径向外飞出\"很有迷惑性，因为人会感觉被\"甩出去\"，但那只是惯性的表现——并不存在向外的力。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $2\\ \\text{kg}$ ball swings through the lowest point of a vertical circle of radius $2\\ \\text{m}$ at $4\\ \\text{m/s}$. Using $g = 10\\ \\text{m/s}^2$, find the tension in the rope at that point, in newtons. Give an integer.",
                "zh": "一个 $2\\ \\text{kg}$ 的小球摆过半径为 $2\\ \\text{m}$ 的竖直圆周最低点时速率为 $4\\ \\text{m/s}$。取 $g = 10\\ \\text{m/s}^2$，求该点绳中张力，单位牛顿。请填一个整数。"
              },
              "answer": "36",
              "accept": [
                "36.0"
              ],
              "explanation": {
                "en": "At the bottom, $T - mg = mv^2/r$, so $T = mg + mv^2/r = (2)(10) + (2)(16)/2 = 20 + 16 = 36\\ \\text{N}$. The ball's apparent weight exceeds its true weight because the net force must point upward, toward the center.",
                "zh": "在最低点，$T - mg = mv^2/r$，故 $T = mg + mv^2/r = (2)(10) + (2)(16)/2 = 20 + 16 = 36\\ \\text{N}$。小球的视重大于真实重力，因为合力必须向上指向圆心。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Take the gravitational field strength at Earth's surface to be $10\\ \\text{m/s}^2$. What is the field strength at a distance of $2R_E$ from Earth's center ($R_E$ = Earth's radius), in m/s²? Give a decimal.",
                "zh": "取地球表面的引力场强度为 $10\\ \\text{m/s}^2$。在距地心 $2R_E$（$R_E$ 为地球半径）处，场强是多少 m/s²？请填一个小数。"
              },
              "answer": "2.5",
              "accept": [
                "2.50",
                "5/2"
              ],
              "explanation": {
                "en": "$g = GM/r^2$, so doubling the distance from the center divides $g$ by $2^2 = 4$: $10/4 = 2.5\\ \\text{m/s}^2$. Careful: $2R_E$ from the center is an altitude of only $R_E$ above the surface.",
                "zh": "$g = GM/r^2$，距离地心的距离加倍使 $g$ 除以 $2^2 = 4$：$10/4 = 2.5\\ \\text{m/s}^2$。注意：距地心 $2R_E$ 相当于离地面高度仅为 $R_E$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Students attach a cart to a force sensor and drive it in a circle of fixed radius $r$, recording the inward force $F$ for several speeds $v$. To obtain a straight line through the origin whose slope gives $m/r$, they should plot:",
                "zh": "学生将小车连接到力传感器上，使其沿半径固定为 $r$ 的圆周运动，并记录不同速率 $v$ 下指向圆心的力 $F$。为了得到一条过原点、斜率为 $m/r$ 的直线，他们应作出哪种图象？"
              },
              "choices": [
                "$F$ versus $v$",
                "$F$ versus $v^2$",
                "$F$ versus $\\frac{1}{v}$",
                "$F^2$ versus $v$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $F = mv^2/r$, the force is proportional to $v^2$, not $v$. Plotting $F$ versus $v^2$ linearizes the data with slope $m/r$. Plotting $F$ versus $v$ (choice A) would give an upward-curving parabola — a classic linearization question on the AP exam.",
                "zh": "因为 $F = mv^2/r$，力与 $v^2$ 成正比，而不是与 $v$ 成正比。作 $F$ 对 $v^2$ 的图象可将数据线性化，斜率为 $m/r$。作 $F$ 对 $v$ 的图象（选项 A）会得到向上弯曲的抛物线——这是 AP 考试中经典的线性化问题。"
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
          "id": "work-and-kinetic-energy",
          "title": "Work and Kinetic Energy",
          "titleZh": "功与动能",
          "content": [
            {
              "type": "h2",
              "en": "What Work Means in Physics",
              "zh": "物理学中\"功\"的含义"
            },
            {
              "type": "p",
              "en": "Work is the way a force transfers energy to or from an object as the object moves. When a constant force $F$ acts on an object that undergoes a displacement $d$, the work done by that force depends on the angle $\\theta$ between the force and the displacement.",
              "zh": "功是力在物体运动过程中向物体传递能量（或从物体取走能量）的方式。当恒力 $F$ 作用在发生位移 $d$ 的物体上时，该力做的功取决于力与位移之间的夹角 $\\theta$。"
            },
            {
              "type": "math",
              "tex": "W = F d \\cos\\theta"
            },
            {
              "type": "p",
              "en": "Only the component of the force along the displacement does work. The sign of the work carries physical meaning:",
              "zh": "只有沿位移方向的力的分量才做功。功的正负号具有明确的物理意义："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Positive work ($\\theta < 90°$): the force has a component along the motion and adds energy — like gravity on a falling ball.",
                  "zh": "正功（$\\theta < 90°$）：力沿运动方向有分量，向物体输入能量——例如下落小球所受的重力。"
                },
                {
                  "en": "Negative work ($\\theta > 90°$): the force has a component opposite the motion and removes energy — like friction, or gravity on a rising ball.",
                  "zh": "负功（$\\theta > 90°$）：力沿运动反方向有分量，从物体取走能量——例如摩擦力，或上升小球所受的重力。"
                },
                {
                  "en": "Zero work ($\\theta = 90°$): a force perpendicular to the motion does no work — like the normal force on a sliding block, or the centripetal force in circular motion.",
                  "zh": "零功（$\\theta = 90°$）：垂直于运动方向的力不做功——例如滑动物块所受的法向力，或圆周运动中的向心力。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: work is a scalar — it has a sign but no direction. A common trap: carrying a bag horizontally at constant velocity means the upward force you exert does ZERO work, because the force is perpendicular to the displacement. \"Feeling tired\" is not the physics definition of work.",
              "zh": "AP 考试提示：功是标量——有正负但没有方向。常见陷阱：以恒定速度水平提着袋子行走时，你施加的竖直向上的力做的功为零，因为力垂直于位移。\"觉得累\"不是物理学中做功的定义。"
            },
            {
              "type": "h3",
              "en": "Work from a Force-versus-Position Graph",
              "zh": "由力-位移图象求功"
            },
            {
              "type": "p",
              "en": "When the force varies with position, $W = Fd\\cos\\theta$ no longer applies directly. Instead, the work done by a force is the area under its force-versus-position graph. Area above the axis counts as positive work; area below the axis counts as negative work. Break complicated graphs into rectangles and triangles.",
              "zh": "当力随位置变化时，$W = Fd\\cos\\theta$ 不再直接适用。此时，力做的功等于力-位移图象下的面积。坐标轴上方的面积算正功，下方的面积算负功。复杂图形可以拆分为矩形和三角形来计算。"
            },
            {
              "type": "h3",
              "en": "Kinetic Energy and the Work-Energy Theorem",
              "zh": "动能与动能定理"
            },
            {
              "type": "p",
              "en": "A moving object carries kinetic energy $K = \\frac{1}{2}mv^2$. Kinetic energy is a scalar, always positive, and measured in joules like work. The work-energy theorem connects the two: the NET work done by all forces equals the change in kinetic energy.",
              "zh": "运动的物体具有动能 $K = \\frac{1}{2}mv^2$。动能是标量，恒为正值，与功一样以焦耳为单位。动能定理将两者联系起来：所有力做的总功（合力做的功）等于动能的变化。"
            },
            {
              "type": "math",
              "tex": "W_{net} = \\Delta K = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2"
            },
            {
              "type": "p",
              "en": "Because $K$ depends on $v^2$, doubling an object's speed quadruples its kinetic energy — which is why stopping distance grows so quickly with speed.",
              "zh": "由于 $K$ 与 $v^2$ 成正比，速率加倍会使动能变为四倍——这正是刹车距离随速度快速增长的原因。"
            },
            {
              "type": "h3",
              "en": "Friction and Multi-Force Bookkeeping",
              "zh": "摩擦力与多个力做功的核算"
            },
            {
              "type": "p",
              "en": "Kinetic friction always opposes sliding, so it does negative work $W_f = -f_k d$ on the moving object, where $d$ is the sliding distance. When several forces act, compute each force's work separately, then add them (with signs) to get the net work. Alternatively, find the net force first and use $W_{net} = F_{net}\\, d\\cos\\theta$. Both routes give the same answer for constant forces.",
              "zh": "滑动摩擦力总是与滑动方向相反，因此它对运动物体做负功 $W_f = -f_k d$，其中 $d$ 为滑动距离。当多个力同时作用时，可以分别计算每个力做的功，再带符号相加得到总功；也可以先求合力，再用 $W_{net} = F_{net}\\, d\\cos\\theta$。对于恒力，两种方法结果相同。"
            },
            {
              "type": "note",
              "en": "Common mistake: applying the work-energy theorem with the work of only ONE force. $\\Delta K$ equals the net work — the sum over every force acting on the object, including gravity, friction, and applied forces.",
              "zh": "常见错误：只用其中一个力做的功来套动能定理。$\\Delta K$ 等于总功——即作用在物体上所有力（包括重力、摩擦力和外加拉力）做功的总和。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Multi-force bookkeeping on a sled",
                "zh": "例题 1：雪橇上多个力做功的核算"
              },
              "problem": {
                "en": "A $25\\ \\text{kg}$ sled is pulled $10\\ \\text{m}$ across level snow by a rope with tension $50\\ \\text{N}$ at $37°$ above the horizontal ($\\cos 37° = 0.80$). Friction exerts $20\\ \\text{N}$ opposing the motion. Find the work done by each force, the net work, and the sled's final speed if it starts from rest.",
                "zh": "一个 $25\\ \\text{kg}$ 的雪橇被绳子在水平雪地上拉动 $10\\ \\text{m}$，绳中张力为 $50\\ \\text{N}$，与水平方向成 $37°$ 角（$\\cos 37° = 0.80$）。摩擦力为 $20\\ \\text{N}$，方向与运动相反。求每个力做的功、总功，以及雪橇从静止出发的末速率。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "W_{rope} = Fd\\cos\\theta = (50)(10)(0.80) = 400\\ \\text{J}"
                },
                {
                  "type": "math",
                  "tex": "W_{friction} = -f d = -(20)(10) = -200\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "Gravity and the normal force are perpendicular to the displacement, so each does zero work. Net work: $400 - 200 = 200\\ \\text{J}$.",
                  "zh": "重力和法向力都垂直于位移，各自做功为零。总功：$400 - 200 = 200\\ \\text{J}$。"
                },
                {
                  "type": "math",
                  "tex": "W_{net} = \\tfrac{1}{2}mv^2 \\implies v = \\sqrt{\\frac{2(200)}{25}} = \\sqrt{16} = 4.0\\ \\text{m/s}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Work as area under an $F$-$x$ graph",
                "zh": "例题 2：功等于 $F$-$x$ 图下的面积"
              },
              "problem": {
                "en": "A horizontal force acts on a $5\\ \\text{kg}$ cart on a frictionless track. The force increases linearly from $0$ to $10\\ \\text{N}$ as the cart moves from $x = 0$ to $x = 4\\ \\text{m}$, then stays constant at $10\\ \\text{N}$ from $x = 4\\ \\text{m}$ to $x = 6\\ \\text{m}$. If the cart starts from rest, find its speed at $x = 6\\ \\text{m}$.",
                "zh": "一个水平力作用在无摩擦轨道上 $5\\ \\text{kg}$ 的小车上。当小车从 $x = 0$ 运动到 $x = 4\\ \\text{m}$ 时，力从 $0$ 线性增大到 $10\\ \\text{N}$；从 $x = 4\\ \\text{m}$ 到 $x = 6\\ \\text{m}$，力保持 $10\\ \\text{N}$ 不变。若小车从静止出发，求它在 $x = 6\\ \\text{m}$ 处的速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The work is the area under the graph: a triangle plus a rectangle.",
                  "zh": "功等于图象下的面积：一个三角形加一个矩形。"
                },
                {
                  "type": "math",
                  "tex": "W = \\tfrac{1}{2}(4)(10) + (10)(2) = 20 + 20 = 40\\ \\text{J}"
                },
                {
                  "type": "math",
                  "tex": "W_{net} = \\tfrac{1}{2}mv^2 \\implies v = \\sqrt{\\frac{2(40)}{5}} = \\sqrt{16} = 4.0\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "The work-energy theorem handles a varying force with no extra effort — no kinematics equations needed.",
                  "zh": "动能定理可以毫不费力地处理变力问题——完全不需要运动学方程。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A block slides down a rough incline. Which force does ZERO work on the block?",
                "zh": "一个物块沿粗糙斜面下滑。哪个力对物块做的功为零？"
              },
              "choices": [
                "Gravity",
                "Kinetic friction",
                "The normal force",
                "All three forces do nonzero work"
              ],
              "answer": 2,
              "explanation": {
                "en": "The normal force is perpendicular to the block's displacement along the incline, so $\\cos 90° = 0$ and it does no work. Gravity does positive work (the block moves downward), and friction does negative work. Choice A is tempting only if you forget the block has a downward displacement component.",
                "zh": "法向力垂直于物块沿斜面的位移，$\\cos 90° = 0$，因此不做功。重力做正功（物块向下运动），摩擦力做负功。只有忽略了物块位移有竖直向下的分量，才会误选 A。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A force of $40\\ \\text{N}$ pulls a crate $5\\ \\text{m}$ across a floor, with the force directed $60°$ above the horizontal. How much work does the force do, in joules? Give an integer.",
                "zh": "一个 $40\\ \\text{N}$ 的力拉着木箱在地板上移动 $5\\ \\text{m}$，力的方向与水平面成 $60°$ 角。该力做了多少功（焦耳）？请填一个整数。"
              },
              "answer": "100",
              "accept": [
                "100.0"
              ],
              "explanation": {
                "en": "$W = Fd\\cos\\theta = (40)(5)\\cos 60° = (40)(5)(0.5) = 100\\ \\text{J}$. Only the horizontal component $F\\cos\\theta = 20\\ \\text{N}$ does work.",
                "zh": "$W = Fd\\cos\\theta = (40)(5)\\cos 60° = (40)(5)(0.5) = 100\\ \\text{J}$。只有水平分量 $F\\cos\\theta = 20\\ \\text{N}$ 做功。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If a car's speed doubles, its kinetic energy:",
                "zh": "如果汽车的速率加倍，它的动能："
              },
              "choices": [
                "Doubles",
                "Triples",
                "Quadruples",
                "Stays the same"
              ],
              "answer": 2,
              "explanation": {
                "en": "$K = \\frac{1}{2}mv^2$ depends on the square of the speed, so doubling $v$ multiplies $K$ by $4$. \"Doubles\" is the tempting linear-thinking answer. This is also why a car at twice the speed needs four times the stopping distance.",
                "zh": "$K = \\frac{1}{2}mv^2$ 与速率的平方成正比，所以 $v$ 加倍使 $K$ 变为 $4$ 倍。\"加倍\"是线性思维的诱人错误答案。这也是速度加倍的汽车刹车距离变为四倍的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How much net work is required to speed up a $4\\ \\text{kg}$ object from $3\\ \\text{m/s}$ to $5\\ \\text{m/s}$? Answer in joules; give an integer.",
                "zh": "将一个 $4\\ \\text{kg}$ 的物体从 $3\\ \\text{m/s}$ 加速到 $5\\ \\text{m/s}$ 需要多少总功？单位焦耳，请填一个整数。"
              },
              "answer": "32",
              "accept": [
                "32.0"
              ],
              "explanation": {
                "en": "$W_{net} = \\Delta K = \\frac{1}{2}(4)(5^2) - \\frac{1}{2}(4)(3^2) = 50 - 18 = 32\\ \\text{J}$. Common mistake: computing $\\frac{1}{2}m(\\Delta v)^2 = \\frac{1}{2}(4)(2^2) = 8\\ \\text{J}$ — you must square the speeds first, then subtract.",
                "zh": "$W_{net} = \\Delta K = \\frac{1}{2}(4)(5^2) - \\frac{1}{2}(4)(3^2) = 50 - 18 = 32\\ \\text{J}$。常见错误：计算 $\\frac{1}{2}m(\\Delta v)^2 = \\frac{1}{2}(4)(2^2) = 8\\ \\text{J}$——必须先对速率平方再相减。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A waiter carries a tray horizontally across a room at constant velocity, exerting an upward force on it. The work done by the waiter's force on the tray is:",
                "zh": "服务员以恒定速度水平端着托盘穿过房间，对托盘施加竖直向上的力。服务员的力对托盘做的功是："
              },
              "choices": [
                "Positive, equal to $Fd$",
                "Zero",
                "Negative, because the tray resists",
                "Positive, but less than $Fd$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The force is vertical and the displacement is horizontal: $\\theta = 90°$, so $W = Fd\\cos 90° = 0$. Choice A is tempting because the waiter feels effort, but muscular fatigue is not mechanical work on the tray.",
                "zh": "力是竖直的而位移是水平的：$\\theta = 90°$，故 $W = Fd\\cos 90° = 0$。选项 A 有迷惑性，因为服务员确实感到费力，但肌肉的疲劳并不等于对托盘做的机械功。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A horizontal force on an object is $+6\\ \\text{N}$ (constant) from $x = 0$ to $x = 3\\ \\text{m}$, then $-2\\ \\text{N}$ (constant) from $x = 3\\ \\text{m}$ to $x = 6\\ \\text{m}$. The total work done by this force over the full $6\\ \\text{m}$ is:",
                "zh": "作用在物体上的水平力在 $x = 0$ 到 $x = 3\\ \\text{m}$ 间恒为 $+6\\ \\text{N}$，在 $x = 3\\ \\text{m}$ 到 $x = 6\\ \\text{m}$ 间恒为 $-2\\ \\text{N}$。该力在整个 $6\\ \\text{m}$ 内做的总功是："
              },
              "choices": [
                "$24\\ \\text{J}$",
                "$18\\ \\text{J}$",
                "$6\\ \\text{J}$",
                "$12\\ \\text{J}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Work is the signed area under the $F$-$x$ graph: $(6)(3) + (-2)(3) = 18 - 6 = 12\\ \\text{J}$. Choice B forgets the negative region; choice A wrongly treats both areas as positive.",
                "zh": "功是 $F$-$x$ 图下的带符号面积：$(6)(3) + (-2)(3) = 18 - 6 = 12\\ \\text{J}$。选 B 是忘了负值区域；选 A 是错误地把两块面积都当成正的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A box slides $4\\ \\text{m}$ across a floor while kinetic friction of magnitude $15\\ \\text{N}$ acts on it. What is the work done by friction, in joules? Include the sign; give an integer.",
                "zh": "一个箱子在地板上滑行 $4\\ \\text{m}$，受到大小为 $15\\ \\text{N}$ 的滑动摩擦力。摩擦力做的功是多少焦耳？请带符号填一个整数。"
              },
              "answer": "-60",
              "accept": [
                "-60.0"
              ],
              "explanation": {
                "en": "Friction points opposite the sliding, so $\\theta = 180°$ and $W_f = -fd = -(15)(4) = -60\\ \\text{J}$. The negative sign means friction removes kinetic energy, converting it to thermal energy.",
                "zh": "摩擦力方向与滑动方向相反，$\\theta = 180°$，故 $W_f = -fd = -(15)(4) = -60\\ \\text{J}$。负号表示摩擦力取走动能，将其转化为热能。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Students pull a cart from rest with a constant net force $F_{net}$ and measure its final speed $v$ after each of several pull distances $d$. To test the work-energy theorem with a straight-line graph, they should plot:",
                "zh": "学生用恒定合力 $F_{net}$ 从静止拉动小车，并测量经过不同拉动距离 $d$ 后的末速率 $v$。为了用一条直线图象检验动能定理，他们应作出哪种图象？"
              },
              "choices": [
                "$v$ versus $d$, expecting slope $\\frac{F_{net}}{m}$",
                "$v^2$ versus $d$, expecting slope $\\frac{2F_{net}}{m}$",
                "$v$ versus $d^2$, expecting slope $\\frac{F_{net}}{2m}$",
                "$v^2$ versus $\\frac{1}{d}$, expecting slope $2F_{net}m$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The theorem gives $F_{net}\\,d = \\frac{1}{2}mv^2$, so $v^2 = \\frac{2F_{net}}{m}\\,d$: a plot of $v^2$ versus $d$ is linear through the origin with slope $2F_{net}/m$. Plotting $v$ versus $d$ (choice A) gives a square-root curve, not a line — linearizing data this way is a favorite AP lab skill.",
                "zh": "由动能定理 $F_{net}\\,d = \\frac{1}{2}mv^2$，得 $v^2 = \\frac{2F_{net}}{m}\\,d$：$v^2$ 对 $d$ 的图象是过原点的直线，斜率为 $2F_{net}/m$。作 $v$ 对 $d$ 的图象（选项 A）会得到平方根曲线而非直线——这种数据线性化是 AP 实验题的常考技能。"
              }
            }
          ]
        },
        {
          "id": "energy-conservation-power",
          "title": "Energy Conservation and Power",
          "titleZh": "能量守恒与功率",
          "content": [
            {
              "type": "h2",
              "en": "Potential Energy and the Choice of System",
              "zh": "势能与系统的选取"
            },
            {
              "type": "p",
              "en": "Potential energy is energy stored in the configuration of a system — how its parts are arranged relative to each other. Near Earth's surface, raising an object of mass $m$ by a height $\\Delta h$ stores gravitational potential energy in the object-Earth system. Compressing or stretching a spring by $x$ from its natural length stores elastic potential energy.",
              "zh": "势能是储存在系统\"构型\"中的能量——即系统各部分相对位置关系中的能量。在地球表面附近，将质量为 $m$ 的物体升高 $\\Delta h$，会在\"物体-地球\"系统中储存重力势能。将弹簧从原长压缩或拉伸 $x$，则储存弹性势能。"
            },
            {
              "type": "math",
              "tex": "\\Delta U_g = mg\\,\\Delta h \\qquad U_s = \\tfrac{1}{2}kx^2"
            },
            {
              "type": "p",
              "en": "Potential energy belongs to a system, not to a single object. If you define your system as the block alone, there is no gravitational potential energy — instead, gravity is an external force that does work on the block. If the system is block + Earth, gravity is internal and its effect is tracked as $\\Delta U_g$. Both descriptions give the same physics; the AP exam expects you to state which system you chose and stay consistent.",
              "zh": "势能属于系统，而不属于单个物体。如果把系统只定义为物块本身，就不存在重力势能——此时重力是对物块做功的外力。如果系统是\"物块 + 地球\"，重力就是内力，其效果用 $\\Delta U_g$ 来记录。两种描述给出相同的物理结果；AP 考试要求你明确说明所选的系统并保持一致。"
            },
            {
              "type": "p",
              "en": "Energy bar charts make the bookkeeping visual: draw one bar for each energy type (K, $U_g$, $U_s$, thermal) at the initial instant and again at the final instant. The total bar height stays the same for a closed system — energy just moves between bars.",
              "zh": "能量柱状图能把能量核算可视化：在初始时刻和末了时刻分别为每种能量（动能 K、重力势能 $U_g$、弹性势能 $U_s$、热能）画一个柱。对于封闭系统，柱的总高度保持不变——能量只是在各柱之间转移。"
            },
            {
              "type": "h3",
              "en": "Conservation of Energy — With and Without Friction",
              "zh": "能量守恒——有摩擦与无摩擦"
            },
            {
              "type": "p",
              "en": "Mechanical energy is the sum $K + U$. If no friction or other dissipative force acts (and no external force does work on the system), mechanical energy is conserved:",
              "zh": "机械能是 $K + U$ 之和。如果没有摩擦等耗散力（且没有外力对系统做功），机械能守恒："
            },
            {
              "type": "math",
              "tex": "K_i + U_i = K_f + U_f"
            },
            {
              "type": "p",
              "en": "With friction, mechanical energy is NOT conserved — but total energy still is. Sliding through a distance $d$ against friction $f_k$ converts mechanical energy into thermal energy $\\Delta E_{th} = f_k d$, which appears as warming of the surfaces:",
              "zh": "存在摩擦时，机械能不守恒——但总能量依然守恒。克服摩擦力 $f_k$ 滑行距离 $d$，会把机械能转化为热能 $\\Delta E_{th} = f_k d$，表现为接触面变热："
            },
            {
              "type": "math",
              "tex": "K_i + U_i = K_f + U_f + f_k d"
            },
            {
              "type": "h3",
              "en": "A Reliable Problem-Solving Workflow",
              "zh": "可靠的解题流程"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Define the system (e.g., cart + Earth + spring) and choose a reference height where $U_g = 0$.",
                  "zh": "定义系统（例如：小车 + 地球 + 弹簧），并选定 $U_g = 0$ 的参考高度。"
                },
                {
                  "en": "Pick clear initial and final instants and sketch or imagine the energy bar chart for each.",
                  "zh": "选定明确的初、末时刻，并为每个时刻画出（或想象）能量柱状图。"
                },
                {
                  "en": "Write the conservation equation, including a $f_k d$ term if surfaces slide with friction.",
                  "zh": "写出守恒方程，若接触面间有滑动摩擦，则加入 $f_k d$ 项。"
                },
                {
                  "en": "Solve symbolically first, substitute numbers last, and check units and limiting cases.",
                  "zh": "先用符号求解，最后代入数值，并检查单位和极限情形。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: energy methods ignore the path — only the initial and final states matter (plus total sliding distance if there is friction). If a problem asks for speed at the bottom of a curved, complicated ramp, that curviness is a hint to use energy conservation, not kinematics. But energy alone cannot give you time or direction; use kinematics or dynamics for those.",
              "zh": "AP 考试提示：能量方法不关心路径——只有初、末状态才重要（若有摩擦，还需滑动总距离）。如果题目要求物体滑到形状复杂的曲面坡道底端的速率，\"弯曲复杂\"正是提示你使用能量守恒而非运动学。但仅靠能量无法求出时间或方向；求这些要用运动学或动力学。"
            },
            {
              "type": "h3",
              "en": "Power",
              "zh": "功率"
            },
            {
              "type": "p",
              "en": "Power is the rate at which work is done or energy is transferred. When a force $F$ pushes an object moving at speed $v$ in the direction of the force, the power delivered is $P = Fv$. Power is measured in watts ($1\\ \\text{W} = 1\\ \\text{J/s}$).",
              "zh": "功率是做功或传递能量的快慢。当力 $F$ 沿力的方向推动以速率 $v$ 运动的物体时，输出功率为 $P = Fv$。功率的单位是瓦特（$1\\ \\text{W} = 1\\ \\text{J/s}$）。"
            },
            {
              "type": "math",
              "tex": "P = \\frac{W}{t} = Fv"
            },
            {
              "type": "p",
              "en": "Real machines illustrate both forms: an elevator motor lifting at constant speed delivers $P = (mg)v$; a car cruising at constant highway speed uses its engine power entirely against air resistance and rolling friction. Same energy delivered in half the time means double the power.",
              "zh": "实际机器同时体现这两种形式：匀速上升的电梯电动机输出功率 $P = (mg)v$；在高速公路上匀速巡航的汽车，其发动机功率全部用于克服空气阻力和滚动摩擦。相同的能量在一半时间内输出，功率就是两倍。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A slide with friction",
                "zh": "例题 1：有摩擦的滑道"
              },
              "problem": {
                "en": "A $2\\ \\text{kg}$ child's toy starts from rest at the top of a curved slide of height $5\\ \\text{m}$. Friction converts $36\\ \\text{J}$ of energy to thermal energy on the way down. Using $g = 10\\ \\text{m/s}^2$, find the toy's speed at the bottom.",
                "zh": "一个 $2\\ \\text{kg}$ 的玩具从高 $5\\ \\text{m}$ 的弯曲滑道顶端由静止滑下。下滑过程中摩擦将 $36\\ \\text{J}$ 的能量转化为热能。取 $g = 10\\ \\text{m/s}^2$，求玩具滑到底端时的速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "System: toy + Earth + slide, with $U_g = 0$ at the bottom. Initially all energy is gravitational potential energy.",
                  "zh": "系统：玩具 + 地球 + 滑道，取底端为 $U_g = 0$。初始时全部能量为重力势能。"
                },
                {
                  "type": "math",
                  "tex": "U_i = mgh = (2)(10)(5) = 100\\ \\text{J}"
                },
                {
                  "type": "math",
                  "tex": "K_f = U_i - \\Delta E_{th} = 100 - 36 = 64\\ \\text{J}"
                },
                {
                  "type": "math",
                  "tex": "\\tfrac{1}{2}(2)v^2 = 64 \\implies v = \\sqrt{64} = 8.0\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "The curved shape of the slide never entered the calculation — only the height and the thermal energy mattered.",
                  "zh": "滑道的弯曲形状完全没有进入计算——只有高度和产生的热能才重要。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Spring launcher",
                "zh": "例题 2：弹簧发射器"
              },
              "problem": {
                "en": "A spring of stiffness $k = 200\\ \\text{N/m}$ is compressed $0.20\\ \\text{m}$ and used to launch a $0.5\\ \\text{kg}$ cart along a frictionless horizontal track. Find the cart's launch speed.",
                "zh": "劲度系数为 $k = 200\\ \\text{N/m}$ 的弹簧被压缩 $0.20\\ \\text{m}$，用于沿无摩擦水平轨道发射一个 $0.5\\ \\text{kg}$ 的小车。求小车的发射速率。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "U_s = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.20)^2 = 4.0\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "With no friction, all spring potential energy becomes kinetic energy of the cart.",
                  "zh": "无摩擦时，弹簧的全部弹性势能转化为小车的动能。"
                },
                {
                  "type": "math",
                  "tex": "\\tfrac{1}{2}(0.5)v^2 = 4.0 \\implies v = \\sqrt{16} = 4.0\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "Common mistake: forgetting to square the compression. Because $U_s \\propto x^2$, doubling the compression would quadruple the stored energy and double the launch speed.",
                  "zh": "常见错误：忘记对压缩量平方。由于 $U_s \\propto x^2$，压缩量加倍会使储存的能量变为四倍，发射速率变为两倍。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A ball is dropped from rest and falls with negligible air resistance. Taking the ball + Earth as the system, which statement is correct during the fall?",
                "zh": "一个小球由静止释放下落，空气阻力可忽略。以\"小球 + 地球\"为系统，下落过程中哪个说法正确？"
              },
              "choices": [
                "Kinetic energy is conserved",
                "Potential energy is conserved",
                "Mechanical energy is conserved",
                "Total energy decreases"
              ],
              "answer": 2,
              "explanation": {
                "en": "With no friction or air resistance, $K + U$ stays constant: potential energy decreases while kinetic energy increases by the same amount. Choices A and B are tempting because each quantity appears in the conservation law, but neither is individually constant.",
                "zh": "没有摩擦和空气阻力时，$K + U$ 保持不变：势能减少多少，动能就增加多少。A 和 B 有迷惑性，因为这两个量都出现在守恒定律中，但它们各自都不守恒。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A spring with $k = 400\\ \\text{N/m}$ is compressed $0.1\\ \\text{m}$. How much elastic potential energy is stored, in joules? Give an integer.",
                "zh": "劲度系数 $k = 400\\ \\text{N/m}$ 的弹簧被压缩 $0.1\\ \\text{m}$。储存了多少弹性势能（焦耳）？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "$U_s = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.1)^2 = \\frac{1}{2}(400)(0.01) = 2\\ \\text{J}$. Forgetting to square $x$ gives $20\\ \\text{J}$ — a factor-of-ten error here.",
                "zh": "$U_s = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.1)^2 = \\frac{1}{2}(400)(0.01) = 2\\ \\text{J}$。忘记对 $x$ 平方会得到 $20\\ \\text{J}$——在这里是十倍的误差。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two frictionless ramps have the same height but different steepness. Identical blocks are released from rest at the top of each. At the bottom, the blocks have:",
                "zh": "两个无摩擦斜面高度相同但倾角不同。两个相同的物块分别从顶端由静止释放。到达底端时，两物块："
              },
              "choices": [
                "The same speed and the same travel time",
                "The same speed but different travel times",
                "Different speeds but the same travel time",
                "Different speeds and different travel times"
              ],
              "answer": 1,
              "explanation": {
                "en": "Energy conservation gives $v = \\sqrt{2gh}$, which depends only on the height, so the speeds are equal. But the steeper ramp produces a larger acceleration over a shorter path, so the times differ. Choice A is tempting if you assume \"same speed\" implies \"same time.\"",
                "zh": "由能量守恒得 $v = \\sqrt{2gh}$，只与高度有关，所以速率相同。但更陡的斜面加速度更大、路径更短，所以时间不同。如果误以为\"速率相同\"就意味着\"时间相同\"，就会错选 A。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cart starts from rest and descends a frictionless track of height $20\\ \\text{m}$. Using $g = 10\\ \\text{m/s}^2$, what is its speed at the bottom in m/s? Give an integer.",
                "zh": "一辆小车由静止出发，沿高 $20\\ \\text{m}$ 的无摩擦轨道下滑。取 $g = 10\\ \\text{m/s}^2$，它到达底端时的速率是多少 m/s？请填一个整数。"
              },
              "answer": "20",
              "accept": [
                "20.0"
              ],
              "explanation": {
                "en": "$mgh = \\frac{1}{2}mv^2$, so $v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20\\ \\text{m/s}$. The mass cancels — any cart reaches the same speed.",
                "zh": "$mgh = \\frac{1}{2}mv^2$，故 $v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20\\ \\text{m/s}$。质量被约去——任何质量的小车都达到相同速率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A block slides across a rough floor and comes to rest. Considering the block + floor + Earth as the system, which is true?",
                "zh": "一个物块在粗糙地板上滑行直至停止。以\"物块 + 地板 + 地球\"为系统，下列哪项正确？"
              },
              "choices": [
                "Mechanical energy is conserved, total energy is not",
                "Both mechanical and total energy are conserved",
                "The kinetic energy is destroyed by friction",
                "Total energy is conserved; mechanical energy is converted to thermal energy"
              ],
              "answer": 3,
              "explanation": {
                "en": "Friction converts the block's kinetic energy into thermal energy of the block and floor, so mechanical energy decreases while total energy is unchanged. Choice C is the everyday-language trap: energy is never destroyed, only transformed.",
                "zh": "摩擦把物块的动能转化为物块和地板的热能，机械能减少而总能量不变。选项 C 是日常语言的陷阱：能量从不会被消灭，只会转化形式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A motor lifts a $60\\ \\text{kg}$ load vertically $5\\ \\text{m}$ at constant speed in $10\\ \\text{s}$. Using $g = 10\\ \\text{m/s}^2$, what is the motor's power output in watts? Give an integer.",
                "zh": "电动机以恒定速度在 $10\\ \\text{s}$ 内将 $60\\ \\text{kg}$ 的负载竖直提升 $5\\ \\text{m}$。取 $g = 10\\ \\text{m/s}^2$，电动机的输出功率是多少瓦特？请填一个整数。"
              },
              "answer": "300",
              "accept": [
                "300.0"
              ],
              "explanation": {
                "en": "Work done against gravity: $W = mgh = (60)(10)(5) = 3000\\ \\text{J}$. Power: $P = W/t = 3000/10 = 300\\ \\text{W}$. Equivalently, $P = Fv = (600\\ \\text{N})(0.5\\ \\text{m/s}) = 300\\ \\text{W}$.",
                "zh": "克服重力做的功：$W = mgh = (60)(10)(5) = 3000\\ \\text{J}$。功率：$P = W/t = 3000/10 = 300\\ \\text{W}$。等价地，$P = Fv = (600\\ \\text{N})(0.5\\ \\text{m/s}) = 300\\ \\text{W}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A block slides down a ramp. If the system is defined as the block ALONE (not including Earth), how should the effect of gravity be described?",
                "zh": "一个物块沿斜面下滑。如果系统仅定义为物块本身（不包括地球），应如何描述重力的作用？"
              },
              "choices": [
                "Gravity does external work on the system, increasing its kinetic energy",
                "The system's gravitational potential energy decreases",
                "Gravity is an internal force, so it can be ignored",
                "The block's total energy is conserved automatically"
              ],
              "answer": 0,
              "explanation": {
                "en": "Potential energy belongs to the block-Earth system. If Earth is outside the system, there is no $U_g$ to speak of — gravity is an external force doing positive work $mgh$ on the block. Choice B is the tempting habit answer, but it mixes two different system choices.",
                "zh": "势能属于\"物块-地球\"系统。如果地球不在系统内，就谈不上 $U_g$——重力是对物块做正功 $mgh$ 的外力。选项 B 是习惯性的诱人答案，但它混淆了两种不同的系统选取。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Students release a cart from rest at several heights $h$ on a curved track and measure its speed $v$ at the bottom. They plot $v^2$ versus $h$ and obtain a straight line through the origin with slope $16\\ \\text{m/s}^2$. Using $g = 10\\ \\text{m/s}^2$, the best conclusion is:",
                "zh": "学生让小车从弯曲轨道上不同高度 $h$ 处由静止释放，并测量其到达底端时的速率 $v$。他们作出 $v^2$ 对 $h$ 的图象，得到一条过原点、斜率为 $16\\ \\text{m/s}^2$ 的直线。取 $g = 10\\ \\text{m/s}^2$，最合理的结论是："
              },
              "choices": [
                "The data confirm that mechanical energy is conserved on this track",
                "The measured slope should equal $g$, so the data contain large errors",
                "Friction converts a consistent fraction of the initial energy to thermal energy, since the slope is less than $2g$",
                "The cart's mass must be known before any conclusion can be drawn"
              ],
              "answer": 2,
              "explanation": {
                "en": "Frictionless conservation predicts $v^2 = 2gh$, a slope of $2g = 20\\ \\text{m/s}^2$. A straight line with slope $16\\ \\text{m/s}^2 < 2g$ means a fixed fraction ($20\\%$) of $mgh$ becomes thermal energy. Choice B is tempting but wrong: the predicted slope is $2g$, not $g$. The mass cancels in $v^2 = 2gh$, so choice D is unnecessary.",
                "zh": "无摩擦守恒预测 $v^2 = 2gh$，斜率应为 $2g = 20\\ \\text{m/s}^2$。斜率 $16\\ \\text{m/s}^2 < 2g$ 的直线说明有固定比例（$20\\%$）的 $mgh$ 转化为热能。选项 B 有迷惑性但错误：理论斜率是 $2g$ 而不是 $g$。$v^2 = 2gh$ 中质量被约去，所以选项 D 是不必要的。"
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
          "id": "impulse-and-momentum",
          "title": "Impulse and Momentum",
          "titleZh": "冲量与动量",
          "content": [
            {
              "type": "h2",
              "en": "Momentum: Mass in Motion",
              "zh": "动量：运动中的质量"
            },
            {
              "type": "p",
              "en": "Momentum is the product of an object's mass and its velocity. It is a vector: its direction is the direction of the velocity. In one dimension we track direction with signs, and on the AP exam most momentum errors come from dropping a sign. A slow, heavy truck can have the same momentum as a fast, light car — momentum measures how hard it is to stop something, combining both how much matter is moving and how fast.",
              "zh": "动量是物体质量与速度的乘积。它是矢量：方向与速度方向相同。在一维问题中我们用正负号表示方向，AP 考试中大多数动量错误都源于漏掉符号。一辆缓慢行驶的重型卡车可以与一辆高速行驶的轻型轿车具有相同的动量——动量衡量让物体停下来的难度，同时包含了运动物质的多少和运动的快慢。"
            },
            {
              "type": "math",
              "tex": "\\vec{p} = m\\vec{v}"
            },
            {
              "type": "p",
              "en": "The SI unit of momentum is $\\text{kg} \\cdot \\text{m/s}$. Because momentum is a vector, two objects moving in opposite directions can have a total momentum of zero even though both are moving.",
              "zh": "动量的国际单位是 $\\text{kg} \\cdot \\text{m/s}$。由于动量是矢量，两个沿相反方向运动的物体即使都在运动，总动量也可能为零。"
            },
            {
              "type": "h3",
              "en": "Impulse and the Impulse-Momentum Theorem",
              "zh": "冲量与冲量-动量定理"
            },
            {
              "type": "p",
              "en": "Impulse is what a force delivers over time. When a net force $F$ acts for a time interval $\\Delta t$, the impulse is $J = F\\Delta t$, and it equals the change in the object's momentum. This is really Newton's second law in disguise: $F_{net} = ma = m\\frac{\\Delta v}{\\Delta t} = \\frac{\\Delta p}{\\Delta t}$, so multiplying both sides by $\\Delta t$ gives the impulse-momentum theorem.",
              "zh": "冲量是力在时间上的累积作用。当合力 $F$ 作用了时间 $\\Delta t$，冲量为 $J = F\\Delta t$，它等于物体动量的变化。这其实就是牛顿第二定律的另一种形式：$F_{net} = ma = m\\frac{\\Delta v}{\\Delta t} = \\frac{\\Delta p}{\\Delta t}$，两边同乘 $\\Delta t$ 即得冲量-动量定理。"
            },
            {
              "type": "math",
              "tex": "\\vec{J} = \\vec{F}_{net}\\,\\Delta t = \\Delta \\vec{p} = m\\vec{v}_f - m\\vec{v}_i"
            },
            {
              "type": "p",
              "en": "Impulse is also a vector, with units $\\text{N} \\cdot \\text{s}$ (equivalent to $\\text{kg} \\cdot \\text{m/s}$). Newton's third law connects impulses too: when two objects interact, they exert equal-magnitude, opposite-direction forces on each other for the same contact time, so they receive equal-magnitude, opposite-direction impulses. A bug and a windshield exchange impulses of exactly the same size — the bug suffers more only because its mass is tiny, so its velocity change is enormous.",
              "zh": "冲量也是矢量，单位为 $\\text{N} \\cdot \\text{s}$（等价于 $\\text{kg} \\cdot \\text{m/s}$）。牛顿第三定律也把冲量联系起来：两个物体相互作用时，彼此施加大小相等、方向相反的力，且接触时间相同，因此获得大小相等、方向相反的冲量。小虫与挡风玻璃交换的冲量大小完全相同——小虫之所以更惨，只是因为它质量极小，速度变化极大。"
            },
            {
              "type": "h3",
              "en": "Force-versus-Time Graphs",
              "zh": "力-时间图象"
            },
            {
              "type": "p",
              "en": "Real forces during collisions are rarely constant — they rise sharply and fall off. On a force-versus-time graph, the area under the curve equals the impulse delivered. For a triangular or trapezoidal force profile you can compute the area with geometry. If a problem asks for the average force, it is the constant force that would enclose the same area over the same time interval: $F_{avg} = \\frac{\\Delta p}{\\Delta t}$.",
              "zh": "碰撞过程中的真实力很少是恒定的——通常先急剧上升再回落。在力-时间图上，曲线下的面积等于所施加的冲量。对于三角形或梯形的力曲线，可以用几何方法求面积。若题目求平均力，它就是在相同时间内围出相同面积的那个恒定力：$F_{avg} = \\frac{\\Delta p}{\\Delta t}$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Area under an $F$-$t$ graph = impulse = change in momentum.",
                  "zh": "$F$-$t$ 图下的面积 = 冲量 = 动量的变化。"
                },
                {
                  "en": "A taller, narrower force curve and a shorter, wider one can deliver the same impulse.",
                  "zh": "又高又窄的力曲线与又矮又宽的力曲线可以传递相同的冲量。"
                },
                {
                  "en": "Area below the time axis counts as negative impulse (force in the $-x$ direction).",
                  "zh": "时间轴下方的面积计为负冲量（力沿 $-x$ 方向）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: always assign a positive direction before computing $\\Delta p$. A ball that hits a wall at $+10\\ \\text{m/s}$ and rebounds at $-8\\ \\text{m/s}$ has $\\Delta v = -8 - (+10) = -18\\ \\text{m/s}$, not $2\\ \\text{m/s}$. Rebounds mean bigger momentum changes than simply stopping — this sign trap appears on almost every AP exam.",
              "zh": "AP 考试提示：计算 $\\Delta p$ 之前务必先规定正方向。一个以 $+10\\ \\text{m/s}$ 撞墙并以 $-8\\ \\text{m/s}$ 反弹的球，其 $\\Delta v = -8 - (+10) = -18\\ \\text{m/s}$，而不是 $2\\ \\text{m/s}$。反弹意味着比单纯停下更大的动量变化——这个符号陷阱几乎每年 AP 考试都会出现。"
            },
            {
              "type": "h3",
              "en": "Why Airbags and Crumple Zones Work",
              "zh": "为什么安全气囊和溃缩区有效"
            },
            {
              "type": "p",
              "en": "In a crash, the change in your momentum is fixed by physics: you go from your initial speed to zero, so $\\Delta p$ is the same no matter what you hit. What safety devices control is the time. Since $F_{avg} = \\frac{\\Delta p}{\\Delta t}$, stretching the stopping time from a hundredth of a second to several tenths of a second reduces the average force by the same factor. Airbags, crumple zones, padded playground surfaces, and gymnastics mats all trade a fixed $\\Delta p$ for a longer $\\Delta t$ and therefore a smaller $F$.",
              "zh": "在碰撞中，你的动量变化由物理规律决定：从初速度变为零，所以无论撞上什么，$\\Delta p$ 都相同。安全装置能控制的是时间。由于 $F_{avg} = \\frac{\\Delta p}{\\Delta t}$，把停止时间从百分之一秒延长到十分之几秒，平均力就按相同倍数减小。安全气囊、溃缩区、操场软垫和体操垫都是在 $\\Delta p$ 固定的前提下换取更长的 $\\Delta t$，从而得到更小的 $F$。"
            },
            {
              "type": "p",
              "en": "Athletes use the same idea in both directions. To reduce force: a catcher pulls the glove backward while catching a fastball, and you bend your knees when landing a jump — both lengthen $\\Delta t$. To increase momentum change: a golfer or batter \"follows through,\" keeping the club or bat in contact with the ball longer so the force acts over more time and delivers a larger impulse.",
              "zh": "运动员在两个方向上都运用同一原理。为了减小力：棒球接球手接快球时把手套向后收，落地时屈膝——都是在延长 $\\Delta t$。为了增大动量变化：高尔夫球手或击球手\"随挥\"，让球杆或球棒与球接触更长时间，使力作用更久，从而传递更大的冲量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Impulse from a force-time graph",
                "zh": "例题 1：由力-时间图求冲量"
              },
              "problem": {
                "en": "A $0.5\\ \\text{kg}$ ball, initially at rest, is struck by a force that rises linearly from $0$ to $100\\ \\text{N}$ during the first $0.2\\ \\text{s}$ and then falls linearly back to $0$ during the next $0.2\\ \\text{s}$ (a triangular force-time graph). Find the impulse delivered and the ball's final speed.",
                "zh": "一个质量为 $0.5\\ \\text{kg}$、初始静止的球受到一个力：前 $0.2\\ \\text{s}$ 内力从 $0$ 线性增大到 $100\\ \\text{N}$，随后 $0.2\\ \\text{s}$ 内又线性减小回 $0$（力-时间图为三角形）。求该力传递的冲量及球的末速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Impulse is the area under the $F$-$t$ graph — here a triangle with base $0.4\\ \\text{s}$ and height $100\\ \\text{N}$.",
                  "zh": "冲量等于 $F$-$t$ 图下的面积——此处为底 $0.4\\ \\text{s}$、高 $100\\ \\text{N}$ 的三角形。"
                },
                {
                  "type": "math",
                  "tex": "J = \\tfrac{1}{2}(0.4\\ \\text{s})(100\\ \\text{N}) = 20\\ \\text{N} \\cdot \\text{s}"
                },
                {
                  "type": "p",
                  "en": "By the impulse-momentum theorem, $J = \\Delta p = mv_f - 0$, so:",
                  "zh": "由冲量-动量定理，$J = \\Delta p = mv_f - 0$，因此："
                },
                {
                  "type": "math",
                  "tex": "v_f = \\frac{J}{m} = \\frac{20}{0.5} = 40\\ \\text{m/s}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Crumple zones and average force",
                "zh": "例题 2：溃缩区与平均力"
              },
              "problem": {
                "en": "A $1200\\ \\text{kg}$ car moving at $15\\ \\text{m/s}$ comes to rest in a crash. (a) If it hits a rigid barrier and stops in $0.1\\ \\text{s}$, find the average force on the car. (b) If a crumple zone stretches the stopping time to $0.6\\ \\text{s}$, find the new average force.",
                "zh": "一辆质量为 $1200\\ \\text{kg}$、速度为 $15\\ \\text{m/s}$ 的汽车在碰撞中停下。(a) 若撞上刚性壁障并在 $0.1\\ \\text{s}$ 内停止，求汽车受到的平均力。(b) 若溃缩区把停止时间延长到 $0.6\\ \\text{s}$，求新的平均力。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The momentum change is the same in both cases:",
                  "zh": "两种情况下动量变化相同："
                },
                {
                  "type": "math",
                  "tex": "|\\Delta p| = mv = (1200)(15) = 18000\\ \\text{kg} \\cdot \\text{m/s}"
                },
                {
                  "type": "math",
                  "tex": "\\text{(a)}\\ F_{avg} = \\frac{18000}{0.1} = 180000\\ \\text{N} \\qquad \\text{(b)}\\ F_{avg} = \\frac{18000}{0.6} = 30000\\ \\text{N}"
                },
                {
                  "type": "p",
                  "en": "Six times the stopping time means one-sixth the average force. The crumple zone does not change $\\Delta p$; it only spreads it over a longer time.",
                  "zh": "停止时间变为 6 倍，平均力就减小为原来的六分之一。溃缩区并没有改变 $\\Delta p$，只是把它分摊到更长的时间里。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which object has the largest momentum magnitude?",
                "zh": "哪个物体的动量大小最大？"
              },
              "choices": [
                "A $0.06\\ \\text{kg}$ tennis ball at $50\\ \\text{m/s}$",
                "A $1500\\ \\text{kg}$ car at rest",
                "A $7\\ \\text{kg}$ bowling ball at $2\\ \\text{m/s}$",
                "A $70\\ \\text{kg}$ sprinter at $10\\ \\text{m/s}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Compute $p = mv$: tennis ball $3$, car $0$, bowling ball $14$, sprinter $700\\ \\text{kg} \\cdot \\text{m/s}$. The car is tempting because of its huge mass, but with $v = 0$ its momentum is zero.",
                "zh": "计算 $p = mv$：网球 $3$，汽车 $0$，保龄球 $14$，短跑运动员 $700\\ \\text{kg} \\cdot \\text{m/s}$。汽车因质量巨大而具有迷惑性，但 $v = 0$ 时动量为零。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On a force-versus-time graph for a collision, the impulse delivered is represented by:",
                "zh": "在碰撞的力-时间图上，所传递的冲量由什么表示？"
              },
              "choices": [
                "The slope of the curve",
                "The peak value of the force",
                "The area between the curve and the time axis",
                "The average of the initial and final forces"
              ],
              "answer": 2,
              "explanation": {
                "en": "Impulse is $F\\Delta t$ accumulated over time, which is the area under the $F$-$t$ curve. The peak force is tempting but two curves with the same peak can enclose very different areas.",
                "zh": "冲量是 $F\\Delta t$ 随时间的累积，即 $F$-$t$ 曲线下的面积。峰值力具有迷惑性，但峰值相同的两条曲线围出的面积可能相差很大。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $0.5\\ \\text{kg}$ ball hits a wall moving at $10\\ \\text{m/s}$ and rebounds along the same line at $8\\ \\text{m/s}$. What is the magnitude of the impulse the wall exerts on the ball, in $\\text{N} \\cdot \\text{s}$? Give an integer.",
                "zh": "一个 $0.5\\ \\text{kg}$ 的球以 $10\\ \\text{m/s}$ 撞墙，并沿原直线以 $8\\ \\text{m/s}$ 反弹。墙对球的冲量大小是多少 $\\text{N} \\cdot \\text{s}$？请填一个整数。"
              },
              "answer": "9",
              "accept": [
                "9.0"
              ],
              "explanation": {
                "en": "Take the initial direction as positive: $\\Delta p = m(v_f - v_i) = 0.5(-8 - 10) = -9\\ \\text{kg} \\cdot \\text{m/s}$, so the magnitude is $9\\ \\text{N} \\cdot \\text{s}$. Forgetting the rebound sign gives the wrong answer $1$.",
                "zh": "取初始方向为正：$\\Delta p = m(v_f - v_i) = 0.5(-8 - 10) = -9\\ \\text{kg} \\cdot \\text{m/s}$，所以大小为 $9\\ \\text{N} \\cdot \\text{s}$。忘记反弹的负号会得到错误答案 $1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An airbag reduces injury in a crash primarily because it:",
                "zh": "安全气囊在碰撞中减轻伤害，主要是因为它："
              },
              "choices": [
                "Reduces the passenger's change in momentum",
                "Increases the stopping time, reducing the average force for the same $\\Delta p$",
                "Reduces the impulse delivered to the passenger",
                "Absorbs the passenger's momentum so it disappears"
              ],
              "answer": 1,
              "explanation": {
                "en": "The passenger's $\\Delta p$ is fixed (initial speed to zero), so the impulse is fixed too. The airbag lengthens $\\Delta t$, and since $F_{avg} = \\Delta p / \\Delta t$, the force drops. Choices A and C are tempting but both $\\Delta p$ and $J$ are unchanged; momentum is transferred, never destroyed.",
                "zh": "乘客的 $\\Delta p$ 是固定的（从初速度变为零），所以冲量也固定。气囊延长了 $\\Delta t$，由 $F_{avg} = \\Delta p / \\Delta t$，力就减小了。选项 A 和 C 有迷惑性，但 $\\Delta p$ 和 $J$ 都没有改变；动量只会转移，不会消失。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "During a kick, the force on a ball rises from $0$ to a peak of $40\\ \\text{N}$ and returns to $0$, forming a triangular force-time graph with total duration $0.3\\ \\text{s}$. What is the impulse delivered in $\\text{N} \\cdot \\text{s}$? Give an integer.",
                "zh": "踢球时，作用在球上的力从 $0$ 升至峰值 $40\\ \\text{N}$ 再回到 $0$，力-时间图为三角形，总时长 $0.3\\ \\text{s}$。传递的冲量是多少 $\\text{N} \\cdot \\text{s}$？请填一个整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "Impulse = area of the triangle $= \\tfrac{1}{2}(0.3)(40) = 6\\ \\text{N} \\cdot \\text{s}$. A common error is using $F_{peak}\\Delta t = 12$, which double-counts because the force is not constant.",
                "zh": "冲量 = 三角形面积 $= \\tfrac{1}{2}(0.3)(40) = 6\\ \\text{N} \\cdot \\text{s}$。常见错误是用 $F_{peak}\\Delta t = 12$，由于力并非恒定，这样会多算一倍。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A bug splatters on the windshield of a fast-moving truck. During the collision, the magnitude of the impulse the truck exerts on the bug is:",
                "zh": "一只小虫撞在快速行驶的卡车挡风玻璃上。碰撞过程中，卡车对小虫的冲量大小："
              },
              "choices": [
                "Much larger than the impulse the bug exerts on the truck",
                "Much smaller than the impulse the bug exerts on the truck",
                "Equal to the impulse the bug exerts on the truck",
                "Zero, since the truck barely changes speed"
              ],
              "answer": 2,
              "explanation": {
                "en": "Newton's third law: the forces are equal and opposite, and the contact time is the same, so the impulses have equal magnitude. The bug's velocity changes enormously only because its mass is tiny. \"The truck hits harder\" is the classic misconception.",
                "zh": "牛顿第三定律：作用力与反作用力大小相等、方向相反，接触时间相同，所以冲量大小相等。小虫速度变化巨大只是因为它质量极小。\"卡车撞得更狠\"是经典误解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a crash, a $60\\ \\text{kg}$ passenger moving at $12\\ \\text{m/s}$ is brought to rest by an airbag over $0.4\\ \\text{s}$. What is the magnitude of the average force on the passenger, in newtons? Give an integer.",
                "zh": "碰撞中，一名 $60\\ \\text{kg}$、速度为 $12\\ \\text{m/s}$ 的乘客被安全气囊在 $0.4\\ \\text{s}$ 内减速到静止。乘客受到的平均力大小是多少牛顿？请填一个整数。"
              },
              "answer": "1800",
              "accept": [
                "1800.0"
              ],
              "explanation": {
                "en": "$F_{avg} = \\frac{\\Delta p}{\\Delta t} = \\frac{(60)(12)}{0.4} = \\frac{720}{0.4} = 1800\\ \\text{N}$.",
                "zh": "$F_{avg} = \\frac{\\Delta p}{\\Delta t} = \\frac{(60)(12)}{0.4} = \\frac{720}{0.4} = 1800\\ \\text{N}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball of clay and a rubber ball have the same mass and hit a wall at the same speed. The clay sticks; the rubber ball bounces straight back at nearly its incoming speed. Which statement is correct?",
                "zh": "一个黏土球和一个橡胶球质量相同，以相同速率撞墙。黏土球粘在墙上；橡胶球以接近入射速率沿原路弹回。哪个说法正确？"
              },
              "choices": [
                "The clay receives the larger impulse because it deforms",
                "The rubber ball receives the larger impulse because its momentum change is nearly twice as large",
                "They receive equal impulses because mass and speed are equal",
                "Neither receives an impulse because the wall does not move"
              ],
              "answer": 1,
              "explanation": {
                "en": "The clay's momentum changes by $mv$ (it stops); the rubber ball's changes by nearly $2mv$ (from $+mv$ to $-mv$). Larger $|\\Delta p|$ means larger impulse. Choice C is tempting, but impulse depends on the change in momentum, not just the incoming momentum.",
                "zh": "黏土球的动量变化为 $mv$（停下）；橡胶球的动量变化接近 $2mv$（从 $+mv$ 变为 $-mv$）。$|\\Delta p|$ 更大意味着冲量更大。选项 C 有迷惑性，但冲量取决于动量的变化，而不只是入射动量。"
              }
            }
          ]
        },
        {
          "id": "collisions-and-center-of-mass",
          "title": "Collisions and Center of Mass",
          "titleZh": "碰撞与质心",
          "content": [
            {
              "type": "h2",
              "en": "Conservation of Momentum",
              "zh": "动量守恒"
            },
            {
              "type": "p",
              "en": "The most powerful idea in this unit: if the net external force on a system is zero, the total momentum of the system does not change. The reason comes from Newton's third law. During a collision, the objects push on each other with equal and opposite forces for the same time, so their impulses cancel within the system — internal forces can shuffle momentum between objects but cannot change the total.",
              "zh": "本单元最强大的思想：如果系统所受合外力为零，系统的总动量就不变。原因来自牛顿第三定律。碰撞时两物体以大小相等、方向相反的力相互作用且时间相同，因此它们的冲量在系统内部相互抵消——内力可以在物体之间重新分配动量，但不能改变总量。"
            },
            {
              "type": "math",
              "tex": "m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}"
            },
            {
              "type": "p",
              "en": "Whether momentum is conserved depends on how you choose the system. For a bullet hitting a block, the system \"bullet + block\" conserves momentum during the collision because the forces between them are internal. The system \"block alone\" does not — the bullet's force on it is external. On the AP exam, always state your system and justify that external forces are negligible during the brief collision.",
              "zh": "动量是否守恒取决于你如何选取系统。子弹击中木块时，\"子弹 + 木块\"系统在碰撞过程中动量守恒，因为二者之间的力是内力。而\"仅木块\"系统则不守恒——子弹对它的力是外力。AP 考试中，务必写明所选系统，并论证在短暂碰撞过程中外力可以忽略。"
            },
            {
              "type": "h3",
              "en": "Three Types of Collisions",
              "zh": "三类碰撞"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Elastic: momentum AND kinetic energy are both conserved. Objects bounce off with no energy lost to heat or deformation (an idealization approached by billiard balls and colliding air-track gliders with repelling magnets).",
                  "zh": "弹性碰撞：动量和动能都守恒。物体弹开，没有能量转化为热或形变（是一种理想化情形，台球、装有互斥磁铁的气轨滑块可近似实现）。"
                },
                {
                  "en": "Inelastic: momentum is conserved, but some kinetic energy is converted to other forms (heat, sound, deformation). The objects separate after colliding.",
                  "zh": "非弹性碰撞：动量守恒，但部分动能转化为其他形式（热、声、形变）。碰后物体分开。"
                },
                {
                  "en": "Perfectly inelastic: the objects stick together and move with one common final velocity. Momentum is conserved; the maximum possible kinetic energy is lost consistent with momentum conservation.",
                  "zh": "完全非弹性碰撞：物体粘在一起，以共同末速度运动。动量守恒；在动量守恒允许的范围内损失的动能最多。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: momentum is conserved in EVERY collision with no net external force — elastic, inelastic, or perfectly inelastic. Kinetic energy is conserved ONLY in elastic collisions. Never start a collision problem with energy conservation unless the problem says the collision is elastic.",
              "zh": "AP 考试提示：只要没有合外力，任何碰撞中动量都守恒——无论弹性、非弹性还是完全非弹性。动能只在弹性碰撞中守恒。除非题目说明碰撞是弹性的，绝不要用能量守恒作为碰撞问题的出发点。"
            },
            {
              "type": "h3",
              "en": "One-Dimensional Calculations and 2D Reasoning",
              "zh": "一维计算与二维定性分析"
            },
            {
              "type": "p",
              "en": "In 1D, write the conservation equation with careful signs, then solve. Two classic special cases: in a perfectly inelastic collision the final velocity is $v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$; in an elastic collision between equal masses where one is at rest, the moving object stops and the target moves off with the incoming velocity (they exchange velocities).",
              "zh": "一维问题中，注意符号写出守恒方程再求解。两个经典特例：完全非弹性碰撞的末速度为 $v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$；等质量弹性碰撞中若目标静止，运动物体停下，目标以入射速度飞出（二者交换速度）。"
            },
            {
              "type": "p",
              "en": "In two dimensions, momentum is conserved separately along each axis. AP Physics 1 asks for qualitative reasoning: if two pucks approach along the $x$-axis, the total $y$-momentum before is zero, so after the collision their $y$-components of momentum must be equal in magnitude and opposite in direction. If one puck deflects upward, the other must deflect downward.",
              "zh": "二维情形中，动量沿每个坐标轴分别守恒。AP 物理 1 只要求定性分析：若两个冰球沿 $x$ 轴相向运动，碰前总 $y$ 方向动量为零，则碰后二者动量的 $y$ 分量必须大小相等、方向相反。若一个冰球向上偏转，另一个必向下偏转。"
            },
            {
              "type": "h3",
              "en": "The Ballistic Pendulum: Momentum First, Then Energy",
              "zh": "弹道摆：先动量，后能量"
            },
            {
              "type": "p",
              "en": "A bullet embeds in a hanging block, which then swings up to height $h$. This is a two-stage problem. Stage 1 (the collision) is perfectly inelastic: use momentum conservation to relate the bullet's speed to the combined speed just after impact. Stage 2 (the swing) has no collision: use energy conservation to relate that combined speed to the rise height. The classic trap is applying energy conservation across the collision itself — enormous kinetic energy is lost to deformation as the bullet embeds, so setting $\\tfrac{1}{2}mv^2 = (m+M)gh$ is wrong.",
              "zh": "子弹嵌入悬挂的木块，木块随后摆升到高度 $h$。这是一个两阶段问题。第一阶段（碰撞）是完全非弹性的：用动量守恒把子弹速度与碰后共同速度联系起来。第二阶段（上摆）没有碰撞：用能量守恒把共同速度与上升高度联系起来。经典陷阱是把能量守恒用在碰撞阶段——子弹嵌入时大量动能因形变而损失，所以令 $\\tfrac{1}{2}mv^2 = (m+M)gh$ 是错误的。"
            },
            {
              "type": "h3",
              "en": "Center of Mass",
              "zh": "质心"
            },
            {
              "type": "p",
              "en": "The center of mass is the mass-weighted average position of a system. For two objects on a line:",
              "zh": "质心是系统质量加权的平均位置。对直线上的两个物体："
            },
            {
              "type": "math",
              "tex": "x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}"
            },
            {
              "type": "p",
              "en": "The center of mass of a system moves as if all the mass were concentrated there and only external forces acted. With no net external force, the center of mass moves at constant velocity — no matter how violently the parts collide or explode. A firework shell's fragments spread out, but their center of mass keeps following the original parabola; two carts pushed apart by a spring from rest fly off in opposite directions, but their center of mass stays put.",
              "zh": "系统质心的运动就如同全部质量集中于该点、只受外力作用一样。没有合外力时，质心以恒定速度运动——无论各部分如何剧烈地碰撞或爆炸。烟花弹的碎片四散，但它们的质心仍沿原来的抛物线运动；两辆由弹簧从静止弹开的小车向相反方向飞出，但质心保持不动。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A perfectly inelastic collision",
                "zh": "例题 1：完全非弹性碰撞"
              },
              "problem": {
                "en": "A $4\\ \\text{kg}$ cart moving at $5\\ \\text{m/s}$ collides with a stationary $6\\ \\text{kg}$ cart and they stick together. Find their common final speed and the kinetic energy lost.",
                "zh": "一辆 $4\\ \\text{kg}$、速度 $5\\ \\text{m/s}$ 的小车与一辆静止的 $6\\ \\text{kg}$ 小车相撞并粘在一起。求共同末速率及损失的动能。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Momentum conservation for the two-cart system:",
                  "zh": "对两车系统应用动量守恒："
                },
                {
                  "type": "math",
                  "tex": "(4)(5) + (6)(0) = (4 + 6)v_f \\quad\\Rightarrow\\quad v_f = \\frac{20}{10} = 2\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "Compare kinetic energies before and after:",
                  "zh": "比较碰撞前后的动能："
                },
                {
                  "type": "math",
                  "tex": "K_i = \\tfrac{1}{2}(4)(5)^2 = 50\\ \\text{J}, \\qquad K_f = \\tfrac{1}{2}(10)(2)^2 = 20\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "So $30\\ \\text{J}$ (60% of the initial kinetic energy) is converted to heat, sound, and deformation. Momentum is fully conserved; kinetic energy is not.",
                  "zh": "因此 $30\\ \\text{J}$（初动能的 60%）转化为热、声和形变。动量完全守恒；动能则不守恒。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: The ballistic pendulum",
                "zh": "例题 2：弹道摆"
              },
              "problem": {
                "en": "A $0.02\\ \\text{kg}$ bullet embeds in a $0.98\\ \\text{kg}$ block hanging from light strings. The block (with bullet) swings up a height of $0.1\\ \\text{m}$. Use $g = 9.8\\ \\text{m/s}^2$ to find the bullet's initial speed.",
                "zh": "一颗 $0.02\\ \\text{kg}$ 的子弹嵌入一个由轻绳悬挂的 $0.98\\ \\text{kg}$ 木块中。木块（连同子弹）摆升 $0.1\\ \\text{m}$。取 $g = 9.8\\ \\text{m/s}^2$，求子弹的初速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Stage 2 first (the swing): energy conservation gives the speed just after impact.",
                  "zh": "先看第二阶段（上摆）：由能量守恒求碰后瞬间的速度。"
                },
                {
                  "type": "math",
                  "tex": "\\tfrac{1}{2}(m+M)V^2 = (m+M)gh \\quad\\Rightarrow\\quad V = \\sqrt{2(9.8)(0.1)} = 1.4\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "Stage 1 (the collision): momentum conservation, with the block initially at rest.",
                  "zh": "第一阶段（碰撞）：木块初始静止，用动量守恒。"
                },
                {
                  "type": "math",
                  "tex": "(0.02)v = (0.02 + 0.98)(1.4) \\quad\\Rightarrow\\quad v = \\frac{1.4}{0.02} = 70\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "Check the trap: setting the bullet's initial kinetic energy equal to $(m+M)gh$ would give $v \\approx 9.9\\ \\text{m/s}$ — wrong, because $\\tfrac{1}{2}(0.02)(70)^2 = 49\\ \\text{J}$ shrinks to just $\\tfrac{1}{2}(1)(1.4)^2 = 0.98\\ \\text{J}$ in the collision. Over 98% of the kinetic energy is lost as the bullet embeds.",
                  "zh": "检验陷阱：若令子弹初动能等于 $(m+M)gh$，会得出 $v \\approx 9.9\\ \\text{m/s}$——这是错的，因为碰撞中 $\\tfrac{1}{2}(0.02)(70)^2 = 49\\ \\text{J}$ 骤减为 $\\tfrac{1}{2}(1)(1.4)^2 = 0.98\\ \\text{J}$。子弹嵌入过程损失了超过 98% 的动能。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In a perfectly inelastic collision between two carts on a frictionless track, which quantity is conserved for the two-cart system?",
                "zh": "在无摩擦轨道上两辆小车发生完全非弹性碰撞，对两车系统而言，哪个量守恒？"
              },
              "choices": [
                "Kinetic energy only",
                "Momentum only",
                "Both momentum and kinetic energy",
                "Neither momentum nor kinetic energy"
              ],
              "answer": 1,
              "explanation": {
                "en": "With no net external force, momentum is conserved in every collision. Kinetic energy is lost when the carts stick together, so it is not conserved. \"Both\" is tempting because both are conservation laws, but kinetic energy conservation requires an elastic collision.",
                "zh": "没有合外力时，任何碰撞中动量都守恒。小车粘在一起时动能有损失，故动能不守恒。\"两者都守恒\"有迷惑性，因为二者都是守恒定律，但动能守恒要求弹性碰撞。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $2\\ \\text{kg}$ cart moving at $6\\ \\text{m/s}$ hits a stationary $4\\ \\text{kg}$ cart and they stick together. What is their common speed in m/s? Give an integer.",
                "zh": "一辆 $2\\ \\text{kg}$、速度 $6\\ \\text{m/s}$ 的小车撞上一辆静止的 $4\\ \\text{kg}$ 小车并粘在一起。它们的共同速率是多少 m/s？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "$v_f = \\frac{(2)(6) + (4)(0)}{2 + 4} = \\frac{12}{6} = 2\\ \\text{m/s}$.",
                "zh": "$v_f = \\frac{(2)(6) + (4)(0)}{2 + 4} = \\frac{12}{6} = 2\\ \\text{m/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A billiard ball moving at speed $v$ strikes an identical stationary ball head-on in an elastic collision. Immediately after the collision:",
                "zh": "一个以速率 $v$ 运动的台球与一个完全相同的静止台球发生正碰（弹性碰撞）。碰撞后瞬间："
              },
              "choices": [
                "Both balls move forward at $v/2$",
                "The incoming ball stops and the target moves at $v$",
                "The incoming ball rebounds at $v$ and the target stays at rest",
                "Both balls move forward at $v$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Equal masses in an elastic head-on collision exchange velocities: this is the only outcome conserving both momentum ($mv$) and kinetic energy ($\\tfrac{1}{2}mv^2$). Choice A conserves momentum but only half the kinetic energy — that is the perfectly inelastic result, not the elastic one.",
                "zh": "等质量弹性正碰中两球交换速度：这是唯一同时满足动量守恒（$mv$）和动能守恒（$\\tfrac{1}{2}mv^2$）的结果。选项 A 满足动量守恒但动能只剩一半——那是完全非弹性碰撞的结果，不是弹性碰撞。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $200\\ \\text{kg}$ cannon at rest on frictionless ice fires a $5\\ \\text{kg}$ ball horizontally at $80\\ \\text{m/s}$. What is the recoil speed of the cannon in m/s? Give an integer.",
                "zh": "一门 $200\\ \\text{kg}$ 的大炮静止在无摩擦的冰面上，水平发射一枚 $5\\ \\text{kg}$、速率 $80\\ \\text{m/s}$ 的炮弹。大炮的后坐速率是多少 m/s？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Total momentum starts at zero, so $(200)v_{cannon} = (5)(80) = 400$, giving $v_{cannon} = 2\\ \\text{m/s}$ opposite the ball. An \"explosion\" is momentum conservation run in reverse of a perfectly inelastic collision.",
                "zh": "总动量初始为零，故 $(200)v_{cannon} = (5)(80) = 400$，得 $v_{cannon} = 2\\ \\text{m/s}$，方向与炮弹相反。\"爆炸\"就是完全非弹性碰撞的逆过程，同样用动量守恒。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a ballistic pendulum experiment, a bullet embeds in a hanging block which swings up a height $h$. Why is it WRONG to set the bullet's initial kinetic energy equal to the final gravitational potential energy?",
                "zh": "在弹道摆实验中，子弹嵌入悬挂的木块，木块摆升高度 $h$。为什么令子弹的初动能等于末重力势能是错误的？"
              },
              "choices": [
                "Momentum is not conserved during the swing",
                "Kinetic energy is lost to deformation during the perfectly inelastic collision",
                "Gravitational potential energy depends on the path taken",
                "The strings exert a net impulse during the collision"
              ],
              "answer": 1,
              "explanation": {
                "en": "The embedding collision is perfectly inelastic, so most of the bullet's kinetic energy becomes heat and deformation — energy conservation fails across the collision. Use momentum for the collision, then energy for the swing. Choice A is backwards: it is during the swing that energy conservation works.",
                "zh": "嵌入过程是完全非弹性碰撞，子弹的大部分动能变成热和形变——能量守恒在碰撞阶段不成立。碰撞阶段用动量，上摆阶段用能量。选项 A 恰好说反了：能量守恒正是在上摆阶段成立。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $2\\ \\text{kg}$ mass sits at $x = 0$ and a $3\\ \\text{kg}$ mass sits at $x = 5\\ \\text{m}$. Where is the center of mass, in meters? Give an integer.",
                "zh": "一个 $2\\ \\text{kg}$ 的物体位于 $x = 0$，一个 $3\\ \\text{kg}$ 的物体位于 $x = 5\\ \\text{m}$。质心位于何处（单位：米）？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "$x_{cm} = \\frac{(2)(0) + (3)(5)}{2 + 3} = \\frac{15}{5} = 3\\ \\text{m}$ — closer to the heavier mass, as it must be.",
                "zh": "$x_{cm} = \\frac{(2)(0) + (3)(5)}{2 + 3} = \\frac{15}{5} = 3\\ \\text{m}$——更靠近较重的物体，理应如此。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two identical pucks slide toward each other along the $x$-axis on frictionless ice and collide off-center. After the collision, puck 1 moves at $30°$ above the $+x$-axis. Which statement about puck 2 must be true?",
                "zh": "两个完全相同的冰球在无摩擦冰面上沿 $x$ 轴相向滑行并发生偏心碰撞。碰后冰球 1 沿 $+x$ 轴上方 $30°$ 方向运动。关于冰球 2，下列哪个说法一定正确？"
              },
              "choices": [
                "It also moves above the $x$-axis to balance puck 1",
                "Its $y$-component of momentum is equal in magnitude and opposite to puck 1's",
                "It must move along the $-x$-axis exactly",
                "It must come to rest"
              ],
              "answer": 1,
              "explanation": {
                "en": "The total $y$-momentum before the collision is zero (both pucks move along $x$), so the final $y$-components must cancel: puck 2 moves below the axis with an equal and opposite $p_y$. Choice A violates $y$-momentum conservation; C and D are possible only for special speeds, not required.",
                "zh": "碰前总 $y$ 方向动量为零（两球都沿 $x$ 轴运动），所以碰后 $y$ 分量必须相互抵消：冰球 2 在轴下方运动，$p_y$ 大小相等、方向相反。选项 A 违反 $y$ 方向动量守恒；C 和 D 只在特殊速率下才可能，并非必然。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Students collide two carts on a level, low-friction track. Cart A ($1\\ \\text{kg}$) moves at $4\\ \\text{m/s}$ toward stationary cart B ($2\\ \\text{kg}$). After the collision, A is at rest and B moves at $2\\ \\text{m/s}$. What kind of collision was this?",
                "zh": "学生让两辆小车在水平低摩擦轨道上碰撞。小车 A（$1\\ \\text{kg}$）以 $4\\ \\text{m/s}$ 冲向静止的小车 B（$2\\ \\text{kg}$）。碰后 A 静止，B 以 $2\\ \\text{m/s}$ 运动。这是哪种碰撞？"
              },
              "choices": [
                "Elastic",
                "Perfectly inelastic",
                "Inelastic but not perfectly inelastic",
                "Momentum was not conserved, so it was not a valid collision"
              ],
              "answer": 2,
              "explanation": {
                "en": "Check momentum: before $(1)(4) = 4$; after $(2)(2) = 4$ — conserved, as it must be. Check kinetic energy: before $\\tfrac{1}{2}(1)(4)^2 = 8\\ \\text{J}$; after $\\tfrac{1}{2}(2)(2)^2 = 4\\ \\text{J}$ — half was lost, so not elastic. The carts do not move together afterward ($0 \\neq 2\\ \\text{m/s}$), so not perfectly inelastic. Choice A is tempting if you only check momentum, which is conserved in every collision type.",
                "zh": "检验动量：碰前 $(1)(4) = 4$；碰后 $(2)(2) = 4$——守恒，这是必然的。检验动能：碰前 $\\tfrac{1}{2}(1)(4)^2 = 8\\ \\text{J}$；碰后 $\\tfrac{1}{2}(2)(2)^2 = 4\\ \\text{J}$——损失一半，故不是弹性碰撞。碰后两车速度不同（$0 \\neq 2\\ \\text{m/s}$），未粘在一起，故也不是完全非弹性碰撞。若只检验动量会误选 A，但动量在任何类型的碰撞中都守恒。"
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
          "id": "rotational-kinematics-torque",
          "title": "Rotational Kinematics and Torque",
          "titleZh": "转动运动学与力矩",
          "content": [
            {
              "type": "h2",
              "en": "From Linear to Rotational Motion",
              "zh": "从平动到转动"
            },
            {
              "type": "p",
              "en": "A spinning wheel, a swinging door, a planet turning on its axis — rotating objects need their own language of motion. The good news: every rotational quantity is a direct analog of a linear one. Angular position $\\theta$ plays the role of position $x$, angular velocity $\\omega$ plays the role of velocity $v$, and angular acceleration $\\alpha$ plays the role of acceleration $a$. Angles are measured in radians: one full revolution is $2\\pi$ radians.",
              "zh": "旋转的车轮、转动的门、绕轴自转的行星——转动的物体需要一套自己的运动语言。好消息是：每一个转动量都与某个平动量一一对应。角位置 $\\theta$ 对应位置 $x$，角速度 $\\omega$ 对应速度 $v$，角加速度 $\\alpha$ 对应加速度 $a$。角度用弧度度量：一整圈是 $2\\pi$ 弧度。"
            },
            {
              "type": "h3",
              "en": "Angular Position, Velocity, and Acceleration",
              "zh": "角位置、角速度与角加速度"
            },
            {
              "type": "p",
              "en": "Angular position $\\theta$ tells you how far an object has rotated from a reference line; a point at radius $r$ sweeps out an arc length $s = r\\theta$. Angular velocity $\\omega$ (in rad/s) is the rate of change of angle, and angular acceleration $\\alpha$ (in rad/s$^2$) is the rate of change of angular velocity.",
              "zh": "角位置 $\\theta$ 表示物体相对参考线转过了多少角度；半径为 $r$ 处的点扫过的弧长为 $s = r\\theta$。角速度 $\\omega$（单位 rad/s）是角度的变化率，角加速度 $\\alpha$（单位 rad/s$^2$）是角速度的变化率。"
            },
            {
              "type": "math",
              "tex": "\\omega_{avg} = \\frac{\\Delta\\theta}{\\Delta t} \\qquad \\alpha_{avg} = \\frac{\\Delta\\omega}{\\Delta t}"
            },
            {
              "type": "p",
              "en": "When $\\alpha$ is constant, the rotational kinematic equations have exactly the same form as the linear ones — just swap $x \\to \\theta$, $v \\to \\omega$, $a \\to \\alpha$. Everything you know about choosing the equation that avoids the unwanted variable carries over.",
              "zh": "当 $\\alpha$ 恒定时，转动运动学方程与平动方程形式完全相同——只需把 $x \\to \\theta$、$v \\to \\omega$、$a \\to \\alpha$。你所熟悉的“选择避开无关变量的方程”策略同样适用。"
            },
            {
              "type": "math",
              "tex": "\\omega = \\omega_0 + \\alpha t"
            },
            {
              "type": "math",
              "tex": "\\Delta\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2"
            },
            {
              "type": "math",
              "tex": "\\omega^2 = \\omega_0^2 + 2\\alpha\\,\\Delta\\theta"
            },
            {
              "type": "h3",
              "en": "Connecting Linear and Angular Quantities",
              "zh": "联系线量与角量"
            },
            {
              "type": "p",
              "en": "Every point on a rigid rotating object has the same $\\omega$ and the same $\\alpha$, but points farther from the axis move faster. A point at radius $r$ has linear speed $v = r\\omega$ and tangential acceleration $a_t = r\\alpha$.",
              "zh": "刚体上每一点都具有相同的 $\\omega$ 和相同的 $\\alpha$，但离轴越远的点线速度越大。半径为 $r$ 处的点线速度为 $v = r\\omega$，切向加速度为 $a_t = r\\alpha$。"
            },
            {
              "type": "math",
              "tex": "v = r\\omega \\qquad a_t = r\\alpha"
            },
            {
              "type": "note",
              "en": "AP exam tip: the relations $v = r\\omega$ and $a_t = r\\alpha$ only work when $\\omega$ and $\\alpha$ are in radian units. If a problem gives revolutions or rpm, convert first ($1\\ \\text{rev} = 2\\pi\\ \\text{rad}$). Forgetting this conversion is one of the most common rotational errors.",
              "zh": "AP 考试提示：关系式 $v = r\\omega$ 和 $a_t = r\\alpha$ 仅在 $\\omega$ 与 $\\alpha$ 采用弧度单位时成立。若题目给的是转数或转/分，先换算（$1\\ \\text{rev} = 2\\pi\\ \\text{rad}$）。忘记换算是转动问题中最常见的错误之一。"
            },
            {
              "type": "h2",
              "en": "Torque",
              "zh": "力矩"
            },
            {
              "type": "p",
              "en": "A force changes an object's linear motion; a torque changes its rotational motion. Torque measures the turning effectiveness of a force, and it depends on three things: how large the force is, how far from the axis it is applied, and at what angle. If the force $F$ acts at distance $r$ from the axis, making angle $\\theta$ with the line from the axis to the point of application, then",
              "zh": "力改变物体的平动；力矩改变物体的转动。力矩衡量一个力的转动效果，它取决于三点：力的大小、作用点离转轴多远、以及作用的角度。若大小为 $F$ 的力作用在距轴 $r$ 处，与从轴指向作用点的连线成 $\\theta$ 角，则"
            },
            {
              "type": "math",
              "tex": "\\tau = rF\\sin\\theta"
            },
            {
              "type": "p",
              "en": "An equivalent picture uses the lever arm: extend the force's line of action, then measure the perpendicular distance $r_{\\perp} = r\\sin\\theta$ from the axis to that line. Then $\\tau = r_{\\perp}F$. A force whose line of action passes through the axis has zero lever arm and produces zero torque — no matter how large the force is.",
              "zh": "一个等价的图像是力臂：延长力的作用线，量出转轴到该作用线的垂直距离 $r_{\\perp} = r\\sin\\theta$，则 $\\tau = r_{\\perp}F$。作用线穿过转轴的力力臂为零，产生的力矩为零——无论力有多大。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Torque is maximized when the force is perpendicular to $r$ ($\\theta = 90^\\circ$, so $\\sin\\theta = 1$).",
                  "zh": "当力垂直于 $r$（$\\theta = 90^\\circ$，$\\sin\\theta = 1$）时力矩最大。"
                },
                {
                  "en": "Torque is zero when the force points along the line through the axis ($\\theta = 0^\\circ$ or $180^\\circ$).",
                  "zh": "当力沿通过转轴的直线方向（$\\theta = 0^\\circ$ 或 $180^\\circ$）时力矩为零。"
                },
                {
                  "en": "SI unit: newton-meter (N·m). Assign a sign by rotation direction — for example counterclockwise positive, clockwise negative.",
                  "zh": "SI 单位：牛·米（N·m）。按转动方向规定正负——例如逆时针为正，顺时针为负。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Static Equilibrium",
              "zh": "静力平衡"
            },
            {
              "type": "p",
              "en": "An extended object is in static equilibrium when it neither accelerates nor starts to rotate. Two independent conditions must both hold: the net force is zero, and the net torque about any axis is zero. For a uniform object, gravity acts at its center of mass.",
              "zh": "当一个有大小的物体既不平动加速也不开始转动时，它处于静力平衡。两个独立条件必须同时满足：合力为零，且对任意轴的合力矩为零。对匀质物体，重力作用在其质心上。"
            },
            {
              "type": "math",
              "tex": "\\sum F = 0 \\qquad \\sum \\tau = 0"
            },
            {
              "type": "note",
              "en": "AP exam tip: you may compute torques about ANY point, so choose the pivot where an unknown force acts — that force then has zero lever arm and drops out of the torque equation. This one choice often turns a two-unknown problem into a one-unknown problem.",
              "zh": "AP 考试提示：力矩可以对任意一点计算，因此把支点选在未知力的作用点上——该力的力臂为零，自动从力矩方程中消失。这一个选择常能把双未知量问题变成单未知量问题。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Rotational kinematics of a wheel",
                "zh": "例题 1：车轮的转动运动学"
              },
              "problem": {
                "en": "A wheel of radius $0.50\\ \\text{m}$ starts from rest and speeds up with a constant angular acceleration of $4.0\\ \\text{rad/s}^2$ for $5.0\\ \\text{s}$. Find (a) its final angular velocity, (b) the angle it turns through, and (c) the final linear speed of a point on the rim.",
                "zh": "一个半径为 $0.50\\ \\text{m}$ 的车轮由静止开始，以恒定角加速度 $4.0\\ \\text{rad/s}^2$ 加速 $5.0\\ \\text{s}$。求 (a) 末角速度，(b) 转过的角度，(c) 轮缘上一点的末线速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) With $\\omega_0 = 0$:",
                  "zh": "(a) 由 $\\omega_0 = 0$："
                },
                {
                  "type": "math",
                  "tex": "\\omega = \\omega_0 + \\alpha t = 0 + (4.0)(5.0) = 20\\ \\text{rad/s}"
                },
                {
                  "type": "p",
                  "en": "(b) The angle swept out:",
                  "zh": "(b) 转过的角度："
                },
                {
                  "type": "math",
                  "tex": "\\Delta\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2 = 0 + \\tfrac{1}{2}(4.0)(5.0)^2 = 50\\ \\text{rad}"
                },
                {
                  "type": "p",
                  "en": "(c) A rim point at $r = 0.50\\ \\text{m}$ moves at $v = r\\omega = (0.50)(20) = 10\\ \\text{m/s}$.",
                  "zh": "(c) 轮缘上 $r = 0.50\\ \\text{m}$ 处的点速度为 $v = r\\omega = (0.50)(20) = 10\\ \\text{m/s}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Balancing a seesaw",
                "zh": "例题 2：跷跷板的平衡"
              },
              "problem": {
                "en": "A uniform plank of mass $10\\ \\text{kg}$ pivots at its center. A $30\\ \\text{kg}$ child sits $1.2\\ \\text{m}$ to the left of the pivot. Where must a $40\\ \\text{kg}$ child sit so the plank balances horizontally?",
                "zh": "一块质量为 $10\\ \\text{kg}$ 的匀质木板以其中心为支点。一名 $30\\ \\text{kg}$ 的孩子坐在支点左侧 $1.2\\ \\text{m}$ 处。一名 $40\\ \\text{kg}$ 的孩子必须坐在何处才能使木板水平平衡？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The plank is uniform and pivoted at its center, so its own weight acts at the pivot and contributes zero torque. Balance requires the counterclockwise torque from the lighter child to equal the clockwise torque from the heavier child. Both weights act perpendicular to the horizontal plank, so each torque is simply (weight)$\\times$(distance).",
                  "zh": "木板匀质且支点在中心，其自身重力作用在支点上，力矩为零。平衡要求较轻孩子产生的逆时针力矩等于较重孩子产生的顺时针力矩。两个重力都垂直于水平木板，因此每个力矩就是（重力）$\\times$（距离）。"
                },
                {
                  "type": "math",
                  "tex": "m_1 g\\, d_1 = m_2 g\\, d_2 \\;\\Rightarrow\\; (30)(1.2) = (40)\\,d_2"
                },
                {
                  "type": "math",
                  "tex": "d_2 = \\frac{36}{40} = 0.90\\ \\text{m}"
                },
                {
                  "type": "p",
                  "en": "The heavier child sits $0.90\\ \\text{m}$ to the right of the pivot — closer to the pivot, because a larger weight needs a shorter lever arm. Note that $g$ cancelled from both sides.",
                  "zh": "较重的孩子坐在支点右侧 $0.90\\ \\text{m}$ 处——更靠近支点，因为更大的重力只需更短的力臂。注意 $g$ 在两边约掉了。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which rotational quantity is the analog of linear velocity $v$?",
                "zh": "哪个转动量是线速度 $v$ 的对应量？"
              },
              "choices": [
                "Angular position $\\theta$",
                "Angular velocity $\\omega$",
                "Angular acceleration $\\alpha$",
                "Torque $\\tau$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The analogies are $x \\leftrightarrow \\theta$, $v \\leftrightarrow \\omega$, $a \\leftrightarrow \\alpha$. Torque is tempting because it also drives rotation, but torque is the analog of force, not of velocity.",
                "zh": "对应关系为 $x \\leftrightarrow \\theta$、$v \\leftrightarrow \\omega$、$a \\leftrightarrow \\alpha$。力矩容易被误选，因为它也驱动转动，但力矩对应的是力，而不是速度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A fan blade spins at $2\\ \\text{rad/s}$ and speeds up with constant angular acceleration $3\\ \\text{rad/s}^2$ for $4\\ \\text{s}$. What is its final angular velocity in rad/s? Give an integer.",
                "zh": "一片风扇叶以 $2\\ \\text{rad/s}$ 转动，并以恒定角加速度 $3\\ \\text{rad/s}^2$ 加速 $4\\ \\text{s}$。末角速度是多少 rad/s？请填一个整数。"
              },
              "answer": "14",
              "accept": [
                "14.0"
              ],
              "explanation": {
                "en": "$\\omega = \\omega_0 + \\alpha t = 2 + (3)(4) = 14\\ \\text{rad/s}$.",
                "zh": "$\\omega = \\omega_0 + \\alpha t = 2 + (3)(4) = 14\\ \\text{rad/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two children ride a spinning merry-go-round: child A at radius $r$ and child B at radius $2r$. Which statement is correct?",
                "zh": "两个孩子乘坐旋转木马：孩子 A 在半径 $r$ 处，孩子 B 在半径 $2r$ 处。哪个说法正确？"
              },
              "choices": [
                "B has twice the angular velocity of A",
                "A and B have the same linear speed",
                "A and B have the same angular velocity, but B moves twice as fast",
                "B has half the linear speed of A"
              ],
              "answer": 2,
              "explanation": {
                "en": "All points on a rigid rotating object share the same $\\omega$. Linear speed is $v = r\\omega$, so doubling the radius doubles the speed. The first choice is tempting because B clearly \"moves more,\" but what differs is $v$, not $\\omega$.",
                "zh": "刚体上所有点具有相同的 $\\omega$。线速度 $v = r\\omega$，半径加倍则线速度加倍。第一个选项容易误选，因为 B 显然“动得更快”，但不同的是 $v$，而不是 $\\omega$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A turntable starts from rest with constant angular acceleration $2\\ \\text{rad/s}^2$. Through what angle in radians has it turned after $3\\ \\text{s}$? Give an integer.",
                "zh": "一个转盘由静止开始，角加速度恒为 $2\\ \\text{rad/s}^2$。$3\\ \\text{s}$ 后它转过多少弧度？请填一个整数。"
              },
              "answer": "9",
              "accept": [
                "9.0"
              ],
              "explanation": {
                "en": "$\\Delta\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2 = 0 + \\tfrac{1}{2}(2)(3)^2 = 9\\ \\text{rad}$.",
                "zh": "$\\Delta\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2 = 0 + \\tfrac{1}{2}(2)(3)^2 = 9\\ \\text{rad}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To open a heavy door with the least force, you should push:",
                "zh": "要用最小的力推开一扇重门，你应该："
              },
              "choices": [
                "Far from the hinges, perpendicular to the door",
                "Far from the hinges, at $30^\\circ$ to the door surface",
                "Near the hinges, perpendicular to the door",
                "Anywhere, as long as you push toward the hinges"
              ],
              "answer": 0,
              "explanation": {
                "en": "Torque is $\\tau = rF\\sin\\theta$, so for a given required torque, the force is smallest when $r$ is largest and $\\sin\\theta = 1$ (perpendicular push). Pushing toward the hinges sends the line of action through the axis, giving zero torque no matter how hard you push.",
                "zh": "力矩为 $\\tau = rF\\sin\\theta$，要产生给定的力矩，当 $r$ 最大且 $\\sin\\theta = 1$（垂直推）时所需的力最小。朝铰链方向推时作用线穿过转轴，无论多用力力矩都为零。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A force of $50\\ \\text{N}$ is applied to the end of a wrench $0.6\\ \\text{m}$ from the bolt, at $30^\\circ$ to the wrench handle. What is the magnitude of the torque in N·m? Give an integer.",
                "zh": "一个 $50\\ \\text{N}$ 的力作用在扳手末端，距螺栓 $0.6\\ \\text{m}$，与扳手柄成 $30^\\circ$ 角。力矩大小是多少 N·m？请填一个整数。"
              },
              "answer": "15",
              "accept": [
                "15.0"
              ],
              "explanation": {
                "en": "$\\tau = rF\\sin\\theta = (0.6)(50)\\sin 30^\\circ = (0.6)(50)(0.5) = 15\\ \\text{N·m}$. A common mistake is forgetting the $\\sin\\theta$ factor and answering $30\\ \\text{N·m}$.",
                "zh": "$\\tau = rF\\sin\\theta = (0.6)(50)\\sin 30^\\circ = (0.6)(50)(0.5) = 15\\ \\text{N·m}$。常见错误是漏掉 $\\sin\\theta$ 因子而答 $30\\ \\text{N·m}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A $60\\ \\text{kg}$ adult sits $2.0\\ \\text{m}$ to the left of a seesaw's central pivot. How far to the right of the pivot must a $40\\ \\text{kg}$ child sit to balance it? (Neglect the board's own torque.)",
                "zh": "一名 $60\\ \\text{kg}$ 的成人坐在跷跷板中央支点左侧 $2.0\\ \\text{m}$ 处。一名 $40\\ \\text{kg}$ 的孩子必须坐在支点右侧多远处才能平衡？（忽略板自身的力矩。）"
              },
              "choices": [
                "$1.5\\ \\text{m}$",
                "$2.0\\ \\text{m}$",
                "$2.5\\ \\text{m}$",
                "$3.0\\ \\text{m}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Balanced torques: $(60)(2.0) = (40)d$, so $d = 120/40 = 3.0\\ \\text{m}$. The choice $1.5\\ \\text{m}$ is tempting if you invert the ratio — but the lighter person must sit FARTHER from the pivot, not closer.",
                "zh": "力矩平衡：$(60)(2.0) = (40)d$，故 $d = 120/40 = 3.0\\ \\text{m}$。若把比例弄反会误选 $1.5\\ \\text{m}$——但较轻的人必须坐得离支点更远，而不是更近。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A uniform $8.0\\ \\text{m}$ beam of mass $40\\ \\text{kg}$ rests horizontally on supports at its two ends. A $60\\ \\text{kg}$ person stands $2.0\\ \\text{m}$ from the left end. Taking $g = 10\\ \\text{m/s}^2$, what force does the right support exert?",
                "zh": "一根 $8.0\\ \\text{m}$、质量 $40\\ \\text{kg}$ 的匀质横梁水平放置在两端的支座上。一名 $60\\ \\text{kg}$ 的人站在距左端 $2.0\\ \\text{m}$ 处。取 $g = 10\\ \\text{m/s}^2$，右支座施加多大的力？"
              },
              "choices": [
                "$500\\ \\text{N}$",
                "$350\\ \\text{N}$",
                "$650\\ \\text{N}$",
                "$250\\ \\text{N}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Take torques about the left support so its unknown force drops out: $N_R(8.0) = (400)(4.0) + (600)(2.0) = 1600 + 1200 = 2800$, giving $N_R = 350\\ \\text{N}$. The answer $650\\ \\text{N}$ is the LEFT support force ($1000 - 350$), a classic mix-up; $500\\ \\text{N}$ wrongly assumes the load splits evenly.",
                "zh": "对左支座取矩，使其未知力消去：$N_R(8.0) = (400)(4.0) + (600)(2.0) = 1600 + 1200 = 2800$，得 $N_R = 350\\ \\text{N}$。$650\\ \\text{N}$ 是左支座的力（$1000 - 350$），是典型的混淆；$500\\ \\text{N}$ 则错误地假设载荷平均分配。"
              }
            }
          ]
        },
        {
          "id": "rotational-inertia-dynamics",
          "title": "Rotational Inertia and Newton's Second Law for Rotation",
          "titleZh": "转动惯量与转动第二定律",
          "content": [
            {
              "type": "h2",
              "en": "Why Mass Distribution Matters",
              "zh": "质量分布为何重要"
            },
            {
              "type": "p",
              "en": "Take two wheels with the same mass and the same radius: one a hoop with all its mass at the rim, the other a solid disk with mass spread evenly. The hoop is noticeably harder to spin up. Mass alone does not determine resistance to rotational change — WHERE the mass sits relative to the axis matters. This resistance is called rotational inertia (moment of inertia), symbol $I$.",
              "zh": "取两个质量相同、半径相同的轮子：一个是质量全部集中在边缘的圆环，另一个是质量均匀分布的实心圆盘。圆环明显更难加速转动。仅有质量并不能决定物体抵抗转动变化的能力——质量相对转轴分布在哪里才是关键。这种抵抗能力叫做转动惯量，符号为 $I$。"
            },
            {
              "type": "h3",
              "en": "Rotational Inertia",
              "zh": "转动惯量"
            },
            {
              "type": "p",
              "en": "For a collection of point masses, rotational inertia adds up each mass times the square of its distance from the axis. Because the distance is squared, mass far from the axis counts much more than mass near it. The SI unit is kg·m$^2$, and the value depends on which axis you rotate about.",
              "zh": "对一组质点，转动惯量等于每个质量乘以它到转轴距离的平方再求和。由于距离取平方，远离转轴的质量比靠近转轴的质量贡献大得多。SI 单位是 kg·m$^2$，其数值取决于绕哪条轴转动。"
            },
            {
              "type": "math",
              "tex": "I = \\sum m r^2"
            },
            {
              "type": "p",
              "en": "For continuous objects the formulas below are simply given (deriving them requires calculus, which AP Physics 1 does not use). What matters is comparing the coefficients: they tell you what fraction of the mass is effectively far from the axis.",
              "zh": "对连续物体，下列公式直接给出（推导需要微积分，AP 物理 1 不要求）。重要的是比较系数：它们反映了有效分布在远离转轴处的质量比例。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Hoop about its center: $I = MR^2$ (all mass at the rim — the largest possible for given $M$, $R$).",
                  "zh": "圆环绕中心轴：$I = MR^2$（质量全在边缘——给定 $M$、$R$ 时的最大值）。"
                },
                {
                  "en": "Solid disk or cylinder about its center: $I = \\frac{1}{2}MR^2$.",
                  "zh": "实心圆盘或圆柱绕中心轴：$I = \\frac{1}{2}MR^2$。"
                },
                {
                  "en": "Solid sphere about its center: $I = \\frac{2}{5}MR^2$.",
                  "zh": "实心球绕过球心的轴：$I = \\frac{2}{5}MR^2$。"
                },
                {
                  "en": "Uniform rod about its center: $I = \\frac{1}{12}ML^2$; about one end: $I = \\frac{1}{3}ML^2$.",
                  "zh": "匀质杆绕中心：$I = \\frac{1}{12}ML^2$；绕一端：$I = \\frac{1}{3}ML^2$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: rotational inertia formulas for specific shapes are provided in the problem when needed — you never derive them. But you ARE expected to reason with them: the same rod is four times harder to angularly accelerate about its end than about its center ($\\frac{1}{3} \\div \\frac{1}{12} = 4$), because pivoting at the end puts more of the mass far from the axis.",
              "zh": "AP 考试提示：具体形状的转动惯量公式在需要时会在题目中给出——你不需要推导。但你必须会运用它们进行推理：同一根杆绕端点比绕中心难以获得角加速度四倍（$\\frac{1}{3} \\div \\frac{1}{12} = 4$），因为以端点为轴时更多质量远离转轴。"
            },
            {
              "type": "h3",
              "en": "Newton's Second Law for Rotation",
              "zh": "转动第二定律"
            },
            {
              "type": "p",
              "en": "Just as a net force produces linear acceleration through $F_{net} = ma$, a net torque produces angular acceleration. Rotational inertia plays the role of mass:",
              "zh": "正如合力通过 $F_{net} = ma$ 产生线加速度，合力矩产生角加速度。转动惯量扮演质量的角色："
            },
            {
              "type": "math",
              "tex": "\\tau_{net} = I\\alpha"
            },
            {
              "type": "p",
              "en": "A reliable strategy for rotational dynamics problems:",
              "zh": "解转动动力学问题的可靠策略："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Identify every force, its point of application, and its lever arm about the chosen axis.",
                  "zh": "找出每个力、其作用点以及它对所选转轴的力臂。"
                },
                {
                  "en": "Write $\\tau_{net} = I\\alpha$ for the rotating object; write $F_{net} = ma$ for any hanging or attached mass.",
                  "zh": "对转动物体写 $\\tau_{net} = I\\alpha$；对悬挂或相连的物块写 $F_{net} = ma$。"
                },
                {
                  "en": "If a string that does not slip connects them, link the equations with $a = R\\alpha$, where $R$ is the radius at which the string acts.",
                  "zh": "若两者由不打滑的绳相连，用 $a = R\\alpha$ 把方程联立起来，其中 $R$ 是绳作用处的半径。"
                },
                {
                  "en": "Common trap: the tension in the string is NOT $mg$ when the hanging mass accelerates.",
                  "zh": "常见陷阱：当悬挂物块有加速度时，绳中张力不等于 $mg$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Preview: Racing Shapes Down a Ramp",
              "zh": "预览：不同形状的坡道竞速"
            },
            {
              "type": "p",
              "en": "Release a solid sphere, a solid disk, and a hoop of any masses and radii from rest at the top of a ramp and let them roll without slipping. The sphere always wins and the hoop always loses. Reason: gravity's energy input must be shared between translational and rotational kinetic energy. The hoop, with the largest $I$ per unit $MR^2$ (coefficient 1), diverts the largest share into spinning, leaving the least for moving forward; the sphere (coefficient $\\frac{2}{5}$) diverts the least. Mass and radius cancel out — only the shape's coefficient matters.",
              "zh": "让任意质量和半径的实心球、实心圆盘和圆环从坡顶由静止释放并无滑动地滚下。实心球总是获胜，圆环总是最后。原因：重力提供的能量必须在平动动能和转动动能之间分配。圆环的 $I$ 相对 $MR^2$ 的系数最大（为 1），分给转动的能量份额最大，用于前进的最少；球的系数最小（$\\frac{2}{5}$），分给转动的最少。质量和半径都约掉了——只有形状的系数起作用。"
            },
            {
              "type": "h3",
              "en": "Measuring Rotational Inertia in the Lab",
              "zh": "实验测定转动惯量"
            },
            {
              "type": "p",
              "en": "A standard AP-style experiment: wrap a string around a spool of radius $r$ on a flywheel's axle, hang a known mass $m$ from the string, release from rest, and time the mass's fall through a measured distance $d$. From the data you can extract the flywheel's rotational inertia with no formula for its shape needed.",
              "zh": "一个标准的 AP 风格实验：把细绳绕在飞轮轴上半径为 $r$ 的绕线轮上，绳下悬挂已知质量 $m$，由静止释放，测量该物块下落已知距离 $d$ 所用的时间。由这些数据即可求出飞轮的转动惯量，无需其形状公式。"
            },
            {
              "type": "p",
              "en": "The analysis chain: constant-acceleration kinematics gives $a = 2d/t^2$; Newton's second law on the hanging mass gives the tension $T = m(g - a)$; the torque on the flywheel is $\\tau = Tr$; the angular acceleration is $\\alpha = a/r$; finally $I = \\tau/\\alpha$. Repeating with several hanging masses and plotting $\\tau$ (vertical axis) versus $\\alpha$ (horizontal axis) gives a straight line whose slope is $I$ — and whose intercept reveals the frictional torque.",
              "zh": "分析链条：匀加速运动学给出 $a = 2d/t^2$；对悬挂物块用牛顿第二定律得张力 $T = m(g - a)$；飞轮受到的力矩为 $\\tau = Tr$；角加速度为 $\\alpha = a/r$；最后 $I = \\tau/\\alpha$。用多个不同的悬挂质量重复实验，以 $\\tau$ 为纵轴、$\\alpha$ 为横轴作图得一条直线，其斜率即为 $I$——截距则揭示摩擦力矩的大小。"
            },
            {
              "type": "note",
              "en": "Common mistake in lab analysis: assuming $T = mg$. If the tension equalled the full weight, the net force on the hanging mass would be zero and it would not accelerate at all. Since the mass falls with acceleration $a$, the tension must be $m(g-a) < mg$.",
              "zh": "实验分析中的常见错误：假设 $T = mg$。若张力等于全部重力，悬挂物块所受合力为零，就根本不会加速。既然物块以加速度 $a$ 下落，张力必为 $m(g-a) < mg$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A pulley with mass",
                "zh": "例题 1：有质量的滑轮"
              },
              "problem": {
                "en": "A block of mass $m = 2.0\\ \\text{kg}$ hangs from a light string wrapped around a frictionless pulley that is a uniform solid disk of mass $M = 4.0\\ \\text{kg}$ ($I = \\frac{1}{2}MR^2$). The system is released from rest. Taking $g = 10\\ \\text{m/s}^2$, find the block's acceleration and the string tension.",
                "zh": "质量 $m = 2.0\\ \\text{kg}$ 的物块悬挂在一根轻绳上，轻绳绕在一个无摩擦滑轮上，该滑轮是质量 $M = 4.0\\ \\text{kg}$ 的匀质实心圆盘（$I = \\frac{1}{2}MR^2$）。系统由静止释放。取 $g = 10\\ \\text{m/s}^2$，求物块的加速度和绳中张力。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For the block (taking down as positive): $mg - T = ma$. For the pulley: $TR = I\\alpha = \\frac{1}{2}MR^2\\alpha$. The string does not slip, so $a = R\\alpha$, which turns the pulley equation into $T = \\frac{1}{2}Ma$ — the radius cancels.",
                  "zh": "对物块（取向下为正）：$mg - T = ma$。对滑轮：$TR = I\\alpha = \\frac{1}{2}MR^2\\alpha$。绳不打滑，故 $a = R\\alpha$，滑轮方程化为 $T = \\frac{1}{2}Ma$——半径约掉了。"
                },
                {
                  "type": "math",
                  "tex": "mg = ma + \\tfrac{1}{2}Ma \\;\\Rightarrow\\; a = \\frac{mg}{m + \\tfrac{1}{2}M} = \\frac{(2.0)(10)}{2.0 + 2.0} = 5.0\\ \\text{m/s}^2"
                },
                {
                  "type": "math",
                  "tex": "T = \\tfrac{1}{2}Ma = \\tfrac{1}{2}(4.0)(5.0) = 10\\ \\text{N}"
                },
                {
                  "type": "p",
                  "en": "Check: $mg - T = 20 - 10 = 10\\ \\text{N} = (2.0)(5.0) = ma$. ✓ The block accelerates at half of $g$ because the pulley's rotational inertia effectively adds $\\frac{1}{2}M = 2.0\\ \\text{kg}$ of \"resistance\" to the system.",
                  "zh": "检验：$mg - T = 20 - 10 = 10\\ \\text{N} = (2.0)(5.0) = ma$。✓ 物块的加速度只有 $g$ 的一半，因为滑轮的转动惯量相当于给系统增加了 $\\frac{1}{2}M = 2.0\\ \\text{kg}$ 的“阻力质量”。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Data analysis — finding a flywheel's rotational inertia",
                "zh": "例题 2：数据分析——求飞轮的转动惯量"
              },
              "problem": {
                "en": "A string wrapped around a spool of radius $r = 0.20\\ \\text{m}$ on a flywheel's axle supports a hanging mass $m = 0.50\\ \\text{kg}$. Released from rest, the mass falls $d = 1.0\\ \\text{m}$ in $t = 2.0\\ \\text{s}$. Taking $g = 10\\ \\text{m/s}^2$ and neglecting friction, determine the flywheel's rotational inertia.",
                "zh": "细绳绕在飞轮轴上半径 $r = 0.20\\ \\text{m}$ 的绕线轮上，下端悬挂质量 $m = 0.50\\ \\text{kg}$ 的物块。由静止释放后，物块在 $t = 2.0\\ \\text{s}$ 内下落 $d = 1.0\\ \\text{m}$。取 $g = 10\\ \\text{m/s}^2$ 并忽略摩擦，求飞轮的转动惯量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1 — kinematics of the falling mass, starting from rest:",
                  "zh": "第 1 步——由静止下落物块的运动学："
                },
                {
                  "type": "math",
                  "tex": "d = \\tfrac{1}{2}at^2 \\;\\Rightarrow\\; a = \\frac{2d}{t^2} = \\frac{2(1.0)}{(2.0)^2} = 0.50\\ \\text{m/s}^2"
                },
                {
                  "type": "p",
                  "en": "Step 2 — Newton's second law on the hanging mass gives the tension:",
                  "zh": "第 2 步——对悬挂物块用牛顿第二定律求张力："
                },
                {
                  "type": "math",
                  "tex": "T = m(g - a) = (0.50)(10 - 0.50) = 4.75\\ \\text{N}"
                },
                {
                  "type": "p",
                  "en": "Step 3 — torque and angular acceleration of the flywheel:",
                  "zh": "第 3 步——飞轮的力矩与角加速度："
                },
                {
                  "type": "math",
                  "tex": "\\tau = Tr = (4.75)(0.20) = 0.95\\ \\text{N·m} \\qquad \\alpha = \\frac{a}{r} = \\frac{0.50}{0.20} = 2.5\\ \\text{rad/s}^2"
                },
                {
                  "type": "math",
                  "tex": "I = \\frac{\\tau}{\\alpha} = \\frac{0.95}{2.5} = 0.38\\ \\text{kg·m}^2"
                },
                {
                  "type": "p",
                  "en": "Because $a \\ll g$, the tension is close to (but measurably less than) the weight $mg = 5.0\\ \\text{N}$. Using $T = mg$ would have overestimated $I$.",
                  "zh": "由于 $a \\ll g$，张力接近但明显小于重力 $mg = 5.0\\ \\text{N}$。若误用 $T = mg$，会高估 $I$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A hoop, a solid disk, and a solid sphere all have the same mass $M$ and radius $R$. Which has the largest rotational inertia about its central axis?",
                "zh": "一个圆环、一个实心圆盘和一个实心球具有相同的质量 $M$ 和半径 $R$。哪一个绕中心轴的转动惯量最大？"
              },
              "choices": [
                "The hoop",
                "The disk",
                "The sphere",
                "They are all equal"
              ],
              "answer": 0,
              "explanation": {
                "en": "The hoop has $I = MR^2$, the disk $\\frac{1}{2}MR^2$, the sphere $\\frac{2}{5}MR^2$. The hoop's mass all sits at the maximum distance $R$ from the axis, and distance enters squared. \"All equal\" tempts students who think only total mass matters — but distribution matters.",
                "zh": "圆环 $I = MR^2$，圆盘 $\\frac{1}{2}MR^2$，球 $\\frac{2}{5}MR^2$。圆环的质量全部位于离轴最远的 $R$ 处，而距离以平方形式出现。认为只有总质量重要的学生会误选“全都相等”——但质量分布同样重要。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform solid disk has mass $8.0\\ \\text{kg}$ and radius $0.50\\ \\text{m}$. Using $I = \\frac{1}{2}MR^2$, find its rotational inertia about its central axis in kg·m². Give an integer.",
                "zh": "一个匀质实心圆盘质量为 $8.0\\ \\text{kg}$，半径为 $0.50\\ \\text{m}$。用 $I = \\frac{1}{2}MR^2$ 求它绕中心轴的转动惯量，单位 kg·m²。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "$I = \\frac{1}{2}(8.0)(0.50)^2 = \\frac{1}{2}(8.0)(0.25) = 1.0\\ \\text{kg·m}^2$. Remember to square the radius before multiplying.",
                "zh": "$I = \\frac{1}{2}(8.0)(0.50)^2 = \\frac{1}{2}(8.0)(0.25) = 1.0\\ \\text{kg·m}^2$。记得先把半径平方再相乘。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A net torque $\\tau$ gives a wheel angular acceleration $\\alpha$. If the net torque is doubled AND the wheel is replaced by one with twice the rotational inertia, the new angular acceleration is:",
                "zh": "合力矩 $\\tau$ 使某轮获得角加速度 $\\alpha$。若合力矩加倍，同时把轮换成转动惯量为原来两倍的轮，新的角加速度是："
              },
              "choices": [
                "$4\\alpha$",
                "$2\\alpha$",
                "$\\alpha$",
                "$\\alpha/2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "From $\\alpha = \\tau_{net}/I$, doubling both the numerator and the denominator leaves the ratio unchanged. Choosing $2\\alpha$ comes from noticing only the doubled torque and forgetting the doubled inertia.",
                "zh": "由 $\\alpha = \\tau_{net}/I$，分子分母同时加倍，比值不变。只注意到力矩加倍而忽略转动惯量加倍的学生会误选 $2\\alpha$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A net torque of $12\\ \\text{N·m}$ acts on a flywheel with rotational inertia $3\\ \\text{kg·m}^2$. What is its angular acceleration in rad/s²? Give an integer.",
                "zh": "一个 $12\\ \\text{N·m}$ 的合力矩作用在转动惯量为 $3\\ \\text{kg·m}^2$ 的飞轮上。角加速度是多少 rad/s²？请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "$\\alpha = \\tau_{net}/I = 12/3 = 4\\ \\text{rad/s}^2$ — the rotational version of $a = F/m$.",
                "zh": "$\\alpha = \\tau_{net}/I = 12/3 = 4\\ \\text{rad/s}^2$——即 $a = F/m$ 的转动版本。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A uniform rod can be pivoted either about its center ($I = \\frac{1}{12}ML^2$) or about one end ($I = \\frac{1}{3}ML^2$). The rotational inertia about the end is how many times that about the center?",
                "zh": "一根匀质杆可以绕中心（$I = \\frac{1}{12}ML^2$）或绕一端（$I = \\frac{1}{3}ML^2$）转动。绕端点的转动惯量是绕中心的多少倍？"
              },
              "choices": [
                "$2$",
                "$4$",
                "$6$",
                "$12$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\frac{1}{3} \\div \\frac{1}{12} = \\frac{12}{3} = 4$. Pivoting at the end places the far half of the rod up to a full length $L$ from the axis, so much more mass sits far away. The choice $12$ tempts students who compare only the denominators.",
                "zh": "$\\frac{1}{3} \\div \\frac{1}{12} = \\frac{12}{3} = 4$。以端点为轴时，杆的远端一半距轴最远可达全长 $L$，更多质量远离转轴。只比较分母的学生会误选 $12$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solid sphere, a solid disk, and a hoop are released from rest at the top of a ramp and roll without slipping. Which reaches the bottom first, and why?",
                "zh": "一个实心球、一个实心圆盘和一个圆环从坡顶由静止释放并无滑动地滚下。哪个最先到达底部？为什么？"
              },
              "choices": [
                "The sphere — the smallest fraction of its kinetic energy goes into rotation",
                "The hoop — it has the most rotational inertia to drive it forward",
                "The disk — it is the best compromise between mass and radius",
                "They tie — mass and radius cancel, so shape cannot matter"
              ],
              "answer": 0,
              "explanation": {
                "en": "All start with the same gravitational energy per unit mass, but each must split it between translation and rotation. The sphere's small coefficient ($\\frac{2}{5}$) sends the smallest share into spinning, so it moves forward fastest. The last choice is half-right: mass and radius DO cancel, but the shape coefficient survives and decides the race.",
                "zh": "单位质量获得的重力能量相同，但每个物体都要在平动与转动之间分配能量。球的系数最小（$\\frac{2}{5}$），分给转动的份额最小，因此前进最快。最后一个选项对了一半：质量和半径确实约掉了，但形状系数仍然保留，并决定了比赛结果。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A uniform rod of length $L = 1.5\\ \\text{m}$ is pivoted at one end ($I = \\frac{1}{3}ML^2$) and released from rest in a horizontal position, so gravity acts at its center, a distance $L/2$ from the pivot. Taking $g = 10\\ \\text{m/s}^2$, find the initial angular acceleration in rad/s². Give an integer.",
                "zh": "一根长 $L = 1.5\\ \\text{m}$ 的匀质杆以一端为轴（$I = \\frac{1}{3}ML^2$），从水平位置由静止释放，重力作用在距轴 $L/2$ 的杆中心处。取 $g = 10\\ \\text{m/s}^2$，求初始角加速度，单位 rad/s²。请填一个整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "Torque: $\\tau = Mg(L/2)$. Then $\\alpha = \\tau/I = \\frac{Mg L/2}{\\frac{1}{3}ML^2} = \\frac{3g}{2L} = \\frac{3(10)}{2(1.5)} = 10\\ \\text{rad/s}^2$. The mass cancels — a hallmark of well-posed AP rotation problems.",
                "zh": "力矩：$\\tau = Mg(L/2)$。于是 $\\alpha = \\tau/I = \\frac{MgL/2}{\\frac{1}{3}ML^2} = \\frac{3g}{2L} = \\frac{3(10)}{2(1.5)} = 10\\ \\text{rad/s}^2$。质量约掉了——这是 AP 转动题精心设计的标志。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To measure a flywheel's rotational inertia, a student applies several known torques, measures the resulting angular accelerations, and plots applied torque $\\tau$ (vertical axis) versus $\\alpha$ (horizontal axis). The best-fit line has slope $0.25$ in SI units and a small positive vertical intercept. The slope represents:",
                "zh": "为测定飞轮的转动惯量，学生施加多个已知力矩，测量相应的角加速度，并以外加力矩 $\\tau$ 为纵轴、$\\alpha$ 为横轴作图。最佳拟合直线在 SI 单位下斜率为 $0.25$，且纵截距为一个小正值。斜率代表："
              },
              "choices": [
                "The frictional torque in the bearings",
                "The angular momentum of the flywheel",
                "The flywheel's mass",
                "The rotational inertia, $I = 0.25\\ \\text{kg·m}^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "With friction, $\\tau_{applied} = I\\alpha + \\tau_{friction}$, which is a line in $\\alpha$ with slope $I$ and intercept $\\tau_{friction}$. So the slope is the rotational inertia and the small positive intercept is the frictional torque — the first choice describes the intercept, not the slope, and is the classic mix-up.",
                "zh": "考虑摩擦时，$\\tau_{applied} = I\\alpha + \\tau_{friction}$，这是关于 $\\alpha$ 的直线，斜率为 $I$，截距为 $\\tau_{friction}$。因此斜率是转动惯量，小正截距是摩擦力矩——第一个选项描述的是截距而非斜率，是典型的混淆。"
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
          "id": "rotational-energy-rolling",
          "title": "Rotational Kinetic Energy and Rolling",
          "titleZh": "转动动能与滚动",
          "content": [
            {
              "type": "h2",
              "en": "Energy in Rotation",
              "zh": "转动中的能量"
            },
            {
              "type": "p",
              "en": "A spinning object has kinetic energy even if its center is not going anywhere. Every particle in the object is moving in a circle, and adding up all those tiny $\\frac{1}{2}mv^2$ contributions gives a compact result: rotational kinetic energy depends on the moment of inertia $I$ and the angular speed $\\omega$.",
              "zh": "一个旋转的物体即使中心不动也具有动能。物体中的每个质点都在做圆周运动，把所有微小的 $\\frac{1}{2}mv^2$ 加起来会得到一个简洁的结果：转动动能取决于转动惯量 $I$ 和角速度 $\\omega$。"
            },
            {
              "type": "math",
              "tex": "K_{rot} = \\tfrac{1}{2} I \\omega^2"
            },
            {
              "type": "p",
              "en": "The moment of inertia plays the role that mass plays in translation, but it also depends on how the mass is distributed. Mass far from the axis counts more. For common shapes of mass $m$ and radius $r$, we can write $I = c\\,m r^2$, where $c$ is a shape factor:",
              "zh": "转动惯量扮演着平动中质量的角色，但它还取决于质量的分布方式。离转轴越远的质量贡献越大。对于质量为 $m$、半径为 $r$ 的常见形状，可以写成 $I = c\\,m r^2$，其中 $c$ 是形状因子："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Hoop (all mass at the rim): $I = m r^2$, so $c = 1$.",
                  "zh": "圆环（质量全部在边缘）：$I = m r^2$，即 $c = 1$。"
                },
                {
                  "en": "Uniform disk or solid cylinder: $I = \\frac{1}{2} m r^2$, so $c = \\frac{1}{2}$.",
                  "zh": "均匀圆盘或实心圆柱：$I = \\frac{1}{2} m r^2$，即 $c = \\frac{1}{2}$。"
                },
                {
                  "en": "Solid sphere: $I = \\frac{2}{5} m r^2$, so $c = \\frac{2}{5}$.",
                  "zh": "实心球：$I = \\frac{2}{5} m r^2$，即 $c = \\frac{2}{5}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Rolling Without Slipping",
              "zh": "无滑动滚动"
            },
            {
              "type": "p",
              "en": "When a wheel rolls without slipping, the point touching the ground is momentarily at rest relative to the ground. This locks the translation and the rotation together: in one full turn the wheel advances exactly one circumference. The result is a constraint between the speed of the center and the angular speed.",
              "zh": "当轮子无滑动地滚动时，与地面接触的那一点相对地面瞬时静止。这把平动和转动锁在一起：转一整圈，轮子恰好前进一个周长。由此得到中心速度与角速度之间的约束关系。"
            },
            {
              "type": "math",
              "tex": "v = r \\omega"
            },
            {
              "type": "p",
              "en": "A rolling object therefore carries two kinds of kinetic energy: translational energy of its center of mass plus rotational energy about the center. Using $I = c m r^2$ and $\\omega = v/r$, the total takes a neat form in which the radius cancels.",
              "zh": "因此，滚动的物体携带两种动能：质心的平动动能加上绕质心的转动动能。利用 $I = c m r^2$ 和 $\\omega = v/r$，总动能可写成一个简洁的形式，其中半径被消去。"
            },
            {
              "type": "math",
              "tex": "K_{total} = \\tfrac{1}{2} m v^2 + \\tfrac{1}{2} I \\omega^2 = \\tfrac{1}{2}(1 + c)\\, m v^2"
            },
            {
              "type": "h3",
              "en": "The Ramp Race",
              "zh": "斜面比赛"
            },
            {
              "type": "p",
              "en": "Release a solid sphere, a uniform cylinder, and a hoop from rest at the same height on a ramp and let each roll without slipping. Energy conservation gives $mgh = \\frac{1}{2}(1+c) m v^2$, so the speed at the bottom is:",
              "zh": "把实心球、均匀圆柱和圆环从斜面上同一高度由静止释放，让它们无滑动地滚下。由能量守恒 $mgh = \\frac{1}{2}(1+c) m v^2$，可得底端速度："
            },
            {
              "type": "math",
              "tex": "v = \\sqrt{\\frac{2 g h}{1 + c}}"
            },
            {
              "type": "p",
              "en": "Both mass and radius cancel — the race depends only on the shape factor $c$. The sphere ($c = \\frac{2}{5}$) wins, the cylinder ($c = \\frac{1}{2}$) is second, and the hoop ($c = 1$) loses, because a larger $c$ diverts a larger share of the potential energy into rotation instead of forward motion. A big sphere and a small sphere tie.",
              "zh": "质量和半径都被消去——比赛结果只取决于形状因子 $c$。实心球（$c = \\frac{2}{5}$）获胜，圆柱（$c = \\frac{1}{2}$）第二，圆环（$c = 1$）最慢，因为 $c$ 越大，重力势能中被分给转动而非前进的比例就越大。大球和小球会同时到达。"
            },
            {
              "type": "note",
              "en": "AP exam tip: for rolling without slipping, the friction is static friction and it does NO work — the contact point does not slide. That is why mechanical energy is still conserved for a rolling object. If the problem says the object slips or skids, kinetic friction acts and mechanical energy is lost.",
              "zh": "AP 考试提示：无滑动滚动中的摩擦力是静摩擦力，它不做功——因为接触点没有滑动。这就是滚动物体的机械能仍然守恒的原因。如果题目说物体打滑，则是动摩擦力在起作用，机械能会损失。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Sphere rolling down a ramp",
                "zh": "例题 1：实心球滚下斜面"
              },
              "problem": {
                "en": "A solid sphere ($I = \\frac{2}{5}mr^2$) is released from rest at the top of a ramp of vertical height $h = 1.75\\ \\text{m}$ and rolls without slipping. Using $g = 10\\ \\text{m/s}^2$, find its speed at the bottom.",
                "zh": "一个实心球（$I = \\frac{2}{5}mr^2$）从竖直高度 $h = 1.75\\ \\text{m}$ 的斜面顶端由静止释放，无滑动地滚下。取 $g = 10\\ \\text{m/s}^2$，求它到达底端时的速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Energy conservation with both kinds of kinetic energy, using $c = \\frac{2}{5}$:",
                  "zh": "对包含两种动能的系统用能量守恒，取 $c = \\frac{2}{5}$："
                },
                {
                  "type": "math",
                  "tex": "mgh = \\tfrac{1}{2}\\left(1 + \\tfrac{2}{5}\\right) m v^2 = \\tfrac{7}{10} m v^2"
                },
                {
                  "type": "math",
                  "tex": "v = \\sqrt{\\frac{10 g h}{7}} = \\sqrt{\\frac{10 (10)(1.75)}{7}} = \\sqrt{25} = 5\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "Notice the answer contains neither $m$ nor $r$: any solid sphere released from this height reaches the bottom at $5\\ \\text{m/s}$. A sliding block on a frictionless ramp would arrive faster, at $\\sqrt{2gh} \\approx 5.9\\ \\text{m/s}$.",
                  "zh": "注意答案中既没有 $m$ 也没有 $r$：任何实心球从这一高度释放，到达底端时都是 $5\\ \\text{m/s}$。而在无摩擦斜面上下滑的滑块会更快，达到 $\\sqrt{2gh} \\approx 5.9\\ \\text{m/s}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Falling block turning a pulley",
                "zh": "例题 2：下落物块带动滑轮"
              },
              "problem": {
                "en": "A block of mass $m = 4\\ \\text{kg}$ hangs from a light string wrapped around a pulley that is a uniform disk of mass $M = 4\\ \\text{kg}$ ($I = \\frac{1}{2}MR^2$). The system is released from rest and the block falls $h = 1.2\\ \\text{m}$ without the string slipping on the pulley. Using $g = 10\\ \\text{m/s}^2$, find the speed of the block after the fall.",
                "zh": "质量 $m = 4\\ \\text{kg}$ 的物块用轻绳悬挂，绳绕在一个质量 $M = 4\\ \\text{kg}$ 的均匀圆盘滑轮上（$I = \\frac{1}{2}MR^2$）。系统由静止释放，物块下落 $h = 1.2\\ \\text{m}$，绳与滑轮之间不打滑。取 $g = 10\\ \\text{m/s}^2$，求下落后物块的速度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The string does not slip, so the rim speed of the pulley equals the block's speed: $\\omega = v/R$. Energy conservation for the block-pulley-Earth system:",
                  "zh": "绳不打滑，所以滑轮边缘的速度等于物块的速度：$\\omega = v/R$。对物块-滑轮-地球系统用能量守恒："
                },
                {
                  "type": "math",
                  "tex": "mgh = \\tfrac{1}{2} m v^2 + \\tfrac{1}{2}\\left(\\tfrac{1}{2} M R^2\\right)\\frac{v^2}{R^2} = \\tfrac{1}{2} m v^2 + \\tfrac{1}{4} M v^2"
                },
                {
                  "type": "math",
                  "tex": "(4)(10)(1.2) = \\tfrac{1}{2}(4) v^2 + \\tfrac{1}{4}(4) v^2 = 3 v^2"
                },
                {
                  "type": "math",
                  "tex": "v = \\sqrt{\\frac{48}{3}} = \\sqrt{16} = 4\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "The block moves slower than it would in free fall because part of the gravitational potential energy became rotational kinetic energy of the pulley.",
                  "zh": "物块比自由下落时慢，因为一部分重力势能变成了滑轮的转动动能。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A hoop and a uniform disk have the same mass and radius and spin about their centers with the same angular speed. Compare their rotational kinetic energies.",
                "zh": "一个圆环和一个均匀圆盘质量、半径相同，绕各自中心以相同角速度旋转。比较它们的转动动能。"
              },
              "choices": [
                "The hoop has twice the kinetic energy of the disk",
                "The disk has twice the kinetic energy of the hoop",
                "They have equal kinetic energies",
                "The hoop has four times the kinetic energy of the disk"
              ],
              "answer": 0,
              "explanation": {
                "en": "$K = \\frac{1}{2}I\\omega^2$ with the same $\\omega$, so the ratio equals the ratio of moments of inertia: $I_{hoop}/I_{disk} = mr^2/(\\frac{1}{2}mr^2) = 2$. \"Equal\" is tempting because mass and radius match, but the hoop's mass is all far from the axis, doubling its $I$.",
                "zh": "$K = \\frac{1}{2}I\\omega^2$，$\\omega$ 相同，所以比值等于转动惯量之比：$I_{环}/I_{盘} = mr^2/(\\frac{1}{2}mr^2) = 2$。\"相等\"很有迷惑性，因为质量和半径都相同，但圆环的质量全部远离转轴，使其 $I$ 是圆盘的两倍。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A flywheel has moment of inertia $I = 0.5\\ \\text{kg}\\cdot\\text{m}^2$ and spins at $\\omega = 4\\ \\text{rad/s}$. Find its rotational kinetic energy in joules. Give an integer.",
                "zh": "一个飞轮的转动惯量为 $I = 0.5\\ \\text{kg}\\cdot\\text{m}^2$，以 $\\omega = 4\\ \\text{rad/s}$ 旋转。求其转动动能，单位焦耳。请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "$K_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.5)(4)^2 = \\frac{1}{2}(0.5)(16) = 4\\ \\text{J}$. Remember to square the angular speed.",
                "zh": "$K_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.5)(4)^2 = \\frac{1}{2}(0.5)(16) = 4\\ \\text{J}$。别忘了对角速度取平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A bicycle wheel of radius $0.25\\ \\text{m}$ rolls without slipping while its center moves at $5\\ \\text{m/s}$. What is the wheel's angular speed?",
                "zh": "半径 $0.25\\ \\text{m}$ 的自行车轮无滑动地滚动，其中心速度为 $5\\ \\text{m/s}$。轮子的角速度是多少？"
              },
              "choices": [
                "$1.25\\ \\text{rad/s}$",
                "$5\\ \\text{rad/s}$",
                "$20\\ \\text{rad/s}$",
                "$25\\ \\text{rad/s}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Rolling without slipping means $v = r\\omega$, so $\\omega = v/r = 5/0.25 = 20\\ \\text{rad/s}$. The distractor $1.25$ comes from multiplying $v$ by $r$ instead of dividing.",
                "zh": "无滑动滚动意味着 $v = r\\omega$，所以 $\\omega = v/r = 5/0.25 = 20\\ \\text{rad/s}$。干扰项 $1.25$ 来自把 $v$ 乘以 $r$ 而不是除以 $r$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solid sphere, a uniform cylinder, and a hoop, all of different masses and radii, are released from rest at the same height and roll without slipping down a ramp. Which reaches the bottom first?",
                "zh": "一个实心球、一个均匀圆柱和一个圆环（质量和半径各不相同）从同一高度由静止释放，无滑动地滚下斜面。哪个最先到达底端？"
              },
              "choices": [
                "The hoop, because its mass is at the rim",
                "The sphere, because it has the smallest shape factor $c$ in $I = cmr^2$",
                "The most massive object, because it has the most potential energy",
                "They tie, because mass and radius cancel"
              ],
              "answer": 1,
              "explanation": {
                "en": "The bottom speed is $v = \\sqrt{2gh/(1+c)}$ — mass and radius cancel, but the shape factor does not. The sphere's $c = \\frac{2}{5}$ is smallest, so it converts the largest fraction of $mgh$ into translation and wins. \"They tie\" is tempting because $m$ and $r$ do cancel, but $c$ still differs between shapes.",
                "zh": "底端速度为 $v = \\sqrt{2gh/(1+c)}$——质量和半径被消去，但形状因子不会。实心球的 $c = \\frac{2}{5}$ 最小，把 $mgh$ 中最大比例转化为平动，因此获胜。\"同时到达\"有迷惑性，因为 $m$ 和 $r$ 确实消去了，但不同形状的 $c$ 不同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A block slides down a frictionless ramp while an identical-mass solid sphere rolls without slipping down an identical ramp from the same height. At the bottom:",
                "zh": "一个滑块沿无摩擦斜面下滑，同时一个质量相同的实心球从相同高度沿完全相同的斜面无滑动滚下。到达底端时："
              },
              "choices": [
                "The sphere is faster because rolling adds kinetic energy",
                "They have the same speed because energy is conserved for both",
                "The sphere is faster because friction pushes it forward",
                "The block is faster because none of its energy went into rotation"
              ],
              "answer": 3,
              "explanation": {
                "en": "Both conserve mechanical energy, but the sphere splits $mgh$ between translation and rotation ($v = \\sqrt{10gh/7}$), while the block puts everything into translation ($v = \\sqrt{2gh}$). \"Same speed because energy is conserved\" is the classic trap — conservation holds for both, but the energy is distributed differently.",
                "zh": "两者机械能都守恒，但实心球把 $mgh$ 分给平动和转动（$v = \\sqrt{10gh/7}$），而滑块把全部能量用于平动（$v = \\sqrt{2gh}$）。\"因为能量守恒所以速度相同\"是经典陷阱——两者都守恒，但能量的分配方式不同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solid sphere ($I = \\frac{2}{5}mr^2$) rolls without slipping. What fraction of its total kinetic energy is rotational? Give a simple fraction like 1/3.",
                "zh": "一个实心球（$I = \\frac{2}{5}mr^2$）无滑动地滚动。它的总动能中转动动能占几分之几？请填一个简单分数，如 1/3。"
              },
              "answer": "2/7",
              "accept": [
                "2/7"
              ],
              "explanation": {
                "en": "With $I = cmr^2$ and $v = r\\omega$: $K_{rot} = \\frac{1}{2}cmv^2$ and $K_{total} = \\frac{1}{2}(1+c)mv^2$, so the fraction is $c/(1+c) = \\frac{2/5}{7/5} = \\frac{2}{7}$, independent of speed, mass, and radius.",
                "zh": "由 $I = cmr^2$ 和 $v = r\\omega$：$K_{rot} = \\frac{1}{2}cmv^2$，$K_{total} = \\frac{1}{2}(1+c)mv^2$，所以比例为 $c/(1+c) = \\frac{2/5}{7/5} = \\frac{2}{7}$，与速度、质量和半径无关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Students release an unknown round object from various heights $h$ on a ramp (rolling without slipping) and measure its speed $v$ at the bottom. They plot $v^2$ versus $h$ and find a straight line through the origin with slope $14.0\\ \\text{m/s}^2$. Using $g = 9.8\\ \\text{m/s}^2$ and $v^2 = \\frac{2gh}{1+c}$, the object is most likely a:",
                "zh": "学生们把一个未知的圆形物体从斜面上不同高度 $h$ 释放（无滑动滚动），测量它到达底端的速度 $v$。他们画出 $v^2$ 随 $h$ 变化的图象，得到一条过原点、斜率为 $14.0\\ \\text{m/s}^2$ 的直线。取 $g = 9.8\\ \\text{m/s}^2$，由 $v^2 = \\frac{2gh}{1+c}$ 判断，该物体最可能是："
              },
              "choices": [
                "Hoop ($c = 1$)",
                "Uniform cylinder ($c = \\frac{1}{2}$)",
                "Solid sphere ($c = \\frac{2}{5}$)",
                "Frictionless sliding block ($c = 0$)"
              ],
              "answer": 2,
              "explanation": {
                "en": "The slope equals $\\frac{2g}{1+c}$, so $1 + c = \\frac{2(9.8)}{14.0} = 1.4$, giving $c = 0.4 = \\frac{2}{5}$: a solid sphere. A sliding block would give slope $2g = 19.6\\ \\text{m/s}^2$ — tempting if you forget the rotational share of the energy.",
                "zh": "斜率等于 $\\frac{2g}{1+c}$，所以 $1 + c = \\frac{2(9.8)}{14.0} = 1.4$，得 $c = 0.4 = \\frac{2}{5}$：实心球。滑块的斜率应为 $2g = 19.6\\ \\text{m/s}^2$——如果忘记能量中的转动部分就会误选。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A hoop ($I = mr^2$) is released from rest and rolls without slipping down a ramp of vertical height $2.5\\ \\text{m}$. Using $g = 10\\ \\text{m/s}^2$, find its speed at the bottom in m/s. Give an integer.",
                "zh": "一个圆环（$I = mr^2$）由静止释放，无滑动地滚下竖直高度为 $2.5\\ \\text{m}$ 的斜面。取 $g = 10\\ \\text{m/s}^2$，求它到达底端的速度，单位 m/s。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "For a hoop $c = 1$, so $mgh = \\frac{1}{2}(1+1)mv^2 = mv^2$, giving $v = \\sqrt{gh} = \\sqrt{(10)(2.5)} = 5\\ \\text{m/s}$. Exactly half of $mgh$ went into rotation.",
                "zh": "对圆环 $c = 1$，所以 $mgh = \\frac{1}{2}(1+1)mv^2 = mv^2$，得 $v = \\sqrt{gh} = \\sqrt{(10)(2.5)} = 5\\ \\text{m/s}$。恰好一半的 $mgh$ 变成了转动动能。"
              }
            }
          ]
        },
        {
          "id": "angular-momentum-conservation",
          "title": "Angular Momentum and Its Conservation",
          "titleZh": "角动量及其守恒",
          "content": [
            {
              "type": "h2",
              "en": "Angular Momentum",
              "zh": "角动量"
            },
            {
              "type": "p",
              "en": "Angular momentum is the rotational analog of linear momentum. For a rigid object spinning about a fixed axis it is the product of the moment of inertia and the angular velocity. Like linear momentum, it is a vector; in AP Physics 1 we track its direction with a sign (say, counterclockwise positive).",
              "zh": "角动量是线动量在转动中的对应量。对于绕固定轴旋转的刚体，它等于转动惯量与角速度的乘积。和线动量一样，它是矢量；在 AP 物理 1 中我们用正负号表示方向（如逆时针为正）。"
            },
            {
              "type": "math",
              "tex": "L = I \\omega"
            },
            {
              "type": "p",
              "en": "A moving particle also has angular momentum about a chosen point, even if it travels in a straight line. If $r$ is the perpendicular distance from that point to the particle's line of motion, then:",
              "zh": "一个运动的质点相对于某个选定点也有角动量，即使它做直线运动。设 $r$ 为该点到质点运动直线的垂直距离，则："
            },
            {
              "type": "math",
              "tex": "L = m v r"
            },
            {
              "type": "h3",
              "en": "Conservation of Angular Momentum",
              "zh": "角动量守恒"
            },
            {
              "type": "p",
              "en": "Just as a net external force is needed to change linear momentum, a net external torque is needed to change angular momentum. If the net external torque on a system about some axis is zero, the system's angular momentum about that axis stays constant — no matter what internal rearrangements happen.",
              "zh": "正如改变线动量需要合外力，改变角动量需要合外力矩。如果系统绕某轴所受的合外力矩为零，那么无论系统内部如何重新分布，它绕该轴的角动量都保持不变。"
            },
            {
              "type": "math",
              "tex": "I_i \\omega_i = I_f \\omega_f \\quad (\\text{when } \\tau_{net} = 0)"
            },
            {
              "type": "p",
              "en": "The classic case is a spinning figure skater. Pulling the arms in moves mass closer to the axis, so $I$ decreases; since $L = I\\omega$ must stay the same, $\\omega$ increases. But the kinetic energy $K = \\frac{1}{2}I\\omega^2$ increases — halving $I$ doubles $\\omega$, and $K$ doubles. Where does that energy come from? The skater's muscles do work pulling the arms inward against the tendency to fly outward. Angular momentum is conserved; kinetic energy is not.",
              "zh": "经典例子是旋转的花样滑冰运动员。收拢手臂使质量靠近转轴，$I$ 减小；由于 $L = I\\omega$ 必须不变，$\\omega$ 增大。但动能 $K = \\frac{1}{2}I\\omega^2$ 增大了——$I$ 减半使 $\\omega$ 加倍，$K$ 也加倍。这些能量从哪里来？运动员的肌肉克服手臂向外甩的趋势，向内收臂做了功。角动量守恒，动能并不守恒。"
            },
            {
              "type": "note",
              "en": "AP exam tip: always state the axis (or point) about which you apply conservation, and justify why the net torque about it is zero. In collision problems with a pivot, angular momentum about the pivot is conserved but linear momentum is NOT — the pivot exerts an external force on the system during the collision.",
              "zh": "AP 考试提示：一定要说明你对哪个轴（或点）应用守恒，并论证绕它的合外力矩为零。在有转轴的碰撞问题中，绕转轴的角动量守恒，但线动量不守恒——碰撞过程中转轴对系统施加了外力。"
            },
            {
              "type": "h3",
              "en": "Rotational Collisions",
              "zh": "转动碰撞"
            },
            {
              "type": "p",
              "en": "When a dart strikes and sticks to a rod that can pivot about one end, use angular momentum about the pivot. The dart brings in $L = mvr$; after the collision the dart-plus-rod system rotates with $L = I_{total}\\,\\omega$. Kinetic energy is lost in the perfectly inelastic impact, just as in linear collisions, but angular momentum about the pivot survives because gravity and the pivot force exert no torque about the pivot at that instant.",
              "zh": "当飞镖击中并粘在一根可绕一端转动的杆上时，应对转轴取角动量。飞镖带来 $L = mvr$；碰撞后镖-杆系统以 $L = I_{total}\\,\\omega$ 转动。与线性碰撞一样，完全非弹性碰撞会损失动能，但绕转轴的角动量得以保留，因为此刻重力和轴的支持力对转轴都不产生力矩。"
            },
            {
              "type": "h3",
              "en": "Orbits and Kepler's Second Law",
              "zh": "轨道与开普勒第二定律"
            },
            {
              "type": "p",
              "en": "A satellite in an elliptical orbit is pulled by gravity, which always points toward the planet's center. A force pointing straight at the axis has zero lever arm, so it exerts no torque about the planet — the satellite's angular momentum $L = mvr$ about the planet is conserved. When $r$ shrinks near the planet, $v$ must grow; far away, the satellite moves slowly. This is exactly Kepler's second law: the line from planet to satellite sweeps out equal areas in equal times.",
              "zh": "沿椭圆轨道运行的卫星受到始终指向行星中心的引力。指向转轴的力力臂为零，对行星不产生力矩——因此卫星相对行星的角动量 $L = mvr$ 守恒。当 $r$ 在近行星处变小时，$v$ 必然变大；在远处，卫星运动缓慢。这正是开普勒第二定律：行星到卫星的连线在相等时间内扫过相等面积。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: The spinning skater",
                "zh": "例题 1：旋转的滑冰运动员"
              },
              "problem": {
                "en": "A skater spins with arms extended at $\\omega_i = 2\\ \\text{rad/s}$ with moment of inertia $I_i = 4\\ \\text{kg}\\cdot\\text{m}^2$. She pulls her arms in, reducing her moment of inertia to $I_f = 1\\ \\text{kg}\\cdot\\text{m}^2$. Find her new angular speed and compare her kinetic energies before and after.",
                "zh": "一名滑冰运动员张开双臂以 $\\omega_i = 2\\ \\text{rad/s}$ 旋转，转动惯量 $I_i = 4\\ \\text{kg}\\cdot\\text{m}^2$。她收拢手臂，使转动惯量减小到 $I_f = 1\\ \\text{kg}\\cdot\\text{m}^2$。求她的新角速度，并比较收臂前后的动能。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Ice friction is negligible, so the net torque about the vertical axis is zero and angular momentum is conserved:",
                  "zh": "冰面摩擦可忽略，绕竖直轴的合外力矩为零，角动量守恒："
                },
                {
                  "type": "math",
                  "tex": "\\omega_f = \\frac{I_i \\omega_i}{I_f} = \\frac{(4)(2)}{1} = 8\\ \\text{rad/s}"
                },
                {
                  "type": "math",
                  "tex": "K_i = \\tfrac{1}{2}(4)(2)^2 = 8\\ \\text{J}, \\qquad K_f = \\tfrac{1}{2}(1)(8)^2 = 32\\ \\text{J}"
                },
                {
                  "type": "p",
                  "en": "Kinetic energy quadrupled. The extra $24\\ \\text{J}$ came from work done by her muscles pulling her arms inward — internal forces can change kinetic energy without changing angular momentum.",
                  "zh": "动能变为原来的四倍。多出的 $24\\ \\text{J}$ 来自她的肌肉向内收臂所做的功——内力可以改变动能，却不改变角动量。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Dart hitting a pivoted rod",
                "zh": "例题 2：飞镖击中带轴的杆"
              },
              "problem": {
                "en": "A uniform rod of length $2.0\\ \\text{m}$ hangs at rest, pivoted about one end, with moment of inertia $I_{rod} = 1.6\\ \\text{kg}\\cdot\\text{m}^2$ about the pivot. A dart of mass $0.1\\ \\text{kg}$ flies horizontally at $10\\ \\text{m/s}$, perpendicular to the rod, and sticks to the rod's far end. Find the angular speed just after impact and the kinetic energy lost.",
                "zh": "一根长 $2.0\\ \\text{m}$ 的均匀杆静止悬挂，可绕一端转动，绕转轴的转动惯量为 $I_{rod} = 1.6\\ \\text{kg}\\cdot\\text{m}^2$。一支质量 $0.1\\ \\text{kg}$ 的飞镖以 $10\\ \\text{m/s}$ 水平飞行，方向垂直于杆，击中并粘在杆的末端。求碰撞后瞬间的角速度和损失的动能。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use angular momentum about the pivot; the pivot force exerts no torque about itself. The dart hits at $r = 2.0\\ \\text{m}$:",
                  "zh": "对转轴取角动量；轴的作用力对轴本身不产生力矩。飞镖击中处 $r = 2.0\\ \\text{m}$："
                },
                {
                  "type": "math",
                  "tex": "L_i = m v r = (0.1)(10)(2.0) = 2.0\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}"
                },
                {
                  "type": "math",
                  "tex": "I_{total} = I_{rod} + m r^2 = 1.6 + (0.1)(2.0)^2 = 2.0\\ \\text{kg}\\cdot\\text{m}^2"
                },
                {
                  "type": "math",
                  "tex": "\\omega = \\frac{L_i}{I_{total}} = \\frac{2.0}{2.0} = 1.0\\ \\text{rad/s}"
                },
                {
                  "type": "p",
                  "en": "Kinetic energy: $K_i = \\frac{1}{2}(0.1)(10)^2 = 5\\ \\text{J}$ and $K_f = \\frac{1}{2}(2.0)(1.0)^2 = 1\\ \\text{J}$, so $4\\ \\text{J}$ (80%) was lost to the sticking collision. Angular momentum conserved, kinetic energy not.",
                  "zh": "动能：$K_i = \\frac{1}{2}(0.1)(10)^2 = 5\\ \\text{J}$，$K_f = \\frac{1}{2}(2.0)(1.0)^2 = 1\\ \\text{J}$，所以粘合碰撞损失了 $4\\ \\text{J}$（80%）。角动量守恒，动能不守恒。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The angular momentum of a system is conserved when:",
                "zh": "系统的角动量在什么条件下守恒？"
              },
              "choices": [
                "The net external force on the system is zero",
                "The net external torque on the system is zero",
                "The kinetic energy of the system is constant",
                "The moment of inertia of the system is constant"
              ],
              "answer": 1,
              "explanation": {
                "en": "Torque changes angular momentum, so zero net external torque means constant $L$. \"Zero net force\" is tempting because it is the condition for linear momentum — but a force with a lever arm can still produce a torque, and forces can also cancel while their torques do not.",
                "zh": "力矩改变角动量，所以合外力矩为零意味着 $L$ 不变。\"合外力为零\"有迷惑性，因为那是线动量守恒的条件——但有力臂的力仍能产生力矩，而且合力为零时合力矩未必为零。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $2\\ \\text{kg}$ ball moves at $3\\ \\text{m/s}$ along a straight line whose perpendicular distance from point P is $0.5\\ \\text{m}$. Find the magnitude of its angular momentum about P in kg·m²/s. Give an integer.",
                "zh": "一个 $2\\ \\text{kg}$ 的球以 $3\\ \\text{m/s}$ 沿直线运动，该直线到 P 点的垂直距离为 $0.5\\ \\text{m}$。求它相对 P 点的角动量大小，单位 kg·m²/s。请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "$L = mvr = (2)(3)(0.5) = 3\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$. Note that $r$ is the perpendicular distance from P to the line of motion, not the instantaneous distance to the ball.",
                "zh": "$L = mvr = (2)(3)(0.5) = 3\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$。注意 $r$ 是 P 点到运动直线的垂直距离，而不是到球的瞬时距离。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A spinning skater pulls her arms in and spins faster. Her kinetic energy increases. The source of this extra kinetic energy is:",
                "zh": "旋转的滑冰运动员收拢手臂后转得更快，动能增大了。这些额外动能的来源是："
              },
              "choices": [
                "The conservation of angular momentum itself supplies the energy",
                "Work done by friction from the ice",
                "Work done by her muscles as she pulls her arms inward",
                "Gravitational potential energy released as her arms drop"
              ],
              "answer": 2,
              "explanation": {
                "en": "Her arms tend to continue moving outward; pulling them in requires an inward force acting through a displacement, so her muscles do positive work, which appears as kinetic energy. \"Conservation supplies the energy\" is a non-answer: conservation laws never create energy, and here $L$ is conserved while $K$ changes.",
                "zh": "手臂有沿外甩方向继续运动的趋势；把它们收进来需要向内的力经过一段位移，肌肉因此做正功，表现为动能增加。\"守恒定律提供能量\"是伪答案：守恒定律从不创造能量，此处 $L$ 守恒而 $K$ 改变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A student on a rotating stool spins at $2\\ \\text{rad/s}$ with moment of inertia $5\\ \\text{kg}\\cdot\\text{m}^2$. Pulling in two dumbbells reduces the moment of inertia to $2\\ \\text{kg}\\cdot\\text{m}^2$. Find the new angular speed in rad/s. Give an integer.",
                "zh": "一名学生坐在转椅上以 $2\\ \\text{rad/s}$ 旋转，转动惯量为 $5\\ \\text{kg}\\cdot\\text{m}^2$。收回两个哑铃后转动惯量减小到 $2\\ \\text{kg}\\cdot\\text{m}^2$。求新的角速度，单位 rad/s。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "No external torque acts about the stool's axis, so $I_i\\omega_i = I_f\\omega_f$: $\\omega_f = (5)(2)/2 = 5\\ \\text{rad/s}$.",
                "zh": "绕转椅轴没有外力矩，所以 $I_i\\omega_i = I_f\\omega_f$：$\\omega_f = (5)(2)/2 = 5\\ \\text{rad/s}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball of clay flies horizontally and sticks to the end of a horizontal rod that is pivoted about a frictionless axle at its other end. During the collision, which quantity of the clay-rod system is conserved?",
                "zh": "一团黏土水平飞行，粘到一根水平杆的末端，杆的另一端装在无摩擦的轴上。碰撞过程中，黏土-杆系统的哪个量守恒？"
              },
              "choices": [
                "Linear momentum only",
                "Kinetic energy only",
                "Both linear momentum and kinetic energy",
                "Angular momentum about the pivot only"
              ],
              "answer": 3,
              "explanation": {
                "en": "The pivot exerts an external force on the rod during impact, so linear momentum is not conserved; the collision is perfectly inelastic, so kinetic energy is lost. But that pivot force has zero lever arm about the pivot, so angular momentum about the pivot is conserved. \"Linear momentum\" tempts students who treat this like a free-body collision.",
                "zh": "碰撞时转轴对杆施加外力，所以线动量不守恒；碰撞是完全非弹性的，动能有损失。但轴的作用力对转轴力臂为零，所以绕转轴的角动量守恒。把它当成自由碰撞的学生容易误选\"线动量\"。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A merry-go-round (a disk with $I = 200\\ \\text{kg}\\cdot\\text{m}^2$) rotates at $1\\ \\text{rad/s}$ with a $50\\ \\text{kg}$ child standing at the rim, $2\\ \\text{m}$ from the axis (treat the child as a point mass). The child walks to the center. Find the final angular speed in rad/s. Give an integer.",
                "zh": "一个旋转木马（圆盘，$I = 200\\ \\text{kg}\\cdot\\text{m}^2$）以 $1\\ \\text{rad/s}$ 旋转，一名 $50\\ \\text{kg}$ 的孩子站在边缘，距轴 $2\\ \\text{m}$（将孩子视为质点）。孩子走到中心。求最终角速度，单位 rad/s。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Initially $I_i = 200 + (50)(2)^2 = 400\\ \\text{kg}\\cdot\\text{m}^2$, so $L = 400\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$. At the center the child adds nothing: $I_f = 200$, so $\\omega_f = 400/200 = 2\\ \\text{rad/s}$. The child's walking is an internal rearrangement — no external torque.",
                "zh": "初始 $I_i = 200 + (50)(2)^2 = 400\\ \\text{kg}\\cdot\\text{m}^2$，所以 $L = 400\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$。孩子在中心时不再贡献转动惯量：$I_f = 200$，故 $\\omega_f = 400/200 = 2\\ \\text{rad/s}$。孩子的走动是内部重新分布——没有外力矩。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A comet in an elliptical orbit is $3$ times farther from the Sun at its farthest point than at its nearest point. The ratio of its speed at the nearest point to its speed at the farthest point is:",
                "zh": "一颗沿椭圆轨道运行的彗星，远日点到太阳的距离是近日点的 $3$ 倍。它在近日点与远日点的速度之比为："
              },
              "choices": [
                "$1/3$",
                "$1$",
                "$\\sqrt{3}$",
                "$3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Gravity points at the Sun, exerting zero torque about it, so $L = mvr$ is conserved: $v_{near} r_{near} = v_{far} r_{far}$, giving $v_{near}/v_{far} = r_{far}/r_{near} = 3$. The distractor $\\sqrt{3}$ comes from wrongly applying an energy-style square-root relation.",
                "zh": "引力指向太阳，对太阳的力矩为零，所以 $L = mvr$ 守恒：$v_{近} r_{近} = v_{远} r_{远}$，得 $v_{近}/v_{远} = r_{远}/r_{近} = 3$。干扰项 $\\sqrt{3}$ 来自错误地套用能量式的开方关系。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A star collapses so that its moment of inertia becomes half its original value, with no external torque. Its rotational kinetic energy:",
                "zh": "一颗恒星坍缩使其转动惯量减为原来的一半，过程中无外力矩。它的转动动能："
              },
              "choices": [
                "Doubles",
                "Is unchanged, by conservation of energy",
                "Halves",
                "Quadruples"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $L = I\\omega$ is fixed, halving $I$ doubles $\\omega$. Then $K = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(\\frac{I}{2})(2\\omega)^2 = 2(\\frac{1}{2}I\\omega^2)$ — it doubles. Equivalently $K = L^2/2I$, and $I$ halved. \"Unchanged by conservation of energy\" is the trap: gravity does work during the collapse, so kinetic energy need not stay fixed.",
                "zh": "由于 $L = I\\omega$ 不变，$I$ 减半使 $\\omega$ 加倍。于是 $K = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(\\frac{I}{2})(2\\omega)^2 = 2(\\frac{1}{2}I\\omega^2)$——动能加倍。等价地 $K = L^2/2I$，而 $I$ 减半。\"由能量守恒可知不变\"是陷阱：坍缩过程中引力做功，动能不必保持不变。"
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
          "id": "simple-harmonic-motion",
          "title": "Simple Harmonic Motion",
          "titleZh": "简谐运动",
          "content": [
            {
              "type": "h2",
              "en": "What Makes Motion \"Simple Harmonic\"",
              "zh": "什么使运动成为\"简谐\""
            },
            {
              "type": "p",
              "en": "Simple harmonic motion (SHM) is the back-and-forth motion that results when the net force on an object is a restoring force proportional to its displacement from equilibrium. \"Restoring\" means the force always points back toward the equilibrium position; \"proportional to displacement\" means the farther the object is pushed, the harder it is pulled back. This single condition produces the smooth, repeating oscillation seen in a mass on a spring and, for small swings, a pendulum.",
              "zh": "简谐运动（SHM）是当物体所受的合力为回复力、且该力与偏离平衡位置的位移成正比时产生的往复运动。\"回复\"是指该力始终指向平衡位置；\"与位移成正比\"是指物体被推得越远，被拉回的力就越大。仅凭这一条件就能产生弹簧上的质量以及小摆角单摆所表现出的平滑、周期性的振荡。"
            },
            {
              "type": "p",
              "en": "For an ideal spring the restoring force follows Hooke's law: the force is proportional to the stretch or compression $x$ and points opposite to that displacement. The constant $k$ (in N/m) measures the spring's stiffness.",
              "zh": "对于理想弹簧，回复力遵循胡克定律：力与伸长或压缩量 $x$ 成正比，方向与位移相反。常数 $k$（单位 N/m）衡量弹簧的劲度（刚度）。"
            },
            {
              "type": "math",
              "tex": "F = -kx"
            },
            {
              "type": "p",
              "en": "The minus sign is the whole story: when $x$ is positive (displaced right), the force is negative (points left), and vice versa. Because acceleration is proportional to force, $a = -\\frac{k}{m}x$ — the acceleration is also largest at the extremes and zero at equilibrium, always pointing back toward the center.",
              "zh": "负号说明了一切：当 $x$ 为正（向右偏移）时，力为负（指向左），反之亦然。由于加速度与力成正比，$a = -\\frac{k}{m}x$——加速度同样在两端最大、在平衡位置为零，且始终指向中心。"
            },
            {
              "type": "note",
              "en": "AP exam tip: the defining test of SHM is not \"does it repeat\" but \"is the restoring force proportional to displacement.\" A ball bouncing repeats but is NOT SHM, because gravity is constant, not proportional to position. Always check for $F \\propto -x$.",
              "zh": "AP 考试提示：判定简谐运动的标准不是\"是否重复\"，而是\"回复力是否与位移成正比\"。弹跳的小球会重复，但不是简谐运动，因为重力是恒定的，并不与位置成正比。务必检查 $F \\propto -x$。"
            },
            {
              "type": "h2",
              "en": "Position, Velocity, and Acceleration Through a Cycle",
              "zh": "一个周期中的位置、速度与加速度"
            },
            {
              "type": "p",
              "en": "If an object is released from rest at maximum displacement (amplitude $A$), its position traces a cosine curve in time. Velocity is the slope of the position graph, and acceleration is the slope of the velocity graph, so the three curves are shifted versions of one another.",
              "zh": "若物体从最大位移处（振幅 $A$）由静止释放，其位置随时间描绘出一条余弦曲线。速度是位置图的斜率，加速度是速度图的斜率，因此这三条曲线是彼此平移后的形态。"
            },
            {
              "type": "math",
              "tex": "x(t) = A\\cos(2\\pi t / T)"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "At the extremes ($x = \\pm A$): position is maximum, velocity is ZERO (the object momentarily stops to turn around), and acceleration is MAXIMUM (force is largest here).",
                  "zh": "在两端（$x = \\pm A$）：位置最大，速度为零（物体瞬间停下以掉头），加速度最大（此处力最大）。"
                },
                {
                  "en": "At equilibrium ($x = 0$): position is zero, velocity is MAXIMUM (fastest point of the motion), and acceleration is ZERO (no net force here).",
                  "zh": "在平衡位置（$x = 0$）：位置为零，速度最大（运动中最快的点），加速度为零（此处无合力）。"
                },
                {
                  "en": "Acceleration and position are always exact opposites in sign — when the object is far to the right, it accelerates to the left.",
                  "zh": "加速度与位置的符号始终恰好相反——当物体远在右侧时，它向左加速。"
                }
              ]
            },
            {
              "type": "p",
              "en": "A useful mnemonic: velocity and position are \"90 degrees out of phase\" (where one peaks, the other is zero), while acceleration is a mirror image of position (they peak at the same times but with opposite signs).",
              "zh": "一个有用的口诀：速度与位置\"相位相差 90 度\"（一个达到峰值时另一个为零），而加速度是位置的镜像（它们在相同时刻达到峰值，但符号相反）。"
            },
            {
              "type": "h2",
              "en": "Period of a Mass-Spring System and a Pendulum",
              "zh": "弹簧振子与单摆的周期"
            },
            {
              "type": "p",
              "en": "The period $T$ is the time for one complete cycle; frequency $f = 1/T$ is cycles per second (Hz). For the two systems the AP exam expects you to know, the period depends on only two things each:",
              "zh": "周期 $T$ 是完成一个完整循环所需的时间；频率 $f = 1/T$ 是每秒的循环数（Hz）。对于 AP 考试要求掌握的两个系统，周期各自只取决于两个因素："
            },
            {
              "type": "math",
              "tex": "T_{spring} = 2\\pi\\sqrt{\\frac{m}{k}} \\qquad T_{pendulum} = 2\\pi\\sqrt{\\frac{L}{g}}"
            },
            {
              "type": "p",
              "en": "For the mass-spring system, a heavier mass swings more sluggishly (longer period) and a stiffer spring snaps back faster (shorter period). Crucially, the period does NOT depend on the amplitude: pull the mass twice as far and it still takes the same time to complete a cycle, because the larger restoring force exactly compensates for the longer path.",
              "zh": "对于弹簧振子，质量越大摆动越迟缓（周期更长），弹簧越硬回弹越快（周期更短）。关键在于，周期不依赖于振幅：把质量拉远一倍，它完成一个循环所需的时间仍然相同，因为更大的回复力恰好补偿了更长的路径。"
            },
            {
              "type": "p",
              "en": "For the pendulum, the period depends only on the length $L$ and the local gravitational field strength $g$. It does NOT depend on the mass of the bob, and (for small swings) not on the amplitude either. This mass-independence is why all pendulums of the same length keep the same time, whether the bob is lead or cork.",
              "zh": "对于单摆，周期只取决于摆长 $L$ 和当地的重力场强度 $g$。它不依赖于摆球的质量，并且（对于小摆角）也不依赖于振幅。正是这种质量无关性，使得所有相同长度的单摆无论摆球是铅还是软木都保持相同的走时。"
            },
            {
              "type": "note",
              "en": "AP exam tip: to double a spring system's period you must QUADRUPLE the mass (period goes as $\\sqrt{m}$), and to double a pendulum's period you must quadruple the length. A frequent trap answer assumes period is proportional to mass or length directly — remember the square root.",
              "zh": "AP 考试提示：要使弹簧系统的周期加倍，必须把质量变为四倍（周期正比于 $\\sqrt{m}$）；要使单摆周期加倍，必须把摆长变为四倍。一个常见的陷阱选项误以为周期与质量或摆长成正比——记住是平方根关系。"
            },
            {
              "type": "h2",
              "en": "Energy Transformation Through a Cycle",
              "zh": "一个周期中的能量转化"
            },
            {
              "type": "p",
              "en": "In an ideal oscillator with no friction, the total mechanical energy is constant and continuously trades between kinetic and potential forms. For a spring the elastic potential energy is $U = \\frac{1}{2}kx^2$ and the kinetic energy is $K = \\frac{1}{2}mv^2$.",
              "zh": "在无摩擦的理想振子中，总机械能恒定，并在动能与势能形式之间不断转换。对于弹簧，弹性势能为 $U = \\frac{1}{2}kx^2$，动能为 $K = \\frac{1}{2}mv^2$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "At the extremes: all energy is potential, $E = \\frac{1}{2}kA^2$, and kinetic energy is zero.",
                  "zh": "在两端：能量全部是势能，$E = \\frac{1}{2}kA^2$，动能为零。"
                },
                {
                  "en": "At equilibrium: all energy is kinetic, $E = \\frac{1}{2}mv_{max}^2$, and potential energy is zero.",
                  "zh": "在平衡位置：能量全部是动能，$E = \\frac{1}{2}mv_{max}^2$，势能为零。"
                },
                {
                  "en": "Everywhere in between the two shares add to the same constant total: $\\frac{1}{2}kx^2 + \\frac{1}{2}mv^2 = \\frac{1}{2}kA^2$.",
                  "zh": "在两者之间的任何位置，两部分之和都等于同一恒定总量：$\\frac{1}{2}kx^2 + \\frac{1}{2}mv^2 = \\frac{1}{2}kA^2$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Setting the two energy extremes equal gives the maximum speed directly: $\\frac{1}{2}mv_{max}^2 = \\frac{1}{2}kA^2$, so $v_{max} = A\\sqrt{k/m}$. Notice the kinetic energy peaks twice per cycle (each pass through the center), so the KE-versus-time graph oscillates at twice the frequency of the position graph.",
              "zh": "令两个能量极值相等即可直接得到最大速率：$\\frac{1}{2}mv_{max}^2 = \\frac{1}{2}kA^2$，故 $v_{max} = A\\sqrt{k/m}$。注意动能在每个周期中达到峰值两次（每次经过中心时），因此动能-时间图的振荡频率是位置图的两倍。"
            },
            {
              "type": "h2",
              "en": "Experimental Design: Measuring g with a Pendulum",
              "zh": "实验设计：用单摆测量 g"
            },
            {
              "type": "p",
              "en": "The pendulum period formula can be rearranged to measure the gravitational field strength $g$. Solving $T = 2\\pi\\sqrt{L/g}$ for $g$ gives $g = \\frac{4\\pi^2 L}{T^2}$. A clean experiment measures $T$ for several lengths $L$ and uses a graph to extract $g$, which averages out random timing errors.",
              "zh": "单摆周期公式可以重新整理以测量重力场强度 $g$。将 $T = 2\\pi\\sqrt{L/g}$ 解出 $g$，得 $g = \\frac{4\\pi^2 L}{T^2}$。一个规范的实验会测量多个摆长 $L$ 对应的 $T$，并用图象提取 $g$，从而平均掉随机计时误差。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "To reduce timing error, time 20 full swings with a stopwatch and divide by 20, rather than timing a single swing.",
                  "zh": "为减小计时误差，用秒表测量 20 个完整摆动的总时间再除以 20，而不是测量单次摆动。"
                },
                {
                  "en": "Keep the amplitude small (under about 15 degrees) so the small-angle assumption behind the formula holds.",
                  "zh": "保持振幅较小（约 15 度以内），使公式所依赖的小角度假设成立。"
                },
                {
                  "en": "Plot $T^2$ on the vertical axis against $L$ on the horizontal axis. The graph is a straight line through the origin with slope $\\frac{4\\pi^2}{g}$, so $g = \\frac{4\\pi^2}{\\text{slope}}$.",
                  "zh": "以 $T^2$ 为纵轴、$L$ 为横轴作图。图象是过原点的直线，斜率为 $\\frac{4\\pi^2}{g}$，故 $g = \\frac{4\\pi^2}{\\text{斜率}}$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: when asked to design an experiment, always linearize. Plotting $T^2$ versus $L$ gives a straight line whose slope isolates $g$; plotting $T$ versus $L$ gives a curve that is far harder to read. Graders reward choosing axes that produce a straight line.",
              "zh": "AP 考试提示：当被要求设计实验时，务必线性化。作 $T^2$ 对 $L$ 的图得到一条直线，其斜率单独给出 $g$；而作 $T$ 对 $L$ 的图得到一条难以读取的曲线。评分者青睐能产生直线的坐标选择。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Period and maximum speed of a mass-spring system",
                "zh": "例题 1：弹簧振子的周期与最大速率"
              },
              "problem": {
                "en": "A $0.50\\ \\text{kg}$ block on a frictionless table is attached to a spring with $k = 200\\ \\text{N/m}$ and pulled $0.10\\ \\text{m}$ from equilibrium before release. Find the period and the maximum speed.",
                "zh": "一个 $0.50\\ \\text{kg}$ 的滑块在无摩擦桌面上连接到劲度系数 $k = 200\\ \\text{N/m}$ 的弹簧，被拉离平衡位置 $0.10\\ \\text{m}$ 后释放。求周期和最大速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use the spring period formula.",
                  "zh": "使用弹簧周期公式。"
                },
                {
                  "type": "math",
                  "tex": "T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{0.50}{200}} = 2\\pi\\sqrt{0.0025} = 2\\pi(0.050) \\approx 0.31\\ \\text{s}"
                },
                {
                  "type": "p",
                  "en": "Maximum speed comes from equating maximum kinetic and potential energy.",
                  "zh": "最大速率由令最大动能与最大势能相等求得。"
                },
                {
                  "type": "math",
                  "tex": "v_{max} = A\\sqrt{\\frac{k}{m}} = 0.10\\sqrt{\\frac{200}{0.50}} = 0.10\\sqrt{400} = 0.10(20) = 2.0\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "Note the amplitude did not affect the period but does set the maximum speed.",
                  "zh": "注意振幅不影响周期，但决定了最大速率。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Measuring g from pendulum data",
                "zh": "例题 2：由单摆数据测量 g"
              },
              "problem": {
                "en": "A student times a pendulum of length $L = 1.00\\ \\text{m}$ and finds that 20 complete swings take $40.0\\ \\text{s}$. Determine the experimental value of $g$.",
                "zh": "一名学生对长度 $L = 1.00\\ \\text{m}$ 的单摆计时，发现 20 个完整摆动用时 $40.0\\ \\text{s}$。求 $g$ 的实验值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find the period of one swing.",
                  "zh": "首先求单次摆动的周期。"
                },
                {
                  "type": "math",
                  "tex": "T = \\frac{40.0\\ \\text{s}}{20} = 2.00\\ \\text{s}"
                },
                {
                  "type": "p",
                  "en": "Rearrange the pendulum formula for $g$ and substitute.",
                  "zh": "将单摆公式对 $g$ 求解并代入。"
                },
                {
                  "type": "math",
                  "tex": "g = \\frac{4\\pi^2 L}{T^2} = \\frac{4\\pi^2 (1.00)}{(2.00)^2} = \\frac{39.48}{4.00} \\approx 9.87\\ \\text{m/s}^2"
                },
                {
                  "type": "p",
                  "en": "This is very close to the accepted $9.8\\ \\text{m/s}^2$, confirming the method.",
                  "zh": "这与公认值 $9.8\\ \\text{m/s}^2$ 非常接近，验证了该方法。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which condition defines simple harmonic motion?",
                "zh": "哪个条件定义了简谐运动？"
              },
              "choices": [
                "The motion repeats at regular intervals",
                "The net force is constant in magnitude",
                "The restoring force is proportional to the displacement from equilibrium",
                "The object moves in a circle at constant speed"
              ],
              "answer": 2,
              "explanation": {
                "en": "SHM requires a restoring force proportional to displacement ($F = -kx$). Merely repeating (choice A) is not enough — a bouncing ball repeats but feels a constant gravitational force, so it is not SHM.",
                "zh": "简谐运动要求回复力与位移成正比（$F = -kx$）。仅仅重复（选项 A）是不够的——弹跳的球会重复，但受到恒定的重力，因此不是简谐运动。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A mass on a spring oscillates in SHM. At the instant the mass passes through the equilibrium position, which statement is correct?",
                "zh": "弹簧上的质量做简谐振动。当质量经过平衡位置的瞬间，哪种说法正确？"
              },
              "choices": [
                "Speed is maximum and acceleration is zero",
                "Speed is zero and acceleration is maximum",
                "Both speed and acceleration are maximum",
                "Both speed and acceleration are zero"
              ],
              "answer": 0,
              "explanation": {
                "en": "At equilibrium the restoring force (and thus acceleration) is zero, while the object is moving fastest. The tempting choice B describes the extremes, where the roles are exactly reversed.",
                "zh": "在平衡位置回复力（因而加速度）为零，而物体运动最快。诱人的选项 B 描述的是两端的情况，那里两者的角色恰好相反。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two identical springs are stretched from equilibrium: spring A by $2\\ \\text{cm}$ and spring B by $4\\ \\text{cm}$, then both are released. How do their periods of oscillation compare?",
                "zh": "两个相同的弹簧从平衡位置被拉伸：弹簧 A 拉伸 $2\\ \\text{cm}$，弹簧 B 拉伸 $4\\ \\text{cm}$，然后都被释放。它们的振动周期如何比较？"
              },
              "choices": [
                "A has twice the period of B",
                "B has twice the period of A",
                "B has four times the period of A",
                "They have the same period"
              ],
              "answer": 3,
              "explanation": {
                "en": "Period of a mass-spring system depends only on $m$ and $k$, not amplitude. Doubling the stretch does not change the period. The trap answers assume period grows with amplitude, but the larger restoring force exactly compensates.",
                "zh": "弹簧振子的周期只取决于 $m$ 和 $k$，与振幅无关。拉伸加倍不改变周期。陷阱选项误以为周期随振幅增大，但更大的回复力恰好补偿了这一点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A pendulum clock keeps perfect time on Earth. It is taken to the Moon, where $g$ is about one-sixth of Earth's. What happens to the period of the pendulum?",
                "zh": "一座摆钟在地球上走时精确。把它带到月球，那里的 $g$ 约为地球的六分之一。单摆的周期会怎样？"
              },
              "choices": [
                "It stays the same because period does not depend on $g$",
                "It becomes shorter",
                "It becomes longer",
                "It depends on the mass of the bob"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $T = 2\\pi\\sqrt{L/g}$, a smaller $g$ makes the period longer (the clock runs slow). The bob's mass is irrelevant, eliminating choice D.",
                "zh": "由于 $T = 2\\pi\\sqrt{L/g}$，较小的 $g$ 使周期变长（钟走得慢）。摆球的质量无关，排除选项 D。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a frictionless spring oscillator with amplitude $A$, at what displacement is the kinetic energy equal to the potential energy?",
                "zh": "在无摩擦、振幅为 $A$ 的弹簧振子中，在什么位移处动能等于势能？"
              },
              "choices": [
                "$x = 0$",
                "$x = A/2$",
                "$x = A/\\sqrt{2}$",
                "$x = A$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Total energy is $\\frac{1}{2}kA^2$. Setting $U = \\frac{1}{2}E$ gives $\\frac{1}{2}kx^2 = \\frac{1}{2}\\cdot\\frac{1}{2}kA^2$, so $x^2 = A^2/2$ and $x = A/\\sqrt{2}$. The tempting choice $A/2$ wrongly assumes energy splits evenly at half the amplitude, but energy depends on $x^2$.",
                "zh": "总能量为 $\\frac{1}{2}kA^2$。令 $U = \\frac{1}{2}E$，得 $\\frac{1}{2}kx^2 = \\frac{1}{2}\\cdot\\frac{1}{2}kA^2$，故 $x^2 = A^2/2$，$x = A/\\sqrt{2}$。诱人的选项 $A/2$ 错误地假设能量在半振幅处平分，但能量取决于 $x^2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $2.0\\ \\text{kg}$ mass on a spring of stiffness $k = 8.0\\ \\text{N/m}$ oscillates in SHM. Find the period in seconds. Use $\\pi \\approx 3.14$ and give your answer to the nearest tenth (one decimal place).",
                "zh": "一个 $2.0\\ \\text{kg}$ 的质量连接在劲度系数 $k = 8.0\\ \\text{N/m}$ 的弹簧上做简谐振动。求周期，单位秒。取 $\\pi \\approx 3.14$，答案保留一位小数。"
              },
              "answer": "3.1",
              "accept": [
                "3.1 s",
                "3.14"
              ],
              "explanation": {
                "en": "$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{2.0/8.0} = 2\\pi\\sqrt{0.25} = 2\\pi(0.5) = \\pi \\approx 3.1\\ \\text{s}$.",
                "zh": "$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{2.0/8.0} = 2\\pi\\sqrt{0.25} = 2\\pi(0.5) = \\pi \\approx 3.1\\ \\text{s}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A pendulum has a period of $1.0\\ \\text{s}$. To make its period $2.0\\ \\text{s}$, by what factor must its length be multiplied? Give an integer.",
                "zh": "一个单摆的周期为 $1.0\\ \\text{s}$。要使其周期变为 $2.0\\ \\text{s}$，摆长必须乘以多少倍？请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4x",
                "four"
              ],
              "explanation": {
                "en": "Since $T \\propto \\sqrt{L}$, doubling the period requires $\\sqrt{L}$ to double, so $L$ must increase by a factor of $2^2 = 4$. The common wrong answer of 2 forgets the square root.",
                "zh": "由于 $T \\propto \\sqrt{L}$，周期加倍需要 $\\sqrt{L}$ 加倍，故 $L$ 必须增大 $2^2 = 4$ 倍。常见错误答案 2 忽略了平方根。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a lab, a student times 20 complete swings of a $0.99\\ \\text{m}$ pendulum and gets $40.0\\ \\text{s}$ total. Using $g = \\frac{4\\pi^2 L}{T^2}$ with $\\pi^2 \\approx 9.87$, find the experimental value of $g$ in m/s². Give your answer to the nearest tenth (one decimal place).",
                "zh": "在实验室中，一名学生对 $0.99\\ \\text{m}$ 的单摆测量 20 个完整摆动，总用时 $40.0\\ \\text{s}$。用 $g = \\frac{4\\pi^2 L}{T^2}$（取 $\\pi^2 \\approx 9.87$），求 $g$ 的实验值，单位 m/s²，答案保留一位小数。"
              },
              "answer": "9.8",
              "accept": [
                "9.8 m/s^2",
                "9.77"
              ],
              "explanation": {
                "en": "One period is $T = 40.0/20 = 2.00\\ \\text{s}$. Then $g = \\frac{4(9.87)(0.99)}{(2.00)^2} = \\frac{39.08}{4.00} \\approx 9.8\\ \\text{m/s}^2$, matching the accepted value.",
                "zh": "一个周期为 $T = 40.0/20 = 2.00\\ \\text{s}$。则 $g = \\frac{4(9.87)(0.99)}{(2.00)^2} = \\frac{39.08}{4.00} \\approx 9.8\\ \\text{m/s}^2$，与公认值吻合。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "fluids",
      "title": "Unit 8: Fluids",
      "titleZh": "第八单元：流体",
      "lessons": [
        {
          "id": "density-pressure-buoyancy",
          "title": "Density, Pressure, and Buoyancy",
          "titleZh": "密度、压强与浮力",
          "content": [
            {
              "type": "h2",
              "en": "Fluids at Rest",
              "zh": "静止流体"
            },
            {
              "type": "p",
              "en": "A fluid is any substance that flows — liquids and gases both count. To describe fluids we stop tracking individual objects and instead use quantities defined at every point: density and pressure. Density $\\rho$ measures how much mass is packed into each unit of volume.",
              "zh": "流体是任何能够流动的物质——液体和气体都算。描述流体时，我们不再追踪单个物体，而是使用在每一点都有定义的量：密度和压强。密度 $\\rho$ 衡量单位体积内包含多少质量。"
            },
            {
              "type": "math",
              "tex": "\\rho = \\frac{m}{V}"
            },
            {
              "type": "p",
              "en": "Density is a scalar with SI units $\\text{kg/m}^3$. Fresh water has $\\rho = 1000\\ \\text{kg/m}^3$, a value worth memorizing. An object's density — not its total mass — decides whether it floats or sinks in a given fluid.",
              "zh": "密度是标量，SI 单位为 $\\text{kg/m}^3$。淡水的密度是 $\\rho = 1000\\ \\text{kg/m}^3$，这个数值值得记住。决定物体在某种流体中浮沉的是它的密度，而不是总质量。"
            },
            {
              "type": "h3",
              "en": "Pressure",
              "zh": "压强"
            },
            {
              "type": "p",
              "en": "Pressure is the magnitude of the perpendicular force a fluid exerts per unit area. It is a scalar: at a given point in a static fluid, the pressure pushes equally in all directions.",
              "zh": "压强是流体在单位面积上施加的垂直力的大小。它是标量：在静止流体中的某一点，压强向各个方向的推挤都相等。"
            },
            {
              "type": "math",
              "tex": "P = \\frac{F}{A}"
            },
            {
              "type": "p",
              "en": "The SI unit is the pascal, $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$. Atmospheric pressure at sea level is about $P_0 = 1.0 \\times 10^5\\ \\text{Pa}$. Below the surface of a fluid of uniform density, pressure grows with depth $h$ because each layer must support the weight of all the fluid above it:",
              "zh": "SI 单位是帕斯卡，$1\\ \\text{Pa} = 1\\ \\text{N/m}^2$。海平面处的大气压约为 $P_0 = 1.0 \\times 10^5\\ \\text{Pa}$。在密度均匀的流体表面以下，压强随深度 $h$ 增大，因为每一层流体都必须支撑其上方全部流体的重量："
            },
            {
              "type": "math",
              "tex": "P = P_0 + \\rho g h"
            },
            {
              "type": "p",
              "en": "Only the vertical depth matters — not the shape or width of the container. A narrow tube and a wide lake produce exactly the same pressure at the same depth below the surface. The quantity $\\rho g h$ alone is called the gauge pressure (the reading above atmospheric); adding $P_0$ gives the absolute pressure.",
              "zh": "只有竖直深度重要——与容器的形状或宽度无关。细管和宽阔的湖泊在液面下相同深度处产生的压强完全相同。单独的 $\\rho g h$ 称为表压（超出大气压的读数）；加上 $P_0$ 得到绝对压强。"
            },
            {
              "type": "note",
              "en": "AP exam tip: read carefully whether a question asks for gauge or absolute pressure. A tire gauge, a blood-pressure cuff, and most \"pressure at depth $h$\" answers of the form $\\rho g h$ are gauge pressures. If the problem says \"total\" or \"absolute,\" you must add $P_0$.",
              "zh": "AP 考试提示：仔细读题，判断问的是表压还是绝对压强。轮胎气压表、血压计以及大多数形如 $\\rho g h$ 的\"深度 $h$ 处压强\"答案都是表压。如果题目说\"总压强\"或\"绝对压强\"，必须加上 $P_0$。"
            },
            {
              "type": "h3",
              "en": "Pascal's Principle and Hydraulics",
              "zh": "帕斯卡原理与液压装置"
            },
            {
              "type": "p",
              "en": "Pascal's principle: a pressure change applied to an enclosed, incompressible fluid is transmitted undiminished to every point of the fluid and to the container walls. This is the physics of a hydraulic lift — two pistons of different areas connected by fluid share the same pressure:",
              "zh": "帕斯卡原理：施加在封闭的不可压缩流体上的压强变化会毫不衰减地传递到流体中的每一点以及容器壁。这就是液压升降机的物理原理——由流体连通的两个面积不同的活塞承受相同的压强："
            },
            {
              "type": "math",
              "tex": "\\frac{F_1}{A_1} = \\frac{F_2}{A_2}"
            },
            {
              "type": "p",
              "en": "A small force on the small piston produces a large force on the large piston. Energy is still conserved: the small piston must move through a proportionally larger distance, so the work input equals the work output for an ideal lift.",
              "zh": "作用在小活塞上的小力会在大活塞上产生大力。能量仍然守恒：小活塞必须移动成比例更长的距离，因此对理想升降机而言输入的功等于输出的功。"
            },
            {
              "type": "h3",
              "en": "Buoyancy and Archimedes' Principle",
              "zh": "浮力与阿基米德原理"
            },
            {
              "type": "p",
              "en": "Because pressure increases with depth, a submerged object feels a larger upward push on its bottom than the downward push on its top. The net upward force is the buoyant force. Archimedes' principle states that it equals the weight of the fluid the object displaces:",
              "zh": "因为压强随深度增大，浸入流体的物体底面受到的向上推力大于顶面受到的向下推力。这个净向上的力就是浮力。阿基米德原理指出，浮力等于物体排开的流体的重量："
            },
            {
              "type": "math",
              "tex": "F_b = \\rho_{fluid}\\, V_{sub}\\, g"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $\\rho_{obj} < \\rho_{fluid}$, the object floats, with a fraction submerged equal to $\\rho_{obj}/\\rho_{fluid}$ (so that $F_b$ exactly balances its weight).",
                  "zh": "若 $\\rho_{obj} < \\rho_{fluid}$，物体漂浮，浸没的体积分数等于 $\\rho_{obj}/\\rho_{fluid}$（使浮力恰好与重力平衡）。"
                },
                {
                  "en": "If $\\rho_{obj} > \\rho_{fluid}$, the object sinks; while fully submerged, $F_b = \\rho_{fluid} V g$ is still upward but smaller than the weight.",
                  "zh": "若 $\\rho_{obj} > \\rho_{fluid}$，物体下沉；完全浸没时浮力 $F_b = \\rho_{fluid} V g$ 仍然向上，但小于重力。"
                },
                {
                  "en": "The apparent weight of a submerged object (e.g., the reading of a scale it hangs from) is $W_{app} = W - F_b$.",
                  "zh": "浸没物体的视重（例如它所悬挂的弹簧秤读数）为 $W_{app} = W - F_b$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: in $F_b = \\rho_{fluid} V_{sub} g$, use the density of the FLUID and the volume actually SUBMERGED — never the density of the object, and never the object's full volume when it is only partly under the surface.",
              "zh": "常见错误：在 $F_b = \\rho_{fluid} V_{sub} g$ 中，必须用流体的密度和实际浸没的体积——绝不能用物体的密度，物体部分露出液面时也绝不能用它的全部体积。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Pressure at depth",
                "zh": "例题 1：深度处的压强"
              },
              "problem": {
                "en": "A diver is $5.0\\ \\text{m}$ below the surface of a freshwater lake ($\\rho = 1000\\ \\text{kg/m}^3$, $P_0 = 1.0 \\times 10^5\\ \\text{Pa}$, $g = 9.8\\ \\text{m/s}^2$). Find the gauge pressure and the absolute pressure at the diver's depth.",
                "zh": "一名潜水员位于淡水湖面下 $5.0\\ \\text{m}$ 处（$\\rho = 1000\\ \\text{kg/m}^3$，$P_0 = 1.0 \\times 10^5\\ \\text{Pa}$，$g = 9.8\\ \\text{m/s}^2$）。求该深度处的表压和绝对压强。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The gauge pressure is the extra pressure due to the water alone.",
                  "zh": "表压是仅由水产生的额外压强。"
                },
                {
                  "type": "math",
                  "tex": "P_{gauge} = \\rho g h = (1000)(9.8)(5.0) = 4.9 \\times 10^4\\ \\text{Pa}"
                },
                {
                  "type": "math",
                  "tex": "P_{abs} = P_0 + \\rho g h = 1.0 \\times 10^5 + 0.49 \\times 10^5 = 1.49 \\times 10^5\\ \\text{Pa}"
                },
                {
                  "type": "p",
                  "en": "Note that the width of the lake never entered the calculation — only the depth matters.",
                  "zh": "注意湖的宽度从未进入计算——只有深度重要。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A floating block",
                "zh": "例题 2：漂浮的木块"
              },
              "problem": {
                "en": "A block of density $800\\ \\text{kg/m}^3$ and volume $0.020\\ \\text{m}^3$ floats in water. (a) What fraction of its volume is submerged? (b) What is the buoyant force on it? Use $g = 9.8\\ \\text{m/s}^2$.",
                "zh": "一个密度为 $800\\ \\text{kg/m}^3$、体积为 $0.020\\ \\text{m}^3$ 的木块漂浮在水中。(a) 它浸没的体积占多大比例？(b) 它受到的浮力是多少？取 $g = 9.8\\ \\text{m/s}^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Floating means $F_b = W$, so $\\rho_{fluid} V_{sub} g = \\rho_{obj} V g$, giving",
                  "zh": "(a) 漂浮意味着 $F_b = W$，即 $\\rho_{fluid} V_{sub} g = \\rho_{obj} V g$，故"
                },
                {
                  "type": "math",
                  "tex": "\\frac{V_{sub}}{V} = \\frac{\\rho_{obj}}{\\rho_{fluid}} = \\frac{800}{1000} = 0.80"
                },
                {
                  "type": "p",
                  "en": "So $80\\%$ of the block is underwater. (b) Because the block floats in equilibrium, the buoyant force simply equals its weight:",
                  "zh": "所以木块 $80\\%$ 的体积在水下。(b) 由于木块处于漂浮平衡状态，浮力恰好等于其重力："
                },
                {
                  "type": "math",
                  "tex": "F_b = W = \\rho_{obj} V g = (800)(0.020)(9.8) = 156.8\\ \\text{N} \\approx 1.6 \\times 10^2\\ \\text{N}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Three open containers — a narrow cylinder, a wide cylinder, and a cone-shaped vase — are filled with water to the same depth. How do the water pressures at the bottom of each container compare?",
                "zh": "三个敞口容器——细圆筒、宽圆筒和锥形花瓶——装水至相同深度。三个容器底部的水压强如何比较？"
              },
              "choices": [
                "Greatest in the wide cylinder because it holds the most water",
                "Greatest in the narrow cylinder because the water is more confined",
                "The same in all three containers",
                "Impossible to determine without the volumes"
              ],
              "answer": 2,
              "explanation": {
                "en": "Pressure at depth $h$ is $P = P_0 + \\rho g h$ and depends only on depth, not on the container's shape or the total amount of water. The \"more water means more pressure\" idea is tempting but wrong — the walls of a wide container support the extra weight.",
                "zh": "深度 $h$ 处的压强为 $P = P_0 + \\rho g h$，只取决于深度，与容器形状或总水量无关。\"水多压强大\"的想法很诱人但错误——宽容器多出的水重由器壁支撑。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A metal block has mass $5.4\\ \\text{kg}$ and volume $0.0020\\ \\text{m}^3$. What is its density in $\\text{kg/m}^3$? Give an integer.",
                "zh": "一个金属块质量为 $5.4\\ \\text{kg}$，体积为 $0.0020\\ \\text{m}^3$。它的密度是多少 $\\text{kg/m}^3$？请填一个整数。"
              },
              "answer": "2700",
              "accept": [
                "2700.0",
                "2,700"
              ],
              "explanation": {
                "en": "$\\rho = m/V = 5.4/0.0020 = 2700\\ \\text{kg/m}^3$ — the density of aluminum.",
                "zh": "$\\rho = m/V = 5.4/0.0020 = 2700\\ \\text{kg/m}^3$——这是铝的密度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a hydraulic lift, the input piston has area $A_1 = 0.002\\ \\text{m}^2$ and the output piston has area $A_2 = 0.2\\ \\text{m}^2$. A force of $50\\ \\text{N}$ is applied to the input piston. What force does the output piston exert?",
                "zh": "在一台液压升降机中，输入活塞面积为 $A_1 = 0.002\\ \\text{m}^2$，输出活塞面积为 $A_2 = 0.2\\ \\text{m}^2$。对输入活塞施加 $50\\ \\text{N}$ 的力。输出活塞产生多大的力？"
              },
              "choices": [
                "$0.5\\ \\text{N}$",
                "$50\\ \\text{N}$",
                "$500\\ \\text{N}$",
                "$5000\\ \\text{N}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "By Pascal's principle the pressure is the same at both pistons: $F_2 = F_1 (A_2/A_1) = 50 \\times 100 = 5000\\ \\text{N}$. Choice B is tempting if you think force, rather than pressure, is transmitted unchanged.",
                "zh": "根据帕斯卡原理，两个活塞处压强相同：$F_2 = F_1 (A_2/A_1) = 50 \\times 100 = 5000\\ \\text{N}$。若误以为传递不变的是力而不是压强，就会选 B。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the gauge pressure, in Pa, at a depth of $3.0\\ \\text{m}$ in fresh water ($\\rho = 1000\\ \\text{kg/m}^3$, $g = 9.8\\ \\text{m/s}^2$). Give an integer.",
                "zh": "求淡水中 $3.0\\ \\text{m}$ 深处的表压，单位 Pa（$\\rho = 1000\\ \\text{kg/m}^3$，$g = 9.8\\ \\text{m/s}^2$）。请填一个整数。"
              },
              "answer": "29400",
              "accept": [
                "29400.0",
                "29,400"
              ],
              "explanation": {
                "en": "Gauge pressure is the part above atmospheric: $P_{gauge} = \\rho g h = (1000)(9.8)(3.0) = 29400\\ \\text{Pa}$. Do not add $P_0$ — that would give the absolute pressure.",
                "zh": "表压是超出大气压的部分：$P_{gauge} = \\rho g h = (1000)(9.8)(3.0) = 29400\\ \\text{Pa}$。不要加 $P_0$——加上就是绝对压强了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A steel ball and an aluminum ball have the same volume. Both are held fully submerged in water. Which experiences the larger buoyant force?",
                "zh": "一个钢球和一个铝球体积相同，都被完全浸没在水中。哪一个受到的浮力更大？"
              },
              "choices": [
                "The steel ball, because it is heavier",
                "The aluminum ball, because it is closer to floating",
                "Both experience the same buoyant force",
                "Neither — buoyant force is zero for objects denser than water"
              ],
              "answer": 2,
              "explanation": {
                "en": "$F_b = \\rho_{fluid} V_{sub} g$ depends only on the fluid's density and the displaced volume, which are identical here. The \"heavier feels more force\" intuition confuses buoyant force with weight; the steel ball has the larger weight, so it has the smaller apparent weight ratio, but the same $F_b$.",
                "zh": "$F_b = \\rho_{fluid} V_{sub} g$ 只取决于流体密度和排开的体积，两者在此完全相同。\"重的受力大\"的直觉混淆了浮力和重力；钢球重力更大，但浮力相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An ice cube floats in a glass of water filled to the brim. When the ice melts completely, the water level will:",
                "zh": "一块冰漂浮在盛满水的杯中。冰完全融化后，水面将："
              },
              "choices": [
                "Rise, causing the glass to overflow",
                "Fall slightly",
                "Stay exactly the same",
                "First rise, then fall"
              ],
              "answer": 2,
              "explanation": {
                "en": "While floating, the ice displaces a volume of water whose weight equals the ice's weight. When it melts, it becomes exactly that weight of water, which fills exactly the volume it was displacing. Choice A is tempting because the ice sticks up above the surface, but that protruding part corresponds to ice's lower density.",
                "zh": "漂浮时，冰排开的水的重量等于冰自身的重量。融化后它变成恰好这么重的水，正好填满原先排开的体积。因为冰露出水面，选 A 很诱人，但露出的部分正对应冰较小的密度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rock hangs from a spring scale that reads $29.4\\ \\text{N}$ in air and $19.6\\ \\text{N}$ when the rock is fully submerged in water ($\\rho_w = 1000\\ \\text{kg/m}^3$, $g = 9.8\\ \\text{m/s}^2$). What is the density of the rock in $\\text{kg/m}^3$? Give an integer.",
                "zh": "一块岩石挂在弹簧秤上，在空气中读数为 $29.4\\ \\text{N}$，完全浸没在水中时读数为 $19.6\\ \\text{N}$（$\\rho_w = 1000\\ \\text{kg/m}^3$，$g = 9.8\\ \\text{m/s}^2$）。岩石的密度是多少 $\\text{kg/m}^3$？请填一个整数。"
              },
              "answer": "3000",
              "accept": [
                "3000.0",
                "3,000"
              ],
              "explanation": {
                "en": "The buoyant force is the difference in readings: $F_b = 29.4 - 19.6 = 9.8\\ \\text{N}$. Then $V = F_b/(\\rho_w g) = 9.8/9800 = 0.0010\\ \\text{m}^3$, and $m = 29.4/9.8 = 3.0\\ \\text{kg}$, so $\\rho = 3.0/0.0010 = 3000\\ \\text{kg/m}^3$.",
                "zh": "浮力是两次读数之差：$F_b = 29.4 - 19.6 = 9.8\\ \\text{N}$。于是 $V = F_b/(\\rho_w g) = 9.8/9800 = 0.0010\\ \\text{m}^3$，$m = 29.4/9.8 = 3.0\\ \\text{kg}$，故 $\\rho = 3.0/0.0010 = 3000\\ \\text{kg/m}^3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student must measure the density of an irregularly shaped stone using only a balance, a graduated cylinder, and water. Which procedure works?",
                "zh": "一名学生只能使用天平、量筒和水来测量一块形状不规则的石头的密度。下列哪个方案可行？"
              },
              "choices": [
                "Measure the mass, then estimate the volume from the stone's longest dimension cubed",
                "Measure the mass, then find the volume from the rise in water level when the stone is fully submerged in the cylinder",
                "Float the stone in the cylinder and read the water-level rise",
                "Weigh the stone in water only and divide by $g$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Water displacement gives the exact volume of an irregular solid: $V = \\Delta V_{water}$, and then $\\rho = m/V$. Choice C fails because a stone denser than water will not float, and even for a floater the level rise would give only the submerged volume. Choice A is a rough guess, not a measurement.",
                "zh": "排水法能精确给出不规则固体的体积：$V = \\Delta V_{water}$，然后 $\\rho = m/V$。C 不可行，因为密度大于水的石头不会漂浮；即使能漂浮，水面上升也只反映浸没部分的体积。A 只是粗略估计，不是测量。"
              }
            }
          ]
        },
        {
          "id": "fluid-flow-bernoulli",
          "title": "Fluid Flow and Bernoulli's Equation",
          "titleZh": "流体流动与伯努利方程",
          "content": [
            {
              "type": "h2",
              "en": "Moving Fluids",
              "zh": "流动的流体"
            },
            {
              "type": "p",
              "en": "Real flowing water swirls, drags on pipe walls, and loses energy to friction. To make flow tractable at the AP 1 level we model an ideal fluid. Every result in this lesson — the continuity equation and Bernoulli's equation — is built on these assumptions:",
              "zh": "真实流动的水会打旋、与管壁摩擦并因摩擦损失能量。为了在 AP 1 的水平上处理流动问题，我们采用理想流体模型。本课的所有结论——连续性方程和伯努利方程——都建立在以下假设之上："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Incompressible: the density $\\rho$ is the same everywhere in the flow.",
                  "zh": "不可压缩：流体中各处密度 $\\rho$ 相同。"
                },
                {
                  "en": "Nonviscous: no internal friction, so no mechanical energy is lost to heat.",
                  "zh": "无黏性：没有内摩擦，因此机械能不会转化为热而损失。"
                },
                {
                  "en": "Steady (laminar): the velocity at each point does not change with time; fluid follows smooth streamlines, not turbulent eddies.",
                  "zh": "定常（层流）：每一点的流速不随时间变化；流体沿光滑的流线流动，而非湍流旋涡。"
                },
                {
                  "en": "Irrotational: no whirlpools or swirling within the flow.",
                  "zh": "无旋：流动内部没有漩涡或回旋。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Continuity Equation",
              "zh": "连续性方程"
            },
            {
              "type": "p",
              "en": "In steady flow, whatever volume of fluid enters a pipe each second must also leave it each second — an incompressible fluid cannot pile up or vanish. The volume flow rate $Q = Av$ (in $\\text{m}^3/\\text{s}$) is therefore the same at every cross-section:",
              "zh": "在定常流动中，每秒流入管道的流体体积必定等于每秒流出的体积——不可压缩流体既不能堆积也不能消失。因此体积流量 $Q = Av$（单位 $\\text{m}^3/\\text{s}$）在每个横截面上都相同："
            },
            {
              "type": "math",
              "tex": "A_1 v_1 = A_2 v_2"
            },
            {
              "type": "p",
              "en": "This is why a wide, lazy river speeds up where its channel narrows, and why you make a garden hose spray farther by covering part of the opening with your thumb: smaller area forces larger speed. Speed and area are inversely proportional along the flow.",
              "zh": "这就是为什么宽阔平缓的河流在河道变窄处会加速，也是为什么用拇指堵住部分出水口能让浇花水管喷得更远：截面积变小迫使流速变大。沿流动方向，流速与截面积成反比。"
            },
            {
              "type": "h3",
              "en": "Bernoulli's Equation: Energy Conservation per Volume",
              "zh": "伯努利方程：单位体积的能量守恒"
            },
            {
              "type": "p",
              "en": "Bernoulli's equation is conservation of energy applied to each cubic meter of an ideal fluid. Take the work-energy theorem, divide every term by volume, and each piece becomes an energy density: $\\tfrac{1}{2}\\rho v^2$ is kinetic energy per volume, $\\rho g y$ is gravitational potential energy per volume, and pressure $P$ plays the role of work done per volume by the surrounding fluid. Along a streamline:",
              "zh": "伯努利方程就是对理想流体的每一立方米应用能量守恒。将功-能定理的每一项除以体积，每一部分都成为能量密度：$\\tfrac{1}{2}\\rho v^2$ 是单位体积的动能，$\\rho g y$ 是单位体积的重力势能，而压强 $P$ 充当周围流体对单位体积所做的功。沿一条流线："
            },
            {
              "type": "math",
              "tex": "P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g y_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g y_2"
            },
            {
              "type": "p",
              "en": "The most-quoted consequence: at the same height, where an ideal fluid moves faster, its pressure is lower. The fluid speeds up precisely because a net force — a pressure difference — pushes it from the high-pressure region toward the low-pressure region.",
              "zh": "最常被引用的推论：在相同高度上，理想流体流速越快的地方压强越低。流体之所以加速，正是因为压强差产生的净力把它从高压区域推向低压区域。"
            },
            {
              "type": "note",
              "en": "AP exam tip: many students write \"faster because pressure is lower,\" reversing cause and effect, or apply Bernoulli across two different streamlines. For a justification question, argue from energy conservation along one streamline: as the fluid enters the narrow section, continuity requires it to speed up, so its kinetic energy per volume rises, and the pressure must drop to pay for it.",
              "zh": "AP 考试提示：许多学生写\"因为压强低所以变快\"，颠倒了因果，或者在两条不同流线之间套用伯努利方程。回答论证题时，应沿同一条流线用能量守恒论证：流体进入窄段时，连续性要求它加速，单位体积动能增大，压强必须降低来提供这部分能量。"
            },
            {
              "type": "h3",
              "en": "Applications",
              "zh": "应用"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Airplane wing (qualitative): air travels faster over the curved top surface than beneath the wing, so the pressure above is lower than the pressure below, producing a net upward force. (A complete explanation also requires the wing deflecting air downward — Newton's third law.)",
                  "zh": "机翼（定性）：空气流过弯曲上表面的速度比机翼下方快，因此上方压强低于下方压强，产生净向上的力。（完整的解释还需考虑机翼将空气向下偏转——牛顿第三定律。）"
                },
                {
                  "en": "Spray bottle / atomizer: squeezing the bulb drives fast air across the top of a vertical tube; the low pressure there lets atmospheric pressure push liquid up the tube into the airstream.",
                  "zh": "喷雾瓶/雾化器：挤压气囊使高速气流掠过竖直细管的顶端；那里的低压使大气压把液体沿管推入气流中。"
                },
                {
                  "en": "Wind lifting a roof: fast air streaming over a roof lowers the pressure above it, while the still air inside the house keeps pushing up with full atmospheric pressure.",
                  "zh": "大风掀屋顶：快速掠过屋顶的气流降低了屋顶上方的压强，而屋内静止的空气仍以完整的大气压向上推。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Torricelli's theorem treats a tank leaking through a small hole. Apply Bernoulli between the open top surface (large area, so $v \\approx 0$; pressure $P_0$) and the hole a depth $h$ below (also at pressure $P_0$). The pressure terms cancel and $\\rho g h = \\tfrac{1}{2}\\rho v^2$, giving",
              "zh": "托里拆利定理处理从小孔漏水的水箱。在敞开的液面（面积大，故 $v \\approx 0$；压强为 $P_0$）与其下方深度 $h$ 处的小孔（压强同为 $P_0$）之间应用伯努利方程。压强项相消，得 $\\rho g h = \\tfrac{1}{2}\\rho v^2$，即"
            },
            {
              "type": "math",
              "tex": "v = \\sqrt{2 g h}"
            },
            {
              "type": "p",
              "en": "This is the same speed an object would gain falling freely through height $h$ — no surprise, since both results are energy conservation. Remember when Bernoulli applies: steady, incompressible, nonviscous flow along a streamline. It fails for honey in a tube (viscous), rapids and wakes (turbulent), and situations with pumps adding energy mid-stream.",
              "zh": "这与物体自由下落高度 $h$ 获得的速度相同——毫不奇怪，因为两者都是能量守恒的结果。记住伯努利方程的适用条件：沿流线的定常、不可压缩、无黏性流动。它不适用于管中的蜂蜜（黏性）、急流与尾流（湍流），以及中途有泵向流体输入能量的情形。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A narrowing horizontal pipe",
                "zh": "例题 1：变窄的水平管道"
              },
              "problem": {
                "en": "Water ($\\rho = 1000\\ \\text{kg/m}^3$) flows at $2.0\\ \\text{m/s}$ through a horizontal pipe of cross-sectional area $0.080\\ \\text{m}^2$. The pipe narrows to $0.020\\ \\text{m}^2$. Find (a) the speed in the narrow section and (b) the pressure drop between the wide and narrow sections.",
                "zh": "水（$\\rho = 1000\\ \\text{kg/m}^3$）以 $2.0\\ \\text{m/s}$ 流过横截面积为 $0.080\\ \\text{m}^2$ 的水平管道。管道收窄至 $0.020\\ \\text{m}^2$。求 (a) 窄段中的流速；(b) 宽段与窄段之间的压强差。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Continuity:",
                  "zh": "(a) 连续性方程："
                },
                {
                  "type": "math",
                  "tex": "v_2 = \\frac{A_1 v_1}{A_2} = \\frac{(0.080)(2.0)}{0.020} = 8.0\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "(b) The pipe is horizontal, so $y_1 = y_2$ and the height terms cancel in Bernoulli's equation:",
                  "zh": "(b) 管道水平，$y_1 = y_2$，伯努利方程中的高度项相消："
                },
                {
                  "type": "math",
                  "tex": "P_1 - P_2 = \\tfrac{1}{2}\\rho (v_2^2 - v_1^2) = \\tfrac{1}{2}(1000)(64 - 4) = 3.0 \\times 10^4\\ \\text{Pa}"
                },
                {
                  "type": "p",
                  "en": "The pressure is lower in the narrow, fast section — the pressure difference is exactly what accelerated the water.",
                  "zh": "窄而快的一段压强更低——这个压强差正是使水加速的原因。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Torricelli's theorem",
                "zh": "例题 2：托里拆利定理"
              },
              "problem": {
                "en": "A large open storage tank has a small leak $2.5\\ \\text{m}$ below the water surface. Using $g = 9.8\\ \\text{m/s}^2$, find the speed of the water leaving the hole. Explain why the tank's cross-sectional area does not matter.",
                "zh": "一个大型敞口水箱在水面下 $2.5\\ \\text{m}$ 处有一个小漏孔。取 $g = 9.8\\ \\text{m/s}^2$，求水从孔中流出的速度，并解释为什么水箱的横截面积无关紧要。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Both the top surface and the hole are open to the atmosphere, so $P_1 = P_2 = P_0$. Because the tank is large, continuity makes the surface speed negligible ($A_{tank} \\gg A_{hole}$ forces $v_{top} \\approx 0$). Bernoulli reduces to $\\rho g h = \\tfrac{1}{2}\\rho v^2$:",
                  "zh": "液面和小孔都与大气相通，故 $P_1 = P_2 = P_0$。因为水箱很大，由连续性方程知液面下降速度可忽略（$A_{tank} \\gg A_{hole}$ 使 $v_{top} \\approx 0$）。伯努利方程化为 $\\rho g h = \\tfrac{1}{2}\\rho v^2$："
                },
                {
                  "type": "math",
                  "tex": "v = \\sqrt{2 g h} = \\sqrt{2(9.8)(2.5)} = \\sqrt{49} = 7.0\\ \\text{m/s}"
                },
                {
                  "type": "p",
                  "en": "The tank's area only affects how fast the surface drops, which we already argued is negligible; the efflux speed depends only on the depth $h$ of the hole below the surface.",
                  "zh": "水箱面积只影响液面下降的快慢，而我们已论证这可以忽略；流出速度只取决于孔在液面下的深度 $h$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A river flows smoothly from a wide section into a narrow gorge. The water speeds up in the gorge because:",
                "zh": "一条河从宽阔河段平稳流入狭窄的峡谷。水在峡谷中加速是因为："
              },
              "choices": [
                "Gravity always accelerates flowing water",
                "The same volume of water per second must pass through a smaller area",
                "The pressure is higher in the narrow section, pushing the water forward",
                "The water becomes less dense in the narrow section"
              ],
              "answer": 1,
              "explanation": {
                "en": "Continuity ($A_1 v_1 = A_2 v_2$) expresses conservation of volume for an incompressible fluid: the flow rate through every cross-section is equal, so smaller area means larger speed. Choice C is backwards — the pressure is lower in the fast, narrow section; water is incompressible, ruling out D.",
                "zh": "连续性方程（$A_1 v_1 = A_2 v_2$）表达了不可压缩流体的体积守恒：每个横截面的流量相等，因此面积越小流速越大。C 恰好说反了——窄而快的河段压强更低；水不可压缩，排除 D。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Water flows at $2\\ \\text{m/s}$ through a pipe of cross-sectional area $0.06\\ \\text{m}^2$. The pipe narrows to $0.03\\ \\text{m}^2$. What is the speed in the narrow section, in m/s? Give an integer.",
                "zh": "水以 $2\\ \\text{m/s}$ 流过横截面积为 $0.06\\ \\text{m}^2$ 的管道。管道收窄至 $0.03\\ \\text{m}^2$。窄段中的流速是多少 m/s？请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "$v_2 = A_1 v_1 / A_2 = (0.06)(2)/0.03 = 4\\ \\text{m/s}$. Halving the area doubles the speed.",
                "zh": "$v_2 = A_1 v_1 / A_2 = (0.06)(2)/0.03 = 4\\ \\text{m/s}$。面积减半，流速加倍。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student holds a strip of paper below her lips and blows hard across its top surface. The paper rises. The best explanation is:",
                "zh": "一名学生把一张纸条放在嘴唇下方，用力沿纸条上表面吹气。纸条向上飘起。最佳解释是："
              },
              "choices": [
                "The moving air above the paper is at lower pressure than the still air below it",
                "The breath pushes down on the paper, which rebounds upward",
                "The moving air drags the paper along by friction",
                "Blowing heats the air, and hot air rises, carrying the paper"
              ],
              "answer": 0,
              "explanation": {
                "en": "Fast-moving air over the top has lower pressure (Bernoulli), while the still air beneath pushes up with full atmospheric pressure; the pressure difference lifts the paper. Choice C describes viscous drag, which would pull the paper forward, not upward.",
                "zh": "上方快速流动的空气压强较低（伯努利原理），而下方静止空气仍以完整的大气压向上推；压强差把纸托起。C 描述的是黏性拖曳，那只会把纸向前带，而不是向上。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A large open tank has a small hole $1.6\\ \\text{m}$ below the water surface. Using $g = 9.8\\ \\text{m/s}^2$, find the speed of the water exiting the hole, in m/s. Give your answer to one decimal place.",
                "zh": "一个大型敞口水箱在水面下 $1.6\\ \\text{m}$ 处有一个小孔。取 $g = 9.8\\ \\text{m/s}^2$，求水流出小孔的速度，单位 m/s。请保留一位小数。"
              },
              "answer": "5.6",
              "accept": [
                "5.60"
              ],
              "explanation": {
                "en": "Torricelli's theorem: $v = \\sqrt{2gh} = \\sqrt{2(9.8)(1.6)} = \\sqrt{31.36} = 5.6\\ \\text{m/s}$ — the same speed as free fall through $1.6\\ \\text{m}$.",
                "zh": "托里拆利定理：$v = \\sqrt{2gh} = \\sqrt{2(9.8)(1.6)} = \\sqrt{31.36} = 5.6\\ \\text{m/s}$——与自由下落 $1.6\\ \\text{m}$ 获得的速度相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An ideal fluid flows through a horizontal pipe that narrows. Comparing the narrow section to the wide section, in the narrow section the fluid has:",
                "zh": "理想流体流过一段变窄的水平管道。与宽段相比，窄段中的流体："
              },
              "choices": [
                "Higher speed and higher pressure",
                "Higher speed and lower pressure",
                "Lower speed and higher pressure",
                "The same speed but lower pressure"
              ],
              "answer": 1,
              "explanation": {
                "en": "Continuity forces the speed up in the narrow section; with the height unchanged, Bernoulli then requires the pressure to be lower there. \"Squeezed pipe means squeezed (higher-pressure) fluid\" is the classic tempting error — pressure drops where flow is fast.",
                "zh": "连续性方程使窄段流速增大；高度不变时，伯努利方程要求那里的压强更低。\"管子被挤压所以流体压强更高\"是经典的诱人错误——流速快的地方压强反而低。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In which situation is it LEAST appropriate to apply Bernoulli's equation?",
                "zh": "下列哪种情形最不适合应用伯努利方程？"
              },
              "choices": [
                "Water draining steadily from a small hole in a large tank",
                "Air streaming smoothly over an airplane wing at moderate speed",
                "Thick honey flowing slowly through a narrow tube",
                "Water in a smooth, steady flow through a gradually narrowing horizontal pipe"
              ],
              "answer": 2,
              "explanation": {
                "en": "Bernoulli's equation assumes a nonviscous fluid, and honey is dominated by viscosity — internal friction converts mechanical energy to heat, so the energy-conservation bookkeeping fails. The other three are close to steady, incompressible, low-viscosity flow.",
                "zh": "伯努利方程假设流体无黏性，而蜂蜜的流动由黏性主导——内摩擦把机械能转化为热，能量守恒的记账就不成立了。其余三种情形都接近定常、不可压缩、低黏性流动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Water ($\\rho = 1000\\ \\text{kg/m}^3$) flows at $3\\ \\text{m/s}$ through a horizontal pipe. The pipe's cross-sectional area is then halved. Find the pressure drop $P_1 - P_2$ between the wide and narrow sections, in Pa. Give an integer.",
                "zh": "水（$\\rho = 1000\\ \\text{kg/m}^3$）以 $3\\ \\text{m/s}$ 流过一段水平管道。随后管道横截面积减半。求宽段与窄段之间的压强差 $P_1 - P_2$，单位 Pa。请填一个整数。"
              },
              "answer": "13500",
              "accept": [
                "13500.0",
                "13,500"
              ],
              "explanation": {
                "en": "Continuity: halving the area doubles the speed, so $v_2 = 6\\ \\text{m/s}$. Horizontal pipe, so $P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = \\tfrac{1}{2}(1000)(36 - 9) = 13500\\ \\text{Pa}$. Forgetting to first find $v_2$ from continuity is the most common slip.",
                "zh": "连续性方程：面积减半流速加倍，故 $v_2 = 6\\ \\text{m/s}$。管道水平，所以 $P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = \\tfrac{1}{2}(1000)(36 - 9) = 13500\\ \\text{Pa}$。最常见的失误是忘记先用连续性方程求出 $v_2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student punches small holes at several depths $h$ below the water line of a large tank, measures the efflux speed $v$ of each jet, and plots $v^2$ on the vertical axis versus $h$ on the horizontal axis. If Torricelli's theorem holds, the graph should be a straight line through the origin with slope closest to:",
                "zh": "一名学生在大水箱水面下不同深度 $h$ 处打若干小孔，测量每股水流的流出速度 $v$，并以 $v^2$ 为纵轴、$h$ 为横轴作图。若托里拆利定理成立，图象应为过原点的直线，其斜率最接近："
              },
              "choices": [
                "$4.9\\ \\text{m/s}^2$",
                "$9.8\\ \\text{m/s}^2$",
                "$19.6\\ \\text{m/s}^2$",
                "$96\\ \\text{m/s}^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Torricelli gives $v = \\sqrt{2gh}$, so $v^2 = 2gh$: a line through the origin with slope $2g = 19.6\\ \\text{m/s}^2$. Choice B ($g$) is tempting if you forget the factor of 2; linearizing data by plotting $v^2$ versus $h$ is a standard AP lab-analysis move.",
                "zh": "托里拆利定理给出 $v = \\sqrt{2gh}$，故 $v^2 = 2gh$：过原点、斜率为 $2g = 19.6\\ \\text{m/s}^2$ 的直线。忘记因子 2 就会选 B（$g$）；通过作 $v^2$-$h$ 图使数据线性化是 AP 实验分析的标准手法。"
              }
            }
          ]
        }
      ]
    }
  ]
}
