export default {
  "id": "precalculus",
  "title": "Precalculus",
  "titleZh": "微积分预备",
  "subject": "math",
  "level": "Honors",
  "description": "A complete Precalculus course and the on-ramp to Calculus: analysis of functions, polynomial/rational/exponential/logarithmic functions, trigonometry and its applications, vectors, matrices, conic sections, parametric equations, sequences and series, and an introduction to limits.",
  "descriptionZh": "完整的微积分预备课程，通往微积分的桥梁：函数分析，多项式/有理/指数/对数函数，三角函数及其应用，向量，矩阵，圆锥曲线，参数方程，数列与级数，以及极限入门。",
  "units": [
    {
      "id": "function-analysis",
      "title": "Unit 1: Analysis of Functions",
      "titleZh": "第一单元：函数分析",
      "lessons": [
        {
          "id": "domain-range-behavior",
          "title": "Domain, Range, and Function Behavior",
          "titleZh": "定义域、值域与函数性态",
          "content": [
            {
              "type": "h2",
              "en": "Domain and Range",
              "zh": "定义域与值域"
            },
            {
              "type": "p",
              "en": "A function assigns to each input exactly one output. The domain is the set of all allowed inputs, and the range is the set of all outputs the function actually produces. When a function is given by a formula, we assume the domain is every real number for which the formula makes sense.",
              "zh": "函数为每个输入指定唯一的输出。定义域是所有允许输入的集合，值域是函数实际产生的所有输出的集合。当函数由公式给出时，我们默认定义域是使公式有意义的全部实数。"
            },
            {
              "type": "p",
              "en": "Two restrictions appear constantly: a denominator can never equal zero, and the expression under an even root (like a square root) must be nonnegative.",
              "zh": "两条限制最为常见：分母不能为零；偶次根号（如平方根）内的表达式必须非负。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Find the domain of $f(x) = \\dfrac{\\sqrt{x-3}}{x-5}$.",
                "zh": "求 $f(x) = \\dfrac{\\sqrt{x-3}}{x-5}$ 的定义域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The square root requires $x - 3 \\ge 0$, so $x \\ge 3$. The denominator requires $x - 5 \\ne 0$, so $x \\ne 5$.",
                  "zh": "平方根要求 $x - 3 \\ge 0$，即 $x \\ge 3$；分母要求 $x - 5 \\ne 0$，即 $x \\ne 5$。"
                },
                {
                  "type": "p",
                  "en": "Combining both conditions, the domain is $[3, 5) \\cup (5, \\infty)$.",
                  "zh": "两个条件取交集，定义域为 $[3, 5) \\cup (5, \\infty)$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Even and Odd Functions",
              "zh": "偶函数与奇函数"
            },
            {
              "type": "p",
              "en": "A function is even if replacing $x$ with $-x$ leaves it unchanged; its graph is symmetric about the $y$-axis. A function is odd if replacing $x$ with $-x$ flips its sign; its graph is symmetric about the origin.",
              "zh": "若把 $x$ 换成 $-x$ 函数值不变，则函数为偶函数，其图象关于 $y$ 轴对称；若把 $x$ 换成 $-x$ 函数值变号，则函数为奇函数，其图象关于原点对称。"
            },
            {
              "type": "math",
              "tex": "\\text{even: } f(-x) = f(x) \\qquad \\text{odd: } f(-x) = -f(x)"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Determine whether $g(x) = x^3 - 4x$ is even, odd, or neither.",
                "zh": "判断 $g(x) = x^3 - 4x$ 是偶函数、奇函数还是两者都不是。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute $g(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -g(x)$.",
                  "zh": "计算 $g(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -g(x)$。"
                },
                {
                  "type": "p",
                  "en": "Since $g(-x) = -g(x)$ for every $x$, the function is odd.",
                  "zh": "因为对所有 $x$ 都有 $g(-x) = -g(x)$，所以该函数是奇函数。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Increasing and Decreasing Intervals",
              "zh": "增区间与减区间"
            },
            {
              "type": "p",
              "en": "A function is increasing on an interval if its outputs rise as $x$ moves right, and decreasing if its outputs fall. For example, $y = x^2$ decreases on $(-\\infty, 0)$ and increases on $(0, \\infty)$; the turning point $x = 0$ is where a minimum value occurs.",
              "zh": "若当 $x$ 向右移动时函数值升高，函数在该区间上递增；若函数值降低则递减。例如 $y = x^2$ 在 $(-\\infty, 0)$ 上递减，在 $(0, \\infty)$ 上递增；转折点 $x = 0$ 处取得最小值。"
            },
            {
              "type": "h2",
              "en": "Piecewise Functions",
              "zh": "分段函数"
            },
            {
              "type": "p",
              "en": "A piecewise function uses different formulas on different parts of its domain. To evaluate it, first decide which condition the input satisfies, then use only that branch.",
              "zh": "分段函数在定义域的不同部分使用不同的公式。求值时先判断输入满足哪个条件，再只使用对应的那一段公式。"
            },
            {
              "type": "note",
              "en": "Boundary points cause the most errors: check the inequality signs ($<$ vs. $\\le$) carefully to see which branch actually contains the endpoint.",
              "zh": "边界点最容易出错：仔细比较不等号（$<$ 与 $\\le$），确认端点究竟属于哪一段。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Let $f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 1 & x \\ge 2 \\end{cases}$. Find $f(-1)$ and $f(2)$.",
                "zh": "设 $f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 1 & x \\ge 2 \\end{cases}$，求 $f(-1)$ 与 $f(2)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Since $-1 < 2$, use the first branch: $f(-1) = (-1)^2 = 1$.",
                  "zh": "因为 $-1 < 2$，使用第一段：$f(-1) = (-1)^2 = 1$。"
                },
                {
                  "type": "p",
                  "en": "Since $2 \\ge 2$, use the second branch: $f(2) = 3(2) - 1 = 5$.",
                  "zh": "因为 $2 \\ge 2$，使用第二段：$f(2) = 3(2) - 1 = 5$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the domain of $f(x) = \\dfrac{1}{x-2}$?",
                "zh": "$f(x) = \\dfrac{1}{x-2}$ 的定义域是什么？"
              },
              "choices": [
                "All real numbers",
                "All real numbers except $2$",
                "$x > 2$ only",
                "All real numbers except $-2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The only restriction is that the denominator cannot be zero, so $x - 2 \\ne 0$, meaning $x \\ne 2$. Every other real number is allowed.",
                "zh": "唯一的限制是分母不能为零，即 $x - 2 \\ne 0$，所以 $x \\ne 2$，其余实数均可。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The domain of $f(x) = \\sqrt{5-x}$ is $x \\le a$. Give the value of $a$ as an integer.",
                "zh": "$f(x) = \\sqrt{5-x}$ 的定义域为 $x \\le a$，请以整数形式给出 $a$ 的值。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "The radicand must satisfy $5 - x \\ge 0$, which rearranges to $x \\le 5$, so $a = 5$.",
                "zh": "根号内必须满足 $5 - x \\ge 0$，整理得 $x \\le 5$，故 $a = 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following functions is even?",
                "zh": "下列哪个函数是偶函数？"
              },
              "choices": [
                "$f(x) = x + 1$",
                "$f(x) = x^3$",
                "$f(x) = x^2 + 1$",
                "$f(x) = \\sqrt{x}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "For $f(x) = x^2 + 1$, $f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x)$, so it is even. $x^3$ is odd, $x+1$ is neither, and $\\sqrt{x}$ is not defined for negative $x$, so symmetry cannot hold.",
                "zh": "对 $f(x) = x^2 + 1$，有 $f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x)$，故为偶函数。$x^3$ 是奇函数，$x+1$ 非奇非偶，$\\sqrt{x}$ 在负数处无定义，不可能有对称性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using $f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 1 & x \\ge 2 \\end{cases}$, find $f(3)$. Give an integer.",
                "zh": "设 $f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 1 & x \\ge 2 \\end{cases}$，求 $f(3)$，答案为整数。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "Since $3 \\ge 2$, use the second branch: $f(3) = 3(3) - 1 = 8$. The first branch would wrongly give $9$.",
                "zh": "因为 $3 \\ge 2$，应使用第二段：$f(3) = 3(3) - 1 = 8$。若误用第一段会得到 $9$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f$ is odd and $f(3) = 7$, what is $f(-3)$?",
                "zh": "若 $f$ 为奇函数且 $f(3) = 7$，则 $f(-3)$ 等于多少？"
              },
              "choices": [
                "Cannot be determined",
                "$7$",
                "$3$",
                "$-7$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The defining property of an odd function is $f(-x) = -f(x)$. Applying it with $x = 3$ gives $f(-3) = -f(3) = -7$.",
                "zh": "奇函数的定义性质是 $f(-x) = -f(x)$。取 $x = 3$ 得 $f(-3) = -f(3) = -7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On which interval is $y = (x-1)^2$ decreasing?",
                "zh": "$y = (x-1)^2$ 在哪个区间上递减？"
              },
              "choices": [
                "$(-\\infty, 1)$",
                "$(1, \\infty)$",
                "$(-\\infty, 0)$",
                "$(0, \\infty)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The graph is the parabola $y = x^2$ shifted right by 1, so its vertex is at $x = 1$. It falls to the left of the vertex and rises to the right, so it decreases on $(-\\infty, 1)$.",
                "zh": "图象是把抛物线 $y = x^2$ 右移 1 个单位，顶点在 $x = 1$。顶点左侧下降、右侧上升，所以在 $(-\\infty, 1)$ 上递减。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The function $h(x) = \\dfrac{1}{x^2 - 9}$ is undefined at two values of $x$. Give the sum of those two values as an integer.",
                "zh": "函数 $h(x) = \\dfrac{1}{x^2 - 9}$ 在两个 $x$ 值处无定义，求这两个值之和（整数）。"
              },
              "answer": "0",
              "accept": [
                "0.0",
                "-0"
              ],
              "explanation": {
                "en": "Set the denominator to zero: $x^2 - 9 = 0$ gives $x = 3$ and $x = -3$. Their sum is $3 + (-3) = 0$.",
                "zh": "令分母为零：$x^2 - 9 = 0$ 得 $x = 3$ 和 $x = -3$，两数之和为 $3 + (-3) = 0$。"
              }
            }
          ]
        },
        {
          "id": "transformations-inverses",
          "title": "Transformations and Inverse Functions",
          "titleZh": "函数变换与反函数",
          "content": [
            {
              "type": "h2",
              "en": "The Transformation Toolkit",
              "zh": "变换工具箱"
            },
            {
              "type": "p",
              "en": "Every graph in this course can be built from a small library of parent functions such as $x^2$, $\\sqrt{x}$, $|x|$, and $\\frac{1}{x}$ by applying four moves: vertical shifts, horizontal shifts, reflections, and stretches. The general template is:",
              "zh": "本课程中的每个图象都可以从少量母函数（如 $x^2$、$\\sqrt{x}$、$|x|$、$\\frac{1}{x}$）出发，通过四种操作构造：上下平移、左右平移、翻折与伸缩。通用模板是："
            },
            {
              "type": "math",
              "tex": "y = a\\, f\\big(b(x - h)\\big) + k"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$k$ shifts the graph up ($k>0$) or down ($k<0$).",
                  "zh": "$k$ 使图象上移（$k>0$）或下移（$k<0$）。"
                },
                {
                  "en": "$h$ shifts the graph right ($h>0$) or left ($h<0$).",
                  "zh": "$h$ 使图象右移（$h>0$）或左移（$h<0$）。"
                },
                {
                  "en": "$a$ stretches vertically by $|a|$; a negative $a$ also reflects across the $x$-axis.",
                  "zh": "$a$ 使图象在竖直方向伸缩 $|a|$ 倍；$a$ 为负时还关于 $x$ 轴翻折。"
                },
                {
                  "en": "$b$ compresses horizontally by a factor of $|b|$; a negative $b$ reflects across the $y$-axis.",
                  "zh": "$b$ 使图象在水平方向压缩为 $\\frac{1}{|b|}$ 倍；$b$ 为负时关于 $y$ 轴翻折。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Horizontal changes are counterintuitive: $f(x - 3)$ moves the graph right, not left, and $f(2x)$ squeezes the graph toward the $y$-axis rather than widening it.",
              "zh": "水平方向的变化与直觉相反：$f(x - 3)$ 使图象右移而不是左移；$f(2x)$ 把图象向 $y$ 轴压缩而不是拉宽。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Describe how to obtain the graph of $g(x) = -\\sqrt{x + 2} + 3$ from the graph of $f(x) = \\sqrt{x}$.",
                "zh": "说明如何由 $f(x) = \\sqrt{x}$ 的图象得到 $g(x) = -\\sqrt{x + 2} + 3$ 的图象。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rewrite as $g(x) = -f(x - (-2)) + 3$. So: shift left 2 units, reflect across the $x$-axis, then shift up 3 units.",
                  "zh": "改写为 $g(x) = -f(x - (-2)) + 3$。因此：先左移 2 个单位，再关于 $x$ 轴翻折，最后上移 3 个单位。"
                },
                {
                  "type": "p",
                  "en": "The starting point of the graph moves from $(0, 0)$ to $(-2, 3)$, and the curve now falls to the right.",
                  "zh": "图象起点从 $(0, 0)$ 移动到 $(-2, 3)$，曲线变为向右下降。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Inverse Functions",
              "zh": "反函数"
            },
            {
              "type": "p",
              "en": "An inverse function undoes a function: if $f(a) = b$, then $f^{-1}(b) = a$. A function has an inverse only when it is one-to-one, meaning no output is repeated; graphically this is the horizontal line test. The graphs of $f$ and $f^{-1}$ are reflections of each other across the line $y = x$.",
              "zh": "反函数把原函数“还原”：若 $f(a) = b$，则 $f^{-1}(b) = a$。只有一一对应（任何输出都不重复）的函数才有反函数，几何上对应水平线检验。$f$ 与 $f^{-1}$ 的图象关于直线 $y = x$ 对称。"
            },
            {
              "type": "p",
              "en": "To find a formula for $f^{-1}$: write $y = f(x)$, swap $x$ and $y$, then solve for $y$.",
              "zh": "求 $f^{-1}$ 的公式：写出 $y = f(x)$，交换 $x$ 与 $y$，再解出 $y$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Find the inverse of $f(x) = \\dfrac{2x + 1}{3}$.",
                "zh": "求 $f(x) = \\dfrac{2x + 1}{3}$ 的反函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Start with $y = \\dfrac{2x+1}{3}$ and swap variables: $x = \\dfrac{2y+1}{3}$.",
                  "zh": "由 $y = \\dfrac{2x+1}{3}$ 交换变量得 $x = \\dfrac{2y+1}{3}$。"
                },
                {
                  "type": "p",
                  "en": "Solve for $y$: $3x = 2y + 1$, so $y = \\dfrac{3x - 1}{2}$. Therefore $f^{-1}(x) = \\dfrac{3x-1}{2}$.",
                  "zh": "解出 $y$：$3x = 2y + 1$，故 $y = \\dfrac{3x - 1}{2}$，即 $f^{-1}(x) = \\dfrac{3x-1}{2}$。"
                },
                {
                  "type": "p",
                  "en": "Check: $f(1) = 1$, and indeed $f^{-1}(1) = 1$.",
                  "zh": "验证：$f(1) = 1$，而 $f^{-1}(1) = 1$，吻合。"
                }
              ]
            },
            {
              "type": "p",
              "en": "A useful check for inverses is composition: $f\\big(f^{-1}(x)\\big) = x$ and $f^{-1}\\big(f(x)\\big) = x$ for every $x$ in the appropriate domain.",
              "zh": "检验反函数的有效方法是复合：对相应定义域内的每个 $x$，都有 $f\\big(f^{-1}(x)\\big) = x$ 且 $f^{-1}\\big(f(x)\\big) = x$。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The graph of $y = f(x) + 4$ is the graph of $y = f(x)$ shifted:",
                "zh": "$y = f(x) + 4$ 的图象是 $y = f(x)$ 的图象经过怎样的平移得到的？"
              },
              "choices": [
                "Down 4 units",
                "Up 4 units",
                "Right 4 units",
                "Left 4 units"
              ],
              "answer": 1,
              "explanation": {
                "en": "Adding a constant outside the function changes the output, so every point moves vertically: $+4$ means up 4 units.",
                "zh": "在函数外面加常数改变的是输出值，所有点竖直移动：$+4$ 表示上移 4 个单位。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $y = f(x - 5)$ is the graph of $y = f(x)$ shifted:",
                "zh": "$y = f(x - 5)$ 的图象是 $y = f(x)$ 的图象经过怎样的平移得到的？"
              },
              "choices": [
                "Up 5 units",
                "Left 5 units",
                "Right 5 units",
                "Down 5 units"
              ],
              "answer": 2,
              "explanation": {
                "en": "Replacing $x$ with $x - 5$ means the graph needs a larger $x$ to produce the same output as before, so it slides right 5 units — the opposite of what the minus sign suggests.",
                "zh": "把 $x$ 换成 $x - 5$ 意味着需要更大的 $x$ 才能得到原来的输出，所以图象右移 5 个单位——与负号给人的直觉相反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The vertex of $y = (x + 3)^2 - 7$ is the point $(a, b)$. Give $a$ as an integer.",
                "zh": "$y = (x + 3)^2 - 7$ 的顶点为 $(a, b)$，请以整数形式给出 $a$。"
              },
              "answer": "-3",
              "accept": [
                "-3.0"
              ],
              "explanation": {
                "en": "Compare to $y = (x - h)^2 + k$ with vertex $(h, k)$. Here $x + 3 = x - (-3)$, so $h = -3$: the parabola is shifted left 3 and down 7, giving vertex $(-3, -7)$.",
                "zh": "与顶点式 $y = (x - h)^2 + k$（顶点 $(h, k)$）比较：$x + 3 = x - (-3)$，故 $h = -3$。抛物线左移 3、下移 7，顶点为 $(-3, -7)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which transformation does $y = -f(x)$ apply to the graph of $f$?",
                "zh": "$y = -f(x)$ 对 $f$ 的图象施加了哪种变换？"
              },
              "choices": [
                "Reflection across $y = x$",
                "Reflection across the $y$-axis",
                "Shift down 1 unit",
                "Reflection across the $x$-axis"
              ],
              "answer": 3,
              "explanation": {
                "en": "The negative sign flips every output value: points above the $x$-axis move below it and vice versa. Reflecting across the $y$-axis would instead be $y = f(-x)$.",
                "zh": "负号使每个输出值变号：$x$ 轴上方的点移到下方，反之亦然。关于 $y$ 轴翻折对应的是 $y = f(-x)$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = 3x - 6$, find $f^{-1}(9)$. Give an integer.",
                "zh": "若 $f(x) = 3x - 6$，求 $f^{-1}(9)$，答案为整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "$f^{-1}(9)$ asks: which input gives output 9? Solve $3x - 6 = 9$ to get $3x = 15$, so $x = 5$. No inverse formula is needed.",
                "zh": "$f^{-1}(9)$ 的含义是：哪个输入使输出为 9？解 $3x - 6 = 9$ 得 $3x = 15$，即 $x = 5$。无需先求反函数公式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which function is one-to-one (and therefore has an inverse) on all real numbers?",
                "zh": "下列哪个函数在全体实数上是一一对应的（因此存在反函数）？"
              },
              "choices": [
                "$f(x) = x^3$",
                "$f(x) = x^2$",
                "$f(x) = |x|$",
                "$f(x) = x^4 + 1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$x^3$ always increases, so it passes the horizontal line test. The other three are even-type graphs where two different inputs (such as $2$ and $-2$) give the same output.",
                "zh": "$x^3$ 始终递增，通过水平线检验。其余三个都具有偶对称性，两个不同的输入（如 $2$ 和 $-2$）会给出相同的输出。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = \\dfrac{x - 4}{2}$. Compute $f\\big(f^{-1}(11)\\big)$. Give an integer.",
                "zh": "设 $f(x) = \\dfrac{x - 4}{2}$，计算 $f\\big(f^{-1}(11)\\big)$，答案为整数。"
              },
              "answer": "11",
              "accept": [
                "11.0"
              ],
              "explanation": {
                "en": "Composing a function with its inverse returns the input unchanged: $f(f^{-1}(x)) = x$ for any $x$ in the range of $f$. So the answer is $11$ with no computation needed.",
                "zh": "函数与其反函数复合会原样返回输入：对 $f$ 值域内任意 $x$ 有 $f(f^{-1}(x)) = x$，所以答案就是 $11$，无需计算。"
              }
            }
          ]
        },
        {
          "id": "composite-functions-and-operations",
          "title": "Combining and Composing Functions",
          "titleZh": "函数的运算与复合",
          "content": [
            {
              "type": "h2",
              "en": "Building New Functions from Old Ones",
              "zh": "用旧函数构造新函数"
            },
            {
              "type": "p",
              "en": "Once you have a few functions, you can build endless new ones by adding, subtracting, multiplying, dividing, and — most importantly for calculus — chaining them together. This lesson assumes you already know how to read a domain and range; here we focus on what happens to the domain when functions are combined, and on composition, the operation that the chain rule will later differentiate.",
              "zh": "一旦掌握了几个基本函数，就可以通过加、减、乘、除，以及对微积分最关键的“串联”，构造出无穷多个新函数。本课假定你已会读取定义域与值域；这里我们关注函数组合后定义域如何变化，以及复合运算——日后链式法则正是对它求导。"
            },
            {
              "type": "h3",
              "en": "Arithmetic of Functions",
              "zh": "函数的四则运算"
            },
            {
              "type": "p",
              "en": "Given two functions $f$ and $g$, we define four new functions pointwise — that is, we combine their outputs at each input $x$:",
              "zh": "给定两个函数 $f$ 与 $g$，我们逐点定义四个新函数，即在每个输入 $x$ 处组合它们的输出："
            },
            {
              "type": "math",
              "tex": "(f+g)(x)=f(x)+g(x) \\qquad (f-g)(x)=f(x)-g(x)"
            },
            {
              "type": "math",
              "tex": "(fg)(x)=f(x)\\,g(x) \\qquad \\left(\\dfrac{f}{g}\\right)(x)=\\dfrac{f(x)}{g(x)}"
            },
            {
              "type": "p",
              "en": "The domain of a combined function is the intersection of the two original domains — every $x$ must be legal for both $f$ and $g$. For the quotient $f/g$ there is one extra restriction: you must also throw out every $x$ where $g(x)=0$.",
              "zh": "组合函数的定义域是两个原定义域的交集——每个 $x$ 必须对 $f$ 和 $g$ 都合法。对商 $f/g$ 还有一条额外限制：必须再排除所有使 $g(x)=0$ 的 $x$。"
            },
            {
              "type": "note",
              "en": "Common mistake: finding the quotient domain by looking only at the final simplified formula. If $f(x)=x^2-1$ and $g(x)=x-1$, then $(f/g)(x)$ simplifies to $x+1$, but $x=1$ is still excluded because $g(1)=0$. Always check the domain before simplifying.",
              "zh": "常见错误：只看化简后的最终公式来确定商的定义域。若 $f(x)=x^2-1$，$g(x)=x-1$，则 $(f/g)(x)$ 化简为 $x+1$，但 $x=1$ 仍须排除，因为 $g(1)=0$。务必在化简之前确定定义域。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Let $f(x)=\\sqrt{x}$ and $g(x)=x-4$. Find $(f/g)(x)$ and its domain.",
                "zh": "设 $f(x)=\\sqrt{x}$，$g(x)=x-4$，求 $(f/g)(x)$ 及其定义域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The quotient is $\\dfrac{f(x)}{g(x)}=\\dfrac{\\sqrt{x}}{x-4}$.",
                  "zh": "商为 $\\dfrac{f(x)}{g(x)}=\\dfrac{\\sqrt{x}}{x-4}$。"
                },
                {
                  "type": "p",
                  "en": "The domain of $f$ requires $x\\ge 0$, and $g$ has all reals. The intersection is $x\\ge 0$. Finally exclude where $g(x)=0$, i.e. $x=4$.",
                  "zh": "$f$ 的定义域要求 $x\\ge 0$，$g$ 为全体实数，交集为 $x\\ge 0$。最后排除 $g(x)=0$ 处，即 $x=4$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{Domain} = [0,4)\\cup(4,\\infty)"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Composition of Functions",
              "zh": "函数的复合"
            },
            {
              "type": "p",
              "en": "Composition feeds the output of one function straight into another. We write $(f\\circ g)(x)=f\\big(g(x)\\big)$, read \"$f$ of $g$ of $x$.\" Here $g$ acts first (the inside function) and $f$ acts on the result (the outside function).",
              "zh": "复合是把一个函数的输出直接送入另一个函数。记作 $(f\\circ g)(x)=f\\big(g(x)\\big)$，读作“$f$ 复合 $g$”。其中 $g$ 先作用（内函数），$f$ 再作用于结果（外函数）。"
            },
            {
              "type": "note",
              "en": "Order matters: $f\\circ g$ and $g\\circ f$ are almost never the same function. Composition is not commutative — always work from the inside out.",
              "zh": "顺序很重要：$f\\circ g$ 与 $g\\circ f$ 几乎从不相等。复合不满足交换律——始终由内向外计算。"
            },
            {
              "type": "p",
              "en": "The domain of $f\\circ g$ is subtle. An input $x$ is legal only if two conditions both hold: $x$ is in the domain of $g$, and the output $g(x)$ is in the domain of $f$. You cannot read this off the simplified formula alone.",
              "zh": "$f\\circ g$ 的定义域较为微妙。输入 $x$ 合法当且仅当同时满足两点：$x$ 在 $g$ 的定义域内，且输出 $g(x)$ 在 $f$ 的定义域内。仅凭化简后的公式无法读出。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Let $f(x)=\\sqrt{x}$ and $g(x)=5-x$. Find $(f\\circ g)(x)$ and its domain.",
                "zh": "设 $f(x)=\\sqrt{x}$，$g(x)=5-x$，求 $(f\\circ g)(x)$ 及其定义域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitute $g$ into $f$: $(f\\circ g)(x)=f(5-x)=\\sqrt{5-x}$.",
                  "zh": "将 $g$ 代入 $f$：$(f\\circ g)(x)=f(5-x)=\\sqrt{5-x}$。"
                },
                {
                  "type": "p",
                  "en": "$g$ accepts all reals, so the binding restriction comes from $f$: the input $5-x$ must be $\\ge 0$, giving $x\\le 5$.",
                  "zh": "$g$ 接受所有实数，故限制来自 $f$：输入 $5-x$ 必须 $\\ge 0$，得 $x\\le 5$。"
                },
                {
                  "type": "math",
                  "tex": "\\text{Domain} = (-\\infty, 5]"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Evaluating Composites from Tables and Graphs",
              "zh": "用表格与图象求复合值"
            },
            {
              "type": "p",
              "en": "You do not need formulas to compose. If a table gives $g(2)=7$ and $f(7)=-1$, then $(f\\circ g)(2)=f(g(2))=f(7)=-1$. From a graph, read the inside value off the inner curve, then use that number as the input on the outer curve.",
              "zh": "不需要公式也能复合。若表格给出 $g(2)=7$ 且 $f(7)=-1$，则 $(f\\circ g)(2)=f(g(2))=f(7)=-1$。看图时，先在内函数曲线上读出内层值，再把这个数作为外函数的输入。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A table gives $f(1)=3,\\ f(3)=1,\\ f(4)=2$ and $g(1)=4,\\ g(2)=1,\\ g(4)=3$. Compute $(f\\circ g)(2)$ and $(g\\circ f)(4)$.",
                "zh": "表格给出 $f(1)=3,\\ f(3)=1,\\ f(4)=2$ 与 $g(1)=4,\\ g(2)=1,\\ g(4)=3$。求 $(f\\circ g)(2)$ 与 $(g\\circ f)(4)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$(f\\circ g)(2)=f(g(2))=f(1)=3$.",
                  "zh": "$(f\\circ g)(2)=f(g(2))=f(1)=3$。"
                },
                {
                  "type": "p",
                  "en": "$(g\\circ f)(4)=g(f(4))=g(2)=1$. Notice the two answers differ — order matters.",
                  "zh": "$(g\\circ f)(4)=g(f(4))=g(2)=1$。注意两个答案不同——顺序很重要。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Decomposing a Function",
              "zh": "函数的分解"
            },
            {
              "type": "p",
              "en": "Reversing the process — writing a complicated function $H$ as $f\\circ g$ — is a direct preview of the chain rule. Look for an \"inside\" piece that sits within an outer operation. For $H(x)=(3x+1)^{5}$, the inside is $g(x)=3x+1$ and the outside is $f(u)=u^{5}$, so $H=f\\circ g$.",
              "zh": "反过来——把复杂函数 $H$ 写成 $f\\circ g$——正是链式法则的预演。寻找位于外层运算内部的“内层”部分。对 $H(x)=(3x+1)^{5}$，内层为 $g(x)=3x+1$，外层为 $f(u)=u^{5}$，于是 $H=f\\circ g$。"
            },
            {
              "type": "note",
              "en": "Calculus preview: to differentiate $(3x+1)^5$ you will use the chain rule — differentiate the outside $u^5\\to 5u^4$, keep the inside, then multiply by the derivative of the inside ($3$). Recognizing the decomposition now makes the chain rule feel automatic later.",
              "zh": "微积分预览：对 $(3x+1)^5$ 求导要用链式法则——先对外层 $u^5\\to 5u^4$ 求导，保留内层，再乘以内层导数（$3$）。现在学会分解，日后链式法则便水到渠成。"
            },
            {
              "type": "h3",
              "en": "Verifying Inverses by Composition",
              "zh": "用复合验证反函数"
            },
            {
              "type": "p",
              "en": "Two functions are inverses exactly when composing them in either order returns the input untouched:",
              "zh": "两个函数互为反函数，当且仅当以任意顺序复合都返回原输入："
            },
            {
              "type": "math",
              "tex": "f\\big(g(x)\\big)=x \\quad\\text{and}\\quad g\\big(f(x)\\big)=x"
            },
            {
              "type": "p",
              "en": "This is the cleanest way to confirm an inverse: you never have to solve an equation, just substitute and simplify. Both compositions must reduce to $x$; checking only one direction is not enough in general.",
              "zh": "这是验证反函数最简洁的方法：无需解方程，只需代入化简。两个方向的复合都必须化为 $x$；一般来说只验一个方向并不充分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4",
                "zh": "例题 4"
              },
              "problem": {
                "en": "Verify that $f(x)=2x-6$ and $g(x)=\\dfrac{x+6}{2}$ are inverses.",
                "zh": "验证 $f(x)=2x-6$ 与 $g(x)=\\dfrac{x+6}{2}$ 互为反函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$f(g(x))=2\\cdot\\dfrac{x+6}{2}-6=(x+6)-6=x.$",
                  "zh": "$f(g(x))=2\\cdot\\dfrac{x+6}{2}-6=(x+6)-6=x.$"
                },
                {
                  "type": "p",
                  "en": "$g(f(x))=\\dfrac{(2x-6)+6}{2}=\\dfrac{2x}{2}=x.$ Both compositions give $x$, so they are inverses.",
                  "zh": "$g(f(x))=\\dfrac{(2x-6)+6}{2}=\\dfrac{2x}{2}=x.$ 两个复合都得到 $x$，故互为反函数。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $f(x)=x^2$ and $g(x)=x+3$, what is $(f\\circ g)(x)$?",
                "zh": "若 $f(x)=x^2$，$g(x)=x+3$，则 $(f\\circ g)(x)$ 是什么？"
              },
              "choices": [
                "$x^2+3$",
                "$(x+3)^2$",
                "$x^2+9$",
                "$x^3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Compose from the inside out: $(f\\circ g)(x)=f(g(x))=f(x+3)=(x+3)^2$. The tempting choice $x^2+3$ is $(g\\circ f)(x)$, the composition in the wrong order.",
                "zh": "由内向外复合：$(f\\circ g)(x)=f(g(x))=f(x+3)=(x+3)^2$。诱人选项 $x^2+3$ 其实是 $(g\\circ f)(x)$，顺序反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $f(x)=3x-1$ and $g(x)=x^2$, compute $(f\\circ g)(2)$. Give an integer.",
                "zh": "已知 $f(x)=3x-1$，$g(x)=x^2$，求 $(f\\circ g)(2)$，答案为整数。"
              },
              "answer": "11",
              "accept": [
                "11.0"
              ],
              "explanation": {
                "en": "Inside first: $g(2)=4$. Then $f(4)=3(4)-1=11$. Reversing the order would give $f(2)=5$ then $g(5)=25$, a different value.",
                "zh": "先算内层：$g(2)=4$。再算 $f(4)=3(4)-1=11$。若顺序颠倒得 $f(2)=5$ 再 $g(5)=25$，结果不同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $f(x)=\\sqrt{x}$ and $g(x)=x-9$, what is the domain of $(f\\circ g)(x)=\\sqrt{x-9}$?",
                "zh": "对 $f(x)=\\sqrt{x}$，$g(x)=x-9$，$(f\\circ g)(x)=\\sqrt{x-9}$ 的定义域是什么？"
              },
              "choices": [
                "All real numbers",
                "$(-\\infty,9]$",
                "$[9,\\infty)$",
                "$[0,\\infty)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The inner output $x-9$ must lie in the domain of $\\sqrt{\\ }$, so $x-9\\ge 0$, giving $x\\ge 9$. Choice $[0,\\infty)$ mistakenly applies the domain of $f$ to $x$ itself instead of to $g(x)$.",
                "zh": "内层输出 $x-9$ 必须在 $\\sqrt{\\ }$ 的定义域内，故 $x-9\\ge 0$，即 $x\\ge 9$。选项 $[0,\\infty)$ 错把 $f$ 的定义域用在了 $x$ 本身而非 $g(x)$ 上。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A table gives $f(0)=2,\\ f(2)=5,\\ f(5)=0$ and $g(0)=5,\\ g(2)=0,\\ g(5)=2$. What is $(g\\circ f)(2)$?",
                "zh": "表格给出 $f(0)=2,\\ f(2)=5,\\ f(5)=0$ 与 $g(0)=5,\\ g(2)=0,\\ g(5)=2$。求 $(g\\circ f)(2)$。"
              },
              "choices": [
                "$1$",
                "$0$",
                "$5$",
                "$2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Work inside out: $f(2)=5$, then $g(5)=2$, so $(g\\circ f)(2)=2$. A common slip is to compute $f(g(2))=f(0)=2$ by luck getting the same number for the wrong reason — but the intended chain is $g$ of $f$.",
                "zh": "由内向外：$f(2)=5$，再 $g(5)=2$，故 $(g\\circ f)(2)=2$。常见失误是算成 $f(g(2))=f(0)=2$，虽然碰巧数值相同，但推理有误——本题要求 $g$ 复合 $f$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The function $H(x)=\\sqrt{4x+7}$ can be written as $f\\circ g$ with outer function $f(u)=\\sqrt{u}$. Give the inside function value $g(3)$ as an integer.",
                "zh": "函数 $H(x)=\\sqrt{4x+7}$ 可写成 $f\\circ g$，外函数为 $f(u)=\\sqrt{u}$。求内函数值 $g(3)$，答案为整数。"
              },
              "answer": "19",
              "accept": [
                "19.0"
              ],
              "explanation": {
                "en": "The inside function is $g(x)=4x+7$, so $g(3)=4(3)+7=19$. Check: $f(19)=\\sqrt{19}$ matches $H(3)=\\sqrt{4\\cdot3+7}=\\sqrt{19}$.",
                "zh": "内函数为 $g(x)=4x+7$，故 $g(3)=4(3)+7=19$。验证：$f(19)=\\sqrt{19}$ 与 $H(3)=\\sqrt{4\\cdot3+7}=\\sqrt{19}$ 一致。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of functions are inverses of each other?",
                "zh": "下列哪一对函数互为反函数？"
              },
              "choices": [
                "$f(x)=5x$ and $g(x)=\\dfrac{x}{5}$",
                "$f(x)=5x$ and $g(x)=5x$",
                "$f(x)=x+5$ and $g(x)=5-x$",
                "$f(x)=x^2$ and $g(x)=\\sqrt{x-1}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Check by composition: $f(g(x))=5\\cdot\\frac{x}{5}=x$ and $g(f(x))=\\frac{5x}{5}=x$, so they are inverses. The pair $x+5$ and $5-x$ is tempting because both involve $5$, but $f(g(x))=(5-x)+5=10-x\\ne x$.",
                "zh": "用复合检验：$f(g(x))=5\\cdot\\frac{x}{5}=x$ 且 $g(f(x))=\\frac{5x}{5}=x$，故互为反函数。$x+5$ 与 $5-x$ 因都含 $5$ 而诱人，但 $f(g(x))=(5-x)+5=10-x\\ne x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x)=x^2+1$ and $g(x)=x-2$. Compute $(f\\circ g)(5)-(g\\circ f)(1)$. Give an integer.",
                "zh": "设 $f(x)=x^2+1$，$g(x)=x-2$，求 $(f\\circ g)(5)-(g\\circ f)(1)$，答案为整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "$(f\\circ g)(5)=f(3)=3^2+1=10$; $(g\\circ f)(1)=g(2)=2-2=0$. The difference is $10-0=10$. Forgetting that composition is not commutative is the usual trap here.",
                "zh": "$(f\\circ g)(5)=f(3)=3^2+1=10$；$(g\\circ f)(1)=g(2)=2-2=0$。差为 $10-0=10$。这里常见陷阱是忘记复合不满足交换律。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A factory's daily cost is $C(u)=8u+200$ dollars for $u$ units, and daily output is $u(t)=15t$ units after $t$ hours. Which function gives cost as a function of hours, and what is the cost after $4$ hours?",
                "zh": "某工厂生产 $u$ 件的日成本为 $C(u)=8u+200$ 美元，运行 $t$ 小时的日产量为 $u(t)=15t$ 件。哪个函数给出成本关于小时数的表达式，运行 $4$ 小时的成本是多少？"
              },
              "choices": [
                "$(C\\circ u)(t)=120t$, and \\$480",
                "$(u\\circ C)(t)=120t+200$, and \\$680",
                "$(C\\circ u)(t)=120t+200$, and \\$680",
                "$(C\\circ u)(t)=23t+200$, and \\$292"
              ],
              "answer": 2,
              "explanation": {
                "en": "Chain output into cost: $C(u(t))=8(15t)+200=120t+200$. At $t=4$: $120(4)+200=680$ dollars. Writing $u\\circ C$ reverses the real-world order — you cannot feed dollars into the output function.",
                "zh": "把产量代入成本：$C(u(t))=8(15t)+200=120t+200$。当 $t=4$：$120(4)+200=680$ 美元。写成 $u\\circ C$ 颠倒了现实顺序——不能把美元送入产量函数。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "polynomial-rational",
      "title": "Unit 2: Polynomial and Rational Functions",
      "titleZh": "第二单元：多项式函数与有理函数",
      "lessons": [
        {
          "id": "polynomial-zeros-multiplicity",
          "title": "Polynomial Zeros and End Behavior",
          "titleZh": "多项式的零点与端点行为",
          "content": [
            {
              "type": "h2",
              "en": "Zeros and Factors",
              "zh": "零点与因式"
            },
            {
              "type": "p",
              "en": "A zero of a polynomial $p(x)$ is a value $c$ with $p(c) = 0$; equivalently, $(x - c)$ is a factor and the graph touches or crosses the $x$-axis at $x = c$. A degree-$n$ polynomial has at most $n$ real zeros, and exactly $n$ zeros if complex numbers and repetitions are counted.",
              "zh": "多项式 $p(x)$ 的零点是使 $p(c) = 0$ 的值 $c$；等价地，$(x - c)$ 是 $p(x)$ 的因式，图象在 $x = c$ 处与 $x$ 轴相切或相交。$n$ 次多项式至多有 $n$ 个实零点；若计入复数零点与重数，则恰好有 $n$ 个。"
            },
            {
              "type": "h2",
              "en": "Multiplicity",
              "zh": "重数"
            },
            {
              "type": "p",
              "en": "The multiplicity of a zero is the exponent of its factor. Multiplicity controls the shape of the graph at that zero: an odd multiplicity means the graph crosses the axis, while an even multiplicity means it touches the axis and bounces back.",
              "zh": "零点的重数是对应因式的指数。重数决定图象在该零点处的形态：奇数重数时图象穿过 $x$ 轴，偶数重数时图象与 $x$ 轴相切后弹回。"
            },
            {
              "type": "note",
              "en": "Memory aid: \"odd crosses, even bounces.\" A multiplicity-3 zero also crosses, but the curve flattens out as it passes through the axis.",
              "zh": "记忆口诀：“奇穿偶回”。重数为 3 的零点同样穿过 $x$ 轴，但曲线经过时会变得平缓。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Describe the behavior of $p(x) = (x - 1)^2 (x + 3)$ at each of its zeros.",
                "zh": "描述 $p(x) = (x - 1)^2 (x + 3)$ 在各零点处的图象行为。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The zeros are $x = 1$ with multiplicity 2 and $x = -3$ with multiplicity 1.",
                  "zh": "零点为 $x = 1$（重数 2）和 $x = -3$（重数 1）。"
                },
                {
                  "type": "p",
                  "en": "At $x = 1$ the multiplicity is even, so the graph touches the axis and turns around. At $x = -3$ the multiplicity is odd, so the graph crosses the axis.",
                  "zh": "在 $x = 1$ 处重数为偶数，图象与 $x$ 轴相切后折返；在 $x = -3$ 处重数为奇数，图象穿过 $x$ 轴。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "End Behavior",
              "zh": "端点行为"
            },
            {
              "type": "p",
              "en": "For large $|x|$, a polynomial behaves like its leading term $a_n x^n$. If $n$ is even, both ends of the graph point the same way (up when $a_n > 0$, down when $a_n < 0$). If $n$ is odd, the ends point in opposite directions.",
              "zh": "当 $|x|$ 很大时，多项式的行为由最高次项 $a_n x^n$ 决定。若 $n$ 为偶数，图象两端方向相同（$a_n > 0$ 时同上，$a_n < 0$ 时同下）；若 $n$ 为奇数，两端方向相反。"
            },
            {
              "type": "math",
              "tex": "\\text{as } x \\to \\pm\\infty, \\quad p(x) \\approx a_n x^n"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Determine the end behavior of $q(x) = -2x^4 + 7x^2 - 5$.",
                "zh": "判断 $q(x) = -2x^4 + 7x^2 - 5$ 的端点行为。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The leading term is $-2x^4$: even degree with a negative coefficient.",
                  "zh": "最高次项为 $-2x^4$：偶数次且系数为负。"
                },
                {
                  "type": "p",
                  "en": "Therefore $q(x) \\to -\\infty$ as $x \\to \\infty$ and also as $x \\to -\\infty$ — both ends point down.",
                  "zh": "因此当 $x \\to \\infty$ 和 $x \\to -\\infty$ 时均有 $q(x) \\to -\\infty$——图象两端都向下。"
                }
              ]
            },
            {
              "type": "p",
              "en": "To find zeros in practice, factor completely: pull out common factors, use grouping or known patterns, and check candidates with the Rational Root Theorem, which says any rational zero of a polynomial with integer coefficients has the form $\\frac{p}{q}$ where $p$ divides the constant term and $q$ divides the leading coefficient.",
              "zh": "实际求零点时应彻底因式分解：先提公因式，再用分组分解或常见公式，并可用有理根定理筛选候选值——整系数多项式的任何有理零点都形如 $\\frac{p}{q}$，其中 $p$ 整除常数项，$q$ 整除最高次项系数。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What are the zeros of $p(x) = x^2 - 5x + 6$?",
                "zh": "$p(x) = x^2 - 5x + 6$ 的零点是什么？"
              },
              "choices": [
                "$x = -2$ and $x = -3$",
                "$x = 2$ and $x = 3$",
                "$x = 1$ and $x = 6$",
                "$x = 5$ and $x = 6$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Factor: $x^2 - 5x + 6 = (x - 2)(x - 3)$ since $2 \\cdot 3 = 6$ and $2 + 3 = 5$. Setting each factor to zero gives $x = 2$ and $x = 3$.",
                "zh": "因式分解：$x^2 - 5x + 6 = (x - 2)(x - 3)$，因为 $2 \\cdot 3 = 6$ 且 $2 + 3 = 5$。令各因式为零得 $x = 2$ 和 $x = 3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the multiplicity of the zero $x = -2$ in $p(x) = (x + 2)^3 (x - 5)$? Give an integer.",
                "zh": "$p(x) = (x + 2)^3 (x - 5)$ 中零点 $x = -2$ 的重数是多少？答案为整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "The factor producing $x = -2$ is $(x + 2)$, and it appears with exponent 3, so the multiplicity is 3. Because 3 is odd, the graph crosses the axis there (with a flattened shape).",
                "zh": "产生零点 $x = -2$ 的因式是 $(x + 2)$，其指数为 3，故重数为 3。由于 3 是奇数，图象在该处穿过 $x$ 轴（且穿过时较平缓）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At a zero of even multiplicity, the graph of a polynomial:",
                "zh": "在偶数重数的零点处，多项式的图象会："
              },
              "choices": [
                "Has a vertical asymptote",
                "Crosses the $x$-axis",
                "Touches the $x$-axis and turns around",
                "Has a hole"
              ],
              "answer": 2,
              "explanation": {
                "en": "Near an even-multiplicity zero the factor is squared (or a higher even power), so the polynomial does not change sign — the graph bounces off the axis. Asymptotes and holes belong to rational functions, not polynomials.",
                "zh": "在偶数重数零点附近，因式为平方（或更高偶次幂），多项式不变号——图象在 $x$ 轴处弹回。渐近线和“洞”属于有理函数，多项式没有。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which describes the end behavior of $p(x) = 3x^5 - x + 2$?",
                "zh": "下列哪项描述了 $p(x) = 3x^5 - x + 2$ 的端点行为？"
              },
              "choices": [
                "Falls on both ends",
                "Rises to the left, falls to the right",
                "Rises on both ends",
                "Falls to the left, rises to the right"
              ],
              "answer": 3,
              "explanation": {
                "en": "The leading term $3x^5$ has odd degree and positive coefficient, so $p(x) \\to -\\infty$ as $x \\to -\\infty$ and $p(x) \\to \\infty$ as $x \\to \\infty$: down-left, up-right.",
                "zh": "最高次项 $3x^5$ 次数为奇、系数为正，故 $x \\to -\\infty$ 时 $p(x) \\to -\\infty$，$x \\to \\infty$ 时 $p(x) \\to \\infty$：左端向下，右端向上。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A polynomial has zeros $x = 0$ (multiplicity 2), $x = 4$ (multiplicity 1), and $x = -1$ (multiplicity 3). What is the smallest possible degree of the polynomial? Give an integer.",
                "zh": "某多项式的零点为 $x = 0$（重数 2）、$x = 4$（重数 1）、$x = -1$（重数 3）。该多项式的最小可能次数是多少？答案为整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "The degree must be at least the sum of the multiplicities: $2 + 1 + 3 = 6$. A polynomial such as $x^2(x-4)(x+1)^3$ achieves exactly degree 6.",
                "zh": "次数至少等于各重数之和：$2 + 1 + 3 = 6$。例如 $x^2(x-4)(x+1)^3$ 恰好是 6 次多项式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "By the Rational Root Theorem, which of the following could be a rational zero of $2x^3 + x^2 - 7x - 6$?",
                "zh": "根据有理根定理，下列哪个值可能是 $2x^3 + x^2 - 7x - 6$ 的有理零点？"
              },
              "choices": [
                "$\\frac{3}{2}$",
                "$\\frac{2}{3}$",
                "$\\frac{5}{2}$",
                "$4$ only"
              ],
              "answer": 0,
              "explanation": {
                "en": "Candidates are $\\frac{p}{q}$ with $p \\mid 6$ (so $p \\in \\{1,2,3,6\\}$) and $q \\mid 2$ (so $q \\in \\{1,2\\}$). $\\frac{3}{2}$ fits this pattern; $\\frac{2}{3}$ and $\\frac{5}{2}$ do not since $3 \\nmid 2$ and $5 \\nmid 6$. (In fact $\\frac{3}{2}$ is not required to be an actual zero — the theorem only lists candidates, and here $2$ is a true zero.)",
                "zh": "候选值形如 $\\frac{p}{q}$，其中 $p \\mid 6$（$p \\in \\{1,2,3,6\\}$），$q \\mid 2$（$q \\in \\{1,2\\}$）。$\\frac{3}{2}$ 符合此形式；$\\frac{2}{3}$ 与 $\\frac{5}{2}$ 不符合，因为 $3 \\nmid 2$、$5 \\nmid 6$。（注意定理只给出候选值，不保证一定是零点；本题中 $2$ 才是真正的零点。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the sum of all zeros of $p(x) = x(x - 3)(x + 7)$. Give an integer.",
                "zh": "求 $p(x) = x(x - 3)(x + 7)$ 所有零点之和，答案为整数。"
              },
              "answer": "-4",
              "accept": [
                "-4.0"
              ],
              "explanation": {
                "en": "The zeros come directly from the factors: $x = 0$, $x = 3$, and $x = -7$. Their sum is $0 + 3 + (-7) = -4$.",
                "zh": "零点可直接由因式读出：$x = 0$、$x = 3$、$x = -7$，其和为 $0 + 3 + (-7) = -4$。"
              }
            }
          ]
        },
        {
          "id": "rational-functions-inequalities",
          "title": "Rational Functions, Asymptotes, and Inequalities",
          "titleZh": "有理函数、渐近线与不等式",
          "content": [
            {
              "type": "h2",
              "en": "Rational Functions",
              "zh": "有理函数"
            },
            {
              "type": "p",
              "en": "A rational function is a ratio of two polynomials, $r(x) = \\dfrac{p(x)}{q(x)}$. Its most distinctive features are asymptotes: lines the graph approaches but (usually) never reaches.",
              "zh": "有理函数是两个多项式之比 $r(x) = \\dfrac{p(x)}{q(x)}$。它最显著的特征是渐近线：图象无限接近但（通常）永不到达的直线。"
            },
            {
              "type": "h3",
              "en": "Vertical Asymptotes and Holes",
              "zh": "垂直渐近线与“洞”"
            },
            {
              "type": "p",
              "en": "Zeros of the denominator that do not cancel with the numerator produce vertical asymptotes. If a factor cancels, the graph instead has a hole (a single missing point) at that $x$-value.",
              "zh": "分母的零点若不能与分子约去，就产生垂直渐近线；若因式可以约去，则图象在该 $x$ 处出现一个“洞”（缺失的孤立点）。"
            },
            {
              "type": "h3",
              "en": "Horizontal Asymptotes",
              "zh": "水平渐近线"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If the degree of the numerator is less than the degree of the denominator, the horizontal asymptote is $y = 0$.",
                  "zh": "若分子次数小于分母次数，水平渐近线为 $y = 0$。"
                },
                {
                  "en": "If the degrees are equal, the asymptote is $y = \\dfrac{\\text{leading coeff. of } p}{\\text{leading coeff. of } q}$.",
                  "zh": "若次数相等，渐近线为 $y = \\dfrac{p\\text{ 的最高次项系数}}{q\\text{ 的最高次项系数}}$。"
                },
                {
                  "en": "If the numerator degree is larger, there is no horizontal asymptote (one degree larger gives a slant asymptote).",
                  "zh": "若分子次数更高，则没有水平渐近线（恰好高一次时出现斜渐近线）。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Find all asymptotes of $r(x) = \\dfrac{2x^2 + 1}{x^2 - 4}$.",
                "zh": "求 $r(x) = \\dfrac{2x^2 + 1}{x^2 - 4}$ 的所有渐近线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The denominator factors as $(x-2)(x+2)$ and shares no factor with the numerator, so there are vertical asymptotes at $x = 2$ and $x = -2$.",
                  "zh": "分母分解为 $(x-2)(x+2)$，与分子无公因式，故垂直渐近线为 $x = 2$ 和 $x = -2$。"
                },
                {
                  "type": "p",
                  "en": "The degrees are equal (both 2), so the horizontal asymptote is the ratio of leading coefficients: $y = \\dfrac{2}{1} = 2$.",
                  "zh": "分子分母次数相等（均为 2），水平渐近线为最高次项系数之比：$y = \\dfrac{2}{1} = 2$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Polynomial and Rational Inequalities",
              "zh": "多项式与有理不等式"
            },
            {
              "type": "p",
              "en": "To solve an inequality like $\\dfrac{p(x)}{q(x)} > 0$, move everything to one side, find all zeros of the numerator and denominator, mark them on a number line, and test the sign of the expression in each interval. The expression can only change sign at these critical values.",
              "zh": "解形如 $\\dfrac{p(x)}{q(x)} > 0$ 的不等式时：把所有项移到一边，求出分子和分母的全部零点，把它们标在数轴上，再在每个区间内测试表达式的符号。表达式只可能在这些临界值处变号。"
            },
            {
              "type": "note",
              "en": "Zeros of the denominator are never included in the solution set, even when the inequality uses $\\ge$ or $\\le$ — the expression is undefined there.",
              "zh": "分母的零点永远不能纳入解集，即使不等式是 $\\ge$ 或 $\\le$——表达式在这些点处无定义。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Solve $\\dfrac{x - 1}{x + 2} \\le 0$.",
                "zh": "解不等式 $\\dfrac{x - 1}{x + 2} \\le 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Critical values: $x = 1$ (numerator zero) and $x = -2$ (denominator zero). Test the intervals: for $x < -2$ the expression is positive; for $-2 < x < 1$ it is negative; for $x > 1$ it is positive.",
                  "zh": "临界值：$x = 1$（分子零点）和 $x = -2$（分母零点）。区间测试：$x < -2$ 时表达式为正；$-2 < x < 1$ 时为负；$x > 1$ 时为正。"
                },
                {
                  "type": "p",
                  "en": "We want $\\le 0$: include $x = 1$ (where the expression equals 0) but exclude $x = -2$ (undefined). Solution: $(-2, 1]$.",
                  "zh": "要求 $\\le 0$：包含 $x = 1$（表达式为 0），排除 $x = -2$（无定义）。解集为 $(-2, 1]$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Where is the vertical asymptote of $r(x) = \\dfrac{3}{x - 4}$?",
                "zh": "$r(x) = \\dfrac{3}{x - 4}$ 的垂直渐近线在哪里？"
              },
              "choices": [
                "$x = -4$",
                "$x = 4$",
                "$y = 3$",
                "$x = 3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A vertical asymptote occurs where the denominator is zero and does not cancel: $x - 4 = 0$ gives $x = 4$. The line $y = 0$ (not $y = 3$) is the horizontal asymptote.",
                "zh": "垂直渐近线出现在分母为零且不可约去之处：$x - 4 = 0$ 得 $x = 4$。水平渐近线是 $y = 0$（不是 $y = 3$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The horizontal asymptote of $r(x) = \\dfrac{6x^2 - x}{2x^2 + 5}$ is $y = c$. Give $c$ as an integer.",
                "zh": "$r(x) = \\dfrac{6x^2 - x}{2x^2 + 5}$ 的水平渐近线为 $y = c$，请以整数形式给出 $c$。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Numerator and denominator both have degree 2, so the asymptote is the ratio of leading coefficients: $c = \\dfrac{6}{2} = 3$.",
                "zh": "分子与分母次数均为 2，渐近线等于最高次项系数之比：$c = \\dfrac{6}{2} = 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $r(x) = \\dfrac{(x-3)(x+1)}{x-3}$ has:",
                "zh": "$r(x) = \\dfrac{(x-3)(x+1)}{x-3}$ 的图象具有："
              },
              "choices": [
                "A hole at $x = -1$",
                "A vertical asymptote at $x = 3$",
                "A hole at $x = 3$",
                "A vertical asymptote at $x = -1$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The factor $(x - 3)$ cancels, so the graph is the line $y = x + 1$ with a single missing point at $x = 3$ — a hole, not an asymptote. Cancelled factors give holes; uncancelled denominator zeros give asymptotes.",
                "zh": "因式 $(x - 3)$ 可以约去，图象就是直线 $y = x + 1$ 在 $x = 3$ 处缺一个点——是“洞”而不是渐近线。可约去的因式产生洞，不可约去的分母零点才产生渐近线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the horizontal asymptote of $r(x) = \\dfrac{5x + 1}{x^2 + 3}$?",
                "zh": "$r(x) = \\dfrac{5x + 1}{x^2 + 3}$ 的水平渐近线是什么？"
              },
              "choices": [
                "There is none",
                "$y = 5$",
                "$y = \\frac{5}{3}$",
                "$y = 0$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The numerator has degree 1 and the denominator degree 2. When the bottom grows faster than the top, the fraction shrinks toward zero, so $y = 0$ is the horizontal asymptote.",
                "zh": "分子为 1 次，分母为 2 次。当分母增长快于分子时，分式趋于零，故水平渐近线为 $y = 0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the solution of $(x - 2)(x + 5) > 0$?",
                "zh": "不等式 $(x - 2)(x + 5) > 0$ 的解集是什么？"
              },
              "choices": [
                "$x < -5$ or $x > 2$",
                "$-5 < x < 2$",
                "$x > 2$ only",
                "$x < -5$ only"
              ],
              "answer": 0,
              "explanation": {
                "en": "Critical values are $x = -5$ and $x = 2$. Testing intervals: at $x = -6$ the product is $(-8)(-1) > 0$; at $x = 0$ it is $(-2)(5) < 0$; at $x = 3$ it is $(1)(8) > 0$. The product is positive on the outer intervals.",
                "zh": "临界值为 $x = -5$ 和 $x = 2$。区间测试：$x = -6$ 时乘积 $(-8)(-1) > 0$；$x = 0$ 时 $(-2)(5) < 0$；$x = 3$ 时 $(1)(8) > 0$。乘积在两个外侧区间为正。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The solution of $\\dfrac{x + 3}{x - 1} \\ge 0$ is $(-\\infty, a] \\cup (b, \\infty)$. Give $b$ as an integer.",
                "zh": "不等式 $\\dfrac{x + 3}{x - 1} \\ge 0$ 的解集为 $(-\\infty, a] \\cup (b, \\infty)$，请以整数形式给出 $b$。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "Critical values: $x = -3$ (numerator) and $x = 1$ (denominator). The expression is positive outside $[-3, 1]$ and negative between. We include $x = -3$ (value 0) but must exclude $x = 1$ where the fraction is undefined, so the right piece is the open interval $(1, \\infty)$ and $b = 1$.",
                "zh": "临界值：$x = -3$（分子）与 $x = 1$（分母）。表达式在 $[-3, 1]$ 之外为正、之间为负。可包含 $x = -3$（值为 0），但必须排除使分式无定义的 $x = 1$，故右侧为开区间 $(1, \\infty)$，$b = 1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many vertical asymptotes does $r(x) = \\dfrac{x + 1}{x^3 - 9x}$ have? Give an integer.",
                "zh": "$r(x) = \\dfrac{x + 1}{x^3 - 9x}$ 有几条垂直渐近线？答案为整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Factor the denominator: $x^3 - 9x = x(x-3)(x+3)$, giving zeros $0, 3, -3$. None of these cancels with the numerator $x + 1$, so all three are vertical asymptotes.",
                "zh": "分母分解：$x^3 - 9x = x(x-3)(x+3)$，零点为 $0, 3, -3$。它们都不能与分子 $x + 1$ 约去，故三条垂直渐近线全部保留。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "exponential-logarithmic",
      "title": "Unit 3: Exponential and Logarithmic Functions",
      "titleZh": "第三单元：指数函数与对数函数",
      "lessons": [
        {
          "id": "exponential-functions-models",
          "title": "Exponential Functions and Models",
          "titleZh": "指数函数及其模型",
          "content": [
            {
              "type": "h2",
              "en": "The Exponential Function",
              "zh": "指数函数"
            },
            {
              "type": "p",
              "en": "An exponential function has the form $f(x) = a \\cdot b^x$ with $a \\ne 0$, $b > 0$, and $b \\ne 1$. The starting value is $a = f(0)$, and $b$ is the growth factor: each time $x$ increases by 1, the output is multiplied by $b$. If $b > 1$ the function grows; if $0 < b < 1$ it decays.",
              "zh": "指数函数形如 $f(x) = a \\cdot b^x$，其中 $a \\ne 0$、$b > 0$ 且 $b \\ne 1$。初始值为 $a = f(0)$，$b$ 是增长因子：$x$ 每增加 1，输出就乘以 $b$。当 $b > 1$ 时函数增长，当 $0 < b < 1$ 时函数衰减。"
            },
            {
              "type": "p",
              "en": "Every exponential graph of this form has horizontal asymptote $y = 0$, passes through $(0, a)$, and never touches the $x$-axis.",
              "zh": "这种形式的指数函数图象都以 $y = 0$ 为水平渐近线，经过点 $(0, a)$，且永不触及 $x$ 轴。"
            },
            {
              "type": "h2",
              "en": "Percent Growth and Decay",
              "zh": "百分比增长与衰减"
            },
            {
              "type": "p",
              "en": "A quantity growing at rate $r$ per period follows $A(t) = A_0 (1 + r)^t$; a quantity decaying at rate $r$ follows $A(t) = A_0 (1 - r)^t$. For example, 3% annual growth means $b = 1.03$.",
              "zh": "每期按比率 $r$ 增长的量满足 $A(t) = A_0 (1 + r)^t$；按比率 $r$ 衰减的量满足 $A(t) = A_0 (1 - r)^t$。例如每年增长 3% 对应 $b = 1.03$。"
            },
            {
              "type": "note",
              "en": "The base $b$ is a factor, not a rate: growth of 25% gives $b = 1.25$, and decay of 25% gives $b = 0.75$. Writing $b = 0.25$ for \"25% decay\" is the classic mistake.",
              "zh": "底数 $b$ 是因子而不是比率：增长 25% 对应 $b = 1.25$，衰减 25% 对应 $b = 0.75$。把“衰减 25%”写成 $b = 0.25$ 是最典型的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "A culture starts with 500 bacteria and doubles every hour. Write a model and find the population after 4 hours.",
                "zh": "某培养皿最初有 500 个细菌，每小时数量翻倍。写出模型并求 4 小时后的数量。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Doubling means growth factor 2, so $P(t) = 500 \\cdot 2^t$ with $t$ in hours.",
                  "zh": "翻倍意味着增长因子为 2，故模型为 $P(t) = 500 \\cdot 2^t$（$t$ 以小时计）。"
                },
                {
                  "type": "p",
                  "en": "After 4 hours: $P(4) = 500 \\cdot 2^4 = 500 \\cdot 16 = 8000$ bacteria.",
                  "zh": "4 小时后：$P(4) = 500 \\cdot 2^4 = 500 \\cdot 16 = 8000$ 个细菌。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Natural Base $e$",
              "zh": "自然底数 $e$"
            },
            {
              "type": "p",
              "en": "The number $e \\approx 2.71828$ arises from compounding interest more and more frequently. Compounding $n$ times per year gives $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$; letting $n \\to \\infty$ gives continuous compounding:",
              "zh": "数 $e \\approx 2.71828$ 来源于复利计息频率不断提高的极限。每年计息 $n$ 次时 $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$；令 $n \\to \\infty$ 得到连续复利公式："
            },
            {
              "type": "math",
              "tex": "A = P e^{rt}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "\\$1000 is invested at 5% annual interest, compounded continuously. What is the balance after 10 years?",
                "zh": "1000 美元以 5% 的年利率连续复利投资，10 年后余额是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use $A = Pe^{rt}$ with $P = 1000$, $r = 0.05$, $t = 10$: $A = 1000\\, e^{0.5}$.",
                  "zh": "用 $A = Pe^{rt}$，其中 $P = 1000$、$r = 0.05$、$t = 10$：$A = 1000\\, e^{0.5}$。"
                },
                {
                  "type": "p",
                  "en": "Since $e^{0.5} \\approx 1.6487$, the balance is about \\$1648.72. Note this beats annual compounding, which would give $1000(1.05)^{10} \\approx \\$1628.89$.",
                  "zh": "因为 $e^{0.5} \\approx 1.6487$，余额约为 1648.72 美元。这比每年复利的 $1000(1.05)^{10} \\approx 1628.89$ 美元更多。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which function represents exponential decay?",
                "zh": "下列哪个函数表示指数衰减？"
              },
              "choices": [
                "$f(x) = 5(1.2)^x$",
                "$f(x) = 5(0.8)^x$",
                "$f(x) = 0.5 x^2$",
                "$f(x) = -5(2)^x$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Decay requires a base strictly between 0 and 1, so $(0.8)^x$ decays. $(1.2)^x$ grows, $0.5x^2$ is a polynomial, and $-5(2)^x$ has a growing magnitude with base 2.",
                "zh": "指数衰减要求底数严格介于 0 与 1 之间，故 $(0.8)^x$ 衰减。$(1.2)^x$ 是增长，$0.5x^2$ 是多项式，$-5(2)^x$ 的底数为 2，其绝对值在增长。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = 3 \\cdot 2^x$, find $f(5)$. Give an integer.",
                "zh": "若 $f(x) = 3 \\cdot 2^x$，求 $f(5)$，答案为整数。"
              },
              "answer": "96",
              "accept": [
                "96.0"
              ],
              "explanation": {
                "en": "$f(5) = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$. Evaluate the power first — do not multiply 3 by 2 before raising to the 5th power.",
                "zh": "$f(5) = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$。先算幂再乘系数——不要先把 3 与 2 相乘再取 5 次方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A car worth \\$20{,}000 loses 15% of its value each year. Which model gives its value after $t$ years?",
                "zh": "一辆价值 20000 美元的汽车每年贬值 15%。下列哪个模型给出 $t$ 年后的价值？"
              },
              "choices": [
                "$V(t) = 20000(1.15)^t$",
                "$V(t) = 20000(0.15)^t$",
                "$V(t) = 20000(0.85)^t$",
                "$V(t) = 20000 - 0.15t$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Losing 15% means keeping 85%, so the yearly factor is $1 - 0.15 = 0.85$. Using $0.15$ would mean losing 85% each year, and the linear model does not describe percentage change.",
                "zh": "每年损失 15% 意味着保留 85%，年因子为 $1 - 0.15 = 0.85$。若用 $0.15$ 则表示每年损失 85%；线性模型无法描述按百分比的变化。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A population of 800 doubles every 3 years. What is the population after 9 years? Give an integer.",
                "zh": "某种群数量为 800，每 3 年翻一倍。9 年后数量是多少？答案为整数。"
              },
              "answer": "6400",
              "accept": [
                "6400.0",
                "6,400"
              ],
              "explanation": {
                "en": "In 9 years there are $9 \\div 3 = 3$ doubling periods, so the population is $800 \\cdot 2^3 = 800 \\cdot 8 = 6400$. Equivalently, $P(t) = 800 \\cdot 2^{t/3}$.",
                "zh": "9 年含 $9 \\div 3 = 3$ 个倍增周期，数量为 $800 \\cdot 2^3 = 800 \\cdot 8 = 6400$。等价模型为 $P(t) = 800 \\cdot 2^{t/3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the horizontal asymptote of $f(x) = 4^x + 2$?",
                "zh": "$f(x) = 4^x + 2$ 的水平渐近线是什么？"
              },
              "choices": [
                "$x = 2$",
                "$y = 0$",
                "$y = 4$",
                "$y = 2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The parent graph $4^x$ has asymptote $y = 0$; adding 2 shifts the whole graph, including its asymptote, up to $y = 2$.",
                "zh": "母函数 $4^x$ 的渐近线为 $y = 0$；加 2 使整个图象连同渐近线一起上移，变为 $y = 2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $2^x = \\dfrac{1}{8}$ for $x$. Give an integer.",
                "zh": "解方程 $2^x = \\dfrac{1}{8}$，$x$ 的值为整数。"
              },
              "answer": "-3",
              "accept": [
                "-3.0"
              ],
              "explanation": {
                "en": "Write both sides with base 2: $\\frac{1}{8} = \\frac{1}{2^3} = 2^{-3}$. Equal bases force equal exponents, so $x = -3$.",
                "zh": "两边化为以 2 为底：$\\frac{1}{8} = \\frac{1}{2^3} = 2^{-3}$。底数相同则指数相等，故 $x = -3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Money grows under continuous compounding according to $A = Pe^{rt}$. With $P = 2000$, $r = 0.06$, and $t = 5$, the balance is closest to:",
                "zh": "连续复利公式为 $A = Pe^{rt}$。当 $P = 2000$、$r = 0.06$、$t = 5$ 时，余额最接近："
              },
              "choices": [
                "\\$2699.72",
                "\\$2600.00",
                "\\$3644.24",
                "\\$2060.00"
              ],
              "answer": 0,
              "explanation": {
                "en": "$A = 2000e^{0.06 \\cdot 5} = 2000e^{0.3}$. Since $e^{0.3} \\approx 1.34986$, $A \\approx 2699.72$. Choice B is simple interest thinking; choice C uses $e^{0.6}$ by mistake.",
                "zh": "$A = 2000e^{0.06 \\cdot 5} = 2000e^{0.3}$。由 $e^{0.3} \\approx 1.34986$ 得 $A \\approx 2699.72$。选项 B 是单利思路，选项 C 误用了 $e^{0.6}$。"
              }
            }
          ]
        },
        {
          "id": "logarithms-solving-equations",
          "title": "Logarithms and Solving Equations",
          "titleZh": "对数与解方程",
          "content": [
            {
              "type": "h2",
              "en": "What a Logarithm Is",
              "zh": "对数是什么"
            },
            {
              "type": "p",
              "en": "A logarithm answers the question \"what exponent?\" The statement $\\log_b x = y$ means exactly $b^y = x$. For instance, $\\log_2 8 = 3$ because $2^3 = 8$. The logarithm function $\\log_b x$ is the inverse of the exponential $b^x$, so its domain is $x > 0$.",
              "zh": "对数回答的问题是“指数是多少？”。$\\log_b x = y$ 的含义恰好是 $b^y = x$。例如 $\\log_2 8 = 3$，因为 $2^3 = 8$。对数函数 $\\log_b x$ 是指数函数 $b^x$ 的反函数，因此定义域为 $x > 0$。"
            },
            {
              "type": "p",
              "en": "Two bases dominate: the common log $\\log x$ (base 10) and the natural log $\\ln x$ (base $e$). Natural log is the standard tool in calculus and in continuous-growth problems.",
              "zh": "两个底数最常用：常用对数 $\\log x$（以 10 为底）和自然对数 $\\ln x$（以 $e$ 为底）。自然对数是微积分与连续增长问题中的标准工具。"
            },
            {
              "type": "h2",
              "en": "Properties of Logarithms",
              "zh": "对数的运算性质"
            },
            {
              "type": "math",
              "tex": "\\log_b(MN) = \\log_b M + \\log_b N \\qquad \\log_b\\frac{M}{N} = \\log_b M - \\log_b N \\qquad \\log_b(M^k) = k \\log_b M"
            },
            {
              "type": "p",
              "en": "These follow directly from exponent rules, since logs are exponents. The change-of-base formula $\\log_b x = \\dfrac{\\ln x}{\\ln b}$ lets a calculator evaluate any base.",
              "zh": "这些性质直接来自指数运算法则，因为对数本质上就是指数。换底公式 $\\log_b x = \\dfrac{\\ln x}{\\ln b}$ 使计算器可以求任意底数的对数。"
            },
            {
              "type": "note",
              "en": "There is no rule for $\\log_b(M + N)$ — the log of a sum does not split. Also, $(\\log M)(\\log N)$ and $\\frac{\\log M}{\\log N}$ are not covered by the product and quotient rules.",
              "zh": "$\\log_b(M + N)$ 没有化简法则——和的对数不能拆开。同样，$(\\log M)(\\log N)$ 与 $\\frac{\\log M}{\\log N}$ 也不适用积与商的法则。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Expand $\\log_2 \\dfrac{8x^3}{y}$ using log properties.",
                "zh": "用对数性质展开 $\\log_2 \\dfrac{8x^3}{y}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Split the quotient and product: $\\log_2 8 + \\log_2 x^3 - \\log_2 y$.",
                  "zh": "先拆商与积：$\\log_2 8 + \\log_2 x^3 - \\log_2 y$。"
                },
                {
                  "type": "p",
                  "en": "Then apply the power rule and evaluate $\\log_2 8 = 3$: the result is $3 + 3\\log_2 x - \\log_2 y$.",
                  "zh": "再用幂法则并计算 $\\log_2 8 = 3$：结果为 $3 + 3\\log_2 x - \\log_2 y$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Solving Exponential and Log Equations",
              "zh": "解指数方程与对数方程"
            },
            {
              "type": "p",
              "en": "To solve an exponential equation, isolate the exponential expression, then take a logarithm of both sides. To solve a log equation, combine logs into one, rewrite in exponential form, and always check answers against the domain — logs of negative numbers or zero are undefined.",
              "zh": "解指数方程：先把指数式孤立出来，再对两边取对数。解对数方程：先把对数合并为一个，改写成指数形式，最后务必检验定义域——负数和零没有对数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Solve $5e^{2t} = 40$ for $t$, exactly and to two decimal places.",
                "zh": "解方程 $5e^{2t} = 40$，给出精确值并保留两位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Isolate the exponential: $e^{2t} = 8$. Take the natural log of both sides: $2t = \\ln 8$.",
                  "zh": "孤立指数式：$e^{2t} = 8$。两边取自然对数：$2t = \\ln 8$。"
                },
                {
                  "type": "p",
                  "en": "So $t = \\dfrac{\\ln 8}{2} \\approx \\dfrac{2.0794}{2} \\approx 1.04$.",
                  "zh": "故 $t = \\dfrac{\\ln 8}{2} \\approx \\dfrac{2.0794}{2} \\approx 1.04$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\log_3 81$. Give an integer.",
                "zh": "求 $\\log_3 81$ 的值，答案为整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "Ask: 3 to what power gives 81? Since $3^4 = 81$, the answer is 4.",
                "zh": "问题是：3 的几次方等于 81？因为 $3^4 = 81$，所以答案是 4。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The equation $\\log_5 x = 2$ is equivalent to:",
                "zh": "方程 $\\log_5 x = 2$ 等价于："
              },
              "choices": [
                "$x = 2^5$",
                "$x = 5^2$",
                "$5 = x^2$",
                "$x = \\frac{5}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "By definition, $\\log_b x = y$ means $b^y = x$. Here the base is 5 and the exponent is 2, so $x = 5^2 = 25$.",
                "zh": "按定义，$\\log_b x = y$ 即 $b^y = x$。这里底数是 5、指数是 2，所以 $x = 5^2 = 25$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals $\\ln(x^2 y)$ for positive $x$ and $y$?",
                "zh": "当 $x, y$ 为正数时，下列哪个表达式等于 $\\ln(x^2 y)$？"
              },
              "choices": [
                "$\\ln x^2 \\cdot \\ln y$",
                "$2(\\ln x + \\ln y)$",
                "$2\\ln x + \\ln y$",
                "$2\\ln x \\cdot \\ln y$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Product rule first: $\\ln(x^2 y) = \\ln x^2 + \\ln y$. Then the power rule turns $\\ln x^2$ into $2\\ln x$. The factor 2 applies only to $\\ln x$, not to $\\ln y$.",
                "zh": "先用积法则：$\\ln(x^2 y) = \\ln x^2 + \\ln y$；再用幂法则把 $\\ln x^2$ 化为 $2\\ln x$。系数 2 只作用于 $\\ln x$，与 $\\ln y$ 无关。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\ln e^7$. Give an integer.",
                "zh": "求 $\\ln e^7$ 的值，答案为整数。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "$\\ln$ and $e^x$ are inverse functions, so $\\ln e^7 = 7$ directly. Equivalently, use the power rule: $\\ln e^7 = 7 \\ln e = 7 \\cdot 1$.",
                "zh": "$\\ln$ 与 $e^x$ 互为反函数，故 $\\ln e^7 = 7$。也可用幂法则：$\\ln e^7 = 7\\ln e = 7 \\cdot 1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\log_2(x - 1) = 3$ for $x$. Give an integer.",
                "zh": "解方程 $\\log_2(x - 1) = 3$，$x$ 的值为整数。"
              },
              "answer": "9",
              "accept": [
                "9.0"
              ],
              "explanation": {
                "en": "Rewrite in exponential form: $x - 1 = 2^3 = 8$, so $x = 9$. Check the domain: $x - 1 = 8 > 0$, so the solution is valid.",
                "zh": "改写为指数形式：$x - 1 = 2^3 = 8$，故 $x = 9$。检验定义域：$x - 1 = 8 > 0$，解有效。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The exact solution of $3^x = 20$ is:",
                "zh": "方程 $3^x = 20$ 的精确解是："
              },
              "choices": [
                "$x = \\dfrac{\\ln 20}{\\ln 3}$",
                "$x = \\dfrac{\\ln 3}{\\ln 20}$",
                "$x = \\ln\\dfrac{20}{3}$",
                "$x = \\dfrac{20}{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Take $\\ln$ of both sides: $x \\ln 3 = \\ln 20$, so $x = \\frac{\\ln 20}{\\ln 3} \\approx 2.73$. Choice C confuses the quotient of logs with the log of a quotient — they are different.",
                "zh": "两边取 $\\ln$：$x \\ln 3 = \\ln 20$，故 $x = \\frac{\\ln 20}{\\ln 3} \\approx 2.73$。选项 C 把“对数之商”与“商的对数”混为一谈，二者并不相等。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\log x + \\log(x - 3) = 1$ (base 10).",
                "zh": "解方程 $\\log x + \\log(x - 3) = 1$（以 10 为底）。"
              },
              "choices": [
                "$x = 5$",
                "$x = 5$ and $x = -2$",
                "$x = -2$",
                "$x = 13$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Combine: $\\log[x(x-3)] = 1$, so $x^2 - 3x = 10$, giving $x^2 - 3x - 10 = 0$ and $x = 5$ or $x = -2$. But $x = -2$ makes $\\log x$ undefined, so it must be rejected. Only $x = 5$ works.",
                "zh": "合并对数：$\\log[x(x-3)] = 1$，即 $x^2 - 3x = 10$，解得 $x = 5$ 或 $x = -2$。但 $x = -2$ 使 $\\log x$ 无定义，必须舍去，只有 $x = 5$ 成立。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "trigonometric-functions",
      "title": "Unit 4: Trigonometric Functions",
      "titleZh": "第四单元：三角函数",
      "lessons": [
        {
          "id": "radians-unit-circle",
          "title": "Radians and the Unit Circle",
          "titleZh": "弧度制与单位圆",
          "content": [
            {
              "type": "h2",
              "en": "Radian Measure",
              "zh": "弧度制"
            },
            {
              "type": "p",
              "en": "A radian measures an angle by arc length: one radian is the angle whose arc on a unit circle has length 1. Since a full circle has circumference $2\\pi$, a full rotation is $2\\pi$ radians, so $180^\\circ = \\pi$ radians. To convert, multiply by $\\frac{\\pi}{180}$ (degrees to radians) or $\\frac{180}{\\pi}$ (radians to degrees).",
              "zh": "弧度用弧长来度量角：1 弧度是单位圆上弧长为 1 所对的圆心角。因为整个圆的周长是 $2\\pi$，一整圈就是 $2\\pi$ 弧度，即 $180^\\circ = \\pi$ 弧度。换算时，角度化弧度乘 $\\frac{\\pi}{180}$，弧度化角度乘 $\\frac{180}{\\pi}$。"
            },
            {
              "type": "p",
              "en": "On a circle of radius $r$, a central angle of $\\theta$ radians cuts off an arc of length $s = r\\theta$ — one reason radians are the natural unit for calculus.",
              "zh": "在半径为 $r$ 的圆上，$\\theta$ 弧度的圆心角所对弧长为 $s = r\\theta$——这也是弧度成为微积分中自然单位的原因之一。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Convert $150^\\circ$ to radians and $\\dfrac{3\\pi}{4}$ radians to degrees.",
                "zh": "把 $150^\\circ$ 化为弧度，并把 $\\dfrac{3\\pi}{4}$ 弧度化为角度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$150^\\circ \\cdot \\dfrac{\\pi}{180} = \\dfrac{150\\pi}{180} = \\dfrac{5\\pi}{6}$ radians.",
                  "zh": "$150^\\circ \\cdot \\dfrac{\\pi}{180} = \\dfrac{150\\pi}{180} = \\dfrac{5\\pi}{6}$ 弧度。"
                },
                {
                  "type": "p",
                  "en": "$\\dfrac{3\\pi}{4} \\cdot \\dfrac{180}{\\pi} = \\dfrac{3 \\cdot 180}{4} = 135^\\circ$.",
                  "zh": "$\\dfrac{3\\pi}{4} \\cdot \\dfrac{180}{\\pi} = \\dfrac{3 \\cdot 180}{4} = 135^\\circ$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Unit Circle Definition",
              "zh": "单位圆定义"
            },
            {
              "type": "p",
              "en": "Place an angle $\\theta$ in standard position (vertex at the origin, initial side on the positive $x$-axis). The terminal side meets the unit circle at a point $(x, y)$, and we define:",
              "zh": "把角 $\\theta$ 置于标准位置（顶点在原点，始边沿 $x$ 轴正方向）。终边与单位圆交于点 $(x, y)$，定义："
            },
            {
              "type": "math",
              "tex": "\\cos\\theta = x, \\qquad \\sin\\theta = y, \\qquad \\tan\\theta = \\frac{y}{x} \\ (x \\ne 0)"
            },
            {
              "type": "p",
              "en": "The other three functions are reciprocals: $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$. The key first-quadrant values come from the $30$-$60$-$90$ and $45$-$45$-$90$ triangles: $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$, $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.",
              "zh": "另外三个函数是它们的倒数：$\\sec\\theta = \\frac{1}{\\cos\\theta}$、$\\csc\\theta = \\frac{1}{\\sin\\theta}$、$\\cot\\theta = \\frac{1}{\\tan\\theta}$。第一象限的关键值来自 $30$-$60$-$90$ 与 $45$-$45$-$90$ 三角形：$\\sin\\frac{\\pi}{6} = \\frac{1}{2}$、$\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$、$\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$。"
            },
            {
              "type": "note",
              "en": "Sign chart by quadrant — \"All Students Take Calculus\": in QI all functions are positive, in QII only sine, in QIII only tangent, in QIV only cosine.",
              "zh": "各象限符号口诀“一全正、二正弦、三正切、四余弦”：第一象限全部为正，第二象限只有正弦为正，第三象限只有正切为正，第四象限只有余弦为正。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Find $\\sin\\dfrac{5\\pi}{6}$ and $\\cos\\dfrac{5\\pi}{6}$ exactly.",
                "zh": "求 $\\sin\\dfrac{5\\pi}{6}$ 与 $\\cos\\dfrac{5\\pi}{6}$ 的精确值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The angle $\\dfrac{5\\pi}{6}$ lies in Quadrant II with reference angle $\\pi - \\dfrac{5\\pi}{6} = \\dfrac{\\pi}{6}$.",
                  "zh": "$\\dfrac{5\\pi}{6}$ 位于第二象限，参考角为 $\\pi - \\dfrac{5\\pi}{6} = \\dfrac{\\pi}{6}$。"
                },
                {
                  "type": "p",
                  "en": "In QII sine is positive and cosine is negative, so $\\sin\\dfrac{5\\pi}{6} = \\dfrac{1}{2}$ and $\\cos\\dfrac{5\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$.",
                  "zh": "第二象限中正弦为正、余弦为负，故 $\\sin\\dfrac{5\\pi}{6} = \\dfrac{1}{2}$，$\\cos\\dfrac{5\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Convert $90^\\circ$ to radians.",
                "zh": "把 $90^\\circ$ 化为弧度。"
              },
              "choices": [
                "$\\dfrac{\\pi}{4}$",
                "$\\dfrac{\\pi}{2}$",
                "$\\pi$",
                "$\\dfrac{\\pi}{3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$90^\\circ \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{2}$. A quarter turn is a quarter of $2\\pi$.",
                "zh": "$90^\\circ \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{2}$。四分之一圈就是 $2\\pi$ 的四分之一。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Convert $\\dfrac{\\pi}{3}$ radians to degrees. Give an integer (degrees).",
                "zh": "把 $\\dfrac{\\pi}{3}$ 弧度化为角度，答案为整数（度）。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "$\\frac{\\pi}{3} \\cdot \\frac{180}{\\pi} = \\frac{180}{3} = 60$ degrees. The $\\pi$ cancels, leaving simple division.",
                "zh": "$\\frac{\\pi}{3} \\cdot \\frac{180}{\\pi} = \\frac{180}{3} = 60$ 度。$\\pi$ 相消后只剩简单除法。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\cos\\dfrac{\\pi}{3}$?",
                "zh": "$\\cos\\dfrac{\\pi}{3}$ 等于多少？"
              },
              "choices": [
                "$\\dfrac{\\sqrt{2}}{2}$",
                "$\\dfrac{\\sqrt{3}}{2}$",
                "$\\dfrac{1}{2}$",
                "$1$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\frac{\\pi}{3} = 60^\\circ$. From the 30-60-90 triangle, $\\cos 60^\\circ = \\frac{1}{2}$ (while $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ — a common mix-up).",
                "zh": "$\\frac{\\pi}{3} = 60^\\circ$。由 30-60-90 三角形，$\\cos 60^\\circ = \\frac{1}{2}$（而 $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$，两者容易混淆）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In which quadrant does the terminal side of $\\theta = \\dfrac{7\\pi}{6}$ lie?",
                "zh": "角 $\\theta = \\dfrac{7\\pi}{6}$ 的终边位于第几象限？"
              },
              "choices": [
                "Quadrant IV",
                "Quadrant II",
                "Quadrant I",
                "Quadrant III"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\frac{7\\pi}{6}$ is slightly more than $\\pi$ (half turn) and less than $\\frac{3\\pi}{2}$, so the terminal side is in Quadrant III, where both sine and cosine are negative.",
                "zh": "$\\frac{7\\pi}{6}$ 略大于 $\\pi$（半圈）且小于 $\\frac{3\\pi}{2}$，终边落在第三象限，此处正弦与余弦均为负。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An arc on a circle of radius 6 subtends a central angle of $\\dfrac{\\pi}{3}$ radians. Find the arc length. Answer in the form $k\\pi$ — give only the number $k$ as an integer.",
                "zh": "半径为 6 的圆上，圆心角 $\\dfrac{\\pi}{3}$ 弧度所对的弧长为 $k\\pi$，请以整数形式只给出 $k$。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Arc length is $s = r\\theta = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$, so $k = 2$. This formula only works when the angle is in radians.",
                "zh": "弧长 $s = r\\theta = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$，故 $k = 2$。此公式仅当角以弧度计时成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $\\theta$ is in Quadrant II, which of the following is positive?",
                "zh": "若 $\\theta$ 在第二象限，下列哪个值为正？"
              },
              "choices": [
                "$\\sin\\theta$",
                "$\\cos\\theta$",
                "$\\tan\\theta$",
                "$\\sec\\theta$"
              ],
              "answer": 0,
              "explanation": {
                "en": "In Quadrant II the unit-circle point has $x < 0$ and $y > 0$, so $\\sin\\theta = y > 0$ while $\\cos\\theta$ (and hence $\\sec\\theta$) is negative and $\\tan\\theta = y/x$ is negative.",
                "zh": "第二象限中单位圆上的点满足 $x < 0$、$y > 0$，故 $\\sin\\theta = y > 0$；而 $\\cos\\theta$（连同 $\\sec\\theta$）为负，$\\tan\\theta = y/x$ 也为负。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the exact value of $\\tan\\dfrac{\\pi}{4}$ plus $\\sin\\dfrac{3\\pi}{2}$?",
                "zh": "$\\tan\\dfrac{\\pi}{4} + \\sin\\dfrac{3\\pi}{2}$ 的精确值是多少？"
              },
              "choices": [
                "$1$",
                "$2$",
                "$0$",
                "$-1$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\tan\\frac{\\pi}{4} = 1$ since sine and cosine are equal there. The angle $\\frac{3\\pi}{2}$ points straight down at $(0, -1)$, so $\\sin\\frac{3\\pi}{2} = -1$. The sum is $1 + (-1) = 0$.",
                "zh": "$\\tan\\frac{\\pi}{4} = 1$，因为该角处正弦与余弦相等。$\\frac{3\\pi}{2}$ 的终边竖直向下指向 $(0, -1)$，故 $\\sin\\frac{3\\pi}{2} = -1$。两者之和为 $1 + (-1) = 0$。"
              }
            }
          ]
        },
        {
          "id": "graphs-of-trig-functions",
          "title": "Graphs of the Six Trigonometric Functions",
          "titleZh": "六个三角函数的图象",
          "content": [
            {
              "type": "h2",
              "en": "Sine and Cosine Waves",
              "zh": "正弦波与余弦波"
            },
            {
              "type": "p",
              "en": "The graphs of $y = \\sin x$ and $y = \\cos x$ are waves that repeat every $2\\pi$ and oscillate between $-1$ and $1$. Cosine is just sine shifted left by $\\frac{\\pi}{2}$. The general sinusoid is:",
              "zh": "$y = \\sin x$ 与 $y = \\cos x$ 的图象是每 $2\\pi$ 重复一次、在 $-1$ 与 $1$ 之间振荡的波形。余弦就是正弦左移 $\\frac{\\pi}{2}$。一般正弦型函数为："
            },
            {
              "type": "math",
              "tex": "y = A \\sin\\big(B(x - C)\\big) + D"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Amplitude $|A|$: half the distance between maximum and minimum.",
                  "zh": "振幅 $|A|$：最大值与最小值之差的一半。"
                },
                {
                  "en": "Period $\\dfrac{2\\pi}{|B|}$: the length of one full cycle.",
                  "zh": "周期 $\\dfrac{2\\pi}{|B|}$：一个完整循环的长度。"
                },
                {
                  "en": "Phase shift $C$: horizontal displacement of the wave.",
                  "zh": "相移 $C$：波形的水平位移。"
                },
                {
                  "en": "Midline $y = D$: the horizontal center line of the oscillation.",
                  "zh": "中线 $y = D$：振荡的水平中心线。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Find the amplitude, period, and midline of $y = 3\\sin(2x) - 1$.",
                "zh": "求 $y = 3\\sin(2x) - 1$ 的振幅、周期和中线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Amplitude: $|A| = 3$. Period: $\\dfrac{2\\pi}{2} = \\pi$. Midline: $y = -1$.",
                  "zh": "振幅 $|A| = 3$；周期 $\\dfrac{2\\pi}{2} = \\pi$；中线 $y = -1$。"
                },
                {
                  "type": "p",
                  "en": "So the graph oscillates between $-1 + 3 = 2$ and $-1 - 3 = -4$, completing a cycle every $\\pi$ units.",
                  "zh": "因此图象在 $-1 + 3 = 2$ 与 $-1 - 3 = -4$ 之间振荡，每 $\\pi$ 个单位完成一个周期。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Tangent and the Reciprocal Functions",
              "zh": "正切与倒数函数"
            },
            {
              "type": "p",
              "en": "The graph of $y = \\tan x$ has period $\\pi$ (not $2\\pi$), passes through the origin, and has vertical asymptotes wherever $\\cos x = 0$, that is at $x = \\frac{\\pi}{2} + k\\pi$. It has no amplitude — it runs from $-\\infty$ to $\\infty$ on every branch.",
              "zh": "$y = \\tan x$ 的周期是 $\\pi$（不是 $2\\pi$），图象过原点，并在 $\\cos x = 0$ 处（即 $x = \\frac{\\pi}{2} + k\\pi$）有垂直渐近线。它没有振幅——每一支都从 $-\\infty$ 延伸到 $\\infty$。"
            },
            {
              "type": "p",
              "en": "The graphs of $\\sec x$, $\\csc x$, and $\\cot x$ come from taking reciprocals: $\\sec x$ has U-shaped branches sitting on the peaks and valleys of $\\cos x$, with asymptotes at the zeros of cosine; $\\csc x$ does the same for sine; $\\cot x$ has period $\\pi$ with asymptotes where $\\sin x = 0$.",
              "zh": "$\\sec x$、$\\csc x$、$\\cot x$ 的图象由取倒数得到：$\\sec x$ 的 U 形分支落在 $\\cos x$ 的波峰波谷上，在余弦的零点处有渐近线；$\\csc x$ 与正弦的关系相同；$\\cot x$ 的周期为 $\\pi$，在 $\\sin x = 0$ 处有渐近线。"
            },
            {
              "type": "note",
              "en": "Ranges to remember: $\\sin x$ and $\\cos x$ live in $[-1, 1]$, but $\\sec x$ and $\\csc x$ never enter the gap $(-1, 1)$ — their range is $(-\\infty, -1] \\cup [1, \\infty)$.",
              "zh": "牢记值域：$\\sin x$ 与 $\\cos x$ 的值域是 $[-1, 1]$，而 $\\sec x$ 与 $\\csc x$ 永远不进入区间 $(-1, 1)$——它们的值域是 $(-\\infty, -1] \\cup [1, \\infty)$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "A Ferris wheel of radius 20 m has its center 25 m above the ground and completes one revolution every 60 seconds. Write a model for a rider's height starting at the bottom.",
                "zh": "一座摩天轮半径 20 米，中心离地 25 米，每 60 秒转一圈。写出从最低点出发的乘客高度模型。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Midline $D = 25$, amplitude $A = 20$, period 60 gives $B = \\dfrac{2\\pi}{60} = \\dfrac{\\pi}{30}$.",
                  "zh": "中线 $D = 25$，振幅 $A = 20$，周期 60 给出 $B = \\dfrac{2\\pi}{60} = \\dfrac{\\pi}{30}$。"
                },
                {
                  "type": "p",
                  "en": "Starting at the minimum suggests a reflected cosine: $h(t) = 25 - 20\\cos\\left(\\dfrac{\\pi}{30}t\\right)$. Check: $h(0) = 5$ (bottom) and $h(30) = 45$ (top).",
                  "zh": "从最低点出发适合用翻转的余弦：$h(t) = 25 - 20\\cos\\left(\\dfrac{\\pi}{30}t\\right)$。验证：$h(0) = 5$（最低点），$h(30) = 45$（最高点）。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "What is the amplitude of $y = 5\\cos(3x) + 2$? Give an integer.",
                "zh": "$y = 5\\cos(3x) + 2$ 的振幅是多少？答案为整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "The amplitude is the coefficient in front of the trig function: $|A| = 5$. The $+2$ moves the midline; the 3 changes the period.",
                "zh": "振幅是三角函数前的系数：$|A| = 5$。$+2$ 改变中线，3 改变周期。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the period of $y = \\sin(4x)$?",
                "zh": "$y = \\sin(4x)$ 的周期是多少？"
              },
              "choices": [
                "$8\\pi$",
                "$\\dfrac{\\pi}{2}$",
                "$4\\pi$",
                "$\\dfrac{\\pi}{4}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Period $= \\frac{2\\pi}{|B|} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. A larger $B$ compresses the wave, giving a shorter period — dividing, not multiplying.",
                "zh": "周期 $= \\frac{2\\pi}{|B|} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。$B$ 越大波形被压缩得越紧，周期越短——是除法而非乘法。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the period of $y = \\tan x$?",
                "zh": "$y = \\tan x$ 的周期是多少？"
              },
              "choices": [
                "$\\dfrac{\\pi}{2}$",
                "$2\\pi$",
                "$\\pi$",
                "$4\\pi$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Tangent repeats every $\\pi$, unlike sine and cosine which repeat every $2\\pi$. This is because $\\tan(x + \\pi) = \\frac{-\\sin x}{-\\cos x} = \\tan x$.",
                "zh": "正切每 $\\pi$ 重复一次，不同于每 $2\\pi$ 重复的正弦和余弦。原因是 $\\tan(x + \\pi) = \\frac{-\\sin x}{-\\cos x} = \\tan x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $y = \\sec x$ has vertical asymptotes wherever:",
                "zh": "$y = \\sec x$ 的垂直渐近线出现在哪些位置？"
              },
              "choices": [
                "$\\sec x = 0$",
                "$\\sin x = 0$",
                "$\\tan x = 0$",
                "$\\cos x = 0$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\sec x = \\frac{1}{\\cos x}$, so it blows up exactly where its denominator $\\cos x$ equals zero: at $x = \\frac{\\pi}{2} + k\\pi$. Note $\\sec x$ itself is never zero.",
                "zh": "$\\sec x = \\frac{1}{\\cos x}$，在分母 $\\cos x$ 为零处（$x = \\frac{\\pi}{2} + k\\pi$）趋于无穷。注意 $\\sec x$ 本身永远不为零。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The maximum value of $y = 4\\sin(x) + 3$ is what? Give an integer.",
                "zh": "$y = 4\\sin(x) + 3$ 的最大值是多少？答案为整数。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "Since $\\sin x$ peaks at 1, the maximum is $4(1) + 3 = 7$. In general max $= D + |A|$ and min $= D - |A|$.",
                "zh": "$\\sin x$ 的最大值为 1，故最大值为 $4(1) + 3 = 7$。一般地，最大值 $= D + |A|$，最小值 $= D - |A|$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which value is NOT in the range of $y = \\csc x$?",
                "zh": "下列哪个值不在 $y = \\csc x$ 的值域内？"
              },
              "choices": [
                "$0.5$",
                "$-3$",
                "$1$",
                "$10$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $|\\sin x| \\le 1$, its reciprocal satisfies $|\\csc x| \\ge 1$. The range is $(-\\infty, -1] \\cup [1, \\infty)$, which excludes $0.5$ but includes $-3$, $1$, and $10$.",
                "zh": "因为 $|\\sin x| \\le 1$，其倒数满足 $|\\csc x| \\ge 1$。值域为 $(-\\infty, -1] \\cup [1, \\infty)$，不含 $0.5$，但包含 $-3$、$1$、$10$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A sinusoid has maximum 10 and minimum 2. What is its amplitude? Give an integer.",
                "zh": "某正弦型函数最大值为 10、最小值为 2，其振幅是多少？答案为整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "Amplitude is half the max-to-min distance: $\\frac{10 - 2}{2} = 4$. The midline is the average, $y = 6$ — the amplitude is measured from there, not from zero.",
                "zh": "振幅是最大值与最小值之差的一半：$\\frac{10 - 2}{2} = 4$。中线是二者平均值 $y = 6$——振幅从中线量起，而不是从零量起。"
              }
            }
          ]
        },
        {
          "id": "inverse-trig-functions",
          "title": "Inverse Trigonometric Functions",
          "titleZh": "反三角函数",
          "content": [
            {
              "type": "h2",
              "en": "Why Restrict the Domain?",
              "zh": "为什么要限制定义域？"
            },
            {
              "type": "p",
              "en": "Trigonometric functions repeat, so they fail the horizontal line test and have no inverse on their full domains. To fix this, we restrict each one to an interval where it is one-to-one and still covers its whole range, then invert.",
              "zh": "三角函数是周期函数，无法通过水平线检验，在整个定义域上没有反函数。补救办法是把每个函数限制在既一一对应又覆盖整个值域的区间上，再取反函数。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$y = \\arcsin x$ (or $\\sin^{-1}x$): domain $[-1, 1]$, range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.",
                  "zh": "$y = \\arcsin x$（即 $\\sin^{-1}x$）：定义域 $[-1, 1]$，值域 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$。"
                },
                {
                  "en": "$y = \\arccos x$: domain $[-1, 1]$, range $[0, \\pi]$.",
                  "zh": "$y = \\arccos x$：定义域 $[-1, 1]$，值域 $[0, \\pi]$。"
                },
                {
                  "en": "$y = \\arctan x$: domain all reals, range $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.",
                  "zh": "$y = \\arctan x$：定义域为全体实数，值域 $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "$\\sin^{-1}x$ means the inverse function, NOT $\\frac{1}{\\sin x}$. The reciprocal is written $\\csc x$ or $(\\sin x)^{-1}$.",
              "zh": "$\\sin^{-1}x$ 表示反函数，而不是 $\\frac{1}{\\sin x}$。倒数应写作 $\\csc x$ 或 $(\\sin x)^{-1}$。"
            },
            {
              "type": "h2",
              "en": "Evaluating Inverse Trig Expressions",
              "zh": "求反三角函数的值"
            },
            {
              "type": "p",
              "en": "The value $\\arcsin(a)$ is the unique angle in the restricted range whose sine is $a$. Always report the angle inside the range — even when other angles have the same sine.",
              "zh": "$\\arcsin(a)$ 是限制值域内正弦等于 $a$ 的唯一角。答案必须落在该值域内——即使其他角有相同的正弦值。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Evaluate $\\arcsin\\left(-\\dfrac{1}{2}\\right)$ and $\\arccos\\left(-\\dfrac{1}{2}\\right)$.",
                "zh": "求 $\\arcsin\\left(-\\dfrac{1}{2}\\right)$ 与 $\\arccos\\left(-\\dfrac{1}{2}\\right)$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For arcsine we need an angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ with sine $-\\frac{1}{2}$: that is $-\\frac{\\pi}{6}$.",
                  "zh": "反正弦需要 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 内正弦为 $-\\frac{1}{2}$ 的角：即 $-\\frac{\\pi}{6}$。"
                },
                {
                  "type": "p",
                  "en": "For arccosine we need an angle in $[0, \\pi]$ with cosine $-\\frac{1}{2}$: that is $\\frac{2\\pi}{3}$. Note the two inverse functions use different ranges.",
                  "zh": "反余弦需要 $[0, \\pi]$ 内余弦为 $-\\frac{1}{2}$ 的角：即 $\\frac{2\\pi}{3}$。注意两个反函数的值域不同。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Compositions",
              "zh": "复合运算"
            },
            {
              "type": "p",
              "en": "Compositions like $\\cos(\\arcsin x)$ can be simplified with a right triangle: if $\\theta = \\arcsin x$, draw a right triangle with opposite side $x$ and hypotenuse 1; the adjacent side is $\\sqrt{1 - x^2}$, so $\\cos(\\arcsin x) = \\sqrt{1 - x^2}$.",
              "zh": "像 $\\cos(\\arcsin x)$ 这样的复合式可借助直角三角形化简：设 $\\theta = \\arcsin x$，作对边为 $x$、斜边为 1 的直角三角形，则邻边为 $\\sqrt{1 - x^2}$，故 $\\cos(\\arcsin x) = \\sqrt{1 - x^2}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Evaluate $\\tan\\left(\\arccos\\dfrac{3}{5}\\right)$.",
                "zh": "求 $\\tan\\left(\\arccos\\dfrac{3}{5}\\right)$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $\\theta = \\arccos\\frac{3}{5}$, so $\\cos\\theta = \\frac{3}{5}$ with $\\theta$ in QI. Build a 3-4-5 right triangle: adjacent 3, hypotenuse 5, opposite $\\sqrt{25 - 9} = 4$.",
                  "zh": "设 $\\theta = \\arccos\\frac{3}{5}$，则 $\\cos\\theta = \\frac{3}{5}$ 且 $\\theta$ 在第一象限。作 3-4-5 直角三角形：邻边 3、斜边 5、对边 $\\sqrt{25 - 9} = 4$。"
                },
                {
                  "type": "p",
                  "en": "Therefore $\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{4}{3}$.",
                  "zh": "因此 $\\tan\\theta = \\dfrac{\\text{对边}}{\\text{邻边}} = \\dfrac{4}{3}$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is $\\arcsin\\left(\\dfrac{1}{2}\\right)$?",
                "zh": "$\\arcsin\\left(\\dfrac{1}{2}\\right)$ 等于多少？"
              },
              "choices": [
                "$\\dfrac{\\pi}{3}$",
                "$\\dfrac{\\pi}{6}$",
                "$\\dfrac{5\\pi}{6}$",
                "$\\dfrac{\\pi}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "We need the angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ whose sine is $\\frac{1}{2}$: that is $\\frac{\\pi}{6}$. Although $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$ too, $\\frac{5\\pi}{6}$ is outside the arcsine range.",
                "zh": "需要在 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 内找正弦为 $\\frac{1}{2}$ 的角：即 $\\frac{\\pi}{6}$。虽然 $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$ 也成立，但 $\\frac{5\\pi}{6}$ 不在反正弦的值域内。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\arccos(-1)$?",
                "zh": "$\\arccos(-1)$ 等于多少？"
              },
              "choices": [
                "$-\\dfrac{\\pi}{2}$",
                "$0$",
                "$\\pi$",
                "$2\\pi$"
              ],
              "answer": 2,
              "explanation": {
                "en": "We need the angle in $[0, \\pi]$ with cosine $-1$. Cosine equals $-1$ at the point $(-1, 0)$ on the unit circle, which is the angle $\\pi$.",
                "zh": "需要在 $[0, \\pi]$ 内找余弦为 $-1$ 的角。余弦在单位圆上点 $(-1, 0)$ 处等于 $-1$，对应角为 $\\pi$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\arctan(1)$. Answer in the form $\\pi/k$ — give only the integer $k$.",
                "zh": "求 $\\arctan(1)$，答案形如 $\\pi/k$，请只以整数形式给出 $k$。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "We need the angle in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ where tangent is 1, i.e. where sine equals cosine: $\\frac{\\pi}{4}$, so $k = 4$.",
                "zh": "需要在 $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ 内找正切为 1（即正弦等于余弦）的角：$\\frac{\\pi}{4}$，故 $k = 4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The expression $\\sin^{-1} x$ means:",
                "zh": "$\\sin^{-1} x$ 的含义是："
              },
              "choices": [
                "$\\csc^{-1} x$",
                "$\\dfrac{1}{\\sin x}$",
                "$\\sin(x^{-1})$",
                "The inverse sine function of $x$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The superscript $-1$ on a function name denotes the inverse function, just as $f^{-1}$ does. The reciprocal $\\frac{1}{\\sin x}$ has its own name, $\\csc x$.",
                "zh": "函数名上的 $-1$ 表示反函数，与 $f^{-1}$ 的记法一致。倒数 $\\frac{1}{\\sin x}$ 有自己的名称 $\\csc x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\arcsin\\left(\\sin\\dfrac{3\\pi}{4}\\right)$?",
                "zh": "$\\arcsin\\left(\\sin\\dfrac{3\\pi}{4}\\right)$ 等于多少？"
              },
              "choices": [
                "$\\dfrac{\\pi}{4}$",
                "$\\dfrac{3\\pi}{4}$",
                "$-\\dfrac{\\pi}{4}$",
                "$\\dfrac{\\pi}{2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "First $\\sin\\frac{3\\pi}{4} = \\frac{\\sqrt{2}}{2}$. Then arcsine must return an angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$: $\\arcsin\\frac{\\sqrt{2}}{2} = \\frac{\\pi}{4}$. The composition does not simply cancel because $\\frac{3\\pi}{4}$ lies outside the restricted range.",
                "zh": "先算 $\\sin\\frac{3\\pi}{4} = \\frac{\\sqrt{2}}{2}$；再取反正弦，结果必须在 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 内：$\\arcsin\\frac{\\sqrt{2}}{2} = \\frac{\\pi}{4}$。由于 $\\frac{3\\pi}{4}$ 不在限制区间内，复合不能直接抵消。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\sin\\left(\\arccos\\dfrac{5}{13}\\right)$. Give a fraction a/b in lowest terms.",
                "zh": "求 $\\sin\\left(\\arccos\\dfrac{5}{13}\\right)$，答案写成最简分数 a/b。"
              },
              "answer": "12/13",
              "accept": [
                "12/13"
              ],
              "explanation": {
                "en": "Let $\\theta = \\arccos\\frac{5}{13}$: adjacent 5, hypotenuse 13, so opposite $= \\sqrt{169 - 25} = 12$. Since $\\theta$ is in QI, $\\sin\\theta = \\frac{12}{13}$.",
                "zh": "设 $\\theta = \\arccos\\frac{5}{13}$：邻边 5、斜边 13，对边 $= \\sqrt{169 - 25} = 12$。$\\theta$ 在第一象限，故 $\\sin\\theta = \\frac{12}{13}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "analytic-trigonometry",
      "title": "Unit 5: Analytic Trigonometry",
      "titleZh": "第五单元：解析三角学",
      "lessons": [
        {
          "id": "trig-identities-sum-difference",
          "title": "Fundamental Identities and Sum/Difference Formulas",
          "titleZh": "三角恒等式与和差公式",
          "content": [
            {
              "type": "h2",
              "en": "The Fundamental Identities",
              "zh": "基本恒等式"
            },
            {
              "type": "p",
              "en": "Analytic trigonometry is the algebra of the trig functions. Everything rests on a handful of identities — equations true for every angle in the domain — that let you rewrite one expression as another. Fluency here pays off directly in calculus, where you constantly reshape trig expressions before integrating.",
              "zh": "解析三角学是三角函数的代数。一切都建立在少数几个恒等式之上——它们对定义域内每个角都成立——使你能把一个表达式改写成另一个。熟练掌握它们将在微积分中直接见效，因为你在积分前会不断重塑三角表达式。"
            },
            {
              "type": "p",
              "en": "The reciprocal and quotient identities are just definitions repackaged:",
              "zh": "倒数恒等式与商恒等式不过是定义的重新表述："
            },
            {
              "type": "math",
              "tex": "\\csc\\theta=\\dfrac{1}{\\sin\\theta}\\quad \\sec\\theta=\\dfrac{1}{\\cos\\theta}\\quad \\cot\\theta=\\dfrac{1}{\\tan\\theta}"
            },
            {
              "type": "math",
              "tex": "\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}\\qquad \\cot\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}"
            },
            {
              "type": "p",
              "en": "The three Pythagorean identities come from $x^2+y^2=1$ on the unit circle. The first is the parent; divide it by $\\cos^2\\theta$ or $\\sin^2\\theta$ to get the other two:",
              "zh": "三个毕达哥拉斯恒等式来自单位圆上的 $x^2+y^2=1$。第一个是母式，分别除以 $\\cos^2\\theta$ 或 $\\sin^2\\theta$ 即得其余两个："
            },
            {
              "type": "math",
              "tex": "\\sin^2\\theta+\\cos^2\\theta=1 \\qquad 1+\\tan^2\\theta=\\sec^2\\theta \\qquad 1+\\cot^2\\theta=\\csc^2\\theta"
            },
            {
              "type": "note",
              "en": "Common mistake: writing $\\sin^2\\theta$ when you mean $\\sin\\theta^2$. The notation $\\sin^2\\theta$ means $(\\sin\\theta)^2$, not $\\sin(\\theta^2)$. Keep the exponent on the whole function value.",
              "zh": "常见错误：把 $\\sin\\theta^2$ 与 $\\sin^2\\theta$ 混淆。$\\sin^2\\theta$ 表示 $(\\sin\\theta)^2$，而非 $\\sin(\\theta^2)$。指数作用于整个函数值。"
            },
            {
              "type": "h3",
              "en": "Even/Odd and Cofunction Identities",
              "zh": "奇偶与余函数恒等式"
            },
            {
              "type": "p",
              "en": "Cosine and secant are even; the other four are odd. And each function of an angle equals the cofunction of the complementary angle:",
              "zh": "余弦与正割是偶函数，其余四个是奇函数。而每个函数在某角的值等于其余函数在余角的值："
            },
            {
              "type": "math",
              "tex": "\\cos(-\\theta)=\\cos\\theta \\qquad \\sin(-\\theta)=-\\sin\\theta \\qquad \\tan(-\\theta)=-\\tan\\theta"
            },
            {
              "type": "math",
              "tex": "\\sin\\!\\left(\\tfrac{\\pi}{2}-\\theta\\right)=\\cos\\theta \\qquad \\tan\\!\\left(\\tfrac{\\pi}{2}-\\theta\\right)=\\cot\\theta"
            },
            {
              "type": "h3",
              "en": "Verifying Identities: Work One Side",
              "zh": "验证恒等式：只处理一侧"
            },
            {
              "type": "p",
              "en": "To prove an identity, transform one side (usually the more complicated one) until it matches the other. Do not move terms across the equals sign as if solving an equation — you are showing two expressions are already equal, not solving for a variable. Useful moves: convert everything to sines and cosines, combine fractions over a common denominator, and watch for a Pythagorean substitution.",
              "zh": "证明恒等式时，把一侧（通常是较复杂的一侧）变形，直至与另一侧相同。不要像解方程那样把项移过等号——你是在说明两个表达式本就相等，而非解未知数。常用手法：全部化为正弦余弦、通分合并、留意毕达哥拉斯代换。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Verify that $\\dfrac{\\cos\\theta}{1-\\sin\\theta}=\\sec\\theta+\\tan\\theta$.",
                "zh": "验证 $\\dfrac{\\cos\\theta}{1-\\sin\\theta}=\\sec\\theta+\\tan\\theta$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Start from the left and multiply top and bottom by the conjugate $1+\\sin\\theta$:",
                  "zh": "从左侧出发，分子分母同乘共轭因子 $1+\\sin\\theta$："
                },
                {
                  "type": "math",
                  "tex": "\\dfrac{\\cos\\theta}{1-\\sin\\theta}\\cdot\\dfrac{1+\\sin\\theta}{1+\\sin\\theta}=\\dfrac{\\cos\\theta(1+\\sin\\theta)}{1-\\sin^2\\theta}"
                },
                {
                  "type": "p",
                  "en": "The denominator is $1-\\sin^2\\theta=\\cos^2\\theta$, so one factor of cosine cancels:",
                  "zh": "分母为 $1-\\sin^2\\theta=\\cos^2\\theta$，约去一个余弦："
                },
                {
                  "type": "math",
                  "tex": "=\\dfrac{\\cos\\theta(1+\\sin\\theta)}{\\cos^2\\theta}=\\dfrac{1+\\sin\\theta}{\\cos\\theta}=\\dfrac{1}{\\cos\\theta}+\\dfrac{\\sin\\theta}{\\cos\\theta}=\\sec\\theta+\\tan\\theta."
                },
                {
                  "type": "p",
                  "en": "The left side now equals the right side, so the identity holds.",
                  "zh": "左侧已等于右侧，故恒等式成立。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Sum and Difference Formulas",
              "zh": "和差公式"
            },
            {
              "type": "p",
              "en": "A frequent error is assuming $\\sin(A+B)=\\sin A+\\sin B$ — it is false. The correct formulas are:",
              "zh": "一个常见错误是认为 $\\sin(A+B)=\\sin A+\\sin B$——这是错的。正确的公式为："
            },
            {
              "type": "math",
              "tex": "\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B"
            },
            {
              "type": "math",
              "tex": "\\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B"
            },
            {
              "type": "math",
              "tex": "\\tan(A\\pm B)=\\dfrac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}"
            },
            {
              "type": "note",
              "en": "Sign trap: in the cosine formula the sign flips — $\\cos(A+B)$ uses a minus, and $\\cos(A-B)$ uses a plus. Memorize \"cosine changes the sign.\" The sine formula keeps the same sign as the angle.",
              "zh": "符号陷阱：余弦公式中符号相反——$\\cos(A+B)$ 用减号，$\\cos(A-B)$ 用加号。记住“余弦变号”。正弦公式则与角的符号一致。"
            },
            {
              "type": "p",
              "en": "These formulas let you find exact values of angles that are sums or differences of the familiar $30^\\circ,45^\\circ,60^\\circ$ angles.",
              "zh": "这些公式让你能求出那些由熟悉的 $30^\\circ,45^\\circ,60^\\circ$ 角相加减得到的角的精确值。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Find the exact value of $\\cos 15^\\circ$.",
                "zh": "求 $\\cos 15^\\circ$ 的精确值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Write $15^\\circ=45^\\circ-30^\\circ$ and apply the cosine difference formula:",
                  "zh": "把 $15^\\circ=45^\\circ-30^\\circ$，应用余弦差公式："
                },
                {
                  "type": "math",
                  "tex": "\\cos(45^\\circ-30^\\circ)=\\cos45^\\circ\\cos30^\\circ+\\sin45^\\circ\\sin30^\\circ"
                },
                {
                  "type": "math",
                  "tex": "=\\dfrac{\\sqrt2}{2}\\cdot\\dfrac{\\sqrt3}{2}+\\dfrac{\\sqrt2}{2}\\cdot\\dfrac{1}{2}=\\dfrac{\\sqrt6+\\sqrt2}{4}."
                },
                {
                  "type": "p",
                  "en": "So $\\cos15^\\circ=\\dfrac{\\sqrt6+\\sqrt2}{4}\\approx 0.966$.",
                  "zh": "故 $\\cos15^\\circ=\\dfrac{\\sqrt6+\\sqrt2}{4}\\approx 0.966$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "If $\\sin A=\\tfrac{3}{5}$ with $A$ in Quadrant I, and $\\cos B=-\\tfrac{5}{13}$ with $B$ in Quadrant II, find $\\sin(A+B)$.",
                "zh": "若 $\\sin A=\\tfrac{3}{5}$，$A$ 在第一象限；$\\cos B=-\\tfrac{5}{13}$，$B$ 在第二象限，求 $\\sin(A+B)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Find the missing pieces. In QI, $\\cos A=\\tfrac{4}{5}$. In QII, $\\sin B$ is positive: $\\sin B=\\tfrac{12}{13}$.",
                  "zh": "先补全所需值。第一象限中 $\\cos A=\\tfrac{4}{5}$；第二象限中 $\\sin B$ 为正：$\\sin B=\\tfrac{12}{13}$。"
                },
                {
                  "type": "math",
                  "tex": "\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B=\\tfrac{3}{5}\\!\\left(-\\tfrac{5}{13}\\right)+\\tfrac{4}{5}\\!\\left(\\tfrac{12}{13}\\right)"
                },
                {
                  "type": "math",
                  "tex": "=-\\dfrac{15}{65}+\\dfrac{48}{65}=\\dfrac{33}{65}."
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals $1$ for every angle $\\theta$ where it is defined?",
                "zh": "下列哪个表达式对每个有定义的角 $\\theta$ 都等于 $1$？"
              },
              "choices": [
                "$\\sec^2\\theta-1$",
                "$\\sin^2\\theta+\\cos^2\\theta$",
                "$\\sin\\theta+\\cos\\theta$",
                "$\\tan^2\\theta+1$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The Pythagorean identity gives $\\sin^2\\theta+\\cos^2\\theta=1$. The choice $\\tan^2\\theta+1$ is tempting but equals $\\sec^2\\theta$, not $1$; and $\\sec^2\\theta-1$ equals $\\tan^2\\theta$.",
                "zh": "毕达哥拉斯恒等式给出 $\\sin^2\\theta+\\cos^2\\theta=1$。$\\tan^2\\theta+1$ 很诱人但等于 $\\sec^2\\theta$ 而非 $1$；$\\sec^2\\theta-1$ 则等于 $\\tan^2\\theta$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\dfrac{1-\\cos^2\\theta}{\\sin\\theta}$ (assume $\\sin\\theta\\ne 0$).",
                "zh": "化简 $\\dfrac{1-\\cos^2\\theta}{\\sin\\theta}$（设 $\\sin\\theta\\ne 0$）。"
              },
              "choices": [
                "$\\tan\\theta$",
                "$\\cos\\theta$",
                "$\\sin\\theta$",
                "$\\csc\\theta$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the Pythagorean identity $1-\\cos^2\\theta=\\sin^2\\theta$, so the fraction is $\\dfrac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta$. The trap is cancelling before recognizing the identity.",
                "zh": "由毕达哥拉斯恒等式 $1-\\cos^2\\theta=\\sin^2\\theta$，故分式为 $\\dfrac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta$。陷阱在于未识别恒等式就盲目约分。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of these is the correct expansion of $\\cos(A-B)$?",
                "zh": "下列哪个是 $\\cos(A-B)$ 的正确展开？"
              },
              "choices": [
                "$\\sin A\\cos B-\\cos A\\sin B$",
                "$\\cos A\\cos B-\\sin A\\sin B$",
                "$\\cos A-\\cos B$",
                "$\\cos A\\cos B+\\sin A\\sin B$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Cosine changes the sign: $\\cos(A-B)$ uses a plus. Choice with a minus is $\\cos(A+B)$; the last option is actually $\\sin(A-B)$.",
                "zh": "余弦变号：$\\cos(A-B)$ 用加号。带减号的是 $\\cos(A+B)$；最后一项其实是 $\\sin(A-B)$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Use a difference formula to compute $\\sin 15^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{a}$. Give the integer $a$.",
                "zh": "用差公式求 $\\sin 15^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{a}$，给出整数 $a$。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "$\\sin(45^\\circ-30^\\circ)=\\sin45^\\circ\\cos30^\\circ-\\cos45^\\circ\\sin30^\\circ=\\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2}-\\frac{\\sqrt2}{2}\\cdot\\frac12=\\frac{\\sqrt6-\\sqrt2}{4}$, so $a=4$.",
                "zh": "$\\sin(45^\\circ-30^\\circ)=\\sin45^\\circ\\cos30^\\circ-\\cos45^\\circ\\sin30^\\circ=\\frac{\\sqrt2}{2}\\cdot\\frac{\\sqrt3}{2}-\\frac{\\sqrt2}{2}\\cdot\\frac12=\\frac{\\sqrt6-\\sqrt2}{4}$，故 $a=4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $\\sin A=\\tfrac{3}{5}$ ($A$ in QI) and $\\sin B=\\tfrac{5}{13}$ ($B$ in QI), find $\\cos(A+B)$ as a fraction in the form $p/q$.",
                "zh": "若 $\\sin A=\\tfrac{3}{5}$（$A$ 在第一象限），$\\sin B=\\tfrac{5}{13}$（$B$ 在第一象限），求 $\\cos(A+B)$，以 $p/q$ 形式的分数作答。"
              },
              "answer": "33/65",
              "accept": [
                "0.5077",
                "0.508"
              ],
              "explanation": {
                "en": "$\\cos A=\\tfrac45,\\cos B=\\tfrac{12}{13}$. Then $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B=\\tfrac{48}{65}-\\tfrac{15}{65}=\\tfrac{33}{65}$. Forgetting the minus sign gives the wrong $63/65$.",
                "zh": "$\\cos A=\\tfrac45,\\cos B=\\tfrac{12}{13}$。则 $\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B=\\tfrac{48}{65}-\\tfrac{15}{65}=\\tfrac{33}{65}$。漏掉减号会误得 $63/65$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\sin\\!\\left(\\tfrac{\\pi}{2}-\\theta\\right)+\\cos(-\\theta)$.",
                "zh": "化简 $\\sin\\!\\left(\\tfrac{\\pi}{2}-\\theta\\right)+\\cos(-\\theta)$。"
              },
              "choices": [
                "$2\\cos\\theta$",
                "$2\\sin\\theta$",
                "$0$",
                "$\\cos\\theta-\\sin\\theta$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The cofunction identity gives $\\sin(\\tfrac{\\pi}{2}-\\theta)=\\cos\\theta$, and cosine is even so $\\cos(-\\theta)=\\cos\\theta$. The sum is $2\\cos\\theta$. Treating cosine as odd would wrongly cancel the terms to $0$.",
                "zh": "余函数恒等式给出 $\\sin(\\tfrac{\\pi}{2}-\\theta)=\\cos\\theta$，余弦为偶函数故 $\\cos(-\\theta)=\\cos\\theta$，和为 $2\\cos\\theta$。若误认余弦为奇函数会错误地把两项抵消为 $0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\cos 70^\\circ\\cos 20^\\circ-\\sin 70^\\circ\\sin 20^\\circ$. Give an integer.",
                "zh": "求 $\\cos 70^\\circ\\cos 20^\\circ-\\sin 70^\\circ\\sin 20^\\circ$ 的值，答案为整数。"
              },
              "answer": "0",
              "accept": [
                "0.0"
              ],
              "explanation": {
                "en": "This matches $\\cos(A+B)$ with $A=70^\\circ,B=20^\\circ$, so it equals $\\cos 90^\\circ=0$. Recognizing the collapsed sum formula is the whole point — plugging in decimals should confirm $0$.",
                "zh": "它对应 $\\cos(A+B)$，$A=70^\\circ,B=20^\\circ$，故等于 $\\cos 90^\\circ=0$。关键在于识别这是收拢的和公式——代入小数也应得 $0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A student claims $\\dfrac{\\sin\\theta}{1+\\cos\\theta}=\\dfrac{1-\\cos\\theta}{\\sin\\theta}$. Multiplying the left side by the conjugate $\\dfrac{1-\\cos\\theta}{1-\\cos\\theta}$, which identity finishes the proof?",
                "zh": "某学生断言 $\\dfrac{\\sin\\theta}{1+\\cos\\theta}=\\dfrac{1-\\cos\\theta}{\\sin\\theta}$。将左侧乘以共轭 $\\dfrac{1-\\cos\\theta}{1-\\cos\\theta}$ 后，用哪个恒等式完成证明？"
              },
              "choices": [
                "$\\sin(-\\theta)=-\\sin\\theta$",
                "$1+\\tan^2\\theta=\\sec^2\\theta$",
                "$1-\\cos^2\\theta=\\sin^2\\theta$",
                "$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The denominator becomes $(1+\\cos\\theta)(1-\\cos\\theta)=1-\\cos^2\\theta=\\sin^2\\theta$, giving $\\dfrac{\\sin\\theta(1-\\cos\\theta)}{\\sin^2\\theta}=\\dfrac{1-\\cos\\theta}{\\sin\\theta}$. The Pythagorean identity is exactly what turns the product of conjugates into $\\sin^2\\theta$.",
                "zh": "分母变为 $(1+\\cos\\theta)(1-\\cos\\theta)=1-\\cos^2\\theta=\\sin^2\\theta$，得 $\\dfrac{\\sin\\theta(1-\\cos\\theta)}{\\sin^2\\theta}=\\dfrac{1-\\cos\\theta}{\\sin\\theta}$。正是毕达哥拉斯恒等式把共轭乘积化为 $\\sin^2\\theta$。"
              }
            }
          ]
        },
        {
          "id": "multiple-angle-and-trig-equations",
          "title": "Multiple-Angle Formulas and Trigonometric Equations",
          "titleZh": "倍角公式与三角方程",
          "content": [
            {
              "type": "h2",
              "en": "Double-Angle Formulas",
              "zh": "倍角公式"
            },
            {
              "type": "p",
              "en": "The double-angle formulas are not new laws — they are the sum formulas with $B=A$. Setting $B=A$ in $\\sin(A+B)$ and $\\cos(A+B)$ gives:",
              "zh": "倍角公式并非新定律——它们就是令 $B=A$ 的和公式。在 $\\sin(A+B)$ 与 $\\cos(A+B)$ 中令 $B=A$ 得："
            },
            {
              "type": "math",
              "tex": "\\sin 2A=2\\sin A\\cos A"
            },
            {
              "type": "math",
              "tex": "\\cos 2A=\\cos^2 A-\\sin^2 A=2\\cos^2 A-1=1-2\\sin^2 A"
            },
            {
              "type": "p",
              "en": "Cosine has three interchangeable forms; the Pythagorean identity converts between them. Choose whichever form matches the rest of your problem. The tangent version is:",
              "zh": "余弦有三种可互换的形式，毕达哥拉斯恒等式在它们之间转换。选用与题目其余部分匹配的那一形式。正切版本为："
            },
            {
              "type": "math",
              "tex": "\\tan 2A=\\dfrac{2\\tan A}{1-\\tan^2 A}"
            },
            {
              "type": "note",
              "en": "Common mistake: $\\sin 2A\\ne 2\\sin A$ and $\\cos 2A\\ne 2\\cos A$. The \"2\" is attached to the angle, not a factor you can pull out front. You must use the formulas.",
              "zh": "常见错误：$\\sin 2A\\ne 2\\sin A$，$\\cos 2A\\ne 2\\cos A$。“2”附在角上，而非可以提到前面的因子。必须使用公式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "If $\\cos\\theta=-\\tfrac{3}{5}$ and $\\theta$ is in Quadrant II, find $\\sin 2\\theta$.",
                "zh": "若 $\\cos\\theta=-\\tfrac{3}{5}$ 且 $\\theta$ 在第二象限，求 $\\sin 2\\theta$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "In QII sine is positive, so $\\sin\\theta=\\tfrac{4}{5}$. Then",
                  "zh": "第二象限中正弦为正，故 $\\sin\\theta=\\tfrac{4}{5}$。于是"
                },
                {
                  "type": "math",
                  "tex": "\\sin 2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\tfrac{4}{5}\\cdot\\left(-\\tfrac{3}{5}\\right)=-\\dfrac{24}{25}."
                },
                {
                  "type": "p",
                  "en": "The negative result makes sense: $2\\theta$ lands in a quadrant where sine is negative.",
                  "zh": "结果为负是合理的：$2\\theta$ 落在正弦为负的象限。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Power-Reducing and Half-Angle Formulas",
              "zh": "降幂公式与半角公式"
            },
            {
              "type": "p",
              "en": "Solving the cosine double-angle forms for the squared terms gives the power-reducing formulas, which trade a squared trig function for a first-power function of a doubled angle:",
              "zh": "把余弦倍角式对平方项求解，即得降幂公式，它把平方的三角函数换成倍角的一次函数："
            },
            {
              "type": "math",
              "tex": "\\sin^2 A=\\dfrac{1-\\cos 2A}{2} \\qquad \\cos^2 A=\\dfrac{1+\\cos 2A}{2}"
            },
            {
              "type": "note",
              "en": "Calculus preview: these are the formulas you will reach for to integrate $\\sin^2 x$ or $\\cos^2 x$. You cannot integrate $\\sin^2 x$ directly, but $\\tfrac{1-\\cos 2x}{2}$ integrates term by term. Power-reducing is a workhorse of integral calculus.",
              "zh": "微积分预览：这些正是你将用来对 $\\sin^2 x$ 或 $\\cos^2 x$ 积分的公式。$\\sin^2 x$ 无法直接积分，但 $\\tfrac{1-\\cos 2x}{2}$ 可逐项积分。降幂公式是积分学的主力工具。"
            },
            {
              "type": "p",
              "en": "Replacing $A$ with $\\tfrac{\\theta}{2}$ and taking a square root yields the half-angle formulas; the sign is chosen by the quadrant of $\\tfrac{\\theta}{2}$:",
              "zh": "把 $A$ 换成 $\\tfrac{\\theta}{2}$ 并开方即得半角公式；符号由 $\\tfrac{\\theta}{2}$ 所在象限决定："
            },
            {
              "type": "math",
              "tex": "\\sin\\dfrac{\\theta}{2}=\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{2}} \\qquad \\cos\\dfrac{\\theta}{2}=\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{2}}"
            },
            {
              "type": "h3",
              "en": "Product-to-Sum (Brief)",
              "zh": "积化和差（简述）"
            },
            {
              "type": "p",
              "en": "Occasionally you must turn a product into a sum. The most-used identity is",
              "zh": "有时需要把乘积化为和。最常用的恒等式是"
            },
            {
              "type": "math",
              "tex": "\\sin A\\cos B=\\tfrac{1}{2}\\big[\\sin(A+B)+\\sin(A-B)\\big]."
            },
            {
              "type": "h2",
              "en": "Solving Trigonometric Equations",
              "zh": "解三角方程"
            },
            {
              "type": "p",
              "en": "A trig equation asks for the angles that make it true. Because trig functions are periodic, there are usually infinitely many solutions. We first find all solutions in one period, typically $[0,2\\pi)$, then add the period to describe the general solution.",
              "zh": "三角方程求使其成立的角。由于三角函数具有周期性，通常有无穷多解。我们先在一个周期内（通常是 $[0,2\\pi)$）求出所有解，再加上周期以描述通解。"
            },
            {
              "type": "p",
              "en": "Core strategies: isolate the trig function, factor when possible, and use identities to reduce everything to a single trig function of a single angle. Equations that are quadratic in $\\sin$ or $\\cos$ factor just like ordinary quadratics.",
              "zh": "核心策略：孤立三角函数、尽量因式分解、用恒等式把一切化为单一角的单一三角函数。关于 $\\sin$ 或 $\\cos$ 的二次方程可像普通二次方程一样因式分解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Solve $2\\sin^2 x-\\sin x-1=0$ on $[0,2\\pi)$.",
                "zh": "在 $[0,2\\pi)$ 上解 $2\\sin^2 x-\\sin x-1=0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Treat it as quadratic in $u=\\sin x$: $2u^2-u-1=(2u+1)(u-1)=0$, so $\\sin x=-\\tfrac{1}{2}$ or $\\sin x=1$.",
                  "zh": "视为关于 $u=\\sin x$ 的二次式：$2u^2-u-1=(2u+1)(u-1)=0$，故 $\\sin x=-\\tfrac{1}{2}$ 或 $\\sin x=1$。"
                },
                {
                  "type": "p",
                  "en": "$\\sin x=1$ gives $x=\\tfrac{\\pi}{2}$. $\\sin x=-\\tfrac{1}{2}$ gives $x=\\tfrac{7\\pi}{6}$ and $x=\\tfrac{11\\pi}{6}$.",
                  "zh": "$\\sin x=1$ 得 $x=\\tfrac{\\pi}{2}$；$\\sin x=-\\tfrac{1}{2}$ 得 $x=\\tfrac{7\\pi}{6}$ 与 $x=\\tfrac{11\\pi}{6}$。"
                },
                {
                  "type": "math",
                  "tex": "x=\\tfrac{\\pi}{2},\\ \\tfrac{7\\pi}{6},\\ \\tfrac{11\\pi}{6}."
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Solve $\\sin 2x=\\sin x$ on $[0,2\\pi)$.",
                "zh": "在 $[0,2\\pi)$ 上解 $\\sin 2x=\\sin x$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Replace $\\sin 2x=2\\sin x\\cos x$ and move everything to one side. Do not divide by $\\sin x$ — that would discard solutions where $\\sin x=0$.",
                  "zh": "用 $\\sin 2x=2\\sin x\\cos x$ 代入并移项。不要除以 $\\sin x$——那会丢失 $\\sin x=0$ 的解。"
                },
                {
                  "type": "math",
                  "tex": "2\\sin x\\cos x-\\sin x=0 \\;\\Rightarrow\\; \\sin x(2\\cos x-1)=0."
                },
                {
                  "type": "p",
                  "en": "$\\sin x=0$ gives $x=0,\\pi$. $\\cos x=\\tfrac{1}{2}$ gives $x=\\tfrac{\\pi}{3},\\tfrac{5\\pi}{3}$.",
                  "zh": "$\\sin x=0$ 得 $x=0,\\pi$；$\\cos x=\\tfrac{1}{2}$ 得 $x=\\tfrac{\\pi}{3},\\tfrac{5\\pi}{3}$。"
                },
                {
                  "type": "math",
                  "tex": "x=0,\\ \\tfrac{\\pi}{3},\\ \\pi,\\ \\tfrac{5\\pi}{3}."
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: never divide both sides of a trig equation by a variable factor like $\\sin x$. Factoring instead of dividing preserves every solution. Also, when you square both sides to clear a radical or combine functions, check for extraneous solutions by substituting back.",
              "zh": "常见错误：切勿把三角方程两边同除以像 $\\sin x$ 这样的变量因子。用因式分解代替相除可保留每一个解。此外，若为消去根号或合并函数而两边平方，务必代回检验以排除增根。"
            },
            {
              "type": "h3",
              "en": "General Solutions",
              "zh": "通解"
            },
            {
              "type": "p",
              "en": "To describe every solution, attach the period. Sine and cosine repeat every $2\\pi$, so add $2\\pi n$ for integer $n$; tangent repeats every $\\pi$, so add $\\pi n$. For instance, all solutions of $\\cos x=\\tfrac{1}{2}$ are $x=\\tfrac{\\pi}{3}+2\\pi n$ and $x=\\tfrac{5\\pi}{3}+2\\pi n$.",
              "zh": "为描述全部解，附上周期。正弦和余弦以 $2\\pi$ 为周期，故加 $2\\pi n$（$n$ 为整数）；正切以 $\\pi$ 为周期，故加 $\\pi n$。例如 $\\cos x=\\tfrac{1}{2}$ 的全部解为 $x=\\tfrac{\\pi}{3}+2\\pi n$ 与 $x=\\tfrac{5\\pi}{3}+2\\pi n$。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which expression is equal to $\\cos 2A$?",
                "zh": "下列哪个表达式等于 $\\cos 2A$？"
              },
              "choices": [
                "$2\\cos A$",
                "$1-2\\sin^2 A$",
                "$2\\sin A\\cos A$",
                "$\\cos^2 A+\\sin^2 A$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\cos 2A=1-2\\sin^2 A$ is one of its three forms. $2\\sin A\\cos A$ is $\\sin 2A$, and $\\cos^2 A+\\sin^2 A=1$ always, not $\\cos 2A$.",
                "zh": "$\\cos 2A=1-2\\sin^2 A$ 是它的三种形式之一。$2\\sin A\\cos A$ 是 $\\sin 2A$，而 $\\cos^2 A+\\sin^2 A$ 恒为 $1$，并非 $\\cos 2A$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $\\sin\\theta=\\tfrac{3}{5}$ and $\\cos\\theta=\\tfrac{4}{5}$, find $\\sin 2\\theta$ as a fraction $p/q$.",
                "zh": "若 $\\sin\\theta=\\tfrac{3}{5}$，$\\cos\\theta=\\tfrac{4}{5}$，求 $\\sin 2\\theta$，以分数 $p/q$ 作答。"
              },
              "answer": "24/25",
              "accept": [
                "0.96"
              ],
              "explanation": {
                "en": "$\\sin 2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\tfrac35\\cdot\\tfrac45=\\tfrac{24}{25}$. Writing $2\\sin\\theta=\\tfrac65$ instead is the classic error.",
                "zh": "$\\sin 2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\tfrac35\\cdot\\tfrac45=\\tfrac{24}{25}$。误写成 $2\\sin\\theta=\\tfrac65$ 是经典错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To integrate $\\cos^2 x$ in calculus you would first rewrite it as:",
                "zh": "在微积分中对 $\\cos^2 x$ 积分，首先应把它改写为："
              },
              "choices": [
                "$2\\cos^2 x-1$",
                "$\\dfrac{1-\\cos 2x}{2}$",
                "$\\dfrac{1+\\cos 2x}{2}$",
                "$1-\\sin^2 x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The power-reducing formula $\\cos^2 x=\\tfrac{1+\\cos 2x}{2}$ turns the un-integrable square into a sum of easy terms. The version with a minus is the formula for $\\sin^2 x$.",
                "zh": "降幂公式 $\\cos^2 x=\\tfrac{1+\\cos 2x}{2}$ 把无法直接积分的平方化为易积的和。带减号的版本是 $\\sin^2 x$ 的公式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many solutions does $2\\cos^2 x-\\cos x-1=0$ have on $[0,2\\pi)$? Give an integer.",
                "zh": "$2\\cos^2 x-\\cos x-1=0$ 在 $[0,2\\pi)$ 上有几个解？答案为整数。"
              },
              "answer": "3",
              "accept": [],
              "explanation": {
                "en": "Factor $(2\\cos x+1)(\\cos x-1)=0$: $\\cos x=-\\tfrac12$ gives $x=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$; $\\cos x=1$ gives $x=0$. That is $3$ solutions.",
                "zh": "因式分解 $(2\\cos x+1)(\\cos x-1)=0$：$\\cos x=-\\tfrac12$ 得 $x=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$；$\\cos x=1$ 得 $x=0$。共 $3$ 个解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "While solving $\\sin 2x=\\cos x$ a student divides both sides by $\\cos x$. What is the danger?",
                "zh": "在解 $\\sin 2x=\\cos x$ 时，某学生把两边同除以 $\\cos x$。有何隐患？"
              },
              "choices": [
                "Nothing — it is always safe",
                "It creates extraneous solutions",
                "It changes the period of the equation",
                "It discards the solutions where $\\cos x=0$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Using $\\sin 2x=2\\sin x\\cos x$, the equation is $\\cos x(2\\sin x-1)=0$. Dividing by $\\cos x$ throws away $\\cos x=0$ (i.e. $x=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$). Factor instead of dividing.",
                "zh": "用 $\\sin 2x=2\\sin x\\cos x$，方程为 $\\cos x(2\\sin x-1)=0$。除以 $\\cos x$ 会丢掉 $\\cos x=0$（即 $x=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$）。应因式分解而非相除。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the general solution of $\\tan x=1$?",
                "zh": "$\\tan x=1$ 的通解是什么？"
              },
              "choices": [
                "$x=\\tfrac{\\pi}{4}+\\pi n$",
                "$x=\\tfrac{\\pi}{4}+2\\pi n$",
                "$x=\\tfrac{\\pi}{4}+\\tfrac{\\pi}{2}n$",
                "$x=\\tfrac{\\pi}{3}+\\pi n$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Tangent has period $\\pi$, so the single solution $\\tfrac{\\pi}{4}$ repeats every $\\pi$: $x=\\tfrac{\\pi}{4}+\\pi n$. Using $2\\pi n$ (the sine/cosine period) would miss half the solutions.",
                "zh": "正切周期为 $\\pi$，故单个解 $\\tfrac{\\pi}{4}$ 每 $\\pi$ 重复一次：$x=\\tfrac{\\pi}{4}+\\pi n$。用 $2\\pi n$（正弦余弦周期）会漏掉一半的解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $2\\sin x=1$ on $[0,2\\pi)$. The two solutions are $\\tfrac{\\pi}{6}$ and $\\tfrac{a\\pi}{6}$. Give the integer $a$.",
                "zh": "在 $[0,2\\pi)$ 上解 $2\\sin x=1$。两个解为 $\\tfrac{\\pi}{6}$ 与 $\\tfrac{a\\pi}{6}$，给出整数 $a$。"
              },
              "answer": "5",
              "accept": [],
              "explanation": {
                "en": "$\\sin x=\\tfrac12$ gives $x=\\tfrac{\\pi}{6}$ (QI) and $x=\\pi-\\tfrac{\\pi}{6}=\\tfrac{5\\pi}{6}$ (QII), so $a=5$. Forgetting the second-quadrant angle is the usual omission.",
                "zh": "$\\sin x=\\tfrac12$ 得 $x=\\tfrac{\\pi}{6}$（第一象限）与 $x=\\pi-\\tfrac{\\pi}{6}=\\tfrac{5\\pi}{6}$（第二象限），故 $a=5$。常见遗漏是漏掉第二象限的角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A weight on a spring has height $h(t)=4\\sin t\\cos t$ cm at time $t$ seconds. Using an identity, at what time in $[0,\\tfrac{\\pi}{2})$ does it first reach maximum height?",
                "zh": "弹簧上的重物在 $t$ 秒时高度为 $h(t)=4\\sin t\\cos t$ 厘米。用恒等式化简，它在 $[0,\\tfrac{\\pi}{2})$ 内何时首次到达最大高度？"
              },
              "choices": [
                "$t=\\tfrac{\\pi}{6}$",
                "$t=\\tfrac{\\pi}{2}$",
                "$t=\\tfrac{\\pi}{4}$",
                "$t=0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Rewrite $h(t)=2(2\\sin t\\cos t)=2\\sin 2t$. This is maximized when $\\sin 2t=1$, i.e. $2t=\\tfrac{\\pi}{2}$, so $t=\\tfrac{\\pi}{4}$. Without the double-angle identity the doubled frequency is easy to miss.",
                "zh": "改写 $h(t)=2(2\\sin t\\cos t)=2\\sin 2t$。当 $\\sin 2t=1$ 即 $2t=\\tfrac{\\pi}{2}$ 时最大，故 $t=\\tfrac{\\pi}{4}$。不用倍角恒等式容易忽略频率加倍。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "applications-of-trigonometry",
      "title": "Unit 6: Applications of Trigonometry",
      "titleZh": "第六单元：三角学的应用",
      "lessons": [
        {
          "id": "law-of-sines-and-cosines",
          "title": "The Law of Sines and the Law of Cosines",
          "titleZh": "正弦定理与余弦定理",
          "content": [
            {
              "type": "h2",
              "en": "Beyond Right Triangles",
              "zh": "走出直角三角形"
            },
            {
              "type": "p",
              "en": "Right-triangle trigonometry solves triangles that contain a $90^\\circ$ angle. But surveyors, navigators, and engineers constantly work with oblique triangles that have no right angle. Two theorems let us solve any triangle from just three pieces of information: the Law of Sines and the Law of Cosines. Throughout, we label the angles $A$, $B$, $C$ and the sides opposite them $a$, $b$, $c$.",
              "zh": "直角三角形三角学能解出含有 $90^\\circ$ 角的三角形。但测量员、航海员和工程师常常要处理没有直角的斜三角形。两条定理让我们仅凭三个已知量就能解出任意三角形：正弦定理与余弦定理。全文中，我们用 $A$、$B$、$C$ 表示三个角，用它们的对边 $a$、$b$、$c$ 表示对应的边。"
            },
            {
              "type": "p",
              "en": "The key skill is diagnosis: look at which three quantities you are given, then pick the law that fits. The abbreviations describe the pattern of what you know — $A$ for a known angle, $S$ for a known side, read around the triangle.",
              "zh": "关键在于“诊断”：看清题目给了哪三个量，再选择合适的定理。这些缩写描述已知量的排列方式——$A$ 表示已知角，$S$ 表示已知边，沿三角形依次读出。"
            },
            {
              "type": "h2",
              "en": "The Law of Sines",
              "zh": "正弦定理"
            },
            {
              "type": "p",
              "en": "In any triangle, the ratio of each side to the sine of its opposite angle is the same:",
              "zh": "在任意三角形中，每条边与其对角正弦之比都相等："
            },
            {
              "type": "math",
              "tex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}"
            },
            {
              "type": "p",
              "en": "The Law of Sines works whenever you can pair a side with its opposite angle. That happens in two clean cases: AAS (two angles and a non-included side) and ASA (two angles and the included side). In both, find the third angle first using $A + B + C = 180^\\circ$, then set up a ratio.",
              "zh": "只要能把一条边和它的对角配成一对，就能用正弦定理。这有两种干净的情形：AAS（两角与一条非夹边）和 ASA（两角与夹边）。两种情形都先用 $A + B + C = 180^\\circ$ 求出第三个角，再列出比例式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1 — AAS",
                "zh": "例题 1 — AAS"
              },
              "problem": {
                "en": "In triangle $ABC$, $A = 40^\\circ$, $B = 75^\\circ$, and $a = 12$. Find side $b$. Round to the nearest tenth.",
                "zh": "三角形 $ABC$ 中，$A = 40^\\circ$，$B = 75^\\circ$，$a = 12$。求边 $b$，结果保留一位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "We have a side ($a$) with its opposite angle ($A$), and we want $b$ opposite $B$ — a perfect Law of Sines pairing.",
                  "zh": "已知一条边 $a$ 及其对角 $A$，要求的 $b$ 与 $B$ 也是对边对角——正好可用正弦定理。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{b}{\\sin 75^\\circ} = \\frac{12}{\\sin 40^\\circ}"
                },
                {
                  "type": "p",
                  "en": "Solve for $b$: $b = \\dfrac{12 \\sin 75^\\circ}{\\sin 40^\\circ} \\approx \\dfrac{12(0.9659)}{0.6428} \\approx 18.0$.",
                  "zh": "解出 $b$：$b = \\dfrac{12 \\sin 75^\\circ}{\\sin 40^\\circ} \\approx \\dfrac{12(0.9659)}{0.6428} \\approx 18.0$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Ambiguous Case: SSA",
              "zh": "模糊情形：SSA"
            },
            {
              "type": "p",
              "en": "When you are given two sides and an angle opposite one of them (SSA), the triangle is not always determined. Suppose you know angle $A$, its opposite side $a$, and an adjacent side $b$. The height from $C$ to the base is $h = b \\sin A$. Comparing $a$ to $h$ (and to $b$) tells you how many triangles exist.",
              "zh": "当已知两条边以及其中一条边的对角（SSA）时，三角形未必唯一确定。设已知角 $A$、其对边 $a$ 和邻边 $b$。从 $C$ 到底边的高为 $h = b \\sin A$。把 $a$ 与 $h$（以及与 $b$）比较，就能判断存在几个三角形。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $a < h = b\\sin A$: side $a$ is too short to reach the base — no triangle.",
                  "zh": "若 $a < h = b\\sin A$：边 $a$ 太短，够不到底边——无三角形。"
                },
                {
                  "en": "If $a = h$: side $a$ just reaches perpendicularly — exactly one (right) triangle.",
                  "zh": "若 $a = h$：边 $a$ 恰好垂直触底——恰有一个（直角）三角形。"
                },
                {
                  "en": "If $h < a < b$: side $a$ can swing to two positions — two triangles.",
                  "zh": "若 $h < a < b$：边 $a$ 可摆到两个位置——两个三角形。"
                },
                {
                  "en": "If $a \\ge b$: side $a$ is long enough that only one swing lands inside — one triangle.",
                  "zh": "若 $a \\ge b$：边 $a$ 足够长，只有一个摆放落在内部——一个三角形。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Mechanically: solve $\\sin B = \\dfrac{b \\sin A}{a}$. If the value exceeds $1$, no triangle. Otherwise the calculator gives an acute $B_1$; the second candidate is $B_2 = 180^\\circ - B_1$. Keep $B_2$ only if $A + B_2 < 180^\\circ$.",
              "zh": "操作上：解 $\\sin B = \\dfrac{b \\sin A}{a}$。若该值大于 $1$，无三角形；否则计算器给出一个锐角 $B_1$，第二个候选为 $B_2 = 180^\\circ - B_1$。仅当 $A + B_2 < 180^\\circ$ 时保留 $B_2$。"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting the second angle in SSA. The sine of an angle and the sine of its supplement are equal ($\\sin 30^\\circ = \\sin 150^\\circ$), so your calculator only reports the acute solution. Always test whether the obtuse partner also fits before discarding it.",
              "zh": "常见错误：SSA 中漏掉第二个角。一个角与其补角的正弦相等（$\\sin 30^\\circ = \\sin 150^\\circ$），所以计算器只报告锐角解。丢弃之前，务必检验它的钝角搭档是否也成立。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2 — Two triangles",
                "zh": "例题 2 — 两个三角形"
              },
              "problem": {
                "en": "Solve triangle $ABC$ with $A = 30^\\circ$, $a = 6$, $b = 10$. How many triangles exist, and what are the possible values of $B$?",
                "zh": "解三角形 $ABC$，已知 $A = 30^\\circ$，$a = 6$，$b = 10$。存在几个三角形？$B$ 的可能值是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Height $h = b \\sin A = 10 \\sin 30^\\circ = 5$. Since $h = 5 < a = 6 < b = 10$, we are in the two-triangle case.",
                  "zh": "高 $h = b \\sin A = 10 \\sin 30^\\circ = 5$。因为 $h = 5 < a = 6 < b = 10$，属于两个三角形的情形。"
                },
                {
                  "type": "math",
                  "tex": "\\sin B = \\frac{b \\sin A}{a} = \\frac{10 \\sin 30^\\circ}{6} = \\frac{5}{6} \\approx 0.8333"
                },
                {
                  "type": "p",
                  "en": "The acute solution is $B_1 \\approx 56.4^\\circ$. The obtuse partner is $B_2 = 180^\\circ - 56.4^\\circ = 123.6^\\circ$. Check: $A + B_2 = 30^\\circ + 123.6^\\circ = 153.6^\\circ < 180^\\circ$, so it is valid. Both triangles exist, with $B \\approx 56.4^\\circ$ or $B \\approx 123.6^\\circ$.",
                  "zh": "锐角解为 $B_1 \\approx 56.4^\\circ$。钝角搭档为 $B_2 = 180^\\circ - 56.4^\\circ = 123.6^\\circ$。检验：$A + B_2 = 30^\\circ + 123.6^\\circ = 153.6^\\circ < 180^\\circ$，成立。两个三角形都存在，$B \\approx 56.4^\\circ$ 或 $B \\approx 123.6^\\circ$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Law of Cosines",
              "zh": "余弦定理"
            },
            {
              "type": "p",
              "en": "When you cannot pair a side with its opposite angle, use the Law of Cosines. It generalizes the Pythagorean theorem — the extra term $-2ab\\cos C$ measures how far angle $C$ is from $90^\\circ$ (when $C = 90^\\circ$, $\\cos C = 0$ and it collapses to $c^2 = a^2 + b^2$).",
              "zh": "当无法把边与其对角配对时，使用余弦定理。它是勾股定理的推广——多出的 $-2ab\\cos C$ 一项衡量角 $C$ 偏离 $90^\\circ$ 的程度（当 $C = 90^\\circ$ 时，$\\cos C = 0$，退化为 $c^2 = a^2 + b^2$）。"
            },
            {
              "type": "math",
              "tex": "c^2 = a^2 + b^2 - 2ab\\cos C"
            },
            {
              "type": "p",
              "en": "The Law of Cosines handles the two cases the Law of Sines cannot start: SAS (two sides and the included angle — use it to find the third side) and SSS (all three sides — solve for a cosine to find an angle). Rearranged for an angle:",
              "zh": "余弦定理处理正弦定理无法起步的两种情形：SAS（两边及夹角——用来求第三条边）和 SSS（三边全知——解出余弦以求角）。整理成求角形式："
            },
            {
              "type": "math",
              "tex": "\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}"
            },
            {
              "type": "note",
              "en": "Test tip: after finding one angle by the Law of Cosines in an SSS problem, it is safest to find the next angle by the Law of Cosines again, not the Law of Sines. The Law of Sines can hide an obtuse angle behind its acute supplement, but $\\cos\\theta$ is negative for obtuse angles, so the cosine method never disguises the answer.",
              "zh": "考试提示：在 SSS 问题中用余弦定理求出一个角后，最稳妥的是继续用余弦定理求下一个角，而非正弦定理。正弦定理会把钝角藏在它的锐角补角背后，而钝角的 $\\cos\\theta$ 为负，所以余弦方法绝不会掩盖答案。"
            },
            {
              "type": "h2",
              "en": "Area of a Triangle",
              "zh": "三角形面积"
            },
            {
              "type": "p",
              "en": "When you know two sides and the included angle (SAS), the area is half their product times the sine of the angle:",
              "zh": "当已知两边及其夹角（SAS）时，面积等于两边之积的一半乘以夹角的正弦："
            },
            {
              "type": "math",
              "tex": "\\text{Area} = \\tfrac{1}{2}ab\\sin C"
            },
            {
              "type": "p",
              "en": "When you know all three sides (SSS), use Heron's formula. Let $s = \\dfrac{a+b+c}{2}$ be the semiperimeter; then",
              "zh": "当已知三条边（SSS）时，用海伦公式。设 $s = \\dfrac{a+b+c}{2}$ 为半周长，则"
            },
            {
              "type": "math",
              "tex": "\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}"
            },
            {
              "type": "h2",
              "en": "Bearings and Navigation",
              "zh": "方位角与导航"
            },
            {
              "type": "p",
              "en": "A bearing describes a direction as an angle measured clockwise from due north (so a bearing of $000^\\circ$ is north, $090^\\circ$ is east, $180^\\circ$ is south). Word problems in surveying and navigation translate a physical situation into a triangle; you draw it, mark the known parts, diagnose the case, and apply the right law.",
              "zh": "方位角把方向表示为从正北方向顺时针量得的角（因此方位角 $000^\\circ$ 为北，$090^\\circ$ 为东，$180^\\circ$ 为南）。测量与导航中的应用题把实际情境转化为三角形；你画出图形、标出已知部分、诊断情形，再套用相应定理。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3 — Navigation (SAS)",
                "zh": "例题 3 — 导航（SAS）"
              },
              "problem": {
                "en": "A ship sails $18$ km on a bearing of $050^\\circ$, then turns and sails $25$ km on a bearing of $110^\\circ$. How far is the ship from its starting point? Round to the nearest tenth.",
                "zh": "一艘船沿方位角 $050^\\circ$ 航行 $18$ km，然后转向沿方位角 $110^\\circ$ 航行 $25$ km。船此时离出发点多远？结果保留一位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Call the start $P$, the turn $Q$, the end $R$. The interior angle at $Q$ is found from the bearings: the incoming leg has reverse bearing $050^\\circ + 180^\\circ = 230^\\circ$, and the outgoing leg has bearing $110^\\circ$, so the turn angle is $230^\\circ - 110^\\circ = 120^\\circ$.",
                  "zh": "记起点为 $P$、转向点为 $Q$、终点为 $R$。$Q$ 处的内角由方位角求得：来向的反方位角为 $050^\\circ + 180^\\circ = 230^\\circ$，去向的方位角为 $110^\\circ$，所以夹角为 $230^\\circ - 110^\\circ = 120^\\circ$。"
                },
                {
                  "type": "p",
                  "en": "This is SAS with sides $18$ and $25$ around a $120^\\circ$ angle. By the Law of Cosines,",
                  "zh": "这是 SAS：两边 $18$ 与 $25$ 夹 $120^\\circ$ 角。由余弦定理，"
                },
                {
                  "type": "math",
                  "tex": "PR^2 = 18^2 + 25^2 - 2(18)(25)\\cos 120^\\circ = 324 + 625 - 900(-0.5) = 1399"
                },
                {
                  "type": "p",
                  "en": "So $PR = \\sqrt{1399} \\approx 37.4$ km.",
                  "zh": "所以 $PR = \\sqrt{1399} \\approx 37.4$ km。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Calculus preview: the Law of Cosines is the seed of the dot-product formula $\\vec{u}\\cdot\\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\theta$ you will use in multivariable calculus and physics. The $-2ab\\cos C$ term is exactly what appears when you expand $|\\vec{u} - \\vec{v}|^2$.",
              "zh": "微积分预览：余弦定理是点积公式 $\\vec{u}\\cdot\\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\theta$ 的种子，你将在多元微积分和物理中用到它。展开 $|\\vec{u} - \\vec{v}|^2$ 时，出现的正是 $-2ab\\cos C$ 这一项。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "You are given $A = 55^\\circ$, $B = 65^\\circ$, and side $c = 20$. Which law should you use first, and what should you find first?",
                "zh": "已知 $A = 55^\\circ$，$B = 65^\\circ$，边 $c = 20$。应先用哪条定理，并先求什么？"
              },
              "choices": [
                "Law of Cosines directly for a side",
                "Find $C = 60^\\circ$, then Law of Sines",
                "Law of Sines for angle $C$",
                "Heron's formula"
              ],
              "answer": 1,
              "explanation": {
                "en": "This is ASA: no side is yet paired with its opposite angle. Get the third angle $C = 180^\\circ - 55^\\circ - 65^\\circ = 60^\\circ$, which pairs with the known side $c$, then use the Law of Sines. Jumping to the Law of Cosines is tempting but you have no two-sides-and-included-angle set.",
                "zh": "这是 ASA：目前没有边与其对角配对。先求第三个角 $C = 180^\\circ - 55^\\circ - 65^\\circ = 60^\\circ$，它与已知边 $c$ 配对，再用正弦定理。直接跳到余弦定理很诱人，但你并没有“两边夹一角”的组合。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which set of given information is the Law of Cosines the correct first step?",
                "zh": "对于哪组已知条件，余弦定理是正确的第一步？"
              },
              "choices": [
                "AAA",
                "AAS or ASA",
                "SAS or SSS",
                "SSA always gives one triangle"
              ],
              "answer": 2,
              "explanation": {
                "en": "The Law of Cosines is the entry point for SAS (find the third side) and SSS (find an angle), because in those cases no side is paired with its opposite angle. AAS and ASA are Law of Sines cases, and AAA determines only shape, not size.",
                "zh": "余弦定理是 SAS（求第三边）和 SSS（求角）的入口，因为这两种情形没有边与对角配对。AAS 与 ASA 是正弦定理的情形，而 AAA 只决定形状不决定大小。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In triangle $ABC$, $A = 35^\\circ$, $a = 10$, and $b = 14$. Compute $\\sin B = \\dfrac{b\\sin A}{a}$ and round to two decimal places. Give a decimal.",
                "zh": "三角形 $ABC$ 中，$A = 35^\\circ$，$a = 10$，$b = 14$。计算 $\\sin B = \\dfrac{b\\sin A}{a}$，保留两位小数，填一个小数。"
              },
              "answer": "0.80",
              "accept": [
                "0.8",
                ".8",
                ".80"
              ],
              "explanation": {
                "en": "$\\sin B = \\dfrac{14\\sin 35^\\circ}{10} = \\dfrac{14(0.5736)}{10} \\approx 0.80$. Because this is less than $1$ and $h = 14\\sin35^\\circ \\approx 8.03 < a =10 < b$, two triangles exist.",
                "zh": "$\\sin B = \\dfrac{14\\sin 35^\\circ}{10} = \\dfrac{14(0.5736)}{10} \\approx 0.80$。由于它小于 $1$ 且 $h = 14\\sin35^\\circ \\approx 8.03 < a =10 < b$，存在两个三角形。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Given $A = 50^\\circ$, $a = 4$, $b = 9$: how many triangles are possible?",
                "zh": "已知 $A = 50^\\circ$，$a = 4$，$b = 9$：可能有几个三角形？"
              },
              "choices": [
                "Infinitely many",
                "Exactly one",
                "Exactly two",
                "Zero"
              ],
              "answer": 3,
              "explanation": {
                "en": "The height is $h = b\\sin A = 9\\sin 50^\\circ \\approx 6.89$. Since $a = 4 < h \\approx 6.89$, side $a$ is too short to reach the base, so no triangle exists. Equivalently $\\sin B = \\frac{9\\sin50^\\circ}{4}\\approx 1.72 > 1$, which is impossible.",
                "zh": "高为 $h = b\\sin A = 9\\sin 50^\\circ \\approx 6.89$。由于 $a = 4 < h \\approx 6.89$，边 $a$ 太短够不到底边，故无三角形。等价地 $\\sin B = \\frac{9\\sin50^\\circ}{4}\\approx 1.72 > 1$，不可能成立。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A triangle has sides $a = 5$, $b = 7$, and included angle $C = 60^\\circ$. Find $c^2$ using the Law of Cosines. Give an integer.",
                "zh": "三角形有边 $a = 5$、$b = 7$，夹角 $C = 60^\\circ$。用余弦定理求 $c^2$，填一个整数。"
              },
              "answer": "39",
              "accept": [
                "39.0"
              ],
              "explanation": {
                "en": "$c^2 = 5^2 + 7^2 - 2(5)(7)\\cos 60^\\circ = 25 + 49 - 70(0.5) = 74 - 35 = 39$. A common slip is using $+2ab\\cos C$; the sign must be negative.",
                "zh": "$c^2 = 5^2 + 7^2 - 2(5)(7)\\cos 60^\\circ = 25 + 49 - 70(0.5) = 74 - 35 = 39$。常见错误是写成 $+2ab\\cos C$；符号必须是负号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the area of a triangle with $a = 8$, $b = 10$, and included angle $C = 30^\\circ$. Give an integer.",
                "zh": "求边 $a = 8$、$b = 10$、夹角 $C = 30^\\circ$ 的三角形面积，填一个整数。"
              },
              "answer": "20",
              "accept": [
                "20.0"
              ],
              "explanation": {
                "en": "Area $= \\tfrac12 ab\\sin C = \\tfrac12(8)(10)\\sin 30^\\circ = 40 \\times 0.5 = 20$. You must use the sine of the included angle, not any other angle.",
                "zh": "面积 $= \\tfrac12 ab\\sin C = \\tfrac12(8)(10)\\sin 30^\\circ = 40 \\times 0.5 = 20$。必须用夹角的正弦，而不是其他角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A triangle has sides $6$, $8$, and $10$. Its area by Heron's formula is:",
                "zh": "三角形三边为 $6$、$8$、$10$。用海伦公式求得其面积为："
              },
              "choices": [
                "$24$",
                "$30$",
                "$48$",
                "$20$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The semiperimeter is $s = \\frac{6+8+10}{2} = 12$. Area $= \\sqrt{12(12-6)(12-8)(12-10)} = \\sqrt{12\\cdot6\\cdot4\\cdot2} = \\sqrt{576} = 24$. (This is also a $6$-$8$-$10$ right triangle, so $\\tfrac12(6)(8)=24$ confirms it.)",
                "zh": "半周长 $s = \\frac{6+8+10}{2} = 12$。面积 $= \\sqrt{12(12-6)(12-8)(12-10)} = \\sqrt{12\\cdot6\\cdot4\\cdot2} = \\sqrt{576} = 24$。（这也是 $6$-$8$-$10$ 直角三角形，$\\tfrac12(6)(8)=24$ 可验证。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A surveyor stands at point $P$ and sights two landmarks: $Q$ is $300$ m away and $R$ is $500$ m away, with the angle $QPR = 72^\\circ$ between the sightlines. To find the distance $QR$ between the landmarks, the surveyor should:",
                "zh": "一名测量员站在点 $P$，观测两个地标：$Q$ 距离 $300$ m，$R$ 距离 $500$ m，两条视线间的夹角 $QPR = 72^\\circ$。要求两地标间距离 $QR$，测量员应："
              },
              "choices": [
                "Add the two distances: $300 + 500$",
                "Use the Law of Sines with angle $72^\\circ$",
                "Use the Law of Cosines: $QR^2 = 300^2 + 500^2 - 2(300)(500)\\cos 72^\\circ$",
                "Use Heron's formula on $300$, $500$, $72$"
              ],
              "answer": 2,
              "explanation": {
                "en": "This is SAS: two sides $300$ and $500$ with the included angle $72^\\circ$. Only the Law of Cosines can find the missing side directly. Adding the distances would only be correct if the landmarks were in exactly opposite directions, and Heron's formula needs three sides, not two sides and an angle.",
                "zh": "这是 SAS：两边 $300$ 与 $500$ 夹 $72^\\circ$ 角。只有余弦定理能直接求出缺失的边。只有当两地标恰好方向相反时相加才正确；海伦公式需要三条边，而非两边一角。"
              }
            }
          ]
        },
        {
          "id": "polar-coordinates-and-complex",
          "title": "Polar Coordinates and Complex Numbers in Polar Form",
          "titleZh": "极坐标与复数的极坐标形式",
          "content": [
            {
              "type": "h2",
              "en": "A New Address System",
              "zh": "一套新的定位系统"
            },
            {
              "type": "p",
              "en": "Rectangular coordinates locate a point by how far right and up it is: $(x, y)$. Polar coordinates instead give a distance and a direction: $(r, \\theta)$, where $r$ is the distance from the origin (the pole) and $\\theta$ is the angle measured counterclockwise from the positive $x$-axis (the polar axis). This viewpoint makes circular and spiral motion effortless to describe, which is why it dominates physics and, later, polar integration in calculus.",
              "zh": "直角坐标用“向右多少、向上多少”来定位一个点：$(x, y)$。极坐标则给出距离和方向：$(r, \\theta)$，其中 $r$ 是到原点（极点）的距离，$\\theta$ 是从正 $x$ 轴（极轴）逆时针量得的角。这一视角使圆周与螺旋运动的描述变得轻而易举，因此它主导着物理学，以及日后微积分中的极坐标积分。"
            },
            {
              "type": "h2",
              "en": "Converting Between Forms",
              "zh": "两种形式的互换"
            },
            {
              "type": "p",
              "en": "The two systems are linked by a right triangle whose legs are $x$ and $y$ and whose hypotenuse is $r$:",
              "zh": "两套系统由一个直角三角形联系起来，其两条直角边为 $x$ 和 $y$，斜边为 $r$："
            },
            {
              "type": "math",
              "tex": "x = r\\cos\\theta \\qquad y = r\\sin\\theta"
            },
            {
              "type": "math",
              "tex": "r^2 = x^2 + y^2 \\qquad \\tan\\theta = \\frac{y}{x}"
            },
            {
              "type": "note",
              "en": "Common mistake: reading $\\theta$ straight off $\\tan^{-1}(y/x)$. The calculator always returns an angle in quadrant I or IV, so if your point is in quadrant II or III you must add $180^\\circ$ (or $\\pi$). Always check which quadrant $(x,y)$ actually lies in before committing to $\\theta$.",
              "zh": "常见错误：直接用 $\\tan^{-1}(y/x)$ 读出 $\\theta$。计算器总是返回第一或第四象限的角，所以若点在第二或第三象限，必须加 $180^\\circ$（或 $\\pi$）。确定 $\\theta$ 之前，务必先检查 $(x,y)$ 实际落在哪个象限。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1 — Rectangular to polar",
                "zh": "例题 1 — 直角坐标化极坐标"
              },
              "problem": {
                "en": "Convert the point $(-2, 2)$ to polar form with $r > 0$ and $0 \\le \\theta < 2\\pi$.",
                "zh": "把点 $(-2, 2)$ 化为极坐标，要求 $r > 0$ 且 $0 \\le \\theta < 2\\pi$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First $r = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$.",
                  "zh": "先求 $r = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$。"
                },
                {
                  "type": "p",
                  "en": "Then $\\tan\\theta = \\dfrac{2}{-2} = -1$. The point $(-2,2)$ is in quadrant II, so $\\theta = \\dfrac{3\\pi}{4}$ (not the calculator's $-\\dfrac{\\pi}{4}$).",
                  "zh": "再求 $\\tan\\theta = \\dfrac{2}{-2} = -1$。点 $(-2,2)$ 在第二象限，所以 $\\theta = \\dfrac{3\\pi}{4}$（而非计算器给出的 $-\\dfrac{\\pi}{4}$）。"
                },
                {
                  "type": "p",
                  "en": "The polar form is $\\left(2\\sqrt{2}, \\dfrac{3\\pi}{4}\\right)$.",
                  "zh": "极坐标形式为 $\\left(2\\sqrt{2}, \\dfrac{3\\pi}{4}\\right)$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Multiple Representations",
              "zh": "一点多表示"
            },
            {
              "type": "p",
              "en": "Unlike rectangular coordinates, a polar point has infinitely many names. Adding $2\\pi$ to $\\theta$ lands on the same spot, so $(r, \\theta)$ and $(r, \\theta + 2\\pi)$ are identical. You may also use a negative radius: $(-r, \\theta)$ means \"go distance $r$ in the opposite direction,\" which equals $(r, \\theta + \\pi)$. For example, $\\left(3, \\dfrac{\\pi}{6}\\right)$, $\\left(3, \\dfrac{13\\pi}{6}\\right)$, and $\\left(-3, \\dfrac{7\\pi}{6}\\right)$ are all the same point.",
              "zh": "与直角坐标不同，一个极坐标点有无穷多个名字。给 $\\theta$ 加 $2\\pi$ 会落在同一位置，所以 $(r, \\theta)$ 与 $(r, \\theta + 2\\pi)$ 相同。也可以用负半径：$(-r, \\theta)$ 表示“沿相反方向走距离 $r$”，等于 $(r, \\theta + \\pi)$。例如 $\\left(3, \\dfrac{\\pi}{6}\\right)$、$\\left(3, \\dfrac{13\\pi}{6}\\right)$ 和 $\\left(-3, \\dfrac{7\\pi}{6}\\right)$ 是同一个点。"
            },
            {
              "type": "h2",
              "en": "Common Polar Graphs",
              "zh": "常见极坐标图形"
            },
            {
              "type": "p",
              "en": "Because polar equations relate $r$ to $\\theta$, curves that are messy in rectangular form become clean. Here are the ones to recognize:",
              "zh": "由于极坐标方程把 $r$ 与 $\\theta$ 联系起来，一些在直角坐标中很复杂的曲线变得简洁。以下是需要识别的几种："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Circles: $r = a$ is a circle of radius $a$ centered at the origin. $r = 2a\\cos\\theta$ is a circle of radius $a$ centered at $(a, 0)$, passing through the origin; $r = 2a\\sin\\theta$ is centered at $(0, a)$.",
                  "zh": "圆：$r = a$ 是以原点为心、半径 $a$ 的圆。$r = 2a\\cos\\theta$ 是半径 $a$、圆心在 $(a, 0)$、过原点的圆；$r = 2a\\sin\\theta$ 的圆心在 $(0, a)$。"
                },
                {
                  "en": "Cardioids: $r = a(1 + \\cos\\theta)$ traces a heart shape. At $\\theta = 0$, $r = 2a$ (rightmost point); at $\\theta = \\pi$, $r = 0$ (the cusp at the origin).",
                  "zh": "心形线：$r = a(1 + \\cos\\theta)$ 描出心形。在 $\\theta = 0$ 处 $r = 2a$（最右点）；在 $\\theta = \\pi$ 处 $r = 0$（原点处的尖点）。"
                },
                {
                  "en": "Roses: $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$ forms petals of length $a$. If $n$ is odd there are $n$ petals; if $n$ is even there are $2n$ petals.",
                  "zh": "玫瑰线：$r = a\\cos(n\\theta)$ 或 $r = a\\sin(n\\theta)$ 形成长度为 $a$ 的花瓣。若 $n$ 为奇数则有 $n$ 片花瓣；若 $n$ 为偶数则有 $2n$ 片花瓣。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2 — Reading a rose",
                "zh": "例题 2 — 解读玫瑰线"
              },
              "problem": {
                "en": "How many petals does $r = 4\\cos(3\\theta)$ have, and how long is each petal? Where does the first petal point?",
                "zh": "$r = 4\\cos(3\\theta)$ 有几片花瓣？每片多长？第一片花瓣指向何方？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $n = 3$ is odd, so there are $3$ petals. The amplitude is $a = 4$, so each petal has length $4$.",
                  "zh": "这里 $n = 3$ 为奇数，故有 $3$ 片花瓣。振幅 $a = 4$，故每片花瓣长 $4$。"
                },
                {
                  "type": "p",
                  "en": "The petal is longest where $\\cos(3\\theta) = 1$, i.e. $3\\theta = 0$, so $\\theta = 0$. The first petal points along the positive $x$-axis, reaching the point $(4, 0)$ in rectangular coordinates.",
                  "zh": "当 $\\cos(3\\theta) = 1$，即 $3\\theta = 0$、$\\theta = 0$ 时花瓣最长。第一片花瓣沿正 $x$ 轴方向，顶端为直角坐标中的点 $(4, 0)$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Complex Numbers in Polar Form",
              "zh": "复数的极坐标形式"
            },
            {
              "type": "p",
              "en": "A complex number $z = x + yi$ can be plotted as the point $(x, y)$ in the complex plane, where the horizontal axis is real and the vertical axis is imaginary. Applying the polar conversion gives the trigonometric (polar) form:",
              "zh": "复数 $z = x + yi$ 可以画成复平面上的点 $(x, y)$，其中横轴为实轴、纵轴为虚轴。套用极坐标变换即得三角（极坐标）形式："
            },
            {
              "type": "math",
              "tex": "z = r(\\cos\\theta + i\\sin\\theta)"
            },
            {
              "type": "p",
              "en": "Here $r = |z| = \\sqrt{x^2 + y^2}$ is the modulus (the distance from the origin) and $\\theta$ is the argument (the direction). This form is often abbreviated $r\\,\\text{cis}\\,\\theta$.",
              "zh": "这里 $r = |z| = \\sqrt{x^2 + y^2}$ 是模（到原点的距离），$\\theta$ 是辐角（方向）。此形式常简写为 $r\\,\\text{cis}\\,\\theta$。"
            },
            {
              "type": "h3",
              "en": "Multiplying and Dividing",
              "zh": "乘法与除法"
            },
            {
              "type": "p",
              "en": "Polar form turns messy complex multiplication into simple arithmetic: multiply the moduli and add the arguments; divide the moduli and subtract the arguments.",
              "zh": "极坐标形式把繁琐的复数乘法变成简单运算：模相乘、辐角相加；除法则模相除、辐角相减。"
            },
            {
              "type": "math",
              "tex": "z_1 z_2 = r_1 r_2\\big[\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)\\big]"
            },
            {
              "type": "math",
              "tex": "\\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\big[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)\\big]"
            },
            {
              "type": "p",
              "en": "Geometrically, multiplying by $z$ scales by $|z|$ and rotates by $\\arg z$. This is why complex numbers are the natural language of rotation.",
              "zh": "几何上，乘以 $z$ 相当于放大 $|z|$ 倍并旋转 $\\arg z$。这正是复数成为旋转的天然语言的原因。"
            },
            {
              "type": "h2",
              "en": "De Moivre's Theorem",
              "zh": "棣莫弗定理"
            },
            {
              "type": "p",
              "en": "Repeatedly multiplying $z$ by itself repeatedly adds the argument, giving a clean formula for powers:",
              "zh": "把 $z$ 反复自乘就是辐角不断相加，于是得到求幂的简洁公式："
            },
            {
              "type": "math",
              "tex": "z^n = r^n\\big(\\cos n\\theta + i\\sin n\\theta\\big)"
            },
            {
              "type": "note",
              "en": "Calculus preview: De Moivre's theorem is a shadow of Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, which you will meet through Taylor series in calculus. Written that way the theorem is just $(e^{i\\theta})^n = e^{in\\theta}$ — an ordinary exponent rule.",
              "zh": "微积分预览：棣莫弗定理是欧拉公式 $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ 的影子，你将在微积分中通过泰勒级数遇见它。用那种写法，本定理不过是 $(e^{i\\theta})^n = e^{in\\theta}$——一条普通的指数法则。"
            },
            {
              "type": "h3",
              "en": "Finding nth Roots",
              "zh": "求 n 次方根"
            },
            {
              "type": "p",
              "en": "Every nonzero complex number has exactly $n$ distinct $n$th roots, equally spaced around a circle. The roots of $z = r(\\cos\\theta + i\\sin\\theta)$ are",
              "zh": "每个非零复数恰有 $n$ 个不同的 $n$ 次方根，它们均匀分布在一个圆周上。$z = r(\\cos\\theta + i\\sin\\theta)$ 的方根为"
            },
            {
              "type": "math",
              "tex": "z^{1/n} = r^{1/n}\\left[\\cos\\!\\left(\\frac{\\theta + 2\\pi k}{n}\\right) + i\\sin\\!\\left(\\frac{\\theta + 2\\pi k}{n}\\right)\\right], \\quad k = 0, 1, \\dots, n-1"
            },
            {
              "type": "p",
              "en": "All $n$ roots share the modulus $r^{1/n}$, so they lie on a circle of that radius; consecutive roots are separated by an angle of $\\dfrac{2\\pi}{n}$.",
              "zh": "所有 $n$ 个方根都有相同的模 $r^{1/n}$，故位于半径为该值的圆上；相邻方根之间相差角 $\\dfrac{2\\pi}{n}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3 — Cube roots",
                "zh": "例题 3 — 立方根"
              },
              "problem": {
                "en": "Find all three cube roots of $8$ and describe how they are arranged.",
                "zh": "求 $8$ 的全部三个立方根，并说明它们如何排列。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Write $8$ in polar form: $r = 8$, $\\theta = 0$, so $8 = 8(\\cos 0 + i\\sin 0)$. The modulus of each root is $8^{1/3} = 2$.",
                  "zh": "把 $8$ 写成极坐标形式：$r = 8$，$\\theta = 0$，即 $8 = 8(\\cos 0 + i\\sin 0)$。每个方根的模为 $8^{1/3} = 2$。"
                },
                {
                  "type": "p",
                  "en": "The arguments are $\\dfrac{0 + 2\\pi k}{3}$ for $k = 0, 1, 2$: that is $0$, $\\dfrac{2\\pi}{3}$, $\\dfrac{4\\pi}{3}$.",
                  "zh": "辐角为 $\\dfrac{0 + 2\\pi k}{3}$，$k = 0, 1, 2$，即 $0$、$\\dfrac{2\\pi}{3}$、$\\dfrac{4\\pi}{3}$。"
                },
                {
                  "type": "p",
                  "en": "The roots are $2(\\cos 0 + i\\sin 0) = 2$, $\\;2\\left(\\cos\\tfrac{2\\pi}{3} + i\\sin\\tfrac{2\\pi}{3}\\right) = -1 + i\\sqrt{3}$, and $2\\left(\\cos\\tfrac{4\\pi}{3} + i\\sin\\tfrac{4\\pi}{3}\\right) = -1 - i\\sqrt{3}$. They sit at the vertices of an equilateral triangle on the circle of radius $2$, spaced $120^\\circ$ apart.",
                  "zh": "三个方根为 $2(\\cos 0 + i\\sin 0) = 2$、$\\;2\\left(\\cos\\tfrac{2\\pi}{3} + i\\sin\\tfrac{2\\pi}{3}\\right) = -1 + i\\sqrt{3}$、$2\\left(\\cos\\tfrac{4\\pi}{3} + i\\sin\\tfrac{4\\pi}{3}\\right) = -1 - i\\sqrt{3}$。它们位于半径为 $2$ 的圆上等边三角形的顶点，彼此相隔 $120^\\circ$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Convert the polar point $\\left(4, \\dfrac{\\pi}{3}\\right)$ to rectangular coordinates.",
                "zh": "把极坐标点 $\\left(4, \\dfrac{\\pi}{3}\\right)$ 化为直角坐标。"
              },
              "choices": [
                "$(2\\sqrt{3}, 2)$",
                "$(2, 2\\sqrt{3})$",
                "$(-2, 2\\sqrt{3})$",
                "$(4, 4)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$x = r\\cos\\theta = 4\\cos\\tfrac{\\pi}{3} = 4\\cdot\\tfrac12 = 2$ and $y = r\\sin\\theta = 4\\sin\\tfrac{\\pi}{3} = 4\\cdot\\tfrac{\\sqrt3}{2} = 2\\sqrt3$. Swapping sine and cosine gives the tempting wrong answer $(2\\sqrt3, 2)$.",
                "zh": "$x = r\\cos\\theta = 4\\cos\\tfrac{\\pi}{3} = 4\\cdot\\tfrac12 = 2$，$y = r\\sin\\theta = 4\\sin\\tfrac{\\pi}{3} = 4\\cdot\\tfrac{\\sqrt3}{2} = 2\\sqrt3$。把正弦余弦弄反会得到诱人的错误答案 $(2\\sqrt3, 2)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which polar point is NOT the same location as $\\left(2, \\dfrac{\\pi}{4}\\right)$?",
                "zh": "下列哪个极坐标点与 $\\left(2, \\dfrac{\\pi}{4}\\right)$ 不是同一位置？"
              },
              "choices": [
                "$\\left(-2, \\dfrac{5\\pi}{4}\\right)$",
                "$\\left(2, \\dfrac{9\\pi}{4}\\right)$",
                "$\\left(2, \\dfrac{3\\pi}{4}\\right)$",
                "$\\left(-2, -\\dfrac{3\\pi}{4}\\right)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Adding $2\\pi$ gives $\\tfrac{9\\pi}{4}$ (same); a negative radius with $+\\pi$ gives $(-2, \\tfrac{5\\pi}{4})$ and $(-2, -\\tfrac{3\\pi}{4})$ (both same). But $\\left(2, \\tfrac{3\\pi}{4}\\right)$ points into quadrant II, a genuinely different spot.",
                "zh": "加 $2\\pi$ 得 $\\tfrac{9\\pi}{4}$（相同）；负半径配 $+\\pi$ 得 $(-2, \\tfrac{5\\pi}{4})$ 和 $(-2, -\\tfrac{3\\pi}{4})$（都相同）。但 $\\left(2, \\tfrac{3\\pi}{4}\\right)$ 指向第二象限，是真正不同的位置。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many petals does the rose $r = 5\\sin(4\\theta)$ have? Give an integer.",
                "zh": "玫瑰线 $r = 5\\sin(4\\theta)$ 有几片花瓣？填一个整数。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "For $r = a\\sin(n\\theta)$, an even $n$ produces $2n$ petals. Here $n = 4$, so there are $2(4) = 8$ petals. A common error is answering $4$ by forgetting the even/odd rule.",
                "zh": "对 $r = a\\sin(n\\theta)$，偶数 $n$ 产生 $2n$ 片花瓣。这里 $n = 4$，故有 $2(4) = 8$ 片。常见错误是忘记奇偶规则而答 $4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The equation $r = 6\\cos\\theta$ describes which curve?",
                "zh": "方程 $r = 6\\cos\\theta$ 描述哪条曲线？"
              },
              "choices": [
                "A three-petal rose",
                "A circle of radius $6$ centered at the origin",
                "A cardioid",
                "A circle of radius $3$ centered at $(3, 0)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The form $r = 2a\\cos\\theta$ is a circle of radius $a$ centered at $(a, 0)$. Here $2a = 6$, so $a = 3$: radius $3$, center $(3, 0)$, passing through the origin. Only $r = a$ (a constant) is centered at the origin.",
                "zh": "形式 $r = 2a\\cos\\theta$ 是半径 $a$、圆心 $(a, 0)$ 的圆。这里 $2a = 6$，故 $a = 3$：半径 $3$、圆心 $(3, 0)$、过原点。只有 $r = a$（常数）才以原点为心。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $z_1 = 3(\\cos 20^\\circ + i\\sin 20^\\circ)$ and $z_2 = 4(\\cos 35^\\circ + i\\sin 35^\\circ)$, find the modulus of the product $z_1 z_2$. Give an integer.",
                "zh": "若 $z_1 = 3(\\cos 20^\\circ + i\\sin 20^\\circ)$，$z_2 = 4(\\cos 35^\\circ + i\\sin 35^\\circ)$，求乘积 $z_1 z_2$ 的模，填一个整数。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "To multiply in polar form, multiply the moduli: $3 \\times 4 = 12$. (The argument would be $20^\\circ + 35^\\circ = 55^\\circ$, but the question asks only for the modulus.)",
                "zh": "极坐标形式相乘时模相乘：$3 \\times 4 = 12$。（辐角为 $20^\\circ + 35^\\circ = 55^\\circ$，但本题只问模。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using De Moivre's theorem, compute the modulus of $\\big[2(\\cos 15^\\circ + i\\sin 15^\\circ)\\big]^4$. Give an integer.",
                "zh": "用棣莫弗定理，计算 $\\big[2(\\cos 15^\\circ + i\\sin 15^\\circ)\\big]^4$ 的模，填一个整数。"
              },
              "answer": "16",
              "accept": [
                "16.0"
              ],
              "explanation": {
                "en": "De Moivre's theorem gives $z^n = r^n(\\cos n\\theta + i\\sin n\\theta)$, so the modulus is $r^n = 2^4 = 16$. (The argument becomes $4 \\times 15^\\circ = 60^\\circ$.) A common slip is multiplying $2 \\times 4 = 8$ instead of raising to the power.",
                "zh": "棣莫弗定理给出 $z^n = r^n(\\cos n\\theta + i\\sin n\\theta)$，故模为 $r^n = 2^4 = 16$。（辐角变为 $4 \\times 15^\\circ = 60^\\circ$。）常见错误是算成 $2 \\times 4 = 8$ 而非乘方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many distinct fourth roots does the complex number $16(\\cos 80^\\circ + i\\sin 80^\\circ)$ have, and what is their common modulus?",
                "zh": "复数 $16(\\cos 80^\\circ + i\\sin 80^\\circ)$ 有几个不同的四次方根？它们共同的模是多少？"
              },
              "choices": [
                "$4$ roots, each with modulus $2$",
                "$2$ roots, each with modulus $4$",
                "$4$ roots, each with modulus $4$",
                "$1$ root with modulus $16$"
              ],
              "answer": 0,
              "explanation": {
                "en": "An $n$th root has exactly $n$ distinct values, so there are $4$ fourth roots. Each has modulus $16^{1/4} = 2$. They lie on a circle of radius $2$, spaced $\\frac{360^\\circ}{4} = 90^\\circ$ apart.",
                "zh": "$n$ 次方根恰有 $n$ 个不同值，故有 $4$ 个四次方根。每个的模为 $16^{1/4} = 2$。它们位于半径 $2$ 的圆上，彼此相隔 $\\frac{360^\\circ}{4} = 90^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The three cube roots of a complex number $z$ (with $z \\ne 0$) always:",
                "zh": "一个复数 $z$（$z \\ne 0$）的三个立方根总是："
              },
              "choices": [
                "Have arguments that sum to $0$",
                "Lie on the real axis",
                "Lie on one circle, spaced $120^\\circ$ apart",
                "Share the same argument but different moduli"
              ],
              "answer": 2,
              "explanation": {
                "en": "All $n$ roots have the identical modulus $|z|^{1/n}$, so they sit on a single circle; consecutive roots differ in argument by $\\frac{360^\\circ}{n} = \\frac{360^\\circ}{3} = 120^\\circ$, forming an equilateral triangle. They need not touch the real axis, and it is the moduli that match while the arguments differ.",
                "zh": "所有 $n$ 个方根都有相同的模 $|z|^{1/n}$，故位于同一个圆上；相邻方根的辐角相差 $\\frac{360^\\circ}{n} = \\frac{360^\\circ}{3} = 120^\\circ$，构成等边三角形。它们不一定落在实轴上；相同的是模，不同的是辐角。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "vectors",
      "title": "Unit 7: Vectors",
      "titleZh": "第七单元：向量",
      "lessons": [
        {
          "id": "vectors-and-operations",
          "title": "Vectors and Vector Operations",
          "titleZh": "向量与向量运算",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Vector?",
              "zh": "什么是向量？"
            },
            {
              "type": "p",
              "en": "A scalar is a quantity with size only, like temperature or mass. A vector carries two pieces of information at once: a magnitude (how much) and a direction (which way). Velocity, force, and displacement are all vectors, which is exactly why they matter in physics and, soon, in calculus, where the velocity vector becomes the derivative of a position function.",
              "zh": "标量只有大小，例如温度或质量。向量同时携带两条信息：大小（有多少）和方向（朝哪里）。速度、力和位移都是向量，这正是它们在物理中，以及不久后在微积分中至关重要的原因——在微积分里，速度向量就是位置函数的导数。"
            },
            {
              "type": "p",
              "en": "We draw a vector as an arrow. The length of the arrow is its magnitude and the way it points is its direction. Two arrows that have the same length and the same direction represent the same vector, even if they start at different points. We write a vector as $\\vec{v}$ or in bold as $\\mathbf{v}$.",
              "zh": "我们把向量画成一支箭。箭的长度是它的大小，箭指向的方向就是它的方向。两支长度相同、方向相同的箭表示同一个向量，即使它们的起点不同。向量记作 $\\vec{v}$ 或用粗体 $\\mathbf{v}$。"
            },
            {
              "type": "h2",
              "en": "Component Form",
              "zh": "分量形式"
            },
            {
              "type": "p",
              "en": "The most useful description of a vector strips away where it starts and records only how far it travels horizontally and vertically. If a vector moves $a$ units right and $b$ units up, we write it in component form as $\\langle a, b \\rangle$. The number $a$ is the horizontal component and $b$ is the vertical component.",
              "zh": "描述向量最有用的方式是抛开起点，只记录它水平和竖直方向各走了多远。若一个向量向右移动 $a$ 个单位、向上移动 $b$ 个单位，则其分量形式记为 $\\langle a, b \\rangle$。数 $a$ 是水平分量，$b$ 是竖直分量。"
            },
            {
              "type": "p",
              "en": "To find the vector from a point $P(x_1, y_1)$ to a point $Q(x_2, y_2)$, subtract the tail from the head: always head minus tail.",
              "zh": "要求从点 $P(x_1, y_1)$ 到点 $Q(x_2, y_2)$ 的向量，用终点减起点：永远是“终点减起点”。"
            },
            {
              "type": "math",
              "tex": "\\vec{PQ} = \\langle x_2 - x_1,\\; y_2 - y_1 \\rangle"
            },
            {
              "type": "note",
              "en": "Common mistake: reversing the subtraction. $\\vec{PQ}$ starts at $P$ and ends at $Q$, so you compute $Q - P$. Writing $P - Q$ gives $\\vec{QP}$, the exact opposite vector.",
              "zh": "常见错误：把减法方向搞反。$\\vec{PQ}$ 从 $P$ 出发、到 $Q$ 结束，所以计算 $Q - P$。写成 $P - Q$ 得到的是 $\\vec{QP}$，即方向完全相反的向量。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Find the component form of the vector from $P(-1, 4)$ to $Q(3, 1)$.",
                "zh": "求从 $P(-1, 4)$ 到 $Q(3, 1)$ 的向量的分量形式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Subtract the tail $P$ from the head $Q$: $\\vec{PQ} = \\langle 3 - (-1),\\; 1 - 4 \\rangle$.",
                  "zh": "用终点 $Q$ 减起点 $P$：$\\vec{PQ} = \\langle 3 - (-1),\\; 1 - 4 \\rangle$。"
                },
                {
                  "type": "math",
                  "tex": "\\vec{PQ} = \\langle 4,\\; -3 \\rangle"
                },
                {
                  "type": "p",
                  "en": "This vector moves 4 units right and 3 units down, no matter where you draw it.",
                  "zh": "无论画在哪里，这个向量都表示向右 4 个单位、向下 3 个单位。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Magnitude and Direction Angle",
              "zh": "大小与方向角"
            },
            {
              "type": "p",
              "en": "The magnitude of $\\vec{v} = \\langle a, b \\rangle$ is its length, found by the Pythagorean theorem. We write it with double bars, $\\|\\vec{v}\\|$.",
              "zh": "向量 $\\vec{v} = \\langle a, b \\rangle$ 的大小就是它的长度，由勾股定理求得。我们用双竖线 $\\|\\vec{v}\\|$ 表示。"
            },
            {
              "type": "math",
              "tex": "\\|\\vec{v}\\| = \\sqrt{a^2 + b^2}"
            },
            {
              "type": "p",
              "en": "The direction angle $\\theta$ is measured counterclockwise from the positive $x$-axis. Because $\\tan\\theta = \\dfrac{b}{a}$, we recover the angle with an inverse tangent, then adjust for the quadrant the vector actually points into.",
              "zh": "方向角 $\\theta$ 是从 $x$ 轴正方向逆时针量得的角。由于 $\\tan\\theta = \\dfrac{b}{a}$，我们用反正切求出该角，再根据向量实际所在的象限进行调整。"
            },
            {
              "type": "math",
              "tex": "\\theta = \\tan^{-1}\\!\\left(\\frac{b}{a}\\right) \\quad (\\text{adjust for quadrant})"
            },
            {
              "type": "note",
              "en": "Calculator tip: $\\tan^{-1}$ only returns angles in $(-90^\\circ, 90^\\circ)$. If $a < 0$ (the vector points left), add $180^\\circ$ to the calculator value to land in the correct quadrant.",
              "zh": "计算器提示：$\\tan^{-1}$ 只返回 $(-90^\\circ, 90^\\circ)$ 之间的角。若 $a < 0$（向量指向左方），需在计算器结果上加 $180^\\circ$ 才能落在正确的象限。"
            },
            {
              "type": "h2",
              "en": "Scalar Multiplication and Vector Addition",
              "zh": "数乘与向量加法"
            },
            {
              "type": "p",
              "en": "To multiply a vector by a scalar $k$, scale each component: $k\\langle a, b\\rangle = \\langle ka, kb\\rangle$. This stretches the arrow by $|k|$ and, if $k < 0$, flips it to point the opposite way. To add two vectors, add matching components: $\\langle a_1, b_1\\rangle + \\langle a_2, b_2\\rangle = \\langle a_1 + a_2,\\; b_1 + b_2\\rangle$.",
              "zh": "向量乘以标量 $k$ 时，对每个分量缩放：$k\\langle a, b\\rangle = \\langle ka, kb\\rangle$。这会把箭拉伸为原来的 $|k|$ 倍；若 $k < 0$，还会翻转到相反方向。两向量相加时，对应分量相加：$\\langle a_1, b_1\\rangle + \\langle a_2, b_2\\rangle = \\langle a_1 + a_2,\\; b_1 + b_2\\rangle$。"
            },
            {
              "type": "p",
              "en": "Geometrically, addition uses the tip-to-tail rule: draw the first vector, then start the second at the tip of the first. The single arrow from the very start to the very end is the sum, called the resultant. Placing both vectors tail-to-tail instead builds the same sum as the diagonal of a parallelogram.",
              "zh": "在几何上，加法遵循“首尾相接”法则：先画第一个向量，再把第二个向量的起点接在第一个的箭头处。从最初起点直指最终终点的那支箭就是和，称为合向量。若把两向量的起点放在一起，则同一个和恰是平行四边形的对角线。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Adding vectors combines two motions or forces into one net effect.",
                  "zh": "向量相加把两个运动或力合成为一个净效果。"
                },
                {
                  "en": "Subtraction is addition of the opposite: $\\vec{u} - \\vec{v} = \\vec{u} + (-\\vec{v})$.",
                  "zh": "减法就是加上相反向量：$\\vec{u} - \\vec{v} = \\vec{u} + (-\\vec{v})$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Unit Vectors and $\\mathbf{i}, \\mathbf{j}$ Notation",
              "zh": "单位向量与 $\\mathbf{i}, \\mathbf{j}$ 记号"
            },
            {
              "type": "p",
              "en": "A unit vector has magnitude exactly 1; it stores pure direction. To build the unit vector pointing the same way as $\\vec{v}$, divide $\\vec{v}$ by its own length.",
              "zh": "单位向量的大小恰为 1，它只保存方向信息。要构造与 $\\vec{v}$ 同向的单位向量，用 $\\vec{v}$ 除以它自身的长度即可。"
            },
            {
              "type": "math",
              "tex": "\\hat{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|} = \\left\\langle \\frac{a}{\\|\\vec{v}\\|},\\; \\frac{b}{\\|\\vec{v}\\|} \\right\\rangle"
            },
            {
              "type": "p",
              "en": "Two special unit vectors, $\\vec{i} = \\langle 1, 0\\rangle$ and $\\vec{j} = \\langle 0, 1\\rangle$, point along the axes. Any vector can be written as a combination of them: $\\langle a, b\\rangle = a\\vec{i} + b\\vec{j}$. This is the same list of components, just written a new way.",
              "zh": "两个特殊的单位向量 $\\vec{i} = \\langle 1, 0\\rangle$ 与 $\\vec{j} = \\langle 0, 1\\rangle$ 分别沿坐标轴方向。任何向量都能写成它们的组合：$\\langle a, b\\rangle = a\\vec{i} + b\\vec{j}$。这与分量列表完全等价，只是换了一种写法。"
            },
            {
              "type": "h2",
              "en": "From Magnitude and Angle to Components",
              "zh": "由大小与方向角求分量"
            },
            {
              "type": "p",
              "en": "If a vector has magnitude $r$ and direction angle $\\theta$, its components come straight from right-triangle trigonometry. This is how you turn a real-world quantity like \"a 50 N force at $30^\\circ$\" into numbers you can add.",
              "zh": "若一个向量的大小为 $r$、方向角为 $\\theta$，其分量可直接由直角三角形三角函数求得。这正是把“$30^\\circ$ 方向上 50 牛的力”这类现实量转化为可相加数值的方法。"
            },
            {
              "type": "math",
              "tex": "\\vec{v} = \\langle r\\cos\\theta,\\; r\\sin\\theta \\rangle"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "A vector has magnitude $10$ and direction angle $120^\\circ$. Write it in component form, then find $3\\vec{v}$.",
                "zh": "一个向量的大小为 $10$、方向角为 $120^\\circ$。写出它的分量形式，再求 $3\\vec{v}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use $\\vec{v} = \\langle r\\cos\\theta, r\\sin\\theta\\rangle$ with $r = 10$ and $\\theta = 120^\\circ$. Recall $\\cos 120^\\circ = -\\tfrac{1}{2}$ and $\\sin 120^\\circ = \\tfrac{\\sqrt{3}}{2}$.",
                  "zh": "用 $\\vec{v} = \\langle r\\cos\\theta, r\\sin\\theta\\rangle$，其中 $r = 10$、$\\theta = 120^\\circ$。注意 $\\cos 120^\\circ = -\\tfrac{1}{2}$，$\\sin 120^\\circ = \\tfrac{\\sqrt{3}}{2}$。"
                },
                {
                  "type": "math",
                  "tex": "\\vec{v} = \\left\\langle 10\\cdot(-\\tfrac{1}{2}),\\; 10\\cdot\\tfrac{\\sqrt{3}}{2}\\right\\rangle = \\langle -5,\\; 5\\sqrt{3}\\,\\rangle"
                },
                {
                  "type": "p",
                  "en": "Scalar multiply by 3: $3\\vec{v} = \\langle -15,\\; 15\\sqrt{3}\\,\\rangle$.",
                  "zh": "再数乘 3：$3\\vec{v} = \\langle -15,\\; 15\\sqrt{3}\\,\\rangle$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A plane flies with air velocity $\\langle 250, 0\\rangle$ mph. A wind blows with velocity $\\langle 0, 40\\rangle$ mph. Find the resultant ground velocity and its speed.",
                "zh": "一架飞机相对空气的速度为 $\\langle 250, 0\\rangle$ 英里每小时，风的速度为 $\\langle 0, 40\\rangle$ 英里每小时。求合成的对地速度及其大小。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Add the two vectors component by component to get the resultant.",
                  "zh": "将两向量按分量相加得到合向量。"
                },
                {
                  "type": "math",
                  "tex": "\\vec{r} = \\langle 250 + 0,\\; 0 + 40\\rangle = \\langle 250,\\; 40\\rangle"
                },
                {
                  "type": "p",
                  "en": "The ground speed is the magnitude: $\\|\\vec{r}\\| = \\sqrt{250^2 + 40^2} = \\sqrt{64100} \\approx 253.2$ mph.",
                  "zh": "对地速率是其大小：$\\|\\vec{r}\\| = \\sqrt{250^2 + 40^2} = \\sqrt{64100} \\approx 253.2$ 英里每小时。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the component form of the vector from $A(2, -1)$ to $B(5, 3)$?",
                "zh": "从 $A(2, -1)$ 到 $B(5, 3)$ 的向量的分量形式是什么？"
              },
              "choices": [
                "$\\langle 7, 2\\rangle$",
                "$\\langle 3, 4\\rangle$",
                "$\\langle -3, -4\\rangle$",
                "$\\langle 3, 2\\rangle$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Compute head minus tail: $\\langle 5 - 2,\\; 3 - (-1)\\rangle = \\langle 3, 4\\rangle$. Choice $\\langle -3,-4\\rangle$ is the reverse vector $\\vec{BA}$, which comes from subtracting in the wrong order.",
                "zh": "用终点减起点：$\\langle 5 - 2,\\; 3 - (-1)\\rangle = \\langle 3, 4\\rangle$。选项 $\\langle -3,-4\\rangle$ 是相反向量 $\\vec{BA}$，来自减法方向搞反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the magnitude of $\\vec{v} = \\langle -6, 8\\rangle$. Give an integer.",
                "zh": "求 $\\vec{v} = \\langle -6, 8\\rangle$ 的大小，答案为整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "Magnitude is $\\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. The negative sign disappears once you square the component.",
                "zh": "大小为 $\\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$。分量平方后负号即消失。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $\\vec{u} = \\langle 2, -3\\rangle$ and $\\vec{w} = \\langle -1, 5\\rangle$, what is $2\\vec{u} + \\vec{w}$?",
                "zh": "若 $\\vec{u} = \\langle 2, -3\\rangle$，$\\vec{w} = \\langle -1, 5\\rangle$，则 $2\\vec{u} + \\vec{w}$ 是多少？"
              },
              "choices": [
                "$\\langle 3, 2\\rangle$",
                "$\\langle 1, 2\\rangle$",
                "$\\langle 3, -1\\rangle$",
                "$\\langle 5, -1\\rangle$"
              ],
              "answer": 2,
              "explanation": {
                "en": "First scale: $2\\vec{u} = \\langle 4, -6\\rangle$. Then add: $\\langle 4 + (-1),\\; -6 + 5\\rangle = \\langle 3, -1\\rangle$. A tempting error is adding before scaling, which gives $\\langle 1, 2\\rangle$.",
                "zh": "先数乘：$2\\vec{u} = \\langle 4, -6\\rangle$；再相加：$\\langle 4 + (-1),\\; -6 + 5\\rangle = \\langle 3, -1\\rangle$。常见错误是先加后乘，得到 $\\langle 1, 2\\rangle$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A vector has magnitude $8$ and direction angle $30^\\circ$. What is its component form?",
                "zh": "一个向量的大小为 $8$、方向角为 $30^\\circ$，其分量形式是什么？"
              },
              "choices": [
                "$\\langle 4,\\; 4\\rangle$",
                "$\\langle 4,\\; 4\\sqrt{3}\\rangle$",
                "$\\langle 8\\sqrt{3},\\; 8\\rangle$",
                "$\\langle 4\\sqrt{3},\\; 4\\rangle$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Use $\\langle r\\cos\\theta, r\\sin\\theta\\rangle = \\langle 8\\cos 30^\\circ,\\; 8\\sin 30^\\circ\\rangle = \\langle 8\\cdot\\tfrac{\\sqrt3}{2},\\; 8\\cdot\\tfrac12\\rangle = \\langle 4\\sqrt3, 4\\rangle$. Swapping sine and cosine gives the tempting $\\langle 4, 4\\sqrt3\\rangle$.",
                "zh": "用 $\\langle r\\cos\\theta, r\\sin\\theta\\rangle = \\langle 8\\cos 30^\\circ,\\; 8\\sin 30^\\circ\\rangle = \\langle 8\\cdot\\tfrac{\\sqrt3}{2},\\; 8\\cdot\\tfrac12\\rangle = \\langle 4\\sqrt3, 4\\rangle$。把正弦余弦弄反会得到迷惑选项 $\\langle 4, 4\\sqrt3\\rangle$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The unit vector in the direction of $\\vec{v} = \\langle 3, 4\\rangle$ is $\\langle 0.6, k\\rangle$. Find $k$ as a decimal.",
                "zh": "与 $\\vec{v} = \\langle 3, 4\\rangle$ 同向的单位向量为 $\\langle 0.6, k\\rangle$，求 $k$（小数）。"
              },
              "answer": "0.8",
              "accept": [
                ".8",
                "4/5"
              ],
              "explanation": {
                "en": "The length is $\\sqrt{3^2 + 4^2} = 5$, so the unit vector is $\\langle 3/5, 4/5\\rangle = \\langle 0.6, 0.8\\rangle$. Thus $k = 0.8$.",
                "zh": "长度为 $\\sqrt{3^2 + 4^2} = 5$，故单位向量为 $\\langle 3/5, 4/5\\rangle = \\langle 0.6, 0.8\\rangle$，即 $k = 0.8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals the vector $\\langle -2, 7\\rangle$?",
                "zh": "哪个表达式等于向量 $\\langle -2, 7\\rangle$？"
              },
              "choices": [
                "$-2\\vec{i} + 7\\vec{j}$",
                "$2\\vec{i} - 7\\vec{j}$",
                "$7\\vec{i} - 2\\vec{j}$",
                "$-2\\vec{i} - 7\\vec{j}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "In $\\vec{i}, \\vec{j}$ notation, $\\langle a, b\\rangle = a\\vec{i} + b\\vec{j}$, so $\\langle -2, 7\\rangle = -2\\vec{i} + 7\\vec{j}$. The coefficients are exactly the components in order.",
                "zh": "在 $\\vec{i}, \\vec{j}$ 记号下，$\\langle a, b\\rangle = a\\vec{i} + b\\vec{j}$，所以 $\\langle -2, 7\\rangle = -2\\vec{i} + 7\\vec{j}$。系数就是按顺序排列的分量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two forces $\\langle 5, 2\\rangle$ N and $\\langle -1, 6\\rangle$ N act on a point. Find the vertical component of the resultant force. Give an integer.",
                "zh": "两个力 $\\langle 5, 2\\rangle$ 牛与 $\\langle -1, 6\\rangle$ 牛作用于一点。求合力的竖直分量，答案为整数。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "The resultant is $\\langle 5 + (-1),\\; 2 + 6\\rangle = \\langle 4, 8\\rangle$. The vertical component is $8$.",
                "zh": "合力为 $\\langle 5 + (-1),\\; 2 + 6\\rangle = \\langle 4, 8\\rangle$，其竖直分量为 $8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A boat heads due east at $12$ mph while a current pushes it due south at $5$ mph. What is the boat's resulting speed?",
                "zh": "一艘船以 $12$ 英里每小时正东行驶，同时水流以 $5$ 英里每小时把它推向正南。船的合成速率是多少？"
              },
              "choices": [
                "$7$ mph",
                "$17$ mph",
                "$13$ mph",
                "$\\sqrt{7}$ mph"
              ],
              "answer": 2,
              "explanation": {
                "en": "The two velocities are perpendicular, so the resultant $\\langle 12, -5\\rangle$ has speed $\\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ mph. Adding the numbers directly to get $17$ ignores that the directions are at right angles.",
                "zh": "两速度互相垂直，故合速度 $\\langle 12, -5\\rangle$ 的速率为 $\\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ 英里每小时。直接把数相加得 $17$ 忽略了两方向互相垂直这一事实。"
              }
            }
          ]
        },
        {
          "id": "dot-product-and-applications",
          "title": "The Dot Product and Applications",
          "titleZh": "点积及其应用",
          "content": [
            {
              "type": "h2",
              "en": "Two Ways to See the Dot Product",
              "zh": "看待点积的两种方式"
            },
            {
              "type": "p",
              "en": "The dot product takes two vectors and returns a single number (a scalar), not another vector. It measures how much two vectors point in the same direction. There are two equivalent formulas, and knowing both is the key to every application in this lesson.",
              "zh": "点积把两个向量映射为一个数（标量），而不是另一个向量。它衡量两个向量在多大程度上朝同一方向。点积有两个等价的公式，掌握两者是本课所有应用的关键。"
            },
            {
              "type": "p",
              "en": "The component formula multiplies matching components and adds. The geometric formula uses the magnitudes and the angle $\\theta$ between the vectors.",
              "zh": "分量公式将对应分量相乘再相加；几何公式则用两向量的大小及其夹角 $\\theta$。"
            },
            {
              "type": "math",
              "tex": "\\vec{u}\\cdot\\vec{v} = u_1 v_1 + u_2 v_2 = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos\\theta"
            },
            {
              "type": "note",
              "en": "Common mistake: writing the dot product as a vector. $\\vec{u}\\cdot\\vec{v}$ is always a plain number. If your answer has angle brackets, you have confused it with scalar multiplication or addition.",
              "zh": "常见错误：把点积写成向量。$\\vec{u}\\cdot\\vec{v}$ 永远是一个普通的数。如果你的答案带有尖括号，说明你把它与数乘或加法混淆了。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Compute $\\vec{u}\\cdot\\vec{v}$ for $\\vec{u} = \\langle 3, -2\\rangle$ and $\\vec{v} = \\langle 4, 5\\rangle$.",
                "zh": "对 $\\vec{u} = \\langle 3, -2\\rangle$ 与 $\\vec{v} = \\langle 4, 5\\rangle$，计算 $\\vec{u}\\cdot\\vec{v}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply matching components and add.",
                  "zh": "将对应分量相乘再相加。"
                },
                {
                  "type": "math",
                  "tex": "\\vec{u}\\cdot\\vec{v} = (3)(4) + (-2)(5) = 12 - 10 = 2"
                },
                {
                  "type": "p",
                  "en": "The result is the scalar $2$.",
                  "zh": "结果是标量 $2$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Angle Between Vectors",
              "zh": "两向量的夹角"
            },
            {
              "type": "p",
              "en": "Setting the two formulas equal and solving for $\\cos\\theta$ gives a direct way to find the angle between any two vectors. This is the single most useful consequence of the dot product.",
              "zh": "令两个公式相等并解出 $\\cos\\theta$，就得到求任意两向量夹角的直接方法。这是点积最有用的一个推论。"
            },
            {
              "type": "math",
              "tex": "\\cos\\theta = \\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Find the angle between $\\vec{u} = \\langle 1, 3\\rangle$ and $\\vec{v} = \\langle 4, 2\\rangle$, rounded to the nearest degree.",
                "zh": "求 $\\vec{u} = \\langle 1, 3\\rangle$ 与 $\\vec{v} = \\langle 4, 2\\rangle$ 的夹角，精确到最接近的度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Dot product: $\\vec{u}\\cdot\\vec{v} = (1)(4) + (3)(2) = 10$. Magnitudes: $\\|\\vec{u}\\| = \\sqrt{10}$ and $\\|\\vec{v}\\| = \\sqrt{20}$.",
                  "zh": "点积：$\\vec{u}\\cdot\\vec{v} = (1)(4) + (3)(2) = 10$。大小：$\\|\\vec{u}\\| = \\sqrt{10}$，$\\|\\vec{v}\\| = \\sqrt{20}$。"
                },
                {
                  "type": "math",
                  "tex": "\\cos\\theta = \\frac{10}{\\sqrt{10}\\,\\sqrt{20}} = \\frac{10}{\\sqrt{200}} = \\frac{10}{10\\sqrt{2}} = \\frac{1}{\\sqrt{2}}"
                },
                {
                  "type": "p",
                  "en": "So $\\theta = \\cos^{-1}\\!\\left(\\tfrac{1}{\\sqrt2}\\right) = 45^\\circ$.",
                  "zh": "故 $\\theta = \\cos^{-1}\\!\\left(\\tfrac{1}{\\sqrt2}\\right) = 45^\\circ$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Orthogonality: The Right-Angle Test",
              "zh": "正交性：直角判定"
            },
            {
              "type": "p",
              "en": "Two nonzero vectors are orthogonal (perpendicular) exactly when the angle between them is $90^\\circ$. Since $\\cos 90^\\circ = 0$, the geometric formula shows their dot product must be zero. This gives an instant test with no angle calculation needed.",
              "zh": "两个非零向量正交（垂直）当且仅当它们的夹角为 $90^\\circ$。由于 $\\cos 90^\\circ = 0$，几何公式表明它们的点积必为零。这提供了一个无需求角的即时判定法。"
            },
            {
              "type": "math",
              "tex": "\\vec{u}\\perp\\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0"
            },
            {
              "type": "note",
              "en": "Calculus preview: when you study curves and motion, you will test whether a velocity vector is perpendicular to a position vector by checking if their dot product is zero. This idea also defines the gradient being normal to a level curve.",
              "zh": "微积分预告：在研究曲线与运动时，你会通过判断点积是否为零来检验速度向量是否垂直于位置向量。这一思想还定义了梯度与等值线正交的性质。"
            },
            {
              "type": "h2",
              "en": "Vector Projection",
              "zh": "向量投影"
            },
            {
              "type": "p",
              "en": "The projection of $\\vec{u}$ onto $\\vec{v}$, written $\\operatorname{proj}_{\\vec{v}}\\vec{u}$, is the \"shadow\" that $\\vec{u}$ casts along the line of $\\vec{v}$. It answers: how much of $\\vec{u}$ points in the direction of $\\vec{v}$? The result is a vector parallel to $\\vec{v}$.",
              "zh": "$\\vec{u}$ 在 $\\vec{v}$ 上的投影，记作 $\\operatorname{proj}_{\\vec{v}}\\vec{u}$，是 $\\vec{u}$ 沿 $\\vec{v}$ 方向投下的“影子”。它回答：$\\vec{u}$ 有多少指向 $\\vec{v}$ 的方向？结果是一个与 $\\vec{v}$ 平行的向量。"
            },
            {
              "type": "math",
              "tex": "\\operatorname{proj}_{\\vec{v}}\\vec{u} = \\left(\\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{v}\\|^2}\\right)\\vec{v}"
            },
            {
              "type": "p",
              "en": "The scalar in front, $\\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{v}\\|^2}$, scales $\\vec{v}$; keep $\\vec{v}$ itself (not $\\vec{u}$) as the vector part, since the shadow lies along $\\vec{v}$.",
              "zh": "前面的标量 $\\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{v}\\|^2}$ 对 $\\vec{v}$ 缩放；向量部分保留 $\\vec{v}$（而非 $\\vec{u}$），因为影子沿 $\\vec{v}$ 方向延伸。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Find $\\operatorname{proj}_{\\vec{v}}\\vec{u}$ for $\\vec{u} = \\langle 4, 3\\rangle$ and $\\vec{v} = \\langle 2, 0\\rangle$.",
                "zh": "对 $\\vec{u} = \\langle 4, 3\\rangle$ 与 $\\vec{v} = \\langle 2, 0\\rangle$，求 $\\operatorname{proj}_{\\vec{v}}\\vec{u}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Dot product: $\\vec{u}\\cdot\\vec{v} = (4)(2) + (3)(0) = 8$. Also $\\|\\vec{v}\\|^2 = 2^2 + 0^2 = 4$.",
                  "zh": "点积：$\\vec{u}\\cdot\\vec{v} = (4)(2) + (3)(0) = 8$；又 $\\|\\vec{v}\\|^2 = 2^2 + 0^2 = 4$。"
                },
                {
                  "type": "math",
                  "tex": "\\operatorname{proj}_{\\vec{v}}\\vec{u} = \\frac{8}{4}\\langle 2, 0\\rangle = 2\\langle 2, 0\\rangle = \\langle 4, 0\\rangle"
                },
                {
                  "type": "p",
                  "en": "Since $\\vec{v}$ lies along the $x$-axis, the shadow of $\\vec{u}$ is just its horizontal part, $\\langle 4, 0\\rangle$, which matches our result.",
                  "zh": "由于 $\\vec{v}$ 沿 $x$ 轴，$\\vec{u}$ 的影子恰是它的水平部分 $\\langle 4, 0\\rangle$，与结果吻合。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Work as a Dot Product",
              "zh": "功即点积"
            },
            {
              "type": "p",
              "en": "In physics, the work done by a constant force $\\vec{F}$ that moves an object along a displacement $\\vec{d}$ is the dot product $W = \\vec{F}\\cdot\\vec{d}$. Only the part of the force along the direction of motion does work, which is exactly what the dot product extracts.",
              "zh": "在物理中，恒力 $\\vec{F}$ 使物体沿位移 $\\vec{d}$ 移动所做的功即点积 $W = \\vec{F}\\cdot\\vec{d}$。只有力沿运动方向的分量做功，而这正是点积所提取的量。"
            },
            {
              "type": "math",
              "tex": "W = \\vec{F}\\cdot\\vec{d} = \\|\\vec{F}\\|\\,\\|\\vec{d}\\|\\cos\\theta"
            },
            {
              "type": "note",
              "en": "Test tip: if force and displacement are perpendicular, the work is zero. Carrying a heavy box horizontally does no work against gravity, because gravity points straight down while the motion is sideways.",
              "zh": "考试提示：若力与位移垂直，则功为零。水平搬运重箱子对抗重力所做的功为零，因为重力竖直向下而运动方向水平。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4",
                "zh": "例题 4"
              },
              "problem": {
                "en": "A force $\\vec{F} = \\langle 6, 8\\rangle$ N moves an object along the displacement $\\vec{d} = \\langle 10, 0\\rangle$ m. Find the work done.",
                "zh": "力 $\\vec{F} = \\langle 6, 8\\rangle$ 牛使物体沿位移 $\\vec{d} = \\langle 10, 0\\rangle$ 米移动。求所做的功。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Work is the dot product of force and displacement.",
                  "zh": "功是力与位移的点积。"
                },
                {
                  "type": "math",
                  "tex": "W = \\vec{F}\\cdot\\vec{d} = (6)(10) + (8)(0) = 60 \\text{ J}"
                },
                {
                  "type": "p",
                  "en": "Only the horizontal $6$ N part of the force acts along the motion, so the vertical $8$ N contributes nothing to the work.",
                  "zh": "只有力中水平的 $6$ 牛分量沿运动方向作用，故竖直的 $8$ 牛对功没有贡献。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The same idea resolves forces on an inclined plane: split gravity into a component along the ramp (which drives motion) and a component perpendicular to it (which presses into the surface). Tension problems work the same way once each rope's force is written in components.",
              "zh": "同样的思想可用于分解斜面上的力：把重力分解为沿斜面的分量（驱动运动）和垂直于斜面的分量（压向表面）。把每根绳的力写成分量后，张力问题也照此处理。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Compute the dot product $\\langle 2, -5\\rangle \\cdot \\langle 3, 1\\rangle$. Give an integer.",
                "zh": "计算点积 $\\langle 2, -5\\rangle \\cdot \\langle 3, 1\\rangle$，答案为整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "Multiply matching components and add: $(2)(3) + (-5)(1) = 6 - 5 = 1$. Watch the sign on the second product.",
                "zh": "对应分量相乘再相加：$(2)(3) + (-5)(1) = 6 - 5 = 1$。注意第二项乘积的符号。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of vectors is orthogonal?",
                "zh": "哪一对向量是正交的？"
              },
              "choices": [
                "$\\langle 1, 2\\rangle$ and $\\langle 2, 1\\rangle$",
                "$\\langle 3, 2\\rangle$ and $\\langle -4, 6\\rangle$",
                "$\\langle 5, 0\\rangle$ and $\\langle 3, 0\\rangle$",
                "$\\langle 1, 1\\rangle$ and $\\langle 2, 2\\rangle$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Vectors are orthogonal when their dot product is zero. $\\langle 3,2\\rangle\\cdot\\langle -4,6\\rangle = -12 + 12 = 0$, so they are perpendicular. $\\langle 1,1\\rangle$ and $\\langle 2,2\\rangle$ are actually parallel, a tempting confusion.",
                "zh": "点积为零时向量正交。$\\langle 3,2\\rangle\\cdot\\langle -4,6\\rangle = -12 + 12 = 0$，故它们垂直。$\\langle 1,1\\rangle$ 与 $\\langle 2,2\\rangle$ 实际上是平行的，容易混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the angle between $\\vec{u} = \\langle 1, 0\\rangle$ and $\\vec{v} = \\langle 1, 1\\rangle$?",
                "zh": "$\\vec{u} = \\langle 1, 0\\rangle$ 与 $\\vec{v} = \\langle 1, 1\\rangle$ 的夹角是多少？"
              },
              "choices": [
                "$60^\\circ$",
                "$30^\\circ$",
                "$45^\\circ$",
                "$90^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\|\\vec{v}\\|} = \\dfrac{1}{(1)(\\sqrt2)} = \\dfrac{1}{\\sqrt2}$, so $\\theta = 45^\\circ$. The vector $\\langle 1,1\\rangle$ sits on the line $y = x$, exactly $45^\\circ$ above the $x$-axis.",
                "zh": "$\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\|\\vec{v}\\|} = \\dfrac{1}{(1)(\\sqrt2)} = \\dfrac{1}{\\sqrt2}$，故 $\\theta = 45^\\circ$。向量 $\\langle 1,1\\rangle$ 位于直线 $y = x$ 上，正好在 $x$ 轴上方 $45^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For what value of $k$ are $\\langle k, 3\\rangle$ and $\\langle 2, -4\\rangle$ orthogonal? Give an integer.",
                "zh": "当 $k$ 取何值时，$\\langle k, 3\\rangle$ 与 $\\langle 2, -4\\rangle$ 正交？答案为整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "Set the dot product to zero: $2k + 3(-4) = 0$, so $2k - 12 = 0$ and $k = 6$.",
                "zh": "令点积为零：$2k + 3(-4) = 0$，即 $2k - 12 = 0$，解得 $k = 6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The projection of $\\vec{u} = \\langle 6, 2\\rangle$ onto $\\vec{v} = \\langle 0, 4\\rangle$ is which vector?",
                "zh": "$\\vec{u} = \\langle 6, 2\\rangle$ 在 $\\vec{v} = \\langle 0, 4\\rangle$ 上的投影是哪个向量？"
              },
              "choices": [
                "$\\langle 6, 2\\rangle$",
                "$\\langle 6, 0\\rangle$",
                "$\\langle 0, 8\\rangle$",
                "$\\langle 0, 2\\rangle$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$\\vec{u}\\cdot\\vec{v} = 0 + 8 = 8$ and $\\|\\vec{v}\\|^2 = 16$, so $\\operatorname{proj}_{\\vec{v}}\\vec{u} = \\tfrac{8}{16}\\langle 0,4\\rangle = \\langle 0, 2\\rangle$. Because $\\vec{v}$ is vertical, the shadow keeps only the vertical part of $\\vec{u}$.",
                "zh": "$\\vec{u}\\cdot\\vec{v} = 0 + 8 = 8$，$\\|\\vec{v}\\|^2 = 16$，故 $\\operatorname{proj}_{\\vec{v}}\\vec{u} = \\tfrac{8}{16}\\langle 0,4\\rangle = \\langle 0, 2\\rangle$。由于 $\\vec{v}$ 竖直，影子只保留 $\\vec{u}$ 的竖直部分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A force $\\vec{F} = \\langle 3, 7\\rangle$ N moves an object along $\\vec{d} = \\langle 5, 2\\rangle$ m. Find the work done in joules. Give an integer.",
                "zh": "力 $\\vec{F} = \\langle 3, 7\\rangle$ 牛使物体沿 $\\vec{d} = \\langle 5, 2\\rangle$ 米移动。求所做的功（焦耳），答案为整数。"
              },
              "answer": "29",
              "accept": [
                "29.0"
              ],
              "explanation": {
                "en": "Work is $\\vec{F}\\cdot\\vec{d} = (3)(5) + (7)(2) = 15 + 14 = 29$ J.",
                "zh": "功为 $\\vec{F}\\cdot\\vec{d} = (3)(5) + (7)(2) = 15 + 14 = 29$ 焦耳。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A crate is pulled $20$ m along level ground by a rope with a $50$ N tension at $60^\\circ$ above the horizontal. How much work is done?",
                "zh": "一只板条箱被一根张力为 $50$ 牛、与水平方向成 $60^\\circ$ 的绳沿平地拉动 $20$ 米。做了多少功？"
              },
              "choices": [
                "$500$ J",
                "$1000$ J",
                "$500\\sqrt{3}$ J",
                "$250$ J"
              ],
              "answer": 0,
              "explanation": {
                "en": "Use $W = \\|\\vec{F}\\|\\|\\vec{d}\\|\\cos\\theta = (50)(20)\\cos 60^\\circ = 1000\\cdot\\tfrac12 = 500$ J. Forgetting the $\\cos 60^\\circ$ factor gives the tempting $1000$ J, which would only be right if the rope pulled horizontally.",
                "zh": "用 $W = \\|\\vec{F}\\|\\|\\vec{d}\\|\\cos\\theta = (50)(20)\\cos 60^\\circ = 1000\\cdot\\tfrac12 = 500$ 焦耳。漏掉 $\\cos 60^\\circ$ 会得到迷惑答案 $1000$ 焦耳，那只有绳水平拉动时才成立。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A $200$ N box rests on a ramp inclined at $30^\\circ$. The component of gravity along the ramp is $200\\sin 30^\\circ$. Find that component in newtons. Give an integer.",
                "zh": "一只 $200$ 牛的箱子放在倾角 $30^\\circ$ 的斜面上。重力沿斜面的分量为 $200\\sin 30^\\circ$。求该分量（牛），答案为整数。"
              },
              "answer": "100",
              "accept": [
                "100.0"
              ],
              "explanation": {
                "en": "The component pulling the box down the ramp is $200\\sin 30^\\circ = 200\\cdot\\tfrac12 = 100$ N. Using $\\cos 30^\\circ$ instead would give the perpendicular (normal) component, a common mix-up.",
                "zh": "使箱子沿斜面下滑的分量为 $200\\sin 30^\\circ = 200\\cdot\\tfrac12 = 100$ 牛。若误用 $\\cos 30^\\circ$ 得到的是垂直（法向）分量，这是常见混淆。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "systems-matrices",
      "title": "Unit 8: Systems and Matrices",
      "titleZh": "第八单元：方程组与矩阵",
      "lessons": [
        {
          "id": "systems-and-partial-fractions",
          "title": "Nonlinear Systems and Partial Fraction Decomposition",
          "titleZh": "非线性方程组与部分分式分解",
          "content": [
            {
              "type": "h2",
              "en": "Solving Nonlinear Systems",
              "zh": "求解非线性方程组"
            },
            {
              "type": "p",
              "en": "A system is nonlinear when at least one equation is not a straight line — it may contain squares, products, or other curves. Unlike a pair of lines, which meet in at most one point, a curve and a line (or two curves) can intersect in $0$, $1$, or $2$ points, and sometimes more. Solving means finding every ordered pair $(x, y)$ that satisfies all equations at once.",
              "zh": "当方程组中至少有一个方程不是直线时，就称为非线性方程组——它可能含有平方、乘积或其他曲线。两条直线至多相交于一点，而一条曲线与一条直线（或两条曲线）可以有 $0$、$1$ 或 $2$ 个交点，有时更多。求解就是找出同时满足所有方程的每一个有序对 $(x, y)$。"
            },
            {
              "type": "p",
              "en": "Two algebraic tools carry over from linear systems. Substitution solves one equation for a single variable and plugs it into the other; it works best when a line is involved. Elimination adds multiples of the equations to cancel a term; it shines when both equations share the same squared term, such as two circles.",
              "zh": "两种代数工具从线性方程组沿用而来。代入法从一个方程解出某个变量，再代入另一个方程，当方程组含有直线时最好用。消元法把方程乘以适当倍数后相加以消去某项，当两个方程含有相同的平方项（如两个圆）时最为有效。"
            },
            {
              "type": "note",
              "en": "Common mistake: after substituting, students find the $x$-values and stop. Each $x$ must be paired with its own $y$ from the original line or curve. Always report full ordered pairs, and reject any pair that fails the original equations (substitution can introduce extraneous solutions).",
              "zh": "常见错误：代入后学生求出 $x$ 值就停手。每个 $x$ 都要用原来的直线或曲线配上对应的 $y$。务必写出完整的有序对，并舍去不满足原方程的解（代入可能引入增根）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Line Meets Circle",
                "zh": "例题 1：直线与圆相交"
              },
              "problem": {
                "en": "Solve the system $x^2 + y^2 = 25$ and $y = x + 1$.",
                "zh": "解方程组 $x^2 + y^2 = 25$ 与 $y = x + 1$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitute the line into the circle: $x^2 + (x+1)^2 = 25$.",
                  "zh": "把直线代入圆：$x^2 + (x+1)^2 = 25$。"
                },
                {
                  "type": "math",
                  "tex": "x^2 + x^2 + 2x + 1 = 25 \\;\\Rightarrow\\; 2x^2 + 2x - 24 = 0 \\;\\Rightarrow\\; x^2 + x - 12 = 0"
                },
                {
                  "type": "p",
                  "en": "Factor: $(x + 4)(x - 3) = 0$, so $x = -4$ or $x = 3$. Use $y = x + 1$ to find each partner: $x = -4$ gives $y = -3$, and $x = 3$ gives $y = 4$.",
                  "zh": "因式分解：$(x + 4)(x - 3) = 0$，得 $x = -4$ 或 $x = 3$。用 $y = x + 1$ 求出对应的 $y$：$x = -4$ 时 $y = -3$，$x = 3$ 时 $y = 4$。"
                },
                {
                  "type": "p",
                  "en": "The line cuts through the circle in two points: $(-4, -3)$ and $(3, 4)$.",
                  "zh": "这条直线与圆相交于两点：$(-4, -3)$ 和 $(3, 4)$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The number of real solutions has a geometric meaning: a line can miss a circle (no solution), touch it tangentially (one solution), or cross it (two solutions). When the algebra produces a negative discriminant, there is no real intersection.",
              "zh": "实数解的个数具有几何意义：直线可能与圆不相交（无解）、相切（一个解）或相割（两个解）。当代数运算得到负判别式时，就没有实交点。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Two Curves by Elimination",
                "zh": "例题 2：用消元法解两条曲线"
              },
              "problem": {
                "en": "Solve $y = x^2$ and $x^2 + y^2 = 12$.",
                "zh": "解 $y = x^2$ 与 $x^2 + y^2 = 12$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Since $x^2 = y$, substitute into the circle: $y + y^2 = 12$, so $y^2 + y - 12 = 0$.",
                  "zh": "因为 $x^2 = y$，代入圆得 $y + y^2 = 12$，即 $y^2 + y - 12 = 0$。"
                },
                {
                  "type": "p",
                  "en": "Factor: $(y + 4)(y - 3) = 0$, giving $y = -4$ or $y = 3$. But $y = x^2 \\ge 0$, so $y = -4$ is rejected.",
                  "zh": "因式分解：$(y + 4)(y - 3) = 0$，得 $y = -4$ 或 $y = 3$。但 $y = x^2 \\ge 0$，故舍去 $y = -4$。"
                },
                {
                  "type": "p",
                  "en": "From $y = 3$: $x^2 = 3$, so $x = \\pm\\sqrt{3}$. The solutions are $(\\sqrt{3}, 3)$ and $(-\\sqrt{3}, 3)$.",
                  "zh": "由 $y = 3$：$x^2 = 3$，故 $x = \\pm\\sqrt{3}$。解为 $(\\sqrt{3}, 3)$ 和 $(-\\sqrt{3}, 3)$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Systems of Inequalities and Feasible Regions",
              "zh": "不等式组与可行域"
            },
            {
              "type": "p",
              "en": "A single linear inequality such as $2x + y \\le 6$ describes a half-plane: graph the boundary line $2x + y = 6$ (dashed for strict $<$, solid for $\\le$), then shade the side that makes the inequality true. A system of inequalities is satisfied only where all the shaded regions overlap; that overlap is called the feasible region.",
              "zh": "单个线性不等式如 $2x + y \\le 6$ 表示一个半平面：画出边界直线 $2x + y = 6$（严格 $<$ 用虚线，$\\le$ 用实线），再把使不等式成立的一侧涂色。不等式组只在所有涂色区域的重叠部分成立，这个重叠部分称为可行域。"
            },
            {
              "type": "p",
              "en": "When the boundaries are all lines, the feasible region is a polygon (possibly unbounded) whose corners are called vertices. Each vertex is the intersection of two boundary lines, found by solving those two equations together.",
              "zh": "当边界都是直线时，可行域是一个多边形（可能无界），其角点称为顶点。每个顶点是两条边界直线的交点，可通过联立这两个方程求得。"
            },
            {
              "type": "h3",
              "en": "A First Look at Linear Programming",
              "zh": "线性规划初探"
            },
            {
              "type": "p",
              "en": "Linear programming asks: over a feasible region, where is a linear objective function $P = ax + by$ largest or smallest? The Corner Point Theorem gives a remarkably simple answer — if a maximum or minimum exists, it occurs at a vertex of the feasible region. So you only need to test the corners, not every point inside.",
              "zh": "线性规划要问：在可行域上，线性目标函数 $P = ax + by$ 在何处最大或最小？顶点定理给出了极其简洁的答案——若最大值或最小值存在，它必在可行域的某个顶点处取得。因此只需检验角点，而无需检验内部的每一个点。"
            },
            {
              "type": "note",
              "en": "Calculus preview: linear programming maximizes a function over a region using only the boundary corners. In calculus you will maximize curved functions over regions too, but there the candidate points become critical points (where the derivative is zero) together with the boundary — the same \"check the special points\" idea, generalized.",
              "zh": "微积分预告：线性规划仅用边界角点就能在区域上求最大值。在微积分中你也会在区域上求曲线函数的最大值，只是候选点将变为临界点（导数为零处）连同边界——正是\"检验特殊点\"这一思想的推广。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Maximize on a Feasible Region",
                "zh": "例题 3：在可行域上求最大值"
              },
              "problem": {
                "en": "Maximize $P = 3x + 4y$ subject to $x \\ge 0$, $y \\ge 0$, and $x + y \\le 4$.",
                "zh": "在约束 $x \\ge 0$、$y \\ge 0$、$x + y \\le 4$ 下求 $P = 3x + 4y$ 的最大值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The feasible region is the triangle with vertices $(0,0)$, $(4,0)$, and $(0,4)$, found where the boundary lines cross.",
                  "zh": "可行域是以 $(0,0)$、$(4,0)$、$(0,4)$ 为顶点的三角形，这些点是边界直线的交点。"
                },
                {
                  "type": "p",
                  "en": "Evaluate $P$ at each vertex: $P(0,0) = 0$, $P(4,0) = 12$, $P(0,4) = 16$.",
                  "zh": "在每个顶点计算 $P$：$P(0,0) = 0$，$P(4,0) = 12$，$P(0,4) = 16$。"
                },
                {
                  "type": "p",
                  "en": "The maximum is $P = 16$, achieved at $(0, 4)$.",
                  "zh": "最大值为 $P = 16$，在 $(0, 4)$ 处取得。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Partial Fraction Decomposition",
              "zh": "部分分式分解"
            },
            {
              "type": "p",
              "en": "Adding fractions combines two simple pieces into one complicated fraction. Partial fraction decomposition reverses that process: it breaks a single rational function into a sum of simpler fractions. This is a setup skill for calculus, where a hard integral becomes easy once the fraction is split apart.",
              "zh": "通分把两个简单分式合并成一个复杂分式。部分分式分解则把这个过程反过来：它把一个有理函数拆成若干简单分式之和。这是微积分的准备技能——一个难以积分的分式一旦拆开就变得容易。"
            },
            {
              "type": "p",
              "en": "The method depends on how the denominator factors. First make sure the numerator has lower degree than the denominator (if not, divide first). Then factor the denominator and set up one term per factor:",
              "zh": "方法取决于分母如何因式分解。首先确保分子次数低于分母次数（否则先做多项式除法）。然后把分母因式分解，为每个因式设一项："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Distinct linear factor $(x - a)$: contributes a term $\\dfrac{A}{x - a}$.",
                  "zh": "不同的一次因式 $(x - a)$：对应一项 $\\dfrac{A}{x - a}$。"
                },
                {
                  "en": "Repeated linear factor $(x - a)^2$: contributes $\\dfrac{A}{x - a} + \\dfrac{B}{(x - a)^2}$ — one term for each power.",
                  "zh": "重复的一次因式 $(x - a)^2$：对应 $\\dfrac{A}{x - a} + \\dfrac{B}{(x - a)^2}$——每个幂次一项。"
                },
                {
                  "en": "Irreducible quadratic factor $(x^2 + bx + c)$: contributes $\\dfrac{Ax + B}{x^2 + bx + c}$ — a linear numerator.",
                  "zh": "不可约二次因式 $(x^2 + bx + c)$：对应 $\\dfrac{Ax + B}{x^2 + bx + c}$——分子是一次式。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: putting only a constant $A$ over an irreducible quadratic. A quadratic denominator needs a full linear numerator $Ax + B$. Likewise, a repeated factor $(x-a)^3$ needs three terms, with denominators $(x-a)$, $(x-a)^2$, and $(x-a)^3$ — do not skip the lower powers.",
              "zh": "常见错误：在不可约二次因式上只放一个常数 $A$。二次分母需要完整的一次分子 $Ax + B$。同样，重复因式 $(x-a)^3$ 需要三项，分母分别为 $(x-a)$、$(x-a)^2$、$(x-a)^3$——不要漏掉低次幂。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Distinct Linear Factors",
                "zh": "例题 4：不同的一次因式"
              },
              "problem": {
                "en": "Decompose $\\dfrac{5x - 1}{x^2 - x - 2}$ into partial fractions.",
                "zh": "把 $\\dfrac{5x - 1}{x^2 - x - 2}$ 分解为部分分式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor the denominator: $x^2 - x - 2 = (x - 2)(x + 1)$. Set up $\\dfrac{5x-1}{(x-2)(x+1)} = \\dfrac{A}{x-2} + \\dfrac{B}{x+1}$.",
                  "zh": "分母因式分解：$x^2 - x - 2 = (x - 2)(x + 1)$。设 $\\dfrac{5x-1}{(x-2)(x+1)} = \\dfrac{A}{x-2} + \\dfrac{B}{x+1}$。"
                },
                {
                  "type": "p",
                  "en": "Clear denominators: $5x - 1 = A(x + 1) + B(x - 2)$. Substitute strategic values of $x$.",
                  "zh": "去分母：$5x - 1 = A(x + 1) + B(x - 2)$。代入特殊的 $x$ 值。"
                },
                {
                  "type": "p",
                  "en": "Let $x = 2$: $9 = 3A$, so $A = 3$. Let $x = -1$: $-6 = -3B$, so $B = 2$.",
                  "zh": "令 $x = 2$：$9 = 3A$，故 $A = 3$。令 $x = -1$：$-6 = -3B$，故 $B = 2$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{5x - 1}{x^2 - x - 2} = \\frac{3}{x - 2} + \\frac{2}{x + 1}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "How many real solutions does the system $y = x^2$ and $y = x + 6$ have?",
                "zh": "方程组 $y = x^2$ 与 $y = x + 6$ 有多少个实数解？"
              },
              "choices": [
                "$0$",
                "$2$",
                "$1$",
                "$3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Set $x^2 = x + 6$, so $x^2 - x - 6 = 0$, which factors as $(x-3)(x+2) = 0$. Two distinct real values $x = 3$ and $x = -2$ give two intersection points. Choosing $1$ is the mistake of assuming a parabola and line always touch once.",
                "zh": "令 $x^2 = x + 6$，得 $x^2 - x - 6 = 0$，因式分解为 $(x-3)(x+2) = 0$。两个不同的实数 $x = 3$ 与 $x = -2$ 给出两个交点。选 $1$ 是误以为抛物线与直线总是相切一次。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve the system $y = x^2$ and $y = 4$. The two solutions are $(\\pm a, 4)$. Give the positive value of $a$ as an integer.",
                "zh": "解方程组 $y = x^2$ 与 $y = 4$。两个解为 $(\\pm a, 4)$，请以整数给出 $a$ 的正值。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Substituting gives $x^2 = 4$, so $x = \\pm 2$. The positive value is $a = 2$, and the solutions are $(2, 4)$ and $(-2, 4)$.",
                "zh": "代入得 $x^2 = 4$，故 $x = \\pm 2$。正值为 $a = 2$，解为 $(2, 4)$ 与 $(-2, 4)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A line is tangent to a circle. How many solutions does the corresponding system have?",
                "zh": "一条直线与一个圆相切，对应的方程组有多少个解？"
              },
              "choices": [
                "$0$",
                "$2$",
                "$1$",
                "Infinitely many"
              ],
              "answer": 2,
              "explanation": {
                "en": "Tangency means the line touches the circle at exactly one point, so the system has one solution — algebraically the quadratic has a repeated root (discriminant $0$). Two solutions would mean the line cuts across (secant), not tangent.",
                "zh": "相切意味着直线与圆恰好接触于一点，故方程组有一个解——代数上二次方程有重根（判别式为 $0$）。两个解对应割线而非切线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the feasible region with vertices $(0,0)$, $(5,0)$, $(3,4)$, and $(0,6)$, where is $P = 2x + 3y$ maximized?",
                "zh": "对于顶点为 $(0,0)$、$(5,0)$、$(3,4)$、$(0,6)$ 的可行域，$P = 2x + 3y$ 在何处取得最大值？"
              },
              "choices": [
                "$(0,0)$",
                "$(5,0)$",
                "$(3,4)$",
                "$(0,6)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "By the Corner Point Theorem, test each vertex: $P(0,0)=0$, $P(5,0)=10$, $P(3,4)=18$, $P(0,6)=18$. Both $(3,4)$ and $(0,6)$ give $18$, but only $(0,6)$ is listed as reaching the maximum; the objective is maximized along that edge and $(0,6)$ is a correct maximizing vertex.",
                "zh": "由顶点定理，检验各顶点：$P(0,0)=0$，$P(5,0)=10$，$P(3,4)=18$，$P(0,6)=18$。$(3,4)$ 与 $(0,6)$ 都得 $18$，最大值沿该条边取得，$(0,6)$ 是一个正确的最大值顶点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Maximize $P = x + 5y$ over the feasible region with vertices $(0,0)$, $(6,0)$, and $(0,3)$. Give the maximum value as an integer.",
                "zh": "在顶点为 $(0,0)$、$(6,0)$、$(0,3)$ 的可行域上求 $P = x + 5y$ 的最大值，请以整数给出。"
              },
              "answer": "15",
              "accept": [
                "15.0"
              ],
              "explanation": {
                "en": "Test the vertices: $P(0,0)=0$, $P(6,0)=6$, $P(0,3)=15$. The maximum is $15$ at $(0,3)$, because the large coefficient on $y$ rewards the vertex with the biggest $y$.",
                "zh": "检验顶点：$P(0,0)=0$，$P(6,0)=6$，$P(0,3)=15$。最大值为 $15$，在 $(0,3)$ 取得，因为 $y$ 的系数大，使 $y$ 最大的顶点最有利。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is the correct partial-fraction setup for $\\dfrac{7}{(x-1)(x^2+4)}$?",
                "zh": "$\\dfrac{7}{(x-1)(x^2+4)}$ 的正确部分分式设置是哪一个？"
              },
              "choices": [
                "$\\dfrac{A}{x-1} + \\dfrac{B}{x^2+4}$",
                "$\\dfrac{A}{x-1} + \\dfrac{Bx+C}{x^2+4}$",
                "$\\dfrac{Ax+B}{x-1} + \\dfrac{C}{x^2+4}$",
                "$\\dfrac{A}{x-1} + \\dfrac{B}{x+2} + \\dfrac{C}{x-2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The factor $x^2 + 4$ is irreducible (no real roots), so it needs a linear numerator $Bx + C$, while the linear factor $x-1$ needs just a constant $A$. Choice A wrongly uses a constant over the quadratic; the last choice wrongly factors $x^2+4$, which does not factor over the reals.",
                "zh": "因式 $x^2 + 4$ 不可约（无实根），故需一次分子 $Bx + C$，而一次因式 $x-1$ 只需常数 $A$。选项 A 错在二次分母上用常数；最后一项错在把 $x^2+4$ 因式分解，而它在实数范围不可分解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In the decomposition $\\dfrac{5x-1}{(x-2)(x+1)} = \\dfrac{A}{x-2} + \\dfrac{B}{x+1}$, find $A$. Give an integer.",
                "zh": "在分解 $\\dfrac{5x-1}{(x-2)(x+1)} = \\dfrac{A}{x-2} + \\dfrac{B}{x+1}$ 中，求 $A$，答案为整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Clear denominators: $5x - 1 = A(x+1) + B(x-2)$. Let $x = 2$ to isolate $A$: $9 = 3A$, so $A = 3$. The value $x=2$ makes the $B$ term vanish, which is why we choose it.",
                "zh": "去分母：$5x - 1 = A(x+1) + B(x-2)$。令 $x = 2$ 分离出 $A$：$9 = 3A$，故 $A = 3$。取 $x=2$ 使 $B$ 项消失，这正是选它的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A shop makes $\\$3$ profit per bracelet and $\\$5$ per necklace, and can make at most $40$ items total per day. If it makes only necklaces, what is the maximum daily profit in dollars? Give an integer.",
                "zh": "一家店每条手链利润 $\\$3$，每条项链利润 $\\$5$，每天最多制作 $40$ 件。若只做项链，每天最大利润是多少美元？答案为整数。"
              },
              "answer": "200",
              "accept": [
                "200.0"
              ],
              "explanation": {
                "en": "Profit $P = 3b + 5n$ with $b + n \\le 40$. Since necklaces earn more per item, the maximum is at the vertex $(b,n) = (0,40)$, giving $P = 5 \\times 40 = 200$. Making all bracelets would give only $\\$120$.",
                "zh": "利润 $P = 3b + 5n$，约束 $b + n \\le 40$。因项链单件利润更高，最大值在顶点 $(b,n) = (0,40)$，得 $P = 5 \\times 40 = 200$。全做手链只有 $\\$120$。"
              }
            }
          ]
        },
        {
          "id": "matrices-operations-inverses",
          "title": "Matrix Operations, Inverses, and Determinants",
          "titleZh": "矩阵运算、逆矩阵与行列式",
          "content": [
            {
              "type": "h2",
              "en": "Matrix Notation and Equality",
              "zh": "矩阵记号与相等"
            },
            {
              "type": "p",
              "en": "A matrix is a rectangular array of numbers arranged in rows and columns. A matrix with $m$ rows and $n$ columns has dimensions $m \\times n$ (rows first, always). The entry in row $i$, column $j$ is written $a_{ij}$. Matrices organize data and, as you will see, encode entire systems of equations in a single object.",
              "zh": "矩阵是按行和列排列的矩形数字阵列。有 $m$ 行 $n$ 列的矩阵，其阶为 $m \\times n$（永远先行后列）。第 $i$ 行、第 $j$ 列的元素记作 $a_{ij}$。矩阵用来组织数据，而且如你将看到的，它能把整个方程组编码成一个对象。"
            },
            {
              "type": "p",
              "en": "Two matrices are equal only when they have the same dimensions and every corresponding entry matches. This simple rule lets you solve for unknowns by matching entries one at a time.",
              "zh": "两个矩阵相等，当且仅当它们阶数相同且每个对应元素都相等。这条简单规则让你可以逐个匹配元素来求未知量。"
            },
            {
              "type": "h2",
              "en": "Addition and Scalar Multiplication",
              "zh": "加法与数乘"
            },
            {
              "type": "p",
              "en": "You add or subtract matrices entry by entry, so both must have the same dimensions. To multiply a matrix by a scalar (a single number), multiply every entry by that number. These operations behave just like ordinary arithmetic done in parallel across the grid.",
              "zh": "矩阵按元素相加或相减，因此两者阶数必须相同。矩阵与标量（单个数）相乘时，把每个元素都乘以该数。这些运算就像在整个阵列上并行地做普通算术。"
            },
            {
              "type": "math",
              "tex": "\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + 2\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & 4 \\\\ 5 & 4 \\end{bmatrix}"
            },
            {
              "type": "h2",
              "en": "Matrix Multiplication",
              "zh": "矩阵乘法"
            },
            {
              "type": "p",
              "en": "Matrix multiplication is not entry-by-entry. To find the entry in row $i$, column $j$ of the product $AB$, take row $i$ of $A$ and column $j$ of $B$, multiply matching numbers, and add. This \"row-by-column\" dot product is why the widths must match: if $A$ is $m \\times n$ and $B$ is $n \\times p$, then $AB$ is $m \\times p$. If the inner dimensions disagree, the product is undefined.",
              "zh": "矩阵乘法不是按元素进行的。要求乘积 $AB$ 中第 $i$ 行第 $j$ 列的元素，取 $A$ 的第 $i$ 行与 $B$ 的第 $j$ 列，对应数字相乘再相加。正因为这种\"行乘列\"的点积，宽度必须匹配：若 $A$ 是 $m \\times n$，$B$ 是 $n \\times p$，则 $AB$ 是 $m \\times p$。若内层维数不一致，乘积无定义。"
            },
            {
              "type": "note",
              "en": "Common mistake: assuming $AB = BA$. Matrix multiplication is generally not commutative — often $BA$ has different dimensions or does not even exist. Always keep the factors in the order given.",
              "zh": "常见错误：以为 $AB = BA$。矩阵乘法一般不满足交换律——$BA$ 往往阶数不同，甚至根本不存在。务必保持因子的原有顺序。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Row by Column",
                "zh": "例题 1：行乘列"
              },
              "problem": {
                "en": "Compute $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$.",
                "zh": "计算 $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Top-left: row $1$ times column $1$ is $1(5) + 2(7) = 19$. Top-right: $1(6) + 2(8) = 22$.",
                  "zh": "左上：第 $1$ 行乘第 $1$ 列为 $1(5) + 2(7) = 19$。右上：$1(6) + 2(8) = 22$。"
                },
                {
                  "type": "p",
                  "en": "Bottom-left: $3(5) + 4(7) = 43$. Bottom-right: $3(6) + 4(8) = 50$.",
                  "zh": "左下：$3(5) + 4(7) = 43$。右下：$3(6) + 4(8) = 50$。"
                },
                {
                  "type": "math",
                  "tex": "\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}"
                }
              ]
            },
            {
              "type": "p",
              "en": "The identity matrix $I$ has $1$s on the main diagonal and $0$s elsewhere. It acts like the number $1$: $AI = IA = A$ for any matrix $A$ of compatible size. It is the key to defining inverses.",
              "zh": "单位矩阵 $I$ 的主对角线上是 $1$，其余为 $0$。它的作用如同数字 $1$：对任何阶数相容的矩阵 $A$，都有 $AI = IA = A$。它是定义逆矩阵的关键。"
            },
            {
              "type": "h2",
              "en": "Determinant and Inverse of a $2 \\times 2$ Matrix",
              "zh": "$2 \\times 2$ 矩阵的行列式与逆矩阵"
            },
            {
              "type": "p",
              "en": "For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, the determinant is the single number $\\det A = ad - bc$. Geometrically it measures how the matrix scales area, and it tells you instantly whether an inverse exists.",
              "zh": "对 $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$，行列式是单个数 $\\det A = ad - bc$。它在几何上度量矩阵对面积的缩放比例，并能立刻告诉你逆矩阵是否存在。"
            },
            {
              "type": "p",
              "en": "The inverse $A^{-1}$ is the matrix satisfying $AA^{-1} = I$. For a $2 \\times 2$ matrix there is a formula: swap $a$ and $d$, negate $b$ and $c$, then divide by the determinant.",
              "zh": "逆矩阵 $A^{-1}$ 是满足 $AA^{-1} = I$ 的矩阵。对 $2 \\times 2$ 矩阵有公式：交换 $a$ 与 $d$，把 $b$ 与 $c$ 取相反数，再除以行列式。"
            },
            {
              "type": "math",
              "tex": "A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}"
            },
            {
              "type": "note",
              "en": "Test tip: if $\\det A = ad - bc = 0$, the matrix is singular and has no inverse — you cannot divide by zero. Checking the determinant first saves you from a doomed calculation. A zero determinant also warns that a linear system has either no solution or infinitely many.",
              "zh": "考试提示：若 $\\det A = ad - bc = 0$，矩阵是奇异的、没有逆矩阵——你不能除以零。先检查行列式能让你避免徒劳的计算。行列式为零还预示线性方程组要么无解、要么有无穷多解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Finding an Inverse",
                "zh": "例题 2：求逆矩阵"
              },
              "problem": {
                "en": "Find the inverse of $A = \\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}$.",
                "zh": "求 $A = \\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}$ 的逆矩阵。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Determinant: $\\det A = 4(4) - 3(5) = 16 - 15 = 1$. Since it is nonzero, the inverse exists.",
                  "zh": "行列式：$\\det A = 4(4) - 3(5) = 16 - 15 = 1$。因不为零，逆矩阵存在。"
                },
                {
                  "type": "p",
                  "en": "Apply the formula: swap the diagonal, negate the off-diagonal, divide by $1$.",
                  "zh": "套用公式：交换对角线元素，非对角线取相反数，再除以 $1$。"
                },
                {
                  "type": "math",
                  "tex": "A^{-1} = \\frac{1}{1}\\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix} = \\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Solving a System as $AX = B$",
              "zh": "把方程组写成 $AX = B$ 求解"
            },
            {
              "type": "p",
              "en": "A linear system can be packaged as a matrix equation $AX = B$, where $A$ holds the coefficients, $X$ is the column of unknowns, and $B$ is the column of constants. If $A$ is invertible, multiply both sides on the left by $A^{-1}$ to get $X = A^{-1}B$ — a single formula that solves the whole system at once.",
              "zh": "线性方程组可以打包成矩阵方程 $AX = B$，其中 $A$ 是系数矩阵，$X$ 是未知量列向量，$B$ 是常数列向量。若 $A$ 可逆，在两边左乘 $A^{-1}$ 得 $X = A^{-1}B$——一个公式就能一次解出整个方程组。"
            },
            {
              "type": "note",
              "en": "Calculus and beyond: writing $AX = B$ and solving with $A^{-1}$ is the gateway to linear algebra, the language of multivariable calculus, computer graphics, and machine learning. The determinant you compute here reappears as the Jacobian that rescales areas and volumes under a change of variables.",
              "zh": "通往微积分及更高层：把方程组写成 $AX = B$ 并用 $A^{-1}$ 求解，是通向线性代数的门户，而线性代数正是多元微积分、计算机图形学与机器学习的语言。你在此计算的行列式，将以雅可比行列式的形式重现，用于换元时对面积和体积的重新缩放。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: The Matrix Equation Method",
                "zh": "例题 3：矩阵方程法"
              },
              "problem": {
                "en": "Solve $\\begin{cases} 4x + 3y = 18 \\\\ 5x + 4y = 23 \\end{cases}$ using $X = A^{-1}B$.",
                "zh": "用 $X = A^{-1}B$ 解 $\\begin{cases} 4x + 3y = 18 \\\\ 5x + 4y = 23 \\end{cases}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $A = \\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 18 \\\\ 23 \\end{bmatrix}$. From Example 2, $A^{-1} = \\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}$.",
                  "zh": "这里 $A = \\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}$，$B = \\begin{bmatrix} 18 \\\\ 23 \\end{bmatrix}$。由例题 2，$A^{-1} = \\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}$。"
                },
                {
                  "type": "math",
                  "tex": "X = A^{-1}B = \\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}\\begin{bmatrix} 18 \\\\ 23 \\end{bmatrix} = \\begin{bmatrix} 72 - 69 \\\\ -90 + 92 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}"
                },
                {
                  "type": "p",
                  "en": "So $x = 3$ and $y = 2$. Check: $4(3) + 3(2) = 18$ and $5(3) + 4(2) = 23$. Both hold.",
                  "zh": "故 $x = 3$，$y = 2$。验证：$4(3) + 3(2) = 18$，$5(3) + 4(2) = 23$，均成立。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Cramer's Rule and Gaussian Elimination",
              "zh": "克拉默法则与高斯消元"
            },
            {
              "type": "p",
              "en": "Cramer's Rule solves a system using determinants alone. For a $2 \\times 2$ system, $x = \\dfrac{\\det A_x}{\\det A}$ and $y = \\dfrac{\\det A_y}{\\det A}$, where $A_x$ replaces the first column of $A$ with $B$, and $A_y$ replaces the second column with $B$. It extends to $3 \\times 3$ systems the same way (replace one column at a time), though there the arithmetic grows quickly.",
              "zh": "克拉默法则仅用行列式来解方程组。对 $2 \\times 2$ 方程组，$x = \\dfrac{\\det A_x}{\\det A}$，$y = \\dfrac{\\det A_y}{\\det A}$，其中 $A_x$ 把 $A$ 的第一列换成 $B$，$A_y$ 把第二列换成 $B$。它以同样方式推广到 $3 \\times 3$ 方程组（每次替换一列），只是那里的计算量会迅速增大。"
            },
            {
              "type": "p",
              "en": "Gaussian elimination is the workhorse for larger systems. Write the coefficients and constants together as an augmented matrix $[A \\mid B]$, then use three row operations to simplify toward the identity on the left: swap two rows, multiply a row by a nonzero constant, or add a multiple of one row to another. The constant column then displays the solution.",
              "zh": "高斯消元是求解较大方程组的主力方法。把系数与常数一起写成增广矩阵 $[A \\mid B]$，再用三种行变换把左侧化简成单位矩阵：交换两行、用非零常数乘某行、把某行的倍数加到另一行。此时常数列即显示出解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Cramer's Rule",
                "zh": "例题 4：克拉默法则"
              },
              "problem": {
                "en": "Use Cramer's Rule to solve $\\begin{cases} 2x + y = 5 \\\\ 3x - y = 0 \\end{cases}$.",
                "zh": "用克拉默法则解 $\\begin{cases} 2x + y = 5 \\\\ 3x - y = 0 \\end{cases}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Main determinant: $\\det A = \\begin{vmatrix} 2 & 1 \\\\ 3 & -1 \\end{vmatrix} = 2(-1) - 1(3) = -5$.",
                  "zh": "主行列式：$\\det A = \\begin{vmatrix} 2 & 1 \\\\ 3 & -1 \\end{vmatrix} = 2(-1) - 1(3) = -5$。"
                },
                {
                  "type": "p",
                  "en": "Replace columns with $B = \\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$: $\\det A_x = \\begin{vmatrix} 5 & 1 \\\\ 0 & -1 \\end{vmatrix} = -5$ and $\\det A_y = \\begin{vmatrix} 2 & 5 \\\\ 3 & 0 \\end{vmatrix} = -15$.",
                  "zh": "用 $B = \\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$ 替换各列：$\\det A_x = \\begin{vmatrix} 5 & 1 \\\\ 0 & -1 \\end{vmatrix} = -5$，$\\det A_y = \\begin{vmatrix} 2 & 5 \\\\ 3 & 0 \\end{vmatrix} = -15$。"
                },
                {
                  "type": "p",
                  "en": "Divide: $x = \\dfrac{-5}{-5} = 1$ and $y = \\dfrac{-15}{-5} = 3$. So $(x, y) = (1, 3)$.",
                  "zh": "相除：$x = \\dfrac{-5}{-5} = 1$，$y = \\dfrac{-15}{-5} = 3$。故 $(x, y) = (1, 3)$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "If $A$ is a $2 \\times 3$ matrix and $B$ is a $3 \\times 4$ matrix, what are the dimensions of $AB$?",
                "zh": "若 $A$ 是 $2 \\times 3$ 矩阵，$B$ 是 $3 \\times 4$ 矩阵，则 $AB$ 的阶是多少？"
              },
              "choices": [
                "$3 \\times 3$",
                "$2 \\times 4$",
                "$4 \\times 2$",
                "Undefined"
              ],
              "answer": 1,
              "explanation": {
                "en": "The inner dimensions ($3$ and $3$) match, so the product exists and takes the outer dimensions: $2 \\times 4$. Answer \"undefined\" would apply only if the inner dimensions disagreed.",
                "zh": "内层维数（$3$ 与 $3$）匹配，故乘积存在，阶取外层维数：$2 \\times 4$。只有内层维数不一致时才\"无定义\"。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Compute the determinant of $\\begin{bmatrix} 3 & 5 \\\\ 2 & 4 \\end{bmatrix}$. Give an integer.",
                "zh": "计算 $\\begin{bmatrix} 3 & 5 \\\\ 2 & 4 \\end{bmatrix}$ 的行列式，答案为整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Determinant $= ad - bc = 3(4) - 5(2) = 12 - 10 = 2$. A common slip is computing $ad - bc$ as $3(4) - 2(5)$ in the wrong order, but here both give $2$; keep the pattern (main diagonal minus off-diagonal).",
                "zh": "行列式 $= ad - bc = 3(4) - 5(2) = 12 - 10 = 2$。常见失误是把 $ad - bc$ 顺序弄错；请牢记规律（主对角线之积减去次对角线之积）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which matrix does an inverse fail to exist?",
                "zh": "哪个矩阵的逆矩阵不存在？"
              },
              "choices": [
                "$\\begin{bmatrix} 3 & 1 \\\\ 2 & 1 \\end{bmatrix}$",
                "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
                "$\\begin{bmatrix} 2 & 4 \\\\ 1 & 2 \\end{bmatrix}$",
                "$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Its determinant is $2(2) - 4(1) = 0$, so it is singular with no inverse. The others have determinants $1$, $1$, and $-1$, all nonzero, so all are invertible.",
                "zh": "其行列式为 $2(2) - 4(1) = 0$，故为奇异矩阵，无逆。其余行列式分别为 $1$、$1$、$-1$，均不为零，故都可逆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 5 \\end{bmatrix}$, the inverse is $\\begin{bmatrix} 1/2 & 0 \\\\ 0 & k \\end{bmatrix}$. Give $k$ as a fraction.",
                "zh": "对 $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 5 \\end{bmatrix}$，其逆为 $\\begin{bmatrix} 1/2 & 0 \\\\ 0 & k \\end{bmatrix}$，请以分数给出 $k$。"
              },
              "answer": "1/5",
              "accept": [
                "0.2"
              ],
              "explanation": {
                "en": "For a diagonal matrix the inverse just inverts each diagonal entry: $1/2$ and $1/5$. You can confirm with the formula, where $\\det A = 10$ and the swapped-diagonal entry $2$ divided by $10$ gives $1/5$.",
                "zh": "对角矩阵的逆只需把每个对角元素取倒数：$1/2$ 与 $1/5$。也可用公式验证，$\\det A = 10$，交换后的对角元素 $2$ 除以 $10$ 得 $1/5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To solve $AX = B$ when $A$ is invertible, what is $X$?",
                "zh": "当 $A$ 可逆时，为解 $AX = B$，$X$ 等于什么？"
              },
              "choices": [
                "$X = BA^{-1}$",
                "$X = B - A$",
                "$X = AB^{-1}$",
                "$X = A^{-1}B$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Multiply both sides on the LEFT by $A^{-1}$: $A^{-1}AX = A^{-1}B$, so $X = A^{-1}B$. Order matters because matrix multiplication is not commutative — $BA^{-1}$ multiplies on the wrong side and may not even be defined.",
                "zh": "在两边左乘 $A^{-1}$：$A^{-1}AX = A^{-1}B$，故 $X = A^{-1}B$。顺序很重要，因为矩阵乘法不满足交换律——$BA^{-1}$ 乘错了一侧，甚至可能无定义。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using Cramer's Rule on $\\begin{cases} x + y = 7 \\\\ x - y = 1 \\end{cases}$, find $x$. Give an integer.",
                "zh": "对 $\\begin{cases} x + y = 7 \\\\ x - y = 1 \\end{cases}$ 用克拉默法则求 $x$，答案为整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "Main determinant $= (1)(-1) - (1)(1) = -2$. Replace column one: $\\det A_x = \\begin{vmatrix} 7 & 1 \\\\ 1 & -1 \\end{vmatrix} = -7 - 1 = -8$. Then $x = -8 / -2 = 4$.",
                "zh": "主行列式 $= (1)(-1) - (1)(1) = -2$。替换第一列：$\\det A_x = \\begin{vmatrix} 7 & 1 \\\\ 1 & -1 \\end{vmatrix} = -7 - 1 = -8$。故 $x = -8 / -2 = 4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of these is NOT a valid row operation for Gaussian elimination on an augmented matrix?",
                "zh": "下列哪一项不是增广矩阵高斯消元的合法行变换？"
              },
              "choices": [
                "Multiply a row by $0$",
                "Swap two rows",
                "Multiply a row by $-3$",
                "Add twice one row to another"
              ],
              "answer": 0,
              "explanation": {
                "en": "Multiplying a row by $0$ wipes out its information and is not allowed — the scalar must be nonzero. The other three are the legitimate elementary row operations that preserve the solution set.",
                "zh": "用 $0$ 乘某行会抹去其信息，不被允许——标量必须非零。其余三项都是保持解集不变的合法初等行变换。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A theater sells adult tickets at $\\$8$ and child tickets at $\\$5$. One night $200$ tickets sold for $\\$1330$. Set up $8a + 5c = 1330$ with $a + c = 200$ and solve for the number of adult tickets $a$. Give an integer.",
                "zh": "一家剧院成人票 $\\$8$、儿童票 $\\$5$。某晚售出 $200$ 张票共 $\\$1330$。列出 $8a + 5c = 1330$ 与 $a + c = 200$，求成人票数 $a$，答案为整数。"
              },
              "answer": "110",
              "accept": [
                "110.0"
              ],
              "explanation": {
                "en": "From $a + c = 200$, $c = 200 - a$. Substitute: $8a + 5(200 - a) = 1330$, so $3a + 1000 = 1330$, giving $3a = 330$ and $a = 110$. Then $c = 90$, and indeed $8(110) + 5(90) = 1330$.",
                "zh": "由 $a + c = 200$ 得 $c = 200 - a$。代入：$8a + 5(200 - a) = 1330$，即 $3a + 1000 = 1330$，得 $3a = 330$，$a = 110$。则 $c = 90$，且 $8(110) + 5(90) = 1330$，吻合。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "conics-parametric",
      "title": "Unit 9: Conic Sections and Parametric Equations",
      "titleZh": "第九单元：圆锥曲线与参数方程",
      "lessons": [
        {
          "id": "conic-sections",
          "title": "Conic Sections: Parabolas, Ellipses, and Hyperbolas",
          "titleZh": "圆锥曲线：抛物线、椭圆与双曲线",
          "content": [
            {
              "type": "h2",
              "en": "Slicing a Cone",
              "zh": "切割圆锥"
            },
            {
              "type": "p",
              "en": "Take a double cone — two ice-cream cones joined tip to tip — and slice it with a flat plane. The shape of the cut depends only on the angle of the plane. A cut parallel to one side of the cone gives a parabola; a tilted cut through one nappe gives an ellipse (a circle if the cut is horizontal); a steep cut that passes through both nappes gives a hyperbola with two branches. Every equation in this lesson describes one of these three curves.",
              "zh": "取一个双圆锥——两个尖对尖相接的甜筒——用一个平面去切它，截面的形状只取决于平面的倾斜角度。与圆锥母线平行的切割得到抛物线；斜着穿过一个圆锥面的切割得到椭圆（水平切割则得到圆）；陡峭地穿过两个圆锥面的切割得到有两支的双曲线。本课的每个方程都描述这三种曲线之一。"
            },
            {
              "type": "p",
              "en": "What unites them algebraically is that each is the set of points whose distances to fixed points (called foci) or to a fixed line (called a directrix) satisfy a simple rule. Learning to read a conic from its equation, and to write its equation from its geometry, is the goal here.",
              "zh": "从代数上统一它们的是：每一种都是到定点（称为焦点）或到定直线（称为准线）的距离满足某个简单规则的点的集合。学会从方程读出圆锥曲线、并从几何条件写出方程，就是本课的目标。"
            },
            {
              "type": "h2",
              "en": "Parabolas",
              "zh": "抛物线"
            },
            {
              "type": "p",
              "en": "A parabola is the set of all points equidistant from a fixed point (the focus) and a fixed line (the directrix). The vertex sits halfway between them, and the distance from the vertex to the focus is $p$. A parabola opening up or down with vertex $(h, k)$ has the standard form on the left; one opening left or right has the form on the right.",
              "zh": "抛物线是到定点（焦点）与定直线（准线）距离相等的所有点的集合。顶点位于两者正中间，顶点到焦点的距离为 $p$。顶点为 $(h, k)$、开口向上或向下的抛物线有下面左边的标准式；开口向左或向右的有右边的标准式。"
            },
            {
              "type": "math",
              "tex": "(x-h)^2 = 4p(y-k) \\qquad\\qquad (y-k)^2 = 4p(x-h)"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "For $(x-h)^2 = 4p(y-k)$: opens up if $p>0$, down if $p<0$. Focus $(h, k+p)$, directrix $y = k-p$.",
                  "zh": "对 $(x-h)^2 = 4p(y-k)$：$p>0$ 时开口向上，$p<0$ 时向下。焦点 $(h, k+p)$，准线 $y = k-p$。"
                },
                {
                  "en": "For $(y-k)^2 = 4p(x-h)$: opens right if $p>0$, left if $p<0$. Focus $(h+p, k)$, directrix $x = h-p$.",
                  "zh": "对 $(y-k)^2 = 4p(x-h)$：$p>0$ 时开口向右，$p<0$ 时向左。焦点 $(h+p, k)$，准线 $x = h-p$。"
                },
                {
                  "en": "The squared variable tells you the axis of symmetry: if $x$ is squared the axis is vertical, if $y$ is squared it is horizontal.",
                  "zh": "被平方的变量指示对称轴：$x$ 被平方则对称轴竖直，$y$ 被平方则对称轴水平。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: confusing $p$ with $4p$. In $(x-h)^2 = 4p(y-k)$, the coefficient on the linear term equals $4p$, so you must divide by 4 to get the focal distance $p$. If the coefficient is $8$, then $p = 2$, not $8$.",
              "zh": "常见错误：把 $p$ 与 $4p$ 混淆。在 $(x-h)^2 = 4p(y-k)$ 中，一次项系数等于 $4p$，所以要除以 4 才得到焦距 $p$。若系数为 $8$，则 $p = 2$ 而非 $8$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Find the vertex, focus, and directrix of $x^2 = 12y$, and describe its opening.",
                "zh": "求 $x^2 = 12y$ 的顶点、焦点与准线，并说明其开口方向。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The $x$ term is squared, so the axis is vertical. Matching $x^2 = 4p\\,y$ with $(h,k)=(0,0)$ gives $4p = 12$, so $p = 3 > 0$: the parabola opens up.",
                  "zh": "$x$ 被平方，故对称轴竖直。将 $x^2 = 4p\\,y$ 与 $(h,k)=(0,0)$ 对照得 $4p = 12$，故 $p = 3 > 0$：开口向上。"
                },
                {
                  "type": "p",
                  "en": "Vertex $(0,0)$; focus $(0, 0+3) = (0, 3)$; directrix $y = 0 - 3 = -3$.",
                  "zh": "顶点 $(0,0)$；焦点 $(0, 0+3) = (0, 3)$；准线 $y = 0 - 3 = -3$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Ellipses",
              "zh": "椭圆"
            },
            {
              "type": "p",
              "en": "An ellipse is the set of points whose distances to two fixed foci add up to a constant. Center it at $(h,k)$ and let $a$ be the semi-major axis (the longer one) and $b$ the semi-minor axis. The larger denominator sits under the variable along the major axis.",
              "zh": "椭圆是到两个定焦点距离之和为常数的点的集合。设中心在 $(h,k)$，$a$ 为半长轴（较长者），$b$ 为半短轴。较大的分母位于长轴方向对应变量的下方。"
            },
            {
              "type": "math",
              "tex": "\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1 \\quad (a>b,\\ \\text{horizontal major axis})"
            },
            {
              "type": "p",
              "en": "The vertices are the endpoints of the major axis, a distance $a$ from the center; the co-vertices are the endpoints of the minor axis, a distance $b$ from the center. The two foci lie on the major axis a distance $c$ from the center, where",
              "zh": "顶点是长轴的端点，到中心距离为 $a$；余顶点是短轴的端点，到中心距离为 $b$。两焦点位于长轴上，到中心距离为 $c$，其中"
            },
            {
              "type": "math",
              "tex": "a^2 = b^2 + c^2"
            },
            {
              "type": "p",
              "en": "The eccentricity $e = \\dfrac{c}{a}$ measures how stretched the ellipse is. For an ellipse $0 \\le e < 1$: when $e$ is near 0 the ellipse is nearly circular, and when $e$ is near 1 it is long and thin. Planetary orbits are ellipses with the Sun at one focus (Kepler), with small eccentricities.",
              "zh": "离心率 $e = \\dfrac{c}{a}$ 衡量椭圆被拉伸的程度。对椭圆有 $0 \\le e < 1$：$e$ 接近 0 时几乎是圆，$e$ 接近 1 时又长又扁。行星轨道是以太阳为一个焦点的椭圆（开普勒定律），离心率都很小。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "For $\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$, find the vertices, foci, and eccentricity.",
                "zh": "对 $\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$，求顶点、焦点与离心率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The larger denominator, $25$, is under $x^2$, so the major axis is horizontal with $a^2 = 25$, $a = 5$, and $b^2 = 9$, $b = 3$. Center $(0,0)$.",
                  "zh": "较大的分母 $25$ 在 $x^2$ 下，故长轴水平，$a^2 = 25$，$a = 5$；$b^2 = 9$，$b = 3$。中心 $(0,0)$。"
                },
                {
                  "type": "p",
                  "en": "Vertices $(\\pm 5, 0)$. From $a^2 = b^2 + c^2$: $c^2 = 25 - 9 = 16$, so $c = 4$. Foci $(\\pm 4, 0)$.",
                  "zh": "顶点 $(\\pm 5, 0)$。由 $a^2 = b^2 + c^2$：$c^2 = 25 - 9 = 16$，故 $c = 4$。焦点 $(\\pm 4, 0)$。"
                },
                {
                  "type": "p",
                  "en": "Eccentricity $e = \\dfrac{c}{a} = \\dfrac{4}{5} = 0.8$, a fairly elongated ellipse.",
                  "zh": "离心率 $e = \\dfrac{c}{a} = \\dfrac{4}{5} = 0.8$，是一个相当扁长的椭圆。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Hyperbolas",
              "zh": "双曲线"
            },
            {
              "type": "p",
              "en": "A hyperbola is the set of points whose distances to two foci differ by a constant. It has two separate branches. Centered at $(h,k)$, the two standard forms are below; the variable with the positive term determines which way the branches open.",
              "zh": "双曲线是到两焦点距离之差为常数的点的集合，它有两支彼此分离的曲线。以 $(h,k)$ 为中心，两种标准式如下；正项对应的变量决定分支的开口方向。"
            },
            {
              "type": "math",
              "tex": "\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1 \\qquad \\frac{(y-k)^2}{a^2} - \\frac{(x-h)^2}{b^2} = 1"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Left form ($x^2$ positive): opens left/right, vertices $(h\\pm a, k)$, asymptotes $y - k = \\pm\\dfrac{b}{a}(x-h)$.",
                  "zh": "左式（$x^2$ 为正）：左右开口，顶点 $(h\\pm a, k)$，渐近线 $y - k = \\pm\\dfrac{b}{a}(x-h)$。"
                },
                {
                  "en": "Right form ($y^2$ positive): opens up/down, vertices $(h, k\\pm a)$, asymptotes $y - k = \\pm\\dfrac{a}{b}(x-h)$.",
                  "zh": "右式（$y^2$ 为正）：上下开口，顶点 $(h, k\\pm a)$，渐近线 $y - k = \\pm\\dfrac{a}{b}(x-h)$。"
                },
                {
                  "en": "For a hyperbola the focal relationship is $c^2 = a^2 + b^2$, so the foci lie farther out than the vertices ($c > a$).",
                  "zh": "双曲线的焦点关系为 $c^2 = a^2 + b^2$，因此焦点比顶点更靠外（$c > a$）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: for an ellipse $a$ is the largest of the three lengths and $a^2 = b^2 + c^2$; for a hyperbola $c$ is the largest and $c^2 = a^2 + b^2$. Whichever term is positive in the equation sits over $a^2$ — do not assume $a > b$ for hyperbolas.",
              "zh": "考试提示：对椭圆，$a$ 是三个长度中最大的，$a^2 = b^2 + c^2$；对双曲线，$c$ 最大，$c^2 = a^2 + b^2$。方程中为正的那一项分母就是 $a^2$——不要想当然地以为双曲线也有 $a > b$。"
            },
            {
              "type": "h2",
              "en": "Identifying a Conic from General Form",
              "zh": "从一般式识别圆锥曲线"
            },
            {
              "type": "p",
              "en": "A conic often appears in expanded general form $Ax^2 + Cy^2 + Dx + Ey + F = 0$ (no $xy$ term). Complete the square in $x$ and in $y$ to recover a standard form. A quick classifier by the squared coefficients $A$ and $C$:",
              "zh": "圆锥曲线常以展开的一般式 $Ax^2 + Cy^2 + Dx + Ey + F = 0$（无 $xy$ 项）出现。分别对 $x$ 和 $y$ 配方即可还原为标准式。用平方项系数 $A$、$C$ 快速判别："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Only one of $A$, $C$ is nonzero (one variable squared): parabola.",
                  "zh": "$A$、$C$ 中仅一个非零（只有一个变量被平方）：抛物线。"
                },
                {
                  "en": "$A$ and $C$ same sign but unequal: ellipse (equal and same sign: circle).",
                  "zh": "$A$、$C$ 同号但不相等：椭圆（相等且同号：圆）。"
                },
                {
                  "en": "$A$ and $C$ opposite signs: hyperbola.",
                  "zh": "$A$、$C$ 异号：双曲线。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Identify and put $9x^2 + 4y^2 - 36x + 8y + 4 = 0$ into standard form.",
                "zh": "判别并将 $9x^2 + 4y^2 - 36x + 8y + 4 = 0$ 化为标准式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Coefficients $A=9$, $C=4$ are same sign and unequal, so this is an ellipse. Group and factor: $9(x^2 - 4x) + 4(y^2 + 2y) = -4$.",
                  "zh": "系数 $A=9$、$C=4$ 同号且不等，故为椭圆。分组并提取公因数：$9(x^2 - 4x) + 4(y^2 + 2y) = -4$。"
                },
                {
                  "type": "p",
                  "en": "Complete the square: $9(x^2 - 4x + 4) + 4(y^2 + 2y + 1) = -4 + 9(4) + 4(1)$, i.e. $9(x-2)^2 + 4(y+1)^2 = 36$.",
                  "zh": "配方：$9(x^2 - 4x + 4) + 4(y^2 + 2y + 1) = -4 + 9(4) + 4(1)$，即 $9(x-2)^2 + 4(y+1)^2 = 36$。"
                },
                {
                  "type": "p",
                  "en": "Divide by 36: $\\dfrac{(x-2)^2}{4} + \\dfrac{(y+1)^2}{9} = 1$. Center $(2,-1)$; the major axis is vertical since $9 > 4$, with $a = 3$, $b = 2$.",
                  "zh": "除以 36：$\\dfrac{(x-2)^2}{4} + \\dfrac{(y+1)^2}{9} = 1$。中心 $(2,-1)$；因 $9 > 4$ 长轴竖直，$a = 3$，$b = 2$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Where Conics Show Up",
              "zh": "圆锥曲线的应用"
            },
            {
              "type": "p",
              "en": "These curves are everywhere in physics and engineering. A satellite dish is a parabola rotated in 3D: parallel signals reflect off it and all pass through the focus, where the receiver sits. A whispering gallery is an ellipse — a whisper at one focus is reflected to the other focus, so two people far apart hear each other clearly. Comets and planets travel on ellipses (or hyperbolas, if they escape) with the Sun at a focus.",
              "zh": "这些曲线在物理与工程中无处不在。卫星天线是抛物线的三维旋转面：平行的信号反射后全都经过焦点，接收器就装在那里。回音壁是椭圆——一个焦点处的低语被反射到另一个焦点，相隔很远的两人也能清晰互闻。彗星与行星沿以太阳为焦点的椭圆（若逃逸则为双曲线）运行。"
            },
            {
              "type": "note",
              "en": "Calculus preview: eccentricity unifies all conics into a single family. In calculus you will describe them together in polar coordinates as $r = \\dfrac{ed}{1 + e\\cos\\theta}$, where $e<1$ gives an ellipse, $e=1$ a parabola, and $e>1$ a hyperbola — one formula for all three.",
              "zh": "微积分预告：离心率把所有圆锥曲线统一为一个族。在微积分中你会用极坐标一并描述它们：$r = \\dfrac{ed}{1 + e\\cos\\theta}$，其中 $e<1$ 为椭圆，$e=1$ 为抛物线，$e>1$ 为双曲线——一个公式囊括三者。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the directrix of the parabola $x^2 = 8y$?",
                "zh": "抛物线 $x^2 = 8y$ 的准线是什么？"
              },
              "choices": [
                "$y = 2$",
                "$y = -2$",
                "$x = -2$",
                "$y = -8$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Here $4p = 8$, so $p = 2$ and the vertex is $(0,0)$. The parabola opens up, so the directrix is below: $y = k - p = -2$. Choosing $y=-8$ mistakes $4p$ for $p$.",
                "zh": "这里 $4p = 8$，故 $p = 2$，顶点为 $(0,0)$。开口向上，准线在下方：$y = k - p = -2$。选 $y=-8$ 是把 $4p$ 错当成 $p$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $\\dfrac{x^2}{16} + \\dfrac{y^2}{25} = 1$ is an ellipse. Which way is the major axis?",
                "zh": "$\\dfrac{x^2}{16} + \\dfrac{y^2}{25} = 1$ 的图象是椭圆，长轴沿哪个方向？"
              },
              "choices": [
                "Diagonal",
                "Horizontal",
                "Vertical",
                "It is a circle"
              ],
              "answer": 2,
              "explanation": {
                "en": "The larger denominator $25$ sits under $y^2$, so the major axis is vertical with $a = 5$. A common error is to look at the $x$-term out of habit; the size of the denominator, not the variable, decides.",
                "zh": "较大的分母 $25$ 在 $y^2$ 下，故长轴竖直，$a = 5$。常见错误是习惯性地看 $x$ 项；决定方向的是分母大小而非变量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the ellipse $\\dfrac{x^2}{169} + \\dfrac{y^2}{144} = 1$, find $c$, the distance from the center to a focus. Give an integer.",
                "zh": "对椭圆 $\\dfrac{x^2}{169} + \\dfrac{y^2}{144} = 1$，求中心到焦点的距离 $c$，答案为整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "Here $a^2 = 169$ and $b^2 = 144$. Use $a^2 = b^2 + c^2$: $c^2 = 169 - 144 = 25$, so $c = 5$.",
                "zh": "这里 $a^2 = 169$，$b^2 = 144$。用 $a^2 = b^2 + c^2$：$c^2 = 169 - 144 = 25$，故 $c = 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What are the equations of the asymptotes of $\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1$?",
                "zh": "$\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1$ 的渐近线方程是什么？"
              },
              "choices": [
                "$y = \\pm\\dfrac{9}{16}x$",
                "$y = \\pm\\dfrac{3}{4}x$",
                "$y = \\pm\\dfrac{16}{9}x$",
                "$y = \\pm\\dfrac{4}{3}x$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The $x^2$ term is positive, so $a^2 = 9$ ($a=3$) and $b^2 = 16$ ($b=4$), and the asymptotes are $y = \\pm\\frac{b}{a}x = \\pm\\frac{4}{3}x$. The tempting $\\frac{3}{4}$ inverts the ratio.",
                "zh": "$x^2$ 项为正，故 $a^2 = 9$（$a=3$），$b^2 = 16$（$b=4$），渐近线为 $y = \\pm\\frac{b}{a}x = \\pm\\frac{4}{3}x$。诱人的 $\\frac{3}{4}$ 把比值取反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A hyperbola has $a = 3$ and $b = 4$. Find $c$, the distance from center to focus. Give an integer.",
                "zh": "某双曲线 $a = 3$，$b = 4$，求中心到焦点的距离 $c$，答案为整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "For a hyperbola $c^2 = a^2 + b^2 = 9 + 16 = 25$, so $c = 5$. Using the ellipse relation $a^2 = b^2 + c^2$ here would give a negative $c^2$ — a sign you picked the wrong formula.",
                "zh": "双曲线中 $c^2 = a^2 + b^2 = 9 + 16 = 25$，故 $c = 5$。若在此误用椭圆关系 $a^2 = b^2 + c^2$ 会得到负的 $c^2$——正是选错公式的信号。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Completing the square on $x^2 - y^2 + 4x - 6y - 6 = 0$ produces which type of conic?",
                "zh": "对 $x^2 - y^2 + 4x - 6y - 6 = 0$ 配方后得到哪种圆锥曲线？"
              },
              "choices": [
                "Hyperbola",
                "Ellipse",
                "Parabola",
                "Circle"
              ],
              "answer": 0,
              "explanation": {
                "en": "The squared coefficients are $A = 1$ and $C = -1$: opposite signs, so it is a hyperbola. Same signs would give an ellipse or circle, and only one squared term would give a parabola.",
                "zh": "平方项系数 $A = 1$，$C = -1$：异号，故为双曲线。同号会得到椭圆或圆，只有一个平方项才是抛物线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A satellite dish has cross-section $y = \\dfrac{1}{8}x^2$ with vertex at the origin. The receiver should be placed at the focus. How many units above the vertex is the focus? Give an integer.",
                "zh": "一个卫星天线的截面为 $y = \\dfrac{1}{8}x^2$，顶点在原点，接收器应放在焦点处。焦点在顶点上方多少个单位？答案为整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Rewrite as $x^2 = 8y$, so $4p = 8$ and $p = 2$. The focus is $p = 2$ units above the vertex, along the axis — exactly where reflected parallel signals converge.",
                "zh": "改写为 $x^2 = 8y$，故 $4p = 8$，$p = 2$。焦点在顶点上方 $p = 2$ 个单位、位于对称轴上——正是反射后的平行信号汇聚之处。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An elliptical whispering gallery is 100 ft long (major axis) and 60 ft wide (minor axis). How far from the center is each focus, in feet? Give an integer.",
                "zh": "一个椭圆形回音壁长 100 英尺（长轴）、宽 60 英尺（短轴）。每个焦点距中心多少英尺？答案为整数。"
              },
              "answer": "40",
              "accept": [
                "40.0"
              ],
              "explanation": {
                "en": "Semi-major $a = 50$, semi-minor $b = 30$. Then $c^2 = a^2 - b^2 = 2500 - 900 = 1600$, so $c = 40$. Two people standing 40 ft from center on the long axis, on opposite sides, are at the foci and hear each other.",
                "zh": "半长轴 $a = 50$，半短轴 $b = 30$。则 $c^2 = a^2 - b^2 = 2500 - 900 = 1600$，故 $c = 40$。两人分别站在长轴上距中心 40 英尺的两侧，正处于焦点，可彼此听见。"
              }
            }
          ]
        },
        {
          "id": "parametric-equations",
          "title": "Parametric Equations",
          "titleZh": "参数方程",
          "content": [
            {
              "type": "h2",
              "en": "Describing Motion with a Parameter",
              "zh": "用参数描述运动"
            },
            {
              "type": "p",
              "en": "So far a curve has been a set of points $(x, y)$ tied by one equation. But that view cannot say when a point is reached or which direction the curve is traced. Parametric equations fix this by letting a third variable $t$ — often thought of as time — control both coordinates independently:",
              "zh": "到目前为止，曲线一直是由一个方程联系起来的点集 $(x, y)$。但这种视角无法说明何时到达某点、以及曲线沿哪个方向被描绘。参数方程通过引入第三个变量 $t$（常理解为时间）来分别控制两个坐标，从而解决这一问题："
            },
            {
              "type": "math",
              "tex": "x = x(t), \\qquad y = y(t)"
            },
            {
              "type": "p",
              "en": "As $t$ increases, the point $(x(t), y(t))$ moves along a path, and we can mark its position at each instant. The curve traced out gains an orientation — a direction of travel — that a single rectangular equation cannot record.",
              "zh": "当 $t$ 增大时，点 $(x(t), y(t))$ 沿一条路径移动，我们可以标出它在每一时刻的位置。描绘出的曲线带有方向性——运动的走向——这是单个直角坐标方程无法记录的。"
            },
            {
              "type": "h2",
              "en": "Tables and Sketching",
              "zh": "列表与描点"
            },
            {
              "type": "p",
              "en": "The most direct way to see a parametric curve is to build a table: choose several values of $t$, compute $x$ and $y$ for each, plot the points, and connect them in order of increasing $t$. Arrows on the curve record the orientation.",
              "zh": "看清参数曲线最直接的方法是列表：取若干 $t$ 值，分别算出 $x$ 与 $y$，描点，并按 $t$ 增大的顺序连接。曲线上的箭头记录方向。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Sketch the path given by $x = t + 1$, $y = t^2$ for $t = -2, -1, 0, 1, 2$, and give its orientation.",
                "zh": "对 $x = t + 1$、$y = t^2$，取 $t = -2, -1, 0, 1, 2$ 描出路径并说明方向。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute points in order: $t=-2\\to(-1,4)$, $t=-1\\to(0,1)$, $t=0\\to(1,0)$, $t=1\\to(2,1)$, $t=2\\to(3,4)$.",
                  "zh": "按顺序算点：$t=-2\\to(-1,4)$，$t=-1\\to(0,1)$，$t=0\\to(1,0)$，$t=1\\to(2,1)$，$t=2\\to(3,4)$。"
                },
                {
                  "type": "p",
                  "en": "Plotting these traces a parabola opening upward with lowest point $(1, 0)$. As $t$ increases the point moves left-to-right, so the orientation runs from $(-1,4)$ down through $(1,0)$ and back up to $(3,4)$.",
                  "zh": "描点得到一条开口向上、最低点为 $(1, 0)$ 的抛物线。$t$ 增大时点自左向右移动，方向从 $(-1,4)$ 下行经 $(1,0)$ 再上行至 $(3,4)$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Eliminating the Parameter",
              "zh": "消去参数"
            },
            {
              "type": "p",
              "en": "To connect a parametric curve to a familiar rectangular equation, eliminate $t$: solve one equation for $t$ and substitute into the other, or use an identity. The result relates $x$ and $y$ directly. But be warned — this step throws away information about orientation and often about the domain.",
              "zh": "要把参数曲线与熟悉的直角坐标方程联系起来，就消去 $t$：从一个方程解出 $t$ 代入另一个，或利用某个恒等式。结果直接联系 $x$ 与 $y$。但要注意——这一步会丢弃方向信息，往往也会丢弃定义域信息。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Eliminate the parameter from $x = t + 1$, $y = t^2$ and state what is lost.",
                "zh": "从 $x = t + 1$、$y = t^2$ 中消去参数，并指出丢失了什么。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Solve the first for $t$: $t = x - 1$. Substitute into $y = t^2$: $y = (x-1)^2$.",
                  "zh": "由第一式解出 $t$：$t = x - 1$。代入 $y = t^2$：$y = (x-1)^2$。"
                },
                {
                  "type": "p",
                  "en": "The rectangular equation $y = (x-1)^2$ is the same parabola, but it no longer tells us that the point moves left-to-right, nor (if $t$ were restricted) which piece of the parabola is actually traced.",
                  "zh": "直角坐标方程 $y = (x-1)^2$ 是同一条抛物线，但它不再告诉我们点自左向右移动，也不告诉我们（若 $t$ 有限制时）实际描出的是抛物线的哪一段。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: after eliminating the parameter, forgetting to carry over domain restrictions. If $x = \\sqrt{t}$ then $x \\ge 0$ always, so even though $y$ might be defined for all real $x$ algebraically, the parametric curve lives only on the right half. Always check the range of $x(t)$ and $y(t)$.",
              "zh": "常见错误：消参后忘记带上定义域限制。若 $x = \\sqrt{t}$，则恒有 $x \\ge 0$，所以尽管 $y$ 在代数上对所有实数 $x$ 都有定义，参数曲线却只存在于右半部分。务必检查 $x(t)$ 与 $y(t)$ 的值域。"
            },
            {
              "type": "h2",
              "en": "Parametrizing Lines, Circles, and Ellipses",
              "zh": "直线、圆与椭圆的参数化"
            },
            {
              "type": "p",
              "en": "Going the other direction — writing parametric equations for a known curve — is just as useful. A line through $(x_0, y_0)$ with direction $(a, b)$ is $x = x_0 + at$, $y = y_0 + bt$. A circle and an ellipse centered at the origin use the trig identity $\\cos^2 t + \\sin^2 t = 1$:",
              "zh": "反过来——为已知曲线写出参数方程——同样有用。过点 $(x_0, y_0)$、方向为 $(a, b)$ 的直线是 $x = x_0 + at$、$y = y_0 + bt$。以原点为中心的圆与椭圆利用三角恒等式 $\\cos^2 t + \\sin^2 t = 1$："
            },
            {
              "type": "math",
              "tex": "\\text{circle } r:\\ x = r\\cos t,\\ y = r\\sin t \\qquad \\text{ellipse}:\\ x = a\\cos t,\\ y = b\\sin t"
            },
            {
              "type": "p",
              "en": "For the ellipse, squaring gives $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = \\cos^2 t + \\sin^2 t = 1$, recovering the standard equation. As $t$ runs $0$ to $2\\pi$ the point travels once around counterclockwise, starting at $(a, 0)$.",
              "zh": "对椭圆，平方后得 $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = \\cos^2 t + \\sin^2 t = 1$，还原出标准方程。当 $t$ 从 $0$ 走到 $2\\pi$ 时，点从 $(a, 0)$ 出发逆时针绕行一周。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Show that $x = 3\\cos t$, $y = 3\\sin t$ traces a circle, and find its radius and starting point at $t = 0$.",
                "zh": "证明 $x = 3\\cos t$、$y = 3\\sin t$ 描出一个圆，并求其半径与 $t = 0$ 时的起点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Square and add: $x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9(\\cos^2 t + \\sin^2 t) = 9$. This is a circle of radius $3$ centered at the origin.",
                  "zh": "平方相加：$x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9(\\cos^2 t + \\sin^2 t) = 9$。这是以原点为中心、半径为 $3$ 的圆。"
                },
                {
                  "type": "p",
                  "en": "At $t = 0$: $x = 3\\cos 0 = 3$, $y = 3\\sin 0 = 0$, so the motion starts at $(3, 0)$ and proceeds counterclockwise.",
                  "zh": "当 $t = 0$：$x = 3\\cos 0 = 3$，$y = 3\\sin 0 = 0$，故运动从 $(3, 0)$ 出发并逆时针进行。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Projectile Motion",
              "zh": "抛体运动"
            },
            {
              "type": "p",
              "en": "Parametric equations shine in physics. A projectile launched from height $h_0$ with speed $v_0$ at angle $\\theta$ has horizontal and vertical positions governed separately by time:",
              "zh": "参数方程在物理中大放异彩。一个从高度 $h_0$、以速度 $v_0$、与水平方向成角 $\\theta$ 发射的抛体，其水平与竖直位置分别随时间独立变化："
            },
            {
              "type": "math",
              "tex": "x = (v_0\\cos\\theta)\\,t, \\qquad y = h_0 + (v_0\\sin\\theta)\\,t - \\tfrac{1}{2}g t^2"
            },
            {
              "type": "p",
              "en": "Horizontal motion is uniform (no force), while vertical motion feels gravity $g$. Eliminating $t$ would give a downward parabola, but the parametric form is better: it tells you exactly where the object is at each second, which a rectangular equation cannot.",
              "zh": "水平方向做匀速运动（无水平力），竖直方向受重力 $g$ 作用。消去 $t$ 会得到一条开口向下的抛物线，但参数形式更优：它精确告诉你物体在每一秒所处的位置，这是直角坐标方程做不到的。"
            },
            {
              "type": "h2",
              "en": "Direction and Speed",
              "zh": "方向与速度"
            },
            {
              "type": "p",
              "en": "Because $t$ often means time, the rate at which $x$ and $y$ change tells you velocity. Between two close instants, the change in $x$ over the change in $t$ estimates horizontal speed, and likewise for $y$. Where the parameter values are packed close together the point moves slowly; where they spread out it moves fast.",
              "zh": "由于 $t$ 常表示时间，$x$ 与 $y$ 的变化速率给出速度。在两个相近时刻之间，$x$ 的变化量除以 $t$ 的变化量估计水平速度，$y$ 同理。参数值挤在一起处点移动缓慢，稀疏处则移动迅速。"
            },
            {
              "type": "note",
              "en": "Calculus preview: these rates are exactly derivatives. In calculus you will write velocity components as $\\dfrac{dx}{dt}$ and $\\dfrac{dy}{dt}$, and the slope of the path as $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$. Parametric equations are the natural setting for describing motion, and you will return to them throughout calculus.",
              "zh": "微积分预告：这些速率正是导数。在微积分中你会把速度分量写成 $\\dfrac{dx}{dt}$ 与 $\\dfrac{dy}{dt}$，把路径斜率写成 $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$。参数方程是描述运动的天然框架，你在整个微积分课程中都会不断用到它。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For $x = 2t$, $y = t - 1$, which point lies on the curve at $t = 3$?",
                "zh": "对 $x = 2t$、$y = t - 1$，$t = 3$ 时曲线上是哪个点？"
              },
              "choices": [
                "$(3, 3)$",
                "$(6, 2)$",
                "$(2, 3)$",
                "$(6, 3)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Substitute $t = 3$: $x = 2(3) = 6$ and $y = 3 - 1 = 2$, giving $(6, 2)$. A frequent slip is to read $t=3$ directly as an $x$-value.",
                "zh": "代入 $t = 3$：$x = 2(3) = 6$，$y = 3 - 1 = 2$，得 $(6, 2)$。常见失误是把 $t=3$ 直接当作 $x$ 值。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Eliminate the parameter from $x = t + 2$, $y = 3t$. What is the rectangular equation?",
                "zh": "从 $x = t + 2$、$y = 3t$ 消去参数，直角坐标方程是什么？"
              },
              "choices": [
                "$y = 3x$",
                "$y = 3x + 6$",
                "$y = 3x - 6$",
                "$y = \\dfrac{x-2}{3}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "From the first, $t = x - 2$. Substitute into $y = 3t$: $y = 3(x - 2) = 3x - 6$. Forgetting to distribute the 3 gives the tempting $3x + 6$ or $3x$.",
                "zh": "由第一式 $t = x - 2$。代入 $y = 3t$：$y = 3(x - 2) = 3x - 6$。忘记把 3 分配进去就会得到诱人的 $3x + 6$ 或 $3x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The curve $x = \\cos t$, $y = \\sin t$ is a circle. What is its radius? Give an integer.",
                "zh": "曲线 $x = \\cos t$、$y = \\sin t$ 是一个圆，其半径是多少？答案为整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "Squaring and adding: $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$, a circle of radius $\\sqrt{1} = 1$ centered at the origin.",
                "zh": "平方相加：$x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$，是以原点为中心、半径 $\\sqrt{1} = 1$ 的圆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which parametric equations describe the ellipse $\\dfrac{x^2}{25} + \\dfrac{y^2}{4} = 1$?",
                "zh": "哪组参数方程描述椭圆 $\\dfrac{x^2}{25} + \\dfrac{y^2}{4} = 1$？"
              },
              "choices": [
                "$x = 5\\sin t,\\ y = 2\\sin t$",
                "$x = 25\\cos t,\\ y = 4\\sin t$",
                "$x = 2\\cos t,\\ y = 5\\sin t$",
                "$x = 5\\cos t,\\ y = 2\\sin t$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Use $x = a\\cos t$, $y = b\\sin t$ with $a = \\sqrt{25} = 5$ and $b = \\sqrt{4} = 2$. Using $25$ and $4$ directly forgets to take the square root of the denominators.",
                "zh": "用 $x = a\\cos t$、$y = b\\sin t$，其中 $a = \\sqrt{25} = 5$，$b = \\sqrt{4} = 2$。直接用 $25$ 和 $4$ 是忘了对分母开平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A point moves by $x = t^2$, $y = t$. After eliminating the parameter, why is the curve only the right half of a sideways parabola $x = y^2$ near the vertex when $t \\ge 0$?",
                "zh": "一个点按 $x = t^2$、$y = t$ 移动。消参后，为什么当 $t \\ge 0$ 时曲线只是横向抛物线 $x = y^2$ 顶点附近的上半部分？"
              },
              "choices": [
                "Because $t \\ge 0$ forces $y = t \\ge 0$, restricting the curve",
                "Because $x = t^2$ is always negative",
                "Because the parabola opens downward",
                "Because $y$ can be any real number"
              ],
              "answer": 0,
              "explanation": {
                "en": "Eliminating gives $x = y^2$, but the restriction $t \\ge 0$ means $y = t \\ge 0$, so only the upper branch is traced. This is exactly the lost-domain issue: the rectangular equation alone would wrongly include $y < 0$.",
                "zh": "消参得 $x = y^2$，但限制 $t \\ge 0$ 意味着 $y = t \\ge 0$，故只描出上半支。这正是丢失定义域的问题：单看直角坐标方程会错误地把 $y < 0$ 也包含进来。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A projectile is launched from ground level ($h_0 = 0$) with $v_0\\cos\\theta = 20$ ft/s horizontally. Using $x = (v_0\\cos\\theta)t$, how far horizontally (in feet) has it traveled at $t = 3$ s? Give an integer.",
                "zh": "一抛体从地面（$h_0 = 0$）发射，水平分速度 $v_0\\cos\\theta = 20$ 英尺/秒。用 $x = (v_0\\cos\\theta)t$，在 $t = 3$ 秒时水平飞行了多少英尺？答案为整数。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "Horizontal motion is uniform: $x = 20 \\cdot 3 = 60$ ft. Gravity affects only $y$, not the horizontal distance, which is why the two coordinates are handled separately.",
                "zh": "水平方向匀速：$x = 20 \\cdot 3 = 60$ 英尺。重力只影响 $y$，不影响水平距离，这正是两个坐标分开处理的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball follows $y = 40 + 30t - 16t^2$ (height in feet). At $t = 0$, what is its height in feet? Give an integer.",
                "zh": "一个球按 $y = 40 + 30t - 16t^2$ 运动（高度以英尺计）。$t = 0$ 时高度为多少英尺？答案为整数。"
              },
              "answer": "40",
              "accept": [
                "40.0"
              ],
              "explanation": {
                "en": "Substitute $t = 0$: $y = 40 + 30(0) - 16(0)^2 = 40$ ft. This is the launch height $h_0$; the other terms vanish at $t = 0$.",
                "zh": "代入 $t = 0$：$y = 40 + 30(0) - 16(0)^2 = 40$ 英尺。这就是发射高度 $h_0$；其余项在 $t = 0$ 时都为零。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $x = t$, $y = t^2$, the horizontal rate $\\Delta x/\\Delta t$ is constant at 1, but the point speeds up as $t$ grows. Why?",
                "zh": "对 $x = t$、$y = t^2$，水平速率 $\\Delta x/\\Delta t$ 恒为 1，但点随 $t$ 增大而加速，为什么？"
              },
              "choices": [
                "The curve is a straight line",
                "The horizontal rate secretly increases",
                "The vertical rate $\\Delta y/\\Delta t$ grows with $t$, so total speed increases",
                "Speed is always constant in parametric motion"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $y = t^2$, the vertical change per unit time grows as $t$ increases (this rate is $2t$, a derivative you will meet in calculus). Even with constant horizontal rate, the combined speed rises. This previews velocity as $dy/dt$.",
                "zh": "因为 $y = t^2$，单位时间内的竖直变化随 $t$ 增大而增大（该速率为 $2t$，是你将在微积分中遇到的导数）。即便水平速率恒定，合速度也在上升。这预示了以 $dy/dt$ 表示速度的思想。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "sequences-series-combinatorics",
      "title": "Unit 10: Sequences, Series, and Combinatorics",
      "titleZh": "第十单元：数列、级数与组合数学",
      "lessons": [
        {
          "id": "sequences-series-induction",
          "title": "Sequences, Series, and Mathematical Induction",
          "titleZh": "数列、级数与数学归纳法",
          "content": [
            {
              "type": "h2",
              "en": "Sequences: Explicit and Recursive Rules",
              "zh": "数列：通项公式与递推公式"
            },
            {
              "type": "p",
              "en": "A sequence is an ordered list of numbers $a_1, a_2, a_3, \\dots$, which we can view as a function whose domain is the positive integers. There are two common ways to describe a sequence. An explicit formula gives $a_n$ directly in terms of $n$, so you can jump straight to any term. A recursive formula gives a starting value together with a rule that builds each term from earlier ones.",
              "zh": "数列是一列有序的数 $a_1, a_2, a_3, \\dots$，可以看作定义域为正整数的函数。描述数列常有两种方式：通项公式直接用 $n$ 表示 $a_n$，可一步求出任意一项；递推公式给出初始值以及由前面各项生成后一项的规则。"
            },
            {
              "type": "math",
              "tex": "a_n = 3n - 1 \\quad\\text{(explicit)} \\qquad a_1 = 2,\\ a_n = a_{n-1} + 3 \\quad\\text{(recursive)}"
            },
            {
              "type": "p",
              "en": "Factorial notation appears constantly with sequences and counting. We define $n! = n(n-1)(n-2)\\cdots 2 \\cdot 1$ for a positive integer $n$, with the special convention $0! = 1$. Factorials grow explosively: $5! = 120$ but $10! = 3{,}628{,}800$.",
              "zh": "阶乘记号在数列与计数中反复出现。对正整数 $n$，定义 $n! = n(n-1)(n-2)\\cdots 2 \\cdot 1$，并特别约定 $0! = 1$。阶乘增长极快：$5! = 120$，而 $10! = 3{,}628{,}800$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "A sequence is defined recursively by $a_1 = 5$ and $a_n = 2a_{n-1} - 1$. Find $a_4$.",
                "zh": "数列由 $a_1 = 5$ 与 $a_n = 2a_{n-1} - 1$ 递推定义，求 $a_4$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Build the terms one at a time. $a_2 = 2(5) - 1 = 9$, then $a_3 = 2(9) - 1 = 17$, then $a_4 = 2(17) - 1 = 33$.",
                  "zh": "逐项计算。$a_2 = 2(5) - 1 = 9$，$a_3 = 2(9) - 1 = 17$，$a_4 = 2(17) - 1 = 33$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Sigma Notation and Series",
              "zh": "求和符号与级数"
            },
            {
              "type": "p",
              "en": "A series is the sum of the terms of a sequence. We write such sums compactly using sigma notation, where $\\Sigma$ (capital Greek sigma) means \"add up.\" The letter below is the index, the number below is where it starts, and the number on top is where it stops.",
              "zh": "级数是数列各项之和。用求和符号可以简洁地表示这类和，$\\Sigma$（大写希腊字母西格玛）表示“求和”。符号下方的字母是求和变量，下方的数是起点，上方的数是终点。"
            },
            {
              "type": "math",
              "tex": "\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n"
            },
            {
              "type": "p",
              "en": "For example, $\\sum_{k=1}^{4} k^2 = 1 + 4 + 9 + 16 = 30$. Two useful properties let you break sums apart: a constant multiple factors out, $\\sum c\\,a_k = c\\sum a_k$, and a sum of terms splits, $\\sum (a_k + b_k) = \\sum a_k + \\sum b_k$.",
              "zh": "例如 $\\sum_{k=1}^{4} k^2 = 1 + 4 + 9 + 16 = 30$。两条性质便于拆分求和：常数因子可以提出，$\\sum c\\,a_k = c\\sum a_k$；两项之和可以分开，$\\sum (a_k + b_k) = \\sum a_k + \\sum b_k$。"
            },
            {
              "type": "note",
              "en": "Calculus preview: the very idea of adding up infinitely many pieces in sigma notation is exactly how you will define a definite integral — a limit of sums $\\sum f(x_k)\\,\\Delta x$. Getting fluent with $\\sum$ now pays off directly when you meet Riemann sums.",
              "zh": "微积分预览：用求和符号累加无穷多个小块，正是定积分的定义方式——和式的极限 $\\sum f(x_k)\\,\\Delta x$。现在熟练掌握 $\\sum$，学到黎曼和时会立刻受益。"
            },
            {
              "type": "h2",
              "en": "Arithmetic and Geometric Series",
              "zh": "等差级数与等比级数"
            },
            {
              "type": "p",
              "en": "In an arithmetic sequence each term adds a fixed common difference $d$, so $a_n = a_1 + (n-1)d$. The sum of the first $n$ terms is the number of terms times the average of the first and last term.",
              "zh": "等差数列中每一项都加上固定的公差 $d$，故 $a_n = a_1 + (n-1)d$。前 $n$ 项之和等于项数乘以首末两项的平均值。"
            },
            {
              "type": "math",
              "tex": "S_n = \\frac{n}{2}\\,(a_1 + a_n) = \\frac{n}{2}\\big(2a_1 + (n-1)d\\big)"
            },
            {
              "type": "p",
              "en": "In a geometric sequence each term multiplies by a fixed common ratio $r$, so $a_n = a_1 r^{\\,n-1}$. The sum of the first $n$ terms has a clean closed form (valid when $r \\ne 1$):",
              "zh": "等比数列中每一项都乘以固定的公比 $r$，故 $a_n = a_1 r^{\\,n-1}$。前 $n$ 项之和有简洁的封闭表达式（当 $r \\ne 1$ 时成立）："
            },
            {
              "type": "math",
              "tex": "S_n = a_1\\,\\frac{1 - r^{\\,n}}{1 - r}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Evaluate the geometric series $\\displaystyle\\sum_{k=1}^{6} 3\\left(\\tfrac{1}{2}\\right)^{k-1}$.",
                "zh": "求等比级数 $\\displaystyle\\sum_{k=1}^{6} 3\\left(\\tfrac{1}{2}\\right)^{k-1}$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $a_1 = 3$, $r = \\tfrac{1}{2}$, and $n = 6$. Apply the geometric sum formula.",
                  "zh": "此处 $a_1 = 3$，$r = \\tfrac{1}{2}$，$n = 6$，代入等比求和公式。"
                },
                {
                  "type": "math",
                  "tex": "S_6 = 3 \\cdot \\frac{1 - (1/2)^6}{1 - 1/2} = 3 \\cdot \\frac{1 - \\frac{1}{64}}{\\frac{1}{2}} = 6 \\cdot \\frac{63}{64} = \\frac{189}{32}"
                },
                {
                  "type": "p",
                  "en": "So the sum equals $\\dfrac{189}{32}$, a little under $6$.",
                  "zh": "因此该和等于 $\\dfrac{189}{32}$，略小于 $6$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Infinite Geometric Series",
              "zh": "无穷等比级数"
            },
            {
              "type": "p",
              "en": "What happens if a geometric series never stops? When $|r| < 1$, the powers $r^{\\,n}$ shrink toward $0$, so the partial sums settle on a finite limit — we say the series converges. When $|r| \\ge 1$ the terms do not shrink and the series diverges (no finite sum). For $|r| < 1$:",
              "zh": "如果等比级数无限延续会怎样？当 $|r| < 1$ 时，幂 $r^{\\,n}$ 趋于 $0$，部分和收敛到有限极限——称级数收敛。当 $|r| \\ge 1$ 时各项不缩小，级数发散（无有限和）。当 $|r| < 1$ 时："
            },
            {
              "type": "math",
              "tex": "S_\\infty = \\sum_{k=1}^{\\infty} a_1 r^{\\,k-1} = \\frac{a_1}{1 - r}, \\qquad |r| < 1"
            },
            {
              "type": "p",
              "en": "This formula also converts any repeating decimal into a fraction. A repeating decimal is secretly an infinite geometric series: for instance $0.\\overline{7} = 0.7 + 0.07 + 0.007 + \\cdots$ with $a_1 = 0.7$ and $r = 0.1$.",
              "zh": "这个公式还能把循环小数化为分数。循环小数本质上是无穷等比级数：例如 $0.\\overline{7} = 0.7 + 0.07 + 0.007 + \\cdots$，其中 $a_1 = 0.7$，$r = 0.1$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Write the repeating decimal $0.\\overline{45}$ as a fraction in lowest terms.",
                "zh": "把循环小数 $0.\\overline{45}$ 化为最简分数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Group in blocks of two digits: $0.\\overline{45} = 0.45 + 0.0045 + 0.000045 + \\cdots$. This is geometric with $a_1 = 0.45 = \\tfrac{45}{100}$ and $r = 0.01 = \\tfrac{1}{100}$.",
                  "zh": "按两位一组分组：$0.\\overline{45} = 0.45 + 0.0045 + 0.000045 + \\cdots$。这是等比级数，$a_1 = 0.45 = \\tfrac{45}{100}$，$r = 0.01 = \\tfrac{1}{100}$。"
                },
                {
                  "type": "math",
                  "tex": "S_\\infty = \\frac{45/100}{1 - 1/100} = \\frac{45/100}{99/100} = \\frac{45}{99} = \\frac{5}{11}"
                },
                {
                  "type": "p",
                  "en": "So $0.\\overline{45} = \\dfrac{5}{11}$.",
                  "zh": "因此 $0.\\overline{45} = \\dfrac{5}{11}$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Mathematical Induction",
              "zh": "数学归纳法"
            },
            {
              "type": "p",
              "en": "How do we prove a formula holds for every positive integer $n$, not just the ones we test? Mathematical induction is the tool. Think of an infinite row of dominoes: if you knock over the first one (base case), and each domino is close enough to topple the next (inductive step), then every domino falls. The principle has three parts:",
              "zh": "如何证明一个公式对每个正整数 $n$ 都成立，而不仅是我们验证过的那几个？数学归纳法就是工具。想象一排无穷的多米诺骨牌：若推倒第一张（基础步骤），且每张都足以推倒下一张（归纳步骤），则所有骨牌都会倒下。该原理有三部分："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Base case: verify the statement $P(1)$ is true for $n = 1$.",
                  "zh": "基础步骤：验证命题 $P(1)$ 在 $n = 1$ 时成立。"
                },
                {
                  "en": "Inductive hypothesis: assume $P(k)$ is true for an arbitrary positive integer $k$.",
                  "zh": "归纳假设：假设 $P(k)$ 对某个任意正整数 $k$ 成立。"
                },
                {
                  "en": "Inductive step: using that assumption, prove $P(k+1)$ must also be true.",
                  "zh": "归纳步骤：利用该假设，证明 $P(k+1)$ 也必然成立。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: the base case is not optional. A statement can survive the inductive step yet still be false everywhere if $P(1)$ fails — the dominoes never start falling. Always prove both the base case and the step, and clearly state where you use the inductive hypothesis.",
              "zh": "常见错误：基础步骤不可省略。若 $P(1)$ 不成立，即使归纳步骤通过，命题仍可能处处为假——骨牌从未开始倒下。务必同时证明基础步骤与归纳步骤，并清楚指出在何处使用了归纳假设。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4 (Induction Proof)",
                "zh": "例题 4（归纳法证明）"
              },
              "problem": {
                "en": "Prove by induction that $1 + 2 + 3 + \\cdots + n = \\dfrac{n(n+1)}{2}$ for every positive integer $n$.",
                "zh": "用归纳法证明：对每个正整数 $n$，都有 $1 + 2 + 3 + \\cdots + n = \\dfrac{n(n+1)}{2}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Base case ($n = 1$): the left side is $1$, and the right side is $\\dfrac{1(2)}{2} = 1$. They match, so $P(1)$ holds.",
                  "zh": "基础步骤（$n = 1$）：左边为 $1$，右边为 $\\dfrac{1(2)}{2} = 1$，两边相等，故 $P(1)$ 成立。"
                },
                {
                  "type": "p",
                  "en": "Inductive hypothesis: assume for some positive integer $k$ that $1 + 2 + \\cdots + k = \\dfrac{k(k+1)}{2}$.",
                  "zh": "归纳假设：设对某个正整数 $k$ 有 $1 + 2 + \\cdots + k = \\dfrac{k(k+1)}{2}$。"
                },
                {
                  "type": "p",
                  "en": "Inductive step: add the next term $(k+1)$ to both sides and simplify the right-hand side.",
                  "zh": "归纳步骤：在两边加上下一项 $(k+1)$，并化简右边。"
                },
                {
                  "type": "math",
                  "tex": "1 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1) = (k+1)\\!\\left(\\frac{k}{2} + 1\\right) = \\frac{(k+1)(k+2)}{2}"
                },
                {
                  "type": "p",
                  "en": "The result is exactly the formula with $k+1$ in place of $n$, so $P(k+1)$ holds. By the principle of mathematical induction, the formula is true for all positive integers $n$.",
                  "zh": "这恰好是把 $n$ 换成 $k+1$ 的公式，故 $P(k+1)$ 成立。由数学归纳法原理，该公式对所有正整数 $n$ 成立。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "The sequence is defined by $a_1 = 4$ and $a_n = a_{n-1} + 3$. Find $a_5$. Give an integer.",
                "zh": "数列由 $a_1 = 4$ 与 $a_n = a_{n-1} + 3$ 定义，求 $a_5$，答案为整数。"
              },
              "answer": "16",
              "accept": [
                "16.0"
              ],
              "explanation": {
                "en": "This is arithmetic with $a_1 = 4$, $d = 3$, so $a_5 = 4 + (5-1)(3) = 4 + 12 = 16$. Counting terms carefully matters: $a_5$ uses four steps of $+3$, not five.",
                "zh": "这是等差数列，$a_1 = 4$，$d = 3$，故 $a_5 = 4 + (5-1)(3) = 4 + 12 = 16$。数项要仔细：$a_5$ 走了四步 $+3$，不是五步。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the value of $\\displaystyle\\sum_{k=1}^{4} (2k + 1)$?",
                "zh": "$\\displaystyle\\sum_{k=1}^{4} (2k + 1)$ 的值是多少？"
              },
              "choices": [
                "$20$",
                "$24$",
                "$16$",
                "$25$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Expand: $(2\\cdot1+1) + (2\\cdot2+1) + (2\\cdot3+1) + (2\\cdot4+1) = 3 + 5 + 7 + 9 = 24$. A tempting error is to forget the $+1$ on each term, which would give $20$.",
                "zh": "展开：$(2\\cdot1+1) + (2\\cdot2+1) + (2\\cdot3+1) + (2\\cdot4+1) = 3 + 5 + 7 + 9 = 24$。常见错误是漏掉每项的 $+1$，那样会得到 $20$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which value of the common ratio $r$ guarantees that an infinite geometric series converges?",
                "zh": "公比 $r$ 取哪个值能保证无穷等比级数收敛？"
              },
              "choices": [
                "$r = -\\tfrac{3}{2}$",
                "$r = 1$",
                "$r = \\tfrac{2}{3}$",
                "$r = 2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "An infinite geometric series converges exactly when $|r| < 1$. Only $r = \\tfrac{2}{3}$ satisfies this. The value $r = 1$ fails because the terms never shrink, and $|-\\tfrac{3}{2}| = \\tfrac{3}{2} > 1$ diverges.",
                "zh": "无穷等比级数收敛当且仅当 $|r| < 1$。只有 $r = \\tfrac{2}{3}$ 满足。$r = 1$ 时各项不缩小，$|-\\tfrac{3}{2}| = \\tfrac{3}{2} > 1$ 都发散。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the sum of the infinite geometric series $8 + 4 + 2 + 1 + \\cdots$. Give an integer.",
                "zh": "求无穷等比级数 $8 + 4 + 2 + 1 + \\cdots$ 的和，答案为整数。"
              },
              "answer": "16",
              "accept": [
                "16.0"
              ],
              "explanation": {
                "en": "Here $a_1 = 8$ and $r = \\tfrac{1}{2}$, so $S_\\infty = \\dfrac{8}{1 - 1/2} = \\dfrac{8}{1/2} = 16$. A common slip is to divide by $r$ instead of $1 - r$.",
                "zh": "此处 $a_1 = 8$，$r = \\tfrac{1}{2}$，故 $S_\\infty = \\dfrac{8}{1 - 1/2} = \\dfrac{8}{1/2} = 16$。常见失误是除以 $r$ 而不是 $1 - r$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The repeating decimal $0.\\overline{3}$ equals which fraction?",
                "zh": "循环小数 $0.\\overline{3}$ 等于下列哪个分数？"
              },
              "choices": [
                "$\\dfrac{3}{100}$",
                "$\\dfrac{3}{10}$",
                "$\\dfrac{1}{30}$",
                "$\\dfrac{1}{3}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "As a geometric series, $0.\\overline{3} = 0.3 + 0.03 + \\cdots$ with $a_1 = 0.3$ and $r = 0.1$, so $S_\\infty = \\dfrac{0.3}{1 - 0.1} = \\dfrac{0.3}{0.9} = \\dfrac{1}{3}$. The distractor $\\tfrac{3}{10}$ is just the first term, not the full sum.",
                "zh": "作为等比级数，$0.\\overline{3} = 0.3 + 0.03 + \\cdots$，$a_1 = 0.3$，$r = 0.1$，故 $S_\\infty = \\dfrac{0.3}{1 - 0.1} = \\dfrac{0.3}{0.9} = \\dfrac{1}{3}$。干扰项 $\\tfrac{3}{10}$ 只是首项，不是整个和。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a proof by induction, after verifying the base case, what is the correct inductive step?",
                "zh": "在归纳法证明中，验证基础步骤之后，正确的归纳步骤是什么？"
              },
              "choices": [
                "Assume the statement is true for $n = k$, then prove it is true for $n = k + 1$",
                "Assume the statement is true for all $n$, then check $n = 1$",
                "Prove the statement is true for $n = 2$ and $n = 3$ by direct calculation",
                "Show the statement fails for some $n = k$ to reach a contradiction"
              ],
              "answer": 0,
              "explanation": {
                "en": "Induction assumes $P(k)$ (the inductive hypothesis) and uses it to deduce $P(k+1)$. Choice 2 is circular (assuming what you want), choice 3 only checks finitely many cases, and choice 4 describes proof by contradiction, a different method.",
                "zh": "归纳法假设 $P(k)$（归纳假设）并据此推出 $P(k+1)$。选项二是循环论证（假设了要证的结论），选项三只验证有限个情形，选项四描述的是反证法，属于不同方法。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball is dropped from $12$ meters and each bounce rises to $\\tfrac{1}{3}$ of the previous height. Find the total vertical distance (up and down) the ball travels before coming to rest, in meters. Give an integer.",
                "zh": "一个球从 $12$ 米高处落下，每次弹起到上一次高度的 $\\tfrac{1}{3}$。求球最终静止前经过的总竖直距离（上下往返），单位米，答案为整数。"
              },
              "answer": "24",
              "accept": [
                "24.0"
              ],
              "explanation": {
                "en": "The first drop is $12$. After that the ball goes up and down through each bounce height, forming $2\\times$ an infinite geometric series with first term $4$ and $r = \\tfrac{1}{3}$: distance $= 12 + 2\\cdot\\dfrac{4}{1 - 1/3} = 12 + 2\\cdot 6 = 24$ m. Forgetting to double the bounces (up and down) is the classic error.",
                "zh": "第一次下落为 $12$。之后每次弹起都上下往返，形成 $2\\times$ 首项为 $4$、$r = \\tfrac{1}{3}$ 的无穷等比级数：总距离 $= 12 + 2\\cdot\\dfrac{4}{1 - 1/3} = 12 + 2\\cdot 6 = 24$ 米。忘记把弹跳距离乘 2（上和下）是典型错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An arithmetic sequence has $a_1 = 7$ and $a_{20} = 64$. What is the sum of the first $20$ terms?",
                "zh": "等差数列满足 $a_1 = 7$ 且 $a_{20} = 64$，求前 $20$ 项之和。"
              },
              "choices": [
                "$1420$",
                "$640$",
                "$710$",
                "$355$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Use $S_n = \\dfrac{n}{2}(a_1 + a_n) = \\dfrac{20}{2}(7 + 64) = 10 \\cdot 71 = 710$. The distractor $1420$ comes from forgetting the factor of $\\tfrac{1}{2}$, and $355$ from halving one time too many.",
                "zh": "用 $S_n = \\dfrac{n}{2}(a_1 + a_n) = \\dfrac{20}{2}(7 + 64) = 10 \\cdot 71 = 710$。干扰项 $1420$ 来自漏掉 $\\tfrac{1}{2}$，$355$ 来自多除一次 2。"
              }
            }
          ]
        },
        {
          "id": "binomial-theorem-combinatorics",
          "title": "Counting, the Binomial Theorem, and Probability",
          "titleZh": "计数原理、二项式定理与概率",
          "content": [
            {
              "type": "h2",
              "en": "The Fundamental Counting Principle",
              "zh": "基本计数原理"
            },
            {
              "type": "p",
              "en": "Before we can compute a probability we usually have to count the possibilities. The fundamental counting principle says that if one choice can be made in $m$ ways and a second, independent choice in $n$ ways, then the two choices together can be made in $m \\cdot n$ ways. The rule extends to any number of stages — just multiply the options at each stage.",
              "zh": "在计算概率之前，通常要先数清可能情形。基本计数原理指出：若一步有 $m$ 种做法，相互独立的另一步有 $n$ 种做法，则两步合起来共有 $m \\cdot n$ 种做法。该规则可推广到任意多个阶段——把每个阶段的选项数相乘即可。"
            },
            {
              "type": "p",
              "en": "For example, a lunch special with $4$ sandwiches, $3$ sides, and $2$ drinks offers $4 \\cdot 3 \\cdot 2 = 24$ different meals.",
              "zh": "例如一份午餐套餐有 $4$ 种三明治、$3$ 种配菜、$2$ 种饮料，共有 $4 \\cdot 3 \\cdot 2 = 24$ 种不同搭配。"
            },
            {
              "type": "h2",
              "en": "Permutations and Combinations",
              "zh": "排列与组合"
            },
            {
              "type": "p",
              "en": "When we select and arrange items, two questions decide the formula: does order matter, and are repeats allowed? A permutation counts arrangements where order matters; a combination counts selections where order does not.",
              "zh": "当我们选取并排列元素时，两个问题决定使用哪个公式：顺序是否重要，以及是否允许重复？排列计数顺序重要的安排；组合计数顺序无关的选取。"
            },
            {
              "type": "math",
              "tex": "{}_nP_r = \\frac{n!}{(n-r)!} \\qquad\\qquad {}_nC_r = \\binom{n}{r} = \\frac{n!}{r!\\,(n-r)!}"
            },
            {
              "type": "p",
              "en": "The two are linked: a combination is a permutation divided by $r!$, because each unordered group of $r$ items can be arranged in $r!$ ordered ways. So $_nC_r$ is always $\\le {}_nP_r$.",
              "zh": "二者相关联：组合是排列除以 $r!$，因为每组 $r$ 个无序元素可排成 $r!$ 种有序方式。故 $_nC_r$ 总是 $\\le {}_nP_r$。"
            },
            {
              "type": "note",
              "en": "Common mistake: choosing permutations when order is irrelevant. \"How many ways to pick a president and a vice-president\" is a permutation (the roles differ), but \"how many ways to pick a committee of two\" is a combination (the two members are interchangeable). Ask \"would swapping the two chosen items give a genuinely different outcome?\"",
              "zh": "常见错误：在顺序无关时误用排列。“选一名主席和一名副主席有多少种方式”是排列（职务不同），而“选两人组成委员会有多少种方式”是组合（两名成员可互换）。要问：“交换所选两项会得到真正不同的结果吗？”"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "A club of $10$ students must choose a president, a treasurer, and a $3$-person social committee (the roles and the committee members are all distinct people). First, how many ways are there to choose just the $3$-person social committee?",
                "zh": "一个 $10$ 名学生的社团要选出主席、财务和一个 $3$ 人的活动委员会（职务与委员会成员都是不同的人）。首先，仅选出 $3$ 人活动委员会有多少种方式？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A committee has no internal ranking, so order does not matter — this is a combination.",
                  "zh": "委员会内部没有排名，顺序无关——这是组合。"
                },
                {
                  "type": "math",
                  "tex": "{}_{10}C_3 = \\frac{10!}{3!\\,7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = \\frac{720}{6} = 120"
                },
                {
                  "type": "p",
                  "en": "There are $120$ possible committees.",
                  "zh": "共有 $120$ 个可能的委员会。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Binomial Theorem and Pascal's Triangle",
              "zh": "二项式定理与帕斯卡三角"
            },
            {
              "type": "p",
              "en": "Expanding $(a+b)^n$ by hand is tedious, but the coefficients follow a beautiful pattern. Pascal's triangle starts and ends each row with $1$, and every interior entry is the sum of the two numbers above it. Row $n$ gives the coefficients of $(a+b)^n$, and those entries are exactly the combinations $_nC_r$.",
              "zh": "手动展开 $(a+b)^n$ 很繁琐，但系数遵循优美的规律。帕斯卡三角每一行以 $1$ 开始和结束，内部每个数是它上方两数之和。第 $n$ 行给出 $(a+b)^n$ 的系数，而这些数恰是组合数 $_nC_r$。"
            },
            {
              "type": "math",
              "tex": "\\begin{array}{c} 1 \\\\ 1 \\quad 1 \\\\ 1 \\quad 2 \\quad 1 \\\\ 1 \\quad 3 \\quad 3 \\quad 1 \\\\ 1 \\quad 4 \\quad 6 \\quad 4 \\quad 1 \\end{array}"
            },
            {
              "type": "p",
              "en": "The binomial theorem states this compactly. Notice how the power of $a$ decreases from $n$ to $0$ while the power of $b$ increases from $0$ to $n$, and the two exponents always sum to $n$.",
              "zh": "二项式定理将其简洁地表述如下。注意 $a$ 的幂从 $n$ 递减到 $0$，$b$ 的幂从 $0$ 递增到 $n$，两个指数之和恒为 $n$。"
            },
            {
              "type": "math",
              "tex": "(a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{\\,n-r} b^{\\,r}"
            },
            {
              "type": "p",
              "en": "To grab one specific term without expanding everything, use the general term. The term containing $b^r$ is $\\binom{n}{r} a^{\\,n-r} b^{\\,r}$.",
              "zh": "若只想取出某一特定项而不必全部展开，可用通项公式。含 $b^r$ 的项是 $\\binom{n}{r} a^{\\,n-r} b^{\\,r}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Find the coefficient of $x^3$ in the expansion of $(2x + 1)^5$.",
                "zh": "求 $(2x + 1)^5$ 展开式中 $x^3$ 的系数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Match the general term $\\binom{5}{r}(2x)^{5-r}(1)^r$ to the power $x^3$. We need the power of $x$ to be $3$, so $5 - r = 3$, giving $r = 2$.",
                  "zh": "将通项 $\\binom{5}{r}(2x)^{5-r}(1)^r$ 与 $x^3$ 匹配。需要 $x$ 的幂为 $3$，即 $5 - r = 3$，得 $r = 2$。"
                },
                {
                  "type": "math",
                  "tex": "\\binom{5}{2}(2x)^{3}(1)^{2} = 10 \\cdot 8x^3 \\cdot 1 = 80x^3"
                },
                {
                  "type": "p",
                  "en": "The coefficient is $80$. Do not forget to raise the $2$ inside $(2x)^3$ to the third power — a very common oversight.",
                  "zh": "系数为 $80$。别忘了把 $(2x)^3$ 中的 $2$ 也立方——这是极常见的疏漏。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Calculus preview: the binomial theorem is the engine behind the power rule for derivatives. When you compute $\\dfrac{(x+h)^n - x^n}{h}$ and let $h \\to 0$, the binomial expansion is exactly what shows you the leading term is $nx^{\\,n-1}$. You are building the tool now.",
              "zh": "微积分预览：二项式定理是导数幂法则背后的引擎。当你计算 $\\dfrac{(x+h)^n - x^n}{h}$ 并令 $h \\to 0$ 时，正是二项式展开告诉你主项为 $nx^{\\,n-1}$。你现在正在打造这个工具。"
            },
            {
              "type": "h2",
              "en": "Basic Probability",
              "zh": "基础概率"
            },
            {
              "type": "p",
              "en": "When every outcome in a sample space is equally likely, the probability of an event $E$ is the fraction of outcomes that make it happen:",
              "zh": "当样本空间中每个结果等可能时，事件 $E$ 的概率是使其发生的结果所占的比例："
            },
            {
              "type": "math",
              "tex": "P(E) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}"
            },
            {
              "type": "p",
              "en": "Two rules do most of the work. The complement rule says $P(\\text{not } E) = 1 - P(E)$, which is handy when \"at least one\" is easier to count by its opposite. For independent events (one does not affect the other), the probability that both occur is the product $P(A \\text{ and } B) = P(A)\\cdot P(B)$.",
              "zh": "两条规则承担了大部分工作。补事件规则指出 $P(\\text{非 } E) = 1 - P(E)$，当“至少一个”用其反面更易计数时很有用。对于独立事件（互不影响），两者都发生的概率是乘积 $P(A \\text{ 且 } B) = P(A)\\cdot P(B)$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A fair coin is flipped $3$ times. What is the probability of getting at least one head?",
                "zh": "一枚均匀硬币抛掷 $3$ 次，求至少出现一次正面的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Counting \"at least one head\" directly means several cases, so use the complement. The opposite of \"at least one head\" is \"no heads,\" i.e. all three tails.",
                  "zh": "直接计数“至少一次正面”要分好几种情形，故用补事件。“至少一次正面”的反面是“没有正面”，即三次都是反面。"
                },
                {
                  "type": "p",
                  "en": "Each flip is independent with $P(\\text{tail}) = \\tfrac{1}{2}$, so $P(\\text{all tails}) = \\left(\\tfrac{1}{2}\\right)^3 = \\tfrac{1}{8}$.",
                  "zh": "每次抛掷独立且 $P(\\text{反面}) = \\tfrac{1}{2}$，故 $P(\\text{全反}) = \\left(\\tfrac{1}{2}\\right)^3 = \\tfrac{1}{8}$。"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{at least one head}) = 1 - \\frac{1}{8} = \\frac{7}{8}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "A password is formed by choosing $1$ of $5$ colors, then $1$ of $4$ shapes, then $1$ of $3$ numbers. How many different passwords are possible? Give an integer.",
                "zh": "一个密码由 $5$ 种颜色中选 $1$ 种、$4$ 种形状中选 $1$ 种、$3$ 个数字中选 $1$ 个组成。共有多少种不同密码？答案为整数。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "By the fundamental counting principle, multiply the choices at each stage: $5 \\cdot 4 \\cdot 3 = 60$. Adding instead of multiplying (getting $12$) is the usual mistake.",
                "zh": "由基本计数原理，把各阶段的选项数相乘：$5 \\cdot 4 \\cdot 3 = 60$。用加法而非乘法（得到 $12$）是常见错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In how many ways can a president and a vice-president be chosen from $8$ people?",
                "zh": "从 $8$ 人中选出一名主席和一名副主席，有多少种方式？"
              },
              "choices": [
                "$28$",
                "$56$",
                "$64$",
                "$40320$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The roles are distinct, so order matters — a permutation: ${}_8P_2 = \\dfrac{8!}{6!} = 8 \\cdot 7 = 56$. The distractor $28$ is $_8C_2$, which wrongly treats the two roles as interchangeable.",
                "zh": "两个职务不同，顺序重要——排列：${}_8P_2 = \\dfrac{8!}{6!} = 8 \\cdot 7 = 56$。干扰项 $28$ 是 $_8C_2$，错误地把两个职务当作可互换。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate ${}_7C_2$ (the number of ways to choose $2$ items from $7$). Give an integer.",
                "zh": "计算 ${}_7C_2$（从 $7$ 个中选 $2$ 个的方式数），答案为整数。"
              },
              "answer": "21",
              "accept": [
                "21.0"
              ],
              "explanation": {
                "en": "${}_7C_2 = \\dfrac{7!}{2!\\,5!} = \\dfrac{7 \\cdot 6}{2 \\cdot 1} = 21$. Forgetting to divide by $2!$ gives $42$, the corresponding permutation count.",
                "zh": "${}_7C_2 = \\dfrac{7!}{2!\\,5!} = \\dfrac{7 \\cdot 6}{2 \\cdot 1} = 21$。忘记除以 $2!$ 会得到 $42$，那是对应的排列数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the coefficient of the $x^2$ term in the expansion of $(x + 3)^4$?",
                "zh": "$(x + 3)^4$ 展开式中 $x^2$ 项的系数是多少？"
              },
              "choices": [
                "$18$",
                "$6$",
                "$54$",
                "$9$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The general term is $\\binom{4}{r}x^{4-r}3^r$. For $x^2$ we need $4 - r = 2$, so $r = 2$: $\\binom{4}{2}x^2 3^2 = 6 \\cdot 9 \\cdot x^2 = 54x^2$. The distractor $6$ forgets to raise $3$ to the second power.",
                "zh": "通项为 $\\binom{4}{r}x^{4-r}3^r$。要得 $x^2$ 需 $4 - r = 2$，即 $r = 2$：$\\binom{4}{2}x^2 3^2 = 6 \\cdot 9 \\cdot x^2 = 54x^2$。干扰项 $6$ 忘记把 $3$ 平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A single card is drawn from a standard $52$-card deck. What is the probability it is NOT a heart?",
                "zh": "从一副标准 $52$ 张牌中抽出一张，抽到的不是红桃的概率是多少？"
              },
              "choices": [
                "$\\dfrac{13}{52}$",
                "$\\dfrac{1}{4}$",
                "$\\dfrac{1}{2}$",
                "$\\dfrac{3}{4}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "There are $13$ hearts, so $P(\\text{heart}) = \\tfrac{13}{52} = \\tfrac{1}{4}$. By the complement rule, $P(\\text{not heart}) = 1 - \\tfrac{1}{4} = \\tfrac{3}{4}$. The distractor $\\tfrac{1}{4}$ is the probability of the event itself, not its complement.",
                "zh": "有 $13$ 张红桃，故 $P(\\text{红桃}) = \\tfrac{13}{52} = \\tfrac{1}{4}$。由补事件规则，$P(\\text{非红桃}) = 1 - \\tfrac{1}{4} = \\tfrac{3}{4}$。干扰项 $\\tfrac{1}{4}$ 是事件本身的概率，而非其补事件。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A fair six-sided die is rolled twice. What is the probability of rolling a $6$ both times?",
                "zh": "一个均匀的六面骰子掷两次，两次都掷出 $6$ 的概率是多少？"
              },
              "choices": [
                "$\\dfrac{1}{36}$",
                "$\\dfrac{1}{6}$",
                "$\\dfrac{1}{12}$",
                "$\\dfrac{2}{6}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The rolls are independent, so multiply: $P(6 \\text{ and } 6) = \\tfrac{1}{6} \\cdot \\tfrac{1}{6} = \\tfrac{1}{36}$. Adding the probabilities to get $\\tfrac{2}{6}$ is the classic independence error.",
                "zh": "两次投掷独立，故相乘：$P(6 \\text{ 且 } 6) = \\tfrac{1}{6} \\cdot \\tfrac{1}{6} = \\tfrac{1}{36}$。把概率相加得 $\\tfrac{2}{6}$ 是典型的独立性错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A pizza shop offers $8$ toppings. A \"supreme\" pizza uses exactly $3$ different toppings, and the order does not matter. How many different supreme pizzas are possible? Give an integer.",
                "zh": "一家披萨店提供 $8$ 种配料。“至尊”披萨恰用 $3$ 种不同配料，顺序无关。共有多少种不同的至尊披萨？答案为整数。"
              },
              "answer": "56",
              "accept": [
                "56.0"
              ],
              "explanation": {
                "en": "Toppings on a pizza are unordered, so use combinations: ${}_8C_3 = \\dfrac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = 56$. Using ${}_8P_3 = 336$ would wrongly count the same three toppings in different orders as different pizzas.",
                "zh": "披萨上的配料无序，用组合：${}_8C_3 = \\dfrac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = 56$。若用 ${}_8P_3 = 336$，会错误地把相同三种配料的不同排列算作不同披萨。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The sum of all the numbers in row $n$ of Pascal's triangle (where the top row is $n = 0$) equals which expression?",
                "zh": "帕斯卡三角第 $n$ 行（顶行为 $n = 0$）所有数之和等于下列哪个表达式？"
              },
              "choices": [
                "$2n$",
                "$n^2$",
                "$2^n$",
                "$n!$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Setting $a = b = 1$ in the binomial theorem gives $(1+1)^n = \\sum_r \\binom{n}{r} = 2^n$, and the row entries are exactly those combinations. For example, row $4$ is $1{+}4{+}6{+}4{+}1 = 16 = 2^4$. The distractor $n^2$ matches only small rows by coincidence.",
                "zh": "在二项式定理中令 $a = b = 1$ 得 $(1+1)^n = \\sum_r \\binom{n}{r} = 2^n$，而该行各数恰是这些组合数。例如第 $4$ 行 $1{+}4{+}6{+}4{+}1 = 16 = 2^4$。干扰项 $n^2$ 只在小行数时偶然吻合。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "intro-to-limits",
      "title": "Unit 11: Introduction to Limits",
      "titleZh": "第十一单元：极限入门",
      "lessons": [
        {
          "id": "introduction-to-limits",
          "title": "A Preview of Calculus: Limits and Continuity",
          "titleZh": "微积分预览：极限与连续",
          "content": [
            {
              "type": "h2",
              "en": "The Idea of a Limit",
              "zh": "极限的思想"
            },
            {
              "type": "p",
              "en": "A limit answers a subtle question: what value does $f(x)$ head toward as $x$ gets arbitrarily close to some number $c$ — even if the function is never actually equal to that value, or is not defined at $c$ at all? We write $\\lim_{x \\to c} f(x) = L$ to mean \"as $x$ approaches $c$, the outputs approach $L$.\" The key word is approaches; the limit is about the trend near $c$, not the value at $c$.",
              "zh": "极限回答一个微妙的问题：当 $x$ 任意接近某个数 $c$ 时，$f(x)$ 趋向什么值——即便函数从未真正取到该值，或在 $c$ 处根本无定义？我们记 $\\lim_{x \\to c} f(x) = L$，表示“当 $x$ 趋近 $c$ 时，输出趋近 $L$”。关键词是趋近；极限关注的是 $c$ 附近的趋势，而非 $c$ 处的取值。"
            },
            {
              "type": "p",
              "en": "A table makes this concrete. Consider $f(x) = \\dfrac{x^2 - 1}{x - 1}$, which is undefined at $x = 1$ because the denominator is zero. Yet look at nearby inputs: at $x = 0.9$, $f = 1.9$; at $x = 0.99$, $f = 1.99$; at $x = 1.01$, $f = 2.01$; at $x = 1.1$, $f = 2.1$. From both sides the values close in on $2$, so $\\lim_{x \\to 1} f(x) = 2$, even though $f(1)$ does not exist.",
              "zh": "用一张表可将其具体化。考虑 $f(x) = \\dfrac{x^2 - 1}{x - 1}$，它在 $x = 1$ 处无定义（分母为零）。但看附近的输入：$x = 0.9$ 时 $f = 1.9$；$x = 0.99$ 时 $f = 1.99$；$x = 1.01$ 时 $f = 2.01$；$x = 1.1$ 时 $f = 2.1$。两侧的值都逼近 $2$，故 $\\lim_{x \\to 1} f(x) = 2$，尽管 $f(1)$ 不存在。"
            },
            {
              "type": "p",
              "en": "Graphically, the curve $y = \\dfrac{x^2 - 1}{x - 1}$ is the straight line $y = x + 1$ with a single hole punched out at the point $(1, 2)$. Tracing the line from either side, your pencil aims straight at the hole's height of $2$ — that height is the limit.",
              "zh": "从图象看，曲线 $y = \\dfrac{x^2 - 1}{x - 1}$ 就是直线 $y = x + 1$ 在点 $(1, 2)$ 处挖去一个孔。从两侧沿直线描绘，铅笔都指向该孔的高度 $2$——这个高度就是极限。"
            },
            {
              "type": "h2",
              "en": "One-Sided Limits and When a Limit Fails to Exist",
              "zh": "单侧极限与极限不存在的情形"
            },
            {
              "type": "p",
              "en": "Sometimes the function behaves differently depending on which direction you approach from. The right-hand limit $\\lim_{x \\to c^+} f(x)$ uses only inputs greater than $c$; the left-hand limit $\\lim_{x \\to c^-} f(x)$ uses only inputs less than $c$. The two-sided limit exists only when both one-sided limits exist and agree:",
              "zh": "有时函数的表现取决于你从哪个方向逼近。右极限 $\\lim_{x \\to c^+} f(x)$ 只用大于 $c$ 的输入；左极限 $\\lim_{x \\to c^-} f(x)$ 只用小于 $c$ 的输入。双侧极限存在当且仅当两个单侧极限都存在且相等："
            },
            {
              "type": "math",
              "tex": "\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = L \\ \\text{ and } \\ \\lim_{x \\to c^+} f(x) = L"
            },
            {
              "type": "p",
              "en": "A limit fails to exist in three typical ways: (1) the two sides approach different values, as with a jump in a piecewise function; (2) the function grows without bound, heading to $+\\infty$ or $-\\infty$, as near a vertical asymptote; or (3) the function oscillates forever without settling, like $\\sin\\!\\big(\\tfrac{1}{x}\\big)$ near $0$.",
              "zh": "极限在三种典型情形下不存在：(1) 两侧趋于不同的值，如分段函数在跳跃点处；(2) 函数无界增长，趋于 $+\\infty$ 或 $-\\infty$，如在竖直渐近线附近；(3) 函数永远振荡而不稳定，如 $\\sin\\!\\big(\\tfrac{1}{x}\\big)$ 在 $0$ 附近。"
            },
            {
              "type": "note",
              "en": "Common mistake: assuming $\\lim_{x\\to c} f(x)$ must equal $f(c)$. The limit ignores the single point $x = c$ entirely. A function can have a limit of $5$ at $x = 2$ while $f(2) = 9$ or while $f(2)$ is undefined. Always ask what the outputs do near $c$, not at $c$.",
              "zh": "常见错误：认为 $\\lim_{x\\to c} f(x)$ 必等于 $f(c)$。极限完全忽略 $x = c$ 这一个点。函数在 $x = 2$ 处极限可以为 $5$，而 $f(2) = 9$ 或 $f(2)$ 无定义。始终要问 $c$ 附近而非 $c$ 处的输出如何变化。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Let $f(x) = \\begin{cases} x + 1 & x < 2 \\\\ 5 - x & x \\ge 2 \\end{cases}$. Find $\\lim_{x \\to 2^-} f(x)$, $\\lim_{x \\to 2^+} f(x)$, and state whether $\\lim_{x \\to 2} f(x)$ exists.",
                "zh": "设 $f(x) = \\begin{cases} x + 1 & x < 2 \\\\ 5 - x & x \\ge 2 \\end{cases}$，求 $\\lim_{x \\to 2^-} f(x)$、$\\lim_{x \\to 2^+} f(x)$，并说明 $\\lim_{x \\to 2} f(x)$ 是否存在。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "From the left ($x < 2$) use $x + 1$: $\\lim_{x \\to 2^-} f(x) = 2 + 1 = 3$.",
                  "zh": "从左侧（$x < 2$）用 $x + 1$：$\\lim_{x \\to 2^-} f(x) = 2 + 1 = 3$。"
                },
                {
                  "type": "p",
                  "en": "From the right ($x \\ge 2$) use $5 - x$: $\\lim_{x \\to 2^+} f(x) = 5 - 2 = 3$.",
                  "zh": "从右侧（$x \\ge 2$）用 $5 - x$：$\\lim_{x \\to 2^+} f(x) = 5 - 2 = 3$。"
                },
                {
                  "type": "p",
                  "en": "Both one-sided limits equal $3$, so $\\lim_{x \\to 2} f(x) = 3$ exists. (The graph has no jump here — the two pieces meet at $(2, 3)$.)",
                  "zh": "两个单侧极限都等于 $3$，故 $\\lim_{x \\to 2} f(x) = 3$ 存在。（此处图象没有跳跃——两段在 $(2, 3)$ 处相接。）"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Evaluating Limits Algebraically",
              "zh": "用代数方法求极限"
            },
            {
              "type": "p",
              "en": "Tables and graphs build intuition, but for exact answers we use algebra. The first tool is direct substitution: if $f$ is built from polynomials, roots, and other \"nice\" pieces and is defined at $c$, then simply $\\lim_{x \\to c} f(x) = f(c)$. Try substitution first, always.",
              "zh": "表格与图象培养直觉，但要得到精确答案则用代数。第一件工具是直接代入：若 $f$ 由多项式、根式等“良好”部分构成且在 $c$ 处有定义，则直接 $\\lim_{x \\to c} f(x) = f(c)$。永远先尝试代入。"
            },
            {
              "type": "p",
              "en": "When substitution gives the indeterminate form $\\tfrac{0}{0}$, the limit may still exist — the $\\tfrac{0}{0}$ is a signal to simplify, not a final answer. Two standard techniques rescue these cases. Factor and cancel when the numerator and denominator share a common factor, or rationalize by multiplying by a conjugate when a square root is involved.",
              "zh": "当代入得到不定式 $\\tfrac{0}{0}$ 时，极限仍可能存在——$\\tfrac{0}{0}$ 是需要化简的信号，而非最终答案。两种标准方法可解决此类问题：当分子分母含公因式时因式分解并约分；当涉及根号时乘以共轭式进行有理化。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Evaluate $\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
                "zh": "求 $\\displaystyle\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Direct substitution gives $\\tfrac{9 - 9}{3 - 3} = \\tfrac{0}{0}$, indeterminate. Factor the numerator as a difference of squares.",
                  "zh": "直接代入得 $\\tfrac{9 - 9}{3 - 3} = \\tfrac{0}{0}$，不定。将分子按平方差分解。"
                },
                {
                  "type": "math",
                  "tex": "\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6"
                },
                {
                  "type": "p",
                  "en": "After cancelling the common factor $x - 3$, substitution works and the limit is $6$.",
                  "zh": "约去公因式 $x - 3$ 后即可代入，极限为 $6$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$.",
                "zh": "求 $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitution gives $\\tfrac{2 - 2}{0} = \\tfrac{0}{0}$. Because a square root is involved, multiply top and bottom by the conjugate $\\sqrt{x+4} + 2$.",
                  "zh": "代入得 $\\tfrac{2 - 2}{0} = \\tfrac{0}{0}$。因含根号，分子分母同乘共轭式 $\\sqrt{x+4} + 2$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{\\sqrt{x+4}-2}{x} \\cdot \\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2} = \\frac{(x+4) - 4}{x\\big(\\sqrt{x+4}+2\\big)} = \\frac{x}{x\\big(\\sqrt{x+4}+2\\big)}"
                },
                {
                  "type": "p",
                  "en": "Cancel the $x$, then substitute: $\\lim_{x \\to 0} \\dfrac{1}{\\sqrt{x+4}+2} = \\dfrac{1}{\\sqrt{4}+2} = \\dfrac{1}{4}$.",
                  "zh": "约去 $x$ 再代入：$\\lim_{x \\to 0} \\dfrac{1}{\\sqrt{x+4}+2} = \\dfrac{1}{\\sqrt{4}+2} = \\dfrac{1}{4}$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Limits at Infinity and End Behavior",
              "zh": "无穷远处的极限与端行为"
            },
            {
              "type": "p",
              "en": "We can also ask what happens as $x$ grows without bound. The notation $\\lim_{x \\to \\infty} f(x) = L$ means the outputs level off toward $L$ far to the right, which describes a horizontal asymptote $y = L$. For a rational function, compare the degrees of numerator and denominator, or divide every term by the highest power of $x$ present.",
              "zh": "我们也可以问当 $x$ 无限增大时会发生什么。记号 $\\lim_{x \\to \\infty} f(x) = L$ 表示在右方远处输出趋平于 $L$，对应水平渐近线 $y = L$。对有理函数，比较分子分母的次数，或把每一项都除以 $x$ 的最高次幂。"
            },
            {
              "type": "p",
              "en": "For example, $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 5}{2x^2 - x} = \\dfrac{3}{2}$, because when the degrees match the limit is the ratio of the leading coefficients. If the numerator's degree is smaller, the limit is $0$; if larger, the function grows without bound.",
              "zh": "例如 $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 5}{2x^2 - x} = \\dfrac{3}{2}$，因为次数相同时极限是最高次项系数之比。若分子次数较低，极限为 $0$；若较高，函数无界增长。"
            },
            {
              "type": "h2",
              "en": "Continuity at a Point",
              "zh": "函数在一点的连续性"
            },
            {
              "type": "p",
              "en": "Intuitively, a function is continuous if you can draw its graph without lifting your pencil. Precisely, $f$ is continuous at $x = c$ when all three conditions hold:",
              "zh": "直观上，若能不提笔画出图象，函数就是连续的。严格地说，$f$ 在 $x = c$ 处连续当且仅当以下三个条件都成立："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$f(c)$ is defined (the point exists).",
                  "zh": "$f(c)$ 有定义（该点存在）。"
                },
                {
                  "en": "$\\lim_{x \\to c} f(x)$ exists (both one-sided limits agree).",
                  "zh": "$\\lim_{x \\to c} f(x)$ 存在（两个单侧极限一致）。"
                },
                {
                  "en": "$\\lim_{x \\to c} f(x) = f(c)$ (the limit matches the value).",
                  "zh": "$\\lim_{x \\to c} f(x) = f(c)$（极限等于函数值）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "When continuity fails, the type of break tells the story. A removable discontinuity is a single hole — the limit exists but does not equal (or the function is undefined at) $f(c)$. A jump discontinuity has left and right limits that disagree, like a step. An infinite discontinuity occurs at a vertical asymptote where the function blows up.",
              "zh": "当连续性失效时，间断的类型说明了原因。可去间断是一个孔——极限存在但不等于（或函数在此无定义）$f(c)$。跳跃间断的左右极限不相等，像一级台阶。无穷间断出现在竖直渐近线处，函数在此趋于无穷。"
            },
            {
              "type": "h2",
              "en": "Why Limits Matter: The Bridge to Calculus",
              "zh": "极限为何重要：通往微积分的桥梁"
            },
            {
              "type": "p",
              "en": "Everything you have practiced here powers the two central ideas of calculus. The first is the derivative — instantaneous rate of change. Take a curve and a point on it. The slope between that point and a nearby point is a secant slope, $\\dfrac{f(x+h) - f(x)}{h}$. As the nearby point slides in, $h \\to 0$, the secant lines tilt toward the tangent line, and its slope is defined by a limit:",
              "zh": "你在此练习的一切，都为微积分的两大核心思想提供动力。第一是导数——瞬时变化率。取一条曲线及其上一点。该点与邻近点之间的斜率是割线斜率 $\\dfrac{f(x+h) - f(x)}{h}$。当邻近点滑近时 $h \\to 0$，割线倾斜趋向切线，其斜率由极限定义："
            },
            {
              "type": "math",
              "tex": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}"
            },
            {
              "type": "p",
              "en": "Notice that this is exactly a $\\tfrac{0}{0}$ situation — which is why the factoring and rationalizing you learned above are the everyday tools of a calculus student. The second big idea is area: to find the area under a curve, you add up infinitely many thin rectangles and take a limit, giving the definite integral. Limits are the language calculus is written in.",
              "zh": "注意这恰是 $\\tfrac{0}{0}$ 的情形——这正是你上面学的因式分解与有理化会成为微积分学生日常工具的原因。第二大思想是面积：求曲线下的面积，需累加无穷多个细长矩形并取极限，得到定积分。极限是书写微积分的语言。"
            },
            {
              "type": "note",
              "en": "Calculus preview: when you compute $\\lim_{h \\to 0} \\dfrac{f(x+h)-f(x)}{h}$ for $f(x) = x^2$, you will factor away an $h$ exactly like Example 2 and land on $2x$ — your first derivative. The skill you are drilling now is the skill you will use on day one of calculus.",
              "zh": "微积分预览：当你对 $f(x) = x^2$ 计算 $\\lim_{h \\to 0} \\dfrac{f(x+h)-f(x)}{h}$ 时，会像例题 2 那样约去一个 $h$，最终得到 $2x$——你的第一个导数。你现在训练的技能，正是微积分第一天就要用的技能。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Use direct substitution to evaluate $\\displaystyle\\lim_{x \\to 2} (3x^2 - 4x + 1)$. Give an integer.",
                "zh": "用直接代入法求 $\\displaystyle\\lim_{x \\to 2} (3x^2 - 4x + 1)$，答案为整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "A polynomial is continuous everywhere, so substitute directly: $3(2)^2 - 4(2) + 1 = 12 - 8 + 1 = 5$.",
                "zh": "多项式处处连续，故直接代入：$3(2)^2 - 4(2) + 1 = 12 - 8 + 1 = 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\displaystyle\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$?",
                "zh": "$\\displaystyle\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$ 等于多少？"
              },
              "choices": [
                "$0$",
                "$8$",
                "The limit does not exist",
                "$16$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Substitution gives $\\tfrac{0}{0}$, so factor: $\\dfrac{(x-4)(x+4)}{x-4} = x + 4$, and $\\lim_{x\\to4}(x+4) = 8$. Answering \"does not exist\" is the trap — $\\tfrac{0}{0}$ means simplify, not stop.",
                "zh": "代入得 $\\tfrac{0}{0}$，故分解：$\\dfrac{(x-4)(x+4)}{x-4} = x + 4$，$\\lim_{x\\to4}(x+4) = 8$。回答“不存在”是陷阱——$\\tfrac{0}{0}$ 意味着化简，而非停止。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $g(x) = \\begin{cases} x^2 & x < 1 \\\\ 4 & x \\ge 1 \\end{cases}$, which statement is true at $x = 1$?",
                "zh": "对 $g(x) = \\begin{cases} x^2 & x < 1 \\\\ 4 & x \\ge 1 \\end{cases}$，在 $x = 1$ 处哪个说法正确？"
              },
              "choices": [
                "The function is continuous at $x = 1$",
                "The two-sided limit is $4$",
                "The two-sided limit does not exist because the left limit is $1$ and the right limit is $4$",
                "The two-sided limit is $1$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Left limit: $\\lim_{x\\to1^-} x^2 = 1$. Right limit: $\\lim_{x\\to1^+} 4 = 4$. Since $1 \\ne 4$, the two-sided limit does not exist — this is a jump discontinuity. Continuity fails because condition 2 fails.",
                "zh": "左极限：$\\lim_{x\\to1^-} x^2 = 1$。右极限：$\\lim_{x\\to1^+} 4 = 4$。因 $1 \\ne 4$，双侧极限不存在——这是跳跃间断。连续性因第二个条件不满足而失效。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $\\displaystyle\\lim_{x \\to \\infty} \\frac{5x^2 - 3x}{2x^2 + 7}$?",
                "zh": "$\\displaystyle\\lim_{x \\to \\infty} \\frac{5x^2 - 3x}{2x^2 + 7}$ 等于多少？"
              },
              "choices": [
                "$\\dfrac{2}{5}$",
                "$0$",
                "$\\infty$",
                "$\\dfrac{5}{2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The degrees of numerator and denominator are equal (both $2$), so the limit is the ratio of leading coefficients, $\\tfrac{5}{2}$. Answering $0$ would be right only if the numerator had lower degree.",
                "zh": "分子分母次数相同（都为 $2$），故极限为最高次项系数之比 $\\tfrac{5}{2}$。只有当分子次数较低时答案才是 $0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x}$. Give your answer as a fraction in the form $a/b$.",
                "zh": "求 $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x}$，以 $a/b$ 形式的分数作答。"
              },
              "answer": "1/6",
              "accept": [
                "1/6"
              ],
              "explanation": {
                "en": "Multiply by the conjugate $\\sqrt{x+9}+3$: the numerator becomes $(x+9)-9 = x$, giving $\\dfrac{x}{x(\\sqrt{x+9}+3)} = \\dfrac{1}{\\sqrt{x+9}+3}$. Substituting $x=0$ gives $\\dfrac{1}{3+3} = \\dfrac{1}{6}$.",
                "zh": "乘以共轭式 $\\sqrt{x+9}+3$：分子变为 $(x+9)-9 = x$，得 $\\dfrac{x}{x(\\sqrt{x+9}+3)} = \\dfrac{1}{\\sqrt{x+9}+3}$。代入 $x=0$ 得 $\\dfrac{1}{3+3} = \\dfrac{1}{6}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A function $f$ has $\\lim_{x \\to 2} f(x) = 5$ but $f(2) = 1$. What type of discontinuity is at $x = 2$?",
                "zh": "函数 $f$ 满足 $\\lim_{x \\to 2} f(x) = 5$ 但 $f(2) = 1$，则 $x = 2$ 处是哪种间断？"
              },
              "choices": [
                "Removable (a hole)",
                "Jump",
                "Infinite",
                "The function is continuous"
              ],
              "answer": 0,
              "explanation": {
                "en": "The two-sided limit exists (it equals $5$) but does not match the function value $f(2) = 1$, so condition 3 fails and the break is a single point — a removable discontinuity. A jump would require the one-sided limits to disagree.",
                "zh": "双侧极限存在（等于 $5$）但不等于函数值 $f(2) = 1$，故第三个条件失效，间断只在一个点——可去间断。跳跃间断则要求两个单侧极限不相等。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = x^2$, the derivative slope at $x = 3$ is $\\lim_{h \\to 0} \\dfrac{(3+h)^2 - 9}{h}$. Evaluate this limit. Give an integer.",
                "zh": "对 $f(x) = x^2$，其在 $x = 3$ 处的导数斜率为 $\\lim_{h \\to 0} \\dfrac{(3+h)^2 - 9}{h}$。求此极限，答案为整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "Expand: $(3+h)^2 - 9 = 9 + 6h + h^2 - 9 = 6h + h^2 = h(6 + h)$. Cancel $h$: $\\lim_{h\\to0}(6 + h) = 6$. This is the tangent-line slope — your first taste of a derivative.",
                "zh": "展开：$(3+h)^2 - 9 = 9 + 6h + h^2 - 9 = 6h + h^2 = h(6 + h)$。约去 $h$：$\\lim_{h\\to0}(6 + h) = 6$。这就是切线斜率——你对导数的初次体验。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "As $h \\to 0$, the secant-line slope $\\dfrac{f(x+h) - f(x)}{h}$ approaches which geometric quantity?",
                "zh": "当 $h \\to 0$ 时，割线斜率 $\\dfrac{f(x+h) - f(x)}{h}$ 趋近于哪个几何量？"
              },
              "choices": [
                "The average of $f$ over the interval",
                "The area under the curve",
                "The slope of the tangent line at $x$",
                "The $y$-intercept of the curve"
              ],
              "answer": 2,
              "explanation": {
                "en": "As the second point slides toward the first ($h \\to 0$), the secant lines pivot into the tangent line, so the limit is the tangent slope — the derivative. Area is the other big calculus idea, but it comes from summing rectangles, not from this difference quotient.",
                "zh": "当第二个点滑向第一个点（$h \\to 0$）时，割线转为切线，故极限是切线斜率——即导数。面积是微积分的另一大思想，但它来自矩形求和，而非此差商。"
              }
            }
          ]
        }
      ]
    }
  ]
}
