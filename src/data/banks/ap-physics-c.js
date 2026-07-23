export default {
  "kinematics/calculus-of-motion": [
    {
      "type": "mc",
      "question": {
        "en": "For one-dimensional motion, how is instantaneous velocity related to position $x(t)$?",
        "zh": "对于一维运动，瞬时速度与位置 $x(t)$ 的关系是什么？"
      },
      "choices": [
        "$v(t)=\\frac{dx}{dt}$",
        "$v(t)=\\int x(t)\\,dt$",
        "$v(t)=\\frac{d^2x}{dt^2}$",
        "$v(t)=\\frac{x(t)}{t}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Velocity is the first time-derivative of position, $v(t)=\\frac{dx}{dt}$. A tempting mistake is to use $x/t$, but that gives the average velocity over an interval starting at the origin, not the instantaneous rate of change.",
        "zh": "速度是位置对时间的一阶导数，$v(t)=\\frac{dx}{dt}$。一个常见的错误是用 $x/t$，但那给出的是从原点开始某段的平均速度，而不是瞬时变化率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is acceleration related to velocity $v(t)$ and position $x(t)$?",
        "zh": "加速度与速度 $v(t)$ 和位置 $x(t)$ 的关系是什么？"
      },
      "choices": [
        "$a=\\frac{dx}{dt}=\\int v\\,dt$",
        "$a=\\frac{dv}{dt}=\\frac{d^2x}{dt^2}$",
        "$a=\\int v\\,dt=\\frac{dx}{dt}$",
        "$a=\\frac{v}{t}=\\frac{x}{t^2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Acceleration is the derivative of velocity and the second derivative of position, $a=\\frac{dv}{dt}=\\frac{d^2x}{dt^2}$. Writing $a=v/t$ assumes constant acceleration from rest, which is not generally true.",
        "zh": "加速度是速度的导数，也是位置的二阶导数，$a=\\frac{dv}{dt}=\\frac{d^2x}{dt^2}$。写成 $a=v/t$ 假设了从静止开始的恒定加速度，这一般并不成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves with $x(t)=3t^3-2t$ (SI units). What is its velocity $v(t)$?",
        "zh": "一个质点的运动方程为 $x(t)=3t^3-2t$（国际单位）。它的速度 $v(t)$ 是多少？"
      },
      "choices": [
        "$9t^2-2t$",
        "$3t^2-2$",
        "$9t^2-2$",
        "$t^4-t^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Differentiate term by term: $\\frac{d}{dt}(3t^3)=9t^2$ and $\\frac{d}{dt}(-2t)=-2$, so $v(t)=9t^2-2$. A common slip is forgetting to bring down the exponent and writing $3t^2$ instead of $9t^2$.",
        "zh": "逐项求导：$\\frac{d}{dt}(3t^3)=9t^2$，$\\frac{d}{dt}(-2t)=-2$，所以 $v(t)=9t^2-2$。常见错误是忘记把指数乘下来，写成 $3t^2$ 而不是 $9t^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The velocity of a particle is $v(t)=6t-4$ (m/s). What is its acceleration at $t=5\\ \\text{s}$?",
        "zh": "一个质点的速度为 $v(t)=6t-4$（m/s）。在 $t=5\\ \\text{s}$ 时它的加速度是多少？"
      },
      "choices": [
        "$26\\ \\text{m/s}^2$",
        "$30\\ \\text{m/s}^2$",
        "$2\\ \\text{m/s}^2$",
        "$6\\ \\text{m/s}^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Acceleration is $\\frac{dv}{dt}=6\\ \\text{m/s}^2$, a constant independent of time. Plugging $t=5$ into $v(t)$ to get $26$ finds the velocity, not the acceleration.",
        "zh": "加速度是 $\\frac{dv}{dt}=6\\ \\text{m/s}^2$，是与时间无关的常数。把 $t=5$ 代入 $v(t)$ 得到 $26$ 求的是速度，而不是加速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $a(t)$ and initial velocity $v_0$, how do you recover the velocity $v(t)$?",
        "zh": "已知 $a(t)$ 和初速度 $v_0$，如何求得速度 $v(t)$？"
      },
      "choices": [
        "$v(t)=v_0+\\int_0^t a(t')\\,dt'$",
        "$v(t)=a(t)\\cdot t$",
        "$v(t)=\\frac{da}{dt}$",
        "$v(t)=v_0\\int_0^t a(t')\\,dt'$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrate acceleration and add the initial condition: $v(t)=v_0+\\int_0^t a(t')\\,dt'$. Using $a\\cdot t$ only works when $a$ is constant; for a time-varying $a(t)$ you must integrate.",
        "zh": "对加速度积分并加上初始条件：$v(t)=v_0+\\int_0^t a(t')\\,dt'$。用 $a\\cdot t$ 只在 $a$ 恒定时成立；对随时间变化的 $a(t)$ 必须积分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle starts at rest and has acceleration $a(t)=4t$ (m/s$^2$). What is $v(t)$?",
        "zh": "一个质点从静止开始，加速度为 $a(t)=4t$（m/s$^2$）。$v(t)$ 是多少？"
      },
      "choices": [
        "$4t^2$",
        "$2t^2$",
        "$4$",
        "$2t^2+4t$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Integrate: $\\int 4t\\,dt=2t^2$, and since it starts at rest $v_0=0$, so $v(t)=2t^2$. Forgetting to divide by the new exponent gives the incorrect $4t^2$.",
        "zh": "积分：$\\int 4t\\,dt=2t^2$，由于从静止开始 $v_0=0$，所以 $v(t)=2t^2$。忘记除以新指数会得到错误的 $4t^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $v$ versus $t$ is given. What does the area under the curve between $t_1$ and $t_2$ represent?",
        "zh": "给出 $v$ 对 $t$ 的图像。曲线在 $t_1$ 和 $t_2$ 之间下方的面积代表什么？"
      },
      "choices": [
        "the acceleration",
        "the average velocity",
        "the displacement $\\Delta x$",
        "the jerk"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $\\Delta x=\\int_{t_1}^{t_2} v\\,dt$, the signed area under a velocity-time graph is the displacement. The slope of that graph (not its area) is the acceleration.",
        "zh": "由于 $\\Delta x=\\int_{t_1}^{t_2} v\\,dt$，速度-时间图下方的带符号面积就是位移。该图的斜率（而不是面积）才是加速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car's velocity is $v(t)=t^2-6t+8$ (m/s). At what time(s) is the car momentarily at rest?",
        "zh": "一辆车的速度为 $v(t)=t^2-6t+8$（m/s）。在什么时刻车瞬时静止？"
      },
      "choices": [
        "only at $t=3\\ \\text{s}$",
        "at $t=0\\ \\text{s}$ only",
        "never",
        "at $t=2\\ \\text{s}$ and $t=4\\ \\text{s}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Set $v=0$: $t^2-6t+8=(t-2)(t-4)=0$, giving $t=2\\ \\text{s}$ and $t=4\\ \\text{s}$. Solving $a=0$ instead (from $2t-6=0$) mistakenly gives $t=3$, the time of minimum velocity, not zero velocity.",
        "zh": "令 $v=0$：$t^2-6t+8=(t-2)(t-4)=0$，得 $t=2\\ \\text{s}$ 和 $t=4\\ \\text{s}$。若改为解 $a=0$（$2t-6=0$）会错误地得到 $t=3$，那是速度最小的时刻，而不是速度为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has $a(t)=6t$ (m/s$^2$), with $v(0)=2\\ \\text{m/s}$ and $x(0)=1\\ \\text{m}$. What is $x(t)$?",
        "zh": "一个质点的 $a(t)=6t$（m/s$^2$），且 $v(0)=2\\ \\text{m/s}$，$x(0)=1\\ \\text{m}$。$x(t)$ 是多少？"
      },
      "choices": [
        "$t^3+2t+1$",
        "$3t^2+2t$",
        "$t^3+2$",
        "$6t^3+2t+1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrate once: $v(t)=3t^2+v_0=3t^2+2$. Integrate again: $x(t)=t^3+2t+x_0=t^3+2t+1$. Dropping the constants of integration (the initial position and velocity) loses the $+2t$ and $+1$ terms.",
        "zh": "第一次积分：$v(t)=3t^2+v_0=3t^2+2$。再次积分：$x(t)=t^3+2t+x_0=t^3+2t+1$。丢掉积分常数（初位置和初速度）会漏掉 $+2t$ 和 $+1$ 项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which quantity is defined as the time-derivative of acceleration, $\\frac{da}{dt}$?",
        "zh": "哪个量被定义为加速度对时间的导数 $\\frac{da}{dt}$？"
      },
      "choices": [
        "momentum",
        "jerk",
        "displacement",
        "velocity"
      ],
      "answer": 1,
      "explanation": {
        "en": "The derivative of acceleration with respect to time is called jerk. Velocity is instead the derivative of position and the integral (not derivative) of acceleration.",
        "zh": "加速度对时间的导数称为急动度（jerk）。速度则是位置的导数，是加速度的积分（而非导数）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves with $v(t)=3t^2$ (m/s) starting at $x(0)=0$. What is its displacement from $t=0$ to $t=2\\ \\text{s}$?",
        "zh": "一个质点以 $v(t)=3t^2$（m/s）运动，起点 $x(0)=0$。从 $t=0$ 到 $t=2\\ \\text{s}$ 的位移是多少？"
      },
      "choices": [
        "$24\\ \\text{m}$",
        "$12\\ \\text{m}$",
        "$8\\ \\text{m}$",
        "$6\\ \\text{m}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Displacement is $\\int_0^2 3t^2\\,dt=[t^3]_0^2=8\\ \\text{m}$. Simply multiplying the end-time velocity $v(2)=12$ by nothing meaningful, or using $v\\cdot t=12\\cdot 2=24$, ignores that velocity is not constant.",
        "zh": "位移是 $\\int_0^2 3t^2\\,dt=[t^3]_0^2=8\\ \\text{m}$。直接用终点速度 $v(2)=12$，或用 $v\\cdot t=12\\cdot 2=24$，忽略了速度并非恒定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At an instant the velocity is positive and the acceleration is negative. What is happening to the particle's speed?",
        "zh": "在某一时刻速度为正而加速度为负。此时质点的速率如何变化？"
      },
      "choices": [
        "speeding up",
        "moving backward",
        "constant speed",
        "slowing down"
      ],
      "answer": 3,
      "explanation": {
        "en": "When velocity and acceleration have opposite signs, the object is slowing down. A common error is to think negative acceleration always means slowing regardless of direction, but the key is that $v$ and $a$ point opposite ways here.",
        "zh": "当速度和加速度符号相反时，物体正在减速。常见误解是认为负加速度总是意味着减速，但关键在于此处 $v$ 与 $a$ 方向相反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has position $x(t)=2t^3-5t^2+4$ (m). What is its velocity at $t=2\\ \\text{s}$, in m/s?",
        "zh": "一个质点的位置为 $x(t)=2t^3-5t^2+4$（m）。它在 $t=2\\ \\text{s}$ 时的速度是多少（m/s）？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4",
        "4 m/s",
        "4m/s"
      ],
      "explanation": {
        "en": "Differentiate: $v(t)=6t^2-10t$. At $t=2$: $v=6(4)-10(2)=24-20=4\\ \\text{m/s}$. Plugging into $x(t)$ instead would give the position, not the velocity.",
        "zh": "求导：$v(t)=6t^2-10t$。当 $t=2$：$v=6(4)-10(2)=24-20=4\\ \\text{m/s}$。若代入 $x(t)$ 则得到位置，而不是速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has velocity $v(t)=4t^3-6t$ (m/s). What is its acceleration at $t=1\\ \\text{s}$, in m/s$^2$?",
        "zh": "一个质点的速度为 $v(t)=4t^3-6t$（m/s）。它在 $t=1\\ \\text{s}$ 时的加速度是多少（m/s$^2$）？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6",
        "6 m/s^2",
        "6m/s^2"
      ],
      "explanation": {
        "en": "Acceleration is $a(t)=\\frac{dv}{dt}=12t^2-6$. At $t=1$: $a=12-6=6\\ \\text{m/s}^2$. Evaluating $v(1)=-2$ instead reports velocity, not acceleration.",
        "zh": "加速度是 $a(t)=\\frac{dv}{dt}=12t^2-6$。当 $t=1$：$a=12-6=6\\ \\text{m/s}^2$。若求 $v(1)=-2$ 报告的是速度，而不是加速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle starts from rest with acceleration $a(t)=12t^2$ (m/s$^2$). What is its velocity at $t=2\\ \\text{s}$, in m/s?",
        "zh": "一个质点从静止开始，加速度为 $a(t)=12t^2$（m/s$^2$）。它在 $t=2\\ \\text{s}$ 时的速度是多少（m/s）？"
      },
      "answer": "32",
      "accept": [
        "32.0",
        "+32",
        "32 m/s",
        "32m/s"
      ],
      "explanation": {
        "en": "Integrate: $v(t)=\\int 12t^2\\,dt=4t^3$ with $v_0=0$. At $t=2$: $v=4(8)=32\\ \\text{m/s}$. Forgetting to integrate and using $a(2)=48$ reports acceleration instead of velocity.",
        "zh": "积分：$v(t)=\\int 12t^2\\,dt=4t^3$，$v_0=0$。当 $t=2$：$v=4(8)=32\\ \\text{m/s}$。忘记积分而用 $a(2)=48$ 报告的是加速度而不是速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has velocity $v(t)=2t+3$ (m/s) and starts at $x(0)=0$. What is its displacement from $t=0$ to $t=3\\ \\text{s}$, in meters?",
        "zh": "一个质点的速度为 $v(t)=2t+3$（m/s），起点 $x(0)=0$。从 $t=0$ 到 $t=3\\ \\text{s}$ 的位移是多少（米）？"
      },
      "answer": "18",
      "accept": [
        "18.0",
        "+18",
        "18 m",
        "18m"
      ],
      "explanation": {
        "en": "Displacement is $\\int_0^3 (2t+3)\\,dt=[t^2+3t]_0^3=9+9=18\\ \\text{m}$. Using $v(3)\\cdot 3=9\\cdot 3=27$ wrongly assumes constant velocity.",
        "zh": "位移是 $\\int_0^3 (2t+3)\\,dt=[t^2+3t]_0^3=9+9=18\\ \\text{m}$。用 $v(3)\\cdot 3=9\\cdot 3=27$ 错误地假设了速度恒定。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has acceleration $a(t)=6t$ (m/s$^2$) with $v(0)=0$ and $x(0)=0$. What is its position at $t=2\\ \\text{s}$, in meters?",
        "zh": "一个质点的加速度为 $a(t)=6t$（m/s$^2$），$v(0)=0$，$x(0)=0$。它在 $t=2\\ \\text{s}$ 时的位置是多少（米）？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8",
        "8 m",
        "8m"
      ],
      "explanation": {
        "en": "Integrate twice: $v(t)=3t^2$, then $x(t)=t^3$. At $t=2$: $x=8\\ \\text{m}$. Integrating only once and reporting $v(2)=12$ gives velocity, not position.",
        "zh": "两次积分：$v(t)=3t^2$，再 $x(t)=t^3$。当 $t=2$：$x=8\\ \\text{m}$。只积分一次并报告 $v(2)=12$ 得到的是速度，而不是位置。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The velocity is $v(t)=t^2-4$ (m/s). At what positive time (in seconds) is the particle momentarily at rest?",
        "zh": "速度为 $v(t)=t^2-4$（m/s）。质点在什么正时刻（秒）瞬时静止？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "2 s",
        "2s",
        "t=2"
      ],
      "explanation": {
        "en": "Set $v=0$: $t^2-4=0$ gives $t=\\pm 2$, and the positive root is $t=2\\ \\text{s}$. Setting the acceleration $2t=0$ instead gives $t=0$, which is not where the velocity vanishes.",
        "zh": "令 $v=0$：$t^2-4=0$ 得 $t=\\pm 2$，正根为 $t=2\\ \\text{s}$。若改为令加速度 $2t=0$ 得 $t=0$，那并不是速度为零的时刻。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has position $x(t)=t^3-9t$ (m). What is the magnitude of its acceleration at $t=3\\ \\text{s}$, in m/s$^2$?",
        "zh": "一个质点的位置为 $x(t)=t^3-9t$（m）。它在 $t=3\\ \\text{s}$ 时加速度的大小是多少（m/s$^2$）？"
      },
      "answer": "18",
      "accept": [
        "18.0",
        "+18",
        "18 m/s^2",
        "18m/s^2"
      ],
      "explanation": {
        "en": "First derivative: $v(t)=3t^2-9$; second derivative: $a(t)=6t$. At $t=3$: $a=18\\ \\text{m/s}^2$. Stopping after one derivative and using $v(3)=18$ happens to look similar but measures velocity, not acceleration.",
        "zh": "一阶导：$v(t)=3t^2-9$；二阶导：$a(t)=6t$。当 $t=3$：$a=18\\ \\text{m/s}^2$。只求一次导数并用 $v(3)=18$ 数值看似相同，但那是速度而非加速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle with $v(t)=3t^2-12$ (m/s) moves along a line. What is its total displacement from $t=0$ to $t=3\\ \\text{s}$, in meters?",
        "zh": "一个 $v(t)=3t^2-12$（m/s）的质点沿直线运动。从 $t=0$ 到 $t=3\\ \\text{s}$ 的总位移是多少（米）？"
      },
      "answer": "-9",
      "accept": [
        "-9.0",
        "-9 m",
        "-9m",
        "−9"
      ],
      "explanation": {
        "en": "Displacement is $\\int_0^3 (3t^2-12)\\,dt=[t^3-12t]_0^3=27-36=-9\\ \\text{m}$. Taking the absolute value of the integrand first would compute total distance traveled, which is a different (larger) quantity than net displacement.",
        "zh": "位移是 $\\int_0^3 (3t^2-12)\\,dt=[t^3-12t]_0^3=27-36=-9\\ \\text{m}$。若先对被积函数取绝对值算出的是总路程，那与净位移不同（且更大）。"
      }
    }
  ],
  "force-translational-dynamics/newtons-laws-forces": [
    {
      "type": "mc",
      "question": {
        "en": "A block of mass $m = 4.0\\,\\text{kg}$ rests on a frictionless horizontal surface. A single horizontal force of $12\\,\\text{N}$ acts on it. What is its acceleration?",
        "zh": "一个质量 $m = 4.0\\,\\text{kg}$ 的物块放在无摩擦的水平面上。一个 $12\\,\\text{N}$ 的水平力作用于它。它的加速度是多少?"
      },
      "choices": [
        "$3.0\\,\\text{m/s}^2$",
        "$0.33\\,\\text{m/s}^2$",
        "$8.0\\,\\text{m/s}^2$",
        "$48\\,\\text{m/s}^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Newton's second law gives $a = F/m = 12/4.0 = 3.0\\,\\text{m/s}^2$. Dividing mass by force instead of force by mass gives the inverted value, and multiplying force by mass gives $48$.",
        "zh": "牛顿第二定律给出 $a = F/m = 12/4.0 = 3.0\\,\\text{m/s}^2$。把质量除以力会得到倒数值,把力乘以质量则得到 $48$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement best expresses Newton's first law?",
        "zh": "下列哪项最准确地表述了牛顿第一定律?"
      },
      "choices": [
        "An object's acceleration is proportional to the net force on it.",
        "An object at rest or in uniform motion stays that way unless acted on by a net external force.",
        "For every action there is an equal and opposite reaction.",
        "The momentum of an isolated system is conserved."
      ],
      "answer": 1,
      "explanation": {
        "en": "The first law (inertia) states that velocity stays constant when the net force is zero. The proportionality of acceleration to force is the second law, and equal-and-opposite forces are the third law.",
        "zh": "第一定律(惯性定律)指出当合力为零时速度保持不变。加速度与力成正比是第二定律,作用力与反作用力相等且相反是第三定律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2.0\\,\\text{kg}$ object hangs at rest from a single vertical string. What is the tension in the string? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个 $2.0\\,\\text{kg}$ 的物体由一根竖直的绳静止悬挂。绳中的张力是多少?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "choices": [
        "$2.0\\,\\text{N}$",
        "$9.8\\,\\text{N}$",
        "$19.6\\,\\text{N}$",
        "$0\\,\\text{N}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At rest the net force is zero, so tension balances weight: $T = mg = 2.0 \\times 9.8 = 19.6\\,\\text{N}$. Reporting just the mass ignores $g$, and $9.8$ forgets the factor of mass.",
        "zh": "静止时合力为零,所以张力平衡重力:$T = mg = 2.0 \\times 9.8 = 19.6\\,\\text{N}$。只报出质量忽略了 $g$,而 $9.8$ 则漏掉了质量因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A book sits on a table. By Newton's third law, the reaction to the gravitational pull of Earth on the book is:",
        "zh": "一本书放在桌子上。根据牛顿第三定律,地球对书的引力的反作用力是:"
      },
      "choices": [
        "the normal force of the table on the book",
        "the normal force of the book on the table",
        "the weight of the book",
        "the gravitational pull of the book on Earth"
      ],
      "answer": 3,
      "explanation": {
        "en": "A third-law pair acts on two different bodies and is the same type of force. Earth pulls the book, so the reaction is the book pulling Earth gravitationally. The normal force is a separate contact interaction, not the reaction to gravity.",
        "zh": "第三定律的一对力作用在两个不同物体上且是同种性质的力。地球引力拉书,反作用力就是书对地球的万有引力。法向力是另一种接触作用,不是引力的反作用力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $5.0\\,\\text{kg}$ box is pushed across a rough floor with a $30\\,\\text{N}$ horizontal force while friction of $10\\,\\text{N}$ opposes it. What is the acceleration?",
        "zh": "一个 $5.0\\,\\text{kg}$ 的箱子被 $30\\,\\text{N}$ 的水平力推过粗糙地面,同时 $10\\,\\text{N}$ 的摩擦力与之相反。加速度是多少?"
      },
      "choices": [
        "$4.0\\,\\text{m/s}^2$",
        "$6.0\\,\\text{m/s}^2$",
        "$2.0\\,\\text{m/s}^2$",
        "$8.0\\,\\text{m/s}^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Use the net force: $F_{net} = 30 - 10 = 20\\,\\text{N}$, so $a = 20/5.0 = 4.0\\,\\text{m/s}^2$. Using the applied force alone ($30/5.0 = 6.0$) ignores friction.",
        "zh": "使用合力:$F_{net} = 30 - 10 = 20\\,\\text{N}$,所以 $a = 20/5.0 = 4.0\\,\\text{m/s}^2$。只用施加的力($30/5.0 = 6.0$)忽略了摩擦力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $10\\,\\text{kg}$ block on a $30^{\\circ}$ frictionless incline slides down. What is the magnitude of its acceleration along the incline? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个 $10\\,\\text{kg}$ 的物块沿 $30^{\\circ}$ 无摩擦斜面下滑。它沿斜面方向的加速度大小是多少?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "choices": [
        "$9.8\\,\\text{m/s}^2$",
        "$4.9\\,\\text{m/s}^2$",
        "$0\\,\\text{m/s}^2$",
        "$8.5\\,\\text{m/s}^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The component of gravity along a frictionless incline gives $a = g\\sin\\theta = 9.8 \\times \\sin 30^{\\circ} = 4.9\\,\\text{m/s}^2$. Using $\\cos\\theta$ gives $8.5$ and applies to the normal direction, not the slide direction.",
        "zh": "无摩擦斜面上重力沿斜面的分量给出 $a = g\\sin\\theta = 9.8 \\times \\sin 30^{\\circ} = 4.9\\,\\text{m/s}^2$。用 $\\cos\\theta$ 得到 $8.5$,它对应的是法向而不是滑动方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two masses, $3\\,\\text{kg}$ and $5\\,\\text{kg}$, are connected by a light string over a frictionless pulley (Atwood machine). What is the magnitude of the acceleration? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "两个质量 $3\\,\\text{kg}$ 和 $5\\,\\text{kg}$ 用一根轻绳跨过无摩擦滑轮相连(阿特伍德机)。加速度的大小是多少?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "choices": [
        "$1.2\\,\\text{m/s}^2$",
        "$3.9\\,\\text{m/s}^2$",
        "$2.5\\,\\text{m/s}^2$",
        "$4.9\\,\\text{m/s}^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Treat both masses as one system: $a = (m_2 - m_1)g/(m_1 + m_2) = (5-3)(9.8)/8 = 2.45 \\approx 2.5\\,\\text{m/s}^2$. Dividing the weight difference by only one mass overstates the acceleration.",
        "zh": "把两个质量当作一个系统:$a = (m_2 - m_1)g/(m_1 + m_2) = (5-3)(9.8)/8 = 2.45 \\approx 2.5\\,\\text{m/s}^2$。只用一个质量去除重力差会高估加速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An elevator accelerates upward at $2.0\\,\\text{m/s}^2$. A $60\\,\\text{kg}$ person stands on a scale inside. What does the scale read? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一部电梯以 $2.0\\,\\text{m/s}^2$ 向上加速。一个 $60\\,\\text{kg}$ 的人站在里面的秤上。秤的读数是多少?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "choices": [
        "$120\\,\\text{N}$",
        "$588\\,\\text{N}$",
        "$468\\,\\text{N}$",
        "$708\\,\\text{N}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The scale reads the normal force: $N = m(g + a) = 60(9.8 + 2.0) = 708\\,\\text{N}$. Subtracting the acceleration gives the reading for downward acceleration, and $mg = 588$ is the reading only when the elevator is not accelerating.",
        "zh": "秤读出的是法向力:$N = m(g + a) = 60(9.8 + 2.0) = 708\\,\\text{N}$。相减对应向下加速的读数,而 $mg = 588$ 只是电梯不加速时的读数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A horizontal force accelerates a crate across a floor. If the applied force stays the same but the mass of the crate doubles, the acceleration will:",
        "zh": "一个水平力使板条箱在地板上加速。如果施加的力不变但板条箱的质量加倍,加速度将:"
      },
      "choices": [
        "be halved",
        "stay the same",
        "quadruple",
        "double"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $a = F/m$ with $F$ fixed, acceleration is inversely proportional to mass, so doubling $m$ halves $a$. Thinking that more mass means more acceleration confuses the roles of force and inertia.",
        "zh": "由于 $a = F/m$ 且 $F$ 固定,加速度与质量成反比,所以 $m$ 加倍会使 $a$ 减半。认为质量越大加速度越大混淆了力与惯性的作用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2.0\\,\\text{kg}$ object moves under a net force $\\vec{F} = (6\\hat{i} + 8\\hat{j})\\,\\text{N}$. What is the magnitude of its acceleration?",
        "zh": "一个 $2.0\\,\\text{kg}$ 的物体在合力 $\\vec{F} = (6\\hat{i} + 8\\hat{j})\\,\\text{N}$ 作用下运动。它的加速度大小是多少?"
      },
      "choices": [
        "$3.0\\,\\text{m/s}^2$",
        "$5.0\\,\\text{m/s}^2$",
        "$7.0\\,\\text{m/s}^2$",
        "$10\\,\\text{m/s}^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "First find the force magnitude: $|\\vec{F}| = \\sqrt{6^2 + 8^2} = 10\\,\\text{N}$, then $a = 10/2.0 = 5.0\\,\\text{m/s}^2$. Adding the components arithmetically ($6+8=14$) instead of using the Pythagorean magnitude gives $7.0$.",
        "zh": "先求力的大小:$|\\vec{F}| = \\sqrt{6^2 + 8^2} = 10\\,\\text{N}$,再求 $a = 10/2.0 = 5.0\\,\\text{m/s}^2$。直接把分量相加($6+8=14$)而不用勾股定理会得到 $7.0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car of mass $1000\\,\\text{kg}$ travels at constant velocity on a straight, level road. What is the net force on the car?",
        "zh": "一辆质量 $1000\\,\\text{kg}$ 的汽车在平直道路上匀速行驶。汽车所受的合力是多少?"
      },
      "choices": [
        "$9800\\,\\text{N}$ forward",
        "equal to the engine's driving force",
        "zero",
        "equal to the weight of the car"
      ],
      "answer": 2,
      "explanation": {
        "en": "Constant velocity means zero acceleration, so by the second law the net force is zero — the driving force and resistive forces cancel. Confusing the (nonzero) driving force with the net force is the common error.",
        "zh": "匀速意味着加速度为零,所以由第二定律合力为零——驱动力与阻力相互抵消。把(非零的)驱动力当成合力是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $4\\,\\text{kg}$ block ($A$) and a $2\\,\\text{kg}$ block ($B$) are in contact on a frictionless surface. A $12\\,\\text{N}$ horizontal force pushes on $A$ toward $B$. What is the contact force between the blocks?",
        "zh": "一个 $4\\,\\text{kg}$ 的物块($A$)和一个 $2\\,\\text{kg}$ 的物块($B$)在无摩擦面上接触。一个 $12\\,\\text{N}$ 的水平力推 $A$ 朝向 $B$。两物块间的接触力是多少?"
      },
      "choices": [
        "$12\\,\\text{N}$",
        "$8\\,\\text{N}$",
        "$6\\,\\text{N}$",
        "$4\\,\\text{N}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "System acceleration is $a = 12/(4+2) = 2\\,\\text{m/s}^2$. The contact force only needs to accelerate $B$: $F = m_B a = 2 \\times 2 = 4\\,\\text{N}$. Using the total mass instead of just $B$'s mass overestimates the contact force.",
        "zh": "系统加速度为 $a = 12/(4+2) = 2\\,\\text{m/s}^2$。接触力只需使 $B$ 加速:$F = m_B a = 2 \\times 2 = 4\\,\\text{N}$。用总质量而不是 $B$ 的质量会高估接触力。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net force of $25\\,\\text{N}$ acts on an object, giving it an acceleration of $5.0\\,\\text{m/s}^2$. What is the object's mass in kilograms?",
        "zh": "$25\\,\\text{N}$ 的合力作用于一个物体,使它产生 $5.0\\,\\text{m/s}^2$ 的加速度。物体的质量是多少千克?"
      },
      "answer": "5.0",
      "accept": [
        "5",
        "5.00",
        "5 kg",
        "5.0 kg"
      ],
      "explanation": {
        "en": "From $F = ma$, $m = F/a = 25/5.0 = 5.0\\,\\text{kg}$. Multiplying force by acceleration instead of dividing would give an incorrect $125$.",
        "zh": "由 $F = ma$,$m = F/a = 25/5.0 = 5.0\\,\\text{kg}$。把力乘以加速度而不是相除会得到错误的 $125$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $70\\,\\text{kg}$ skydiver falls at terminal velocity. What is the magnitude of the air-resistance (drag) force on her, in newtons? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个 $70\\,\\text{kg}$ 的跳伞者以终极速度下落。她受到的空气阻力大小是多少牛顿?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "answer": "686",
      "accept": [
        "686 N",
        "686.0",
        "6.86e2",
        "690",
        "687"
      ],
      "explanation": {
        "en": "At terminal velocity acceleration is zero, so drag balances weight: $F_{drag} = mg = 70 \\times 9.8 = 686\\,\\text{N}$. Assuming drag is zero forgets that constant velocity still requires balanced forces.",
        "zh": "在终极速度时加速度为零,所以阻力平衡重力:$F_{drag} = mg = 70 \\times 9.8 = 686\\,\\text{N}$。认为阻力为零忽略了匀速仍需力平衡。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $1200\\,\\text{kg}$ car accelerates from rest to $20\\,\\text{m/s}$ in $8.0\\,\\text{s}$. What constant net force (in newtons) acts on it?",
        "zh": "一辆 $1200\\,\\text{kg}$ 的汽车在 $8.0\\,\\text{s}$ 内从静止加速到 $20\\,\\text{m/s}$。作用在它上面的恒定合力(牛顿)是多少?"
      },
      "answer": "3000",
      "accept": [
        "3000 N",
        "3.0e3",
        "3000.0",
        "3.0×10^3",
        "3 kN"
      ],
      "explanation": {
        "en": "First $a = \\Delta v/\\Delta t = 20/8.0 = 2.5\\,\\text{m/s}^2$, then $F = ma = 1200 \\times 2.5 = 3000\\,\\text{N}$. Dividing velocity by mass or skipping the acceleration step leads to wrong values.",
        "zh": "先求 $a = \\Delta v/\\Delta t = 20/8.0 = 2.5\\,\\text{m/s}^2$,再求 $F = ma = 1200 \\times 2.5 = 3000\\,\\text{N}$。把速度除以质量或跳过求加速度都会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $3.0\\,\\text{kg}$ block on a horizontal surface experiences a normal force. What is the magnitude of that normal force, in newtons, if the surface is level and no vertical forces other than gravity act? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个 $3.0\\,\\text{kg}$ 的物块在水平面上受到法向力。若表面水平且除重力外没有其他竖直方向的力,这个法向力的大小是多少牛顿?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "answer": "29.4",
      "accept": [
        "29.4 N",
        "29.4N",
        "29",
        "30",
        "29.40"
      ],
      "explanation": {
        "en": "On a level surface with no vertical acceleration, $N = mg = 3.0 \\times 9.8 = 29.4\\,\\text{N}$. Using the mass alone omits the factor of $g$.",
        "zh": "在水平面上且无竖直加速度时,$N = mg = 3.0 \\times 9.8 = 29.4\\,\\text{N}$。只用质量遗漏了 $g$ 因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two forces act on a $2.0\\,\\text{kg}$ object: $8.0\\,\\text{N}$ east and $6.0\\,\\text{N}$ west. What is the magnitude of the acceleration in $\\text{m/s}^2$?",
        "zh": "两个力作用于一个 $2.0\\,\\text{kg}$ 的物体:$8.0\\,\\text{N}$ 向东和 $6.0\\,\\text{N}$ 向西。加速度的大小是多少 $\\text{m/s}^2$?"
      },
      "answer": "1.0",
      "accept": [
        "1",
        "1.00",
        "1.0 m/s^2",
        "1 m/s^2"
      ],
      "explanation": {
        "en": "The forces oppose, so the net force is $8.0 - 6.0 = 2.0\\,\\text{N}$, giving $a = 2.0/2.0 = 1.0\\,\\text{m/s}^2$. Adding the forces as if they pointed the same way ($14\\,\\text{N}$) ignores their opposite directions.",
        "zh": "两力方向相反,所以合力为 $8.0 - 6.0 = 2.0\\,\\text{N}$,给出 $a = 2.0/2.0 = 1.0\\,\\text{m/s}^2$。把两力当成同向相加($14\\,\\text{N}$)忽略了它们方向相反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.50\\,\\text{kg}$ ball is thrown and, while in flight (ignoring air resistance), what is the magnitude of its acceleration in $\\text{m/s}^2$? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个 $0.50\\,\\text{kg}$ 的球被抛出,在空中飞行时(忽略空气阻力),它的加速度大小是多少 $\\text{m/s}^2$?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "answer": "9.8",
      "accept": [
        "9.8 m/s^2",
        "9.80",
        "9.81",
        "g",
        "9.8m/s^2"
      ],
      "explanation": {
        "en": "In free flight the only force is gravity, so $a = g = 9.8\\,\\text{m/s}^2$ regardless of mass. Trying to fold the mass into the answer misunderstands that $a = mg/m = g$.",
        "zh": "在自由飞行中唯一的力是重力,所以无论质量如何 $a = g = 9.8\\,\\text{m/s}^2$。把质量代入答案误解了 $a = mg/m = g$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $6.0\\,\\text{kg}$ block is pulled by a rope at $37^{\\circ}$ above the horizontal with tension $50\\,\\text{N}$. What is the horizontal component of the tension, in newtons? (Use $\\cos 37^{\\circ} = 0.80$.)",
        "zh": "一个 $6.0\\,\\text{kg}$ 的物块被一根与水平方向成 $37^{\\circ}$ 的绳以 $50\\,\\text{N}$ 的张力拉动。张力的水平分量是多少牛顿?(取 $\\cos 37^{\\circ} = 0.80$。)"
      },
      "answer": "40",
      "accept": [
        "40 N",
        "40.0",
        "40N",
        "4.0e1"
      ],
      "explanation": {
        "en": "The horizontal component is $T\\cos\\theta = 50 \\times 0.80 = 40\\,\\text{N}$. Using $\\sin 37^{\\circ} = 0.60$ would give the vertical component ($30\\,\\text{N}$) instead.",
        "zh": "水平分量是 $T\\cos\\theta = 50 \\times 0.80 = 40\\,\\text{N}$。用 $\\sin 37^{\\circ} = 0.60$ 会得到竖直分量($30\\,\\text{N}$)。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $2.0\\,\\text{kg}$ block on a horizontal surface has coefficient of kinetic friction $\\mu_k = 0.30$ and slides at constant velocity under an applied horizontal force. What is that applied force, in newtons? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个 $2.0\\,\\text{kg}$ 的物块在水平面上,动摩擦系数 $\\mu_k = 0.30$,在一个水平力作用下匀速滑动。这个施加的力是多少牛顿?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "answer": "5.88",
      "accept": [
        "5.88 N",
        "5.9",
        "5.88N",
        "6.0",
        "5.9 N"
      ],
      "explanation": {
        "en": "Constant velocity means the applied force equals kinetic friction: $F = \\mu_k mg = 0.30 \\times 2.0 \\times 9.8 = 5.88\\,\\text{N}$. Forgetting that constant velocity requires balancing friction leads to an answer of zero.",
        "zh": "匀速意味着施加的力等于动摩擦力:$F = \\mu_k mg = 0.30 \\times 2.0 \\times 9.8 = 5.88\\,\\text{N}$。忘记匀速需要平衡摩擦力会得出零的答案。"
      }
    }
  ],
  "force-translational-dynamics/variable-forces-diffeq": [
    {
      "type": "mc",
      "question": {
        "en": "An object of mass $m$ falls under gravity with a linear (Stokes) drag force $F_{drag} = -bv$. Which differential equation governs its velocity (taking down as positive)?",
        "zh": "一个质量为 $m$ 的物体在重力作用下下落,受到线性(斯托克斯)阻力 $F_{drag} = -bv$。哪个微分方程描述其速度?(取向下为正)"
      },
      "choices": [
        "$m\\\\frac{dv}{dt} = mg - bv$",
        "$m\\\\frac{dv}{dt} = mg + bv$",
        "$m\\\\frac{dv}{dt} = bv - mg$",
        "$m\\\\frac{dv}{dt} = -mg - bv$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Newton's second law with gravity acting down (positive) and drag opposing motion (negative) gives $m\\\\,dv/dt = mg - bv$. Writing $+bv$ would make drag speed the object up, which is unphysical.",
        "zh": "牛顿第二定律中重力向下(正)、阻力反向(负),给出 $m\\\\,dv/dt = mg - bv$。写成 $+bv$ 会让阻力加速物体,这不符合物理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an object falling with linear drag $F = -bv$, the terminal velocity is:",
        "zh": "对于受线性阻力 $F = -bv$ 下落的物体,终极速度为:"
      },
      "choices": [
        "$b/(mg)$",
        "$mg/b$",
        "$mgb$",
        "$\\\\sqrt{mg/b}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Terminal velocity occurs when acceleration is zero, so $mg = bv_t$, giving $v_t = mg/b$. The square-root form applies to quadratic drag $F \\\\propto v^2$, not to linear drag.",
        "zh": "终极速度出现在加速度为零时,所以 $mg = bv_t$,给出 $v_t = mg/b$。平方根形式适用于二次阻力 $F \\\\propto v^2$,而非线性阻力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solving $m\\\\,dv/dt = mg - bv$ with $v(0) = 0$ gives which velocity function? (Let $v_t = mg/b$ and $\\\\tau = m/b$.)",
        "zh": "在 $v(0) = 0$ 条件下求解 $m\\\\,dv/dt = mg - bv$,得到哪个速度函数?(设 $v_t = mg/b$,$\\\\tau = m/b$。)"
      },
      "choices": [
        "$v(t) = v_t\\\\,e^{-t/\\\\tau}$",
        "$v(t) = v_t\\\\left(1 + e^{-t/\\\\tau}\\\\right)$",
        "$v(t) = v_t\\\\left(1 - e^{-t/\\\\tau}\\\\right)$",
        "$v(t) = v_t\\\\,t/\\\\tau$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Separating variables and applying $v(0)=0$ yields $v(t) = v_t(1 - e^{-t/\\\\tau})$, which rises from $0$ toward $v_t$. A pure decaying exponential $v_t e^{-t/\\\\tau}$ would start at $v_t$ and fall to zero, contradicting the initial condition.",
        "zh": "分离变量并代入 $v(0)=0$ 得到 $v(t) = v_t(1 - e^{-t/\\\\tau})$,它从 $0$ 上升趋近 $v_t$。纯衰减指数 $v_t e^{-t/\\\\tau}$ 会从 $v_t$ 开始降到零,与初始条件矛盾。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves under a position-dependent force $F(x) = -kx$. Using $F = m v\\\\,dv/dx$, which relation is correct?",
        "zh": "一个粒子在位置相关的力 $F(x) = -kx$ 作用下运动。用 $F = m v\\\\,dv/dx$,哪个关系正确?"
      },
      "choices": [
        "$m\\\\,dv/dx = -kx$",
        "$m\\\\,dv = -kx\\\\,dt$",
        "$m v\\\\,dv = kx\\\\,dx$",
        "$m v\\\\,dv = -kx\\\\,dx$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Writing acceleration as $v\\\\,dv/dx$ turns $F=ma$ into $mv\\\\,dv = F\\\\,dx = -kx\\\\,dx$, ready to integrate for a work-energy relation. Dropping the extra factor of $v$ mishandles the chain rule $a = v\\\\,dv/dx$.",
        "zh": "把加速度写作 $v\\\\,dv/dx$ 使 $F=ma$ 变为 $mv\\\\,dv = F\\\\,dx = -kx\\\\,dx$,可积分得到功能关系。漏掉额外的 $v$ 因子错用了链式法则 $a = v\\\\,dv/dx$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object experiences a time-dependent net force $F(t) = 6t$ (in newtons, $t$ in seconds) and has mass $2\\,\\text{kg}$, starting from rest. What is its velocity at $t = 2\\,\\text{s}$?",
        "zh": "一个物体受到随时间变化的合力 $F(t) = 6t$(牛顿,$t$ 以秒计),质量为 $2\\,\\text{kg}$,从静止开始。它在 $t = 2\\,\\text{s}$ 时的速度是多少?"
      },
      "choices": [
        "$6\\,\\text{m/s}$",
        "$3\\,\\text{m/s}$",
        "$12\\,\\text{m/s}$",
        "$24\\,\\text{m/s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Acceleration is $a = F/m = 3t$, so $v = \\\\int_0^2 3t\\\\,dt = \\\\tfrac{3}{2}t^2 \\\\big|_0^2 = 6\\,\\text{m/s}$. Multiplying the instantaneous force at $t=2$ by time treats a varying force as constant.",
        "zh": "加速度为 $a = F/m = 3t$,所以 $v = \\\\int_0^2 3t\\\\,dt = \\\\tfrac{3}{2}t^2 \\\\big|_0^2 = 6\\,\\text{m/s}$。用 $t=2$ 时的瞬时力乘以时间等于把变力当成恒力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a falling object with quadratic drag $F_{drag} = -cv^2$ (down positive), the governing equation is $m\\\\,dv/dt = mg - cv^2$. The terminal velocity is:",
        "zh": "对于受二次阻力 $F_{drag} = -cv^2$ 下落的物体(向下为正),控制方程为 $m\\\\,dv/dt = mg - cv^2$。终极速度为:"
      },
      "choices": [
        "$mg/c$",
        "$\\\\sqrt{mg/c}$",
        "$\\\\sqrt{c/(mg)}$",
        "$cg/m$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Setting acceleration to zero: $mg = cv_t^2$, so $v_t = \\\\sqrt{mg/c}$. Using $mg/c$ (without the square root) is the terminal-velocity formula for linear drag, not quadratic.",
        "zh": "令加速度为零:$mg = cv_t^2$,所以 $v_t = \\\\sqrt{mg/c}$。用 $mg/c$(不开方)是线性阻力的终极速度公式,不适用于二次阻力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The impulse-momentum theorem states that the change in momentum equals:",
        "zh": "冲量-动量定理指出动量的变化等于:"
      },
      "choices": [
        "$\\\\int F\\\\,dx$",
        "$F/t$",
        "$\\\\int F\\\\,dt$",
        "$\\\\frac{1}{2}mv^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Integrating $F = dp/dt$ over time gives $\\\\Delta p = \\\\int F\\\\,dt$, the impulse. Integrating force over distance instead gives work, which changes kinetic energy, not momentum.",
        "zh": "把 $F = dp/dt$ 对时间积分得到 $\\\\Delta p = \\\\int F\\\\,dt$,即冲量。对距离积分得到的是功,改变的是动能而非动量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A block moving on a horizontal surface is slowed only by drag $F = -bv$ (no other horizontal force), starting at speed $v_0$. Its speed as a function of time is:",
        "zh": "一个在水平面上运动的物块仅受阻力 $F = -bv$ 减速(无其他水平力),初速为 $v_0$。它的速度随时间的函数是:"
      },
      "choices": [
        "$v_0\\\\left(1 - e^{-bt/m}\\\\right)$",
        "$v_0 - \\\\frac{b}{m}t$",
        "$v_0\\\\,e^{+bt/m}$",
        "$v_0\\\\,e^{-bt/m}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With only drag, $m\\\\,dv/dt = -bv$ separates to $v = v_0 e^{-bt/m}$, an exponential decay to zero. A linear decrease would require a constant force, but drag weakens as the object slows.",
        "zh": "只有阻力时,$m\\\\,dv/dt = -bv$ 分离变量得 $v = v_0 e^{-bt/m}$,是趋于零的指数衰减。线性减小需要恒力,但阻力随物体减速而减弱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the velocity $v(t) = v_t(1 - e^{-t/\\\\tau})$ of an object falling with linear drag, what is the acceleration at $t = 0$?",
        "zh": "对于受线性阻力下落的物体,速度 $v(t) = v_t(1 - e^{-t/\\\\tau})$,在 $t = 0$ 时的加速度是多少?"
      },
      "choices": [
        "$v_t/\\\\tau$ and equal to $g$",
        "$g$",
        "$0$",
        "$v_t$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Differentiating gives $a = (v_t/\\\\tau)e^{-t/\\\\tau}$, so at $t=0$, $a = v_t/\\\\tau = (mg/b)(b/m) = g$. The object starts in free fall because drag is zero at $v=0$; concluding $a=0$ at the start confuses the initial and terminal states.",
        "zh": "求导得 $a = (v_t/\\\\tau)e^{-t/\\\\tau}$,所以 $t=0$ 时 $a = v_t/\\\\tau = (mg/b)(b/m) = g$。因为 $v=0$ 时阻力为零,物体以自由落体开始;认为初始 $a=0$ 混淆了初态与终态。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle of mass $m$ moves along $x$ under force $F(x) = -kx$, starting from rest at $x = A$. Using energy from integrating $mv\\\\,dv = -kx\\\\,dx$, its speed at $x = 0$ is:",
        "zh": "一个质量为 $m$ 的粒子沿 $x$ 在力 $F(x) = -kx$ 作用下运动,从 $x = A$ 处静止开始。用 $mv\\\\,dv = -kx\\\\,dx$ 积分求能量,它在 $x = 0$ 处的速度为:"
      },
      "choices": [
        "$A\\\\,k/m$",
        "$A\\\\sqrt{k/m}$",
        "$\\\\sqrt{kA/m}$",
        "$kA^2/(2m)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Integrating from $A$ to $0$: $\\\\tfrac{1}{2}mv^2 = \\\\tfrac{1}{2}kA^2$, so $v = A\\\\sqrt{k/m}$. Forgetting to take the square root leaves the answer with the units and form of an energy divided by mass rather than a speed.",
        "zh": "从 $A$ 积分到 $0$:$\\\\tfrac{1}{2}mv^2 = \\\\tfrac{1}{2}kA^2$,所以 $v = A\\\\sqrt{k/m}$。忘记开方会使答案保留能量除以质量的量纲与形式,而不是速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rocket-propelled sled has net force $F(t) = F_0 e^{-t/T}$ and mass $m$, starting from rest. What is the total impulse delivered as $t \\\\rightarrow \\\\infty$?",
        "zh": "一个火箭推进的雪橇受到合力 $F(t) = F_0 e^{-t/T}$,质量为 $m$,从静止开始。当 $t \\\\rightarrow \\\\infty$ 时传递的总冲量是多少?"
      },
      "choices": [
        "$F_0 m$",
        "$F_0/T$",
        "$F_0 T$",
        "$F_0 T^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Impulse is $\\\\int_0^\\\\infty F_0 e^{-t/T}\\\\,dt = F_0 T$. Dividing by $T$ instead of multiplying mishandles the integral of a decaying exponential, whose area is the amplitude times the time constant.",
        "zh": "冲量为 $\\\\int_0^\\\\infty F_0 e^{-t/T}\\\\,dt = F_0 T$。用除以 $T$ 而非乘以 $T$ 错误处理了衰减指数的积分,其面积等于幅值乘以时间常数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an object falling from rest with linear drag, as time increases the acceleration:",
        "zh": "对于从静止开始受线性阻力下落的物体,随着时间增加,加速度:"
      },
      "choices": [
        "increases toward $g$",
        "stays constant at $g$",
        "decreases from $g$ to a negative value",
        "decreases from $g$ toward $0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "As speed grows, drag $bv$ grows, so the net force $mg - bv$ shrinks and $a$ decays from $g$ toward $0$ at terminal velocity. Assuming constant $a = g$ ignores the increasing drag as the object speeds up.",
        "zh": "随着速度增大,阻力 $bv$ 增大,所以合力 $mg - bv$ 减小,$a$ 从 $g$ 衰减到终极速度时的 $0$。假设 $a = g$ 恒定忽略了物体加速时阻力的增大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object of mass $2.0\\,\\text{kg}$ falls with linear drag constant $b = 4.0\\,\\text{kg/s}$. What is its terminal velocity in $\\text{m/s}$? (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个质量 $2.0\\,\\text{kg}$ 的物体受线性阻力,阻力常数 $b = 4.0\\,\\text{kg/s}$。它的终极速度是多少 $\\text{m/s}$?(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "answer": "4.9",
      "accept": [
        "4.9 m/s",
        "4.90",
        "4.9m/s",
        "4.90 m/s"
      ],
      "explanation": {
        "en": "Terminal velocity for linear drag is $v_t = mg/b = (2.0 \\times 9.8)/4.0 = 4.9\\,\\text{m/s}$. Using $b/(mg)$ inverts the ratio and gives the wrong magnitude and units.",
        "zh": "线性阻力的终极速度为 $v_t = mg/b = (2.0 \\times 9.8)/4.0 = 4.9\\,\\text{m/s}$。用 $b/(mg)$ 把比值颠倒,得到错误的大小与单位。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a falling object with $v(t) = v_t(1 - e^{-t/\\\\tau})$ and time constant $\\\\tau = 2.0\\,\\text{s}$, at what time (in seconds) has it reached $63\\\\%$ (i.e. $1 - e^{-1}$) of terminal velocity?",
        "zh": "对于下落物体 $v(t) = v_t(1 - e^{-t/\\\\tau})$,时间常数 $\\\\tau = 2.0\\,\\text{s}$,在什么时刻(秒)它达到终极速度的 $63\\\\%$(即 $1 - e^{-1}$)?"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.00",
        "2.0 s",
        "2 s",
        "tau"
      ],
      "explanation": {
        "en": "The factor $1 - e^{-1} \\\\approx 0.63$ is reached exactly when $t = \\\\tau = 2.0\\,\\text{s}$. Reading $63\\\\%$ as needing several time constants confuses it with near-complete ($\\\\approx 95\\\\%$) approach at $3\\\\tau$.",
        "zh": "当 $t = \\\\tau = 2.0\\,\\text{s}$ 时恰好达到 $1 - e^{-1} \\\\approx 0.63$。把 $63\\\\%$ 理解成需要几个时间常数,是与 $3\\\\tau$ 时接近完成($\\\\approx 95\\\\%$)混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net force $F(t) = 3t^2$ (newtons, $t$ in seconds) acts on a $1.0\\,\\text{kg}$ object at rest. What is the impulse (in $\\text{N·s}$) delivered from $t = 0$ to $t = 2\\,\\text{s}$?",
        "zh": "一个合力 $F(t) = 3t^2$(牛顿,$t$ 以秒计)作用于一个静止的 $1.0\\,\\text{kg}$ 物体。从 $t = 0$ 到 $t = 2\\,\\text{s}$ 传递的冲量(以 $\\text{N·s}$ 计)是多少?"
      },
      "answer": "8",
      "accept": [
        "8 N·s",
        "8.0",
        "8 Ns",
        "8.00",
        "8 N s"
      ],
      "explanation": {
        "en": "Impulse is $\\\\int_0^2 3t^2\\\\,dt = t^3\\\\big|_0^2 = 8\\,\\text{N·s}$. Multiplying the force at $t=2$ ($12\\,\\text{N}$) by the time interval treats the varying force as constant and overestimates the impulse.",
        "zh": "冲量为 $\\\\int_0^2 3t^2\\\\,dt = t^3\\\\big|_0^2 = 8\\,\\text{N·s}$。用 $t=2$ 时的力($12\\,\\text{N}$)乘以时间间隔把变力当成恒力,会高估冲量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object with quadratic drag has terminal velocity when $mg = cv_t^2$. If $m = 0.10\\,\\text{kg}$, $c = 0.010\\,\\text{kg/m}$, find $v_t$ in $\\text{m/s}$. (Use $g = 9.8\\,\\text{m/s}^2$.)",
        "zh": "一个受二次阻力的物体在 $mg = cv_t^2$ 时达到终极速度。若 $m = 0.10\\,\\text{kg}$,$c = 0.010\\,\\text{kg/m}$,求 $v_t$(以 $\\text{m/s}$ 计)。(取 $g = 9.8\\,\\text{m/s}^2$。)"
      },
      "answer": "9.9",
      "accept": [
        "9.9 m/s",
        "9.90",
        "9.899",
        "9.9m/s",
        "9.90 m/s"
      ],
      "explanation": {
        "en": "Solve $v_t = \\\\sqrt{mg/c} = \\\\sqrt{(0.10 \\times 9.8)/0.010} = \\\\sqrt{98} \\\\approx 9.9\\,\\text{m/s}$. Omitting the square root (giving $98$) applies the linear-drag formula to a quadratic-drag problem.",
        "zh": "解 $v_t = \\\\sqrt{mg/c} = \\\\sqrt{(0.10 \\times 9.8)/0.010} = \\\\sqrt{98} \\\\approx 9.9\\,\\text{m/s}$。省略开方(得到 $98$)是把线性阻力公式用于二次阻力问题。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $1.0\\,\\text{kg}$ block moving at $v_0 = 10\\,\\text{m/s}$ is decelerated only by drag $F = -bv$ with $b = 0.50\\,\\text{kg/s}$. What is its speed (in $\\text{m/s}$) at $t = 2.0\\,\\text{s}$? (Use $e^{-1} \\\\approx 0.368$.)",
        "zh": "一个 $1.0\\,\\text{kg}$ 的物块以 $v_0 = 10\\,\\text{m/s}$ 运动,仅受阻力 $F = -bv$ 减速,$b = 0.50\\,\\text{kg/s}$。它在 $t = 2.0\\,\\text{s}$ 时的速度(以 $\\text{m/s}$ 计)是多少?(取 $e^{-1} \\\\approx 0.368$。)"
      },
      "answer": "3.68",
      "accept": [
        "3.68 m/s",
        "3.7",
        "3.68",
        "3.7 m/s",
        "3.68m/s"
      ],
      "explanation": {
        "en": "The solution is $v = v_0 e^{-bt/m} = 10\\\\,e^{-(0.50)(2.0)/1.0} = 10 e^{-1} \\\\approx 3.68\\,\\text{m/s}$. Subtracting a constant $bt/m$ from $v_0$ wrongly assumes linear (constant-force) deceleration.",
        "zh": "解为 $v = v_0 e^{-bt/m} = 10\\\\,e^{-(0.50)(2.0)/1.0} = 10 e^{-1} \\\\approx 3.68\\,\\text{m/s}$。从 $v_0$ 减去常数 $bt/m$ 错误地假设了线性(恒力)减速。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The time constant for a mass falling with linear drag is $\\\\tau = m/b$. For $m = 3.0\\,\\text{kg}$ and $b = 6.0\\,\\text{kg/s}$, what is $\\\\tau$ in seconds?",
        "zh": "受线性阻力下落的质量的时间常数为 $\\\\tau = m/b$。当 $m = 3.0\\,\\text{kg}$,$b = 6.0\\,\\text{kg/s}$ 时,$\\\\tau$ 是多少秒?"
      },
      "answer": "0.50",
      "accept": [
        "0.5",
        "0.50 s",
        ".5",
        "0.5 s",
        "1/2"
      ],
      "explanation": {
        "en": "The time constant is $\\\\tau = m/b = 3.0/6.0 = 0.50\\,\\text{s}$. Inverting to $b/m = 2.0$ gives a rate (per second), not the time constant.",
        "zh": "时间常数为 $\\\\tau = m/b = 3.0/6.0 = 0.50\\,\\text{s}$。颠倒成 $b/m = 2.0$ 得到的是速率(每秒),而非时间常数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle starts at rest and experiences acceleration $a(t) = 4t$ ($\\text{m/s}^2$, $t$ in seconds). How far (in meters) does it travel from $t = 0$ to $t = 3\\,\\text{s}$?",
        "zh": "一个粒子从静止开始,受到加速度 $a(t) = 4t$($\\text{m/s}^2$,$t$ 以秒计)。从 $t = 0$ 到 $t = 3\\,\\text{s}$ 它运动了多少米?"
      },
      "answer": "18",
      "accept": [
        "18 m",
        "18.0",
        "18m",
        "18.00"
      ],
      "explanation": {
        "en": "Integrate twice: $v = 2t^2$ and $x = \\\\int_0^3 2t^2\\\\,dt = \\\\tfrac{2}{3}t^3\\\\big|_0^3 = 18\\,\\text{m}$. Using a constant-acceleration kinematics formula would be invalid because acceleration varies with time.",
        "zh": "两次积分:$v = 2t^2$,$x = \\\\int_0^3 2t^2\\\\,dt = \\\\tfrac{2}{3}t^3\\\\big|_0^3 = 18\\,\\text{m}$。使用恒加速度运动学公式无效,因为加速度随时间变化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object falling with linear drag has $v(t) = v_t(1 - e^{-t/\\\\tau})$ with $v_t = 40\\,\\text{m/s}$ and $\\\\tau = 5.0\\,\\text{s}$. What is its acceleration in $\\text{m/s}^2$ at $t = 0$?",
        "zh": "一个受线性阻力下落的物体 $v(t) = v_t(1 - e^{-t/\\\\tau})$,其中 $v_t = 40\\,\\text{m/s}$,$\\\\tau = 5.0\\,\\text{s}$。它在 $t = 0$ 时的加速度是多少 $\\text{m/s}^2$?"
      },
      "answer": "8.0",
      "accept": [
        "8",
        "8.00",
        "8.0 m/s^2",
        "8 m/s^2",
        "8.0m/s^2"
      ],
      "explanation": {
        "en": "The initial acceleration is $a(0) = v_t/\\\\tau = 40/5.0 = 8.0\\,\\text{m/s}^2$, which equals $g$ before drag builds up. Assuming zero initial acceleration confuses the starting free-fall state with the terminal state where $a = 0$.",
        "zh": "初始加速度为 $a(0) = v_t/\\\\tau = 40/5.0 = 8.0\\,\\text{m/s}^2$,在阻力增大之前它等于 $g$。假设初始加速度为零把起始的自由落体状态与 $a = 0$ 的终态混淆了。"
      }
    }
  ],
  "work-energy-power/work-and-energy": [
    {
      "type": "mc",
      "question": {
        "en": "A constant force of $10\\,\\text{N}$ acts on a box as it moves $4\\,\\text{m}$ in the direction of the force. How much work does the force do?",
        "zh": "一个 $10\\,\\text{N}$ 的恒力作用在箱子上，箱子沿力的方向移动了 $4\\,\\text{m}$。该力做了多少功？"
      },
      "choices": [
        "$40\\,\\text{J}$",
        "$14\\,\\text{J}$",
        "$2.5\\,\\text{J}$",
        "$0\\,\\text{J}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a constant force parallel to the displacement, $W = Fd = (10)(4) = 40\\,\\text{J}$. Dividing force by distance instead of multiplying gives the wrong small value.",
        "zh": "对于与位移平行的恒力，$W = Fd = (10)(4) = 40\\,\\text{J}$。用力除以距离而不是相乘会得到错误的小数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A force $\\vec{F} = 6\\,\\text{N}$ pulls a sled while the displacement is $5\\,\\text{m}$, but $\\vec{F}$ makes a $60^{\\circ}$ angle with the displacement. What work is done?",
        "zh": "一个 $\\vec{F} = 6\\,\\text{N}$ 的力拉动雪橇，位移为 $5\\,\\text{m}$，但 $\\vec{F}$ 与位移成 $60^{\\circ}$ 角。做了多少功？"
      },
      "choices": [
        "$30\\,\\text{J}$",
        "$15\\,\\text{J}$",
        "$26\\,\\text{J}$",
        "$0\\,\\text{J}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Work uses the component along the displacement: $W = Fd\\cos\\theta = (6)(5)\\cos 60^{\\circ} = 30(0.5) = 15\\,\\text{J}$. Using $\\sin 60^{\\circ}$ or forgetting the angle entirely overestimates the work.",
        "zh": "功使用沿位移的分量：$W = Fd\\cos\\theta = (6)(5)\\cos 60^{\\circ} = 30(0.5) = 15\\,\\text{J}$。使用 $\\sin 60^{\\circ}$ 或完全忽略角度会高估功。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The work done by a variable force along the $x$-axis is best written as which of the following?",
        "zh": "沿 $x$ 轴的变力所做的功最好写成下列哪一项？"
      },
      "choices": [
        "$W = F\\,x$",
        "$W = \\frac{dF}{dx}$",
        "$W = \\int F\\,dx$",
        "$W = \\frac{F}{x}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "When the force varies with position, work is the integral $W = \\int F\\,dx$, the area under the force-position curve. The simple product $Fx$ only holds for a constant force.",
        "zh": "当力随位置变化时，功是积分 $W = \\int F\\,dx$，即力-位置曲线下的面积。简单的乘积 $Fx$ 仅在恒力时成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spring with constant $k = 200\\,\\text{N/m}$ is stretched from its natural length to $x = 0.10\\,\\text{m}$. How much work does the external agent do on the spring?",
        "zh": "一个劲度系数 $k = 200\\,\\text{N/m}$ 的弹簧从自然长度被拉伸到 $x = 0.10\\,\\text{m}$。外力对弹簧做了多少功？"
      },
      "choices": [
        "$20\\,\\text{J}$",
        "$2.0\\,\\text{J}$",
        "$10\\,\\text{J}$",
        "$1.0\\,\\text{J}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Because the spring force grows with $x$, $W = \\int_0^{x} kx\\,dx = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.10)^2 = 1.0\\,\\text{J}$. Using $W = kx^2$ without the factor of $\\tfrac{1}{2}$ doubles the answer.",
        "zh": "由于弹簧力随 $x$ 增大，$W = \\int_0^{x} kx\\,dx = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.10)^2 = 1.0\\,\\text{J}$。省略 $\\tfrac{1}{2}$ 而用 $W = kx^2$ 会使答案翻倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2\\,\\text{kg}$ object speeds up from $3\\,\\text{m/s}$ to $5\\,\\text{m/s}$. By the work-energy theorem, what is the net work done on it?",
        "zh": "一个 $2\\,\\text{kg}$ 的物体从 $3\\,\\text{m/s}$ 加速到 $5\\,\\text{m/s}$。根据动能定理，作用在它上面的净功是多少？"
      },
      "choices": [
        "$16\\,\\text{J}$",
        "$4\\,\\text{J}$",
        "$8\\,\\text{J}$",
        "$32\\,\\text{J}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$W_{net} = \\Delta K = \\tfrac{1}{2}m(v_f^2 - v_i^2) = \\tfrac{1}{2}(2)(25 - 9) = 16\\,\\text{J}$. Squaring the difference of speeds, $(5-3)^2$, instead of the difference of the squares gives a wrong small value.",
        "zh": "$W_{net} = \\Delta K = \\tfrac{1}{2}m(v_f^2 - v_i^2) = \\tfrac{1}{2}(2)(25 - 9) = 16\\,\\text{J}$。对速度差取平方 $(5-3)^2$ 而不是平方差会得到错误的小数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A person carries a $15\\,\\text{kg}$ suitcase horizontally at constant velocity across a room. How much work does the carrying force do on the suitcase?",
        "zh": "一个人以恒定速度水平地把一个 $15\\,\\text{kg}$ 的手提箱搬过房间。搬运的力对手提箱做了多少功？"
      },
      "choices": [
        "$147\\,\\text{J}$",
        "$0\\,\\text{J}$",
        "$150\\,\\text{J}$",
        "It depends on the room's width"
      ],
      "answer": 1,
      "explanation": {
        "en": "The upward carrying force is perpendicular to the horizontal displacement, so $\\cos 90^{\\circ} = 0$ and the work is zero. Multiplying weight by distance ignores that force and motion are at right angles here.",
        "zh": "向上的搬运力与水平位移垂直，所以 $\\cos 90^{\\circ} = 0$，做功为零。用重量乘以距离忽略了此处力与运动互相垂直这一事实。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A block slides $6\\,\\text{m}$ across a floor while a friction force of $4\\,\\text{N}$ opposes its motion. What work does friction do on the block?",
        "zh": "一个滑块在地板上滑行 $6\\,\\text{m}$，同时 $4\\,\\text{N}$ 的摩擦力阻碍其运动。摩擦力对滑块做了多少功？"
      },
      "choices": [
        "$+24\\,\\text{J}$",
        "$-1.5\\,\\text{J}$",
        "$-24\\,\\text{J}$",
        "$0\\,\\text{J}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Friction opposes the displacement, so $\\theta = 180^{\\circ}$ and $W = Fd\\cos 180^{\\circ} = -(4)(6) = -24\\,\\text{J}$. Reporting a positive value forgets that opposing force and motion make the work negative.",
        "zh": "摩擦力与位移相反，所以 $\\theta = 180^{\\circ}$，$W = Fd\\cos 180^{\\circ} = -(4)(6) = -24\\,\\text{J}$。报告正值忽略了力与运动相反使功为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The net work done on a particle over some interval is zero. Which conclusion is guaranteed by the work-energy theorem?",
        "zh": "在某段区间内作用于一个粒子的净功为零。根据动能定理，可以保证得出哪个结论？"
      },
      "choices": [
        "The particle is at rest",
        "The particle's displacement is zero",
        "No forces acted on the particle",
        "The particle's speed is unchanged over the interval"
      ],
      "answer": 3,
      "explanation": {
        "en": "$W_{net} = \\Delta K = 0$ means the kinetic energy, and therefore the speed, is the same at the endpoints. Zero net work does not require zero force or zero displacement, only that positive and negative work cancel.",
        "zh": "$W_{net} = \\Delta K = 0$ 意味着动能（因而速率）在两端相同。净功为零并不要求力为零或位移为零，只要求正功与负功相互抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A force does $+50\\,\\text{J}$ of work on a cart while a resistive force does $-30\\,\\text{J}$. If the cart started at rest with mass $4\\,\\text{kg}$, what is its final speed?",
        "zh": "一个力对小车做 $+50\\,\\text{J}$ 的功，同时一个阻力做 $-30\\,\\text{J}$ 的功。若小车质量 $4\\,\\text{kg}$ 且从静止开始，其末速率是多少？"
      },
      "choices": [
        "$3.2\\,\\text{m/s}$",
        "$2.0\\,\\text{m/s}$",
        "$3.5\\,\\text{m/s}$",
        "$5.0\\,\\text{m/s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Net work $= 50 - 30 = 20\\,\\text{J} = \\tfrac{1}{2}(4)v^2$, so $v^2 = 10$ and $v \\approx 3.2\\,\\text{m/s}$. Using only the $+50\\,\\text{J}$ and ignoring the resistive work overestimates the speed.",
        "zh": "净功 $= 50 - 30 = 20\\,\\text{J} = \\tfrac{1}{2}(4)v^2$，所以 $v^2 = 10$，$v \\approx 3.2\\,\\text{m/s}$。只用 $+50\\,\\text{J}$ 而忽略阻力做的功会高估速率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The kinetic energy of a car is $K$. If its speed doubles while its mass stays the same, its new kinetic energy is:",
        "zh": "一辆汽车的动能为 $K$。若其速率翻倍而质量不变，其新动能为："
      },
      "choices": [
        "$2K$",
        "$4K$",
        "$K$",
        "$\\sqrt{2}\\,K$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $K = \\tfrac{1}{2}mv^2$ depends on $v^2$, doubling $v$ multiplies $K$ by $2^2 = 4$. Assuming kinetic energy scales linearly with speed gives only $2K$.",
        "zh": "由于 $K = \\tfrac{1}{2}mv^2$ 取决于 $v^2$，速率翻倍使 $K$ 乘以 $2^2 = 4$。假设动能与速率成正比只会得到 $2K$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A force in the $x$-direction varies as $F(x) = 3x^2\\,\\text{N}$ (with $x$ in meters). How much work does it do moving an object from $x = 0$ to $x = 2\\,\\text{m}$?",
        "zh": "一个沿 $x$ 方向的力随 $F(x) = 3x^2\\,\\text{N}$ 变化（$x$ 以米为单位）。将物体从 $x = 0$ 移动到 $x = 2\\,\\text{m}$ 做了多少功？"
      },
      "choices": [
        "$12\\,\\text{J}$",
        "$6\\,\\text{J}$",
        "$8\\,\\text{J}$",
        "$24\\,\\text{J}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$W = \\int_0^{2} 3x^2\\,dx = [x^3]_0^{2} = 8\\,\\text{J}$. Evaluating $F$ at the endpoint and multiplying by distance, $3(2^2)(2) = 24$, wrongly treats the force as constant.",
        "zh": "$W = \\int_0^{2} 3x^2\\,dx = [x^3]_0^{2} = 8\\,\\text{J}$。把 $F$ 在端点求值再乘以距离 $3(2^2)(2) = 24$ 错误地把力当作恒定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The area under a force-versus-position ($F$ vs $x$) graph represents which physical quantity?",
        "zh": "力-位置（$F$ 对 $x$）图象下的面积代表哪个物理量？"
      },
      "choices": [
        "Power",
        "Impulse",
        "Kinetic energy per meter",
        "Work"
      ],
      "answer": 3,
      "explanation": {
        "en": "Because $W = \\int F\\,dx$, the area under an $F$-vs-$x$ curve is the work done. The area under a force-versus-time graph would instead give impulse.",
        "zh": "由于 $W = \\int F\\,dx$，$F$-$x$ 曲线下的面积即为所做的功。而力-时间图象下的面积给出的是冲量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A constant $25\\,\\text{N}$ force pushes a crate $8\\,\\text{m}$ in the direction of the force. How much work is done, in joules?",
        "zh": "一个恒定的 $25\\,\\text{N}$ 力沿力的方向推动板条箱 $8\\,\\text{m}$。做了多少功（以焦耳为单位）？"
      },
      "answer": "200",
      "accept": [
        "200 J",
        "200.0",
        "200J",
        "+200"
      ],
      "explanation": {
        "en": "$W = Fd = (25)(8) = 200\\,\\text{J}$ since force and displacement are parallel.",
        "zh": "由于力与位移平行，$W = Fd = (25)(8) = 200\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $3\\,\\text{kg}$ object at rest is pushed so that its kinetic energy becomes $54\\,\\text{J}$. What is its final speed, in m/s?",
        "zh": "一个静止的 $3\\,\\text{kg}$ 物体被推动，使其动能变为 $54\\,\\text{J}$。其末速率是多少（以 m/s 为单位）？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 m/s",
        "6.00",
        "+6"
      ],
      "explanation": {
        "en": "$K = \\tfrac{1}{2}mv^2 \\Rightarrow 54 = \\tfrac{1}{2}(3)v^2$, so $v^2 = 36$ and $v = 6\\,\\text{m/s}$.",
        "zh": "$K = \\tfrac{1}{2}mv^2 \\Rightarrow 54 = \\tfrac{1}{2}(3)v^2$，所以 $v^2 = 36$，$v = 6\\,\\text{m/s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force $\\vec{F} = (3\\hat{i} + 4\\hat{j})\\,\\text{N}$ acts through a displacement $\\vec{d} = (2\\hat{i} + 1\\hat{j})\\,\\text{m}$. Compute the work done, in joules, using the dot product.",
        "zh": "力 $\\vec{F} = (3\\hat{i} + 4\\hat{j})\\,\\text{N}$ 作用于位移 $\\vec{d} = (2\\hat{i} + 1\\hat{j})\\,\\text{m}$。用点积计算做的功（以焦耳为单位）。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10 J",
        "+10"
      ],
      "explanation": {
        "en": "$W = \\vec{F}\\cdot\\vec{d} = (3)(2) + (4)(1) = 6 + 4 = 10\\,\\text{J}$.",
        "zh": "$W = \\vec{F}\\cdot\\vec{d} = (3)(2) + (4)(1) = 6 + 4 = 10\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spring has $k = 400\\,\\text{N/m}$. How much work, in joules, is required to stretch it $0.20\\,\\text{m}$ from its natural length?",
        "zh": "一个弹簧的 $k = 400\\,\\text{N/m}$。将它从自然长度拉伸 $0.20\\,\\text{m}$ 需要做多少功（以焦耳为单位）？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "8 J",
        "8.00",
        "+8"
      ],
      "explanation": {
        "en": "$W = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(400)(0.20)^2 = \\tfrac{1}{2}(400)(0.04) = 8\\,\\text{J}$.",
        "zh": "$W = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(400)(0.20)^2 = \\tfrac{1}{2}(400)(0.04) = 8\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force along the $x$-axis is $F(x) = 4x\\,\\text{N}$ (with $x$ in meters). Find the work done, in joules, moving an object from $x = 1\\,\\text{m}$ to $x = 3\\,\\text{m}$.",
        "zh": "沿 $x$ 轴的力为 $F(x) = 4x\\,\\text{N}$（$x$ 以米为单位）。求将物体从 $x = 1\\,\\text{m}$ 移动到 $x = 3\\,\\text{m}$ 所做的功（以焦耳为单位）。"
      },
      "answer": "16",
      "accept": [
        "16.0",
        "16 J",
        "+16"
      ],
      "explanation": {
        "en": "$W = \\int_1^{3} 4x\\,dx = [2x^2]_1^{3} = 2(9) - 2(1) = 18 - 2 = 16\\,\\text{J}$.",
        "zh": "$W = \\int_1^{3} 4x\\,dx = [2x^2]_1^{3} = 2(9) - 2(1) = 18 - 2 = 16\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $1000\\,\\text{kg}$ car moving at $20\\,\\text{m/s}$ brakes to a stop. What is the magnitude of the net work done on it, in joules? Give your answer in scientific-notation-friendly form (a plain number is fine).",
        "zh": "一辆 $1000\\,\\text{kg}$ 的汽车以 $20\\,\\text{m/s}$ 行驶并刹车至停止。作用在它上面的净功的大小是多少（以焦耳为单位）？"
      },
      "answer": "200000",
      "accept": [
        "2.0e5",
        "2e5",
        "200000 J",
        "2.0 x 10^5",
        "200000.0",
        "-200000",
        "2*10^5"
      ],
      "explanation": {
        "en": "$|W_{net}| = |\\Delta K| = \\tfrac{1}{2}(1000)(20)^2 = \\tfrac{1}{2}(1000)(400) = 2.0\\times 10^5\\,\\text{J}$. The work is negative, but its magnitude is $200000\\,\\text{J}$.",
        "zh": "$|W_{net}| = |\\Delta K| = \\tfrac{1}{2}(1000)(20)^2 = \\tfrac{1}{2}(1000)(400) = 2.0\\times 10^5\\,\\text{J}$。功为负，但其大小为 $200000\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $50\\,\\text{N}$ force is applied at $37^{\\circ}$ above the horizontal to drag a box $10\\,\\text{m}$ horizontally. Using $\\cos 37^{\\circ} = 0.8$, how much work does the applied force do, in joules?",
        "zh": "一个 $50\\,\\text{N}$ 的力以水平上方 $37^{\\circ}$ 施加，将箱子水平拖动 $10\\,\\text{m}$。用 $\\cos 37^{\\circ} = 0.8$，施加的力做了多少功（以焦耳为单位）？"
      },
      "answer": "400",
      "accept": [
        "400.0",
        "400 J",
        "+400"
      ],
      "explanation": {
        "en": "$W = Fd\\cos\\theta = (50)(10)(0.8) = 400\\,\\text{J}$; only the horizontal component of the force does work on the horizontally moving box.",
        "zh": "$W = Fd\\cos\\theta = (50)(10)(0.8) = 400\\,\\text{J}$；只有力的水平分量对水平运动的箱子做功。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net force gives a $5\\,\\text{kg}$ object velocities of $2\\,\\text{m/s}$ then $6\\,\\text{m/s}$. What is the net work done on it, in joules?",
        "zh": "一个净力使一个 $5\\,\\text{kg}$ 物体的速度先为 $2\\,\\text{m/s}$ 后为 $6\\,\\text{m/s}$。作用在它上面的净功是多少（以焦耳为单位）？"
      },
      "answer": "80",
      "accept": [
        "80.0",
        "80 J",
        "+80"
      ],
      "explanation": {
        "en": "$W_{net} = \\tfrac{1}{2}m(v_f^2 - v_i^2) = \\tfrac{1}{2}(5)(36 - 4) = \\tfrac{1}{2}(5)(32) = 80\\,\\text{J}$.",
        "zh": "$W_{net} = \\tfrac{1}{2}m(v_f^2 - v_i^2) = \\tfrac{1}{2}(5)(36 - 4) = \\tfrac{1}{2}(5)(32) = 80\\,\\text{J}$。"
      }
    }
  ],
  "work-energy-power/potential-energy-conservation": [
    {
      "type": "mc",
      "question": {
        "en": "For a conservative force in one dimension, the force is related to the potential energy by which expression?",
        "zh": "对于一维保守力，力与势能的关系由下列哪个表达式给出？"
      },
      "choices": [
        "$F = -\\frac{dU}{dx}$",
        "$F = +\\frac{dU}{dx}$",
        "$F = \\int U\\,dx$",
        "$F = U\\,x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The conservative force is the negative gradient of potential energy: $F = -\\frac{dU}{dx}$. Dropping the minus sign points the force the wrong way, toward higher potential energy instead of lower.",
        "zh": "保守力是势能的负梯度：$F = -\\frac{dU}{dx}$。省略负号会使力指向错误的方向，指向更高势能而非更低势能。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2\\,\\text{kg}$ book is lifted $3\\,\\text{m}$ (take $g = 10\\,\\text{m/s}^2$). What is its change in gravitational potential energy?",
        "zh": "一本 $2\\,\\text{kg}$ 的书被举高 $3\\,\\text{m}$（取 $g = 10\\,\\text{m/s}^2$）。其重力势能的变化是多少？"
      },
      "choices": [
        "$6\\,\\text{J}$",
        "$60\\,\\text{J}$",
        "$0.6\\,\\text{J}$",
        "$30\\,\\text{J}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\Delta U = mg\\Delta h = (2)(10)(3) = 60\\,\\text{J}$. Forgetting the factor of $g$ and using just $m\\Delta h$ gives the wrong value of $6\\,\\text{J}$.",
        "zh": "$\\Delta U = mg\\Delta h = (2)(10)(3) = 60\\,\\text{J}$。忘记 $g$ 因子而只用 $m\\Delta h$ 会得到错误的 $6\\,\\text{J}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following forces is NON-conservative, so that mechanical energy is not conserved when it does work?",
        "zh": "下列哪种力是非保守力，因而在它做功时机械能不守恒？"
      },
      "choices": [
        "Gravity",
        "Ideal spring force",
        "Kinetic friction",
        "Electrostatic force"
      ],
      "answer": 2,
      "explanation": {
        "en": "Kinetic friction dissipates mechanical energy as heat and depends on the path taken, so it is non-conservative. Gravity and ideal springs are conservative because their work depends only on endpoints.",
        "zh": "动摩擦力以热的形式耗散机械能且依赖于路径，所以是非保守力。重力和理想弹簧是保守力，因为它们做的功只取决于端点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball is dropped from rest at height $5\\,\\text{m}$ (take $g = 10\\,\\text{m/s}^2$, no air resistance). Using energy conservation, what is its speed just before hitting the ground?",
        "zh": "一个球从 $5\\,\\text{m}$ 高处静止落下（取 $g = 10\\,\\text{m/s}^2$，无空气阻力）。用能量守恒，它撞击地面前的速率是多少？"
      },
      "choices": [
        "$5\\,\\text{m/s}$",
        "$50\\,\\text{m/s}$",
        "$100\\,\\text{m/s}$",
        "$10\\,\\text{m/s}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$mgh = \\tfrac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10\\,\\text{m/s}$. Forgetting the square root and reporting $2gh = 100$ confuses speed with its square.",
        "zh": "$mgh = \\tfrac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10\\,\\text{m/s}$。忘记开平方而报告 $2gh = 100$ 把速率与其平方混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The potential energy of a spring stretched a distance $x$ from equilibrium is given by:",
        "zh": "弹簧从平衡位置拉伸距离 $x$ 时的势能为："
      },
      "choices": [
        "$U = \\tfrac{1}{2}kx^2$",
        "$U = kx$",
        "$U = kx^2$",
        "$U = \\tfrac{1}{2}kx$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrating the spring force gives $U = \\int_0^{x} kx\\,dx = \\tfrac{1}{2}kx^2$. Omitting the factor of $\\tfrac{1}{2}$ doubles the stored energy.",
        "zh": "对弹簧力积分得 $U = \\int_0^{x} kx\\,dx = \\tfrac{1}{2}kx^2$。省略 $\\tfrac{1}{2}$ 因子会使储存的能量翻倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On a potential energy curve $U(x)$, a stable equilibrium point corresponds to which feature?",
        "zh": "在势能曲线 $U(x)$ 上，稳定平衡点对应于哪个特征？"
      },
      "choices": [
        "A local maximum of $U$",
        "A local minimum of $U$",
        "Any point where $U = 0$",
        "A point where $U$ is largest overall"
      ],
      "answer": 1,
      "explanation": {
        "en": "At a local minimum, $\\frac{dU}{dx} = 0$ so the force is zero, and a small displacement produces a restoring force pushing back toward the minimum, making it stable. A local maximum also has zero force but is unstable.",
        "zh": "在局部极小值处，$\\frac{dU}{dx} = 0$ 所以力为零，微小位移会产生把物体推回极小值的回复力，因而是稳定的。局部极大值处力也为零但不稳定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $0.5\\,\\text{kg}$ ball is thrown straight up at $8\\,\\text{m/s}$ (take $g = 10\\,\\text{m/s}^2$). Using energy conservation, what maximum height does it reach?",
        "zh": "一个 $0.5\\,\\text{kg}$ 的球以 $8\\,\\text{m/s}$ 竖直上抛（取 $g = 10\\,\\text{m/s}^2$）。用能量守恒，它达到的最大高度是多少？"
      },
      "choices": [
        "$0.8\\,\\text{m}$",
        "$1.6\\,\\text{m}$",
        "$3.2\\,\\text{m}$",
        "$6.4\\,\\text{m}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\tfrac{1}{2}mv^2 = mgh \\Rightarrow h = \\frac{v^2}{2g} = \\frac{64}{20} = 3.2\\,\\text{m}$; the mass cancels. Using $h = v^2/g = 6.4$ forgets the factor of $\\tfrac{1}{2}$ in kinetic energy.",
        "zh": "$\\tfrac{1}{2}mv^2 = mgh \\Rightarrow h = \\frac{v^2}{2g} = \\frac{64}{20} = 3.2\\,\\text{m}$；质量约去。用 $h = v^2/g = 6.4$ 忘记了动能中的 $\\tfrac{1}{2}$ 因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A block slides down a frictionless ramp from height $h$. Which statement about its total mechanical energy is correct?",
        "zh": "一个滑块从高度 $h$ 沿无摩擦斜面滑下。关于其总机械能的哪个陈述是正确的？"
      },
      "choices": [
        "It increases as the block descends",
        "It equals zero at the bottom",
        "It decreases due to the ramp",
        "It stays constant, with $U$ converting to $K$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With no friction, only the conservative gravitational force does work, so total mechanical energy $K + U$ is constant while potential energy converts into kinetic energy. Mechanical energy would only drop if a non-conservative force acted.",
        "zh": "没有摩擦时，只有保守的重力做功，所以总机械能 $K + U$ 保持不变，而势能转化为动能。只有非保守力作用时机械能才会减少。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $1\\,\\text{kg}$ block slides on a horizontal surface with friction, starting at $6\\,\\text{m/s}$ and coming to rest. If $8\\,\\text{J}$ of thermal energy is later found to be missing from expectations, what quantity best describes the energy dissipated by friction here?",
        "zh": "一个 $1\\,\\text{kg}$ 的滑块在有摩擦的水平面上以 $6\\,\\text{m/s}$ 开始滑动并最终静止。摩擦耗散的能量最好由哪个量描述？"
      },
      "choices": [
        "The initial kinetic energy, $18\\,\\text{J}$",
        "The gain in potential energy",
        "Zero, since energy is conserved",
        "The block's weight times distance"
      ],
      "answer": 0,
      "explanation": {
        "en": "On a level surface $U$ does not change, so all the initial kinetic energy $\\tfrac{1}{2}(1)(6)^2 = 18\\,\\text{J}$ is dissipated by friction as thermal energy. Total energy is still conserved, but mechanical energy is not.",
        "zh": "在水平面上 $U$ 不变，所以全部初动能 $\\tfrac{1}{2}(1)(6)^2 = 18\\,\\text{J}$ 都被摩擦以热能形式耗散。总能量仍守恒，但机械能不守恒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A pendulum bob swings from a height where its speed is zero down to the lowest point. At the lowest point, which is true?",
        "zh": "一个摆锤从速率为零的高度摆到最低点。在最低点，哪个说法正确？"
      },
      "choices": [
        "Its potential energy is maximum",
        "Its kinetic energy is maximum",
        "Its total mechanical energy is maximum",
        "Both K and U are zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "At the lowest point the height is least, so $U$ is minimum and, by conservation, $K$ is maximum. Total mechanical energy stays constant throughout the swing rather than peaking at the bottom.",
        "zh": "在最低点高度最小，所以 $U$ 最小，由守恒 $K$ 最大。总机械能在整个摆动过程中保持不变，而不是在底部达到峰值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The potential energy of a particle is $U(x) = 3x^2\\,\\text{J}$ (with $x$ in meters). What is the force on the particle at $x = 2\\,\\text{m}$?",
        "zh": "一个粒子的势能为 $U(x) = 3x^2\\,\\text{J}$（$x$ 以米为单位）。在 $x = 2\\,\\text{m}$ 处粒子受到的力是多少？"
      },
      "choices": [
        "$+12\\,\\text{N}$",
        "$+6\\,\\text{N}$",
        "$-12\\,\\text{N}$",
        "$-6\\,\\text{N}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$F = -\\frac{dU}{dx} = -6x$, so at $x = 2$, $F = -12\\,\\text{N}$. Forgetting the minus sign gives the wrong direction, and forgetting to differentiate the exponent gives the wrong magnitude.",
        "zh": "$F = -\\frac{dU}{dx} = -6x$，所以在 $x = 2$ 处，$F = -12\\,\\text{N}$。忘记负号会得到错误方向，忘记对指数求导会得到错误大小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A roller coaster car (no friction) is at height $10\\,\\text{m}$ moving at $4\\,\\text{m/s}$. Using $g = 10\\,\\text{m/s}^2$, what is its speed at a point $5\\,\\text{m}$ lower?",
        "zh": "一辆过山车（无摩擦）在 $10\\,\\text{m}$ 高处以 $4\\,\\text{m/s}$ 运动。取 $g = 10\\,\\text{m/s}^2$，它在低 $5\\,\\text{m}$ 处的速率是多少？"
      },
      "choices": [
        "$11\\,\\text{m/s}$",
        "$14\\,\\text{m/s}$",
        "$8\\,\\text{m/s}$",
        "$10.8\\,\\text{m/s}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\tfrac{1}{2}v_f^2 = \\tfrac{1}{2}v_i^2 + g\\Delta h = \\tfrac{1}{2}(16) + (10)(5) = 8 + 50 = 58$, so $v_f = \\sqrt{116} \\approx 10.8\\,\\text{m/s}$. Adding the speed gained to the initial speed directly, rather than adding energies, gives a wrong value.",
        "zh": "$\\tfrac{1}{2}v_f^2 = \\tfrac{1}{2}v_i^2 + g\\Delta h = \\tfrac{1}{2}(16) + (10)(5) = 8 + 50 = 58$，所以 $v_f = \\sqrt{116} \\approx 10.8\\,\\text{m/s}$。直接把获得的速率加到初速率上而不是相加能量会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $4\\,\\text{kg}$ mass is raised $2.5\\,\\text{m}$. Using $g = 10\\,\\text{m/s}^2$, what is its change in gravitational potential energy, in joules?",
        "zh": "一个 $4\\,\\text{kg}$ 的质量被举高 $2.5\\,\\text{m}$。取 $g = 10\\,\\text{m/s}^2$，其重力势能的变化是多少（以焦耳为单位）？"
      },
      "answer": "100",
      "accept": [
        "100.0",
        "100 J",
        "+100"
      ],
      "explanation": {
        "en": "$\\Delta U = mg\\Delta h = (4)(10)(2.5) = 100\\,\\text{J}$.",
        "zh": "$\\Delta U = mg\\Delta h = (4)(10)(2.5) = 100\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spring with $k = 500\\,\\text{N/m}$ is compressed $0.10\\,\\text{m}$. How much elastic potential energy, in joules, is stored?",
        "zh": "一个 $k = 500\\,\\text{N/m}$ 的弹簧被压缩 $0.10\\,\\text{m}$。储存了多少弹性势能（以焦耳为单位）？"
      },
      "answer": "2.5",
      "accept": [
        "2.50",
        "2.5 J",
        "5/2"
      ],
      "explanation": {
        "en": "$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(500)(0.10)^2 = \\tfrac{1}{2}(500)(0.01) = 2.5\\,\\text{J}$.",
        "zh": "$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(500)(0.10)^2 = \\tfrac{1}{2}(500)(0.01) = 2.5\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball is released from rest at height $1.8\\,\\text{m}$. Using $g = 10\\,\\text{m/s}^2$ and energy conservation (no air resistance), find its speed at the ground, in m/s.",
        "zh": "一个球从 $1.8\\,\\text{m}$ 高处静止释放。取 $g = 10\\,\\text{m/s}^2$，用能量守恒（无空气阻力）求它到达地面时的速率（以 m/s 为单位）。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 m/s",
        "6.00",
        "+6"
      ],
      "explanation": {
        "en": "$v = \\sqrt{2gh} = \\sqrt{2(10)(1.8)} = \\sqrt{36} = 6\\,\\text{m/s}$.",
        "zh": "$v = \\sqrt{2gh} = \\sqrt{2(10)(1.8)} = \\sqrt{36} = 6\\,\\text{m/s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has potential energy $U(x) = 5x^2\\,\\text{J}$ (with $x$ in meters). What is the magnitude of the force on it, in newtons, at $x = 3\\,\\text{m}$?",
        "zh": "一个粒子的势能为 $U(x) = 5x^2\\,\\text{J}$（$x$ 以米为单位）。在 $x = 3\\,\\text{m}$ 处它受到的力的大小是多少（以牛顿为单位）？"
      },
      "answer": "30",
      "accept": [
        "30.0",
        "30 N",
        "+30",
        "-30"
      ],
      "explanation": {
        "en": "$F = -\\frac{dU}{dx} = -10x$, so at $x = 3$, $F = -30\\,\\text{N}$ and its magnitude is $30\\,\\text{N}$.",
        "zh": "$F = -\\frac{dU}{dx} = -10x$，所以在 $x = 3$ 处，$F = -30\\,\\text{N}$，其大小为 $30\\,\\text{N}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.2\\,\\text{kg}$ ball is thrown up at $10\\,\\text{m/s}$. Using $g = 10\\,\\text{m/s}^2$ and energy conservation, what maximum height, in meters, does it reach?",
        "zh": "一个 $0.2\\,\\text{kg}$ 的球以 $10\\,\\text{m/s}$ 上抛。取 $g = 10\\,\\text{m/s}^2$，用能量守恒，它达到的最大高度是多少（以米为单位）？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5 m",
        "5.00",
        "+5"
      ],
      "explanation": {
        "en": "$h = \\frac{v^2}{2g} = \\frac{100}{20} = 5\\,\\text{m}$; the mass cancels out of the energy equation.",
        "zh": "$h = \\frac{v^2}{2g} = \\frac{100}{20} = 5\\,\\text{m}$；质量在能量方程中约去。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $3\\,\\text{kg}$ block slides down a frictionless incline from height $2\\,\\text{m}$, starting from rest. Using $g = 10\\,\\text{m/s}^2$, what is its kinetic energy, in joules, at the bottom?",
        "zh": "一个 $3\\,\\text{kg}$ 的滑块从 $2\\,\\text{m}$ 高处沿无摩擦斜面从静止滑下。取 $g = 10\\,\\text{m/s}^2$，它在底部的动能是多少（以焦耳为单位）？"
      },
      "answer": "60",
      "accept": [
        "60.0",
        "60 J",
        "+60"
      ],
      "explanation": {
        "en": "With no friction all lost potential energy becomes kinetic: $K = mgh = (3)(10)(2) = 60\\,\\text{J}$.",
        "zh": "没有摩擦时，损失的势能全部变为动能：$K = mgh = (3)(10)(2) = 60\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $2\\,\\text{kg}$ block moving at $5\\,\\text{m/s}$ on a rough level floor slides to a stop. How much mechanical energy, in joules, is dissipated by friction?",
        "zh": "一个 $2\\,\\text{kg}$ 的滑块在粗糙水平地板上以 $5\\,\\text{m/s}$ 运动并滑行至停止。摩擦耗散了多少机械能（以焦耳为单位）？"
      },
      "answer": "25",
      "accept": [
        "25.0",
        "25 J",
        "+25"
      ],
      "explanation": {
        "en": "On a level floor $U$ is unchanged, so friction dissipates the entire initial kinetic energy: $\\tfrac{1}{2}(2)(5)^2 = 25\\,\\text{J}$.",
        "zh": "在水平地板上 $U$ 不变，所以摩擦耗散全部初动能：$\\tfrac{1}{2}(2)(5)^2 = 25\\,\\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A roller coaster car (frictionless) starts from rest at height $20\\,\\text{m}$. Using $g = 10\\,\\text{m/s}^2$, what is its speed, in m/s, at height $5\\,\\text{m}$?",
        "zh": "一辆过山车（无摩擦）从 $20\\,\\text{m}$ 高处静止出发。取 $g = 10\\,\\text{m/s}^2$，它在 $5\\,\\text{m}$ 高处的速率是多少（以 m/s 为单位）？"
      },
      "answer": "17.3",
      "accept": [
        "17.32",
        "17.3 m/s",
        "sqrt(300)",
        "10sqrt(3)",
        "17"
      ],
      "explanation": {
        "en": "$\\tfrac{1}{2}v^2 = g\\Delta h = (10)(20 - 5) = 150$, so $v = \\sqrt{300} \\approx 17.3\\,\\text{m/s}$. Only the height drop of $15\\,\\text{m}$ matters, not the full $20\\,\\text{m}$.",
        "zh": "$\\tfrac{1}{2}v^2 = g\\Delta h = (10)(20 - 5) = 150$，所以 $v = \\sqrt{300} \\approx 17.3\\,\\text{m/s}$。只有 $15\\,\\text{m}$ 的高度下降有关，而不是完整的 $20\\,\\text{m}$。"
      }
    }
  ],
  "linear-momentum/momentum-collisions": [
    {
      "type": "mc",
      "question": {
        "en": "The impulse delivered to a particle by a time-varying net force $F(t)$ is defined as which expression?",
        "zh": "随时间变化的合力 $F(t)$ 对质点施加的冲量定义为下列哪个表达式？"
      },
      "choices": [
        "$\\int F\\,dt$",
        "$\\int F\\,dx$",
        "$\\dfrac{dp}{dx}$",
        "$m\\,\\dfrac{dv}{dx}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Impulse is the time integral of force, $J=\\int F\\,dt$, which equals the change in momentum. Integrating force over displacement instead gives work (an energy, not a momentum), so treating impulse as $\\int F\\,dx$ confuses the impulse-momentum theorem with the work-energy theorem.",
        "zh": "冲量是力对时间的积分 $J=\\int F\\,dt$，等于动量的变化。若对位移积分得到的是功（能量而非动量），把冲量当作 $\\int F\\,dx$ 就是混淆了冲量-动量定理与功-能定理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an isolated system of colliding particles (no external forces), which quantity is ALWAYS conserved?",
        "zh": "对于一个孤立的碰撞粒子系统（无外力），下列哪个量总是守恒？"
      },
      "choices": [
        "Total kinetic energy",
        "Total linear momentum",
        "Total mechanical energy",
        "The velocity of each particle"
      ],
      "answer": 1,
      "explanation": {
        "en": "With zero net external force the system's total linear momentum is conserved in every collision. Kinetic energy is conserved only in the special case of elastic collisions, so assuming energy is always conserved fails for inelastic collisions where KE is lost to heat and deformation.",
        "zh": "当合外力为零时，系统的总线动量在每次碰撞中都守恒。动能只在弹性碰撞这一特殊情形下守恒，因此认为能量总守恒在非弹性碰撞中会失败——那里动能会转化为热和形变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a perfectly inelastic collision between two objects, which statement is correct?",
        "zh": "在两个物体的完全非弹性碰撞中，下列哪种说法正确？"
      },
      "choices": [
        "Kinetic energy is conserved",
        "Momentum is not conserved",
        "The objects stick together; momentum is conserved but kinetic energy is not",
        "Both momentum and kinetic energy are conserved"
      ],
      "answer": 2,
      "explanation": {
        "en": "In a perfectly inelastic collision the bodies move off with a common velocity; momentum is still conserved because external forces are negligible, but kinetic energy decreases. Claiming KE is also conserved mistakes the inelastic case for an elastic one.",
        "zh": "完全非弹性碰撞中两物体以共同速度运动；由于外力可忽略，动量仍守恒，但动能减小。认为动能同样守恒，是把非弹性碰撞误当成弹性碰撞。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the net external force on a system of particles is zero, the center of mass of the system:",
        "zh": "若作用于粒子系统上的合外力为零，则该系统的质心："
      },
      "choices": [
        "must accelerate",
        "must stay fixed at the origin",
        "must move in a circle",
        "moves with constant velocity (or stays at rest)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Newton's second law for a system reads $F_{ext}=M a_{cm}$; with $F_{ext}=0$ the center-of-mass acceleration is zero, so it moves at constant velocity (possibly zero). Internal collision forces cannot change $v_{cm}$, so expecting the CM to speed up or curve ignores that internal forces cancel in pairs.",
        "zh": "系统的牛顿第二定律为 $F_{ext}=M a_{cm}$；当 $F_{ext}=0$ 时质心加速度为零，故质心以恒定速度运动（可能为零）。内部碰撞力不能改变 $v_{cm}$，因此认为质心会加速或转弯，忽略了内力成对抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The impulse-momentum theorem states that the net impulse on an object equals its:",
        "zh": "冲量-动量定理指出，物体所受的净冲量等于其："
      },
      "choices": [
        "change in momentum",
        "final velocity",
        "change in kinetic energy",
        "acceleration"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrating $F=dp/dt$ over time gives $J=\\Delta p$, the change in momentum. Setting impulse equal to a change in kinetic energy confuses it with work, and equating it to acceleration ignores that impulse already accounts for both the force and the time it acts.",
        "zh": "对 $F=dp/dt$ 关于时间积分得到 $J=\\Delta p$，即动量的变化。把冲量等同于动能变化是与功混淆；把它等同于加速度则忽略了冲量已经包含了力及其作用时间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A moving ball collides head-on and elastically with an identical stationary ball. After the collision:",
        "zh": "一个运动的小球与一个完全相同的静止小球发生正面弹性碰撞。碰撞后："
      },
      "choices": [
        "both move forward together at half the original speed",
        "the incoming ball stops and the target moves off with the incoming speed",
        "they stick together and move as one",
        "the incoming ball bounces straight back at full speed"
      ],
      "answer": 1,
      "explanation": {
        "en": "For equal masses in a 1-D elastic collision the two objects exchange velocities, so the incoming ball stops and the target leaves with the original speed. Having them move off together at half speed would be the perfectly inelastic result and would not conserve kinetic energy here.",
        "zh": "等质量物体的一维弹性碰撞中两者交换速度，故入射球停下，被撞球以原速度离开。若两球以一半速度一起前进，那是完全非弹性碰撞的结果，且在此不满足动能守恒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two point masses, $m$ and $3m$, are separated by a distance $L$. The center of mass is located:",
        "zh": "两个质点 $m$ 与 $3m$ 相距 $L$。质心位于："
      },
      "choices": [
        "at $L/2$ from each mass",
        "at $L/3$ from the larger mass",
        "at $L/4$ from the larger mass",
        "at $3L/4$ from the larger mass"
      ],
      "answer": 2,
      "explanation": {
        "en": "The CM lies closer to the larger mass: measuring from $3m$, distance $=\\frac{m\\cdot L}{m+3m}=L/4$. Placing it at $L/2$ (the midpoint) would be correct only for equal masses and ignores the mass weighting.",
        "zh": "质心更靠近较大质量：从 $3m$ 量起，距离 $=\\frac{m\\cdot L}{m+3m}=L/4$。把它放在 $L/2$（中点）只在等质量时成立，忽略了按质量加权。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 4 kg rifle fires a 0.02 kg bullet at 300 m/s. Ignoring external forces, the recoil speed of the rifle is:",
        "zh": "一支 4 kg 的步枪以 300 m/s 射出一颗 0.02 kg 的子弹。忽略外力，步枪的反冲速度为："
      },
      "choices": [
        "3.0 m/s",
        "6.0 m/s",
        "0.75 m/s",
        "1.5 m/s"
      ],
      "answer": 3,
      "explanation": {
        "en": "Conservation of momentum from rest: $M v_{rifle}=m v_{bullet}$, so $v_{rifle}=\\frac{0.02\\times300}{4}=1.5$ m/s. Getting 3.0 comes from dropping the rifle mass or dividing by 2 instead of by the full 4 kg.",
        "zh": "由静止出发的动量守恒：$M v_{枪}=m v_{弹}$，故 $v_{枪}=\\frac{0.02\\times300}{4}=1.5$ m/s。得到 3.0 是漏掉了枪的质量或错误地除以 2 而非完整的 4 kg。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In its most general form, Newton's second law for a particle is written as:",
        "zh": "对质点而言，牛顿第二定律最一般的形式写作："
      },
      "choices": [
        "$F = \\dfrac{dp}{dt}$",
        "$F = \\int p\\,dt$",
        "$F = mv$",
        "$F = \\dfrac{p}{t}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The general statement is $F_{net}=dp/dt$, which reduces to $ma$ only when mass is constant. Writing $F=p/t$ assumes momentum built up linearly from rest at constant force and fails for any time-varying force.",
        "zh": "一般表述为 $F_{net}=dp/dt$，只有当质量不变时才化简为 $ma$。写成 $F=p/t$ 假定动量在恒力下从静止线性增长，对任何随时间变化的力都不成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a perfectly elastic collision, which quantities are conserved?",
        "zh": "在完全弹性碰撞中，哪些量守恒？"
      },
      "choices": [
        "only momentum",
        "both momentum and kinetic energy",
        "neither momentum nor kinetic energy",
        "only kinetic energy"
      ],
      "answer": 1,
      "explanation": {
        "en": "An elastic collision conserves both total linear momentum and total kinetic energy — that is its defining feature. Saying only momentum is conserved describes an inelastic collision instead.",
        "zh": "弹性碰撞同时守恒总线动量与总动能——这正是它的定义特征。若只说动量守恒，那描述的是非弹性碰撞。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two particles move along a line: 2 kg at 3 m/s and 1 kg at rest. The speed of the center of mass is:",
        "zh": "两个粒子沿一条直线运动：2 kg 以 3 m/s，1 kg 静止。质心的速率为："
      },
      "choices": [
        "3.0 m/s",
        "1.5 m/s",
        "2.0 m/s",
        "1.0 m/s"
      ],
      "answer": 2,
      "explanation": {
        "en": "$v_{cm}=\\frac{\\sum m_i v_i}{\\sum m_i}=\\frac{2(3)+1(0)}{2+1}=2$ m/s. Getting 1.5 comes from averaging the two velocities without weighting by mass.",
        "zh": "$v_{cm}=\\frac{\\sum m_i v_i}{\\sum m_i}=\\frac{2(3)+1(0)}{2+1}=2$ m/s。得到 1.5 是对两个速度直接取平均而未按质量加权。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a force that varies with time, the impulse it delivers is represented graphically by:",
        "zh": "对于随时间变化的力，它施加的冲量在图上表示为："
      },
      "choices": [
        "the slope of the force-versus-time graph",
        "the derivative of the force curve",
        "the peak force multiplied by zero",
        "the area under the force-versus-time graph"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $J=\\int F\\,dt$, impulse is the area under the $F$-vs-$t$ curve. Reading it as the slope confuses the integral (accumulated area) with a rate of change of force.",
        "zh": "因为 $J=\\int F\\,dt$，冲量是 $F$-$t$ 曲线下的面积。若读成斜率，则是把积分（累积面积）与力的变化率混淆。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net force $F(t)=6t$ N acts on a 3 kg object from $t=0$ to $t=2$ s. Compute the impulse delivered (in N·s) by integrating.",
        "zh": "合力 $F(t)=6t$ N 从 $t=0$ 到 $t=2$ s 作用在一个 3 kg 物体上。通过积分计算所施加的冲量（单位 N·s）。"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "12 N·s",
        "12 Ns",
        "12N·s"
      ],
      "explanation": {
        "en": "$J=\\int_0^2 6t\\,dt=3t^2\\big|_0^2=3(4)=12$ N·s. Multiplying the initial force (zero) or a single force value by 2 s ignores that the force grows, which is exactly why you must integrate.",
        "zh": "$J=\\int_0^2 6t\\,dt=3t^2\\big|_0^2=3(4)=12$ N·s。用初始力（为零）或某一固定力值乘以 2 s 会忽略力在增大——这正是必须做积分的原因。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the impulse from the previous problem (12 N·s on the 3 kg object, initially at rest), find the object's final speed in m/s.",
        "zh": "利用上一题的冲量（12 N·s 作用于最初静止的 3 kg 物体），求物体的末速率（单位 m/s）。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "4 m/s",
        "4m/s"
      ],
      "explanation": {
        "en": "$\\Delta v=J/m=12/3=4$ m/s, so from rest the final speed is 4 m/s. Dividing the impulse by the 2 s time instead of the mass confuses impulse with average force.",
        "zh": "$\\Delta v=J/m=12/3=4$ m/s，故从静止出发末速率为 4 m/s。把冲量除以 2 s 而非质量，是把冲量与平均力混淆。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 3 kg cart moving at 4 m/s collides and sticks to a 1 kg cart at rest. Find their common velocity after the collision, in m/s.",
        "zh": "一辆 3 kg 的小车以 4 m/s 运动，与一辆静止的 1 kg 小车碰撞并粘在一起。求碰后它们的共同速度（单位 m/s）。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "3 m/s",
        "3m/s"
      ],
      "explanation": {
        "en": "Momentum conservation: $v=\\frac{3(4)+1(0)}{3+1}=\\frac{12}{4}=3$ m/s. Keeping 4 m/s forgets that the added stationary mass must be shared in the moving momentum.",
        "zh": "动量守恒：$v=\\frac{3(4)+1(0)}{3+1}=\\frac{12}{4}=3$ m/s。若仍取 4 m/s，则忘了加入的静止质量必须分担原有动量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For that same perfectly inelastic collision (3 kg at 4 m/s into 1 kg at rest, sticking together at 3 m/s), how much kinetic energy is lost, in joules?",
        "zh": "对同一完全非弹性碰撞（3 kg 以 4 m/s 撞向静止的 1 kg，粘合后以 3 m/s 运动），损失了多少动能（单位 J）？"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "6 J",
        "6J"
      ],
      "explanation": {
        "en": "Initial $KE=\\tfrac12(3)(4^2)=24$ J; final $KE=\\tfrac12(4)(3^2)=18$ J; lost $=6$ J. Assuming zero loss would wrongly treat this sticking collision as elastic.",
        "zh": "初动能 $=\\tfrac12(3)(4^2)=24$ J；末动能 $=\\tfrac12(4)(3^2)=18$ J；损失 $=6$ J。若假设无损失，就错误地把这个粘合碰撞当成弹性碰撞。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A thin rod of length 2 m lies along the x-axis from $x=0$ with linear mass density $\\lambda(x)=kx$. Find the x-coordinate of its center of mass (in m). Give a decimal.",
        "zh": "一根长 2 m 的细杆沿 x 轴从 $x=0$ 放置，线密度 $\\lambda(x)=kx$。求其质心的 x 坐标（单位 m）。给出小数。"
      },
      "answer": "1.33",
      "accept": [
        "1.33",
        "1.333",
        "1.3",
        "4/3",
        "1.33 m",
        "1.333 m"
      ],
      "explanation": {
        "en": "$x_{cm}=\\dfrac{\\int_0^2 x(kx)\\,dx}{\\int_0^2 kx\\,dx}=\\dfrac{k(8/3)}{k(2)}=\\dfrac{4}{3}\\approx1.33$ m. Answering 1.0 (the midpoint) ignores that more mass sits toward the denser end, pulling the CM past the middle.",
        "zh": "$x_{cm}=\\dfrac{\\int_0^2 x(kx)\\,dx}{\\int_0^2 kx\\,dx}=\\dfrac{k(8/3)}{k(2)}=\\dfrac{4}{3}\\approx1.33$ m。若答 1.0（中点），则忽略了较密一端质量更多，使质心偏过中点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 2 kg ball moving at 5 m/s collides head-on and elastically with a 3 kg ball at rest. Find the velocity of the 2 kg ball after the collision, in m/s (include sign).",
        "zh": "一个 2 kg 的球以 5 m/s 与一个静止的 3 kg 球发生正面弹性碰撞。求碰后 2 kg 球的速度（单位 m/s，含正负号）。"
      },
      "answer": "-1",
      "accept": [
        "-1",
        "-1.0",
        "-1 m/s",
        "-1m/s"
      ],
      "explanation": {
        "en": "$v_1'=\\frac{m_1-m_2}{m_1+m_2}v_1=\\frac{2-3}{5}(5)=-1$ m/s; the lighter ball rebounds. A positive answer forgets that hitting a heavier target reverses the lighter ball's direction.",
        "zh": "$v_1'=\\frac{m_1-m_2}{m_1+m_2}v_1=\\frac{2-3}{5}(5)=-1$ m/s；较轻的球反弹。若答正值，则忘了撞上更重的目标会使较轻的球反向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For that same elastic collision (2 kg at 5 m/s into a 3 kg ball at rest), find the velocity of the 3 kg ball afterward, in m/s.",
        "zh": "对同一弹性碰撞（2 kg 以 5 m/s 撞向静止的 3 kg 球），求碰后 3 kg 球的速度（单位 m/s）。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "4 m/s",
        "4m/s"
      ],
      "explanation": {
        "en": "$v_2'=\\frac{2m_1}{m_1+m_2}v_1=\\frac{2(2)}{5}(5)=4$ m/s. Using $\\frac{m_1}{m_1+m_2}$ (without the factor of 2) is the common slip that gives half the correct value.",
        "zh": "$v_2'=\\frac{2m_1}{m_1+m_2}v_1=\\frac{2(2)}{5}(5)=4$ m/s。用 $\\frac{m_1}{m_1+m_2}$（漏掉因子 2）是常见失误，会得到正确值的一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 6 kg object at rest explodes into two pieces. A 2 kg piece flies off at 9 m/s. Find the speed of the 4 kg piece, in m/s.",
        "zh": "一个静止的 6 kg 物体爆炸成两块。一块 2 kg 以 9 m/s 飞出。求 4 kg 块的速率（单位 m/s）。"
      },
      "answer": "4.5",
      "accept": [
        "4.5",
        "4.50",
        "4.5 m/s",
        "4.5m/s",
        "9/2"
      ],
      "explanation": {
        "en": "Total momentum stays zero: $4v=2(9)$, so $v=18/4=4.5$ m/s in the opposite direction. Expecting the 4 kg piece to also move at 9 m/s ignores that the heavier fragment must move slower to keep momentum balanced.",
        "zh": "总动量保持为零：$4v=2(9)$，故 $v=18/4=4.5$ m/s，方向相反。若期望 4 kg 块也以 9 m/s 运动，则忽略了较重的碎片必须运动得更慢才能保持动量平衡。"
      }
    }
  ],
  "torque-rotational-dynamics/rotational-kinematics-inertia": [
    {
      "type": "mc",
      "question": {
        "en": "A disk rotates so that its angular position is $\\theta(t) = 2t^3$ (in rad). What is its angular velocity at $t = 2$ s?",
        "zh": "一个圆盘转动，其角位置为 $\\theta(t) = 2t^3$（单位 rad）。在 $t = 2$ s 时它的角速度是多少？"
      },
      "choices": [
        "$24$ rad/s",
        "$8$ rad/s",
        "$12$ rad/s",
        "$48$ rad/s"
      ],
      "answer": 0,
      "explanation": {
        "en": "Angular velocity is the derivative $\\omega = d\\theta/dt = 6t^2$, so at $t = 2$, $\\omega = 6(4) = 24$ rad/s. A common error is to just evaluate $\\theta(2) = 16$ or to treat $\\theta/t$ as the velocity instead of differentiating.",
        "zh": "角速度是导数 $\\omega = d\\theta/dt = 6t^2$，所以在 $t = 2$ 时 $\\omega = 6(4) = 24$ rad/s。常见错误是直接代入 $\\theta(2) = 16$，或用 $\\theta/t$ 当作速度而不是求导。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the SI units of angular acceleration $\\alpha$?",
        "zh": "角加速度 $\\alpha$ 的国际单位是什么？"
      },
      "choices": [
        "rad/s",
        "rad/s$^2$",
        "rad",
        "m/s$^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Angular acceleration is the rate of change of angular velocity, $\\alpha = d\\omega/dt$, giving rad/s$^2$. Choosing rad/s confuses it with angular velocity, and m/s$^2$ is linear (tangential) acceleration, not angular.",
        "zh": "角加速度是角速度的变化率 $\\alpha = d\\omega/dt$，得到 rad/s$^2$。选 rad/s 是把它和角速度混淆，而 m/s$^2$ 是线性（切向）加速度，不是角量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A point on a rotating rigid body is a distance $r$ from the axis. Its linear (tangential) speed $v$ relates to angular speed $\\omega$ by:",
        "zh": "转动刚体上一点距轴线为 $r$。它的线速度（切向速度）$v$ 与角速度 $\\omega$ 的关系是："
      },
      "choices": [
        "$v = \\omega / r$",
        "$v = r^2\\omega$",
        "$v = r\\omega$",
        "$v = \\omega$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Arc length gives $v = r\\omega$: points farther from the axis move faster. Writing $v = \\omega/r$ inverts the dependence, wrongly making outer points slower.",
        "zh": "由弧长关系得 $v = r\\omega$：离轴越远的点走得越快。写成 $v = \\omega/r$ 把依赖关系弄反了，错误地让外侧点变慢。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The moment of inertia of a single point mass $m$ at distance $r$ from the rotation axis is:",
        "zh": "一个质点 $m$ 距转轴 $r$ 处的转动惯量是："
      },
      "choices": [
        "$mr$",
        "$\\frac{1}{2}mr^2$",
        "$m r^2/2$",
        "$mr^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "By definition $I = mr^2$ for a point mass. The factor $\\frac{1}{2}$ belongs to a solid disk about its center, not a point mass, and forgetting to square $r$ (writing $mr$) drops a dimension.",
        "zh": "对质点，按定义 $I = mr^2$。因数 $\\frac{1}{2}$ 属于绕中心的实心圆盘，不是质点；而忘记把 $r$ 平方（写成 $mr$）会少一个维度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The moment of inertia of a uniform thin rod of mass $M$ and length $L$ about an axis through its center, perpendicular to the rod, is:",
        "zh": "质量 $M$、长 $L$ 的均匀细杆，绕过其中心且垂直于杆的轴的转动惯量是："
      },
      "choices": [
        "$\\frac{1}{12}ML^2$",
        "$\\frac{1}{3}ML^2$",
        "$\\frac{1}{2}ML^2$",
        "$ML^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrating $I = \\int r^2\\,dm$ with $dm = (M/L)dx$ from $-L/2$ to $L/2$ gives $\\frac{1}{12}ML^2$. The value $\\frac{1}{3}ML^2$ is for an axis through one END of the rod, a common mix-up of the axis location.",
        "zh": "对 $I = \\int r^2\\,dm$（$dm = (M/L)dx$）从 $-L/2$ 到 $L/2$ 积分，得 $\\frac{1}{12}ML^2$。$\\frac{1}{3}ML^2$ 是绕杆一端的轴，常因搞错轴的位置而混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The parallel-axis theorem relates the moment of inertia $I$ about any axis to $I_{cm}$ about a parallel axis through the center of mass a distance $d$ away. It states:",
        "zh": "平行轴定理把绕任意轴的转动惯量 $I$ 与绕距其 $d$ 处、过质心的平行轴的 $I_{cm}$ 联系起来。它是："
      },
      "choices": [
        "$I = I_{cm} - Md^2$",
        "$I = I_{cm} + Md^2$",
        "$I = I_{cm} + Md$",
        "$I = I_{cm}/Md^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The theorem adds $Md^2$: $I = I_{cm} + Md^2$, so inertia is always larger away from the center of mass. Subtracting $Md^2$ or using $Md$ (unsquared) misapplies the theorem.",
        "zh": "该定理加上 $Md^2$：$I = I_{cm} + Md^2$，因此离质心越远转动惯量越大。减去 $Md^2$ 或用 $Md$（未平方）都是误用该定理。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The moment of inertia of a uniform solid disk of mass $M$ and radius $R$ about its central axis is:",
        "zh": "质量 $M$、半径 $R$ 的均匀实心圆盘，绕其中心轴的转动惯量是："
      },
      "choices": [
        "$MR^2$",
        "$\\frac{2}{5}MR^2$",
        "$\\frac{1}{2}MR^2$",
        "$\\frac{1}{4}MR^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Integrating over rings, $I = \\frac{1}{2}MR^2$ for a solid disk. The value $MR^2$ is for a thin hoop (all mass at radius $R$), and $\\frac{2}{5}MR^2$ is a solid sphere.",
        "zh": "对圆环积分得实心圆盘 $I = \\frac{1}{2}MR^2$。$MR^2$ 是薄圆环（全部质量在半径 $R$ 处），而 $\\frac{2}{5}MR^2$ 是实心球。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A thin hoop, a solid disk, and a solid sphere all have the same mass $M$ and radius $R$, each rotating about its central/symmetry axis. Which has the LARGEST moment of inertia?",
        "zh": "薄圆环、实心圆盘和实心球质量 $M$、半径 $R$ 均相同，各绕其中心/对称轴转动。哪个转动惯量最大？"
      },
      "choices": [
        "The solid disk",
        "The solid sphere",
        "All are equal",
        "The thin hoop"
      ],
      "answer": 3,
      "explanation": {
        "en": "The hoop ($MR^2$) beats the disk ($\\frac{1}{2}MR^2$) and sphere ($\\frac{2}{5}MR^2$) because all its mass sits at the maximum radius, maximizing $\\int r^2\\,dm$. Assuming equal mass means equal inertia ignores how mass is distributed relative to the axis.",
        "zh": "圆环（$MR^2$）大于圆盘（$\\frac{1}{2}MR^2$）和球（$\\frac{2}{5}MR^2$），因为它的全部质量都在最大半径处，使 $\\int r^2\\,dm$ 最大。以为质量相等就转动惯量相等，忽略了质量相对于轴的分布。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The moment of inertia of a uniform solid sphere of mass $M$ and radius $R$ about a diameter is:",
        "zh": "质量 $M$、半径 $R$ 的均匀实心球，绕直径的转动惯量是："
      },
      "choices": [
        "$\\frac{2}{5}MR^2$",
        "$\\frac{1}{2}MR^2$",
        "$\\frac{7}{5}MR^2$",
        "$\\frac{2}{3}MR^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A solid sphere has $I = \\frac{2}{5}MR^2$. The value $\\frac{2}{3}MR^2$ belongs to a HOLLOW (thin-shell) sphere, and $\\frac{7}{5}MR^2$ is the solid sphere about a tangent line (parallel-axis applied).",
        "zh": "实心球 $I = \\frac{2}{5}MR^2$。$\\frac{2}{3}MR^2$ 属于空心（薄壳）球，而 $\\frac{7}{5}MR^2$ 是实心球绕切线（用了平行轴定理）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a rigid body under constant angular acceleration $\\alpha$, which equation correctly gives the angular velocity after time $t$?",
        "zh": "在恒定角加速度 $\\alpha$ 下的刚体，下列哪个方程正确给出时间 $t$ 后的角速度？"
      },
      "choices": [
        "$\\omega = \\omega_0 + \\frac{1}{2}\\alpha t^2$",
        "$\\omega = \\omega_0 + \\alpha t$",
        "$\\omega = \\omega_0 t + \\alpha$",
        "$\\omega = \\omega_0 \\alpha t$"
      ],
      "answer": 1,
      "explanation": {
        "en": "This is the rotational analog of $v = v_0 + at$, so $\\omega = \\omega_0 + \\alpha t$. The form with $\\frac{1}{2}\\alpha t^2$ belongs to the angular POSITION equation $\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2$, not the velocity.",
        "zh": "这是 $v = v_0 + at$ 的转动类比，故 $\\omega = \\omega_0 + \\alpha t$。含 $\\frac{1}{2}\\alpha t^2$ 的形式属于角位置方程 $\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2$，不是角速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A point at radius $r$ on a body with angular acceleration $\\alpha$ has tangential (linear) acceleration:",
        "zh": "在角加速度为 $\\alpha$ 的物体上、半径 $r$ 处的一点，其切向（线性）加速度为："
      },
      "choices": [
        "$a_t = \\omega^2 r$",
        "$a_t = \\alpha / r$",
        "$a_t = r\\alpha$",
        "$a_t = \\alpha$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Differentiating $v = r\\omega$ gives $a_t = r\\alpha$. The expression $\\omega^2 r$ is the CENTRIPETAL (radial) acceleration, which points inward and is separate from the tangential component.",
        "zh": "对 $v = r\\omega$ 求导得 $a_t = r\\alpha$。$\\omega^2 r$ 是向心（径向）加速度，指向圆心，与切向分量是分开的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The moment of inertia is defined by the integral $I = \\int r^2\\,dm$. In this expression, $r$ represents:",
        "zh": "转动惯量由积分 $I = \\int r^2\\,dm$ 定义。式中 $r$ 表示："
      },
      "choices": [
        "the distance the object has rotated",
        "the radius of the whole object",
        "the total mass divided by volume",
        "the distance from each mass element to the rotation axis"
      ],
      "answer": 3,
      "explanation": {
        "en": "Each mass element $dm$ is weighted by the square of its perpendicular distance to the axis, so $r$ is the per-element distance to the axis. Treating $r$ as a single fixed object radius ignores that mass is spread over many distances.",
        "zh": "每个质量元 $dm$ 都以它到轴的垂直距离的平方加权，所以 $r$ 是每个质量元到轴的距离。把 $r$ 当作物体单一固定半径，就忽略了质量分布在许多不同距离上。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wheel starts from rest and undergoes constant angular acceleration $\\alpha = 3$ rad/s$^2$. What is its angular velocity (in rad/s) after $t = 4$ s?",
        "zh": "一个轮子从静止开始，做恒定角加速度 $\\alpha = 3$ rad/s$^2$ 的运动。$t = 4$ s 后它的角速度（rad/s）是多少？"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "12 rad/s",
        "12rad/s"
      ],
      "explanation": {
        "en": "Using $\\omega = \\omega_0 + \\alpha t = 0 + 3(4) = 12$ rad/s. Forgetting the object starts from rest, or using $\\frac{1}{2}\\alpha t^2$, would give a wrong value.",
        "zh": "用 $\\omega = \\omega_0 + \\alpha t = 0 + 3(4) = 12$ rad/s。忘记物体从静止开始，或误用 $\\frac{1}{2}\\alpha t^2$，都会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the same wheel (from rest, $\\alpha = 3$ rad/s$^2$), through what angle (in rad) has it turned after $t = 4$ s?",
        "zh": "对同一个轮子（从静止，$\\alpha = 3$ rad/s$^2$），$t = 4$ s 后它转过的角度（rad）是多少？"
      },
      "answer": "24",
      "accept": [
        "24.0",
        "24 rad",
        "24rad"
      ],
      "explanation": {
        "en": "Using $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(3)(16) = 24$ rad. Using $\\omega t = 12 \\times 4$ overcounts because $\\omega$ was not constant during the acceleration.",
        "zh": "用 $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(3)(16) = 24$ rad。用 $\\omega t = 12 \\times 4$ 会算多，因为加速过程中 $\\omega$ 并非恒定。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A uniform solid disk has mass $M = 2$ kg and radius $R = 0.5$ m. What is its moment of inertia (in kg·m$^2$) about its central axis?",
        "zh": "一个均匀实心圆盘质量 $M = 2$ kg、半径 $R = 0.5$ m。它绕中心轴的转动惯量（kg·m$^2$）是多少？"
      },
      "answer": "0.25",
      "accept": [
        "0.250",
        ".25",
        "0.25 kg·m^2",
        "1/4"
      ],
      "explanation": {
        "en": "For a solid disk $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0.5)^2 = \\frac{1}{2}(2)(0.25) = 0.25$ kg·m$^2$. Forgetting to square the radius or dropping the $\\frac{1}{2}$ gives a wrong result.",
        "zh": "对实心圆盘 $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0.5)^2 = \\frac{1}{2}(2)(0.25) = 0.25$ kg·m$^2$。忘记把半径平方或丢掉 $\\frac{1}{2}$ 都会算错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point on a turntable is $r = 0.3$ m from the center, which spins at $\\omega = 10$ rad/s. What is the linear speed (in m/s) of that point?",
        "zh": "转盘上一点距中心 $r = 0.3$ m，转盘以 $\\omega = 10$ rad/s 转动。该点的线速度（m/s）是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 m/s",
        "3m/s"
      ],
      "explanation": {
        "en": "Using $v = r\\omega = 0.3 \\times 10 = 3$ m/s. Dividing instead of multiplying ($\\omega/r$) would wrongly give a much larger number.",
        "zh": "用 $v = r\\omega = 0.3 \\times 10 = 3$ m/s。若用除法 $\\omega/r$ 会错误地得到一个大得多的数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A uniform rod has mass $M = 3$ kg and length $L = 2$ m. What is its moment of inertia (in kg·m$^2$) about an axis through one END, perpendicular to the rod?",
        "zh": "一根均匀杆质量 $M = 3$ kg、长 $L = 2$ m。它绕过一端且垂直于杆的轴的转动惯量（kg·m$^2$）是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 kg·m^2",
        "4.00"
      ],
      "explanation": {
        "en": "About the end $I = \\frac{1}{3}ML^2 = \\frac{1}{3}(3)(2)^2 = \\frac{1}{3}(3)(4) = 4$ kg·m$^2$. Using the center-axis coefficient $\\frac{1}{12}$ instead would give only $1$ kg·m$^2$.",
        "zh": "绕端点 $I = \\frac{1}{3}ML^2 = \\frac{1}{3}(3)(2)^2 = \\frac{1}{3}(3)(4) = 4$ kg·m$^2$。若误用中心轴系数 $\\frac{1}{12}$ 只会得到 $1$ kg·m$^2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A uniform solid sphere has mass $M = 5$ kg and radius $R = 0.2$ m. Using the parallel-axis theorem, what is its moment of inertia (in kg·m$^2$) about an axis tangent to its surface?",
        "zh": "一个均匀实心球质量 $M = 5$ kg、半径 $R = 0.2$ m。用平行轴定理，求它绕与表面相切的轴的转动惯量（kg·m$^2$）。"
      },
      "answer": "0.28",
      "accept": [
        "0.280",
        ".28",
        "0.28 kg·m^2"
      ],
      "explanation": {
        "en": "A tangent axis is a distance $R$ from the center, so $I = \\frac{2}{5}MR^2 + MR^2 = \\frac{7}{5}MR^2 = \\frac{7}{5}(5)(0.04) = 0.28$ kg·m$^2$. Forgetting to add $MR^2$ (using only $\\frac{2}{5}MR^2 = 0.08$) omits the parallel-axis shift.",
        "zh": "切线轴距中心为 $R$，故 $I = \\frac{2}{5}MR^2 + MR^2 = \\frac{7}{5}MR^2 = \\frac{7}{5}(5)(0.04) = 0.28$ kg·m$^2$。忘记加 $MR^2$（只用 $\\frac{2}{5}MR^2 = 0.08$）就漏掉了平行轴的平移项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves in a circle of radius $r = 2$ m at constant angular speed $\\omega = 4$ rad/s. What is its centripetal acceleration (in m/s$^2$)?",
        "zh": "一个粒子以恒定角速度 $\\omega = 4$ rad/s 在半径 $r = 2$ m 的圆周上运动。它的向心加速度（m/s$^2$）是多少？"
      },
      "answer": "32",
      "accept": [
        "32.0",
        "32 m/s^2",
        "32m/s^2"
      ],
      "explanation": {
        "en": "Centripetal acceleration is $a_c = \\omega^2 r = (4)^2(2) = 16 \\times 2 = 32$ m/s$^2$. Forgetting to square $\\omega$ (using $\\omega r = 8$) gives the linear speed instead, not the acceleration.",
        "zh": "向心加速度为 $a_c = \\omega^2 r = (4)^2(2) = 16 \\times 2 = 32$ m/s$^2$。忘记把 $\\omega$ 平方（用 $\\omega r = 8$）得到的是线速度，而不是加速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A flywheel spinning at $\\omega_0 = 20$ rad/s is brought uniformly to rest in $t = 5$ s. What is the magnitude of its angular acceleration (in rad/s$^2$)?",
        "zh": "一个以 $\\omega_0 = 20$ rad/s 转动的飞轮，在 $t = 5$ s 内均匀停下。它角加速度的大小（rad/s$^2$）是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "-4",
        "4 rad/s^2",
        "4rad/s^2"
      ],
      "explanation": {
        "en": "From $\\omega = \\omega_0 + \\alpha t$ with final $\\omega = 0$: $\\alpha = -\\omega_0/t = -20/5 = -4$ rad/s$^2$, so the magnitude is $4$ rad/s$^2$. Dividing by the wrong time or multiplying instead of dividing gives an incorrect rate.",
        "zh": "由 $\\omega = \\omega_0 + \\alpha t$，末角速度 $\\omega = 0$：$\\alpha = -\\omega_0/t = -20/5 = -4$ rad/s$^2$，大小为 $4$ rad/s$^2$。用错时间或把除法当乘法都会得到错误的变化率。"
      }
    }
  ],
  "torque-rotational-dynamics/torque-rotational-dynamics": [
    {
      "type": "mc",
      "question": {
        "en": "Torque about a pivot is $\\tau = rF\\sin\\theta$, where $\\theta$ is the angle between the position vector and the force. For a fixed $r$ and $F$, torque is MAXIMUM when $\\theta$ equals:",
        "zh": "绕支点的力矩为 $\\tau = rF\\sin\\theta$，其中 $\\theta$ 是位置矢量与力之间的夹角。当 $r$ 和 $F$ 固定时，$\\theta$ 等于多少时力矩最大？"
      },
      "choices": [
        "$90^{\\circ}$",
        "$45^{\\circ}$",
        "$0^{\\circ}$",
        "$180^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sin\\theta$ is largest at $90^{\\circ}$, so a perpendicular force gives maximum torque. At $0^{\\circ}$ (force along the position vector) $\\sin\\theta = 0$ and the torque vanishes, a common sign of confusing the lever arm.",
        "zh": "$\\sin\\theta$ 在 $90^{\\circ}$ 时最大，所以垂直的力产生最大力矩。在 $0^{\\circ}$（力沿位置矢量方向）时 $\\sin\\theta = 0$，力矩为零，这常是搞混力臂的表现。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The rotational form of Newton's second law relates net torque, moment of inertia, and angular acceleration as:",
        "zh": "牛顿第二定律的转动形式把净力矩、转动惯量和角加速度联系为："
      },
      "choices": [
        "$\\tau = I\\omega$",
        "$\\tau = I\\alpha$",
        "$\\tau = I/\\alpha$",
        "$\\tau = m a$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The analog of $F = ma$ is $\\tau = I\\alpha$, with $I$ playing the role of mass and $\\alpha$ of acceleration. Writing $\\tau = I\\omega$ confuses this with angular momentum $L = I\\omega$, which is the rotational analog of momentum, not force.",
        "zh": "$F = ma$ 的类比是 $\\tau = I\\alpha$，其中 $I$ 相当于质量、$\\alpha$ 相当于加速度。写成 $\\tau = I\\omega$ 是把它和角动量 $L = I\\omega$ 混淆，后者是动量的类比，不是力的类比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Torque is defined as the vector cross product $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. The direction of $\\vec{\\tau}$ is found using:",
        "zh": "力矩定义为矢量叉积 $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$。$\\vec{\\tau}$ 的方向用什么确定？"
      },
      "choices": [
        "the direction of $\\vec{F}$",
        "the direction of $\\vec{r}$",
        "the right-hand rule (perpendicular to both $\\vec{r}$ and $\\vec{F}$)",
        "the direction of motion"
      ],
      "answer": 2,
      "explanation": {
        "en": "A cross product is perpendicular to both input vectors, and the right-hand rule fixes which way it points. Assuming $\\vec{\\tau}$ points along $\\vec{F}$ ignores that a cross product never lies in the plane of $\\vec{r}$ and $\\vec{F}$.",
        "zh": "叉积垂直于两个输入矢量，右手定则确定其指向。以为 $\\vec{\\tau}$ 沿 $\\vec{F}$ 方向，忽略了叉积绝不会落在 $\\vec{r}$ 与 $\\vec{F}$ 所在的平面内。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the SI units of torque?",
        "zh": "力矩的国际单位是什么？"
      },
      "choices": [
        "J (joule)",
        "kg·m/s",
        "N/m",
        "N·m"
      ],
      "answer": 3,
      "explanation": {
        "en": "Torque is force times lever arm, so N·m. Although this has the same dimensions as the joule, torque is deliberately NOT called a joule to distinguish it from energy, which is a scalar.",
        "zh": "力矩是力乘以力臂，故为 N·m。虽然它与焦耳量纲相同，但力矩特意不叫焦耳，以便与能量（标量）区分开。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A force is applied to a wheel exactly AT the rotation axis (line of action passes through the pivot). The torque it produces about that axis is:",
        "zh": "一个力恰好作用在转轴处（作用线通过支点）。它对该轴产生的力矩是："
      },
      "choices": [
        "zero",
        "equal to $rF$",
        "maximum",
        "equal to $F/r$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The lever arm (perpendicular distance from axis to the line of action) is zero, so $\\tau = 0$: a force through the pivot cannot rotate the body. Expecting a large torque ignores that torque depends on the perpendicular distance, not just the force.",
        "zh": "力臂（轴到作用线的垂直距离）为零，故 $\\tau = 0$：通过支点的力无法使物体转动。以为会有很大力矩，忽略了力矩取决于垂直距离而不仅是力的大小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The rotational kinetic energy of a rigid body rotating with angular speed $\\omega$ is:",
        "zh": "以角速度 $\\omega$ 转动的刚体的转动动能是："
      },
      "choices": [
        "$I\\omega$",
        "$\\frac{1}{2}I\\omega^2$",
        "$\\frac{1}{2}I^2\\omega$",
        "$I\\omega^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By analogy with $\\frac{1}{2}mv^2$, rotational KE is $\\frac{1}{2}I\\omega^2$. Dropping the square on $\\omega$ (writing $I\\omega$) gives angular momentum, which has different units and is not an energy.",
        "zh": "类比 $\\frac{1}{2}mv^2$，转动动能是 $\\frac{1}{2}I\\omega^2$。把 $\\omega$ 的平方去掉（写成 $I\\omega$）得到的是角动量，单位不同，也不是能量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid ball rolls without slipping down a ramp. Its total kinetic energy is:",
        "zh": "一个实心球沿斜面无滑动地滚下。它的总动能是："
      },
      "choices": [
        "only translational, $\\frac{1}{2}mv^2$",
        "only rotational, $\\frac{1}{2}I\\omega^2$",
        "the sum of translational and rotational KE",
        "zero because it rolls"
      ],
      "answer": 2,
      "explanation": {
        "en": "A rolling body both translates and spins, so $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. Counting only the translational part underestimates the energy and gives the wrong speed at the bottom.",
        "zh": "滚动物体既平动又转动，故 $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$。只算平动部分会低估能量，得到底部错误的速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The 'lever arm' (moment arm) of a force about a pivot is best described as:",
        "zh": "力对支点的“力臂”最好描述为："
      },
      "choices": [
        "the distance the object moves",
        "the total length of the object",
        "the magnitude of the force",
        "the perpendicular distance from the pivot to the force's line of action"
      ],
      "answer": 3,
      "explanation": {
        "en": "Torque equals force times the PERPENDICULAR distance from the axis to the line of action; that distance is the lever arm. Using the straight-line distance to the application point (ignoring the angle) overstates the torque when the force is not perpendicular.",
        "zh": "力矩等于力乘以从轴到作用线的垂直距离，这个距离就是力臂。用到作用点的直线距离（忽略角度）会在力不垂直时高估力矩。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A net torque of $\\tau = 20$ N·m acts on a body with moment of inertia $I = 5$ kg·m$^2$. Its angular acceleration is:",
        "zh": "净力矩 $\\tau = 20$ N·m 作用在转动惯量 $I = 5$ kg·m$^2$ 的物体上。它的角加速度是："
      },
      "choices": [
        "$4$ rad/s$^2$",
        "$0.25$ rad/s$^2$",
        "$100$ rad/s$^2$",
        "$15$ rad/s$^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "From $\\tau = I\\alpha$, $\\alpha = \\tau/I = 20/5 = 4$ rad/s$^2$. Multiplying $\\tau I = 100$ instead of dividing inverts the relationship and gives the wrong units.",
        "zh": "由 $\\tau = I\\alpha$，$\\alpha = \\tau/I = 20/5 = 4$ rad/s$^2$。用 $\\tau I = 100$ 而不是相除，把关系弄反了，单位也不对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The angular momentum of a rigid body rotating about a fixed axis is:",
        "zh": "绕固定轴转动的刚体的角动量是："
      },
      "choices": [
        "$L = \\frac{1}{2}I\\omega^2$",
        "$L = I\\omega$",
        "$L = I\\alpha$",
        "$L = \\tau t^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Angular momentum is $L = I\\omega$, the rotational analog of $p = mv$. The form $\\frac{1}{2}I\\omega^2$ is rotational kinetic energy, and $I\\alpha$ is torque, both different quantities.",
        "zh": "角动量为 $L = I\\omega$，是 $p = mv$ 的转动类比。$\\frac{1}{2}I\\omega^2$ 是转动动能，$I\\alpha$ 是力矩，都是不同的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The work done by a constant torque $\\tau$ turning a body through an angular displacement $\\theta$ is:",
        "zh": "恒定力矩 $\\tau$ 使物体转过角位移 $\\theta$ 所做的功是："
      },
      "choices": [
        "$W = \\tau/\\theta$",
        "$W = \\frac{1}{2}\\tau\\theta^2$",
        "$W = \\tau\\theta$",
        "$W = \\tau\\omega$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rotational work is $W = \\tau\\theta$, the analog of $W = Fd$. The expression $\\tau\\omega$ is instead rotational POWER (work per time), not the work itself.",
        "zh": "转动功为 $W = \\tau\\theta$，是 $W = Fd$ 的类比。$\\tau\\omega$ 是转动功率（单位时间做的功），不是功本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rigid body is in rotational equilibrium (not angularly accelerating). This requires that:",
        "zh": "一个刚体处于转动平衡（角加速度为零）。这要求："
      },
      "choices": [
        "the net force is zero",
        "all applied forces are equal",
        "the angular velocity is zero",
        "the net torque about any axis is zero"
      ],
      "answer": 3,
      "explanation": {
        "en": "Rotational equilibrium means $\\sum\\tau = 0$, so there is no angular acceleration. A body can have zero net torque while still spinning at constant $\\omega$, so requiring $\\omega = 0$ confuses equilibrium with being at rest.",
        "zh": "转动平衡意味着 $\\sum\\tau = 0$，因此没有角加速度。物体可以净力矩为零却仍以恒定 $\\omega$ 转动，所以要求 $\\omega = 0$ 是把平衡与静止混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force $F = 20$ N is applied perpendicular to a wrench at a distance $r = 0.5$ m from the bolt. What torque (in N·m) does it produce about the bolt?",
        "zh": "在距螺栓 $r = 0.5$ m 处，对扳手垂直施加 $F = 20$ N 的力。它对螺栓产生的力矩（N·m）是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10 N·m",
        "10 Nm",
        "10N·m"
      ],
      "explanation": {
        "en": "With $\\theta = 90^{\\circ}$, $\\tau = rF\\sin 90^{\\circ} = (0.5)(20)(1) = 10$ N·m. Adding $r$ and $F$ or forgetting the lever arm entirely would give a wrong value.",
        "zh": "当 $\\theta = 90^{\\circ}$ 时，$\\tau = rF\\sin 90^{\\circ} = (0.5)(20)(1) = 10$ N·m。把 $r$ 与 $F$ 相加，或完全忘掉力臂，都会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A body with moment of inertia $I = 2$ kg·m$^2$ has angular acceleration $\\alpha = 3$ rad/s$^2$. What net torque (in N·m) is acting on it?",
        "zh": "一个转动惯量 $I = 2$ kg·m$^2$ 的物体角加速度为 $\\alpha = 3$ rad/s$^2$。作用在它上的净力矩（N·m）是多少？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 N·m",
        "6 Nm"
      ],
      "explanation": {
        "en": "Using $\\tau = I\\alpha = (2)(3) = 6$ N·m. Dividing $I/\\alpha$ instead of multiplying misapplies the rotational form of Newton's second law.",
        "zh": "用 $\\tau = I\\alpha = (2)(3) = 6$ N·m。用 $I/\\alpha$ 而不是相乘，是误用了牛顿第二定律的转动形式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net torque of $12$ N·m acts on a wheel with moment of inertia $I = 4$ kg·m$^2$. What is its angular acceleration (in rad/s$^2$)?",
        "zh": "$12$ N·m 的净力矩作用在转动惯量 $I = 4$ kg·m$^2$ 的轮子上。它的角加速度（rad/s$^2$）是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 rad/s^2",
        "3rad/s^2"
      ],
      "explanation": {
        "en": "From $\\tau = I\\alpha$, $\\alpha = \\tau/I = 12/4 = 3$ rad/s$^2$. Multiplying $\\tau I = 48$ inverts the relationship.",
        "zh": "由 $\\tau = I\\alpha$，$\\alpha = \\tau/I = 12/4 = 3$ rad/s$^2$。用 $\\tau I = 48$ 把关系弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A flywheel with moment of inertia $I = 0.5$ kg·m$^2$ spins at $\\omega = 4$ rad/s. What is its rotational kinetic energy (in J)?",
        "zh": "一个转动惯量 $I = 0.5$ kg·m$^2$ 的飞轮以 $\\omega = 4$ rad/s 转动。它的转动动能（J）是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 J",
        "4J"
      ],
      "explanation": {
        "en": "Using $KE = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.5)(16) = 4$ J. Forgetting to square $\\omega$ (using $\\frac{1}{2}I\\omega = 1$) underestimates the energy.",
        "zh": "用 $KE = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.5)(16) = 4$ J。忘记把 $\\omega$ 平方（用 $\\frac{1}{2}I\\omega = 1$）会低估能量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A constant torque $\\tau = 5$ N·m turns a shaft through an angle $\\theta = 2$ rad. How much work (in J) does the torque do?",
        "zh": "恒定力矩 $\\tau = 5$ N·m 使转轴转过角度 $\\theta = 2$ rad。力矩做的功（J）是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10 J",
        "10J"
      ],
      "explanation": {
        "en": "Rotational work is $W = \\tau\\theta = (5)(2) = 10$ J. Dividing $\\tau/\\theta$ or using $\\tau\\theta^2$ misuses the work formula.",
        "zh": "转动功为 $W = \\tau\\theta = (5)(2) = 10$ J。用 $\\tau/\\theta$ 或 $\\tau\\theta^2$ 都误用了功的公式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A motor applies a torque $\\tau = 8$ N·m to a shaft rotating at $\\omega = 5$ rad/s. What power (in W) does the motor deliver?",
        "zh": "一台电机对以 $\\omega = 5$ rad/s 转动的轴施加力矩 $\\tau = 8$ N·m。电机输出的功率（W）是多少？"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "40 W",
        "40W"
      ],
      "explanation": {
        "en": "Rotational power is $P = \\tau\\omega = (8)(5) = 40$ W. Using $\\tau/\\omega$ or $\\frac{1}{2}\\tau\\omega$ gives the wrong power.",
        "zh": "转动功率为 $P = \\tau\\omega = (8)(5) = 40$ W。用 $\\tau/\\omega$ 或 $\\frac{1}{2}\\tau\\omega$ 都会算错功率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A pulley is a uniform solid disk of mass $M = 2$ kg and radius $R = 0.1$ m. What is its moment of inertia (in kg·m$^2$) about its central axis?",
        "zh": "一个滑轮是均匀实心圆盘，质量 $M = 2$ kg、半径 $R = 0.1$ m。它绕中心轴的转动惯量（kg·m$^2$）是多少？"
      },
      "answer": "0.01",
      "accept": [
        "0.010",
        ".01",
        "0.01 kg·m^2",
        "1e-2"
      ],
      "explanation": {
        "en": "For a solid disk $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0.1)^2 = \\frac{1}{2}(2)(0.01) = 0.01$ kg·m$^2$. Forgetting to square the small radius ($0.1$) is the usual slip here.",
        "zh": "对实心圆盘 $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(2)(0.1)^2 = \\frac{1}{2}(2)(0.01) = 0.01$ kg·m$^2$。忘记把小半径 $0.1$ 平方是这里常见的失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two forces act on a disk about its center. One provides $3$ N·m counterclockwise; the other provides $2$ N·m clockwise. What is the magnitude of the net torque (in N·m)?",
        "zh": "两个力作用在圆盘上（绕中心）。一个产生 $3$ N·m 逆时针力矩，另一个产生 $2$ N·m 顺时针力矩。净力矩的大小（N·m）是多少？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1 N·m",
        "1 Nm",
        "-1"
      ],
      "explanation": {
        "en": "Opposite senses subtract: $\\tau_{net} = 3 - 2 = 1$ N·m. Adding the two magnitudes to get $5$ ignores that clockwise and counterclockwise torques have opposite signs.",
        "zh": "方向相反相减：$\\tau_{net} = 3 - 2 = 1$ N·m。把两个大小相加得 $5$，忽略了顺时针与逆时针力矩符号相反。"
      }
    }
  ],
  "rotating-systems/rolling-rotational-energy": [
    {
      "type": "mc",
      "question": {
        "en": "The rotational kinetic energy of a rigid body spinning about a fixed axis is given by which expression?",
        "zh": "刚体绕固定轴自转的转动动能由下列哪个表达式给出？"
      },
      "choices": [
        "$K = \\frac{1}{2} I \\omega^2$",
        "$K = I \\omega$",
        "$K = \\frac{1}{2} m v^2$",
        "$K = \\frac{1}{2} I \\omega$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rotational kinetic energy is $K = \\frac{1}{2} I \\omega^2$, the rotational analog of $\\frac{1}{2} m v^2$ with $I$ replacing $m$ and $\\omega$ replacing $v$. Writing $I\\omega$ confuses energy with angular momentum $L = I\\omega$; leaving off the square drops the quadratic dependence on angular speed.",
        "zh": "转动动能为 $K = \\frac{1}{2} I \\omega^2$，是 $\\frac{1}{2} m v^2$ 的转动对应，用 $I$ 代替 $m$、$\\omega$ 代替 $v$。写成 $I\\omega$ 是把能量与角动量 $L = I\\omega$ 混淆；漏掉平方则丢失了对角速度的二次依赖。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an object rolling without slipping, the relationship between the center-of-mass speed $v$ and angular speed $\\omega$ is:",
        "zh": "对于纯滚动（不打滑）的物体，质心速率 $v$ 与角速率 $\\omega$ 的关系为："
      },
      "choices": [
        "$v = \\omega / R$",
        "$v = \\omega R$",
        "$v = R^2 \\omega$",
        "$v = 2 \\omega R$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rolling without slipping requires $v = \\omega R$: the contact point is instantaneously at rest, so the center moves at exactly $\\omega R$. Dividing by $R$ or inserting an extra factor misapplies the geometric constraint linking arc length to rotation.",
        "zh": "纯滚动要求 $v = \\omega R$：接触点瞬时静止，故质心以恰好 $\\omega R$ 运动。除以 $R$ 或多乘一个因子都错误地应用了弧长与转动之间的几何约束。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The total kinetic energy of a rolling object (translation plus rotation) can be written as:",
        "zh": "滚动物体的总动能（平动加转动）可写为："
      },
      "choices": [
        "$\\frac{1}{2} m v^2 - \\frac{1}{2} I \\omega^2$",
        "$\\frac{1}{2} I \\omega^2$ only",
        "$\\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2$",
        "$\\frac{1}{2} m v^2$ only"
      ],
      "answer": 2,
      "explanation": {
        "en": "A rolling body has both translational KE $\\frac{1}{2} m v^2$ and rotational KE $\\frac{1}{2} I \\omega^2$, and they add. Keeping only one term ignores that the object simultaneously moves and spins; subtracting them has no physical basis.",
        "zh": "滚动物体同时具有平动动能 $\\frac{1}{2} m v^2$ 和转动动能 $\\frac{1}{2} I \\omega^2$，二者相加。只保留其中一项忽略了物体既平动又自转；相减则毫无物理依据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid sphere ($I = \\frac{2}{5} m R^2$) and a hollow sphere ($I = \\frac{2}{3} m R^2$) are released from the same height on identical inclines and roll without slipping. Which reaches the bottom first?",
        "zh": "实心球（$I = \\frac{2}{5} m R^2$）和空心球（$I = \\frac{2}{3} m R^2$）从同一高度、相同斜面上释放并纯滚动。哪个先到底部？"
      },
      "choices": [
        "The hollow sphere",
        "Cannot be determined without the mass",
        "They tie",
        "The solid sphere"
      ],
      "answer": 3,
      "explanation": {
        "en": "The solid sphere has the smaller moment of inertia per unit $mR^2$, so a larger fraction of released potential energy becomes translational KE, giving greater acceleration and an earlier arrival. Expecting a tie ignores that the mass distribution — not the mass itself — sets the acceleration, which is why mass cancels.",
        "zh": "实心球单位 $mR^2$ 的转动惯量更小，因此释放的势能中更大比例转化为平动动能，加速度更大、先到达。认为并列则忽略了决定加速度的是质量分布而非质量本身，这也正是质量会抵消的原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A uniform disk ($I = \\frac{1}{2} m R^2$) rolls without slipping. What fraction of its total kinetic energy is rotational?",
        "zh": "一均匀圆盘（$I = \\frac{1}{2} m R^2$）纯滚动。其总动能中转动动能占多少比例？"
      },
      "choices": [
        "$1/3$",
        "$2/3$",
        "$1/4$",
        "$1/2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rotational KE $= \\frac{1}{2} I \\omega^2 = \\frac{1}{4} m v^2$ (using $I = \\frac{1}{2}mR^2$ and $v = \\omega R$), while total KE $= \\frac{3}{4} m v^2$, so the rotational share is $1/3$. Answering $1/2$ comes from mistaking the moment-of-inertia coefficient for the energy fraction rather than dividing rotational KE by the total.",
        "zh": "转动动能 $= \\frac{1}{2} I \\omega^2 = \\frac{1}{4} m v^2$（用 $I = \\frac{1}{2}mR^2$ 与 $v = \\omega R$），总动能 $= \\frac{3}{4} m v^2$，故转动占比为 $1/3$。答成 $1/2$ 是把转动惯量系数误当成能量比例，而没有用转动动能除以总动能。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball rolls without slipping down an incline. The force responsible for providing the angular acceleration (the torque about the center) is:",
        "zh": "一球沿斜面纯滚动下滚。提供角加速度（对质心的力矩）的力是："
      },
      "choices": [
        "Kinetic friction",
        "Static friction",
        "The normal force",
        "Gravity"
      ],
      "answer": 1,
      "explanation": {
        "en": "Static friction acts at the contact point and provides the only torque about the center, since gravity acts at the center (zero lever arm) and the normal force line passes through the center. Naming kinetic friction is wrong because rolling without slipping means no relative sliding at the contact, so the friction is static.",
        "zh": "静摩擦作用于接触点，提供对质心的唯一力矩，因为重力作用于质心（力臂为零）、法向力的作用线通过质心。说成动摩擦是错的，因为纯滚动意味着接触处无相对滑动，摩擦是静摩擦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The moment of inertia of a body about an axis a distance $d$ from a parallel axis through its center of mass is found using:",
        "zh": "物体绕某轴的转动惯量（该轴与过质心的平行轴相距 $d$）用下列哪个求出？"
      },
      "choices": [
        "$I = I_{cm} - m d^2$",
        "$I = I_{cm} + m d$",
        "$I = I_{cm} + m d^2$",
        "$I = I_{cm}/(m d^2)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The parallel-axis theorem gives $I = I_{cm} + m d^2$; moving the axis away from the center of mass always increases $I$. Subtracting the term or omitting the square misstates how inertia grows quadratically with the offset distance.",
        "zh": "平行轴定理给出 $I = I_{cm} + m d^2$；轴远离质心总会增大 $I$。相减或漏掉平方都错误描述了转动惯量随偏移距离的二次增长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A hoop, a disk, and a solid sphere (all same mass and radius) roll without slipping from rest down the same incline. Which has the greatest speed at the bottom?",
        "zh": "一个圆环、一个圆盘和一个实心球（质量、半径都相同）从静止在同一斜面上纯滚动。到底部时哪个速率最大？"
      },
      "choices": [
        "The disk",
        "The hoop",
        "All the same",
        "The solid sphere"
      ],
      "answer": 3,
      "explanation": {
        "en": "The solid sphere has the smallest $I/(mR^2) = 2/5$, so the least energy goes into rotation and the most into translation, yielding the highest bottom speed. Expecting all equal ignores that the moment-of-inertia coefficient — not the mass or radius — controls the energy split.",
        "zh": "实心球的 $I/(mR^2) = 2/5$ 最小，进入转动的能量最少、进入平动的最多，故底部速率最大。认为全部相等忽略了控制能量分配的是转动惯量系数，而非质量或半径。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid cylinder rolls without slipping and reaches speed $v$ at the bottom of an incline of height $h$. Which energy equation is correct?",
        "zh": "一实心圆柱纯滚动，在高为 $h$ 的斜面底部达到速率 $v$。下列哪个能量方程正确？"
      },
      "choices": [
        "$m g h = \\frac{3}{4} m v^2$",
        "$m g h = \\frac{1}{2} m v^2$",
        "$m g h = \\frac{1}{4} m v^2$",
        "$m g h = m v^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $I = \\frac{1}{2}mR^2$ and $v = \\omega R$, total KE $= \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$, which equals $mgh$. Using $\\frac{1}{2}mv^2$ alone forgets the rotational share and would overpredict the final speed.",
        "zh": "用 $I = \\frac{1}{2}mR^2$ 与 $v = \\omega R$，总动能 $= \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$，等于 $mgh$。只用 $\\frac{1}{2}mv^2$ 忽略了转动份额，会高估末速率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When an object rolls without slipping on a horizontal surface at constant speed, the work done by static friction is:",
        "zh": "当物体在水平面上以恒定速率纯滚动时，静摩擦所做的功为："
      },
      "choices": [
        "Positive and large",
        "Zero",
        "Negative and equal to the KE",
        "Equal to $m g d$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Static friction acts at the contact point, which is instantaneously at rest during rolling without slipping, so it moves through zero displacement and does zero work — this is why rolling can conserve mechanical energy. Assuming it dissipates energy like kinetic friction ignores that there is no sliding at the contact.",
        "zh": "静摩擦作用于接触点，而纯滚动时该点瞬时静止，故位移为零、做功为零——这正是滚动能守恒机械能的原因。像动摩擦那样假设它耗散能量忽略了接触处并无滑动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid sphere ($I = \\frac{2}{5}mR^2$) rolls without slipping down an incline of angle $\\theta$. Its center-of-mass acceleration is:",
        "zh": "一实心球（$I = \\frac{2}{5}mR^2$）沿倾角 $\\theta$ 的斜面纯滚动。其质心加速度为："
      },
      "choices": [
        "$a = g \\sin\\theta$",
        "$a = \\frac{2}{7} g \\sin\\theta$",
        "$a = \\frac{5}{7} g \\sin\\theta$",
        "$a = \\frac{2}{5} g \\sin\\theta$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For rolling, $a = \\frac{g\\sin\\theta}{1 + I/(mR^2)} = \\frac{g\\sin\\theta}{1 + 2/5} = \\frac{5}{7} g\\sin\\theta$. Answering $g\\sin\\theta$ treats the sphere as frictionless sliding, ignoring that rotation absorbs part of the driving effect.",
        "zh": "对于滚动，$a = \\frac{g\\sin\\theta}{1 + I/(mR^2)} = \\frac{g\\sin\\theta}{1 + 2/5} = \\frac{5}{7} g\\sin\\theta$。答成 $g\\sin\\theta$ 是把球当作无摩擦滑动，忽略了转动吸收了部分驱动作用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two cylinders of equal mass and radius, one solid and one hollow, roll without slipping with the same center-of-mass speed. Which has more total kinetic energy?",
        "zh": "两个质量、半径相等的圆柱，一实心一空心，以相同的质心速率纯滚动。哪个总动能更大？"
      },
      "choices": [
        "Depends on the length",
        "The solid cylinder",
        "They are equal",
        "The hollow cylinder"
      ],
      "answer": 3,
      "explanation": {
        "en": "At the same $v$ they share translational KE, but the hollow cylinder has the larger moment of inertia, so its rotational KE $\\frac{1}{2}I\\omega^2$ is greater, giving more total KE. Concluding they are equal overlooks that mass distribution, not just $v$, sets the rotational term.",
        "zh": "在相同 $v$ 下二者平动动能相同，但空心圆柱转动惯量更大，故其转动动能 $\\frac{1}{2}I\\omega^2$ 更大，总动能更多。认为相等忽略了决定转动项的是质量分布，而不只是 $v$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A disk has $I = 0.50 \\text{ kg·m}^2$ and spins at $\\omega = 4.0 \\text{ rad/s}$. What is its rotational kinetic energy, in joules?",
        "zh": "一圆盘的 $I = 0.50 \\text{ kg·m}^2$，以 $\\omega = 4.0 \\text{ rad/s}$ 自转。其转动动能是多少焦耳？"
      },
      "answer": "4.0",
      "accept": [
        "4",
        "4.0 J",
        "4 J",
        "4.00"
      ],
      "explanation": {
        "en": "$K = \\frac{1}{2} I \\omega^2 = \\frac{1}{2}(0.50)(4.0)^2 = \\frac{1}{2}(0.50)(16) = 4.0 \\text{ J}$. Forgetting to square $\\omega$ would give the incorrect value 1.0 J.",
        "zh": "$K = \\frac{1}{2} I \\omega^2 = \\frac{1}{2}(0.50)(4.0)^2 = \\frac{1}{2}(0.50)(16) = 4.0 \\text{ J}$。忘记将 $\\omega$ 平方会得到错误的 1.0 J。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wheel of radius $0.30 \\text{ m}$ rolls without slipping with center speed $6.0 \\text{ m/s}$. What is its angular speed, in rad/s?",
        "zh": "一半径 $0.30 \\text{ m}$ 的轮子以质心速率 $6.0 \\text{ m/s}$ 纯滚动。其角速率是多少 rad/s？"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20 rad/s",
        "20.0 rad/s"
      ],
      "explanation": {
        "en": "Rolling without slipping gives $\\omega = v/R = 6.0/0.30 = 20 \\text{ rad/s}$. Multiplying by $R$ instead of dividing would give the wrong value 1.8 rad/s.",
        "zh": "纯滚动给出 $\\omega = v/R = 6.0/0.30 = 20 \\text{ rad/s}$。误乘以 $R$ 而非相除会得到错误的 1.8 rad/s。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid sphere ($I = \\frac{2}{5}mR^2$) rolls without slipping down an incline of height $2.1 \\text{ m}$, starting from rest. Using $g = 9.8 \\text{ m/s}^2$, find its center-of-mass speed at the bottom, in m/s. (Answer: $v = \\sqrt{10gh/7}$.)",
        "zh": "一实心球（$I = \\frac{2}{5}mR^2$）从静止沿高 $2.1 \\text{ m}$ 的斜面纯滚动下滚。取 $g = 9.8 \\text{ m/s}^2$，求其在底部的质心速率（m/s）。（答案：$v = \\sqrt{10gh/7}$。）"
      },
      "answer": "5.4",
      "accept": [
        "5.42",
        "5.4 m/s",
        "5.42 m/s",
        "5.42218",
        "5.43"
      ],
      "explanation": {
        "en": "Energy conservation: $mgh = \\frac{7}{10}mv^2$, so $v = \\sqrt{10gh/7} = \\sqrt{10(9.8)(2.1)/7} = \\sqrt{29.4} = 5.4 \\text{ m/s}$. Using $v=\\sqrt{2gh}=6.4$ m/s forgets the rotational energy and overpredicts the speed.",
        "zh": "能量守恒：$mgh = \\frac{7}{10}mv^2$，故 $v = \\sqrt{10gh/7} = \\sqrt{10(9.8)(2.1)/7} = \\sqrt{29.4} = 5.4 \\text{ m/s}$。用 $v=\\sqrt{2gh}=6.4$ m/s 忽略了转动能量，高估了速率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid cylinder of mass $2.0 \\text{ kg}$ and radius $0.10 \\text{ m}$ rolls with center speed $3.0 \\text{ m/s}$. What is its total kinetic energy, in joules? (Use $I = \\frac{1}{2}mR^2$.)",
        "zh": "一质量 $2.0 \\text{ kg}$、半径 $0.10 \\text{ m}$ 的实心圆柱以质心速率 $3.0 \\text{ m/s}$ 滚动。其总动能是多少焦耳？（用 $I = \\frac{1}{2}mR^2$。）"
      },
      "answer": "13.5",
      "accept": [
        "13.5 J",
        "13.50",
        "13.5J",
        "27/2"
      ],
      "explanation": {
        "en": "Total KE $= \\frac{3}{4}mv^2 = \\frac{3}{4}(2.0)(3.0)^2 = \\frac{3}{4}(18) = 13.5 \\text{ J}$. Using only $\\frac{1}{2}mv^2 = 9.0$ J leaves out the rotational contribution.",
        "zh": "总动能 $= \\frac{3}{4}mv^2 = \\frac{3}{4}(2.0)(3.0)^2 = \\frac{3}{4}(18) = 13.5 \\text{ J}$。只用 $\\frac{1}{2}mv^2 = 9.0$ J 遗漏了转动贡献。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A hoop ($I = mR^2$) rolls without slipping. What fraction of its total kinetic energy is rotational? Give a decimal.",
        "zh": "一圆环（$I = mR^2$）纯滚动。其总动能中转动占多少比例？给出小数。"
      },
      "answer": "0.5",
      "accept": [
        "0.50",
        "1/2",
        ".5",
        "0.500",
        "50%"
      ],
      "explanation": {
        "en": "For a hoop, rotational KE $= \\frac{1}{2}mv^2$ equals translational KE $= \\frac{1}{2}mv^2$, so each is exactly half of the total — the rotational fraction is $0.5$. A smaller value would come from using a solid-body coefficient like $1/2$ for $I$ instead of the hoop's $I=mR^2$.",
        "zh": "对于圆环，转动动能 $= \\frac{1}{2}mv^2$ 等于平动动能 $= \\frac{1}{2}mv^2$，故各占总数一半——转动比例为 $0.5$。用像 $1/2$ 那样的实心系数代替圆环的 $I=mR^2$ 会得到更小的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rod of mass $0.60 \\text{ kg}$ and length $1.2 \\text{ m}$ rotates about one end with $I = \\frac{1}{3}mL^2$. What is its moment of inertia, in kg·m²?",
        "zh": "一质量 $0.60 \\text{ kg}$、长 $1.2 \\text{ m}$ 的杆绕一端转动，$I = \\frac{1}{3}mL^2$。其转动惯量是多少 kg·m²？"
      },
      "answer": "0.288",
      "accept": [
        "0.29",
        "0.288 kg·m^2",
        "0.2880",
        "0.288 kg m^2"
      ],
      "explanation": {
        "en": "$I = \\frac{1}{3}mL^2 = \\frac{1}{3}(0.60)(1.2)^2 = \\frac{1}{3}(0.60)(1.44) = 0.288 \\text{ kg·m}^2$. Using the center-axis formula $\\frac{1}{12}mL^2 = 0.072$ would understate the inertia for an end axis.",
        "zh": "$I = \\frac{1}{3}mL^2 = \\frac{1}{3}(0.60)(1.2)^2 = \\frac{1}{3}(0.60)(1.44) = 0.288 \\text{ kg·m}^2$。用过中心轴公式 $\\frac{1}{12}mL^2 = 0.072$ 会低估绕一端的转动惯量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the parallel-axis theorem, a disk with $I_{cm} = 0.20 \\text{ kg·m}^2$, mass $4.0 \\text{ kg}$, is rotated about an axis $0.30 \\text{ m}$ from its center. What is $I$ about the new axis, in kg·m²?",
        "zh": "用平行轴定理，一质量 $4.0 \\text{ kg}$、$I_{cm} = 0.20 \\text{ kg·m}^2$ 的圆盘绕距其中心 $0.30 \\text{ m}$ 的轴转动。绕新轴的 $I$ 是多少 kg·m²？"
      },
      "answer": "0.56",
      "accept": [
        "0.560",
        "0.56 kg·m^2",
        "0.5600"
      ],
      "explanation": {
        "en": "$I = I_{cm} + m d^2 = 0.20 + (4.0)(0.30)^2 = 0.20 + 0.36 = 0.56 \\text{ kg·m}^2$. Forgetting to square $d$ gives $0.20 + 1.2 = 1.4$, an incorrect result.",
        "zh": "$I = I_{cm} + m d^2 = 0.20 + (4.0)(0.30)^2 = 0.20 + 0.36 = 0.56 \\text{ kg·m}^2$。忘记将 $d$ 平方会得到 $0.20 + 1.2 = 1.4$，结果错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid sphere ($I = \\frac{2}{5}mR^2$) rolls without slipping down an incline of angle $30^\\circ$. Using $g = 9.8 \\text{ m/s}^2$, what is its center-of-mass acceleration, in m/s²? ($a = \\frac{5}{7}g\\sin\\theta$.)",
        "zh": "一实心球（$I = \\frac{2}{5}mR^2$）沿倾角 $30^\\circ$ 的斜面纯滚动。取 $g = 9.8 \\text{ m/s}^2$，其质心加速度是多少 m/s²？（$a = \\frac{5}{7}g\\sin\\theta$。）"
      },
      "answer": "3.5",
      "accept": [
        "3.50",
        "3.5 m/s^2",
        "3.50 m/s^2"
      ],
      "explanation": {
        "en": "$a = \\frac{5}{7}g\\sin 30^\\circ = \\frac{5}{7}(9.8)(0.5) = \\frac{5}{7}(4.9) = 3.5 \\text{ m/s}^2$. Using $g\\sin\\theta = 4.9$ treats the sphere as sliding frictionlessly and ignores rotational inertia.",
        "zh": "$a = \\frac{5}{7}g\\sin 30^\\circ = \\frac{5}{7}(9.8)(0.5) = \\frac{5}{7}(4.9) = 3.5 \\text{ m/s}^2$。用 $g\\sin\\theta = 4.9$ 是把球当作无摩擦滑动，忽略了转动惯量。"
      }
    }
  ],
  "rotating-systems/angular-momentum-gravitation": [
    {
      "type": "mc",
      "question": {
        "en": "The angular momentum of a rigid body rotating about a fixed axis is given by:",
        "zh": "刚体绕固定轴转动的角动量由下式给出："
      },
      "choices": [
        "$L = I \\omega$",
        "$L = I \\alpha$",
        "$L = \\frac{1}{2} I \\omega^2$",
        "$L = I / \\omega$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Angular momentum is $L = I\\omega$, the rotational analog of $p = mv$. Writing $\\frac{1}{2}I\\omega^2$ is rotational kinetic energy, and $I\\alpha$ is net torque — both confuse a different rotational quantity with angular momentum.",
        "zh": "角动量为 $L = I\\omega$，是 $p = mv$ 的转动对应。写成 $\\frac{1}{2}I\\omega^2$ 是转动动能，$I\\alpha$ 是合力矩——两者都把别的转动量与角动量混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spinning ice skater pulls in her arms, decreasing her moment of inertia. With no external torque, her angular speed:",
        "zh": "旋转的滑冰运动员收回手臂，减小转动惯量。在无外力矩时，其角速率："
      },
      "choices": [
        "Decreases",
        "Increases",
        "Stays the same",
        "Drops to zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "With no external torque, $L = I\\omega$ is conserved, so reducing $I$ must increase $\\omega$. Thinking the speed stays constant confuses conservation of angular momentum with constant angular velocity, which only holds if $I$ is unchanged.",
        "zh": "无外力矩时 $L = I\\omega$ 守恒，故减小 $I$ 必使 $\\omega$ 增大。认为速率不变是把角动量守恒与角速度不变混淆，后者只有在 $I$ 不变时才成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Angular momentum of a system is conserved when:",
        "zh": "系统的角动量守恒的条件是："
      },
      "choices": [
        "The net force is zero",
        "The kinetic energy is constant",
        "The net external torque is zero",
        "The moment of inertia is constant"
      ],
      "answer": 2,
      "explanation": {
        "en": "Angular momentum is conserved exactly when the net external torque is zero, since $\\tau_{net} = dL/dt$. Requiring zero net force is the condition for linear momentum, not angular; a body can have zero net force yet feel a torque from a couple.",
        "zh": "当合外力矩为零时角动量守恒，因为 $\\tau_{net} = dL/dt$。要求合力为零是线动量守恒的条件，而非角动量；物体可以合力为零却受到力偶产生的力矩。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Newton's law of universal gravitation states that the force between two point masses is:",
        "zh": "牛顿万有引力定律指出，两质点间的力为："
      },
      "choices": [
        "$F = G \\frac{m_1 m_2}{r}$",
        "$F = G \\frac{m_1 m_2}{r^3}$",
        "$F = G \\frac{m_1 + m_2}{r^2}$",
        "$F = G \\frac{m_1 m_2}{r^2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Gravitation follows an inverse-square law: $F = G\\frac{m_1 m_2}{r^2}$. Using $r$ or $r^3$ in the denominator misstates the distance dependence, and adding the masses instead of multiplying them breaks the product form of the interaction.",
        "zh": "引力遵循平方反比定律：$F = G\\frac{m_1 m_2}{r^2}$。分母用 $r$ 或 $r^3$ 错误描述了距离依赖，而将质量相加而非相乘破坏了相互作用的乘积形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The gravitational field (acceleration) at distance $r$ from the center of a planet of mass $M$ is:",
        "zh": "距质量为 $M$ 的行星中心 $r$ 处的引力场（加速度）为："
      },
      "choices": [
        "$g = \\frac{GM}{r^2}$",
        "$g = \\frac{GM}{r}$",
        "$g = GMr^2$",
        "$g = \\frac{GMm}{r^2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Dividing gravitational force by the test mass gives $g = GM/r^2$, independent of the test mass. Keeping an $m$ in the expression confuses the field with the force on a particular object, and dropping the square misstates the falloff.",
        "zh": "用引力除以试验质量得 $g = GM/r^2$，与试验质量无关。表达式中保留 $m$ 是把场与作用在特定物体上的力混淆，去掉平方则错误描述了衰减规律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a satellite in a circular orbit of radius $r$ around a planet of mass $M$, the orbital speed is:",
        "zh": "对绕质量为 $M$ 行星做半径 $r$ 圆轨道的卫星，其轨道速率为："
      },
      "choices": [
        "$v = \\sqrt{GM r}$",
        "$v = \\sqrt{\\frac{GM}{r}}$",
        "$v = \\frac{GM}{r}$",
        "$v = \\sqrt{\\frac{2GM}{r}}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Setting gravity equal to the centripetal requirement, $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$, gives $v = \\sqrt{GM/r}$. The form $\\sqrt{2GM/r}$ is the escape speed, which is larger than orbital speed by a factor of $\\sqrt{2}$.",
        "zh": "令引力等于向心需求 $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$，得 $v = \\sqrt{GM/r}$。形式 $\\sqrt{2GM/r}$ 是逃逸速率，比轨道速率大 $\\sqrt{2}$ 倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Kepler's third law for circular orbits relates the period $T$ and orbital radius $r$ as:",
        "zh": "开普勒第三定律对圆轨道将周期 $T$ 与轨道半径 $r$ 联系为："
      },
      "choices": [
        "$T^2 \\propto r^2$",
        "$T \\propto r^2$",
        "$T^2 \\propto r^3$",
        "$T^3 \\propto r^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Kepler's third law states $T^2 \\propto r^3$, which follows from combining the orbital-speed result with $T = 2\\pi r/v$. Swapping the exponents or using $r^2$ misremembers the characteristic period-radius scaling of orbits.",
        "zh": "开普勒第三定律为 $T^2 \\propto r^3$，由轨道速率结果与 $T = 2\\pi r/v$ 结合得到。交换指数或用 $r^2$ 是记错了轨道特有的周期-半径标度关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The gravitational potential energy of two masses separated by distance $r$ (taking zero at infinity) is:",
        "zh": "相距 $r$ 的两质量的引力势能（取无穷远为零）为："
      },
      "choices": [
        "$U = +G \\frac{m_1 m_2}{r}$",
        "$U = -G \\frac{m_1 m_2}{r^2}$",
        "$U = G \\frac{m_1 m_2}{r^2}$",
        "$U = -G \\frac{m_1 m_2}{r}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Gravitational PE is $U = -G\\frac{m_1 m_2}{r}$: negative because gravity is attractive and $U \\to 0$ as $r \\to \\infty$. A positive sign implies repulsion, and an $r^2$ denominator confuses potential energy with the force law.",
        "zh": "引力势能为 $U = -G\\frac{m_1 m_2}{r}$：为负是因为引力吸引且 $r \\to \\infty$ 时 $U \\to 0$。正号意味着排斥，分母用 $r^2$ 是把势能与力的公式混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A planet moves in an elliptical orbit. According to Kepler's second law, the planet moves fastest:",
        "zh": "一行星沿椭圆轨道运动。根据开普勒第二定律，行星运动最快处是："
      },
      "choices": [
        "At perihelion (nearest point)",
        "At aphelion (farthest point)",
        "At the two points on the minor axis",
        "At constant speed everywhere"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since angular momentum is conserved ($L = mvr$ at the extremes), the speed is greatest where $r$ is smallest — at perihelion. Choosing aphelion inverts the relationship, forgetting that a smaller radius demands a larger speed to keep $L$ constant.",
        "zh": "由于角动量守恒（在极点处 $L = mvr$），$r$ 最小处速率最大——即近日点。选远日点是把关系颠倒，忘记了较小半径需要较大速率以保持 $L$ 不变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A torque $\\tau$ acts on a body for time $\\Delta t$. The change in its angular momentum equals:",
        "zh": "一力矩 $\\tau$ 作用于物体历时 $\\Delta t$。其角动量的变化等于："
      },
      "choices": [
        "$\\tau / \\Delta t$",
        "$\\tau \\Delta t$",
        "$\\frac{1}{2}\\tau (\\Delta t)^2$",
        "$\\tau^2 \\Delta t$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The angular impulse-momentum theorem gives $\\Delta L = \\tau \\Delta t$ (for constant torque), the rotational analog of $\\Delta p = F\\Delta t$. Dividing by time or squaring it confuses impulse with rate or with a kinematic displacement expression.",
        "zh": "角冲量-动量定理给出 $\\Delta L = \\tau \\Delta t$（恒力矩），是 $\\Delta p = F\\Delta t$ 的转动对应。除以时间或将其平方是把冲量与变化率或某个运动学位移表达式混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A merry-go-round (disk, $I = \\frac{1}{2}MR^2$) spins freely. A child steps on at the rim. The system's angular speed:",
        "zh": "一旋转木马（圆盘，$I = \\frac{1}{2}MR^2$）自由旋转。一小孩站上边缘。系统的角速率："
      },
      "choices": [
        "Increases",
        "Stays exactly the same",
        "Decreases",
        "Reverses direction"
      ],
      "answer": 2,
      "explanation": {
        "en": "No external torque acts, so $L = I\\omega$ is conserved; the child adds moment of inertia, so $\\omega$ must decrease. Expecting no change ignores that increasing $I$ at fixed $L$ necessarily lowers the angular speed.",
        "zh": "无外力矩作用，故 $L = I\\omega$ 守恒；小孩增加了转动惯量，故 $\\omega$ 必减小。认为不变忽略了在 $L$ 固定时增大 $I$ 必然降低角速率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The escape speed from the surface of a planet of mass $M$ and radius $R$ is:",
        "zh": "从质量 $M$、半径 $R$ 的行星表面逃逸的速率为："
      },
      "choices": [
        "$v = \\sqrt{\\frac{GM}{R}}$",
        "$v = \\sqrt{\\frac{GM}{2R}}$",
        "$v = \\frac{2GM}{R}$",
        "$v = \\sqrt{\\frac{2GM}{R}}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Setting total energy to zero, $\\frac{1}{2}mv^2 - \\frac{GMm}{R} = 0$, gives $v = \\sqrt{2GM/R}$. Dropping the factor of 2 yields the circular orbital speed instead, which is not enough to escape.",
        "zh": "令总能量为零 $\\frac{1}{2}mv^2 - \\frac{GMm}{R} = 0$，得 $v = \\sqrt{2GM/R}$。漏掉因子 2 得到的是圆轨道速率，不足以逃逸。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A disk has $I = 2.5 \\text{ kg·m}^2$ and spins at $\\omega = 8.0 \\text{ rad/s}$. What is its angular momentum, in kg·m²/s?",
        "zh": "一圆盘 $I = 2.5 \\text{ kg·m}^2$，以 $\\omega = 8.0 \\text{ rad/s}$ 自转。其角动量是多少 kg·m²/s？"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20 kg·m^2/s",
        "20.0 kg m^2/s"
      ],
      "explanation": {
        "en": "$L = I\\omega = (2.5)(8.0) = 20 \\text{ kg·m}^2/\\text{s}$. Using $\\frac{1}{2}I\\omega^2 = 80$ would compute kinetic energy, not angular momentum.",
        "zh": "$L = I\\omega = (2.5)(8.0) = 20 \\text{ kg·m}^2/\\text{s}$。用 $\\frac{1}{2}I\\omega^2 = 80$ 算的是动能，而非角动量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A skater with $I_1 = 6.0 \\text{ kg·m}^2$ spins at $\\omega_1 = 2.0 \\text{ rad/s}$. She pulls in to $I_2 = 2.0 \\text{ kg·m}^2$. What is her new angular speed, in rad/s?",
        "zh": "一滑冰者 $I_1 = 6.0 \\text{ kg·m}^2$，以 $\\omega_1 = 2.0 \\text{ rad/s}$ 旋转。她收臂至 $I_2 = 2.0 \\text{ kg·m}^2$。新角速率是多少 rad/s？"
      },
      "answer": "6.0",
      "accept": [
        "6",
        "6.00",
        "6 rad/s",
        "6.0 rad/s"
      ],
      "explanation": {
        "en": "Conserving angular momentum, $I_1\\omega_1 = I_2\\omega_2$, so $\\omega_2 = (6.0)(2.0)/2.0 = 6.0 \\text{ rad/s}$. Assuming $\\omega$ stays 2.0 would ignore the change in moment of inertia.",
        "zh": "角动量守恒 $I_1\\omega_1 = I_2\\omega_2$，故 $\\omega_2 = (6.0)(2.0)/2.0 = 6.0 \\text{ rad/s}$。假设 $\\omega$ 仍为 2.0 会忽略转动惯量的变化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two 5.0 kg point masses are separated by 2.0 m. Using $G = 6.67 \\times 10^{-11}$, what is the gravitational force between them, in newtons? (Use scientific notation.)",
        "zh": "两个 5.0 kg 的质点相距 2.0 m。取 $G = 6.67 \\times 10^{-11}$，它们之间的引力是多少牛顿？（用科学记数法。）"
      },
      "answer": "4.2e-10",
      "accept": [
        "4.2e-10",
        "4.17e-10",
        "4.2 x 10^-10",
        "4.17e-10 N",
        "4.2e-10 N",
        "4.169e-10"
      ],
      "explanation": {
        "en": "$F = G\\frac{m_1 m_2}{r^2} = (6.67\\times10^{-11})\\frac{(5.0)(5.0)}{(2.0)^2} = (6.67\\times10^{-11})(6.25) = 4.2\\times10^{-10} \\text{ N}$. Forgetting to square the 2.0 m separation would double the result incorrectly.",
        "zh": "$F = G\\frac{m_1 m_2}{r^2} = (6.67\\times10^{-11})\\frac{(5.0)(5.0)}{(2.0)^2} = (6.67\\times10^{-11})(6.25) = 4.2\\times10^{-10} \\text{ N}$。忘记将 2.0 m 平方会错误地使结果翻倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A satellite orbits a planet of mass $M = 6.0 \\times 10^{24} \\text{ kg}$ at radius $r = 7.0 \\times 10^6 \\text{ m}$. Using $G = 6.67 \\times 10^{-11}$, what is its orbital speed, in m/s? (Round to 3 sig figs, e.g. 7.56e3.)",
        "zh": "一卫星绕质量 $M = 6.0 \\times 10^{24} \\text{ kg}$ 的行星以半径 $r = 7.0 \\times 10^6 \\text{ m}$ 运行。取 $G = 6.67 \\times 10^{-11}$，其轨道速率是多少 m/s？（保留 3 位有效数字，如 7.56e3。）"
      },
      "answer": "7560",
      "accept": [
        "7.56e3",
        "7560",
        "7563",
        "7.56 x 10^3",
        "7560 m/s",
        "7.6e3",
        "7562"
      ],
      "explanation": {
        "en": "$v = \\sqrt{GM/r} = \\sqrt{(6.67\\times10^{-11})(6.0\\times10^{24})/(7.0\\times10^6)} = \\sqrt{5.72\\times10^7} \\approx 7560 \\text{ m/s}$. Using $\\sqrt{2GM/r}$ would give the escape speed, larger by $\\sqrt{2}$.",
        "zh": "$v = \\sqrt{GM/r} = \\sqrt{(6.67\\times10^{-11})(6.0\\times10^{24})/(7.0\\times10^6)} = \\sqrt{5.72\\times10^7} \\approx 7560 \\text{ m/s}$。用 $\\sqrt{2GM/r}$ 得到的是逃逸速率，大 $\\sqrt{2}$ 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The gravitational field at Earth's surface is $9.8 \\text{ m/s}^2$. At a distance of $3$ Earth radii from Earth's center, what is the field strength, in m/s²?",
        "zh": "地球表面的引力场为 $9.8 \\text{ m/s}^2$。在距地心 $3$ 个地球半径处，场强是多少 m/s²？"
      },
      "answer": "1.09",
      "accept": [
        "1.09",
        "1.1",
        "1.089",
        "1.09 m/s^2",
        "9.8/9"
      ],
      "explanation": {
        "en": "Since $g \\propto 1/r^2$, at $3R$ the field is $9.8/3^2 = 9.8/9 = 1.09 \\text{ m/s}^2$. Dividing by 3 instead of $3^2$ ignores the inverse-square nature and overstates the field.",
        "zh": "由于 $g \\propto 1/r^2$，在 $3R$ 处场强为 $9.8/3^2 = 9.8/9 = 1.09 \\text{ m/s}^2$。除以 3 而非 $3^2$ 忽略了平方反比关系，高估了场强。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A torque of $4.0 \\text{ N·m}$ acts on a wheel for $3.0 \\text{ s}$. What is the change in the wheel's angular momentum, in kg·m²/s?",
        "zh": "一 $4.0 \\text{ N·m}$ 的力矩作用于轮子 $3.0 \\text{ s}$。轮子角动量的变化是多少 kg·m²/s？"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "12 kg·m^2/s",
        "12.0 kg m^2/s"
      ],
      "explanation": {
        "en": "The angular impulse gives $\\Delta L = \\tau \\Delta t = (4.0)(3.0) = 12 \\text{ kg·m}^2/\\text{s}$. Dividing torque by time would instead compute an unrelated rate, not the momentum change.",
        "zh": "角冲量给出 $\\Delta L = \\tau \\Delta t = (4.0)(3.0) = 12 \\text{ kg·m}^2/\\text{s}$。用力矩除以时间算的是一个无关的变化率，而非动量变化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A planet at perihelion is $2.0 \\times 10^{11} \\text{ m}$ from the Sun moving at $3.0 \\times 10^4 \\text{ m/s}$. At aphelion it is $4.0 \\times 10^{11} \\text{ m}$ away. Using conservation of angular momentum, what is its aphelion speed, in m/s?",
        "zh": "一行星在近日点距太阳 $2.0 \\times 10^{11} \\text{ m}$，速率 $3.0 \\times 10^4 \\text{ m/s}$。在远日点距 $4.0 \\times 10^{11} \\text{ m}$。用角动量守恒，其远日点速率是多少 m/s？"
      },
      "answer": "15000",
      "accept": [
        "1.5e4",
        "15000",
        "1.5 x 10^4",
        "15000 m/s",
        "1.5e4 m/s"
      ],
      "explanation": {
        "en": "Angular momentum $mvr$ is conserved, so $v_a = v_p r_p / r_a = (3.0\\times10^4)(2.0\\times10^{11})/(4.0\\times10^{11}) = 1.5\\times10^4 \\text{ m/s}$. Assuming equal speeds at both points ignores that a larger radius requires a smaller speed to keep $L$ constant.",
        "zh": "角动量 $mvr$ 守恒，故 $v_a = v_p r_p / r_a = (3.0\\times10^4)(2.0\\times10^{11})/(4.0\\times10^{11}) = 1.5\\times10^4 \\text{ m/s}$。假设两点速率相等忽略了较大半径需要较小速率以保持 $L$ 不变。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Planet A orbits a star with period $T_A = 1.0 \\text{ yr}$ at radius $r_A$. Planet B orbits the same star at radius $r_B = 4 r_A$. Using Kepler's third law, what is Planet B's period, in years?",
        "zh": "行星 A 绕某恒星运行，周期 $T_A = 1.0 \\text{ yr}$，半径 $r_A$。行星 B 绕同一恒星运行，半径 $r_B = 4 r_A$。用开普勒第三定律，行星 B 的周期是多少年？"
      },
      "answer": "8.0",
      "accept": [
        "8",
        "8.00",
        "8 yr",
        "8.0 yr",
        "8 years"
      ],
      "explanation": {
        "en": "Kepler's third law gives $T \\propto r^{3/2}$, so $T_B = T_A (4)^{3/2} = 1.0 \\times 8 = 8.0 \\text{ yr}$. Using $T \\propto r$ (a factor of 4) ignores the $3/2$ power that comes from $T^2 \\propto r^3$.",
        "zh": "开普勒第三定律给出 $T \\propto r^{3/2}$，故 $T_B = T_A (4)^{3/2} = 1.0 \\times 8 = 8.0 \\text{ yr}$。用 $T \\propto r$（即 4 倍）忽略了源自 $T^2 \\propto r^3$ 的 $3/2$ 次方。"
      }
    }
  ],
  "oscillations/shm-differential-equation": [
    {
      "type": "mc",
      "question": {
        "en": "A mass on a spring obeys $\\frac{d^2x}{dt^2} = -\\frac{k}{m}x$. Which function is a general solution?",
        "zh": "弹簧上的质量满足 $\\frac{d^2x}{dt^2} = -\\frac{k}{m}x$。下列哪个函数是通解?"
      },
      "choices": [
        "$x(t) = A\\cos(\\omega t + \\phi)$ with $\\omega = \\sqrt{k/m}$",
        "$x(t) = A e^{kt/m}$",
        "$x(t) = At + B$",
        "$x(t) = A e^{-kt/m}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The equation says the second derivative is proportional to the negative of $x$, so the solution must oscillate; $\\cos(\\omega t + \\phi)$ with $\\omega = \\sqrt{k/m}$ works. Choosing a real exponential treats the sign as positive (as in exponential growth/decay) and does not give oscillation.",
        "zh": "方程表明二阶导数与 $x$ 成负比例,所以解必须振荡;$\\cos(\\omega t + \\phi)$ 且 $\\omega = \\sqrt{k/m}$ 满足。选实指数函数把符号当成正的(如指数增长/衰减),不会产生振荡。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For SHM the angular frequency of a mass $m$ on a spring of constant $k$ is:",
        "zh": "对于简谐运动,质量 $m$ 在劲度系数为 $k$ 的弹簧上的角频率是:"
      },
      "choices": [
        "$\\omega = \\frac{k}{m}$",
        "$\\omega = \\sqrt{\\frac{k}{m}}$",
        "$\\omega = \\sqrt{\\frac{m}{k}}$",
        "$\\omega = 2\\pi\\frac{k}{m}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substituting $x=A\\cos(\\omega t+\\phi)$ into the differential equation gives $-\\omega^2 = -k/m$, so $\\omega=\\sqrt{k/m}$. Writing $\\sqrt{m/k}$ inverts the ratio, which is actually the expression proportional to the period, not the angular frequency.",
        "zh": "把 $x=A\\cos(\\omega t+\\phi)$ 代入微分方程得到 $-\\omega^2 = -k/m$,所以 $\\omega=\\sqrt{k/m}$。写成 $\\sqrt{m/k}$ 把比值倒置了,那实际上与周期成正比,不是角频率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $x(t)=A\\cos(\\omega t)$, what is the velocity $v(t)$?",
        "zh": "若 $x(t)=A\\cos(\\omega t)$,速度 $v(t)$ 是多少?"
      },
      "choices": [
        "$v(t) = -A\\omega^2\\cos(\\omega t)$",
        "$v(t) = A\\omega\\sin(\\omega t)$",
        "$v(t) = -A\\omega\\sin(\\omega t)$",
        "$v(t) = A\\sin(\\omega t)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Velocity is $dx/dt = -A\\omega\\sin(\\omega t)$; the derivative of cosine is minus sine and the chain rule brings out a factor of $\\omega$. Dropping the minus sign forgets the derivative of cosine, and $-A\\omega^2\\cos$ is the acceleration, not the velocity.",
        "zh": "速度是 $dx/dt = -A\\omega\\sin(\\omega t)$;余弦的导数是负正弦,链式法则带出因子 $\\omega$。丢掉负号忽略了余弦的导数,而 $-A\\omega^2\\cos$ 是加速度而非速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The period of a mass-spring oscillator is:",
        "zh": "弹簧振子的周期是:"
      },
      "choices": [
        "$T = 2\\pi\\sqrt{\\frac{k}{m}}$",
        "$T = \\frac{1}{2\\pi}\\sqrt{\\frac{m}{k}}$",
        "$T = 2\\pi\\frac{m}{k}$",
        "$T = 2\\pi\\sqrt{\\frac{m}{k}}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $\\omega=\\sqrt{k/m}$ and $T=2\\pi/\\omega$, we get $T=2\\pi\\sqrt{m/k}$. Putting $k/m$ under the root inverts the ratio and would wrongly make a stiffer spring give a longer period.",
        "zh": "因为 $\\omega=\\sqrt{k/m}$ 且 $T=2\\pi/\\omega$,所以 $T=2\\pi\\sqrt{m/k}$。把 $k/m$ 放在根号下会把比值倒置,错误地让更硬的弹簧对应更长的周期。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How does the period of a mass-spring system change if the mass is quadrupled?",
        "zh": "如果质量变为原来的四倍,弹簧振子的周期如何变化?"
      },
      "choices": [
        "It doubles",
        "It quadruples",
        "It is unchanged",
        "It is halved"
      ],
      "answer": 0,
      "explanation": {
        "en": "Because $T\\propto\\sqrt{m}$, quadrupling $m$ multiplies $T$ by $\\sqrt{4}=2$. Expecting the period to quadruple treats $T$ as proportional to $m$ instead of to $\\sqrt{m}$.",
        "zh": "因为 $T\\propto\\sqrt{m}$,质量变四倍使 $T$ 乘以 $\\sqrt{4}=2$。以为周期变四倍是把 $T$ 当成与 $m$ 成正比,而不是与 $\\sqrt{m}$ 成正比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a simple pendulum of length $L$ under small-angle approximation, the equation of motion is $\\frac{d^2\\theta}{dt^2} = -\\frac{g}{L}\\theta$. Its angular frequency is:",
        "zh": "对于长度为 $L$ 的单摆,在小角度近似下运动方程为 $\\frac{d^2\\theta}{dt^2} = -\\frac{g}{L}\\theta$。其角频率为:"
      },
      "choices": [
        "$\\omega = \\sqrt{\\frac{L}{g}}$",
        "$\\omega = \\sqrt{\\frac{g}{L}}$",
        "$\\omega = \\sqrt{gL}$",
        "$\\omega = \\frac{g}{L}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The equation has the SHM form $\\ddot\\theta=-\\omega^2\\theta$ with $\\omega^2=g/L$, so $\\omega=\\sqrt{g/L}$. Writing $\\sqrt{L/g}$ inverts the ratio (that combination is proportional to the period instead).",
        "zh": "方程具有简谐形式 $\\ddot\\theta=-\\omega^2\\theta$,其中 $\\omega^2=g/L$,所以 $\\omega=\\sqrt{g/L}$。写成 $\\sqrt{L/g}$ 把比值倒置了(那个组合与周期成正比)。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The small-angle approximation used to linearize the pendulum equation replaces $\\sin\\theta$ with:",
        "zh": "用于线性化单摆方程的小角度近似将 $\\sin\\theta$ 替换为:"
      },
      "choices": [
        "$\\theta^2$",
        "$\\cos\\theta$",
        "$\\theta$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For small $\\theta$ the Taylor series gives $\\sin\\theta\\approx\\theta$, which makes the restoring torque proportional to $\\theta$ and yields SHM. Replacing it with $1$ ignores that the restoring effect must vanish at $\\theta=0$.",
        "zh": "对于小 $\\theta$,泰勒级数给出 $\\sin\\theta\\approx\\theta$,使回复力矩正比于 $\\theta$,从而产生简谐运动。用 $1$ 替换忽略了回复作用在 $\\theta=0$ 时必须为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In SHM with $x(t)=A\\cos(\\omega t)$, at what position is the speed maximum?",
        "zh": "在简谐运动 $x(t)=A\\cos(\\omega t)$ 中,速率在什么位置最大?"
      },
      "choices": [
        "At $x = A$",
        "At $x = A/2$",
        "At $x = -A$",
        "At $x = 0$ (equilibrium)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Speed $|v|=A\\omega|\\sin(\\omega t)|$ is largest when $|\\sin|=1$, which coincides with $x=0$. Assuming maximum speed at the extreme $x=A$ confuses maximum displacement with maximum velocity — at the turning points the speed is actually zero.",
        "zh": "速率 $|v|=A\\omega|\\sin(\\omega t)|$ 在 $|\\sin|=1$ 时最大,这对应 $x=0$。以为最大速率在端点 $x=A$ 混淆了最大位移与最大速度——在折返点速率其实为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The total mechanical energy of a spring oscillator with amplitude $A$ is:",
        "zh": "振幅为 $A$ 的弹簧振子的总机械能是:"
      },
      "choices": [
        "$E = \\frac{1}{2}kA^2$",
        "$E = \\frac{1}{2}kA$",
        "$E = kA^2$",
        "$E = \\frac{1}{2}mA^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "At maximum displacement all energy is potential: $E=\\frac{1}{2}kA^2$. Using $\\frac{1}{2}kA$ forgets to square the amplitude, which the spring PE expression requires.",
        "zh": "在最大位移处能量全部是势能:$E=\\frac{1}{2}kA^2$。用 $\\frac{1}{2}kA$ 忘记对振幅平方,而弹簧势能表达式要求平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about acceleration in SHM described by $\\ddot{x}=-\\omega^2 x$ is correct?",
        "zh": "关于由 $\\ddot{x}=-\\omega^2 x$ 描述的简谐运动中的加速度,下列哪项正确?"
      },
      "choices": [
        "Acceleration is constant in magnitude throughout the motion",
        "Acceleration is proportional to displacement and directed toward equilibrium",
        "Acceleration is zero at the turning points",
        "Acceleration is maximum at equilibrium"
      ],
      "answer": 1,
      "explanation": {
        "en": "The defining relation $\\ddot{x}=-\\omega^2 x$ says acceleration is proportional to displacement and opposite in sign, i.e. toward equilibrium. Thinking the acceleration is constant describes uniform acceleration, not the position-dependent restoring acceleration of SHM.",
        "zh": "定义关系 $\\ddot{x}=-\\omega^2 x$ 表明加速度正比于位移且符号相反,即指向平衡位置。以为加速度恒定描述的是匀加速运动,而非简谐运动中随位置变化的回复加速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A block on a spring has $x(t)=A\\cos(\\omega t)$. What is the maximum acceleration magnitude?",
        "zh": "弹簧上的滑块满足 $x(t)=A\\cos(\\omega t)$。最大加速度的大小是多少?"
      },
      "choices": [
        "$A\\omega$",
        "$\\omega^2$",
        "$A\\omega^2$",
        "$A^2\\omega$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Differentiating twice gives $a=-A\\omega^2\\cos(\\omega t)$, whose maximum magnitude is $A\\omega^2$. Using $A\\omega$ is the maximum speed, which comes from only one derivative, not two.",
        "zh": "求两次导数得 $a=-A\\omega^2\\cos(\\omega t)$,其最大值为 $A\\omega^2$。用 $A\\omega$ 是最大速率,那来自一次求导而非两次。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The frequency $f$ of an oscillator relates to its angular frequency $\\omega$ by:",
        "zh": "振子的频率 $f$ 与角频率 $\\omega$ 的关系是:"
      },
      "choices": [
        "$f = 2\\pi\\omega$",
        "$f = \\omega$",
        "$f = \\frac{2\\pi}{\\omega}$",
        "$f = \\frac{\\omega}{2\\pi}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $\\omega=2\\pi f$, solving gives $f=\\omega/(2\\pi)$. Writing $2\\pi/\\omega$ instead yields the period, confusing $T$ with $f$.",
        "zh": "因为 $\\omega=2\\pi f$,解得 $f=\\omega/(2\\pi)$。写成 $2\\pi/\\omega$ 得到的是周期,把 $T$ 和 $f$ 混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 0.50 kg mass on a spring with $k = 200$ N/m undergoes SHM. Compute the angular frequency $\\omega$ in rad/s.",
        "zh": "0.50 kg 的质量在 $k = 200$ N/m 的弹簧上做简谐运动。计算角频率 $\\omega$(单位 rad/s)。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20 rad/s",
        "20.0 rad/s",
        "20rad/s"
      ],
      "explanation": {
        "en": "$\\omega=\\sqrt{k/m}=\\sqrt{200/0.50}=\\sqrt{400}=20$ rad/s. A common slip is to use $\\sqrt{m/k}$, which inverts the ratio and gives 0.05.",
        "zh": "$\\omega=\\sqrt{k/m}=\\sqrt{200/0.50}=\\sqrt{400}=20$ rad/s。常见错误是用 $\\sqrt{m/k}$,倒置比值得到 0.05。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A mass-spring oscillator has $\\omega = 4\\pi$ rad/s. Find its period $T$ in seconds.",
        "zh": "弹簧振子的角频率 $\\omega = 4\\pi$ rad/s。求其周期 $T$(单位 s)。"
      },
      "answer": "0.5",
      "accept": [
        "0.50",
        "1/2",
        ".5",
        "0.5 s",
        "0.5s",
        "0.500"
      ],
      "explanation": {
        "en": "$T=2\\pi/\\omega=2\\pi/(4\\pi)=0.5$ s. Multiplying $2\\pi$ by $\\omega$ instead of dividing gives a wrong large value and confuses the definition of period.",
        "zh": "$T=2\\pi/\\omega=2\\pi/(4\\pi)=0.5$ s。若把 $2\\pi$ 乘以 $\\omega$ 而非相除,会得到错误的大数值,混淆了周期的定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A pendulum has length $L = 2.45$ m. Using $g = 9.8$ m/s^2, compute its period $T$ in seconds (use $\\pi \\approx 3.14$, round to two decimals).",
        "zh": "单摆长度 $L = 2.45$ m。取 $g = 9.8$ m/s^2,计算其周期 $T$(单位 s,取 $\\pi \\approx 3.14$,保留两位小数)。"
      },
      "answer": "3.14",
      "accept": [
        "3.14 s",
        "3.14s",
        "3.1",
        "3.13",
        "3.142"
      ],
      "explanation": {
        "en": "$T=2\\pi\\sqrt{L/g}=2\\pi\\sqrt{2.45/9.8}=2\\pi\\sqrt{0.25}=2\\pi(0.5)\\approx3.14$ s. Putting $g/L$ under the root inverts the ratio and gives a wrong small value.",
        "zh": "$T=2\\pi\\sqrt{L/g}=2\\pi\\sqrt{2.45/9.8}=2\\pi\\sqrt{0.25}=2\\pi(0.5)\\approx3.14$ s。把 $g/L$ 放在根号下会倒置比值,得到错误的小数值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spring with $k = 50$ N/m oscillates with amplitude $A = 0.20$ m. Compute the total mechanical energy in joules.",
        "zh": "劲度系数 $k = 50$ N/m 的弹簧以振幅 $A = 0.20$ m 振动。计算总机械能(单位 J)。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1 J",
        "1.0 J",
        "1J",
        "1.00"
      ],
      "explanation": {
        "en": "$E=\\frac{1}{2}kA^2=\\frac{1}{2}(50)(0.20)^2=\\frac{1}{2}(50)(0.04)=1$ J. Forgetting to square the amplitude gives $\\frac{1}{2}(50)(0.20)=5$ J, which is wrong.",
        "zh": "$E=\\frac{1}{2}kA^2=\\frac{1}{2}(50)(0.20)^2=\\frac{1}{2}(50)(0.04)=1$ J。忘记对振幅平方会得到 $\\frac{1}{2}(50)(0.20)=5$ J,是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In SHM, $x(t)=0.10\\cos(5t)$ (SI units). Find the maximum speed in m/s.",
        "zh": "在简谐运动中,$x(t)=0.10\\cos(5t)$(国际单位制)。求最大速率(单位 m/s)。"
      },
      "answer": "0.5",
      "accept": [
        "0.50",
        "1/2",
        ".5",
        "0.5 m/s",
        "0.5m/s",
        "0.500"
      ],
      "explanation": {
        "en": "Maximum speed is $A\\omega=0.10\\times5=0.5$ m/s. Using $A\\omega^2=2.5$ instead gives the maximum acceleration, which comes from two derivatives, not one.",
        "zh": "最大速率是 $A\\omega=0.10\\times5=0.5$ m/s。若用 $A\\omega^2=2.5$ 得到的是最大加速度,那来自两次求导而非一次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the same motion $x(t)=0.10\\cos(5t)$, find the maximum acceleration magnitude in m/s^2.",
        "zh": "对于同一运动 $x(t)=0.10\\cos(5t)$,求最大加速度的大小(单位 m/s^2)。"
      },
      "answer": "2.5",
      "accept": [
        "2.50",
        "2.5 m/s^2",
        "5/2",
        "2.5m/s^2",
        "2.500"
      ],
      "explanation": {
        "en": "Maximum acceleration is $A\\omega^2=0.10\\times5^2=0.10\\times25=2.5$ m/s^2. Using only one factor of $\\omega$ gives the maximum speed 0.5, not the acceleration.",
        "zh": "最大加速度是 $A\\omega^2=0.10\\times5^2=0.10\\times25=2.5$ m/s^2。只用一次 $\\omega$ 因子得到的是最大速率 0.5,而非加速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A mass on a spring is released from rest at $x = 0.30$ m and oscillates with $\\omega = 10$ rad/s. What is its speed (m/s) as it passes through equilibrium?",
        "zh": "弹簧上的质量从 $x = 0.30$ m 处静止释放,以 $\\omega = 10$ rad/s 振动。它经过平衡位置时的速率(m/s)是多少?"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 m/s",
        "3.0 m/s",
        "3m/s",
        "3.00"
      ],
      "explanation": {
        "en": "Released from rest at $x=0.30$ m means the amplitude is $A=0.30$ m, so $v_{max}=A\\omega=0.30\\times10=3$ m/s at equilibrium. Multiplying by $\\omega^2$ would wrongly produce the acceleration units instead of a speed.",
        "zh": "从 $x=0.30$ m 处静止释放意味着振幅 $A=0.30$ m,所以在平衡位置 $v_{max}=A\\omega=0.30\\times10=3$ m/s。若乘以 $\\omega^2$ 会错误地得到加速度单位而非速率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The quantity $\\sqrt{k/m}$ that appears when solving $\\ddot{x}=-(k/m)x$ physically represents the ____ ____ of the oscillator (two words).",
        "zh": "在求解 $\\ddot{x}=-(k/m)x$ 时出现的量 $\\sqrt{k/m}$ 在物理上代表振子的____(填术语)。"
      },
      "answer": "angular frequency",
      "accept": [
        "Angular frequency",
        "angular frequency",
        "角频率",
        "omega",
        "\\omega"
      ],
      "explanation": {
        "en": "Substituting the cosine solution forces the coefficient $\\sqrt{k/m}$ to equal $\\omega$, the angular frequency (rad/s). Calling it the frequency $f$ omits the factor of $2\\pi$ that relates $\\omega$ and $f$.",
        "zh": "代入余弦解会迫使系数 $\\sqrt{k/m}$ 等于 $\\omega$,即角频率(rad/s)。称其为频率 $f$ 忽略了联系 $\\omega$ 与 $f$ 的 $2\\pi$ 因子。"
      }
    }
  ],
  "charges-fields-gauss/coulomb-electric-fields": [
    {
      "type": "mc",
      "question": {
        "en": "Two point charges $q_1 = +2\\,\\mu C$ and $q_2 = +3\\,\\mu C$ are separated by $0.50\\,\\text{m}$. What is the magnitude of the Coulomb force between them? (Use $k = 8.99\\times10^9$.)",
        "zh": "两个点电荷 $q_1 = +2\\,\\mu C$ 和 $q_2 = +3\\,\\mu C$ 相距 $0.50\\,\\text{m}$。它们之间库仑力的大小是多少？（取 $k = 8.99\\times10^9$。）"
      },
      "choices": [
        "$0.22\\,\\text{N}$",
        "$0.11\\,\\text{N}$",
        "$0.43\\,\\text{N}$",
        "$1.08\\,\\text{N}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Coulomb's law: $F = k q_1 q_2 / r^2 = (8.99\\times10^9)(2\\times10^{-6})(3\\times10^{-6})/(0.50)^2 = 0.22\\,\\text{N}$. A common error is dividing by $r$ instead of $r^2$, which wrongly doubles the answer.",
        "zh": "库仑定律：$F = k q_1 q_2 / r^2 = (8.99\\times10^9)(2\\times10^{-6})(3\\times10^{-6})/(0.50)^2 = 0.22\\,\\text{N}$。常见错误是除以 $r$ 而不是 $r^2$，会错误地使答案翻倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the distance between two fixed point charges is doubled, the Coulomb force between them becomes",
        "zh": "如果两个固定点电荷之间的距离加倍，它们之间的库仑力变为"
      },
      "choices": [
        "twice as large / 两倍",
        "one-quarter as large / 四分之一",
        "half as large / 一半",
        "unchanged / 不变"
      ],
      "answer": 1,
      "explanation": {
        "en": "Force follows an inverse-square law, $F \\propto 1/r^2$, so doubling $r$ gives $F \\to F/4$. Treating the force as $\\propto 1/r$ would wrongly give one-half.",
        "zh": "力遵循平方反比定律，$F \\propto 1/r^2$，所以 $r$ 加倍则 $F \\to F/4$。把力当作 $\\propto 1/r$ 会错误地得到一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the direction of the electric field at a point in space near an isolated positive point charge?",
        "zh": "在一个孤立正点电荷附近某点，电场的方向是怎样的？"
      },
      "choices": [
        "Radially inward toward the charge / 沿径向指向电荷",
        "Tangent to a circle around the charge / 沿圆周切向",
        "Radially outward from the charge / 沿径向背离电荷",
        "Zero everywhere / 处处为零"
      ],
      "answer": 2,
      "explanation": {
        "en": "By definition $\\vec{E}$ points in the direction of the force on a positive test charge; a positive source repels it, so the field points radially outward. Radially inward is the field of a negative charge.",
        "zh": "根据定义 $\\vec{E}$ 指向正试探电荷所受力的方向；正源电荷排斥它，所以场沿径向向外。沿径向向内是负电荷的场。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The magnitude of the electric field a distance $r$ from a point charge $q$ is given by",
        "zh": "距点电荷 $q$ 为 $r$ 处的电场大小由下式给出"
      },
      "choices": [
        "$E = kq/r$",
        "$E = kq^2/r^2$",
        "$E = kqr^2$",
        "$E = kq/r^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$E = kq/r^2$; the field of a point charge falls off as the inverse square of distance. Writing $kq/r$ confuses the field with the potential $V = kq/r$.",
        "zh": "$E = kq/r^2$；点电荷的场随距离平方反比衰减。写成 $kq/r$ 是把场与电势 $V = kq/r$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A charge $q = +4\\,\\mu C$ is placed in a uniform electric field of magnitude $500\\,\\text{N/C}$. What force does it experience?",
        "zh": "电荷 $q = +4\\,\\mu C$ 置于大小为 $500\\,\\text{N/C}$ 的匀强电场中。它受到多大的力？"
      },
      "choices": [
        "$2.0\\times10^{-3}\\,\\text{N}$",
        "$1.25\\times10^{-8}\\,\\text{N}$",
        "$8.0\\times10^{-3}\\,\\text{N}$",
        "$500\\,\\text{N}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$F = qE = (4\\times10^{-6})(500) = 2.0\\times10^{-3}\\,\\text{N}$. Dividing $q$ by $E$ instead of multiplying gives the tiny wrong value.",
        "zh": "$F = qE = (4\\times10^{-6})(500) = 2.0\\times10^{-3}\\,\\text{N}$。用 $q$ 除以 $E$ 而不是相乘会得到那个很小的错误值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On the axis of a uniformly charged ring of radius $R$ carrying total charge $Q$, the electric field at the center of the ring is",
        "zh": "在半径为 $R$、总电荷为 $Q$ 的均匀带电圆环轴线上，环心处的电场为"
      },
      "choices": [
        "$kQ/R^2$",
        "zero / 零",
        "$2kQ/R^2$",
        "infinite / 无穷大"
      ],
      "answer": 1,
      "explanation": {
        "en": "By symmetry, contributions from opposite elements of the ring cancel at the center, so $\\vec{E} = 0$ there. The field is nonzero off-center, but exactly zero at the geometric center.",
        "zh": "由对称性，环上相对元素在环心处的贡献相互抵消，所以那里 $\\vec{E} = 0$。偏离中心处场不为零，但在几何中心恰好为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The on-axis field of a uniformly charged ring (charge $Q$, radius $R$) at distance $z$ from its center is $E = kQz/(z^2+R^2)^{3/2}$. Very far away ($z \\gg R$), this field behaves like",
        "zh": "均匀带电圆环（电荷 $Q$，半径 $R$）轴线上距中心 $z$ 处的场为 $E = kQz/(z^2+R^2)^{3/2}$。当很远时（$z \\gg R$），该场表现为"
      },
      "choices": [
        "$kQ/z^3$",
        "constant / 常数",
        "$kQ/z^2$",
        "$kQz$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For $z \\gg R$, $(z^2+R^2)^{3/2} \\to z^3$, so $E \\to kQz/z^3 = kQ/z^2$: the ring looks like a point charge. Keeping the $R^2$ term would wrongly suggest a $1/z^3$ falloff.",
        "zh": "当 $z \\gg R$ 时，$(z^2+R^2)^{3/2} \\to z^3$，所以 $E \\to kQz/z^3 = kQ/z^2$：圆环看起来像点电荷。保留 $R^2$ 项会错误地暗示 $1/z^3$ 衰减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a long, straight, uniformly charged line with linear charge density $\\lambda$, integrating Coulomb's law gives the field a distance $r$ away as",
        "zh": "对于线电荷密度为 $\\lambda$ 的无限长均匀带电直线，对库仑定律积分得到距其 $r$ 处的场为"
      },
      "choices": [
        "$E = 2k\\lambda/r^2$",
        "$E = k\\lambda/r^2$",
        "$E = k\\lambda/r^3$",
        "$E = 2k\\lambda/r$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Integrating along the line yields $E = 2k\\lambda/r = \\lambda/(2\\pi\\epsilon_0 r)$, an inverse-first-power dependence. Using $1/r^2$ mistakenly applies the point-charge result to an extended line.",
        "zh": "沿直线积分得到 $E = 2k\\lambda/r = \\lambda/(2\\pi\\epsilon_0 r)$，是一次反比依赖。用 $1/r^2$ 是错误地把点电荷结果套用于延展的直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The SI units of electric field strength can be written as",
        "zh": "电场强度的国际单位可写作"
      },
      "choices": [
        "$\\text{N/C}$ or $\\text{V/m}$",
        "$\\text{N}\\cdot\\text{m}^2/\\text{C}$",
        "$\\text{C/N}$",
        "$\\text{J/C}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $\\vec{E} = \\vec{F}/q$, the units are newtons per coulomb, equivalently volts per meter. $\\text{J/C}$ is the volt (a potential), and $\\text{N}\\cdot\\text{m}^2/\\text{C}$ is a flux unit.",
        "zh": "由于 $\\vec{E} = \\vec{F}/q$，单位是牛每库仑，等价于伏每米。$\\text{J/C}$ 是伏特（电势），$\\text{N}\\cdot\\text{m}^2/\\text{C}$ 是通量单位。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two equal positive charges $+q$ sit a distance $d$ apart. At the midpoint between them, the net electric field is",
        "zh": "两个相等的正电荷 $+q$ 相距 $d$。在它们连线的中点处，合电场为"
      },
      "choices": [
        "$8kq/d^2$ toward one charge",
        "zero / 零",
        "$4kq/d^2$ toward one charge",
        "$2kq/d^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "At the midpoint each charge produces a field of equal magnitude pointing toward the other charge; the two fields are opposite and cancel, giving zero. Forgetting that the fields oppose leads to adding them instead.",
        "zh": "在中点处每个电荷产生大小相等、指向对方的场；两场方向相反并相互抵消，合为零。忘记两场方向相反就会错误地把它们相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An electric dipole consists of $+q$ and $-q$ separated by a small distance. Far from the dipole, the field magnitude falls off as",
        "zh": "一个电偶极子由相距很小的 $+q$ 和 $-q$ 组成。远离偶极子处，场的大小衰减为"
      },
      "choices": [
        "$1/r$",
        "$1/r^2$",
        "$1/r^3$",
        "$1/r^4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The nearly-canceling $+q$ and $-q$ fields leave a net field that falls off as $1/r^3$, faster than a single point charge. Expecting $1/r^2$ ignores the partial cancellation between the two opposite charges.",
        "zh": "几乎抵消的 $+q$ 与 $-q$ 场留下的合场以 $1/r^3$ 衰减，比单个点电荷更快。以为是 $1/r^2$ 忽略了两个异号电荷之间的部分抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A test charge is used to map an electric field. Doubling the size of the (small) positive test charge, the measured field $\\vec{E} = \\vec{F}/q$ at a point",
        "zh": "用试探电荷来测绘电场。把（很小的）正试探电荷加倍，某点测得的场 $\\vec{E} = \\vec{F}/q$ 将"
      },
      "choices": [
        "doubles / 加倍",
        "halves / 减半",
        "becomes zero / 变为零",
        "stays the same / 不变"
      ],
      "answer": 3,
      "explanation": {
        "en": "The force on the test charge doubles, but $E = F/q$ divides that out, so the field value is unchanged — it is a property of the source, not the test charge. Thinking $E$ scales with $q$ confuses field with force.",
        "zh": "试探电荷受力加倍，但 $E = F/q$ 把它约掉，所以场值不变——它是源电荷的性质，与试探电荷无关。以为 $E$ 随 $q$ 变化是把场与力混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two charges of $+1.0\\,\\mu C$ each are held $1.0\\,\\text{m}$ apart. Find the magnitude of the Coulomb force between them, in newtons. (Use $k = 8.99\\times10^9$.)",
        "zh": "两个各为 $+1.0\\,\\mu C$ 的电荷相距 $1.0\\,\\text{m}$。求它们之间库仑力的大小（单位牛顿）。（取 $k = 8.99\\times10^9$。）"
      },
      "answer": "8.99e-3",
      "accept": [
        "8.99e-3",
        "0.00899",
        "0.009",
        "8.99e-3 N",
        "0.00899 N",
        "9.0e-3",
        "0.0090"
      ],
      "explanation": {
        "en": "$F = kq_1q_2/r^2 = (8.99\\times10^9)(1\\times10^{-6})^2/(1.0)^2 = 8.99\\times10^{-3}\\,\\text{N}$. Forgetting to square each microcoulomb ($10^{-6}$) is the most common slip.",
        "zh": "$F = kq_1q_2/r^2 = (8.99\\times10^9)(1\\times10^{-6})^2/(1.0)^2 = 8.99\\times10^{-3}\\,\\text{N}$。忘记把每个微库仑（$10^{-6}$）代入平方是最常见的失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the magnitude of the electric field $0.10\\,\\text{m}$ from a point charge $q = 5.0\\,\\text{nC}$, in N/C. (Use $k = 8.99\\times10^9$.)",
        "zh": "求距点电荷 $q = 5.0\\,\\text{nC}$ 为 $0.10\\,\\text{m}$ 处电场的大小（单位 N/C）。（取 $k = 8.99\\times10^9$。）"
      },
      "answer": "4500",
      "accept": [
        "4500",
        "4495",
        "4.5e3",
        "4.495e3",
        "4500 N/C",
        "4.5e3 N/C",
        "4490"
      ],
      "explanation": {
        "en": "$E = kq/r^2 = (8.99\\times10^9)(5.0\\times10^{-9})/(0.10)^2 = 4.5\\times10^3\\,\\text{N/C}$. Using $r$ instead of $r^2$ would give ten times too much.",
        "zh": "$E = kq/r^2 = (8.99\\times10^9)(5.0\\times10^{-9})/(0.10)^2 = 4.5\\times10^3\\,\\text{N/C}$。用 $r$ 而不是 $r^2$ 会得到十倍偏大的结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A charge $q = 2.0\\,\\mu C$ sits in a uniform field $E = 500\\,\\text{N/C}$. What is the magnitude of the force on it, in newtons?",
        "zh": "电荷 $q = 2.0\\,\\mu C$ 置于匀强电场 $E = 500\\,\\text{N/C}$ 中。它所受力的大小是多少（单位牛顿）？"
      },
      "answer": "1.0e-3",
      "accept": [
        "1.0e-3",
        "0.001",
        "1e-3",
        "0.0010",
        "1.0e-3 N",
        "0.001 N",
        "1.0×10^-3"
      ],
      "explanation": {
        "en": "$F = qE = (2.0\\times10^{-6})(500) = 1.0\\times10^{-3}\\,\\text{N}$. Leaving the charge in microcoulombs without converting to $10^{-6}\\,\\text{C}$ inflates the answer by a million.",
        "zh": "$F = qE = (2.0\\times10^{-6})(500) = 1.0\\times10^{-3}\\,\\text{N}$。把电荷保留为微库仑而不换算为 $10^{-6}\\,\\text{C}$ 会使答案放大一百万倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ring of radius $R = 0.10\\,\\text{m}$ carries total charge $Q = 1.0\\,\\mu C$. Using $E = kQz/(z^2+R^2)^{3/2}$, find the on-axis field at $z = 0.20\\,\\text{m}$, in N/C. (Round to 2 sig figs.)",
        "zh": "半径 $R = 0.10\\,\\text{m}$ 的圆环带总电荷 $Q = 1.0\\,\\mu C$。用 $E = kQz/(z^2+R^2)^{3/2}$，求轴线上 $z = 0.20\\,\\text{m}$ 处的场（单位 N/C，保留两位有效数字）。"
      },
      "answer": "1.6e5",
      "accept": [
        "1.6e5",
        "160000",
        "161000",
        "1.6e5 N/C",
        "1.61e5",
        "1.6×10^5",
        "160823"
      ],
      "explanation": {
        "en": "$z^2+R^2 = 0.04+0.01 = 0.05$, and $(0.05)^{3/2} = 0.01118$. So $E = (8.99\\times10^9)(1.0\\times10^{-6})(0.20)/0.01118 = 1.6\\times10^5\\,\\text{N/C}$. Forgetting the $3/2$ power (using just $z^2+R^2$) is a frequent error.",
        "zh": "$z^2+R^2 = 0.04+0.01 = 0.05$，且 $(0.05)^{3/2} = 0.01118$。所以 $E = (8.99\\times10^9)(1.0\\times10^{-6})(0.20)/0.01118 = 1.6\\times10^5\\,\\text{N/C}$。忘记 $3/2$ 次幂（只用 $z^2+R^2$）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A charge $+q$ and a charge $+4q$ are placed $3.0\\,\\text{m}$ apart. At what distance (in meters) from the smaller charge, along the line joining them, is the net electric field zero?",
        "zh": "电荷 $+q$ 与电荷 $+4q$ 相距 $3.0\\,\\text{m}$。在它们连线上，距较小电荷多远（单位米）处合电场为零？"
      },
      "answer": "1.0",
      "accept": [
        "1.0",
        "1",
        "1.0 m",
        "1 m",
        "1.00"
      ],
      "explanation": {
        "en": "Setting $kq/x^2 = k(4q)/(3-x)^2$ gives $(3-x) = 2x$, so $x = 1.0\\,\\text{m}$ from the smaller charge. The zero point lies closer to the smaller charge; placing it nearer the larger charge reverses the logic.",
        "zh": "令 $kq/x^2 = k(4q)/(3-x)^2$ 得 $(3-x) = 2x$，故距较小电荷 $x = 1.0\\,\\text{m}$。零点更靠近较小电荷；把它放到更靠近较大电荷处就搞反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A very long straight wire has linear charge density $\\lambda = 4.0\\,\\text{nC/m}$. Find the electric field magnitude $0.050\\,\\text{m}$ from the wire, in N/C, using $E = 2k\\lambda/r$. (Round to 2 sig figs.)",
        "zh": "一根很长的直导线线电荷密度 $\\lambda = 4.0\\,\\text{nC/m}$。用 $E = 2k\\lambda/r$，求距导线 $0.050\\,\\text{m}$ 处电场的大小（单位 N/C，保留两位有效数字）。"
      },
      "answer": "1440",
      "accept": [
        "1440",
        "1.4e3",
        "1438",
        "1440 N/C",
        "1.44e3",
        "1400",
        "1.44×10^3"
      ],
      "explanation": {
        "en": "$E = 2k\\lambda/r = 2(8.99\\times10^9)(4.0\\times10^{-9})/0.050 = 1.4\\times10^3\\,\\text{N/C}$. Using the point-charge $1/r^2$ form here is wrong because the source is an extended line.",
        "zh": "$E = 2k\\lambda/r = 2(8.99\\times10^9)(4.0\\times10^{-9})/0.050 = 1.4\\times10^3\\,\\text{N/C}$。在此用点电荷的 $1/r^2$ 形式是错的，因为源是延展的直线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By what factor does the Coulomb force change if BOTH the distance is tripled AND each charge is doubled? Give the numerical factor.",
        "zh": "如果同时把距离变为三倍且每个电荷加倍，库仑力变为原来的几倍？给出数值倍数。"
      },
      "answer": "4/9",
      "accept": [
        "4/9",
        "0.44",
        "0.444",
        "0.4444",
        "0.44 times",
        "4/9 times",
        "0.4"
      ],
      "explanation": {
        "en": "$F \\propto q_1 q_2 / r^2$. Doubling each charge multiplies by $2\\times2 = 4$; tripling $r$ divides by $3^2 = 9$. Net factor $= 4/9 \\approx 0.44$. Forgetting to square the distance factor gives $4/3$ instead.",
        "zh": "$F \\propto q_1 q_2 / r^2$。每个电荷加倍乘以 $2\\times2 = 4$；距离变三倍除以 $3^2 = 9$。净倍数 $= 4/9 \\approx 0.44$。忘记把距离因子平方会错误地得到 $4/3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point charge produces a field of $2000\\,\\text{N/C}$ at a distance of $0.30\\,\\text{m}$. What is the field magnitude, in N/C, at $0.60\\,\\text{m}$ from the same charge?",
        "zh": "一个点电荷在距离 $0.30\\,\\text{m}$ 处产生 $2000\\,\\text{N/C}$ 的场。在距同一电荷 $0.60\\,\\text{m}$ 处，场的大小是多少（单位 N/C）？"
      },
      "answer": "500",
      "accept": [
        "500",
        "500 N/C",
        "5.0e2",
        "5e2",
        "500.0"
      ],
      "explanation": {
        "en": "Doubling $r$ divides $E$ by $2^2 = 4$: $2000/4 = 500\\,\\text{N/C}$. Just halving the field (treating $E \\propto 1/r$) would give $1000$, ignoring the inverse-square law.",
        "zh": "$r$ 加倍使 $E$ 除以 $2^2 = 4$：$2000/4 = 500\\,\\text{N/C}$。仅把场减半（当作 $E \\propto 1/r$）会得到 $1000$，忽略了平方反比定律。"
      }
    }
  ],
  "charges-fields-gauss/gauss-law": [
    {
      "type": "mc",
      "question": {
        "en": "Gauss's law states that the net electric flux through a closed surface equals",
        "zh": "高斯定律指出，穿过一个闭合曲面的净电通量等于"
      },
      "choices": [
        "$Q_{enc}/\\epsilon_0$",
        "$Q_{enc}\\,\\epsilon_0$",
        "$\\epsilon_0/Q_{enc}$",
        "$Q_{enc}/(4\\pi\\epsilon_0)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Gauss's law: $\\oint \\vec{E}\\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$. The enclosed charge is divided by $\\epsilon_0$, not multiplied. Only the charge inside the surface contributes.",
        "zh": "高斯定律：$\\oint \\vec{E}\\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$。所包围的电荷是除以 $\\epsilon_0$，不是相乘。只有曲面内部的电荷有贡献。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A closed Gaussian surface encloses no net charge, but there are strong external charges nearby. The net electric flux through the surface is",
        "zh": "一个闭合高斯面内没有净电荷，但附近有很强的外部电荷。穿过该曲面的净电通量为"
      },
      "choices": [
        "large and positive / 很大且为正",
        "zero / 零",
        "large and negative / 很大且为负",
        "impossible to determine / 无法确定"
      ],
      "answer": 1,
      "explanation": {
        "en": "Net flux depends only on enclosed charge: $Q_{enc} = 0 \\Rightarrow \\Phi = 0$. External charges make field lines enter and exit, but their net flux cancels. The local field is nonzero, yet the net flux is exactly zero.",
        "zh": "净通量只取决于所包围的电荷：$Q_{enc} = 0 \\Rightarrow \\Phi = 0$。外部电荷使电场线进入又穿出，其净通量相互抵消。局部场不为零，但净通量恰好为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using a cylindrical Gaussian surface, the field of an infinite line charge with linear density $\\lambda$ at distance $r$ is",
        "zh": "利用圆柱形高斯面，线密度为 $\\lambda$ 的无限长线电荷在距离 $r$ 处的场为"
      },
      "choices": [
        "$\\lambda/(\\epsilon_0)$",
        "$\\lambda/(4\\pi\\epsilon_0 r^2)$",
        "$\\lambda/(2\\pi\\epsilon_0 r)$",
        "$\\sigma/(2\\epsilon_0)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The Gaussian cylinder has side area $2\\pi r L$, giving $E(2\\pi r L) = \\lambda L/\\epsilon_0$, so $E = \\lambda/(2\\pi\\epsilon_0 r)$. Using $r^2$ mistakenly applies the point-charge (spherical) result to a line.",
        "zh": "高斯圆柱侧面积为 $2\\pi r L$，得 $E(2\\pi r L) = \\lambda L/\\epsilon_0$，所以 $E = \\lambda/(2\\pi\\epsilon_0 r)$。用 $r^2$ 是错误地把点电荷（球对称）结果套用于线电荷。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The electric field just outside an infinite non-conducting sheet with uniform surface charge density $\\sigma$ is",
        "zh": "在具有均匀面电荷密度 $\\sigma$ 的无限大非导体薄片外侧附近，电场为"
      },
      "choices": [
        "$\\sigma/\\epsilon_0$",
        "$2\\sigma/\\epsilon_0$",
        "$\\sigma\\epsilon_0$",
        "$\\sigma/(2\\epsilon_0)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A pillbox with two faces of area $A$ gives $E(2A) = \\sigma A/\\epsilon_0$, so $E = \\sigma/(2\\epsilon_0)$, independent of distance. The $\\sigma/\\epsilon_0$ result (no factor of 2) applies to a conductor surface, not an isolated sheet.",
        "zh": "一个有两个面积为 $A$ 端面的药盒给出 $E(2A) = \\sigma A/\\epsilon_0$，所以 $E = \\sigma/(2\\epsilon_0)$，与距离无关。$\\sigma/\\epsilon_0$（无因子 2）适用于导体表面，而非孤立薄片。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Inside a solid insulating sphere of radius $R$ with uniform charge, the electric field at radius $r < R$ is proportional to",
        "zh": "在半径为 $R$、电荷均匀分布的实心绝缘球内部，半径 $r < R$ 处的电场正比于"
      },
      "choices": [
        "$r$",
        "$1/r$",
        "$1/r^2$",
        "constant / 常数"
      ],
      "answer": 0,
      "explanation": {
        "en": "Only charge within radius $r$ is enclosed, $Q_{enc} \\propto r^3$, and dividing by the surface area $\\propto r^2$ leaves $E \\propto r$: the field grows linearly from the center. Expecting $1/r^2$ ignores that the enclosed charge shrinks toward the center.",
        "zh": "只有半径 $r$ 以内的电荷被包围，$Q_{enc} \\propto r^3$，除以表面积 $\\propto r^2$ 后得 $E \\propto r$：场从中心开始线性增长。以为是 $1/r^2$ 忽略了越靠近中心所包围电荷越少。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Outside a uniformly charged sphere (total charge $Q$, radius $R$), at distance $r > R$ from the center, the field is",
        "zh": "在均匀带电球（总电荷 $Q$，半径 $R$）外部，距中心 $r > R$ 处，场为"
      },
      "choices": [
        "$kQr/R^3$",
        "$kQ/r^2$",
        "zero / 零",
        "$kQ/R^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For $r > R$ the full charge is enclosed and the sphere acts like a point charge at its center: $E = kQ/r^2$. Using $kQ/R^2$ freezes the field at the surface value instead of letting it fall off with $r$.",
        "zh": "当 $r > R$ 时全部电荷被包围，球等效于位于中心的点电荷：$E = kQ/r^2$。用 $kQ/R^2$ 是把场固定在表面值，而没有让它随 $r$ 衰减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In electrostatic equilibrium, the electric field inside the material of a solid conductor is",
        "zh": "在静电平衡时，实心导体材料内部的电场为"
      },
      "choices": [
        "equal to $\\sigma/\\epsilon_0$",
        "$kQ/r^2$",
        "zero / 零",
        "uniform and nonzero / 均匀且非零"
      ],
      "answer": 2,
      "explanation": {
        "en": "Charges rearrange until $\\vec{E} = 0$ everywhere inside conductor material; otherwise they would keep moving. A Gaussian surface inside then encloses no net charge. The nonzero field $\\sigma/\\epsilon_0$ appears just outside the surface, not inside.",
        "zh": "电荷会重新排布直到导体材料内部处处 $\\vec{E} = 0$；否则它们会持续移动。内部的高斯面因此不包围净电荷。非零场 $\\sigma/\\epsilon_0$ 出现在表面外侧附近，而非内部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The electric field just outside the surface of a charged conductor with local surface charge density $\\sigma$ is",
        "zh": "在带电导体表面外侧附近，若局部面电荷密度为 $\\sigma$，则电场为"
      },
      "choices": [
        "$\\sigma/(2\\epsilon_0)$",
        "zero / 零",
        "$2\\sigma/\\epsilon_0$",
        "$\\sigma/\\epsilon_0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A pillbox with only its outer face in field (field is zero inside the conductor) gives $E A = \\sigma A/\\epsilon_0$, so $E = \\sigma/\\epsilon_0$. The $\\sigma/(2\\epsilon_0)$ value is for an isolated sheet where field exists on both sides.",
        "zh": "只有外端面处于场中（导体内部场为零）的药盒给出 $E A = \\sigma A/\\epsilon_0$，所以 $E = \\sigma/\\epsilon_0$。$\\sigma/(2\\epsilon_0)$ 适用于两侧都有场的孤立薄片。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Electric flux through a surface is defined by the integral",
        "zh": "穿过一个曲面的电通量由下列积分定义"
      },
      "choices": [
        "$\\Phi = \\int \\vec{E}\\cdot d\\vec{A}$",
        "$\\Phi = \\int \\vec{E}\\, dV$",
        "$\\Phi = \\int \\vec{E}\\times d\\vec{A}$",
        "$\\Phi = \\int E\\, dr$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Flux is the surface integral of the dot product $\\vec{E}\\cdot d\\vec{A}$, capturing the component of field normal to the surface. Using a cross product or a volume integral does not represent flux.",
        "zh": "通量是点积 $\\vec{E}\\cdot d\\vec{A}$ 的面积分，反映场沿曲面法向的分量。用叉积或体积分都不能表示通量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A point charge $+q$ sits inside a hollow neutral conducting shell. The charge induced on the INNER surface of the shell is",
        "zh": "一个点电荷 $+q$ 位于一个中性空心导体壳内部。壳内表面上被感应出的电荷为"
      },
      "choices": [
        "$+q$",
        "$-q$",
        "zero / 零",
        "$-2q$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A Gaussian surface within the conductor material must enclose zero net charge (field is zero there), so the inner surface must carry $-q$ to cancel the enclosed $+q$. The outer surface then carries $+q$ to keep the shell neutral.",
        "zh": "导体材料内的高斯面必须包围零净电荷（那里场为零），所以内表面必须带 $-q$ 以抵消所包围的 $+q$。为保持壳中性，外表面则带 $+q$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Gauss's law is most USEFUL for directly computing $\\vec{E}$ when the charge distribution has",
        "zh": "在电荷分布具有什么特征时，高斯定律最便于直接计算 $\\vec{E}$？"
      },
      "choices": [
        "no symmetry / 无对称性",
        "a net charge of zero / 净电荷为零",
        "high symmetry (spherical, cylindrical, or planar) / 高度对称（球、柱或平面）",
        "only negative charge / 只有负电荷"
      ],
      "answer": 2,
      "explanation": {
        "en": "Gauss's law always holds, but you can pull $E$ out of the integral only when symmetry makes $E$ constant and either parallel or perpendicular to $d\\vec{A}$ — spherical, cylindrical, or planar cases. Without symmetry the integral cannot be solved for $E$ this simply.",
        "zh": "高斯定律永远成立，但只有当对称性使 $E$ 为常数且与 $d\\vec{A}$ 平行或垂直时（球、柱、平面情形），才能把 $E$ 提出积分。没有对称性时无法如此简单地解出 $E$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The total electric flux through a closed surface surrounding a dipole ($+q$ and $-q$) is",
        "zh": "包围一个电偶极子（$+q$ 与 $-q$）的闭合曲面上的总电通量为"
      },
      "choices": [
        "$2q/\\epsilon_0$",
        "$q/\\epsilon_0$",
        "$q/(2\\epsilon_0)$",
        "zero / 零"
      ],
      "answer": 3,
      "explanation": {
        "en": "The enclosed net charge is $+q + (-q) = 0$, so by Gauss's law the total flux is zero even though field lines thread through the surface. Adding the magnitudes instead of the signed charges gives the wrong nonzero result.",
        "zh": "所包围的净电荷为 $+q + (-q) = 0$，所以由高斯定律总通量为零，尽管有电场线穿过曲面。把大小相加而不是把带符号的电荷相加会得到错误的非零结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A closed surface encloses a net charge $Q = 8.85\\,\\text{nC}$. Find the net electric flux through it, in $\\text{N}\\cdot\\text{m}^2/\\text{C}$. (Use $\\epsilon_0 = 8.85\\times10^{-12}$.)",
        "zh": "一个闭合曲面包围净电荷 $Q = 8.85\\,\\text{nC}$。求穿过它的净电通量（单位 $\\text{N}\\cdot\\text{m}^2/\\text{C}$）。（取 $\\epsilon_0 = 8.85\\times10^{-12}$。）"
      },
      "answer": "1000",
      "accept": [
        "1000",
        "1.0e3",
        "1e3",
        "1000 N·m^2/C",
        "1.0×10^3",
        "1000.0"
      ],
      "explanation": {
        "en": "$\\Phi = Q/\\epsilon_0 = (8.85\\times10^{-9})/(8.85\\times10^{-12}) = 1.0\\times10^3\\,\\text{N}\\cdot\\text{m}^2/\\text{C}$. Multiplying by $\\epsilon_0$ instead of dividing gives an absurdly tiny number.",
        "zh": "$\\Phi = Q/\\epsilon_0 = (8.85\\times10^{-9})/(8.85\\times10^{-12}) = 1.0\\times10^3\\,\\text{N}\\cdot\\text{m}^2/\\text{C}$。乘以 $\\epsilon_0$ 而不是相除会得到一个极小的荒谬数值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An infinite sheet has uniform surface charge density $\\sigma = 1.0\\,\\mu C/m^2$. Find the field magnitude just outside it, in N/C, using $E = \\sigma/(2\\epsilon_0)$. (Round to 2 sig figs.)",
        "zh": "一个无限大薄片具有均匀面电荷密度 $\\sigma = 1.0\\,\\mu C/m^2$。用 $E = \\sigma/(2\\epsilon_0)$ 求其外侧附近场的大小（单位 N/C，保留两位有效数字）。"
      },
      "answer": "5.6e4",
      "accept": [
        "5.6e4",
        "56000",
        "56497",
        "5.65e4",
        "5.6e4 N/C",
        "5.6×10^4",
        "57000"
      ],
      "explanation": {
        "en": "$E = \\sigma/(2\\epsilon_0) = (1.0\\times10^{-6})/(2\\times8.85\\times10^{-12}) = 5.6\\times10^4\\,\\text{N/C}$. Dropping the factor of 2 (the conductor formula) would double this.",
        "zh": "$E = \\sigma/(2\\epsilon_0) = (1.0\\times10^{-6})/(2\\times8.85\\times10^{-12}) = 5.6\\times10^4\\,\\text{N/C}$。漏掉因子 2（用导体公式）会使结果翻倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid insulating sphere of radius $R = 0.20\\,\\text{m}$ carries total charge $Q = 1.0\\,\\mu C$ uniformly. Find the field at $r = 0.10\\,\\text{m}$ from the center, in N/C, using $E = kQr/R^3$. (Round to 2 sig figs.)",
        "zh": "半径 $R = 0.20\\,\\text{m}$ 的实心绝缘球均匀带总电荷 $Q = 1.0\\,\\mu C$。用 $E = kQr/R^3$ 求距中心 $r = 0.10\\,\\text{m}$ 处的场（单位 N/C，保留两位有效数字）。"
      },
      "answer": "1.1e5",
      "accept": [
        "1.1e5",
        "112000",
        "112375",
        "1.12e5",
        "1.1e5 N/C",
        "1.1×10^5",
        "110000"
      ],
      "explanation": {
        "en": "$E = kQr/R^3 = (8.99\\times10^9)(1.0\\times10^{-6})(0.10)/(0.20)^3 = 1.1\\times10^5\\,\\text{N/C}$. Using $kQ/r^2$ (the outside formula) is wrong here because the point is inside the sphere.",
        "zh": "$E = kQr/R^3 = (8.99\\times10^9)(1.0\\times10^{-6})(0.10)/(0.20)^3 = 1.1\\times10^5\\,\\text{N/C}$。在此用 $kQ/r^2$（外部公式）是错的，因为该点在球内部。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point charge $Q = 6.0\\,\\text{nC}$ sits at the exact center of a cube. Find the electric flux through ONE face of the cube, in $\\text{N}\\cdot\\text{m}^2/\\text{C}$. (Use $\\epsilon_0 = 8.85\\times10^{-12}$.)",
        "zh": "一个点电荷 $Q = 6.0\\,\\text{nC}$ 位于一个立方体的正中心。求穿过立方体一个面的电通量（单位 $\\text{N}\\cdot\\text{m}^2/\\text{C}$）。（取 $\\epsilon_0 = 8.85\\times10^{-12}$。）"
      },
      "answer": "113",
      "accept": [
        "113",
        "113 N·m^2/C",
        "112.99",
        "1.1e2",
        "1.13e2",
        "110",
        "113.0"
      ],
      "explanation": {
        "en": "By symmetry each of the 6 faces gets $1/6$ of the total: $\\Phi_{face} = Q/(6\\epsilon_0) = (6.0\\times10^{-9})/(6\\times8.85\\times10^{-12}) = 113\\,\\text{N}\\cdot\\text{m}^2/\\text{C}$. Forgetting to divide the total flux among 6 faces gives six times too much.",
        "zh": "由对称性，6 个面各得总量的 $1/6$：$\\Phi_{face} = Q/(6\\epsilon_0) = (6.0\\times10^{-9})/(6\\times8.85\\times10^{-12}) = 113\\,\\text{N}\\cdot\\text{m}^2/\\text{C}$。忘记把总通量分给 6 个面会得到六倍偏大的结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An infinite line has linear charge density $\\lambda = 2.0\\,\\text{nC/m}$. Find the field at $r = 0.10\\,\\text{m}$, in N/C, using $E = 2k\\lambda/r$. (Round to 2 sig figs.)",
        "zh": "一条无限长直线的线电荷密度 $\\lambda = 2.0\\,\\text{nC/m}$。用 $E = 2k\\lambda/r$ 求 $r = 0.10\\,\\text{m}$ 处的场（单位 N/C，保留两位有效数字）。"
      },
      "answer": "360",
      "accept": [
        "360",
        "359.6",
        "3.6e2",
        "360 N/C",
        "3.6×10^2",
        "359",
        "3.60e2"
      ],
      "explanation": {
        "en": "$E = 2k\\lambda/r = 2(8.99\\times10^9)(2.0\\times10^{-9})/0.10 = 3.6\\times10^2\\,\\text{N/C}$. Using $1/r^2$ would wrongly treat the line as a point charge.",
        "zh": "$E = 2k\\lambda/r = 2(8.99\\times10^9)(2.0\\times10^{-9})/0.10 = 3.6\\times10^2\\,\\text{N/C}$。用 $1/r^2$ 会错误地把直线当作点电荷。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A closed surface encloses three charges: $+2.0\\,\\mu C$, $-5.0\\,\\mu C$, and $+1.0\\,\\mu C$. Find the net electric flux through the surface, in $\\text{N}\\cdot\\text{m}^2/\\text{C}$. (Use $\\epsilon_0 = 8.85\\times10^{-12}$; include the sign.)",
        "zh": "一个闭合曲面包围三个电荷：$+2.0\\,\\mu C$、$-5.0\\,\\mu C$ 和 $+1.0\\,\\mu C$。求穿过该曲面的净电通量（单位 $\\text{N}\\cdot\\text{m}^2/\\text{C}$；取 $\\epsilon_0 = 8.85\\times10^{-12}$；带符号）。"
      },
      "answer": "-2.3e5",
      "accept": [
        "-2.3e5",
        "-226000",
        "-225989",
        "-2.26e5",
        "-2.3e5 N·m^2/C",
        "-2.3×10^5",
        "-230000",
        "-2.26×10^5"
      ],
      "explanation": {
        "en": "Net enclosed charge $= +2 - 5 + 1 = -2.0\\,\\mu C$. So $\\Phi = Q/\\epsilon_0 = (-2.0\\times10^{-6})/(8.85\\times10^{-12}) = -2.3\\times10^5\\,\\text{N}\\cdot\\text{m}^2/\\text{C}$. Adding magnitudes without signs gives the wrong (positive, larger) charge.",
        "zh": "净包围电荷 $= +2 - 5 + 1 = -2.0\\,\\mu C$。所以 $\\Phi = Q/\\epsilon_0 = (-2.0\\times10^{-6})/(8.85\\times10^{-12}) = -2.3\\times10^5\\,\\text{N}\\cdot\\text{m}^2/\\text{C}$。不带符号地把大小相加会得到错误的（更大的正）电荷。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The surface of a charged conductor has local surface charge density $\\sigma = 2.0\\,\\mu C/m^2$. Find the field magnitude just outside the surface, in N/C, using $E = \\sigma/\\epsilon_0$. (Round to 2 sig figs.)",
        "zh": "一个带电导体表面的局部面电荷密度 $\\sigma = 2.0\\,\\mu C/m^2$。用 $E = \\sigma/\\epsilon_0$ 求表面外侧附近场的大小（单位 N/C，保留两位有效数字）。"
      },
      "answer": "2.3e5",
      "accept": [
        "2.3e5",
        "226000",
        "225989",
        "2.26e5",
        "2.3e5 N/C",
        "2.3×10^5",
        "230000",
        "2.26×10^5"
      ],
      "explanation": {
        "en": "For a conductor surface $E = \\sigma/\\epsilon_0 = (2.0\\times10^{-6})/(8.85\\times10^{-12}) = 2.3\\times10^5\\,\\text{N/C}$. Inserting a factor of 2 (the isolated-sheet formula) would halve the answer.",
        "zh": "对导体表面 $E = \\sigma/\\epsilon_0 = (2.0\\times10^{-6})/(8.85\\times10^{-12}) = 2.3\\times10^5\\,\\text{N/C}$。加入因子 2（孤立薄片公式）会使答案减半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A uniformly charged sphere has total charge $Q = 4.0\\,\\mu C$. Find the field magnitude at $r = 0.50\\,\\text{m}$ from its center (outside the sphere), in N/C. (Round to 2 sig figs.)",
        "zh": "一个均匀带电球总电荷 $Q = 4.0\\,\\mu C$。求距中心 $r = 0.50\\,\\text{m}$（球外）处场的大小（单位 N/C，保留两位有效数字）。"
      },
      "answer": "1.4e5",
      "accept": [
        "1.4e5",
        "144000",
        "143840",
        "1.44e5",
        "1.4e5 N/C",
        "1.4×10^5",
        "140000",
        "1.44×10^5"
      ],
      "explanation": {
        "en": "Outside, the sphere acts as a point charge: $E = kQ/r^2 = (8.99\\times10^9)(4.0\\times10^{-6})/(0.50)^2 = 1.4\\times10^5\\,\\text{N/C}$. Forgetting to square $r$ would overstate the field by a factor of 2.",
        "zh": "在球外，球等效为点电荷：$E = kQ/r^2 = (8.99\\times10^9)(4.0\\times10^{-6})/(0.50)^2 = 1.4\\times10^5\\,\\text{N/C}$。忘记把 $r$ 平方会使场高估一倍。"
      }
    }
  ],
  "electric-potential/electric-potential": [
    {
      "type": "mc",
      "question": {
        "en": "A point charge $q=+5\\times10^{-9}$ C sits at the origin. Using $V=\\frac{kq}{r}$ with $k=8.99\\times10^{9}$, what is the electric potential at $r=0.10$ m (take $V=0$ at infinity)?",
        "zh": "点电荷 $q=+5\\times10^{-9}$ C 位于原点。用 $V=\\frac{kq}{r}$（$k=8.99\\times10^{9}$），在 $r=0.10$ m 处的电势是多少（取无穷远处 $V=0$）？"
      },
      "choices": [
        "$450$ V",
        "$45$ V",
        "$4500$ V",
        "$0.45$ V"
      ],
      "answer": 0,
      "explanation": {
        "en": "$V=\\frac{(8.99\\times10^{9})(5\\times10^{-9})}{0.10}\\approx450$ V. A common slip is dividing by $r^2$ (as if computing a field) instead of $r$, which would shrink the answer by a factor of $r$; potential falls off as $1/r$, not $1/r^2$.",
        "zh": "$V=\\frac{(8.99\\times10^{9})(5\\times10^{-9})}{0.10}\\approx450$ V。常见错误是误用 $r^2$（把它当成电场）而不是 $r$，这会使结果缩小一个 $r$ 倍；电势按 $1/r$ 衰减，而非 $1/r^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The potential in a region is $V(x)=3x^2$ (volts, $x$ in meters). Using $E_x=-\\frac{dV}{dx}$, what is the electric field at $x=2$ m?",
        "zh": "某区域电势为 $V(x)=3x^2$（伏特，$x$ 单位为米）。用 $E_x=-\\frac{dV}{dx}$，$x=2$ m 处的电场是多少？"
      },
      "choices": [
        "$+12$ V/m in the $+x$ direction",
        "$12$ V/m in the $-x$ direction",
        "$6$ V/m in the $-x$ direction",
        "$3$ V/m in the $+x$ direction"
      ],
      "answer": 1,
      "explanation": {
        "en": "$E_x=-\\frac{dV}{dx}=-6x=-12$ V/m at $x=2$, i.e. magnitude $12$ V/m pointing toward $-x$. Forgetting the minus sign in $E=-\\frac{dV}{dx}$ gives the wrong direction; dropping the derivative factor and using $6x$ gives the wrong magnitude.",
        "zh": "$E_x=-\\frac{dV}{dx}=-6x=-12$ V/m（$x=2$），即大小 $12$ V/m，方向沿 $-x$。忽略 $E=-\\frac{dV}{dx}$ 中的负号会得到错误方向；漏掉求导系数用 $6x$ 会得到错误大小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two point charges, each $+2\\times10^{-6}$ C, are held $0.50$ m apart. Using $U=\\frac{kq_1q_2}{r}$, what is the electric potential energy of the pair?",
        "zh": "两个点电荷各为 $+2\\times10^{-6}$ C，相距 $0.50$ m。用 $U=\\frac{kq_1q_2}{r}$，这对电荷的电势能是多少？"
      },
      "choices": [
        "$0.14$ J",
        "$0.036$ J",
        "$0.072$ J",
        "$0.72$ J"
      ],
      "answer": 2,
      "explanation": {
        "en": "$U=\\frac{(8.99\\times10^{9})(2\\times10^{-6})^2}{0.50}\\approx0.072$ J. A frequent error is squaring only one charge or forgetting that both charges appear as a product $q_1q_2=(2\\times10^{-6})^2$; another is dividing by $r^2$ instead of $r$.",
        "zh": "$U=\\frac{(8.99\\times10^{9})(2\\times10^{-6})^2}{0.50}\\approx0.072$ J。常见错误是只平方一个电荷，或忘记两个电荷以乘积 $q_1q_2=(2\\times10^{-6})^2$ 出现；另一错误是除以 $r^2$ 而非 $r$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Because electric potential is a scalar, how do you find the total potential at a point due to several point charges?",
        "zh": "由于电势是标量，如何求多个点电荷在某点产生的总电势？"
      },
      "choices": [
        "Add their fields as vectors, then integrate",
        "Take the largest individual potential",
        "Use only the nearest charge",
        "Algebraically add each $\\frac{kq_i}{r_i}$, keeping the sign of every charge"
      ],
      "answer": 3,
      "explanation": {
        "en": "Potential superposes as a signed scalar sum: $V=\\sum_i\\frac{kq_i}{r_i}$, where negative charges contribute negative terms. Treating potential like a vector (adding components) confuses it with the field $\\vec{E}$; potential has no direction.",
        "zh": "电势按带符号的标量叠加：$V=\\sum_i\\frac{kq_i}{r_i}$，负电荷贡献负项。把电势当作矢量（加分量）是把它与电场 $\\vec{E}$ 混淆；电势没有方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How much work must an external agent do to bring a charge $q=+2\\times10^{-6}$ C from infinity ($V=0$) to a point where the potential is $500$ V (charge starts and ends at rest)?",
        "zh": "外力将电荷 $q=+2\\times10^{-6}$ C 从无穷远（$V=0$）移到电势为 $500$ V 的点（始末均静止），需做多少功？"
      },
      "choices": [
        "$1$ mJ",
        "$2$ mJ",
        "$0.5$ mJ",
        "$1$ J"
      ],
      "answer": 0,
      "explanation": {
        "en": "$W_{ext}=q\\,\\Delta V=(2\\times10^{-6})(500-0)=1\\times10^{-3}$ J $=1$ mJ. Forgetting the $10^{-6}$ factor in the charge, or confusing volts with joules directly, produces the oversized answers.",
        "zh": "$W_{ext}=q\\,\\Delta V=(2\\times10^{-6})(500-0)=1\\times10^{-3}$ J $=1$ mJ。忘记电荷中的 $10^{-6}$ 因子，或把伏特直接当作焦耳，会得到过大的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Inside a solid conductor in electrostatic equilibrium, the electric potential is:",
        "zh": "处于静电平衡的实心导体内部，电势是："
      },
      "choices": [
        "Zero everywhere inside",
        "Constant, equal to the value at the surface",
        "Largest at the center",
        "Increasing with depth into the conductor"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $\\vec{E}=0$ inside, $V=-\\int\\vec{E}\\cdot d\\vec{l}$ cannot change, so the whole conductor (interior and surface) is one equipotential. Assuming the potential is zero confuses the field being zero with the potential being zero — a constant nonzero value is what actually holds.",
        "zh": "导体内部 $\\vec{E}=0$，故 $V=-\\int\\vec{E}\\cdot d\\vec{l}$ 不变，整个导体（内部与表面）为同一等势体。认为电势为零是把场为零误当成电势为零——实际是一个不为零的常数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ring of charge $Q=8\\times10^{-9}$ C has radius $R=0.03$ m. On its axis at $z=0.04$ m, $V=\\frac{kQ}{\\sqrt{R^2+z^2}}$. What is the potential there?",
        "zh": "半径 $R=0.03$ m 的带电圆环带电量 $Q=8\\times10^{-9}$ C。在其轴线 $z=0.04$ m 处，$V=\\frac{kQ}{\\sqrt{R^2+z^2}}$。该处电势是多少？"
      },
      "choices": [
        "$720$ V",
        "$1800$ V",
        "$1440$ V",
        "$2400$ V"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\sqrt{R^2+z^2}=\\sqrt{0.03^2+0.04^2}=0.05$ m, so $V=\\frac{(8.99\\times10^{9})(8\\times10^{-9})}{0.05}\\approx1440$ V. Using $z$ alone (i.e. $0.04$ in the denominator) instead of the axial distance $\\sqrt{R^2+z^2}$ overstates the potential.",
        "zh": "$\\sqrt{R^2+z^2}=\\sqrt{0.03^2+0.04^2}=0.05$ m，故 $V=\\frac{(8.99\\times10^{9})(8\\times10^{-9})}{0.05}\\approx1440$ V。若只用 $z$（即分母取 $0.04$）而不用轴向距离 $\\sqrt{R^2+z^2}$，会高估电势。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In three dimensions, how is the electric field obtained from the potential $V(x,y,z)$?",
        "zh": "在三维中，如何从电势 $V(x,y,z)$ 求电场？"
      },
      "choices": [
        "$\\vec{E}=+\\nabla V$",
        "$\\vec{E}=V\\hat{r}$",
        "$\\vec{E}=-\\int V\\,d\\vec{l}$",
        "$\\vec{E}=-\\nabla V=-\\left(\\frac{\\partial V}{\\partial x}\\hat{x}+\\frac{\\partial V}{\\partial y}\\hat{y}+\\frac{\\partial V}{\\partial z}\\hat{z}\\right)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The field is the negative gradient: $\\vec{E}=-\\nabla V$, one partial derivative per component. Writing $+\\nabla V$ drops the crucial minus sign; integrating $V$ instead of differentiating it inverts the correct operation, since $V=-\\int\\vec{E}\\cdot d\\vec{l}$.",
        "zh": "电场是电势的负梯度：$\\vec{E}=-\\nabla V$，每个分量对应一个偏导。写成 $+\\nabla V$ 会丢掉关键负号；对 $V$ 积分而非求导则是把正确运算反过来，因为 $V=-\\int\\vec{E}\\cdot d\\vec{l}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How are equipotential surfaces oriented relative to the electric field lines?",
        "zh": "等势面与电场线的相对取向是怎样的？"
      },
      "choices": [
        "Perpendicular (normal) to the field lines",
        "At $45^\\circ$ to the field lines",
        "Oriented randomly",
        "Parallel to the field lines"
      ],
      "answer": 0,
      "explanation": {
        "en": "Along an equipotential, $dV=-\\vec{E}\\cdot d\\vec{l}=0$, so $\\vec{E}$ must be perpendicular to any displacement on the surface. Imagining field lines lying within the surface is wrong — there would then be a potential difference along it, contradicting 'equipotential'.",
        "zh": "沿等势面移动时 $dV=-\\vec{E}\\cdot d\\vec{l}=0$，故 $\\vec{E}$ 必与面上任意位移垂直。设想电场线躺在面内是错的——那样面上就会有电势差，与“等势”矛盾。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In which direction does the electric field point relative to potential?",
        "zh": "电场相对于电势指向哪个方向？"
      },
      "choices": [
        "From low potential toward high potential",
        "From high potential toward low potential (down the gradient)",
        "Along surfaces of constant potential",
        "Always toward the nearest positive charge"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $\\vec{E}=-\\nabla V$, the field points in the direction of steepest decrease of $V$, i.e. from high to low potential. Reversing this (low to high) drops the minus sign in $\\vec{E}=-\\nabla V$.",
        "zh": "由于 $\\vec{E}=-\\nabla V$，电场指向 $V$ 下降最快的方向，即从高电势指向低电势。把方向反过来（低到高）就是丢掉了 $\\vec{E}=-\\nabla V$ 中的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A conducting sphere of radius $R=0.10$ m carries $Q=+6\\times10^{-9}$ C. Outside the sphere the potential is $V=\\frac{kQ}{r}$. What is $V$ at $r=0.20$ m?",
        "zh": "半径 $R=0.10$ m 的导体球带电 $Q=+6\\times10^{-9}$ C。球外电势为 $V=\\frac{kQ}{r}$。在 $r=0.20$ m 处 $V$ 是多少？"
      },
      "choices": [
        "$540$ V",
        "$135$ V",
        "$270$ V",
        "$1080$ V"
      ],
      "answer": 2,
      "explanation": {
        "en": "Outside, the sphere acts like a point charge: $V=\\frac{(8.99\\times10^{9})(6\\times10^{-9})}{0.20}\\approx270$ V. Using $R=0.10$ (the radius) instead of the field point $r=0.20$ in the denominator doubles the answer erroneously.",
        "zh": "球外可视为点电荷：$V=\\frac{(8.99\\times10^{9})(6\\times10^{-9})}{0.20}\\approx270$ V。在分母中误用 $R=0.10$（半径）而非场点 $r=0.20$，会错误地使结果翻倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Charges $+5\\times10^{-9}$ C and $-5\\times10^{-9}$ C are separated by a distance $d$. What is the potential at the midpoint between them?",
        "zh": "电荷 $+5\\times10^{-9}$ C 与 $-5\\times10^{-9}$ C 相距 $d$。它们连线中点处的电势是多少？"
      },
      "choices": [
        "Depends on the separation $d$",
        "$\\frac{kq}{r}$",
        "$\\frac{2kq}{r}$",
        "$0$ V"
      ],
      "answer": 3,
      "explanation": {
        "en": "The midpoint is equidistant from both charges, so $V=\\frac{kq}{r}+\\frac{k(-q)}{r}=0$ regardless of $d$. Note the field there is NOT zero — assuming $V=0$ forces $\\vec{E}=0$ confuses the scalar potential with the vector field.",
        "zh": "中点到两电荷等距，故 $V=\\frac{kq}{r}+\\frac{k(-q)}{r}=0$，与 $d$ 无关。注意该处电场并不为零——认为 $V=0$ 就意味着 $\\vec{E}=0$ 是把标量电势与矢量电场混淆。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point charge $q=+6\\times10^{-9}$ C sits at the origin. Using $V=\\frac{kq}{r}$ with $k=8.99\\times10^{9}$, find the potential (in volts) at $r=0.030$ m. Round to the nearest volt.",
        "zh": "点电荷 $q=+6\\times10^{-9}$ C 位于原点。用 $V=\\frac{kq}{r}$（$k=8.99\\times10^{9}$），求 $r=0.030$ m 处的电势（单位伏特）。四舍五入到整数伏特。"
      },
      "answer": "1798",
      "accept": [
        "1800",
        "1.8e3",
        "1798 V",
        "1798.0",
        "1.798e3"
      ],
      "explanation": {
        "en": "$V=\\frac{(8.99\\times10^{9})(6\\times10^{-9})}{0.030}\\approx1798$ V. Dividing by $r^2$ instead of $r$ is the usual mistake — potential goes as $1/r$.",
        "zh": "$V=\\frac{(8.99\\times10^{9})(6\\times10^{-9})}{0.030}\\approx1798$ V。常见错误是除以 $r^2$ 而非 $r$——电势按 $1/r$ 变化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Charges $q_1=+1\\times10^{-6}$ C and $q_2=-2\\times10^{-6}$ C are held $0.30$ m apart. Using $U=\\frac{kq_1q_2}{r}$, find the potential energy in joules (include the sign).",
        "zh": "电荷 $q_1=+1\\times10^{-6}$ C 与 $q_2=-2\\times10^{-6}$ C 相距 $0.30$ m。用 $U=\\frac{kq_1q_2}{r}$，求电势能（焦耳，含符号）。"
      },
      "answer": "-0.060",
      "accept": [
        "-0.06",
        "-0.0599",
        "-6.0e-2",
        "-0.060 J",
        "-0.0599 J",
        "-5.99e-2"
      ],
      "explanation": {
        "en": "$U=\\frac{(8.99\\times10^{9})(1\\times10^{-6})(-2\\times10^{-6})}{0.30}\\approx-0.060$ J. The energy is negative because opposite charges attract; dropping the sign of $q_2$ gives the wrong (positive) result.",
        "zh": "$U=\\frac{(8.99\\times10^{9})(1\\times10^{-6})(-2\\times10^{-6})}{0.30}\\approx-0.060$ J。因异号电荷相吸，能量为负；漏掉 $q_2$ 的符号会得到错误的正值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a uniform field $E=200$ V/m, you move $0.50$ m in the direction of the field. From $\\Delta V=-\\int\\vec{E}\\cdot d\\vec{l}=-Ed$, what is the magnitude of the potential difference (in volts)?",
        "zh": "在均匀场 $E=200$ V/m 中，沿场方向移动 $0.50$ m。由 $\\Delta V=-\\int\\vec{E}\\cdot d\\vec{l}=-Ed$，电势差的大小是多少（伏特）？"
      },
      "answer": "100",
      "accept": [
        "100 V",
        "1.0e2",
        "100.0",
        "1e2"
      ],
      "explanation": {
        "en": "$|\\Delta V|=Ed=(200)(0.50)=100$ V (the potential drops moving along $\\vec{E}$). Multiplying instead of using $Ed$, or dividing $E$ by $d$, are the common slips for uniform-field potential.",
        "zh": "$|\\Delta V|=Ed=(200)(0.50)=100$ V（沿 $\\vec{E}$ 移动电势下降）。用错公式（如把 $E$ 除以 $d$）是均匀场电势的常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ring of charge $Q=5\\times10^{-9}$ C has radius $R=0.08$ m. On its axis at $z=0.06$ m, use $V=\\frac{kQ}{\\sqrt{R^2+z^2}}$ to find the potential (in volts). Round to the nearest volt.",
        "zh": "半径 $R=0.08$ m 的带电圆环带电量 $Q=5\\times10^{-9}$ C。在其轴线 $z=0.06$ m 处，用 $V=\\frac{kQ}{\\sqrt{R^2+z^2}}$ 求电势（伏特）。四舍五入到整数伏特。"
      },
      "answer": "450",
      "accept": [
        "449.5",
        "450 V",
        "4.5e2",
        "449",
        "4.50e2"
      ],
      "explanation": {
        "en": "$\\sqrt{R^2+z^2}=\\sqrt{0.08^2+0.06^2}=0.10$ m, so $V=\\frac{(8.99\\times10^{9})(5\\times10^{-9})}{0.10}\\approx450$ V. Using $z$ or $R$ alone in the denominator instead of $\\sqrt{R^2+z^2}$ is the standard error.",
        "zh": "$\\sqrt{R^2+z^2}=\\sqrt{0.08^2+0.06^2}=0.10$ m，故 $V=\\frac{(8.99\\times10^{9})(5\\times10^{-9})}{0.10}\\approx450$ V。分母只用 $z$ 或 $R$ 而不用 $\\sqrt{R^2+z^2}$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How much work (in joules) does an external agent do to move a charge $q=3\\times10^{-6}$ C from a point at $200$ V to a point at $800$ V? Use $W=q\\,\\Delta V$.",
        "zh": "外力将电荷 $q=3\\times10^{-6}$ C 从 $200$ V 的点移到 $800$ V 的点做多少功（焦耳）？用 $W=q\\,\\Delta V$。"
      },
      "answer": "1.8e-3",
      "accept": [
        "0.0018",
        "1.8e-3",
        "1.8 mJ",
        "0.00180",
        "1.8e-3 J",
        "1.8×10^-3"
      ],
      "explanation": {
        "en": "$W=q\\,\\Delta V=(3\\times10^{-6})(800-200)=1.8\\times10^{-3}$ J. Using the final potential $800$ V rather than the difference $\\Delta V=600$ V overstates the work.",
        "zh": "$W=q\\,\\Delta V=(3\\times10^{-6})(800-200)=1.8\\times10^{-3}$ J。用末电势 $800$ V 而不是差值 $\\Delta V=600$ V，会高估做功。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a point charge the potential is $V(r)=\\frac{kQ}{r}$. Using $E=-\\frac{dV}{dr}=\\frac{kQ}{r^2}$ with $Q=2\\times10^{-9}$ C, find the field magnitude (in V/m) at $r=0.050$ m. Round to the nearest V/m.",
        "zh": "点电荷电势为 $V(r)=\\frac{kQ}{r}$。用 $E=-\\frac{dV}{dr}=\\frac{kQ}{r^2}$，$Q=2\\times10^{-9}$ C，求 $r=0.050$ m 处的场强（V/m）。四舍五入到整数。"
      },
      "answer": "7192",
      "accept": [
        "7190",
        "7.19e3",
        "7200",
        "7192 V/m",
        "7191",
        "7.192e3"
      ],
      "explanation": {
        "en": "$E=\\frac{kQ}{r^2}=\\frac{(8.99\\times10^{9})(2\\times10^{-9})}{0.050^2}\\approx7192$ V/m. Differentiating $1/r$ gives $-1/r^2$, so the field scales as $1/r^2$; forgetting to square $r$ (using $1/r$) understates the field badly.",
        "zh": "$E=\\frac{kQ}{r^2}=\\frac{(8.99\\times10^{9})(2\\times10^{-9})}{0.050^2}\\approx7192$ V/m。对 $1/r$ 求导得 $-1/r^2$，故场强按 $1/r^2$ 变化；忘记对 $r$ 平方（用 $1/r$）会严重低估场强。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point charge $q=4\\times10^{-9}$ C is at the origin. Using $V_a-V_b=kq\\left(\\frac{1}{r_a}-\\frac{1}{r_b}\\right)$, find the potential difference (in volts) between $r_a=0.10$ m and $r_b=0.20$ m. Round to the nearest volt.",
        "zh": "点电荷 $q=4\\times10^{-9}$ C 位于原点。用 $V_a-V_b=kq\\left(\\frac{1}{r_a}-\\frac{1}{r_b}\\right)$，求 $r_a=0.10$ m 与 $r_b=0.20$ m 之间的电势差（伏特）。四舍五入到整数。"
      },
      "answer": "180",
      "accept": [
        "179.8",
        "180 V",
        "1.8e2",
        "179",
        "1.80e2"
      ],
      "explanation": {
        "en": "$V_a-V_b=(8.99\\times10^{9})(4\\times10^{-9})\\left(\\frac{1}{0.10}-\\frac{1}{0.20}\\right)=35.96\\times5\\approx180$ V. Subtracting the radii ($r_a-r_b$) instead of the reciprocals $\\frac{1}{r_a}-\\frac{1}{r_b}$ is the classic error.",
        "zh": "$V_a-V_b=(8.99\\times10^{9})(4\\times10^{-9})\\left(\\frac{1}{0.10}-\\frac{1}{0.20}\\right)=35.96\\times5\\approx180$ V。用半径相减（$r_a-r_b$）而不是倒数相减 $\\frac{1}{r_a}-\\frac{1}{r_b}$ 是典型错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How much work (in joules) is required to assemble two charges $q_1=q_2=3\\times10^{-9}$ C at a separation of $0.020$ m, starting from infinity? Use $U=\\frac{kq_1q_2}{r}$.",
        "zh": "把两个电荷 $q_1=q_2=3\\times10^{-9}$ C 从无穷远处组装到相距 $0.020$ m，需要多少功（焦耳）？用 $U=\\frac{kq_1q_2}{r}$。"
      },
      "answer": "4.05e-6",
      "accept": [
        "4.0e-6",
        "4.05e-6",
        "4.0455e-6",
        "0.00000405",
        "4.05×10^-6",
        "4.05e-6 J"
      ],
      "explanation": {
        "en": "$W=U=\\frac{(8.99\\times10^{9})(3\\times10^{-9})^2}{0.020}\\approx4.05\\times10^{-6}$ J. Squaring only one charge, or forgetting that $q_1q_2=(3\\times10^{-9})^2$, is the common mistake — both factors of $10^{-9}$ must appear.",
        "zh": "$W=U=\\frac{(8.99\\times10^{9})(3\\times10^{-9})^2}{0.020}\\approx4.05\\times10^{-6}$ J。只平方一个电荷，或忘记 $q_1q_2=(3\\times10^{-9})^2$，是常见错误——两个 $10^{-9}$ 因子都要出现。"
      }
    }
  ],
  "conductors-capacitors/capacitors-dielectrics": [
    {
      "type": "mc",
      "question": {
        "en": "What determines the capacitance of a parallel-plate capacitor?",
        "zh": "平行板电容器的电容由什么决定？"
      },
      "choices": [
        "The geometry (plate area and separation) and the dielectric",
        "The charge stored on the plates",
        "The potential difference applied across it",
        "The energy currently stored in it"
      ],
      "answer": 0,
      "explanation": {
        "en": "Capacitance is a purely geometric property, $C = \\epsilon_0 A / d$ (times $\\kappa$ for a dielectric). A common error is to think $C$ changes when you charge the capacitor or apply a voltage, but $Q$ and $V$ adjust so that $Q = CV$ while $C$ stays fixed.",
        "zh": "电容只与几何结构有关，$C = \\epsilon_0 A / d$（有电介质时再乘 $\\kappa$）。常见错误是以为充电或加电压会改变 $C$；实际上 $Q$ 和 $V$ 会调整以满足 $Q = CV$，而 $C$ 保持不变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A parallel-plate capacitor in vacuum has plate area $A = 0.02\\ \\text{m}^2$ and separation $d = 1.0\\ \\text{mm}$. Its capacitance is closest to:",
        "zh": "真空中的平行板电容器，板面积 $A = 0.02\\ \\text{m}^2$，间距 $d = 1.0\\ \\text{mm}$。其电容最接近："
      },
      "choices": [
        "88.5 pF",
        "177 pF",
        "354 pF",
        "17.7 pF"
      ],
      "answer": 1,
      "explanation": {
        "en": "$C = \\epsilon_0 A / d = (8.85\\times10^{-12})(0.02)/(1.0\\times10^{-3}) = 1.77\\times10^{-10}\\ \\text{F} = 177\\ \\text{pF}$. Dropping a factor of two from the area or mis-converting mm to m gives half or a tenth of this.",
        "zh": "$C = \\epsilon_0 A / d = (8.85\\times10^{-12})(0.02)/(1.0\\times10^{-3}) = 1.77\\times10^{-10}\\ \\text{F} = 177\\ \\text{pF}$。若面积漏乘或把 mm 换算成 m 时出错，会得到一半或十分之一的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2.0\\ \\mu\\text{F}$ capacitor is charged to $100\\ \\text{V}$. How much energy is stored?",
        "zh": "一个 $2.0\\ \\mu\\text{F}$ 的电容器充电到 $100\\ \\text{V}$。储存的能量是多少？"
      },
      "choices": [
        "20 mJ",
        "5 mJ",
        "10 mJ",
        "100 mJ"
      ],
      "answer": 2,
      "explanation": {
        "en": "$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(2.0\\times10^{-6})(100)^2 = 1.0\\times10^{-2}\\ \\text{J} = 10\\ \\text{mJ}$. Forgetting the factor of $\\tfrac{1}{2}$ gives 20 mJ.",
        "zh": "$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(2.0\\times10^{-6})(100)^2 = 1.0\\times10^{-2}\\ \\text{J} = 10\\ \\text{mJ}$。漏掉 $\\tfrac{1}{2}$ 会得到 20 mJ。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $3.0\\ \\mu\\text{F}$ and a $6.0\\ \\mu\\text{F}$ capacitor are connected in series. The equivalent capacitance is:",
        "zh": "$3.0\\ \\mu\\text{F}$ 和 $6.0\\ \\mu\\text{F}$ 两个电容器串联。等效电容为："
      },
      "choices": [
        "9.0 μF",
        "18 μF",
        "4.5 μF",
        "2.0 μF"
      ],
      "answer": 3,
      "explanation": {
        "en": "For series, $1/C = 1/3 + 1/6 = 1/2$, so $C = 2.0\\ \\mu\\text{F}$ — smaller than either capacitor. Simply adding them (as you would in parallel) wrongly gives 9.0 μF.",
        "zh": "串联时 $1/C = 1/3 + 1/6 = 1/2$，故 $C = 2.0\\ \\mu\\text{F}$——比任一电容都小。若像并联那样直接相加，会错得 9.0 μF。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $3.0\\ \\mu\\text{F}$ and a $6.0\\ \\mu\\text{F}$ capacitor are connected in parallel. The equivalent capacitance is:",
        "zh": "$3.0\\ \\mu\\text{F}$ 和 $6.0\\ \\mu\\text{F}$ 两个电容器并联。等效电容为："
      },
      "choices": [
        "9.0 μF",
        "18 μF",
        "4.5 μF",
        "2.0 μF"
      ],
      "answer": 0,
      "explanation": {
        "en": "For parallel, capacitances add directly: $C = 3.0 + 6.0 = 9.0\\ \\mu\\text{F}$. Using the reciprocal (series) rule wrongly gives 2.0 μF.",
        "zh": "并联时电容直接相加：$C = 3.0 + 6.0 = 9.0\\ \\mu\\text{F}$。若误用倒数（串联）公式会得到 2.0 μF。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A capacitor stays connected to a battery (constant $V$) while a dielectric of constant $\\kappa$ is inserted. The charge on the plates:",
        "zh": "电容器保持与电池连接（$V$ 恒定），此时插入介电常数为 $\\kappa$ 的电介质。极板上的电荷："
      },
      "choices": [
        "decreases by a factor of $\\kappa$",
        "increases by a factor of $\\kappa$",
        "stays the same",
        "drops to zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "With the battery attached, $V$ is fixed while $C$ increases by $\\kappa$, so $Q = CV$ increases by $\\kappa$. The mistake is to confuse this with the isolated (constant-$Q$) case, where instead the voltage would drop.",
        "zh": "电池接着时 $V$ 固定，而 $C$ 增大 $\\kappa$ 倍，故 $Q = CV$ 增大 $\\kappa$ 倍。常见错误是与孤立（$Q$ 恒定）情形混淆——那种情形下变化的是电压下降。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A capacitor is charged and then disconnected from the battery (constant $Q$). A dielectric of constant $\\kappa$ is inserted. The voltage across the plates:",
        "zh": "电容器充电后与电池断开（$Q$ 恒定），然后插入介电常数为 $\\kappa$ 的电介质。极板间电压："
      },
      "choices": [
        "increases by a factor of $\\kappa$",
        "stays the same",
        "decreases by a factor of $\\kappa$",
        "decreases by a factor of $\\kappa^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Isolated means $Q$ is fixed. Since $C$ grows by $\\kappa$, $V = Q/C$ falls by $\\kappa$. Thinking the voltage rises confuses this with the battery-connected case where charge (not voltage) changes.",
        "zh": "孤立意味着 $Q$ 固定。由于 $C$ 增大 $\\kappa$ 倍，$V = Q/C$ 减小 $\\kappa$ 倍。以为电压升高，是把它与接电池情形混淆——那种情形改变的是电荷而非电压。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The electric field between the plates of a vacuum capacitor is $1.0\\times10^{6}\\ \\text{V/m}$. The energy density of the field is closest to:",
        "zh": "真空电容器两板间的电场为 $1.0\\times10^{6}\\ \\text{V/m}$。电场的能量密度最接近："
      },
      "choices": [
        "8.85 J/m³",
        "2.21 J/m³",
        "44.3 J/m³",
        "4.43 J/m³"
      ],
      "answer": 3,
      "explanation": {
        "en": "$u = \\tfrac{1}{2}\\epsilon_0 E^2 = \\tfrac{1}{2}(8.85\\times10^{-12})(10^{6})^2 = 4.43\\ \\text{J/m}^3$. Omitting the $\\tfrac{1}{2}$ gives 8.85, and forgetting to square $E$ mangles the exponent entirely.",
        "zh": "$u = \\tfrac{1}{2}\\epsilon_0 E^2 = \\tfrac{1}{2}(8.85\\times10^{-12})(10^{6})^2 = 4.43\\ \\text{J/m}^3$。漏掉 $\\tfrac{1}{2}$ 得 8.85，忘记对 $E$ 平方则会使指数完全出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spherical capacitor has inner radius $a$ and outer radius $b$. Its capacitance is:",
        "zh": "球形电容器内半径为 $a$，外半径为 $b$。其电容为："
      },
      "choices": [
        "$\\dfrac{4\\pi\\epsilon_0\\, ab}{b-a}$",
        "$4\\pi\\epsilon_0\\, ab$",
        "$\\dfrac{4\\pi\\epsilon_0 (b-a)}{ab}$",
        "$\\dfrac{\\epsilon_0\\, ab}{b-a}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrating $E = Q/(4\\pi\\epsilon_0 r^2)$ from $a$ to $b$ gives $V = \\tfrac{Q}{4\\pi\\epsilon_0}\\left(\\tfrac{1}{a}-\\tfrac{1}{b}\\right)$, so $C = Q/V = \\dfrac{4\\pi\\epsilon_0\\, ab}{b-a}$. Inverting the fraction (putting $b-a$ on top) gives a capacitance that wrongly vanishes as the gap grows.",
        "zh": "将 $E = Q/(4\\pi\\epsilon_0 r^2)$ 从 $a$ 积到 $b$ 得 $V = \\tfrac{Q}{4\\pi\\epsilon_0}\\left(\\tfrac{1}{a}-\\tfrac{1}{b}\\right)$，故 $C = Q/V = \\dfrac{4\\pi\\epsilon_0\\, ab}{b-a}$。若把分式倒过来（$b-a$ 放到分子），电容会随间距增大而错误地趋零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An isolated conducting sphere of radius $R = 0.10\\ \\text{m}$ has a self-capacitance closest to:",
        "zh": "半径 $R = 0.10\\ \\text{m}$ 的孤立导体球，其自电容最接近："
      },
      "choices": [
        "8.85 pF",
        "11.1 pF",
        "1.11 pF",
        "111 pF"
      ],
      "answer": 1,
      "explanation": {
        "en": "An isolated sphere is the $b\\to\\infty$ limit of a spherical capacitor: $C = 4\\pi\\epsilon_0 R = (1.11\\times10^{-10})(0.10) = 1.11\\times10^{-11}\\ \\text{F} = 11.1\\ \\text{pF}$. Using $\\epsilon_0 R$ without the $4\\pi$ underestimates it by more than a factor of 10.",
        "zh": "孤立球是球形电容器 $b\\to\\infty$ 的极限：$C = 4\\pi\\epsilon_0 R = (1.11\\times10^{-10})(0.10) = 1.11\\times10^{-11}\\ \\text{F} = 11.1\\ \\text{pF}$。若只用 $\\epsilon_0 R$ 而漏掉 $4\\pi$，会低估十倍以上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a cylindrical capacitor (inner radius $a$, outer radius $b$, length $L$), the capacitance is proportional to:",
        "zh": "对于圆柱形电容器（内半径 $a$，外半径 $b$，长度 $L$），电容正比于："
      },
      "choices": [
        "$\\ln(b/a)$",
        "$b - a$",
        "$1/\\ln(b/a)$",
        "$b/a$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$C = \\dfrac{2\\pi\\epsilon_0 L}{\\ln(b/a)}$, so $C \\propto 1/\\ln(b/a)$ — a larger radius ratio (bigger gap) lowers the capacitance. Placing $\\ln(b/a)$ in the numerator reverses this dependence.",
        "zh": "$C = \\dfrac{2\\pi\\epsilon_0 L}{\\ln(b/a)}$，故 $C \\propto 1/\\ln(b/a)$——半径比越大（间隙越大）电容越小。若把 $\\ln(b/a)$ 放到分子上，依赖关系就反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A charged parallel-plate capacitor is disconnected from its battery, then the plate separation is doubled. The stored energy:",
        "zh": "一个已充电的平行板电容器与电池断开后，将极板间距加倍。储存的能量："
      },
      "choices": [
        "quadruples",
        "halves",
        "stays the same",
        "doubles"
      ],
      "answer": 3,
      "explanation": {
        "en": "Isolated means $Q$ is fixed. Doubling $d$ halves $C$, and $U = Q^2/(2C)$ therefore doubles — the extra energy comes from the work you do pulling the attracting plates apart. Assuming $V$ is fixed (the wrong model here) would suggest the energy halves.",
        "zh": "孤立意味着 $Q$ 固定。间距加倍使 $C$ 减半，故 $U = Q^2/(2C)$ 加倍——多出的能量来自你把相互吸引的极板拉开所做的功。若错误地假设 $V$ 固定，会以为能量减半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A vacuum parallel-plate capacitor has plate area $A = 0.010\\ \\text{m}^2$ and separation $d = 2.0\\ \\text{mm}$. Find its capacitance in picofarads (pF).",
        "zh": "真空平行板电容器，板面积 $A = 0.010\\ \\text{m}^2$，间距 $d = 2.0\\ \\text{mm}$。求其电容（单位 pF）。"
      },
      "answer": "44.3",
      "accept": [
        "44.25",
        "44",
        "44.3 pF",
        "4.43e-11",
        "4.43e-11 F",
        "4.425e-11"
      ],
      "explanation": {
        "en": "$C = \\epsilon_0 A / d = (8.85\\times10^{-12})(0.010)/(2.0\\times10^{-3}) = 4.43\\times10^{-11}\\ \\text{F} = 44.3\\ \\text{pF}$. Watch the mm-to-m conversion of $d$.",
        "zh": "$C = \\epsilon_0 A / d = (8.85\\times10^{-12})(0.010)/(2.0\\times10^{-3}) = 4.43\\times10^{-11}\\ \\text{F} = 44.3\\ \\text{pF}$。注意把 $d$ 从 mm 换算成 m。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $10\\ \\mu\\text{F}$ capacitor is charged to $12\\ \\text{V}$. Find the energy stored, in millijoules (mJ).",
        "zh": "一个 $10\\ \\mu\\text{F}$ 的电容器充电到 $12\\ \\text{V}$。求储存的能量（单位 mJ）。"
      },
      "answer": "0.72",
      "accept": [
        "0.72 mJ",
        "7.2e-4",
        "7.2e-4 J",
        "0.00072",
        "0.720"
      ],
      "explanation": {
        "en": "$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(10\\times10^{-6})(12)^2 = 7.2\\times10^{-4}\\ \\text{J} = 0.72\\ \\text{mJ}$. Don't forget to square the voltage.",
        "zh": "$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(10\\times10^{-6})(12)^2 = 7.2\\times10^{-4}\\ \\text{J} = 0.72\\ \\text{mJ}$。别忘了对电压平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Three identical $6.0\\ \\mu\\text{F}$ capacitors are connected in series. Find the equivalent capacitance in $\\mu\\text{F}$.",
        "zh": "三个相同的 $6.0\\ \\mu\\text{F}$ 电容器串联。求等效电容（单位 $\\mu\\text{F}$）。"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.0 μF",
        "2 uF",
        "2.00",
        "2 microfarad"
      ],
      "explanation": {
        "en": "For $n$ equal capacitors in series, $C_{eq} = C/n = 6.0/3 = 2.0\\ \\mu\\text{F}$. Series always yields something smaller than the smallest single capacitor.",
        "zh": "$n$ 个相等电容串联时 $C_{eq} = C/n = 6.0/3 = 2.0\\ \\mu\\text{F}$。串联结果总是比其中最小的单个电容还小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $5.0\\ \\mu\\text{F}$ capacitor is charged to $20\\ \\text{V}$. Find the charge stored, in microcoulombs ($\\mu\\text{C}$).",
        "zh": "一个 $5.0\\ \\mu\\text{F}$ 的电容器充电到 $20\\ \\text{V}$。求储存的电荷（单位 $\\mu\\text{C}$）。"
      },
      "answer": "100",
      "accept": [
        "100 μC",
        "1e-4",
        "1e-4 C",
        "0.0001",
        "1.0e-4",
        "100.0"
      ],
      "explanation": {
        "en": "$Q = CV = (5.0\\times10^{-6})(20) = 1.0\\times10^{-4}\\ \\text{C} = 100\\ \\mu\\text{C}$. This uses the definition of capacitance directly.",
        "zh": "$Q = CV = (5.0\\times10^{-6})(20) = 1.0\\times10^{-4}\\ \\text{C} = 100\\ \\mu\\text{C}$。这直接用了电容的定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Inserting a dielectric raises a capacitor's capacitance from $4.0\\ \\mu\\text{F}$ to $20\\ \\mu\\text{F}$. Find the dielectric constant $\\kappa$.",
        "zh": "插入电介质使电容器的电容从 $4.0\\ \\mu\\text{F}$ 增大到 $20\\ \\mu\\text{F}$。求介电常数 $\\kappa$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5.00",
        "k=5",
        "kappa=5"
      ],
      "explanation": {
        "en": "$\\kappa = C_{with}/C_{without} = 20/4.0 = 5.0$. The dielectric constant is just the ratio of the two capacitances; it is dimensionless.",
        "zh": "$\\kappa = C_{\\text{有}}/C_{\\text{无}} = 20/4.0 = 5.0$。介电常数就是两个电容的比值，是无量纲量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spherical capacitor has inner radius $a = 0.050\\ \\text{m}$ and outer radius $b = 0.10\\ \\text{m}$ (vacuum). Find its capacitance in picofarads (pF).",
        "zh": "球形电容器内半径 $a = 0.050\\ \\text{m}$，外半径 $b = 0.10\\ \\text{m}$（真空）。求其电容（单位 pF）。"
      },
      "answer": "11.1",
      "accept": [
        "11.1 pF",
        "11",
        "1.11e-11",
        "1.11e-11 F",
        "11.12",
        "11.2"
      ],
      "explanation": {
        "en": "$C = \\dfrac{4\\pi\\epsilon_0\\, ab}{b-a} = (1.11\\times10^{-10})\\dfrac{(0.050)(0.10)}{0.050} = (1.11\\times10^{-10})(0.10) = 1.11\\times10^{-11}\\ \\text{F} = 11.1\\ \\text{pF}$.",
        "zh": "$C = \\dfrac{4\\pi\\epsilon_0\\, ab}{b-a} = (1.11\\times10^{-10})\\dfrac{(0.050)(0.10)}{0.050} = (1.11\\times10^{-10})(0.10) = 1.11\\times10^{-11}\\ \\text{F} = 11.1\\ \\text{pF}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The electric field in a vacuum region is $2.0\\times10^{5}\\ \\text{V/m}$. Find the energy density in $\\text{J/m}^3$ (round to 3 significant figures).",
        "zh": "真空区域中的电场为 $2.0\\times10^{5}\\ \\text{V/m}$。求能量密度（单位 $\\text{J/m}^3$，保留 3 位有效数字）。"
      },
      "answer": "0.177",
      "accept": [
        "0.18",
        "0.177 J/m^3",
        "1.77e-1",
        "0.1770",
        "0.176"
      ],
      "explanation": {
        "en": "$u = \\tfrac{1}{2}\\epsilon_0 E^2 = \\tfrac{1}{2}(8.85\\times10^{-12})(2.0\\times10^{5})^2 = 0.177\\ \\text{J/m}^3$. The dominant slip is forgetting to square the field.",
        "zh": "$u = \\tfrac{1}{2}\\epsilon_0 E^2 = \\tfrac{1}{2}(8.85\\times10^{-12})(2.0\\times10^{5})^2 = 0.177\\ \\text{J/m}^3$。最常见的失误是忘记对场强平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cylindrical capacitor has inner radius $a = 1.0\\ \\text{mm}$, outer radius $b = 3.0\\ \\text{mm}$, and length $L = 1.0\\ \\text{m}$ (vacuum). Find its capacitance in picofarads (pF), to 3 significant figures.",
        "zh": "圆柱形电容器内半径 $a = 1.0\\ \\text{mm}$，外半径 $b = 3.0\\ \\text{mm}$，长度 $L = 1.0\\ \\text{m}$（真空）。求其电容（单位 pF，保留 3 位有效数字）。"
      },
      "answer": "50.6",
      "accept": [
        "50.6 pF",
        "50.6",
        "5.06e-11",
        "5.06e-11 F",
        "50.62",
        "51"
      ],
      "explanation": {
        "en": "$C = \\dfrac{2\\pi\\epsilon_0 L}{\\ln(b/a)} = \\dfrac{(5.56\\times10^{-11})(1.0)}{\\ln(3.0)} = \\dfrac{5.56\\times10^{-11}}{1.099} = 5.06\\times10^{-11}\\ \\text{F} = 50.6\\ \\text{pF}$. Only the ratio $b/a$ matters, so the mm units cancel inside the log.",
        "zh": "$C = \\dfrac{2\\pi\\epsilon_0 L}{\\ln(b/a)} = \\dfrac{(5.56\\times10^{-11})(1.0)}{\\ln(3.0)} = \\dfrac{5.56\\times10^{-11}}{1.099} = 5.06\\times10^{-11}\\ \\text{F} = 50.6\\ \\text{pF}$。对数内只关心比值 $b/a$，故 mm 单位相消。"
      }
    }
  ],
  "electric-circuits/dc-circuits-kirchhoff": [
    {
      "type": "mc",
      "question": {
        "en": "A $12\\,\\text{V}$ battery is connected across a $4\\,\\Omega$ resistor. What current flows through the resistor?",
        "zh": "一个 $12\\,\\text{V}$ 的电池连接在一个 $4\\,\\Omega$ 电阻两端。通过该电阻的电流是多少？"
      },
      "choices": [
        "$3\\,\\text{A}$",
        "$0.33\\,\\text{A}$",
        "$48\\,\\text{A}$",
        "$8\\,\\text{A}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Ohm's law gives $I = V/R = 12/4 = 3\\,\\text{A}$. Multiplying voltage by resistance instead of dividing gives $48$, which has units of $\\text{V}\\cdot\\Omega$, not amperes.",
        "zh": "由欧姆定律 $I = V/R = 12/4 = 3\\,\\text{A}$。若把电压乘以电阻而不是相除会得到 $48$，其单位是 $\\text{V}\\cdot\\Omega$，并非安培。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $3\\,\\Omega$ resistor and a $6\\,\\Omega$ resistor are connected in series. What is their equivalent resistance?",
        "zh": "一个 $3\\,\\Omega$ 电阻和一个 $6\\,\\Omega$ 电阻串联。它们的等效电阻是多少？"
      },
      "choices": [
        "$2\\,\\Omega$",
        "$9\\,\\Omega$",
        "$18\\,\\Omega$",
        "$4.5\\,\\Omega$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Series resistances add directly: $3 + 6 = 9\\,\\Omega$. Using the reciprocal (parallel) formula would give $2\\,\\Omega$, but that rule applies only to parallel connections.",
        "zh": "串联电阻直接相加：$3 + 6 = 9\\,\\Omega$。若使用倒数（并联）公式会得到 $2\\,\\Omega$，但该规则只适用于并联。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $3\\,\\Omega$ resistor and a $6\\,\\Omega$ resistor are connected in parallel. What is their equivalent resistance?",
        "zh": "一个 $3\\,\\Omega$ 电阻和一个 $6\\,\\Omega$ 电阻并联。它们的等效电阻是多少？"
      },
      "choices": [
        "$4.5\\,\\Omega$",
        "$9\\,\\Omega$",
        "$2\\,\\Omega$",
        "$0.5\\,\\Omega$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For parallel resistors $\\frac{1}{R} = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$, so $R = 2\\,\\Omega$. Simply adding them gives $9\\,\\Omega$, which is the series result, not the parallel one.",
        "zh": "并联电阻 $\\frac{1}{R} = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$，所以 $R = 2\\,\\Omega$。直接相加得到 $9\\,\\Omega$，那是串联结果而非并联结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Kirchhoff's junction (node) rule is a direct statement of the conservation of what quantity?",
        "zh": "基尔霍夫节点（结点）定律是关于哪个量守恒的直接表述？"
      },
      "choices": [
        "Energy",
        "Momentum",
        "Voltage",
        "Electric charge"
      ],
      "answer": 3,
      "explanation": {
        "en": "The junction rule says the current entering a node equals the current leaving it, which is conservation of electric charge. Conservation of energy is what underlies the loop rule, not the junction rule.",
        "zh": "节点定律表明流入节点的电流等于流出的电流，这是电荷守恒。能量守恒是回路定律的基础，而不是节点定律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Kirchhoff's loop rule states that the sum of the potential differences around any closed loop equals what?",
        "zh": "基尔霍夫回路定律指出：沿任意闭合回路的电势差之和等于多少？"
      },
      "choices": [
        "Zero",
        "The total EMF",
        "The total current",
        "The total power"
      ],
      "answer": 0,
      "explanation": {
        "en": "Because electric potential is single-valued, returning to the start of a loop means the net change in potential is zero. Equating the sum to the total EMF forgets that resistor voltage drops are also included in that sum.",
        "zh": "由于电势是单值的，回到回路起点意味着电势的净变化为零。若把这个和等于总电动势，就忘记了电阻上的电压降也包含在该和之中。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A current of $2\\,\\text{A}$ flows through a $5\\,\\Omega$ resistor. How much power is dissipated in the resistor?",
        "zh": "$2\\,\\text{A}$ 的电流通过一个 $5\\,\\Omega$ 电阻。该电阻消耗的功率是多少？"
      },
      "choices": [
        "$10\\,\\text{W}$",
        "$20\\,\\text{W}$",
        "$2.5\\,\\text{W}$",
        "$40\\,\\text{W}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Power dissipated is $P = I^2 R = (2)^2(5) = 20\\,\\text{W}$. Using $I\\cdot R = 10$ omits the square on the current and gives volts, not watts.",
        "zh": "消耗功率 $P = I^2 R = (2)^2(5) = 20\\,\\text{W}$。若用 $I\\cdot R = 10$ 则漏掉了电流的平方，且得到的是伏特而非瓦特。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A battery has an EMF of $12\\,\\text{V}$ and internal resistance $1\\,\\Omega$. When it delivers a current of $2\\,\\text{A}$, what is its terminal voltage?",
        "zh": "一个电池的电动势为 $12\\,\\text{V}$，内阻为 $1\\,\\Omega$。当它输出 $2\\,\\text{A}$ 电流时，其端电压是多少？"
      },
      "choices": [
        "$12\\,\\text{V}$",
        "$14\\,\\text{V}$",
        "$10\\,\\text{V}$",
        "$2\\,\\text{V}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Terminal voltage is $V = \\varepsilon - Ir = 12 - (2)(1) = 10\\,\\text{V}$. Adding the $Ir$ drop instead of subtracting it gives $14\\,\\text{V}$, which would exceed the EMF and is impossible for a discharging battery.",
        "zh": "端电压 $V = \\varepsilon - Ir = 12 - (2)(1) = 10\\,\\text{V}$。若把 $Ir$ 降加上而不是减去会得到 $14\\,\\text{V}$，这超过了电动势，对放电电池是不可能的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A wire has resistance $R$. If its length is doubled while its cross-sectional area and material stay the same, its new resistance is:",
        "zh": "一根导线的电阻为 $R$。若其长度加倍，而横截面积和材料保持不变，则新的电阻是："
      },
      "choices": [
        "$4R$",
        "$R/2$",
        "$R$",
        "$2R$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $R = \\rho L / A$, resistance is proportional to length, so doubling $L$ doubles $R$. Length affects $R$ linearly, not quadratically, so it does not quadruple.",
        "zh": "由于 $R = \\rho L / A$，电阻与长度成正比，所以长度加倍则 $R$ 加倍。长度对 $R$ 是线性影响而非平方，所以不会变为四倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A resistor is connected across a battery of fixed voltage. If the resistance is doubled, the power dissipated in it:",
        "zh": "一个电阻连接在电压固定的电池两端。若电阻加倍，其消耗的功率："
      },
      "choices": [
        "Is halved",
        "Stays the same",
        "Doubles",
        "Quadruples"
      ],
      "answer": 0,
      "explanation": {
        "en": "At fixed voltage, $P = V^2/R$, so doubling $R$ halves the power. Reasoning from $P = I^2 R$ tempts one to say power rises, but the current itself falls when $R$ increases at fixed $V$.",
        "zh": "在电压固定时 $P = V^2/R$，所以 $R$ 加倍使功率减半。用 $P = I^2 R$ 推理会误以为功率上升，但在电压固定、$R$ 增大时电流本身会减小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2\\,\\Omega$ resistor is in series with a parallel combination of two $4\\,\\Omega$ resistors. What is the total equivalent resistance?",
        "zh": "一个 $2\\,\\Omega$ 电阻与两个 $4\\,\\Omega$ 电阻的并联组合串联。总等效电阻是多少？"
      },
      "choices": [
        "$10\\,\\Omega$",
        "$4\\,\\Omega$",
        "$6\\,\\Omega$",
        "$2\\,\\Omega$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The two $4\\,\\Omega$ resistors in parallel give $2\\,\\Omega$, and adding the series $2\\,\\Omega$ gives $4\\,\\Omega$. Adding all three resistors as if in series would give $10\\,\\Omega$ and ignores the parallel combination.",
        "zh": "两个 $4\\,\\Omega$ 电阻并联得到 $2\\,\\Omega$，再加上串联的 $2\\,\\Omega$ 得到 $4\\,\\Omega$。若把三个电阻当作全部串联相加会得到 $10\\,\\Omega$，忽略了并联。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A total current of $6\\,\\text{A}$ enters a parallel combination of a $2\\,\\Omega$ resistor and a $4\\,\\Omega$ resistor. How much current flows through the $2\\,\\Omega$ resistor?",
        "zh": "总电流 $6\\,\\text{A}$ 流入一个 $2\\,\\Omega$ 电阻和一个 $4\\,\\Omega$ 电阻的并联组合。通过 $2\\,\\Omega$ 电阻的电流是多少？"
      },
      "choices": [
        "$2\\,\\text{A}$",
        "$3\\,\\text{A}$",
        "$4\\,\\text{A}$",
        "$6\\,\\text{A}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Parallel branches share the same voltage, so current splits inversely with resistance: $I_{2\\Omega} = 6\\cdot\\frac{4}{2+4} = 4\\,\\text{A}$. Assuming the smaller resistor carries less current reverses the correct inverse relationship.",
        "zh": "并联支路电压相同，因此电流与电阻成反比分配：$I_{2\\Omega} = 6\\cdot\\frac{4}{2+4} = 4\\,\\text{A}$。若以为较小的电阻通过较小的电流，就把正确的反比关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When you traverse a resistor in the same direction as the current while applying the loop rule, the electric potential:",
        "zh": "在应用回路定律时，若沿电流方向经过一个电阻，电势："
      },
      "choices": [
        "Doubles",
        "Increases",
        "Stays constant",
        "Decreases"
      ],
      "answer": 3,
      "explanation": {
        "en": "Current flows from high to low potential through a resistor, so moving along the current gives a potential drop $-IR$. A potential rise across a resistor would be the sign used when moving against the current, not with it.",
        "zh": "电流在电阻中从高电势流向低电势，所以沿电流方向经过时电势下降 $-IR$。电阻上电势升高对应的是逆电流方向经过时的符号，而不是顺电流方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $9\\,\\text{V}$ battery is connected across a $3\\,\\Omega$ resistor. What is the current (in amperes) through the resistor?",
        "zh": "一个 $9\\,\\text{V}$ 电池连接在一个 $3\\,\\Omega$ 电阻两端。通过该电阻的电流（单位：安培）是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00",
        "3 A",
        "3A"
      ],
      "explanation": {
        "en": "By Ohm's law $I = V/R = 9/3 = 3\\,\\text{A}$.",
        "zh": "由欧姆定律 $I = V/R = 9/3 = 3\\,\\text{A}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two resistors, $12\\,\\Omega$ and $6\\,\\Omega$, are connected in parallel. What is their equivalent resistance (in ohms)?",
        "zh": "两个电阻 $12\\,\\Omega$ 和 $6\\,\\Omega$ 并联。它们的等效电阻（单位：欧姆）是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4.00",
        "4 ohm",
        "4 ohms",
        "4 Ω"
      ],
      "explanation": {
        "en": "For parallel resistors $\\frac{1}{R} = \\frac{1}{12} + \\frac{1}{6} = \\frac{1}{4}$, so $R = \\frac{(12)(6)}{12+6} = 4\\,\\Omega$.",
        "zh": "并联电阻 $\\frac{1}{R} = \\frac{1}{12} + \\frac{1}{6} = \\frac{1}{4}$，所以 $R = \\frac{(12)(6)}{12+6} = 4\\,\\Omega$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A voltage of $10\\,\\text{V}$ is applied across a $5\\,\\Omega$ resistor. How much power (in watts) is dissipated?",
        "zh": "$10\\,\\text{V}$ 电压加在一个 $5\\,\\Omega$ 电阻两端。消耗的功率（单位：瓦特）是多少？"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20.00",
        "20 W",
        "20W"
      ],
      "explanation": {
        "en": "Power is $P = V^2/R = 10^2/5 = 100/5 = 20\\,\\text{W}$.",
        "zh": "功率 $P = V^2/R = 10^2/5 = 100/5 = 20\\,\\text{W}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A battery of EMF $9\\,\\text{V}$ has internal resistance $0.5\\,\\Omega$ and delivers a current of $4\\,\\text{A}$. What is its terminal voltage (in volts)?",
        "zh": "一个电动势为 $9\\,\\text{V}$ 的电池内阻为 $0.5\\,\\Omega$，输出 $4\\,\\text{A}$ 电流。其端电压（单位：伏特）是多少？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "7.00",
        "7 V",
        "7V"
      ],
      "explanation": {
        "en": "Terminal voltage $V = \\varepsilon - Ir = 9 - (4)(0.5) = 9 - 2 = 7\\,\\text{V}$.",
        "zh": "端电压 $V = \\varepsilon - Ir = 9 - (4)(0.5) = 9 - 2 = 7\\,\\text{V}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At a junction, $5\\,\\text{A}$ enters. One wire leaving the junction carries $2\\,\\text{A}$. What current (in amperes) flows in the only other wire leaving the junction?",
        "zh": "在一个节点处，流入 $5\\,\\text{A}$。一条离开节点的导线带有 $2\\,\\text{A}$。离开节点的唯一另一条导线中的电流（单位：安培）是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00",
        "3 A",
        "3A"
      ],
      "explanation": {
        "en": "By the junction rule, current in equals current out: $5 = 2 + I$, so $I = 3\\,\\text{A}$.",
        "zh": "由节点定律，流入等于流出：$5 = 2 + I$，所以 $I = 3\\,\\text{A}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wire has resistivity $\\rho = 2\\times10^{-8}\\,\\Omega\\cdot\\text{m}$, length $10\\,\\text{m}$, and cross-sectional area $1\\times10^{-6}\\,\\text{m}^2$. What is its resistance (in ohms)?",
        "zh": "一根导线的电阻率 $\\rho = 2\\times10^{-8}\\,\\Omega\\cdot\\text{m}$，长度 $10\\,\\text{m}$，横截面积 $1\\times10^{-6}\\,\\text{m}^2$。其电阻（单位：欧姆）是多少？"
      },
      "answer": "0.2",
      "accept": [
        "0.20",
        ".2",
        "0.2 ohm",
        "0.2 Ω",
        "1/5"
      ],
      "explanation": {
        "en": "Resistance $R = \\rho L / A = (2\\times10^{-8})(10)/(1\\times10^{-6}) = 2\\times10^{-7}/10^{-6} = 0.2\\,\\Omega$.",
        "zh": "电阻 $R = \\rho L / A = (2\\times10^{-8})(10)/(1\\times10^{-6}) = 2\\times10^{-7}/10^{-6} = 0.2\\,\\Omega$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A single-loop circuit has a $12\\,\\text{V}$ battery in series with a $2\\,\\Omega$ resistor and a $4\\,\\Omega$ resistor. What is the current (in amperes) in the loop?",
        "zh": "一个单回路电路中，$12\\,\\text{V}$ 电池与一个 $2\\,\\Omega$ 电阻和一个 $4\\,\\Omega$ 电阻串联。回路中的电流（单位：安培）是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2.00",
        "2 A",
        "2A"
      ],
      "explanation": {
        "en": "The resistors add in series to $6\\,\\Omega$, so $I = V/R_{\\text{total}} = 12/6 = 2\\,\\text{A}$.",
        "zh": "电阻串联相加为 $6\\,\\Omega$，所以 $I = V/R_{\\text{total}} = 12/6 = 2\\,\\text{A}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the same loop (current $2\\,\\text{A}$), what is the voltage (in volts) across the $4\\,\\Omega$ resistor?",
        "zh": "在同一回路中（电流 $2\\,\\text{A}$），$4\\,\\Omega$ 电阻两端的电压（单位：伏特）是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "8.00",
        "8 V",
        "8V"
      ],
      "explanation": {
        "en": "By Ohm's law, the drop across the resistor is $V = IR = (2)(4) = 8\\,\\text{V}$.",
        "zh": "由欧姆定律，电阻上的电压降为 $V = IR = (2)(4) = 8\\,\\text{V}$。"
      }
    }
  ],
  "electric-circuits/rc-circuits": [
    {
      "type": "mc",
      "question": {
        "en": "A resistor $R = 2000\\,\\Omega$ is in series with a capacitor $C = 1\\,\\mu\\text{F}$. What is the time constant of the circuit?",
        "zh": "一个电阻 $R = 2000\\,\\Omega$ 与一个电容 $C = 1\\,\\mu\\text{F}$ 串联。该电路的时间常数是多少？"
      },
      "choices": [
        "$2\\times10^{-3}\\,\\text{s}$",
        "$2000\\,\\text{s}$",
        "$0.5\\times10^{-3}\\,\\text{s}$",
        "$2\\times10^{3}\\,\\text{s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The time constant is $\\tau = RC = (2000)(1\\times10^{-6}) = 2\\times10^{-3}\\,\\text{s}$. Forgetting to convert microfarads to farads leaves the answer off by a factor of $10^6$.",
        "zh": "时间常数 $\\tau = RC = (2000)(1\\times10^{-6}) = 2\\times10^{-3}\\,\\text{s}$。若忘记把微法转换为法拉，答案会相差 $10^6$ 倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an RC circuit, the product $RC$ has units of:",
        "zh": "在 RC 电路中，乘积 $RC$ 的单位是："
      },
      "choices": [
        "farads",
        "seconds",
        "ohms",
        "volts"
      ],
      "answer": 1,
      "explanation": {
        "en": "$RC$ has units of ohm-farad, which reduces to seconds; that is why it is called the time constant. Leaving the answer as farads or ohms keeps only one factor and ignores the product.",
        "zh": "$RC$ 的单位是欧姆·法拉，可化简为秒，这就是它被称为时间常数的原因。若答成法拉或欧姆，只保留了一个因子而忽略了乘积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An initially uncharged capacitor is connected through a resistor to a battery of EMF $\\varepsilon$. At the instant the switch closes, the current is:",
        "zh": "一个初始不带电的电容通过一个电阻连接到电动势为 $\\varepsilon$ 的电池。在开关闭合的瞬间，电流是："
      },
      "choices": [
        "$\\varepsilon R$",
        "$0$",
        "$\\varepsilon/R$",
        "$\\varepsilon C$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At $t=0$ the uncharged capacitor has zero voltage, so it behaves like a plain wire and the current is $\\varepsilon/R$. A current of zero is the final steady-state value, not the initial one.",
        "zh": "在 $t=0$ 时，不带电的电容电压为零，因此它表现得像一根导线，电流为 $\\varepsilon/R$。电流为零是最终稳态值，而非初始值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A long time after the switch closes in an RC charging circuit, the current through the resistor is:",
        "zh": "在 RC 充电电路中开关闭合很长时间后，通过电阻的电流是："
      },
      "choices": [
        "$\\varepsilon/R$",
        "$\\varepsilon C$",
        "at its maximum",
        "$0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "As $t\\rightarrow\\infty$ the capacitor is fully charged, its voltage matches the EMF, and no more current flows, so $I = 0$. The value $\\varepsilon/R$ is the initial current, which decays away with time.",
        "zh": "当 $t\\rightarrow\\infty$ 时电容充满，其电压等于电动势，不再有电流流动，所以 $I = 0$。$\\varepsilon/R$ 是初始电流，会随时间衰减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A charged capacitor discharges through a resistor. Which expression gives the charge on the capacitor as a function of time?",
        "zh": "一个充电的电容通过一个电阻放电。哪个表达式给出电容上的电荷随时间的变化？"
      },
      "choices": [
        "$q_0 e^{-t/RC}$",
        "$q_0 e^{t/RC}$",
        "$q_0(1-e^{-t/RC})$",
        "$q_0\\,t/RC$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Discharge follows exponential decay $q(t) = q_0 e^{-t/RC}$. The form $q_0(1-e^{-t/RC})$ describes charging (rising from zero), which is the opposite process.",
        "zh": "放电遵循指数衰减 $q(t) = q_0 e^{-t/RC}$。形式 $q_0(1-e^{-t/RC})$ 描述的是充电（从零上升），是相反的过程。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An initially uncharged capacitor charges through a resistor from a battery of EMF $\\varepsilon$. The charge on the capacitor as a function of time is:",
        "zh": "一个初始不带电的电容通过一个电阻从电动势为 $\\varepsilon$ 的电池充电。电容上的电荷随时间的变化是："
      },
      "choices": [
        "$C\\varepsilon\\, e^{-t/RC}$",
        "$C\\varepsilon\\,(1-e^{-t/RC})$",
        "$C\\varepsilon\\, e^{t/RC}$",
        "$\\frac{\\varepsilon}{R}e^{-t/RC}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Charging rises from zero toward the maximum $Q = C\\varepsilon$, giving $q(t) = C\\varepsilon(1-e^{-t/RC})$. The decaying form $C\\varepsilon e^{-t/RC}$ starts at the maximum and falls, which describes discharging instead.",
        "zh": "充电从零上升到最大值 $Q = C\\varepsilon$，即 $q(t) = C\\varepsilon(1-e^{-t/RC})$。衰减形式 $C\\varepsilon e^{-t/RC}$ 从最大值开始下降，描述的是放电。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After one time constant of charging, the capacitor's charge reaches approximately what fraction of its maximum value?",
        "zh": "充电经过一个时间常数后，电容的电荷大约达到其最大值的多少比例？"
      },
      "choices": [
        "37%",
        "50%",
        "63%",
        "100%"
      ],
      "answer": 2,
      "explanation": {
        "en": "At $t=\\tau$, $q = Q(1-e^{-1}) \\approx Q(0.63)$, so about 63%. The value 37% is $e^{-1}$, which is the fraction remaining during discharge, not the fraction gained during charging.",
        "zh": "在 $t=\\tau$ 时，$q = Q(1-e^{-1}) \\approx Q(0.63)$，约为 63%。37% 是 $e^{-1}$，那是放电时剩余的比例，而不是充电时获得的比例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After one time constant of discharging, the charge on the capacitor is approximately what fraction of its initial value?",
        "zh": "放电经过一个时间常数后，电容上的电荷大约是其初始值的多少比例？"
      },
      "choices": [
        "63%",
        "50%",
        "0%",
        "37%"
      ],
      "answer": 3,
      "explanation": {
        "en": "At $t=\\tau$, $q = q_0 e^{-1} \\approx 0.37\\,q_0$, about 37%. The value 63% is what has been lost, not what remains.",
        "zh": "在 $t=\\tau$ 时，$q = q_0 e^{-1} \\approx 0.37\\,q_0$，约为 37%。63% 是已经损失的部分，而不是剩余的部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A fully charged capacitor has capacitance $C$ and voltage $V$. The energy stored in it is:",
        "zh": "一个充满电的电容其电容为 $C$，电压为 $V$。它储存的能量是："
      },
      "choices": [
        "$\\frac{1}{2}CV^2$",
        "$\\frac{1}{2}CV$",
        "$CV^2$",
        "$\\frac{1}{2}C^2 V$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Stored energy is $U = \\frac{1}{2}CV^2$. Dropping the factor of $\\frac{1}{2}$ gives $CV^2$, which double-counts the energy because voltage builds up gradually as charge accumulates.",
        "zh": "储存能量 $U = \\frac{1}{2}CV^2$。若漏掉 $\\frac{1}{2}$ 得到 $CV^2$，会重复计算能量，因为电压随电荷积累而逐渐上升。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the steady state of a DC circuit (long after switching), a capacitor behaves like:",
        "zh": "在直流电路的稳态中（开关闭合很久之后），电容表现得像："
      },
      "choices": [
        "a short circuit (an ideal wire)",
        "an open circuit (no current through it)",
        "a battery",
        "a resistor of resistance $R$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Once fully charged, no current flows through the capacitor branch, so it acts as an open circuit. It behaves like a plain wire only at the first instant when it is uncharged, not in steady state.",
        "zh": "充满电后，电容支路中不再有电流，因此它表现为开路。它只有在初始不带电的瞬间才像一根导线，而非在稳态时。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "During discharge the current is $I(t) = \\frac{V_0}{R}e^{-t/RC}$. As time increases, this current:",
        "zh": "放电时电流为 $I(t) = \\frac{V_0}{R}e^{-t/RC}$。随着时间增加，该电流："
      },
      "choices": [
        "increases exponentially",
        "stays constant",
        "decreases exponentially toward zero",
        "reverses sign periodically"
      ],
      "answer": 2,
      "explanation": {
        "en": "The negative exponent means the magnitude decays exponentially toward zero as the capacitor empties. It cannot grow, since the driving voltage $V_0 e^{-t/RC}$ is itself shrinking.",
        "zh": "负指数意味着随着电容放空，电流幅度呈指数衰减趋于零。它不会增长，因为驱动电压 $V_0 e^{-t/RC}$ 本身在减小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an RC charging circuit, if the resistance $R$ is doubled while $C$ is unchanged, the time constant:",
        "zh": "在 RC 充电电路中，若电阻 $R$ 加倍而 $C$ 不变，时间常数："
      },
      "choices": [
        "halves",
        "stays the same",
        "quadruples",
        "doubles"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $\\tau = RC$ is linear in $R$, doubling $R$ doubles $\\tau$, so the capacitor charges more slowly. It does not quadruple, because $R$ appears to the first power, not squared.",
        "zh": "由于 $\\tau = RC$ 与 $R$ 成线性关系，$R$ 加倍则 $\\tau$ 加倍，电容充电变慢。它不会变为四倍，因为 $R$ 是一次方而非平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A resistor $R = 5000\\,\\Omega$ is in series with a capacitor $C = 2\\,\\mu\\text{F}$. What is the time constant (in seconds)?",
        "zh": "一个电阻 $R = 5000\\,\\Omega$ 与一个电容 $C = 2\\,\\mu\\text{F}$ 串联。时间常数（单位：秒）是多少？"
      },
      "answer": "0.01",
      "accept": [
        "0.010",
        ".01",
        "1e-2",
        "1.0e-2",
        "10 ms",
        "0.01 s"
      ],
      "explanation": {
        "en": "The time constant is $\\tau = RC = (5000)(2\\times10^{-6}) = 1\\times10^{-2} = 0.01\\,\\text{s}$.",
        "zh": "时间常数 $\\tau = RC = (5000)(2\\times10^{-6}) = 1\\times10^{-2} = 0.01\\,\\text{s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An initially uncharged capacitor is connected through a $4\\,\\Omega$ resistor to a $12\\,\\text{V}$ battery. What is the initial current (in amperes) at the instant the switch closes?",
        "zh": "一个初始不带电的电容通过一个 $4\\,\\Omega$ 电阻连接到一个 $12\\,\\text{V}$ 电池。在开关闭合瞬间的初始电流（单位：安培）是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00",
        "3 A",
        "3A"
      ],
      "explanation": {
        "en": "At $t=0$ the uncharged capacitor acts like a wire, so $I_0 = \\varepsilon/R = 12/4 = 3\\,\\text{A}$.",
        "zh": "在 $t=0$ 时不带电的电容像导线，所以 $I_0 = \\varepsilon/R = 12/4 = 3\\,\\text{A}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $3\\,\\mu\\text{F}$ capacitor is fully charged by a $6\\,\\text{V}$ battery. What is the final charge on the capacitor (in microcoulombs)?",
        "zh": "一个 $3\\,\\mu\\text{F}$ 电容被一个 $6\\,\\text{V}$ 电池充满。电容上的最终电荷（单位：微库仑）是多少？"
      },
      "answer": "18",
      "accept": [
        "18.0",
        "18.00",
        "18 uC",
        "18 μC",
        "1.8e-5",
        "1.8e-5 C"
      ],
      "explanation": {
        "en": "Final charge $Q = C\\varepsilon = (3\\,\\mu\\text{F})(6\\,\\text{V}) = 18\\,\\mu\\text{C}$.",
        "zh": "最终电荷 $Q = C\\varepsilon = (3\\,\\mu\\text{F})(6\\,\\text{V}) = 18\\,\\mu\\text{C}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $100\\,\\mu\\text{F}$ capacitor is charged to $10\\,\\text{V}$. How much energy (in millijoules) is stored in it?",
        "zh": "一个 $100\\,\\mu\\text{F}$ 电容被充电到 $10\\,\\text{V}$。它储存的能量（单位：毫焦耳）是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5.00",
        "5 mJ",
        "0.005 J",
        "5e-3 J",
        "0.005"
      ],
      "explanation": {
        "en": "Energy $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(100\\times10^{-6})(10)^2 = 5\\times10^{-3}\\,\\text{J} = 5\\,\\text{mJ}$.",
        "zh": "能量 $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(100\\times10^{-6})(10)^2 = 5\\times10^{-3}\\,\\text{J} = 5\\,\\text{mJ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many time constants must elapse for a charging capacitor to reach about 63% of its maximum charge?",
        "zh": "充电电容达到其最大电荷约 63% 需要经过多少个时间常数？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00",
        "one",
        "1 τ"
      ],
      "explanation": {
        "en": "At $t=\\tau$ (one time constant), $q = Q(1-e^{-1}) \\approx 0.63\\,Q$, so exactly one time constant is needed.",
        "zh": "在 $t=\\tau$（一个时间常数）时，$q = Q(1-e^{-1}) \\approx 0.63\\,Q$，因此正好需要一个时间常数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "During discharge, what fraction of the initial charge remains on the capacitor after exactly one time constant? Give a decimal to two places.",
        "zh": "放电时，经过正好一个时间常数后，电容上剩余的初始电荷比例是多少？请给出两位小数。"
      },
      "answer": "0.37",
      "accept": [
        "0.368",
        "0.3679",
        ".37",
        "37%",
        "e^-1",
        "0.37"
      ],
      "explanation": {
        "en": "The remaining fraction is $e^{-1} \\approx 0.37$, since $q(\\tau) = q_0 e^{-t/RC}$ with $t=\\tau=RC$.",
        "zh": "剩余比例为 $e^{-1} \\approx 0.37$，因为 $q(\\tau) = q_0 e^{-t/RC}$ 且 $t=\\tau=RC$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A capacitor charges from a $10\\,\\text{V}$ battery. What is the capacitor's voltage (in volts) after exactly one time constant? Give a decimal to two places.",
        "zh": "一个电容从 $10\\,\\text{V}$ 电池充电。经过正好一个时间常数后电容的电压（单位：伏特）是多少？请给出两位小数。"
      },
      "answer": "6.32",
      "accept": [
        "6.3",
        "6.321",
        "6.32 V",
        "6.3 V"
      ],
      "explanation": {
        "en": "The capacitor voltage is $V = \\varepsilon(1-e^{-t/RC}) = 10(1-e^{-1}) = 10(0.632) \\approx 6.32\\,\\text{V}$.",
        "zh": "电容电压 $V = \\varepsilon(1-e^{-t/RC}) = 10(1-e^{-1}) = 10(0.632) \\approx 6.32\\,\\text{V}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An RC circuit has a time constant of $0.02\\,\\text{s}$ and a resistance of $1000\\,\\Omega$. What is the capacitance (in microfarads)?",
        "zh": "一个 RC 电路的时间常数为 $0.02\\,\\text{s}$，电阻为 $1000\\,\\Omega$。电容（单位：微法）是多少？"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "20.00",
        "20 uF",
        "20 μF",
        "2e-5",
        "2e-5 F"
      ],
      "explanation": {
        "en": "From $\\tau = RC$, $C = \\tau/R = 0.02/1000 = 2\\times10^{-5}\\,\\text{F} = 20\\,\\mu\\text{F}$.",
        "zh": "由 $\\tau = RC$，$C = \\tau/R = 0.02/1000 = 2\\times10^{-5}\\,\\text{F} = 20\\,\\mu\\text{F}$。"
      }
    }
  ],
  "magnetic-fields/magnetic-forces": [
    {
      "type": "mc",
      "question": {
        "en": "A charge moves through a magnetic field. Which statement about the magnetic force on it is always true?",
        "zh": "一个电荷在磁场中运动。关于它受到的磁力，下列哪项总是成立？"
      },
      "choices": [
        "It does zero work on the charge, so the speed stays constant",
        "It always points in the direction of motion",
        "It changes the kinetic energy of the charge",
        "It is largest when the velocity is parallel to $\\vec{B}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The magnetic force $\\vec{F}=q\\vec{v}\\times\\vec{B}$ is always perpendicular to $\\vec{v}$, so $\\vec{F}\\cdot\\vec{v}=0$ and it does no work; speed (and kinetic energy) is unchanged. The tempting error is to treat it like an ordinary force that speeds the particle up along its motion, but a perpendicular force only turns the velocity.",
        "zh": "磁力 $\\vec{F}=q\\vec{v}\\times\\vec{B}$ 始终垂直于 $\\vec{v}$，因此 $\\vec{F}\\cdot\\vec{v}=0$，不做功；速率（和动能）不变。常见错误是把它当作沿运动方向使粒子加速的普通力，但垂直力只改变速度方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A positive charge moves in the $+x$ direction through a uniform field $\\vec{B}$ pointing in $+z$. In which direction is the magnetic force?",
        "zh": "一个正电荷沿 $+x$ 方向运动，穿过指向 $+z$ 的匀强磁场 $\\vec{B}$。磁力方向如何？"
      },
      "choices": [
        "$+y$",
        "$-y$",
        "$+z$",
        "$-x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\vec{F}=q\\vec{v}\\times\\vec{B}=q(\\hat{x}\\times\\hat{z})=q(-\\hat{y})$, so for positive $q$ the force is in $-y$. A common slip is to compute $\\hat{x}\\times\\hat{z}=+\\hat{y}$; the correct cyclic result is $\\hat{x}\\times\\hat{z}=-\\hat{y}$.",
        "zh": "$\\vec{F}=q\\vec{v}\\times\\vec{B}=q(\\hat{x}\\times\\hat{z})=q(-\\hat{y})$，所以对正电荷力沿 $-y$。常见错误是算成 $\\hat{x}\\times\\hat{z}=+\\hat{y}$；正确的循环结果是 $\\hat{x}\\times\\hat{z}=-\\hat{y}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle of charge $q$ and mass $m$ moves at speed $v$ perpendicular to a uniform field $B$, following a circle. What is the radius?",
        "zh": "电荷为 $q$、质量为 $m$ 的粒子以速率 $v$ 垂直于匀强磁场 $B$ 运动，作圆周运动。半径为多少？"
      },
      "choices": [
        "$r=\\dfrac{qB}{mv}$",
        "$r=\\dfrac{mvB}{q}$",
        "$r=\\dfrac{mv}{qB}$",
        "$r=\\dfrac{qvB}{m}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Setting the magnetic force equal to the centripetal force, $qvB=\\dfrac{mv^2}{r}$, gives $r=\\dfrac{mv}{qB}$. The tempting mistake is inverting the fraction to $\\dfrac{qB}{mv}$, which has the wrong dimensions for a length.",
        "zh": "令磁力等于向心力，$qvB=\\dfrac{mv^2}{r}$，得 $r=\\dfrac{mv}{qB}$。常见错误是把分式倒过来写成 $\\dfrac{qB}{mv}$，其量纲不是长度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a charged particle moving through a magnetic field, the magnitude of the force $F=qvB\\sin\\theta$ is greatest when the angle $\\theta$ between $\\vec{v}$ and $\\vec{B}$ is:",
        "zh": "对在磁场中运动的带电粒子，力的大小 $F=qvB\\sin\\theta$ 在 $\\vec{v}$ 与 $\\vec{B}$ 夹角 $\\theta$ 为多少时最大？"
      },
      "choices": [
        "$0^{\\circ}$",
        "$45^{\\circ}$",
        "$180^{\\circ}$",
        "$90^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The force scales with $\\sin\\theta$, which is maximum at $90^{\\circ}$ (velocity perpendicular to the field). A frequent error is to assume the force is largest when the velocity lines up with the field, but there $\\sin\\theta=0$ and the force vanishes.",
        "zh": "力正比于 $\\sin\\theta$，在 $90^{\\circ}$（速度垂直于磁场）时最大。常见错误是以为速度与磁场同向时力最大，但那里 $\\sin\\theta=0$，力为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A straight wire of length $L$ carries current $I$ perpendicular to a uniform field $B$. The force on the wire has magnitude:",
        "zh": "长为 $L$ 的直导线载有电流 $I$，垂直于匀强磁场 $B$。导线受力大小为："
      },
      "choices": [
        "$BIL$",
        "$\\dfrac{BI}{L}$",
        "$\\dfrac{BL}{I}$",
        "$B I L^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\vec{F}=I\\vec{L}\\times\\vec{B}$ gives $F=BIL$ when $\\vec{L}\\perp\\vec{B}$. Dividing rather than multiplying by $L$ is the common slip; more current, longer wire, and stronger field all increase the force.",
        "zh": "$\\vec{F}=I\\vec{L}\\times\\vec{B}$，当 $\\vec{L}\\perp\\vec{B}$ 时 $F=BIL$。常见错误是用 $L$ 相除而非相乘；电流越大、导线越长、磁场越强，力都越大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two long parallel wires carry current in the SAME direction. The wires:",
        "zh": "两根长平行导线沿相同方向载流。这两根导线："
      },
      "choices": [
        "Repel each other",
        "Attract each other",
        "Exert no force on each other",
        "Twist perpendicular to each other"
      ],
      "answer": 1,
      "explanation": {
        "en": "Parallel currents in the same direction attract. Each wire sits in the field of the other; applying $I\\vec{L}\\times\\vec{B}$ gives forces pointing toward each other. The common confusion borrows the electrostatic rule 'like repels like', but for currents same-direction means attraction.",
        "zh": "同向平行电流相互吸引。每根导线处于另一根产生的磁场中；用 $I\\vec{L}\\times\\vec{B}$ 得到指向彼此的力。常见混淆是套用静电的'同性相斥'，但对电流而言同向意味着吸引。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a velocity selector, crossed electric field $E$ and magnetic field $B$ let a charge pass straight through undeflected when its speed equals:",
        "zh": "在速度选择器中，正交的电场 $E$ 与磁场 $B$ 使电荷在速率等于多少时不偏转直线通过？"
      },
      "choices": [
        "$v=EB$",
        "$v=\\dfrac{B}{E}$",
        "$v=\\dfrac{E}{B}$",
        "$v=\\sqrt{EB}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Undeflected means the electric force balances the magnetic force: $qE=qvB$, so $v=\\dfrac{E}{B}$. Multiplying the fields instead of dividing is the typical error and gives the wrong units for speed.",
        "zh": "不偏转意味着电场力与磁场力平衡：$qE=qvB$，故 $v=\\dfrac{E}{B}$。常见错误是把两场相乘而非相除，得到的量纲也不是速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For circular motion in a uniform field, the cyclotron (angular) frequency $\\omega=\\dfrac{qB}{m}$ depends on:",
        "zh": "在匀强磁场中作圆周运动，回旋角频率 $\\omega=\\dfrac{qB}{m}$ 取决于："
      },
      "choices": [
        "The speed of the particle",
        "The radius of the orbit",
        "Both the speed and the radius",
        "Neither the speed nor the radius"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $\\omega=\\dfrac{qB}{m}$ contains only charge, field, and mass, it is independent of both speed and radius—faster particles just travel larger circles in the same time. The tempting idea is that a faster particle must orbit more often, but the extra path length exactly compensates.",
        "zh": "由于 $\\omega=\\dfrac{qB}{m}$ 只含电荷、磁场和质量，与速率和半径都无关——更快的粒子只是在相同时间内走更大的圆。常见错觉是速度越快转得越频繁，但更长的路径正好抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A charged particle moves exactly parallel to a uniform magnetic field. Its trajectory is:",
        "zh": "一个带电粒子恰好平行于匀强磁场运动。其轨迹是："
      },
      "choices": [
        "A straight line (no magnetic force)",
        "A circle",
        "A parabola",
        "A helix that tightens"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $\\vec{v}\\parallel\\vec{B}$, $\\sin\\theta=0$, so $\\vec{v}\\times\\vec{B}=0$ and there is no magnetic force; the particle goes straight. Assuming any motion in a field must curve is the error—only the component of velocity perpendicular to $\\vec{B}$ curves.",
        "zh": "当 $\\vec{v}\\parallel\\vec{B}$ 时 $\\sin\\theta=0$，故 $\\vec{v}\\times\\vec{B}=0$，无磁力，粒子沿直线运动。以为在磁场中运动必然弯曲是错误的——只有垂直于 $\\vec{B}$ 的速度分量才会弯曲。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The SI unit of magnetic field, the tesla, is equivalent to:",
        "zh": "磁场的国际单位特斯拉等价于："
      },
      "choices": [
        "$\\dfrac{\\mathrm{C}}{\\mathrm{m}}$",
        "$\\dfrac{\\mathrm{N}}{\\mathrm{A}\\cdot\\mathrm{m}}$",
        "$\\dfrac{\\mathrm{J}}{\\mathrm{C}}$",
        "$\\dfrac{\\mathrm{N}}{\\mathrm{C}}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $F=BIL$, $B=\\dfrac{F}{IL}$ has units $\\dfrac{\\mathrm{N}}{\\mathrm{A}\\cdot\\mathrm{m}}$. The choice $\\dfrac{\\mathrm{N}}{\\mathrm{C}}$ is the unit of electric field, not magnetic field—a frequent mix-up.",
        "zh": "由 $F=BIL$，$B=\\dfrac{F}{IL}$ 的单位为 $\\dfrac{\\mathrm{N}}{\\mathrm{A}\\cdot\\mathrm{m}}$。$\\dfrac{\\mathrm{N}}{\\mathrm{C}}$ 是电场的单位而非磁场，属常见混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An electron and a proton enter the same uniform field with the same velocity, perpendicular to $\\vec{B}$. Compared with the proton, the electron's circular path is:",
        "zh": "一个电子和一个质子以相同速度垂直于 $\\vec{B}$ 进入同一匀强磁场。与质子相比，电子的圆形轨迹："
      },
      "choices": [
        "Much larger, because it is lighter",
        "The same size",
        "Much smaller, because $r=\\dfrac{mv}{qB}$ and its mass is far smaller",
        "Undefined, because electrons do not orbit"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $r=\\dfrac{mv}{qB}$ and the electron's mass is about $1/1836$ of the proton's (charge magnitudes equal), its radius is far smaller. The tempting idea that 'lighter means bigger orbit' inverts the direct proportionality of $r$ to $m$.",
        "zh": "由 $r=\\dfrac{mv}{qB}$，电子质量约为质子的 $1/1836$（电荷大小相同），故半径小得多。'越轻轨道越大'的想法把 $r$ 与 $m$ 的正比关系搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A negative charge moves in the $+x$ direction in a field $\\vec{B}$ pointing in $+y$. The magnetic force on it points in:",
        "zh": "一个负电荷沿 $+x$ 方向运动，磁场 $\\vec{B}$ 指向 $+y$。它受到的磁力方向为："
      },
      "choices": [
        "$+z$",
        "$-x$",
        "$+y$",
        "$-z$"
      ],
      "answer": 3,
      "explanation": {
        "en": "For a positive charge $\\hat{x}\\times\\hat{y}=+\\hat{z}$, but the charge is negative, so the force flips to $-z$. Forgetting the sign of $q$ and leaving the answer at $+z$ is the classic error.",
        "zh": "对正电荷 $\\hat{x}\\times\\hat{y}=+\\hat{z}$，但此电荷为负，力反向为 $-z$。忽略 $q$ 的符号而把答案留在 $+z$ 是典型错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A charge $q=3.0\\times10^{-6}\\,\\mathrm{C}$ moves at $v=4.0\\times10^{5}\\,\\mathrm{m/s}$ perpendicular to a field $B=0.20\\,\\mathrm{T}$. Find the magnetic force in newtons.",
        "zh": "电荷 $q=3.0\\times10^{-6}\\,\\mathrm{C}$ 以 $v=4.0\\times10^{5}\\,\\mathrm{m/s}$ 垂直于磁场 $B=0.20\\,\\mathrm{T}$ 运动。求磁力（牛顿）。"
      },
      "answer": "0.24",
      "accept": [
        "0.24 N",
        "0.240",
        ".24",
        "0.24N",
        "2.4e-1"
      ],
      "explanation": {
        "en": "$F=qvB=(3.0\\times10^{-6})(4.0\\times10^{5})(0.20)=0.24\\,\\mathrm{N}$. Perpendicular motion means $\\sin\\theta=1$, so no angle factor is needed.",
        "zh": "$F=qvB=(3.0\\times10^{-6})(4.0\\times10^{5})(0.20)=0.24\\,\\mathrm{N}$。垂直运动时 $\\sin\\theta=1$，无需角度因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A proton ($m=1.67\\times10^{-27}\\,\\mathrm{kg}$, $q=1.6\\times10^{-19}\\,\\mathrm{C}$) moves at $v=2.0\\times10^{6}\\,\\mathrm{m/s}$ perpendicular to $B=0.50\\,\\mathrm{T}$. Find the radius of its circular path in meters (2 sig figs).",
        "zh": "质子（$m=1.67\\times10^{-27}\\,\\mathrm{kg}$，$q=1.6\\times10^{-19}\\,\\mathrm{C}$）以 $v=2.0\\times10^{6}\\,\\mathrm{m/s}$ 垂直于 $B=0.50\\,\\mathrm{T}$ 运动。求其圆形轨迹半径（米，2 位有效数字）。"
      },
      "answer": "0.042",
      "accept": [
        "0.042 m",
        "0.0418",
        "0.04",
        "4.2e-2",
        "0.042m",
        "0.0417"
      ],
      "explanation": {
        "en": "$r=\\dfrac{mv}{qB}=\\dfrac{(1.67\\times10^{-27})(2.0\\times10^{6})}{(1.6\\times10^{-19})(0.50)}=0.042\\,\\mathrm{m}$. Inverting the fraction gives a wildly wrong (and dimensionally wrong) value.",
        "zh": "$r=\\dfrac{mv}{qB}=\\dfrac{(1.67\\times10^{-27})(2.0\\times10^{6})}{(1.6\\times10^{-19})(0.50)}=0.042\\,\\mathrm{m}$。把分式倒过来会得到量纲都不对的荒谬结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A straight wire of length $L=0.40\\,\\mathrm{m}$ carries $I=5.0\\,\\mathrm{A}$ perpendicular to a field $B=0.30\\,\\mathrm{T}$. Find the force on the wire in newtons.",
        "zh": "长 $L=0.40\\,\\mathrm{m}$ 的直导线载有 $I=5.0\\,\\mathrm{A}$，垂直于磁场 $B=0.30\\,\\mathrm{T}$。求导线所受力（牛顿）。"
      },
      "answer": "0.60",
      "accept": [
        "0.6",
        "0.60 N",
        ".6",
        "0.6N",
        "6.0e-1"
      ],
      "explanation": {
        "en": "$F=BIL=(0.30)(5.0)(0.40)=0.60\\,\\mathrm{N}$. All three factors multiply; dividing by $L$ would be incorrect.",
        "zh": "$F=BIL=(0.30)(5.0)(0.40)=0.60\\,\\mathrm{N}$。三个因子相乘；用 $L$ 相除是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A proton ($m=1.67\\times10^{-27}\\,\\mathrm{kg}$, $q=1.6\\times10^{-19}\\,\\mathrm{C}$) circulates in $B=0.25\\,\\mathrm{T}$. Find the period of its orbit in seconds (2 sig figs).",
        "zh": "质子（$m=1.67\\times10^{-27}\\,\\mathrm{kg}$，$q=1.6\\times10^{-19}\\,\\mathrm{C}$）在 $B=0.25\\,\\mathrm{T}$ 中回旋。求其周期（秒，2 位有效数字）。"
      },
      "answer": "2.6e-7",
      "accept": [
        "2.6e-7 s",
        "2.62e-7",
        "0.00000026",
        "2.6E-7",
        "2.62e-7 s",
        "2.6e-7s"
      ],
      "explanation": {
        "en": "$T=\\dfrac{2\\pi m}{qB}=\\dfrac{2\\pi(1.67\\times10^{-27})}{(1.6\\times10^{-19})(0.25)}=2.6\\times10^{-7}\\,\\mathrm{s}$. The period is independent of speed, a hallmark of cyclotron motion.",
        "zh": "$T=\\dfrac{2\\pi m}{qB}=\\dfrac{2\\pi(1.67\\times10^{-27})}{(1.6\\times10^{-19})(0.25)}=2.6\\times10^{-7}\\,\\mathrm{s}$。周期与速率无关，是回旋运动的特征。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a velocity selector, $E=3000\\,\\mathrm{V/m}$ and $B=0.010\\,\\mathrm{T}$. What speed passes undeflected, in m/s?",
        "zh": "速度选择器中 $E=3000\\,\\mathrm{V/m}$，$B=0.010\\,\\mathrm{T}$。以多少 m/s 的速率可不偏转通过？"
      },
      "answer": "3.0e5",
      "accept": [
        "3e5",
        "300000",
        "3.0e5 m/s",
        "3.0x10^5",
        "3.0E5",
        "3e5 m/s"
      ],
      "explanation": {
        "en": "$v=\\dfrac{E}{B}=\\dfrac{3000}{0.010}=3.0\\times10^{5}\\,\\mathrm{m/s}$. Multiplying the fields instead of dividing gives a value that is not a speed.",
        "zh": "$v=\\dfrac{E}{B}=\\dfrac{3000}{0.010}=3.0\\times10^{5}\\,\\mathrm{m/s}$。把两场相乘而非相除得到的不是速率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two long parallel wires $d=0.050\\,\\mathrm{m}$ apart each carry $I=10\\,\\mathrm{A}$. Using $\\mu_0=4\\pi\\times10^{-7}$, find the force per unit length in N/m.",
        "zh": "两根相距 $d=0.050\\,\\mathrm{m}$ 的长平行导线各载 $I=10\\,\\mathrm{A}$。用 $\\mu_0=4\\pi\\times10^{-7}$，求单位长度上的力（N/m）。"
      },
      "answer": "4.0e-4",
      "accept": [
        "4e-4",
        "0.0004",
        "4.0e-4 N/m",
        "4.0E-4",
        "4e-4 N/m",
        "0.00040"
      ],
      "explanation": {
        "en": "$\\dfrac{F}{L}=\\dfrac{\\mu_0 I_1 I_2}{2\\pi d}=\\dfrac{(4\\pi\\times10^{-7})(10)(10)}{2\\pi(0.050)}=4.0\\times10^{-4}\\,\\mathrm{N/m}$. Forgetting the $2\\pi$ in the denominator doubles the result incorrectly.",
        "zh": "$\\dfrac{F}{L}=\\dfrac{\\mu_0 I_1 I_2}{2\\pi d}=\\dfrac{(4\\pi\\times10^{-7})(10)(10)}{2\\pi(0.050)}=4.0\\times10^{-4}\\,\\mathrm{N/m}$。漏掉分母的 $2\\pi$ 会错误地使结果翻倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A charge $q=1.6\\times10^{-19}\\,\\mathrm{C}$ moves at $v=1.0\\times10^{6}\\,\\mathrm{m/s}$ at $30^{\\circ}$ to a field $B=0.40\\,\\mathrm{T}$. Find the magnetic force in newtons.",
        "zh": "电荷 $q=1.6\\times10^{-19}\\,\\mathrm{C}$ 以 $v=1.0\\times10^{6}\\,\\mathrm{m/s}$ 与磁场 $B=0.40\\,\\mathrm{T}$ 成 $30^{\\circ}$ 运动。求磁力（牛顿）。"
      },
      "answer": "3.2e-14",
      "accept": [
        "3.2e-14 N",
        "3.2E-14",
        "3.2e-14N",
        "0.000000000000032"
      ],
      "explanation": {
        "en": "$F=qvB\\sin\\theta=(1.6\\times10^{-19})(1.0\\times10^{6})(0.40)\\sin 30^{\\circ}=(6.4\\times10^{-14})(0.5)=3.2\\times10^{-14}\\,\\mathrm{N}$. Dropping the $\\sin\\theta$ factor overstates the force by a factor of two here.",
        "zh": "$F=qvB\\sin\\theta=(1.6\\times10^{-19})(1.0\\times10^{6})(0.40)\\sin 30^{\\circ}=(6.4\\times10^{-14})(0.5)=3.2\\times10^{-14}\\,\\mathrm{N}$。漏掉 $\\sin\\theta$ 因子会把力高估一倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A charge is carried once around a closed loop while a magnetic force acts on it. How much work (in joules) does the magnetic force do?",
        "zh": "一个电荷在磁力作用下绕闭合回路运动一周。磁力做的功（焦耳）是多少？"
      },
      "answer": "0",
      "accept": [
        "0 J",
        "0.0",
        "zero",
        "0J",
        "0.00"
      ],
      "explanation": {
        "en": "The magnetic force is always perpendicular to the velocity, so $\\vec{F}\\cdot\\vec{v}=0$ at every instant and the work is $0\\,\\mathrm{J}$—regardless of the path. Assuming a nonzero force must do work is the trap.",
        "zh": "磁力始终垂直于速度，任一时刻 $\\vec{F}\\cdot\\vec{v}=0$，做功为 $0\\,\\mathrm{J}$——与路径无关。以为非零的力必然做功是陷阱。"
      }
    }
  ],
  "magnetic-fields/biot-savart-ampere": [
    {
      "type": "mc",
      "question": {
        "en": "The Biot-Savart law gives the field contribution of a current element as:",
        "zh": "Biot-Savart 定律给出电流元产生的磁场贡献为："
      },
      "choices": [
        "$d\\vec{B}=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}$",
        "$d\\vec{B}=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\vec{l}\\times\\hat{r}}{r}$",
        "$d\\vec{B}=\\dfrac{\\mu_0}{2\\pi}\\dfrac{I\\,d\\vec{l}}{r^2}$",
        "$d\\vec{B}=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\vec{l}\\cdot\\hat{r}}{r^2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Biot-Savart is $d\\vec{B}=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}$: an inverse-square law with a cross product. Writing a dot product instead of a cross product is a common slip and would give a scalar, not a field vector; using $r$ instead of $r^2$ loses the inverse-square dependence.",
        "zh": "Biot-Savart 定律为 $d\\vec{B}=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}$：平方反比且含叉乘。写成点乘是常见错误，会得到标量而非矢量；用 $r$ 代替 $r^2$ 则丢失平方反比关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The magnetic field a distance $r$ from a long straight wire carrying current $I$ is:",
        "zh": "距载流 $I$ 的长直导线 $r$ 处的磁场为："
      },
      "choices": [
        "$B=\\dfrac{\\mu_0 I}{2R}$",
        "$B=\\dfrac{\\mu_0 I}{2\\pi r}$",
        "$B=\\dfrac{\\mu_0 I}{4\\pi r^2}$",
        "$B=\\mu_0 n I$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Applying Ampère's law to a circular loop of radius $r$, $\\oint\\vec{B}\\cdot d\\vec{l}=B(2\\pi r)=\\mu_0 I$, gives $B=\\dfrac{\\mu_0 I}{2\\pi r}$ (falls off as $1/r$). The $1/r^2$ form confuses a single element's Biot-Savart contribution with the total field of the whole infinite wire.",
        "zh": "对半径 $r$ 的圆形回路用 Ampère 定律，$\\oint\\vec{B}\\cdot d\\vec{l}=B(2\\pi r)=\\mu_0 I$，得 $B=\\dfrac{\\mu_0 I}{2\\pi r}$（按 $1/r$ 衰减）。$1/r^2$ 的形式把单个电流元的 Biot-Savart 贡献误当作整根无限长导线的总场。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ampère's law states that:",
        "zh": "Ampère 定律表述为："
      },
      "choices": [
        "$\\oint\\vec{B}\\cdot d\\vec{l}=\\dfrac{Q_{enc}}{\\varepsilon_0}$",
        "$\\oint\\vec{B}\\cdot d\\vec{A}=\\mu_0 I_{enc}$",
        "$\\oint\\vec{B}\\cdot d\\vec{l}=\\mu_0 I_{enc}$",
        "$\\oint\\vec{B}\\cdot d\\vec{l}=0$ always"
      ],
      "answer": 2,
      "explanation": {
        "en": "Ampère's law relates the line integral of $\\vec{B}$ around a closed loop to the enclosed current: $\\oint\\vec{B}\\cdot d\\vec{l}=\\mu_0 I_{enc}$. Replacing $d\\vec{l}$ with $d\\vec{A}$ borrows the surface integral of Gauss's law, which is the wrong construction here.",
        "zh": "Ampère 定律把 $\\vec{B}$ 沿闭合回路的线积分与所包围的电流联系起来：$\\oint\\vec{B}\\cdot d\\vec{l}=\\mu_0 I_{enc}$。把 $d\\vec{l}$ 换成 $d\\vec{A}$ 借用了高斯定律的面积分，在此是错误的构造。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Inside a long ideal solenoid with $n$ turns per unit length carrying current $I$, the field is:",
        "zh": "在每单位长度 $n$ 匝、载流 $I$ 的长理想螺线管内部，磁场为："
      },
      "choices": [
        "$B=\\dfrac{\\mu_0 I}{2\\pi r}$, decreasing with radius",
        "$B=\\mu_0 n I r$",
        "$B=\\dfrac{\\mu_0 n I}{2}$",
        "$B=\\mu_0 n I$, uniform and independent of position"
      ],
      "answer": 3,
      "explanation": {
        "en": "A rectangular Amperian loop gives $B=\\mu_0 n I$, uniform across the interior and independent of radial position. Expecting the field to drop with distance from the axis confuses the solenoid with a single straight wire.",
        "zh": "用矩形安培回路得到 $B=\\mu_0 n I$，在内部均匀且与径向位置无关。以为场随离轴距离减小，是把螺线管与单根直导线混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The magnetic field at the center of a circular loop of radius $R$ carrying current $I$ is:",
        "zh": "半径 $R$、载流 $I$ 的圆环中心处磁场为："
      },
      "choices": [
        "$B=\\dfrac{\\mu_0 I}{2R}$",
        "$B=\\dfrac{\\mu_0 I}{4\\pi R}$",
        "$B=\\dfrac{\\mu_0 I}{2\\pi R}$",
        "$B=\\dfrac{\\mu_0 I R}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrating Biot-Savart around the ring (every element is a distance $R$ away with $d\\vec{l}\\perp\\hat{r}$) gives $B=\\dfrac{\\mu_0 I}{2R}$. The form with $2\\pi R$ is the straight-wire result and does not include the geometric factor from summing all elements of the loop.",
        "zh": "对圆环积分 Biot-Savart（每个电流元距中心均为 $R$ 且 $d\\vec{l}\\perp\\hat{r}$）得 $B=\\dfrac{\\mu_0 I}{2R}$。含 $2\\pi R$ 的形式是直导线结果，未包含对圆环所有电流元求和产生的几何因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a long cylindrical wire of radius $R$ carrying uniformly distributed current $I$, the field at radius $r<R$ (inside the wire) is:",
        "zh": "半径 $R$、电流 $I$ 均匀分布的长圆柱导线，在 $r<R$（导线内部）处的磁场为："
      },
      "choices": [
        "Proportional to $1/r$: $B=\\dfrac{\\mu_0 I}{2\\pi r}$",
        "Proportional to $r$: $B=\\dfrac{\\mu_0 I r}{2\\pi R^2}$",
        "Zero everywhere inside",
        "Constant, equal to $\\dfrac{\\mu_0 I}{2\\pi R}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The enclosed current grows as $I_{enc}=I\\dfrac{r^2}{R^2}$, so $\\oint\\vec{B}\\cdot d\\vec{l}=B(2\\pi r)=\\mu_0 I\\dfrac{r^2}{R^2}$ gives $B=\\dfrac{\\mu_0 I r}{2\\pi R^2}$—linear in $r$. Using the full current $I$ inside (the outside formula) ignores that only part of the current is enclosed.",
        "zh": "所包围电流按 $I_{enc}=I\\dfrac{r^2}{R^2}$ 增长，故 $\\oint\\vec{B}\\cdot d\\vec{l}=B(2\\pi r)=\\mu_0 I\\dfrac{r^2}{R^2}$，得 $B=\\dfrac{\\mu_0 I r}{2\\pi R^2}$——与 $r$ 成正比。在内部用全电流 $I$（外部公式）忽略了只有部分电流被包围。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Ampère's law is always valid, but it is only PRACTICAL for computing $\\vec{B}$ when the configuration has:",
        "zh": "Ampère 定律总是成立，但只有当结构具有下列特征时才便于计算 $\\vec{B}$："
      },
      "choices": [
        "A time-varying current",
        "Low symmetry",
        "High symmetry, so $B$ is constant along the chosen loop",
        "Zero net enclosed current"
      ],
      "answer": 2,
      "explanation": {
        "en": "Ampère's law lets you pull $B$ out of the integral only when symmetry makes $B$ constant (and parallel to $d\\vec{l}$) along the loop, as for infinite wires, solenoids, and toroids. Without symmetry the law still holds but cannot be solved for $B$ directly, which is the point students often miss.",
        "zh": "只有当对称性使 $B$ 在回路上恒定（且与 $d\\vec{l}$ 平行）时，才能把 $B$ 提出积分，如无限长导线、螺线管和环形螺线管。缺乏对称性时定律仍成立但无法直接解出 $B$，这是学生常忽略之处。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Looking along the direction of conventional current in a straight wire, the magnetic field lines:",
        "zh": "沿直导线中常规电流方向看去，磁感线："
      },
      "choices": [
        "Point radially outward from the wire",
        "Are parallel to the wire",
        "Point radially inward toward the wire",
        "Form circles around the wire, clockwise as seen looking along the current"
      ],
      "answer": 3,
      "explanation": {
        "en": "By the right-hand rule (thumb along $I$, fingers curl), the field forms concentric circles; looking in the direction the current flows, they circulate clockwise. Treating $\\vec{B}$ as radial like an electric field from a line charge is the classic mistake—magnetic field lines are closed loops.",
        "zh": "由右手定则（拇指沿 $I$，四指弯曲），磁场形成同心圆；沿电流流向看去为顺时针。把 $\\vec{B}$ 当作像线电荷电场那样呈辐射状是典型错误——磁感线是闭合的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Far from a small current loop, along its axis, the field magnitude falls off as:",
        "zh": "在小电流环轴线上远处，磁场大小按下列方式衰减："
      },
      "choices": [
        "$1/z^3$",
        "$1/z^2$",
        "$1/z$",
        "It stays constant"
      ],
      "answer": 0,
      "explanation": {
        "en": "On the axis $B=\\dfrac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$; for $z\\gg R$ this becomes $\\propto 1/z^3$, the magnetic-dipole falloff. Guessing $1/z^2$ borrows the point-charge electric-field scaling, which does not apply to a dipole.",
        "zh": "轴上 $B=\\dfrac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$；当 $z\\gg R$ 时变为 $\\propto 1/z^3$，即磁偶极子衰减。猜 $1/z^2$ 借用了点电荷电场的规律，对偶极子并不适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an ideal toroid with $N$ turns carrying current $I$, the magnetic field:",
        "zh": "对于载流 $I$、共 $N$ 匝的理想环形螺线管，磁场："
      },
      "choices": [
        "Is uniform everywhere, $B=\\mu_0 N I$",
        "Is $B=\\dfrac{\\mu_0 N I}{2\\pi r}$ inside and zero outside",
        "Is $B=\\dfrac{\\mu_0 N I}{2R}$ everywhere",
        "Is zero inside and nonzero outside"
      ],
      "answer": 1,
      "explanation": {
        "en": "An Amperian circle of radius $r$ inside the toroid encloses all $N$ turns: $B(2\\pi r)=\\mu_0 N I$, so $B=\\dfrac{\\mu_0 N I}{2\\pi r}$; outside, the enclosed current is zero, so $B=0$. Thinking the field leaks outside like a bar magnet ignores that an Amperian loop outside encloses no net current.",
        "zh": "环内半径 $r$ 的安培圆包围全部 $N$ 匝：$B(2\\pi r)=\\mu_0 N I$，故 $B=\\dfrac{\\mu_0 N I}{2\\pi r}$；环外所包围电流为零，故 $B=0$。以为磁场像条形磁铁那样泄漏到外部，忽略了外部安培回路不包围净电流。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the on-axis loop formula $B=\\dfrac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$, setting $z=0$ correctly reduces to:",
        "zh": "在轴上圆环公式 $B=\\dfrac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$ 中，令 $z=0$ 正确地化简为："
      },
      "choices": [
        "$\\dfrac{\\mu_0 I}{2\\pi R}$",
        "$\\dfrac{\\mu_0 I R^2}{2}$",
        "$\\dfrac{\\mu_0 I}{2R}$",
        "$0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At $z=0$, $(R^2)^{3/2}=R^3$, so $B=\\dfrac{\\mu_0 I R^2}{2R^3}=\\dfrac{\\mu_0 I}{2R}$, matching the center-of-loop result. Cancelling only one power of $R$ instead of computing $R^3$ leaves an $R^2$ where it does not belong.",
        "zh": "当 $z=0$ 时 $(R^2)^{3/2}=R^3$，故 $B=\\dfrac{\\mu_0 I R^2}{2R^3}=\\dfrac{\\mu_0 I}{2R}$，与圆环中心结果一致。只约掉一个 $R$ 而未算出 $R^3$，会多留一个不该有的 $R^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the Biot-Savart integral, a current element $d\\vec{l}$ that points directly along $\\hat{r}$ toward the field point contributes:",
        "zh": "在 Biot-Savart 积分中，方向恰好沿 $\\hat{r}$ 指向场点的电流元 $d\\vec{l}$ 的贡献为："
      },
      "choices": [
        "A maximum contribution",
        "An infinite contribution",
        "A contribution along $d\\vec{l}$",
        "Zero, because $d\\vec{l}\\times\\hat{r}=0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The cross product $d\\vec{l}\\times\\hat{r}$ vanishes when $d\\vec{l}\\parallel\\hat{r}$ ($\\sin 0=0$), so such an element adds nothing to $\\vec{B}$. Assuming every element contributes maximally ignores the angular ($\\sin\\theta$) factor built into the cross product.",
        "zh": "当 $d\\vec{l}\\parallel\\hat{r}$ 时叉乘 $d\\vec{l}\\times\\hat{r}=0$（$\\sin 0=0$），故该电流元对 $\\vec{B}$ 无贡献。以为每个电流元都贡献最大，忽略了叉乘中的角度（$\\sin\\theta$）因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A long straight wire carries $I=10\\,\\mathrm{A}$. Using $\\mu_0=4\\pi\\times10^{-7}$, find the field at $r=0.050\\,\\mathrm{m}$ in tesla.",
        "zh": "一根长直导线载有 $I=10\\,\\mathrm{A}$。用 $\\mu_0=4\\pi\\times10^{-7}$，求 $r=0.050\\,\\mathrm{m}$ 处的磁场（特斯拉）。"
      },
      "answer": "4.0e-5",
      "accept": [
        "4e-5",
        "0.00004",
        "4.0e-5 T",
        "4.0E-5",
        "4e-5 T",
        "0.000040"
      ],
      "explanation": {
        "en": "$B=\\dfrac{\\mu_0 I}{2\\pi r}=\\dfrac{(4\\pi\\times10^{-7})(10)}{2\\pi(0.050)}=4.0\\times10^{-5}\\,\\mathrm{T}$. Note $\\dfrac{\\mu_0}{2\\pi}=2\\times10^{-7}$; using $\\dfrac{\\mu_0}{4\\pi}$ here would halve the answer incorrectly.",
        "zh": "$B=\\dfrac{\\mu_0 I}{2\\pi r}=\\dfrac{(4\\pi\\times10^{-7})(10)}{2\\pi(0.050)}=4.0\\times10^{-5}\\,\\mathrm{T}$。注意 $\\dfrac{\\mu_0}{2\\pi}=2\\times10^{-7}$；此处误用 $\\dfrac{\\mu_0}{4\\pi}$ 会把答案错误地减半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circular loop of radius $R=0.10\\,\\mathrm{m}$ carries $I=3.0\\,\\mathrm{A}$. Find the field at its center in tesla (2 sig figs).",
        "zh": "半径 $R=0.10\\,\\mathrm{m}$ 的圆环载有 $I=3.0\\,\\mathrm{A}$。求其中心处磁场（特斯拉，2 位有效数字）。"
      },
      "answer": "1.9e-5",
      "accept": [
        "1.9e-5 T",
        "1.88e-5",
        "1.9E-5",
        "0.0000188",
        "1.885e-5",
        "1.9e-5T"
      ],
      "explanation": {
        "en": "$B=\\dfrac{\\mu_0 I}{2R}=\\dfrac{(4\\pi\\times10^{-7})(3.0)}{2(0.10)}=1.9\\times10^{-5}\\,\\mathrm{T}$. Using $2\\pi R$ (the straight-wire denominator) instead of $2R$ would shrink the result by a factor of $\\pi$.",
        "zh": "$B=\\dfrac{\\mu_0 I}{2R}=\\dfrac{(4\\pi\\times10^{-7})(3.0)}{2(0.10)}=1.9\\times10^{-5}\\,\\mathrm{T}$。用 $2\\pi R$（直导线的分母）代替 $2R$ 会把结果缩小 $\\pi$ 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solenoid has $N=1000$ turns over a length $L=0.50\\,\\mathrm{m}$ and carries $I=2.0\\,\\mathrm{A}$. Find the interior field in tesla (2 sig figs).",
        "zh": "一个螺线管在长 $L=0.50\\,\\mathrm{m}$ 上有 $N=1000$ 匝，载有 $I=2.0\\,\\mathrm{A}$。求内部磁场（特斯拉，2 位有效数字）。"
      },
      "answer": "5.0e-3",
      "accept": [
        "5e-3",
        "0.005",
        "5.0e-3 T",
        "5.0E-3",
        "5.03e-3",
        "5e-3 T"
      ],
      "explanation": {
        "en": "$n=\\dfrac{N}{L}=\\dfrac{1000}{0.50}=2000\\,\\mathrm{m^{-1}}$, so $B=\\mu_0 n I=(4\\pi\\times10^{-7})(2000)(2.0)=5.0\\times10^{-3}\\,\\mathrm{T}$. Forgetting to divide $N$ by $L$ (using $N$ as if it were turns per meter) is the common error.",
        "zh": "$n=\\dfrac{N}{L}=\\dfrac{1000}{0.50}=2000\\,\\mathrm{m^{-1}}$，故 $B=\\mu_0 n I=(4\\pi\\times10^{-7})(2000)(2.0)=5.0\\times10^{-3}\\,\\mathrm{T}$。忘记用 $L$ 除 $N$（把 $N$ 当作每米匝数）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An Amperian loop encloses a net current of $I_{enc}=4.0\\,\\mathrm{A}$. Using $\\mu_0=4\\pi\\times10^{-7}$, evaluate $\\oint\\vec{B}\\cdot d\\vec{l}$ in $\\mathrm{T\\cdot m}$.",
        "zh": "一个安培回路包围净电流 $I_{enc}=4.0\\,\\mathrm{A}$。用 $\\mu_0=4\\pi\\times10^{-7}$，求 $\\oint\\vec{B}\\cdot d\\vec{l}$（$\\mathrm{T\\cdot m}$）。"
      },
      "answer": "5.0e-6",
      "accept": [
        "5e-6",
        "0.000005",
        "5.0e-6 T*m",
        "5.0E-6",
        "5.03e-6",
        "5e-6 Tm"
      ],
      "explanation": {
        "en": "$\\oint\\vec{B}\\cdot d\\vec{l}=\\mu_0 I_{enc}=(4\\pi\\times10^{-7})(4.0)=5.0\\times10^{-6}\\,\\mathrm{T\\cdot m}$. The value depends only on the enclosed current, not on the loop's shape or size.",
        "zh": "$\\oint\\vec{B}\\cdot d\\vec{l}=\\mu_0 I_{enc}=(4\\pi\\times10^{-7})(4.0)=5.0\\times10^{-6}\\,\\mathrm{T\\cdot m}$。其值只取决于所包围的电流，与回路形状或大小无关。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cylindrical wire of radius $R=2.0\\,\\mathrm{mm}$ carries $I=6.0\\,\\mathrm{A}$ uniformly. Find $B$ at $r=1.0\\,\\mathrm{mm}$ (inside) in tesla.",
        "zh": "半径 $R=2.0\\,\\mathrm{mm}$ 的圆柱导线均匀载有 $I=6.0\\,\\mathrm{A}$。求 $r=1.0\\,\\mathrm{mm}$（内部）处的 $B$（特斯拉）。"
      },
      "answer": "3.0e-4",
      "accept": [
        "3e-4",
        "0.0003",
        "3.0e-4 T",
        "3.0E-4",
        "3e-4 T",
        "0.00030"
      ],
      "explanation": {
        "en": "$B=\\dfrac{\\mu_0 I r}{2\\pi R^2}=\\dfrac{(4\\pi\\times10^{-7})(6.0)(0.0010)}{2\\pi(0.0020)^2}=3.0\\times10^{-4}\\,\\mathrm{T}$. Only the fraction $r^2/R^2$ of the current is enclosed; using the full current would overstate $B$.",
        "zh": "$B=\\dfrac{\\mu_0 I r}{2\\pi R^2}=\\dfrac{(4\\pi\\times10^{-7})(6.0)(0.0010)}{2\\pi(0.0020)^2}=3.0\\times10^{-4}\\,\\mathrm{T}$。只有电流的 $r^2/R^2$ 部分被包围；用全电流会高估 $B$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A loop of radius $R=0.030\\,\\mathrm{m}$ carries $I=5.0\\,\\mathrm{A}$. Find the on-axis field at $z=0.040\\,\\mathrm{m}$ in tesla (2 sig figs).",
        "zh": "半径 $R=0.030\\,\\mathrm{m}$ 的圆环载有 $I=5.0\\,\\mathrm{A}$。求轴上 $z=0.040\\,\\mathrm{m}$ 处的磁场（特斯拉，2 位有效数字）。"
      },
      "answer": "2.3e-5",
      "accept": [
        "2.3e-5 T",
        "2.26e-5",
        "2.3E-5",
        "0.0000226",
        "2.26e-5 T",
        "2.3e-5T"
      ],
      "explanation": {
        "en": "$B=\\dfrac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$; with $R^2+z^2=2.5\\times10^{-3}$ and $(2.5\\times10^{-3})^{3/2}=1.25\\times10^{-4}$, $B=\\dfrac{(4\\pi\\times10^{-7})(5.0)(9\\times10^{-4})}{2(1.25\\times10^{-4})}=2.3\\times10^{-5}\\,\\mathrm{T}$. Forgetting the $3/2$ power in the denominator gives a much larger wrong value.",
        "zh": "$B=\\dfrac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$；由 $R^2+z^2=2.5\\times10^{-3}$、$(2.5\\times10^{-3})^{3/2}=1.25\\times10^{-4}$，得 $B=\\dfrac{(4\\pi\\times10^{-7})(5.0)(9\\times10^{-4})}{2(1.25\\times10^{-4})}=2.3\\times10^{-5}\\,\\mathrm{T}$。漏掉分母的 $3/2$ 次方会得到大得多的错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An ideal toroid has $N=200$ turns and carries $I=3.0\\,\\mathrm{A}$. Find $B$ at radius $r=0.10\\,\\mathrm{m}$ inside it, in tesla (2 sig figs).",
        "zh": "一个理想环形螺线管有 $N=200$ 匝，载有 $I=3.0\\,\\mathrm{A}$。求其内部半径 $r=0.10\\,\\mathrm{m}$ 处的 $B$（特斯拉，2 位有效数字）。"
      },
      "answer": "1.2e-3",
      "accept": [
        "1.2e-3 T",
        "1.2E-3",
        "0.0012",
        "1.2e-3T",
        "0.00120",
        "1.20e-3"
      ],
      "explanation": {
        "en": "$B=\\dfrac{\\mu_0 N I}{2\\pi r}=\\dfrac{(4\\pi\\times10^{-7})(200)(3.0)}{2\\pi(0.10)}=1.2\\times10^{-3}\\,\\mathrm{T}$. The full $N$ turns are enclosed by the Amperian circle; leaving out $N$ underestimates the field by a factor of 200.",
        "zh": "$B=\\dfrac{\\mu_0 N I}{2\\pi r}=\\dfrac{(4\\pi\\times10^{-7})(200)(3.0)}{2\\pi(0.10)}=1.2\\times10^{-3}\\,\\mathrm{T}$。安培圆包围全部 $N$ 匝；漏掉 $N$ 会把磁场低估 200 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A long solenoid carries $I=5.0\\,\\mathrm{A}$ and produces an interior field $B=6.28\\times10^{-3}\\,\\mathrm{T}$. Find its number of turns per meter $n$.",
        "zh": "一个长螺线管载有 $I=5.0\\,\\mathrm{A}$，内部产生磁场 $B=6.28\\times10^{-3}\\,\\mathrm{T}$。求其每米匝数 $n$。"
      },
      "answer": "1000",
      "accept": [
        "1000 turns/m",
        "1.0e3",
        "1000.0",
        "1e3",
        "999",
        "1.0x10^3"
      ],
      "explanation": {
        "en": "From $B=\\mu_0 n I$, $n=\\dfrac{B}{\\mu_0 I}=\\dfrac{6.28\\times10^{-3}}{(4\\pi\\times10^{-7})(5.0)}\\approx1000\\,\\mathrm{m^{-1}}$. Solving for the wrong variable or dropping the $\\mu_0$ factor is the typical slip in this reverse problem.",
        "zh": "由 $B=\\mu_0 n I$，$n=\\dfrac{B}{\\mu_0 I}=\\dfrac{6.28\\times10^{-3}}{(4\\pi\\times10^{-7})(5.0)}\\approx1000\\,\\mathrm{m^{-1}}$。在这道逆向题中，解错变量或漏掉 $\\mu_0$ 因子是常见错误。"
      }
    }
  ],
  "electromagnetic-induction/faradays-law-lenz": [
    {
      "type": "mc",
      "question": {
        "en": "Faraday's law of induction states that the induced EMF around a loop equals which of the following?",
        "zh": "法拉第电磁感应定律指出，回路中的感应电动势等于下列哪一项？"
      },
      "choices": [
        "The time rate of change of magnetic flux, $-\\frac{d\\Phi_B}{dt}$",
        "The magnetic flux $\\Phi_B$ through the loop",
        "The product of $B$ and the loop area $A$",
        "The spatial derivative of $B$ along the loop"
      ],
      "answer": 0,
      "explanation": {
        "en": "Faraday's law is $\\varepsilon = -\\frac{d\\Phi_B}{dt}$: EMF is the negative time derivative of flux, not the flux itself. Equating EMF to $\\Phi_B = BA$ confuses the flux with its rate of change, so a constant flux would wrongly predict a steady EMF.",
        "zh": "法拉第定律为 $\\varepsilon = -\\frac{d\\Phi_B}{dt}$：电动势是磁通量对时间的负导数，而不是磁通量本身。把电动势当成 $\\Phi_B = BA$ 是混淆了磁通量与其变化率，那样恒定磁通就会错误地预测出稳定电动势。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Lenz's law determines what physical quantity of the induced current?",
        "zh": "楞次定律确定感应电流的哪个物理量？"
      },
      "choices": [
        "Its magnitude only",
        "Its direction",
        "Its frequency",
        "The power it dissipates"
      ],
      "answer": 1,
      "explanation": {
        "en": "Lenz's law fixes the direction of the induced current so its magnetic field opposes the change in flux; it is the source of the minus sign in Faraday's law. Its magnitude comes from Faraday's law and the circuit resistance, not from Lenz's law.",
        "zh": "楞次定律确定感应电流的方向，使其磁场阻碍磁通量的变化；它正是法拉第定律中负号的来源。电流的大小由法拉第定律和电路电阻决定，而非楞次定律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A single circular loop of area $0.20\\ \\text{m}^2$ sits perpendicular to a magnetic field that increases uniformly from $0.10\\ \\text{T}$ to $0.50\\ \\text{T}$ in $2.0\\ \\text{s}$. What is the magnitude of the induced EMF?",
        "zh": "一个面积为 $0.20\\ \\text{m}^2$ 的单匝圆形回路垂直于磁场放置，磁场在 $2.0\\ \\text{s}$ 内从 $0.10\\ \\text{T}$ 均匀增大到 $0.50\\ \\text{T}$。感应电动势的大小是多少？"
      },
      "choices": [
        "$0.010\\ \\text{V}$",
        "$0.080\\ \\text{V}$",
        "$0.040\\ \\text{V}$",
        "$0.16\\ \\text{V}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\varepsilon = A\\frac{dB}{dt} = 0.20 \\times \\frac{0.50-0.10}{2.0} = 0.20 \\times 0.20 = 0.040\\ \\text{V}$. Using the final field $B=0.50\\ \\text{T}$ instead of its rate of change gives $0.10\\ \\text{V}$ and mistakes flux for its derivative.",
        "zh": "$\\varepsilon = A\\frac{dB}{dt} = 0.20 \\times \\frac{0.50-0.10}{2.0} = 0.20 \\times 0.20 = 0.040\\ \\text{V}$。若用终值 $B=0.50\\ \\text{T}$ 代替其变化率会得到 $0.10\\ \\text{V}$，这是把磁通量误当成其导数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A bar magnet's north pole is pushed toward a conducting ring. As viewed from the magnet, the induced current in the ring flows so that",
        "zh": "把条形磁铁的北极推向一个导电圆环。从磁铁一侧看，环中感应电流的流向使得"
      },
      "choices": [
        "the current direction depends only on the ring's material",
        "the ring's near face becomes a south pole, attracting the magnet",
        "no current flows because the magnet is permanent",
        "the ring's near face becomes a north pole, repelling the magnet"
      ],
      "answer": 3,
      "explanation": {
        "en": "By Lenz's law the induced current opposes the increasing flux, so the near face becomes a north pole that repels the approaching magnet. Predicting attraction would let the induced field aid the change, violating energy conservation.",
        "zh": "根据楞次定律，感应电流阻碍增大的磁通量，因此环的近侧变为北极以排斥靠近的磁铁。若预测为吸引，感应磁场就会助长变化，违反能量守恒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A coil has $N$ turns. How does Faraday's law change compared with a single loop of the same shape in the same changing field?",
        "zh": "一个线圈有 $N$ 匝。与在相同变化磁场中形状相同的单匝回路相比，法拉第定律如何变化？"
      },
      "choices": [
        "The EMF is multiplied by $N$",
        "The EMF is divided by $N$",
        "The EMF is unchanged because area is unchanged",
        "The EMF is multiplied by $N^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The flux links each of the $N$ turns, so $\\varepsilon = -N\\frac{d\\Phi_B}{dt}$; the EMFs add in series. An $N^2$ scaling wrongly imports the turns-squared dependence that belongs to self-inductance, not to a fixed external flux.",
        "zh": "磁通量与 $N$ 匝中每一匝相链，所以 $\\varepsilon = -N\\frac{d\\Phi_B}{dt}$；各匝电动势串联相加。$N^2$ 的比例错误地引入了属于自感的匝数平方依赖，而非固定外磁通的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A conducting rod of length $L$ slides at speed $v$ perpendicular to a uniform field $B$ on frictionless rails. The motional EMF is",
        "zh": "一根长为 $L$ 的导电棒在无摩擦导轨上以速度 $v$ 垂直于匀强磁场 $B$ 滑动。动生电动势为"
      },
      "choices": [
        "$\\frac{BvL}{2}$",
        "$BvL$",
        "$\\frac{BL}{v}$",
        "$B v^2 L$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The enclosed area grows at $\\frac{dA}{dt}=Lv$, so $\\varepsilon = B\\frac{dA}{dt}=BvL$. Writing $Bv^2L$ confuses the geometric rate of area change with kinetic energy and gives the wrong units.",
        "zh": "包围面积以 $\\frac{dA}{dt}=Lv$ 增长，故 $\\varepsilon = B\\frac{dA}{dt}=BvL$。写成 $Bv^2L$ 是把面积的几何变化率与动能混淆，且量纲错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The magnetic flux through a loop is $\\Phi_B(t) = 3t^2 - 2t$ (in webers, $t$ in seconds). What is the magnitude of the induced EMF at $t = 2.0\\ \\text{s}$?",
        "zh": "通过回路的磁通量为 $\\Phi_B(t) = 3t^2 - 2t$（单位韦伯，$t$ 单位秒）。在 $t = 2.0\\ \\text{s}$ 时感应电动势的大小是多少？"
      },
      "choices": [
        "$8.0\\ \\text{V}$",
        "$12\\ \\text{V}$",
        "$10\\ \\text{V}$",
        "$16\\ \\text{V}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\varepsilon = -\\frac{d\\Phi_B}{dt} = -(6t-2)$; at $t=2.0$ the magnitude is $|6(2)-2| = 10\\ \\text{V}$. Plugging $t=2$ into $\\Phi_B$ itself gives $8\\ \\text{Wb}$ and mistakes the flux value for its time derivative.",
        "zh": "$\\varepsilon = -\\frac{d\\Phi_B}{dt} = -(6t-2)$；在 $t=2.0$ 时大小为 $|6(2)-2| = 10\\ \\text{V}$。把 $t=2$ 直接代入 $\\Phi_B$ 得到 $8\\ \\text{Wb}$，那是把磁通量的值误当成其时间导数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the motional-EMF rod problem, what force must an external agent supply to keep the rod moving at constant velocity when the circuit has resistance?",
        "zh": "在动生电动势的导电棒问题中，当电路有电阻时，外力必须提供多大的力才能使棒保持匀速运动？"
      },
      "choices": [
        "A force that increases the current indefinitely",
        "Zero, because velocity is constant",
        "A force equal to $qvB$ on a single electron",
        "A force equal and opposite to the magnetic force $BIL$ on the induced current"
      ],
      "answer": 3,
      "explanation": {
        "en": "The induced current $I$ feels a retarding magnetic force $BIL$ (Lenz's law opposes the motion), so at constant velocity the external force must balance it exactly. Concluding zero force ignores that current dissipates power that the agent must supply.",
        "zh": "感应电流 $I$ 受到大小为 $BIL$ 的阻碍性磁力（楞次定律阻碍运动），故匀速时外力必须恰好平衡它。若认为外力为零，就忽略了电流耗散的功率必须由外力提供。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A loop's plane makes angle $\\theta$ with a uniform field $\\vec{B}$, where $\\theta$ is measured between the loop's normal and $\\vec{B}$. The flux is",
        "zh": "回路平面与匀强磁场 $\\vec{B}$ 之间的夹角情形中，$\\theta$ 为回路法线与 $\\vec{B}$ 的夹角。磁通量为"
      },
      "choices": [
        "$BA\\cos\\theta$",
        "$BA\\sin\\theta$",
        "$BA\\tan\\theta$",
        "$\\frac{BA}{\\cos\\theta}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Flux uses the field component along the normal: $\\Phi_B = \\vec{B}\\cdot\\vec{A} = BA\\cos\\theta$. Using $\\sin\\theta$ measures the angle from the plane instead of from the normal, flipping the max and min flux orientations.",
        "zh": "磁通量取沿法线的磁场分量：$\\Phi_B = \\vec{B}\\cdot\\vec{A} = BA\\cos\\theta$。用 $\\sin\\theta$ 是从平面而非法线量角，会把磁通最大与最小的方位弄反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A square loop is pulled at constant speed entirely OUT of a uniform field region into field-free space. During the exit, the induced current is",
        "zh": "一个方形回路以恒定速度完全被拉出匀强磁场区域进入无场空间。在离开过程中，感应电流"
      },
      "choices": [
        "zero throughout, since the loop is rigid",
        "steady and nonzero only while a side is crossing the boundary",
        "steady and nonzero the entire time the loop moves",
        "alternating in direction"
      ],
      "answer": 1,
      "explanation": {
        "en": "Flux changes only while the loop's edge cuts across the field boundary; once the loop is fully inside or fully outside, $\\frac{d\\Phi_B}{dt}=0$ and no current flows. Assuming current flows the whole time ignores that a fully-immersed loop encloses constant flux.",
        "zh": "只有当回路的边穿过磁场边界时磁通量才变化；一旦回路完全在场内或完全在场外，$\\frac{d\\Phi_B}{dt}=0$，无电流。认为全程都有电流是忽略了完全浸入场中的回路所包围的磁通是恒定的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about the induced electric field from a changing magnetic flux is correct?",
        "zh": "关于变化磁通量所产生的感应电场，下列哪种说法正确？"
      },
      "choices": [
        "It is conservative, so $\\oint \\vec{E}\\cdot d\\vec{l} = 0$",
        "It points radially from a single charge",
        "It is non-conservative, with $\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$",
        "It exists only inside conductors"
      ],
      "answer": 2,
      "explanation": {
        "en": "The induced field is non-conservative: its closed-loop integral equals $-\\frac{d\\Phi_B}{dt}$ and it exists even in empty space, driving the EMF. Calling it conservative would force the loop integral to zero and forbid induction entirely.",
        "zh": "感应电场是非保守的：其闭合环路积分等于 $-\\frac{d\\Phi_B}{dt}$，即使在真空中也存在并驱动电动势。若称其为保守场，环路积分就会为零，从而完全禁止电磁感应。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A loop of resistance $R$ has an induced EMF $\\varepsilon$. Which expression gives the instantaneous power dissipated in the loop?",
        "zh": "一个电阻为 $R$ 的回路有感应电动势 $\\varepsilon$。下列哪个表达式给出回路中瞬时耗散的功率？"
      },
      "choices": [
        "$\\varepsilon R$",
        "$\\varepsilon^2 R$",
        "$\\frac{R}{\\varepsilon^2}$",
        "$\\frac{\\varepsilon^2}{R}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $I = \\varepsilon/R$, the dissipated power is $P = I^2 R = \\varepsilon^2/R$. Writing $\\varepsilon^2 R$ inverts the resistance dependence, wrongly predicting more heating in a higher-resistance loop at fixed EMF.",
        "zh": "由 $I = \\varepsilon/R$，耗散功率为 $P = I^2 R = \\varepsilon^2/R$。写成 $\\varepsilon^2 R$ 把电阻的依赖关系弄反，会错误地预测在固定电动势下电阻越大发热越多。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A single loop encloses a flux that changes uniformly by $0.60\\ \\text{Wb}$ over $0.30\\ \\text{s}$. What is the magnitude of the induced EMF, in volts?",
        "zh": "一个单匝回路所包围的磁通量在 $0.30\\ \\text{s}$ 内均匀变化了 $0.60\\ \\text{Wb}$。感应电动势的大小是多少（单位伏特）？"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.0",
        "2 V",
        "2.0 V",
        "2V"
      ],
      "explanation": {
        "en": "$\\varepsilon = \\left|\\frac{\\Delta\\Phi_B}{\\Delta t}\\right| = \\frac{0.60}{0.30} = 2.0\\ \\text{V}$. Multiplying the flux change by the time instead of dividing would give $0.18$ and mis-forms the rate.",
        "zh": "$\\varepsilon = \\left|\\frac{\\Delta\\Phi_B}{\\Delta t}\\right| = \\frac{0.60}{0.30} = 2.0\\ \\text{V}$。若把磁通变化乘以时间而非相除会得到 $0.18$，那是错误地构造了变化率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A coil of $50$ turns and area $0.010\\ \\text{m}^2$ sits perpendicular to a field changing at $4.0\\ \\text{T/s}$. What is the magnitude of the induced EMF, in volts?",
        "zh": "一个 $50$ 匝、面积为 $0.010\\ \\text{m}^2$ 的线圈垂直于以 $4.0\\ \\text{T/s}$ 变化的磁场。感应电动势的大小是多少（单位伏特）？"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.0",
        "2 V",
        "2.0 V",
        "2V"
      ],
      "explanation": {
        "en": "$\\varepsilon = NA\\frac{dB}{dt} = 50 \\times 0.010 \\times 4.0 = 2.0\\ \\text{V}$. Omitting the factor $N$ gives $0.040\\ \\text{V}$ and ignores that all 50 turns link the flux.",
        "zh": "$\\varepsilon = NA\\frac{dB}{dt} = 50 \\times 0.010 \\times 4.0 = 2.0\\ \\text{V}$。漏掉因子 $N$ 会得到 $0.040\\ \\text{V}$，忽略了全部 50 匝都与磁通相链。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rod of length $0.50\\ \\text{m}$ moves at $3.0\\ \\text{m/s}$ perpendicular to a $0.40\\ \\text{T}$ field. What is the motional EMF, in volts?",
        "zh": "一根长 $0.50\\ \\text{m}$ 的棒以 $3.0\\ \\text{m/s}$ 垂直于 $0.40\\ \\text{T}$ 的磁场运动。动生电动势是多少（单位伏特）？"
      },
      "answer": "0.60",
      "accept": [
        "0.6",
        "0.60",
        ".6",
        "0.6 V",
        "0.60 V",
        "0.6V"
      ],
      "explanation": {
        "en": "$\\varepsilon = BvL = 0.40 \\times 3.0 \\times 0.50 = 0.60\\ \\text{V}$. Squaring the speed or dropping the length are the usual slips; the product of all three factors gives the correct result.",
        "zh": "$\\varepsilon = BvL = 0.40 \\times 3.0 \\times 0.50 = 0.60\\ \\text{V}$。常见错误是把速度平方或漏掉长度；三个因子相乘才得到正确结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The flux through a loop is $\\Phi_B(t) = 5t^3$ Wb. What is the magnitude of the induced EMF at $t = 1.0\\ \\text{s}$, in volts?",
        "zh": "通过回路的磁通量为 $\\Phi_B(t) = 5t^3$ Wb。在 $t = 1.0\\ \\text{s}$ 时感应电动势的大小是多少（单位伏特）？"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "15 V",
        "15.0 V",
        "15V"
      ],
      "explanation": {
        "en": "$\\varepsilon = -\\frac{d\\Phi_B}{dt} = -15t^2$; at $t=1.0$ the magnitude is $15\\ \\text{V}$. Substituting $t=1$ into $\\Phi_B$ gives $5$ and mistakes flux for its derivative.",
        "zh": "$\\varepsilon = -\\frac{d\\Phi_B}{dt} = -15t^2$；在 $t=1.0$ 时大小为 $15\\ \\text{V}$。把 $t=1$ 代入 $\\Phi_B$ 得到 $5$，是把磁通量误当成其导数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A loop of area $0.25\\ \\text{m}^2$ lies in a $0.80\\ \\text{T}$ uniform field with its normal parallel to the field. What is the magnetic flux through it, in webers?",
        "zh": "一个面积为 $0.25\\ \\text{m}^2$ 的回路位于 $0.80\\ \\text{T}$ 的匀强磁场中，其法线平行于磁场。通过它的磁通量是多少（单位韦伯）？"
      },
      "answer": "0.20",
      "accept": [
        "0.2",
        "0.20",
        ".2",
        "0.2 Wb",
        "0.20 Wb",
        "0.2Wb"
      ],
      "explanation": {
        "en": "With the normal parallel to $\\vec{B}$, $\\cos\\theta = 1$, so $\\Phi_B = BA = 0.80 \\times 0.25 = 0.20\\ \\text{Wb}$. There is no EMF here because the field is steady; flux and EMF are distinct quantities.",
        "zh": "当法线平行于 $\\vec{B}$ 时，$\\cos\\theta = 1$，故 $\\Phi_B = BA = 0.80 \\times 0.25 = 0.20\\ \\text{Wb}$。此处无电动势，因为磁场恒定；磁通量与电动势是不同的量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The induced EMF in a single loop is $6.0\\ \\text{V}$ and the loop's resistance is $3.0\\ \\Omega$. What is the induced current, in amperes?",
        "zh": "单匝回路中的感应电动势为 $6.0\\ \\text{V}$，回路电阻为 $3.0\\ \\Omega$。感应电流是多少（单位安培）？"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.0",
        "2 A",
        "2.0 A",
        "2A"
      ],
      "explanation": {
        "en": "Ohm's law gives $I = \\varepsilon/R = 6.0/3.0 = 2.0\\ \\text{A}$. Multiplying EMF by resistance instead of dividing gives $18$ and misapplies $V=IR$.",
        "zh": "由欧姆定律 $I = \\varepsilon/R = 6.0/3.0 = 2.0\\ \\text{A}$。把电动势乘以电阻而非相除会得到 $18$，是误用了 $V=IR$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A loop has flux $\\Phi_B(t) = 0.10\\cos(\\pi t)$ Wb. What is the magnitude of the induced EMF at $t = 0.50\\ \\text{s}$, in volts? (Use $\\pi \\approx 3.14$.)",
        "zh": "一个回路的磁通量为 $\\Phi_B(t) = 0.10\\cos(\\pi t)$ Wb。在 $t = 0.50\\ \\text{s}$ 时感应电动势的大小是多少（单位伏特）？（取 $\\pi \\approx 3.14$。）"
      },
      "answer": "0.314",
      "accept": [
        "0.314",
        "0.31",
        "0.3",
        "0.1pi",
        "0.314 V",
        "0.31 V",
        "0.1\\pi"
      ],
      "explanation": {
        "en": "$\\varepsilon = -\\frac{d\\Phi_B}{dt} = 0.10\\pi\\sin(\\pi t)$; at $t=0.50$, $\\sin(\\pi/2)=1$, so magnitude $=0.10\\pi \\approx 0.314\\ \\text{V}$. Forgetting the chain-rule factor $\\pi$ from differentiating $\\cos(\\pi t)$ gives $0.10$.",
        "zh": "$\\varepsilon = -\\frac{d\\Phi_B}{dt} = 0.10\\pi\\sin(\\pi t)$；在 $t=0.50$ 时 $\\sin(\\pi/2)=1$，故大小 $=0.10\\pi \\approx 0.314\\ \\text{V}$。对 $\\cos(\\pi t)$ 求导时漏掉链式法则因子 $\\pi$ 会得到 $0.10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "According to Lenz's law, the induced current always opposes the ___ in magnetic flux. (Give the one-word English or Chinese term.)",
        "zh": "根据楞次定律，感应电流总是阻碍磁通量的___。（给出一个词，英文或中文均可。）"
      },
      "answer": "change",
      "accept": [
        "change",
        "Change",
        "变化",
        "改变",
        "change in flux",
        "the change"
      ],
      "explanation": {
        "en": "Lenz's law: the induced current opposes the CHANGE in flux, not the flux itself. This opposition is the physical origin of the minus sign in $\\varepsilon = -\\frac{d\\Phi_B}{dt}$ and enforces energy conservation.",
        "zh": "楞次定律：感应电流阻碍磁通量的变化，而不是磁通量本身。这种阻碍正是 $\\varepsilon = -\\frac{d\\Phi_B}{dt}$ 中负号的物理来源，并保证能量守恒。"
      }
    }
  ],
  "electromagnetic-induction/inductance-lr-lc": [
    {
      "type": "mc",
      "question": {
        "en": "The self-induced EMF across an inductor of inductance $L$ is given by",
        "zh": "自感为 $L$ 的电感器两端的自感电动势由下式给出"
      },
      "choices": [
        "$\\varepsilon = -L\\frac{dI}{dt}$",
        "$\\varepsilon = -LI$",
        "$\\varepsilon = -\\frac{L}{I}$",
        "$\\varepsilon = -\\frac{I}{L}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "An inductor opposes changes in current, so $\\varepsilon = -L\\frac{dI}{dt}$: the EMF depends on the rate of change of current, not on the current itself. Writing $-LI$ would predict an EMF even for a steady current, which never happens for an ideal inductor.",
        "zh": "电感器阻碍电流的变化，故 $\\varepsilon = -L\\frac{dI}{dt}$：电动势取决于电流的变化率，而非电流本身。写成 $-LI$ 会在恒定电流时也预测出电动势，而理想电感器绝不会这样。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The energy stored in an inductor carrying current $I$ is",
        "zh": "载有电流 $I$ 的电感器所储存的能量为"
      },
      "choices": [
        "$LI^2$",
        "$\\frac{1}{2}LI^2$",
        "$\\frac{1}{2}L^2 I$",
        "$\\frac{1}{2}\\frac{I^2}{L}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Integrating power $P = LI\\frac{dI}{dt}$ over the current build-up gives $U = \\frac{1}{2}LI^2$, analogous to $\\frac{1}{2}CV^2$ for a capacitor. Dropping the factor $\\frac{1}{2}$ (writing $LI^2$) double-counts the energy delivered during ramp-up.",
        "zh": "对功率 $P = LI\\frac{dI}{dt}$ 在电流建立过程中积分得到 $U = \\frac{1}{2}LI^2$，与电容的 $\\frac{1}{2}CV^2$ 相类似。漏掉因子 $\\frac{1}{2}$（写成 $LI^2$）会把电流上升过程中输送的能量算重一倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an LR circuit connected to a battery of EMF $\\varepsilon_0$ at $t=0$, the current as a function of time is",
        "zh": "在 $t=0$ 时接入电动势为 $\\varepsilon_0$ 的电池的 LR 电路中，电流随时间的函数为"
      },
      "choices": [
        "$\\frac{\\varepsilon_0}{R}e^{-t/\\tau}$",
        "$\\frac{\\varepsilon_0}{R}(1 + e^{-t/\\tau})$",
        "$\\frac{\\varepsilon_0}{R}(1 - e^{-t/\\tau})$",
        "$\\frac{\\varepsilon_0}{R}t$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Current rises from zero toward $\\varepsilon_0/R$: $I(t) = \\frac{\\varepsilon_0}{R}(1 - e^{-t/\\tau})$ with $\\tau = L/R$. The pure-decay form $e^{-t/\\tau}$ describes an inductor de-energizing, the opposite process, and wrongly starts at the maximum current.",
        "zh": "电流从零上升趋向 $\\varepsilon_0/R$：$I(t) = \\frac{\\varepsilon_0}{R}(1 - e^{-t/\\tau})$，其中 $\\tau = L/R$。纯衰减形式 $e^{-t/\\tau}$ 描述的是电感器放能这一相反过程，且错误地从最大电流开始。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The time constant of a series LR circuit is",
        "zh": "串联 LR 电路的时间常数为"
      },
      "choices": [
        "$RL$",
        "$\\frac{R}{L}$",
        "$\\frac{1}{RL}$",
        "$\\frac{L}{R}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Solving $L\\frac{dI}{dt} + IR = \\varepsilon_0$ gives an exponential with $\\tau = L/R$, which has units of seconds. Inverting it to $R/L$ yields a rate (per second), not a time.",
        "zh": "求解 $L\\frac{dI}{dt} + IR = \\varepsilon_0$ 得到时间常数为 $\\tau = L/R$ 的指数解，其单位为秒。把它倒过来写成 $R/L$ 得到的是频率（每秒），而非时间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Long after an LR circuit with a battery reaches steady state, an ideal inductor behaves like",
        "zh": "带电池的 LR 电路达到稳态很久之后，理想电感器的行为类似于"
      },
      "choices": [
        "a plain wire (zero resistance)",
        "an open circuit (infinite resistance)",
        "a capacitor",
        "a current source of fixed EMF"
      ],
      "answer": 0,
      "explanation": {
        "en": "In steady state $\\frac{dI}{dt}=0$, so the inductor's back-EMF vanishes and it acts like a plain wire. Treating it as an open circuit describes the instant just after switching on, when $\\frac{dI}{dt}$ is largest, not the steady state.",
        "zh": "在稳态时 $\\frac{dI}{dt}=0$，故电感器的反电动势消失，其行为如同普通导线。把它当作开路描述的是刚接通的瞬间——此时 $\\frac{dI}{dt}$ 最大——而非稳态。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At the instant a switch closes in an initially uncurrented LR circuit, the current through an ideal inductor is",
        "zh": "在初始无电流的 LR 电路中开关刚闭合的瞬间，通过理想电感器的电流为"
      },
      "choices": [
        "at its maximum value $\\varepsilon_0/R$",
        "zero",
        "equal to $\\varepsilon_0/L$",
        "infinite"
      ],
      "answer": 1,
      "explanation": {
        "en": "Inductor current cannot change instantaneously, so it starts at zero and the full EMF drops across the inductor. Assuming the maximum $\\varepsilon_0/R$ at $t=0$ ignores that the current needs time to build against the back-EMF.",
        "zh": "电感器电流不能瞬间改变，故从零开始，此刻全部电动势都降落在电感器上。若假设 $t=0$ 时即为最大值 $\\varepsilon_0/R$，就忽略了电流需要时间来克服反电动势逐渐建立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an ideal LC oscillator, the angular frequency of oscillation is",
        "zh": "在理想 LC 振荡电路中，振荡的角频率为"
      },
      "choices": [
        "$\\sqrt{LC}$",
        "$\\frac{1}{LC}$",
        "$\\frac{1}{\\sqrt{LC}}$",
        "$2\\pi LC$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The charge obeys $\\frac{d^2Q}{dt^2} = -\\frac{1}{LC}Q$, so $\\omega = \\frac{1}{\\sqrt{LC}}$. Writing $\\sqrt{LC}$ inverts the dependence and has units of time, not angular frequency.",
        "zh": "电荷满足 $\\frac{d^2Q}{dt^2} = -\\frac{1}{LC}Q$，故 $\\omega = \\frac{1}{\\sqrt{LC}}$。写成 $\\sqrt{LC}$ 把依赖关系弄反，且其量纲是时间而非角频率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an ideal LC circuit, at the moment the capacitor charge is maximum, the inductor current is",
        "zh": "在理想 LC 电路中，当电容电荷达到最大的时刻，电感器电流为"
      },
      "choices": [
        "maximum",
        "negative maximum",
        "equal to $Q_{max}/L$",
        "zero"
      ],
      "answer": 3,
      "explanation": {
        "en": "Energy sloshes between capacitor and inductor; when charge (and $\\frac{1}{2}Q^2/C$) is maximum the current (and $\\frac{1}{2}LI^2$) is zero. Assuming both peak together would violate energy conservation, since total energy is fixed.",
        "zh": "能量在电容与电感之间来回振荡；当电荷（及 $\\frac{1}{2}Q^2/C$）最大时，电流（及 $\\frac{1}{2}LI^2$）为零。若假设两者同时达到峰值，就会违反能量守恒，因为总能量是固定的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A long solenoid of $N$ turns, cross-sectional area $A$, and length $l$ has self-inductance",
        "zh": "一个 $N$ 匝、横截面积为 $A$、长度为 $l$ 的长螺线管，其自感为"
      },
      "choices": [
        "$\\frac{\\mu_0 N^2 A}{l}$",
        "$\\mu_0 N^2 A l$",
        "$\\frac{\\mu_0 N A}{l}$",
        "$\\frac{\\mu_0 N^2 l}{A}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $B = \\mu_0 N I/l$ and flux linkage $N\\Phi$, $L = \\frac{N\\Phi}{I} = \\frac{\\mu_0 N^2 A}{l}$. Keeping only one power of $N$ forgets that flux both scales with $N$ and links $N$ turns.",
        "zh": "由 $B = \\mu_0 N I/l$ 及磁链 $N\\Phi$，得 $L = \\frac{N\\Phi}{I} = \\frac{\\mu_0 N^2 A}{l}$。只保留一次方 $N$ 是忘了磁通既随 $N$ 增大又与 $N$ 匝相链。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an LR decay circuit (battery removed, loop closed), after one time constant the current has fallen to about what fraction of its initial value?",
        "zh": "在 LR 衰减电路中（移去电池，回路闭合），经过一个时间常数后，电流下降到其初始值的大约几分之几？"
      },
      "choices": [
        "$0.63$",
        "$0.37$",
        "$0.50$",
        "$0.10$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Decay follows $I = I_0 e^{-t/\\tau}$; at $t=\\tau$, $e^{-1} \\approx 0.37$. The value $0.63$ is $1-e^{-1}$, which applies to the RISING current, not the decaying one.",
        "zh": "衰减遵循 $I = I_0 e^{-t/\\tau}$；在 $t=\\tau$ 时 $e^{-1} \\approx 0.37$。数值 $0.63$ 是 $1-e^{-1}$，适用于上升的电流，而非衰减的电流。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two inductors $L_1$ and $L_2$ (no mutual coupling) are connected in series. The equivalent inductance is",
        "zh": "两个电感 $L_1$ 和 $L_2$（无互感耦合）串联连接。等效电感为"
      },
      "choices": [
        "$\\frac{L_1 L_2}{L_1 + L_2}$",
        "$\\frac{1}{L_1} + \\frac{1}{L_2}$",
        "$L_1 + L_2$",
        "$\\sqrt{L_1 L_2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Series inductors carry the same $\\frac{dI}{dt}$, so their EMFs add: $L_{eq} = L_1 + L_2$, like resistors in series. The product-over-sum form is the parallel rule and would wrongly give a smaller inductance than either alone.",
        "zh": "串联电感通过相同的 $\\frac{dI}{dt}$，故其电动势相加：$L_{eq} = L_1 + L_2$，与串联电阻类似。乘积除以和的形式是并联规则，会错误地给出比任一单独电感都小的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an LC circuit, the total energy at any instant equals",
        "zh": "在 LC 电路中，任一时刻的总能量等于"
      },
      "choices": [
        "$\\frac{Q^2}{2C} - \\frac{1}{2}LI^2$",
        "$\\frac{1}{2}LI^2$ only",
        "$\\frac{Q^2}{2C}$ only",
        "$\\frac{Q^2}{2C} + \\frac{1}{2}LI^2$, a constant"
      ],
      "answer": 3,
      "explanation": {
        "en": "For an ideal (lossless) LC circuit the sum of capacitor and inductor energies is conserved: $\\frac{Q^2}{2C} + \\frac{1}{2}LI^2 = \\text{const}$. Using only one term captures a single instant, not the constant total that shuttles between the two elements.",
        "zh": "对理想（无损耗）LC 电路，电容与电感能量之和守恒：$\\frac{Q^2}{2C} + \\frac{1}{2}LI^2 = \\text{常数}$。只用其中一项只反映某一瞬间，而非在两元件间往返转移的恒定总能量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An inductor of $L = 0.50\\ \\text{H}$ carries a current changing at $\\frac{dI}{dt} = 8.0\\ \\text{A/s}$. What is the magnitude of the self-induced EMF, in volts?",
        "zh": "一个 $L = 0.50\\ \\text{H}$ 的电感器中电流以 $\\frac{dI}{dt} = 8.0\\ \\text{A/s}$ 变化。自感电动势的大小是多少（单位伏特）？"
      },
      "answer": "4.0",
      "accept": [
        "4",
        "4.0",
        "4 V",
        "4.0 V",
        "4V"
      ],
      "explanation": {
        "en": "$|\\varepsilon| = L\\frac{dI}{dt} = 0.50 \\times 8.0 = 4.0\\ \\text{V}$. Multiplying by the current value instead of its rate of change would be dimensionally wrong.",
        "zh": "$|\\varepsilon| = L\\frac{dI}{dt} = 0.50 \\times 8.0 = 4.0\\ \\text{V}$。若乘以电流值而非其变化率，量纲就错了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An inductor of $L = 4.0\\ \\text{H}$ carries a steady current of $2.0\\ \\text{A}$. How much energy is stored, in joules?",
        "zh": "一个 $L = 4.0\\ \\text{H}$ 的电感器载有 $2.0\\ \\text{A}$ 的稳定电流。储存的能量是多少（单位焦耳）？"
      },
      "answer": "8.0",
      "accept": [
        "8",
        "8.0",
        "8 J",
        "8.0 J",
        "8J"
      ],
      "explanation": {
        "en": "$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(4.0)(2.0)^2 = 8.0\\ \\text{J}$. Forgetting to square the current gives $4\\ \\text{J}$ and undercounts the energy.",
        "zh": "$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(4.0)(2.0)^2 = 8.0\\ \\text{J}$。忘记把电流平方会得到 $4\\ \\text{J}$，低估了能量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A series LR circuit has $L = 2.0\\ \\text{H}$ and $R = 4.0\\ \\Omega$. What is the time constant, in seconds?",
        "zh": "一个串联 LR 电路有 $L = 2.0\\ \\text{H}$ 和 $R = 4.0\\ \\Omega$。时间常数是多少（单位秒）？"
      },
      "answer": "0.50",
      "accept": [
        "0.5",
        "0.50",
        ".5",
        "0.5 s",
        "0.50 s",
        "0.5s",
        "1/2"
      ],
      "explanation": {
        "en": "$\\tau = L/R = 2.0/4.0 = 0.50\\ \\text{s}$. Computing $R/L = 2.0\\ \\text{s}^{-1}$ instead gives a rate, not a time constant.",
        "zh": "$\\tau = L/R = 2.0/4.0 = 0.50\\ \\text{s}$。改算 $R/L = 2.0\\ \\text{s}^{-1}$ 得到的是频率，而非时间常数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An ideal LC circuit has $L = 2.0\\ \\text{H}$ and $C = 8.0\\ \\mu\\text{F}$. What is the angular frequency of oscillation, in rad/s?",
        "zh": "一个理想 LC 电路有 $L = 2.0\\ \\text{H}$ 和 $C = 8.0\\ \\mu\\text{F}$。振荡角频率是多少（单位 rad/s）？"
      },
      "answer": "250",
      "accept": [
        "250",
        "250.0",
        "250 rad/s",
        "2.5e2",
        "2.5x10^2"
      ],
      "explanation": {
        "en": "$\\omega = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{2.0 \\times 8.0\\times10^{-6}}} = \\frac{1}{\\sqrt{1.6\\times10^{-5}}} = \\frac{1}{4.0\\times10^{-3}} = 250\\ \\text{rad/s}$. Forgetting to convert $\\mu\\text{F}$ to farads throws the answer off by $10^3$.",
        "zh": "$\\omega = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{2.0 \\times 8.0\\times10^{-6}}} = \\frac{1}{\\sqrt{1.6\\times10^{-5}}} = \\frac{1}{4.0\\times10^{-3}} = 250\\ \\text{rad/s}$。忘记把 $\\mu\\text{F}$ 换算为法拉会使答案差 $10^3$ 倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the same LC circuit ($L = 2.0\\ \\text{H}$, $C = 8.0\\ \\mu\\text{F}$, $\\omega = 250\\ \\text{rad/s}$), what is the period of oscillation, in seconds? (Use $\\pi \\approx 3.14$.)",
        "zh": "在同一 LC 电路中（$L = 2.0\\ \\text{H}$，$C = 8.0\\ \\mu\\text{F}$，$\\omega = 250\\ \\text{rad/s}$），振荡周期是多少（单位秒）？（取 $\\pi \\approx 3.14$。）"
      },
      "answer": "0.0251",
      "accept": [
        "0.0251",
        "0.025",
        "2.51e-2",
        "0.0251 s",
        "0.025 s",
        "2.5e-2"
      ],
      "explanation": {
        "en": "$T = \\frac{2\\pi}{\\omega} = \\frac{2(3.14)}{250} = \\frac{6.28}{250} \\approx 0.0251\\ \\text{s}$. Using $T = 1/\\omega$ omits the factor $2\\pi$ that links angular frequency to period.",
        "zh": "$T = \\frac{2\\pi}{\\omega} = \\frac{2(3.14)}{250} = \\frac{6.28}{250} \\approx 0.0251\\ \\text{s}$。用 $T = 1/\\omega$ 漏掉了把角频率与周期联系起来的因子 $2\\pi$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A battery of $\\varepsilon_0 = 12\\ \\text{V}$ drives a series LR circuit with $R = 6.0\\ \\Omega$. What is the final (steady-state) current, in amperes?",
        "zh": "一个 $\\varepsilon_0 = 12\\ \\text{V}$ 的电池驱动一个 $R = 6.0\\ \\Omega$ 的串联 LR 电路。最终（稳态）电流是多少（单位安培）？"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.0",
        "2 A",
        "2.0 A",
        "2A"
      ],
      "explanation": {
        "en": "At steady state the inductor carries no back-EMF, so $I_{final} = \\varepsilon_0/R = 12/6.0 = 2.0\\ \\text{A}$. The inductance only sets how fast this value is reached, not its magnitude.",
        "zh": "在稳态时电感器不产生反电动势，故 $I_{final} = \\varepsilon_0/R = 12/6.0 = 2.0\\ \\text{A}$。电感只决定达到该值的快慢，而不影响其大小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A capacitor of $C = 5.0\\ \\mu\\text{F}$ in an LC circuit holds a maximum charge $Q_{max} = 2.0\\times10^{-4}\\ \\text{C}$. What is the maximum energy stored in the circuit, in joules?",
        "zh": "LC 电路中一个 $C = 5.0\\ \\mu\\text{F}$ 的电容器持有最大电荷 $Q_{max} = 2.0\\times10^{-4}\\ \\text{C}$。电路中储存的最大能量是多少（单位焦耳）？"
      },
      "answer": "0.0040",
      "accept": [
        "0.004",
        "0.0040",
        "4.0e-3",
        "4e-3",
        "0.004 J",
        "4.0x10^-3"
      ],
      "explanation": {
        "en": "$U = \\frac{Q_{max}^2}{2C} = \\frac{(2.0\\times10^{-4})^2}{2(5.0\\times10^{-6})} = \\frac{4.0\\times10^{-8}}{1.0\\times10^{-5}} = 4.0\\times10^{-3}\\ \\text{J}$. This equals the peak inductor energy $\\frac{1}{2}LI^2$ half a cycle later, since total energy is conserved.",
        "zh": "$U = \\frac{Q_{max}^2}{2C} = \\frac{(2.0\\times10^{-4})^2}{2(5.0\\times10^{-6})} = \\frac{4.0\\times10^{-8}}{1.0\\times10^{-5}} = 4.0\\times10^{-3}\\ \\text{J}$。由于总能量守恒，这等于半个周期后电感的峰值能量 $\\frac{1}{2}LI^2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An LR circuit's current is $I(t) = 3.0\\,e^{-t/0.20}$ A (decay). What is the magnitude of $\\frac{dI}{dt}$ at $t = 0$, in A/s?",
        "zh": "一个 LR 电路的电流为 $I(t) = 3.0\\,e^{-t/0.20}$ A（衰减）。在 $t = 0$ 时 $\\frac{dI}{dt}$ 的大小是多少（单位 A/s）？"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "15 A/s",
        "15.0 A/s"
      ],
      "explanation": {
        "en": "$\\frac{dI}{dt} = -\\frac{3.0}{0.20}e^{-t/0.20}$; at $t=0$ the magnitude is $3.0/0.20 = 15\\ \\text{A/s}$. Forgetting the chain-rule factor $1/\\tau$ when differentiating the exponential leaves $3.0$ and misses the decay rate.",
        "zh": "$\\frac{dI}{dt} = -\\frac{3.0}{0.20}e^{-t/0.20}$；在 $t=0$ 时大小为 $3.0/0.20 = 15\\ \\text{A/s}$。对指数求导时漏掉链式法则因子 $1/\\tau$ 会剩下 $3.0$，从而错过衰减速率。"
      }
    }
  ]
};
