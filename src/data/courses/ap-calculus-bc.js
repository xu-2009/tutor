export default {
  "id": "ap-calculus-bc",
  "title": "AP Calculus BC",
  "titleZh": "AP 微积分 BC",
  "subject": "math",
  "level": "AP",
  "description": "The complete AP Calculus BC course following the official College Board 10-unit framework: limits, differentiation and its applications, integration techniques, differential equations, parametric and polar calculus, and infinite series.",
  "descriptionZh": "完整的 AP 微积分 BC 课程，按照 College Board 官方 10 个单元的框架编排：极限、导数及其应用、积分技巧、微分方程、参数与极坐标微积分以及无穷级数。",
  "units": [
    {
      "id": "unit-1-limits-and-continuity",
      "title": "Unit 1: Limits and Continuity",
      "titleZh": "第一单元：极限与连续",
      "lessons": [
        {
          "id": "limits-and-limit-laws",
          "title": "Limits and Limit Laws",
          "titleZh": "极限与极限法则",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Limit?",
              "zh": "什么是极限？"
            },
            {
              "type": "p",
              "en": "The limit $\\lim_{x \\to a} f(x) = L$ says that the values of $f(x)$ can be made as close to $L$ as we like by taking $x$ sufficiently close to $a$ — without ever requiring $x = a$. The function does not even need to be defined at $a$. This single idea powers every definition in calculus: derivatives, integrals, and series all begin with a limit.",
              "zh": "极限 $\\lim_{x \\to a} f(x) = L$ 的含义是：只要 $x$ 足够接近 $a$（但不需要等于 $a$），$f(x)$ 的值就可以任意接近 $L$。函数甚至不必在 $a$ 处有定义。微积分中的每一个定义——导数、积分、级数——都建立在这一个概念之上。"
            },
            {
              "type": "p",
              "en": "A limit exists only when both one-sided limits exist and agree: $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$. When reading a graph or a table, always check both sides before declaring a limit.",
              "zh": "只有当两个单侧极限都存在且相等时，极限才存在：$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$。看图象或数表估计极限时，一定要先检查左右两侧。"
            },
            {
              "type": "h3",
              "en": "The Limit Laws",
              "zh": "极限法则"
            },
            {
              "type": "p",
              "en": "If $\\lim_{x \\to a} f(x)$ and $\\lim_{x \\to a} g(x)$ both exist, limits pass through arithmetic:",
              "zh": "若 $\\lim_{x \\to a} f(x)$ 与 $\\lim_{x \\to a} g(x)$ 都存在，则极限运算可以与四则运算交换："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Sum/difference: $\\lim (f \\pm g) = \\lim f \\pm \\lim g$",
                  "zh": "和差法则：$\\lim (f \\pm g) = \\lim f \\pm \\lim g$"
                },
                {
                  "en": "Product: $\\lim (f \\cdot g) = (\\lim f)(\\lim g)$, and constants factor out",
                  "zh": "乘积法则：$\\lim (f \\cdot g) = (\\lim f)(\\lim g)$，常数可以提到极限号外"
                },
                {
                  "en": "Quotient: $\\lim \\frac{f}{g} = \\frac{\\lim f}{\\lim g}$ provided $\\lim g \\neq 0$",
                  "zh": "商法则：当 $\\lim g \\neq 0$ 时，$\\lim \\frac{f}{g} = \\frac{\\lim f}{\\lim g}$"
                },
                {
                  "en": "Powers and roots: $\\lim [f(x)]^n = (\\lim f)^n$",
                  "zh": "幂与根：$\\lim [f(x)]^n = (\\lim f)^n$"
                }
              ]
            },
            {
              "type": "p",
              "en": "For polynomials, rational functions, trig, exponential, and log functions, direct substitution works at every point of the domain. The interesting cases are the indeterminate forms like $\\frac{0}{0}$, where substitution fails and algebra takes over.",
              "zh": "对多项式、有理函数、三角函数、指数与对数函数，在定义域内的任何点都可以直接代入求极限。真正有趣的是 $\\frac{0}{0}$ 这类不定式：代入失效，需要用代数手段处理。"
            },
            {
              "type": "h3",
              "en": "Algebraic Tools for $\\frac{0}{0}$",
              "zh": "处理 $\\frac{0}{0}$ 的代数工具"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Factor and cancel: $\\frac{x^2 - 9}{x - 3} = x + 3$ for $x \\neq 3$",
                  "zh": "因式分解并约分：当 $x \\neq 3$ 时 $\\frac{x^2 - 9}{x - 3} = x + 3$"
                },
                {
                  "en": "Rationalize with a conjugate when square roots appear: multiply by $\\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$",
                  "zh": "出现根号时乘以共轭式有理化：如乘 $\\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$"
                },
                {
                  "en": "Combine complex fractions over a common denominator before cancelling",
                  "zh": "繁分式先通分合并，再约去公因式"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Squeeze Theorem and Trig Limits",
              "zh": "夹逼定理与三角极限"
            },
            {
              "type": "p",
              "en": "If $g(x) \\leq f(x) \\leq h(x)$ near $a$ and $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} f(x) = L$. This is how we handle bounded oscillation like $\\sin\\frac{1}{x}$, and it is the proof engine behind the two limits every BC student must know:",
              "zh": "若在 $a$ 附近 $g(x) \\leq f(x) \\leq h(x)$，且 $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$，则 $\\lim_{x \\to a} f(x) = L$。这就是处理 $\\sin\\frac{1}{x}$ 这类有界振荡的方法，也是下面两个 BC 学生必须熟记的极限的证明工具："
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0"
            },
            {
              "type": "note",
              "en": "AP exam tip: when you see $\\lim_{x \\to 0} \\frac{\\sin(kx)}{x}$, the answer is $k$ — rewrite it as $k \\cdot \\frac{\\sin(kx)}{kx}$. Also, \"the limit does not exist\" is a specific claim; on the multiple-choice section, check one-sided limits before choosing it, because a distractor with the correct one-sided value is almost always offered.",
              "zh": "AP 考试提示：遇到 $\\lim_{x \\to 0} \\frac{\\sin(kx)}{x}$ 时答案就是 $k$——把它改写成 $k \\cdot \\frac{\\sin(kx)}{kx}$ 即可。另外，\"极限不存在\"是一个具体判断；选择题里先检查单侧极限再选它，因为选项中几乎总会有一个正确的单侧极限值作干扰。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Rationalizing a $\\frac{0}{0}$ Form",
                "zh": "例题 1：有理化处理 $\\frac{0}{0}$ 型"
              },
              "problem": {
                "en": "Evaluate $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$.",
                "zh": "求 $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitution gives $\\frac{0}{0}$, so multiply numerator and denominator by the conjugate $\\sqrt{x} + 2$:",
                  "zh": "直接代入得 $\\frac{0}{0}$，于是分子分母同乘共轭式 $\\sqrt{x} + 2$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2} = \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\frac{1}{\\sqrt{x} + 2}"
                },
                {
                  "type": "p",
                  "en": "Now substitution is legal: the limit is $\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}$.",
                  "zh": "现在可以直接代入了：极限为 $\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Squeeze Theorem in Action",
                "zh": "例题 2：夹逼定理的应用"
              },
              "problem": {
                "en": "Evaluate $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$.",
                "zh": "求 $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The cosine factor oscillates wildly near $0$ and has no limit, so the product law does not apply. But cosine is bounded: $-1 \\leq \\cos\\frac{1}{x} \\leq 1$ for all $x \\neq 0$. Multiply through by $x^2 \\geq 0$:",
                  "zh": "余弦因子在 $0$ 附近剧烈振荡，没有极限，因此不能用乘积法则。但余弦有界：对所有 $x \\neq 0$ 有 $-1 \\leq \\cos\\frac{1}{x} \\leq 1$。同乘 $x^2 \\geq 0$："
                },
                {
                  "type": "math",
                  "tex": "-x^2 \\leq x^2 \\cos\\frac{1}{x} \\leq x^2"
                },
                {
                  "type": "p",
                  "en": "Since $\\lim_{x \\to 0} (-x^2) = \\lim_{x \\to 0} x^2 = 0$, the squeeze theorem forces the middle expression to $0$ as well. On the FRQ, name the theorem and show both bounding limits to earn the justification point.",
                  "zh": "因为 $\\lim_{x \\to 0} (-x^2) = \\lim_{x \\to 0} x^2 = 0$，由夹逼定理，中间的表达式也趋于 $0$。在解答题中要写出定理名称并算出两侧的极限，才能拿到论证分。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
                "zh": "求 $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$。"
              },
              "choices": [
                "$0$",
                "$3$",
                "$6$",
                "The limit does not exist"
              ],
              "answer": 2,
              "explanation": {
                "en": "Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\neq 3$, so the limit is $6$. \"Does not exist\" tempts students because $f(3)$ is undefined — but the limit ignores the value at $x = 3$ itself.",
                "zh": "因式分解：当 $x \\neq 3$ 时 $\\frac{(x-3)(x+3)}{x-3} = x + 3$，故极限为 $6$。\"不存在\"这个选项之所以诱人，是因为 $f(3)$ 无定义——但极限根本不关心 $x = 3$ 这一点的取值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "Rewrite as $5 \\cdot \\frac{\\sin(5x)}{5x}$. As $x \\to 0$, $5x \\to 0$, so the fraction tends to $1$ and the limit is $5$. Answering $1$ is the classic mistake — the denominator must match the argument of sine.",
                "zh": "改写为 $5 \\cdot \\frac{\\sin(5x)}{5x}$。当 $x \\to 0$ 时 $5x \\to 0$，分式趋于 $1$，故极限为 $5$。答 $1$ 是经典错误——分母必须与正弦的自变量一致才行。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Suppose $\\lim_{x \\to a} f(x) = 3$ and $\\lim_{x \\to a} g(x) = -2$. Evaluate $\\lim_{x \\to a} \\frac{[f(x)]^2 + g(x)}{g(x) + 9}$.",
                "zh": "设 $\\lim_{x \\to a} f(x) = 3$，$\\lim_{x \\to a} g(x) = -2$。求 $\\lim_{x \\to a} \\frac{[f(x)]^2 + g(x)}{g(x) + 9}$。"
              },
              "choices": [
                "$\\frac{7}{9}$",
                "$1$",
                "$\\frac{11}{7}$",
                "$\\frac{9}{7}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "By the limit laws, the numerator tends to $3^2 + (-2) = 7$ and the denominator to $-2 + 9 = 7$, so the limit is $\\frac{7}{7} = 1$. Choice A comes from forgetting to add $g$'s limit in the denominator correctly.",
                "zh": "由极限法则，分子趋于 $3^2 + (-2) = 7$，分母趋于 $-2 + 9 = 7$，故极限为 $\\frac{7}{7} = 1$。选 A 的同学通常是分母的加法算错了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$.",
                "zh": "求 $\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$。"
              },
              "choices": [
                "$0$",
                "$\\frac{1}{3}$",
                "The limit does not exist",
                "$\\frac{1}{6}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Multiply by the conjugate: $\\frac{\\sqrt{x}-3}{x-9} \\cdot \\frac{\\sqrt{x}+3}{\\sqrt{x}+3} = \\frac{1}{\\sqrt{x}+3} \\to \\frac{1}{6}$. Choice B, $\\frac{1}{3}$, comes from evaluating $\\frac{1}{\\sqrt{9}}$ and dropping the $+3$.",
                "zh": "乘以共轭式：$\\frac{\\sqrt{x}-3}{x-9} \\cdot \\frac{\\sqrt{x}+3}{\\sqrt{x}+3} = \\frac{1}{\\sqrt{x}+3} \\to \\frac{1}{6}$。选项 B 的 $\\frac{1}{3}$ 来自只算了 $\\frac{1}{\\sqrt{9}}$，漏掉了 $+3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 2} \\frac{x^2 + 3x - 10}{x - 2}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to 2} \\frac{x^2 + 3x - 10}{x - 2}$。请填一个整数。"
              },
              "answer": "7",
              "accept": [
                "7.0",
                "+7"
              ],
              "explanation": {
                "en": "Factor the numerator: $x^2 + 3x - 10 = (x + 5)(x - 2)$. Cancel $x - 2$ to get $x + 5$, which tends to $7$ as $x \\to 2$.",
                "zh": "分子因式分解：$x^2 + 3x - 10 = (x + 5)(x - 2)$。约去 $x - 2$ 得 $x + 5$，当 $x \\to 2$ 时趋于 $7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which limit is correctly evaluated using the squeeze theorem?",
                "zh": "下列哪个极限可以用夹逼定理正确求出？"
              },
              "choices": [
                "$\\lim_{x \\to 0} x \\sin\\frac{1}{x} = 0$",
                "$\\lim_{x \\to 0} \\sin\\frac{1}{x} = 0$",
                "$\\lim_{x \\to 0} \\frac{1}{x}\\sin x = 0$",
                "$\\lim_{x \\to 0} \\frac{\\sin x}{x^2} = 1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $-|x| \\leq x \\sin\\frac{1}{x} \\leq |x|$ and both bounds tend to $0$, the squeeze theorem gives limit $0$. Choice B is false — $\\sin\\frac{1}{x}$ oscillates between $-1$ and $1$ forever, so its limit does not exist; boundedness alone is not enough without a squeezing factor that shrinks to $0$.",
                "zh": "因为 $-|x| \\leq x \\sin\\frac{1}{x} \\leq |x|$ 且两边都趋于 $0$，由夹逼定理极限为 $0$。选项 B 是错的——$\\sin\\frac{1}{x}$ 永远在 $-1$ 与 $1$ 之间振荡，极限不存在；仅有界还不够，必须再乘上一个趋于 $0$ 的压缩因子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$。请填一个整数。"
              },
              "answer": "0",
              "accept": [
                "0.0",
                "-0"
              ],
              "explanation": {
                "en": "This is one of the two memorized trig limits: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$. You can verify by multiplying by $\\frac{1 + \\cos x}{1 + \\cos x}$ to get $\\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{1 + \\cos x} \\to 1 \\cdot \\frac{0}{2} = 0$.",
                "zh": "这是必须熟记的两个三角极限之一：$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$。可以通过乘以 $\\frac{1 + \\cos x}{1 + \\cos x}$ 验证：得 $\\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{1 + \\cos x} \\to 1 \\cdot \\frac{0}{2} = 0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The table gives values of $f$: $f(1.9) = 4.81$, $f(1.99) = 4.98$, $f(2.01) = 7.02$, $f(2.1) = 7.21$. Which is the best conclusion about $\\lim_{x \\to 2} f(x)$?",
                "zh": "数表给出 $f$ 的取值：$f(1.9) = 4.81$，$f(1.99) = 4.98$，$f(2.01) = 7.02$，$f(2.1) = 7.21$。关于 $\\lim_{x \\to 2} f(x)$ 最合理的结论是哪一个？"
              },
              "choices": [
                "$\\lim_{x \\to 2} f(x) = 5$",
                "$\\lim_{x \\to 2} f(x) = 6$",
                "$\\lim_{x \\to 2} f(x) = 7$",
                "The limit appears not to exist"
              ],
              "answer": 3,
              "explanation": {
                "en": "From the left the values approach $5$; from the right they approach $7$. The one-sided limits appear to disagree, so the two-sided limit appears not to exist. Choice B tempts by averaging $5$ and $7$ — averaging one-sided limits is never valid.",
                "zh": "从左侧看函数值趋近 $5$，从右侧看趋近 $7$。两个单侧极限不一致，因此双侧极限看来不存在。选项 B 用 $5$ 和 $7$ 的平均值作诱饵——对单侧极限取平均从来都是不成立的。"
              }
            }
          ]
        },
        {
          "id": "continuity-and-ivt",
          "title": "Continuity and the Intermediate Value Theorem",
          "titleZh": "连续性与介值定理",
          "content": [
            {
              "type": "h2",
              "en": "Continuity: The No-Surprise Property",
              "zh": "连续性：没有意外的性质"
            },
            {
              "type": "p",
              "en": "Intuitively, a function is continuous where its graph can be drawn without lifting your pencil. The precise definition is a three-part checklist: $f$ is continuous at $x = a$ if (1) $f(a)$ is defined, (2) $\\lim_{x \\to a} f(x)$ exists, and (3) the two are equal:",
              "zh": "直观上，函数在图象可以一笔画出（不抬笔）的地方连续。精确定义是一张三步核对表：$f$ 在 $x = a$ 处连续，当且仅当 (1) $f(a)$ 有定义，(2) $\\lim_{x \\to a} f(x)$ 存在，(3) 两者相等："
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to a} f(x) = f(a)"
            },
            {
              "type": "p",
              "en": "Polynomials, $\\sin x$, $\\cos x$, and $e^x$ are continuous everywhere; rational functions, $\\ln x$, $\\tan x$, and root functions are continuous on their domains. Sums, products, quotients (where defined), and compositions of continuous functions stay continuous.",
              "zh": "多项式、$\\sin x$、$\\cos x$、$e^x$ 处处连续；有理函数、$\\ln x$、$\\tan x$ 和根式函数在各自定义域上连续。连续函数的和、积、商（在有定义处）以及复合仍然连续。"
            },
            {
              "type": "h3",
              "en": "Three Types of Discontinuity",
              "zh": "三类间断点"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Removable: the limit exists but $f(a)$ is missing or wrong — a hole in the graph, e.g. $\\frac{x^2-4}{x-2}$ at $x = 2$",
                  "zh": "可去间断点：极限存在但 $f(a)$ 无定义或取值不对——图象上的一个洞，如 $\\frac{x^2-4}{x-2}$ 在 $x = 2$ 处"
                },
                {
                  "en": "Jump: both one-sided limits exist but disagree — typical of piecewise functions",
                  "zh": "跳跃间断点：两个单侧极限都存在但不相等——分段函数的典型情形"
                },
                {
                  "en": "Infinite: at least one one-sided limit is $\\pm\\infty$ — a vertical asymptote, e.g. $\\frac{1}{x}$ at $x = 0$",
                  "zh": "无穷间断点：至少一个单侧极限为 $\\pm\\infty$——即垂直渐近线，如 $\\frac{1}{x}$ 在 $x = 0$ 处"
                }
              ]
            },
            {
              "type": "p",
              "en": "A removable discontinuity is \"removable\" because redefining a single value fixes it: set $f(a) = \\lim_{x \\to a} f(x)$ and the function becomes continuous there. Jump and infinite discontinuities cannot be repaired this way.",
              "zh": "可去间断点之所以\"可去\"，是因为只需重新定义一个函数值就能修复：令 $f(a) = \\lim_{x \\to a} f(x)$，函数在该点就连续了。跳跃间断点和无穷间断点无法用这种方式修补。"
            },
            {
              "type": "h3",
              "en": "Making Piecewise Functions Continuous",
              "zh": "让分段函数连续"
            },
            {
              "type": "p",
              "en": "AP problems often hand you a piecewise function with an unknown constant and ask for the value that makes it continuous. Strategy: at the seam, set the left-hand limit equal to the right-hand limit (and to the function value), then solve for the constant.",
              "zh": "AP 试题常给出一个含未知常数的分段函数，要求使其连续的常数值。策略：在分段点处令左极限等于右极限（并等于函数值），然后解出常数。"
            },
            {
              "type": "h3",
              "en": "The Intermediate Value Theorem",
              "zh": "介值定理"
            },
            {
              "type": "p",
              "en": "If $f$ is continuous on the closed interval $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c$ in $(a, b)$ with $f(c) = N$. Continuity is essential: a continuous function cannot skip values. The IVT guarantees existence only — it never tells you where $c$ is or how many there are.",
              "zh": "若 $f$ 在闭区间 $[a, b]$ 上连续，且 $N$ 是介于 $f(a)$ 与 $f(b)$ 之间的任意值，则在 $(a, b)$ 内至少存在一个 $c$ 使 $f(c) = N$。连续性是关键前提：连续函数不能跳过任何中间值。介值定理只保证存在性——它不会告诉你 $c$ 在哪里，也不会告诉你有几个。"
            },
            {
              "type": "note",
              "en": "AP exam tip: an IVT justification must state three things — $f$ is continuous on $[a,b]$, the target value lies between $f(a)$ and $f(b)$, and the conclusion \"so there exists $c$ in $(a,b)$ with $f(c) = N$.\" Omitting the word \"continuous\" loses the point, even with correct arithmetic.",
              "zh": "AP 考试提示：介值定理的论证必须写清三点——$f$ 在 $[a,b]$ 上连续、目标值介于 $f(a)$ 与 $f(b)$ 之间、以及结论\"故存在 $c \\in (a,b)$ 使 $f(c) = N$\"。哪怕计算全对，漏写\"连续\"二字也会丢掉论证分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Choosing a Constant for Continuity",
                "zh": "例题 1：确定使函数连续的常数"
              },
              "problem": {
                "en": "Let $f(x) = \\begin{cases} \\frac{x^2 - 16}{x - 4} & x < 4 \\\\ 3x + k & x \\geq 4 \\end{cases}$. Find the value of $k$ that makes $f$ continuous at $x = 4$.",
                "zh": "设 $f(x) = \\begin{cases} \\frac{x^2 - 16}{x - 4} & x < 4 \\\\ 3x + k & x \\geq 4 \\end{cases}$。求使 $f$ 在 $x = 4$ 处连续的 $k$ 值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Left-hand limit: for $x < 4$, $\\frac{x^2 - 16}{x - 4} = x + 4$, so $\\lim_{x \\to 4^-} f(x) = 8$. Right-hand limit: $\\lim_{x \\to 4^+} (3x + k) = 12 + k$, which also equals $f(4)$.",
                  "zh": "左极限：当 $x < 4$ 时 $\\frac{x^2 - 16}{x - 4} = x + 4$，故 $\\lim_{x \\to 4^-} f(x) = 8$。右极限：$\\lim_{x \\to 4^+} (3x + k) = 12 + k$，它同时也是 $f(4)$。"
                },
                {
                  "type": "math",
                  "tex": "8 = 12 + k \\quad \\Rightarrow \\quad k = -4"
                },
                {
                  "type": "p",
                  "en": "With $k = -4$ all three continuity conditions hold at $x = 4$: the limit exists, $f(4) = 8$, and they agree.",
                  "zh": "当 $k = -4$ 时，连续性的三个条件在 $x = 4$ 处全部成立：极限存在，$f(4) = 8$，且两者相等。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: An IVT Root Argument",
                "zh": "例题 2：用介值定理论证根的存在"
              },
              "problem": {
                "en": "Show that $g(x) = x^3 - x - 1$ has a root in the interval $(1, 2)$.",
                "zh": "证明 $g(x) = x^3 - x - 1$ 在区间 $(1, 2)$ 内有一个根。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$g$ is a polynomial, hence continuous on $[1, 2]$. Evaluate the endpoints: $g(1) = 1 - 1 - 1 = -1 < 0$ and $g(2) = 8 - 2 - 1 = 5 > 0$.",
                  "zh": "$g$ 是多项式，因此在 $[1, 2]$ 上连续。计算端点值：$g(1) = 1 - 1 - 1 = -1 < 0$，$g(2) = 8 - 2 - 1 = 5 > 0$。"
                },
                {
                  "type": "p",
                  "en": "Since $g$ is continuous on $[1, 2]$ and $0$ lies between $g(1) = -1$ and $g(2) = 5$, the Intermediate Value Theorem guarantees a $c$ in $(1, 2)$ with $g(c) = 0$. That $c$ is the required root.",
                  "zh": "因为 $g$ 在 $[1, 2]$ 上连续，且 $0$ 介于 $g(1) = -1$ 与 $g(2) = 5$ 之间，由介值定理存在 $c \\in (1, 2)$ 使 $g(c) = 0$。这个 $c$ 就是所求的根。"
                },
                {
                  "type": "p",
                  "en": "Note what we did not claim: the IVT does not say the root is unique, nor does it locate it. Those questions need derivatives.",
                  "zh": "注意我们没有断言的内容：介值定理既不保证根唯一，也不能确定根的位置。那些问题需要用导数来回答。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = \\frac{x^2 - 1}{x - 1}$ for $x \\neq 1$ and $f(1) = 3$. The discontinuity of $f$ at $x = 1$ is",
                "zh": "设 $x \\neq 1$ 时 $f(x) = \\frac{x^2 - 1}{x - 1}$，且 $f(1) = 3$。则 $f$ 在 $x = 1$ 处的间断点是"
              },
              "choices": [
                "a jump discontinuity 跳跃间断点",
                "a removable discontinuity 可去间断点",
                "an infinite discontinuity 无穷间断点",
                "not a discontinuity — $f$ is continuous at $1$ 不是间断点——$f$ 在 $1$ 处连续"
              ],
              "answer": 1,
              "explanation": {
                "en": "The limit exists: $\\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = 2$. But $f(1) = 3 \\neq 2$, so condition (3) fails in a repairable way — redefining $f(1) = 2$ would fix it. Choice D tempts because both the limit and $f(1)$ exist, but they must also be equal.",
                "zh": "极限存在：$\\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = 2$。但 $f(1) = 3 \\neq 2$，第三个条件不成立且可以修复——把 $f(1)$ 重新定义为 $2$ 即可。选项 D 之所以诱人，是因为极限和 $f(1)$ 都存在，但连续还要求两者相等。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = \\begin{cases} kx + 1 & x < 2 \\\\ x^2 - 1 & x \\geq 2 \\end{cases}$. Find the value of $k$ that makes $f$ continuous at $x = 2$. Give an integer.",
                "zh": "设 $f(x) = \\begin{cases} kx + 1 & x < 2 \\\\ x^2 - 1 & x \\geq 2 \\end{cases}$。求使 $f$ 在 $x = 2$ 处连续的 $k$ 值。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "+1"
              ],
              "explanation": {
                "en": "Match the one-sided limits at the seam: left gives $2k + 1$, right gives $4 - 1 = 3$. Setting $2k + 1 = 3$ yields $k = 1$.",
                "zh": "在分段点处令单侧极限相等：左侧为 $2k + 1$，右侧为 $4 - 1 = 3$。由 $2k + 1 = 3$ 解得 $k = 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Consider $g(x) = \\frac{x + 3}{x^2 - 9}$. Which statement is correct?",
                "zh": "考虑 $g(x) = \\frac{x + 3}{x^2 - 9}$。下列哪个说法正确？"
              },
              "choices": [
                "Removable discontinuity at $x = 3$, infinite at $x = -3$ 在 $x = 3$ 处可去，在 $x = -3$ 处无穷",
                "Infinite discontinuities at both $x = 3$ and $x = -3$ 在 $x = 3$ 与 $x = -3$ 处都是无穷间断点",
                "Removable discontinuity at $x = -3$, infinite at $x = 3$ 在 $x = -3$ 处可去，在 $x = 3$ 处无穷",
                "Jump discontinuities at $x = \\pm 3$ 在 $x = \\pm 3$ 处是跳跃间断点"
              ],
              "answer": 2,
              "explanation": {
                "en": "Factor: $g(x) = \\frac{x+3}{(x-3)(x+3)} = \\frac{1}{x-3}$ for $x \\neq -3$. The factor $x + 3$ cancels, so $x = -3$ is a hole (limit $= -\\frac{1}{6}$), while $x = 3$ leaves a zero denominator with nonzero numerator — a vertical asymptote. Choice B forgets that a cancelling factor produces a hole, not an asymptote.",
                "zh": "因式分解：当 $x \\neq -3$ 时 $g(x) = \\frac{x+3}{(x-3)(x+3)} = \\frac{1}{x-3}$。因子 $x + 3$ 被约去，故 $x = -3$ 是一个洞（极限为 $-\\frac{1}{6}$）；而 $x = 3$ 处分母为零、分子不为零——是垂直渐近线。选项 B 忽略了可约去的因子产生的是洞而不是渐近线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$f$ is continuous on $[1, 4]$ with $f(1) = -2$ and $f(4) = 5$. Which conclusion is guaranteed by the Intermediate Value Theorem?",
                "zh": "$f$ 在 $[1, 4]$ 上连续，$f(1) = -2$，$f(4) = 5$。下列哪个结论由介值定理保证成立？"
              },
              "choices": [
                "$f(c) = 0$ for some $c$ in $(1, 4)$ 存在 $c \\in (1, 4)$ 使 $f(c) = 0$",
                "$f(c) = 6$ for some $c$ in $(1, 4)$ 存在 $c \\in (1, 4)$ 使 $f(c) = 6$",
                "$f$ has exactly one zero in $(1, 4)$ $f$ 在 $(1, 4)$ 内恰有一个零点",
                "$f'(c) = \\frac{7}{3}$ for some $c$ in $(1, 4)$ 存在 $c \\in (1, 4)$ 使 $f'(c) = \\frac{7}{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $0$ lies between $-2$ and $5$ and $f$ is continuous, the IVT guarantees some $c$ with $f(c) = 0$. Choice B fails because $6$ is outside $[-2, 5]$; choice C overreaches — the IVT never gives uniqueness; choice D is the Mean Value Theorem, which additionally requires differentiability.",
                "zh": "因为 $0$ 介于 $-2$ 与 $5$ 之间且 $f$ 连续，介值定理保证存在 $c$ 使 $f(c) = 0$。选项 B 不对，因为 $6$ 不在 $[-2, 5]$ 内；选项 C 说得太多——介值定理从不保证唯一性；选项 D 是中值定理的结论，它还需要可导这个额外条件。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = \\frac{x^2 - 4}{x - 2}$ for $x \\neq 2$. What value should $f(2)$ be defined as so that $f$ becomes continuous at $x = 2$? Give an integer.",
                "zh": "设 $x \\neq 2$ 时 $f(x) = \\frac{x^2 - 4}{x - 2}$。应将 $f(2)$ 定义为何值才能使 $f$ 在 $x = 2$ 处连续？请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "For $x \\neq 2$, $f(x) = \\frac{(x-2)(x+2)}{x-2} = x + 2$, so $\\lim_{x \\to 2} f(x) = 4$. Defining $f(2) = 4$ removes the discontinuity — this is exactly why it is called removable.",
                "zh": "当 $x \\neq 2$ 时 $f(x) = \\frac{(x-2)(x+2)}{x-2} = x + 2$，故 $\\lim_{x \\to 2} f(x) = 4$。定义 $f(2) = 4$ 就消除了间断——这正是\"可去\"二字的由来。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $h(x) = \\begin{cases} x + 1 & x < 0 \\\\ x^2 - 2 & x \\geq 0 \\end{cases}$. At $x = 0$, $h$ has",
                "zh": "设 $h(x) = \\begin{cases} x + 1 & x < 0 \\\\ x^2 - 2 & x \\geq 0 \\end{cases}$。在 $x = 0$ 处，$h$ 有"
              },
              "choices": [
                "a removable discontinuity 一个可去间断点",
                "an infinite discontinuity 一个无穷间断点",
                "no discontinuity 没有间断点",
                "a jump discontinuity 一个跳跃间断点"
              ],
              "answer": 3,
              "explanation": {
                "en": "The left-hand limit is $0 + 1 = 1$; the right-hand limit is $0 - 2 = -2$. Both one-sided limits exist but disagree, which is precisely a jump. Choice A is tempting because $h(0)$ is defined, but no single redefinition can reconcile two different one-sided limits.",
                "zh": "左极限为 $0 + 1 = 1$；右极限为 $0 - 2 = -2$。两个单侧极限都存在但不相等，这正是跳跃间断点的定义。选项 A 之所以诱人，是因为 $h(0)$ 有定义，但无论怎样重新定义一个函数值，都无法让两个不同的单侧极限一致。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$f$ is continuous on $[0, 5]$ with $f(0) = 2$, $f(2) = -1$, and $f(5) = 4$. What is the minimum number of solutions to $f(x) = 0$ on $(0, 5)$ guaranteed by the IVT? Give an integer.",
                "zh": "$f$ 在 $[0, 5]$ 上连续，$f(0) = 2$，$f(2) = -1$，$f(5) = 4$。由介值定理，方程 $f(x) = 0$ 在 $(0, 5)$ 内保证至少有几个解？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "The sign changes twice: from $f(0) = 2 > 0$ to $f(2) = -1 < 0$ forces a zero in $(0, 2)$, and from $f(2) < 0$ to $f(5) = 4 > 0$ forces another in $(2, 5)$. So at least $2$ zeros are guaranteed; more could exist, but the IVT cannot promise them.",
                "zh": "符号变化了两次：从 $f(0) = 2 > 0$ 到 $f(2) = -1 < 0$ 保证 $(0, 2)$ 内有一个零点；从 $f(2) < 0$ 到 $f(5) = 4 > 0$ 又保证 $(2, 5)$ 内有一个。因此至少保证 $2$ 个零点；实际可能更多，但介值定理无法承诺。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On which interval is $F(x) = \\frac{\\sqrt{x - 1}}{x - 3}$ continuous?",
                "zh": "$F(x) = \\frac{\\sqrt{x - 1}}{x - 3}$ 在下列哪个区间上连续？"
              },
              "choices": [
                "$[1, 3) \\cup (3, \\infty)$",
                "$(-\\infty, 3) \\cup (3, \\infty)$",
                "$[1, \\infty)$",
                "$(1, 3)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The square root needs $x \\geq 1$ and the denominator forbids $x = 3$, so $F$ is continuous exactly on $[1, 3) \\cup (3, \\infty)$. Choice C forgets to exclude the vertical asymptote at $x = 3$; choice B ignores the domain of the square root.",
                "zh": "根号要求 $x \\geq 1$，分母排除 $x = 3$，因此 $F$ 恰在 $[1, 3) \\cup (3, \\infty)$ 上连续。选项 C 忘记去掉 $x = 3$ 处的垂直渐近线；选项 B 忽略了根号的定义域。"
              }
            }
          ]
        },
        {
          "id": "limits-at-infinity-and-asymptotes",
          "title": "Limits at Infinity and Asymptotes",
          "titleZh": "无穷远处的极限与渐近线",
          "content": [
            {
              "type": "h2",
              "en": "End Behavior: What Happens Far Away",
              "zh": "端点行为：函数在远处的表现"
            },
            {
              "type": "p",
              "en": "A limit at infinity, $\\lim_{x \\to \\infty} f(x) = L$, describes the height the graph settles toward as $x$ grows without bound. If such a finite limit exists (as $x \\to \\infty$ or $x \\to -\\infty$), the line $y = L$ is a horizontal asymptote. A function can have at most two horizontal asymptotes — one in each direction — and its graph is allowed to cross them.",
              "zh": "无穷远处的极限 $\\lim_{x \\to \\infty} f(x) = L$ 描述当 $x$ 无限增大时图象趋于的高度。若这样的有限极限存在（$x \\to \\infty$ 或 $x \\to -\\infty$），直线 $y = L$ 就是一条水平渐近线。一个函数最多有两条水平渐近线——每个方向一条——而且图象可以穿过它们。"
            },
            {
              "type": "p",
              "en": "Vertical asymptotes are the opposite phenomenon: $x = a$ is a vertical asymptote when a one-sided limit at $a$ is $+\\infty$ or $-\\infty$. For rational functions, look for zeros of the denominator that do not cancel with the numerator.",
              "zh": "垂直渐近线是相反的现象：当某个单侧极限在 $a$ 处为 $+\\infty$ 或 $-\\infty$ 时，$x = a$ 是垂直渐近线。对有理函数，找分母的零点中不能与分子约去的那些。"
            },
            {
              "type": "h3",
              "en": "Rational Functions: Compare the Degrees",
              "zh": "有理函数：比较次数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Degree of numerator $<$ degree of denominator: horizontal asymptote $y = 0$",
                  "zh": "分子次数 $<$ 分母次数：水平渐近线为 $y = 0$"
                },
                {
                  "en": "Degrees equal: horizontal asymptote $y = $ ratio of leading coefficients",
                  "zh": "次数相等：水平渐近线为 $y = $ 首项系数之比"
                },
                {
                  "en": "Degree of numerator $>$ degree of denominator: no horizontal asymptote; the limit is $\\pm\\infty$ (one degree higher gives a slant asymptote)",
                  "zh": "分子次数 $>$ 分母次数：没有水平渐近线，极限为 $\\pm\\infty$（分子恰高一次时有斜渐近线）"
                }
              ]
            },
            {
              "type": "p",
              "en": "The mechanical justification: divide numerator and denominator by the highest power of $x$ in the denominator, then use $\\lim_{x \\to \\pm\\infty} \\frac{c}{x^n} = 0$.",
              "zh": "严格的推导方法：分子分母同除以分母中 $x$ 的最高次幂，然后利用 $\\lim_{x \\to \\pm\\infty} \\frac{c}{x^n} = 0$。"
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to \\infty} \\frac{3x^2 - 5x}{2x^2 + 7} = \\lim_{x \\to \\infty} \\frac{3 - \\frac{5}{x}}{2 + \\frac{7}{x^2}} = \\frac{3}{2}"
            },
            {
              "type": "h3",
              "en": "Watch the Sign When $x \\to -\\infty$",
              "zh": "当 $x \\to -\\infty$ 时注意符号"
            },
            {
              "type": "p",
              "en": "Square roots hide a sign trap: $\\sqrt{x^2} = |x|$, which equals $-x$ when $x < 0$. So expressions like $\\frac{2x}{\\sqrt{x^2 + 1}}$ approach $2$ as $x \\to \\infty$ but $-2$ as $x \\to -\\infty$ — two different horizontal asymptotes from one formula.",
              "zh": "根号里藏着一个符号陷阱：$\\sqrt{x^2} = |x|$，当 $x < 0$ 时它等于 $-x$。因此像 $\\frac{2x}{\\sqrt{x^2 + 1}}$ 这样的表达式当 $x \\to \\infty$ 时趋于 $2$，当 $x \\to -\\infty$ 时却趋于 $-2$——同一个式子给出两条不同的水平渐近线。"
            },
            {
              "type": "h3",
              "en": "Growth Rates: Who Wins the Race?",
              "zh": "增长速率：谁跑得更快？"
            },
            {
              "type": "p",
              "en": "As $x \\to \\infty$, exponential functions like $e^x$ grow faster than every power $x^n$, and every positive power of $x$ grows faster than $\\ln x$. In symbols:",
              "zh": "当 $x \\to \\infty$ 时，指数函数（如 $e^x$）比任何幂函数 $x^n$ 都增长得快，而任何正次幂的 $x$ 又比 $\\ln x$ 增长得快。用符号表示："
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\qquad \\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad (n > 0)"
            },
            {
              "type": "p",
              "en": "These rankings let you evaluate many limits at infinity instantly, and they return in BC when you test series for convergence.",
              "zh": "记住这个快慢排序可以让你瞬间判断许多无穷远处的极限，它们在 BC 后续判断级数敛散性时还会再次登场。"
            },
            {
              "type": "note",
              "en": "AP exam tip: \"limit at infinity\" and \"infinite limit\" are different objects — the first is about end behavior (horizontal asymptotes), the second about unbounded values near a point (vertical asymptotes). Multiple-choice distractors love to swap them. Also, before declaring a vertical asymptote at a denominator zero, confirm the factor does not cancel: a cancelled factor gives a hole, not an asymptote.",
              "zh": "AP 考试提示：\"无穷远处的极限\"和\"无穷极限\"是两个不同的概念——前者描述端点行为（水平渐近线），后者描述在某点附近函数值无界（垂直渐近线）。选择题的干扰项最爱把两者互换。另外，在断定分母零点处有垂直渐近线之前，务必确认该因式不能被约去：能约去的因式给出的是洞，不是渐近线。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Two Horizontal Asymptotes from One Function",
                "zh": "例题 1：一个函数的两条水平渐近线"
              },
              "problem": {
                "en": "Find all horizontal asymptotes of $f(x) = \\frac{2x}{\\sqrt{x^2 + 1}}$.",
                "zh": "求 $f(x) = \\frac{2x}{\\sqrt{x^2 + 1}}$ 的所有水平渐近线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Divide top and bottom by $|x| = \\sqrt{x^2}$. For $x > 0$, $|x| = x$:",
                  "zh": "分子分母同除以 $|x| = \\sqrt{x^2}$。当 $x > 0$ 时 $|x| = x$："
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to \\infty} \\frac{2x}{\\sqrt{x^2 + 1}} = \\lim_{x \\to \\infty} \\frac{2}{\\sqrt{1 + \\frac{1}{x^2}}} = 2"
                },
                {
                  "type": "p",
                  "en": "For $x < 0$, $|x| = -x$, so dividing introduces a negative sign and the limit as $x \\to -\\infty$ is $-2$. The horizontal asymptotes are $y = 2$ and $y = -2$. Forgetting the sign flip and answering only $y = 2$ is one of the most common asymptote errors.",
                  "zh": "当 $x < 0$ 时 $|x| = -x$，除的过程会引入一个负号，故 $x \\to -\\infty$ 时极限为 $-2$。水平渐近线为 $y = 2$ 和 $y = -2$。忘记符号翻转、只答 $y = 2$ 是渐近线问题中最常见的错误之一。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Sorting Out Asymptotes and Holes",
                "zh": "例题 2：区分渐近线与洞"
              },
              "problem": {
                "en": "Find the vertical and horizontal asymptotes of $g(x) = \\frac{x^2 - 3x + 2}{x^2 - 1}$.",
                "zh": "求 $g(x) = \\frac{x^2 - 3x + 2}{x^2 - 1}$ 的垂直渐近线和水平渐近线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor everything: $g(x) = \\frac{(x - 1)(x - 2)}{(x - 1)(x + 1)}$. The factor $x - 1$ cancels, so $x = 1$ is a hole with $\\lim_{x \\to 1} g(x) = \\frac{1 - 2}{1 + 1} = -\\frac{1}{2}$, not an asymptote.",
                  "zh": "全部因式分解：$g(x) = \\frac{(x - 1)(x - 2)}{(x - 1)(x + 1)}$。因子 $x - 1$ 可以约去，故 $x = 1$ 是一个洞，$\\lim_{x \\to 1} g(x) = \\frac{1 - 2}{1 + 1} = -\\frac{1}{2}$，不是渐近线。"
                },
                {
                  "type": "p",
                  "en": "At $x = -1$ the reduced denominator vanishes while the numerator $(-1) - 2 = -3 \\neq 0$, so $x = -1$ is a vertical asymptote.",
                  "zh": "在 $x = -1$ 处，约分后的分母为零而分子 $(-1) - 2 = -3 \\neq 0$，因此 $x = -1$ 是垂直渐近线。"
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to \\pm\\infty} \\frac{x^2 - 3x + 2}{x^2 - 1} = \\frac{1}{1} = 1"
                },
                {
                  "type": "p",
                  "en": "Equal degrees give the horizontal asymptote $y = 1$ in both directions. Summary: hole at $x = 1$, vertical asymptote $x = -1$, horizontal asymptote $y = 1$.",
                  "zh": "分子分母次数相等，两个方向的水平渐近线都是 $y = 1$。总结：$x = 1$ 处是洞，垂直渐近线为 $x = -1$，水平渐近线为 $y = 1$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2 - 5x}{2x^2 + 7}$.",
                "zh": "求 $\\lim_{x \\to \\infty} \\frac{3x^2 - 5x}{2x^2 + 7}$。"
              },
              "choices": [
                "$0$",
                "$\\frac{3}{2}$",
                "$\\infty$",
                "$-\\frac{5}{7}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The degrees are equal, so the limit is the ratio of leading coefficients, $\\frac{3}{2}$. Choice D comes from taking the ratio of the other coefficients — only the leading terms matter as $x \\to \\infty$.",
                "zh": "分子分母次数相等，极限等于首项系数之比 $\\frac{3}{2}$。选项 D 取了其余系数之比——当 $x \\to \\infty$ 时只有最高次项起作用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many horizontal asymptotes does $f(x) = \\frac{2x}{\\sqrt{x^2 + 1}}$ have? Give an integer.",
                "zh": "$f(x) = \\frac{2x}{\\sqrt{x^2 + 1}}$ 有几条水平渐近线？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "As $x \\to \\infty$ the limit is $2$; as $x \\to -\\infty$, $\\sqrt{x^2} = -x$ flips the sign and the limit is $-2$. Two different finite limits mean two horizontal asymptotes: $y = 2$ and $y = -2$.",
                "zh": "当 $x \\to \\infty$ 时极限为 $2$；当 $x \\to -\\infty$ 时 $\\sqrt{x^2} = -x$ 使符号翻转，极限为 $-2$。两个不同的有限极限对应两条水平渐近线：$y = 2$ 和 $y = -2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $y = \\frac{x - 1}{x^2 - 1}$ has a vertical asymptote at",
                "zh": "$y = \\frac{x - 1}{x^2 - 1}$ 的图象在下列哪处有垂直渐近线？"
              },
              "choices": [
                "$x = 1$ only 仅 $x = 1$",
                "$x = 1$ and $x = -1$ $x = 1$ 与 $x = -1$",
                "$x = 0$",
                "$x = -1$ only 仅 $x = -1$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Factor: $\\frac{x - 1}{(x - 1)(x + 1)} = \\frac{1}{x + 1}$ for $x \\neq 1$. The cancelled factor makes $x = 1$ a hole; only $x = -1$ leaves an unbounded limit. Choice B is the trap for anyone who reads asymptotes straight off the denominator without factoring first.",
                "zh": "因式分解：当 $x \\neq 1$ 时 $\\frac{x - 1}{(x - 1)(x + 1)} = \\frac{1}{x + 1}$。被约去的因子使 $x = 1$ 成为洞；只有 $x = -1$ 处极限无界。选项 B 是给不先分解、直接从分母读渐近线的同学准备的陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{5x^3}{e^x}$.",
                "zh": "求 $\\lim_{x \\to \\infty} \\frac{5x^3}{e^x}$。"
              },
              "choices": [
                "$0$",
                "$5$",
                "$\\infty$",
                "$\\frac{5}{e}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Exponential growth beats polynomial growth: $e^x$ eventually dwarfs any $x^n$, so the ratio tends to $0$. Choice C reverses the growth-rate hierarchy — it would be correct for $\\frac{e^x}{5x^3}$.",
                "zh": "指数增长胜过多项式增长：$e^x$ 最终远远超过任何 $x^n$，因此比值趋于 $0$。选项 C 把增长速率的排序弄反了——它是 $\\frac{e^x}{5x^3}$ 的答案。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to -\\infty} \\frac{7x - 2}{x + 5}$. Give an integer.",
                "zh": "求 $\\lim_{x \\to -\\infty} \\frac{7x - 2}{x + 5}$。请填一个整数。"
              },
              "answer": "7",
              "accept": [
                "7.0",
                "+7"
              ],
              "explanation": {
                "en": "Equal degrees: divide top and bottom by $x$ to get $\\frac{7 - \\frac{2}{x}}{1 + \\frac{5}{x}} \\to \\frac{7}{1} = 7$. The direction ($-\\infty$ vs $\\infty$) does not matter here because no square roots or odd sign behavior are involved.",
                "zh": "次数相等：分子分母同除以 $x$ 得 $\\frac{7 - \\frac{2}{x}}{1 + \\frac{5}{x}} \\to \\frac{7}{1} = 7$。这里方向（$-\\infty$ 还是 $\\infty$）无关紧要，因为式中没有根号，也没有奇偶符号问题。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which best describes $\\lim_{x \\to \\infty} \\frac{x^2 + 1}{x - 3}$?",
                "zh": "下列哪项最准确地描述 $\\lim_{x \\to \\infty} \\frac{x^2 + 1}{x - 3}$？"
              },
              "choices": [
                "$1$",
                "$0$",
                "$\\infty$",
                "$-\\frac{1}{3}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The numerator has higher degree, so the quotient grows without bound: the limit is $\\infty$ and there is no horizontal asymptote (the graph has a slant asymptote instead). Choice A tempts by matching \"leading coefficients,\" but that rule only applies when the degrees are equal.",
                "zh": "分子次数更高，商无限增大：极限为 $\\infty$，没有水平渐近线（图象有一条斜渐近线）。选项 A 用\"首项系数之比\"作诱饵，但该法则只在分子分母次数相等时适用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The horizontal asymptote of $f(x) = \\frac{6x^2 + x}{3x^2 - 2}$ is the line $y = c$. Find $c$. Give an integer.",
                "zh": "$f(x) = \\frac{6x^2 + x}{3x^2 - 2}$ 的水平渐近线为直线 $y = c$。求 $c$。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "Numerator and denominator both have degree $2$, so $c$ is the ratio of leading coefficients: $\\frac{6}{3} = 2$. The same value works for both $x \\to \\infty$ and $x \\to -\\infty$.",
                "zh": "分子分母都是二次，$c$ 等于首项系数之比：$\\frac{6}{3} = 2$。当 $x \\to \\infty$ 与 $x \\to -\\infty$ 时极限相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\lim_{x \\to \\infty} e^{-x} \\cos x$.",
                "zh": "求 $\\lim_{x \\to \\infty} e^{-x} \\cos x$。"
              },
              "choices": [
                "The limit does not exist 极限不存在",
                "$0$",
                "$1$",
                "$e^{-1}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $-e^{-x} \\leq e^{-x}\\cos x \\leq e^{-x}$ and both bounds tend to $0$ as $x \\to \\infty$, the squeeze theorem gives $0$. Choice A tempts because $\\cos x$ oscillates forever — but the decaying factor $e^{-x}$ crushes the oscillation to zero.",
                "zh": "因为 $-e^{-x} \\leq e^{-x}\\cos x \\leq e^{-x}$，且当 $x \\to \\infty$ 时两侧都趋于 $0$，由夹逼定理极限为 $0$。选项 A 之所以诱人，是因为 $\\cos x$ 永远振荡——但衰减因子 $e^{-x}$ 把振荡压缩到了零。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-differentiation-definition",
      "title": "Unit 2: Differentiation — Definition and Fundamental Properties",
      "titleZh": "第二单元：导数的定义与基本性质",
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
              "en": "A car's average speed over an hour tells you little about how fast it was going at one exact moment. Calculus answers the sharper question: what is the rate of change right now? The derivative makes \"instantaneous rate of change\" precise by squeezing an average rate over a shrinking interval through a limit.",
              "zh": "一辆车一小时内的平均速度并不能告诉你它在某个确切时刻开得多快。微积分回答的是更尖锐的问题：此时此刻的变化率是多少？导数通过极限，把在不断缩小的区间上的平均变化率\"压缩\"成精确的\"瞬时变化率\"。"
            },
            {
              "type": "h3",
              "en": "Average Rate of Change",
              "zh": "平均变化率"
            },
            {
              "type": "p",
              "en": "The average rate of change of $f$ on the interval $[a, b]$ is the slope of the secant line through $(a, f(a))$ and $(b, f(b))$:",
              "zh": "函数 $f$ 在区间 $[a, b]$ 上的平均变化率，就是过点 $(a, f(a))$ 和 $(b, f(b))$ 的割线斜率："
            },
            {
              "type": "math",
              "tex": "\\text{AROC} = \\frac{f(b) - f(a)}{b - a}"
            },
            {
              "type": "h3",
              "en": "The Limit Definition — Two Forms",
              "zh": "极限定义——两种形式"
            },
            {
              "type": "p",
              "en": "Let the interval shrink to nothing and the secant line becomes the tangent line. The derivative of $f$ at $x = a$ is defined by either of these equivalent limits (when the limit exists):",
              "zh": "让区间缩小到零，割线就变成了切线。函数 $f$ 在 $x = a$ 处的导数由下面两个等价的极限之一定义（当极限存在时）："
            },
            {
              "type": "math",
              "tex": "f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "The $h$-form is best for computing $f'(x)$ as a formula: expand $f(x+h)$, cancel, then let $h \\to 0$.",
                  "zh": "$h$ 形式最适合把 $f'(x)$ 求成一个公式：展开 $f(x+h)$，消去同类项，再令 $h \\to 0$。"
                },
                {
                  "en": "The $x \\to a$ form is best for recognizing a derivative hidden inside a limit — a favorite AP multiple-choice trick.",
                  "zh": "$x \\to a$ 形式最适合识别藏在极限里的导数——这是 AP 选择题最爱的出题手法。"
                },
                {
                  "en": "Once you have $f'(a)$, the tangent line at $x = a$ is $y = f(a) + f'(a)(x - a)$.",
                  "zh": "求出 $f'(a)$ 后，$x = a$ 处的切线方程为 $y = f(a) + f'(a)(x - a)$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: when you see a limit like $\\lim_{h \\to 0} \\frac{\\cos(\\pi + h) - \\cos(\\pi)}{h}$, do not grind through limit algebra. Recognize it as $f'(\\pi)$ for $f(x) = \\cos x$, so the answer is $-\\sin(\\pi) = 0$ in seconds.",
              "zh": "AP 考试提示：看到形如 $\\lim_{h \\to 0} \\frac{\\cos(\\pi + h) - \\cos(\\pi)}{h}$ 的极限时，不要硬算极限。把它识别为 $f(x) = \\cos x$ 在 $\\pi$ 处的导数 $f'(\\pi)$，几秒钟就能得出答案 $-\\sin(\\pi) = 0$。"
            },
            {
              "type": "h3",
              "en": "Estimating Derivatives from Tables and Graphs",
              "zh": "由表格和图象估计导数"
            },
            {
              "type": "p",
              "en": "When $f$ is given only by a table, estimate $f'(a)$ with the slope between the two table points closest to (ideally surrounding) $x = a$. On a graph, read the derivative as the steepness of the curve: sketch the tangent line by eye and estimate its slope from convenient points.",
              "zh": "当 $f$ 只以表格形式给出时，用最靠近（最好是夹住）$x = a$ 的两个表格点之间的斜率来估计 $f'(a)$。在图象上，导数就是曲线的陡峭程度：目测画出切线，再用方便读数的点估计其斜率。"
            },
            {
              "type": "h3",
              "en": "Differentiability and Continuity",
              "zh": "可导性与连续性"
            },
            {
              "type": "p",
              "en": "Differentiability is a stronger condition than continuity: if $f$ is differentiable at $a$, then $f$ is continuous at $a$. The converse fails — a function can be continuous yet fail to have a derivative. On the AP exam, know the three classic failure shapes:",
              "zh": "可导是比连续更强的条件：若 $f$ 在 $a$ 处可导，则 $f$ 在 $a$ 处连续。反之不成立——函数可以连续却没有导数。AP 考试中要认得三种经典的\"不可导\"形状："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Corner: left and right difference-quotient limits exist but disagree, like $f(x) = |x|$ at $x = 0$ (slopes $-1$ and $1$).",
                  "zh": "折角（corner）：左右差商极限都存在但不相等，如 $f(x) = |x|$ 在 $x = 0$ 处（斜率分别为 $-1$ 和 $1$）。"
                },
                {
                  "en": "Cusp: the slopes blow up to $+\\infty$ on one side and $-\\infty$ on the other, like $f(x) = x^{2/3}$ at $x = 0$.",
                  "zh": "尖点（cusp）：斜率在一侧趋于 $+\\infty$，另一侧趋于 $-\\infty$，如 $f(x) = x^{2/3}$ 在 $x = 0$ 处。"
                },
                {
                  "en": "Vertical tangent: the curve is smooth but the slope becomes infinite, like $f(x) = x^{1/3}$ at $x = 0$.",
                  "zh": "垂直切线：曲线光滑但斜率趋于无穷，如 $f(x) = x^{1/3}$ 在 $x = 0$ 处。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: \"continuous therefore differentiable\" is FALSE, but its contrapositive partner \"not continuous therefore not differentiable\" is TRUE. If a function has a jump or removable discontinuity at $a$, it automatically has no derivative there — no further checking needed.",
              "zh": "常见错误：\"连续所以可导\"是错误的，但\"不连续所以不可导\"是正确的。如果函数在 $a$ 处有跳跃间断或可去间断，那里就自动没有导数——无需再做任何检验。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Using the Limit Definition",
                "zh": "例题 1：用极限定义求导"
              },
              "problem": {
                "en": "Use the limit definition to find $f'(x)$ for $f(x) = x^2 - 3x$, then write the equation of the tangent line at $x = 2$.",
                "zh": "用极限定义求 $f(x) = x^2 - 3x$ 的导数 $f'(x)$，并写出 $x = 2$ 处的切线方程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set up the difference quotient and expand $f(x+h) = (x+h)^2 - 3(x+h)$:",
                  "zh": "写出差商并展开 $f(x+h) = (x+h)^2 - 3(x+h)$："
                },
                {
                  "type": "math",
                  "tex": "f'(x) = \\lim_{h \\to 0} \\frac{(x^2 + 2xh + h^2 - 3x - 3h) - (x^2 - 3x)}{h} = \\lim_{h \\to 0} \\frac{h(2x + h - 3)}{h}"
                },
                {
                  "type": "p",
                  "en": "Cancel $h$ and let $h \\to 0$ to get $f'(x) = 2x - 3$. At $x = 2$: $f(2) = -2$ and $f'(2) = 1$, so the tangent line is $y = -2 + 1(x - 2)$, i.e. $y = x - 4$.",
                  "zh": "约去 $h$ 后令 $h \\to 0$，得 $f'(x) = 2x - 3$。在 $x = 2$ 处：$f(2) = -2$，$f'(2) = 1$，所以切线为 $y = -2 + 1(x - 2)$，即 $y = x - 4$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Estimating from a Table",
                "zh": "例题 2：由表格估计导数"
              },
              "problem": {
                "en": "A differentiable function $f$ satisfies $f(1.8) = 6.42$, $f(2.0) = 7.10$, and $f(2.2) = 7.86$. Estimate $f'(2)$.",
                "zh": "可导函数 $f$ 满足 $f(1.8) = 6.42$，$f(2.0) = 7.10$，$f(2.2) = 7.86$。估计 $f'(2)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The best estimate uses the two points that surround $x = 2$ (a symmetric difference quotient):",
                  "zh": "最佳估计使用夹住 $x = 2$ 的两个点（对称差商）："
                },
                {
                  "type": "math",
                  "tex": "f'(2) \\approx \\frac{f(2.2) - f(1.8)}{2.2 - 1.8} = \\frac{7.86 - 6.42}{0.4} = 3.6"
                },
                {
                  "type": "p",
                  "en": "On an FRQ, always show the difference quotient with the table values plugged in — the setup earns a point even before the arithmetic. Also include units when the context gives them.",
                  "zh": "在解答题中，一定要写出代入表格数值后的差商——这个式子本身就能得分，甚至在算出数值之前。若题目有单位，别忘了带上单位。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The limit $\\lim_{h \\to 0} \\frac{(2+h)^3 - 8}{h}$ equals",
                "zh": "极限 $\\lim_{h \\to 0} \\frac{(2+h)^3 - 8}{h}$ 等于"
              },
              "choices": [
                "$8$",
                "$12$",
                "$6$",
                "$0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "This is the limit definition of $f'(2)$ for $f(x) = x^3$, since $8 = 2^3 = f(2)$. So the value is $f'(2) = 3(2)^2 = 12$. Choice A is tempting because $8$ appears in the expression, but $8$ is $f(2)$, not the derivative.",
                "zh": "这是 $f(x) = x^3$ 在 $x = 2$ 处导数的极限定义，因为 $8 = 2^3 = f(2)$。所以极限值为 $f'(2) = 3(2)^2 = 12$。选项 A 之所以诱人，是因为式子里出现了 $8$，但 $8$ 是 $f(2)$，不是导数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the average rate of change of $f(x) = x^2$ on the interval $[1, 4]$. Give an integer.",
                "zh": "求 $f(x) = x^2$ 在区间 $[1, 4]$ 上的平均变化率。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "AROC $= \\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = 5$. This is a secant slope — do not confuse it with the instantaneous rate $f'(x) = 2x$ at either endpoint.",
                "zh": "平均变化率 $= \\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = 5$。这是割线斜率——不要把它与端点处的瞬时变化率 $f'(x) = 2x$ 混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = |x - 3|$. Which statement is true at $x = 3$?",
                "zh": "设 $f(x) = |x - 3|$。关于 $x = 3$ 处，下列哪个说法正确？"
              },
              "choices": [
                "$f$ is neither continuous nor differentiable",
                "$f$ is differentiable but not continuous",
                "$f$ is continuous but not differentiable",
                "$f$ is both continuous and differentiable"
              ],
              "answer": 2,
              "explanation": {
                "en": "The graph is an unbroken V, so $f$ is continuous, but the corner at $x = 3$ gives one-sided slopes $-1$ and $+1$ that disagree, so $f'(3)$ does not exist. Choice B is impossible in principle: differentiability always implies continuity.",
                "zh": "图象是一个连续不断的 V 形，所以 $f$ 连续；但 $x = 3$ 处的折角使左右斜率分别为 $-1$ 和 $+1$，不相等，故 $f'(3)$ 不存在。选项 B 在原则上就不可能：可导必连续。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A table gives $f(1.9) = 4.61$ and $f(2.1) = 5.41$ for a differentiable function $f$. Use these values to estimate $f'(2)$. Give an integer.",
                "zh": "表格给出可导函数 $f$ 的值：$f(1.9) = 4.61$，$f(2.1) = 5.41$。用这些数据估计 $f'(2)$。请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "Use the difference quotient across the surrounding points: $\\frac{5.41 - 4.61}{2.1 - 1.9} = \\frac{0.80}{0.2} = 4$. Dividing by the full width $0.2$ (not $0.1$) is the step students most often botch.",
                "zh": "用夹住 $x=2$ 的两点作差商：$\\frac{5.41 - 4.61}{2.1 - 1.9} = \\frac{0.80}{0.2} = 4$。要除以整个区间宽度 $0.2$（而不是 $0.1$），这是学生最容易出错的一步。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the equation of the line tangent to $f(x) = x^2$ at $x = 3$?",
                "zh": "$f(x) = x^2$ 在 $x = 3$ 处的切线方程是什么？"
              },
              "choices": [
                "$y = 6x - 9$",
                "$y = 6x + 9$",
                "$y = 9x - 6$",
                "$y = 6x$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Slope $f'(3) = 6$ and point $(3, 9)$ give $y = 9 + 6(x - 3) = 6x - 9$. Choice B has the right slope but forces the line through the wrong intercept — always check that the tangent line actually passes through the point of tangency $(3, 9)$.",
                "zh": "斜率 $f'(3) = 6$，切点 $(3, 9)$，所以 $y = 9 + 6(x - 3) = 6x - 9$。选项 B 斜率正确但截距错误——一定要检验切线确实经过切点 $(3, 9)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which limit equals $f'(5)$ for a differentiable function $f$?",
                "zh": "对可导函数 $f$，下列哪个极限等于 $f'(5)$？"
              },
              "choices": [
                "$\\lim_{x \\to 5} \\frac{f(x) - f(5)}{x + 5}$",
                "$\\lim_{h \\to 0} \\frac{f(5+h) - f(5)}{5}$",
                "$\\lim_{x \\to 5} \\frac{f(x) + f(5)}{x - 5}$",
                "$\\lim_{x \\to 5} \\frac{f(x) - f(5)}{x - 5}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The alternate form of the definition is $f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$ with subtraction in both the numerator and the denominator. The other choices each corrupt one piece: dividing by $x + 5$, dividing by the constant $5$, or adding instead of subtracting $f(5)$.",
                "zh": "定义的另一种形式是 $f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$，分子分母都是相减。其余选项各错一处：除以 $x + 5$、除以常数 $5$，或把减 $f(5)$ 写成了加。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Use the limit definition (or any method) to find $f'(2)$ for $f(x) = \\frac{1}{x}$. Give your answer as a fraction a/b.",
                "zh": "求 $f(x) = \\frac{1}{x}$ 在 $x = 2$ 处的导数 $f'(2)$（可用极限定义或其他方法）。答案写成分数 a/b 的形式。"
              },
              "answer": "-1/4",
              "accept": [
                "-0.25"
              ],
              "explanation": {
                "en": "From the definition: $\\lim_{h \\to 0} \\frac{\\frac{1}{2+h} - \\frac{1}{2}}{h} = \\lim_{h \\to 0} \\frac{-h}{2h(2+h)} = -\\frac{1}{4}$. Equivalently $f'(x) = -x^{-2}$, so $f'(2) = -\\frac{1}{4}$. The negative sign reflects that $\\frac{1}{x}$ is decreasing.",
                "zh": "由定义：$\\lim_{h \\to 0} \\frac{\\frac{1}{2+h} - \\frac{1}{2}}{h} = \\lim_{h \\to 0} \\frac{-h}{2h(2+h)} = -\\frac{1}{4}$。等价地，$f'(x) = -x^{-2}$，故 $f'(2) = -\\frac{1}{4}$。负号反映了 $\\frac{1}{x}$ 是递减的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At $x = 0$, the function $f(x) = x^{1/3}$ is",
                "zh": "在 $x = 0$ 处，函数 $f(x) = x^{1/3}$"
              },
              "choices": [
                "discontinuous, so not differentiable",
                "continuous, with a vertical tangent, so not differentiable",
                "continuous and differentiable with $f'(0) = 0$",
                "continuous, with a corner, so not differentiable"
              ],
              "answer": 1,
              "explanation": {
                "en": "$f(x) = x^{1/3}$ is continuous everywhere, and $f'(x) = \\frac{1}{3}x^{-2/3} \\to +\\infty$ as $x \\to 0$ from both sides: the graph has a vertical tangent at the origin, so $f'(0)$ does not exist. Choice C tempts students who think \"smooth-looking graph means differentiable\" — infinite slope also destroys differentiability.",
                "zh": "$f(x) = x^{1/3}$ 处处连续，而 $f'(x) = \\frac{1}{3}x^{-2/3}$ 在 $x \\to 0$ 时从两侧都趋于 $+\\infty$：图象在原点有垂直切线，所以 $f'(0)$ 不存在。选项 C 迷惑那些认为\"图象看着光滑就可导\"的学生——斜率无穷大同样使函数不可导。"
              }
            }
          ]
        },
        {
          "id": "basic-differentiation-rules",
          "title": "Basic Differentiation Rules",
          "titleZh": "基本求导法则",
          "content": [
            {
              "type": "h2",
              "en": "From Limits to Rules",
              "zh": "从极限到法则"
            },
            {
              "type": "p",
              "en": "Computing every derivative from the limit definition would be exhausting. The differentiation rules — proved once from the definition — turn derivatives into fast, reliable algebra. Mastering them to the point of automaticity is the single highest-payoff skill for the entire AP exam.",
              "zh": "每个导数都用极限定义来算会让人筋疲力尽。求导法则——由定义一次性证明——把求导变成快速、可靠的代数运算。把这些法则练到不假思索的程度，是整场 AP 考试回报最高的一项技能。"
            },
            {
              "type": "h3",
              "en": "Power Rule, Constants, and Sums",
              "zh": "幂法则、常数与和"
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx} x^n = n x^{n-1}, \\qquad \\frac{d}{dx}\\big[c f(x)\\big] = c f'(x), \\qquad \\frac{d}{dx}\\big[f(x) \\pm g(x)\\big] = f'(x) \\pm g'(x)"
            },
            {
              "type": "p",
              "en": "The power rule works for every real exponent $n$, but you must rewrite first: radicals become fractional powers and reciprocals become negative powers.",
              "zh": "幂法则对任意实数指数 $n$ 都成立，但必须先改写：根式写成分数指数，倒数写成负指数。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\sqrt{x} = x^{1/2}$, so $\\frac{d}{dx}\\sqrt{x} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$",
                  "zh": "$\\sqrt{x} = x^{1/2}$，所以 $\\frac{d}{dx}\\sqrt{x} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$"
                },
                {
                  "en": "$\\frac{4}{x^3} = 4x^{-3}$, so its derivative is $-12x^{-4} = -\\frac{12}{x^4}$",
                  "zh": "$\\frac{4}{x^3} = 4x^{-3}$，其导数为 $-12x^{-4} = -\\frac{12}{x^4}$"
                },
                {
                  "en": "Constants vanish: $\\frac{d}{dx}(7) = 0$, since a horizontal line has slope zero.",
                  "zh": "常数的导数为零：$\\frac{d}{dx}(7) = 0$，因为水平线的斜率是零。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Product and Quotient Rules",
              "zh": "乘积法则与商法则"
            },
            {
              "type": "math",
              "tex": "(uv)' = u'v + uv', \\qquad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"
            },
            {
              "type": "note",
              "en": "Common mistake: the derivative of a product is NOT the product of the derivatives. Check with $x \\cdot x = x^2$: the true derivative is $2x$, but multiplying derivatives gives $1 \\cdot 1 = 1$. In the quotient rule the order of subtraction matters — \"low d-high minus high d-low, over low squared.\"",
              "zh": "常见错误：乘积的导数不是导数的乘积。用 $x \\cdot x = x^2$ 检验：真正的导数是 $2x$，而导数相乘只得 $1 \\cdot 1 = 1$。商法则中相减的顺序不能颠倒——\"分母乘分子的导数，减去分子乘分母的导数，再除以分母的平方\"。"
            },
            {
              "type": "h3",
              "en": "The Four Building-Block Derivatives",
              "zh": "四个基石导数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\frac{d}{dx} \\sin x = \\cos x$ and $\\frac{d}{dx} \\cos x = -\\sin x$ (only cosine picks up the minus sign)",
                  "zh": "$\\frac{d}{dx} \\sin x = \\cos x$，$\\frac{d}{dx} \\cos x = -\\sin x$（只有余弦求导带负号）"
                },
                {
                  "en": "$\\frac{d}{dx} e^x = e^x$ — the exponential function is its own derivative",
                  "zh": "$\\frac{d}{dx} e^x = e^x$——指数函数的导数是它自己"
                },
                {
                  "en": "$\\frac{d}{dx} \\ln x = \\frac{1}{x}$ for $x > 0$",
                  "zh": "当 $x > 0$ 时，$\\frac{d}{dx} \\ln x = \\frac{1}{x}$"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Higher-Order Derivatives",
              "zh": "高阶导数"
            },
            {
              "type": "p",
              "en": "Differentiating again gives the second derivative, written $f''(x)$, $y''$, or $\\frac{d^2y}{dx^2}$; the $n$th derivative is written $f^{(n)}(x)$ or $\\frac{d^n y}{dx^n}$. In motion problems, if $s(t)$ is position then $s'(t)$ is velocity and $s''(t)$ is acceleration.",
              "zh": "再求一次导得到二阶导数，记作 $f''(x)$、$y''$ 或 $\\frac{d^2y}{dx^2}$；$n$ 阶导数记作 $f^{(n)}(x)$ 或 $\\frac{d^n y}{dx^n}$。在运动问题中，若 $s(t)$ 是位置，则 $s'(t)$ 是速度，$s''(t)$ 是加速度。"
            },
            {
              "type": "note",
              "en": "AP exam tip: before differentiating, spend five seconds rewriting. Turning $\\frac{x^3 + 2}{x}$ into $x^2 + 2x^{-1}$ lets you use the power rule instead of the quotient rule — faster and far less error-prone. Only reach for the quotient rule when the denominator cannot be cleared.",
              "zh": "AP 考试提示：动笔求导前先花五秒钟改写。把 $\\frac{x^3 + 2}{x}$ 改写成 $x^2 + 2x^{-1}$，就能用幂法则代替商法则——更快也更不容易出错。只有当分母无法消去时才使用商法则。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Rewrite, Then Apply the Power Rule",
                "zh": "例题 1：先改写，再用幂法则"
              },
              "problem": {
                "en": "Find $f'(x)$ and $f'(1)$ for $f(x) = 3x^4 - 5\\sqrt{x} + \\frac{2}{x^2}$.",
                "zh": "设 $f(x) = 3x^4 - 5\\sqrt{x} + \\frac{2}{x^2}$，求 $f'(x)$ 和 $f'(1)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rewrite with exponents: $f(x) = 3x^4 - 5x^{1/2} + 2x^{-2}$. Now differentiate term by term:",
                  "zh": "先用指数改写：$f(x) = 3x^4 - 5x^{1/2} + 2x^{-2}$。再逐项求导："
                },
                {
                  "type": "math",
                  "tex": "f'(x) = 12x^3 - \\frac{5}{2}x^{-1/2} - 4x^{-3} = 12x^3 - \\frac{5}{2\\sqrt{x}} - \\frac{4}{x^3}"
                },
                {
                  "type": "p",
                  "en": "At $x = 1$: $f'(1) = 12 - \\frac{5}{2} - 4 = \\frac{11}{2}$. Watch the sign on the last term: the exponent $-2$ multiplies down and turns $+2x^{-2}$ into $-4x^{-3}$.",
                  "zh": "代入 $x = 1$：$f'(1) = 12 - \\frac{5}{2} - 4 = \\frac{11}{2}$。注意最后一项的符号：指数 $-2$ 乘下来后，$+2x^{-2}$ 变成了 $-4x^{-3}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Product Rule and a Second Derivative",
                "zh": "例题 2：乘积法则与二阶导数"
              },
              "problem": {
                "en": "Let $h(x) = x e^x$. Find $h'(x)$ and $h''(x)$.",
                "zh": "设 $h(x) = x e^x$，求 $h'(x)$ 和 $h''(x)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Product rule with $u = x$, $v = e^x$:",
                  "zh": "取 $u = x$，$v = e^x$，用乘积法则："
                },
                {
                  "type": "math",
                  "tex": "h'(x) = 1 \\cdot e^x + x \\cdot e^x = (1 + x)e^x"
                },
                {
                  "type": "p",
                  "en": "Differentiate again — the result is itself a product, so apply the product rule once more:",
                  "zh": "再求一次导——结果本身又是乘积，再用一次乘积法则："
                },
                {
                  "type": "math",
                  "tex": "h''(x) = 1 \\cdot e^x + (1 + x)e^x = (2 + x)e^x"
                },
                {
                  "type": "p",
                  "en": "A useful pattern check: each derivative of $x e^x$ keeps the factor $e^x$ and increases the constant by one, so $h^{(n)}(x) = (n + x)e^x$.",
                  "zh": "一个有用的规律检验：$x e^x$ 每求一次导都保留因子 $e^x$，常数增加 1，因此 $h^{(n)}(x) = (n + x)e^x$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is $\\frac{d}{dx}\\left( x^2 \\sin x \\right)$?",
                "zh": "$\\frac{d}{dx}\\left( x^2 \\sin x \\right)$ 等于多少？"
              },
              "choices": [
                "$2x \\cos x$",
                "$2x \\sin x - x^2 \\cos x$",
                "$2x \\sin x + x^2 \\cos x$",
                "$x^2 \\sin x + 2x \\cos x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Product rule: $(x^2)' \\sin x + x^2 (\\sin x)' = 2x \\sin x + x^2 \\cos x$. Choice A is the trap of multiplying the two derivatives instead of using the product rule.",
                "zh": "乘积法则：$(x^2)' \\sin x + x^2 (\\sin x)' = 2x \\sin x + x^2 \\cos x$。选项 A 是\"两个导数直接相乘\"的陷阱，而不是乘积法则。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = \\sqrt{x}$, find $f'(4)$. Give your answer as a fraction a/b.",
                "zh": "若 $f(x) = \\sqrt{x}$，求 $f'(4)$。答案写成分数 a/b 的形式。"
              },
              "answer": "1/4",
              "accept": [
                "0.25"
              ],
              "explanation": {
                "en": "Rewrite: $f(x) = x^{1/2}$, so $f'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. At $x = 4$: $\\frac{1}{2 \\cdot 2} = \\frac{1}{4}$. Forgetting to subtract 1 from the exponent is the classic error here.",
                "zh": "改写：$f(x) = x^{1/2}$，故 $f'(x) = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$。代入 $x = 4$：$\\frac{1}{2 \\cdot 2} = \\frac{1}{4}$。这里的经典错误是忘记把指数减 1。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\frac{d}{dx}\\left( \\frac{e^x}{x} \\right)$?",
                "zh": "$\\frac{d}{dx}\\left( \\frac{e^x}{x} \\right)$ 等于多少？"
              },
              "choices": [
                "$\\frac{e^x (x - 1)}{x^2}$",
                "$\\frac{e^x (1 - x)}{x^2}$",
                "$\\frac{e^x}{x^2}$",
                "$e^x$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Quotient rule: $\\frac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\frac{e^x(x - 1)}{x^2}$. Choice B reverses the subtraction — the most common quotient-rule slip. Choice D forgets the denominator entirely.",
                "zh": "商法则：$\\frac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\frac{e^x(x - 1)}{x^2}$。选项 B 把相减顺序颠倒了——这是商法则最常见的失误。选项 D 则完全忽略了分母。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = 2x^3 - 6x$. Find $f''(2)$. Give an integer.",
                "zh": "设 $f(x) = 2x^3 - 6x$，求 $f''(2)$。请填一个整数。"
              },
              "answer": "24",
              "accept": [
                "24.0",
                "+24"
              ],
              "explanation": {
                "en": "First derivative: $f'(x) = 6x^2 - 6$. Second derivative: $f''(x) = 12x$, so $f''(2) = 24$. Stopping after one differentiation and answering $f'(2) = 18$ is the standard mistake on second-derivative questions.",
                "zh": "一阶导数：$f'(x) = 6x^2 - 6$。二阶导数：$f''(x) = 12x$，故 $f''(2) = 24$。二阶导数题的典型错误是只求一次导就作答 $f'(2) = 18$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The value of $\\frac{d}{dx}(\\cos x)$ at $x = \\frac{\\pi}{6}$ is",
                "zh": "$\\frac{d}{dx}(\\cos x)$ 在 $x = \\frac{\\pi}{6}$ 处的值为"
              },
              "choices": [
                "$\\frac{\\sqrt{3}}{2}$",
                "$\\frac{1}{2}$",
                "$-\\frac{\\sqrt{3}}{2}$",
                "$-\\frac{1}{2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Since $\\frac{d}{dx}\\cos x = -\\sin x$, the value is $-\\sin\\frac{\\pi}{6} = -\\frac{1}{2}$. Choice B drops the minus sign, and choice C evaluates $-\\cos$ instead of $-\\sin$ — both are frequent unit-circle slips.",
                "zh": "因为 $\\frac{d}{dx}\\cos x = -\\sin x$，所以值为 $-\\sin\\frac{\\pi}{6} = -\\frac{1}{2}$。选项 B 丢了负号，选项 C 把 $-\\sin$ 算成了 $-\\cos$——两者都是常见的单位圆失误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^3 \\ln x$. Find $f'(1)$. Give an integer.",
                "zh": "设 $f(x) = x^3 \\ln x$，求 $f'(1)$。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "+1"
              ],
              "explanation": {
                "en": "Product rule: $f'(x) = 3x^2 \\ln x + x^3 \\cdot \\frac{1}{x} = 3x^2 \\ln x + x^2$. At $x = 1$: $\\ln 1 = 0$, so $f'(1) = 0 + 1 = 1$. Students who forget that $\\ln 1 = 0$ often report $4$.",
                "zh": "乘积法则：$f'(x) = 3x^2 \\ln x + x^3 \\cdot \\frac{1}{x} = 3x^2 \\ln x + x^2$。代入 $x = 1$：$\\ln 1 = 0$，故 $f'(1) = 0 + 1 = 1$。忘记 $\\ln 1 = 0$ 的学生常会误答 $4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f(x) = \\sin x$, then the fourth derivative $f^{(4)}(x) =$",
                "zh": "若 $f(x) = \\sin x$，则四阶导数 $f^{(4)}(x) =$"
              },
              "choices": [
                "$\\cos x$",
                "$\\sin x$",
                "$-\\sin x$",
                "$-\\cos x$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The derivatives of sine cycle with period 4: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. After four steps you return to $\\sin x$. Choice C is what you get after only two differentiations.",
                "zh": "正弦的导数以 4 为周期循环：$\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$。求导四次回到 $\\sin x$。选项 C 是只求两次导的结果。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\frac{d}{dx}\\left( \\frac{x^3 + 4}{x} \\right)$? (Hint: rewrite before differentiating.)",
                "zh": "$\\frac{d}{dx}\\left( \\frac{x^3 + 4}{x} \\right)$ 等于多少？（提示：求导前先改写。）"
              },
              "choices": [
                "$2x + \\frac{4}{x^2}$",
                "$2x - \\frac{4}{x^2}$",
                "$3x^2 - \\frac{4}{x^2}$",
                "$\\frac{3x^2}{1}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Rewrite as $x^2 + 4x^{-1}$, then differentiate: $2x - 4x^{-2} = 2x - \\frac{4}{x^2}$. Choice A misses the sign flip from the negative exponent; choice C differentiates the numerator only and ignores the quotient structure.",
                "zh": "改写为 $x^2 + 4x^{-1}$ 再求导：$2x - 4x^{-2} = 2x - \\frac{4}{x^2}$。选项 A 漏掉了负指数带来的符号变化；选项 C 只对分子求导，忽略了商的结构。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-composite-implicit-inverse",
      "title": "Unit 3: Differentiation — Composite, Implicit, and Inverse Functions",
      "titleZh": "第三单元：复合函数、隐函数与反函数求导",
      "lessons": [
        {
          "id": "derivative-rules-recap",
          "title": "Derivative Rules Recap",
          "titleZh": "求导法则速览",
          "content": [
            {
              "type": "h2",
              "en": "Why Review Derivatives First?",
              "zh": "为什么先复习导数？"
            },
            {
              "type": "p",
              "en": "Everything in BC — integration by parts, parametric slopes, series built from derivatives — rests on fluent differentiation. This fast-paced lesson compresses the AB derivative toolkit into one page so you can compute without hesitation.",
              "zh": "BC 的一切内容——分部积分、参数曲线的斜率、由导数构造的级数——都建立在熟练求导的基础上。本节课快节奏地把 AB 的求导工具浓缩成一页，让你计算时毫不犹豫。"
            },
            {
              "type": "h3",
              "en": "The Core Rules",
              "zh": "核心法则"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Power rule: $\\frac{d}{dx} x^n = n x^{n-1}$",
                  "zh": "幂法则：$\\frac{d}{dx} x^n = n x^{n-1}$"
                },
                {
                  "en": "Product rule: $(uv)' = u'v + uv'$",
                  "zh": "乘积法则：$(uv)' = u'v + uv'$"
                },
                {
                  "en": "Quotient rule: $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$",
                  "zh": "商法则：$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$"
                },
                {
                  "en": "Chain rule: $\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)$",
                  "zh": "链式法则：$\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)$"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Transcendental Derivatives You Must Memorize",
              "zh": "必须熟记的超越函数导数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\frac{d}{dx} \\sin x = \\cos x$, $\\frac{d}{dx} \\cos x = -\\sin x$, $\\frac{d}{dx} \\tan x = \\sec^2 x$",
                  "zh": "$\\frac{d}{dx} \\sin x = \\cos x$，$\\frac{d}{dx} \\cos x = -\\sin x$，$\\frac{d}{dx} \\tan x = \\sec^2 x$"
                },
                {
                  "en": "$\\frac{d}{dx} e^x = e^x$ and $\\frac{d}{dx} \\ln x = \\frac{1}{x}$",
                  "zh": "$\\frac{d}{dx} e^x = e^x$ 以及 $\\frac{d}{dx} \\ln x = \\frac{1}{x}$"
                },
                {
                  "en": "$\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1-x^2}}$ and $\\frac{d}{dx} \\arctan x = \\frac{1}{1+x^2}$",
                  "zh": "$\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1-x^2}}$ 以及 $\\frac{d}{dx} \\arctan x = \\frac{1}{1+x^2}$"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Implicit Differentiation",
              "zh": "隐函数求导"
            },
            {
              "type": "p",
              "en": "When $y$ is defined implicitly by an equation in $x$ and $y$, differentiate both sides with respect to $x$, remembering that every $y$ carries a hidden $\\frac{dy}{dx}$ by the chain rule, then solve for $\\frac{dy}{dx}$.",
              "zh": "当 $y$ 由一个含 $x$ 和 $y$ 的方程隐式定义时，对方程两边关于 $x$ 求导。根据链式法则，每个 $y$ 都带着一个隐藏的 $\\frac{dy}{dx}$，最后解出 $\\frac{dy}{dx}$ 即可。"
            },
            {
              "type": "note",
              "en": "AP exam tip: most lost points on derivative questions come from a forgotten chain-rule factor. Before moving on, ask: \"Is the inside function just $x$?\" If not, multiply by the inside derivative.",
              "zh": "AP 考试提示：求导题的大多数失分来自漏掉链式法则的因子。继续计算前先问自己：\"内层函数只是 $x$ 吗？\"如果不是，就要乘上内层的导数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Chain + Product Combo",
                "zh": "例题 1：链式与乘积法则的组合"
              },
              "problem": {
                "en": "Find $\\frac{dy}{dx}$ if $y = x^2 e^{3x}$.",
                "zh": "若 $y = x^2 e^{3x}$，求 $\\frac{dy}{dx}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the product rule with $u = x^2$ and $v = e^{3x}$. Note $v' = 3e^{3x}$ by the chain rule.",
                  "zh": "用乘积法则，取 $u = x^2$，$v = e^{3x}$。由链式法则得 $v' = 3e^{3x}$。"
                },
                {
                  "type": "math",
                  "tex": "y' = 2x e^{3x} + x^2 \\cdot 3e^{3x} = x e^{3x}(2 + 3x)"
                },
                {
                  "type": "p",
                  "en": "Factoring the answer is good practice: the AP exam often asks where $y' = 0$, and the factored form makes the critical points $x = 0$ and $x = -\\frac{2}{3}$ obvious.",
                  "zh": "把结果因式分解是个好习惯：AP 考试常问 $y' = 0$ 的位置，因式分解后临界点 $x = 0$ 和 $x = -\\frac{2}{3}$ 一目了然。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Implicit Differentiation",
                "zh": "例题 2：隐函数求导"
              },
              "problem": {
                "en": "Find the slope of the curve $x^2 + xy + y^2 = 7$ at the point $(1, 2)$.",
                "zh": "求曲线 $x^2 + xy + y^2 = 7$ 在点 $(1, 2)$ 处的斜率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate every term with respect to $x$, using the product rule on $xy$:",
                  "zh": "对每一项关于 $x$ 求导，其中 $xy$ 一项要用乘积法则："
                },
                {
                  "type": "math",
                  "tex": "2x + \\left( y + x\\frac{dy}{dx} \\right) + 2y\\frac{dy}{dx} = 0"
                },
                {
                  "type": "p",
                  "en": "Solve for the derivative: $\\frac{dy}{dx} = \\frac{-2x - y}{x + 2y}$. At $(1, 2)$ this gives $\\frac{-2 - 2}{1 + 4} = -\\frac{4}{5}$.",
                  "zh": "解出导数：$\\frac{dy}{dx} = \\frac{-2x - y}{x + 2y}$。代入 $(1, 2)$ 得 $\\frac{-2 - 2}{1 + 4} = -\\frac{4}{5}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is $\\frac{d}{dx} \\left( 5x^4 - 3x + 2 \\right)$?",
                "zh": "$\\frac{d}{dx} \\left( 5x^4 - 3x + 2 \\right)$ 等于多少？"
              },
              "choices": [
                "$20x^3 - 3$",
                "$20x^3 - 3x$",
                "$5x^3 - 3$",
                "$20x^3 + 2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Differentiate term by term with the power rule: $\\frac{d}{dx} 5x^4 = 20x^3$, $\\frac{d}{dx}(-3x) = -3$, and the constant $2$ vanishes.",
                "zh": "用幂法则逐项求导：$\\frac{d}{dx} 5x^4 = 20x^3$，$\\frac{d}{dx}(-3x) = -3$，常数 $2$ 的导数为零。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = \\sin(4x)$, find $f'\\left(\\frac{\\pi}{4}\\right)$. Give an integer.",
                "zh": "若 $f(x) = \\sin(4x)$，求 $f'\\left(\\frac{\\pi}{4}\\right)$。请填一个整数。"
              },
              "answer": "-4",
              "accept": [
                "-4.0"
              ],
              "explanation": {
                "en": "Chain rule: $f'(x) = 4\\cos(4x)$, so $f'(\\pi/4) = 4\\cos(\\pi) = 4(-1) = -4$. The factor of 4 comes from the inside function $4x$.",
                "zh": "链式法则：$f'(x) = 4\\cos(4x)$，故 $f'(\\pi/4) = 4\\cos(\\pi) = 4(-1) = -4$。因子 4 来自内层函数 $4x$ 的导数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\frac{d}{dx} \\left( \\frac{x}{x^2 + 1} \\right)$?",
                "zh": "$\\frac{d}{dx} \\left( \\frac{x}{x^2 + 1} \\right)$ 等于多少？"
              },
              "choices": [
                "$\\frac{1 - x^2}{(x^2+1)^2}$",
                "$\\frac{1}{2x}$",
                "$\\frac{x^2 - 1}{(x^2+1)^2}$",
                "$\\frac{3x^2 + 1}{(x^2+1)^2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Quotient rule: numerator $= (1)(x^2+1) - x(2x) = 1 - x^2$, all over $(x^2+1)^2$. A common error is subtracting in the wrong order — remember \"low d-high minus high d-low.\"",
                "zh": "商法则：分子为 $(1)(x^2+1) - x(2x) = 1 - x^2$，分母为 $(x^2+1)^2$。常见错误是相减顺序颠倒——记住\"分母乘分子导数减去分子乘分母导数\"。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $y = \\ln(x^2 + 4)$, then $\\frac{dy}{dx} =$",
                "zh": "若 $y = \\ln(x^2 + 4)$，则 $\\frac{dy}{dx} =$"
              },
              "choices": [
                "$\\frac{2x}{x^2 + 4}$",
                "$\\frac{1}{x^2 + 4}$",
                "$\\frac{2x}{x^2}$",
                "$\\frac{1}{2x}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The derivative of $\\ln(u)$ is $\\frac{u'}{u}$. Here $u = x^2 + 4$ and $u' = 2x$, giving $\\frac{2x}{x^2+4}$. Choice B forgets the chain-rule factor $2x$.",
                "zh": "$\\ln(u)$ 的导数是 $\\frac{u'}{u}$。这里 $u = x^2 + 4$，$u' = 2x$，所以答案是 $\\frac{2x}{x^2+4}$。选项 B 漏掉了链式法则的因子 $2x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $x^2 + y^2 = 25$, find $\\frac{dy}{dx}$ at the point $(3, 4)$. Give your answer as a fraction a/b.",
                "zh": "若 $x^2 + y^2 = 25$，求曲线在点 $(3, 4)$ 处的 $\\frac{dy}{dx}$。答案写成分数 a/b 的形式。"
              },
              "answer": "-3/4",
              "accept": [
                "-0.75"
              ],
              "explanation": {
                "en": "Implicit differentiation gives $2x + 2y \\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{y}$. At $(3,4)$: $-\\frac{3}{4}$. Geometrically, this is the tangent slope on the circle of radius 5.",
                "zh": "隐函数求导得 $2x + 2y \\frac{dy}{dx} = 0$，即 $\\frac{dy}{dx} = -\\frac{x}{y}$。在 $(3,4)$ 处为 $-\\frac{3}{4}$。几何上这是半径为 5 的圆上该点的切线斜率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $g(x) = \\arctan(2x)$. What is $g'(x)$?",
                "zh": "设 $g(x) = \\arctan(2x)$，则 $g'(x)$ 等于多少？"
              },
              "choices": [
                "$\\frac{2}{1 + 4x^2}$",
                "$\\frac{1}{1 + 4x^2}$",
                "$\\frac{2}{1 + 2x^2}$",
                "$\\frac{1}{\\sqrt{1 - 4x^2}}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\frac{d}{dx}\\arctan(u) = \\frac{u'}{1 + u^2}$. With $u = 2x$: numerator $2$, denominator $1 + (2x)^2 = 1 + 4x^2$. Choice D confuses arctan with arcsin.",
                "zh": "$\\frac{d}{dx}\\arctan(u) = \\frac{u'}{1 + u^2}$。取 $u = 2x$：分子为 $2$，分母为 $1 + (2x)^2 = 1 + 4x^2$。选项 D 把 arctan 和 arcsin 弄混了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $h(x) = (x^3 - 2x)^5$. Find $h'(1)$. Give an integer.",
                "zh": "设 $h(x) = (x^3 - 2x)^5$，求 $h'(1)$。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "Chain rule: $h'(x) = 5(x^3 - 2x)^4 (3x^2 - 2)$. At $x = 1$: $5(1 - 2)^4 (3 - 2) = 5(1)(1) = 5$. Note $(-1)^4 = +1$ — sign errors here are very common under time pressure.",
                "zh": "链式法则：$h'(x) = 5(x^3 - 2x)^4 (3x^2 - 2)$。代入 $x = 1$：$5(1 - 2)^4 (3 - 2) = 5(1)(1) = 5$。注意 $(-1)^4 = +1$——考试时间紧张时这里非常容易出符号错误。"
              }
            }
          ]
        },
        {
          "id": "inverse-function-derivatives",
          "title": "Derivatives of Inverse Functions",
          "titleZh": "反函数的导数",
          "content": [
            {
              "type": "h2",
              "en": "Slopes of Mirror-Image Curves",
              "zh": "镜像曲线的斜率"
            },
            {
              "type": "p",
              "en": "The graph of an inverse function $g = f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$. Reflection swaps rise and run, so the slope of $g$ at a point is the reciprocal of the slope of $f$ at the mirrored point. This one geometric idea generates the inverse-derivative formula and every inverse trig derivative on the AP exam.",
              "zh": "反函数 $g = f^{-1}$ 的图象是 $f$ 的图象关于直线 $y = x$ 的镜像。镜像会交换\"纵向变化\"与\"横向变化\"，因此 $g$ 在某点的斜率等于 $f$ 在对应镜像点处斜率的倒数。这一个几何思想，就能推出反函数求导公式和 AP 考试里所有的反三角函数导数。"
            },
            {
              "type": "h3",
              "en": "The Inverse-Derivative Formula",
              "zh": "反函数求导公式"
            },
            {
              "type": "p",
              "en": "Since $f(g(x)) = x$, differentiating both sides with the chain rule gives $f'(g(x)) \\cdot g'(x) = 1$. Solving for $g'(x)$:",
              "zh": "因为 $f(g(x)) = x$，用链式法则对两边求导得 $f'(g(x)) \\cdot g'(x) = 1$。解出 $g'(x)$："
            },
            {
              "type": "math",
              "tex": "g'(x) = \\frac{1}{f'(g(x))}, \\qquad \\text{i.e.} \\qquad \\left(f^{-1}\\right)'(a) = \\frac{1}{f'\\left(f^{-1}(a)\\right)}"
            },
            {
              "type": "p",
              "en": "The recipe for evaluating $(f^{-1})'(a)$: first find the $x$-value $b$ with $f(b) = a$ (so $f^{-1}(a) = b$), then compute $\\frac{1}{f'(b)}$. In words: the point $(a, b)$ on the inverse mirrors the point $(b, a)$ on $f$, and the slopes are reciprocals.",
              "zh": "计算 $(f^{-1})'(a)$ 的步骤：先找到满足 $f(b) = a$ 的 $x$ 值 $b$（即 $f^{-1}(a) = b$），再计算 $\\frac{1}{f'(b)}$。用文字说：反函数上的点 $(a, b)$ 对应 $f$ 上的镜像点 $(b, a)$，两处斜率互为倒数。"
            },
            {
              "type": "note",
              "en": "The number-one mistake on this topic: evaluating $f'$ at $a$ instead of at $f^{-1}(a)$. The answer choices on AP multiple-choice questions almost always include $\\frac{1}{f'(a)}$ as a distractor. Always ask first: \"which input of $f$ produces the output $a$?\"",
              "zh": "这一考点的头号错误：把 $f'$ 在 $f^{-1}(a)$ 处取值误写成在 $a$ 处取值。AP 选择题的选项里几乎总有 $\\frac{1}{f'(a)}$ 这个干扰项。永远先问自己：\"$f$ 的哪个输入产生输出 $a$？\""
            },
            {
              "type": "h3",
              "en": "Derivatives of Inverse Trig Functions",
              "zh": "反三角函数的导数"
            },
            {
              "type": "p",
              "en": "Applying the inverse formula to sine (equivalently, differentiating $\\sin y = x$ implicitly and using $\\cos y = \\sqrt{1 - x^2}$) yields the derivative of arcsine, and the same technique handles the others. Memorize these three:",
              "zh": "把反函数公式应用到正弦函数（等价地：对 $\\sin y = x$ 隐式求导并利用 $\\cos y = \\sqrt{1 - x^2}$），就得到反正弦的导数；同样的方法可处理其余函数。必须熟记以下三个："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx} \\arcsin x = \\frac{1}{\\sqrt{1 - x^2}}, \\qquad \\frac{d}{dx} \\arccos x = -\\frac{1}{\\sqrt{1 - x^2}}, \\qquad \\frac{d}{dx} \\arctan x = \\frac{1}{1 + x^2}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Arccos is just the negative of arcsin's derivative — because $\\arccos x = \\frac{\\pi}{2} - \\arcsin x$.",
                  "zh": "arccos 的导数恰好是 arcsin 导数的相反数——因为 $\\arccos x = \\frac{\\pi}{2} - \\arcsin x$。"
                },
                {
                  "en": "With an inner function, attach the chain-rule factor: $\\frac{d}{dx}\\arctan(u) = \\frac{u'}{1 + u^2}$ and $\\frac{d}{dx}\\arcsin(u) = \\frac{u'}{\\sqrt{1 - u^2}}$.",
                  "zh": "若有内层函数，要乘上链式法则因子：$\\frac{d}{dx}\\arctan(u) = \\frac{u'}{1 + u^2}$，$\\frac{d}{dx}\\arcsin(u) = \\frac{u'}{\\sqrt{1 - u^2}}$。"
                },
                {
                  "en": "Keep the two shapes straight: square root of $1 - u^2$ for arcsin/arccos, plain $1 + u^2$ (no root) for arctan.",
                  "zh": "记清两种形式：arcsin/arccos 的分母是 $\\sqrt{1 - u^2}$（带根号），arctan 的分母是 $1 + u^2$（不带根号）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Choosing a Procedure, and Table-Based Problems",
              "zh": "选择求导策略与表格型题目"
            },
            {
              "type": "p",
              "en": "AP questions rarely announce which technique to use. A quick diagnostic: a function inside a function calls for the chain rule; an equation mixing $x$ and $y$ that cannot be solved for $y$ calls for implicit differentiation; anything involving $f^{-1}$ or an inverse trig function calls for the inverse formula or the memorized inverse trig derivatives — often combined with the other two.",
              "zh": "AP 试题很少直接告诉你该用哪种方法。快速判断：函数套函数用链式法则；$x$、$y$ 混在一起且无法解出 $y$ 的方程用隐函数求导；凡是涉及 $f^{-1}$ 或反三角函数的，就用反函数公式或熟记的反三角导数——并常常与前两者结合使用。"
            },
            {
              "type": "p",
              "en": "Table problems give values of $f$ and $f'$ at a few points and ask for $(f^{-1})'(a)$. Scan the $f(x)$ column for the output $a$; the row where $f(b) = a$ hands you both $f^{-1}(a) = b$ and the needed $f'(b)$ in one place.",
              "zh": "表格型题目给出 $f$ 和 $f'$ 在几个点的值，然后要求 $(f^{-1})'(a)$。在 $f(x)$ 一列中寻找输出值 $a$：满足 $f(b) = a$ 的那一行同时给出了 $f^{-1}(a) = b$ 和所需的 $f'(b)$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: table questions deliberately include extra rows to bait the wrong lookup. Circle the row where the OUTPUT equals $a$, not the row where the input equals $a$. If no row of the table has output $a$, re-read the problem — you may be asked for $g'$ at a different value than you assumed.",
              "zh": "AP 考试提示：表格题会故意多给几行数据来诱导错误查表。圈出\"输出等于 $a$\"的那一行，而不是\"输入等于 $a$\"的那一行。如果表中没有一行的输出等于 $a$，请重新审题——你要求的 $g'$ 可能对应另一个值。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: The Inverse Formula from a Formula",
                "zh": "例题 1：由解析式使用反函数公式"
              },
              "problem": {
                "en": "Let $f(x) = x^3 + 2x$ and let $g$ be the inverse function of $f$. Find $g'(3)$.",
                "zh": "设 $f(x) = x^3 + 2x$，$g$ 为 $f$ 的反函数。求 $g'(3)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1: find $g(3)$, i.e. solve $f(b) = 3$. Testing small values, $f(1) = 1 + 2 = 3$, so $g(3) = 1$. (No need to invert $f$ algebraically — you only need this one value.)",
                  "zh": "第一步：求 $g(3)$，即解方程 $f(b) = 3$。代入小数值试验，$f(1) = 1 + 2 = 3$，所以 $g(3) = 1$。（不需要求出 $f$ 的反函数解析式——只需要这一个值。）"
                },
                {
                  "type": "p",
                  "en": "Step 2: compute $f'(x) = 3x^2 + 2$ and evaluate at $x = 1$: $f'(1) = 5$. Then apply the formula:",
                  "zh": "第二步：求出 $f'(x) = 3x^2 + 2$，并在 $x = 1$ 处取值：$f'(1) = 5$。然后套用公式："
                },
                {
                  "type": "math",
                  "tex": "g'(3) = \\frac{1}{f'(g(3))} = \\frac{1}{f'(1)} = \\frac{1}{5}"
                },
                {
                  "type": "p",
                  "en": "The wrong answer $\\frac{1}{f'(3)} = \\frac{1}{29}$ comes from plugging $3$ into $f'$ directly — the classic trap.",
                  "zh": "错误答案 $\\frac{1}{f'(3)} = \\frac{1}{29}$ 来自把 $3$ 直接代入 $f'$——这是最经典的陷阱。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Table-Based AP Problem",
                "zh": "例题 2：表格型 AP 题目"
              },
              "problem": {
                "en": "Selected values: $f(1) = 2$, $f'(1) = 4$, $f(2) = 4$, $f'(2) = \\frac{1}{3}$, $f(4) = 7$, $f'(4) = 6$. If $g = f^{-1}$, find $g'(4)$.",
                "zh": "已知部分数值：$f(1) = 2$，$f'(1) = 4$，$f(2) = 4$，$f'(2) = \\frac{1}{3}$，$f(4) = 7$，$f'(4) = 6$。若 $g = f^{-1}$，求 $g'(4)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Hunt for the row whose OUTPUT is $4$: it is $f(2) = 4$, so $g(4) = 2$. The row $f(4) = 7$ is bait.",
                  "zh": "寻找输出为 $4$ 的那一行：是 $f(2) = 4$，所以 $g(4) = 2$。而 $f(4) = 7$ 那一行是诱饵。"
                },
                {
                  "type": "math",
                  "tex": "g'(4) = \\frac{1}{f'(g(4))} = \\frac{1}{f'(2)} = \\frac{1}{1/3} = 3"
                },
                {
                  "type": "p",
                  "en": "Reciprocal of a fraction: dividing by $\\frac{1}{3}$ gives $3$, not $\\frac{1}{3}$. Notice the wrong lookup $\\frac{1}{f'(4)} = \\frac{1}{6}$ would also appear among AP answer choices.",
                  "zh": "分数的倒数：除以 $\\frac{1}{3}$ 得 $3$，而不是 $\\frac{1}{3}$。注意错误查表得到的 $\\frac{1}{f'(4)} = \\frac{1}{6}$ 也会出现在 AP 的选项之中。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = x^3 + x$. If $g$ is the inverse of $f$, then $g'(2) =$",
                "zh": "设 $f(x) = x^3 + x$。若 $g$ 是 $f$ 的反函数，则 $g'(2) =$"
              },
              "choices": [
                "$\\frac{1}{13}$",
                "$\\frac{1}{2}$",
                "$\\frac{1}{4}$",
                "$4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Solve $f(b) = 2$: $f(1) = 1 + 1 = 2$, so $g(2) = 1$. Then $f'(x) = 3x^2 + 1$ gives $f'(1) = 4$, so $g'(2) = \\frac{1}{4}$. Choice A is the trap $\\frac{1}{f'(2)} = \\frac{1}{13}$, from evaluating $f'$ at $2$ instead of at $g(2) = 1$.",
                "zh": "解 $f(b) = 2$：$f(1) = 1 + 1 = 2$，所以 $g(2) = 1$。再由 $f'(x) = 3x^2 + 1$ 得 $f'(1) = 4$，故 $g'(2) = \\frac{1}{4}$。选项 A 是陷阱 $\\frac{1}{f'(2)} = \\frac{1}{13}$，来自把 $f'$ 在 $2$ 处而不是在 $g(2) = 1$ 处取值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^5 + 2x + 1$ and let $g$ be the inverse of $f$. Find $g'(1)$. Give your answer as a fraction a/b.",
                "zh": "设 $f(x) = x^5 + 2x + 1$，$g$ 为 $f$ 的反函数。求 $g'(1)$。答案写成分数 a/b 的形式。"
              },
              "answer": "1/2",
              "accept": [
                "0.5"
              ],
              "explanation": {
                "en": "Solve $f(b) = 1$: $f(0) = 0 + 0 + 1 = 1$, so $g(1) = 0$. Since $f'(x) = 5x^4 + 2$, we get $f'(0) = 2$ and $g'(1) = \\frac{1}{f'(0)} = \\frac{1}{2}$. The convenient input here is $b = 0$ — always try easy integers before anything fancier.",
                "zh": "解 $f(b) = 1$：$f(0) = 0 + 0 + 1 = 1$，所以 $g(1) = 0$。由 $f'(x) = 5x^4 + 2$ 得 $f'(0) = 2$，故 $g'(1) = \\frac{1}{f'(0)} = \\frac{1}{2}$。这里合适的输入是 $b = 0$——先尝试简单的整数，再考虑复杂方法。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\frac{d}{dx} \\arcsin(3x)$?",
                "zh": "$\\frac{d}{dx} \\arcsin(3x)$ 等于多少？"
              },
              "choices": [
                "$\\frac{1}{\\sqrt{1 - 9x^2}}$",
                "$\\frac{3}{1 + 9x^2}$",
                "$\\frac{3}{\\sqrt{1 - 3x^2}}$",
                "$\\frac{3}{\\sqrt{1 - 9x^2}}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\frac{d}{dx}\\arcsin(u) = \\frac{u'}{\\sqrt{1 - u^2}}$ with $u = 3x$: numerator $3$, denominator $\\sqrt{1 - (3x)^2} = \\sqrt{1 - 9x^2}$. Choice A forgets the chain-rule factor $3$; choice C forgets to square the $3$ inside; choice B uses the arctan pattern.",
                "zh": "$\\frac{d}{dx}\\arcsin(u) = \\frac{u'}{\\sqrt{1 - u^2}}$，取 $u = 3x$：分子为 $3$，分母为 $\\sqrt{1 - (3x)^2} = \\sqrt{1 - 9x^2}$。选项 A 漏掉链式法则因子 $3$；选项 C 忘记对括号里的 $3$ 平方；选项 B 用成了 arctan 的形式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The table gives $f(1) = 3$, $f'(1) = 5$, $f(3) = 7$, $f'(3) = 2$. If $g = f^{-1}$, then $g'(7) =$",
                "zh": "表格给出 $f(1) = 3$，$f'(1) = 5$，$f(3) = 7$，$f'(3) = 2$。若 $g = f^{-1}$，则 $g'(7) =$"
              },
              "choices": [
                "$\\frac{1}{7}$",
                "$\\frac{1}{2}$",
                "$\\frac{1}{5}$",
                "$2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Find the row with output $7$: $f(3) = 7$, so $g(7) = 3$, and $g'(7) = \\frac{1}{f'(3)} = \\frac{1}{2}$. Choice C is the wrong-row trap: it uses $f'(1)$, the row where the OUTPUT is $3$ rather than $7$. Choice D forgets to take the reciprocal.",
                "zh": "找到输出为 $7$ 的那一行：$f(3) = 7$，所以 $g(7) = 3$，$g'(7) = \\frac{1}{f'(3)} = \\frac{1}{2}$。选项 C 是查错行的陷阱：它用了 $f'(1)$，那一行的输出是 $3$ 而不是 $7$。选项 D 则忘了取倒数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $h(x) = \\arctan(2x)$. Find $h'(0)$. Give an integer.",
                "zh": "设 $h(x) = \\arctan(2x)$，求 $h'(0)$。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "$h'(x) = \\frac{2}{1 + (2x)^2} = \\frac{2}{1 + 4x^2}$, so $h'(0) = \\frac{2}{1} = 2$. Answering $1$ means the chain-rule factor from the inner function $2x$ was dropped.",
                "zh": "$h'(x) = \\frac{2}{1 + (2x)^2} = \\frac{2}{1 + 4x^2}$，故 $h'(0) = \\frac{2}{1} = 2$。若答成 $1$，说明漏掉了内层函数 $2x$ 带来的链式法则因子。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The curve $x = \\sin y$ (with $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$) has $\\frac{dy}{dx} =$",
                "zh": "曲线 $x = \\sin y$（其中 $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$）的 $\\frac{dy}{dx} =$"
              },
              "choices": [
                "$\\cos y$",
                "$-\\frac{1}{\\sqrt{1 - x^2}}$",
                "$\\frac{1}{1 + x^2}$",
                "$\\frac{1}{\\sqrt{1 - x^2}}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Differentiate implicitly: $1 = \\cos y \\cdot \\frac{dy}{dx}$, so $\\frac{dy}{dx} = \\frac{1}{\\cos y}$. On this interval $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$, giving $\\frac{1}{\\sqrt{1 - x^2}}$ — exactly the arcsine derivative, since $y = \\arcsin x$. Choice A is $\\frac{dx}{dy}$, the reciprocal of what was asked.",
                "zh": "隐式求导：$1 = \\cos y \\cdot \\frac{dy}{dx}$，所以 $\\frac{dy}{dx} = \\frac{1}{\\cos y}$。在该区间上 $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$，得 $\\frac{1}{\\sqrt{1 - x^2}}$——这正是反正弦的导数，因为 $y = \\arcsin x$。选项 A 是 $\\frac{dx}{dy}$，是所求量的倒数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^3 + 3x + 1$ and let $g$ be the inverse of $f$. Find $g'(5)$. Give your answer as a fraction a/b.",
                "zh": "设 $f(x) = x^3 + 3x + 1$，$g$ 为 $f$ 的反函数。求 $g'(5)$。答案写成分数 a/b 的形式。"
              },
              "answer": "1/6",
              "accept": [],
              "explanation": {
                "en": "Solve $f(b) = 5$: $f(1) = 1 + 3 + 1 = 5$, so $g(5) = 1$. Then $f'(x) = 3x^2 + 3$ gives $f'(1) = 6$, and $g'(5) = \\frac{1}{6}$. Plugging $5$ into $f'$ instead would give the trap value $\\frac{1}{78}$.",
                "zh": "解 $f(b) = 5$：$f(1) = 1 + 3 + 1 = 5$，所以 $g(5) = 1$。再由 $f'(x) = 3x^2 + 3$ 得 $f'(1) = 6$，故 $g'(5) = \\frac{1}{6}$。若把 $5$ 直接代入 $f'$，就会得到陷阱值 $\\frac{1}{78}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-contextual-applications",
      "title": "Unit 4: Contextual Applications of Differentiation",
      "titleZh": "第四单元：导数的实际应用",
      "lessons": [
        {
          "id": "motion-and-related-rates",
          "title": "Straight-Line Motion and Related Rates",
          "titleZh": "直线运动与相关变化率",
          "content": [
            {
              "type": "h2",
              "en": "Derivatives That Mean Something",
              "zh": "有实际意义的导数"
            },
            {
              "type": "p",
              "en": "Unit 4 is where derivatives stop being abstract slopes and start describing the real world: a particle's velocity, a balloon's inflation rate, a shadow racing along the ground. On the AP exam these questions test two skills at once — computing the derivative and interpreting it in context with correct units. This lesson covers straight-line (rectilinear) motion and the classic related-rates setups.",
              "zh": "第 4 单元中，导数不再是抽象的斜率，而是开始描述真实世界：质点的速度、气球的膨胀速率、地面上飞驰的影子。AP 考试中这类题同时考查两项能力——求出导数，并结合语境用正确的单位解释它的含义。本节课讲解直线运动和经典的相关变化率问题。"
            },
            {
              "type": "h3",
              "en": "Position, Velocity, Acceleration",
              "zh": "位置、速度、加速度"
            },
            {
              "type": "p",
              "en": "If $x(t)$ gives the position of a particle on a line at time $t$, then differentiating walks you down the chain:",
              "zh": "设 $x(t)$ 表示质点在时刻 $t$ 在数轴上的位置，逐次求导就得到下面的链条："
            },
            {
              "type": "math",
              "tex": "v(t) = x'(t), \\qquad a(t) = v'(t) = x''(t)"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Velocity $v(t)$ is signed: $v > 0$ means moving in the positive direction, $v < 0$ means the negative direction, and $v = 0$ means the particle is (momentarily) at rest.",
                  "zh": "速度 $v(t)$ 是有符号的：$v > 0$ 表示沿正方向运动，$v < 0$ 表示沿负方向运动，$v = 0$ 表示质点（瞬时）静止。"
                },
                {
                  "en": "Speed is $|v(t)|$ — always nonnegative. \"Velocity is $-3$ m/s\" and \"speed is $3$ m/s\" describe the same motion.",
                  "zh": "速率是 $|v(t)|$——恒为非负。\"速度是 $-3$ 米/秒\"和\"速率是 $3$ 米/秒\"描述的是同一运动。"
                },
                {
                  "en": "Units stack with each derivative: if $x$ is in meters and $t$ in seconds, then $v$ is in m/s and $a$ is in m/s$^2$.",
                  "zh": "每求一次导，单位就叠加一次：若 $x$ 的单位是米，$t$ 的单位是秒，则 $v$ 的单位是米/秒，$a$ 的单位是米/秒$^2$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Speeding Up or Slowing Down?",
              "zh": "加速还是减速？"
            },
            {
              "type": "p",
              "en": "A particle is speeding up when its speed $|v|$ is increasing. The clean test: compare the signs of $v(t)$ and $a(t)$. Same sign $\\Rightarrow$ speeding up; opposite signs $\\Rightarrow$ slowing down. Intuitively, when acceleration pushes in the same direction the particle is already moving, the motion reinforces itself.",
              "zh": "当速率 $|v|$ 增大时，质点在加速。简洁的判别法：比较 $v(t)$ 与 $a(t)$ 的符号。同号 $\\Rightarrow$ 加速；异号 $\\Rightarrow$ 减速。直观上，当加速度的方向与质点已有的运动方向一致时，运动就会被加强。"
            },
            {
              "type": "note",
              "en": "AP exam tip: \"the particle is slowing down because $a(2) < 0$\" earns no credit. The rubric requires BOTH signs: e.g. \"$v(2) > 0$ and $a(2) < 0$, so velocity and acceleration have opposite signs and the particle is slowing down.\" Always state both.",
              "zh": "AP 考试提示：\"因为 $a(2) < 0$，所以质点在减速\"这样的理由不得分。评分标准要求同时说明两个符号：例如\"$v(2) > 0$ 且 $a(2) < 0$，速度与加速度符号相反，故质点在减速\"。务必两个都写。"
            },
            {
              "type": "h3",
              "en": "Related Rates: A Reliable Strategy",
              "zh": "相关变化率：可靠的解题流程"
            },
            {
              "type": "p",
              "en": "In a related-rates problem, several quantities change with time and are linked by an equation. Differentiating that equation with respect to $t$ links their rates. Every classic problem — sliding ladder, draining cone, stretching shadow — yields to the same five steps:",
              "zh": "在相关变化率问题中，若干量都随时间变化，并由一个方程联系在一起。将该方程对 $t$ 求导，就把各个变化率联系起来了。所有经典题——滑动的梯子、排水的圆锥、拉长的影子——都可以用同样的五步解决："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Draw a picture and name every changing quantity with a variable (never plug in a changing value too early).",
                  "zh": "画图，并给每个变化的量设一个变量（切勿过早代入会变化的数值）。"
                },
                {
                  "en": "Write an equation relating the variables that holds for ALL time, using geometry (Pythagorean theorem, similar triangles, volume formulas).",
                  "zh": "利用几何关系（勾股定理、相似三角形、体积公式）写出对任意时刻都成立的变量关系式。"
                },
                {
                  "en": "Differentiate both sides with respect to $t$ — every variable picks up a $\\frac{d}{dt}$ factor by the chain rule.",
                  "zh": "两边对 $t$ 求导——根据链式法则，每个变量都会带上一个 $\\frac{d}{dt}$ 因子。"
                },
                {
                  "en": "Only now substitute the instant's values and the known rates.",
                  "zh": "此时才代入该时刻的数值和已知的变化率。"
                },
                {
                  "en": "Answer with units, and check the sign makes sense (shrinking quantities have negative rates).",
                  "zh": "写出带单位的答案，并检查符号是否合理（正在减小的量变化率为负）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For cones and shadows, similar triangles let you eliminate a variable before differentiating — reducing the relation to a single variable makes the calculus painless.",
              "zh": "对于圆锥和影子问题，可先用相似三角形消去一个变量再求导——把关系式化为单变量后，微积分部分就非常轻松。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Full Motion Analysis",
                "zh": "例题 1：完整的运动分析"
              },
              "problem": {
                "en": "A particle moves along the $x$-axis with position $x(t) = t^3 - 6t^2 + 9t$ for $t \\ge 0$ ($x$ in meters, $t$ in seconds). When is the particle at rest, and is it speeding up or slowing down at $t = 2$?",
                "zh": "质点沿 $x$ 轴运动，位置为 $x(t) = t^3 - 6t^2 + 9t$（$t \\ge 0$，$x$ 单位为米，$t$ 单位为秒）。质点何时静止？在 $t = 2$ 时它在加速还是减速？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate and factor:",
                  "zh": "求导并因式分解："
                },
                {
                  "type": "math",
                  "tex": "v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3), \\qquad a(t) = 6t - 12"
                },
                {
                  "type": "p",
                  "en": "The particle is at rest when $v(t) = 0$: at $t = 1$ and $t = 3$ seconds.",
                  "zh": "当 $v(t) = 0$ 时质点静止：即 $t = 1$ 秒和 $t = 3$ 秒。"
                },
                {
                  "type": "p",
                  "en": "At $t = 2$: $v(2) = 3(1)(-1) = -3$ m/s and $a(2) = 0$... careful: $a(2) = 6(2) - 12 = 0$. Since $a(2) = 0$, we test just past $t=2$ instead: for $t$ slightly greater than 2, $v < 0$ and $a > 0$ (opposite signs), and slightly before, $v < 0$ and $a < 0$ (same signs). So at $t = 2$ the speed $|v|$ has a maximum on $(1,3)$ — the particle is momentarily neither speeding up nor slowing down, transitioning from speeding up to slowing down.",
                  "zh": "在 $t = 2$ 时：$v(2) = 3(1)(-1) = -3$ 米/秒，而 $a(2) = 6(2) - 12 = 0$。由于 $a(2) = 0$，我们考察 $t=2$ 两侧：$t$ 略大于 2 时 $v < 0$、$a > 0$（异号），略小于 2 时 $v < 0$、$a < 0$（同号）。因此在 $t = 2$ 处速率 $|v|$ 在区间 $(1,3)$ 内取得最大值——质点此刻既不在加速也不在减速，正从加速转为减速。"
                },
                {
                  "type": "p",
                  "en": "This is exactly the kind of subtlety the AP exam loves: the sign test needs $a \\ne 0$ at the point, so always compute both values before writing a conclusion.",
                  "zh": "这正是 AP 考试喜欢考查的细节：符号判别法要求该点处 $a \\ne 0$，所以下结论前一定要把两个值都算出来。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: The Draining Cone",
                "zh": "例题 2：圆锥排水问题"
              },
              "problem": {
                "en": "Water drains from an inverted cone of height $10$ m and top radius $5$ m at a rate of $3$ m$^3$/min. How fast is the water level falling when the water is $4$ m deep?",
                "zh": "水从一个高 $10$ 米、顶部半径 $5$ 米的倒置圆锥中以 $3$ 立方米/分钟的速率流出。当水深为 $4$ 米时，水面下降的速度是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $h$ be the water depth and $r$ the surface radius. Similar triangles give $\\frac{r}{h} = \\frac{5}{10}$, so $r = \\frac{h}{2}$. Substitute into the cone volume to get one variable:",
                  "zh": "设水深为 $h$，水面半径为 $r$。由相似三角形得 $\\frac{r}{h} = \\frac{5}{10}$，即 $r = \\frac{h}{2}$。代入圆锥体积公式，化为单变量："
                },
                {
                  "type": "math",
                  "tex": "V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi}{12} h^3"
                },
                {
                  "type": "p",
                  "en": "Differentiate with respect to $t$: $\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}$. The water is draining, so $\\frac{dV}{dt} = -3$. At $h = 4$:",
                  "zh": "对 $t$ 求导：$\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}$。水在流出，故 $\\frac{dV}{dt} = -3$。当 $h = 4$ 时："
                },
                {
                  "type": "math",
                  "tex": "-3 = \\frac{\\pi}{4}(16)\\frac{dh}{dt} \\quad\\Rightarrow\\quad \\frac{dh}{dt} = -\\frac{3}{4\\pi} \\text{ m/min}"
                },
                {
                  "type": "p",
                  "en": "The level is falling at $\\frac{3}{4\\pi} \\approx 0.239$ m/min. The negative sign in $\\frac{dh}{dt}$ confirms the depth is decreasing — state \"falling at $\\frac{3}{4\\pi}$ m/min\" in words for full credit.",
                  "zh": "水面以 $\\frac{3}{4\\pi} \\approx 0.239$ 米/分钟的速度下降。$\\frac{dh}{dt}$ 的负号印证了水深在减小——用文字写明\"以 $\\frac{3}{4\\pi}$ 米/分钟的速度下降\"才能拿满分。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A particle moves with position $x(t) = t^3 - 6t^2 + 9t$ for $t \\ge 0$. At which time(s) is the particle at rest?",
                "zh": "质点的位置为 $x(t) = t^3 - 6t^2 + 9t$（$t \\ge 0$）。质点在哪些时刻静止？"
              },
              "choices": [
                "$t = 1$ only",
                "$t = 3$ only",
                "$t = 1$ and $t = 3$",
                "$t = 0$ and $t = 3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "At rest means $v(t) = 0$. Here $v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$, which vanishes at $t = 1$ and $t = 3$. Choice D is tempting if you set $x(t) = 0$ instead — position zero is NOT the same as being at rest.",
                "zh": "静止意味着 $v(t) = 0$。这里 $v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$，在 $t = 1$ 和 $t = 3$ 处为零。若误把 $x(t) = 0$ 当作条件就会选 D——位置为零并不等于静止。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle has velocity $v(t) = t^2 - 4t + 3$. On which interval(s) is the particle speeding up?",
                "zh": "质点的速度为 $v(t) = t^2 - 4t + 3$。质点在哪些区间上加速？"
              },
              "choices": [
                "$(2, 3)$ only",
                "$(1, 2) \\cup (3, \\infty)$",
                "$(3, \\infty)$ only",
                "$(0, 1) \\cup (2, 3)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Speeding up requires $v$ and $a$ to share a sign. $v = (t-1)(t-3)$ is negative on $(1,3)$, positive outside; $a = 2t - 4$ is negative for $t < 2$, positive for $t > 2$. Both negative on $(1,2)$; both positive on $(3,\\infty)$. Choice C forgets that a particle moving in the negative direction with negative acceleration is also gaining speed.",
                "zh": "加速要求 $v$ 与 $a$ 同号。$v = (t-1)(t-3)$ 在 $(1,3)$ 上为负，其余为正；$a = 2t - 4$ 在 $t < 2$ 时为负，$t > 2$ 时为正。二者在 $(1,2)$ 上同为负，在 $(3,\\infty)$ 上同为正。选 C 的同学忽略了：沿负方向运动且加速度为负的质点，速率同样在增大。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle moves with position $x(t) = t^4 - 8t^2$ (meters, seconds). Find its acceleration at $t = 2$. Give an integer (in m/s$^2$).",
                "zh": "质点的位置为 $x(t) = t^4 - 8t^2$（单位：米、秒）。求 $t = 2$ 时的加速度。请填一个整数（单位为米/秒$^2$）。"
              },
              "answer": "32",
              "accept": [
                "32.0",
                "+32"
              ],
              "explanation": {
                "en": "Differentiate twice: $v(t) = 4t^3 - 16t$, $a(t) = 12t^2 - 16$. At $t = 2$: $a(2) = 12(4) - 16 = 32$ m/s$^2$. A common slip is stopping at $v(2) = 0$ — the particle is momentarily at rest but still accelerating.",
                "zh": "求两次导：$v(t) = 4t^3 - 16t$，$a(t) = 12t^2 - 16$。当 $t = 2$ 时：$a(2) = 12(4) - 16 = 32$ 米/秒$^2$。常见失误是算到 $v(2) = 0$ 就停——质点此刻虽瞬时静止，但仍有加速度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The velocity of a car is $v(t)$ meters per second. Which is the best interpretation of $v'(3) = -2$?",
                "zh": "汽车的速度为 $v(t)$（单位：米/秒）。下列哪项是对 $v'(3) = -2$ 的最佳解释？"
              },
              "choices": [
                "At $t = 3$ s the car is $2$ meters behind its start",
                "At $t = 3$ s the car's velocity is decreasing at $2$ m/s per second",
                "At $t = 3$ s the car moves backward at $2$ m/s",
                "Over the first $3$ seconds the velocity dropped by $2$ m/s"
              ],
              "answer": 1,
              "explanation": {
                "en": "$v'(3)$ is the instantaneous rate of change of velocity at $t = 3$, with units (m/s)/s $=$ m/s$^2$. Choice C confuses $v'(3)$ with $v(3)$, and choice D confuses an instantaneous rate with an average change over an interval — both are classic AP distractors.",
                "zh": "$v'(3)$ 是 $t = 3$ 时速度的瞬时变化率，单位为（米/秒）/秒即米/秒$^2$。选项 C 把 $v'(3)$ 与 $v(3)$ 混为一谈；选项 D 把瞬时变化率与区间上的平均变化混淆——两者都是 AP 经典干扰项。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The radius of a circle increases at $2$ cm/s. When the radius is $5$ cm, the area increases at $k\\pi$ cm$^2$/s. Find $k$. Give an integer.",
                "zh": "圆的半径以 $2$ 厘米/秒的速率增大。当半径为 $5$ 厘米时，面积以 $k\\pi$ 平方厘米/秒的速率增大。求 $k$。请填一个整数。"
              },
              "answer": "20",
              "accept": [
                "20.0",
                "+20"
              ],
              "explanation": {
                "en": "From $A = \\pi r^2$, differentiate: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(5)(2) = 20\\pi$, so $k = 20$. Plugging $r = 5$ in BEFORE differentiating (getting $A = 25\\pi$, a constant) is the classic related-rates blunder.",
                "zh": "由 $A = \\pi r^2$ 求导：$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(5)(2) = 20\\pi$，故 $k = 20$。在求导之前就代入 $r = 5$（得到常数 $A = 25\\pi$）是相关变化率问题中最经典的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A $13$-ft ladder leans against a wall. The bottom slides away from the wall at $2$ ft/s. When the bottom is $5$ ft from the wall, how fast is the top sliding down?",
                "zh": "一架 $13$ 英尺长的梯子靠在墙上，底端以 $2$ 英尺/秒的速率滑离墙壁。当底端距墙 $5$ 英尺时，顶端下滑的速率是多少？"
              },
              "choices": [
                "$\\frac{12}{5}$ ft/s",
                "$\\frac{6}{5}$ ft/s",
                "$\\frac{10}{13}$ ft/s",
                "$\\frac{5}{6}$ ft/s"
              ],
              "answer": 3,
              "explanation": {
                "en": "With $x^2 + y^2 = 169$: differentiating gives $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$. When $x = 5$, $y = 12$, so $5(2) + 12\\frac{dy}{dt} = 0$ and $\\frac{dy}{dt} = -\\frac{5}{6}$ ft/s — the top slides down at $\\frac{5}{6}$ ft/s. Choice A ($\\frac{12}{5}$) comes from swapping $x$ and $y$ in the final substitution.",
                "zh": "由 $x^2 + y^2 = 169$ 求导得 $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$。当 $x = 5$ 时 $y = 12$，故 $5(2) + 12\\frac{dy}{dt} = 0$，$\\frac{dy}{dt} = -\\frac{5}{6}$ 英尺/秒——顶端以 $\\frac{5}{6}$ 英尺/秒下滑。选项 A（$\\frac{12}{5}$）来自最后代入时把 $x$ 和 $y$ 弄反。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Water pours into an inverted cone of height $10$ and top radius $5$ at $2$ m$^3$/min. How fast is the depth rising when the water is $4$ m deep?",
                "zh": "水以 $2$ 立方米/分钟的速率注入一个高 $10$ 米、顶部半径 $5$ 米的倒置圆锥。当水深 $4$ 米时，水深上升的速率是多少？"
              },
              "choices": [
                "$\\frac{1}{2\\pi}$ m/min",
                "$\\frac{1}{8\\pi}$ m/min",
                "$\\frac{2}{\\pi}$ m/min",
                "$\\frac{1}{4\\pi}$ m/min"
              ],
              "answer": 0,
              "explanation": {
                "en": "Similar triangles give $r = \\frac{h}{2}$, so $V = \\frac{\\pi}{12}h^3$ and $\\frac{dV}{dt} = \\frac{\\pi}{4}h^2\\frac{dh}{dt}$. With $h = 4$: $2 = \\frac{\\pi}{4}(16)\\frac{dh}{dt} = 4\\pi\\frac{dh}{dt}$, so $\\frac{dh}{dt} = \\frac{1}{2\\pi}$. Forgetting to eliminate $r$ first — treating $r$ as the constant $5$ — leads to the wrong denominator.",
                "zh": "由相似三角形得 $r = \\frac{h}{2}$，故 $V = \\frac{\\pi}{12}h^3$，$\\frac{dV}{dt} = \\frac{\\pi}{4}h^2\\frac{dh}{dt}$。当 $h = 4$ 时：$2 = \\frac{\\pi}{4}(16)\\frac{dh}{dt} = 4\\pi\\frac{dh}{dt}$，即 $\\frac{dh}{dt} = \\frac{1}{2\\pi}$。若没有先消去 $r$——把 $r$ 当作常数 $5$——分母就会算错。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $6$-ft person walks away from a $15$-ft streetlight at $4$ ft/s. How fast is the tip of the shadow moving (in ft/s)? Give your answer as a fraction a/b.",
                "zh": "一个身高 $6$ 英尺的人以 $4$ 英尺/秒的速度走离一盏 $15$ 英尺高的路灯。影子的顶端移动的速率是多少（英尺/秒）？答案写成分数 a/b 的形式。"
              },
              "answer": "20/3",
              "accept": [
                "6.67",
                "6.667"
              ],
              "explanation": {
                "en": "Let $x$ be the person's distance from the light and $\\ell$ the tip's distance. Similar triangles: $\\frac{15}{\\ell} = \\frac{6}{\\ell - x}$, giving $15\\ell - 15x = 6\\ell$, so $\\ell = \\frac{5}{3}x$ and $\\frac{d\\ell}{dt} = \\frac{5}{3}(4) = \\frac{20}{3}$ ft/s. Note the tip moves FASTER than the person — answering $\\frac{8}{3}$ means you found the rate the shadow's length grows instead.",
                "zh": "设人距灯 $x$，影子顶端距灯 $\\ell$。相似三角形：$\\frac{15}{\\ell} = \\frac{6}{\\ell - x}$，得 $15\\ell - 15x = 6\\ell$，即 $\\ell = \\frac{5}{3}x$，故 $\\frac{d\\ell}{dt} = \\frac{5}{3}(4) = \\frac{20}{3}$ 英尺/秒。注意影子顶端比人移动得更快——若答 $\\frac{8}{3}$，说明你求的是影子长度增长的速率。"
              }
            }
          ]
        },
        {
          "id": "linearization-and-lhospital",
          "title": "Linearization and L'Hospital's Rule",
          "titleZh": "线性近似与洛必达法则",
          "content": [
            {
              "type": "h2",
              "en": "Two Powers of the Tangent Line",
              "zh": "切线的两大威力"
            },
            {
              "type": "p",
              "en": "Zoom in far enough on any differentiable curve and it looks like a straight line — its tangent. This \"local linearity\" gives us a fast way to approximate hard values, and it is also the intuition behind L'Hospital's rule, which converts stubborn indeterminate limits into ratios of derivatives. Both are guaranteed AP topics, and both come with a required justification step that graders check word for word.",
              "zh": "在任何可导曲线上充分放大，它看起来都像一条直线——它的切线。这种\"局部线性\"给了我们快速近似复杂数值的方法，也是洛必达法则背后的直觉：把棘手的不定式极限转化为导数之比。两者都是 AP 必考内容，而且都要求写出评分员逐字检查的论证步骤。"
            },
            {
              "type": "h3",
              "en": "Tangent-Line (Linear) Approximation",
              "zh": "切线（线性）近似"
            },
            {
              "type": "p",
              "en": "The linearization of $f$ at $x = a$ is the tangent line viewed as a function:",
              "zh": "函数 $f$ 在 $x = a$ 处的线性化，就是把切线看作一个函数："
            },
            {
              "type": "math",
              "tex": "L(x) = f(a) + f'(a)(x - a)"
            },
            {
              "type": "p",
              "en": "For $x$ near $a$, $f(x) \\approx L(x)$. Choose $a$ to be a friendly point where $f(a)$ and $f'(a)$ are easy to compute exactly — to estimate $\\sqrt{26}$, linearize $\\sqrt{x}$ at $a = 25$, not at $26$.",
              "zh": "当 $x$ 接近 $a$ 时，$f(x) \\approx L(x)$。要把 $a$ 选在 $f(a)$ 和 $f'(a)$ 都容易精确计算的\"友好\"点——估计 $\\sqrt{26}$ 时，应在 $a = 25$ 处线性化 $\\sqrt{x}$，而不是在 $26$ 处。"
            },
            {
              "type": "h3",
              "en": "Overestimate or Underestimate? Ask Concavity",
              "zh": "偏大还是偏小？看凹凸性"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $f''> 0$ (concave up) near $a$, the tangent line lies BELOW the curve, so $L(x)$ is an underestimate.",
                  "zh": "若在 $a$ 附近 $f'' > 0$（下凸/凹向上），切线位于曲线下方，故 $L(x)$ 偏小（低估）。"
                },
                {
                  "en": "If $f'' < 0$ (concave down) near $a$, the tangent line lies ABOVE the curve, so $L(x)$ is an overestimate.",
                  "zh": "若在 $a$ 附近 $f'' < 0$（上凸/凹向下），切线位于曲线上方，故 $L(x)$ 偏大（高估）。"
                },
                {
                  "en": "The approximation error grows as $|x - a|$ grows — tangent lines are only trustworthy locally.",
                  "zh": "近似误差随 $|x - a|$ 增大而增大——切线只在局部值得信赖。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "L'Hospital's Rule",
              "zh": "洛必达法则"
            },
            {
              "type": "p",
              "en": "If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ has the form $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$, and the limit of the derivative quotient exists, then:",
              "zh": "若 $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ 是 $\\frac{0}{0}$ 或 $\\frac{\\pm\\infty}{\\pm\\infty}$ 型，且导数之比的极限存在，则："
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}"
            },
            {
              "type": "p",
              "en": "Differentiate the numerator and denominator SEPARATELY — this is not the quotient rule. The rule may be applied repeatedly, but you must re-check the indeterminate form before each application.",
              "zh": "分子和分母要各自单独求导——这不是商法则。洛必达法则可以反复使用，但每次使用前都必须重新检验是否仍为不定式。"
            },
            {
              "type": "note",
              "en": "AP exam tip: on FRQs you MUST show the form is indeterminate before applying L'Hospital — write, e.g., \"$\\lim_{x\\to 0} (1 - \\cos x) = 0$ and $\\lim_{x\\to 0} x^2 = 0$, so the limit has indeterminate form $\\frac{0}{0}$.\" Skipping this line costs the justification point even if your final answer is correct. And never apply the rule to a form like $\\frac{1}{2}$ or $\\frac{0}{5}$ — the rule simply does not apply, and using it usually produces a wrong answer.",
              "zh": "AP 考试提示：在 FRQ 中使用洛必达法则前必须先证明极限是不定式——例如写出\"$\\lim_{x\\to 0} (1 - \\cos x) = 0$ 且 $\\lim_{x\\to 0} x^2 = 0$，故该极限为 $\\frac{0}{0}$ 型\"。漏掉这一行即使最终答案正确也会失去论证分。另外，绝不能对 $\\frac{1}{2}$ 或 $\\frac{0}{5}$ 这类形式使用该法则——法则根本不适用，强行使用通常会得到错误答案。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Approximating a Square Root",
                "zh": "例题 1：近似计算平方根"
              },
              "problem": {
                "en": "Use a linearization to approximate $\\sqrt{4.1}$, and state whether the approximation is an overestimate or an underestimate.",
                "zh": "用线性近似估计 $\\sqrt{4.1}$，并说明该近似值偏大还是偏小。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $f(x) = \\sqrt{x}$ and pick the friendly point $a = 4$. Then $f(4) = 2$ and $f'(x) = \\frac{1}{2\\sqrt{x}}$, so $f'(4) = \\frac{1}{4}$.",
                  "zh": "设 $f(x) = \\sqrt{x}$，选取友好点 $a = 4$。则 $f(4) = 2$，且 $f'(x) = \\frac{1}{2\\sqrt{x}}$，故 $f'(4) = \\frac{1}{4}$。"
                },
                {
                  "type": "math",
                  "tex": "L(x) = 2 + \\frac{1}{4}(x - 4) \\quad\\Rightarrow\\quad \\sqrt{4.1} \\approx L(4.1) = 2 + \\frac{1}{4}(0.1) = 2.025"
                },
                {
                  "type": "p",
                  "en": "Since $f''(x) = -\\frac{1}{4}x^{-3/2} < 0$, the graph is concave down, so the tangent line lies above the curve: $2.025$ is an overestimate. (Indeed $\\sqrt{4.1} = 2.0248\\ldots$)",
                  "zh": "因为 $f''(x) = -\\frac{1}{4}x^{-3/2} < 0$，图象上凸（凹向下），切线在曲线上方：$2.025$ 是高估值。（实际上 $\\sqrt{4.1} = 2.0248\\ldots$）"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: L'Hospital Applied Twice",
                "zh": "例题 2：两次使用洛必达法则"
              },
              "problem": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.",
                "zh": "求 $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Check the form: as $x \\to 0$, the numerator $e^x - 1 - x \\to 1 - 1 - 0 = 0$ and the denominator $x^2 \\to 0$. This is $\\frac{0}{0}$, so L'Hospital applies:",
                  "zh": "先检验形式：当 $x \\to 0$ 时，分子 $e^x - 1 - x \\to 1 - 1 - 0 = 0$，分母 $x^2 \\to 0$。这是 $\\frac{0}{0}$ 型，可以使用洛必达法则："
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\lim_{x \\to 0} \\frac{e^x - 1}{2x}"
                },
                {
                  "type": "p",
                  "en": "Check again: numerator $\\to 0$ and denominator $\\to 0$, still $\\frac{0}{0}$. Apply the rule a second time:",
                  "zh": "再次检验：分子 $\\to 0$，分母 $\\to 0$，仍是 $\\frac{0}{0}$ 型。第二次使用法则："
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to 0} \\frac{e^x - 1}{2x} = \\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2}"
                },
                {
                  "type": "p",
                  "en": "The final quotient $\\frac{e^x}{2}$ is no longer indeterminate, so we stop and substitute. Verifying the form before EACH application is what the graders look for.",
                  "zh": "最后的比式 $\\frac{e^x}{2}$ 已不是不定式，直接代入即可。评分员检查的正是每次使用前的形式验证。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Using the linearization of $f(x) = \\sqrt{x}$ at $x = 25$, which value approximates $\\sqrt{26}$?",
                "zh": "利用 $f(x) = \\sqrt{x}$ 在 $x = 25$ 处的线性化，下列哪个值是 $\\sqrt{26}$ 的近似？"
              },
              "choices": [
                "$5.2$",
                "$5.05$",
                "$5.1$",
                "$5.01$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$f(25) = 5$ and $f'(x) = \\frac{1}{2\\sqrt{x}}$ gives $f'(25) = \\frac{1}{10}$, so $L(26) = 5 + \\frac{1}{10}(1) = 5.1$. Choice B comes from using $f'(25) = \\frac{1}{20}$ — forgetting that $\\frac{1}{2\\sqrt{25}} = \\frac{1}{10}$, not $\\frac{1}{20}$.",
                "zh": "$f(25) = 5$，由 $f'(x) = \\frac{1}{2\\sqrt{x}}$ 得 $f'(25) = \\frac{1}{10}$，故 $L(26) = 5 + \\frac{1}{10}(1) = 5.1$。选 B 的同学把 $f'(25)$ 算成了 $\\frac{1}{20}$——注意 $\\frac{1}{2\\sqrt{25}} = \\frac{1}{10}$ 而不是 $\\frac{1}{20}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^3$. Use the tangent line at $x = 2$ to approximate $f(2.1)$. Give a decimal.",
                "zh": "设 $f(x) = x^3$。用 $x = 2$ 处的切线近似 $f(2.1)$。请填一个小数。"
              },
              "answer": "9.2",
              "accept": [
                "9.20",
                "46/5"
              ],
              "explanation": {
                "en": "$f(2) = 8$ and $f'(x) = 3x^2$ gives $f'(2) = 12$, so $L(2.1) = 8 + 12(0.1) = 9.2$. Since $f''(2) = 12 > 0$ the curve is concave up there, so this is an underestimate of the true value $9.261$.",
                "zh": "$f(2) = 8$，由 $f'(x) = 3x^2$ 得 $f'(2) = 12$，故 $L(2.1) = 8 + 12(0.1) = 9.2$。由于 $f''(2) = 12 > 0$，曲线在该处下凸（凹向上），因此这是对真实值 $9.261$ 的低估。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A function $f$ satisfies $f(3) = 7$, $f'(3) = -2$, and $f''(x) < 0$ for all $x$ near $3$. The tangent-line approximation of $f(3.2)$ is:",
                "zh": "函数 $f$ 满足 $f(3) = 7$，$f'(3) = -2$，且在 $3$ 附近 $f''(x) < 0$。用切线近似 $f(3.2)$ 的结果是："
              },
              "choices": [
                "$6.6$, an underestimate",
                "$6.6$, an overestimate",
                "$7.4$, an overestimate",
                "$6.4$, an underestimate"
              ],
              "answer": 1,
              "explanation": {
                "en": "$L(3.2) = 7 + (-2)(0.2) = 6.6$. Concave down ($f'' < 0$) means the tangent line lies above the curve, so $6.6$ is an overestimate. Choice A gets the arithmetic right but reverses the concavity conclusion — the most common error on this question type.",
                "zh": "$L(3.2) = 7 + (-2)(0.2) = 6.6$。上凸（$f'' < 0$）意味着切线位于曲线上方，故 $6.6$ 是高估值。选项 A 计算正确但把凹凸性的结论弄反了——这是此类题最常见的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.",
                "zh": "求 $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$。"
              },
              "choices": [
                "$1$",
                "$0$",
                "$\\frac{1}{2}$",
                "$2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Both numerator and denominator approach $0$, so L'Hospital applies: the limit equals $\\lim_{x\\to 0} \\frac{\\sin x}{2x}$, still $\\frac{0}{0}$; apply again to get $\\lim_{x\\to 0} \\frac{\\cos x}{2} = \\frac{1}{2}$. Choice A is tempting if you recall $\\lim \\frac{\\sin x}{x} = 1$ but forget the factor of $2$ in the denominator.",
                "zh": "分子分母都趋于 $0$，可用洛必达法则：极限化为 $\\lim_{x\\to 0} \\frac{\\sin x}{2x}$，仍是 $\\frac{0}{0}$ 型；再用一次得 $\\lim_{x\\to 0} \\frac{\\cos x}{2} = \\frac{1}{2}$。若记得 $\\lim \\frac{\\sin x}{x} = 1$ 却忘了分母中的 $2$，就会误选 A。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(5x)}{3x}$. Give your answer as a fraction a/b.",
                "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(5x)}{3x}$。答案写成分数 a/b 的形式。"
              },
              "answer": "5/3",
              "accept": [
                "1.67",
                "1.667"
              ],
              "explanation": {
                "en": "As $x \\to 0$ both $\\sin(5x) \\to 0$ and $3x \\to 0$, an indeterminate form $\\frac{0}{0}$. L'Hospital gives $\\lim_{x\\to 0} \\frac{5\\cos(5x)}{3} = \\frac{5}{3}$. The chain-rule factor $5$ in the numerator is the piece students most often drop.",
                "zh": "当 $x \\to 0$ 时 $\\sin(5x) \\to 0$ 且 $3x \\to 0$，是 $\\frac{0}{0}$ 型不定式。洛必达法则给出 $\\lim_{x\\to 0} \\frac{5\\cos(5x)}{3} = \\frac{5}{3}$。分子中链式法则产生的因子 $5$ 是学生最容易漏掉的部分。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student writes: $\\lim_{x \\to 0} \\frac{\\cos x}{1 - x} = \\lim_{x \\to 0} \\frac{-\\sin x}{-1} = 0$. What is wrong?",
                "zh": "某学生写道：$\\lim_{x \\to 0} \\frac{\\cos x}{1 - x} = \\lim_{x \\to 0} \\frac{-\\sin x}{-1} = 0$。错在哪里？"
              },
              "choices": [
                "The derivative of $\\cos x$ should be $\\sin x$",
                "The rule must be applied twice, giving $1$",
                "Nothing — the limit is $0$",
                "The original limit has form $\\frac{1}{1}$, so L'Hospital does not apply; the limit is $1$"
              ],
              "answer": 3,
              "explanation": {
                "en": "As $x \\to 0$, $\\cos x \\to 1$ and $1 - x \\to 1$: the form is $\\frac{1}{1}$, not indeterminate, so the limit is simply $\\frac{1}{1} = 1$ by direct substitution. Applying L'Hospital to a non-indeterminate form gives the wrong answer $0$ here — this is precisely why the AP exam demands you verify $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ first.",
                "zh": "当 $x \\to 0$ 时，$\\cos x \\to 1$ 且 $1 - x \\to 1$：形式为 $\\frac{1}{1}$，不是不定式，直接代入即得极限 $\\frac{1}{1} = 1$。对非不定式使用洛必达法则在此得到了错误答案 $0$——这正是 AP 考试要求先验证 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$ 型的原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$.",
                "zh": "求 $\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$。"
              },
              "choices": [
                "$0$",
                "$1$",
                "$2$",
                "$\\infty$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The form is $\\frac{\\infty}{\\infty}$. Two applications of L'Hospital: $\\lim \\frac{x^2}{e^x} = \\lim \\frac{2x}{e^x} = \\lim \\frac{2}{e^x} = 0$. Choice C is tempting if you stop after differentiating twice and read off the numerator $2$, forgetting the denominator $e^x \\to \\infty$. Exponentials dominate every power of $x$.",
                "zh": "形式为 $\\frac{\\infty}{\\infty}$。使用两次洛必达法则：$\\lim \\frac{x^2}{e^x} = \\lim \\frac{2x}{e^x} = \\lim \\frac{2}{e^x} = 0$。若求导两次后只看到分子的 $2$ 而忘记分母 $e^x \\to \\infty$，就会误选 C。指数函数增长快于 $x$ 的任何幂。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Use the linearization of $f(x) = e^x$ at $x = 0$ to approximate $e^{0.1}$. Give a decimal.",
                "zh": "用 $f(x) = e^x$ 在 $x = 0$ 处的线性化近似 $e^{0.1}$。请填一个小数。"
              },
              "answer": "1.1",
              "accept": [
                "1.10",
                "11/10"
              ],
              "explanation": {
                "en": "$f(0) = 1$ and $f'(0) = e^0 = 1$, so $L(x) = 1 + x$ and $L(0.1) = 1.1$. Because $f''(x) = e^x > 0$ everywhere, $e^x$ is concave up and the tangent line lies below the curve — $1.1$ underestimates the true value $1.105\\ldots$",
                "zh": "$f(0) = 1$ 且 $f'(0) = e^0 = 1$，故 $L(x) = 1 + x$，$L(0.1) = 1.1$。由于 $f''(x) = e^x > 0$ 恒成立，$e^x$ 下凸（凹向上），切线位于曲线下方——$1.1$ 低估了真实值 $1.105\\ldots$"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-5-analytical-applications",
      "title": "Unit 5: Analytical Applications of Differentiation",
      "titleZh": "第五单元：导数的分析应用",
      "lessons": [
        {
          "id": "mvt-and-extrema",
          "title": "Mean Value Theorem and Extrema",
          "titleZh": "中值定理与极值",
          "content": [
            {
              "type": "h2",
              "en": "The Big Theorems of Differentiation",
              "zh": "微分学的重要定理"
            },
            {
              "type": "p",
              "en": "Unit 5 is where derivatives stop being mere computations and start proving things. The Mean Value Theorem guarantees that average behavior is matched somewhere by instantaneous behavior, and the Extreme Value Theorem guarantees that maxima and minima actually exist. On the AP exam these theorems are tested less by computation and more by whether you check their hypotheses carefully.",
              "zh": "在第五单元，导数不再只是计算工具，而开始用来证明结论。中值定理保证平均变化率一定在某处等于瞬时变化率，最值定理则保证最大值和最小值确实存在。AP 考试对这些定理的考查重点往往不在计算，而在于你是否认真验证了定理的前提条件。"
            },
            {
              "type": "h3",
              "en": "Mean Value Theorem and Rolle's Theorem",
              "zh": "中值定理与罗尔定理"
            },
            {
              "type": "p",
              "en": "If $f$ is continuous on the closed interval $[a, b]$ and differentiable on the open interval $(a, b)$, then the Mean Value Theorem (MVT) guarantees at least one $c$ in $(a, b)$ where the instantaneous rate of change equals the average rate of change:",
              "zh": "如果 $f$ 在闭区间 $[a, b]$ 上连续，且在开区间 $(a, b)$ 内可导，那么中值定理（MVT）保证在 $(a, b)$ 内至少存在一点 $c$，使瞬时变化率等于平均变化率："
            },
            {
              "type": "math",
              "tex": "f'(c) = \\frac{f(b) - f(a)}{b - a}"
            },
            {
              "type": "p",
              "en": "Geometrically: somewhere the tangent line is parallel to the secant line through $(a, f(a))$ and $(b, f(b))$. Rolle's Theorem is the special case $f(a) = f(b)$, which forces $f'(c) = 0$ at some interior point — a horizontal tangent must appear between two equal outputs.",
              "zh": "几何上讲：曲线上某处的切线与连接 $(a, f(a))$ 和 $(b, f(b))$ 的割线平行。罗尔定理是 $f(a) = f(b)$ 的特殊情形，它迫使某个内点处 $f'(c) = 0$——两个相等的函数值之间必然出现水平切线。"
            },
            {
              "type": "note",
              "en": "AP exam tip: before applying the MVT you must state and verify both hypotheses — continuity on $[a, b]$ AND differentiability on $(a, b)$. Functions like $|x|$ or $x^{2/3}$ are continuous but not differentiable everywhere, and graders specifically look for this check. \"The function is a polynomial, so it is continuous and differentiable everywhere\" is a complete, full-credit justification.",
              "zh": "AP 考试提示：使用中值定理前必须写明并验证两个前提——在 $[a, b]$ 上连续，且在 $(a, b)$ 内可导。像 $|x|$ 或 $x^{2/3}$ 这样的函数处处连续却并非处处可导，阅卷人会专门检查这一步。\"该函数是多项式，故处处连续且可导\"就是一句完整的满分理由。"
            },
            {
              "type": "h3",
              "en": "Extreme Value Theorem and Critical Points",
              "zh": "最值定理与临界点"
            },
            {
              "type": "p",
              "en": "The Extreme Value Theorem (EVT) says: if $f$ is continuous on a closed interval $[a, b]$, then $f$ attains both an absolute maximum and an absolute minimum on $[a, b]$. Continuity and a closed interval are both essential — $f(x) = \\frac{1}{x}$ on $(0, 1)$ attains neither.",
              "zh": "最值定理（EVT）指出：若 $f$ 在闭区间 $[a, b]$ 上连续，则 $f$ 在 $[a, b]$ 上必定取得绝对最大值和绝对最小值。连续性和闭区间缺一不可——例如 $f(x) = \\frac{1}{x}$ 在 $(0, 1)$ 上既没有最大值也没有最小值。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A critical point of $f$ is an interior point $c$ of the domain where $f'(c) = 0$ or $f'(c)$ does not exist.",
                  "zh": "$f$ 的临界点是定义域的内点 $c$，满足 $f'(c) = 0$ 或 $f'(c)$ 不存在。"
                },
                {
                  "en": "Absolute extrema on a closed interval can occur only at critical points or at the endpoints $a$ and $b$.",
                  "zh": "闭区间上的绝对最值只可能出现在临界点或端点 $a$、$b$ 处。"
                },
                {
                  "en": "A critical point is only a candidate — it need not be an extremum. Example: $f(x) = x^3$ has $f'(0) = 0$ but no extremum at $x = 0$.",
                  "zh": "临界点只是候选点——它未必是极值点。例如 $f(x) = x^3$ 满足 $f'(0) = 0$，但在 $x = 0$ 处并没有极值。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Increasing/Decreasing Intervals and the First Derivative Test",
              "zh": "单调区间与一阶导数判别法"
            },
            {
              "type": "p",
              "en": "The sign of $f'$ controls the direction of $f$: if $f'(x) > 0$ on an interval, $f$ is increasing there; if $f'(x) < 0$, $f$ is decreasing. Build a sign chart of $f'$ using the critical points as boundaries, then read off the behavior of $f$.",
              "zh": "$f'$ 的符号决定 $f$ 的增减方向：若在某区间上 $f'(x) > 0$，则 $f$ 在该区间上递增；若 $f'(x) < 0$，则 $f$ 递减。以临界点为分界画出 $f'$ 的符号表，就能读出 $f$ 的单调性。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "First Derivative Test: if $f'$ changes from positive to negative at $c$, then $f$ has a local maximum at $x = c$.",
                  "zh": "一阶导数判别法：若 $f'$ 在 $c$ 处由正变负，则 $f$ 在 $x = c$ 处取局部极大值。"
                },
                {
                  "en": "If $f'$ changes from negative to positive at $c$, then $f$ has a local minimum at $x = c$.",
                  "zh": "若 $f'$ 在 $c$ 处由负变正，则 $f$ 在 $x = c$ 处取局部极小值。"
                },
                {
                  "en": "If $f'$ does not change sign at $c$ (e.g. a squared factor), there is no extremum at $c$.",
                  "zh": "若 $f'$ 在 $c$ 处不变号（例如含平方因子），则 $c$ 处没有极值。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying the MVT with Hypothesis Check",
                "zh": "例题 1：验证前提并应用中值定理"
              },
              "problem": {
                "en": "Let $f(x) = x^3 - x$ on $[0, 2]$. Verify that the Mean Value Theorem applies, and find all values $c$ guaranteed by the theorem.",
                "zh": "设 $f(x) = x^3 - x$，区间为 $[0, 2]$。验证中值定理的条件成立，并求出定理保证存在的所有 $c$ 值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Hypotheses: $f$ is a polynomial, so it is continuous on $[0, 2]$ and differentiable on $(0, 2)$. The MVT applies. The average rate of change is",
                  "zh": "前提验证：$f$ 是多项式，故在 $[0, 2]$ 上连续、在 $(0, 2)$ 内可导，中值定理适用。平均变化率为"
                },
                {
                  "type": "math",
                  "tex": "\\frac{f(2) - f(0)}{2 - 0} = \\frac{6 - 0}{2} = 3"
                },
                {
                  "type": "p",
                  "en": "Set $f'(c) = 3c^2 - 1 = 3$, so $c^2 = \\frac{4}{3}$ and $c = \\pm\\frac{2}{\\sqrt{3}}$. Only $c = \\frac{2}{\\sqrt{3}} \\approx 1.155$ lies in $(0, 2)$, so that is the guaranteed value. Always discard candidates outside the open interval.",
                  "zh": "令 $f'(c) = 3c^2 - 1 = 3$，得 $c^2 = \\frac{4}{3}$，$c = \\pm\\frac{2}{\\sqrt{3}}$。只有 $c = \\frac{2}{\\sqrt{3}} \\approx 1.155$ 落在 $(0, 2)$ 内，它才是定理保证的值。一定要舍去开区间之外的候选值。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: First Derivative Test with a Squared Factor",
                "zh": "例题 2：含平方因子的一阶导数判别法"
              },
              "problem": {
                "en": "Find and classify all local extrema of $f(x) = x^4 - 4x^3$.",
                "zh": "求 $f(x) = x^4 - 4x^3$ 的所有局部极值并判断类型。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate and factor:",
                  "zh": "求导并因式分解："
                },
                {
                  "type": "math",
                  "tex": "f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)"
                },
                {
                  "type": "p",
                  "en": "Critical points: $x = 0$ and $x = 3$. Sign chart: for $x < 0$, $f' < 0$; on $(0, 3)$, $f' < 0$ still (the factor $4x^2$ never goes negative); for $x > 3$, $f' > 0$.",
                  "zh": "临界点为 $x = 0$ 和 $x = 3$。符号表：当 $x < 0$ 时 $f' < 0$；在 $(0, 3)$ 上 $f'$ 仍为负（因子 $4x^2$ 永不为负）；当 $x > 3$ 时 $f' > 0$。"
                },
                {
                  "type": "p",
                  "en": "At $x = 0$ the sign does not change, so there is no extremum there. At $x = 3$, $f'$ changes from negative to positive, so $f$ has a local minimum $f(3) = 81 - 108 = -27$.",
                  "zh": "在 $x = 0$ 处符号不变，故没有极值。在 $x = 3$ 处 $f'$ 由负变正，所以 $f$ 有局部极小值 $f(3) = 81 - 108 = -27$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The Mean Value Theorem applied to $f(x) = x^2$ on $[1, 3]$ guarantees a value $c$ where $f'(c)$ equals the average rate of change. What is $c$?",
                "zh": "对 $f(x) = x^2$ 在 $[1, 3]$ 上应用中值定理，存在一点 $c$ 使 $f'(c)$ 等于平均变化率。$c$ 等于多少？"
              },
              "choices": [
                "$c = \\sqrt{2}$",
                "$c = 2$",
                "$c = \\frac{5}{2}$",
                "$c = 4$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The average rate of change is $\\frac{9 - 1}{3 - 1} = 4$. Setting $f'(c) = 2c = 4$ gives $c = 2$, which lies in $(1, 3)$. Choice D confuses the value of the slope, $4$, with the value of $c$.",
                "zh": "平均变化率为 $\\frac{9 - 1}{3 - 1} = 4$。令 $f'(c) = 2c = 4$ 得 $c = 2$，且 $2$ 在 $(1, 3)$ 内。选项 D 把斜率的值 $4$ 与 $c$ 的值混淆了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why does the Mean Value Theorem NOT apply to $f(x) = |x|$ on the interval $[-1, 2]$?",
                "zh": "为什么中值定理不适用于 $f(x) = |x|$ 在区间 $[-1, 2]$ 上的情形？"
              },
              "choices": [
                "$f$ is not continuous on $[-1, 2]$",
                "$f(-1) \\ne f(2)$, which violates a hypothesis",
                "$f$ is not differentiable at $x = 0$, an interior point",
                "The MVT does apply to this function"
              ],
              "answer": 2,
              "explanation": {
                "en": "$|x|$ is continuous everywhere, but its graph has a corner at $x = 0$, so it is not differentiable on all of $(-1, 2)$. Choice B is a hypothesis of Rolle's Theorem, not of the MVT — the MVT never requires equal endpoint values.",
                "zh": "$|x|$ 处处连续，但它的图像在 $x = 0$ 处有一个尖角，因此在 $(-1, 2)$ 内并非处处可导。选项 B 是罗尔定理的条件而不是中值定理的条件——中值定理从不要求两端点函数值相等。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^3 - 3x^2 + 5$. Find the $x$-coordinate of the local minimum of $f$. Give an integer.",
                "zh": "设 $f(x) = x^3 - 3x^2 + 5$。求 $f$ 局部极小值点的 $x$ 坐标。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "$f'(x) = 3x^2 - 6x = 3x(x - 2)$, so the critical points are $x = 0$ and $x = 2$. The sign of $f'$ is positive, negative, positive across these points, so $f'$ changes from negative to positive at $x = 2$: a local minimum by the First Derivative Test.",
                "zh": "$f'(x) = 3x^2 - 6x = 3x(x - 2)$，临界点为 $x = 0$ 和 $x = 2$。$f'$ 的符号依次为正、负、正，故在 $x = 2$ 处由负变正：由一阶导数判别法可知这是局部极小值点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Rolle's Theorem applied to $f(x) = \\sin x$ on $[0, \\pi]$ guarantees a point $c$ with $f'(c) = 0$. Which value is it?",
                "zh": "对 $f(x) = \\sin x$ 在 $[0, \\pi]$ 上应用罗尔定理，存在一点 $c$ 使 $f'(c) = 0$。这个值是多少？"
              },
              "choices": [
                "$c = \\frac{\\pi}{4}$",
                "$c = \\frac{\\pi}{3}$",
                "$c = \\pi$",
                "$c = \\frac{\\pi}{2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\sin 0 = \\sin \\pi = 0$, so Rolle's Theorem applies. $f'(x) = \\cos x = 0$ at $x = \\frac{\\pi}{2}$, the only solution in $(0, \\pi)$. Choice C is an endpoint, and Rolle's Theorem only guarantees $c$ strictly inside the interval.",
                "zh": "$\\sin 0 = \\sin \\pi = 0$，罗尔定理适用。$f'(x) = \\cos x = 0$ 在 $(0, \\pi)$ 内的唯一解是 $x = \\frac{\\pi}{2}$。选项 C 是端点，而罗尔定理只保证 $c$ 严格位于区间内部。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The Mean Value Theorem is applied to $f(x) = \\sqrt{x}$ on $[0, 4]$. Find the value of $c$ it guarantees. Give an integer.",
                "zh": "对 $f(x) = \\sqrt{x}$ 在 $[0, 4]$ 上应用中值定理，求定理保证存在的 $c$ 值。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "+1"
              ],
              "explanation": {
                "en": "The average rate of change is $\\frac{2 - 0}{4 - 0} = \\frac{1}{2}$. Setting $f'(c) = \\frac{1}{2\\sqrt{c}} = \\frac{1}{2}$ gives $\\sqrt{c} = 1$, so $c = 1$. Note that $f$ is not differentiable at $x = 0$, but the MVT only requires differentiability on the open interval $(0, 4)$, so it still applies.",
                "zh": "平均变化率为 $\\frac{2 - 0}{4 - 0} = \\frac{1}{2}$。令 $f'(c) = \\frac{1}{2\\sqrt{c}} = \\frac{1}{2}$ 得 $\\sqrt{c} = 1$，即 $c = 1$。注意 $f$ 在 $x = 0$ 处不可导，但中值定理只要求在开区间 $(0, 4)$ 内可导，故定理仍然适用。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Suppose $f'(x) = (x - 1)^2 (x - 3)$. Which statement about $f$ is true?",
                "zh": "设 $f'(x) = (x - 1)^2 (x - 3)$。下列关于 $f$ 的说法哪一项正确？"
              },
              "choices": [
                "$f$ has a local minimum at $x = 1$",
                "$f$ has a local maximum at $x = 1$",
                "$f$ has a local minimum at $x = 3$",
                "$f$ has a local maximum at $x = 3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The factor $(x-1)^2$ is never negative, so $f'$ does not change sign at $x = 1$ — no extremum there. At $x = 3$, $f'$ changes from negative to positive, giving a local minimum. Choices A and B are tempting because $x = 1$ is a critical point, but a critical point without a sign change is not an extremum.",
                "zh": "因子 $(x-1)^2$ 永不为负，故 $f'$ 在 $x = 1$ 处不变号——那里没有极值。在 $x = 3$ 处 $f'$ 由负变正，是局部极小值点。选项 A、B 之所以诱人，是因为 $x = 1$ 确实是临界点，但不变号的临界点不是极值点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On which set is $f(x) = x^3 - 12x$ increasing?",
                "zh": "函数 $f(x) = x^3 - 12x$ 在哪个集合上递增？"
              },
              "choices": [
                "$(-2, 2)$",
                "$(-\\infty, -2) \\cup (2, \\infty)$",
                "$(0, \\infty)$",
                "$(2, \\infty)$ only"
              ],
              "answer": 1,
              "explanation": {
                "en": "$f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$, which is positive when $x < -2$ or $x > 2$. Choice A gives the decreasing interval — a classic mix-up when reading a sign chart too quickly. Choice D forgets the left branch.",
                "zh": "$f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$，当 $x < -2$ 或 $x > 2$ 时为正。选项 A 是递减区间——匆忙读符号表时最容易犯这种错。选项 D 漏掉了左边的一支。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "By the Extreme Value Theorem, $f(x) = x^2 - 4x$ attains an absolute maximum on $[0, 5]$. Find that maximum value. Give an integer.",
                "zh": "由最值定理，$f(x) = x^2 - 4x$ 在 $[0, 5]$ 上必有绝对最大值。求这个最大值。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "The candidates are the endpoints and critical points. $f'(x) = 2x - 4 = 0$ at $x = 2$. Compare $f(0) = 0$, $f(2) = -4$, $f(5) = 5$. The absolute maximum value is $5$, at the endpoint $x = 5$ — a reminder that endpoints, not just critical points, can win.",
                "zh": "候选点为端点和临界点。$f'(x) = 2x - 4 = 0$ 得 $x = 2$。比较 $f(0) = 0$、$f(2) = -4$、$f(5) = 5$，绝对最大值是 $5$，出现在端点 $x = 5$——提醒我们最值可能出现在端点，而不仅仅是临界点。"
              }
            }
          ]
        },
        {
          "id": "concavity-and-curve-analysis",
          "title": "Concavity and Curve Analysis",
          "titleZh": "凹凸性与函数图像分析",
          "content": [
            {
              "type": "h2",
              "en": "Reading the Shape of a Graph",
              "zh": "解读函数图像的形状"
            },
            {
              "type": "p",
              "en": "The first derivative tells you which way a graph goes; the second derivative tells you how it bends. Combining them lets you sketch a function's complete shape — and lets you answer one of the AP exam's favorite question types: given the graph of $f'$, describe the behavior of $f$.",
              "zh": "一阶导数告诉你图像往哪个方向走，二阶导数告诉你图像如何弯曲。把两者结合起来，就能勾勒出函数的完整形状——也能应对 AP 考试最钟爱的题型之一：给出 $f'$ 的图像，描述 $f$ 的性质。"
            },
            {
              "type": "h3",
              "en": "Concavity and Inflection Points",
              "zh": "凹凸性与拐点"
            },
            {
              "type": "p",
              "en": "If $f''(x) > 0$ on an interval, the graph of $f$ is concave up there (it holds water; tangent lines lie below the curve). If $f''(x) < 0$, the graph is concave down. An inflection point is a point where $f$ is continuous and the concavity changes — that is, where $f''$ changes sign.",
              "zh": "若在某区间上 $f''(x) > 0$，则 $f$ 的图像在该区间上凹（开口向上，切线位于曲线下方）；若 $f''(x) < 0$，则图像下凹（凸）。拐点是 $f$ 连续且凹凸性发生改变的点——即 $f''$ 变号的点。"
            },
            {
              "type": "note",
              "en": "Common mistake: $f''(c) = 0$ alone does NOT make $x = c$ an inflection point. For $f(x) = x^4$, $f''(0) = 0$ but $f''$ is positive on both sides, so there is no inflection at $0$. You must verify a sign change in $f''$, and AP graders expect that justification in writing.",
              "zh": "常见错误：仅有 $f''(c) = 0$ 并不能说明 $x = c$ 是拐点。对 $f(x) = x^4$，虽然 $f''(0) = 0$，但 $f''$ 在 $0$ 两侧都为正，所以 $0$ 处没有拐点。必须验证 $f''$ 变号，AP 阅卷人要求把这一理由写出来。"
            },
            {
              "type": "h3",
              "en": "The Second Derivative Test",
              "zh": "二阶导数判别法"
            },
            {
              "type": "p",
              "en": "When $f'(c) = 0$, the concavity at $c$ classifies the critical point without a sign chart:",
              "zh": "当 $f'(c) = 0$ 时，可以利用 $c$ 处的凹凸性直接判断临界点类型，无需符号表："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $f'(c) = 0$ and $f''(c) > 0$, then $f$ has a local minimum at $c$ (concave up cradles a minimum).",
                  "zh": "若 $f'(c) = 0$ 且 $f''(c) > 0$，则 $f$ 在 $c$ 处取局部极小值（上凹托住极小值）。"
                },
                {
                  "en": "If $f'(c) = 0$ and $f''(c) < 0$, then $f$ has a local maximum at $c$.",
                  "zh": "若 $f'(c) = 0$ 且 $f''(c) < 0$，则 $f$ 在 $c$ 处取局部极大值。"
                },
                {
                  "en": "If $f''(c) = 0$, the test is inconclusive — fall back to the First Derivative Test.",
                  "zh": "若 $f''(c) = 0$，判别法失效——此时应改用一阶导数判别法。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Candidates Test for Absolute Extrema",
              "zh": "候选点检验法求绝对最值"
            },
            {
              "type": "p",
              "en": "To find the absolute extrema of a continuous $f$ on a closed interval $[a, b]$: (1) find all critical points of $f$ in $(a, b)$; (2) evaluate $f$ at every critical point and at both endpoints; (3) the largest output is the absolute maximum and the smallest is the absolute minimum. On the AP exam, presenting this table of candidate values IS the justification.",
              "zh": "求连续函数 $f$ 在闭区间 $[a, b]$ 上的绝对最值：（1）找出 $f$ 在 $(a, b)$ 内的所有临界点；（2）在每个临界点和两个端点处计算 $f$ 的值；（3）最大的输出是绝对最大值，最小的是绝对最小值。在 AP 考试中，列出这张候选值表本身就是完整的理由。"
            },
            {
              "type": "h3",
              "en": "Connecting the Graphs of $f$, $f'$, and $f''$",
              "zh": "联系 $f$、$f'$ 与 $f''$ 的图像"
            },
            {
              "type": "p",
              "en": "A signature AP question shows the graph of $f'$ (not $f$!) and asks about $f$. Translate carefully:",
              "zh": "AP 的一类标志性题目给出的是 $f'$ 的图像（不是 $f$ 的！），却问关于 $f$ 的问题。要仔细转换："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Where the graph of $f'$ is above the $x$-axis, $f$ is increasing; below, $f$ is decreasing.",
                  "zh": "$f'$ 的图像在 $x$ 轴上方时，$f$ 递增；在下方时，$f$ 递减。"
                },
                {
                  "en": "Where $f'$ crosses the $x$-axis, $f$ has a critical point; a crossing (sign change) means a local extremum of $f$.",
                  "zh": "$f'$ 的图像穿过 $x$ 轴处是 $f$ 的临界点；穿过（变号）意味着 $f$ 有局部极值。"
                },
                {
                  "en": "Where $f'$ is increasing, $f$ is concave up; where $f'$ has a local max or min, $f$ has an inflection point.",
                  "zh": "$f'$ 递增的地方 $f$ 上凹；$f'$ 取局部极大或极小值的地方，$f$ 有拐点。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: in a justification, name the function whose sign you are citing. Write \"$f$ has a local maximum at $x = 2$ because $f'$ changes from positive to negative at $x = 2$\" — not \"the graph changes direction.\" Vague pronouns like \"it\" cost points every year.",
              "zh": "AP 考试提示：写理由时必须点明你引用的是哪个函数的符号。要写\"$f$ 在 $x = 2$ 处有局部极大值，因为 $f'$ 在 $x = 2$ 处由正变负\"——而不是\"图像改变了方向\"。每年都有考生因为含糊地写\"它\"而丢分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Full Curve Analysis",
                "zh": "例题 1：完整的图像分析"
              },
              "problem": {
                "en": "For $f(x) = x^3 - 3x^2$, find all local extrema and inflection points.",
                "zh": "对 $f(x) = x^3 - 3x^2$，求所有局部极值和拐点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First derivative: $f'(x) = 3x^2 - 6x = 3x(x - 2)$, giving critical points $x = 0$ and $x = 2$. Second derivative:",
                  "zh": "一阶导数：$f'(x) = 3x^2 - 6x = 3x(x - 2)$，临界点为 $x = 0$ 和 $x = 2$。二阶导数："
                },
                {
                  "type": "math",
                  "tex": "f''(x) = 6x - 6 = 6(x - 1)"
                },
                {
                  "type": "p",
                  "en": "Second Derivative Test: $f''(0) = -6 < 0$, so $(0, 0)$ is a local maximum; $f''(2) = 6 > 0$, so $(2, -4)$ is a local minimum.",
                  "zh": "二阶导数判别法：$f''(0) = -6 < 0$，故 $(0, 0)$ 是局部极大值点；$f''(2) = 6 > 0$，故 $(2, -4)$ 是局部极小值点。"
                },
                {
                  "type": "p",
                  "en": "$f''$ changes sign from negative to positive at $x = 1$, so $(1, -2)$ is an inflection point: the curve switches from concave down to concave up there.",
                  "zh": "$f''$ 在 $x = 1$ 处由负变正，故 $(1, -2)$ 是拐点：曲线在此由下凹转为上凹。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Candidates Test on a Closed Interval",
                "zh": "例题 2：闭区间上的候选点检验法"
              },
              "problem": {
                "en": "Find the absolute maximum and minimum values of $f(x) = x^3 - 12x$ on $[-3, 5]$.",
                "zh": "求 $f(x) = x^3 - 12x$ 在 $[-3, 5]$ 上的绝对最大值和最小值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$, so the critical points are $x = \\pm 2$, both inside $(-3, 5)$. Evaluate $f$ at all four candidates:",
                  "zh": "$f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$，临界点为 $x = \\pm 2$，都在 $(-3, 5)$ 内。在全部四个候选点处计算 $f$ 的值："
                },
                {
                  "type": "math",
                  "tex": "f(-3) = 9, \\quad f(-2) = 16, \\quad f(2) = -16, \\quad f(5) = 65"
                },
                {
                  "type": "p",
                  "en": "The absolute maximum is $65$ at $x = 5$ (an endpoint beats the local max!), and the absolute minimum is $-16$ at $x = 2$. Skipping the endpoints would give the wrong maximum — the most common candidates-test error.",
                  "zh": "绝对最大值是 $65$，在 $x = 5$ 处（端点胜过了局部极大值！）；绝对最小值是 $-16$，在 $x = 2$ 处。漏掉端点会得到错误的最大值——这是候选点检验法中最常见的错误。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The graph of $f(x) = x^4 - 4x^3$ has inflection points at which value(s) of $x$?",
                "zh": "函数 $f(x) = x^4 - 4x^3$ 的图像在哪些 $x$ 值处有拐点？"
              },
              "choices": [
                "$x = 0$ only",
                "$x = 2$ only",
                "$x = 0$ and $x = 2$",
                "$x = 0$ and $x = 3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$f''(x) = 12x^2 - 24x = 12x(x - 2)$, which changes sign at both $x = 0$ (positive to negative) and $x = 2$ (negative to positive). Choice D is tempting because $x = 3$ is where $f'$ vanishes — a critical point of $f$, not an inflection point.",
                "zh": "$f''(x) = 12x^2 - 24x = 12x(x - 2)$，在 $x = 0$（由正变负）和 $x = 2$（由负变正）处都变号。选项 D 之所以诱人，是因为 $x = 3$ 是 $f'$ 的零点——那是 $f$ 的临界点，不是拐点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the $x$-coordinate of the inflection point of $f(x) = x^3 - 6x^2 + 9x$. Give an integer.",
                "zh": "求 $f(x) = x^3 - 6x^2 + 9x$ 的拐点的 $x$ 坐标。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "$f''(x) = 6x - 12 = 0$ at $x = 2$, and since $6x - 12$ is negative for $x < 2$ and positive for $x > 2$, the concavity genuinely changes there. Both steps — solving $f'' = 0$ and confirming the sign change — belong in an AP justification.",
                "zh": "$f''(x) = 6x - 12 = 0$ 得 $x = 2$；由于 $6x - 12$ 在 $x < 2$ 时为负、$x > 2$ 时为正，凹凸性确实在此改变。解 $f'' = 0$ 和确认变号这两步在 AP 答题中都要写出来。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Suppose $f'(c) = 0$ and $f''(c) < 0$. By the Second Derivative Test, what happens at $x = c$?",
                "zh": "设 $f'(c) = 0$ 且 $f''(c) < 0$。根据二阶导数判别法，$x = c$ 处会发生什么？"
              },
              "choices": [
                "$f$ has a local minimum",
                "$f$ has an inflection point",
                "The test is inconclusive",
                "$f$ has a local maximum"
              ],
              "answer": 3,
              "explanation": {
                "en": "A horizontal tangent on a concave-down arch is the top of the arch: a local maximum. Choice B confuses the role of $f''$ — an inflection point requires $f''$ to change sign, not merely to be negative.",
                "zh": "在下凹的拱形上出现水平切线，说明该点是拱顶：局部极大值。选项 B 混淆了 $f''$ 的作用——拐点要求 $f''$ 变号，而不仅仅是取负值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Using the Candidates Test, what is the absolute minimum value of $f(x) = x^3 - 3x$ on $[0, 2]$?",
                "zh": "用候选点检验法，求 $f(x) = x^3 - 3x$ 在 $[0, 2]$ 上的绝对最小值。"
              },
              "choices": [
                "$-2$",
                "$0$",
                "$2$",
                "$-1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$f'(x) = 3x^2 - 3 = 0$ gives $x = \\pm 1$, but only $x = 1$ is in the interval. Candidates: $f(0) = 0$, $f(1) = -2$, $f(2) = 2$. The minimum value is $-2$. Choice D is the location $x = 1$'s neighbor trap: the question asks for the minimum VALUE, not the $x$ where it occurs.",
                "zh": "$f'(x) = 3x^2 - 3 = 0$ 得 $x = \\pm 1$，但只有 $x = 1$ 在区间内。候选值：$f(0) = 0$，$f(1) = -2$，$f(2) = 2$，最小值为 $-2$。注意题目问的是最小\"值\"，不是取得最小值的 $x$ 坐标——审题不清是常见陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f'$ is increasing on an interval, what must be true of $f$ on that interval?",
                "zh": "若 $f'$ 在某区间上递增，则 $f$ 在该区间上必定满足什么？"
              },
              "choices": [
                "$f$ is increasing",
                "$f$ is concave up",
                "$f$ is concave down",
                "$f$ is positive"
              ],
              "answer": 1,
              "explanation": {
                "en": "$f'$ increasing means $f'' \\ge 0$ in the sense of concavity: the slopes of $f$ are rising, which is exactly concave up. Choice A is the classic trap — an increasing derivative can still be negative, so $f$ itself may be decreasing while concave up.",
                "zh": "$f'$ 递增意味着 $f$ 的切线斜率在不断增大，这正是上凹的含义。选项 A 是经典陷阱——递增的导数仍可能是负数，此时 $f$ 本身在递减，却同时上凹。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^4 - 8x^2$. Use the Second Derivative Test to classify the critical point at $x = 2$, then give the local minimum value $f(2)$. Give an integer.",
                "zh": "设 $f(x) = x^4 - 8x^2$。用二阶导数判别法判断临界点 $x = 2$ 的类型，并给出局部极小值 $f(2)$。请填一个整数。"
              },
              "answer": "-16",
              "accept": [
                "-16.0"
              ],
              "explanation": {
                "en": "$f'(x) = 4x^3 - 16x = 4x(x^2 - 4)$ confirms $x = 2$ is critical. $f''(x) = 12x^2 - 16$, so $f''(2) = 32 > 0$: a local minimum. Its value is $f(2) = 16 - 32 = -16$.",
                "zh": "$f'(x) = 4x^3 - 16x = 4x(x^2 - 4)$，可见 $x = 2$ 是临界点。$f''(x) = 12x^2 - 16$，故 $f''(2) = 32 > 0$：局部极小值。其值为 $f(2) = 16 - 32 = -16$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Suppose $g''(x) = (x - 1)(x - 4)^2$. At which value(s) of $x$ does the graph of $g$ have an inflection point?",
                "zh": "设 $g''(x) = (x - 1)(x - 4)^2$。$g$ 的图像在哪些 $x$ 值处有拐点？"
              },
              "choices": [
                "$x = 1$ and $x = 4$",
                "$x = 4$ only",
                "No inflection points",
                "$x = 1$ only"
              ],
              "answer": 3,
              "explanation": {
                "en": "The factor $(x - 4)^2$ never changes sign, so $g''$ changes sign only at $x = 1$. Choice A is the standard trap: $g''(4) = 0$, but a zero of $g''$ without a sign change is not an inflection point.",
                "zh": "因子 $(x - 4)^2$ 永不变号，所以 $g''$ 只在 $x = 1$ 处变号。选项 A 是标准陷阱：虽然 $g''(4) = 0$，但 $g''$ 不变号的零点不是拐点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x e^x$. Its second derivative is $f''(x) = (x + 2)e^x$. Find the $x$-coordinate of the inflection point of $f$. Give an integer.",
                "zh": "设 $f(x) = x e^x$，其二阶导数为 $f''(x) = (x + 2)e^x$。求 $f$ 的拐点的 $x$ 坐标。请填一个整数。"
              },
              "answer": "-2",
              "accept": [
                "-2.0"
              ],
              "explanation": {
                "en": "Since $e^x > 0$ for all $x$, the sign of $f''$ matches the sign of $x + 2$, which changes from negative to positive at $x = -2$. The concavity switches there, so $x = -2$ is the inflection point.",
                "zh": "因为对所有 $x$ 都有 $e^x > 0$，$f''$ 的符号与 $x + 2$ 相同，而 $x + 2$ 在 $x = -2$ 处由负变正。凹凸性在此改变，故 $x = -2$ 是拐点。"
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
              "en": "From Words to Calculus",
              "zh": "从文字到微积分"
            },
            {
              "type": "p",
              "en": "Optimization problems ask for the largest or smallest possible value of a real-world quantity — the biggest area a fence can enclose, the cheapest box, the shortest distance. The calculus (find critical points, classify them) is the easy part. The real skill is the setup: translating a paragraph into one function of one variable on the correct domain.",
              "zh": "最优化问题求某个实际量的最大或最小可能值——篱笆能围出的最大面积、成本最低的盒子、最短的距离。微积分部分（求临界点并分类）反而是容易的，真正的功夫在于建模：把一段文字翻译成正确定义域上的一个单变量函数。"
            },
            {
              "type": "h3",
              "en": "The Five-Step Setup",
              "zh": "五步建模法"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1 — Identify the objective function: the quantity to maximize or minimize (area, volume, cost, distance). Write its formula.",
                  "zh": "第 1 步——确定目标函数：要最大化或最小化的量（面积、体积、成本、距离），写出它的公式。"
                },
                {
                  "en": "Step 2 — Identify the constraint: the equation relating the variables (fixed perimeter, fixed surface area, a point must lie on a curve).",
                  "zh": "第 2 步——确定约束条件：联系各变量的方程（周长固定、表面积固定、点必须在某曲线上）。"
                },
                {
                  "en": "Step 3 — Use the constraint to eliminate variables until the objective is a function of ONE variable.",
                  "zh": "第 3 步——利用约束条件消元，把目标函数化为只含一个变量的函数。"
                },
                {
                  "en": "Step 4 — Determine the domain from the physical situation (lengths must be positive, a coordinate may be unrestricted).",
                  "zh": "第 4 步——根据实际情形确定定义域（长度必须为正，坐标也许不受限制）。"
                },
                {
                  "en": "Step 5 — Find critical points, classify them, answer the question asked, and include units.",
                  "zh": "第 5 步——求临界点并分类，回答题目所问的问题，并写上单位。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For example, if a box's volume is $V = x(12 - 2x)^2$, the physical domain is $0 < x < 6$: a cut of $x \\le 0$ makes no box, and $x \\ge 6$ leaves no base. Writing the domain down is not busywork — it is how you know which critical points to keep and which to discard.",
              "zh": "例如，若盒子的体积是 $V = x(12 - 2x)^2$，其实际定义域是 $0 < x < 6$：剪去 $x \\le 0$ 做不成盒子，$x \\ge 6$ 则不剩底面。写出定义域绝不是走过场——正是它告诉你哪些临界点保留、哪些舍去。"
            },
            {
              "type": "h3",
              "en": "Closed Interval vs. Open Interval Analysis",
              "zh": "闭区间与开区间的分析方法"
            },
            {
              "type": "p",
              "en": "If the domain is a closed interval $[a, b]$, use the Candidates Test: compare the objective's values at critical points and endpoints. If the domain is open, such as $(0, \\infty)$, there are no endpoints to check — instead show that your single critical point is the absolute extremum, either with a first-derivative sign argument or by noting that $f'' $ keeps one sign on the whole domain.",
              "zh": "若定义域是闭区间 $[a, b]$，用候选点检验法：比较目标函数在临界点和端点处的值。若定义域是开区间（如 $(0, \\infty)$），则没有端点可查——需要证明唯一的临界点就是绝对最值点，可以用一阶导数的符号讨论，或指出 $f''$ 在整个定义域上保持同号。"
            },
            {
              "type": "p",
              "en": "A useful shortcut on an open interval: if $f$ has exactly one critical point $c$ and $f''(x) > 0$ everywhere on the domain, then $f(c)$ is the absolute minimum (the graph is one concave-up valley); likewise $f'' < 0$ everywhere makes a lone critical point the absolute maximum.",
              "zh": "开区间上的一个实用捷径：若 $f$ 只有一个临界点 $c$，且在整个定义域上 $f''(x) > 0$，则 $f(c)$ 是绝对最小值（图像是一个上凹的单谷）；同理，若处处 $f'' < 0$，唯一的临界点就是绝对最大值点。"
            },
            {
              "type": "note",
              "en": "AP exam tip: on FRQs, \"the answer is $x = 25$\" earns the answer point but not the justification point. You must write WHY it is a maximum, e.g. \"$A'(x) > 0$ for $0 < x < 25$ and $A'(x) < 0$ for $x > 25$, so $A$ has its absolute maximum at $x = 25$.\" Merely computing $A'(25) = 0$ justifies nothing — critical points can be minima or neither.",
              "zh": "AP 考试提示：在解答题中，只写\"答案是 $x = 25$\"能拿到答案分，但拿不到理由分。必须写出它为什么是最大值，例如\"当 $0 < x < 25$ 时 $A'(x) > 0$，当 $x > 25$ 时 $A'(x) < 0$，故 $A$ 在 $x = 25$ 处取得绝对最大值\"。仅仅算出 $A'(25) = 0$ 不能说明任何问题——临界点也可能是极小值点或两者都不是。"
            },
            {
              "type": "h3",
              "en": "Classic Problem Types to Recognize",
              "zh": "需要熟悉的经典题型"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Fence/pen problems: fixed fencing length (constraint) encloses maximum area (objective); watch for a wall or river replacing one side.",
                  "zh": "篱笆/围栏问题：篱笆总长固定（约束），围出最大面积（目标）；注意是否有一面靠墙或靠河而不需要篱笆。"
                },
                {
                  "en": "Box problems: cut squares of side $x$ from a sheet's corners and fold; volume $V = x(\\text{length} - 2x)(\\text{width} - 2x)$ with $x$ limited by the sheet's size.",
                  "zh": "盒子问题：从纸板四角剪去边长为 $x$ 的正方形后折起；体积为 $V = x(\\text{长} - 2x)(\\text{宽} - 2x)$，$x$ 受纸板尺寸限制。"
                },
                {
                  "en": "Minimum distance problems: minimize the SQUARED distance $D^2$ instead of $D$ — the square root only complicates the derivative, and both are minimized at the same point.",
                  "zh": "最短距离问题：最小化距离的平方 $D^2$ 而不是 $D$——开根号只会使求导复杂，而且两者在同一点取得最小值。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Finally, always reread the question before boxing your answer. Optimization problems love to ask for the dimensions when you solved for $x$, the maximum value when you found its location, or the cost when you found the size. Getting the calculus right and answering the wrong question is a heartbreakingly common way to lose the answer point.",
              "zh": "最后，写下最终答案前一定要重读题目。最优化问题特别喜欢\"声东击西\"：你解出了 $x$，它问的却是各边尺寸；你找到了最值点的位置，它问的却是最大值本身；你求出了尺寸，它问的却是成本。微积分全对却答非所问，是丢掉答案分最令人心痛的方式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: The Fence Along a Barn",
                "zh": "例题 1：靠仓库的篱笆"
              },
              "problem": {
                "en": "A farmer has $200$ meters of fencing and wants to enclose a rectangular pen against a long barn wall, so only three sides need fencing. What dimensions maximize the enclosed area?",
                "zh": "农场主有 $200$ 米篱笆，要靠着一面长仓库墙围一个矩形围栏，因此只需围三条边。怎样的尺寸能使围出的面积最大？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $x$ be the length of each side perpendicular to the barn. Constraint: $2x + w = 200$, so $w = 200 - 2x$. Objective:",
                  "zh": "设与仓库墙垂直的两条边各长 $x$。约束：$2x + w = 200$，故 $w = 200 - 2x$。目标函数："
                },
                {
                  "type": "math",
                  "tex": "A(x) = x(200 - 2x) = 200x - 2x^2, \\qquad 0 < x < 100"
                },
                {
                  "type": "p",
                  "en": "$A'(x) = 200 - 4x = 0$ gives $x = 50$. Justification on the open interval: $A'(x) > 0$ for $0 < x < 50$ and $A'(x) < 0$ for $50 < x < 100$, so $A$ attains its absolute maximum at $x = 50$.",
                  "zh": "$A'(x) = 200 - 4x = 0$ 得 $x = 50$。开区间上的理由：当 $0 < x < 50$ 时 $A'(x) > 0$，当 $50 < x < 100$ 时 $A'(x) < 0$，故 $A$ 在 $x = 50$ 处取得绝对最大值。"
                },
                {
                  "type": "p",
                  "en": "The dimensions are $50$ m by $w = 100$ m, giving a maximum area of $5000$ square meters. Note the answer is NOT a square — that intuition only applies when all four sides are fenced.",
                  "zh": "尺寸为 $50$ 米 × $w = 100$ 米，最大面积为 $5000$ 平方米。注意答案并不是正方形——\"正方形面积最大\"的直觉只在四条边都要篱笆时成立。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Minimum Distance to a Curve",
                "zh": "例题 2：到曲线的最短距离"
              },
              "problem": {
                "en": "Find the point(s) on the parabola $y = x^2$ closest to the point $(0, 3)$.",
                "zh": "求抛物线 $y = x^2$ 上离点 $(0, 3)$ 最近的点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For a point $(x, x^2)$ on the parabola, minimize the squared distance:",
                  "zh": "对抛物线上的点 $(x, x^2)$，最小化距离的平方："
                },
                {
                  "type": "math",
                  "tex": "D(x) = x^2 + (x^2 - 3)^2"
                },
                {
                  "type": "p",
                  "en": "Differentiate: $D'(x) = 2x + 2(x^2 - 3)(2x) = 2x(2x^2 - 5)$. Critical points: $x = 0$ and $x = \\pm\\sqrt{5/2}$. A sign chart shows $D'$ goes $-, +, -, +$, so $x = 0$ is only a local maximum of closeness — the true minima are at $x = \\pm\\sqrt{5/2}$.",
                  "zh": "求导：$D'(x) = 2x + 2(x^2 - 3)(2x) = 2x(2x^2 - 5)$。临界点为 $x = 0$ 和 $x = \\pm\\sqrt{5/2}$。符号表显示 $D'$ 依次为 $-, +, -, +$，故 $x = 0$ 处距离反而取局部极大——真正的最小值在 $x = \\pm\\sqrt{5/2}$ 处。"
                },
                {
                  "type": "p",
                  "en": "The closest points are $\\left(\\pm\\sqrt{5/2},\\ 5/2\\right)$, with $D = 5/2 + 1/4 = 11/4$, so the minimum distance is $\\frac{\\sqrt{11}}{2}$. Minimizing $D^2$ avoided differentiating a square root, and by symmetry there are two answers — report both.",
                  "zh": "最近的点是 $\\left(\\pm\\sqrt{5/2},\\ 5/2\\right)$，此时 $D = 5/2 + 1/4 = 11/4$，最短距离为 $\\frac{\\sqrt{11}}{2}$。最小化 $D^2$ 避免了对根式求导；由对称性答案有两个——两个都要写。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A rectangular pen is built against a river (no fence needed along the river) using $100$ meters of fencing for the other three sides. What is the maximum area that can be enclosed, in square meters?",
                "zh": "一个矩形围栏一边靠河（靠河一侧不需要篱笆），其余三边共用 $100$ 米篱笆。能围出的最大面积是多少平方米？"
              },
              "choices": [
                "$625$",
                "$2500$",
                "$1250$",
                "$1000$"
              ],
              "answer": 2,
              "explanation": {
                "en": "With sides $x, x$ perpendicular to the river, the area is $A(x) = x(100 - 2x)$. Then $A'(x) = 100 - 4x = 0$ at $x = 25$, giving $A = 25 \\cdot 50 = 1250$. Choice A ($625$) comes from wrongly fencing all four sides with a square of side $25$.",
                "zh": "设垂直于河的两边各长 $x$，面积为 $A(x) = x(100 - 2x)$。$A'(x) = 100 - 4x = 0$ 得 $x = 25$，面积为 $25 \\cdot 50 = 1250$。选项 A（$625$）是误按四边都围篱笆、边长 $25$ 的正方形算出的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two positive numbers have sum $20$. Find the maximum possible value of their product. Give an integer.",
                "zh": "两个正数之和为 $20$。求它们乘积的最大可能值。请填一个整数。"
              },
              "answer": "100",
              "accept": [
                "100.0"
              ],
              "explanation": {
                "en": "Let the numbers be $x$ and $20 - x$, so $P(x) = 20x - x^2$ on $(0, 20)$. $P'(x) = 20 - 2x = 0$ at $x = 10$, and $P'$ changes from positive to negative there, so the maximum product is $10 \\cdot 10 = 100$.",
                "zh": "设两数为 $x$ 与 $20 - x$，则 $P(x) = 20x - x^2$，定义域 $(0, 20)$。$P'(x) = 20 - 2x = 0$ 得 $x = 10$，且 $P'$ 在此由正变负，故最大乘积为 $10 \\cdot 10 = 100$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An open-top box is made from a $12 \\times 12$ inch sheet by cutting equal squares of side $x$ from each corner and folding up the sides. What value of $x$ maximizes the volume?",
                "zh": "从一张 $12 \\times 12$ 英寸的纸板四角各剪去边长为 $x$ 的正方形并折起四边，做成一个无盖盒子。$x$ 取何值时体积最大？"
              },
              "choices": [
                "$x = 3$",
                "$x = 2$",
                "$x = 6$",
                "$x = 1$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$V(x) = x(12 - 2x)^2$ on $(0, 6)$. Then $V'(x) = (12 - 2x)(12 - 6x)$, which is zero at $x = 2$ and $x = 6$. Since $x = 6$ gives zero volume (an endpoint of the domain), the maximum is at $x = 2$, where $V = 2 \\cdot 64 = 128$ cubic inches. Choice C is the extraneous root.",
                "zh": "$V(x) = x(12 - 2x)^2$，定义域 $(0, 6)$。$V'(x) = (12 - 2x)(12 - 6x)$，零点为 $x = 2$ 和 $x = 6$。$x = 6$ 时体积为零（定义域端点），故最大值在 $x = 2$ 处，此时 $V = 2 \\cdot 64 = 128$ 立方英寸。选项 C 是应当舍去的增根。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $x > 0$, find the minimum value of $f(x) = x + \\frac{4}{x}$. Give an integer.",
                "zh": "当 $x > 0$ 时，求 $f(x) = x + \\frac{4}{x}$ 的最小值。请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "$f'(x) = 1 - \\frac{4}{x^2} = 0$ gives $x = 2$ (rejecting $-2$ since $x > 0$). $f''(x) = \\frac{8}{x^3} > 0$ on the whole domain, so $x = 2$ is the absolute minimum, with value $f(2) = 2 + 2 = 4$. Remember the question asks for the minimum value, not the location $x = 2$.",
                "zh": "$f'(x) = 1 - \\frac{4}{x^2} = 0$ 得 $x = 2$（因 $x > 0$ 舍去 $-2$）。整个定义域上 $f''(x) = \\frac{8}{x^3} > 0$，故 $x = 2$ 是绝对最小值点，最小值为 $f(2) = 2 + 2 = 4$。注意题目问的是最小值，不是位置 $x = 2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A quantity $A(x)$ is defined on the open interval $(0, \\infty)$ and has exactly one critical point, at $x = c$. Which statement, by itself, is a complete AP justification that $A(c)$ is the absolute maximum?",
                "zh": "量 $A(x)$ 定义在开区间 $(0, \\infty)$ 上，且只有一个临界点 $x = c$。下列哪一项本身就足以构成 $A(c)$ 是绝对最大值的完整 AP 理由？"
              },
              "choices": [
                "$A'(c) = 0$",
                "$A(c) > A(1)$",
                "$A(c)$ is larger than the values at the endpoints",
                "$A'(x) > 0$ for $0 < x < c$ and $A'(x) < 0$ for $x > c$"
              ],
              "answer": 3,
              "explanation": {
                "en": "If $A$ increases everywhere before $c$ and decreases everywhere after, then $A(c)$ beats every other value on the domain — a complete global argument. Choice A only identifies a candidate. Choice C is impossible: an open interval has no endpoints to evaluate, which is exactly why the sign argument is needed.",
                "zh": "若 $A$ 在 $c$ 之前处处递增、之后处处递减，则 $A(c)$ 大于定义域上所有其他值——这是完整的全局论证。选项 A 只找到了候选点。选项 C 不可能成立：开区间没有端点可以代入，这正是需要符号论证的原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rectangle has perimeter $36$. What is its maximum possible area?",
                "zh": "一个矩形的周长为 $36$。它的最大可能面积是多少？"
              },
              "choices": [
                "$81$",
                "$72$",
                "$36$",
                "$324$"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $l + w = 18$, area $A(l) = l(18 - l)$ has $A'(l) = 18 - 2l = 0$ at $l = 9$, so the optimal rectangle is a $9 \\times 9$ square with area $81$. Choice D ($324 = 18^2$) forgets that $18$ is the semi-perimeter shared between length and width.",
                "zh": "由 $l + w = 18$，面积 $A(l) = l(18 - l)$，$A'(l) = 18 - 2l = 0$ 得 $l = 9$，最优矩形是 $9 \\times 9$ 的正方形，面积 $81$。选项 D（$324 = 18^2$）忘了 $18$ 是长与宽共享的半周长。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the minimum SQUARED distance from the point $(1, 0)$ to the curve $y = \\sqrt{x}$. Give a fraction a/b.",
                "zh": "求点 $(1, 0)$ 到曲线 $y = \\sqrt{x}$ 的最短距离的平方。答案写成分数 a/b 的形式。"
              },
              "answer": "3/4",
              "accept": [
                "0.75"
              ],
              "explanation": {
                "en": "For $(x, \\sqrt{x})$ on the curve, $D(x) = (x - 1)^2 + x = x^2 - x + 1$. Then $D'(x) = 2x - 1 = 0$ at $x = \\frac{1}{2}$, and $D'' = 2 > 0$ makes it the absolute minimum: $D\\left(\\frac{1}{2}\\right) = \\frac{1}{4} - \\frac{1}{2} + 1 = \\frac{3}{4}$. Working with $D^2$ instead of $D$ keeps the algebra clean.",
                "zh": "对曲线上的点 $(x, \\sqrt{x})$，$D(x) = (x - 1)^2 + x = x^2 - x + 1$。$D'(x) = 2x - 1 = 0$ 得 $x = \\frac{1}{2}$，且 $D'' = 2 > 0$，故为绝对最小值：$D\\left(\\frac{1}{2}\\right) = \\frac{1}{4} - \\frac{1}{2} + 1 = \\frac{3}{4}$。用距离的平方 $D^2$ 代替 $D$ 能让代数运算简洁得多。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In an optimization problem on an open interval, a function has exactly one critical point, at $x = c$, and $f''(x) > 0$ for ALL $x$ in the domain. What can you conclude?",
                "zh": "在一个开区间上的最优化问题中，函数只有一个临界点 $x = c$，且对定义域内所有 $x$ 都有 $f''(x) > 0$。可以得出什么结论？"
              },
              "choices": [
                "$f(c)$ is a local minimum but might not be absolute",
                "$f(c)$ is the absolute maximum",
                "$f(c)$ is the absolute minimum",
                "Nothing without checking endpoints"
              ],
              "answer": 2,
              "explanation": {
                "en": "A function that is concave up on its entire domain and has one critical point attains its absolute minimum there — the graph is a single valley. Choice A undersells the conclusion: global concavity upgrades \"local\" to \"absolute.\" Choice D fails because open intervals have no endpoints to check.",
                "zh": "在整个定义域上上凹且只有一个临界点的函数，在该点取得绝对最小值——图像就是一个单一的谷。选项 A 低估了结论：全域上凹能把\"局部\"升级为\"绝对\"。选项 D 不成立，因为开区间没有端点可查。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-6-integration",
      "title": "Unit 6: Integration and Accumulation of Change",
      "titleZh": "第六单元：积分与累积变化",
      "lessons": [
        {
          "id": "riemann-sums-and-accumulation",
          "title": "Riemann Sums and Accumulation Functions",
          "titleZh": "黎曼和与累积函数",
          "content": [
            {
              "type": "h2",
              "en": "The Definite Integral as Accumulated Change",
              "zh": "定积分：变化量的累积"
            },
            {
              "type": "p",
              "en": "If $f(t)$ is a rate — velocity in meters per second, water flowing in liters per minute — then the area between its graph and the $t$-axis measures total change. Riemann sums approximate that area with rectangles or trapezoids, and the definite integral is the exact value those approximations approach. The AP exam tests both directions: computing approximations from tables, and recognizing when a messy limit of sums is secretly an integral.",
              "zh": "如果 $f(t)$ 是一个变化率——以米每秒计的速度、以升每分钟计的进水速率——那么其图象与 $t$ 轴之间的面积就表示总变化量。黎曼和用矩形或梯形近似这个面积，而定积分正是这些近似所趋近的精确值。AP 考试从两个方向考查：根据表格计算近似值，以及识别一个复杂的和式极限其实就是一个积分。"
            },
            {
              "type": "h3",
              "en": "Four Ways to Approximate",
              "zh": "四种近似方法"
            },
            {
              "type": "p",
              "en": "Partition $[a, b]$ into subintervals. On each subinterval of width $\\Delta x$, choose a height for the approximating rectangle:",
              "zh": "把区间 $[a, b]$ 分割成若干子区间。在每个宽度为 $\\Delta x$ 的子区间上，为近似矩形选择一个高度："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Left Riemann sum: use the function value at the left endpoint of each subinterval.",
                  "zh": "左黎曼和：使用每个子区间左端点处的函数值。"
                },
                {
                  "en": "Right Riemann sum: use the value at the right endpoint.",
                  "zh": "右黎曼和：使用右端点处的函数值。"
                },
                {
                  "en": "Midpoint sum: use the value at the midpoint of each subinterval.",
                  "zh": "中点和：使用每个子区间中点处的函数值。"
                },
                {
                  "en": "Trapezoidal sum: average the left and right values on each subinterval — geometrically, connect the endpoints with a slanted segment.",
                  "zh": "梯形和：对每个子区间取左右端点函数值的平均——从几何上看，就是用斜线段连接两个端点。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For $n$ equal subintervals of width $\\Delta x = \\frac{b-a}{n}$, the trapezoidal sum is",
              "zh": "当把区间等分为 $n$ 个宽度为 $\\Delta x = \\frac{b-a}{n}$ 的子区间时，梯形和为"
            },
            {
              "type": "math",
              "tex": "T = \\frac{\\Delta x}{2}\\left[ f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n) \\right]"
            },
            {
              "type": "note",
              "en": "AP exam tip: table problems almost always use UNEQUAL subinterval widths, so the formula above does not apply directly. Instead, add up individual trapezoids: $\\frac{f(x_{k-1}) + f(x_k)}{2} \\cdot (x_k - x_{k-1})$ for each pair of adjacent columns. Using a single $\\Delta x$ on an unequal table is one of the most common errors on this FRQ type.",
              "zh": "AP 考试提示：表格题几乎总是使用不等宽的子区间，因此上面的公式不能直接套用。正确做法是逐段累加梯形面积：对每一对相邻数据列计算 $\\frac{f(x_{k-1}) + f(x_k)}{2} \\cdot (x_k - x_{k-1})$。在不等宽表格上使用统一的 $\\Delta x$ 是这类 FRQ 中最常见的错误之一。"
            },
            {
              "type": "h3",
              "en": "Overestimate or Underestimate?",
              "zh": "高估还是低估？"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $f$ is increasing: the left sum underestimates and the right sum overestimates. (Reverse both if $f$ is decreasing.)",
                  "zh": "若 $f$ 递增：左和低估，右和高估。（若 $f$ 递减则两者相反。）"
                },
                {
                  "en": "If $f$ is concave up: the trapezoidal sum overestimates (chords lie above the curve) and the midpoint sum underestimates. (Reverse both if concave down.)",
                  "zh": "若 $f$ 上凹（凹向上）：梯形和高估（弦位于曲线上方），中点和低估。（若下凹则两者相反。）"
                },
                {
                  "en": "To earn the justification point, cite the behavior of $f$ in words: \"Because $f$ is increasing on $[a,b]$, each left rectangle lies below the curve, so the left sum is an underestimate.\"",
                  "zh": "要拿到说理分，必须用文字说明 $f$ 的性质：\"因为 $f$ 在 $[a,b]$ 上递增，每个左矩形都位于曲线下方，所以左和是低估。\""
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Definite Integral as a Limit",
              "zh": "定积分是黎曼和的极限"
            },
            {
              "type": "p",
              "en": "As $n \\to \\infty$, every Riemann sum converges to the same number — the definite integral. With right endpoints on $[a, b]$:",
              "zh": "当 $n \\to \\infty$ 时，所有黎曼和都收敛到同一个数——定积分。在 $[a, b]$ 上取右端点："
            },
            {
              "type": "math",
              "tex": "\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{k=1}^{n} f\\!\\left(a + k\\,\\frac{b-a}{n}\\right)\\frac{b-a}{n}"
            },
            {
              "type": "p",
              "en": "To translate a limit of sums into an integral, read off $\\Delta x = \\frac{b-a}{n}$ from the factor outside the function, then match $a + k\\,\\Delta x$ inside the function to identify $a$ and $b$.",
              "zh": "要把一个和式极限翻译成积分，先从函数外面的因子读出 $\\Delta x = \\frac{b-a}{n}$，再把函数内部的 $a + k\\,\\Delta x$ 与之对照，从而确定 $a$ 和 $b$。"
            },
            {
              "type": "h3",
              "en": "Accumulation Functions and the FTC",
              "zh": "累积函数与微积分基本定理"
            },
            {
              "type": "p",
              "en": "An accumulation function fixes the lower limit and lets the upper limit vary: $g(x) = \\int_a^x f(t)\\,dt$. The Fundamental Theorem of Calculus, Part 2, says differentiation undoes this accumulation — and if the upper limit is a function of $x$, the chain rule appears:",
              "zh": "累积函数固定积分下限、让上限变动：$g(x) = \\int_a^x f(t)\\,dt$。微积分基本定理（第二部分）指出，求导恰好抵消这种累积——若上限是 $x$ 的函数，则还要乘上链式法则因子："
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x), \\qquad \\frac{d}{dx} \\int_a^{u(x)} f(t)\\,dt = f(u(x)) \\cdot u'(x)"
            },
            {
              "type": "p",
              "en": "Because $g'(x) = f(x)$, the graph of $f$ tells the whole story of $g$: where $f > 0$, $g$ increases; where $f$ changes sign from positive to negative, $g$ has a local maximum; where $f$ itself changes direction, $g$ has an inflection point.",
              "zh": "由于 $g'(x) = f(x)$，$f$ 的图象完整刻画了 $g$ 的性态：$f > 0$ 处 $g$ 递增；$f$ 由正变负处 $g$ 取局部最大值；$f$ 本身改变增减方向处 $g$ 有拐点。"
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
                  "en": "Reversing limits flips the sign: $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$, and $\\int_a^a f(x)\\,dx = 0$.",
                  "zh": "交换上下限改变符号：$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$，且 $\\int_a^a f(x)\\,dx = 0$。"
                },
                {
                  "en": "Additivity: $\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$, even if $b$ is outside $[a, c]$.",
                  "zh": "区间可加性：$\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$，即使 $b$ 不在 $[a, c]$ 内也成立。"
                },
                {
                  "en": "Linearity: $\\int_a^b [c\\,f(x) + g(x)]\\,dx = c\\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$. Note that $\\int_a^b c\\,dx = c(b-a)$.",
                  "zh": "线性性：$\\int_a^b [c\\,f(x) + g(x)]\\,dx = c\\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$。注意 $\\int_a^b c\\,dx = c(b-a)$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Trapezoidal Sum from an Unequal Table",
                "zh": "例题 1：不等宽表格的梯形和"
              },
              "problem": {
                "en": "Water flows into a tank at rate $R(t)$ liters per minute. Selected values: $R(0)=10$, $R(2)=14$, $R(5)=20$, $R(8)=22$. Use a trapezoidal sum with the three subintervals indicated by the table to approximate $\\int_0^8 R(t)\\,dt$.",
                "zh": "水以 $R(t)$ 升/分钟的速率流入水箱。部分数据：$R(0)=10$，$R(2)=14$，$R(5)=20$，$R(8)=22$。用表格给出的三个子区间构造梯形和，近似 $\\int_0^8 R(t)\\,dt$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The widths are $2$, $3$, and $3$ — unequal, so build each trapezoid separately:",
                  "zh": "三个子区间的宽度分别为 $2$、$3$、$3$——不相等，因此逐段计算梯形面积："
                },
                {
                  "type": "math",
                  "tex": "\\frac{10+14}{2}(2) + \\frac{14+20}{2}(3) + \\frac{20+22}{2}(3) = 24 + 51 + 63 = 138"
                },
                {
                  "type": "p",
                  "en": "So approximately $138$ liters enter the tank. On the FRQ, always attach units and a sentence: \"$138$ liters is the approximate total amount of water that flows into the tank from $t = 0$ to $t = 8$ minutes.\"",
                  "zh": "所以大约有 $138$ 升水流入水箱。在 FRQ 中务必写明单位并作一句解释：\"$138$ 升是从 $t = 0$ 到 $t = 8$ 分钟流入水箱的水量的近似值。\""
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Differentiating an Accumulation Function",
                "zh": "例题 2：对累积函数求导"
              },
              "problem": {
                "en": "Let $F(x) = \\int_1^{x^2} \\sqrt{1 + t^3}\\,dt$. Find $F'(x)$, and compute $F'(1)$.",
                "zh": "设 $F(x) = \\int_1^{x^2} \\sqrt{1 + t^3}\\,dt$。求 $F'(x)$，并计算 $F'(1)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The upper limit is $u(x) = x^2$, so FTC Part 2 combined with the chain rule gives:",
                  "zh": "积分上限是 $u(x) = x^2$，由微积分基本定理（第二部分）结合链式法则得："
                },
                {
                  "type": "math",
                  "tex": "F'(x) = \\sqrt{1 + (x^2)^3} \\cdot \\frac{d}{dx}(x^2) = 2x\\sqrt{1 + x^6}"
                },
                {
                  "type": "p",
                  "en": "Substitute the upper limit into the integrand — do NOT integrate first. At $x = 1$: $F'(1) = 2\\sqrt{2}$. Notice $F(1) = \\int_1^1 \\sqrt{1+t^3}\\,dt = 0$, a separate fact that exams like to pair with this one.",
                  "zh": "把上限代入被积函数即可——千万不要先去积分。当 $x = 1$ 时：$F'(1) = 2\\sqrt{2}$。另外注意 $F(1) = \\int_1^1 \\sqrt{1+t^3}\\,dt = 0$，这是考试喜欢与本题搭配考查的另一个事实。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The table gives values of $f$: $f(0)=3$, $f(2)=5$, $f(4)=8$, $f(6)=10$, $f(8)=13$. Using four equal subintervals, the left Riemann sum for $\\int_0^8 f(x)\\,dx$ is",
                "zh": "表格给出 $f$ 的值：$f(0)=3$，$f(2)=5$，$f(4)=8$，$f(6)=10$，$f(8)=13$。用四个等宽子区间，$\\int_0^8 f(x)\\,dx$ 的左黎曼和是"
              },
              "choices": [
                "$62$",
                "$52$",
                "$72$",
                "$26$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Left endpoints are $x = 0, 2, 4, 6$ with $\\Delta x = 2$: $2(3 + 5 + 8 + 10) = 52$. Choice C ($72$) is the right sum — it wrongly includes $f(8)$ and drops $f(0)$. Choice A ($62$) is the trapezoidal sum.",
                "zh": "左端点为 $x = 0, 2, 4, 6$，$\\Delta x = 2$：$2(3 + 5 + 8 + 10) = 52$。选项 C（$72$）是右和——它错误地包含了 $f(8)$ 而丢掉了 $f(0)$。选项 A（$62$）是梯形和。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using the same table ($f(0)=3$, $f(2)=5$, $f(4)=8$, $f(6)=10$, $f(8)=13$) and four equal subintervals, find the trapezoidal approximation of $\\int_0^8 f(x)\\,dx$. Give an integer.",
                "zh": "仍用同一表格（$f(0)=3$，$f(2)=5$，$f(4)=8$，$f(6)=10$，$f(8)=13$）和四个等宽子区间，求 $\\int_0^8 f(x)\\,dx$ 的梯形近似值。请填一个整数。"
              },
              "answer": "62",
              "accept": [
                "62.0"
              ],
              "explanation": {
                "en": "With $\\Delta x = 2$: $T = \\frac{2}{2}[3 + 2(5) + 2(8) + 2(10) + 13] = 3 + 10 + 16 + 20 + 13 = 62$. Equivalently, the trapezoidal sum is the average of the left sum ($52$) and the right sum ($72$).",
                "zh": "取 $\\Delta x = 2$：$T = \\frac{2}{2}[3 + 2(5) + 2(8) + 2(10) + 13] = 3 + 10 + 16 + 20 + 13 = 62$。等价地，梯形和是左和（$52$）与右和（$72$）的平均值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Suppose $f$ is increasing and concave up on $[a, b]$. Let $L$, $R$, $M$, $T$ denote the left, right, midpoint, and trapezoidal approximations of $I = \\int_a^b f(x)\\,dx$ (same number of subintervals). Which ordering is correct?",
                "zh": "设 $f$ 在 $[a, b]$ 上递增且上凹。记 $L$、$R$、$M$、$T$ 分别为 $I = \\int_a^b f(x)\\,dx$ 的左和、右和、中点和与梯形和（子区间数相同）。下列哪个大小关系正确？"
              },
              "choices": [
                "$L < T < I < M < R$",
                "$R < M < I < T < L$",
                "$L < M < I < T < R$",
                "$M < L < I < R < T$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Increasing $\\Rightarrow L < I < R$. Concave up $\\Rightarrow$ chords lie above the curve so $T > I$, and tangent-based reasoning shows $M < I$. Combining: $L < M < I < T < R$. Choice A is tempting because it also puts $L$ lowest and $R$ highest, but it swaps the roles of $M$ and $T$, which are controlled by concavity, not by increase/decrease.",
                "zh": "递增 $\\Rightarrow L < I < R$。上凹 $\\Rightarrow$ 弦位于曲线上方，故 $T > I$；由切线论证可知 $M < I$。合起来：$L < M < I < T < R$。选项 A 具有迷惑性，它同样把 $L$ 放最低、$R$ 放最高，但把 $M$ 和 $T$ 的位置弄反了——这两者由凹凸性决定，与增减性无关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which definite integral equals $\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{3}{n}\\sqrt{1 + \\frac{3k}{n}}$?",
                "zh": "下列哪个定积分等于 $\\displaystyle \\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{3}{n}\\sqrt{1 + \\frac{3k}{n}}$？"
              },
              "choices": [
                "$\\int_1^4 \\sqrt{x}\\,dx$",
                "$\\int_0^3 \\sqrt{x}\\,dx$",
                "$\\int_1^4 3\\sqrt{x}\\,dx$",
                "$\\int_0^4 \\sqrt{x}\\,dx$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Read $\\Delta x = \\frac{3}{n}$, so $b - a = 3$. Inside the square root, $1 + k\\,\\Delta x$ matches $a + k\\,\\Delta x$ with $a = 1$, so $b = 4$ and the sum is a right Riemann sum for $\\int_1^4 \\sqrt{x}\\,dx$. Choice B forgets the shift $a = 1$; choice C double-counts the factor $3$, which is already absorbed into $\\Delta x$.",
                "zh": "读出 $\\Delta x = \\frac{3}{n}$，故 $b - a = 3$。根号内的 $1 + k\\,\\Delta x$ 与 $a + k\\,\\Delta x$ 对照得 $a = 1$，于是 $b = 4$，该和式是 $\\int_1^4 \\sqrt{x}\\,dx$ 的右黎曼和。选项 B 忽略了平移量 $a = 1$；选项 C 把因子 $3$ 重复计算了一次——它已经包含在 $\\Delta x$ 中。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $g(x) = \\int_2^x (t^2 - 4)\\,dt$. Find $g'(3)$. Give an integer.",
                "zh": "设 $g(x) = \\int_2^x (t^2 - 4)\\,dt$。求 $g'(3)$。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "By FTC Part 2, $g'(x) = x^2 - 4$ — just substitute the variable upper limit into the integrand. So $g'(3) = 9 - 4 = 5$. Integrating first and then differentiating gives the same answer but wastes time and invites algebra errors.",
                "zh": "由微积分基本定理（第二部分），$g'(x) = x^2 - 4$——直接把变上限代入被积函数即可。所以 $g'(3) = 9 - 4 = 5$。先积分再求导也能得到相同结果，但既浪费时间又容易算错。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\displaystyle \\frac{d}{dx} \\int_1^{x^3} \\ln t\\,dt$?",
                "zh": "$\\displaystyle \\frac{d}{dx} \\int_1^{x^3} \\ln t\\,dt$ 等于多少？"
              },
              "choices": [
                "$3x^2 \\ln x$",
                "$\\ln(x^3)$",
                "$\\frac{3x^2}{x^3}$",
                "$9x^2 \\ln x$"
              ],
              "answer": 3,
              "explanation": {
                "en": "FTC with the chain rule: $\\ln(x^3) \\cdot 3x^2 = (3\\ln x)(3x^2) = 9x^2 \\ln x$. Choice B forgets the chain-rule factor $3x^2$ from the upper limit $x^3$; choice C differentiates $\\ln t$ instead of substituting into it.",
                "zh": "基本定理加链式法则：$\\ln(x^3) \\cdot 3x^2 = (3\\ln x)(3x^2) = 9x^2 \\ln x$。选项 B 漏掉了来自上限 $x^3$ 的链式法则因子 $3x^2$；选项 C 错误地对 $\\ln t$ 求了导，而不是把上限代入其中。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\int_0^5 f(x)\\,dx = 10$ and $\\int_0^3 f(x)\\,dx = 4$, find $\\int_3^5 \\left[ 2f(x) + 1 \\right] dx$. Give an integer.",
                "zh": "已知 $\\int_0^5 f(x)\\,dx = 10$ 和 $\\int_0^3 f(x)\\,dx = 4$，求 $\\int_3^5 \\left[ 2f(x) + 1 \\right] dx$。请填一个整数。"
              },
              "answer": "14",
              "accept": [
                "14.0"
              ],
              "explanation": {
                "en": "Additivity gives $\\int_3^5 f = 10 - 4 = 6$. Then linearity: $2(6) + \\int_3^5 1\\,dx = 12 + (5 - 3) = 14$. A frequent slip is writing $\\int_3^5 1\\,dx = 1$ instead of the interval length $2$.",
                "zh": "由区间可加性得 $\\int_3^5 f = 10 - 4 = 6$。再用线性性：$2(6) + \\int_3^5 1\\,dx = 12 + (5 - 3) = 14$。常见失误是把 $\\int_3^5 1\\,dx$ 写成 $1$，而不是区间长度 $2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $g(x) = \\int_0^x (t^2 - 2t - 3)\\,dt$. On which interval is $g$ decreasing?",
                "zh": "设 $g(x) = \\int_0^x (t^2 - 2t - 3)\\,dt$。$g$ 在下列哪个区间上递减？"
              },
              "choices": [
                "$(-\\infty, -1)$ only",
                "$(-1, 3)$",
                "$(3, \\infty)$ only",
                "$(-\\infty, -1) \\cup (3, \\infty)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$g'(x) = x^2 - 2x - 3 = (x - 3)(x + 1)$, which is negative exactly on $(-1, 3)$, so $g$ decreases there. Choice D is tempting if you look for where $g' > 0$ — that is where $g$ INCREASES. The lower limit $0$ shifts the value of $g$ but has no effect on where $g$ is increasing or decreasing.",
                "zh": "$g'(x) = x^2 - 2x - 3 = (x - 3)(x + 1)$，它恰好在 $(-1, 3)$ 上为负，所以 $g$ 在该区间递减。若误找 $g' > 0$ 的区间就会选 D——但那是 $g$ 递增的区间。积分下限 $0$ 只影响 $g$ 的取值，不影响 $g$ 的增减区间。"
              }
            }
          ]
        },
        {
          "id": "ftc-u-substitution-recap",
          "title": "FTC and u-Substitution Recap",
          "titleZh": "微积分基本定理与换元法速览",
          "content": [
            {
              "type": "h2",
              "en": "The Fundamental Theorem of Calculus",
              "zh": "微积分基本定理"
            },
            {
              "type": "p",
              "en": "The Fundamental Theorem of Calculus (FTC) links derivatives and integrals. It comes in two parts, and BC free-response questions use both constantly.",
              "zh": "微积分基本定理（FTC）把导数和积分联系起来。它有两个部分，BC 的解答题会频繁用到这两部分。"
            },
            {
              "type": "h3",
              "en": "FTC Part 1 (Evaluation)",
              "zh": "基本定理第一部分（求值）"
            },
            {
              "type": "p",
              "en": "If $F$ is an antiderivative of a continuous function $f$ on $[a, b]$, then:",
              "zh": "若 $F$ 是连续函数 $f$ 在 $[a, b]$ 上的一个原函数，则："
            },
            {
              "type": "math",
              "tex": "\\int_a^b f(x)\\, dx = F(b) - F(a)"
            },
            {
              "type": "h3",
              "en": "FTC Part 2 (Derivative of an Accumulation Function)",
              "zh": "基本定理第二部分（累积函数的导数）"
            },
            {
              "type": "math",
              "tex": "\\frac{d}{dx} \\int_a^{x} f(t)\\, dt = f(x), \\qquad \\frac{d}{dx} \\int_a^{g(x)} f(t)\\, dt = f(g(x))\\, g'(x)"
            },
            {
              "type": "p",
              "en": "The second form — with a function in the upper limit — requires the chain rule. It appears on nearly every AP exam.",
              "zh": "第二种形式——上限是一个函数——需要用链式法则，几乎每年 AP 考试都会出现。"
            },
            {
              "type": "h2",
              "en": "u-Substitution",
              "zh": "换元积分法（u 代换）"
            },
            {
              "type": "p",
              "en": "u-Substitution reverses the chain rule. Choose $u$ to be the \"inside\" function, compute $du$, and rewrite the whole integral in terms of $u$. For definite integrals, convert the limits of integration to $u$-values too — then you never have to substitute back.",
              "zh": "换元法是链式法则的逆过程。选\"内层\"函数作为 $u$，求出 $du$，把整个积分改写成关于 $u$ 的形式。对定积分而言，把积分上下限也换成 $u$ 的值——这样就不必再代回原变量。"
            },
            {
              "type": "note",
              "en": "AP exam tip: after substituting, no $x$ may remain in the integral. If an $x$ is left over, either your choice of $u$ is wrong or the integral needs a BC technique like integration by parts (coming in the next unit).",
              "zh": "AP 考试提示：换元后积分中不能再出现任何 $x$。如果还剩下 $x$，要么 $u$ 选错了，要么这个积分需要 BC 的技巧，例如分部积分（下一单元讲）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Definite Integral by u-Substitution",
                "zh": "例题 1：用换元法计算定积分"
              },
              "problem": {
                "en": "Evaluate $\\int_0^2 x e^{x^2}\\, dx$.",
                "zh": "计算 $\\int_0^2 x e^{x^2}\\, dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $u = x^2$, so $du = 2x\\, dx$, i.e. $x\\, dx = \\frac{1}{2} du$. Convert the limits: $x = 0 \\Rightarrow u = 0$ and $x = 2 \\Rightarrow u = 4$.",
                  "zh": "令 $u = x^2$，则 $du = 2x\\, dx$，即 $x\\, dx = \\frac{1}{2} du$。转换上下限：$x = 0 \\Rightarrow u = 0$，$x = 2 \\Rightarrow u = 4$。"
                },
                {
                  "type": "math",
                  "tex": "\\int_0^2 x e^{x^2}\\, dx = \\frac{1}{2} \\int_0^4 e^u\\, du = \\frac{1}{2} \\left( e^4 - 1 \\right)"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: FTC Part 2 with the Chain Rule",
                "zh": "例题 2：结合链式法则的基本定理第二部分"
              },
              "problem": {
                "en": "If $F(x) = \\int_1^{x^3} \\cos(t)\\, dt$, find $F'(x)$.",
                "zh": "若 $F(x) = \\int_1^{x^3} \\cos(t)\\, dt$，求 $F'(x)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The upper limit is $g(x) = x^3$, so by FTC Part 2 with the chain rule:",
                  "zh": "上限为 $g(x) = x^3$，由基本定理第二部分并结合链式法则："
                },
                {
                  "type": "math",
                  "tex": "F'(x) = \\cos(x^3) \\cdot 3x^2"
                },
                {
                  "type": "p",
                  "en": "Substitute the upper limit into the integrand, then multiply by the derivative of the upper limit. The lower limit, being constant, contributes nothing.",
                  "zh": "把上限代入被积函数，再乘以上限的导数。下限是常数，不产生任何贡献。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_1^3 2x\\, dx$. Give an integer.",
                "zh": "计算 $\\int_1^3 2x\\, dx$。请填一个整数。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "An antiderivative of $2x$ is $x^2$, so the integral is $3^2 - 1^2 = 9 - 1 = 8$ by FTC Part 1.",
                "zh": "$2x$ 的一个原函数是 $x^2$，由基本定理第一部分，积分值为 $3^2 - 1^2 = 9 - 1 = 8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which substitution best evaluates $\\int x^2 \\sqrt{x^3 + 1}\\, dx$?",
                "zh": "计算 $\\int x^2 \\sqrt{x^3 + 1}\\, dx$ 时最合适的换元是哪一个？"
              },
              "choices": [
                "$u = x^3 + 1$",
                "$u = x^2$",
                "$u = \\sqrt{x}$",
                "$u = x^3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $u = x^3 + 1$, $du = 3x^2 dx$, and the leftover $x^2\\, dx = \\frac{1}{3} du$ absorbs everything outside the radical. The key skill: pick $u$ so that $du$ matches the remaining factor.",
                "zh": "取 $u = x^3 + 1$，则 $du = 3x^2 dx$，根号外剩下的 $x^2\\, dx = \\frac{1}{3} du$ 正好被吸收。关键技巧：选 $u$ 使 $du$ 与剩余的因子相匹配。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $F(x) = \\int_0^x \\sqrt{t^2 + 9}\\, dt$, then $F'(4) =$",
                "zh": "若 $F(x) = \\int_0^x \\sqrt{t^2 + 9}\\, dt$，则 $F'(4) =$"
              },
              "choices": [
                "$5$",
                "$25$",
                "$\\sqrt{13}$",
                "$4$"
              ],
              "answer": 0,
              "explanation": {
                "en": "FTC Part 2: $F'(x) = \\sqrt{x^2 + 9}$, so $F'(4) = \\sqrt{16 + 9} = \\sqrt{25} = 5$. No integration needed — just substitute into the integrand.",
                "zh": "基本定理第二部分：$F'(x) = \\sqrt{x^2 + 9}$，所以 $F'(4) = \\sqrt{16 + 9} = \\sqrt{25} = 5$。不需要真的积分——直接把 $x$ 代入被积函数即可。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^{\\pi/2} \\cos x\\, dx$. Give an integer.",
                "zh": "计算 $\\int_0^{\\pi/2} \\cos x\\, dx$。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "An antiderivative of $\\cos x$ is $\\sin x$, so the value is $\\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.",
                "zh": "$\\cos x$ 的一个原函数是 $\\sin x$，故积分值为 $\\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\frac{d}{dx} \\int_2^{x^2} \\ln(t)\\, dt =$",
                "zh": "$\\frac{d}{dx} \\int_2^{x^2} \\ln(t)\\, dt =$"
              },
              "choices": [
                "$2x \\ln(x^2)$",
                "$\\ln(x^2)$",
                "$\\frac{2x}{x^2}$",
                "$2x \\ln(x^2) - \\ln 2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "FTC Part 2 with chain rule: substitute the upper limit into $\\ln(t)$ to get $\\ln(x^2)$, then multiply by $\\frac{d}{dx} x^2 = 2x$. Choice B forgets the chain-rule factor; choice D wrongly differentiates the constant lower limit.",
                "zh": "基本定理第二部分加链式法则：把上限代入 $\\ln(t)$ 得 $\\ln(x^2)$，再乘以 $\\frac{d}{dx} x^2 = 2x$。选项 B 漏掉链式因子；选项 D 错误地对常数下限求了导。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Using the substitution $u = \\ln x$, the integral $\\int_1^e \\frac{\\ln x}{x}\\, dx$ becomes",
                "zh": "用换元 $u = \\ln x$，积分 $\\int_1^e \\frac{\\ln x}{x}\\, dx$ 变为"
              },
              "choices": [
                "$\\int_0^1 u\\, du$",
                "$\\int_1^e u\\, du$",
                "$\\int_0^1 \\frac{u}{x}\\, du$",
                "$\\int_1^e \\frac{1}{u}\\, du$"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $u = \\ln x$, $du = \\frac{1}{x} dx$. The limits convert: $x = 1 \\Rightarrow u = 0$, $x = e \\Rightarrow u = 1$. Always change the limits when you change the variable — choice B keeps the old $x$-limits, a classic error.",
                "zh": "令 $u = \\ln x$，则 $du = \\frac{1}{x} dx$。上下限转换为：$x = 1 \\Rightarrow u = 0$，$x = e \\Rightarrow u = 1$。换变量时必须同时换限——选项 B 保留了原来的 $x$ 上下限，这是典型错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^1 \\frac{x}{(x^2+1)^2}\\, dx$. Give your answer as a fraction a/b.",
                "zh": "计算 $\\int_0^1 \\frac{x}{(x^2+1)^2}\\, dx$。答案写成分数 a/b 的形式。"
              },
              "answer": "1/4",
              "accept": [
                "0.25"
              ],
              "explanation": {
                "en": "Let $u = x^2 + 1$, $du = 2x\\, dx$. Limits become $u = 1$ to $u = 2$. The integral is $\\frac{1}{2} \\int_1^2 u^{-2} du = \\frac{1}{2} \\left[ -u^{-1} \\right]_1^2 = \\frac{1}{2}\\left(1 - \\frac{1}{2}\\right) = \\frac{1}{4}$.",
                "zh": "令 $u = x^2 + 1$，$du = 2x\\, dx$，上下限变为 $u = 1$ 到 $u = 2$。积分为 $\\frac{1}{2} \\int_1^2 u^{-2} du = \\frac{1}{2} \\left[ -u^{-1} \\right]_1^2 = \\frac{1}{2}\\left(1 - \\frac{1}{2}\\right) = \\frac{1}{4}$。"
              }
            }
          ]
        },
        {
          "id": "integration-by-parts",
          "title": "Integration by Parts",
          "titleZh": "分部积分法",
          "content": [
            {
              "type": "h2",
              "en": "Undoing the Product Rule",
              "zh": "乘积法则的逆运算"
            },
            {
              "type": "p",
              "en": "u-Substitution undoes the chain rule; integration by parts undoes the product rule. Starting from $(uv)' = u'v + uv'$ and integrating both sides gives the formula:",
              "zh": "换元法是链式法则的逆运算，而分部积分法是乘积法则的逆运算。从 $(uv)' = u'v + uv'$ 出发对两边积分，得到公式："
            },
            {
              "type": "math",
              "tex": "\\int u\\, dv = uv - \\int v\\, du"
            },
            {
              "type": "p",
              "en": "The strategy: split the integrand into a part $u$ that gets simpler when differentiated, and a part $dv$ that you can integrate. The new integral $\\int v\\, du$ should be easier than the original.",
              "zh": "策略是：把被积式拆成两部分——求导后会变简单的部分作为 $u$，能够积分的部分作为 $dv$。新积分 $\\int v\\, du$ 应该比原积分更容易。"
            },
            {
              "type": "h3",
              "en": "Choosing u: the LIATE Guideline",
              "zh": "如何选择 u：LIATE 口诀"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "L — Logarithmic ($\\ln x$): best choice for $u$",
                  "zh": "L——对数函数（$\\ln x$）：作为 $u$ 的最佳选择"
                },
                {
                  "en": "I — Inverse trig ($\\arctan x$)",
                  "zh": "I——反三角函数（$\\arctan x$）"
                },
                {
                  "en": "A — Algebraic ($x$, $x^2$)",
                  "zh": "A——代数函数（$x$、$x^2$）"
                },
                {
                  "en": "T — Trigonometric ($\\sin x$, $\\cos x$)",
                  "zh": "T——三角函数（$\\sin x$、$\\cos x$）"
                },
                {
                  "en": "E — Exponential ($e^x$): best choice for $dv$",
                  "zh": "E——指数函数（$e^x$）：作为 $dv$ 的最佳选择"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: if the first integration by parts leaves an integral like $\\int x e^x dx$ that still contains a product, apply parts again. Powers of $x$ like $x^2$ typically need as many rounds as the exponent.",
              "zh": "AP 考试提示：如果第一次分部积分后剩下的积分（如 $\\int x e^x dx$）仍是乘积形式，就再做一次分部积分。像 $x^2$ 这样的幂通常需要与指数相同次数的分部。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A Classic Parts Integral",
                "zh": "例题 1：经典分部积分"
              },
              "problem": {
                "en": "Evaluate $\\int x \\cos x\\, dx$.",
                "zh": "计算 $\\int x \\cos x\\, dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By LIATE, choose $u = x$ (algebraic) and $dv = \\cos x\\, dx$. Then $du = dx$ and $v = \\sin x$.",
                  "zh": "按 LIATE，取 $u = x$（代数函数），$dv = \\cos x\\, dx$。于是 $du = dx$，$v = \\sin x$。"
                },
                {
                  "type": "math",
                  "tex": "\\int x \\cos x\\, dx = x \\sin x - \\int \\sin x\\, dx = x \\sin x + \\cos x + C"
                },
                {
                  "type": "p",
                  "en": "Check by differentiating: $\\frac{d}{dx}(x\\sin x + \\cos x) = \\sin x + x\\cos x - \\sin x = x\\cos x$. ✓",
                  "zh": "求导验证：$\\frac{d}{dx}(x\\sin x + \\cos x) = \\sin x + x\\cos x - \\sin x = x\\cos x$，正确。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: When u Is the Whole Integrand",
                "zh": "例题 2：整个被积函数作为 u"
              },
              "problem": {
                "en": "Evaluate $\\int_1^e \\ln x\\, dx$.",
                "zh": "计算 $\\int_1^e \\ln x\\, dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "There is no visible product, so take $u = \\ln x$ and $dv = dx$. Then $du = \\frac{1}{x} dx$ and $v = x$.",
                  "zh": "看不出乘积形式，于是取 $u = \\ln x$，$dv = dx$。则 $du = \\frac{1}{x} dx$，$v = x$。"
                },
                {
                  "type": "math",
                  "tex": "\\int_1^e \\ln x\\, dx = \\left[ x \\ln x \\right]_1^e - \\int_1^e x \\cdot \\frac{1}{x}\\, dx = e - \\left[ x \\right]_1^e = e - (e - 1) = 1"
                },
                {
                  "type": "p",
                  "en": "The trick of setting $dv = dx$ also works for $\\arctan x$ and $\\arcsin x$ — memorize this pattern.",
                  "zh": "令 $dv = dx$ 的技巧同样适用于 $\\arctan x$ 和 $\\arcsin x$——请记住这个模式。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "To evaluate $\\int x e^x\\, dx$ by parts, the best choice is",
                "zh": "用分部积分法计算 $\\int x e^x\\, dx$ 时，最佳选择是"
              },
              "choices": [
                "$u = x$, $dv = e^x dx$",
                "$u = e^x$, $dv = x\\, dx$",
                "$u = xe^x$, $dv = dx$",
                "$u = 1$, $dv = xe^x dx$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Algebraic before exponential (LIATE): $u = x$ simplifies to $du = dx$ when differentiated, while $dv = e^x dx$ integrates easily to $v = e^x$. The result is $xe^x - e^x + C$.",
                "zh": "按 LIATE 代数函数排在指数函数之前：$u = x$ 求导后简化为 $du = dx$，而 $dv = e^x dx$ 容易积分得 $v = e^x$。最终结果为 $xe^x - e^x + C$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\int x \\sin x\\, dx =$",
                "zh": "$\\int x \\sin x\\, dx =$"
              },
              "choices": [
                "$-x\\cos x + \\sin x + C$",
                "$x\\cos x - \\sin x + C$",
                "$-x\\cos x - \\sin x + C$",
                "$\\frac{x^2}{2}\\left(-\\cos x\\right) + C$"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $u = x$, $dv = \\sin x\\, dx$: $v = -\\cos x$, so the integral is $-x\\cos x + \\int \\cos x\\, dx = -x\\cos x + \\sin x + C$. Choice D wrongly integrates the two factors separately — integration does not distribute over products.",
                "zh": "取 $u = x$，$dv = \\sin x\\, dx$：$v = -\\cos x$，故积分为 $-x\\cos x + \\int \\cos x\\, dx = -x\\cos x + \\sin x + C$。选项 D 把两个因子分开各自积分——积分对乘积没有这种分配律。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^1 x e^x\\, dx$. Write your answer as an expression in e (for example: 2e-3, or an integer).",
                "zh": "计算 $\\int_0^1 x e^x\\, dx$。答案写成含 e 的表达式（例如 2e-3）或整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "By parts: $\\int_0^1 xe^x dx = [xe^x]_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$. The two $e$ terms cancel exactly.",
                "zh": "分部积分：$\\int_0^1 xe^x dx = [xe^x]_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$。两个 $e$ 项恰好抵消。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many applications of integration by parts are needed to evaluate $\\int x^2 e^x\\, dx$?",
                "zh": "计算 $\\int x^2 e^x\\, dx$ 需要做几次分部积分？"
              },
              "choices": [
                "$2$",
                "$1$",
                "$3$",
                "$0$ — u-substitution works"
              ],
              "answer": 0,
              "explanation": {
                "en": "Each round of parts lowers the power of $x$ by one: $x^2 \\to x \\to 1$. Two applications give $e^x(x^2 - 2x + 2) + C$. u-Substitution fails because $du = 2x\\,dx$ cannot absorb $x^2$.",
                "zh": "每做一次分部积分，$x$ 的幂就降一次：$x^2 \\to x \\to 1$。两次分部后得到 $e^x(x^2 - 2x + 2) + C$。换元法行不通，因为 $du = 2x\\,dx$ 无法吸收 $x^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\int \\arctan x\\, dx =$",
                "zh": "$\\int \\arctan x\\, dx =$"
              },
              "choices": [
                "$x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C$",
                "$\\frac{1}{1+x^2} + C$",
                "$x\\arctan x + \\frac{1}{2}\\ln(1+x^2) + C$",
                "$\\frac{(\\arctan x)^2}{2} + C$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Take $u = \\arctan x$, $dv = dx$: the integral becomes $x\\arctan x - \\int \\frac{x}{1+x^2} dx$. The remaining integral is $\\frac{1}{2}\\ln(1+x^2)$ by u-substitution, subtracted. Watch the sign — choice C flips it.",
                "zh": "取 $u = \\arctan x$，$dv = dx$：积分变为 $x\\arctan x - \\int \\frac{x}{1+x^2} dx$。剩下的积分用换元法得 $\\frac{1}{2}\\ln(1+x^2)$，注意是减去。当心符号——选项 C 把符号弄反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^{\\pi} x \\sin x\\, dx$. Write your answer using pi (for example: 2pi) or as a number.",
                "zh": "计算 $\\int_0^{\\pi} x \\sin x\\, dx$。答案用 pi 表示（例如 2pi）或写成数字。"
              },
              "answer": "pi",
              "accept": [
                "1pi",
                "π",
                "3.14159",
                "3.1416",
                "3.14"
              ],
              "explanation": {
                "en": "By parts: $[-x\\cos x]_0^{\\pi} + \\int_0^{\\pi} \\cos x\\, dx = (-\\pi \\cdot (-1) - 0) + [\\sin x]_0^{\\pi} = \\pi + 0 = \\pi$.",
                "zh": "分部积分：$[-x\\cos x]_0^{\\pi} + \\int_0^{\\pi} \\cos x\\, dx = (-\\pi \\cdot (-1) - 0) + [\\sin x]_0^{\\pi} = \\pi + 0 = \\pi$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "After one integration by parts, $\\int e^x \\cos x\\, dx$ produces another integral of the form $\\int e^x \\sin x\\, dx$. What is the standard strategy?",
                "zh": "对 $\\int e^x \\cos x\\, dx$ 做一次分部积分后会出现 $\\int e^x \\sin x\\, dx$ 形式的积分。标准策略是什么？"
              },
              "choices": [
                "Apply parts again, then solve algebraically for the original integral",
                "Switch to u-substitution",
                "Conclude the integral has no closed form",
                "Use partial fractions"
              ],
              "answer": 0,
              "explanation": {
                "en": "Applying parts twice brings back the original integral: $I = e^x \\sin x + e^x \\cos x - I$. Solving $2I = e^x(\\sin x + \\cos x)$ gives $I = \\frac{e^x(\\sin x + \\cos x)}{2} + C$. This \"boomerang\" technique is a favorite BC question.",
                "zh": "连做两次分部积分后原积分会重新出现：$I = e^x \\sin x + e^x \\cos x - I$。解方程 $2I = e^x(\\sin x + \\cos x)$ 得 $I = \\frac{e^x(\\sin x + \\cos x)}{2} + C$。这种\"回旋镖\"技巧是 BC 考试的常客。"
              }
            }
          ]
        },
        {
          "id": "partial-fractions",
          "title": "Integration by Partial Fractions",
          "titleZh": "部分分式积分法",
          "content": [
            {
              "type": "h2",
              "en": "Splitting Rational Functions",
              "zh": "拆分有理函数"
            },
            {
              "type": "p",
              "en": "A rational function whose denominator factors into distinct linear factors can be split into simpler fractions, each of which integrates to a logarithm. On the BC exam, you will only see denominators with distinct (non-repeating) linear factors.",
              "zh": "当有理函数的分母能分解成不同的一次因式时，它可以拆成若干更简单的分式，每一个都积分为对数。BC 考试只考分母为互不相同（不重复）一次因式的情形。"
            },
            {
              "type": "math",
              "tex": "\\frac{px + q}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}"
            },
            {
              "type": "h3",
              "en": "Finding A and B: the Cover-Up Method",
              "zh": "求 A 和 B：遮盖法"
            },
            {
              "type": "p",
              "en": "Multiply both sides by the denominator, then substitute the roots $x = a$ and $x = b$ one at a time. Each substitution kills one unknown, letting you solve instantly. This shortcut is called the cover-up method.",
              "zh": "两边同乘分母，然后依次代入根 $x = a$ 和 $x = b$。每次代入都会消去一个未知数，从而立即解出。这个捷径叫做遮盖法。"
            },
            {
              "type": "h3",
              "en": "Check the Degrees First",
              "zh": "先检查次数"
            },
            {
              "type": "p",
              "en": "Partial fractions requires the numerator degree to be less than the denominator degree. If not, do polynomial long division first, then decompose the remainder term.",
              "zh": "使用部分分式要求分子次数低于分母次数。若不满足，先做多项式长除法，再对余式部分进行分解。"
            },
            {
              "type": "note",
              "en": "AP exam tip: partial fractions often appears inside a differential equation — the logistic equation in Unit 3 is solved exactly this way. Recognizing $\\frac{1}{y(a - y)}$ as a partial-fractions candidate is a high-value skill.",
              "zh": "AP 考试提示：部分分式常出现在微分方程中——第 3 单元的逻辑斯谛方程正是用它求解的。能一眼认出 $\\frac{1}{y(a - y)}$ 适合部分分式分解，是非常值钱的技能。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Basic Decomposition",
                "zh": "例题 1：基本分解"
              },
              "problem": {
                "en": "Evaluate $\\int \\frac{1}{x^2 - x - 6}\\, dx$.",
                "zh": "计算 $\\int \\frac{1}{x^2 - x - 6}\\, dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor: $x^2 - x - 6 = (x-3)(x+2)$. Write $\\frac{1}{(x-3)(x+2)} = \\frac{A}{x-3} + \\frac{B}{x+2}$, so $1 = A(x+2) + B(x-3)$.",
                  "zh": "因式分解：$x^2 - x - 6 = (x-3)(x+2)$。设 $\\frac{1}{(x-3)(x+2)} = \\frac{A}{x-3} + \\frac{B}{x+2}$，则 $1 = A(x+2) + B(x-3)$。"
                },
                {
                  "type": "p",
                  "en": "At $x = 3$: $1 = 5A$, so $A = \\frac{1}{5}$. At $x = -2$: $1 = -5B$, so $B = -\\frac{1}{5}$.",
                  "zh": "代入 $x = 3$：$1 = 5A$，得 $A = \\frac{1}{5}$。代入 $x = -2$：$1 = -5B$，得 $B = -\\frac{1}{5}$。"
                },
                {
                  "type": "math",
                  "tex": "\\int \\frac{dx}{(x-3)(x+2)} = \\frac{1}{5} \\ln|x-3| - \\frac{1}{5} \\ln|x+2| + C = \\frac{1}{5} \\ln\\left| \\frac{x-3}{x+2} \\right| + C"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Definite Integral",
                "zh": "例题 2：定积分"
              },
              "problem": {
                "en": "Evaluate $\\int_3^4 \\frac{x + 7}{(x-1)(x-2)}\\, dx$.",
                "zh": "计算 $\\int_3^4 \\frac{x + 7}{(x-1)(x-2)}\\, dx$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set $\\frac{x+7}{(x-1)(x-2)} = \\frac{A}{x-1} + \\frac{B}{x-2}$, so $x + 7 = A(x-2) + B(x-1)$. At $x = 1$: $8 = -A$, so $A = -8$. At $x = 2$: $9 = B$.",
                  "zh": "设 $\\frac{x+7}{(x-1)(x-2)} = \\frac{A}{x-1} + \\frac{B}{x-2}$，则 $x + 7 = A(x-2) + B(x-1)$。代入 $x = 1$：$8 = -A$，得 $A = -8$。代入 $x = 2$：$9 = B$。"
                },
                {
                  "type": "math",
                  "tex": "\\int_3^4 \\left( \\frac{-8}{x-1} + \\frac{9}{x-2} \\right) dx = \\left[ -8\\ln|x-1| + 9\\ln|x-2| \\right]_3^4"
                },
                {
                  "type": "p",
                  "en": "Evaluating: $(-8\\ln 3 + 9\\ln 2) - (-8\\ln 2 + 9\\ln 1) = 17\\ln 2 - 8\\ln 3$.",
                  "zh": "代入上下限：$(-8\\ln 3 + 9\\ln 2) - (-8\\ln 2 + 9\\ln 1) = 17\\ln 2 - 8\\ln 3$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The decomposition $\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$ has $A =$",
                "zh": "分解式 $\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$ 中的 $A =$"
              },
              "choices": [
                "$\\frac{1}{2}$",
                "$1$",
                "$-\\frac{1}{2}$",
                "$2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "From $1 = A(x+1) + B(x-1)$, substitute $x = 1$: $1 = 2A$, so $A = \\frac{1}{2}$. (Similarly $B = -\\frac{1}{2}$ at $x = -1$.)",
                "zh": "由 $1 = A(x+1) + B(x-1)$，代入 $x = 1$：$1 = 2A$，得 $A = \\frac{1}{2}$。（同理代入 $x = -1$ 得 $B = -\\frac{1}{2}$。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the decomposition $\\frac{5x - 4}{x(x - 4)} = \\frac{A}{x} + \\frac{B}{x-4}$, find $B$. Give an integer.",
                "zh": "在分解式 $\\frac{5x - 4}{x(x - 4)} = \\frac{A}{x} + \\frac{B}{x-4}$ 中求 $B$。请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "From $5x - 4 = A(x-4) + Bx$, substitute $x = 4$: $16 = 4B$, so $B = 4$. (Substituting $x = 0$ gives $A = 1$.)",
                "zh": "由 $5x - 4 = A(x-4) + Bx$，代入 $x = 4$：$16 = 4B$，得 $B = 4$。（代入 $x = 0$ 可得 $A = 1$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\int \\frac{dx}{x(x+1)} =$",
                "zh": "$\\int \\frac{dx}{x(x+1)} =$"
              },
              "choices": [
                "$\\ln\\left|\\frac{x}{x+1}\\right| + C$",
                "$\\ln|x(x+1)| + C$",
                "$\\ln\\left|\\frac{x+1}{x}\\right| + C$",
                "$\\frac{-1}{x^2 + x} + C$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Decompose: $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$. Integrating gives $\\ln|x| - \\ln|x+1| + C = \\ln\\left|\\frac{x}{x+1}\\right| + C$. Choice C has the fraction inverted, which flips the sign.",
                "zh": "分解：$\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$。积分得 $\\ln|x| - \\ln|x+1| + C = \\ln\\left|\\frac{x}{x+1}\\right| + C$。选项 C 把分式上下颠倒了，相当于符号取反。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Before decomposing $\\frac{x^2 + 1}{x^2 - 1}$ into partial fractions, you must first",
                "zh": "把 $\\frac{x^2 + 1}{x^2 - 1}$ 分解成部分分式之前，必须先"
              },
              "choices": [
                "perform polynomial long division",
                "factor the numerator",
                "complete the square",
                "multiply by the conjugate"
              ],
              "answer": 0,
              "explanation": {
                "en": "The numerator and denominator have the same degree (2), so divide first: $\\frac{x^2+1}{x^2-1} = 1 + \\frac{2}{x^2 - 1}$. Only then decompose $\\frac{2}{(x-1)(x+1)}$. Partial fractions requires a proper fraction.",
                "zh": "分子分母次数相同（都是 2 次），所以要先做长除法：$\\frac{x^2+1}{x^2-1} = 1 + \\frac{2}{x^2 - 1}$，然后再分解 $\\frac{2}{(x-1)(x+1)}$。部分分式要求真分式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_2^3 \\frac{dx}{x(x-1)}$ and write the answer in the form ln(a/b) — enter just a/b as a fraction. Hint: $\\frac{1}{x(x-1)} = \\frac{1}{x-1} - \\frac{1}{x}$.",
                "zh": "计算 $\\int_2^3 \\frac{dx}{x(x-1)}$，把结果写成 ln(a/b) 的形式——只需填分数 a/b。提示：$\\frac{1}{x(x-1)} = \\frac{1}{x-1} - \\frac{1}{x}$。"
              },
              "answer": "4/3",
              "accept": [
                "1.333",
                "1.33"
              ],
              "explanation": {
                "en": "The integral equals $[\\ln|x-1| - \\ln|x|]_2^3 = (\\ln 2 - \\ln 3) - (\\ln 1 - \\ln 2) = 2\\ln 2 - \\ln 3 = \\ln\\frac{4}{3}$.",
                "zh": "积分等于 $[\\ln|x-1| - \\ln|x|]_2^3 = (\\ln 2 - \\ln 3) - (\\ln 1 - \\ln 2) = 2\\ln 2 - \\ln 3 = \\ln\\frac{4}{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A population model leads to $\\int \\frac{dP}{P(10 - P)}$. Which decomposition is correct?",
                "zh": "某人口模型需要计算 $\\int \\frac{dP}{P(10 - P)}$。下列哪个分解是正确的？"
              },
              "choices": [
                "$\\frac{1}{10}\\left( \\frac{1}{P} + \\frac{1}{10 - P} \\right)$",
                "$\\frac{1}{P} + \\frac{1}{10 - P}$",
                "$\\frac{1}{10}\\left( \\frac{1}{P} - \\frac{1}{10 - P} \\right)$",
                "$\\frac{1}{P} \\cdot \\frac{1}{10 - P}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Set $\\frac{1}{P(10-P)} = \\frac{A}{P} + \\frac{B}{10-P}$, so $1 = A(10-P) + BP$. At $P = 0$: $A = \\frac{1}{10}$; at $P = 10$: $B = \\frac{1}{10}$. Both terms are positive because the second denominator is $10 - P$, not $P - 10$. This exact setup solves the logistic equation.",
                "zh": "设 $\\frac{1}{P(10-P)} = \\frac{A}{P} + \\frac{B}{10-P}$，则 $1 = A(10-P) + BP$。代入 $P = 0$ 得 $A = \\frac{1}{10}$；代入 $P = 10$ 得 $B = \\frac{1}{10}$。两项都是正号，因为第二个分母是 $10 - P$ 而非 $P - 10$。这正是求解逻辑斯谛方程的步骤。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the decomposition $\\frac{3x + 5}{(x+1)(x+3)} = \\frac{A}{x+1} + \\frac{B}{x+3}$, find $A$. Give an integer.",
                "zh": "在分解式 $\\frac{3x + 5}{(x+1)(x+3)} = \\frac{A}{x+1} + \\frac{B}{x+3}$ 中求 $A$。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "From $3x + 5 = A(x+3) + B(x+1)$, substitute $x = -1$: $2 = 2A$, so $A = 1$. (At $x = -3$: $-4 = -2B$, so $B = 2$.)",
                "zh": "由 $3x + 5 = A(x+3) + B(x+1)$，代入 $x = -1$：$2 = 2A$，得 $A = 1$。（代入 $x = -3$：$-4 = -2B$，得 $B = 2$。）"
              }
            }
          ]
        },
        {
          "id": "improper-integrals",
          "title": "Improper Integrals",
          "titleZh": "反常积分",
          "content": [
            {
              "type": "h2",
              "en": "Integrals That Reach Infinity",
              "zh": "触及无穷的积分"
            },
            {
              "type": "p",
              "en": "An integral is improper if the interval is infinite, or if the integrand blows up somewhere on the interval. In both cases, we replace the problematic endpoint with a variable and take a limit.",
              "zh": "如果积分区间无限长，或者被积函数在区间内某处趋于无穷，这个积分就是反常积分。两种情形的处理方式相同：把有问题的端点换成变量，再取极限。"
            },
            {
              "type": "math",
              "tex": "\\int_a^{\\infty} f(x)\\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\, dx"
            },
            {
              "type": "p",
              "en": "If the limit exists (is a finite number), the integral converges to that value. If the limit is infinite or does not exist, the integral diverges.",
              "zh": "如果极限存在（是有限数），积分收敛到该值；如果极限为无穷或不存在，积分发散。"
            },
            {
              "type": "h3",
              "en": "The p-Integral Benchmark",
              "zh": "p 积分基准"
            },
            {
              "type": "p",
              "en": "The single most important family of improper integrals:",
              "zh": "最重要的一族反常积分："
            },
            {
              "type": "math",
              "tex": "\\int_1^{\\infty} \\frac{dx}{x^p} \\text{ converges if } p > 1, \\text{ diverges if } p \\le 1"
            },
            {
              "type": "p",
              "en": "This fact will return in Unit 7 as the p-series test — improper integrals are the bridge between integration and infinite series.",
              "zh": "这个事实将在第 7 单元以 p 级数判别法的形式再次出现——反常积分是积分与无穷级数之间的桥梁。"
            },
            {
              "type": "note",
              "en": "AP exam tip: always show the limit notation. Writing $\\int_1^{\\infty} \\frac{dx}{x^2} = [-\\frac{1}{x}]_1^{\\infty}$ without a limit loses the justification point on free-response questions. Write $\\lim_{b \\to \\infty}$ explicitly.",
              "zh": "AP 考试提示：一定要写出极限记号。在解答题中直接写 $\\int_1^{\\infty} \\frac{dx}{x^2} = [-\\frac{1}{x}]_1^{\\infty}$ 而不写极限，会丢掉论证分。要明确写出 $\\lim_{b \\to \\infty}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A Convergent Improper Integral",
                "zh": "例题 1：收敛的反常积分"
              },
              "problem": {
                "en": "Evaluate $\\int_1^{\\infty} \\frac{1}{x^2}\\, dx$ or show it diverges.",
                "zh": "计算 $\\int_1^{\\infty} \\frac{1}{x^2}\\, dx$，或证明其发散。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\int_1^{\\infty} \\frac{dx}{x^2} = \\lim_{b \\to \\infty} \\int_1^b x^{-2}\\, dx = \\lim_{b \\to \\infty} \\left[ -\\frac{1}{x} \\right]_1^b = \\lim_{b \\to \\infty} \\left( -\\frac{1}{b} + 1 \\right) = 1"
                },
                {
                  "type": "p",
                  "en": "The area under $\\frac{1}{x^2}$ from 1 to infinity is exactly 1 — an infinitely long region with finite area.",
                  "zh": "$\\frac{1}{x^2}$ 从 1 到无穷下方的面积恰好是 1——一个无限长却面积有限的区域。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Divergent Look-Alike",
                "zh": "例题 2：貌似收敛实则发散"
              },
              "problem": {
                "en": "Determine whether $\\int_1^{\\infty} \\frac{1}{x}\\, dx$ converges.",
                "zh": "判断 $\\int_1^{\\infty} \\frac{1}{x}\\, dx$ 是否收敛。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\lim_{b \\to \\infty} \\int_1^b \\frac{dx}{x} = \\lim_{b \\to \\infty} \\ln b = \\infty"
                },
                {
                  "type": "p",
                  "en": "The integral diverges. Even though $\\frac{1}{x} \\to 0$, it does not shrink fast enough — the logarithm grows without bound. The same subtlety explains why the harmonic series diverges in Unit 7.",
                  "zh": "积分发散。虽然 $\\frac{1}{x} \\to 0$，但它衰减得不够快——对数无限增长。同样的微妙之处也解释了第 7 单元中调和级数为何发散。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "$\\int_1^{\\infty} \\frac{dx}{x^3}$ is",
                "zh": "$\\int_1^{\\infty} \\frac{dx}{x^3}$ 是"
              },
              "choices": [
                "convergent, with value $\\frac{1}{2}$",
                "convergent, with value $1$",
                "divergent",
                "convergent, with value $\\frac{1}{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "This is a p-integral with $p = 3 > 1$, so it converges: $\\lim_{b\\to\\infty} \\left[ -\\frac{1}{2x^2} \\right]_1^b = 0 + \\frac{1}{2} = \\frac{1}{2}$.",
                "zh": "这是 $p = 3 > 1$ 的 p 积分，因此收敛：$\\lim_{b\\to\\infty} \\left[ -\\frac{1}{2x^2} \\right]_1^b = 0 + \\frac{1}{2} = \\frac{1}{2}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following integrals diverges?",
                "zh": "下列哪个积分发散？"
              },
              "choices": [
                "$\\int_1^{\\infty} \\frac{dx}{\\sqrt{x}}$",
                "$\\int_1^{\\infty} \\frac{dx}{x^2}$",
                "$\\int_1^{\\infty} e^{-x}\\, dx$",
                "$\\int_1^{\\infty} \\frac{dx}{x^{1.01}}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\frac{1}{\\sqrt{x}} = x^{-1/2}$ has $p = \\frac{1}{2} \\le 1$, so it diverges. The others converge: $p = 2 > 1$, exponential decay, and $p = 1.01 > 1$ (barely, but the test only asks whether $p > 1$).",
                "zh": "$\\frac{1}{\\sqrt{x}} = x^{-1/2}$ 的 $p = \\frac{1}{2} \\le 1$，故发散。其余都收敛：$p = 2 > 1$、指数衰减、以及 $p = 1.01 > 1$（虽然勉强，但判别法只看 $p$ 是否大于 1）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^{\\infty} e^{-2x}\\, dx$. Give your answer as a fraction a/b.",
                "zh": "计算 $\\int_0^{\\infty} e^{-2x}\\, dx$。答案写成分数 a/b 的形式。"
              },
              "answer": "1/2",
              "accept": [
                "0.5"
              ],
              "explanation": {
                "en": "$\\lim_{b\\to\\infty} \\left[ -\\frac{1}{2} e^{-2x} \\right]_0^b = 0 - \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$. Exponential decay always beats infinity.",
                "zh": "$\\lim_{b\\to\\infty} \\left[ -\\frac{1}{2} e^{-2x} \\right]_0^b = 0 - \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$。指数衰减总能战胜无穷区间。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\int_0^1 \\frac{dx}{\\sqrt{x}}$ is improper because",
                "zh": "$\\int_0^1 \\frac{dx}{\\sqrt{x}}$ 是反常积分，原因是"
              },
              "choices": [
                "the integrand is unbounded near $x = 0$",
                "the interval is infinite",
                "the integrand is negative",
                "the antiderivative does not exist"
              ],
              "answer": 0,
              "explanation": {
                "en": "As $x \\to 0^+$, $\\frac{1}{\\sqrt{x}} \\to \\infty$, so we need $\\lim_{a \\to 0^+} \\int_a^1 x^{-1/2} dx = \\lim_{a\\to 0^+} (2 - 2\\sqrt{a}) = 2$. It converges — an unbounded integrand can still enclose finite area.",
                "zh": "当 $x \\to 0^+$ 时 $\\frac{1}{\\sqrt{x}} \\to \\infty$，所以需要计算 $\\lim_{a \\to 0^+} \\int_a^1 x^{-1/2} dx = \\lim_{a\\to 0^+} (2 - 2\\sqrt{a}) = 2$。它收敛——无界的被积函数仍可能围出有限面积。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_0^1 \\frac{dx}{\\sqrt{x}}$. Give an integer.",
                "zh": "计算 $\\int_0^1 \\frac{dx}{\\sqrt{x}}$。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "$\\lim_{a \\to 0^+} [2\\sqrt{x}]_a^1 = 2 - \\lim_{a\\to 0^+} 2\\sqrt{a} = 2 - 0 = 2$. Here $p = \\frac{1}{2} < 1$, and near zero (unlike near infinity) small $p$ is what makes convergence happen.",
                "zh": "$\\lim_{a \\to 0^+} [2\\sqrt{x}]_a^1 = 2 - \\lim_{a\\to 0^+} 2\\sqrt{a} = 2 - 0 = 2$。这里 $p = \\frac{1}{2} < 1$，在零点附近（与无穷远处相反）恰恰是较小的 $p$ 才能保证收敛。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which values of $p$ does $\\int_1^{\\infty} \\frac{dx}{x^p}$ converge?",
                "zh": "当 $p$ 取什么值时 $\\int_1^{\\infty} \\frac{dx}{x^p}$ 收敛？"
              },
              "choices": [
                "$p > 1$",
                "$p \\ge 1$",
                "$p < 1$",
                "all $p > 0$"
              ],
              "answer": 0,
              "explanation": {
                "en": "For $p \\ne 1$ the antiderivative is $\\frac{x^{1-p}}{1-p}$, which tends to 0 as $x \\to \\infty$ only when $1 - p < 0$, i.e. $p > 1$. The borderline case $p = 1$ gives $\\ln x \\to \\infty$, so it diverges — that is why choice B is wrong.",
                "zh": "当 $p \\ne 1$ 时原函数为 $\\frac{x^{1-p}}{1-p}$，只有当 $1 - p < 0$ 即 $p > 1$ 时它才在 $x \\to \\infty$ 时趋于 0。临界情形 $p = 1$ 给出 $\\ln x \\to \\infty$，发散——这正是选项 B 错误的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\int_2^{\\infty} \\frac{dx}{(x-1)^2}$. Give an integer.",
                "zh": "计算 $\\int_2^{\\infty} \\frac{dx}{(x-1)^2}$。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "With $u = x - 1$: $\\lim_{b\\to\\infty} \\left[ -\\frac{1}{x-1} \\right]_2^b = 0 - (-1) = 1$. The shift does not change the $p = 2$ convergence behavior.",
                "zh": "令 $u = x - 1$：$\\lim_{b\\to\\infty} \\left[ -\\frac{1}{x-1} \\right]_2^b = 0 - (-1) = 1$。平移不改变 $p = 2$ 的收敛性。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-7-differential-equations",
      "title": "Unit 7: Differential Equations",
      "titleZh": "第七单元：微分方程",
      "lessons": [
        {
          "id": "slope-fields-and-separation",
          "title": "Slope Fields and Separation of Variables",
          "titleZh": "斜率场与分离变量法",
          "content": [
            {
              "type": "h2",
              "en": "A Picture of Every Solution",
              "zh": "每条解曲线的全景图"
            },
            {
              "type": "p",
              "en": "A differential equation like $\\frac{dy}{dx} = x - y$ does not hand you a formula for $y$ — it tells you the slope of the solution curve at every point $(x, y)$. A slope field draws a short segment with that slope at a grid of points, giving a picture of every possible solution at once. When the equation has the special form $\\frac{dy}{dx} = g(x)\\,h(y)$, we can go further and solve it exactly by separating the variables.",
              "zh": "像 $\\frac{dy}{dx} = x - y$ 这样的微分方程并不直接给出 $y$ 的表达式——它告诉你解曲线在每个点 $(x, y)$ 处的斜率。斜率场在一个点阵上以对应斜率画出短线段，从而一次性呈现所有可能解的全貌。当方程具有特殊形式 $\\frac{dy}{dx} = g(x)\\,h(y)$ 时，我们还可以更进一步，用分离变量法求出精确解。"
            },
            {
              "type": "h3",
              "en": "Reading and Sketching Slope Fields",
              "zh": "斜率场的读图与作图"
            },
            {
              "type": "p",
              "en": "To sketch: at each grid point, substitute the coordinates into the differential equation and draw a tiny segment with that slope. To sketch a particular solution through a given point, start there and follow the segments in both directions — your curve must be tangent to the field everywhere and must not cross itself.",
              "zh": "作图方法：在每个格点处，把坐标代入微分方程，画出具有该斜率的小线段。若要画经过某给定点的特解曲线，就从该点出发，沿两侧顺着线段的方向延伸——曲线必须处处与斜率场相切，且不能自交。"
            },
            {
              "type": "p",
              "en": "To match a slope field to its equation, look for structural clues:",
              "zh": "要把斜率场与方程配对，注意以下结构线索："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $\\frac{dy}{dx}$ depends only on $x$, all segments in the same vertical column are parallel.",
                  "zh": "若 $\\frac{dy}{dx}$ 只依赖于 $x$，则同一竖列中的所有线段互相平行。"
                },
                {
                  "en": "If $\\frac{dy}{dx}$ depends only on $y$, all segments in the same horizontal row are parallel.",
                  "zh": "若 $\\frac{dy}{dx}$ 只依赖于 $y$，则同一横行中的所有线段互相平行。"
                },
                {
                  "en": "Find where the slopes are zero: setting the right side equal to $0$ gives a curve (often a line) of horizontal segments.",
                  "zh": "找出斜率为零的位置：令方程右端等于 $0$，得到一条由水平线段组成的曲线（常常是直线）。"
                },
                {
                  "en": "Check the sign of the slope in each region — one well-chosen test point can eliminate two or three answer choices.",
                  "zh": "检查各区域内斜率的正负——一个选得好的测试点往往能排除两三个选项。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: on matching questions, do not try to \"see\" the whole field. Pick one or two easy points such as $(0, 1)$ or $(1, 0)$, compute the slope from each candidate equation, and compare with the picture. Also check where segments are horizontal — that single feature settles most matching problems.",
              "zh": "AP 考试提示：做配对题时不要试图\"看懂\"整个斜率场。选一两个好算的点，如 $(0, 1)$ 或 $(1, 0)$，用每个候选方程算出斜率并与图对照。同时检查水平线段出现的位置——仅这一个特征就能解决大多数配对题。"
            },
            {
              "type": "h3",
              "en": "Verifying a Solution",
              "zh": "验证解"
            },
            {
              "type": "p",
              "en": "To verify that a function solves a differential equation, differentiate the candidate, substitute both $y$ and $\\frac{dy}{dx}$ into the equation, and confirm the two sides are identical for all $x$ — not just at one point. For example, $y = Ce^{3x}$ satisfies $\\frac{dy}{dx} = 3y$ because",
              "zh": "要验证某函数是微分方程的解，先对候选函数求导，再把 $y$ 和 $\\frac{dy}{dx}$ 同时代入方程，确认两边对所有 $x$ 恒等——而不仅仅在某一点相等。例如，$y = Ce^{3x}$ 满足 $\\frac{dy}{dx} = 3y$，因为"
            },
            {
              "type": "math",
              "tex": "\\frac{dy}{dx} = 3Ce^{3x} = 3\\left(Ce^{3x}\\right) = 3y"
            },
            {
              "type": "h3",
              "en": "Separation of Variables",
              "zh": "分离变量法"
            },
            {
              "type": "p",
              "en": "If $\\frac{dy}{dx} = g(x)\\,h(y)$, move every $y$ to the left with $dy$ and every $x$ to the right with $dx$, then integrate both sides:",
              "zh": "若 $\\frac{dy}{dx} = g(x)\\,h(y)$，把所有含 $y$ 的因子连同 $dy$ 移到左边，所有含 $x$ 的因子连同 $dx$ 移到右边，再对两边积分："
            },
            {
              "type": "math",
              "tex": "\\int \\frac{dy}{h(y)} = \\int g(x)\\,dx"
            },
            {
              "type": "p",
              "en": "Add a single constant $+C$ on one side only. With an initial condition, you may solve for $C$ immediately after integrating (before isolating $y$) — this is usually faster and safer. Finally solve for $y$, choosing the branch (sign of a square root, removal of absolute value) consistent with the initial condition.",
              "zh": "只需在一边加一个常数 $+C$。若给了初始条件，可以在积分后立即代入求 $C$（不必先解出 $y$）——这通常更快也更稳妥。最后解出 $y$，并根据初始条件选择正确的分支（平方根的正负号、去掉绝对值时的符号）。"
            },
            {
              "type": "note",
              "en": "Common mistakes that cost points: adding $+C$ after solving for $y$ instead of right after integrating; forgetting $+C$ entirely; and leaving the answer as $y^2 = \\ldots$ when the question asks for $y = f(x)$. Readers award the constant-of-integration point only if $C$ appears at the moment of antidifferentiation.",
              "zh": "常见失分点：先解出 $y$ 之后才补加 $+C$，而不是积分后立即加；完全忘记 $+C$；以及题目要求 $y = f(x)$ 时把答案停留在 $y^2 = \\ldots$ 的形式。阅卷人只有在积分那一步就看到 $C$ 时才会给积分常数分。"
            },
            {
              "type": "h3",
              "en": "Exponential Growth and Decay",
              "zh": "指数增长与衰减"
            },
            {
              "type": "p",
              "en": "The sentence \"the rate of change of $y$ is proportional to $y$\" translates to $\\frac{dy}{dt} = ky$. Separating variables gives $\\ln|y| = kt + C$, and exponentiating yields the family every AP student must know:",
              "zh": "\"$y$ 的变化率与 $y$ 成正比\"这句话翻译成方程就是 $\\frac{dy}{dt} = ky$。分离变量得 $\\ln|y| = kt + C$，再取指数便得到每个 AP 考生都必须掌握的解族："
            },
            {
              "type": "math",
              "tex": "\\frac{dy}{dt} = ky \\quad \\Longrightarrow \\quad y = y_0 e^{kt}"
            },
            {
              "type": "p",
              "en": "Here $y_0$ is the value at $t = 0$, and $k > 0$ means growth while $k < 0$ means decay. Doubling times and half-lives determine $k$: if $y$ doubles every $d$ units of time, then $e^{kd} = 2$, so $k = \\frac{\\ln 2}{d}$.",
              "zh": "其中 $y_0$ 是 $t = 0$ 时的初始值；$k > 0$ 表示增长，$k < 0$ 表示衰减。倍增时间和半衰期决定 $k$：若 $y$ 每经过 $d$ 个时间单位翻一倍，则 $e^{kd} = 2$，故 $k = \\frac{\\ln 2}{d}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Separation with an Initial Condition",
                "zh": "例题 1：带初始条件的分离变量"
              },
              "problem": {
                "en": "Find the particular solution of $\\frac{dy}{dx} = xy$ with $y(0) = 4$.",
                "zh": "求满足 $y(0) = 4$ 的微分方程 $\\frac{dy}{dx} = xy$ 的特解。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Separate and integrate (note $y = 4 > 0$ at the initial point, so we may drop the absolute value later):",
                  "zh": "分离变量并积分（注意初始点处 $y = 4 > 0$，因此后面可以直接去掉绝对值）："
                },
                {
                  "type": "math",
                  "tex": "\\int \\frac{dy}{y} = \\int x\\,dx \\quad \\Longrightarrow \\quad \\ln|y| = \\frac{x^2}{2} + C"
                },
                {
                  "type": "p",
                  "en": "Substitute $(0, 4)$: $\\ln 4 = 0 + C$, so $C = \\ln 4$. Exponentiating, $|y| = e^{\\ln 4} e^{x^2/2}$, and since $y > 0$ near the initial condition:",
                  "zh": "代入 $(0, 4)$：$\\ln 4 = 0 + C$，故 $C = \\ln 4$。取指数得 $|y| = e^{\\ln 4} e^{x^2/2}$；由于在初始条件附近 $y > 0$："
                },
                {
                  "type": "math",
                  "tex": "y = 4e^{x^2/2}"
                },
                {
                  "type": "p",
                  "en": "Quick check: $y(0) = 4$, and $\\frac{dy}{dx} = 4e^{x^2/2} \\cdot x = xy$. Verifying takes ten seconds and catches most algebra slips.",
                  "zh": "快速检验：$y(0) = 4$，且 $\\frac{dy}{dx} = 4e^{x^2/2} \\cdot x = xy$。验证只需十秒钟，却能抓住绝大多数代数失误。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Growth Proportional to Amount",
                "zh": "例题 2：与总量成正比的增长"
              },
              "problem": {
                "en": "A bacteria culture grows at a rate proportional to its size. It triples every $4$ hours, and there are $50$ grams at time $t = 0$. When will the culture reach $450$ grams?",
                "zh": "某细菌培养物的增长率与其总量成正比。它每 $4$ 小时增至原来的 $3$ 倍，且 $t = 0$ 时有 $50$ 克。何时达到 $450$ 克？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The model is $\\frac{dy}{dt} = ky$ with solution $y = 50e^{kt}$. Tripling every $4$ hours means $e^{4k} = 3$, so $k = \\frac{\\ln 3}{4}$ and $y = 50 \\cdot 3^{t/4}$.",
                  "zh": "模型为 $\\frac{dy}{dt} = ky$，解为 $y = 50e^{kt}$。每 $4$ 小时变为 $3$ 倍意味着 $e^{4k} = 3$，故 $k = \\frac{\\ln 3}{4}$，即 $y = 50 \\cdot 3^{t/4}$。"
                },
                {
                  "type": "math",
                  "tex": "50 \\cdot 3^{t/4} = 450 \\quad \\Longrightarrow \\quad 3^{t/4} = 9 = 3^2 \\quad \\Longrightarrow \\quad t = 8"
                },
                {
                  "type": "p",
                  "en": "The culture reaches $450$ grams after $8$ hours. Sanity check without algebra: $450 = 9 \\times 50$ is two triplings, and each tripling takes $4$ hours.",
                  "zh": "培养物在 $8$ 小时后达到 $450$ 克。不用代数也能验证：$450 = 9 \\times 50$ 相当于翻了两次三倍，每次需 $4$ 小时。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A slope field has horizontal segments exactly at the points on the line $y = x$, with positive slopes below the line and negative slopes above it. Which differential equation matches?",
                "zh": "某斜率场恰好在直线 $y = x$ 上的点处出现水平线段，直线下方斜率为正、上方斜率为负。它对应下列哪个微分方程？"
              },
              "choices": [
                "$\\frac{dy}{dx} = x + y$",
                "$\\frac{dy}{dx} = xy$",
                "$\\frac{dy}{dx} = x - y$",
                "$\\frac{dy}{dx} = \\frac{x}{y}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Setting $x - y = 0$ gives horizontal segments along $y = x$; below the line $y < x$ so $x - y > 0$, matching the sign pattern. Choice A is zero along $y = -x$, and choice B is zero along both axes — testing where slopes vanish eliminates them instantly.",
                "zh": "令 $x - y = 0$ 得水平线段位于 $y = x$ 上；直线下方 $y < x$，故 $x - y > 0$，与符号分布吻合。选项 A 在 $y = -x$ 上斜率为零，选项 B 在两条坐标轴上斜率为零——检验零斜率位置即可立刻排除它们。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a slope field, all segments in any given vertical column are parallel to each other. Which equation could produce this field?",
                "zh": "某斜率场中，任意一条竖列内的所有线段都互相平行。下列哪个方程可能产生这个斜率场？"
              },
              "choices": [
                "$\\frac{dy}{dx} = x^2$",
                "$\\frac{dy}{dx} = y^2$",
                "$\\frac{dy}{dx} = xy$",
                "$\\frac{dy}{dx} = x + y$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Parallel segments within each vertical column mean the slope is the same for every $y$ at a fixed $x$ — the equation depends on $x$ alone, so $\\frac{dy}{dx} = x^2$. Choice B would make rows (fixed $y$) parallel instead; choices C and D depend on both variables.",
                "zh": "每条竖列内线段平行，说明在固定的 $x$ 处斜率与 $y$ 无关——方程只依赖 $x$，故选 $\\frac{dy}{dx} = x^2$。选项 B 会使横行（固定 $y$）内的线段平行；选项 C 和 D 同时依赖两个变量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $y = f(x)$ be the solution of $\\frac{dy}{dx} = \\frac{x}{y}$ with $f(0) = 3$. Find $f(4)$. Give an integer.",
                "zh": "设 $y = f(x)$ 是满足 $f(0) = 3$ 的微分方程 $\\frac{dy}{dx} = \\frac{x}{y}$ 的解。求 $f(4)$。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "Separate: $y\\,dy = x\\,dx$, so $\\frac{y^2}{2} = \\frac{x^2}{2} + C$, i.e. $y^2 = x^2 + C_1$. From $(0, 3)$: $C_1 = 9$. Then $y = +\\sqrt{x^2 + 9}$ (positive branch since $f(0) = 3 > 0$), and $f(4) = \\sqrt{25} = 5$. Forgetting to choose the sign from the initial condition is the classic error here.",
                "zh": "分离变量：$y\\,dy = x\\,dx$，得 $\\frac{y^2}{2} = \\frac{x^2}{2} + C$，即 $y^2 = x^2 + C_1$。代入 $(0, 3)$：$C_1 = 9$。于是 $y = +\\sqrt{x^2 + 9}$（因 $f(0) = 3 > 0$ 取正支），$f(4) = \\sqrt{25} = 5$。忘记根据初始条件确定正负号是这里最经典的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which function is a solution of $\\frac{dy}{dx} = -2y$ satisfying $y(0) = 5$?",
                "zh": "下列哪个函数是满足 $y(0) = 5$ 的微分方程 $\\frac{dy}{dx} = -2y$ 的解？"
              },
              "choices": [
                "$y = 5e^{2x}$",
                "$y = 5e^{-2x}$",
                "$y = e^{-2x} + 4$",
                "$y = -2e^{5x}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "For $y = 5e^{-2x}$: $\\frac{dy}{dx} = -10e^{-2x} = -2(5e^{-2x}) = -2y$, and $y(0) = 5$. Choice C is the trap: it does satisfy $y(0) = 5$, but $\\frac{dy}{dx} = -2e^{-2x}$ while $-2y = -2e^{-2x} - 8$ — the equation fails, so checking only the initial condition is not enough.",
                "zh": "对 $y = 5e^{-2x}$：$\\frac{dy}{dx} = -10e^{-2x} = -2(5e^{-2x}) = -2y$，且 $y(0) = 5$。选项 C 是陷阱：它确实满足 $y(0) = 5$，但 $\\frac{dy}{dx} = -2e^{-2x}$ 而 $-2y = -2e^{-2x} - 8$——不满足方程本身，可见只验证初始条件是不够的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A population satisfies $\\frac{dP}{dt} = kP$ and doubles every $10$ years. What is $k$?",
                "zh": "某种群满足 $\\frac{dP}{dt} = kP$，且每 $10$ 年数量翻一倍。$k$ 等于多少？"
              },
              "choices": [
                "$\\frac{1}{5}$",
                "$\\frac{10}{\\ln 2}$",
                "$\\ln 20$",
                "$\\frac{\\ln 2}{10}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The solution is $P = P_0 e^{kt}$. Doubling in $10$ years means $P_0 e^{10k} = 2P_0$, so $e^{10k} = 2$ and $k = \\frac{\\ln 2}{10}$. Choice B inverts the fraction — a frequent slip when solving $10k = \\ln 2$ too quickly.",
                "zh": "解为 $P = P_0 e^{kt}$。$10$ 年翻倍意味着 $P_0 e^{10k} = 2P_0$，即 $e^{10k} = 2$，故 $k = \\frac{\\ln 2}{10}$。选项 B 把分数写倒了——匆忙解 $10k = \\ln 2$ 时的常见失误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A quantity satisfies $\\frac{dy}{dt} = (\\ln 3)\\,y$ with $y(0) = 20$. At what time $t$ does $y$ reach $180$? Give an integer.",
                "zh": "某量满足 $\\frac{dy}{dt} = (\\ln 3)\\,y$，且 $y(0) = 20$。$y$ 在什么时刻 $t$ 达到 $180$？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "The solution is $y = 20e^{(\\ln 3)t} = 20 \\cdot 3^t$. Setting $20 \\cdot 3^t = 180$ gives $3^t = 9$, so $t = 2$. Recognizing $e^{(\\ln 3)t} = 3^t$ turns this into mental arithmetic — no logarithm tables needed.",
                "zh": "解为 $y = 20e^{(\\ln 3)t} = 20 \\cdot 3^t$。令 $20 \\cdot 3^t = 180$ 得 $3^t = 9$，故 $t = 2$。看出 $e^{(\\ln 3)t} = 3^t$ 后本题就变成了心算——完全不需要查对数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the general solution of $\\frac{dy}{dx} = y^2 \\cos x$?",
                "zh": "微分方程 $\\frac{dy}{dx} = y^2 \\cos x$ 的通解是什么？"
              },
              "choices": [
                "$y = -\\frac{1}{\\sin x + C}$",
                "$y = Ce^{\\sin x}$",
                "$y = \\sin x + C$",
                "$y = \\frac{1}{\\sin x} + C$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Separate: $y^{-2}\\,dy = \\cos x\\,dx$, integrate to get $-\\frac{1}{y} = \\sin x + C$, so $y = -\\frac{1}{\\sin x + C}$. Choice B is tempting because it is the answer to the DIFFERENT equation $\\frac{dy}{dx} = y\\cos x$ — with $y^2$, the integral of $y^{-2}$ is $-y^{-1}$, not $\\ln|y|$.",
                "zh": "分离变量：$y^{-2}\\,dy = \\cos x\\,dx$，积分得 $-\\frac{1}{y} = \\sin x + C$，故 $y = -\\frac{1}{\\sin x + C}$。选项 B 之所以有迷惑性，是因为它是另一个方程 $\\frac{dy}{dx} = y\\cos x$ 的答案——这里是 $y^2$，$y^{-2}$ 的积分是 $-y^{-1}$，而不是 $\\ln|y|$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Consider the slope field of $\\frac{dy}{dx} = -\\frac{x}{y}$. What slope is drawn at the point $(3, 4)$? Give your answer as a fraction a/b.",
                "zh": "考虑微分方程 $\\frac{dy}{dx} = -\\frac{x}{y}$ 的斜率场。在点 $(3, 4)$ 处画出的线段斜率是多少？答案写成分数 a/b 的形式。"
              },
              "answer": "-3/4",
              "accept": [
                "-0.75"
              ],
              "explanation": {
                "en": "Substitute directly: $\\frac{dy}{dx} = -\\frac{3}{4}$. This field consists of segments perpendicular to the radius at each point — its solutions are the circles $x^2 + y^2 = C$, which you can confirm by separation of variables.",
                "zh": "直接代入：$\\frac{dy}{dx} = -\\frac{3}{4}$。这个斜率场的每条线段都垂直于该点的半径——其解曲线是一族圆 $x^2 + y^2 = C$，用分离变量法即可验证。"
              }
            }
          ]
        },
        {
          "id": "eulers-method",
          "title": "Euler's Method",
          "titleZh": "欧拉方法",
          "content": [
            {
              "type": "h2",
              "en": "Approximating Solutions Step by Step",
              "zh": "一步一步逼近解"
            },
            {
              "type": "p",
              "en": "Many differential equations cannot be solved with a formula. Euler's method approximates the solution numerically: starting from an initial point, it repeatedly steps forward along the tangent line, using the differential equation to find each new slope.",
              "zh": "许多微分方程无法用公式求解。欧拉方法用数值方式逼近解：从初始点出发，沿切线方向不断向前走一小步，每一步都用微分方程算出新的斜率。"
            },
            {
              "type": "h3",
              "en": "The Update Rule",
              "zh": "迭代公式"
            },
            {
              "type": "p",
              "en": "Given $\\frac{dy}{dx} = f(x, y)$, initial point $(x_0, y_0)$, and step size $\\Delta x$:",
              "zh": "已知 $\\frac{dy}{dx} = f(x, y)$、初始点 $(x_0, y_0)$ 和步长 $\\Delta x$："
            },
            {
              "type": "math",
              "tex": "y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x, \\qquad x_{n+1} = x_n + \\Delta x"
            },
            {
              "type": "p",
              "en": "In words: new $y$ = old $y$ + (slope at the old point) × (step size). Each step assumes the slope stays constant over the small interval, which is why smaller steps give better accuracy.",
              "zh": "用文字表述：新 $y$ = 旧 $y$ +（旧点处的斜率）×（步长）。每一步都假设斜率在小区间内保持不变，所以步长越小，精度越高。"
            },
            {
              "type": "h3",
              "en": "Organizing Your Work",
              "zh": "整理计算过程"
            },
            {
              "type": "p",
              "en": "On the exam, make a table with columns $x_n$, $y_n$, slope $= f(x_n, y_n)$, and $\\Delta y = \\text{slope} \\times \\Delta x$. Fill one row per step. This layout prevents the most common mistake: using the new $x$ with the old $y$ when computing a slope.",
              "zh": "考试时列一个表格，四列分别为 $x_n$、$y_n$、斜率 $= f(x_n, y_n)$ 以及 $\\Delta y = \\text{斜率} \\times \\Delta x$，每走一步填一行。这种格式能避免最常见的错误：算斜率时用了新 $x$ 却配了旧 $y$。"
            },
            {
              "type": "note",
              "en": "AP exam tip: if the solution curve is concave up, Euler's method underestimates the true value (the tangent lines lie below the curve); if concave down, it overestimates. This concavity comparison is a frequent follow-up question.",
              "zh": "AP 考试提示：若解曲线上凹，欧拉方法会低估真实值（切线位于曲线下方）；若下凹，则会高估。这种利用凹凸性做比较的问题是常见的追问。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Two Steps of Euler's Method",
                "zh": "例题 1：欧拉方法走两步"
              },
              "problem": {
                "en": "Let $\\frac{dy}{dx} = x + y$ with $y(0) = 1$. Use Euler's method with step size $\\Delta x = 0.5$ to approximate $y(1)$.",
                "zh": "设 $\\frac{dy}{dx} = x + y$，$y(0) = 1$。用步长 $\\Delta x = 0.5$ 的欧拉方法估算 $y(1)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1: at $(0, 1)$ the slope is $0 + 1 = 1$. So $y(0.5) \\approx 1 + 1 \\cdot 0.5 = 1.5$.",
                  "zh": "第一步：在 $(0, 1)$ 处斜率为 $0 + 1 = 1$。故 $y(0.5) \\approx 1 + 1 \\cdot 0.5 = 1.5$。"
                },
                {
                  "type": "p",
                  "en": "Step 2: at $(0.5, 1.5)$ the slope is $0.5 + 1.5 = 2$. So $y(1) \\approx 1.5 + 2 \\cdot 0.5 = 2.5$.",
                  "zh": "第二步：在 $(0.5, 1.5)$ 处斜率为 $0.5 + 1.5 = 2$。故 $y(1) \\approx 1.5 + 2 \\cdot 0.5 = 2.5$。"
                },
                {
                  "type": "p",
                  "en": "The exact solution gives $y(1) = 2e - 2 \\approx 3.44$, so our estimate is an underestimate — consistent with the solution curve being concave up.",
                  "zh": "精确解给出 $y(1) = 2e - 2 \\approx 3.44$，所以我们的估计偏低——这与解曲线上凹相一致。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Slope Depending Only on x",
                "zh": "例题 2：斜率只与 x 有关"
              },
              "problem": {
                "en": "Let $\\frac{dy}{dx} = 2x$ with $y(1) = 3$. Approximate $y(1.4)$ using two steps of Euler's method ($\\Delta x = 0.2$).",
                "zh": "设 $\\frac{dy}{dx} = 2x$，$y(1) = 3$。用两步欧拉方法（$\\Delta x = 0.2$）估算 $y(1.4)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1: slope at $x = 1$ is $2$. $y(1.2) \\approx 3 + 2(0.2) = 3.4$.",
                  "zh": "第一步：$x = 1$ 处斜率为 $2$。$y(1.2) \\approx 3 + 2(0.2) = 3.4$。"
                },
                {
                  "type": "p",
                  "en": "Step 2: slope at $x = 1.2$ is $2.4$. $y(1.4) \\approx 3.4 + 2.4(0.2) = 3.88$.",
                  "zh": "第二步：$x = 1.2$ 处斜率为 $2.4$。$y(1.4) \\approx 3.4 + 2.4(0.2) = 3.88$。"
                },
                {
                  "type": "p",
                  "en": "The exact answer is $y = x^2 + 2$, so $y(1.4) = 3.96$. Euler underestimates because $y = x^2 + 2$ is concave up.",
                  "zh": "精确解为 $y = x^2 + 2$，即 $y(1.4) = 3.96$。因为 $y = x^2 + 2$ 上凹，欧拉方法低估了真实值。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In one step of Euler's method, the new $y$-value equals",
                "zh": "欧拉方法每走一步，新的 $y$ 值等于"
              },
              "choices": [
                "old $y$ + slope × step size",
                "old $y$ × slope",
                "slope × step size",
                "old $y$ + step size"
              ],
              "answer": 0,
              "explanation": {
                "en": "Euler's method follows the tangent line: $y_{new} = y_{old} + f(x_{old}, y_{old}) \\cdot \\Delta x$. The slope comes from evaluating the differential equation at the current point.",
                "zh": "欧拉方法沿切线前进：$y_{new} = y_{old} + f(x_{old}, y_{old}) \\cdot \\Delta x$。斜率由微分方程在当前点的取值给出。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\frac{dy}{dx} = y$ with $y(0) = 2$, use one Euler step with $\\Delta x = 0.1$ to approximate $y(0.1)$. Give a decimal.",
                "zh": "已知 $\\frac{dy}{dx} = y$，$y(0) = 2$，用一步 $\\Delta x = 0.1$ 的欧拉方法估算 $y(0.1)$。请填一个小数。"
              },
              "answer": "2.2",
              "accept": [
                "2.20",
                "11/5"
              ],
              "explanation": {
                "en": "Slope at $(0, 2)$ is $y = 2$. New value: $2 + 2(0.1) = 2.2$. (The exact value $2e^{0.1} \\approx 2.21$ is slightly larger since $e^x$ curves upward.)",
                "zh": "在 $(0, 2)$ 处斜率为 $y = 2$。新值：$2 + 2(0.1) = 2.2$。（精确值 $2e^{0.1} \\approx 2.21$ 略大一些，因为 $e^x$ 向上弯曲。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $\\frac{dy}{dx} = x - y$ with $y(0) = 1$. Using Euler's method with $\\Delta x = 0.5$, approximate $y(1)$. Give a decimal.",
                "zh": "设 $\\frac{dy}{dx} = x - y$，$y(0) = 1$。用步长 $\\Delta x = 0.5$ 的欧拉方法估算 $y(1)$。请填一个小数。"
              },
              "answer": "0.5",
              "accept": [
                "0.50",
                "1/2",
                ".5"
              ],
              "explanation": {
                "en": "Step 1: slope at $(0,1)$ is $0 - 1 = -1$, so $y(0.5) \\approx 1 + (-1)(0.5) = 0.5$. Step 2: slope at $(0.5, 0.5)$ is $0.5 - 0.5 = 0$, so $y(1) \\approx 0.5 + 0(0.5) = 0.5$.",
                "zh": "第一步：$(0,1)$ 处斜率为 $0 - 1 = -1$，故 $y(0.5) \\approx 1 + (-1)(0.5) = 0.5$。第二步：$(0.5, 0.5)$ 处斜率为 $0.5 - 0.5 = 0$，故 $y(1) \\approx 0.5 + 0(0.5) = 0.5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Halving the step size in Euler's method generally",
                "zh": "把欧拉方法的步长减半通常会"
              },
              "choices": [
                "improves accuracy but requires more steps",
                "doubles the error",
                "has no effect on accuracy",
                "makes the method exact"
              ],
              "answer": 0,
              "explanation": {
                "en": "Smaller steps mean the tangent-line assumption is violated less on each interval, so the approximation improves — at the cost of more computation. The method is never exact for curved solutions.",
                "zh": "步长越小，每个区间上\"斜率不变\"的假设偏差就越小，逼近效果越好——代价是计算量增加。对弯曲的解而言，该方法永远不会完全精确。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The solution of $\\frac{dy}{dx} = f(x,y)$ through $(0, y_0)$ is concave down on $[0, 1]$. An Euler approximation of $y(1)$ starting at $x = 0$ will be",
                "zh": "过 $(0, y_0)$ 的方程 $\\frac{dy}{dx} = f(x,y)$ 的解在 $[0, 1]$ 上下凹。从 $x = 0$ 出发用欧拉方法估算 $y(1)$，结果会"
              },
              "choices": [
                "an overestimate",
                "an underestimate",
                "exact",
                "impossible to compare"
              ],
              "answer": 0,
              "explanation": {
                "en": "For a concave-down curve, tangent lines lie above the curve, so each Euler step lands above the true solution. This mirror-image of the concave-up case is tested regularly.",
                "zh": "下凹曲线的切线位于曲线上方，所以每一步欧拉方法都会落在真实解的上方。这与上凹情形正好相反，是常考点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $\\frac{dy}{dx} = 3x^2$ with $y(1) = 2$. Use two Euler steps with $\\Delta x = 1$ to approximate $y(3)$. Give an integer.",
                "zh": "设 $\\frac{dy}{dx} = 3x^2$，$y(1) = 2$。用两步 $\\Delta x = 1$ 的欧拉方法估算 $y(3)$。请填一个整数。"
              },
              "answer": "17",
              "accept": [
                "17.0"
              ],
              "explanation": {
                "en": "Step 1: slope at $x = 1$ is $3$, so $y(2) \\approx 2 + 3(1) = 5$. Step 2: slope at $x = 2$ is $12$, so $y(3) \\approx 5 + 12(1) = 17$. (Exact: $y = x^3 + 1$ gives $28$ — a large step size gives a rough estimate.)",
                "zh": "第一步：$x = 1$ 处斜率为 $3$，$y(2) \\approx 2 + 3(1) = 5$。第二步：$x = 2$ 处斜率为 $12$，$y(3) \\approx 5 + 12(1) = 17$。（精确解 $y = x^3 + 1$ 给出 $28$——步长太大导致估计粗糙。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $\\frac{dy}{dx} = x + y$, an Euler step from $(1, 2)$ with $\\Delta x = 0.1$ arrives at which point?",
                "zh": "对 $\\frac{dy}{dx} = x + y$，从 $(1, 2)$ 出发走一步 $\\Delta x = 0.1$ 的欧拉方法，到达哪个点？"
              },
              "choices": [
                "$(1.1, 2.3)$",
                "$(1.1, 2.1)$",
                "$(1.1, 2.2)$",
                "$(1, 2.3)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Slope at $(1, 2)$ is $1 + 2 = 3$. New point: $x = 1 + 0.1 = 1.1$ and $y = 2 + 3(0.1) = 2.3$. Remember to advance both coordinates — choice D forgets to move $x$.",
                "zh": "$(1, 2)$ 处斜率为 $1 + 2 = 3$。新点：$x = 1 + 0.1 = 1.1$，$y = 2 + 3(0.1) = 2.3$。记住两个坐标都要前进——选项 D 忘了移动 $x$。"
              }
            }
          ]
        },
        {
          "id": "logistic-growth",
          "title": "The Logistic Growth Model",
          "titleZh": "逻辑斯谛增长模型",
          "content": [
            {
              "type": "h2",
              "en": "Growth with a Ceiling",
              "zh": "有上限的增长"
            },
            {
              "type": "p",
              "en": "Exponential growth $\\frac{dP}{dt} = kP$ assumes unlimited resources. Real populations level off at a carrying capacity $L$. The logistic differential equation models this:",
              "zh": "指数增长 $\\frac{dP}{dt} = kP$ 假设资源无限。真实的种群会在环境承载力 $L$ 处趋于平稳。逻辑斯谛微分方程刻画了这一点："
            },
            {
              "type": "math",
              "tex": "\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)"
            },
            {
              "type": "p",
              "en": "When $P$ is small, the factor $1 - \\frac{P}{L} \\approx 1$ and growth is nearly exponential. As $P \\to L$, the factor approaches 0 and growth stalls.",
              "zh": "当 $P$ 很小时，因子 $1 - \\frac{P}{L} \\approx 1$，增长近似指数式。当 $P \\to L$ 时，因子趋于 0，增长停滞。"
            },
            {
              "type": "h3",
              "en": "Key Facts You Can State Without Solving",
              "zh": "无需求解即可得出的关键结论"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\lim_{t \\to \\infty} P(t) = L$ for any initial value $0 < P_0 < L$ (or $P_0 > L$).",
                  "zh": "对任意初始值 $0 < P_0 < L$（或 $P_0 > L$），都有 $\\lim_{t \\to \\infty} P(t) = L$。"
                },
                {
                  "en": "Growth rate $\\frac{dP}{dt}$ is maximized when $P = \\frac{L}{2}$ — half the carrying capacity.",
                  "zh": "增长速率 $\\frac{dP}{dt}$ 在 $P = \\frac{L}{2}$ 即承载力一半处达到最大。"
                },
                {
                  "en": "The solution curve has an inflection point at $P = \\frac{L}{2}$, changing from concave up to concave down.",
                  "zh": "解曲线在 $P = \\frac{L}{2}$ 处有拐点，由上凹转为下凹。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: most logistic questions can be answered directly from the differential equation — no solving required. Read $L$ from the equation (the value making $\\frac{dP}{dt} = 0$), then use the $\\frac{L}{2}$ facts. Solving the equation with partial fractions is rarely demanded.",
              "zh": "AP 考试提示：大多数逻辑斯谛问题可以直接从微分方程本身得到答案，无需求解。从方程中读出 $L$（使 $\\frac{dP}{dt} = 0$ 的值），再运用 $\\frac{L}{2}$ 的相关结论。真正要求用部分分式解方程的情况很少。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading Off the Carrying Capacity",
                "zh": "例题 1：读出承载力"
              },
              "problem": {
                "en": "A population satisfies $\\frac{dP}{dt} = 0.08P\\left(1 - \\frac{P}{1200}\\right)$ with $P(0) = 100$. Find $\\lim_{t\\to\\infty} P(t)$ and the population at which growth is fastest.",
                "zh": "某种群满足 $\\frac{dP}{dt} = 0.08P\\left(1 - \\frac{P}{1200}\\right)$，$P(0) = 100$。求 $\\lim_{t\\to\\infty} P(t)$ 以及增长最快时的种群数量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The carrying capacity is $L = 1200$, so $\\lim_{t\\to\\infty} P(t) = 1200$.",
                  "zh": "承载力为 $L = 1200$，故 $\\lim_{t\\to\\infty} P(t) = 1200$。"
                },
                {
                  "type": "p",
                  "en": "Growth is fastest at $P = \\frac{L}{2} = 600$. To verify: $\\frac{dP}{dt} = 0.08P - \\frac{0.08P^2}{1200}$ is a downward parabola in $P$ with vertex halfway between its roots $P = 0$ and $P = 1200$.",
                  "zh": "增长在 $P = \\frac{L}{2} = 600$ 时最快。验证：$\\frac{dP}{dt} = 0.08P - \\frac{0.08P^2}{1200}$ 是关于 $P$ 的开口向下抛物线，顶点位于两根 $P = 0$ 和 $P = 1200$ 的正中间。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Identifying a Logistic Equation in Disguise",
                "zh": "例题 2：识别伪装的逻辑斯谛方程"
              },
              "problem": {
                "en": "A population grows according to $\\frac{dP}{dt} = 3P - 0.005P^2$. Find the carrying capacity.",
                "zh": "某种群按 $\\frac{dP}{dt} = 3P - 0.005P^2$ 增长。求承载力。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor: $\\frac{dP}{dt} = 3P\\left(1 - \\frac{0.005P}{3}\\right) = 3P\\left(1 - \\frac{P}{600}\\right)$.",
                  "zh": "因式分解：$\\frac{dP}{dt} = 3P\\left(1 - \\frac{0.005P}{3}\\right) = 3P\\left(1 - \\frac{P}{600}\\right)$。"
                },
                {
                  "type": "p",
                  "en": "So $L = 600$. Shortcut: set $\\frac{dP}{dt} = 0$ and solve $3P - 0.005P^2 = P(3 - 0.005P) = 0$, giving the nonzero equilibrium $P = \\frac{3}{0.005} = 600$.",
                  "zh": "所以 $L = 600$。捷径：令 $\\frac{dP}{dt} = 0$，解 $3P - 0.005P^2 = P(3 - 0.005P) = 0$，得到非零平衡点 $P = \\frac{3}{0.005} = 600$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "A population satisfies $\\frac{dP}{dt} = 0.5P\\left(1 - \\frac{P}{800}\\right)$. What is $\\lim_{t\\to\\infty} P(t)$ if $P(0) = 50$? Give an integer.",
                "zh": "某种群满足 $\\frac{dP}{dt} = 0.5P\\left(1 - \\frac{P}{800}\\right)$。若 $P(0) = 50$，求 $\\lim_{t\\to\\infty} P(t)$。请填一个整数。"
              },
              "answer": "800",
              "accept": [
                "800.0"
              ],
              "explanation": {
                "en": "For logistic growth with $0 < P_0 < L$, the population always approaches the carrying capacity, here $L = 800$, read directly from the denominator inside the parentheses.",
                "zh": "当 $0 < P_0 < L$ 时，逻辑斯谛增长的种群总是趋近承载力，这里 $L = 800$，直接从括号内的分母读出。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $\\frac{dP}{dt} = 0.2P\\left(1 - \\frac{P}{500}\\right)$, the growth rate $\\frac{dP}{dt}$ is greatest when $P =$",
                "zh": "对 $\\frac{dP}{dt} = 0.2P\\left(1 - \\frac{P}{500}\\right)$，增长速率 $\\frac{dP}{dt}$ 在 $P$ 等于多少时最大？"
              },
              "choices": [
                "$250$",
                "$500$",
                "$125$",
                "$0.2 \\times 500 = 100$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Logistic growth is fastest at half the carrying capacity: $P = \\frac{500}{2} = 250$. Algebraically, $\\frac{dP}{dt}$ is a downward-opening parabola in $P$ with roots at 0 and 500, so the maximum sits at the midpoint.",
                "zh": "逻辑斯谛增长在承载力一半处最快：$P = \\frac{500}{2} = 250$。代数上，$\\frac{dP}{dt}$ 是关于 $P$ 的开口向下抛物线，两根为 0 和 500，最大值在中点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The solution curve of a logistic equation with carrying capacity $L$ has an inflection point when",
                "zh": "承载力为 $L$ 的逻辑斯谛方程的解曲线在何处有拐点？"
              },
              "choices": [
                "$P = \\frac{L}{2}$",
                "$P = L$",
                "$t = 0$",
                "$P = \\frac{L}{4}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The population grows fastest at $P = \\frac{L}{2}$; before that, growth speeds up (concave up) and after it slows down (concave down). Maximum rate of change corresponds exactly to the inflection point of $P(t)$.",
                "zh": "种群在 $P = \\frac{L}{2}$ 时增长最快；在此之前增速加快（上凹），之后增速放缓（下凹）。变化率最大恰好对应 $P(t)$ 的拐点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population follows $\\frac{dP}{dt} = 4P - 0.01P^2$. Find the carrying capacity. Give an integer.",
                "zh": "某种群满足 $\\frac{dP}{dt} = 4P - 0.01P^2$。求承载力。请填一个整数。"
              },
              "answer": "400",
              "accept": [
                "400.0"
              ],
              "explanation": {
                "en": "Set $\\frac{dP}{dt} = 0$: $P(4 - 0.01P) = 0$ gives the nonzero equilibrium $P = \\frac{4}{0.01} = 400$. Equivalently, factor into $4P(1 - \\frac{P}{400})$.",
                "zh": "令 $\\frac{dP}{dt} = 0$：$P(4 - 0.01P) = 0$，非零平衡点为 $P = \\frac{4}{0.01} = 400$。等价地，可因式分解为 $4P(1 - \\frac{P}{400})$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $P(0) = 900$ for the logistic equation $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{600}\\right)$, then $P(t)$",
                "zh": "对逻辑斯谛方程 $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{600}\\right)$，若 $P(0) = 900$，则 $P(t)$ 会"
              },
              "choices": [
                "decreases toward 600",
                "increases toward infinity",
                "decreases toward 0",
                "stays constant at 900"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $P = 900 > L = 600$, the factor $1 - \\frac{P}{L}$ is negative, so $\\frac{dP}{dt} < 0$: the population declines toward the carrying capacity from above. $L$ attracts solutions from both sides.",
                "zh": "因为 $P = 900 > L = 600$，因子 $1 - \\frac{P}{L}$ 为负，故 $\\frac{dP}{dt} < 0$：种群从上方向承载力递减。$L$ 从两侧吸引所有解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $\\frac{dP}{dt} = 0.1P\\left(1 - \\frac{P}{2000}\\right)$, compute $\\frac{dP}{dt}$ when $P = 1000$. Give an integer.",
                "zh": "对 $\\frac{dP}{dt} = 0.1P\\left(1 - \\frac{P}{2000}\\right)$，求 $P = 1000$ 时的 $\\frac{dP}{dt}$。请填一个整数。"
              },
              "answer": "50",
              "accept": [
                "50.0"
              ],
              "explanation": {
                "en": "$\\frac{dP}{dt} = 0.1(1000)\\left(1 - \\frac{1000}{2000}\\right) = 100 \\times \\frac{1}{2} = 50$. Note this is the maximum growth rate, since $1000 = \\frac{L}{2}$.",
                "zh": "$\\frac{dP}{dt} = 0.1(1000)\\left(1 - \\frac{1000}{2000}\\right) = 100 \\times \\frac{1}{2} = 50$。注意这正是最大增长速率，因为 $1000 = \\frac{L}{2}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about the logistic model is FALSE?",
                "zh": "关于逻辑斯谛模型，下列哪个说法是错误的？"
              },
              "choices": [
                "The population reaches $L$ in finite time",
                "Growth is approximately exponential when $P$ is small",
                "The graph of $P(t)$ is S-shaped for $0 < P_0 < \\frac{L}{2}$",
                "$P = L$ is an equilibrium solution"
              ],
              "answer": 0,
              "explanation": {
                "en": "The population approaches $L$ only asymptotically as $t \\to \\infty$ — it never actually reaches it. The other statements are all true: near-exponential start, S-shaped (sigmoid) curve, and $\\frac{dP}{dt} = 0$ at $P = L$.",
                "zh": "种群只是在 $t \\to \\infty$ 时渐近地趋近 $L$——永远不会真正到达。其余说法都正确：初期近似指数增长、S 形（sigmoid）曲线、以及 $P = L$ 时 $\\frac{dP}{dt} = 0$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-8-applications-of-integration",
      "title": "Unit 8: Applications of Integration",
      "titleZh": "第八单元：积分的应用",
      "lessons": [
        {
          "id": "average-value-and-motion",
          "title": "Average Value and Motion Along a Line",
          "titleZh": "平均值与直线运动",
          "content": [
            {
              "type": "h2",
              "en": "Integrals That Answer Real Questions",
              "zh": "用积分回答实际问题"
            },
            {
              "type": "p",
              "en": "Unit 8 is where the definite integral earns its keep. The same object $\\int_a^b f(x)\\,dx$ can be an average temperature, a change in position, or the number of people who entered a stadium. This lesson covers three of the most heavily tested applications: average value, motion along a line, and accumulation problems with rates in and out.",
              "zh": "第 8 单元是定积分真正大显身手的地方。同一个式子 $\\int_a^b f(x)\\,dx$ 可以表示平均温度、位置的变化，或进入体育场的人数。本节课讲解考试中最常见的三类应用：平均值、直线运动，以及有流入和流出速率的累积问题。"
            },
            {
              "type": "h3",
              "en": "Average Value of a Function",
              "zh": "函数的平均值"
            },
            {
              "type": "p",
              "en": "The average value of $f$ on $[a, b]$ is the total accumulation divided by the length of the interval:",
              "zh": "函数 $f$ 在 $[a, b]$ 上的平均值等于总累积量除以区间长度："
            },
            {
              "type": "math",
              "tex": "f_{\\text{avg}} = \\frac{1}{b-a} \\int_a^b f(x)\\,dx"
            },
            {
              "type": "p",
              "en": "Geometrically, $f_{\\text{avg}}$ is the height of the rectangle on $[a, b]$ whose area equals the area under the curve. Do not confuse it with the average rate of change $\\frac{f(b)-f(a)}{b-a}$ — that quantity averages the derivative, not the function itself.",
              "zh": "几何上，$f_{\\text{avg}}$ 是以 $[a, b]$ 为底、面积与曲线下面积相等的矩形的高。不要把它和平均变化率 $\\frac{f(b)-f(a)}{b-a}$ 混淆——后者是对导数取平均，而不是对函数本身取平均。"
            },
            {
              "type": "h3",
              "en": "Position, Displacement, and Total Distance",
              "zh": "位置、位移与总路程"
            },
            {
              "type": "p",
              "en": "If $v(t)$ is the velocity of a particle moving along a line, then integration recovers information about position:",
              "zh": "若 $v(t)$ 是沿直线运动的质点的速度，则积分可以还原关于位置的信息："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Displacement (net change in position) from $t = a$ to $t = b$: $\\int_a^b v(t)\\,dt$",
                  "zh": "从 $t = a$ 到 $t = b$ 的位移（位置的净变化）：$\\int_a^b v(t)\\,dt$"
                },
                {
                  "en": "Total distance traveled: $\\int_a^b |v(t)|\\,dt$ — split the integral wherever $v(t)$ changes sign",
                  "zh": "总路程：$\\int_a^b |v(t)|\\,dt$——在 $v(t)$ 变号处把积分拆开"
                },
                {
                  "en": "Position at time $b$: $s(b) = s(a) + \\int_a^b v(t)\\,dt$",
                  "zh": "时刻 $b$ 的位置：$s(b) = s(a) + \\int_a^b v(t)\\,dt$"
                }
              ]
            },
            {
              "type": "p",
              "en": "Remember the sign conventions from differentiation: the particle moves right (or up) when $v > 0$, moves left when $v < 0$, and its speed $|v(t)|$ is increasing exactly when $v$ and the acceleration $a(t) = v'(t)$ have the same sign.",
              "zh": "记住与求导部分一致的符号约定：$v > 0$ 时质点向右（或向上）运动，$v < 0$ 时向左运动；速率 $|v(t)|$ 增大当且仅当 $v$ 与加速度 $a(t) = v'(t)$ 同号。"
            },
            {
              "type": "h3",
              "en": "The Net Change Theorem and Rate In / Rate Out",
              "zh": "净变化定理与流入/流出速率"
            },
            {
              "type": "p",
              "en": "The net change theorem says that integrating a rate of change gives the net change of the quantity: $\\int_a^b F'(t)\\,dt = F(b) - F(a)$. AP free-response questions love this in \"tank\" form: water enters at rate $R(t)$ and drains at rate $D(t)$, so the amount $A(t)$ satisfies",
              "zh": "净变化定理告诉我们：对变化率积分得到该量的净变化：$\\int_a^b F'(t)\\,dt = F(b) - F(a)$。AP 解答题最爱用\"水箱\"的形式考它：水以速率 $R(t)$ 流入、以速率 $D(t)$ 流出，则水量 $A(t)$ 满足"
            },
            {
              "type": "math",
              "tex": "A(t) = A(0) + \\int_0^t \\bigl( R(s) - D(s) \\bigr)\\,ds"
            },
            {
              "type": "p",
              "en": "The amount is increasing when $R(t) > D(t)$ and decreasing when $R(t) < D(t)$; a maximum or minimum of $A$ can occur only where $R(t) = D(t)$ or at an endpoint. Always compare candidates with actual values.",
              "zh": "当 $R(t) > D(t)$ 时水量增加，$R(t) < D(t)$ 时水量减少；$A$ 的最大值或最小值只可能出现在 $R(t) = D(t)$ 处或区间端点处。一定要把所有候选点的函数值算出来比较。"
            },
            {
              "type": "note",
              "en": "AP exam tip: on accumulation FRQs, write the units and a sentence of interpretation — \"to the nearest liter, there are 66 liters of water in the tank at $t = 6$ hours.\" Interpretation points are the cheapest points on the exam, and omitting units is the most common way to lose them.",
              "zh": "AP 考试提示：在累积类解答题中，务必写出单位和一句话的解释——例如\"在 $t = 6$ 小时时，水箱中约有 66 升水（精确到升）\"。解释分是整张试卷上最容易拿的分，而漏写单位是最常见的丢分方式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Average Value",
                "zh": "例题 1：平均值"
              },
              "problem": {
                "en": "Find the average value of $f(x) = 3x^2 - 2x$ on the interval $[0, 2]$.",
                "zh": "求 $f(x) = 3x^2 - 2x$ 在区间 $[0, 2]$ 上的平均值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the average value formula with $a = 0$ and $b = 2$:",
                  "zh": "取 $a = 0$，$b = 2$，代入平均值公式："
                },
                {
                  "type": "math",
                  "tex": "f_{\\text{avg}} = \\frac{1}{2-0} \\int_0^2 (3x^2 - 2x)\\,dx = \\frac{1}{2} \\Bigl[ x^3 - x^2 \\Bigr]_0^2 = \\frac{1}{2}(8 - 4) = 2"
                },
                {
                  "type": "p",
                  "en": "A quick sanity check: $f(0) = 0$ and $f(2) = 8$, so an average of $2$ is plausible because the function stays small (even negative) on much of the interval before climbing.",
                  "zh": "快速验证：$f(0) = 0$，$f(2) = 8$，平均值为 $2$ 是合理的，因为函数在区间前段很小（甚至为负），之后才快速增大。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Rate In / Rate Out Tank Problem",
                "zh": "例题 2：流入/流出的水箱问题"
              },
              "problem": {
                "en": "Water flows into a tank at the rate $R(t) = 10 + 2t$ liters per hour and drains out at the rate $D(t) = t^2$ liters per hour, for $0 \\le t \\le 5$. At $t = 0$ the tank contains 50 liters. How much water is in the tank at $t = 3$, and is the amount increasing or decreasing at that instant?",
                "zh": "在 $0 \\le t \\le 5$ 内，水以 $R(t) = 10 + 2t$ 升/小时的速率流入水箱，同时以 $D(t) = t^2$ 升/小时的速率流出。$t = 0$ 时箱中有 50 升水。求 $t = 3$ 时箱中的水量，并判断此刻水量在增加还是减少。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "By the net change theorem, the amount at $t = 3$ is the initial amount plus the integral of the net rate:",
                  "zh": "由净变化定理，$t = 3$ 时的水量等于初始水量加上净速率的积分："
                },
                {
                  "type": "math",
                  "tex": "A(3) = 50 + \\int_0^3 \\bigl( 10 + 2t - t^2 \\bigr)\\,dt = 50 + \\Bigl[ 10t + t^2 - \\tfrac{t^3}{3} \\Bigr]_0^3 = 50 + (30 + 9 - 9) = 80"
                },
                {
                  "type": "p",
                  "en": "There are 80 liters at $t = 3$. Since $R(3) = 16 > 9 = D(3)$, the net rate is positive, so the amount of water is increasing at that instant. Note that we never needed a formula for $A(t)$ itself — the integral of the rate is enough.",
                  "zh": "$t = 3$ 时箱中有 80 升水。因为 $R(3) = 16 > 9 = D(3)$，净速率为正，所以此刻水量正在增加。注意我们从头到尾都不需要 $A(t)$ 的显式表达式——对速率积分就足够了。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the average value of $f(x) = x^2$ on the interval $[0, 3]$?",
                "zh": "$f(x) = x^2$ 在区间 $[0, 3]$ 上的平均值是多少？"
              },
              "choices": [
                "$9$",
                "$3$",
                "$\\frac{9}{2}$",
                "$27$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$f_{\\text{avg}} = \\frac{1}{3} \\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot \\frac{27}{3} = 3$. Choice A ($9$) is what you get if you forget to divide by the interval length $b - a = 3$.",
                "zh": "$f_{\\text{avg}} = \\frac{1}{3} \\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot \\frac{27}{3} = 3$。选 A（$9$）的同学忘了除以区间长度 $b - a = 3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle moves with velocity $v(t) = t^2 - 4t + 3$ for $0 \\le t \\le 3$. Find its displacement over this interval. Give an integer.",
                "zh": "质点的速度为 $v(t) = t^2 - 4t + 3$，$0 \\le t \\le 3$。求它在这段时间内的位移。请填一个整数。"
              },
              "answer": "0",
              "accept": [
                "0.0",
                "-0"
              ],
              "explanation": {
                "en": "Displacement is $\\int_0^3 (t^2 - 4t + 3)\\,dt = \\bigl[ \\frac{t^3}{3} - 2t^2 + 3t \\bigr]_0^3 = 9 - 18 + 9 = 0$. The particle ends exactly where it started, even though it moved the whole time.",
                "zh": "位移为 $\\int_0^3 (t^2 - 4t + 3)\\,dt = \\bigl[ \\frac{t^3}{3} - 2t^2 + 3t \\bigr]_0^3 = 9 - 18 + 9 = 0$。质点最终回到出发点，尽管它一直在运动。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the same particle with $v(t) = t^2 - 4t + 3$ on $[0, 3]$, what is the total distance traveled?",
                "zh": "同一质点的速度为 $v(t) = t^2 - 4t + 3$，$0 \\le t \\le 3$。它经过的总路程是多少？"
              },
              "choices": [
                "$\\frac{4}{3}$",
                "$0$",
                "$\\frac{8}{3}$",
                "$4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$v(t) = (t-1)(t-3)$ changes sign at $t = 1$. Compute $\\int_0^1 v\\,dt = \\frac{4}{3}$ and $\\int_1^3 v\\,dt = -\\frac{4}{3}$, so total distance $= \\frac{4}{3} + \\bigl| -\\frac{4}{3} \\bigr| = \\frac{8}{3}$. Choice B ($0$) is the displacement — a classic trap when the question asks for distance.",
                "zh": "$v(t) = (t-1)(t-3)$ 在 $t = 1$ 处变号。计算 $\\int_0^1 v\\,dt = \\frac{4}{3}$，$\\int_1^3 v\\,dt = -\\frac{4}{3}$，故总路程 $= \\frac{4}{3} + \\bigl| -\\frac{4}{3} \\bigr| = \\frac{8}{3}$。选项 B（$0$）是位移——题目问路程时选它是经典陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Sand is added to a pile at rate $R(t)$ tons per hour and removed at rate $D(t)$ tons per hour. The pile holds $A(0)$ tons at $t = 0$. Which expression gives the amount of sand at time $t = T$?",
                "zh": "沙子以每小时 $R(t)$ 吨的速率被加入沙堆，同时以每小时 $D(t)$ 吨的速率被运走。$t = 0$ 时沙堆有 $A(0)$ 吨。下列哪个表达式表示 $t = T$ 时沙堆的沙量？"
              },
              "choices": [
                "$A(0) + \\int_0^T \\bigl( R(t) - D(t) \\bigr)\\,dt$",
                "$\\int_0^T \\bigl( R(t) - D(t) \\bigr)\\,dt$",
                "$A(0) + R(T) - D(T)$",
                "$A(0) + \\int_0^T R(t)\\,dt$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The net rate of change of the amount is $R(t) - D(t)$, so by the net change theorem $A(T) = A(0) + \\int_0^T (R - D)\\,dt$. Choice B forgets the initial amount; choice C confuses the rate at one instant with accumulated change over the whole interval.",
                "zh": "沙量的净变化率是 $R(t) - D(t)$，由净变化定理得 $A(T) = A(0) + \\int_0^T (R - D)\\,dt$。选项 B 忘了加初始量；选项 C 把某一瞬间的速率和整个区间上的累积变化混为一谈。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the average value of $f(x) = 6x^2$ on the interval $[1, 2]$. Give an integer.",
                "zh": "求 $f(x) = 6x^2$ 在区间 $[1, 2]$ 上的平均值。请填一个整数。"
              },
              "answer": "14",
              "accept": [
                "14.0",
                "+14"
              ],
              "explanation": {
                "en": "$f_{\\text{avg}} = \\frac{1}{2-1} \\int_1^2 6x^2\\,dx = \\bigl[ 2x^3 \\bigr]_1^2 = 16 - 2 = 14$. Because the interval has length $1$, the average value equals the integral itself — but you should still write the $\\frac{1}{b-a}$ factor to show your setup.",
                "zh": "$f_{\\text{avg}} = \\frac{1}{2-1} \\int_1^2 6x^2\\,dx = \\bigl[ 2x^3 \\bigr]_1^2 = 16 - 2 = 14$。由于区间长度为 $1$，平均值恰好等于积分值——但书写时仍应写出 $\\frac{1}{b-a}$ 这一因子以展示完整的设置。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle moves with velocity $v(t) = t^2 - 6t + 8$. At which of the following times is the speed of the particle increasing?",
                "zh": "质点的速度为 $v(t) = t^2 - 6t + 8$。在下列哪个时刻，质点的速率正在增大？"
              },
              "choices": [
                "$t = 0$",
                "$t = 1$",
                "$t = 3.5$",
                "$t = 5$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Speed increases when $v$ and $a = v' = 2t - 6$ have the same sign. At $t = 5$: $v(5) = 3 > 0$ and $a(5) = 4 > 0$, so the particle is speeding up. At $t = 0$ and $t = 1$, $v > 0$ but $a < 0$ (slowing down); at $t = 3.5$, $v < 0$ but $a > 0$ (also slowing down). Checking only the sign of $a$ is the classic mistake here.",
                "zh": "当 $v$ 与 $a = v' = 2t - 6$ 同号时速率增大。在 $t = 5$ 处：$v(5) = 3 > 0$ 且 $a(5) = 4 > 0$，质点在加速。在 $t = 0$ 和 $t = 1$ 处 $v > 0$ 但 $a < 0$（减速）；在 $t = 3.5$ 处 $v < 0$ 但 $a > 0$（也是减速）。只看 $a$ 的符号是这类题的经典错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A tank initially holds 30 gallons of water. Water enters at rate $R(t) = 12 - 2t$ gallons per hour for $0 \\le t \\le 6$, with no outflow. How many gallons are in the tank at $t = 6$? Give an integer.",
                "zh": "一个水箱最初有 30 加仑水，在 $0 \\le t \\le 6$ 内水以 $R(t) = 12 - 2t$ 加仑/小时的速率流入，无流出。求 $t = 6$ 时箱中的水量（加仑）。请填一个整数。"
              },
              "answer": "66",
              "accept": [
                "66.0"
              ],
              "explanation": {
                "en": "$A(6) = 30 + \\int_0^6 (12 - 2t)\\,dt = 30 + \\bigl[ 12t - t^2 \\bigr]_0^6 = 30 + (72 - 36) = 66$ gallons. Note $R(6) = 0$: the inflow has just stopped, so $t = 6$ is when the tank holds the most water.",
                "zh": "$A(6) = 30 + \\int_0^6 (12 - 2t)\\,dt = 30 + \\bigl[ 12t - t^2 \\bigr]_0^6 = 30 + (72 - 36) = 66$ 加仑。注意 $R(6) = 0$：流入恰好停止，因此 $t = 6$ 正是水量最多的时刻。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle moves with velocity $v(t) = t^2 - 6t + 8$ for $0 \\le t \\le 5$. At which times does the particle change direction?",
                "zh": "质点的速度为 $v(t) = t^2 - 6t + 8$，$0 \\le t \\le 5$。质点在哪些时刻改变运动方向？"
              },
              "choices": [
                "only $t = 2$",
                "only $t = 4$",
                "$t = 2$ and $t = 4$",
                "it never changes direction"
              ],
              "answer": 2,
              "explanation": {
                "en": "$v(t) = (t-2)(t-4)$ is zero at $t = 2$ and $t = 4$, and $v$ actually changes sign at both (positive, then negative, then positive again). A direction change requires a sign change of $v$, not merely $v = 0$ — but here both zeros are genuine sign changes, so the answer includes both times.",
                "zh": "$v(t) = (t-2)(t-4)$ 在 $t = 2$ 和 $t = 4$ 处为零，且 $v$ 在两处都确实变号（先正、后负、再正）。改变方向要求 $v$ 变号，而不仅仅是 $v = 0$——本题两个零点都是真正的变号点，所以两个时刻都算。"
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
              "en": "Slicing a Region Into Strips",
              "zh": "把区域切成细条"
            },
            {
              "type": "p",
              "en": "To find the area between two curves, slice the region into thin rectangular strips, write the area of one strip as (length) $\\times$ (thickness), and integrate. The only real decisions are which variable to slice with and which curve is on top. This lesson builds that skill, including the tricky cases where the curves cross or where horizontal strips are simpler.",
              "zh": "要求两条曲线之间的面积，先把区域切成细长的矩形条，把每一条的面积写成（长度）$\\times$（厚度），再积分。真正需要决策的只有两件事：用哪个变量来切，以及哪条曲线在上方。本节课训练这项技能，包括曲线相交需要拆分、以及用水平条更简单的棘手情形。"
            },
            {
              "type": "h3",
              "en": "Vertical Strips: Integrating in $x$",
              "zh": "竖直条：关于 $x$ 积分"
            },
            {
              "type": "p",
              "en": "If $f(x) \\ge g(x)$ on $[a, b]$, the region between the graphs has area",
              "zh": "若在 $[a, b]$ 上 $f(x) \\ge g(x)$，则两图像之间区域的面积为"
            },
            {
              "type": "math",
              "tex": "A = \\int_a^b \\bigl( f(x) - g(x) \\bigr)\\,dx \\qquad \\text{(top curve minus bottom curve)}"
            },
            {
              "type": "p",
              "en": "The limits $a$ and $b$ are usually the $x$-coordinates of the intersection points, found by solving $f(x) = g(x)$. The integrand top $-$ bottom is automatically nonnegative, so the integral gives true area.",
              "zh": "积分上下限 $a$ 和 $b$ 通常是交点的横坐标，由方程 $f(x) = g(x)$ 解出。被积式\"上减下\"自动非负，因此积分给出的就是真实面积。"
            },
            {
              "type": "h3",
              "en": "Horizontal Strips: Integrating in $y$",
              "zh": "水平条：关于 $y$ 积分"
            },
            {
              "type": "p",
              "en": "When the region is bounded by curves more naturally written as $x = h(y)$ — for example $x = y^2$ — use horizontal strips. The area is $\\int_c^d (\\text{right curve} - \\text{left curve})\\,dy$, where the limits are $y$-values. Choose the variable that lets one single integral cover the whole region; a region that needs two integrals in $x$ often needs only one in $y$.",
              "zh": "当区域的边界更适合写成 $x = h(y)$ 的形式——例如 $x = y^2$——时，就用水平条。面积为 $\\int_c^d (\\text{右曲线} - \\text{左曲线})\\,dy$，上下限是 $y$ 值。选择能让一个积分覆盖整个区域的变量：一个在 $x$ 方向需要拆成两个积分的区域，在 $y$ 方向往往只需一个。"
            },
            {
              "type": "h3",
              "en": "When the Curves Cross",
              "zh": "当曲线相交穿越时"
            },
            {
              "type": "p",
              "en": "If the curves cross at $x = c$ inside $[a, b]$, then \"top\" and \"bottom\" swap there. Writing $\\int_a^b (f - g)\\,dx$ would let positive and negative pieces cancel. Split at the crossing:",
              "zh": "若曲线在 $[a, b]$ 内部的 $x = c$ 处相交穿越，\"上方\"和\"下方\"会在该处互换。直接写 $\\int_a^b (f - g)\\,dx$ 会让正负部分相互抵消。必须在交点处拆分："
            },
            {
              "type": "math",
              "tex": "A = \\int_a^c \\bigl( f - g \\bigr)\\,dx + \\int_c^b \\bigl( g - f \\bigr)\\,dx = \\int_a^b \\bigl| f(x) - g(x) \\bigr|\\,dx"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Sketch the region and find all intersection points (exactly, or with a calculator).",
                  "zh": "第一步：画出区域草图，求出所有交点（精确求解或用计算器）。"
                },
                {
                  "en": "Step 2: Choose vertical or horizontal strips so that one formula for \"top minus bottom\" (or \"right minus left\") covers each piece.",
                  "zh": "第二步：选择竖直条或水平条，使每一段区域都能用同一个\"上减下\"（或\"右减左\"）表达式表示。"
                },
                {
                  "en": "Step 3: Split the integral at every interior crossing point, then integrate each piece with the correct order of subtraction.",
                  "zh": "第三步：在每个内部交点处拆分积分，然后按正确的相减顺序对每一段积分。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: on the calculator section, you may evaluate $\\int_a^b |f(x) - g(x)|\\,dx$ directly with the absolute value function, and you may find intersection points numerically — write something like \"$x = 0.739$ (stored)\" and use the full stored value in later computations. Rounding an intersection point to 3 decimals and then reusing the rounded value is a well-known way to drift outside the accepted answer tolerance.",
              "zh": "AP 考试提示：在可用计算器的部分，可以直接用绝对值函数计算 $\\int_a^b |f(x) - g(x)|\\,dx$，交点也可以数值求解——写下形如\"$x = 0.739$（已存储）\"的说明，并在后续计算中使用完整的存储值。先把交点四舍五入到三位小数再拿去计算，是导致最终答案超出容许误差的著名失分方式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Line Over a Parabola",
                "zh": "例题 1：直线在抛物线上方"
              },
              "problem": {
                "en": "Find the area of the region enclosed by $y = x^2$ and $y = x + 2$.",
                "zh": "求由 $y = x^2$ 与 $y = x + 2$ 所围区域的面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Intersections: $x^2 = x + 2$ gives $x^2 - x - 2 = (x-2)(x+1) = 0$, so $x = -1$ and $x = 2$. Between them the line is on top (test $x = 0$: $2 > 0$).",
                  "zh": "求交点：$x^2 = x + 2$ 化为 $x^2 - x - 2 = (x-2)(x+1) = 0$，得 $x = -1$ 和 $x = 2$。在两交点之间直线在上方（代入 $x = 0$ 检验：$2 > 0$）。"
                },
                {
                  "type": "math",
                  "tex": "A = \\int_{-1}^{2} \\bigl( x + 2 - x^2 \\bigr)\\,dx = \\Bigl[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\Bigr]_{-1}^{2} = \\frac{10}{3} - \\Bigl( -\\frac{7}{6} \\Bigr) = \\frac{9}{2}"
                },
                {
                  "type": "p",
                  "en": "Always test a point between the intersections to decide top and bottom — guessing from a rough sketch is a frequent source of sign errors.",
                  "zh": "一定要在交点之间代入一个点来判断上下——仅凭草图猜测上下位置是符号错误的常见来源。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Crossing Curves Force a Split",
                "zh": "例题 2：相交穿越必须拆分"
              },
              "problem": {
                "en": "Find the total area between $y = \\cos x$ and $y = \\sin x$ for $0 \\le x \\le \\frac{\\pi}{2}$.",
                "zh": "求 $y = \\cos x$ 与 $y = \\sin x$ 在 $0 \\le x \\le \\frac{\\pi}{2}$ 上所夹的总面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The curves cross where $\\cos x = \\sin x$, i.e. at $x = \\frac{\\pi}{4}$. Cosine is on top before the crossing, sine after, so split there:",
                  "zh": "两曲线在 $\\cos x = \\sin x$ 处相交，即 $x = \\frac{\\pi}{4}$。交点之前余弦在上方，之后正弦在上方，故在此拆分："
                },
                {
                  "type": "math",
                  "tex": "A = \\int_0^{\\pi/4} (\\cos x - \\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2} (\\sin x - \\cos x)\\,dx"
                },
                {
                  "type": "math",
                  "tex": "= \\Bigl[ \\sin x + \\cos x \\Bigr]_0^{\\pi/4} + \\Bigl[ -\\cos x - \\sin x \\Bigr]_{\\pi/4}^{\\pi/2} = (\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2\\sqrt{2} - 2"
                },
                {
                  "type": "p",
                  "en": "Had we integrated $\\cos x - \\sin x$ over the whole interval without splitting, the two pieces would have cancelled to $0$ — an answer that should immediately look wrong for an area.",
                  "zh": "如果不拆分而直接在整个区间上积分 $\\cos x - \\sin x$，两部分会抵消得 $0$——一个面积等于 $0$ 的答案应当立刻引起你的警觉。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the area of the region enclosed by $y = x^2$ and $y = 2x$?",
                "zh": "由 $y = x^2$ 与 $y = 2x$ 所围区域的面积是多少？"
              },
              "choices": [
                "$\\frac{4}{3}$",
                "$\\frac{8}{3}$",
                "$2$",
                "$\\frac{2}{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Intersections at $x = 0$ and $x = 2$; the line is on top. $A = \\int_0^2 (2x - x^2)\\,dx = \\bigl[ x^2 - \\frac{x^3}{3} \\bigr]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$. Choice B comes from integrating $x^2 - 2x$ and dropping the resulting negative sign without thinking about which curve is on top.",
                "zh": "交点为 $x = 0$ 和 $x = 2$，直线在上方。$A = \\int_0^2 (2x - x^2)\\,dx = \\bigl[ x^2 - \\frac{x^3}{3} \\bigr]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$。选项 B 来自误算 $\\int (x^2 - 2x)$ 后随手丢掉负号、却没有真正判断哪条曲线在上方。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the area of the region in the first quadrant enclosed by $y = x$ and $y = x^3$. Give a fraction a/b.",
                "zh": "求第一象限内由 $y = x$ 与 $y = x^3$ 所围区域的面积。答案写成分数 a/b 的形式。"
              },
              "answer": "1/4",
              "accept": [
                "0.25",
                ".25"
              ],
              "explanation": {
                "en": "In the first quadrant the curves meet at $x = 0$ and $x = 1$, with $y = x$ on top (test $x = \\frac{1}{2}$). $A = \\int_0^1 (x - x^3)\\,dx = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$.",
                "zh": "在第一象限内两曲线交于 $x = 0$ 和 $x = 1$，且 $y = x$ 在上方（代入 $x = \\frac{1}{2}$ 检验）。$A = \\int_0^1 (x - x^3)\\,dx = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the area of the region enclosed by $x = y^2$ and $x = y + 2$?",
                "zh": "由 $x = y^2$ 与 $x = y + 2$ 所围区域的面积是多少？"
              },
              "choices": [
                "$\\frac{5}{2}$",
                "$9$",
                "$\\frac{9}{2}$",
                "$\\frac{7}{6}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Use horizontal strips. Intersections: $y^2 = y + 2$ gives $y = -1$ and $y = 2$; the line is the right boundary. $A = \\int_{-1}^{2} \\bigl( (y+2) - y^2 \\bigr)\\,dy = \\frac{9}{2}$. Slicing vertically instead would require splitting the region into two pieces at $x = 1$ — legal, but far more work.",
                "zh": "用水平条。交点：$y^2 = y + 2$ 解得 $y = -1$ 和 $y = 2$；直线是右边界。$A = \\int_{-1}^{2} \\bigl( (y+2) - y^2 \\bigr)\\,dy = \\frac{9}{2}$。若改用竖直条，就得在 $x = 1$ 处把区域拆成两块——可行，但麻烦得多。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Curves $y = f(x)$ and $y = g(x)$ satisfy $f > g$ on $(a, c)$ and $g > f$ on $(c, b)$. Which expression gives the total area between the curves on $[a, b]$?",
                "zh": "曲线 $y = f(x)$ 与 $y = g(x)$ 满足：在 $(a, c)$ 上 $f > g$，在 $(c, b)$ 上 $g > f$。下列哪个表达式表示 $[a, b]$ 上两曲线间的总面积？"
              },
              "choices": [
                "$\\int_a^b \\bigl( f(x) - g(x) \\bigr)\\,dx$",
                "$\\int_a^c \\bigl( f - g \\bigr)\\,dx + \\int_c^b \\bigl( g - f \\bigr)\\,dx$",
                "$\\Bigl| \\int_a^b \\bigl( f(x) - g(x) \\bigr)\\,dx \\Bigr|$",
                "$\\int_a^c \\bigl( g - f \\bigr)\\,dx + \\int_c^b \\bigl( f - g \\bigr)\\,dx$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Each piece must use its own top curve, which is exactly choice B (equivalently $\\int_a^b |f - g|\\,dx$). Choice A lets the two pieces cancel, and choice C takes the absolute value after the cancellation has already happened — both underestimate the true area.",
                "zh": "每一段都要用各自的上方曲线作被减式，正是选项 B（等价于 $\\int_a^b |f - g|\\,dx$）。选项 A 让两段正负抵消；选项 C 是在抵消发生之后才取绝对值——两者都会低估真实面积。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "(Calculator) Let $R$ be the region bounded by $y = \\cos x$, $y = x$, and the $y$-axis in the first quadrant. Find the area of $R$, rounded to three decimal places (e.g. 0.123).",
                "zh": "（可用计算器）设 $R$ 是第一象限内由 $y = \\cos x$、$y = x$ 和 $y$ 轴围成的区域。求 $R$ 的面积，四舍五入到三位小数（如 0.123）。"
              },
              "answer": "0.400",
              "accept": [
                "0.4",
                ".400",
                ".4",
                "0.401"
              ],
              "explanation": {
                "en": "The curves intersect where $\\cos x = x$; a calculator gives $x = 0.739085\\ldots$ (store this value). Then $A = \\int_0^{0.739085} (\\cos x - x)\\,dx \\approx 0.400$. Using a rounded intersection like $0.739$ inside the integral is exactly the rounding trap the AP scoring guidelines warn about — always integrate with the stored value.",
                "zh": "两曲线交于 $\\cos x = x$ 处；计算器给出 $x = 0.739085\\ldots$（存储该值）。于是 $A = \\int_0^{0.739085} (\\cos x - x)\\,dx \\approx 0.400$。在积分中使用四舍五入后的 $0.739$ 正是 AP 评分标准反复警告的舍入陷阱——务必用存储的完整值来积分。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the area of the region between $y = e^x$ and $y = 1$ from $x = 0$ to $x = 1$?",
                "zh": "在 $x = 0$ 到 $x = 1$ 之间，$y = e^x$ 与 $y = 1$ 所夹区域的面积是多少？"
              },
              "choices": [
                "$e - 1$",
                "$e - 2$",
                "$2 - e$",
                "$e$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $e^x \\ge 1$ on $[0, 1]$, $A = \\int_0^1 (e^x - 1)\\,dx = \\bigl[ e^x - x \\bigr]_0^1 = (e - 1) - 1 = e - 2$. Choice A ($e - 1$) is the area under $e^x$ alone — forgetting to subtract the bottom boundary $y = 1$.",
                "zh": "因为在 $[0, 1]$ 上 $e^x \\ge 1$，所以 $A = \\int_0^1 (e^x - 1)\\,dx = \\bigl[ e^x - x \\bigr]_0^1 = (e - 1) - 1 = e - 2$。选项 A（$e - 1$）只是 $e^x$ 下方的面积——忘了减去下边界 $y = 1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the area of the region enclosed by $y = \\sqrt{x}$ and $y = \\frac{x}{2}$. Give a fraction a/b.",
                "zh": "求由 $y = \\sqrt{x}$ 与 $y = \\frac{x}{2}$ 所围区域的面积。答案写成分数 a/b 的形式。"
              },
              "answer": "4/3",
              "accept": [
                "1.333",
                "1.33"
              ],
              "explanation": {
                "en": "Setting $\\sqrt{x} = \\frac{x}{2}$ gives $x = 0$ and $x = 4$, with $\\sqrt{x}$ on top between them. $A = \\int_0^4 \\bigl( \\sqrt{x} - \\frac{x}{2} \\bigr)\\,dx = \\bigl[ \\frac{2}{3} x^{3/2} - \\frac{x^2}{4} \\bigr]_0^4 = \\frac{16}{3} - 4 = \\frac{4}{3}$.",
                "zh": "令 $\\sqrt{x} = \\frac{x}{2}$，解得 $x = 0$ 和 $x = 4$，两点之间 $\\sqrt{x}$ 在上方。$A = \\int_0^4 \\bigl( \\sqrt{x} - \\frac{x}{2} \\bigr)\\,dx = \\bigl[ \\frac{2}{3} x^{3/2} - \\frac{x^2}{4} \\bigr]_0^4 = \\frac{16}{3} - 4 = \\frac{4}{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $R$ be the region bounded by $y = \\ln x$, the $x$-axis, and the line $x = e$. Which integral in terms of $y$ gives the area of $R$?",
                "zh": "设 $R$ 是由 $y = \\ln x$、$x$ 轴和直线 $x = e$ 围成的区域。下列哪个关于 $y$ 的积分表示 $R$ 的面积？"
              },
              "choices": [
                "$\\int_0^1 \\bigl( e^y - e \\bigr)\\,dy$",
                "$\\int_0^e \\bigl( e - e^y \\bigr)\\,dy$",
                "$\\int_0^1 \\bigl( e - \\ln y \\bigr)\\,dy$",
                "$\\int_0^1 \\bigl( e - e^y \\bigr)\\,dy$"
              ],
              "answer": 3,
              "explanation": {
                "en": "For horizontal strips, solve $y = \\ln x$ for $x$: the left boundary is $x = e^y$ and the right boundary is $x = e$. The region runs from $y = 0$ up to $y = \\ln e = 1$, giving $\\int_0^1 (e - e^y)\\,dy$. Choice B uses $x$-limits for a $y$-integral — the most common setup error when switching variables.",
                "zh": "用水平条时，把 $y = \\ln x$ 解成 $x$ 的形式：左边界为 $x = e^y$，右边界为 $x = e$。区域从 $y = 0$ 延伸到 $y = \\ln e = 1$，故面积为 $\\int_0^1 (e - e^y)\\,dy$。选项 B 把 $x$ 的范围当成了 $y$ 积分的上下限——这是换变量时最常见的设置错误。"
              }
            }
          ]
        },
        {
          "id": "volumes-and-arc-length",
          "title": "Volumes and Arc Length",
          "titleZh": "旋转体体积与弧长",
          "content": [
            {
              "type": "h2",
              "en": "From Area to Volume — and Along the Curve",
              "zh": "从面积到体积——再沿曲线而行"
            },
            {
              "type": "p",
              "en": "The slicing idea extends from 2D to 3D: to find a volume, integrate the cross-sectional area $A(x)$ along the axis, $V = \\int_a^b A(x)\\,dx$. Every volume formula in this lesson — discs, washers, and known cross-sections — is just a different way to write $A(x)$. We finish with arc length, a BC-only topic that measures distance along the curve itself.",
              "zh": "切片思想可以从二维推广到三维：求体积时，沿着轴对截面面积 $A(x)$ 积分，即 $V = \\int_a^b A(x)\\,dx$。本节课的每个体积公式——圆盘法、垫圈法、已知截面——都只是 $A(x)$ 的不同写法。最后我们学习弧长，这是 BC 独有的内容，度量沿曲线本身的长度。"
            },
            {
              "type": "h3",
              "en": "Disc and Washer Methods",
              "zh": "圆盘法与垫圈法"
            },
            {
              "type": "p",
              "en": "Rotating the region under $y = f(x)$ about the $x$-axis produces solid discs of radius $f(x)$. If the region sits between two curves, each slice is a washer — a disc with a hole:",
              "zh": "把 $y = f(x)$ 下方的区域绕 $x$ 轴旋转，得到半径为 $f(x)$ 的实心圆盘。若区域夹在两条曲线之间，每一片就是一个垫圈——中间有孔的圆盘："
            },
            {
              "type": "math",
              "tex": "V_{\\text{disc}} = \\pi \\int_a^b \\bigl[ f(x) \\bigr]^2 dx \\qquad V_{\\text{washer}} = \\pi \\int_a^b \\Bigl( \\bigl[ R(x) \\bigr]^2 - \\bigl[ r(x) \\bigr]^2 \\Bigr) dx"
            },
            {
              "type": "p",
              "en": "Here $R(x)$ is the outer radius (axis to far curve) and $r(x)$ is the inner radius (axis to near curve). For rotation about a shifted axis such as $y = -1$ or $y = 5$, each radius is a distance to that axis: for example, about $y = -1$ with the region above the axis, $R(x) = f(x) - (-1) = f(x) + 1$. Square the radii separately — $\\bigl( R^2 - r^2 \\bigr)$ is not $(R - r)^2$.",
              "zh": "其中 $R(x)$ 是外半径（旋转轴到远曲线的距离），$r(x)$ 是内半径（旋转轴到近曲线的距离）。绕平移后的轴（如 $y = -1$ 或 $y = 5$）旋转时，每个半径都是到该轴的距离：例如绕 $y = -1$ 旋转、区域在轴上方时，$R(x) = f(x) - (-1) = f(x) + 1$。两个半径要分别平方——$\\bigl( R^2 - r^2 \\bigr)$ 不等于 $(R - r)^2$。"
            },
            {
              "type": "h3",
              "en": "Volumes with Known Cross-Sections",
              "zh": "已知截面的立体体积"
            },
            {
              "type": "p",
              "en": "Some solids are built on a plane region as base, with congruent-shaped cross-sections perpendicular to an axis. If the base gives each slice a side or diameter of length $s(x)$, integrate the area of the shape:",
              "zh": "有些立体以平面区域为底，垂直于某条轴的截面是形状相同的图形。若底面给出每片截面的边长或直径 $s(x)$，就对该形状的面积积分："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Squares of side $s$: $A = s^2$",
                  "zh": "边长为 $s$ 的正方形：$A = s^2$"
                },
                {
                  "en": "Semicircles of diameter $s$: $A = \\frac{\\pi}{8} s^2$ (radius is $\\frac{s}{2}$, and it is half a circle)",
                  "zh": "直径为 $s$ 的半圆：$A = \\frac{\\pi}{8} s^2$（半径是 $\\frac{s}{2}$，且只有半个圆）"
                },
                {
                  "en": "Equilateral triangles of side $s$: $A = \\frac{\\sqrt{3}}{4} s^2$; isosceles right triangles with leg $s$: $A = \\frac{1}{2} s^2$",
                  "zh": "边长为 $s$ 的等边三角形：$A = \\frac{\\sqrt{3}}{4} s^2$；直角边为 $s$ 的等腰直角三角形：$A = \\frac{1}{2} s^2$"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Arc Length (BC Only)",
              "zh": "弧长（BC 独有）"
            },
            {
              "type": "p",
              "en": "The length of the graph of $y = f(x)$ from $x = a$ to $x = b$ comes from summing tiny hypotenuses $\\sqrt{(dx)^2 + (dy)^2}$:",
              "zh": "$y = f(x)$ 的图像从 $x = a$ 到 $x = b$ 的长度，来自把微小的斜边 $\\sqrt{(dx)^2 + (dy)^2}$ 累加起来："
            },
            {
              "type": "math",
              "tex": "L = \\int_a^b \\sqrt{1 + \\bigl[ f'(x) \\bigr]^2}\\,dx"
            },
            {
              "type": "p",
              "en": "Most arc length integrals cannot be evaluated by hand, so on the exam you will usually either set up the integral (no-calculator) or evaluate it numerically (calculator). The rare hand-computable cases are engineered so that $1 + [f'(x)]^2$ becomes a perfect square or a cleanly integrable expression.",
              "zh": "大多数弧长积分无法手算，所以考试通常只要求你列出积分式（无计算器部分）或用计算器数值求解（计算器部分）。少数能手算的题目都是精心设计的：$1 + [f'(x)]^2$ 会化成完全平方式或容易积分的表达式。"
            },
            {
              "type": "note",
              "en": "AP exam tip: the most common volume error is using the radius measured from the wrong reference. Before writing any integral, draw the rotation axis and label $R$ and $r$ as distances from the axis, not as function values. And never \"simplify\" $R^2 - r^2$ to $(R - r)^2$ — graders see this every single year.",
              "zh": "AP 考试提示：体积题最常见的错误是半径的起点量错了。写积分之前，先画出旋转轴，并把 $R$ 和 $r$ 标注为到旋转轴的距离，而不是函数值本身。另外绝不要把 $R^2 - r^2$\"化简\"成 $(R - r)^2$——阅卷人每年都能见到这个错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Washers About the $x$-Axis",
                "zh": "例题 1：绕 $x$ 轴的垫圈法"
              },
              "problem": {
                "en": "The region enclosed by $y = 2x$ and $y = x^2$ is rotated about the $x$-axis. Find the volume of the resulting solid.",
                "zh": "把由 $y = 2x$ 与 $y = x^2$ 所围的区域绕 $x$ 轴旋转，求所得立体的体积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The curves intersect at $x = 0$ and $x = 2$, with $y = 2x$ farther from the axis (outer radius) and $y = x^2$ closer (inner radius):",
                  "zh": "两曲线交于 $x = 0$ 和 $x = 2$；$y = 2x$ 离轴更远（外半径），$y = x^2$ 离轴更近（内半径）："
                },
                {
                  "type": "math",
                  "tex": "V = \\pi \\int_0^2 \\Bigl( (2x)^2 - (x^2)^2 \\Bigr) dx = \\pi \\int_0^2 \\bigl( 4x^2 - x^4 \\bigr)\\,dx = \\pi \\Bigl[ \\frac{4x^3}{3} - \\frac{x^5}{5} \\Bigr]_0^2 = \\pi \\Bigl( \\frac{32}{3} - \\frac{32}{5} \\Bigr) = \\frac{64\\pi}{15}"
                },
                {
                  "type": "p",
                  "en": "Check which curve is the outer radius by testing a point: at $x = 1$, the line gives $y = 2$ and the parabola gives $y = 1$, so the line is indeed farther from the $x$-axis.",
                  "zh": "代入一个点检验哪条曲线是外半径：在 $x = 1$ 处，直线给出 $y = 2$，抛物线给出 $y = 1$，所以直线确实离 $x$ 轴更远。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Hand-Computable Arc Length",
                "zh": "例题 2：可以手算的弧长"
              },
              "problem": {
                "en": "Find the length of the curve $y = \\ln(\\cos x)$ from $x = 0$ to $x = \\frac{\\pi}{4}$.",
                "zh": "求曲线 $y = \\ln(\\cos x)$ 从 $x = 0$ 到 $x = \\frac{\\pi}{4}$ 的弧长。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $f'(x) = \\frac{-\\sin x}{\\cos x} = -\\tan x$, so $1 + [f'(x)]^2 = 1 + \\tan^2 x = \\sec^2 x$, and the square root collapses beautifully:",
                  "zh": "这里 $f'(x) = \\frac{-\\sin x}{\\cos x} = -\\tan x$，于是 $1 + [f'(x)]^2 = 1 + \\tan^2 x = \\sec^2 x$，根号完美化简："
                },
                {
                  "type": "math",
                  "tex": "L = \\int_0^{\\pi/4} \\sqrt{\\sec^2 x}\\,dx = \\int_0^{\\pi/4} \\sec x\\,dx = \\Bigl[ \\ln \\bigl| \\sec x + \\tan x \\bigr| \\Bigr]_0^{\\pi/4} = \\ln\\bigl( \\sqrt{2} + 1 \\bigr)"
                },
                {
                  "type": "p",
                  "en": "Numerically $L \\approx 0.881$. Recognizing the identity $1 + \\tan^2 x = \\sec^2 x$ is the entire trick — when an arc length problem appears in the no-calculator section, expect a simplification like this.",
                  "zh": "数值上 $L \\approx 0.881$。识别恒等式 $1 + \\tan^2 x = \\sec^2 x$ 是本题的全部技巧——当弧长题出现在无计算器部分时，就应该预期会有类似的化简。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The region bounded by $y = \\sqrt{x}$, the $x$-axis, and $x = 4$ is rotated about the $x$-axis. What is the volume of the solid?",
                "zh": "把由 $y = \\sqrt{x}$、$x$ 轴和 $x = 4$ 围成的区域绕 $x$ 轴旋转，所得立体的体积是多少？"
              },
              "choices": [
                "$8\\pi$",
                "$16\\pi$",
                "$4\\pi$",
                "$\\frac{64\\pi}{5}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Disc method: $V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx = \\pi \\cdot \\frac{16}{2} = 8\\pi$. Choice B doubles the answer by forgetting the $\\frac{1}{2}$ from integrating $x$; squaring $\\sqrt{x}$ correctly to get $x$ is the key first step.",
                "zh": "圆盘法：$V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx = \\pi \\cdot \\frac{16}{2} = 8\\pi$。选项 B 是把 $x$ 积分时漏掉 $\\frac{1}{2}$ 导致结果翻倍；正确的第一步是把 $\\sqrt{x}$ 平方得到 $x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The region bounded by $y = x$, the $x$-axis, and $x = 3$ is rotated about the $x$-axis. The volume of the solid is $k\\pi$. Find $k$. Give an integer.",
                "zh": "把由 $y = x$、$x$ 轴和 $x = 3$ 围成的区域绕 $x$ 轴旋转，所得立体的体积为 $k\\pi$。求 $k$。请填一个整数。"
              },
              "answer": "9",
              "accept": [
                "9.0",
                "+9"
              ],
              "explanation": {
                "en": "$V = \\pi \\int_0^3 x^2\\,dx = \\pi \\cdot \\frac{27}{3} = 9\\pi$, so $k = 9$. Sanity check: this solid is a cone with radius 3 and height 3, and $\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(3) = 9\\pi$ agrees.",
                "zh": "$V = \\pi \\int_0^3 x^2\\,dx = \\pi \\cdot \\frac{27}{3} = 9\\pi$，故 $k = 9$。用几何验证：该立体是半径 3、高 3 的圆锥，$\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(3) = 9\\pi$，两者一致。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The region between $y = x$ and $y = x^2$ (for $0 \\le x \\le 1$) is rotated about the $x$-axis. What is the volume?",
                "zh": "把 $y = x$ 与 $y = x^2$ 之间的区域（$0 \\le x \\le 1$）绕 $x$ 轴旋转，体积是多少？"
              },
              "choices": [
                "$\\frac{\\pi}{15}$",
                "$\\frac{2\\pi}{15}$",
                "$\\frac{\\pi}{6}$",
                "$\\frac{2\\pi}{5}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Washers with outer radius $x$ and inner radius $x^2$: $V = \\pi \\int_0^1 (x^2 - x^4)\\,dx = \\pi \\bigl( \\frac{1}{3} - \\frac{1}{5} \\bigr) = \\frac{2\\pi}{15}$. Choice C, $\\frac{\\pi}{6}$, comes from the illegal shortcut $\\pi \\int_0^1 (x - x^2)\\,dx$ — treating the area integrand as if it were the washer integrand.",
                "zh": "垫圈法，外半径 $x$、内半径 $x^2$：$V = \\pi \\int_0^1 (x^2 - x^4)\\,dx = \\pi \\bigl( \\frac{1}{3} - \\frac{1}{5} \\bigr) = \\frac{2\\pi}{15}$。选项 C 的 $\\frac{\\pi}{6}$ 来自 $\\pi \\int (x - x^2)\\,dx$——把面积的被积式直接当成了垫圈的被积式，这是非法的捷径。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The region bounded by $y = \\sqrt{x}$, the $x$-axis, and $x = 4$ is rotated about the line $y = -1$. Which integral gives the volume?",
                "zh": "把由 $y = \\sqrt{x}$、$x$ 轴和 $x = 4$ 围成的区域绕直线 $y = -1$ 旋转。下列哪个积分表示体积？"
              },
              "choices": [
                "$\\pi \\int_0^4 \\bigl( x - 1 \\bigr)\\,dx$",
                "$\\pi \\int_0^4 \\bigl( \\sqrt{x} + 1 \\bigr)^2 dx$",
                "$\\pi \\int_0^4 \\Bigl( \\bigl( \\sqrt{x} + 1 \\bigr)^2 - 1 \\Bigr) dx$",
                "$\\pi \\int_0^4 \\bigl( \\sqrt{x} - 1 \\bigr)^2 dx$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Measuring from the axis $y = -1$: the outer radius is $\\sqrt{x} - (-1) = \\sqrt{x} + 1$ and the inner radius is $0 - (-1) = 1$ (the gap between the region and the axis). So $V = \\pi \\int_0^4 \\bigl( (\\sqrt{x}+1)^2 - 1^2 \\bigr) dx$. Choice B forgets the hole: the region does not touch the line $y = -1$, so a washer, not a disc, is required.",
                "zh": "从旋转轴 $y = -1$ 量起：外半径为 $\\sqrt{x} - (-1) = \\sqrt{x} + 1$，内半径为 $0 - (-1) = 1$（区域与轴之间的空隙）。故 $V = \\pi \\int_0^4 \\bigl( (\\sqrt{x}+1)^2 - 1^2 \\bigr) dx$。选项 B 忘了中间的孔：区域并不接触直线 $y = -1$，所以必须用垫圈而不是圆盘。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solid has as its base the region bounded by $y = \\sqrt{x}$, the $x$-axis, and $x = 4$. Cross-sections perpendicular to the $x$-axis are squares with one side in the base. Find the volume. Give an integer.",
                "zh": "一个立体的底面是由 $y = \\sqrt{x}$、$x$ 轴和 $x = 4$ 围成的区域，垂直于 $x$ 轴的截面是一边落在底面内的正方形。求该立体的体积。请填一个整数。"
              },
              "answer": "8",
              "accept": [
                "8.0",
                "+8"
              ],
              "explanation": {
                "en": "Each square has side $s(x) = \\sqrt{x}$, so $A(x) = (\\sqrt{x})^2 = x$ and $V = \\int_0^4 x\\,dx = 8$. There is no $\\pi$ here — nothing is rotating. Writing $\\pi$ out of habit is one of the most common cross-section errors.",
                "zh": "每个正方形的边长为 $s(x) = \\sqrt{x}$，故 $A(x) = (\\sqrt{x})^2 = x$，$V = \\int_0^4 x\\,dx = 8$。这里没有 $\\pi$——因为没有任何旋转。出于惯性多写一个 $\\pi$ 是截面类问题最常见的错误之一。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A solid has as its base the triangular region bounded by $y = 2 - x$ and the coordinate axes. Cross-sections perpendicular to the $x$-axis are semicircles with diameter in the base. What is the volume?",
                "zh": "一个立体的底面是由 $y = 2 - x$ 与两条坐标轴围成的三角形区域，垂直于 $x$ 轴的截面是直径落在底面内的半圆。该立体的体积是多少？"
              },
              "choices": [
                "$\\frac{2\\pi}{3}$",
                "$\\frac{\\pi}{3}$",
                "$\\frac{8}{3}$",
                "$\\frac{\\pi}{6}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The diameter is $2 - x$, so the semicircle area is $\\frac{1}{2}\\pi \\bigl( \\frac{2-x}{2} \\bigr)^2 = \\frac{\\pi}{8}(2-x)^2$. Then $V = \\frac{\\pi}{8} \\int_0^2 (2-x)^2\\,dx = \\frac{\\pi}{8} \\cdot \\frac{8}{3} = \\frac{\\pi}{3}$. Choice A results from using the diameter as the radius — forgetting to halve it, the single most common semicircle error.",
                "zh": "直径为 $2 - x$，故半圆面积为 $\\frac{1}{2}\\pi \\bigl( \\frac{2-x}{2} \\bigr)^2 = \\frac{\\pi}{8}(2-x)^2$。于是 $V = \\frac{\\pi}{8} \\int_0^2 (2-x)^2\\,dx = \\frac{\\pi}{8} \\cdot \\frac{8}{3} = \\frac{\\pi}{3}$。选项 A 来自把直径当成半径用——忘记除以 2，这是半圆截面题里最高频的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which integral gives the length of the curve $y = x^3$ from $x = 0$ to $x = 2$?",
                "zh": "下列哪个积分表示曲线 $y = x^3$ 从 $x = 0$ 到 $x = 2$ 的弧长？"
              },
              "choices": [
                "$\\int_0^2 \\sqrt{1 + 9x^4}\\,dx$",
                "$\\int_0^2 \\sqrt{1 + x^6}\\,dx$",
                "$\\int_0^2 \\sqrt{1 + 3x^2}\\,dx$",
                "$\\int_0^2 \\bigl( 1 + 9x^4 \\bigr)\\,dx$"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $f'(x) = 3x^2$, the formula gives $L = \\int_0^2 \\sqrt{1 + (3x^2)^2}\\,dx = \\int_0^2 \\sqrt{1 + 9x^4}\\,dx$. Choice B squares the function instead of its derivative, and choice C forgets to square $f'$ at all — both are extremely common under time pressure.",
                "zh": "由 $f'(x) = 3x^2$，公式给出 $L = \\int_0^2 \\sqrt{1 + (3x^2)^2}\\,dx = \\int_0^2 \\sqrt{1 + 9x^4}\\,dx$。选项 B 平方的是函数本身而不是导数；选项 C 干脆忘了对 $f'$ 平方——考试时间紧张时这两个错误都极其常见。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the length of the curve $y = \\frac{2}{3} x^{3/2}$ from $x = 0$ to $x = 3$. Give a fraction a/b.",
                "zh": "求曲线 $y = \\frac{2}{3} x^{3/2}$ 从 $x = 0$ 到 $x = 3$ 的弧长。答案写成分数 a/b 的形式。"
              },
              "answer": "14/3",
              "accept": [
                "4.667",
                "4.67"
              ],
              "explanation": {
                "en": "Here $f'(x) = x^{1/2}$, so $1 + [f'(x)]^2 = 1 + x$ and $L = \\int_0^3 \\sqrt{1+x}\\,dx = \\bigl[ \\frac{2}{3}(1+x)^{3/2} \\bigr]_0^3 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$. This is the classic hand-computable arc length: the derivative is engineered so the expression under the root integrates cleanly.",
                "zh": "这里 $f'(x) = x^{1/2}$，于是 $1 + [f'(x)]^2 = 1 + x$，$L = \\int_0^3 \\sqrt{1+x}\\,dx = \\bigl[ \\frac{2}{3}(1+x)^{3/2} \\bigr]_0^3 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$。这是经典的可手算弧长题：导数被精心设计，使根号内的表达式可以干净地积分。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-9-parametric-polar-vector",
      "title": "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
      "titleZh": "第九单元：参数方程、极坐标与向量值函数",
      "lessons": [
        {
          "id": "parametric-calculus",
          "title": "Calculus of Parametric Curves",
          "titleZh": "参数曲线的微积分",
          "content": [
            {
              "type": "h2",
              "en": "Curves That Move Through Time",
              "zh": "随时间运动的曲线"
            },
            {
              "type": "p",
              "en": "A parametric curve gives $x$ and $y$ separately as functions of a parameter $t$: $x = x(t)$, $y = y(t)$. Instead of a static graph, think of a point tracing a path as $t$ increases. The BC exam asks three things about these curves: their slope, their concavity, and their length — and each has a formula built directly from $t$-derivatives.",
              "zh": "参数曲线把 $x$ 和 $y$ 分别表示为参数 $t$ 的函数：$x = x(t)$，$y = y(t)$。不要把它看成静态图像，而要想象一个点随 $t$ 增大而描出一条路径。BC 考试对这类曲线主要考三件事：斜率、凹凸性和弧长——每一样都有直接由对 $t$ 的导数构成的公式。"
            },
            {
              "type": "h3",
              "en": "The Slope: First Derivative",
              "zh": "斜率：一阶导数"
            },
            {
              "type": "p",
              "en": "By the chain rule, the slope of the curve in the $xy$-plane is the ratio of the two $t$-derivatives:",
              "zh": "由链式法则，曲线在 $xy$ 平面内的斜率等于两个对 $t$ 的导数之比："
            },
            {
              "type": "math",
              "tex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}, \\qquad \\frac{dx}{dt} \\neq 0"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Horizontal tangent: $\\frac{dy}{dt} = 0$ while $\\frac{dx}{dt} \\neq 0$.",
                  "zh": "水平切线：$\\frac{dy}{dt} = 0$ 且 $\\frac{dx}{dt} \\neq 0$。"
                },
                {
                  "en": "Vertical tangent: $\\frac{dx}{dt} = 0$ while $\\frac{dy}{dt} \\neq 0$.",
                  "zh": "竖直切线：$\\frac{dx}{dt} = 0$ 且 $\\frac{dy}{dt} \\neq 0$。"
                },
                {
                  "en": "If both derivatives are $0$ at the same $t$, the test is inconclusive — investigate with limits.",
                  "zh": "若两个导数在同一 $t$ 处同时为 $0$，该判别法失效——需要用极限进一步分析。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Concavity: The Second Derivative",
              "zh": "凹凸性：二阶导数"
            },
            {
              "type": "p",
              "en": "To get $\\frac{d^2y}{dx^2}$ you must differentiate $\\frac{dy}{dx}$ with respect to $x$ — but $\\frac{dy}{dx}$ is a function of $t$, so the chain rule forces one more division by $\\frac{dx}{dt}$:",
              "zh": "要求 $\\frac{d^2y}{dx^2}$，必须把 $\\frac{dy}{dx}$ 对 $x$ 求导——但 $\\frac{dy}{dx}$ 是 $t$ 的函数，因此链式法则要求再除一次 $\\frac{dx}{dt}$："
            },
            {
              "type": "math",
              "tex": "\\frac{d^2y}{dx^2} = \\frac{\\dfrac{d}{dt}\\left( \\dfrac{dy}{dx} \\right)}{\\dfrac{dx}{dt}}"
            },
            {
              "type": "note",
              "en": "AP exam tip: the single most common error in this unit is writing $\\frac{d^2y}{dx^2} = \\frac{d^2y/dt^2}{d^2x/dt^2}$. That is wrong. Differentiate the slope $\\frac{dy}{dx}$ with respect to $t$ first, then divide by $\\frac{dx}{dt}$ — the multiple-choice section always includes the wrong version as a distractor.",
              "zh": "AP 考试提示：本单元最常见的错误就是写成 $\\frac{d^2y}{dx^2} = \\frac{d^2y/dt^2}{d^2x/dt^2}$。这是错的。正确做法是先把斜率 $\\frac{dy}{dx}$ 对 $t$ 求导，再除以 $\\frac{dx}{dt}$——选择题里几乎总会把错误版本当作干扰项。"
            },
            {
              "type": "h3",
              "en": "Arc Length of a Parametric Curve",
              "zh": "参数曲线的弧长"
            },
            {
              "type": "p",
              "en": "A tiny piece of the curve has length $\\sqrt{(dx)^2 + (dy)^2}$. Factoring out $dt$ gives the BC arc-length formula, valid when the curve is traced exactly once for $a \\le t \\le b$:",
              "zh": "曲线上一小段的长度为 $\\sqrt{(dx)^2 + (dy)^2}$。提出 $dt$ 后得到 BC 的弧长公式，前提是当 $a \\le t \\le b$ 时曲线恰好被描过一次："
            },
            {
              "type": "math",
              "tex": "L = \\int_a^b \\sqrt{\\left( \\frac{dx}{dt} \\right)^2 + \\left( \\frac{dy}{dt} \\right)^2} \\, dt"
            },
            {
              "type": "p",
              "en": "On the calculator-active section, you will usually set up this integral by hand and evaluate it numerically. On the no-calculator section, the integrand is designed to simplify into a perfect square.",
              "zh": "在允许使用计算器的部分，通常需要手写出这个积分再用计算器求数值；在不允许计算器的部分，被积函数往往会化简成一个完全平方式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Slope and Horizontal Tangents",
                "zh": "例题 1：斜率与水平切线"
              },
              "problem": {
                "en": "A curve is defined by $x = t^2$, $y = t^3 - 3t$. Find $\\frac{dy}{dx}$, and find all points where the curve has a horizontal tangent.",
                "zh": "曲线由 $x = t^2$，$y = t^3 - 3t$ 定义。求 $\\frac{dy}{dx}$，并求曲线所有具有水平切线的点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute both $t$-derivatives: $\\frac{dx}{dt} = 2t$ and $\\frac{dy}{dt} = 3t^2 - 3$. Then",
                  "zh": "先求两个对 $t$ 的导数：$\\frac{dx}{dt} = 2t$，$\\frac{dy}{dt} = 3t^2 - 3$。于是"
                },
                {
                  "type": "math",
                  "tex": "\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t}"
                },
                {
                  "type": "p",
                  "en": "Horizontal tangents require $3t^2 - 3 = 0$, so $t = \\pm 1$; at both values $\\frac{dx}{dt} = \\pm 2 \\neq 0$, so the test applies. At $t = 1$ the point is $(1, -2)$; at $t = -1$ it is $(1, 2)$. (At $t = 0$, $\\frac{dx}{dt} = 0$ but $\\frac{dy}{dt} = -3 \\neq 0$, giving a vertical tangent at the origin.)",
                  "zh": "水平切线要求 $3t^2 - 3 = 0$，即 $t = \\pm 1$；此时 $\\frac{dx}{dt} = \\pm 2 \\neq 0$，判别法适用。$t = 1$ 时对应点 $(1, -2)$；$t = -1$ 时对应点 $(1, 2)$。（在 $t = 0$ 处 $\\frac{dx}{dt} = 0$ 而 $\\frac{dy}{dt} = -3 \\neq 0$，故原点处是竖直切线。）"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Arc Length with a Perfect Square",
                "zh": "例题 2：化为完全平方的弧长"
              },
              "problem": {
                "en": "Find the length of the curve $x = t^2$, $y = \\frac{2}{3}t^3$ for $0 \\le t \\le \\sqrt{3}$.",
                "zh": "求曲线 $x = t^2$，$y = \\frac{2}{3}t^3$ 在 $0 \\le t \\le \\sqrt{3}$ 上的弧长。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $\\frac{dx}{dt} = 2t$ and $\\frac{dy}{dt} = 2t^2$, so the integrand becomes",
                  "zh": "这里 $\\frac{dx}{dt} = 2t$，$\\frac{dy}{dt} = 2t^2$，于是被积函数化为"
                },
                {
                  "type": "math",
                  "tex": "\\sqrt{4t^2 + 4t^4} = 2t\\sqrt{1 + t^2} \\quad (t \\ge 0)"
                },
                {
                  "type": "p",
                  "en": "Substitute $u = 1 + t^2$, $du = 2t\\,dt$:",
                  "zh": "代换 $u = 1 + t^2$，$du = 2t\\,dt$："
                },
                {
                  "type": "math",
                  "tex": "L = \\int_0^{\\sqrt{3}} 2t\\sqrt{1+t^2}\\,dt = \\left[ \\frac{2}{3}(1+t^2)^{3/2} \\right]_0^{\\sqrt{3}} = \\frac{2}{3}(8 - 1) = \\frac{14}{3}"
                },
                {
                  "type": "p",
                  "en": "Pulling $t$ out of the square root required $t \\ge 0$ on the interval — always check this before simplifying $\\sqrt{t^2} = t$.",
                  "zh": "把 $t$ 提出根号需要区间上 $t \\ge 0$——在把 $\\sqrt{t^2}$ 化简为 $t$ 之前一定要检查这一点。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A curve is given by $x = t^2 + 1$, $y = t^3$. What is $\\frac{dy}{dx}$ at $t = 2$?",
                "zh": "曲线由 $x = t^2 + 1$，$y = t^3$ 给出。当 $t = 2$ 时 $\\frac{dy}{dx}$ 等于多少？"
              },
              "choices": [
                "$12$",
                "$3$",
                "$\\frac{4}{3}$",
                "$6$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t}$. At $t = 2$: $\\frac{12}{4} = 3$. Choice A is just $\\frac{dy}{dt}$ alone — forgetting to divide by $\\frac{dx}{dt}$ is the classic trap.",
                "zh": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t}$。当 $t = 2$ 时为 $\\frac{12}{4} = 3$。选项 A 只是 $\\frac{dy}{dt}$ 本身——忘记除以 $\\frac{dx}{dt}$ 是最经典的陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The curve $x = t^2$, $y = t^2 - 4t$ has exactly one point with a horizontal tangent. Find the $y$-coordinate of that point. Give an integer.",
                "zh": "曲线 $x = t^2$，$y = t^2 - 4t$ 恰有一个具有水平切线的点。求该点的 $y$ 坐标。请填一个整数。"
              },
              "answer": "-4",
              "accept": [
                "-4.0"
              ],
              "explanation": {
                "en": "Horizontal tangent: $\\frac{dy}{dt} = 2t - 4 = 0$ gives $t = 2$, and there $\\frac{dx}{dt} = 4 \\neq 0$, so the test applies. The point is $(4, 4 - 8) = (4, -4)$, so $y = -4$.",
                "zh": "水平切线：$\\frac{dy}{dt} = 2t - 4 = 0$ 得 $t = 2$，此时 $\\frac{dx}{dt} = 4 \\neq 0$，判别法适用。对应点为 $(4, 4 - 8) = (4, -4)$，故 $y = -4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a parametric curve $x = x(t)$, $y = y(t)$, which expression equals $\\frac{d^2y}{dx^2}$?",
                "zh": "对参数曲线 $x = x(t)$，$y = y(t)$，下列哪个表达式等于 $\\frac{d^2y}{dx^2}$？"
              },
              "choices": [
                "$\\dfrac{d^2y/dt^2}{d^2x/dt^2}$",
                "$\\dfrac{d}{dt}\\left( \\dfrac{dy}{dx} \\right)$",
                "$\\dfrac{\\frac{d}{dt}\\left( \\frac{dy}{dx} \\right)}{dx/dt}$",
                "$\\dfrac{d^2y/dt^2}{dx/dt}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Differentiating $\\frac{dy}{dx}$ (a function of $t$) with respect to $x$ requires the chain rule: differentiate with respect to $t$, then divide by $\\frac{dx}{dt}$. Choice A — the ratio of second $t$-derivatives — is the tempting but incorrect formula the AP exam loves to offer.",
                "zh": "把 $\\frac{dy}{dx}$（$t$ 的函数）对 $x$ 求导需要链式法则：先对 $t$ 求导，再除以 $\\frac{dx}{dt}$。选项 A——两个二阶 $t$ 导数之比——正是 AP 考试最爱设置的错误公式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the curve $x = t^2$, $y = t^3$ (with $t > 0$), what is $\\frac{d^2y}{dx^2}$ at $t = 1$?",
                "zh": "对曲线 $x = t^2$，$y = t^3$（$t > 0$），当 $t = 1$ 时 $\\frac{d^2y}{dx^2}$ 等于多少？"
              },
              "choices": [
                "$\\frac{3}{2}$",
                "$3$",
                "$6$",
                "$\\frac{3}{4}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "First $\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$. Then $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(3t/2)}{dx/dt} = \\frac{3/2}{2t} = \\frac{3}{4t}$, which is $\\frac{3}{4}$ at $t = 1$. Choice A stops after differentiating with respect to $t$ without dividing by $\\frac{dx}{dt}$.",
                "zh": "先求 $\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$。再求 $\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(3t/2)}{dx/dt} = \\frac{3/2}{2t} = \\frac{3}{4t}$，在 $t = 1$ 处等于 $\\frac{3}{4}$。选项 A 是对 $t$ 求导后忘记再除以 $\\frac{dx}{dt}$ 的结果。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The curve $x = t^3 - 3t$, $y = t^2$ has vertical tangent lines at which values of $t$?",
                "zh": "曲线 $x = t^3 - 3t$，$y = t^2$ 在哪些 $t$ 值处有竖直切线？"
              },
              "choices": [
                "$t = \\pm 1$",
                "$t = 0$ only",
                "$t = \\pm\\sqrt{3}$",
                "$t = 3$ only"
              ],
              "answer": 0,
              "explanation": {
                "en": "Vertical tangents need $\\frac{dx}{dt} = 3t^2 - 3 = 0$, so $t = \\pm 1$; at both, $\\frac{dy}{dt} = 2t \\neq 0$, confirming vertical tangents. Choice C solves $x = 0$ instead of $\\frac{dx}{dt} = 0$ — a tempting mix-up between the curve and its derivative.",
                "zh": "竖直切线需要 $\\frac{dx}{dt} = 3t^2 - 3 = 0$，即 $t = \\pm 1$；此时 $\\frac{dy}{dt} = 2t \\neq 0$，确认是竖直切线。选项 C 解的是 $x = 0$ 而不是 $\\frac{dx}{dt} = 0$——把曲线本身和它的导数弄混是常见错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the length of the curve $x = t^2$, $y = \\frac{2}{3}t^3$ from $t = 0$ to $t = \\sqrt{3}$. Give your answer as a fraction a/b.",
                "zh": "求曲线 $x = t^2$，$y = \\frac{2}{3}t^3$ 从 $t = 0$ 到 $t = \\sqrt{3}$ 的弧长。答案写成分数 a/b 的形式。"
              },
              "answer": "14/3",
              "accept": [
                "4.667",
                "4.6667",
                "4.666"
              ],
              "explanation": {
                "en": "$L = \\int_0^{\\sqrt{3}} \\sqrt{4t^2 + 4t^4}\\,dt = \\int_0^{\\sqrt{3}} 2t\\sqrt{1+t^2}\\,dt = \\left[\\frac{2}{3}(1+t^2)^{3/2}\\right]_0^{\\sqrt{3}} = \\frac{2}{3}(8-1) = \\frac{14}{3}$.",
                "zh": "$L = \\int_0^{\\sqrt{3}} \\sqrt{4t^2 + 4t^4}\\,dt = \\int_0^{\\sqrt{3}} 2t\\sqrt{1+t^2}\\,dt = \\left[\\frac{2}{3}(1+t^2)^{3/2}\\right]_0^{\\sqrt{3}} = \\frac{2}{3}(8-1) = \\frac{14}{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which integral gives the length of the curve $x = t$, $y = t^2$ for $0 \\le t \\le 2$?",
                "zh": "下列哪个积分给出曲线 $x = t$，$y = t^2$ 在 $0 \\le t \\le 2$ 上的弧长？"
              },
              "choices": [
                "$\\int_0^2 \\sqrt{1 + t^4}\\,dt$",
                "$\\int_0^2 (1 + 2t)\\,dt$",
                "$\\int_0^2 \\sqrt{1 + 4t^2}\\,dt$",
                "$\\int_0^2 \\sqrt{t^2 + t^4}\\,dt$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Arc length uses the derivatives, not the functions: $\\sqrt{(dx/dt)^2 + (dy/dt)^2} = \\sqrt{1^2 + (2t)^2} = \\sqrt{1 + 4t^2}$. Choice A squares $y = t^2$ itself instead of its derivative $2t$; choice D uses $x$ and $y$ rather than their derivatives.",
                "zh": "弧长公式用的是导数而不是原函数：$\\sqrt{(dx/dt)^2 + (dy/dt)^2} = \\sqrt{1^2 + (2t)^2} = \\sqrt{1 + 4t^2}$。选项 A 平方的是 $y = t^2$ 本身而不是它的导数 $2t$；选项 D 用的是 $x$、$y$ 而不是它们的导数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle traces the circle $x = 2\\cos t$, $y = 2\\sin t$. Find the slope of the tangent line at $t = \\frac{\\pi}{4}$. Give an integer.",
                "zh": "质点沿圆 $x = 2\\cos t$，$y = 2\\sin t$ 运动。求 $t = \\frac{\\pi}{4}$ 处切线的斜率。请填一个整数。"
              },
              "answer": "-1",
              "accept": [
                "-1.0"
              ],
              "explanation": {
                "en": "$\\frac{dy}{dx} = \\frac{2\\cos t}{-2\\sin t} = -\\cot t$. At $t = \\pi/4$, $\\cot(\\pi/4) = 1$, so the slope is $-1$. This matches geometry: at the point $(\\sqrt{2}, \\sqrt{2})$ the tangent to the circle is perpendicular to the radius of slope $1$.",
                "zh": "$\\frac{dy}{dx} = \\frac{2\\cos t}{-2\\sin t} = -\\cot t$。当 $t = \\pi/4$ 时 $\\cot(\\pi/4) = 1$，故斜率为 $-1$。这与几何一致：在点 $(\\sqrt{2}, \\sqrt{2})$ 处，圆的切线垂直于斜率为 $1$ 的半径。"
              }
            }
          ]
        },
        {
          "id": "vector-valued-motion",
          "title": "Vector-Valued Functions and Planar Motion",
          "titleZh": "向量值函数与平面运动",
          "content": [
            {
              "type": "h2",
              "en": "Motion in the Plane",
              "zh": "平面内的运动"
            },
            {
              "type": "p",
              "en": "A vector-valued function $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ describes a particle moving in the plane: at each time $t$, the vector points from the origin to the particle. Every BC exam contains a free-response question on this topic, and the entire question runs on two ideas: differentiate componentwise to move from position to velocity to acceleration, and integrate componentwise to go back.",
              "zh": "向量值函数 $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ 描述平面内运动的质点：在每个时刻 $t$，该向量从原点指向质点所在位置。每年 BC 考试都有一道这个主题的解答题，而整道题只依赖两个思想：逐分量求导实现从位置到速度再到加速度，逐分量积分则反向返回。"
            },
            {
              "type": "h3",
              "en": "Derivatives and Integrals, Componentwise",
              "zh": "逐分量的求导与积分"
            },
            {
              "type": "math",
              "tex": "\\vec{r}\\,'(t) = \\langle x'(t),\\, y'(t) \\rangle, \\qquad \\int \\vec{r}(t)\\,dt = \\left\\langle \\int x(t)\\,dt,\\, \\int y(t)\\,dt \\right\\rangle"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Position: $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$",
                  "zh": "位置：$\\vec{r}(t) = \\langle x(t), y(t) \\rangle$"
                },
                {
                  "en": "Velocity: $\\vec{v}(t) = \\vec{r}\\,'(t) = \\langle x'(t), y'(t) \\rangle$ — tangent to the path, pointing in the direction of motion.",
                  "zh": "速度：$\\vec{v}(t) = \\vec{r}\\,'(t) = \\langle x'(t), y'(t) \\rangle$——与路径相切，指向运动方向。"
                },
                {
                  "en": "Acceleration: $\\vec{a}(t) = \\vec{v}\\,'(t) = \\langle x''(t), y''(t) \\rangle$",
                  "zh": "加速度：$\\vec{a}(t) = \\vec{v}\\,'(t) = \\langle x''(t), y''(t) \\rangle$"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Speed and Total Distance",
              "zh": "速率与总路程"
            },
            {
              "type": "p",
              "en": "Speed is the magnitude of the velocity vector — a scalar, never negative. Total distance traveled is the integral of speed, which is exactly the parametric arc length of the path:",
              "zh": "速率是速度向量的模——一个标量，永远非负。总路程是速率的积分，恰好就是路径的参数弧长："
            },
            {
              "type": "math",
              "tex": "\\text{speed} = |\\vec{v}(t)| = \\sqrt{\\left( x'(t) \\right)^2 + \\left( y'(t) \\right)^2}, \\qquad \\text{distance} = \\int_a^b |\\vec{v}(t)|\\,dt"
            },
            {
              "type": "p",
              "en": "Do not confuse total distance with displacement $\\vec{r}(b) - \\vec{r}(a)$: a particle that loops back has large distance but small displacement.",
              "zh": "不要把总路程与位移 $\\vec{r}(b) - \\vec{r}(a)$ 混淆：折返运动的质点路程很大，位移却可能很小。"
            },
            {
              "type": "h3",
              "en": "Recovering Position from Velocity",
              "zh": "由速度求位置"
            },
            {
              "type": "p",
              "en": "The guaranteed FRQ pattern: you are given $\\vec{v}(t)$ (often ugly, calculator-active) and an initial position, and asked for the position at a later time. Use the Fundamental Theorem of Calculus on each component:",
              "zh": "每年必考的解答题模式：给出 $\\vec{v}(t)$（往往形式复杂、允许用计算器）和初始位置，要求某一时刻的位置。对每个分量使用微积分基本定理："
            },
            {
              "type": "math",
              "tex": "x(b) = x(a) + \\int_a^b x'(t)\\,dt, \\qquad y(b) = y(a) + \\int_a^b y'(t)\\,dt"
            },
            {
              "type": "note",
              "en": "AP exam tip: velocity is a vector; speed is a number. If an FRQ asks \"find the speed at $t = 2$\" and you answer with a vector, you lose the point. And to decide whether speed is increasing, do not look at the sign of one component of acceleration — compute $\\frac{d}{dt}|\\vec{v}(t)|$ (on the calculator) and check its sign.",
              "zh": "AP 考试提示：速度是向量，速率是数。如果解答题问\"求 $t = 2$ 时的速率\"而你答了一个向量，这一分就丢了。判断速率是否在增大时，不要只看加速度某个分量的符号——应（用计算器）计算 $\\frac{d}{dt}|\\vec{v}(t)|$ 并检查其符号。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Velocity, Acceleration, and Speed",
                "zh": "例题 1：速度、加速度与速率"
              },
              "problem": {
                "en": "A particle has position $\\vec{r}(t) = \\langle t^3 - 3t,\\ 2t^2 \\rangle$. Find its velocity and acceleration vectors, and its speed at $t = 1$.",
                "zh": "质点的位置为 $\\vec{r}(t) = \\langle t^3 - 3t,\\ 2t^2 \\rangle$。求它的速度向量、加速度向量，以及 $t = 1$ 时的速率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Differentiate each component:",
                  "zh": "对每个分量分别求导："
                },
                {
                  "type": "math",
                  "tex": "\\vec{v}(t) = \\langle 3t^2 - 3,\\ 4t \\rangle, \\qquad \\vec{a}(t) = \\langle 6t,\\ 4 \\rangle"
                },
                {
                  "type": "p",
                  "en": "At $t = 1$: $\\vec{v}(1) = \\langle 0, 4 \\rangle$, so the speed is $|\\vec{v}(1)| = \\sqrt{0^2 + 4^2} = 4$. Note that even though the $x$-component of velocity is momentarily zero, the particle is still moving — straight upward at 4 units per second.",
                  "zh": "当 $t = 1$ 时：$\\vec{v}(1) = \\langle 0, 4 \\rangle$，故速率为 $|\\vec{v}(1)| = \\sqrt{0^2 + 4^2} = 4$。注意虽然速度的 $x$ 分量此刻为零，质点仍在运动——以每秒 4 个单位竖直向上。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Position from Velocity (the FRQ Pattern)",
                "zh": "例题 2：由速度求位置（解答题模式）"
              },
              "problem": {
                "en": "A particle moves with velocity $\\vec{v}(t) = \\langle 2t,\\ 3t^2 \\rangle$ and its position at $t = 0$ is $(1, -2)$. Find its position at $t = 2$.",
                "zh": "质点以速度 $\\vec{v}(t) = \\langle 2t,\\ 3t^2 \\rangle$ 运动，且 $t = 0$ 时位于 $(1, -2)$。求 $t = 2$ 时质点的位置。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the Fundamental Theorem componentwise:",
                  "zh": "对每个分量应用微积分基本定理："
                },
                {
                  "type": "math",
                  "tex": "x(2) = 1 + \\int_0^2 2t\\,dt = 1 + 4 = 5, \\qquad y(2) = -2 + \\int_0^2 3t^2\\,dt = -2 + 8 = 6"
                },
                {
                  "type": "p",
                  "en": "The particle is at $(5, 6)$. On a calculator-active FRQ, write this exact setup — initial value plus definite integral — before evaluating; the setup itself earns points even if the arithmetic slips.",
                  "zh": "质点位于 $(5, 6)$。在允许计算器的解答题中，先写出这个标准式——初始值加定积分——再计算数值；即使算错，列式本身也能得分。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A particle has position $\\vec{r}(t) = \\langle t^2 - t,\\ t^3 \\rangle$. What is its velocity vector at $t = 1$?",
                "zh": "质点位置为 $\\vec{r}(t) = \\langle t^2 - t,\\ t^3 \\rangle$。它在 $t = 1$ 时的速度向量是什么？"
              },
              "choices": [
                "$\\langle 0, 1 \\rangle$",
                "$\\langle 2, 6 \\rangle$",
                "$\\langle 1, 3 \\rangle$",
                "$\\langle 3, 1 \\rangle$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Differentiate componentwise: $\\vec{v}(t) = \\langle 2t - 1, 3t^2 \\rangle$, so $\\vec{v}(1) = \\langle 1, 3 \\rangle$. Choice A evaluates the position components at $t = 1$ instead of the velocity; choice B is the acceleration $\\langle 2, 6t \\rangle$ at $t = 1$.",
                "zh": "逐分量求导：$\\vec{v}(t) = \\langle 2t - 1, 3t^2 \\rangle$，故 $\\vec{v}(1) = \\langle 1, 3 \\rangle$。选项 A 是把位置分量代入 $t = 1$ 而不是速度；选项 B 是加速度 $\\langle 2, 6t \\rangle$ 在 $t = 1$ 的值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle moves so that $x'(t) = t^2$ and $y'(t) = 2t$. What is its speed at $t = 2$?",
                "zh": "质点运动满足 $x'(t) = t^2$，$y'(t) = 2t$。它在 $t = 2$ 时的速率是多少？"
              },
              "choices": [
                "$8$",
                "$2\\sqrt{5}$",
                "$4\\sqrt{2}$",
                "$4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "At $t = 2$, $\\vec{v}(2) = \\langle 4, 4 \\rangle$, so speed $= \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$. Choice A adds the components ($4 + 4$) instead of using the Pythagorean magnitude — a very common slip.",
                "zh": "当 $t = 2$ 时 $\\vec{v}(2) = \\langle 4, 4 \\rangle$，速率 $= \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$。选项 A 是把两个分量直接相加（$4 + 4$）而不是用勾股定理求模——这是非常常见的失误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle moves with $x'(t) = 6t^2$ and $x(0) = 1$. Find $x(2)$. Give an integer.",
                "zh": "质点运动满足 $x'(t) = 6t^2$，且 $x(0) = 1$。求 $x(2)$。请填一个整数。"
              },
              "answer": "17",
              "accept": [
                "17.0",
                "+17"
              ],
              "explanation": {
                "en": "$x(2) = x(0) + \\int_0^2 6t^2\\,dt = 1 + \\left[ 2t^3 \\right]_0^2 = 1 + 16 = 17$. Forgetting to add the initial condition $x(0) = 1$ gives 16 — the most common FRQ point lost on this pattern.",
                "zh": "$x(2) = x(0) + \\int_0^2 6t^2\\,dt = 1 + \\left[ 2t^3 \\right]_0^2 = 1 + 16 = 17$。忘记加上初始条件 $x(0) = 1$ 会得到 16——这是此类解答题最常丢的分。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle has velocity $\\vec{v}(t) = \\langle x'(t), y'(t) \\rangle$ for $a \\le t \\le b$. Which expression gives the total distance traveled?",
                "zh": "质点在 $a \\le t \\le b$ 上的速度为 $\\vec{v}(t) = \\langle x'(t), y'(t) \\rangle$。下列哪个表达式给出总路程？"
              },
              "choices": [
                "$\\left| \\int_a^b \\vec{v}(t)\\,dt \\right|$",
                "$\\int_a^b \\sqrt{\\left(x'(t)\\right)^2 + \\left(y'(t)\\right)^2}\\,dt$",
                "$\\int_a^b \\left( x'(t) + y'(t) \\right) dt$",
                "$\\sqrt{\\left( \\int_a^b x'(t)\\,dt \\right)^2 + \\left( \\int_a^b y'(t)\\,dt \\right)^2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Total distance is the integral of speed, $\\int_a^b |\\vec{v}(t)|\\,dt$. Choices A and D both compute the magnitude of the displacement — the straight-line distance between start and end — which understates the distance whenever the path bends or backtracks.",
                "zh": "总路程是速率的积分 $\\int_a^b |\\vec{v}(t)|\\,dt$。选项 A 和 D 计算的都是位移的模——起点到终点的直线距离——只要路径弯曲或折返，它就会小于总路程。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A particle has position $\\vec{r}(t) = \\langle e^{2t},\\ \\sin t \\rangle$. What is its acceleration vector?",
                "zh": "质点位置为 $\\vec{r}(t) = \\langle e^{2t},\\ \\sin t \\rangle$。它的加速度向量是什么？"
              },
              "choices": [
                "$\\langle 2e^{2t},\\ \\cos t \\rangle$",
                "$\\langle 4e^{2t},\\ \\sin t \\rangle$",
                "$\\langle e^{2t},\\ -\\sin t \\rangle$",
                "$\\langle 4e^{2t},\\ -\\sin t \\rangle$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Differentiate twice: $\\vec{v}(t) = \\langle 2e^{2t}, \\cos t \\rangle$ and $\\vec{a}(t) = \\langle 4e^{2t}, -\\sin t \\rangle$. Choice A is the velocity, not the acceleration; choice B drops the negative sign from the second derivative of $\\sin t$.",
                "zh": "求两次导：$\\vec{v}(t) = \\langle 2e^{2t}, \\cos t \\rangle$，$\\vec{a}(t) = \\langle 4e^{2t}, -\\sin t \\rangle$。选项 A 是速度而不是加速度；选项 B 丢掉了 $\\sin t$ 二阶导数的负号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle has velocity $\\vec{v}(t) = \\langle 3t^2,\\ 4t^2 \\rangle$. Find the total distance it travels from $t = 0$ to $t = 2$. Give your answer as a fraction a/b.",
                "zh": "质点速度为 $\\vec{v}(t) = \\langle 3t^2,\\ 4t^2 \\rangle$。求它从 $t = 0$ 到 $t = 2$ 经过的总路程。答案写成分数 a/b 的形式。"
              },
              "answer": "40/3",
              "accept": [
                "13.333",
                "13.33"
              ],
              "explanation": {
                "en": "Speed $= \\sqrt{9t^4 + 16t^4} = \\sqrt{25t^4} = 5t^2$. Distance $= \\int_0^2 5t^2\\,dt = \\frac{5t^3}{3}\\Big|_0^2 = \\frac{40}{3}$. The 3-4-5 pattern under the square root is a favorite AP setup for clean no-calculator answers.",
                "zh": "速率 $= \\sqrt{9t^4 + 16t^4} = \\sqrt{25t^4} = 5t^2$。路程 $= \\int_0^2 5t^2\\,dt = \\frac{5t^3}{3}\\Big|_0^2 = \\frac{40}{3}$。根号下的 3-4-5 结构是 AP 不允许计算器题目中常见的\"凑整\"设计。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The $y$-coordinate of a particle satisfies $y'(t) = 2t + 1$ and $y(1) = 5$. What is $y(3)$?",
                "zh": "质点的 $y$ 坐标满足 $y'(t) = 2t + 1$，且 $y(1) = 5$。求 $y(3)$。"
              },
              "choices": [
                "$10$",
                "$15$",
                "$12$",
                "$17$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$y(3) = y(1) + \\int_1^3 (2t+1)\\,dt = 5 + \\left[ t^2 + t \\right]_1^3 = 5 + (12 - 2) = 15$. Choice A is the value of the integral alone — forgetting to add the initial condition $y(1) = 5$.",
                "zh": "$y(3) = y(1) + \\int_1^3 (2t+1)\\,dt = 5 + \\left[ t^2 + t \\right]_1^3 = 5 + (12 - 2) = 15$。选项 A 只是积分本身的值——忘了加上初始条件 $y(1) = 5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A particle moves with velocity $\\vec{v}(t) = \\langle 3t,\\ 4 \\rangle$. Find its speed at $t = 1$. Give an integer.",
                "zh": "质点以速度 $\\vec{v}(t) = \\langle 3t,\\ 4 \\rangle$ 运动。求它在 $t = 1$ 时的速率。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "At $t = 1$, $\\vec{v}(1) = \\langle 3, 4 \\rangle$, so speed $= \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. Remember speed is a single nonnegative number, not a vector — writing $\\langle 3, 4 \\rangle$ as \"the speed\" would lose the point on an FRQ.",
                "zh": "当 $t = 1$ 时 $\\vec{v}(1) = \\langle 3, 4 \\rangle$，速率 $= \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$。记住速率是一个非负的数而不是向量——在解答题中把 $\\langle 3, 4 \\rangle$ 写成\"速率\"会丢分。"
              }
            }
          ]
        },
        {
          "id": "polar-calculus",
          "title": "Calculus in Polar Coordinates",
          "titleZh": "极坐标中的微积分",
          "content": [
            {
              "type": "h2",
              "en": "A New Coordinate System",
              "zh": "一种新的坐标系"
            },
            {
              "type": "p",
              "en": "Polar coordinates locate a point by its distance $r$ from the origin (the pole) and the angle $\\theta$ measured from the positive $x$-axis. Curves like circles, cardioids, and rose curves have simple polar equations $r = f(\\theta)$ but complicated rectangular ones. The BC exam tests conversion between systems, slopes of polar curves, and — most heavily — area.",
              "zh": "极坐标用点到原点（极点）的距离 $r$ 和从 $x$ 轴正方向量起的角 $\\theta$ 来定位一个点。圆、心形线、玫瑰线等曲线的极坐标方程 $r = f(\\theta)$ 很简单，而直角坐标方程却很复杂。BC 考试考查坐标系之间的转换、极坐标曲线的斜率，以及考得最多的——面积。"
            },
            {
              "type": "h3",
              "en": "Converting Between Polar and Rectangular",
              "zh": "极坐标与直角坐标的转换"
            },
            {
              "type": "math",
              "tex": "x = r\\cos\\theta, \\qquad y = r\\sin\\theta, \\qquad r^2 = x^2 + y^2, \\qquad \\tan\\theta = \\frac{y}{x}"
            },
            {
              "type": "p",
              "en": "To convert an equation, substitute strategically: multiplying both sides of $r = 6\\sin\\theta$ by $r$ gives $r^2 = 6r\\sin\\theta$, i.e. $x^2 + y^2 = 6y$ — a circle. This \"multiply by $r$\" trick handles most conversions on the exam.",
              "zh": "转换方程时要有策略地代换：把 $r = 6\\sin\\theta$ 两边同乘 $r$ 得 $r^2 = 6r\\sin\\theta$，即 $x^2 + y^2 = 6y$——一个圆。这个\"两边乘 $r$\"的技巧能解决考试中的大多数转换问题。"
            },
            {
              "type": "h3",
              "en": "Slope of a Polar Curve",
              "zh": "极坐标曲线的斜率"
            },
            {
              "type": "p",
              "en": "A polar curve is secretly parametric with parameter $\\theta$: $x = r(\\theta)\\cos\\theta$ and $y = r(\\theta)\\sin\\theta$. So the slope is the usual parametric ratio (each derivative needs the product rule):",
              "zh": "极坐标曲线本质上是以 $\\theta$ 为参数的参数曲线：$x = r(\\theta)\\cos\\theta$，$y = r(\\theta)\\sin\\theta$。因此斜率就是通常的参数比（每个导数都要用乘积法则）："
            },
            {
              "type": "math",
              "tex": "\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{\\dfrac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\dfrac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}"
            },
            {
              "type": "p",
              "en": "Note that $\\frac{dr}{d\\theta}$ by itself is not the slope — it measures how fast the curve moves toward or away from the pole.",
              "zh": "注意 $\\frac{dr}{d\\theta}$ 本身并不是斜率——它度量的是曲线靠近或远离极点的快慢。"
            },
            {
              "type": "h3",
              "en": "Area in Polar Coordinates",
              "zh": "极坐标中的面积"
            },
            {
              "type": "p",
              "en": "Polar area is built from thin circular sectors of area $\\frac{1}{2}r^2\\,d\\theta$, not rectangles. The region swept out by $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$ has area",
              "zh": "极坐标面积由面积为 $\\frac{1}{2}r^2\\,d\\theta$ 的细扇形累加而成，而不是矩形。曲线 $r = f(\\theta)$ 在 $\\theta = \\alpha$ 到 $\\theta = \\beta$ 之间扫过的区域面积为"
            },
            {
              "type": "math",
              "tex": "A = \\frac{1}{2} \\int_{\\alpha}^{\\beta} r^2 \\, d\\theta, \\qquad A_{\\text{between}} = \\frac{1}{2} \\int_{\\alpha}^{\\beta} \\left( R^2 - r^2 \\right) d\\theta"
            },
            {
              "type": "p",
              "en": "For the region between an outer curve $R$ and an inner curve $r$, find the limits $\\alpha, \\beta$ by solving $R(\\theta) = r(\\theta)$ — the intersection points. On the calculator section, solve this equation numerically and store the values.",
              "zh": "求外层曲线 $R$ 与内层曲线 $r$ 之间的区域面积时，通过解方程 $R(\\theta) = r(\\theta)$ 求出积分上下限 $\\alpha, \\beta$——即交点。在计算器部分，可用数值方法解此方程并存储结果。"
            },
            {
              "type": "h3",
              "en": "Curves You Should Recognize",
              "zh": "你应当认识的曲线"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Circles: $r = a$ (centered at the pole); $r = 2a\\cos\\theta$ and $r = 2a\\sin\\theta$ (radius $a$, passing through the pole).",
                  "zh": "圆：$r = a$（以极点为圆心）；$r = 2a\\cos\\theta$ 与 $r = 2a\\sin\\theta$（半径为 $a$，经过极点）。"
                },
                {
                  "en": "Cardioids: $r = a(1 \\pm \\cos\\theta)$ or $r = a(1 \\pm \\sin\\theta)$ — heart-shaped, one cusp at the pole.",
                  "zh": "心形线：$r = a(1 \\pm \\cos\\theta)$ 或 $r = a(1 \\pm \\sin\\theta)$——心形，在极点处有一个尖点。"
                },
                {
                  "en": "Rose curves: $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$ — $n$ petals when $n$ is odd, $2n$ petals when $n$ is even.",
                  "zh": "玫瑰线：$r = a\\cos(n\\theta)$ 或 $r = a\\sin(n\\theta)$——$n$ 为奇数时有 $n$ 片花瓣，$n$ 为偶数时有 $2n$ 片花瓣。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: two classic point-losers. First, forgetting the $\\frac{1}{2}$ in the area formula. Second, using the wrong $\\theta$-interval: $r = 2\\cos\\theta$ traces its full circle on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, so integrating over $[0, 2\\pi]$ counts the region twice. Always ask: over what interval is the curve traced exactly once?",
              "zh": "AP 考试提示：两个经典丢分点。第一，忘记面积公式里的 $\\frac{1}{2}$。第二，用错 $\\theta$ 区间：$r = 2\\cos\\theta$ 在 $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ 上就描完整个圆，若在 $[0, 2\\pi]$ 上积分会把区域算两遍。一定要问自己：曲线在哪个区间上恰好被描过一次？"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Area Inside a Cardioid",
                "zh": "例题 1：心形线内部的面积"
              },
              "problem": {
                "en": "Find the area of the region enclosed by the cardioid $r = 2 + 2\\cos\\theta$.",
                "zh": "求心形线 $r = 2 + 2\\cos\\theta$ 所围区域的面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The cardioid is traced once as $\\theta$ runs from $0$ to $2\\pi$. Expand $r^2$ and use $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$:",
                  "zh": "当 $\\theta$ 从 $0$ 变到 $2\\pi$ 时心形线恰好被描一次。展开 $r^2$ 并使用 $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$："
                },
                {
                  "type": "math",
                  "tex": "A = \\frac{1}{2}\\int_0^{2\\pi} (2 + 2\\cos\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi} \\left( 4 + 8\\cos\\theta + 4\\cos^2\\theta \\right) d\\theta"
                },
                {
                  "type": "p",
                  "en": "Over a full period, $\\int_0^{2\\pi}\\cos\\theta\\,d\\theta = 0$ and $\\int_0^{2\\pi}\\cos^2\\theta\\,d\\theta = \\pi$. So $A = \\frac{1}{2}\\left( 8\\pi + 0 + 4\\pi \\right) = 6\\pi$.",
                  "zh": "在一个完整周期上，$\\int_0^{2\\pi}\\cos\\theta\\,d\\theta = 0$，$\\int_0^{2\\pi}\\cos^2\\theta\\,d\\theta = \\pi$。所以 $A = \\frac{1}{2}\\left( 8\\pi + 0 + 4\\pi \\right) = 6\\pi$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Area Between Two Polar Curves",
                "zh": "例题 2：两条极坐标曲线之间的面积"
              },
              "problem": {
                "en": "Find the area of the region inside the circle $r = 3\\sin\\theta$ and outside the cardioid $r = 1 + \\sin\\theta$.",
                "zh": "求在圆 $r = 3\\sin\\theta$ 内部且在心形线 $r = 1 + \\sin\\theta$ 外部的区域面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Intersections: $3\\sin\\theta = 1 + \\sin\\theta$ gives $\\sin\\theta = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{6}$ and $\\theta = \\frac{5\\pi}{6}$. Between these angles the circle is the outer curve.",
                  "zh": "求交点：$3\\sin\\theta = 1 + \\sin\\theta$ 得 $\\sin\\theta = \\frac{1}{2}$，即 $\\theta = \\frac{\\pi}{6}$ 与 $\\theta = \\frac{5\\pi}{6}$。在这两个角之间，圆是外层曲线。"
                },
                {
                  "type": "math",
                  "tex": "A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} \\left[ 9\\sin^2\\theta - (1 + \\sin\\theta)^2 \\right] d\\theta = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6} \\left( 3 - 4\\cos 2\\theta - 2\\sin\\theta \\right) d\\theta"
                },
                {
                  "type": "p",
                  "en": "The antiderivative is $3\\theta - 2\\sin 2\\theta + 2\\cos\\theta$. Evaluating from $\\frac{\\pi}{6}$ to $\\frac{5\\pi}{6}$ gives $\\frac{5\\pi}{2} - \\frac{\\pi}{2} = 2\\pi$ (the $\\sqrt{3}$ terms cancel), so $A = \\frac{1}{2}(2\\pi) = \\pi$.",
                  "zh": "原函数为 $3\\theta - 2\\sin 2\\theta + 2\\cos\\theta$。从 $\\frac{\\pi}{6}$ 代到 $\\frac{5\\pi}{6}$ 得 $\\frac{5\\pi}{2} - \\frac{\\pi}{2} = 2\\pi$（含 $\\sqrt{3}$ 的项相互抵消），所以 $A = \\frac{1}{2}(2\\pi) = \\pi$。"
                },
                {
                  "type": "p",
                  "en": "Key structure: one integral of \"outer squared minus inner squared,\" with limits found by setting the curves equal — the standard AP setup.",
                  "zh": "关键结构：一个\"外层平方减内层平方\"的积分，上下限由令两曲线相等求得——这是 AP 的标准解题框架。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The polar point $\\left( r, \\theta \\right) = \\left( 4, \\frac{\\pi}{3} \\right)$ has which rectangular coordinates?",
                "zh": "极坐标点 $\\left( r, \\theta \\right) = \\left( 4, \\frac{\\pi}{3} \\right)$ 的直角坐标是什么？"
              },
              "choices": [
                "$(2\\sqrt{3},\\ 2)$",
                "$(2,\\ 2\\sqrt{3})$",
                "$(4,\\ \\frac{\\pi}{3})$",
                "$(\\sqrt{3},\\ 1)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$x = r\\cos\\theta = 4\\cos\\frac{\\pi}{3} = 4 \\cdot \\frac{1}{2} = 2$ and $y = r\\sin\\theta = 4\\sin\\frac{\\pi}{3} = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$. Choice A swaps sine and cosine — the most tempting error when converting quickly.",
                "zh": "$x = r\\cos\\theta = 4\\cos\\frac{\\pi}{3} = 4 \\cdot \\frac{1}{2} = 2$，$y = r\\sin\\theta = 4\\sin\\frac{\\pi}{3} = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$。选项 A 把正弦和余弦对调了——匆忙转换时最容易犯的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the area of the region enclosed by $r = 2\\cos\\theta$?",
                "zh": "曲线 $r = 2\\cos\\theta$ 所围区域的面积是多少？"
              },
              "choices": [
                "$2\\pi$",
                "$4\\pi$",
                "$\\pi$",
                "$\\frac{\\pi}{2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$r = 2\\cos\\theta$ is a circle of radius 1, traced once for $-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$, so its area is $\\pi(1)^2 = \\pi$. (Check: $\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} 4\\cos^2\\theta\\,d\\theta = \\pi$.) Choice A comes from integrating over $[0, 2\\pi]$, which traces the circle twice and doubles the area.",
                "zh": "$r = 2\\cos\\theta$ 是半径为 1 的圆，当 $-\\frac{\\pi}{2} \\le \\theta \\le \\frac{\\pi}{2}$ 时恰好描一次，面积为 $\\pi(1)^2 = \\pi$。（验证：$\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} 4\\cos^2\\theta\\,d\\theta = \\pi$。）选项 A 是在 $[0, 2\\pi]$ 上积分的结果——圆被描了两次，面积翻倍。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The area of one petal of the rose curve $r = 4\\sin(2\\theta)$ equals $k\\pi$. Find $k$. Give an integer.",
                "zh": "玫瑰线 $r = 4\\sin(2\\theta)$ 一片花瓣的面积等于 $k\\pi$。求 $k$。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "+2"
              ],
              "explanation": {
                "en": "One petal is traced for $0 \\le \\theta \\le \\frac{\\pi}{2}$ (where $\\sin 2\\theta \\ge 0$). $A = \\frac{1}{2}\\int_0^{\\pi/2} 16\\sin^2(2\\theta)\\,d\\theta = 8 \\cdot \\frac{\\pi}{4} = 2\\pi$, so $k = 2$. Forgetting the $\\frac{1}{2}$ gives $4\\pi$ — always write the formula before substituting.",
                "zh": "一片花瓣对应 $0 \\le \\theta \\le \\frac{\\pi}{2}$（此时 $\\sin 2\\theta \\ge 0$）。$A = \\frac{1}{2}\\int_0^{\\pi/2} 16\\sin^2(2\\theta)\\,d\\theta = 8 \\cdot \\frac{\\pi}{4} = 2\\pi$，故 $k = 2$。忘记 $\\frac{1}{2}$ 会得到 $4\\pi$——代入数值之前一定先写公式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the polar curve $r = \\theta$, what is $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{2}$?",
                "zh": "对极坐标曲线 $r = \\theta$，当 $\\theta = \\frac{\\pi}{2}$ 时 $\\frac{dy}{dx}$ 等于多少？"
              },
              "choices": [
                "$-\\frac{2}{\\pi}$",
                "$\\frac{2}{\\pi}$",
                "$-\\frac{\\pi}{2}$",
                "$1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $\\frac{dr}{d\\theta} = 1$: numerator $= \\sin\\theta + \\theta\\cos\\theta = 1 + 0 = 1$; denominator $= \\cos\\theta - \\theta\\sin\\theta = 0 - \\frac{\\pi}{2} = -\\frac{\\pi}{2}$. So $\\frac{dy}{dx} = -\\frac{2}{\\pi}$. Choice D is the trap of answering with $\\frac{dr}{d\\theta} = 1$, which is not the slope of the curve.",
                "zh": "由 $\\frac{dr}{d\\theta} = 1$：分子 $= \\sin\\theta + \\theta\\cos\\theta = 1 + 0 = 1$；分母 $= \\cos\\theta - \\theta\\sin\\theta = 0 - \\frac{\\pi}{2} = -\\frac{\\pi}{2}$。所以 $\\frac{dy}{dx} = -\\frac{2}{\\pi}$。选项 D 的陷阱是把 $\\frac{dr}{d\\theta} = 1$ 当作斜率——它并不是曲线的斜率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A region lies inside the outer curve $r = R(\\theta)$ and outside the inner curve $r = g(\\theta)$ for $\\alpha \\le \\theta \\le \\beta$. Its area is",
                "zh": "某区域在外层曲线 $r = R(\\theta)$ 内部、内层曲线 $r = g(\\theta)$ 外部，$\\alpha \\le \\theta \\le \\beta$。它的面积是"
              },
              "choices": [
                "$\\frac{1}{2}\\int_{\\alpha}^{\\beta} \\left( R - g \\right)^2 d\\theta$",
                "$\\int_{\\alpha}^{\\beta} \\left( R^2 - g^2 \\right) d\\theta$",
                "$\\frac{1}{2}\\int_{\\alpha}^{\\beta} \\left( R^2 - g^2 \\right) d\\theta$",
                "$\\frac{1}{2}\\int_{\\alpha}^{\\beta} \\left( R - g \\right) d\\theta$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Subtract the areas of the two sector sweeps: $\\frac{1}{2}\\int R^2\\,d\\theta - \\frac{1}{2}\\int g^2\\,d\\theta = \\frac{1}{2}\\int (R^2 - g^2)\\,d\\theta$. Choice A squares the difference instead of subtracting the squares — $(R-g)^2 \\neq R^2 - g^2$, an algebra trap the exam uses deliberately.",
                "zh": "两个扇形扫过面积相减：$\\frac{1}{2}\\int R^2\\,d\\theta - \\frac{1}{2}\\int g^2\\,d\\theta = \\frac{1}{2}\\int (R^2 - g^2)\\,d\\theta$。选项 A 是\"差的平方\"而不是\"平方的差\"——$(R-g)^2 \\neq R^2 - g^2$，这是考试有意设置的代数陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many petals does the rose curve $r = 3\\cos(3\\theta)$ have? Give an integer.",
                "zh": "玫瑰线 $r = 3\\cos(3\\theta)$ 有几片花瓣？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "+3"
              ],
              "explanation": {
                "en": "For $r = a\\cos(n\\theta)$, an odd $n$ gives $n$ petals (the curve retraces itself over $[0, 2\\pi]$), while an even $n$ gives $2n$ petals. Here $n = 3$ is odd, so there are 3 petals. Answering 6 applies the even-$n$ rule to an odd $n$.",
                "zh": "对 $r = a\\cos(n\\theta)$：$n$ 为奇数时有 $n$ 片花瓣（曲线在 $[0, 2\\pi]$ 上会重描一遍），$n$ 为偶数时有 $2n$ 片。这里 $n = 3$ 是奇数，所以有 3 片花瓣。答 6 的话就是把偶数规则用到了奇数上。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The polar equation $r = 6\\sin\\theta$ is equivalent to which rectangular equation?",
                "zh": "极坐标方程 $r = 6\\sin\\theta$ 等价于下列哪个直角坐标方程？"
              },
              "choices": [
                "$x^2 + (y - 3)^2 = 9$",
                "$(x - 3)^2 + y^2 = 9$",
                "$x^2 + y^2 = 36$",
                "$y = 6x$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Multiply both sides by $r$: $r^2 = 6r\\sin\\theta$, so $x^2 + y^2 = 6y$. Completing the square: $x^2 + (y-3)^2 = 9$ — a circle of radius 3 centered at $(0, 3)$. Choice B is the analogous circle for $r = 6\\cos\\theta$; sine shifts along the $y$-axis, cosine along the $x$-axis.",
                "zh": "两边同乘 $r$：$r^2 = 6r\\sin\\theta$，即 $x^2 + y^2 = 6y$。配方得 $x^2 + (y-3)^2 = 9$——以 $(0, 3)$ 为圆心、半径为 3 的圆。选项 B 是 $r = 6\\cos\\theta$ 对应的圆；正弦沿 $y$ 轴平移，余弦沿 $x$ 轴平移。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The curves $r = 2\\cos\\theta$ and $r = 1$ intersect in the first quadrant at $\\theta = \\frac{\\pi}{k}$. Find $k$. Give an integer.",
                "zh": "曲线 $r = 2\\cos\\theta$ 与 $r = 1$ 在第一象限交于 $\\theta = \\frac{\\pi}{k}$。求 $k$。请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "+3"
              ],
              "explanation": {
                "en": "Set the curves equal: $2\\cos\\theta = 1$ gives $\\cos\\theta = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{3}$ in the first quadrant, meaning $k = 3$. Finding intersection angles this way is the first step of every area-between-polar-curves problem.",
                "zh": "令两曲线相等：$2\\cos\\theta = 1$ 得 $\\cos\\theta = \\frac{1}{2}$，第一象限中 $\\theta = \\frac{\\pi}{3}$，故 $k = 3$。用这种方法求交点角度是所有\"极坐标曲线之间面积\"问题的第一步。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-10-infinite-series",
      "title": "Unit 10: Infinite Sequences and Series",
      "titleZh": "第十单元：无穷数列与级数",
      "lessons": [
        {
          "id": "sequences-and-geometric-series",
          "title": "Sequences, Series, and Geometric Series",
          "titleZh": "数列、级数与几何级数",
          "content": [
            {
              "type": "h2",
              "en": "From Sequences to Infinite Sums",
              "zh": "从数列到无穷求和"
            },
            {
              "type": "p",
              "en": "Unit 10 asks a bold question: can adding infinitely many numbers produce a finite answer? The key is to separate two objects — the sequence of terms $a_n$ and the sequence of partial sums $S_n$. A series converges exactly when its partial sums settle down to a limit. This lesson builds that definition and then masters the most important series on the entire exam: the geometric series.",
              "zh": "第 10 单元提出一个大胆的问题：把无穷多个数相加，结果可能是有限的吗？关键在于区分两个对象——通项数列 $a_n$ 和部分和数列 $S_n$。级数收敛，当且仅当它的部分和趋于一个极限。本节课先建立这个定义，再攻克整张试卷中最重要的级数：几何级数。"
            },
            {
              "type": "h3",
              "en": "Convergence of Sequences",
              "zh": "数列的收敛"
            },
            {
              "type": "p",
              "en": "A sequence $\\{a_n\\}$ converges to $L$ if $\\lim_{n \\to \\infty} a_n = L$. You compute these limits with the same tools as $x \\to \\infty$ limits of functions: compare dominant growth rates, divide by the highest power, or use L'Hospital's rule on the matching function. Useful facts: $\\lim_{n\\to\\infty} r^n = 0$ when $|r| < 1$, and $\\lim_{n\\to\\infty} \\frac{\\ln n}{n} = 0$.",
              "zh": "数列 $\\{a_n\\}$ 收敛于 $L$ 指的是 $\\lim_{n \\to \\infty} a_n = L$。计算方法与函数在 $x \\to \\infty$ 时的极限完全相同：比较主导增长速度、同除以最高次幂，或对相应的函数用洛必达法则。常用结论：当 $|r| < 1$ 时 $\\lim_{n\\to\\infty} r^n = 0$，以及 $\\lim_{n\\to\\infty} \\frac{\\ln n}{n} = 0$。"
            },
            {
              "type": "h3",
              "en": "Partial Sums and What \"Series Converges\" Means",
              "zh": "部分和与\"级数收敛\"的定义"
            },
            {
              "type": "p",
              "en": "Given a series $\\sum_{n=1}^{\\infty} a_n$, the $n$th partial sum is $S_n = a_1 + a_2 + \\cdots + a_n$. The series converges to $S$ if the sequence of partial sums converges:",
              "zh": "对于级数 $\\sum_{n=1}^{\\infty} a_n$，第 $n$ 个部分和是 $S_n = a_1 + a_2 + \\cdots + a_n$。若部分和数列收敛，则称该级数收敛于 $S$："
            },
            {
              "type": "math",
              "tex": "\\sum_{n=1}^{\\infty} a_n = \\lim_{n \\to \\infty} S_n = S"
            },
            {
              "type": "p",
              "en": "If $\\lim_{n\\to\\infty} S_n$ does not exist (or is infinite), the series diverges. This definition gives us the nth-term test for divergence: if a series converges, then $a_n = S_n - S_{n-1} \\to S - S = 0$. So if $\\lim_{n\\to\\infty} a_n \\neq 0$, the series must diverge. The converse is false — $a_n \\to 0$ guarantees nothing.",
              "zh": "若 $\\lim_{n\\to\\infty} S_n$ 不存在（或为无穷），则级数发散。由这个定义可以推出第 $n$ 项发散判别法：若级数收敛，则 $a_n = S_n - S_{n-1} \\to S - S = 0$。因此若 $\\lim_{n\\to\\infty} a_n \\neq 0$，级数必发散。但逆命题不成立——$a_n \\to 0$ 不能保证任何结论。"
            },
            {
              "type": "note",
              "en": "AP exam tip: the classic trap is $\\sum \\frac{1}{n}$ — its terms go to 0, yet the harmonic series diverges. Never write \"$a_n \\to 0$, therefore the series converges.\" The nth-term test can only prove divergence, never convergence.",
              "zh": "AP 考试提示：经典陷阱是 $\\sum \\frac{1}{n}$——它的通项趋于 0，但调和级数发散。绝不要写\"$a_n \\to 0$，所以级数收敛\"。第 $n$ 项判别法只能证明发散，永远不能证明收敛。"
            },
            {
              "type": "h3",
              "en": "Geometric Series",
              "zh": "几何级数"
            },
            {
              "type": "p",
              "en": "A geometric series has a constant ratio $r$ between consecutive terms. With first term $a$:",
              "zh": "几何级数的相邻两项之比是常数 $r$。设首项为 $a$："
            },
            {
              "type": "math",
              "tex": "\\sum_{n=0}^{\\infty} a r^n = a + ar + ar^2 + \\cdots = \\frac{a}{1 - r} \\quad \\text{if } |r| < 1"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Converges if and only if $|r| < 1$; diverges if $|r| \\ge 1$.",
                  "zh": "当且仅当 $|r| < 1$ 时收敛；$|r| \\ge 1$ 时发散。"
                },
                {
                  "en": "The formula is $\\frac{\\text{first term}}{1 - r}$ — no matter what index the sum starts at, identify the actual first term.",
                  "zh": "公式是 $\\frac{\\text{首项}}{1 - r}$——无论求和从哪个下标开始，都要找出真正的首项。"
                },
                {
                  "en": "This is one of the very few series whose exact sum you can compute; most convergence tests only tell you converge/diverge.",
                  "zh": "这是极少数能求出精确和的级数之一；大多数判别法只能告诉你收敛或发散。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Telescoping Series",
              "zh": "裂项相消级数"
            },
            {
              "type": "p",
              "en": "A telescoping series collapses when you write each term as a difference, typically via partial fractions. Write out $S_n$, cancel the interior terms, and take the limit of what survives. On FRQs, showing the partial-sum cancellation is the expected justification.",
              "zh": "裂项相消级数在把每一项写成两数之差（通常用部分分式分解）后会大量抵消。写出 $S_n$，消去中间各项，再对剩下的部分取极限。在解答题中，展示部分和的相消过程是评分标准要求的论证。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Summing a Geometric Series",
                "zh": "例题 1：求几何级数的和"
              },
              "problem": {
                "en": "Evaluate $\\sum_{n=1}^{\\infty} \\frac{2^{n+1}}{5^n}$.",
                "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{2^{n+1}}{5^n}$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rewrite the general term to expose the ratio: $\\frac{2^{n+1}}{5^n} = 2 \\left(\\frac{2}{5}\\right)^n$. This is geometric with $r = \\frac{2}{5}$, and since $|r| < 1$ it converges. The first term (at $n = 1$) is $2 \\cdot \\frac{2}{5} = \\frac{4}{5}$.",
                  "zh": "改写通项以看清公比：$\\frac{2^{n+1}}{5^n} = 2 \\left(\\frac{2}{5}\\right)^n$。这是公比 $r = \\frac{2}{5}$ 的几何级数，因为 $|r| < 1$，所以收敛。首项（$n = 1$ 时）为 $2 \\cdot \\frac{2}{5} = \\frac{4}{5}$。"
                },
                {
                  "type": "math",
                  "tex": "\\sum_{n=1}^{\\infty} \\frac{2^{n+1}}{5^n} = \\frac{4/5}{1 - 2/5} = \\frac{4/5}{3/5} = \\frac{4}{3}"
                },
                {
                  "type": "p",
                  "en": "The most common error is plugging $a = 2$ into $\\frac{a}{1-r}$ because the sum starts at $n = 1$, not $n = 0$. Always compute the actual first term.",
                  "zh": "最常见的错误是把 $a = 2$ 直接代入 $\\frac{a}{1-r}$——但求和是从 $n = 1$ 而不是 $n = 0$ 开始的。一定要算出真正的首项。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A Telescoping Sum",
                "zh": "例题 2：裂项相消求和"
              },
              "problem": {
                "en": "Find the sum $\\sum_{n=1}^{\\infty} \\frac{2}{n(n+2)}$.",
                "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{2}{n(n+2)}$ 的和。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Partial fractions: $\\frac{2}{n(n+2)} = \\frac{1}{n} - \\frac{1}{n+2}$. Write the partial sum and cancel in pairs two apart:",
                  "zh": "部分分式分解：$\\frac{2}{n(n+2)} = \\frac{1}{n} - \\frac{1}{n+2}$。写出部分和，相隔两项的项两两相消："
                },
                {
                  "type": "math",
                  "tex": "S_n = \\left(1 + \\frac{1}{2}\\right) - \\left(\\frac{1}{n+1} + \\frac{1}{n+2}\\right)"
                },
                {
                  "type": "p",
                  "en": "As $n \\to \\infty$, the tail terms vanish, so the sum is $1 + \\frac{1}{2} = \\frac{3}{2}$. Because the denominators differ by 2, two leading terms survive — students who assume only the first term survives get $1$ and lose the point.",
                  "zh": "当 $n \\to \\infty$ 时，尾部两项趋于 0，所以和为 $1 + \\frac{1}{2} = \\frac{3}{2}$。由于分母相差 2，开头会留下两项——想当然认为只留一项的同学会得到 $1$，从而失分。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is $\\lim_{n \\to \\infty} \\frac{3n^2 - n}{2n^2 + 5}$?",
                "zh": "$\\lim_{n \\to \\infty} \\frac{3n^2 - n}{2n^2 + 5}$ 等于多少？"
              },
              "choices": [
                "$0$",
                "$\\frac{3}{2}$",
                "$3$",
                "The limit does not exist / 极限不存在"
              ],
              "answer": 1,
              "explanation": {
                "en": "Divide numerator and denominator by $n^2$: the limit is the ratio of leading coefficients, $\\frac{3}{2}$. Choice C forgets the denominator's coefficient 2.",
                "zh": "分子分母同除以 $n^2$：极限等于最高次项系数之比 $\\frac{3}{2}$。选项 C 忽略了分母的系数 2。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following series must diverge by the nth-term test?",
                "zh": "下列哪个级数可由第 $n$ 项判别法直接判定发散？"
              },
              "choices": [
                "$\\sum_{n=1}^{\\infty} \\frac{1}{n}$",
                "$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$",
                "$\\sum_{n=1}^{\\infty} \\frac{n}{3n + 1}$",
                "$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "For choice C, $a_n \\to \\frac{1}{3} \\neq 0$, so the series diverges. Choice A also diverges (harmonic series), but its terms go to 0, so the nth-term test says nothing about it — that is why it is a tempting wrong answer.",
                "zh": "选项 C 中 $a_n \\to \\frac{1}{3} \\neq 0$，故级数发散。选项 A（调和级数）也发散，但它的通项趋于 0，第 $n$ 项判别法对它无法下结论——这正是它诱人的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\sum_{n=0}^{\\infty} 5\\left(-\\frac{1}{4}\\right)^n$. Give an integer.",
                "zh": "求 $\\sum_{n=0}^{\\infty} 5\\left(-\\frac{1}{4}\\right)^n$ 的值。请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "Geometric with $a = 5$, $r = -\\frac{1}{4}$, and $|r| < 1$. Sum $= \\frac{5}{1 - (-1/4)} = \\frac{5}{5/4} = 4$. Watch the sign: the denominator is $1 - r = \\frac{5}{4}$, not $\\frac{3}{4}$.",
                "zh": "几何级数，$a = 5$，$r = -\\frac{1}{4}$，且 $|r| < 1$。和 $= \\frac{5}{1 - (-1/4)} = \\frac{5}{5/4} = 4$。注意符号：分母是 $1 - r = \\frac{5}{4}$，不是 $\\frac{3}{4}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which values of $x$ does $\\sum_{n=0}^{\\infty} \\left(\\frac{x}{3}\\right)^n$ converge?",
                "zh": "当 $x$ 取何值时，级数 $\\sum_{n=0}^{\\infty} \\left(\\frac{x}{3}\\right)^n$ 收敛？"
              },
              "choices": [
                "$-1 < x < 1$",
                "$x < 3$",
                "$-3 \\le x \\le 3$",
                "$-3 < x < 3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "This is geometric with $r = \\frac{x}{3}$; it converges when $\\left|\\frac{x}{3}\\right| < 1$, i.e. $|x| < 3$. Choice C is wrong because at $x = \\pm 3$ we get $|r| = 1$ and the series diverges — endpoints are never included for a geometric series.",
                "zh": "这是公比 $r = \\frac{x}{3}$ 的几何级数；当 $\\left|\\frac{x}{3}\\right| < 1$ 即 $|x| < 3$ 时收敛。选项 C 错在端点：$x = \\pm 3$ 时 $|r| = 1$，级数发散——几何级数从不包含端点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the sum $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$. Give an integer.",
                "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$ 的和。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0",
                "+1"
              ],
              "explanation": {
                "en": "Telescoping: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, so $S_n = 1 - \\frac{1}{n+1} \\to 1$. The definition of series convergence is the limit of the partial sums.",
                "zh": "裂项相消：$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$，故 $S_n = 1 - \\frac{1}{n+1} \\to 1$。级数收敛的定义正是部分和的极限。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The repeating decimal $0.\\overline{7} = 0.777\\ldots$ can be written as a geometric series $\\sum_{n=1}^{\\infty} \\frac{7}{10^n}$. Its exact value is",
                "zh": "循环小数 $0.\\overline{7} = 0.777\\ldots$ 可写成几何级数 $\\sum_{n=1}^{\\infty} \\frac{7}{10^n}$，其精确值是"
              },
              "choices": [
                "$\\frac{7}{10}$",
                "$\\frac{7}{9}$",
                "$\\frac{7}{11}$",
                "$\\frac{9}{7}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "First term $\\frac{7}{10}$, ratio $r = \\frac{1}{10}$: sum $= \\frac{7/10}{1 - 1/10} = \\frac{7/10}{9/10} = \\frac{7}{9}$. Choice A is only the first term, not the whole sum.",
                "zh": "首项 $\\frac{7}{10}$，公比 $r = \\frac{1}{10}$：和 $= \\frac{7/10}{1 - 1/10} = \\frac{7/10}{9/10} = \\frac{7}{9}$。选项 A 只是首项，不是整个级数的和。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The partial sums of a series $\\sum_{n=1}^{\\infty} a_n$ are given by $S_n = \\frac{2n}{n + 1}$. What can you conclude?",
                "zh": "级数 $\\sum_{n=1}^{\\infty} a_n$ 的部分和为 $S_n = \\frac{2n}{n + 1}$。可以得出什么结论？"
              },
              "choices": [
                "The series converges to $2$ / 级数收敛于 $2$",
                "The series diverges / 级数发散",
                "The series converges to $0$ / 级数收敛于 $0$",
                "The series converges to $1$ / 级数收敛于 $1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "By definition, the sum of the series is $\\lim_{n\\to\\infty} S_n = \\lim_{n\\to\\infty} \\frac{2n}{n+1} = 2$. Choice C confuses the limit of the terms $a_n$ (which is 0 for any convergent series) with the limit of the partial sums.",
                "zh": "根据定义，级数的和为 $\\lim_{n\\to\\infty} S_n = \\lim_{n\\to\\infty} \\frac{2n}{n+1} = 2$。选项 C 把通项 $a_n$ 的极限（任何收敛级数都是 0）与部分和的极限弄混了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A geometric series has first term $6$ and sum $8$. Find the common ratio $r$. Give your answer as a fraction a/b.",
                "zh": "某几何级数首项为 $6$，和为 $8$。求公比 $r$。答案写成分数 a/b 的形式。"
              },
              "answer": "1/4",
              "accept": [
                "0.25"
              ],
              "explanation": {
                "en": "From $\\frac{a}{1-r} = 8$ with $a = 6$: $1 - r = \\frac{6}{8} = \\frac{3}{4}$, so $r = \\frac{1}{4}$. Check: $|r| < 1$, so a convergent geometric series with these values really exists.",
                "zh": "由 $\\frac{a}{1-r} = 8$ 且 $a = 6$：$1 - r = \\frac{6}{8} = \\frac{3}{4}$，故 $r = \\frac{1}{4}$。验证：$|r| < 1$，所以这样的收敛几何级数确实存在。"
              }
            }
          ]
        },
        {
          "id": "convergence-tests",
          "title": "Convergence Tests",
          "titleZh": "收敛判别法",
          "content": [
            {
              "type": "h2",
              "en": "A Toolbox for Deciding Convergence",
              "zh": "判断收敛的工具箱"
            },
            {
              "type": "p",
              "en": "Most series cannot be summed exactly, so the AP exam tests whether you can decide convergence and justify your decision with the right test. This lesson assembles the full toolbox — integral test, p-series, comparison tests, alternating series test, and ratio test — plus the distinction between absolute and conditional convergence and the alternating series error bound.",
              "zh": "大多数级数无法求出精确的和，因此 AP 考试考查的是：你能否判断收敛性，并用正确的判别法给出论证。本节课汇集完整的工具箱——积分判别法、p-级数、比较判别法、交错级数判别法和比值判别法——并讲清绝对收敛与条件收敛的区别，以及交错级数误差界。"
            },
            {
              "type": "h3",
              "en": "Integral Test and p-Series",
              "zh": "积分判别法与 p-级数"
            },
            {
              "type": "p",
              "en": "If $f$ is positive, continuous, and decreasing for $x \\ge 1$ with $f(n) = a_n$, then $\\sum a_n$ and $\\int_1^{\\infty} f(x)\\,dx$ either both converge or both diverge. Applying this to $f(x) = \\frac{1}{x^p}$ gives the p-series fact you will use constantly:",
              "zh": "若 $f$ 在 $x \\ge 1$ 上为正、连续且递减，并且 $f(n) = a_n$，则 $\\sum a_n$ 与 $\\int_1^{\\infty} f(x)\\,dx$ 同时收敛或同时发散。把它用在 $f(x) = \\frac{1}{x^p}$ 上，就得到你会反复使用的 p-级数结论："
            },
            {
              "type": "math",
              "tex": "\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\text{ converges if } p > 1, \\text{ diverges if } p \\le 1"
            },
            {
              "type": "p",
              "en": "The case $p = 1$ is the harmonic series $\\sum \\frac{1}{n}$, which diverges even though its terms shrink to 0. Note the integral test tells you convergence — it does not say the sum equals the integral.",
              "zh": "$p = 1$ 的情形就是调和级数 $\\sum \\frac{1}{n}$：尽管通项趋于 0，它仍发散。注意积分判别法只判断收敛性——并不是说级数的和等于积分值。"
            },
            {
              "type": "h3",
              "en": "Comparison Tests",
              "zh": "比较判别法"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Direct comparison: for positive terms, if $0 \\le a_n \\le b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges; if $a_n \\ge b_n \\ge 0$ and $\\sum b_n$ diverges, then $\\sum a_n$ diverges.",
                  "zh": "直接比较：对正项级数，若 $0 \\le a_n \\le b_n$ 且 $\\sum b_n$ 收敛，则 $\\sum a_n$ 收敛；若 $a_n \\ge b_n \\ge 0$ 且 $\\sum b_n$ 发散，则 $\\sum a_n$ 发散。"
                },
                {
                  "en": "Limit comparison: if $a_n, b_n > 0$ and $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = c$ with $0 < c < \\infty$, the two series share the same fate. Choose $b_n$ by keeping only the dominant terms of $a_n$.",
                  "zh": "极限比较：若 $a_n, b_n > 0$ 且 $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = c$，$0 < c < \\infty$，则两个级数同收敛同发散。选取 $b_n$ 的方法是只保留 $a_n$ 中的主导项。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Alternating Series Test and Error Bound",
              "zh": "交错级数判别法与误差界"
            },
            {
              "type": "p",
              "en": "An alternating series $\\sum (-1)^{n+1} b_n$ with $b_n > 0$ converges if the $b_n$ are (eventually) decreasing and $\\lim_{n\\to\\infty} b_n = 0$. Moreover, the error from stopping at the partial sum $S_k$ is at most the first omitted term:",
              "zh": "交错级数 $\\sum (-1)^{n+1} b_n$（$b_n > 0$）在 $b_n$（最终）递减且 $\\lim_{n\\to\\infty} b_n = 0$ 时收敛。而且，截断到部分和 $S_k$ 所产生的误差不超过第一个被舍去的项："
            },
            {
              "type": "math",
              "tex": "|S - S_k| \\le b_{k+1}"
            },
            {
              "type": "h3",
              "en": "Ratio Test; Absolute vs. Conditional Convergence",
              "zh": "比值判别法；绝对收敛与条件收敛"
            },
            {
              "type": "p",
              "en": "Compute $L = \\lim_{n\\to\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$. If $L < 1$ the series converges absolutely; if $L > 1$ it diverges; if $L = 1$ the test is inconclusive. The ratio test is the tool of choice whenever $a_n$ contains factorials or exponentials. A series converges absolutely if $\\sum |a_n|$ converges; it converges conditionally if $\\sum a_n$ converges but $\\sum |a_n|$ diverges — the model example is the alternating harmonic series $\\sum \\frac{(-1)^{n+1}}{n}$.",
              "zh": "计算 $L = \\lim_{n\\to\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$。若 $L < 1$，级数绝对收敛；若 $L > 1$，发散；若 $L = 1$，判别法失效。只要 $a_n$ 含有阶乘或指数式，比值判别法就是首选。若 $\\sum |a_n|$ 收敛，则称级数绝对收敛；若 $\\sum a_n$ 收敛但 $\\sum |a_n|$ 发散，则称条件收敛——典型例子是交错调和级数 $\\sum \\frac{(-1)^{n+1}}{n}$。"
            },
            {
              "type": "h3",
              "en": "Choosing a Test: A Strategy",
              "zh": "选择判别法的策略"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "First check $\\lim a_n$. If it is not 0, stop: divergent by the nth-term test.",
                  "zh": "先看 $\\lim a_n$。若不为 0，直接下结论：由第 $n$ 项判别法发散。"
                },
                {
                  "en": "Geometric or p-series form? Use the known results.",
                  "zh": "是几何级数或 p-级数吗？直接用已知结论。"
                },
                {
                  "en": "Rational (or algebraic) in $n$? Limit comparison with the dominant-power p-series.",
                  "zh": "通项是 $n$ 的有理式（或代数式）？与主导幂次的 p-级数作极限比较。"
                },
                {
                  "en": "Factorials or $c^n$? Ratio test. Alternating signs? Alternating series test — and check absolute convergence separately.",
                  "zh": "含阶乘或 $c^n$？用比值判别法。含交错符号？用交错级数判别法——并另外检查是否绝对收敛。"
                },
                {
                  "en": "$\\ln n$ in the denominator, or a form you can integrate? Try the integral test.",
                  "zh": "分母含 $\\ln n$，或通项容易积分？试试积分判别法。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: FRQ graders award justification points only when you name the test and verify its hypotheses. For the alternating series test, explicitly state that the $b_n$ are positive, decreasing, and tend to 0. Writing \"it converges by AST\" with no hypothesis check earns nothing.",
              "zh": "AP 考试提示：解答题只有在你写明所用判别法并验证其条件时才给论证分。用交错级数判别法时，必须明确写出 $b_n$ 为正、递减且趋于 0。只写\"由交错级数判别法收敛\"而不验证条件是得不到分的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Limit Comparison Test",
                "zh": "例题 1：极限比较判别法"
              },
              "problem": {
                "en": "Determine whether $\\sum_{n=1}^{\\infty} \\frac{2n + 1}{n^3 + 4}$ converges or diverges.",
                "zh": "判断 $\\sum_{n=1}^{\\infty} \\frac{2n + 1}{n^3 + 4}$ 收敛还是发散。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Keep the dominant terms: $\\frac{2n}{n^3} = \\frac{2}{n^2}$, so compare with $b_n = \\frac{1}{n^2}$, a convergent p-series ($p = 2 > 1$).",
                  "zh": "保留主导项：$\\frac{2n}{n^3} = \\frac{2}{n^2}$，因此与 $b_n = \\frac{1}{n^2}$ 比较，它是收敛的 p-级数（$p = 2 > 1$）。"
                },
                {
                  "type": "math",
                  "tex": "\\lim_{n \\to \\infty} \\frac{(2n+1)/(n^3+4)}{1/n^2} = \\lim_{n \\to \\infty} \\frac{2n^3 + n^2}{n^3 + 4} = 2"
                },
                {
                  "type": "p",
                  "en": "The limit is finite and positive, so both series behave the same way: the given series converges. Direct comparison with $\\frac{1}{n^2}$ would be awkward here since $\\frac{2n+1}{n^3+4} > \\frac{1}{n^2}$ for small $n$ — limit comparison avoids that inequality headache.",
                  "zh": "极限为有限正数，故两级数同收敛同发散：原级数收敛。这里用直接比较会很别扭，因为当 $n$ 较小时 $\\frac{2n+1}{n^3+4} > \\frac{1}{n^2}$——极限比较避开了这种不等式上的麻烦。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Absolute vs. Conditional Convergence",
                "zh": "例题 2：绝对收敛与条件收敛"
              },
              "problem": {
                "en": "Classify $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{\\sqrt{n}}$ as absolutely convergent, conditionally convergent, or divergent.",
                "zh": "判断 $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{\\sqrt{n}}$ 是绝对收敛、条件收敛还是发散。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Check absolute convergence first: $\\sum \\left| \\frac{(-1)^{n+1}}{\\sqrt{n}} \\right| = \\sum \\frac{1}{n^{1/2}}$ is a p-series with $p = \\frac{1}{2} \\le 1$, so it diverges. The series is not absolutely convergent.",
                  "zh": "先检查绝对收敛：$\\sum \\left| \\frac{(-1)^{n+1}}{\\sqrt{n}} \\right| = \\sum \\frac{1}{n^{1/2}}$ 是 $p = \\frac{1}{2} \\le 1$ 的 p-级数，发散。故该级数不绝对收敛。"
                },
                {
                  "type": "p",
                  "en": "Now apply the alternating series test with $b_n = \\frac{1}{\\sqrt{n}}$: the terms are positive, decreasing, and $\\lim_{n\\to\\infty} \\frac{1}{\\sqrt{n}} = 0$. All hypotheses hold, so the alternating series converges.",
                  "zh": "再用交错级数判别法，取 $b_n = \\frac{1}{\\sqrt{n}}$：各项为正、递减，且 $\\lim_{n\\to\\infty} \\frac{1}{\\sqrt{n}} = 0$。条件全部满足，交错级数收敛。"
                },
                {
                  "type": "p",
                  "en": "Convergent but not absolutely convergent: the series converges conditionally.",
                  "zh": "收敛但不绝对收敛：该级数条件收敛。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following series converges?",
                "zh": "下列哪个级数收敛？"
              },
              "choices": [
                "$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$",
                "$\\sum_{n=1}^{\\infty} \\frac{1}{n}$",
                "$\\sum_{n=1}^{\\infty} \\frac{1}{n^{0.99}}$",
                "$\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.01}}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "A p-series converges exactly when $p > 1$; only $p = 1.01$ qualifies. Choice B is the divergent harmonic series, and $p = 0.99$ diverges even though it is tantalizingly close to 1 — the cutoff is strict.",
                "zh": "p-级数当且仅当 $p > 1$ 时收敛；只有 $p = 1.01$ 满足。选项 B 是发散的调和级数；$p = 0.99$ 虽然非常接近 1，但仍发散——分界线是严格的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The series $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 3n}$ converges. Which comparison gives the cleanest justification?",
                "zh": "级数 $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 3n}$ 收敛。下列哪种比较给出最简洁的论证？"
              },
              "choices": [
                "$0 < \\frac{1}{n^2 + 3n} < \\frac{1}{n^2}$ and $\\sum \\frac{1}{n^2}$ converges / 且 $\\sum \\frac{1}{n^2}$ 收敛",
                "$\\frac{1}{n^2 + 3n} < \\frac{1}{n}$ and $\\sum \\frac{1}{n}$ diverges / 且 $\\sum \\frac{1}{n}$ 发散",
                "$\\frac{1}{n^2 + 3n} > \\frac{1}{n^3}$ and $\\sum \\frac{1}{n^3}$ converges / 且 $\\sum \\frac{1}{n^3}$ 收敛",
                "The nth-term test, since $\\frac{1}{n^2+3n} \\to 0$ / 第 $n$ 项判别法，因为 $\\frac{1}{n^2+3n} \\to 0$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Direct comparison: the terms are squeezed below a convergent p-series ($p=2$), so the series converges. Choice B compares against a divergent series from the wrong side (being smaller than a divergent series proves nothing), and choice D misuses the nth-term test, which can never prove convergence.",
                "zh": "直接比较：通项被一个收敛的 p-级数（$p=2$）压在下面，故收敛。选项 B 从错误的方向与发散级数比较（比发散级数小说明不了任何问题）；选项 D 误用第 $n$ 项判别法——它永远不能证明收敛。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ is",
                "zh": "级数 $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ 是"
              },
              "choices": [
                "divergent / 发散",
                "absolutely convergent / 绝对收敛",
                "conditionally convergent / 条件收敛",
                "convergent to 0 / 收敛于 0"
              ],
              "answer": 2,
              "explanation": {
                "en": "The alternating series test applies ($\\frac{1}{n}$ positive, decreasing, $\\to 0$), so it converges; but $\\sum \\left|\\frac{(-1)^{n+1}}{n}\\right| = \\sum \\frac{1}{n}$ is the divergent harmonic series, so convergence is only conditional. Choice B is the trap for students who forget to test the absolute-value series.",
                "zh": "交错级数判别法适用（$\\frac{1}{n}$ 为正、递减、趋于 0），故收敛；但 $\\sum \\left|\\frac{(-1)^{n+1}}{n}\\right| = \\sum \\frac{1}{n}$ 是发散的调和级数，所以只是条件收敛。选项 B 是给忘记检验绝对值级数的同学设的陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}$ and let $S_4$ be the fourth partial sum. By the alternating series error bound, $|S - S_4| \\le$ ? Give your answer as a fraction a/b.",
                "zh": "设 $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}$，$S_4$ 为第四个部分和。由交错级数误差界，$|S - S_4| \\le$ ？答案写成分数 a/b 的形式。"
              },
              "answer": "1/25",
              "accept": [
                "0.04"
              ],
              "explanation": {
                "en": "The error after $S_k$ is at most the first omitted term, $b_{k+1}$. Here $b_5 = \\frac{1}{5^2} = \\frac{1}{25}$. A common mistake is using $b_4 = \\frac{1}{16}$, the last included term, instead of the first omitted one.",
                "zh": "截断到 $S_k$ 后的误差不超过第一个被舍去的项 $b_{k+1}$。这里 $b_5 = \\frac{1}{5^2} = \\frac{1}{25}$。常见错误是用了最后保留的项 $b_4 = \\frac{1}{16}$，而不是第一个被舍去的项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Applying the ratio test to $\\sum_{n=1}^{\\infty} \\frac{3^n}{n!}$ shows that the series",
                "zh": "对 $\\sum_{n=1}^{\\infty} \\frac{3^n}{n!}$ 用比值判别法，可知该级数"
              },
              "choices": [
                "diverges because $3^n \\to \\infty$ / 发散，因为 $3^n \\to \\infty$",
                "converges absolutely because $L = 0$ / 绝对收敛，因为 $L = 0$",
                "is inconclusive because $L = 1$ / 无法判断，因为 $L = 1$",
                "converges absolutely because $L = 3$ / 绝对收敛，因为 $L = 3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{3^{n+1}}{(n+1)!} \\cdot \\frac{n!}{3^n} = \\frac{3}{n+1} \\to 0 < 1$, so the series converges absolutely. Choice D miscomputes the limit; note factorials outgrow every exponential, which is why $L = 0$.",
                "zh": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{3^{n+1}}{(n+1)!} \\cdot \\frac{n!}{3^n} = \\frac{3}{n+1} \\to 0 < 1$，故绝对收敛。选项 D 算错了极限；注意阶乘增长快于任何指数式，所以 $L = 0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the series $\\sum_{n=1}^{\\infty} \\frac{n^2}{2^n}$, compute the ratio test limit $L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$. Give your answer as a fraction a/b.",
                "zh": "对级数 $\\sum_{n=1}^{\\infty} \\frac{n^2}{2^n}$，计算比值判别法的极限 $L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$。答案写成分数 a/b 的形式。"
              },
              "answer": "1/2",
              "accept": [
                "0.5"
              ],
              "explanation": {
                "en": "$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{1}{2}\\left(\\frac{n+1}{n}\\right)^2 \\to \\frac{1}{2}$. Since $L = \\frac{1}{2} < 1$, the series converges absolutely — the polynomial factor never changes the limit, only the exponential base matters.",
                "zh": "$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{1}{2}\\left(\\frac{n+1}{n}\\right)^2 \\to \\frac{1}{2}$。由于 $L = \\frac{1}{2} < 1$，级数绝对收敛——多项式因子不影响极限，起决定作用的只有指数的底。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which test most directly shows that $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ diverges?",
                "zh": "哪种判别法最直接地说明 $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ 发散？"
              },
              "choices": [
                "nth-term test / 第 $n$ 项判别法",
                "ratio test / 比值判别法",
                "direct comparison with $\\sum \\frac{1}{n}$ / 与 $\\sum \\frac{1}{n}$ 直接比较",
                "integral test, since $\\int_2^{\\infty} \\frac{dx}{x \\ln x}$ diverges / 积分判别法，因为 $\\int_2^{\\infty} \\frac{dx}{x \\ln x}$ 发散"
              ],
              "answer": 3,
              "explanation": {
                "en": "With $u = \\ln x$, $\\int_2^{\\infty} \\frac{dx}{x\\ln x} = \\lim_{b\\to\\infty} [\\ln(\\ln x)]_2^b = \\infty$, so the series diverges by the integral test. Choice C fails because $\\frac{1}{n\\ln n} < \\frac{1}{n}$ — being smaller than a divergent series proves nothing. The ratio test gives $L = 1$ (inconclusive), and the terms do go to 0, so the nth-term test is silent.",
                "zh": "令 $u = \\ln x$，$\\int_2^{\\infty} \\frac{dx}{x\\ln x} = \\lim_{b\\to\\infty} [\\ln(\\ln x)]_2^b = \\infty$，由积分判别法级数发散。选项 C 行不通，因为 $\\frac{1}{n\\ln n} < \\frac{1}{n}$——比发散级数小说明不了问题。比值判别法给出 $L = 1$（失效），通项也确实趋于 0，第 $n$ 项判别法无法下结论。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the alternating harmonic series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$, what is the smallest number of terms $k$ that guarantees $|S - S_k| \\le \\frac{1}{100}$ by the alternating series error bound? Give an integer.",
                "zh": "对交错调和级数 $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$，根据交错级数误差界，要保证 $|S - S_k| \\le \\frac{1}{100}$，最少需要取多少项 $k$？请填一个整数。"
              },
              "answer": "99",
              "accept": [
                "99.0"
              ],
              "explanation": {
                "en": "The bound is $|S - S_k| \\le b_{k+1} = \\frac{1}{k+1}$. We need $\\frac{1}{k+1} \\le \\frac{1}{100}$, i.e. $k + 1 \\ge 100$, so $k = 99$ terms suffice. Answering 100 comes from forgetting that the bound involves the $(k+1)$st term, not the $k$th.",
                "zh": "误差界为 $|S - S_k| \\le b_{k+1} = \\frac{1}{k+1}$。需要 $\\frac{1}{k+1} \\le \\frac{1}{100}$，即 $k + 1 \\ge 100$，故取 $k = 99$ 项即可。答 100 的同学是忘了误差界用的是第 $k+1$ 项而不是第 $k$ 项。"
              }
            }
          ]
        },
        {
          "id": "power-series",
          "title": "Power Series and Interval of Convergence",
          "titleZh": "幂级数与收敛区间",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Power Series?",
              "zh": "什么是幂级数？"
            },
            {
              "type": "p",
              "en": "A power series is an \"infinite polynomial\" — a series whose terms contain increasing powers of $(x - a)$. Unlike the numerical series you have studied, a power series contains a variable, so the real question becomes: for which values of $x$ does it converge? The answer is always an interval centered at $a$, and finding that interval is one of the most predictable question types on the AP exam.",
              "zh": "幂级数是一个\"无穷多项式\"——它的各项含有 $(x - a)$ 的递增幂次。与之前学过的数值级数不同，幂级数含有变量，所以真正的问题变成：级数在哪些 $x$ 值处收敛？答案永远是一个以 $a$ 为中心的区间，而求出这个区间是 AP 考试中最可预测的题型之一。"
            },
            {
              "type": "math",
              "tex": "\\sum_{n=0}^{\\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \\cdots"
            },
            {
              "type": "p",
              "en": "The number $a$ is the center of the series and the constants $c_n$ are its coefficients. Every power series converges at its center (all terms after the first vanish there); the interesting question is how far from the center convergence survives.",
              "zh": "数 $a$ 叫做级数的中心，常数 $c_n$ 叫做系数。每个幂级数在其中心处一定收敛（此时第一项之后的所有项都为零）；有趣的问题是收敛能延伸到离中心多远的地方。"
            },
            {
              "type": "h3",
              "en": "Radius of Convergence via the Ratio Test",
              "zh": "用比值判别法求收敛半径"
            },
            {
              "type": "p",
              "en": "Apply the ratio test to the absolute values of the terms and require the limit to be less than 1. Because the terms contain $x$, the limit will usually contain $|x - a|$, and solving the inequality produces the radius of convergence $R$.",
              "zh": "对各项取绝对值后使用比值判别法，并要求极限小于 1。由于各项含有 $x$，极限中通常会出现 $|x - a|$，解这个不等式就得到收敛半径 $R$。"
            },
            {
              "type": "math",
              "tex": "\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1 \\quad \\Longrightarrow \\quad |x - a| < R"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If the limit is $0$ for every $x$, the series converges for all real numbers: $R = \\infty$.",
                  "zh": "如果对每个 $x$ 极限都是 $0$，级数对所有实数收敛：$R = \\infty$。"
                },
                {
                  "en": "If the limit is $\\infty$ for every $x \\ne a$, the series converges only at its center: $R = 0$.",
                  "zh": "如果对每个 $x \\ne a$ 极限都是 $\\infty$，级数只在中心处收敛：$R = 0$。"
                },
                {
                  "en": "Otherwise the inequality gives $|x - a| < R$ for a finite positive $R$, and the two endpoints $x = a \\pm R$ must be checked separately.",
                  "zh": "否则不等式给出 $|x - a| < R$（$R$ 为有限正数），此时必须单独检验两个端点 $x = a \\pm R$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Testing the Endpoints",
              "zh": "检验端点"
            },
            {
              "type": "p",
              "en": "At each endpoint the ratio-test limit equals exactly 1, which is inconclusive. Substitute the endpoint value into the series and test the resulting numerical series with another tool: $p$-series, alternating series test, comparison, or divergence (nth-term) test. The two endpoints often behave differently, giving intervals like $[a-R,\\, a+R)$.",
              "zh": "在每个端点处，比值判别法的极限恰好等于 1，无法判断。把端点值代入级数，用别的方法检验所得的数值级数：$p$ 级数、交错级数判别法、比较判别法或通项（第 $n$ 项）判别法。两个端点的表现常常不同，因此会出现形如 $[a-R,\\, a+R)$ 的区间。"
            },
            {
              "type": "note",
              "en": "AP exam tip: on the FRQ, \"find the interval of convergence\" earns separate points for the ratio test, for testing EACH endpoint, and for stating the interval. Never claim the ratio test decides an endpoint — the graders specifically look for a different test there, with its conditions named.",
              "zh": "AP 考试提示：在解答题中，\"求收敛区间\"这类题的评分点是分开的：比值判别法一分、每个端点的检验各一分、写出区间一分。绝不要声称比值判别法能判定端点——阅卷人专门检查你在端点处是否使用了别的判别法，并写明其条件。"
            },
            {
              "type": "h3",
              "en": "Term-by-Term Differentiation and Integration",
              "zh": "逐项求导与逐项积分"
            },
            {
              "type": "p",
              "en": "Inside its interval of convergence, a power series behaves like a polynomial: you may differentiate or integrate it term by term. This is how new series are manufactured from known ones.",
              "zh": "在收敛区间内部，幂级数的表现就像多项式：可以逐项求导或逐项积分。这正是从已知级数制造新级数的方法。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Differentiating or integrating does not change the radius of convergence $R$.",
                  "zh": "逐项求导或积分不会改变收敛半径 $R$。"
                },
                {
                  "en": "Convergence at the endpoints can change: differentiation may lose an endpoint, integration may gain one — recheck them if the endpoints matter.",
                  "zh": "端点处的收敛性可能改变：求导可能失去端点，积分可能获得端点——若端点重要，必须重新检验。"
                },
                {
                  "en": "When integrating a series, remember the constant of integration $C$; find it by plugging in the center $x = a$.",
                  "zh": "对级数积分时不要忘记积分常数 $C$；把中心 $x = a$ 代入即可确定它。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Geometric Power Series",
              "zh": "几何幂级数"
            },
            {
              "type": "p",
              "en": "The single most useful power series is the geometric series. Any function of the form $\\frac{\\text{constant}}{1 - (\\text{something})}$ can be expanded instantly, valid where the common ratio has absolute value less than 1.",
              "zh": "最有用的幂级数就是几何（等比）级数。任何形如 $\\frac{\\text{常数}}{1 - (\\text{某式})}$ 的函数都可以立即展开，其成立范围是公比的绝对值小于 1。"
            },
            {
              "type": "math",
              "tex": "\\frac{1}{1 - x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots, \\qquad |x| < 1"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Full Interval of Convergence",
                "zh": "例题 1：完整求收敛区间"
              },
              "problem": {
                "en": "Find the interval of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n \\cdot 2^n}$.",
                "zh": "求 $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n \\cdot 2^n}$ 的收敛区间。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Ratio test on the absolute values:",
                  "zh": "对绝对值使用比值判别法："
                },
                {
                  "type": "math",
                  "tex": "\\lim_{n \\to \\infty} \\left| \\frac{(x-3)^{n+1}}{(n+1) 2^{n+1}} \\cdot \\frac{n \\, 2^n}{(x-3)^n} \\right| = \\frac{|x-3|}{2} \\lim_{n \\to \\infty} \\frac{n}{n+1} = \\frac{|x-3|}{2}"
                },
                {
                  "type": "p",
                  "en": "Require $\\frac{|x-3|}{2} < 1$, so $|x - 3| < 2$: the radius is $R = 2$ and the open interval is $1 < x < 5$. Now test each endpoint.",
                  "zh": "要求 $\\frac{|x-3|}{2} < 1$，即 $|x - 3| < 2$：收敛半径 $R = 2$，开区间为 $1 < x < 5$。接下来检验两个端点。"
                },
                {
                  "type": "p",
                  "en": "At $x = 5$: the series becomes $\\sum \\frac{2^n}{n \\cdot 2^n} = \\sum \\frac{1}{n}$, the harmonic series, which diverges. At $x = 1$: the series becomes $\\sum \\frac{(-1)^n}{n}$, the alternating harmonic series, which converges by the alternating series test. Interval of convergence: $[1, 5)$.",
                  "zh": "在 $x = 5$ 处：级数变为 $\\sum \\frac{2^n}{n \\cdot 2^n} = \\sum \\frac{1}{n}$，即调和级数，发散。在 $x = 1$ 处：级数变为 $\\sum \\frac{(-1)^n}{n}$，即交错调和级数，由交错级数判别法收敛。收敛区间为 $[1, 5)$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Geometric Series Plus Integration",
                "zh": "例题 2：几何级数加逐项积分"
              },
              "problem": {
                "en": "Find a power series for $f(x) = \\frac{1}{1 + x^2}$, and use it to obtain a series for $\\arctan x$.",
                "zh": "求 $f(x) = \\frac{1}{1 + x^2}$ 的幂级数，并由此得到 $\\arctan x$ 的级数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rewrite $\\frac{1}{1 + x^2} = \\frac{1}{1 - (-x^2)}$ and substitute $-x^2$ for $x$ in the geometric series:",
                  "zh": "把 $\\frac{1}{1 + x^2}$ 改写为 $\\frac{1}{1 - (-x^2)}$，在几何级数中用 $-x^2$ 替换 $x$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{1}{1 + x^2} = \\sum_{n=0}^{\\infty} (-x^2)^n = \\sum_{n=0}^{\\infty} (-1)^n x^{2n}, \\qquad |x| < 1"
                },
                {
                  "type": "p",
                  "en": "Since $\\arctan x = \\int_0^x \\frac{dt}{1 + t^2}$, integrate the series term by term:",
                  "zh": "因为 $\\arctan x = \\int_0^x \\frac{dt}{1 + t^2}$，对级数逐项积分："
                },
                {
                  "type": "math",
                  "tex": "\\arctan x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n+1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots"
                },
                {
                  "type": "p",
                  "en": "The constant of integration is $0$ because $\\arctan 0 = 0$. The radius is still $R = 1$; integration in fact gains both endpoints here, since $\\sum \\frac{(-1)^n}{2n+1}$ converges by the alternating series test.",
                  "zh": "积分常数为 $0$，因为 $\\arctan 0 = 0$。收敛半径仍是 $R = 1$；事实上积分之后两个端点都收敛了，因为 $\\sum \\frac{(-1)^n}{2n+1}$ 由交错级数判别法收敛。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the radius of convergence of $\\displaystyle\\sum_{n=0}^{\\infty} n! \\, x^n$?",
                "zh": "$\\displaystyle\\sum_{n=0}^{\\infty} n! \\, x^n$ 的收敛半径是多少？"
              },
              "choices": [
                "$R = 1$",
                "$R = \\infty$",
                "$R = 0$",
                "$R = e$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The ratio test gives $\\lim_{n\\to\\infty} (n+1)|x| = \\infty$ for every $x \\ne 0$, so the series converges only at its center: $R = 0$. Choice B is the opposite situation — it describes series like $\\sum x^n/n!$, where the factorial is in the denominator.",
                "zh": "比值判别法给出 $\\lim_{n\\to\\infty} (n+1)|x| = \\infty$（对每个 $x \\ne 0$ 成立），所以级数只在中心处收敛：$R = 0$。选项 B 是相反的情形——它描述的是 $\\sum x^n/n!$ 这类阶乘在分母的级数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the radius of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 3^n}$. Give an integer.",
                "zh": "求 $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 3^n}$ 的收敛半径。请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "+3"
              ],
              "explanation": {
                "en": "The ratio test gives $\\lim_{n\\to\\infty} \\frac{|x|}{3} \\cdot \\frac{n}{n+1} = \\frac{|x|}{3} < 1$, so $|x| < 3$ and $R = 3$. The factor $\\frac{1}{n}$ affects the endpoints, not the radius.",
                "zh": "比值判别法给出 $\\lim_{n\\to\\infty} \\frac{|x|}{3} \\cdot \\frac{n}{n+1} = \\frac{|x|}{3} < 1$，即 $|x| < 3$，故 $R = 3$。因子 $\\frac{1}{n}$ 只影响端点，不影响半径。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the interval of convergence of $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n}$?",
                "zh": "$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n}$ 的收敛区间是什么？"
              },
              "choices": [
                "$(1, 3)$",
                "$[1, 3)$",
                "$[1, 3]$",
                "$(1, 3]$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The ratio test gives $|x - 2| < 1$, so $1 < x < 3$. At $x = 3$ the series is the harmonic series $\\sum \\frac{1}{n}$ (diverges); at $x = 1$ it is the alternating harmonic series $\\sum \\frac{(-1)^n}{n}$ (converges). So the interval is $[1, 3)$. Choice A is tempting if you skip the endpoint check entirely.",
                "zh": "比值判别法给出 $|x - 2| < 1$，即 $1 < x < 3$。在 $x = 3$ 处得到调和级数 $\\sum \\frac{1}{n}$（发散）；在 $x = 1$ 处得到交错调和级数 $\\sum \\frac{(-1)^n}{n}$（收敛）。所以区间是 $[1, 3)$。如果完全跳过端点检验，就容易误选 A。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which power series represents $f(x) = \\frac{1}{1 - 2x}$, and on what interval is it valid?",
                "zh": "哪个幂级数表示 $f(x) = \\frac{1}{1 - 2x}$？它在什么区间上成立？"
              },
              "choices": [
                "$\\sum_{n=0}^{\\infty} 2^n x^n$ for $|x| < \\frac{1}{2}$",
                "$\\sum_{n=0}^{\\infty} 2^n x^n$ for $|x| < 1$",
                "$\\sum_{n=0}^{\\infty} \\frac{x^n}{2^n}$ for $|x| < 2$",
                "$\\sum_{n=0}^{\\infty} 2 x^n$ for $|x| < \\frac{1}{2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "This is geometric with ratio $r = 2x$: $\\frac{1}{1-2x} = \\sum (2x)^n = \\sum 2^n x^n$, valid when $|2x| < 1$, i.e. $|x| < \\frac{1}{2}$. Choice B keeps the old interval $|x| < 1$ — a very common error: the condition applies to the ratio $2x$, not to $x$ itself.",
                "zh": "这是公比 $r = 2x$ 的几何级数：$\\frac{1}{1-2x} = \\sum (2x)^n = \\sum 2^n x^n$，成立条件是 $|2x| < 1$，即 $|x| < \\frac{1}{2}$。选项 B 保留了旧区间 $|x| < 1$——这是非常常见的错误：条件针对的是公比 $2x$，而不是 $x$ 本身。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\frac{3}{4}\\right)^n$. Give an integer.",
                "zh": "计算 $\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\frac{3}{4}\\right)^n$。请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "This is the geometric power series $\\sum x^n = \\frac{1}{1-x}$ evaluated at $x = \\frac{3}{4}$, which is inside $|x| < 1$: the sum is $\\frac{1}{1 - 3/4} = 4$. Watch out: the formula $\\frac{a}{1-r}$ requires the series to start at $n = 0$.",
                "zh": "这是几何幂级数 $\\sum x^n = \\frac{1}{1-x}$ 在 $x = \\frac{3}{4}$ 处的值，该点在 $|x| < 1$ 内：和为 $\\frac{1}{1 - 3/4} = 4$。注意：公式 $\\frac{a}{1-r}$ 要求级数从 $n = 0$ 开始。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x) = \\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ for $|x| < 1$. Which function equals $f'(x)$?",
                "zh": "设 $f(x) = \\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$（$|x| < 1$），则 $f'(x)$ 等于哪个函数？"
              },
              "choices": [
                "$\\frac{1}{1+x}$",
                "$\\ln(1-x)$",
                "$\\frac{x}{1-x}$",
                "$\\frac{1}{1-x}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Differentiate term by term: $f'(x) = \\sum_{n=1}^{\\infty} x^{n-1} = 1 + x + x^2 + \\cdots = \\frac{1}{1-x}$. Choice C forgets the $n = 1$ term, which differentiates to the constant $1$ — the series for $f'$ starts at $x^0$, not $x^1$.",
                "zh": "逐项求导：$f'(x) = \\sum_{n=1}^{\\infty} x^{n-1} = 1 + x + x^2 + \\cdots = \\frac{1}{1-x}$。选项 C 忘了 $n = 1$ 那一项——它求导后是常数 $1$，所以 $f'$ 的级数从 $x^0$ 开始，而不是 $x^1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the center of the power series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x+1)^n}{n^2 \\, 5^n}$? Give an integer.",
                "zh": "幂级数 $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(x+1)^n}{n^2 \\, 5^n}$ 的中心是多少？请填一个整数。"
              },
              "answer": "-1",
              "accept": [
                "-1.0"
              ],
              "explanation": {
                "en": "Write $(x + 1)^n = (x - (-1))^n$: the series has the form $\\sum c_n (x - a)^n$ with $a = -1$. A sign slip here shifts the entire interval of convergence, which for this series is $[-6, 4]$, centered at $-1$.",
                "zh": "把 $(x + 1)^n$ 写成 $(x - (-1))^n$：级数具有 $\\sum c_n (x - a)^n$ 的形式，其中 $a = -1$。这里若弄错符号，整个收敛区间都会平移——本级数的收敛区间是 $[-6, 4]$，中心为 $-1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following power series converges at BOTH endpoints of its interval of convergence?",
                "zh": "下列哪个幂级数在其收敛区间的两个端点处都收敛？"
              },
              "choices": [
                "$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$",
                "$\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$",
                "$\\sum_{n=0}^{\\infty} x^n$",
                "$\\sum_{n=1}^{\\infty} n x^n$"
              ],
              "answer": 1,
              "explanation": {
                "en": "All four have $R = 1$. At $x = \\pm 1$, choice B gives $\\sum \\frac{1}{n^2}$ and $\\sum \\frac{(-1)^n}{n^2}$, both convergent ($p$-series with $p = 2$, and absolute convergence). Choice A is tempting, but it diverges at $x = 1$ (harmonic series) and only converges at $x = -1$.",
                "zh": "四个级数的半径都是 $R = 1$。在 $x = \\pm 1$ 处，选项 B 给出 $\\sum \\frac{1}{n^2}$ 和 $\\sum \\frac{(-1)^n}{n^2}$，都收敛（$p = 2$ 的 $p$ 级数，以及绝对收敛）。选项 A 有迷惑性：它在 $x = 1$ 处是调和级数，发散，只在 $x = -1$ 处收敛。"
              }
            }
          ]
        },
        {
          "id": "taylor-and-maclaurin-series",
          "title": "Taylor and Maclaurin Series",
          "titleZh": "泰勒级数与麦克劳林级数",
          "content": [
            {
              "type": "h2",
              "en": "From Polynomials to Series",
              "zh": "从多项式到级数"
            },
            {
              "type": "p",
              "en": "A Taylor polynomial is the best polynomial imitation of a function near a point: it matches the function's value, slope, concavity, and higher derivatives at $x = a$. Letting the degree grow without bound produces the Taylor series. Every year the AP exam devotes an entire FRQ to this material, so fluency here is a direct score investment.",
              "zh": "泰勒多项式是函数在一点附近最好的多项式模仿：它在 $x = a$ 处与函数的取值、斜率、凹凸性以及更高阶导数完全一致。让次数无限增大就得到泰勒级数。AP 考试每年都有一整道解答题考查这部分内容，所以熟练掌握它是对分数最直接的投资。"
            },
            {
              "type": "math",
              "tex": "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots"
            },
            {
              "type": "p",
              "en": "When the center is $a = 0$, the series is called a Maclaurin series. The key structural fact: the coefficient of $(x-a)^n$ is $\\frac{f^{(n)}(a)}{n!}$ — so a series tells you every derivative at the center, and the derivatives build the series.",
              "zh": "当中心为 $a = 0$ 时，这个级数叫做麦克劳林级数。关键的结构性事实是：$(x-a)^n$ 的系数等于 $\\frac{f^{(n)}(a)}{n!}$——因此级数告诉你函数在中心处的所有导数，而导数也反过来构造级数。"
            },
            {
              "type": "h3",
              "en": "The Four Maclaurin Series to Memorize",
              "zh": "必须熟记的四个麦克劳林级数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$, all $x$",
                  "zh": "$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$，对所有 $x$ 成立"
                },
                {
                  "en": "$\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$, all $x$",
                  "zh": "$\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$，对所有 $x$ 成立"
                },
                {
                  "en": "$\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$, all $x$",
                  "zh": "$\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$，对所有 $x$ 成立"
                },
                {
                  "en": "$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\cdots$, only for $|x| < 1$",
                  "zh": "$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\cdots$，仅当 $|x| < 1$ 时成立"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Building New Series from Old",
              "zh": "由旧级数构造新级数"
            },
            {
              "type": "p",
              "en": "Almost no AP question asks you to build a series from scratch with derivatives when a shortcut exists. Instead, start from a memorized series and transform it.",
              "zh": "当捷径存在时，AP 几乎不会让你用求导数的办法从零构造级数。正确做法是：从记熟的级数出发，对它进行变换。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Substitution: replace $x$ with $-x^2$, $3x$, etc. For example $e^{-x^2} = 1 - x^2 + \\frac{x^4}{2!} - \\cdots$",
                  "zh": "代换：用 $-x^2$、$3x$ 等替换 $x$。例如 $e^{-x^2} = 1 - x^2 + \\frac{x^4}{2!} - \\cdots$"
                },
                {
                  "en": "Multiplication by a power of $x$: $x \\cos x = x - \\frac{x^3}{2!} + \\frac{x^5}{4!} - \\cdots$ — just distribute the $x$.",
                  "zh": "乘以 $x$ 的幂：$x \\cos x = x - \\frac{x^3}{2!} + \\frac{x^5}{4!} - \\cdots$——把 $x$ 分配进去即可。"
                },
                {
                  "en": "Differentiation or integration term by term: differentiating the series for $\\sin x$ produces the series for $\\cos x$, term for term.",
                  "zh": "逐项求导或积分：对 $\\sin x$ 的级数逐项求导，就逐项得到 $\\cos x$ 的级数。"
                }
              ]
            },
            {
              "type": "note",
              "en": "AP exam tip: the series FRQ is essentially guaranteed every year. Typical parts: (a) write the first four nonzero terms and the general term, (b) build a related series by substitution or differentiation, (c) bound the error. Always write the general term when asked — omitting it costs a point even if your listed terms are perfect.",
              "zh": "AP 考试提示：级数解答题几乎每年必考。典型的小问包括：(a) 写出前四个非零项和一般项，(b) 通过代换或求导构造相关级数，(c) 估计误差。凡是题目要求一般项，一定要写——即使你列出的各项全对，漏写一般项也会扣分。"
            },
            {
              "type": "h3",
              "en": "The Lagrange Error Bound",
              "zh": "拉格朗日误差界"
            },
            {
              "type": "p",
              "en": "When $P_n(x)$ approximates $f(x)$, the remainder $R_n(x) = f(x) - P_n(x)$ satisfies the Lagrange bound: if $|f^{(n+1)}(t)| \\le M$ for all $t$ between $a$ and $x$, then",
              "zh": "当用 $P_n(x)$ 近似 $f(x)$ 时，余项 $R_n(x) = f(x) - P_n(x)$ 满足拉格朗日误差界：若对介于 $a$ 与 $x$ 之间的所有 $t$ 都有 $|f^{(n+1)}(t)| \\le M$，则"
            },
            {
              "type": "math",
              "tex": "\\left| R_n(x) \\right| \\le \\frac{M \\, |x - a|^{n+1}}{(n+1)!}"
            },
            {
              "type": "p",
              "en": "For $\\sin$ and $\\cos$, every derivative is bounded by $M = 1$, which makes them the exam's favorite functions for error questions. For alternating series that satisfy the alternating series test, there is an even simpler bound: the error is at most the absolute value of the first omitted term.",
              "zh": "对于 $\\sin$ 和 $\\cos$，所有导数都以 $M = 1$ 为界，因此它们是考试中误差题最偏爱的函数。对于满足交错级数判别法条件的交错级数，还有更简单的估计：误差不超过第一个被舍去的项的绝对值。"
            },
            {
              "type": "h3",
              "en": "Using Series to Evaluate Limits",
              "zh": "用级数求极限"
            },
            {
              "type": "p",
              "en": "Series turn $\\frac{0}{0}$ limits into simple algebra: expand each function, cancel, and read off the limit. For example, replacing $\\cos x$ with its series shows",
              "zh": "级数能把 $\\frac{0}{0}$ 型极限化为简单的代数运算：展开各函数、约分、直接读出极限。例如，把 $\\cos x$ 换成它的级数可得"
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\lim_{x \\to 0} \\frac{\\frac{x^2}{2!} - \\frac{x^4}{4!} + \\cdots}{x^2} = \\lim_{x \\to 0} \\left( \\frac{1}{2} - \\frac{x^2}{24} + \\cdots \\right) = \\frac{1}{2}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Taylor Polynomial from Derivatives",
                "zh": "例题 1：用导数构造泰勒多项式"
              },
              "problem": {
                "en": "Find the third-degree Taylor polynomial for $f(x) = \\ln x$ about $x = 1$.",
                "zh": "求 $f(x) = \\ln x$ 关于 $x = 1$ 的三次泰勒多项式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute derivatives at the center: $f(1) = 0$; $f'(x) = \\frac{1}{x}$ gives $f'(1) = 1$; $f''(x) = -\\frac{1}{x^2}$ gives $f''(1) = -1$; $f'''(x) = \\frac{2}{x^3}$ gives $f'''(1) = 2$.",
                  "zh": "在中心处计算各阶导数：$f(1) = 0$；$f'(x) = \\frac{1}{x}$，故 $f'(1) = 1$；$f''(x) = -\\frac{1}{x^2}$，故 $f''(1) = -1$；$f'''(x) = \\frac{2}{x^3}$，故 $f'''(1) = 2$。"
                },
                {
                  "type": "math",
                  "tex": "P_3(x) = 0 + 1 \\cdot (x-1) + \\frac{-1}{2!}(x-1)^2 + \\frac{2}{3!}(x-1)^3 = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3}"
                },
                {
                  "type": "p",
                  "en": "Note how the pattern $\\frac{(-1)^{n+1}}{n}(x-1)^n$ emerges: the $n!$ in the Taylor formula cancels most of the factorial growth in the derivatives. Leaving the answer in powers of $(x-1)$ is required — do not expand.",
                  "zh": "注意规律 $\\frac{(-1)^{n+1}}{n}(x-1)^n$ 的出现：泰勒公式中的 $n!$ 消去了导数中阶乘式增长的大部分。答案必须保留 $(x-1)$ 的幂的形式——不要展开。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Bounding the Error",
                "zh": "例题 2：估计误差"
              },
              "problem": {
                "en": "The polynomial $P(x) = x - \\frac{x^3}{6}$ is used to approximate $\\sin(0.5)$. Use the Lagrange error bound to bound the error.",
                "zh": "用多项式 $P(x) = x - \\frac{x^3}{6}$ 近似 $\\sin(0.5)$。请用拉格朗日误差界估计误差。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Because the $x^4$ term of the Maclaurin series for $\\sin x$ is zero, $P$ is not just $P_3$ but also $P_4$. Using $n = 4$ gives the sharper bound, with $M = 1$ since every derivative of $\\sin x$ is $\\pm\\sin$ or $\\pm\\cos$:",
                  "zh": "因为 $\\sin x$ 的麦克劳林级数中 $x^4$ 项为零，$P$ 不仅是 $P_3$，同时也是 $P_4$。取 $n = 4$ 可得更精确的界；由于 $\\sin x$ 的各阶导数都是 $\\pm\\sin$ 或 $\\pm\\cos$，可取 $M = 1$："
                },
                {
                  "type": "math",
                  "tex": "\\left| R_4(0.5) \\right| \\le \\frac{1 \\cdot (0.5)^5}{5!} = \\frac{0.03125}{120} \\approx 0.00026"
                },
                {
                  "type": "p",
                  "en": "So the approximation $\\sin(0.5) \\approx 0.5 - \\frac{0.125}{6} \\approx 0.47917$ is guaranteed accurate to within about $0.0003$. On the FRQ, you must show the inequality with $M$, the power, and the factorial — a bare numerical answer earns nothing.",
                  "zh": "因此近似值 $\\sin(0.5) \\approx 0.5 - \\frac{0.125}{6} \\approx 0.47917$ 的误差保证不超过约 $0.0003$。在解答题中，必须写出含 $M$、幂次和阶乘的不等式——只写一个数值答案是得不到分的。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the coefficient of $x^3$ in the Maclaurin series for $e^{2x}$?",
                "zh": "$e^{2x}$ 的麦克劳林级数中 $x^3$ 的系数是多少？"
              },
              "choices": [
                "$\\frac{8}{3}$",
                "$\\frac{4}{3}$",
                "$8$",
                "$\\frac{2}{3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Substitute $2x$ into $e^x = \\sum \\frac{x^n}{n!}$: the $x^3$ term is $\\frac{(2x)^3}{3!} = \\frac{8x^3}{6} = \\frac{4}{3} x^3$. Choice C forgets to divide by $3! = 6$; choice A divides by $3$ instead of $3!$.",
                "zh": "把 $2x$ 代入 $e^x = \\sum \\frac{x^n}{n!}$：$x^3$ 项为 $\\frac{(2x)^3}{3!} = \\frac{8x^3}{6} = \\frac{4}{3} x^3$。选项 C 忘记除以 $3! = 6$；选项 A 误除以 $3$ 而不是 $3!$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What are the first three nonzero terms of the Maclaurin series for $\\sin(x^2)$?",
                "zh": "$\\sin(x^2)$ 的麦克劳林级数的前三个非零项是什么？"
              },
              "choices": [
                "$x^2 - \\frac{x^6}{6} + \\frac{x^{10}}{120}$",
                "$x^2 - \\frac{x^4}{6} + \\frac{x^6}{120}$",
                "$x^2 - \\frac{x^6}{3} + \\frac{x^{10}}{5}$",
                "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Replace $x$ with $x^2$ in $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$: each power doubles, giving $x^2 - \\frac{x^6}{6} + \\frac{x^{10}}{120}$. Choice B is the classic mistake of substituting into the exponents incorrectly — $(x^2)^3 = x^6$, not $x^4$.",
                "zh": "在 $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$ 中用 $x^2$ 替换 $x$：每个幂次翻倍，得到 $x^2 - \\frac{x^6}{6} + \\frac{x^{10}}{120}$。选项 B 是典型的代换错误——$(x^2)^3 = x^6$，不是 $x^4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The coefficient of $x^4$ in the Maclaurin series for $f$ is $3$. Find $f^{(4)}(0)$. Give an integer.",
                "zh": "函数 $f$ 的麦克劳林级数中 $x^4$ 的系数是 $3$。求 $f^{(4)}(0)$。请填一个整数。"
              },
              "answer": "72",
              "accept": [
                "72.0",
                "+72"
              ],
              "explanation": {
                "en": "The coefficient of $x^n$ is $\\frac{f^{(n)}(0)}{n!}$, so $f^{(4)}(0) = 3 \\cdot 4! = 3 \\cdot 24 = 72$. This \"read the derivative from the coefficient\" move appears constantly on the AP multiple choice — forgetting the factorial gives the wrong answer $3$.",
                "zh": "$x^n$ 的系数是 $\\frac{f^{(n)}(0)}{n!}$，所以 $f^{(4)}(0) = 3 \\cdot 4! = 3 \\cdot 24 = 72$。这种\"由系数读出导数\"的操作在 AP 选择题中反复出现——忘记乘阶乘就会得到错误答案 $3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Using series, evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$.",
                "zh": "用级数计算 $\\displaystyle\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$。"
              },
              "choices": [
                "$0$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{6}$",
                "$1$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots$, the numerator is $\\frac{x^3}{6} - \\frac{x^5}{120} + \\cdots$. Dividing by $x^3$ leaves $\\frac{1}{6} - \\frac{x^2}{120} + \\cdots \\to \\frac{1}{6}$. Choice A is tempting if you stop at $\\sin x \\approx x$ — but that first-order approximation is exactly what cancels, so you must keep the cubic term.",
                "zh": "因为 $\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots$，分子为 $\\frac{x^3}{6} - \\frac{x^5}{120} + \\cdots$。除以 $x^3$ 后得 $\\frac{1}{6} - \\frac{x^2}{120} + \\cdots \\to \\frac{1}{6}$。选项 A 有迷惑性：若只用一阶近似 $\\sin x \\approx x$，恰好被抵消的就是这一项，所以必须保留三次项。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the coefficient of $x^2$ in the Maclaurin series for $e^{3x}$. Give a fraction a/b or a decimal.",
                "zh": "求 $e^{3x}$ 的麦克劳林级数中 $x^2$ 的系数。答案写成分数 a/b 或小数。"
              },
              "answer": "9/2",
              "accept": [
                "4.5",
                "4.50"
              ],
              "explanation": {
                "en": "Substituting $3x$ into $e^x$: the $x^2$ term is $\\frac{(3x)^2}{2!} = \\frac{9}{2} x^2$, so the coefficient is $\\frac{9}{2}$. Square the $3$ before dividing by $2!$ — computing $\\frac{3^2}{2}$ as $\\frac{6}{2}$ (doubling instead of squaring) is a frequent slip.",
                "zh": "把 $3x$ 代入 $e^x$：$x^2$ 项为 $\\frac{(3x)^2}{2!} = \\frac{9}{2} x^2$，系数为 $\\frac{9}{2}$。要先把 $3$ 平方再除以 $2!$——把 $3^2$ 算成 $6$（翻倍而不是平方）是常见失误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The fourth-degree Maclaurin polynomial $P_4$ is used to approximate $\\cos(1)$. Which of the following is the best Lagrange bound on the error $|\\cos(1) - P_4(1)|$?",
                "zh": "用四次麦克劳林多项式 $P_4$ 近似 $\\cos(1)$。下列哪个是误差 $|\\cos(1) - P_4(1)|$ 的最佳拉格朗日界？"
              },
              "choices": [
                "$\\frac{1}{24}$",
                "$\\frac{1}{720}$",
                "$\\frac{1}{5}$",
                "$\\frac{1}{120}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Lagrange with $n = 4$: $|R_4(1)| \\le \\frac{M \\cdot 1^5}{5!}$ with $M = 1$ (every derivative of cosine is bounded by 1), giving $\\frac{1}{120}$. Choice B uses $6!$ — that would be the bound for $R_5$, not $R_4$; choice A uses $4!$, the wrong factorial for the $(n+1)$st derivative.",
                "zh": "取 $n = 4$ 的拉格朗日界：$|R_4(1)| \\le \\frac{M \\cdot 1^5}{5!}$，其中 $M = 1$（余弦的各阶导数都以 1 为界），得 $\\frac{1}{120}$。选项 B 用了 $6!$——那是 $R_5$ 的界，不是 $R_4$ 的；选项 A 用了 $4!$，弄错了第 $(n+1)$ 阶导数对应的阶乘。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using series, evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$. Give a fraction a/b or a decimal.",
                "zh": "用级数计算 $\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$。答案写成分数 a/b 或小数。"
              },
              "answer": "1/2",
              "accept": [
                "0.5",
                ".5"
              ],
              "explanation": {
                "en": "Since $e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$, the numerator is $\\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$. Dividing by $x^2$ gives $\\frac{1}{2} + \\frac{x}{6} + \\cdots \\to \\frac{1}{2}$. This is usually faster and safer than applying L'Hôpital's rule twice.",
                "zh": "因为 $e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$，分子为 $\\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$。除以 $x^2$ 得 $\\frac{1}{2} + \\frac{x}{6} + \\cdots \\to \\frac{1}{2}$。这通常比连用两次洛必达法则更快也更保险。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The series $x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots$ converges to which function for $|x| \\le 1$?",
                "zh": "级数 $x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots$ 在 $|x| \\le 1$ 上收敛到哪个函数？"
              },
              "choices": [
                "$\\ln(1+x)$",
                "$\\sin x$",
                "$\\arctan x$",
                "$\\tan x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "These are odd powers with odd-number denominators — the signature of $\\arctan x$, obtained by integrating $\\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$ term by term. Choice B is tempting because $\\sin x$ also alternates with odd powers, but its denominators are factorials: $3!$, $5!$, not $3$, $5$.",
                "zh": "奇次幂配奇数分母——这是 $\\arctan x$ 的标志，由对 $\\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$ 逐项积分得到。选项 B 有迷惑性：$\\sin x$ 也是奇次幂交错级数，但它的分母是阶乘 $3!$、$5!$，而不是 $3$、$5$。"
              }
            }
          ]
        }
      ]
    }
  ]
}
