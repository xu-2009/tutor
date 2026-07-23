export default {
  "id": "secondary-math-3-honors",
  "title": "Secondary Math III Honors",
  "titleZh": "中学数学三（荣誉）",
  "subject": "math",
  "level": "Honors",
  "description": "Utah's honors third-year integrated mathematics course, following the Utah Core Standards: composing and inverting functions; polynomial functions, equations, and the Fundamental Theorem of Algebra; rational and radical functions; logarithms; trigonometric functions, graphs, and identities for modeling periodic behavior; modeling with geometry; and statistical inference — algebra, geometry, trigonometry, and statistics woven together to prepare for calculus.",
  "descriptionZh": "犹他州荣誉级第三年整合数学课程，遵循犹他州核心标准（Utah Core Standards）：函数的复合与反函数；多项式函数、方程与代数基本定理；有理函数与根式函数；对数；用于建模周期现象的三角函数、图象与恒等式；用几何建模；以及统计推断——将代数、几何、三角与统计融会贯通，为微积分做准备。",
  "units": [
    {
      "id": "unit-1-functions-inverses",
      "title": "Unit 1: Functions — Composition and Inverses",
      "titleZh": "第一单元：函数——复合与反函数",
      "lessons": [
        {
          "id": "combining-and-composing-functions",
          "title": "Combining and Composing Functions",
          "titleZh": "函数的运算与复合",
          "content": [
            {
              "type": "h2",
              "en": "Building New Functions from Old Ones",
              "zh": "由已知函数构造新函数"
            },
            {
              "type": "p",
              "en": "So far you have treated each function as a single, finished object. In Secondary Math III we learn to build bigger functions out of simpler ones, the same way you build numbers out of arithmetic. There are two very different ways to combine functions. The first is ordinary arithmetic — adding, subtracting, multiplying, and dividing the outputs. The second is composition, where the output of one function becomes the input of another. Both ideas appear everywhere, from stacking cost models in economics to feeding sensor data through a chain of corrections in engineering.",
              "zh": "到目前为止，你把每个函数都当作一个独立、完整的对象。在中学数学三中，我们要学会用较简单的函数搭建出更大的函数，就像用四则运算搭建数一样。组合函数有两种截然不同的方式。第一种是普通的算术——把输出相加、相减、相乘、相除。第二种是复合，即把一个函数的输出作为另一个函数的输入。这两种思想无处不在，从经济学中叠加成本模型，到工程中让传感器数据依次通过一连串修正。"
            },
            {
              "type": "h3",
              "en": "Arithmetic Combinations",
              "zh": "函数的四则运算"
            },
            {
              "type": "p",
              "en": "If $f$ and $g$ are functions, we define their sum, difference, product, and quotient pointwise — that is, we do the arithmetic on the outputs at each $x$:",
              "zh": "如果 $f$ 与 $g$ 是函数，我们逐点地定义它们的和、差、积、商——也就是在每个 $x$ 处对输出做相应的算术运算："
            },
            {
              "type": "math",
              "tex": "(f+g)(x)=f(x)+g(x), \\quad (f-g)(x)=f(x)-g(x)"
            },
            {
              "type": "math",
              "tex": "(fg)(x)=f(x)\\cdot g(x), \\quad \\left(\\frac{f}{g}\\right)(x)=\\frac{f(x)}{g(x)}"
            },
            {
              "type": "note",
              "en": "The domain of a combined function is where BOTH pieces are defined. For a quotient $\\frac{f}{g}$ you must additionally exclude every $x$ with $g(x)=0$, because division by zero is undefined.",
              "zh": "组合函数的定义域是两个函数都有定义的地方（即两定义域的交集）。对于商 $\\frac{f}{g}$，你还必须额外排除所有使 $g(x)=0$ 的 $x$，因为除以零没有意义。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Adding and multiplying functions",
                "zh": "例题 1：函数的相加与相乘"
              },
              "problem": {
                "en": "Let $f(x)=x^2-1$ and $g(x)=x+1$. Find $(f+g)(x)$ and $(fg)(x)$.",
                "zh": "设 $f(x)=x^2-1$，$g(x)=x+1$。求 $(f+g)(x)$ 和 $(fg)(x)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Add the outputs, then combine like terms:",
                  "zh": "把输出相加，再合并同类项："
                },
                {
                  "type": "math",
                  "tex": "(f+g)(x)=(x^2-1)+(x+1)=x^2+x"
                },
                {
                  "type": "p",
                  "en": "For the product, multiply the two expressions:",
                  "zh": "求积时，把两个表达式相乘："
                },
                {
                  "type": "math",
                  "tex": "(fg)(x)=(x^2-1)(x+1)=x^3+x^2-x-1"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Composition of Functions",
              "zh": "函数的复合"
            },
            {
              "type": "p",
              "en": "Composition means chaining functions: run $x$ through $g$, then feed that result into $f$. We write this $(f \\circ g)(x)=f(g(x))$, read \"f of g of x.\" The order matters — $f \\circ g$ is usually different from $g \\circ f$. The function on the right acts first, so $g$ is the inner function and $f$ is the outer function.",
              "zh": "复合就是把函数串接起来：先让 $x$ 经过 $g$，再把结果送入 $f$。我们记作 $(f \\circ g)(x)=f(g(x))$，读作\"f 复合 g\"。顺序很重要——$f \\circ g$ 通常不等于 $g \\circ f$。右边的函数先起作用，所以 $g$ 是内层函数，$f$ 是外层函数。"
            },
            {
              "type": "math",
              "tex": "(f \\circ g)(x)=f\\big(g(x)\\big)"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Composition and its domain",
                "zh": "例题 2：复合及其定义域"
              },
              "problem": {
                "en": "Let $f(x)=\\sqrt{x}$ and $g(x)=x-3$. Find $(f \\circ g)(x)$ and its domain.",
                "zh": "设 $f(x)=\\sqrt{x}$，$g(x)=x-3$。求 $(f \\circ g)(x)$ 及其定义域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitute $g(x)$ into $f$ wherever $f$ has an input:",
                  "zh": "把 $g(x)$ 代入 $f$ 中作为输入："
                },
                {
                  "type": "math",
                  "tex": "(f \\circ g)(x)=f(x-3)=\\sqrt{x-3}"
                },
                {
                  "type": "p",
                  "en": "The square root requires a non-negative radicand, so $x-3 \\ge 0$, giving domain $x \\ge 3$.",
                  "zh": "平方根要求被开方数非负，故 $x-3 \\ge 0$，得定义域 $x \\ge 3$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Decomposing a Function",
              "zh": "把函数拆解为复合"
            },
            {
              "type": "p",
              "en": "Later topics like the chain rule ask you to run composition backwards: given a complicated $h$, find an inner $g$ and outer $f$ with $h=f \\circ g$. Look for an \"inside\" expression wrapped by an \"outside\" operation. For $h(x)=(2x+5)^4$, the inside is $g(x)=2x+5$ and the outside is $f(u)=u^4$, so that $f(g(x))=(2x+5)^4$.",
              "zh": "后续的链式法则等主题会要求你反过来做复合：给定一个复杂的 $h$，找出内层 $g$ 与外层 $f$，使 $h=f \\circ g$。要寻找被某个\"外层\"运算包住的\"内层\"表达式。例如 $h(x)=(2x+5)^4$，内层是 $g(x)=2x+5$，外层是 $f(u)=u^4$，于是 $f(g(x))=(2x+5)^4$。"
            },
            {
              "type": "note",
              "en": "A common error is confusing the product $(fg)(x)=f(x)\\cdot g(x)$ with the composition $(f \\circ g)(x)=f(g(x))$. Multiplication multiplies two outputs; composition substitutes one function inside the other. They are almost never equal.",
              "zh": "一个常见错误是把乘积 $(fg)(x)=f(x)\\cdot g(x)$ 与复合 $(f \\circ g)(x)=f(g(x))$ 混淆。乘法是把两个输出相乘；复合是把一个函数代入另一个函数之中。两者几乎从不相等。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x)=3x-2$ and $g(x)=x^2$. Find $(f+g)(x)$.",
                "zh": "设 $f(x)=3x-2$，$g(x)=x^2$。求 $(f+g)(x)$。"
              },
              "choices": [
                "$x^2+3x-2$",
                "$x^2-3x+2$",
                "$3x^3-2x^2$",
                "$x^2+3x+2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Add the outputs: $(3x-2)+(x^2)=x^2+3x-2$. Adding functions just combines like terms; it does not multiply them.",
                "zh": "把输出相加：$(3x-2)+(x^2)=x^2+3x-2$。函数相加只是合并同类项，而不是相乘。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x)=x+5$ and $g(x)=x-5$. Find $(fg)(x)$.",
                "zh": "设 $f(x)=x+5$，$g(x)=x-5$。求 $(fg)(x)$。"
              },
              "choices": [
                "$2x$",
                "$x^2+10x+25$",
                "$x^2-25$",
                "$x^2+25$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The product multiplies the two expressions: $(x+5)(x-5)=x^2-25$, a difference of squares. Do not add the outputs — that would give $2x$.",
                "zh": "乘积是把两个表达式相乘：$(x+5)(x-5)=x^2-25$，即平方差。不要把输出相加，那会得到 $2x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x)=2x^2+x$ and $g(x)=x^2-3x$. Find $(f-g)(x)$.",
                "zh": "设 $f(x)=2x^2+x$，$g(x)=x^2-3x$。求 $(f-g)(x)$。"
              },
              "choices": [
                "$3x^2-2x$",
                "$x^2+4x$",
                "$x^2-2x$",
                "$x^2-4x$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Subtract every term of $g$: $(2x^2+x)-(x^2-3x)=2x^2+x-x^2+3x=x^2+4x$. Distributing the minus sign over $-3x$ makes it $+3x$.",
                "zh": "把 $g$ 的每一项都减去：$(2x^2+x)-(x^2-3x)=2x^2+x-x^2+3x=x^2+4x$。负号分配到 $-3x$ 上变成 $+3x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x)=x^2$ and $g(x)=x+3$. Find $(f \\circ g)(x)$.",
                "zh": "设 $f(x)=x^2$，$g(x)=x+3$。求 $(f \\circ g)(x)$。"
              },
              "choices": [
                "$x^2+9$",
                "$x^2+6x+9$",
                "$x^2+3$",
                "$x^4+3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Substitute $g$ into $f$: $f(g(x))=(x+3)^2=x^2+6x+9$. You must square the entire binomial, not just each term, so it is not $x^2+9$.",
                "zh": "把 $g$ 代入 $f$：$f(g(x))=(x+3)^2=x^2+6x+9$。要把整个二项式平方，而不是各项分别平方，所以不是 $x^2+9$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Let $f(x)=\\sqrt{x}$ and $g(x)=x-4$. Which expression equals $(f \\circ g)(x)$?",
                "zh": "设 $f(x)=\\sqrt{x}$，$g(x)=x-4$。下列哪个表达式等于 $(f \\circ g)(x)$？"
              },
              "choices": [
                "$\\sqrt{x}-4$",
                "$x-4$",
                "$4-\\sqrt{x}$",
                "$\\sqrt{x-4}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The inner function $g$ acts first: $f(g(x))=f(x-4)=\\sqrt{x-4}$. The whole quantity $x-4$ goes under the radical. In contrast, $(g \\circ f)(x)=\\sqrt{x}-4$.",
                "zh": "内层函数 $g$ 先起作用：$f(g(x))=f(x-4)=\\sqrt{x-4}$。整个 $x-4$ 都在根号下。相比之下，$(g \\circ f)(x)=\\sqrt{x}-4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x)=x^2+1$ and $g(x)=2x-1$. Find $(f \\circ g)(2)$. Give an integer.",
                "zh": "设 $f(x)=x^2+1$，$g(x)=2x-1$。求 $(f \\circ g)(2)$。答案填整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "Work inside out: $g(2)=2(2)-1=3$, then $f(3)=3^2+1=10$. Always evaluate the inner function first.",
                "zh": "由内向外计算：$g(2)=2(2)-1=3$，再算 $f(3)=3^2+1=10$。一定要先算内层函数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x)=\\sqrt{x}$ and $g(x)=x-6$. The domain of $(f \\circ g)(x)=\\sqrt{x-6}$ is $x \\ge a$. What is $a$? Give an integer.",
                "zh": "设 $f(x)=\\sqrt{x}$，$g(x)=x-6$。复合 $(f \\circ g)(x)=\\sqrt{x-6}$ 的定义域为 $x \\ge a$。求 $a$。答案填整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "The radicand must be non-negative: $x-6 \\ge 0$, so $x \\ge 6$. Thus $a=6$; any smaller $x$ would take the square root of a negative number.",
                "zh": "被开方数必须非负：$x-6 \\ge 0$，故 $x \\ge 6$。因此 $a=6$；更小的 $x$ 会对负数开平方。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write $h(x)=(x+1)^3$ as $(f \\circ g)(x)$ with inner function $g(x)=x+1$. What is the outer function $f(x)$? Answer with an expression in $x$ (for example, $x^2$).",
                "zh": "把 $h(x)=(x+1)^3$ 写成 $(f \\circ g)(x)$，其中内层函数为 $g(x)=x+1$。外层函数 $f(x)$ 是什么？用含 $x$ 的表达式作答（例如 $x^2$）。"
              },
              "answer": "x^3",
              "accept": [
                "x**3",
                "x^{3}"
              ],
              "explanation": {
                "en": "The outside operation is cubing whatever is inside, so $f(x)=x^3$. Check: $f(g(x))=(x+1)^3=h(x)$.",
                "zh": "外层运算是把内部的东西立方，故 $f(x)=x^3$。验证：$f(g(x))=(x+1)^3=h(x)$。"
              }
            }
          ]
        },
        {
          "id": "inverse-functions",
          "title": "Inverse Functions",
          "titleZh": "反函数",
          "content": [
            {
              "type": "h2",
              "en": "Undoing a Function",
              "zh": "\"撤销\"一个函数"
            },
            {
              "type": "p",
              "en": "Every function is a rule that turns inputs into outputs. Its inverse is the rule that runs the machine backwards: it takes each output and returns the input that produced it. If $f$ sends $3$ to $11$, then the inverse $f^{-1}$ sends $11$ back to $3$. Inverses let us solve for a hidden input — converting Celsius back to Fahrenheit, or recovering the years an investment grew from its final balance. The notation is $f^{-1}$, and be careful: the $-1$ here means \"inverse function,\" NOT the reciprocal $\\frac{1}{f}$.",
              "zh": "每个函数都是把输入变成输出的规则。它的反函数则是让机器反向运转的规则：接收每个输出，返回产生它的那个输入。若 $f$ 把 $3$ 送到 $11$，则反函数 $f^{-1}$ 把 $11$ 送回 $3$。反函数能帮我们求出隐藏的输入——把摄氏温度换回华氏温度，或由最终余额倒推投资增长的年数。记号是 $f^{-1}$，请注意：这里的 $-1$ 表示\"反函数\"，而不是倒数 $\\frac{1}{f}$。"
            },
            {
              "type": "h3",
              "en": "Finding an Inverse Algebraically",
              "zh": "用代数方法求反函数"
            },
            {
              "type": "p",
              "en": "To find an inverse, swap the roles of input and output, then solve. The recipe: (1) write $y=f(x)$; (2) swap $x$ and $y$; (3) solve for $y$; (4) rename it $f^{-1}(x)$.",
              "zh": "求反函数的方法是交换输入与输出的角色，再求解。步骤：(1) 写出 $y=f(x)$；(2) 交换 $x$ 与 $y$；(3) 解出 $y$；(4) 把它记作 $f^{-1}(x)$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Inverse of a linear function",
                "zh": "例题 1：一次函数的反函数"
              },
              "problem": {
                "en": "Find the inverse of $f(x)=2x+3$.",
                "zh": "求 $f(x)=2x+3$ 的反函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Write $y=2x+3$, then swap $x$ and $y$ to get $x=2y+3$. Solve for $y$:",
                  "zh": "写出 $y=2x+3$，交换 $x$ 与 $y$ 得 $x=2y+3$。解出 $y$："
                },
                {
                  "type": "math",
                  "tex": "x-3=2y \\quad\\Rightarrow\\quad y=\\frac{x-3}{2}"
                },
                {
                  "type": "p",
                  "en": "So $f^{-1}(x)=\\dfrac{x-3}{2}$. Notice the operations reverse and undo in the opposite order: $f$ multiplies by 2 then adds 3; $f^{-1}$ subtracts 3 then divides by 2.",
                  "zh": "所以 $f^{-1}(x)=\\dfrac{x-3}{2}$。注意运算被反转，并以相反的顺序撤销：$f$ 先乘 2 再加 3；$f^{-1}$ 先减 3 再除以 2。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Verifying an Inverse by Composition",
              "zh": "用复合验证反函数"
            },
            {
              "type": "p",
              "en": "Two functions are inverses exactly when composing them in either order returns the original input. This is the official test:",
              "zh": "两个函数互为反函数，当且仅当以任一顺序复合都返回原来的输入。这就是标准的验证方法："
            },
            {
              "type": "math",
              "tex": "(f \\circ f^{-1})(x)=x \\quad\\text{and}\\quad (f^{-1} \\circ f)(x)=x"
            },
            {
              "type": "note",
              "en": "Composition to $x$ is the definition of inverse functions. If either composition fails to simplify to $x$, the two functions are not inverses — even if one of them looks right.",
              "zh": "复合结果为 $x$ 就是反函数的定义。如果任一方向的复合不能化简为 $x$，这两个函数就不是互为反函数——即使其中一个看起来是对的。"
            },
            {
              "type": "h3",
              "en": "One-to-One and the Horizontal Line Test",
              "zh": "一一对应与水平线检验"
            },
            {
              "type": "p",
              "en": "A function has an inverse that is also a function only if it is one-to-one: each output comes from exactly one input. Graphically, this is the horizontal line test — if no horizontal line crosses the graph more than once, the function is one-to-one. The graph of $f^{-1}$ is the mirror image of the graph of $f$ across the line $y=x$, because swapping $x$ and $y$ reflects every point $(a,b)$ to $(b,a)$.",
              "zh": "一个函数的反函数也是函数，当且仅当它是一一对应的：每个输出恰好来自一个输入。从图像看，这就是水平线检验——若没有任何水平线与图像相交超过一次，函数就是一一对应的。$f^{-1}$ 的图像是 $f$ 的图像关于直线 $y=x$ 的镜像，因为交换 $x$ 与 $y$ 会把每个点 $(a,b)$ 反射到 $(b,a)$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Restricting the domain",
                "zh": "例题 2：限制定义域"
              },
              "problem": {
                "en": "The function $f(x)=x^2$ is not one-to-one. Restrict its domain so it has an inverse, and find that inverse.",
                "zh": "函数 $f(x)=x^2$ 不是一一对应的。限制它的定义域使其有反函数，并求出这个反函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A horizontal line like $y=4$ hits $y=x^2$ twice (at $x=2$ and $x=-2$), so it fails the horizontal line test. Restrict to $x \\ge 0$; on this half the parabola is one-to-one.",
                  "zh": "像 $y=4$ 这样的水平线与 $y=x^2$ 相交两次（在 $x=2$ 和 $x=-2$ 处），故未通过水平线检验。把定义域限制为 $x \\ge 0$；在这半支上抛物线是一一对应的。"
                },
                {
                  "type": "p",
                  "en": "Now swap and solve: $y=x^2 \\Rightarrow x=y^2 \\Rightarrow y=\\sqrt{x}$ (we take the positive root to match $x \\ge 0$).",
                  "zh": "现在交换并求解：$y=x^2 \\Rightarrow x=y^2 \\Rightarrow y=\\sqrt{x}$（取正根以匹配 $x \\ge 0$）。"
                },
                {
                  "type": "math",
                  "tex": "f^{-1}(x)=\\sqrt{x}, \\quad x \\ge 0"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the inverse of $f(x)=x+7$?",
                "zh": "$f(x)=x+7$ 的反函数是什么？"
              },
              "choices": [
                "$f^{-1}(x)=x-7$",
                "$f^{-1}(x)=x+7$",
                "$f^{-1}(x)=7-x$",
                "$f^{-1}(x)=\\frac{1}{x+7}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Adding 7 is undone by subtracting 7, so $f^{-1}(x)=x-7$. The $-1$ means inverse, not reciprocal, so $\\frac{1}{x+7}$ is wrong.",
                "zh": "加 7 的逆运算是减 7，所以 $f^{-1}(x)=x-7$。这里的 $-1$ 表示反函数而不是倒数，故 $\\frac{1}{x+7}$ 是错的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Find the inverse of $f(x)=3x-6$.",
                "zh": "求 $f(x)=3x-6$ 的反函数。"
              },
              "choices": [
                "$f^{-1}(x)=\\frac{x-6}{3}$",
                "$f^{-1}(x)=3x+6$",
                "$f^{-1}(x)=\\frac{x+6}{3}$",
                "$f^{-1}(x)=\\frac{1}{3x-6}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Swap and solve: $x=3y-6 \\Rightarrow x+6=3y \\Rightarrow y=\\frac{x+6}{3}$. Add 6 first (undoing $-6$), then divide by 3 (undoing $\\times 3$).",
                "zh": "交换并求解：$x=3y-6 \\Rightarrow x+6=3y \\Rightarrow y=\\frac{x+6}{3}$。先加 6（撤销 $-6$），再除以 3（撤销 $\\times 3$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x)=2x-4$, find $f^{-1}(6)$. Give an integer.",
                "zh": "对于 $f(x)=2x-4$，求 $f^{-1}(6)$。答案填整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "The inverse is $f^{-1}(x)=\\frac{x+4}{2}$, so $f^{-1}(6)=\\frac{10}{2}=5$. Check forward: $f(5)=2(5)-4=6$, confirming the pair.",
                "zh": "反函数为 $f^{-1}(x)=\\frac{x+4}{2}$，故 $f^{-1}(6)=\\frac{10}{2}=5$。正向验证：$f(5)=2(5)-4=6$，对应关系成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A function $f$ has an inverse that is also a function exactly when $f$ is:",
                "zh": "函数 $f$ 的反函数也是函数，当且仅当 $f$ 满足："
              },
              "choices": [
                "increasing on part of its domain",
                "one-to-one (passes the horizontal line test)",
                "a straight line",
                "passing the vertical line test"
              ],
              "answer": 1,
              "explanation": {
                "en": "An inverse must send each output back to a single input, so $f$ must be one-to-one — no horizontal line may cross the graph twice. The vertical line test only checks that $f$ itself is a function.",
                "zh": "反函数必须把每个输出送回唯一的输入，所以 $f$ 必须是一一对应的——没有水平线与图像相交两次。竖直线检验只是判断 $f$ 本身是否为函数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The point $(3,8)$ lies on the graph of $f$. Which point must lie on the graph of $f^{-1}$?",
                "zh": "点 $(3,8)$ 在 $f$ 的图像上。$f^{-1}$ 的图像上必有哪个点？"
              },
              "choices": [
                "$(3,8)$",
                "$(-8,-3)$",
                "$(-3,8)$",
                "$(8,3)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The inverse swaps inputs and outputs, so $(a,b)$ on $f$ becomes $(b,a)$ on $f^{-1}$. Thus $(3,8)$ becomes $(8,3)$ — a reflection across the line $y=x$.",
                "zh": "反函数交换输入与输出，故 $f$ 上的 $(a,b)$ 变成 $f^{-1}$ 上的 $(b,a)$。因此 $(3,8)$ 变成 $(8,3)$——即关于直线 $y=x$ 的反射。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $f^{-1}$ is the reflection of the graph of $f$ across which line?",
                "zh": "$f^{-1}$ 的图像是 $f$ 的图像关于哪条直线的反射？"
              },
              "choices": [
                "$y=0$ (the x-axis)",
                "$x=0$ (the y-axis)",
                "$y=x$",
                "$y=-x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Swapping each $(a,b)$ to $(b,a)$ is exactly a reflection across $y=x$. That is why an inverse graph is the mirror image of the original over the line $y=x$.",
                "zh": "把每个 $(a,b)$ 变为 $(b,a)$ 恰好是关于 $y=x$ 的反射。这就是反函数图像是原图像关于直线 $y=x$ 的镜像的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x)=x^2$ with domain restricted to $x \\ge 0$, so $f^{-1}(x)=\\sqrt{x}$. Find $f^{-1}(49)$. Give an integer.",
                "zh": "设 $f(x)=x^2$，定义域限制为 $x \\ge 0$，故 $f^{-1}(x)=\\sqrt{x}$。求 $f^{-1}(49)$。答案填整数。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "$f^{-1}(49)=\\sqrt{49}=7$. Because the domain was restricted to $x \\ge 0$, we take the positive root, not $-7$.",
                "zh": "$f^{-1}(49)=\\sqrt{49}=7$。因为定义域被限制为 $x \\ge 0$，所以取正根，而不是 $-7$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x)=\\frac{x-1}{4}$. Its inverse is $f^{-1}(x)=4x+1$. Find $f^{-1}(3)$. Give an integer.",
                "zh": "设 $f(x)=\\frac{x-1}{4}$，其反函数为 $f^{-1}(x)=4x+1$。求 $f^{-1}(3)$。答案填整数。"
              },
              "answer": "13",
              "accept": [
                "13.0"
              ],
              "explanation": {
                "en": "$f^{-1}(3)=4(3)+1=13$. Verify: $f(13)=\\frac{13-1}{4}=\\frac{12}{4}=3$, so the inverse is correct.",
                "zh": "$f^{-1}(3)=4(3)+1=13$。验证：$f(13)=\\frac{13-1}{4}=\\frac{12}{4}=3$，说明反函数正确。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-polynomial-functions",
      "title": "Unit 2: Polynomial Functions",
      "titleZh": "第二单元：多项式函数",
      "lessons": [
        {
          "id": "graphs-end-behavior-zeros",
          "title": "Graphs, End Behavior, and Zeros of Polynomials",
          "titleZh": "多项式的图象、末端行为与零点",
          "content": [
            {
              "type": "h2",
              "en": "Reading a Polynomial from Its Graph",
              "zh": "从图象读懂多项式"
            },
            {
              "type": "p",
              "en": "A polynomial function has the form $f(x) = a_n x^n + a_{n-1}x^{n-1} + \\dots + a_1 x + a_0$, where $n$ is a whole number and the leading coefficient $a_n$ is nonzero. The degree $n$ and the sign of $a_n$ together control the overall shape of the graph — how it leaves the screen on the far left and far right, and how many times it can turn. Learning to read these features lets you sketch a polynomial or match it to an equation without plotting dozens of points.",
              "zh": "多项式函数的形式为 $f(x) = a_n x^n + a_{n-1}x^{n-1} + \\dots + a_1 x + a_0$，其中 $n$ 是非负整数，首项系数 $a_n$ 不为零。次数 $n$ 与 $a_n$ 的符号共同决定图象的整体形状——它在最左端和最右端如何离开屏幕，以及最多能拐多少次弯。学会读懂这些特征，你就能在不描许多点的情况下画出多项式或把它与方程配对。"
            },
            {
              "type": "h3",
              "en": "End Behavior",
              "zh": "末端行为"
            },
            {
              "type": "p",
              "en": "End behavior describes what happens to $f(x)$ as $x \\rightarrow +\\infty$ and as $x \\rightarrow -\\infty$. Only the leading term $a_n x^n$ matters for the ends, because it grows fastest. There are four cases based on whether the degree is even or odd and whether the leading coefficient is positive or negative.",
              "zh": "末端行为描述当 $x \\rightarrow +\\infty$ 和 $x \\rightarrow -\\infty$ 时 $f(x)$ 的变化趋势。在两端只有首项 $a_n x^n$ 起作用，因为它增长最快。根据次数是偶还是奇、首项系数是正还是负，共有四种情形。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Even degree, $a_n > 0$: both ends rise ($\\uparrow$ left, $\\uparrow$ right), like $x^2$.",
                  "zh": "偶次、$a_n > 0$：两端都向上（左 $\\uparrow$，右 $\\uparrow$），类似 $x^2$。"
                },
                {
                  "en": "Even degree, $a_n < 0$: both ends fall, like $-x^2$.",
                  "zh": "偶次、$a_n < 0$：两端都向下，类似 $-x^2$。"
                },
                {
                  "en": "Odd degree, $a_n > 0$: falls on the left, rises on the right, like $x^3$.",
                  "zh": "奇次、$a_n > 0$：左端向下，右端向上，类似 $x^3$。"
                },
                {
                  "en": "Odd degree, $a_n < 0$: rises on the left, falls on the right, like $-x^3$.",
                  "zh": "奇次、$a_n < 0$：左端向上，右端向下，类似 $-x^3$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Memory aid: an even-degree graph has ends that point the same direction (both up or both down); an odd-degree graph has ends that point in opposite directions. The leading coefficient's sign then decides which way the right end goes.",
              "zh": "记忆技巧：偶次图象的两端指向相同方向（都上或都下）；奇次图象的两端指向相反方向。再由首项系数的符号决定右端朝哪个方向。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Predicting end behavior",
                "zh": "例题 1：预测末端行为"
              },
              "problem": {
                "en": "Describe the end behavior of $f(x) = -2x^4 + 5x^2 - 1$.",
                "zh": "描述 $f(x) = -2x^4 + 5x^2 - 1$ 的末端行为。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The degree is $4$ (even) and the leading coefficient is $-2$ (negative). Even degree means both ends go the same way; a negative leading coefficient sends them down.",
                  "zh": "次数为 $4$（偶数），首项系数为 $-2$（负数）。偶次意味着两端方向一致；首项系数为负使它们都向下。"
                },
                {
                  "type": "math",
                  "tex": "\\text{As } x \\rightarrow -\\infty,\\ f(x) \\rightarrow -\\infty; \\quad \\text{As } x \\rightarrow +\\infty,\\ f(x) \\rightarrow -\\infty"
                },
                {
                  "type": "p",
                  "en": "Both ends fall, so the graph opens downward overall.",
                  "zh": "两端都向下，因此图象整体向下开口。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Zeros, x-Intercepts, and Multiplicity",
              "zh": "零点、x 轴截距与重数"
            },
            {
              "type": "p",
              "en": "A real zero of $f$ is a value $c$ with $f(c) = 0$; it appears on the graph as an $x$-intercept at $(c, 0)$. If $f$ factors as $f(x) = a(x - c)^k \\cdot (\\text{other factors})$, the exponent $k$ is the multiplicity of the zero $c$. Multiplicity tells you how the graph meets the axis: when $k$ is odd the graph crosses through the axis, and when $k$ is even the graph touches the axis and turns back (a bounce). Higher multiplicity also flattens the graph near the intercept.",
              "zh": "$f$ 的实零点是使 $f(c) = 0$ 的值 $c$；它在图象上表现为 $x$ 轴上的截距 $(c, 0)$。若 $f$ 可分解为 $f(x) = a(x - c)^k \\cdot (\\text{其他因式})$，则指数 $k$ 是零点 $c$ 的重数。重数告诉你图象如何与坐标轴相交：当 $k$ 为奇数时图象穿过坐标轴，当 $k$ 为偶数时图象与坐标轴相切后折返（反弹）。重数越高，截距附近的图象越平缓。"
            },
            {
              "type": "note",
              "en": "Odd multiplicity = cross; even multiplicity = touch (bounce). A multiplicity-1 zero passes straight through, while a multiplicity-2 zero rests on the axis like the vertex of a parabola.",
              "zh": "奇重数 = 穿过；偶重数 = 相切（反弹）。重数为 1 的零点直接穿过，而重数为 2 的零点像抛物线顶点那样停靠在坐标轴上。"
            },
            {
              "type": "h3",
              "en": "Turning Points and Relative Extrema",
              "zh": "拐点与相对极值"
            },
            {
              "type": "p",
              "en": "A turning point is where the graph changes from rising to falling or vice versa; each is a relative (local) maximum or minimum. A polynomial of degree $n$ has at most $n - 1$ turning points and at most $n$ real zeros. So a cubic ($n = 3$) has at most $2$ turning points, and a quartic at most $3$. These bounds are useful checks when you sketch or when you read a graph off a screen.",
              "zh": "拐点是图象由上升变为下降（或反之）的位置；每个拐点是一个相对（局部）极大值或极小值。$n$ 次多项式最多有 $n - 1$ 个拐点，最多有 $n$ 个实零点。因此三次多项式（$n = 3$）最多有 $2$ 个拐点，四次多项式最多有 $3$ 个。这些上界在你作图或从屏幕上读图时是很有用的检验。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Zeros, multiplicity, and shape",
                "zh": "例题 2：零点、重数与形状"
              },
              "problem": {
                "en": "For $f(x) = (x + 1)(x - 2)^2$, list the zeros with their behavior and describe the end behavior.",
                "zh": "对于 $f(x) = (x + 1)(x - 2)^2$，列出零点及其在图象上的表现，并描述末端行为。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set each factor to zero. The factor $(x + 1)$ gives $x = -1$ with multiplicity $1$ (odd), so the graph crosses at $(-1, 0)$. The factor $(x - 2)^2$ gives $x = 2$ with multiplicity $2$ (even), so the graph touches and bounces at $(2, 0)$.",
                  "zh": "令每个因式等于零。因式 $(x + 1)$ 给出 $x = -1$，重数为 $1$（奇），图象在 $(-1, 0)$ 处穿过。因式 $(x - 2)^2$ 给出 $x = 2$，重数为 $2$（偶），图象在 $(2, 0)$ 处相切并反弹。"
                },
                {
                  "type": "p",
                  "en": "Multiplying the factors, the leading term is $x \\cdot x^2 = x^3$, so the degree is $3$ (odd) with a positive leading coefficient: the graph falls on the left and rises on the right.",
                  "zh": "把因式相乘，首项为 $x \\cdot x^2 = x^3$，所以次数为 $3$（奇），首项系数为正：图象左端向下、右端向上。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the end behavior of $f(x) = 3x^4 - x + 2$?",
                "zh": "$f(x) = 3x^4 - x + 2$ 的末端行为是什么？"
              },
              "choices": [
                "Both ends rise",
                "Both ends fall",
                "Falls left, rises right",
                "Rises left, falls right"
              ],
              "answer": 0,
              "explanation": {
                "en": "The degree $4$ is even and the leading coefficient $3$ is positive, so both ends rise, like $x^2$.",
                "zh": "次数 $4$ 为偶数，首项系数 $3$ 为正，因此两端都向上，类似 $x^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A polynomial has odd degree and a negative leading coefficient. Which describes its ends?",
                "zh": "某多项式的次数为奇数且首项系数为负。哪一项描述了它的两端？"
              },
              "choices": [
                "Both ends fall",
                "Both ends rise",
                "Rises left, falls right",
                "Falls left, rises right"
              ],
              "answer": 2,
              "explanation": {
                "en": "Odd degree gives ends pointing in opposite directions; a negative leading coefficient makes the right end fall, so it rises on the left and falls on the right.",
                "zh": "奇次使两端方向相反；首项系数为负使右端向下，因此左端向上、右端向下。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "At a zero of multiplicity $2$, the graph of a polynomial will:",
                "zh": "在重数为 $2$ 的零点处，多项式的图象将："
              },
              "choices": [
                "Cross straight through the x-axis",
                "Touch the x-axis and turn back",
                "Have a vertical asymptote",
                "Jump discontinuously"
              ],
              "answer": 1,
              "explanation": {
                "en": "Even multiplicity means the graph touches the axis and bounces rather than crossing. Polynomials are continuous, so there are no asymptotes or jumps.",
                "zh": "偶重数意味着图象与坐标轴相切并反弹，而不是穿过。多项式是连续的，因此不存在渐近线或跳跃。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the maximum number of turning points of a degree-$5$ polynomial?",
                "zh": "五次多项式最多有多少个拐点？"
              },
              "choices": [
                "$5$",
                "$3$",
                "$4$",
                "$6$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A degree-$n$ polynomial has at most $n - 1$ turning points, so a quintic has at most $5 - 1 = 4$.",
                "zh": "$n$ 次多项式最多有 $n - 1$ 个拐点，因此五次多项式最多有 $5 - 1 = 4$ 个。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which factored polynomial crosses the x-axis at $x = 3$ and only touches it at $x = -1$?",
                "zh": "哪个因式分解形式的多项式在 $x = 3$ 处穿过 x 轴、而在 $x = -1$ 处仅相切？"
              },
              "choices": [
                "$(x - 3)^2(x + 1)$",
                "$(x - 3)(x + 1)^2$",
                "$(x + 3)(x - 1)^2$",
                "$(x - 3)(x + 1)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Crossing needs odd multiplicity, so $x = 3$ must appear as $(x-3)^1$; touching needs even multiplicity, so $x = -1$ must appear as $(x+1)^2$.",
                "zh": "穿过需要奇重数，所以 $x = 3$ 必须以 $(x-3)^1$ 出现；相切需要偶重数，所以 $x = -1$ 必须以 $(x+1)^2$ 出现。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "State the degree of $f(x) = (x - 1)^2(x + 4)^3$. Give a whole number.",
                "zh": "求 $f(x) = (x - 1)^2(x + 4)^3$ 的次数。给出一个整数。"
              },
              "answer": "5",
              "accept": [
                "five"
              ],
              "explanation": {
                "en": "The degree is the sum of the exponents on the factors: $2 + 3 = 5$.",
                "zh": "次数是各因式指数之和：$2 + 3 = 5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = x(x - 5)^4$, what is the multiplicity of the zero at $x = 5$? Give a whole number.",
                "zh": "对于 $f(x) = x(x - 5)^4$，零点 $x = 5$ 的重数是多少？给出一个整数。"
              },
              "answer": "4",
              "accept": [
                "four"
              ],
              "explanation": {
                "en": "The factor $(x - 5)$ is raised to the $4$th power, so the multiplicity of that zero is $4$.",
                "zh": "因式 $(x - 5)$ 的指数为 $4$，所以该零点的重数是 $4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A polynomial in factored form is $f(x) = 2(x + 3)(x - 1)(x - 4)$. How many real x-intercepts does its graph have? Give a whole number.",
                "zh": "某多项式的因式分解形式为 $f(x) = 2(x + 3)(x - 1)(x - 4)$。其图象有多少个实数 x 轴截距？给出一个整数。"
              },
              "answer": "3",
              "accept": [
                "three"
              ],
              "explanation": {
                "en": "Each distinct linear factor gives one x-intercept: $x = -3$, $x = 1$, and $x = 4$, for $3$ intercepts.",
                "zh": "每个不同的一次因式给出一个 x 轴截距：$x = -3$、$x = 1$ 和 $x = 4$，共 $3$ 个截距。"
              }
            }
          ]
        },
        {
          "id": "polynomial-arithmetic-remainder-theorem",
          "title": "Polynomial Arithmetic, Division, and the Remainder Theorem",
          "titleZh": "多项式的运算、除法与余数定理",
          "content": [
            {
              "type": "h2",
              "en": "Operating on Polynomials",
              "zh": "多项式的运算"
            },
            {
              "type": "p",
              "en": "Polynomials behave much like integers: you can add, subtract, and multiply them and always get another polynomial. To add or subtract, combine like terms — terms with the same power of $x$. To multiply, distribute every term of one factor across every term of the other, then collect like terms. These skills set up polynomial division, which in turn unlocks the Remainder and Factor Theorems — powerful shortcuts for evaluating and factoring.",
              "zh": "多项式的表现很像整数：你可以对它们做加、减、乘运算，结果始终是另一个多项式。要做加减，就合并同类项——即 $x$ 的次数相同的项。要做乘法，就把一个因式的每一项分别乘以另一个因式的每一项，然后合并同类项。这些技能为多项式除法作铺垫，而除法又引出余数定理与因式定理——用于求值和因式分解的有力捷径。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Multiplying polynomials",
                "zh": "例题 1：多项式相乘"
              },
              "problem": {
                "en": "Expand $(2x - 3)(x^2 + 4x - 1)$.",
                "zh": "展开 $(2x - 3)(x^2 + 4x - 1)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute $2x$ and then $-3$ across the trinomial, then combine like terms:",
                  "zh": "先用 $2x$、再用 $-3$ 去乘这个三项式，然后合并同类项："
                },
                {
                  "type": "math",
                  "tex": "2x(x^2 + 4x - 1) = 2x^3 + 8x^2 - 2x"
                },
                {
                  "type": "math",
                  "tex": "-3(x^2 + 4x - 1) = -3x^2 - 12x + 3"
                },
                {
                  "type": "math",
                  "tex": "(2x - 3)(x^2 + 4x - 1) = 2x^3 + 5x^2 - 14x + 3"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Polynomial Long Division",
              "zh": "多项式长除法"
            },
            {
              "type": "p",
              "en": "When you divide one polynomial by another you get a quotient and a remainder, just like whole-number division. The result satisfies $\\text{dividend} = (\\text{divisor})(\\text{quotient}) + \\text{remainder}$, where the remainder has smaller degree than the divisor. Long division works with any divisor: divide the leading terms, multiply back, subtract, bring down the next term, and repeat.",
              "zh": "当你用一个多项式去除另一个多项式时，会得到商和余数，就像整数除法一样。其结果满足 $\\text{被除式} = (\\text{除式})(\\text{商}) + \\text{余式}$，其中余式的次数小于除式的次数。长除法适用于任意除式：用首项相除，乘回去，相减，落下一项，如此重复。"
            },
            {
              "type": "note",
              "en": "Always write the dividend in descending powers of $x$ and insert a $0$ coefficient for any missing power (for example, $x^3 + 1$ becomes $x^3 + 0x^2 + 0x + 1$). Skipping a placeholder is the most common source of alignment errors.",
              "zh": "务必把被除式按 $x$ 的降幂排列，并为缺失的次数补上系数 $0$（例如 $x^3 + 1$ 写成 $x^3 + 0x^2 + 0x + 1$）。漏掉占位项是最常见的对齐错误来源。"
            },
            {
              "type": "h3",
              "en": "Synthetic Division",
              "zh": "综合除法"
            },
            {
              "type": "p",
              "en": "When the divisor is linear of the form $x - c$, synthetic division is a fast shorthand that uses only the coefficients. Write $c$ to the left and the dividend's coefficients in a row. Bring down the first coefficient, multiply by $c$, add to the next coefficient, and repeat. The last number is the remainder; the others are the quotient's coefficients.",
              "zh": "当除式是形如 $x - c$ 的一次式时，综合除法是一种只用系数的快速简写法。把 $c$ 写在左边，被除式的系数排成一行。把第一个系数落下来，乘以 $c$，加到下一个系数上，如此重复。最后一个数是余数；其余的是商的系数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Synthetic division",
                "zh": "例题 2：综合除法"
              },
              "problem": {
                "en": "Divide $x^3 - 4x^2 + 2x + 5$ by $x - 3$ using synthetic division.",
                "zh": "用综合除法计算 $x^3 - 4x^2 + 2x + 5$ 除以 $x - 3$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use $c = 3$ and coefficients $1, -4, 2, 5$. Bring down $1$; $1 \\cdot 3 = 3$, add to $-4$ to get $-1$; $-1 \\cdot 3 = -3$, add to $2$ to get $-1$; $-1 \\cdot 3 = -3$, add to $5$ to get $2$.",
                  "zh": "取 $c = 3$，系数为 $1, -4, 2, 5$。落下 $1$；$1 \\cdot 3 = 3$，加到 $-4$ 得 $-1$；$-1 \\cdot 3 = -3$，加到 $2$ 得 $-1$；$-1 \\cdot 3 = -3$，加到 $5$ 得 $2$。"
                },
                {
                  "type": "math",
                  "tex": "x^3 - 4x^2 + 2x + 5 = (x - 3)(x^2 - x - 1) + 2"
                },
                {
                  "type": "p",
                  "en": "The quotient is $x^2 - x - 1$ and the remainder is $2$.",
                  "zh": "商是 $x^2 - x - 1$，余数是 $2$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Remainder and Factor Theorems",
              "zh": "余数定理与因式定理"
            },
            {
              "type": "p",
              "en": "The Remainder Theorem says that when you divide a polynomial $f(x)$ by $x - c$, the remainder equals $f(c)$. This gives a quick way to evaluate a polynomial: instead of substituting, run synthetic division and read the last number. In Example 2 the remainder was $2$, which means $f(3) = 2$ for $f(x) = x^3 - 4x^2 + 2x + 5$.",
              "zh": "余数定理指出：当你用 $x - c$ 去除多项式 $f(x)$ 时，余数等于 $f(c)$。这提供了一种求多项式值的快捷方法：不必代入，只需做综合除法并读取最后一个数。在例题 2 中余数是 $2$，这意味着对 $f(x) = x^3 - 4x^2 + 2x + 5$ 有 $f(3) = 2$。"
            },
            {
              "type": "math",
              "tex": "f(x) = (x - c)\\,q(x) + f(c)"
            },
            {
              "type": "note",
              "en": "The Factor Theorem is the special case where the remainder is $0$: $x - c$ is a factor of $f(x)$ if and only if $f(c) = 0$. So testing a value with synthetic division both evaluates $f(c)$ and checks whether $x - c$ divides evenly.",
              "zh": "因式定理是余数为 $0$ 的特殊情形：$x - c$ 是 $f(x)$ 的因式，当且仅当 $f(c) = 0$。因此用综合除法检验一个值，既求出了 $f(c)$，又检验了 $x - c$ 是否整除。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Simplify $(3x^2 - 2x + 1) + (x^2 + 5x - 4)$.",
                "zh": "化简 $(3x^2 - 2x + 1) + (x^2 + 5x - 4)$。"
              },
              "choices": [
                "$4x^2 + 3x - 3$",
                "$4x^2 + 7x - 3$",
                "$3x^2 + 3x - 3$",
                "$4x^2 + 3x + 5$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Combine like terms: $3x^2 + x^2 = 4x^2$, $-2x + 5x = 3x$, and $1 - 4 = -3$.",
                "zh": "合并同类项：$3x^2 + x^2 = 4x^2$，$-2x + 5x = 3x$，$1 - 4 = -3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Expand $(x + 5)(x - 2)$.",
                "zh": "展开 $(x + 5)(x - 2)$。"
              },
              "choices": [
                "$x^2 - 10$",
                "$x^2 - 3x - 10$",
                "$x^2 + 3x - 10$",
                "$x^2 + 7x - 10$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiply: $x \\cdot x = x^2$, the middle terms $-2x + 5x = 3x$, and $5 \\cdot (-2) = -10$.",
                "zh": "相乘：$x \\cdot x = x^2$，中间项 $-2x + 5x = 3x$，$5 \\cdot (-2) = -10$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "By the Remainder Theorem, the remainder when $f(x)$ is divided by $x - 4$ equals:",
                "zh": "根据余数定理，$f(x)$ 除以 $x - 4$ 的余数等于："
              },
              "choices": [
                "$f(-4)$",
                "$f(0)$",
                "$f(4)$",
                "$4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Dividing by $x - c$ gives remainder $f(c)$. Here $c = 4$, so the remainder is $f(4)$.",
                "zh": "除以 $x - c$ 得到余数 $f(c)$。此处 $c = 4$，故余数为 $f(4)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For synthetic division of a polynomial by $x + 2$, what value of $c$ do you use?",
                "zh": "用综合除法计算某多项式除以 $x + 2$ 时，应使用哪个 $c$ 值？"
              },
              "choices": [
                "$-2$",
                "$2$",
                "$\\frac{1}{2}$",
                "$0$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Write the divisor as $x - c$. Since $x + 2 = x - (-2)$, we have $c = -2$.",
                "zh": "把除式写成 $x - c$ 的形式。因为 $x + 2 = x - (-2)$，所以 $c = -2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f(2) = 0$ for a polynomial $f$, which statement must be true?",
                "zh": "若某多项式 $f$ 满足 $f(2) = 0$，则下列哪项一定成立？"
              },
              "choices": [
                "$x + 2$ is a factor of $f(x)$",
                "$f$ has degree $2$",
                "$x - 2$ is a factor of $f(x)$",
                "The remainder dividing by $x - 2$ is $2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the Factor Theorem, $f(c) = 0$ means $x - c$ is a factor. With $c = 2$, that factor is $x - 2$.",
                "zh": "根据因式定理，$f(c) = 0$ 意味着 $x - c$ 是因式。当 $c = 2$ 时，该因式为 $x - 2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = x^3 - 2x + 4$. Use the Remainder Theorem to find the remainder when $f$ is divided by $x - 1$. Give an integer.",
                "zh": "设 $f(x) = x^3 - 2x + 4$。用余数定理求 $f$ 除以 $x - 1$ 的余数。给出一个整数。"
              },
              "answer": "3",
              "accept": [
                "+3"
              ],
              "explanation": {
                "en": "The remainder is $f(1) = 1^3 - 2(1) + 4 = 1 - 2 + 4 = 3$.",
                "zh": "余数是 $f(1) = 1^3 - 2(1) + 4 = 1 - 2 + 4 = 3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Divide $x^2 + 7x + 10$ by $x + 2$. Enter the quotient in the form $x+a$ (for example, $x+5$).",
                "zh": "计算 $x^2 + 7x + 10$ 除以 $x + 2$。以 $x+a$ 的形式输入商（例如 $x+5$）。"
              },
              "answer": "x+5",
              "accept": [
                "x + 5",
                "(x+5)"
              ],
              "explanation": {
                "en": "Since $x^2 + 7x + 10 = (x + 2)(x + 5)$, dividing by $x + 2$ leaves the quotient $x + 5$ with remainder $0$.",
                "zh": "因为 $x^2 + 7x + 10 = (x + 2)(x + 5)$，除以 $x + 2$ 得到商 $x + 5$，余数为 $0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $g(x) = x^3 - 7x + 6$. Testing shows $g(1) = 0$. Is $x - 1$ a factor of $g(x)$? Answer yes or no.",
                "zh": "设 $g(x) = x^3 - 7x + 6$。检验得 $g(1) = 0$。$x - 1$ 是 $g(x)$ 的因式吗？回答 yes 或 no。"
              },
              "answer": "yes",
              "accept": [
                "y",
                "是"
              ],
              "explanation": {
                "en": "By the Factor Theorem, $g(1) = 0$ guarantees that $x - 1$ divides $g(x)$ evenly, so it is a factor.",
                "zh": "根据因式定理，$g(1) = 0$ 保证 $x - 1$ 整除 $g(x)$，所以它是一个因式。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-polynomial-equations",
      "title": "Unit 3: Polynomial Equations and the Fundamental Theorem of Algebra",
      "titleZh": "第三单元：多项式方程与代数基本定理",
      "lessons": [
        {
          "id": "solving-polynomial-equations",
          "title": "Solving Polynomial Equations by Factoring",
          "titleZh": "用因式分解解多项式方程",
          "content": [
            {
              "type": "h2",
              "en": "From Quadratics to Higher Degrees",
              "zh": "从二次方程到高次方程"
            },
            {
              "type": "p",
              "en": "In Secondary Math II you solved quadratic equations such as $x^2 - 5x + 6 = 0$ by factoring into $(x-2)(x-3)=0$ and reading off the solutions. This lesson extends that same strategy to polynomials of degree three, four, and beyond. The organizing principle never changes: move everything to one side so the equation reads $P(x)=0$, factor $P(x)$ as completely as possible, and then apply the zero-product property. What makes higher-degree work harder is only the factoring — so we build a toolkit of techniques for breaking a large polynomial into linear and quadratic pieces.",
              "zh": "在中学数学二中，你把像 $x^2 - 5x + 6 = 0$ 这样的二次方程因式分解成 $(x-2)(x-3)=0$，再读出解。本课把同样的策略推广到三次、四次乃至更高次的多项式。核心原则始终不变：把所有项移到一边，使方程写成 $P(x)=0$ 的形式，尽可能把 $P(x)$ 完全分解，然后运用零积性质。高次问题唯一更难的地方在于因式分解——因此我们要建立一套把大多项式拆成一次和二次因式的技巧工具箱。"
            },
            {
              "type": "note",
              "en": "The zero-product property is the engine behind every factoring method: if a product of factors equals $0$, then at least one factor must equal $0$. So once $P(x)$ is fully factored, set each factor equal to zero and solve the small equations separately.",
              "zh": "零积性质是所有因式分解方法背后的引擎：如果若干因式的乘积等于 $0$，那么至少有一个因式必须等于 $0$。因此一旦把 $P(x)$ 完全分解，就令每个因式等于零，分别求解这些小方程。"
            },
            {
              "type": "h3",
              "en": "Factoring by Grouping",
              "zh": "分组分解法"
            },
            {
              "type": "p",
              "en": "When a polynomial has four terms, try grouping them in pairs, factoring each pair, and looking for a common binomial factor. For $x^3 + 2x^2 - 9x - 18$, group as $(x^3 + 2x^2) + (-9x - 18) = x^2(x+2) - 9(x+2) = (x+2)(x^2 - 9)$. The leftover $x^2 - 9$ is a difference of squares, so the full factorization is $(x+2)(x-3)(x+3)$.",
              "zh": "当一个多项式有四项时，可以尝试把它们两两分组，先分别对每组提取公因式，再寻找公共的二项式因式。对于 $x^3 + 2x^2 - 9x - 18$，分组为 $(x^3 + 2x^2) + (-9x - 18) = x^2(x+2) - 9(x+2) = (x+2)(x^2 - 9)$。剩下的 $x^2 - 9$ 是平方差，因此完全分解为 $(x+2)(x-3)(x+3)$。"
            },
            {
              "type": "h3",
              "en": "Sum and Difference of Cubes",
              "zh": "立方和与立方差"
            },
            {
              "type": "p",
              "en": "Two patterns handle cubes directly. Memorize them and watch for perfect-cube terms like $8=2^3$ or $27=3^3$:",
              "zh": "有两个公式可以直接处理立方项。记住它们，并留意像 $8=2^3$ 或 $27=3^3$ 这样的完全立方项："
            },
            {
              "type": "math",
              "tex": "a^3 + b^3 = (a+b)(a^2 - ab + b^2)"
            },
            {
              "type": "math",
              "tex": "a^3 - b^3 = (a-b)(a^2 + ab + b^2)"
            },
            {
              "type": "note",
              "en": "The sign inside the binomial matches the sign in the original, but the middle term of the quadratic factor takes the opposite sign, and the quadratic factor is usually prime (does not factor further over the reals). A memory aid is \"SOAP\": Same, Opposite, Always Positive.",
              "zh": "二项式中的符号与原式中的符号相同，但二次因式的中间项取相反的符号，而这个二次因式通常是不可约的（在实数范围内不能再分解）。可用口诀\"SOAP\"记忆：相同、相反、永远为正。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Difference of cubes",
                "zh": "例题 1：立方差"
              },
              "problem": {
                "en": "Solve $x^3 - 27 = 0$ over the real numbers.",
                "zh": "在实数范围内解 $x^3 - 27 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Recognize $27 = 3^3$, so this is a difference of cubes with $a=x$, $b=3$:",
                  "zh": "注意 $27 = 3^3$，因此这是一个立方差，其中 $a=x$，$b=3$："
                },
                {
                  "type": "math",
                  "tex": "x^3 - 27 = (x-3)(x^2 + 3x + 9) = 0"
                },
                {
                  "type": "p",
                  "en": "By the zero-product property, $x-3=0$ gives $x=3$. The factor $x^2+3x+9$ has discriminant $9 - 36 = -27 < 0$, so it produces no real solutions. The only real solution is $x=3$.",
                  "zh": "由零积性质，$x-3=0$ 给出 $x=3$。因式 $x^2+3x+9$ 的判别式为 $9 - 36 = -27 < 0$，因此没有实数解。唯一的实数解是 $x=3$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Rational Root Theorem",
              "zh": "有理根定理"
            },
            {
              "type": "p",
              "en": "When no obvious pattern applies, the Rational Root Theorem narrows the search. If a polynomial with integer coefficients has a rational zero $\\frac{p}{q}$ in lowest terms, then $p$ divides the constant term and $q$ divides the leading coefficient. You test these candidates (by synthetic division or substitution) to find one that works, then divide it out to reduce the degree.",
              "zh": "当没有明显的公式可用时，有理根定理可以缩小搜索范围。如果一个整系数多项式有既约有理零点 $\\frac{p}{q}$，那么 $p$ 整除常数项，$q$ 整除首项系数。你把这些候选值逐一代入检验（用综合除法或直接代入），找到一个成立的，再把它除掉以降低次数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Using the Rational Root Theorem",
                "zh": "例题 2：使用有理根定理"
              },
              "problem": {
                "en": "Solve $x^3 - 4x^2 + x + 6 = 0$.",
                "zh": "解 $x^3 - 4x^2 + x + 6 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The constant is $6$ and the leading coefficient is $1$, so candidate rational roots are $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Test $x=-1$: $(-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$. So $x=-1$ is a root and $(x+1)$ is a factor.",
                  "zh": "常数项是 $6$，首项系数是 $1$，因此有理根候选为 $\\pm 1, \\pm 2, \\pm 3, \\pm 6$。检验 $x=-1$：$(-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$。所以 $x=-1$ 是根，$(x+1)$ 是一个因式。"
                },
                {
                  "type": "p",
                  "en": "Dividing out $(x+1)$ leaves the quotient $x^2 - 5x + 6$, which factors as $(x-2)(x-3)$. Thus $x^3 - 4x^2 + x + 6 = (x+1)(x-2)(x-3)$ and the solutions are $x = -1, 2, 3$.",
                  "zh": "除去 $(x+1)$ 后，商为 $x^2 - 5x + 6$，可分解为 $(x-2)(x-3)$。因此 $x^3 - 4x^2 + x + 6 = (x+1)(x-2)(x-3)$，解为 $x = -1, 2, 3$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Across all of these methods the workflow is identical: factor completely, set each factor to zero, and solve. A degree-$n$ polynomial can have at most $n$ real solutions, which gives you a target for how many factors to hunt for.",
              "zh": "在所有这些方法中，流程都是一样的：完全分解，令每个因式等于零，再求解。一个 $n$ 次多项式最多有 $n$ 个实数解，这就为你要寻找的因式数量提供了目标。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which is the complete factorization of $x^2 - 16$?",
                "zh": "$x^2 - 16$ 的完全分解是哪一个？"
              },
              "choices": [
                "$(x-4)^2$",
                "$(x-4)(x+4)$",
                "$(x-8)(x+2)$",
                "$(x^2-4)(x+4)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "This is a difference of squares $a^2-b^2=(a-b)(a+b)$ with $a=x$ and $b=4$, giving $(x-4)(x+4)$.",
                "zh": "这是平方差 $a^2-b^2=(a-b)(a+b)$，其中 $a=x$，$b=4$，得到 $(x-4)(x+4)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $x(x-5)(x+2)=0$.",
                "zh": "解 $x(x-5)(x+2)=0$。"
              },
              "choices": [
                "$x=0,5,-2$",
                "$x=0,-5,2$",
                "$x=5,-2$",
                "$x=0,5,2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "By the zero-product property, set each factor to zero: $x=0$, $x-5=0\\Rightarrow x=5$, and $x+2=0\\Rightarrow x=-2$.",
                "zh": "由零积性质，令每个因式为零：$x=0$，$x-5=0\\Rightarrow x=5$，$x+2=0\\Rightarrow x=-2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which factorization uses the sum-of-cubes pattern for $x^3 + 8$?",
                "zh": "对 $x^3 + 8$ 使用立方和公式，得到哪个分解？"
              },
              "choices": [
                "$(x+2)(x^2+2x+4)$",
                "$(x+2)(x^2-2x+4)$",
                "$(x-2)(x^2+2x+4)$",
                "$(x+2)(x^2-4x+4)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "With $a=x$, $b=2$: $a^3+b^3=(a+b)(a^2-ab+b^2)=(x+2)(x^2-2x+4)$. The binomial sign matches the original; the middle term is opposite.",
                "zh": "取 $a=x$，$b=2$：$a^3+b^3=(a+b)(a^2-ab+b^2)=(x+2)(x^2-2x+4)$。二项式符号与原式相同，中间项符号相反。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "By the Rational Root Theorem, which is NOT a possible rational root of $2x^3 - 3x^2 + 4x - 6$?",
                "zh": "根据有理根定理，下列哪个不是 $2x^3 - 3x^2 + 4x - 6$ 可能的有理根？"
              },
              "choices": [
                "$\\frac{3}{2}$",
                "$2$",
                "$\\frac{1}{3}$",
                "$6$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Candidates are $\\frac{p}{q}$ with $p$ dividing $6$ and $q$ dividing $2$: numerators from $\\{1,2,3,6\\}$, denominators from $\\{1,2\\}$. A denominator of $3$ is impossible, so $\\frac{1}{3}$ cannot occur.",
                "zh": "候选为 $\\frac{p}{q}$，其中 $p$ 整除 $6$，$q$ 整除 $2$：分子取自 $\\{1,2,3,6\\}$，分母取自 $\\{1,2\\}$。分母为 $3$ 不可能，所以 $\\frac{1}{3}$ 不会出现。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Factor by grouping: $x^3 - 3x^2 - 4x + 12$.",
                "zh": "用分组分解法分解：$x^3 - 3x^2 - 4x + 12$。"
              },
              "choices": [
                "$(x-3)(x-2)(x+2)$",
                "$(x+3)(x-2)(x+2)$",
                "$(x-3)(x^2-4)^2$",
                "$(x-3)(x-4)(x+1)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Group: $x^2(x-3) - 4(x-3) = (x-3)(x^2-4) = (x-3)(x-2)(x+2)$, using the difference of squares on $x^2-4$.",
                "zh": "分组：$x^2(x-3) - 4(x-3) = (x-3)(x^2-4) = (x-3)(x-2)(x+2)$，其中对 $x^2-4$ 用平方差公式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the only real solution of $x^3 - 8 = 0$. Give an integer.",
                "zh": "求 $x^3 - 8 = 0$ 的唯一实数解。填一个整数。"
              },
              "answer": "2",
              "accept": [
                "x=2"
              ],
              "explanation": {
                "en": "$x^3-8=(x-2)(x^2+2x+4)$. The quadratic factor has discriminant $4-16<0$, so the only real solution comes from $x-2=0$, giving $x=2$.",
                "zh": "$x^3-8=(x-2)(x^2+2x+4)$。二次因式的判别式为 $4-16<0$，因此唯一实数解来自 $x-2=0$，即 $x=2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "One solution of $x^3 - 2x^2 - 5x + 6 = 0$ is $x=1$. List all three solutions from least to greatest, separated by commas.",
                "zh": "$x^3 - 2x^2 - 5x + 6 = 0$ 的一个解是 $x=1$。按从小到大列出全部三个解，用逗号分隔。"
              },
              "answer": "-2,1,3",
              "accept": [
                "-2, 1, 3",
                "x=-2,1,3"
              ],
              "explanation": {
                "en": "Dividing out $(x-1)$ gives $x^2 - x - 6 = (x-3)(x+2)$. So the solutions are $x=1,3,-2$, which in order are $-2, 1, 3$.",
                "zh": "除去 $(x-1)$ 得到 $x^2 - x - 6 = (x-3)(x+2)$。因此解为 $x=1,3,-2$，从小到大为 $-2, 1, 3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many real solutions (counting each distinct value once) does $x^4 - 5x^2 + 4 = 0$ have? Give an integer.",
                "zh": "$x^4 - 5x^2 + 4 = 0$ 有多少个不同的实数解？填一个整数。"
              },
              "answer": "4",
              "accept": [
                "four"
              ],
              "explanation": {
                "en": "Let $u=x^2$: $u^2-5u+4=(u-1)(u-4)=0$, so $x^2=1$ or $x^2=4$, giving $x=\\pm 1$ and $x=\\pm 2$ — four distinct real solutions.",
                "zh": "令 $u=x^2$：$u^2-5u+4=(u-1)(u-4)=0$，所以 $x^2=1$ 或 $x^2=4$，得 $x=\\pm 1$ 和 $x=\\pm 2$——共四个不同的实数解。"
              }
            }
          ]
        },
        {
          "id": "complex-zeros-fundamental-theorem",
          "title": "Complex Zeros and the Fundamental Theorem of Algebra",
          "titleZh": "复数零点与代数基本定理",
          "content": [
            {
              "type": "h2",
              "en": "Counting Every Zero",
              "zh": "数清每一个零点"
            },
            {
              "type": "p",
              "en": "In the last lesson some quadratic factors, such as $x^2 + 3x + 9$, gave no real solutions. Once we allow complex numbers of the form $a + bi$ (where $i^2 = -1$), those \"missing\" solutions reappear. The Fundamental Theorem of Algebra makes this precise and complete: it guarantees exactly how many zeros a polynomial has, so nothing is ever truly lost — you just have to count in the complex number system.",
              "zh": "在上一课中，有些二次因式（例如 $x^2 + 3x + 9$）没有实数解。一旦我们允许形如 $a + bi$（其中 $i^2 = -1$）的复数，这些\"消失的\"解就重新出现了。代数基本定理把这一点说得既精确又完整：它保证了一个多项式究竟有多少个零点，因此没有任何解会真正丢失——你只需在复数系统中去数。"
            },
            {
              "type": "h3",
              "en": "The Fundamental Theorem of Algebra",
              "zh": "代数基本定理"
            },
            {
              "type": "p",
              "en": "The theorem states that every polynomial of degree $n \\ge 1$ with complex coefficients has at least one complex zero. Applying it repeatedly — each time factoring out a linear piece and reducing the degree by one — yields the counting form used most often:",
              "zh": "该定理指出：每个次数 $n \\ge 1$ 的复系数多项式都至少有一个复数零点。反复运用它——每次提取一个一次因式并把次数降低一——就得到最常用的计数形式："
            },
            {
              "type": "note",
              "en": "A polynomial of degree $n$ has exactly $n$ zeros in the complex numbers, counted with multiplicity. \"Multiplicity\" means a repeated factor is counted as often as it appears: in $(x-2)^3(x+1)$, the zero $2$ has multiplicity $3$ and $-1$ has multiplicity $1$, for a total of $4$ zeros matching the degree $4$.",
              "zh": "一个 $n$ 次多项式在复数范围内恰好有 $n$ 个零点（按重数计）。\"重数\"是指重复出现的因式要按它出现的次数计算：在 $(x-2)^3(x+1)$ 中，零点 $2$ 的重数为 $3$，$-1$ 的重数为 $1$，共 $4$ 个零点，与 $4$ 次相符。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Counting zeros with multiplicity",
                "zh": "例题 1：按重数数零点"
              },
              "problem": {
                "en": "State the degree and list every zero with its multiplicity for $P(x) = (x-5)^2(x^2+9)$.",
                "zh": "写出 $P(x) = (x-5)^2(x^2+9)$ 的次数，并列出每个零点及其重数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiplying out mentally, the degree is $2 + 2 = 4$. From $(x-5)^2$ the zero $x=5$ has multiplicity $2$. From $x^2+9=0$ we get $x^2=-9$, so $x = \\pm 3i$, each with multiplicity $1$.",
                  "zh": "在心里展开可知次数为 $2 + 2 = 4$。由 $(x-5)^2$ 得零点 $x=5$，重数为 $2$。由 $x^2+9=0$ 得 $x^2=-9$，所以 $x = \\pm 3i$，各自重数为 $1$。"
                },
                {
                  "type": "p",
                  "en": "Total: $2 + 1 + 1 = 4$ zeros, matching the degree. The zeros are $5$ (double), $3i$, and $-3i$.",
                  "zh": "合计：$2 + 1 + 1 = 4$ 个零点，与次数一致。零点为 $5$（二重）、$3i$ 和 $-3i$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Complex Conjugate Pairs",
              "zh": "共轭复数对"
            },
            {
              "type": "p",
              "en": "When a polynomial has real coefficients, complex zeros never appear alone. If $a+bi$ is a zero, then its conjugate $a-bi$ is automatically a zero as well. This is why the non-real zeros above came as the pair $\\pm 3i$. A useful consequence: a real-coefficient polynomial of odd degree must have at least one real zero, because complex zeros are used up in pairs and one is always left over.",
              "zh": "当多项式的系数都是实数时，复数零点绝不会单独出现。如果 $a+bi$ 是零点，那么它的共轭 $a-bi$ 也自动是零点。这正是上面的非实数零点会以 $\\pm 3i$ 成对出现的原因。一个有用的推论：奇数次实系数多项式必然至少有一个实数零点，因为复数零点是成对消耗的，总会剩下一个。"
            },
            {
              "type": "note",
              "en": "The conjugate-pair rule requires real coefficients. Each conjugate pair $a\\pm bi$ multiplies back into a real quadratic factor: $(x-(a+bi))(x-(a-bi)) = x^2 - 2ax + (a^2+b^2)$, which has no $i$ in it. This is how real polynomials can factor into real linear and real quadratic pieces only.",
              "zh": "共轭对法则要求系数为实数。每一对共轭 $a\\pm bi$ 相乘会还原为一个实二次因式：$(x-(a+bi))(x-(a-bi)) = x^2 - 2ax + (a^2+b^2)$，其中不含 $i$。这就是实系数多项式能够只分解为实一次因式和实二次因式的原因。"
            },
            {
              "type": "h3",
              "en": "Building a Polynomial from Its Zeros",
              "zh": "由零点构造多项式"
            },
            {
              "type": "p",
              "en": "The process runs in reverse too. Given a list of zeros, form the linear factor $(x - r)$ for each zero $r$ and multiply. If real coefficients are required, remember to include the conjugate of any non-real zero. A leading coefficient may be chosen to fit an additional condition, such as passing through a particular point.",
              "zh": "这个过程也可以反过来做。给定一组零点，为每个零点 $r$ 写出一次因式 $(x - r)$，再相乘。如果要求系数为实数，就要记得把任何非实零点的共轭也加进去。可以选取一个首项系数来满足附加条件，比如通过某个特定的点。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Writing a polynomial from zeros",
                "zh": "例题 2：由零点写出多项式"
              },
              "problem": {
                "en": "Write a polynomial of least degree with real coefficients whose zeros include $2$ and $1 - i$.",
                "zh": "写出一个次数最小、系数为实数的多项式，使其零点包含 $2$ 和 $1 - i$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Because coefficients are real, the conjugate $1 + i$ must also be a zero. The three factors are $(x-2)$, $(x-(1-i))$, and $(x-(1+i))$.",
                  "zh": "因为系数为实数，共轭 $1 + i$ 也必须是零点。三个因式为 $(x-2)$、$(x-(1-i))$ 和 $(x-(1+i))$。"
                },
                {
                  "type": "p",
                  "en": "Multiply the conjugate pair first: $(x-(1-i))(x-(1+i)) = x^2 - 2x + (1^2 + 1^2) = x^2 - 2x + 2$.",
                  "zh": "先把共轭对相乘：$(x-(1-i))(x-(1+i)) = x^2 - 2x + (1^2 + 1^2) = x^2 - 2x + 2$。"
                },
                {
                  "type": "math",
                  "tex": "P(x) = (x-2)(x^2 - 2x + 2) = x^3 - 4x^2 + 6x - 4"
                },
                {
                  "type": "p",
                  "en": "This degree-$3$ polynomial has real coefficients and the required zeros. Any nonzero constant multiple of it works too.",
                  "zh": "这个 $3$ 次多项式系数为实数，且具有所要求的零点。它的任意非零常数倍也都满足条件。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "How many zeros, counted with multiplicity, does a degree-$5$ polynomial have in the complex numbers?",
                "zh": "一个 $5$ 次多项式在复数范围内按重数计有多少个零点？"
              },
              "choices": [
                "$3$",
                "$4$",
                "$5$",
                "It depends on the coefficients"
              ],
              "answer": 2,
              "explanation": {
                "en": "The Fundamental Theorem of Algebra guarantees exactly $n$ zeros counted with multiplicity for a degree-$n$ polynomial, so degree $5$ has exactly $5$.",
                "zh": "代数基本定理保证 $n$ 次多项式按重数计恰有 $n$ 个零点，所以 $5$ 次恰有 $5$ 个。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A polynomial with real coefficients has $4 - 3i$ as a zero. Which number must also be a zero?",
                "zh": "一个实系数多项式以 $4 - 3i$ 为零点。下列哪个数也必然是零点？"
              },
              "choices": [
                "$4 + 3i$",
                "$-4 - 3i$",
                "$3 - 4i$",
                "$-4 + 3i$"
              ],
              "answer": 0,
              "explanation": {
                "en": "For real coefficients, non-real zeros come in conjugate pairs. The conjugate of $4-3i$ is $4+3i$ (same real part, opposite imaginary part).",
                "zh": "对于实系数，非实零点成共轭对出现。$4-3i$ 的共轭是 $4+3i$（实部相同，虚部相反）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $P(x) = (x+1)^3(x-4)$, what is the multiplicity of the zero $x = -1$?",
                "zh": "对于 $P(x) = (x+1)^3(x-4)$，零点 $x = -1$ 的重数是多少？"
              },
              "choices": [
                "$1$",
                "$2$",
                "$3$",
                "$4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The factor $(x+1)$ appears to the third power, so the zero $x=-1$ has multiplicity $3$.",
                "zh": "因式 $(x+1)$ 出现了三次方，因此零点 $x=-1$ 的重数为 $3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which product of a conjugate pair gives a real quadratic with zeros $\\pm 2i$?",
                "zh": "哪一个共轭对的乘积给出零点为 $\\pm 2i$ 的实二次式？"
              },
              "choices": [
                "$x^2 - 4$",
                "$x^2 + 4$",
                "$x^2 + 2$",
                "$x^2 - 2x + 4$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$(x-2i)(x+2i) = x^2 - (2i)^2 = x^2 - (-4) = x^2 + 4$. Setting it to zero gives $x^2=-4$, i.e. $x=\\pm 2i$.",
                "zh": "$(x-2i)(x+2i) = x^2 - (2i)^2 = x^2 - (-4) = x^2 + 4$。令其为零得 $x^2=-4$，即 $x=\\pm 2i$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A degree-$3$ polynomial with real coefficients has zeros $2i$ and $5$. What is its third zero?",
                "zh": "一个 $3$ 次实系数多项式有零点 $2i$ 和 $5$。它的第三个零点是什么？"
              },
              "choices": [
                "$-5$",
                "$-2i$",
                "$2i$",
                "$0$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Real coefficients force the conjugate of $2i$, which is $-2i$, to be a zero. That accounts for all three zeros: $2i$, $-2i$, and $5$.",
                "zh": "实系数迫使 $2i$ 的共轭 $-2i$ 也是零点。这样就凑齐了全部三个零点：$2i$、$-2i$ 和 $5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Counting multiplicity, how many zeros does $P(x) = (x-3)^2(x^2+1)$ have? Give an integer.",
                "zh": "按重数计，$P(x) = (x-3)^2(x^2+1)$ 有多少个零点？填一个整数。"
              },
              "answer": "4",
              "accept": [
                "four"
              ],
              "explanation": {
                "en": "The degree is $2+2=4$, so there are $4$ zeros: $x=3$ with multiplicity $2$, plus $x=i$ and $x=-i$.",
                "zh": "次数为 $2+2=4$，因此共有 $4$ 个零点：$x=3$（重数 $2$），以及 $x=i$ 和 $x=-i$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The quadratic $x^2 - 6x + 13$ has a zero $3 + bi$ with $b>0$. Find $b$ (an integer).",
                "zh": "二次式 $x^2 - 6x + 13$ 有零点 $3 + bi$，其中 $b>0$。求 $b$（整数）。"
              },
              "answer": "2",
              "accept": [
                "b=2"
              ],
              "explanation": {
                "en": "By the quadratic formula, $x = \\frac{6 \\pm \\sqrt{36-52}}{2} = \\frac{6 \\pm \\sqrt{-16}}{2} = 3 \\pm 2i$. So $b=2$.",
                "zh": "由求根公式，$x = \\frac{6 \\pm \\sqrt{36-52}}{2} = \\frac{6 \\pm \\sqrt{-16}}{2} = 3 \\pm 2i$。所以 $b=2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Expand $(x-3)(x^2+4)$ and give the constant term (the value of the polynomial's $y$-intercept) as an integer.",
                "zh": "展开 $(x-3)(x^2+4)$，把常数项（即多项式 $y$ 轴截距的值）写成整数。"
              },
              "answer": "-12",
              "accept": [
                "−12"
              ],
              "explanation": {
                "en": "$(x-3)(x^2+4) = x^3 + 4x - 3x^2 - 12 = x^3 - 3x^2 + 4x - 12$. The constant term is $-3 \\cdot 4 = -12$.",
                "zh": "$(x-3)(x^2+4) = x^3 + 4x - 3x^2 - 12 = x^3 - 3x^2 + 4x - 12$。常数项为 $-3 \\cdot 4 = -12$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-rational-functions",
      "title": "Unit 4: Rational Expressions and Functions",
      "titleZh": "第四单元：有理式与有理函数",
      "lessons": [
        {
          "id": "simplifying-rational-expressions",
          "title": "Simplifying and Operating with Rational Expressions",
          "titleZh": "有理式的化简与运算",
          "content": [
            {
              "type": "h2",
              "en": "What Is a Rational Expression?",
              "zh": "什么是有理式？"
            },
            {
              "type": "p",
              "en": "A rational expression is a ratio of two polynomials, $\\frac{P(x)}{Q(x)}$, where $Q(x)$ is not the zero polynomial. Rational expressions behave almost exactly like the numerical fractions you learned in middle school: you simplify by canceling common factors, you multiply straight across, you divide by multiplying by the reciprocal, and you add or subtract only after finding a common denominator. The one new habit that honors work demands is tracking the domain — the values of $x$ that would make any denominator equal to zero must be excluded.",
              "zh": "有理式是两个多项式之比 $\\frac{P(x)}{Q(x)}$，其中 $Q(x)$ 不是零多项式。有理式的行为几乎和你在初中学过的数值分数完全一样：通过约去公因式来化简，分子分母直接相乘，除法就乘以倒数，而只有在通分之后才能做加减。荣誉级课程要求养成的一个新习惯是追踪定义域——凡是会让任何分母等于零的 $x$ 值都必须排除。"
            },
            {
              "type": "note",
              "en": "You may only cancel common FACTORS, never common terms. In $\\frac{x+3}{x}$ you cannot cancel the $x$'s, because $x$ is a term added to $3$ in the numerator, not a factor of the whole numerator.",
              "zh": "你只能约去公因式，绝不能约去公用的项。在 $\\frac{x+3}{x}$ 中你不能把两个 $x$ 约掉，因为分子里的 $x$ 是与 $3$ 相加的一个项，而不是整个分子的因式。"
            },
            {
              "type": "h3",
              "en": "Simplifying by Factoring",
              "zh": "通过因式分解化简"
            },
            {
              "type": "p",
              "en": "To simplify a rational expression, factor the numerator and denominator completely, then divide out any factor that appears in both. Whatever restrictions the ORIGINAL denominator placed on the domain still apply, even if the offending factor cancels.",
              "zh": "要化简有理式，先把分子和分母完全因式分解，再约去在两者中都出现的因式。原始分母对定义域施加的限制依然有效，即使那个引发限制的因式被约掉了也一样。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Simplify and state restrictions",
                "zh": "例题 1：化简并指出限制"
              },
              "problem": {
                "en": "Simplify $\\frac{x^2 - 9}{x^2 - x - 6}$ and state the domain restrictions.",
                "zh": "化简 $\\frac{x^2 - 9}{x^2 - x - 6}$ 并指出定义域限制。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor both parts. The numerator is a difference of squares, and the denominator factors into two binomials:",
                  "zh": "把两部分都因式分解。分子是平方差，分母分解为两个二项式："
                },
                {
                  "type": "math",
                  "tex": "\\frac{x^2-9}{x^2-x-6} = \\frac{(x-3)(x+3)}{(x-3)(x+2)}"
                },
                {
                  "type": "p",
                  "en": "The original denominator is zero at $x = 3$ and $x = -2$, so both are excluded. Cancel the common factor $(x-3)$:",
                  "zh": "原分母在 $x = 3$ 和 $x = -2$ 处为零，因此两者都要排除。约去公因式 $(x-3)$："
                },
                {
                  "type": "math",
                  "tex": "= \\frac{x+3}{x+2}, \\quad x \\neq 3,\\ x \\neq -2"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Multiplying and Dividing",
              "zh": "乘法与除法"
            },
            {
              "type": "p",
              "en": "To multiply, factor everything, cancel any factor common to a numerator and a denominator anywhere in the product, then multiply the survivors. To divide, multiply by the reciprocal of the second fraction (flip it), then proceed as multiplication. Never divide by zero, so the numerator of a divisor also contributes domain restrictions once it is flipped.",
              "zh": "做乘法时，先把所有部分因式分解，约去乘积中任意分子与任意分母的公因式，再把剩下的相乘。做除法时，乘以第二个分数的倒数（把它翻转），然后按乘法处理。因为不能除以零，所以除式的分子在翻转后也会带来定义域限制。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Divide rational expressions",
                "zh": "例题 2：有理式的除法"
              },
              "problem": {
                "en": "Simplify $\\frac{x^2-4}{x+5} \\div \\frac{x+2}{x^2-25}$.",
                "zh": "化简 $\\frac{x^2-4}{x+5} \\div \\frac{x+2}{x^2-25}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply by the reciprocal, then factor every polynomial:",
                  "zh": "乘以倒数，再把每个多项式因式分解："
                },
                {
                  "type": "math",
                  "tex": "\\frac{(x-2)(x+2)}{x+5} \\cdot \\frac{(x-5)(x+5)}{x+2}"
                },
                {
                  "type": "p",
                  "en": "Cancel the common factors $(x+2)$ and $(x+5)$:",
                  "zh": "约去公因式 $(x+2)$ 与 $(x+5)$："
                },
                {
                  "type": "math",
                  "tex": "= (x-2)(x-5)"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Adding, Subtracting, and Complex Fractions",
              "zh": "加法、减法与繁分数"
            },
            {
              "type": "p",
              "en": "To add or subtract, rewrite each fraction over the least common denominator (LCD), which is the product of the highest power of each distinct factor. Combine the numerators over the LCD, then simplify. A complex fraction (a fraction whose numerator or denominator itself contains fractions) is simplified fastest by multiplying the top and bottom by the LCD of all the little denominators.",
              "zh": "做加减法时，把每个分数改写到最小公分母（LCD）之上，最小公分母是各个不同因式的最高次幂之积。把分子合并到最小公分母之上，再化简。繁分数（分子或分母本身还含有分数的分数）最快的化简方法是把整个上下都乘以所有小分母的最小公分母。"
            },
            {
              "type": "note",
              "en": "When subtracting, distribute the minus sign to EVERY term of the second numerator. Forgetting to change the sign of a trailing term is the single most common error in this lesson.",
              "zh": "做减法时，要把负号分配到第二个分子的每一项上。忘记改变末项的符号是本节课最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Subtract with unlike denominators",
                "zh": "例题 3：异分母相减"
              },
              "problem": {
                "en": "Simplify $\\frac{5}{x-2} - \\frac{3}{x}$.",
                "zh": "化简 $\\frac{5}{x-2} - \\frac{3}{x}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The LCD is $x(x-2)$. Rewrite each fraction, then subtract, distributing the minus sign:",
                  "zh": "最小公分母是 $x(x-2)$。改写每个分数后相减，并分配负号："
                },
                {
                  "type": "math",
                  "tex": "\\frac{5x}{x(x-2)} - \\frac{3(x-2)}{x(x-2)} = \\frac{5x - 3x + 6}{x(x-2)} = \\frac{2x+6}{x(x-2)}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\frac{6x^3}{9x^5}$.",
                "zh": "化简 $\\frac{6x^3}{9x^5}$。"
              },
              "choices": [
                "$\\frac{2}{3x^2}$",
                "$\\frac{2x^2}{3}$",
                "$\\frac{3}{2x^2}$",
                "$\\frac{2}{3}x^8$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Divide the coefficients: $6/9 = 2/3$. Subtract exponents: $x^{3-5} = x^{-2}$, which moves to the denominator as $\\frac{1}{x^2}$.",
                "zh": "系数相除：$6/9 = 2/3$。指数相减：$x^{3-5} = x^{-2}$，移到分母成为 $\\frac{1}{x^2}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For what values of $x$ is $\\frac{x+1}{x^2-16}$ undefined?",
                "zh": "$\\frac{x+1}{x^2-16}$ 在哪些 $x$ 值处无定义？"
              },
              "choices": [
                "$x = -1$",
                "$x = 4$ only",
                "$x = 4$ or $x = -4$",
                "$x = 16$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A rational expression is undefined where its denominator is zero. Set $x^2-16=0$, so $(x-4)(x+4)=0$, giving $x=4$ or $x=-4$. The numerator does not affect the domain.",
                "zh": "有理式在分母为零处无定义。令 $x^2-16=0$，即 $(x-4)(x+4)=0$，得 $x=4$ 或 $x=-4$。分子不影响定义域。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\frac{x^2 - x - 6}{x^2 - 9}$.",
                "zh": "化简 $\\frac{x^2 - x - 6}{x^2 - 9}$。"
              },
              "choices": [
                "$\\frac{x-3}{x+3}$",
                "$\\frac{x+2}{x+3}$",
                "$\\frac{x-2}{x-3}$",
                "$\\frac{x+2}{x-3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Factor: $\\frac{(x-3)(x+2)}{(x-3)(x+3)}$. Cancel the common $(x-3)$ to get $\\frac{x+2}{x+3}$.",
                "zh": "因式分解：$\\frac{(x-3)(x+2)}{(x-3)(x+3)}$。约去公因式 $(x-3)$，得 $\\frac{x+2}{x+3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Multiply $\\frac{x+4}{x-1} \\cdot \\frac{x^2-1}{x^2+4x}$.",
                "zh": "计算 $\\frac{x+4}{x-1} \\cdot \\frac{x^2-1}{x^2+4x}$。"
              },
              "choices": [
                "$\\frac{x-1}{x}$",
                "$x+1$",
                "$\\frac{x+1}{x}$",
                "$\\frac{x}{x+1}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Factor: $\\frac{x+4}{x-1} \\cdot \\frac{(x-1)(x+1)}{x(x+4)}$. Cancel $(x+4)$ and $(x-1)$, leaving $\\frac{x+1}{x}$.",
                "zh": "因式分解：$\\frac{x+4}{x-1} \\cdot \\frac{(x-1)(x+1)}{x(x+4)}$。约去 $(x+4)$ 与 $(x-1)$，剩下 $\\frac{x+1}{x}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Add $\\frac{2}{x} + \\frac{3}{x+1}$.",
                "zh": "计算 $\\frac{2}{x} + \\frac{3}{x+1}$。"
              },
              "choices": [
                "$\\frac{5}{2x+1}$",
                "$\\frac{5x+2}{x(x+1)}$",
                "$\\frac{6}{x(x+1)}$",
                "$\\frac{5}{x(x+1)}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The LCD is $x(x+1)$. Rewrite: $\\frac{2(x+1)}{x(x+1)} + \\frac{3x}{x(x+1)} = \\frac{2x+2+3x}{x(x+1)} = \\frac{5x+2}{x(x+1)}$.",
                "zh": "最小公分母是 $x(x+1)$。改写：$\\frac{2(x+1)}{x(x+1)} + \\frac{3x}{x(x+1)} = \\frac{2x+2+3x}{x(x+1)} = \\frac{5x+2}{x(x+1)}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $\\frac{x^2-25}{x+5}$ completely. Give your answer as a polynomial.",
                "zh": "把 $\\frac{x^2-25}{x+5}$ 完全化简。答案写成多项式形式。"
              },
              "answer": "x-5",
              "accept": [
                "x - 5",
                "-5+x"
              ],
              "explanation": {
                "en": "The numerator is a difference of squares: $\\frac{(x-5)(x+5)}{x+5}$. Cancel $(x+5)$ to get $x-5$ (with $x \\neq -5$).",
                "zh": "分子是平方差：$\\frac{(x-5)(x+5)}{x+5}$。约去 $(x+5)$ 得 $x-5$（且 $x \\neq -5$）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Divide $\\frac{x^2}{x+3} \\div \\frac{x}{x+3}$ and simplify. Give your answer as a single expression.",
                "zh": "计算 $\\frac{x^2}{x+3} \\div \\frac{x}{x+3}$ 并化简。答案写成单个表达式。"
              },
              "answer": "x",
              "accept": [
                "x^1"
              ],
              "explanation": {
                "en": "Multiply by the reciprocal: $\\frac{x^2}{x+3} \\cdot \\frac{x+3}{x}$. Cancel $(x+3)$ and one factor of $x$, leaving $x$.",
                "zh": "乘以倒数：$\\frac{x^2}{x+3} \\cdot \\frac{x+3}{x}$。约去 $(x+3)$ 和一个 $x$ 因子，剩下 $x$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify the complex fraction $\\frac{\\frac{1}{x}+\\frac{1}{2}}{x}$ by clearing the inner denominators. Give your answer as a single fraction.",
                "zh": "通过清除内层分母来化简繁分数 $\\frac{\\frac{1}{x}+\\frac{1}{2}}{x}$。答案写成单个分数。"
              },
              "answer": "(2+x)/(2x^2)",
              "accept": [
                "(x+2)/(2x^2)",
                "(2+x)/(2x^2)",
                "(x+2)/2x^2"
              ],
              "explanation": {
                "en": "Multiply top and bottom by the LCD $2x$: numerator becomes $2 + x$, denominator becomes $2x \\cdot x = 2x^2$. Result: $\\frac{x+2}{2x^2}$.",
                "zh": "把上下都乘以最小公分母 $2x$：分子变为 $2 + x$，分母变为 $2x \\cdot x = 2x^2$。结果为 $\\frac{x+2}{2x^2}$。"
              }
            }
          ]
        },
        {
          "id": "graphing-rational-functions-equations",
          "title": "Graphing Rational Functions and Solving Rational Equations",
          "titleZh": "有理函数作图与解有理方程",
          "content": [
            {
              "type": "h2",
              "en": "The Shape of a Rational Function",
              "zh": "有理函数的图形"
            },
            {
              "type": "p",
              "en": "A rational function $f(x) = \\frac{P(x)}{Q(x)}$ can bend, break, and race off toward invisible guide lines called asymptotes. Reading its graph is a matter of locating three features: vertical asymptotes and holes (where the denominator is zero), a horizontal or slant asymptote (the end behavior, decided by the degrees of $P$ and $Q$), and the intercepts. Do these in order and the sketch almost draws itself.",
              "zh": "有理函数 $f(x) = \\frac{P(x)}{Q(x)}$ 会弯曲、断裂，并沿着称为渐近线的隐形引导线飞奔而去。读懂它的图形关键在于定位三类特征：垂直渐近线与空洞（分母为零处）、水平或斜渐近线（由 $P$ 与 $Q$ 的次数决定的末端行为），以及截距。按顺序完成这些，草图几乎会自己画出来。"
            },
            {
              "type": "h3",
              "en": "Vertical Asymptotes and Holes",
              "zh": "垂直渐近线与空洞"
            },
            {
              "type": "p",
              "en": "First factor the numerator and denominator. A factor of the denominator that does NOT cancel produces a vertical asymptote — a line $x = a$ that the graph approaches but never touches. A factor that DOES cancel with the numerator produces a hole (removable discontinuity) at that $x$-value: the graph looks normal there except for a single missing point.",
              "zh": "先把分子和分母因式分解。分母中不能约去的因式会产生垂直渐近线——一条图形无限接近却永不触及的直线 $x = a$。而与分子约去的因式则在那个 $x$ 值处产生空洞（可去间断点）：图形在那里看起来正常，只是缺了一个点。"
            },
            {
              "type": "note",
              "en": "Cancel common factors BEFORE deciding what is an asymptote and what is a hole. A value that makes the original denominator zero is always excluded from the domain, but it is a hole if the factor cancels and a vertical asymptote if it does not.",
              "zh": "在判断哪个是渐近线、哪个是空洞之前，先约去公因式。使原分母为零的值总是要从定义域中排除，但如果该因式被约去它就是空洞，若不能约去它就是垂直渐近线。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Hole vs. vertical asymptote",
                "zh": "例题 1：空洞与垂直渐近线"
              },
              "problem": {
                "en": "Find the vertical asymptotes and holes of $f(x) = \\frac{x-2}{x^2-4}$.",
                "zh": "求 $f(x) = \\frac{x-2}{x^2-4}$ 的垂直渐近线与空洞。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Factor the denominator: $x^2-4 = (x-2)(x+2)$. So $f(x) = \\frac{x-2}{(x-2)(x+2)}$.",
                  "zh": "分解分母：$x^2-4 = (x-2)(x+2)$。所以 $f(x) = \\frac{x-2}{(x-2)(x+2)}$。"
                },
                {
                  "type": "p",
                  "en": "The $(x-2)$ factor cancels, so $x=2$ is a hole. The remaining $(x+2)$ does not cancel, so $x=-2$ is a vertical asymptote.",
                  "zh": "因式 $(x-2)$ 被约去，所以 $x=2$ 是空洞。剩下的 $(x+2)$ 不能约去，所以 $x=-2$ 是垂直渐近线。"
                },
                {
                  "type": "math",
                  "tex": "f(x) = \\frac{1}{x+2}, \\quad x \\neq 2"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Horizontal and Slant Asymptotes",
              "zh": "水平渐近线与斜渐近线"
            },
            {
              "type": "p",
              "en": "End behavior is decided by comparing the degree of the numerator $n$ with the degree of the denominator $d$. There are three cases:",
              "zh": "末端行为由比较分子次数 $n$ 与分母次数 $d$ 决定，共有三种情况："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $n < d$: horizontal asymptote $y = 0$ (the $x$-axis).",
                  "zh": "若 $n < d$：水平渐近线为 $y = 0$（$x$ 轴）。"
                },
                {
                  "en": "If $n = d$: horizontal asymptote $y = \\frac{a}{b}$, the ratio of the leading coefficients.",
                  "zh": "若 $n = d$：水平渐近线为 $y = \\frac{a}{b}$，即首项系数之比。"
                },
                {
                  "en": "If $n = d+1$: no horizontal asymptote; there is a slant (oblique) asymptote found by polynomial division.",
                  "zh": "若 $n = d+1$：没有水平渐近线；存在一条斜渐近线，用多项式除法求出。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Asymptotes and intercepts",
                "zh": "例题 2：渐近线与截距"
              },
              "problem": {
                "en": "Describe the asymptotes and intercepts of $f(x) = \\frac{2x-6}{x+1}$.",
                "zh": "描述 $f(x) = \\frac{2x-6}{x+1}$ 的渐近线与截距。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Denominator zero at $x=-1$ (does not cancel), so a vertical asymptote is $x=-1$. Degrees are equal ($1=1$), so the horizontal asymptote is the ratio of leading coefficients, $y = \\frac{2}{1} = 2$.",
                  "zh": "分母在 $x=-1$ 处为零（不能约去），所以垂直渐近线为 $x=-1$。次数相等（$1=1$），所以水平渐近线为首项系数之比 $y = \\frac{2}{1} = 2$。"
                },
                {
                  "type": "p",
                  "en": "The $x$-intercept comes from the numerator: $2x-6=0$ gives $x=3$. The $y$-intercept is $f(0) = \\frac{-6}{1} = -6$.",
                  "zh": "$x$ 截距来自分子：$2x-6=0$ 得 $x=3$。$y$ 截距为 $f(0) = \\frac{-6}{1} = -6$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Solving Rational Equations",
              "zh": "解有理方程"
            },
            {
              "type": "p",
              "en": "To solve an equation containing rational expressions, multiply every term by the LCD to clear the fractions, then solve the resulting polynomial equation. Because multiplying by an expression that could be zero can introduce false roots, you MUST check each answer in the original equation. Any solution that makes a denominator zero is an extraneous solution and must be rejected.",
              "zh": "要解含有有理式的方程，把每一项都乘以最小公分母以清除分数，然后解得到的多项式方程。由于乘以一个可能为零的表达式会引入假根，你必须把每个答案代回原方程检验。任何使分母为零的解都是增根，必须舍去。"
            },
            {
              "type": "note",
              "en": "Checking is not optional here. An extraneous solution is not a mistake in your algebra — it is a genuine root of the cleared equation that simply is not allowed in the original because it breaks a denominator.",
              "zh": "这里的检验不是可有可无的。增根不是你代数运算出的错——它确实是清分母后方程的根，只是因为它会使某个分母为零，在原方程中不被允许。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: An extraneous solution",
                "zh": "例题 3：出现增根"
              },
              "problem": {
                "en": "Solve $\\frac{x}{x-3} = \\frac{3}{x-3} + 2$.",
                "zh": "解 $\\frac{x}{x-3} = \\frac{3}{x-3} + 2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The LCD is $x-3$. Multiply every term by it:",
                  "zh": "最小公分母是 $x-3$。把每一项都乘以它："
                },
                {
                  "type": "math",
                  "tex": "x = 3 + 2(x-3) \\implies x = 3 + 2x - 6 \\implies -x = -3 \\implies x = 3"
                },
                {
                  "type": "p",
                  "en": "But $x=3$ makes the denominator $x-3$ equal to zero, so it is extraneous. The equation has no solution.",
                  "zh": "但 $x=3$ 会使分母 $x-3$ 等于零，因此它是增根。该方程无解。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the vertical asymptote of $f(x) = \\frac{5}{x-4}$?",
                "zh": "$f(x) = \\frac{5}{x-4}$ 的垂直渐近线是什么？"
              },
              "choices": [
                "$y = 4$",
                "$x = 4$",
                "$x = -4$",
                "$x = 5$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The denominator is zero when $x-4=0$, i.e. $x=4$. Since this factor does not cancel, $x=4$ is a vertical asymptote.",
                "zh": "分母在 $x-4=0$ 即 $x=4$ 时为零。由于该因式不能约去，$x=4$ 是垂直渐近线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the horizontal asymptote of $f(x) = \\frac{3x^2+1}{x^2-5}$?",
                "zh": "$f(x) = \\frac{3x^2+1}{x^2-5}$ 的水平渐近线是什么？"
              },
              "choices": [
                "$y = 0$",
                "$y = 3$",
                "$y = \\frac{1}{5}$",
                "none"
              ],
              "answer": 1,
              "explanation": {
                "en": "The degrees are equal (both $2$), so the horizontal asymptote is the ratio of leading coefficients, $y = \\frac{3}{1} = 3$.",
                "zh": "分子分母次数相等（都是 $2$），所以水平渐近线是首项系数之比 $y = \\frac{3}{1} = 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The function $f(x) = \\frac{x^2-1}{x-1}$ has which feature at $x=1$?",
                "zh": "函数 $f(x) = \\frac{x^2-1}{x-1}$ 在 $x=1$ 处具有哪个特征？"
              },
              "choices": [
                "Vertical asymptote",
                "$x$-intercept",
                "Hole",
                "$y$-intercept"
              ],
              "answer": 2,
              "explanation": {
                "en": "Factor: $\\frac{(x-1)(x+1)}{x-1}$. The $(x-1)$ cancels, so $x=1$ is a removable discontinuity — a hole, not an asymptote.",
                "zh": "因式分解：$\\frac{(x-1)(x+1)}{x-1}$。$(x-1)$ 被约去，所以 $x=1$ 是可去间断点——空洞，而非渐近线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which function has a horizontal asymptote of $y=0$?",
                "zh": "哪个函数的水平渐近线是 $y=0$？"
              },
              "choices": [
                "$\\frac{x^2}{x-1}$",
                "$\\frac{4x}{2x+1}$",
                "$\\frac{7}{x^2+3}$",
                "$\\frac{x^3}{x^2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A horizontal asymptote $y=0$ occurs when the numerator's degree is less than the denominator's. In $\\frac{7}{x^2+3}$, degree $0 < 2$.",
                "zh": "当分子次数小于分母次数时，水平渐近线为 $y=0$。在 $\\frac{7}{x^2+3}$ 中，次数 $0 < 2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\frac{6}{x} = 2$.",
                "zh": "解 $\\frac{6}{x} = 2$。"
              },
              "choices": [
                "$x = 12$",
                "$x = 4$",
                "$x = 3$",
                "$x = \\frac{1}{3}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiply both sides by $x$: $6 = 2x$, so $x = 3$. Check: $\\frac{6}{3} = 2$. Valid, since $x=3$ does not make the denominator zero.",
                "zh": "两边乘以 $x$：$6 = 2x$，所以 $x = 3$。检验：$\\frac{6}{3} = 2$。有效，因为 $x=3$ 不会使分母为零。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\frac{x}{4} + \\frac{1}{2} = \\frac{3}{4}$. Give the value of $x$ as an integer.",
                "zh": "解 $\\frac{x}{4} + \\frac{1}{2} = \\frac{3}{4}$。$x$ 的值写成整数。"
              },
              "answer": "1",
              "accept": [
                "1.0"
              ],
              "explanation": {
                "en": "Multiply every term by the LCD $4$: $x + 2 = 3$, so $x = 1$.",
                "zh": "把每一项乘以最小公分母 $4$：$x + 2 = 3$，所以 $x = 1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the $x$-intercept of $f(x) = \\frac{x-7}{x+2}$. Give the $x$-value as an integer.",
                "zh": "求 $f(x) = \\frac{x-7}{x+2}$ 的 $x$ 截距。$x$ 值写成整数。"
              },
              "answer": "7",
              "accept": [
                "7.0",
                "(7,0)"
              ],
              "explanation": {
                "en": "An $x$-intercept occurs where $f(x)=0$, which requires the numerator to be zero: $x-7=0$, so $x=7$. (This does not make the denominator zero, so it is valid.)",
                "zh": "$x$ 截距出现在 $f(x)=0$ 处，这要求分子为零：$x-7=0$，所以 $x=7$。（它不会使分母为零，故有效。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\frac{2}{x-1} = \\frac{x}{x-1} - 1$. If the only algebraic root is extraneous, answer 'none'. Otherwise give the integer solution.",
                "zh": "解 $\\frac{2}{x-1} = \\frac{x}{x-1} - 1$。若唯一的代数根是增根，答 'none'；否则给出整数解。"
              },
              "answer": "none",
              "accept": [
                "no solution",
                "None",
                "no solutions"
              ],
              "explanation": {
                "en": "Multiply every term by $x-1$: $2 = x - (x-1)$, which simplifies to $2 = 1$, a contradiction. There is no value of $x$ that works, so the answer is none.",
                "zh": "把每一项乘以 $x-1$：$2 = x - (x-1)$，化简为 $2 = 1$，这是矛盾。没有任何 $x$ 满足方程，所以答案是 none。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-5-radical-functions",
      "title": "Unit 5: Radical Functions and Equations",
      "titleZh": "第五单元：根式函数与方程",
      "lessons": [
        {
          "id": "square-root-cube-root-functions",
          "title": "Square Root and Cube Root Functions",
          "titleZh": "平方根与立方根函数",
          "content": [
            {
              "type": "h2",
              "en": "Functions Built From Roots",
              "zh": "由根式构成的函数"
            },
            {
              "type": "p",
              "en": "A radical function is a function whose rule contains a variable inside a root. The two most important are the square root function $f(x) = \\sqrt{x}$ and the cube root function $g(x) = \\sqrt[3]{x}$. These are not new numbers dropped from the sky — they are the inverses of power functions you already know. Undoing $y = x^2$ (for $x \\ge 0$) gives $y = \\sqrt{x}$, and undoing $y = x^3$ gives $y = \\sqrt[3]{x}$. Studying their graphs, domains, and ranges lets us model quantities like the period of a pendulum or the side length of a cube of known volume.",
              "zh": "根式函数是指其表达式中变量出现在根号内的函数。其中最重要的两个是平方根函数 $f(x) = \\sqrt{x}$ 和立方根函数 $g(x) = \\sqrt[3]{x}$。它们并不是凭空冒出来的新概念——它们正是你已经熟悉的幂函数的反函数。把 $y = x^2$（当 $x \\ge 0$）反过来就得到 $y = \\sqrt{x}$，把 $y = x^3$ 反过来就得到 $y = \\sqrt[3]{x}$。研究它们的图像、定义域与值域，能让我们对单摆周期、已知体积的立方体边长等量进行建模。"
            },
            {
              "type": "h3",
              "en": "The Parent Functions and Their Graphs",
              "zh": "母函数及其图像"
            },
            {
              "type": "p",
              "en": "The parent square root function $f(x) = \\sqrt{x}$ starts at the point $(0,0)$ and rises to the right, becoming less steep as $x$ grows. Because an even root of a negative number is not real, its domain is $x \\ge 0$ and its range is $y \\ge 0$. The cube root function $g(x) = \\sqrt[3]{x}$ is different: since odd roots of negatives are defined, it accepts every real input. Its graph passes through $(0,0)$, curves through $(-1,-1)$ and $(1,1)$, and has both domain and range equal to all real numbers.",
              "zh": "平方根母函数 $f(x) = \\sqrt{x}$ 从点 $(0,0)$ 出发，向右上方上升，且随着 $x$ 增大而变得越来越平缓。由于负数的偶次根不是实数，它的定义域是 $x \\ge 0$，值域是 $y \\ge 0$。立方根函数 $g(x) = \\sqrt[3]{x}$ 则不同：因为负数的奇次根有定义，它接受任何实数输入。其图像过点 $(0,0)$，经过 $(-1,-1)$ 与 $(1,1)$，定义域与值域都是全体实数。"
            },
            {
              "type": "math",
              "tex": "f(x) = \\sqrt{x}, \\quad D: x \\ge 0, \\; R: y \\ge 0 \\qquad g(x) = \\sqrt[3]{x}, \\quad D: \\mathbb{R}, \\; R: \\mathbb{R}"
            },
            {
              "type": "note",
              "en": "Domain first! For any square (even) root, set the radicand $\\ge 0$ and solve to find the domain. For a cube (odd) root, the domain is always all real numbers. Getting the domain right is what separates a correct graph from a wrong one.",
              "zh": "先求定义域！对任何平方（偶次）根，令被开方式 $\\ge 0$ 并求解即得定义域。对立方（奇次）根，定义域永远是全体实数。正确求出定义域，正是画对图像与画错图像的分水岭。"
            },
            {
              "type": "h3",
              "en": "Transformations",
              "zh": "变换"
            },
            {
              "type": "p",
              "en": "Every square root function can be written as $y = a\\sqrt{x - h} + k$ and every cube root function as $y = a\\sqrt[3]{x - h} + k$. The constants behave exactly as they do for other parent graphs: $h$ shifts the graph right, $k$ shifts it up, and $a$ stretches vertically (with a reflection across the $x$-axis when $a < 0$). For the square root function the starting point, called the endpoint, moves from $(0,0)$ to $(h, k)$.",
              "zh": "每个平方根函数都能写成 $y = a\\sqrt{x - h} + k$，每个立方根函数都能写成 $y = a\\sqrt[3]{x - h} + k$。这些常数的作用与其他母图像完全一致：$h$ 使图像右移，$k$ 使图像上移，$a$ 使图像竖直伸缩（当 $a < 0$ 时还伴随关于 $x$ 轴的反射）。对平方根函数，其起点（称为端点）从 $(0,0)$ 移到 $(h, k)$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Domain, range, and endpoint",
                "zh": "例题 1：定义域、值域与端点"
              },
              "problem": {
                "en": "Find the domain, range, and starting point of $y = \\sqrt{x - 3} + 2$.",
                "zh": "求 $y = \\sqrt{x - 3} + 2$ 的定义域、值域与起点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set the radicand non-negative: $x - 3 \\ge 0$, so $x \\ge 3$. That is the domain.",
                  "zh": "令被开方式非负：$x - 3 \\ge 0$，得 $x \\ge 3$。这就是定义域。"
                },
                {
                  "type": "p",
                  "en": "The square root part is $\\ge 0$, and we add $2$, so the smallest output is $2$. The range is $y \\ge 2$.",
                  "zh": "平方根部分 $\\ge 0$，再加上 $2$，所以最小输出为 $2$。值域为 $y \\ge 2$。"
                },
                {
                  "type": "math",
                  "tex": "h = 3, \\; k = 2 \\;\\Rightarrow\\; \\text{endpoint } (3, 2)"
                },
                {
                  "type": "p",
                  "en": "The graph begins at $(3, 2)$ and rises to the right.",
                  "zh": "图像从 $(3, 2)$ 开始，向右上方上升。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Roots as inverses of power functions",
                "zh": "例题 2：根式作为幂函数的反函数"
              },
              "problem": {
                "en": "The volume of a cube is $V = s^3$. Solve for the side length $s$ and state why this is a function of $V$ for all real inputs used here.",
                "zh": "立方体的体积为 $V = s^3$。解出边长 $s$，并说明为什么在此处它对 $V$ 是一个函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "To undo the cube, take the cube root of both sides. Because cubing is one-to-one, it has an inverse that is itself a function.",
                  "zh": "要抵消立方，两边同时开立方根。因为立方是一一对应的，所以它的反函数本身也是一个函数。"
                },
                {
                  "type": "math",
                  "tex": "s = \\sqrt[3]{V}"
                },
                {
                  "type": "p",
                  "en": "The cube root function is the inverse of the cubing function, so $s = \\sqrt[3]{V}$ recovers the side length from the volume. (Physically $V > 0$, but the cube root itself is defined for every real number.)",
                  "zh": "立方根函数是立方函数的反函数，所以 $s = \\sqrt[3]{V}$ 能从体积还原出边长。（在物理上 $V > 0$，但立方根本身对任何实数都有定义。）"
                }
              ]
            },
            {
              "type": "note",
              "en": "A square root graph is only half of a sideways parabola: $y = \\sqrt{x}$ is the inverse of $y = x^2$ restricted to $x \\ge 0$. We must restrict the domain of $x^2$ first, otherwise the inverse would fail the vertical-line test.",
              "zh": "平方根图像只是一条横放抛物线的一半：$y = \\sqrt{x}$ 是限制在 $x \\ge 0$ 上的 $y = x^2$ 的反函数。必须先限制 $x^2$ 的定义域，否则其反函数将通不过竖直线检验。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the domain of $f(x) = \\sqrt{x - 5}$?",
                "zh": "$f(x) = \\sqrt{x - 5}$ 的定义域是什么？"
              },
              "choices": [
                "$x \\ge 5$",
                "$x \\le 5$",
                "$x \\ge -5$",
                "all real numbers"
              ],
              "answer": 0,
              "explanation": {
                "en": "For a square root to be real the radicand must be $\\ge 0$: $x - 5 \\ge 0$ gives $x \\ge 5$.",
                "zh": "平方根要为实数，被开方式必须 $\\ge 0$：$x - 5 \\ge 0$ 得 $x \\ge 5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the domain of the cube root function $g(x) = \\sqrt[3]{x + 4}$?",
                "zh": "立方根函数 $g(x) = \\sqrt[3]{x + 4}$ 的定义域是什么？"
              },
              "choices": [
                "$x \\ge -4$",
                "$x \\ge 4$",
                "all real numbers",
                "$x \\le -4$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Odd roots accept negatives, so a cube root is defined for every real input. The domain is all real numbers.",
                "zh": "奇次根可以取负数，所以立方根对任何实数输入都有定义。定义域是全体实数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $y = \\sqrt{x}$ is transformed to $y = \\sqrt{x + 2} - 3$. Where is the endpoint?",
                "zh": "$y = \\sqrt{x}$ 的图像被变换为 $y = \\sqrt{x + 2} - 3$。端点在哪里？"
              },
              "choices": [
                "$(2, -3)$",
                "$(-2, 3)$",
                "$(-2, -3)$",
                "$(2, 3)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Write it as $\\sqrt{x - (-2)} + (-3)$, so $h = -2$ and $k = -3$. The endpoint is $(-2, -3)$.",
                "zh": "把它写成 $\\sqrt{x - (-2)} + (-3)$，所以 $h = -2$，$k = -3$。端点为 $(-2, -3)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which parent function is the inverse of $y = x^3$?",
                "zh": "哪个母函数是 $y = x^3$ 的反函数？"
              },
              "choices": [
                "$y = \\sqrt{x}$",
                "$y = x^{1/2}$",
                "$y = 3x$",
                "$y = \\sqrt[3]{x}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Cubing is undone by taking the cube root, so the inverse of $y = x^3$ is $y = \\sqrt[3]{x}$.",
                "zh": "立方由开立方根来抵消，所以 $y = x^3$ 的反函数是 $y = \\sqrt[3]{x}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the range of $y = -\\sqrt{x} + 4$?",
                "zh": "$y = -\\sqrt{x} + 4$ 的值域是什么？"
              },
              "choices": [
                "$y \\le 4$",
                "$y \\ge 4$",
                "$y \\ge 0$",
                "all real numbers"
              ],
              "answer": 0,
              "explanation": {
                "en": "Here $\\sqrt{x} \\ge 0$, so $-\\sqrt{x} \\le 0$, and adding $4$ gives outputs $\\le 4$. The maximum $4$ occurs at $x = 0$.",
                "zh": "此处 $\\sqrt{x} \\ge 0$，所以 $-\\sqrt{x} \\le 0$，再加 $4$ 得输出 $\\le 4$。最大值 $4$ 在 $x = 0$ 处取得。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the smallest value of $x$ in the domain of $y = \\sqrt{2x - 6}$. Give an integer.",
                "zh": "求 $y = \\sqrt{2x - 6}$ 定义域中最小的 $x$ 值。给出整数。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "x=3"
              ],
              "explanation": {
                "en": "Require $2x - 6 \\ge 0$, so $2x \\ge 6$ and $x \\ge 3$. The smallest allowed value is $3$.",
                "zh": "要求 $2x - 6 \\ge 0$，所以 $2x \\ge 6$，$x \\ge 3$。最小允许值为 $3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $g(x) = \\sqrt[3]{x} + 1$ at $x = -8$. Give an integer.",
                "zh": "在 $x = -8$ 处求 $g(x) = \\sqrt[3]{x} + 1$ 的值。给出整数。"
              },
              "answer": "-1",
              "accept": [
                "- 1"
              ],
              "explanation": {
                "en": "$\\sqrt[3]{-8} = -2$ because $(-2)^3 = -8$, so $g(-8) = -2 + 1 = -1$.",
                "zh": "$\\sqrt[3]{-8} = -2$，因为 $(-2)^3 = -8$，所以 $g(-8) = -2 + 1 = -1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A cube has volume $V = 64$ cubic units. Using $s = \\sqrt[3]{V}$, find the side length $s$. Give an integer.",
                "zh": "一个立方体的体积为 $V = 64$ 立方单位。用 $s = \\sqrt[3]{V}$ 求边长 $s$。给出整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "s=4"
              ],
              "explanation": {
                "en": "$s = \\sqrt[3]{64} = 4$ because $4^3 = 64$. The cube root inverts the cubing that produced the volume.",
                "zh": "$s = \\sqrt[3]{64} = 4$，因为 $4^3 = 64$。立方根抵消了产生体积的立方运算。"
              }
            }
          ]
        },
        {
          "id": "solving-radical-equations",
          "title": "Solving Radical Equations and Extraneous Solutions",
          "titleZh": "解根式方程与增根",
          "content": [
            {
              "type": "h2",
              "en": "Undoing a Root by Raising to a Power",
              "zh": "用乘方抵消开方"
            },
            {
              "type": "p",
              "en": "A radical equation is an equation with a variable under a root sign, such as $\\sqrt{x + 1} = 4$. The main strategy is simple: isolate the radical on one side, then raise both sides to the power that matches the index. Squaring undoes a square root, cubing undoes a cube root. This works because raising a root to its matching power cancels the root exactly, leaving an ordinary polynomial equation we already know how to solve.",
              "zh": "根式方程是指变量位于根号下的方程，例如 $\\sqrt{x + 1} = 4$。主要策略很简单：先把根式单独留在一边，再把两边同时乘方，指数与根指数相匹配。平方抵消平方根，立方抵消立方根。这之所以有效，是因为把根提升到相匹配的幂恰好消去了根号，留下我们已会求解的普通多项式方程。"
            },
            {
              "type": "math",
              "tex": "\\sqrt{x + 1} = 4 \\;\\Rightarrow\\; (\\sqrt{x + 1})^2 = 4^2 \\;\\Rightarrow\\; x + 1 = 16 \\;\\Rightarrow\\; x = 15"
            },
            {
              "type": "note",
              "en": "Isolate the radical BEFORE raising to a power. Squaring $\\sqrt{x} + 3 = 5$ directly is a classic error, because $(\\sqrt{x} + 3)^2 \\ne x + 9$. First subtract 3 to get $\\sqrt{x} = 2$, then square.",
              "zh": "在乘方之前先把根式单独隔离出来。直接对 $\\sqrt{x} + 3 = 5$ 平方是一个典型错误，因为 $(\\sqrt{x} + 3)^2 \\ne x + 9$。应先减去 3 得到 $\\sqrt{x} = 2$，再平方。"
            },
            {
              "type": "h3",
              "en": "Extraneous Solutions: Always Check",
              "zh": "增根：务必检验"
            },
            {
              "type": "p",
              "en": "Squaring both sides can create solutions that do not satisfy the original equation. These false answers are called extraneous solutions. They appear because squaring hides the difference between a number and its negative: $3$ and $-3$ both square to $9$. Since a principal square root is never negative, any candidate that would force the radical to equal a negative number must be rejected. For this reason you must ALWAYS substitute every candidate back into the ORIGINAL equation and keep only those that check.",
              "zh": "两边平方可能会制造出并不满足原方程的解。这些假解称为增根。它们之所以出现，是因为平方掩盖了一个数与它相反数之间的差别：$3$ 与 $-3$ 平方都得 $9$。由于主平方根永远非负，任何会使根式等于负数的候选值都必须舍去。因此你必须始终把每个候选值代回原方程，只保留能通过检验的解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: An extraneous solution appears",
                "zh": "例题 1：出现增根"
              },
              "problem": {
                "en": "Solve $\\sqrt{x + 2} = x$.",
                "zh": "解 $\\sqrt{x + 2} = x$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The radical is already isolated. Square both sides:",
                  "zh": "根式已经单独在一边。两边平方："
                },
                {
                  "type": "math",
                  "tex": "x + 2 = x^2 \\;\\Rightarrow\\; x^2 - x - 2 = 0 \\;\\Rightarrow\\; (x - 2)(x + 1) = 0"
                },
                {
                  "type": "p",
                  "en": "The candidates are $x = 2$ and $x = -1$. Check each in the original. For $x = 2$: $\\sqrt{4} = 2$, true. For $x = -1$: $\\sqrt{1} = 1$, but the right side is $-1$, so $1 = -1$ is false.",
                  "zh": "候选值是 $x = 2$ 与 $x = -1$。把它们代回原方程检验。当 $x = 2$：$\\sqrt{4} = 2$，成立。当 $x = -1$：$\\sqrt{1} = 1$，但右边是 $-1$，于是 $1 = -1$ 不成立。"
                },
                {
                  "type": "p",
                  "en": "So $x = -1$ is extraneous. The only solution is $x = 2$.",
                  "zh": "所以 $x = -1$ 是增根。唯一解是 $x = 2$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Equations With Two Radicals",
              "zh": "含两个根式的方程"
            },
            {
              "type": "p",
              "en": "When two radicals appear, isolate one radical, square, and if a radical remains, isolate and square a second time. Rational-exponent equations are handled the same way: an equation like $x^{2/3} = 9$ means $\\sqrt[3]{x^2} = 9$, so raise both sides to the reciprocal power $\\frac{3}{2}$ to solve. The reciprocal exponent is the tool that undoes a rational exponent.",
              "zh": "当出现两个根式时，先隔离一个根式并平方；若仍有根式，再隔离并第二次平方。分数指数方程用同样的方法处理：像 $x^{2/3} = 9$ 这样的方程表示 $\\sqrt[3]{x^2} = 9$，于是把两边同时取倒数次幂 $\\frac{3}{2}$ 即可求解。倒数指数正是抵消分数指数的工具。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A rational-exponent equation",
                "zh": "例题 2：分数指数方程"
              },
              "problem": {
                "en": "Solve $x^{3/2} = 27$ for $x > 0$.",
                "zh": "在 $x > 0$ 下解 $x^{3/2} = 27$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Raise both sides to the reciprocal power $\\frac{2}{3}$ so the exponent on $x$ becomes $1$:",
                  "zh": "把两边同时取倒数次幂 $\\frac{2}{3}$，使 $x$ 上的指数变为 $1$："
                },
                {
                  "type": "math",
                  "tex": "\\left(x^{3/2}\\right)^{2/3} = 27^{2/3} \\;\\Rightarrow\\; x = \\left(\\sqrt[3]{27}\\right)^2 = 3^2 = 9"
                },
                {
                  "type": "p",
                  "en": "Check: $9^{3/2} = (\\sqrt{9})^3 = 3^3 = 27$, true. So $x = 9$.",
                  "zh": "检验：$9^{3/2} = (\\sqrt{9})^3 = 3^3 = 27$，成立。所以 $x = 9$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Cube-root equations do NOT produce extraneous solutions from cubing, because cubing is one-to-one and preserves sign. Extraneous solutions are a danger of EVEN powers (squaring, fourth powers). Even so, checking is always good practice.",
              "zh": "立方根方程在立方时不会产生增根，因为立方是一一对应且保号的。增根是偶次幂（平方、四次方）才有的风险。即便如此，检验始终是好习惯。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\sqrt{x} = 7$.",
                "zh": "解 $\\sqrt{x} = 7$。"
              },
              "choices": [
                "$x = 7$",
                "$x = 49$",
                "$x = 14$",
                "$x = \\sqrt{7}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Square both sides: $(\\sqrt{x})^2 = 7^2$, so $x = 49$. Check: $\\sqrt{49} = 7$.",
                "zh": "两边平方：$(\\sqrt{x})^2 = 7^2$，所以 $x = 49$。检验：$\\sqrt{49} = 7$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the first correct step in solving $\\sqrt{x - 1} + 4 = 9$?",
                "zh": "求解 $\\sqrt{x - 1} + 4 = 9$ 的正确第一步是什么？"
              },
              "choices": [
                "Square both sides immediately",
                "Subtract 4 to isolate the radical",
                "Add 1 to both sides",
                "Divide both sides by 4"
              ],
              "answer": 1,
              "explanation": {
                "en": "Isolate the radical before squaring. Subtracting 4 gives $\\sqrt{x - 1} = 5$; squaring then gives $x - 1 = 25$, so $x = 26$.",
                "zh": "平方前先隔离根式。减去 4 得 $\\sqrt{x - 1} = 5$；再平方得 $x - 1 = 25$，所以 $x = 26$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\sqrt[3]{x} = -2$.",
                "zh": "解 $\\sqrt[3]{x} = -2$。"
              },
              "choices": [
                "no solution",
                "$x = 8$",
                "$x = -8$",
                "$x = -6$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Cube both sides: $x = (-2)^3 = -8$. Cube roots of negatives are defined, so this is valid.",
                "zh": "两边立方：$x = (-2)^3 = -8$。负数的立方根有定义，所以此解成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the equation $\\sqrt{2x + 3} = x$, the candidates are $x = 3$ and $x = -1$. Which are actual solutions?",
                "zh": "对方程 $\\sqrt{2x + 3} = x$，候选值为 $x = 3$ 与 $x = -1$。哪些是真解？"
              },
              "choices": [
                "both",
                "only $x = -1$",
                "neither",
                "only $x = 3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Check $x = 3$: $\\sqrt{9} = 3$, true. Check $x = -1$: $\\sqrt{1} = 1 \\ne -1$, so $-1$ is extraneous. Only $x = 3$ works.",
                "zh": "检验 $x = 3$：$\\sqrt{9} = 3$，成立。检验 $x = -1$：$\\sqrt{1} = 1 \\ne -1$，所以 $-1$ 是增根。只有 $x = 3$ 成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Why can squaring both sides of a radical equation introduce extraneous solutions?",
                "zh": "为什么对根式方程两边平方会引入增根？"
              },
              "choices": [
                "Squaring hides sign, since $a$ and $-a$ share the same square",
                "Squaring changes the degree to zero",
                "Squaring removes the variable",
                "Squaring only works on integers"
              ],
              "answer": 0,
              "explanation": {
                "en": "Because $a^2 = (-a)^2$, squaring erases the sign distinction, so a squared equation can be satisfied by a value the original rejects. That is why we check.",
                "zh": "因为 $a^2 = (-a)^2$，平方抹去了符号差别，于是平方后的方程可能被原方程所排斥的值满足。这正是要检验的原因。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\sqrt{x - 4} = 6$. Give the value of $x$ as an integer.",
                "zh": "解 $\\sqrt{x - 4} = 6$。以整数给出 $x$ 的值。"
              },
              "answer": "40",
              "accept": [
                "x=40",
                "40.0"
              ],
              "explanation": {
                "en": "Square both sides: $x - 4 = 36$, so $x = 40$. Check: $\\sqrt{36} = 6$.",
                "zh": "两边平方：$x - 4 = 36$，所以 $x = 40$。检验：$\\sqrt{36} = 6$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^{2/3} = 4$ for the positive value of $x$. Give an integer.",
                "zh": "求 $x^{2/3} = 4$ 的正数解。给出整数。"
              },
              "answer": "8",
              "accept": [
                "x=8",
                "8.0"
              ],
              "explanation": {
                "en": "Raise both sides to the $\\frac{3}{2}$ power: $x = 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$. Check: $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.",
                "zh": "两边取 $\\frac{3}{2}$ 次幂：$x = 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$。检验：$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The equation $\\sqrt{x + 6} = x$ has candidates $x = 3$ and $x = -2$. Enter the single valid solution as an integer.",
                "zh": "方程 $\\sqrt{x + 6} = x$ 的候选值为 $x = 3$ 与 $x = -2$。以整数填入唯一有效解。"
              },
              "answer": "3",
              "accept": [
                "x=3",
                "3.0"
              ],
              "explanation": {
                "en": "Squaring gives $x + 6 = x^2$, so $x^2 - x - 6 = 0$ and $(x-3)(x+2)=0$. Check $x=3$: $\\sqrt{9}=3$, true. Check $x=-2$: $\\sqrt{4}=2 \\ne -2$, extraneous. Answer: $3$.",
                "zh": "平方得 $x + 6 = x^2$，即 $x^2 - x - 6 = 0$，$(x-3)(x+2)=0$。检验 $x=3$：$\\sqrt{9}=3$，成立。检验 $x=-2$：$\\sqrt{4}=2 \\ne -2$，为增根。答案：$3$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-6-logarithmic-functions",
      "title": "Unit 6: Exponential and Logarithmic Functions",
      "titleZh": "第六单元：指数与对数函数",
      "lessons": [
        {
          "id": "logarithms-and-properties",
          "title": "Logarithms and Their Properties",
          "titleZh": "对数及其性质",
          "content": [
            {
              "type": "h2",
              "en": "Logarithms: The Inverse of Exponentials",
              "zh": "对数：指数的反函数"
            },
            {
              "type": "p",
              "en": "An exponential function such as $f(x) = 2^x$ answers the question \"if I raise 2 to the power $x$, what output do I get?\" A logarithm reverses that question: \"to what power must I raise 2 to get a given output?\" Because exponential functions are one-to-one, they have inverse functions, and those inverses are the logarithmic functions. The logarithm $\\log_b y$ is defined as the exponent that turns the base $b$ into $y$.",
              "zh": "像 $f(x) = 2^x$ 这样的指数函数回答的问题是\"把 2 提升到 $x$ 次方，会得到什么输出？\"对数则把这个问题反过来：\"要把 2 提升到几次方才能得到某个给定的输出？\"因为指数函数是一一对应的，所以它们有反函数，而这些反函数就是对数函数。对数 $\\log_b y$ 定义为把底数 $b$ 变成 $y$ 所需的指数。"
            },
            {
              "type": "math",
              "tex": "\\log_b y = x \\quad \\Longleftrightarrow \\quad b^x = y \\qquad (b > 0,\\ b \\neq 1)"
            },
            {
              "type": "note",
              "en": "Read $\\log_b y = x$ as \"log base $b$ of $y$ equals $x$.\" The two equations $\\log_b y = x$ and $b^x = y$ say exactly the same thing in different clothing. To evaluate a log, ask yourself the exponent question: $\\log_2 8 = 3$ because $2^3 = 8$.",
              "zh": "把 $\\log_b y = x$ 读作\"以 $b$ 为底 $y$ 的对数等于 $x$\"。$\\log_b y = x$ 与 $b^x = y$ 这两个等式表达的是完全相同的意思，只是外衣不同。要计算一个对数，就问自己那个指数问题：$\\log_2 8 = 3$，因为 $2^3 = 8$。"
            },
            {
              "type": "h3",
              "en": "Common and Natural Logarithms",
              "zh": "常用对数与自然对数"
            },
            {
              "type": "p",
              "en": "Two bases appear so often they get their own shorthand. The common logarithm uses base 10 and is written $\\log x$ (with the 10 understood). The natural logarithm uses base $e \\approx 2.71828$ and is written $\\ln x$. These are the two logs on your calculator, and every other base can be reached from them, as we will see.",
              "zh": "有两个底数出现得极为频繁，因此有了各自的简写。常用对数以 10 为底，记作 $\\log x$（底数 10 省略不写）。自然对数以 $e \\approx 2.71828$ 为底，记作 $\\ln x$。这两个正是计算器上的对数，而其他任何底数都可以由它们得到，稍后就会看到。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating logarithms by hand",
                "zh": "例题 1：手算对数"
              },
              "problem": {
                "en": "Evaluate $\\log_3 81$, $\\log_5 \\frac{1}{25}$, and $\\ln e^4$.",
                "zh": "求 $\\log_3 81$、$\\log_5 \\frac{1}{25}$ 和 $\\ln e^4$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For each, ask \"what exponent on the base gives the argument?\" We have $3^4 = 81$, so $\\log_3 81 = 4$.",
                  "zh": "对每一个，都问\"底数的几次方等于真数？\"由 $3^4 = 81$，得 $\\log_3 81 = 4$。"
                },
                {
                  "type": "math",
                  "tex": "5^{-2} = \\tfrac{1}{25} \\;\\Rightarrow\\; \\log_5 \\tfrac{1}{25} = -2, \\qquad e^4 \\;\\Rightarrow\\; \\ln e^4 = 4"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Properties of Logarithms",
              "zh": "对数的性质"
            },
            {
              "type": "p",
              "en": "Because logs are exponents, every exponent rule becomes a log rule. Multiplying powers adds exponents, so the log of a product is a sum. Dividing powers subtracts exponents, so the log of a quotient is a difference. Raising a power to a power multiplies exponents, so the log of a power moves the exponent out front.",
              "zh": "因为对数就是指数，所以每一条指数法则都会变成一条对数法则。幂相乘时指数相加，于是乘积的对数是和。幂相除时指数相减，于是商的对数是差。幂的乘方时指数相乘，于是幂的对数把指数移到前面。"
            },
            {
              "type": "math",
              "tex": "\\log_b(MN) = \\log_b M + \\log_b N"
            },
            {
              "type": "math",
              "tex": "\\log_b\\!\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N, \\qquad \\log_b(M^p) = p\\,\\log_b M"
            },
            {
              "type": "note",
              "en": "These rules apply only to positive arguments, and there is no rule for $\\log_b(M+N)$. In particular $\\log_b(M+N) \\neq \\log_b M + \\log_b N$. Splitting a sum inside a log is one of the most common errors — the product rule is about products, not sums.",
              "zh": "这些法则只对正的真数成立，而且没有关于 $\\log_b(M+N)$ 的法则。特别地，$\\log_b(M+N) \\neq \\log_b M + \\log_b N$。把对数内的和拆开是最常见的错误之一——乘积法则针对的是乘积，而不是和。"
            },
            {
              "type": "h3",
              "en": "Change of Base",
              "zh": "换底公式"
            },
            {
              "type": "p",
              "en": "Your calculator only has base 10 and base $e$, yet you may need $\\log_3 20$. The change-of-base formula rewrites any log in terms of a base you can compute:",
              "zh": "你的计算器只有以 10 和以 $e$ 为底的对数，但你可能需要 $\\log_3 20$。换底公式把任意对数改写成你能计算的底数："
            },
            {
              "type": "math",
              "tex": "\\log_b a = \\frac{\\log a}{\\log b} = \\frac{\\ln a}{\\ln b}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Expanding and change of base",
                "zh": "例题 2：展开与换底"
              },
              "problem": {
                "en": "Expand $\\log_2\\!\\left(\\frac{x^3}{y}\\right)$ using log properties, then estimate $\\log_2 10$ to two decimals.",
                "zh": "用对数性质展开 $\\log_2\\!\\left(\\frac{x^3}{y}\\right)$，然后把 $\\log_2 10$ 估计到两位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The quotient rule splits the fraction; the power rule pulls the 3 down:",
                  "zh": "商法则拆开分式；幂法则把 3 移下来："
                },
                {
                  "type": "math",
                  "tex": "\\log_2\\!\\left(\\frac{x^3}{y}\\right) = \\log_2 x^3 - \\log_2 y = 3\\log_2 x - \\log_2 y"
                },
                {
                  "type": "p",
                  "en": "For the estimate, change to natural log: $\\log_2 10 = \\frac{\\ln 10}{\\ln 2} = \\frac{2.3026}{0.6931} \\approx 3.32$.",
                  "zh": "对于估计，换成自然对数：$\\log_2 10 = \\frac{\\ln 10}{\\ln 2} = \\frac{2.3026}{0.6931} \\approx 3.32$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Graph of a Logarithmic Function",
              "zh": "对数函数的图象"
            },
            {
              "type": "p",
              "en": "Because $y = \\log_b x$ is the inverse of $y = b^x$, its graph is the reflection of the exponential graph across the line $y = x$. For $b > 1$ the log curve rises slowly, passes through $(1, 0)$ since $\\log_b 1 = 0$, and passes through $(b, 1)$. Its domain is all positive reals $x > 0$, and it has a vertical asymptote at $x = 0$: as $x \\to 0^+$, $\\log_b x \\to -\\infty$.",
              "zh": "因为 $y = \\log_b x$ 是 $y = b^x$ 的反函数，它的图象是指数图象关于直线 $y = x$ 的反射。当 $b > 1$ 时，对数曲线缓慢上升，由于 $\\log_b 1 = 0$ 它经过点 $(1, 0)$，并经过点 $(b, 1)$。它的定义域是所有正实数 $x > 0$，且在 $x = 0$ 处有一条竖直渐近线：当 $x \\to 0^+$ 时，$\\log_b x \\to -\\infty$。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the value of $\\log_4 64$?",
                "zh": "$\\log_4 64$ 的值是多少？"
              },
              "choices": [
                "$2$",
                "$3$",
                "$4$",
                "$16$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Ask what power of 4 gives 64. Since $4^3 = 64$, the logarithm is 3.",
                "zh": "问 4 的几次方等于 64。由于 $4^3 = 64$，对数等于 3。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation is equivalent to $\\log_5 x = 2$?",
                "zh": "哪个方程与 $\\log_5 x = 2$ 等价？"
              },
              "choices": [
                "$x^2 = 5$",
                "$5^x = 2$",
                "$5^2 = x$",
                "$2^5 = x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the definition $\\log_b y = x \\Leftrightarrow b^x = y$, the base 5 raised to the exponent 2 equals $x$, so $5^2 = x$.",
                "zh": "根据定义 $\\log_b y = x \\Leftrightarrow b^x = y$，底数 5 的 2 次方等于 $x$，所以 $5^2 = x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the domain of $g(x) = \\log_2(x - 3)$?",
                "zh": "$g(x) = \\log_2(x - 3)$ 的定义域是什么？"
              },
              "choices": [
                "$x > 0$",
                "$x > 3$",
                "$x \\ge 3$",
                "$x < 3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A logarithm requires a positive argument, so $x - 3 > 0$, giving $x > 3$.",
                "zh": "对数要求真数为正，所以 $x - 3 > 0$，得 $x > 3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Written as a single logarithm, $2\\log x + \\log y$ equals which of the following?",
                "zh": "写成单个对数，$2\\log x + \\log y$ 等于下列哪一项？"
              },
              "choices": [
                "$\\log(x^2 y)$",
                "$\\log(2xy)$",
                "$\\log(x^2 + y)$",
                "$\\log\\frac{x^2}{y}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The power rule turns $2\\log x$ into $\\log x^2$, then the product rule combines a sum of logs into the log of a product: $\\log(x^2 y)$.",
                "zh": "幂法则把 $2\\log x$ 变成 $\\log x^2$，然后乘积法则把对数之和合并为乘积的对数：$\\log(x^2 y)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals $\\log_7 30$?",
                "zh": "哪个表达式等于 $\\log_7 30$？"
              },
              "choices": [
                "$\\frac{\\ln 7}{\\ln 30}$",
                "$\\ln 30 - \\ln 7$",
                "$\\frac{\\ln 30}{\\ln 7}$",
                "$\\ln 30 \\cdot \\ln 7$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Change of base puts the argument on top and the base on the bottom: $\\log_7 30 = \\frac{\\ln 30}{\\ln 7}$.",
                "zh": "换底公式把真数放在上面、底数放在下面：$\\log_7 30 = \\frac{\\ln 30}{\\ln 7}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\log_2 \\frac{1}{8}$. Give an integer.",
                "zh": "求 $\\log_2 \\frac{1}{8}$。答案填整数。"
              },
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "explanation": {
                "en": "Since $2^{-3} = \\frac{1}{8}$, the logarithm is $-3$.",
                "zh": "由于 $2^{-3} = \\frac{1}{8}$，对数等于 $-3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\log_b 2 = 0.4$ and $\\log_b 3 = 0.6$, find $\\log_b 6$. Give a decimal.",
                "zh": "已知 $\\log_b 2 = 0.4$，$\\log_b 3 = 0.6$，求 $\\log_b 6$。答案填小数。"
              },
              "answer": "1.0",
              "accept": [
                "1",
                "1.00"
              ],
              "explanation": {
                "en": "By the product rule $\\log_b 6 = \\log_b(2\\cdot 3) = \\log_b 2 + \\log_b 3 = 0.4 + 0.6 = 1.0$.",
                "zh": "由乘积法则 $\\log_b 6 = \\log_b(2\\cdot 3) = \\log_b 2 + \\log_b 3 = 0.4 + 0.6 = 1.0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Use change of base to compute $\\log_5 40$, rounded to two decimal places.",
                "zh": "用换底公式计算 $\\log_5 40$，四舍五入到两位小数。"
              },
              "answer": "2.29",
              "accept": [
                "2.29"
              ],
              "explanation": {
                "en": "$\\log_5 40 = \\frac{\\ln 40}{\\ln 5} = \\frac{3.6889}{1.6094} \\approx 2.29$.",
                "zh": "$\\log_5 40 = \\frac{\\ln 40}{\\ln 5} = \\frac{3.6889}{1.6094} \\approx 2.29$。"
              }
            }
          ]
        },
        {
          "id": "solving-exp-log-equations-modeling",
          "title": "Solving Exponential and Logarithmic Equations and Modeling",
          "titleZh": "解指数与对数方程及建模",
          "content": [
            {
              "type": "h2",
              "en": "Solving Equations with Exponents and Logs",
              "zh": "解含指数与对数的方程"
            },
            {
              "type": "p",
              "en": "When the unknown sits in an exponent, as in $3^x = 20$, no amount of algebra on the base will free it. The key move is to take a logarithm of both sides: because the log \"undoes\" the exponent, and by the power rule the exponent slides out front, the variable comes down to ground level where ordinary algebra can finish the job.",
              "zh": "当未知数位于指数位置，如 $3^x = 20$ 时，对底数做任何代数运算都无法把它解出来。关键一步是对两边取对数：因为对数\"抵消\"了指数，而由幂法则指数会滑到前面来，于是变量下降到地面，普通代数就能完成收尾。"
            },
            {
              "type": "math",
              "tex": "b^x = a \\;\\Rightarrow\\; \\ln(b^x) = \\ln a \\;\\Rightarrow\\; x\\ln b = \\ln a \\;\\Rightarrow\\; x = \\frac{\\ln a}{\\ln b}"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: An exponential equation",
                "zh": "例题 1：一个指数方程"
              },
              "problem": {
                "en": "Solve $3^x = 20$ for $x$, rounded to three decimals.",
                "zh": "解 $3^x = 20$ 求 $x$，四舍五入到三位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Take the natural log of both sides and bring the exponent down:",
                  "zh": "对两边取自然对数，把指数移下来："
                },
                {
                  "type": "math",
                  "tex": "x\\ln 3 = \\ln 20 \\;\\Rightarrow\\; x = \\frac{\\ln 20}{\\ln 3} = \\frac{2.9957}{1.0986} \\approx 2.727"
                },
                {
                  "type": "p",
                  "en": "Check: $3^{2.727} \\approx 20$. The exponent is between 2 and 3, matching that $20$ lies between $3^2 = 9$ and $3^3 = 27$.",
                  "zh": "验证：$3^{2.727} \\approx 20$。指数在 2 与 3 之间，这与 $20$ 位于 $3^2 = 9$ 和 $3^3 = 27$ 之间相符。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Solving Logarithmic Equations and Checking the Domain",
              "zh": "解对数方程并检查定义域"
            },
            {
              "type": "p",
              "en": "To solve a logarithmic equation, first condense both sides into single logs, then rewrite in exponential form to strip the log away. Because a logarithm only accepts positive arguments, you must check every proposed solution in the original equation and reject any that make an argument zero or negative. Such rejected values are extraneous solutions.",
              "zh": "要解对数方程，先把两边各自合并成单个对数，然后改写成指数形式以去掉对数。因为对数只接受正的真数，你必须把每个候选解代回原方程检验，并舍去任何使真数为零或为负的值。这些被舍去的值称为增根。"
            },
            {
              "type": "note",
              "en": "Always test solutions of a log equation in the ORIGINAL equation, not the condensed one. Combining logs can quietly enlarge the domain, so an answer that works in the rewritten equation may still be extraneous. If a candidate makes any log's argument $\\le 0$, discard it.",
              "zh": "务必把对数方程的解代入原方程检验，而不是合并后的方程。合并对数可能悄悄扩大定义域，所以在改写后的方程中成立的答案仍可能是增根。若某个候选值使任何对数的真数 $\\le 0$，就舍去它。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A logarithmic equation with an extraneous root",
                "zh": "例题 2：带增根的对数方程"
              },
              "problem": {
                "en": "Solve $\\log_2(x) + \\log_2(x - 2) = 3$.",
                "zh": "解 $\\log_2(x) + \\log_2(x - 2) = 3$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Combine with the product rule, then rewrite in exponential form:",
                  "zh": "用乘积法则合并，再改写成指数形式："
                },
                {
                  "type": "math",
                  "tex": "\\log_2\\big(x(x-2)\\big) = 3 \\;\\Rightarrow\\; x(x-2) = 2^3 = 8 \\;\\Rightarrow\\; x^2 - 2x - 8 = 0"
                },
                {
                  "type": "math",
                  "tex": "(x-4)(x+2) = 0 \\;\\Rightarrow\\; x = 4 \\ \\text{or}\\ x = -2"
                },
                {
                  "type": "p",
                  "en": "Check: $x = 4$ gives positive arguments, so it is valid. But $x = -2$ makes $\\log_2(-2)$ undefined, so it is extraneous. The only solution is $x = 4$.",
                  "zh": "检验：$x = 4$ 使真数为正，故成立。但 $x = -2$ 使 $\\log_2(-2)$ 无定义，故为增根。唯一解为 $x = 4$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Modeling: Compound Interest and Continuous Growth",
              "zh": "建模：复利与连续增长"
            },
            {
              "type": "p",
              "en": "Money in an account compounded $n$ times a year grows by $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$, where $P$ is the principal, $r$ the annual rate, and $t$ the time in years. As the compounding becomes continuous ($n \\to \\infty$), the formula approaches the continuous-growth model built on $e$:",
              "zh": "每年复利 $n$ 次的账户资金按 $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$ 增长，其中 $P$ 是本金，$r$ 是年利率，$t$ 是以年为单位的时间。当复利变为连续（$n \\to \\infty$）时，公式趋近于以 $e$ 为基础的连续增长模型："
            },
            {
              "type": "math",
              "tex": "A = P e^{rt}"
            },
            {
              "type": "p",
              "en": "To find the TIME needed to reach a goal, you end up with the unknown in the exponent — exactly the situation logs were built for. Divide off the principal, then take $\\ln$ of both sides.",
              "zh": "要求达到目标所需的时间，最终未知数会出现在指数上——这正是对数为之而生的情形。先除去本金，再对两边取 $\\ln$。"
            },
            {
              "type": "h3",
              "en": "Modeling: Half-Life",
              "zh": "建模：半衰期"
            },
            {
              "type": "p",
              "en": "Radioactive substances decay: after each half-life the amount halves. If $A_0$ is the starting amount and $h$ is the half-life, then $A = A_0\\left(\\frac{1}{2}\\right)^{t/h}$. Solving for the time $t$ at a given amount again requires a logarithm.",
              "zh": "放射性物质会衰变：每经过一个半衰期，数量减半。若 $A_0$ 是初始量，$h$ 是半衰期，则 $A = A_0\\left(\\frac{1}{2}\\right)^{t/h}$。要在给定数量时求时间 $t$，同样需要用到对数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Doubling time with continuous growth",
                "zh": "例题 3：连续增长的翻倍时间"
              },
              "problem": {
                "en": "An account earns 5% interest compounded continuously. How long until an investment doubles? Round to one decimal.",
                "zh": "某账户按 5% 年利率连续复利。投资翻倍需要多久？四舍五入到一位小数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Doubling means $A = 2P$, so $2P = Pe^{0.05t}$. Divide by $P$ and take $\\ln$:",
                  "zh": "翻倍意味着 $A = 2P$，所以 $2P = Pe^{0.05t}$。除以 $P$ 并取 $\\ln$："
                },
                {
                  "type": "math",
                  "tex": "2 = e^{0.05t} \\;\\Rightarrow\\; \\ln 2 = 0.05t \\;\\Rightarrow\\; t = \\frac{\\ln 2}{0.05} = \\frac{0.6931}{0.05} \\approx 13.9 \\text{ years}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the first step in solving $5^x = 90$ for $x$?",
                "zh": "解 $5^x = 90$ 求 $x$ 的第一步是什么？"
              },
              "choices": [
                "Divide both sides by 5",
                "Take the logarithm of both sides",
                "Square both sides",
                "Subtract 5 from both sides"
              ],
              "answer": 1,
              "explanation": {
                "en": "The unknown is in the exponent, so take a log of both sides; the power rule then brings $x$ down where you can solve for it.",
                "zh": "未知数在指数上，所以对两边取对数；随后幂法则把 $x$ 移下来，就能解出它。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which value is an extraneous solution of $\\log(x) + \\log(x - 3) = 1$?",
                "zh": "$\\log(x) + \\log(x - 3) = 1$ 的增根是哪个值？"
              },
              "choices": [
                "$x = -2$",
                "$x = 5$",
                "$x = 3$",
                "$x = 10$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Combining gives $x(x-3) = 10$, so $x^2 - 3x - 10 = 0$ and $x = 5$ or $x = -2$. Since $\\log(-2)$ is undefined, $x = -2$ is extraneous.",
                "zh": "合并得 $x(x-3) = 10$，即 $x^2 - 3x - 10 = 0$，$x = 5$ 或 $x = -2$。因为 $\\log(-2)$ 无定义，$x = -2$ 是增根。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which formula models an amount growing continuously at rate $r$?",
                "zh": "哪个公式描述以速率 $r$ 连续增长的量？"
              },
              "choices": [
                "$A = P(1 + r)^t$",
                "$A = Pe^{rt}$",
                "$A = P + rt$",
                "$A = Pr^t$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Continuous compounding uses the base $e$: $A = Pe^{rt}$. The others describe annual compounding, linear, or plain exponential growth.",
                "zh": "连续复利使用底数 $e$：$A = Pe^{rt}$。其余分别描述按年复利、线性增长或普通指数增长。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A sample of a 30-year half-life isotope starts at 80 g. How much remains after 60 years?",
                "zh": "一份半衰期为 30 年的同位素样品初始为 80 克。60 年后还剩多少？"
              },
              "choices": [
                "$40$ g",
                "$10$ g",
                "$20$ g",
                "$0$ g"
              ],
              "answer": 2,
              "explanation": {
                "en": "60 years is two half-lives, so the amount halves twice: $80 \\to 40 \\to 20$ g.",
                "zh": "60 年是两个半衰期，所以数量减半两次：$80 \\to 40 \\to 20$ 克。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $\\log_3(2x - 1) = 2$ for $x$.",
                "zh": "解 $\\log_3(2x - 1) = 2$ 求 $x$。"
              },
              "choices": [
                "$x = 4$",
                "$x = 2$",
                "$x = 9$",
                "$x = 5$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Rewrite in exponential form: $2x - 1 = 3^2 = 9$, so $2x = 10$ and $x = 5$.",
                "zh": "改写成指数形式：$2x - 1 = 3^2 = 9$，所以 $2x = 10$，$x = 5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $2^x = 40$ for $x$, rounded to two decimal places.",
                "zh": "解 $2^x = 40$ 求 $x$，四舍五入到两位小数。"
              },
              "answer": "5.32",
              "accept": [
                "5.32"
              ],
              "explanation": {
                "en": "$x = \\frac{\\ln 40}{\\ln 2} = \\frac{3.6889}{0.6931} \\approx 5.32$.",
                "zh": "$x = \\frac{\\ln 40}{\\ln 2} = \\frac{3.6889}{0.6931} \\approx 5.32$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many years for \\$1000 at 6% compounded continuously to reach \\$2000? Round to one decimal.",
                "zh": "1000 美元按 6% 连续复利增长到 2000 美元需要多少年？四舍五入到一位小数。"
              },
              "answer": "11.6",
              "accept": [
                "11.6"
              ],
              "explanation": {
                "en": "$2 = e^{0.06t}$ gives $t = \\frac{\\ln 2}{0.06} = \\frac{0.6931}{0.06} \\approx 11.6$ years.",
                "zh": "$2 = e^{0.06t}$ 得 $t = \\frac{\\ln 2}{0.06} = \\frac{0.6931}{0.06} \\approx 11.6$ 年。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 100 mg sample decays with a 12-year half-life. Using $A = 100\\left(\\frac{1}{2}\\right)^{t/12}$, how many mg remain after 24 years? Give an integer.",
                "zh": "一份 100 毫克样品的半衰期为 12 年。用 $A = 100\\left(\\frac{1}{2}\\right)^{t/12}$，24 年后剩多少毫克？答案填整数。"
              },
              "answer": "25",
              "accept": [
                "25.0"
              ],
              "explanation": {
                "en": "24 years is two half-lives: $t/12 = 2$, so $A = 100\\left(\\frac{1}{2}\\right)^2 = 100 \\cdot \\frac{1}{4} = 25$ mg.",
                "zh": "24 年是两个半衰期：$t/12 = 2$，所以 $A = 100\\left(\\frac{1}{2}\\right)^2 = 100 \\cdot \\frac{1}{4} = 25$ 毫克。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-7-trig-unit-circle",
      "title": "Unit 7: Trigonometric Functions — The Unit Circle",
      "titleZh": "第七单元：三角函数——单位圆",
      "lessons": [
        {
          "id": "radian-measure-unit-circle",
          "title": "Radian Measure and the Unit Circle",
          "titleZh": "弧度制与单位圆",
          "content": [
            {
              "type": "h2",
              "en": "Measuring Angles in Radians",
              "zh": "用弧度度量角"
            },
            {
              "type": "p",
              "en": "You already measure angles in degrees, where one full turn is $360^{\\circ}$. Radian measure is a second, more natural unit built directly from the circle itself. One radian is the angle that, at the center of a circle, cuts off an arc whose length equals the radius. Because the full circumference is $2\\pi r$, a full turn contains exactly $2\\pi$ radii of arc, so one full turn is $2\\pi$ radians. This gives the master conversion $180^{\\circ} = \\pi$ radians, the bridge between the two systems.",
              "zh": "你已经会用度来量角，一整圈是 $360^{\\circ}$。弧度制是第二种、更自然的单位，它直接由圆本身构造而来。一弧度是这样一个圆心角：它所截出的弧长恰好等于半径。由于整个周长是 $2\\pi r$，一整圈包含恰好 $2\\pi$ 个半径长的弧，所以一整圈是 $2\\pi$ 弧度。这就给出核心换算 $180^{\\circ} = \\pi$ 弧度，它是两种制度之间的桥梁。"
            },
            {
              "type": "math",
              "tex": "180^{\\circ} = \\pi \\text{ rad} \\quad\\Longrightarrow\\quad 1^{\\circ} = \\frac{\\pi}{180}\\text{ rad}, \\quad 1\\text{ rad} = \\frac{180^{\\circ}}{\\pi}"
            },
            {
              "type": "note",
              "en": "To convert degrees to radians, multiply by $\\frac{\\pi}{180}$. To convert radians to degrees, multiply by $\\frac{180}{\\pi}$. Radians are a pure ratio of lengths, so they have no units — an angle written simply as $\\frac{\\pi}{3}$ is understood to be in radians.",
              "zh": "把度化为弧度，乘以 $\\frac{\\pi}{180}$；把弧度化为度，乘以 $\\frac{180}{\\pi}$。弧度是两个长度之比，是纯数，没有单位——直接写成 $\\frac{\\pi}{3}$ 的角默认就是弧度。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Converting between degrees and radians",
                "zh": "例题 1：度与弧度互化"
              },
              "problem": {
                "en": "Convert $135^{\\circ}$ to radians, and convert $\\frac{5\\pi}{6}$ radians to degrees.",
                "zh": "把 $135^{\\circ}$ 化为弧度，并把 $\\frac{5\\pi}{6}$ 弧度化为度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply $135^{\\circ}$ by $\\frac{\\pi}{180}$ and reduce the fraction:",
                  "zh": "把 $135^{\\circ}$ 乘以 $\\frac{\\pi}{180}$ 并约分："
                },
                {
                  "type": "math",
                  "tex": "135 \\cdot \\frac{\\pi}{180} = \\frac{135\\pi}{180} = \\frac{3\\pi}{4}"
                },
                {
                  "type": "p",
                  "en": "Going the other way, multiply by $\\frac{180}{\\pi}$; the $\\pi$'s cancel:",
                  "zh": "反过来，乘以 $\\frac{180}{\\pi}$，$\\pi$ 约去："
                },
                {
                  "type": "math",
                  "tex": "\\frac{5\\pi}{6} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{6} = 150^{\\circ}"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Arc Length",
              "zh": "弧长"
            },
            {
              "type": "p",
              "en": "Radian measure makes arc length effortless. Since a full turn of $2\\pi$ radians corresponds to the whole circumference $2\\pi r$, the arc $s$ cut off by a central angle $\\theta$ (in radians) is simply the radius times the angle.",
              "zh": "弧度制让弧长计算变得毫不费力。既然一整圈 $2\\pi$ 弧度对应整个周长 $2\\pi r$，那么圆心角 $\\theta$（以弧度计）所截出的弧长 $s$ 就等于半径乘以角。"
            },
            {
              "type": "math",
              "tex": "s = r\\theta \\quad (\\theta \\text{ in radians})"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Arc length",
                "zh": "例题 2：弧长"
              },
              "problem": {
                "en": "A circle has radius $12$ cm. Find the length of the arc cut off by a central angle of $\\frac{\\pi}{3}$ radians.",
                "zh": "一个圆的半径为 $12$ 厘米。求圆心角 $\\frac{\\pi}{3}$ 弧度所截出的弧长。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply $s = r\\theta$ directly with $r = 12$ and $\\theta = \\frac{\\pi}{3}$:",
                  "zh": "直接用 $s = r\\theta$，代入 $r = 12$，$\\theta = \\frac{\\pi}{3}$："
                },
                {
                  "type": "math",
                  "tex": "s = 12 \\cdot \\frac{\\pi}{3} = 4\\pi \\approx 12.57 \\text{ cm}"
                }
              ]
            },
            {
              "type": "h2",
              "en": "The Unit Circle",
              "zh": "单位圆"
            },
            {
              "type": "p",
              "en": "The unit circle is the circle of radius $1$ centered at the origin. Starting on the positive $x$-axis and rotating through an angle $\\theta$ (counterclockwise for positive angles), you land at a point $P$. We define the cosine and sine of $\\theta$ to be the coordinates of that point: $P = (\\cos\\theta, \\sin\\theta)$. So cosine is the horizontal coordinate and sine is the vertical coordinate. Because the radius is $1$, these values always satisfy the Pythagorean identity $\\cos^2\\theta + \\sin^2\\theta = 1$.",
              "zh": "单位圆是以原点为圆心、半径为 $1$ 的圆。从正 $x$ 轴出发，转过一个角 $\\theta$（正角为逆时针），你落在一点 $P$。我们把 $\\theta$ 的余弦和正弦定义为该点的坐标：$P = (\\cos\\theta, \\sin\\theta)$。所以余弦是横坐标，正弦是纵坐标。由于半径为 $1$，这些值始终满足勾股恒等式 $\\cos^2\\theta + \\sin^2\\theta = 1$。"
            },
            {
              "type": "h3",
              "en": "Special Angles and Exact Values",
              "zh": "特殊角与精确值"
            },
            {
              "type": "p",
              "en": "Three first-quadrant angles have exact coordinates worth memorizing: $\\frac{\\pi}{6}$ ($30^{\\circ}$), $\\frac{\\pi}{4}$ ($45^{\\circ}$), and $\\frac{\\pi}{3}$ ($60^{\\circ}$). Their sines run $\\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}$, and their cosines run in the reverse order. Every other special angle is found from these using a reference angle and the correct sign for its quadrant.",
              "zh": "第一象限有三个角的精确坐标值得牢记：$\\frac{\\pi}{6}$（$30^{\\circ}$）、$\\frac{\\pi}{4}$（$45^{\\circ}$）和 $\\frac{\\pi}{3}$（$60^{\\circ}$）。它们的正弦依次为 $\\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}$，余弦则按相反顺序排列。所有其他特殊角都可由这些角借助参考角以及该象限相应的正负号求出。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}, \\ \\sin\\frac{\\pi}{6} = \\frac{1}{2}$",
                  "zh": "$\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}, \\ \\sin\\frac{\\pi}{6} = \\frac{1}{2}$"
                },
                {
                  "en": "$\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}, \\ \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$",
                  "zh": "$\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}, \\ \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$"
                },
                {
                  "en": "$\\cos\\frac{\\pi}{3} = \\frac{1}{2}, \\ \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$",
                  "zh": "$\\cos\\frac{\\pi}{3} = \\frac{1}{2}, \\ \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Reference Angles and Signs by Quadrant",
              "zh": "参考角与各象限的符号"
            },
            {
              "type": "p",
              "en": "The reference angle is the acute angle between the terminal side and the $x$-axis. It gives the size of the coordinates; the quadrant gives their signs. A handy mnemonic is \"All Students Take Calculus\": in Quadrant I All are positive, in II only Sine, in III only Tangent, in IV only Cosine. So cosine is positive on the right half of the circle and sine is positive on the top half.",
              "zh": "参考角是终边与 $x$ 轴之间的锐角。它决定坐标的大小，而象限决定坐标的正负。一个好用的口诀是\"全（All）正（S）切（T）余（C）\"：第一象限全为正，第二象限只有正弦为正，第三象限只有正切为正，第四象限只有余弦为正。因此余弦在圆的右半为正，正弦在圆的上半为正。"
            },
            {
              "type": "note",
              "en": "Common error: forgetting the sign. The value $\\sin\\frac{5\\pi}{6}$ has reference angle $\\frac{\\pi}{6}$, so its size is $\\frac{1}{2}$; since $\\frac{5\\pi}{6}$ is in Quadrant II where sine is positive, $\\sin\\frac{5\\pi}{6} = +\\frac{1}{2}$. But $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$, negative because Quadrant II is on the left.",
              "zh": "常见错误：漏掉符号。$\\sin\\frac{5\\pi}{6}$ 的参考角是 $\\frac{\\pi}{6}$，故大小为 $\\frac{1}{2}$；因为 $\\frac{5\\pi}{6}$ 在第二象限，正弦为正，所以 $\\sin\\frac{5\\pi}{6} = +\\frac{1}{2}$。但 $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$，为负，因为第二象限在左半。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Using a reference angle",
                "zh": "例题 3：使用参考角"
              },
              "problem": {
                "en": "Find the exact value of $\\cos\\frac{4\\pi}{3}$.",
                "zh": "求 $\\cos\\frac{4\\pi}{3}$ 的精确值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The angle $\\frac{4\\pi}{3}$ is in Quadrant III (it is past $\\pi$ but before $\\frac{3\\pi}{2}$). Its reference angle is $\\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$.",
                  "zh": "角 $\\frac{4\\pi}{3}$ 在第三象限（大于 $\\pi$ 但小于 $\\frac{3\\pi}{2}$）。它的参考角是 $\\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$。"
                },
                {
                  "type": "p",
                  "en": "The size is $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$. In Quadrant III cosine is negative, so:",
                  "zh": "大小为 $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$。第三象限余弦为负，所以："
                },
                {
                  "type": "math",
                  "tex": "\\cos\\frac{4\\pi}{3} = -\\frac{1}{2}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Convert $60^{\\circ}$ to radians.",
                "zh": "把 $60^{\\circ}$ 化为弧度。"
              },
              "choices": [
                "$\\frac{\\pi}{6}$",
                "$\\frac{\\pi}{4}$",
                "$\\frac{\\pi}{3}$",
                "$\\frac{\\pi}{2}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiply by $\\frac{\\pi}{180}$: $60 \\cdot \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$.",
                "zh": "乘以 $\\frac{\\pi}{180}$：$60 \\cdot \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Convert $\\frac{3\\pi}{4}$ radians to degrees.",
                "zh": "把 $\\frac{3\\pi}{4}$ 弧度化为度。"
              },
              "choices": [
                "$120^{\\circ}$",
                "$135^{\\circ}$",
                "$150^{\\circ}$",
                "$225^{\\circ}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Multiply by $\\frac{180}{\\pi}$: $\\frac{3\\pi}{4} \\cdot \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{4} = 135^{\\circ}$.",
                "zh": "乘以 $\\frac{180}{\\pi}$：$\\frac{3\\pi}{4} \\cdot \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{4} = 135^{\\circ}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In which quadrant is $\\cos\\theta > 0$ and $\\sin\\theta < 0$?",
                "zh": "在哪个象限有 $\\cos\\theta > 0$ 且 $\\sin\\theta < 0$？"
              },
              "choices": [
                "Quadrant I",
                "Quadrant II",
                "Quadrant III",
                "Quadrant IV"
              ],
              "answer": 3,
              "explanation": {
                "en": "Cosine (the $x$-coordinate) is positive on the right half of the circle, and sine (the $y$-coordinate) is negative on the bottom half. The right-and-bottom region is Quadrant IV.",
                "zh": "余弦（横坐标）在圆的右半为正，正弦（纵坐标）在下半为负。右下方的区域是第四象限。"
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
                "$-\\frac{1}{2}$",
                "$\\frac{\\sqrt{3}}{2}$",
                "$-\\frac{\\sqrt{3}}{2}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\frac{7\\pi}{6}$ is in Quadrant III with reference angle $\\frac{7\\pi}{6}-\\pi=\\frac{\\pi}{6}$. The size is $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$, and sine is negative in Quadrant III, giving $-\\frac{1}{2}$.",
                "zh": "$\\frac{7\\pi}{6}$ 在第三象限，参考角为 $\\frac{7\\pi}{6}-\\pi=\\frac{\\pi}{6}$。大小为 $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$，第三象限正弦为负，故为 $-\\frac{1}{2}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A central angle of $\\theta$ radians in a circle of radius $8$ cuts off an arc of length $6$. Find $\\theta$.",
                "zh": "半径为 $8$ 的圆中，圆心角 $\\theta$ 弧度截出长度为 $6$ 的弧。求 $\\theta$。"
              },
              "choices": [
                "$\\frac{3}{4}$",
                "$\\frac{4}{3}$",
                "$48$",
                "$\\frac{1}{48}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "From $s = r\\theta$, solve $\\theta = \\frac{s}{r} = \\frac{6}{8} = \\frac{3}{4}$ radians.",
                "zh": "由 $s = r\\theta$，解得 $\\theta = \\frac{s}{r} = \\frac{6}{8} = \\frac{3}{4}$ 弧度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the arc length cut off by a central angle of $\\frac{\\pi}{2}$ radians in a circle of radius $10$. Give the exact answer in terms of $\\pi$ (for example, 3pi).",
                "zh": "求半径为 $10$ 的圆中，圆心角 $\\frac{\\pi}{2}$ 弧度所截出的弧长。用含 $\\pi$ 的精确形式作答（例如 3pi）。"
              },
              "answer": "5pi",
              "accept": [
                "5\\pi",
                "5*pi",
                "5 pi"
              ],
              "explanation": {
                "en": "$s = r\\theta = 10 \\cdot \\frac{\\pi}{2} = 5\\pi$.",
                "zh": "$s = r\\theta = 10 \\cdot \\frac{\\pi}{2} = 5\\pi$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The point $(\\cos\\theta, \\sin\\theta)$ on the unit circle has $\\cos\\theta = \\frac{\\sqrt{3}}{2}$ and lies in Quadrant IV. Find $\\sin\\theta$ as a fraction with a radical (for example, -sqrt(3)/2).",
                "zh": "单位圆上的点 $(\\cos\\theta, \\sin\\theta)$ 满足 $\\cos\\theta = \\frac{\\sqrt{3}}{2}$ 且位于第四象限。求 $\\sin\\theta$，用带根号的分数作答（例如 -sqrt(3)/2）。"
              },
              "answer": "-1/2",
              "accept": [
                "-0.5",
                "-.5"
              ],
              "explanation": {
                "en": "Use $\\cos^2\\theta + \\sin^2\\theta = 1$: $\\sin^2\\theta = 1 - \\frac{3}{4} = \\frac{1}{4}$, so $\\sin\\theta = \\pm\\frac{1}{2}$. In Quadrant IV sine is negative, so $\\sin\\theta = -\\frac{1}{2}$.",
                "zh": "用 $\\cos^2\\theta + \\sin^2\\theta = 1$：$\\sin^2\\theta = 1 - \\frac{3}{4} = \\frac{1}{4}$，故 $\\sin\\theta = \\pm\\frac{1}{2}$。第四象限正弦为负，所以 $\\sin\\theta = -\\frac{1}{2}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Convert $210^{\\circ}$ to radians. Give the exact answer in the form a/b pi, for example 7/6pi.",
                "zh": "把 $210^{\\circ}$ 化为弧度。用 a/b pi 的精确形式作答，例如 7/6pi。"
              },
              "answer": "7/6pi",
              "accept": [
                "7pi/6",
                "7/6 pi",
                "\\frac{7\\pi}{6}",
                "7\\pi/6"
              ],
              "explanation": {
                "en": "Multiply by $\\frac{\\pi}{180}$: $210 \\cdot \\frac{\\pi}{180} = \\frac{210\\pi}{180} = \\frac{7\\pi}{6}$.",
                "zh": "乘以 $\\frac{\\pi}{180}$：$210 \\cdot \\frac{\\pi}{180} = \\frac{210\\pi}{180} = \\frac{7\\pi}{6}$。"
              }
            }
          ]
        },
        {
          "id": "graphs-of-sine-and-cosine",
          "title": "Graphs of Sine and Cosine",
          "titleZh": "正弦与余弦的图象",
          "content": [
            {
              "type": "h2",
              "en": "The Parent Graphs",
              "zh": "基本图象"
            },
            {
              "type": "p",
              "en": "As the angle $x$ increases, the point $(\\cos x, \\sin x)$ travels around the unit circle over and over, so its coordinates rise and fall in a repeating wave. Graphing the height $\\sin x$ against the angle $x$ produces the sine curve; graphing the horizontal coordinate $\\cos x$ produces the cosine curve. Both are periodic with period $2\\pi$, both oscillate between $-1$ and $1$, and the cosine graph is just the sine graph shifted left by $\\frac{\\pi}{2}$.",
              "zh": "当角 $x$ 增大时，点 $(\\cos x, \\sin x)$ 一圈又一圈地绕单位圆运动，因此它的坐标以重复的波形上下起伏。把高度 $\\sin x$ 对角 $x$ 作图，得到正弦曲线；把横坐标 $\\cos x$ 作图，得到余弦曲线。两者都以 $2\\pi$ 为周期，都在 $-1$ 与 $1$ 之间振荡，而余弦图象只是正弦图象向左平移 $\\frac{\\pi}{2}$ 的结果。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$y = \\sin x$ starts at $(0,0)$, rises to $1$ at $x=\\frac{\\pi}{2}$, back to $0$ at $\\pi$, down to $-1$ at $\\frac{3\\pi}{2}$.",
                  "zh": "$y = \\sin x$ 从 $(0,0)$ 出发，在 $x=\\frac{\\pi}{2}$ 升到 $1$，在 $\\pi$ 回到 $0$，在 $\\frac{3\\pi}{2}$ 降到 $-1$。"
                },
                {
                  "en": "$y = \\cos x$ starts at $(0,1)$, falls to $0$ at $\\frac{\\pi}{2}$, to $-1$ at $\\pi$, back to $0$ at $\\frac{3\\pi}{2}$.",
                  "zh": "$y = \\cos x$ 从 $(0,1)$ 出发，在 $\\frac{\\pi}{2}$ 降到 $0$，在 $\\pi$ 降到 $-1$，在 $\\frac{3\\pi}{2}$ 回到 $0$。"
                }
              ]
            },
            {
              "type": "h2",
              "en": "Transformations: Amplitude, Period, and Shifts",
              "zh": "变换：振幅、周期与平移"
            },
            {
              "type": "p",
              "en": "The general sinusoid is $y = a\\sin\\big(b(x-h)\\big) + k$, and the same four numbers control a cosine graph. Each letter changes the parent curve in a specific way.",
              "zh": "一般正弦曲线为 $y = a\\sin\\big(b(x-h)\\big) + k$，同样的四个数也控制余弦图象。每个字母都以特定方式改变基本曲线。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Amplitude $|a|$: half the distance between the maximum and minimum; the graph reaches $k \\pm |a|$. If $a<0$ the curve is reflected across the midline.",
                  "zh": "振幅 $|a|$：最大值与最小值之差的一半；图象达到 $k \\pm |a|$。若 $a<0$，曲线关于中线翻折。"
                },
                {
                  "en": "Period $\\frac{2\\pi}{|b|}$: the horizontal length of one full cycle. Larger $b$ squeezes the graph.",
                  "zh": "周期 $\\frac{2\\pi}{|b|}$：一个完整周期的水平长度。$b$ 越大，图象被压得越紧。"
                },
                {
                  "en": "Phase shift $h$: horizontal shift; the curve moves right when $h>0$, left when $h<0$.",
                  "zh": "相移 $h$：水平平移；$h>0$ 时曲线右移，$h<0$ 时左移。"
                },
                {
                  "en": "Vertical shift $k$: the midline is $y=k$, the horizontal center line of the wave.",
                  "zh": "竖直平移 $k$：中线为 $y=k$，即波形的水平中心线。"
                }
              ]
            },
            {
              "type": "math",
              "tex": "\\text{amplitude} = |a|, \\qquad \\text{period} = \\frac{2\\pi}{|b|}, \\qquad \\text{midline: } y = k"
            },
            {
              "type": "note",
              "en": "The period depends only on $|b|$, and it involves division: doubling $b$ halves the period. A frequent error is reading $b$ itself as the period. For $y=\\sin(2x)$ the period is $\\frac{2\\pi}{2}=\\pi$, not $2$.",
              "zh": "周期只依赖于 $|b|$，且是除法关系：$b$ 加倍，周期减半。常见错误是把 $b$ 本身当作周期。对于 $y=\\sin(2x)$，周期是 $\\frac{2\\pi}{2}=\\pi$，而不是 $2$。"
            },
            {
              "type": "note",
              "en": "To read the phase shift correctly, factor $b$ out fully first. In $y=\\sin(2x-\\pi)$ rewrite the inside as $2\\left(x-\\frac{\\pi}{2}\\right)$, so the shift is $\\frac{\\pi}{2}$ to the right — not $\\pi$.",
              "zh": "要正确读出相移，先把 $b$ 完全提取出来。在 $y=\\sin(2x-\\pi)$ 中把括号内改写为 $2\\left(x-\\frac{\\pi}{2}\\right)$，所以相移是向右 $\\frac{\\pi}{2}$——而不是 $\\pi$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading a transformed graph's features",
                "zh": "例题 1：读出变换后图象的特征"
              },
              "problem": {
                "en": "For $y = 3\\cos\\big(2(x - \\frac{\\pi}{4})\\big) + 1$, state the amplitude, period, phase shift, and midline.",
                "zh": "对于 $y = 3\\cos\\big(2(x - \\frac{\\pi}{4})\\big) + 1$，说出振幅、周期、相移和中线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Match to $y=a\\cos(b(x-h))+k$: here $a=3$, $b=2$, $h=\\frac{\\pi}{4}$, $k=1$.",
                  "zh": "对照 $y=a\\cos(b(x-h))+k$：这里 $a=3$，$b=2$，$h=\\frac{\\pi}{4}$，$k=1$。"
                },
                {
                  "type": "math",
                  "tex": "|a| = 3, \\quad \\frac{2\\pi}{|b|} = \\frac{2\\pi}{2} = \\pi, \\quad h = \\frac{\\pi}{4}\\ \\text{(right)}, \\quad y = 1"
                },
                {
                  "type": "p",
                  "en": "So amplitude $3$, period $\\pi$, phase shift $\\frac{\\pi}{4}$ to the right, midline $y=1$. The graph oscillates between $1-3=-2$ and $1+3=4$.",
                  "zh": "所以振幅 $3$，周期 $\\pi$，相移向右 $\\frac{\\pi}{4}$，中线 $y=1$。图象在 $1-3=-2$ 与 $1+3=4$ 之间振荡。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Writing an Equation from a Graph",
              "zh": "由图象写出方程"
            },
            {
              "type": "p",
              "en": "Reverse the process by reading features off the picture. The midline $k$ is the average of the maximum and minimum; the amplitude $a$ is half their difference; the period (measured from one peak to the next) gives $b=\\frac{2\\pi}{\\text{period}}$. Choosing a sine or cosine model and lining up a convenient starting point gives $h$.",
              "zh": "把过程倒过来，从图上读出特征。中线 $k$ 是最大值与最小值的平均；振幅 $a$ 是二者之差的一半；周期（从一个波峰量到下一个波峰）给出 $b=\\frac{2\\pi}{\\text{周期}}$。选用正弦或余弦模型并对齐一个方便的起点即得 $h$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Building the equation",
                "zh": "例题 2：构建方程"
              },
              "problem": {
                "en": "A wave has maximum $7$, minimum $1$, and one full cycle every $4$ units. It has a maximum at $x=0$. Write it as a cosine function.",
                "zh": "一条波的最大值为 $7$，最小值为 $1$，每 $4$ 个单位一个完整周期，且在 $x=0$ 处取得最大值。把它写成余弦函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Midline $k = \\frac{7+1}{2} = 4$ and amplitude $a = \\frac{7-1}{2} = 3$. From period $4$, $b = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$.",
                  "zh": "中线 $k = \\frac{7+1}{2} = 4$，振幅 $a = \\frac{7-1}{2} = 3$。由周期 $4$ 得 $b = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。"
                },
                {
                  "type": "p",
                  "en": "Cosine already peaks at its start, and the maximum here is at $x=0$, so no phase shift is needed ($h=0$):",
                  "zh": "余弦本就在起点取得最大值，而这里最大值在 $x=0$，故不需要相移（$h=0$）："
                },
                {
                  "type": "math",
                  "tex": "y = 3\\cos\\left(\\frac{\\pi}{2}x\\right) + 4"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the amplitude of $y = -4\\sin x + 2$?",
                "zh": "$y = -4\\sin x + 2$ 的振幅是多少？"
              },
              "choices": [
                "$-4$",
                "$4$",
                "$2$",
                "$6$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Amplitude is $|a| = |-4| = 4$. It is always non-negative; the negative sign only reflects the curve across the midline.",
                "zh": "振幅是 $|a| = |-4| = 4$。振幅总是非负的；负号只是把曲线关于中线翻折。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the period of $y = \\cos(3x)$?",
                "zh": "$y = \\cos(3x)$ 的周期是多少？"
              },
              "choices": [
                "$3$",
                "$6\\pi$",
                "$\\frac{2\\pi}{3}$",
                "$\\frac{\\pi}{3}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{3}$. The coefficient $3$ compresses the graph so a full cycle finishes sooner.",
                "zh": "周期 $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{3}$。系数 $3$ 把图象压缩，使一个周期更快完成。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The midline of $y = 2\\sin x - 5$ is:",
                "zh": "$y = 2\\sin x - 5$ 的中线是："
              },
              "choices": [
                "$y = 2$",
                "$y = 5$",
                "$y = -5$",
                "$y = 0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The vertical shift $k=-5$ is the midline, so $y=-5$. The curve oscillates between $-5-2=-7$ and $-5+2=-3$.",
                "zh": "竖直平移 $k=-5$ 就是中线，故 $y=-5$。曲线在 $-5-2=-7$ 与 $-5+2=-3$ 之间振荡。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For $y = \\sin\\big(x - \\frac{\\pi}{3}\\big)$, the phase shift is:",
                "zh": "对于 $y = \\sin\\big(x - \\frac{\\pi}{3}\\big)$，相移是："
              },
              "choices": [
                "$\\frac{\\pi}{3}$ to the left",
                "$\\frac{\\pi}{3}$ to the right",
                "$3$ to the right",
                "no shift"
              ],
              "answer": 1,
              "explanation": {
                "en": "In $\\sin(b(x-h))$ with $b=1$, $h=\\frac{\\pi}{3}$. A positive $h$ shifts the graph right by $\\frac{\\pi}{3}$.",
                "zh": "在 $\\sin(b(x-h))$ 中，$b=1$，$h=\\frac{\\pi}{3}$。正的 $h$ 使图象向右平移 $\\frac{\\pi}{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A sinusoid has maximum $10$ and minimum $2$. What are its amplitude and midline?",
                "zh": "一条正弦曲线的最大值为 $10$，最小值为 $2$。它的振幅和中线分别是多少？"
              },
              "choices": [
                "amplitude $8$, midline $y=6$",
                "amplitude $4$, midline $y=6$",
                "amplitude $4$, midline $y=8$",
                "amplitude $6$, midline $y=4$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Amplitude is half the difference: $\\frac{10-2}{2}=4$. Midline is the average: $\\frac{10+2}{2}=6$, so $y=6$.",
                "zh": "振幅是差的一半：$\\frac{10-2}{2}=4$。中线是平均值：$\\frac{10+2}{2}=6$，故 $y=6$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the period of $y = 5\\sin\\big(\\frac{1}{2}x\\big)$. Give the exact answer in terms of $\\pi$ (for example, 3pi).",
                "zh": "求 $y = 5\\sin\\big(\\frac{1}{2}x\\big)$ 的周期。用含 $\\pi$ 的精确形式作答（例如 3pi）。"
              },
              "answer": "4pi",
              "accept": [
                "4\\pi",
                "4*pi",
                "4 pi"
              ],
              "explanation": {
                "en": "Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{1/2} = 4\\pi$. A fractional $b$ stretches the graph so one cycle takes longer.",
                "zh": "周期 $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{1/2} = 4\\pi$。分数 $b$ 把图象拉伸，使一个周期更长。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The graph of $y = a\\cos(bx)$ has amplitude $6$ and period $\\pi$. Find $b$ (a positive integer).",
                "zh": "$y = a\\cos(bx)$ 的图象振幅为 $6$，周期为 $\\pi$。求 $b$（一个正整数）。"
              },
              "answer": "2",
              "accept": [
                "+2"
              ],
              "explanation": {
                "en": "Set period $\\frac{2\\pi}{b} = \\pi$ and solve: $b = \\frac{2\\pi}{\\pi} = 2$. The amplitude $6$ fixes $a$ but is not needed for $b$.",
                "zh": "令周期 $\\frac{2\\pi}{b} = \\pi$，解得 $b = \\frac{2\\pi}{\\pi} = 2$。振幅 $6$ 决定 $a$，但求 $b$ 时用不到。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $y = 2\\sin\\big(3(x - \\frac{\\pi}{6})\\big) - 1$, what is the maximum value the function reaches?",
                "zh": "对于 $y = 2\\sin\\big(3(x - \\frac{\\pi}{6})\\big) - 1$，函数达到的最大值是多少？"
              },
              "answer": "1",
              "accept": [
                "+1",
                "1.0"
              ],
              "explanation": {
                "en": "The maximum is midline plus amplitude: $k + |a| = -1 + 2 = 1$.",
                "zh": "最大值是中线加振幅：$k + |a| = -1 + 2 = 1$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-8-trig-modeling-identities",
      "title": "Unit 8: Trigonometric Modeling and Identities",
      "titleZh": "第八单元：三角建模与恒等式",
      "lessons": [
        {
          "id": "modeling-periodic-phenomena",
          "title": "Modeling Periodic Phenomena",
          "titleZh": "周期现象的建模",
          "content": [
            {
              "type": "h2",
              "en": "Why Sinusoids Describe the World",
              "zh": "为什么正弦曲线能描述这个世界"
            },
            {
              "type": "p",
              "en": "Many real quantities rise and fall in a smooth, repeating pattern: the height of a seat on a Ferris wheel, the depth of water at a harbor as the tide comes in and out, the number of daylight hours across a year, and the daily air temperature. Because these patterns repeat, they are called periodic, and a shifted, stretched sine or cosine curve — a sinusoid — models them extremely well. Our job is to read four numbers from a situation and write a function.",
              "zh": "许多现实量以平滑、重复的方式起伏：摩天轮座位的高度、潮水涨落时港口的水深、一年中每日的日照时数，以及每天的气温。由于这些模式会重复，它们被称为周期性的，而经过平移和拉伸的正弦或余弦曲线——即正弦型曲线——能很好地对其建模。我们的任务是从情境中读出四个数，然后写出一个函数。"
            },
            {
              "type": "h3",
              "en": "The Four Parameters",
              "zh": "四个参数"
            },
            {
              "type": "p",
              "en": "A general sinusoid can be written as $y = A\\sin(B(x - C)) + D$ or with cosine in place of sine. Each letter controls one feature of the graph, and each can be found directly from the maximum value, the minimum value, and how long one full cycle takes.",
              "zh": "一般的正弦型曲线可写作 $y = A\\sin(B(x - C)) + D$，也可以把正弦换成余弦。每个字母控制图象的一个特征，而每个字母都能直接由最大值、最小值以及一个完整周期所需的时间求出。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Amplitude $A = \\dfrac{\\text{max} - \\text{min}}{2}$ — half the vertical distance from peak to trough.",
                  "zh": "振幅 $A = \\dfrac{\\text{最大值} - \\text{最小值}}{2}$——峰谷之间竖直距离的一半。"
                },
                {
                  "en": "Midline $D = \\dfrac{\\text{max} + \\text{min}}{2}$ — the horizontal center line the curve oscillates around.",
                  "zh": "中线 $D = \\dfrac{\\text{最大值} + \\text{最小值}}{2}$——曲线上下振荡时围绕的水平中心线。"
                },
                {
                  "en": "Period $P$ is the time for one full cycle, and $B = \\dfrac{2\\pi}{P}$.",
                  "zh": "周期 $P$ 是一个完整循环所需的时间，且 $B = \\dfrac{2\\pi}{P}$。"
                },
                {
                  "en": "Phase shift $C$ slides the curve left or right to line up with the data.",
                  "zh": "相移 $C$ 把曲线左右平移，使之与数据对齐。"
                }
              ]
            },
            {
              "type": "note",
              "en": "The number $B$ is NOT the period. The period is $P = \\dfrac{2\\pi}{B}$, and conversely $B = \\dfrac{2\\pi}{P}$. Mixing these up is the most common modeling error. A large $B$ means a short period (fast oscillation).",
              "zh": "数 $B$ 不是周期。周期是 $P = \\dfrac{2\\pi}{B}$，反过来 $B = \\dfrac{2\\pi}{P}$。把两者混淆是最常见的建模错误。$B$ 越大，周期越短（振荡越快）。"
            },
            {
              "type": "h3",
              "en": "Choosing Sine or Cosine",
              "zh": "选择正弦还是余弦"
            },
            {
              "type": "p",
              "en": "Both curves work; you pick whichever matches the starting behavior with the least shifting. A cosine peaks at its start, so $+\\cos$ starts at the maximum and $-\\cos$ starts at the minimum. A plain sine starts on its midline heading upward. Matching the start to the right curve often lets you set the phase shift to zero.",
              "zh": "两种曲线都可行；你选那条能以最少平移匹配起始行为的曲线。余弦在起点处取得峰值，所以 $+\\cos$ 从最大值开始，$-\\cos$ 从最小值开始。普通正弦从中线出发并向上。把起始状态与合适的曲线匹配，往往能让相移取为零。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A Ferris wheel",
                "zh": "例题 1：摩天轮"
              },
              "problem": {
                "en": "A Ferris wheel has radius $20$ m, its center is $25$ m above the ground, and it completes one turn every $40$ s. A rider boards at the lowest point at $t = 0$. Write a height model $h(t)$ and find the height at $t = 10$ s.",
                "zh": "一个摩天轮半径为 $20$ 米，圆心在地面上方 $25$ 米处，每 $40$ 秒转一圈。一名乘客在 $t = 0$ 时从最低点上车。写出高度模型 $h(t)$ 并求 $t = 10$ 秒时的高度。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Amplitude is the radius $A = 20$, and the midline is the center height $D = 25$. The period is $P = 40$, so $B = \\dfrac{2\\pi}{40} = \\dfrac{\\pi}{20}$. The rider starts at the minimum, which is the behavior of $-\\cos$, so no phase shift is needed:",
                  "zh": "振幅就是半径 $A = 20$，中线就是圆心高度 $D = 25$。周期 $P = 40$，所以 $B = \\dfrac{2\\pi}{40} = \\dfrac{\\pi}{20}$。乘客从最低点出发，这正是 $-\\cos$ 的行为，因此不需要相移："
                },
                {
                  "type": "math",
                  "tex": "h(t) = 25 - 20\\cos\\left(\\frac{\\pi}{20}\\,t\\right)"
                },
                {
                  "type": "p",
                  "en": "Check the start: $h(0) = 25 - 20\\cos 0 = 25 - 20 = 5$ m (the bottom). At $t = 10$: $h(10) = 25 - 20\\cos\\left(\\frac{\\pi}{20}\\cdot 10\\right) = 25 - 20\\cos\\frac{\\pi}{2} = 25 - 0 = 25$ m.",
                  "zh": "检验起点：$h(0) = 25 - 20\\cos 0 = 25 - 20 = 5$ 米（最低处）。当 $t = 10$：$h(10) = 25 - 20\\cos\\left(\\frac{\\pi}{20}\\cdot 10\\right) = 25 - 20\\cos\\frac{\\pi}{2} = 25 - 0 = 25$ 米。"
                },
                {
                  "type": "p",
                  "en": "So after $10$ s the rider is at $25$ m — exactly the midline, one quarter of the way up.",
                  "zh": "所以 $10$ 秒后乘客在 $25$ 米处——恰好是中线，即上升了四分之一圈。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Tides",
                "zh": "例题 2：潮汐"
              },
              "problem": {
                "en": "At a harbor, high tide reaches $5.4$ m and low tide drops to $0.6$ m. The cycle repeats every $12$ hours, and high tide occurs at $t = 3$ h. Model the water depth $d(t)$.",
                "zh": "在某港口，高潮达到 $5.4$ 米，低潮降到 $0.6$ 米。周期为每 $12$ 小时一次，且高潮出现在 $t = 3$ 小时。为水深 $d(t)$ 建模。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Amplitude $A = \\dfrac{5.4 - 0.6}{2} = 2.4$ and midline $D = \\dfrac{5.4 + 0.6}{2} = 3.0$. Period $P = 12$ gives $B = \\dfrac{2\\pi}{12} = \\dfrac{\\pi}{6}$. A cosine peaks at its start, and the peak is at $t = 3$, so shift right by $3$:",
                  "zh": "振幅 $A = \\dfrac{5.4 - 0.6}{2} = 2.4$，中线 $D = \\dfrac{5.4 + 0.6}{2} = 3.0$。周期 $P = 12$ 给出 $B = \\dfrac{2\\pi}{12} = \\dfrac{\\pi}{6}$。余弦在起点处取峰值，而峰值在 $t = 3$，所以向右平移 $3$："
                },
                {
                  "type": "math",
                  "tex": "d(t) = 3.0 + 2.4\\cos\\left(\\frac{\\pi}{6}(t - 3)\\right)"
                },
                {
                  "type": "p",
                  "en": "Verify: $d(3) = 3.0 + 2.4\\cos 0 = 5.4$ m (high tide, correct). Six hours later, $d(9) = 3.0 + 2.4\\cos\\pi = 3.0 - 2.4 = 0.6$ m (low tide).",
                  "zh": "验证：$d(3) = 3.0 + 2.4\\cos 0 = 5.4$ 米（高潮，正确）。六小时后，$d(9) = 3.0 + 2.4\\cos\\pi = 3.0 - 2.4 = 0.6$ 米（低潮）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "The same recipe fits daylight hours (period one year) and daily temperature (period 24 hours): read the max and min for $A$ and $D$, read the cycle length for $B$, and align the peak for $C$. Always finish by evaluating your model at a known point to confirm it reproduces the data.",
              "zh": "同样的方法适用于日照时数（周期为一年）和日气温（周期为 24 小时）：读出最大值和最小值得到 $A$ 与 $D$，读出循环长度得到 $B$，对齐峰值得到 $C$。最后务必在一个已知点代入模型，确认它能重现数据。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A sinusoid oscillates between a maximum of $14$ and a minimum of $2$. What is its amplitude?",
                "zh": "一条正弦型曲线在最大值 $14$ 与最小值 $2$ 之间振荡。它的振幅是多少？"
              },
              "choices": [
                "$4$",
                "$6$",
                "$8$",
                "$12$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Amplitude is half the peak-to-trough distance: $A = \\frac{14 - 2}{2} = \\frac{12}{2} = 6$.",
                "zh": "振幅是峰谷距离的一半：$A = \\frac{14 - 2}{2} = \\frac{12}{2} = 6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For the same curve (max $14$, min $2$), what is the midline $D$?",
                "zh": "对同一条曲线（最大值 $14$，最小值 $2$），中线 $D$ 是多少？"
              },
              "choices": [
                "$6$",
                "$7$",
                "$8$",
                "$12$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The midline is the average of max and min: $D = \\frac{14 + 2}{2} = 8$. It is the center line the curve oscillates around.",
                "zh": "中线是最大值与最小值的平均：$D = \\frac{14 + 2}{2} = 8$。它是曲线振荡时围绕的中心线。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the period of $y = 5\\sin\\left(\\frac{\\pi}{6}x\\right) + 10$?",
                "zh": "$y = 5\\sin\\left(\\frac{\\pi}{6}x\\right) + 10$ 的周期是多少？"
              },
              "choices": [
                "$6$",
                "$12$",
                "$\\frac{\\pi}{6}$",
                "$2\\pi$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Here $B = \\frac{\\pi}{6}$, so the period is $P = \\frac{2\\pi}{B} = \\frac{2\\pi}{\\pi/6} = 2\\pi \\cdot \\frac{6}{\\pi} = 12$.",
                "zh": "这里 $B = \\frac{\\pi}{6}$，所以周期 $P = \\frac{2\\pi}{B} = \\frac{2\\pi}{\\pi/6} = 2\\pi \\cdot \\frac{6}{\\pi} = 12$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rider boards a Ferris wheel at its lowest point at $t = 0$. Which form models the height with no phase shift?",
                "zh": "一名乘客在 $t = 0$ 时从摩天轮最低点上车。哪种形式能在没有相移的情况下描述高度？"
              },
              "choices": [
                "$D + A\\cos(Bt)$",
                "$D - A\\cos(Bt)$",
                "$D + A\\sin(Bt)$",
                "$D - A\\sin(Bt)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Starting at the minimum matches $-\\cos$, since $-\\cos(0) = -1$ gives $D - A$, the lowest value. So $h(t) = D - A\\cos(Bt)$.",
                "zh": "从最小值开始与 $-\\cos$ 匹配，因为 $-\\cos(0) = -1$ 给出 $D - A$，即最低值。所以 $h(t) = D - A\\cos(Bt)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Daily temperature is modeled by $T(t) = 66 + 12\\sin\\left(\\frac{\\pi}{12}(t - 8)\\right)$ (in $^{\\circ}$F). What is the maximum temperature?",
                "zh": "每日气温由 $T(t) = 66 + 12\\sin\\left(\\frac{\\pi}{12}(t - 8)\\right)$ 建模（单位 $^{\\circ}$F）。最高气温是多少？"
              },
              "choices": [
                "$54$",
                "$66$",
                "$72$",
                "$78$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The maximum of a sinusoid is midline plus amplitude: $66 + 12 = 78^{\\circ}$F, reached when the sine factor equals $1$.",
                "zh": "正弦型曲线的最大值是中线加振幅：$66 + 12 = 78^{\\circ}$F，当正弦因子等于 $1$ 时达到。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the Ferris wheel $h(t) = 25 - 20\\cos\\left(\\frac{\\pi}{20}t\\right)$, find the height (in meters) at $t = 10$ s.",
                "zh": "对于摩天轮 $h(t) = 25 - 20\\cos\\left(\\frac{\\pi}{20}t\\right)$，求 $t = 10$ 秒时的高度（单位：米）。"
              },
              "answer": "25",
              "accept": [
                "25 m",
                "25.0"
              ],
              "explanation": {
                "en": "$h(10) = 25 - 20\\cos\\left(\\frac{\\pi}{20}\\cdot 10\\right) = 25 - 20\\cos\\frac{\\pi}{2} = 25 - 20(0) = 25$ m.",
                "zh": "$h(10) = 25 - 20\\cos\\left(\\frac{\\pi}{20}\\cdot 10\\right) = 25 - 20\\cos\\frac{\\pi}{2} = 25 - 20(0) = 25$ 米。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A tide varies from a high of $5.4$ m to a low of $0.6$ m. Compute the amplitude in meters (as a decimal).",
                "zh": "潮水从高潮 $5.4$ 米变化到低潮 $0.6$ 米。求振幅（用小数表示，单位：米）。"
              },
              "answer": "2.4",
              "accept": [
                "2.40",
                "2.4 m"
              ],
              "explanation": {
                "en": "Amplitude $= \\frac{\\text{max} - \\text{min}}{2} = \\frac{5.4 - 0.6}{2} = \\frac{4.8}{2} = 2.4$ m.",
                "zh": "振幅 $= \\frac{\\text{最大值} - \\text{最小值}}{2} = \\frac{5.4 - 0.6}{2} = \\frac{4.8}{2} = 2.4$ 米。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A sinusoidal model has $B = \\frac{\\pi}{6}$. Find its period $P$ (a whole number).",
                "zh": "某正弦型模型的 $B = \\frac{\\pi}{6}$。求它的周期 $P$（一个整数）。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "$P = \\frac{2\\pi}{B} = \\frac{2\\pi}{\\pi/6} = 2\\pi \\cdot \\frac{6}{\\pi} = 12$. The $\\pi$'s cancel, leaving $12$.",
                "zh": "$P = \\frac{2\\pi}{B} = \\frac{2\\pi}{\\pi/6} = 2\\pi \\cdot \\frac{6}{\\pi} = 12$。$\\pi$ 相互约去，剩下 $12$。"
              }
            }
          ]
        },
        {
          "id": "trigonometric-identities",
          "title": "Trigonometric Identities",
          "titleZh": "三角恒等式",
          "content": [
            {
              "type": "h2",
              "en": "The Pythagorean Identity",
              "zh": "毕达哥拉斯恒等式"
            },
            {
              "type": "p",
              "en": "An identity is an equation that is true for every allowed value of the variable, not just a few solutions. The most important trigonometric identity comes straight from the unit circle. A point on the unit circle at angle $\\theta$ has coordinates $(\\cos\\theta, \\sin\\theta)$, and because the radius is $1$, the equation of the circle $x^2 + y^2 = 1$ becomes the Pythagorean identity.",
              "zh": "恒等式是对变量的每一个允许取值都成立的等式，而不仅仅是少数几个解。最重要的三角恒等式直接来自单位圆。单位圆上对应角 $\\theta$ 的点坐标为 $(\\cos\\theta, \\sin\\theta)$，由于半径为 $1$，圆的方程 $x^2 + y^2 = 1$ 就变成了毕达哥拉斯恒等式。"
            },
            {
              "type": "math",
              "tex": "\\sin^2\\theta + \\cos^2\\theta = 1"
            },
            {
              "type": "note",
              "en": "The notation $\\sin^2\\theta$ means $(\\sin\\theta)^2$, the square of the sine — NOT $\\sin(\\theta^2)$. This identity holds for every angle $\\theta$, which is what makes it an identity rather than an equation to solve.",
              "zh": "记号 $\\sin^2\\theta$ 表示 $(\\sin\\theta)^2$，即正弦的平方——不是 $\\sin(\\theta^2)$。这个恒等式对每一个角 $\\theta$ 都成立，这正是它是恒等式而非待解方程的原因。"
            },
            {
              "type": "h3",
              "en": "Rearrangements",
              "zh": "恒等式的变形"
            },
            {
              "type": "p",
              "en": "Because the identity is always true, you can solve it for either squared term. These two rearrangements let you find one function from the other:",
              "zh": "由于该恒等式恒成立，你可以把它解出任一平方项。下面两个变形能让你由一个函数求出另一个："
            },
            {
              "type": "math",
              "tex": "\\cos^2\\theta = 1 - \\sin^2\\theta \\qquad \\sin^2\\theta = 1 - \\cos^2\\theta"
            },
            {
              "type": "h3",
              "en": "Finding Cosine from Sine Using the Quadrant",
              "zh": "利用象限由正弦求余弦"
            },
            {
              "type": "p",
              "en": "Taking a square root introduces a $\\pm$ sign, so the identity alone gives two possible answers. The quadrant of $\\theta$ decides the sign: cosine is the $x$-coordinate (positive in Quadrants I and IV), and sine is the $y$-coordinate (positive in Quadrants I and II). Always fix the sign using the quadrant.",
              "zh": "开平方会引入 $\\pm$ 号，所以仅凭恒等式会得到两个可能答案。$\\theta$ 所在的象限决定符号：余弦是 $x$ 坐标（在第一、第四象限为正），正弦是 $y$ 坐标（在第一、第二象限为正）。务必用象限确定符号。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Cosine and tangent from sine",
                "zh": "例题 1：由正弦求余弦与正切"
              },
              "problem": {
                "en": "Given $\\sin\\theta = \\frac{3}{5}$ with $\\theta$ in Quadrant II, find $\\cos\\theta$ and $\\tan\\theta$.",
                "zh": "已知 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 在第二象限，求 $\\cos\\theta$ 与 $\\tan\\theta$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$, so $\\cos\\theta = \\pm\\frac{4}{5}$.",
                  "zh": "利用 $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$，所以 $\\cos\\theta = \\pm\\frac{4}{5}$。"
                },
                {
                  "type": "p",
                  "en": "In Quadrant II cosine is negative, so $\\cos\\theta = -\\frac{4}{5}$. Then $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$.",
                  "zh": "在第二象限余弦为负，所以 $\\cos\\theta = -\\frac{4}{5}$。于是 $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Quotient Identity and Verifying Identities",
              "zh": "商恒等式与恒等式的证明"
            },
            {
              "type": "p",
              "en": "Tangent is defined as the ratio of sine to cosine, $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ (wherever $\\cos\\theta \\neq 0$). To verify an identity, transform one side using known identities until it matches the other side; you may not simply move terms across the equals sign as if solving an equation, because the equality is what you are trying to prove.",
              "zh": "正切定义为正弦与余弦之比，$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$（在 $\\cos\\theta \\neq 0$ 处）。要证明一个恒等式，就用已知恒等式变换其中一边，直到它与另一边相同；你不能像解方程那样把项移到等号另一边，因为这个等式正是你要证明的对象。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Verifying an identity",
                "zh": "例题 2：证明恒等式"
              },
              "problem": {
                "en": "Verify that $\\dfrac{1 - \\cos^2\\theta}{\\sin\\theta} = \\sin\\theta$.",
                "zh": "证明 $\\dfrac{1 - \\cos^2\\theta}{\\sin\\theta} = \\sin\\theta$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Start with the left side. By the rearranged Pythagorean identity, $1 - \\cos^2\\theta = \\sin^2\\theta$:",
                  "zh": "从左边开始。由毕达哥拉斯恒等式的变形，$1 - \\cos^2\\theta = \\sin^2\\theta$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{1 - \\cos^2\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta"
                },
                {
                  "type": "p",
                  "en": "The left side now equals the right side, so the identity is verified.",
                  "zh": "左边现在等于右边，所以恒等式得证。"
                }
              ]
            },
            {
              "type": "p",
              "en": "These tools — the Pythagorean identity, its rearrangements, and the quotient identity — are the foundation for simplifying trigonometric expressions and solving equations later in the course.",
              "zh": "这些工具——毕达哥拉斯恒等式、它的变形以及商恒等式——是本课程后续化简三角式与解三角方程的基础。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What does $\\sin^2\\theta + \\cos^2\\theta$ equal for every angle $\\theta$?",
                "zh": "对每一个角 $\\theta$，$\\sin^2\\theta + \\cos^2\\theta$ 等于多少？"
              },
              "choices": [
                "$0$",
                "$1$",
                "$2$",
                "$\\tan\\theta$"
              ],
              "answer": 1,
              "explanation": {
                "en": "This is the Pythagorean identity, true for all $\\theta$: $\\sin^2\\theta + \\cos^2\\theta = 1$. It comes from $x^2 + y^2 = 1$ on the unit circle.",
                "zh": "这是毕达哥拉斯恒等式，对所有 $\\theta$ 成立：$\\sin^2\\theta + \\cos^2\\theta = 1$。它来自单位圆上的 $x^2 + y^2 = 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression is equal to $\\cos^2\\theta$?",
                "zh": "下列哪个表达式等于 $\\cos^2\\theta$？"
              },
              "choices": [
                "$1 + \\sin^2\\theta$",
                "$\\sin^2\\theta - 1$",
                "$1 - \\sin^2\\theta$",
                "$1 - \\sin\\theta$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Rearrange the Pythagorean identity by subtracting $\\sin^2\\theta$ from both sides: $\\cos^2\\theta = 1 - \\sin^2\\theta$.",
                "zh": "把毕达哥拉斯恒等式两边同减 $\\sin^2\\theta$：$\\cos^2\\theta = 1 - \\sin^2\\theta$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant I, what is $\\cos\\theta$?",
                "zh": "若 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 在第一象限，$\\cos\\theta$ 是多少？"
              },
              "choices": [
                "$\\frac{4}{5}$",
                "$-\\frac{4}{5}$",
                "$\\frac{5}{4}$",
                "$\\frac{2}{5}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$, so $\\cos\\theta = \\pm\\frac{4}{5}$. In Quadrant I cosine is positive, so $\\cos\\theta = \\frac{4}{5}$.",
                "zh": "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$，所以 $\\cos\\theta = \\pm\\frac{4}{5}$。第一象限余弦为正，所以 $\\cos\\theta = \\frac{4}{5}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression is always equal to $\\tan\\theta$ (where defined)?",
                "zh": "下列哪个表达式（在有定义处）总等于 $\\tan\\theta$？"
              },
              "choices": [
                "$\\frac{\\cos\\theta}{\\sin\\theta}$",
                "$\\sin\\theta\\cos\\theta$",
                "$\\frac{\\sin\\theta}{\\cos\\theta}$",
                "$\\frac{1}{\\sin\\theta}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The quotient identity defines tangent as sine over cosine: $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$.",
                "zh": "商恒等式把正切定义为正弦除以余弦：$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\tan\\theta \\cdot \\cos\\theta$.",
                "zh": "化简 $\\tan\\theta \\cdot \\cos\\theta$。"
              },
              "choices": [
                "$\\sin\\theta$",
                "$\\cos\\theta$",
                "$1$",
                "$\\cos^2\\theta$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Write $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, then $\\frac{\\sin\\theta}{\\cos\\theta}\\cdot\\cos\\theta = \\sin\\theta$ once the $\\cos\\theta$ cancels.",
                "zh": "写出 $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$，则 $\\frac{\\sin\\theta}{\\cos\\theta}\\cdot\\cos\\theta = \\sin\\theta$，因为 $\\cos\\theta$ 约去。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\sin\\theta = \\frac{5}{13}$ with $\\theta$ in Quadrant I, find $\\cos\\theta$. Give your answer as a fraction $a/b$.",
                "zh": "已知 $\\sin\\theta = \\frac{5}{13}$ 且 $\\theta$ 在第一象限，求 $\\cos\\theta$。用分数 $a/b$ 作答。"
              },
              "answer": "12/13",
              "accept": [
                "+12/13"
              ],
              "explanation": {
                "en": "$\\cos^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$, so $\\cos\\theta = \\frac{12}{13}$ (positive in Quadrant I).",
                "zh": "$\\cos^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$，所以 $\\cos\\theta = \\frac{12}{13}$（第一象限为正）。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $\\sin\\theta = 0.6$ and $\\cos\\theta = 0.8$, find $\\tan\\theta$ as a decimal.",
                "zh": "若 $\\sin\\theta = 0.6$ 且 $\\cos\\theta = 0.8$，求 $\\tan\\theta$（用小数表示）。"
              },
              "answer": "0.75",
              "accept": [
                "3/4",
                ".75"
              ],
              "explanation": {
                "en": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{0.6}{0.8} = 0.75$, which is the fraction $\\frac{3}{4}$.",
                "zh": "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{0.6}{0.8} = 0.75$，即分数 $\\frac{3}{4}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Given $\\cos\\theta = -\\frac{8}{17}$ with $\\theta$ in Quadrant III, find $\\sin\\theta$. Give your answer as a fraction $a/b$.",
                "zh": "已知 $\\cos\\theta = -\\frac{8}{17}$ 且 $\\theta$ 在第三象限，求 $\\sin\\theta$。用分数 $a/b$ 作答。"
              },
              "answer": "-15/17",
              "accept": [
                "-15/17.0"
              ],
              "explanation": {
                "en": "$\\sin^2\\theta = 1 - \\frac{64}{289} = \\frac{225}{289}$, so $\\sin\\theta = \\pm\\frac{15}{17}$. In Quadrant III sine is negative, so $\\sin\\theta = -\\frac{15}{17}$.",
                "zh": "$\\sin^2\\theta = 1 - \\frac{64}{289} = \\frac{225}{289}$，所以 $\\sin\\theta = \\pm\\frac{15}{17}$。第三象限正弦为负，所以 $\\sin\\theta = -\\frac{15}{17}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-9-modeling-with-geometry",
      "title": "Unit 9: Modeling with Geometry",
      "titleZh": "第九单元：用几何建模",
      "lessons": [
        {
          "id": "geometric-modeling-and-density",
          "title": "Geometric Modeling and Density",
          "titleZh": "几何建模与密度",
          "content": [
            {
              "type": "h2",
              "en": "Using Geometry to Model the Real World",
              "zh": "用几何为现实世界建模"
            },
            {
              "type": "p",
              "en": "Geometric modeling means describing a real object or situation with a simpler geometric shape so that we can compute lengths, areas, and volumes. A grain silo becomes a cylinder topped by a cone; a city becomes a region on a map; a soda can becomes a cylinder. The art of modeling is choosing a shape that is simple enough to compute with but faithful enough to give a useful answer. In this lesson we combine area and volume formulas with the idea of density to answer questions about mass, population, and cost.",
              "zh": "几何建模是指用较简单的几何形状来描述现实中的物体或情境，从而计算长度、面积和体积。粮仓可看成上面盖着圆锥的圆柱；一座城市可看成地图上的一块区域；一个易拉罐可看成圆柱。建模的艺术在于选择一个既足够简单便于计算、又足够贴近实际以给出有用答案的形状。本课我们把面积和体积公式与密度的概念结合起来，回答关于质量、人口和成本的问题。"
            },
            {
              "type": "h3",
              "en": "Density as a Rate",
              "zh": "作为比率的密度"
            },
            {
              "type": "p",
              "en": "Density is a rate that compares an amount to the space it occupies. Mass density compares mass to volume, and population density compares number of people to area. Both follow the same pattern:",
              "zh": "密度是一种比率，用来比较某种量与它所占据的空间。质量密度比较质量与体积，人口密度比较人数与面积。两者遵循同样的模式："
            },
            {
              "type": "math",
              "tex": "\\text{density} = \\frac{\\text{amount}}{\\text{size}} \\quad\\Longrightarrow\\quad \\text{amount} = \\text{density} \\times \\text{size}"
            },
            {
              "type": "p",
              "en": "For a solid object this becomes $\\text{mass} = \\text{density} \\times \\text{volume}$. For a region it becomes $\\text{population} = \\text{(population density)} \\times \\text{area}$. The key honors skill is keeping units consistent: if density is in grams per cubic centimeter, the volume must be in cubic centimeters.",
              "zh": "对于固体物体，这就变成 $\\text{质量} = \\text{密度} \\times \\text{体积}$。对于一块区域，则变成 $\\text{人口} = \\text{（人口密度）} \\times \\text{面积}$。荣誉级的关键技能是保持单位一致：如果密度以每立方厘米克为单位，体积就必须用立方厘米。"
            },
            {
              "type": "note",
              "en": "Density carries units. Writing $\\rho = 8$ is meaningless; write $\\rho = 8\\ \\text{g/cm}^3$. When you convert lengths, remember that areas scale by the square of the conversion factor and volumes by the cube: $1\\ \\text{m} = 100\\ \\text{cm}$, so $1\\ \\text{m}^3 = 100^3 = 1{,}000{,}000\\ \\text{cm}^3$.",
              "zh": "密度是带单位的。写 $\\rho = 8$ 没有意义；应写 $\\rho = 8\\ \\text{克/厘米}^3$。换算长度时要记住：面积按换算系数的平方缩放，体积按立方缩放：$1\\ \\text{米} = 100\\ \\text{厘米}$，所以 $1\\ \\text{米}^3 = 100^3 = 1{,}000{,}000\\ \\text{厘米}^3$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Mass from density and volume",
                "zh": "例题 1：由密度和体积求质量"
              },
              "problem": {
                "en": "A solid copper cylinder has radius $2\\ \\text{cm}$ and height $10\\ \\text{cm}$. Copper has density $8.96\\ \\text{g/cm}^3$. Find its mass, rounded to the nearest gram.",
                "zh": "一个实心铜圆柱半径为 $2\\ \\text{厘米}$，高为 $10\\ \\text{厘米}$。铜的密度为 $8.96\\ \\text{克/厘米}^3$。求它的质量，四舍五入到最接近的克。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find the volume of the cylinder using $V = \\pi r^2 h$:",
                  "zh": "先用 $V = \\pi r^2 h$ 求圆柱的体积："
                },
                {
                  "type": "math",
                  "tex": "V = \\pi (2)^2 (10) = 40\\pi \\approx 125.66\\ \\text{cm}^3"
                },
                {
                  "type": "p",
                  "en": "Then multiply by density: $\\text{mass} = 8.96 \\times 125.66 \\approx 1126\\ \\text{g}$.",
                  "zh": "再乘以密度：$\\text{质量} = 8.96 \\times 125.66 \\approx 1126\\ \\text{克}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Choosing a Geometric Model",
              "zh": "选择几何模型"
            },
            {
              "type": "p",
              "en": "Real objects rarely match a single formula exactly, so we approximate. A tree trunk is modeled as a cylinder, a scoop of ice cream as a hemisphere, a pencil tip as a cone. A good model captures the dominant shape and ignores small irregularities. When an object is a composite, break it into standard pieces, compute each volume, and add them.",
              "zh": "现实物体很少精确符合单一公式，因此我们要做近似。树干可建模为圆柱，一勺冰淇淋建模为半球，铅笔尖建模为圆锥。好的模型抓住主要形状，忽略微小的不规则处。当物体是组合体时，把它拆成标准部件，分别计算体积再相加。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Population density and design constraint",
                "zh": "例题 2：人口密度与设计约束"
              },
              "problem": {
                "en": "A rectangular town measures $6\\ \\text{km}$ by $4\\ \\text{km}$ and has $72{,}000$ residents. Find its population density in people per square kilometer, and determine how many people a new $2\\ \\text{km} \\times 2\\ \\text{km}$ district would hold at that same density.",
                "zh": "一个矩形城镇长 $6\\ \\text{千米}$、宽 $4\\ \\text{千米}$，有 $72{,}000$ 名居民。求它的人口密度（每平方千米人数），并求一个新的 $2\\ \\text{千米} \\times 2\\ \\text{千米}$ 区域按相同密度可容纳多少人。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Area of the town is $6 \\times 4 = 24\\ \\text{km}^2$, so density is $\\frac{72{,}000}{24} = 3{,}000$ people per $\\text{km}^2$.",
                  "zh": "城镇面积为 $6 \\times 4 = 24\\ \\text{千米}^2$，所以密度为 $\\frac{72{,}000}{24} = 3{,}000$ 人每 $\\text{千米}^2$。"
                },
                {
                  "type": "p",
                  "en": "The new district has area $2 \\times 2 = 4\\ \\text{km}^2$, so it holds $3{,}000 \\times 4 = 12{,}000$ people.",
                  "zh": "新区域面积为 $2 \\times 2 = 4\\ \\text{千米}^2$，因此可容纳 $3{,}000 \\times 4 = 12{,}000$ 人。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Optimization with Constraints",
              "zh": "带约束的优化"
            },
            {
              "type": "p",
              "en": "Modeling often includes a design goal: minimize material, maximize volume, or hit a budget. For example, a manufacturer wants a $355\\ \\text{cm}^3$ can that uses the least aluminum. We express surface area as a function of one variable using the fixed-volume constraint, then look for the smallest value. Even without calculus, we can compare candidate designs and pick the best. Constraints turn open-ended shapes into precise, answerable questions.",
              "zh": "建模常常包含设计目标：使材料最少、体积最大或符合预算。例如，制造商想要一个体积为 $355\\ \\text{厘米}^3$、用铝最少的罐子。我们利用固定体积这个约束，把表面积表示为单一变量的函数，然后寻找最小值。即使不用微积分，我们也可以比较候选方案并选出最佳。约束把开放式的形状问题变成精确、可解的问题。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A block of gold has volume $5\\ \\text{cm}^3$ and gold has density $19.3\\ \\text{g/cm}^3$. What is its mass?",
                "zh": "一块金子体积为 $5\\ \\text{cm}^3$，金的密度为 $19.3\\ \\text{g/cm}^3$。它的质量是多少？"
              },
              "choices": [
                "$3.86\\ \\text{g}$",
                "$24.3\\ \\text{g}$",
                "$96.5\\ \\text{g}$",
                "$965\\ \\text{g}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Mass equals density times volume: $19.3 \\times 5 = 96.5\\ \\text{g}$.",
                "zh": "质量等于密度乘体积：$19.3 \\times 5 = 96.5\\ \\text{g}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A county covers $150\\ \\text{km}^2$ and has $450{,}000$ people. What is its population density?",
                "zh": "一个县占地 $150\\ \\text{km}^2$，有 $450{,}000$ 人。它的人口密度是多少？"
              },
              "choices": [
                "$300$ people/$\\text{km}^2$",
                "$3{,}000$ people/$\\text{km}^2$",
                "$30$ people/$\\text{km}^2$",
                "$3$ people/$\\text{km}^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Population density is people divided by area: $\\frac{450{,}000}{150} = 3{,}000$ people per $\\text{km}^2$.",
                "zh": "人口密度是人数除以面积：$\\frac{450{,}000}{150} = 3{,}000$ 人每 $\\text{km}^2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many cubic centimeters are in $1$ cubic meter?",
                "zh": "$1$ 立方米等于多少立方厘米？"
              },
              "choices": [
                "$100$",
                "$10{,}000$",
                "$1{,}000{,}000$",
                "$1{,}000$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $1\\ \\text{m} = 100\\ \\text{cm}$, volume scales by the cube: $100^3 = 1{,}000{,}000\\ \\text{cm}^3$.",
                "zh": "因为 $1\\ \\text{m} = 100\\ \\text{cm}$，体积按立方缩放：$100^3 = 1{,}000{,}000\\ \\text{cm}^3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which geometric model best fits a single scoop of ice cream sitting on a flat surface?",
                "zh": "对于放在平面上的一勺冰淇淋，下列哪个几何模型最合适？"
              },
              "choices": [
                "A cube",
                "A hemisphere",
                "A cone with the point up",
                "A cylinder"
              ],
              "answer": 1,
              "explanation": {
                "en": "A rounded scoop resting on a flat top is well modeled by a hemisphere, which is half of a sphere.",
                "zh": "放在平面上的圆形一勺，用半球（球的一半）建模最合适。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rectangular pool $8\\ \\text{m}$ by $5\\ \\text{m}$ by $2\\ \\text{m}$ deep is filled with water of density $1000\\ \\text{kg/m}^3$. What is the mass of the water?",
                "zh": "一个 $8\\ \\text{m} \\times 5\\ \\text{m}$、深 $2\\ \\text{m}$ 的矩形水池，装满密度为 $1000\\ \\text{kg/m}^3$ 的水。水的质量是多少？"
              },
              "choices": [
                "$80{,}000\\ \\text{kg}$",
                "$8{,}000\\ \\text{kg}$",
                "$800{,}000\\ \\text{kg}$",
                "$16{,}000\\ \\text{kg}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Volume is $8 \\times 5 \\times 2 = 80\\ \\text{m}^3$; mass is $1000 \\times 80 = 80{,}000\\ \\text{kg}$.",
                "zh": "体积为 $8 \\times 5 \\times 2 = 80\\ \\text{m}^3$；质量为 $1000 \\times 80 = 80{,}000\\ \\text{kg}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A city of area $40\\ \\text{km}^2$ has population density $2{,}500$ people per $\\text{km}^2$. How many people live there? Give a whole number.",
                "zh": "一座面积为 $40\\ \\text{km}^2$ 的城市，人口密度为 $2{,}500$ 人每 $\\text{km}^2$。有多少人居住？请给出整数。"
              },
              "answer": "100000",
              "accept": [
                "100,000",
                "100000"
              ],
              "explanation": {
                "en": "Population equals density times area: $2{,}500 \\times 40 = 100{,}000$ people.",
                "zh": "人口等于密度乘面积：$2{,}500 \\times 40 = 100{,}000$ 人。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A solid aluminum cube has side $3\\ \\text{cm}$. Aluminum has density $2.7\\ \\text{g/cm}^3$. Find the mass in grams (round to the nearest whole gram).",
                "zh": "一个实心铝立方体边长 $3\\ \\text{cm}$，铝的密度为 $2.7\\ \\text{g/cm}^3$。求质量（克，四舍五入到整数）。"
              },
              "answer": "73",
              "accept": [
                "73g",
                "73 g"
              ],
              "explanation": {
                "en": "Volume is $3^3 = 27\\ \\text{cm}^3$; mass is $2.7 \\times 27 = 72.9 \\approx 73\\ \\text{g}$.",
                "zh": "体积为 $3^3 = 27\\ \\text{cm}^3$；质量为 $2.7 \\times 27 = 72.9 \\approx 73\\ \\text{g}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An open-top box is to hold $48\\ \\text{cm}^3$. Its square base has side $4\\ \\text{cm}$. What must its height be, in centimeters?",
                "zh": "一个无盖盒子要容纳 $48\\ \\text{cm}^3$。它的正方形底边长为 $4\\ \\text{cm}$。它的高应是多少厘米？"
              },
              "answer": "3",
              "accept": [
                "3 cm",
                "3cm"
              ],
              "explanation": {
                "en": "Volume of a box is base area times height: $16 \\times h = 48$, so $h = 3\\ \\text{cm}$.",
                "zh": "盒子的体积是底面积乘高：$16 \\times h = 48$，所以 $h = 3\\ \\text{cm}$。"
              }
            }
          ]
        },
        {
          "id": "volume-cross-sections-solids",
          "title": "Volume, Cross-Sections, and Solids of Revolution",
          "titleZh": "体积、截面与旋转体",
          "content": [
            {
              "type": "h2",
              "en": "Volumes of Common Solids",
              "zh": "常见立体的体积"
            },
            {
              "type": "p",
              "en": "Every three-dimensional solid encloses a measurable amount of space called its volume, measured in cubic units. Honors students should know these formulas fluently and understand where they come from. A prism or cylinder has two congruent parallel bases, and its volume is simply the base area times the height. A pyramid or cone tapers to a point, and its volume is exactly one third of the corresponding prism or cylinder with the same base and height.",
              "zh": "每个三维立体都围成一块可度量的空间，称为它的体积，以立方单位度量。荣誉级学生应熟练掌握这些公式并理解其由来。棱柱或圆柱有两个全等且平行的底面，其体积就是底面积乘高。棱锥或圆锥收缩到一个顶点，其体积恰好是同底同高的棱柱或圆柱的三分之一。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Prism / cylinder: $V = B h$ (base area $\\times$ height)",
                  "zh": "棱柱／圆柱：$V = B h$（底面积 $\\times$ 高）"
                },
                {
                  "en": "Cylinder specifically: $V = \\pi r^2 h$",
                  "zh": "特别地，圆柱：$V = \\pi r^2 h$"
                },
                {
                  "en": "Pyramid / cone: $V = \\frac{1}{3} B h$",
                  "zh": "棱锥／圆锥：$V = \\frac{1}{3} B h$"
                },
                {
                  "en": "Cone specifically: $V = \\frac{1}{3}\\pi r^2 h$",
                  "zh": "特别地，圆锥：$V = \\frac{1}{3}\\pi r^2 h$"
                },
                {
                  "en": "Sphere: $V = \\frac{4}{3}\\pi r^3$",
                  "zh": "球：$V = \\frac{4}{3}\\pi r^3$"
                }
              ]
            },
            {
              "type": "note",
              "en": "The factor of $\\frac{1}{3}$ in the cone and pyramid is not a coincidence: three congruent pyramids can be assembled into a cube-like prism of the same base and height. This is why a cone holds exactly one third of the cylinder that surrounds it.",
              "zh": "圆锥与棱锥中的 $\\frac{1}{3}$ 系数并非巧合：三个全等的棱锥可以拼成一个同底同高的类立方棱柱。这就是为什么圆锥恰好装下包围它的圆柱的三分之一。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Volume of a cone",
                "zh": "例题 1：圆锥的体积"
              },
              "problem": {
                "en": "Find the exact volume of a cone with radius $3\\ \\text{cm}$ and height $8\\ \\text{cm}$.",
                "zh": "求半径 $3\\ \\text{cm}$、高 $8\\ \\text{cm}$ 的圆锥的精确体积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Apply $V = \\frac{1}{3}\\pi r^2 h$ with $r = 3$ and $h = 8$:",
                  "zh": "把 $r = 3$、$h = 8$ 代入 $V = \\frac{1}{3}\\pi r^2 h$："
                },
                {
                  "type": "math",
                  "tex": "V = \\frac{1}{3}\\pi (3)^2 (8) = \\frac{1}{3}\\pi (9)(8) = 24\\pi\\ \\text{cm}^3"
                },
                {
                  "type": "p",
                  "en": "So the exact volume is $24\\pi\\ \\text{cm}^3 \\approx 75.4\\ \\text{cm}^3$.",
                  "zh": "所以精确体积为 $24\\pi\\ \\text{cm}^3 \\approx 75.4\\ \\text{cm}^3$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Two-Dimensional Cross-Sections",
              "zh": "二维截面"
            },
            {
              "type": "p",
              "en": "A cross-section is the flat shape formed when a plane slices through a solid. Slicing a cylinder with a plane parallel to its base gives a circle; slicing it with a plane perpendicular to the base gives a rectangle. Slicing a sphere in any direction always gives a circle. Understanding cross-sections lets us reverse the process: from a set of slices we can imagine and even build the whole solid.",
              "zh": "截面是一个平面切过立体时形成的平面图形。用与底面平行的平面切圆柱得到圆；用与底面垂直的平面切圆柱得到矩形。用任意方向切球总是得到圆。理解截面让我们可以逆向思考：从一组切片就能想象甚至构造出整个立体。"
            },
            {
              "type": "note",
              "en": "A common error is assuming a vertical slice of a cone gives a triangle in every case. A vertical slice through the apex gives a triangle, but a vertical slice off to the side gives a curved region bounded by part of a hyperbola or parabola. Always picture exactly where the plane cuts.",
              "zh": "常见错误是认为圆锥的竖直切片在任何情况下都得到三角形。经过顶点的竖直切片得到三角形，但偏向一侧的竖直切片得到一个由双曲线或抛物线一段所围成的曲边区域。务必想清楚平面究竟切在何处。"
            },
            {
              "type": "h3",
              "en": "Solids of Revolution",
              "zh": "旋转体"
            },
            {
              "type": "p",
              "en": "If you spin a two-dimensional region around a straight line (the axis of revolution), it sweeps out a three-dimensional solid of revolution. Rotating a rectangle around one of its sides produces a cylinder. Rotating a right triangle around a leg produces a cone. Rotating a semicircle around its diameter produces a sphere. This is a powerful way to generate and analyze solids, and it is the geometric foundation of the disk method you will meet in calculus.",
              "zh": "如果把一个二维区域绕一条直线（旋转轴）旋转，它就扫出一个三维旋转体。把矩形绕它的一条边旋转得到圆柱；把直角三角形绕一条直角边旋转得到圆锥；把半圆绕它的直径旋转得到球。这是生成和分析立体的有力方法，也是你将在微积分中遇到的圆盘法的几何基础。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Identifying a solid of revolution",
                "zh": "例题 2：辨识旋转体"
              },
              "problem": {
                "en": "The region bounded by the $x$-axis, the line $x = 4$, and the line $y = x$ is rotated about the $x$-axis. Describe the resulting solid and find its volume.",
                "zh": "由 $x$ 轴、直线 $x = 4$ 和直线 $y = x$ 所围成的区域绕 $x$ 轴旋转。描述所得立体并求其体积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The region is a right triangle with legs of length $4$ (along the axis) and $4$ (the height at $x = 4$). Rotating a right triangle about a leg produces a cone whose radius equals the height at the far end, $r = 4$, and whose height along the axis is $h = 4$.",
                  "zh": "该区域是一个直角三角形，两条直角边长都是 $4$（一条沿轴，另一条是 $x = 4$ 处的高）。把直角三角形绕一条直角边旋转得到圆锥，其底半径等于远端的高 $r = 4$，沿轴的高 $h = 4$。"
                },
                {
                  "type": "math",
                  "tex": "V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (4)^2 (4) = \\frac{64}{3}\\pi\\ \\text{cubic units}"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Cavalieri's Principle",
              "zh": "卡瓦列里原理"
            },
            {
              "type": "p",
              "en": "Cavalieri's principle states that if two solids have the same height and every horizontal cross-section at the same level has equal area, then the two solids have equal volume. This is why a slanted (oblique) stack of coins has the same volume as a straight stack: each coin has the same area no matter how the stack leans. The principle justifies using $V = Bh$ even for oblique prisms and cylinders.",
              "zh": "卡瓦列里原理指出：如果两个立体的高相同，且在每一相同高度处的水平截面面积都相等，那么这两个立体的体积相等。这就是为什么一摞倾斜（斜）叠放的硬币与竖直叠放的体积相同：无论怎样倾斜，每枚硬币的面积都不变。该原理证明了即使对斜棱柱和斜圆柱也可以使用 $V = Bh$。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the volume of a cylinder with radius $5\\ \\text{cm}$ and height $4\\ \\text{cm}$?",
                "zh": "半径 $5\\ \\text{cm}$、高 $4\\ \\text{cm}$ 的圆柱体积是多少？"
              },
              "choices": [
                "$20\\pi\\ \\text{cm}^3$",
                "$100\\pi\\ \\text{cm}^3$",
                "$40\\pi\\ \\text{cm}^3$",
                "$200\\pi\\ \\text{cm}^3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Use $V = \\pi r^2 h = \\pi (5)^2 (4) = 100\\pi\\ \\text{cm}^3$.",
                "zh": "用 $V = \\pi r^2 h = \\pi (5)^2 (4) = 100\\pi\\ \\text{cm}^3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A cone and a cylinder have the same base radius and the same height. The cone's volume is what fraction of the cylinder's?",
                "zh": "一个圆锥与一个圆柱底半径相同、高相同。圆锥的体积是圆柱的几分之几？"
              },
              "choices": [
                "$\\frac{1}{2}$",
                "$\\frac{2}{3}$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{4}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A cone is $V = \\frac{1}{3}\\pi r^2 h$ while the cylinder is $\\pi r^2 h$, so the cone is exactly one third.",
                "zh": "圆锥为 $V = \\frac{1}{3}\\pi r^2 h$，圆柱为 $\\pi r^2 h$，所以圆锥恰好是三分之一。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What shape is the cross-section when a sphere is sliced by any plane that passes through it?",
                "zh": "用任意穿过球的平面切球，截面是什么形状？"
              },
              "choices": [
                "An ellipse",
                "A circle",
                "A square",
                "A triangle"
              ],
              "answer": 1,
              "explanation": {
                "en": "Every planar slice of a sphere is a circle (a great circle when the plane passes through the center, a smaller circle otherwise).",
                "zh": "球的任何平面切片都是圆（平面过球心时为大圆，否则为较小的圆）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Rotating a right triangle about one of its legs produces which solid?",
                "zh": "把直角三角形绕它的一条直角边旋转得到哪种立体？"
              },
              "choices": [
                "A cone",
                "A sphere",
                "A cylinder",
                "A pyramid"
              ],
              "answer": 0,
              "explanation": {
                "en": "The leg becomes the axis and the other leg sweeps the circular base, producing a cone.",
                "zh": "那条直角边成为旋转轴，另一条直角边扫出圆形底面，得到圆锥。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two prisms have equal heights, and at every level their horizontal cross-sections have equal areas. What can you conclude?",
                "zh": "两个棱柱高相等，且在每一高度处的水平截面面积都相等。你能得出什么结论？"
              },
              "choices": [
                "They have equal surface areas",
                "They are congruent",
                "They have equal volumes",
                "Nothing can be concluded"
              ],
              "answer": 2,
              "explanation": {
                "en": "By Cavalieri's principle, equal heights and equal cross-sectional areas at every level guarantee equal volumes.",
                "zh": "由卡瓦列里原理，高相等且每一高度处截面面积相等，就保证体积相等。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the volume of a sphere of radius $3\\ \\text{cm}$. Give your answer as an exact multiple of $\\pi$, in the form $k\\pi$ (write just the number $k$).",
                "zh": "求半径 $3\\ \\text{cm}$ 的球的体积。以 $\\pi$ 的精确倍数 $k\\pi$ 形式作答（只写数字 $k$）。"
              },
              "answer": "36",
              "accept": [
                "36pi",
                "36\\pi"
              ],
              "explanation": {
                "en": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (27) = 36\\pi\\ \\text{cm}^3$, so $k = 36$.",
                "zh": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (27) = 36\\pi\\ \\text{cm}^3$，所以 $k = 36$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A square pyramid has a base of side $6\\ \\text{cm}$ and height $10\\ \\text{cm}$. Find its volume in cubic centimeters.",
                "zh": "一个正四棱锥底边长 $6\\ \\text{cm}$，高 $10\\ \\text{cm}$。求它的体积（立方厘米）。"
              },
              "answer": "120",
              "accept": [
                "120 cm^3",
                "120cm^3"
              ],
              "explanation": {
                "en": "Base area is $6^2 = 36$; volume is $\\frac{1}{3}(36)(10) = 120\\ \\text{cm}^3$.",
                "zh": "底面积为 $6^2 = 36$；体积为 $\\frac{1}{3}(36)(10) = 120\\ \\text{cm}^3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The region bounded by the $x$-axis, $y = 2$, and $x = 5$ (a rectangle) is rotated about the $x$-axis. The resulting cylinder has what exact volume? Give the coefficient $k$ where the volume is $k\\pi$.",
                "zh": "由 $x$ 轴、$y = 2$ 和 $x = 5$ 围成的矩形区域绕 $x$ 轴旋转。所得圆柱的精确体积是多少？体积为 $k\\pi$，请给出系数 $k$。"
              },
              "answer": "20",
              "accept": [
                "20pi",
                "20\\pi"
              ],
              "explanation": {
                "en": "Rotating gives a cylinder with radius $2$ and height $5$: $V = \\pi (2)^2 (5) = 20\\pi$, so $k = 20$.",
                "zh": "旋转得到半径 $2$、高 $5$ 的圆柱：$V = \\pi (2)^2 (5) = 20\\pi$，所以 $k = 20$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-10-statistical-inferences",
      "title": "Unit 10: Statistical Inferences",
      "titleZh": "第十单元：统计推断",
      "lessons": [
        {
          "id": "normal-distributions",
          "title": "Normal Distributions and the Empirical Rule",
          "titleZh": "正态分布与经验法则",
          "content": [
            {
              "type": "h2",
              "en": "The Shape of Randomness: the Normal Distribution",
              "zh": "随机的形状：正态分布"
            },
            {
              "type": "p",
              "en": "Many measurements in the real world — heights, test scores, measurement errors, the total when you roll many dice — pile up in the same characteristic bell shape. This bell-shaped, symmetric curve is called a normal distribution (正态分布). It is completely described by just two numbers: the mean $\\mu$, which locates the center and the peak, and the standard deviation $\\sigma$ (标准差), which measures how spread out the data is. A large $\\sigma$ gives a wide, flat bell; a small $\\sigma$ gives a tall, narrow one.",
              "zh": "现实世界中的许多测量——身高、考试成绩、测量误差、掷许多骰子的总和——都会堆成同一种特有的钟形。这条钟形、对称的曲线叫做正态分布（normal distribution）。它完全由两个数决定：均值 $\\mu$ 决定中心和峰值的位置，标准差 $\\sigma$ 衡量数据的分散程度。$\\sigma$ 大，钟形就宽而扁；$\\sigma$ 小，钟形就高而窄。"
            },
            {
              "type": "p",
              "en": "The curve is symmetric about the mean, so exactly $50\\%$ of the data lies below $\\mu$ and $50\\%$ lies above it. The total area under the curve equals $1$ (or $100\\%$), and the area over any interval gives the proportion of data — or the probability — in that interval.",
              "zh": "曲线关于均值对称，所以恰好有 $50\\%$ 的数据落在 $\\mu$ 以下，$50\\%$ 落在其以上。曲线下的总面积等于 $1$（即 $100\\%$），任意区间上方的面积就给出该区间内数据的比例——也就是概率。"
            },
            {
              "type": "h3",
              "en": "The 68-95-99.7 Empirical Rule",
              "zh": "68-95-99.7 经验法则"
            },
            {
              "type": "p",
              "en": "For any normal distribution, the fraction of data within a given number of standard deviations of the mean is always the same. This is the empirical rule (经验法则):",
              "zh": "对任意正态分布，落在均值某个标准差数量范围内的数据比例总是相同的。这就是经验法则（empirical rule）："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "About $68\\%$ of data lies within $1$ standard deviation of the mean, between $\\mu-\\sigma$ and $\\mu+\\sigma$.",
                  "zh": "约 $68\\%$ 的数据落在均值 $1$ 个标准差以内，即 $\\mu-\\sigma$ 到 $\\mu+\\sigma$ 之间。"
                },
                {
                  "en": "About $95\\%$ lies within $2$ standard deviations, between $\\mu-2\\sigma$ and $\\mu+2\\sigma$.",
                  "zh": "约 $95\\%$ 落在 $2$ 个标准差以内，即 $\\mu-2\\sigma$ 到 $\\mu+2\\sigma$ 之间。"
                },
                {
                  "en": "About $99.7\\%$ lies within $3$ standard deviations, between $\\mu-3\\sigma$ and $\\mu+3\\sigma$.",
                  "zh": "约 $99.7\\%$ 落在 $3$ 个标准差以内，即 $\\mu-3\\sigma$ 到 $\\mu+3\\sigma$ 之间。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Because the curve is symmetric, you can split each band in half. For example, the $68\\%$ inside $1\\sigma$ means $34\\%$ sits between $\\mu$ and $\\mu+\\sigma$, and $34\\%$ between $\\mu-\\sigma$ and $\\mu$. Sketch the bell and label $\\mu, \\mu\\pm\\sigma, \\mu\\pm 2\\sigma, \\mu\\pm 3\\sigma$ before computing — most empirical-rule errors come from not drawing the picture.",
              "zh": "由于曲线对称，你可以把每个区间对半分。例如 $1\\sigma$ 以内的 $68\\%$ 意味着 $\\mu$ 到 $\\mu+\\sigma$ 之间占 $34\\%$，$\\mu-\\sigma$ 到 $\\mu$ 之间也占 $34\\%$。计算前先画出钟形并标出 $\\mu, \\mu\\pm\\sigma, \\mu\\pm 2\\sigma, \\mu\\pm 3\\sigma$——大多数经验法则的错误都源于没有画图。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying the empirical rule",
                "zh": "例题 1：运用经验法则"
              },
              "problem": {
                "en": "Adult resting heart rates are approximately normal with $\\mu = 72$ beats/min and $\\sigma = 6$. What percent of adults have a resting heart rate between $66$ and $84$ beats/min?",
                "zh": "成年人静息心率近似服从正态分布，$\\mu = 72$ 次/分，$\\sigma = 6$。有多少百分比的成年人静息心率在 $66$ 到 $84$ 次/分之间？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First convert the endpoints to standard deviations. Since $66 = 72 - 6 = \\mu - 1\\sigma$ and $84 = 72 + 12 = \\mu + 2\\sigma$, we want the area from $-1\\sigma$ to $+2\\sigma$.",
                  "zh": "先把端点换算成标准差。因为 $66 = 72 - 6 = \\mu - 1\\sigma$，$84 = 72 + 12 = \\mu + 2\\sigma$，所以要求的是 $-1\\sigma$ 到 $+2\\sigma$ 之间的面积。"
                },
                {
                  "type": "p",
                  "en": "From $\\mu-\\sigma$ to $\\mu$ is $34\\%$; from $\\mu$ to $\\mu+2\\sigma$ is half of $95\\%$, namely $47.5\\%$. Add them:",
                  "zh": "从 $\\mu-\\sigma$ 到 $\\mu$ 是 $34\\%$；从 $\\mu$ 到 $\\mu+2\\sigma$ 是 $95\\%$ 的一半，即 $47.5\\%$。相加："
                },
                {
                  "type": "math",
                  "tex": "34\\% + 47.5\\% = 81.5\\%"
                },
                {
                  "en": "So about $81.5\\%$ of adults fall in that range.",
                  "zh": "所以约 $81.5\\%$ 的成年人落在这个范围内。",
                  "type": "p"
                }
              ]
            },
            {
              "type": "h3",
              "en": "z-Scores: Measuring Position",
              "zh": "z 分数：衡量位置"
            },
            {
              "type": "p",
              "en": "To compare values from different distributions, we standardize them. The z-score (z 分数或标准分) of a value $x$ tells how many standard deviations $x$ is from the mean:",
              "zh": "为了比较来自不同分布的数值，我们把它们标准化。数值 $x$ 的 z 分数（z-score）告诉我们 $x$ 距离均值有多少个标准差："
            },
            {
              "type": "math",
              "tex": "z = \\frac{x - \\mu}{\\sigma}"
            },
            {
              "type": "p",
              "en": "A positive $z$ means $x$ is above the mean; a negative $z$ means below. A z-score of $0$ is exactly average. Because z-scores strip away the original units, a student with $z = 1.5$ on the SAT and a plant with $z = 1.5$ in height both sit the same relative distance above their respective means.",
              "zh": "$z$ 为正表示 $x$ 高于均值；为负表示低于均值。z 分数为 $0$ 正好是平均水平。由于 z 分数去掉了原始单位，SAT 成绩 $z = 1.5$ 的学生和身高 $z = 1.5$ 的植物，都处在各自均值之上相同的相对位置。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: z-scores and percentiles",
                "zh": "例题 2：z 分数与百分位"
              },
              "problem": {
                "en": "A standardized test has $\\mu = 500$ and $\\sigma = 100$. Priya scores $700$. Find her z-score, and estimate her percentile using the empirical rule.",
                "zh": "某标准化考试 $\\mu = 500$，$\\sigma = 100$。Priya 得了 $700$ 分。求她的 z 分数，并用经验法则估计她的百分位。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "z = \\frac{700 - 500}{100} = \\frac{200}{100} = 2"
                },
                {
                  "type": "p",
                  "en": "So Priya is $2$ standard deviations above the mean. The proportion below her is the $50\\%$ below the mean plus half of $95\\%$ (the $\\mu$-to-$\\mu+2\\sigma$ band): $50\\% + 47.5\\% = 97.5\\%$.",
                  "zh": "所以 Priya 在均值之上 $2$ 个标准差。她之下的比例等于均值以下的 $50\\%$ 加上 $95\\%$ 的一半（$\\mu$ 到 $\\mu+2\\sigma$ 区间）：$50\\% + 47.5\\% = 97.5\\%$。"
                },
                {
                  "type": "p",
                  "en": "Priya scores at about the $97.5$th percentile — higher than roughly $97.5\\%$ of test-takers.",
                  "zh": "Priya 大约在第 $97.5$ 百分位——比约 $97.5\\%$ 的考生都高。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In any normal distribution, about what percent of the data lies within $1$ standard deviation of the mean?",
                "zh": "在任意正态分布中，约有多少百分比的数据落在均值 $1$ 个标准差以内？"
              },
              "choices": [
                "$34\\%$",
                "$68\\%$",
                "$95\\%$",
                "$99.7\\%$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The empirical rule states about $68\\%$ lies within $1\\sigma$, $95\\%$ within $2\\sigma$, and $99.7\\%$ within $3\\sigma$. The $34\\%$ is only one half of the $1\\sigma$ band.",
                "zh": "经验法则指出约 $68\\%$ 落在 $1\\sigma$ 内，$95\\%$ 在 $2\\sigma$ 内，$99.7\\%$ 在 $3\\sigma$ 内。$34\\%$ 只是 $1\\sigma$ 区间的一半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "IQ scores are normal with $\\mu = 100$ and $\\sigma = 15$. What is the z-score of an IQ of $130$?",
                "zh": "智商分数服从正态分布，$\\mu = 100$，$\\sigma = 15$。智商 $130$ 的 z 分数是多少？"
              },
              "choices": [
                "$1$",
                "$1.5$",
                "$2$",
                "$3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Use $z = \\frac{x-\\mu}{\\sigma} = \\frac{130-100}{15} = \\frac{30}{15} = 2$. The score is exactly two standard deviations above the mean.",
                "zh": "用 $z = \\frac{x-\\mu}{\\sigma} = \\frac{130-100}{15} = \\frac{30}{15} = 2$。该分数正好在均值之上两个标准差。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Scores are normal with $\\mu = 500$ and $\\sigma = 100$. Find the z-score of a score of $650$. Give a decimal.",
                "zh": "分数服从正态分布，$\\mu = 500$，$\\sigma = 100$。求 $650$ 分的 z 分数。用小数表示。"
              },
              "answer": "1.5",
              "accept": [
                "1.50",
                "+1.5"
              ],
              "explanation": {
                "en": "$z = \\frac{650 - 500}{100} = \\frac{150}{100} = 1.5$. The score is one and a half standard deviations above the mean.",
                "zh": "$z = \\frac{650 - 500}{100} = \\frac{150}{100} = 1.5$。该分数在均值之上一个半标准差。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For a normal distribution, what percent of the data lies within $2$ standard deviations of the mean?",
                "zh": "对于正态分布，有多少百分比的数据落在均值 $2$ 个标准差以内？"
              },
              "choices": [
                "$95\\%$",
                "$68\\%$",
                "$99.7\\%$",
                "$50\\%$"
              ],
              "answer": 0,
              "explanation": {
                "en": "By the empirical rule the $2\\sigma$ band captures about $95\\%$ of the data. Only $68\\%$ falls within $1\\sigma$, and $99.7\\%$ within $3\\sigma$.",
                "zh": "根据经验法则，$2\\sigma$ 区间涵盖约 $95\\%$ 的数据。只有 $68\\%$ 落在 $1\\sigma$ 内，$99.7\\%$ 在 $3\\sigma$ 内。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A crop's yield is normal with $\\mu = 70$ bushels and $\\sigma = 4$. What yield is exactly $2$ standard deviations above the mean? Give a number.",
                "zh": "某作物产量服从正态分布，$\\mu = 70$ 蒲式耳，$\\sigma = 4$。恰好在均值之上 $2$ 个标准差的产量是多少？用数字表示。"
              },
              "answer": "78",
              "accept": [
                "78.0",
                "78 bushels"
              ],
              "explanation": {
                "en": "Two standard deviations above the mean is $\\mu + 2\\sigma = 70 + 2(4) = 70 + 8 = 78$ bushels.",
                "zh": "均值之上 $2$ 个标准差是 $\\mu + 2\\sigma = 70 + 2(4) = 70 + 8 = 78$ 蒲式耳。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a normal distribution, what percent of data lies between the mean and $1$ standard deviation above the mean?",
                "zh": "在正态分布中，均值到均值之上 $1$ 个标准差之间有多少百分比的数据？"
              },
              "choices": [
                "$47.5\\%$",
                "$68\\%$",
                "$50\\%$",
                "$34\\%$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The whole $1\\sigma$ band holds $68\\%$, and symmetry splits it evenly, so from $\\mu$ to $\\mu+\\sigma$ is $68\\% \\div 2 = 34\\%$.",
                "zh": "整个 $1\\sigma$ 区间占 $68\\%$，对称性把它平分，所以从 $\\mu$ 到 $\\mu+\\sigma$ 是 $68\\% \\div 2 = 34\\%$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A value has a z-score of $1$ in a normal distribution. Approximately what percentile is it at, using the empirical rule? Give a whole number.",
                "zh": "在正态分布中某数值的 z 分数为 $1$。用经验法则估计它大约位于第几百分位？用整数表示。"
              },
              "answer": "84",
              "accept": [
                "84th",
                "84%"
              ],
              "explanation": {
                "en": "The proportion below $z = 1$ is the $50\\%$ below the mean plus the $34\\%$ from $\\mu$ to $\\mu+\\sigma$: $50\\% + 34\\% = 84\\%$, the $84$th percentile.",
                "zh": "$z = 1$ 以下的比例是均值以下的 $50\\%$ 加上 $\\mu$ 到 $\\mu+\\sigma$ 的 $34\\%$：$50\\% + 34\\% = 84\\%$，即第 $84$ 百分位。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Battery life is normal with $\\mu = 200$ hours and $\\sigma = 20$. What percent of batteries last less than $240$ hours?",
                "zh": "电池寿命服从正态分布，$\\mu = 200$ 小时，$\\sigma = 20$。有多少百分比的电池寿命少于 $240$ 小时？"
              },
              "choices": [
                "$84\\%$",
                "$95\\%$",
                "$97.5\\%$",
                "$99.85\\%$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Since $240 = 200 + 2(20) = \\mu + 2\\sigma$, the area below is $50\\%$ (below mean) plus half of $95\\%$ = $47.5\\%$, giving $50\\% + 47.5\\% = 97.5\\%$.",
                "zh": "因为 $240 = 200 + 2(20) = \\mu + 2\\sigma$，其以下面积为 $50\\%$（均值以下）加上 $95\\%$ 的一半 $47.5\\%$，共 $50\\% + 47.5\\% = 97.5\\%$。"
              }
            }
          ]
        },
        {
          "id": "sampling-experiments-inferences",
          "title": "Sampling, Experiments, and Making Inferences",
          "titleZh": "抽样、实验与统计推断",
          "content": [
            {
              "type": "h2",
              "en": "From a Sample to a Conclusion",
              "zh": "从样本到结论"
            },
            {
              "type": "p",
              "en": "We rarely can measure an entire population (总体) — every voter, every battery, every fish in a lake. Instead we study a sample (样本), a smaller group, and use it to make an inference (统计推断) about the whole population. The central question of statistics is: how much can a sample tell us, and how sure can we be? The honest answer depends entirely on how the sample was collected.",
              "zh": "我们很少能测量整个总体（population）——每一位选民、每一块电池、湖里的每一条鱼。于是我们研究一个较小的群体，即样本（sample），并用它对整个总体作出统计推断（inference）。统计学的核心问题是：一个样本能告诉我们多少，我们又能有多确定？诚实的答案完全取决于样本是如何收集的。"
            },
            {
              "type": "h3",
              "en": "Random Sampling versus Bias",
              "zh": "随机抽样与偏差"
            },
            {
              "type": "p",
              "en": "A sample is only trustworthy if it is representative of the population. The gold standard is a random sample (随机样本), in which every member of the population has an equal chance of being chosen. Randomness protects us from bias (偏差) — a systematic tendency to over- or under-represent part of the population. Convenience samples (asking whoever is nearby) and voluntary-response samples (only those who care reply) are notoriously biased.",
              "zh": "只有当样本能代表总体时，它才可信。黄金标准是随机样本（random sample），即总体中每个成员被选中的机会均等。随机性保护我们免受偏差（bias）的影响——偏差是系统性地过高或过低代表总体某一部分的倾向。便利抽样（就近询问）和自愿应答抽样（只有关心的人才回复）都是出了名的有偏差。"
            },
            {
              "type": "note",
              "en": "Bias is not fixed by collecting a bigger sample. A poll of one million people taken only from one website is still biased toward that site's users. Only good sampling design — genuine randomness — removes bias. A large biased sample is worse than a small random one because it gives false confidence.",
              "zh": "增大样本量并不能消除偏差。一个只从某个网站抽取的一百万人的民调，仍然偏向该网站的用户。只有良好的抽样设计——真正的随机性——才能消除偏差。大的有偏样本比小的随机样本更糟，因为它带来虚假的信心。"
            },
            {
              "type": "h3",
              "en": "Three Kinds of Studies",
              "zh": "三类研究"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A sample survey (抽样调查) measures a population by questioning a sample; it estimates something that already exists, like an approval rating.",
                  "zh": "抽样调查（sample survey）通过询问样本来测量总体；它估计某个已经存在的量，比如支持率。"
                },
                {
                  "en": "An observational study (观察性研究) watches groups without intervening; it can reveal associations but cannot by itself prove cause and effect.",
                  "zh": "观察性研究（observational study）在不干预的情况下观察各组；它能揭示关联，但本身不能证明因果关系。"
                },
                {
                  "en": "An experiment (实验) deliberately imposes a treatment on subjects — ideally with random assignment to treatment and control groups — and is the only design that can establish causation.",
                  "zh": "实验（experiment）刻意对受试者施加处理——理想情况下随机分配到处理组和对照组——是唯一能确立因果关系的设计。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Naming the study",
                "zh": "例题 1：判断研究类型"
              },
              "problem": {
                "en": "Researchers randomly split $200$ volunteers into two groups; one group takes a new vitamin daily and the other takes a placebo, and colds are counted over the winter. Which type of study is this, and can it show causation?",
                "zh": "研究者把 $200$ 名志愿者随机分成两组；一组每天服用一种新维生素，另一组服用安慰剂，整个冬天记录感冒次数。这是哪类研究？它能显示因果关系吗？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A treatment (vitamin vs. placebo) is deliberately imposed and subjects are randomly assigned, so this is a randomized experiment.",
                  "zh": "研究刻意施加了处理（维生素对安慰剂），并且受试者被随机分配，所以这是一个随机对照实验。"
                },
                {
                  "type": "p",
                  "en": "Because assignment is random, the two groups are alike on average except for the treatment, so a difference in cold rates can be attributed to the vitamin. Yes — an experiment can establish causation.",
                  "zh": "由于分配是随机的，两组除处理外平均而言相同，因此感冒率的差异可归因于维生素。是的——实验能确立因果关系。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Simulation and Margin of Error",
              "zh": "模拟与误差幅度"
            },
            {
              "type": "p",
              "en": "Different random samples give slightly different results — this is sampling variability. We can study it with a simulation (模拟): repeatedly drawing random samples (using coins, dice, or a computer) to see how much a sample statistic bounces around. This spread leads to a margin of error (误差幅度), the amount we add and subtract from a sample estimate to form a plausible interval for the true population value. For a sample proportion, a common quick estimate is",
              "zh": "不同的随机样本会给出略有不同的结果——这就是抽样波动。我们可以用模拟（simulation）来研究它：反复抽取随机样本（用硬币、骰子或计算机），看样本统计量波动有多大。这种分散导致了误差幅度（margin of error），即在样本估计值上加减的量，用来构造真实总体值的合理区间。对于样本比例，一个常用的快速估计是"
            },
            {
              "type": "math",
              "tex": "\\text{margin of error} \\approx \\frac{1}{\\sqrt{n}}"
            },
            {
              "type": "p",
              "en": "where $n$ is the sample size. Notice that larger samples give smaller margins of error, but only slowly — to cut the margin in half you must quadruple $n$.",
              "zh": "其中 $n$ 是样本量。注意样本越大，误差幅度越小，但下降很慢——要把误差幅度减半，必须把 $n$ 增至四倍。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Interpreting a poll",
                "zh": "例题 2：解读民调"
              },
              "problem": {
                "en": "A random sample of $n = 400$ voters finds $52\\%$ support a measure, with margin of error $\\frac{1}{\\sqrt{400}} = 5\\%$. Give an interval for the true support, and can supporters safely claim a majority?",
                "zh": "对 $n = 400$ 名选民的随机抽样发现 $52\\%$ 支持某议案，误差幅度为 $\\frac{1}{\\sqrt{400}} = 5\\%$。给出真实支持率的区间，支持者能有把握地宣称占多数吗？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The interval is $52\\% \\pm 5\\%$, running from $47\\%$ to $57\\%$.",
                  "zh": "区间为 $52\\% \\pm 5\\%$，从 $47\\%$ 到 $57\\%$。"
                },
                {
                  "type": "p",
                  "en": "Because the interval includes values below $50\\%$, the data are consistent with the measure actually failing. Supporters cannot confidently claim a majority — the lead is within the margin of error.",
                  "zh": "由于区间包含低于 $50\\%$ 的值，数据也与议案实际未过半相符。支持者不能有把握地宣称占多数——领先幅度处在误差幅度之内。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A researcher wants to know the average height of all students at a school. She measures $50$ of them. What are the population and the sample?",
                "zh": "研究者想知道全校学生的平均身高。她测量了其中 $50$ 名。总体和样本分别是什么？"
              },
              "choices": [
                "Population $= 50$ students; sample $=$ all students",
                "Population and sample are the same",
                "Population $=$ all students; sample $= 50$ measured students",
                "There is no sample here"
              ],
              "answer": 2,
              "explanation": {
                "en": "The population is the entire group of interest — all students at the school — while the sample is the smaller group actually measured, the $50$ students.",
                "zh": "总体是我们关心的整个群体——全校学生；样本是实际测量的较小群体，即那 $50$ 名学生。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A radio host asks listeners to call in and vote on a proposal. Why might these results be biased?",
                "zh": "电台主持人请听众打电话为某提案投票。为什么这些结果可能有偏差？"
              },
              "choices": [
                "Only listeners with strong opinions who choose to call are counted, so the sample is not representative",
                "The sample is too small to matter",
                "Phone votes are always perfectly random",
                "Bias is impossible in any survey"
              ],
              "answer": 0,
              "explanation": {
                "en": "This is a voluntary-response sample: people with strong feelings self-select to call, so the sample systematically over-represents them and is not representative of all listeners.",
                "zh": "这是自愿应答抽样：情绪强烈的人自行选择打电话，因此样本系统性地过度代表他们，不能代表全体听众。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which type of study can, by itself, establish that a treatment causes an effect?",
                "zh": "哪一类研究本身就能确立某处理导致某效果的因果关系？"
              },
              "choices": [
                "A voluntary-response survey",
                "A randomized experiment",
                "An observational study",
                "A convenience sample"
              ],
              "answer": 1,
              "explanation": {
                "en": "Only a randomized experiment imposes the treatment and uses random assignment, so groups differ only by the treatment, allowing a causal conclusion. Observational studies show association, not causation.",
                "zh": "只有随机对照实验施加处理并采用随机分配，使各组仅在处理上不同，从而能得出因果结论。观察性研究只显示关联，而非因果。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A poll estimates support at $46\\%$ with a margin of error of $4\\%$. What is the upper bound of the plausible interval for the true support? Give a decimal like $0.50$.",
                "zh": "某民调估计支持率为 $46\\%$，误差幅度为 $4\\%$。真实支持率合理区间的上界是多少？用类似 $0.50$ 的小数表示。"
              },
              "answer": "0.5",
              "accept": [
                "0.50",
                "50%",
                ".5"
              ],
              "explanation": {
                "en": "Add the margin of error to the estimate: $46\\% + 4\\% = 50\\% = 0.50$. The interval runs from $0.42$ up to $0.50$.",
                "zh": "把误差幅度加到估计值上：$46\\% + 4\\% = 50\\% = 0.50$。区间从 $0.42$ 到 $0.50$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A sample poll reports $53\\%$ approval with a margin of error of $5\\%$. Which claim is best supported?",
                "zh": "一次抽样民调报告支持率为 $53\\%$，误差幅度为 $5\\%$。以下哪个说法最有依据？"
              },
              "choices": [
                "Exactly $53\\%$ of the population approves",
                "The true approval is certainly above $50\\%$",
                "The true approval is definitely $58\\%$",
                "The true approval is plausibly anywhere from $48\\%$ to $58\\%$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The interval is $53\\% \\pm 5\\%$, from $48\\%$ to $58\\%$. Because it dips below $50\\%$, we cannot be sure a majority approves; the sample value is only an estimate, not the exact truth.",
                "zh": "区间为 $53\\% \\pm 5\\%$，即 $48\\%$ 到 $58\\%$。由于它低到 $50\\%$ 以下，我们不能确定过半支持；样本值只是估计，并非确切真值。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using margin of error $\\approx \\frac{1}{\\sqrt{n}}$, find the margin of error for a random sample of size $n = 625$. Give your answer as a percent (a whole number, no percent sign).",
                "zh": "用误差幅度 $\\approx \\frac{1}{\\sqrt{n}}$，求样本量 $n = 625$ 的随机样本的误差幅度。以百分数（整数，不带百分号）表示。"
              },
              "answer": "4",
              "accept": [
                "4%",
                "0.04"
              ],
              "explanation": {
                "en": "$\\frac{1}{\\sqrt{625}} = \\frac{1}{25} = 0.04 = 4\\%$. A sample of $625$ gives a margin of error of about $4$ percentage points.",
                "zh": "$\\frac{1}{\\sqrt{625}} = \\frac{1}{25} = 0.04 = 4\\%$。样本量 $625$ 给出约 $4$ 个百分点的误差幅度。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "You flip a coin $100$ times to model repeatedly drawing random samples and record the proportion of heads each round. What is this process an example of?",
                "zh": "你抛硬币 $100$ 次来模拟反复抽取随机样本，并记录每轮正面的比例。这个过程是什么的例子？"
              },
              "choices": [
                "A biased sample",
                "An experiment with a control group",
                "A simulation of sampling variability",
                "A census of the whole population"
              ],
              "answer": 2,
              "explanation": {
                "en": "Using a repeatable random device (the coin) to imitate drawing samples and observe how a statistic varies is a simulation, used here to study sampling variability.",
                "zh": "用可重复的随机装置（硬币）模仿抽样并观察统计量如何变化，这是模拟，此处用于研究抽样波动。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Using margin of error $\\approx \\frac{1}{\\sqrt{n}}$, find the margin of error for a random sample of size $n = 100$. Give your answer as a decimal.",
                "zh": "用误差幅度 $\\approx \\frac{1}{\\sqrt{n}}$，求样本量 $n = 100$ 的随机样本的误差幅度。用小数表示。"
              },
              "answer": "0.1",
              "accept": [
                "0.10",
                ".1",
                "10%"
              ],
              "explanation": {
                "en": "$\\frac{1}{\\sqrt{100}} = \\frac{1}{10} = 0.1$. A sample of $100$ yields a margin of error of about $0.1$, or $10$ percentage points — fairly wide.",
                "zh": "$\\frac{1}{\\sqrt{100}} = \\frac{1}{10} = 0.1$。样本量 $100$ 给出约 $0.1$，即 $10$ 个百分点的误差幅度——相当宽。"
              }
            }
          ]
        }
      ]
    }
  ]
};
