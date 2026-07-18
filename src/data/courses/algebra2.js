export default {
  "id": "algebra2",
  "title": "Algebra 2",
  "titleZh": "代数二",
  "subject": "math",
  "level": "Honors",
  "description": "A complete Algebra 2 course following the standard U.S. textbook sequence: functions and linear systems, quadratics and complex numbers, polynomials, radicals, exponentials and logarithms, rational functions, sequences and series, trigonometry, probability, and statistics.",
  "descriptionZh": "完整的代数二课程，按照美国教材的标准章节编排：函数与线性方程组、二次函数与复数、多项式、根式、指数与对数、有理函数、数列与级数、三角学、概率与统计。",
  "units": [
    {
      "id": "functions-transformations",
      "title": "Unit 1: Functions, Transformations, and Linear Systems",
      "titleZh": "第一单元：函数、变换与线性方程组",
      "lessons": [
        {
          "id": "parent-functions-transformations",
          "title": "Parent Functions and Transformations",
          "titleZh": "母函数与图像变换",
          "content": [
            {
              "type": "h2",
              "en": "The Parent Function Family",
              "zh": "母函数家族"
            },
            {
              "type": "p",
              "en": "A parent function is the simplest function in a family. Every other member of the family is a transformed copy of the parent. The parents you must know by heart are the linear function $f(x)=x$, the quadratic $f(x)=x^2$, the cubic $f(x)=x^3$, the absolute value $f(x)=|x|$, the square root $f(x)=\\sqrt{x}$, and the reciprocal $f(x)=\\frac{1}{x}$.",
              "zh": "母函数是一个函数家族中最简单的函数，家族中的其他函数都是母函数经过变换得到的。你必须熟记的母函数有：线性函数 $f(x)=x$、二次函数 $f(x)=x^2$、三次函数 $f(x)=x^3$、绝对值函数 $f(x)=|x|$、平方根函数 $f(x)=\\sqrt{x}$ 以及倒数函数 $f(x)=\\frac{1}{x}$。"
            },
            {
              "type": "p",
              "en": "For each parent you should be able to sketch the graph, state the domain and range, and identify key points. For example, $f(x)=x^2$ has domain all real numbers, range $y \\ge 0$, and vertex at the origin.",
              "zh": "对每个母函数，你应能画出图像、说出定义域和值域，并指出关键点。例如 $f(x)=x^2$ 的定义域是全体实数，值域是 $y \\ge 0$，顶点在原点。"
            },
            {
              "type": "h2",
              "en": "The Transformation Rules",
              "zh": "变换法则"
            },
            {
              "type": "p",
              "en": "Every transformation of a parent function $f(x)$ can be written in the general form below, where each constant controls one motion of the graph.",
              "zh": "母函数 $f(x)$ 的每一种变换都可以写成下面的一般形式，其中每个常数控制图像的一种运动。"
            },
            {
              "type": "math",
              "tex": "g(x) = a \\cdot f(x - h) + k"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$h$ shifts the graph horizontally: $f(x-3)$ moves it 3 units right, $f(x+3)$ moves it 3 units left.",
                  "zh": "$h$ 控制水平平移：$f(x-3)$ 使图像右移 3 个单位，$f(x+3)$ 使图像左移 3 个单位。"
                },
                {
                  "en": "$k$ shifts the graph vertically: $+k$ moves it up, $-k$ moves it down.",
                  "zh": "$k$ 控制竖直平移：$+k$ 使图像上移，$-k$ 使图像下移。"
                },
                {
                  "en": "$|a|>1$ stretches the graph vertically; $0<|a|<1$ compresses it vertically.",
                  "zh": "$|a|>1$ 时图像竖直拉伸；$0<|a|<1$ 时图像竖直压缩。"
                },
                {
                  "en": "A negative $a$ reflects the graph across the $x$-axis; replacing $x$ with $-x$ reflects it across the $y$-axis.",
                  "zh": "$a$ 为负时图像关于 $x$ 轴翻折；把 $x$ 换成 $-x$ 则图像关于 $y$ 轴翻折。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Horizontal shifts are counterintuitive: $f(x-h)$ moves the graph in the POSITIVE direction when $h>0$. Read the sign inside the parentheses as the opposite of the direction you might expect.",
              "zh": "水平平移与直觉相反：当 $h>0$ 时 $f(x-h)$ 使图像向正方向移动。括号内的符号方向与你的直觉恰好相反，读题时要格外小心。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Describe the transformations that take $f(x)=x^2$ to $g(x) = -2(x+1)^2 + 3$.",
                "zh": "描述把 $f(x)=x^2$ 变为 $g(x) = -2(x+1)^2 + 3$ 的各个变换。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compare with $a\\,f(x-h)+k$: here $a=-2$, $h=-1$, $k=3$.",
                  "zh": "与 $a\\,f(x-h)+k$ 对比：这里 $a=-2$，$h=-1$，$k=3$。"
                },
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "Shift left 1 unit (because of $x+1 = x-(-1)$).",
                      "zh": "左移 1 个单位（因为 $x+1 = x-(-1)$）。"
                    },
                    {
                      "en": "Stretch vertically by a factor of 2 and reflect across the $x$-axis (because $a=-2$).",
                      "zh": "竖直方向拉伸为原来的 2 倍并关于 $x$ 轴翻折（因为 $a=-2$）。"
                    },
                    {
                      "en": "Shift up 3 units (because $k=3$). The vertex moves from $(0,0)$ to $(-1,3)$.",
                      "zh": "上移 3 个单位（因为 $k=3$）。顶点由 $(0,0)$ 移到 $(-1,3)$。"
                    }
                  ]
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "The graph of $f(x)=\\sqrt{x}$ is shifted right 4 units and down 2 units. Write the equation of the new function and state its domain.",
                "zh": "把 $f(x)=\\sqrt{x}$ 的图像右移 4 个单位、下移 2 个单位。写出新函数的表达式并给出其定义域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Right 4 means replace $x$ with $x-4$; down 2 means subtract 2 outside:",
                  "zh": "右移 4 即把 $x$ 换成 $x-4$；下移 2 即在函数外减 2："
                },
                {
                  "type": "math",
                  "tex": "g(x) = \\sqrt{x-4} - 2"
                },
                {
                  "type": "p",
                  "en": "The expression under the radical must be non-negative, so $x-4 \\ge 0$, giving domain $x \\ge 4$.",
                  "zh": "根号下的式子必须非负，所以 $x-4 \\ge 0$，定义域为 $x \\ge 4$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Order of transformations",
              "zh": "变换的顺序"
            },
            {
              "type": "p",
              "en": "When several transformations are combined, apply reflections and stretches before translations. A reliable strategy is to track what happens to two or three key points of the parent graph, one transformation at a time.",
              "zh": "当多个变换组合时，先做翻折与伸缩，再做平移。一个可靠的方法是跟踪母函数图像上两三个关键点，一步一步地应用每个变换。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which function shifts $f(x)=|x|$ up 5 units?",
                "zh": "下列哪个函数把 $f(x)=|x|$ 上移 5 个单位？"
              },
              "choices": [
                "$|x|+5$",
                "$|x+5|$",
                "$|x|-5$",
                "$|x-5|$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Adding a constant OUTSIDE the function moves the graph vertically: $|x|+5$ is up 5. $|x+5|$ would shift left 5 instead.",
                "zh": "在函数外面加常数使图像竖直移动：$|x|+5$ 是上移 5。而 $|x+5|$ 是左移 5。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $g(x)=(x-6)^2$ is the graph of $x^2$ shifted…",
                "zh": "$g(x)=(x-6)^2$ 的图像是 $x^2$ 的图像经过怎样的平移？"
              },
              "choices": [
                "right 6 units / 右移 6",
                "left 6 units / 左移 6",
                "up 6 units / 上移 6",
                "down 6 units / 下移 6"
              ],
              "answer": 0,
              "explanation": {
                "en": "Inside the parentheses, $x-6$ moves the graph in the opposite direction of the sign: right 6 units. Check: the vertex is where $x-6=0$, i.e. $x=6$.",
                "zh": "括号内 $x-6$ 使图像朝与符号相反的方向移动：右移 6。验证：顶点在 $x-6=0$ 处，即 $x=6$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The vertex of $y=(x+2)^2-7$ is $(a, b)$. Enter the value of $b$.",
                "zh": "$y=(x+2)^2-7$ 的顶点是 $(a, b)$。请输入 $b$ 的值。"
              },
              "answer": "-7",
              "explanation": {
                "en": "In vertex form $y=a(x-h)^2+k$ the vertex is $(h,k)$. Here $h=-2$ and $k=-7$, so $b=-7$.",
                "zh": "顶点式 $y=a(x-h)^2+k$ 的顶点是 $(h,k)$。这里 $h=-2$，$k=-7$，所以 $b=-7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which transformation does $g(x)=f(-x)$ perform on the graph of $f$?",
                "zh": "$g(x)=f(-x)$ 对 $f$ 的图像做了什么变换？"
              },
              "choices": [
                "Reflection across the $y$-axis / 关于 $y$ 轴翻折",
                "Reflection across the $x$-axis / 关于 $x$ 轴翻折",
                "Shift left / 左移",
                "Vertical stretch / 竖直拉伸"
              ],
              "answer": 0,
              "explanation": {
                "en": "Replacing $x$ with $-x$ swaps each point $(x,y)$ with $(-x,y)$, which is a mirror image across the $y$-axis. Reflection across the $x$-axis would be $-f(x)$.",
                "zh": "把 $x$ 换成 $-x$ 使每个点 $(x,y)$ 变为 $(-x,y)$，即关于 $y$ 轴的镜像。关于 $x$ 轴翻折应写作 $-f(x)$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The point $(2, 4)$ lies on $y=f(x)$. After the transformation $y=f(x)+6$, the image of this point is $(2, c)$. Enter $c$.",
                "zh": "点 $(2, 4)$ 在 $y=f(x)$ 上。经过变换 $y=f(x)+6$ 后，该点的像为 $(2, c)$。请输入 $c$。"
              },
              "answer": "10",
              "explanation": {
                "en": "Adding 6 outside the function raises every $y$-value by 6, so $c = 4+6 = 10$. The $x$-coordinate is unchanged.",
                "zh": "在函数外加 6 使每个 $y$ 值增加 6，所以 $c = 4+6 = 10$。$x$ 坐标不变。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation represents $f(x)=x^3$ reflected across the $x$-axis and shifted down 1?",
                "zh": "哪个式子表示把 $f(x)=x^3$ 关于 $x$ 轴翻折后再下移 1？"
              },
              "choices": [
                "$y=-x^3-1$",
                "$y=(-x)^3+1$",
                "$y=-x^3+1$",
                "$y=-(x-1)^3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Reflection across the $x$-axis multiplies the output by $-1$, giving $-x^3$; shifting down 1 subtracts 1: $y=-x^3-1$.",
                "zh": "关于 $x$ 轴翻折即输出乘以 $-1$，得 $-x^3$；下移 1 再减 1：$y=-x^3-1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "State the smallest value in the domain of $g(x)=\\sqrt{x+9}$ (enter a number).",
                "zh": "写出 $g(x)=\\sqrt{x+9}$ 定义域中的最小值（输入一个数字）。"
              },
              "answer": "-9",
              "explanation": {
                "en": "We need $x+9 \\ge 0$, so $x \\ge -9$. The graph of $\\sqrt{x}$ shifted left 9 starts at $x=-9$.",
                "zh": "需要 $x+9 \\ge 0$，即 $x \\ge -9$。$\\sqrt{x}$ 的图像左移 9 后从 $x=-9$ 开始。"
              }
            }
          ]
        },
        {
          "id": "inverses-composition",
          "title": "Function Composition and Inverses",
          "titleZh": "函数复合与反函数",
          "content": [
            {
              "type": "h2",
              "en": "Composing Functions",
              "zh": "函数的复合"
            },
            {
              "type": "p",
              "en": "Composition feeds the output of one function into another. The notation $(f \\circ g)(x) = f(g(x))$ means \"apply $g$ first, then apply $f$ to the result.\" Order matters: $f(g(x))$ and $g(f(x))$ are usually different functions.",
              "zh": "复合就是把一个函数的输出作为另一个函数的输入。记号 $(f \\circ g)(x) = f(g(x))$ 表示\"先作用 $g$，再把结果代入 $f$\"。顺序很重要：$f(g(x))$ 和 $g(f(x))$ 通常是不同的函数。"
            },
            {
              "type": "p",
              "en": "To compute $f(g(x))$, substitute the entire expression for $g(x)$ everywhere $x$ appears in the formula for $f$.",
              "zh": "计算 $f(g(x))$ 时，把 $g(x)$ 的整个表达式代入 $f$ 的公式中每一个 $x$ 出现的位置。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Let $f(x)=x^2+1$ and $g(x)=2x-3$. Find $f(g(x))$ and $g(f(x))$.",
                "zh": "设 $f(x)=x^2+1$，$g(x)=2x-3$。求 $f(g(x))$ 与 $g(f(x))$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For $f(g(x))$, replace $x$ in $f$ with $2x-3$:",
                  "zh": "求 $f(g(x))$ 时，把 $f$ 中的 $x$ 换成 $2x-3$："
                },
                {
                  "type": "math",
                  "tex": "f(g(x)) = (2x-3)^2 + 1 = 4x^2 - 12x + 10"
                },
                {
                  "type": "p",
                  "en": "For $g(f(x))$, replace $x$ in $g$ with $x^2+1$:",
                  "zh": "求 $g(f(x))$ 时，把 $g$ 中的 $x$ 换成 $x^2+1$："
                },
                {
                  "type": "math",
                  "tex": "g(f(x)) = 2(x^2+1) - 3 = 2x^2 - 1"
                },
                {
                  "type": "p",
                  "en": "The two results are different, confirming that composition is not commutative.",
                  "zh": "两个结果不同，说明复合运算不满足交换律。"
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
              "en": "The inverse function $f^{-1}$ undoes $f$: if $f(a)=b$, then $f^{-1}(b)=a$. Graphically, $y=f^{-1}(x)$ is the reflection of $y=f(x)$ across the line $y=x$. A function has an inverse function only if it is one-to-one, which you can check with the horizontal line test.",
              "zh": "反函数 $f^{-1}$ 把 $f$ 的作用\"撤销\"：若 $f(a)=b$，则 $f^{-1}(b)=a$。从图像上看，$y=f^{-1}(x)$ 是 $y=f(x)$ 关于直线 $y=x$ 的对称图形。只有一一对应的函数才有反函数，可用水平线检验法判断。"
            },
            {
              "type": "h3",
              "en": "Finding an inverse algebraically",
              "zh": "用代数方法求反函数"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Write $y = f(x)$.",
                  "zh": "第一步：写出 $y = f(x)$。"
                },
                {
                  "en": "Step 2: Swap $x$ and $y$.",
                  "zh": "第二步：交换 $x$ 与 $y$。"
                },
                {
                  "en": "Step 3: Solve for $y$; the result is $f^{-1}(x)$.",
                  "zh": "第三步：解出 $y$，所得即为 $f^{-1}(x)$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "The $-1$ in $f^{-1}$ is NOT an exponent: $f^{-1}(x)$ means the inverse function, not $\\frac{1}{f(x)}$. To verify an inverse, check that $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.",
              "zh": "$f^{-1}$ 中的 $-1$ 不是指数：$f^{-1}(x)$ 表示反函数，而不是 $\\frac{1}{f(x)}$。验证反函数时，检查 $f(f^{-1}(x)) = x$ 且 $f^{-1}(f(x)) = x$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Find the inverse of $f(x) = \\frac{x-4}{3}$.",
                "zh": "求 $f(x) = \\frac{x-4}{3}$ 的反函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Write $y = \\frac{x-4}{3}$, then swap variables: $x = \\frac{y-4}{3}$.",
                  "zh": "写出 $y = \\frac{x-4}{3}$，然后交换变量：$x = \\frac{y-4}{3}$。"
                },
                {
                  "type": "p",
                  "en": "Solve for $y$: multiply both sides by 3 to get $3x = y - 4$, then add 4.",
                  "zh": "解出 $y$：两边同乘 3 得 $3x = y - 4$，再加 4。"
                },
                {
                  "type": "math",
                  "tex": "f^{-1}(x) = 3x + 4"
                },
                {
                  "type": "p",
                  "en": "Check: $f(f^{-1}(x)) = \\frac{(3x+4)-4}{3} = \\frac{3x}{3} = x$. ✓",
                  "zh": "验证：$f(f^{-1}(x)) = \\frac{(3x+4)-4}{3} = \\frac{3x}{3} = x$，正确。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Inverses swap domain and range: the domain of $f$ becomes the range of $f^{-1}$, and vice versa. This is essential later when we define logarithms as inverses of exponentials.",
              "zh": "反函数交换定义域与值域：$f$ 的定义域变为 $f^{-1}$ 的值域，反之亦然。之后把对数定义为指数函数的反函数时，这一点至关重要。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "If $f(x)=3x$ and $g(x)=x+2$, find $f(g(1))$ (enter a number).",
                "zh": "若 $f(x)=3x$，$g(x)=x+2$，求 $f(g(1))$（输入一个数字）。"
              },
              "answer": "9",
              "explanation": {
                "en": "Work inside out: $g(1)=1+2=3$, then $f(3)=3(3)=9$.",
                "zh": "由内向外计算：$g(1)=1+2=3$，再 $f(3)=3(3)=9$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f(x)=x^2$ and $g(x)=x-5$, what is $g(f(x))$?",
                "zh": "若 $f(x)=x^2$，$g(x)=x-5$，则 $g(f(x))$ 是？"
              },
              "choices": [
                "$x^2-5$",
                "$(x-5)^2$",
                "$x^2+5$",
                "$x^2-25$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$g(f(x))$ applies $f$ first: substitute $x^2$ into $g$, giving $x^2 - 5$. Choice $(x-5)^2$ is $f(g(x))$, the opposite order.",
                "zh": "$g(f(x))$ 先作用 $f$：把 $x^2$ 代入 $g$ 得 $x^2 - 5$。选项 $(x-5)^2$ 是 $f(g(x))$，顺序相反。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which test determines whether a function has an inverse function?",
                "zh": "用哪种检验法判断一个函数是否有反函数？"
              },
              "choices": [
                "Horizontal line test / 水平线检验",
                "Vertical line test / 竖直线检验",
                "Symmetry test / 对称性检验",
                "Sign test / 符号检验"
              ],
              "answer": 0,
              "explanation": {
                "en": "A function has an inverse function only if it is one-to-one, meaning no horizontal line crosses its graph twice. The vertical line test only checks whether a graph is a function at all.",
                "zh": "只有一一对应的函数才有反函数，即任何水平线与图像至多交于一点。竖直线检验只能判断图像是否为函数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the inverse of $f(x)=x+7$ and evaluate $f^{-1}(10)$ (enter a number).",
                "zh": "求 $f(x)=x+7$ 的反函数并计算 $f^{-1}(10)$（输入一个数字）。"
              },
              "answer": "3",
              "explanation": {
                "en": "The inverse of adding 7 is subtracting 7: $f^{-1}(x)=x-7$, so $f^{-1}(10)=3$. Check: $f(3)=10$. ✓",
                "zh": "加 7 的逆运算是减 7：$f^{-1}(x)=x-7$，所以 $f^{-1}(10)=3$。验证：$f(3)=10$，正确。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $f^{-1}$ is the graph of $f$ reflected across…",
                "zh": "$f^{-1}$ 的图像是 $f$ 的图像关于哪条线的对称图形？"
              },
              "choices": [
                "the line $y=x$ / 直线 $y=x$",
                "the $x$-axis / $x$ 轴",
                "the $y$-axis / $y$ 轴",
                "the line $y=-x$ / 直线 $y=-x$"
              ],
              "answer": 0,
              "explanation": {
                "en": "An inverse swaps inputs and outputs, turning each point $(a,b)$ into $(b,a)$. Swapping coordinates is exactly reflection across the line $y=x$.",
                "zh": "反函数交换输入与输出，把每个点 $(a,b)$ 变为 $(b,a)$。交换坐标正是关于直线 $y=x$ 的对称。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x)=2x-8$. Find $f^{-1}(x)$ and evaluate $f^{-1}(0)$ (enter a number).",
                "zh": "设 $f(x)=2x-8$。求 $f^{-1}(x)$ 并计算 $f^{-1}(0)$（输入一个数字）。"
              },
              "answer": "4",
              "explanation": {
                "en": "Swap and solve: $x = 2y-8 \\Rightarrow y = \\frac{x+8}{2}$. Then $f^{-1}(0) = \\frac{0+8}{2} = 4$. Equivalently, solve $f(a)=0$: $2a-8=0$ gives $a=4$.",
                "zh": "交换变量并求解：$x = 2y-8 \\Rightarrow y = \\frac{x+8}{2}$。于是 $f^{-1}(0) = \\frac{0+8}{2} = 4$。等价地，解 $f(a)=0$：$2a-8=0$ 得 $a=4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f$ and $g$ are inverses, which statement must be true?",
                "zh": "若 $f$ 与 $g$ 互为反函数，下列哪个命题一定成立？"
              },
              "choices": [
                "$f(g(x))=x$ for all $x$ in the domain of $g$ / 对 $g$ 定义域内所有 $x$，$f(g(x))=x$",
                "$f(x) \\cdot g(x) = 1$",
                "$f(x)+g(x)=0$",
                "$f(x)=g(x)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The defining property of inverses is that they undo each other: $f(g(x))=x$ and $g(f(x))=x$. The product being 1 describes reciprocals, not inverses.",
                "zh": "反函数的定义性质是相互抵消：$f(g(x))=x$ 且 $g(f(x))=x$。乘积为 1 描述的是倒数，不是反函数。"
              }
            }
          ]
        },
        {
          "id": "modeling-and-linear-systems",
          "title": "Modeling with Linear Functions and Systems",
          "titleZh": "线性建模与线性方程组",
          "content": [
            {
              "type": "h2",
              "en": "Turning Situations into Linear Models",
              "zh": "把实际情境转化为线性模型"
            },
            {
              "type": "p",
              "en": "A quantity that changes at a constant rate is modeled by a linear function. The two ingredients of every linear model are the rate of change (the slope $m$) and the starting value (the $y$-intercept $b$). When you read a word problem, hunt for these two numbers first: phrases like \"per month,\" \"each mile,\" or \"for every ticket\" signal the slope, while \"initial fee,\" \"starting amount,\" or \"flat charge\" signal the intercept.",
              "zh": "以恒定速率变化的量可以用线性函数来建模。每个线性模型都由两个要素构成：变化率（斜率 $m$）和初始值（$y$ 轴截距 $b$）。读应用题时，先找出这两个数：像\"每月\"\"每英里\"\"每张票\"这样的措辞对应斜率，而\"初始费用\"\"起始量\"\"固定收费\"对应截距。"
            },
            {
              "type": "h3",
              "en": "Writing a model from two data points",
              "zh": "由两个数据点建立模型"
            },
            {
              "type": "p",
              "en": "If a context gives you two input–output pairs $(x_1, y_1)$ and $(x_2, y_2)$, compute the slope first, then solve for the intercept by substituting one point. Always attach units to the slope — \"dollars per month\" or \"meters per second\" — because interpreting the rate in context is exactly what test questions ask for.",
              "zh": "如果题目给出两组输入—输出对 $(x_1, y_1)$ 和 $(x_2, y_2)$，先求斜率，再代入其中一点解出截距。一定要给斜率标上单位——\"美元/月\"或\"米/秒\"——因为考试恰恰喜欢考在情境中解释变化率的含义。"
            },
            {
              "type": "math",
              "tex": "m = \\frac{y_2 - y_1}{x_2 - x_1}, \\qquad y = mx + b"
            },
            {
              "type": "h3",
              "en": "Lines of fit for real data",
              "zh": "实际数据的拟合直线"
            },
            {
              "type": "p",
              "en": "Real data rarely lies exactly on a line. A line of fit is a line drawn through a scatter plot that follows the overall trend, with roughly as many points above as below. Once you have its equation, you can interpolate (predict inside the range of the data, usually reliable) or extrapolate (predict beyond the data, which gets riskier the farther you go). A calculator's linear regression feature produces the best-fitting line automatically.",
              "zh": "真实数据几乎不会恰好落在一条直线上。拟合直线是穿过散点图、顺着整体趋势画出的直线，直线上方和下方的点数量大致相当。得到直线方程后，可以进行内插（在数据范围内预测，通常比较可靠）或外推（超出数据范围预测，走得越远风险越大）。计算器的线性回归功能可以自动求出最佳拟合直线。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "A gym charges a one-time enrollment fee plus a fixed monthly rate. After 3 months a member has paid \\$155 in total; after 7 months the total is \\$315. Write a linear model $C(t)$ for the total cost after $t$ months, and interpret the slope and intercept.",
                "zh": "某健身房收取一次性入会费和固定月费。会员 3 个月共付了 155 美元，7 个月共付了 315 美元。写出 $t$ 个月后总花费的线性模型 $C(t)$，并解释斜率和截距的含义。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The two data points are $(3, 155)$ and $(7, 315)$. The slope is the monthly rate:",
                  "zh": "两个数据点是 $(3, 155)$ 和 $(7, 315)$。斜率就是月费："
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{315 - 155}{7 - 3} = \\frac{160}{4} = 40 \\text{ dollars per month}"
                },
                {
                  "type": "p",
                  "en": "Substitute $(3, 155)$ to find $b$: $155 = 40(3) + b$, so $b = 35$. The model is $C(t) = 40t + 35$. The slope 40 is the monthly rate in dollars per month, and the intercept 35 is the one-time enrollment fee.",
                  "zh": "代入 $(3, 155)$ 求 $b$：$155 = 40(3) + b$，所以 $b = 35$。模型为 $C(t) = 40t + 35$。斜率 40 是月费（美元/月），截距 35 是一次性入会费。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Systems of Two Linear Equations: A Fast Review",
              "zh": "二元一次方程组：快速复习"
            },
            {
              "type": "p",
              "en": "A system of two linear equations asks for the point where two lines intersect. You have two algebraic tools. Substitution: solve one equation for a variable and plug the expression into the other. Elimination: multiply one or both equations by constants so that adding the equations cancels a variable.",
              "zh": "二元一次方程组求的是两条直线的交点。有两种代数方法。代入法：从一个方程中解出一个变量，把所得表达式代入另一个方程。加减消元法：给一个或两个方程乘上适当的常数，使两式相加时消去一个变量。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Use substitution when a variable already has coefficient 1, such as $y = 3x - 2$ or $x + 4y = 7$.",
                  "zh": "当某个变量的系数已经是 1 时用代入法，例如 $y = 3x - 2$ 或 $x + 4y = 7$。"
                },
                {
                  "en": "Use elimination when both equations are in standard form $Ax + By = C$ — line up the columns and cancel.",
                  "zh": "当两个方程都是标准形式 $Ax + By = C$ 时用加减消元法——对齐各列后相消。"
                },
                {
                  "en": "Either way, finish by substituting back to find the second variable, then check the pair in BOTH original equations.",
                  "zh": "无论用哪种方法，最后都要回代求出第二个变量，并把这组解代入两个原方程检验。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: when you multiply an equation to set up elimination, you must multiply EVERY term, including the constant on the right side. Turning $2x + 3y = 5$ into $4x + 6y = 5$ (forgetting to double the 5) is the single most frequent elimination error.",
              "zh": "常见错误：为消元而给方程乘常数时，必须给每一项都乘，包括右边的常数。把 $2x + 3y = 5$ 变成 $4x + 6y = 5$（忘记把 5 也乘 2）是消元法中最常见的错误。"
            },
            {
              "type": "h3",
              "en": "Classifying solutions",
              "zh": "解的分类"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Exactly one solution: the lines have different slopes and cross at a single point (an independent, consistent system).",
                  "zh": "恰有一个解：两直线斜率不同，交于一点（相容且独立的方程组）。"
                },
                {
                  "en": "No solution: the algebra collapses to a false statement like $0 = 7$; the lines are parallel with different intercepts (inconsistent).",
                  "zh": "无解：化简后得到 $0 = 7$ 这样的矛盾式；两直线平行且截距不同（矛盾方程组）。"
                },
                {
                  "en": "Infinitely many solutions: the algebra collapses to a true statement like $0 = 0$; the two equations describe the same line (dependent).",
                  "zh": "无穷多解：化简后得到 $0 = 0$ 这样的恒等式；两个方程表示同一条直线（不独立）。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Systems of Three Equations in Three Variables",
              "zh": "三元一次方程组"
            },
            {
              "type": "p",
              "en": "A linear equation in $x$, $y$, $z$ describes a plane in space, and a $3\\times 3$ system asks where three planes meet — usually a single point $(x, y, z)$. The strategy is always the same: use elimination to remove ONE variable from TWO different pairs of equations, producing a $2\\times 2$ system you already know how to solve. Then back-substitute twice.",
              "zh": "关于 $x$、$y$、$z$ 的一次方程表示空间中的一个平面，$3\\times 3$ 方程组求的是三个平面的公共点——通常是唯一的一点 $(x, y, z)$。策略始终相同：对两组不同的方程配对消去同一个变量，得到一个你已经会解的 $2\\times 2$ 方程组，然后回代两次。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Pick the easiest variable to eliminate (look for coefficients that are equal or opposite).",
                  "zh": "第一步：选择最容易消去的变量（找系数相等或相反的）。"
                },
                {
                  "en": "Step 2: Eliminate it from one pair of equations, then from a DIFFERENT pair — you need two new equations in the same two variables.",
                  "zh": "第二步：先用一对方程消去它，再用另一对不同的方程消去它——必须得到关于同两个变量的两个新方程。"
                },
                {
                  "en": "Step 3: Solve the resulting $2\\times 2$ system, then back-substitute into any original equation to find the third variable.",
                  "zh": "第三步：解所得的 $2\\times 2$ 方程组，再回代入任一原方程求出第三个变量。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Solve the system: $x + y + z = 6$, $\\;2x - y + z = 3$, $\\;x + 2y - z = 2$.",
                "zh": "解方程组：$x + y + z = 6$，$2x - y + z = 3$，$x + 2y - z = 2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The $z$ coefficients are $+1$, $+1$, $-1$, so eliminate $z$ by adding. Equation 2 plus Equation 3:",
                  "zh": "$z$ 的系数分别是 $+1$、$+1$、$-1$，所以用相加的方式消去 $z$。方程 2 加方程 3："
                },
                {
                  "type": "math",
                  "tex": "(2x - y + z) + (x + 2y - z) = 3 + 2 \\;\\Rightarrow\\; 3x + y = 5"
                },
                {
                  "type": "p",
                  "en": "Equation 1 plus Equation 3 (a different pair):",
                  "zh": "方程 1 加方程 3（另一对方程）："
                },
                {
                  "type": "math",
                  "tex": "(x + y + z) + (x + 2y - z) = 6 + 2 \\;\\Rightarrow\\; 2x + 3y = 8"
                },
                {
                  "type": "p",
                  "en": "Now solve the $2\\times 2$ system. From $3x + y = 5$, we get $y = 5 - 3x$. Substitute: $2x + 3(5 - 3x) = 8$, so $2x + 15 - 9x = 8$, giving $-7x = -7$ and $x = 1$. Then $y = 5 - 3(1) = 2$, and from Equation 1, $z = 6 - 1 - 2 = 3$.",
                  "zh": "现在解这个 $2\\times 2$ 方程组。由 $3x + y = 5$ 得 $y = 5 - 3x$。代入：$2x + 3(5 - 3x) = 8$，即 $2x + 15 - 9x = 8$，得 $-7x = -7$，$x = 1$。于是 $y = 5 - 3(1) = 2$，再由方程 1 得 $z = 6 - 1 - 2 = 3$。"
                },
                {
                  "type": "p",
                  "en": "The solution is $(1, 2, 3)$. Check in Equation 2: $2(1) - 2 + 3 = 3$. ✓",
                  "zh": "解为 $(1, 2, 3)$。代入方程 2 检验：$2(1) - 2 + 3 = 3$，正确。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: always check your triple $(x, y, z)$ in ALL THREE original equations, not just the ones you used for elimination. A sign slip early on will still satisfy the equations you derived from it — only the untouched original equation can catch the error. Also, if elimination produces $0 = 0$ the system has infinitely many solutions, and $0 = $ (nonzero) means no solution, exactly as in the $2\\times 2$ case.",
              "zh": "考试提示：一定要把解 $(x, y, z)$ 代入全部三个原方程检验，而不只是消元时用过的那两个。前面出现的符号错误仍会满足由它推出的方程——只有没用过的那个原方程才能发现错误。另外，若消元得到 $0 = 0$，方程组有无穷多解；得到 $0 = $ 非零数则无解，与 $2\\times 2$ 的情形完全一样。"
            },
            {
              "type": "h3",
              "en": "Applications: break-even, mixtures, and three unknowns",
              "zh": "应用：盈亏平衡、混合与三未知数问题"
            },
            {
              "type": "p",
              "en": "Three application patterns dominate. Break-even: set cost equal to revenue, $C(x) = R(x)$, and solve for the quantity where profit becomes zero. Mixture: one equation counts total amount, the other counts the pure substance, e.g. $0.30x + 0.60y$ liters of pure acid. Three unknowns: each sentence of the problem becomes one equation — a total count, a total value, and one relationship between the unknowns.",
              "zh": "三类应用最常见。盈亏平衡：令成本等于收入，$C(x) = R(x)$，解出利润为零时的数量。混合问题：一个方程统计总量，另一个统计纯物质的量，例如纯酸有 $0.30x + 0.60y$ 升。三未知数问题：题目的每句话对应一个方程——总数量、总价值，以及未知数之间的一个关系。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A robotics club sells custom phone grips. Materials cost \\$4 per grip and the club spent \\$240 on a 3-D printer. They sell each grip for \\$10. How many grips must they sell to break even?",
                "zh": "机器人社团出售定制手机支架。每个支架的材料成本为 4 美元，社团还花 240 美元购买了一台 3D 打印机。每个支架售价 10 美元。他们需要卖出多少个才能实现盈亏平衡？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $x$ be the number of grips. Cost: $C(x) = 4x + 240$. Revenue: $R(x) = 10x$. Break even when $C(x) = R(x)$:",
                  "zh": "设卖出 $x$ 个支架。成本：$C(x) = 4x + 240$。收入：$R(x) = 10x$。盈亏平衡即 $C(x) = R(x)$："
                },
                {
                  "type": "math",
                  "tex": "10x = 4x + 240 \\;\\Rightarrow\\; 6x = 240 \\;\\Rightarrow\\; x = 40"
                },
                {
                  "type": "p",
                  "en": "They must sell 40 grips. Each sale contributes $10 - 4 = 6$ dollars toward the \\$240 fixed cost, and $240 \\div 6 = 40$ — a good sanity check. Selling more than 40 produces a profit.",
                  "zh": "他们必须卖出 40 个。每卖一个可为 240 美元的固定成本贡献 $10 - 4 = 6$ 美元，$240 \\div 6 = 40$——这是一个很好的验算。卖出超过 40 个就开始盈利。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A phone plan costs \\$25 per month plus \\$0.10 for each extra gigabyte of data. Which equation models the monthly bill $y$ for $x$ extra gigabytes?",
                "zh": "某手机套餐每月收费 25 美元，每超出 1 GB 流量另收 0.10 美元。哪个方程可以表示使用 $x$ GB 超额流量时的月账单 $y$？"
              },
              "choices": [
                "$y = 25x + 0.10$",
                "$y = 0.10x + 25$",
                "$y = 25.10x$",
                "$y = 0.10(x + 25)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The per-unit charge \\$0.10 is the slope and the fixed \\$25 is the intercept: $y = 0.10x + 25$. Choice $y = 25x + 0.10$ is tempting because it uses both numbers, but it swaps the rate and the flat fee.",
                "zh": "每单位收费 0.10 美元是斜率，固定的 25 美元是截距：$y = 0.10x + 25$。选项 $y = 25x + 0.10$ 很有迷惑性，因为两个数都用上了，但它把变化率和固定费用弄反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A line of fit for a class's study data is $\\hat{y} = 2.5x + 10$, where $x$ is hours studied and $\\hat{y}$ is the predicted quiz score. Predict the score for a student who studies 8 hours. Give an integer.",
                "zh": "某班学习数据的拟合直线为 $\\hat{y} = 2.5x + 10$，其中 $x$ 是学习小时数，$\\hat{y}$ 是预测的测验分数。预测学习 8 小时的学生的分数。请填一个整数。"
              },
              "answer": "30",
              "accept": [
                "30.0"
              ],
              "explanation": {
                "en": "Substitute $x = 8$: $\\hat{y} = 2.5(8) + 10 = 20 + 10 = 30$. Since 8 hours is a prediction, the model gives an estimate, not a guarantee.",
                "zh": "代入 $x = 8$：$\\hat{y} = 2.5(8) + 10 = 20 + 10 = 30$。这是模型给出的预测值，是估计而不是保证。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve the system $3x + 2y = 12$ and $x - 2y = 4$. What is the value of $x$?",
                "zh": "解方程组 $3x + 2y = 12$ 与 $x - 2y = 4$。$x$ 的值是多少？"
              },
              "choices": [
                "$x = 2$",
                "$x = 0$",
                "$x = 4$",
                "$x = 8$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The $y$ coefficients are opposites, so add the equations: $4x = 16$, giving $x = 4$ (and then $y = 0$). Choice $x = 0$ is tempting because $y = 0$ — make sure you report the variable the question asks for.",
                "zh": "$y$ 的系数互为相反数，直接相加：$4x = 16$，得 $x = 4$（进而 $y = 0$）。选项 $x = 0$ 有迷惑性，因为 $y$ 恰好等于 0——务必回答题目所问的那个变量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Classify the system $y = 2x + 3$ and $2y - 4x = 6$.",
                "zh": "判断方程组 $y = 2x + 3$ 与 $2y - 4x = 6$ 的解的情况。"
              },
              "choices": [
                "Exactly one solution / 恰有一个解",
                "No solution / 无解",
                "Cannot be determined / 无法判断",
                "Infinitely many solutions / 无穷多解"
              ],
              "answer": 3,
              "explanation": {
                "en": "Dividing the second equation by 2 gives $y - 2x = 3$, i.e. $y = 2x + 3$ — the same line as the first equation, so every point on the line is a solution. \"No solution\" is the tempting trap: parallel lines have equal slopes but DIFFERENT intercepts, and here the intercepts match too.",
                "zh": "第二个方程除以 2 得 $y - 2x = 3$，即 $y = 2x + 3$——与第一个方程是同一条直线，直线上每个点都是解。\"无解\"是常见陷阱：平行线斜率相同但截距不同，而这里截距也相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A bakery's cupcake stand costs $C(x) = 1.5x + 180$ dollars to run and brings in revenue $R(x) = 4.5x$ dollars for $x$ cupcakes sold. How many cupcakes must be sold to break even? Give an integer.",
                "zh": "某面包店的纸杯蛋糕摊位成本为 $C(x) = 1.5x + 180$ 美元，卖出 $x$ 个蛋糕的收入为 $R(x) = 4.5x$ 美元。需要卖出多少个才能盈亏平衡？请填一个整数。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "Set revenue equal to cost: $4.5x = 1.5x + 180$, so $3x = 180$ and $x = 60$. Each cupcake contributes $4.5 - 1.5 = 3$ dollars toward the \\$180 fixed cost.",
                "zh": "令收入等于成本：$4.5x = 1.5x + 180$，即 $3x = 180$，$x = 60$。每个蛋糕为 180 美元固定成本贡献 $4.5 - 1.5 = 3$ 美元。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve the system $x + y + z = 2$, $\\;x - y + z = 0$, $\\;x + 2y - z = 3$. What is the value of $z$?",
                "zh": "解方程组 $x + y + z = 2$，$x - y + z = 0$，$x + 2y - z = 3$。$z$ 的值是多少？"
              },
              "choices": [
                "$z = 0$",
                "$z = 1$",
                "$z = -1$",
                "$z = 2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Subtracting the second equation from the first gives $2y = 2$, so $y = 1$. Then equation 1 gives $x + z = 1$ and equation 3 gives $x - z = 1$; adding these, $2x = 2$, so $x = 1$ and $z = 0$. The distractor $z = 1$ comes from stopping at $y = 1$ and assuming the variables match.",
                "zh": "第一个方程减第二个方程得 $2y = 2$，所以 $y = 1$。于是方程 1 化为 $x + z = 1$，方程 3 化为 $x - z = 1$；两式相加得 $2x = 2$，即 $x = 1$，$z = 0$。干扰项 $z = 1$ 来自解出 $y = 1$ 后就想当然地认为其他变量也相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A chemist mixes a 30% acid solution with a 60% acid solution to make 20 liters of a 45% acid solution. How many liters of the 60% solution are needed? Give an integer.",
                "zh": "化学家把 30% 的酸溶液与 60% 的酸溶液混合，配成 20 升 45% 的酸溶液。需要多少升 60% 的溶液？请填一个整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "Let $x$ and $y$ be the liters of 30% and 60% solution. Total volume: $x + y = 20$. Pure acid: $0.30x + 0.60y = 0.45(20) = 9$. Substituting $x = 20 - y$: $6 - 0.3y + 0.6y = 9$, so $0.3y = 3$ and $y = 10$. (Since 45% is exactly halfway between 30% and 60%, equal amounts makes sense.)",
                "zh": "设 30% 和 60% 溶液分别为 $x$、$y$ 升。总体积：$x + y = 20$。纯酸量：$0.30x + 0.60y = 0.45(20) = 9$。代入 $x = 20 - y$：$6 - 0.3y + 0.6y = 9$，得 $0.3y = 3$，$y = 10$。（45% 恰好是 30% 与 60% 的中点，所以两种溶液各占一半是合理的。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A theater sells 120 tickets for \\$1080. Adult tickets cost \\$12, student tickets \\$8, and child tickets \\$5. The number of adult tickets equals the number of student and child tickets combined. How many child tickets were sold?",
                "zh": "某剧院共售出 120 张票，收入 1080 美元。成人票 12 美元，学生票 8 美元，儿童票 5 美元。成人票的数量等于学生票与儿童票数量之和。售出了多少张儿童票？"
              },
              "choices": [
                "$20$",
                "$30$",
                "$40$",
                "$60$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Let $a$, $s$, $c$ be the ticket counts: $a + s + c = 120$, $12a + 8s + 5c = 1080$, and $a = s + c$. Substituting the third equation into the first gives $2a = 120$, so $a = 60$ and $s + c = 60$. Then $12(60) + 8s + 5c = 1080$ gives $8s + 5c = 360$; with $s = 60 - c$, $480 - 8c + 5c = 360$, so $3c = 120$ and $c = 40$. The distractor 60 is the number of ADULT tickets — answer the question asked.",
                "zh": "设成人、学生、儿童票数为 $a$、$s$、$c$：$a + s + c = 120$，$12a + 8s + 5c = 1080$，且 $a = s + c$。把第三个方程代入第一个得 $2a = 120$，所以 $a = 60$，$s + c = 60$。再由 $12(60) + 8s + 5c = 1080$ 得 $8s + 5c = 360$；代入 $s = 60 - c$：$480 - 8c + 5c = 360$，即 $3c = 120$，$c = 40$。干扰项 60 是成人票的数量——务必回答题目所问。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "quadratics-complex-numbers",
      "title": "Unit 2: Quadratic Functions and Complex Numbers",
      "titleZh": "第二单元：二次函数与复数",
      "lessons": [
        {
          "id": "vertex-form-completing-square",
          "title": "Vertex Form and Completing the Square",
          "titleZh": "顶点式与配方法",
          "content": [
            {
              "type": "h2",
              "en": "Two Forms of a Quadratic",
              "zh": "二次函数的两种形式"
            },
            {
              "type": "p",
              "en": "A quadratic function can be written in standard form $y = ax^2 + bx + c$ or in vertex form $y = a(x-h)^2 + k$. Standard form shows the $y$-intercept $c$ immediately; vertex form shows the vertex $(h, k)$ and the axis of symmetry $x = h$ immediately. Converting between the two is a core Algebra 2 skill.",
              "zh": "二次函数可以写成一般式 $y = ax^2 + bx + c$ 或顶点式 $y = a(x-h)^2 + k$。一般式能直接看出 $y$ 截距 $c$；顶点式能直接看出顶点 $(h, k)$ 和对称轴 $x = h$。两种形式之间的转换是代数二的核心技能。"
            },
            {
              "type": "h2",
              "en": "Completing the Square",
              "zh": "配方法"
            },
            {
              "type": "p",
              "en": "Completing the square rewrites $x^2 + bx$ as a perfect square plus a correction. The key identity: take half the coefficient of $x$, square it, and add and subtract that amount.",
              "zh": "配方法把 $x^2 + bx$ 改写成一个完全平方加上一个修正项。关键步骤是：取 $x$ 的系数的一半，将其平方，然后同时加上并减去这个数。"
            },
            {
              "type": "math",
              "tex": "x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}"
            },
            {
              "type": "note",
              "en": "If the leading coefficient $a$ is not 1, factor it out of the $x^2$ and $x$ terms FIRST, complete the square inside the parentheses, then distribute $a$ back. Forgetting to multiply the correction term by $a$ is the most common error.",
              "zh": "若二次项系数 $a$ 不为 1，必须先把 $a$ 从 $x^2$ 与 $x$ 项中提出，在括号内配方，再把 $a$ 乘回去。最常见的错误就是忘记把修正项乘以 $a$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Write $y = x^2 + 6x + 2$ in vertex form and state the vertex.",
                "zh": "把 $y = x^2 + 6x + 2$ 化为顶点式并写出顶点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Half of 6 is 3, and $3^2 = 9$. Add and subtract 9:",
                  "zh": "6 的一半是 3，$3^2 = 9$。加 9 再减 9："
                },
                {
                  "type": "math",
                  "tex": "y = (x^2 + 6x + 9) + 2 - 9 = (x+3)^2 - 7"
                },
                {
                  "type": "p",
                  "en": "The vertex is $(-3, -7)$ and the parabola opens upward since $a = 1 > 0$.",
                  "zh": "顶点为 $(-3, -7)$；因为 $a = 1 > 0$，抛物线开口向上。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Solve $x^2 - 4x - 5 = 0$ by completing the square.",
                "zh": "用配方法解方程 $x^2 - 4x - 5 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Move the constant: $x^2 - 4x = 5$. Half of $-4$ is $-2$; add $(-2)^2 = 4$ to both sides:",
                  "zh": "移常数项：$x^2 - 4x = 5$。$-4$ 的一半是 $-2$；两边同加 $(-2)^2 = 4$："
                },
                {
                  "type": "math",
                  "tex": "(x-2)^2 = 9"
                },
                {
                  "type": "p",
                  "en": "Take square roots of both sides: $x - 2 = \\pm 3$, so $x = 5$ or $x = -1$.",
                  "zh": "两边开平方：$x - 2 = \\pm 3$，所以 $x = 5$ 或 $x = -1$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Why this matters",
              "zh": "为什么重要"
            },
            {
              "type": "p",
              "en": "Completing the square is more than an algebra trick: it derives the quadratic formula, locates the maximum or minimum of any quadratic model (projectile height, revenue), and later rewrites circle equations into center-radius form. The vertex $x$-coordinate can also be found quickly with the shortcut $h = -\\frac{b}{2a}$.",
              "zh": "配方法不仅是代数技巧：它可以推导求根公式，找出任何二次模型（抛体高度、收益）的最大值或最小值，之后还能把圆的方程化为标准式。顶点的 $x$ 坐标也可以用捷径 $h = -\\frac{b}{2a}$ 快速求出。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the vertex of $y = (x-5)^2 + 2$?",
                "zh": "$y = (x-5)^2 + 2$ 的顶点是？"
              },
              "choices": [
                "$(5, 2)$",
                "$(-5, 2)$",
                "$(5, -2)$",
                "$(2, 5)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Vertex form is $y = a(x-h)^2 + k$ with vertex $(h,k)$. Matching signs: $h = 5$, $k = 2$.",
                "zh": "顶点式为 $y = a(x-h)^2 + k$，顶点是 $(h,k)$。对照符号得 $h = 5$，$k = 2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "To complete the square on $x^2 + 10x$, what number must you add? (enter a number)",
                "zh": "对 $x^2 + 10x$ 配方需要加上哪个数？（输入一个数字）"
              },
              "answer": "25",
              "explanation": {
                "en": "Take half the coefficient of $x$ (half of 10 is 5) and square it: $5^2 = 25$. Then $x^2+10x+25 = (x+5)^2$.",
                "zh": "取 $x$ 系数的一半（10 的一半是 5）再平方：$5^2 = 25$。于是 $x^2+10x+25 = (x+5)^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The axis of symmetry of $y = 2(x+1)^2 - 3$ is…",
                "zh": "$y = 2(x+1)^2 - 3$ 的对称轴是…"
              },
              "choices": [
                "$x = -1$",
                "$x = 1$",
                "$x = -3$",
                "$x = 3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The axis of symmetry passes through the vertex: $x = h$. Since $x+1 = x-(-1)$, we have $h = -1$.",
                "zh": "对称轴经过顶点：$x = h$。由 $x+1 = x-(-1)$ 得 $h = -1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the $x$-coordinate of the vertex of $y = x^2 - 8x + 3$ (enter a number).",
                "zh": "求 $y = x^2 - 8x + 3$ 顶点的 $x$ 坐标（输入一个数字）。"
              },
              "answer": "4",
              "explanation": {
                "en": "Use $h = -\\frac{b}{2a} = -\\frac{-8}{2(1)} = 4$. Completing the square gives the same result: $y = (x-4)^2 - 13$.",
                "zh": "用 $h = -\\frac{b}{2a} = -\\frac{-8}{2(1)} = 4$。配方也得同样结果：$y = (x-4)^2 - 13$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solving $(x+1)^2 = 16$ gives…",
                "zh": "解 $(x+1)^2 = 16$ 得…"
              },
              "choices": [
                "$x = 3$ or $x = -5$",
                "$x = 4$ or $x = -4$",
                "$x = 15$",
                "$x = 3$ only / 仅 $x = 3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Take square roots of BOTH signs: $x+1 = \\pm 4$, so $x = 3$ or $x = -5$. Forgetting the negative root loses a solution.",
                "zh": "开平方时必须取正负两种情况：$x+1 = \\pm 4$，所以 $x = 3$ 或 $x = -5$。忘记负根会丢一个解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The minimum value of $y = (x-2)^2 + 6$ is what number?",
                "zh": "$y = (x-2)^2 + 6$ 的最小值是多少？"
              },
              "answer": "6",
              "explanation": {
                "en": "Since $(x-2)^2 \\ge 0$ for all $x$, the smallest $y$ occurs when $(x-2)^2 = 0$, giving $y = 6$ at the vertex $(2,6)$.",
                "zh": "因为对所有 $x$ 都有 $(x-2)^2 \\ge 0$，当 $(x-2)^2 = 0$ 时 $y$ 最小，在顶点 $(2,6)$ 处取得最小值 $6$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write $y = x^2 + 4x + 9$ in vertex form $(x+a)^2 + k$. Enter the value of $k$.",
                "zh": "把 $y = x^2 + 4x + 9$ 化为顶点式 $(x+a)^2 + k$。请输入 $k$ 的值。"
              },
              "answer": "5",
              "explanation": {
                "en": "Half of 4 is 2, squared is 4: $y = (x^2+4x+4) + 9 - 4 = (x+2)^2 + 5$, so $k = 5$.",
                "zh": "4 的一半是 2，平方是 4：$y = (x^2+4x+4) + 9 - 4 = (x+2)^2 + 5$，所以 $k = 5$。"
              }
            }
          ]
        },
        {
          "id": "discriminant-complex-numbers",
          "title": "The Discriminant and Complex Numbers",
          "titleZh": "判别式与复数",
          "content": [
            {
              "type": "h2",
              "en": "The Quadratic Formula and the Discriminant",
              "zh": "求根公式与判别式"
            },
            {
              "type": "p",
              "en": "Every quadratic equation $ax^2 + bx + c = 0$ is solved by the quadratic formula. The expression under the radical, $b^2 - 4ac$, is called the discriminant and it predicts the type of solutions before you solve.",
              "zh": "每个二次方程 $ax^2 + bx + c = 0$ 都可以用求根公式求解。根号下的式子 $b^2 - 4ac$ 叫做判别式，它可以在解方程之前预测解的类型。"
            },
            {
              "type": "math",
              "tex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $b^2 - 4ac > 0$: two distinct real solutions (parabola crosses the $x$-axis twice).",
                  "zh": "若 $b^2 - 4ac > 0$：两个不同的实数解（抛物线与 $x$ 轴交于两点）。"
                },
                {
                  "en": "If $b^2 - 4ac = 0$: exactly one real solution, a double root (parabola touches the axis).",
                  "zh": "若 $b^2 - 4ac = 0$：恰好一个实数解，即重根（抛物线与 $x$ 轴相切）。"
                },
                {
                  "en": "If $b^2 - 4ac < 0$: no real solutions — two complex conjugate solutions.",
                  "zh": "若 $b^2 - 4ac < 0$：没有实数解——有两个共轭复数解。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Imaginary Unit and Complex Numbers",
              "zh": "虚数单位与复数"
            },
            {
              "type": "p",
              "en": "To handle negative discriminants, mathematicians define the imaginary unit $i$ with the property $i^2 = -1$, so $\\sqrt{-1} = i$ and, for example, $\\sqrt{-9} = 3i$. A complex number has the form $a + bi$ where $a$ is the real part and $b$ is the imaginary part.",
              "zh": "为了处理负的判别式，数学家定义了虚数单位 $i$，满足 $i^2 = -1$，于是 $\\sqrt{-1} = i$，例如 $\\sqrt{-9} = 3i$。复数的形式是 $a + bi$，其中 $a$ 是实部，$b$ 是虚部。"
            },
            {
              "type": "p",
              "en": "Add and subtract complex numbers by combining like parts. Multiply them like binomials, replacing $i^2$ with $-1$ whenever it appears. The conjugate of $a+bi$ is $a-bi$; multiplying a complex number by its conjugate always gives the real number $a^2 + b^2$.",
              "zh": "复数加减法就是把实部与实部、虚部与虚部分别合并。复数乘法像二项式相乘一样展开，出现 $i^2$ 时就换成 $-1$。$a+bi$ 的共轭是 $a-bi$；复数与其共轭相乘总得到实数 $a^2 + b^2$。"
            },
            {
              "type": "note",
              "en": "Powers of $i$ cycle with period 4: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, then the pattern repeats. To simplify $i^n$, divide $n$ by 4 and use the remainder.",
              "zh": "$i$ 的幂以 4 为周期循环：$i^1 = i$，$i^2 = -1$，$i^3 = -i$，$i^4 = 1$，然后重复。化简 $i^n$ 时，用 $n$ 除以 4 的余数判断。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Multiply $(3 + 2i)(1 - 4i)$ and write the result in $a+bi$ form.",
                "zh": "计算 $(3 + 2i)(1 - 4i)$，并写成 $a+bi$ 的形式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute (FOIL):",
                  "zh": "展开（分配律）："
                },
                {
                  "type": "math",
                  "tex": "(3)(1) + (3)(-4i) + (2i)(1) + (2i)(-4i) = 3 - 12i + 2i - 8i^2"
                },
                {
                  "type": "p",
                  "en": "Replace $i^2$ with $-1$: $-8i^2 = 8$. Combine: $3 + 8 - 10i = 11 - 10i$.",
                  "zh": "把 $i^2$ 换成 $-1$：$-8i^2 = 8$。合并得 $3 + 8 - 10i = 11 - 10i$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Solve $x^2 + 2x + 5 = 0$.",
                "zh": "解方程 $x^2 + 2x + 5 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The discriminant is $b^2 - 4ac = 4 - 20 = -16 < 0$, so the solutions are complex.",
                  "zh": "判别式 $b^2 - 4ac = 4 - 20 = -16 < 0$，所以解是复数。"
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{-2 \\pm \\sqrt{-16}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i"
                },
                {
                  "type": "p",
                  "en": "The two solutions $-1+2i$ and $-1-2i$ are complex conjugates, as always happens when a quadratic with real coefficients has a negative discriminant.",
                  "zh": "两个解 $-1+2i$ 与 $-1-2i$ 互为共轭复数——实系数二次方程判别式为负时总是如此。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is $i^2$?",
                "zh": "$i^2$ 等于多少？"
              },
              "choices": [
                "$-1$",
                "$1$",
                "$i$",
                "$-i$"
              ],
              "answer": 0,
              "explanation": {
                "en": "By definition the imaginary unit satisfies $i^2 = -1$; this is the property that makes square roots of negatives possible.",
                "zh": "按定义，虚数单位满足 $i^2 = -1$；正是这一性质使负数开平方成为可能。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Compute the discriminant of $x^2 - 6x + 9 = 0$ (enter a number).",
                "zh": "计算 $x^2 - 6x + 9 = 0$ 的判别式（输入一个数字）。"
              },
              "answer": "0",
              "explanation": {
                "en": "$b^2 - 4ac = (-6)^2 - 4(1)(9) = 36 - 36 = 0$, so the equation has exactly one real (double) root, $x = 3$.",
                "zh": "$b^2 - 4ac = (-6)^2 - 4(1)(9) = 36 - 36 = 0$，方程恰有一个实数重根 $x = 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\sqrt{-25}$.",
                "zh": "化简 $\\sqrt{-25}$。"
              },
              "choices": [
                "$5i$",
                "$-5$",
                "$25i$",
                "$-5i$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\sqrt{-25} = \\sqrt{25}\\cdot\\sqrt{-1} = 5i$. By convention the principal square root uses $+5i$.",
                "zh": "$\\sqrt{-25} = \\sqrt{25}\\cdot\\sqrt{-1} = 5i$。按约定，主平方根取 $+5i$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $(4 + 3i) + (2 - 5i)$?",
                "zh": "$(4 + 3i) + (2 - 5i)$ 等于？"
              },
              "choices": [
                "$6 - 2i$",
                "$6 + 8i$",
                "$2 - 2i$",
                "$6 - 8i$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Add real parts and imaginary parts separately: $(4+2) + (3-5)i = 6 - 2i$.",
                "zh": "实部与虚部分别相加：$(4+2) + (3-5)i = 6 - 2i$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Compute $(2+i)(2-i)$ (enter a number).",
                "zh": "计算 $(2+i)(2-i)$（输入一个数字）。"
              },
              "answer": "5",
              "explanation": {
                "en": "Conjugate pair: $(a+bi)(a-bi) = a^2 + b^2 = 4 + 1 = 5$. Expanding also works: $4 - 2i + 2i - i^2 = 4 + 1 = 5$.",
                "zh": "共轭相乘：$(a+bi)(a-bi) = a^2 + b^2 = 4 + 1 = 5$。直接展开亦可：$4 - 2i + 2i - i^2 = 4 + 1 = 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A quadratic with real coefficients has discriminant $-7$. Its solutions are…",
                "zh": "一个实系数二次方程的判别式为 $-7$，它的解是…"
              },
              "choices": [
                "two complex conjugates / 一对共轭复数",
                "two distinct real numbers / 两个不同实数",
                "one repeated real number / 一个实数重根",
                "no solutions at all / 完全无解"
              ],
              "answer": 0,
              "explanation": {
                "en": "A negative discriminant means $\\sqrt{b^2-4ac}$ is imaginary, so the formula produces $\\frac{-b}{2a} \\pm \\frac{\\sqrt{7}}{2a}i$ — a conjugate pair. The equation still has solutions, just not real ones.",
                "zh": "判别式为负说明 $\\sqrt{b^2-4ac}$ 是虚数，求根公式给出 $\\frac{-b}{2a} \\pm \\frac{\\sqrt{7}}{2a}i$——一对共轭复数。方程仍然有解，只是不是实数解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $i^{10}$. Enter your answer as $1$, $-1$, $i$, or $-i$.",
                "zh": "化简 $i^{10}$。答案输入 $1$、$-1$、$i$ 或 $-i$。"
              },
              "answer": "-1",
              "explanation": {
                "en": "Powers of $i$ cycle every 4. $10 \\div 4$ leaves remainder 2, so $i^{10} = i^2 = -1$.",
                "zh": "$i$ 的幂以 4 为周期。$10 \\div 4$ 余 2，所以 $i^{10} = i^2 = -1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "One solution of $x^2 - 4x + 13 = 0$ is $2 + bi$ with $b > 0$. Enter $b$.",
                "zh": "$x^2 - 4x + 13 = 0$ 的一个解是 $2 + bi$（$b > 0$）。请输入 $b$。"
              },
              "answer": "3",
              "explanation": {
                "en": "Discriminant: $16 - 52 = -36$. Then $x = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$, so $b = 3$.",
                "zh": "判别式：$16 - 52 = -36$。于是 $x = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$，所以 $b = 3$。"
              }
            }
          ]
        },
        {
          "id": "quadratic-modeling-inequalities",
          "title": "Quadratic Modeling, Inequalities, and Systems",
          "titleZh": "二次建模、二次不等式与方程组",
          "content": [
            {
              "type": "h2",
              "en": "Writing a Quadratic from Given Information",
              "zh": "由已知条件建立二次函数"
            },
            {
              "type": "p",
              "en": "A quadratic $y = ax^2 + bx + c$ has three unknown coefficients, so pinning one down takes three pieces of information. The two classic setups are: (1) you know the vertex and one other point, or (2) you know three points on the parabola. Each setup has its own fastest route.",
              "zh": "二次函数 $y = ax^2 + bx + c$ 有三个待定系数，所以确定它需要三条信息。最经典的两种情形是：（1）已知顶点和另一个点；（2）已知抛物线上的三个点。每种情形都有各自最快的解法。"
            },
            {
              "type": "h3",
              "en": "From a vertex and a point",
              "zh": "由顶点和一个点求解"
            },
            {
              "type": "p",
              "en": "If the vertex $(h, k)$ is known, start from vertex form — it builds the vertex in automatically and leaves only one unknown, the stretch factor $a$. Substitute the other point to solve for $a$.",
              "zh": "如果已知顶点 $(h, k)$，就从顶点式出发——顶点信息自动包含在式中，只剩一个未知数：伸缩系数 $a$。把另一个点代入即可解出 $a$。"
            },
            {
              "type": "math",
              "tex": "y = a(x - h)^2 + k"
            },
            {
              "type": "h3",
              "en": "From three points",
              "zh": "由三个点求解"
            },
            {
              "type": "p",
              "en": "With three arbitrary points, substitute each into $y = ax^2 + bx + c$ to get three linear equations in $a$, $b$, $c$, then solve the system. If one of the points has $x = 0$, it hands you $c$ immediately — always look for that shortcut first.",
              "zh": "对于三个任意点，把每个点代入 $y = ax^2 + bx + c$，得到关于 $a$、$b$、$c$ 的三个一次方程，再解这个方程组。如果其中一个点的 $x = 0$，它会直接给出 $c$——一定先找这个捷径。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Find the quadratic function whose graph passes through $(0, 3)$, $(1, 4)$, and $(2, 9)$.",
                "zh": "求图像经过 $(0, 3)$、$(1, 4)$、$(2, 9)$ 的二次函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The point $(0, 3)$ gives $c = 3$ at once. The other two points give a $2\\times 2$ system:",
                  "zh": "点 $(0, 3)$ 立即给出 $c = 3$。另外两点给出一个 $2\\times 2$ 方程组："
                },
                {
                  "type": "math",
                  "tex": "a + b + 3 = 4 \\;\\Rightarrow\\; a + b = 1, \\qquad 4a + 2b + 3 = 9 \\;\\Rightarrow\\; 2a + b = 3"
                },
                {
                  "type": "p",
                  "en": "Subtracting the first from the second: $a = 2$, so $b = -1$. The quadratic is $y = 2x^2 - x + 3$. Check with $(2, 9)$: $2(4) - 2 + 3 = 9$. ✓",
                  "zh": "第二式减第一式得 $a = 2$，于是 $b = -1$。所求二次函数为 $y = 2x^2 - x + 3$。用 $(2, 9)$ 检验：$2(4) - 2 + 3 = 9$，正确。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Projectile and Revenue Models",
              "zh": "抛体与收入模型"
            },
            {
              "type": "p",
              "en": "An object launched upward with initial velocity $v_0$ from initial height $h_0$ follows a quadratic height model (using feet; in meters the leading coefficient is $-4.9$):",
              "zh": "以初速度 $v_0$ 从初始高度 $h_0$ 向上发射的物体，其高度满足二次模型（单位为英尺；若用米，首项系数为 $-4.9$）："
            },
            {
              "type": "math",
              "tex": "h(t) = -16t^2 + v_0 t + h_0"
            },
            {
              "type": "p",
              "en": "Because the parabola opens downward, the vertex is the maximum: the object reaches its highest point at $t = -\\frac{b}{2a} = \\frac{v_0}{32}$, and the maximum height is the value $h$ at that time. The positive zero of $h(t)$ tells you when the object lands. Revenue models work the same way: if raising a price changes the number of units sold linearly, revenue $= (\\text{price})(\\text{quantity})$ is quadratic, and the vertex gives the price that maximizes revenue.",
              "zh": "因为抛物线开口向下，顶点就是最大值：物体在 $t = -\\frac{b}{2a} = \\frac{v_0}{32}$ 时到达最高点，最大高度是该时刻的 $h$ 值。$h(t)$ 的正零点是物体落地的时刻。收入模型的原理相同：若涨价使销量按线性规律变化，则收入 $=$（单价）$\\times$（数量）是二次函数，顶点给出使收入最大的定价。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "A ball is thrown upward from a height of 5 feet with initial velocity 64 ft/s, so $h(t) = -16t^2 + 64t + 5$. Find the time at which the ball reaches its maximum height, and the maximum height.",
                "zh": "一个球从 5 英尺高处以 64 英尺/秒的初速度竖直上抛，故 $h(t) = -16t^2 + 64t + 5$。求球到达最高点的时刻及最大高度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The vertex occurs at $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ seconds.",
                  "zh": "顶点位于 $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ 秒处。"
                },
                {
                  "type": "math",
                  "tex": "h(2) = -16(4) + 64(2) + 5 = -64 + 128 + 5 = 69"
                },
                {
                  "type": "p",
                  "en": "The ball peaks 2 seconds after launch at a height of 69 feet. Interpret both coordinates: the $t$-value answers \"when,\" and the $h$-value answers \"how high.\"",
                  "zh": "球在抛出 2 秒后到达最高点，高度为 69 英尺。要正确解读顶点的两个坐标：$t$ 值回答\"何时\"，$h$ 值回答\"多高\"。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: reporting the wrong vertex coordinate. If the question asks for the maximum HEIGHT, the answer is $h(-\\frac{b}{2a})$, not $-\\frac{b}{2a}$ itself. Underline what the question asks — \"when\" means the $t$-coordinate, \"how high\" or \"maximum value\" means the output.",
              "zh": "常见错误：报错顶点坐标。若题目问最大高度，答案是 $h(-\\frac{b}{2a})$，而不是 $-\\frac{b}{2a}$ 本身。把题目问的内容划出来——\"何时\"对应 $t$ 坐标，\"多高\"或\"最大值\"对应函数值。"
            },
            {
              "type": "h2",
              "en": "Quadratic Inequalities",
              "zh": "二次不等式"
            },
            {
              "type": "p",
              "en": "To solve an inequality like $ax^2 + bx + c > 0$, first solve the EQUATION $ax^2 + bx + c = 0$. The roots split the number line into intervals, and on each interval the quadratic keeps one sign. Picture the parabola: an upward-opening parabola is negative between its roots and positive outside them; a downward-opening parabola is the reverse.",
              "zh": "解形如 $ax^2 + bx + c > 0$ 的不等式，先解方程 $ax^2 + bx + c = 0$。根把数轴分成若干区间，在每个区间上二次式的符号保持不变。想象抛物线的图像：开口向上的抛物线在两根之间为负、两根之外为正；开口向下的抛物线正好相反。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Move everything to one side so the inequality compares with 0.",
                  "zh": "第一步：把所有项移到一边，使不等式与 0 比较。"
                },
                {
                  "en": "Step 2: Find the roots by factoring or the quadratic formula.",
                  "zh": "第二步：用因式分解或求根公式求出根。"
                },
                {
                  "en": "Step 3: Sketch the parabola (or test a point in each interval) and read off where it is above or below the axis.",
                  "zh": "第三步：画出抛物线草图（或在每个区间取一点检验），读出图像在轴上方或下方的区间。"
                },
                {
                  "en": "Step 4: Decide whether the endpoints are included: $\\le$ and $\\ge$ include the roots; $<$ and $>$ exclude them.",
                  "zh": "第四步：判断端点是否包含：$\\le$ 和 $\\ge$ 包含根；$<$ 和 $>$ 不包含。"
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
                "en": "Solve $x^2 - x - 6 > 0$.",
                "zh": "解不等式 $x^2 - x - 6 > 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor: $(x - 3)(x + 2) = 0$ gives roots $x = -2$ and $x = 3$. The parabola opens upward, so it is positive OUTSIDE the roots.",
                  "zh": "因式分解：$(x - 3)(x + 2) = 0$，得根 $x = -2$ 和 $x = 3$。抛物线开口向上，所以在两根之外取正值。"
                },
                {
                  "type": "math",
                  "tex": "x < -2 \\quad \\text{or} \\quad x > 3"
                },
                {
                  "type": "p",
                  "en": "Sanity check with $x = 0$ (between the roots): $0 - 0 - 6 = -6 < 0$, so the middle interval is correctly excluded. Because the inequality is strict, the endpoints $-2$ and $3$ are not included.",
                  "zh": "取两根之间的 $x = 0$ 检验：$0 - 0 - 6 = -6 < 0$，说明中间区间确实应被排除。由于是严格不等号，端点 $-2$ 和 $3$ 不包含在解集中。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: on multiple-choice questions the interval endpoints are almost always correct in every option — what varies is \"between the roots\" versus \"outside the roots\" and open versus closed endpoints. A 5-second test of $x = 0$ (when 0 is not a root) settles the between/outside question instantly.",
              "zh": "考试提示：选择题中各选项的区间端点几乎都是对的——不同之处在于\"两根之间\"还是\"两根之外\"，以及端点开闭。只要 0 不是根，花 5 秒代入 $x = 0$ 检验，立刻就能确定是\"之间\"还是\"之外\"。"
            },
            {
              "type": "h2",
              "en": "Linear–Quadratic Systems",
              "zh": "一次—二次方程组"
            },
            {
              "type": "p",
              "en": "A system pairing a line with a parabola, such as $y = x^2 + bx + c$ and $y = mx + k$, is solved by substitution: set the two expressions for $y$ equal, collect everything on one side, and solve the resulting quadratic. Each real solution $x$ gives one intersection point (remember to find $y$ too).",
              "zh": "由一条直线和一条抛物线组成的方程组，例如 $y = x^2 + bx + c$ 与 $y = mx + k$，用代入法求解：令两个 $y$ 的表达式相等，把所有项移到一边，解所得的二次方程。每个实数解 $x$ 对应一个交点（别忘了求出对应的 $y$）。"
            },
            {
              "type": "p",
              "en": "The number of intersection points is controlled by the discriminant of that quadratic: two points if $b^2 - 4ac > 0$, exactly one (the line is tangent to the parabola) if $b^2 - 4ac = 0$, and none if $b^2 - 4ac < 0$. Geometrically, a line can cross a parabola twice, graze it once, or miss it entirely — never more than twice.",
              "zh": "交点个数由该二次方程的判别式决定：$b^2 - 4ac > 0$ 时有两个交点；$b^2 - 4ac = 0$ 时恰有一个交点（直线与抛物线相切）；$b^2 - 4ac < 0$ 时没有交点。从几何上看，直线与抛物线要么相交于两点，要么相切于一点，要么完全不相交——绝不会超过两个交点。"
            },
            {
              "type": "math",
              "tex": "b^2 - 4ac > 0 \\Rightarrow 2 \\text{ points}, \\qquad b^2 - 4ac = 0 \\Rightarrow 1 \\text{ point}, \\qquad b^2 - 4ac < 0 \\Rightarrow 0 \\text{ points}"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A parabola has vertex $(2, -1)$ and passes through $(0, 7)$. Which equation represents it?",
                "zh": "某抛物线的顶点为 $(2, -1)$，且经过点 $(0, 7)$。下列哪个方程表示这条抛物线？"
              },
              "choices": [
                "$y = -2(x - 2)^2 - 1$",
                "$y = 2(x + 2)^2 - 1$",
                "$y = 2(x - 2)^2 - 1$",
                "$y = (x - 2)^2 + 7$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Vertex form gives $y = a(x - 2)^2 - 1$. Substituting $(0, 7)$: $7 = a(4) - 1$, so $a = 2$ and $y = 2(x - 2)^2 - 1$. Choice $y = 2(x + 2)^2 - 1$ is tempting because of the sign convention: the vertex $x$-coordinate 2 appears as $(x - 2)$, not $(x + 2)$.",
                "zh": "由顶点式得 $y = a(x - 2)^2 - 1$。代入 $(0, 7)$：$7 = 4a - 1$，所以 $a = 2$，$y = 2(x - 2)^2 - 1$。选项 $y = 2(x + 2)^2 - 1$ 有迷惑性，原因在符号约定：顶点横坐标 2 应写成 $(x - 2)$，而不是 $(x + 2)$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The parabola $y = ax^2 + bx + c$ passes through $(0, 1)$, $(1, 2)$, and $(2, 7)$. Find the value of $a$. Give an integer.",
                "zh": "抛物线 $y = ax^2 + bx + c$ 经过 $(0, 1)$、$(1, 2)$、$(2, 7)$。求 $a$ 的值。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "From $(0, 1)$, $c = 1$. Then $(1, 2)$ gives $a + b = 1$ and $(2, 7)$ gives $4a + 2b = 6$, i.e. $2a + b = 3$. Subtracting, $a = 2$ (and $b = -1$). Check: $y = 2x^2 - x + 1$ passes through $(2, 7)$: $8 - 2 + 1 = 7$. ✓",
                "zh": "由 $(0, 1)$ 得 $c = 1$。再由 $(1, 2)$ 得 $a + b = 1$，由 $(2, 7)$ 得 $4a + 2b = 6$，即 $2a + b = 3$。两式相减得 $a = 2$（进而 $b = -1$）。检验：$y = 2x^2 - x + 1$ 经过 $(2, 7)$：$8 - 2 + 1 = 7$，正确。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rocket's height is $h(t) = -16t^2 + 48t + 4$ feet after $t$ seconds. At what time does it reach its maximum height?",
                "zh": "火箭发射 $t$ 秒后的高度为 $h(t) = -16t^2 + 48t + 4$ 英尺。它在何时到达最高点？"
              },
              "choices": [
                "$t = 1.5$ s",
                "$t = 3$ s",
                "$t = 48$ s",
                "$t = 16$ s"
              ],
              "answer": 0,
              "explanation": {
                "en": "The vertex is at $t = -\\frac{b}{2a} = -\\frac{48}{2(-16)} = 1.5$ seconds. Choice $t = 3$ is tempting because it is the time the rocket returns to its launch height ($-16t^2 + 48t = 0$ at $t = 3$) — the peak happens halfway there.",
                "zh": "顶点在 $t = -\\frac{b}{2a} = -\\frac{48}{2(-16)} = 1.5$ 秒处。选项 $t = 3$ 有迷惑性，因为那是火箭回到发射高度的时刻（$-16t^2 + 48t = 0$ 在 $t = 3$ 时成立）——最高点出现在中途。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using the same model $h(t) = -16t^2 + 48t + 4$, find the maximum height in feet. Give an integer.",
                "zh": "仍用模型 $h(t) = -16t^2 + 48t + 4$，求最大高度（单位：英尺）。请填一个整数。"
              },
              "answer": "40",
              "accept": [
                "40.0"
              ],
              "explanation": {
                "en": "Evaluate at the vertex time $t = 1.5$: $h(1.5) = -16(2.25) + 48(1.5) + 4 = -36 + 72 + 4 = 40$ feet. The maximum height is the OUTPUT of the function at the vertex, not the vertex time itself.",
                "zh": "在顶点时刻 $t = 1.5$ 处求值：$h(1.5) = -16(2.25) + 48(1.5) + 4 = -36 + 72 + 4 = 40$ 英尺。最大高度是顶点处的函数值，而不是顶点时刻本身。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve the inequality $x^2 - 9 \\le 0$.",
                "zh": "解不等式 $x^2 - 9 \\le 0$。"
              },
              "choices": [
                "$x \\le -3$ or $x \\ge 3$",
                "$x \\ge 3$",
                "All real numbers / 全体实数",
                "$-3 \\le x \\le 3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The roots are $x = \\pm 3$ and the parabola opens upward, so it is at or below zero BETWEEN the roots: $-3 \\le x \\le 3$. Test $x = 0$: $-9 \\le 0$. ✓ The first choice is the solution of the OPPOSITE inequality $x^2 - 9 \\ge 0$ — the classic between/outside mix-up.",
                "zh": "根为 $x = \\pm 3$，抛物线开口向上，所以在两根之间函数值小于等于零：$-3 \\le x \\le 3$。代入 $x = 0$ 检验：$-9 \\le 0$，正确。第一个选项是相反不等式 $x^2 - 9 \\ge 0$ 的解——典型的\"之间/之外\"混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A shop finds that at price $p$ dollars it sells $100 - 2p$ posters per week, so weekly revenue is $R(p) = p(100 - 2p)$. What price maximizes revenue?",
                "zh": "某商店发现定价为 $p$ 美元时每周可售出 $100 - 2p$ 张海报，故每周收入为 $R(p) = p(100 - 2p)$。定价多少时收入最大？"
              },
              "choices": [
                "$p = 20$",
                "$p = 25$",
                "$p = 50$",
                "$p = 100$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Expand: $R(p) = -2p^2 + 100p$, a downward parabola with vertex at $p = -\\frac{100}{2(-2)} = 25$ dollars. Choice $p = 50$ is tempting because it is a zero of $R$ (revenue is 0 when nobody buys) — the maximum sits midway between the zeros $p = 0$ and $p = 50$.",
                "zh": "展开得 $R(p) = -2p^2 + 100p$，开口向下，顶点在 $p = -\\frac{100}{2(-2)} = 25$ 美元处。选项 $p = 50$ 有迷惑性，因为它是 $R$ 的零点（没人购买时收入为 0）——最大值位于零点 $p = 0$ 和 $p = 50$ 的正中间。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many points of intersection do $y = x^2 - 4x + 7$ and $y = 2x - 2$ have? Give an integer (0, 1, or 2).",
                "zh": "$y = x^2 - 4x + 7$ 与 $y = 2x - 2$ 有几个交点？请填一个整数（0、1 或 2）。"
              },
              "answer": "1",
              "explanation": {
                "en": "Set them equal: $x^2 - 4x + 7 = 2x - 2$, so $x^2 - 6x + 9 = 0$, i.e. $(x - 3)^2 = 0$. The discriminant is $36 - 36 = 0$, so there is exactly one solution: the line is tangent to the parabola at $(3, 4)$.",
                "zh": "令两式相等：$x^2 - 4x + 7 = 2x - 2$，即 $x^2 - 6x + 9 = 0$，也就是 $(x - 3)^2 = 0$。判别式为 $36 - 36 = 0$，恰有一个解：直线与抛物线相切于 $(3, 4)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For which value(s) of $k$ does the line $y = 2x + 1$ intersect the parabola $y = x^2 + kx + 5$ in exactly ONE point?",
                "zh": "当 $k$ 取何值时，直线 $y = 2x + 1$ 与抛物线 $y = x^2 + kx + 5$ 恰好有一个交点？"
              },
              "choices": [
                "$k = 2$ only / 仅 $k = 2$",
                "$k = 4$ or $k = -4$",
                "$k = 6$ or $k = -2$",
                "$k = 6$ only / 仅 $k = 6$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Setting the expressions equal: $x^2 + kx + 5 = 2x + 1$, so $x^2 + (k - 2)x + 4 = 0$. Exactly one intersection requires discriminant zero: $(k - 2)^2 - 16 = 0$, so $k - 2 = \\pm 4$, giving $k = 6$ or $k = -2$. Choice \"$k = 4$ or $k = -4$\" comes from solving $(k)^2 = 16$ — forgetting to subtract the line's coefficient 2 before squaring.",
                "zh": "令两式相等：$x^2 + kx + 5 = 2x + 1$，即 $x^2 + (k - 2)x + 4 = 0$。恰有一个交点要求判别式为零：$(k - 2)^2 - 16 = 0$，所以 $k - 2 = \\pm 4$，得 $k = 6$ 或 $k = -2$。选项\"$k = 4$ 或 $k = -4$\"来自直接解 $k^2 = 16$——忘了先减去直线的系数 2 再平方。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "polynomial-functions",
      "title": "Unit 3: Polynomial Functions",
      "titleZh": "第三单元：多项式函数",
      "lessons": [
        {
          "id": "end-behavior-graphs",
          "title": "End Behavior, Zeros, and Graphs",
          "titleZh": "端部趋势、零点与图像",
          "content": [
            {
              "type": "h2",
              "en": "Anatomy of a Polynomial",
              "zh": "多项式的结构"
            },
            {
              "type": "p",
              "en": "A polynomial function has the form $f(x) = a_n x^n + \\dots + a_1 x + a_0$. The degree $n$ is the highest power of $x$, and $a_n$ is the leading coefficient. These two numbers control the overall shape of the graph, especially its end behavior — what the graph does as $x \\to \\infty$ and $x \\to -\\infty$.",
              "zh": "多项式函数的形式是 $f(x) = a_n x^n + \\dots + a_1 x + a_0$。次数 $n$ 是 $x$ 的最高次幂，$a_n$ 是首项系数。这两个数决定图像的整体形状，尤其是端部趋势——当 $x \\to \\infty$ 和 $x \\to -\\infty$ 时图像的走向。"
            },
            {
              "type": "h3",
              "en": "The end behavior rules",
              "zh": "端部趋势法则"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Even degree, positive leading coefficient: both ends rise (like $x^2$).",
                  "zh": "偶次、首项系数为正：两端都上升（像 $x^2$）。"
                },
                {
                  "en": "Even degree, negative leading coefficient: both ends fall.",
                  "zh": "偶次、首项系数为负：两端都下降。"
                },
                {
                  "en": "Odd degree, positive leading coefficient: falls left, rises right (like $x^3$).",
                  "zh": "奇次、首项系数为正：左端下降，右端上升（像 $x^3$）。"
                },
                {
                  "en": "Odd degree, negative leading coefficient: rises left, falls right.",
                  "zh": "奇次、首项系数为负：左端上升，右端下降。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Zeros and Multiplicity",
              "zh": "零点与重数"
            },
            {
              "type": "p",
              "en": "A zero of $f$ is a value $c$ with $f(c) = 0$; it corresponds to the factor $(x - c)$ and an $x$-intercept of the graph. The multiplicity of a zero is how many times its factor appears. At a zero of odd multiplicity the graph crosses the $x$-axis; at a zero of even multiplicity it touches the axis and turns around.",
              "zh": "$f$ 的零点是使 $f(c) = 0$ 的值 $c$；它对应因式 $(x - c)$ 和图像的一个 $x$ 截点。零点的重数是其因式出现的次数。在奇数重数的零点处，图像穿过 $x$ 轴；在偶数重数的零点处，图像与 $x$ 轴相切后折返。"
            },
            {
              "type": "note",
              "en": "A degree-$n$ polynomial has at most $n$ real zeros and at most $n-1$ turning points. Counting multiplicity and allowing complex zeros, it has exactly $n$ zeros — this is the Fundamental Theorem of Algebra.",
              "zh": "$n$ 次多项式至多有 $n$ 个实零点、至多 $n-1$ 个转折点。若计入重数并允许复数零点，它恰好有 $n$ 个零点——这就是代数基本定理。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Describe the end behavior of $f(x) = -3x^4 + 5x^2 - 1$.",
                "zh": "描述 $f(x) = -3x^4 + 5x^2 - 1$ 的端部趋势。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Only the leading term $-3x^4$ matters for end behavior. The degree 4 is even and the leading coefficient $-3$ is negative, so both ends fall:",
                  "zh": "端部趋势只由首项 $-3x^4$ 决定。次数 4 为偶数，首项系数 $-3$ 为负，所以两端都下降："
                },
                {
                  "type": "math",
                  "tex": "f(x) \\to -\\infty \\text{ as } x \\to -\\infty \\quad\\text{and}\\quad f(x) \\to -\\infty \\text{ as } x \\to \\infty"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Sketch $f(x) = (x+2)(x-1)^2$: find the zeros, their multiplicities, and the end behavior.",
                "zh": "作 $f(x) = (x+2)(x-1)^2$ 的草图：求零点、重数与端部趋势。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Zeros: $x = -2$ (multiplicity 1, graph crosses) and $x = 1$ (multiplicity 2, graph touches and bounces).",
                  "zh": "零点：$x = -2$（重数 1，图像穿过）和 $x = 1$（重数 2，图像相切后反弹）。"
                },
                {
                  "type": "p",
                  "en": "The degree is $1 + 2 = 3$ (odd) with positive leading coefficient, so the graph falls to the left and rises to the right. It crosses at $-2$, rises to a local max, comes down to touch the axis at $1$, then rises again.",
                  "zh": "次数为 $1 + 2 = 3$（奇数），首项系数为正，所以图像左降右升。它在 $-2$ 处穿过 $x$ 轴，升到局部最大值后下降，在 $1$ 处触轴反弹，然后再次上升。"
                }
              ]
            },
            {
              "type": "p",
              "en": "To finish a sketch, plot the $y$-intercept by evaluating $f(0)$ — here $f(0) = (2)(-1)^2 = 2$ — and connect the pieces with a smooth, continuous curve. Polynomial graphs never have breaks, holes, or sharp corners.",
              "zh": "完成草图时，计算 $f(0)$ 得到 $y$ 截点——这里 $f(0) = (2)(-1)^2 = 2$——再用平滑连续的曲线把各部分连起来。多项式图像绝不会有断点、洞或尖角。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the degree of $f(x) = 7x^3 - 2x^5 + 1$?",
                "zh": "$f(x) = 7x^3 - 2x^5 + 1$ 的次数是多少？"
              },
              "choices": [
                "5",
                "3",
                "7",
                "2"
              ],
              "answer": 0,
              "explanation": {
                "en": "The degree is the highest exponent regardless of the order the terms are written in. The highest power is $x^5$, so the degree is 5 and the leading coefficient is $-2$.",
                "zh": "次数是最高的指数，与各项书写顺序无关。最高次幂是 $x^5$，所以次数为 5，首项系数为 $-2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "As $x \\to \\infty$, the graph of $f(x) = -x^3 + 4x$ …",
                "zh": "当 $x \\to \\infty$ 时，$f(x) = -x^3 + 4x$ 的图像…"
              },
              "choices": [
                "falls ($f(x) \\to -\\infty$) / 下降",
                "rises ($f(x) \\to \\infty$) / 上升",
                "approaches 0 / 趋于 0",
                "oscillates / 振荡"
              ],
              "answer": 0,
              "explanation": {
                "en": "End behavior follows the leading term $-x^3$: odd degree with negative coefficient falls to the right. For large $x$, $-x^3$ dominates $4x$.",
                "zh": "端部趋势由首项 $-x^3$ 决定：奇次、负系数时右端下降。当 $x$ 很大时 $-x^3$ 远大于 $4x$ 的影响。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many zeros (counting multiplicity, including complex) does a degree-6 polynomial have? (enter a number)",
                "zh": "一个 6 次多项式共有多少个零点（计重数、含复数零点）？（输入一个数字）"
              },
              "answer": "6",
              "explanation": {
                "en": "The Fundamental Theorem of Algebra guarantees a degree-$n$ polynomial has exactly $n$ zeros when multiplicity and complex zeros are counted.",
                "zh": "代数基本定理保证：计入重数并包含复数零点时，$n$ 次多项式恰有 $n$ 个零点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At a zero of multiplicity 2, the graph of a polynomial…",
                "zh": "在重数为 2 的零点处，多项式的图像…"
              },
              "choices": [
                "touches the $x$-axis and turns around / 触轴后折返",
                "crosses the $x$-axis / 穿过 $x$ 轴",
                "has a vertical asymptote / 有竖直渐近线",
                "has a hole / 有洞"
              ],
              "answer": 0,
              "explanation": {
                "en": "Even multiplicity means the factor is squared, so the output does not change sign at that zero — the graph bounces off the axis. Odd multiplicity crosses. Asymptotes and holes belong to rational functions, not polynomials.",
                "zh": "偶数重数意味着因式带平方，函数值在该零点处不变号——图像触轴反弹。奇数重数才穿过。渐近线和洞属于有理函数，多项式没有。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "List the largest zero of $f(x) = x(x-3)(x+5)$ (enter a number).",
                "zh": "写出 $f(x) = x(x-3)(x+5)$ 最大的零点（输入一个数字）。"
              },
              "answer": "3",
              "explanation": {
                "en": "Set each factor to zero: $x = 0$, $x = 3$, $x = -5$. The largest is 3.",
                "zh": "令每个因式为零：$x = 0$、$x = 3$、$x = -5$。最大的是 3。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the maximum number of turning points of a degree-5 polynomial? (enter a number)",
                "zh": "5 次多项式最多有几个转折点？（输入一个数字）"
              },
              "answer": "4",
              "explanation": {
                "en": "A degree-$n$ polynomial has at most $n - 1$ turning points, so a quintic has at most 4. Each turning point sits between consecutive changes of direction.",
                "zh": "$n$ 次多项式至多有 $n - 1$ 个转折点，所以 5 次多项式至多 4 个。每个转折点位于相邻两次方向改变之间。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which polynomial has both ends rising?",
                "zh": "哪个多项式的图像两端都上升？"
              },
              "choices": [
                "$y = 2x^4 - x$",
                "$y = -2x^4 + x$",
                "$y = 2x^3 - x$",
                "$y = -2x^3 + x$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Both ends rise only for even degree with positive leading coefficient: $2x^4$ qualifies. Odd-degree graphs always have ends going opposite directions.",
                "zh": "只有偶次且首项系数为正时两端才都上升：$2x^4$ 符合。奇次多项式的两端必然朝相反方向。"
              }
            }
          ]
        },
        {
          "id": "division-remainder-factor",
          "title": "Polynomial Division and the Remainder and Factor Theorems",
          "titleZh": "多项式除法与余数定理、因式定理",
          "content": [
            {
              "type": "h2",
              "en": "Dividing Polynomials",
              "zh": "多项式除法"
            },
            {
              "type": "p",
              "en": "Polynomial long division works like numeric long division: divide the leading terms, multiply back, subtract, bring down, repeat. The result is written as $\\frac{f(x)}{d(x)} = q(x) + \\frac{r(x)}{d(x)}$, where the degree of the remainder $r$ is less than the degree of the divisor $d$.",
              "zh": "多项式长除法与数字长除法类似：首项相除、乘回、相减、落下下一项、重复。结果写成 $\\frac{f(x)}{d(x)} = q(x) + \\frac{r(x)}{d(x)}$，其中余式 $r$ 的次数小于除式 $d$ 的次数。"
            },
            {
              "type": "p",
              "en": "When the divisor has the form $x - c$, synthetic division is a faster shortcut: write the coefficients, bring down the first, multiply by $c$ and add, repeating across the row. The final number is the remainder.",
              "zh": "当除式形如 $x - c$ 时，综合除法是更快的捷径：写出各项系数，落下第一个，乘以 $c$ 后与下一个相加，如此重复。最后得到的数就是余数。"
            },
            {
              "type": "h2",
              "en": "Two Powerful Theorems",
              "zh": "两个重要定理"
            },
            {
              "type": "p",
              "en": "The Remainder Theorem says the remainder when $f(x)$ is divided by $x - c$ equals $f(c)$. The Factor Theorem is the special case where the remainder is zero: $x - c$ is a factor of $f(x)$ if and only if $f(c) = 0$.",
              "zh": "余数定理指出：$f(x)$ 除以 $x - c$ 的余数等于 $f(c)$。因式定理是余数为零的特例：$x - c$ 是 $f(x)$ 的因式，当且仅当 $f(c) = 0$。"
            },
            {
              "type": "note",
              "en": "When using synthetic division with divisor $x - c$, use $c$ itself, not $-c$. Dividing by $x + 2$ means $c = -2$. Also remember to insert a 0 coefficient for any missing power of $x$.",
              "zh": "用综合除法除以 $x - c$ 时，使用的是 $c$ 本身而不是 $-c$。除以 $x + 2$ 意味着 $c = -2$。另外，缺少的 $x$ 幂次必须补上系数 0。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Use synthetic division to divide $f(x) = x^3 - 4x^2 + x + 6$ by $x - 2$.",
                "zh": "用综合除法计算 $f(x) = x^3 - 4x^2 + x + 6$ 除以 $x - 2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Coefficients: $1, -4, 1, 6$ with $c = 2$. Bring down 1; $1 \\cdot 2 = 2$, $-4 + 2 = -2$; $-2 \\cdot 2 = -4$, $1 + (-4) = -3$; $-3 \\cdot 2 = -6$, $6 + (-6) = 0$.",
                  "zh": "系数为 $1, -4, 1, 6$，$c = 2$。落下 1；$1 \\cdot 2 = 2$，$-4 + 2 = -2$；$-2 \\cdot 2 = -4$，$1 + (-4) = -3$；$-3 \\cdot 2 = -6$，$6 + (-6) = 0$。"
                },
                {
                  "type": "math",
                  "tex": "x^3 - 4x^2 + x + 6 = (x-2)(x^2 - 2x - 3)"
                },
                {
                  "type": "p",
                  "en": "The remainder is 0, so $x-2$ is a factor. Factoring further: $x^2 - 2x - 3 = (x-3)(x+1)$, so the zeros of $f$ are $2, 3, -1$.",
                  "zh": "余数为 0，所以 $x-2$ 是因式。继续分解：$x^2 - 2x - 3 = (x-3)(x+1)$，因此 $f$ 的零点为 $2, 3, -1$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Without dividing, find the remainder when $f(x) = 2x^3 + x - 5$ is divided by $x + 1$.",
                "zh": "不做除法，求 $f(x) = 2x^3 + x - 5$ 除以 $x + 1$ 的余数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $x + 1 = x - (-1)$, so $c = -1$. By the Remainder Theorem the remainder is $f(-1)$:",
                  "zh": "这里 $x + 1 = x - (-1)$，所以 $c = -1$。由余数定理，余数等于 $f(-1)$："
                },
                {
                  "type": "math",
                  "tex": "f(-1) = 2(-1)^3 + (-1) - 5 = -2 - 1 - 5 = -8"
                },
                {
                  "type": "p",
                  "en": "The remainder is $-8$. Since it is not zero, $x+1$ is not a factor of $f$.",
                  "zh": "余数为 $-8$。因为不为零，$x+1$ 不是 $f$ 的因式。"
                }
              ]
            },
            {
              "type": "p",
              "en": "These theorems power the standard strategy for solving higher-degree equations: test candidate rational zeros, divide out each factor you find, and finish by solving the remaining quadratic.",
              "zh": "这些定理支撑着解高次方程的标准策略：检验候选有理零点，除去找到的每个因式，最后解剩下的二次方程。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The remainder when $f(x)$ is divided by $x - 3$ equals…",
                "zh": "$f(x)$ 除以 $x - 3$ 的余数等于…"
              },
              "choices": [
                "$f(3)$",
                "$f(-3)$",
                "$f(0)$",
                "$3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "This is exactly the Remainder Theorem: dividing by $x - c$ leaves remainder $f(c)$, so with $c = 3$ the remainder is $f(3)$.",
                "zh": "这正是余数定理：除以 $x - c$ 的余数是 $f(c)$，这里 $c = 3$，余数为 $f(3)$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the remainder when $f(x) = x^2 + 3x + 1$ is divided by $x - 1$ (enter a number).",
                "zh": "求 $f(x) = x^2 + 3x + 1$ 除以 $x - 1$ 的余数（输入一个数字）。"
              },
              "answer": "5",
              "explanation": {
                "en": "By the Remainder Theorem the remainder is $f(1) = 1 + 3 + 1 = 5$ — no division needed.",
                "zh": "由余数定理，余数为 $f(1) = 1 + 3 + 1 = 5$——无需做除法。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f(-4) = 0$, which of the following must be a factor of $f(x)$?",
                "zh": "若 $f(-4) = 0$，下列哪个一定是 $f(x)$ 的因式？"
              },
              "choices": [
                "$x + 4$",
                "$x - 4$",
                "$4x$",
                "$x^2 - 4$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The Factor Theorem: $f(c) = 0$ means $x - c$ is a factor. With $c = -4$, the factor is $x - (-4) = x + 4$.",
                "zh": "因式定理：$f(c) = 0$ 意味着 $x - c$ 是因式。$c = -4$ 时因式为 $x - (-4) = x + 4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Is $x - 2$ a factor of $x^3 - 8$? Answer yes or no.",
                "zh": "$x - 2$ 是 $x^3 - 8$ 的因式吗？回答 yes 或 no。"
              },
              "answer": "yes",
              "accept": [
                "y",
                "Yes"
              ],
              "explanation": {
                "en": "Test $f(2) = 8 - 8 = 0$, so by the Factor Theorem $x - 2$ is a factor. Indeed $x^3 - 8 = (x-2)(x^2+2x+4)$, the difference of cubes.",
                "zh": "检验 $f(2) = 8 - 8 = 0$，由因式定理 $x - 2$ 是因式。实际上 $x^3 - 8 = (x-2)(x^2+2x+4)$，即立方差公式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "When dividing by $x + 5$ with synthetic division, what number goes in the box?",
                "zh": "用综合除法除以 $x + 5$ 时，方框里应填哪个数？"
              },
              "choices": [
                "$-5$",
                "$5$",
                "$\\frac{1}{5}$",
                "$0$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Synthetic division uses $c$ from the form $x - c$. Since $x + 5 = x - (-5)$, use $c = -5$. Using $+5$ is the classic sign error.",
                "zh": "综合除法使用 $x - c$ 中的 $c$。因为 $x + 5 = x - (-5)$，应填 $c = -5$。填 $+5$ 是典型的符号错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Divide $x^2 + 5x + 6$ by $x + 2$. The quotient is $x + a$; enter $a$.",
                "zh": "用 $x + 2$ 除 $x^2 + 5x + 6$。商为 $x + a$；请输入 $a$。"
              },
              "answer": "3",
              "explanation": {
                "en": "Factor: $x^2 + 5x + 6 = (x+2)(x+3)$, so dividing by $x+2$ leaves quotient $x+3$ with remainder 0. Thus $a = 3$.",
                "zh": "分解因式：$x^2 + 5x + 6 = (x+2)(x+3)$，除以 $x+2$ 得商 $x+3$，余数 0。所以 $a = 3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given that $x = 1$ is a zero of $f(x) = x^3 - 6x^2 + 11x - 6$, find the LARGEST zero (enter a number).",
                "zh": "已知 $x = 1$ 是 $f(x) = x^3 - 6x^2 + 11x - 6$ 的零点，求最大的零点（输入一个数字）。"
              },
              "answer": "3",
              "explanation": {
                "en": "Synthetic division by $x-1$ gives quotient $x^2 - 5x + 6 = (x-2)(x-3)$. The zeros are $1, 2, 3$; the largest is 3.",
                "zh": "用 $x-1$ 综合除法得商 $x^2 - 5x + 6 = (x-2)(x-3)$。零点为 $1, 2, 3$；最大是 3。"
              }
            }
          ]
        },
        {
          "id": "solving-polynomial-equations",
          "title": "Solving Polynomial Equations",
          "titleZh": "解多项式方程",
          "content": [
            {
              "type": "h2",
              "en": "From Factoring to Roots",
              "zh": "从因式分解到方程的根"
            },
            {
              "type": "p",
              "en": "Solving a polynomial equation $P(x)=0$ means finding every value of $x$ that makes the polynomial zero. Because a product is zero exactly when one of its factors is zero, our master strategy is always the same: move everything to one side, factor completely, and set each factor equal to zero. The new challenge in this lesson is factoring polynomials of degree 3 and higher, where no single formula does the job — you need a toolbox of techniques and a systematic way to hunt for roots.",
              "zh": "解多项式方程 $P(x)=0$ 就是找出所有使多项式等于零的 $x$ 值。因为乘积为零当且仅当某个因式为零，所以主策略始终不变：把所有项移到一边、彻底因式分解、令每个因式等于零。本课的新挑战是分解三次及更高次的多项式——没有一个万能公式，你需要一整套技巧和系统地寻找根的方法。"
            },
            {
              "type": "h3",
              "en": "The factoring toolbox for higher degrees",
              "zh": "高次多项式的因式分解工具箱"
            },
            {
              "type": "p",
              "en": "Always start by factoring out the greatest common factor (GCF). For a four-term polynomial, try factoring by grouping: pair the terms, factor each pair, and look for a common binomial factor.",
              "zh": "永远先提取最大公因式（GCF）。对四项多项式，尝试分组分解：把项两两配对，分别提取公因式，再寻找共同的二项式因式。"
            },
            {
              "type": "math",
              "tex": "x^3 - 3x^2 - 4x + 12 = x^2(x-3) - 4(x-3) = (x-3)(x^2-4) = (x-3)(x-2)(x+2)"
            },
            {
              "type": "p",
              "en": "A polynomial in quadratic form looks like a quadratic if you squint: $x^4 - 13x^2 + 36$ becomes $u^2 - 13u + 36$ after the substitution $u = x^2$. Factor in $u$, then substitute back and keep factoring. Finally, memorize the sum and difference of cubes patterns:",
              "zh": "二次型多项式\"眯起眼睛看\"就像一个二次式：令 $u = x^2$，则 $x^4 - 13x^2 + 36$ 变为 $u^2 - 13u + 36$。先对 $u$ 分解，再代回并继续分解。最后，务必记住立方和与立方差公式："
            },
            {
              "type": "math",
              "tex": "a^3 + b^3 = (a+b)(a^2 - ab + b^2), \\qquad a^3 - b^3 = (a-b)(a^2 + ab + b^2)"
            },
            {
              "type": "note",
              "en": "Common mistake: after substituting back $u = x^2$, students stop at $(x^2-4)(x^2-9)=0$ and report only two solutions. Each quadratic factor gives TWO roots: $x = \\pm 2$ and $x = \\pm 3$. A degree-4 equation can have up to 4 real solutions — make sure you found them all.",
              "zh": "常见错误：代回 $u = x^2$ 后，学生停在 $(x^2-4)(x^2-9)=0$，只报出两个解。每个二次因式给出两个根：$x = \\pm 2$ 和 $x = \\pm 3$。四次方程最多可有 4 个实数解——务必找全。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Quadratic form",
                "zh": "例题 1：二次型"
              },
              "problem": {
                "en": "Solve $x^4 - 13x^2 + 36 = 0$.",
                "zh": "解方程 $x^4 - 13x^2 + 36 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $u = x^2$. The equation becomes $u^2 - 13u + 36 = 0$, which factors as $(u-4)(u-9)=0$.",
                  "zh": "令 $u = x^2$，方程变为 $u^2 - 13u + 36 = 0$，分解为 $(u-4)(u-9)=0$。"
                },
                {
                  "type": "p",
                  "en": "Substitute back: $x^2 = 4$ or $x^2 = 9$. Taking square roots (remembering both signs!):",
                  "zh": "代回：$x^2 = 4$ 或 $x^2 = 9$。开平方（别忘了正负两个根！）："
                },
                {
                  "type": "math",
                  "tex": "x = -3,\\ -2,\\ 2,\\ 3"
                },
                {
                  "type": "p",
                  "en": "Four solutions for a degree-4 equation — exactly what the theory predicts.",
                  "zh": "四次方程恰好有四个解——与理论预测完全一致。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Rational Root Theorem workflow",
              "zh": "有理根定理的解题流程"
            },
            {
              "type": "p",
              "en": "When a cubic or quartic does not factor by inspection, the Rational Root Theorem gives you a finite list of suspects. If $P(x)$ has integer coefficients, every rational root has the form $\\frac{p}{q}$, where $p$ divides the constant term and $q$ divides the leading coefficient.",
              "zh": "当三次或四次多项式无法直接看出因式时，有理根定理给出一份有限的\"嫌疑名单\"。若 $P(x)$ 的系数都是整数，则每个有理根都形如 $\\frac{p}{q}$，其中 $p$ 整除常数项，$q$ 整除首项系数。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: List all candidates $\\pm\\frac{p}{q}$ ($p \\mid$ constant term, $q \\mid$ leading coefficient).",
                  "zh": "第一步：列出所有候选根 $\\pm\\frac{p}{q}$（$p$ 整除常数项，$q$ 整除首项系数）。"
                },
                {
                  "en": "Step 2: Test candidates with synthetic division (or direct substitution). A remainder of 0 means you found a root $r$, and the quotient row gives the factor left over.",
                  "zh": "第二步：用综合除法（或直接代入）逐个检验。余数为 0 说明找到了根 $r$，商所在的一行就是剩下的因式。"
                },
                {
                  "en": "Step 3: Rewrite $P(x) = (x - r)\\,Q(x)$ and repeat on the quotient $Q(x)$ until it is quadratic.",
                  "zh": "第三步：写成 $P(x) = (x - r)\\,Q(x)$，对商 $Q(x)$ 重复此过程，直到降为二次式。"
                },
                {
                  "en": "Step 4: Finish the quadratic by factoring or the quadratic formula — this is where irrational or complex roots appear.",
                  "zh": "第四步：用因式分解或求根公式解决剩下的二次式——无理根或复数根就在这一步出现。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Rational Root Theorem",
                "zh": "例题 2：有理根定理"
              },
              "problem": {
                "en": "Solve $2x^3 + 3x^2 - 8x + 3 = 0$.",
                "zh": "解方程 $2x^3 + 3x^2 - 8x + 3 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Candidates: $p \\mid 3$ gives $\\pm 1, \\pm 3$; $q \\mid 2$ gives $1, 2$. So the list is $\\pm 1, \\pm 3, \\pm\\frac{1}{2}, \\pm\\frac{3}{2}$.",
                  "zh": "候选根：$p \\mid 3$ 给出 $\\pm 1, \\pm 3$；$q \\mid 2$ 给出 $1, 2$。名单为 $\\pm 1, \\pm 3, \\pm\\frac{1}{2}, \\pm\\frac{3}{2}$。"
                },
                {
                  "type": "p",
                  "en": "Test $x=1$: $2 + 3 - 8 + 3 = 0$. ✓ Synthetic division by $1$ on coefficients $2, 3, -8, 3$ gives the quotient row $2, 5, -3$ with remainder $0$.",
                  "zh": "检验 $x=1$：$2 + 3 - 8 + 3 = 0$，成立。对系数 $2, 3, -8, 3$ 用 $1$ 作综合除法，商的一行为 $2, 5, -3$，余数为 $0$。"
                },
                {
                  "type": "math",
                  "tex": "2x^3 + 3x^2 - 8x + 3 = (x-1)(2x^2 + 5x - 3) = (x-1)(2x-1)(x+3)"
                },
                {
                  "type": "p",
                  "en": "The solutions are $x = 1$, $x = \\frac{1}{2}$, and $x = -3$.",
                  "zh": "解为 $x = 1$、$x = \\frac{1}{2}$ 和 $x = -3$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "How many roots? The Fundamental Theorem of Algebra",
              "zh": "有多少个根？代数基本定理"
            },
            {
              "type": "p",
              "en": "The Fundamental Theorem of Algebra guarantees that a degree-$n$ polynomial has exactly $n$ roots in the complex numbers, provided you count multiplicity. For instance, $(x-5)^3(x+1) = 0$ is degree 4: it has the root $5$ with multiplicity 3 and the root $-1$ with multiplicity 1, for a total count of 4.",
              "zh": "代数基本定理保证：$n$ 次多项式在复数范围内恰有 $n$ 个根（按重数计算）。例如 $(x-5)^3(x+1) = 0$ 是四次方程：根 $5$ 的重数为 3，根 $-1$ 的重数为 1，共计 4 个根。"
            },
            {
              "type": "p",
              "en": "When the coefficients are real, complex roots always come in conjugate pairs: if $2 + 3i$ is a root, so is $2 - 3i$. Similarly, when the coefficients are rational, irrational roots of the form $a + b\\sqrt{c}$ pair up with $a - b\\sqrt{c}$. These pairing rules let you deduce \"hidden\" roots without any computation.",
              "zh": "当系数都是实数时，复数根总是成共轭对出现：若 $2 + 3i$ 是根，则 $2 - 3i$ 也是根。类似地，当系数都是有理数时，形如 $a + b\\sqrt{c}$ 的无理根与 $a - b\\sqrt{c}$ 成对出现。这些配对规律让你不用计算就能推出\"隐藏\"的根。"
            },
            {
              "type": "note",
              "en": "Test tip: a question like \"a degree-4 polynomial with real coefficients has zeros $3$ and $1-2i$; how many real zeros can it have?\" is really a conjugate-pair puzzle. The conjugate $1+2i$ must also be a zero, so only one more zero remains — and it must be real (a complex one would need its own conjugate, exceeding degree 4). Count conjugate partners first, then see what room is left.",
              "zh": "考试技巧：诸如\"某实系数四次多项式有零点 $3$ 和 $1-2i$，它可能有几个实零点？\"这类题本质是共轭配对问题。共轭 $1+2i$ 必然也是零点，于是只剩一个零点——它必须是实数（若是复数，还需要它自己的共轭，将超过四次）。先数清共轭搭档，再看剩余空位。"
            },
            {
              "type": "h3",
              "en": "Building a polynomial from its zeros",
              "zh": "由零点构造多项式"
            },
            {
              "type": "p",
              "en": "To write a polynomial with given zeros $r_1, r_2, \\dots$, multiply the factors $(x - r_1)(x - r_2)\\cdots$. If the problem demands real (or rational) coefficients, first add in any missing conjugate partners. Multiplying a conjugate pair of factors always produces a quadratic with no imaginary or radical parts.",
              "zh": "要写出以 $r_1, r_2, \\dots$ 为零点的多项式，只需把因式 $(x - r_1)(x - r_2)\\cdots$ 相乘。若题目要求实系数（或有理系数），先补上缺失的共轭搭档。一对共轭因式相乘必得到不含虚数或根号的二次式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: From zeros to polynomial",
                "zh": "例题 3：从零点到多项式"
              },
              "problem": {
                "en": "Write a polynomial of least degree with real coefficients whose zeros are $2$ and $3i$.",
                "zh": "写出一个次数最低的实系数多项式，使其零点为 $2$ 和 $3i$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Real coefficients force the conjugate $-3i$ to be a zero as well, so the least degree is 3. Multiply the conjugate pair first:",
                  "zh": "实系数要求共轭 $-3i$ 也是零点，故最低次数为 3。先把共轭对相乘："
                },
                {
                  "type": "math",
                  "tex": "(x - 3i)(x + 3i) = x^2 - (3i)^2 = x^2 + 9"
                },
                {
                  "type": "p",
                  "en": "Then attach the real zero:",
                  "zh": "再乘上实零点对应的因式："
                },
                {
                  "type": "math",
                  "tex": "P(x) = (x-2)(x^2+9) = x^3 - 2x^2 + 9x - 18"
                },
                {
                  "type": "p",
                  "en": "Any nonzero constant multiple of this answer is also correct.",
                  "zh": "此答案乘以任意非零常数也都正确。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which is the complete factorization of $x^3 + 8$?",
                "zh": "$x^3 + 8$ 的完全因式分解是哪一个？"
              },
              "choices": [
                "$(x+2)(x^2+2x+4)$",
                "$(x+2)^3$",
                "$(x+2)(x^2-2x+4)$",
                "$(x-2)(x^2+2x+4)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Sum of cubes: $a^3+b^3=(a+b)(a^2-ab+b^2)$ with $a=x$, $b=2$ gives $(x+2)(x^2-2x+4)$. The tempting middle sign is the trap — the trinomial's middle term has the OPPOSITE sign of the binomial. $(x+2)^3$ would expand to $x^3+6x^2+12x+8$, not $x^3+8$.",
                "zh": "立方和公式 $a^3+b^3=(a+b)(a^2-ab+b^2)$，取 $a=x$、$b=2$ 得 $(x+2)(x^2-2x+4)$。中间的符号最容易错——三项式的中间项与二项式符号相反。$(x+2)^3$ 展开是 $x^3+6x^2+12x+8$，不等于 $x^3+8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "By the Rational Root Theorem, which of the following is NOT a possible rational root of $3x^3 - 5x + 2 = 0$?",
                "zh": "根据有理根定理，下列哪个不可能是 $3x^3 - 5x + 2 = 0$ 的有理根？"
              },
              "choices": [
                "$\\frac{2}{3}$",
                "$\\frac{3}{2}$",
                "$-2$",
                "$\\frac{1}{3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Candidates are $\\frac{p}{q}$ with $p \\mid 2$ (so $p = 1, 2$) and $q \\mid 3$ (so $q = 1, 3$): $\\pm 1, \\pm 2, \\pm\\frac{1}{3}, \\pm\\frac{2}{3}$. The fraction $\\frac{3}{2}$ has it backwards — its numerator divides the leading coefficient instead of the constant term, a classic reversal error.",
                "zh": "候选根为 $\\frac{p}{q}$，其中 $p \\mid 2$（即 $p = 1, 2$），$q \\mid 3$（即 $q = 1, 3$）：$\\pm 1, \\pm 2, \\pm\\frac{1}{3}, \\pm\\frac{2}{3}$。$\\frac{3}{2}$ 恰好把分子分母弄反了——它的分子整除的是首项系数而非常数项，这是典型的颠倒错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^3 - 4x^2 - 5x = 0$. Enter the largest solution (an integer).",
                "zh": "解方程 $x^3 - 4x^2 - 5x = 0$。请填最大的解（一个整数）。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "Factor out the GCF first: $x(x^2 - 4x - 5) = x(x-5)(x+1) = 0$, so $x = 0, 5, -1$. The largest is $5$. Dividing both sides by $x$ instead of factoring it out would lose the solution $x=0$.",
                "zh": "先提取公因式：$x(x^2 - 4x - 5) = x(x-5)(x+1) = 0$，所以 $x = 0, 5, -1$，最大的解是 $5$。若两边同除以 $x$ 而不是提取因式，会丢掉解 $x=0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many real solutions does $x^4 - 5x^2 + 4 = 0$ have?",
                "zh": "方程 $x^4 - 5x^2 + 4 = 0$ 有几个实数解？"
              },
              "choices": [
                "$1$",
                "$2$",
                "$3$",
                "$4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Let $u = x^2$: $u^2 - 5u + 4 = (u-1)(u-4) = 0$, so $x^2 = 1$ or $x^2 = 4$, giving $x = \\pm 1, \\pm 2$ — four real solutions. Answering 2 is the classic error of stopping at the $u$-values without substituting back.",
                "zh": "令 $u = x^2$：$u^2 - 5u + 4 = (u-1)(u-4) = 0$，所以 $x^2 = 1$ 或 $x^2 = 4$，得 $x = \\pm 1, \\pm 2$，共四个实数解。答 2 的同学通常是停在 $u$ 的值上，忘了代回求 $x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A polynomial with rational coefficients has zeros $3 - i$ and $\\sqrt{5}$. What is the least possible degree of the polynomial?",
                "zh": "某有理系数多项式有零点 $3 - i$ 和 $\\sqrt{5}$。该多项式的最低可能次数是多少？"
              },
              "choices": [
                "$2$",
                "$3$",
                "$4$",
                "$5$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Rational coefficients force both conjugate partners to be zeros: $3 + i$ (complex conjugate) and $-\\sqrt{5}$ (irrational conjugate). That makes at least four zeros, so the least degree is 4. Choosing 2 ignores both conjugate-pair rules; choosing 3 forgets that $\\sqrt{5}$ needs a partner too.",
                "zh": "有理系数要求两个共轭搭档也都是零点：$3 + i$（复数共轭）和 $-\\sqrt{5}$（无理共轭）。因此至少有四个零点，最低次数为 4。选 2 忽略了两条共轭规律；选 3 则忘了 $\\sqrt{5}$ 也需要搭档。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The equation $x^3 + 2x^2 - 5x - 6 = 0$ has three integer solutions. Enter the smallest one (an integer).",
                "zh": "方程 $x^3 + 2x^2 - 5x - 6 = 0$ 有三个整数解。请填最小的解（一个整数）。"
              },
              "answer": "-3",
              "accept": [
                "-3.0"
              ],
              "explanation": {
                "en": "Rational root candidates: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Testing $x = 2$: $8 + 8 - 10 - 6 = 0$. ✓ Synthetic division by 2 leaves $x^2 + 4x + 3 = (x+1)(x+3)$, so the solutions are $2, -1, -3$. The smallest is $-3$.",
                "zh": "有理根候选：$\\pm 1, \\pm 2, \\pm 3, \\pm 6$。检验 $x = 2$：$8 + 8 - 10 - 6 = 0$，成立。用 2 作综合除法后剩下 $x^2 + 4x + 3 = (x+1)(x+3)$，所以解为 $2, -1, -3$，最小的是 $-3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which polynomial has zero $1$ with multiplicity 2 and zero $-3$ with multiplicity 1?",
                "zh": "哪个多项式以 $1$ 为二重零点、以 $-3$ 为一重零点？"
              },
              "choices": [
                "$x^3 - x^2 - 5x - 3$",
                "$x^3 + x^2 - 5x + 3$",
                "$x^3 - 5x^2 + 3x + 1$",
                "$x^3 + 3x^2 - x - 3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Build it from factors: $(x-1)^2(x+3) = (x^2 - 2x + 1)(x+3) = x^3 + x^2 - 5x + 3$. Quick check: the constant term must be $(-1)^2(3) = 3$ and $P(1)$ must equal $0$: $1 + 1 - 5 + 3 = 0$. ✓ The first choice is $(x+1)^2(x-3)$ — the signs of the zeros reversed.",
                "zh": "由因式构造：$(x-1)^2(x+3) = (x^2 - 2x + 1)(x+3) = x^3 + x^2 - 5x + 3$。快速检验：常数项应为 $(-1)^2(3) = 3$，且 $P(1)$ 应为 $0$：$1 + 1 - 5 + 3 = 0$，成立。第一个选项是 $(x+1)^2(x-3)$——零点的符号全反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A shipping company designs a box whose height is $x$ inches, whose width is 2 inches less than the height, and whose length is 2 inches more than the height. The volume must be 48 cubic inches, which leads to $x(x-2)(x+2) = 48$. Find the height $x$ in inches (an integer).",
                "zh": "某快递公司设计一种箱子：高为 $x$ 英寸，宽比高少 2 英寸，长比高多 2 英寸。要求体积为 48 立方英寸，由此得到方程 $x(x-2)(x+2) = 48$。求高 $x$（英寸，一个整数）。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "Expand: $x(x^2 - 4) = 48$, so $x^3 - 4x - 48 = 0$. Rational root candidates include $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\dots$; testing $x = 4$: $64 - 16 - 48 = 0$. ✓ Synthetic division leaves $x^2 + 4x + 12$, whose discriminant $16 - 48 < 0$ gives no real roots. So $x = 4$ is the only real solution, and it passes the reality check: a $4 \\times 2 \\times 6$ box has volume 48.",
                "zh": "展开：$x(x^2 - 4) = 48$，即 $x^3 - 4x - 48 = 0$。有理根候选包括 $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\dots$；检验 $x = 4$：$64 - 16 - 48 = 0$，成立。综合除法后剩下 $x^2 + 4x + 12$，判别式 $16 - 48 < 0$，无实根。所以 $x = 4$ 是唯一实数解，且符合实际：$4 \\times 2 \\times 6$ 的箱子体积恰为 48。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "radicals-rational-exponents",
      "title": "Unit 4: Radical Functions and Rational Exponents",
      "titleZh": "第四单元：根式函数与分数指数",
      "lessons": [
        {
          "id": "nth-roots-rational-exponents",
          "title": "nth Roots and Rational Exponents",
          "titleZh": "n 次根与分数指数",
          "content": [
            {
              "type": "h2",
              "en": "Beyond Square Roots",
              "zh": "超越平方根"
            },
            {
              "type": "p",
              "en": "The $n$th root of $a$, written $\\sqrt[n]{a}$, is a number whose $n$th power equals $a$. Cube roots exist for every real number ($\\sqrt[3]{-8} = -2$), but even roots of negative numbers are not real. For even $n$, $\\sqrt[n]{a}$ means the principal (non-negative) root.",
              "zh": "$a$ 的 $n$ 次根记作 $\\sqrt[n]{a}$，是一个 $n$ 次方等于 $a$ 的数。每个实数都有立方根（$\\sqrt[3]{-8} = -2$），但负数的偶次根不是实数。当 $n$ 为偶数时，$\\sqrt[n]{a}$ 表示主根（非负的那个）。"
            },
            {
              "type": "h2",
              "en": "Rational Exponents",
              "zh": "分数指数"
            },
            {
              "type": "p",
              "en": "Radicals and fractional exponents are the same idea in two notations. The denominator of the exponent is the root; the numerator is the power.",
              "zh": "根式与分数指数是同一概念的两种记法。指数的分母表示开几次方，分子表示乘几次幂。"
            },
            {
              "type": "math",
              "tex": "a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m"
            },
            {
              "type": "p",
              "en": "All the familiar exponent laws still apply: $a^p \\cdot a^q = a^{p+q}$, $\\frac{a^p}{a^q} = a^{p-q}$, $(a^p)^q = a^{pq}$, and $a^{-p} = \\frac{1}{a^p}$. Writing radicals as rational exponents usually makes simplification mechanical.",
              "zh": "所有熟悉的指数法则仍然成立：$a^p \\cdot a^q = a^{p+q}$，$\\frac{a^p}{a^q} = a^{p-q}$，$(a^p)^q = a^{pq}$，以及 $a^{-p} = \\frac{1}{a^p}$。把根式写成分数指数后，化简通常会变得程序化。"
            },
            {
              "type": "note",
              "en": "When computing $a^{m/n}$ by hand, take the root FIRST, then the power: $27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$ is far easier than computing $27^2 = 729$ and then finding its cube root.",
              "zh": "手算 $a^{m/n}$ 时，先开方再乘幂：$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$，比先算 $27^2 = 729$ 再开立方根容易得多。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Evaluate $16^{3/4}$ without a calculator.",
                "zh": "不用计算器求 $16^{3/4}$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The denominator 4 says take the fourth root; the numerator 3 says cube the result.",
                  "zh": "分母 4 表示先开四次方；分子 3 表示再取立方。"
                },
                {
                  "type": "math",
                  "tex": "16^{3/4} = \\left(\\sqrt[4]{16}\\right)^3 = 2^3 = 8"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Simplify $\\frac{x^{1/2} \\cdot x^{3/2}}{x^{1/3}}$ using exponent laws (assume $x > 0$).",
                "zh": "用指数法则化简 $\\frac{x^{1/2} \\cdot x^{3/2}}{x^{1/3}}$（设 $x > 0$）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Add exponents in the numerator: $\\frac{1}{2} + \\frac{3}{2} = 2$. Then subtract the denominator exponent:",
                  "zh": "分子指数相加：$\\frac{1}{2} + \\frac{3}{2} = 2$。再减去分母的指数："
                },
                {
                  "type": "math",
                  "tex": "x^{2 - 1/3} = x^{5/3} = \\sqrt[3]{x^5}"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Simplifying radicals",
              "zh": "根式的化简"
            },
            {
              "type": "p",
              "en": "To simplify $\\sqrt[n]{a}$, factor out the largest perfect $n$th power: $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$ and $\\sqrt[3]{40} = \\sqrt[3]{8 \\cdot 5} = 2\\sqrt[3]{5}$. Radicals with the same index and radicand can be added like like-terms: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$.",
              "zh": "化简 $\\sqrt[n]{a}$ 时，提出最大的完全 $n$ 次方因子：$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$，$\\sqrt[3]{40} = \\sqrt[3]{8 \\cdot 5} = 2\\sqrt[3]{5}$。指数与被开方数都相同的根式可以像同类项一样相加：$3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\sqrt[3]{64}$ (enter a number).",
                "zh": "求 $\\sqrt[3]{64}$ 的值（输入一个数字）。"
              },
              "answer": "4",
              "explanation": {
                "en": "We need a number whose cube is 64: $4^3 = 64$, so $\\sqrt[3]{64} = 4$.",
                "zh": "需要一个立方等于 64 的数：$4^3 = 64$，所以 $\\sqrt[3]{64} = 4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals $x^{2/5}$?",
                "zh": "哪个式子等于 $x^{2/5}$？"
              },
              "choices": [
                "$\\sqrt[5]{x^2}$",
                "$\\sqrt{x^5}$",
                "$\\frac{2x}{5}$",
                "$x^2 - x^5$"
              ],
              "answer": 0,
              "explanation": {
                "en": "In $a^{m/n}$ the denominator is the root and the numerator is the power: $x^{2/5} = \\sqrt[5]{x^2}$. Choice $\\sqrt{x^5}$ would be $x^{5/2}$.",
                "zh": "在 $a^{m/n}$ 中分母是根指数、分子是幂次：$x^{2/5} = \\sqrt[5]{x^2}$。选项 $\\sqrt{x^5}$ 是 $x^{5/2}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $8^{2/3}$ (enter a number).",
                "zh": "求 $8^{2/3}$ 的值（输入一个数字）。"
              },
              "answer": "4",
              "explanation": {
                "en": "Root first, then power: $\\sqrt[3]{8} = 2$, then $2^2 = 4$.",
                "zh": "先开方再乘幂：$\\sqrt[3]{8} = 2$，再 $2^2 = 4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\sqrt{50}$.",
                "zh": "化简 $\\sqrt{50}$。"
              },
              "choices": [
                "$5\\sqrt{2}$",
                "$2\\sqrt{5}$",
                "$25\\sqrt{2}$",
                "$10\\sqrt{5}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Factor out the largest perfect square: $50 = 25 \\cdot 2$, so $\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$.",
                "zh": "提出最大的完全平方因子：$50 = 25 \\cdot 2$，所以 $\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is equal to $x^{-1/2}$ for $x > 0$?",
                "zh": "当 $x > 0$ 时，哪个式子等于 $x^{-1/2}$？"
              },
              "choices": [
                "$\\frac{1}{\\sqrt{x}}$",
                "$-\\sqrt{x}$",
                "$\\sqrt{-x}$",
                "$-\\frac{x}{2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "A negative exponent means reciprocal, and the $1/2$ power means square root: $x^{-1/2} = \\frac{1}{x^{1/2}} = \\frac{1}{\\sqrt{x}}$. Negative exponents never make the value negative.",
                "zh": "负指数表示倒数，$1/2$ 次幂表示平方根：$x^{-1/2} = \\frac{1}{x^{1/2}} = \\frac{1}{\\sqrt{x}}$。负指数并不会使数值变负。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $3\\sqrt{5} + 7\\sqrt{5}$. Answer in the form $a\\sqrt{5}$; enter $a$.",
                "zh": "化简 $3\\sqrt{5} + 7\\sqrt{5}$。答案形如 $a\\sqrt{5}$；请输入 $a$。"
              },
              "answer": "10",
              "explanation": {
                "en": "Like radicals add just like like terms: $(3+7)\\sqrt{5} = 10\\sqrt{5}$, so $a = 10$.",
                "zh": "同类根式像同类项一样相加：$(3+7)\\sqrt{5} = 10\\sqrt{5}$，所以 $a = 10$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $(x^{2/3})^{6}$ for $x>0$. Answer in the form $x^n$; enter $n$.",
                "zh": "化简 $(x^{2/3})^{6}$（$x>0$）。答案形如 $x^n$；请输入 $n$。"
              },
              "answer": "4",
              "explanation": {
                "en": "Power of a power multiplies exponents: $\\frac{2}{3} \\cdot 6 = 4$, so the result is $x^4$.",
                "zh": "幂的乘方指数相乘：$\\frac{2}{3} \\cdot 6 = 4$，结果是 $x^4$。"
              }
            }
          ]
        },
        {
          "id": "solving-radical-equations",
          "title": "Solving Radical Equations",
          "titleZh": "解根式方程",
          "content": [
            {
              "type": "h2",
              "en": "The Strategy: Isolate and Raise to a Power",
              "zh": "解法：先孤立根式再乘方"
            },
            {
              "type": "p",
              "en": "A radical equation contains a variable inside a root, such as $\\sqrt{x+3} = 5$. The plan: isolate the radical on one side, raise both sides to the power matching the root index, then solve the resulting polynomial equation.",
              "zh": "根式方程是变量位于根号内的方程，例如 $\\sqrt{x+3} = 5$。解题步骤：先把根式孤立在等式一边，再把两边同时乘方（次数与根指数一致），然后解得到的多项式方程。"
            },
            {
              "type": "p",
              "en": "If the equation has two radicals, isolate one, square, then isolate the remaining radical and square again.",
              "zh": "若方程中有两个根式，先孤立一个并平方，再孤立剩下的根式并再次平方。"
            },
            {
              "type": "h2",
              "en": "Extraneous Solutions",
              "zh": "增根"
            },
            {
              "type": "p",
              "en": "Squaring both sides is not a reversible step: it can introduce extraneous solutions — values that satisfy the squared equation but not the original. For instance, squaring $\\sqrt{x} = -3$ gives $x = 9$, but $\\sqrt{9} = 3 \\ne -3$, so the original equation actually has no solution.",
              "zh": "两边平方不是可逆的步骤：它可能引入增根——满足平方后方程但不满足原方程的值。例如把 $\\sqrt{x} = -3$ 平方得 $x = 9$，但 $\\sqrt{9} = 3 \\ne -3$，所以原方程其实无解。"
            },
            {
              "type": "note",
              "en": "ALWAYS substitute every candidate solution back into the ORIGINAL equation. Checking is not optional for radical equations — it is part of the solution.",
              "zh": "务必把每个候选解代回原方程检验。对根式方程来说，检验不是可有可无的步骤，而是解题过程的一部分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Solve $\\sqrt{2x+3} = 5$.",
                "zh": "解方程 $\\sqrt{2x+3} = 5$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The radical is already isolated. Square both sides:",
                  "zh": "根式已被孤立。两边平方："
                },
                {
                  "type": "math",
                  "tex": "2x + 3 = 25 \\quad\\Rightarrow\\quad 2x = 22 \\quad\\Rightarrow\\quad x = 11"
                },
                {
                  "type": "p",
                  "en": "Check: $\\sqrt{2(11)+3} = \\sqrt{25} = 5$. ✓ The solution is $x = 11$.",
                  "zh": "检验：$\\sqrt{2(11)+3} = \\sqrt{25} = 5$，成立。解为 $x = 11$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Solve $\\sqrt{x+7} = x + 1$.",
                "zh": "解方程 $\\sqrt{x+7} = x + 1$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Square both sides: $x + 7 = (x+1)^2 = x^2 + 2x + 1$.",
                  "zh": "两边平方：$x + 7 = (x+1)^2 = x^2 + 2x + 1$。"
                },
                {
                  "type": "math",
                  "tex": "x^2 + x - 6 = 0 \\quad\\Rightarrow\\quad (x+3)(x-2) = 0 \\quad\\Rightarrow\\quad x = -3 \\text{ or } x = 2"
                },
                {
                  "type": "p",
                  "en": "Check $x = 2$: $\\sqrt{9} = 3$ and $2 + 1 = 3$. ✓ Check $x = -3$: $\\sqrt{4} = 2$ but $-3 + 1 = -2$. ✗ So $x = -3$ is extraneous and the only solution is $x = 2$.",
                  "zh": "检验 $x = 2$：$\\sqrt{9} = 3$ 且 $2 + 1 = 3$，成立。检验 $x = -3$：$\\sqrt{4} = 2$ 但 $-3 + 1 = -2$，不成立。所以 $x = -3$ 是增根，唯一解为 $x = 2$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Equations with rational exponents",
              "zh": "含分数指数的方程"
            },
            {
              "type": "p",
              "en": "An equation like $x^{2/3} = 9$ is solved by raising both sides to the reciprocal power: $x = 9^{3/2} = 27$ (and $x = -27$ also works here, since the even numerator squares away the sign — check both candidates). Cube-root equations never produce extraneous solutions because cubing is reversible, but even-root equations must always be checked.",
              "zh": "形如 $x^{2/3} = 9$ 的方程可通过两边同乘倒数次幂求解：$x = 9^{3/2} = 27$（此处 $x = -27$ 也成立，因为偶数分子的平方会消去符号——两个候选解都要检验）。立方根方程不会产生增根，因为立方是可逆的；但偶次根方程必须逐一检验。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Solve $\\sqrt{x} = 6$ (enter a number).",
                "zh": "解 $\\sqrt{x} = 6$（输入一个数字）。"
              },
              "answer": "36",
              "explanation": {
                "en": "Square both sides: $x = 36$. Check: $\\sqrt{36} = 6$. ✓",
                "zh": "两边平方：$x = 36$。检验：$\\sqrt{36} = 6$，成立。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\sqrt{x - 4} = 3$ (enter a number).",
                "zh": "解 $\\sqrt{x - 4} = 3$（输入一个数字）。"
              },
              "answer": "13",
              "explanation": {
                "en": "Square: $x - 4 = 9$, so $x = 13$. Check: $\\sqrt{13-4} = \\sqrt{9} = 3$. ✓",
                "zh": "平方：$x - 4 = 9$，得 $x = 13$。检验：$\\sqrt{13-4} = \\sqrt{9} = 3$，成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many real solutions does $\\sqrt{x} = -2$ have?",
                "zh": "$\\sqrt{x} = -2$ 有几个实数解？"
              },
              "choices": [
                "0",
                "1",
                "2",
                "infinitely many / 无穷多"
              ],
              "answer": 0,
              "explanation": {
                "en": "The principal square root is never negative, so no $x$ can make $\\sqrt{x}$ equal $-2$. Squaring would give the extraneous candidate $x=4$, which fails the check.",
                "zh": "主平方根永远不为负，因此没有任何 $x$ 能使 $\\sqrt{x}$ 等于 $-2$。平方会得到增根候选 $x=4$，但检验不通过。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why must solutions of radical equations be checked in the original equation?",
                "zh": "为什么根式方程的解必须代回原方程检验？"
              },
              "choices": [
                "Squaring can create extraneous solutions / 平方可能产生增根",
                "Radicals cannot be squared / 根式不能平方",
                "To round the answer / 为了取整",
                "Checking is only needed for cube roots / 只有立方根才需检验"
              ],
              "answer": 0,
              "explanation": {
                "en": "Squaring is not reversible: it turns false statements like $-3 = 3$ into true ones like $9 = 9$, so the squared equation can have extra roots that the original does not.",
                "zh": "平方不可逆：它会把 $-3 = 3$ 这样的假命题变成 $9 = 9$ 这样的真命题，所以平方后的方程可能有原方程没有的根。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\sqrt[3]{x + 5} = 2$ (enter a number).",
                "zh": "解 $\\sqrt[3]{x + 5} = 2$（输入一个数字）。"
              },
              "answer": "3",
              "explanation": {
                "en": "Cube both sides: $x + 5 = 8$, so $x = 3$. Cube roots are reversible, so no extraneous solutions can appear.",
                "zh": "两边立方：$x + 5 = 8$，得 $x = 3$。立方可逆，不会产生增根。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $2\\sqrt{x} + 1 = 9$ (enter a number).",
                "zh": "解 $2\\sqrt{x} + 1 = 9$（输入一个数字）。"
              },
              "answer": "16",
              "explanation": {
                "en": "Isolate first: $2\\sqrt{x} = 8$, so $\\sqrt{x} = 4$; then square to get $x = 16$. Isolating before squaring keeps the algebra simple.",
                "zh": "先孤立根式：$2\\sqrt{x} = 8$，即 $\\sqrt{x} = 4$；再平方得 $x = 16$。先孤立再平方能让运算简单。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\sqrt{3x+1} = x - 1$. Enter the ONLY valid solution (a number).",
                "zh": "解 $\\sqrt{3x+1} = x - 1$。输入唯一的有效解（一个数字）。"
              },
              "answer": "5",
              "explanation": {
                "en": "Squaring gives $3x + 1 = x^2 - 2x + 1$, so $x^2 - 5x = 0$, i.e. $x = 0$ or $x = 5$. Check $x=0$: $\\sqrt{1} = 1$ but $0-1 = -1$. ✗ Check $x=5$: $\\sqrt{16} = 4 = 5-1$. ✓ Only $x = 5$ works.",
                "zh": "平方得 $3x + 1 = x^2 - 2x + 1$，即 $x^2 - 5x = 0$，解得 $x = 0$ 或 $x = 5$。检验 $x=0$：$\\sqrt{1} = 1$ 但 $0-1 = -1$，不成立。检验 $x=5$：$\\sqrt{16} = 4 = 5-1$，成立。唯一解为 $x = 5$。"
              }
            }
          ]
        },
        {
          "id": "graphing-radical-functions",
          "title": "Graphing Square Root and Cube Root Functions",
          "titleZh": "根式函数的图象",
          "content": [
            {
              "type": "h2",
              "en": "The Parent Radical Graphs",
              "zh": "根式母函数的图象"
            },
            {
              "type": "p",
              "en": "The square root parent function $f(x) = \\sqrt{x}$ starts at the origin and rises slowly to the right — it looks like the top half of a sideways parabola. Its reliable key points are $(0,0)$, $(1,1)$, $(4,2)$, and $(9,3)$: perfect squares make the outputs whole numbers. The domain is $x \\ge 0$ and the range is $y \\ge 0$, because a square root of a negative number is not real.",
              "zh": "平方根母函数 $f(x) = \\sqrt{x}$ 从原点出发向右缓慢上升——它像一条横放抛物线的上半支。可靠的关键点是 $(0,0)$、$(1,1)$、$(4,2)$ 和 $(9,3)$：取完全平方数时输出是整数。定义域为 $x \\ge 0$，值域为 $y \\ge 0$，因为负数的平方根不是实数。"
            },
            {
              "type": "p",
              "en": "The cube root parent function $f(x) = \\sqrt[3]{x}$ has no such restriction: cube roots of negative numbers are real, so both the domain and range are all real numbers. The graph passes through $(-8,-2)$, $(-1,-1)$, $(0,0)$, $(1,1)$, and $(8,2)$, has point symmetry about the origin, and flattens out (but never stops rising) as $|x|$ grows.",
              "zh": "立方根母函数 $f(x) = \\sqrt[3]{x}$ 没有这种限制：负数的立方根是实数，所以定义域和值域都是全体实数。图象经过 $(-8,-2)$、$(-1,-1)$、$(0,0)$、$(1,1)$ 和 $(8,2)$，关于原点中心对称，当 $|x|$ 增大时趋于平缓（但始终在上升）。"
            },
            {
              "type": "p",
              "en": "These graphs are no accident: $y = \\sqrt{x}$ is the inverse of $y = x^2$ restricted to $x \\ge 0$, and $y = \\sqrt[3]{x}$ is the inverse of $y = x^3$. Each radical graph is the reflection of its power-function partner across the line $y = x$ — which is exactly why the key points of $\\sqrt{x}$ are the key points of $x^2$ with coordinates swapped.",
              "zh": "这些图象并非偶然：$y = \\sqrt{x}$ 是 $y = x^2$（限制在 $x \\ge 0$ 上）的反函数，$y = \\sqrt[3]{x}$ 是 $y = x^3$ 的反函数。每个根式图象都是其幂函数搭档关于直线 $y = x$ 的对称图形——这正是 $\\sqrt{x}$ 的关键点恰好是 $x^2$ 的关键点交换坐标的原因。"
            },
            {
              "type": "h3",
              "en": "Transforming radical graphs",
              "zh": "根式图象的变换"
            },
            {
              "type": "p",
              "en": "Every transformed square root function can be written in the standard form below. The point $(h, k)$ is the endpoint of the graph — the radical version of a vertex — and everything else bends away from it.",
              "zh": "每个经过变换的平方根函数都能写成下面的标准形式。点 $(h, k)$ 是图象的端点——相当于根式函数的\"顶点\"——整条曲线由它出发延伸。"
            },
            {
              "type": "math",
              "tex": "y = a\\sqrt{x - h} + k"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$h$ shifts the graph horizontally and moves the domain: the domain of $y = a\\sqrt{x-h}+k$ is $x \\ge h$.",
                  "zh": "$h$ 控制水平平移并移动定义域：$y = a\\sqrt{x-h}+k$ 的定义域是 $x \\ge h$。"
                },
                {
                  "en": "$k$ shifts the graph vertically: the range becomes $y \\ge k$ when $a > 0$, or $y \\le k$ when $a < 0$.",
                  "zh": "$k$ 控制竖直平移：当 $a > 0$ 时值域为 $y \\ge k$；当 $a < 0$ 时值域为 $y \\le k$。"
                },
                {
                  "en": "$|a|$ stretches ($|a| > 1$) or compresses ($0 < |a| < 1$) the graph vertically; a negative $a$ reflects it across the $x$-axis so the curve falls instead of rises.",
                  "zh": "$|a|$ 控制竖直伸缩（$|a| > 1$ 拉伸，$0 < |a| < 1$ 压缩）；$a$ 为负时图象关于 $x$ 轴翻折，曲线由上升变为下降。"
                },
                {
                  "en": "Cube root functions $y = a\\sqrt[3]{x-h}+k$ follow the same rules, with $(h,k)$ as the center of symmetry instead of an endpoint — and the domain and range stay all real numbers.",
                  "zh": "立方根函数 $y = a\\sqrt[3]{x-h}+k$ 遵循同样的法则，只是 $(h,k)$ 是对称中心而非端点——定义域和值域仍是全体实数。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: reading $y = \\sqrt{x + 5}$ as a shift RIGHT 5. Rewrite it as $\\sqrt{x - (-5)}$: the graph shifts LEFT 5 and the domain becomes $x \\ge -5$. Always find the domain by solving (expression under the radical) $\\ge 0$ rather than guessing from the sign you see.",
              "zh": "常见错误：把 $y = \\sqrt{x + 5}$ 读成右移 5。应改写为 $\\sqrt{x - (-5)}$：图象左移 5，定义域变为 $x \\ge -5$。求定义域时务必解不等式\"根号下的式子 $\\ge 0$\"，而不是凭看到的符号猜测。"
            },
            {
              "type": "h3",
              "en": "Graphing step by step with key points",
              "zh": "用关键点逐步作图"
            },
            {
              "type": "p",
              "en": "A dependable routine: (1) plot the endpoint or center $(h, k)$; (2) take the parent's key points, multiply each $y$-coordinate by $a$, then shift each point right $h$ and up $k$; (3) connect with the characteristic radical curve; (4) state the domain and range from the finished picture. Tracking two or three key points is faster and more accurate than plotting many random values.",
              "zh": "可靠的作图流程：(1) 先画出端点或对称中心 $(h, k)$；(2) 取母函数的关键点，把每个 $y$ 坐标乘以 $a$，再将每个点右移 $h$、上移 $k$；(3) 用根式特有的曲线连接；(4) 根据画好的图写出定义域和值域。跟踪两三个关键点比乱代很多数值又快又准。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Graphing a square root function",
                "zh": "例题 1：画平方根函数的图象"
              },
              "problem": {
                "en": "Graph $g(x) = 2\\sqrt{x - 3} + 1$ and state its domain and range.",
                "zh": "画出 $g(x) = 2\\sqrt{x - 3} + 1$ 的图象，并写出定义域与值域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $a = 2$, $h = 3$, $k = 1$, so the endpoint is $(3, 1)$. Transform the parent's key points: $(0,0) \\to (3,1)$, $(1,1) \\to (4, 2\\cdot 1 + 1) = (4,3)$, $(4,2) \\to (7, 2\\cdot 2 + 1) = (7,5)$.",
                  "zh": "这里 $a = 2$、$h = 3$、$k = 1$，端点为 $(3, 1)$。变换母函数的关键点：$(0,0) \\to (3,1)$，$(1,1) \\to (4, 2\\cdot 1 + 1) = (4,3)$，$(4,2) \\to (7, 2\\cdot 2 + 1) = (7,5)$。"
                },
                {
                  "type": "p",
                  "en": "The curve starts at $(3,1)$ and rises to the right, twice as steeply as the parent. Domain: $x \\ge 3$. Range: $y \\ge 1$ (since $a > 0$ the graph rises from $k$).",
                  "zh": "曲线从 $(3,1)$ 出发向右上升，比母函数陡一倍。定义域：$x \\ge 3$；值域：$y \\ge 1$（因 $a > 0$，图象从 $k$ 向上延伸）。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Graphing a cube root function",
                "zh": "例题 2：画立方根函数的图象"
              },
              "problem": {
                "en": "Describe and graph $g(x) = -\\sqrt[3]{x + 2} - 1$.",
                "zh": "描述并画出 $g(x) = -\\sqrt[3]{x + 2} - 1$ 的图象。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rewrite as $g(x) = -\\sqrt[3]{x - (-2)} - 1$: reflect the parent across the $x$-axis, shift left 2 and down 1. The center of symmetry moves from $(0,0)$ to $(-2, -1)$.",
                  "zh": "改写为 $g(x) = -\\sqrt[3]{x - (-2)} - 1$：先把母函数关于 $x$ 轴翻折，再左移 2、下移 1。对称中心由 $(0,0)$ 移到 $(-2, -1)$。"
                },
                {
                  "type": "p",
                  "en": "Key points: $(1,1) \\to (-1, -2)$ and $(-1,-1) \\to (-3, 0)$; also $(8,2) \\to (6,-3)$. Because of the reflection, this curve FALLS from left to right. Domain and range: all real numbers — shifts and reflections never restrict a cube root.",
                  "zh": "关键点：$(1,1) \\to (-1, -2)$，$(-1,-1) \\to (-3, 0)$；还有 $(8,2) \\to (6,-3)$。由于翻折，这条曲线从左到右下降。定义域和值域仍是全体实数——平移和翻折不会限制立方根函数。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Solving equations: graphs versus algebra",
              "zh": "解方程：图象法与代数法"
            },
            {
              "type": "p",
              "en": "An equation like $\\sqrt{x + 3} = x - 3$ can be solved two ways. Graphically: plot $y = \\sqrt{x+3}$ and $y = x - 3$ and read the $x$-coordinate of each intersection point. Algebraically: square both sides and solve the resulting quadratic — but squaring can create extraneous solutions, so every candidate must be checked in the original equation. The graph never lies: it shows exactly one intersection here, at $x = 6$, even though the algebra produces the extra candidate $x = 1$.",
              "zh": "像 $\\sqrt{x + 3} = x - 3$ 这样的方程有两种解法。图象法：画出 $y = \\sqrt{x+3}$ 和 $y = x - 3$，读出每个交点的横坐标。代数法：两边平方后解所得的二次方程——但平方可能产生增根，所以每个候选解都必须代回原方程检验。图象不会说谎：这里恰好只有一个交点 $x = 6$，尽管代数法会多出一个候选解 $x = 1$。"
            },
            {
              "type": "note",
              "en": "Test tip: on calculator-active questions, the intersect feature is a fast way to solve or CHECK a radical equation — an extraneous solution simply never appears as an intersection point. On no-calculator questions, a quick sketch still tells you how many solutions to expect before you do any algebra.",
              "zh": "考试技巧：在允许使用计算器的题目中，求交点功能是解根式方程或检验答案的快捷方式——增根根本不会作为交点出现。在禁用计算器的题目中，快速草图也能在动笔计算之前告诉你应该有几个解。"
            },
            {
              "type": "h3",
              "en": "Radical models in the real world",
              "zh": "现实中的根式模型"
            },
            {
              "type": "p",
              "en": "Square root models appear whenever a formula is \"solved backwards\" from a square. Two classics: the period of a pendulum of length $L$ meters is $T = 2\\pi\\sqrt{\\frac{L}{9.8}}$ seconds, and the speed of a car (in mph) that left skid marks of length $d$ feet on a road with drag factor $f$ is $s = \\sqrt{30fd}$. In both, the graph's slow-rising shape has physical meaning: quadrupling $L$ or $d$ only doubles $T$ or $s$.",
              "zh": "当公式由平方关系\"反解\"而来时，就会出现平方根模型。两个经典例子：长为 $L$ 米的单摆周期为 $T = 2\\pi\\sqrt{\\frac{L}{9.8}}$ 秒；在阻力系数为 $f$ 的路面上留下 $d$ 英尺刹车痕的汽车速度（英里/小时）为 $s = \\sqrt{30fd}$。在这两个模型中，图象缓慢上升的形状具有物理意义：$L$ 或 $d$ 变为原来的 4 倍，$T$ 或 $s$ 只变为原来的 2 倍。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Skid-mark model",
                "zh": "例题 3：刹车痕模型"
              },
              "problem": {
                "en": "On dry asphalt the drag factor is $f = 0.8$, so a car's speed is modeled by $s = \\sqrt{30(0.8)d} = \\sqrt{24d}$, with $s$ in mph and $d$ the skid length in feet. An officer measures skid marks and finds the car was traveling 48 mph. How long were the skid marks?",
                "zh": "在干燥的沥青路面上阻力系数 $f = 0.8$，汽车速度的模型为 $s = \\sqrt{30(0.8)d} = \\sqrt{24d}$，其中 $s$ 的单位是英里/小时，$d$ 是刹车痕长度（英尺）。警官根据刹车痕测得车速为 48 英里/小时。刹车痕有多长？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitute $s = 48$ and solve for $d$ by squaring both sides:",
                  "zh": "代入 $s = 48$，两边平方后解出 $d$："
                },
                {
                  "type": "math",
                  "tex": "48 = \\sqrt{24d} \\;\\Rightarrow\\; 48^2 = 24d \\;\\Rightarrow\\; d = \\frac{2304}{24} = 96"
                },
                {
                  "type": "p",
                  "en": "The skid marks were 96 feet long. Squaring is safe here because both sides are non-negative, but a quick check confirms it: $\\sqrt{24 \\cdot 96} = \\sqrt{2304} = 48$. ✓",
                  "zh": "刹车痕长 96 英尺。这里两边都非负，平方不会产生增根，但仍可快速检验：$\\sqrt{24 \\cdot 96} = \\sqrt{2304} = 48$，正确。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the domain of $y = \\sqrt{x - 5} + 2$?",
                "zh": "$y = \\sqrt{x - 5} + 2$ 的定义域是什么？"
              },
              "choices": [
                "$x \\ge -5$",
                "$x \\ge 5$",
                "$x \\ge 2$",
                "$x \\ge 0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The expression under the radical must be non-negative: $x - 5 \\ge 0$, so $x \\ge 5$. The $+2$ outside shifts the graph up and affects the range ($y \\ge 2$), not the domain. Choosing $x \\ge -5$ reverses the direction of the horizontal shift.",
                "zh": "根号下的式子必须非负：$x - 5 \\ge 0$，即 $x \\ge 5$。函数外的 $+2$ 使图象上移，影响的是值域（$y \\ge 2$）而非定义域。选 $x \\ge -5$ 是把水平平移的方向弄反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation represents $y = \\sqrt[3]{x}$ reflected across the $x$-axis and shifted up 4 units?",
                "zh": "哪个式子表示把 $y = \\sqrt[3]{x}$ 关于 $x$ 轴翻折后再上移 4 个单位？"
              },
              "choices": [
                "$y = \\sqrt[3]{-x} + 4$",
                "$y = \\sqrt[3]{x + 4}$",
                "$y = -\\sqrt[3]{x - 4}$",
                "$y = -\\sqrt[3]{x} + 4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Reflection across the $x$-axis multiplies the OUTPUT by $-1$, giving $-\\sqrt[3]{x}$; shifting up 4 adds 4 outside: $y = -\\sqrt[3]{x} + 4$. The tempting first choice, $\\sqrt[3]{-x}+4$, reflects across the $y$-axis instead — for cube roots the two reflections happen to give matching graphs, but the transformation named is the wrong one, and $\\sqrt[3]{x+4}$ is a shift left, not up.",
                "zh": "关于 $x$ 轴翻折是把输出乘以 $-1$，得 $-\\sqrt[3]{x}$；上移 4 是在函数外加 4：$y = -\\sqrt[3]{x} + 4$。诱人的第一个选项 $\\sqrt[3]{-x}+4$ 是关于 $y$ 轴翻折——对立方根函数两种翻折的图象恰好相同，但它描述的变换不是题目要求的那个；而 $\\sqrt[3]{x+4}$ 是左移而非上移。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The range of $y = 3\\sqrt{x + 1} - 6$ is $y \\ge k$. Enter the value of $k$ (an integer).",
                "zh": "$y = 3\\sqrt{x + 1} - 6$ 的值域为 $y \\ge k$。请填 $k$ 的值（一个整数）。"
              },
              "answer": "-6",
              "accept": [
                "-6.0"
              ],
              "explanation": {
                "en": "The radical part $3\\sqrt{x+1}$ is smallest (zero) at the endpoint $x = -1$, so the minimum output is $0 - 6 = -6$. Since $a = 3 > 0$, the graph rises from there: range $y \\ge -6$.",
                "zh": "根式部分 $3\\sqrt{x+1}$ 在端点 $x = -1$ 处取最小值 0，所以最小输出为 $0 - 6 = -6$。因为 $a = 3 > 0$，图象从该点向上延伸：值域为 $y \\ge -6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The point $(9, 3)$ lies on the parent graph $y = \\sqrt{x}$. Which point lies on the graph of $y = 2\\sqrt{x - 1}$?",
                "zh": "点 $(9, 3)$ 在母函数 $y = \\sqrt{x}$ 的图象上。下列哪个点在 $y = 2\\sqrt{x - 1}$ 的图象上？"
              },
              "choices": [
                "$(8, 6)$",
                "$(10, 3)$",
                "$(10, 6)$",
                "$(9, 6)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The transformation shifts right 1 and doubles the $y$-value: $(9, 3) \\to (9 + 1, 2 \\cdot 3) = (10, 6)$. Check: $2\\sqrt{10 - 1} = 2\\sqrt{9} = 6$. ✓ The choice $(8,6)$ shifts left instead of right, and $(10,3)$ forgets the vertical stretch.",
                "zh": "该变换将图象右移 1 并把 $y$ 值翻倍：$(9, 3) \\to (9 + 1, 2 \\cdot 3) = (10, 6)$。检验：$2\\sqrt{10 - 1} = 2\\sqrt{9} = 6$，正确。选项 $(8,6)$ 是左移而非右移，$(10,3)$ 则忘了竖直拉伸。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which function has domain AND range equal to all real numbers?",
                "zh": "哪个函数的定义域和值域都是全体实数？"
              },
              "choices": [
                "$y = 5\\sqrt[3]{x - 7} + 2$",
                "$y = \\sqrt{x} + 100$",
                "$y = -\\sqrt{x + 7}$",
                "$y = \\sqrt{x^2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Cube roots accept every real input and produce every real output, and no shift, stretch, or reflection changes that — so $5\\sqrt[3]{x-7}+2$ works. Both square root options restrict domain and range, and $\\sqrt{x^2} = |x|$ has range $y \\ge 0$ even though its domain is all reals — a tempting trap.",
                "zh": "立方根接受任何实数输入并产生任何实数输出，平移、伸缩、翻折都不会改变这一点——所以 $5\\sqrt[3]{x-7}+2$ 符合要求。两个平方根选项的定义域和值域都受限；而 $\\sqrt{x^2} = |x|$ 虽然定义域是全体实数，值域却是 $y \\ge 0$——这是个诱人的陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The period of a pendulum of length $L$ meters is $T = 2\\pi\\sqrt{\\frac{L}{9.8}}$ seconds. Find the period of a pendulum of length $L = 2.45$ m. Round to the nearest hundredth of a second.",
                "zh": "长为 $L$ 米的单摆周期为 $T = 2\\pi\\sqrt{\\frac{L}{9.8}}$ 秒。求 $L = 2.45$ 米的单摆的周期，结果保留两位小数（秒）。"
              },
              "answer": "3.14",
              "accept": [
                "3.14 s",
                "3.142"
              ],
              "explanation": {
                "en": "Compute inside out: $\\frac{2.45}{9.8} = 0.25$, and $\\sqrt{0.25} = 0.5$. Then $T = 2\\pi(0.5) = \\pi \\approx 3.14$ seconds. Choosing a length that makes the fraction a perfect square keeps the arithmetic clean — a common design in test questions.",
                "zh": "由内向外计算：$\\frac{2.45}{9.8} = 0.25$，$\\sqrt{0.25} = 0.5$。于是 $T = 2\\pi(0.5) = \\pi \\approx 3.14$ 秒。题目选取使分数为完全平方的摆长，让计算简洁——这是考题常见的设计。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To solve $\\sqrt{x + 3} = x - 3$ graphically, you graph $y = \\sqrt{x+3}$ and $y = x - 3$ together. What does the graph show?",
                "zh": "用图象法解 $\\sqrt{x + 3} = x - 3$ 时，同时画出 $y = \\sqrt{x+3}$ 与 $y = x - 3$。图象显示了什么？"
              },
              "choices": [
                "Two intersections: $x = 1$ and $x = 6$ / 两个交点：$x = 1$ 和 $x = 6$",
                "No intersections: no solution / 没有交点：无解",
                "One intersection at $x = 6$; the algebraic candidate $x = 1$ is extraneous / 只有一个交点 $x = 6$；代数候选解 $x = 1$ 是增根",
                "One intersection at $x = 1$; the candidate $x = 6$ is extraneous / 只有一个交点 $x = 1$；候选解 $x = 6$ 是增根"
              ],
              "answer": 2,
              "explanation": {
                "en": "Squaring gives $x + 3 = x^2 - 6x + 9$, i.e. $x^2 - 7x + 6 = (x-1)(x-6) = 0$, so the candidates are $x = 1$ and $x = 6$. But at $x = 1$ the right side is $1 - 3 = -2$ while the square root is $+2$, so the curves do not meet there — only $x = 6$ (where $\\sqrt{9} = 3 = 6-3$) is a true intersection. The first choice is exactly what you would claim if you forgot to check for extraneous roots.",
                "zh": "两边平方得 $x + 3 = x^2 - 6x + 9$，即 $x^2 - 7x + 6 = (x-1)(x-6) = 0$，候选解为 $x = 1$ 和 $x = 6$。但当 $x = 1$ 时右边为 $1 - 3 = -2$，而平方根为 $+2$，两条曲线在此并不相交——只有 $x = 6$（此时 $\\sqrt{9} = 3 = 6-3$）是真正的交点。第一个选项正是忘记检验增根时会得到的答案。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "On a wet road the drag factor is $f = 0.5$, so a car's speed satisfies $s = \\sqrt{30(0.5)d} = \\sqrt{15d}$, with $s$ in mph and $d$ in feet. A crash investigator concludes a car was traveling exactly 45 mph. How many feet long were its skid marks? Give an integer.",
                "zh": "在湿滑路面上阻力系数 $f = 0.5$，汽车速度满足 $s = \\sqrt{30(0.5)d} = \\sqrt{15d}$，其中 $s$ 的单位为英里/小时，$d$ 为英尺。事故调查员判定车速恰为 45 英里/小时。刹车痕长多少英尺？请填一个整数。"
              },
              "answer": "135",
              "accept": [
                "135.0",
                "135 ft"
              ],
              "explanation": {
                "en": "Set $45 = \\sqrt{15d}$ and square both sides: $2025 = 15d$, so $d = 135$ feet. Squaring introduces no extraneous root here since both sides are non-negative; the check $\\sqrt{15 \\cdot 135} = \\sqrt{2025} = 45$ confirms it. Note the radical model's slow growth: at 90 mph the marks would be $\\frac{8100}{15} = 540$ feet — four times as long for double the speed.",
                "zh": "令 $45 = \\sqrt{15d}$，两边平方得 $2025 = 15d$，所以 $d = 135$ 英尺。两边均非负，平方不产生增根；检验 $\\sqrt{15 \\cdot 135} = \\sqrt{2025} = 45$，正确。注意根式模型增长缓慢：车速 90 英里/小时时刹车痕为 $\\frac{8100}{15} = 540$ 英尺——速度翻倍，痕迹变为四倍。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "exponential-logarithmic",
      "title": "Unit 5: Exponential and Logarithmic Functions",
      "titleZh": "第五单元：指数函数与对数函数",
      "lessons": [
        {
          "id": "exponential-functions-and-e",
          "title": "Exponential Functions and the Number e",
          "titleZh": "指数函数与自然常数 e",
          "content": [
            {
              "type": "h2",
              "en": "The Exponential Function",
              "zh": "指数函数"
            },
            {
              "type": "p",
              "en": "An exponential function has the form $f(x) = a \\cdot b^x$, where $a \\ne 0$ is the initial value (the $y$-intercept) and the base $b$ satisfies $b > 0$, $b \\ne 1$. Unlike a linear function, which adds the same amount each step, an exponential function multiplies by the same factor $b$ each step. That single difference is why exponential quantities eventually outrun any polynomial.",
              "zh": "指数函数的形式为 $f(x) = a \\cdot b^x$，其中 $a \\ne 0$ 是初始值（即 $y$ 轴截距），底数 $b$ 满足 $b > 0$ 且 $b \\ne 1$。线性函数每一步增加相同的数量，而指数函数每一步乘以相同的因子 $b$。正是这个区别使指数量最终超过任何多项式。"
            },
            {
              "type": "p",
              "en": "When $b > 1$ the function models exponential growth: the graph rises steeply to the right. When $0 < b < 1$ it models exponential decay: the graph falls toward the $x$-axis but never touches it.",
              "zh": "当 $b > 1$ 时函数表示指数增长：图像向右急剧上升。当 $0 < b < 1$ 时表示指数衰减：图像向 $x$ 轴不断靠近但永不相交。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "The $y$-intercept is $(0, a)$, because $b^0 = 1$.",
                  "zh": "$y$ 轴截距为 $(0, a)$，因为 $b^0 = 1$。"
                },
                {
                  "en": "The horizontal asymptote of $y = a \\cdot b^x$ is $y = 0$; the graph approaches it but never reaches it.",
                  "zh": "$y = a \\cdot b^x$ 的水平渐近线是 $y = 0$；图像无限接近但永不到达。"
                },
                {
                  "en": "Domain: all real numbers. Range (for $a > 0$): $y > 0$.",
                  "zh": "定义域：全体实数。值域（当 $a > 0$ 时）：$y > 0$。"
                },
                {
                  "en": "Growth ($b>1$) is always increasing; decay ($0<b<1$) is always decreasing. Both pass the horizontal line test, so exponentials have inverses.",
                  "zh": "增长型（$b>1$）恒增；衰减型（$0<b<1$）恒减。两者都通过水平线检验，因此指数函数都有反函数。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: shifting the graph moves the asymptote. For $y = a \\cdot b^x + k$ the horizontal asymptote is $y = k$, not $y = 0$, and the range becomes $y > k$ (for $a > 0$). Always translate the asymptote along with the graph.",
              "zh": "常见错误：平移图像时渐近线也随之移动。对于 $y = a \\cdot b^x + k$，水平渐近线是 $y = k$ 而不是 $y = 0$，值域相应变为 $y > k$（当 $a > 0$ 时）。渐近线要和图像一起平移。"
            },
            {
              "type": "h3",
              "en": "Percent growth and decay models",
              "zh": "百分比增长与衰减模型"
            },
            {
              "type": "p",
              "en": "If a quantity changes by a fixed percent $r$ (written as a decimal) each time period, its value after $t$ periods is given by the models below. The number $1+r$ or $1-r$ is called the growth factor or decay factor.",
              "zh": "若某个量在每个时间段内按固定百分比 $r$（写成小数）变化，则 $t$ 个时间段后的值由下式给出。$1+r$ 或 $1-r$ 称为增长因子或衰减因子。"
            },
            {
              "type": "math",
              "tex": "y = a(1+r)^t \\quad \\text{(growth)} \\qquad y = a(1-r)^t \\quad \\text{(decay)}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Car depreciation",
                "zh": "例题 1：汽车折旧"
              },
              "problem": {
                "en": "A new car costs $\\$24{,}000$ and loses $15\\%$ of its value each year. Write a model for its value and find the value after 4 years, to the nearest dollar.",
                "zh": "一辆新车价值 $\\$24{,}000$，每年贬值 $15\\%$。写出其价值的模型，并求 4 年后的价值（精确到美元）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Losing $15\\%$ means keeping $85\\%$ each year, so the decay factor is $1 - 0.15 = 0.85$:",
                  "zh": "每年贬值 $15\\%$ 意味着保留 $85\\%$，所以衰减因子是 $1 - 0.15 = 0.85$："
                },
                {
                  "type": "math",
                  "tex": "V(t) = 24000(0.85)^t"
                },
                {
                  "type": "p",
                  "en": "After 4 years: $V(4) = 24000(0.85)^4 = 24000(0.52200625) \\approx \\$12{,}528$.",
                  "zh": "4 年后：$V(4) = 24000(0.85)^4 = 24000(0.52200625) \\approx \\$12{,}528$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Compound Interest",
              "zh": "复利"
            },
            {
              "type": "p",
              "en": "When a bank pays interest $n$ times per year, each payment uses the annual rate $r$ divided by $n$, and there are $nt$ payments in $t$ years. Interest earns interest — that is what \"compound\" means.",
              "zh": "当银行每年计息 $n$ 次时，每次按年利率 $r$ 除以 $n$ 计息，$t$ 年共计息 $nt$ 次。利息本身也会产生利息——这就是\"复利\"的含义。"
            },
            {
              "type": "math",
              "tex": "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Annually: $n=1$; quarterly: $n=4$; monthly: $n=12$; daily: $n=365$.",
                  "zh": "每年一次：$n=1$；每季度：$n=4$；每月：$n=12$；每天：$n=365$。"
                },
                {
                  "en": "$P$ is the principal (starting amount), $A$ is the ending amount, $r$ is the annual rate as a decimal.",
                  "zh": "$P$ 是本金（初始金额），$A$ 是最终金额，$r$ 是写成小数的年利率。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The number e",
              "zh": "自然常数 e"
            },
            {
              "type": "p",
              "en": "What happens if we compound more and more often — monthly, daily, every second? The amount grows, but it does not blow up. Compounding $\\$1$ at $100\\%$ interest for one year gives $(1 + \\frac{1}{n})^n$, and as $n \\to \\infty$ this expression approaches a specific irrational number, called $e \\approx 2.71828$.",
              "zh": "如果计息越来越频繁——每月、每天、每秒——会怎样？金额会增大，但不会无限增大。把 $\\$1$ 按 $100\\%$ 年利率计息一年得 $(1 + \\frac{1}{n})^n$，当 $n \\to \\infty$ 时这个表达式趋近于一个特定的无理数，记作 $e \\approx 2.71828$。"
            },
            {
              "type": "math",
              "tex": "e = \\lim_{n \\to \\infty}\\left(1 + \\frac{1}{n}\\right)^n \\approx 2.718281828\\ldots"
            },
            {
              "type": "p",
              "en": "In the limit of continuous compounding, the compound interest formula becomes the continuous growth model. It is used for populations, radioactive decay, and any process that changes at every instant.",
              "zh": "在连续计息的极限下，复利公式变为连续增长模型。它用于人口、放射性衰变以及任何每时每刻都在变化的过程。"
            },
            {
              "type": "math",
              "tex": "A = Pe^{rt}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Comparing compounding frequencies",
                "zh": "例题 2：比较计息频率"
              },
              "problem": {
                "en": "You invest $\\$5000$ at $4\\%$ annual interest for 10 years. Compare the balance with monthly compounding versus continuous compounding. Round to the nearest cent.",
                "zh": "你以 $4\\%$ 的年利率投资 $\\$5000$，共 10 年。比较按月复利与连续复利的余额（精确到美分）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Monthly ($n = 12$):",
                  "zh": "按月复利（$n = 12$）："
                },
                {
                  "type": "math",
                  "tex": "A = 5000\\left(1 + \\frac{0.04}{12}\\right)^{120} \\approx \\$7454.16"
                },
                {
                  "type": "p",
                  "en": "Continuous:",
                  "zh": "连续复利："
                },
                {
                  "type": "math",
                  "tex": "A = 5000e^{0.04(10)} = 5000e^{0.4} \\approx \\$7459.12"
                },
                {
                  "type": "p",
                  "en": "Continuous compounding earns only about $\\$4.96$ more. More frequent compounding always earns more, but the amounts are bounded above by the continuous value $Pe^{rt}$.",
                  "zh": "连续复利只多赚约 $\\$4.96$。计息越频繁收益越多，但所有金额都不会超过连续复利的值 $Pe^{rt}$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: keep every intermediate value in your calculator and round only at the very end — rounding $(1+\\frac{r}{n})$ early can throw the final answer off by dollars. Also convert the percent to a decimal before substituting: $4\\%$ is $r = 0.04$, never $r = 4$.",
              "zh": "考试提示：所有中间结果都保留在计算器中，只在最后一步取近似——过早对 $(1+\\frac{r}{n})$ 取近似可能使最终答案差好几美元。代入前务必把百分数化成小数：$4\\%$ 是 $r = 0.04$，绝不是 $r = 4$。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which function models exponential decay?",
                "zh": "下列哪个函数表示指数衰减？"
              },
              "choices": [
                "$y = 3(1.08)^x$",
                "$y = 500(0.85)^x$",
                "$y = -2(1.5)^x$",
                "$y = 4x^{0.5}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Decay requires a base strictly between 0 and 1, so $y = 500(0.85)^x$ decays. $y=-2(1.5)^x$ is tempting because it decreases, but its base is $1.5>1$ — it is a reflected growth curve, not percent decay. $4x^{0.5}$ is a power function, not exponential.",
                "zh": "衰减要求底数严格介于 0 与 1 之间，所以 $y = 500(0.85)^x$ 是衰减。$y=-2(1.5)^x$ 虽然递减，容易误选，但它的底数 $1.5>1$——它是被翻折的增长曲线，不是百分比衰减。$4x^{0.5}$ 是幂函数，不是指数函数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = 3 \\cdot 2^x$, find $f(4)$. Enter an integer.",
                "zh": "对于 $f(x) = 3 \\cdot 2^x$，求 $f(4)$。请填一个整数。"
              },
              "answer": "48",
              "accept": [
                "48.0"
              ],
              "explanation": {
                "en": "$f(4) = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$. Evaluate the power first — do not multiply $3 \\cdot 2 = 6$ and then raise to the 4th power.",
                "zh": "$f(4) = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$。先算乘方——不要先算 $3 \\cdot 2 = 6$ 再取 4 次方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the horizontal asymptote of $y = 2^x - 5$?",
                "zh": "$y = 2^x - 5$ 的水平渐近线是什么？"
              },
              "choices": [
                "$y = 0$",
                "$x = -5$",
                "$y = 2$",
                "$y = -5$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The parent $y = 2^x$ has asymptote $y = 0$; shifting down 5 moves the asymptote to $y = -5$. Choice $y=0$ is tempting if you forget that vertical shifts move the asymptote too, and $x=-5$ is a vertical line, which can never be a horizontal asymptote.",
                "zh": "母函数 $y = 2^x$ 的渐近线是 $y = 0$；下移 5 后渐近线变为 $y = -5$。若忘记竖直平移会移动渐近线就会误选 $y=0$；而 $x=-5$ 是竖直线，不可能是水平渐近线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A population grows by $6\\%$ per year. What is the growth factor $b$ in the model $P = a \\cdot b^t$?",
                "zh": "某人口每年增长 $6\\%$。模型 $P = a \\cdot b^t$ 中的增长因子 $b$ 是多少？"
              },
              "choices": [
                "$1.06$",
                "$0.06$",
                "$1.6$",
                "$0.94$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Growing by $6\\%$ means multiplying by $100\\% + 6\\% = 1.06$ each year. The distractor $0.06$ is just the rate $r$, not the factor $1+r$; $0.94$ would be a $6\\%$ decay.",
                "zh": "每年增长 $6\\%$ 即每年乘以 $100\\% + 6\\% = 1.06$。干扰项 $0.06$ 只是增长率 $r$，不是因子 $1+r$；$0.94$ 对应的是 $6\\%$ 的衰减。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "$\\$1000$ is invested at $4\\%$ annual interest, compounded quarterly. Find the balance after 2 years. Round to the nearest cent (e.g. 1234.56).",
                "zh": "$\\$1000$ 以 $4\\%$ 的年利率投资，每季度复利一次。求 2 年后的余额，精确到美分（例如 1234.56）。"
              },
              "answer": "1082.86",
              "accept": [
                "$1082.86",
                "1082.86 dollars"
              ],
              "explanation": {
                "en": "$A = 1000(1 + \\frac{0.04}{4})^{4 \\cdot 2} = 1000(1.01)^8 \\approx 1082.86$. Common error: using exponent $2$ instead of $nt = 8$.",
                "zh": "$A = 1000(1 + \\frac{0.04}{4})^{4 \\cdot 2} = 1000(1.01)^8 \\approx 1082.86$。常见错误：指数写成 $2$ 而不是 $nt = 8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "$\\$2000$ grows at $5\\%$ annual interest compounded continuously for 3 years. The balance is closest to:",
                "zh": "$\\$2000$ 以 $5\\%$ 的年利率连续复利 3 年，余额最接近："
              },
              "choices": [
                "$\\$2300.00$",
                "$\\$2315.25$",
                "$\\$2323.67$",
                "$\\$2431.00$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Continuous compounding uses $A = Pe^{rt} = 2000e^{0.05 \\cdot 3} = 2000e^{0.15} \\approx \\$2323.67$. The distractor $\\$2315.25$ is annual compounding $2000(1.05)^3$, and $\\$2300$ is simple (non-compound) interest.",
                "zh": "连续复利用 $A = Pe^{rt} = 2000e^{0.05 \\cdot 3} = 2000e^{0.15} \\approx \\$2323.67$。干扰项 $\\$2315.25$ 是每年复利 $2000(1.05)^3$ 的结果，$\\$2300$ 是单利的结果。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The number $e$ is defined as:",
                "zh": "自然常数 $e$ 的定义是："
              },
              "choices": [
                "$\\lim_{n \\to \\infty} n^{1/n}$",
                "$\\lim_{n \\to \\infty} (1+n)^n$",
                "exactly $2.718$ / 恰好等于 $2.718$",
                "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$e$ is the limit of $(1 + \\frac{1}{n})^n$ as $n \\to \\infty$ — the result of compounding $100\\%$ interest ever more frequently. It is irrational, so \"exactly $2.718$\" is wrong ($2.718$ is only an approximation), and $(1+n)^n$ blows up to infinity.",
                "zh": "$e$ 是 $n \\to \\infty$ 时 $(1 + \\frac{1}{n})^n$ 的极限——即 $100\\%$ 利率下计息频率无限增大的结果。$e$ 是无理数，所以\"恰好等于 $2.718$\"错误（$2.718$ 只是近似值），而 $(1+n)^n$ 会趋于无穷大。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A town of 12,000 people shrinks by $3\\%$ per year. Predict the population after 5 years, rounded to the nearest whole person. Enter an integer.",
                "zh": "一个 12,000 人的城镇每年人口减少 $3\\%$。预测 5 年后的人口，四舍五入到整数。请填一个整数。"
              },
              "answer": "10305",
              "accept": [
                "10,305"
              ],
              "explanation": {
                "en": "Decay model: $P = 12000(0.97)^5 \\approx 12000(0.858734) \\approx 10305$. The decay factor is $1 - 0.03 = 0.97$; multiplying by $0.03$ or subtracting $3\\%$ of 12,000 five times (linear thinking) both give wrong answers.",
                "zh": "衰减模型：$P = 12000(0.97)^5 \\approx 12000(0.858734) \\approx 10305$。衰减因子是 $1 - 0.03 = 0.97$；乘以 $0.03$，或从 12,000 中连续减去五次 $3\\%$（线性思维）都会得到错误答案。"
              }
            }
          ]
        },
        {
          "id": "logarithms-and-properties",
          "title": "Logarithms and Their Properties",
          "titleZh": "对数及其运算性质",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Logarithm?",
              "zh": "什么是对数？"
            },
            {
              "type": "p",
              "en": "A logarithm answers the inverse question about an exponent. The equation $2^x = 8$ asks \"what power of 2 gives 8?\" The logarithm names that answer: $\\log_2 8 = 3$. In general, $\\log_b y$ is the exponent you must raise $b$ to in order to get $y$.",
              "zh": "对数回答的是关于指数的逆向问题。方程 $2^x = 8$ 问的是\"2 的多少次方等于 8？\"对数正是这个答案的名字：$\\log_2 8 = 3$。一般地，$\\log_b y$ 就是使 $b$ 的幂等于 $y$ 所需的指数。"
            },
            {
              "type": "math",
              "tex": "\\log_b y = x \\iff b^x = y \\qquad (b > 0,\\ b \\ne 1,\\ y > 0)"
            },
            {
              "type": "p",
              "en": "You can evaluate many logarithms mentally by asking the exponent question: $\\log_3 81 = 4$ because $3^4 = 81$; $\\log_5 \\frac{1}{25} = -2$ because $5^{-2} = \\frac{1}{25}$; $\\log_9 3 = \\frac{1}{2}$ because $9^{1/2} = 3$.",
              "zh": "很多对数可以通过心算指数问题来求值：$\\log_3 81 = 4$，因为 $3^4 = 81$；$\\log_5 \\frac{1}{25} = -2$，因为 $5^{-2} = \\frac{1}{25}$；$\\log_9 3 = \\frac{1}{2}$，因为 $9^{1/2} = 3$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\log_b 1 = 0$ for every valid base, because $b^0 = 1$.",
                  "zh": "对任何合法底数都有 $\\log_b 1 = 0$，因为 $b^0 = 1$。"
                },
                {
                  "en": "$\\log_b b = 1$, because $b^1 = b$.",
                  "zh": "$\\log_b b = 1$，因为 $b^1 = b$。"
                },
                {
                  "en": "Inverse pair: $\\log_b b^x = x$ and $b^{\\log_b x} = x$ — the log and the exponential cancel each other.",
                  "zh": "互逆关系：$\\log_b b^x = x$ 且 $b^{\\log_b x} = x$——对数与指数互相抵消。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Common and natural logarithms",
              "zh": "常用对数与自然对数"
            },
            {
              "type": "p",
              "en": "Two bases are so important they get their own symbols: $\\log x$ (no base written) means $\\log_{10} x$, the common logarithm, and $\\ln x$ means $\\log_e x$, the natural logarithm. Your calculator has buttons for both. For example, $\\log 1000 = 3$ and $\\ln e^7 = 7$.",
              "zh": "有两个底数极为重要，因而有专门的记号：$\\log x$（不写底数）表示常用对数 $\\log_{10} x$，$\\ln x$ 表示自然对数 $\\log_e x$。计算器上两者都有专用按键。例如 $\\log 1000 = 3$，$\\ln e^7 = 7$。"
            },
            {
              "type": "h3",
              "en": "The graph of a logarithmic function",
              "zh": "对数函数的图像"
            },
            {
              "type": "p",
              "en": "Since $y = \\log_b x$ is the inverse of $y = b^x$, its graph is the reflection of the exponential curve across the line $y = x$. The exponential's horizontal asymptote $y=0$ becomes the log's vertical asymptote $x = 0$. The graph passes through $(1, 0)$ and $(b, 1)$, has domain $x > 0$, and range all real numbers.",
              "zh": "因为 $y = \\log_b x$ 是 $y = b^x$ 的反函数，它的图像是指数曲线关于直线 $y = x$ 的对称图形。指数函数的水平渐近线 $y=0$ 变成对数函数的竖直渐近线 $x = 0$。图像经过 $(1, 0)$ 和 $(b, 1)$，定义域为 $x > 0$，值域为全体实数。"
            },
            {
              "type": "note",
              "en": "Common mistake: the logarithm of zero or of a negative number is undefined — no power of a positive base can produce $0$ or a negative output. But the OUTPUT of a log can be negative: $\\log 0.01 = -2$ is perfectly fine. Keep \"input must be positive\" separate from \"output can be anything.\"",
              "zh": "常见错误：零或负数的对数无定义——正底数的任何次幂都不可能等于 $0$ 或负数。但对数的输出可以为负：$\\log 0.01 = -2$ 完全合法。要区分\"输入必须为正\"与\"输出可以是任意实数\"。"
            },
            {
              "type": "h2",
              "en": "Properties of Logarithms",
              "zh": "对数的运算性质"
            },
            {
              "type": "p",
              "en": "Because logs are exponents, every log property is an exponent rule in disguise. From $b^m \\cdot b^n = b^{m+n}$: if $M = b^m$ and $N = b^n$, then $MN = b^{m+n}$, so $\\log_b(MN) = m + n = \\log_b M + \\log_b N$. The quotient and power properties come from $b^m / b^n = b^{m-n}$ and $(b^m)^p = b^{mp}$ in the same way.",
              "zh": "因为对数就是指数，每一条对数性质都是指数法则的化身。由 $b^m \\cdot b^n = b^{m+n}$：设 $M = b^m$，$N = b^n$，则 $MN = b^{m+n}$，于是 $\\log_b(MN) = m + n = \\log_b M + \\log_b N$。商与幂的性质同理来自 $b^m / b^n = b^{m-n}$ 和 $(b^m)^p = b^{mp}$。"
            },
            {
              "type": "math",
              "tex": "\\log_b(MN) = \\log_b M + \\log_b N \\qquad \\log_b\\frac{M}{N} = \\log_b M - \\log_b N \\qquad \\log_b M^p = p\\log_b M"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Expanding",
                "zh": "例题 1：展开"
              },
              "problem": {
                "en": "Expand $\\log_2 \\dfrac{8x^3}{y}$ completely.",
                "zh": "把 $\\log_2 \\dfrac{8x^3}{y}$ 完全展开。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply the quotient property, then the product property, then the power property:",
                  "zh": "依次应用商的性质、积的性质和幂的性质："
                },
                {
                  "type": "math",
                  "tex": "\\log_2 \\frac{8x^3}{y} = \\log_2 8 + \\log_2 x^3 - \\log_2 y = 3 + 3\\log_2 x - \\log_2 y"
                },
                {
                  "type": "p",
                  "en": "Note that $\\log_2 8$ simplifies to the exact value $3$ — always evaluate numeric logs when you can.",
                  "zh": "注意 $\\log_2 8$ 可化简为精确值 $3$——能求出数值的对数一定要算出来。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Condensing reverses the process: coefficients become powers, sums become products, and differences become quotients — ending with a single logarithm.",
              "zh": "合并是展开的逆过程：系数变成幂，和变成积，差变成商——最终写成单个对数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Condensing",
                "zh": "例题 2：合并"
              },
              "problem": {
                "en": "Write $2\\log x + \\frac{1}{2}\\log y - 3\\log z$ as a single logarithm.",
                "zh": "把 $2\\log x + \\frac{1}{2}\\log y - 3\\log z$ 写成单个对数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Move each coefficient inside as an exponent first: $\\log x^2 + \\log y^{1/2} - \\log z^3$.",
                  "zh": "先把每个系数移入作为指数：$\\log x^2 + \\log y^{1/2} - \\log z^3$。"
                },
                {
                  "type": "p",
                  "en": "Then combine: sums multiply, differences divide.",
                  "zh": "再合并：加号对应相乘，减号对应相除。"
                },
                {
                  "type": "math",
                  "tex": "2\\log x + \\tfrac{1}{2}\\log y - 3\\log z = \\log\\frac{x^2\\sqrt{y}}{z^3}"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: there is NO property for the log of a sum. $\\log(M+N)$ does not equal $\\log M + \\log N$, and $(\\log M)(\\log N)$ does not equal $\\log M + \\log N$ either. Test writers love these traps — the properties only cover products, quotients, and powers inside the log.",
              "zh": "考试提示：和的对数没有任何运算性质。$\\log(M+N)$ 不等于 $\\log M + \\log N$，$(\\log M)(\\log N)$ 也不等于 $\\log M + \\log N$。出题人最爱设这类陷阱——对数性质只适用于对数内部的积、商和幂。"
            },
            {
              "type": "h3",
              "en": "The change of base formula",
              "zh": "换底公式"
            },
            {
              "type": "p",
              "en": "Calculators only have $\\log$ and $\\ln$ buttons, but the change of base formula converts any base:",
              "zh": "计算器只有 $\\log$ 和 $\\ln$ 两个按键，但换底公式可以转换任何底数："
            },
            {
              "type": "math",
              "tex": "\\log_b x = \\frac{\\log x}{\\log b} = \\frac{\\ln x}{\\ln b}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Change of base",
                "zh": "例题 3：换底"
              },
              "problem": {
                "en": "Evaluate $\\log_7 100$ to the nearest hundredth.",
                "zh": "求 $\\log_7 100$ 的值，精确到百分位。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "\\log_7 100 = \\frac{\\ln 100}{\\ln 7} = \\frac{4.6052}{1.9459} \\approx 2.37"
                },
                {
                  "type": "p",
                  "en": "Sanity check: $7^2 = 49 < 100 < 343 = 7^3$, so the answer must lie between 2 and 3. ✓",
                  "zh": "合理性检验：$7^2 = 49 < 100 < 343 = 7^3$，所以答案必定介于 2 与 3 之间，正确。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\log_2 32$. Enter an integer.",
                "zh": "求 $\\log_2 32$ 的值。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "Ask the exponent question: $2$ to what power gives $32$? Since $2^5 = 32$, the answer is $5$.",
                "zh": "问指数问题：$2$ 的多少次方等于 $32$？因为 $2^5 = 32$，答案是 $5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\log_3 \\frac{1}{9}$.",
                "zh": "求 $\\log_3 \\frac{1}{9}$ 的值。"
              },
              "choices": [
                "$2$",
                "$-2$",
                "$\\frac{1}{2}$",
                "$-\\frac{1}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$3^{-2} = \\frac{1}{9}$, so $\\log_3 \\frac{1}{9} = -2$. The distractor $\\frac{1}{2}$ tempts students who confuse fractional inputs with fractional exponents — a fraction input gives a NEGATIVE exponent, while a root like $\\sqrt{3}$ gives a fractional exponent.",
                "zh": "$3^{-2} = \\frac{1}{9}$，所以 $\\log_3 \\frac{1}{9} = -2$。干扰项 $\\frac{1}{2}$ 会误导把分数输入与分数指数混淆的学生——分数输入对应负指数，而 $\\sqrt{3}$ 这类根式才对应分数指数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation is equivalent to $5^x = 17$?",
                "zh": "哪个等式与 $5^x = 17$ 等价？"
              },
              "choices": [
                "$x = \\log_{17} 5$",
                "$x = \\frac{5}{17}$",
                "$x = \\log 17 - \\log 5$",
                "$x = \\log_5 17$"
              ],
              "answer": 3,
              "explanation": {
                "en": "By the definition $b^x = y \\iff x = \\log_b y$, the base 5 stays as the base: $x = \\log_5 17$. The distractor $\\log_{17} 5$ swaps base and argument — the most common conversion error. Note $\\log 17 - \\log 5 = \\log\\frac{17}{5}$, which is not $\\log_5 17$.",
                "zh": "由定义 $b^x = y \\iff x = \\log_b y$，底数 5 仍作底数：$x = \\log_5 17$。干扰项 $\\log_{17} 5$ 把底数和真数弄反了——这是最常见的转换错误。注意 $\\log 17 - \\log 5 = \\log\\frac{17}{5}$，并不等于 $\\log_5 17$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\ln e^7$.",
                "zh": "求 $\\ln e^7$ 的值。"
              },
              "choices": [
                "$7$",
                "$e^7$",
                "$\\frac{7}{e}$",
                "$\\ln 7$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\ln$ and $e^x$ are inverse functions, so $\\ln e^7 = 7$ directly (or use the power property: $\\ln e^7 = 7\\ln e = 7 \\cdot 1 = 7$). No calculator needed.",
                "zh": "$\\ln$ 与 $e^x$ 互为反函数，所以 $\\ln e^7 = 7$（也可用幂的性质：$\\ln e^7 = 7\\ln e = 7 \\cdot 1 = 7$）。无需计算器。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals $\\log_b \\dfrac{x^3 y}{z}$?",
                "zh": "哪个表达式等于 $\\log_b \\dfrac{x^3 y}{z}$？"
              },
              "choices": [
                "$3\\log_b x + \\log_b y + \\log_b z$",
                "$\\frac{3\\log_b x \\cdot \\log_b y}{\\log_b z}$",
                "$3\\log_b x + \\log_b y - \\log_b z$",
                "$3(\\log_b x + \\log_b y - \\log_b z)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Product terms add, the divisor subtracts, and the exponent 3 becomes a coefficient on $\\log_b x$ only: $3\\log_b x + \\log_b y - \\log_b z$. The last distractor wrongly applies the 3 to every term, but the exponent belongs only to $x$.",
                "zh": "乘积各项相加，除数项相减，指数 3 只变成 $\\log_b x$ 的系数：$3\\log_b x + \\log_b y - \\log_b z$。最后一个干扰项把 3 错误地作用于每一项，但指数只属于 $x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Condense $2\\ln x - \\ln y$ into a single logarithm.",
                "zh": "把 $2\\ln x - \\ln y$ 合并成单个对数。"
              },
              "choices": [
                "$\\ln(2x - y)$",
                "$\\ln\\frac{x^2}{y}$",
                "$\\frac{\\ln x^2}{\\ln y}$",
                "$\\ln(x^2 y)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The coefficient 2 becomes the exponent: $\\ln x^2$; subtracting $\\ln y$ means dividing by $y$: $\\ln\\frac{x^2}{y}$. The distractor $\\frac{\\ln x^2}{\\ln y}$ confuses a difference of logs with a quotient of logs — subtraction condenses to division INSIDE one log, not division of two logs.",
                "zh": "系数 2 变为指数：$\\ln x^2$；减去 $\\ln y$ 相当于除以 $y$：$\\ln\\frac{x^2}{y}$。干扰项 $\\frac{\\ln x^2}{\\ln y}$ 把对数的差与对数的商混为一谈——相减合并为同一个对数内部的除法，不是两个对数相除。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Use the change of base formula to evaluate $\\log_2 10$. Round to the nearest hundredth (e.g. 3.14).",
                "zh": "用换底公式求 $\\log_2 10$ 的值，精确到百分位（例如 3.14）。"
              },
              "answer": "3.32",
              "accept": [
                "3.322",
                "3.3219"
              ],
              "explanation": {
                "en": "$\\log_2 10 = \\frac{\\ln 10}{\\ln 2} = \\frac{2.3026}{0.6931} \\approx 3.32$. Sanity check: $2^3 = 8 < 10 < 16 = 2^4$, so the answer is between 3 and 4.",
                "zh": "$\\log_2 10 = \\frac{\\ln 10}{\\ln 2} = \\frac{2.3026}{0.6931} \\approx 3.32$。合理性检验：$2^3 = 8 < 10 < 16 = 2^4$，答案应介于 3 与 4 之间。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The loudness of a sound in decibels is $L = 10\\log\\frac{I}{I_0}$. A jet engine has intensity $I = 10^{7.2} I_0$. Find $L$ in decibels. Enter a number.",
                "zh": "声音的响度（分贝）为 $L = 10\\log\\frac{I}{I_0}$。某喷气发动机的声强为 $I = 10^{7.2} I_0$。求 $L$（分贝）。请填一个数。"
              },
              "answer": "72",
              "accept": [
                "72.0",
                "72 dB"
              ],
              "explanation": {
                "en": "Substitute: $L = 10\\log\\frac{10^{7.2} I_0}{I_0} = 10\\log 10^{7.2} = 10(7.2) = 72$ dB. The key step is $\\log 10^{7.2} = 7.2$, since $\\log$ base 10 and $10^x$ are inverses.",
                "zh": "代入：$L = 10\\log\\frac{10^{7.2} I_0}{I_0} = 10\\log 10^{7.2} = 10(7.2) = 72$ 分贝。关键一步是 $\\log 10^{7.2} = 7.2$，因为以 10 为底的对数与 $10^x$ 互为反函数。"
              }
            }
          ]
        },
        {
          "id": "solving-exponential-log-equations",
          "title": "Solving Exponential and Logarithmic Equations",
          "titleZh": "解指数方程与对数方程",
          "content": [
            {
              "type": "h2",
              "en": "Solving Exponential Equations",
              "zh": "解指数方程"
            },
            {
              "type": "h3",
              "en": "Method 1: Make the bases equal",
              "zh": "方法一：化为同底"
            },
            {
              "type": "p",
              "en": "Exponential functions are one-to-one, so if $b^m = b^n$ then $m = n$. When both sides of an equation can be written as powers of the same base, rewrite them, set the exponents equal, and solve the resulting ordinary equation.",
              "zh": "指数函数是一一对应的，因此若 $b^m = b^n$，则 $m = n$。当方程两边都能写成同一底数的幂时，先改写，再令指数相等，然后解所得的普通方程。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Equal bases",
                "zh": "例题 1：同底法"
              },
              "problem": {
                "en": "Solve $27^{x-1} = 9^{2x}$.",
                "zh": "解方程 $27^{x-1} = 9^{2x}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Both 27 and 9 are powers of 3: $27 = 3^3$ and $9 = 3^2$.",
                  "zh": "27 和 9 都是 3 的幂：$27 = 3^3$，$9 = 3^2$。"
                },
                {
                  "type": "math",
                  "tex": "(3^3)^{x-1} = (3^2)^{2x} \\implies 3^{3x-3} = 3^{4x}"
                },
                {
                  "type": "p",
                  "en": "Equal bases force equal exponents: $3x - 3 = 4x$, so $x = -3$. Check: both sides equal $3^{-12}$. ✓",
                  "zh": "同底则指数相等：$3x - 3 = 4x$，解得 $x = -3$。验证：两边都等于 $3^{-12}$，正确。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Method 2: Take a logarithm of both sides",
              "zh": "方法二：两边取对数"
            },
            {
              "type": "p",
              "en": "When the bases cannot be matched — for example $3^x = 20$ — first isolate the exponential expression, then take $\\log$ or $\\ln$ of both sides. The power property pulls the variable out of the exponent, where ordinary algebra can reach it.",
              "zh": "当底数无法化为相同时——例如 $3^x = 20$——先把指数式孤立出来，再对两边取 $\\log$ 或 $\\ln$。幂的性质把变量从指数位置\"拉下来\"，普通代数就能处理了。"
            },
            {
              "type": "math",
              "tex": "b^x = c \\implies x\\ln b = \\ln c \\implies x = \\frac{\\ln c}{\\ln b}"
            },
            {
              "type": "note",
              "en": "Test tip: isolate the exponential BEFORE taking logs. In $5 \\cdot 3^x = 40$, divide by 5 first to get $3^x = 8$, then take logs. Taking logs immediately gives $\\ln 5 + x\\ln 3 = \\ln 40$ — solvable but messier. Also, give the exact answer (like $x = \\frac{\\ln 8}{\\ln 3}$) before rounding; exams often require both.",
              "zh": "考试提示：取对数之前先孤立指数式。对 $5 \\cdot 3^x = 40$，先两边除以 5 得 $3^x = 8$，再取对数。直接取对数会得到 $\\ln 5 + x\\ln 3 = \\ln 40$——虽然可解但更繁琐。另外，先写出精确解（如 $x = \\frac{\\ln 8}{\\ln 3}$）再取近似值；考试常常两者都要求。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Taking logs",
                "zh": "例题 2：取对数法"
              },
              "problem": {
                "en": "Solve $4e^{2x} = 20$. Give an exact answer and a decimal to the nearest thousandth.",
                "zh": "解方程 $4e^{2x} = 20$。给出精确解和精确到千分位的近似解。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Isolate the exponential: $e^{2x} = 5$. Take the natural log of both sides:",
                  "zh": "孤立指数式：$e^{2x} = 5$。两边取自然对数："
                },
                {
                  "type": "math",
                  "tex": "2x = \\ln 5 \\implies x = \\frac{\\ln 5}{2} \\approx 0.805"
                },
                {
                  "type": "p",
                  "en": "We chose $\\ln$ (not $\\log$) because the base is $e$, so $\\ln e^{2x}$ collapses directly to $2x$.",
                  "zh": "这里选 $\\ln$（而不是 $\\log$），因为底数是 $e$，$\\ln e^{2x}$ 可以直接化简为 $2x$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Solving Logarithmic Equations",
              "zh": "解对数方程"
            },
            {
              "type": "p",
              "en": "Two tools solve log equations. If the equation has a single log equal to a constant, rewrite in exponential form: $\\log_b x = c \\implies x = b^c$. If it has one log on each side with the same base, use the one-to-one property: $\\log_b M = \\log_b N \\implies M = N$.",
              "zh": "解对数方程有两个工具。若方程是单个对数等于常数，改写成指数形式：$\\log_b x = c \\implies x = b^c$。若方程两边各有一个同底对数，用一一对应性质：$\\log_b M = \\log_b N \\implies M = N$。"
            },
            {
              "type": "p",
              "en": "If an equation contains several logs on one side, condense them into a single logarithm with the product, quotient, and power properties first — then apply one of the two tools above.",
              "zh": "若方程一边含有多个对数，先用积、商、幂的性质把它们合并成单个对数——然后再使用上述两个工具之一。"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting to check for extraneous solutions. Every argument of every logarithm in the ORIGINAL equation must be positive. Condensing and solving can produce candidate solutions that make an original argument zero or negative — these must be rejected. Always substitute your answers back.",
              "zh": "常见错误：忘记检验增根。原方程中每个对数的真数都必须为正。合并和求解的过程可能产生使原方程某个真数为零或为负的候选解——这些必须舍去。务必把答案代回原方程检验。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: An extraneous solution",
                "zh": "例题 3：增根"
              },
              "problem": {
                "en": "Solve $\\log_2 x + \\log_2(x-2) = 3$.",
                "zh": "解方程 $\\log_2 x + \\log_2(x-2) = 3$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Condense: $\\log_2\\bigl(x(x-2)\\bigr) = 3$. Rewrite in exponential form: $x(x-2) = 2^3 = 8$.",
                  "zh": "合并：$\\log_2\\bigl(x(x-2)\\bigr) = 3$。改写为指数形式：$x(x-2) = 2^3 = 8$。"
                },
                {
                  "type": "math",
                  "tex": "x^2 - 2x - 8 = 0 \\implies (x-4)(x+2) = 0 \\implies x = 4 \\text{ or } x = -2"
                },
                {
                  "type": "p",
                  "en": "Check $x = 4$: both $\\log_2 4$ and $\\log_2 2$ are defined, and $2 + 1 = 3$. ✓ Check $x = -2$: $\\log_2(-2)$ is undefined, so $x = -2$ is extraneous. The only solution is $x = 4$.",
                  "zh": "检验 $x = 4$：$\\log_2 4$ 和 $\\log_2 2$ 都有定义，且 $2 + 1 = 3$，正确。检验 $x = -2$：$\\log_2(-2)$ 无定义，故 $x = -2$ 是增根。唯一的解是 $x = 4$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Applications",
              "zh": "实际应用"
            },
            {
              "type": "p",
              "en": "Exponential and log equations power many real models. Doubling time asks when $Pe^{rt} = 2P$; dividing by $P$ and taking $\\ln$ gives a formula independent of the starting amount. Half-life models repeated halving.",
              "zh": "指数方程与对数方程支撑着许多实际模型。倍增时间问的是 $Pe^{rt} = 2P$ 何时成立；两边除以 $P$ 再取 $\\ln$，得到一个与初始量无关的公式。半衰期则描述反复减半的过程。"
            },
            {
              "type": "math",
              "tex": "t_{\\text{double}} = \\frac{\\ln 2}{r} \\qquad A = A_0\\left(\\frac{1}{2}\\right)^{t/h} \\ \\ (h = \\text{half-life})"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Richter scale: magnitude $M = \\log\\frac{I}{I_0}$ — each whole-number step means an earthquake 10 times more intense.",
                  "zh": "里氏震级：$M = \\log\\frac{I}{I_0}$——震级每增加 1，地震强度增大为 10 倍。"
                },
                {
                  "en": "pH: $\\text{pH} = -\\log[\\text{H}^+]$ — each pH unit down means 10 times more acidic.",
                  "zh": "pH 值：$\\text{pH} = -\\log[\\text{H}^+]$——pH 每降低 1，酸性增强为 10 倍。"
                },
                {
                  "en": "Newton's law of cooling: $T(t) = T_s + (T_0 - T_s)e^{-kt}$, where $T_s$ is the surrounding temperature — solving for $t$ requires isolating the exponential and taking $\\ln$.",
                  "zh": "牛顿冷却定律：$T(t) = T_s + (T_0 - T_s)e^{-kt}$，其中 $T_s$ 是环境温度——解 $t$ 时需要先孤立指数式再取 $\\ln$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "These logarithmic scales exist because the underlying quantities span enormous ranges — a magnitude 8 quake is $10^6$ times more intense than a magnitude 2. Logs compress huge ratios into small, readable numbers.",
              "zh": "之所以使用对数刻度，是因为这些量的变化范围极其巨大——8 级地震的强度是 2 级地震的 $10^6$ 倍。对数把巨大的倍数压缩成小而易读的数字。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Solve $2^{x+1} = 64$. Enter an integer.",
                "zh": "解方程 $2^{x+1} = 64$。请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "x=5"
              ],
              "explanation": {
                "en": "Write $64 = 2^6$, so $2^{x+1} = 2^6$. Equal bases give $x + 1 = 6$, so $x = 5$.",
                "zh": "写 $64 = 2^6$，则 $2^{x+1} = 2^6$。同底得 $x + 1 = 6$，所以 $x = 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $9^x = 27$.",
                "zh": "解方程 $9^x = 27$。"
              },
              "choices": [
                "$x = 3$",
                "$x = \\frac{2}{3}$",
                "$x = \\frac{3}{2}$",
                "$x = 18$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Both sides are powers of 3: $(3^2)^x = 3^3$ gives $3^{2x} = 3^3$, so $2x = 3$ and $x = \\frac{3}{2}$. Check: $9^{3/2} = (\\sqrt{9})^3 = 27$. ✓ The distractor $\\frac{2}{3}$ comes from flipping the equation $2x=3$ the wrong way.",
                "zh": "两边都是 3 的幂：$(3^2)^x = 3^3$ 得 $3^{2x} = 3^3$，所以 $2x = 3$，$x = \\frac{3}{2}$。验证：$9^{3/2} = (\\sqrt{9})^3 = 27$，正确。干扰项 $\\frac{2}{3}$ 来自把 $2x=3$ 解反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is the exact solution of $4^x = 30$?",
                "zh": "$4^x = 30$ 的精确解是哪个？"
              },
              "choices": [
                "$x = \\frac{\\ln 30}{\\ln 4}$",
                "$x = \\frac{\\ln 4}{\\ln 30}$",
                "$x = \\ln\\frac{30}{4}$",
                "$x = \\frac{30}{4}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Take $\\ln$ of both sides: $x\\ln 4 = \\ln 30$, so $x = \\frac{\\ln 30}{\\ln 4} \\approx 2.45$. The distractor $\\ln\\frac{30}{4}$ confuses a quotient of logs with the log of a quotient — they are different numbers ($\\frac{\\ln 30}{\\ln 4} \\approx 2.45$ but $\\ln\\frac{30}{4} \\approx 2.01$).",
                "zh": "两边取 $\\ln$：$x\\ln 4 = \\ln 30$，所以 $x = \\frac{\\ln 30}{\\ln 4} \\approx 2.45$。干扰项 $\\ln\\frac{30}{4}$ 把对数的商与商的对数混淆——它们是不同的数（$\\frac{\\ln 30}{\\ln 4} \\approx 2.45$，而 $\\ln\\frac{30}{4} \\approx 2.01$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\log_5(2x - 1) = 2$. Enter an integer.",
                "zh": "解方程 $\\log_5(2x - 1) = 2$。请填一个整数。"
              },
              "answer": "13",
              "accept": [
                "13.0",
                "x=13"
              ],
              "explanation": {
                "en": "Rewrite in exponential form: $2x - 1 = 5^2 = 25$, so $2x = 26$ and $x = 13$. Check the domain: $2(13) - 1 = 25 > 0$. ✓",
                "zh": "改写为指数形式：$2x - 1 = 5^2 = 25$，所以 $2x = 26$，$x = 13$。检验定义域：$2(13) - 1 = 25 > 0$，正确。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\log_2(3x) = \\log_2(x + 8)$.",
                "zh": "解方程 $\\log_2(3x) = \\log_2(x + 8)$。"
              },
              "choices": [
                "$x = 8$",
                "$x = 2$",
                "$x = -4$",
                "$x = 4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "By the one-to-one property, equal logs with the same base mean equal arguments: $3x = x + 8$, so $2x = 8$ and $x = 4$. Check: both arguments equal $12 > 0$. ✓ Never \"cancel the logs\" unless the bases match and each side is a single log.",
                "zh": "由一一对应性质，同底对数相等则真数相等：$3x = x + 8$，所以 $2x = 8$，$x = 4$。检验：两个真数都等于 $12 > 0$，正确。只有当底数相同且两边各为单个对数时才能\"消去对数\"。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\log x + \\log(x - 3) = 1$.",
                "zh": "解方程 $\\log x + \\log(x - 3) = 1$。"
              },
              "choices": [
                "$x = 5$ and $x = -2$ / $x = 5$ 和 $x = -2$",
                "$x = 5$ only / 仅 $x = 5$",
                "$x = -2$ only / 仅 $x = -2$",
                "no solution / 无解"
              ],
              "answer": 1,
              "explanation": {
                "en": "Condense: $\\log\\bigl(x(x-3)\\bigr) = 1$, so $x^2 - 3x = 10^1$, giving $x^2 - 3x - 10 = 0$, i.e. $(x-5)(x+2) = 0$. The candidate $x = -2$ makes $\\log(-2)$ undefined, so it is extraneous — only $x = 5$ survives. Choosing both roots is the classic trap: always check arguments in the ORIGINAL equation.",
                "zh": "合并：$\\log\\bigl(x(x-3)\\bigr) = 1$，所以 $x^2 - 3x = 10^1$，即 $x^2 - 3x - 10 = 0$，$(x-5)(x+2) = 0$。候选解 $x = -2$ 使 $\\log(-2)$ 无定义，是增根——只有 $x = 5$ 成立。同时选两个根是经典陷阱：必须用原方程检验每个真数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 100 mg sample of a medicine has a half-life of 8 hours. How many mg remain after 24 hours? Enter a number (decimals allowed).",
                "zh": "100 毫克某药物的半衰期为 8 小时。24 小时后还剩多少毫克？请填一个数（可为小数）。"
              },
              "answer": "12.5",
              "accept": [
                "12.50",
                "25/2"
              ],
              "explanation": {
                "en": "24 hours is $\\frac{24}{8} = 3$ half-lives, so $A = 100\\left(\\frac{1}{2}\\right)^3 = 100 \\cdot \\frac{1}{8} = 12.5$ mg. Common error: dividing by 2 only once, or treating 24 hours as 24 half-lives.",
                "zh": "24 小时是 $\\frac{24}{8} = 3$ 个半衰期，所以 $A = 100\\left(\\frac{1}{2}\\right)^3 = 100 \\cdot \\frac{1}{8} = 12.5$ 毫克。常见错误：只除以一次 2，或把 24 小时当作 24 个半衰期。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An investment grows continuously at $6\\%$ per year ($A = Pe^{0.06t}$). Its doubling time is closest to:",
                "zh": "一笔投资以每年 $6\\%$ 连续增长（$A = Pe^{0.06t}$）。它的倍增时间最接近："
              },
              "choices": [
                "$16.7$ years / 年",
                "$33.3$ years / 年",
                "$8.3$ years / 年",
                "$11.6$ years / 年"
              ],
              "answer": 3,
              "explanation": {
                "en": "Set $Pe^{0.06t} = 2P$, divide by $P$, and take $\\ln$: $0.06t = \\ln 2$, so $t = \\frac{\\ln 2}{0.06} \\approx 11.55 \\approx 11.6$ years. The distractor $16.7$ comes from $\\frac{1}{0.06}$ (forgetting $\\ln 2$), and $33.3$ from $\\frac{2}{0.06}$ (using 2 instead of $\\ln 2$).",
                "zh": "令 $Pe^{0.06t} = 2P$，两边除以 $P$ 再取 $\\ln$：$0.06t = \\ln 2$，所以 $t = \\frac{\\ln 2}{0.06} \\approx 11.55 \\approx 11.6$ 年。干扰项 $16.7$ 来自 $\\frac{1}{0.06}$（漏掉 $\\ln 2$），$33.3$ 来自 $\\frac{2}{0.06}$（错用 2 代替 $\\ln 2$）。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "rational-functions",
      "title": "Unit 6: Rational Functions",
      "titleZh": "第六单元：有理函数",
      "lessons": [
        {
          "id": "graphing-rational-functions",
          "title": "Inverse Variation and Graphs of Rational Functions",
          "titleZh": "反比例与有理函数的图象",
          "content": [
            {
              "type": "h2",
              "en": "Inverse Variation",
              "zh": "反比例关系"
            },
            {
              "type": "p",
              "en": "Two quantities vary inversely if their product is constant. We say \"$y$ varies inversely with $x$\" and write the relationship with a constant of variation $k \\ne 0$. Doubling $x$ halves $y$; tripling $x$ cuts $y$ to one third. Contrast this with direct variation $y = kx$, where the RATIO $\\frac{y}{x}$ is constant instead of the product.",
              "zh": "如果两个量的乘积保持不变，就说它们成反比例。我们说\"$y$ 与 $x$ 成反比\"，并用比例常数 $k \\ne 0$ 表示这个关系。$x$ 变为原来的 2 倍，$y$ 就变为原来的一半；$x$ 变为 3 倍，$y$ 就变为三分之一。与正比例 $y = kx$ 对比：正比例中比值 $\\frac{y}{x}$ 不变，而反比例中乘积不变。"
            },
            {
              "type": "math",
              "tex": "y = \\frac{k}{x} \\qquad \\text{equivalently} \\qquad xy = k"
            },
            {
              "type": "p",
              "en": "Combined variation mixes both types in one formula. For example, \"$z$ varies directly with $x$ and inversely with the square of $y$\" translates to the equation below. To solve a variation problem: write the general equation, use one given data point to find $k$, then answer the question with the completed formula.",
              "zh": "联合变化把两种关系合并在一个公式里。例如\"$z$ 与 $x$ 成正比、与 $y$ 的平方成反比\"可翻译为下面的方程。解变化类问题的步骤：先写出一般方程，用已知的一组数据求出 $k$，再用完整的公式回答问题。"
            },
            {
              "type": "math",
              "tex": "z = \\frac{kx}{y^2}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: An inverse variation model",
                "zh": "例题 1：反比例模型"
              },
              "problem": {
                "en": "The time $t$ (in hours) needed to drive a fixed 240-mile route varies inversely with the average speed $v$ (in mph). Write the model and find the time at 80 mph.",
                "zh": "行驶一段固定 240 英里路程所需的时间 $t$（小时）与平均速度 $v$（英里/小时）成反比。写出模型，并求速度为 80 英里/小时时所需的时间。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Inverse variation means $t = \\frac{k}{v}$. Since distance is fixed, $k$ is the distance: at $v = 60$, $t = 4$, so $k = vt = 240$.",
                  "zh": "反比例即 $t = \\frac{k}{v}$。因为路程固定，$k$ 就是路程：当 $v = 60$ 时 $t = 4$，所以 $k = vt = 240$。"
                },
                {
                  "type": "math",
                  "tex": "t = \\frac{240}{v} \\quad\\Rightarrow\\quad t = \\frac{240}{80} = 3 \\text{ hours}"
                },
                {
                  "type": "p",
                  "en": "Check the behavior: as $v$ increases, $t$ decreases — exactly what an inverse variation should do.",
                  "zh": "检验变化趋势：$v$ 增大时 $t$ 减小——这正是反比例应有的表现。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Parent Function $f(x) = \\frac{1}{x}$",
              "zh": "母函数 $f(x) = \\frac{1}{x}$"
            },
            {
              "type": "p",
              "en": "The graph of $f(x) = \\frac{1}{x}$ is a hyperbola with two branches: one in the first quadrant and one in the third. The graph never touches the axes. As $x \\to \\infty$ or $x \\to -\\infty$, the outputs shrink toward 0, so the line $y = 0$ is a horizontal asymptote. As $x \\to 0^+$ the outputs blow up to $+\\infty$, and as $x \\to 0^-$ they plunge to $-\\infty$, so the line $x = 0$ is a vertical asymptote.",
              "zh": "$f(x) = \\frac{1}{x}$ 的图象是双曲线，有两支：一支在第一象限，一支在第三象限。图象永远不会碰到坐标轴。当 $x \\to \\infty$ 或 $x \\to -\\infty$ 时，函数值趋近于 0，所以直线 $y = 0$ 是水平渐近线。当 $x \\to 0^+$ 时函数值趋于 $+\\infty$，当 $x \\to 0^-$ 时趋于 $-\\infty$，所以直线 $x = 0$ 是竖直渐近线。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Domain and range: all real numbers except 0 (written $x \\ne 0$, $y \\ne 0$).",
                  "zh": "定义域和值域：除 0 以外的全体实数（记作 $x \\ne 0$，$y \\ne 0$）。"
                },
                {
                  "en": "Odd symmetry: the graph is symmetric about the origin because $f(-x) = -f(x)$.",
                  "zh": "奇对称性：因为 $f(-x) = -f(x)$，图象关于原点对称。"
                },
                {
                  "en": "For $y = \\frac{k}{x}$ with $k > 0$ the branches sit in quadrants I and III; with $k < 0$ they move to quadrants II and IV.",
                  "zh": "对 $y = \\frac{k}{x}$：$k > 0$ 时两支在第一、三象限；$k < 0$ 时移到第二、四象限。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Asymptotes and Holes",
              "zh": "渐近线与\"洞\""
            },
            {
              "type": "h3",
              "en": "Vertical asymptotes vs. holes",
              "zh": "竖直渐近线与洞的区别"
            },
            {
              "type": "p",
              "en": "A rational function $f(x) = \\frac{p(x)}{q(x)}$ is undefined wherever $q(x) = 0$, but the graph behaves differently at different kinds of zeros. Always factor numerator and denominator completely FIRST, then classify each zero of the denominator.",
              "zh": "有理函数 $f(x) = \\frac{p(x)}{q(x)}$ 在 $q(x) = 0$ 的地方没有定义，但图象在不同类型的零点处表现不同。务必先把分子分母完全因式分解，再对分母的每个零点进行分类。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If a factor of the denominator does NOT cancel, its zero gives a vertical asymptote: the graph shoots to $\\pm\\infty$ there.",
                  "zh": "如果分母的某个因式不能约去，它的零点对应一条竖直渐近线：图象在那里冲向 $\\pm\\infty$。"
                },
                {
                  "en": "If a factor cancels with the numerator, its zero gives a hole (removable discontinuity): the graph looks smooth but is missing a single point. Find the hole's $y$-coordinate by plugging the $x$-value into the SIMPLIFIED function.",
                  "zh": "如果某个因式与分子约去，它的零点对应一个洞（可去间断点）：图象看起来光滑，但缺了一个点。把该 $x$ 值代入化简后的函数即可求出洞的 $y$ 坐标。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: cancelling first and then reading the domain from the simplified formula. The domain comes from the ORIGINAL denominator. In $f(x) = \\frac{(x-2)(x+1)}{x-2}$, the simplified form is $x + 1$, but $x = 2$ is still excluded — the graph is the line $y = x + 1$ with a hole at $(2, 3)$, not a full line.",
              "zh": "常见错误：先约分，再从化简后的式子读定义域。定义域必须由原始分母决定。在 $f(x) = \\frac{(x-2)(x+1)}{x-2}$ 中，化简结果是 $x + 1$，但 $x = 2$ 仍被排除——图象是直线 $y = x + 1$ 挖去点 $(2, 3)$，而不是一条完整的直线。"
            },
            {
              "type": "h3",
              "en": "Horizontal asymptotes: compare the degrees",
              "zh": "水平渐近线：比较次数"
            },
            {
              "type": "p",
              "en": "End behavior is decided by the highest-power terms, because for huge $|x|$ every lower-order term is negligible. Let $n$ be the degree of the numerator and $m$ the degree of the denominator.",
              "zh": "当 $|x|$ 很大时，所有低次项都可以忽略，所以末端行为由最高次项决定。设分子次数为 $n$，分母次数为 $m$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $n < m$: horizontal asymptote $y = 0$ (the denominator wins, the fraction shrinks).",
                  "zh": "若 $n < m$：水平渐近线为 $y = 0$（分母占优，分式趋于 0）。"
                },
                {
                  "en": "If $n = m$: horizontal asymptote $y = \\frac{a}{b}$, the ratio of the leading coefficients.",
                  "zh": "若 $n = m$：水平渐近线为 $y = \\frac{a}{b}$，即首项系数之比。"
                },
                {
                  "en": "If $n > m$: no horizontal asymptote; when $n = m + 1$ long division produces a slant (oblique) asymptote.",
                  "zh": "若 $n > m$：没有水平渐近线；当 $n = m + 1$ 时，用多项式除法可得一条斜渐近线。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Graphing $y = \\frac{ax+b}{cx+d}$",
              "zh": "画 $y = \\frac{ax+b}{cx+d}$ 的图象"
            },
            {
              "type": "p",
              "en": "Every function of this form is a shifted, stretched copy of $\\frac{1}{x}$. A reliable four-step routine: (1) vertical asymptote where the denominator is zero, $x = -\\frac{d}{c}$; (2) horizontal asymptote from equal degrees, $y = \\frac{a}{c}$; (3) intercepts — set $x = 0$ for the $y$-intercept and set the NUMERATOR equal to zero for the $x$-intercept; (4) plot one test point in each region cut off by the asymptotes and sketch the two branches hugging the asymptote lines.",
              "zh": "这种形式的函数都是 $\\frac{1}{x}$ 经过平移和伸缩得到的。可靠的四步流程：(1) 分母为零处是竖直渐近线 $x = -\\frac{d}{c}$；(2) 分子分母次数相同，水平渐近线为 $y = \\frac{a}{c}$；(3) 求截距——令 $x = 0$ 得 $y$ 截距，令分子等于零得 $x$ 截距；(4) 在渐近线分出的每个区域内取一个检验点，画出紧贴渐近线的两支曲线。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A full graphing analysis",
                "zh": "例题 2：完整的作图分析"
              },
              "problem": {
                "en": "Analyze and sketch $f(x) = \\frac{2x+1}{x-3}$: find all asymptotes, intercepts, and the end behavior.",
                "zh": "分析并画出 $f(x) = \\frac{2x+1}{x-3}$ 的图象：求所有渐近线、截距和末端行为。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Vertical asymptote: the denominator is zero at $x = 3$ (and this factor does not cancel). Horizontal asymptote: degrees are equal, so $y = \\frac{2}{1} = 2$.",
                  "zh": "竖直渐近线：分母在 $x = 3$ 处为零（且该因式不能约去）。水平渐近线：分子分母次数相同，所以 $y = \\frac{2}{1} = 2$。"
                },
                {
                  "type": "p",
                  "en": "Intercepts: at $x = 0$, $f(0) = \\frac{1}{-3} = -\\frac{1}{3}$, so the $y$-intercept is $(0, -\\frac{1}{3})$. The numerator is zero at $x = -\\frac{1}{2}$, giving the $x$-intercept $(-\\frac{1}{2}, 0)$.",
                  "zh": "截距：当 $x = 0$ 时 $f(0) = \\frac{1}{-3} = -\\frac{1}{3}$，所以 $y$ 截距为 $(0, -\\frac{1}{3})$。分子在 $x = -\\frac{1}{2}$ 处为零，$x$ 截距为 $(-\\frac{1}{2}, 0)$。"
                },
                {
                  "type": "p",
                  "en": "End behavior: for very large $|x|$, $\\frac{2x+1}{x-3} \\approx \\frac{2x}{x} = 2$, so both far branches level off toward $y = 2$. Near $x = 3$: a test point $x = 4$ gives $f(4) = 9 > 0$, so the right branch rises to $+\\infty$; a test point $x = 2$ gives $f(2) = -5$, so the left branch falls to $-\\infty$.",
                  "zh": "末端行为：当 $|x|$ 很大时，$\\frac{2x+1}{x-3} \\approx \\frac{2x}{x} = 2$，所以两侧远端都趋平于 $y = 2$。在 $x = 3$ 附近：取检验点 $x = 4$ 得 $f(4) = 9 > 0$，右支升向 $+\\infty$；取 $x = 2$ 得 $f(2) = -5$，左支降向 $-\\infty$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: to justify end behavior, do not just quote a rule — divide numerator and denominator by the highest power of $x$ and argue that terms like $\\frac{1}{x}$ vanish. Writing $f(x) = \\frac{2 + 1/x}{1 - 3/x} \\to 2$ earns full reasoning credit and prevents sign errors.",
              "zh": "考试提示：说明末端行为时不要只背结论——把分子分母同除以 $x$ 的最高次幂，并说明 $\\frac{1}{x}$ 这类项趋于 0。写出 $f(x) = \\frac{2 + 1/x}{1 - 3/x} \\to 2$ 既能拿满推理分，也能避免符号错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Asymptote or hole?",
                "zh": "例题 3：渐近线还是洞？"
              },
              "problem": {
                "en": "Find all vertical asymptotes and holes of $f(x) = \\frac{x^2 - x - 6}{x^2 - 4}$, and state its horizontal asymptote.",
                "zh": "求 $f(x) = \\frac{x^2 - x - 6}{x^2 - 4}$ 的所有竖直渐近线和洞，并写出它的水平渐近线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor completely first:",
                  "zh": "先完全因式分解："
                },
                {
                  "type": "math",
                  "tex": "f(x) = \\frac{(x-3)(x+2)}{(x-2)(x+2)}"
                },
                {
                  "type": "p",
                  "en": "The factor $x + 2$ cancels, so $x = -2$ is a hole, not an asymptote. Its height comes from the simplified form $\\frac{x-3}{x-2}$ at $x = -2$: $\\frac{-5}{-4} = \\frac{5}{4}$, so the hole is at $(-2, \\frac{5}{4})$. The factor $x - 2$ does not cancel, so $x = 2$ is a vertical asymptote.",
                  "zh": "因式 $x + 2$ 被约去，所以 $x = -2$ 处是洞而不是渐近线。把 $x = -2$ 代入化简式 $\\frac{x-3}{x-2}$ 得 $\\frac{-5}{-4} = \\frac{5}{4}$，所以洞在 $(-2, \\frac{5}{4})$。因式 $x - 2$ 不能约去，所以 $x = 2$ 是竖直渐近线。"
                },
                {
                  "type": "p",
                  "en": "Degrees are equal (both 2), so the horizontal asymptote is $y = \\frac{1}{1} = 1$.",
                  "zh": "分子分母次数相同（都是 2 次），所以水平渐近线为 $y = \\frac{1}{1} = 1$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "$y$ varies inversely with $x$, and $y = 6$ when $x = 4$. What is $y$ when $x = 8$?",
                "zh": "$y$ 与 $x$ 成反比，且当 $x = 4$ 时 $y = 6$。当 $x = 8$ 时 $y$ 是多少？"
              },
              "choices": [
                "$12$",
                "$10$",
                "$3$",
                "$2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "From $xy = k$: $k = 4 \\cdot 6 = 24$, so $y = \\frac{24}{8} = 3$. The distractor 12 comes from treating it as DIRECT variation (doubling $x$ doubles $y$); inverse variation halves $y$ instead.",
                "zh": "由 $xy = k$ 得 $k = 4 \\cdot 6 = 24$，所以 $y = \\frac{24}{8} = 3$。错误选项 12 是把它当成正比例（$x$ 翻倍则 $y$ 翻倍）；反比例中 $y$ 应减半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The vertical asymptote of $f(x) = \\frac{x+5}{x-7}$ is the line $x = a$. Enter the value of $a$ (an integer).",
                "zh": "$f(x) = \\frac{x+5}{x-7}$ 的竖直渐近线是直线 $x = a$。请输入 $a$ 的值（一个整数）。"
              },
              "answer": "7",
              "accept": [
                "7.0",
                "+7"
              ],
              "explanation": {
                "en": "A vertical asymptote occurs where the denominator is zero and the factor does not cancel: $x - 7 = 0$ gives $x = 7$. The zero of the numerator, $x = -5$, is the $x$-intercept, not an asymptote.",
                "zh": "竖直渐近线出现在分母为零且因式不可约去的地方：$x - 7 = 0$ 得 $x = 7$。分子的零点 $x = -5$ 是 $x$ 截距，不是渐近线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the horizontal asymptote of $f(x) = \\frac{3x^2 - 1}{6x^2 + x}$?",
                "zh": "$f(x) = \\frac{3x^2 - 1}{6x^2 + x}$ 的水平渐近线是什么？"
              },
              "choices": [
                "$y = \\frac{1}{2}$",
                "$y = 3$",
                "$y = 0$",
                "none / 不存在"
              ],
              "answer": 0,
              "explanation": {
                "en": "The degrees are equal (both 2), so the asymptote is the ratio of leading coefficients: $y = \\frac{3}{6} = \\frac{1}{2}$. Choosing $y = 0$ is the rule for degree of numerator LESS than degree of denominator, which is not the case here.",
                "zh": "分子分母次数相同（都是 2 次），渐近线是首项系数之比：$y = \\frac{3}{6} = \\frac{1}{2}$。选 $y = 0$ 是分子次数低于分母次数时的规则，不适用于本题。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $f(x) = \\frac{(x-1)(x+4)}{(x-1)(x-5)}$, which statement is true?",
                "zh": "关于 $f(x) = \\frac{(x-1)(x+4)}{(x-1)(x-5)}$，下列哪个说法正确？"
              },
              "choices": [
                "vertical asymptotes at $x=1$ and $x=5$ / 在 $x=1$ 和 $x=5$ 处都有竖直渐近线",
                "a hole at $x=1$ and a vertical asymptote at $x=5$ / 在 $x=1$ 处有洞，在 $x=5$ 处有竖直渐近线",
                "a hole at $x=5$ and a vertical asymptote at $x=1$ / 在 $x=5$ 处有洞，在 $x=1$ 处有竖直渐近线",
                "holes at both $x=1$ and $x=5$ / 在 $x=1$ 和 $x=5$ 处都有洞"
              ],
              "answer": 1,
              "explanation": {
                "en": "The factor $x - 1$ appears in both numerator and denominator, so it cancels and leaves a hole at $x = 1$. The factor $x - 5$ does not cancel, so $x = 5$ is a vertical asymptote. Treating every zero of the denominator as an asymptote (first choice) ignores the cancellation.",
                "zh": "因式 $x - 1$ 同时出现在分子和分母中，约去后在 $x = 1$ 处留下一个洞。因式 $x - 5$ 不能约去，所以 $x = 5$ 是竖直渐近线。把分母的每个零点都当作渐近线（第一个选项）忽略了约分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The horizontal asymptote of $f(x) = \\frac{5x+2}{x-1}$ is the line $y = c$. Enter $c$ (an integer).",
                "zh": "$f(x) = \\frac{5x+2}{x-1}$ 的水平渐近线是直线 $y = c$。请输入 $c$（一个整数）。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "Numerator and denominator have the same degree (1), so the horizontal asymptote is the ratio of leading coefficients: $y = \\frac{5}{1} = 5$.",
                "zh": "分子分母次数相同（都是 1 次），水平渐近线是首项系数之比：$y = \\frac{5}{1} = 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "As $x \\to \\infty$, the values of $f(x) = \\frac{2x+3}{x-1}$ approach…",
                "zh": "当 $x \\to \\infty$ 时，$f(x) = \\frac{2x+3}{x-1}$ 的值趋近于……"
              },
              "choices": [
                "$\\infty$",
                "$0$",
                "$-3$",
                "$2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Divide top and bottom by $x$: $f(x) = \\frac{2 + 3/x}{1 - 1/x}$. As $x \\to \\infty$ the terms $\\frac{3}{x}$ and $\\frac{1}{x}$ vanish, leaving $\\frac{2}{1} = 2$. The graph does grow near the vertical asymptote $x = 1$, which tempts the answer $\\infty$, but end behavior is governed by the horizontal asymptote.",
                "zh": "分子分母同除以 $x$：$f(x) = \\frac{2 + 3/x}{1 - 1/x}$。当 $x \\to \\infty$ 时 $\\frac{3}{x}$ 和 $\\frac{1}{x}$ 都趋于 0，剩下 $\\frac{2}{1} = 2$。图象在竖直渐近线 $x = 1$ 附近确实会无限增大，这让 $\\infty$ 显得诱人，但末端行为由水平渐近线决定。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The intensity $I$ of light (in lux) varies inversely with the square of the distance $d$ from the source: $I = \\frac{k}{d^2}$. A lamp gives $I = 100$ lux at $d = 2$ m. Find the intensity in lux at $d = 4$ m (enter an integer).",
                "zh": "光照强度 $I$（勒克斯）与到光源距离 $d$ 的平方成反比：$I = \\frac{k}{d^2}$。某灯在 $d = 2$ 米处的强度为 $I = 100$ 勒克斯。求 $d = 4$ 米处的强度（勒克斯，输入一个整数）。"
              },
              "answer": "25",
              "accept": [
                "25.0"
              ],
              "explanation": {
                "en": "First find $k$: $100 = \\frac{k}{2^2}$ gives $k = 400$. Then $I = \\frac{400}{4^2} = \\frac{400}{16} = 25$ lux. Doubling the distance divides the intensity by $2^2 = 4$, not by 2.",
                "zh": "先求 $k$：$100 = \\frac{k}{2^2}$ 得 $k = 400$。于是 $I = \\frac{400}{4^2} = \\frac{400}{16} = 25$ 勒克斯。距离翻倍时强度除以 $2^2 = 4$，而不是除以 2。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which best describes the graph of $f(x) = \\frac{x^2 - 9}{x - 3}$?",
                "zh": "下列哪项最准确地描述了 $f(x) = \\frac{x^2 - 9}{x - 3}$ 的图象？"
              },
              "choices": [
                "a hyperbola with vertical asymptote $x = 3$ / 以 $x = 3$ 为竖直渐近线的双曲线",
                "the parabola $y = x^2 - 9$ / 抛物线 $y = x^2 - 9$",
                "the line $y = x + 3$ with a hole at $(3, 6)$ / 直线 $y = x + 3$ 挖去点 $(3, 6)$",
                "the full line $y = x + 3$ / 完整的直线 $y = x + 3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Factor: $\\frac{(x-3)(x+3)}{x-3}$. The factor $x - 3$ cancels completely, so there is NO vertical asymptote — only a hole at $x = 3$, with height $3 + 3 = 6$ from the simplified form $x + 3$. The full-line choice is tempting after cancelling, but $x = 3$ is still excluded from the domain of the original function.",
                "zh": "因式分解：$\\frac{(x-3)(x+3)}{x-3}$。因式 $x - 3$ 被完全约去，所以没有竖直渐近线——只在 $x = 3$ 处有一个洞，由化简式 $x + 3$ 得洞的高度为 $3 + 3 = 6$。约分后容易误选\"完整直线\"，但 $x = 3$ 仍不在原函数的定义域内。"
              }
            }
          ]
        },
        {
          "id": "rational-expressions-and-equations",
          "title": "Operations with Rational Expressions and Rational Equations",
          "titleZh": "有理式的运算与有理方程",
          "content": [
            {
              "type": "h2",
              "en": "Simplifying Rational Expressions",
              "zh": "有理式的化简"
            },
            {
              "type": "p",
              "en": "A rational expression is a ratio of polynomials. To simplify one, factor the numerator and denominator completely, then cancel common FACTORS. Before cancelling anything, record the excluded values — every $x$ that makes the ORIGINAL denominator zero — because those restrictions survive the simplification.",
              "zh": "有理式是两个多项式之比。化简时先把分子和分母完全因式分解，再约去公因式。在约分之前，先记录排除值——即所有使原始分母为零的 $x$——因为这些限制在化简后仍然有效。"
            },
            {
              "type": "note",
              "en": "Common mistake: cancelling TERMS instead of factors. In $\\frac{x + 3}{x + 6}$ you cannot cancel the $x$'s — the expression is not $\\frac{3}{6}$. Only a factor that multiplies the entire numerator and the entire denominator may be cancelled.",
              "zh": "常见错误：约去\"项\"而不是\"因式\"。在 $\\frac{x + 3}{x + 6}$ 中不能把两个 $x$ 约掉——它不等于 $\\frac{3}{6}$。只有同时整体乘在分子和分母上的因式才可以约去。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Simplify and state restrictions",
                "zh": "例题 1：化简并写出限制条件"
              },
              "problem": {
                "en": "Simplify $\\frac{x^2 - 9}{x^2 + 5x + 6}$ and state all excluded values.",
                "zh": "化简 $\\frac{x^2 - 9}{x^2 + 5x + 6}$ 并写出所有排除值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor both polynomials:",
                  "zh": "把两个多项式分别因式分解："
                },
                {
                  "type": "math",
                  "tex": "\\frac{x^2 - 9}{x^2 + 5x + 6} = \\frac{(x-3)(x+3)}{(x+2)(x+3)}"
                },
                {
                  "type": "p",
                  "en": "The original denominator is zero at $x = -2$ and $x = -3$, so both are excluded. Cancel the common factor $x + 3$:",
                  "zh": "原始分母在 $x = -2$ 和 $x = -3$ 处为零，两者都要排除。约去公因式 $x + 3$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{x - 3}{x + 2}, \\qquad x \\ne -2,\\ x \\ne -3"
                },
                {
                  "type": "p",
                  "en": "Note that $x = -3$ must still be listed even though $x + 3$ no longer appears in the answer.",
                  "zh": "注意：虽然 $x + 3$ 已从结果中消失，仍必须列出 $x = -3$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Multiplying, Dividing, Adding, and Subtracting",
              "zh": "乘、除、加、减运算"
            },
            {
              "type": "h3",
              "en": "Multiplying and dividing",
              "zh": "乘法与除法"
            },
            {
              "type": "p",
              "en": "To multiply, factor everything, cancel any factor that appears in a numerator and a denominator, then multiply what remains. To divide, keep the first fraction, flip the second (multiply by its reciprocal), and proceed as multiplication. The excluded values include every zero of every denominator that appears at ANY stage — including the numerator of the divisor, since it lands in a denominator after flipping.",
              "zh": "乘法：先全部因式分解，凡是同时出现在某个分子和某个分母中的因式都可约去，再把剩下的相乘。除法：保留第一个分式，把第二个分式取倒数（乘以其倒数），然后按乘法进行。排除值包括运算过程中任何阶段出现在分母上的所有零点——包括除式的分子，因为取倒数后它会到分母上。"
            },
            {
              "type": "h3",
              "en": "Adding and subtracting with the LCD",
              "zh": "用最简公分母做加减"
            },
            {
              "type": "p",
              "en": "Fractions can only be combined over a common denominator. The least common denominator (LCD) is built from every distinct factor of the denominators, each raised to the highest power in which it appears.",
              "zh": "分式只有在同分母时才能合并。最简公分母（LCD）由各分母中出现的每个不同因式组成，每个因式取其出现过的最高次幂。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Factor each denominator and build the LCD.",
                  "zh": "第一步：分解各分母，构造最简公分母。"
                },
                {
                  "en": "Step 2: Rewrite each fraction with the LCD by multiplying top and bottom by the missing factors.",
                  "zh": "第二步：给每个分式的分子分母同乘所缺的因式，把它们都化成以 LCD 为分母。"
                },
                {
                  "en": "Step 3: Combine the numerators over the LCD, expand, and collect like terms.",
                  "zh": "第三步：在同一个分母上合并分子，展开并合并同类项。"
                },
                {
                  "en": "Step 4: Factor the new numerator and simplify if possible.",
                  "zh": "第四步：把新分子因式分解，能约分则约分。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Subtraction with an LCD",
                "zh": "例题 2：用最简公分母做减法"
              },
              "problem": {
                "en": "Simplify $\\frac{3}{x+2} - \\frac{x}{x-1}$.",
                "zh": "化简 $\\frac{3}{x+2} - \\frac{x}{x-1}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The LCD is $(x+2)(x-1)$. Rewrite each fraction:",
                  "zh": "最简公分母是 $(x+2)(x-1)$。改写每个分式："
                },
                {
                  "type": "math",
                  "tex": "\\frac{3(x-1)}{(x+2)(x-1)} - \\frac{x(x+2)}{(x+2)(x-1)} = \\frac{3x - 3 - x^2 - 2x}{(x+2)(x-1)}"
                },
                {
                  "type": "math",
                  "tex": "= \\frac{-x^2 + x - 3}{(x+2)(x-1)}, \\qquad x \\ne -2,\\ x \\ne 1"
                },
                {
                  "type": "p",
                  "en": "Watch the subtraction: the minus sign distributes over the ENTIRE second numerator, turning $x^2 + 2x$ into $-x^2 - 2x$. Forgetting to distribute is the single most common error in this topic.",
                  "zh": "注意减法：负号要分配到第二个分子的每一项，把 $x^2 + 2x$ 变成 $-x^2 - 2x$。忘记分配负号是这类题中最常见的错误。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Complex fractions",
              "zh": "繁分式"
            },
            {
              "type": "p",
              "en": "A complex fraction has fractions inside its numerator or denominator. The fastest method: multiply the numerator and denominator of the big fraction by the LCD of ALL the small fractions — every inner denominator clears in one step. For example:",
              "zh": "繁分式是分子或分母中还含有分式的分式。最快的方法：给整个大分式的分子和分母同乘所有小分式的最简公分母——所有内层分母一步全部消去。例如："
            },
            {
              "type": "math",
              "tex": "\\frac{\\;\\frac{1}{x} + \\frac{1}{4}\\;}{\\;\\frac{1}{x} - \\frac{1}{4}\\;} \\cdot \\frac{4x}{4x} = \\frac{4 + x}{4 - x}, \\qquad x \\ne 0,\\ x \\ne 4"
            },
            {
              "type": "h2",
              "en": "Solving Rational Equations",
              "zh": "解有理方程"
            },
            {
              "type": "p",
              "en": "To solve an equation containing rational expressions, multiply BOTH sides by the LCD of all denominators. This clears every fraction and leaves a polynomial equation. But multiplying by an expression that could equal zero can create extraneous solutions — candidate answers that make an original denominator zero. Every solution must be checked against the excluded values of the original equation.",
              "zh": "解含有理式的方程时，方程两边同乘所有分母的最简公分母，即可消去全部分式，得到一个多项式方程。但乘上一个可能为零的式子会产生增根——使原方程某个分母为零的\"候选解\"。每个解都必须与原方程的排除值核对。"
            },
            {
              "type": "note",
              "en": "Test tip: BEFORE solving, write down the excluded values in the margin (e.g. \"$x \\ne 2$\"). After solving, cross out any candidate on that list and state \"extraneous\" next to it. Graders award a specific point for identifying extraneous solutions, and an unchecked answer can cost the whole problem.",
              "zh": "考试提示：解题之前先在页边写下排除值（例如 \"$x \\ne 2$\"）。解完后，把落在排除值清单上的候选解划掉并注明\"增根\"。判断增根通常单独占分，不检验可能导致整题失分。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: An extraneous solution",
                "zh": "例题 3：增根"
              },
              "problem": {
                "en": "Solve $\\frac{x}{x-2} + 1 = \\frac{2}{x-2}$.",
                "zh": "解方程 $\\frac{x}{x-2} + 1 = \\frac{2}{x-2}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Excluded value: $x \\ne 2$. Multiply both sides by the LCD, $x - 2$:",
                  "zh": "排除值：$x \\ne 2$。方程两边同乘最简公分母 $x - 2$："
                },
                {
                  "type": "math",
                  "tex": "x + (x - 2) = 2 \\quad\\Rightarrow\\quad 2x - 2 = 2 \\quad\\Rightarrow\\quad x = 2"
                },
                {
                  "type": "p",
                  "en": "But $x = 2$ is exactly the excluded value: it makes both original denominators zero. The candidate is extraneous, so the equation has NO solution.",
                  "zh": "但 $x = 2$ 恰好是排除值：它使原方程的两个分母都为零。这个候选解是增根，所以原方程无解。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Applications: Work Rates and Average Cost",
              "zh": "应用：工作效率与平均成本"
            },
            {
              "type": "p",
              "en": "Work-rate problems use the idea that a job done in $t$ hours proceeds at a rate of $\\frac{1}{t}$ job per hour, and rates of people working together ADD. If one worker needs $a$ hours alone and another needs $b$ hours alone, the time $t$ to finish together satisfies:",
              "zh": "工作效率问题的核心思想：$t$ 小时完成一件工作，效率就是每小时 $\\frac{1}{t}$ 件；合作时效率相加。若一人单独需 $a$ 小时，另一人单独需 $b$ 小时，则合作完成所需时间 $t$ 满足："
            },
            {
              "type": "math",
              "tex": "\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{t}"
            },
            {
              "type": "p",
              "en": "Average-cost problems divide total cost by the number of items. If producing $x$ items costs a fixed amount $F$ plus $v$ dollars per item, the average cost per item is $\\bar{C}(x) = \\frac{F + vx}{x}$. As $x$ grows, $\\bar{C}(x)$ approaches its horizontal asymptote $y = v$: fixed costs get spread ever thinner, but the average can never drop below the per-item cost.",
              "zh": "平均成本问题用总成本除以件数。若生产 $x$ 件产品的成本是固定成本 $F$ 加上每件 $v$ 美元，则每件的平均成本为 $\\bar{C}(x) = \\frac{F + vx}{x}$。当 $x$ 增大时，$\\bar{C}(x)$ 趋近其水平渐近线 $y = v$：固定成本被摊得越来越薄，但平均成本永远不会低于单件成本。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\frac{x^2 - 4}{x^2 + 2x}$.",
                "zh": "化简 $\\frac{x^2 - 4}{x^2 + 2x}$。"
              },
              "choices": [
                "$\\frac{x+2}{x}$",
                "$\\frac{x-2}{x}$",
                "$\\frac{-4}{2x}$",
                "$x - 2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Factor: $\\frac{(x-2)(x+2)}{x(x+2)}$; cancel $x + 2$ to get $\\frac{x-2}{x}$ (with $x \\ne 0, -2$). The distractor $\\frac{-4}{2x}$ comes from illegally cancelling the $x^2$ terms — you may only cancel factors, never terms.",
                "zh": "因式分解：$\\frac{(x-2)(x+2)}{x(x+2)}$；约去 $x + 2$ 得 $\\frac{x-2}{x}$（$x \\ne 0, -2$）。错误选项 $\\frac{-4}{2x}$ 来自非法地约去 $x^2$ 项——只能约因式，不能约项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What are the excluded values of $\\frac{x+3}{x^2 - x - 12}$?",
                "zh": "$\\frac{x+3}{x^2 - x - 12}$ 的排除值是哪些？"
              },
              "choices": [
                "$x = -3$ only / 仅 $x = -3$",
                "$x = 4$ only / 仅 $x = 4$",
                "$x = 3, -4$",
                "$x = 4, -3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The denominator factors as $(x-4)(x+3)$, which is zero at $x = 4$ and $x = -3$ — both are excluded. \"Only $x = 4$\" is tempting because $x + 3$ cancels with the numerator, but restrictions always come from the ORIGINAL denominator, before any cancelling.",
                "zh": "分母分解为 $(x-4)(x+3)$，在 $x = 4$ 和 $x = -3$ 处为零——两者都要排除。\"仅 $x = 4$\"很有迷惑性，因为 $x + 3$ 会与分子约去，但排除值必须来自约分之前的原始分母。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\frac{5}{x} = \\frac{3}{x-2}$. Give the value of $x$ (an integer).",
                "zh": "解方程 $\\frac{5}{x} = \\frac{3}{x-2}$。请给出 $x$ 的值（一个整数）。"
              },
              "answer": "5",
              "accept": [
                "5.0",
                "+5"
              ],
              "explanation": {
                "en": "Cross-multiply (equivalent to multiplying by the LCD $x(x-2)$): $5(x-2) = 3x$, so $5x - 10 = 3x$, $2x = 10$, $x = 5$. Check: $x = 5$ makes neither denominator zero, so it is a valid solution.",
                "zh": "交叉相乘（相当于两边同乘最简公分母 $x(x-2)$）：$5(x-2) = 3x$，即 $5x - 10 = 3x$，$2x = 10$，$x = 5$。检验：$x = 5$ 不使任何分母为零，是有效解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the least common denominator (LCD) of $\\frac{3}{x^2 - 1}$ and $\\frac{5}{x^2 + 2x + 1}$?",
                "zh": "$\\frac{3}{x^2 - 1}$ 与 $\\frac{5}{x^2 + 2x + 1}$ 的最简公分母是什么？"
              },
              "choices": [
                "$(x-1)(x+1)^2$",
                "$(x-1)(x+1)$",
                "$(x-1)(x+1)^3$",
                "$(x^2-1)(x^2+2x+1)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Factor: $x^2 - 1 = (x-1)(x+1)$ and $x^2 + 2x + 1 = (x+1)^2$. The LCD takes each distinct factor at its HIGHEST power: $(x-1)(x+1)^2$. The product of both denominators (last choice) is a common denominator but not the least one — it repeats $x+1$ three times.",
                "zh": "因式分解：$x^2 - 1 = (x-1)(x+1)$，$x^2 + 2x + 1 = (x+1)^2$。最简公分母取每个不同因式的最高次幂：$(x-1)(x+1)^2$。两分母直接相乘（最后一个选项）是公分母但不是最简的——它让 $x+1$ 出现了三次。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\frac{2}{x} + \\frac{1}{3} = 1$. Give the value of $x$ (an integer).",
                "zh": "解方程 $\\frac{2}{x} + \\frac{1}{3} = 1$。请给出 $x$ 的值（一个整数）。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "+3"
              ],
              "explanation": {
                "en": "Multiply both sides by the LCD $3x$: $6 + x = 3x$, so $6 = 2x$ and $x = 3$. Check: $\\frac{2}{3} + \\frac{1}{3} = 1$. ✓ Since $x = 3$ does not zero any denominator, it is valid.",
                "zh": "两边同乘最简公分母 $3x$：$6 + x = 3x$，所以 $6 = 2x$，$x = 3$。检验：$\\frac{2}{3} + \\frac{1}{3} = 1$，正确。$x = 3$ 不使任何分母为零，是有效解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Consider $\\frac{x}{x-3} = \\frac{3}{x-3} + 2$. What is its solution set?",
                "zh": "考虑方程 $\\frac{x}{x-3} = \\frac{3}{x-3} + 2$。它的解集是什么？"
              },
              "choices": [
                "$x = 3$",
                "$x = -3$",
                "no solution: $x = 3$ is extraneous / 无解：$x = 3$ 是增根",
                "all real numbers except 3 / 除 3 外的全体实数"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiplying by $x - 3$ gives $x = 3 + 2(x-3)$, i.e. $x = 2x - 3$, so $x = 3$. But $x = 3$ makes the original denominators zero, so it is extraneous and the equation has no solution. Choosing \"$x = 3$\" means the check against excluded values was skipped.",
                "zh": "两边同乘 $x - 3$ 得 $x = 3 + 2(x-3)$，即 $x = 2x - 3$，所以 $x = 3$。但 $x = 3$ 使原方程的分母为零，是增根，因此方程无解。选\"$x = 3$\"说明漏掉了与排除值的核对。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Pipe A alone fills a tank in 6 hours; pipe B alone fills it in 3 hours. Working together, how many hours do they need? (Enter an integer.)",
                "zh": "水管 A 单独注满水池需 6 小时；水管 B 单独注满需 3 小时。两管同时工作需要多少小时注满？（输入一个整数。）"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Rates add: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$ tank per hour, so together they need $t = 2$ hours. Averaging the times to get 4.5 hours is wrong — together must be FASTER than the faster pipe alone.",
                "zh": "效率相加：$\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$（每小时注满半池），所以合作需 $t = 2$ 小时。把时间取平均得 4.5 小时是错的——合作一定比较快的那根水管单独工作还要快。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A workshop has fixed costs of \\$500 and produces mugs at \\$4 each, so the average cost per mug is $\\bar{C}(x) = \\frac{500 + 4x}{x}$. How many mugs must be produced for the average cost to equal \\$6 per mug?",
                "zh": "某工坊固定成本为 500 美元，每个马克杯的生产成本为 4 美元，因此平均成本为 $\\bar{C}(x) = \\frac{500 + 4x}{x}$。生产多少个马克杯时，平均成本恰好为每个 6 美元？"
              },
              "choices": [
                "$125$",
                "$250$",
                "$100$",
                "$500$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Set $\\frac{500 + 4x}{x} = 6$ and multiply by $x$: $500 + 4x = 6x$, so $500 = 2x$ and $x = 250$. The distractor 125 comes from dividing 500 by 4 instead of by $6 - 4 = 2$; note the average cost can reach \\$6 because it is above the asymptote $y = 4$.",
                "zh": "令 $\\frac{500 + 4x}{x} = 6$，两边同乘 $x$：$500 + 4x = 6x$，所以 $500 = 2x$，$x = 250$。错误选项 125 来自用 500 除以 4 而不是除以 $6 - 4 = 2$；注意平均成本能达到 6 美元，因为它高于渐近线 $y = 4$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "sequences-series",
      "title": "Unit 7: Sequences and Series",
      "titleZh": "第七单元：数列与级数",
      "lessons": [
        {
          "id": "sequences-and-sigma-notation",
          "title": "Sequences, Series, and Sigma Notation",
          "titleZh": "数列、级数与求和符号",
          "content": [
            {
              "type": "h2",
              "en": "From Patterns to Formulas",
              "zh": "从规律到公式"
            },
            {
              "type": "p",
              "en": "A sequence is an ordered list of numbers, each called a term. We write $a_n$ for the $n$th term, so $a_1$ is the first term, $a_2$ the second, and so on. A sequence can be described two ways: an explicit formula gives $a_n$ directly as a function of $n$, while a recursive formula tells you the first term and a rule for getting each term from the one before it. Both describe the same list — they are just different \"directions\" for generating it.",
              "zh": "数列是一列有顺序的数，其中每个数称为一项。我们用 $a_n$ 表示第 $n$ 项，即 $a_1$ 是第一项，$a_2$ 是第二项，依此类推。描述数列有两种方式：通项公式（显式公式）直接把 $a_n$ 写成 $n$ 的函数；递推公式则给出首项，以及由前一项得到下一项的规则。两者描述的是同一列数——只是\"生成方式\"不同。"
            },
            {
              "type": "h3",
              "en": "Arithmetic sequences",
              "zh": "等差数列"
            },
            {
              "type": "p",
              "en": "In an arithmetic sequence, each term is obtained by adding the same number, the common difference $d$, to the previous term. For example $5, 8, 11, 14, \\ldots$ has $d = 3$. Because we add $d$ a total of $n-1$ times to get from $a_1$ to $a_n$, the explicit formula is:",
              "zh": "等差数列中，每一项都是前一项加上同一个数——公差 $d$。例如 $5, 8, 11, 14, \\ldots$ 的公差 $d = 3$。从 $a_1$ 走到 $a_n$ 一共加了 $n-1$ 次 $d$，所以通项公式为："
            },
            {
              "type": "math",
              "tex": "a_n = a_1 + (n-1)d \\qquad \\text{(explicit)} \\qquad a_n = a_{n-1} + d,\\ a_1 \\text{ given (recursive)}"
            },
            {
              "type": "h3",
              "en": "Geometric sequences",
              "zh": "等比数列"
            },
            {
              "type": "p",
              "en": "In a geometric sequence, each term is obtained by multiplying the previous term by the same number, the common ratio $r$. For example $3, 6, 12, 24, \\ldots$ has $r = 2$, and $80, -40, 20, -10, \\ldots$ has $r = -\\frac{1}{2}$ — the ratio may be negative or a fraction. Multiplying by $r$ a total of $n-1$ times gives the explicit formula:",
              "zh": "等比数列中，每一项都是前一项乘以同一个数——公比 $r$。例如 $3, 6, 12, 24, \\ldots$ 的公比 $r = 2$；而 $80, -40, 20, -10, \\ldots$ 的公比 $r = -\\frac{1}{2}$——公比可以是负数或分数。连乘 $n-1$ 次 $r$ 得到通项公式："
            },
            {
              "type": "math",
              "tex": "a_n = a_1 \\cdot r^{\\,n-1} \\qquad \\text{(explicit)} \\qquad a_n = r \\cdot a_{n-1},\\ a_1 \\text{ given (recursive)}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "To identify the type: subtract consecutive terms (constant difference means arithmetic) or divide them (constant ratio means geometric).",
                  "zh": "判断类型：相邻两项相减（差恒定为等差）或相除（比恒定为等比）。"
                },
                {
                  "en": "An explicit formula lets you jump straight to any term, e.g. $a_{50}$, without computing the earlier ones.",
                  "zh": "通项公式可以直接求任意一项，例如 $a_{50}$，无需先算前面的项。"
                },
                {
                  "en": "A recursive formula is often the natural way to describe real processes (\"each month the balance grows by…\"), but requires all previous terms to find $a_n$.",
                  "zh": "递推公式常常是描述实际过程最自然的方式（“每月余额增长……”），但要求出 $a_n$ 必须先算出前面所有项。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: writing $a_n = a_1 + nd$ or $a_n = a_1 r^n$. The exponent and the multiplier of $d$ are $n-1$, not $n$, because $a_1$ itself uses zero steps. Quick check: plug in $n=1$ — the formula must return $a_1$.",
              "zh": "常见错误：把公式写成 $a_n = a_1 + nd$ 或 $a_n = a_1 r^n$。$d$ 的倍数和 $r$ 的指数都是 $n-1$ 而不是 $n$，因为 $a_1$ 本身走了零步。快速检验：代入 $n=1$，公式必须给出 $a_1$。"
            },
            {
              "type": "h2",
              "en": "Series and Sigma Notation",
              "zh": "级数与求和符号"
            },
            {
              "type": "p",
              "en": "A series is the sum of the terms of a sequence. The sequence $2, 5, 8, 11$ becomes the series $2 + 5 + 8 + 11 = 26$. Sigma notation is a compact way to write a series: the Greek letter $\\Sigma$ means \"add up\", the index below tells where to start, the number above tells where to stop, and the expression after $\\Sigma$ is the formula for each term.",
              "zh": "级数是把数列的各项加起来所得的和。数列 $2, 5, 8, 11$ 对应级数 $2 + 5 + 8 + 11 = 26$。求和符号（Sigma 记号）是级数的紧凑写法：希腊字母 $\\Sigma$ 表示“求和”，下标指明起点，上方数字指明终点，$\\Sigma$ 后面的表达式是每一项的公式。"
            },
            {
              "type": "math",
              "tex": "\\sum_{k=1}^{4} (3k - 1) = 2 + 5 + 8 + 11 = 26"
            },
            {
              "type": "p",
              "en": "To write a series in sigma notation, first find an explicit formula for the general term, then count the terms to set the limits. To expand sigma notation, substitute each index value in turn and add.",
              "zh": "把级数写成求和符号：先找出通项的显式公式，再数清项数以确定上下限。展开求和符号则相反：把每个指标值依次代入并相加。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading and writing sigma notation",
                "zh": "例题 1：读写求和符号"
              },
              "problem": {
                "en": "(a) Evaluate $\\sum_{k=3}^{6} k^2$. (b) Write the series $4 + 7 + 10 + \\cdots + 31$ in sigma notation.",
                "zh": "(a) 计算 $\\sum_{k=3}^{6} k^2$。(b) 把级数 $4 + 7 + 10 + \\cdots + 31$ 写成求和符号。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) Substitute $k = 3, 4, 5, 6$ and add:",
                  "zh": "(a) 依次代入 $k = 3, 4, 5, 6$ 并相加："
                },
                {
                  "type": "math",
                  "tex": "\\sum_{k=3}^{6} k^2 = 9 + 16 + 25 + 36 = 86"
                },
                {
                  "type": "p",
                  "en": "(b) The terms are arithmetic with $a_1 = 4$ and $d = 3$, so $a_k = 4 + (k-1)(3) = 3k + 1$. The last term satisfies $3k+1 = 31$, so $k = 10$: there are 10 terms.",
                  "zh": "(b) 各项构成等差数列，$a_1 = 4$，$d = 3$，故 $a_k = 4 + (k-1)(3) = 3k + 1$。末项满足 $3k+1 = 31$，得 $k = 10$，共 10 项。"
                },
                {
                  "type": "math",
                  "tex": "4 + 7 + 10 + \\cdots + 31 = \\sum_{k=1}^{10} (3k+1)"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Sum Formulas",
              "zh": "求和公式"
            },
            {
              "type": "h3",
              "en": "Arithmetic series: the Gauss story",
              "zh": "等差级数：高斯的故事"
            },
            {
              "type": "p",
              "en": "Legend says that when Carl Friedrich Gauss was a schoolboy, his teacher asked the class to add $1 + 2 + 3 + \\cdots + 100$. Gauss answered almost instantly: pair the first and last terms ($1 + 100 = 101$), the second and second-to-last ($2 + 99 = 101$), and so on. There are $50$ such pairs, so the sum is $50 \\times 101 = 5050$. This pairing idea works for every arithmetic series: each pair adds to $a_1 + a_n$, and there are $\\frac{n}{2}$ pairs.",
              "zh": "相传高斯（Carl Friedrich Gauss）小学时，老师让全班计算 $1 + 2 + 3 + \\cdots + 100$。高斯几乎立刻给出答案：把首末两项配对（$1 + 100 = 101$），第二项与倒数第二项配对（$2 + 99 = 101$），如此下去。共有 $50$ 对，所以和为 $50 \\times 101 = 5050$。这种配对思想适用于任何等差级数：每一对的和都是 $a_1 + a_n$，共有 $\\frac{n}{2}$ 对。"
            },
            {
              "type": "math",
              "tex": "S_n = \\frac{n(a_1 + a_n)}{2} \\qquad \\text{or equivalently} \\qquad S_n = \\frac{n}{2}\\bigl[2a_1 + (n-1)d\\bigr]"
            },
            {
              "type": "h3",
              "en": "Geometric series",
              "zh": "等比级数"
            },
            {
              "type": "p",
              "en": "For a geometric series, multiply the sum $S_n$ by $r$ and subtract: every term cancels except the first and the one past the last. Solving for $S_n$ gives the formula below, valid whenever $r \\ne 1$ (if $r = 1$ every term equals $a_1$, so $S_n = n a_1$).",
              "zh": "对等比级数，把和 $S_n$ 乘以 $r$ 再相减：除首项与末项之后一项外，所有项都抵消。解出 $S_n$ 得到下面的公式，当 $r \\ne 1$ 时成立（若 $r = 1$，每项都等于 $a_1$，故 $S_n = n a_1$）。"
            },
            {
              "type": "math",
              "tex": "S_n = \\frac{a_1(1 - r^n)}{1 - r}, \\qquad r \\ne 1"
            },
            {
              "type": "note",
              "en": "Test tip: before choosing a sum formula, confirm the type of series and identify $n$, $a_1$, and $d$ or $r$ explicitly. Most lost points come from using the arithmetic formula on a geometric series, or from miscounting $n$ — remember, the number of terms from $k=3$ to $k=12$ is $12 - 3 + 1 = 10$, not $9$.",
              "zh": "考试提示：套用求和公式前，先确认级数类型，并明确写出 $n$、$a_1$ 以及 $d$ 或 $r$。最常见的失分是把等差公式用在等比级数上，或数错 $n$——注意从 $k=3$ 到 $k=12$ 共有 $12 - 3 + 1 = 10$ 项，而不是 $9$ 项。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Theater seating",
                "zh": "例题 2：剧院座位"
              },
              "problem": {
                "en": "A theater has 22 seats in the first row, and each row behind it has 4 more seats than the row in front. If the theater has 30 rows, how many seats does it have in total?",
                "zh": "某剧院第一排有 22 个座位，后面每排都比前一排多 4 个座位。若剧院共有 30 排，总共有多少个座位？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The row sizes form an arithmetic sequence with $a_1 = 22$, $d = 4$, $n = 30$. The last row has $a_{30} = 22 + 29(4) = 138$ seats.",
                  "zh": "各排座位数构成等差数列，$a_1 = 22$，$d = 4$，$n = 30$。最后一排有 $a_{30} = 22 + 29(4) = 138$ 个座位。"
                },
                {
                  "type": "math",
                  "tex": "S_{30} = \\frac{30(22 + 138)}{2} = 15 \\times 160 = 2400"
                },
                {
                  "type": "p",
                  "en": "The theater has 2400 seats. Notice how the Gauss pairing formula turns 30 additions into one quick multiplication.",
                  "zh": "剧院共有 2400 个座位。注意高斯配对公式把 30 次加法变成了一次简单的乘法。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: A payment plan",
                "zh": "例题 3：还款计划"
              },
              "problem": {
                "en": "To pay off a loan, Maria pays \\$100 the first month, and each month she pays $1.1$ times the previous month's amount (payments grow 10% per month). How much has she paid in total after 8 months? Round to the nearest dollar.",
                "zh": "为偿还贷款，Maria 第一个月还 100 美元，此后每月还款额是上月的 $1.1$ 倍（每月增长 10%）。8 个月后她一共还了多少钱？结果四舍五入到整数美元。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The payments are geometric with $a_1 = 100$, $r = 1.1$, $n = 8$. Apply the geometric sum formula:",
                  "zh": "各月还款构成等比数列，$a_1 = 100$，$r = 1.1$，$n = 8$。代入等比求和公式："
                },
                {
                  "type": "math",
                  "tex": "S_8 = \\frac{100\\,(1 - 1.1^8)}{1 - 1.1} = \\frac{100\\,(1 - 2.14359\\ldots)}{-0.1} \\approx 1143.59"
                },
                {
                  "type": "p",
                  "en": "She has paid about \\$1144 in total. The negatives in the numerator and denominator cancel — a common place for sign errors when $r > 1$.",
                  "zh": "她总共还了约 1144 美元。分子与分母的负号相互抵消——当 $r > 1$ 时这里最容易出符号错误。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which explicit formula describes the arithmetic sequence $7, 11, 15, 19, \\ldots$?",
                "zh": "下列哪个通项公式描述等差数列 $7, 11, 15, 19, \\ldots$？"
              },
              "choices": [
                "$a_n = 7n + 4$",
                "$a_n = 4n + 7$",
                "$a_n = 4n + 3$",
                "$a_n = 7 \\cdot 4^{n-1}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$a_1 = 7$ and $d = 4$, so $a_n = 7 + (n-1)(4) = 4n + 3$. Check $n=1$: $4(1)+3 = 7$. ✓ The tempting choice $4n+7$ fails this check: it gives $a_1 = 11$, because it forgot the $n-1$.",
                "zh": "$a_1 = 7$，$d = 4$，所以 $a_n = 7 + (n-1)(4) = 4n + 3$。检验 $n=1$：$4(1)+3 = 7$，正确。诱人的选项 $4n+7$ 通不过检验：它给出 $a_1 = 11$，因为漏掉了 $n-1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An arithmetic sequence has $a_1 = 5$ and common difference $d = 3$. Find $a_{12}$. Give an integer.",
                "zh": "等差数列的首项 $a_1 = 5$，公差 $d = 3$。求 $a_{12}$。请填一个整数。"
              },
              "answer": "38",
              "accept": [
                "38.0"
              ],
              "explanation": {
                "en": "$a_{12} = a_1 + 11d = 5 + 11(3) = 38$. We add $d$ eleven times, not twelve, to get from the 1st term to the 12th.",
                "zh": "$a_{12} = a_1 + 11d = 5 + 11(3) = 38$。从第 1 项到第 12 项一共加了 11 次 $d$，而不是 12 次。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which recursive definition generates the sequence $3, 6, 12, 24, \\ldots$?",
                "zh": "下列哪个递推定义生成数列 $3, 6, 12, 24, \\ldots$？"
              },
              "choices": [
                "$a_1 = 3,\\ a_n = 2a_{n-1}$",
                "$a_1 = 3,\\ a_n = a_{n-1} + 3$",
                "$a_1 = 2,\\ a_n = 3a_{n-1}$",
                "$a_n = 3 \\cdot 2^{n-1}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Each term is double the one before, and the first term is 3, so $a_1 = 3$, $a_n = 2a_{n-1}$. The last choice is a correct EXPLICIT formula for the same sequence, but it is not recursive — a recursive definition must reference the previous term.",
                "zh": "每一项都是前一项的两倍，首项是 3，故 $a_1 = 3$，$a_n = 2a_{n-1}$。最后一个选项是同一数列的正确“通项”公式，但它不是递推式——递推定义必须引用前一项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\sum_{k=1}^{4} (2k + 1)$.",
                "zh": "计算 $\\sum_{k=1}^{4} (2k + 1)$。"
              },
              "choices": [
                "$20$",
                "$24$",
                "$9$",
                "$28$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Substitute $k = 1, 2, 3, 4$: $3 + 5 + 7 + 9 = 24$. The distractor $9$ is just the last term $2(4)+1$ — sigma means add ALL the terms, not evaluate at the top index only.",
                "zh": "代入 $k = 1, 2, 3, 4$：$3 + 5 + 7 + 9 = 24$。干扰项 $9$ 只是末项 $2(4)+1$——求和符号表示把所有项加起来，而不是只代入上限。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An arithmetic series has 20 terms, with first term $a_1 = 2$ and last term $a_{20} = 59$. Find the sum $S_{20}$. Give an integer.",
                "zh": "一个等差级数共 20 项，首项 $a_1 = 2$，末项 $a_{20} = 59$。求和 $S_{20}$。请填一个整数。"
              },
              "answer": "610",
              "accept": [
                "610.0"
              ],
              "explanation": {
                "en": "By the Gauss pairing formula, $S_{20} = \\frac{20(2 + 59)}{2} = 10 \\times 61 = 610$. Each of the 10 pairs sums to 61.",
                "zh": "由高斯配对公式，$S_{20} = \\frac{20(2 + 59)}{2} = 10 \\times 61 = 610$。10 对中每一对的和都是 61。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which sigma notation represents the series $5 + 8 + 11 + \\cdots + 32$?",
                "zh": "哪个求和符号表示级数 $5 + 8 + 11 + \\cdots + 32$？"
              },
              "choices": [
                "$\\sum_{k=1}^{9} (3k+2)$",
                "$\\sum_{k=1}^{32} (3k+2)$",
                "$\\sum_{k=1}^{10} (5k+3)$",
                "$\\sum_{k=1}^{10} (3k+2)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The general term is $a_k = 5 + (k-1)(3) = 3k + 2$. Setting $3k+2 = 32$ gives $k = 10$, so the upper limit is 10. The distractor with upper limit 32 confuses the VALUE of the last term with the NUMBER of terms.",
                "zh": "通项为 $a_k = 5 + (k-1)(3) = 3k + 2$。令 $3k+2 = 32$ 得 $k = 10$，故上限是 10。上限为 32 的干扰项把末项的“数值”与“项数”混淆了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the sum of the geometric series $2 + 6 + 18 + 54 + 162$. Give an integer.",
                "zh": "求等比级数 $2 + 6 + 18 + 54 + 162$ 的和。请填一个整数。"
              },
              "answer": "242",
              "accept": [
                "242.0"
              ],
              "explanation": {
                "en": "Here $a_1 = 2$, $r = 3$, $n = 5$: $S_5 = \\frac{2(1-3^5)}{1-3} = \\frac{2(-242)}{-2} = 242$. Adding directly confirms it: $2+6+18+54+162 = 242$.",
                "zh": "这里 $a_1 = 2$，$r = 3$，$n = 5$：$S_5 = \\frac{2(1-3^5)}{1-3} = \\frac{2(-242)}{-2} = 242$。直接相加验证：$2+6+18+54+162 = 242$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "An amphitheater has 18 seats in the first row, and each row has 4 more seats than the row in front. How many seats are in the amphitheater if it has 25 rows?",
                "zh": "某露天剧场第一排有 18 个座位，每排比前一排多 4 个座位。若共有 25 排，剧场总共有多少个座位？"
              },
              "choices": [
                "$3300$",
                "$1650$",
                "$114$",
                "$1764$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Arithmetic with $a_1 = 18$, $d = 4$, $n = 25$: the last row has $a_{25} = 18 + 24(4) = 114$ seats, so $S_{25} = \\frac{25(18+114)}{2} = \\frac{25 \\times 132}{2} = 1650$. The distractor 3300 is $25(18+114)$ without dividing by 2, and 114 is only the last row, not the total.",
                "zh": "等差数列，$a_1 = 18$，$d = 4$，$n = 25$：最后一排有 $a_{25} = 18 + 24(4) = 114$ 个座位，故 $S_{25} = \\frac{25(18+114)}{2} = \\frac{25 \\times 132}{2} = 1650$。干扰项 3300 是 $25(18+114)$ 忘记除以 2；114 只是最后一排的座位数，不是总数。"
              }
            }
          ]
        },
        {
          "id": "infinite-geometric-series-recursion",
          "title": "Infinite Geometric Series and Recursive Models",
          "titleZh": "无穷等比级数与递推模型",
          "content": [
            {
              "type": "h2",
              "en": "When Can an Infinite Sum Be Finite?",
              "zh": "无穷多项的和何时是有限的？"
            },
            {
              "type": "p",
              "en": "It sounds impossible to add infinitely many positive numbers and get a finite answer — yet it happens. Walk halfway across a room, then half the remaining distance, then half again: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$. You never pass the far wall, and your total distance approaches exactly 1. To make this precise we look at partial sums: $S_n$ is the sum of the first $n$ terms. For this series the partial sums are",
              "zh": "把无穷多个正数加起来还能得到有限的结果，听上去不可能——但它确实会发生。想象走过房间的一半，再走剩下路程的一半，再一半：$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$。你永远不会越过对面的墙，而走过的总路程恰好趋近于 1。为了说得精确，我们考察部分和：$S_n$ 是前 $n$ 项的和。对这个级数，部分和依次为"
            },
            {
              "type": "math",
              "tex": "S_1 = \\tfrac{1}{2},\\quad S_2 = \\tfrac{3}{4},\\quad S_3 = \\tfrac{7}{8},\\quad S_4 = \\tfrac{15}{16},\\ \\ldots \\ \\to\\ 1"
            },
            {
              "type": "p",
              "en": "The partial sums climb toward 1 without ever reaching it. When the partial sums $S_n$ approach a fixed number $S$ as $n$ grows, we say the infinite series converges to $S$, and we call $S$ the sum of the series. If the partial sums grow without bound or bounce around forever, the series diverges and has no sum.",
              "zh": "部分和不断逼近 1 却永远达不到它。当 $n$ 增大时，若部分和 $S_n$ 趋近于某个固定的数 $S$，我们就说这个无穷级数收敛于 $S$，并称 $S$ 为该级数的和。若部分和无限增大或永远来回振荡，则级数发散，没有和。"
            },
            {
              "type": "h3",
              "en": "The convergence condition",
              "zh": "收敛条件"
            },
            {
              "type": "p",
              "en": "Start from the finite sum formula $S_n = \\frac{a_1(1 - r^n)}{1 - r}$. If $|r| < 1$, then $r^n$ shrinks toward 0 as $n$ grows (for instance $\\left(\\frac{1}{2}\\right)^{10} \\approx 0.001$), so the $r^n$ term fades away and $S_n$ approaches a limit:",
              "zh": "从有限和公式 $S_n = \\frac{a_1(1 - r^n)}{1 - r}$ 出发。若 $|r| < 1$，则当 $n$ 增大时 $r^n$ 趋近于 0（例如 $\\left(\\frac{1}{2}\\right)^{10} \\approx 0.001$），于是 $r^n$ 一项逐渐消失，$S_n$ 趋于一个极限："
            },
            {
              "type": "math",
              "tex": "S = \\frac{a_1}{1 - r}, \\qquad \\text{valid only when } |r| < 1"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $|r| < 1$ (like $r = \\frac{2}{3}$ or $r = -0.4$): the series converges and $S = \\frac{a_1}{1-r}$.",
                  "zh": "当 $|r| < 1$（如 $r = \\frac{2}{3}$ 或 $r = -0.4$）：级数收敛，$S = \\frac{a_1}{1-r}$。"
                },
                {
                  "en": "If $|r| > 1$ (like $r = 2$): the terms grow, the partial sums blow up, and the series diverges.",
                  "zh": "当 $|r| > 1$（如 $r = 2$）：各项越来越大，部分和无限增大，级数发散。"
                },
                {
                  "en": "If $r = 1$ the partial sums are $a_1, 2a_1, 3a_1, \\ldots$ (divergent); if $r = -1$ they alternate between $a_1$ and $0$ and never settle — also divergent.",
                  "zh": "当 $r = 1$ 时部分和为 $a_1, 2a_1, 3a_1, \\ldots$（发散）；当 $r = -1$ 时部分和在 $a_1$ 与 $0$ 之间来回跳动，永不稳定——同样发散。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: applying $S = \\frac{a_1}{1-r}$ without checking $|r| < 1$ first. The formula gives a number even when the series diverges — for $1 + 2 + 4 + \\cdots$ it \"gives\" $\\frac{1}{1-2} = -1$, which is nonsense. Always verify convergence before summing.",
              "zh": "常见错误：不先检查 $|r| < 1$ 就套用 $S = \\frac{a_1}{1-r}$。即使级数发散，公式也会算出一个数——对 $1 + 2 + 4 + \\cdots$ 它“算出” $\\frac{1}{1-2} = -1$，显然是荒谬的。求和之前务必先验证收敛性。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Summing an infinite series",
                "zh": "例题 1：求无穷级数的和"
              },
              "problem": {
                "en": "Find the sum of the infinite geometric series $18 - 12 + 8 - \\frac{16}{3} + \\cdots$, or explain why it diverges.",
                "zh": "求无穷等比级数 $18 - 12 + 8 - \\frac{16}{3} + \\cdots$ 的和，或说明它为什么发散。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The ratio is $r = \\frac{-12}{18} = -\\frac{2}{3}$. Since $|r| = \\frac{2}{3} < 1$, the series converges.",
                  "zh": "公比为 $r = \\frac{-12}{18} = -\\frac{2}{3}$。由于 $|r| = \\frac{2}{3} < 1$，级数收敛。"
                },
                {
                  "type": "math",
                  "tex": "S = \\frac{a_1}{1-r} = \\frac{18}{1 - \\left(-\\frac{2}{3}\\right)} = \\frac{18}{\\frac{5}{3}} = \\frac{54}{5} = 10.8"
                },
                {
                  "type": "p",
                  "en": "Note the sign care: subtracting a negative ratio makes the denominator $\\frac{5}{3}$, not $\\frac{1}{3}$.",
                  "zh": "注意符号：减去负的公比后分母是 $\\frac{5}{3}$，而不是 $\\frac{1}{3}$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Repeating Decimals as Fractions",
              "zh": "把循环小数化为分数"
            },
            {
              "type": "p",
              "en": "Every repeating decimal is secretly an infinite geometric series. For example $0.\\overline{45} = 0.454545\\ldots$ is $0.45 + 0.0045 + 0.000045 + \\cdots$, a geometric series with $a_1 = 0.45$ and $r = 0.01$. Since $|r| < 1$, the sum formula converts the decimal into an exact fraction — proof that every repeating decimal is a rational number.",
              "zh": "每个循环小数其实都是一个无穷等比级数。例如 $0.\\overline{45} = 0.454545\\ldots$ 就是 $0.45 + 0.0045 + 0.000045 + \\cdots$，是首项 $a_1 = 0.45$、公比 $r = 0.01$ 的等比级数。由于 $|r| < 1$，求和公式把这个小数化成精确的分数——这也证明了每个循环小数都是有理数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Converting a repeating decimal",
                "zh": "例题 2：化循环小数为分数"
              },
              "problem": {
                "en": "Write $0.\\overline{45}$ as a fraction in lowest terms.",
                "zh": "把 $0.\\overline{45}$ 写成最简分数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Treat it as an infinite geometric series with $a_1 = \\frac{45}{100}$ and $r = \\frac{1}{100}$:",
                  "zh": "把它看作首项 $a_1 = \\frac{45}{100}$、公比 $r = \\frac{1}{100}$ 的无穷等比级数："
                },
                {
                  "type": "math",
                  "tex": "S = \\frac{a_1}{1-r} = \\frac{\\frac{45}{100}}{1 - \\frac{1}{100}} = \\frac{\\frac{45}{100}}{\\frac{99}{100}} = \\frac{45}{99} = \\frac{5}{11}"
                },
                {
                  "type": "p",
                  "en": "Check with a calculator: $5 \\div 11 = 0.454545\\ldots$ ✓ In general, a block of repeating digits sits over the same number of 9s: $0.\\overline{45} = \\frac{45}{99}$.",
                  "zh": "用计算器验证：$5 \\div 11 = 0.454545\\ldots$，正确。一般地，循环节除以相同位数的 9：$0.\\overline{45} = \\frac{45}{99}$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Recursive Models",
              "zh": "递推模型"
            },
            {
              "type": "p",
              "en": "Many real processes are naturally described recursively: \"tomorrow's amount is a fixed fraction of today's, plus a fixed addition.\" A classic example is drug dosage. Suppose a patient takes 150 mg of a medication every morning, and the body eliminates 60% of the drug each day (so 40% remains). If $a_n$ is the amount in the bloodstream right after the $n$th dose, then:",
              "zh": "许多实际过程天然适合用递推描述：“明天的量等于今天的量乘以一个固定比例，再加上一个固定的量。”经典例子是药物剂量。设患者每天早晨服药 150 mg，身体每天代谢掉 60% 的药物（即保留 40%）。若 $a_n$ 表示第 $n$ 次服药后血液中的药量，则："
            },
            {
              "type": "math",
              "tex": "a_1 = 150, \\qquad a_{n+1} = 0.4\\,a_n + 150"
            },
            {
              "type": "p",
              "en": "Computing terms: $a_1 = 150$, $a_2 = 210$, $a_3 = 234$, $a_4 = 243.6, \\ldots$ The amounts level off. To find the steady-state level $L$, note that at equilibrium the amount stops changing, so $L$ satisfies $L = 0.4L + 150$, giving $0.6L = 150$ and $L = 250$ mg. This is the same limit you get by summing the infinite geometric series $150 + 150(0.4) + 150(0.4)^2 + \\cdots = \\frac{150}{1-0.4} = 250$.",
              "zh": "逐项计算：$a_1 = 150$，$a_2 = 210$，$a_3 = 234$，$a_4 = 243.6, \\ldots$ 药量逐渐趋于稳定。求稳态水平 $L$：平衡时药量不再变化，故 $L$ 满足 $L = 0.4L + 150$，得 $0.6L = 150$，$L = 250$ mg。这与对无穷等比级数求和的结果一致：$150 + 150(0.4) + 150(0.4)^2 + \\cdots = \\frac{150}{1-0.4} = 250$。"
            },
            {
              "type": "h3",
              "en": "Explicit vs. recursive representations",
              "zh": "显式与递推表示的比较"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Recursive: mirrors the real process step by step and is easy to write down and to iterate in a spreadsheet, but finding $a_{100}$ requires 99 steps.",
                  "zh": "递推式：逐步对应真实过程，容易写出，也便于用电子表格迭代，但求 $a_{100}$ 需要算 99 步。"
                },
                {
                  "en": "Explicit: jumps straight to any term and reveals long-run behavior (does $r^n$ die out?), but can be harder to build from a verbal description.",
                  "zh": "显式（通项）：可直接求任意一项，并能揭示长期趋势（$r^n$ 是否消失？），但从文字描述直接建立通项往往更难。"
                },
                {
                  "en": "A savings account with regular deposits works the same way: balance $b_{n+1} = (1+i)\\,b_n + D$, where $i$ is the monthly interest rate and $D$ the monthly deposit.",
                  "zh": "定期存款的储蓄账户同理：余额满足 $b_{n+1} = (1+i)\\,b_n + D$，其中 $i$ 是月利率，$D$ 是每月存款额。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: on word problems, first decide whether the quantity is multiplied by a constant, has a constant added, or BOTH. \"Loses 25% then adds 200\" translates to $a_{n+1} = 0.75\\,a_n + 200$ — students often write $0.25\\,a_n$ (the part lost) instead of $0.75\\,a_n$ (the part that remains).",
              "zh": "考试提示：做应用题时，先判断该量是被乘以常数、被加上常数，还是两者兼有。“减少 25% 后再加 200”应写成 $a_{n+1} = 0.75\\,a_n + 200$——学生常错写成 $0.25\\,a_n$（失去的部分），而正确的是 $0.75\\,a_n$（保留的部分）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Savings with deposits",
                "zh": "例题 3：定期存款"
              },
              "problem": {
                "en": "Jamal opens an account with \\$500. At the end of each month the account earns 1% interest, and then he deposits \\$100. Write a recursive formula for the balance $b_n$ after $n$ months, and find the balance after 3 months to the nearest cent.",
                "zh": "Jamal 开户存入 500 美元。每月末账户获得 1% 的利息，然后他再存入 100 美元。写出 $n$ 个月后余额 $b_n$ 的递推公式，并求 3 个月后的余额（精确到美分）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Each month the old balance is multiplied by $1.01$ (interest), then \\$100 is added:",
                  "zh": "每个月旧余额先乘以 $1.01$（利息），再加上 100 美元："
                },
                {
                  "type": "math",
                  "tex": "b_0 = 500, \\qquad b_{n+1} = 1.01\\,b_n + 100"
                },
                {
                  "type": "p",
                  "en": "Iterate: $b_1 = 1.01(500) + 100 = 605$; $b_2 = 1.01(605) + 100 = 711.05$; $b_3 = 1.01(711.05) + 100 = 818.16$ (rounded). After 3 months the balance is \\$818.16.",
                  "zh": "迭代计算：$b_1 = 1.01(500) + 100 = 605$；$b_2 = 1.01(605) + 100 = 711.05$；$b_3 = 1.01(711.05) + 100 = 818.16$（四舍五入）。3 个月后余额为 818.16 美元。"
                },
                {
                  "type": "p",
                  "en": "Unlike the drug model, here the multiplier $1.01 > 1$, so the balance grows without bound — good news for savings, and a reminder that recursive models only stabilize when the multiplier is between $-1$ and $1$.",
                  "zh": "与药物模型不同，这里的乘数 $1.01 > 1$，余额会无限增长——对储蓄是好消息，也提醒我们：只有当乘数介于 $-1$ 与 $1$ 之间时，递推模型才会趋于稳定。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which infinite geometric series converges?",
                "zh": "下列哪个无穷等比级数收敛？"
              },
              "choices": [
                "$4 + 6 + 9 + 13.5 + \\cdots$",
                "$100 + 80 + 64 + 51.2 + \\cdots$",
                "$1 - 1 + 1 - 1 + \\cdots$",
                "$2 + 4 + 8 + 16 + \\cdots$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The series $100 + 80 + 64 + \\cdots$ has $r = 0.8$ and $|0.8| < 1$, so it converges. The first has $r = 1.5$ and the last has $r = 2$ (both diverge). The alternating $1 - 1 + 1 - \\cdots$ has $r = -1$: its partial sums bounce between 1 and 0 forever, so it also diverges even though its terms stay small.",
                "zh": "级数 $100 + 80 + 64 + \\cdots$ 的公比 $r = 0.8$，$|0.8| < 1$，故收敛。第一个的 $r = 1.5$，最后一个的 $r = 2$（都发散）。交错级数 $1 - 1 + 1 - \\cdots$ 的 $r = -1$：部分和在 1 与 0 之间永远跳动，虽然各项不大，它同样发散。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the sum of the infinite geometric series $12 + 6 + 3 + 1.5 + \\cdots$. Give an integer.",
                "zh": "求无穷等比级数 $12 + 6 + 3 + 1.5 + \\cdots$ 的和。请填一个整数。"
              },
              "answer": "24",
              "accept": [
                "24.0"
              ],
              "explanation": {
                "en": "Here $a_1 = 12$ and $r = \\frac{1}{2}$, with $|r| < 1$, so $S = \\frac{12}{1 - \\frac{1}{2}} = \\frac{12}{\\frac{1}{2}} = 24$.",
                "zh": "这里 $a_1 = 12$，$r = \\frac{1}{2}$，且 $|r| < 1$，所以 $S = \\frac{12}{1 - \\frac{1}{2}} = \\frac{12}{\\frac{1}{2}} = 24$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which fraction equals the repeating decimal $0.\\overline{7} = 0.777\\ldots$?",
                "zh": "哪个分数等于循环小数 $0.\\overline{7} = 0.777\\ldots$？"
              },
              "choices": [
                "$\\frac{7}{10}$",
                "$\\frac{77}{100}$",
                "$\\frac{7}{9}$",
                "$\\frac{7}{11}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "As a series, $0.\\overline{7} = 0.7 + 0.07 + \\cdots$ with $a_1 = \\frac{7}{10}$, $r = \\frac{1}{10}$, so $S = \\frac{7/10}{9/10} = \\frac{7}{9}$. The distractor $\\frac{7}{10} = 0.7$ exactly stops after one digit — it ignores the infinite repetition.",
                "zh": "写成级数：$0.\\overline{7} = 0.7 + 0.07 + \\cdots$，$a_1 = \\frac{7}{10}$，$r = \\frac{1}{10}$，故 $S = \\frac{7/10}{9/10} = \\frac{7}{9}$。干扰项 $\\frac{7}{10} = 0.7$ 只取了一位小数——它忽略了无限循环。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why does the series $5 - 10 + 20 - 40 + \\cdots$ have no sum?",
                "zh": "为什么级数 $5 - 10 + 20 - 40 + \\cdots$ 没有和？"
              },
              "choices": [
                "Because $|r| = 2 > 1$, so the partial sums never approach a fixed number / 因为 $|r| = 2 > 1$，部分和不趋于任何固定的数",
                "Because the terms alternate in sign / 因为各项正负交错",
                "Because the first term is positive / 因为首项为正",
                "It does have a sum: $\\frac{5}{1-(-2)} = \\frac{5}{3}$ / 它有和：$\\frac{5}{1-(-2)} = \\frac{5}{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The ratio is $r = -2$ and $|r| = 2 > 1$, so the terms grow in size and the partial sums swing ever more wildly — they approach nothing. Alternating signs alone do NOT cause divergence (Example: $18 - 12 + 8 - \\cdots$ converges). Plugging into $\\frac{a_1}{1-r}$ gives $\\frac{5}{3}$, but that formula is invalid when $|r| \\ge 1$.",
                "zh": "公比 $r = -2$，$|r| = 2 > 1$，各项越来越大，部分和的摆动越来越剧烈——不趋于任何数。仅仅正负交错并不导致发散（例如 $18 - 12 + 8 - \\cdots$ 就收敛）。代入 $\\frac{a_1}{1-r}$ 会得到 $\\frac{5}{3}$，但当 $|r| \\ge 1$ 时该公式无效。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write $0.\\overline{36} = 0.363636\\ldots$ as a fraction in lowest terms (format like 3/4).",
                "zh": "把 $0.\\overline{36} = 0.363636\\ldots$ 写成最简分数（格式如 3/4）。"
              },
              "answer": "4/11",
              "accept": [
                "36/99"
              ],
              "explanation": {
                "en": "The repeating block 36 goes over 99: $0.\\overline{36} = \\frac{36}{99}$. Dividing top and bottom by 9 gives $\\frac{4}{11}$. Series view: $a_1 = \\frac{36}{100}$, $r = \\frac{1}{100}$, $S = \\frac{36/100}{99/100} = \\frac{36}{99}$.",
                "zh": "循环节 36 除以 99：$0.\\overline{36} = \\frac{36}{99}$。分子分母同除以 9 得 $\\frac{4}{11}$。级数角度：$a_1 = \\frac{36}{100}$，$r = \\frac{1}{100}$，$S = \\frac{36/100}{99/100} = \\frac{36}{99}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A patient takes a 200 mg dose every day, and the body eliminates half of the drug between doses. Using $a_{n+1} = 0.5\\,a_n + 200$, what amount does the drug level approach in the long run (right after a dose)?",
                "zh": "患者每天服药 200 mg，两次服药之间身体代谢掉一半药物。由递推式 $a_{n+1} = 0.5\\,a_n + 200$，从长期看（刚服药后）药量趋近于多少？"
              },
              "choices": [
                "$200$ mg",
                "$300$ mg",
                "$800$ mg",
                "$400$ mg"
              ],
              "answer": 3,
              "explanation": {
                "en": "At steady state the level stops changing: $L = 0.5L + 200$, so $0.5L = 200$ and $L = 400$ mg. Equivalently, sum the infinite series $200 + 200(0.5) + 200(0.5)^2 + \\cdots = \\frac{200}{1-0.5} = 400$. The distractor 200 is just each dose, ignoring the leftover drug that accumulates.",
                "zh": "稳态时药量不再变化：$L = 0.5L + 200$，故 $0.5L = 200$，$L = 400$ mg。等价地，对无穷级数求和：$200 + 200(0.5) + 200(0.5)^2 + \\cdots = \\frac{200}{1-0.5} = 400$。干扰项 200 只是每次的剂量，忽略了体内累积的残留药物。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An infinite geometric series has sum $S = 20$ and ratio $r = \\frac{1}{5}$. Find the first term $a_1$. Give an integer.",
                "zh": "某无穷等比级数的和 $S = 20$，公比 $r = \\frac{1}{5}$。求首项 $a_1$。请填一个整数。"
              },
              "answer": "16",
              "accept": [
                "16.0"
              ],
              "explanation": {
                "en": "From $S = \\frac{a_1}{1-r}$: $20 = \\frac{a_1}{1 - \\frac{1}{5}} = \\frac{a_1}{\\frac{4}{5}}$, so $a_1 = 20 \\cdot \\frac{4}{5} = 16$. Check: $\\frac{16}{4/5} = 20$. ✓",
                "zh": "由 $S = \\frac{a_1}{1-r}$：$20 = \\frac{a_1}{1 - \\frac{1}{5}} = \\frac{a_1}{\\frac{4}{5}}$，故 $a_1 = 20 \\cdot \\frac{4}{5} = 16$。验证：$\\frac{16}{4/5} = 20$，正确。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball is dropped from 10 m. On each bounce it rebounds to 60% of its previous height. What is the total vertical distance the ball travels before coming to rest?",
                "zh": "一只球从 10 m 高处落下，每次反弹到前一次高度的 60%。球最终静止前经过的竖直总路程是多少？"
              },
              "choices": [
                "$25$ m",
                "$40$ m",
                "$30$ m",
                "$16$ m"
              ],
              "answer": 1,
              "explanation": {
                "en": "The drop is 10 m. Each bounce height ($6, 3.6, 2.16, \\ldots$) is traveled twice — up and down: $2 \\cdot \\frac{6}{1-0.6} = 2(15) = 30$ m. Total: $10 + 30 = 40$ m. The distractor 25 m comes from $\\frac{10}{1-0.6}$, which forgets that every rebound is traveled both up and down while the initial 10 m is traveled only once.",
                "zh": "下落 10 m。每次反弹高度（$6, 3.6, 2.16, \\ldots$）都要经过两次——上升和下落：$2 \\cdot \\frac{6}{1-0.6} = 2(15) = 30$ m。总路程 $10 + 30 = 40$ m。干扰项 25 m 来自 $\\frac{10}{1-0.6}$，它忽略了每次反弹都要上下各走一次，而最初的 10 m 只走一次。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "trigonometry",
      "title": "Unit 8: Trigonometric Ratios and Functions",
      "titleZh": "第八单元：三角比与三角函数",
      "lessons": [
        {
          "id": "radians-and-angles-of-rotation",
          "title": "Radians and Angles of Rotation",
          "titleZh": "弧度制与旋转角",
          "content": [
            {
              "type": "h2",
              "en": "From Right Triangles to Angles of Rotation",
              "zh": "从直角三角形到旋转角"
            },
            {
              "type": "p",
              "en": "In Geometry you defined the trigonometric ratios inside a right triangle: for an acute angle $\\theta$, sine, cosine, and tangent compare the lengths of the sides. This quick review is the launching point for the whole unit.",
              "zh": "在几何课上，你曾在直角三角形中定义三角比：对于锐角 $\\theta$，正弦、余弦和正切比较三边的长度。这个快速回顾是整个单元的出发点。"
            },
            {
              "type": "math",
              "tex": "\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}, \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}, \\qquad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}"
            },
            {
              "type": "p",
              "en": "Right triangles only allow angles between $0^\\circ$ and $90^\\circ$. To go further, we place angles in standard position: the vertex sits at the origin, the initial side lies along the positive $x$-axis, and the terminal side rotates. A counterclockwise rotation gives a positive angle; a clockwise rotation gives a negative angle. Rotations can pass $360^\\circ$ — an angle of $450^\\circ$ is a full turn plus $90^\\circ$ more.",
              "zh": "直角三角形中的角只能在 $0^\\circ$ 到 $90^\\circ$ 之间。为了推广，我们把角放在标准位置：顶点在原点，始边沿 $x$ 轴正方向，终边绕原点旋转。逆时针旋转得到正角，顺时针旋转得到负角。旋转可以超过 $360^\\circ$——$450^\\circ$ 的角就是转满一圈再多转 $90^\\circ$。"
            },
            {
              "type": "h3",
              "en": "Coterminal Angles",
              "zh": "共终边角"
            },
            {
              "type": "p",
              "en": "Two angles in standard position are coterminal if they share the same terminal side. Adding or subtracting any whole number of full turns — multiples of $360^\\circ$ (or $2\\pi$ radians) — produces a coterminal angle. For example, $30^\\circ$, $390^\\circ$, and $-330^\\circ$ are all coterminal.",
              "zh": "两个标准位置角若终边相同，就称为共终边角。加上或减去整数个整圈——即 $360^\\circ$（或 $2\\pi$ 弧度）的倍数——就得到共终边角。例如 $30^\\circ$、$390^\\circ$ 和 $-330^\\circ$ 都是共终边角。"
            },
            {
              "type": "note",
              "en": "Common mistake: coterminal does NOT mean equal. $-60^\\circ$ and $300^\\circ$ point the same way, but they describe different rotations. When a problem asks for the coterminal angle between $0^\\circ$ and $360^\\circ$, keep adding or subtracting $360^\\circ$ until the result lands in that interval — do it more than once if needed.",
              "zh": "常见错误：共终边不等于相等。$-60^\\circ$ 和 $300^\\circ$ 终边方向相同，但描述的是不同的旋转。当题目要求 $0^\\circ$ 到 $360^\\circ$ 之间的共终边角时，要反复加减 $360^\\circ$ 直到结果落入该区间——必要时不止一次。"
            },
            {
              "type": "h2",
              "en": "Radian Measure",
              "zh": "弧度制"
            },
            {
              "type": "p",
              "en": "Degrees are an arbitrary convention (why 360?). Radians measure an angle by the arc it cuts from a circle: the radian measure of a central angle is the arc length divided by the radius. One radian is the angle whose arc is exactly one radius long — about $57.3^\\circ$. Because this definition uses only lengths, radians are the natural unit, and later formulas in trigonometry and calculus only work in radians.",
              "zh": "度是一种人为约定（为什么是 360？）。弧度用圆弧来度量角：圆心角的弧度数等于所对弧长除以半径。1 弧度就是弧长恰好等于半径的角——约 $57.3^\\circ$。由于这个定义只用到长度，弧度是最自然的单位，三角学和微积分中后续的公式都只在弧度制下成立。"
            },
            {
              "type": "math",
              "tex": "\\theta = \\frac{s}{r}"
            },
            {
              "type": "p",
              "en": "A full circle has arc length $s = 2\\pi r$, so a full turn measures $\\theta = \\frac{2\\pi r}{r} = 2\\pi$ radians. Therefore $360^\\circ = 2\\pi$ rad, which gives the key conversion fact $180^\\circ = \\pi$ rad.",
              "zh": "整圆的弧长为 $s = 2\\pi r$，所以一整圈是 $\\theta = \\frac{2\\pi r}{r} = 2\\pi$ 弧度。因此 $360^\\circ = 2\\pi$ 弧度，由此得到关键换算关系 $180^\\circ = \\pi$ 弧度。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Degrees $\\to$ radians: multiply by $\\frac{\\pi}{180^\\circ}$. Example: $45^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{\\pi}{4}$.",
                  "zh": "度 $\\to$ 弧度：乘以 $\\frac{\\pi}{180^\\circ}$。例：$45^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{\\pi}{4}$。"
                },
                {
                  "en": "Radians $\\to$ degrees: multiply by $\\frac{180^\\circ}{\\pi}$. Example: $\\frac{5\\pi}{6} \\cdot \\frac{180^\\circ}{\\pi} = 150^\\circ$.",
                  "zh": "弧度 $\\to$ 度：乘以 $\\frac{180^\\circ}{\\pi}$。例：$\\frac{5\\pi}{6} \\cdot \\frac{180^\\circ}{\\pi} = 150^\\circ$。"
                },
                {
                  "en": "Memorize the benchmark angles: $30^\\circ = \\frac{\\pi}{6}$, $45^\\circ = \\frac{\\pi}{4}$, $60^\\circ = \\frac{\\pi}{3}$, $90^\\circ = \\frac{\\pi}{2}$, $180^\\circ = \\pi$.",
                  "zh": "熟记基准角：$30^\\circ = \\frac{\\pi}{6}$，$45^\\circ = \\frac{\\pi}{4}$，$60^\\circ = \\frac{\\pi}{3}$，$90^\\circ = \\frac{\\pi}{2}$，$180^\\circ = \\pi$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: if an angle is written with no degree symbol — such as $\\theta = \\frac{2\\pi}{3}$ or even $\\theta = 2$ — it is in radians. Leave exact answers in terms of $\\pi$ unless the problem says to round, and make sure your calculator is in the correct mode before evaluating anything.",
              "zh": "考试提示：角若不带度数符号——如 $\\theta = \\frac{2\\pi}{3}$ 甚至 $\\theta = 2$——就是弧度。除非题目要求四舍五入，精确答案应保留 $\\pi$；计算前务必确认计算器处于正确的角度模式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Convert $225^\\circ$ to radians, and find the angle in $[0, 2\\pi)$ that is coterminal with $-\\frac{\\pi}{3}$.",
                "zh": "把 $225^\\circ$ 化为弧度，并求区间 $[0, 2\\pi)$ 内与 $-\\frac{\\pi}{3}$ 共终边的角。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply by $\\frac{\\pi}{180^\\circ}$ and simplify the fraction:",
                  "zh": "乘以 $\\frac{\\pi}{180^\\circ}$ 并约分："
                },
                {
                  "type": "math",
                  "tex": "225^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{225\\pi}{180} = \\frac{5\\pi}{4}"
                },
                {
                  "type": "p",
                  "en": "For the coterminal angle, add one full turn of $2\\pi$: $-\\frac{\\pi}{3} + 2\\pi = -\\frac{\\pi}{3} + \\frac{6\\pi}{3} = \\frac{5\\pi}{3}$, which lies in $[0, 2\\pi)$.",
                  "zh": "求共终边角时加上一整圈 $2\\pi$：$-\\frac{\\pi}{3} + 2\\pi = -\\frac{\\pi}{3} + \\frac{6\\pi}{3} = \\frac{5\\pi}{3}$，它落在 $[0, 2\\pi)$ 内。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Arc Length and Sector Area",
              "zh": "弧长与扇形面积"
            },
            {
              "type": "p",
              "en": "Rearranging the radian definition $\\theta = \\frac{s}{r}$ gives the arc length formula, and a proportion of the full circle gives the sector area. Both formulas require $\\theta$ in radians — convert first if the angle is in degrees.",
              "zh": "把弧度定义 $\\theta = \\frac{s}{r}$ 变形即得弧长公式；再按整圆的比例可得扇形面积公式。两个公式都要求 $\\theta$ 用弧度——若角是度数，先换算。"
            },
            {
              "type": "math",
              "tex": "s = r\\theta, \\qquad A = \\frac{1}{2}r^2\\theta"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "A slice is cut from a pizza of radius 8 inches with a central angle of $45^\\circ$. Find the length of the crust (the arc) and the area of the slice. Round to one decimal place.",
                "zh": "从半径 8 英寸的披萨上切下一块，圆心角为 $45^\\circ$。求饼边（弧）的长度和这块披萨的面积，结果保留一位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First convert: $45^\\circ = \\frac{\\pi}{4}$ radians. Then apply both formulas with $r = 8$:",
                  "zh": "先换算：$45^\\circ = \\frac{\\pi}{4}$ 弧度。再以 $r = 8$ 代入两个公式："
                },
                {
                  "type": "math",
                  "tex": "s = 8 \\cdot \\frac{\\pi}{4} = 2\\pi \\approx 6.3 \\text{ in}, \\qquad A = \\frac{1}{2}(8)^2 \\cdot \\frac{\\pi}{4} = 8\\pi \\approx 25.1 \\text{ in}^2"
                },
                {
                  "type": "p",
                  "en": "Forgetting to convert to radians would give $s = 8 \\cdot 45 = 360$, an absurd answer — a quick reasonableness check catches this error.",
                  "zh": "若忘记换算为弧度会得到 $s = 8 \\cdot 45 = 360$，明显荒谬——简单检查答案的合理性就能发现这个错误。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Reference Angles",
              "zh": "参考角"
            },
            {
              "type": "p",
              "en": "The reference angle of $\\theta$ is the acute angle between the terminal side of $\\theta$ and the $x$-axis. In Quadrant I it is $\\theta$ itself; in Quadrant II it is $180^\\circ - \\theta$ (or $\\pi - \\theta$); in Quadrant III it is $\\theta - 180^\\circ$ (or $\\theta - \\pi$); in Quadrant IV it is $360^\\circ - \\theta$ (or $2\\pi - \\theta$). Reference angles let us evaluate trig functions of any angle using first-quadrant values, which is the key skill of the next lesson.",
              "zh": "角 $\\theta$ 的参考角是其终边与 $x$ 轴之间的锐角。第一象限中就是 $\\theta$ 本身；第二象限是 $180^\\circ - \\theta$（即 $\\pi - \\theta$）；第三象限是 $\\theta - 180^\\circ$（即 $\\theta - \\pi$）；第四象限是 $360^\\circ - \\theta$（即 $2\\pi - \\theta$）。参考角使我们能用第一象限的值求任意角的三角函数，这是后续内容的关键技能。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Find the reference angle of $\\frac{5\\pi}{4}$ and of $300^\\circ$.",
                "zh": "求 $\\frac{5\\pi}{4}$ 和 $300^\\circ$ 的参考角。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Since $\\pi < \\frac{5\\pi}{4} < \\frac{3\\pi}{2}$, the angle is in Quadrant III, so the reference angle is $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$.",
                  "zh": "因为 $\\pi < \\frac{5\\pi}{4} < \\frac{3\\pi}{2}$，该角在第三象限，参考角为 $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$。"
                },
                {
                  "type": "p",
                  "en": "The angle $300^\\circ$ is in Quadrant IV, so its reference angle is $360^\\circ - 300^\\circ = 60^\\circ$.",
                  "zh": "$300^\\circ$ 在第四象限，参考角为 $360^\\circ - 300^\\circ = 60^\\circ$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Convert $60^\\circ$ to radians.",
                "zh": "把 $60^\\circ$ 化为弧度。"
              },
              "choices": [
                "$\\frac{\\pi}{6}$",
                "$\\frac{\\pi}{4}$",
                "$\\frac{\\pi}{3}$",
                "$\\frac{\\pi}{2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$60^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$. The choice $\\frac{\\pi}{6}$ is tempting because $60$ contains a 6, but $\\frac{\\pi}{6}$ is actually $30^\\circ$.",
                "zh": "$60^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$。选项 $\\frac{\\pi}{6}$ 因为含有 6 而具有迷惑性，但 $\\frac{\\pi}{6}$ 其实是 $30^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Convert $\\frac{3\\pi}{4}$ to degrees.",
                "zh": "把 $\\frac{3\\pi}{4}$ 化为度。"
              },
              "choices": [
                "$120^\\circ$",
                "$135^\\circ$",
                "$145^\\circ$",
                "$150^\\circ$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\frac{3\\pi}{4} \\cdot \\frac{180^\\circ}{\\pi} = \\frac{3 \\cdot 180^\\circ}{4} = 135^\\circ$. Choosing $150^\\circ$ confuses this angle with $\\frac{5\\pi}{6}$.",
                "zh": "$\\frac{3\\pi}{4} \\cdot \\frac{180^\\circ}{\\pi} = \\frac{3 \\cdot 180^\\circ}{4} = 135^\\circ$。选 $150^\\circ$ 是把它与 $\\frac{5\\pi}{6}$ 混淆了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the angle between $0^\\circ$ and $360^\\circ$ that is coterminal with $780^\\circ$. Give an integer number of degrees.",
                "zh": "求 $0^\\circ$ 到 $360^\\circ$ 之间与 $780^\\circ$ 共终边的角。请填一个整数（单位：度）。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "Subtract full turns: $780^\\circ - 360^\\circ = 420^\\circ$, still too big, so subtract again: $420^\\circ - 360^\\circ = 60^\\circ$. Two subtractions are needed — stopping at $420^\\circ$ is the common error.",
                "zh": "减去整圈：$780^\\circ - 360^\\circ = 420^\\circ$，仍然太大，再减一次：$420^\\circ - 360^\\circ = 60^\\circ$。需要减两次——只减到 $420^\\circ$ 就停是常见错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which angle is coterminal with $\\frac{\\pi}{6}$?",
                "zh": "下列哪个角与 $\\frac{\\pi}{6}$ 共终边？"
              },
              "choices": [
                "$\\frac{7\\pi}{6}$",
                "$-\\frac{\\pi}{6}$",
                "$\\frac{5\\pi}{6}$",
                "$\\frac{13\\pi}{6}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Coterminal angles differ by a multiple of $2\\pi$: $\\frac{\\pi}{6} + 2\\pi = \\frac{\\pi}{6} + \\frac{12\\pi}{6} = \\frac{13\\pi}{6}$. The distractor $-\\frac{\\pi}{6}$ is the reflection of $\\frac{\\pi}{6}$ below the $x$-axis, not a full-turn shift.",
                "zh": "共终边角相差 $2\\pi$ 的整数倍：$\\frac{\\pi}{6} + 2\\pi = \\frac{\\pi}{6} + \\frac{12\\pi}{6} = \\frac{13\\pi}{6}$。干扰项 $-\\frac{\\pi}{6}$ 是 $\\frac{\\pi}{6}$ 关于 $x$ 轴的对称角，并非相差整圈。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A circle has radius $9$ cm. A central angle of $\\frac{2\\pi}{3}$ cuts off an arc of length $k\\pi$ cm. Enter the integer $k$.",
                "zh": "一个圆的半径为 $9$ 厘米，圆心角 $\\frac{2\\pi}{3}$ 所对的弧长为 $k\\pi$ 厘米。请填整数 $k$。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "Arc length is $s = r\\theta = 9 \\cdot \\frac{2\\pi}{3} = 6\\pi$ cm, so $k = 6$. The formula only works because the angle is already in radians.",
                "zh": "弧长 $s = r\\theta = 9 \\cdot \\frac{2\\pi}{3} = 6\\pi$ 厘米，所以 $k = 6$。公式成立的前提是角已用弧度表示。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the reference angle of $\\frac{5\\pi}{6}$?",
                "zh": "$\\frac{5\\pi}{6}$ 的参考角是多少？"
              },
              "choices": [
                "$\\frac{\\pi}{6}$",
                "$\\frac{\\pi}{3}$",
                "$\\frac{5\\pi}{6}$",
                "$\\frac{2\\pi}{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The angle $\\frac{5\\pi}{6}$ is in Quadrant II, so the reference angle is $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$. Answering $\\frac{5\\pi}{6}$ itself forgets that a reference angle must be acute.",
                "zh": "$\\frac{5\\pi}{6}$ 在第二象限，参考角为 $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$。直接回答 $\\frac{5\\pi}{6}$ 忽略了参考角必须是锐角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the reference angle of $240^\\circ$. Give an integer number of degrees.",
                "zh": "求 $240^\\circ$ 的参考角。请填一个整数（单位：度）。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "$240^\\circ$ lies in Quadrant III (between $180^\\circ$ and $270^\\circ$), so the reference angle is $240^\\circ - 180^\\circ = 60^\\circ$.",
                "zh": "$240^\\circ$ 在第三象限（$180^\\circ$ 与 $270^\\circ$ 之间），参考角为 $240^\\circ - 180^\\circ = 60^\\circ$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Challenge: a lawn sprinkler sprays water a distance of $12$ m while rotating through an angle of $135^\\circ$. What area of lawn does it water?",
                "zh": "挑战题：一个草坪喷灌器的射程为 $12$ 米，旋转角度为 $135^\\circ$。它能浇灌多大面积的草坪？"
              },
              "choices": [
                "$27\\pi \\text{ m}^2$",
                "$54\\pi \\text{ m}^2$",
                "$108\\pi \\text{ m}^2$",
                "$18\\pi \\text{ m}^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Convert first: $135^\\circ = \\frac{3\\pi}{4}$. Then $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(144)\\left(\\frac{3\\pi}{4}\\right) = 54\\pi \\text{ m}^2$. The distractor $108\\pi$ comes from forgetting the factor $\\frac{1}{2}$ in the sector area formula.",
                "zh": "先换算：$135^\\circ = \\frac{3\\pi}{4}$。则 $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(144)\\left(\\frac{3\\pi}{4}\\right) = 54\\pi$ 平方米。干扰项 $108\\pi$ 来自漏掉扇形面积公式中的因子 $\\frac{1}{2}$。"
              }
            }
          ]
        },
        {
          "id": "unit-circle-and-trig-graphs",
          "title": "The Unit Circle and Graphs of Sine and Cosine",
          "titleZh": "单位圆与正弦余弦图象",
          "content": [
            {
              "type": "h2",
              "en": "The Unit Circle Definition",
              "zh": "单位圆定义"
            },
            {
              "type": "p",
              "en": "The unit circle is the circle of radius 1 centered at the origin. Place an angle $\\theta$ in standard position and mark the point $P$ where its terminal side meets the circle. We now define the trigonometric functions for ANY angle — positive, negative, or larger than $90^\\circ$ — by the coordinates of $P$.",
              "zh": "单位圆是以原点为圆心、半径为 1 的圆。把角 $\\theta$ 放在标准位置，记其终边与圆的交点为 $P$。我们用 $P$ 的坐标为任意角——无论正负、无论是否超过 $90^\\circ$——定义三角函数。"
            },
            {
              "type": "math",
              "tex": "\\cos\\theta = x, \\qquad \\sin\\theta = y, \\qquad \\tan\\theta = \\frac{y}{x} \\ (x \\neq 0)"
            },
            {
              "type": "p",
              "en": "For acute angles this agrees with the right-triangle ratios, because the hypotenuse has length 1. The exact values at the special angles come from the $45^\\circ\\text{-}45^\\circ\\text{-}90^\\circ$ and $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$ triangles.",
              "zh": "对锐角而言，这与直角三角形的比值一致，因为斜边长为 1。特殊角的精确值来自 $45^\\circ\\text{-}45^\\circ\\text{-}90^\\circ$ 和 $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$ 三角形。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\theta = \\frac{\\pi}{6}$: $\\ \\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$, so $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ and $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$.",
                  "zh": "$\\theta = \\frac{\\pi}{6}$：坐标 $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$，所以 $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$，$\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$。"
                },
                {
                  "en": "$\\theta = \\frac{\\pi}{4}$: $\\ \\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$, so sine and cosine are equal and $\\tan\\frac{\\pi}{4} = 1$.",
                  "zh": "$\\theta = \\frac{\\pi}{4}$：坐标 $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$，正弦与余弦相等，且 $\\tan\\frac{\\pi}{4} = 1$。"
                },
                {
                  "en": "$\\theta = \\frac{\\pi}{3}$: $\\ \\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ — the coordinates of $\\frac{\\pi}{6}$ swapped.",
                  "zh": "$\\theta = \\frac{\\pi}{3}$：坐标 $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$——恰好是 $\\frac{\\pi}{6}$ 坐标的互换。"
                },
                {
                  "en": "Quadrantal angles: $(1,0)$ at $0$, $(0,1)$ at $\\frac{\\pi}{2}$, $(-1,0)$ at $\\pi$, $(0,-1)$ at $\\frac{3\\pi}{2}$.",
                  "zh": "象限界角：$0$ 处为 $(1,0)$，$\\frac{\\pi}{2}$ 处为 $(0,1)$，$\\pi$ 处为 $(-1,0)$，$\\frac{3\\pi}{2}$ 处为 $(0,-1)$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Signs in the Four Quadrants (ASTC)",
              "zh": "四个象限中的符号（ASTC）"
            },
            {
              "type": "p",
              "en": "Signs follow the coordinates of $P$. In Quadrant I All functions are positive; in Quadrant II only Sine; in Quadrant III only Tangent; in Quadrant IV only Cosine. The mnemonic \"All Students Take Calculus\" (ASTC) keeps the order straight. To evaluate any special angle: find the reference angle for the magnitude, then attach the sign from the quadrant.",
              "zh": "符号由点 $P$ 的坐标决定。第一象限所有函数为正（All）；第二象限只有正弦为正（Sine）；第三象限只有正切为正（Tangent）；第四象限只有余弦为正（Cosine）。口诀 \"All Students Take Calculus\"（ASTC）帮助记忆顺序。求任意特殊角的值：用参考角确定大小，再按象限添上符号。"
            },
            {
              "type": "note",
              "en": "Common mistake: forgetting the sign. $\\cos\\frac{2\\pi}{3}$ has reference angle $\\frac{\\pi}{3}$, so its magnitude is $\\frac{1}{2}$ — but the angle is in Quadrant II where cosine is negative, so $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$. Always decide the quadrant BEFORE writing the answer.",
              "zh": "常见错误：忘记符号。$\\cos\\frac{2\\pi}{3}$ 的参考角是 $\\frac{\\pi}{3}$，大小为 $\\frac{1}{2}$——但该角在第二象限，余弦为负，所以 $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$。写答案之前一定先判断象限。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Find the exact values of $\\sin\\frac{7\\pi}{4}$ and $\\tan\\frac{4\\pi}{3}$.",
                "zh": "求 $\\sin\\frac{7\\pi}{4}$ 和 $\\tan\\frac{4\\pi}{3}$ 的精确值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "$\\frac{7\\pi}{4}$ is in Quadrant IV with reference angle $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$. Sine is negative there:",
                  "zh": "$\\frac{7\\pi}{4}$ 在第四象限，参考角为 $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$。该象限正弦为负："
                },
                {
                  "type": "math",
                  "tex": "\\sin\\frac{7\\pi}{4} = -\\frac{\\sqrt{2}}{2}"
                },
                {
                  "type": "p",
                  "en": "$\\frac{4\\pi}{3}$ is in Quadrant III with reference angle $\\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$. Tangent is positive in Quadrant III:",
                  "zh": "$\\frac{4\\pi}{3}$ 在第三象限，参考角为 $\\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$。第三象限正切为正："
                },
                {
                  "type": "math",
                  "tex": "\\tan\\frac{4\\pi}{3} = +\\tan\\frac{\\pi}{3} = \\sqrt{3}"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Graphs of Sine and Cosine",
              "zh": "正弦与余弦的图象"
            },
            {
              "type": "p",
              "en": "As $\\theta$ increases, the point $P$ travels around the circle and its coordinates repeat every full turn: $\\sin(\\theta + 2\\pi) = \\sin\\theta$ and $\\cos(\\theta + 2\\pi) = \\cos\\theta$. Sine and cosine are periodic with period $2\\pi$. Plotting $y = \\sin x$ gives a wave through $(0,0)$ rising to 1 at $\\frac{\\pi}{2}$; $y = \\cos x$ is the same wave starting at its maximum $(0, 1)$.",
              "zh": "当 $\\theta$ 增大时，点 $P$ 绕圆运动，其坐标每转一圈重复一次：$\\sin(\\theta + 2\\pi) = \\sin\\theta$，$\\cos(\\theta + 2\\pi) = \\cos\\theta$。正弦和余弦是周期为 $2\\pi$ 的周期函数。$y = \\sin x$ 的图象是过 $(0,0)$、在 $\\frac{\\pi}{2}$ 处升到 1 的波形；$y = \\cos x$ 是同样的波形，但从最高点 $(0, 1)$ 出发。"
            },
            {
              "type": "math",
              "tex": "y = a\\sin\\big(b(x - h)\\big) + k"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Amplitude $= |a|$: half the distance between the maximum and minimum.",
                  "zh": "振幅 $= |a|$：最大值与最小值之差的一半。"
                },
                {
                  "en": "Period $= \\frac{2\\pi}{b}$ (for $b > 0$): a larger $b$ squeezes more cycles into the same width.",
                  "zh": "周期 $= \\frac{2\\pi}{b}$（$b > 0$）：$b$ 越大，同样宽度内的周期越多。"
                },
                {
                  "en": "Midline $y = k$: the horizontal center line; the maximum is $k + |a|$ and the minimum is $k - |a|$.",
                  "zh": "中线 $y = k$：图象的水平中心线；最大值为 $k + |a|$，最小值为 $k - |a|$。"
                },
                {
                  "en": "Phase shift $= h$: the horizontal shift, read AFTER factoring $b$ out of the parentheses.",
                  "zh": "相移 $= h$：水平平移量，必须先把 $b$ 从括号中提出再读取。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: to read the phase shift of $y = \\sin(2x - \\frac{\\pi}{2})$, factor first: $\\sin\\big(2(x - \\frac{\\pi}{4})\\big)$. The shift is $\\frac{\\pi}{4}$, not $\\frac{\\pi}{2}$. Skipping the factoring step is one of the most frequent errors on trig-graph questions.",
              "zh": "考试提示：读取 $y = \\sin(2x - \\frac{\\pi}{2})$ 的相移时先提取系数：$\\sin\\big(2(x - \\frac{\\pi}{4})\\big)$。相移是 $\\frac{\\pi}{4}$ 而不是 $\\frac{\\pi}{2}$。跳过提取这一步是三角图象题中最常见的错误之一。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "State the amplitude, period, midline, and phase shift of $y = 3\\sin\\big(2(x - \\frac{\\pi}{4})\\big) + 1$, and give its maximum value.",
                "zh": "写出 $y = 3\\sin\\big(2(x - \\frac{\\pi}{4})\\big) + 1$ 的振幅、周期、中线和相移，并求其最大值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compare with $a\\sin(b(x-h))+k$: $a = 3$, $b = 2$, $h = \\frac{\\pi}{4}$, $k = 1$.",
                  "zh": "与 $a\\sin(b(x-h))+k$ 对比：$a = 3$，$b = 2$，$h = \\frac{\\pi}{4}$，$k = 1$。"
                },
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "Amplitude $3$; period $\\frac{2\\pi}{2} = \\pi$; midline $y = 1$; phase shift $\\frac{\\pi}{4}$ to the right.",
                      "zh": "振幅 $3$；周期 $\\frac{2\\pi}{2} = \\pi$；中线 $y = 1$；相移为向右 $\\frac{\\pi}{4}$。"
                    },
                    {
                      "en": "Maximum $= k + |a| = 1 + 3 = 4$, reached where the sine factor equals 1.",
                      "zh": "最大值 $= k + |a| = 1 + 3 = 4$，在正弦因子取 1 处达到。"
                    }
                  ]
                }
              ]
            },
            {
              "type": "h3",
              "en": "Modeling Periodic Phenomena",
              "zh": "周期现象的建模"
            },
            {
              "type": "p",
              "en": "Anything that repeats — a Ferris wheel, tides, daylight hours, a vibrating string — can be modeled with sine or cosine. Strategy: the midline $k$ is the average value, the amplitude $|a|$ is half the max-to-min distance, $b = \\frac{2\\pi}{\\text{period}}$, and the phase shift (or a cosine start) matches the starting position.",
              "zh": "一切重复的现象——摩天轮、潮汐、日照时长、振动的琴弦——都可以用正弦或余弦建模。策略：中线 $k$ 是平均值，振幅 $|a|$ 是最大值到最小值距离的一半，$b = \\frac{2\\pi}{\\text{周期}}$，相移（或改用余弦）用来匹配起始位置。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A Ferris wheel of radius 25 m has its center 30 m above the ground and makes one revolution every 20 minutes. A rider boards at the lowest point at $t = 0$. Write a model for the rider's height $h(t)$ in meters.",
                "zh": "一座摩天轮半径 25 米，中心离地 30 米，每 20 分钟转一圈。乘客在 $t = 0$ 时从最低点上车。写出乘客高度 $h(t)$（单位：米）的模型。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Midline $k = 30$ (the center height), amplitude $25$ (the radius), and $b = \\frac{2\\pi}{20} = \\frac{\\pi}{10}$. Starting at the minimum is exactly what a reflected cosine does:",
                  "zh": "中线 $k = 30$（中心高度），振幅 $25$（半径），$b = \\frac{2\\pi}{20} = \\frac{\\pi}{10}$。从最低点出发恰好对应翻折后的余弦："
                },
                {
                  "type": "math",
                  "tex": "h(t) = 30 - 25\\cos\\left(\\frac{\\pi}{10}t\\right)"
                },
                {
                  "type": "p",
                  "en": "Check: $h(0) = 30 - 25 = 5$ m (lowest point, one radius below center) and $h(10) = 30 + 25 = 55$ m (top). The model behaves correctly.",
                  "zh": "验证：$h(0) = 30 - 25 = 5$ 米（最低点，位于中心下方一个半径处），$h(10) = 30 + 25 = 55$ 米（最高点）。模型行为正确。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the exact value of $\\cos\\frac{\\pi}{3}$?",
                "zh": "$\\cos\\frac{\\pi}{3}$ 的精确值是多少？"
              },
              "choices": [
                "$-\\frac{1}{2}$",
                "$\\frac{\\sqrt{3}}{2}$",
                "$\\frac{\\sqrt{2}}{2}$",
                "$\\frac{1}{2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The unit-circle point at $\\frac{\\pi}{3}$ is $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$, and cosine is the $x$-coordinate: $\\frac{1}{2}$. Choosing $\\frac{\\sqrt{3}}{2}$ swaps sine and cosine — that value is $\\sin\\frac{\\pi}{3}$.",
                "zh": "单位圆上 $\\frac{\\pi}{3}$ 处的点是 $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$，余弦是 $x$ 坐标：$\\frac{1}{2}$。选 $\\frac{\\sqrt{3}}{2}$ 是把正弦和余弦弄反了——那是 $\\sin\\frac{\\pi}{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the exact value of $\\sin\\frac{7\\pi}{6}$?",
                "zh": "$\\sin\\frac{7\\pi}{6}$ 的精确值是多少？"
              },
              "choices": [
                "$\\frac{1}{2}$",
                "$-\\frac{\\sqrt{3}}{2}$",
                "$-\\frac{1}{2}$",
                "$\\frac{\\sqrt{3}}{2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\frac{7\\pi}{6}$ is in Quadrant III with reference angle $\\frac{\\pi}{6}$, so the magnitude is $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ and the sign is negative (sine is negative in Quadrant III). The distractor $\\frac{1}{2}$ has the right magnitude but forgets the sign.",
                "zh": "$\\frac{7\\pi}{6}$ 在第三象限，参考角为 $\\frac{\\pi}{6}$，大小为 $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$，符号为负（第三象限正弦为负）。干扰项 $\\frac{1}{2}$ 大小正确但漏了符号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\tan\\frac{3\\pi}{4}$. Give an integer.",
                "zh": "求 $\\tan\\frac{3\\pi}{4}$ 的值。请填一个整数。"
              },
              "answer": "-1",
              "accept": [
                "-1.0"
              ],
              "explanation": {
                "en": "$\\frac{3\\pi}{4}$ is in Quadrant II with reference angle $\\frac{\\pi}{4}$, where $\\tan\\frac{\\pi}{4} = 1$. Tangent is negative in Quadrant II ($y > 0$, $x < 0$), so $\\tan\\frac{3\\pi}{4} = -1$.",
                "zh": "$\\frac{3\\pi}{4}$ 在第二象限，参考角为 $\\frac{\\pi}{4}$，且 $\\tan\\frac{\\pi}{4} = 1$。第二象限正切为负（$y > 0$，$x < 0$），所以 $\\tan\\frac{3\\pi}{4} = -1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In which quadrant is $\\sin\\theta < 0$ and $\\cos\\theta > 0$?",
                "zh": "在哪个象限中 $\\sin\\theta < 0$ 且 $\\cos\\theta > 0$？"
              },
              "choices": [
                "Quadrant I / 第一象限",
                "Quadrant II / 第二象限",
                "Quadrant III / 第三象限",
                "Quadrant IV / 第四象限"
              ],
              "answer": 3,
              "explanation": {
                "en": "Sine is the $y$-coordinate and cosine is the $x$-coordinate, so we need $y < 0$ and $x > 0$: Quadrant IV. In ASTC terms, Quadrant IV is where only Cosine is positive.",
                "zh": "正弦是 $y$ 坐标，余弦是 $x$ 坐标，所以需要 $y < 0$ 且 $x > 0$：第四象限。按 ASTC 口诀，第四象限只有余弦为正。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "State the amplitude of $y = -4\\sin(3x) + 2$. Give a positive integer.",
                "zh": "写出 $y = -4\\sin(3x) + 2$ 的振幅。请填一个正整数。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "Amplitude is $|a| = |-4| = 4$. The negative sign reflects the graph but does not change the amplitude, and the $+2$ moves the midline, not the amplitude.",
                "zh": "振幅是 $|a| = |-4| = 4$。负号使图象翻折，但不改变振幅；$+2$ 移动的是中线，与振幅无关。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the period of $y = \\cos(4x)$?",
                "zh": "$y = \\cos(4x)$ 的周期是多少？"
              },
              "choices": [
                "$2\\pi$",
                "$\\frac{\\pi}{2}$",
                "$4\\pi$",
                "$\\frac{\\pi}{4}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Period $= \\frac{2\\pi}{b} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. Choosing $4\\pi$ multiplies by $b$ instead of dividing — remember a larger $b$ makes the graph repeat FASTER, so the period must shrink.",
                "zh": "周期 $= \\frac{2\\pi}{b} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。选 $4\\pi$ 是把 $b$ 乘上去而不是除——记住 $b$ 越大图象重复得越快，周期必然变小。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The midline of $y = 2\\sin\\big(x - \\frac{\\pi}{3}\\big) + 5$ is the line $y = c$. Enter the integer $c$.",
                "zh": "$y = 2\\sin\\big(x - \\frac{\\pi}{3}\\big) + 5$ 的中线是直线 $y = c$。请填整数 $c$。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "The vertical shift $k = 5$ gives the midline $y = 5$. The graph oscillates between $5 - 2 = 3$ and $5 + 2 = 7$, centered on this line.",
                "zh": "竖直平移 $k = 5$ 给出中线 $y = 5$。图象在 $5 - 2 = 3$ 与 $5 + 2 = 7$ 之间振荡，以这条线为中心。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Challenge: at low tide ($t = 0$ hours) the water depth at a dock is 2 m; at high tide, 6 hours later, it is 8 m, and the depth varies sinusoidally. Which model fits the depth $d(t)$?",
                "zh": "挑战题：退潮时（$t = 0$ 小时）码头水深 2 米；6 小时后涨潮时水深 8 米，水深按正弦规律变化。哪个模型符合水深 $d(t)$？"
              },
              "choices": [
                "$d(t) = 3\\cos\\left(\\frac{\\pi}{6}t\\right) + 5$",
                "$d(t) = 5 - 3\\cos\\left(\\frac{\\pi}{6}t\\right)$",
                "$d(t) = 6\\sin\\left(\\frac{\\pi}{6}t\\right) + 2$",
                "$d(t) = 5 - 3\\cos\\left(\\frac{\\pi}{12}t\\right)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Midline $= \\frac{2+8}{2} = 5$, amplitude $= \\frac{8-2}{2} = 3$, and low-to-high is HALF a period, so the period is 12 h and $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$. Starting at the minimum requires a reflected cosine: $d(t) = 5 - 3\\cos(\\frac{\\pi}{6}t)$. Check: $d(0) = 2$, $d(6) = 8$. The first choice starts at the MAXIMUM instead, giving $d(0) = 8$.",
                "zh": "中线 $= \\frac{2+8}{2} = 5$，振幅 $= \\frac{8-2}{2} = 3$；从最低到最高是半个周期，所以周期为 12 小时，$b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$。从最低点出发需要翻折的余弦：$d(t) = 5 - 3\\cos(\\frac{\\pi}{6}t)$。验证：$d(0) = 2$，$d(6) = 8$。第一个选项从最高点出发，会得到 $d(0) = 8$。"
              }
            }
          ]
        },
        {
          "id": "trig-identities-and-equations",
          "title": "Trigonometric Identities and Equations",
          "titleZh": "三角恒等式与三角方程",
          "content": [
            {
              "type": "h2",
              "en": "The Fundamental Identities",
              "zh": "基本恒等式"
            },
            {
              "type": "p",
              "en": "An identity is an equation that is true for EVERY value of the variable where both sides are defined — unlike an ordinary equation, which is only true for particular solutions. The fundamental trig identities all flow from the unit circle: since the point $(\\cos\\theta, \\sin\\theta)$ lies on the circle $x^2 + y^2 = 1$, we get the Pythagorean identity.",
              "zh": "恒等式是在变量的每一个使两边都有定义的取值处都成立的等式——不同于普通方程只对特定解成立。基本三角恒等式都源于单位圆：由于点 $(\\cos\\theta, \\sin\\theta)$ 在圆 $x^2 + y^2 = 1$ 上，就得到毕达哥拉斯（勾股）恒等式。"
            },
            {
              "type": "math",
              "tex": "\\sin^2\\theta + \\cos^2\\theta = 1"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Quotient identity: $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ (and $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$).",
                  "zh": "商数恒等式：$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$（以及 $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$）。"
                },
                {
                  "en": "Reciprocal identities: $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$.",
                  "zh": "倒数恒等式：$\\csc\\theta = \\frac{1}{\\sin\\theta}$，$\\sec\\theta = \\frac{1}{\\cos\\theta}$，$\\cot\\theta = \\frac{1}{\\tan\\theta}$。"
                },
                {
                  "en": "Negative-angle identities: $\\sin(-\\theta) = -\\sin\\theta$ and $\\cos(-\\theta) = \\cos\\theta$ — sine is odd, cosine is even.",
                  "zh": "负角恒等式：$\\sin(-\\theta) = -\\sin\\theta$，$\\cos(-\\theta) = \\cos\\theta$——正弦是奇函数，余弦是偶函数。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Dividing the Pythagorean identity by $\\cos^2\\theta$ or by $\\sin^2\\theta$ produces two more forms worth memorizing: $\\tan^2\\theta + 1 = \\sec^2\\theta$ and $1 + \\cot^2\\theta = \\csc^2\\theta$. Also keep the rearrangements $\\sin^2\\theta = 1 - \\cos^2\\theta$ and $\\cos^2\\theta = 1 - \\sin^2\\theta$ at your fingertips.",
              "zh": "把勾股恒等式两边除以 $\\cos^2\\theta$ 或 $\\sin^2\\theta$，可得另外两个值得熟记的形式：$\\tan^2\\theta + 1 = \\sec^2\\theta$ 和 $1 + \\cot^2\\theta = \\csc^2\\theta$。此外要随时会用变形 $\\sin^2\\theta = 1 - \\cos^2\\theta$ 与 $\\cos^2\\theta = 1 - \\sin^2\\theta$。"
            },
            {
              "type": "h3",
              "en": "Simplifying Trig Expressions",
              "zh": "三角式的化简"
            },
            {
              "type": "p",
              "en": "Standard strategies: rewrite everything in terms of sine and cosine, look for Pythagorean substitutions, factor (trig expressions factor just like polynomials — treat $\\sin\\theta$ as you would $x$), and combine fractions over a common denominator.",
              "zh": "常用策略：把一切改写为正弦和余弦，寻找勾股恒等式代换，因式分解（三角式的分解与多项式一样——把 $\\sin\\theta$ 当作 $x$ 处理），以及通分合并分式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Simplify $\\frac{1 - \\cos^2\\theta}{\\sin\\theta\\cos\\theta}$.",
                "zh": "化简 $\\frac{1 - \\cos^2\\theta}{\\sin\\theta\\cos\\theta}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Replace $1 - \\cos^2\\theta$ with $\\sin^2\\theta$ using the Pythagorean identity, then cancel:",
                  "zh": "用勾股恒等式把 $1 - \\cos^2\\theta$ 换成 $\\sin^2\\theta$，然后约分："
                },
                {
                  "type": "math",
                  "tex": "\\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Verifying Identities",
              "zh": "恒等式的证明"
            },
            {
              "type": "p",
              "en": "To verify an identity, transform ONE side (usually the more complicated one) step by step until it matches the other side. Each step must be a legal rewriting — substitution of a known identity, algebra, or combining fractions.",
              "zh": "证明恒等式时，只对一边（通常是较复杂的一边）逐步变形，直到与另一边相同。每一步都必须是合法的改写——代入已知恒等式、代数运算或通分。"
            },
            {
              "type": "note",
              "en": "Common mistake: an identity is NOT an equation to solve. Do not move terms across the equals sign, cross-multiply, or square both sides — those operations assume the statement is already true. Work down one side only, and never write \"=\" between the two sides until they actually match.",
              "zh": "常见错误：恒等式不是待解的方程。不要把项移到等号另一边、不要交叉相乘、不要两边平方——这些操作默认了结论成立。只在一边向下推演，在两边真正相同之前不要在它们之间写等号。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Verify the identity $\\sec\\theta - \\cos\\theta = \\sin\\theta\\tan\\theta$.",
                "zh": "证明恒等式 $\\sec\\theta - \\cos\\theta = \\sin\\theta\\tan\\theta$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Start from the left side, write $\\sec\\theta = \\frac{1}{\\cos\\theta}$, and combine over a common denominator:",
                  "zh": "从左边出发，写 $\\sec\\theta = \\frac{1}{\\cos\\theta}$，并通分："
                },
                {
                  "type": "math",
                  "tex": "\\sec\\theta - \\cos\\theta = \\frac{1}{\\cos\\theta} - \\frac{\\cos^2\\theta}{\\cos\\theta} = \\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}"
                },
                {
                  "type": "p",
                  "en": "Split the fraction: $\\frac{\\sin^2\\theta}{\\cos\\theta} = \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta\\tan\\theta$, which is the right side. ✓",
                  "zh": "拆开分式：$\\frac{\\sin^2\\theta}{\\cos\\theta} = \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta\\tan\\theta$，即右边。证毕。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Solving Trigonometric Equations",
              "zh": "解三角方程"
            },
            {
              "type": "p",
              "en": "A trig equation, unlike an identity, holds only for certain angles. On the interval $[0, 2\\pi)$ the basic plan is: isolate the trig function, then use the unit circle to list every angle in the interval with that value — there are usually two.",
              "zh": "与恒等式不同，三角方程只对某些角成立。在区间 $[0, 2\\pi)$ 上的基本步骤是：先分离出三角函数，再利用单位圆列出区间内所有取该值的角——通常有两个。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Linear form: isolate. $2\\cos x - 1 = 0 \\Rightarrow \\cos x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$.",
                  "zh": "一次型：分离函数。$2\\cos x - 1 = 0 \\Rightarrow \\cos x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$。"
                },
                {
                  "en": "Quadratic form: factor, treating $\\sin x$ like a variable, then solve each factor.",
                  "zh": "二次型：把 $\\sin x$ 当作变量因式分解，再分别解每个因式。"
                },
                {
                  "en": "Mixed functions: use an identity first so the equation contains only one trig function.",
                  "zh": "混合函数：先用恒等式代换，使方程只含一种三角函数。"
                },
                {
                  "en": "All solutions: add $+ 2\\pi k$ (for any integer $k$) to each solution in one period — or $+ \\pi k$ for tangent, whose period is $\\pi$.",
                  "zh": "全部解：给一个周期内的每个解加上 $+ 2\\pi k$（$k$ 为任意整数）——正切的周期是 $\\pi$，则加 $+ \\pi k$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: never divide both sides by a trig factor. In $\\sin x\\cos x = \\sin x$, dividing by $\\sin x$ throws away every solution of $\\sin x = 0$. Instead move everything to one side and factor: $\\sin x(\\cos x - 1) = 0$. Also check whether the problem wants solutions in $[0, 2\\pi)$ only or the general solution with $+2\\pi k$.",
              "zh": "考试提示：切勿把方程两边同除以三角因式。在 $\\sin x\\cos x = \\sin x$ 中除以 $\\sin x$ 会丢掉 $\\sin x = 0$ 的所有解。正确做法是移项后因式分解：$\\sin x(\\cos x - 1) = 0$。另外注意题目要求的是 $[0, 2\\pi)$ 内的解还是带 $+2\\pi k$ 的通解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "Solve $2\\sin^2 x - \\sin x - 1 = 0$ on $[0, 2\\pi)$.",
                "zh": "在 $[0, 2\\pi)$ 上解方程 $2\\sin^2 x - \\sin x - 1 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $u = \\sin x$; the equation $2u^2 - u - 1 = 0$ factors as $(2u + 1)(u - 1) = 0$, so $\\sin x = -\\frac{1}{2}$ or $\\sin x = 1$.",
                  "zh": "令 $u = \\sin x$；方程 $2u^2 - u - 1 = 0$ 可分解为 $(2u + 1)(u - 1) = 0$，所以 $\\sin x = -\\frac{1}{2}$ 或 $\\sin x = 1$。"
                },
                {
                  "type": "p",
                  "en": "$\\sin x = -\\frac{1}{2}$: sine is negative in Quadrants III and IV with reference angle $\\frac{\\pi}{6}$, giving $x = \\frac{7\\pi}{6}$ and $x = \\frac{11\\pi}{6}$. $\\sin x = 1$ occurs only at $x = \\frac{\\pi}{2}$.",
                  "zh": "$\\sin x = -\\frac{1}{2}$：正弦在第三、第四象限为负，参考角为 $\\frac{\\pi}{6}$，得 $x = \\frac{7\\pi}{6}$ 和 $x = \\frac{11\\pi}{6}$。$\\sin x = 1$ 只在 $x = \\frac{\\pi}{2}$ 处成立。"
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{\\pi}{2},\\ \\frac{7\\pi}{6},\\ \\frac{11\\pi}{6}"
                }
              ]
            },
            {
              "type": "p",
              "en": "To report ALL solutions rather than just one period, attach the period to each: for example, the general solution of $\\cos x = \\frac{1}{2}$ is $x = \\frac{\\pi}{3} + 2\\pi k$ or $x = \\frac{5\\pi}{3} + 2\\pi k$, where $k$ is any integer.",
              "zh": "若要给出全部解而不只是一个周期内的解，就在每个解后面加上周期：例如 $\\cos x = \\frac{1}{2}$ 的通解是 $x = \\frac{\\pi}{3} + 2\\pi k$ 或 $x = \\frac{5\\pi}{3} + 2\\pi k$，其中 $k$ 为任意整数。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which expression is equal to $1 - \\cos^2\\theta$ for all $\\theta$?",
                "zh": "下列哪个表达式对所有 $\\theta$ 都等于 $1 - \\cos^2\\theta$？"
              },
              "choices": [
                "$\\tan^2\\theta$",
                "$\\sec^2\\theta$",
                "$\\sin^2\\theta$",
                "$-\\sin^2\\theta$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Rearranging $\\sin^2\\theta + \\cos^2\\theta = 1$ gives $1 - \\cos^2\\theta = \\sin^2\\theta$. The distractor $\\tan^2\\theta$ confuses this with $\\sec^2\\theta - 1 = \\tan^2\\theta$, a different Pythagorean form.",
                "zh": "把 $\\sin^2\\theta + \\cos^2\\theta = 1$ 变形得 $1 - \\cos^2\\theta = \\sin^2\\theta$。干扰项 $\\tan^2\\theta$ 混淆了另一种勾股形式 $\\sec^2\\theta - 1 = \\tan^2\\theta$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\tan\\theta\\cos\\theta$.",
                "zh": "化简 $\\tan\\theta\\cos\\theta$。"
              },
              "choices": [
                "$\\sin\\theta$",
                "$\\cos^2\\theta$",
                "$\\sec\\theta$",
                "$1$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Write tangent as a quotient: $\\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta = \\sin\\theta$ after canceling. Choosing $1$ treats tangent and cosine as reciprocals, but the reciprocal of $\\tan\\theta$ is $\\cot\\theta$, not $\\cos\\theta$.",
                "zh": "把正切写成商：$\\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta$ 约分后得 $\\sin\\theta$。选 $1$ 是把正切和余弦当成了互为倒数，但 $\\tan\\theta$ 的倒数是 $\\cot\\theta$，不是 $\\cos\\theta$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\sec^2\\theta - \\tan^2\\theta$ (the value is the same for every valid $\\theta$). Give an integer.",
                "zh": "求 $\\sec^2\\theta - \\tan^2\\theta$ 的值（对每个有意义的 $\\theta$ 值都相同）。请填一个整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "From $\\tan^2\\theta + 1 = \\sec^2\\theta$, subtracting $\\tan^2\\theta$ from both sides gives $\\sec^2\\theta - \\tan^2\\theta = 1$.",
                "zh": "由 $\\tan^2\\theta + 1 = \\sec^2\\theta$，两边减去 $\\tan^2\\theta$ 得 $\\sec^2\\theta - \\tan^2\\theta = 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\cos x = -1$ on $[0, 2\\pi)$.",
                "zh": "在 $[0, 2\\pi)$ 上解方程 $\\cos x = -1$。"
              },
              "choices": [
                "$x = 0$",
                "$x = \\pi$",
                "$x = \\frac{\\pi}{2}$",
                "$x = \\frac{3\\pi}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Cosine is the $x$-coordinate on the unit circle, and it equals $-1$ only at the point $(-1, 0)$, i.e. $x = \\pi$. This is a quadrantal case with exactly ONE solution in the interval, unlike typical equations with two.",
                "zh": "余弦是单位圆上的 $x$ 坐标，只在点 $(-1, 0)$ 处等于 $-1$，即 $x = \\pi$。这是象限界角的情形，区间内恰有一个解，不像一般方程有两个。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many solutions does $\\sin x = \\frac{1}{2}$ have on $[0, 2\\pi)$? Give an integer.",
                "zh": "方程 $\\sin x = \\frac{1}{2}$ 在 $[0, 2\\pi)$ 上有几个解？请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Sine equals $\\frac{1}{2}$ at $x = \\frac{\\pi}{6}$ (Quadrant I) and $x = \\frac{5\\pi}{6}$ (Quadrant II) — two solutions. A horizontal line at height $\\frac{1}{2}$ crosses one arch of the sine wave twice.",
                "zh": "正弦在 $x = \\frac{\\pi}{6}$（第一象限）和 $x = \\frac{5\\pi}{6}$（第二象限）处等于 $\\frac{1}{2}$——共两个解。高度为 $\\frac{1}{2}$ 的水平线与正弦曲线的一个拱相交两次。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $2\\cos x - 1 = 0$ on $[0, 2\\pi)$.",
                "zh": "在 $[0, 2\\pi)$ 上解方程 $2\\cos x - 1 = 0$。"
              },
              "choices": [
                "$x = \\frac{\\pi}{6}, \\frac{11\\pi}{6}$",
                "$x = \\frac{\\pi}{3}$ only / 仅 $x = \\frac{\\pi}{3}$",
                "$x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$",
                "$x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Isolate: $\\cos x = \\frac{1}{2}$. Cosine is positive in Quadrants I and IV with reference angle $\\frac{\\pi}{3}$, giving $x = \\frac{\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$. Stopping at only $\\frac{\\pi}{3}$ misses the Quadrant IV solution; $\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$ solve $\\cos x = -\\frac{1}{2}$ instead.",
                "zh": "分离函数：$\\cos x = \\frac{1}{2}$。余弦在第一、第四象限为正，参考角为 $\\frac{\\pi}{3}$，得 $x = \\frac{\\pi}{3}$ 和 $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$。只答 $\\frac{\\pi}{3}$ 漏掉了第四象限的解；$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$ 是 $\\cos x = -\\frac{1}{2}$ 的解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many solutions does $\\sin^2 x = \\sin x$ have on $[0, 2\\pi)$? Give an integer.",
                "zh": "方程 $\\sin^2 x = \\sin x$ 在 $[0, 2\\pi)$ 上有几个解？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Do NOT divide by $\\sin x$. Factor: $\\sin x(\\sin x - 1) = 0$, so $\\sin x = 0$ gives $x = 0, \\pi$ and $\\sin x = 1$ gives $x = \\frac{\\pi}{2}$ — three solutions in total. Dividing by $\\sin x$ would lose $x = 0$ and $x = \\pi$.",
                "zh": "不要除以 $\\sin x$。因式分解：$\\sin x(\\sin x - 1) = 0$，$\\sin x = 0$ 给出 $x = 0, \\pi$，$\\sin x = 1$ 给出 $x = \\frac{\\pi}{2}$——共三个解。若除以 $\\sin x$ 会丢掉 $x = 0$ 和 $x = \\pi$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Challenge: the temperature in a greenhouse is modeled by $T(t) = 10\\sin\\left(\\frac{\\pi}{12}(t - 8)\\right) + 20$ degrees Celsius, where $t$ is the hour of the day. What is the FIRST time after $t = 8$ at which $T(t) = 25$?",
                "zh": "挑战题：温室温度的模型为 $T(t) = 10\\sin\\left(\\frac{\\pi}{12}(t - 8)\\right) + 20$（摄氏度），其中 $t$ 为一天中的小时数。$t = 8$ 之后温度首次达到 $T(t) = 25$ 是什么时刻？"
              },
              "choices": [
                "$t = 9$",
                "$t = 12$",
                "$t = 10$",
                "$t = 14$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Set $10\\sin\\left(\\frac{\\pi}{12}(t-8)\\right) + 20 = 25$, so $\\sin\\left(\\frac{\\pi}{12}(t-8)\\right) = \\frac{1}{2}$. The first positive solution of $\\sin u = \\frac{1}{2}$ is $u = \\frac{\\pi}{6}$, so $\\frac{\\pi}{12}(t-8) = \\frac{\\pi}{6}$, giving $t - 8 = 2$ and $t = 10$. The distractor $t = 14$ comes from the second solution $u = \\frac{5\\pi}{6}$ — a valid time, but not the first.",
                "zh": "令 $10\\sin\\left(\\frac{\\pi}{12}(t-8)\\right) + 20 = 25$，得 $\\sin\\left(\\frac{\\pi}{12}(t-8)\\right) = \\frac{1}{2}$。$\\sin u = \\frac{1}{2}$ 的第一个正解是 $u = \\frac{\\pi}{6}$，所以 $\\frac{\\pi}{12}(t-8) = \\frac{\\pi}{6}$，即 $t - 8 = 2$，$t = 10$。干扰项 $t = 14$ 来自第二个解 $u = \\frac{5\\pi}{6}$——也是一个有效时刻，但不是首次。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "probability",
      "title": "Unit 9: Probability",
      "titleZh": "第九单元：概率",
      "lessons": [
        {
          "id": "probability-fundamentals",
          "title": "Probability, Independence, and Conditional Probability",
          "titleZh": "概率、独立事件与条件概率",
          "content": [
            {
              "type": "h2",
              "en": "Sample Spaces and Events",
              "zh": "样本空间与事件"
            },
            {
              "type": "p",
              "en": "A sample space $S$ is the set of all possible outcomes of an experiment, and an event $A$ is any subset of those outcomes. When every outcome in $S$ is equally likely, the theoretical probability of $A$ is the ratio of favorable outcomes to total outcomes.",
              "zh": "样本空间 $S$ 是一次试验所有可能结果的集合，事件 $A$ 是这些结果的任意子集。当 $S$ 中每个结果等可能时，事件 $A$ 的理论概率就是有利结果数与总结果数之比。"
            },
            {
              "type": "math",
              "tex": "P(A) = \\frac{\\text{number of outcomes in } A}{\\text{number of outcomes in } S}"
            },
            {
              "type": "p",
              "en": "Every probability satisfies $0 \\le P(A) \\le 1$, and the complement rule says $P(\\text{not } A) = 1 - P(A)$. Experimental (empirical) probability is different: it is the fraction of trials in which the event actually occurred. As the number of trials grows, experimental probability tends to approach the theoretical value — this is the Law of Large Numbers.",
              "zh": "任何概率都满足 $0 \\le P(A) \\le 1$，且补事件法则给出 $P(\\text{非 } A) = 1 - P(A)$。实验（经验）概率则不同：它是事件在实际试验中发生的次数占总试验次数的比例。随着试验次数增多，实验概率趋近于理论概率——这就是大数定律。"
            },
            {
              "type": "h3",
              "en": "Listing outcomes systematically",
              "zh": "系统地列出结果"
            },
            {
              "type": "p",
              "en": "For small experiments, list outcomes with a table or tree diagram. Rolling two dice gives $6 \\times 6 = 36$ equally likely ordered pairs, so, for instance, $P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$ because six of the pairs sum to 7.",
              "zh": "对于小型试验，可用表格或树状图列出所有结果。掷两枚骰子共有 $6 \\times 6 = 36$ 个等可能的有序对，例如 $P(\\text{点数和} = 7) = \\frac{6}{36} = \\frac{1}{6}$，因为恰有 6 个有序对的和为 7。"
            },
            {
              "type": "h2",
              "en": "Compound Events and the Addition Rule",
              "zh": "复合事件与加法法则"
            },
            {
              "type": "p",
              "en": "The union $A \\cup B$ (\"$A$ or $B$\") happens when at least one of the events occurs. If we simply add $P(A)$ and $P(B)$, any outcome in both events gets counted twice, so we subtract the overlap once.",
              "zh": "并事件 $A \\cup B$（\"$A$ 或 $B$\"）指至少有一个事件发生。若直接把 $P(A)$ 与 $P(B)$ 相加，同时属于两个事件的结果会被算两次，因此要减去一次重叠部分。"
            },
            {
              "type": "math",
              "tex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
            },
            {
              "type": "p",
              "en": "Two events are mutually exclusive (disjoint) when they cannot happen together, so $P(A \\cap B) = 0$ and the rule simplifies to $P(A \\cup B) = P(A) + P(B)$. Drawing a king and drawing a queen on a single card draw are disjoint; drawing a king and drawing a heart are not, because the king of hearts belongs to both.",
              "zh": "当两个事件不可能同时发生时称为互斥事件，此时 $P(A \\cap B) = 0$，法则简化为 $P(A \\cup B) = P(A) + P(B)$。抽一张牌\"抽到国王\"与\"抽到皇后\"互斥；\"抽到国王\"与\"抽到红心\"则不互斥，因为红心国王同时属于两者。"
            },
            {
              "type": "note",
              "en": "Common mistake: adding probabilities without subtracting the overlap. Before you use $P(A)+P(B)$, always ask \"can both events happen at once?\" If yes, you must subtract $P(A \\cap B)$ — forgetting this is the single most frequent error on probability test questions.",
              "zh": "常见错误：相加概率时忘记减去重叠部分。使用 $P(A)+P(B)$ 之前，一定先问\"两个事件能否同时发生？\"如果能，就必须减去 $P(A \\cap B)$——忘记这一步是概率考题中最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "One card is drawn from a standard 52-card deck. Find the probability that it is a king or a heart.",
                "zh": "从一副标准 52 张扑克牌中抽一张，求抽到国王或红心的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "There are 4 kings and 13 hearts, but the king of hearts is counted in both groups, so $P(K \\cap H) = \\frac{1}{52}$.",
                  "zh": "国王有 4 张，红心有 13 张，但红心国王在两组中都被计入，所以 $P(K \\cap H) = \\frac{1}{52}$。"
                },
                {
                  "type": "math",
                  "tex": "P(K \\cup H) = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}"
                },
                {
                  "type": "p",
                  "en": "Check: the 16 favorable cards are the 13 hearts plus the kings of spades, clubs, and diamonds.",
                  "zh": "验证：16 张有利的牌是 13 张红心加上黑桃、梅花、方块的三张国王。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Independent and Dependent Events",
              "zh": "独立事件与非独立事件"
            },
            {
              "type": "p",
              "en": "Events $A$ and $B$ are independent when the occurrence of one does not change the probability of the other. For independent events, the multiplication rule gives $P(A \\cap B) = P(A) \\cdot P(B)$. Coin flips and dice rolls are classic independent events. Drawing cards without replacement creates dependent events: the second probability must be updated to reflect what was removed.",
              "zh": "若事件 $A$ 发生与否不改变事件 $B$ 的概率，则称 $A$ 与 $B$ 独立。对独立事件，乘法法则给出 $P(A \\cap B) = P(A) \\cdot P(B)$。抛硬币和掷骰子是典型的独立事件。不放回地抽牌则产生非独立事件：第二次的概率必须根据已抽走的牌进行调整。"
            },
            {
              "type": "math",
              "tex": "P(A \\cap B) = P(A) \\cdot P(B \\mid A)"
            },
            {
              "type": "p",
              "en": "The general multiplication rule above works for all events, dependent or not: multiply the probability of the first event by the conditional probability of the second event given that the first occurred.",
              "zh": "上面的一般乘法法则对一切事件都成立（无论是否独立）：把第一个事件的概率乘以在第一个事件已发生的条件下第二个事件的条件概率。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "A bag holds 5 red and 3 blue marbles. Two marbles are drawn without replacement. Find the probability that both are red.",
                "zh": "一个袋子里有 5 个红球和 3 个蓝球，不放回地取出两个球，求两个都是红球的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first draw is red with probability $\\frac{5}{8}$. After removing one red marble, 4 red remain among 7 total, so the second draw is red with probability $\\frac{4}{7}$.",
                  "zh": "第一次取到红球的概率是 $\\frac{5}{8}$。取走一个红球后，剩下 7 个球中有 4 个红球，所以第二次取到红球的概率是 $\\frac{4}{7}$。"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{both red}) = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}"
                },
                {
                  "type": "p",
                  "en": "If the first marble had been replaced, the events would be independent and the answer would instead be $\\frac{5}{8} \\cdot \\frac{5}{8} = \\frac{25}{64}$.",
                  "zh": "如果第一个球被放回，两次抽取就相互独立，答案将变为 $\\frac{5}{8} \\cdot \\frac{5}{8} = \\frac{25}{64}$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Conditional Probability and Two-Way Tables",
              "zh": "条件概率与双向表"
            },
            {
              "type": "p",
              "en": "The conditional probability $P(A \\mid B)$, read \"the probability of $A$ given $B$,\" restricts attention to only the outcomes where $B$ occurred and asks what fraction of them also satisfy $A$.",
              "zh": "条件概率 $P(A \\mid B)$ 读作\"在 $B$ 发生的条件下 $A$ 的概率\"，它把注意力限制在 $B$ 已发生的结果上，并考察其中又满足 $A$ 的比例。"
            },
            {
              "type": "math",
              "tex": "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}"
            },
            {
              "type": "p",
              "en": "Two-way (frequency) tables make conditional probability concrete. The condition tells you which row or column to stay inside: the denominator is that row or column total, not the grand total.",
              "zh": "双向（频数）表使条件概率变得直观。条件告诉你应停留在哪一行或哪一列：分母是该行或该列的合计，而不是总合计。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A survey of 200 students records grade level and whether they play a sport: 60 juniors play a sport, 40 juniors do not; 45 seniors play a sport, 55 seniors do not. A surveyed student is chosen at random. Find $P(\\text{plays a sport} \\mid \\text{junior})$, and determine whether \"plays a sport\" and \"junior\" are independent.",
                "zh": "对 200 名学生的调查记录了年级和是否参加体育运动：60 名十一年级学生参加运动，40 名不参加；45 名十二年级学生参加运动，55 名不参加。随机抽取一名受访学生，求 $P(\\text{参加运动} \\mid \\text{十一年级})$，并判断\"参加运动\"与\"十一年级\"是否独立。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Condition on juniors: there are $60 + 40 = 100$ juniors, of whom 60 play a sport.",
                  "zh": "以十一年级为条件：共有 $60 + 40 = 100$ 名十一年级学生，其中 60 人参加运动。"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{sport} \\mid \\text{junior}) = \\frac{60}{100} = 0.60"
                },
                {
                  "type": "p",
                  "en": "Overall, $P(\\text{sport}) = \\frac{60+45}{200} = \\frac{105}{200} = 0.525$. Since $P(\\text{sport} \\mid \\text{junior}) = 0.60 \\ne 0.525 = P(\\text{sport})$, knowing a student is a junior changes the probability, so the events are NOT independent.",
                  "zh": "总体上 $P(\\text{运动}) = \\frac{60+45}{200} = \\frac{105}{200} = 0.525$。由于 $P(\\text{运动} \\mid \\text{十一年级}) = 0.60 \\ne 0.525 = P(\\text{运动})$，知道学生是十一年级会改变概率，因此两个事件不独立。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Testing for independence",
              "zh": "独立性的检验"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Events $A$ and $B$ are independent exactly when $P(A \\mid B) = P(A)$ — the condition gives no new information.",
                  "zh": "当且仅当 $P(A \\mid B) = P(A)$ 时，事件 $A$ 与 $B$ 独立——条件不提供任何新信息。"
                },
                {
                  "en": "Equivalently, check whether $P(A \\cap B) = P(A) \\cdot P(B)$. If the products do not match, the events are dependent.",
                  "zh": "等价地，可以检验是否有 $P(A \\cap B) = P(A) \\cdot P(B)$。若乘积不相等，则事件不独立。"
                },
                {
                  "en": "Do not confuse \"mutually exclusive\" with \"independent\": disjoint events with nonzero probabilities are always dependent, because one occurring forces the other not to.",
                  "zh": "不要把\"互斥\"与\"独立\"混为一谈：概率非零的互斥事件必定不独立，因为一个发生就迫使另一个不发生。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: on multiple-choice questions about a two-way table, the most tempting wrong answer divides by the grand total instead of the conditioned row or column total. Underline the words after \"given\" and circle the matching row or column total before computing anything.",
              "zh": "考试提示：在关于双向表的选择题中，最具诱惑性的错误答案是用总合计而非条件所在行或列的合计作分母。计算之前，先在\"已知/在……条件下\"之后的词下画线，并圈出对应的行或列合计。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A fair six-sided die is rolled once. What is the probability of rolling a number greater than 4?",
                "zh": "掷一枚均匀的六面骰子一次，掷出大于 4 的点数的概率是多少？"
              },
              "choices": [
                "$\\frac{1}{2}$",
                "$\\frac{1}{6}$",
                "$\\frac{1}{3}$",
                "$\\frac{2}{3}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The favorable outcomes are 5 and 6, so $P = \\frac{2}{6} = \\frac{1}{3}$. The distractor $\\frac{1}{2}$ comes from misreading \"greater than 4\" as \"4 or greater,\" which would include the outcome 4.",
                "zh": "有利结果是 5 和 6，所以 $P = \\frac{2}{6} = \\frac{1}{3}$。干扰项 $\\frac{1}{2}$ 来自把\"大于 4\"误读为\"大于或等于 4\"，那样会把 4 也算进去。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Two fair dice are rolled. Find the probability that the sum is 7. Give a simplified fraction like 1/6.",
                "zh": "掷两枚均匀骰子，求点数和为 7 的概率。请填最简分数，如 1/6。"
              },
              "answer": "1/6",
              "accept": [
                "6/36"
              ],
              "explanation": {
                "en": "Of the 36 equally likely ordered pairs, six sum to 7: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$. So $P = \\frac{6}{36} = \\frac{1}{6}$.",
                "zh": "在 36 个等可能的有序对中，有 6 个的和为 7：$(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$。所以 $P = \\frac{6}{36} = \\frac{1}{6}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For events $A$ and $B$, $P(A) = 0.5$, $P(B) = 0.3$, and $P(A \\cap B) = 0.2$. Find $P(A \\cup B)$.",
                "zh": "已知事件 $A$、$B$ 满足 $P(A) = 0.5$，$P(B) = 0.3$，$P(A \\cap B) = 0.2$。求 $P(A \\cup B)$。"
              },
              "choices": [
                "$0.8$",
                "$0.6$",
                "$0.15$",
                "$1.0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "By the addition rule, $P(A \\cup B) = 0.5 + 0.3 - 0.2 = 0.6$. The distractor $0.8$ is what you get if you forget to subtract the overlap $P(A \\cap B)$.",
                "zh": "由加法法则，$P(A \\cup B) = 0.5 + 0.3 - 0.2 = 0.6$。干扰项 $0.8$ 是忘记减去重叠部分 $P(A \\cap B)$ 的结果。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of events is mutually exclusive when one card is drawn from a standard deck?",
                "zh": "从一副标准扑克牌中抽一张牌，下列哪一对事件是互斥的？"
              },
              "choices": [
                "Drawing a heart; drawing a king / 抽到红心；抽到国王",
                "Drawing a red card; drawing a diamond / 抽到红色牌；抽到方块",
                "Drawing an ace; drawing a spade / 抽到 A；抽到黑桃",
                "Drawing a queen; drawing a jack / 抽到皇后；抽到杰克"
              ],
              "answer": 3,
              "explanation": {
                "en": "A single card cannot be both a queen and a jack, so those events cannot occur together. Each other pair overlaps: the king of hearts, every diamond (which is red), and the ace of spades are shared outcomes.",
                "zh": "一张牌不可能既是皇后又是杰克，所以这两个事件不能同时发生。其他各对都有重叠：红心国王、每张方块（都是红色）、黑桃 A 都是共同结果。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A bag contains 5 red and 3 blue marbles. Two marbles are drawn without replacement. Find the probability that both are blue. Give a simplified fraction like 3/28.",
                "zh": "袋中有 5 个红球和 3 个蓝球，不放回地取出两个球，求两个都是蓝球的概率。请填最简分数，如 3/28。"
              },
              "answer": "3/28",
              "accept": [
                "6/56"
              ],
              "explanation": {
                "en": "The first draw is blue with probability $\\frac{3}{8}$; then 2 blue remain among 7 marbles, so the second is $\\frac{2}{7}$. Multiply: $\\frac{3}{8} \\cdot \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$.",
                "zh": "第一次取到蓝球的概率为 $\\frac{3}{8}$；之后 7 个球中剩 2 个蓝球，第二次为 $\\frac{2}{7}$。相乘得 $\\frac{3}{8} \\cdot \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A class survey shows 12 students take French, 20 take Spanish, and among the Spanish students 8 are seniors. If a student is chosen from those who take Spanish, what is $P(\\text{senior} \\mid \\text{Spanish})$?",
                "zh": "班级调查显示 12 名学生学法语，20 名学西班牙语，其中学西班牙语的学生里有 8 名是十二年级学生。从学西班牙语的学生中随机抽取一人，求 $P(\\text{十二年级} \\mid \\text{学西班牙语})$。"
              },
              "choices": [
                "$\\frac{8}{32}$",
                "$\\frac{8}{12}$",
                "$\\frac{2}{5}$",
                "$\\frac{8}{40}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The condition \"Spanish\" restricts us to the 20 Spanish students, of whom 8 are seniors: $\\frac{8}{20} = \\frac{2}{5}$. The distractor $\\frac{8}{32}$ wrongly divides by the combined total of both language groups instead of the conditioned group.",
                "zh": "条件\"学西班牙语\"把范围限制在 20 名西班牙语学生中，其中 8 名是十二年级：$\\frac{8}{20} = \\frac{2}{5}$。干扰项 $\\frac{8}{32}$ 错误地用两个语言组的总人数而不是条件组的人数作分母。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For events $A$ and $B$, $P(A \\cap B) = 0.12$ and $P(B) = 0.4$. Find $P(A \\mid B)$. Give a decimal.",
                "zh": "已知 $P(A \\cap B) = 0.12$，$P(B) = 0.4$。求 $P(A \\mid B)$。请填一个小数。"
              },
              "answer": "0.3",
              "accept": [
                "0.30",
                ".3",
                "3/10"
              ],
              "explanation": {
                "en": "By the definition of conditional probability, $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.12}{0.4} = 0.3$.",
                "zh": "由条件概率的定义，$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.12}{0.4} = 0.3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A streaming service surveys 400 users: 240 are teens, of whom 180 use the mobile app; 160 are adults, of whom 120 use the mobile app. Are the events \"teen\" and \"uses the mobile app\" independent?",
                "zh": "某流媒体平台调查了 400 名用户：240 名是青少年，其中 180 人使用手机应用；160 名是成年人，其中 120 人使用手机应用。事件\"青少年\"与\"使用手机应用\"是否独立？"
              },
              "choices": [
                "Yes, because $P(\\text{app} \\mid \\text{teen}) = P(\\text{app}) = 0.75$ / 独立，因为 $P(\\text{应用} \\mid \\text{青少年}) = P(\\text{应用}) = 0.75$",
                "No, because more teens than adults use the app / 不独立，因为用应用的青少年多于成年人",
                "Yes, because the events are mutually exclusive / 独立，因为两事件互斥",
                "No, because $P(\\text{app} \\mid \\text{teen}) \\ne P(\\text{teen})$ / 不独立，因为 $P(\\text{应用} \\mid \\text{青少年}) \\ne P(\\text{青少年})$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$P(\\text{app} \\mid \\text{teen}) = \\frac{180}{240} = 0.75$ and overall $P(\\text{app}) = \\frac{180+120}{400} = \\frac{300}{400} = 0.75$. The conditional probability equals the unconditional one, so the events are independent. The last distractor compares the wrong pair of probabilities — independence compares $P(A \\mid B)$ with $P(A)$, not with $P(B)$.",
                "zh": "$P(\\text{应用} \\mid \\text{青少年}) = \\frac{180}{240} = 0.75$，而总体 $P(\\text{应用}) = \\frac{180+120}{400} = \\frac{300}{400} = 0.75$。条件概率等于无条件概率，所以两事件独立。最后一个干扰项比较了错误的一对概率——独立性应比较 $P(A \\mid B)$ 与 $P(A)$，而不是与 $P(B)$。"
              }
            }
          ]
        },
        {
          "id": "counting-and-binomial-distributions",
          "title": "Counting, Permutations, Combinations, and Binomial Distributions",
          "titleZh": "计数原理、排列组合与二项分布",
          "content": [
            {
              "type": "h2",
              "en": "The Fundamental Counting Principle",
              "zh": "基本计数原理"
            },
            {
              "type": "p",
              "en": "If a task consists of successive choices, and the first choice can be made in $m$ ways and the second in $n$ ways regardless of the first, then the task can be completed in $m \\cdot n$ ways. The principle extends to any number of stages: multiply the number of options at each stage.",
              "zh": "如果一项任务由连续的几步选择组成，第一步有 $m$ 种选法，且无论第一步选什么第二步都有 $n$ 种选法，那么完成任务共有 $m \\cdot n$ 种方式。该原理可推广到任意多步：把每一步的选项数相乘。"
            },
            {
              "type": "p",
              "en": "For example, a password consisting of a letter followed by two different digits can be formed in $26 \\cdot 10 \\cdot 9 = 2340$ ways — note the 9, because the second digit must differ from the first.",
              "zh": "例如，一个由一个字母加两个不同数字组成的密码共有 $26 \\cdot 10 \\cdot 9 = 2340$ 种——注意这里是 9，因为第二个数字必须与第一个不同。"
            },
            {
              "type": "h2",
              "en": "Permutations vs. Combinations",
              "zh": "排列与组合"
            },
            {
              "type": "p",
              "en": "A permutation is an ordered arrangement of objects; a combination is an unordered selection. Both count ways of choosing $r$ objects from $n$ distinct objects, but permutations treat different orders as different outcomes.",
              "zh": "排列是对象的有序排布；组合是无序的选取。两者都计算从 $n$ 个不同对象中选出 $r$ 个的方式数，但排列把不同顺序视为不同结果。"
            },
            {
              "type": "math",
              "tex": "{}_n P_r = \\frac{n!}{(n-r)!} \\qquad {}_n C_r = \\binom{n}{r} = \\frac{n!}{r!\\,(n-r)!}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Order matters (use $_nP_r$): race finishes, officer positions like president/secretary, arranging books on a shelf, passwords.",
                  "zh": "顺序重要（用 $_nP_r$）：比赛名次、主席/秘书等职务分配、把书排上书架、密码。"
                },
                {
                  "en": "Order does not matter (use $_nC_r$): committees, choosing toppings, dealing a hand of cards, picking a study group.",
                  "zh": "顺序不重要（用 $_nC_r$）：委员会、选配料、发一手牌、挑选学习小组。"
                },
                {
                  "en": "Quick test: swap two chosen items. If the result counts as a different outcome, it is a permutation; if it is the same outcome, it is a combination.",
                  "zh": "快速判断：交换所选的两个对象。若结果算作不同的情形，就是排列；若结果相同，则是组合。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: using $_nP_r$ for committee problems. Choosing Alice then Ben for a committee is the same committee as Ben then Alice, so divide out the orderings — that is exactly what the extra $r!$ in the denominator of $_nC_r$ does. Note that $_nC_r$ is always smaller than $_nP_r$ (for $r \\ge 2$).",
              "zh": "常见错误：对委员会问题误用 $_nP_r$。先选 Alice 再选 Ben 与先选 Ben 再选 Alice 是同一个委员会，因此要除掉排序数——这正是 $_nC_r$ 分母中多出的 $r!$ 的作用。注意当 $r \\ge 2$ 时 $_nC_r$ 总小于 $_nP_r$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "A club has 12 members. (a) In how many ways can it elect a president, vice president, and treasurer? (b) In how many ways can it choose a 3-person committee?",
                "zh": "一个社团有 12 名成员。(a) 选出主席、副主席、财务各一人共有多少种方式？(b) 选出一个 3 人委员会共有多少种方式？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) The three positions are distinct, so order matters:",
                  "zh": "(a) 三个职务各不相同，顺序重要："
                },
                {
                  "type": "math",
                  "tex": "{}_{12}P_3 = 12 \\cdot 11 \\cdot 10 = 1320"
                },
                {
                  "type": "p",
                  "en": "(b) A committee has no positions, so order does not matter — divide by $3! = 6$:",
                  "zh": "(b) 委员会没有职务之分，顺序不重要——除以 $3! = 6$："
                },
                {
                  "type": "math",
                  "tex": "{}_{12}C_3 = \\frac{12 \\cdot 11 \\cdot 10}{3!} = \\frac{1320}{6} = 220"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Binomial Theorem and Pascal's Triangle",
              "zh": "二项式定理与杨辉三角"
            },
            {
              "type": "p",
              "en": "The combinations $\\binom{n}{k}$ are exactly the numbers in row $n$ of Pascal's triangle (starting the row count at 0), where each entry is the sum of the two entries above it. Row 4 reads $1, 4, 6, 4, 1$. These numbers are the coefficients in the expansion of a binomial power.",
              "zh": "组合数 $\\binom{n}{k}$ 恰好是杨辉三角第 $n$ 行的数（行号从 0 开始），其中每个数是它上方两数之和。第 4 行为 $1, 4, 6, 4, 1$。这些数正是二项式幂展开式中的系数。"
            },
            {
              "type": "math",
              "tex": "(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{\\,n-k} b^{\\,k}"
            },
            {
              "type": "p",
              "en": "Each term of $(a+b)^n$ has total degree $n$: the exponents of $a$ and $b$ always add to $n$. The term containing $b^k$ has coefficient $\\binom{n}{k}$ — remember to raise any numbers inside $a$ or $b$ to the appropriate powers as well.",
              "zh": "$(a+b)^n$ 的每一项总次数都是 $n$：$a$ 与 $b$ 的指数之和恒为 $n$。含 $b^k$ 的项的系数是 $\\binom{n}{k}$——别忘了把 $a$、$b$ 中的数字也乘上相应的幂。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Find the coefficient of $x^3$ in the expansion of $(x+2)^5$.",
                "zh": "求 $(x+2)^5$ 展开式中 $x^3$ 项的系数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The general term is $\\binom{5}{k} x^{5-k} \\cdot 2^k$. For $x^3$ we need $5-k=3$, so $k=2$.",
                  "zh": "通项为 $\\binom{5}{k} x^{5-k} \\cdot 2^k$。要得到 $x^3$ 需 $5-k=3$，即 $k=2$。"
                },
                {
                  "type": "math",
                  "tex": "\\binom{5}{2} x^{3} \\cdot 2^2 = 10 \\cdot 4 \\cdot x^3 = 40x^3"
                },
                {
                  "type": "p",
                  "en": "The coefficient is $40$. A common error is to answer $10$, forgetting to include the factor $2^2$.",
                  "zh": "系数为 $40$。常见错误是回答 $10$，忘记乘上因子 $2^2$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Binomial Probability",
              "zh": "二项概率"
            },
            {
              "type": "p",
              "en": "A binomial setting has a fixed number of trials $n$, each trial independent, each with only two outcomes (\"success\" or \"failure\"), and the same success probability $p$ on every trial. The probability of exactly $k$ successes is:",
              "zh": "二项情形满足：试验次数 $n$ 固定，各次试验相互独立，每次只有两种结果（\"成功\"或\"失败\"），且每次成功的概率都是同一个 $p$。恰好 $k$ 次成功的概率为："
            },
            {
              "type": "math",
              "tex": "P(X = k) = \\binom{n}{k} p^{k} (1-p)^{\\,n-k}"
            },
            {
              "type": "p",
              "en": "The factor $p^k(1-p)^{n-k}$ is the probability of one particular sequence with $k$ successes; the factor $\\binom{n}{k}$ counts how many such sequences exist. Phrases like \"at least\" or \"at most\" require adding several of these terms (or using the complement).",
              "zh": "因子 $p^k(1-p)^{n-k}$ 是某一个含 $k$ 次成功的特定序列的概率；因子 $\\binom{n}{k}$ 数出这样的序列共有多少个。\"至少\"\"至多\"之类的说法需要把若干项相加（或用补事件）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A basketball player makes 70% of her free throws. She shoots 5 free throws. Find the probability she makes exactly 3 of them. Round to four decimal places.",
                "zh": "一名篮球运动员罚球命中率为 70%。她罚球 5 次，求恰好命中 3 次的概率。结果保留四位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $n=5$, $k=3$, $p=0.7$:",
                  "zh": "这里 $n=5$，$k=3$，$p=0.7$："
                },
                {
                  "type": "math",
                  "tex": "P(X=3) = \\binom{5}{3}(0.7)^3(0.3)^2 = 10 \\cdot 0.343 \\cdot 0.09 = 0.3087"
                },
                {
                  "type": "p",
                  "en": "So there is about a 30.9% chance of exactly 3 makes. Note that \"exactly 3\" is not the same as \"at least 3,\" which would also include $k=4$ and $k=5$.",
                  "zh": "所以恰好命中 3 次的概率约为 30.9%。注意\"恰好 3 次\"不同于\"至少 3 次\"，后者还要加上 $k=4$ 和 $k=5$ 的情形。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The shape of a binomial distribution",
              "zh": "二项分布的形状"
            },
            {
              "type": "p",
              "en": "Plotting $P(X=k)$ for $k = 0, 1, \\dots, n$ gives the binomial distribution. When $p = 0.5$ it is perfectly symmetric around $\\frac{n}{2}$; when $p > 0.5$ the peak shifts right (skewed left), and when $p < 0.5$ the peak shifts left (skewed right). The most likely value is near the mean $np$, and as $n$ grows the histogram looks increasingly bell-shaped.",
              "zh": "把 $P(X=k)$ 对 $k = 0, 1, \\dots, n$ 作图就得到二项分布。当 $p = 0.5$ 时它关于 $\\frac{n}{2}$ 完全对称；当 $p > 0.5$ 时峰向右移（左偏），当 $p < 0.5$ 时峰向左移（右偏）。最可能的取值在均值 $np$ 附近，且随着 $n$ 增大，直方图越来越接近钟形。"
            },
            {
              "type": "note",
              "en": "Test tip: before using the binomial formula, verify the setting — fixed $n$, independence, two outcomes, constant $p$. Drawing without replacement from a small group is NOT binomial because $p$ changes between trials. Also, for \"at least one success,\" the fastest route is the complement: $P(X \\ge 1) = 1 - (1-p)^n$.",
              "zh": "考试提示：使用二项公式前先核对条件——$n$ 固定、相互独立、只有两种结果、$p$ 不变。从小群体中不放回地抽取不是二项情形，因为 $p$ 在各次试验间会变化。另外，求\"至少一次成功\"最快的方法是用补事件：$P(X \\ge 1) = 1 - (1-p)^n$。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A deli offers 4 breads, 5 fillings, and 3 sauces. How many different sandwiches (one of each) are possible?",
                "zh": "一家熟食店提供 4 种面包、5 种馅料和 3 种酱汁。各选一种，可以做出多少种不同的三明治？"
              },
              "choices": [
                "$12$",
                "$60$",
                "$20$",
                "$120$"
              ],
              "answer": 1,
              "explanation": {
                "en": "By the fundamental counting principle, multiply the options at each stage: $4 \\cdot 5 \\cdot 3 = 60$. The distractor $12$ adds the numbers instead of multiplying.",
                "zh": "由基本计数原理，把每一步的选项数相乘：$4 \\cdot 5 \\cdot 3 = 60$。干扰项 $12$ 是把这些数相加而不是相乘。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Compute $_7P_2$, the number of ways to award a gold and a silver medal among 7 runners. Give an integer.",
                "zh": "计算 $_7P_2$，即在 7 名选手中颁发一枚金牌和一枚银牌的方式数。请填一个整数。"
              },
              "answer": "42",
              "explanation": {
                "en": "Order matters because the medals are different: $_7P_2 = 7 \\cdot 6 = 42$.",
                "zh": "因为两枚奖牌不同，顺序重要：$_7P_2 = 7 \\cdot 6 = 42$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many 4-person committees can be formed from 9 students?",
                "zh": "从 9 名学生中选出一个 4 人委员会，共有多少种选法？"
              },
              "choices": [
                "$3024$",
                "$36$",
                "$126$",
                "$252$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A committee is unordered, so use $\\binom{9}{4} = \\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{4!} = \\frac{3024}{24} = 126$. The distractor $3024$ is $_9P_4$, which wrongly counts each committee $24$ times, once per ordering.",
                "zh": "委员会不计顺序，用 $\\binom{9}{4} = \\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{4!} = \\frac{3024}{24} = 126$。干扰项 $3024$ 是 $_9P_4$，它把每个委员会按不同排序重复计了 $24$ 次。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which situation should be counted with combinations rather than permutations?",
                "zh": "下列哪种情形应该用组合而不是排列来计数？"
              },
              "choices": [
                "Assigning 1st, 2nd, and 3rd prizes / 颁发一、二、三等奖",
                "Creating a 4-digit PIN code / 设置一个 4 位密码",
                "Choosing 2 pizza toppings from 8 / 从 8 种配料中选 2 种",
                "Arranging 5 trophies on a shelf / 把 5 座奖杯排上架子"
              ],
              "answer": 2,
              "explanation": {
                "en": "A set of toppings is the same no matter which was chosen first, so order does not matter — a combination. Prizes, PIN codes, and shelf arrangements all change when the order changes, so they are permutations.",
                "zh": "配料的组合与先选哪种无关，顺序不重要——是组合。奖项、密码和排列奖杯在顺序改变时结果都会不同，属于排列。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the coefficient of $x^2$ in the expansion of $(x+3)^4$. Give an integer.",
                "zh": "求 $(x+3)^4$ 展开式中 $x^2$ 项的系数。请填一个整数。"
              },
              "answer": "54",
              "explanation": {
                "en": "The term with $x^2$ has $k=2$: $\\binom{4}{2} x^2 \\cdot 3^2 = 6 \\cdot 9 \\cdot x^2 = 54x^2$. Forgetting the factor $3^2$ gives the wrong answer 6.",
                "zh": "含 $x^2$ 的项对应 $k=2$：$\\binom{4}{2} x^2 \\cdot 3^2 = 6 \\cdot 9 \\cdot x^2 = 54x^2$。忘记乘 $3^2$ 会得到错误答案 6。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A spinner lands on red with probability $0.2$. It is spun 6 times. Which expression gives the probability of exactly 2 reds?",
                "zh": "一个转盘指向红色的概率为 $0.2$。转动 6 次，下列哪个式子表示恰好 2 次红色的概率？"
              },
              "choices": [
                "$(0.2)^2(0.8)^4$",
                "$\\binom{6}{2}(0.2)^2(0.8)^4$",
                "$\\binom{6}{2}(0.2)^4(0.8)^2$",
                "$\\binom{6}{2}(0.2)^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Binomial probability needs all three factors: $\\binom{6}{2}$ counts which 2 of the 6 spins are red, $(0.2)^2$ for the reds, and $(0.8)^4$ for the non-reds. The first distractor gives only ONE particular sequence of spins, missing the $\\binom{6}{2} = 15$ arrangements.",
                "zh": "二项概率需要三个因子齐全：$\\binom{6}{2}$ 数出 6 次中哪 2 次是红色，$(0.2)^2$ 对应红色，$(0.8)^4$ 对应非红色。第一个干扰项只给出某一个特定的转动序列的概率，漏掉了 $\\binom{6}{2} = 15$ 种排法。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A fair coin is flipped 4 times. Find the probability of exactly 3 heads. Give a simplified fraction like 1/4.",
                "zh": "抛一枚均匀硬币 4 次，求恰好 3 次正面的概率。请填最简分数，如 1/4。"
              },
              "answer": "1/4",
              "accept": [
                "4/16",
                "0.25"
              ],
              "explanation": {
                "en": "$P(X=3) = \\binom{4}{3}\\left(\\frac{1}{2}\\right)^3\\left(\\frac{1}{2}\\right)^1 = 4 \\cdot \\frac{1}{16} = \\frac{4}{16} = \\frac{1}{4}$.",
                "zh": "$P(X=3) = \\binom{4}{3}\\left(\\frac{1}{2}\\right)^3\\left(\\frac{1}{2}\\right)^1 = 4 \\cdot \\frac{1}{16} = \\frac{4}{16} = \\frac{1}{4}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A factory's quality test passes each phone independently with probability $0.9$. In a batch of 3 phones, what is the probability that AT LEAST one phone fails the test?",
                "zh": "某工厂的质检对每部手机独立通过的概率为 $0.9$。在一批 3 部手机中，至少有一部未通过质检的概率是多少？"
              },
              "choices": [
                "$0.001$",
                "$0.1$",
                "$0.729$",
                "$0.271$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Use the complement: $P(\\text{at least one fails}) = 1 - P(\\text{all pass}) = 1 - (0.9)^3 = 1 - 0.729 = 0.271$. The distractor $0.729$ is the probability that every phone passes — the complement itself, not the answer.",
                "zh": "用补事件：$P(\\text{至少一部不通过}) = 1 - P(\\text{全部通过}) = 1 - (0.9)^3 = 1 - 0.729 = 0.271$。干扰项 $0.729$ 是所有手机都通过的概率——即补事件本身，而不是所求答案。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "data-statistics",
      "title": "Unit 10: Data Analysis and Statistics",
      "titleZh": "第十单元：数据分析与统计",
      "lessons": [
        {
          "id": "normal-distributions-and-studies",
          "title": "Normal Distributions and Statistical Studies",
          "titleZh": "正态分布与统计研究",
          "content": [
            {
              "type": "h2",
              "en": "The Normal Curve",
              "zh": "正态曲线"
            },
            {
              "type": "p",
              "en": "Many real-world measurements — heights, test scores, measurement errors — pile up near a central value and thin out symmetrically on both sides. The idealized model for this pattern is the normal distribution: a smooth, bell-shaped curve that is symmetric about its mean $\\mu$. The total area under the curve is 1, and the area over an interval gives the probability of landing in that interval.",
              "zh": "许多现实中的测量值——身高、考试分数、测量误差——都集中在一个中心值附近，并向两侧对称地逐渐减少。刻画这种模式的理想模型是正态分布：一条关于均值 $\\mu$ 对称的光滑钟形曲线。曲线下的总面积为 1，某区间上方的面积就是落在该区间内的概率。"
            },
            {
              "type": "p",
              "en": "Two numbers completely determine a normal curve: the mean $\\mu$ locates the center (which is also the median and the peak), and the standard deviation $\\sigma$ measures the spread. A larger $\\sigma$ produces a shorter, wider bell; a smaller $\\sigma$ produces a taller, narrower one. The curve changes from bending downward to bending upward exactly at $\\mu - \\sigma$ and $\\mu + \\sigma$.",
              "zh": "两个数完全确定一条正态曲线：均值 $\\mu$ 确定中心位置（同时也是中位数和峰值所在），标准差 $\\sigma$ 度量分散程度。$\\sigma$ 越大，钟形越矮越宽；$\\sigma$ 越小，钟形越高越窄。曲线恰好在 $\\mu - \\sigma$ 和 $\\mu + \\sigma$ 处由向下弯转为向上弯。"
            },
            {
              "type": "h3",
              "en": "The empirical (68-95-99.7) rule",
              "zh": "经验法则（68-95-99.7 法则）"
            },
            {
              "type": "p",
              "en": "For any normal distribution, fixed fractions of the data fall within one, two, and three standard deviations of the mean:",
              "zh": "对任何正态分布，落在均值一倍、两倍、三倍标准差范围内的数据比例是固定的："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "About $68\\%$ of the data lies within $1\\sigma$ of the mean, i.e. in $[\\mu - \\sigma, \\mu + \\sigma]$.",
                  "zh": "约 $68\\%$ 的数据落在均值的 $1\\sigma$ 范围内，即区间 $[\\mu - \\sigma, \\mu + \\sigma]$。"
                },
                {
                  "en": "About $95\\%$ lies within $2\\sigma$, and about $99.7\\%$ lies within $3\\sigma$.",
                  "zh": "约 $95\\%$ 落在 $2\\sigma$ 范围内，约 $99.7\\%$ 落在 $3\\sigma$ 范围内。"
                },
                {
                  "en": "Symmetry lets you split these: for example, $34\\%$ lies between $\\mu$ and $\\mu + \\sigma$, and $2.5\\%$ lies above $\\mu + 2\\sigma$.",
                  "zh": "利用对称性可以拆分这些比例：例如 $34\\%$ 位于 $\\mu$ 与 $\\mu + \\sigma$ 之间，$2.5\\%$ 位于 $\\mu + 2\\sigma$ 之上。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: applying the empirical rule to data that is not roughly normal. The 68-95-99.7 percentages are only valid for bell-shaped, symmetric distributions — for skewed data (like household incomes) they can be badly wrong. Always check, or be told, that the data is approximately normal first.",
              "zh": "常见错误：把经验法则用在并非近似正态的数据上。68-95-99.7 这些百分比只对钟形、对称的分布成立——对偏态数据（如家庭收入）可能严重失真。使用前务必确认（或由题目告知）数据近似正态。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1",
                "zh": "例题 1"
              },
              "problem": {
                "en": "Adult male heights in a region are approximately normal with mean $\\mu = 70$ inches and standard deviation $\\sigma = 3$ inches. What percent of men are between 64 and 76 inches tall? What percent are taller than 76 inches?",
                "zh": "某地区成年男性身高近似服从正态分布，均值 $\\mu = 70$ 英寸，标准差 $\\sigma = 3$ 英寸。身高在 64 到 76 英寸之间的男性占多少？高于 76 英寸的占多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Convert the endpoints to standard deviations: $64 = 70 - 2(3) = \\mu - 2\\sigma$ and $76 = \\mu + 2\\sigma$. By the empirical rule, about $95\\%$ of men fall in this interval.",
                  "zh": "把端点换算成标准差：$64 = 70 - 2(3) = \\mu - 2\\sigma$，$76 = \\mu + 2\\sigma$。由经验法则，约 $95\\%$ 的男性落在此区间内。"
                },
                {
                  "type": "p",
                  "en": "The remaining $5\\%$ splits equally into the two tails by symmetry, so about $2.5\\%$ of men are taller than 76 inches.",
                  "zh": "剩下的 $5\\%$ 由对称性平分到两侧尾部，所以约 $2.5\\%$ 的男性高于 76 英寸。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Z-Scores: A Universal Ruler",
              "zh": "Z 分数：通用的度量尺"
            },
            {
              "type": "p",
              "en": "A z-score converts a raw data value into \"number of standard deviations from the mean.\" Positive z-scores lie above the mean, negative ones below. Because every normal distribution has the same shape after this conversion, z-scores let us compare values from completely different distributions.",
              "zh": "z 分数把原始数据换算成\"偏离均值多少个标准差\"。正的 z 分数在均值之上，负的在均值之下。经过这种换算后所有正态分布形状相同，因此 z 分数使我们能够比较来自完全不同分布的数值。"
            },
            {
              "type": "math",
              "tex": "z = \\frac{x - \\mu}{\\sigma}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2",
                "zh": "例题 2"
              },
              "problem": {
                "en": "Maya scored 690 on a test with $\\mu = 600$, $\\sigma = 60$. Her brother scored 27 on a different test with $\\mu = 21$, $\\sigma = 5$. Relative to the test-takers of each exam, who performed better?",
                "zh": "Maya 在一场考试中得 690 分，该考试 $\\mu = 600$，$\\sigma = 60$。她哥哥在另一场考试中得 27 分，该考试 $\\mu = 21$，$\\sigma = 5$。相对于各自考试的考生群体，谁的表现更好？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute each z-score:",
                  "zh": "分别计算 z 分数："
                },
                {
                  "type": "math",
                  "tex": "z_{\\text{Maya}} = \\frac{690 - 600}{60} = 1.5 \\qquad z_{\\text{brother}} = \\frac{27 - 21}{5} = 1.2"
                },
                {
                  "type": "p",
                  "en": "Maya is 1.5 standard deviations above her test's mean, while her brother is only 1.2 above his. Maya performed better relative to her group, even though the raw scores cannot be compared directly.",
                  "zh": "Maya 高出所在考试均值 1.5 个标准差，而她哥哥只高出 1.2 个。相对于各自的群体，Maya 表现更好，尽管原始分数无法直接比较。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Z-scores also let you apply the empirical rule to real data quickly: a value with $z = 2.1$ is more extreme than about $97.5\\%$ of the data, and any value with $|z| > 3$ is rare enough to investigate as a possible outlier or data-entry error.",
              "zh": "z 分数还能让你快速地把经验法则用于真实数据：$z = 2.1$ 的值比约 $97.5\\%$ 的数据更极端；任何 $|z| > 3$ 的值都足够罕见，值得作为可能的离群值或录入错误加以核查。"
            },
            {
              "type": "h2",
              "en": "Statistical Studies: Surveys, Experiments, Observational Studies",
              "zh": "统计研究：调查、实验与观察性研究"
            },
            {
              "type": "p",
              "en": "How data is collected determines what conclusions it can support. A survey asks questions of a sample to estimate facts about a population. An observational study measures variables of interest without influencing the subjects. An experiment deliberately imposes treatments on randomly assigned groups — and only a well-designed experiment can justify a cause-and-effect conclusion.",
              "zh": "数据的收集方式决定了它能支持怎样的结论。调查通过向样本提问来估计总体的情况。观察性研究只测量感兴趣的变量而不干预对象。实验则把处理有意地施加于随机分配的各组——只有设计良好的实验才能支持因果结论。"
            },
            {
              "type": "h3",
              "en": "Sources of bias",
              "zh": "偏差的来源"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Sampling bias: the sample is not representative — e.g. surveying only shoppers at one store, or a convenience sample of friends.",
                  "zh": "抽样偏差：样本不具代表性——例如只调查某一家商店的顾客，或只方便地找朋友作样本。"
                },
                {
                  "en": "Voluntary response bias: people choose themselves (online polls, call-ins); those with strong opinions are overrepresented.",
                  "zh": "自愿回应偏差：由人们自己决定是否参与（网络投票、来电投票）；意见强烈的人被过度代表。"
                },
                {
                  "en": "Nonresponse bias: selected people who refuse or cannot be reached may differ systematically from those who respond.",
                  "zh": "无回应偏差：被抽中却拒答或联系不上的人，可能与回应者存在系统性差异。"
                },
                {
                  "en": "Wording and response bias: leading questions, sensitive topics, or the interviewer's presence push answers in one direction.",
                  "zh": "措辞与回答偏差：诱导性问题、敏感话题或调查者在场都会把回答推向某个方向。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The cure for sampling bias is random selection: a simple random sample gives every member of the population an equal chance of being chosen. In experiments, random assignment to treatment and control groups balances out lurking variables, which is what makes causal conclusions possible.",
              "zh": "消除抽样偏差的方法是随机抽取：简单随机样本使总体中每个个体被选中的机会均等。在实验中，把对象随机分配到处理组和对照组可以平衡潜在变量，这正是因果结论得以成立的原因。"
            },
            {
              "type": "h3",
              "en": "Margin of error and the $1/\\sqrt{n}$ rule of thumb",
              "zh": "误差范围与 $1/\\sqrt{n}$ 经验公式"
            },
            {
              "type": "p",
              "en": "A sample proportion is only an estimate; a different random sample would give a slightly different answer. The margin of error describes this sample-to-sample variability. For a random sample of size $n$, a quick approximation at $95\\%$ confidence is:",
              "zh": "样本比例只是一个估计值；换一个随机样本会得到略有不同的结果。误差范围描述的正是这种样本间的波动。对容量为 $n$ 的随机样本，$95\\%$ 置信水平下的快速近似为："
            },
            {
              "type": "math",
              "tex": "\\text{margin of error} \\approx \\frac{1}{\\sqrt{n}}"
            },
            {
              "type": "p",
              "en": "So a poll of $n = 1600$ people has margin of error about $\\frac{1}{\\sqrt{1600}} = \\frac{1}{40} = 0.025$, or $2.5$ percentage points. Notice the square root: to cut the margin of error in half, you must quadruple the sample size — precision gets expensive quickly.",
              "zh": "因此调查 $n = 1600$ 人时，误差范围约为 $\\frac{1}{\\sqrt{1600}} = \\frac{1}{40} = 0.025$，即 $2.5$ 个百分点。注意平方根的作用：要把误差范围减半，样本量必须翻两番（变为 4 倍）——提高精度的代价增长得很快。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3",
                "zh": "例题 3"
              },
              "problem": {
                "en": "A random sample of 400 voters finds that $54\\%$ support a ballot measure. Using the $1/\\sqrt{n}$ rule, give an interval of plausible values for the true support, and state whether the measure is clearly ahead.",
                "zh": "对 400 名选民的随机抽样显示 $54\\%$ 支持某项提案。用 $1/\\sqrt{n}$ 经验公式给出真实支持率的合理区间，并判断该提案是否明显领先。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The margin of error is about $\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0.05$, i.e. 5 percentage points.",
                  "zh": "误差范围约为 $\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0.05$，即 5 个百分点。"
                },
                {
                  "type": "p",
                  "en": "Plausible values run from $54\\% - 5\\% = 49\\%$ to $54\\% + 5\\% = 59\\%$. Because the interval includes values below $50\\%$, the poll does NOT establish that the measure is clearly ahead.",
                  "zh": "合理区间为 $54\\% - 5\\% = 49\\%$ 到 $54\\% + 5\\% = 59\\%$。由于区间包含低于 $50\\%$ 的值，这次调查不能说明提案明显领先。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: exam questions love the phrase \"can we conclude that X causes Y?\" The answer is yes only when the study is a randomized experiment. For surveys and observational studies, the correct language is \"there is an association\" — a lurking variable could explain the pattern. Also remember that a larger sample reduces margin of error but does NOT fix a biased sampling method.",
              "zh": "考试提示：考题常问\"能否得出 X 导致 Y 的结论？\"只有当研究是随机化实验时答案才是肯定的。对于调查和观察性研究，正确的表述是\"存在关联\"——潜在变量也可能解释这种模式。还要记住：增大样本量能缩小误差范围，但不能修正有偏的抽样方法。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Scores on a quiz are approximately normal with mean 80 and standard deviation 5. About what percent of scores fall between 75 and 85?",
                "zh": "某测验分数近似服从正态分布，均值为 80，标准差为 5。分数落在 75 到 85 之间的比例约为多少？"
              },
              "choices": [
                "$50\\%$",
                "$68\\%$",
                "$95\\%$",
                "$34\\%$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The interval 75 to 85 is $\\mu - \\sigma$ to $\\mu + \\sigma$, which contains about $68\\%$ of the data by the empirical rule. The distractor $34\\%$ is the share on just ONE side, from the mean to $\\mu + \\sigma$.",
                "zh": "区间 75 到 85 正是 $\\mu - \\sigma$ 到 $\\mu + \\sigma$，由经验法则约含 $68\\%$ 的数据。干扰项 $34\\%$ 只是单侧（从均值到 $\\mu + \\sigma$）的比例。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A normal distribution has $\\mu = 100$ and $\\sigma = 15$. Using the empirical rule, what percent of the data lies above 130? Give a number (percent, without the % sign).",
                "zh": "某正态分布 $\\mu = 100$，$\\sigma = 15$。由经验法则，高于 130 的数据占百分之几？请填一个数字（百分数值，不带 % 号）。"
              },
              "answer": "2.5",
              "accept": [
                "2.5%",
                "0.025"
              ],
              "explanation": {
                "en": "$130 = \\mu + 2\\sigma$. About $95\\%$ lies within $2\\sigma$, leaving $5\\%$ in the two tails; by symmetry, half of that — $2.5\\%$ — lies above 130.",
                "zh": "$130 = \\mu + 2\\sigma$。约 $95\\%$ 落在 $2\\sigma$ 范围内，两侧尾部共剩 $5\\%$；由对称性，其中一半即 $2.5\\%$ 高于 130。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A data value is $x = 85$ in a distribution with $\\mu = 70$ and $\\sigma = 10$. Find its z-score. Give a decimal.",
                "zh": "在 $\\mu = 70$、$\\sigma = 10$ 的分布中有一个数据值 $x = 85$。求它的 z 分数。请填一个小数。"
              },
              "answer": "1.5",
              "accept": [
                "1.50",
                "3/2"
              ],
              "explanation": {
                "en": "$z = \\frac{x - \\mu}{\\sigma} = \\frac{85 - 70}{10} = 1.5$: the value sits one and a half standard deviations above the mean.",
                "zh": "$z = \\frac{x - \\mu}{\\sigma} = \\frac{85 - 70}{10} = 1.5$：该值高出均值一个半标准差。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "On Exam A ($\\mu = 75$, $\\sigma = 8$) Jordan scored 87. On Exam B ($\\mu = 62$, $\\sigma = 10$) Lee scored 74. Relative to each exam's group, who scored higher?",
                "zh": "考试 A（$\\mu = 75$，$\\sigma = 8$）中 Jordan 得 87 分；考试 B（$\\mu = 62$，$\\sigma = 10$）中 Lee 得 74 分。相对于各自考试的群体，谁的成绩更高？"
              },
              "choices": [
                "Jordan, because $z = 1.5 > 1.2$ / Jordan，因为 $z = 1.5 > 1.2$",
                "Lee, because $74 - 62 = 87 - 75$ but Exam B was harder / Lee，因为 $74 - 62 = 87 - 75$ 而考试 B 更难",
                "Lee, because his z-score is higher / Lee，因为他的 z 分数更高",
                "They performed equally well, since both scored 12 points above the mean / 两人表现相同，因为都高出均值 12 分"
              ],
              "answer": 0,
              "explanation": {
                "en": "Compute z-scores: $z_{\\text{Jordan}} = \\frac{87-75}{8} = 1.5$ and $z_{\\text{Lee}} = \\frac{74-62}{10} = 1.2$. Jordan is farther above his mean in standard-deviation units, so he scored higher relative to his group. The \"equally well\" distractor is tempting because both raw scores are 12 points above the mean — but 12 points means more when the spread $\\sigma$ is smaller.",
                "zh": "计算 z 分数：$z_{\\text{Jordan}} = \\frac{87-75}{8} = 1.5$，$z_{\\text{Lee}} = \\frac{74-62}{10} = 1.2$。以标准差为单位，Jordan 高出均值更多，所以相对于所在群体他的成绩更高。\"表现相同\"这个干扰项很诱人，因为两人的原始分都高出均值 12 分——但当分散程度 $\\sigma$ 较小时，同样的 12 分意义更大。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Researchers randomly assign 200 volunteers to drink either green tea or water daily for 8 weeks, then measure cholesterol. What type of study is this?",
                "zh": "研究者把 200 名志愿者随机分配为每天喝绿茶或喝水两组，持续 8 周后测量胆固醇。这属于哪种研究？"
              },
              "choices": [
                "A survey / 调查",
                "An observational study / 观察性研究",
                "An experiment / 实验",
                "A census / 普查"
              ],
              "answer": 2,
              "explanation": {
                "en": "The researchers impose a treatment (green tea vs. water) with random assignment, which makes this an experiment — the only design that can support a cause-and-effect conclusion. An observational study would merely record what people already drink.",
                "zh": "研究者施加了处理（喝绿茶或喝水）并进行随机分配，这是实验——唯一能支持因果结论的设计。观察性研究只会记录人们本来喝什么。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A TV station asks viewers to text in whether they support a new tax. 8,000 people respond, and 78% are opposed. What is the main flaw?",
                "zh": "某电视台请观众发短信表明是否支持一项新税。8000 人回应，其中 78% 反对。这项调查的主要缺陷是什么？"
              },
              "choices": [
                "The sample size is too small / 样本量太小",
                "Voluntary response bias / 自愿回应偏差",
                "The margin of error is too large / 误差范围太大",
                "Nonresponse bias from unreachable viewers / 联系不上观众造成的无回应偏差"
              ],
              "answer": 1,
              "explanation": {
                "en": "Respondents selected themselves, and people with strong feelings (especially opposition) are far more likely to text in — voluntary response bias. The large sample size is tempting but irrelevant: a big biased sample is still biased.",
                "zh": "回应者是自己选择参与的，而情绪强烈的人（尤其是反对者）更可能发短信——这是自愿回应偏差。样本量大这个干扰项很诱人，但无关紧要：有偏的大样本仍然有偏。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using the $1/\\sqrt{n}$ rule of thumb, find the approximate margin of error (in percentage points) for a random sample of 625 people. Give a number.",
                "zh": "用 $1/\\sqrt{n}$ 经验公式，求 625 人随机样本的近似误差范围（以百分点计）。请填一个数字。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "4%",
                "0.04"
              ],
              "explanation": {
                "en": "$\\frac{1}{\\sqrt{625}} = \\frac{1}{25} = 0.04$, which is 4 percentage points. To get this down to 2 points, the sample would need to quadruple to 2500 people.",
                "zh": "$\\frac{1}{\\sqrt{625}} = \\frac{1}{25} = 0.04$，即 4 个百分点。若要降到 2 个百分点，样本量需翻两番，达到 2500 人。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A battery brand's lifetimes are approximately normal with $\\mu = 40$ hours and $\\sigma = 4$ hours. The maker wants to advertise a lifetime that about $84\\%$ of batteries will exceed. Which lifetime should it advertise?",
                "zh": "某品牌电池寿命近似服从正态分布，$\\mu = 40$ 小时，$\\sigma = 4$ 小时。厂家想宣传一个约 $84\\%$ 的电池都能超过的寿命值。应宣传多少小时？"
              },
              "choices": [
                "$44$ hours / $44$ 小时",
                "$40$ hours / $40$ 小时",
                "$36$ hours / $36$ 小时",
                "$32$ hours / $32$ 小时"
              ],
              "answer": 2,
              "explanation": {
                "en": "We need the value with $84\\%$ of the area above it. Since $68\\%$ lies within $1\\sigma$, the area above $\\mu - \\sigma$ is $68\\% + 16\\% = 84\\%$. So the advertised lifetime is $\\mu - \\sigma = 40 - 4 = 36$ hours. The distractor $44$ hours is $\\mu + \\sigma$, which only $16\\%$ of batteries exceed.",
                "zh": "需要找一个使其上方面积为 $84\\%$ 的值。因为 $1\\sigma$ 范围内含 $68\\%$，所以 $\\mu - \\sigma$ 之上的面积为 $68\\% + 16\\% = 84\\%$。因此应宣传 $\\mu - \\sigma = 40 - 4 = 36$ 小时。干扰项 $44$ 小时是 $\\mu + \\sigma$，只有 $16\\%$ 的电池能超过。"
              }
            }
          ]
        }
      ]
    }
  ]
}
