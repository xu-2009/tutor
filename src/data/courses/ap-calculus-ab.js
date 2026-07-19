export default {
  "id": "ap-calculus-ab",
  "title": "AP Calculus AB",
  "titleZh": "AP 微积分 AB",
  "subject": "math",
  "level": "AP",
  "description": "A complete first course in differential and integral calculus following the official College Board 8-unit framework: limits and continuity, derivatives and their applications, integrals and accumulation, differential equations, and applications of integration.",
  "descriptionZh": "完整的微积分入门课程，按照 College Board 官方 8 个单元的框架编排：极限与连续、导数及其应用、积分与累积、微分方程，以及积分的应用。",
  "units": [
    {
      "id": "limits-and-continuity",
      "title": "Limits and Continuity",
      "titleZh": "极限与连续",
      "lessons": [
        {
          "id": "limit-notation-and-estimation",
          "title": "Limit Notation and Estimating Limits",
          "titleZh": "极限记号与极限的估计",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Limit?",
              "zh": "什么是极限？"
            },
            {
              "type": "p",
              "en": "Calculus begins with a simple question: as $x$ gets closer and closer to some number $a$, what value does $f(x)$ approach? That target value is called the limit of $f(x)$ as $x$ approaches $a$. Crucially, the limit describes the behavior of $f$ near $a$, not the value of $f$ at $a$ — the function does not even need to be defined at $a$ for the limit to exist.",
              "zh": "微积分从一个简单的问题开始：当 $x$ 越来越接近某个数 $a$ 时，$f(x)$ 趋近于什么值？这个目标值就叫做 $x$ 趋近于 $a$ 时 $f(x)$ 的极限。关键在于：极限描述的是 $f$ 在 $a$ 附近的行为，而不是 $f$ 在 $a$ 处的取值——即使函数在 $a$ 处没有定义，极限也可以存在。"
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to a} f(x) = L"
            },
            {
              "type": "p",
              "en": "We read this: \"the limit of $f(x)$ as $x$ approaches $a$ equals $L$.\" It means we can make $f(x)$ as close to $L$ as we like by taking $x$ sufficiently close (but not equal) to $a$.",
              "zh": "读作：\"当 $x$ 趋近于 $a$ 时，$f(x)$ 的极限等于 $L$。\" 它的含义是：只要让 $x$ 足够接近（但不等于）$a$，就能使 $f(x)$ 任意接近 $L$。"
            },
            {
              "type": "h3",
              "en": "One-Sided Limits",
              "zh": "单侧极限"
            },
            {
              "type": "p",
              "en": "Sometimes a function behaves differently on the two sides of $a$. The left-hand limit $\\lim_{x \\to a^-} f(x)$ uses only $x$-values less than $a$, and the right-hand limit $\\lim_{x \\to a^+} f(x)$ uses only $x$-values greater than $a$. The two-sided limit exists if and only if both one-sided limits exist and are equal.",
              "zh": "有时函数在 $a$ 的两侧表现不同。左极限 $\\lim_{x \\to a^-} f(x)$ 只考虑小于 $a$ 的 $x$ 值，右极限 $\\lim_{x \\to a^+} f(x)$ 只考虑大于 $a$ 的 $x$ 值。双侧极限存在，当且仅当两个单侧极限都存在且相等。"
            },
            {
              "type": "note",
              "en": "AP exam tip: a limit can exist even when there is a hole in the graph at $x=a$, and $\\lim_{x\\to a} f(x)$ can differ from $f(a)$. Questions that show a graph with a filled dot in one place and an open circle in another are testing exactly this distinction.",
              "zh": "AP 考试提示：即使图像在 $x=a$ 处有一个\"洞\"，极限仍然可以存在，且 $\\lim_{x\\to a} f(x)$ 可以与 $f(a)$ 不同。图中同时出现实心点和空心圈的题目考查的正是这个区别。"
            },
            {
              "type": "h3",
              "en": "Estimating Limits from Tables and Graphs",
              "zh": "用表格和图像估计极限"
            },
            {
              "type": "p",
              "en": "To estimate a limit numerically, evaluate $f$ at values of $x$ approaching $a$ from both sides, such as $1.9, 1.99, 1.999$ and $2.1, 2.01, 2.001$ for $a = 2$. If the outputs settle toward a single number from both directions, that number is your estimate. Graphically, trace the curve toward $x=a$ from the left and from the right and see whether the two paths head toward the same height.",
              "zh": "要用数值方法估计极限，可以在从两侧趋近 $a$ 的 $x$ 值处计算 $f$，例如当 $a=2$ 时取 $1.9, 1.99, 1.999$ 和 $2.1, 2.01, 2.001$。如果两个方向的输出都趋于同一个数，那个数就是估计值。用图像时，从左右两侧沿曲线走向 $x=a$，观察两条路径是否趋向同一高度。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Estimating from a table",
                "zh": "例题 1：用表格估计"
              },
              "problem": {
                "en": "Use a table to estimate $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ (with $x$ in radians).",
                "zh": "用表格估计 $\\lim_{x \\to 0} \\frac{\\sin x}{x}$（$x$ 为弧度）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Evaluate at $x = \\pm 0.1, \\pm 0.01, \\pm 0.001$: the values are $0.99833, 0.99998, 0.9999998$ from both sides.",
                  "zh": "在 $x = \\pm 0.1, \\pm 0.01, \\pm 0.001$ 处计算：两侧的函数值分别为 $0.99833, 0.99998, 0.9999998$。"
                },
                {
                  "type": "p",
                  "en": "The outputs approach $1$ from both directions, so we estimate",
                  "zh": "两个方向的输出都趋于 $1$，因此估计"
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1"
                },
                {
                  "type": "p",
                  "en": "This famous limit is worth memorizing for the AP exam.",
                  "zh": "这个著名的极限值得为 AP 考试记住。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: One-sided limits from a piecewise function",
                "zh": "例题 2：分段函数的单侧极限"
              },
              "problem": {
                "en": "Let $f(x) = x + 1$ for $x < 2$ and $f(x) = 7 - x$ for $x \\ge 2$. Find $\\lim_{x \\to 2^-} f(x)$, $\\lim_{x \\to 2^+} f(x)$, and decide whether $\\lim_{x \\to 2} f(x)$ exists.",
                "zh": "设 $x < 2$ 时 $f(x) = x + 1$，$x \\ge 2$ 时 $f(x) = 7 - x$。求 $\\lim_{x \\to 2^-} f(x)$、$\\lim_{x \\to 2^+} f(x)$，并判断 $\\lim_{x \\to 2} f(x)$ 是否存在。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "From the left, $x < 2$, so use $f(x) = x+1$: the limit is $2 + 1 = 3$.",
                  "zh": "从左侧看 $x < 2$，用 $f(x) = x+1$：极限为 $2 + 1 = 3$。"
                },
                {
                  "type": "p",
                  "en": "From the right, $x > 2$, so use $f(x) = 7-x$: the limit is $7 - 2 = 5$.",
                  "zh": "从右侧看 $x > 2$，用 $f(x) = 7-x$：极限为 $7 - 2 = 5$。"
                },
                {
                  "type": "p",
                  "en": "Since $3 \\ne 5$, the two-sided limit $\\lim_{x \\to 2} f(x)$ does not exist.",
                  "zh": "因为 $3 \\ne 5$，双侧极限 $\\lim_{x \\to 2} f(x)$ 不存在。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $\\lim_{x \\to 3^-} f(x) = 4$ and $\\lim_{x \\to 3^+} f(x) = 4$ but $f(3) = 7$, what is $\\lim_{x \\to 3} f(x)$?",
                "zh": "若 $\\lim_{x \\to 3^-} f(x) = 4$，$\\lim_{x \\to 3^+} f(x) = 4$，但 $f(3) = 7$，则 $\\lim_{x \\to 3} f(x)$ 是多少？"
              },
              "choices": [
                "$7$",
                "$4$",
                "$5.5$",
                "The limit does not exist"
              ],
              "answer": 1,
              "explanation": {
                "en": "The limit depends only on values near $x=3$, not on $f(3)$ itself. Both one-sided limits equal $4$, so the limit is $4$.",
                "zh": "极限只取决于 $x=3$ 附近的函数值，与 $f(3)$ 本身无关。两个单侧极限都是 $4$，所以极限为 $4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Give the value of $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ as an integer.",
                "zh": "以整数形式给出 $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ 的值。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "This is the fundamental trig limit: as $x \\to 0$ (radians), $\\sin x \\approx x$, so the ratio approaches $1$.",
                "zh": "这是基本三角极限：当 $x \\to 0$（弧度）时 $\\sin x \\approx x$，因此比值趋于 $1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A table shows $f(1.9)=6.8$, $f(1.99)=6.98$, $f(1.999)=6.998$, $f(2.001)=7.002$, $f(2.01)=7.02$. The best estimate of $\\lim_{x\\to 2} f(x)$ is:",
                "zh": "表格显示 $f(1.9)=6.8$，$f(1.99)=6.98$，$f(1.999)=6.998$，$f(2.001)=7.002$，$f(2.01)=7.02$。$\\lim_{x\\to 2} f(x)$ 的最佳估计是："
              },
              "choices": [
                "$2$",
                "$6.998$",
                "$7$",
                "Cannot be determined"
              ],
              "answer": 2,
              "explanation": {
                "en": "From the left the values climb toward $7$ and from the right they descend toward $7$, so the limit estimate is $7$.",
                "zh": "从左侧函数值上升趋向 $7$，从右侧下降趋向 $7$，所以极限估计为 $7$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $g(x) = 2x$ for $x < 1$ and $g(x) = x^2 + 1$ for $x \\ge 1$. Find $\\lim_{x \\to 1} g(x)$. Give an integer.",
                "zh": "设 $x < 1$ 时 $g(x) = 2x$，$x \\ge 1$ 时 $g(x) = x^2 + 1$。求 $\\lim_{x \\to 1} g(x)$，以整数作答。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Left limit: $2(1) = 2$. Right limit: $1^2 + 1 = 2$. They agree, so the limit is $2$.",
                "zh": "左极限：$2(1)=2$；右极限：$1^2+1=2$。两者相等，故极限为 $2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement guarantees that $\\lim_{x \\to a} f(x)$ exists?",
                "zh": "哪个条件能保证 $\\lim_{x \\to a} f(x)$ 存在？"
              },
              "choices": [
                "$\\lim_{x\\to a^-} f(x)$ exists",
                "$f(a)$ is defined",
                "$f$ is defined on both sides of $a$",
                "$\\lim_{x\\to a^-} f(x)$ and $\\lim_{x\\to a^+} f(x)$ both exist and are equal"
              ],
              "answer": 3,
              "explanation": {
                "en": "The two-sided limit exists exactly when both one-sided limits exist and agree. Being defined at or near $a$ is neither necessary nor sufficient.",
                "zh": "双侧极限存在的充要条件是两个单侧极限都存在且相等。函数在 $a$ 处或附近有定义既不必要也不充分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $h(x) = \\frac{|x|}{x}$, find $\\lim_{x \\to 0^+} h(x)$. Give an integer.",
                "zh": "对 $h(x) = \\frac{|x|}{x}$，求 $\\lim_{x \\to 0^+} h(x)$，以整数作答。"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "+1"
              ],
              "explanation": {
                "en": "For $x > 0$, $|x| = x$, so $h(x) = 1$ for every positive $x$; the right-hand limit is $1$. (The left-hand limit is $-1$, so the two-sided limit does not exist.)",
                "zh": "当 $x > 0$ 时 $|x| = x$，故对所有正的 $x$ 都有 $h(x)=1$，右极限为 $1$。（左极限为 $-1$，所以双侧极限不存在。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $f$ has an open circle at $(5, 3)$ and a filled dot at $(5, -1)$; the curve approaches height $3$ from both sides. Which is true?",
                "zh": "$f$ 的图像在 $(5, 3)$ 处是空心圈，在 $(5, -1)$ 处是实心点；曲线从两侧都趋向高度 $3$。下列哪项正确？"
              },
              "choices": [
                "$\\lim_{x\\to 5} f(x) = 3$ and $f(5) = -1$",
                "$\\lim_{x\\to 5} f(x) = -1$ and $f(5) = 3$",
                "$\\lim_{x\\to 5} f(x)$ does not exist",
                "$f(5)$ is undefined"
              ],
              "answer": 0,
              "explanation": {
                "en": "The curve approaches $3$ from both sides, so the limit is $3$; the filled dot shows the actual function value $f(5) = -1$. Limit and value need not match.",
                "zh": "曲线从两侧趋向 $3$，故极限为 $3$；实心点表示实际函数值 $f(5) = -1$。极限与函数值不必相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = \\frac{x^2 - 9}{x - 3}$ for $x \\ne 3$. Estimate $\\lim_{x \\to 3} f(x)$ by simplifying or using a table. Give an integer.",
                "zh": "设 $x \\ne 3$ 时 $f(x) = \\frac{x^2 - 9}{x - 3}$。通过化简或列表估计 $\\lim_{x \\to 3} f(x)$，以整数作答。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "For $x \\ne 3$, $\\frac{x^2-9}{x-3} = \\frac{(x-3)(x+3)}{x-3} = x + 3$, which approaches $3 + 3 = 6$. The hole at $x = 3$ does not stop the limit from existing.",
                "zh": "当 $x \\ne 3$ 时，$\\frac{x^2-9}{x-3} = \\frac{(x-3)(x+3)}{x-3} = x + 3$，趋于 $3+3=6$。$x=3$ 处的\"洞\"不妨碍极限存在。"
              }
            }
          ]
        },
        {
          "id": "limit-laws-and-algebraic-evaluation",
          "title": "Limit Laws, Algebraic Evaluation, and the Squeeze Theorem",
          "titleZh": "极限运算法则、代数求极限与夹逼定理",
          "content": [
            {
              "type": "h2",
              "en": "The Limit Laws",
              "zh": "极限运算法则"
            },
            {
              "type": "p",
              "en": "If $\\lim_{x\\to a} f(x) = L$ and $\\lim_{x\\to a} g(x) = M$ both exist, then limits behave exactly the way you would hope with arithmetic:",
              "zh": "若 $\\lim_{x\\to a} f(x) = L$ 和 $\\lim_{x\\to a} g(x) = M$ 都存在，那么极限对四则运算的表现完全符合直觉："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Sum/Difference: $\\lim_{x\\to a}[f(x) \\pm g(x)] = L \\pm M$",
                  "zh": "和差法则：$\\lim_{x\\to a}[f(x) \\pm g(x)] = L \\pm M$"
                },
                {
                  "en": "Product: $\\lim_{x\\to a}[f(x)\\,g(x)] = LM$; constant multiple: $\\lim_{x\\to a} c\\,f(x) = cL$",
                  "zh": "乘积法则：$\\lim_{x\\to a}[f(x)\\,g(x)] = LM$；常数倍：$\\lim_{x\\to a} c\\,f(x) = cL$"
                },
                {
                  "en": "Quotient: $\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\frac{L}{M}$ provided $M \\ne 0$",
                  "zh": "商法则：当 $M \\ne 0$ 时，$\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\frac{L}{M}$"
                },
                {
                  "en": "Powers and roots: $\\lim_{x\\to a} [f(x)]^n = L^n$ (and similarly for roots when defined)",
                  "zh": "幂与根：$\\lim_{x\\to a} [f(x)]^n = L^n$（在有定义时根式同理）"
                }
              ]
            },
            {
              "type": "p",
              "en": "A direct consequence: for any polynomial or rational function whose denominator is nonzero at $a$, you can find the limit by direct substitution — just plug in $x = a$.",
              "zh": "一个直接推论：对任何多项式，或分母在 $a$ 处不为零的有理函数，都可以用直接代入法求极限——把 $x = a$ 代进去即可。"
            },
            {
              "type": "h3",
              "en": "When Substitution Gives $\\frac{0}{0}$",
              "zh": "当代入得到 $\\frac{0}{0}$ 时"
            },
            {
              "type": "p",
              "en": "If plugging in gives the indeterminate form $\\frac{0}{0}$, the limit may still exist — you just need algebra to reveal it. The three standard techniques are factoring and canceling, multiplying by a conjugate to clear radicals, and simplifying complex fractions by finding a common denominator.",
              "zh": "如果代入得到不定式 $\\frac{0}{0}$，极限仍可能存在——只是需要代数变形来揭示它。三种标准技巧是：因式分解并约分、乘以共轭式消去根号、以及通分化简繁分式。"
            },
            {
              "type": "note",
              "en": "AP exam tip: $\\frac{0}{0}$ is a signal to do more work, not an answer. But if substitution gives $\\frac{c}{0}$ with $c \\ne 0$, the limit is infinite or does not exist — no algebra will fix that.",
              "zh": "AP 考试提示：$\\frac{0}{0}$ 是\"继续变形\"的信号，不是答案。但如果代入得到 $\\frac{c}{0}$ 且 $c \\ne 0$，极限为无穷或不存在——任何代数变形都无济于事。"
            },
            {
              "type": "h3",
              "en": "The Squeeze Theorem",
              "zh": "夹逼定理"
            },
            {
              "type": "p",
              "en": "If $g(x) \\le f(x) \\le h(x)$ near $a$, and $\\lim_{x\\to a} g(x) = \\lim_{x\\to a} h(x) = L$, then $\\lim_{x\\to a} f(x) = L$ as well. The classic use is with bounded oscillating factors like $\\sin\\frac{1}{x}$, which always stays between $-1$ and $1$.",
              "zh": "若在 $a$ 附近有 $g(x) \\le f(x) \\le h(x)$，且 $\\lim_{x\\to a} g(x) = \\lim_{x\\to a} h(x) = L$，则 $\\lim_{x\\to a} f(x) = L$。经典应用是处理有界振荡因子，如 $\\sin\\frac{1}{x}$，它始终在 $-1$ 与 $1$ 之间。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Factoring",
                "zh": "例题 1：因式分解"
              },
              "problem": {
                "en": "Evaluate $\\lim_{x \\to 4} \\frac{x^2 - x - 12}{x - 4}$.",
                "zh": "求 $\\lim_{x \\to 4} \\frac{x^2 - x - 12}{x - 4}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitution gives $\\frac{0}{0}$, so factor the numerator: $x^2 - x - 12 = (x-4)(x+3)$.",
                  "zh": "代入得 $\\frac{0}{0}$，于是对分子因式分解：$x^2 - x - 12 = (x-4)(x+3)$。"
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to 4} \\frac{(x-4)(x+3)}{x-4} = \\lim_{x \\to 4} (x+3) = 7"
                },
                {
                  "type": "p",
                  "en": "Canceling $x - 4$ is legal because in a limit, $x \\ne 4$.",
                  "zh": "约去 $x-4$ 是合法的，因为在求极限时 $x \\ne 4$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Conjugate and Squeeze",
                "zh": "例题 2：共轭式与夹逼"
              },
              "problem": {
                "en": "(a) Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+9} - 3}{x}$. (b) Evaluate $\\lim_{x \\to 0} x^2 \\sin\\frac{1}{x}$.",
                "zh": "(a) 求 $\\lim_{x \\to 0} \\frac{\\sqrt{x+9} - 3}{x}$。(b) 求 $\\lim_{x \\to 0} x^2 \\sin\\frac{1}{x}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Multiply by the conjugate $\\frac{\\sqrt{x+9}+3}{\\sqrt{x+9}+3}$:",
                  "zh": "(a) 乘以共轭式 $\\frac{\\sqrt{x+9}+3}{\\sqrt{x+9}+3}$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{(x+9) - 9}{x(\\sqrt{x+9}+3)} = \\frac{1}{\\sqrt{x+9}+3} \\to \\frac{1}{6}"
                },
                {
                  "type": "p",
                  "en": "(b) Since $-1 \\le \\sin\\frac{1}{x} \\le 1$, we have $-x^2 \\le x^2 \\sin\\frac{1}{x} \\le x^2$. Both bounds go to $0$, so by the Squeeze Theorem the limit is $0$.",
                  "zh": "(b) 因为 $-1 \\le \\sin\\frac{1}{x} \\le 1$，所以 $-x^2 \\le x^2 \\sin\\frac{1}{x} \\le x^2$。两边都趋于 $0$，由夹逼定理，极限为 $0$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $\\lim_{x\\to 2} f(x) = 5$ and $\\lim_{x\\to 2} g(x) = -3$, what is $\\lim_{x\\to 2} [2f(x) - g(x)]$?",
                "zh": "若 $\\lim_{x\\to 2} f(x) = 5$ 且 $\\lim_{x\\to 2} g(x) = -3$，则 $\\lim_{x\\to 2} [2f(x) - g(x)]$ 是多少？"
              },
              "choices": [
                "$7$",
                "$13$",
                "$-13$",
                "$10$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Apply the constant-multiple and difference laws: $2(5) - (-3) = 10 + 3 = 13$.",
                "zh": "用常数倍法则与差法则：$2(5) - (-3) = 10 + 3 = 13$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to -1} (x^3 - 2x + 4)$. Give an integer.",
                "zh": "求 $\\lim_{x \\to -1} (x^3 - 2x + 4)$，以整数作答。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "Polynomials allow direct substitution: $(-1)^3 - 2(-1) + 4 = -1 + 2 + 4 = 5$.",
                "zh": "多项式可直接代入：$(-1)^3 - 2(-1) + 4 = -1 + 2 + 4 = 5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$，以整数作答。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "Factor: $\\frac{(x-5)(x+5)}{x-5} = x + 5 \\to 10$. The $\\frac{0}{0}$ form was hiding a removable factor.",
                "zh": "因式分解：$\\frac{(x-5)(x+5)}{x-5} = x + 5 \\to 10$。$\\frac{0}{0}$ 形式背后隐藏着一个可约去的因子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x} = $ ?",
                "zh": "$\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x} = $ ？"
              },
              "choices": [
                "$0$",
                "$\\frac{1}{2}$",
                "$\\frac{1}{4}$",
                "$4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiply by the conjugate: the fraction becomes $\\frac{1}{\\sqrt{x+4}+2}$, which approaches $\\frac{1}{2+2} = \\frac{1}{4}$.",
                "zh": "乘以共轭式后分式变为 $\\frac{1}{\\sqrt{x+4}+2}$，趋于 $\\frac{1}{2+2} = \\frac{1}{4}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Suppose $4 - x^2 \\le f(x) \\le 4 + x^2$ for all $x$ near $0$. What is $\\lim_{x\\to 0} f(x)$?",
                "zh": "设在 $0$ 附近对所有 $x$ 都有 $4 - x^2 \\le f(x) \\le 4 + x^2$。求 $\\lim_{x\\to 0} f(x)$。"
              },
              "choices": [
                "Cannot be determined",
                "$0$",
                "$8$",
                "$4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Both bounding functions approach $4$ as $x \\to 0$, so by the Squeeze Theorem $f$ is forced to approach $4$ too.",
                "zh": "当 $x \\to 0$ 时，两个夹逼函数都趋于 $4$，由夹逼定理 $f$ 也必然趋于 $4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$，以整数作答。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Rewrite as $3 \\cdot \\frac{\\sin(3x)}{3x}$. As $x \\to 0$, $3x \\to 0$, so $\\frac{\\sin 3x}{3x} \\to 1$ and the limit is $3 \\cdot 1 = 3$.",
                "zh": "改写为 $3 \\cdot \\frac{\\sin(3x)}{3x}$。当 $x \\to 0$ 时 $3x \\to 0$，故 $\\frac{\\sin 3x}{3x} \\to 1$，极限为 $3 \\cdot 1 = 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\lim_{x \\to 2} \\frac{x + 3}{x - 2}$ is:",
                "zh": "$\\lim_{x \\to 2} \\frac{x + 3}{x - 2}$ 是："
              },
              "choices": [
                "Nonexistent (the one-sided limits are $+\\infty$ and $-\\infty$)",
                "$0$",
                "$5$",
                "$1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Substitution gives $\\frac{5}{0}$, not $\\frac{0}{0}$. Near $x=2$ the denominator changes sign while the numerator stays near $5$, so the function blows up to $+\\infty$ on one side and $-\\infty$ on the other: no limit.",
                "zh": "代入得 $\\frac{5}{0}$，而不是 $\\frac{0}{0}$。在 $x=2$ 附近分母变号而分子接近 $5$，函数一侧趋于 $+\\infty$、另一侧趋于 $-\\infty$：极限不存在。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{h \\to 0} \\frac{(2+h)^2 - 4}{h}$. Give an integer.",
                "zh": "求 $\\lim_{h \\to 0} \\frac{(2+h)^2 - 4}{h}$，以整数作答。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "Expand: $(2+h)^2 - 4 = 4h + h^2 = h(4+h)$. Dividing by $h$ leaves $4 + h \\to 4$. (Preview: this is the derivative of $x^2$ at $x=2$.)",
                "zh": "展开：$(2+h)^2 - 4 = 4h + h^2 = h(4+h)$。除以 $h$ 得 $4 + h \\to 4$。（预告：这正是 $x^2$ 在 $x=2$ 处的导数。）"
              }
            }
          ]
        },
        {
          "id": "continuity-ivt-and-asymptotes",
          "title": "Continuity, the IVT, and Limits Involving Infinity",
          "titleZh": "连续性、介值定理与无穷极限",
          "content": [
            {
              "type": "h2",
              "en": "Continuity at a Point",
              "zh": "一点处的连续性"
            },
            {
              "type": "p",
              "en": "A function $f$ is continuous at $x = a$ when three conditions all hold: $f(a)$ is defined, $\\lim_{x\\to a} f(x)$ exists, and the two are equal:",
              "zh": "函数 $f$ 在 $x = a$ 处连续需要同时满足三个条件：$f(a)$ 有定义、$\\lim_{x\\to a} f(x)$ 存在、且二者相等："
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to a} f(x) = f(a)"
            },
            {
              "type": "p",
              "en": "Discontinuities come in three flavors. A removable discontinuity (hole) occurs when the limit exists but does not equal $f(a)$ or $f(a)$ is undefined. A jump discontinuity occurs when the one-sided limits exist but differ. An infinite discontinuity occurs at a vertical asymptote.",
              "zh": "间断点分为三类：可去间断点（洞）——极限存在但不等于 $f(a)$ 或 $f(a)$ 无定义；跳跃间断点——两个单侧极限存在但不相等；无穷间断点——出现在垂直渐近线处。"
            },
            {
              "type": "h3",
              "en": "The Intermediate Value Theorem (IVT)",
              "zh": "介值定理（IVT）"
            },
            {
              "type": "p",
              "en": "If $f$ is continuous on the closed interval $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there is at least one $c$ in $(a, b)$ with $f(c) = N$. Intuitively: a continuous curve cannot get from one height to another without passing through every height in between. The IVT is the standard tool for proving an equation has a root in an interval.",
              "zh": "若 $f$ 在闭区间 $[a, b]$ 上连续，且 $N$ 是介于 $f(a)$ 与 $f(b)$ 之间的任意值，则在 $(a, b)$ 内至少存在一点 $c$ 使 $f(c) = N$。直观地说：连续曲线从一个高度到另一个高度，必须经过中间的每一个高度。IVT 是证明方程在某区间内有根的标准工具。"
            },
            {
              "type": "note",
              "en": "AP exam tip: when you cite the IVT in a free-response answer, you must state that the function is continuous on the closed interval and show the two endpoint values straddle the target — the justification earns the point, not the conclusion alone.",
              "zh": "AP 考试提示：在自由作答题中引用 IVT 时，必须写明函数在闭区间上连续，并说明两个端点值夹住了目标值——得分点在于论证过程，而非结论本身。"
            },
            {
              "type": "h3",
              "en": "Limits Involving Infinity and Asymptotes",
              "zh": "涉及无穷的极限与渐近线"
            },
            {
              "type": "p",
              "en": "A vertical asymptote $x = a$ occurs where $f(x) \\to \\pm\\infty$ as $x \\to a$ from either side (typically where a denominator is $0$ but the numerator is not). A horizontal asymptote $y = L$ describes end behavior: $\\lim_{x \\to \\infty} f(x) = L$ or $\\lim_{x \\to -\\infty} f(x) = L$. For rational functions, compare degrees: if the numerator degree is smaller the horizontal asymptote is $y=0$; if equal it is the ratio of leading coefficients; if larger there is no horizontal asymptote.",
              "zh": "当 $x \\to a$ 时若 $f(x) \\to \\pm\\infty$（通常发生在分母为 $0$ 而分子不为 $0$ 处），则 $x = a$ 是垂直渐近线。水平渐近线 $y = L$ 描述函数的末端行为：$\\lim_{x \\to \\infty} f(x) = L$ 或 $\\lim_{x \\to -\\infty} f(x) = L$。对有理函数比较次数：分子次数较小则水平渐近线为 $y=0$；次数相等则为最高次项系数之比；分子次数较大则没有水平渐近线。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Making a piecewise function continuous",
                "zh": "例题 1：使分段函数连续"
              },
              "problem": {
                "en": "Find the value of $k$ that makes $f(x) = \\frac{x^2 - 1}{x - 1}$ for $x \\ne 1$, $f(1) = k$, continuous at $x = 1$.",
                "zh": "求使 $f(x) = \\frac{x^2 - 1}{x - 1}$（$x \\ne 1$）、$f(1) = k$ 在 $x = 1$ 处连续的 $k$ 值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For $x \\ne 1$, $f(x) = \\frac{(x-1)(x+1)}{x-1} = x + 1$, so $\\lim_{x\\to 1} f(x) = 2$.",
                  "zh": "当 $x \\ne 1$ 时，$f(x) = \\frac{(x-1)(x+1)}{x-1} = x + 1$，故 $\\lim_{x\\to 1} f(x) = 2$。"
                },
                {
                  "type": "p",
                  "en": "Continuity requires $f(1) = \\lim_{x\\to 1} f(x)$, so $k = 2$. This fills the removable hole.",
                  "zh": "连续性要求 $f(1) = \\lim_{x\\to 1} f(x)$，因此 $k = 2$。这就填补了可去间断点。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: End behavior of a rational function",
                "zh": "例题 2：有理函数的末端行为"
              },
              "problem": {
                "en": "Find $\\lim_{x \\to \\infty} \\frac{6x^2 - x + 2}{2x^2 + 5}$ and identify the horizontal asymptote.",
                "zh": "求 $\\lim_{x \\to \\infty} \\frac{6x^2 - x + 2}{2x^2 + 5}$，并指出水平渐近线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Divide numerator and denominator by $x^2$, the highest power present:",
                  "zh": "将分子分母同除以最高次幂 $x^2$："
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to \\infty} \\frac{6 - \\frac{1}{x} + \\frac{2}{x^2}}{2 + \\frac{5}{x^2}} = \\frac{6}{2} = 3"
                },
                {
                  "type": "p",
                  "en": "All the $\\frac{1}{x}$ terms vanish, leaving the ratio of leading coefficients. The horizontal asymptote is $y = 3$.",
                  "zh": "所有 $\\frac{1}{x}$ 项都消失，只剩最高次项系数之比。水平渐近线为 $y = 3$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For $f$ to be continuous at $x = a$, which condition is NOT required?",
                "zh": "要使 $f$ 在 $x = a$ 处连续，下列哪个条件不是必需的？"
              },
              "choices": [
                "$f(a)$ must be defined",
                "$f$ must be differentiable at $a$",
                "$\\lim_{x\\to a} f(x)$ must exist",
                "$\\lim_{x\\to a} f(x) = f(a)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Differentiability is a stronger condition that implies continuity, but continuity does not require it — $|x|$ is continuous at $0$ yet not differentiable there.",
                "zh": "可导是更强的条件，可导必连续，但连续不需要可导——$|x|$ 在 $0$ 处连续却不可导。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the value of $c$ so that $f(x) = cx + 3$ for $x < 2$ and $f(x) = x^2 + 1$ for $x \\ge 2$ is continuous at $x = 2$. Give an integer.",
                "zh": "求使 $x < 2$ 时 $f(x) = cx + 3$、$x \\ge 2$ 时 $f(x) = x^2 + 1$ 在 $x = 2$ 处连续的 $c$ 值，以整数作答。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "Set the one-sided limits equal: $2c + 3 = 2^2 + 1 = 5$, so $2c = 2$ and $c = 1$.",
                "zh": "令两侧极限相等：$2c + 3 = 2^2 + 1 = 5$，得 $2c = 2$，$c = 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$g(x) = \\frac{x - 2}{x^2 - 4}$ has:",
                "zh": "$g(x) = \\frac{x - 2}{x^2 - 4}$ 具有："
              },
              "choices": [
                "A removable discontinuity at $x = -2$ and a vertical asymptote at $x = 2$",
                "Vertical asymptotes at both $x = 2$ and $x = -2$",
                "A removable discontinuity at $x = 2$ and a vertical asymptote at $x = -2$",
                "No discontinuities"
              ],
              "answer": 2,
              "explanation": {
                "en": "$g(x) = \\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2}$ for $x \\ne 2$. The canceled factor $x-2$ gives a hole at $x=2$; the surviving zero of the denominator, $x = -2$, gives a vertical asymptote.",
                "zh": "当 $x \\ne 2$ 时 $g(x) = \\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2}$。被约去的因子 $x-2$ 在 $x=2$ 处产生洞；分母剩下的零点 $x = -2$ 产生垂直渐近线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find $\\lim_{x \\to \\infty} \\frac{8x^3 + x}{2x^3 - 7}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to \\infty} \\frac{8x^3 + x}{2x^3 - 7}$，以整数作答。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "Degrees are equal, so the limit is the ratio of leading coefficients: $\\frac{8}{2} = 4$.",
                "zh": "分子分母次数相等，极限为最高次项系数之比：$\\frac{8}{2} = 4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$f$ is continuous on $[1, 5]$ with $f(1) = -3$ and $f(5) = 8$. Which must be true by the IVT?",
                "zh": "$f$ 在 $[1, 5]$ 上连续，$f(1) = -3$，$f(5) = 8$。由 IVT 可知下列哪项必然成立？"
              },
              "choices": [
                "$f$ is increasing on $[1,5]$",
                "$f$ has a maximum value of $8$ on $[1,5]$",
                "$f(3) = 2.5$",
                "There is a $c$ in $(1,5)$ with $f(c) = 0$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Zero lies between $-3$ and $8$, so a continuous function must hit it somewhere in $(1,5)$. The IVT guarantees intermediate values, not maxima, specific point values, or monotonicity.",
                "zh": "$0$ 介于 $-3$ 与 $8$ 之间，连续函数必在 $(1,5)$ 内某处取到它。IVT 只保证取到中间值，不保证最大值、特定点的值或单调性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find $\\lim_{x \\to \\infty} \\frac{5x + 1}{x^2 + 3}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to \\infty} \\frac{5x + 1}{x^2 + 3}$，以整数作答。"
              },
              "answer": "0",
              "accept": [
                "0.0"
              ],
              "explanation": {
                "en": "The denominator has larger degree, so it grows much faster than the numerator and the fraction shrinks to $0$; the horizontal asymptote is $y = 0$.",
                "zh": "分母次数更高，增长远快于分子，分式趋于 $0$；水平渐近线为 $y = 0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\lim_{x \\to 3^+} \\frac{1}{x - 3} = $ ?",
                "zh": "$\\lim_{x \\to 3^+} \\frac{1}{x - 3} = $ ？"
              },
              "choices": [
                "$+\\infty$",
                "$-\\infty$",
                "$0$",
                "$\\frac{1}{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "As $x \\to 3^+$, $x - 3$ is a tiny positive number, so $\\frac{1}{x-3}$ is a huge positive number: the limit is $+\\infty$ (a vertical asymptote at $x=3$).",
                "zh": "当 $x \\to 3^+$ 时，$x - 3$ 是极小的正数，故 $\\frac{1}{x-3}$ 是极大的正数：极限为 $+\\infty$（$x=3$ 处是垂直渐近线）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$f(x) = x^3 + 2x - 7$ is continuous everywhere, $f(1) = -4$, and $f(2) = 5$. What is the strongest conclusion from the IVT?",
                "zh": "$f(x) = x^3 + 2x - 7$ 处处连续，$f(1) = -4$，$f(2) = 5$。由 IVT 能得出的最强结论是什么？"
              },
              "choices": [
                "$f(1.5) = 0$",
                "The equation $f(x) = 0$ has exactly one solution in $(1, 2)$",
                "The equation $f(x) = 0$ has at least one solution in $(1, 2)$",
                "$f$ has no roots outside $(1, 2)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The IVT guarantees at least one root because the sign changes on the interval — it never guarantees uniqueness or a specific location. (Uniqueness would need extra reasoning, e.g. showing $f$ is increasing.)",
                "zh": "由于函数值在区间上变号，IVT 保证至少有一个根——但从不保证唯一性或具体位置。（要证唯一性需要额外论证，例如说明 $f$ 单调递增。）"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "differentiation-definition-and-rules",
      "title": "Differentiation: Definition and Fundamental Properties",
      "titleZh": "导数：定义与基本性质",
      "lessons": [
        {
          "id": "definition-of-the-derivative",
          "title": "The Definition of the Derivative",
          "titleZh": "导数的定义",
          "content": [
            {
              "type": "h2",
              "en": "From Average to Instantaneous Rate of Change",
              "zh": "从平均变化率到瞬时变化率"
            },
            {
              "type": "p",
              "en": "The average rate of change of $f$ over $[a, b]$ is the slope of the secant line, $\\frac{f(b) - f(a)}{b - a}$. To get the instantaneous rate of change at a single point, we shrink the interval: let the second point slide toward the first and take a limit. The result is the derivative, and geometrically it is the slope of the tangent line.",
              "zh": "$f$ 在 $[a, b]$ 上的平均变化率是割线的斜率 $\\frac{f(b) - f(a)}{b - a}$。要得到某一点的瞬时变化率，就把区间缩小：让第二个点滑向第一个点并取极限。所得结果就是导数，几何上就是切线的斜率。"
            },
            {
              "type": "math",
              "tex": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}"
            },
            {
              "type": "p",
              "en": "An equivalent form for the derivative at a specific point $a$ is",
              "zh": "导数在特定点 $a$ 处的等价形式是"
            },
            {
              "type": "math",
              "tex": "f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}"
            },
            {
              "type": "p",
              "en": "You should recognize both forms instantly. Common notations for the same object: $f'(x)$, $\\frac{dy}{dx}$, $\\frac{d}{dx} f(x)$, and $y'$.",
              "zh": "这两种形式都必须一眼认出。同一对象的常见记号有：$f'(x)$、$\\frac{dy}{dx}$、$\\frac{d}{dx} f(x)$ 和 $y'$。"
            },
            {
              "type": "h3",
              "en": "Differentiability and Continuity",
              "zh": "可导性与连续性"
            },
            {
              "type": "p",
              "en": "If $f$ is differentiable at $a$, then $f$ is continuous at $a$. The converse fails: $f(x) = |x|$ is continuous at $0$ but has no derivative there because the slopes from the left ($-1$) and right ($+1$) disagree. Differentiability fails at corners, cusps, vertical tangents, and any discontinuity.",
              "zh": "若 $f$ 在 $a$ 处可导，则 $f$ 在 $a$ 处连续。反之不成立：$f(x) = |x|$ 在 $0$ 处连续，却因左侧斜率（$-1$）与右侧斜率（$+1$）不一致而不可导。在尖角、尖点、垂直切线以及任何间断点处，函数都不可导。"
            },
            {
              "type": "note",
              "en": "AP exam tip: the exam loves to disguise derivatives as limits. If you see $\\lim_{h\\to 0} \\frac{\\cos(\\frac{\\pi}{3}+h) - \\cos\\frac{\\pi}{3}}{h}$, recognize it as $f'(\\frac{\\pi}{3})$ for $f(x) = \\cos x$ — the answer is $-\\sin\\frac{\\pi}{3}$, no limit computation needed.",
              "zh": "AP 考试提示：考试喜欢把导数伪装成极限。看到 $\\lim_{h\\to 0} \\frac{\\cos(\\frac{\\pi}{3}+h) - \\cos\\frac{\\pi}{3}}{h}$ 时，要认出它是 $f(x) = \\cos x$ 的 $f'(\\frac{\\pi}{3})$——答案是 $-\\sin\\frac{\\pi}{3}$，根本不用算极限。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Derivative from the definition",
                "zh": "例题 1：用定义求导数"
              },
              "problem": {
                "en": "Use the limit definition to find $f'(x)$ for $f(x) = x^2 - 3x$.",
                "zh": "用极限定义求 $f(x) = x^2 - 3x$ 的 $f'(x)$。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - 3(x+h) - (x^2 - 3x)}{h}"
                },
                {
                  "type": "p",
                  "en": "Expand the numerator: $x^2 + 2xh + h^2 - 3x - 3h - x^2 + 3x = 2xh + h^2 - 3h = h(2x + h - 3)$.",
                  "zh": "展开分子：$x^2 + 2xh + h^2 - 3x - 3h - x^2 + 3x = 2xh + h^2 - 3h = h(2x + h - 3)$。"
                },
                {
                  "type": "math",
                  "tex": "f'(x) = \\lim_{h \\to 0} (2x + h - 3) = 2x - 3"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Equation of a tangent line",
                "zh": "例题 2：切线方程"
              },
              "problem": {
                "en": "Given $f(x) = x^2 - 3x$ (so $f'(x) = 2x - 3$), write the equation of the tangent line at $x = 2$.",
                "zh": "已知 $f(x) = x^2 - 3x$（故 $f'(x) = 2x - 3$），写出 $x = 2$ 处的切线方程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Point: $f(2) = 4 - 6 = -2$, so the tangent touches at $(2, -2)$.",
                  "zh": "切点：$f(2) = 4 - 6 = -2$，切线经过 $(2, -2)$。"
                },
                {
                  "type": "p",
                  "en": "Slope: $f'(2) = 4 - 3 = 1$.",
                  "zh": "斜率：$f'(2) = 4 - 3 = 1$。"
                },
                {
                  "type": "math",
                  "tex": "y - (-2) = 1(x - 2) \\quad\\Longrightarrow\\quad y = x - 4"
                },
                {
                  "type": "p",
                  "en": "Point-slope form $y - f(a) = f'(a)(x - a)$ is the fastest and is fully accepted on the AP exam.",
                  "zh": "点斜式 $y - f(a) = f'(a)(x - a)$ 最快，AP 考试完全接受这种形式。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The derivative $f'(a)$ is best interpreted as:",
                "zh": "$f'(a)$ 的最佳解释是："
              },
              "choices": [
                "The slope of the secant line over $[0, a]$",
                "The slope of the tangent line to $f$ at $x = a$",
                "The value of $f$ at $a$",
                "The average rate of change of $f$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The derivative is the limit of secant slopes as the interval shrinks to a point — that limit is the tangent slope, the instantaneous rate of change at $x=a$.",
                "zh": "导数是区间缩至一点时割线斜率的极限——这个极限就是切线斜率，即 $x=a$ 处的瞬时变化率。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using the definition, the derivative of $f(x) = x^2$ is $f'(x) = 2x$. Find $f'(5)$. Give an integer.",
                "zh": "由定义可得 $f(x) = x^2$ 的导数为 $f'(x) = 2x$。求 $f'(5)$，以整数作答。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "Substitute: $f'(5) = 2(5) = 10$. The tangent to $y = x^2$ at $(5, 25)$ has slope $10$.",
                "zh": "代入：$f'(5) = 2(5) = 10$。$y = x^2$ 在 $(5, 25)$ 处切线斜率为 $10$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\lim_{h \\to 0} \\frac{(3+h)^3 - 27}{h}$ equals $f'(3)$ for which function $f$?",
                "zh": "$\\lim_{h \\to 0} \\frac{(3+h)^3 - 27}{h}$ 等于哪个函数 $f$ 的 $f'(3)$？"
              },
              "choices": [
                "$f(x) = x^3 - 27$",
                "$f(x) = 3x$",
                "$f(x) = x^3$",
                "$f(x) = 27x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Match the pattern $\\lim_{h\\to 0} \\frac{f(a+h) - f(a)}{h}$ with $a = 3$: since $27 = 3^3$, the function is $f(x) = x^3$. The limit equals $3(3)^2 = 27$.",
                "zh": "与 $\\lim_{h\\to 0} \\frac{f(a+h) - f(a)}{h}$（$a = 3$）对照：因为 $27 = 3^3$，函数是 $f(x) = x^3$。该极限等于 $3(3)^2 = 27$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At which $x$-value is $f(x) = |x - 4|$ continuous but NOT differentiable?",
                "zh": "$f(x) = |x - 4|$ 在哪个 $x$ 值处连续但不可导？"
              },
              "choices": [
                "$f$ is differentiable everywhere",
                "$x = 0$",
                "$x = -4$",
                "$x = 4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The graph has a corner at $x = 4$: slope $-1$ on the left, $+1$ on the right. The one-sided derivative limits disagree, so no derivative exists there even though the function is continuous.",
                "zh": "图像在 $x = 4$ 处有尖角：左侧斜率 $-1$，右侧 $+1$。两个单侧导数极限不相等，故该点不可导，尽管函数连续。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = x^2 + 1$, the tangent line at $x = 3$ has slope $m$. Find $m$. Give an integer.",
                "zh": "若 $f(x) = x^2 + 1$，其在 $x = 3$ 处切线的斜率为 $m$。求 $m$，以整数作答。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "From the definition (or power rule), $f'(x) = 2x$, so $m = f'(3) = 6$. The $+1$ shifts the graph up but does not change slopes.",
                "zh": "由定义（或幂法则）得 $f'(x) = 2x$，故 $m = f'(3) = 6$。$+1$ 只把图像上移，不改变斜率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement is true?",
                "zh": "下列哪个说法正确？"
              },
              "choices": [
                "Differentiability implies continuity, but continuity does not imply differentiability",
                "Continuity implies differentiability",
                "Differentiability and continuity are equivalent",
                "Neither implies the other"
              ],
              "answer": 0,
              "explanation": {
                "en": "A differentiable function must be continuous (the difference quotient could not have a finite limit across a break). But $|x|$ shows a continuous function can fail to be differentiable at a corner.",
                "zh": "可导函数必连续（若有断点，差商不可能有有限极限）。但 $|x|$ 说明连续函数可以在尖角处不可导。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$, which equals $f'(4)$ for $f(x) = x^2$. Give an integer.",
                "zh": "求 $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$，它等于 $f(x) = x^2$ 的 $f'(4)$。以整数作答。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "This is the alternate definition $\\lim_{x\\to a} \\frac{f(x) - f(a)}{x - a}$ with $a = 4$. Factoring gives $x + 4 \\to 8$, matching $f'(4) = 2 \\cdot 4 = 8$.",
                "zh": "这是另一种定义 $\\lim_{x\\to a} \\frac{f(x) - f(a)}{x - a}$，其中 $a = 4$。因式分解得 $x + 4 \\to 8$，与 $f'(4) = 2 \\cdot 4 = 8$ 一致。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The tangent line to $f$ at $x = 1$ is $y = 3x + 2$. What are $f(1)$ and $f'(1)$?",
                "zh": "$f$ 在 $x = 1$ 处的切线为 $y = 3x + 2$。$f(1)$ 和 $f'(1)$ 分别是多少？"
              },
              "choices": [
                "$f(1) = 2$, $f'(1) = 3$",
                "$f(1) = 3$, $f'(1) = 2$",
                "$f(1) = 5$, $f'(1) = 3$",
                "$f(1) = 5$, $f'(1) = 2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The tangent touches the curve at $x = 1$, so $f(1)$ equals the line value $3(1) + 2 = 5$, and $f'(1)$ equals the line slope $3$.",
                "zh": "切线在 $x = 1$ 处与曲线相切，故 $f(1)$ 等于直线在该处的值 $3(1)+2=5$，$f'(1)$ 等于直线斜率 $3$。"
              }
            }
          ]
        },
        {
          "id": "power-rule-and-basic-derivatives",
          "title": "The Power Rule and Basic Derivative Rules",
          "titleZh": "幂法则与基本求导法则",
          "content": [
            {
              "type": "h2",
              "en": "The Power Rule",
              "zh": "幂法则"
            },
            {
              "type": "p",
              "en": "Computing derivatives from the limit definition every time would be painful. Fortunately the pattern for powers is simple and works for every real exponent $n$:",
              "zh": "每次都用极限定义求导会非常繁琐。幸运的是，幂函数的求导规律很简单，且对任意实数指数 $n$ 都成立："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx} x^n = n x^{n-1}"
            },
            {
              "type": "p",
              "en": "Bring the exponent down as a coefficient, then reduce the exponent by one. This covers negative and fractional exponents too, which is why you should rewrite radicals and reciprocals as powers first: $\\sqrt{x} = x^{1/2}$ and $\\frac{1}{x^3} = x^{-3}$.",
              "zh": "把指数拿下来作系数，再把指数减一。这条法则同样适用于负指数和分数指数，所以求导前应先把根式和倒数改写成幂的形式：$\\sqrt{x} = x^{1/2}$，$\\frac{1}{x^3} = x^{-3}$。"
            },
            {
              "type": "h3",
              "en": "Linearity: Sums, Differences, and Constants",
              "zh": "线性性：和、差与常数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Constant rule: $\\frac{d}{dx} c = 0$ — a horizontal line has zero slope",
                  "zh": "常数法则：$\\frac{d}{dx} c = 0$——水平直线的斜率为零"
                },
                {
                  "en": "Constant multiple: $\\frac{d}{dx}[c\\,f(x)] = c\\,f'(x)$",
                  "zh": "常数倍法则：$\\frac{d}{dx}[c\\,f(x)] = c\\,f'(x)$"
                },
                {
                  "en": "Sum/difference: $\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$ — differentiate term by term",
                  "zh": "和差法则：$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$——逐项求导"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Exponential and Logarithmic Derivatives",
              "zh": "指数与对数函数的导数"
            },
            {
              "type": "p",
              "en": "Two more building blocks belong in this toolkit. The natural exponential is its own derivative, and the natural log has a beautifully simple one:",
              "zh": "还有两个基本构件属于这套工具箱。自然指数函数的导数是它自己，自然对数的导数则出奇地简洁："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx} e^x = e^x, \\qquad \\frac{d}{dx} \\ln x = \\frac{1}{x}"
            },
            {
              "type": "p",
              "en": "More generally, $\\frac{d}{dx} a^x = a^x \\ln a$ for any base $a > 0$.",
              "zh": "更一般地，对任意底数 $a > 0$，有 $\\frac{d}{dx} a^x = a^x \\ln a$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: rewrite before you differentiate. Expressions like $\\frac{x^3 + 2\\sqrt{x}}{x}$ should be split into $x^2 + 2x^{-1/2}$ first — students who try to memorize a \"fraction rule\" for such problems make far more errors than those who simplify.",
              "zh": "AP 考试提示：先改写再求导。像 $\\frac{x^3 + 2\\sqrt{x}}{x}$ 这样的式子应先拆成 $x^2 + 2x^{-1/2}$——试图对这类题硬套\"分式法则\"的学生比先化简的学生错得多。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Term-by-term differentiation",
                "zh": "例题 1：逐项求导"
              },
              "problem": {
                "en": "Find $\\frac{dy}{dx}$ if $y = 4x^5 - 3x^2 + 7x - 9$.",
                "zh": "若 $y = 4x^5 - 3x^2 + 7x - 9$，求 $\\frac{dy}{dx}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the power rule to each term: $\\frac{d}{dx} 4x^5 = 20x^4$, $\\frac{d}{dx}(-3x^2) = -6x$, $\\frac{d}{dx} 7x = 7$, and the constant $-9$ contributes $0$.",
                  "zh": "对每一项用幂法则：$\\frac{d}{dx} 4x^5 = 20x^4$，$\\frac{d}{dx}(-3x^2) = -6x$，$\\frac{d}{dx} 7x = 7$，常数 $-9$ 的导数为 $0$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = 20x^4 - 6x + 7"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Rewriting radicals and reciprocals",
                "zh": "例题 2：改写根式与倒数"
              },
              "problem": {
                "en": "Find $f'(x)$ for $f(x) = 6\\sqrt{x} + \\frac{4}{x^2}$, then evaluate $f'(1)$.",
                "zh": "求 $f(x) = 6\\sqrt{x} + \\frac{4}{x^2}$ 的 $f'(x)$，并计算 $f'(1)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rewrite: $f(x) = 6x^{1/2} + 4x^{-2}$.",
                  "zh": "改写：$f(x) = 6x^{1/2} + 4x^{-2}$。"
                },
                {
                  "type": "math",
                  "tex": "f'(x) = 6 \\cdot \\tfrac{1}{2} x^{-1/2} + 4(-2)x^{-3} = \\frac{3}{\\sqrt{x}} - \\frac{8}{x^3}"
                },
                {
                  "type": "p",
                  "en": "Then $f'(1) = 3 - 8 = -5$.",
                  "zh": "于是 $f'(1) = 3 - 8 = -5$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}(x^7) = $ ?",
                "zh": "$\\frac{d}{dx}(x^7) = $ ？"
              },
              "choices": [
                "$x^6$",
                "$7x^6$",
                "$7x^8$",
                "$\\frac{x^8}{8}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Power rule: bring down the exponent $7$ and reduce it by one, giving $7x^6$.",
                "zh": "幂法则：指数 $7$ 下移作系数，指数减一，得 $7x^6$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = 3x^4 - 5x + 2$, find $f'(1)$. Give an integer.",
                "zh": "若 $f(x) = 3x^4 - 5x + 2$，求 $f'(1)$，以整数作答。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "$f'(x) = 12x^3 - 5$, so $f'(1) = 12 - 5 = 7$. The constant $2$ vanishes when differentiating.",
                "zh": "$f'(x) = 12x^3 - 5$，故 $f'(1) = 12 - 5 = 7$。常数 $2$ 求导后消失。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}\\left(\\frac{1}{x^4}\\right) = $ ?",
                "zh": "$\\frac{d}{dx}\\left(\\frac{1}{x^4}\\right) = $ ？"
              },
              "choices": [
                "$-\\frac{1}{4x^3}$",
                "$\\frac{4}{x^5}$",
                "$-\\frac{4}{x^5}$",
                "$\\frac{1}{4x^3}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Rewrite as $x^{-4}$ and apply the power rule: $-4x^{-5} = -\\frac{4}{x^5}$. Do not forget the negative sign from the exponent.",
                "zh": "改写为 $x^{-4}$ 再用幂法则：$-4x^{-5} = -\\frac{4}{x^5}$。不要漏掉指数带来的负号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $g(x) = \\sqrt{x}$, find $g'(4)$. Give your answer as a fraction a/b.",
                "zh": "若 $g(x) = \\sqrt{x}$，求 $g'(4)$，以分数 a/b 作答。"
              },
              "answer": "1/4",
              "accept": [
                "0.25"
              ],
              "explanation": {
                "en": "$g(x) = x^{1/2}$, so $g'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Then $g'(4) = \\frac{1}{2 \\cdot 2} = \\frac{1}{4}$.",
                "zh": "$g(x) = x^{1/2}$，故 $g'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$。于是 $g'(4) = \\frac{1}{2 \\cdot 2} = \\frac{1}{4}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}(e^x + \\ln x) = $ ?",
                "zh": "$\\frac{d}{dx}(e^x + \\ln x) = $ ？"
              },
              "choices": [
                "$e^x - \\frac{1}{x}$",
                "$xe^{x-1} + \\frac{1}{x}$",
                "$e^x + \\ln x$",
                "$e^x + \\frac{1}{x}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$e^x$ is its own derivative (the power rule does NOT apply — the variable is in the exponent), and $\\frac{d}{dx}\\ln x = \\frac{1}{x}$.",
                "zh": "$e^x$ 的导数是它自己（幂法则不适用——变量在指数上），且 $\\frac{d}{dx}\\ln x = \\frac{1}{x}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the $x$-coordinate where the tangent to $y = x^2 - 6x + 1$ is horizontal. Give an integer.",
                "zh": "求 $y = x^2 - 6x + 1$ 的切线为水平时的 $x$ 坐标，以整数作答。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Horizontal tangent means $y' = 0$. Since $y' = 2x - 6$, set $2x - 6 = 0$ to get $x = 3$.",
                "zh": "水平切线意味着 $y' = 0$。由 $y' = 2x - 6$，令 $2x - 6 = 0$ 得 $x = 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $y = \\frac{x^3 + 4x}{x}$ for $x \\ne 0$, then $y' = $ ?",
                "zh": "若 $x \\ne 0$ 时 $y = \\frac{x^3 + 4x}{x}$，则 $y' = $ ？"
              },
              "choices": [
                "$2x$",
                "$3x^2 + 4$",
                "$x^2 + 4$",
                "$2x + 4$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Simplify first: $y = x^2 + 4$, so $y' = 2x$. Rewriting before differentiating avoids the quotient rule entirely.",
                "zh": "先化简：$y = x^2 + 4$，故 $y' = 2x$。求导前先改写，可以完全避开商法则。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = 2x^3 + ax$ and $f'(2) = 29$, find $a$. Give an integer.",
                "zh": "若 $f(x) = 2x^3 + ax$ 且 $f'(2) = 29$，求 $a$，以整数作答。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "$f'(x) = 6x^2 + a$, so $f'(2) = 24 + a = 29$, giving $a = 5$. Working backward from a derivative value is a standard AP twist.",
                "zh": "$f'(x) = 6x^2 + a$，故 $f'(2) = 24 + a = 29$，得 $a = 5$。由导数值反推参数是 AP 常见变式。"
              }
            }
          ]
        },
        {
          "id": "product-quotient-and-trig-derivatives",
          "title": "Product Rule, Quotient Rule, and Trig Derivatives",
          "titleZh": "乘积法则、商法则与三角函数导数",
          "content": [
            {
              "type": "h2",
              "en": "The Product Rule",
              "zh": "乘积法则"
            },
            {
              "type": "p",
              "en": "The derivative of a product is NOT the product of the derivatives. Instead, each factor takes a turn being differentiated:",
              "zh": "乘积的导数不等于导数的乘积。正确做法是让每个因子轮流被求导："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)"
            },
            {
              "type": "h3",
              "en": "The Quotient Rule",
              "zh": "商法则"
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}"
            },
            {
              "type": "p",
              "en": "A popular memory aid: \"low d-high minus high d-low, over low squared.\" The order in the numerator matters because of the minus sign — starting with $g \\cdot f'$ (denominator times derivative of numerator) keeps it straight.",
              "zh": "常用口诀：\"下乘上导，减去上乘下导，除以下的平方。\" 由于有减号，分子中的顺序很重要——先写 $g \\cdot f'$（分母乘分子的导数）就不会弄错。"
            },
            {
              "type": "h3",
              "en": "Derivatives of the Six Trig Functions",
              "zh": "六个三角函数的导数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\frac{d}{dx}\\sin x = \\cos x$ and $\\frac{d}{dx}\\cos x = -\\sin x$",
                  "zh": "$\\frac{d}{dx}\\sin x = \\cos x$，$\\frac{d}{dx}\\cos x = -\\sin x$"
                },
                {
                  "en": "$\\frac{d}{dx}\\tan x = \\sec^2 x$ and $\\frac{d}{dx}\\cot x = -\\csc^2 x$",
                  "zh": "$\\frac{d}{dx}\\tan x = \\sec^2 x$，$\\frac{d}{dx}\\cot x = -\\csc^2 x$"
                },
                {
                  "en": "$\\frac{d}{dx}\\sec x = \\sec x \\tan x$ and $\\frac{d}{dx}\\csc x = -\\csc x \\cot x$",
                  "zh": "$\\frac{d}{dx}\\sec x = \\sec x \\tan x$，$\\frac{d}{dx}\\csc x = -\\csc x \\cot x$"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: every \"co-\" function (cosine, cotangent, cosecant) has a negative sign in its derivative. Memorizing that single pattern cuts the six formulas down to three. Also note $\\tan x$ derives from the quotient rule applied to $\\frac{\\sin x}{\\cos x}$ — deriving it once helps you trust it.",
              "zh": "AP 考试提示：每个带 \"co-\" 的函数（cosine、cotangent、cosecant）的导数都带负号。记住这一条规律，六个公式就变成了三个。另外 $\\tan x$ 的导数可由商法则作用于 $\\frac{\\sin x}{\\cos x}$ 推出——亲手推一次会让你更有把握。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Product rule",
                "zh": "例题 1：乘积法则"
              },
              "problem": {
                "en": "Find $\\frac{dy}{dx}$ if $y = x^2 \\sin x$.",
                "zh": "若 $y = x^2 \\sin x$，求 $\\frac{dy}{dx}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $f = x^2$ and $g = \\sin x$, so $f' = 2x$ and $g' = \\cos x$.",
                  "zh": "设 $f = x^2$，$g = \\sin x$，则 $f' = 2x$，$g' = \\cos x$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = 2x\\sin x + x^2 \\cos x"
                },
                {
                  "type": "p",
                  "en": "Leave the answer in this form — the AP exam does not require factoring unless asked.",
                  "zh": "答案保留这种形式即可——除非题目要求，AP 考试不需要再因式分解。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Quotient rule",
                "zh": "例题 2：商法则"
              },
              "problem": {
                "en": "Find $h'(x)$ for $h(x) = \\frac{x^2 + 1}{x - 3}$, and evaluate $h'(2)$.",
                "zh": "求 $h(x) = \\frac{x^2 + 1}{x - 3}$ 的 $h'(x)$，并计算 $h'(2)$。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "h'(x) = \\frac{2x(x-3) - (x^2+1)(1)}{(x-3)^2} = \\frac{x^2 - 6x - 1}{(x-3)^2}"
                },
                {
                  "type": "p",
                  "en": "At $x = 2$: numerator $= 4 - 12 - 1 = -9$, denominator $= (-1)^2 = 1$, so $h'(2) = -9$.",
                  "zh": "在 $x = 2$ 处：分子 $= 4 - 12 - 1 = -9$，分母 $= (-1)^2 = 1$，故 $h'(2) = -9$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}(x^3 \\cos x) = $ ?",
                "zh": "$\\frac{d}{dx}(x^3 \\cos x) = $ ？"
              },
              "choices": [
                "$-3x^2\\sin x$",
                "$3x^2\\cos x - x^3\\sin x$",
                "$3x^2\\cos x + x^3\\sin x$",
                "$3x^2(-\\sin x)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Product rule: $(x^3)'\\cos x + x^3(\\cos x)' = 3x^2\\cos x + x^3(-\\sin x)$. The derivative of cosine carries a negative sign.",
                "zh": "乘积法则：$(x^3)'\\cos x + x^3(\\cos x)' = 3x^2\\cos x + x^3(-\\sin x)$。余弦的导数带负号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = x\\sin x$, find $f'\\left(\\frac{\\pi}{2}\\right)$. Give an integer.",
                "zh": "若 $f(x) = x\\sin x$，求 $f'\\left(\\frac{\\pi}{2}\\right)$，以整数作答。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "$f'(x) = \\sin x + x\\cos x$. At $x = \\frac{\\pi}{2}$: $\\sin\\frac{\\pi}{2} = 1$ and $\\cos\\frac{\\pi}{2} = 0$, so $f' = 1 + 0 = 1$.",
                "zh": "$f'(x) = \\sin x + x\\cos x$。在 $x = \\frac{\\pi}{2}$ 处：$\\sin\\frac{\\pi}{2} = 1$，$\\cos\\frac{\\pi}{2} = 0$，故 $f' = 1 + 0 = 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}\\tan x = $ ?",
                "zh": "$\\frac{d}{dx}\\tan x = $ ？"
              },
              "choices": [
                "$\\sec x \\tan x$",
                "$\\cot x$",
                "$\\sec^2 x$",
                "$-\\csc^2 x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Apply the quotient rule to $\\frac{\\sin x}{\\cos x}$: $\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$.",
                "zh": "对 $\\frac{\\sin x}{\\cos x}$ 用商法则：$\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $g(x) = \\frac{2x+1}{x+2}$, then $g'(x) = $ ?",
                "zh": "若 $g(x) = \\frac{2x+1}{x+2}$，则 $g'(x) = $ ？"
              },
              "choices": [
                "$\\frac{4x+5}{(x+2)^2}$",
                "$\\frac{-3}{(x+2)^2}$",
                "$2$",
                "$\\frac{3}{(x+2)^2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Quotient rule: $\\frac{2(x+2) - (2x+1)(1)}{(x+2)^2} = \\frac{2x + 4 - 2x - 1}{(x+2)^2} = \\frac{3}{(x+2)^2}$.",
                "zh": "商法则：$\\frac{2(x+2) - (2x+1)(1)}{(x+2)^2} = \\frac{2x + 4 - 2x - 1}{(x+2)^2} = \\frac{3}{(x+2)^2}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = \\frac{x}{x+1}$, find $f'(1)$. Give your answer as a fraction a/b.",
                "zh": "若 $f(x) = \\frac{x}{x+1}$，求 $f'(1)$，以分数 a/b 作答。"
              },
              "answer": "1/4",
              "accept": [
                "0.25"
              ],
              "explanation": {
                "en": "$f'(x) = \\frac{(1)(x+1) - x(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}$. So $f'(1) = \\frac{1}{4}$.",
                "zh": "$f'(x) = \\frac{(1)(x+1) - x(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}$。故 $f'(1) = \\frac{1}{4}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Given $f(2) = 3$, $f'(2) = -1$, $g(2) = 5$, $g'(2) = 4$, find $(fg)'(2)$.",
                "zh": "已知 $f(2) = 3$，$f'(2) = -1$，$g(2) = 5$，$g'(2) = 4$，求 $(fg)'(2)$。"
              },
              "choices": [
                "$7$",
                "$-4$",
                "$12$",
                "$17$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$(fg)' = f'g + fg'$ evaluated at $2$: $(-1)(5) + (3)(4) = -5 + 12 = 7$. Table-based product rule problems are an AP staple.",
                "zh": "$(fg)' = f'g + fg'$ 在 $2$ 处取值：$(-1)(5) + (3)(4) = -5 + 12 = 7$。基于表格的乘积法则题是 AP 常客。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the slope of $y = \\sec x$ at $x = \\frac{\\pi}{4}$, i.e. $\\sec\\frac{\\pi}{4}\\tan\\frac{\\pi}{4}$. Give in the form sqrt(2) or a decimal to 3 places.",
                "zh": "求 $y = \\sec x$ 在 $x = \\frac{\\pi}{4}$ 处的斜率，即 $\\sec\\frac{\\pi}{4}\\tan\\frac{\\pi}{4}$。以 sqrt(2) 形式或保留 3 位小数作答。"
              },
              "answer": "sqrt(2)",
              "accept": [
                "1.414",
                "√2",
                "sqrt2"
              ],
              "explanation": {
                "en": "$\\frac{d}{dx}\\sec x = \\sec x\\tan x$. At $\\frac{\\pi}{4}$: $\\sec\\frac{\\pi}{4} = \\sqrt{2}$ and $\\tan\\frac{\\pi}{4} = 1$, so the slope is $\\sqrt{2} \\approx 1.414$.",
                "zh": "$\\frac{d}{dx}\\sec x = \\sec x\\tan x$。在 $\\frac{\\pi}{4}$ 处：$\\sec\\frac{\\pi}{4} = \\sqrt{2}$，$\\tan\\frac{\\pi}{4} = 1$，斜率为 $\\sqrt{2} \\approx 1.414$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $h(x) = \\frac{f(x)}{g(x)}$ with $f(1)=4$, $f'(1)=2$, $g(1)=2$, $g'(1)=6$, then $h'(1) = $ ?",
                "zh": "若 $h(x) = \\frac{f(x)}{g(x)}$，且 $f(1)=4$，$f'(1)=2$，$g(1)=2$，$g'(1)=6$，则 $h'(1) = $ ？"
              },
              "choices": [
                "$-\\frac{5}{2}$",
                "$5$",
                "$-5$",
                "$7$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Quotient rule: $h'(1) = \\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(2)(2) - (4)(6)}{4} = \\frac{4 - 24}{4} = -5$.",
                "zh": "商法则：$h'(1) = \\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(2)(2) - (4)(6)}{4} = \\frac{4 - 24}{4} = -5$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "composite-implicit-and-inverse",
      "title": "Differentiation: Composite, Implicit, and Inverse Functions",
      "titleZh": "导数：复合函数、隐函数与反函数",
      "lessons": [
        {
          "id": "the-chain-rule",
          "title": "The Chain Rule",
          "titleZh": "链式法则",
          "content": [
            {
              "type": "h2",
              "en": "Differentiating Composite Functions",
              "zh": "复合函数求导"
            },
            {
              "type": "p",
              "en": "Most interesting functions are compositions: $\\sin(x^2)$, $(3x+1)^{10}$, $e^{5x}$. The chain rule says the derivative of a composition is the derivative of the outer function evaluated at the inner function, times the derivative of the inner function:",
              "zh": "大多数有意思的函数都是复合函数：$\\sin(x^2)$、$(3x+1)^{10}$、$e^{5x}$。链式法则指出：复合函数的导数等于外层函数在内层函数处的导数，乘以内层函数的导数："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)"
            },
            {
              "type": "p",
              "en": "In Leibniz notation, if $y = f(u)$ and $u = g(x)$, then $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$. Think of it as \"outside derivative (leave the inside alone), then multiply by inside derivative.\"",
              "zh": "用莱布尼茨记号：若 $y = f(u)$ 且 $u = g(x)$，则 $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$。可以理解为\"先对外层求导（内层保持不动），再乘以内层的导数\"。"
            },
            {
              "type": "h3",
              "en": "Recognizing the Layers",
              "zh": "识别函数的层次"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$(3x^2+1)^{5}$: outer $u^5$, inner $3x^2+1$ — derivative $5(3x^2+1)^4 \\cdot 6x$",
                  "zh": "$(3x^2+1)^{5}$：外层 $u^5$，内层 $3x^2+1$——导数为 $5(3x^2+1)^4 \\cdot 6x$"
                },
                {
                  "en": "$e^{5x}$: outer $e^u$, inner $5x$ — derivative $e^{5x} \\cdot 5$",
                  "zh": "$e^{5x}$：外层 $e^u$，内层 $5x$——导数为 $e^{5x} \\cdot 5$"
                },
                {
                  "en": "$\\ln(x^2+1)$: outer $\\ln u$, inner $x^2+1$ — derivative $\\frac{2x}{x^2+1}$",
                  "zh": "$\\ln(x^2+1)$：外层 $\\ln u$，内层 $x^2+1$——导数为 $\\frac{2x}{x^2+1}$"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: the most common chain rule error is forgetting the inner derivative entirely — writing $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2)$ instead of $2x\\cos(x^2)$. Wrong answer choices on the multiple-choice section are built from exactly this mistake, so its presence among the choices does not mean it is right.",
              "zh": "AP 考试提示：链式法则最常见的错误是完全忘掉内层导数——把 $\\frac{d}{dx}\\sin(x^2)$ 写成 $\\cos(x^2)$ 而不是 $2x\\cos(x^2)$。选择题的干扰项正是按这个错误设计的，所以选项里出现它不代表它是对的。"
            },
            {
              "type": "p",
              "en": "The chain rule also stacks: for three layers, differentiate from the outside in, multiplying as you go. For example, $\\frac{d}{dx}\\sin^3(2x) = 3\\sin^2(2x) \\cdot \\cos(2x) \\cdot 2$.",
              "zh": "链式法则可以层层叠加：三层复合时，从外到内逐层求导并连乘。例如 $\\frac{d}{dx}\\sin^3(2x) = 3\\sin^2(2x) \\cdot \\cos(2x) \\cdot 2$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Power of a function",
                "zh": "例题 1：函数的幂"
              },
              "problem": {
                "en": "Find $\\frac{dy}{dx}$ if $y = (2x^3 - 5x)^4$.",
                "zh": "若 $y = (2x^3 - 5x)^4$，求 $\\frac{dy}{dx}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Outer function: $u^4$ with derivative $4u^3$. Inner function: $u = 2x^3 - 5x$ with derivative $6x^2 - 5$.",
                  "zh": "外层函数：$u^4$，导数为 $4u^3$。内层函数：$u = 2x^3 - 5x$，导数为 $6x^2 - 5$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = 4(2x^3 - 5x)^3 \\cdot (6x^2 - 5)"
                },
                {
                  "type": "p",
                  "en": "The inner function stays untouched inside the parentheses; only the multiplier $6x^2 - 5$ comes from inside.",
                  "zh": "内层函数在括号里保持原样；只有乘数 $6x^2 - 5$ 来自内层求导。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Chain rule with trig and a table",
                "zh": "例题 2：三角函数与表格中的链式法则"
              },
              "problem": {
                "en": "Let $h(x) = f(g(x))$ where $g(2) = 6$, $g'(2) = -3$, and $f'(6) = 4$. Find $h'(2)$. Then find $\\frac{d}{dx}\\cos(5x)$.",
                "zh": "设 $h(x) = f(g(x))$，已知 $g(2) = 6$，$g'(2) = -3$，$f'(6) = 4$。求 $h'(2)$。再求 $\\frac{d}{dx}\\cos(5x)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By the chain rule, $h'(2) = f'(g(2)) \\cdot g'(2) = f'(6) \\cdot (-3) = 4(-3) = -12$. Note we needed $f'$ at $g(2) = 6$, not at $2$.",
                  "zh": "由链式法则，$h'(2) = f'(g(2)) \\cdot g'(2) = f'(6) \\cdot (-3) = 4(-3) = -12$。注意需要的是 $f'$ 在 $g(2) = 6$ 处的值，而不是在 $2$ 处。"
                },
                {
                  "type": "p",
                  "en": "For the second part: outer $\\cos u$ gives $-\\sin u$, inner $5x$ gives $5$, so the derivative is $-5\\sin(5x)$.",
                  "zh": "第二问：外层 $\\cos u$ 求导得 $-\\sin u$，内层 $5x$ 求导得 $5$，故导数为 $-5\\sin(5x)$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}(x^2+3)^5 = $ ?",
                "zh": "$\\frac{d}{dx}(x^2+3)^5 = $ ？"
              },
              "choices": [
                "$10x(x^2+3)^4$",
                "$5(x^2+3)^4$",
                "$5(2x)^4$",
                "$10x(x^2+3)^5$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Chain rule: $5(x^2+3)^4 \\cdot 2x = 10x(x^2+3)^4$. Choice B forgets the inner derivative $2x$.",
                "zh": "链式法则：$5(x^2+3)^4 \\cdot 2x = 10x(x^2+3)^4$。选项 B 忘记了内层导数 $2x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $y = e^{3x}$, find $\\frac{dy}{dx}$ at $x = 0$. Give an integer.",
                "zh": "若 $y = e^{3x}$，求 $x = 0$ 处的 $\\frac{dy}{dx}$，以整数作答。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "$\\frac{dy}{dx} = 3e^{3x}$ by the chain rule. At $x = 0$, $e^0 = 1$, so the slope is $3$.",
                "zh": "由链式法则 $\\frac{dy}{dx} = 3e^{3x}$。在 $x = 0$ 处 $e^0 = 1$，故斜率为 $3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}\\sin(x^3) = $ ?",
                "zh": "$\\frac{d}{dx}\\sin(x^3) = $ ？"
              },
              "choices": [
                "$3x^2\\cos(x^3)$",
                "$\\cos(x^3)$",
                "$3x^2\\cos(3x^2)$",
                "$-3x^2\\cos(x^3)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Outer derivative $\\cos(x^3)$ (inner unchanged) times inner derivative $3x^2$. Choice B is the classic \"forgot the chain\" trap.",
                "zh": "外层导数 $\\cos(x^3)$（内层不变）乘以内层导数 $3x^2$。选项 B 是经典的\"忘记链式法则\"陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $h(x) = f(g(x))$ with $g(1) = 4$, $g'(1) = 5$, $f'(4) = -2$. Find $h'(1)$. Give an integer.",
                "zh": "设 $h(x) = f(g(x))$，$g(1) = 4$，$g'(1) = 5$，$f'(4) = -2$。求 $h'(1)$，以整数作答。"
              },
              "answer": "-10",
              "accept": [
                "-10.0"
              ],
              "explanation": {
                "en": "$h'(1) = f'(g(1)) \\cdot g'(1) = f'(4) \\cdot 5 = (-2)(5) = -10$.",
                "zh": "$h'(1) = f'(g(1)) \\cdot g'(1) = f'(4) \\cdot 5 = (-2)(5) = -10$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}\\ln(2x^2+1) = $ ?",
                "zh": "$\\frac{d}{dx}\\ln(2x^2+1) = $ ？"
              },
              "choices": [
                "$4x\\ln(2x^2+1)$",
                "$\\frac{1}{2x^2+1}$",
                "$\\frac{4x}{\\ln(2x^2+1)}$",
                "$\\frac{4x}{2x^2+1}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\frac{d}{dx}\\ln u = \\frac{u'}{u}$: the inner derivative $4x$ goes on top of the inner function.",
                "zh": "$\\frac{d}{dx}\\ln u = \\frac{u'}{u}$：内层导数 $4x$ 作分子，内层函数作分母。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}\\cos^2 x = $ ?",
                "zh": "$\\frac{d}{dx}\\cos^2 x = $ ？"
              },
              "choices": [
                "$-2\\cos x \\sin x$",
                "$2\\cos x$",
                "$-\\sin^2 x$",
                "$2\\cos x\\sin x$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\cos^2 x = (\\cos x)^2$: outer power gives $2\\cos x$, inner $\\cos x$ gives $-\\sin x$; multiply to get $-2\\cos x\\sin x$.",
                "zh": "$\\cos^2 x = (\\cos x)^2$：外层幂求导得 $2\\cos x$，内层 $\\cos x$ 求导得 $-\\sin x$；相乘得 $-2\\cos x\\sin x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $y = \\sqrt{4x + 5}$, find $\\frac{dy}{dx}$ at $x = 1$. Give your answer as a fraction a/b.",
                "zh": "若 $y = \\sqrt{4x + 5}$，求 $x = 1$ 处的 $\\frac{dy}{dx}$，以分数 a/b 作答。"
              },
              "answer": "2/3",
              "accept": [
                "0.667",
                "0.6667"
              ],
              "explanation": {
                "en": "$y = (4x+5)^{1/2}$, so $y' = \\frac{1}{2}(4x+5)^{-1/2} \\cdot 4 = \\frac{2}{\\sqrt{4x+5}}$. At $x=1$: $\\frac{2}{\\sqrt{9}} = \\frac{2}{3}$.",
                "zh": "$y = (4x+5)^{1/2}$，故 $y' = \\frac{1}{2}(4x+5)^{-1/2} \\cdot 4 = \\frac{2}{\\sqrt{4x+5}}$。在 $x=1$ 处：$\\frac{2}{\\sqrt{9}} = \\frac{2}{3}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find $\\frac{d}{dx}\\left[\\sin^3(2x)\\right]$ at $x = 0$... actually, evaluate $6\\sin^2(2x)\\cos(2x)$ at $x = \\frac{\\pi}{4}$. Give an integer.",
                "zh": "求 $\\frac{d}{dx}\\left[\\sin^3(2x)\\right] = 6\\sin^2(2x)\\cos(2x)$ 在 $x = \\frac{\\pi}{4}$ 处的值，以整数作答。"
              },
              "answer": "0",
              "accept": [
                "0.0"
              ],
              "explanation": {
                "en": "The triple chain gives $3\\sin^2(2x) \\cdot \\cos(2x) \\cdot 2 = 6\\sin^2(2x)\\cos(2x)$. At $x = \\frac{\\pi}{4}$, $\\cos(2x) = \\cos\\frac{\\pi}{2} = 0$, so the whole product is $0$.",
                "zh": "三层链式法则给出 $3\\sin^2(2x) \\cdot \\cos(2x) \\cdot 2 = 6\\sin^2(2x)\\cos(2x)$。在 $x = \\frac{\\pi}{4}$ 处 $\\cos(2x) = \\cos\\frac{\\pi}{2} = 0$，整个乘积为 $0$。"
              }
            }
          ]
        },
        {
          "id": "implicit-differentiation",
          "title": "Implicit Differentiation",
          "titleZh": "隐函数求导",
          "content": [
            {
              "type": "h2",
              "en": "When $y$ Is Not Isolated",
              "zh": "当 $y$ 无法单独解出时"
            },
            {
              "type": "p",
              "en": "Curves like the circle $x^2 + y^2 = 25$ define $y$ implicitly — we cannot (or do not want to) solve for $y$ first. Implicit differentiation lets us find $\\frac{dy}{dx}$ anyway: differentiate both sides with respect to $x$, treating $y$ as a function of $x$. Every time you differentiate a term containing $y$, the chain rule forces a factor of $\\frac{dy}{dx}$.",
              "zh": "像圆 $x^2 + y^2 = 25$ 这样的曲线隐式地定义了 $y$——我们无法（或不想）先把 $y$ 解出来。隐函数求导法照样能求 $\\frac{dy}{dx}$：把 $y$ 看作 $x$ 的函数，对等式两边同时关于 $x$ 求导。每次对含 $y$ 的项求导时，链式法则都会带出一个 $\\frac{dy}{dx}$ 因子。"
            },
            {
              "type": "h3",
              "en": "The Procedure",
              "zh": "操作步骤"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Differentiate every term of both sides with respect to $x$; append $\\frac{dy}{dx}$ whenever you differentiate a $y$-term (e.g. $\\frac{d}{dx} y^3 = 3y^2 \\frac{dy}{dx}$)",
                  "zh": "对两边的每一项关于 $x$ 求导；每对一个含 $y$ 的项求导就补上一个 $\\frac{dy}{dx}$（例如 $\\frac{d}{dx} y^3 = 3y^2 \\frac{dy}{dx}$）"
                },
                {
                  "en": "Use product/quotient rules on mixed terms like $xy$: $\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}$",
                  "zh": "对 $xy$ 这类混合项使用乘积/商法则：$\\frac{d}{dx}(xy) = y + x\\frac{dy}{dx}$"
                },
                {
                  "en": "Collect all $\\frac{dy}{dx}$ terms on one side, factor out $\\frac{dy}{dx}$, and solve",
                  "zh": "把所有含 $\\frac{dy}{dx}$ 的项移到一边，提出公因式 $\\frac{dy}{dx}$，再解出它"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: an implicit derivative usually contains both $x$ and $y$ — that is expected. To evaluate the slope at a point you need both coordinates, and free-response answers may leave $\\frac{dy}{dx}$ in terms of $x$ and $y$. Also, horizontal tangents occur where the numerator of $\\frac{dy}{dx}$ is $0$ (and the denominator is not); vertical tangents where the denominator is $0$ (and the numerator is not).",
              "zh": "AP 考试提示：隐函数的导数通常同时含 $x$ 和 $y$——这是正常的。求某点斜率时需要该点的两个坐标，自由作答题中 $\\frac{dy}{dx}$ 可以用 $x$ 和 $y$ 共同表示。此外，水平切线出现在 $\\frac{dy}{dx}$ 的分子为 $0$（且分母不为 $0$）处；垂直切线出现在分母为 $0$（且分子不为 $0$）处。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Slope on a circle",
                "zh": "例题 1：圆上的斜率"
              },
              "problem": {
                "en": "Find $\\frac{dy}{dx}$ for $x^2 + y^2 = 25$, then compute the slope at the point $(3, 4)$.",
                "zh": "对 $x^2 + y^2 = 25$ 求 $\\frac{dy}{dx}$，并计算点 $(3, 4)$ 处的斜率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate both sides: $2x + 2y\\frac{dy}{dx} = 0$.",
                  "zh": "两边求导：$2x + 2y\\frac{dy}{dx} = 0$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = -\\frac{x}{y}"
                },
                {
                  "type": "p",
                  "en": "At $(3, 4)$ the slope is $-\\frac{3}{4}$. Geometric check: the radius to $(3,4)$ has slope $\\frac{4}{3}$, and the tangent is perpendicular to it.",
                  "zh": "在 $(3, 4)$ 处斜率为 $-\\frac{3}{4}$。几何验证：过 $(3,4)$ 的半径斜率为 $\\frac{4}{3}$，切线与半径垂直。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A mixed term requiring the product rule",
                "zh": "例题 2：需要乘积法则的混合项"
              },
              "problem": {
                "en": "Find $\\frac{dy}{dx}$ if $x^3 + xy + y^2 = 7$.",
                "zh": "若 $x^3 + xy + y^2 = 7$，求 $\\frac{dy}{dx}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate term by term: $3x^2 + \\left(y + x\\frac{dy}{dx}\\right) + 2y\\frac{dy}{dx} = 0$.",
                  "zh": "逐项求导：$3x^2 + \\left(y + x\\frac{dy}{dx}\\right) + 2y\\frac{dy}{dx} = 0$。"
                },
                {
                  "type": "p",
                  "en": "Group the $\\frac{dy}{dx}$ terms: $(x + 2y)\\frac{dy}{dx} = -3x^2 - y$.",
                  "zh": "整理含 $\\frac{dy}{dx}$ 的项：$(x + 2y)\\frac{dy}{dx} = -3x^2 - y$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = \\frac{-3x^2 - y}{x + 2y}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $x^2 + y^2 = 100$, then $\\frac{dy}{dx} = $ ?",
                "zh": "若 $x^2 + y^2 = 100$，则 $\\frac{dy}{dx} = $ ？"
              },
              "choices": [
                "$\\frac{x}{y}$",
                "$-\\frac{x}{y}$",
                "$-\\frac{y}{x}$",
                "$\\frac{100 - x}{y}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Differentiating gives $2x + 2y\\,y' = 0$, so $y' = -\\frac{x}{y}$ — the same result as for any circle centered at the origin.",
                "zh": "求导得 $2x + 2y\\,y' = 0$，故 $y' = -\\frac{x}{y}$——任何以原点为圆心的圆都是这个结果。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $x^2 + y^2 = 25$, find the slope at $(4, -3)$. Give your answer as a fraction a/b.",
                "zh": "对 $x^2 + y^2 = 25$，求点 $(4, -3)$ 处的斜率，以分数 a/b 作答。"
              },
              "answer": "4/3",
              "accept": [
                "1.333"
              ],
              "explanation": {
                "en": "$\\frac{dy}{dx} = -\\frac{x}{y} = -\\frac{4}{-3} = \\frac{4}{3}$. The sign of $y$ matters — points below the $x$-axis flip the sign.",
                "zh": "$\\frac{dy}{dx} = -\\frac{x}{y} = -\\frac{4}{-3} = \\frac{4}{3}$。$y$ 的符号很关键——$x$ 轴下方的点会翻转符号。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}(xy) = $ ?",
                "zh": "$\\frac{d}{dx}(xy) = $ ？"
              },
              "choices": [
                "$x\\frac{dy}{dx}$",
                "$\\frac{dy}{dx}$",
                "$y + x\\frac{dy}{dx}$",
                "$y$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$xy$ is a product of two functions of $x$, so the product rule applies: $(x)'y + x(y)' = y + x\\frac{dy}{dx}$.",
                "zh": "$xy$ 是两个关于 $x$ 的函数之积，需用乘积法则：$(x)'y + x(y)' = y + x\\frac{dy}{dx}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $y^3 + x^2 = 5y$, then $\\frac{dy}{dx} = $ ?",
                "zh": "若 $y^3 + x^2 = 5y$，则 $\\frac{dy}{dx} = $ ？"
              },
              "choices": [
                "$\\frac{2x + 3y^2}{5}$",
                "$\\frac{-2x}{3y^2}$",
                "$\\frac{2x}{5}$",
                "$\\frac{2x}{5 - 3y^2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Differentiate: $3y^2 y' + 2x = 5y'$. Collect: $y'(3y^2 - 5) = -2x$, so $y' = \\frac{-2x}{3y^2 - 5} = \\frac{2x}{5 - 3y^2}$.",
                "zh": "求导：$3y^2 y' + 2x = 5y'$。整理：$y'(3y^2 - 5) = -2x$，故 $y' = \\frac{-2x}{3y^2 - 5} = \\frac{2x}{5 - 3y^2}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The curve $xy = 12$ passes through $(3, 4)$. Find $\\frac{dy}{dx}$ there. Give your answer as a fraction a/b (include a minus sign if needed).",
                "zh": "曲线 $xy = 12$ 经过 $(3, 4)$。求该点处的 $\\frac{dy}{dx}$，以分数 a/b 作答（如为负请带负号）。"
              },
              "answer": "-4/3",
              "accept": [
                "-1.333"
              ],
              "explanation": {
                "en": "Product rule: $y + xy' = 0$, so $y' = -\\frac{y}{x} = -\\frac{4}{3}$ at $(3,4)$.",
                "zh": "乘积法则：$y + xy' = 0$，故 $y' = -\\frac{y}{x}$，在 $(3,4)$ 处为 $-\\frac{4}{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On the curve $x^2 + y^2 = 25$ with $\\frac{dy}{dx} = -\\frac{x}{y}$, where does the curve have a horizontal tangent?",
                "zh": "曲线 $x^2 + y^2 = 25$ 满足 $\\frac{dy}{dx} = -\\frac{x}{y}$。曲线在何处有水平切线？"
              },
              "choices": [
                "$(0, 5)$ and $(0, -5)$",
                "$(5, 0)$ and $(-5, 0)$",
                "Only at $(0, 5)$",
                "Nowhere"
              ],
              "answer": 0,
              "explanation": {
                "en": "Horizontal tangent: numerator $x = 0$ with $y \\ne 0$. On the circle, $x = 0$ gives $y = \\pm 5$: the top and bottom points. ($(\\pm 5, 0)$ have vertical tangents.)",
                "zh": "水平切线：分子 $x = 0$ 且 $y \\ne 0$。在圆上 $x = 0$ 给出 $y = \\pm 5$：最高点和最低点。（$(\\pm 5, 0)$ 处是垂直切线。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $x^2 y = 8$ and the point $(2, 2)$ is on the curve, find $\\frac{dy}{dx}$ at that point. Give an integer.",
                "zh": "若 $x^2 y = 8$，点 $(2, 2)$ 在曲线上，求该点处的 $\\frac{dy}{dx}$，以整数作答。"
              },
              "answer": "-2",
              "accept": [
                "-2.0"
              ],
              "explanation": {
                "en": "Product rule: $2xy + x^2 y' = 0$, so $y' = -\\frac{2y}{x}$. At $(2, 2)$: $y' = -\\frac{4}{2} = -2$.",
                "zh": "乘积法则：$2xy + x^2 y' = 0$，故 $y' = -\\frac{2y}{x}$。在 $(2, 2)$ 处：$y' = -\\frac{4}{2} = -2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $\\sin y = x$, valid for $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$, implicit differentiation gives $\\frac{dy}{dx} = $ ?",
                "zh": "对 $\\sin y = x$（$-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$），隐函数求导得 $\\frac{dy}{dx} = $ ？"
              },
              "choices": [
                "$-\\frac{1}{\\cos y}$",
                "$\\cos y$",
                "$\\frac{1}{\\cos y}$",
                "$\\frac{1}{\\sin y}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Differentiate: $\\cos y \\cdot y' = 1$, so $y' = \\frac{1}{\\cos y}$. This is exactly how the $\\arcsin$ derivative $\\frac{1}{\\sqrt{1-x^2}}$ is derived, since $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1-x^2}$.",
                "zh": "求导：$\\cos y \\cdot y' = 1$，故 $y' = \\frac{1}{\\cos y}$。这正是推导 $\\arcsin$ 导数 $\\frac{1}{\\sqrt{1-x^2}}$ 的方法，因为 $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1-x^2}$。"
              }
            }
          ]
        },
        {
          "id": "inverse-and-inverse-trig-derivatives",
          "title": "Derivatives of Inverse Functions and Inverse Trig",
          "titleZh": "反函数与反三角函数的导数",
          "content": [
            {
              "type": "h2",
              "en": "The Inverse Function Derivative Rule",
              "zh": "反函数求导法则"
            },
            {
              "type": "p",
              "en": "If $g$ is the inverse of $f$ (so $f(g(x)) = x$), differentiating both sides with the chain rule gives $f'(g(x)) \\cdot g'(x) = 1$, hence:",
              "zh": "若 $g$ 是 $f$ 的反函数（即 $f(g(x)) = x$），用链式法则对两边求导得 $f'(g(x)) \\cdot g'(x) = 1$，于是："
            },
            {
              "type": "math",
              "tex": "g'(x) = \\frac{1}{f'(g(x))}"
            },
            {
              "type": "p",
              "en": "In words: the slope of the inverse at $x$ is the reciprocal of the slope of the original function at the corresponding point $g(x)$. Graphically this makes sense — reflecting a graph across $y = x$ swaps rise and run, so slopes become reciprocals.",
              "zh": "换句话说：反函数在 $x$ 处的斜率，等于原函数在对应点 $g(x)$ 处斜率的倒数。从图像上看很自然——沿 $y = x$ 翻折图像会交换\"升\"与\"跑\"，斜率因此互为倒数。"
            },
            {
              "type": "note",
              "en": "AP exam tip: the hardest part is evaluating at the right point. To find $g'(3)$ where $g = f^{-1}$, first solve $f(?) = 3$ to locate $g(3)$, then take $\\frac{1}{f'(\\text{that value})}$. Plugging $3$ directly into $f'$ is the trap the question is built around.",
              "zh": "AP 考试提示：最难的是在正确的点求值。要求 $g'(3)$（其中 $g = f^{-1}$），先解 $f(?) = 3$ 找出 $g(3)$，再取 $\\frac{1}{f'(\\text{该值})}$。直接把 $3$ 代入 $f'$ 正是题目设下的陷阱。"
            },
            {
              "type": "h3",
              "en": "Inverse Trig Derivatives",
              "zh": "反三角函数的导数"
            },
            {
              "type": "p",
              "en": "Applying the rule (or implicit differentiation as in the last lesson) yields the AB-required formulas:",
              "zh": "应用上述法则（或如上一课那样用隐函数求导）可得 AB 要求掌握的公式："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}, \\qquad \\frac{d}{dx}\\arccos x = \\frac{-1}{\\sqrt{1-x^2}}"
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}"
            },
            {
              "type": "p",
              "en": "With a chain rule inside, replace $x$ by $u$ and multiply by $u'$: for instance $\\frac{d}{dx}\\arctan(3x) = \\frac{3}{1+9x^2}$.",
              "zh": "若内部还有复合，就把 $x$ 换成 $u$ 并乘以 $u'$：例如 $\\frac{d}{dx}\\arctan(3x) = \\frac{3}{1+9x^2}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Derivative of an inverse from a table",
                "zh": "例题 1：由表格求反函数的导数"
              },
              "problem": {
                "en": "Let $f(x) = x^3 + 2x + 1$, and let $g = f^{-1}$. Given $f(1) = 4$, find $g'(4)$.",
                "zh": "设 $f(x) = x^3 + 2x + 1$，$g = f^{-1}$。已知 $f(1) = 4$，求 $g'(4)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Since $f(1) = 4$, we know $g(4) = 1$.",
                  "zh": "因为 $f(1) = 4$，所以 $g(4) = 1$。"
                },
                {
                  "type": "p",
                  "en": "$f'(x) = 3x^2 + 2$, so $f'(1) = 5$.",
                  "zh": "$f'(x) = 3x^2 + 2$，故 $f'(1) = 5$。"
                },
                {
                  "type": "math",
                  "tex": "g'(4) = \\frac{1}{f'(g(4))} = \\frac{1}{f'(1)} = \\frac{1}{5}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Inverse trig with the chain rule",
                "zh": "例题 2：反三角函数与链式法则"
              },
              "problem": {
                "en": "Find $\\frac{dy}{dx}$ if $y = \\arcsin(2x)$, and state where the derivative is defined.",
                "zh": "若 $y = \\arcsin(2x)$，求 $\\frac{dy}{dx}$，并说明导数在何处有定义。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = \\frac{1}{\\sqrt{1-(2x)^2}} \\cdot 2 = \\frac{2}{\\sqrt{1-4x^2}}"
                },
                {
                  "type": "p",
                  "en": "The inner derivative $2$ multiplies the standard formula, and $(2x)^2 = 4x^2$ sits under the radical. The derivative exists for $1 - 4x^2 > 0$, i.e. $-\\frac{1}{2} < x < \\frac{1}{2}$.",
                  "zh": "内层导数 $2$ 乘在标准公式外面，根号内是 $(2x)^2 = 4x^2$。导数在 $1 - 4x^2 > 0$ 即 $-\\frac{1}{2} < x < \\frac{1}{2}$ 时有定义。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $g = f^{-1}$, then $g'(x) = $ ?",
                "zh": "若 $g = f^{-1}$，则 $g'(x) = $ ？"
              },
              "choices": [
                "$\\frac{1}{f'(g(x))}$",
                "$\\frac{1}{f'(x)}$",
                "$-f'(x)$",
                "$f'(g(x))$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Differentiate $f(g(x)) = x$ by the chain rule: $f'(g(x))g'(x) = 1$. Note the argument of $f'$ is $g(x)$, not $x$ — choice B is the standard trap.",
                "zh": "对 $f(g(x)) = x$ 用链式法则求导：$f'(g(x))g'(x) = 1$。注意 $f'$ 的自变量是 $g(x)$ 而非 $x$——选项 B 是典型陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}\\arctan x = $ ?",
                "zh": "$\\frac{d}{dx}\\arctan x = $ ？"
              },
              "choices": [
                "$\\sec^2 x$",
                "$\\frac{1}{\\sqrt{1-x^2}}$",
                "$\\frac{1}{1+x^2}$",
                "$\\frac{-1}{1+x^2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "From $\\tan y = x$: $\\sec^2 y \\cdot y' = 1$, and $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$, giving $y' = \\frac{1}{1+x^2}$.",
                "zh": "由 $\\tan y = x$：$\\sec^2 y \\cdot y' = 1$，而 $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$，故 $y' = \\frac{1}{1+x^2}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^3 + x$ and $g = f^{-1}$. Since $f(1) = 2$, find $g'(2)$. Give your answer as a fraction a/b.",
                "zh": "设 $f(x) = x^3 + x$，$g = f^{-1}$。已知 $f(1) = 2$，求 $g'(2)$，以分数 a/b 作答。"
              },
              "answer": "1/4",
              "accept": [
                "0.25"
              ],
              "explanation": {
                "en": "$g(2) = 1$ because $f(1) = 2$. Then $f'(x) = 3x^2 + 1$ gives $f'(1) = 4$, so $g'(2) = \\frac{1}{4}$.",
                "zh": "由 $f(1) = 2$ 得 $g(2) = 1$。$f'(x) = 3x^2 + 1$，$f'(1) = 4$，故 $g'(2) = \\frac{1}{4}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx}\\arcsin(x^2) = $ ?",
                "zh": "$\\frac{d}{dx}\\arcsin(x^2) = $ ？"
              },
              "choices": [
                "$\\frac{2x}{1+x^4}$",
                "$\\frac{1}{\\sqrt{1-x^4}}$",
                "$\\frac{2x}{\\sqrt{1-x^2}}$",
                "$\\frac{2x}{\\sqrt{1-x^4}}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Chain rule with $u = x^2$: $\\frac{u'}{\\sqrt{1-u^2}} = \\frac{2x}{\\sqrt{1-(x^2)^2}} = \\frac{2x}{\\sqrt{1-x^4}}$.",
                "zh": "设 $u = x^2$ 用链式法则：$\\frac{u'}{\\sqrt{1-u^2}} = \\frac{2x}{\\sqrt{1-(x^2)^2}} = \\frac{2x}{\\sqrt{1-x^4}}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\frac{d}{dx}\\arctan x$ at $x = 1$. Give your answer as a fraction a/b.",
                "zh": "求 $\\frac{d}{dx}\\arctan x$ 在 $x = 1$ 处的值，以分数 a/b 作答。"
              },
              "answer": "1/2",
              "accept": [
                "0.5"
              ],
              "explanation": {
                "en": "$\\frac{1}{1+x^2}$ at $x = 1$ is $\\frac{1}{1+1} = \\frac{1}{2}$.",
                "zh": "$\\frac{1}{1+x^2}$ 在 $x = 1$ 处为 $\\frac{1}{1+1} = \\frac{1}{2}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The table gives $f(2) = 7$, $f'(2) = 3$, $f(7) = 2$, $f'(7) = 5$. If $g = f^{-1}$, then $g'(7) = $ ?",
                "zh": "表格给出 $f(2) = 7$，$f'(2) = 3$，$f(7) = 2$，$f'(7) = 5$。若 $g = f^{-1}$，则 $g'(7) = $ ？"
              },
              "choices": [
                "$\\frac{1}{3}$",
                "$\\frac{1}{5}$",
                "$3$",
                "$\\frac{1}{7}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$g(7) = 2$ because $f(2) = 7$. So $g'(7) = \\frac{1}{f'(2)} = \\frac{1}{3}$. Using $f'(7)$ (choice B) is the classic wrong turn.",
                "zh": "因为 $f(2) = 7$，所以 $g(7) = 2$。故 $g'(7) = \\frac{1}{f'(2)} = \\frac{1}{3}$。用 $f'(7)$（选项 B）是典型的错误路径。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $y = \\arctan(2x)$, find $\\frac{dy}{dx}$ at $x = 0$. Give an integer.",
                "zh": "若 $y = \\arctan(2x)$，求 $x = 0$ 处的 $\\frac{dy}{dx}$，以整数作答。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "$y' = \\frac{2}{1 + 4x^2}$. At $x = 0$ the denominator is $1$, so the slope is $2$.",
                "zh": "$y' = \\frac{2}{1 + 4x^2}$。在 $x = 0$ 处分母为 $1$，故斜率为 $2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$f(x) = e^x$ has inverse $g(x) = \\ln x$. Using the inverse rule, $g'(x) = \\frac{1}{f'(g(x))}$ equals:",
                "zh": "$f(x) = e^x$ 的反函数是 $g(x) = \\ln x$。用反函数法则，$g'(x) = \\frac{1}{f'(g(x))}$ 等于："
              },
              "choices": [
                "$e^{\\ln x} \\cdot \\ln x$",
                "$\\frac{1}{e^x}$",
                "$\\frac{1}{x}$",
                "$x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$f'(t) = e^t$, so $f'(g(x)) = e^{\\ln x} = x$ and $g'(x) = \\frac{1}{x}$ — the inverse rule re-derives the familiar $\\ln$ derivative.",
                "zh": "$f'(t) = e^t$，故 $f'(g(x)) = e^{\\ln x} = x$，$g'(x) = \\frac{1}{x}$——反函数法则重新推出了熟悉的 $\\ln$ 导数公式。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "contextual-applications",
      "title": "Unit 4: Contextual Applications of Differentiation",
      "titleZh": "第四单元：导数的情境应用",
      "lessons": [
        {
          "id": "motion-and-rates-in-context",
          "title": "Straight-Line Motion and Rates in Context",
          "titleZh": "直线运动与情境中的变化率",
          "content": [
            {
              "type": "h2",
              "en": "A Derivative Is a Rate of Change",
              "zh": "导数就是变化率"
            },
            {
              "type": "p",
              "en": "Every derivative is a rate: $f'(x)$ tells you how fast the output of $f$ changes per one-unit change in its input, measured right at $x$. In an applied problem this is the whole point — the units of the derivative are always the units of the output divided by the units of the input. If $V(t)$ is the volume of water in a tank (liters) after $t$ minutes, then $V'(t)$ is measured in liters per minute, and $V'(5) = -3$ means that at $t = 5$ minutes the water is draining at $3$ liters per minute.",
              "zh": "每个导数都是一个变化率：$f'(x)$ 告诉你当输入变化一个单位时，$f$ 的输出变化有多快，且是在 $x$ 这一点处测量的。在应用问题中这正是关键——导数的单位永远是\"输出单位除以输入单位\"。若 $V(t)$ 是水箱中经过 $t$ 分钟后的水量（升），则 $V'(t)$ 的单位是升每分钟，$V'(5) = -3$ 表示在 $t = 5$ 分钟时水正以每分钟 $3$ 升的速度流出。"
            },
            {
              "type": "note",
              "en": "AP exam tip: interpretation questions want three things — a number, correct units, and a sentence in context. \"$V'(5) = -3$\" alone earns little; \"at time $t = 5$ minutes the volume is decreasing at a rate of $3$ liters per minute\" earns full credit. The sign tells you increasing vs. decreasing.",
              "zh": "AP 考试提示：解释类题目要三样东西——一个数值、正确的单位，以及一句结合情境的话。只写\"$V'(5) = -3$\"几乎不得分；写\"在 $t = 5$ 分钟时，水量正以每分钟 $3$ 升的速度减少\"才能得满分。符号告诉你是增加还是减少。"
            },
            {
              "type": "h2",
              "en": "Straight-Line Motion: Position, Velocity, Acceleration",
              "zh": "直线运动：位置、速度、加速度"
            },
            {
              "type": "p",
              "en": "When a particle moves along a straight line, its position at time $t$ is a function $s(t)$. Velocity is the rate of change of position, and acceleration is the rate of change of velocity:",
              "zh": "当质点沿直线运动时，它在时刻 $t$ 的位置是函数 $s(t)$。速度是位置的变化率，加速度是速度的变化率："
            },
            {
              "type": "math",
              "tex": "v(t) = s'(t), \\qquad a(t) = v'(t) = s''(t)"
            },
            {
              "type": "p",
              "en": "Velocity is a signed quantity: its sign tells you direction. $v(t) > 0$ means the particle moves in the positive direction (right or up), and $v(t) < 0$ means it moves in the negative direction. The particle is momentarily at rest when $v(t) = 0$, and it changes direction only where $v$ changes sign.",
              "zh": "速度是带符号的量：它的符号表示方向。$v(t) > 0$ 表示质点朝正方向运动（向右或向上），$v(t) < 0$ 表示朝负方向运动。当 $v(t) = 0$ 时质点瞬时静止，而只有在 $v$ 变号处质点才改变方向。"
            },
            {
              "type": "h3",
              "en": "Speed Is the Absolute Value of Velocity",
              "zh": "速率是速度的绝对值"
            },
            {
              "type": "p",
              "en": "Speed and velocity are not the same. Velocity carries a sign; speed is how fast the particle moves regardless of direction, so $\\text{speed} = |v(t)|$. A velocity of $-8$ m/s and a velocity of $+8$ m/s represent the same speed of $8$ m/s in opposite directions.",
              "zh": "速率与速度并不相同。速度带符号；速率是质点运动的快慢，不管方向，所以 $\\text{速率} = |v(t)|$。速度为 $-8$ m/s 和 $+8$ m/s 表示相同的速率 $8$ m/s，只是方向相反。"
            },
            {
              "type": "h3",
              "en": "Speeding Up vs. Slowing Down",
              "zh": "加速与减速"
            },
            {
              "type": "p",
              "en": "Whether a particle is speeding up or slowing down is decided by comparing the signs of velocity and acceleration — not by the sign of either one alone:",
              "zh": "判断质点在加速还是减速，要比较速度与加速度的符号——不能只看其中一个的符号："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $v(t)$ and $a(t)$ have the SAME sign (both $+$ or both $-$), speed is increasing (speeding up).",
                  "zh": "若 $v(t)$ 与 $a(t)$ 符号相同（都为 $+$ 或都为 $-$），则速率在增大（加速）。"
                },
                {
                  "en": "If $v(t)$ and $a(t)$ have OPPOSITE signs, speed is decreasing (slowing down).",
                  "zh": "若 $v(t)$ 与 $a(t)$ 符号相反，则速率在减小（减速）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: students think negative acceleration always means \"slowing down.\" Not so — a particle with velocity $-6$ and acceleration $-2$ is speeding up, because both are negative. The rule is about matching signs, because $\\frac{d}{dt}|v| $ has the sign of $v\\cdot a$.",
              "zh": "常见错误：学生以为负的加速度总是意味着\"减速\"。并非如此——速度为 $-6$、加速度为 $-2$ 的质点在加速，因为两者都为负。规则是看符号是否一致，因为 $\\frac{d}{dt}|v|$ 的符号与 $v\\cdot a$ 相同。"
            },
            {
              "type": "h2",
              "en": "Rates of Change in Applied Contexts",
              "zh": "应用情境中的变化率"
            },
            {
              "type": "p",
              "en": "The same idea applies far beyond motion. If $P(t)$ is a population, $P'(t)$ is the growth rate in people per year. If $C(x)$ is the cost of producing $x$ items, $C'(x)$ is the marginal cost in dollars per item. Positive derivative means the quantity is rising; negative means it is falling; a derivative equal to zero marks a moment where the quantity is neither rising nor falling.",
              "zh": "同样的思想远不止用于运动。若 $P(t)$ 是人口，则 $P'(t)$ 是增长率，单位是人每年。若 $C(x)$ 是生产 $x$ 件产品的成本，则 $C'(x)$ 是边际成本，单位是美元每件。导数为正表示量在上升；为负表示在下降；导数等于零则标记着量既不升也不降的时刻。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Interpreting a rate with units",
                "zh": "例题 1：带单位解释变化率"
              },
              "problem": {
                "en": "The temperature of coffee is $H(t)$ degrees Celsius $t$ minutes after it is poured, and $H'(10) = -1.8$. Interpret this value in context.",
                "zh": "咖啡倒出后 $t$ 分钟的温度为 $H(t)$ 摄氏度，且 $H'(10) = -1.8$。请结合情境解释这个值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The derivative $H'$ has units of degrees Celsius per minute. The input is $t = 10$ minutes; the value is $-1.8$ with a negative sign.",
                  "zh": "导数 $H'$ 的单位是摄氏度每分钟。输入为 $t = 10$ 分钟；值为 $-1.8$，符号为负。"
                },
                {
                  "type": "p",
                  "en": "At $t = 10$ minutes, the temperature of the coffee is decreasing at a rate of $1.8$ degrees Celsius per minute.",
                  "zh": "在 $t = 10$ 分钟时，咖啡的温度正以每分钟 $1.8$ 摄氏度的速度下降。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Motion analysis",
                "zh": "例题 2：运动分析"
              },
              "problem": {
                "en": "A particle moves along a line with position $s(t) = t^3 - 6t^2 + 9t$ meters for $t \\ge 0$ seconds. Find the velocity and acceleration at $t = 1$, and determine whether the particle is speeding up or slowing down there.",
                "zh": "一质点沿直线运动，位置为 $s(t) = t^3 - 6t^2 + 9t$ 米（$t \\ge 0$ 秒）。求 $t = 1$ 时的速度和加速度，并判断此时质点在加速还是减速。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate: $v(t) = s'(t) = 3t^2 - 12t + 9$ and $a(t) = v'(t) = 6t - 12$.",
                  "zh": "求导：$v(t) = s'(t) = 3t^2 - 12t + 9$，$a(t) = v'(t) = 6t - 12$。"
                },
                {
                  "type": "math",
                  "tex": "v(1) = 3 - 12 + 9 = 0? \\;\\Rightarrow\\; v(1) = 0"
                },
                {
                  "type": "p",
                  "en": "Careful: $v(1) = 3(1) - 12(1) + 9 = 0$, so at $t = 1$ the particle is momentarily at rest. Since $v(1) = 0$, the particle is neither speeding up nor slowing down at that instant — its speed is zero. (This is exactly the turning point where velocity changes sign.)",
                  "zh": "注意：$v(1) = 3(1) - 12(1) + 9 = 0$，所以在 $t = 1$ 时质点瞬时静止。既然 $v(1) = 0$，此刻质点既不加速也不减速——其速率为零。（这正是速度变号的转向点。）"
                },
                {
                  "type": "p",
                  "en": "Check a nearby time to see the behavior: at $t = 2$, $v(2) = 12 - 24 + 9 = -3$ (moving in the negative direction) and $a(2) = 12 - 12 = 0$, and at $t = 3$, $v(3) = 27 - 36 + 9 = 0$ again. Between them $v < 0$ while $a > 0$ for $t$ slightly past $2$, meaning opposite signs, so the particle is slowing down as it approaches $t = 3$.",
                  "zh": "检查附近的时刻以观察行为：$t = 2$ 时 $v(2) = 12 - 24 + 9 = -3$（朝负方向运动），$a(2) = 12 - 12 = 0$；$t = 3$ 时 $v(3) = 27 - 36 + 9 = 0$。在稍过 $2$ 之后 $v < 0$ 而 $a > 0$，符号相反，因此质点在趋向 $t = 3$ 时减速。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A tank drains so that the volume of water is $W(t)$ gallons after $t$ hours, and $W'(3) = -12$. Which statement is the correct interpretation?",
                "zh": "一水箱排水，经过 $t$ 小时后水量为 $W(t)$ 加仑，且 $W'(3) = -12$。哪句解释正确？"
              },
              "choices": [
                "At $t = 3$ hours, the volume is decreasing at $12$ gallons per hour",
                "At $t = 3$ hours, there are $12$ gallons of water in the tank",
                "Over the first $3$ hours the tank lost $12$ gallons",
                "At $t = 3$ hours, the volume is increasing at $12$ gallons per hour"
              ],
              "answer": 0,
              "explanation": {
                "en": "A derivative is an instantaneous rate with units of gallons per hour, and the negative sign means decreasing. The tempting wrong idea is to read $W'(3)$ as an amount of water ($W(3)$) rather than a rate of change.",
                "zh": "导数是瞬时变化率，单位为加仑每小时，负号表示减少。诱人的错误想法是把 $W'(3)$ 读成水的数量（$W(3)$），而不是变化率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle on a line has velocity $v(t) = -5$ m/s and acceleration $a(t) = -2$ m/s$^2$ at some instant. At that instant the particle is:",
                "zh": "直线上一质点在某时刻的速度为 $v(t) = -5$ m/s，加速度为 $a(t) = -2$ m/s$^2$。此刻质点："
              },
              "choices": [
                "Slowing down because acceleration is negative",
                "Speeding up because velocity and acceleration have the same sign",
                "At rest",
                "Moving in the positive direction"
              ],
              "answer": 1,
              "explanation": {
                "en": "Speeding up vs. slowing down depends on matching signs, not on acceleration alone. Both are negative, so speed is increasing. The trap is assuming negative acceleration always means slowing down.",
                "zh": "加速还是减速取决于符号是否一致，而不只看加速度。两者都为负，所以速率在增大。陷阱在于以为负加速度总意味着减速。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle has position $s(t) = t^2 - 6t + 4$ meters. Find its velocity at $t = 4$ seconds. Give an integer (meters per second).",
                "zh": "质点的位置为 $s(t) = t^2 - 6t + 4$ 米。求它在 $t = 4$ 秒时的速度。请填一个整数（米每秒）。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "Velocity is $v(t) = s'(t) = 2t - 6$, so $v(4) = 8 - 6 = 2$ m/s. The positive sign means the particle is moving in the positive direction.",
                "zh": "速度为 $v(t) = s'(t) = 2t - 6$，故 $v(4) = 8 - 6 = 2$ m/s。正号表示质点朝正方向运动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the same particle $s(t) = t^2 - 6t + 4$, find the speed at $t = 1$ second. Give an integer (meters per second).",
                "zh": "对同一质点 $s(t) = t^2 - 6t + 4$，求 $t = 1$ 秒时的速率。请填一个整数（米每秒）。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "Velocity is $v(1) = 2(1) - 6 = -4$ m/s, so the speed is $|v(1)| = 4$ m/s. Speed is the absolute value of velocity, so the answer is positive even though velocity is negative.",
                "zh": "速度为 $v(1) = 2(1) - 6 = -4$ m/s，故速率为 $|v(1)| = 4$ m/s。速率是速度的绝对值，所以尽管速度为负，答案仍为正。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle moves with velocity $v(t) = t^2 - 4t + 3$ for $t \\ge 0$. At which time does the particle change direction from moving in the positive direction to the negative direction?",
                "zh": "质点以速度 $v(t) = t^2 - 4t + 3$（$t \\ge 0$）运动。质点在何时从正方向运动转为负方向运动？"
              },
              "choices": [
                "$t = 3$",
                "$t = 2$",
                "$t = 1$",
                "$t = 0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Factor: $v(t) = (t-1)(t-3)$, zero at $t = 1$ and $t = 3$. For $t < 1$, $v > 0$; just after $t = 1$, $v < 0$ — so at $t = 1$ velocity goes from positive to negative. At $t = 3$ it switches back from negative to positive, which is the opposite change.",
                "zh": "因式分解：$v(t) = (t-1)(t-3)$，在 $t = 1$ 与 $t = 3$ 处为零。当 $t < 1$ 时 $v > 0$；刚过 $t = 1$ 后 $v < 0$——所以在 $t = 1$ 速度由正变负。在 $t = 3$ 它又由负变正，这是相反的变化。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The number of bacteria in a culture is $B(t)$ thousand after $t$ hours. If $B'(2) = 0$ and $B''(2) < 0$, which best describes the population at $t = 2$?",
                "zh": "培养皿中细菌数量为 $B(t)$ 千个（经过 $t$ 小时）。若 $B'(2) = 0$ 且 $B''(2) < 0$，下列哪项最好地描述了 $t = 2$ 时的种群？"
              },
              "choices": [
                "The population is at a local minimum",
                "The population is decreasing at $2$ thousand per hour",
                "The population is exactly zero",
                "The population is momentarily neither growing nor shrinking, and is at a local maximum"
              ],
              "answer": 3,
              "explanation": {
                "en": "A first derivative of zero means the growth rate is momentarily zero; a negative second derivative means the rate is falling, so it is a local maximum. The trap is confusing $B'(2) = 0$ (rate is zero) with $B(2) = 0$ (population is zero).",
                "zh": "一阶导数为零表示增长率瞬时为零；二阶导数为负表示增长率在下降，故为局部最大值。陷阱是把 $B'(2) = 0$（变化率为零）与 $B(2) = 0$（数量为零）混淆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle has position $s(t) = t^3 - 3t^2$ meters. Find its acceleration at $t = 3$ seconds. Give an integer (m/s$^2$).",
                "zh": "质点的位置为 $s(t) = t^3 - 3t^2$ 米。求它在 $t = 3$ 秒时的加速度。请填一个整数（m/s$^2$）。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "Velocity $v(t) = 3t^2 - 6t$, acceleration $a(t) = 6t - 6$, so $a(3) = 18 - 6 = 12$ m/s$^2$. Acceleration is the second derivative of position.",
                "zh": "速度 $v(t) = 3t^2 - 6t$，加速度 $a(t) = 6t - 6$，故 $a(3) = 18 - 6 = 12$ m/s$^2$。加速度是位置的二阶导数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle has velocity $v(t) = t^2 - 4t + 3$ and acceleration $a(t) = 2t - 4$. At $t = 0.5$, is the particle speeding up or slowing down?",
                "zh": "质点的速度为 $v(t) = t^2 - 4t + 3$，加速度为 $a(t) = 2t - 4$。在 $t = 0.5$ 时，质点在加速还是减速？"
              },
              "choices": [
                "Speeding up, because $v$ and $a$ have the same sign",
                "Slowing down, because $v > 0$ and $a < 0$ have opposite signs",
                "At rest, because $v = 0$",
                "Speeding up, because acceleration is negative"
              ],
              "answer": 1,
              "explanation": {
                "en": "At $t = 0.5$: $v = 0.25 - 2 + 3 = 1.25 > 0$ and $a = 1 - 4 = -3 < 0$. Opposite signs mean slowing down. The trap is looking at only one of the two signs.",
                "zh": "在 $t = 0.5$ 时：$v = 0.25 - 2 + 3 = 1.25 > 0$，$a = 1 - 4 = -3 < 0$。符号相反表示减速。陷阱是只看两个符号中的一个。"
              }
            }
          ]
        },
        {
          "id": "related-rates-linearization-lhopital",
          "title": "Related Rates, Linearization, and L'Hôpital's Rule",
          "titleZh": "相关变化率、线性近似与洛必达法则",
          "content": [
            {
              "type": "h2",
              "en": "Related Rates",
              "zh": "相关变化率"
            },
            {
              "type": "p",
              "en": "In a related-rates problem, two or more quantities change together over time, and knowing how fast one changes lets you find how fast another changes. The key insight is that if the quantities are linked by an equation, then their rates are linked by the derivative of that equation with respect to time $t$.",
              "zh": "在相关变化率问题中，两个或更多的量随时间一起变化，知道其中一个变化的快慢就能求出另一个变化的快慢。关键在于：如果这些量由一个方程联系起来，那么它们的变化率就由该方程对时间 $t$ 求导后的方程联系起来。"
            },
            {
              "type": "h3",
              "en": "The Four-Step Strategy",
              "zh": "四步法"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Draw a picture and name the variables. Label what changes with time as functions of $t$.",
                  "zh": "画图并给变量命名。把随时间变化的量标为 $t$ 的函数。"
                },
                {
                  "en": "Relate the variables with an equation (geometry, Pythagorean theorem, area/volume formula).",
                  "zh": "用一个方程把变量联系起来（几何关系、勾股定理、面积/体积公式）。"
                },
                {
                  "en": "Differentiate both sides with respect to $t$, using the chain rule on every variable.",
                  "zh": "两边对 $t$ 求导，对每个变量都使用链式法则。"
                },
                {
                  "en": "Substitute the known values and rates last, then solve for the unknown rate.",
                  "zh": "最后代入已知的数值和变化率，再解出未知的变化率。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: do NOT plug in the specific numbers until AFTER you differentiate. If you substitute a value that is actually changing (like a radius) before differentiating, you treat it as a constant and get the wrong rate. Constants may be substituted early; changing quantities only at the end.",
              "zh": "AP 考试提示：在求导之前不要代入具体数值。如果在求导前代入一个其实在变化的量（如半径），就把它当成了常数，会得到错误的变化率。常量可以提前代入；变化的量只能在最后代入。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Expanding circle",
                "zh": "例题 1：扩大的圆"
              },
              "problem": {
                "en": "Oil spreads in a circular patch. The radius grows at $2$ m/min. How fast is the area growing when the radius is $5$ m?",
                "zh": "油在水面上呈圆形扩散。半径以 $2$ m/min 增长。当半径为 $5$ m 时，面积增长有多快？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Area and radius are related by $A = \\pi r^2$. Differentiate both sides with respect to $t$:",
                  "zh": "面积与半径由 $A = \\pi r^2$ 联系。两边对 $t$ 求导："
                },
                {
                  "type": "math",
                  "tex": "\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}"
                },
                {
                  "type": "p",
                  "en": "Now substitute $r = 5$ and $\\frac{dr}{dt} = 2$:",
                  "zh": "现在代入 $r = 5$ 与 $\\frac{dr}{dt} = 2$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{dA}{dt} = 2\\pi (5)(2) = 20\\pi \\approx 62.8 \\text{ m}^2/\\text{min}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Sliding ladder",
                "zh": "例题 2：滑动的梯子"
              },
              "problem": {
                "en": "A $10$-ft ladder leans against a wall. The bottom slides away from the wall at $3$ ft/s. How fast is the top sliding down when the bottom is $6$ ft from the wall?",
                "zh": "一架 $10$ 英尺的梯子靠在墙上。底端以 $3$ ft/s 滑离墙壁。当底端离墙 $6$ 英尺时，顶端下滑有多快？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $x$ be the distance from wall to the bottom and $y$ the height of the top. By the Pythagorean theorem $x^2 + y^2 = 100$. When $x = 6$, $y = \\sqrt{100 - 36} = 8$.",
                  "zh": "设 $x$ 为墙到底端的距离，$y$ 为顶端的高度。由勾股定理 $x^2 + y^2 = 100$。当 $x = 6$ 时，$y = \\sqrt{100 - 36} = 8$。"
                },
                {
                  "type": "p",
                  "en": "Differentiate with respect to $t$:",
                  "zh": "对 $t$ 求导："
                },
                {
                  "type": "math",
                  "tex": "2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0"
                },
                {
                  "type": "p",
                  "en": "Substitute $x = 6$, $y = 8$, $\\frac{dx}{dt} = 3$:",
                  "zh": "代入 $x = 6$，$y = 8$，$\\frac{dx}{dt} = 3$："
                },
                {
                  "type": "math",
                  "tex": "2(6)(3) + 2(8)\\frac{dy}{dt} = 0 \\;\\Rightarrow\\; \\frac{dy}{dt} = -\\frac{36}{16} = -2.25 \\text{ ft/s}"
                },
                {
                  "type": "p",
                  "en": "The negative sign confirms the top is sliding down at $2.25$ ft/s.",
                  "zh": "负号确认顶端正以 $2.25$ ft/s 下滑。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Local Linearity and Tangent-Line Approximation",
              "zh": "局部线性与切线近似"
            },
            {
              "type": "p",
              "en": "Zoom in far enough on a differentiable curve and it looks like its tangent line. This is local linearity, and it lets us approximate hard-to-compute values of $f$ near a point $a$ using the tangent line — the linearization:",
              "zh": "把一条可导曲线放大到足够近，它看起来就像它的切线。这就是局部线性，它让我们能用切线——即线性近似——来估计 $f$ 在某点 $a$ 附近难以直接计算的值："
            },
            {
              "type": "math",
              "tex": "L(x) = f(a) + f'(a)(x - a)"
            },
            {
              "type": "p",
              "en": "Then $f(x) \\approx L(x)$ for $x$ near $a$. Choose $a$ to be a convenient point where $f(a)$ and $f'(a)$ are easy to compute.",
              "zh": "于是当 $x$ 靠近 $a$ 时 $f(x) \\approx L(x)$。选取 $a$ 为一个方便的点，使 $f(a)$ 与 $f'(a)$ 容易计算。"
            },
            {
              "type": "h3",
              "en": "Over- or Under-Estimate? Ask the Concavity",
              "zh": "高估还是低估？看凹凸性"
            },
            {
              "type": "p",
              "en": "The tangent line lies on one side of the curve depending on concavity. If $f$ is concave up ($f'' > 0$) near $a$, the curve bends above its tangent line, so the linearization UNDER-estimates $f(x)$. If $f$ is concave down ($f'' < 0$), the tangent lies above the curve, so the linearization OVER-estimates.",
              "zh": "切线位于曲线的哪一侧取决于凹凸性。若 $f$ 在 $a$ 附近凹向上（$f'' > 0$），曲线弯在切线上方，故线性近似会低估 $f(x)$。若 $f$ 凹向下（$f'' < 0$），切线在曲线上方，故线性近似会高估。"
            },
            {
              "type": "note",
              "en": "AP exam tip: whenever a question asks whether a tangent-line estimate is too big or too small, it is testing concavity. Check the sign of $f''$ at $a$: concave up $\\Rightarrow$ underestimate, concave down $\\Rightarrow$ overestimate. State the reason explicitly for full credit.",
              "zh": "AP 考试提示：只要题目问切线估计是偏大还是偏小，考的就是凹凸性。检查 $f''$ 在 $a$ 处的符号：凹向上 $\\Rightarrow$ 低估，凹向下 $\\Rightarrow$ 高估。明确写出理由才能得满分。"
            },
            {
              "type": "h2",
              "en": "L'Hôpital's Rule",
              "zh": "洛必达法则"
            },
            {
              "type": "p",
              "en": "When a limit produces the indeterminate form $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, L'Hôpital's Rule says you may differentiate the numerator and denominator separately and try the limit again:",
              "zh": "当极限得到不定式 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$ 时，洛必达法则说你可以分别对分子和分母求导，再重新求极限："
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}"
            },
            {
              "type": "p",
              "en": "This is valid provided the new limit exists (or is $\\pm\\infty$). Note carefully: you differentiate top and bottom separately — this is NOT the quotient rule.",
              "zh": "前提是新的极限存在（或为 $\\pm\\infty$）。特别注意：你是分别对分子分母求导——这不是商法则。"
            },
            {
              "type": "note",
              "en": "AP exam tip: you MUST verify the indeterminate form first. Substitute $x = a$ and confirm you get $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ before applying the rule; state this justification. Applying L'Hôpital to a form like $\\frac{2}{5}$ or $\\frac{3}{0}$ gives a wrong answer and loses points.",
              "zh": "AP 考试提示：必须先验证不定式。代入 $x = a$，确认得到 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$ 后才能用法则；并写出这个理由。对 $\\frac{2}{5}$ 或 $\\frac{3}{0}$ 这样的形式使用洛必达会得到错误答案并失分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: L'Hôpital on a $\\frac{0}{0}$ form",
                "zh": "例题 3：对 $\\frac{0}{0}$ 形式用洛必达"
              },
              "problem": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1}{\\sin x}$.",
                "zh": "求 $\\lim_{x \\to 0} \\frac{e^x - 1}{\\sin x}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitute $x = 0$: the numerator is $e^0 - 1 = 0$ and the denominator is $\\sin 0 = 0$, giving the indeterminate form $\\frac{0}{0}$. L'Hôpital applies.",
                  "zh": "代入 $x = 0$：分子为 $e^0 - 1 = 0$，分母为 $\\sin 0 = 0$，得到不定式 $\\frac{0}{0}$。可用洛必达。"
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to 0} \\frac{e^x - 1}{\\sin x} = \\lim_{x \\to 0} \\frac{e^x}{\\cos x} = \\frac{e^0}{\\cos 0} = \\frac{1}{1} = 1"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The radius of a sphere increases at $3$ cm/s. Given $V = \\frac{4}{3}\\pi r^3$, which equation correctly relates the rates?",
                "zh": "一球的半径以 $3$ cm/s 增大。已知 $V = \\frac{4}{3}\\pi r^3$，哪个方程正确地联系了变化率？"
              },
              "choices": [
                "$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$",
                "$\\frac{dV}{dt} = \\frac{4}{3}\\pi r^2$",
                "$\\frac{dV}{dt} = 4\\pi r^2$",
                "$\\frac{dV}{dt} = 4\\pi r \\frac{dr}{dt}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Differentiating $V = \\frac{4}{3}\\pi r^3$ with respect to $t$ gives $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$ by the chain rule. Forgetting the factor $\\frac{dr}{dt}$ — treating $r$ as if it were the variable of differentiation — is the common error.",
                "zh": "对 $V = \\frac{4}{3}\\pi r^3$ 关于 $t$ 求导，由链式法则得 $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$。忘掉因子 $\\frac{dr}{dt}$——把 $r$ 当成求导变量——是常见错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A circle's radius grows at $2$ cm/s. Using $A = \\pi r^2$, find $\\frac{dA}{dt}$ when $r = 3$ cm. Give your answer as an integer coefficient of $\\pi$ (i.e., the number $k$ where $\\frac{dA}{dt} = k\\pi$).",
                "zh": "一圆的半径以 $2$ cm/s 增长。用 $A = \\pi r^2$，求 $r = 3$ cm 时的 $\\frac{dA}{dt}$。请填 $\\pi$ 的整数系数（即 $\\frac{dA}{dt} = k\\pi$ 中的 $k$）。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(3)(2) = 12\\pi$, so $k = 12$. Substitute $r = 3$ only after differentiating.",
                "zh": "$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(3)(2) = 12\\pi$，故 $k = 12$。只能在求导之后才代入 $r = 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = \\sqrt{x}$. Using the tangent line at $a = 25$, the linear approximation of $\\sqrt{26}$ is an:",
                "zh": "设 $f(x) = \\sqrt{x}$。用 $a = 25$ 处的切线，$\\sqrt{26}$ 的线性近似是一个："
              },
              "choices": [
                "Underestimate, because $f$ is concave up",
                "Exact value",
                "Overestimate, because $f$ is concave down",
                "Overestimate, because $f'(25) > 0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$f''(x) = -\\frac{1}{4}x^{-3/2} < 0$, so $\\sqrt{x}$ is concave down and the tangent line lies above the curve — an overestimate. Confusing the sign of $f'$ (slope) with the sign of $f''$ (concavity) is the trap.",
                "zh": "$f''(x) = -\\frac{1}{4}x^{-3/2} < 0$，故 $\\sqrt{x}$ 凹向下，切线在曲线上方——是高估。把 $f'$（斜率）的符号与 $f''$（凹凸性）的符号混淆是陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^3$. Find the linear approximation $L(x)$ of $f$ at $a = 2$, then use it to estimate $f(2.1)$. Give a decimal.",
                "zh": "设 $f(x) = x^3$。求 $f$ 在 $a = 2$ 处的线性近似 $L(x)$，再用它估计 $f(2.1)$。请填一个小数。"
              },
              "answer": "9.2",
              "accept": [
                "9.20"
              ],
              "explanation": {
                "en": "$f(2) = 8$, $f'(x) = 3x^2$ so $f'(2) = 12$. Then $L(x) = 8 + 12(x - 2)$, and $L(2.1) = 8 + 12(0.1) = 9.2$. (The true value $2.1^3 = 9.261$ is slightly larger, since $x^3$ is concave up here.)",
                "zh": "$f(2) = 8$，$f'(x) = 3x^2$ 故 $f'(2) = 12$。于是 $L(x) = 8 + 12(x - 2)$，$L(2.1) = 8 + 12(0.1) = 9.2$。（真值 $2.1^3 = 9.261$ 略大，因为此处 $x^3$ 凹向上。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which limit is it valid to apply L'Hôpital's Rule directly?",
                "zh": "对哪个极限可以直接使用洛必达法则？"
              },
              "choices": [
                "$\\lim_{x \\to 2} \\frac{x + 1}{x - 5}$",
                "$\\lim_{x \\to 0} \\frac{\\sin x}{x}$",
                "$\\lim_{x \\to 1} \\frac{x^2 + 3}{x + 4}$",
                "$\\lim_{x \\to 0} \\frac{\\cos x}{x}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "At $x = 0$, $\\frac{\\sin x}{x}$ gives $\\frac{0}{0}$ — a valid indeterminate form. The others give $\\frac{3}{-3}$, $\\frac{4}{5}$, and $\\frac{1}{0}$, none of which is indeterminate, so applying L'Hôpital to them is an error.",
                "zh": "在 $x = 0$ 处，$\\frac{\\sin x}{x}$ 得到 $\\frac{0}{0}$——有效的不定式。其余分别得到 $\\frac{3}{-3}$、$\\frac{4}{5}$、$\\frac{1}{0}$，都不是不定式，对它们用洛必达就是错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$ using L'Hôpital's Rule. Give an integer.",
                "zh": "用洛必达法则求 $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$。请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "At $x = 0$ it is $\\frac{0}{0}$. Differentiate: $\\frac{3\\cos(3x)}{1}$, which at $x = 0$ gives $3\\cos 0 = 3$. Forgetting the chain-rule factor of $3$ in the derivative of $\\sin(3x)$ would give the wrong answer $1$.",
                "zh": "在 $x = 0$ 处为 $\\frac{0}{0}$。求导：$\\frac{3\\cos(3x)}{1}$，在 $x = 0$ 处为 $3\\cos 0 = 3$。忘掉 $\\sin(3x)$ 求导时的链式法则因子 $3$，会得到错误答案 $1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A conical tank has water whose volume satisfies $V = \\frac{1}{3}\\pi r^2 h$. In a related-rates problem, before differentiating you should:",
                "zh": "一圆锥形水箱中水的体积满足 $V = \\frac{1}{3}\\pi r^2 h$。在相关变化率问题中，求导之前你应当："
              },
              "choices": [
                "Substitute the current numeric values of $r$ and $h$ to simplify first",
                "Replace $t$ with a specific time",
                "Divide both sides by $V$",
                "Keep changing quantities as variables and differentiate with respect to $t$ first, substituting numbers afterward"
              ],
              "answer": 3,
              "explanation": {
                "en": "Changing quantities must stay as variables through differentiation; substituting them early freezes them as constants and destroys their rate terms. Only after differentiating do you plug in the instantaneous values.",
                "zh": "变化的量在求导过程中必须保持为变量；提前代入会把它们冻结为常数，抹掉其变化率项。只有在求导之后才代入瞬时值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$ using L'Hôpital's Rule. Give an integer.",
                "zh": "用洛必达法则求 $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "At $x = 0$: $\\frac{e^0 - 1}{0} = \\frac{0}{0}$. Differentiate: $\\frac{2e^{2x}}{1}$, which at $x = 0$ gives $2e^0 = 2$. The chain rule supplies the factor of $2$.",
                "zh": "在 $x = 0$ 处：$\\frac{e^0 - 1}{0} = \\frac{0}{0}$。求导：$\\frac{2e^{2x}}{1}$，在 $x = 0$ 处为 $2e^0 = 2$。链式法则给出因子 $2$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "analytical-applications",
      "title": "Unit 5: Analytical Applications of Differentiation",
      "titleZh": "第五单元：导数的分析应用",
      "lessons": [
        {
          "id": "mvt-and-first-derivative-test",
          "title": "The Mean Value Theorem and the First Derivative Test",
          "titleZh": "中值定理与一阶导数判别法",
          "content": [
            {
              "type": "h2",
              "en": "Existence Theorems for Differentiable Functions",
              "zh": "可微函数的存在性定理"
            },
            {
              "type": "p",
              "en": "Unit 5 is about using the derivative to describe the shape and behavior of a function. Before we can do that, we need a few guarantees: theorems that promise certain points must exist. Two of them — the Mean Value Theorem and the Extreme Value Theorem — appear constantly on the AP exam, and they come with hypotheses you must check.",
              "zh": "第 5 单元讨论如何用导数来描述函数的形态与行为。在此之前，我们需要一些\"保证\"：这些定理断言某些点一定存在。其中中值定理与极值定理在 AP 考试中反复出现，而它们都带有你必须逐条核对的前提条件。"
            },
            {
              "type": "h3",
              "en": "The Mean Value Theorem (MVT)",
              "zh": "中值定理（MVT）"
            },
            {
              "type": "p",
              "en": "If $f$ is continuous on the closed interval $[a,b]$ and differentiable on the open interval $(a,b)$, then there is at least one number $c$ in $(a,b)$ where the instantaneous rate of change equals the average rate of change:",
              "zh": "如果 $f$ 在闭区间 $[a,b]$ 上连续，且在开区间 $(a,b)$ 上可导，那么在 $(a,b)$ 内至少存在一个数 $c$，使得瞬时变化率等于平均变化率："
            },
            {
              "type": "math",
              "tex": "f'(c) = \\frac{f(b) - f(a)}{b - a}"
            },
            {
              "type": "p",
              "en": "Geometrically, somewhere on the curve the tangent line is parallel to the secant line joining the endpoints. Both hypotheses matter: continuity on the closed interval and differentiability on the open interval. If either fails, the conclusion can fail.",
              "zh": "从几何上看，曲线上某处的切线与连接两端点的割线平行。两个前提缺一不可：在闭区间上连续，且在开区间上可导。任一条件不满足，结论都可能失效。"
            },
            {
              "type": "h3",
              "en": "Rolle's Theorem",
              "zh": "罗尔定理"
            },
            {
              "type": "p",
              "en": "Rolle's Theorem is the special case of the MVT where $f(a) = f(b)$. Then the average rate of change is $0$, so there is a $c$ in $(a,b)$ with $f'(c) = 0$ — a horizontal tangent. Same two hypotheses: continuous on $[a,b]$, differentiable on $(a,b)$.",
              "zh": "罗尔定理是中值定理中 $f(a) = f(b)$ 的特殊情形。此时平均变化率为 $0$，故在 $(a,b)$ 内存在 $c$ 使 $f'(c) = 0$——即水平切线。前提相同：在 $[a,b]$ 上连续、在 $(a,b)$ 上可导。"
            },
            {
              "type": "note",
              "en": "AP exam tip: MVT questions almost always begin by asking you to verify the hypotheses. State that $f$ is continuous on $[a,b]$ AND differentiable on $(a,b)$ before you solve $f'(c) = \\frac{f(b)-f(a)}{b-a}$. A function like $f(x) = |x|$ on $[-1,1]$ satisfies MVT's continuity but not differentiability (corner at $0$), so the theorem does not apply.",
              "zh": "AP 考试提示：中值定理的题目几乎总是先要你核对前提。在求解 $f'(c) = \\frac{f(b)-f(a)}{b-a}$ 之前，先说明 $f$ 在 $[a,b]$ 上连续\"且\"在 $(a,b)$ 上可导。像 $f(x) = |x|$ 在 $[-1,1]$ 上满足连续性但不满足可导性（在 $0$ 处有尖角），因此定理不适用。"
            },
            {
              "type": "h3",
              "en": "The Extreme Value Theorem (EVT)",
              "zh": "极值定理（EVT）"
            },
            {
              "type": "p",
              "en": "If $f$ is continuous on a closed interval $[a,b]$, then $f$ attains both an absolute maximum and an absolute minimum somewhere on $[a,b]$. The theorem guarantees these extreme values exist; it does not tell you where. Note the requirements: the interval must be closed, and $f$ must be continuous. On an open interval, or with a discontinuity, a maximum or minimum can fail to be attained.",
              "zh": "如果 $f$ 在闭区间 $[a,b]$ 上连续，那么 $f$ 一定在 $[a,b]$ 上某处取得绝对最大值与绝对最小值。定理只保证这些极端值存在，并不告诉你它们在哪里。注意要求：区间必须是闭的，且 $f$ 必须连续。若区间是开的，或函数有间断点，最大值或最小值就可能取不到。"
            },
            {
              "type": "h2",
              "en": "Critical Points and the Sign of $f'$",
              "zh": "临界点与 $f'$ 的符号"
            },
            {
              "type": "p",
              "en": "A critical point (or critical number) of $f$ is an interior point $c$ of the domain where $f'(c) = 0$ or where $f'(c)$ does not exist. Every local maximum or minimum in the interior of the domain occurs at a critical point — but not every critical point is an extremum, so critical points are only candidates.",
              "zh": "$f$ 的临界点（临界数）是指定义域内部的点 $c$，在该处 $f'(c) = 0$ 或 $f'(c)$ 不存在。定义域内部的每一个局部最大值或最小值都出现在临界点处——但并非每个临界点都是极值点，所以临界点只是\"候选\"。"
            },
            {
              "type": "h3",
              "en": "Increasing and Decreasing Intervals",
              "zh": "递增与递减区间"
            },
            {
              "type": "p",
              "en": "The sign of the first derivative tells you the direction of the graph. On an interval where $f'(x) > 0$, the function $f$ is increasing; where $f'(x) < 0$, it is decreasing. To find these intervals, locate all critical points, mark them on a number line, and test the sign of $f'$ in each resulting subinterval.",
              "zh": "一阶导数的符号告诉你图象的走向。在 $f'(x) > 0$ 的区间上函数 $f$ 递增；在 $f'(x) < 0$ 的区间上递减。要找出这些区间，先求出所有临界点，把它们标在数轴上，然后在每个子区间内检验 $f'$ 的符号。"
            },
            {
              "type": "h3",
              "en": "The First Derivative Test",
              "zh": "一阶导数判别法"
            },
            {
              "type": "p",
              "en": "Once you know how $f'$ changes sign at a critical point $c$, you can classify it:",
              "zh": "一旦知道 $f'$ 在临界点 $c$ 处如何变号，就能对其分类："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $f'$ changes from positive to negative at $c$, then $f$ has a local maximum at $c$.",
                  "zh": "若 $f'$ 在 $c$ 处由正变负，则 $f$ 在 $c$ 处有局部最大值。"
                },
                {
                  "en": "If $f'$ changes from negative to positive at $c$, then $f$ has a local minimum at $c$.",
                  "zh": "若 $f'$ 在 $c$ 处由负变正，则 $f$ 在 $c$ 处有局部最小值。"
                },
                {
                  "en": "If $f'$ does not change sign at $c$ (positive on both sides or negative on both sides), then $f$ has neither a max nor a min there.",
                  "zh": "若 $f'$ 在 $c$ 处不变号（两侧同为正或同为负），则 $f$ 在该处既非最大也非最小。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: to justify a local extremum on the free-response section, you must cite the sign change of $f'$, not just say \"the graph goes up then down.\" Write, for example, \"$f'$ changes from positive to negative at $x = 2$, so $f$ has a local maximum there.\" Vague justifications lose points.",
              "zh": "AP 考试提示：在自由作答部分论证局部极值时，必须引用 $f'$ 的变号，而不能只说\"图象先升后降\"。例如应写：\"$f'$ 在 $x = 2$ 处由正变负，故 $f$ 在此处有局部最大值。\"含糊的论证会失分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying the Mean Value Theorem",
                "zh": "例题 1：应用中值定理"
              },
              "problem": {
                "en": "Let $f(x) = x^2 - 4x + 1$ on $[1, 5]$. Verify the hypotheses of the MVT and find all values $c$ guaranteed by the theorem.",
                "zh": "设 $f(x) = x^2 - 4x + 1$ 在 $[1, 5]$ 上。核对中值定理的前提，并求出定理保证的所有 $c$ 值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$f$ is a polynomial, so it is continuous on $[1,5]$ and differentiable on $(1,5)$; both hypotheses hold.",
                  "zh": "$f$ 是多项式，故在 $[1,5]$ 上连续、在 $(1,5)$ 上可导；两个前提都满足。"
                },
                {
                  "type": "p",
                  "en": "Compute the average rate of change: $f(5) = 6$, $f(1) = -2$, so $\\frac{f(5)-f(1)}{5-1} = \\frac{6-(-2)}{4} = 2$.",
                  "zh": "计算平均变化率：$f(5) = 6$，$f(1) = -2$，故 $\\frac{f(5)-f(1)}{5-1} = \\frac{6-(-2)}{4} = 2$。"
                },
                {
                  "type": "p",
                  "en": "Set $f'(c) = 2x - 4$ equal to $2$: $2c - 4 = 2$, so $c = 3$, which lies in $(1,5)$.",
                  "zh": "令 $f'(c) = 2x - 4$ 等于 $2$：$2c - 4 = 2$，得 $c = 3$，位于 $(1,5)$ 内。"
                },
                {
                  "type": "math",
                  "tex": "c = 3"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: The First Derivative Test",
                "zh": "例题 2：一阶导数判别法"
              },
              "problem": {
                "en": "Find the intervals where $f(x) = x^3 - 3x^2 - 9x + 5$ is increasing and decreasing, and classify each critical point.",
                "zh": "求 $f(x) = x^3 - 3x^2 - 9x + 5$ 的递增和递减区间，并对每个临界点分类。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate: $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$. Critical points where $f' = 0$: $x = -1$ and $x = 3$.",
                  "zh": "求导：$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$。令 $f' = 0$ 得临界点 $x = -1$ 与 $x = 3$。"
                },
                {
                  "type": "p",
                  "en": "Test the sign of $f'$ in each interval. On $(-\\infty, -1)$, $f'(-2) = 3(-5)(-1) > 0$: increasing. On $(-1, 3)$, $f'(0) = 3(-3)(1) < 0$: decreasing. On $(3, \\infty)$, $f'(4) = 3(1)(5) > 0$: increasing.",
                  "zh": "在每个区间检验 $f'$ 的符号。在 $(-\\infty, -1)$ 上，$f'(-2) = 3(-5)(-1) > 0$：递增。在 $(-1, 3)$ 上，$f'(0) = 3(-3)(1) < 0$：递减。在 $(3, \\infty)$ 上，$f'(4) = 3(1)(5) > 0$：递增。"
                },
                {
                  "type": "p",
                  "en": "At $x = -1$, $f'$ changes $+$ to $-$: local maximum. At $x = 3$, $f'$ changes $-$ to $+$: local minimum.",
                  "zh": "在 $x = -1$ 处 $f'$ 由正变负：局部最大值。在 $x = 3$ 处 $f'$ 由负变正：局部最小值。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For which function does the Mean Value Theorem fail to apply on $[-2, 2]$?",
                "zh": "在 $[-2, 2]$ 上，中值定理对哪个函数不适用？"
              },
              "choices": [
                "$f(x) = |x|$",
                "$f(x) = x^3$",
                "$f(x) = \\cos x$",
                "$f(x) = 3x - 1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The MVT requires differentiability on the open interval. $f(x) = |x|$ has a corner at $x = 0$ where the derivative does not exist, so a hypothesis fails. The other three are differentiable everywhere. The tempting mistake is to think continuity alone is enough — it is not.",
                "zh": "中值定理要求在开区间上可导。$f(x) = |x|$ 在 $x = 0$ 处有尖角，导数不存在，故前提不满足。其余三个处处可导。诱人的错误是以为只要连续就够了——其实不够。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^2$ on $[0, 6]$. Find the value $c$ guaranteed by the Mean Value Theorem. Give an integer.",
                "zh": "设 $f(x) = x^2$ 在 $[0, 6]$ 上。求中值定理保证的 $c$ 值，以整数作答。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "The average rate of change is $\\frac{36 - 0}{6 - 0} = 6$. Set $f'(c) = 2c = 6$, giving $c = 3$, which is in $(0,6)$.",
                "zh": "平均变化率为 $\\frac{36 - 0}{6 - 0} = 6$。令 $f'(c) = 2c = 6$，得 $c = 3$，在 $(0,6)$ 内。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A continuous function $f$ has $f'(x) > 0$ on $(1, 4)$ and $f'(x) < 0$ on $(4, 7)$. What happens at $x = 4$?",
                "zh": "连续函数 $f$ 在 $(1, 4)$ 上 $f'(x) > 0$，在 $(4, 7)$ 上 $f'(x) < 0$。$x = 4$ 处发生什么？"
              },
              "choices": [
                "Local minimum",
                "Neither max nor min",
                "An inflection point",
                "Local maximum"
              ],
              "answer": 3,
              "explanation": {
                "en": "By the First Derivative Test, $f'$ changing from positive to negative signals a local maximum. Confusing the direction of the sign change is the usual error: positive-to-negative is a peak, not a valley.",
                "zh": "由一阶导数判别法，$f'$ 由正变负意味着局部最大值。常见错误是弄反变号方向：由正变负是\"峰\"，不是\"谷\"。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = x^3 - 12x$, at how many values of $x$ does $f'(x) = 0$? Give an integer.",
                "zh": "对 $f(x) = x^3 - 12x$，有多少个 $x$ 使 $f'(x) = 0$？以整数作答。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$, which is zero at $x = 2$ and $x = -2$ — two critical points.",
                "zh": "$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$，在 $x = 2$ 与 $x = -2$ 处为零——两个临界点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which condition guarantees that a continuous function attains both an absolute maximum and an absolute minimum?",
                "zh": "哪个条件能保证一个连续函数同时取得绝对最大值与绝对最小值？"
              },
              "choices": [
                "The function is continuous on an open interval $(a,b)$",
                "The function is continuous on a closed interval $[a,b]$",
                "The function is differentiable somewhere",
                "The function has at least one critical point"
              ],
              "answer": 1,
              "explanation": {
                "en": "The Extreme Value Theorem requires continuity on a closed, bounded interval $[a,b]$. On an open interval the extremes may never be reached (think of $f(x)=x$ on $(0,1)$), which is the tempting wrong choice.",
                "zh": "极值定理要求在闭且有界的区间 $[a,b]$ 上连续。在开区间上极端值可能永远取不到（如 $f(x)=x$ 在 $(0,1)$ 上），这正是诱人的错误选项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The derivative of $f$ is $f'(x) = (x-1)^2(x-5)$. At which critical point does $f$ have a local minimum?",
                "zh": "$f$ 的导数为 $f'(x) = (x-1)^2(x-5)$。$f$ 在哪个临界点处取得局部最小值？"
              },
              "choices": [
                "$x = 1$",
                "Both $x = 1$ and $x = 5$",
                "$x = 5$",
                "Neither point"
              ],
              "answer": 2,
              "explanation": {
                "en": "At $x = 5$, $f'$ changes from negative to positive (a minimum). At $x = 1$ the factor $(x-1)^2$ keeps $f'$ negative on both sides, so no sign change and no extremum. Assuming every zero of $f'$ is an extremum is the classic trap.",
                "zh": "在 $x = 5$ 处 $f'$ 由负变正（最小值）。在 $x = 1$ 处，因子 $(x-1)^2$ 使 $f'$ 两侧都为负，不变号，故非极值。以为 $f'$ 的每个零点都是极值是经典陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = 2x^3 - 3x^2 - 12x + 4$. Find the $x$-coordinate of the local maximum. Give an integer.",
                "zh": "设 $f(x) = 2x^3 - 3x^2 - 12x + 4$。求局部最大值的 $x$ 坐标，以整数作答。"
              },
              "answer": "-1",
              "accept": [
                "-1.0"
              ],
              "explanation": {
                "en": "$f'(x) = 6x^2 - 6x - 12 = 6(x-2)(x+1)$, with critical points $x = -1, 2$. On $(-\\infty,-1)$ $f' > 0$ and on $(-1,2)$ $f' < 0$, so $f'$ changes $+$ to $-$ at $x = -1$: local maximum.",
                "zh": "$f'(x) = 6x^2 - 6x - 12 = 6(x-2)(x+1)$，临界点为 $x = -1, 2$。在 $(-\\infty,-1)$ 上 $f' > 0$，在 $(-1,2)$ 上 $f' < 0$，故 $f'$ 在 $x = -1$ 处由正变负：局部最大值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Rolle's Theorem applied to $f(x) = x^2 - 6x + 8$ on $[2, 4]$ guarantees a $c$ where $f'(c) = 0$. What is $c$?",
                "zh": "将罗尔定理应用于 $[2, 4]$ 上的 $f(x) = x^2 - 6x + 8$，保证存在 $c$ 使 $f'(c) = 0$。$c$ 是多少？"
              },
              "choices": [
                "$c = 2$",
                "$c = 3$",
                "$c = 4$",
                "$c = 3.5$"
              ],
              "answer": 1,
              "explanation": {
                "en": "First note $f(2) = 0 = f(4)$, so Rolle's hypotheses hold. Then $f'(x) = 2x - 6 = 0$ gives $x = 3$, which lies in $(2,4)$. Picking an endpoint like $x=2$ ignores that $c$ must be strictly inside the open interval.",
                "zh": "先注意 $f(2) = 0 = f(4)$，故罗尔定理前提满足。再由 $f'(x) = 2x - 6 = 0$ 得 $x = 3$，位于 $(2,4)$ 内。选端点如 $x=2$ 忽略了 $c$ 必须严格在开区间内部。"
              }
            }
          ]
        },
        {
          "id": "concavity-and-curve-analysis",
          "title": "Concavity, Inflection, and Curve Analysis",
          "titleZh": "凹凸性、拐点与函数图象分析",
          "content": [
            {
              "type": "h2",
              "en": "The Second Derivative and Concavity",
              "zh": "二阶导数与凹凸性"
            },
            {
              "type": "p",
              "en": "The first derivative tells you whether a graph rises or falls. The second derivative tells you how the graph bends. A graph is concave up when it curves like a cup (holding water) and concave down when it curves like a cap (spilling water). The second derivative $f''$, the derivative of $f'$, measures exactly this.",
              "zh": "一阶导数告诉你图象是上升还是下降，二阶导数告诉你图象如何弯曲。图象像杯子（能盛水）那样弯时称为凹（上凹），像帽子（会漏水）那样弯时称为凸（下凹）。二阶导数 $f''$，即 $f'$ 的导数，恰好度量这一点。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Where $f''(x) > 0$, the slope $f'$ is increasing and $f$ is concave up.",
                  "zh": "在 $f''(x) > 0$ 处，斜率 $f'$ 递增，$f$ 上凹（concave up）。"
                },
                {
                  "en": "Where $f''(x) < 0$, the slope $f'$ is decreasing and $f$ is concave down.",
                  "zh": "在 $f''(x) < 0$ 处，斜率 $f'$ 递减，$f$ 下凹（concave down）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Inflection Points",
              "zh": "拐点"
            },
            {
              "type": "p",
              "en": "An inflection point is a point on the graph where the concavity changes — from up to down, or down to up. To find them, locate where $f''(x) = 0$ or is undefined, then confirm that $f''$ actually changes sign there. A zero of $f''$ is only a candidate; without a sign change there is no inflection point.",
              "zh": "拐点是图象上凹凸性发生改变的点——由上凹变下凹，或由下凹变上凹。要找拐点，先找出 $f''(x) = 0$ 或无定义之处，再确认 $f''$ 在该处确实变号。$f''$ 的零点只是候选；若不变号就不是拐点。"
            },
            {
              "type": "note",
              "en": "AP exam tip: $f''(c) = 0$ is NOT enough to conclude an inflection point. Consider $f(x) = x^4$: $f''(x) = 12x^2$ is zero at $x = 0$ but never negative, so the concavity never changes and there is no inflection point. Always verify the sign change of $f''$.",
              "zh": "AP 考试提示：仅有 $f''(c) = 0$ 不足以断定是拐点。考虑 $f(x) = x^4$：$f''(x) = 12x^2$ 在 $x = 0$ 处为零但从不为负，凹凸性不改变，故无拐点。务必验证 $f''$ 的变号。"
            },
            {
              "type": "h3",
              "en": "The Second Derivative Test",
              "zh": "二阶导数判别法"
            },
            {
              "type": "p",
              "en": "At a critical point $c$ where $f'(c) = 0$, the second derivative gives a quick classification:",
              "zh": "在满足 $f'(c) = 0$ 的临界点 $c$ 处，二阶导数给出快速分类："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $f''(c) > 0$, the graph is concave up at $c$, so $f$ has a local minimum.",
                  "zh": "若 $f''(c) > 0$，图象在 $c$ 处上凹，故 $f$ 有局部最小值。"
                },
                {
                  "en": "If $f''(c) < 0$, the graph is concave down at $c$, so $f$ has a local maximum.",
                  "zh": "若 $f''(c) < 0$，图象在 $c$ 处下凹，故 $f$ 有局部最大值。"
                },
                {
                  "en": "If $f''(c) = 0$, the test is inconclusive; fall back on the First Derivative Test.",
                  "zh": "若 $f''(c) = 0$，判别法失效；改用一阶导数判别法。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Absolute Extrema and the Candidates Test",
              "zh": "绝对极值与候选点检验法"
            },
            {
              "type": "p",
              "en": "To find the absolute (global) maximum and minimum of a continuous function on a closed interval $[a,b]$, use the Candidates Test: the extreme values can only occur at critical points inside the interval or at the endpoints. Evaluate $f$ at every critical point in $[a,b]$ and at both endpoints, then compare the outputs. The largest is the absolute maximum and the smallest is the absolute minimum.",
              "zh": "要在闭区间 $[a,b]$ 上求连续函数的绝对（全局）最大值与最小值，使用候选点检验法：极端值只能出现在区间内部的临界点或端点处。在 $[a,b]$ 内的每个临界点以及两个端点处计算 $f$，然后比较这些函数值。最大的是绝对最大值，最小的是绝对最小值。"
            },
            {
              "type": "note",
              "en": "AP exam tip: the Candidates Test compares $y$-values, not $x$-values. A frequent error is to report the $x$-coordinate where the max occurs when the question asks for the maximum value $f(x)$. Read carefully, and do not forget to test the endpoints — the absolute extremum is often there.",
              "zh": "AP 考试提示：候选点检验法比较的是 $y$ 值，不是 $x$ 值。常见错误是题目问最大值 $f(x)$ 时却报出取得最大值的 $x$ 坐标。要仔细审题，并且别忘了检验端点——绝对极值常常就在端点处。"
            },
            {
              "type": "h3",
              "en": "Connecting the Graphs of $f$, $f'$, and $f''$",
              "zh": "联系 $f$、$f'$、$f''$ 的图象"
            },
            {
              "type": "p",
              "en": "A signature AP question shows you the graph of one of $f$, $f'$, or $f''$ and asks about the others. Keep the relationships straight:",
              "zh": "一类标志性的 AP 题目会给出 $f$、$f'$ 或 $f''$ 之一的图象，问其余的。要理清这些关系："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Where $f'$ is positive, $f$ is increasing; where $f'$ is negative, $f$ is decreasing.",
                  "zh": "$f'$ 为正处 $f$ 递增；$f'$ 为负处 $f$ 递减。"
                },
                {
                  "en": "A local extremum of $f$ occurs where $f'$ crosses zero (changes sign).",
                  "zh": "$f$ 的局部极值出现在 $f'$ 穿过零（变号）之处。"
                },
                {
                  "en": "Where $f'$ is increasing, $f$ is concave up; where $f'$ is decreasing, $f$ is concave down.",
                  "zh": "$f'$ 递增处 $f$ 上凹；$f'$ 递减处 $f$ 下凹。"
                },
                {
                  "en": "An inflection point of $f$ occurs where $f'$ has a local max or min (equivalently, where $f''$ changes sign).",
                  "zh": "$f$ 的拐点出现在 $f'$ 取得局部极值之处（等价地，$f''$ 变号之处）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: read the axis label carefully. If the graph is labeled \"$y = f'(x)$,\" then a point where that graph touches the $x$-axis is where $f' = 0$ — a critical point of $f$, not an inflection point. Where the given graph of $f'$ has a peak or valley, that is where $f$ has an inflection point.",
              "zh": "AP 考试提示：仔细看坐标轴标注。如果图象标为 \"$y = f'(x)$\"，那么该图与 $x$ 轴相交处是 $f' = 0$ 之处——是 $f$ 的临界点，不是拐点。给定的 $f'$ 图象出现峰或谷之处，才是 $f$ 有拐点之处。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Full curve analysis",
                "zh": "例题 1：完整的曲线分析"
              },
              "problem": {
                "en": "For $f(x) = x^3 - 6x^2 + 5$, find the intervals of concavity and any inflection points.",
                "zh": "对 $f(x) = x^3 - 6x^2 + 5$，求凹凸区间及所有拐点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First derivative: $f'(x) = 3x^2 - 12x$. Second derivative: $f''(x) = 6x - 12 = 6(x - 2)$.",
                  "zh": "一阶导数：$f'(x) = 3x^2 - 12x$。二阶导数：$f''(x) = 6x - 12 = 6(x - 2)$。"
                },
                {
                  "type": "p",
                  "en": "$f''(x) = 0$ at $x = 2$. For $x < 2$, $f'' < 0$ (concave down); for $x > 2$, $f'' > 0$ (concave up).",
                  "zh": "$f''(x) = 0$ 在 $x = 2$ 处。当 $x < 2$ 时 $f'' < 0$（下凹）；当 $x > 2$ 时 $f'' > 0$（上凹）。"
                },
                {
                  "type": "p",
                  "en": "The concavity changes at $x = 2$, so there is an inflection point. Its $y$-value is $f(2) = 8 - 24 + 5 = -11$, giving the point $(2, -11)$.",
                  "zh": "凹凸性在 $x = 2$ 处改变，故有拐点。其 $y$ 值为 $f(2) = 8 - 24 + 5 = -11$，即点 $(2, -11)$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Absolute extrema on a closed interval",
                "zh": "例题 2：闭区间上的绝对极值"
              },
              "problem": {
                "en": "Find the absolute maximum and minimum of $f(x) = x^3 - 3x + 1$ on $[0, 3]$.",
                "zh": "求 $f(x) = x^3 - 3x + 1$ 在 $[0, 3]$ 上的绝对最大值与最小值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$. Critical points: $x = 1$ and $x = -1$, but only $x = 1$ lies in $[0,3]$.",
                  "zh": "$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$。临界点为 $x = 1$ 与 $x = -1$，但只有 $x = 1$ 在 $[0,3]$ 内。"
                },
                {
                  "type": "p",
                  "en": "Evaluate the candidates: endpoints and interior critical point. $f(0) = 1$, $f(1) = 1 - 3 + 1 = -1$, $f(3) = 27 - 9 + 1 = 19$.",
                  "zh": "计算候选点：端点与内部临界点。$f(0) = 1$，$f(1) = 1 - 3 + 1 = -1$，$f(3) = 27 - 9 + 1 = 19$。"
                },
                {
                  "type": "p",
                  "en": "Comparing $y$-values: the absolute maximum is $19$ at $x = 3$, and the absolute minimum is $-1$ at $x = 1$.",
                  "zh": "比较 $y$ 值：绝对最大值为 $19$（在 $x = 3$ 处），绝对最小值为 $-1$（在 $x = 1$ 处）。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "On which interval is $f(x) = x^3$ concave down?",
                "zh": "$f(x) = x^3$ 在哪个区间上下凹（concave down）？"
              },
              "choices": [
                "$(-\\infty, 0)$",
                "$(0, \\infty)$",
                "$(-\\infty, \\infty)$",
                "Nowhere"
              ],
              "answer": 0,
              "explanation": {
                "en": "$f''(x) = 6x$, which is negative for $x < 0$, so $f$ is concave down on $(-\\infty, 0)$. Confusing concave down (negative $f''$) with decreasing (negative $f'$) is the common slip.",
                "zh": "$f''(x) = 6x$，当 $x < 0$ 时为负，故 $f$ 在 $(-\\infty, 0)$ 上下凹。把下凹（$f'' < 0$）与递减（$f' < 0$）混淆是常见失误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the $x$-coordinate of the inflection point of $f(x) = x^3 - 9x^2 + 2x - 1$. Give an integer.",
                "zh": "求 $f(x) = x^3 - 9x^2 + 2x - 1$ 拐点的 $x$ 坐标，以整数作答。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "$f''(x) = 6x - 18 = 6(x - 3)$, which changes sign at $x = 3$, confirming an inflection point there.",
                "zh": "$f''(x) = 6x - 18 = 6(x - 3)$，在 $x = 3$ 处变号，确认此处为拐点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A critical point $c$ has $f'(c) = 0$ and $f''(c) = -4$. What does the Second Derivative Test conclude?",
                "zh": "某临界点 $c$ 满足 $f'(c) = 0$ 且 $f''(c) = -4$。二阶导数判别法得出什么结论？"
              },
              "choices": [
                "Local minimum",
                "Inflection point",
                "Local maximum",
                "The test is inconclusive"
              ],
              "answer": 2,
              "explanation": {
                "en": "$f''(c) < 0$ means the graph is concave down at $c$, so $f$ has a local maximum. Reversing the rule (thinking negative $f''$ gives a minimum) is the typical error.",
                "zh": "$f''(c) < 0$ 表示图象在 $c$ 处下凹，故 $f$ 有局部最大值。把规则弄反（以为 $f'' < 0$ 是最小值）是典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which function does $f''(0) = 0$ but $x = 0$ is NOT an inflection point?",
                "zh": "哪个函数满足 $f''(0) = 0$，但 $x = 0$ 并\"不\"是拐点？"
              },
              "choices": [
                "$f(x) = x^4$",
                "$f(x) = x^3$",
                "$f(x) = \\sin x$",
                "$f(x) = x^3 - x$"
              ],
              "answer": 0,
              "explanation": {
                "en": "For $f(x) = x^4$, $f''(x) = 12x^2 \\ge 0$ everywhere, so concavity never changes despite $f''(0) = 0$. The others do change concavity at $x = 0$. Assuming every zero of $f''$ is an inflection point is the trap.",
                "zh": "对 $f(x) = x^4$，$f''(x) = 12x^2 \\ge 0$ 处处成立，尽管 $f''(0) = 0$，凹凸性却不改变。其余函数在 $x = 0$ 处凹凸性确实改变。以为 $f''$ 的每个零点都是拐点正是陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the absolute maximum value of $f(x) = x^2 - 4x + 3$ on $[0, 5]$. Give an integer.",
                "zh": "求 $f(x) = x^2 - 4x + 3$ 在 $[0, 5]$ 上的绝对最大值，以整数作答。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "$f'(x) = 2x - 4 = 0$ at $x = 2$. Candidates: $f(0) = 3$, $f(2) = -1$, $f(5) = 8$. The largest $y$-value is $8$ at the endpoint $x = 5$.",
                "zh": "$f'(x) = 2x - 4 = 0$ 在 $x = 2$ 处。候选点：$f(0) = 3$，$f(2) = -1$，$f(5) = 8$。最大的 $y$ 值为 $8$，在端点 $x = 5$ 处。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $f'$ (the derivative) is positive on $(0,2)$, negative on $(2,5)$, and positive on $(5,7)$. Where does $f$ have a local minimum?",
                "zh": "导数 $f'$ 的图象在 $(0,2)$ 上为正，在 $(2,5)$ 上为负，在 $(5,7)$ 上为正。$f$ 在何处有局部最小值？"
              },
              "choices": [
                "$x = 2$",
                "Both $x = 2$ and $x = 5$",
                "Nowhere on the interval",
                "$x = 5$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$f$ has a local minimum where $f'$ changes from negative to positive, which happens at $x = 5$. At $x = 2$, $f'$ goes positive to negative — a maximum. Reading the sign changes of $f'$, not the sign of $f'$ itself, is the key skill.",
                "zh": "$f$ 在 $f'$ 由负变正处有局部最小值，即 $x = 5$。在 $x = 2$ 处 $f'$ 由正变负——是最大值。关键在于读 $f'$ 的变号，而不是 $f'$ 本身的符号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $g'(x) = x^2(x - 4)$, at how many values of $x$ does $g$ have an inflection point? Give an integer.",
                "zh": "若 $g'(x) = x^2(x - 4)$，$g$ 有多少个拐点？以整数作答。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "$g''(x) = 3x^2 - 8x = x(3x - 8)$, zero at $x = 0$ and $x = 8/3$. Both are simple roots where $g''$ changes sign, so there are two inflection points.",
                "zh": "$g''(x) = 3x^2 - 8x = x(3x - 8)$，在 $x = 0$ 与 $x = 8/3$ 处为零。两者都是单根，$g''$ 在此变号，故有两个拐点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A function $f$ is concave up on all of $(a, b)$. What must be true of its derivative $f'$ on that interval?",
                "zh": "函数 $f$ 在整个 $(a, b)$ 上上凹。其导数 $f'$ 在该区间上必然如何？"
              },
              "choices": [
                "$f'$ is positive",
                "$f'$ is increasing",
                "$f'$ is negative",
                "$f'$ is constant"
              ],
              "answer": 1,
              "explanation": {
                "en": "Concave up means $f'' > 0$, which means the slope $f'$ is increasing. It says nothing about the sign of $f'$ — a concave-up curve can still be decreasing. Confusing concavity with the sign of the slope is the tempting error.",
                "zh": "上凹意味着 $f'' > 0$，即斜率 $f'$ 递增。它对 $f'$ 的符号没有任何限定——上凹的曲线仍可能是递减的。把凹凸性与斜率符号混淆是诱人的错误。"
              }
            }
          ]
        },
        {
          "id": "optimization",
          "title": "Applied Optimization",
          "titleZh": "最优化应用",
          "content": [
            {
              "type": "h2",
              "en": "What Optimization Problems Ask",
              "zh": "最优化问题问什么"
            },
            {
              "type": "p",
              "en": "Optimization problems ask you to make some quantity as large or as small as possible: the greatest area, the least cost, the shortest distance. Calculus solves them because a maximum or minimum of a smooth quantity occurs where its derivative is zero (or at a boundary). The whole challenge is translating words into a single-variable function you can differentiate.",
              "zh": "最优化问题要求你让某个量尽可能大或尽可能小：最大的面积、最少的成本、最短的距离。微积分能解决它们，因为光滑量的最大或最小值出现在其导数为零之处（或边界处）。全部难点在于把文字翻译成一个可以求导的单变量函数。"
            },
            {
              "type": "h3",
              "en": "The Setup: Objective, Constraint, Domain",
              "zh": "建模三要素：目标、约束、定义域"
            },
            {
              "type": "p",
              "en": "Every optimization problem has the same three ingredients, and a reliable procedure:",
              "zh": "每个最优化问题都有相同的三个要素，以及一套可靠的步骤："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Objective function: the quantity to be maximized or minimized (area, volume, cost, distance).",
                  "zh": "目标函数：要最大化或最小化的量（面积、体积、成本、距离）。"
                },
                {
                  "en": "Constraint equation: a relationship (fixed perimeter, fixed volume) that lets you eliminate a variable.",
                  "zh": "约束方程：一个关系式（固定周长、固定体积），用来消去一个变量。"
                },
                {
                  "en": "Domain: the realistic interval of allowed input values (lengths cannot be negative, etc.).",
                  "zh": "定义域：允许输入值的现实区间（长度不能为负，等等）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The steps: (1) draw and label a diagram; (2) write the objective; (3) use the constraint to rewrite the objective in one variable; (4) find critical points by setting the derivative to zero; (5) justify that your critical point is the max or min; (6) answer the exact question asked.",
              "zh": "步骤：（1）画图并标注；（2）写出目标函数；（3）用约束把目标函数改写成单变量；（4）令导数为零求临界点；（5）论证你的临界点确实给出最大或最小值；（6）回答题目所问的确切问题。"
            },
            {
              "type": "h3",
              "en": "Justifying the Answer",
              "zh": "论证答案"
            },
            {
              "type": "p",
              "en": "Finding a critical point is not enough — you must show it gives the extremum you want. On a closed interval, use the Candidates Test: compare the objective at the critical point and at both endpoints. On an open interval, use the First Derivative Test (sign change of the derivative) or the Second Derivative Test (sign of the second derivative). A single critical point that is a local max on an open interval is also the absolute max there.",
              "zh": "仅求出临界点还不够——你必须说明它给出你想要的极值。在闭区间上，用候选点检验法：比较临界点与两个端点处的目标值。在开区间上，用一阶导数判别法（导数的变号）或二阶导数判别法（二阶导数的符号）。开区间上唯一的临界点若是局部最大值，则它也是该区间上的绝对最大值。"
            },
            {
              "type": "note",
              "en": "AP exam tip: AP scoring gives an explicit point for the justification. After you find the critical dimension, you must state WHY it is a maximum or minimum — cite the sign change of the first derivative, or that the second derivative is negative (so concave down, hence a max). Just writing the final number, even if correct, loses the justification point.",
              "zh": "AP 考试提示：AP 评分为\"论证\"单独给分。求出临界尺寸后，必须说明它\"为什么\"是最大或最小值——引用一阶导数的变号，或指出二阶导数为负（故下凹，因而是最大值）。只写出最终数字，即使正确，也会丢掉论证分。"
            },
            {
              "type": "h2",
              "en": "Classic Problem Types",
              "zh": "经典题型"
            },
            {
              "type": "p",
              "en": "A handful of scenarios appear again and again: enclosing area with a fixed length of fence, building an open box from a sheet of material, and finding the point on a curve closest to a given point. Recognizing the type tells you which quantity is the objective and which is the constraint.",
              "zh": "几种情景反复出现：用固定长度的围栏圈出面积、用一张材料做成无盖盒子、以及在曲线上找离给定点最近的点。认出题型就知道哪个量是目标、哪个是约束。"
            },
            {
              "type": "note",
              "en": "AP exam tip: for a minimum-distance problem, it is far easier to minimize the SQUARE of the distance, $D = (x - x_0)^2 + (y - y_0)^2$, than the distance itself. The square root has the same minimizer, and avoiding it makes the derivative much cleaner. This is a standard trick worth remembering.",
              "zh": "AP 考试提示：处理最短距离问题时，最小化距离的\"平方\" $D = (x - x_0)^2 + (y - y_0)^2$ 远比最小化距离本身容易。平方根不改变取得最小值的位置，去掉它能让求导干净得多。这是一个值得记住的标准技巧。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Maximizing an enclosed area",
                "zh": "例题 1：最大化围出的面积"
              },
              "problem": {
                "en": "A farmer has $200$ meters of fence to build a rectangular pen against a straight river, so no fence is needed on the river side. What dimensions maximize the enclosed area?",
                "zh": "一位农民有 $200$ 米围栏，沿一条笔直的河建一个矩形围栏，靠河的一侧不需要围栏。什么尺寸能使围出的面积最大？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let the two sides perpendicular to the river have length $x$ and the side parallel to the river have length $y$. Constraint (fence used): $2x + y = 200$, so $y = 200 - 2x$.",
                  "zh": "设垂直于河的两条边长为 $x$，平行于河的一条边长为 $y$。约束（用掉的围栏）：$2x + y = 200$，故 $y = 200 - 2x$。"
                },
                {
                  "type": "p",
                  "en": "Objective (area): $A = xy = x(200 - 2x) = 200x - 2x^2$, with domain $0 < x < 100$.",
                  "zh": "目标（面积）：$A = xy = x(200 - 2x) = 200x - 2x^2$，定义域 $0 < x < 100$。"
                },
                {
                  "type": "math",
                  "tex": "A'(x) = 200 - 4x = 0 \\;\\Rightarrow\\; x = 50"
                },
                {
                  "type": "p",
                  "en": "Since $A''(x) = -4 < 0$, the graph is concave down, so $x = 50$ gives the absolute maximum. Then $y = 200 - 2(50) = 100$. The pen is $50 \\text{ m} \\times 100 \\text{ m}$, with maximum area $5000$ square meters.",
                  "zh": "因为 $A''(x) = -4 < 0$，图象下凹，故 $x = 50$ 给出绝对最大值。于是 $y = 200 - 2(50) = 100$。围栏为 $50 \\text{ 米} \\times 100 \\text{ 米}$，最大面积 $5000$ 平方米。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Minimizing distance to a curve",
                "zh": "例题 2：最小化到曲线的距离"
              },
              "problem": {
                "en": "Find the point on the parabola $y = x^2$ that is closest to the point $(0, 3)$.",
                "zh": "求抛物线 $y = x^2$ 上离点 $(0, 3)$ 最近的点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Minimize the square of the distance from $(x, x^2)$ to $(0,3)$: $D = x^2 + (x^2 - 3)^2$.",
                  "zh": "最小化 $(x, x^2)$ 到 $(0,3)$ 的距离平方：$D = x^2 + (x^2 - 3)^2$。"
                },
                {
                  "type": "p",
                  "en": "Expand and differentiate: $D = x^2 + x^4 - 6x^2 + 9 = x^4 - 5x^2 + 9$, so $D'(x) = 4x^3 - 10x = 2x(2x^2 - 5)$.",
                  "zh": "展开并求导：$D = x^2 + x^4 - 6x^2 + 9 = x^4 - 5x^2 + 9$，故 $D'(x) = 4x^3 - 10x = 2x(2x^2 - 5)$。"
                },
                {
                  "type": "p",
                  "en": "Setting $D'(x) = 0$: $x = 0$ or $x^2 = \\frac{5}{2}$. Checking values, $x = 0$ gives $D = 9$ while $x^2 = \\frac{5}{2}$ gives $D = \\frac{11}{4} < 9$, the minimum. So $x = \\pm\\sqrt{5/2}$ and $y = x^2 = \\frac{5}{2}$; the closest points are $\\left(\\pm\\sqrt{5/2}, \\tfrac{5}{2}\\right)$.",
                  "zh": "令 $D'(x) = 0$：$x = 0$ 或 $x^2 = \\frac{5}{2}$。检验函数值，$x = 0$ 时 $D = 9$，而 $x^2 = \\frac{5}{2}$ 时 $D = \\frac{11}{4} < 9$，为最小值。故 $x = \\pm\\sqrt{5/2}$，$y = x^2 = \\frac{5}{2}$；最近的点为 $\\left(\\pm\\sqrt{5/2}, \\tfrac{5}{2}\\right)$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "A rectangle has perimeter $40$. What is the largest possible area? Give an integer.",
                "zh": "一个矩形的周长为 $40$。可能的最大面积是多少？以整数作答。"
              },
              "answer": "100",
              "accept": [
                "100.0"
              ],
              "explanation": {
                "en": "With $2x + 2y = 40$, $y = 20 - x$ and $A = x(20 - x)$. Then $A'(x) = 20 - 2x = 0$ gives $x = 10$, so $y = 10$ (a square) and $A = 100$. A square always maximizes area for a fixed perimeter.",
                "zh": "由 $2x + 2y = 40$ 得 $y = 20 - x$，$A = x(20 - x)$。则 $A'(x) = 20 - 2x = 0$ 得 $x = 10$，故 $y = 10$（正方形），$A = 100$。固定周长时正方形总能使面积最大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In an optimization problem, after finding a single critical point on an open interval where $f''< 0$, what have you justified?",
                "zh": "在最优化问题中，若在开区间上求出唯一临界点且该处 $f'' < 0$，你论证了什么？"
              },
              "choices": [
                "It is the absolute maximum",
                "It is the absolute minimum",
                "It is an inflection point",
                "Nothing can be concluded without the endpoints"
              ],
              "answer": 0,
              "explanation": {
                "en": "$f'' < 0$ means concave down, so the critical point is a local maximum; a lone local max on an open interval is the absolute maximum. Thinking negative $f''$ signals a minimum is the reversed-rule error.",
                "zh": "$f'' < 0$ 表示下凹，故临界点是局部最大值；开区间上唯一的局部最大值即绝对最大值。以为 $f'' < 0$ 表示最小值是把规则弄反的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A farmer builds a rectangular pen along a river (no fence on the river side) using $120$ m of fence. What is the maximum area, in square meters? Give an integer.",
                "zh": "农民沿河建矩形围栏（靠河一侧不设围栏），用 $120$ 米围栏。最大面积是多少平方米？以整数作答。"
              },
              "answer": "1800",
              "accept": [
                "1800.0"
              ],
              "explanation": {
                "en": "With sides $x, x, y$ and $2x + y = 120$, $A = x(120 - 2x)$. Then $A'(x) = 120 - 4x = 0$ gives $x = 30$, $y = 60$, and $A = 1800$. Forgetting that only three sides use fence would give the wrong constraint.",
                "zh": "设边为 $x, x, y$，$2x + y = 120$，$A = x(120 - 2x)$。则 $A'(x) = 120 - 4x = 0$ 得 $x = 30$，$y = 60$，$A = 1800$。忘记只有三条边用围栏会写错约束。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To find the point on $y = \\sqrt{x}$ closest to $(4, 0)$, which quantity is easiest to minimize?",
                "zh": "求 $y = \\sqrt{x}$ 上离 $(4, 0)$ 最近的点时，最容易最小化哪个量？"
              },
              "choices": [
                "$D = \\sqrt{(x-4)^2 + x}$",
                "$D = (x-4)^2 + x$",
                "$D = (x-4)^2 + x^2$",
                "$D = x - 4 + \\sqrt{x}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "On the curve $y = \\sqrt{x}$, so $y^2 = x$; the squared distance is $(x-4)^2 + (\\sqrt{x})^2 = (x-4)^2 + x$. Minimizing the square avoids the messy root and has the same minimizer. Using $x^2$ instead of $x$ forgets that $y^2 = x$ here.",
                "zh": "在曲线上 $y = \\sqrt{x}$，故 $y^2 = x$；距离平方为 $(x-4)^2 + (\\sqrt{x})^2 = (x-4)^2 + x$。最小化平方可避开麻烦的根号，且取得最小值的位置相同。用 $x^2$ 代替 $x$ 是忘了此处 $y^2 = x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two nonnegative numbers sum to $12$. What is the maximum value of their product? Give an integer.",
                "zh": "两个非负数之和为 $12$。它们乘积的最大值是多少？以整数作答。"
              },
              "answer": "36",
              "accept": [
                "36.0"
              ],
              "explanation": {
                "en": "Let the numbers be $x$ and $12 - x$; the product is $P = x(12 - x) = 12x - x^2$. Then $P'(x) = 12 - 2x = 0$ gives $x = 6$, so $P = 6 \\cdot 6 = 36$. Equal numbers maximize the product for a fixed sum.",
                "zh": "设两数为 $x$ 与 $12 - x$；乘积为 $P = x(12 - x) = 12x - x^2$。则 $P'(x) = 12 - 2x = 0$ 得 $x = 6$，故 $P = 6 \\cdot 6 = 36$。固定和时两数相等使乘积最大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An open-top box is made from a square sheet of side $12$ by cutting equal squares of side $x$ from the corners and folding up. Which function gives the volume?",
                "zh": "用边长 $12$ 的正方形纸板，在四角剪去边长 $x$ 的小正方形并折起，做成无盖盒子。哪个函数给出体积？"
              },
              "choices": [
                "$V = x(12 - x)^2$",
                "$V = x^2(12 - 2x)$",
                "$V = x(12 - 2x)^2$",
                "$V = (12 - 2x)^3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "After cutting corners of side $x$, the base is a square of side $12 - 2x$ and the height is $x$, so $V = x(12 - 2x)^2$. Using $12 - x$ forgets that a square is removed from BOTH ends of each side.",
                "zh": "剪去边长 $x$ 的角后，底面是边长 $12 - 2x$ 的正方形，高为 $x$，故 $V = x(12 - 2x)^2$。用 $12 - x$ 是忘了每条边\"两端\"都剪掉了小正方形。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the box in the previous style with $V = x(12 - 2x)^2$ on $0 < x < 6$, find the value of $x$ that maximizes the volume. Give an integer.",
                "zh": "对上题类型的盒子，$V = x(12 - 2x)^2$（$0 < x < 6$），求使体积最大的 $x$ 值，以整数作答。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Expand $V = 144x - 48x^2 + 4x^3$, so $V'(x) = 144 - 96x + 12x^2 = 12(x^2 - 8x + 12) = 12(x-2)(x-6)$. In $(0,6)$ only $x = 2$ is valid, and $V'$ changes $+$ to $-$ there, confirming a maximum.",
                "zh": "展开 $V = 144x - 48x^2 + 4x^3$，故 $V'(x) = 144 - 96x + 12x^2 = 12(x^2 - 8x + 12) = 12(x-2)(x-6)$。在 $(0,6)$ 内只有 $x = 2$ 有效，且 $V'$ 在此由正变负，确认为最大值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why is stating the justification essential in an AP optimization free-response question?",
                "zh": "在 AP 最优化自由作答题中，为什么写出论证至关重要？"
              },
              "choices": [
                "It is optional and only for neatness",
                "It replaces the need to find the critical point",
                "It is only needed on closed intervals",
                "AP scoring awards a specific point for justifying the extremum"
              ],
              "answer": 3,
              "explanation": {
                "en": "AP rubrics allot an explicit point for showing WHY the critical value is a max or min (sign change of $f'$, or sign of $f''$). Even a correct final answer loses that point without the reasoning. Believing the number alone suffices is the costly misconception.",
                "zh": "AP 评分标准为说明\"为什么\"临界值是最大或最小值（$f'$ 的变号，或 $f''$ 的符号）单独设分。即使最终答案正确，缺少推理也会丢掉该分。以为只写数字就够是代价高昂的误解。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "integration-accumulation",
      "title": "Unit 6: Integration and Accumulation of Change",
      "titleZh": "第六单元：积分与累积变化",
      "lessons": [
        {
          "id": "riemann-sums-and-definite-integrals",
          "title": "Riemann Sums and Definite Integrals",
          "titleZh": "黎曼和与定积分",
          "content": [
            {
              "type": "h2",
              "en": "Approximating Area Under a Curve",
              "zh": "估计曲线下的面积"
            },
            {
              "type": "p",
              "en": "A central problem of integral calculus is to find the area of the region between the graph of $f$ and the $x$-axis on an interval $[a, b]$. When $f$ is complicated, we cannot use a simple area formula, so we approximate: cover the region with rectangles, add up their areas, and use more and thinner rectangles to get a better answer. Such a sum of rectangle areas is called a Riemann sum.",
              "zh": "积分学的核心问题之一，是求区间 $[a, b]$ 上函数 $f$ 的图像与 $x$ 轴之间区域的面积。当 $f$ 比较复杂时，我们无法套用简单的面积公式，于是采用估计的方法：用一系列矩形覆盖该区域，把它们的面积相加，再用更多、更窄的矩形得到更精确的结果。这种矩形面积之和称为黎曼和。"
            },
            {
              "type": "p",
              "en": "Divide $[a, b]$ into $n$ subintervals. With equal widths, each has width $\\Delta x = \\frac{b - a}{n}$. On each subinterval we build a rectangle whose height is a value of $f$; the different rules below differ only in where on the subinterval we read that height.",
              "zh": "把 $[a, b]$分成 $n$ 个子区间。若宽度相等，则每个子区间的宽度为 $\\Delta x = \\frac{b - a}{n}$。在每个子区间上以 $f$ 的某个函数值作为矩形的高；下面几种法则的区别，仅在于我们在子区间的哪个位置读取这个高度。"
            },
            {
              "type": "h3",
              "en": "Left, Right, and Midpoint Sums",
              "zh": "左端点、右端点与中点和"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Left Riemann sum: each rectangle's height is $f$ at the left endpoint of its subinterval.",
                  "zh": "左黎曼和：每个矩形的高取子区间左端点处的 $f$ 值。"
                },
                {
                  "en": "Right Riemann sum: each height is $f$ at the right endpoint.",
                  "zh": "右黎曼和：每个矩形的高取右端点处的 $f$ 值。"
                },
                {
                  "en": "Midpoint sum: each height is $f$ at the midpoint of the subinterval.",
                  "zh": "中点和：每个矩形的高取子区间中点处的 $f$ 值。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For a left sum with $n$ equal subintervals, if $x_0, x_1, \\ldots, x_n$ are the grid points, the approximation is $\\Delta x\\,[f(x_0) + f(x_1) + \\cdots + f(x_{n-1})]$. A right sum uses $f(x_1) + \\cdots + f(x_n)$ instead. The midpoint sum evaluates $f$ halfway between consecutive grid points.",
              "zh": "对含 $n$ 个等宽子区间的左和，若 $x_0, x_1, \\ldots, x_n$ 为分点，则估计值为 $\\Delta x\\,[f(x_0) + f(x_1) + \\cdots + f(x_{n-1})]$。右和则改用 $f(x_1) + \\cdots + f(x_n)$。中点和在相邻分点的正中间取 $f$ 值。"
            },
            {
              "type": "h3",
              "en": "The Trapezoidal Approximation",
              "zh": "梯形估计法"
            },
            {
              "type": "p",
              "en": "Instead of flat-topped rectangles, connect consecutive points on the curve with straight segments, forming trapezoids. A single trapezoid over $[x_{k-1}, x_k]$ has area $\\frac{1}{2}(x_k - x_{k-1})[f(x_{k-1}) + f(x_k)]$ — the average of the left and right heights times the width. For equal widths $\\Delta x$, the full trapezoidal sum is:",
              "zh": "不再用平顶矩形，而是用直线段连接曲线上相邻的点，形成一系列梯形。区间 $[x_{k-1}, x_k]$ 上单个梯形的面积为 $\\frac{1}{2}(x_k - x_{k-1})[f(x_{k-1}) + f(x_k)]$——即左右两高的平均值乘以宽度。当宽度都为 $\\Delta x$ 时，完整的梯形和为："
            },
            {
              "type": "math",
              "tex": "T = \\frac{\\Delta x}{2}\\left[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)\\right]"
            },
            {
              "type": "p",
              "en": "Notice the interior heights are each doubled and the two endpoints are counted once. The trapezoidal estimate equals the exact average of the left and right Riemann sums for the same partition.",
              "zh": "注意内部各高度都乘以 $2$，两个端点只算一次。对同一分割，梯形估计恰好等于左和与右和的平均值。"
            },
            {
              "type": "h3",
              "en": "Over- or Under-Estimate?",
              "zh": "偏大还是偏小？"
            },
            {
              "type": "p",
              "en": "Whether a rule overestimates or underestimates the true area depends on the shape of $f$:",
              "zh": "一种法则是高估还是低估真实面积，取决于 $f$ 的形状："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $f$ is increasing, a left sum underestimates and a right sum overestimates; if $f$ is decreasing, it is the reverse.",
                  "zh": "若 $f$ 递增，则左和偏小、右和偏大；若 $f$ 递减，则相反。"
                },
                {
                  "en": "If $f$ is concave up, the trapezoidal sum overestimates (trapezoids sit above the curve); if $f$ is concave down, it underestimates.",
                  "zh": "若 $f$ 上凹（凹口朝上），梯形和偏大（梯形位于曲线上方）；若 $f$ 下凹，则偏小。"
                },
                {
                  "en": "If $f$ is concave up, the midpoint sum underestimates; if concave down, it overestimates — opposite to the trapezoid.",
                  "zh": "若 $f$ 上凹，中点和偏小；若下凹，则偏大——与梯形恰好相反。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: to justify \"over\" vs \"under\" on the free-response section, cite the behavior of $f$ explicitly — e.g. \"the left sum underestimates because $f$ is increasing on the interval.\" A bare answer with no reason earns no justification points.",
              "zh": "AP 考试提示：在自由作答题中判断\"偏大\"还是\"偏小\"时，务必明确引用 $f$ 的性质——例如\"因为 $f$ 在该区间上递增，故左和偏小\"。只给结论而不说理由，得不到说理分。"
            },
            {
              "type": "h2",
              "en": "The Definite Integral",
              "zh": "定积分"
            },
            {
              "type": "p",
              "en": "As we let $n \\to \\infty$ and the subintervals shrink, the Riemann sums approach a single limiting value, no matter where in each subinterval we read the heights. That limit is the definite integral of $f$ from $a$ to $b$:",
              "zh": "当 $n \\to \\infty$、子区间不断变窄时，无论我们在每个子区间的哪个位置取高，黎曼和都趋于同一个极限值。这个极限就是 $f$ 从 $a$ 到 $b$ 的定积分："
            },
            {
              "type": "math",
              "tex": "\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{k=1}^{n} f(x_k^*)\\,\\Delta x"
            },
            {
              "type": "p",
              "en": "Here $x_k^*$ is any sample point in the $k$-th subinterval. The definite integral gives the exact signed area: regions below the $x$-axis count as negative. The symbol $dx$ is the limiting form of $\\Delta x$, and $a$, $b$ are the lower and upper limits of integration.",
              "zh": "这里 $x_k^*$ 是第 $k$ 个子区间中任取的样本点。定积分给出精确的带符号面积：位于 $x$ 轴下方的区域计为负。符号 $dx$ 是 $\\Delta x$ 的极限形式，$a$、$b$ 分别是积分下限与上限。"
            },
            {
              "type": "h3",
              "en": "Properties of Definite Integrals",
              "zh": "定积分的性质"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\int_a^a f(x)\\,dx = 0$: no width, no area.",
                  "zh": "$\\int_a^a f(x)\\,dx = 0$：宽度为零，面积为零。"
                },
                {
                  "en": "Reversing limits flips the sign: $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$.",
                  "zh": "交换上下限会变号：$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$。"
                },
                {
                  "en": "Linearity: $\\int_a^b [c\\,f(x) \\pm g(x)]\\,dx = c\\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$.",
                  "zh": "线性性质：$\\int_a^b [c\\,f(x) \\pm g(x)]\\,dx = c\\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$。"
                },
                {
                  "en": "Additivity over intervals: $\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$ for any $b$.",
                  "zh": "区间可加性：对任意 $b$，$\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Right sum from a table",
                "zh": "例题 1：用表格求右和"
              },
              "problem": {
                "en": "The velocity $v(t)$ (in m/s) of a runner is recorded: $v(0)=0$, $v(2)=3$, $v(4)=5$, $v(6)=6$. Using a right Riemann sum with the three subintervals of width $2$, estimate $\\int_0^6 v(t)\\,dt$, and state whether it over- or under-estimates given that $v$ is increasing.",
                "zh": "记录了一名跑者的速度 $v(t)$（单位 m/s）：$v(0)=0$，$v(2)=3$，$v(4)=5$，$v(6)=6$。用三个宽度为 $2$ 的子区间作右黎曼和，估计 $\\int_0^6 v(t)\\,dt$，并在已知 $v$ 递增的前提下说明它是偏大还是偏小。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A right sum uses the right endpoint of each subinterval: $t = 2, 4, 6$.",
                  "zh": "右和取每个子区间的右端点：$t = 2, 4, 6$。"
                },
                {
                  "type": "math",
                  "tex": "R = 2\\,[v(2) + v(4) + v(6)] = 2\\,(3 + 5 + 6) = 28"
                },
                {
                  "type": "p",
                  "en": "Since $v$ is increasing, each right-endpoint height is the tallest on its subinterval, so the rectangles lie above the curve — the estimate $28$ m is an overestimate.",
                  "zh": "由于 $v$ 递增，每个右端点的高在其子区间内最大，矩形位于曲线上方——所以估计值 $28$ m 偏大。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Using properties",
                "zh": "例题 2：利用性质"
              },
              "problem": {
                "en": "Given $\\int_0^4 f(x)\\,dx = 10$ and $\\int_0^7 f(x)\\,dx = 4$, find $\\int_7^4 f(x)\\,dx$.",
                "zh": "已知 $\\int_0^4 f(x)\\,dx = 10$，$\\int_0^7 f(x)\\,dx = 4$，求 $\\int_7^4 f(x)\\,dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By additivity, $\\int_0^7 f = \\int_0^4 f + \\int_4^7 f$, so $\\int_4^7 f = 4 - 10 = -6$.",
                  "zh": "由区间可加性，$\\int_0^7 f = \\int_0^4 f + \\int_4^7 f$，故 $\\int_4^7 f = 4 - 10 = -6$。"
                },
                {
                  "type": "p",
                  "en": "Reversing the limits changes the sign: $\\int_7^4 f = -\\int_4^7 f = 6$.",
                  "zh": "交换上下限要变号：$\\int_7^4 f = -\\int_4^7 f = 6$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A function $f$ is increasing and concave down on $[0, 6]$. Which approximation is guaranteed to be an underestimate of $\\int_0^6 f(x)\\,dx$?",
                "zh": "函数 $f$ 在 $[0, 6]$ 上递增且下凹。下列哪种估计一定是 $\\int_0^6 f(x)\\,dx$ 的低估？"
              },
              "choices": [
                "Right Riemann sum",
                "Trapezoidal sum",
                "Left Riemann sum",
                "Midpoint sum"
              ],
              "answer": 2,
              "explanation": {
                "en": "For an increasing function the left endpoints give the shortest rectangle on each subinterval, so the left sum lies below the curve — an underestimate. The right sum overestimates because $f$ is increasing, and it is concavity (not monotonicity) that makes the trapezoid an underestimate here.",
                "zh": "对递增函数，每个子区间的左端点给出最矮的矩形，故左和位于曲线下方——为低估。右和因 $f$ 递增而偏大；而让此处梯形偏低的是凹性（下凹），并非单调性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f$ on $[1, 9]$ with a table $f(1)=2$, $f(3)=5$, $f(5)=4$, $f(7)=7$, $f(9)=6$, compute the left Riemann sum with four subintervals of width $2$. Give an integer.",
                "zh": "对 $[1, 9]$ 上的 $f$，表格为 $f(1)=2$，$f(3)=5$，$f(5)=4$，$f(7)=7$，$f(9)=6$，用四个宽度为 $2$ 的子区间求左黎曼和，请填一个整数。"
              },
              "answer": "36",
              "accept": [
                "36.0"
              ],
              "explanation": {
                "en": "A left sum uses the left endpoints $x = 1, 3, 5, 7$: $2\\,(2 + 5 + 4 + 7) = 2 \\cdot 18 = 36$. A common slip is to include $f(9)$, but the right endpoint is not used in a left sum.",
                "zh": "左和取左端点 $x = 1, 3, 5, 7$：$2\\,(2 + 5 + 4 + 7) = 2 \\cdot 18 = 36$。常见错误是把 $f(9)$ 也算进去，但左和不使用右端点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Using the same table $f(1)=2$, $f(3)=5$, $f(5)=4$, $f(7)=7$, $f(9)=6$, what is the trapezoidal estimate of $\\int_1^9 f(x)\\,dx$?",
                "zh": "仍用表格 $f(1)=2$，$f(3)=5$，$f(5)=4$，$f(7)=7$，$f(9)=6$，$\\int_1^9 f(x)\\,dx$ 的梯形估计是多少？"
              },
              "choices": [
                "$36$",
                "$40$",
                "$44$",
                "$18$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The trapezoidal rule with $\\Delta x = 2$ gives $\\frac{2}{2}[f(1) + 2f(3) + 2f(5) + 2f(7) + f(9)] = 1\\,[2 + 10 + 8 + 14 + 6] = 40$. Forgetting to double the interior heights would wrongly give a smaller value.",
                "zh": "取 $\\Delta x = 2$ 的梯形法则得 $\\frac{2}{2}[f(1) + 2f(3) + 2f(5) + 2f(7) + f(9)] = 1\\,[2 + 10 + 8 + 14 + 6] = 40$。忘记把内部各高乘以 $2$ 会错得较小的值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f$ is concave up on $[a, b]$, how does the trapezoidal approximation compare to the exact value of $\\int_a^b f(x)\\,dx$?",
                "zh": "若 $f$ 在 $[a, b]$ 上凹（凹口朝上），梯形估计与 $\\int_a^b f(x)\\,dx$ 的精确值相比如何？"
              },
              "choices": [
                "It underestimates",
                "It is exact",
                "It depends on whether $f$ is increasing",
                "It overestimates"
              ],
              "answer": 3,
              "explanation": {
                "en": "When $f$ is concave up, each chord connecting two points on the curve lies above the curve, so every trapezoid overshoots — an overestimate. Whether $f$ is increasing or decreasing does not change this; only concavity controls the trapezoid error.",
                "zh": "当 $f$ 上凹时，连接曲线上两点的每条弦都位于曲线上方，故每个梯形都偏高——为高估。$f$ 是递增还是递减都不影响这一点；只有凹性决定梯形的误差方向。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\int_2^5 g(x)\\,dx = 8$ and $\\int_2^5 h(x)\\,dx = 3$, evaluate $\\int_2^5 [2g(x) - h(x)]\\,dx$. Give an integer.",
                "zh": "已知 $\\int_2^5 g(x)\\,dx = 8$，$\\int_2^5 h(x)\\,dx = 3$，求 $\\int_2^5 [2g(x) - h(x)]\\,dx$，请填一个整数。"
              },
              "answer": "13",
              "accept": [
                "13.0"
              ],
              "explanation": {
                "en": "By linearity, $\\int_2^5 [2g - h] = 2\\int_2^5 g - \\int_2^5 h = 2(8) - 3 = 13$. The constant multiple pulls out and the integrals subtract term by term.",
                "zh": "由线性性质，$\\int_2^5 [2g - h] = 2\\int_2^5 g - \\int_2^5 h = 2(8) - 3 = 13$。常数因子可提出，各积分逐项相减。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The definite integral $\\int_a^b f(x)\\,dx$ is defined as which of the following?",
                "zh": "定积分 $\\int_a^b f(x)\\,dx$ 被定义为下列哪一项？"
              },
              "choices": [
                "The slope of $f$ at $x = b$",
                "$f(b) - f(a)$ for every function $f$",
                "$\\lim_{n \\to \\infty} \\sum_{k=1}^{n} f(x_k^*)\\,\\Delta x$",
                "The maximum value of $f$ on $[a, b]$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The definite integral is by definition the limit of Riemann sums as the number of subintervals grows without bound. The expression $f(b) - f(a)$ is tempting but belongs to an antiderivative of $f$, not to $f$ itself; slope and maximum are unrelated.",
                "zh": "定积分的定义就是当子区间数无限增大时黎曼和的极限。$f(b) - f(a)$ 看似诱人，但那属于 $f$ 的原函数，而非 $f$ 本身；斜率和最大值都与之无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\int_0^3 f(x)\\,dx = 5$ and $\\int_3^8 f(x)\\,dx = -2$, find $\\int_0^8 f(x)\\,dx$. Give an integer.",
                "zh": "已知 $\\int_0^3 f(x)\\,dx = 5$，$\\int_3^8 f(x)\\,dx = -2$，求 $\\int_0^8 f(x)\\,dx$，请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "By additivity over adjacent intervals, $\\int_0^8 f = \\int_0^3 f + \\int_3^8 f = 5 + (-2) = 3$. The negative middle piece means part of the region lies below the axis.",
                "zh": "由相邻区间的可加性，$\\int_0^8 f = \\int_0^3 f + \\int_3^8 f = 5 + (-2) = 3$。中间那段为负，说明部分区域位于 $x$ 轴下方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a decreasing function $f$, the midpoint sum with $n$ rectangles compared with the right Riemann sum with the same $n$ will be:",
                "zh": "对递减函数 $f$，用 $n$ 个矩形的中点和与相同 $n$ 的右黎曼和相比，将会："
              },
              "choices": [
                "Larger than the right sum",
                "Smaller than the right sum",
                "Equal to the right sum",
                "Equal to the left sum"
              ],
              "answer": 0,
              "explanation": {
                "en": "For a decreasing function the right endpoints give the shortest heights, so the right sum is the smallest of the standard rules; the midpoint sum reads taller interior heights and comes out larger. It equals neither the left nor the right sum in general.",
                "zh": "对递减函数，右端点给出最矮的高，故右和是各标准法则中最小的；中点和取内部较高的值，因而更大。一般来说它既不等于左和也不等于右和。"
              }
            }
          ]
        },
        {
          "id": "fundamental-theorem-and-accumulation",
          "title": "The Fundamental Theorem of Calculus and Accumulation Functions",
          "titleZh": "微积分基本定理与累积函数",
          "content": [
            {
              "type": "h2",
              "en": "The Two Parts of the Fundamental Theorem",
              "zh": "基本定理的两个部分"
            },
            {
              "type": "p",
              "en": "The Fundamental Theorem of Calculus (FTC) is the bridge between the two halves of calculus: it says that differentiation and integration undo each other. It comes in two parts, and the AP exam uses both heavily.",
              "zh": "微积分基本定理（FTC）是连接微积分两大分支的桥梁：它表明微分与积分互为逆运算。它分为两个部分，AP 考试对两者都考查得很深。"
            },
            {
              "type": "h3",
              "en": "Part 1: Evaluating Definite Integrals",
              "zh": "第一部分：计算定积分"
            },
            {
              "type": "p",
              "en": "If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ (that is, $F'(x) = f(x)$), then:",
              "zh": "若 $f$ 在 $[a, b]$ 上连续，且 $F$ 是 $f$ 的任一原函数（即 $F'(x) = f(x)$），则："
            },
            {
              "type": "math",
              "tex": "\\int_a^b f(x)\\,dx = F(b) - F(a)"
            },
            {
              "type": "p",
              "en": "This is the workhorse for computing exact areas: find an antiderivative, plug in the top limit, plug in the bottom limit, and subtract. We write $\\left[F(x)\\right]_a^b$ or $F(x)\\big|_a^b$ for $F(b) - F(a)$.",
              "zh": "这是计算精确面积的主力工具：求出一个原函数，代入上限，代入下限，再相减。我们用 $\\left[F(x)\\right]_a^b$ 或 $F(x)\\big|_a^b$ 表示 $F(b) - F(a)$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: because any antiderivative works, you can drop the \"$+C$\" when evaluating a definite integral — the constant cancels in $F(b) - F(a)$. But do not forget it when writing an indefinite integral.",
              "zh": "AP 考试提示：因为任一原函数都可用，计算定积分时可以省去\"$+C$\"——常数会在 $F(b) - F(a)$ 中抵消。但书写不定积分时切勿漏掉它。"
            },
            {
              "type": "h3",
              "en": "Part 2: The Derivative of an Accumulation Function",
              "zh": "第二部分：累积函数的导数"
            },
            {
              "type": "p",
              "en": "Fix a lower limit $a$ and let the upper limit vary. This defines an accumulation function",
              "zh": "固定下限 $a$，让上限变动，就定义了一个累积函数"
            },
            {
              "type": "math",
              "tex": "g(x) = \\int_a^x f(t)\\,dt"
            },
            {
              "type": "p",
              "en": "that measures the signed area accumulated from $a$ out to $x$. FTC Part 2 says that if $f$ is continuous, then $g$ is differentiable and",
              "zh": "它度量从 $a$ 累积到 $x$ 的带符号面积。FTC 第二部分指出：若 $f$ 连续，则 $g$ 可导，且"
            },
            {
              "type": "math",
              "tex": "g'(x) = \\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)"
            },
            {
              "type": "p",
              "en": "In words: the rate at which area accumulates at $x$ is just the height of the curve at $x$. The lower limit $a$ is irrelevant to the derivative; changing it only shifts $g$ by a constant.",
              "zh": "用文字说：面积在 $x$ 处的累积速率，恰好等于曲线在 $x$ 处的高度。下限 $a$ 与该导数无关；改变它只会让 $g$ 平移一个常数。"
            },
            {
              "type": "h3",
              "en": "Variable Upper Limits and the Chain Rule",
              "zh": "可变上限与链式法则"
            },
            {
              "type": "p",
              "en": "When the upper limit is a function $u(x)$ rather than plain $x$, combine FTC Part 2 with the chain rule:",
              "zh": "当上限是某个函数 $u(x)$ 而非单纯的 $x$ 时，把 FTC 第二部分与链式法则结合起来："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx}\\int_a^{u(x)} f(t)\\,dt = f(u(x)) \\cdot u'(x)"
            },
            {
              "type": "p",
              "en": "Substitute the upper limit into $f$, then multiply by the derivative of that upper limit. If instead the variable is in the lower limit, first flip the limits (introducing a minus sign) before applying the rule.",
              "zh": "把上限代入 $f$，再乘以该上限的导数。如果变量出现在下限，先交换上下限（引入一个负号），再套用法则。"
            },
            {
              "type": "h2",
              "en": "Interpreting Accumulation in Context",
              "zh": "在实际情境中解释累积"
            },
            {
              "type": "p",
              "en": "If $f(t)$ is a rate of change (such as a velocity, a flow rate, or how fast a population grows), then $\\int_a^b f(t)\\,dt$ is the net change in the quantity between $t = a$ and $t = b$. This is the \"net change\" reading of the integral:",
              "zh": "若 $f(t)$ 是某个变化率（如速度、流量或人口增长速率），则 $\\int_a^b f(t)\\,dt$ 是该量在 $t = a$ 到 $t = b$ 之间的净变化量。这就是积分的\"净变化\"解读："
            },
            {
              "type": "math",
              "tex": "Q(b) = Q(a) + \\int_a^b Q'(t)\\,dt"
            },
            {
              "type": "p",
              "en": "The units of the integral are the units of $f$ multiplied by the units of $t$. For a velocity in meters per second integrated over seconds, the result is a displacement in meters.",
              "zh": "积分的单位是 $f$ 的单位乘以 $t$ 的单位。对以米每秒为单位的速度在秒上积分，结果是以米为单位的位移。"
            },
            {
              "type": "note",
              "en": "AP exam tip: distinguish displacement from total distance. Displacement is $\\int_a^b v(t)\\,dt$ (signed); total distance traveled is $\\int_a^b |v(t)|\\,dt$, which requires splitting the integral where $v$ changes sign.",
              "zh": "AP 考试提示：区分位移与总路程。位移是 $\\int_a^b v(t)\\,dt$（带符号）；行驶的总路程是 $\\int_a^b |v(t)|\\,dt$，需要在 $v$ 变号处把积分分段。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Chain rule with FTC",
                "zh": "例题 1：FTC 结合链式法则"
              },
              "problem": {
                "en": "Let $g(x) = \\int_1^{x^2} \\cos(t)\\,dt$. Find $g'(x)$.",
                "zh": "设 $g(x) = \\int_1^{x^2} \\cos(t)\\,dt$。求 $g'(x)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The upper limit is $u(x) = x^2$, so by FTC Part 2 with the chain rule, substitute $u$ into the integrand and multiply by $u'(x) = 2x$.",
                  "zh": "上限为 $u(x) = x^2$，故由 FTC 第二部分结合链式法则，把 $u$ 代入被积函数，再乘以 $u'(x) = 2x$。"
                },
                {
                  "type": "math",
                  "tex": "g'(x) = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Net change from a rate",
                "zh": "例题 2：由变化率求净变化"
              },
              "problem": {
                "en": "Water flows into a tank at a rate of $r(t) = 6t$ liters per minute. If the tank holds $10$ liters at $t = 0$, how much water is in it at $t = 4$ minutes?",
                "zh": "水以 $r(t) = 6t$ 升每分钟的速率流入水箱。若 $t = 0$ 时水箱中有 $10$ 升水，则 $t = 4$ 分钟时箱中有多少水？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The amount added is the integral of the rate: $\\int_0^4 6t\\,dt$. An antiderivative of $6t$ is $3t^2$.",
                  "zh": "增加的水量是变化率的积分：$\\int_0^4 6t\\,dt$。$6t$ 的一个原函数是 $3t^2$。"
                },
                {
                  "type": "math",
                  "tex": "\\int_0^4 6t\\,dt = \\left[3t^2\\right]_0^4 = 3(16) - 0 = 48"
                },
                {
                  "type": "p",
                  "en": "Add the starting amount: $10 + 48 = 58$ liters at $t = 4$.",
                  "zh": "加上初始量：$t = 4$ 时为 $10 + 48 = 58$ 升。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_1^3 (2x)\\,dx$. Give an integer.",
                "zh": "求 $\\int_1^3 (2x)\\,dx$，请填一个整数。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "An antiderivative of $2x$ is $x^2$, so $\\int_1^3 2x\\,dx = [x^2]_1^3 = 9 - 1 = 8$. The key is subtracting the lower-limit value, not just plugging in the top.",
                "zh": "$2x$ 的一个原函数是 $x^2$，故 $\\int_1^3 2x\\,dx = [x^2]_1^3 = 9 - 1 = 8$。关键在于要减去下限处的值，而不能只代入上限。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $g(x) = \\int_0^x f(t)\\,dt$ and $f$ is continuous, then $g'(x)$ equals:",
                "zh": "若 $g(x) = \\int_0^x f(t)\\,dt$ 且 $f$ 连续，则 $g'(x)$ 等于："
              },
              "choices": [
                "$f(x) - f(0)$",
                "$f(x)$",
                "$F(x) - F(0)$",
                "$f'(x)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "FTC Part 2 says the derivative of an accumulation function is just the integrand evaluated at the upper limit, $f(x)$. The form $f(x) - f(0)$ confuses the derivative with the evaluation step of Part 1.",
                "zh": "FTC 第二部分表明：累积函数的导数就是被积函数在上限处的值 $f(x)$。$f(x) - f(0)$ 的形式把导数与第一部分的代入求值步骤混淆了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Find $\\frac{d}{dx}\\int_2^{x^3} \\sin(t)\\,dt$.",
                "zh": "求 $\\frac{d}{dx}\\int_2^{x^3} \\sin(t)\\,dt$。"
              },
              "choices": [
                "$\\sin(x^3)$",
                "$\\cos(x^3) \\cdot 3x^2$",
                "$3x^2\\sin(x^3)$",
                "$\\sin(x^3) - \\sin(2)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "With upper limit $u = x^3$, FTC plus the chain rule gives $\\sin(x^3)\\cdot 3x^2$. A frequent error is forgetting the factor $u'(x) = 3x^2$ and stopping at $\\sin(x^3)$.",
                "zh": "上限 $u = x^3$，FTC 结合链式法则得 $\\sin(x^3)\\cdot 3x^2$。常见错误是忘记因子 $u'(x) = 3x^2$，只写到 $\\sin(x^3)$ 就停下。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^{\\pi} \\sin(x)\\,dx$. Give an integer.",
                "zh": "求 $\\int_0^{\\pi} \\sin(x)\\,dx$，请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "An antiderivative of $\\sin x$ is $-\\cos x$, so $[-\\cos x]_0^{\\pi} = -\\cos\\pi - (-\\cos 0) = -(-1) + 1 = 2$. Watch the sign: the antiderivative of $\\sin$ is $-\\cos$, not $\\cos$.",
                "zh": "$\\sin x$ 的一个原函数是 $-\\cos x$，故 $[-\\cos x]_0^{\\pi} = -\\cos\\pi - (-\\cos 0) = -(-1) + 1 = 2$。注意符号：$\\sin$ 的原函数是 $-\\cos$，不是 $\\cos$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A car has velocity $v(t)$ m/s. What does $\\int_0^{10} v(t)\\,dt$ represent?",
                "zh": "一辆车的速度为 $v(t)$ m/s。$\\int_0^{10} v(t)\\,dt$ 表示什么？"
              },
              "choices": [
                "The acceleration at $t = 10$",
                "The average velocity over $[0, 10]$",
                "The total distance, even if $v$ changes sign",
                "The displacement over $[0, 10]$ in meters"
              ],
              "answer": 3,
              "explanation": {
                "en": "Integrating a velocity over time gives the (signed) displacement, in meters. It is the total distance only if $v$ never changes sign; otherwise total distance needs $\\int |v|\\,dt$. Acceleration would come from differentiating, not integrating.",
                "zh": "对速度关于时间积分给出（带符号的）位移，单位为米。只有当 $v$ 始终不变号时它才等于总路程；否则总路程需用 $\\int |v|\\,dt$。加速度应由求导而非积分得到。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $F'(x) = f(x)$ with $F(5) = 12$ and $F(2) = 4$, find $\\int_2^5 f(x)\\,dx$. Give an integer.",
                "zh": "已知 $F'(x) = f(x)$，$F(5) = 12$，$F(2) = 4$，求 $\\int_2^5 f(x)\\,dx$，请填一个整数。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "By FTC Part 1, $\\int_2^5 f = F(5) - F(2) = 12 - 4 = 8$. Subtract the value at the lower limit from the value at the upper limit.",
                "zh": "由 FTC 第一部分，$\\int_2^5 f = F(5) - F(2) = 12 - 4 = 8$。用上限处的值减去下限处的值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $g(x) = \\int_0^x f(t)\\,dt$ where $f$ is positive and increasing on $[0, \\infty)$. Which is true of $g$?",
                "zh": "设 $g(x) = \\int_0^x f(t)\\,dt$，其中 $f$ 在 $[0, \\infty)$ 上为正且递增。关于 $g$ 下列哪项正确？"
              },
              "choices": [
                "$g$ is increasing and concave up",
                "$g$ is decreasing and concave up",
                "$g$ is increasing and concave down",
                "$g$ is constant"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $g'(x) = f(x) > 0$, $g$ is increasing; since $g''(x) = f'(x) > 0$ (because $f$ is increasing), $g$ is concave up. Reading $f$'s sign gives $g'$ and reading $f$'s slope gives $g''$.",
                "zh": "因为 $g'(x) = f(x) > 0$，故 $g$ 递增；又因 $g''(x) = f'(x) > 0$（$f$ 递增），故 $g$ 上凹。看 $f$ 的正负得 $g'$，看 $f$ 的增减得 $g''$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_1^2 \\left(3x^2\\right)\\,dx$. Give an integer.",
                "zh": "求 $\\int_1^2 \\left(3x^2\\right)\\,dx$，请填一个整数。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "An antiderivative of $3x^2$ is $x^3$, so $[x^3]_1^2 = 8 - 1 = 7$. Applying the power rule for antiderivatives, $\\int 3x^2\\,dx = x^3 + C$.",
                "zh": "$3x^2$ 的一个原函数是 $x^3$，故 $[x^3]_1^2 = 8 - 1 = 7$。用原函数的幂法则，$\\int 3x^2\\,dx = x^3 + C$。"
              }
            }
          ]
        },
        {
          "id": "antiderivatives-and-u-substitution",
          "title": "Antiderivatives and u-Substitution",
          "titleZh": "原函数与换元积分法",
          "content": [
            {
              "type": "h2",
              "en": "Antiderivatives and the Indefinite Integral",
              "zh": "原函数与不定积分"
            },
            {
              "type": "p",
              "en": "An antiderivative of $f$ is a function $F$ whose derivative is $f$. Because the derivative of a constant is zero, if $F$ is one antiderivative then so is $F + C$ for every constant $C$. The indefinite integral collects all of them:",
              "zh": "$f$ 的原函数是导数等于 $f$ 的函数 $F$。由于常数的导数为零，若 $F$ 是一个原函数，则对任意常数 $C$，$F + C$ 也是原函数。不定积分把它们全部收集起来："
            },
            {
              "type": "math",
              "tex": "\\int f(x)\\,dx = F(x) + C"
            },
            {
              "type": "note",
              "en": "AP exam tip: never forget the \"$+C$\" on an indefinite integral. Omitting it is one of the most common ways to lose an easy point, and it matters in differential-equation problems where the constant is later determined by an initial condition.",
              "zh": "AP 考试提示：不定积分绝不能漏掉\"$+C$\"。漏写是最常见的失分方式之一；在微分方程问题中，这个常数随后要由初始条件确定，尤其重要。"
            },
            {
              "type": "h3",
              "en": "Basic Antiderivative Rules",
              "zh": "基本原函数法则"
            },
            {
              "type": "p",
              "en": "Every derivative rule read backwards is an antiderivative rule. The essential ones for the AP exam are:",
              "zh": "每条求导法则反过来读就是一条原函数法则。AP 考试必备的有："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Power rule: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ for $n \\ne -1$.",
                  "zh": "幂法则：当 $n \\ne -1$ 时，$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$。"
                },
                {
                  "en": "The exception: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$.",
                  "zh": "例外情形：$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$。"
                },
                {
                  "en": "Exponential: $\\int e^x\\,dx = e^x + C$.",
                  "zh": "指数函数：$\\int e^x\\,dx = e^x + C$。"
                },
                {
                  "en": "Trigonometric: $\\int \\sin x\\,dx = -\\cos x + C$, $\\int \\cos x\\,dx = \\sin x + C$, $\\int \\sec^2 x\\,dx = \\tan x + C$.",
                  "zh": "三角函数：$\\int \\sin x\\,dx = -\\cos x + C$，$\\int \\cos x\\,dx = \\sin x + C$，$\\int \\sec^2 x\\,dx = \\tan x + C$。"
                },
                {
                  "en": "Inverse-trig forms: $\\int \\frac{1}{1 + x^2}\\,dx = \\arctan x + C$ and $\\int \\frac{1}{\\sqrt{1 - x^2}}\\,dx = \\arcsin x + C$.",
                  "zh": "反三角形式：$\\int \\frac{1}{1 + x^2}\\,dx = \\arctan x + C$，$\\int \\frac{1}{\\sqrt{1 - x^2}}\\,dx = \\arcsin x + C$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Combine these with linearity: constants factor out and sums integrate term by term. Always mentally differentiate your answer to check it returns the integrand.",
              "zh": "把这些法则与线性性质结合：常数可提出，和式逐项积分。求完后不妨在心里把答案求导，验证它是否还原为被积函数。"
            },
            {
              "type": "h2",
              "en": "u-Substitution",
              "zh": "换元积分法"
            },
            {
              "type": "p",
              "en": "u-Substitution reverses the chain rule. When an integrand contains a composite function together with (a constant multiple of) the derivative of the inner function, substitute $u$ for the inner function. Then $du = u'(x)\\,dx$ converts the whole integral into one in $u$ alone.",
              "zh": "换元积分法是链式法则的逆运算。当被积函数含有一个复合函数，同时又含内层函数导数的（常数倍）时，令 $u$ 等于内层函数。于是 $du = u'(x)\\,dx$ 把整个积分转化为只含 $u$ 的积分。"
            },
            {
              "type": "math",
              "tex": "\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du \\quad \\text{where } u = g(x)"
            },
            {
              "type": "h3",
              "en": "Steps for an Indefinite Integral",
              "zh": "不定积分的步骤"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Choose $u$ to be the inner function; compute $du = u'(x)\\,dx$.",
                  "zh": "取 $u$ 为内层函数，计算 $du = u'(x)\\,dx$。"
                },
                {
                  "en": "Rewrite the whole integral in terms of $u$ and $du$; every $x$ must disappear.",
                  "zh": "把整个积分用 $u$ 和 $du$ 改写；所有的 $x$ 都必须消失。"
                },
                {
                  "en": "Integrate in $u$, then substitute back $u = g(x)$ and add $+C$.",
                  "zh": "关于 $u$ 求积分，再代回 $u = g(x)$，并加上 $+C$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Changing the Limits for a Definite Integral",
              "zh": "定积分换元时要换限"
            },
            {
              "type": "p",
              "en": "For a definite integral you have two clean options. Either convert back to $x$ before plugging in the original limits, or — usually faster — change the limits to $u$-values as you substitute: when $x = a$, use $u = g(a)$; when $x = b$, use $u = g(b)$. Then evaluate entirely in $u$ with no back-substitution.",
              "zh": "对定积分有两种清晰的做法。要么先代回 $x$ 再代入原来的上下限；要么——通常更快——在换元时把上下限也换成 $u$ 值：$x = a$ 时取 $u = g(a)$，$x = b$ 时取 $u = g(b)$。然后完全在 $u$ 中求值，无需代回。"
            },
            {
              "type": "note",
              "en": "AP exam tip: if you switch to $u$-limits, do NOT substitute back to $x$ at the end — that would double-apply the change and give a wrong answer. Pick one method and stay consistent.",
              "zh": "AP 考试提示：若已换成 $u$ 的上下限，最后就不要再代回 $x$——那会把换限做两遍，得到错误答案。选定一种方法并保持一致。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Indefinite u-substitution",
                "zh": "例题 1：不定积分换元"
              },
              "problem": {
                "en": "Find $\\int 2x\\cos(x^2)\\,dx$.",
                "zh": "求 $\\int 2x\\cos(x^2)\\,dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $u = x^2$, so $du = 2x\\,dx$. The $2x\\,dx$ in the integral is exactly $du$.",
                  "zh": "令 $u = x^2$，则 $du = 2x\\,dx$。积分中的 $2x\\,dx$ 恰好就是 $du$。"
                },
                {
                  "type": "math",
                  "tex": "\\int \\cos(u)\\,du = \\sin(u) + C = \\sin(x^2) + C"
                },
                {
                  "type": "p",
                  "en": "Check by differentiating: $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2)\\cdot 2x$, the original integrand.",
                  "zh": "求导验证：$\\frac{d}{dx}\\sin(x^2) = \\cos(x^2)\\cdot 2x$，正是原被积函数。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Definite integral with changed limits",
                "zh": "例题 2：换限的定积分"
              },
              "problem": {
                "en": "Evaluate $\\int_0^2 x\\sqrt{x^2 + 1}\\,dx$.",
                "zh": "求 $\\int_0^2 x\\sqrt{x^2 + 1}\\,dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $u = x^2 + 1$, so $du = 2x\\,dx$, meaning $x\\,dx = \\frac{1}{2}\\,du$. Change the limits: $x = 0 \\Rightarrow u = 1$ and $x = 2 \\Rightarrow u = 5$.",
                  "zh": "令 $u = x^2 + 1$，则 $du = 2x\\,dx$，即 $x\\,dx = \\frac{1}{2}\\,du$。换限：$x = 0 \\Rightarrow u = 1$，$x = 2 \\Rightarrow u = 5$。"
                },
                {
                  "type": "math",
                  "tex": "\\int_1^5 \\sqrt{u}\\cdot\\frac{1}{2}\\,du = \\frac{1}{2}\\cdot\\frac{2}{3}\\,u^{3/2}\\Big|_1^5 = \\frac{1}{3}\\left(5^{3/2} - 1\\right)"
                },
                {
                  "type": "p",
                  "en": "Numerically this is about $3.39$. Because we changed to $u$-limits, we evaluate directly at $u = 1$ and $u = 5$ with no back-substitution.",
                  "zh": "数值约为 $3.39$。因为已换成 $u$ 的上下限，直接在 $u = 1$ 与 $u = 5$ 处求值，无需代回。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which is $\\int x^3\\,dx$?",
                "zh": "$\\int x^3\\,dx$ 等于哪一项？"
              },
              "choices": [
                "$3x^2 + C$",
                "$\\frac{x^4}{3} + C$",
                "$4x^4 + C$",
                "$\\frac{x^4}{4} + C$"
              ],
              "answer": 3,
              "explanation": {
                "en": "By the power rule, raise the exponent by one and divide: $\\frac{x^{4}}{4} + C$. The choice $3x^2$ is the derivative of $x^3$, not its antiderivative — a common direction mix-up.",
                "zh": "由幂法则，指数加一再相除：$\\frac{x^{4}}{4} + C$。$3x^2$ 是 $x^3$ 的导数而非原函数——常见的方向搞反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^2 4x^3\\,dx$. Give an integer.",
                "zh": "求 $\\int_0^2 4x^3\\,dx$，请填一个整数。"
              },
              "answer": "16",
              "accept": [
                "16.0"
              ],
              "explanation": {
                "en": "An antiderivative of $4x^3$ is $x^4$, so $[x^4]_0^2 = 16 - 0 = 16$. The coefficient $4$ and the power rule combine so that $\\int 4x^3\\,dx = x^4 + C$.",
                "zh": "$4x^3$ 的一个原函数是 $x^4$，故 $[x^4]_0^2 = 16 - 0 = 16$。系数 $4$ 与幂法则结合，使 $\\int 4x^3\\,dx = x^4 + C$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\int \\frac{1}{x}\\,dx$?",
                "zh": "$\\int \\frac{1}{x}\\,dx$ 等于什么？"
              },
              "choices": [
                "$-\\frac{1}{x^2} + C$",
                "$x^{-2} + C$",
                "$\\ln|x| + C$",
                "$\\frac{x^0}{0} + C$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The power rule fails at $n = -1$ (it would divide by zero), so this case is special: $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$. The tempting $\\frac{x^0}{0}$ is exactly the undefined form the log rule replaces.",
                "zh": "幂法则在 $n = -1$ 时失效（会除以零），所以这是特例：$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$。诱人的 $\\frac{x^0}{0}$ 正是对数法则要替代的那个无定义形式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $\\int (2x + 1)^5\\,dx$, the best substitution is:",
                "zh": "对 $\\int (2x + 1)^5\\,dx$，最合适的换元是："
              },
              "choices": [
                "$u = x^5$, $du = 5x^4\\,dx$",
                "$u = 2x + 1$, $du = 2\\,dx$",
                "$u = (2x+1)^5$, $du = 5(2x+1)^4\\,dx$",
                "No substitution is possible"
              ],
              "answer": 1,
              "explanation": {
                "en": "Let $u$ be the inner function $2x + 1$; then $du = 2\\,dx$, so $dx = \\frac{1}{2}\\,du$ and the integral becomes $\\frac{1}{2}\\int u^5\\,du$. Choosing $u$ to be the whole power complicates rather than simplifies the integral.",
                "zh": "令 $u$ 为内层函数 $2x + 1$；则 $du = 2\\,dx$，故 $dx = \\frac{1}{2}\\,du$，积分化为 $\\frac{1}{2}\\int u^5\\,du$。把整个幂取作 $u$ 只会让积分更复杂而非更简单。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $u = x^2 + 1$, evaluate $\\int_0^1 2x(x^2 + 1)^3\\,dx$. Give the answer as a fraction.",
                "zh": "用 $u = x^2 + 1$ 求 $\\int_0^1 2x(x^2 + 1)^3\\,dx$，答案请以分数形式给出。"
              },
              "answer": "15/4",
              "accept": [
                "3.75",
                "15/4.0"
              ],
              "explanation": {
                "en": "With $u = x^2+1$, $du = 2x\\,dx$; limits become $u = 1$ to $u = 2$. Then $\\int_1^2 u^3\\,du = \\frac{u^4}{4}\\big|_1^2 = \\frac{16 - 1}{4} = \\frac{15}{4}$. Remember to change the limits, not keep $0$ and $1$.",
                "zh": "令 $u = x^2+1$，$du = 2x\\,dx$；上下限变为 $u = 1$ 到 $u = 2$。于是 $\\int_1^2 u^3\\,du = \\frac{u^4}{4}\\big|_1^2 = \\frac{16 - 1}{4} = \\frac{15}{4}$。记得换限，不要仍用 $0$ 和 $1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equals $\\int \\sec^2 x\\,dx$?",
                "zh": "$\\int \\sec^2 x\\,dx$ 等于哪一项？"
              },
              "choices": [
                "$\\tan x + C$",
                "$\\sec x \\tan x + C$",
                "$-\\cot x + C$",
                "$2\\sec x + C$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $\\frac{d}{dx}\\tan x = \\sec^2 x$, its antiderivative is $\\tan x + C$. The choice $\\sec x\\tan x$ is the derivative of $\\sec x$, a related but different formula.",
                "zh": "因为 $\\frac{d}{dx}\\tan x = \\sec^2 x$，其原函数为 $\\tan x + C$。$\\sec x\\tan x$ 是 $\\sec x$ 的导数，是相关但不同的公式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^1 e^x\\,dx$ and round to two decimal places. (Use $e \\approx 2.72$.)",
                "zh": "求 $\\int_0^1 e^x\\,dx$ 并保留两位小数。（取 $e \\approx 2.72$。）"
              },
              "answer": "1.72",
              "accept": [
                "1.72",
                "1.718"
              ],
              "explanation": {
                "en": "An antiderivative of $e^x$ is $e^x$, so $[e^x]_0^1 = e^1 - e^0 = e - 1 \\approx 2.72 - 1 = 1.72$. The antiderivative of $e^x$ is itself — no new factor appears.",
                "zh": "$e^x$ 的原函数是 $e^x$，故 $[e^x]_0^1 = e^1 - e^0 = e - 1 \\approx 2.72 - 1 = 1.72$。$e^x$ 的原函数就是它自身，不会多出新的因子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\int \\frac{1}{1 + x^2}\\,dx$?",
                "zh": "$\\int \\frac{1}{1 + x^2}\\,dx$ 等于什么？"
              },
              "choices": [
                "$\\ln(1 + x^2) + C$",
                "$\\frac{1}{2}\\ln(1 + x^2) + C$",
                "$\\arctan x + C$",
                "$\\arcsin x + C$"
              ],
              "answer": 2,
              "explanation": {
                "en": "This is the standard inverse-trig form: the antiderivative of $\\frac{1}{1 + x^2}$ is $\\arctan x + C$. The log answer would arise from $\\frac{2x}{1 + x^2}$, whose numerator matches the derivative of the denominator — not the case here.",
                "zh": "这是标准的反三角形式：$\\frac{1}{1 + x^2}$ 的原函数是 $\\arctan x + C$。对数答案来自 $\\frac{2x}{1 + x^2}$，其分子恰为分母的导数——这里并非如此。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "differential-equations",
      "title": "Unit 7: Differential Equations",
      "titleZh": "第七单元：微分方程",
      "lessons": [
        {
          "id": "slope-fields-and-separation-of-variables",
          "title": "Slope Fields and Separation of Variables",
          "titleZh": "斜率场与分离变量法",
          "content": [
            {
              "type": "h2",
              "en": "Modeling with Differential Equations",
              "zh": "用微分方程建模"
            },
            {
              "type": "p",
              "en": "A differential equation is an equation that involves a derivative. Instead of telling you the value of a quantity directly, it tells you the rate at which the quantity changes. For example, the sentence \"the population grows at a rate proportional to its current size\" translates directly into $\\frac{dP}{dt} = kP$. Solving a differential equation means finding a function $y = f(x)$ whose derivative satisfies the equation.",
              "zh": "微分方程是含有导数的方程。它不直接告诉你某个量的值，而是告诉你该量变化的速率。例如，\"人口按与当前规模成正比的速率增长\"这句话可直接翻译为 $\\frac{dP}{dt} = kP$。解一个微分方程，就是找出其导数满足该方程的函数 $y = f(x)$。"
            },
            {
              "type": "p",
              "en": "A solution containing an arbitrary constant $C$ is called the general solution; it describes a whole family of curves. When we are also given an initial condition such as $y(0) = 3$, we can pin down $C$ and obtain a single particular solution.",
              "zh": "含有任意常数 $C$ 的解称为通解，它描述一整族曲线。若再给出一个初始条件（如 $y(0) = 3$），就能确定 $C$，从而得到唯一的特解。"
            },
            {
              "type": "h3",
              "en": "Verifying a Solution",
              "zh": "验证解"
            },
            {
              "type": "p",
              "en": "You can always check whether a proposed function is a solution without solving anything: differentiate it and substitute into the equation. If the two sides agree for all $x$, it is a solution. This is a common AP exam task because it requires no integration.",
              "zh": "要检验某个函数是否为解，无需真正求解：把它求导后代入方程即可。若对所有 $x$ 两边都相等，它就是解。这是 AP 考试的常见题型，因为它不需要积分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Verifying a solution",
                "zh": "例题 1：验证解"
              },
              "problem": {
                "en": "Show that $y = 2e^{3x}$ is a solution of $\\frac{dy}{dx} = 3y$.",
                "zh": "证明 $y = 2e^{3x}$ 是 $\\frac{dy}{dx} = 3y$ 的解。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate: $\\frac{dy}{dx} = 2 \\cdot 3 e^{3x} = 6e^{3x}$.",
                  "zh": "求导：$\\frac{dy}{dx} = 2 \\cdot 3 e^{3x} = 6e^{3x}$。"
                },
                {
                  "type": "p",
                  "en": "Now compute the right side: $3y = 3(2e^{3x}) = 6e^{3x}$.",
                  "zh": "再算右边：$3y = 3(2e^{3x}) = 6e^{3x}$。"
                },
                {
                  "type": "p",
                  "en": "Both sides equal $6e^{3x}$, so $y = 2e^{3x}$ satisfies the equation and is indeed a solution.",
                  "zh": "两边都等于 $6e^{3x}$，所以 $y = 2e^{3x}$ 满足方程，确实是解。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Slope Fields",
              "zh": "斜率场"
            },
            {
              "type": "p",
              "en": "A slope field (or direction field) is a picture of a differential equation of the form $\\frac{dy}{dx} = F(x, y)$. At a grid of points in the plane we draw a short segment whose slope equals the value of $F$ there. Together these segments show the \"flow\" that every solution curve must follow — each solution is a curve that stays tangent to the little segments as it moves through the field.",
              "zh": "斜率场（或方向场）是形如 $\\frac{dy}{dx} = F(x, y)$ 的微分方程的图示。在平面上一格一格的点处，画一条斜率等于该点 $F$ 值的小线段。这些线段合在一起，展示出每条解曲线都必须顺应的\"流向\"——每个解就是在场中穿行、始终与小线段相切的曲线。"
            },
            {
              "type": "h3",
              "en": "Reading and Sketching a Slope Field",
              "zh": "读图与绘制斜率场"
            },
            {
              "type": "p",
              "en": "To draw a slope field by hand, pick each grid point $(x, y)$, plug it into $F(x, y)$, and draw a segment with that slope. Some structural clues let you work fast:",
              "zh": "手绘斜率场时，取每个格点 $(x, y)$，代入 $F(x, y)$，画出以该值为斜率的线段。一些结构性线索能帮你快速判断："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $\\frac{dy}{dx}$ depends only on $x$, every segment in the same vertical column has the same slope.",
                  "zh": "若 $\\frac{dy}{dx}$ 只与 $x$ 有关，则同一竖列上的所有线段斜率相同。"
                },
                {
                  "en": "If $\\frac{dy}{dx}$ depends only on $y$, every segment in the same horizontal row has the same slope.",
                  "zh": "若 $\\frac{dy}{dx}$ 只与 $y$ 有关，则同一横行上的所有线段斜率相同。"
                },
                {
                  "en": "Where $\\frac{dy}{dx} = 0$, segments are horizontal; where $\\frac{dy}{dx}$ is large, segments are nearly vertical.",
                  "zh": "在 $\\frac{dy}{dx} = 0$ 处线段水平；在 $\\frac{dy}{dx}$ 很大处线段几乎竖直。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: to match a slope field to its equation, test a few easy points instead of the whole grid. Check where the slope is zero, check the sign of the slope in each quadrant, and see whether the pattern changes down a column (depends on $x$) or across a row (depends on $y$). One or two well-chosen points usually eliminate every wrong choice.",
              "zh": "AP 考试提示：把斜率场与方程配对时，只需测几个好算的点，不必查遍整个网格。看斜率何处为零、各象限内斜率的正负，以及沿竖列（与 $x$ 有关）还是沿横行（与 $y$ 有关）变化。选一两个恰当的点，通常就能排除所有错误选项。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Matching a slope field",
                "zh": "例题 2：为斜率场配方程"
              },
              "problem": {
                "en": "A slope field has horizontal segments exactly along the $x$-axis ($y = 0$), positive slopes above the axis, and negative slopes below it, with the slope unchanged as you move horizontally. Which equation produces it: $\\frac{dy}{dx} = x$ or $\\frac{dy}{dx} = y$?",
                "zh": "某斜率场恰在 $x$ 轴（$y = 0$）上线段水平，轴上方斜率为正，轴下方斜率为负，且沿水平方向移动时斜率不变。它对应哪个方程：$\\frac{dy}{dx} = x$ 还是 $\\frac{dy}{dx} = y$？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The slope stays the same as $x$ changes but changes with $y$, so the equation depends on $y$, not $x$. That rules out $\\frac{dy}{dx} = x$.",
                  "zh": "斜率随 $x$ 变化不变、随 $y$ 变化而变，所以方程只与 $y$ 有关，与 $x$ 无关。这排除了 $\\frac{dy}{dx} = x$。"
                },
                {
                  "type": "p",
                  "en": "Check $\\frac{dy}{dx} = y$: on $y = 0$ the slope is $0$ (horizontal), above the axis $y > 0$ gives positive slopes, below the axis $y < 0$ gives negative slopes. Everything matches.",
                  "zh": "验证 $\\frac{dy}{dx} = y$：在 $y = 0$ 上斜率为 $0$（水平），轴上方 $y > 0$ 斜率为正，轴下方 $y < 0$ 斜率为负。全部吻合。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = y"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Separation of Variables",
              "zh": "分离变量法"
            },
            {
              "type": "p",
              "en": "The one general technique for solving differential equations in AB Calculus is separation of variables. It works whenever you can write $\\frac{dy}{dx}$ as a product of a function of $x$ and a function of $y$ — that is, $\\frac{dy}{dx} = g(x)\\,h(y)$. The strategy is to get all the $y$-terms on one side with $dy$ and all the $x$-terms on the other with $dx$, then integrate both sides.",
              "zh": "在 AB 微积分中，求解微分方程的通用方法是分离变量法。只要能把 $\\frac{dy}{dx}$ 写成一个关于 $x$ 的函数与一个关于 $y$ 的函数之积（即 $\\frac{dy}{dx} = g(x)\\,h(y)$），它就适用。做法是把所有含 $y$ 的项连同 $dy$ 移到一边，所有含 $x$ 的项连同 $dx$ 移到另一边，然后两边同时积分。"
            },
            {
              "type": "p",
              "en": "The steps are: (1) separate the variables, (2) integrate both sides, adding a single constant $C$ on one side, (3) apply the initial condition to find $C$, and (4) solve for $y$ if the problem asks for $y$ explicitly.",
              "zh": "步骤为：(1) 分离变量，(2) 两边积分，在一边加上一个常数 $C$，(3) 代入初始条件求出 $C$，(4) 若题目要求显式的 $y$，则解出 $y$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: add the constant $C$ right after integrating, before you solve for $y$, and apply the initial condition then. Solving for $y$ first and adding $C$ at the very end is a frequent source of wrong particular solutions. Also watch the sign of a square root: choose the branch (+ or −) that agrees with the initial condition.",
              "zh": "AP 考试提示：积分后立刻加上常数 $C$，在解出 $y$ 之前就代入初始条件。先解出 $y$、最后才加 $C$ 是特解出错的常见原因。还要注意开方的正负号：选取与初始条件一致的分支（正号或负号）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Separable equation with an initial condition",
                "zh": "例题 3：带初始条件的可分离方程"
              },
              "problem": {
                "en": "Solve $\\frac{dy}{dx} = \\frac{2x}{y}$ with the initial condition $y(0) = 3$, and give $y$ explicitly.",
                "zh": "解 $\\frac{dy}{dx} = \\frac{2x}{y}$，初始条件 $y(0) = 3$，并给出显式的 $y$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Separate: multiply both sides by $y\\,dx$ to get $y\\,dy = 2x\\,dx$.",
                  "zh": "分离变量：两边乘以 $y\\,dx$，得 $y\\,dy = 2x\\,dx$。"
                },
                {
                  "type": "p",
                  "en": "Integrate both sides:",
                  "zh": "两边积分："
                },
                {
                  "type": "math",
                  "tex": "\\frac{y^2}{2} = x^2 + C"
                },
                {
                  "type": "p",
                  "en": "Apply $y(0) = 3$: $\\frac{9}{2} = 0 + C$, so $C = \\frac{9}{2}$. Then $\\frac{y^2}{2} = x^2 + \\frac{9}{2}$, i.e. $y^2 = 2x^2 + 9$.",
                  "zh": "代入 $y(0) = 3$：$\\frac{9}{2} = 0 + C$，故 $C = \\frac{9}{2}$。于是 $\\frac{y^2}{2} = x^2 + \\frac{9}{2}$，即 $y^2 = 2x^2 + 9$。"
                },
                {
                  "type": "p",
                  "en": "Since $y(0) = 3 > 0$, take the positive root:",
                  "zh": "因为 $y(0) = 3 > 0$，取正根："
                },
                {
                  "type": "math",
                  "tex": "y = \\sqrt{2x^2 + 9}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which function is a solution of $\\frac{dy}{dx} = -2y$?",
                "zh": "下列哪个函数是 $\\frac{dy}{dx} = -2y$ 的解？"
              },
              "choices": [
                "$y = e^{2x}$",
                "$y = -2e^{x}$",
                "$y = e^{-2x}$",
                "$y = -x^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "For $y = e^{-2x}$, $\\frac{dy}{dx} = -2e^{-2x} = -2y$, which matches. The tempting choice $y = e^{2x}$ has $\\frac{dy}{dx} = +2y$, the wrong sign — the exponent must be $-2x$, not $2x$.",
                "zh": "对 $y = e^{-2x}$，$\\frac{dy}{dx} = -2e^{-2x} = -2y$，吻合。诱人的 $y = e^{2x}$ 满足 $\\frac{dy}{dx} = +2y$，符号错了——指数应是 $-2x$ 而非 $2x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A slope field shows every segment in a given vertical column having the same slope, and the slopes grow steeper as you move right. Which equation fits?",
                "zh": "某斜率场中每个竖列上的线段斜率相同，且越往右斜率越陡。哪个方程符合？"
              },
              "choices": [
                "$\\frac{dy}{dx} = y$",
                "$\\frac{dy}{dx} = x$",
                "$\\frac{dy}{dx} = xy$",
                "$\\frac{dy}{dx} = \\frac{1}{y}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Constant slope within each vertical column means the slope depends only on $x$; increasing steepness to the right matches $\\frac{dy}{dx} = x$. Choices involving $y$ would make the slope change as you move up or down a column.",
                "zh": "每个竖列内斜率不变，说明斜率只与 $x$ 有关；向右越来越陡符合 $\\frac{dy}{dx} = x$。含 $y$ 的选项会让斜率沿竖列上下移动时改变。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The general solution of $\\frac{dy}{dx} = \\frac{x}{y}$ is $y^2 = x^2 + C$. If $y(0) = 4$, find the value of $C$. Give an integer.",
                "zh": "$\\frac{dy}{dx} = \\frac{x}{y}$ 的通解为 $y^2 = x^2 + C$。若 $y(0) = 4$，求 $C$ 的值，填一个整数。"
              },
              "answer": "16",
              "accept": [
                "16.0"
              ],
              "explanation": {
                "en": "Substitute $x = 0$, $y = 4$: $4^2 = 0^2 + C$, so $C = 16$.",
                "zh": "代入 $x = 0$，$y = 4$：$4^2 = 0^2 + C$，故 $C = 16$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Separating variables in $\\frac{dy}{dx} = e^{x} \\cos^2 y$ and integrating both sides gives which relationship (before applying an initial condition)?",
                "zh": "对 $\\frac{dy}{dx} = e^{x} \\cos^2 y$ 分离变量并两边积分，得到哪个关系式（尚未代入初始条件）？"
              },
              "choices": [
                "$\\sin^2 y = e^{x} + C$",
                "$-\\cot y = e^{x} + C$",
                "$\\sec^2 y = e^{x} + C$",
                "$\\tan y = e^{x} + C$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Divide by $\\cos^2 y$ to get all the $y$ on the left: $\\sec^2 y\\,dy = e^{x}\\,dx$. Integrating uses $\\int \\sec^2 y\\,dy = \\tan y$ and $\\int e^{x}\\,dx = e^{x}$, giving $\\tan y = e^{x} + C$. Leaving $\\cos^2 y$ in the denominator instead of rewriting it as $\\sec^2 y$ is what leads students to the wrong integrals in the other options.",
                "zh": "两边除以 $\\cos^2 y$，把 $y$ 都移到左边：$\\sec^2 y\\,dy = e^{x}\\,dx$。积分用到 $\\int \\sec^2 y\\,dy = \\tan y$ 和 $\\int e^{x}\\,dx = e^{x}$，得 $\\tan y = e^{x} + C$。不把分母的 $\\cos^2 y$ 改写成 $\\sec^2 y$，正是学生在其他选项中用错积分的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\frac{dy}{dx} = 6x^2$ with $y(1) = 5$, then evaluate $y(2)$. Give an integer.",
                "zh": "解 $\\frac{dy}{dx} = 6x^2$，$y(1) = 5$，再求 $y(2)$，填一个整数。"
              },
              "answer": "19",
              "accept": [
                "19.0"
              ],
              "explanation": {
                "en": "Integrate: $y = 2x^3 + C$. Use $y(1) = 5$: $2 + C = 5$, so $C = 3$ and $y = 2x^3 + 3$. Then $y(2) = 2(8) + 3 = 19$. A common slip is forgetting $C$ and reporting $y(2) = 16$.",
                "zh": "积分：$y = 2x^3 + C$。代入 $y(1) = 5$：$2 + C = 5$，故 $C = 3$，$y = 2x^3 + 3$。于是 $y(2) = 2(8) + 3 = 19$。常见错误是漏掉 $C$，得 $y(2) = 16$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the particular solution of $\\frac{dy}{dx} = \\frac{y}{x}$ (for $x > 0$) satisfying $y(1) = 4$?",
                "zh": "$\\frac{dy}{dx} = \\frac{y}{x}$（$x > 0$）满足 $y(1) = 4$ 的特解是什么？"
              },
              "choices": [
                "$y = x + 3$",
                "$y = x^4$",
                "$y = 4x$",
                "$y = 4e^{x-1}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Separate: $\\frac{dy}{y} = \\frac{dx}{x}$, so $\\ln|y| = \\ln|x| + C$, giving $y = Ax$. Then $y(1) = 4$ forces $A = 4$, so $y = 4x$. The choice $y = 4e^{x-1}$ tempts students who separate incorrectly and treat $\\frac{1}{x}$ as if it integrated to $x$.",
                "zh": "分离：$\\frac{dy}{y} = \\frac{dx}{x}$，故 $\\ln|y| = \\ln|x| + C$，得 $y = Ax$。由 $y(1) = 4$ 得 $A = 4$，所以 $y = 4x$。$y = 4e^{x-1}$ 会诱惑那些把 $\\frac{1}{x}$ 误当作积分为 $x$ 的学生。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $\\frac{dy}{dx} = 3x^2 - 4x$, the slope of a solution curve at the point $(2, 7)$ equals which number? Give an integer.",
                "zh": "对 $\\frac{dy}{dx} = 3x^2 - 4x$，解曲线在点 $(2, 7)$ 处的斜率等于多少？填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "The slope at a point is just $\\frac{dy}{dx}$ evaluated there: $3(2)^2 - 4(2) = 12 - 8 = 4$. The $y$-coordinate $7$ is irrelevant because the equation depends only on $x$.",
                "zh": "某点处的斜率就是在该点计算 $\\frac{dy}{dx}$：$3(2)^2 - 4(2) = 12 - 8 = 4$。$y$ 坐标 $7$ 无关紧要，因为方程只与 $x$ 有关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A slope field has slope $0$ everywhere on the line $y = x$ and nonzero slope elsewhere. Which equation is consistent with this?",
                "zh": "某斜率场在直线 $y = x$ 上处处斜率为 $0$，其余地方斜率非零。哪个方程与之相符？"
              },
              "choices": [
                "$\\frac{dy}{dx} = x - y$",
                "$\\frac{dy}{dx} = x + y$",
                "$\\frac{dy}{dx} = xy$",
                "$\\frac{dy}{dx} = x^2 + y^2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "On $y = x$ we need $\\frac{dy}{dx} = 0$. For $\\frac{dy}{dx} = x - y$, points with $y = x$ give $x - x = 0$. The choice $x + y$ is zero on $y = -x$ instead, and $x^2 + y^2$ is zero only at the origin.",
                "zh": "在 $y = x$ 上需要 $\\frac{dy}{dx} = 0$。对 $\\frac{dy}{dx} = x - y$，$y = x$ 的点给出 $x - x = 0$。$x + y$ 是在 $y = -x$ 上为零，而 $x^2 + y^2$ 只在原点为零。"
              }
            }
          ]
        },
        {
          "id": "exponential-models",
          "title": "Exponential Growth and Decay Models",
          "titleZh": "指数增长与衰减模型",
          "content": [
            {
              "type": "h2",
              "en": "The Growth-Decay Equation",
              "zh": "增长衰减方程"
            },
            {
              "type": "p",
              "en": "Many quantities change at a rate proportional to how much of the quantity is present: the more there is, the faster it changes. In symbols, the rate of change $\\frac{dy}{dt}$ is a constant multiple of $y$ itself:",
              "zh": "许多量的变化速率与其自身的多少成正比：现有的越多，变化越快。用符号表示，变化率 $\\frac{dy}{dt}$ 是 $y$ 本身的常数倍："
            },
            {
              "type": "math",
              "tex": "\\frac{dy}{dt} = ky"
            },
            {
              "type": "p",
              "en": "Here $k$ is the constant of proportionality. If $k > 0$ the quantity grows; if $k < 0$ it decays. This single equation governs population growth, compound interest, radioactive decay, and (qualitatively) the cooling of a hot object.",
              "zh": "这里 $k$ 是比例常数。若 $k > 0$ 则量增长；若 $k < 0$ 则量衰减。这一个方程就支配着人口增长、复利、放射性衰变，以及（定性上）热物体的冷却。"
            },
            {
              "type": "h3",
              "en": "Solving the Equation",
              "zh": "解方程"
            },
            {
              "type": "p",
              "en": "We can solve $\\frac{dy}{dt} = ky$ by separation of variables. Separate to $\\frac{dy}{y} = k\\,dt$, integrate to $\\ln|y| = kt + C$, and exponentiate to get $y = A e^{kt}$. Setting $t = 0$ shows $A = y(0)$, the initial amount, usually written $y_0$.",
              "zh": "可用分离变量法解 $\\frac{dy}{dt} = ky$。分离为 $\\frac{dy}{y} = k\\,dt$，积分得 $\\ln|y| = kt + C$，再取指数得 $y = A e^{kt}$。令 $t = 0$ 得 $A = y(0)$，即初始量，通常记作 $y_0$。"
            },
            {
              "type": "p",
              "en": "This gives the fundamental result you should memorize:",
              "zh": "于是得到应当牢记的基本结论："
            },
            {
              "type": "math",
              "tex": "y = y_0 \\, e^{kt}"
            },
            {
              "type": "note",
              "en": "AP exam tip: whenever a problem says a quantity changes \"at a rate proportional to\" itself, immediately write $\\frac{dy}{dt} = ky$ and jump to $y = y_0 e^{kt}$ — you do not need to re-derive it each time. Then use the given data points to solve for $y_0$ and $k$. Do not confuse this with $\\frac{dy}{dt} = kt$, which is not proportional to $y$.",
              "zh": "AP 考试提示：只要题目说某量\"按与自身成正比的速率\"变化，立刻写下 $\\frac{dy}{dt} = ky$ 并直接得 $y = y_0 e^{kt}$——无需每次重新推导。再用给定的数据点解出 $y_0$ 和 $k$。不要把它与 $\\frac{dy}{dt} = kt$ 混淆，后者并不与 $y$ 成正比。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Population growth",
                "zh": "例题 1：人口增长"
              },
              "problem": {
                "en": "A bacterial colony grows at a rate proportional to its size. It starts at $500$ cells and grows to $1500$ cells in $2$ hours. Write the model and find the population after $6$ hours.",
                "zh": "一个细菌菌落按与其规模成正比的速率增长。起始为 $500$ 个细胞，$2$ 小时后长到 $1500$ 个。写出模型并求 $6$ 小时后的数量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The model is $y = 500 e^{kt}$. Use $y(2) = 1500$: $1500 = 500 e^{2k}$, so $e^{2k} = 3$ and $k = \\frac{\\ln 3}{2}$.",
                  "zh": "模型为 $y = 500 e^{kt}$。代入 $y(2) = 1500$：$1500 = 500 e^{2k}$，故 $e^{2k} = 3$，$k = \\frac{\\ln 3}{2}$。"
                },
                {
                  "type": "p",
                  "en": "A clean way to finish: $y = 500 (e^{2k})^{t/2} = 500 \\cdot 3^{t/2}$. At $t = 6$: $y = 500 \\cdot 3^{3} = 500 \\cdot 27$.",
                  "zh": "一个简洁的收尾：$y = 500 (e^{2k})^{t/2} = 500 \\cdot 3^{t/2}$。在 $t = 6$ 时：$y = 500 \\cdot 3^{3} = 500 \\cdot 27$。"
                },
                {
                  "type": "math",
                  "tex": "y(6) = 13500 \\text{ cells}"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Doubling Time and Half-Life",
              "zh": "倍增时间与半衰期"
            },
            {
              "type": "p",
              "en": "For growth, the doubling time is how long it takes for $y$ to become twice its starting value. Set $2y_0 = y_0 e^{kt}$; the $y_0$ cancels, giving $e^{kt} = 2$, so the doubling time is $t = \\frac{\\ln 2}{k}$.",
              "zh": "对增长，倍增时间是 $y$ 变为初值两倍所需的时间。令 $2y_0 = y_0 e^{kt}$，$y_0$ 约去，得 $e^{kt} = 2$，故倍增时间 $t = \\frac{\\ln 2}{k}$。"
            },
            {
              "type": "p",
              "en": "For decay, the half-life is how long it takes for $y$ to fall to half its value. Set $\\frac{1}{2}y_0 = y_0 e^{kt}$, so $e^{kt} = \\frac{1}{2}$ and the half-life is $t = \\frac{\\ln(1/2)}{k} = \\frac{-\\ln 2}{k}$ (positive because $k < 0$ for decay).",
              "zh": "对衰减，半衰期是 $y$ 降到一半所需的时间。令 $\\frac{1}{2}y_0 = y_0 e^{kt}$，故 $e^{kt} = \\frac{1}{2}$，半衰期 $t = \\frac{\\ln(1/2)}{k} = \\frac{-\\ln 2}{k}$（因衰减时 $k < 0$，故为正）。"
            },
            {
              "type": "note",
              "en": "AP exam tip: doubling time and half-life do not depend on the starting amount $y_0$ — it always cancels. So a substance with a $10$-year half-life halves every $10$ years no matter how much you begin with. Expect answers in exact form like $\\frac{\\ln 2}{k}$ on the no-calculator section.",
              "zh": "AP 考试提示：倍增时间与半衰期都不依赖初始量 $y_0$——它总会被约去。因此半衰期为 $10$ 年的物质，无论起始多少，每 $10$ 年减半。无计算器部分的答案常以 $\\frac{\\ln 2}{k}$ 这样的精确形式出现。"
            },
            {
              "type": "h3",
              "en": "Newton's Law of Cooling (Qualitatively)",
              "zh": "牛顿冷却定律（定性）"
            },
            {
              "type": "p",
              "en": "A hot object placed in cooler surroundings cools at a rate proportional to the temperature difference between the object and its surroundings. As the object approaches room temperature, that difference shrinks, so the cooling slows down — the temperature curve flattens out toward the ambient temperature but never quite reaches it. This \"fast at first, then slower\" behavior is the same qualitative shape as exponential decay of the temperature difference.",
              "zh": "置于较冷环境中的热物体，其冷却速率与物体和环境的温差成正比。当物体接近室温时，这个温差变小，冷却随之减慢——温度曲线趋于环境温度并逐渐变平，但永远不会真正到达。这种\"先快后慢\"的行为，与温差按指数衰减的定性形状完全一致。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Radioactive decay and half-life",
                "zh": "例题 2：放射性衰变与半衰期"
              },
              "problem": {
                "en": "A radioactive sample decays according to $\\frac{dy}{dt} = ky$. Its half-life is $8$ days. What fraction of the original sample remains after $24$ days?",
                "zh": "一个放射性样本按 $\\frac{dy}{dt} = ky$ 衰变，半衰期为 $8$ 天。$24$ 天后原样本剩下多少比例？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The solution is $y = y_0 e^{kt}$. Because the half-life is $8$ days, $y_0 e^{8k} = \\frac{1}{2} y_0$, so $e^{8k} = \\frac{1}{2}$.",
                  "zh": "解为 $y = y_0 e^{kt}$。由半衰期为 $8$ 天，$y_0 e^{8k} = \\frac{1}{2} y_0$，故 $e^{8k} = \\frac{1}{2}$。"
                },
                {
                  "type": "p",
                  "en": "Rewrite the model as $y = y_0 (e^{8k})^{t/8} = y_0 \\left(\\frac{1}{2}\\right)^{t/8}$. After $24$ days, $t/8 = 3$:",
                  "zh": "把模型改写为 $y = y_0 (e^{8k})^{t/8} = y_0 \\left(\\frac{1}{2}\\right)^{t/8}$。$24$ 天后 $t/8 = 3$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{y}{y_0} = \\left(\\tfrac{1}{2}\\right)^{3} = \\frac{1}{8}"
                },
                {
                  "type": "p",
                  "en": "So $\\frac{1}{8}$ of the sample remains — $24$ days is exactly $3$ half-lives.",
                  "zh": "所以剩下 $\\frac{1}{8}$——$24$ 天恰好是 $3$ 个半衰期。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A quantity satisfies $\\frac{dy}{dt} = ky$ with $y(0) = 20$. Which formula gives $y$?",
                "zh": "某量满足 $\\frac{dy}{dt} = ky$，$y(0) = 20$。哪个公式给出 $y$？"
              },
              "choices": [
                "$y = 20 + e^{kt}$",
                "$y = 20 e^{kt}$",
                "$y = 20 kt$",
                "$y = e^{20t}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The solution of $\\frac{dy}{dt} = ky$ is $y = y_0 e^{kt}$ with $y_0$ the initial value $20$. The form $20 + e^{kt}$ wrongly adds the initial value instead of multiplying by it.",
                "zh": "$\\frac{dy}{dt} = ky$ 的解是 $y = y_0 e^{kt}$，其中 $y_0$ 是初值 $20$。$20 + e^{kt}$ 错在把初值相加而非相乘。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population follows $P = 300 e^{0.5t}$ ($t$ in years). What is the population at $t = 0$? Give an integer.",
                "zh": "某人口满足 $P = 300 e^{0.5t}$（$t$ 以年计）。$t = 0$ 时人口是多少？填一个整数。"
              },
              "answer": "300",
              "accept": [
                "300.0"
              ],
              "explanation": {
                "en": "At $t = 0$, $e^{0.5(0)} = e^0 = 1$, so $P = 300 \\cdot 1 = 300$. The coefficient in front of the exponential is always the initial amount.",
                "zh": "$t = 0$ 时 $e^{0.5(0)} = e^0 = 1$，故 $P = 300 \\cdot 1 = 300$。指数前的系数总是初始量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A substance decays with half-life $5$ years. Starting from $80$ grams, how much remains after $15$ years?",
                "zh": "某物质半衰期为 $5$ 年。从 $80$ 克开始，$15$ 年后剩多少？"
              },
              "choices": [
                "$20$ grams",
                "$40$ grams",
                "$5$ grams",
                "$10$ grams"
              ],
              "answer": 3,
              "explanation": {
                "en": "$15$ years is $3$ half-lives, so the amount is halved three times: $80 \\to 40 \\to 20 \\to 10$. Choosing $40$ (one halving) or $20$ (two halvings) means miscounting the number of half-lives.",
                "zh": "$15$ 年是 $3$ 个半衰期，故减半三次：$80 \\to 40 \\to 20 \\to 10$。选 $40$（减半一次）或 $20$（减半两次）是把半衰期个数数错了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A colony doubles in size every $4$ hours. Starting from $200$ cells, how many cells are there after $12$ hours? Give an integer.",
                "zh": "某菌落每 $4$ 小时规模翻倍。从 $200$ 个细胞开始，$12$ 小时后有多少个？填一个整数。"
              },
              "answer": "1600",
              "accept": [
                "1600.0"
              ],
              "explanation": {
                "en": "$12$ hours is $3$ doubling periods, so multiply by $2$ three times: $200 \\cdot 2^3 = 200 \\cdot 8 = 1600$.",
                "zh": "$12$ 小时是 $3$ 个倍增周期，故乘以 $2$ 三次：$200 \\cdot 2^3 = 200 \\cdot 8 = 1600$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a growth model $y = y_0 e^{kt}$ with $k > 0$, the doubling time equals:",
                "zh": "对增长模型 $y = y_0 e^{kt}$（$k > 0$），倍增时间等于："
              },
              "choices": [
                "$\\frac{\\ln 2}{k}$",
                "$\\frac{k}{\\ln 2}$",
                "$2k$",
                "$\\frac{1}{2k}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Set $2y_0 = y_0 e^{kt}$; cancel $y_0$ to get $e^{kt} = 2$, so $kt = \\ln 2$ and $t = \\frac{\\ln 2}{k}$. The reciprocal $\\frac{k}{\\ln 2}$ comes from solving for the wrong variable.",
                "zh": "令 $2y_0 = y_0 e^{kt}$，约去 $y_0$ 得 $e^{kt} = 2$，故 $kt = \\ln 2$，$t = \\frac{\\ln 2}{k}$。倒数 $\\frac{k}{\\ln 2}$ 来自解错了变量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about Newton's law of cooling is qualitatively correct for a hot cup of coffee cooling in a room?",
                "zh": "关于一杯热咖啡在室内冷却，下列关于牛顿冷却定律的说法在定性上哪个正确？"
              },
              "choices": [
                "It cools at a constant rate until it reaches room temperature",
                "It cools slowly at first and faster as time passes",
                "It cools fastest at first and more slowly as it nears room temperature",
                "It cools below room temperature and then warms back up"
              ],
              "answer": 2,
              "explanation": {
                "en": "The cooling rate is proportional to the temperature difference, which is largest at the start and shrinks over time, so cooling is fastest initially and slows as the coffee approaches room temperature. A constant rate would require the difference to stay fixed, which it does not.",
                "zh": "冷却速率与温差成正比，温差起初最大、随时间减小，所以起初冷却最快、接近室温时减慢。恒定速率要求温差不变，而实际并非如此。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A radioactive sample has half-life $10$ years. After how many years will $\\frac{1}{16}$ of the original amount remain? Give an integer.",
                "zh": "某放射性样本半衰期为 $10$ 年。多少年后剩下原来的 $\\frac{1}{16}$？填一个整数。"
              },
              "answer": "40",
              "accept": [
                "40.0"
              ],
              "explanation": {
                "en": "$\\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4$, so it takes $4$ half-lives; $4 \\times 10 = 40$ years. Answering $16$ mistakes the fraction's denominator for the number of years.",
                "zh": "$\\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4$，需 $4$ 个半衰期；$4 \\times 10 = 40$ 年。答 $16$ 是把分母误当成年数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $y = y_0 e^{kt}$, a sample grows from $y_0$ to $4y_0$ in $6$ hours. How many hours is the doubling time? Give an integer.",
                "zh": "对 $y = y_0 e^{kt}$，样本在 $6$ 小时内从 $y_0$ 增长到 $4y_0$。倍增时间是多少小时？填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Growing to $4$ times is two doublings ($4 = 2^2$), and that takes $6$ hours, so one doubling takes $6/2 = 3$ hours. Answering $6$ confuses the quadrupling time with the doubling time.",
                "zh": "增长到 $4$ 倍是两次倍增（$4 = 2^2$），共 $6$ 小时，故一次倍增需 $6/2 = 3$ 小时。答 $6$ 是把翻两番的时间误当成倍增时间。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "applications-of-integration",
      "title": "Unit 8: Applications of Integration",
      "titleZh": "第八单元：积分的应用",
      "lessons": [
        {
          "id": "average-value-and-accumulation",
          "title": "Average Value, Accumulation, and Motion",
          "titleZh": "平均值、累积与运动",
          "content": [
            {
              "type": "h2",
              "en": "The Average Value of a Function",
              "zh": "函数的平均值"
            },
            {
              "type": "p",
              "en": "You already know how to average a finite list of numbers: add them and divide by how many there are. But how do you average a function $f(x)$ over an entire interval $[a, b]$, where there are infinitely many values? The answer is to integrate and divide by the width of the interval. The average (or mean) value of $f$ on $[a, b]$ is defined as",
              "zh": "你已经会求有限个数的平均值：把它们加起来再除以个数。但如何对一个函数 $f(x)$ 在整个区间 $[a, b]$ 上求平均——那里有无穷多个值？答案是：先积分，再除以区间宽度。$f$ 在 $[a, b]$ 上的平均值（均值）定义为"
            },
            {
              "type": "math",
              "tex": "f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx"
            },
            {
              "type": "p",
              "en": "Geometrically, $f_{\\text{avg}}$ is the height of the rectangle on base $[a, b]$ whose area equals the area under $f$. Multiplying both sides by $(b-a)$ gives $\\int_a^b f(x)\\,dx = f_{\\text{avg}} \\cdot (b - a)$: the accumulated area equals average height times width.",
              "zh": "从几何上看，$f_{\\text{avg}}$ 是以 $[a, b]$ 为底、面积等于 $f$ 下方面积的那个矩形的高。两边同乘 $(b-a)$ 得 $\\int_a^b f(x)\\,dx = f_{\\text{avg}} \\cdot (b - a)$：累积的面积等于平均高度乘以宽度。"
            },
            {
              "type": "note",
              "en": "AP exam tip: do not confuse the average value of $f$ (divide the integral by $b-a$) with the average rate of change of $f$ (divide $f(b)-f(a)$ by $b-a$). The first averages the function itself; the second averages its derivative. The Mean Value Theorem for Integrals guarantees some $c$ in $[a,b]$ with $f(c) = f_{\\text{avg}}$ when $f$ is continuous.",
              "zh": "AP 考试提示：不要把 $f$ 的平均值（用积分除以 $b-a$）与 $f$ 的平均变化率（用 $f(b)-f(a)$ 除以 $b-a$）混淆。前者是对函数本身求平均，后者是对它的导数求平均。当 $f$ 连续时，积分中值定理保证存在 $[a,b]$ 中的某个 $c$ 使 $f(c) = f_{\\text{avg}}$。"
            },
            {
              "type": "h2",
              "en": "The Net Change Theorem: Accumulating a Rate",
              "zh": "净变化定理：对变化率累积"
            },
            {
              "type": "p",
              "en": "If $F'(x)$ is the rate at which a quantity $F$ changes, then integrating that rate over $[a, b]$ recovers the net change in $F$. This is just the Fundamental Theorem of Calculus read as a statement about accumulation:",
              "zh": "如果 $F'(x)$ 是某个量 $F$ 的变化率，那么把这个变化率在 $[a, b]$ 上积分，就得到 $F$ 的净变化量。这正是微积分基本定理，只是从\"累积\"的角度来理解："
            },
            {
              "type": "math",
              "tex": "\\int_a^b F'(x)\\,dx = F(b) - F(a)"
            },
            {
              "type": "p",
              "en": "In words: the integral of a rate of change gives the net (total signed) change of the quantity. If you know a starting value $F(a)$ and the rate $F'$, you recover the ending value by adding the accumulated change: $F(b) = F(a) + \\int_a^b F'(x)\\,dx$. This is the engine behind every \"how much water is in the tank\" problem.",
              "zh": "用文字说：变化率的积分给出该量的净（带符号的总）变化。如果你知道初始值 $F(a)$ 和变化率 $F'$，就能通过加上累积变化恢复末值：$F(b) = F(a) + \\int_a^b F'(x)\\,dx$。这是每一道\"水箱里有多少水\"问题背后的引擎。"
            },
            {
              "type": "h3",
              "en": "Rate-In / Rate-Out Accumulation",
              "zh": "流入率与流出率的累积"
            },
            {
              "type": "p",
              "en": "A classic AP free-response setup gives you a rate flowing in, $R(t)$, and a rate flowing out, $W(t)$, both in the same units (say gallons per minute). The amount present at time $t$ is the initial amount plus the accumulated net flow:",
              "zh": "AP 简答题的经典设置会给你一个流入率 $R(t)$ 和一个流出率 $W(t)$，两者单位相同（比如加仑每分钟）。时刻 $t$ 时存在的量等于初始量加上累积的净流量："
            },
            {
              "type": "math",
              "tex": "A(t) = A(0) + \\int_0^t \\big[R(s) - W(s)\\big]\\,ds"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "The amount is increasing when $R(t) > W(t)$ and decreasing when $R(t) < W(t)$.",
                  "zh": "当 $R(t) > W(t)$ 时该量在增加，当 $R(t) < W(t)$ 时在减少。"
                },
                {
                  "en": "A maximum or minimum of $A(t)$ occurs where the net rate $R(t) - W(t)$ changes sign — set $R(t) = W(t)$ and check the sign change.",
                  "zh": "$A(t)$ 的最大值或最小值出现在净变化率 $R(t) - W(t)$ 变号处——令 $R(t) = W(t)$ 并检查符号变化。"
                },
                {
                  "en": "These integrals are almost always evaluated on the calculator-allowed section; store the antiderivative-free integral in your calculator.",
                  "zh": "这些积分几乎总在允许计算器的部分求值；直接把定积分交给计算器计算即可。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Motion Revisited: Displacement vs. Total Distance",
              "zh": "再看运动：位移与总路程"
            },
            {
              "type": "p",
              "en": "For a particle moving along a line with velocity $v(t)$, the net change theorem gives two different but related quantities. Displacement is the net change in position — where the particle ends up relative to where it started:",
              "zh": "对沿直线运动、速度为 $v(t)$ 的质点，净变化定理给出两个不同但相关的量。位移是位置的净变化——质点最终相对起点在哪里："
            },
            {
              "type": "math",
              "tex": "\\text{displacement} = \\int_a^b v(t)\\,dt = s(b) - s(a)"
            },
            {
              "type": "p",
              "en": "Total distance traveled adds up how far the particle moves regardless of direction, so we integrate the speed $|v(t)|$:",
              "zh": "所经过的总路程把质点移动的距离全部加起来，不论方向，因此对速率 $|v(t)|$ 积分："
            },
            {
              "type": "math",
              "tex": "\\text{total distance} = \\int_a^b |v(t)|\\,dt"
            },
            {
              "type": "note",
              "en": "AP exam tip: to compute total distance by hand, find where $v(t) = 0$, split the interval at those times, integrate $v$ on each piece, and add the absolute values. On the calculator section you can just enter $\\int_a^b |v(t)|\\,dt$ directly. A common error is reporting displacement when the question asks for total distance — they differ whenever the particle reverses direction.",
              "zh": "AP 考试提示：要手算总路程，先找出 $v(t) = 0$ 的时刻，在这些时刻把区间分段，在每段上对 $v$ 积分，再把绝对值相加。在计算器部分可以直接输入 $\\int_a^b |v(t)|\\,dt$。常见错误是题目问总路程却报了位移——只要质点掉头，两者就不同。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Average value",
                "zh": "例题 1：平均值"
              },
              "problem": {
                "en": "Find the average value of $f(x) = 3x^2$ on the interval $[1, 3]$.",
                "zh": "求 $f(x) = 3x^2$ 在区间 $[1, 3]$ 上的平均值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the definition with $a = 1$, $b = 3$:",
                  "zh": "用定义，取 $a = 1$，$b = 3$："
                },
                {
                  "type": "math",
                  "tex": "f_{\\text{avg}} = \\frac{1}{3 - 1} \\int_1^3 3x^2\\,dx = \\frac{1}{2}\\Big[x^3\\Big]_1^3"
                },
                {
                  "type": "p",
                  "en": "Evaluate the antiderivative: $\\frac{1}{2}(27 - 1) = \\frac{1}{2}(26) = 13$.",
                  "zh": "计算原函数：$\\frac{1}{2}(27 - 1) = \\frac{1}{2}(26) = 13$。"
                },
                {
                  "type": "p",
                  "en": "So $f_{\\text{avg}} = 13$. As a check, $13$ lies between $f(1) = 3$ and $f(3) = 27$, exactly as an average should.",
                  "zh": "所以 $f_{\\text{avg}} = 13$。检验一下：$13$ 落在 $f(1) = 3$ 与 $f(3) = 27$ 之间，正符合平均值应有的性质。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Displacement and total distance",
                "zh": "例题 2：位移与总路程"
              },
              "problem": {
                "en": "A particle moves along a line with velocity $v(t) = t^2 - 4t$ (meters per second) for $0 \\le t \\le 5$. Find the displacement and the total distance traveled.",
                "zh": "一个质点沿直线运动，速度为 $v(t) = t^2 - 4t$（米每秒），$0 \\le t \\le 5$。求位移和所经过的总路程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Displacement is $\\int_0^5 (t^2 - 4t)\\,dt = \\big[\\tfrac{t^3}{3} - 2t^2\\big]_0^5 = \\tfrac{125}{3} - 50 = -\\tfrac{25}{3}$ meters.",
                  "zh": "位移为 $\\int_0^5 (t^2 - 4t)\\,dt = \\big[\\tfrac{t^3}{3} - 2t^2\\big]_0^5 = \\tfrac{125}{3} - 50 = -\\tfrac{25}{3}$ 米。"
                },
                {
                  "type": "p",
                  "en": "For total distance, factor $v(t) = t(t - 4)$, which is zero at $t = 0$ and $t = 4$. On $[0, 4]$, $v < 0$; on $[4, 5]$, $v > 0$. Split the integral:",
                  "zh": "求总路程时，分解 $v(t) = t(t - 4)$，它在 $t = 0$ 和 $t = 4$ 处为零。在 $[0, 4]$ 上 $v < 0$；在 $[4, 5]$ 上 $v > 0$。把积分分段："
                },
                {
                  "type": "math",
                  "tex": "\\int_0^4 -(t^2 - 4t)\\,dt + \\int_4^5 (t^2 - 4t)\\,dt"
                },
                {
                  "type": "p",
                  "en": "The first piece: $-\\big[\\tfrac{t^3}{3} - 2t^2\\big]_0^4 = -\\big(\\tfrac{64}{3} - 32\\big) = \\tfrac{32}{3}$. The second piece: $\\big[\\tfrac{t^3}{3} - 2t^2\\big]_4^5 = \\big(\\tfrac{125}{3} - 50\\big) - \\big(\\tfrac{64}{3} - 32\\big) = \\tfrac{7}{3}$. Total distance $= \\tfrac{32}{3} + \\tfrac{7}{3} = 13$ meters.",
                  "zh": "第一段：$-\\big[\\tfrac{t^3}{3} - 2t^2\\big]_0^4 = -\\big(\\tfrac{64}{3} - 32\\big) = \\tfrac{32}{3}$。第二段：$\\big[\\tfrac{t^3}{3} - 2t^2\\big]_4^5 = \\big(\\tfrac{125}{3} - 50\\big) - \\big(\\tfrac{64}{3} - 32\\big) = \\tfrac{7}{3}$。总路程 $= \\tfrac{32}{3} + \\tfrac{7}{3} = 13$ 米。"
                },
                {
                  "type": "p",
                  "en": "Note the total distance ($13$) exceeds the magnitude of the displacement ($\\tfrac{25}{3} \\approx 8.33$) because the particle reversed direction at $t = 4$.",
                  "zh": "注意总路程（$13$）大于位移的大小（$\\tfrac{25}{3} \\approx 8.33$），因为质点在 $t = 4$ 处掉头了。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the average value of $f(x) = 4x$ on $[0, 6]$?",
                "zh": "$f(x) = 4x$ 在 $[0, 6]$ 上的平均值是多少？"
              },
              "choices": [
                "$12$",
                "$24$",
                "$6$",
                "$72$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Average value $= \\frac{1}{6}\\int_0^6 4x\\,dx = \\frac{1}{6}[2x^2]_0^6 = \\frac{72}{6} = 12$. The tempting wrong idea is to forget dividing by the interval width $6$ and report the raw integral $72$.",
                "zh": "平均值 $= \\frac{1}{6}\\int_0^6 4x\\,dx = \\frac{1}{6}[2x^2]_0^6 = \\frac{72}{6} = 12$。容易犯的错误是忘记除以区间宽度 $6$，而报出原始积分值 $72$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A tank holds $50$ gallons at $t = 0$. Water flows in at rate $R(t)$ and out at rate $W(t)$ gallons/min. Which expression gives the amount in the tank at $t = 10$?",
                "zh": "水箱在 $t = 0$ 时有 $50$ 加仑。水以速率 $R(t)$ 流入、以速率 $W(t)$ 流出（加仑每分钟）。下列哪个表达式给出 $t = 10$ 时水箱中的水量？"
              },
              "choices": [
                "$\\int_0^{10} [R(t) - W(t)]\\,dt$",
                "$50 + R(10) - W(10)$",
                "$50 + \\int_0^{10} [R(t) - W(t)]\\,dt$",
                "$50 + \\int_0^{10} [W(t) - R(t)]\\,dt$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The amount is the initial $50$ plus the accumulated net flow (in minus out). Forgetting the initial amount, or reversing in and out, are the common mistakes; using the rates at the single instant $t=10$ ignores the accumulation entirely.",
                "zh": "水量等于初始的 $50$ 加上累积的净流量（流入减流出）。忘记初始量、或把流入流出搞反，是常见错误；只用 $t=10$ 这一瞬间的速率则完全忽略了累积。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle has velocity $v(t) = 2t - 6$ m/s for $0 \\le t \\le 5$. Find the displacement over $[0, 5]$ in meters. Give an integer.",
                "zh": "一个质点在 $0 \\le t \\le 5$ 上的速度为 $v(t) = 2t - 6$ 米每秒。求 $[0, 5]$ 上的位移（米）。请填一个整数。"
              },
              "answer": "-5",
              "accept": [
                "-5.0"
              ],
              "explanation": {
                "en": "Displacement $= \\int_0^5 (2t - 6)\\,dt = [t^2 - 6t]_0^5 = 25 - 30 = -5$. Displacement can be negative; do not take absolute values here since the question asks for net change, not total distance.",
                "zh": "位移 $= \\int_0^5 (2t - 6)\\,dt = [t^2 - 6t]_0^5 = 25 - 30 = -5$。位移可以是负的；这里不要取绝对值，因为问的是净变化而不是总路程。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the same particle, $v(t) = 2t - 6$ m/s on $0 \\le t \\le 5$, find the total distance traveled in meters. Give an integer.",
                "zh": "对同一质点，$0 \\le t \\le 5$ 上 $v(t) = 2t - 6$ 米每秒，求所经过的总路程（米）。请填一个整数。"
              },
              "answer": "13",
              "accept": [
                "13.0"
              ],
              "explanation": {
                "en": "Here $v = 0$ at $t = 3$; $v < 0$ on $[0,3]$ and $v > 0$ on $[3,5]$. Distance $= \\int_0^3 -(2t-6)\\,dt + \\int_3^5 (2t-6)\\,dt = 9 + 4 = 13$. Reporting $5$ (the displacement magnitude) ignores the direction reversal at $t = 3$.",
                "zh": "这里 $v = 0$ 在 $t = 3$；在 $[0,3]$ 上 $v < 0$，在 $[3,5]$ 上 $v > 0$。路程 $= \\int_0^3 -(2t-6)\\,dt + \\int_3^5 (2t-6)\\,dt = 9 + 4 = 13$。报出 $5$（位移的大小）忽略了 $t = 3$ 处的掉头。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Water enters a tank at $R(t) = 3 + \\sin t$ and leaves at $W(t) = 2$ gallons/min. At which times is the amount of water in the tank increasing?",
                "zh": "水以 $R(t) = 3 + \\sin t$ 流入、以 $W(t) = 2$ 流出（加仑每分钟）。水箱中的水量在什么时候增加？"
              },
              "choices": [
                "Only when $\\sin t > 0$",
                "At all times, since $3 + \\sin t > 2$ always",
                "Never, since water is leaving",
                "Only when $\\sin t = 0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The amount increases exactly when $R(t) > W(t)$, i.e. $3 + \\sin t > 2$, i.e. $\\sin t > -1$, which holds for all $t$ (except isolated points). The tempting error is to require $\\sin t > 0$, but the constant $3$ already keeps inflow above outflow.",
                "zh": "水量增加的充要条件是 $R(t) > W(t)$，即 $3 + \\sin t > 2$，即 $\\sin t > -1$，这对所有 $t$（除个别点外）都成立。容易犯的错误是要求 $\\sin t > 0$，但常数 $3$ 已经使流入始终超过流出。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $F'(t)$ is the rate (liters/hour) at which oil is pumped and $F(0) = 20$ liters, which quantity does $\\int_0^8 F'(t)\\,dt$ represent?",
                "zh": "若 $F'(t)$ 是抽油的速率（升每小时），$F(0) = 20$ 升，则 $\\int_0^8 F'(t)\\,dt$ 表示什么量？"
              },
              "choices": [
                "The total oil present at $t = 8$",
                "The average rate of pumping",
                "The oil present at $t = 0$",
                "The net change in oil amount from $t = 0$ to $t = 8$"
              ],
              "answer": 3,
              "explanation": {
                "en": "By the net change theorem, $\\int_0^8 F'(t)\\,dt = F(8) - F(0)$, the net change. To get the total amount present at $t=8$ you would add $F(0)=20$; confusing the net change with the total is the classic trap.",
                "zh": "由净变化定理，$\\int_0^8 F'(t)\\,dt = F(8) - F(0)$，即净变化。要得到 $t=8$ 时存在的总量还需加上 $F(0)=20$；把净变化误当成总量是经典陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the average value of $f(x) = \\cos x$ on $\\left[0, \\frac{\\pi}{2}\\right]$. Give your answer as a fraction of the form $a/\\pi$ by entering just the numerator coefficient (an integer) for $\\frac{?}{\\pi}$.",
                "zh": "求 $f(x) = \\cos x$ 在 $\\left[0, \\frac{\\pi}{2}\\right]$ 上的平均值。答案形如 $\\frac{?}{\\pi}$，请填分子系数（一个整数）。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Average $= \\frac{1}{\\pi/2}\\int_0^{\\pi/2}\\cos x\\,dx = \\frac{2}{\\pi}[\\sin x]_0^{\\pi/2} = \\frac{2}{\\pi}(1 - 0) = \\frac{2}{\\pi}$, so the numerator is $2$. Forgetting that $\\frac{1}{\\pi/2} = \\frac{2}{\\pi}$ (dividing by a half doubles) is the usual slip.",
                "zh": "平均值 $= \\frac{1}{\\pi/2}\\int_0^{\\pi/2}\\cos x\\,dx = \\frac{2}{\\pi}[\\sin x]_0^{\\pi/2} = \\frac{2}{\\pi}(1 - 0) = \\frac{2}{\\pi}$，故分子为 $2$。忘记 $\\frac{1}{\\pi/2} = \\frac{2}{\\pi}$（除以二分之一相当于乘二）是常见的疏漏。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle's velocity $v(t)$ (m/s) satisfies $v(t) > 0$ on $[0, 3]$ and $v(t) < 0$ on $[3, 7]$. Which statement is always true?",
                "zh": "一个质点的速度 $v(t)$（米每秒）在 $[0, 3]$ 上满足 $v(t) > 0$，在 $[3, 7]$ 上满足 $v(t) < 0$。下列哪项总是成立？"
              },
              "choices": [
                "The total distance equals the displacement on $[0,7]$",
                "The displacement equals $\\int_0^3 v\\,dt - \\int_3^7 v\\,dt$",
                "The total distance on $[0,7]$ is $\\int_0^3 v\\,dt - \\int_3^7 v\\,dt$",
                "The particle never changes direction"
              ],
              "answer": 2,
              "explanation": {
                "en": "Total distance is $\\int_0^7 |v|\\,dt$; since $v>0$ then $v<0$, this is $\\int_0^3 v\\,dt + \\int_3^7 (-v)\\,dt = \\int_0^3 v\\,dt - \\int_3^7 v\\,dt$. Equating total distance with displacement is the trap: they coincide only when the particle never reverses, but here it turns around at $t=3$.",
                "zh": "总路程为 $\\int_0^7 |v|\\,dt$；由于先 $v>0$ 后 $v<0$，它等于 $\\int_0^3 v\\,dt + \\int_3^7 (-v)\\,dt = \\int_0^3 v\\,dt - \\int_3^7 v\\,dt$。把总路程等同于位移是陷阱：只有质点从不掉头时二者才相等，而这里它在 $t=3$ 处掉头。"
              }
            }
          ]
        },
        {
          "id": "area-between-curves",
          "title": "Area Between Curves",
          "titleZh": "曲线间的面积",
          "content": [
            {
              "type": "h2",
              "en": "Area Between Two Curves",
              "zh": "两条曲线之间的面积"
            },
            {
              "type": "p",
              "en": "A single definite integral $\\int_a^b f(x)\\,dx$ gives the signed area between a curve and the $x$-axis. To find the area of the region trapped between two curves, we generalize: integrate the vertical distance between them. If $f(x) \\ge g(x)$ on $[a, b]$, the area of the region bounded above by $y = f(x)$ and below by $y = g(x)$ is",
              "zh": "一个定积分 $\\int_a^b f(x)\\,dx$ 给出曲线与 $x$ 轴之间的带符号面积。要求两条曲线所夹区域的面积，我们把它推广：对它们之间的竖直距离积分。如果在 $[a, b]$ 上 $f(x) \\ge g(x)$，则由上方 $y = f(x)$ 和下方 $y = g(x)$ 围成的区域面积为"
            },
            {
              "type": "math",
              "tex": "A = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx = \\int_a^b (\\text{top} - \\text{bottom})\\,dx"
            },
            {
              "type": "p",
              "en": "Each thin vertical slice has height (top $-$ bottom) and width $dx$; summing these rectangles as $dx \\to 0$ gives the integral. Because we always subtract bottom from top, the integrand is nonnegative and the area comes out positive — even when part or all of the region lies below the $x$-axis.",
              "zh": "每一条竖直的薄片高度为（上 $-$ 下）、宽度为 $dx$；当 $dx \\to 0$ 时把这些矩形相加就得到积分。因为我们总是用上方减下方，被积函数非负，面积算出来是正的——即使区域的一部分或全部位于 $x$ 轴下方也是如此。"
            },
            {
              "type": "note",
              "en": "AP exam tip: \"top minus bottom\" refers to which curve has the larger $y$-value on the interval, not which one is written first. Always test a point — for example, plug $x = 0$ into both functions — to decide which is on top before you integrate. Getting the order backwards flips the sign and gives a negative \"area\".",
              "zh": "AP 考试提示：\"上减下\"指的是在该区间上哪条曲线的 $y$ 值更大，而不是哪条先写出来。积分前一定要代一个点检验——例如把 $x = 0$ 代入两个函数——来判断谁在上方。顺序搞反会使符号颠倒，得到负的\"面积\"。"
            },
            {
              "type": "h3",
              "en": "Finding the Bounds: Intersection Points",
              "zh": "确定积分限：交点"
            },
            {
              "type": "p",
              "en": "When the region is enclosed by two curves that cross, the limits of integration $a$ and $b$ are the $x$-coordinates where the curves meet. Find them by setting $f(x) = g(x)$ and solving. These intersection points are where the vertical gap between the curves shrinks to zero — the natural left and right edges of the enclosed region.",
              "zh": "当区域由两条相交的曲线围成时，积分限 $a$ 和 $b$ 就是曲线相遇处的 $x$ 坐标。令 $f(x) = g(x)$ 并求解即可得到它们。这些交点正是曲线间竖直间隙缩为零之处——也就是所围区域天然的左右边界。"
            },
            {
              "type": "h3",
              "en": "When the Curves Cross: Splitting the Integral",
              "zh": "当曲线相交时：分段积分"
            },
            {
              "type": "p",
              "en": "If the two curves swap which one is on top somewhere inside $[a, b]$, a single integral of $f - g$ would let positive and negative pieces cancel, undercounting the area. Instead, find every crossing point, split the interval there, and on each subinterval put whichever function is larger first. Then add the (positive) pieces:",
              "zh": "如果两条曲线在 $[a, b]$ 内部某处互换了上下位置，单个 $f - g$ 的积分会让正负部分相互抵消，从而少算面积。正确做法是找出每一个交点，在那里把区间分段，在每一段上把较大的函数放前面。然后把（正的）各段相加："
            },
            {
              "type": "math",
              "tex": "A = \\int_a^c \\big[f - g\\big]\\,dx + \\int_c^b \\big[g - f\\big]\\,dx \\quad (\\text{if } f \\ge g \\text{ on } [a,c],\\ g \\ge f \\text{ on } [c,b])"
            },
            {
              "type": "p",
              "en": "A reliable shortcut is $A = \\int_a^b |f(x) - g(x)|\\,dx$, but to evaluate it by hand you still must locate the crossings and split, since you cannot antidifferentiate an absolute value directly.",
              "zh": "一个可靠的简写是 $A = \\int_a^b |f(x) - g(x)|\\,dx$，但要手算它，仍然必须找出交点并分段，因为绝对值不能直接求原函数。"
            },
            {
              "type": "h2",
              "en": "Integrating With Respect to $y$",
              "zh": "对 $y$ 积分"
            },
            {
              "type": "p",
              "en": "Sometimes a region is far easier to describe with horizontal slices. If the region is bounded on the right by $x = f(y)$ and on the left by $x = g(y)$ for $c \\le y \\le d$, use horizontal rectangles of width (right $-$ left) and height $dy$:",
              "zh": "有时用水平薄片来描述一个区域要容易得多。如果区域在 $c \\le y \\le d$ 上右边界为 $x = f(y)$、左边界为 $x = g(y)$，就用宽度为（右 $-$ 左）、高度为 $dy$ 的水平矩形："
            },
            {
              "type": "math",
              "tex": "A = \\int_c^d \\big[f(y) - g(y)\\big]\\,dy = \\int_c^d (\\text{right} - \\text{left})\\,dy"
            },
            {
              "type": "note",
              "en": "AP exam tip: integrating in $y$ is the smart move when a curve like $x = y^2$ is not a function of $x$ (it fails the vertical line test), or when integrating in $x$ would force you to split into many pieces. The trade-off: you must rewrite each boundary curve as $x$ in terms of $y$, and your limits become $y$-values.",
              "zh": "AP 考试提示：当像 $x = y^2$ 这样的曲线不是 $x$ 的函数（它通不过竖直线检验），或者对 $x$ 积分会迫使你分成很多段时，对 $y$ 积分是明智之举。代价是：你必须把每条边界曲线改写成 $x$ 关于 $y$ 的表达式，积分限也变成 $y$ 值。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A region enclosed by a parabola and a line",
                "zh": "例题 1：抛物线与直线围成的区域"
              },
              "problem": {
                "en": "Find the area of the region enclosed by $y = x^2$ and $y = x + 2$.",
                "zh": "求由 $y = x^2$ 和 $y = x + 2$ 围成的区域面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Find intersections: $x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$, so $x = -1$ and $x = 2$.",
                  "zh": "求交点：$x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$，故 $x = -1$，$x = 2$。"
                },
                {
                  "type": "p",
                  "en": "Test $x = 0$: the line gives $y = 2$, the parabola gives $y = 0$, so the line $y = x + 2$ is on top throughout $[-1, 2]$.",
                  "zh": "代入 $x = 0$：直线给出 $y = 2$，抛物线给出 $y = 0$，所以在整个 $[-1, 2]$ 上直线 $y = x + 2$ 在上方。"
                },
                {
                  "type": "math",
                  "tex": "A = \\int_{-1}^{2} \\big[(x + 2) - x^2\\big]\\,dx = \\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2}"
                },
                {
                  "type": "p",
                  "en": "At $x = 2$: $2 + 4 - \\frac{8}{3} = \\frac{10}{3}$. At $x = -1$: $\\frac{1}{2} - 2 + \\frac{1}{3} = -\\frac{7}{6}$. Subtract: $\\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2}$.",
                  "zh": "在 $x = 2$：$2 + 4 - \\frac{8}{3} = \\frac{10}{3}$。在 $x = -1$：$\\frac{1}{2} - 2 + \\frac{1}{3} = -\\frac{7}{6}$。相减：$\\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2}$。"
                },
                {
                  "type": "p",
                  "en": "The area is $\\frac{9}{2}$ square units.",
                  "zh": "面积为 $\\frac{9}{2}$ 平方单位。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Integrating with respect to $y$",
                "zh": "例题 2：对 $y$ 积分"
              },
              "problem": {
                "en": "Find the area of the region bounded by the curve $x = y^2$ and the line $x = y + 2$.",
                "zh": "求由曲线 $x = y^2$ 和直线 $x = y + 2$ 围成的区域面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "These are naturally functions of $y$, so slice horizontally. Find intersections in $y$: $y^2 = y + 2 \\Rightarrow y^2 - y - 2 = 0 \\Rightarrow (y-2)(y+1) = 0$, so $y = -1$ and $y = 2$.",
                  "zh": "这些天然是 $y$ 的函数，所以水平切片。在 $y$ 中求交点：$y^2 = y + 2 \\Rightarrow y^2 - y - 2 = 0 \\Rightarrow (y-2)(y+1) = 0$，故 $y = -1$，$y = 2$。"
                },
                {
                  "type": "p",
                  "en": "Test $y = 0$: the line gives $x = 2$, the parabola gives $x = 0$, so $x = y + 2$ is on the right and $x = y^2$ is on the left throughout $[-1, 2]$.",
                  "zh": "代入 $y = 0$：直线给出 $x = 2$，抛物线给出 $x = 0$，所以在整个 $[-1, 2]$ 上 $x = y + 2$ 在右、$x = y^2$ 在左。"
                },
                {
                  "type": "math",
                  "tex": "A = \\int_{-1}^{2} \\big[(y + 2) - y^2\\big]\\,dy = \\left[\\frac{y^2}{2} + 2y - \\frac{y^3}{3}\\right]_{-1}^{2} = \\frac{9}{2}"
                },
                {
                  "type": "p",
                  "en": "The computation mirrors Example 1 exactly (same integrand, in $y$), giving area $\\frac{9}{2}$. Trying to do this one in $x$ would require splitting into two pieces because the left boundary changes — integrating in $y$ avoids that.",
                  "zh": "计算与例题 1 完全一致（同样的被积函数，只是用 $y$），面积为 $\\frac{9}{2}$。若用 $x$ 来做这题就得分成两段，因为左边界会变化——对 $y$ 积分避免了这一点。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The region is bounded above by $y = 4 - x^2$ and below by $y = 0$ (the $x$-axis). What are the correct limits of integration?",
                "zh": "区域上方由 $y = 4 - x^2$、下方由 $y = 0$（$x$ 轴）围成。正确的积分限是什么？"
              },
              "choices": [
                "from $0$ to $4$",
                "from $-4$ to $4$",
                "from $-2$ to $2$",
                "from $0$ to $2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Set $4 - x^2 = 0$ to get $x = \\pm 2$, the points where the parabola meets the $x$-axis. Using $0$ to $4$ confuses the $y$-value of the vertex with an $x$-limit; the bounds are $x$-coordinates.",
                "zh": "令 $4 - x^2 = 0$ 得 $x = \\pm 2$，即抛物线与 $x$ 轴的交点。用 $0$ 到 $4$ 是把顶点的 $y$ 值误当成 $x$ 限；积分限应是 $x$ 坐标。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the area between $y = x^2$ and $y = 2x$ from their left intersection to their right intersection. Give the area as an exact fraction $a/b$.",
                "zh": "求 $y = x^2$ 与 $y = 2x$ 从左交点到右交点之间的面积。以精确分数 $a/b$ 作答。"
              },
              "answer": "4/3",
              "accept": [
                "4/3"
              ],
              "explanation": {
                "en": "Intersections: $x^2 = 2x \\Rightarrow x = 0, 2$. On $[0,2]$, $2x \\ge x^2$, so $A = \\int_0^2 (2x - x^2)\\,dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$. Putting $x^2$ on top would give a negative answer.",
                "zh": "交点：$x^2 = 2x \\Rightarrow x = 0, 2$。在 $[0,2]$ 上 $2x \\ge x^2$，故 $A = \\int_0^2 (2x - x^2)\\,dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$。把 $x^2$ 放上方会得到负数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which integral gives the area of the region bounded on the right by $x = 6 - y^2$ and on the left by $x = y^2 - 2$?",
                "zh": "哪个积分给出由右边 $x = 6 - y^2$、左边 $x = y^2 - 2$ 围成的区域面积？"
              },
              "choices": [
                "$\\int_{-2}^{2} \\big[(6 - y^2) - (y^2 - 2)\\big]\\,dy$",
                "$\\int_{-2}^{2} \\big[(y^2 - 2) - (6 - y^2)\\big]\\,dy$",
                "$\\int_{-2}^{2} \\big[(6 - y^2) - (y^2 - 2)\\big]\\,dx$",
                "$\\int_{0}^{6} \\big[(6 - y^2) - (y^2 - 2)\\big]\\,dy$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Intersect: $6 - y^2 = y^2 - 2 \\Rightarrow 2y^2 = 8 \\Rightarrow y = \\pm 2$. Slice horizontally: (right $-$ left)$\\,dy$. Writing $dx$ with $y$-limits, or reversing right and left, are the common errors.",
                "zh": "求交点：$6 - y^2 = y^2 - 2 \\Rightarrow 2y^2 = 8 \\Rightarrow y = \\pm 2$。水平切片：（右 $-$ 左）$\\,dy$。写成 $dx$ 却配 $y$ 限、或把左右搞反，都是常见错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the area between $y = x^3$ and $y = x$ on $[0, 1]$. Give the area as an exact fraction $a/b$.",
                "zh": "求 $[0, 1]$ 上 $y = x^3$ 与 $y = x$ 之间的面积。以精确分数 $a/b$ 作答。"
              },
              "answer": "1/4",
              "accept": [
                "1/4",
                "0.25"
              ],
              "explanation": {
                "en": "On $(0,1)$, $x \\ge x^3$, so $A = \\int_0^1 (x - x^3)\\,dx = [\\frac{x^2}{2} - \\frac{x^4}{4}]_0^1 = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$. The trap is assuming $x^3 \\ge x$; that is only true for $x > 1$, not on $[0,1]$.",
                "zh": "在 $(0,1)$ 上 $x \\ge x^3$，故 $A = \\int_0^1 (x - x^3)\\,dx = [\\frac{x^2}{2} - \\frac{x^4}{4}]_0^1 = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$。陷阱是误以为 $x^3 \\ge x$；这只在 $x > 1$ 时成立，$[0,1]$ 上不成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On $[0, \\pi]$ the curves $y = \\sin x$ and $y = \\cos x$ cross at $x = \\frac{\\pi}{4}$. Why must the area between them be found with two integrals (or an absolute value)?",
                "zh": "在 $[0, \\pi]$ 上曲线 $y = \\sin x$ 与 $y = \\cos x$ 相交于 $x = \\frac{\\pi}{4}$。为什么它们之间的面积必须用两个积分（或绝对值）来求？"
              },
              "choices": [
                "Because $\\sin x$ is always negative on $[0,\\pi]$",
                "Because which curve is on top switches at $x = \\frac{\\pi}{4}$",
                "Because the curves never actually meet",
                "Because area cannot be found by integration here"
              ],
              "answer": 1,
              "explanation": {
                "en": "To the left of $\\frac{\\pi}{4}$, $\\cos x > \\sin x$; to the right, $\\sin x > \\cos x$. A single $\\int (\\sin x - \\cos x)$ would let the two parts cancel, so you split at the crossing and add absolute contributions.",
                "zh": "在 $\\frac{\\pi}{4}$ 左侧 $\\cos x > \\sin x$；右侧 $\\sin x > \\cos x$。单个 $\\int (\\sin x - \\cos x)$ 会让两部分抵消，所以要在交点处分段并把各部分取正相加。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The region bounded by $y = x^2$ and $y = 4$ is revolved... no — simply find its area. Region: $y = x^2$ below and $y = 4$ above. Give the area as an exact fraction $a/b$.",
                "zh": "求由下方 $y = x^2$ 和上方 $y = 4$ 围成的区域面积。以精确分数 $a/b$ 作答。"
              },
              "answer": "32/3",
              "accept": [
                "32/3"
              ],
              "explanation": {
                "en": "Intersect: $x^2 = 4 \\Rightarrow x = \\pm 2$; on $[-2,2]$, $4 \\ge x^2$. $A = \\int_{-2}^{2}(4 - x^2)\\,dx = [4x - \\frac{x^3}{3}]_{-2}^{2} = (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{32}{3}$. Integrating only from $0$ to $2$ (forgetting symmetry) halves the answer.",
                "zh": "求交点：$x^2 = 4 \\Rightarrow x = \\pm 2$；在 $[-2,2]$ 上 $4 \\ge x^2$。$A = \\int_{-2}^{2}(4 - x^2)\\,dx = [4x - \\frac{x^3}{3}]_{-2}^{2} = (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{32}{3}$。只从 $0$ 到 $2$ 积分（忘了对称性）会把答案减半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the region enclosed by $x = y^2$ and $x = 4$, why is integrating with respect to $y$ preferable to integrating with respect to $x$?",
                "zh": "对由 $x = y^2$ 和 $x = 4$ 围成的区域，为什么对 $y$ 积分比对 $x$ 积分更好？"
              },
              "choices": [
                "Because area in $x$ is always wrong",
                "Because $x = 4$ is a curve, not a line",
                "Because the region has no intersection points",
                "Because $x = y^2$ is not a single function of $x$; in $x$ you would split the region into two pieces"
              ],
              "answer": 3,
              "explanation": {
                "en": "Solving $x = y^2$ for $y$ gives $y = \\pm\\sqrt{x}$ — two branches — so an $x$-integral needs the region split into upper and lower halves. In $y$, the right boundary is $x=4$ and the left is $x=y^2$, one clean integral from $y=-2$ to $y=2$.",
                "zh": "把 $x = y^2$ 解出 $y$ 得 $y = \\pm\\sqrt{x}$——两个分支——所以 $x$ 积分需把区域分成上下两半。用 $y$ 时，右边界为 $x=4$、左边界为 $x=y^2$，从 $y=-2$ 到 $y=2$ 是一个干净的积分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the area enclosed by $y = 6 - x^2$ and $y = x$. Give the area as an exact fraction $a/b$.",
                "zh": "求由 $y = 6 - x^2$ 和 $y = x$ 围成的面积。以精确分数 $a/b$ 作答。"
              },
              "answer": "125/6",
              "accept": [
                "125/6"
              ],
              "explanation": {
                "en": "Intersect: $6 - x^2 = x \\Rightarrow x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2)=0$, so $x=-3,2$. On this interval $6-x^2 \\ge x$, so $A = \\int_{-3}^{2}(6 - x^2 - x)\\,dx = [6x - \\frac{x^3}{3} - \\frac{x^2}{2}]_{-3}^{2} = \\frac{22}{3} - (-\\frac{27}{2}) = \\frac{125}{6}$. Reversing top and bottom gives the negative of this.",
                "zh": "求交点：$6 - x^2 = x \\Rightarrow x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2)=0$，故 $x=-3,2$。此区间上 $6-x^2 \\ge x$，故 $A = \\int_{-3}^{2}(6 - x^2 - x)\\,dx = [6x - \\frac{x^3}{3} - \\frac{x^2}{2}]_{-3}^{2} = \\frac{22}{3} - (-\\frac{27}{2}) = \\frac{125}{6}$。把上下搞反会得到它的相反数。"
              }
            }
          ]
        },
        {
          "id": "volumes-of-solids",
          "title": "Volumes: Cross-Sections and Discs/Washers",
          "titleZh": "立体体积：截面法与圆盘/垫圈法",
          "content": [
            {
              "type": "h2",
              "en": "Volume by Slicing",
              "zh": "切片法求体积"
            },
            {
              "type": "p",
              "en": "Every volume formula in this unit comes from one idea: slice the solid into thin slabs, approximate each slab as a prism of cross-sectional area $A$ and thickness $dx$ (or $dy$), and add up the slabs with an integral. If the slices are perpendicular to the $x$-axis and $A(x)$ is the area of the slice at position $x$, then",
              "zh": "本单元的每一个体积公式都源自同一个想法：把立体切成薄片，把每一片近似为横截面积为 $A$、厚度为 $dx$（或 $dy$）的棱柱，再用积分把这些薄片加起来。如果切片垂直于 $x$ 轴、$A(x)$ 是位置 $x$ 处切片的面积，则"
            },
            {
              "type": "math",
              "tex": "V = \\int_a^b A(x)\\,dx"
            },
            {
              "type": "p",
              "en": "The whole game is finding the cross-sectional area $A$ as a function of position. Everything below is a special case of this master formula.",
              "zh": "全部关键在于把横截面积 $A$ 表示成位置的函数。下面的一切都是这个总公式的特例。"
            },
            {
              "type": "h3",
              "en": "Solids With Known Cross-Sections",
              "zh": "已知横截面的立体"
            },
            {
              "type": "p",
              "en": "Here the solid sits on a flat base region in the $xy$-plane, and every slice perpendicular to an axis is a known shape whose size is set by the base. Suppose the base lies between $y = f(x)$ (top) and $y = g(x)$ (bottom), so the slice at $x$ spans a length $s = f(x) - g(x)$. Common cross-sections stacked on that length:",
              "zh": "此时立体立在 $xy$ 平面内一块平的底面区域上，每一个垂直于某坐标轴的切片都是一个已知形状，其尺寸由底面决定。设底面位于 $y = f(x)$（上）与 $y = g(x)$（下）之间，则 $x$ 处切片跨越的长度为 $s = f(x) - g(x)$。以这段长度为基础常见的横截面有："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Square with side $s$: area $A = s^2$.",
                  "zh": "边长为 $s$ 的正方形：面积 $A = s^2$。"
                },
                {
                  "en": "Semicircle with diameter $s$ (radius $\\frac{s}{2}$): area $A = \\frac{1}{2}\\pi\\left(\\frac{s}{2}\\right)^2 = \\frac{\\pi s^2}{8}$.",
                  "zh": "以 $s$ 为直径（半径 $\\frac{s}{2}$）的半圆：面积 $A = \\frac{1}{2}\\pi\\left(\\frac{s}{2}\\right)^2 = \\frac{\\pi s^2}{8}$。"
                },
                {
                  "en": "Equilateral triangle with side $s$: area $A = \\frac{\\sqrt{3}}{4}s^2$.",
                  "zh": "边长为 $s$ 的等边三角形：面积 $A = \\frac{\\sqrt{3}}{4}s^2$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: for a semicircular cross-section the given length $s$ is the diameter, so the radius is $\\frac{s}{2}$ — a hugely common place to lose points by using $s$ as the radius. Also watch whether the slices are perpendicular to the $x$-axis (integrate $dx$, express $s$ in terms of $x$) or the $y$-axis (integrate $dy$, express $s$ in terms of $y$).",
              "zh": "AP 考试提示：半圆横截面中给定的长度 $s$ 是直径，所以半径是 $\\frac{s}{2}$——这是极常见的失分点，很多人把 $s$ 当成半径。还要注意切片是垂直于 $x$ 轴（对 $dx$ 积分，把 $s$ 用 $x$ 表示）还是垂直于 $y$ 轴（对 $dy$ 积分，把 $s$ 用 $y$ 表示）。"
            },
            {
              "type": "h2",
              "en": "Solids of Revolution: The Disc Method",
              "zh": "旋转体：圆盘法"
            },
            {
              "type": "p",
              "en": "When a region is revolved around an axis, each slice sweeps out a disc (a thin cylinder). If the region between $y = f(x)$ and the axis is revolved about a horizontal line, the slice at $x$ is a disc of radius $R(x)$ = the distance from the curve to the axis, and area $\\pi R^2$. So",
              "zh": "当一个区域绕某轴旋转时，每一片扫出一个圆盘（一个薄圆柱）。如果把 $y = f(x)$ 与轴之间的区域绕一条水平线旋转，则 $x$ 处的切片是半径为 $R(x)$（曲线到轴的距离）、面积为 $\\pi R^2$ 的圆盘。于是"
            },
            {
              "type": "math",
              "tex": "V = \\int_a^b \\pi\\,[R(x)]^2\\,dx"
            },
            {
              "type": "p",
              "en": "For revolution about the $x$-axis, $R(x) = f(x)$. For revolution about a vertical line, slice with $dy$ instead and write the radius in terms of $y$.",
              "zh": "绕 $x$ 轴旋转时，$R(x) = f(x)$。绕竖直线旋转时，改用 $dy$ 切片，并把半径用 $y$ 表示。"
            },
            {
              "type": "h2",
              "en": "The Washer Method",
              "zh": "垫圈法"
            },
            {
              "type": "p",
              "en": "If the region being revolved does not touch the axis, each slice is a washer — a disc with a hole. Its area is the big disc minus the hole: $\\pi R_{\\text{out}}^2 - \\pi R_{\\text{in}}^2$, where $R_{\\text{out}}$ is the distance from the axis to the far edge of the region and $R_{\\text{in}}$ is the distance to the near edge. Then",
              "zh": "如果被旋转的区域不接触轴，则每一片是一个垫圈——带孔的圆盘。它的面积是大圆盘减去孔：$\\pi R_{\\text{out}}^2 - \\pi R_{\\text{in}}^2$，其中 $R_{\\text{out}}$ 是轴到区域远边的距离，$R_{\\text{in}}$ 是到近边的距离。于是"
            },
            {
              "type": "math",
              "tex": "V = \\int_a^b \\pi\\Big[\\,R_{\\text{out}}^2 - R_{\\text{in}}^2\\,\\Big]\\,dx"
            },
            {
              "type": "note",
              "en": "AP exam tip: you must square the radii separately — $R_{\\text{out}}^2 - R_{\\text{in}}^2$ is NOT $(R_{\\text{out}} - R_{\\text{in}})^2$. When revolving about a line $y = k$ other than an axis, each radius is a distance, e.g. $R = |k - f(x)|$; for $y = k$ below the region a top curve $f(x)$ gives outer radius $f(x) - k$. Always draw the radius as a segment from the axis to the curve.",
              "zh": "AP 考试提示：两个半径必须分别平方——$R_{\\text{out}}^2 - R_{\\text{in}}^2$ 不等于 $(R_{\\text{out}} - R_{\\text{in}})^2$。绕非坐标轴的直线 $y = k$ 旋转时，每个半径都是一段距离，例如 $R = |k - f(x)|$；当 $y = k$ 在区域下方时，上方曲线 $f(x)$ 给出外半径 $f(x) - k$。务必把半径画成从轴到曲线的线段。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Square cross-sections",
                "zh": "例题 1：正方形横截面"
              },
              "problem": {
                "en": "A solid has as its base the region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 4$. Cross-sections perpendicular to the $x$-axis are squares. Find the volume.",
                "zh": "一个立体的底面是由 $y = \\sqrt{x}$、$y = 0$ 和 $x = 4$ 围成的区域。垂直于 $x$ 轴的横截面是正方形。求体积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "At position $x$, the base runs from $y = 0$ up to $y = \\sqrt{x}$, so the side length is $s = \\sqrt{x} - 0 = \\sqrt{x}$.",
                  "zh": "在位置 $x$ 处，底面从 $y = 0$ 到 $y = \\sqrt{x}$，故边长为 $s = \\sqrt{x} - 0 = \\sqrt{x}$。"
                },
                {
                  "type": "p",
                  "en": "A square slice has area $A(x) = s^2 = (\\sqrt{x})^2 = x$. Integrate from $x = 0$ to $x = 4$:",
                  "zh": "正方形切片的面积为 $A(x) = s^2 = (\\sqrt{x})^2 = x$。从 $x = 0$ 到 $x = 4$ 积分："
                },
                {
                  "type": "math",
                  "tex": "V = \\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = \\frac{16}{2} = 8"
                },
                {
                  "type": "p",
                  "en": "The volume is $8$ cubic units. Notice there is no $\\pi$ — these are square, not circular, slices.",
                  "zh": "体积为 $8$ 立方单位。注意没有 $\\pi$——这些是正方形而不是圆形切片。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Washer method about a horizontal line",
                "zh": "例题 2：绕水平线的垫圈法"
              },
              "problem": {
                "en": "The region bounded by $y = x^2$ and $y = 2x$ is revolved about the $x$-axis. Find the volume.",
                "zh": "把由 $y = x^2$ 和 $y = 2x$ 围成的区域绕 $x$ 轴旋转。求体积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Intersections: $x^2 = 2x \\Rightarrow x = 0, 2$. On $[0,2]$, $2x \\ge x^2 \\ge 0$, so the line is farther from the $x$-axis. Revolving gives washers with outer radius $R_{\\text{out}} = 2x$ and inner radius $R_{\\text{in}} = x^2$.",
                  "zh": "交点：$x^2 = 2x \\Rightarrow x = 0, 2$。在 $[0,2]$ 上 $2x \\ge x^2 \\ge 0$，故直线离 $x$ 轴更远。旋转得到外半径 $R_{\\text{out}} = 2x$、内半径 $R_{\\text{in}} = x^2$ 的垫圈。"
                },
                {
                  "type": "math",
                  "tex": "V = \\int_0^2 \\pi\\Big[(2x)^2 - (x^2)^2\\Big]\\,dx = \\pi\\int_0^2 (4x^2 - x^4)\\,dx"
                },
                {
                  "type": "p",
                  "en": "Antidifferentiate: $\\pi\\left[\\frac{4x^3}{3} - \\frac{x^5}{5}\\right]_0^2 = \\pi\\left(\\frac{32}{3} - \\frac{32}{5}\\right)$.",
                  "zh": "求原函数：$\\pi\\left[\\frac{4x^3}{3} - \\frac{x^5}{5}\\right]_0^2 = \\pi\\left(\\frac{32}{3} - \\frac{32}{5}\\right)$。"
                },
                {
                  "type": "p",
                  "en": "Combine: $\\frac{32}{3} - \\frac{32}{5} = \\frac{160 - 96}{15} = \\frac{64}{15}$, so $V = \\frac{64\\pi}{15}$ cubic units.",
                  "zh": "合并：$\\frac{32}{3} - \\frac{32}{5} = \\frac{160 - 96}{15} = \\frac{64}{15}$，故 $V = \\frac{64\\pi}{15}$ 立方单位。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A solid has base the region between $y = x$ and $y = 0$ on $[0, 3]$. Cross-sections perpendicular to the $x$-axis are squares. Which integral gives the volume?",
                "zh": "一个立体的底面是 $[0, 3]$ 上 $y = x$ 与 $y = 0$ 之间的区域。垂直于 $x$ 轴的横截面是正方形。哪个积分给出体积？"
              },
              "choices": [
                "$\\int_0^3 x^2\\,dx$",
                "$\\int_0^3 \\pi x^2\\,dx$",
                "$\\int_0^3 x\\,dx$",
                "$\\int_0^3 (x^2)^2\\,dx$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The side is $s = x$, so a square slice has area $x^2$ and $V = \\int_0^3 x^2\\,dx$. Inserting a $\\pi$ is the classic mistake — $\\pi$ belongs to circular cross-sections, not squares.",
                "zh": "边长为 $s = x$，故正方形切片面积为 $x^2$，$V = \\int_0^3 x^2\\,dx$。加上 $\\pi$ 是经典错误——$\\pi$ 属于圆形横截面，而不是正方形。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The region under $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is revolved about the $x$-axis. Which integral gives the volume?",
                "zh": "把 $x = 0$ 到 $x = 4$ 之间 $y = \\sqrt{x}$ 下方的区域绕 $x$ 轴旋转。哪个积分给出体积？"
              },
              "choices": [
                "$\\int_0^4 \\pi \\sqrt{x}\\,dx$",
                "$\\int_0^4 \\pi x\\,dx$",
                "$\\int_0^4 x\\,dx$",
                "$\\int_0^4 \\pi x^2\\,dx$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Disc method: $R = \\sqrt{x}$, so $V = \\int_0^4 \\pi(\\sqrt{x})^2\\,dx = \\int_0^4 \\pi x\\,dx$. Forgetting to square the radius (leaving $\\pi\\sqrt{x}$) is the tempting error.",
                "zh": "圆盘法：$R = \\sqrt{x}$，故 $V = \\int_0^4 \\pi(\\sqrt{x})^2\\,dx = \\int_0^4 \\pi x\\,dx$。忘记把半径平方（留下 $\\pi\\sqrt{x}$）是容易犯的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The region under $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is revolved about the $x$-axis. The volume is $k\\pi$. Find $k$. Give an integer.",
                "zh": "把 $x = 0$ 到 $x = 4$ 之间 $y = \\sqrt{x}$ 下方的区域绕 $x$ 轴旋转。体积为 $k\\pi$。求 $k$。请填一个整数。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "$V = \\int_0^4 \\pi x\\,dx = \\pi[\\frac{x^2}{2}]_0^4 = 8\\pi$, so $k = 8$. Dropping the square on the radius would give $\\int_0^4 \\pi\\sqrt{x}\\,dx = \\frac{16}{3}\\pi$, a different (wrong) value.",
                "zh": "$V = \\int_0^4 \\pi x\\,dx = \\pi[\\frac{x^2}{2}]_0^4 = 8\\pi$，故 $k = 8$。不给半径平方会得到 $\\int_0^4 \\pi\\sqrt{x}\\,dx = \\frac{16}{3}\\pi$，是一个不同的（错误）值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solid has base the region between $y = 1 - x^2$ and the $x$-axis. Cross-sections perpendicular to the $x$-axis are semicircles with diameter in the base. What is the radius of the slice at position $x$?",
                "zh": "一个立体的底面是 $y = 1 - x^2$ 与 $x$ 轴之间的区域。垂直于 $x$ 轴的横截面是以底面上的线段为直径的半圆。位置 $x$ 处切片的半径是多少？"
              },
              "choices": [
                "$1 - x^2$",
                "$2(1 - x^2)$",
                "$\\frac{1 - x^2}{2}$",
                "$(1 - x^2)^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The base length $s = 1 - x^2$ is the diameter, so the radius is half of it, $\\frac{1-x^2}{2}$. Using the full length as the radius is the single most common cross-section mistake.",
                "zh": "底面长度 $s = 1 - x^2$ 是直径，故半径是它的一半 $\\frac{1-x^2}{2}$。把整段长度当作半径是截面题中最常见的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solid has base the region between $y = x$ and $y = 0$ on $[0, 2]$. Cross-sections perpendicular to the $x$-axis are equilateral triangles. The volume is $\\frac{a\\sqrt{3}}{3}$. Find the integer $a$.",
                "zh": "一个立体的底面是 $[0, 2]$ 上 $y = x$ 与 $y = 0$ 之间的区域。垂直于 $x$ 轴的横截面是等边三角形。体积为 $\\frac{a\\sqrt{3}}{3}$。求整数 $a$。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Side $s = x$, area $\\frac{\\sqrt3}{4}x^2$. $V = \\int_0^2 \\frac{\\sqrt3}{4}x^2\\,dx = \\frac{\\sqrt3}{4}\\cdot\\frac{8}{3} = \\frac{2\\sqrt3}{3}$, so $a = 2$. Forgetting the $\\frac{\\sqrt3}{4}$ area factor and using $s^2$ (a square) is the trap.",
                "zh": "边长 $s = x$，面积 $\\frac{\\sqrt3}{4}x^2$。$V = \\int_0^2 \\frac{\\sqrt3}{4}x^2\\,dx = \\frac{\\sqrt3}{4}\\cdot\\frac{8}{3} = \\frac{2\\sqrt3}{3}$，故 $a = 2$。忘掉 $\\frac{\\sqrt3}{4}$ 这个面积系数、用 $s^2$（正方形）是陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The region bounded by $y = x^2$ and $y = 4$ is revolved about the line $y = 4$. Which is the correct radius of the disc at position $x$?",
                "zh": "把由 $y = x^2$ 和 $y = 4$ 围成的区域绕直线 $y = 4$ 旋转。位置 $x$ 处圆盘的正确半径是哪个？"
              },
              "choices": [
                "$x^2 - 4$",
                "$x^2 + 4$",
                "$4 - x^2 - k$ for some unknown $k$",
                "$4 - x^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The radius is the distance from the axis $y = 4$ down to the curve $y = x^2$: $4 - x^2$, which is nonnegative on $[-2,2]$. Writing $x^2 - 4$ (negative here) reverses the subtraction; distance must be the axis minus the curve when the curve is below.",
                "zh": "半径是从轴 $y = 4$ 到曲线 $y = x^2$ 的距离：$4 - x^2$，它在 $[-2,2]$ 上非负。写成 $x^2 - 4$（这里为负）把减法搞反了；当曲线在下方时，距离应是轴减曲线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The region between $y = x^2$ and $y = 4$ is revolved about the $x$-axis (washers). The volume is $\\frac{a\\pi}{5}$ for some integer $a$. Using $V=\\int_{-2}^{2}\\pi[16 - x^4]\\,dx$, find $a$.",
                "zh": "把 $y = x^2$ 与 $y = 4$ 之间的区域绕 $x$ 轴旋转（垫圈）。体积为 $\\frac{a\\pi}{5}$（$a$ 为整数）。用 $V=\\int_{-2}^{2}\\pi[16 - x^4]\\,dx$ 求 $a$。"
              },
              "answer": "832",
              "accept": [
                "832.0"
              ],
              "explanation": {
                "en": "Outer radius $4$, inner radius $x^2$: $V = \\pi\\int_{-2}^2 (16 - x^4)\\,dx = \\pi[16x - \\frac{x^5}{5}]_{-2}^2 = \\pi(2)(32 - \\frac{32}{5}) = \\pi\\cdot\\frac{2\\cdot128}{5} = \\frac{832\\pi}{5}$. Writing $(4 - x^2)^2$ instead of $4^2 - (x^2)^2$ is the classic washer error.",
                "zh": "外半径 $4$，内半径 $x^2$：$V = \\pi\\int_{-2}^2 (16 - x^4)\\,dx = \\pi[16x - \\frac{x^5}{5}]_{-2}^2 = \\pi(2)(32 - \\frac{32}{5}) = \\pi\\cdot\\frac{2\\cdot128}{5} = \\frac{832\\pi}{5}$。把 $4^2 - (x^2)^2$ 写成 $(4 - x^2)^2$ 是经典的垫圈错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The region bounded by $y = x^2$, $y = 4$, and the $y$-axis (with $x \\ge 0$) is revolved about the $y$-axis. Slicing perpendicular to the $y$-axis, which integral gives the volume?",
                "zh": "把由 $y = x^2$、$y = 4$ 和 $y$ 轴（$x \\ge 0$）围成的区域绕 $y$ 轴旋转。垂直于 $y$ 轴切片，哪个积分给出体积？"
              },
              "choices": [
                "$\\int_0^4 \\pi y^2\\,dy$",
                "$\\int_0^4 \\pi y\\,dy$",
                "$\\int_0^2 \\pi x^2\\,dx$",
                "$\\int_0^4 \\pi \\sqrt{y}\\,dy$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Solve $y = x^2$ for the radius $x = \\sqrt{y}$; a disc has area $\\pi(\\sqrt{y})^2 = \\pi y$, so $V = \\int_0^4 \\pi y\\,dy$. Forgetting to square (leaving $\\pi\\sqrt{y}$) or integrating in $x$ with $y$-based radii are the traps.",
                "zh": "把 $y = x^2$ 解出半径 $x = \\sqrt{y}$；圆盘面积为 $\\pi(\\sqrt{y})^2 = \\pi y$，故 $V = \\int_0^4 \\pi y\\,dy$。忘记平方（留下 $\\pi\\sqrt{y}$）或用 $x$ 积分却配 $y$ 的半径都是陷阱。"
              }
            }
          ]
        }
      ]
    }
  ]
}
