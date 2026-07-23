export default {
  "kinematics/position-velocity-acceleration": [
    {
      "type": "mc",
      "question": {
        "en": "Which quantity is a vector that describes an object's change in position, pointing straight from the start point to the end point?",
        "zh": "哪个量是矢量，用于描述物体位置的变化，方向从起点直接指向终点？"
      },
      "choices": [
        "Displacement",
        "Speed",
        "Distance",
        "Path length"
      ],
      "answer": 0,
      "explanation": {
        "en": "Displacement is the vector from start to end and has both magnitude and direction. Distance and path length are scalars that add up how far you traveled along the path, so a curved trip gives a larger distance than displacement.",
        "zh": "位移是从起点指向终点的矢量，既有大小又有方向。距离和路程是标量，把沿路径走过的长度都加起来，所以弯曲路径的距离会大于位移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car drives 300 m east, then 100 m west. What is its total distance, and what is its displacement?",
        "zh": "一辆车向东行驶 300 m，再向西行驶 100 m。它的总路程和位移分别是多少？"
      },
      "choices": [
        "Distance 200 m, displacement 400 m east",
        "Distance 400 m, displacement 200 m east",
        "Distance 400 m, displacement 400 m east",
        "Distance 200 m, displacement 200 m west"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distance adds the magnitudes: $300 + 100 = 400$ m. Displacement adds vectors: $300$ east $+ 100$ west $= 200$ m east. Treating displacement as the total traveled (400 m) ignores that the westward leg cancels part of the eastward leg.",
        "zh": "路程把长度相加：$300 + 100 = 400$ m。位移把矢量相加：向东 $300$ 加向西 $100$，等于向东 $200$ m。若把位移当成走过的总长度（400 m），就忽略了向西那段抵消了部分向东的位移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Average velocity is best defined as which of the following?",
        "zh": "平均速度最恰当的定义是下列哪一项？"
      },
      "choices": [
        "Total distance divided by total time",
        "The change in speed over time",
        "Displacement divided by the time interval",
        "The slope of a velocity-time graph"
      ],
      "answer": 2,
      "explanation": {
        "en": "Average velocity is displacement over the time interval, $\\bar v = \\frac{\\Delta x}{\\Delta t}$, so it is a vector. Using total distance instead gives average speed (a scalar), which can differ when the motion reverses direction.",
        "zh": "平均速度是位移除以时间间隔，$\\bar v = \\frac{\\Delta x}{\\Delta t}$，因此是矢量。若改用总路程，得到的是平均速率（标量），当运动反向时两者会不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object moves in the +x direction while slowing down. What are the signs of its velocity and acceleration?",
        "zh": "一个物体沿 +x 方向运动同时在减速。它的速度和加速度的符号分别是什么？"
      },
      "choices": [
        "Velocity +, acceleration +",
        "Velocity -, acceleration -",
        "Velocity -, acceleration +",
        "Velocity +, acceleration -"
      ],
      "answer": 3,
      "explanation": {
        "en": "Moving in +x means velocity is positive. Slowing down means acceleration opposes velocity, so acceleration is negative. The common error is assuming a negative acceleration always means the object is moving backward, but sign of acceleration only tells you the direction of the velocity change.",
        "zh": "沿 +x 运动表示速度为正。减速意味着加速度与速度方向相反，所以加速度为负。常见错误是认为负加速度一定表示物体在往回走，其实加速度的符号只说明速度变化的方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The instantaneous velocity of an object at a moment is found from a position-time graph by taking which feature?",
        "zh": "从位置-时间图上，用哪个特征来求某一时刻物体的瞬时速度？"
      },
      "choices": [
        "The slope of the tangent line at that instant",
        "The area under the curve up to that instant",
        "The height (value) of the curve at that instant",
        "The average height over the whole graph"
      ],
      "answer": 0,
      "explanation": {
        "en": "On a position-time graph the slope is velocity, so instantaneous velocity is the slope of the tangent at that instant. Reading the height gives position, not velocity, and area under a position graph has no direct physical meaning here.",
        "zh": "在位置-时间图上，斜率就是速度，所以瞬时速度是该时刻切线的斜率。读取高度得到的是位置而不是速度；位置图下的面积在这里没有直接的物理意义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about acceleration is correct?",
        "zh": "关于加速度，下列哪种说法是正确的？"
      },
      "choices": [
        "Acceleration is always zero when velocity is zero",
        "Acceleration measures how fast velocity changes with time",
        "Acceleration and velocity always point the same way",
        "An object with constant speed can never accelerate"
      ],
      "answer": 1,
      "explanation": {
        "en": "Acceleration is the rate of change of velocity, $a = \\frac{\\Delta v}{\\Delta t}$. Velocity can be zero at an instant (like the top of a toss) while acceleration is not, and an object moving in a curve at constant speed still accelerates because its direction changes.",
        "zh": "加速度是速度的变化率，$a = \\frac{\\Delta v}{\\Delta t}$。某一瞬间速度可以为零（如抛体最高点）而加速度不为零；沿曲线以恒定速率运动的物体因方向改变仍在加速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A runner's velocity changes from 2 m/s to 8 m/s in 3 s. What is the average acceleration?",
        "zh": "一名跑步者的速度在 3 s 内从 2 m/s 变到 8 m/s。平均加速度是多少？"
      },
      "choices": [
        "$6\\ \\text{m/s}^2$",
        "$3\\ \\text{m/s}^2$",
        "$2\\ \\text{m/s}^2$",
        "$10\\ \\text{m/s}^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$a = \\frac{\\Delta v}{\\Delta t} = \\frac{8 - 2}{3} = 2\\ \\text{m/s}^2$. A frequent slip is dividing the final velocity (8) by the time instead of using the change in velocity (6).",
        "zh": "$a = \\frac{\\Delta v}{\\Delta t} = \\frac{8 - 2}{3} = 2\\ \\text{m/s}^2$。常见的错误是用末速度（8）除以时间，而不是用速度的变化量（6）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On a velocity-time graph, what does the slope of the line represent?",
        "zh": "在速度-时间图上，直线的斜率代表什么？"
      },
      "choices": [
        "Position",
        "Displacement",
        "Distance",
        "Acceleration"
      ],
      "answer": 3,
      "explanation": {
        "en": "Slope on a velocity-time graph is $\\frac{\\Delta v}{\\Delta t}$, which is acceleration. The area under that graph gives displacement, so confusing slope with area would give the wrong quantity.",
        "zh": "速度-时间图上的斜率是 $\\frac{\\Delta v}{\\Delta t}$，即加速度。该图下的面积给出位移，所以把斜率和面积混淆会得到错误的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is a scalar quantity?",
        "zh": "下列哪个是标量？"
      },
      "choices": [
        "Speed",
        "Acceleration",
        "Displacement",
        "Velocity"
      ],
      "answer": 0,
      "explanation": {
        "en": "Speed is the magnitude of velocity and has no direction, so it is a scalar. Velocity, acceleration, and displacement all carry direction and are vectors.",
        "zh": "速率是速度的大小，没有方向，所以是标量。速度、加速度和位移都带方向，都是矢量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object moves in the -x direction and speeds up. Its acceleration is:",
        "zh": "一个物体沿 -x 方向运动并加速。它的加速度是："
      },
      "choices": [
        "Positive, in the +x direction",
        "Negative, in the -x direction",
        "Zero",
        "Positive, because speed increases"
      ],
      "answer": 1,
      "explanation": {
        "en": "Speeding up means acceleration is in the same direction as velocity. The velocity points in -x, so acceleration is negative (in -x). Assuming acceleration must be positive just because speed increases confuses speed with the sign of the vector.",
        "zh": "加速表示加速度与速度同向。速度指向 -x，所以加速度为负（沿 -x）。仅因速率增大就认为加速度必为正，是把速率与矢量符号混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A position-time graph is a horizontal straight line. What does this tell you about the object?",
        "zh": "一条位置-时间图是水平直线。这说明物体处于什么状态？"
      },
      "choices": [
        "It moves at constant nonzero velocity",
        "It is accelerating uniformly",
        "It is at rest (velocity is zero)",
        "It moves then reverses direction"
      ],
      "answer": 2,
      "explanation": {
        "en": "A horizontal line has zero slope, and slope on a position-time graph is velocity, so the object is at rest. A straight line that is tilted (not horizontal) would instead mean constant nonzero velocity.",
        "zh": "水平线斜率为零，而位置-时间图的斜率就是速度，所以物体静止。若直线是倾斜的（非水平），才表示恒定的非零速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which set of units correctly matches position, velocity, and acceleration in SI?",
        "zh": "下列哪一组单位正确对应 SI 制中的位置、速度和加速度？"
      },
      "choices": [
        "$\\text{m},\\ \\text{m/s}^2,\\ \\text{m/s}$",
        "$\\text{m},\\ \\text{m/s},\\ \\text{m/s}$",
        "$\\text{m/s},\\ \\text{m},\\ \\text{m/s}^2$",
        "$\\text{m},\\ \\text{m/s},\\ \\text{m/s}^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Position is meters, velocity is meters per second, and acceleration is meters per second squared. Swapping the velocity and acceleration units is the usual mistake because acceleration involves time twice.",
        "zh": "位置的单位是米，速度是米每秒，加速度是米每二次方秒。常见错误是把速度和加速度的单位互换，因为加速度中时间出现了两次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cyclist travels 240 m in 30 s at constant speed. What is her average velocity in m/s?",
        "zh": "一名骑车者以恒定速度在 30 s 内行进 240 m。她的平均速度是多少 m/s？"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "8 m/s",
        "+8",
        "8m/s"
      ],
      "explanation": {
        "en": "$\\bar v = \\frac{\\Delta x}{\\Delta t} = \\frac{240}{30} = 8\\ \\text{m/s}$. Be careful not to multiply distance by time, which would give a much larger meaningless number.",
        "zh": "$\\bar v = \\frac{\\Delta x}{\\Delta t} = \\frac{240}{30} = 8\\ \\text{m/s}$。注意不要把距离乘以时间，那会得到一个无意义的大数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car's velocity drops from 20 m/s to 5 m/s in 3 s. What is its acceleration in m/s^2 (include the sign)?",
        "zh": "一辆车的速度在 3 s 内从 20 m/s 降到 5 m/s。它的加速度是多少 m/s^2（含符号）？"
      },
      "answer": "-5",
      "accept": [
        "-5.0",
        "-5 m/s^2",
        "-5 m/s2",
        "−5"
      ],
      "explanation": {
        "en": "$a = \\frac{\\Delta v}{\\Delta t} = \\frac{5 - 20}{3} = -5\\ \\text{m/s}^2$. The negative sign shows the car is slowing while moving in the positive direction; dropping the sign loses the physical meaning.",
        "zh": "$a = \\frac{\\Delta v}{\\Delta t} = \\frac{5 - 20}{3} = -5\\ \\text{m/s}^2$。负号表示车在沿正方向运动时减速；丢掉符号就失去了物理意义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object starts at position x = 12 m and ends at x = -3 m. What is its displacement in meters (include the sign)?",
        "zh": "一个物体从位置 x = 12 m 出发，终点在 x = -3 m。它的位移是多少米（含符号）？"
      },
      "answer": "-15",
      "accept": [
        "-15.0",
        "-15 m",
        "−15"
      ],
      "explanation": {
        "en": "$\\Delta x = x_f - x_i = -3 - 12 = -15\\ \\text{m}$. A common error is computing $12 - 3 = 9$ by ignoring the sign of the final position.",
        "zh": "$\\Delta x = x_f - x_i = -3 - 12 = -15\\ \\text{m}$。常见错误是忽略末位置的符号而算成 $12 - 3 = 9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A jogger runs 400 m east in 100 s, then 400 m back west in 100 s. What is the magnitude of the average velocity for the whole trip in m/s?",
        "zh": "一名慢跑者用 100 s 向东跑 400 m，再用 100 s 向西跑回 400 m。整段行程平均速度的大小是多少 m/s？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "0 m/s",
        "zero"
      ],
      "explanation": {
        "en": "The jogger returns to the start, so displacement is zero and $\\bar v = \\frac{0}{200} = 0$. Average speed would be $\\frac{800}{200} = 4$ m/s, so mixing up distance and displacement is the trap here.",
        "zh": "慢跑者回到起点，所以位移为零，$\\bar v = \\frac{0}{200} = 0$。平均速率则是 $\\frac{800}{200} = 4$ m/s，因此把路程和位移搞混是这里的陷阱。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Starting from rest, an object reaches 24 m/s after accelerating uniformly at 4 m/s^2. How long did this take, in seconds?",
        "zh": "一个物体从静止开始，以 4 m/s^2 匀加速，达到 24 m/s。这用了多少秒？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 s",
        "6s"
      ],
      "explanation": {
        "en": "From $a = \\frac{\\Delta v}{\\Delta t}$, $\\Delta t = \\frac{\\Delta v}{a} = \\frac{24 - 0}{4} = 6\\ \\text{s}$. Multiplying velocity by acceleration instead of dividing is the usual algebra slip.",
        "zh": "由 $a = \\frac{\\Delta v}{\\Delta t}$，$\\Delta t = \\frac{\\Delta v}{a} = \\frac{24 - 0}{4} = 6\\ \\text{s}$。把速度乘以加速度而不是相除，是常见的代数错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The slope of a straight position-time line rises from 4 m to 20 m over 4 s. What constant velocity does this represent, in m/s?",
        "zh": "一条位置-时间直线在 4 s 内从 4 m 升到 20 m。它代表的恒定速度是多少 m/s？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 m/s",
        "+4"
      ],
      "explanation": {
        "en": "Velocity is the slope: $\\frac{20 - 4}{4} = \\frac{16}{4} = 4\\ \\text{m/s}$. Reading only the final height (20) and dividing by time ignores the starting position.",
        "zh": "速度就是斜率：$\\frac{20 - 4}{4} = \\frac{16}{4} = 4\\ \\text{m/s}$。只读末端高度（20）再除以时间，就忽略了起始位置。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object moving in the +x direction has velocity +6 m/s and acceleration -2 m/s^2. In how many seconds does its velocity reach zero?",
        "zh": "一个沿 +x 方向运动的物体，速度为 +6 m/s，加速度为 -2 m/s^2。它的速度经过几秒变为零？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 s",
        "3s"
      ],
      "explanation": {
        "en": "Using $v = v_0 + at$, set $0 = 6 + (-2)t$, so $t = \\frac{6}{2} = 3\\ \\text{s}$. The negative acceleration steadily removes velocity; forgetting its sign would make the velocity grow instead of shrink.",
        "zh": "用 $v = v_0 + at$，令 $0 = 6 + (-2)t$，得 $t = \\frac{6}{2} = 3\\ \\text{s}$。负加速度不断削减速度；忽略它的符号会让速度增大而不是减小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A train travels 1500 m in 60 s. What is its average speed in m/s?",
        "zh": "一列火车在 60 s 内行驶 1500 m。它的平均速率是多少 m/s？"
      },
      "answer": "25",
      "accept": [
        "25.0",
        "25 m/s",
        "25m/s"
      ],
      "explanation": {
        "en": "Average speed is total distance over time: $\\frac{1500}{60} = 25\\ \\text{m/s}$. Dividing time by distance would invert the ratio and give the wrong units.",
        "zh": "平均速率是总路程除以时间：$\\frac{1500}{60} = 25\\ \\text{m/s}$。用时间除以路程会把比值颠倒并得到错误的单位。"
      }
    }
  ],
  "kinematics/motion-graphs": [
    {
      "type": "mc",
      "question": {
        "en": "On a position-time graph, a curve that gets steeper over time represents motion that is:",
        "zh": "在位置-时间图上，一条随时间变得越来越陡的曲线表示的运动是："
      },
      "choices": [
        "Speeding up",
        "Moving at constant velocity",
        "At rest",
        "Slowing down"
      ],
      "answer": 0,
      "explanation": {
        "en": "A steeper slope means larger velocity, so a curve that steepens shows the object speeding up. A straight (constant-slope) line would instead mean constant velocity.",
        "zh": "斜率越陡表示速度越大，所以越来越陡的曲线表示物体在加速。若是斜率不变的直线，则表示恒定速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The area under a velocity-time graph gives which quantity?",
        "zh": "速度-时间图下的面积给出哪个量？"
      },
      "choices": [
        "Acceleration",
        "Displacement",
        "Speed",
        "Jerk"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area under a velocity-time graph is velocity times time, which equals displacement. The slope of that same graph gives acceleration, so confusing area with slope gives the wrong quantity.",
        "zh": "速度-时间图下的面积是速度乘以时间，等于位移。而该图的斜率给出加速度，所以把面积和斜率混淆会得到错误的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which kinematic equation should you use when you know initial velocity, acceleration, and time, and want the displacement?",
        "zh": "当已知初速度、加速度和时间，想求位移时，应使用哪个运动学方程？"
      },
      "choices": [
        "$v = v_0 + at$",
        "$v^2 = v_0^2 + 2a\\Delta x$",
        "$\\Delta x = v_0 t + \\frac{1}{2}at^2$",
        "$\\Delta x = \\frac{v + v_0}{2}\\,t$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\Delta x = v_0 t + \\frac{1}{2}at^2$ directly links displacement to $v_0$, $a$, and $t$. The equation $v^2 = v_0^2 + 2a\\Delta x$ has no time in it, so it fits a different set of knowns.",
        "zh": "$\\Delta x = v_0 t + \\frac{1}{2}at^2$ 直接把位移与 $v_0$、$a$、$t$ 联系起来。而 $v^2 = v_0^2 + 2a\\Delta x$ 中不含时间，适用于另一组已知量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which kinematic equation contains no time variable?",
        "zh": "哪个运动学方程中不含时间变量？"
      },
      "choices": [
        "$v = v_0 + at$",
        "$\\Delta x = v_0 t + \\frac{1}{2}at^2$",
        "$\\Delta x = \\frac{v + v_0}{2}\\,t$",
        "$v^2 = v_0^2 + 2a\\Delta x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$v^2 = v_0^2 + 2a\\Delta x$ relates velocities, acceleration, and displacement without time. It is the go-to equation when time is neither given nor asked for.",
        "zh": "$v^2 = v_0^2 + 2a\\Delta x$ 把速度、加速度和位移联系起来而不含时间。当时间既未给出也不需求时，就用这个方程。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A velocity-time graph is a horizontal line at v = 5 m/s. The acceleration of the object is:",
        "zh": "一条速度-时间图是位于 v = 5 m/s 的水平线。物体的加速度是："
      },
      "choices": [
        "Zero",
        "$5\\ \\text{m/s}^2$",
        "Increasing",
        "$-5\\ \\text{m/s}^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A horizontal velocity-time line has zero slope, and slope is acceleration, so the acceleration is zero even though the velocity value is 5 m/s. Reading the height as the acceleration is the trap.",
        "zh": "水平的速度-时间线斜率为零，而斜率即加速度，所以尽管速度值是 5 m/s，加速度仍为零。把高度当成加速度就是陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Starting from rest with constant acceleration, an object's position-time graph has what shape?",
        "zh": "从静止开始做匀加速运动，物体的位置-时间图是什么形状？"
      },
      "choices": [
        "A horizontal line",
        "An upward-curving parabola",
        "A straight tilted line",
        "A downward step"
      ],
      "answer": 1,
      "explanation": {
        "en": "With constant acceleration, $x = \\frac{1}{2}at^2$, which is quadratic in $t$, giving a parabola. A straight tilted line would instead represent constant velocity (no acceleration).",
        "zh": "在匀加速下，$x = \\frac{1}{2}at^2$，是 $t$ 的二次函数，图像为抛物线。倾斜的直线则表示恒定速度（无加速度）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car starts at 4 m/s and accelerates at 3 m/s^2 for 5 s. What is its final velocity?",
        "zh": "一辆车从 4 m/s 开始以 3 m/s^2 加速 5 s。它的末速度是多少？"
      },
      "choices": [
        "$15\\ \\text{m/s}$",
        "$12\\ \\text{m/s}$",
        "$19\\ \\text{m/s}$",
        "$23\\ \\text{m/s}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$v = v_0 + at = 4 + 3(5) = 19\\ \\text{m/s}$. Forgetting the initial 4 m/s (just computing $3 \\times 5 = 15$) is the common omission.",
        "zh": "$v = v_0 + at = 4 + 3(5) = 19\\ \\text{m/s}$。忘记初速度 4 m/s（只算 $3 \\times 5 = 15$）是常见的遗漏。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On an acceleration-time graph, the area under the curve gives:",
        "zh": "在加速度-时间图上，曲线下的面积给出："
      },
      "choices": [
        "Displacement",
        "Position",
        "Force",
        "Change in velocity"
      ],
      "answer": 3,
      "explanation": {
        "en": "Area under an acceleration-time graph is acceleration times time, which equals the change in velocity $\\Delta v$. Displacement instead comes from the area under a velocity-time graph.",
        "zh": "加速度-时间图下的面积是加速度乘以时间，等于速度的变化 $\\Delta v$。而位移来自速度-时间图下的面积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A velocity-time graph crosses zero and becomes negative. At the instant it crosses zero, the object is:",
        "zh": "一条速度-时间图越过零并变为负值。在它越过零的瞬间，物体处于："
      },
      "choices": [
        "Momentarily at rest, about to reverse direction",
        "At its maximum speed",
        "Not moving at all during the whole time",
        "Accelerating to zero permanently"
      ],
      "answer": 0,
      "explanation": {
        "en": "When velocity passes through zero and changes sign, the object is momentarily at rest and then reverses direction. It is not permanently stopped, since the velocity becomes nonzero (negative) right after.",
        "zh": "当速度经过零并改变符号时，物体瞬间静止，随后反向运动。它并非永久停止，因为紧接着速度变为非零（负值）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object moving at 12 m/s decelerates uniformly and stops in 4 s. How far does it travel while stopping?",
        "zh": "一个以 12 m/s 运动的物体匀减速，在 4 s 内停下。它在停下过程中走了多远？"
      },
      "choices": [
        "$48\\ \\text{m}$",
        "$24\\ \\text{m}$",
        "$12\\ \\text{m}$",
        "$96\\ \\text{m}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use average velocity: $\\Delta x = \\frac{v + v_0}{2}t = \\frac{0 + 12}{2}(4) = 24\\ \\text{m}$. Multiplying the full 12 m/s by 4 s (giving 48 m) ignores that the object slows down over the interval.",
        "zh": "用平均速度：$\\Delta x = \\frac{v + v_0}{2}t = \\frac{0 + 12}{2}(4) = 24\\ \\text{m}$。用完整的 12 m/s 乘以 4 s（得到 48 m）忽略了物体在这段时间内在减速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two straight-line segments on a velocity-time graph both slope upward, but the second is steeper. Compared to the first, the second segment has:",
        "zh": "速度-时间图上有两段向上倾斜的直线段，第二段更陡。与第一段相比，第二段具有："
      },
      "choices": [
        "Smaller acceleration",
        "Zero acceleration",
        "Greater acceleration",
        "Negative acceleration"
      ],
      "answer": 2,
      "explanation": {
        "en": "Steeper slope on a velocity-time graph means greater acceleration. Both segments accelerate (positive slope); the steeper one just does so more rapidly.",
        "zh": "速度-时间图上斜率越陡表示加速度越大。两段都在加速（正斜率），更陡的那段只是加速更快。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which pairing correctly matches a graph feature to the quantity it gives?",
        "zh": "下列哪个配对正确地把图像特征与它给出的量对应起来？"
      },
      "choices": [
        "Slope of position-time graph = acceleration",
        "Slope of velocity-time graph = displacement",
        "Area under position-time graph = velocity",
        "Area under velocity-time graph = displacement"
      ],
      "answer": 3,
      "explanation": {
        "en": "Area under a velocity-time graph equals displacement. The slope of a position-time graph gives velocity (not acceleration), and the slope of a velocity-time graph gives acceleration (not displacement).",
        "zh": "速度-时间图下的面积等于位移。位置-时间图的斜率给出速度（不是加速度），速度-时间图的斜率给出加速度（不是位移）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object starts from rest and accelerates at 2 m/s^2 for 6 s. How far does it travel, in meters?",
        "zh": "一个物体从静止开始以 2 m/s^2 加速 6 s。它走了多少米？"
      },
      "answer": "36",
      "accept": [
        "36.0",
        "36 m",
        "36m"
      ],
      "explanation": {
        "en": "$\\Delta x = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2}(2)(6^2) = 36\\ \\text{m}$. Forgetting to square the time (using 6 instead of 36) is the frequent error.",
        "zh": "$\\Delta x = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2}(2)(6^2) = 36\\ \\text{m}$。忘记把时间平方（用 6 而不是 36）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car accelerates from 10 m/s to 30 m/s over a distance of 200 m. What is its acceleration in m/s^2?",
        "zh": "一辆车在 200 m 的距离内从 10 m/s 加速到 30 m/s。它的加速度是多少 m/s^2？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2 m/s^2",
        "2 m/s2"
      ],
      "explanation": {
        "en": "Use $v^2 = v_0^2 + 2a\\Delta x$: $30^2 = 10^2 + 2a(200)$, so $900 - 100 = 400a$, giving $a = 2\\ \\text{m/s}^2$. This is the right equation because time is not given.",
        "zh": "用 $v^2 = v_0^2 + 2a\\Delta x$：$30^2 = 10^2 + 2a(200)$，所以 $900 - 100 = 400a$，得 $a = 2\\ \\text{m/s}^2$。因为没给时间，这是正确的方程。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A velocity-time graph shows constant v = 8 m/s from t = 0 to t = 5 s. What displacement does the area under the graph represent, in meters?",
        "zh": "一条速度-时间图显示从 t = 0 到 t = 5 s 速度恒为 8 m/s。图下面积代表的位移是多少米？"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "40 m",
        "40m"
      ],
      "explanation": {
        "en": "The area is a rectangle: $8 \\times 5 = 40\\ \\text{m}$. Since velocity is constant the acceleration (slope) is zero, so do not try to add a $\\frac{1}{2}at^2$ term.",
        "zh": "面积是一个矩形：$8 \\times 5 = 40\\ \\text{m}$。由于速度恒定，加速度（斜率）为零，所以不要再加 $\\frac{1}{2}at^2$ 项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A bike slows from 15 m/s to 3 m/s at a constant -4 m/s^2. How long does this take, in seconds?",
        "zh": "一辆自行车以恒定的 -4 m/s^2 从 15 m/s 减速到 3 m/s。这需要多少秒？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 s",
        "3s"
      ],
      "explanation": {
        "en": "From $v = v_0 + at$: $3 = 15 + (-4)t$, so $-12 = -4t$ and $t = 3\\ \\text{s}$. Dropping the sign of the acceleration would flip the sign of the time.",
        "zh": "由 $v = v_0 + at$：$3 = 15 + (-4)t$，所以 $-12 = -4t$，$t = 3\\ \\text{s}$。丢掉加速度的符号会使时间的符号翻转。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the average-velocity form, an object goes from 4 m/s to 16 m/s in 3 s at constant acceleration. What displacement does it cover, in meters?",
        "zh": "用平均速度公式，一个物体在匀加速下 3 s 内从 4 m/s 变到 16 m/s。它经过的位移是多少米？"
      },
      "answer": "30",
      "accept": [
        "30.0",
        "30 m",
        "30m"
      ],
      "explanation": {
        "en": "$\\Delta x = \\frac{v + v_0}{2}t = \\frac{16 + 4}{2}(3) = 10 \\times 3 = 30\\ \\text{m}$. Using only the final velocity times time (48 m) overcounts because the object was slower earlier.",
        "zh": "$\\Delta x = \\frac{v + v_0}{2}t = \\frac{16 + 4}{2}(3) = 10 \\times 3 = 30\\ \\text{m}$。只用末速度乘以时间（48 m）会多算，因为物体先前更慢。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The slope between two points on a velocity-time graph is: velocity rises from 6 m/s to 18 m/s over 4 s. What is the acceleration in m/s^2?",
        "zh": "速度-时间图上两点之间的斜率：速度在 4 s 内从 6 m/s 升到 18 m/s。加速度是多少 m/s^2？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 m/s^2",
        "3 m/s2"
      ],
      "explanation": {
        "en": "Acceleration is the slope: $\\frac{18 - 6}{4} = \\frac{12}{4} = 3\\ \\text{m/s}^2$. Using the final velocity (18) alone instead of the change (12) gives the wrong slope.",
        "zh": "加速度就是斜率：$\\frac{18 - 6}{4} = \\frac{12}{4} = 3\\ \\text{m/s}^2$。只用末速度（18）而不用变化量（12），会得到错误的斜率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object at rest accelerates uniformly and travels 50 m in 5 s. What is its acceleration in m/s^2?",
        "zh": "一个静止的物体匀加速，5 s 内走了 50 m。它的加速度是多少 m/s^2？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 m/s^2",
        "4 m/s2"
      ],
      "explanation": {
        "en": "From $\\Delta x = \\frac{1}{2}at^2$: $50 = \\frac{1}{2}a(5^2) = 12.5a$, so $a = 4\\ \\text{m/s}^2$. Forgetting the factor of $\\frac{1}{2}$ would give 2 m/s^2.",
        "zh": "由 $\\Delta x = \\frac{1}{2}at^2$：$50 = \\frac{1}{2}a(5^2) = 12.5a$，所以 $a = 4\\ \\text{m/s}^2$。忘记 $\\frac{1}{2}$ 这个因子会得到 2 m/s^2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A velocity-time graph is a triangle: velocity rises linearly from 0 to 20 m/s over 10 s. What is the total displacement, in meters?",
        "zh": "一条速度-时间图是三角形：速度在 10 s 内从 0 线性升到 20 m/s。总位移是多少米？"
      },
      "answer": "100",
      "accept": [
        "100.0",
        "100 m",
        "100m"
      ],
      "explanation": {
        "en": "Area of the triangle is $\\frac{1}{2}(base)(height) = \\frac{1}{2}(10)(20) = 100\\ \\text{m}$. Treating it as a full rectangle ($20 \\times 10 = 200$) doubles the true displacement.",
        "zh": "三角形面积为 $\\frac{1}{2}(底)(高) = \\frac{1}{2}(10)(20) = 100\\ \\text{m}$。若当成完整矩形（$20 \\times 10 = 200$），会把真实位移算成两倍。"
      }
    }
  ],
  "kinematics/projectile-motion": [
    {
      "type": "mc",
      "question": {
        "en": "For an object in free fall near Earth's surface (ignoring air resistance), the acceleration is:",
        "zh": "对于地球表面附近自由下落的物体（忽略空气阻力），其加速度是："
      },
      "choices": [
        "About $9.8\\ \\text{m/s}^2$ downward",
        "Zero, since it falls freely",
        "Increasing as it speeds up",
        "Equal to its weight"
      ],
      "answer": 0,
      "explanation": {
        "en": "In free fall the only acceleration is gravity, about $9.8\\ \\text{m/s}^2$ directed downward, and it stays constant regardless of speed. The idea that acceleration grows as the object speeds up confuses increasing velocity with increasing acceleration.",
        "zh": "自由下落时唯一的加速度是重力，约 $9.8\\ \\text{m/s}^2$ 方向向下，且不随速度改变而保持恒定。认为加速度随物体加速而增大，是把速度增大与加速度增大混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball is thrown straight up. At the highest point of its path, its velocity and acceleration are:",
        "zh": "一个球被竖直上抛。在轨迹最高点，它的速度和加速度分别是："
      },
      "choices": [
        "Both zero",
        "Velocity zero, acceleration $9.8\\ \\text{m/s}^2$ downward",
        "Velocity maximum, acceleration zero",
        "Velocity zero, acceleration zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "At the top the velocity is momentarily zero, but gravity never turns off, so the acceleration is still $9.8\\ \\text{m/s}^2$ downward. Assuming acceleration is zero just because velocity is zero is the classic mistake.",
        "zh": "在最高点速度瞬间为零，但重力从不消失，所以加速度仍为 $9.8\\ \\text{m/s}^2$ 方向向下。仅因速度为零就认为加速度为零，是典型的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In projectile motion (no air resistance), the horizontal component of velocity:",
        "zh": "在抛体运动中（无空气阻力），速度的水平分量："
      },
      "choices": [
        "Increases due to gravity",
        "Decreases to zero at the top",
        "Stays constant throughout the flight",
        "Reverses direction at the top"
      ],
      "answer": 2,
      "explanation": {
        "en": "Gravity acts only vertically, so there is no horizontal acceleration and the horizontal velocity stays constant. Expecting it to slow or reverse mistakenly applies vertical gravity to the horizontal direction.",
        "zh": "重力只沿竖直方向作用，所以水平方向没有加速度，水平速度保持恒定。以为它会减慢或反向，是错误地把竖直方向的重力用到了水平方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball is thrown horizontally off a cliff at the same instant an identical ball is dropped from rest beside it. Which hits the ground first?",
        "zh": "一个球从悬崖边水平抛出，同一瞬间旁边一个相同的球从静止释放。哪个先着地？"
      },
      "choices": [
        "The thrown ball, because it moves faster",
        "The dropped ball, because it goes straight down",
        "It depends on the horizontal speed",
        "They hit at the same time"
      ],
      "answer": 3,
      "explanation": {
        "en": "Vertical and horizontal motions are independent. Both balls have the same initial vertical velocity (zero) and the same downward acceleration, so they land together. The horizontal speed changes where it lands, not when.",
        "zh": "竖直和水平运动相互独立。两个球的初始竖直速度相同（都为零），向下的加速度也相同，所以同时着地。水平速度改变的是落地地点，而不是落地时间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rock is dropped from rest. Using $g = 10\\ \\text{m/s}^2$, what is its speed after 4 s?",
        "zh": "一块石头从静止释放。取 $g = 10\\ \\text{m/s}^2$，4 s 后它的速率是多少？"
      },
      "choices": [
        "$40\\ \\text{m/s}$",
        "$20\\ \\text{m/s}$",
        "$10\\ \\text{m/s}$",
        "$80\\ \\text{m/s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$v = gt = 10 \\times 4 = 40\\ \\text{m/s}$. Using $\\frac{1}{2}gt^2$ (which is a distance, giving 80) instead of $gt$ for speed is the common mix-up.",
        "zh": "$v = gt = 10 \\times 4 = 40\\ \\text{m/s}$。求速率时误用 $\\frac{1}{2}gt^2$（那是距离，得 80）而不是 $gt$，是常见的混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a projectile launched at an angle, which quantity determines the time it stays in the air (on level ground)?",
        "zh": "对于以某角度发射的抛体（在水平地面上），哪个量决定它在空中停留的时间？"
      },
      "choices": [
        "The horizontal velocity component",
        "The vertical velocity component",
        "The total launch speed only",
        "The horizontal range"
      ],
      "answer": 1,
      "explanation": {
        "en": "Time of flight depends only on the vertical motion, set by the vertical velocity component and gravity. The horizontal component affects how far it goes, not how long it stays up.",
        "zh": "飞行时间只取决于竖直运动，由竖直速度分量和重力决定。水平分量影响它飞多远，而不是停留多久。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball is thrown straight up at 20 m/s. Using $g = 10\\ \\text{m/s}^2$, how high does it rise?",
        "zh": "一个球以 20 m/s 竖直上抛。取 $g = 10\\ \\text{m/s}^2$，它上升多高？"
      },
      "choices": [
        "$10\\ \\text{m}$",
        "$40\\ \\text{m}$",
        "$20\\ \\text{m}$",
        "$4\\ \\text{m}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At the top $v = 0$, so $v^2 = v_0^2 - 2g\\,h$ gives $0 = 20^2 - 2(10)h$, so $h = \\frac{400}{20} = 20\\ \\text{m}$. Forgetting the factor of 2 with $g$ would double the answer.",
        "zh": "在最高点 $v = 0$，由 $v^2 = v_0^2 - 2g\\,h$ 得 $0 = 20^2 - 2(10)h$，所以 $h = \\frac{400}{20} = 20\\ \\text{m}$。忘记 $g$ 前的因子 2 会把答案算成两倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At what launch angle (on level ground, ignoring air resistance) does a projectile achieve maximum range for a fixed launch speed?",
        "zh": "在水平地面上（忽略空气阻力），固定发射速率时，抛体在什么发射角度下射程最大？"
      },
      "choices": [
        "$30^{\\circ}$",
        "$90^{\\circ}$",
        "$60^{\\circ}$",
        "$45^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Maximum range on level ground occurs at $45^{\\circ}$, which best balances horizontal speed against time in the air. A $90^{\\circ}$ launch goes straight up and has zero range, so bigger angle is not always farther.",
        "zh": "水平地面上的最大射程出现在 $45^{\\circ}$，它在水平速度和滞空时间之间取得最佳平衡。$90^{\\circ}$ 发射是竖直向上，射程为零，所以角度越大不一定越远。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A projectile is launched at 50 m/s at an angle whose sine is 0.6 and cosine is 0.8. What is the initial vertical velocity component?",
        "zh": "一个抛体以 50 m/s 发射，其角度的正弦为 0.6、余弦为 0.8。初始竖直速度分量是多少？"
      },
      "choices": [
        "$30\\ \\text{m/s}$",
        "$40\\ \\text{m/s}$",
        "$50\\ \\text{m/s}$",
        "$25\\ \\text{m/s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The vertical component uses sine: $v_{0y} = 50 \\times 0.6 = 30\\ \\text{m/s}$. Using cosine (0.8) gives the horizontal component (40 m/s), so swapping sine and cosine is the trap.",
        "zh": "竖直分量用正弦：$v_{0y} = 50 \\times 0.6 = 30\\ \\text{m/s}$。用余弦（0.8）得到的是水平分量（40 m/s），所以把正弦和余弦互换就是陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball rolls off a table and lands on the floor. During the fall, its horizontal acceleration is:",
        "zh": "一个球从桌子上滚落到地板上。在下落过程中，它的水平加速度是："
      },
      "choices": [
        "$9.8\\ \\text{m/s}^2$",
        "Zero",
        "Equal to its horizontal velocity",
        "Increasing toward the floor"
      ],
      "answer": 1,
      "explanation": {
        "en": "Gravity has no horizontal component, so the horizontal acceleration is zero and the horizontal velocity stays constant. Only the vertical motion accelerates at $9.8\\ \\text{m/s}^2$.",
        "zh": "重力没有水平分量，所以水平加速度为零，水平速度保持恒定。只有竖直运动以 $9.8\\ \\text{m/s}^2$ 加速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball thrown straight up returns to its launch height. Compared to launch, its speed on the way down at that height is (ignoring air resistance):",
        "zh": "一个竖直上抛的球回到发射高度。与发射时相比，它在该高度下落时的速率（忽略空气阻力）是："
      },
      "choices": [
        "Greater than the launch speed",
        "Less than the launch speed",
        "Equal to the launch speed",
        "Zero"
      ],
      "answer": 2,
      "explanation": {
        "en": "By symmetry of free fall, the speed at any given height on the way down equals the speed at that height on the way up, so it returns at the launch speed. Thinking it lands slower ignores that gravity restores the speed it removed.",
        "zh": "由自由落体的对称性，下落时在任一高度的速率等于上升时在该高度的速率，所以它以发射速率返回。认为它落回时更慢，忽略了重力把之前削减的速率又还了回来。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about the vertical and horizontal motions of a projectile is correct?",
        "zh": "关于抛体的竖直与水平运动，下列哪种说法正确？"
      },
      "choices": [
        "They share the same acceleration",
        "Vertical velocity is constant",
        "Horizontal motion controls the fall time",
        "They are independent and analyzed separately"
      ],
      "answer": 3,
      "explanation": {
        "en": "The horizontal and vertical motions are independent; you analyze each with its own equations linked only by shared time. The horizontal velocity is constant while the vertical velocity changes due to gravity, so they do not share the same acceleration.",
        "zh": "水平和竖直运动相互独立；用各自的方程分别分析，仅通过共同的时间联系。水平速度恒定，而竖直速度因重力而变化，所以两者的加速度并不相同。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object is dropped from rest. Using $g = 10\\ \\text{m/s}^2$, how far does it fall in 3 s, in meters?",
        "zh": "一个物体从静止释放。取 $g = 10\\ \\text{m/s}^2$，它在 3 s 内下落多少米？"
      },
      "answer": "45",
      "accept": [
        "45.0",
        "45 m",
        "45m"
      ],
      "explanation": {
        "en": "$y = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(3^2) = 45\\ \\text{m}$. Forgetting to square the time (getting 15) or dropping the $\\frac{1}{2}$ (getting 90) are the usual slips.",
        "zh": "$y = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(3^2) = 45\\ \\text{m}$。忘记把时间平方（得 15）或漏掉 $\\frac{1}{2}$（得 90）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball is dropped from rest and falls 20 m. Using $g = 10\\ \\text{m/s}^2$, how long is it in the air, in seconds?",
        "zh": "一个球从静止释放下落 20 m。取 $g = 10\\ \\text{m/s}^2$，它在空中停留多少秒？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2 s",
        "2s"
      ],
      "explanation": {
        "en": "From $y = \\frac{1}{2}gt^2$: $20 = \\frac{1}{2}(10)t^2 = 5t^2$, so $t^2 = 4$ and $t = 2\\ \\text{s}$. Forgetting the square root would leave you with 4 s.",
        "zh": "由 $y = \\frac{1}{2}gt^2$：$20 = \\frac{1}{2}(10)t^2 = 5t^2$，所以 $t^2 = 4$，$t = 2\\ \\text{s}$。忘记开平方会得到 4 s。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball is thrown horizontally at 15 m/s from a cliff and stays in the air for 4 s. How far horizontally does it travel, in meters?",
        "zh": "一个球以 15 m/s 从悬崖水平抛出，在空中停留 4 s。它水平方向飞行多少米？"
      },
      "answer": "60",
      "accept": [
        "60.0",
        "60 m",
        "60m"
      ],
      "explanation": {
        "en": "Horizontal velocity is constant, so $x = v_x t = 15 \\times 4 = 60\\ \\text{m}$. Do not apply gravity to the horizontal direction; only the time comes from the vertical fall.",
        "zh": "水平速度恒定，所以 $x = v_x t = 15 \\times 4 = 60\\ \\text{m}$。不要把重力用于水平方向；只有时间来自竖直下落。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball is thrown straight up at 30 m/s. Using $g = 10\\ \\text{m/s}^2$, how many seconds until it reaches its highest point?",
        "zh": "一个球以 30 m/s 竖直上抛。取 $g = 10\\ \\text{m/s}^2$，经过几秒到达最高点？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 s",
        "3s"
      ],
      "explanation": {
        "en": "At the top $v = 0$, so from $v = v_0 - gt$, $0 = 30 - 10t$ gives $t = 3\\ \\text{s}$. This is the time up only; the total flight time back to the start would be twice this.",
        "zh": "在最高点 $v = 0$，由 $v = v_0 - gt$，$0 = 30 - 10t$ 得 $t = 3\\ \\text{s}$。这只是上升时间；回到起点的总飞行时间是它的两倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A projectile is launched at 50 m/s at an angle with sine 0.6 and cosine 0.8. What is its horizontal velocity component, in m/s?",
        "zh": "一个抛体以 50 m/s 发射，角度的正弦为 0.6、余弦为 0.8。它的水平速度分量是多少 m/s？"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "40 m/s",
        "40m/s"
      ],
      "explanation": {
        "en": "Horizontal component uses cosine: $v_x = 50 \\times 0.8 = 40\\ \\text{m/s}$. Using sine (0.6) instead gives the vertical component (30 m/s), which is the common swap.",
        "zh": "水平分量用余弦：$v_x = 50 \\times 0.8 = 40\\ \\text{m/s}$。改用正弦（0.6）得到的是竖直分量（30 m/s），这是常见的互换错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball is thrown horizontally at 20 m/s from a height of 80 m. Using $g = 10\\ \\text{m/s}^2$, how far from the base of the cliff does it land, in meters?",
        "zh": "一个球以 20 m/s 从 80 m 高处水平抛出。取 $g = 10\\ \\text{m/s}^2$，它落在离崖底多远处，单位米？"
      },
      "answer": "80",
      "accept": [
        "80.0",
        "80 m",
        "80m"
      ],
      "explanation": {
        "en": "First find fall time from $80 = \\frac{1}{2}(10)t^2 = 5t^2$, so $t = 4\\ \\text{s}$. Then $x = v_x t = 20 \\times 4 = 80\\ \\text{m}$. The vertical drop sets the time; the horizontal speed then sets the distance.",
        "zh": "先由 $80 = \\frac{1}{2}(10)t^2 = 5t^2$ 求下落时间，得 $t = 4\\ \\text{s}$。再算 $x = v_x t = 20 \\times 4 = 80\\ \\text{m}$。竖直下落决定时间，水平速度再决定距离。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A projectile launched from level ground has a vertical launch component of 25 m/s. Using $g = 10\\ \\text{m/s}^2$, what is its total time of flight, in seconds?",
        "zh": "一个从水平地面发射的抛体，竖直发射分量为 25 m/s。取 $g = 10\\ \\text{m/s}^2$，它的总飞行时间是多少秒？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5 s",
        "5s"
      ],
      "explanation": {
        "en": "Time up is $\\frac{v_{0y}}{g} = \\frac{25}{10} = 2.5\\ \\text{s}$, and total flight is symmetric, so $2 \\times 2.5 = 5\\ \\text{s}$. Reporting only the time to the top (2.5 s) forgets the descent.",
        "zh": "上升时间为 $\\frac{v_{0y}}{g} = \\frac{25}{10} = 2.5\\ \\text{s}$，总飞行对称，所以为 $2 \\times 2.5 = 5\\ \\text{s}$。只报到最高点的时间（2.5 s）就漏掉了下落过程。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A stone is dropped from rest. Using $g = 9.8\\ \\text{m/s}^2$, what is its speed after 2 s, in m/s?",
        "zh": "一块石头从静止释放。取 $g = 9.8\\ \\text{m/s}^2$，2 s 后它的速率是多少 m/s？"
      },
      "answer": "19.6",
      "accept": [
        "19.6 m/s",
        "19.60",
        "19.6m/s"
      ],
      "explanation": {
        "en": "$v = gt = 9.8 \\times 2 = 19.6\\ \\text{m/s}$. Using $\\frac{1}{2}gt^2$ here would give a distance (19.6 m), not a speed, even though the number looks similar.",
        "zh": "$v = gt = 9.8 \\times 2 = 19.6\\ \\text{m/s}$。此处若用 $\\frac{1}{2}gt^2$ 得到的是距离（19.6 m）而不是速率，尽管数值看起来相近。"
      }
    }
  ],
  "dynamics/newtons-laws": [
    {
      "type": "mc",
      "question": {
        "en": "Which statement best expresses Newton's first law?",
        "zh": "哪一句最能表达牛顿第一定律？"
      },
      "choices": [
        "An object at rest stays at rest and a moving object keeps constant velocity unless a net external force acts on it",
        "A moving object always slows down and stops on its own",
        "Force equals mass times acceleration",
        "Every action has an equal and opposite reaction"
      ],
      "answer": 0,
      "explanation": {
        "en": "The first law (inertia) says that with zero net force, velocity does not change. The idea that motion naturally dies away comes from everyday friction, not from any law of nature; $F=ma$ is the second law and action-reaction is the third.",
        "zh": "第一定律（惯性）指出，合力为零时速度不变。认为运动会自然消失是日常摩擦造成的错觉，而非自然规律；$F=ma$ 是第二定律，作用与反作用是第三定律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A net force of 12 N acts on a 3 kg block. What is its acceleration?",
        "zh": "12 N 的合力作用在 3 kg 的物块上，它的加速度是多少？"
      },
      "choices": [
        "$36\\ \\text{m/s}^2$",
        "$4\\ \\text{m/s}^2$",
        "$0.25\\ \\text{m/s}^2$",
        "$9\\ \\text{m/s}^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the second law $a=F/m=12/3=4\\ \\text{m/s}^2$. Multiplying force by mass instead of dividing gives 36 and inverts the relationship.",
        "zh": "由第二定律 $a=F/m=12/3=4\\ \\text{m/s}^2$。把力乘以质量而不是相除会得到 36，颠倒了关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You push on a wall with 50 N. What force does the wall exert on you?",
        "zh": "你用 50 N 推墙。墙对你施加多大的力？"
      },
      "choices": [
        "Less than 50 N because the wall is rigid",
        "Zero, because the wall does not move",
        "50 N directed back toward you",
        "More than 50 N because the wall resists"
      ],
      "answer": 2,
      "explanation": {
        "en": "The third law gives an equal and opposite reaction: the wall pushes back with 50 N. Whether the wall moves is irrelevant; thinking a stationary object exerts no force confuses motion with force.",
        "zh": "第三定律给出大小相等、方向相反的反作用力：墙以 50 N 回推。墙是否移动无关紧要；认为静止物体不施加力是把运动和力混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An action-reaction pair of forces always acts on:",
        "zh": "一对作用力与反作用力总是作用在："
      },
      "choices": [
        "the same object",
        "objects moving in the same direction",
        "objects of equal mass",
        "two different objects"
      ],
      "answer": 3,
      "explanation": {
        "en": "Action-reaction forces act on two different bodies, one on each. Because they act on different objects, they never cancel each other; assuming they act on the same object is the classic error that would predict no motion is ever possible.",
        "zh": "作用力与反作用力作用在两个不同物体上，每个物体各受一个。因为作用在不同物体上，它们从不相互抵消；认为它们作用在同一物体上是经典错误，那样会推出永远无法产生运动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two forces act on a 2 kg cart: 10 N right and 4 N left. What is the acceleration?",
        "zh": "两个力作用在 2 kg 小车上：向右 10 N，向左 4 N。加速度是多少？"
      },
      "choices": [
        "$3\\ \\text{m/s}^2$ right",
        "$2\\ \\text{m/s}^2$ right",
        "$7\\ \\text{m/s}^2$ right",
        "$14\\ \\text{m/s}^2$ right"
      ],
      "answer": 0,
      "explanation": {
        "en": "Net force $=10-4=6\\ \\text{N}$, so $a=6/2=3\\ \\text{m/s}^2$. Adding the forces instead of subtracting the opposing one gives 14 N and a wrong acceleration.",
        "zh": "合力 $=10-4=6\\ \\text{N}$，所以 $a=6/2=3\\ \\text{m/s}^2$。把两力相加而不是减去反向的力会得到 14 N 和错误的加速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car moves at constant velocity on a straight road. What is the net force on it?",
        "zh": "一辆车在直路上匀速行驶。它受到的合力是多少？"
      },
      "choices": [
        "Equal to the engine's forward force",
        "Zero",
        "Directed forward",
        "Directed backward"
      ],
      "answer": 1,
      "explanation": {
        "en": "Constant velocity means zero acceleration, so by the second law the net force is zero: drive force and resistive forces balance. Thinking motion requires a leftover forward force is the Aristotelian mistake the first law corrects.",
        "zh": "匀速意味着加速度为零，由第二定律合力为零：驱动力与阻力平衡。认为运动需要剩余的向前的力是亚里士多德式的错误，正是第一定律所纠正的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which quantity measures an object's inertia?",
        "zh": "哪个量衡量物体的惯性？"
      },
      "choices": [
        "Its weight",
        "Its velocity",
        "Its mass",
        "Its volume"
      ],
      "answer": 2,
      "explanation": {
        "en": "Mass is the measure of inertia — resistance to a change in velocity. Weight is the gravitational force on the mass and changes with location, so it is not the inertia itself.",
        "zh": "质量是惯性的量度——对速度变化的抵抗。重量是作用在质量上的引力，会随地点变化，所以它本身不是惯性。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the net force on an object is doubled while its mass stays the same, its acceleration:",
        "zh": "如果作用在物体上的合力加倍而质量不变，它的加速度："
      },
      "choices": [
        "quadruples",
        "stays the same",
        "is cut in half",
        "doubles"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $a=F/m$, acceleration is proportional to net force, so doubling $F$ doubles $a$. Halving would occur if the mass (not the force) were doubled.",
        "zh": "由于 $a=F/m$，加速度与合力成正比，所以 $F$ 加倍则 $a$ 加倍。若加倍的是质量而非力，加速度才会减半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 0.5 kg ball is given an acceleration of 20 m/s^2. What net force acts on it?",
        "zh": "一个 0.5 kg 的球获得 20 m/s^2 的加速度。作用在它上的合力是多少？"
      },
      "choices": [
        "$10\\ \\text{N}$",
        "$0.025\\ \\text{N}$",
        "$20.5\\ \\text{N}$",
        "$40\\ \\text{N}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$F=ma=0.5\\times 20=10\\ \\text{N}$. Dividing mass by acceleration gives 0.025, and adding them (20.5) treats different quantities as if they add.",
        "zh": "$F=ma=0.5\\times 20=10\\ \\text{N}$。用质量除以加速度得到 0.025，而把它们相加（20.5）是把不同物理量当作可相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A book rests on a table. Which pair are true Newton's-third-law partners?",
        "zh": "一本书放在桌上。哪一对是真正的牛顿第三定律配对？"
      },
      "choices": [
        "Earth pulls book down; table pushes book up",
        "Book pushes down on table; table pushes up on book",
        "Book's weight; the normal force on the book",
        "Book's weight; air pressure on the book"
      ],
      "answer": 1,
      "explanation": {
        "en": "Third-law partners are the same type of force between the same two objects, reversed: book-on-table down and table-on-book up. The weight and normal force act on the same object (the book) and merely balance, so they are not a third-law pair.",
        "zh": "第三定律配对是同两物体间同类型、方向相反的力：书压桌向下、桌托书向上。重量与法向力作用在同一物体（书）上只是相互平衡，因此不是第三定律配对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An elevator moves upward at constant speed. Compared with the person's weight, the normal force from the floor is:",
        "zh": "电梯以恒定速度向上运动。与人的重量相比，地板的法向力是："
      },
      "choices": [
        "greater, because the elevator moves up",
        "less, because motion is upward",
        "equal, because acceleration is zero",
        "zero, because the person is supported"
      ],
      "answer": 2,
      "explanation": {
        "en": "Constant speed means zero acceleration, so the net force is zero and the normal force equals the weight. Constant upward motion does not require extra force; only upward acceleration would make the normal force exceed the weight.",
        "zh": "恒定速度意味着加速度为零，所以合力为零，法向力等于重量。匀速上升不需要额外的力；只有向上加速时法向力才会超过重量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation shows an object with zero net force?",
        "zh": "哪种情形表示物体所受合力为零？"
      },
      "choices": [
        "A ball speeding up as it falls",
        "A car rounding a curve at constant speed",
        "A rocket accelerating upward",
        "A skydiver at terminal velocity"
      ],
      "answer": 3,
      "explanation": {
        "en": "At terminal velocity the skydiver moves at constant velocity, so net force is zero. A car on a curve is changing direction (accelerating), and a falling or launching object is speeding up, so each has a nonzero net force.",
        "zh": "在终端速度时跳伞者匀速运动，合力为零。转弯的车在改变方向（有加速度），下落或发射的物体在加速，因此各自都有非零的合力。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net force of 18 N gives a box an acceleration of 3 m/s^2. What is the box's mass in kg?",
        "zh": "18 N 的合力使一个箱子产生 3 m/s^2 的加速度。箱子的质量是多少 kg？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 kg",
        "6kg",
        "6.00"
      ],
      "explanation": {
        "en": "From $F=ma$, $m=F/a=18/3=6\\ \\text{kg}$. Multiplying force by acceleration would wrongly give 54.",
        "zh": "由 $F=ma$，$m=F/a=18/3=6\\ \\text{kg}$。把力乘以加速度会错误地得到 54。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 4 kg object accelerates at 2.5 m/s^2. What net force (in N) acts on it?",
        "zh": "一个 4 kg 的物体以 2.5 m/s^2 加速。作用在它上的合力（单位 N）是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10 N",
        "10N",
        "+10"
      ],
      "explanation": {
        "en": "$F=ma=4\\times 2.5=10\\ \\text{N}$. Dividing instead of multiplying would give 1.6, mixing up the second-law relationship.",
        "zh": "$F=ma=4\\times 2.5=10\\ \\text{N}$。相除而非相乘会得到 1.6，混淆了第二定律的关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "On Earth ($g=9.8\\ \\text{m/s}^2$), what is the weight in newtons of a 5 kg object? Give your answer in N.",
        "zh": "在地球上（$g=9.8\\ \\text{m/s}^2$），5 kg 物体的重量是多少牛顿？请以 N 为单位作答。"
      },
      "answer": "49",
      "accept": [
        "49.0",
        "49 N",
        "49N",
        "49.00"
      ],
      "explanation": {
        "en": "Weight $=mg=5\\times 9.8=49\\ \\text{N}$. Reporting 5 confuses mass (kg) with weight (N).",
        "zh": "重量 $=mg=5\\times 9.8=49\\ \\text{N}$。报告 5 是把质量（kg）与重量（N）混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Forces of 8 N east and 15 N east act on a 5 kg object along one line. What is its acceleration in m/s^2?",
        "zh": "沿一条直线，8 N 向东和 15 N 向东的力作用在 5 kg 的物体上。它的加速度是多少 m/s^2？"
      },
      "answer": "4.6",
      "accept": [
        "4.60",
        "4.6 m/s^2",
        "23/5"
      ],
      "explanation": {
        "en": "Same-direction forces add: $23\\ \\text{N}$, so $a=23/5=4.6\\ \\text{m/s}^2$. Subtracting them treats same-direction forces as opposing.",
        "zh": "同向的力相加：$23\\ \\text{N}$，所以 $a=23/5=4.6\\ \\text{m/s}^2$。相减是把同向的力当作反向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 1000 kg car accelerates from rest at 2 m/s^2. What driving net force in newtons is required?",
        "zh": "一辆 1000 kg 的车从静止以 2 m/s^2 加速。所需的驱动合力是多少牛顿？"
      },
      "answer": "2000",
      "accept": [
        "2000.0",
        "2000 N",
        "2e3",
        "2000N",
        "2,000"
      ],
      "explanation": {
        "en": "$F=ma=1000\\times 2=2000\\ \\text{N}$. Dividing mass by acceleration gives 500 and inverts the second law.",
        "zh": "$F=ma=1000\\times 2=2000\\ \\text{N}$。用质量除以加速度得到 500，颠倒了第二定律。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 2 kg puck moves at constant velocity across frictionless ice. What is the net force on it, in N?",
        "zh": "一个 2 kg 的冰球在无摩擦的冰面上匀速运动。它所受的合力是多少 N？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "0 N",
        "zero",
        "0N"
      ],
      "explanation": {
        "en": "Constant velocity means zero acceleration, so by the first and second laws the net force is 0. Assuming a forward force is needed to keep it moving is the inertia misconception.",
        "zh": "匀速意味着加速度为零，由第一、第二定律合力为 0。以为需要向前的力才能维持运动是关于惯性的误解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 3 kg object feels a 12 N force forward and a 3 N friction force backward. What is its acceleration in m/s^2?",
        "zh": "一个 3 kg 的物体受到向前 12 N 的力和向后 3 N 的摩擦力。它的加速度是多少 m/s^2？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 m/s^2",
        "3.00"
      ],
      "explanation": {
        "en": "Net force $=12-3=9\\ \\text{N}$, so $a=9/3=3\\ \\text{m/s}^2$. Ignoring friction and using 12 N gives 4 and overstates the acceleration.",
        "zh": "合力 $=12-3=9\\ \\text{N}$，所以 $a=9/3=3\\ \\text{m/s}^2$。忽略摩擦而用 12 N 得到 4，高估了加速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The Moon's surface gravity is about $1.6\\ \\text{m/s}^2$. What is the weight in newtons of a 10 kg rock on the Moon?",
        "zh": "月球表面重力约为 $1.6\\ \\text{m/s}^2$。一块 10 kg 的岩石在月球上的重量是多少牛顿？"
      },
      "answer": "16",
      "accept": [
        "16.0",
        "16 N",
        "16N",
        "16.00"
      ],
      "explanation": {
        "en": "Weight $=mg=10\\times 1.6=16\\ \\text{N}$. Using Earth's $g=9.8$ would give 98 N; mass stays 10 kg everywhere, but weight follows local gravity.",
        "zh": "重量 $=mg=10\\times 1.6=16\\ \\text{N}$。用地球的 $g=9.8$ 会得到 98 N；质量在任何地方都是 10 kg，但重量取决于当地重力。"
      }
    }
  ],
  "dynamics/free-body-diagrams": [
    {
      "type": "mc",
      "question": {
        "en": "A free-body diagram of a single object should show:",
        "zh": "单个物体的受力图应当显示："
      },
      "choices": [
        "all external forces acting on that object",
        "the object's velocity and acceleration vectors",
        "only the forces the object exerts on other things",
        "the internal forces holding the object together"
      ],
      "answer": 0,
      "explanation": {
        "en": "A free-body diagram shows every external force acting on the chosen object. Velocity and acceleration are motion, not forces, and forces the object exerts on others belong on other diagrams.",
        "zh": "受力图显示作用在所选物体上的每一个外力。速度和加速度是运动量而非力，物体对他物施加的力应画在其他物体的图上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 10 kg box sits at rest on a level floor ($g=9.8\\ \\text{m/s}^2$). What is the normal force on it?",
        "zh": "一个 10 kg 的箱子静止在水平地板上（$g=9.8\\ \\text{m/s}^2$）。它受到的法向力是多少？"
      },
      "choices": [
        "$10\\ \\text{N}$",
        "$98\\ \\text{N}$",
        "$0\\ \\text{N}$",
        "$196\\ \\text{N}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "On a level floor with no vertical acceleration, the normal force balances the weight: $N=mg=10\\times 9.8=98\\ \\text{N}$. Using the mass alone (10) forgets to multiply by $g$.",
        "zh": "在水平地板上且无竖直加速度时，法向力平衡重量：$N=mg=10\\times 9.8=98\\ \\text{N}$。只用质量（10）是忘了乘以 $g$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A box is pulled by a rope at angle theta above horizontal with tension T. The horizontal component of the tension is:",
        "zh": "一个箱子被绳以水平上方 theta 角、张力 T 拉动。张力的水平分量是："
      },
      "choices": [
        "$T\\tan\\theta$",
        "$T\\sin\\theta$",
        "$T\\cos\\theta$",
        "$T$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The component along the direction of motion (horizontal) uses cosine of the angle from that axis: $T\\cos\\theta$. Using $T\\sin\\theta$ would instead give the vertical (lifting) component.",
        "zh": "沿运动方向（水平）的分量用与该轴夹角的余弦：$T\\cos\\theta$。用 $T\\sin\\theta$ 得到的是竖直（提升）分量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 6 kg block hangs at rest from a single vertical rope ($g=9.8\\ \\text{m/s}^2$). The rope tension is:",
        "zh": "一个 6 kg 的物块静止悬挂在一条竖直绳上（$g=9.8\\ \\text{m/s}^2$）。绳的张力是："
      },
      "choices": [
        "$0\\ \\text{N}$",
        "$117.6\\ \\text{N}$",
        "$6\\ \\text{N}$",
        "$58.8\\ \\text{N}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "At rest the tension balances the weight: $T=mg=6\\times 9.8=58.8\\ \\text{N}$. Doubling to 117.6 would treat one rope as if it were two supports.",
        "zh": "静止时张力平衡重量：$T=mg=6\\times 9.8=58.8\\ \\text{N}$。翻倍成 117.6 是把一条绳当成两个支撑。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A block on a frictionless incline of angle theta has weight mg. The component of gravity along the incline is:",
        "zh": "无摩擦、倾角为 theta 的斜面上，物块重 mg。重力沿斜面的分量是："
      },
      "choices": [
        "$mg\\sin\\theta$",
        "$mg\\tan\\theta$",
        "$mg\\cos\\theta$",
        "$mg$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The along-incline component of weight is $mg\\sin\\theta$; the perpendicular (into-surface) component is $mg\\cos\\theta$. Swapping sine and cosine is the most common incline error.",
        "zh": "重力沿斜面的分量是 $mg\\sin\\theta$；垂直（压入表面）的分量是 $mg\\cos\\theta$。把正弦和余弦互换是斜面问题最常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An elevator accelerates upward at $2\\ \\text{m/s}^2$. For a person of mass m inside, the normal force from the floor is:",
        "zh": "电梯以 $2\\ \\text{m/s}^2$ 向上加速。对内部质量为 m 的人，地板的法向力是："
      },
      "choices": [
        "$mg$",
        "$m(g+2)$",
        "$m(g-2)$",
        "$2m$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Taking up as positive, $N-mg=ma$ gives $N=m(g+a)=m(g+2)$, larger than the weight. Using $m(g-2)$ would apply to downward acceleration instead.",
        "zh": "取向上为正，$N-mg=ma$ 得 $N=m(g+a)=m(g+2)$，大于重量。用 $m(g-2)$ 对应的是向下加速的情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two people pull a 20 kg sled on frictionless ice: 30 N forward and 10 N backward. The sled's acceleration is:",
        "zh": "两人在无摩擦冰面上拉一个 20 kg 的雪橇：向前 30 N，向后 10 N。雪橇的加速度是："
      },
      "choices": [
        "$2\\ \\text{m/s}^2$ forward",
        "$0.5\\ \\text{m/s}^2$ forward",
        "$1\\ \\text{m/s}^2$ forward",
        "$40\\ \\text{m/s}^2$ forward"
      ],
      "answer": 2,
      "explanation": {
        "en": "Net force $=30-10=20\\ \\text{N}$, so $a=20/20=1\\ \\text{m/s}^2$. Adding the forces (40 N) ignores that one pulls backward.",
        "zh": "合力 $=30-10=20\\ \\text{N}$，所以 $a=20/20=1\\ \\text{m/s}^2$。把两力相加（40 N）忽略了其中一个向后拉。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When drawing a free-body diagram, the normal force is always:",
        "zh": "画受力图时，法向力总是："
      },
      "choices": [
        "straight down",
        "opposite to the applied force",
        "equal to the weight",
        "perpendicular to the contact surface"
      ],
      "answer": 3,
      "explanation": {
        "en": "The normal force is by definition perpendicular to the surface of contact. It equals the weight only in special level cases; on an incline or with vertical forces applied it does not.",
        "zh": "法向力按定义垂直于接触面。只有在特殊的水平情形下它才等于重量；在斜面上或有竖直外力时并不相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 5 kg block on a level surface is pushed with a 20 N horizontal force against 8 N of friction. Its acceleration is:",
        "zh": "一个 5 kg 的物块在水平面上被 20 N 的水平力推动，摩擦力为 8 N。它的加速度是："
      },
      "choices": [
        "$2.4\\ \\text{m/s}^2$",
        "$4\\ \\text{m/s}^2$",
        "$5.6\\ \\text{m/s}^2$",
        "$0.4\\ \\text{m/s}^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Net horizontal force $=20-8=12\\ \\text{N}$, so $a=12/5=2.4\\ \\text{m/s}^2$. Using the full 20 N without subtracting friction gives 4 and overstates the result.",
        "zh": "水平合力 $=20-8=12\\ \\text{N}$，所以 $a=12/5=2.4\\ \\text{m/s}^2$。不减去摩擦而用整个 20 N 得到 4，高估了结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sign hangs from two symmetric ropes each at 60 degrees from vertical. Compared with one vertical rope, each rope's tension is:",
        "zh": "一块招牌由两条对称的绳悬挂，每条与竖直方向成 60 度。与一条竖直绳相比，每条绳的张力是："
      },
      "choices": [
        "exactly half as much",
        "larger",
        "the same",
        "zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "Only the vertical components of the two tensions support the weight, so as the ropes spread from vertical each tension grows larger than a single straight rope would need. Assuming each simply carries half ignores the wasted horizontal components.",
        "zh": "只有两张力的竖直分量支撑重量，所以随着绳向两侧张开，每条绳的张力比单条竖直绳所需的更大。以为每条只承担一半是忽略了被浪费掉的水平分量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an object in equilibrium, a free-body diagram must show that:",
        "zh": "对处于平衡的物体，受力图必须表明："
      },
      "choices": [
        "there are no forces at all",
        "only gravity acts",
        "the vector sum of all forces is zero",
        "all forces point the same way"
      ],
      "answer": 2,
      "explanation": {
        "en": "Equilibrium means zero net force, so the force vectors add to zero. It does not mean there are no forces — balanced forces can be large yet cancel.",
        "zh": "平衡意味着合力为零，所以力矢量之和为零。这并不意味着没有力——平衡的力可以很大却相互抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 2 kg lamp hangs at rest. On its free-body diagram, how do the tension and weight compare?",
        "zh": "一盏 2 kg 的灯静止悬挂。在它的受力图上，张力与重量如何比较？"
      },
      "choices": [
        "Tension is greater than weight",
        "Tension and weight point the same way",
        "Tension is less than weight",
        "Tension equals weight in magnitude, opposite in direction"
      ],
      "answer": 3,
      "explanation": {
        "en": "At rest the net force is zero, so the upward tension equals the downward weight in magnitude and opposes it. They are not a third-law pair — both act on the lamp and simply balance.",
        "zh": "静止时合力为零，所以向上的张力在大小上等于向下的重量并与之相反。它们不是第三定律配对——两者都作用在灯上，只是相互平衡。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 12 kg crate rests on a level floor ($g=9.8\\ \\text{m/s}^2$). What is the normal force on it in N?",
        "zh": "一个 12 kg 的板条箱静止在水平地板上（$g=9.8\\ \\text{m/s}^2$）。它受到的法向力是多少 N？"
      },
      "answer": "117.6",
      "accept": [
        "117.6 N",
        "117.60",
        "117.6N"
      ],
      "explanation": {
        "en": "With no vertical acceleration, $N=mg=12\\times 9.8=117.6\\ \\text{N}$. Forgetting to multiply by $g$ leaves only 12.",
        "zh": "无竖直加速度时，$N=mg=12\\times 9.8=117.6\\ \\text{N}$。忘记乘以 $g$ 只剩 12。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rope pulls a box with 50 N at 37 degrees above horizontal. What is the horizontal component of the pull in N? Use $\\cos 37^\\circ=0.8$.",
        "zh": "一条绳以水平上方 37 度、50 N 的力拉箱子。拉力的水平分量是多少 N？用 $\\cos 37^\\circ=0.8$。"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "40 N",
        "40N",
        "40.00"
      ],
      "explanation": {
        "en": "Horizontal component $=T\\cos\\theta=50\\times 0.8=40\\ \\text{N}$. Using $\\sin 37^\\circ=0.6$ would instead give the vertical component, 30 N.",
        "zh": "水平分量 $=T\\cos\\theta=50\\times 0.8=40\\ \\text{N}$。用 $\\sin 37^\\circ=0.6$ 得到的是竖直分量 30 N。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 4 kg block sits on a frictionless 30 degree incline ($g=9.8\\ \\text{m/s}^2$). What is its acceleration down the incline in m/s^2? Use $\\sin 30^\\circ=0.5$.",
        "zh": "一个 4 kg 的物块放在无摩擦的 30 度斜面上（$g=9.8\\ \\text{m/s}^2$）。它沿斜面向下的加速度是多少 m/s^2？用 $\\sin 30^\\circ=0.5$。"
      },
      "answer": "4.9",
      "accept": [
        "4.90",
        "4.9 m/s^2",
        "4.9m/s^2"
      ],
      "explanation": {
        "en": "On a frictionless incline $a=g\\sin\\theta=9.8\\times 0.5=4.9\\ \\text{m/s}^2$, independent of mass. Using $\\cos 30^\\circ$ would wrongly apply the perpendicular direction.",
        "zh": "无摩擦斜面上 $a=g\\sin\\theta=9.8\\times 0.5=4.9\\ \\text{m/s}^2$，与质量无关。用 $\\cos 30^\\circ$ 是错误地取了垂直方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 3 kg mass hangs in an elevator accelerating downward at $2\\ \\text{m/s}^2$ ($g=9.8\\ \\text{m/s}^2$). What is the rope tension in N?",
        "zh": "一个 3 kg 的物体挂在以 $2\\ \\text{m/s}^2$ 向下加速的电梯里（$g=9.8\\ \\text{m/s}^2$）。绳的张力是多少 N？"
      },
      "answer": "23.4",
      "accept": [
        "23.4 N",
        "23.40",
        "23.4N"
      ],
      "explanation": {
        "en": "Taking up as positive, $T-mg=m(-a)$ so $T=m(g-a)=3\\times 7.8=23.4\\ \\text{N}$, less than the weight. Adding $a$ instead of subtracting would apply to upward acceleration.",
        "zh": "取向上为正，$T-mg=m(-a)$，所以 $T=m(g-a)=3\\times 7.8=23.4\\ \\text{N}$，小于重量。加上 $a$ 而非相减对应的是向上加速。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Horizontal forces on a 5 kg cart are 14 N right, 6 N left, and 2 N left. What is the net force in N (take right as positive)?",
        "zh": "作用在 5 kg 小车上的水平力有向右 14 N、向左 6 N 和向左 2 N。合力是多少 N（取向右为正）？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6",
        "6 N",
        "6N"
      ],
      "explanation": {
        "en": "Net $=14-6-2=6\\ \\text{N}$ to the right. Adding all magnitudes (22 N) ignores the directions of the leftward forces.",
        "zh": "合力 $=14-6-2=6\\ \\text{N}$，方向向右。把所有大小相加（22 N）忽略了向左各力的方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 25 N horizontal force accelerates a box at $5\\ \\text{m/s}^2$ on a level surface with no friction. What is the box's mass in kg?",
        "zh": "一个 25 N 的水平力使箱子在无摩擦水平面上以 $5\\ \\text{m/s}^2$ 加速。箱子的质量是多少 kg？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5 kg",
        "5kg",
        "5.00"
      ],
      "explanation": {
        "en": "$m=F/a=25/5=5\\ \\text{kg}$. Multiplying force by acceleration would wrongly give 125.",
        "zh": "$m=F/a=25/5=5\\ \\text{kg}$。把力乘以加速度会错误地得到 125。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 2 kg block is pushed straight up by a 30 N force ($g=9.8\\ \\text{m/s}^2$). What is its upward acceleration in m/s^2?",
        "zh": "一个 2 kg 的物块被 30 N 的力竖直向上推（$g=9.8\\ \\text{m/s}^2$）。它向上的加速度是多少 m/s^2？"
      },
      "answer": "5.2",
      "accept": [
        "5.20",
        "5.2 m/s^2",
        "5.2m/s^2"
      ],
      "explanation": {
        "en": "Net force $=30-mg=30-19.6=10.4\\ \\text{N}$, so $a=10.4/2=5.2\\ \\text{m/s}^2$. Forgetting to subtract the weight would give 15 and ignore gravity.",
        "zh": "合力 $=30-mg=30-19.6=10.4\\ \\text{N}$，所以 $a=10.4/2=5.2\\ \\text{m/s}^2$。忘记减去重量会得到 15，忽略了重力。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 7 kg sign hangs at rest from a single vertical cable ($g=9.8\\ \\text{m/s}^2$). What is the cable tension in N?",
        "zh": "一块 7 kg 的招牌静止悬挂在一条竖直缆绳上（$g=9.8\\ \\text{m/s}^2$）。缆绳的张力是多少 N？"
      },
      "answer": "68.6",
      "accept": [
        "68.6 N",
        "68.60",
        "68.6N"
      ],
      "explanation": {
        "en": "At rest with one cable, tension balances weight: $T=mg=7\\times 9.8=68.6\\ \\text{N}$. Using the mass alone (7) forgets the factor of $g$.",
        "zh": "静止且只有一条缆绳时，张力平衡重量：$T=mg=7\\times 9.8=68.6\\ \\text{N}$。只用质量（7）忘了 $g$ 这个因子。"
      }
    }
  ],
  "dynamics/friction": [
    {
      "type": "mc",
      "question": {
        "en": "The magnitude of kinetic friction on a sliding object is given by:",
        "zh": "滑动物体所受动摩擦力的大小由下式给出："
      },
      "choices": [
        "$f_k=\\mu_k N$",
        "$f_k=\\mu_k mg\\sin\\theta$",
        "$f_k=N/\\mu_k$",
        "$f_k=\\mu_k v$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Kinetic friction is $f_k=\\mu_k N$, proportional to the normal force. It does not depend on speed, so any form with velocity in it is wrong.",
        "zh": "动摩擦力为 $f_k=\\mu_k N$，与法向力成正比。它与速度无关，所以任何含速度的形式都是错的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 4 kg box slides on a level floor with $\\mu_k=0.25$ ($g=9.8\\ \\text{m/s}^2$). The kinetic friction force is:",
        "zh": "一个 4 kg 的箱子在水平地板上滑动，$\\mu_k=0.25$（$g=9.8\\ \\text{m/s}^2$）。动摩擦力是："
      },
      "choices": [
        "$1\\ \\text{N}$",
        "$9.8\\ \\text{N}$",
        "$39.2\\ \\text{N}$",
        "$0.25\\ \\text{N}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "On a level floor $N=mg=39.2\\ \\text{N}$, so $f_k=\\mu_k N=0.25\\times 39.2=9.8\\ \\text{N}$. Multiplying $\\mu_k$ by the mass alone (giving 1) forgets the factor of $g$.",
        "zh": "在水平地板上 $N=mg=39.2\\ \\text{N}$，所以 $f_k=\\mu_k N=0.25\\times 39.2=9.8\\ \\text{N}$。只用 $\\mu_k$ 乘质量（得 1）忘了 $g$ 这个因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compared with kinetic friction, the maximum static friction on the same surfaces is usually:",
        "zh": "与动摩擦相比，同一对表面上的最大静摩擦通常："
      },
      "choices": [
        "smaller",
        "exactly zero",
        "larger",
        "unrelated"
      ],
      "answer": 2,
      "explanation": {
        "en": "Usually $\\mu_s>\\mu_k$, so it takes more force to start sliding than to keep it sliding. That is why a pushed object lurches forward once it breaks free.",
        "zh": "通常 $\\mu_s>\\mu_k$，所以让物体开始滑动比维持滑动需要更大的力。这正是被推物体一旦挣脱就会突然向前冲的原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Static friction on a stationary box that is not being pushed is:",
        "zh": "对一个未被推动的静止箱子，静摩擦力是："
      },
      "choices": [
        "always equal to $\\mu_s N$",
        "equal to $\\mu_k N$",
        "equal to the weight",
        "zero"
      ],
      "answer": 3,
      "explanation": {
        "en": "Static friction only responds to an applied force; with no push there is nothing to resist, so it is zero. The value $\\mu_s N$ is only the maximum it can reach, not its constant value.",
        "zh": "静摩擦只对外加的力作出响应；没有推力就没有需要抵抗的对象，所以为零。$\\mu_s N$ 只是它能达到的最大值，而非其恒定值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A hockey puck slides on ice and gradually slows to a stop. This happens because:",
        "zh": "冰球在冰面上滑动并逐渐减速停下。原因是："
      },
      "choices": [
        "kinetic friction acts opposite to its motion",
        "its inertia runs out",
        "no force acts on it",
        "gravity pulls it backward"
      ],
      "answer": 0,
      "explanation": {
        "en": "Kinetic friction opposes the sliding motion and decelerates the puck. Inertia does not run out; without friction the puck would keep moving forever.",
        "zh": "动摩擦与滑动方向相反，使冰球减速。惯性不会耗尽；没有摩擦冰球会永远运动下去。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 10 kg box needs 30 N to just start moving on a level floor ($g=9.8\\ \\text{m/s}^2$). The coefficient of static friction is about:",
        "zh": "一个 10 kg 的箱子在水平地板上刚好开始移动需要 30 N（$g=9.8\\ \\text{m/s}^2$）。静摩擦系数约为："
      },
      "choices": [
        "3.0",
        "0.31",
        "0.98",
        "0.10"
      ],
      "answer": 1,
      "explanation": {
        "en": "At the verge of sliding $\\mu_s=f/N=30/(10\\times 9.8)=30/98\\approx 0.31$. Dividing the force by the mass alone (giving 3.0) skips the factor of $g$ in the normal force.",
        "zh": "在即将滑动时 $\\mu_s=f/N=30/(10\\times 9.8)=30/98\\approx 0.31$。只用力除以质量（得 3.0）漏掉了法向力中的 $g$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Doubling the weight pressing two dry surfaces together, at fixed $\\mu_k$, changes the kinetic friction how?",
        "zh": "在 $\\mu_k$ 固定的情况下，把压在两干燥表面之间的重量加倍，动摩擦力如何变化？"
      },
      "choices": [
        "It stays the same",
        "It is cut in half",
        "It doubles",
        "It quadruples"
      ],
      "answer": 2,
      "explanation": {
        "en": "Friction $f_k=\\mu_k N$ is proportional to the normal force, so doubling the load doubles the friction. Contact area, by contrast, does not appear in this model.",
        "zh": "摩擦力 $f_k=\\mu_k N$ 与法向力成正比，所以载荷加倍则摩擦加倍。相比之下，接触面积并不出现在此模型中。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the simple friction model, the friction force does NOT depend on:",
        "zh": "在简单摩擦模型中，摩擦力不依赖于："
      },
      "choices": [
        "whether the surfaces are sliding or not",
        "the normal force",
        "the coefficient of friction",
        "the apparent contact area"
      ],
      "answer": 3,
      "explanation": {
        "en": "In this model friction is independent of the apparent contact area; it depends on the normal force and the coefficient. Spreading the same load over a larger area does not change it.",
        "zh": "在此模型中摩擦与表观接触面积无关；它取决于法向力和摩擦系数。把同样的载荷摊到更大面积上并不改变它。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 5 kg block slides on a level surface with $\\mu_k=0.2$ ($g=9.8\\ \\text{m/s}^2$) and no other horizontal force. Its acceleration is:",
        "zh": "一个 5 kg 的物块在水平面上滑动，$\\mu_k=0.2$（$g=9.8\\ \\text{m/s}^2$），没有其他水平力。它的加速度是："
      },
      "choices": [
        "$1.96\\ \\text{m/s}^2$, slowing down",
        "$0.2\\ \\text{m/s}^2$, slowing down",
        "$9.8\\ \\text{m/s}^2$, speeding up",
        "$2.0\\ \\text{m/s}^2$, speeding up"
      ],
      "answer": 0,
      "explanation": {
        "en": "Friction is the only horizontal force: $a=\\mu_k g=0.2\\times 9.8=1.96\\ \\text{m/s}^2$ opposing motion, so it slows down. The mass cancels, so it does not enter the acceleration.",
        "zh": "摩擦是唯一的水平力：$a=\\mu_k g=0.2\\times 9.8=1.96\\ \\text{m/s}^2$，与运动方向相反，所以减速。质量约去，不进入加速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A block rests on an incline that is slowly tilted. It begins to slide when the incline angle reaches theta. At that angle:",
        "zh": "一个物块放在被缓慢抬高的斜面上。当倾角达到 theta 时它开始滑动。在该角度："
      },
      "choices": [
        "$\\mu_s=\\cos\\theta$",
        "$\\mu_s=\\tan\\theta$",
        "$\\mu_s=\\sin\\theta$",
        "$\\mu_s=1/\\tan\\theta$"
      ],
      "answer": 1,
      "explanation": {
        "en": "At the slipping angle $mg\\sin\\theta=\\mu_s mg\\cos\\theta$, so $\\mu_s=\\tan\\theta$. Keeping only $\\sin\\theta$ forgets the normal force also shrinks by $\\cos\\theta$ on the incline.",
        "zh": "在临界滑动角 $mg\\sin\\theta=\\mu_s mg\\cos\\theta$，所以 $\\mu_s=\\tan\\theta$。只保留 $\\sin\\theta$ 是忘了斜面上法向力也随 $\\cos\\theta$ 减小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When you walk forward, the friction from the ground on your shoe points:",
        "zh": "当你向前走时，地面对你鞋子的摩擦力指向："
      },
      "choices": [
        "backward, opposing your foot's backward push",
        "downward into the ground",
        "forward, in your direction of travel",
        "there is no friction while walking"
      ],
      "answer": 2,
      "explanation": {
        "en": "Your foot pushes backward on the ground, so by reaction the static friction on your shoe points forward, propelling you. Without that forward friction you could not accelerate ahead.",
        "zh": "你的脚向后蹬地，所以由反作用，作用在鞋上的静摩擦指向前方，推动你前进。没有这个向前的摩擦你就无法向前加速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 2 kg book is pressed against a vertical wall and held in place by a horizontal push. What holds it up against gravity?",
        "zh": "一本 2 kg 的书被水平推力压在竖直墙上并保持不动。是什么抵抗重力把它托住？"
      },
      "choices": [
        "the normal force from the wall",
        "the horizontal push itself",
        "the book's inertia",
        "static friction between book and wall"
      ],
      "answer": 3,
      "explanation": {
        "en": "The vertical weight is balanced by the upward static friction from the wall. The normal force and the push are horizontal, so they cannot directly support the vertical weight.",
        "zh": "竖直的重量由墙面向上的静摩擦平衡。法向力和推力都是水平的，因此不能直接支撑竖直的重量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 6 kg box slides on a level floor with $\\mu_k=0.3$ ($g=9.8\\ \\text{m/s}^2$). What is the kinetic friction force in N?",
        "zh": "一个 6 kg 的箱子在水平地板上滑动，$\\mu_k=0.3$（$g=9.8\\ \\text{m/s}^2$）。动摩擦力是多少 N？"
      },
      "answer": "17.64",
      "accept": [
        "17.64 N",
        "17.6",
        "17.64N",
        "17.640"
      ],
      "explanation": {
        "en": "$N=mg=58.8\\ \\text{N}$ and $f_k=\\mu_k N=0.3\\times 58.8=17.64\\ \\text{N}$. Multiplying $\\mu_k$ by mass alone forgets $g$.",
        "zh": "$N=mg=58.8\\ \\text{N}$，$f_k=\\mu_k N=0.3\\times 58.8=17.64\\ \\text{N}$。只用 $\\mu_k$ 乘质量忘了 $g$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A box on a level surface has $N=100\\ \\text{N}$ and experiences $25\\ \\text{N}$ of kinetic friction. What is $\\mu_k$?",
        "zh": "水平面上的箱子受到 $N=100\\ \\text{N}$，动摩擦力为 $25\\ \\text{N}$。$\\mu_k$ 是多少？"
      },
      "answer": "0.25",
      "accept": [
        "0.250",
        ".25",
        "1/4"
      ],
      "explanation": {
        "en": "$\\mu_k=f_k/N=25/100=0.25$. Dividing normal force by friction instead would invert the ratio and give 4.",
        "zh": "$\\mu_k=f_k/N=25/100=0.25$。反过来用法向力除以摩擦会颠倒比值，得到 4。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A block slides on level ground with $\\mu_k=0.4$ and no other horizontal force ($g=9.8\\ \\text{m/s}^2$). What is the magnitude of its deceleration in m/s^2?",
        "zh": "一个物块在水平地面上滑动，$\\mu_k=0.4$，没有其他水平力（$g=9.8\\ \\text{m/s}^2$）。它减速的大小是多少 m/s^2？"
      },
      "answer": "3.92",
      "accept": [
        "3.92 m/s^2",
        "3.9",
        "3.920"
      ],
      "explanation": {
        "en": "$a=\\mu_k g=0.4\\times 9.8=3.92\\ \\text{m/s}^2$; the mass cancels out. Trying to include a mass would show it has no effect here.",
        "zh": "$a=\\mu_k g=0.4\\times 9.8=3.92\\ \\text{m/s}^2$；质量约去。若试图代入质量会发现它在此毫无影响。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 10 kg crate is pushed with 40 N horizontally against 25 N of kinetic friction. What is its acceleration in m/s^2?",
        "zh": "一个 10 kg 的板条箱被 40 N 的水平力推动，动摩擦力为 25 N。它的加速度是多少 m/s^2？"
      },
      "answer": "1.5",
      "accept": [
        "1.50",
        "1.5 m/s^2",
        "3/2"
      ],
      "explanation": {
        "en": "Net force $=40-25=15\\ \\text{N}$, so $a=15/10=1.5\\ \\text{m/s}^2$. Using the full 40 N without subtracting friction gives 4 and ignores the resisting force.",
        "zh": "合力 $=40-25=15\\ \\text{N}$，所以 $a=15/10=1.5\\ \\text{m/s}^2$。不减去摩擦而用整个 40 N 得到 4，忽略了阻力。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A block just begins to slide when a level surface is tilted to 30 degrees. What is $\\mu_s$? Use $\\tan 30^\\circ=0.577$.",
        "zh": "当水平面被抬高到 30 度时物块刚好开始滑动。$\\mu_s$ 是多少？用 $\\tan 30^\\circ=0.577$。"
      },
      "answer": "0.577",
      "accept": [
        "0.58",
        "0.577",
        ".577",
        "0.5774"
      ],
      "explanation": {
        "en": "At the slipping angle $\\mu_s=\\tan\\theta=\\tan 30^\\circ=0.577$. Using $\\sin 30^\\circ=0.5$ forgets the normal force is also reduced by $\\cos\\theta$.",
        "zh": "在临界滑动角 $\\mu_s=\\tan\\theta=\\tan 30^\\circ=0.577$。用 $\\sin 30^\\circ=0.5$ 是忘了法向力也被 $\\cos\\theta$ 减小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 20 N horizontal force is applied to a 8 kg box on a level floor with $\\mu_s=0.5$ ($g=9.8\\ \\text{m/s}^2$). Maximum static friction is $\\mu_s mg$. Does it move? Answer 1 for yes, 0 for no.",
        "zh": "对水平地板上一个 8 kg 的箱子施加 20 N 的水平力，$\\mu_s=0.5$（$g=9.8\\ \\text{m/s}^2$）。最大静摩擦为 $\\mu_s mg$。它会移动吗？是填 1，否填 0。"
      },
      "answer": "0",
      "accept": [
        "no",
        "No",
        "0.0",
        "否"
      ],
      "explanation": {
        "en": "Maximum static friction $=\\mu_s mg=0.5\\times 8\\times 9.8=39.2\\ \\text{N}$, which exceeds the 20 N push, so the box stays put. Comparing the push only to the mass or weight without $\\mu_s$ misjudges the threshold.",
        "zh": "最大静摩擦 $=\\mu_s mg=0.5\\times 8\\times 9.8=39.2\\ \\text{N}$，超过 20 N 的推力，所以箱子不动。只把推力与质量或重量比较而不用 $\\mu_s$ 会误判临界值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 3 kg book is held against a vertical wall by a horizontal push ($g=9.8\\ \\text{m/s}^2$). If it is on the verge of sliding down, what minimum upward friction force in N is needed?",
        "zh": "一本 3 kg 的书被水平推力压在竖直墙上（$g=9.8\\ \\text{m/s}^2$）。若它即将下滑，需要的最小向上摩擦力是多少 N？"
      },
      "answer": "29.4",
      "accept": [
        "29.4 N",
        "29.40",
        "29.4N"
      ],
      "explanation": {
        "en": "To hold it up, static friction must equal the weight: $f=mg=3\\times 9.8=29.4\\ \\text{N}$. The horizontal push sets the normal force but does not directly balance the vertical weight.",
        "zh": "要托住它，静摩擦必须等于重量：$f=mg=3\\times 9.8=29.4\\ \\text{N}$。水平推力决定法向力，但并不直接平衡竖直的重量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 5 kg box on a level floor is pulled by a 30 N horizontal force but does not move. What is the static friction force on it in N?",
        "zh": "水平地板上一个 5 kg 的箱子被 30 N 的水平力拉动但没有移动。作用在它上的静摩擦力是多少 N？"
      },
      "answer": "30",
      "accept": [
        "30.0",
        "30 N",
        "30N",
        "30.00"
      ],
      "explanation": {
        "en": "Since the box stays at rest, static friction exactly matches the pull: $f_s=30\\ \\text{N}$. Static friction adjusts to balance the applied force up to its maximum, rather than always equalling $\\mu_s N$.",
        "zh": "由于箱子保持静止，静摩擦恰好等于拉力：$f_s=30\\ \\text{N}$。静摩擦会自我调节以平衡外力直到其最大值，而非总是等于 $\\mu_s N$。"
      }
    }
  ],
  "dynamics/circular-motion-gravitation": [
    {
      "type": "mc",
      "question": {
        "en": "For an object in uniform circular motion, the centripetal acceleration points:",
        "zh": "对做匀速圆周运动的物体，向心加速度指向："
      },
      "choices": [
        "toward the center of the circle",
        "outward, away from the center",
        "along the direction of motion (tangent)",
        "there is no acceleration"
      ],
      "answer": 0,
      "explanation": {
        "en": "In uniform circular motion the speed is constant but the direction changes, and that change points toward the center, so the acceleration is centripetal (center-seeking). An outward 'centrifugal' force is only an apparent effect in a rotating frame.",
        "zh": "在匀速圆周运动中速率恒定但方向改变，这一改变指向圆心，所以加速度是向心的（指向圆心）。向外的\"离心力\"只是旋转参考系中的表观效应。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The centripetal acceleration of an object moving at speed v in a circle of radius r is:",
        "zh": "以速率 v 在半径为 r 的圆上运动的物体，其向心加速度为："
      },
      "choices": [
        "$a=v/r$",
        "$a=v^2/r$",
        "$a=v/r^2$",
        "$a=vr$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Centripetal acceleration is $a=v^2/r$. Forgetting to square the speed gives the too-small $v/r$.",
        "zh": "向心加速度为 $a=v^2/r$。忘记把速率平方会得到偏小的 $v/r$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 2 kg ball moves in a circle of radius 0.5 m at 4 m/s. The centripetal force on it is:",
        "zh": "一个 2 kg 的球以 4 m/s 在半径 0.5 m 的圆上运动。它所受的向心力是："
      },
      "choices": [
        "$16\\ \\text{N}$",
        "$8\\ \\text{N}$",
        "$64\\ \\text{N}$",
        "$32\\ \\text{N}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$F=mv^2/r=2\\times 16/0.5=64\\ \\text{N}$. Forgetting to square the speed (using $mv/r$) gives 16 and badly underestimates the force.",
        "zh": "$F=mv^2/r=2\\times 16/0.5=64\\ \\text{N}$。忘记把速率平方（用 $mv/r$）得到 16，严重低估了力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the speed of an object in circular motion doubles while the radius stays the same, the centripetal force:",
        "zh": "如果圆周运动物体的速率加倍而半径不变，向心力："
      },
      "choices": [
        "doubles",
        "stays the same",
        "is halved",
        "quadruples"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $F=mv^2/r$ depends on the square of speed, doubling $v$ multiplies the force by four. Expecting it to merely double ignores the squaring.",
        "zh": "由于 $F=mv^2/r$ 依赖速率的平方，$v$ 加倍则力变为四倍。以为只是加倍是忽略了平方关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Newton's law of universal gravitation between two masses is:",
        "zh": "两质量之间的牛顿万有引力定律是："
      },
      "choices": [
        "$F=Gm_1 m_2/r^2$",
        "$F=Gm_1 m_2/r$",
        "$F=G(m_1+m_2)/r^2$",
        "$F=Gm_1 m_2 r^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Gravity follows an inverse-square law: $F=Gm_1 m_2/r^2$. Using $r$ instead of $r^2$ drops the inverse-square dependence.",
        "zh": "引力遵循平方反比定律：$F=Gm_1 m_2/r^2$。用 $r$ 而非 $r^2$ 丢掉了平方反比的依赖关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the distance between two masses is tripled, the gravitational force between them becomes:",
        "zh": "如果两质量之间的距离变为三倍，它们之间的引力变为："
      },
      "choices": [
        "$1/3$ as large",
        "$1/9$ as large",
        "9 times as large",
        "3 times as large"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the inverse-square law, tripling $r$ divides the force by $3^2=9$, so it is $1/9$ as large. Using only $1/3$ forgets to square the distance factor.",
        "zh": "由平方反比定律，$r$ 变为三倍则力除以 $3^2=9$，即变为 $1/9$。只用 $1/3$ 是忘了把距离因子平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A satellite in a stable circular orbit is best described as:",
        "zh": "处于稳定圆轨道的卫星最恰当的描述是："
      },
      "choices": [
        "beyond the reach of Earth's gravity",
        "held up by an outward force",
        "in free fall, continuously falling toward Earth",
        "moving with zero acceleration"
      ],
      "answer": 2,
      "explanation": {
        "en": "An orbiting satellite is in free fall: gravity provides the centripetal acceleration, so it keeps falling toward Earth while its tangential speed carries it around. Gravity has not vanished, and there is no outward force holding it up.",
        "zh": "在轨卫星处于自由落体：引力提供向心加速度，所以它不断朝地球下落，而切向速度使它绕行。引力并未消失，也没有向外的力把它托住。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a car rounding a flat curve, what provides the centripetal force?",
        "zh": "对一辆转过平坦弯道的汽车，向心力由什么提供？"
      },
      "choices": [
        "the forward drive force of the engine",
        "the car's weight",
        "the normal force from the road",
        "static friction between tires and road"
      ],
      "answer": 3,
      "explanation": {
        "en": "On a flat curve, static friction between the tires and road points toward the center and supplies the centripetal force. Weight and normal force are vertical, so neither can turn the car horizontally.",
        "zh": "在平坦弯道上，轮胎与路面之间的静摩擦指向圆心，提供向心力。重量和法向力是竖直的，都不能使车在水平方向转弯。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object completes a circle of radius 2 m in a period of 4 s. Its speed is:",
        "zh": "一个物体在半径 2 m 的圆上以 4 s 的周期运动。它的速率是："
      },
      "choices": [
        "$\\pi\\ \\text{m/s}$",
        "$0.5\\ \\text{m/s}$",
        "$8\\ \\text{m/s}$",
        "$4\\pi\\ \\text{m/s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Speed $=$ circumference/period $=2\\pi r/T=2\\pi(2)/4=\\pi\\ \\text{m/s}\\approx 3.14\\ \\text{m/s}$. Using the radius instead of the circumference (giving 0.5) omits the factor $2\\pi$.",
        "zh": "速率 $=$ 周长/周期 $=2\\pi r/T=2\\pi(2)/4=\\pi\\ \\text{m/s}\\approx 3.14\\ \\text{m/s}$。用半径而非周长（得 0.5）漏掉了 $2\\pi$ 这个因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The gravitational field strength g at the surface of a planet of mass M and radius R is:",
        "zh": "质量为 M、半径为 R 的行星表面的引力场强度 g 是："
      },
      "choices": [
        "$g=GM/R$",
        "$g=GM/R^2$",
        "$g=GMR^2$",
        "$g=GM^2/R$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Setting $mg=GMm/R^2$ and cancelling $m$ gives $g=GM/R^2$. Using $R$ instead of $R^2$ drops the inverse-square dependence on radius.",
        "zh": "令 $mg=GMm/R^2$ 并约去 $m$ 得 $g=GM/R^2$。用 $R$ 而非 $R^2$ 丢掉了对半径的平方反比依赖。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As a ball on a string is whirled in a horizontal circle, the string suddenly breaks. The ball then moves:",
        "zh": "系在绳上的球在水平圆周上旋转时绳突然断裂。球随后运动方向为："
      },
      "choices": [
        "directly toward the center",
        "spiraling outward",
        "straight along the tangent, in a straight line",
        "directly away from the center along the radius"
      ],
      "answer": 2,
      "explanation": {
        "en": "With no more centripetal force, the ball obeys inertia and flies off along the tangent — the straight line it was instantaneously moving along. It does not shoot straight outward along the radius, which is a common misconception.",
        "zh": "没有了向心力，球遵循惯性沿切线飞出——即它当时正沿着运动的那条直线。它不会沿半径直接向外射出，那是常见的误解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At the top of a vertical circular loop, a car of mass m barely maintains contact (normal force approaches zero). What provides the centripetal force there?",
        "zh": "在竖直圆环顶端，一辆质量为 m 的车勉强保持接触（法向力趋于零）。此时向心力由什么提供？"
      },
      "choices": [
        "the normal force alone",
        "friction with the track",
        "an outward centrifugal force",
        "gravity (the car's weight)"
      ],
      "answer": 3,
      "explanation": {
        "en": "When the normal force drops to zero, only gravity remains, so weight alone supplies the centripetal force: $mg=mv^2/r$. There is no real outward force acting on the car.",
        "zh": "当法向力降为零时只剩引力，所以仅由重量提供向心力：$mg=mv^2/r$。并没有真实的向外的力作用在车上。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 0.5 kg ball moves in a circle of radius 2 m at 6 m/s. What is the centripetal force in N?",
        "zh": "一个 0.5 kg 的球以 6 m/s 在半径 2 m 的圆上运动。向心力是多少 N？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "9 N",
        "9N",
        "9.00"
      ],
      "explanation": {
        "en": "$F=mv^2/r=0.5\\times 36/2=9\\ \\text{N}$. Forgetting to square the speed (using $mv/r$) would give 1.5.",
        "zh": "$F=mv^2/r=0.5\\times 36/2=9\\ \\text{N}$。忘记把速率平方（用 $mv/r$）会得到 1.5。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car moves at 20 m/s around a circular track of radius 100 m. What is its centripetal acceleration in m/s^2?",
        "zh": "一辆车以 20 m/s 绕半径 100 m 的圆形赛道运动。它的向心加速度是多少 m/s^2？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 m/s^2",
        "4.00"
      ],
      "explanation": {
        "en": "$a=v^2/r=400/100=4\\ \\text{m/s}^2$. Forgetting to square the speed (using $v/r$) would give 0.2.",
        "zh": "$a=v^2/r=400/100=4\\ \\text{m/s}^2$。忘记把速率平方（用 $v/r$）会得到 0.2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object moving at 10 m/s has a centripetal acceleration of 25 m/s^2. What is the radius of its circular path in m?",
        "zh": "一个以 10 m/s 运动的物体，向心加速度为 25 m/s^2。它圆周路径的半径是多少 m？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 m",
        "4m",
        "4.00"
      ],
      "explanation": {
        "en": "From $a=v^2/r$, $r=v^2/a=100/25=4\\ \\text{m}$. Forgetting to square the speed (using $v/a$) would give 0.4.",
        "zh": "由 $a=v^2/r$，$r=v^2/a=100/25=4\\ \\text{m}$。忘记把速率平方（用 $v/a$）会得到 0.4。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two masses attract with force F. If both masses are doubled and the distance is unchanged, the new force is how many times F?",
        "zh": "两质量以力 F 相互吸引。若两质量都加倍而距离不变，新的力是 F 的多少倍？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4x",
        "4 times",
        "4倍",
        "4.00"
      ],
      "explanation": {
        "en": "$F\\propto m_1 m_2$, so doubling both multiplies the force by $2\\times 2=4$. Adding the effects (giving 2) instead of multiplying them is the common slip.",
        "zh": "$F\\propto m_1 m_2$，所以两者都加倍使力变为 $2\\times 2=4$ 倍。把两个效果相加（得 2）而非相乘是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object travels around a circle of radius 3 m with a period of 2 s. What is its speed in m/s? Use $\\pi=3.14$.",
        "zh": "一个物体绕半径 3 m 的圆运动，周期为 2 s。它的速率是多少 m/s？用 $\\pi=3.14$。"
      },
      "answer": "9.42",
      "accept": [
        "9.42 m/s",
        "9.4",
        "3pi",
        "9.420"
      ],
      "explanation": {
        "en": "$v=2\\pi r/T=2(3.14)(3)/2=9.42\\ \\text{m/s}$. Using $r/T$ without the $2\\pi$ (giving 1.5) omits the circumference factor.",
        "zh": "$v=2\\pi r/T=2(3.14)(3)/2=9.42\\ \\text{m/s}$。用 $r/T$ 而没有 $2\\pi$（得 1.5）漏掉了周长因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 1200 kg car rounds a flat curve of radius 50 m at 15 m/s. What centripetal force in N is needed? ",
        "zh": "一辆 1200 kg 的车以 15 m/s 转过半径 50 m 的平坦弯道。所需的向心力是多少 N？"
      },
      "answer": "5400",
      "accept": [
        "5400.0",
        "5400 N",
        "5.4e3",
        "5,400",
        "5400N"
      ],
      "explanation": {
        "en": "$F=mv^2/r=1200\\times 225/50=5400\\ \\text{N}$. Forgetting to square the speed (using $mv/r$) would give 360 and drastically underestimate it.",
        "zh": "$F=mv^2/r=1200\\times 225/50=5400\\ \\text{N}$。忘记把速率平方（用 $mv/r$）会得到 360，严重低估。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A planet has twice Earth's mass and twice Earth's radius. Its surface gravity is how many times Earth's g?",
        "zh": "一颗行星的质量是地球的两倍，半径也是地球的两倍。它的表面重力是地球 g 的多少倍？"
      },
      "answer": "0.5",
      "accept": [
        "0.50",
        "1/2",
        ".5",
        "0.500"
      ],
      "explanation": {
        "en": "Since $g=GM/R^2$, the factor is $2/2^2=2/4=0.5$. Forgetting to square the radius would wrongly give 1 (no change).",
        "zh": "由于 $g=GM/R^2$，比值为 $2/2^2=2/4=0.5$。忘记把半径平方会错误地得到 1（不变）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At the top of a vertical loop of radius 5 m, a car is on the verge of losing contact ($g=9.8\\ \\text{m/s}^2$). What minimum speed in m/s is required?",
        "zh": "在半径 5 m 的竖直圆环顶端，一辆车即将失去接触（$g=9.8\\ \\text{m/s}^2$）。所需的最小速率是多少 m/s？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "7 m/s",
        "7m/s",
        "7.00"
      ],
      "explanation": {
        "en": "At the minimum, gravity alone is centripetal: $mg=mv^2/r$, so $v=\\sqrt{gr}=\\sqrt{9.8\\times 5}=\\sqrt{49}=7\\ \\text{m/s}$. Forgetting the square root would leave 49, the value of $v^2$, not $v$.",
        "zh": "在最小值时仅由重力提供向心力：$mg=mv^2/r$，所以 $v=\\sqrt{gr}=\\sqrt{9.8\\times 5}=\\sqrt{49}=7\\ \\text{m/s}$。忘记开平方会留下 49，那是 $v^2$ 而非 $v$。"
      }
    }
  ],
  "work-energy-power/work-and-kinetic-energy": [
    {
      "type": "mc",
      "question": {
        "en": "A constant force of 10 N pushes a box 4 m in the same direction as the force. How much work does the force do?",
        "zh": "一个 10 N 的恒力沿力的方向把箱子推动 4 m。这个力做了多少功？"
      },
      "choices": [
        "40 J",
        "14 J",
        "2.5 J",
        "400 J"
      ],
      "answer": 0,
      "explanation": {
        "en": "Work is $W = Fd\\cos\\theta$. With force and displacement parallel, $\\theta = 0$ so $W = (10)(4) = 40$ J. Dividing force by distance or adding them instead of multiplying gives wrong values.",
        "zh": "功为 $W = Fd\\cos\\theta$。力与位移同向，$\\theta = 0$，所以 $W = (10)(4) = 40$ J。把力除以距离或相加而不是相乘会得到错误的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the kinetic energy of an object of mass $m$ moving at speed $v$?",
        "zh": "下面哪个表达式给出质量为 $m$、速度为 $v$ 的物体的动能？"
      },
      "choices": [
        "$mv$",
        "$\\frac{1}{2}mv^2$",
        "$mgh$",
        "$\\frac{1}{2}mv$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Kinetic energy is $KE = \\frac{1}{2}mv^2$. The product $mv$ is momentum, and $mgh$ is gravitational potential energy; forgetting to square the speed leaves an incorrect form.",
        "zh": "动能为 $KE = \\frac{1}{2}mv^2$。$mv$ 是动量，$mgh$ 是重力势能；忘记把速度平方会得到错误形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 20 N force acts on a crate while it moves 5 m, with a $60^\\circ$ angle between the force and the displacement. How much work is done?",
        "zh": "一个 20 N 的力作用在板条箱上，板条箱移动 5 m，力与位移之间的夹角为 $60^\\circ$。做了多少功？"
      },
      "choices": [
        "20 J",
        "100 J",
        "50 J",
        "86.6 J"
      ],
      "answer": 2,
      "explanation": {
        "en": "$W = Fd\\cos\\theta = (20)(5)\\cos 60^\\circ = 100 \\times 0.5 = 50$ J. Ignoring the cosine gives 100 J, and using $\\cos 30^\\circ$ instead gives about 86.6 J.",
        "zh": "$W = Fd\\cos\\theta = (20)(5)\\cos 60^\\circ = 100 \\times 0.5 = 50$ J。忽略余弦得到 100 J，误用 $\\cos 30^\\circ$ 得到约 86.6 J。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The work-energy theorem states that the net work done on an object equals its change in what quantity?",
        "zh": "动能定理指出，作用在物体上的净功等于它哪个量的变化？"
      },
      "choices": [
        "change in momentum",
        "the object's weight",
        "total mechanical energy",
        "change in kinetic energy"
      ],
      "answer": 3,
      "explanation": {
        "en": "The work-energy theorem is $W_{net} = \\Delta KE$. Net work changes kinetic energy, not momentum; confusing energy with momentum leads to the wrong choice.",
        "zh": "动能定理为 $W_{net} = \\Delta KE$。净功改变动能，而不是动量；把能量与动量混淆会导致错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the kinetic energy of a 2 kg object moving at 3 m/s?",
        "zh": "一个 2 kg 的物体以 3 m/s 运动，其动能是多少？"
      },
      "choices": [
        "9 J",
        "18 J",
        "3 J",
        "6 J"
      ],
      "answer": 0,
      "explanation": {
        "en": "$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(3^2) = 9$ J. Forgetting the factor of one-half gives 18 J, and forgetting to square the speed gives an incorrect small value.",
        "zh": "$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(3^2) = 9$ J。忘记乘二分之一得到 18 J，忘记平方速度得到偏小的错误值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A force acts perpendicular to an object's displacement. How much work does that force do?",
        "zh": "一个力与物体位移方向垂直。这个力做了多少功？"
      },
      "choices": [
        "the maximum possible",
        "0 J",
        "always negative",
        "equal to $Fd$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $W = Fd\\cos\\theta$ and $\\cos 90^\\circ = 0$, a perpendicular force does zero work. Assuming every applied force does work ignores the angle factor.",
        "zh": "因为 $W = Fd\\cos\\theta$ 且 $\\cos 90^\\circ = 0$，垂直的力做零功。认为任何施加的力都做功忽略了角度因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 5 N friction force acts on a sliding block over 3 m, opposing its motion. How much work does friction do?",
        "zh": "一个 5 N 的摩擦力作用在滑动的木块上，作用距离 3 m，方向与运动相反。摩擦力做了多少功？"
      },
      "choices": [
        "15 J",
        "0 J",
        "-15 J",
        "8 J"
      ],
      "answer": 2,
      "explanation": {
        "en": "Friction opposes motion, so $\\theta = 180^\\circ$ and $W = (5)(3)\\cos 180^\\circ = -15$ J. Dropping the negative sign treats friction as if it added energy.",
        "zh": "摩擦力与运动相反，所以 $\\theta = 180^\\circ$，$W = (5)(3)\\cos 180^\\circ = -15$ J。丢掉负号相当于认为摩擦力增加了能量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The joule, the SI unit of work, is equivalent to which combination of units?",
        "zh": "焦耳是功的国际单位，等于下面哪种单位组合？"
      },
      "choices": [
        "$kg \\cdot m/s$",
        "$kg \\cdot m^2$",
        "$N/m$",
        "$N \\cdot m$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Work is force times distance, so a joule is a newton-meter, $N \\cdot m$. The unit $kg \\cdot m/s$ is momentum, and $N/m$ is a spring constant.",
        "zh": "功是力乘以距离，所以焦耳是牛顿·米，即 $N \\cdot m$。$kg \\cdot m/s$ 是动量单位，$N/m$ 是弹簧常数单位。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If an object's speed doubles, by what factor does its kinetic energy increase?",
        "zh": "如果一个物体的速度加倍，它的动能增大到原来的几倍？"
      },
      "choices": [
        "4",
        "3",
        "2",
        "8"
      ],
      "answer": 0,
      "explanation": {
        "en": "Kinetic energy depends on $v^2$, so doubling speed multiplies $KE$ by $2^2 = 4$. Assuming energy scales linearly with speed gives the incorrect factor of 2.",
        "zh": "动能与 $v^2$ 成正比，所以速度加倍使动能变为 $2^2 = 4$ 倍。认为能量与速度成线性关系会得到错误的 2 倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the net work done on a moving object is zero, what can you conclude?",
        "zh": "如果作用在运动物体上的净功为零，你能得出什么结论？"
      },
      "choices": [
        "it must be at rest",
        "its kinetic energy is unchanged",
        "it is accelerating",
        "its momentum is zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $W_{net} = \\Delta KE$, zero net work means kinetic energy does not change, so the speed stays constant. Zero net work does not require the object to stop or accelerate.",
        "zh": "因为 $W_{net} = \\Delta KE$，净功为零意味着动能不变，速度保持恒定。净功为零并不要求物体停止或加速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A person lifts a 3 kg object 2 m upward at constant velocity. How much work does the lifting force do? (Use $g = 9.8$ m/s^2.)",
        "zh": "一个人以匀速把 3 kg 的物体竖直向上提升 2 m。提升力做了多少功？（取 $g = 9.8$ m/s^2。）"
      },
      "choices": [
        "6 J",
        "29.4 J",
        "58.8 J",
        "19.6 J"
      ],
      "answer": 2,
      "explanation": {
        "en": "At constant velocity the lifting force equals the weight $mg$, so $W = mgh = (3)(9.8)(2) = 58.8$ J. Multiplying mass by height without $g$ gives the incorrect 6 J.",
        "zh": "匀速时提升力等于重力 $mg$，所以 $W = mgh = (3)(9.8)(2) = 58.8$ J。只用质量乘高度而不乘 $g$ 得到错误的 6 J。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As a ball falls freely downward, the work done by gravity on the ball is:",
        "zh": "当一个球自由下落时，重力对球做的功是："
      },
      "choices": [
        "negative",
        "undefined",
        "zero",
        "positive"
      ],
      "answer": 3,
      "explanation": {
        "en": "Gravity points downward and the displacement is downward, so the angle is $0^\\circ$ and the work is positive. Treating the downward force as opposing motion wrongly gives a negative sign.",
        "zh": "重力向下，位移也向下，夹角为 $0^\\circ$，所以做正功。把向下的力误认为与运动相反会错误地得到负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 25 N force pushes a cart 6 m in the direction of the force. How much work is done, in joules?",
        "zh": "一个 25 N 的力沿力的方向把小车推动 6 m。做了多少功（单位焦耳）？"
      },
      "answer": "150",
      "accept": [
        "150 J",
        "150.0",
        "150.0 J"
      ],
      "explanation": {
        "en": "$W = Fd = (25)(6) = 150$ J since force and displacement are parallel. Adding the values instead of multiplying gives a wrong result.",
        "zh": "力与位移同向，$W = Fd = (25)(6) = 150$ J。把数值相加而不是相乘会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the kinetic energy, in joules, of a 4 kg object moving at 5 m/s?",
        "zh": "一个 4 kg 的物体以 5 m/s 运动，其动能是多少焦耳？"
      },
      "answer": "50",
      "accept": [
        "50 J",
        "50.0",
        "50.0 J"
      ],
      "explanation": {
        "en": "$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(25) = 50$ J. Forgetting to square the speed or dropping the one-half gives an incorrect value.",
        "zh": "$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(25) = 50$ J。忘记平方速度或丢掉二分之一会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 2 kg object starts from rest and reaches 6 m/s. What is the net work done on it, in joules?",
        "zh": "一个 2 kg 的物体从静止开始达到 6 m/s。作用在它上的净功是多少焦耳？"
      },
      "answer": "36",
      "accept": [
        "36 J",
        "36.0",
        "36.0 J"
      ],
      "explanation": {
        "en": "By the work-energy theorem $W_{net} = \\Delta KE = \\frac{1}{2}(2)(6^2) - 0 = 36$ J. Using the speed without squaring gives too small a number.",
        "zh": "由动能定理 $W_{net} = \\Delta KE = \\frac{1}{2}(2)(6^2) - 0 = 36$ J。用速度但不平方会得到偏小的数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 100 N force acts over 10 m at a $30^\\circ$ angle to the displacement. How much work is done, in joules? (Round to the nearest whole number.)",
        "zh": "一个 100 N 的力作用 10 m，与位移成 $30^\\circ$ 角。做了多少功（单位焦耳，取整数）？"
      },
      "answer": "866",
      "accept": [
        "866 J",
        "865.6",
        "866.0",
        "865.6 J",
        "866.0 J"
      ],
      "explanation": {
        "en": "$W = Fd\\cos\\theta = (100)(10)\\cos 30^\\circ = 1000 \\times 0.866 \\approx 866$ J. Ignoring the cosine gives 1000 J.",
        "zh": "$W = Fd\\cos\\theta = (100)(10)\\cos 30^\\circ = 1000 \\times 0.866 \\approx 866$ J。忽略余弦得到 1000 J。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A block slides 5 m while an 8 N friction force opposes its motion. How much work does friction do, in joules? (Include the sign.)",
        "zh": "一个木块滑动 5 m，同时受到 8 N 的摩擦力阻碍运动。摩擦力做了多少功（单位焦耳，包含符号）？"
      },
      "answer": "-40",
      "accept": [
        "-40 J",
        "-40.0",
        "-40.0 J"
      ],
      "explanation": {
        "en": "Friction opposes motion, so $W = (8)(5)\\cos 180^\\circ = -40$ J. Omitting the negative sign misses that friction removes energy.",
        "zh": "摩擦力与运动相反，$W = (8)(5)\\cos 180^\\circ = -40$ J。省略负号会忽略摩擦力带走了能量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 3 kg object has 54 J of kinetic energy. What is its speed, in m/s?",
        "zh": "一个 3 kg 的物体具有 54 J 的动能。它的速度是多少 m/s？"
      },
      "answer": "6",
      "accept": [
        "6 m/s",
        "6.0",
        "6.0 m/s"
      ],
      "explanation": {
        "en": "From $KE = \\frac{1}{2}mv^2$, $54 = \\frac{1}{2}(3)v^2$ gives $v^2 = 36$, so $v = 6$ m/s. Forgetting to take the square root leaves 36 by mistake.",
        "zh": "由 $KE = \\frac{1}{2}mv^2$，$54 = \\frac{1}{2}(3)v^2$ 得 $v^2 = 36$，所以 $v = 6$ m/s。忘记开方会错误地留下 36。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How much work, in joules, is needed to lift a 10 kg mass 5 m upward at constant speed? (Use $g = 9.8$ m/s^2.)",
        "zh": "以匀速把 10 kg 的物体竖直提升 5 m 需要做多少功（单位焦耳）？（取 $g = 9.8$ m/s^2。）"
      },
      "answer": "490",
      "accept": [
        "490 J",
        "490.0",
        "490.0 J"
      ],
      "explanation": {
        "en": "$W = mgh = (10)(9.8)(5) = 490$ J. Leaving out $g$ and using only mass times height gives the wrong answer of 50.",
        "zh": "$W = mgh = (10)(9.8)(5) = 490$ J。漏掉 $g$ 只用质量乘高度会得到错误的 50。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 4 kg cart starts from rest, and 200 J of net work is done on it. What is its final speed, in m/s?",
        "zh": "一个 4 kg 的小车从静止开始，被做了 200 J 的净功。它的末速度是多少 m/s？"
      },
      "answer": "10",
      "accept": [
        "10 m/s",
        "10.0",
        "10.0 m/s"
      ],
      "explanation": {
        "en": "$W_{net} = \\frac{1}{2}mv^2$ gives $200 = \\frac{1}{2}(4)v^2$, so $v^2 = 100$ and $v = 10$ m/s. Forgetting the square root leaves 100 incorrectly.",
        "zh": "$W_{net} = \\frac{1}{2}mv^2$ 得 $200 = \\frac{1}{2}(4)v^2$，所以 $v^2 = 100$，$v = 10$ m/s。忘记开方会错误地留下 100。"
      }
    }
  ],
  "work-energy-power/energy-conservation-power": [
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the gravitational potential energy of a mass $m$ at height $h$?",
        "zh": "下面哪个表达式给出质量 $m$ 在高度 $h$ 处的重力势能？"
      },
      "choices": [
        "$mgh$",
        "$\\frac{1}{2}mv^2$",
        "$\\frac{1}{2}kx^2$",
        "$Fd$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Gravitational potential energy is $PE = mgh$. The term $\\frac{1}{2}mv^2$ is kinetic energy and $\\frac{1}{2}kx^2$ is elastic potential energy; confusing these forms gives the wrong choice.",
        "zh": "重力势能为 $PE = mgh$。$\\frac{1}{2}mv^2$ 是动能，$\\frac{1}{2}kx^2$ 是弹性势能；把它们混淆会选错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The watt, the SI unit of power, is equivalent to which of the following?",
        "zh": "瓦特是功率的国际单位，等于下面哪一项？"
      },
      "choices": [
        "$N \\cdot m$",
        "$J/s$",
        "$J \\cdot s$",
        "$kg \\cdot m/s$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Power is energy per unit time, so a watt is a joule per second, $J/s$. The unit $N \\cdot m$ is a joule of energy, not power; multiplying energy by time instead of dividing is a common slip.",
        "zh": "功率是单位时间的能量，所以瓦特是焦耳每秒，即 $J/s$。$N \\cdot m$ 是能量焦耳而不是功率；把能量乘以时间而不是除以时间是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation correctly relates average power $P$, work $W$, and time $t$?",
        "zh": "下面哪个方程正确地关联了平均功率 $P$、功 $W$ 和时间 $t$？"
      },
      "choices": [
        "$P = \\frac{t}{W}$",
        "$P = Wt$",
        "$P = \\frac{W}{t}$",
        "$P = W + t$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Power is the rate of doing work, $P = \\frac{W}{t}$. Multiplying work by time or inverting the ratio gives units and values that are not power.",
        "zh": "功率是做功的速率，$P = \\frac{W}{t}$。把功乘以时间或颠倒这个比值会得到既非单位也非数值正确的功率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spring with constant $k = 200$ N/m is compressed 0.5 m. How much elastic potential energy is stored?",
        "zh": "一根劲度系数 $k = 200$ N/m 的弹簧被压缩 0.5 m。储存了多少弹性势能？"
      },
      "choices": [
        "50 J",
        "100 J",
        "12.5 J",
        "25 J"
      ],
      "answer": 3,
      "explanation": {
        "en": "$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}(200)(0.5^2) = \\frac{1}{2}(200)(0.25) = 25$ J. Forgetting to square the displacement gives 50 J.",
        "zh": "$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}(200)(0.5^2) = \\frac{1}{2}(200)(0.25) = 25$ J。忘记平方位移会得到 50 J。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the gravitational potential energy of a 2 kg object at a height of 10 m? (Use $g = 9.8$ m/s^2.)",
        "zh": "一个 2 kg 的物体在 10 m 高处的重力势能是多少？（取 $g = 9.8$ m/s^2。）"
      },
      "choices": [
        "196 J",
        "20 J",
        "98 J",
        "392 J"
      ],
      "answer": 0,
      "explanation": {
        "en": "$PE = mgh = (2)(9.8)(10) = 196$ J. Leaving out $g$ gives 20 J, and using only one factor incorrectly gives 98 J.",
        "zh": "$PE = mgh = (2)(9.8)(10) = 196$ J。漏掉 $g$ 得到 20 J，只用一个因子会错误地得到 98 J。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object is dropped from rest at height $h$. Using energy conservation, what is its speed just before hitting the ground?",
        "zh": "一个物体从高度 $h$ 处静止释放。用能量守恒，它落地前的速度是多少？"
      },
      "choices": [
        "$v = gh$",
        "$v = \\sqrt{2gh}$",
        "$v = 2gh$",
        "$v = \\sqrt{gh}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Setting $mgh = \\frac{1}{2}mv^2$ and solving gives $v = \\sqrt{2gh}$. Forgetting the factor of 2 or leaving the speed unrooted gives the other forms.",
        "zh": "令 $mgh = \\frac{1}{2}mv^2$ 求解得 $v = \\sqrt{2gh}$。忘记因子 2 或不开方会得到其它形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A machine does 600 J of work in 3 s. What is its average power output?",
        "zh": "一台机器在 3 s 内做了 600 J 的功。它的平均输出功率是多少？"
      },
      "choices": [
        "2 W",
        "1800 W",
        "200 W",
        "300 W"
      ],
      "answer": 2,
      "explanation": {
        "en": "$P = \\frac{W}{t} = \\frac{600}{3} = 200$ W. Multiplying work by time instead of dividing gives 1800 W.",
        "zh": "$P = \\frac{W}{t} = \\frac{600}{3} = 200$ W。把功乘以时间而不是除以时间会得到 1800 W。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car engine exerts a constant 500 N force to keep the car moving at 20 m/s. What power does it deliver?",
        "zh": "汽车发动机施加恒定的 500 N 力使汽车保持 20 m/s 行驶。它输出的功率是多少？"
      },
      "choices": [
        "25 W",
        "520 W",
        "480 W",
        "10000 W"
      ],
      "answer": 3,
      "explanation": {
        "en": "Power for a force at constant speed is $P = Fv = (500)(20) = 10000$ W. Dividing force by speed or adding them instead of multiplying gives wrong values.",
        "zh": "恒速下力的功率为 $P = Fv = (500)(20) = 10000$ W。把力除以速度或相加而不是相乘会得到错误值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At the lowest point of its swing, a pendulum bob's mechanical energy is mostly in what form?",
        "zh": "在摆动的最低点，摆锤的机械能主要以什么形式存在？"
      },
      "choices": [
        "kinetic energy",
        "gravitational potential energy",
        "elastic potential energy",
        "zero"
      ],
      "answer": 0,
      "explanation": {
        "en": "At the lowest point the height is minimum, so potential energy is least and the bob moves fastest, making the energy mostly kinetic. Assuming energy is stored as height at the bottom reverses the situation.",
        "zh": "在最低点高度最小，所以势能最小而摆锤运动最快，能量主要是动能。认为最低点以高度形式储存能量把情况弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A machine takes in 100 J of energy and produces 80 J of useful output. What is its efficiency?",
        "zh": "一台机器输入 100 J 能量，产生 80 J 有用输出。它的效率是多少？"
      },
      "choices": [
        "20%",
        "80%",
        "100%",
        "125%"
      ],
      "answer": 1,
      "explanation": {
        "en": "Efficiency is useful output over input, $\\frac{80}{100} = 80\\%$. Dividing input by output gives 125%, which is impossible for a real machine.",
        "zh": "效率是有用输出除以输入，$\\frac{80}{100} = 80\\%$。用输入除以输出得到 125%，这对真实机器是不可能的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When friction is present as an object slides, its total mechanical energy generally does what?",
        "zh": "当物体滑动时存在摩擦，它的总机械能通常会怎样？"
      },
      "choices": [
        "stays constant",
        "increases",
        "decreases",
        "becomes zero instantly"
      ],
      "answer": 2,
      "explanation": {
        "en": "Friction converts mechanical energy into heat, so mechanical energy decreases. Total energy is still conserved, but assuming mechanical energy stays constant ignores the energy lost to heat.",
        "zh": "摩擦把机械能转化为热，所以机械能减少。总能量仍守恒，但认为机械能保持不变忽略了转化为热的能量损失。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A 2 kg object is dropped from rest at a height of 5 m. Using energy conservation, what is its speed at the bottom? (Use $g = 9.8$ m/s^2.)",
        "zh": "一个 2 kg 的物体从 5 m 高处静止释放。用能量守恒，它到达底部时的速度是多少？（取 $g = 9.8$ m/s^2。）"
      },
      "choices": [
        "49 m/s",
        "5 m/s",
        "98 m/s",
        "9.9 m/s"
      ],
      "answer": 3,
      "explanation": {
        "en": "$v = \\sqrt{2gh} = \\sqrt{2(9.8)(5)} = \\sqrt{98} \\approx 9.9$ m/s. Forgetting to take the square root leaves 98, which is $v^2$, not $v$.",
        "zh": "$v = \\sqrt{2gh} = \\sqrt{2(9.8)(5)} = \\sqrt{98} \\approx 9.9$ m/s。忘记开方会留下 98，那是 $v^2$ 而不是 $v$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the gravitational potential energy, in joules, of a 5 kg object at a height of 4 m? (Use $g = 9.8$ m/s^2.)",
        "zh": "一个 5 kg 的物体在 4 m 高处的重力势能是多少焦耳？（取 $g = 9.8$ m/s^2。）"
      },
      "answer": "196",
      "accept": [
        "196 J",
        "196.0",
        "196.0 J"
      ],
      "explanation": {
        "en": "$PE = mgh = (5)(9.8)(4) = 196$ J. Leaving out $g$ and using only mass times height gives the incorrect 20.",
        "zh": "$PE = mgh = (5)(9.8)(4) = 196$ J。漏掉 $g$ 只用质量乘高度得到错误的 20。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A motor does 1000 J of work in 5 s. What is its power output, in watts?",
        "zh": "一台电机在 5 s 内做了 1000 J 的功。它的输出功率是多少瓦？"
      },
      "answer": "200",
      "accept": [
        "200 W",
        "200.0",
        "200.0 W"
      ],
      "explanation": {
        "en": "$P = \\frac{W}{t} = \\frac{1000}{5} = 200$ W. Multiplying instead of dividing gives an impossibly large power.",
        "zh": "$P = \\frac{W}{t} = \\frac{1000}{5} = 200$ W。相乘而不是相除会得到大得离谱的功率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spring with $k = 400$ N/m is stretched 0.2 m. How much elastic potential energy, in joules, is stored?",
        "zh": "一根 $k = 400$ N/m 的弹簧被拉伸 0.2 m。储存了多少弹性势能（单位焦耳）？"
      },
      "answer": "8",
      "accept": [
        "8 J",
        "8.0",
        "8.0 J"
      ],
      "explanation": {
        "en": "$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.2^2) = \\frac{1}{2}(400)(0.04) = 8$ J. Forgetting to square the displacement gives 40 J.",
        "zh": "$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.2^2) = \\frac{1}{2}(400)(0.04) = 8$ J。忘记平方位移会得到 40 J。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object is dropped from rest at 20 m. Using energy conservation, what is its speed at the ground, in m/s? (Use $g = 9.8$ m/s^2, round to one decimal.)",
        "zh": "一个物体从 20 m 高处静止释放。用能量守恒，它到达地面时的速度是多少 m/s？（取 $g = 9.8$ m/s^2，保留一位小数。）"
      },
      "answer": "19.8",
      "accept": [
        "19.8 m/s",
        "19.80",
        "19.8",
        "19.80 m/s"
      ],
      "explanation": {
        "en": "$v = \\sqrt{2gh} = \\sqrt{2(9.8)(20)} = \\sqrt{392} \\approx 19.8$ m/s. Forgetting the factor of 2 underestimates the speed.",
        "zh": "$v = \\sqrt{2gh} = \\sqrt{2(9.8)(20)} = \\sqrt{392} \\approx 19.8$ m/s。忘记因子 2 会低估速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A machine pushes with a 250 N force on an object moving at 8 m/s. What power, in watts, does it deliver?",
        "zh": "一台机器以 250 N 的力推动以 8 m/s 运动的物体。它输出的功率是多少瓦？"
      },
      "answer": "2000",
      "accept": [
        "2000 W",
        "2000.0",
        "2 kW",
        "2000.0 W"
      ],
      "explanation": {
        "en": "$P = Fv = (250)(8) = 2000$ W. Dividing force by speed instead of multiplying gives a far too small value.",
        "zh": "$P = Fv = (250)(8) = 2000$ W。把力除以速度而不是相乘会得到过小的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 3 kg object is dropped from rest at 6 m. Using energy conservation, what is its kinetic energy, in joules, just before it lands? (Use $g = 9.8$ m/s^2.)",
        "zh": "一个 3 kg 的物体从 6 m 高处静止释放。用能量守恒，它落地前的动能是多少焦耳？（取 $g = 9.8$ m/s^2。）"
      },
      "answer": "176.4",
      "accept": [
        "176.4 J",
        "176.40",
        "176.4",
        "176.40 J"
      ],
      "explanation": {
        "en": "All the potential energy becomes kinetic, so $KE = mgh = (3)(9.8)(6) = 176.4$ J. Leaving out $g$ gives only 18.",
        "zh": "全部势能转化为动能，所以 $KE = mgh = (3)(9.8)(6) = 176.4$ J。漏掉 $g$ 只得到 18。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A crane lifts a 20 kg load 3 m upward in 4 s at constant speed. What is the crane's power output, in watts? (Use $g = 9.8$ m/s^2.)",
        "zh": "一台起重机在 4 s 内以匀速把 20 kg 的货物竖直提升 3 m。起重机的输出功率是多少瓦？（取 $g = 9.8$ m/s^2。）"
      },
      "answer": "147",
      "accept": [
        "147 W",
        "147.0",
        "147.0 W"
      ],
      "explanation": {
        "en": "Work is $mgh = (20)(9.8)(3) = 588$ J, so $P = \\frac{588}{4} = 147$ W. Forgetting to divide by the time reports the work as if it were power.",
        "zh": "功为 $mgh = (20)(9.8)(3) = 588$ J，所以 $P = \\frac{588}{4} = 147$ W。忘记除以时间会把功当作功率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A machine takes in 500 J and produces 300 J of useful output. What is its efficiency, in percent?",
        "zh": "一台机器输入 500 J，产生 300 J 有用输出。它的效率是多少（百分比）？"
      },
      "answer": "60",
      "accept": [
        "60%",
        "60.0",
        "0.6",
        "60",
        "60.0%"
      ],
      "explanation": {
        "en": "Efficiency is useful output over input, $\\frac{300}{500} = 0.60 = 60\\%$. Dividing input by output instead gives an impossible value above 100%.",
        "zh": "效率是有用输出除以输入，$\\frac{300}{500} = 0.60 = 60\\%$。用输入除以输出会得到超过 100% 的不可能值。"
      }
    }
  ],
  "linear-momentum/impulse-and-momentum": [
    {
      "type": "mc",
      "question": {
        "en": "Which expression correctly defines the linear momentum of an object?",
        "zh": "下列哪个表达式正确定义了物体的线动量？"
      },
      "choices": [
        "$p = mv$",
        "$p = \\frac{1}{2}mv^2$",
        "$p = ma$",
        "$p = mgh$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Momentum is mass times velocity, $p = mv$, a vector pointing in the direction of the velocity. The form with $v^2$ and a factor of one-half is kinetic energy, not momentum, and $ma$ is force.",
        "zh": "动量是质量乘以速度，$p = mv$，是一个方向与速度相同的矢量。含 $v^2$ 和二分之一系数的表达式是动能而非动量，$ma$ 则是力。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The impulse delivered to an object equals the change in which quantity?",
        "zh": "施加于物体的冲量等于哪个量的变化？"
      },
      "choices": [
        "Kinetic energy",
        "Momentum",
        "Velocity",
        "Acceleration"
      ],
      "answer": 1,
      "explanation": {
        "en": "The impulse-momentum theorem states $J = \\Delta p$: impulse equals the change in momentum. Impulse relates to a change in velocity only after dividing by mass, and it is not a change in energy.",
        "zh": "冲量-动量定理指出 $J = \\Delta p$：冲量等于动量的变化。只有再除以质量后冲量才与速度变化相关，它并不是能量的变化。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2\\,\\text{kg}$ ball moves at $3\\,\\text{m/s}$. What is the magnitude of its momentum?",
        "zh": "一个 $2\\,\\text{kg}$ 的球以 $3\\,\\text{m/s}$ 运动。它的动量大小是多少？"
      },
      "choices": [
        "$5\\,\\text{kg·m/s}$",
        "$1.5\\,\\text{kg·m/s}$",
        "$6\\,\\text{kg·m/s}$",
        "$9\\,\\text{kg·m/s}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$p = mv = (2)(3) = 6\\,\\text{kg·m/s}$. Adding mass and velocity gives 5, and dividing gives 1.5, but momentum is the product of the two.",
        "zh": "$p = mv = (2)(3) = 6\\,\\text{kg·m/s}$。把质量和速度相加得 5，相除得 1.5，但动量是二者的乘积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The SI unit of impulse is equivalent to which of the following?",
        "zh": "冲量的国际单位制单位等于下列哪一项？"
      },
      "choices": [
        "$\\text{N/s}$",
        "$\\text{J}$",
        "$\\text{W}$",
        "$\\text{kg·m/s}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Impulse can be written as $F\\,\\Delta t$ (units $\\text{N·s}$) or as $\\Delta p$ (units $\\text{kg·m/s}$); these are identical. The joule is energy, and force divided by time is not impulse.",
        "zh": "冲量可写为 $F\\,\\Delta t$（单位 $\\text{N·s}$）或 $\\Delta p$（单位 $\\text{kg·m/s}$），二者完全相同。焦耳是能量单位，力除以时间不是冲量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A constant force of $10\\,\\text{N}$ acts on a cart for $4\\,\\text{s}$. What impulse is delivered?",
        "zh": "一个恒定的 $10\\,\\text{N}$ 的力作用在小车上 $4\\,\\text{s}$。施加的冲量是多少？"
      },
      "choices": [
        "$40\\,\\text{N·s}$",
        "$14\\,\\text{N·s}$",
        "$2.5\\,\\text{N·s}$",
        "$400\\,\\text{N·s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$J = F\\,\\Delta t = (10)(4) = 40\\,\\text{N·s}$. Dividing force by time gives 2.5 and adding them gives 14, but impulse is force multiplied by the time interval.",
        "zh": "$J = F\\,\\Delta t = (10)(4) = 40\\,\\text{N·s}$。用力除以时间得 2.5，相加得 14，但冲量是力乘以时间间隔。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On a force-versus-time graph, the impulse delivered is represented by which feature?",
        "zh": "在力-时间图上，所施加的冲量由哪个特征表示？"
      },
      "choices": [
        "The slope of the line",
        "The area under the curve",
        "The maximum height",
        "The final time value"
      ],
      "answer": 1,
      "explanation": {
        "en": "Impulse is $\\int F\\,dt$, which graphically is the area under the force-time curve. The slope of a force-time graph gives how force changes with time, not impulse.",
        "zh": "冲量是 $\\int F\\,dt$，在图上就是力-时间曲线下方的面积。力-时间图的斜率表示力随时间的变化率，而非冲量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two balls of equal mass hit a wall at the same speed. Ball A bounces back; ball B sticks. Which experiences the greater impulse from the wall?",
        "zh": "两个质量相等的球以相同速度撞墙。A 球反弹，B 球粘在墙上。哪个球受到墙更大的冲量？"
      },
      "choices": [
        "Ball B (sticks)",
        "They are equal",
        "Ball A (bounces)",
        "Cannot be determined"
      ],
      "answer": 2,
      "explanation": {
        "en": "The bouncing ball reverses its momentum, so $\\Delta p$ goes from $+mv$ to $-mv$, a change of $2mv$; the sticking ball changes only by $mv$. A larger change in momentum means a larger impulse. Assuming the sticking case gives more impulse ignores that reversal doubles the momentum change.",
        "zh": "反弹的球动量反向，$\\Delta p$ 从 $+mv$ 变为 $-mv$，变化量为 $2mv$；粘住的球只变化 $mv$。动量变化越大冲量越大。认为粘住的情况冲量更大，忽略了反向使动量变化加倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does bending your knees when landing from a jump reduce the force on your legs?",
        "zh": "从跳跃落地时弯曲膝盖为什么能减小腿部受到的力？"
      },
      "choices": [
        "It increases the impulse",
        "It reduces the change in momentum",
        "It converts momentum into energy",
        "It increases the collision time, lowering the average force"
      ],
      "answer": 3,
      "explanation": {
        "en": "The change in momentum is fixed by your landing speed, so from $F\\,\\Delta t = \\Delta p$ a longer stopping time gives a smaller average force. Bending the knees does not change the impulse itself; it spreads that same impulse over more time.",
        "zh": "动量变化由落地速度决定是固定的，因此由 $F\\,\\Delta t = \\Delta p$ 可知，停止时间越长平均力越小。弯膝并不改变冲量本身，而是把相同的冲量分散到更长时间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $0.5\\,\\text{kg}$ ball moving at $4\\,\\text{m/s}$ is stopped completely. What is the magnitude of the impulse on it?",
        "zh": "一个 $0.5\\,\\text{kg}$ 的球以 $4\\,\\text{m/s}$ 运动后完全停下。作用在它上面的冲量大小是多少？"
      },
      "choices": [
        "$2\\,\\text{N·s}$",
        "$0.125\\,\\text{N·s}$",
        "$8\\,\\text{N·s}$",
        "$4\\,\\text{N·s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$J = \\Delta p = m\\,\\Delta v = (0.5)(4 - 0) = 2\\,\\text{N·s}$. Using the mass and speed together as a product gives 2; dividing mass by speed gives 0.125.",
        "zh": "$J = \\Delta p = m\\,\\Delta v = (0.5)(4 - 0) = 2\\,\\text{N·s}$。把质量与速度相乘得 2；用质量除以速度得 0.125。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car and a truck have the same momentum. Compared with the car, the truck (larger mass) has which of the following?",
        "zh": "一辆汽车和一辆卡车动量相同。与汽车相比，质量更大的卡车具有下列哪种情况？"
      },
      "choices": [
        "A larger speed",
        "A smaller speed",
        "The same speed",
        "Zero speed"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $p = mv$ is the same for both, the object with more mass must have a smaller velocity. Assuming a heavier object always moves faster confuses mass with speed at fixed momentum.",
        "zh": "由于 $p = mv$ 对两者相同，质量更大的物体速度一定更小。认为更重的物体总是运动更快，是在动量固定时混淆了质量与速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "During a collision, the momentum change of an object depends on which two factors?",
        "zh": "在碰撞过程中，物体的动量变化取决于哪两个因素？"
      },
      "choices": [
        "Kinetic energy and distance",
        "Mass and acceleration only",
        "Average force and contact time",
        "Velocity and position"
      ],
      "answer": 2,
      "explanation": {
        "en": "Impulse equals average force times contact time, $J = F_{avg}\\,\\Delta t$, and this equals the momentum change. Focusing on distance instead of time describes work and energy, a different quantity.",
        "zh": "冲量等于平均力乘以接触时间，$J = F_{avg}\\,\\Delta t$，它等于动量变化。关注距离而非时间描述的是功和能量，是另一种量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $0.15\\,\\text{kg}$ baseball arrives at $30\\,\\text{m/s}$ and leaves at $40\\,\\text{m/s}$ in the opposite direction after being hit. What is the magnitude of the impulse from the bat?",
        "zh": "一个 $0.15\\,\\text{kg}$ 的棒球以 $30\\,\\text{m/s}$ 飞来，被击打后以 $40\\,\\text{m/s}$ 反向飞出。球棒施加的冲量大小是多少？"
      },
      "choices": [
        "$1.5\\,\\text{N·s}$",
        "$6.0\\,\\text{N·s}$",
        "$21\\,\\text{N·s}$",
        "$10.5\\,\\text{N·s}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Taking the outgoing direction as positive, $\\Delta v = 40 - (-30) = 70\\,\\text{m/s}$, so $J = m\\,\\Delta v = (0.15)(70) = 10.5\\,\\text{N·s}$. Using $40 - 30 = 10$ forgets that the ball reverses direction, which should add the speeds.",
        "zh": "取飞出方向为正，$\\Delta v = 40 - (-30) = 70\\,\\text{m/s}$，所以 $J = m\\,\\Delta v = (0.15)(70) = 10.5\\,\\text{N·s}$。用 $40 - 30 = 10$ 忽略了球反向，本应把两个速率相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $3\\,\\text{kg}$ object moves at $5\\,\\text{m/s}$. What is its momentum in $\\text{kg·m/s}$?",
        "zh": "一个 $3\\,\\text{kg}$ 的物体以 $5\\,\\text{m/s}$ 运动。它的动量是多少 $\\text{kg·m/s}$？"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "15 kg·m/s",
        "15 kg m/s",
        "+15"
      ],
      "explanation": {
        "en": "$p = mv = (3)(5) = 15\\,\\text{kg·m/s}$.",
        "zh": "$p = mv = (3)(5) = 15\\,\\text{kg·m/s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force of $20\\,\\text{N}$ acts for $0.5\\,\\text{s}$. What impulse does it deliver, in $\\text{N·s}$?",
        "zh": "一个 $20\\,\\text{N}$ 的力作用 $0.5\\,\\text{s}$。它施加的冲量是多少 $\\text{N·s}$？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "10 N·s",
        "10 Ns",
        "+10",
        "10 kg·m/s"
      ],
      "explanation": {
        "en": "$J = F\\,\\Delta t = (20)(0.5) = 10\\,\\text{N·s}$.",
        "zh": "$J = F\\,\\Delta t = (20)(0.5) = 10\\,\\text{N·s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.2\\,\\text{kg}$ ball speeds up from $2\\,\\text{m/s}$ to $6\\,\\text{m/s}$ in the same direction. What is the impulse on it, in $\\text{N·s}$?",
        "zh": "一个 $0.2\\,\\text{kg}$ 的球沿同一方向从 $2\\,\\text{m/s}$ 加速到 $6\\,\\text{m/s}$。作用在它上面的冲量是多少 $\\text{N·s}$？"
      },
      "answer": "0.8",
      "accept": [
        "0.80",
        ".8",
        "0.8 N·s",
        "0.8 kg·m/s",
        "+0.8"
      ],
      "explanation": {
        "en": "$J = m\\,\\Delta v = (0.2)(6 - 2) = (0.2)(4) = 0.8\\,\\text{N·s}$.",
        "zh": "$J = m\\,\\Delta v = (0.2)(6 - 2) = (0.2)(4) = 0.8\\,\\text{N·s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An impulse of $12\\,\\text{N·s}$ is applied to a $4\\,\\text{kg}$ object initially at rest. What is its final speed, in $\\text{m/s}$?",
        "zh": "对一个初始静止的 $4\\,\\text{kg}$ 物体施加 $12\\,\\text{N·s}$ 的冲量。它的末速度是多少 $\\text{m/s}$？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 m/s",
        "+3"
      ],
      "explanation": {
        "en": "$J = m\\,\\Delta v$, so $\\Delta v = J/m = 12/4 = 3\\,\\text{m/s}$. Starting from rest, the final speed is $3\\,\\text{m/s}$.",
        "zh": "$J = m\\,\\Delta v$，所以 $\\Delta v = J/m = 12/4 = 3\\,\\text{m/s}$。从静止开始，末速度为 $3\\,\\text{m/s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $1000\\,\\text{kg}$ car slows from $20\\,\\text{m/s}$ to $12\\,\\text{m/s}$. What is the magnitude of the change in momentum, in $\\text{kg·m/s}$?",
        "zh": "一辆 $1000\\,\\text{kg}$ 的汽车从 $20\\,\\text{m/s}$ 减速到 $12\\,\\text{m/s}$。动量变化的大小是多少 $\\text{kg·m/s}$？"
      },
      "answer": "8000",
      "accept": [
        "8000.0",
        "8.0e3",
        "8e3",
        "8000 kg·m/s",
        "-8000",
        "8 x 10^3"
      ],
      "explanation": {
        "en": "$|\\Delta p| = m|\\Delta v| = 1000 \\times (20 - 12) = 1000 \\times 8 = 8000\\,\\text{kg·m/s}$.",
        "zh": "$|\\Delta p| = m|\\Delta v| = 1000 \\times (20 - 12) = 1000 \\times 8 = 8000\\,\\text{kg·m/s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.06\\,\\text{kg}$ tennis ball is stopped from $25\\,\\text{m/s}$ over a contact time of $0.03\\,\\text{s}$. What is the average force on it, in $\\text{N}$?",
        "zh": "一个 $0.06\\,\\text{kg}$ 的网球从 $25\\,\\text{m/s}$ 在 $0.03\\,\\text{s}$ 的接触时间内停下。作用在它上面的平均力是多少 $\\text{N}$？"
      },
      "answer": "50",
      "accept": [
        "50.0",
        "50 N",
        "+50"
      ],
      "explanation": {
        "en": "$\\Delta p = m\\,\\Delta v = (0.06)(25) = 1.5\\,\\text{N·s}$; then $F_{avg} = \\Delta p / \\Delta t = 1.5/0.03 = 50\\,\\text{N}$.",
        "zh": "$\\Delta p = m\\,\\Delta v = (0.06)(25) = 1.5\\,\\text{N·s}$；再由 $F_{avg} = \\Delta p / \\Delta t = 1.5/0.03 = 50\\,\\text{N}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $2\\,\\text{kg}$ ball moving right at $3\\,\\text{m/s}$ bounces straight back at $3\\,\\text{m/s}$. What is the magnitude of the impulse on it, in $\\text{N·s}$?",
        "zh": "一个 $2\\,\\text{kg}$ 的球以 $3\\,\\text{m/s}$ 向右运动后以 $3\\,\\text{m/s}$ 原路反弹。作用在它上面的冲量大小是多少 $\\text{N·s}$？"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "12 N·s",
        "12 kg·m/s",
        "+12"
      ],
      "explanation": {
        "en": "The velocity reverses, so $\\Delta v = 3 - (-3) = 6\\,\\text{m/s}$ and $J = m\\,\\Delta v = (2)(6) = 12\\,\\text{N·s}$. Using $3 - 3 = 0$ would ignore the reversal of direction.",
        "zh": "速度反向，所以 $\\Delta v = 3 - (-3) = 6\\,\\text{m/s}$，$J = m\\,\\Delta v = (2)(6) = 12\\,\\text{N·s}$。用 $3 - 3 = 0$ 会忽略方向的反转。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The area under a force-time graph is a rectangle of height $8\\,\\text{N}$ and width $2\\,\\text{s}$. What impulse does it represent, in $\\text{N·s}$?",
        "zh": "力-时间图下方是一个高 $8\\,\\text{N}$、宽 $2\\,\\text{s}$ 的矩形。它代表的冲量是多少 $\\text{N·s}$？"
      },
      "answer": "16",
      "accept": [
        "16.0",
        "16 N·s",
        "16 kg·m/s",
        "+16"
      ],
      "explanation": {
        "en": "Impulse equals the area under the force-time graph: $8 \\times 2 = 16\\,\\text{N·s}$.",
        "zh": "冲量等于力-时间图下方的面积：$8 \\times 2 = 16\\,\\text{N·s}$。"
      }
    }
  ],
  "linear-momentum/collisions-and-center-of-mass": [
    {
      "type": "mc",
      "question": {
        "en": "In an isolated system with no external forces, which quantity is always conserved in any collision?",
        "zh": "在没有外力的孤立系统中，任何碰撞中总是守恒的量是哪个？"
      },
      "choices": [
        "Total momentum",
        "Total kinetic energy",
        "The speed of each object",
        "The velocity of the center of mass relative to the ground only for elastic hits"
      ],
      "answer": 0,
      "explanation": {
        "en": "Total momentum is conserved in every collision when no external force acts, regardless of type. Total kinetic energy is conserved only in elastic collisions, so it is not the always-conserved quantity.",
        "zh": "只要没有外力作用，任何类型的碰撞中总动量都守恒。总动能只在弹性碰撞中守恒，因此它不是始终守恒的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What distinguishes an elastic collision from an inelastic one?",
        "zh": "弹性碰撞与非弹性碰撞的区别是什么？"
      },
      "choices": [
        "Momentum is conserved only in elastic collisions",
        "Kinetic energy is conserved in elastic collisions but not in inelastic ones",
        "The objects always stick together in elastic collisions",
        "Only inelastic collisions conserve momentum"
      ],
      "answer": 1,
      "explanation": {
        "en": "Both types conserve momentum; the difference is that elastic collisions also conserve total kinetic energy while inelastic ones do not. Sticking together describes the perfectly inelastic case, not elastic.",
        "zh": "两种碰撞都守恒动量；区别在于弹性碰撞还守恒总动能，而非弹性碰撞不守恒。粘在一起描述的是完全非弹性碰撞，而非弹性碰撞。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2\\,\\text{kg}$ cart at $3\\,\\text{m/s}$ collides and sticks to a $1\\,\\text{kg}$ cart at rest. What is their common velocity afterward?",
        "zh": "一辆 $2\\,\\text{kg}$ 的小车以 $3\\,\\text{m/s}$ 撞上并粘住一辆静止的 $1\\,\\text{kg}$ 小车。它们之后的共同速度是多少？"
      },
      "choices": [
        "$3\\,\\text{m/s}$",
        "$1.5\\,\\text{m/s}$",
        "$2\\,\\text{m/s}$",
        "$6\\,\\text{m/s}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Momentum conservation: $(2)(3) = (2+1)v$, so $v = 6/3 = 2\\,\\text{m/s}$. Keeping the original $3\\,\\text{m/s}$ ignores that the moving mass now drags along extra mass.",
        "zh": "动量守恒：$(2)(3) = (2+1)v$，所以 $v = 6/3 = 2\\,\\text{m/s}$。保持原来的 $3\\,\\text{m/s}$ 忽略了运动的质量现在还要带动额外的质量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which type of collision loses the maximum possible kinetic energy while still conserving momentum?",
        "zh": "哪种碰撞在仍守恒动量的同时损失最大可能的动能？"
      },
      "choices": [
        "Elastic",
        "Frictionless",
        "Explosive",
        "Perfectly inelastic"
      ],
      "answer": 3,
      "explanation": {
        "en": "A perfectly inelastic collision, where the objects stick and move together, dissipates the largest amount of kinetic energy consistent with momentum conservation. An elastic collision, by contrast, loses none.",
        "zh": "完全非弹性碰撞中物体粘在一起共同运动，在动量守恒的前提下损失的动能最大。相反，弹性碰撞不损失动能。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The center of mass of two particles lies closer to which one?",
        "zh": "两个粒子的质心更靠近哪一个？"
      },
      "choices": [
        "The more massive particle",
        "The lighter particle",
        "The faster particle",
        "Always exactly halfway between them"
      ],
      "answer": 0,
      "explanation": {
        "en": "The center of mass is a mass-weighted average position, so it sits closer to the more massive particle. It is halfway between only when the two masses are equal.",
        "zh": "质心是按质量加权的平均位置，因此更靠近质量较大的粒子。只有当两质量相等时它才恰好位于中点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $1\\,\\text{kg}$ mass sits at $x = 0$ and a $3\\,\\text{kg}$ mass at $x = 4\\,\\text{m}$. Where is the center of mass?",
        "zh": "一个 $1\\,\\text{kg}$ 的质量位于 $x = 0$，一个 $3\\,\\text{kg}$ 的质量位于 $x = 4\\,\\text{m}$。质心在哪里？"
      },
      "choices": [
        "$x = 1\\,\\text{m}$",
        "$x = 3\\,\\text{m}$",
        "$x = 2\\,\\text{m}$",
        "$x = 4\\,\\text{m}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$x_{cm} = \\frac{(1)(0)+(3)(4)}{1+3} = \\frac{12}{4} = 3\\,\\text{m}$. The midpoint value of $2\\,\\text{m}$ would apply only if the masses were equal; here the heavier mass pulls it toward $x=4$.",
        "zh": "$x_{cm} = \\frac{(1)(0)+(3)(4)}{1+3} = \\frac{12}{4} = 3\\,\\text{m}$。中点值 $2\\,\\text{m}$ 只在两质量相等时成立；这里较重的质量把质心拉向 $x=4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cannon at rest fires a shell forward. What happens to the center of mass of the cannon-shell system (ignoring gravity and friction)?",
        "zh": "一门静止的大炮向前发射炮弹。炮-弹系统的质心会怎样（忽略重力和摩擦）？"
      },
      "choices": [
        "It moves forward with the shell",
        "It moves backward with the cannon",
        "It stays at rest",
        "It accelerates forward"
      ],
      "answer": 2,
      "explanation": {
        "en": "With no external force, the system's total momentum stays zero, so the center of mass remains at rest even as the two pieces move apart. The forward-moving shell is balanced by the recoiling cannon.",
        "zh": "没有外力时，系统总动量保持为零，因此即使两部分分开，质心仍保持静止。向前运动的炮弹被后坐的大炮所平衡。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two equal-mass carts approach each other at equal speeds on a frictionless track and stick together. What is their final speed?",
        "zh": "两辆质量相等的小车在无摩擦轨道上以相等速率相向而行并粘在一起。它们的末速率是多少？"
      },
      "choices": [
        "Twice the original speed",
        "The original speed",
        "Half the original speed",
        "Zero"
      ],
      "answer": 3,
      "explanation": {
        "en": "The two momenta are equal in size but opposite in direction, so they sum to zero; conservation then gives a final velocity of zero. This is inelastic, so kinetic energy is not conserved and the carts stop.",
        "zh": "两个动量大小相等、方向相反，因此相加为零；由守恒可得末速度为零。这是非弹性碰撞，动能不守恒，小车停下。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $4\\,\\text{kg}$ object at $6\\,\\text{m/s}$ collides head-on and sticks to a $2\\,\\text{kg}$ object moving toward it at $3\\,\\text{m/s}$. What is their common velocity (take the $4\\,\\text{kg}$ direction as positive)?",
        "zh": "一个 $4\\,\\text{kg}$ 的物体以 $6\\,\\text{m/s}$ 正面撞上并粘住一个以 $3\\,\\text{m/s}$ 迎面运动的 $2\\,\\text{kg}$ 物体。它们的共同速度是多少（取 $4\\,\\text{kg}$ 的方向为正）？"
      },
      "choices": [
        "$+1\\,\\text{m/s}$",
        "$+3\\,\\text{m/s}$",
        "$+4.5\\,\\text{m/s}$",
        "$+9\\,\\text{m/s}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$(4)(6) + (2)(-3) = 24 - 6 = 18 = (6)v$, so $v = 3\\,\\text{m/s}$. Adding both momenta as positive gives $30/6 = 5$, but the second object moves the opposite way and must be subtracted.",
        "zh": "$(4)(6) + (2)(-3) = 24 - 6 = 18 = (6)v$，所以 $v = 3\\,\\text{m/s}$。把两个动量都当作正相加得 $30/6 = 5$，但第二个物体方向相反，必须相减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a perfectly elastic head-on collision between two equal masses where one is initially at rest, what happens?",
        "zh": "两个相等质量之间的完全弹性正面碰撞中，其中一个初始静止，会发生什么？"
      },
      "choices": [
        "They stick together and move off",
        "The moving one stops and the other moves off at the incoming speed",
        "Both bounce back at the incoming speed",
        "The moving one keeps its speed and the other stays at rest"
      ],
      "answer": 1,
      "explanation": {
        "en": "For equal masses in an elastic collision, the velocities are exchanged: the incoming object stops and the target leaves with the original speed. Sticking together would describe an inelastic collision, which does not conserve kinetic energy.",
        "zh": "对于弹性碰撞中的相等质量，速度会交换：入射物体停下，被撞物体以原速率离开。粘在一起描述的是非弹性碰撞，它不守恒动能。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A system of particles has no net external force. What can be said about the velocity of its center of mass?",
        "zh": "一个粒子系统没有净外力。关于它质心的速度可以得出什么结论？"
      },
      "choices": [
        "It is always zero",
        "It increases with time",
        "It remains constant",
        "It depends on internal collisions"
      ],
      "answer": 2,
      "explanation": {
        "en": "With zero net external force, the total momentum is constant, so the center-of-mass velocity stays constant (which may be zero or nonzero). Internal collisions cannot change it because internal forces cancel in pairs.",
        "zh": "净外力为零时总动量恒定，因此质心速度保持不变（可以是零也可以非零）。内部碰撞无法改变它，因为内力成对抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $0.5\\,\\text{kg}$ ball at $4\\,\\text{m/s}$ hits a wall and rebounds elastically at $4\\,\\text{m/s}$. Is total kinetic energy of the ball conserved, and is the ball's momentum conserved?",
        "zh": "一个 $0.5\\,\\text{kg}$ 的球以 $4\\,\\text{m/s}$ 撞墙并弹性反弹，速率仍为 $4\\,\\text{m/s}$。球的总动能守恒吗？球的动量守恒吗？"
      },
      "choices": [
        "Both are conserved",
        "Neither is conserved",
        "Momentum is conserved; kinetic energy changes",
        "Kinetic energy is conserved; the ball's momentum changes"
      ],
      "answer": 3,
      "explanation": {
        "en": "The speed is unchanged so the ball's kinetic energy is the same, but its velocity reverses direction, so the ball's momentum changes (the wall and Earth absorb that change). Treating the ball alone as a closed system for momentum ignores the external force from the wall.",
        "zh": "速率不变，故球的动能相同，但速度反向，因此球的动量改变（墙和地球吸收了该变化）。把球单独视为动量封闭系统忽略了墙施加的外力。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $3\\,\\text{kg}$ cart at $4\\,\\text{m/s}$ sticks to a $1\\,\\text{kg}$ cart at rest. What is their common speed afterward, in $\\text{m/s}$?",
        "zh": "一辆 $3\\,\\text{kg}$ 的小车以 $4\\,\\text{m/s}$ 粘住一辆静止的 $1\\,\\text{kg}$ 小车。它们之后的共同速率是多少 $\\text{m/s}$？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 m/s",
        "+3"
      ],
      "explanation": {
        "en": "$(3)(4) = (3+1)v$, so $v = 12/4 = 3\\,\\text{m/s}$.",
        "zh": "$(3)(4) = (3+1)v$，所以 $v = 12/4 = 3\\,\\text{m/s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $2\\,\\text{kg}$ mass is at $x = 0$ and a $2\\,\\text{kg}$ mass is at $x = 6\\,\\text{m}$. Where is the center of mass, in meters?",
        "zh": "一个 $2\\,\\text{kg}$ 的质量位于 $x = 0$，另一个 $2\\,\\text{kg}$ 的质量位于 $x = 6\\,\\text{m}$。质心在何处（单位米）？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3 m",
        "x=3",
        "+3"
      ],
      "explanation": {
        "en": "With equal masses the center of mass is at the midpoint: $x_{cm} = \\frac{(2)(0)+(2)(6)}{4} = 3\\,\\text{m}$.",
        "zh": "质量相等时质心在中点：$x_{cm} = \\frac{(2)(0)+(2)(6)}{4} = 3\\,\\text{m}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $2\\,\\text{kg}$ mass at $x = 0$ and a $6\\,\\text{kg}$ mass at $x = 8\\,\\text{m}$. What is the center of mass position, in meters?",
        "zh": "一个 $2\\,\\text{kg}$ 的质量位于 $x = 0$，一个 $6\\,\\text{kg}$ 的质量位于 $x = 8\\,\\text{m}$。质心位置是多少（单位米）？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 m",
        "x=6",
        "+6"
      ],
      "explanation": {
        "en": "$x_{cm} = \\frac{(2)(0)+(6)(8)}{2+6} = \\frac{48}{8} = 6\\,\\text{m}$, pulled toward the heavier mass.",
        "zh": "$x_{cm} = \\frac{(2)(0)+(6)(8)}{2+6} = \\frac{48}{8} = 6\\,\\text{m}$，偏向较重的质量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $5\\,\\text{kg}$ object at $2\\,\\text{m/s}$ collides and sticks to a $5\\,\\text{kg}$ object moving the opposite way at $2\\,\\text{m/s}$. What is their common speed afterward, in $\\text{m/s}$?",
        "zh": "一个 $5\\,\\text{kg}$ 的物体以 $2\\,\\text{m/s}$ 与一个以 $2\\,\\text{m/s}$ 反向运动的 $5\\,\\text{kg}$ 物体碰撞并粘在一起。它们之后的共同速率是多少 $\\text{m/s}$？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "0 m/s",
        "zero"
      ],
      "explanation": {
        "en": "The momenta $(5)(2)$ and $(5)(-2)$ cancel, giving total momentum zero, so the stuck pair is at rest: $v = 0$.",
        "zh": "动量 $(5)(2)$ 与 $(5)(-2)$ 相互抵消，总动量为零，所以粘在一起后静止：$v = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $1500\\,\\text{kg}$ car at $10\\,\\text{m/s}$ rear-ends and sticks to a $1000\\,\\text{kg}$ car at rest. What is their common speed, in $\\text{m/s}$? Round to two decimals.",
        "zh": "一辆 $1500\\,\\text{kg}$ 的汽车以 $10\\,\\text{m/s}$ 追尾并粘住一辆静止的 $1000\\,\\text{kg}$ 汽车。它们的共同速率是多少 $\\text{m/s}$？保留两位小数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6.00",
        "6 m/s",
        "+6"
      ],
      "explanation": {
        "en": "$(1500)(10) = (1500+1000)v$, so $v = 15000/2500 = 6\\,\\text{m/s}$.",
        "zh": "$(1500)(10) = (1500+1000)v$，所以 $v = 15000/2500 = 6\\,\\text{m/s}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $60\\,\\text{kg}$ skater at rest pushes off a $40\\,\\text{kg}$ skater, sending the $40\\,\\text{kg}$ skater at $3\\,\\text{m/s}$. What is the recoil speed of the $60\\,\\text{kg}$ skater, in $\\text{m/s}$?",
        "zh": "一个 $60\\,\\text{kg}$ 的静止滑冰者推开一个 $40\\,\\text{kg}$ 的滑冰者，使 $40\\,\\text{kg}$ 者以 $3\\,\\text{m/s}$ 运动。$60\\,\\text{kg}$ 者的反冲速率是多少 $\\text{m/s}$？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2 m/s",
        "+2"
      ],
      "explanation": {
        "en": "Total momentum stays zero: $(60)v = (40)(3)$, so $v = 120/60 = 2\\,\\text{m/s}$ in the opposite direction.",
        "zh": "总动量保持为零：$(60)v = (40)(3)$，所以 $v = 120/60 = 2\\,\\text{m/s}$，方向相反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In an elastic head-on collision, a $2\\,\\text{kg}$ ball at $4\\,\\text{m/s}$ hits an identical $2\\,\\text{kg}$ ball at rest. What is the speed of the initially moving ball right after, in $\\text{m/s}$?",
        "zh": "在一次弹性正面碰撞中，一个 $2\\,\\text{kg}$ 的球以 $4\\,\\text{m/s}$ 撞上一个静止的相同 $2\\,\\text{kg}$ 的球。碰撞后原本运动的球速率是多少 $\\text{m/s}$？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "0 m/s",
        "zero"
      ],
      "explanation": {
        "en": "Equal masses in an elastic collision exchange velocities, so the incoming ball stops ($v = 0$) and the other moves off at $4\\,\\text{m/s}$.",
        "zh": "弹性碰撞中相等质量交换速度，因此入射球停下（$v = 0$），另一个球以 $4\\,\\text{m/s}$ 离开。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $0.02\\,\\text{kg}$ bullet at $400\\,\\text{m/s}$ embeds into a $1.98\\,\\text{kg}$ block at rest. What is the speed of the block-bullet system afterward, in $\\text{m/s}$?",
        "zh": "一颗 $0.02\\,\\text{kg}$ 的子弹以 $400\\,\\text{m/s}$ 嵌入一个静止的 $1.98\\,\\text{kg}$ 木块。之后木块-子弹系统的速率是多少 $\\text{m/s}$？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 m/s",
        "+4"
      ],
      "explanation": {
        "en": "$(0.02)(400) = (0.02 + 1.98)v$, so $v = 8/2 = 4\\,\\text{m/s}$. This is a perfectly inelastic collision, so kinetic energy is lost while momentum is conserved.",
        "zh": "$(0.02)(400) = (0.02 + 1.98)v$，所以 $v = 8/2 = 4\\,\\text{m/s}$。这是完全非弹性碰撞，动能损失但动量守恒。"
      }
    }
  ],
  "torque-rotational-dynamics/rotational-kinematics-torque": [
    {
      "type": "mc",
      "question": {
        "en": "A wheel rotates through exactly 2 complete revolutions. What is the angular displacement in radians?",
        "zh": "一个轮子恰好转过 2 整圈。以弧度表示的角位移是多少？"
      },
      "choices": [
        "$4\\pi$ rad ($\\approx 12.6$ rad)",
        "$2\\pi$ rad ($\\approx 6.28$ rad)",
        "$\\pi$ rad ($\\approx 3.14$ rad)",
        "$720$ rad"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each revolution equals $2\\pi$ rad, so 2 revolutions give $2 \\times 2\\pi = 4\\pi \\approx 12.6$ rad. A common mistake is to keep the '720' from degrees ($2 \\times 360^{\\circ}$) instead of converting to radians.",
        "zh": "每圈等于 $2\\pi$ 弧度，所以 2 圈为 $2 \\times 2\\pi = 4\\pi \\approx 12.6$ 弧度。常见错误是保留度数的 720（$2 \\times 360^{\\circ}$）而没有换算成弧度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A turntable spins at a constant rate and completes one full rotation every 4.0 s. What is its angular velocity?",
        "zh": "一个转盘以恒定速率旋转，每 4.0 秒完成一整圈。它的角速度是多少？"
      },
      "choices": [
        "$0.79$ rad/s",
        "$1.57$ rad/s",
        "$6.28$ rad/s",
        "$4.0$ rad/s"
      ],
      "answer": 1,
      "explanation": {
        "en": "Angular velocity is $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4.0} \\approx 1.57$ rad/s. A common error is to use $\\omega = \\frac{\\pi}{T}$ (giving 0.79) by forgetting that one revolution is $2\\pi$, not $\\pi$, radians.",
        "zh": "角速度为 $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4.0} \\approx 1.57$ 弧度/秒。常见错误是用 $\\omega = \\frac{\\pi}{T}$（得到 0.79），忘记一整圈是 $2\\pi$ 而不是 $\\pi$ 弧度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A point on a rotating disk is 0.50 m from the axis. If the disk rotates at $\\omega = 10$ rad/s, what is the tangential (linear) speed of that point?",
        "zh": "旋转圆盘上某点距轴 0.50 m。若圆盘以 $\\omega = 10$ rad/s 旋转，该点的切向（线）速度是多少？"
      },
      "choices": [
        "$2.5$ m/s",
        "$20$ m/s",
        "$5.0$ m/s",
        "$0.50$ m/s"
      ],
      "answer": 2,
      "explanation": {
        "en": "Use $v = r\\omega = 0.50 \\times 10 = 5.0$ m/s. A common mistake is dividing instead of multiplying ($\\omega / r = 20$) or forgetting the radius entirely.",
        "zh": "使用 $v = r\\omega = 0.50 \\times 10 = 5.0$ m/s。常见错误是用除法而不是乘法（$\\omega / r = 20$）或完全忽略半径。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A force of 10 N is applied at a distance of 2.0 m from a pivot, at an angle of $30^{\\circ}$ to the position vector. What is the magnitude of the torque?",
        "zh": "在距支点 2.0 m 处施加 10 N 的力，力与位置矢量成 $30^{\\circ}$ 角。力矩的大小是多少？"
      },
      "choices": [
        "$20$ N$\\cdot$m",
        "$17$ N$\\cdot$m",
        "$5.0$ N$\\cdot$m",
        "$10$ N$\\cdot$m"
      ],
      "answer": 3,
      "explanation": {
        "en": "Torque is $\\tau = rF\\sin\\theta = 2.0 \\times 10 \\times \\sin 30^{\\circ} = 2.0 \\times 10 \\times 0.5 = 10$ N$\\cdot$m. A common error is using $rF$ with no angle factor (giving 20), which assumes the force is perpendicular.",
        "zh": "力矩为 $\\tau = rF\\sin\\theta = 2.0 \\times 10 \\times \\sin 30^{\\circ} = 2.0 \\times 10 \\times 0.5 = 10$ N$\\cdot$m。常见错误是用 $rF$ 而不乘角度因子（得到 20），那是假设力垂直。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A fan's angular velocity increases uniformly from 4.0 rad/s to 20 rad/s in 4.0 s. What is its angular acceleration?",
        "zh": "风扇的角速度在 4.0 s 内从 4.0 rad/s 均匀增加到 20 rad/s。它的角加速度是多少？"
      },
      "choices": [
        "$4.0$ rad/s$^2$",
        "$16$ rad/s$^2$",
        "$5.0$ rad/s$^2$",
        "$24$ rad/s$^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Angular acceleration is $\\alpha = \\frac{\\Delta\\omega}{\\Delta t} = \\frac{20 - 4.0}{4.0} = 4.0$ rad/s$^2$. A common mistake is using only the final value ($20/4.0 = 5.0$) instead of the change in angular velocity.",
        "zh": "角加速度为 $\\alpha = \\frac{\\Delta\\omega}{\\Delta t} = \\frac{20 - 4.0}{4.0} = 4.0$ rad/s$^2$。常见错误是只用末值（$20/4.0 = 5.0$）而不是角速度的变化量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You push on a door with a fixed force. To produce the largest torque about the hinges, at what angle should the force be applied relative to the door surface?",
        "zh": "用固定大小的力推门。要产生绕铰链的最大力矩，力相对于门面应以什么角度施加？"
      },
      "choices": [
        "$0^{\\circ}$ (along the door)",
        "$90^{\\circ}$ (perpendicular to the door)",
        "$45^{\\circ}$ to the door",
        "$30^{\\circ}$ to the door"
      ],
      "answer": 1,
      "explanation": {
        "en": "Torque is $\\tau = rF\\sin\\theta$, which is maximized when $\\sin\\theta = 1$, i.e. the force is perpendicular to the door so the full lever arm is used. Pushing along the door ($0^{\\circ}$) gives zero torque because the line of action passes through the hinge.",
        "zh": "力矩为 $\\tau = rF\\sin\\theta$，当 $\\sin\\theta = 1$ 即力垂直于门时最大，此时用到完整的力臂。沿门方向推（$0^{\\circ}$）力矩为零，因为作用线通过铰链。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is the correct SI unit for angular acceleration?",
        "zh": "下列哪个是角加速度的正确 SI 单位？"
      },
      "choices": [
        "rad/s",
        "m/s$^2$",
        "rad/s$^2$",
        "rev/min"
      ],
      "answer": 2,
      "explanation": {
        "en": "Angular acceleration is the rate of change of angular velocity (rad/s) per second, giving rad/s$^2$. Choosing rad/s confuses angular acceleration with angular velocity, and m/s$^2$ is the unit of linear (tangential) acceleration.",
        "zh": "角加速度是角速度（rad/s）每秒的变化率，得到 rad/s$^2$。选 rad/s 是把角加速度和角速度混淆，而 m/s$^2$ 是线（切向）加速度的单位。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A grinding wheel starts from rest and accelerates at $\\alpha = 2.0$ rad/s$^2$ for 3.0 s. Through what angle does it rotate?",
        "zh": "一个砂轮从静止开始以 $\\alpha = 2.0$ rad/s$^2$ 加速 3.0 s。它转过多大的角度？"
      },
      "choices": [
        "$6.0$ rad",
        "$18$ rad",
        "$3.0$ rad",
        "$9.0$ rad"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $\\omega_0 = 0$, use $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(2.0)(3.0)^2 = 9.0$ rad. A common mistake is using $\\theta = \\alpha t = 6.0$, which omits the factor of $\\frac{1}{2}$ and the squared time.",
        "zh": "由于 $\\omega_0 = 0$，用 $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(2.0)(3.0)^2 = 9.0$ rad。常见错误是用 $\\theta = \\alpha t = 6.0$，漏掉了 $\\frac{1}{2}$ 因子和时间平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spinning platform has an initial angular velocity of 10 rad/s and slows down at a constant angular acceleration of $-2.0$ rad/s$^2$. What is its angular velocity after 3.0 s?",
        "zh": "一个旋转平台初始角速度为 10 rad/s，以恒定角加速度 $-2.0$ rad/s$^2$ 减速。3.0 s 后它的角速度是多少？"
      },
      "choices": [
        "$4.0$ rad/s",
        "$6.0$ rad/s",
        "$16$ rad/s",
        "$0$ rad/s"
      ],
      "answer": 0,
      "explanation": {
        "en": "Use $\\omega = \\omega_0 + \\alpha t = 10 + (-2.0)(3.0) = 4.0$ rad/s. A sign error (adding instead of subtracting) gives 16, and forgetting to multiply $\\alpha$ by $t$ gives 8.",
        "zh": "用 $\\omega = \\omega_0 + \\alpha t = 10 + (-2.0)(3.0) = 4.0$ rad/s。符号错误（加而不是减）得到 16，忘记把 $\\alpha$ 乘以 $t$ 得到 8。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two forces of equal magnitude act on a wrench. Force A acts at 0.10 m from the bolt; force B acts at 0.30 m from the bolt, both perpendicular to the handle. Which produces the greater torque, and by what factor?",
        "zh": "两个大小相等的力作用在扳手上。力 A 作用在距螺栓 0.10 m 处，力 B 作用在距螺栓 0.30 m 处，均垂直于手柄。哪个产生更大的力矩，倍数是多少？"
      },
      "choices": [
        "Force A, by a factor of 3",
        "Force B, by a factor of 3",
        "They are equal",
        "Force B, by a factor of 9"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $\\tau = rF$ with equal $F$, torque is proportional to $r$. Force B has 3 times the lever arm, so it produces 3 times the torque. The factor of 9 wrongly assumes torque depends on $r^2$.",
        "zh": "由于 $\\tau = rF$ 且 $F$ 相等，力矩与 $r$ 成正比。力 B 的力臂是 3 倍，所以产生 3 倍的力矩。倍数 9 错误地假设力矩与 $r^2$ 有关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the standard convention, which rotational direction is typically taken as the positive direction for angular quantities?",
        "zh": "按照标准约定，通常把哪个旋转方向取为角量的正方向？"
      },
      "choices": [
        "Clockwise",
        "The direction of the applied force",
        "Counterclockwise",
        "There is no convention; it is always positive"
      ],
      "answer": 2,
      "explanation": {
        "en": "By the usual right-hand-rule convention, counterclockwise rotation (as viewed) is taken as positive and clockwise as negative. Torque is not simply 'the direction of the force'; its sign depends on which way it tends to rotate the object.",
        "zh": "按照通常的右手定则约定，逆时针旋转（从观察方向看）取为正，顺时针取为负。力矩不是简单的'力的方向'；它的符号取决于它使物体朝哪个方向转动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A force is applied at a point 3.0 m from a pivot, directed at $30^{\\circ}$ from the position vector. What is the lever arm (moment arm) of this force?",
        "zh": "在距支点 3.0 m 处施加一个力，方向与位置矢量成 $30^{\\circ}$。这个力的力臂是多少？"
      },
      "choices": [
        "$6.0$ m",
        "$2.6$ m",
        "$3.0$ m",
        "$1.5$ m"
      ],
      "answer": 3,
      "explanation": {
        "en": "The lever arm is the perpendicular distance $r\\sin\\theta = 3.0 \\times \\sin 30^{\\circ} = 3.0 \\times 0.5 = 1.5$ m. Using $r\\cos\\theta$ (giving about 2.6) mistakenly uses the component of $r$ along the force instead of perpendicular to it.",
        "zh": "力臂是垂直距离 $r\\sin\\theta = 3.0 \\times \\sin 30^{\\circ} = 3.0 \\times 0.5 = 1.5$ m。用 $r\\cos\\theta$（约 2.6）错误地取了 $r$ 沿力方向的分量而不是垂直方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $180^{\\circ}$ to radians. Give your answer as a decimal to two decimal places.",
        "zh": "把 $180^{\\circ}$ 转换为弧度。答案保留两位小数。"
      },
      "answer": "3.14",
      "accept": [
        "3.14",
        "3.1416",
        "3.14159",
        "pi",
        "\\pi",
        "π",
        "$\\pi$",
        "3.142"
      ],
      "explanation": {
        "en": "Multiply degrees by $\\frac{\\pi}{180}$: $180 \\times \\frac{\\pi}{180} = \\pi \\approx 3.14$ rad. A common mistake is multiplying by $\\frac{180}{\\pi}$, which converts the wrong direction.",
        "zh": "度数乘以 $\\frac{\\pi}{180}$：$180 \\times \\frac{\\pi}{180} = \\pi \\approx 3.14$ 弧度。常见错误是乘以 $\\frac{180}{\\pi}$，那是反向转换。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point is 0.25 m from the rotation axis of a disk turning at 8.0 rad/s. What is the tangential speed of the point, in m/s?",
        "zh": "圆盘以 8.0 rad/s 转动，某点距转轴 0.25 m。该点的切向速度是多少（m/s）？"
      },
      "answer": "2.0",
      "accept": [
        "2.0",
        "2",
        "2.00",
        "2 m/s",
        "2.0 m/s"
      ],
      "explanation": {
        "en": "Use $v = r\\omega = 0.25 \\times 8.0 = 2.0$ m/s. Forgetting to multiply by the radius, or dividing by it, gives incorrect values.",
        "zh": "用 $v = r\\omega = 0.25 \\times 8.0 = 2.0$ m/s。忘记乘半径或用除法都会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wheel starting from rest reaches an angular velocity of 10 rad/s after turning through 25 rad. What is its constant angular acceleration, in rad/s$^2$?",
        "zh": "一个轮子从静止开始，转过 25 rad 后达到角速度 10 rad/s。它的恒定角加速度是多少（rad/s$^2$）？"
      },
      "answer": "2.0",
      "accept": [
        "2.0",
        "2",
        "2.00",
        "2 rad/s^2",
        "2.0 rad/s^2"
      ],
      "explanation": {
        "en": "Use $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$: $10^2 = 0 + 2\\alpha(25)$, so $\\alpha = \\frac{100}{50} = 2.0$ rad/s$^2$. Forgetting to square the angular velocity, or omitting the factor of 2, gives the wrong answer.",
        "zh": "用 $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$：$10^2 = 0 + 2\\alpha(25)$，所以 $\\alpha = \\frac{100}{50} = 2.0$ rad/s$^2$。忘记对角速度平方或漏掉因子 2 会得到错误答案。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force of 50 N is applied perpendicular to a lever at a distance of 0.40 m from the pivot. What is the torque, in N$\\cdot$m?",
        "zh": "在距支点 0.40 m 处垂直于杠杆施加 50 N 的力。力矩是多少（N$\\cdot$m）？"
      },
      "answer": "20",
      "accept": [
        "20",
        "20.0",
        "20 N·m",
        "20 Nm",
        "20 N-m",
        "20.0 N·m"
      ],
      "explanation": {
        "en": "For a perpendicular force, $\\tau = rF = 0.40 \\times 50 = 20$ N$\\cdot$m. Adding the values instead of multiplying, or dropping the radius, gives incorrect torque.",
        "zh": "对于垂直力，$\\tau = rF = 0.40 \\times 50 = 20$ N$\\cdot$m。把数值相加而不是相乘，或漏掉半径，会得到错误的力矩。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many radians are in 5.0 complete revolutions? Give your answer to one decimal place.",
        "zh": "5.0 整圈是多少弧度？答案保留一位小数。"
      },
      "answer": "31.4",
      "accept": [
        "31.4",
        "31.42",
        "31.416",
        "10pi",
        "10\\pi",
        "10π",
        "31.4 rad",
        "31.416"
      ],
      "explanation": {
        "en": "Each revolution is $2\\pi$ rad, so $5.0 \\times 2\\pi = 10\\pi \\approx 31.4$ rad. Using $\\pi$ per revolution instead of $2\\pi$ gives half the correct value.",
        "zh": "每圈是 $2\\pi$ 弧度，所以 $5.0 \\times 2\\pi = 10\\pi \\approx 31.4$ 弧度。每圈用 $\\pi$ 而不是 $2\\pi$ 会得到一半的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A disk rotates through 30 rad in 6.0 s at a constant rate. What is its average angular velocity, in rad/s?",
        "zh": "圆盘以恒定速率在 6.0 s 内转过 30 rad。它的平均角速度是多少（rad/s）？"
      },
      "answer": "5.0",
      "accept": [
        "5.0",
        "5",
        "5.00",
        "5 rad/s",
        "5.0 rad/s"
      ],
      "explanation": {
        "en": "Average angular velocity is $\\omega = \\frac{\\Delta\\theta}{\\Delta t} = \\frac{30}{6.0} = 5.0$ rad/s. Multiplying instead of dividing (giving 180) is a common setup error.",
        "zh": "平均角速度为 $\\omega = \\frac{\\Delta\\theta}{\\Delta t} = \\frac{30}{6.0} = 5.0$ rad/s。用乘法而不是除法（得到 180）是常见的建立错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point on a rotating object is 0.50 m from the axis, and the object has an angular acceleration of 6.0 rad/s$^2$. What is the tangential (linear) acceleration of that point, in m/s$^2$?",
        "zh": "旋转物体上某点距轴 0.50 m，物体的角加速度为 6.0 rad/s$^2$。该点的切向（线）加速度是多少（m/s$^2$）？"
      },
      "answer": "3.0",
      "accept": [
        "3.0",
        "3",
        "3.00",
        "3 m/s^2",
        "3.0 m/s^2"
      ],
      "explanation": {
        "en": "Tangential acceleration is $a_t = r\\alpha = 0.50 \\times 6.0 = 3.0$ m/s$^2$. Confusing this with centripetal acceleration ($r\\omega^2$) uses the wrong relationship.",
        "zh": "切向加速度为 $a_t = r\\alpha = 0.50 \\times 6.0 = 3.0$ m/s$^2$。把它与向心加速度（$r\\omega^2$）混淆会用错关系式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force of 8.0 N is applied perpendicular to a rod at a point 1.5 m from the pivot. What is the magnitude of the torque, in N$\\cdot$m?",
        "zh": "在距支点 1.5 m 处垂直于杆施加 8.0 N 的力。力矩的大小是多少（N$\\cdot$m）？"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "12 N·m",
        "12 Nm",
        "12 N-m",
        "12.0 N·m"
      ],
      "explanation": {
        "en": "Since the force is perpendicular, $\\tau = rF = 1.5 \\times 8.0 = 12$ N$\\cdot$m. Adding the numbers or applying an unnecessary $\\sin\\theta$ factor less than 1 gives a smaller wrong value.",
        "zh": "由于力垂直，$\\tau = rF = 1.5 \\times 8.0 = 12$ N$\\cdot$m。把数值相加，或多乘一个小于 1 的 $\\sin\\theta$ 因子，会得到偏小的错误值。"
      }
    }
  ],
  "torque-rotational-dynamics/rotational-inertia-dynamics": [
    {
      "type": "mc",
      "question": {
        "en": "A point mass of 2.0 kg is located 3.0 m from a rotation axis. What is its rotational inertia (moment of inertia) about that axis?",
        "zh": "一个 2.0 kg 的质点位于距转轴 3.0 m 处。它绕该轴的转动惯量是多少？"
      },
      "choices": [
        "$18$ kg$\\cdot$m$^2$",
        "$36$ kg$\\cdot$m$^2$",
        "$9.0$ kg$\\cdot$m$^2$",
        "$6.0$ kg$\\cdot$m$^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a point mass, $I = mr^2 = 2.0 \\times (3.0)^2 = 2.0 \\times 9.0 = 18$ kg$\\cdot$m$^2$. A common mistake is using $mr$ without squaring the radius (giving 6.0).",
        "zh": "对于质点，$I = mr^2 = 2.0 \\times (3.0)^2 = 2.0 \\times 9.0 = 18$ kg$\\cdot$m$^2$。常见错误是用 $mr$ 而不对半径平方（得到 6.0）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object with rotational inertia $I = 4.0$ kg$\\cdot$m$^2$ experiences an angular acceleration of $\\alpha = 3.0$ rad/s$^2$. What net torque acts on it?",
        "zh": "一个转动惯量 $I = 4.0$ kg$\\cdot$m$^2$ 的物体经历 $\\alpha = 3.0$ rad/s$^2$ 的角加速度。作用在它上的净力矩是多少？"
      },
      "choices": [
        "$7.0$ N$\\cdot$m",
        "$12$ N$\\cdot$m",
        "$1.3$ N$\\cdot$m",
        "$24$ N$\\cdot$m"
      ],
      "answer": 1,
      "explanation": {
        "en": "Newton's second law for rotation gives $\\tau = I\\alpha = 4.0 \\times 3.0 = 12$ N$\\cdot$m. Adding the values instead of multiplying (giving 7.0) is a common setup error.",
        "zh": "转动的牛顿第二定律给出 $\\tau = I\\alpha = 4.0 \\times 3.0 = 12$ N$\\cdot$m。把数值相加而不是相乘（得到 7.0）是常见的建立错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A net torque of 20 N$\\cdot$m is applied to a wheel with rotational inertia 5.0 kg$\\cdot$m$^2$. What is the resulting angular acceleration?",
        "zh": "对转动惯量为 5.0 kg$\\cdot$m$^2$ 的轮子施加 20 N$\\cdot$m 的净力矩。产生的角加速度是多少？"
      },
      "choices": [
        "$100$ rad/s$^2$",
        "$0.25$ rad/s$^2$",
        "$4.0$ rad/s$^2$",
        "$15$ rad/s$^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rearrange $\\tau = I\\alpha$ to get $\\alpha = \\frac{\\tau}{I} = \\frac{20}{5.0} = 4.0$ rad/s$^2$. Inverting the ratio (giving 0.25) or multiplying $\\tau$ and $I$ (giving 100) are common mistakes.",
        "zh": "把 $\\tau = I\\alpha$ 变形得到 $\\alpha = \\frac{\\tau}{I} = \\frac{20}{5.0} = 4.0$ rad/s$^2$。把比值倒过来（得到 0.25）或把 $\\tau$ 和 $I$ 相乘（得到 100）是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A hoop and a solid disk have the same mass and the same radius, each rotating about its central axis. Which has the greater rotational inertia?",
        "zh": "一个圆环和一个实心圆盘质量相同、半径相同，都绕各自的中心轴旋转。哪个转动惯量更大？"
      },
      "choices": [
        "They are equal",
        "The solid disk",
        "It cannot be determined",
        "The hoop"
      ],
      "answer": 3,
      "explanation": {
        "en": "The hoop has $I = MR^2$ while the disk has $I = \\frac{1}{2}MR^2$. Because the hoop's mass sits entirely at the rim (farthest from the axis), it has the greater rotational inertia. Assuming they are equal ignores how mass distribution matters.",
        "zh": "圆环 $I = MR^2$，而圆盘 $I = \\frac{1}{2}MR^2$。因为圆环的质量全部集中在边缘（离轴最远），它的转动惯量更大。认为二者相等就忽略了质量分布的重要性。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid disk has mass 4.0 kg and radius 2.0 m and rotates about its central axis. What is its rotational inertia? (For a solid disk, $I = \\frac{1}{2}MR^2$.)",
        "zh": "一个实心圆盘质量 4.0 kg、半径 2.0 m，绕中心轴旋转。它的转动惯量是多少？（实心圆盘 $I = \\frac{1}{2}MR^2$。）"
      },
      "choices": [
        "$8.0$ kg$\\cdot$m$^2$",
        "$4.0$ kg$\\cdot$m$^2$",
        "$32$ kg$\\cdot$m$^2$",
        "$16$ kg$\\cdot$m$^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4.0)(2.0)^2 = \\frac{1}{2}(4.0)(4.0) = 8.0$ kg$\\cdot$m$^2$. Forgetting the factor of $\\frac{1}{2}$ (giving 16) is the most common error.",
        "zh": "$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4.0)(2.0)^2 = \\frac{1}{2}(4.0)(4.0) = 8.0$ kg$\\cdot$m$^2$。忘记 $\\frac{1}{2}$ 因子（得到 16）是最常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement best describes what an object's rotational inertia depends on?",
        "zh": "下列哪种说法最好地描述了物体的转动惯量取决于什么？"
      },
      "choices": [
        "Only the total mass of the object",
        "Both the total mass and how that mass is distributed relative to the axis",
        "Only the object's angular speed",
        "Only the radius, and never the mass"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rotational inertia depends on both how much mass there is and how far that mass is from the axis; mass farther out contributes more. It does not depend on the angular speed, which is why spinning faster does not change $I$.",
        "zh": "转动惯量既取决于质量的多少，也取决于质量离轴的远近；离轴越远的质量贡献越大。它不取决于角速度，所以转得更快并不改变 $I$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A single point mass rotates about an axis. If its distance from the axis is doubled while its mass stays the same, its rotational inertia changes by what factor?",
        "zh": "一个质点绕轴旋转。若它到轴的距离加倍而质量不变，它的转动惯量变为原来的几倍？"
      },
      "choices": [
        "It doubles",
        "It is unchanged",
        "It quadruples",
        "It halves"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $I = mr^2$, doubling $r$ multiplies $I$ by $2^2 = 4$. Answering 'doubles' incorrectly assumes $I$ is proportional to $r$ rather than to $r^2$.",
        "zh": "由于 $I = mr^2$，$r$ 加倍使 $I$ 变为 $2^2 = 4$ 倍。答'加倍'错误地假设 $I$ 与 $r$ 成正比而不是与 $r^2$ 成正比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid sphere has mass 5.0 kg and radius 1.0 m and rotates about a diameter. What is its rotational inertia? (For a solid sphere, $I = \\frac{2}{5}MR^2$.)",
        "zh": "一个实心球质量 5.0 kg、半径 1.0 m，绕直径旋转。它的转动惯量是多少？（实心球 $I = \\frac{2}{5}MR^2$。）"
      },
      "choices": [
        "$5.0$ kg$\\cdot$m$^2$",
        "$0.40$ kg$\\cdot$m$^2$",
        "$10$ kg$\\cdot$m$^2$",
        "$2.0$ kg$\\cdot$m$^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$I = \\frac{2}{5}MR^2 = \\frac{2}{5}(5.0)(1.0)^2 = 2.0$ kg$\\cdot$m$^2$. Ignoring the $\\frac{2}{5}$ coefficient (giving 5.0) treats the sphere like a point mass at its full radius.",
        "zh": "$I = \\frac{2}{5}MR^2 = \\frac{2}{5}(5.0)(1.0)^2 = 2.0$ kg$\\cdot$m$^2$。忽略 $\\frac{2}{5}$ 系数（得到 5.0）就把球当作在整个半径处的质点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A uniform rod can be rotated either about an axis through its center or about an axis through one end. About which axis is its rotational inertia greater?",
        "zh": "一根均匀杆可以绕过中心的轴或绕过一端的轴旋转。它绕哪个轴的转动惯量更大？"
      },
      "choices": [
        "About the end",
        "They are equal",
        "It depends on the rod's mass",
        "About the center"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a rod, $I_{center} = \\frac{1}{12}ML^2$ but $I_{end} = \\frac{1}{3}ML^2$, which is larger. Rotating about the end places mass on average farther from the axis, increasing the rotational inertia.",
        "zh": "对于杆，$I_{中心} = \\frac{1}{12}ML^2$，而 $I_{端} = \\frac{1}{3}ML^2$，后者更大。绕端点旋转使质量平均离轴更远，因而转动惯量更大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the SI units of rotational inertia (moment of inertia)?",
        "zh": "转动惯量的 SI 单位是什么？"
      },
      "choices": [
        "N$\\cdot$m",
        "kg$\\cdot$m$^2$",
        "kg$\\cdot$m",
        "kg/m$^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $I = \\sum mr^2$, the units are mass times length squared: kg$\\cdot$m$^2$. The unit N$\\cdot$m is torque, not rotational inertia.",
        "zh": "由于 $I = \\sum mr^2$，单位是质量乘以长度平方：kg$\\cdot$m$^2$。N$\\cdot$m 是力矩的单位，不是转动惯量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A flywheel with rotational inertia 2.0 kg$\\cdot$m$^2$ is acted on by a net torque of 6.0 N$\\cdot$m. What is its angular acceleration?",
        "zh": "一个转动惯量 2.0 kg$\\cdot$m$^2$ 的飞轮受到 6.0 N$\\cdot$m 的净力矩。它的角加速度是多少？"
      },
      "choices": [
        "$12$ rad/s$^2$",
        "$0.33$ rad/s$^2$",
        "$3.0$ rad/s$^2$",
        "$8.0$ rad/s$^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Using $\\alpha = \\frac{\\tau}{I} = \\frac{6.0}{2.0} = 3.0$ rad/s$^2$. Multiplying torque and rotational inertia (giving 12) instead of dividing is a common error.",
        "zh": "用 $\\alpha = \\frac{\\tau}{I} = \\frac{6.0}{2.0} = 3.0$ rad/s$^2$。把力矩和转动惯量相乘（得到 12）而不是相除是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two point masses are attached to a massless rod: 2.0 kg at 1.0 m from the axis and 3.0 kg at 2.0 m from the axis. What is the total rotational inertia about that axis?",
        "zh": "两个质点固定在无质量的杆上：2.0 kg 距轴 1.0 m，3.0 kg 距轴 2.0 m。绕该轴的总转动惯量是多少？"
      },
      "choices": [
        "$7.0$ kg$\\cdot$m$^2$",
        "$10$ kg$\\cdot$m$^2$",
        "$26$ kg$\\cdot$m$^2$",
        "$14$ kg$\\cdot$m$^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Add each point mass's contribution: $I = \\sum mr^2 = 2.0(1.0)^2 + 3.0(2.0)^2 = 2.0 + 12 = 14$ kg$\\cdot$m$^2$. Forgetting to square the distances (giving $2 + 6 = 8$) or adding masses times distances is a common mistake.",
        "zh": "把每个质点的贡献相加：$I = \\sum mr^2 = 2.0(1.0)^2 + 3.0(2.0)^2 = 2.0 + 12 = 14$ kg$\\cdot$m$^2$。忘记对距离平方（得到 $2 + 6 = 8$）或用质量乘距离相加是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point mass of 0.50 kg is located 4.0 m from a rotation axis. What is its rotational inertia, in kg$\\cdot$m$^2$?",
        "zh": "一个 0.50 kg 的质点距转轴 4.0 m。它的转动惯量是多少（kg$\\cdot$m$^2$）？"
      },
      "answer": "8.0",
      "accept": [
        "8.0",
        "8",
        "8.00",
        "8 kg·m^2",
        "8.0 kg·m^2",
        "8 kg m^2"
      ],
      "explanation": {
        "en": "For a point mass, $I = mr^2 = 0.50 \\times (4.0)^2 = 0.50 \\times 16 = 8.0$ kg$\\cdot$m$^2$. Forgetting to square the radius gives $0.50 \\times 4.0 = 2.0$, which is wrong.",
        "zh": "对于质点，$I = mr^2 = 0.50 \\times (4.0)^2 = 0.50 \\times 16 = 8.0$ kg$\\cdot$m$^2$。忘记对半径平方会得到 $0.50 \\times 4.0 = 2.0$，那是错的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net torque of 30 N$\\cdot$m acts on an object with rotational inertia 6.0 kg$\\cdot$m$^2$. What is its angular acceleration, in rad/s$^2$?",
        "zh": "30 N$\\cdot$m 的净力矩作用在转动惯量为 6.0 kg$\\cdot$m$^2$ 的物体上。它的角加速度是多少（rad/s$^2$）？"
      },
      "answer": "5.0",
      "accept": [
        "5.0",
        "5",
        "5.00",
        "5 rad/s^2",
        "5.0 rad/s^2"
      ],
      "explanation": {
        "en": "From $\\tau = I\\alpha$, $\\alpha = \\frac{\\tau}{I} = \\frac{30}{6.0} = 5.0$ rad/s$^2$. Inverting the ratio to $\\frac{I}{\\tau}$ gives 0.2, which is incorrect.",
        "zh": "由 $\\tau = I\\alpha$，$\\alpha = \\frac{\\tau}{I} = \\frac{30}{6.0} = 5.0$ rad/s$^2$。把比值倒成 $\\frac{I}{\\tau}$ 得到 0.2，是错的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid disk has mass 10 kg and radius 0.50 m and rotates about its central axis. What is its rotational inertia, in kg$\\cdot$m$^2$? (For a solid disk, $I = \\frac{1}{2}MR^2$.)",
        "zh": "一个实心圆盘质量 10 kg、半径 0.50 m，绕中心轴旋转。它的转动惯量是多少（kg$\\cdot$m$^2$）？（实心圆盘 $I = \\frac{1}{2}MR^2$。）"
      },
      "answer": "1.25",
      "accept": [
        "1.25",
        "1.3",
        "1.250",
        "1.25 kg·m^2",
        "5/4"
      ],
      "explanation": {
        "en": "$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(10)(0.50)^2 = \\frac{1}{2}(10)(0.25) = 1.25$ kg$\\cdot$m$^2$. Forgetting to square the radius (giving 2.5) is a common error.",
        "zh": "$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(10)(0.50)^2 = \\frac{1}{2}(10)(0.25) = 1.25$ kg$\\cdot$m$^2$。忘记对半径平方（得到 2.5）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object undergoes an angular acceleration of 8.0 rad/s$^2$ when a net torque of 24 N$\\cdot$m is applied. What is its rotational inertia, in kg$\\cdot$m$^2$?",
        "zh": "当施加 24 N$\\cdot$m 的净力矩时，物体产生 8.0 rad/s$^2$ 的角加速度。它的转动惯量是多少（kg$\\cdot$m$^2$）？"
      },
      "answer": "3.0",
      "accept": [
        "3.0",
        "3",
        "3.00",
        "3 kg·m^2",
        "3.0 kg·m^2"
      ],
      "explanation": {
        "en": "From $\\tau = I\\alpha$, $I = \\frac{\\tau}{\\alpha} = \\frac{24}{8.0} = 3.0$ kg$\\cdot$m$^2$. Multiplying $\\tau$ and $\\alpha$ (giving 192) instead of dividing is a common mistake.",
        "zh": "由 $\\tau = I\\alpha$，$I = \\frac{\\tau}{\\alpha} = \\frac{24}{8.0} = 3.0$ kg$\\cdot$m$^2$。把 $\\tau$ 和 $\\alpha$ 相乘（得到 192）而不是相除是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A thin hoop has mass 3.0 kg and radius 2.0 m and rotates about its central axis. What is its rotational inertia, in kg$\\cdot$m$^2$? (For a hoop, $I = MR^2$.)",
        "zh": "一个薄圆环质量 3.0 kg、半径 2.0 m，绕中心轴旋转。它的转动惯量是多少（kg$\\cdot$m$^2$）？（圆环 $I = MR^2$。）"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "12 kg·m^2",
        "12.0 kg·m^2",
        "12 kg m^2"
      ],
      "explanation": {
        "en": "$I = MR^2 = 3.0 \\times (2.0)^2 = 3.0 \\times 4.0 = 12$ kg$\\cdot$m$^2$. Applying a $\\frac{1}{2}$ factor (as for a disk) would wrongly give 6.0; a hoop has no such factor.",
        "zh": "$I = MR^2 = 3.0 \\times (2.0)^2 = 3.0 \\times 4.0 = 12$ kg$\\cdot$m$^2$。像圆盘那样乘 $\\frac{1}{2}$ 会错误地得到 6.0；圆环没有这个因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wheel with rotational inertia 3.0 kg$\\cdot$m$^2$ experiences a net torque of 15 N$\\cdot$m. What is its angular acceleration, in rad/s$^2$?",
        "zh": "一个转动惯量 3.0 kg$\\cdot$m$^2$ 的轮子受到 15 N$\\cdot$m 的净力矩。它的角加速度是多少（rad/s$^2$）？"
      },
      "answer": "5.0",
      "accept": [
        "5.0",
        "5",
        "5.00",
        "5 rad/s^2",
        "5.0 rad/s^2"
      ],
      "explanation": {
        "en": "Using $\\alpha = \\frac{\\tau}{I} = \\frac{15}{3.0} = 5.0$ rad/s$^2$. Inverting to $\\frac{I}{\\tau} = 0.2$ is a common error.",
        "zh": "用 $\\alpha = \\frac{\\tau}{I} = \\frac{15}{3.0} = 5.0$ rad/s$^2$。倒成 $\\frac{I}{\\tau} = 0.2$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A uniform rod has mass 6.0 kg and length 2.0 m and rotates about an axis through its center. What is its rotational inertia, in kg$\\cdot$m$^2$? (For a rod about its center, $I = \\frac{1}{12}ML^2$.)",
        "zh": "一根均匀杆质量 6.0 kg、长度 2.0 m，绕过中心的轴旋转。它的转动惯量是多少（kg$\\cdot$m$^2$）？（杆绕中心 $I = \\frac{1}{12}ML^2$。）"
      },
      "answer": "2.0",
      "accept": [
        "2.0",
        "2",
        "2.00",
        "2 kg·m^2",
        "2.0 kg·m^2"
      ],
      "explanation": {
        "en": "$I = \\frac{1}{12}ML^2 = \\frac{1}{12}(6.0)(2.0)^2 = \\frac{1}{12}(6.0)(4.0) = \\frac{24}{12} = 2.0$ kg$\\cdot$m$^2$. Using the end-axis formula $\\frac{1}{3}ML^2$ (giving 8.0) applies the wrong axis.",
        "zh": "$I = \\frac{1}{12}ML^2 = \\frac{1}{12}(6.0)(2.0)^2 = \\frac{1}{12}(6.0)(4.0) = \\frac{24}{12} = 2.0$ kg$\\cdot$m$^2$。用端点公式 $\\frac{1}{3}ML^2$（得到 8.0）是用错了轴。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid sphere has mass 2.0 kg and radius 3.0 m and rotates about a diameter. What is its rotational inertia, in kg$\\cdot$m$^2$? (For a solid sphere, $I = \\frac{2}{5}MR^2$.)",
        "zh": "一个实心球质量 2.0 kg、半径 3.0 m，绕直径旋转。它的转动惯量是多少（kg$\\cdot$m$^2$）？（实心球 $I = \\frac{2}{5}MR^2$。）"
      },
      "answer": "7.2",
      "accept": [
        "7.2",
        "7.20",
        "36/5",
        "7.2 kg·m^2",
        "7.20 kg·m^2"
      ],
      "explanation": {
        "en": "$I = \\frac{2}{5}MR^2 = \\frac{2}{5}(2.0)(3.0)^2 = \\frac{2}{5}(2.0)(9.0) = \\frac{36}{5} = 7.2$ kg$\\cdot$m$^2$. Forgetting to square the radius, or dropping the $\\frac{2}{5}$ coefficient, gives an incorrect value.",
        "zh": "$I = \\frac{2}{5}MR^2 = \\frac{2}{5}(2.0)(3.0)^2 = \\frac{2}{5}(2.0)(9.0) = \\frac{36}{5} = 7.2$ kg$\\cdot$m$^2$。忘记对半径平方，或漏掉 $\\frac{2}{5}$ 系数，会得到错误值。"
      }
    }
  ],
  "rotating-systems/rotational-energy-rolling": [
    {
      "type": "mc",
      "question": {
        "en": "The rotational kinetic energy of a rigid body spinning about a fixed axis is given by which expression?",
        "zh": "绕固定轴旋转的刚体的转动动能由下列哪个表达式给出？"
      },
      "choices": [
        "$\\frac{1}{2}I\\omega^2$",
        "$\\frac{1}{2}I\\omega$",
        "$I\\omega^2$",
        "$\\frac{1}{2}mv^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rotational kinetic energy is $\\frac{1}{2}I\\omega^2$, the rotational analog of $\\frac{1}{2}mv^2$ with $I$ replacing $m$ and $\\omega$ replacing $v$. Dropping the square on $\\omega$ or the factor of one-half comes from misremembering the analogy.",
        "zh": "转动动能是 $\\frac{1}{2}I\\omega^2$，它是 $\\frac{1}{2}mv^2$ 的转动对应式，用 $I$ 代替 $m$、用 $\\omega$ 代替 $v$。漏掉 $\\omega$ 的平方或二分之一因子是误记这个类比造成的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an object rolling without slipping, how are the linear speed $v$ of the center and the angular speed $\\omega$ related, with $r$ the radius?",
        "zh": "对于纯滚动（无滑动）的物体，质心的线速度 $v$ 与角速度 $\\omega$ 之间的关系是什么（$r$ 为半径）？"
      },
      "choices": [
        "$v = \\omega r^2$",
        "$v = \\omega r$",
        "$v = \\frac{\\omega}{r}$",
        "$v = \\omega + r$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rolling without slipping requires $v = \\omega r$, because the contact point is instantaneously at rest. Using $r^2$ confuses this kinematic constraint with the moment-of-inertia formula, which is a different relationship.",
        "zh": "纯滚动要求 $v = \\omega r$，因为接触点瞬时静止。用 $r^2$ 是把这个运动学约束与转动惯量公式混淆了，二者是不同的关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball rolls down a hill without slipping. Its total kinetic energy at the bottom is best described as:",
        "zh": "一个球无滑动地滚下山坡。它在坡底的总动能最恰当的描述是："
      },
      "choices": [
        "only translational kinetic energy",
        "only rotational kinetic energy",
        "the sum of translational and rotational kinetic energy",
        "zero, because rolling conserves potential energy"
      ],
      "answer": 2,
      "explanation": {
        "en": "A rolling object both moves and spins, so its total kinetic energy is $\\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$. Counting only the translational part ignores that energy also goes into spinning the object up.",
        "zh": "滚动物体既平动又转动，所以总动能是 $\\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$。只算平动部分忽略了能量也用于让物体转起来。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid sphere, a solid cylinder, and a hoop (all same mass and radius) are released from rest at the top of the same ramp and roll without slipping. Which reaches the bottom first?",
        "zh": "一个实心球、一个实心圆柱和一个圆环（质量和半径都相同）从同一斜坡顶端由静止释放并做纯滚动。哪个最先到达底部？"
      },
      "choices": [
        "the hoop",
        "the solid cylinder",
        "they all tie",
        "the solid sphere"
      ],
      "answer": 3,
      "explanation": {
        "en": "The object with the smallest $I/mr^2$ puts the least energy into rotation and the most into translation, so it accelerates fastest. The solid sphere has the smallest coefficient ($\\frac{2}{5}$), beating the cylinder ($\\frac{1}{2}$) and hoop ($1$). Assuming heavier or larger objects win ignores that mass and radius cancel out.",
        "zh": "$I/mr^2$ 最小的物体分给转动的能量最少、分给平动的最多，因此加速最快。实心球的系数最小（$\\frac{2}{5}$），胜过圆柱（$\\frac{1}{2}$）和圆环（$1$）。以为更重或更大的物体获胜忽略了质量与半径会约掉。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A wheel has moment of inertia $I = 4\\ \\text{kg·m}^2$ and spins at $\\omega = 5\\ \\text{rad/s}$. What is its rotational kinetic energy?",
        "zh": "一个轮子的转动惯量 $I = 4\\ \\text{kg·m}^2$，以 $\\omega = 5\\ \\text{rad/s}$ 旋转。它的转动动能是多少？"
      },
      "choices": [
        "$50\\ \\text{J}$",
        "$100\\ \\text{J}$",
        "$20\\ \\text{J}$",
        "$10\\ \\text{J}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$KE_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(4)(5^2) = \\frac{1}{2}(4)(25) = 50\\ \\text{J}$. Forgetting to square $\\omega$ gives the incorrect $10\\ \\text{J}$.",
        "zh": "$KE_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(4)(5^2) = \\frac{1}{2}(4)(25) = 50\\ \\text{J}$。忘记把 $\\omega$ 平方会得到错误的 $10\\ \\text{J}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a solid sphere rolling without slipping, what fraction of its total kinetic energy is rotational? (Use $I = \\frac{2}{5}mr^2$.)",
        "zh": "对于纯滚动的实心球，其转动动能占总动能的比例是多少？（取 $I = \\frac{2}{5}mr^2$。）"
      },
      "choices": [
        "$\\frac{5}{7}$",
        "$\\frac{2}{7}$",
        "$\\frac{1}{2}$",
        "$\\frac{2}{5}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rotational KE $= \\frac{1}{2}(\\frac{2}{5}mr^2)(v/r)^2 = \\frac{1}{5}mv^2$, and total KE $= \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$. The ratio is $\\frac{1/5}{7/10} = \\frac{2}{7}$. Answering $\\frac{2}{5}$ mistakes the inertia coefficient for the energy fraction.",
        "zh": "转动动能 $= \\frac{1}{2}(\\frac{2}{5}mr^2)(v/r)^2 = \\frac{1}{5}mv^2$，总动能 $= \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$。比值为 $\\frac{1/5}{7/10} = \\frac{2}{7}$。回答 $\\frac{2}{5}$ 是把转动惯量系数误当成能量比例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A disk and a hoop of the same mass and radius roll down identical ramps. Compared to the hoop, the disk arrives at the bottom with a center-of-mass speed that is:",
        "zh": "质量和半径相同的圆盘与圆环从相同的斜坡上滚下。与圆环相比，圆盘到达底部时的质心速度是："
      },
      "choices": [
        "smaller",
        "the same",
        "larger",
        "zero"
      ],
      "answer": 2,
      "explanation": {
        "en": "The disk has a smaller moment-of-inertia coefficient ($\\frac{1}{2}$ vs $1$), so less of the released energy goes into rotation and more into translation, giving a larger center-of-mass speed. Thinking they tie ignores that the mass distribution differs even though $m$ and $r$ match.",
        "zh": "圆盘的转动惯量系数更小（$\\frac{1}{2}$ 对 $1$），所以释放的能量更少用于转动、更多用于平动，得到更大的质心速度。以为二者相同忽略了即使 $m$ 和 $r$ 相同，质量分布也不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A hoop of mass $2\\ \\text{kg}$ and radius $0.5\\ \\text{m}$ rolls without slipping with center-of-mass speed $3\\ \\text{m/s}$. What is its total kinetic energy? (Hoop: $I = mr^2$.)",
        "zh": "一个质量 $2\\ \\text{kg}$、半径 $0.5\\ \\text{m}$ 的圆环以质心速度 $3\\ \\text{m/s}$ 做纯滚动。它的总动能是多少？（圆环：$I = mr^2$。）"
      },
      "choices": [
        "$9\\ \\text{J}$",
        "$6\\ \\text{J}$",
        "$13.5\\ \\text{J}$",
        "$18\\ \\text{J}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "For a hoop, $KE_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}(mr^2)(v/r)^2 = mv^2 = (2)(3^2) = 18\\ \\text{J}$. Using only $\\frac{1}{2}mv^2 = 9\\ \\text{J}$ omits the rotational contribution, which for a hoop equals the translational part.",
        "zh": "对圆环，$KE_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}(mr^2)(v/r)^2 = mv^2 = (2)(3^2) = 18\\ \\text{J}$。只用 $\\frac{1}{2}mv^2 = 9\\ \\text{J}$ 漏掉了转动部分，而对圆环来说转动部分恰好等于平动部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two identical solid spheres start from rest at the same height. One rolls without slipping down a ramp; the other slides down a frictionless ramp. At the bottom, which has the greater center-of-mass speed?",
        "zh": "两个相同的实心球从相同高度由静止开始。一个沿斜坡纯滚动而下，另一个沿无摩擦斜坡下滑。到达底部时哪个质心速度更大？"
      },
      "choices": [
        "the sliding sphere",
        "the rolling sphere",
        "they have equal speeds",
        "it depends on the ramp angle"
      ],
      "answer": 0,
      "explanation": {
        "en": "Both convert the same $mgh$, but the roller must split that energy between translation and rotation, so its translational speed is smaller. The frictionless slider puts all the energy into translation, giving a greater speed. Assuming they tie ignores the rotational energy the roller carries.",
        "zh": "两者转化相同的 $mgh$，但滚动球必须把能量分给平动和转动，所以它的平动速度更小。无摩擦下滑的球把全部能量给平动，速度更大。以为二者相同忽略了滚动球携带的转动能量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid sphere is released from rest and rolls without slipping down an incline of height $h$. Its center-of-mass speed at the bottom is:",
        "zh": "一个实心球由静止释放，沿高度为 $h$ 的斜面做纯滚动而下。它在底部的质心速度为："
      },
      "choices": [
        "$\\sqrt{2gh}$",
        "$\\sqrt{\\frac{10gh}{7}}$",
        "$\\sqrt{gh}$",
        "$\\sqrt{\\frac{5gh}{7}}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Energy conservation gives $mgh = \\frac{7}{10}mv^2$, so $v = \\sqrt{\\frac{10gh}{7}}$. Using $\\sqrt{2gh}$ is the frictionless-sliding result, which ignores that some energy becomes rotational.",
        "zh": "能量守恒给出 $mgh = \\frac{7}{10}mv^2$，所以 $v = \\sqrt{\\frac{10gh}{7}}$。用 $\\sqrt{2gh}$ 是无摩擦下滑的结果，忽略了部分能量转为转动能。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In rolling without slipping down an incline, what role does static friction play?",
        "zh": "在斜面上纯滚动时，静摩擦力起什么作用？"
      },
      "choices": [
        "It does large negative work, removing mechanical energy.",
        "It has no effect on the motion at all.",
        "It provides the torque needed to angularly accelerate the object, doing no net work.",
        "It converts all the potential energy into heat."
      ],
      "answer": 2,
      "explanation": {
        "en": "Static friction at the contact point supplies the torque that spins the object up, and because the contact point does not slide, it does no net work, so mechanical energy is conserved. Assuming it dissipates energy confuses static friction with kinetic (sliding) friction.",
        "zh": "接触点处的静摩擦力提供让物体转起来的力矩，由于接触点不滑动，它不做净功，因此机械能守恒。以为它耗散能量是把静摩擦与滑动（动）摩擦混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid cylinder ($I = \\frac{1}{2}mr^2$) of mass $3\\ \\text{kg}$ rolls without slipping at $4\\ \\text{m/s}$. What is its total kinetic energy?",
        "zh": "一个质量 $3\\ \\text{kg}$ 的实心圆柱（$I = \\frac{1}{2}mr^2$）以 $4\\ \\text{m/s}$ 做纯滚动。它的总动能是多少？"
      },
      "choices": [
        "$24\\ \\text{J}$",
        "$48\\ \\text{J}$",
        "$12\\ \\text{J}$",
        "$36\\ \\text{J}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$KE_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{1}{2}mr^2)(v/r)^2 = \\frac{3}{4}mv^2 = \\frac{3}{4}(3)(16) = 36\\ \\text{J}$. Using only $\\frac{1}{2}mv^2 = 24\\ \\text{J}$ leaves out the rotational term.",
        "zh": "$KE_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{1}{2}mr^2)(v/r)^2 = \\frac{3}{4}mv^2 = \\frac{3}{4}(3)(16) = 36\\ \\text{J}$。只用 $\\frac{1}{2}mv^2 = 24\\ \\text{J}$ 漏掉了转动项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A flywheel has moment of inertia $I = 2\\ \\text{kg·m}^2$ and spins at $\\omega = 6\\ \\text{rad/s}$. What is its rotational kinetic energy, in joules?",
        "zh": "一个飞轮的转动惯量 $I = 2\\ \\text{kg·m}^2$，以 $\\omega = 6\\ \\text{rad/s}$ 旋转。它的转动动能是多少焦耳？"
      },
      "answer": "36",
      "accept": [
        "36 J",
        "36.0",
        "36J",
        "36 joules"
      ],
      "explanation": {
        "en": "$KE_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(2)(6^2) = \\frac{1}{2}(2)(36) = 36\\ \\text{J}$. Forgetting to square $\\omega$ would give $6\\ \\text{J}$.",
        "zh": "$KE_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(2)(6^2) = \\frac{1}{2}(2)(36) = 36\\ \\text{J}$。忘记把 $\\omega$ 平方会得到 $6\\ \\text{J}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wheel of radius $0.4\\ \\text{m}$ rolls without slipping with center-of-mass speed $2\\ \\text{m/s}$. What is its angular speed, in rad/s?",
        "zh": "一个半径 $0.4\\ \\text{m}$ 的轮子以质心速度 $2\\ \\text{m/s}$ 做纯滚动。它的角速度是多少 rad/s？"
      },
      "answer": "5",
      "accept": [
        "5 rad/s",
        "5.0",
        "5.00",
        "5rad/s"
      ],
      "explanation": {
        "en": "From $v = \\omega r$, $\\omega = v/r = 2/0.4 = 5\\ \\text{rad/s}$. Multiplying instead of dividing by $r$ would give the wrong value $0.8$.",
        "zh": "由 $v = \\omega r$，$\\omega = v/r = 2/0.4 = 5\\ \\text{rad/s}$。若用乘以 $r$ 而非除以 $r$ 会得到错误值 $0.8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid sphere ($I = \\frac{2}{5}mr^2$) of mass $5\\ \\text{kg}$ rolls without slipping at $2\\ \\text{m/s}$. What is its total kinetic energy, in joules?",
        "zh": "一个质量 $5\\ \\text{kg}$ 的实心球（$I = \\frac{2}{5}mr^2$）以 $2\\ \\text{m/s}$ 做纯滚动。它的总动能是多少焦耳？"
      },
      "answer": "14",
      "accept": [
        "14 J",
        "14.0",
        "14J",
        "14 joules"
      ],
      "explanation": {
        "en": "$KE_{total} = \\frac{7}{10}mv^2 = \\frac{7}{10}(5)(2^2) = \\frac{7}{10}(5)(4) = 14\\ \\text{J}$. Using only $\\frac{1}{2}mv^2 = 10\\ \\text{J}$ omits the rotational contribution.",
        "zh": "$KE_{total} = \\frac{7}{10}mv^2 = \\frac{7}{10}(5)(2^2) = \\frac{7}{10}(5)(4) = 14\\ \\text{J}$。只用 $\\frac{1}{2}mv^2 = 10\\ \\text{J}$ 漏掉了转动贡献。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid sphere rolls without slipping down an incline of height $1.4\\ \\text{m}$, starting from rest. What is its center-of-mass speed at the bottom, in m/s? Use $g = 10\\ \\text{m/s}^2$ and $v = \\sqrt{\\frac{10gh}{7}}$.",
        "zh": "一个实心球从静止开始，沿高度 $1.4\\ \\text{m}$ 的斜面做纯滚动而下。它在底部的质心速度是多少 m/s？取 $g = 10\\ \\text{m/s}^2$，$v = \\sqrt{\\frac{10gh}{7}}$。"
      },
      "answer": "4.47",
      "accept": [
        "4.47 m/s",
        "4.5",
        "4.472",
        "4.47214",
        "sqrt(20)",
        "2sqrt(5)",
        "4.4721"
      ],
      "explanation": {
        "en": "$v = \\sqrt{\\frac{10(10)(1.4)}{7}} = \\sqrt{\\frac{140}{7}} = \\sqrt{20} \\approx 4.47\\ \\text{m/s}$. Using $\\sqrt{2gh} = \\sqrt{28} \\approx 5.29$ ignores that some energy goes into rotation.",
        "zh": "$v = \\sqrt{\\frac{10(10)(1.4)}{7}} = \\sqrt{\\frac{140}{7}} = \\sqrt{20} \\approx 4.47\\ \\text{m/s}$。用 $\\sqrt{2gh} = \\sqrt{28} \\approx 5.29$ 忽略了部分能量转为转动。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A hoop ($I = mr^2$) of mass $1\\ \\text{kg}$ rolls without slipping at $3\\ \\text{m/s}$. What is its total kinetic energy, in joules?",
        "zh": "一个质量 $1\\ \\text{kg}$ 的圆环（$I = mr^2$）以 $3\\ \\text{m/s}$ 做纯滚动。它的总动能是多少焦耳？"
      },
      "answer": "9",
      "accept": [
        "9 J",
        "9.0",
        "9J",
        "9 joules"
      ],
      "explanation": {
        "en": "For a hoop, $KE_{total} = mv^2 = (1)(3^2) = 9\\ \\text{J}$, since the rotational and translational parts are equal. Using only $\\frac{1}{2}mv^2 = 4.5\\ \\text{J}$ counts just the translational half.",
        "zh": "对圆环，$KE_{total} = mv^2 = (1)(3^2) = 9\\ \\text{J}$，因为转动部分与平动部分相等。只用 $\\frac{1}{2}mv^2 = 4.5\\ \\text{J}$ 只算了平动的一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rotating body's kinetic energy is $50\\ \\text{J}$ and its moment of inertia is $4\\ \\text{kg·m}^2$. What is its angular speed, in rad/s?",
        "zh": "一个转动物体的动能是 $50\\ \\text{J}$，转动惯量是 $4\\ \\text{kg·m}^2$。它的角速度是多少 rad/s？"
      },
      "answer": "5",
      "accept": [
        "5 rad/s",
        "5.0",
        "5.00",
        "5rad/s"
      ],
      "explanation": {
        "en": "From $KE = \\frac{1}{2}I\\omega^2$, $\\omega = \\sqrt{\\frac{2KE}{I}} = \\sqrt{\\frac{2(50)}{4}} = \\sqrt{25} = 5\\ \\text{rad/s}$. Forgetting the square root (using $2KE/I = 25$) gives the wrong value.",
        "zh": "由 $KE = \\frac{1}{2}I\\omega^2$，$\\omega = \\sqrt{\\frac{2KE}{I}} = \\sqrt{\\frac{2(50)}{4}} = \\sqrt{25} = 5\\ \\text{rad/s}$。忘记开平方（用 $2KE/I = 25$）会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A disk of mass $2\\ \\text{kg}$ and radius $0.5\\ \\text{m}$ spins about its center at $\\omega = 8\\ \\text{rad/s}$. Using $I = \\frac{1}{2}mr^2$, what is its rotational kinetic energy, in joules?",
        "zh": "一个质量 $2\\ \\text{kg}$、半径 $0.5\\ \\text{m}$ 的圆盘绕中心以 $\\omega = 8\\ \\text{rad/s}$ 旋转。用 $I = \\frac{1}{2}mr^2$，它的转动动能是多少焦耳？"
      },
      "answer": "8",
      "accept": [
        "8 J",
        "8.0",
        "8J",
        "8 joules"
      ],
      "explanation": {
        "en": "$I = \\frac{1}{2}(2)(0.5^2) = \\frac{1}{2}(2)(0.25) = 0.25\\ \\text{kg·m}^2$, so $KE_{rot} = \\frac{1}{2}(0.25)(8^2) = \\frac{1}{2}(0.25)(64) = 8\\ \\text{J}$. Forgetting to square the radius in $I$ would inflate the result.",
        "zh": "$I = \\frac{1}{2}(2)(0.5^2) = \\frac{1}{2}(2)(0.25) = 0.25\\ \\text{kg·m}^2$，所以 $KE_{rot} = \\frac{1}{2}(0.25)(8^2) = \\frac{1}{2}(0.25)(64) = 8\\ \\text{J}$。在 $I$ 中忘记把半径平方会夸大结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid cylinder rolls without slipping. What fraction of its total kinetic energy is rotational? Give your answer as a decimal. (Use $I = \\frac{1}{2}mr^2$.)",
        "zh": "一个实心圆柱做纯滚动。它的转动动能占总动能的比例是多少？用小数表示。（取 $I = \\frac{1}{2}mr^2$。）"
      },
      "answer": "0.333",
      "accept": [
        "1/3",
        "0.33",
        "0.3333",
        "0.33333",
        ".333",
        "one third"
      ],
      "explanation": {
        "en": "Rotational KE $= \\frac{1}{2}(\\frac{1}{2}mr^2)(v/r)^2 = \\frac{1}{4}mv^2$; total KE $= \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$. The ratio is $\\frac{1/4}{3/4} = \\frac{1}{3} \\approx 0.333$. Answering $0.5$ mistakes the inertia coefficient for the energy fraction.",
        "zh": "转动动能 $= \\frac{1}{2}(\\frac{1}{2}mr^2)(v/r)^2 = \\frac{1}{4}mv^2$；总动能 $= \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$。比值为 $\\frac{1/4}{3/4} = \\frac{1}{3} \\approx 0.333$。回答 $0.5$ 是把转动惯量系数误当成能量比例。"
      }
    }
  ],
  "rotating-systems/angular-momentum-conservation": [
    {
      "type": "mc",
      "question": {
        "en": "The angular momentum of a rigid body rotating about a fixed axis is given by:",
        "zh": "绕固定轴转动的刚体的角动量由下式给出："
      },
      "choices": [
        "$L = I\\omega$",
        "$L = \\frac{1}{2}I\\omega$",
        "$L = I\\omega^2$",
        "$L = I\\alpha$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Angular momentum is $L = I\\omega$, the rotational analog of linear momentum $p = mv$. Writing $I\\alpha$ confuses angular momentum with net torque, and $I\\omega^2$ confuses it with kinetic energy.",
        "zh": "角动量是 $L = I\\omega$，是线动量 $p = mv$ 的转动对应量。写成 $I\\alpha$ 是把角动量与净力矩混淆，$I\\omega^2$ 则是与动能混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The angular momentum of a point mass $m$ moving with speed $v$ in a circle of radius $r$ is:",
        "zh": "一个质点 $m$ 以速度 $v$ 在半径为 $r$ 的圆周上运动，其角动量为："
      },
      "choices": [
        "$L = \\frac{mv}{r}$",
        "$L = mvr$",
        "$L = mvr^2$",
        "$L = \\frac{1}{2}mvr$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For a point mass moving perpendicular to the radius, $L = mvr$. Using $r^2$ confuses this with a moment-of-inertia expression; dividing by $r$ has the wrong dependence entirely.",
        "zh": "对于沿垂直于半径方向运动的质点，$L = mvr$。用 $r^2$ 是与转动惯量表达式混淆；除以 $r$ 则依赖关系完全错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Angular momentum of a system is conserved when:",
        "zh": "系统的角动量在什么情况下守恒？"
      },
      "choices": [
        "the net force on the system is zero",
        "the system's kinetic energy is constant",
        "the net external torque on the system is zero",
        "the system is moving in a straight line"
      ],
      "answer": 2,
      "explanation": {
        "en": "Angular momentum is conserved when the net external torque is zero, just as linear momentum is conserved when net force is zero. Requiring zero net force is the condition for linear, not angular, momentum conservation.",
        "zh": "当净外力矩为零时角动量守恒，正如净外力为零时线动量守恒一样。要求净外力为零是线动量守恒的条件，而非角动量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spinning ice skater pulls her arms inward, reducing her moment of inertia. As a result, her angular speed:",
        "zh": "一个旋转的花样滑冰运动员收拢手臂，减小了转动惯量。结果她的角速度："
      },
      "choices": [
        "decreases",
        "drops to zero",
        "stays the same",
        "increases"
      ],
      "answer": 3,
      "explanation": {
        "en": "With no external torque, $L = I\\omega$ is conserved, so decreasing $I$ forces $\\omega$ to increase. Thinking $\\omega$ stays the same ignores that the product $I\\omega$, not $\\omega$ alone, is what is held fixed.",
        "zh": "在没有外力矩时，$L = I\\omega$ 守恒，所以 $I$ 减小会迫使 $\\omega$ 增大。以为 $\\omega$ 不变忽略了保持不变的是乘积 $I\\omega$，而非单独的 $\\omega$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When a skater pulls her arms in and spins faster with angular momentum conserved, her rotational kinetic energy:",
        "zh": "当滑冰运动员收拢手臂、在角动量守恒下转得更快时，她的转动动能："
      },
      "choices": [
        "increases",
        "stays exactly the same",
        "decreases",
        "becomes zero"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $KE = \\frac{L^2}{2I}$ and $L$ is fixed, decreasing $I$ increases $KE$; the extra energy comes from the work she does pulling her arms in. Assuming energy is conserved here confuses conserved angular momentum with conserved kinetic energy.",
        "zh": "因为 $KE = \\frac{L^2}{2I}$ 且 $L$ 不变，$I$ 减小使 $KE$ 增大；多出的能量来自她收拢手臂所做的功。以为此处能量守恒是把角动量守恒与动能守恒混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the SI units of angular momentum?",
        "zh": "角动量的国际单位（SI）是什么？"
      },
      "choices": [
        "$\\text{kg·m/s}$",
        "$\\text{kg·m}^2/\\text{s}$",
        "$\\text{kg·m}^2/\\text{s}^2$",
        "$\\text{N·m}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$L = I\\omega$ has units $(\\text{kg·m}^2)(\\text{1/s}) = \\text{kg·m}^2/\\text{s}$. The units $\\text{kg·m}^2/\\text{s}^2$ are joules (energy), and $\\text{kg·m/s}$ are for linear momentum.",
        "zh": "$L = I\\omega$ 的单位是 $(\\text{kg·m}^2)(\\text{1/s}) = \\text{kg·m}^2/\\text{s}$。单位 $\\text{kg·m}^2/\\text{s}^2$ 是焦耳（能量），$\\text{kg·m/s}$ 则是线动量的单位。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The rotational analog of the impulse-momentum theorem states that the net external torque times the time interval equals:",
        "zh": "冲量—动量定理的转动对应形式指出，净外力矩乘以时间间隔等于："
      },
      "choices": [
        "the change in kinetic energy",
        "the change in angular velocity",
        "the change in angular momentum",
        "the moment of inertia"
      ],
      "answer": 2,
      "explanation": {
        "en": "Angular impulse equals the change in angular momentum: $\\tau \\Delta t = \\Delta L$. Choosing change in angular velocity omits the moment of inertia that connects $\\omega$ to $L$.",
        "zh": "角冲量等于角动量的变化：$\\tau \\Delta t = \\Delta L$。选择角速度的变化漏掉了把 $\\omega$ 与 $L$ 联系起来的转动惯量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A disk with moment of inertia $I$ spins at $\\omega_0$. A second identical disk (also $I$), initially at rest, is dropped onto it and they spin together. Their common final angular speed is:",
        "zh": "一个转动惯量为 $I$ 的圆盘以 $\\omega_0$ 旋转。第二个相同的圆盘（也是 $I$），初始静止，被放到它上面并一起转动。它们共同的最终角速度是："
      },
      "choices": [
        "$\\omega_0$",
        "$2\\omega_0$",
        "$\\frac{\\omega_0}{4}$",
        "$\\frac{\\omega_0}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Angular momentum is conserved: $I\\omega_0 = (2I)\\omega_f$, so $\\omega_f = \\frac{\\omega_0}{2}$. Expecting $\\omega_0$ to stay unchanged ignores that the moment of inertia doubled while $L$ stayed fixed.",
        "zh": "角动量守恒：$I\\omega_0 = (2I)\\omega_f$，所以 $\\omega_f = \\frac{\\omega_0}{2}$。期望 $\\omega_0$ 保持不变忽略了转动惯量加倍而 $L$ 不变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A merry-go-round spins freely. A child walks from the edge toward the center. The merry-go-round's angular speed:",
        "zh": "一个旋转木马自由旋转。一个孩子从边缘走向中心。旋转木马的角速度："
      },
      "choices": [
        "increases",
        "decreases",
        "stays the same",
        "reverses direction"
      ],
      "answer": 0,
      "explanation": {
        "en": "As the child moves inward, the system's moment of inertia decreases; with $L$ conserved, $\\omega$ must increase. Thinking it slows down reverses the correct relationship between $I$ and $\\omega$ at fixed $L$.",
        "zh": "孩子向内移动时，系统的转动惯量减小；在 $L$ 守恒下，$\\omega$ 必须增大。以为它减速是把在 $L$ 不变时 $I$ 与 $\\omega$ 的正确关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A wheel with $I = 5\\ \\text{kg·m}^2$ spins at $\\omega = 4\\ \\text{rad/s}$. What is its angular momentum?",
        "zh": "一个转动惯量 $I = 5\\ \\text{kg·m}^2$ 的轮子以 $\\omega = 4\\ \\text{rad/s}$ 旋转。它的角动量是多少？"
      },
      "choices": [
        "$1.25\\ \\text{kg·m}^2/\\text{s}$",
        "$20\\ \\text{kg·m}^2/\\text{s}$",
        "$9\\ \\text{kg·m}^2/\\text{s}$",
        "$40\\ \\text{kg·m}^2/\\text{s}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$L = I\\omega = (5)(4) = 20\\ \\text{kg·m}^2/\\text{s}$. Answering $40$ mistakenly uses $\\frac{1}{2}I\\omega^2$-type reasoning; $L$ is linear in $\\omega$, not quadratic.",
        "zh": "$L = I\\omega = (5)(4) = 20\\ \\text{kg·m}^2/\\text{s}$。回答 $40$ 是误用了 $\\frac{1}{2}I\\omega^2$ 那类推理；$L$ 与 $\\omega$ 成正比，而非平方关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a correct statement about angular momentum in the solar system, where planets orbit the Sun with negligible external torque?",
        "zh": "关于太阳系中角动量的下列说法哪个正确？行星绕太阳运行，外力矩可忽略。"
      },
      "choices": [
        "A planet speeds up when it is farther from the Sun.",
        "A planet's speed is the same everywhere in its orbit.",
        "A planet moves faster when it is closer to the Sun, conserving angular momentum.",
        "Angular momentum is not defined for orbital motion."
      ],
      "answer": 2,
      "explanation": {
        "en": "With negligible torque, $L = mvr$ is conserved, so as $r$ decreases the speed $v$ must increase — the planet moves fastest near the Sun. Claiming it speeds up when farther away has the $r$-dependence backwards.",
        "zh": "在力矩可忽略时，$L = mvr$ 守恒，所以 $r$ 减小时速度 $v$ 必须增大——行星在靠近太阳时最快。声称它在更远处加速把对 $r$ 的依赖关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A constant net torque of $3\\ \\text{N·m}$ acts on a wheel for $4\\ \\text{s}$. By how much does the wheel's angular momentum change?",
        "zh": "一个恒定净力矩 $3\\ \\text{N·m}$ 作用在轮子上 $4\\ \\text{s}$。轮子的角动量改变了多少？"
      },
      "choices": [
        "$0.75\\ \\text{kg·m}^2/\\text{s}$",
        "$7\\ \\text{kg·m}^2/\\text{s}$",
        "$1.33\\ \\text{kg·m}^2/\\text{s}$",
        "$12\\ \\text{kg·m}^2/\\text{s}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\Delta L = \\tau \\Delta t = (3)(4) = 12\\ \\text{kg·m}^2/\\text{s}$. Dividing torque by time instead of multiplying gives the incorrect $0.75$.",
        "zh": "$\\Delta L = \\tau \\Delta t = (3)(4) = 12\\ \\text{kg·m}^2/\\text{s}$。把力矩除以时间而非相乘会得到错误的 $0.75$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rotating platform has $I = 6\\ \\text{kg·m}^2$ and $\\omega = 3\\ \\text{rad/s}$. What is its angular momentum, in $\\text{kg·m}^2/\\text{s}$?",
        "zh": "一个转动平台的 $I = 6\\ \\text{kg·m}^2$，$\\omega = 3\\ \\text{rad/s}$。它的角动量是多少 $\\text{kg·m}^2/\\text{s}$？"
      },
      "answer": "18",
      "accept": [
        "18 kg·m^2/s",
        "18.0",
        "18 kg m^2/s",
        "18kg·m2/s"
      ],
      "explanation": {
        "en": "$L = I\\omega = (6)(3) = 18\\ \\text{kg·m}^2/\\text{s}$. Angular momentum is linear in $\\omega$, so there is no square to apply here.",
        "zh": "$L = I\\omega = (6)(3) = 18\\ \\text{kg·m}^2/\\text{s}$。角动量与 $\\omega$ 成正比，所以这里不需要平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A skater spins with $I_1 = 8\\ \\text{kg·m}^2$ at $\\omega_1 = 1.5\\ \\text{rad/s}$. She pulls in her arms to $I_2 = 2\\ \\text{kg·m}^2$. What is her new angular speed, in rad/s?",
        "zh": "一个滑冰运动员以 $I_1 = 8\\ \\text{kg·m}^2$、$\\omega_1 = 1.5\\ \\text{rad/s}$ 旋转。她收拢手臂到 $I_2 = 2\\ \\text{kg·m}^2$。她新的角速度是多少 rad/s？"
      },
      "answer": "6",
      "accept": [
        "6 rad/s",
        "6.0",
        "6.00",
        "6rad/s"
      ],
      "explanation": {
        "en": "Angular momentum is conserved: $I_1\\omega_1 = I_2\\omega_2$, so $\\omega_2 = \\frac{(8)(1.5)}{2} = \\frac{12}{2} = 6\\ \\text{rad/s}$. Assuming $\\omega$ is unchanged ignores that $I$ dropped by a factor of 4.",
        "zh": "角动量守恒：$I_1\\omega_1 = I_2\\omega_2$，所以 $\\omega_2 = \\frac{(8)(1.5)}{2} = \\frac{12}{2} = 6\\ \\text{rad/s}$。以为 $\\omega$ 不变忽略了 $I$ 减小到原来的四分之一。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A point mass of $0.5\\ \\text{kg}$ moves at $4\\ \\text{m/s}$ tangentially at a radius of $2\\ \\text{m}$. What is its angular momentum, in $\\text{kg·m}^2/\\text{s}$?",
        "zh": "一个 $0.5\\ \\text{kg}$ 的质点在半径 $2\\ \\text{m}$ 处以 $4\\ \\text{m/s}$ 沿切向运动。它的角动量是多少 $\\text{kg·m}^2/\\text{s}$？"
      },
      "answer": "4",
      "accept": [
        "4 kg·m^2/s",
        "4.0",
        "4 kg m^2/s",
        "4.00"
      ],
      "explanation": {
        "en": "$L = mvr = (0.5)(4)(2) = 4\\ \\text{kg·m}^2/\\text{s}$. Forgetting to include the radius would give only $2$.",
        "zh": "$L = mvr = (0.5)(4)(2) = 4\\ \\text{kg·m}^2/\\text{s}$。忘记乘上半径只会得到 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A net torque of $2.5\\ \\text{N·m}$ acts on a flywheel for $6\\ \\text{s}$. What is the change in its angular momentum, in $\\text{kg·m}^2/\\text{s}$?",
        "zh": "一个净力矩 $2.5\\ \\text{N·m}$ 作用在飞轮上 $6\\ \\text{s}$。它角动量的变化是多少 $\\text{kg·m}^2/\\text{s}$？"
      },
      "answer": "15",
      "accept": [
        "15 kg·m^2/s",
        "15.0",
        "15 kg m^2/s",
        "15.00"
      ],
      "explanation": {
        "en": "$\\Delta L = \\tau \\Delta t = (2.5)(6) = 15\\ \\text{kg·m}^2/\\text{s}$. This angular-impulse relation multiplies torque by time; dividing them would be incorrect.",
        "zh": "$\\Delta L = \\tau \\Delta t = (2.5)(6) = 15\\ \\text{kg·m}^2/\\text{s}$。这个角冲量关系是力矩乘以时间；相除是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A merry-go-round with $I = 200\\ \\text{kg·m}^2$ spins at $2\\ \\text{rad/s}$. A child adds $100\\ \\text{kg·m}^2$ of moment of inertia by climbing on at the edge. What is the new angular speed, in rad/s?",
        "zh": "一个转动惯量 $I = 200\\ \\text{kg·m}^2$ 的旋转木马以 $2\\ \\text{rad/s}$ 旋转。一个孩子爬到边缘，增加了 $100\\ \\text{kg·m}^2$ 的转动惯量。新的角速度是多少 rad/s？"
      },
      "answer": "1.33",
      "accept": [
        "1.33 rad/s",
        "4/3",
        "1.3",
        "1.333",
        "1.33333",
        "1.3rad/s"
      ],
      "explanation": {
        "en": "Conserving angular momentum: $(200)(2) = (300)\\omega_f$, so $\\omega_f = \\frac{400}{300} = \\frac{4}{3} \\approx 1.33\\ \\text{rad/s}$. Keeping $\\omega$ at $2$ ignores that the total moment of inertia increased.",
        "zh": "角动量守恒：$(200)(2) = (300)\\omega_f$，所以 $\\omega_f = \\frac{400}{300} = \\frac{4}{3} \\approx 1.33\\ \\text{rad/s}$。保持 $\\omega$ 为 $2$ 忽略了总转动惯量增加了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A disk spinning at $10\\ \\text{rad/s}$ has its moment of inertia suddenly increased to 5 times its original value with no external torque. What is its new angular speed, in rad/s?",
        "zh": "一个以 $10\\ \\text{rad/s}$ 旋转的圆盘，在没有外力矩的情况下转动惯量突然增加到原来的 5 倍。它新的角速度是多少 rad/s？"
      },
      "answer": "2",
      "accept": [
        "2 rad/s",
        "2.0",
        "2.00",
        "2rad/s"
      ],
      "explanation": {
        "en": "Angular momentum is conserved: $I(10) = (5I)\\omega_f$, so $\\omega_f = \\frac{10}{5} = 2\\ \\text{rad/s}$. Multiplying by 5 instead of dividing reverses the correct effect of increasing $I$.",
        "zh": "角动量守恒：$I(10) = (5I)\\omega_f$，所以 $\\omega_f = \\frac{10}{5} = 2\\ \\text{rad/s}$。用乘以 5 而非除以 5 把增大 $I$ 的正确效果弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A student sits on a rotating stool holding weights, with total $I_1 = 4\\ \\text{kg·m}^2$ and $\\omega_1 = 3\\ \\text{rad/s}$. She extends her arms so $I_2 = 6\\ \\text{kg·m}^2$. What is her new angular speed, in rad/s?",
        "zh": "一个学生坐在转凳上拿着重物，总的 $I_1 = 4\\ \\text{kg·m}^2$、$\\omega_1 = 3\\ \\text{rad/s}$。她伸展手臂使 $I_2 = 6\\ \\text{kg·m}^2$。她新的角速度是多少 rad/s？"
      },
      "answer": "2",
      "accept": [
        "2 rad/s",
        "2.0",
        "2.00",
        "2rad/s"
      ],
      "explanation": {
        "en": "$I_1\\omega_1 = I_2\\omega_2$ gives $\\omega_2 = \\frac{(4)(3)}{6} = \\frac{12}{6} = 2\\ \\text{rad/s}$. Extending the arms raises $I$, so $\\omega$ drops; expecting it to rise treats this like pulling the arms in.",
        "zh": "$I_1\\omega_1 = I_2\\omega_2$ 给出 $\\omega_2 = \\frac{(4)(3)}{6} = \\frac{12}{6} = 2\\ \\text{rad/s}$。伸展手臂增大 $I$，所以 $\\omega$ 减小；期望它增大是把这当成收拢手臂了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A flywheel has angular momentum $24\\ \\text{kg·m}^2/\\text{s}$ and moment of inertia $8\\ \\text{kg·m}^2$. What is its angular speed, in rad/s?",
        "zh": "一个飞轮的角动量为 $24\\ \\text{kg·m}^2/\\text{s}$，转动惯量为 $8\\ \\text{kg·m}^2$。它的角速度是多少 rad/s？"
      },
      "answer": "3",
      "accept": [
        "3 rad/s",
        "3.0",
        "3.00",
        "3rad/s"
      ],
      "explanation": {
        "en": "From $L = I\\omega$, $\\omega = \\frac{L}{I} = \\frac{24}{8} = 3\\ \\text{rad/s}$. Multiplying $L$ by $I$ instead of dividing would give a badly wrong value.",
        "zh": "由 $L = I\\omega$，$\\omega = \\frac{L}{I} = \\frac{24}{8} = 3\\ \\text{rad/s}$。用 $L$ 乘以 $I$ 而非相除会得到严重错误的值。"
      }
    }
  ],
  "oscillations/simple-harmonic-motion": [
    {
      "type": "mc",
      "question": {
        "en": "What is the defining condition for simple harmonic motion (SHM)?",
        "zh": "简谐运动（SHM）的定义条件是什么？"
      },
      "choices": [
        "The restoring force is proportional to displacement and directed toward equilibrium",
        "The net force is constant in magnitude and direction",
        "The acceleration is zero at the extreme positions",
        "The speed is maximum at the extreme positions"
      ],
      "answer": 0,
      "explanation": {
        "en": "SHM requires a restoring force $F = -kx$, proportional to displacement and pointing back toward equilibrium. Thinking the force is constant describes free fall, not SHM; and speed is actually maximum at equilibrium, zero at the extremes.",
        "zh": "简谐运动要求回复力 $F = -kx$，与位移成正比且指向平衡位置。认为力恒定描述的是自由落体，而不是简谐运动；而且速度实际上在平衡位置最大，在两端为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A mass on a spring oscillates with period $T$. If the mass is quadrupled (spring unchanged), the new period is:",
        "zh": "弹簧上的质量以周期 $T$ 振动。如果质量变为原来的4倍（弹簧不变），新周期是："
      },
      "choices": [
        "$T/2$",
        "$2T$",
        "$T/4$",
        "$4T$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $T = 2\\pi\\sqrt{m/k}$, the period depends on $\\sqrt{m}$. Quadrupling $m$ multiplies $T$ by $\\sqrt{4} = 2$. Multiplying by 4 forgets that the mass is under a square root.",
        "zh": "由于 $T = 2\\pi\\sqrt{m/k}$，周期取决于 $\\sqrt{m}$。质量变为4倍使 $T$ 乘以 $\\sqrt{4} = 2$。乘以4是忘了质量在根号下。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a simple pendulum of small amplitude, the period depends on which quantities?",
        "zh": "对于小振幅的单摆，周期取决于哪些量？"
      },
      "choices": [
        "Length and mass of the bob",
        "Amplitude and mass of the bob",
        "Length and gravitational field strength",
        "Mass and gravitational field strength"
      ],
      "answer": 2,
      "explanation": {
        "en": "For a simple pendulum $T = 2\\pi\\sqrt{L/g}$, so only length $L$ and $g$ matter. Including the bob mass is a common error; the mass cancels out. Amplitude does not appear for small angles.",
        "zh": "对于单摆 $T = 2\\pi\\sqrt{L/g}$，所以只有长度 $L$ 和 $g$ 有影响。把摆球质量算进去是常见错误；质量会被约掉。小角度下振幅不出现在公式中。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In SHM, at which position is the speed of the oscillator greatest?",
        "zh": "在简谐运动中，振子的速率在哪个位置最大？"
      },
      "choices": [
        "The speed is the same everywhere",
        "At the maximum displacement (amplitude)",
        "Halfway between equilibrium and amplitude",
        "At the equilibrium position"
      ],
      "answer": 3,
      "explanation": {
        "en": "At equilibrium all the energy is kinetic, so speed is maximum there. At the amplitude the object momentarily stops, so speed is zero. Confusing where force is largest (the extremes) with where speed is largest leads to the wrong pick.",
        "zh": "在平衡位置全部能量都是动能，所以此处速率最大。在振幅处物体瞬间停止，速率为零。把力最大的地方（两端）与速率最大的地方混淆会导致错误选择。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A block on a spring has amplitude $A$. At what displacement is the kinetic energy equal to the potential energy?",
        "zh": "弹簧上的滑块振幅为 $A$。在什么位移处动能等于势能？"
      },
      "choices": [
        "$x = A/\\sqrt{2}$",
        "$x = A/2$",
        "$x = A$",
        "$x = A/4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Setting $\\frac{1}{2}kx^2 = \\frac{1}{2}\\left(\\frac{1}{2}kA^2\\right)$ gives $x^2 = A^2/2$, so $x = A/\\sqrt{2}$. Answering $A/2$ mistakenly assumes energy is linear in $x$, but spring energy goes as $x^2$.",
        "zh": "令 $\\frac{1}{2}kx^2 = \\frac{1}{2}\\left(\\frac{1}{2}kA^2\\right)$ 得 $x^2 = A^2/2$，所以 $x = A/\\sqrt{2}$。回答 $A/2$ 错误地假设能量与 $x$ 成线性关系，但弹簧能量与 $x^2$ 成正比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which graph relationship correctly describes acceleration versus displacement in SHM?",
        "zh": "以下哪种关系正确描述了简谐运动中加速度与位移的关系？"
      },
      "choices": [
        "Acceleration is directly proportional to displacement, same sign",
        "Acceleration is proportional to displacement but opposite in sign",
        "Acceleration is independent of displacement",
        "Acceleration is proportional to the square of displacement"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $a = -\\frac{k}{m}x$, acceleration is proportional to displacement but points opposite to it (toward equilibrium). Choosing the same-sign relation ignores the negative sign of the restoring force.",
        "zh": "由 $a = -\\frac{k}{m}x$，加速度与位移成正比但方向相反（指向平衡位置）。选择同号关系忽略了回复力的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two identical springs each with constant $k$ are attached in parallel to a mass. The effective spring constant is:",
        "zh": "两个相同的弹簧（劲度系数均为 $k$）并联连接到一个质量上。有效劲度系数为："
      },
      "choices": [
        "$k/2$",
        "$k$",
        "$2k$",
        "$4k$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Springs in parallel add: $k_{eff} = k + k = 2k$, making the system stiffer. Getting $k/2$ confuses the parallel case with springs in series, where the combination is softer.",
        "zh": "并联弹簧相加：$k_{eff} = k + k = 2k$，使系统更硬。得到 $k/2$ 是把并联与串联弄混了，串联时组合更软。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The frequency of a spring-mass oscillator is $f$. If the spring constant is doubled while mass stays the same, the new frequency is:",
        "zh": "弹簧振子的频率为 $f$。如果劲度系数加倍而质量不变，新频率为："
      },
      "choices": [
        "$f/2$",
        "$4f$",
        "$2f$",
        "$\\sqrt{2}\\,f$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $f = \\frac{1}{2\\pi}\\sqrt{k/m}$, frequency scales with $\\sqrt{k}$. Doubling $k$ multiplies $f$ by $\\sqrt{2}$. Answering $2f$ forgets the square root over $k$.",
        "zh": "由于 $f = \\frac{1}{2\\pi}\\sqrt{k/m}$，频率与 $\\sqrt{k}$ 成正比。$k$ 加倍使 $f$ 乘以 $\\sqrt{2}$。回答 $2f$ 忘了 $k$ 上的根号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A pendulum clock keeps correct time on Earth. Taken to the Moon (where $g$ is smaller), the pendulum will:",
        "zh": "一个摆钟在地球上走时准确。带到月球上（那里 $g$ 更小），摆将会："
      },
      "choices": [
        "Swing with a longer period (run slow)",
        "Swing with a shorter period (run fast)",
        "Keep the same period",
        "Stop oscillating"
      ],
      "answer": 0,
      "explanation": {
        "en": "Because $T = 2\\pi\\sqrt{L/g}$, a smaller $g$ gives a larger period, so the clock runs slow. Thinking weaker gravity speeds the swing reverses the inverse relationship between $g$ and $T$.",
        "zh": "因为 $T = 2\\pi\\sqrt{L/g}$，$g$ 更小会使周期更大，所以钟走得慢。认为引力更弱会使摆动更快颠倒了 $g$ 与 $T$ 的反比关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At the instant a SHM oscillator passes through equilibrium, its acceleration is:",
        "zh": "当简谐运动振子经过平衡位置的瞬间，它的加速度为："
      },
      "choices": [
        "Maximum",
        "Zero",
        "Half of its maximum value",
        "Equal to $g$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $a = -\\frac{k}{m}x$ and $x = 0$ at equilibrium, acceleration is zero there (velocity is maximum instead). Picking maximum confuses the equilibrium point with the extremes, where displacement and thus acceleration peak.",
        "zh": "由于 $a = -\\frac{k}{m}x$ 且平衡位置 $x = 0$，此处加速度为零（而速度最大）。选择最大值是把平衡点与两端混淆，两端处位移最大因而加速度最大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the amplitude of a spring oscillator is doubled (mass and $k$ unchanged), the total mechanical energy becomes:",
        "zh": "如果弹簧振子的振幅加倍（质量和 $k$ 不变），总机械能变为："
      },
      "choices": [
        "Unchanged",
        "Doubled",
        "Four times as large",
        "Tripled"
      ],
      "answer": 2,
      "explanation": {
        "en": "Total energy $E = \\frac{1}{2}kA^2$ depends on $A^2$, so doubling $A$ gives $2^2 = 4$ times the energy. Answering 'doubled' treats energy as linear in amplitude, ignoring the square.",
        "zh": "总能量 $E = \\frac{1}{2}kA^2$ 取决于 $A^2$，所以 $A$ 加倍得到 $2^2 = 4$ 倍能量。回答'加倍'把能量当作与振幅成线性关系，忽略了平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The period of a spring-mass oscillator does NOT depend on which of the following?",
        "zh": "弹簧振子的周期不取决于以下哪一项？"
      },
      "choices": [
        "The ratio $m/k$",
        "The mass attached to the spring",
        "The spring constant",
        "The amplitude of oscillation"
      ],
      "answer": 3,
      "explanation": {
        "en": "For ideal SHM, $T = 2\\pi\\sqrt{m/k}$ is independent of amplitude — a larger swing also has larger speed, keeping the period fixed. Assuming a bigger amplitude means a longer period is a common misconception.",
        "zh": "对于理想简谐运动，$T = 2\\pi\\sqrt{m/k}$ 与振幅无关——更大的摆幅也伴随更大的速率，使周期保持不变。认为更大振幅意味着更长周期是常见误解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 0.50 kg mass on a spring with $k = 200$ N/m oscillates in SHM. What is the period in seconds? Use $\\pi = 3.14$. Round to two decimal places.",
        "zh": "一个 0.50 kg 的质量连在 $k = 200$ N/m 的弹簧上做简谐运动。周期是多少秒？取 $\\pi = 3.14$。保留两位小数。"
      },
      "answer": "0.31",
      "accept": [
        "0.31 s",
        "0.314",
        "0.3",
        "0.31s",
        ".31"
      ],
      "explanation": {
        "en": "$T = 2\\pi\\sqrt{m/k} = 2(3.14)\\sqrt{0.50/200} = 6.28\\sqrt{0.0025} = 6.28(0.05) = 0.31$ s. Forgetting the square root of the mass-to-$k$ ratio is the usual slip.",
        "zh": "$T = 2\\pi\\sqrt{m/k} = 2(3.14)\\sqrt{0.50/200} = 6.28\\sqrt{0.0025} = 6.28(0.05) = 0.31$ 秒。忘记对质量与 $k$ 之比取平方根是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A simple pendulum has length 1.0 m on Earth ($g = 9.8$ m/s$^2$). What is its period in seconds? Use $\\pi = 3.14$. Round to one decimal place.",
        "zh": "地球上（$g = 9.8$ m/s$^2$）一个单摆长 1.0 m。它的周期是多少秒？取 $\\pi = 3.14$。保留一位小数。"
      },
      "answer": "2.0",
      "accept": [
        "2.0 s",
        "2",
        "2.01",
        "2 s",
        "2.0s"
      ],
      "explanation": {
        "en": "$T = 2\\pi\\sqrt{L/g} = 6.28\\sqrt{1.0/9.8} = 6.28(0.319) \\approx 2.0$ s. Using $L/g$ without the square root, or swapping $L$ and $g$, produces a wrong value.",
        "zh": "$T = 2\\pi\\sqrt{L/g} = 6.28\\sqrt{1.0/9.8} = 6.28(0.319) \\approx 2.0$ 秒。不取平方根，或把 $L$ 与 $g$ 交换，都会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spring-mass oscillator has a period of 0.40 s. What is its frequency in Hz?",
        "zh": "一个弹簧振子的周期为 0.40 s。它的频率是多少赫兹？"
      },
      "answer": "2.5",
      "accept": [
        "2.5 Hz",
        "2.50",
        "2.5Hz",
        "5/2"
      ],
      "explanation": {
        "en": "Frequency is the reciprocal of period: $f = 1/T = 1/0.40 = 2.5$ Hz. Multiplying instead of dividing, or confusing $f$ with angular frequency $\\omega$, gives the wrong number.",
        "zh": "频率是周期的倒数：$f = 1/T = 1/0.40 = 2.5$ Hz。用乘法而不是除法，或把 $f$ 与角频率 $\\omega$ 混淆，会得到错误数字。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A 2.0 kg block on a spring ($k = 50$ N/m) oscillates with amplitude 0.10 m. What is the total mechanical energy in joules?",
        "zh": "一个 2.0 kg 的滑块连在弹簧上（$k = 50$ N/m），以 0.10 m 的振幅振动。总机械能是多少焦耳？"
      },
      "answer": "0.25",
      "accept": [
        "0.25 J",
        "0.25J",
        ".25",
        "1/4"
      ],
      "explanation": {
        "en": "$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(50)(0.10)^2 = \\frac{1}{2}(50)(0.01) = 0.25$ J. Forgetting to square the amplitude, or including the mass, gives a wrong energy; only $k$ and $A$ enter.",
        "zh": "$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(50)(0.10)^2 = \\frac{1}{2}(50)(0.01) = 0.25$ J。忘记对振幅平方，或把质量算进去，会得到错误能量；只有 $k$ 和 $A$ 进入公式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the block in the previous setup ($E = 0.25$ J, mass 2.0 kg), what is its maximum speed in m/s? Round to two decimal places.",
        "zh": "对于上题中的滑块（$E = 0.25$ J，质量 2.0 kg），它的最大速率是多少 m/s？保留两位小数。"
      },
      "answer": "0.50",
      "accept": [
        "0.5",
        "0.50 m/s",
        "0.5 m/s",
        ".5",
        "0.5m/s"
      ],
      "explanation": {
        "en": "At equilibrium all energy is kinetic: $\\frac{1}{2}mv_{max}^2 = 0.25$, so $v_{max}^2 = 0.25$ and $v_{max} = 0.50$ m/s. Forgetting the factor $\\frac{1}{2}$ or not taking the square root gives a wrong speed.",
        "zh": "在平衡位置全部能量都是动能：$\\frac{1}{2}mv_{max}^2 = 0.25$，所以 $v_{max}^2 = 0.25$，$v_{max} = 0.50$ m/s。忘记 $\\frac{1}{2}$ 因子或不取平方根会得到错误速率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spring-mass system has $k = 8.0$ N/m and $m = 2.0$ kg. What is its angular frequency $\\omega$ in rad/s?",
        "zh": "一个弹簧系统 $k = 8.0$ N/m，$m = 2.0$ kg。它的角频率 $\\omega$ 是多少 rad/s？"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.0 rad/s",
        "2 rad/s",
        "2.00"
      ],
      "explanation": {
        "en": "$\\omega = \\sqrt{k/m} = \\sqrt{8.0/2.0} = \\sqrt{4} = 2.0$ rad/s. Using $k/m$ without the square root, or inverting the ratio, gives the wrong angular frequency.",
        "zh": "$\\omega = \\sqrt{k/m} = \\sqrt{8.0/2.0} = \\sqrt{4} = 2.0$ rad/s。不取平方根用 $k/m$，或把比值颠倒，会得到错误的角频率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A pendulum has a period of 2.0 s on Earth. If moved to a planet where $g$ is 4 times Earth's value, what is the new period in seconds?",
        "zh": "一个单摆在地球上周期为 2.0 s。若移到一个 $g$ 是地球4倍的行星上，新周期是多少秒？"
      },
      "answer": "1.0",
      "accept": [
        "1",
        "1.0 s",
        "1 s",
        "1.00",
        "1.0s"
      ],
      "explanation": {
        "en": "Since $T \\propto 1/\\sqrt{g}$, multiplying $g$ by 4 divides the period by $\\sqrt{4} = 2$: $2.0/2 = 1.0$ s. Dividing by 4 directly ignores that $g$ sits under a square root.",
        "zh": "由于 $T \\propto 1/\\sqrt{g}$，$g$ 乘以4使周期除以 $\\sqrt{4} = 2$：$2.0/2 = 1.0$ 秒。直接除以4忽略了 $g$ 在平方根下。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A mass on a spring oscillates with angular frequency $\\omega = 5.0$ rad/s and amplitude 0.20 m. What is its maximum acceleration in m/s$^2$? Round to one decimal place.",
        "zh": "一个弹簧上的质量以角频率 $\\omega = 5.0$ rad/s、振幅 0.20 m 振动。它的最大加速度是多少 m/s$^2$？保留一位小数。"
      },
      "answer": "5.0",
      "accept": [
        "5",
        "5.0 m/s^2",
        "5 m/s^2",
        "5.00",
        "5.0m/s^2"
      ],
      "explanation": {
        "en": "Maximum acceleration is $a_{max} = \\omega^2 A = (5.0)^2(0.20) = 25(0.20) = 5.0$ m/s$^2$. Forgetting to square $\\omega$ (using $\\omega A$ instead) gives a value five times too small.",
        "zh": "最大加速度为 $a_{max} = \\omega^2 A = (5.0)^2(0.20) = 25(0.20) = 5.0$ m/s$^2$。忘记对 $\\omega$ 平方（用 $\\omega A$）会得到小5倍的值。"
      }
    }
  ],
  "fluids/density-pressure-buoyancy": [
    {
      "type": "mc",
      "question": {
        "en": "Which equation correctly defines the density of a uniform object?",
        "zh": "下列哪个方程正确定义了均匀物体的密度？"
      },
      "choices": [
        "$\\rho = \\frac{m}{V}$",
        "$\\rho = mV$",
        "$\\rho = \\frac{V}{m}$",
        "$\\rho = \\frac{F}{A}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Density is mass per unit volume, $\\rho = \\frac{m}{V}$. Multiplying mass by volume, or inverting the ratio to $\\frac{V}{m}$, does not give the standard definition, and $\\frac{F}{A}$ is pressure, not density.",
        "zh": "密度是单位体积的质量，$\\rho = \\frac{m}{V}$。把质量与体积相乘，或把比值倒过来写成 $\\frac{V}{m}$，都不是标准定义，而 $\\frac{F}{A}$ 是压强而非密度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the SI unit of pressure?",
        "zh": "压强的国际单位（SI）是什么？"
      },
      "choices": [
        "newton (N)",
        "pascal (Pa)",
        "joule (J)",
        "watt (W)"
      ],
      "answer": 1,
      "explanation": {
        "en": "Pressure is force per area, so its unit is the pascal, where $1\\,\\text{Pa} = 1\\,\\text{N/m}^2$. The newton is force, the joule is energy, and the watt is power.",
        "zh": "压强是单位面积上的力，因此单位是帕斯卡，$1\\,\\text{Pa} = 1\\,\\text{N/m}^2$。牛顿是力，焦耳是能量，瓦特是功率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Archimedes' principle states that the buoyant force on an object equals the weight of the ______.",
        "zh": "阿基米德原理指出，物体所受浮力等于被______的重量。"
      },
      "choices": [
        "object itself",
        "object in air",
        "fluid displaced by the object",
        "container"
      ],
      "answer": 2,
      "explanation": {
        "en": "The buoyant force equals the weight of the fluid the object pushes out of the way (the displaced fluid). Equating it to the object's own weight only holds for a freely floating object, not in general.",
        "zh": "浮力等于物体排开的流体的重量。把浮力等于物体自身重量只在自由漂浮时成立，并非普遍成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does pressure in a static fluid increase with depth?",
        "zh": "为什么静止流体中的压强随深度增加？"
      },
      "choices": [
        "The fluid becomes less dense with depth",
        "The fluid moves faster deeper down",
        "Gravity is stronger at greater depth",
        "The weight of the fluid above pushes down, adding $\\rho g h$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Deeper points support more fluid weight above them, so gauge pressure grows as $\\rho g h$. Gravity does not measurably change over such depths, and the fluid is essentially incompressible, so density and speed are not the cause.",
        "zh": "越深处上方支撑的流体越多，因此表压按 $\\rho g h$ 增大。在这样的深度范围内重力基本不变，流体也几乎不可压缩，所以密度或流速都不是原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two solid blocks have the same volume but different masses. Both are fully submerged in water. Which experiences the greater buoyant force?",
        "zh": "两个实心块体积相同但质量不同，都完全浸没在水中。哪个受到的浮力更大？"
      },
      "choices": [
        "They experience the same buoyant force",
        "The lighter block",
        "The heavier block",
        "Cannot be determined without their densities"
      ],
      "answer": 0,
      "explanation": {
        "en": "Buoyant force depends only on the volume of fluid displaced, $F_b = \\rho_{fluid} g V$. Equal submerged volumes displace equal fluid, so the buoyant forces are equal even though the heavier block weighs more.",
        "zh": "浮力只取决于排开流体的体积，$F_b = \\rho_{fluid} g V$。浸没体积相同则排水相同，所以浮力相等，尽管较重的块自身重量更大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object will float in a fluid when its average density is:",
        "zh": "当物体的平均密度满足什么条件时，它会漂浮在流体中？"
      },
      "choices": [
        "greater than the fluid's density",
        "less than the fluid's density",
        "exactly zero",
        "equal to its own weight"
      ],
      "answer": 1,
      "explanation": {
        "en": "If the object is less dense than the fluid, the fluid it can displace weighs more than the object, so it floats. An object denser than the fluid sinks; comparing density to a weight mixes up different quantities.",
        "zh": "若物体密度小于流体，它能排开的流体重量大于自身重量，因而漂浮。密度大于流体则下沉；把密度和重量相比较是混淆了不同的物理量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Pascal's principle says that a pressure change applied to an enclosed fluid is:",
        "zh": "帕斯卡原理指出，施加在封闭流体上的压强变化会："
      },
      "choices": [
        "felt only at the point where it is applied",
        "reduced as it spreads through the fluid",
        "transmitted undiminished to every part of the fluid",
        "converted into heat"
      ],
      "answer": 2,
      "explanation": {
        "en": "In an enclosed incompressible fluid, an applied pressure change is transmitted equally to all points, which is what makes hydraulic lifts work. It is not localized nor weakened as it spreads.",
        "zh": "在封闭的不可压缩流体中，施加的压强变化会均等地传到各处，这正是液压千斤顶的原理。它不会只停留在一处，也不会在传播中减弱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two open containers of different shapes are filled with water to the same depth. How does the pressure at the bottom compare?",
        "zh": "两个形状不同的敞口容器中的水注到相同深度。底部的压强相比如何？"
      },
      "choices": [
        "The narrower container has higher bottom pressure",
        "The wider container has higher bottom pressure",
        "The container holding more water has higher bottom pressure",
        "The pressures are equal because pressure depends only on depth"
      ],
      "answer": 3,
      "explanation": {
        "en": "Hydrostatic gauge pressure is $\\rho g h$, set by depth alone, not by container shape or total volume. Assuming more water means more pressure is the hydrostatic paradox and is incorrect.",
        "zh": "静水表压为 $\\rho g h$，只由深度决定，与容器形状或总水量无关。认为水多压强就大是静水佯谬，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is a correct SI unit for density?",
        "zh": "下列哪个是密度的正确国际单位？"
      },
      "choices": [
        "$\\text{kg/m}^3$",
        "$\\text{kg}\\cdot\\text{m}^3$",
        "$\\text{N/m}^2$",
        "$\\text{m}^3/\\text{kg}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Density is mass over volume, giving $\\text{kg/m}^3$. Multiplying mass by volume, inverting to $\\text{m}^3/\\text{kg}$, or using $\\text{N/m}^2$ (which is pressure) are all wrong.",
        "zh": "密度是质量除以体积，得到 $\\text{kg/m}^3$。质量乘体积、倒成 $\\text{m}^3/\\text{kg}$，或用 $\\text{N/m}^2$（那是压强），都是错的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is absolute pressure at a point in a fluid related to gauge pressure?",
        "zh": "流体中某点的绝对压强与表压有何关系？"
      },
      "choices": [
        "Absolute pressure equals gauge pressure",
        "Absolute pressure = gauge pressure + atmospheric pressure",
        "Absolute pressure = gauge pressure - atmospheric pressure",
        "Absolute pressure = atmospheric pressure - gauge pressure"
      ],
      "answer": 1,
      "explanation": {
        "en": "Gauge pressure is measured relative to the atmosphere, so absolute pressure adds atmospheric pressure back on: $P = P_{atm} + \\rho g h$. Subtracting the atmosphere instead of adding it reverses the correct relationship.",
        "zh": "表压是相对大气测得的，所以绝对压强要把大气压加回来：$P = P_{atm} + \\rho g h$。用减法而非加法就把关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A steel ball is released and sinks in water. What can you conclude about the forces on it while sinking?",
        "zh": "一个钢球放入水中后下沉。关于下沉过程中它受的力，可以得出什么结论？"
      },
      "choices": [
        "The buoyant force is zero",
        "The buoyant force is greater than its weight",
        "Its weight is greater than the buoyant force",
        "Its weight equals the buoyant force"
      ],
      "answer": 2,
      "explanation": {
        "en": "Sinking means the net force is downward, so the weight exceeds the buoyant force. A submerged object still feels a nonzero buoyant force, and equal forces would give no downward acceleration.",
        "zh": "下沉说明合力向下，因此重力大于浮力。浸没的物体仍受到非零浮力，若两力相等则不会向下加速。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A helium balloon rises through the air. The best explanation is that:",
        "zh": "氦气球在空气中上升，最佳的解释是："
      },
      "choices": [
        "helium has no weight",
        "the air pushes only upward on it",
        "gravity does not act on gases",
        "the buoyant force from the air exceeds the balloon's weight"
      ],
      "answer": 3,
      "explanation": {
        "en": "Air is denser than helium, so the weight of displaced air (the buoyant force) is larger than the balloon's total weight, giving a net upward force. Helium still has weight and gravity still acts on it.",
        "zh": "空气比氦气密度大，因此排开空气的重量（即浮力）大于气球总重量，产生向上的合力。氦气仍有重量，重力仍作用于它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A block has a mass of 300 g and a volume of 150 cm³. What is its density in g/cm³?",
        "zh": "一个块的质量为 300 g，体积为 150 cm³。它的密度是多少 g/cm³？"
      },
      "answer": "2.0",
      "accept": [
        "2",
        "2.00",
        "2 g/cm^3",
        "2.0 g/cm^3",
        "2 g/cm3"
      ],
      "explanation": {
        "en": "Density is $\\rho = \\frac{m}{V} = \\frac{300\\,\\text{g}}{150\\,\\text{cm}^3} = 2.0\\,\\text{g/cm}^3$. Dividing volume by mass would invert the formula and give the wrong result.",
        "zh": "密度为 $\\rho = \\frac{m}{V} = \\frac{300\\,\\text{g}}{150\\,\\text{cm}^3} = 2.0\\,\\text{g/cm}^3$。用体积除以质量会把公式弄反，得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the gauge pressure (in Pa) at a depth of 20 m in fresh water? Use $\\rho = 1000\\,\\text{kg/m}^3$ and $g = 9.8\\,\\text{m/s}^2$.",
        "zh": "在淡水中 20 m 深处的表压是多少（Pa）？取 $\\rho = 1000\\,\\text{kg/m}^3$，$g = 9.8\\,\\text{m/s}^2$。"
      },
      "answer": "196000",
      "accept": [
        "196000 Pa",
        "1.96e5",
        "1.96 x 10^5",
        "196 kPa",
        "196000.0"
      ],
      "explanation": {
        "en": "Gauge pressure is $P = \\rho g h = 1000 \\times 9.8 \\times 20 = 196000\\,\\text{Pa}$. Forgetting the $g$ factor or the density gives a far smaller wrong value.",
        "zh": "表压为 $P = \\rho g h = 1000 \\times 9.8 \\times 20 = 196000\\,\\text{Pa}$。漏掉 $g$ 或密度会得到小得多的错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object of volume 0.005 m³ is fully submerged in water. What is the buoyant force on it, in newtons? Use $\\rho = 1000\\,\\text{kg/m}^3$ and $g = 9.8\\,\\text{m/s}^2$.",
        "zh": "一个体积为 0.005 m³ 的物体完全浸没在水中。它受到的浮力是多少牛顿？取 $\\rho = 1000\\,\\text{kg/m}^3$，$g = 9.8\\,\\text{m/s}^2$。"
      },
      "answer": "49",
      "accept": [
        "49 N",
        "49.0",
        "49.0 N"
      ],
      "explanation": {
        "en": "The buoyant force is $F_b = \\rho_{fluid} g V = 1000 \\times 9.8 \\times 0.005 = 49\\,\\text{N}$. Using the object's mass instead of the displaced fluid's volume would give the wrong force.",
        "zh": "浮力为 $F_b = \\rho_{fluid} g V = 1000 \\times 9.8 \\times 0.005 = 49\\,\\text{N}$。用物体的质量而不是排开流体的体积会算错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force of 500 N is spread uniformly over an area of 0.25 m². What is the pressure in pascals?",
        "zh": "500 N 的力均匀分布在 0.25 m² 的面积上。压强是多少帕斯卡？"
      },
      "answer": "2000",
      "accept": [
        "2000 Pa",
        "2000.0",
        "2 kPa",
        "2.0e3"
      ],
      "explanation": {
        "en": "Pressure is $P = \\frac{F}{A} = \\frac{500}{0.25} = 2000\\,\\text{Pa}$. Multiplying force by area instead of dividing gives a very different, incorrect value.",
        "zh": "压强为 $P = \\frac{F}{A} = \\frac{500}{0.25} = 2000\\,\\text{Pa}$。把力乘以面积而不是除以面积会得到完全不同的错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A wooden block of density 600 kg/m³ floats in water (1000 kg/m³). What fraction of its volume is submerged? Give a decimal.",
        "zh": "密度为 600 kg/m³ 的木块漂浮在水（1000 kg/m³）中。它浸没体积的比例是多少？用小数表示。"
      },
      "answer": "0.6",
      "accept": [
        "0.60",
        ".6",
        "3/5",
        "60%"
      ],
      "explanation": {
        "en": "For a floating object the submerged fraction equals $\\frac{\\rho_{object}}{\\rho_{fluid}} = \\frac{600}{1000} = 0.6$. Dividing the fluid density by the object density inverts the ratio and is wrong.",
        "zh": "对漂浮物体，浸没比例等于 $\\frac{\\rho_{object}}{\\rho_{fluid}} = \\frac{600}{1000} = 0.6$。用流体密度除以物体密度会把比值弄反，是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object weighs 50 N in air. When fully submerged in water it experiences a buoyant force of 20 N. What is its apparent weight (in N) while submerged?",
        "zh": "一个物体在空气中重 50 N。完全浸没在水中时受到 20 N 的浮力。它浸没时的视重（N）是多少？"
      },
      "answer": "30",
      "accept": [
        "30 N",
        "30.0",
        "30.0 N"
      ],
      "explanation": {
        "en": "Apparent weight is the true weight minus the buoyant force: $50 - 20 = 30\\,\\text{N}$. Adding the buoyant force instead of subtracting it would wrongly make the object seem heavier.",
        "zh": "视重等于真实重量减去浮力：$50 - 20 = 30\\,\\text{N}$。若把浮力相加而非相减，会错误地让物体显得更重。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a hydraulic lift, a 100 N force is applied to a small piston of area 0.01 m². The large piston has area 0.05 m². What output force (in N) does the large piston deliver?",
        "zh": "在液压千斤顶中，对面积为 0.01 m² 的小活塞施加 100 N 的力。大活塞面积为 0.05 m²。大活塞输出的力（N）是多少？"
      },
      "answer": "500",
      "accept": [
        "500 N",
        "500.0",
        "500.0 N"
      ],
      "explanation": {
        "en": "Pascal's principle gives equal pressure, so $F_2 = F_1 \\frac{A_2}{A_1} = 100 \\times \\frac{0.05}{0.01} = 500\\,\\text{N}$. Using the area ratio upside down would shrink the force instead of multiplying it.",
        "zh": "帕斯卡原理要求压强相等，所以 $F_2 = F_1 \\frac{A_2}{A_1} = 100 \\times \\frac{0.05}{0.01} = 500\\,\\text{N}$。若把面积比倒过来用，会缩小而非放大力。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At what depth (in meters) in fresh water is the gauge pressure 49000 Pa? Use $\\rho = 1000\\,\\text{kg/m}^3$ and $g = 9.8\\,\\text{m/s}^2$.",
        "zh": "在淡水中，深度为多少米时表压为 49000 Pa？取 $\\rho = 1000\\,\\text{kg/m}^3$，$g = 9.8\\,\\text{m/s}^2$。"
      },
      "answer": "5",
      "accept": [
        "5 m",
        "5.0",
        "5.0 m",
        "5.00"
      ],
      "explanation": {
        "en": "Solving $P = \\rho g h$ for depth gives $h = \\frac{P}{\\rho g} = \\frac{49000}{1000 \\times 9.8} = 5\\,\\text{m}$. Multiplying the pressure by $\\rho g$ instead of dividing would give an enormous wrong depth.",
        "zh": "由 $P = \\rho g h$ 解出深度：$h = \\frac{P}{\\rho g} = \\frac{49000}{1000 \\times 9.8} = 5\\,\\text{m}$。若把压强乘以 $\\rho g$ 而非相除，会得到巨大的错误深度。"
      }
    }
  ],
  "fluids/fluid-flow-bernoulli": [
    {
      "type": "mc",
      "question": {
        "en": "For an ideal incompressible fluid flowing through a pipe, the continuity equation is:",
        "zh": "对于在管道中流动的理想不可压缩流体，连续性方程是："
      },
      "choices": [
        "$A_1 v_1 = A_2 v_2$",
        "$\\frac{A_1}{v_1} = \\frac{A_2}{v_2}$",
        "$A_1 + v_1 = A_2 + v_2$",
        "$A_1 v_2 = A_2 v_1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Because the same volume passes each cross-section per second, $A_1 v_1 = A_2 v_2$. Adding area and speed, or pairing each area with the other section's speed, does not conserve the volume flow rate.",
        "zh": "由于每秒通过各截面的体积相同，故 $A_1 v_1 = A_2 v_2$。把面积与速度相加，或把每个面积配到另一截面的速度上，都不能守恒体积流量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "According to Bernoulli's principle, in a horizontal pipe where a fluid flows faster, the pressure is:",
        "zh": "根据伯努利原理，在水平管道中流体流得越快的地方，压强："
      },
      "choices": [
        "higher",
        "lower",
        "unchanged",
        "zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "At constant height, $P + \\frac{1}{2}\\rho v^2$ is constant, so where speed rises the pressure must fall. Assuming faster flow means higher pressure gets the trade-off backwards.",
        "zh": "在等高处，$P + \\frac{1}{2}\\rho v^2$ 为常量，所以流速升高处压强必然降低。认为流速越快压强越大，正好把这种此消彼长弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression is Bernoulli's equation for an ideal fluid?",
        "zh": "下列哪个表达式是理想流体的伯努利方程？"
      },
      "choices": [
        "$P + \\rho g h = \\text{constant}$",
        "$P + \\frac{1}{2} m v^2 + m g h = \\text{constant}$",
        "$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$",
        "$\\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Bernoulli's equation sums static pressure, dynamic pressure, and the height term: $P + \\frac{1}{2}\\rho v^2 + \\rho g h$. Dropping the dynamic-pressure term, or using mass $m$ instead of density $\\rho$, breaks the per-volume energy balance.",
        "zh": "伯努利方程把静压、动压和高度项相加：$P + \\frac{1}{2}\\rho v^2 + \\rho g h$。漏掉动压项，或用质量 $m$ 代替密度 $\\rho$，都会破坏单位体积的能量平衡。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Bernoulli's equation is derived for an ideal fluid. Which set of assumptions does that require?",
        "zh": "伯努利方程是针对理想流体推导的。它需要下列哪组假设？"
      },
      "choices": [
        "compressible, viscous, turbulent",
        "compressible, nonviscous, steady",
        "incompressible, viscous, steady",
        "incompressible, nonviscous, steady (streamline) flow"
      ],
      "answer": 3,
      "explanation": {
        "en": "An ideal fluid is incompressible and nonviscous, moving in steady streamline flow. Allowing compressibility, viscosity, or turbulence violates the conditions under which the equation holds.",
        "zh": "理想流体不可压缩、无粘滞，做稳定的流线型流动。允许可压缩、有粘滞或湍流，都会破坏方程成立的条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Water flows through a pipe that narrows to a smaller cross-sectional area. In the narrow section the water:",
        "zh": "水流过一段横截面变小的管道。在窄段处，水会："
      },
      "choices": [
        "speeds up",
        "slows down",
        "keeps the same speed",
        "stops completely"
      ],
      "answer": 0,
      "explanation": {
        "en": "By continuity $Av$ is constant, so a smaller area forces a larger speed. Expecting the fluid to slow in the narrow section reverses the correct area-speed relationship.",
        "zh": "由连续性方程 $Av$ 为常量，面积变小则速度必增大。认为流体在窄段会变慢，正好把面积与速度的关系弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The continuity equation for an incompressible fluid is fundamentally a statement of conservation of:",
        "zh": "不可压缩流体的连续性方程本质上是什么守恒的表述？"
      },
      "choices": [
        "momentum",
        "mass (volume flow rate)",
        "energy",
        "pressure"
      ],
      "answer": 1,
      "explanation": {
        "en": "Continuity says the same mass (and, since density is fixed, the same volume) passes each section per second. Bernoulli's equation is the energy statement; continuity is about conserved mass, not momentum or pressure.",
        "zh": "连续性方程表明每秒通过各截面的质量相同（密度不变时体积也相同）。伯努利方程才是能量表述；连续性关乎质量守恒，而非动量或压强。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a diagram of streamlines, where the streamlines are packed closely together the fluid is moving:",
        "zh": "在流线图中，流线密集聚拢的地方，流体的运动是："
      },
      "choices": [
        "slower",
        "not moving",
        "faster",
        "at the same speed everywhere"
      ],
      "answer": 2,
      "explanation": {
        "en": "Closely spaced streamlines correspond to a smaller effective area, so by continuity the speed is higher there. Reading crowded streamlines as slow flow contradicts the area-speed relationship.",
        "zh": "流线密集对应较小的有效截面，由连续性可知那里流速更高。把密集流线理解为流速慢，与面积—速度关系相矛盾。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "During a windstorm, air moves rapidly across the top of a flat roof while the air inside the house is nearly still. The roof tends to be pushed:",
        "zh": "在大风中，空气快速掠过平屋顶，而屋内空气几乎静止。屋顶倾向于被："
      },
      "choices": [
        "downward, because moving air is heavier",
        "sideways in the wind direction only",
        "not at all, since air has no effect",
        "upward, because faster air above means lower pressure there"
      ],
      "answer": 3,
      "explanation": {
        "en": "Fast air over the roof has lower pressure than the still air below, so the pressure difference pushes the roof up. The lift comes from the pressure difference, not from air being heavier when moving.",
        "zh": "屋顶上方的快速空气压强低于下方静止空气，压强差把屋顶向上推。升力来自压强差，而不是空气运动时变重。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the SI unit of volume flow rate?",
        "zh": "体积流量的国际单位是什么？"
      },
      "choices": [
        "$\\text{m}^3/\\text{s}$",
        "$\\text{m/s}$",
        "$\\text{kg/s}$",
        "$\\text{Pa}\\cdot\\text{s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Volume flow rate is $Q = Av$, giving $\\text{m}^2 \\times \\text{m/s} = \\text{m}^3/\\text{s}$. Plain $\\text{m/s}$ is a speed and $\\text{kg/s}$ is a mass flow rate, not a volume flow rate.",
        "zh": "体积流量 $Q = Av$，得到 $\\text{m}^2 \\times \\text{m/s} = \\text{m}^3/\\text{s}$。单纯的 $\\text{m/s}$ 是速度，$\\text{kg/s}$ 是质量流量，都不是体积流量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Torricelli's theorem gives the speed of fluid leaving a small hole a depth $h$ below the surface of an open tank as:",
        "zh": "托里拆利定理给出流体从开口水箱液面下方深度 $h$ 处小孔流出的速度为："
      },
      "choices": [
        "$v = gh$",
        "$v = \\sqrt{2gh}$",
        "$v = 2gh$",
        "$v = \\sqrt{gh}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Applying Bernoulli's equation between the surface and the hole gives $v = \\sqrt{2gh}$, the same as free-fall from height $h$. Forgetting the square root, or dropping the factor of 2, gives the wrong speed.",
        "zh": "在液面与小孔之间应用伯努利方程得 $v = \\sqrt{2gh}$，与从高度 $h$ 自由下落相同。漏掉根号或丢掉因子 2 都会算错速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A fluid flows along a horizontal pipe (constant height). Bernoulli's equation then reduces to which conserved quantity?",
        "zh": "流体沿水平管道（高度不变）流动。此时伯努利方程简化为哪个守恒量？"
      },
      "choices": [
        "$\\rho g h$ alone",
        "$P$ alone",
        "$P + \\frac{1}{2}\\rho v^2$",
        "$\\frac{1}{2}\\rho v^2$ alone"
      ],
      "answer": 2,
      "explanation": {
        "en": "At constant height the $\\rho g h$ term is the same on both sides and cancels, leaving $P + \\frac{1}{2}\\rho v^2$ constant. Keeping only the pressure or only the dynamic-pressure term ignores their trade-off.",
        "zh": "高度不变时 $\\rho g h$ 项在两边相同并抵消，剩下 $P + \\frac{1}{2}\\rho v^2$ 为常量。只保留压强项或只保留动压项，都忽略了两者之间的此消彼长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Real fluids differ from the ideal fluid in Bernoulli's equation mainly because real fluids have:",
        "zh": "真实流体与伯努利方程中的理想流体的主要区别在于，真实流体具有："
      },
      "choices": [
        "no mass",
        "infinite density",
        "negative pressure",
        "viscosity (internal friction)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Real fluids have viscosity, an internal friction that dissipates energy and is neglected in the ideal-fluid model. Real fluids still have finite mass and density and do not require negative pressure.",
        "zh": "真实流体具有粘滞性，即一种耗散能量的内摩擦，而理想流体模型忽略了它。真实流体仍具有有限的质量和密度，也不需要负压。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Water flows at 3 m/s through a pipe of cross-sectional area 0.02 m². The pipe narrows to 0.005 m². What is the water's speed (in m/s) in the narrow section?",
        "zh": "水以 3 m/s 的速度流过横截面积为 0.02 m² 的管道。管道收窄到 0.005 m²。窄段中水的速度（m/s）是多少？"
      },
      "answer": "12",
      "accept": [
        "12 m/s",
        "12.0",
        "12.0 m/s"
      ],
      "explanation": {
        "en": "By continuity $v_2 = \\frac{A_1 v_1}{A_2} = \\frac{0.02 \\times 3}{0.005} = 12\\,\\text{m/s}$. Using the area ratio upside down would wrongly predict the water slowing down.",
        "zh": "由连续性方程 $v_2 = \\frac{A_1 v_1}{A_2} = \\frac{0.02 \\times 3}{0.005} = 12\\,\\text{m/s}$。若把面积比倒过来用，会错误地预测水变慢。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Water moves at 2 m/s through a pipe of cross-sectional area 0.1 m². What is the volume flow rate in m³/s?",
        "zh": "水以 2 m/s 的速度流过横截面积为 0.1 m² 的管道。体积流量是多少 m³/s？"
      },
      "answer": "0.2",
      "accept": [
        "0.20",
        ".2",
        "0.2 m^3/s",
        "0.2 m3/s"
      ],
      "explanation": {
        "en": "Volume flow rate is $Q = Av = 0.1 \\times 2 = 0.2\\,\\text{m}^3/\\text{s}$. Dividing area by speed instead of multiplying would give an incorrect value.",
        "zh": "体积流量为 $Q = Av = 0.1 \\times 2 = 0.2\\,\\text{m}^3/\\text{s}$。用面积除以速度而不是相乘会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A large open tank has a small hole 5.0 m below the water surface. Using Torricelli's theorem with $g = 9.8\\,\\text{m/s}^2$, what is the exit speed in m/s? Round to one decimal place.",
        "zh": "一个大开口水箱在水面下方 5.0 m 处有一个小孔。用托里拆利定理，取 $g = 9.8\\,\\text{m/s}^2$，出流速度是多少 m/s？保留一位小数。"
      },
      "answer": "9.9",
      "accept": [
        "9.90",
        "9.899",
        "sqrt(98)",
        "9.9 m/s"
      ],
      "explanation": {
        "en": "Torricelli's theorem gives $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 5} = \\sqrt{98} \\approx 9.9\\,\\text{m/s}$. Forgetting the square root would leave 98 and greatly overstate the speed.",
        "zh": "托里拆利定理给出 $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 5} = \\sqrt{98} \\approx 9.9\\,\\text{m/s}$。漏掉根号会得到 98，从而大大高估速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Water ($\\rho = 1000\\,\\text{kg/m}^3$) flows at 4 m/s. What is its dynamic pressure $\\frac{1}{2}\\rho v^2$, in pascals?",
        "zh": "水（$\\rho = 1000\\,\\text{kg/m}^3$）以 4 m/s 流动。它的动压 $\\frac{1}{2}\\rho v^2$ 是多少帕斯卡？"
      },
      "answer": "8000",
      "accept": [
        "8000 Pa",
        "8000.0",
        "8 kPa",
        "8.0e3"
      ],
      "explanation": {
        "en": "Dynamic pressure is $\\frac{1}{2}\\rho v^2 = \\frac{1}{2} \\times 1000 \\times 4^2 = 8000\\,\\text{Pa}$. Forgetting to square the speed, or dropping the factor of one-half, gives a wrong value.",
        "zh": "动压为 $\\frac{1}{2}\\rho v^2 = \\frac{1}{2} \\times 1000 \\times 4^2 = 8000\\,\\text{Pa}$。忘记把速度平方，或丢掉二分之一因子，都会算错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Water flows at 2 m/s in a pipe. The pipe's cross-sectional area then decreases to one-quarter of its original value. What is the new speed in m/s?",
        "zh": "水在管道中以 2 m/s 流动。随后管道横截面积减小到原来的四分之一。新的速度是多少 m/s？"
      },
      "answer": "8",
      "accept": [
        "8 m/s",
        "8.0",
        "8.0 m/s"
      ],
      "explanation": {
        "en": "By continuity, quartering the area quadruples the speed: $v_2 = 2 \\times 4 = 8\\,\\text{m/s}$. Assuming the speed drops with area misapplies the inverse relationship between area and speed.",
        "zh": "由连续性方程，面积减到四分之一则速度变为四倍：$v_2 = 2 \\times 4 = 8\\,\\text{m/s}$。认为速度随面积减小而减小，是误用了面积与速度的反比关系。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A pipe carries a volume flow rate of 0.03 m³/s through a cross-sectional area of 0.01 m². What is the flow speed in m/s?",
        "zh": "一根管道以 0.03 m³/s 的体积流量通过 0.01 m² 的横截面积。流速是多少 m/s？"
      },
      "answer": "3",
      "accept": [
        "3 m/s",
        "3.0",
        "3.0 m/s"
      ],
      "explanation": {
        "en": "Since $Q = Av$, the speed is $v = \\frac{Q}{A} = \\frac{0.03}{0.01} = 3\\,\\text{m/s}$. Multiplying flow rate by area instead of dividing would give the wrong speed.",
        "zh": "由 $Q = Av$，速度为 $v = \\frac{Q}{A} = \\frac{0.03}{0.01} = 3\\,\\text{m/s}$。用流量乘以面积而不是相除会算错速度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using Torricelli's theorem, from what depth $h$ (in meters) below the surface does water exit a hole at 14 m/s? Use $g = 9.8\\,\\text{m/s}^2$.",
        "zh": "用托里拆利定理，水以 14 m/s 从小孔流出时，孔在液面下方的深度 $h$（米）是多少？取 $g = 9.8\\,\\text{m/s}^2$。"
      },
      "answer": "10",
      "accept": [
        "10 m",
        "10.0",
        "10.0 m"
      ],
      "explanation": {
        "en": "Solving $v = \\sqrt{2gh}$ for depth gives $h = \\frac{v^2}{2g} = \\frac{14^2}{2 \\times 9.8} = \\frac{196}{19.6} = 10\\,\\text{m}$. Forgetting to square the speed would give a depth far too small.",
        "zh": "由 $v = \\sqrt{2gh}$ 解出深度：$h = \\frac{v^2}{2g} = \\frac{14^2}{2 \\times 9.8} = \\frac{196}{19.6} = 10\\,\\text{m}$。忘记把速度平方会得到过小的深度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a Bernoulli problem, water ($\\rho = 1000\\,\\text{kg/m}^3$) rises 2.0 m between two points at the same speed. What is the change in the height term $\\rho g h$, in pascals? Use $g = 9.8\\,\\text{m/s}^2$.",
        "zh": "在一个伯努利问题中，水（$\\rho = 1000\\,\\text{kg/m}^3$）在两点间以相同速度上升 2.0 m。高度项 $\\rho g h$ 的变化是多少帕斯卡？取 $g = 9.8\\,\\text{m/s}^2$。"
      },
      "answer": "19600",
      "accept": [
        "19600 Pa",
        "1.96e4",
        "19.6 kPa",
        "19600.0"
      ],
      "explanation": {
        "en": "The height term changes by $\\rho g \\Delta h = 1000 \\times 9.8 \\times 2 = 19600\\,\\text{Pa}$. Leaving out $g$ or the density would give a much smaller incorrect value.",
        "zh": "高度项的变化为 $\\rho g \\Delta h = 1000 \\times 9.8 \\times 2 = 19600\\,\\text{Pa}$。漏掉 $g$ 或密度会得到小得多的错误值。"
      }
    }
  ]
};
