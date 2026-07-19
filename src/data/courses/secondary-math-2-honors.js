export default {
  "id": "secondary-math-2-honors",
  "title": "Secondary Math II Honors",
  "titleZh": "中学数学二（荣誉）",
  "subject": "math",
  "level": "Honors",
  "description": "Utah's honors second-year integrated mathematics course, following the Utah Core Standards: extending the number system, quadratic expressions and functions, solving quadratic equations, complex numbers, more functions, congruence and geometric proof, similarity and right-triangle trigonometry, circles, and probability.",
  "descriptionZh": "犹他州荣誉级第二年整合数学课程，遵循犹他州核心标准（Utah Core Standards）：扩展数系、二次式与二次函数、解一元二次方程、复数、更多函数、全等与几何证明、相似与直角三角形三角学、圆，以及概率。",
  "units": [
    {
      "id": "extending-number-system",
      "title": "Unit 1: Extending the Number System",
      "titleZh": "第一单元：扩展数系",
      "lessons": [
        {
          "id": "rational-exponents-and-radicals",
          "title": "Rational Exponents and Radicals",
          "titleZh": "分数指数与根式",
          "content": [
            {
              "type": "h2",
              "en": "Extending Exponents Beyond Whole Numbers",
              "zh": "把指数从整数推广开来"
            },
            {
              "type": "p",
              "en": "In Secondary Math I you used whole-number exponents like $2^5$ and negative exponents like $2^{-1}$. This year we extend the idea one step further: what could a *fractional* exponent like $9^{1/2}$ mean? The answer connects two topics you already know — powers and roots — and it turns out that a square root is just an exponent of $\\frac{1}{2}$. Rational exponents give us a single, flexible language for radicals that will make quadratics, growth models, and even the side length of a square solar panel much easier to work with.",
              "zh": "在中学数学一中，你用过像 $2^5$ 这样的整数指数，以及像 $2^{-1}$ 这样的负指数。今年我们再往前推进一步：像 $9^{1/2}$ 这样的*分数*指数会是什么意思呢？答案把你已经熟悉的两个知识点——乘方与开方——联系了起来：原来平方根就是 $\\frac{1}{2}$ 次方。分数指数为根式提供了一种统一而灵活的表达方式，能让二次函数、增长模型，甚至一块正方形太阳能板的边长都变得更好处理。"
            },
            {
              "type": "h3",
              "en": "nth Roots",
              "zh": "n 次方根"
            },
            {
              "type": "p",
              "en": "The $n$th root of a number $a$, written $\\sqrt[n]{a}$, is a number that, raised to the $n$th power, gives back $a$. The number $n$ is called the index. A square root uses index $2$ (usually left off), and a cube root uses index $3$. For example $\\sqrt[3]{8} = 2$ because $2^3 = 8$, and $\\sqrt[4]{81} = 3$ because $3^4 = 81$.",
              "zh": "数 $a$ 的 $n$ 次方根，记作 $\\sqrt[n]{a}$，是指某个数的 $n$ 次方等于 $a$。这里的 $n$ 叫做根指数。平方根的根指数是 $2$（通常省略不写），立方根的根指数是 $3$。例如 $\\sqrt[3]{8} = 2$，因为 $2^3 = 8$；$\\sqrt[4]{81} = 3$，因为 $3^4 = 81$。"
            },
            {
              "type": "note",
              "en": "When the index is even (square root, fourth root, ...) the radicand must be non-negative to give a real number, and the principal root is the non-negative one: $\\sqrt{16} = 4$, not $\\pm 4$. When the index is odd, negative radicands are fine: $\\sqrt[3]{-27} = -3$.",
              "zh": "当根指数是偶数（平方根、四次方根……）时，被开方数必须非负才能得到实数，而且主根取非负值：$\\sqrt{16} = 4$，而不是 $\\pm 4$。当根指数是奇数时，被开方数可以是负数：$\\sqrt[3]{-27} = -3$。"
            },
            {
              "type": "h3",
              "en": "The Meaning of Rational Exponents",
              "zh": "分数指数的含义"
            },
            {
              "type": "p",
              "en": "We want the rules of exponents to keep working. If $9^{1/2}$ is to obey $\\left(9^{1/2}\\right)^2 = 9^{(1/2)\\cdot 2} = 9^1 = 9$, then $9^{1/2}$ must be a number whose square is $9$ — that is exactly $\\sqrt{9}$. This forces the definition:",
              "zh": "我们希望指数运算法则继续成立。如果 $9^{1/2}$ 要满足 $\\left(9^{1/2}\\right)^2 = 9^{(1/2)\\cdot 2} = 9^1 = 9$，那么 $9^{1/2}$ 就必须是平方等于 $9$ 的数——这正是 $\\sqrt{9}$。这就迫使我们作出如下定义："
            },
            {
              "type": "math",
              "tex": "a^{1/n} = \\sqrt[n]{a}"
            },
            {
              "type": "p",
              "en": "A more general rational exponent $\\frac{m}{n}$ means \"take the $n$th root and raise to the $m$th power\" (in either order). Both readings give the same value:",
              "zh": "更一般的分数指数 $\\frac{m}{n}$ 表示\"先开 $n$ 次方，再取 $m$ 次幂\"（顺序可以交换）。两种读法得到相同的结果："
            },
            {
              "type": "math",
              "tex": "a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}"
            },
            {
              "type": "note",
              "en": "The denominator of the exponent is the root (index); the numerator is the power. Read $8^{2/3}$ as \"cube root of 8, then squared.\" A common mistake is flipping these — taking the square root and cubing — which gives a different answer.",
              "zh": "指数的分母是根（根指数），分子是幂。把 $8^{2/3}$ 读作\"先开 8 的立方根，再平方\"。常见错误是把两者弄反——去开平方根再取立方——那会得到不同的答案。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating a rational exponent",
                "zh": "例题 1：计算分数指数"
              },
              "problem": {
                "en": "Evaluate $8^{2/3}$ without a calculator.",
                "zh": "不用计算器求 $8^{2/3}$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The denominator $3$ says take the cube root; the numerator $2$ says square. Take the root first to keep the numbers small:",
                  "zh": "分母 $3$ 表示开立方根，分子 $2$ 表示平方。先开根号可以让数字更小："
                },
                {
                  "type": "math",
                  "tex": "8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4"
                },
                {
                  "type": "p",
                  "en": "So $8^{2/3} = 4$.",
                  "zh": "所以 $8^{2/3} = 4$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Converting Between Radical and Exponent Form",
              "zh": "根式与指数形式的互化"
            },
            {
              "type": "p",
              "en": "Being fluent in both notations is a genuine honors skill: exponent form is best for applying exponent rules, while radical form is often cleaner for a final answer. Examples: $\\sqrt{x} = x^{1/2}$, $\\sqrt[3]{x^2} = x^{2/3}$, and $\\frac{1}{\\sqrt[5]{x^3}} = x^{-3/5}$ (a negative exponent moves the factor across the fraction bar).",
              "zh": "熟练地在两种记号之间切换是一项真正的荣誉级技能：指数形式最适合运用指数法则，而根式形式常常作为最终答案更简洁。例如：$\\sqrt{x} = x^{1/2}$，$\\sqrt[3]{x^2} = x^{2/3}$，以及 $\\frac{1}{\\sqrt[5]{x^3}} = x^{-3/5}$（负指数把因式移到分数线的另一边）。"
            },
            {
              "type": "h3",
              "en": "Simplifying Radicals",
              "zh": "化简根式"
            },
            {
              "type": "p",
              "en": "To simplify a square root, factor the radicand to pull out perfect-square factors, using $\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b}$. For $\\sqrt{72}$, write $72 = 36 \\cdot 2$, so $\\sqrt{72} = \\sqrt{36}\\,\\sqrt{2} = 6\\sqrt{2}$. For higher roots, pull out perfect $n$th powers instead.",
              "zh": "要化简平方根，就把被开方数分解，提取出完全平方因数，利用 $\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b}$。对于 $\\sqrt{72}$，写成 $72 = 36 \\cdot 2$，于是 $\\sqrt{72} = \\sqrt{36}\\,\\sqrt{2} = 6\\sqrt{2}$。对于更高次的根，则提取完全 $n$ 次方因数。"
            },
            {
              "type": "note",
              "en": "A radical is only \"fully simplified\" when no perfect-power factor remains under the root. Students often stop at $\\sqrt{72} = 2\\sqrt{18}$ — but $18 = 9 \\cdot 2$ still hides a perfect square, so keep factoring until nothing is left to pull out.",
              "zh": "只有当根号下不再含有任何完全乘方因数时，根式才算\"完全化简\"。学生常常停在 $\\sqrt{72} = 2\\sqrt{18}$——但 $18 = 9 \\cdot 2$ 里还藏着一个完全平方，所以要一直分解到再也提不出为止。"
            },
            {
              "type": "h3",
              "en": "Operations with Radicals",
              "zh": "根式的运算"
            },
            {
              "type": "p",
              "en": "Radicals with the same index and the same radicand are \"like radicals\" and can be added by combining coefficients, just like combining like terms: $3\\sqrt{5} + 4\\sqrt{5} = 7\\sqrt{5}$. To multiply, use $\\sqrt{a}\\,\\sqrt{b} = \\sqrt{ab}$. To rationalize a denominator (clear the root from the bottom), multiply the top and bottom by a radical that makes the denominator a perfect power: $\\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.",
              "zh": "根指数相同、被开方数也相同的根式叫\"同类根式\"，可以像合并同类项那样把系数相加：$3\\sqrt{5} + 4\\sqrt{5} = 7\\sqrt{5}$。相乘时用 $\\sqrt{a}\\,\\sqrt{b} = \\sqrt{ab}$。要把分母有理化（去掉分母中的根号），就把分子分母同乘一个能使分母成为完全乘方的根式：$\\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$。"
            },
            {
              "type": "note",
              "en": "You can only add radicals that are already alike. $\\sqrt{2} + \\sqrt{3}$ does NOT equal $\\sqrt{5}$, and $\\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$, not $\\sqrt{4}$. Simplify each radical first — sometimes unlike-looking radicals become like radicals after simplifying.",
              "zh": "只有本来就同类的根式才能相加。$\\sqrt{2} + \\sqrt{3}$ 并不等于 $\\sqrt{5}$，而 $\\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$，不是 $\\sqrt{4}$。先把每个根式化简——有时看似不同的根式化简后会变成同类根式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Simplify then combine",
                "zh": "例题 2：先化简再合并"
              },
              "problem": {
                "en": "Simplify $\\sqrt{50} + \\sqrt{18}$.",
                "zh": "化简 $\\sqrt{50} + \\sqrt{18}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "These do not look alike, but simplify each first. $50 = 25 \\cdot 2$ and $18 = 9 \\cdot 2$:",
                  "zh": "它们看起来不同，但先分别化简。$50 = 25 \\cdot 2$，$18 = 9 \\cdot 2$："
                },
                {
                  "type": "math",
                  "tex": "\\sqrt{50} + \\sqrt{18} = 5\\sqrt{2} + 3\\sqrt{2}"
                },
                {
                  "type": "p",
                  "en": "Now they are like radicals, so add the coefficients:",
                  "zh": "现在它们是同类根式了，把系数相加："
                },
                {
                  "type": "math",
                  "tex": "5\\sqrt{2} + 3\\sqrt{2} = 8\\sqrt{2}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: A rational-exponent equation from geometry",
                "zh": "例题 3：来自几何的分数指数问题"
              },
              "problem": {
                "en": "A square rooftop solar array has area $A = 200$ square feet. Its side length is $s = A^{1/2}$. Write $s$ in simplest radical form and estimate it to the nearest tenth.",
                "zh": "一块正方形屋顶太阳能阵列的面积为 $A = 200$ 平方英尺。它的边长为 $s = A^{1/2}$。用最简根式表示 $s$，并估算到十分位。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The exponent $\\frac{1}{2}$ means a square root: $s = \\sqrt{200}$. Factor out the largest perfect square, $200 = 100 \\cdot 2$:",
                  "zh": "指数 $\\frac{1}{2}$ 表示平方根：$s = \\sqrt{200}$。提取最大的完全平方因数，$200 = 100 \\cdot 2$："
                },
                {
                  "type": "math",
                  "tex": "s = \\sqrt{200} = \\sqrt{100}\\,\\sqrt{2} = 10\\sqrt{2} \\approx 14.1 \\text{ ft}"
                },
                {
                  "type": "p",
                  "en": "Each side of the array is about $14.1$ feet.",
                  "zh": "阵列的每条边约为 $14.1$ 英尺。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following equals $\\sqrt[4]{16}$?",
                "zh": "下列哪一项等于 $\\sqrt[4]{16}$？"
              },
              "choices": [
                "$2$",
                "$8$",
                "$4$",
                "$\\pm 2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The fourth root asks for a number whose fourth power is $16$. Since $2^4 = 16$, the answer is $2$. Answering $4$ confuses the fourth root with the square root, and the principal even root is the single non-negative value, not $\\pm 2$.",
                "zh": "四次方根要找的是四次方等于 $16$ 的数。因为 $2^4 = 16$，所以答案是 $2$。答 $4$ 是把四次方根与平方根混淆了，而偶次主根取唯一的非负值，不是 $\\pm 2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Rewrite $\\sqrt[3]{x^2}$ using a rational exponent.",
                "zh": "用分数指数改写 $\\sqrt[3]{x^2}$。"
              },
              "choices": [
                "$x^{3/2}$",
                "$x^{2}$",
                "$x^{2/3}$",
                "$x^{1/6}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The index of the root becomes the denominator and the power inside becomes the numerator, giving $x^{2/3}$. Writing $x^{3/2}$ flips the root and the power, which would mean \"square root of $x$ cubed\" instead.",
                "zh": "根指数变成分母，根号内的幂变成分子，得到 $x^{2/3}$。写成 $x^{3/2}$ 是把根与幂弄反了，那表示的是\"$x$ 立方的平方根\"。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $27^{2/3}$. Give your answer as an integer.",
                "zh": "计算 $27^{2/3}$。请以整数作答。"
              },
              "answer": "9",
              "accept": [
                "9.0"
              ],
              "explanation": {
                "en": "The denominator $3$ means cube root: $\\sqrt[3]{27} = 3$. The numerator $2$ means square: $3^2 = 9$.",
                "zh": "分母 $3$ 表示立方根：$\\sqrt[3]{27} = 3$。分子 $2$ 表示平方：$3^2 = 9$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write $\\sqrt{75}$ in simplest radical form (for example, type 6sqrt(2) for $6\\sqrt{2}$).",
                "zh": "把 $\\sqrt{75}$ 写成最简根式（例如 $6\\sqrt{2}$ 输入 6sqrt(2)）。"
              },
              "answer": "5sqrt(3)",
              "accept": [
                "5sqrt3",
                "5*sqrt(3)",
                "5 sqrt(3)",
                "5√3"
              ],
              "explanation": {
                "en": "Factor out the largest perfect square: $75 = 25 \\cdot 3$, so $\\sqrt{75} = \\sqrt{25}\\,\\sqrt{3} = 5\\sqrt{3}$.",
                "zh": "提取最大的完全平方因数：$75 = 25 \\cdot 3$，所以 $\\sqrt{75} = \\sqrt{25}\\,\\sqrt{3} = 5\\sqrt{3}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\sqrt{12} + \\sqrt{27}$.",
                "zh": "化简 $\\sqrt{12} + \\sqrt{27}$。"
              },
              "choices": [
                "$\\sqrt{39}$",
                "$5\\sqrt{6}$",
                "$6\\sqrt{3}$",
                "$5\\sqrt{3}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Simplify each first: $\\sqrt{12} = 2\\sqrt{3}$ and $\\sqrt{27} = 3\\sqrt{3}$. They are now like radicals, so $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$. You cannot just add the radicands to get $\\sqrt{39}$, because radicals are not added that way.",
                "zh": "先各自化简：$\\sqrt{12} = 2\\sqrt{3}$，$\\sqrt{27} = 3\\sqrt{3}$。它们现在是同类根式，所以 $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$。不能直接把被开方数相加得到 $\\sqrt{39}$，因为根式不是那样相加的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Rationalize the denominator of $\\frac{6}{\\sqrt{3}}$.",
                "zh": "把 $\\frac{6}{\\sqrt{3}}$ 的分母有理化。"
              },
              "choices": [
                "$\\frac{6\\sqrt{3}}{3}$",
                "$2\\sqrt{3}$",
                "$\\sqrt{3}$",
                "$6\\sqrt{3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Multiply top and bottom by $\\sqrt{3}$: $\\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$. Stopping at $\\frac{6\\sqrt{3}}{3}$ is correct but not fully reduced, since $\\frac{6}{3} = 2$.",
                "zh": "分子分母同乘 $\\sqrt{3}$：$\\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$。停在 $\\frac{6\\sqrt{3}}{3}$ 虽然正确但没有化到最简，因为 $\\frac{6}{3} = 2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The time in seconds for an object to fall from a height of $h$ feet is $t = \\left(\\frac{h}{16}\\right)^{1/2}$. Find $t$ when $h = 64$ feet. Give your answer as a number of seconds.",
                "zh": "一个物体从 $h$ 英尺高处下落所需的时间（秒）为 $t = \\left(\\frac{h}{16}\\right)^{1/2}$。当 $h = 64$ 英尺时求 $t$。请以秒数作答。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "2 seconds",
                "2s"
              ],
              "explanation": {
                "en": "The exponent $\\frac{1}{2}$ is a square root. Inside, $\\frac{64}{16} = 4$, so $t = \\sqrt{4} = 2$ seconds.",
                "zh": "指数 $\\frac{1}{2}$ 表示平方根。括号内 $\\frac{64}{16} = 4$，所以 $t = \\sqrt{4} = 2$ 秒。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Simplify the expression $\\frac{x^{3/4} \\cdot x^{1/2}}{x^{1/4}}$ (assume $x > 0$).",
                "zh": "荣誉挑战：化简 $\\frac{x^{3/4} \\cdot x^{1/2}}{x^{1/4}}$（设 $x > 0$）。"
              },
              "choices": [
                "$x^{3/8}$",
                "$x^{5/4}$",
                "$x^{3/2}$",
                "$x^{1}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Add the exponents when multiplying and subtract when dividing: $\\frac{3}{4} + \\frac{1}{2} - \\frac{1}{4} = \\frac{3}{4} + \\frac{2}{4} - \\frac{1}{4} = \\frac{4}{4} = 1$, so the result is $x^1 = x$. Multiplying the exponents instead of adding them is the tempting error that leads to a fraction like $\\frac{3}{8}$.",
                "zh": "相乘时指数相加，相除时指数相减：$\\frac{3}{4} + \\frac{1}{2} - \\frac{1}{4} = \\frac{3}{4} + \\frac{2}{4} - \\frac{1}{4} = \\frac{4}{4} = 1$，所以结果是 $x^1 = x$。把指数相乘而不是相加，就是导致出现像 $\\frac{3}{8}$ 这样分数的诱人错误。"
              }
            }
          ]
        },
        {
          "id": "polynomial-operations-and-closure",
          "title": "Operations with Polynomials and Closure",
          "titleZh": "多项式运算与封闭性",
          "content": [
            {
              "type": "h2",
              "en": "Building With Polynomials",
              "zh": "用多项式来搭建"
            },
            {
              "type": "p",
              "en": "A polynomial is a sum of terms, each a number times a variable raised to a whole-number power — expressions like $3x^2 - 5x + 2$. They are the workhorses of Secondary Math II: the area of a bordered garden, the height of a launched drone, and the revenue of a school fundraiser can all be modeled by polynomials. In this lesson we learn to add, subtract, and multiply them, and we ask an honors-level question: when you combine two polynomials, is the result always another polynomial? That property is called closure, and it makes polynomials behave much like the integers you have known for years.",
              "zh": "多项式是若干项之和，每一项都是一个数乘以变量的非负整数次幂——例如 $3x^2 - 5x + 2$。它们是中学数学二的主力工具：带花边的花园面积、发射的无人机高度、学校募捐活动的收入，都可以用多项式来建模。本节课我们学习多项式的加、减、乘运算，并提出一个荣誉级的问题：把两个多项式组合起来，结果是否总是另一个多项式？这个性质叫做封闭性，它使多项式的行为很像你多年来熟悉的整数。"
            },
            {
              "type": "h3",
              "en": "Naming Polynomials: Degree and Standard Form",
              "zh": "多项式的命名：次数与标准形式"
            },
            {
              "type": "p",
              "en": "The degree of a term is the exponent on its variable; the degree of a polynomial is the highest degree among its terms. In $4x^3 - x^2 + 7$, the degrees of the terms are $3$, $2$, and $0$, so the polynomial has degree $3$. Standard form writes the terms from highest degree to lowest. Low-degree polynomials have special names: degree $0$ is a constant, degree $1$ is linear, degree $2$ is quadratic, and degree $3$ is cubic.",
              "zh": "一个项的次数是它的变量的指数；多项式的次数是各项次数中的最高者。在 $4x^3 - x^2 + 7$ 中，各项的次数分别为 $3$、$2$、$0$，所以该多项式的次数为 $3$。标准形式按次数从高到低排列各项。低次多项式有专门的名称：$0$ 次是常数，$1$ 次是一次式（线性），$2$ 次是二次式，$3$ 次是三次式。"
            },
            {
              "type": "note",
              "en": "The constant term $7$ has degree $0$, not \"no degree,\" because $7 = 7x^0$. Also, a true polynomial never has a variable in a denominator or under a radical: $\\frac{5}{x}$ and $\\sqrt{x}$ are NOT polynomial terms, since their exponents ($-1$ and $\\frac{1}{2}$) are not whole numbers.",
              "zh": "常数项 $7$ 的次数是 $0$，而不是\"没有次数\"，因为 $7 = 7x^0$。此外，真正的多项式的变量绝不会出现在分母中或根号下：$\\frac{5}{x}$ 和 $\\sqrt{x}$ 都不是多项式的项，因为它们的指数（$-1$ 和 $\\frac{1}{2}$）不是非负整数。"
            },
            {
              "type": "h3",
              "en": "Adding and Subtracting Polynomials",
              "zh": "多项式的加法与减法"
            },
            {
              "type": "p",
              "en": "To add or subtract polynomials, combine like terms — terms with exactly the same variable and exponent. When subtracting, distribute the minus sign to every term inside the parentheses first; forgetting to do so is the single most common polynomial error.",
              "zh": "要对多项式进行加减，就合并同类项——变量和指数完全相同的项。做减法时，先把负号分配给括号内的每一项；忘记这样做是多项式运算中最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Subtracting polynomials",
                "zh": "例题 1：多项式减法"
              },
              "problem": {
                "en": "Simplify $(5x^2 - 3x + 4) - (2x^2 + 6x - 1)$.",
                "zh": "化简 $(5x^2 - 3x + 4) - (2x^2 + 6x - 1)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute the minus sign to every term in the second polynomial — note how $-1$ becomes $+1$:",
                  "zh": "把负号分配给第二个多项式的每一项——注意 $-1$ 变成了 $+1$："
                },
                {
                  "type": "math",
                  "tex": "5x^2 - 3x + 4 - 2x^2 - 6x + 1"
                },
                {
                  "type": "p",
                  "en": "Now combine like terms by degree:",
                  "zh": "现在按次数合并同类项："
                },
                {
                  "type": "math",
                  "tex": "(5-2)x^2 + (-3-6)x + (4+1) = 3x^2 - 9x + 5"
                }
              ]
            },
            {
              "type": "note",
              "en": "Only like terms combine. $3x^2$ and $5x$ cannot be added into $8x^3$ or $8x^2$ — they stay separate because their exponents differ. Adding exponents belongs to multiplication, not addition.",
              "zh": "只有同类项才能合并。$3x^2$ 和 $5x$ 不能合并成 $8x^3$ 或 $8x^2$——因为它们的指数不同，必须分开写。指数相加是乘法的规则，不是加法的。"
            },
            {
              "type": "h3",
              "en": "Multiplying Polynomials",
              "zh": "多项式的乘法"
            },
            {
              "type": "p",
              "en": "To multiply polynomials, use the distributive property: multiply every term of the first polynomial by every term of the second, then combine like terms. For two binomials this is often remembered as FOIL (First, Outer, Inner, Last), but the distributive property works for any sizes. When multiplying single terms, multiply the coefficients and add the exponents on matching variables: $2x^3 \\cdot 4x^2 = 8x^5$.",
              "zh": "多项式相乘要用分配律：把第一个多项式的每一项都乘以第二个多项式的每一项，再合并同类项。对两个二项式，常用 FOIL（首、外、内、尾）来记忆，但分配律对任意大小都适用。单项相乘时，系数相乘，相同变量的指数相加：$2x^3 \\cdot 4x^2 = 8x^5$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Multiplying two binomials",
                "zh": "例题 2：两个二项式相乘"
              },
              "problem": {
                "en": "Expand $(x + 5)(2x - 3)$.",
                "zh": "展开 $(x + 5)(2x - 3)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply each term of the first factor by each term of the second:",
                  "zh": "把第一个因式的每一项乘以第二个因式的每一项："
                },
                {
                  "type": "math",
                  "tex": "(x)(2x) + (x)(-3) + (5)(2x) + (5)(-3)"
                },
                {
                  "type": "math",
                  "tex": "= 2x^2 - 3x + 10x - 15"
                },
                {
                  "type": "p",
                  "en": "Combine the middle like terms $-3x + 10x = 7x$:",
                  "zh": "合并中间的同类项 $-3x + 10x = 7x$："
                },
                {
                  "type": "math",
                  "tex": "= 2x^2 + 7x - 15"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Idea of Closure",
              "zh": "封闭性的概念"
            },
            {
              "type": "p",
              "en": "A set of numbers or expressions is closed under an operation if performing that operation on members of the set always produces another member of the set. The integers are closed under addition, subtraction, and multiplication: add, subtract, or multiply two integers and you always get an integer. But integers are NOT closed under division — $3 \\div 2$ leaves the integers.",
              "zh": "如果对某个集合中的元素进行某种运算，结果总是仍在这个集合中，那么这个数集或式子集合就称为对该运算封闭。整数对加、减、乘运算封闭：把两个整数相加、相减或相乘，得到的总是整数。但整数对除法不封闭——$3 \\div 2$ 就跳出了整数集。"
            },
            {
              "type": "p",
              "en": "Polynomials behave the same way. When you add, subtract, or multiply two polynomials, the result is always a polynomial: whole-number exponents stay whole numbers (they add during multiplication but never become negative or fractional), and combining like terms keeps everything a sum of such terms. So polynomials are closed under addition, subtraction, and multiplication — a structural echo of the integers. Just like integers, though, polynomials are not closed under division: $\\frac{x+1}{x}$ is not a polynomial.",
              "zh": "多项式的行为也是如此。当你把两个多项式相加、相减或相乘时，结果总是一个多项式：非负整数指数依然是非负整数（在乘法中它们相加，但永远不会变成负数或分数），而合并同类项后一切仍是这类项之和。所以多项式对加、减、乘运算封闭——这是整数结构的一种回响。不过和整数一样，多项式对除法不封闭：$\\frac{x+1}{x}$ 就不是多项式。"
            },
            {
              "type": "note",
              "en": "Closure is about the *type* of result, not its value. Even if adding two quadratics gives $0$ (as when $(x^2) + (-x^2) = 0$), the result $0$ is still a polynomial (the zero polynomial), so closure is not violated.",
              "zh": "封闭性关注的是结果的*类型*，而不是它的数值。即使两个二次式相加得到 $0$（例如 $(x^2) + (-x^2) = 0$），结果 $0$ 仍然是一个多项式（零多项式），所以封闭性并没有被破坏。"
            },
            {
              "type": "h3",
              "en": "Interpreting Polynomials in Context",
              "zh": "在情境中解读多项式"
            },
            {
              "type": "p",
              "en": "Polynomials often carry real meaning through their parts. If a rectangular community garden is $x$ feet wide and $(x + 4)$ feet long, its area is the product $x(x+4) = x^2 + 4x$ square feet — a quadratic. If you widen a border, add polynomials; combine two garden plots, and closure guarantees the total area is still described by a polynomial you can simplify and reason about.",
              "zh": "多项式常常通过它的各个部分承载现实意义。如果一个矩形社区花园宽 $x$ 英尺、长 $(x + 4)$ 英尺，那么它的面积就是乘积 $x(x+4) = x^2 + 4x$ 平方英尺——一个二次式。如果加宽花边，就把多项式相加；把两块花圃合在一起，封闭性保证总面积仍然可以用一个能化简、能推理的多项式来描述。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Area as a polynomial product",
                "zh": "例题 3：用多项式乘积表示面积"
              },
              "problem": {
                "en": "A rectangular banner is $(2x + 1)$ feet wide and $(x + 3)$ feet tall. Write its area as a polynomial in standard form.",
                "zh": "一面矩形横幅宽 $(2x + 1)$ 英尺、高 $(x + 3)$ 英尺。用标准形式的多项式表示它的面积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Area is width times height, so multiply the two binomials:",
                  "zh": "面积等于宽乘以高，所以把两个二项式相乘："
                },
                {
                  "type": "math",
                  "tex": "(2x + 1)(x + 3) = 2x^2 + 6x + x + 3"
                },
                {
                  "type": "p",
                  "en": "Combine the like terms $6x + x = 7x$:",
                  "zh": "合并同类项 $6x + x = 7x$："
                },
                {
                  "type": "math",
                  "tex": "= 2x^2 + 7x + 3 \\text{ square feet}"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the degree of the polynomial $6x^2 - 9x^5 + 4x - 1$?",
                "zh": "多项式 $6x^2 - 9x^5 + 4x - 1$ 的次数是多少？"
              },
              "choices": [
                "$2$",
                "$4$",
                "$5$",
                "$6$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The degree is the highest exponent that appears, which is $5$ (from $-9x^5$). The order in which the terms are written does not matter; you look for the largest exponent, not the first term. Choosing $2$ mistakenly reads only the leading written term.",
                "zh": "次数是出现的最高指数，即 $5$（来自 $-9x^5$）。各项书写的顺序无关紧要；要找的是最大的指数，而不是第一个项。选 $2$ 是错误地只看了写在最前面的项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $(3x^2 + 2x - 7) + (x^2 - 5x + 4)$.",
                "zh": "化简 $(3x^2 + 2x - 7) + (x^2 - 5x + 4)$。"
              },
              "choices": [
                "$4x^2 - 3x - 3$",
                "$4x^4 - 3x^2 - 3$",
                "$4x^2 + 7x - 3$",
                "$3x^2 - 3x - 3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Combine like terms by degree: $(3+1)x^2 = 4x^2$, $(2-5)x = -3x$, and $-7+4 = -3$, giving $4x^2 - 3x - 3$. The exponents stay the same when adding — turning $x^2$ into $x^4$ wrongly adds the exponents.",
                "zh": "按次数合并同类项：$(3+1)x^2 = 4x^2$，$(2-5)x = -3x$，$-7+4 = -3$，得到 $4x^2 - 3x - 3$。相加时指数保持不变——把 $x^2$ 变成 $x^4$ 是错误地把指数相加了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $(7x^2 - 2x + 5) - (3x^2 + 4x - 8)$. Write your answer in standard form (for example, 4x^2-6x+13).",
                "zh": "化简 $(7x^2 - 2x + 5) - (3x^2 + 4x - 8)$。用标准形式作答（例如 4x^2-6x+13）。"
              },
              "answer": "4x^2-6x+13",
              "accept": [
                "4x^2 - 6x + 13",
                "4x²-6x+13",
                "4x^2-6x+13 "
              ],
              "explanation": {
                "en": "Distribute the minus sign: $7x^2 - 2x + 5 - 3x^2 - 4x + 8$. Then combine: $4x^2 - 6x + 13$. Note $-(-8)$ becomes $+8$.",
                "zh": "分配负号：$7x^2 - 2x + 5 - 3x^2 - 4x + 8$。再合并：$4x^2 - 6x + 13$。注意 $-(-8)$ 变成了 $+8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Expand $(x - 4)(x + 4)$.",
                "zh": "展开 $(x - 4)(x + 4)$。"
              },
              "choices": [
                "$x^2 - 8x + 16$",
                "$x^2 + 16$",
                "$x^2 - 16$",
                "$x^2 - 8$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiply out: $x^2 + 4x - 4x - 16$. The middle terms $+4x$ and $-4x$ cancel, leaving $x^2 - 16$. This is a difference of squares; keeping a middle term like $-8x$ mistakenly treats it as $(x-4)^2$.",
                "zh": "展开：$x^2 + 4x - 4x - 16$。中间的 $+4x$ 与 $-4x$ 相消，剩下 $x^2 - 16$。这是平方差；保留像 $-8x$ 这样的中间项，是把它错当成了 $(x-4)^2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Multiply $-3x^2 \\cdot 5x^4$. Give your answer as a single term.",
                "zh": "计算 $-3x^2 \\cdot 5x^4$。请以单项式作答。"
              },
              "answer": "-15x^6",
              "accept": [
                "-15x^{6}",
                "-15x⁶",
                "-15 x^6"
              ],
              "explanation": {
                "en": "Multiply the coefficients: $-3 \\cdot 5 = -15$. Add the exponents on $x$: $2 + 4 = 6$. The result is $-15x^6$.",
                "zh": "系数相乘：$-3 \\cdot 5 = -15$。$x$ 的指数相加：$2 + 4 = 6$。结果是 $-15x^6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about closure is correct?",
                "zh": "关于封闭性，下列哪种说法是正确的？"
              },
              "choices": [
                "Polynomials are closed under division, so any quotient of polynomials is a polynomial.",
                "Polynomials are closed under addition, subtraction, and multiplication, but not under division.",
                "Polynomials are closed only under addition.",
                "Integers are closed under division, and polynomials copy that behavior."
              ],
              "answer": 1,
              "explanation": {
                "en": "Adding, subtracting, or multiplying polynomials always yields a polynomial, but dividing can produce a variable in the denominator (like $\\frac{x+1}{x}$), which is not a polynomial. The claim that integers are closed under division is also false, since $3 \\div 2$ is not an integer.",
                "zh": "多项式相加、相减或相乘总能得到多项式，但相除可能在分母中出现变量（如 $\\frac{x+1}{x}$），那就不是多项式了。说整数对除法封闭也是错的，因为 $3 \\div 2$ 不是整数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rectangular parking lot is $(x + 6)$ meters wide and $(x + 2)$ meters long. Write its area as a polynomial in standard form (for example, x^2+8x+12).",
                "zh": "一个矩形停车场宽 $(x + 6)$ 米、长 $(x + 2)$ 米。用标准形式的多项式表示它的面积（例如 x^2+8x+12）。"
              },
              "answer": "x^2+8x+12",
              "accept": [
                "x^2 + 8x + 12",
                "x²+8x+12",
                "x^2+8x+12 "
              ],
              "explanation": {
                "en": "Area is width times length: $(x+6)(x+2) = x^2 + 2x + 6x + 12 = x^2 + 8x + 12$ square meters.",
                "zh": "面积等于宽乘以长：$(x+6)(x+2) = x^2 + 2x + 6x + 12 = x^2 + 8x + 12$ 平方米。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Expand $(x + 2)(x^2 - 3x + 5)$.",
                "zh": "荣誉挑战：展开 $(x + 2)(x^2 - 3x + 5)$。"
              },
              "choices": [
                "$x^3 - 3x^2 + 5x + 2$",
                "$x^3 - x^2 - x + 10$",
                "$x^3 + 2x^2 - 3x + 10$",
                "$x^3 - x^2 - 6x + 10$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Distribute each term of $(x+2)$: $x(x^2-3x+5) = x^3-3x^2+5x$ and $2(x^2-3x+5) = 2x^2-6x+10$. Add them: $x^3 + (-3+2)x^2 + (5-6)x + 10 = x^3 - x^2 - x + 10$. Forgetting to multiply the $2$ through every term is the usual slip and drops the middle contributions.",
                "zh": "把 $(x+2)$ 的每一项分配出去：$x(x^2-3x+5) = x^3-3x^2+5x$，$2(x^2-3x+5) = 2x^2-6x+10$。相加：$x^3 + (-3+2)x^2 + (5-6)x + 10 = x^3 - x^2 - x + 10$。忘记把 $2$ 乘遍每一项是常见的失误，会漏掉中间项的贡献。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "quadratic-expressions-factoring",
      "title": "Unit 2: Quadratic Expressions and Factoring",
      "titleZh": "第二单元：二次式与因式分解",
      "lessons": [
        {
          "id": "multiplying-and-special-products",
          "title": "Multiplying Polynomials and Special Products",
          "titleZh": "多项式乘法与乘法公式",
          "content": [
            {
              "type": "h2",
              "en": "Designing With Rectangles",
              "zh": "用矩形来设计"
            },
            {
              "type": "p",
              "en": "Imagine planning a rectangular community garden in Provo whose width is $(x + 4)$ feet and whose length is $(x + 10)$ feet. To budget soil, you need its area — and area is length times width, a product of two binomials. Multiplying polynomials is exactly this kind of \"combine every part with every part\" operation, and it turns up everywhere in Secondary Math II because it is the forward direction of the quadratics we are about to master.",
              "zh": "想象你在普罗沃（Provo）规划一个矩形社区花园，宽为 $(x + 4)$ 英尺，长为 $(x + 10)$ 英尺。为了预算土壤用量，你需要它的面积——面积等于长乘宽，也就是两个二项式的乘积。多项式乘法正是这种\"让每一部分与每一部分都相乘\"的运算，它在中学数学二中无处不在，因为它是我们即将掌握的二次式的正向运算。"
            },
            {
              "type": "p",
              "en": "A polynomial is a sum of terms of the form (number) times (variable raised to a whole-number power). To multiply two polynomials, we rely on the distributive property: every term of the first factor must multiply every term of the second, and then we combine like terms.",
              "zh": "多项式是若干形如（数字）乘（变量的非负整数次幂）的项之和。要把两个多项式相乘，我们依靠分配律：第一个因式的每一项都必须与第二个因式的每一项相乘，然后合并同类项。"
            },
            {
              "type": "h3",
              "en": "The Area Model and FOIL",
              "zh": "面积模型与 FOIL"
            },
            {
              "type": "p",
              "en": "For two binomials, the area model draws a rectangle split into a 2-by-2 grid, one row and one column per term. Each cell holds a partial product, and the total area is their sum. The popular shortcut FOIL — First, Outer, Inner, Last — is just a way to name those four cells in order.",
              "zh": "对于两个二项式，面积模型画出一个被分成 2×2 网格的矩形，每一项对应一行和一列。每个格子放一个部分乘积，总面积就是它们之和。常用的口诀 FOIL——首（First）、外（Outer）、内（Inner）、尾（Last）——只是按顺序给这四个格子命名的方法。"
            },
            {
              "type": "math",
              "tex": "(x + 4)(x + 10) = \\underbrace{x \\cdot x}_{F} + \\underbrace{x \\cdot 10}_{O} + \\underbrace{4 \\cdot x}_{I} + \\underbrace{4 \\cdot 10}_{L}"
            },
            {
              "type": "p",
              "en": "The two middle terms are like terms, so we add them: $10x + 4x = 14x$. The garden's area is $x^2 + 14x + 40$ square feet.",
              "zh": "中间两项是同类项，所以把它们相加：$10x + 4x = 14x$。花园的面积是 $x^2 + 14x + 40$ 平方英尺。"
            },
            {
              "type": "note",
              "en": "FOIL only works for a binomial times a binomial. It is not a law of algebra — the real rule is \"distribute everything.\" When a factor has three or more terms, forget FOIL and make sure every term meets every other term.",
              "zh": "FOIL 只适用于二项式乘二项式。它并不是代数定律——真正的规则是\"把所有项都分配出去\"。当某个因式有三项或更多时，请抛开 FOIL，确保每一项都与另一个因式的每一项相乘。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: FOIL with negatives",
                "zh": "例题 1：含负号的 FOIL"
              },
              "problem": {
                "en": "Multiply $(2x - 3)(x + 5)$.",
                "zh": "计算 $(2x - 3)(x + 5)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply the four pairs, carrying signs carefully:",
                  "zh": "把四对乘积算出来，注意带上符号："
                },
                {
                  "type": "math",
                  "tex": "2x \\cdot x + 2x \\cdot 5 + (-3) \\cdot x + (-3) \\cdot 5 = 2x^2 + 10x - 3x - 15"
                },
                {
                  "type": "p",
                  "en": "Combine the like terms $10x - 3x = 7x$:",
                  "zh": "合并同类项 $10x - 3x = 7x$："
                },
                {
                  "type": "math",
                  "tex": "2x^2 + 7x - 15"
                }
              ]
            },
            {
              "type": "h3",
              "en": "A Binomial Times a Trinomial",
              "zh": "二项式乘三项式"
            },
            {
              "type": "p",
              "en": "When one factor has three terms, distribute each term of the binomial across the whole trinomial. This produces $2 \\times 3 = 6$ partial products before combining like terms. Staying organized — writing them in columns by degree — prevents lost terms.",
              "zh": "当一个因式有三项时，把二项式的每一项都分配到整个三项式上。这样在合并同类项前会产生 $2 \\times 3 = 6$ 个部分乘积。保持条理——按次数分列书写——可以避免漏项。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Binomial times trinomial",
                "zh": "例题 2：二项式乘三项式"
              },
              "problem": {
                "en": "Multiply $(x + 2)(x^2 - 3x + 4)$.",
                "zh": "计算 $(x + 2)(x^2 - 3x + 4)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute $x$ over the trinomial, then distribute $2$:",
                  "zh": "先把 $x$ 分配到三项式上，再把 $2$ 分配出去："
                },
                {
                  "type": "math",
                  "tex": "(x^3 - 3x^2 + 4x) + (2x^2 - 6x + 8)"
                },
                {
                  "type": "p",
                  "en": "Combine like terms: $-3x^2 + 2x^2 = -x^2$ and $4x - 6x = -2x$.",
                  "zh": "合并同类项：$-3x^2 + 2x^2 = -x^2$，$4x - 6x = -2x$。"
                },
                {
                  "type": "math",
                  "tex": "x^3 - x^2 - 2x + 8"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Special Products Worth Memorizing",
              "zh": "值得记住的乘法公式"
            },
            {
              "type": "p",
              "en": "Certain products appear so often that recognizing them instantly saves time and prevents errors. All three come straight from FOIL, but they are worth memorizing as patterns:",
              "zh": "有些乘积出现得非常频繁，一眼认出它们能节省时间并避免错误。这三个公式都直接来自 FOIL，但值得当作固定模式记住："
            },
            {
              "type": "math",
              "tex": "(a + b)^2 = a^2 + 2ab + b^2"
            },
            {
              "type": "math",
              "tex": "(a - b)^2 = a^2 - 2ab + b^2"
            },
            {
              "type": "math",
              "tex": "(a + b)(a - b) = a^2 - b^2"
            },
            {
              "type": "p",
              "en": "The first two are perfect-square trinomials: the outer and inner products are identical, so the middle term is $2ab$. The third is the difference of squares: the outer and inner products cancel, so no middle term survives.",
              "zh": "前两个是完全平方三项式：外积与内积相同，所以中间项是 $2ab$。第三个是平方差：外积与内积相互抵消，因此没有中间项。"
            },
            {
              "type": "note",
              "en": "The most common mistake in all of algebra is writing $(a + b)^2 = a^2 + b^2$. That drops the middle term $2ab$. Test it: $(3 + 4)^2 = 49$, but $3^2 + 4^2 = 25$. Squaring a sum is NOT the sum of the squares.",
              "zh": "整个代数中最常见的错误就是写成 $(a + b)^2 = a^2 + b^2$，这漏掉了中间项 $2ab$。验证一下：$(3 + 4)^2 = 49$，而 $3^2 + 4^2 = 25$。和的平方不等于平方之和。"
            },
            {
              "type": "note",
              "en": "Test tip: learn these patterns backward too. If you see $x^2 - 25$, recognize it as $(x)^2 - (5)^2$, a difference of squares that factors as $(x + 5)(x - 5)$. Reading the patterns in reverse is the whole idea behind factoring, the next lesson.",
              "zh": "考试提示：也要学会反向识别这些模式。看到 $x^2 - 25$ 时，把它认作 $(x)^2 - (5)^2$，即一个平方差，可分解为 $(x + 5)(x - 5)$。反向读这些公式正是下一课因式分解的核心思想。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Using a special product",
                "zh": "例题 3：运用乘法公式"
              },
              "problem": {
                "en": "Expand $(3x - 7)^2$ using the perfect-square pattern.",
                "zh": "用完全平方公式展开 $(3x - 7)^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $a = 3x$ and $b = 7$. Apply $(a - b)^2 = a^2 - 2ab + b^2$:",
                  "zh": "这里 $a = 3x$，$b = 7$。套用 $(a - b)^2 = a^2 - 2ab + b^2$："
                },
                {
                  "type": "math",
                  "tex": "(3x)^2 - 2(3x)(7) + 7^2 = 9x^2 - 42x + 49"
                },
                {
                  "type": "p",
                  "en": "Notice $a^2 = 9x^2$ (square both the 3 and the $x$) — a spot where students often forget to square the coefficient.",
                  "zh": "注意 $a^2 = 9x^2$（要把 3 和 $x$ 都平方）——学生常在这里忘记把系数一起平方。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Recognizing a pattern backward",
                "zh": "例题 4：反向识别模式"
              },
              "problem": {
                "en": "Without multiplying it out fully, evaluate $(50 + 1)(50 - 1)$.",
                "zh": "不完全展开，求 $(50 + 1)(50 - 1)$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This matches $(a + b)(a - b) = a^2 - b^2$ with $a = 50$, $b = 1$:",
                  "zh": "这符合 $(a + b)(a - b) = a^2 - b^2$，其中 $a = 50$，$b = 1$："
                },
                {
                  "type": "math",
                  "tex": "50^2 - 1^2 = 2500 - 1 = 2499"
                },
                {
                  "type": "p",
                  "en": "The difference-of-squares pattern turns a messy product into fast mental arithmetic.",
                  "zh": "平方差公式把一个繁琐的乘法变成了快速的心算。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Expand $(x + 3)(x + 5)$.",
                "zh": "展开 $(x + 3)(x + 5)$。"
              },
              "choices": [
                "$x^2 + 15$",
                "$x^2 + 8x + 8$",
                "$x^2 + 8x + 15$",
                "$x^2 + 15x + 8$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By FOIL: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$. Simply multiplying the first and last terms and forgetting the two middle products gives $x^2 + 15$, which loses the $8x$ that comes from $5x + 3x$.",
                "zh": "用 FOIL：$x^2 + 5x + 3x + 15 = x^2 + 8x + 15$。只把首项与尾项相乘、漏掉中间两个乘积会得到 $x^2 + 15$，那样就丢掉了来自 $5x + 3x$ 的 $8x$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Expand $(x - 6)^2$.",
                "zh": "展开 $(x - 6)^2$。"
              },
              "choices": [
                "$x^2 - 36$",
                "$x^2 - 12x + 36$",
                "$x^2 + 36$",
                "$x^2 - 6x + 36$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Use $(a - b)^2 = a^2 - 2ab + b^2$ with $a = x$, $b = 6$: the middle term is $-2(x)(6) = -12x$, giving $x^2 - 12x + 36$. Writing $x^2 - 36$ treats a squared binomial as if it were a difference of squares and drops the essential middle term.",
                "zh": "用 $(a - b)^2 = a^2 - 2ab + b^2$，其中 $a = x$，$b = 6$：中间项是 $-2(x)(6) = -12x$，得 $x^2 - 12x + 36$。写成 $x^2 - 36$ 是把二项式的平方当成了平方差，漏掉了关键的中间项。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The product $(x + 9)(x - 9)$ equals $x^2 - c$. What is the integer $c$?",
                "zh": "乘积 $(x + 9)(x - 9)$ 等于 $x^2 - c$。整数 $c$ 是多少？"
              },
              "answer": "81",
              "accept": [
                "81.0"
              ],
              "explanation": {
                "en": "This is a difference of squares: $(x + 9)(x - 9) = x^2 - 9^2 = x^2 - 81$, so $c = 81$. The outer and inner products $9x$ and $-9x$ cancel, leaving no middle term.",
                "zh": "这是一个平方差：$(x + 9)(x - 9) = x^2 - 9^2 = x^2 - 81$，所以 $c = 81$。外积 $9x$ 与内积 $-9x$ 相互抵消，没有中间项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which product equals $x^2 - 49$?",
                "zh": "哪个乘积等于 $x^2 - 49$？"
              },
              "choices": [
                "$(x + 7)(x - 7)$",
                "$(x - 7)^2$",
                "$(x + 7)^2$",
                "$(x + 7)(x + 7)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "A difference of two squares $a^2 - b^2$ comes from $(a + b)(a - b)$, so $x^2 - 49 = (x + 7)(x - 7)$. The perfect-square options like $(x - 7)^2$ produce a middle term ($-14x$) and cannot equal a binomial with no $x$-term.",
                "zh": "平方差 $a^2 - b^2$ 来自 $(a + b)(a - b)$，所以 $x^2 - 49 = (x + 7)(x - 7)$。像 $(x - 7)^2$ 这样的完全平方会产生中间项（$-14x$），不可能等于一个没有一次项的二项式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Expand $(x + 2)(x^2 - 3x + 4)$.",
                "zh": "展开 $(x + 2)(x^2 - 3x + 4)$。"
              },
              "choices": [
                "$x^3 - 3x^2 + 4x + 8$",
                "$x^3 + 2x^2 - 6x + 8$",
                "$x^3 - 5x^2 + 10x + 8$",
                "$x^3 - x^2 - 2x + 8$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Distribute both terms: $(x^3 - 3x^2 + 4x) + (2x^2 - 6x + 8)$, then combine $-3x^2 + 2x^2 = -x^2$ and $4x - 6x = -2x$ to get $x^3 - x^2 - 2x + 8$. Distributing only the $x$ and forgetting to multiply the trinomial by $2$ leaves the incorrect $x^3 - 3x^2 + 4x + 8$.",
                "zh": "把两项都分配出去：$(x^3 - 3x^2 + 4x) + (2x^2 - 6x + 8)$，再合并 $-3x^2 + 2x^2 = -x^2$、$4x - 6x = -2x$，得 $x^3 - x^2 - 2x + 8$。若只分配 $x$、忘了用 $2$ 乘三项式，就会得到错误的 $x^3 - 3x^2 + 4x + 8$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "When $(3x + 4)(2x - 5)$ is written as a trinomial $ax^2 + bx + c$, what is the middle coefficient $b$? Give an integer.",
                "zh": "把 $(3x + 4)(2x - 5)$ 写成三项式 $ax^2 + bx + c$ 时，中间系数 $b$ 是多少？请以整数作答。"
              },
              "answer": "-7",
              "accept": [
                "-7.0"
              ],
              "explanation": {
                "en": "FOIL gives $6x^2 - 15x + 8x - 20 = 6x^2 - 7x - 20$. The middle term combines the outer product $-15x$ and inner product $8x$, so $b = -7$. Forgetting one sign (using $+15x$) would wrongly give $b = 23$.",
                "zh": "FOIL 得 $6x^2 - 15x + 8x - 20 = 6x^2 - 7x - 20$。中间项由外积 $-15x$ 与内积 $8x$ 合并而成，所以 $b = -7$。若漏掉一个符号（写成 $+15x$）会错得 $b = 23$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rectangular plot outside a Salt Lake City school has width $(x + 4)$ meters and length $(x + 10)$ meters. When $x = 6$, what is the plot's area in square meters? Give an integer.",
                "zh": "盐湖城一所学校外的矩形地块宽 $(x + 4)$ 米、长 $(x + 10)$ 米。当 $x = 6$ 时，这块地的面积是多少平方米？请以整数作答。"
              },
              "answer": "160",
              "accept": [
                "160.0"
              ],
              "explanation": {
                "en": "The area expression is $(x + 4)(x + 10) = x^2 + 14x + 40$. Substituting $x = 6$ gives $36 + 84 + 40 = 160$. You can check by multiplying the actual sides: width $= 10$, length $= 16$, and $10 \\times 16 = 160$.",
                "zh": "面积表达式为 $(x + 4)(x + 10) = x^2 + 14x + 40$。代入 $x = 6$ 得 $36 + 84 + 40 = 160$。也可以直接算实际边长验证：宽 $= 10$，长 $= 16$，$10 \\times 16 = 160$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Simplify $(a + b)^2 - (a - b)^2$.",
                "zh": "荣誉挑战：化简 $(a + b)^2 - (a - b)^2$。"
              },
              "choices": [
                "$0$",
                "$2b^2$",
                "$4ab$",
                "$2a^2 + 2b^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Expand each square: $(a^2 + 2ab + b^2) - (a^2 - 2ab + b^2)$. The $a^2$ and $b^2$ terms cancel, and $2ab - (-2ab) = 4ab$. Assuming the two squares are equal and answering $0$ ignores that their middle terms have opposite signs.",
                "zh": "分别展开：$(a^2 + 2ab + b^2) - (a^2 - 2ab + b^2)$。$a^2$ 与 $b^2$ 项相互抵消，$2ab - (-2ab) = 4ab$。若以为两个平方相等而答 $0$，就忽略了它们的中间项符号相反。"
              }
            }
          ]
        },
        {
          "id": "factoring-quadratic-expressions",
          "title": "Factoring Quadratic Expressions",
          "titleZh": "二次式的因式分解",
          "content": [
            {
              "type": "h2",
              "en": "Running Multiplication in Reverse",
              "zh": "把乘法倒着做"
            },
            {
              "type": "p",
              "en": "In the last lesson we multiplied $(x + 4)(x + 10)$ to get the area $x^2 + 14x + 40$. Factoring asks the reverse question: given the area $x^2 + 14x + 40$, what were the side lengths? Recovering the factors of a quadratic is one of the most useful skills in Secondary Math II, because a product equals zero exactly when one of its factors does — the key to solving quadratic equations, finding where a thrown ball lands, and reading the x-intercepts of a parabola.",
              "zh": "上一课我们把 $(x + 4)(x + 10)$ 相乘得到面积 $x^2 + 14x + 40$。因式分解问的是相反的问题：已知面积 $x^2 + 14x + 40$，原来的边长是多少？还原二次式的因式是中学数学二中最有用的技能之一，因为乘积为零当且仅当其中某个因式为零——这正是解二次方程、求抛出物体落点、以及读出抛物线 x 轴截距的关键。"
            },
            {
              "type": "h3",
              "en": "Always Start With the Greatest Common Factor",
              "zh": "永远先提取最大公因式"
            },
            {
              "type": "p",
              "en": "The greatest common factor (GCF) is the largest monomial that divides every term. Factoring it out is the distributive property in reverse, and it should always be your first move — it makes everything that follows simpler.",
              "zh": "最大公因式（GCF）是能整除每一项的最大单项式。把它提取出来就是逆用分配律，而且这应该永远是你的第一步——它会让后面的所有步骤都变简单。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Factoring out the GCF",
                "zh": "例题 1：提取最大公因式"
              },
              "problem": {
                "en": "Factor $6x^2 + 15x$.",
                "zh": "分解 $6x^2 + 15x$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The coefficients 6 and 15 share a factor of 3, and both terms contain at least one $x$. So the GCF is $3x$:",
                  "zh": "系数 6 与 15 有公因数 3，且两项都至少含一个 $x$。所以最大公因式是 $3x$："
                },
                {
                  "type": "math",
                  "tex": "6x^2 + 15x = 3x(2x + 5)"
                },
                {
                  "type": "p",
                  "en": "Check by distributing: $3x \\cdot 2x = 6x^2$ and $3x \\cdot 5 = 15x$. Correct.",
                  "zh": "用分配律检验：$3x \\cdot 2x = 6x^2$，$3x \\cdot 5 = 15x$。正确。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Factoring $x^2 + bx + c$: the Sum–Product Method",
              "zh": "分解 $x^2 + bx + c$：和积法"
            },
            {
              "type": "p",
              "en": "When the leading coefficient is 1, factoring reverses FOIL. We look for two numbers that multiply to $c$ (the constant) and add to $b$ (the middle coefficient). Those two numbers become the constants in the binomial factors $(x + m)(x + n)$.",
              "zh": "当首项系数为 1 时，因式分解就是逆向的 FOIL。我们寻找两个数，它们的乘积等于 $c$（常数项）、和等于 $b$（中间系数）。这两个数就成为二项式因式 $(x + m)(x + n)$ 中的常数。"
            },
            {
              "type": "math",
              "tex": "x^2 + bx + c = (x + m)(x + n) \\quad \\text{where } m + n = b, \\; mn = c"
            },
            {
              "type": "note",
              "en": "Let the signs guide your search. If $c$ is positive, $m$ and $n$ share the same sign (both match the sign of $b$). If $c$ is negative, $m$ and $n$ have opposite signs, and the larger-magnitude number matches the sign of $b$.",
              "zh": "让符号引导你的搜索。若 $c$ 为正，则 $m$ 与 $n$ 同号（都与 $b$ 的符号一致）。若 $c$ 为负，则 $m$ 与 $n$ 异号，其中绝对值较大的那个与 $b$ 同号。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Sum–product with a negative constant",
                "zh": "例题 2：常数为负的和积法"
              },
              "problem": {
                "en": "Factor $x^2 - 2x - 15$.",
                "zh": "分解 $x^2 - 2x - 15$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "We need two numbers that multiply to $-15$ and add to $-2$. Because the product is negative, the numbers have opposite signs. The pair $-5$ and $+3$ works: $(-5)(3) = -15$ and $-5 + 3 = -2$.",
                  "zh": "我们需要两个数，乘积为 $-15$、和为 $-2$。因为乘积为负，所以这两个数异号。$-5$ 与 $+3$ 满足：$(-5)(3) = -15$，$-5 + 3 = -2$。"
                },
                {
                  "type": "math",
                  "tex": "x^2 - 2x - 15 = (x - 5)(x + 3)"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Factoring $ax^2 + bx + c$: the ac / Grouping Method",
              "zh": "分解 $ax^2 + bx + c$：ac 法 / 分组法"
            },
            {
              "type": "p",
              "en": "When the leading coefficient $a$ is not 1, use the ac method. Multiply $a$ and $c$, then find two numbers that multiply to $ac$ and add to $b$. Split the middle term using those numbers, then factor by grouping.",
              "zh": "当首项系数 $a$ 不为 1 时，使用 ac 法。先算 $a$ 与 $c$ 的乘积，再找两个数，乘积为 $ac$、和为 $b$。用这两个数拆开中间项，然后用分组法分解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: The ac method",
                "zh": "例题 3：ac 法"
              },
              "problem": {
                "en": "Factor $2x^2 + 7x + 3$.",
                "zh": "分解 $2x^2 + 7x + 3$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $ac = 2 \\cdot 3 = 6$, and we need two numbers multiplying to 6 and adding to 7: those are 6 and 1. Split the middle term $7x = 6x + x$:",
                  "zh": "这里 $ac = 2 \\cdot 3 = 6$，我们需要两个数乘积为 6、和为 7：即 6 和 1。把中间项拆成 $7x = 6x + x$："
                },
                {
                  "type": "math",
                  "tex": "2x^2 + 6x + x + 3"
                },
                {
                  "type": "p",
                  "en": "Group into pairs and factor each pair: $2x(x + 3) + 1(x + 3)$. The common factor $(x + 3)$ confirms the split was right.",
                  "zh": "两两分组并各自提取公因式：$2x(x + 3) + 1(x + 3)$。公共因式 $(x + 3)$ 说明拆分正确。"
                },
                {
                  "type": "math",
                  "tex": "(x + 3)(2x + 1)"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Special Factoring Patterns",
              "zh": "特殊因式分解公式"
            },
            {
              "type": "p",
              "en": "The special products from the previous lesson give instant factorizations when you spot them. A difference of squares and a perfect-square trinomial are the two you must recognize on sight:",
              "zh": "上一课的乘法公式在你识别出它们时能立刻给出因式分解。平方差与完全平方三项式是你必须一眼认出的两种："
            },
            {
              "type": "math",
              "tex": "a^2 - b^2 = (a + b)(a - b)"
            },
            {
              "type": "math",
              "tex": "a^2 \\pm 2ab + b^2 = (a \\pm b)^2"
            },
            {
              "type": "note",
              "en": "A sum of squares like $x^2 + 16$ does NOT factor over the real numbers — there are no two real numbers that multiply to $+16$ and add to $0$. Only a DIFFERENCE of squares factors. (In a later lesson, complex numbers will change this story.)",
              "zh": "像 $x^2 + 16$ 这样的平方和在实数范围内不能分解——没有两个实数能乘积为 $+16$ 且和为 $0$。只有平方差才能分解。（在后面的课程中，复数会改变这个结论。）"
            },
            {
              "type": "h3",
              "en": "Factoring Completely and Reading the Zeros",
              "zh": "彻底分解并读出零点"
            },
            {
              "type": "p",
              "en": "To factor completely, pull out the GCF first, then keep factoring each piece until nothing else can be broken down. Once fully factored, the expression reveals its zeros: by the zero-product property, a product is zero exactly when a factor is zero. So $(x - 5)(x + 3) = 0$ gives $x = 5$ or $x = -3$ — precisely the x-intercepts of the parabola $y = x^2 - 2x - 15$.",
              "zh": "要彻底分解，先提取最大公因式，再继续分解每一部分，直到无法再分。完全分解后，表达式就显露出它的零点：根据零积性质，乘积为零当且仅当某个因式为零。于是 $(x - 5)(x + 3) = 0$ 给出 $x = 5$ 或 $x = -3$——这正是抛物线 $y = x^2 - 2x - 15$ 的 x 轴截距。"
            },
            {
              "type": "note",
              "en": "Test tip: after factoring, multiply your answer back out to confirm it equals the original. And never stop early — a common lost point is factoring $2x^2 - 18$ as $2(x^2 - 9)$ and forgetting that $x^2 - 9 = (x + 3)(x - 3)$ still factors. Factor COMPLETELY.",
              "zh": "考试提示：分解后把答案乘回去，确认与原式相等。而且千万不要提前收手——常见的失分是把 $2x^2 - 18$ 分解成 $2(x^2 - 9)$ 却忘了 $x^2 - 9 = (x + 3)(x - 3)$ 还能继续分解。要\"彻底\"分解。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Factor completely, then find the zeros",
                "zh": "例题 4：彻底分解并求零点"
              },
              "problem": {
                "en": "Factor $3x^2 - 12$ completely, then state the values of $x$ that make it zero.",
                "zh": "彻底分解 $3x^2 - 12$，然后说出使其为零的 $x$ 值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First factor out the GCF, 3: $3x^2 - 12 = 3(x^2 - 4)$. The leftover $x^2 - 4$ is a difference of squares:",
                  "zh": "先提取最大公因式 3：$3x^2 - 12 = 3(x^2 - 4)$。剩下的 $x^2 - 4$ 是平方差："
                },
                {
                  "type": "math",
                  "tex": "3(x^2 - 4) = 3(x + 2)(x - 2)"
                },
                {
                  "type": "p",
                  "en": "The constant factor 3 is never zero, so the zeros come from $x + 2 = 0$ and $x - 2 = 0$, giving $x = -2$ and $x = 2$.",
                  "zh": "常数因式 3 永远不为零，所以零点来自 $x + 2 = 0$ 与 $x - 2 = 0$，得 $x = -2$ 与 $x = 2$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Factor $x^2 + 7x + 12$.",
                "zh": "分解 $x^2 + 7x + 12$。"
              },
              "choices": [
                "$(x + 2)(x + 6)$",
                "$(x + 3)(x + 4)$",
                "$(x + 1)(x + 12)$",
                "$(x - 3)(x - 4)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "We need two numbers multiplying to 12 and adding to 7: that is 3 and 4, so $(x + 3)(x + 4)$. The pair 2 and 6 multiplies to 12 but adds to 8, not 7, so $(x + 2)(x + 6)$ produces the wrong middle term.",
                "zh": "我们需要两个数乘积为 12、和为 7：即 3 和 4，所以是 $(x + 3)(x + 4)$。而 2 和 6 乘积为 12 但和为 8 而非 7，所以 $(x + 2)(x + 6)$ 会给出错误的中间项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Factor $8x^2 + 12x$ completely.",
                "zh": "彻底分解 $8x^2 + 12x$。"
              },
              "choices": [
                "$2x(4x + 6)$",
                "$4(2x^2 + 3x)$",
                "$4x(2x + 3)$",
                "$x(8x + 12)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The GCF of $8x^2$ and $12x$ is $4x$, giving $4x(2x + 3)$. The option $2x(4x + 6)$ is a real factorization but not complete, because $4x + 6$ still shares a factor of 2 — you must pull out the GREATEST common factor.",
                "zh": "$8x^2$ 与 $12x$ 的最大公因式是 $4x$，得 $4x(2x + 3)$。$2x(4x + 6)$ 虽然是一种分解，但没有分解彻底，因为 $4x + 6$ 还有公因数 2——必须提取\"最大\"公因式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The expression $x^2 - 64$ equals zero at two values of $x$. Enter the positive one as an integer.",
                "zh": "表达式 $x^2 - 64$ 在两个 $x$ 值处为零。请以整数输入其中的正值。"
              },
              "answer": "8",
              "accept": [
                "8.0",
                "+8"
              ],
              "explanation": {
                "en": "As a difference of squares, $x^2 - 64 = (x + 8)(x - 8)$. Setting each factor to zero gives $x = -8$ and $x = 8$; the positive zero is 8. These are the x-intercepts of $y = x^2 - 64$.",
                "zh": "作为平方差，$x^2 - 64 = (x + 8)(x - 8)$。令每个因式为零得 $x = -8$ 与 $x = 8$；正的零点是 8。它们就是 $y = x^2 - 64$ 的 x 轴截距。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Factor $2x^2 + 7x + 3$.",
                "zh": "分解 $2x^2 + 7x + 3$。"
              },
              "choices": [
                "$(2x + 1)(x + 3)$",
                "$(2x + 3)(x + 1)$",
                "$(2x + 3)(x - 1)$",
                "$(x + 1)(x + 3)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "By the ac method, $ac = 6$; the numbers 6 and 1 split the middle term into $6x + x$, and grouping gives $(x + 3)(2x + 1)$. The tempting $(2x + 3)(x + 1)$ multiplies out to $2x^2 + 5x + 3$, whose middle term is wrong.",
                "zh": "用 ac 法，$ac = 6$；6 与 1 把中间项拆成 $6x + x$，分组得 $(x + 3)(2x + 1)$。看似合理的 $(2x + 3)(x + 1)$ 展开后是 $2x^2 + 5x + 3$，中间项不对。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Factor $x^2 - 10x + 25$.",
                "zh": "分解 $x^2 - 10x + 25$。"
              },
              "choices": [
                "$(x + 5)^2$",
                "$(x - 5)(x + 5)$",
                "$(x - 25)(x - 1)$",
                "$(x - 5)^2$"
              ],
              "answer": 3,
              "explanation": {
                "en": "This is a perfect-square trinomial: $25 = 5^2$ and the middle term $-10x = -2(5)x$, so it is $(x - 5)^2$. Writing $(x - 5)(x + 5)$ would give $x^2 - 25$ with no middle term, which does not match.",
                "zh": "这是完全平方三项式：$25 = 5^2$ 且中间项 $-10x = -2(5)x$，所以是 $(x - 5)^2$。写成 $(x - 5)(x + 5)$ 会得到 $x^2 - 25$、没有中间项，与原式不符。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A quadratic factors as $(x - 3)(x + 5)$. Enter its smaller zero as an integer.",
                "zh": "某二次式分解为 $(x - 3)(x + 5)$。请以整数输入它较小的零点。"
              },
              "answer": "-5",
              "accept": [
                "-5.0"
              ],
              "explanation": {
                "en": "By the zero-product property, the expression is zero when $x - 3 = 0$ (so $x = 3$) or $x + 5 = 0$ (so $x = -5$). The smaller value is $-5$. A common slip is reading the zero of $(x + 5)$ as $+5$ instead of $-5$.",
                "zh": "根据零积性质，当 $x - 3 = 0$（即 $x = 3$）或 $x + 5 = 0$（即 $x = -5$）时表达式为零。较小的值是 $-5$。常见错误是把 $(x + 5)$ 的零点读成 $+5$ 而不是 $-5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rectangular mural in a Utah high school has area $x^2 + 9x + 20$ square feet and factors into two whole-number-width sides. The two side lengths are $(x + m)$ and $(x + n)$ with $m < n$. Enter $m$ as an integer.",
                "zh": "犹他州一所高中的矩形壁画面积为 $x^2 + 9x + 20$ 平方英尺，可分解为两条边长。两条边长为 $(x + m)$ 与 $(x + n)$，且 $m < n$。请以整数输入 $m$。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "+4"
              ],
              "explanation": {
                "en": "Two numbers multiplying to 20 and adding to 9 are 4 and 5, so the sides are $(x + 4)$ and $(x + 5)$. With $m < n$, the smaller is $m = 4$. The pair 2 and 10 multiplies to 20 but adds to 12, so it does not match the $9x$ term.",
                "zh": "乘积为 20、和为 9 的两个数是 4 和 5，所以边长是 $(x + 4)$ 与 $(x + 5)$。由 $m < n$，较小的是 $m = 4$。2 和 10 乘积为 20 但和为 12，与 $9x$ 项不符。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Factor $2x^3 - 18x$ completely.",
                "zh": "荣誉挑战：彻底分解 $2x^3 - 18x$。"
              },
              "choices": [
                "$2x(x^2 - 9)$",
                "$(2x - 6)(x^2 + 3)$",
                "$2x(x - 3)(x + 3)$",
                "$2x(x - 3)^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "First pull out the GCF $2x$: $2x(x^2 - 9)$. Then $x^2 - 9$ is a difference of squares, $(x - 3)(x + 3)$, giving $2x(x - 3)(x + 3)$. Stopping at $2x(x^2 - 9)$ is not complete because the difference of squares still factors.",
                "zh": "先提取最大公因式 $2x$：$2x(x^2 - 9)$。再把 $x^2 - 9$ 作为平方差分解为 $(x - 3)(x + 3)$，得 $2x(x - 3)(x + 3)$。停在 $2x(x^2 - 9)$ 并不彻底，因为平方差还能继续分解。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "quadratic-functions",
      "title": "Unit 3: Quadratic Functions and Their Graphs",
      "titleZh": "第三单元：二次函数及其图象",
      "lessons": [
        {
          "id": "graphing-quadratic-functions",
          "title": "Graphing Quadratic Functions",
          "titleZh": "二次函数的图象",
          "content": [
            {
              "type": "h2",
              "en": "The Shape of a Thrown Ball",
              "zh": "被抛出物体的形状"
            },
            {
              "type": "p",
              "en": "When water arcs out of a fountain at Temple Square, or a basketball leaves your hand toward the hoop, the path traces a smooth, symmetric curve called a parabola. Every parabola is the graph of a quadratic function — a function whose rule contains a squared variable but no higher power. In Secondary Math II, quadratics are the central object of study, and learning to read their graphs quickly is a skill you will use in geometry (areas), physics (motion), and statistics (curved data) alike.",
              "zh": "当喷泉的水从圣殿广场喷出，或篮球离手飞向篮筐时，它的路径描出一条光滑、对称的曲线，称为抛物线。每一条抛物线都是某个二次函数的图象——这类函数的表达式含有平方项，但没有更高次的项。在中学数学二中，二次函数是学习的核心，快速读懂它们的图象是一项你在几何（面积）、物理（运动）和统计（曲线数据）中都会用到的技能。"
            },
            {
              "type": "p",
              "en": "A quadratic function can be written in several equivalent forms. Each form is a different ''lens'': one shows the vertex at a glance, another shows where the graph crosses the $x$-axis, and another shows the $y$-intercept. Fluency means choosing the form that reveals what you need.",
              "zh": "二次函数可以写成几种等价的形式。每种形式都是一副不同的\"眼镜\"：一种一眼就能看出顶点，另一种能看出图象与 $x$ 轴的交点，还有一种能看出 $y$ 轴截距。熟练意味着根据需要选择最能揭示信息的形式。"
            },
            {
              "type": "h3",
              "en": "Standard Form: $y = ax^2 + bx + c$",
              "zh": "标准式（一般式）：$y = ax^2 + bx + c$"
            },
            {
              "type": "p",
              "en": "In standard form the coefficient $a$ controls the shape, and $c$ is the $y$-intercept because setting $x = 0$ leaves $y = c$. The parabola opens upward when $a > 0$ (it has a lowest point, a minimum) and downward when $a < 0$ (a highest point, a maximum). The larger $|a|$ is, the narrower the parabola; the smaller $|a|$ is, the wider it opens.",
              "zh": "在标准式中，系数 $a$ 决定形状，而 $c$ 就是 $y$ 轴截距，因为令 $x = 0$ 得到 $y = c$。当 $a > 0$ 时抛物线开口向上（有最低点，即最小值），当 $a < 0$ 时开口向下（有最高点，即最大值）。$|a|$ 越大，抛物线越窄；$|a|$ 越小，开口越宽。"
            },
            {
              "type": "p",
              "en": "The axis of symmetry is the vertical line that splits the parabola into mirror halves, and the vertex sits on it. Its $x$-coordinate is found with a formula you should memorize:",
              "zh": "对称轴是把抛物线分成互为镜像的两半的竖直直线，顶点就落在这条轴上。它的 $x$ 坐标由一个你应当牢记的公式给出："
            },
            {
              "type": "math",
              "tex": "x = -\\frac{b}{2a}"
            },
            {
              "type": "p",
              "en": "Once you have that $x$-value, substitute it back into the function to get the $y$-coordinate of the vertex.",
              "zh": "求出这个 $x$ 值后，把它代回函数就能得到顶点的 $y$ 坐标。"
            },
            {
              "type": "note",
              "en": "Watch the signs in $-\\frac{b}{2a}$. For $y = x^2 - 6x + 5$, we have $b = -6$, so $x = -\\frac{-6}{2(1)} = 3$ — a positive number. Forgetting the leading minus (or the sign of $b$) is the single most common vertex error.",
              "zh": "注意 $-\\frac{b}{2a}$ 中的符号。对于 $y = x^2 - 6x + 5$，有 $b = -6$，所以 $x = -\\frac{-6}{2(1)} = 3$——是正数。忘记前面的负号（或 $b$ 的符号）是求顶点时最常见的错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading a graph from standard form",
                "zh": "例题 1：从标准式读出图象"
              },
              "problem": {
                "en": "For $y = x^2 - 6x + 5$, find the vertex, axis of symmetry, and intercepts, and build a table of values.",
                "zh": "对于 $y = x^2 - 6x + 5$，求顶点、对称轴和截距，并列出数值表。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $a = 1 > 0$, so the parabola opens up (it has a minimum). The axis of symmetry is $x = -\\frac{-6}{2(1)} = 3$.",
                  "zh": "这里 $a = 1 > 0$，所以抛物线开口向上（有最小值）。对称轴为 $x = -\\frac{-6}{2(1)} = 3$。"
                },
                {
                  "type": "math",
                  "tex": "y = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4"
                },
                {
                  "type": "p",
                  "en": "So the vertex is the point $(3, -4)$. The $y$-intercept is $(0, 5)$. Making a table around the axis $x = 3$ shows the mirror symmetry:",
                  "zh": "所以顶点是点 $(3, -4)$。$y$ 轴截距是 $(0, 5)$。围绕对称轴 $x = 3$ 列表可以看出镜像对称："
                },
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "$x = 0 \\to y = 5$; and its mirror $x = 6 \\to y = 5$",
                      "zh": "$x = 0 \\to y = 5$；它的镜像 $x = 6 \\to y = 5$"
                    },
                    {
                      "en": "$x = 1 \\to y = 0$; and its mirror $x = 5 \\to y = 0$",
                      "zh": "$x = 1 \\to y = 0$；它的镜像 $x = 5 \\to y = 0$"
                    },
                    {
                      "en": "$x = 2 \\to y = -3$; and its mirror $x = 4 \\to y = -3$",
                      "zh": "$x = 2 \\to y = -3$；它的镜像 $x = 4 \\to y = -3$"
                    },
                    {
                      "en": "$x = 3 \\to y = -4$ (the vertex, lowest point)",
                      "zh": "$x = 3 \\to y = -4$（顶点，最低点）"
                    }
                  ]
                },
                {
                  "type": "p",
                  "en": "The rows $y = 0$ tell us the $x$-intercepts (zeros) are $(1, 0)$ and $(5, 0)$. Notice the vertex $x = 3$ is exactly halfway between them.",
                  "zh": "$y = 0$ 的那两行告诉我们 $x$ 轴截距（零点）是 $(1, 0)$ 和 $(5, 0)$。注意顶点 $x = 3$ 恰好在它们正中间。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Vertex Form: $y = a(x - h)^2 + k$",
              "zh": "顶点式：$y = a(x - h)^2 + k$"
            },
            {
              "type": "p",
              "en": "Vertex form names the vertex directly: it is the point $(h, k)$. This form also tells the whole transformation story, starting from the parent function $y = x^2$ (whose vertex is the origin):",
              "zh": "顶点式直接给出顶点：即点 $(h, k)$。这种形式也讲述了完整的变换过程，从母函数 $y = x^2$（顶点在原点）出发："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$h$ shifts the graph horizontally: $(x - h)$ moves it right when $h > 0$, left when $h < 0$",
                  "zh": "$h$ 使图象水平平移：$(x - h)$ 在 $h > 0$ 时右移，在 $h < 0$ 时左移"
                },
                {
                  "en": "$k$ shifts the graph vertically: up when $k > 0$, down when $k < 0$",
                  "zh": "$k$ 使图象竖直平移：$k > 0$ 时上移，$k < 0$ 时下移"
                },
                {
                  "en": "$a$ stretches the graph vertically by a factor of $|a|$, and if $a < 0$ it reflects the graph over its axis (opens down)",
                  "zh": "$a$ 使图象竖直方向拉伸 $|a|$ 倍；若 $a < 0$，则图象绕其对称轴翻折（开口向下）"
                }
              ]
            },
            {
              "type": "note",
              "en": "The shift is opposite the sign inside the parentheses. In $y = (x - 4)^2$ the graph moves 4 units RIGHT, and in $y = (x + 4)^2 = (x - (-4))^2$ it moves 4 units LEFT. Students often reverse these.",
              "zh": "括号内的符号与平移方向相反。在 $y = (x - 4)^2$ 中图象向右移 4 个单位，而在 $y = (x + 4)^2 = (x - (-4))^2$ 中向左移 4 个单位。学生常把方向搞反。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Graphing from vertex form",
                "zh": "例题 2：从顶点式作图"
              },
              "problem": {
                "en": "Describe the graph of $y = -2(x + 1)^2 + 8$ and list its key points.",
                "zh": "描述 $y = -2(x + 1)^2 + 8$ 的图象，并列出它的关键点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Match the form: $h = -1$, $k = 8$, $a = -2$. The vertex is $(-1, 8)$. Since $a = -2 < 0$, the parabola opens downward, so $8$ is the maximum value. The factor $2$ makes it narrower than $y = x^2$.",
                  "zh": "对照形式：$h = -1$，$k = 8$，$a = -2$。顶点是 $(-1, 8)$。由于 $a = -2 < 0$，抛物线开口向下，所以 $8$ 是最大值。系数 $2$ 使它比 $y = x^2$ 更窄。"
                },
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "$x = -1 \\to y = 8$ (vertex, highest point)",
                      "zh": "$x = -1 \\to y = 8$（顶点，最高点）"
                    },
                    {
                      "en": "$x = 0 \\to y = -2(1)^2 + 8 = 6$; mirror $x = -2 \\to y = 6$",
                      "zh": "$x = 0 \\to y = -2(1)^2 + 8 = 6$；镜像 $x = -2 \\to y = 6$"
                    },
                    {
                      "en": "$x = 1 \\to y = -2(2)^2 + 8 = 0$; mirror $x = -3 \\to y = 0$",
                      "zh": "$x = 1 \\to y = -2(2)^2 + 8 = 0$；镜像 $x = -3 \\to y = 0$"
                    }
                  ]
                },
                {
                  "type": "p",
                  "en": "The $y = 0$ rows give the $x$-intercepts $(1, 0)$ and $(-3, 0)$, and the axis of symmetry is $x = -1$.",
                  "zh": "$y = 0$ 的那两行给出 $x$ 轴截距 $(1, 0)$ 和 $(-3, 0)$，对称轴为 $x = -1$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Intercept (Factored) Form: $y = a(x - p)(x - q)$",
              "zh": "交点式（因式分解式）：$y = a(x - p)(x - q)$"
            },
            {
              "type": "p",
              "en": "When a quadratic is factored, its zeros jump out. Because a product is $0$ only when a factor is $0$, the graph crosses the $x$-axis at $x = p$ and $x = q$. By symmetry the axis of symmetry is exactly the average of the two zeros, $x = \\frac{p + q}{2}$, and the vertex sits there.",
              "zh": "当二次函数被因式分解后，它的零点就一目了然。因为乘积为 $0$ 当且仅当某个因式为 $0$，图象在 $x = p$ 和 $x = q$ 处与 $x$ 轴相交。由对称性，对称轴恰好是两零点的平均值 $x = \\frac{p + q}{2}$，顶点就在那里。"
            },
            {
              "type": "note",
              "en": "Test tip: the fastest route to a vertex when you know the two zeros is to average them for the $x$-coordinate, then substitute. You do not need $-\\frac{b}{2a}$ if the function is already factored.",
              "zh": "考试提示：已知两个零点时，求顶点最快的方法是把它们平均得到 $x$ 坐标，再代入求 $y$。如果函数已经因式分解，就不必用 $-\\frac{b}{2a}$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: From factored form to a full sketch",
                "zh": "例题 3：从交点式到完整草图"
              },
              "problem": {
                "en": "Find every key feature of $y = (x + 2)(x - 4)$.",
                "zh": "求出 $y = (x + 2)(x - 4)$ 的所有关键特征。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set each factor to $0$: $x + 2 = 0$ gives $x = -2$, and $x - 4 = 0$ gives $x = 4$. So the $x$-intercepts are $(-2, 0)$ and $(4, 0)$.",
                  "zh": "令每个因式为 $0$：$x + 2 = 0$ 得 $x = -2$，$x - 4 = 0$ 得 $x = 4$。所以 $x$ 轴截距是 $(-2, 0)$ 和 $(4, 0)$。"
                },
                {
                  "type": "math",
                  "tex": "x_{\\text{vertex}} = \\frac{-2 + 4}{2} = 1"
                },
                {
                  "type": "p",
                  "en": "Substitute $x = 1$: $y = (1 + 2)(1 - 4) = (3)(-3) = -9$, so the vertex is $(1, -9)$, a minimum since $a = 1 > 0$. The $y$-intercept comes from $x = 0$: $y = (2)(-4) = -8$, giving $(0, -8)$.",
                  "zh": "代入 $x = 1$：$y = (1 + 2)(1 - 4) = (3)(-3) = -9$，所以顶点是 $(1, -9)$；因为 $a = 1 > 0$，这是最小值。$y$ 轴截距由 $x = 0$ 得到：$y = (2)(-4) = -8$，即 $(0, -8)$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Key Features and Intervals of Increase and Decrease",
              "zh": "关键特征与增减区间"
            },
            {
              "type": "p",
              "en": "To fully describe a parabola, report its vertex (labeled as a maximum or minimum), its axis of symmetry, its intercepts, and where it is rising or falling. The vertex splits the domain into two intervals of monotonic behavior:",
              "zh": "要完整描述一条抛物线，需给出它的顶点（标明是最大值还是最小值）、对称轴、截距，以及它在何处上升或下降。顶点把定义域分成两个单调区间："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If it opens up (min at $x = h$): the function decreases on $(-\\infty, h)$ and increases on $(h, \\infty)$",
                  "zh": "若开口向上（在 $x = h$ 处取最小值）：函数在 $(-\\infty, h)$ 上递减，在 $(h, \\infty)$ 上递增"
                },
                {
                  "en": "If it opens down (max at $x = h$): the function increases on $(-\\infty, h)$ and decreases on $(h, \\infty)$",
                  "zh": "若开口向下（在 $x = h$ 处取最大值）：函数在 $(-\\infty, h)$ 上递增，在 $(h, \\infty)$ 上递减"
                },
                {
                  "en": "The domain is always all real numbers; the range is $y \\ge k$ (opens up) or $y \\le k$ (opens down)",
                  "zh": "定义域总是全体实数；值域为 $y \\ge k$（开口向上）或 $y \\le k$（开口向下）"
                }
              ]
            },
            {
              "type": "p",
              "en": "For Example 1, $y = x^2 - 6x + 5$ opens up with vertex $(3, -4)$, so it decreases on $(-\\infty, 3)$, increases on $(3, \\infty)$, and has range $y \\ge -4$. Being able to name all of these from any of the three forms is the goal of this lesson.",
              "zh": "对于例题 1，$y = x^2 - 6x + 5$ 开口向上，顶点为 $(3, -4)$，所以它在 $(-\\infty, 3)$ 上递减，在 $(3, \\infty)$ 上递增，值域为 $y \\ge -4$。能从三种形式中的任意一种说出所有这些特征，正是本课的目标。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the vertex of $y = x^2 - 8x + 12$?",
                "zh": "$y = x^2 - 8x + 12$ 的顶点是什么？"
              },
              "choices": [
                "$(8, 12)$",
                "$(-4, 60)$",
                "$(4, -4)$",
                "$(4, 12)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The axis is $x = -\\frac{-8}{2(1)} = 4$; then $y = 16 - 32 + 12 = -4$, so the vertex is $(4, -4)$. Using $x = +\\frac{-8}{2} = -4$ (dropping the leading minus of the formula) produces the wrong point.",
                "zh": "对称轴是 $x = -\\frac{-8}{2(1)} = 4$；再算 $y = 16 - 32 + 12 = -4$，所以顶点是 $(4, -4)$。若用 $x = +\\frac{-8}{2} = -4$（漏掉公式前面的负号）就会得到错误的点。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the $y$-coordinate of the $y$-intercept of $y = 3x^2 - 5x + 2$? Give an integer.",
                "zh": "$y = 3x^2 - 5x + 2$ 的 $y$ 轴截距的 $y$ 坐标是多少？请以整数作答。"
              },
              "answer": "2",
              "accept": [
                "(0,2)",
                "(0, 2)",
                "y=2"
              ],
              "explanation": {
                "en": "The $y$-intercept occurs at $x = 0$, giving $y = 3(0) - 5(0) + 2 = 2$. In standard form the constant term $c$ is always the $y$-intercept.",
                "zh": "$y$ 轴截距在 $x = 0$ 处，$y = 3(0) - 5(0) + 2 = 2$。在标准式中，常数项 $c$ 永远就是 $y$ 轴截距。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which function opens downward and is the narrowest?",
                "zh": "哪个函数开口向下且开口最窄？"
              },
              "choices": [
                "$y = 0.5x^2 + 1$",
                "$y = 3x^2 - 2$",
                "$y = -\\tfrac{1}{4}x^2$",
                "$y = -5x^2 + 7$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Opening downward requires $a < 0$, so only $-\\tfrac{1}{4}x^2$ and $-5x^2 + 7$ qualify. Narrowness grows with $|a|$, and $|-5| = 5 > \\tfrac{1}{4}$, so $y = -5x^2 + 7$ is the narrowest. A large positive $a$ like $3$ is narrow but opens the wrong way.",
                "zh": "开口向下要求 $a < 0$，所以只有 $-\\tfrac{1}{4}x^2$ 和 $-5x^2 + 7$ 符合。$|a|$ 越大开口越窄，而 $|-5| = 5 > \\tfrac{1}{4}$，所以 $y = -5x^2 + 7$ 最窄。像 $3$ 这样大的正 $a$ 虽然窄，但开口方向错了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the axis of symmetry of $y = 2x^2 + 8x - 1$. Write your answer as $x = $ a number.",
                "zh": "求 $y = 2x^2 + 8x - 1$ 的对称轴。请写成 $x = $ 一个数的形式。"
              },
              "answer": "x=-2",
              "accept": [
                "-2",
                "x = -2",
                "x=-2.0"
              ],
              "explanation": {
                "en": "Use $x = -\\frac{b}{2a} = -\\frac{8}{2(2)} = -\\frac{8}{4} = -2$. The axis is the vertical line $x = -2$.",
                "zh": "用 $x = -\\frac{b}{2a} = -\\frac{8}{2(2)} = -\\frac{8}{4} = -2$。对称轴是竖直直线 $x = -2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How is the graph of $y = (x + 3)^2 - 5$ obtained from $y = x^2$?",
                "zh": "$y = (x + 3)^2 - 5$ 的图象是如何由 $y = x^2$ 得到的？"
              },
              "choices": [
                "Shift right 3 and up 5",
                "Shift left 3 and down 5",
                "Shift left 5 and down 3",
                "Shift right 3 and down 5"
              ],
              "answer": 1,
              "explanation": {
                "en": "Here $h = -3$ and $k = -5$, so the vertex moves to $(-3, -5)$: left 3 and down 5. The $(x + 3)$ shifts opposite its sign — left, not right — which is the trap in the other choices.",
                "zh": "这里 $h = -3$，$k = -5$，所以顶点移到 $(-3, -5)$：左移 3、下移 5。$(x + 3)$ 的平移方向与其符号相反——向左而非向右——这正是其他选项设下的陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What are the zeros of $y = (x - 3)(x + 5)$?",
                "zh": "$y = (x - 3)(x + 5)$ 的零点是什么？"
              },
              "choices": [
                "$x = 3$ and $x = -5$",
                "$x = -3$ and $x = 5$",
                "$x = 3$ and $x = 5$",
                "$x = 15$ and $x = 0$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Set each factor to zero: $x - 3 = 0 \\to x = 3$, and $x + 5 = 0 \\to x = -5$. The zeros take the opposite sign of the number inside each factor, so $(x + 5)$ gives $-5$, not $5$.",
                "zh": "令每个因式为零：$x - 3 = 0 \\to x = 3$，$x + 5 = 0 \\to x = -5$。零点与每个因式内数字符号相反，所以 $(x + 5)$ 给出 $-5$ 而非 $5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A stream of water follows $y = -\\frac{1}{4}(x - 6)^2 + 9$, where $x$ and $y$ are in feet. What is the maximum height of the water, in feet?",
                "zh": "一股水流沿 $y = -\\frac{1}{4}(x - 6)^2 + 9$ 运动，其中 $x$、$y$ 以英尺为单位。水流的最大高度是多少英尺？"
              },
              "answer": "9",
              "accept": [
                "9 ft",
                "9 feet",
                "9.0"
              ],
              "explanation": {
                "en": "The function is in vertex form with vertex $(6, 9)$. Because $a = -\\frac{1}{4} < 0$, the parabola opens down, so the vertex is a maximum: the greatest height is the $k$-value, $9$ feet.",
                "zh": "该函数是顶点式，顶点为 $(6, 9)$。因为 $a = -\\frac{1}{4} < 0$，抛物线开口向下，顶点是最大值：最大高度就是 $k$ 值，即 $9$ 英尺。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A parabola has $x$-intercepts $(-1, 0)$ and $(7, 0)$ and passes through $(0, -14)$. What is its vertex?",
                "zh": "荣誉挑战：一条抛物线的 $x$ 轴截距为 $(-1, 0)$ 和 $(7, 0)$，且经过 $(0, -14)$。它的顶点是什么？"
              },
              "choices": [
                "$(0, -14)$",
                "$(3, -14)$",
                "$(4, -32)$",
                "$(3, -32)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The axis is the average of the zeros: $x = \\frac{-1 + 7}{2} = 3$. Factored form $y = a(x + 1)(x - 7)$ through $(0, -14)$ gives $-14 = a(1)(-7) = -7a$, so $a = 2$. Then $y(3) = 2(3 + 1)(3 - 7) = 2(4)(-4) = -32$, so the vertex is $(3, -32)$. Averaging the zeros to $x = 3$ (not $4$) is essential — using $x = 4$ misplaces the vertex entirely.",
                "zh": "对称轴是零点的平均值：$x = \\frac{-1 + 7}{2} = 3$。交点式 $y = a(x + 1)(x - 7)$ 经过 $(0, -14)$ 得 $-14 = a(1)(-7) = -7a$，故 $a = 2$。于是 $y(3) = 2(3 + 1)(3 - 7) = 2(4)(-4) = -32$，顶点为 $(3, -32)$。把两零点平均得到 $x = 3$（而非 $4$）是关键——取 $x = 4$ 会把顶点位置完全弄错。"
              }
            }
          ]
        },
        {
          "id": "modeling-with-quadratic-functions",
          "title": "Modeling with Quadratic Functions",
          "titleZh": "用二次函数建模",
          "content": [
            {
              "type": "h2",
              "en": "When the Real World Curves",
              "zh": "当现实世界弯曲时"
            },
            {
              "type": "p",
              "en": "Fireworks launched over the Salt Lake valley on the Fourth of July, the arc of a soccer ball, the area you can enclose with a fixed length of fence — all of these follow quadratic relationships. Modeling means turning a real situation into a quadratic function, then reading the function to answer a question: How high? How long? What is the largest possible? In this lesson we build models three ways and use the vertex to find maximums and minimums.",
              "zh": "七月四日在盐湖谷上空绽放的烟花、足球划过的弧线、用固定长度的围栏能圈出的面积——所有这些都遵循二次关系。建模就是把一个真实情境转化为二次函数，再通过读取函数来回答问题：多高？多久？最大能达到多少？在本课中，我们用三种方法建立模型，并利用顶点求最大值和最小值。"
            },
            {
              "type": "h3",
              "en": "Building a Model from a Vertex and a Point",
              "zh": "由顶点和一点建立模型"
            },
            {
              "type": "p",
              "en": "If a situation tells you the vertex (the turning point) and one other point, start from vertex form $y = a(x - h)^2 + k$. Plug in the vertex for $h$ and $k$, then substitute the extra point to solve for $a$.",
              "zh": "如果情境告诉你顶点（转折点）和另一个点，就从顶点式 $y = a(x - h)^2 + k$ 出发。把顶点代入 $h$ 和 $k$，再把额外的点代入以求出 $a$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A model from vertex and point",
                "zh": "例题 1：由顶点和一点建模"
              },
              "problem": {
                "en": "An arch has its highest point $10$ m above the ground at a horizontal distance of $4$ m, and it meets the ground at the origin $(0, 0)$. Write a quadratic model for the arch.",
                "zh": "一座拱的最高点在水平距离 $4$ 米处、离地 $10$ 米，并在原点 $(0, 0)$ 处触地。为这座拱写出二次模型。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The vertex is $(4, 10)$, so $y = a(x - 4)^2 + 10$. Use the point $(0, 0)$:",
                  "zh": "顶点是 $(4, 10)$，所以 $y = a(x - 4)^2 + 10$。代入点 $(0, 0)$："
                },
                {
                  "type": "math",
                  "tex": "0 = a(0 - 4)^2 + 10 = 16a + 10 \\;\\Rightarrow\\; a = -\\frac{10}{16} = -\\frac{5}{8}"
                },
                {
                  "type": "p",
                  "en": "The model is $y = -\\frac{5}{8}(x - 4)^2 + 10$. The negative $a$ correctly makes the arch open downward.",
                  "zh": "模型为 $y = -\\frac{5}{8}(x - 4)^2 + 10$。负的 $a$ 恰好使拱开口向下。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Building a Model from Three Points",
              "zh": "由三点建立模型"
            },
            {
              "type": "p",
              "en": "When you know three points but no vertex, use standard form $y = ax^2 + bx + c$. Each point gives one equation in $a$, $b$, and $c$; solving the $3 \\times 3$ system determines the model. Choosing a point with $x = 0$ is a shortcut because it hands you $c$ immediately.",
              "zh": "当你知道三个点却不知道顶点时，用标准式 $y = ax^2 + bx + c$。每个点给出一个关于 $a$、$b$、$c$ 的方程；解这个 $3 \\times 3$ 方程组即可确定模型。选一个 $x = 0$ 的点是捷径，因为它能立刻给出 $c$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Fitting three points",
                "zh": "例题 2：拟合三个点"
              },
              "problem": {
                "en": "Find the quadratic through $(0, -3)$, $(1, 0)$, and $(2, 5)$.",
                "zh": "求经过 $(0, -3)$、$(1, 0)$ 和 $(2, 5)$ 的二次函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "From $(0, -3)$: $c = -3$. Substitute the other points into $y = ax^2 + bx - 3$.",
                  "zh": "由 $(0, -3)$：$c = -3$。把其余的点代入 $y = ax^2 + bx - 3$。"
                },
                {
                  "type": "math",
                  "tex": "(1,0): a + b - 3 = 0 \\Rightarrow a + b = 3"
                },
                {
                  "type": "math",
                  "tex": "(2,5): 4a + 2b - 3 = 5 \\Rightarrow 2a + b = 4"
                },
                {
                  "type": "p",
                  "en": "Subtract the first from the second: $a = 1$, so $b = 2$. The model is $y = x^2 + 2x - 3$. Check: $(2)^2 + 2(2) - 3 = 5$. ✓",
                  "zh": "用第二式减第一式：$a = 1$，故 $b = 2$。模型为 $y = x^2 + 2x - 3$。验证：$(2)^2 + 2(2) - 3 = 5$。✓"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Projectile Motion",
              "zh": "抛体运动"
            },
            {
              "type": "p",
              "en": "Near Earth's surface, the height of a launched object (in feet, with time $t$ in seconds) follows $h(t) = -16t^2 + v_0 t + h_0$, where $v_0$ is the initial upward velocity and $h_0$ is the initial height. The $-16$ comes from gravity. The vertex gives the time and value of the greatest height.",
              "zh": "在地球表面附近，被抛出物体的高度（单位英尺，时间 $t$ 以秒计）遵循 $h(t) = -16t^2 + v_0 t + h_0$，其中 $v_0$ 是初始向上速度，$h_0$ 是初始高度，$-16$ 来自重力。顶点给出最大高度所在的时刻及其数值。"
            },
            {
              "type": "note",
              "en": "The coefficient $-16$ is for feet; in metric units it becomes about $-4.9$ (from $\\tfrac{1}{2}g$ with $g \\approx 9.8$ m/s$^2$). Always check whether a problem is in feet or meters before plugging in.",
              "zh": "系数 $-16$ 对应英尺；在公制单位下它约为 $-4.9$（由 $\\tfrac{1}{2}g$ 且 $g \\approx 9.8$ 米/秒$^2$ 得来）。代入前务必确认题目用的是英尺还是米。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Maximum height of a ball",
                "zh": "例题 3：球的最大高度"
              },
              "problem": {
                "en": "A ball is thrown upward at $48$ ft/s from a height of $6$ ft. When does it reach its peak, and how high is that peak?",
                "zh": "一个球以 $48$ 英尺/秒从 $6$ 英尺高处向上抛出。它何时到达最高点？最高点有多高？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The model is $h(t) = -16t^2 + 48t + 6$. The peak is at the vertex time $t = -\\frac{b}{2a} = -\\frac{48}{2(-16)} = 1.5$ s.",
                  "zh": "模型为 $h(t) = -16t^2 + 48t + 6$。最高点在顶点时刻 $t = -\\frac{b}{2a} = -\\frac{48}{2(-16)} = 1.5$ 秒。"
                },
                {
                  "type": "math",
                  "tex": "h(1.5) = -16(1.5)^2 + 48(1.5) + 6 = -36 + 72 + 6 = 42"
                },
                {
                  "type": "p",
                  "en": "The ball reaches a maximum height of $42$ ft at $t = 1.5$ s. Because $a < 0$, the vertex is a maximum — as expected for something that goes up and comes back down.",
                  "zh": "球在 $t = 1.5$ 秒时达到最大高度 $42$ 英尺。因为 $a < 0$，顶点是最大值——这正符合先升后降的物体。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Area and Optimization",
              "zh": "面积与最优化"
            },
            {
              "type": "p",
              "en": "Optimization problems ask for a largest or smallest value, and quadratics answer them through the vertex. A classic Utah-farm problem: with a fixed amount of fencing, what dimensions enclose the most area? Write the area as a function of one variable, then find the vertex.",
              "zh": "最优化问题求最大值或最小值，而二次函数通过顶点回答这类问题。一个经典的犹他农场问题：用固定长度的围栏，怎样的尺寸能围出最大面积？把面积写成一个变量的函数，再求顶点。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: The largest rectangular pen",
                "zh": "例题 4：最大的矩形围栏"
              },
              "problem": {
                "en": "A rancher has $60$ ft of fence and uses a straight barn wall as one side, fencing only the other three sides of a rectangle. What dimensions give the maximum area?",
                "zh": "一位牧场主有 $60$ 英尺围栏，用一堵直的谷仓墙作为一边，只围矩形的其余三边。怎样的尺寸能得到最大面积？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let the two sides perpendicular to the barn each be $x$. They use $2x$ ft, leaving $60 - 2x$ ft for the side parallel to the barn. The area is:",
                  "zh": "设垂直于谷仓的两条边各为 $x$。它们用去 $2x$ 英尺，剩下 $60 - 2x$ 英尺作为与谷仓平行的一边。面积为："
                },
                {
                  "type": "math",
                  "tex": "A(x) = x(60 - 2x) = -2x^2 + 60x"
                },
                {
                  "type": "p",
                  "en": "The vertex is at $x = -\\frac{60}{2(-2)} = 15$. Then the parallel side is $60 - 2(15) = 30$ ft, and the area is $15 \\times 30 = 450$ ft$^2$. So a $15$ ft by $30$ ft pen is largest.",
                  "zh": "顶点在 $x = -\\frac{60}{2(-2)} = 15$。此时平行边为 $60 - 2(15) = 30$ 英尺，面积为 $15 \\times 30 = 450$ 平方英尺。所以 $15$ 英尺乘 $30$ 英尺的围栏最大。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Average Rate of Change",
              "zh": "平均变化率"
            },
            {
              "type": "p",
              "en": "For a function $f$, the average rate of change over $[a, b]$ is the slope of the secant line connecting the endpoints: $\\frac{f(b) - f(a)}{b - a}$. For a line this is constant, but for a quadratic it changes from interval to interval — that changing rate is exactly what makes the graph curve.",
              "zh": "对于函数 $f$，它在 $[a, b]$ 上的平均变化率是连接两端点的割线的斜率：$\\frac{f(b) - f(a)}{b - a}$。对一次函数它是常数，但对二次函数它随区间而变——正是这种变化的速率使图象弯曲。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 5: Rate of change of a quadratic",
                "zh": "例题 5：二次函数的变化率"
              },
              "problem": {
                "en": "For $f(x) = x^2$, compare the average rate of change over $[1, 3]$ and over $[3, 5]$.",
                "zh": "对于 $f(x) = x^2$，比较它在 $[1, 3]$ 和 $[3, 5]$ 上的平均变化率。"
              },
              "solution": [
                {
                  "type": "math",
                  "tex": "[1,3]: \\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4"
                },
                {
                  "type": "math",
                  "tex": "[3,5]: \\frac{f(5) - f(3)}{5 - 3} = \\frac{25 - 9}{2} = 8"
                },
                {
                  "type": "p",
                  "en": "The rate rose from $4$ to $8$: the quadratic is getting steeper. (In fact, the secant slope of $x^2$ over $[a, b]$ is always $a + b$, so it climbs without bound — unlike a line.)",
                  "zh": "变化率从 $4$ 升到 $8$：二次函数越来越陡。（事实上，$x^2$ 在 $[a, b]$ 上的割线斜率恒为 $a + b$，所以它无限增大——与一次函数不同。）"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Quadratic vs. Linear vs. Exponential Growth",
              "zh": "二次、一次与指数增长的比较"
            },
            {
              "type": "p",
              "en": "A key idea from Secondary Math I returns here: different function families grow at different ''ultimate'' speeds. Linear growth adds a fixed amount, quadratic growth speeds up steadily, but exponential growth multiplies — and eventually an increasing exponential overtakes any polynomial, including a quadratic, no matter how large the quadratic's head start.",
              "zh": "中学数学一的一个关键思想在此重现：不同的函数族有不同的\"最终\"增长速度。一次增长每次加固定量，二次增长稳步加快，而指数增长是成倍增长——最终，一个递增的指数函数会超过任何多项式（包括二次函数），无论二次函数起初领先多少。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$x = 1$: linear $2x = 2$, quadratic $x^2 = 1$, exponential $2^x = 2$",
                  "zh": "$x = 1$：一次 $2x = 2$，二次 $x^2 = 1$，指数 $2^x = 2$"
                },
                {
                  "en": "$x = 5$: $2x = 10$, $x^2 = 25$, $2^x = 32$ (exponential pulls ahead)",
                  "zh": "$x = 5$：$2x = 10$，$x^2 = 25$，$2^x = 32$（指数开始领先）"
                },
                {
                  "en": "$x = 10$: $2x = 20$, $x^2 = 100$, $2^x = 1024$ (exponential dominates)",
                  "zh": "$x = 10$：$2x = 20$，$x^2 = 100$，$2^x = 1024$（指数占据主导）"
                }
              ]
            },
            {
              "type": "note",
              "en": "A common misconception: because $x^2$ beats $2^x$ for small $x$ (e.g., at $x = 3$, $9 > 8$), students conclude the quadratic always wins. But the exponential catches up and never falls behind again — for large inputs, exponential growth always dominates polynomial growth.",
              "zh": "一个常见误区：因为在小的 $x$ 处 $x^2$ 大于 $2^x$（例如 $x = 3$ 时 $9 > 8$），学生就断定二次函数总是胜出。但指数函数会追上并从此不再落后——对足够大的自变量，指数增长总是压倒多项式增长。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A parabola has vertex $(2, 3)$ and passes through $(4, 11)$. Which vertex-form model fits?",
                "zh": "一条抛物线的顶点为 $(2, 3)$，且经过 $(4, 11)$。哪个顶点式模型符合？"
              },
              "choices": [
                "$y = (x - 2)^2 + 3$",
                "$y = 2(x - 2)^2 + 3$",
                "$y = 2(x + 2)^2 + 3$",
                "$y = 8(x - 2)^2 + 3$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Start with $y = a(x - 2)^2 + 3$ and substitute $(4, 11)$: $11 = a(2)^2 + 3 = 4a + 3$, so $a = 2$. Using the vertex sign directly gives $(x - 2)$, not $(x + 2)$; forgetting to divide $8$ by $4$ leaves the wrong $a = 8$.",
                "zh": "从 $y = a(x - 2)^2 + 3$ 出发，代入 $(4, 11)$：$11 = a(2)^2 + 3 = 4a + 3$，故 $a = 2$。直接按顶点符号得 $(x - 2)$ 而非 $(x + 2)$；忘记把 $8$ 除以 $4$ 会留下错误的 $a = 8$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rocket follows $h(t) = -16t^2 + 64t + 3$ (feet). At what time $t$ (in seconds) does it reach its maximum height?",
                "zh": "一枚火箭遵循 $h(t) = -16t^2 + 64t + 3$（英尺）。它在何时（秒）达到最大高度？"
              },
              "answer": "2",
              "accept": [
                "2 s",
                "2.0",
                "t=2",
                "2 seconds"
              ],
              "explanation": {
                "en": "The peak is at the vertex: $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ s. The initial height $3$ is a distractor — it does not affect the timing of the peak.",
                "zh": "最高点在顶点：$t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ 秒。初始高度 $3$ 是干扰项——它不影响到达最高点的时刻。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "You know three data points but not the vertex. Which is the most direct way to find a quadratic model?",
                "zh": "你知道三个数据点，但不知道顶点。求二次模型最直接的方法是哪一种？"
              },
              "choices": [
                "Average the three $x$-values to get the vertex",
                "Use vertex form and guess $a$",
                "Substitute each point into $y = ax^2 + bx + c$ and solve the system",
                "Use $h(t) = -16t^2 + v_0 t + h_0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Three points give three equations in $a$, $b$, $c$; solving that system determines the model exactly. Vertex form needs the vertex (which you do not have), and the $-16$ formula only applies to feet-based projectile motion, not arbitrary data.",
                "zh": "三个点给出关于 $a$、$b$、$c$ 的三个方程；解这个方程组即可精确确定模型。顶点式需要顶点（而你没有），$-16$ 的公式只适用于以英尺计的抛体运动，不适用于任意数据。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rectangular garden against a wall uses $40$ ft of fence on three sides. What is the maximum area, in square feet?",
                "zh": "一个靠墙的矩形花园用 $40$ 英尺围栏围其三边。最大面积是多少平方英尺？"
              },
              "answer": "200",
              "accept": [
                "200 ft^2",
                "200 sq ft",
                "200.0"
              ],
              "explanation": {
                "en": "With sides $x, x, 40 - 2x$, area $A = x(40 - 2x) = -2x^2 + 40x$. The vertex is at $x = -\\frac{40}{2(-2)} = 10$, giving $A = 10(40 - 20) = 10 \\times 20 = 200$ ft$^2$.",
                "zh": "设三边为 $x, x, 40 - 2x$，面积 $A = x(40 - 2x) = -2x^2 + 40x$。顶点在 $x = -\\frac{40}{2(-2)} = 10$，得 $A = 10(40 - 20) = 10 \\times 20 = 200$ 平方英尺。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the average rate of change of $f(x) = x^2 - 4x$ over the interval $[1, 5]$?",
                "zh": "$f(x) = x^2 - 4x$ 在区间 $[1, 5]$ 上的平均变化率是多少？"
              },
              "choices": [
                "$2$",
                "$5$",
                "$-3$",
                "$8$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$f(5) = 25 - 20 = 5$ and $f(1) = 1 - 4 = -3$, so the rate is $\\frac{5 - (-3)}{5 - 1} = \\frac{8}{4} = 2$. Using just $f(5) = 5$ or $f(5) - f(1) = 8$ without dividing by the interval length $4$ produces the traps.",
                "zh": "$f(5) = 25 - 20 = 5$，$f(1) = 1 - 4 = -3$，所以变化率为 $\\frac{5 - (-3)}{5 - 1} = \\frac{8}{4} = 2$。只取 $f(5) = 5$，或取 $f(5) - f(1) = 8$ 却不除以区间长度 $4$，都会落入陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = 3x^2$, find the average rate of change over $[2, 4]$. Give an integer.",
                "zh": "对于 $f(x) = 3x^2$，求它在 $[2, 4]$ 上的平均变化率。请以整数作答。"
              },
              "answer": "18",
              "accept": [
                "18.0",
                "+18"
              ],
              "explanation": {
                "en": "$f(4) = 3(16) = 48$ and $f(2) = 3(4) = 12$, so the rate is $\\frac{48 - 12}{4 - 2} = \\frac{36}{2} = 18$.",
                "zh": "$f(4) = 3(16) = 48$，$f(2) = 3(4) = 12$，所以变化率为 $\\frac{48 - 12}{4 - 2} = \\frac{36}{2} = 18$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two savings plans start together: Plan A grows quadratically like $n^2$, Plan B grows exponentially like $2^n$. Over the long run, which is true?",
                "zh": "两种储蓄方案同时开始：方案 A 按 $n^2$ 二次增长，方案 B 按 $2^n$ 指数增长。从长远看，哪种说法正确？"
              },
              "choices": [
                "Plan A is always larger because squaring is powerful",
                "They stay equal forever",
                "Plan B is larger at every single value of $n$",
                "Plan A wins at first but Plan B eventually overtakes it and stays ahead"
              ],
              "answer": 3,
              "explanation": {
                "en": "For small $n$ the quadratic can lead (at $n = 3$, $9 > 8$), but the exponential catches up by $n = 5$ ($32 > 25$) and dominates thereafter. It is not larger at every $n$, and it does not stay tied — exponential growth eventually beats any polynomial.",
                "zh": "在较小的 $n$ 处二次函数可能领先（$n = 3$ 时 $9 > 8$），但指数函数到 $n = 5$ 就追上（$32 > 25$）并从此占据主导。它并非在每个 $n$ 都更大，也不会一直持平——指数增长最终会胜过任何多项式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A quadratic model $h(t) = -16t^2 + v_0 t + h_0$ is thrown from $5$ ft and reaches its maximum height of $105$ ft at $t = 2.5$ s. What is $v_0$?",
                "zh": "荣誉挑战：二次模型 $h(t) = -16t^2 + v_0 t + h_0$ 从 $5$ 英尺处抛出，在 $t = 2.5$ 秒时达到最大高度 $105$ 英尺。求 $v_0$。"
              },
              "choices": [
                "$40$ ft/s",
                "$64$ ft/s",
                "$80$ ft/s",
                "$96$ ft/s"
              ],
              "answer": 2,
              "explanation": {
                "en": "The vertex time gives $t = -\\frac{v_0}{2(-16)} = \\frac{v_0}{32} = 2.5$, so $v_0 = 32 \\times 2.5 = 80$ ft/s. Check with the peak height: $h(2.5) = -16(6.25) + 80(2.5) + 5 = -100 + 200 + 5 = 105$ ft. ✓ Using $t = \\frac{v_0}{16}$ (forgetting the factor of $2$ in $2a$) gives the wrong $40$.",
                "zh": "顶点时刻给出 $t = -\\frac{v_0}{2(-16)} = \\frac{v_0}{32} = 2.5$，所以 $v_0 = 32 \\times 2.5 = 80$ 英尺/秒。用最大高度验证：$h(2.5) = -16(6.25) + 80(2.5) + 5 = -100 + 200 + 5 = 105$ 英尺。✓ 若用 $t = \\frac{v_0}{16}$（漏掉 $2a$ 中的因子 $2$），会得到错误的 $40$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "solving-quadratic-equations",
      "title": "Unit 4: Solving Quadratic Equations",
      "titleZh": "第四单元：解一元二次方程",
      "lessons": [
        {
          "id": "solving-by-factoring-and-square-roots",
          "title": "Solving Quadratics by Factoring, Square Roots, and Completing the Square",
          "titleZh": "因式分解法、开平方法与配方法",
          "content": [
            {
              "type": "h2",
              "en": "Where a Quadratic Equals Zero",
              "zh": "二次式等于零的地方"
            },
            {
              "type": "p",
              "en": "Suppose the Salt Lake City fireworks launch a shell whose height in feet is $h = -16t^2 + 96t$, where $t$ is the time in seconds. When does the shell hit the ground? That happens when $h = 0$, so we must solve the quadratic equation $-16t^2 + 96t = 0$. A quadratic equation sets a quadratic expression equal to a number — usually zero — and solving it means finding every $x$ (or $t$) that makes the statement true.",
              "zh": "假设盐湖城的烟花把一枚炮弹发射到空中，其高度（英尺）为 $h = -16t^2 + 96t$，其中 $t$ 是时间（秒）。炮弹何时落地？那是在 $h = 0$ 时，所以我们要解二次方程 $-16t^2 + 96t = 0$。二次方程把一个二次式设为某个数——通常是零——解它就是找出所有使等式成立的 $x$（或 $t$）。"
            },
            {
              "type": "p",
              "en": "The values that solve a quadratic equation are called its roots or solutions. In this lesson we build three exact methods: factoring, square roots, and completing the square. A later lesson adds the quadratic formula, which always works.",
              "zh": "使二次方程成立的值称为它的根或解。本课我们建立三种精确方法：因式分解法、开平方法和配方法。后面的课还会加入求根公式，它对任何二次方程都适用。"
            },
            {
              "type": "h3",
              "en": "The Zero Product Property",
              "zh": "零积性质"
            },
            {
              "type": "p",
              "en": "The engine behind factoring is one simple idea: if a product of two numbers is zero, then at least one of the factors must be zero. In symbols, if $A \\cdot B = 0$, then $A = 0$ or $B = 0$. This works only against zero — knowing $A \\cdot B = 12$ tells you nothing about $A$ or $B$ individually.",
              "zh": "因式分解法背后的核心是一个简单的想法：如果两个数的乘积为零，那么至少有一个因式必须为零。用符号表示，如果 $A \\cdot B = 0$，则 $A = 0$ 或 $B = 0$。这只在等于零时成立——已知 $A \\cdot B = 12$ 并不能告诉你 $A$ 或 $B$ 各自的值。"
            },
            {
              "type": "p",
              "en": "So to solve by factoring, first move everything to one side so the equation reads (quadratic) $= 0$, factor the quadratic into a product, set each factor equal to zero, and solve the resulting small equations.",
              "zh": "所以用因式分解法解题时，先把所有项移到一边，使方程变成（二次式）$= 0$，把二次式分解为乘积，令每个因式等于零，再解得到的小方程。"
            },
            {
              "type": "note",
              "en": "Common mistake: do not divide both sides by a variable. From $x^2 = 5x$, dividing by $x$ gives only $x = 5$ and loses the root $x = 0$. Instead move everything over: $x^2 - 5x = 0$, factor $x(x - 5) = 0$, giving $x = 0$ or $x = 5$.",
              "zh": "常见错误：不要在两边同除以一个变量。由 $x^2 = 5x$ 除以 $x$ 只得到 $x = 5$，丢掉了根 $x = 0$。正确做法是把所有项移到一边：$x^2 - 5x = 0$，分解 $x(x - 5) = 0$，得到 $x = 0$ 或 $x = 5$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Solve by factoring",
                "zh": "例题 1：用因式分解法求解"
              },
              "problem": {
                "en": "Solve $x^2 + 2x = 15$.",
                "zh": "解方程 $x^2 + 2x = 15$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set one side to zero by subtracting 15:",
                  "zh": "两边减去 15，使一边为零："
                },
                {
                  "type": "math",
                  "tex": "x^2 + 2x - 15 = 0"
                },
                {
                  "type": "p",
                  "en": "Find two numbers that multiply to $-15$ and add to $2$: they are $5$ and $-3$. Factor and apply the zero product property:",
                  "zh": "找两个数，乘积为 $-15$、和为 $2$：它们是 $5$ 和 $-3$。分解并使用零积性质："
                },
                {
                  "type": "math",
                  "tex": "(x + 5)(x - 3) = 0 \\;\\Rightarrow\\; x = -5 \\text{ or } x = 3"
                },
                {
                  "type": "p",
                  "en": "Check: $(-5)^2 + 2(-5) = 25 - 10 = 15$. Both roots satisfy the original equation.",
                  "zh": "检验：$(-5)^2 + 2(-5) = 25 - 10 = 15$。两个根都满足原方程。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Solving by Square Roots",
              "zh": "用开平方法求解"
            },
            {
              "type": "p",
              "en": "When a quadratic has no middle $x$-term, isolating the square and taking a root is fastest. To solve $x^2 = k$ for $k \\ge 0$, take the square root of both sides — and remember BOTH signs, because $(+\\sqrt{k})^2$ and $(-\\sqrt{k})^2$ both equal $k$:",
              "zh": "当二次方程没有中间的一次项时，把平方项单独留下再开方是最快的。要解 $x^2 = k$（$k \\ge 0$），对两边开平方——并且要记住两个符号，因为 $(+\\sqrt{k})^2$ 和 $(-\\sqrt{k})^2$ 都等于 $k$："
            },
            {
              "type": "math",
              "tex": "x^2 = k \\;\\Rightarrow\\; x = \\pm\\sqrt{k}"
            },
            {
              "type": "p",
              "en": "The same works when a whole squared group is isolated. To solve $a(x - h)^2 = k$, first divide by $a$, then take square roots of both sides, then add $h$:",
              "zh": "当整个平方括号被单独留下时同样适用。要解 $a(x - h)^2 = k$，先除以 $a$，再对两边开平方，然后加上 $h$："
            },
            {
              "type": "math",
              "tex": "(x - h)^2 = \\frac{k}{a} \\;\\Rightarrow\\; x = h \\pm \\sqrt{\\tfrac{k}{a}}"
            },
            {
              "type": "note",
              "en": "Test tip: the $\\pm$ is not optional. Writing only $x = \\sqrt{k}$ throws away half your solutions and is the single most common square-root error. Every genuine $x^2 = k$ with $k > 0$ has two real roots.",
              "zh": "考试提示：$\\pm$ 不是可选的。只写 $x = \\sqrt{k}$ 会丢掉一半的解，是开平方时最常见的错误。每个 $k > 0$ 的 $x^2 = k$ 都有两个实根。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Square roots with a shifted square",
                "zh": "例题 2：对平移后的平方开方"
              },
              "problem": {
                "en": "Solve $3(x - 4)^2 = 48$.",
                "zh": "解方程 $3(x - 4)^2 = 48$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Divide both sides by 3 to isolate the square:",
                  "zh": "两边同除以 3，把平方项单独留下："
                },
                {
                  "type": "math",
                  "tex": "(x - 4)^2 = 16"
                },
                {
                  "type": "p",
                  "en": "Take the square root of both sides, keeping both signs:",
                  "zh": "对两边开平方，保留两个符号："
                },
                {
                  "type": "math",
                  "tex": "x - 4 = \\pm 4 \\;\\Rightarrow\\; x = 4 + 4 = 8 \\text{ or } x = 4 - 4 = 0"
                },
                {
                  "type": "p",
                  "en": "The solutions are $x = 8$ and $x = 0$.",
                  "zh": "解为 $x = 8$ 和 $x = 0$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Completing the Square",
              "zh": "配方法"
            },
            {
              "type": "p",
              "en": "What if the quadratic will not factor nicely and has a middle term? We can reshape it into the square-root form. A perfect-square trinomial is one that factors as a single square: $x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$. The key is that the constant is the square of half the coefficient of $x$.",
              "zh": "如果二次式不能很好地因式分解，又带有中间项怎么办？我们可以把它改写成开平方的形式。完全平方三项式是能分解成一个平方的三项式：$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$。关键在于常数项是一次项系数一半的平方。"
            },
            {
              "type": "p",
              "en": "To complete the square in $x^2 + bx + c = 0$: move $c$ to the right, add $\\left(\\frac{b}{2}\\right)^2$ to BOTH sides, factor the left as a perfect square, then finish with square roots.",
              "zh": "对 $x^2 + bx + c = 0$ 配方：把 $c$ 移到右边，在两边都加上 $\\left(\\frac{b}{2}\\right)^2$，把左边分解成完全平方，再用开平方结束。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Completing the square",
                "zh": "例题 3：配方法"
              },
              "problem": {
                "en": "Solve $x^2 - 6x - 7 = 0$ by completing the square.",
                "zh": "用配方法解 $x^2 - 6x - 7 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Move the constant to the right: $x^2 - 6x = 7$. Half of $-6$ is $-3$, and $(-3)^2 = 9$. Add 9 to both sides:",
                  "zh": "把常数移到右边：$x^2 - 6x = 7$。$-6$ 的一半是 $-3$，$(-3)^2 = 9$。两边都加 9："
                },
                {
                  "type": "math",
                  "tex": "x^2 - 6x + 9 = 7 + 9 \\;\\Rightarrow\\; (x - 3)^2 = 16"
                },
                {
                  "type": "p",
                  "en": "Take square roots of both sides with $\\pm$:",
                  "zh": "对两边开平方，带 $\\pm$："
                },
                {
                  "type": "math",
                  "tex": "x - 3 = \\pm 4 \\;\\Rightarrow\\; x = 7 \\text{ or } x = -1"
                },
                {
                  "type": "p",
                  "en": "This example also factors as $(x-7)(x+1)$, a good check — completing the square must agree with factoring when both are available.",
                  "zh": "这个例子也能分解为 $(x-7)(x+1)$，是很好的检验——当两种方法都能用时，配方法必须与因式分解结果一致。"
                }
              ]
            },
            {
              "type": "note",
              "en": "When the leading coefficient is not 1, divide the whole equation by it first. To complete the square on $2x^2 + 8x - 5 = 0$, divide by 2 to get $x^2 + 4x - 2.5 = 0$ before adding $\\left(\\frac{4}{2}\\right)^2 = 4$.",
              "zh": "当二次项系数不是 1 时，先把整个方程除以它。对 $2x^2 + 8x - 5 = 0$ 配方，先除以 2 得到 $x^2 + 4x - 2.5 = 0$，再加上 $\\left(\\frac{4}{2}\\right)^2 = 4$。"
            },
            {
              "type": "h3",
              "en": "Roots and the x-Intercepts of the Graph",
              "zh": "根与图像的 x 轴截距"
            },
            {
              "type": "p",
              "en": "Solving $ax^2 + bx + c = 0$ is exactly the same as finding where the parabola $y = ax^2 + bx + c$ crosses the $x$-axis, because on that axis $y = 0$. So a real root of the equation is an $x$-intercept (a zero) of the function. If Example 1 gives roots $x = -5$ and $x = 3$, then the parabola $y = x^2 + 2x - 15$ crosses the $x$-axis at $(-5, 0)$ and $(3, 0)$. A double root, such as $(x-3)^2 = 0$ giving $x = 3$ only, means the parabola just touches the axis at its vertex.",
              "zh": "解 $ax^2 + bx + c = 0$ 与找抛物线 $y = ax^2 + bx + c$ 与 $x$ 轴的交点完全相同，因为在该轴上 $y = 0$。所以方程的实根就是函数的 $x$ 轴截距（零点）。如果例题 1 得到根 $x = -5$ 和 $x = 3$，那么抛物线 $y = x^2 + 2x - 15$ 在 $(-5, 0)$ 和 $(3, 0)$ 处穿过 $x$ 轴。重根，例如 $(x-3)^2 = 0$ 只给出 $x = 3$，表示抛物线恰好在顶点处与该轴相切。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What are the solutions of $(x - 2)(x + 6) = 0$?",
                "zh": "$(x - 2)(x + 6) = 0$ 的解是什么？"
              },
              "choices": [
                "$x = -2$ or $x = 6$",
                "$x = 2$ or $x = -6$",
                "$x = 2$ or $x = 6$",
                "$x = -2$ or $x = -6$"
              ],
              "answer": 1,
              "explanation": {
                "en": "By the zero product property, each factor is set to zero: $x - 2 = 0$ gives $x = 2$, and $x + 6 = 0$ gives $x = -6$. Reading the numbers straight off the factors with the wrong sign is the common trap — the root has the opposite sign of the number inside the factor.",
                "zh": "由零积性质，令每个因式为零：$x - 2 = 0$ 得 $x = 2$，$x + 6 = 0$ 得 $x = -6$。直接照抄因式里的数而符号取反是常见陷阱——根的符号与因式内数字相反。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To complete the square for $x^2 + 10x$, what constant should be added?",
                "zh": "为 $x^2 + 10x$ 配方，应加上什么常数？"
              },
              "choices": [
                "$100$",
                "$10$",
                "$25$",
                "$5$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Take half of the coefficient of $x$, then square it: $\\left(\\frac{10}{2}\\right)^2 = 5^2 = 25$. Squaring the coefficient itself (getting 100) skips the halving step, and using just half of it (getting 5) forgets to square.",
                "zh": "取一次项系数的一半再平方：$\\left(\\frac{10}{2}\\right)^2 = 5^2 = 25$。直接平方系数（得 100）漏掉了取一半这一步，而只取一半（得 5）则忘了平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which best explains why $x^2 = 49$ has two solutions but $x^2 = 0$ has only one?",
                "zh": "下列哪项最能解释为什么 $x^2 = 49$ 有两个解，而 $x^2 = 0$ 只有一个解？"
              },
              "choices": [
                "Because 49 is odd and 0 is even",
                "Because square roots are always positive",
                "Because $\\pm\\sqrt{49} = \\pm 7$ are two different numbers, but $\\pm\\sqrt{0} = 0$ is a single value",
                "Because $x^2 = 0$ has no real solution"
              ],
              "answer": 2,
              "explanation": {
                "en": "Taking $\\pm\\sqrt{k}$ gives two distinct roots whenever $k > 0$, here $+7$ and $-7$. When $k = 0$, the two signs collapse to the same number $0$ (a double root). The claim that square roots are always positive ignores the required $\\pm$, and $x^2 = 0$ certainly has the real solution $x = 0$.",
                "zh": "当 $k > 0$ 时取 $\\pm\\sqrt{k}$ 给出两个不同的根，这里是 $+7$ 和 $-7$。当 $k = 0$ 时，两个符号合并为同一个数 $0$（重根）。认为开平方总是正的忽略了必须的 $\\pm$，而 $x^2 = 0$ 显然有实解 $x = 0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^2 = 81$. Enter both solutions separated by a comma, largest first (e.g. 9,-9).",
                "zh": "解 $x^2 = 81$。输入两个解，用逗号分隔，较大的在前（例如 9,-9）。"
              },
              "answer": "9,-9",
              "accept": [
                "9, -9",
                "9,-9",
                "-9,9",
                "±9",
                "+-9"
              ],
              "explanation": {
                "en": "Take the square root of both sides with both signs: $x = \\pm\\sqrt{81} = \\pm 9$. Both $9^2$ and $(-9)^2$ equal 81.",
                "zh": "对两边开平方并保留两个符号：$x = \\pm\\sqrt{81} = \\pm 9$。$9^2$ 与 $(-9)^2$ 都等于 81。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^2 - 7x + 12 = 0$ by factoring. Enter both roots separated by a comma, smallest first.",
                "zh": "用因式分解法解 $x^2 - 7x + 12 = 0$。输入两个根，用逗号分隔，较小的在前。"
              },
              "answer": "3,4",
              "accept": [
                "3, 4",
                "3,4",
                "4,3"
              ],
              "explanation": {
                "en": "Find two numbers multiplying to $12$ and adding to $-7$: they are $-3$ and $-4$. So $(x - 3)(x - 4) = 0$, giving $x = 3$ and $x = 4$.",
                "zh": "找乘积为 $12$、和为 $-7$ 的两个数：$-3$ 和 $-4$。所以 $(x - 3)(x - 4) = 0$，得 $x = 3$ 和 $x = 4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball is thrown so its height is $h = -16t^2 + 32t$ feet after $t$ seconds. At what times is the ball on the ground ($h = 0$)?",
                "zh": "一个球被抛出，$t$ 秒后高度为 $h = -16t^2 + 32t$ 英尺。球在什么时刻位于地面（$h = 0$）？"
              },
              "choices": [
                "$t = 0$ s and $t = 2$ s",
                "$t = 2$ s only",
                "$t = 0$ s and $t = 16$ s",
                "$t = 32$ s only"
              ],
              "answer": 0,
              "explanation": {
                "en": "Factor out the common $-16t$: $-16t(t - 2) = 0$, so $t = 0$ (launch) or $t = 2$ (landing). Dividing by $t$ first would lose the $t = 0$ launch time — always factor instead of dividing by a variable.",
                "zh": "提取公因式 $-16t$：$-16t(t - 2) = 0$，所以 $t = 0$（发射）或 $t = 2$（落地）。先除以 $t$ 会丢掉 $t = 0$ 这个发射时刻——要用因式分解而不是除以变量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^2 + 4x - 6 = 0$ by completing the square. Enter the two exact roots in the form -2+sqrt(10),-2-sqrt(10).",
                "zh": "用配方法解 $x^2 + 4x - 6 = 0$。以 -2+sqrt(10),-2-sqrt(10) 的形式输入两个精确根。"
              },
              "answer": "-2+sqrt(10),-2-sqrt(10)",
              "accept": [
                "-2-sqrt(10),-2+sqrt(10)",
                "-2+√10,-2-√10",
                "-2+sqrt10,-2-sqrt10"
              ],
              "explanation": {
                "en": "Move the constant: $x^2 + 4x = 6$. Add $\\left(\\frac{4}{2}\\right)^2 = 4$ to both sides: $(x + 2)^2 = 10$. Then $x + 2 = \\pm\\sqrt{10}$, so $x = -2 \\pm \\sqrt{10}$.",
                "zh": "移动常数：$x^2 + 4x = 6$。两边加 $\\left(\\frac{4}{2}\\right)^2 = 4$：$(x + 2)^2 = 10$。于是 $x + 2 = \\pm\\sqrt{10}$，所以 $x = -2 \\pm \\sqrt{10}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: The parabola $y = x^2 - 2kx + 9$ touches the $x$-axis at exactly one point (a double root). What is a positive value of $k$?",
                "zh": "荣誉挑战：抛物线 $y = x^2 - 2kx + 9$ 恰好在一点与 $x$ 轴相切（重根）。$k$ 的一个正值是多少？"
              },
              "choices": [
                "$k = 9$",
                "$k = 6$",
                "$k = \\tfrac{9}{2}$",
                "$k = 3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "A double root means the trinomial is a perfect square $(x - k)^2 = x^2 - 2kx + k^2$. Matching the constant needs $k^2 = 9$, so the positive value is $k = 3$. Choosing 9 confuses $k$ with $k^2$ itself.",
                "zh": "重根意味着三项式是完全平方 $(x - k)^2 = x^2 - 2kx + k^2$。匹配常数项需要 $k^2 = 9$，所以正值是 $k = 3$。选 9 是把 $k$ 与 $k^2$ 本身混淆了。"
              }
            }
          ]
        },
        {
          "id": "quadratic-formula-and-discriminant",
          "title": "The Quadratic Formula and the Discriminant",
          "titleZh": "求根公式与判别式",
          "content": [
            {
              "type": "h2",
              "en": "One Formula That Always Works",
              "zh": "一个永远适用的公式"
            },
            {
              "type": "p",
              "en": "Factoring is fast when a quadratic cooperates, but many real ones do not factor with tidy integers — the arch of a bridge over the Jordan River, the path of a soccer ball, the break-even point of a lemonade stand. For these we want a method that never fails. Completing the square on the general equation $ax^2 + bx + c = 0$ produces exactly that: the quadratic formula.",
              "zh": "当二次方程配合时因式分解很快，但许多真实问题无法用整齐的整数分解——横跨约旦河的桥拱、足球的轨迹、柠檬水摊的盈亏平衡点。对这些我们想要一个永不失败的方法。对一般方程 $ax^2 + bx + c = 0$ 配方，正好得到它：求根公式。"
            },
            {
              "type": "h3",
              "en": "Deriving the Formula (Honors Walkthrough)",
              "zh": "推导公式（荣誉版讲解）"
            },
            {
              "type": "p",
              "en": "Start from $ax^2 + bx + c = 0$ with $a \\ne 0$. Divide through by $a$ and move the constant right:",
              "zh": "从 $ax^2 + bx + c = 0$（$a \\ne 0$）开始。整体除以 $a$，并把常数移到右边："
            },
            {
              "type": "math",
              "tex": "x^2 + \\frac{b}{a}x = -\\frac{c}{a}"
            },
            {
              "type": "p",
              "en": "Complete the square by adding the square of half the middle coefficient, $\\left(\\frac{b}{2a}\\right)^2$, to both sides:",
              "zh": "通过在两边加上中间系数一半的平方 $\\left(\\frac{b}{2a}\\right)^2$ 来配方："
            },
            {
              "type": "math",
              "tex": "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}"
            },
            {
              "type": "p",
              "en": "Take the square root of both sides (with $\\pm$), then subtract $\\frac{b}{2a}$. The two fractions share denominator $2a$, giving the famous result:",
              "zh": "对两边开平方（带 $\\pm$），再减去 $\\frac{b}{2a}$。两个分数同分母 $2a$，得到著名的结果："
            },
            {
              "type": "math",
              "tex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
            },
            {
              "type": "note",
              "en": "Test tip: the entire numerator is $-b \\pm \\sqrt{\\;}$, and the whole thing is divided by $2a$ — the $2a$ is under $-b$ too, not only under the square root. Write the fraction bar all the way across before plugging in numbers.",
              "zh": "考试提示：整个分子是 $-b \\pm \\sqrt{\\;}$，并且整体除以 $2a$——$2a$ 也在 $-b$ 下面，而不只是在根号下面。代入数字前先把分数线画到底。"
            },
            {
              "type": "h3",
              "en": "Using the Formula Carefully",
              "zh": "小心地使用公式"
            },
            {
              "type": "p",
              "en": "To use it, first write the equation as $ax^2 + bx + c = 0$ and read off $a$, $b$, $c$ WITH their signs. Substitute into the formula in parentheses, especially when $b$ is negative, since $-b$ and $b^2$ each depend on the sign.",
              "zh": "使用时，先把方程写成 $ax^2 + bx + c = 0$，连同符号读出 $a$、$b$、$c$。代入公式时加括号，尤其当 $b$ 为负时，因为 $-b$ 和 $b^2$ 都取决于符号。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Applying the quadratic formula",
                "zh": "例题 1：应用求根公式"
              },
              "problem": {
                "en": "Solve $2x^2 - 4x - 3 = 0$.",
                "zh": "解 $2x^2 - 4x - 3 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $a = 2$, $b = -4$, $c = -3$. Substitute carefully:",
                  "zh": "这里 $a = 2$，$b = -4$，$c = -3$。仔细代入："
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(2)(-3)}}{2(2)} = \\frac{4 \\pm \\sqrt{16 + 24}}{4}"
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{4 \\pm \\sqrt{40}}{4} = \\frac{4 \\pm 2\\sqrt{10}}{4} = \\frac{2 \\pm \\sqrt{10}}{2}"
                },
                {
                  "type": "p",
                  "en": "Since $\\sqrt{40} = 2\\sqrt{10}$, we factored a 2 from the numerator and reduced. The exact roots are $x = \\frac{2 \\pm \\sqrt{10}}{2}$, roughly $2.58$ and $-0.58$.",
                  "zh": "因为 $\\sqrt{40} = 2\\sqrt{10}$，我们从分子提出 2 并约分。精确根是 $x = \\frac{2 \\pm \\sqrt{10}}{2}$，约为 $2.58$ 和 $-0.58$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Discriminant",
              "zh": "判别式"
            },
            {
              "type": "p",
              "en": "The quantity under the square root, $b^2 - 4ac$, is called the discriminant, written $\\Delta$ (Delta). Its sign alone tells you how many real solutions exist before you finish computing:",
              "zh": "根号下的量 $b^2 - 4ac$ 称为判别式，记作 $\\Delta$。仅凭它的符号，你就能在算完之前知道有多少个实解："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $b^2 - 4ac > 0$: two distinct real solutions (parabola crosses the $x$-axis twice).",
                  "zh": "若 $b^2 - 4ac > 0$：两个不同的实解（抛物线两次穿过 $x$ 轴）。"
                },
                {
                  "en": "If $b^2 - 4ac = 0$: exactly one real solution, a double root (parabola touches the $x$-axis at its vertex).",
                  "zh": "若 $b^2 - 4ac = 0$：恰好一个实解，即重根（抛物线在顶点处与 $x$ 轴相切）。"
                },
                {
                  "en": "If $b^2 - 4ac < 0$: no real solutions (parabola never touches the $x$-axis) — the solutions are complex, coming in the next unit.",
                  "zh": "若 $b^2 - 4ac < 0$：没有实解（抛物线不与 $x$ 轴相交）——解是复数，将在下一单元讨论。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: computing the discriminant as $b^2 - 4ac$ but forgetting that $-4ac$ becomes positive when $a$ and $c$ have opposite signs. In Example 1, $-4(2)(-3) = +24$, not $-24$. A sign slip here flips your whole conclusion about the number of roots.",
              "zh": "常见错误：计算判别式 $b^2 - 4ac$ 时忘记当 $a$ 与 $c$ 异号时 $-4ac$ 会变正。在例题 1 中，$-4(2)(-3) = +24$，不是 $-24$。这里一个符号错误会颠倒你对根的个数的整个结论。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading the discriminant",
                "zh": "例题 2：解读判别式"
              },
              "problem": {
                "en": "Without solving, how many real solutions does $3x^2 + 2x + 5 = 0$ have?",
                "zh": "不解方程，$3x^2 + 2x + 5 = 0$ 有几个实解？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute $\\Delta = b^2 - 4ac$ with $a = 3$, $b = 2$, $c = 5$:",
                  "zh": "用 $a = 3$，$b = 2$，$c = 5$ 计算 $\\Delta = b^2 - 4ac$："
                },
                {
                  "type": "math",
                  "tex": "\\Delta = 2^2 - 4(3)(5) = 4 - 60 = -56"
                },
                {
                  "type": "p",
                  "en": "Because $\\Delta < 0$, there are no real solutions; the parabola stays entirely above the $x$-axis.",
                  "zh": "因为 $\\Delta < 0$，没有实解；抛物线完全位于 $x$ 轴上方。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Choosing the Most Efficient Method",
              "zh": "选择最高效的方法"
            },
            {
              "type": "p",
              "en": "All three earlier methods and the formula give the same roots; the skill is choosing the fastest for the equation in front of you:",
              "zh": "前面三种方法和公式给出相同的根；关键技巧是为眼前的方程选择最快的方法："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "No middle term ($ax^2 + c = 0$): use square roots.",
                  "zh": "没有中间项（$ax^2 + c = 0$）：用开平方法。"
                },
                {
                  "en": "Factors easily with small integers: use factoring.",
                  "zh": "容易用小整数分解：用因式分解法。"
                },
                {
                  "en": "Messy or non-factorable, or you need to know the number of roots: use the quadratic formula (and the discriminant).",
                  "zh": "杂乱或无法分解，或需要知道根的个数：用求根公式（和判别式）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Applications: Rejecting the Impossible Root",
              "zh": "应用：舍去不合理的根"
            },
            {
              "type": "p",
              "en": "In real problems, both algebraic roots are valid numbers, but only those that fit the situation are accepted. A time cannot be negative, a length cannot be negative, so we often discard one root after solving.",
              "zh": "在实际问题中，两个代数根都是有效的数，但只接受符合情境的那些。时间不能为负，长度不能为负，所以解出后我们常常舍去一个根。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Projectile with a rejected root",
                "zh": "例题 3：抛体运动中舍去的根"
              },
              "problem": {
                "en": "A rocket is launched from a 20 ft platform with height $h = -16t^2 + 48t + 20$ feet. When does it hit the ground?",
                "zh": "一枚火箭从 20 英尺高的平台发射，高度为 $h = -16t^2 + 48t + 20$ 英尺。它何时落地？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The ground is $h = 0$: solve $-16t^2 + 48t + 20 = 0$. Divide by $-4$ to simplify: $4t^2 - 12t - 5 = 0$. Apply the formula with $a = 4$, $b = -12$, $c = -5$:",
                  "zh": "地面为 $h = 0$：解 $-16t^2 + 48t + 20 = 0$。除以 $-4$ 化简：$4t^2 - 12t - 5 = 0$。用 $a = 4$，$b = -12$，$c = -5$ 代入公式："
                },
                {
                  "type": "math",
                  "tex": "t = \\frac{12 \\pm \\sqrt{144 + 80}}{8} = \\frac{12 \\pm \\sqrt{224}}{8} \\approx \\frac{12 \\pm 14.97}{8}"
                },
                {
                  "type": "p",
                  "en": "The two roots are about $t \\approx 3.37$ and $t \\approx -0.37$. A negative time is impossible, so reject it; the rocket lands at about $t \\approx 3.4$ seconds.",
                  "zh": "两个根约为 $t \\approx 3.37$ 和 $t \\approx -0.37$。负的时间不可能，故舍去；火箭约在 $t \\approx 3.4$ 秒落地。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For the equation $5x^2 - 3x + 1 = 0$, what are the values of $a$, $b$, and $c$?",
                "zh": "对方程 $5x^2 - 3x + 1 = 0$，$a$、$b$、$c$ 的值是多少？"
              },
              "choices": [
                "$a = 5,\\; b = 3,\\; c = 1$",
                "$a = 5,\\; b = -3,\\; c = 1$",
                "$a = 5,\\; b = -3,\\; c = -1$",
                "$a = -5,\\; b = -3,\\; c = 1$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Read the coefficients with their signs from $5x^2 - 3x + 1$: $a = 5$, $b = -3$, $c = 1$. Dropping the negative sign on $b$ is the usual slip and would flip the sign of $-b$ in the formula.",
                "zh": "连同符号从 $5x^2 - 3x + 1$ 读出系数：$a = 5$，$b = -3$，$c = 1$。丢掉 $b$ 的负号是常见失误，会使公式中 $-b$ 的符号出错。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The discriminant of a quadratic equals $0$. What does this tell you about its graph?",
                "zh": "一个二次方程的判别式等于 $0$。这说明它的图像如何？"
              },
              "choices": [
                "The parabola crosses the $x$-axis at two points",
                "The parabola never touches the $x$-axis",
                "The parabola touches the $x$-axis at exactly one point (its vertex)",
                "The parabola is a straight line"
              ],
              "answer": 2,
              "explanation": {
                "en": "A zero discriminant means one repeated real root, so the parabola meets the $x$-axis at a single point — its vertex sits on the axis. Two crossing points require $\\Delta > 0$, and no contact requires $\\Delta < 0$.",
                "zh": "判别式为零意味着一个重实根，所以抛物线在唯一一点与 $x$ 轴相遇——顶点落在轴上。两个交点需要 $\\Delta > 0$，不相交需要 $\\Delta < 0$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the discriminant $b^2 - 4ac$ of $x^2 - 5x + 6 = 0$. Give an integer.",
                "zh": "求 $x^2 - 5x + 6 = 0$ 的判别式 $b^2 - 4ac$。请给出整数。"
              },
              "answer": "1",
              "accept": [
                "+1"
              ],
              "explanation": {
                "en": "With $a = 1$, $b = -5$, $c = 6$: $\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1$. Since $\\Delta > 0$ (and is a perfect square), there are two rational roots.",
                "zh": "取 $a = 1$，$b = -5$，$c = 6$：$\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1$。由于 $\\Delta > 0$（且是完全平方数），有两个有理根。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which method is most efficient for solving $x^2 - 20 = 0$?",
                "zh": "解 $x^2 - 20 = 0$ 最高效的方法是哪个？"
              },
              "choices": [
                "Square roots: $x = \\pm\\sqrt{20}$",
                "Completing the square",
                "The quadratic formula with $b = 20$",
                "Graphing by hand and estimating"
              ],
              "answer": 0,
              "explanation": {
                "en": "There is no middle $x$-term, so isolating the square gives $x^2 = 20$ and $x = \\pm\\sqrt{20} = \\pm 2\\sqrt{5}$ in one step. The formula would work but is slower, and it would use $b = 0$, not $b = 20$.",
                "zh": "没有中间的一次项，所以把平方项单独留下得 $x^2 = 20$，一步得 $x = \\pm\\sqrt{20} = \\pm 2\\sqrt{5}$。公式也能用但更慢，而且应取 $b = 0$，而非 $b = 20$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^2 + 6x + 4 = 0$ with the quadratic formula. Enter the exact roots as -3+sqrt(5),-3-sqrt(5).",
                "zh": "用求根公式解 $x^2 + 6x + 4 = 0$。以 -3+sqrt(5),-3-sqrt(5) 的形式输入精确根。"
              },
              "answer": "-3+sqrt(5),-3-sqrt(5)",
              "accept": [
                "-3-sqrt(5),-3+sqrt(5)",
                "-3+√5,-3-√5",
                "-3+sqrt5,-3-sqrt5"
              ],
              "explanation": {
                "en": "With $a=1$, $b=6$, $c=4$: $x = \\frac{-6 \\pm \\sqrt{36 - 16}}{2} = \\frac{-6 \\pm \\sqrt{20}}{2} = \\frac{-6 \\pm 2\\sqrt{5}}{2} = -3 \\pm \\sqrt{5}$.",
                "zh": "取 $a=1$，$b=6$，$c=4$：$x = \\frac{-6 \\pm \\sqrt{36 - 16}}{2} = \\frac{-6 \\pm \\sqrt{20}}{2} = \\frac{-6 \\pm 2\\sqrt{5}}{2} = -3 \\pm \\sqrt{5}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rectangular garden has area 40 m² and its length is 3 m more than its width $w$, so $w(w+3) = 40$. What is the width?",
                "zh": "一个矩形花园面积为 40 平方米，长比宽 $w$ 多 3 米，即 $w(w+3) = 40$。宽是多少？"
              },
              "choices": [
                "$w = -8$ m",
                "$w = 5$ m",
                "$w = 8$ m",
                "$w = 5$ m or $w = -8$ m"
              ],
              "answer": 1,
              "explanation": {
                "en": "Expand to $w^2 + 3w - 40 = 0$, factor $(w + 8)(w - 5) = 0$, giving $w = -8$ or $w = 5$. A width cannot be negative, so reject $-8$; the width is 5 m. Reporting both roots ignores that a length must be positive.",
                "zh": "展开为 $w^2 + 3w - 40 = 0$，分解 $(w + 8)(w - 5) = 0$，得 $w = -8$ 或 $w = 5$。宽不能为负，故舍去 $-8$；宽为 5 米。同时报告两个根忽略了长度必须为正。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For what single value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution, with $k > 0$? Give an integer.",
                "zh": "当 $k > 0$ 时，$k$ 取何整数值使 $x^2 + kx + 9 = 0$ 恰好有一个实解？请给出整数。"
              },
              "answer": "6",
              "accept": [
                "+6"
              ],
              "explanation": {
                "en": "One real solution means $\\Delta = 0$: $k^2 - 4(1)(9) = 0$, so $k^2 = 36$ and $k = \\pm 6$. The positive value is $k = 6$.",
                "zh": "一个实解意味着 $\\Delta = 0$：$k^2 - 4(1)(9) = 0$，所以 $k^2 = 36$，$k = \\pm 6$。正值为 $k = 6$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: For which values of $m$ does $x^2 + mx + 4 = 0$ have NO real solutions?",
                "zh": "荣誉挑战：$m$ 取何值时 $x^2 + mx + 4 = 0$ 没有实解？"
              },
              "choices": [
                "$m > 4$",
                "$m = \\pm 4$",
                "$m < -4$ or $m > 4$",
                "$-4 < m < 4$"
              ],
              "answer": 3,
              "explanation": {
                "en": "No real solutions requires $\\Delta < 0$: $m^2 - 16 < 0$, i.e. $m^2 < 16$, which holds exactly when $-4 < m < 4$. The reversed inequality $m^2 > 16$ instead gives the range where two real roots exist.",
                "zh": "没有实解需要 $\\Delta < 0$：$m^2 - 16 < 0$，即 $m^2 < 16$，当且仅当 $-4 < m < 4$。相反的不等式 $m^2 > 16$ 给出的是有两个实根的范围。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "complex-numbers",
      "title": "Unit 5: Complex Numbers",
      "titleZh": "第五单元：复数",
      "lessons": [
        {
          "id": "imaginary-and-complex-numbers",
          "title": "Imaginary and Complex Numbers",
          "titleZh": "虚数与复数",
          "content": [
            {
              "type": "h2",
              "en": "Inventing a Number for $\\sqrt{-1}$",
              "zh": "为 $\\sqrt{-1}$ 发明一个数"
            },
            {
              "type": "p",
              "en": "In the last unit, a negative discriminant meant a quadratic had \"no real solutions.\" But mathematicians did not stop there. When engineers analyze the alternating current in a Utah power line or the vibration of a bridge cable, they routinely take square roots of negative numbers. To make that possible we extend the number system by inventing a single new number.",
              "zh": "上一单元中，判别式为负意味着二次方程\"没有实解\"。但数学家没有就此止步。当工程师分析犹他州输电线中的交流电或桥梁缆索的振动时，他们经常要对负数开平方。为此我们通过发明一个新的数来扩展数系。"
            },
            {
              "type": "p",
              "en": "We define the imaginary unit $i$ to be a number whose square is $-1$. From this one definition everything else follows:",
              "zh": "我们定义虚数单位 $i$ 为平方等于 $-1$ 的数。从这一个定义出发，其余一切都随之而来："
            },
            {
              "type": "math",
              "tex": "i = \\sqrt{-1}, \\qquad i^2 = -1"
            },
            {
              "type": "p",
              "en": "Now any square root of a negative number can be written using $i$. For example $\\sqrt{-25} = \\sqrt{25}\\cdot\\sqrt{-1} = 5i$, and $\\sqrt{-7} = i\\sqrt{7}$.",
              "zh": "现在任何负数的平方根都可以用 $i$ 写出。例如 $\\sqrt{-25} = \\sqrt{25}\\cdot\\sqrt{-1} = 5i$，而 $\\sqrt{-7} = i\\sqrt{7}$。"
            },
            {
              "type": "note",
              "en": "Common mistake: the rule $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$ fails for negatives. Do NOT write $\\sqrt{-4}\\cdot\\sqrt{-9} = \\sqrt{36} = 6$. Convert to $i$ first: $\\sqrt{-4}\\cdot\\sqrt{-9} = (2i)(3i) = 6i^2 = -6$.",
              "zh": "常见错误：法则 $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$ 对负数不成立。不要写 $\\sqrt{-4}\\cdot\\sqrt{-9} = \\sqrt{36} = 6$。先化成 $i$：$\\sqrt{-4}\\cdot\\sqrt{-9} = (2i)(3i) = 6i^2 = -6$。"
            },
            {
              "type": "h3",
              "en": "Powers of $i$: A Repeating Cycle",
              "zh": "$i$ 的幂：循环规律"
            },
            {
              "type": "p",
              "en": "Because $i^2 = -1$, higher powers cycle through just four values. Multiply repeatedly:",
              "zh": "因为 $i^2 = -1$，更高次幂只在四个值之间循环。反复相乘："
            },
            {
              "type": "math",
              "tex": "i^1 = i,\\quad i^2 = -1,\\quad i^3 = i^2\\cdot i = -i,\\quad i^4 = (i^2)^2 = 1"
            },
            {
              "type": "p",
              "en": "After $i^4 = 1$ the pattern $i, -1, -i, 1$ repeats forever. To find any power, divide the exponent by 4 and keep the remainder: $i^n$ equals $i^{\\,r}$ where $r$ is the remainder of $n \\div 4$ (with $i^0 = 1$).",
              "zh": "在 $i^4 = 1$ 之后，规律 $i, -1, -i, 1$ 永远重复。要求任意幂，把指数除以 4 并保留余数：$i^n$ 等于 $i^{\\,r}$，其中 $r$ 是 $n \\div 4$ 的余数（且 $i^0 = 1$）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A high power of $i$",
                "zh": "例题 1：$i$ 的高次幂"
              },
              "problem": {
                "en": "Simplify $i^{27}$.",
                "zh": "化简 $i^{27}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Divide the exponent by 4: $27 = 4(6) + 3$, so the remainder is 3.",
                  "zh": "把指数除以 4：$27 = 4(6) + 3$，所以余数是 3。"
                },
                {
                  "type": "math",
                  "tex": "i^{27} = i^{3} = -i"
                },
                {
                  "type": "p",
                  "en": "The answer is $-i$, because the cycle lands on the third value.",
                  "zh": "答案是 $-i$，因为循环落在第三个值上。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Complex Number Form $a + bi$",
              "zh": "复数形式 $a + bi$"
            },
            {
              "type": "p",
              "en": "A complex number combines a real part and an imaginary part into the standard form $a + bi$, where $a$ and $b$ are real numbers. Here $a$ is the real part and $b$ is the imaginary part (the coefficient of $i$). Every real number is also complex (with $b = 0$), and every pure imaginary like $5i$ is complex (with $a = 0$), so the complex numbers contain the reals inside them.",
              "zh": "复数把实部和虚部合并为标准形式 $a + bi$，其中 $a$ 和 $b$ 是实数。这里 $a$ 是实部，$b$ 是虚部（$i$ 的系数）。每个实数也是复数（$b = 0$），每个纯虚数如 $5i$ 也是复数（$a = 0$），所以复数把实数包含在内。"
            },
            {
              "type": "h3",
              "en": "Adding, Subtracting, and Multiplying",
              "zh": "加法、减法与乘法"
            },
            {
              "type": "p",
              "en": "Add and subtract complex numbers by combining like parts, just as with binomials: real with real, imaginary with imaginary. To multiply, use the distributive property (FOIL), then replace $i^2$ with $-1$ and combine again.",
              "zh": "复数的加减就像多项式一样合并同类项：实部与实部相加，虚部与虚部相加。相乘时用分配律（FOIL），然后把 $i^2$ 换成 $-1$，再合并。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Multiplying complex numbers",
                "zh": "例题 2：复数相乘"
              },
              "problem": {
                "en": "Multiply $(3 + 2i)(4 - 5i)$.",
                "zh": "计算 $(3 + 2i)(4 - 5i)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute every term (FOIL):",
                  "zh": "每一项都用分配律展开（FOIL）："
                },
                {
                  "type": "math",
                  "tex": "12 - 15i + 8i - 10i^2"
                },
                {
                  "type": "p",
                  "en": "Replace $i^2$ with $-1$, so $-10i^2 = +10$. Then combine real and imaginary parts:",
                  "zh": "把 $i^2$ 换成 $-1$，所以 $-10i^2 = +10$。再合并实部和虚部："
                },
                {
                  "type": "math",
                  "tex": "(12 + 10) + (-15 + 8)i = 22 - 7i"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: the term $-10i^2$ is not $-10$. Since $i^2 = -1$, we get $-10(-1) = +10$. Forgetting this sign flip is the most frequent complex-multiplication error.",
              "zh": "考试提示：$-10i^2$ 不是 $-10$。因为 $i^2 = -1$，所以 $-10(-1) = +10$。忘记这个变号是复数乘法中最常见的错误。"
            },
            {
              "type": "h3",
              "en": "The Complex Conjugate and Division",
              "zh": "共轭复数与除法"
            },
            {
              "type": "p",
              "en": "The complex conjugate of $a + bi$ is $a - bi$ — same real part, opposite imaginary part. Conjugates are powerful because their product is always a real number:",
              "zh": "$a + bi$ 的共轭复数是 $a - bi$——实部相同，虚部相反。共轭复数很有用，因为它们的乘积总是实数："
            },
            {
              "type": "math",
              "tex": "(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 + b^2"
            },
            {
              "type": "p",
              "en": "This is what makes division possible. A complex number in a denominator is like a radical there — we rationalize by multiplying the top and bottom by the conjugate of the denominator, turning the bottom into a real number.",
              "zh": "这正是使除法成为可能的关键。分母中的复数就像那里的根号——我们通过给分子分母同乘分母的共轭来\"有理化\"，把分母变成实数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Dividing by the conjugate",
                "zh": "例题 3：用共轭复数做除法"
              },
              "problem": {
                "en": "Write $\\dfrac{5 + i}{2 - 3i}$ in the form $a + bi$.",
                "zh": "把 $\\dfrac{5 + i}{2 - 3i}$ 写成 $a + bi$ 的形式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply numerator and denominator by the conjugate of the denominator, $2 + 3i$:",
                  "zh": "分子分母同乘分母的共轭 $2 + 3i$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{(5 + i)(2 + 3i)}{(2 - 3i)(2 + 3i)} = \\frac{10 + 15i + 2i + 3i^2}{4 + 9}"
                },
                {
                  "type": "p",
                  "en": "The denominator is $2^2 + 3^2 = 13$. In the numerator $3i^2 = -3$, giving $10 - 3 + 17i = 7 + 17i$:",
                  "zh": "分母是 $2^2 + 3^2 = 13$。分子中 $3i^2 = -3$，得 $10 - 3 + 17i = 7 + 17i$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{7 + 17i}{13} = \\frac{7}{13} + \\frac{17}{13}i"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\sqrt{-49}$.",
                "zh": "化简 $\\sqrt{-49}$。"
              },
              "choices": [
                "$7$",
                "$-7$",
                "$7i$",
                "$49i$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Write $\\sqrt{-49} = \\sqrt{49}\\cdot\\sqrt{-1} = 7i$. Answering $7$ ignores the negative under the root, and $49i$ forgets to take the square root of 49.",
                "zh": "写成 $\\sqrt{-49} = \\sqrt{49}\\cdot\\sqrt{-1} = 7i$。答 $7$ 忽略了根号下的负号，而 $49i$ 忘了对 49 开平方。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is $i^{2}$?",
                "zh": "$i^{2}$ 等于多少？"
              },
              "choices": [
                "$-1$",
                "$1$",
                "$i$",
                "$-i$"
              ],
              "answer": 0,
              "explanation": {
                "en": "By the very definition of the imaginary unit, $i^2 = -1$. This is the fact that drives every other simplification with $i$. Answering $1$ confuses $i^2$ with $i^4$.",
                "zh": "根据虚数单位的定义，$i^2 = -1$。这个事实驱动着所有关于 $i$ 的化简。答 $1$ 是把 $i^2$ 与 $i^4$ 混淆了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Add: $(6 - 4i) + (-2 + 9i)$. Write your answer in the form a+bi (e.g. 4+5i).",
                "zh": "计算：$(6 - 4i) + (-2 + 9i)$。以 a+bi 形式作答（例如 4+5i）。"
              },
              "answer": "4+5i",
              "accept": [
                "4 + 5i",
                "4+5i",
                "5i+4"
              ],
              "explanation": {
                "en": "Combine real parts $6 + (-2) = 4$ and imaginary parts $-4i + 9i = 5i$, giving $4 + 5i$.",
                "zh": "合并实部 $6 + (-2) = 4$，合并虚部 $-4i + 9i = 5i$，得 $4 + 5i$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $i^{40}$.",
                "zh": "化简 $i^{40}$。"
              },
              "choices": [
                "$i$",
                "$-1$",
                "$-i$",
                "$1$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Divide the exponent by 4: $40 = 4(10)$ with remainder 0, so $i^{40} = (i^4)^{10} = 1^{10} = 1$. Because the remainder is 0, the cycle lands on $i^4 = 1$, not on $i$.",
                "zh": "把指数除以 4：$40 = 4(10)$ 余 0，所以 $i^{40} = (i^4)^{10} = 1^{10} = 1$。因为余数是 0，循环落在 $i^4 = 1$ 上，而非 $i$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Multiply: $(2 + 3i)(1 - 4i)$. Write your answer in the form a+bi.",
                "zh": "计算：$(2 + 3i)(1 - 4i)$。以 a+bi 形式作答。"
              },
              "answer": "14-5i",
              "accept": [
                "14 - 5i",
                "14-5i",
                "-5i+14"
              ],
              "explanation": {
                "en": "FOIL: $2 - 8i + 3i - 12i^2$. Since $i^2 = -1$, $-12i^2 = +12$, so real part $2 + 12 = 14$ and imaginary part $-8i + 3i = -5i$: the product is $14 - 5i$.",
                "zh": "FOIL：$2 - 8i + 3i - 12i^2$。因为 $i^2 = -1$，$-12i^2 = +12$，所以实部 $2 + 12 = 14$，虚部 $-8i + 3i = -5i$：乘积为 $14 - 5i$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the complex conjugate of $-3 + 7i$, and what is the product of the number with its conjugate?",
                "zh": "$-3 + 7i$ 的共轭复数是什么，该数与其共轭的乘积是多少？"
              },
              "choices": [
                "Conjugate $3 - 7i$; product $-58$",
                "Conjugate $-3 - 7i$; product $58$",
                "Conjugate $3 + 7i$; product $9 + 49i$",
                "Conjugate $-3 - 7i$; product $-40$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The conjugate keeps the real part and flips the imaginary sign: $-3 - 7i$. Their product is $(-3)^2 + 7^2 = 9 + 49 = 58$, always real and positive. Changing the real part’s sign as well is the common error.",
                "zh": "共轭保留实部、翻转虚部符号：$-3 - 7i$。它们的乘积是 $(-3)^2 + 7^2 = 9 + 49 = 58$，总是实数且为正。把实部符号也改掉是常见错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write $\\dfrac{10}{1 + 3i}$ in the form a+bi.",
                "zh": "把 $\\dfrac{10}{1 + 3i}$ 写成 a+bi 形式。"
              },
              "answer": "1-3i",
              "accept": [
                "1 - 3i",
                "1-3i",
                "-3i+1"
              ],
              "explanation": {
                "en": "Multiply top and bottom by the conjugate $1 - 3i$: the denominator becomes $1^2 + 3^2 = 10$, and the numerator becomes $10(1 - 3i)$. So $\\frac{10(1 - 3i)}{10} = 1 - 3i$.",
                "zh": "分子分母同乘共轭 $1 - 3i$：分母变为 $1^2 + 3^2 = 10$，分子变为 $10(1 - 3i)$。所以 $\\frac{10(1 - 3i)}{10} = 1 - 3i$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: Simplify $\\dfrac{1}{i}$.",
                "zh": "荣誉挑战：化简 $\\dfrac{1}{i}$。"
              },
              "choices": [
                "$i$",
                "$1$",
                "$-i$",
                "$-1$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiply numerator and denominator by the conjugate of $i$, which is $-i$: $\\frac{1}{i}\\cdot\\frac{-i}{-i} = \\frac{-i}{-i^2} = \\frac{-i}{1} = -i$. Equivalently, $\\frac{1}{i} = i^{-1} = i^{3} = -i$.",
                "zh": "分子分母同乘 $i$ 的共轭 $-i$：$\\frac{1}{i}\\cdot\\frac{-i}{-i} = \\frac{-i}{-i^2} = \\frac{-i}{1} = -i$。等价地，$\\frac{1}{i} = i^{-1} = i^{3} = -i$。"
              }
            }
          ]
        },
        {
          "id": "complex-solutions-of-quadratics",
          "title": "Complex Solutions of Quadratic Equations",
          "titleZh": "一元二次方程的复数解",
          "content": [
            {
              "type": "h2",
              "en": "When the Parabola Misses the Axis",
              "zh": "当抛物线错过坐标轴时"
            },
            {
              "type": "p",
              "en": "In the quadratics unit we found that a negative discriminant, $b^2 - 4ac < 0$, meant the parabola never crossed the $x$-axis and there were \"no real solutions.\" Now that we have the number $i$, we can say something stronger: the equation still has solutions, but they are complex. Every quadratic equation has exactly two solutions once we allow complex numbers.",
              "zh": "在二次方程单元中，我们发现判别式为负 $b^2 - 4ac < 0$ 意味着抛物线不穿过 $x$ 轴，\"没有实解\"。既然有了数 $i$，我们可以说得更强：方程仍然有解，只是它们是复数。一旦允许复数，每个二次方程恰好有两个解。"
            },
            {
              "type": "h3",
              "en": "A Complex Conjugate Pair",
              "zh": "一对共轭复数"
            },
            {
              "type": "p",
              "en": "Look again at the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. When the discriminant is negative, the square root becomes an imaginary number, and the $\\pm$ produces two answers that differ only in the sign of their imaginary part. That is exactly a complex conjugate pair: $p + qi$ and $p - qi$.",
              "zh": "再看求根公式 $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$。当判别式为负时，根号变成虚数，而 $\\pm$ 产生两个仅在虚部符号上不同的答案。这正是一对共轭复数：$p + qi$ 和 $p - qi$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Complex roots from the formula",
                "zh": "例题 1：由公式得到复数根"
              },
              "problem": {
                "en": "Solve $x^2 - 4x + 13 = 0$.",
                "zh": "解 $x^2 - 4x + 13 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "With $a = 1$, $b = -4$, $c = 13$, the discriminant is $\\Delta = (-4)^2 - 4(1)(13) = 16 - 52 = -36$. It is negative, so expect complex roots. Apply the formula:",
                  "zh": "取 $a = 1$，$b = -4$，$c = 13$，判别式 $\\Delta = (-4)^2 - 4(1)(13) = 16 - 52 = -36$。它为负，所以预期复数根。代入公式："
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{4 \\pm \\sqrt{-36}}{2} = \\frac{4 \\pm 6i}{2}"
                },
                {
                  "type": "p",
                  "en": "Since $\\sqrt{-36} = 6i$, divide each part by 2:",
                  "zh": "因为 $\\sqrt{-36} = 6i$，把每一部分都除以 2："
                },
                {
                  "type": "math",
                  "tex": "x = 2 \\pm 3i"
                },
                {
                  "type": "p",
                  "en": "The two solutions $2 + 3i$ and $2 - 3i$ are a conjugate pair.",
                  "zh": "两个解 $2 + 3i$ 和 $2 - 3i$ 是一对共轭复数。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: when dividing $\\frac{4 \\pm 6i}{2}$, both terms are divided by 2, giving $2 \\pm 3i$ — not $2 \\pm 6i$. The 2 in the denominator applies to the real and imaginary parts alike.",
              "zh": "常见错误：计算 $\\frac{4 \\pm 6i}{2}$ 时，两项都要除以 2，得 $2 \\pm 3i$——而不是 $2 \\pm 6i$。分母的 2 同时作用于实部和虚部。"
            },
            {
              "type": "note",
              "en": "Test tip: reach for $\\sqrt{-36} = 6i$ directly rather than getting \"error\" from a calculator. Factor out $i$ first: $\\sqrt{-k} = i\\sqrt{k}$ for $k > 0$, then simplify the remaining real radical.",
              "zh": "考试提示：直接得出 $\\sqrt{-36} = 6i$，而不是从计算器得到\"错误\"。先提出 $i$：当 $k > 0$ 时 $\\sqrt{-k} = i\\sqrt{k}$，再化简剩下的实数根号。"
            },
            {
              "type": "h3",
              "en": "Verifying a Complex Solution",
              "zh": "验证复数解"
            },
            {
              "type": "p",
              "en": "A complex root can be checked by substitution, exactly like a real one — just remember $i^2 = -1$ while simplifying. This is the surest way to catch a sign error.",
              "zh": "复数根可以通过代入检验，和实根完全一样——只要在化简时记住 $i^2 = -1$。这是发现符号错误最可靠的方法。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Checking $x = 2 + 3i$",
                "zh": "例题 2：检验 $x = 2 + 3i$"
              },
              "problem": {
                "en": "Verify that $x = 2 + 3i$ satisfies $x^2 - 4x + 13 = 0$.",
                "zh": "验证 $x = 2 + 3i$ 满足 $x^2 - 4x + 13 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First square it: $(2 + 3i)^2 = 4 + 12i + 9i^2 = 4 + 12i - 9 = -5 + 12i$.",
                  "zh": "先平方：$(2 + 3i)^2 = 4 + 12i + 9i^2 = 4 + 12i - 9 = -5 + 12i$。"
                },
                {
                  "type": "p",
                  "en": "Then compute $-4x = -4(2 + 3i) = -8 - 12i$. Add all three terms:",
                  "zh": "再计算 $-4x = -4(2 + 3i) = -8 - 12i$。把三项相加："
                },
                {
                  "type": "math",
                  "tex": "(-5 + 12i) + (-8 - 12i) + 13 = (-5 - 8 + 13) + (12 - 12)i = 0"
                },
                {
                  "type": "p",
                  "en": "The result is $0$, so $x = 2 + 3i$ is indeed a solution. Note how the imaginary parts cancel — a sign the conjugate is the other root.",
                  "zh": "结果是 $0$，所以 $x = 2 + 3i$ 确实是解。注意虚部如何相消——这标志着它的共轭是另一个根。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Real Coefficients Force Conjugate Pairs",
              "zh": "实系数迫使根成共轭对"
            },
            {
              "type": "p",
              "en": "Notice that the two roots always came as a matched pair $p \\pm qi$. This is a general honors fact: if a quadratic (indeed any polynomial) has real coefficients, then its complex roots must occur in conjugate pairs. You can never have $2 + 3i$ as a root of a real-coefficient quadratic without $2 - 3i$ also being one.",
              "zh": "注意两个根总是成对出现 $p \\pm qi$。这是一个一般的荣誉结论：如果一个二次方程（实际上任何多项式）有实系数，那么它的复数根必成共轭对出现。在实系数二次方程中，$2 + 3i$ 是根就必然 $2 - 3i$ 也是根。"
            },
            {
              "type": "h3",
              "en": "A First Look at Sum and Product of Roots",
              "zh": "初探根与系数的关系"
            },
            {
              "type": "p",
              "en": "For $ax^2 + bx + c = 0$ with roots $r_1$ and $r_2$, a beautiful relationship holds: the sum of the roots is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$. This works for complex roots too. For a conjugate pair $p \\pm qi$, the sum is $2p$ (real, the imaginary parts cancel) and the product is $p^2 + q^2$ (real, always positive) — which is why real coefficients stay real.",
              "zh": "对 $ax^2 + bx + c = 0$，设根为 $r_1$ 和 $r_2$，有一个优美的关系：根之和为 $-\\frac{b}{a}$，根之积为 $\\frac{c}{a}$。这对复数根也成立。对一对共轭 $p \\pm qi$，和为 $2p$（实数，虚部相消），积为 $p^2 + q^2$（实数，恒正）——这正是系数保持为实数的原因。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Checking sum and product",
                "zh": "例题 3：验证根的和与积"
              },
              "problem": {
                "en": "Confirm the sum and product of the roots $2 \\pm 3i$ of $x^2 - 4x + 13 = 0$.",
                "zh": "验证 $x^2 - 4x + 13 = 0$ 的根 $2 \\pm 3i$ 的和与积。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Sum: $(2 + 3i) + (2 - 3i) = 4$. This matches $-\\frac{b}{a} = -\\frac{-4}{1} = 4$.",
                  "zh": "和：$(2 + 3i) + (2 - 3i) = 4$。这与 $-\\frac{b}{a} = -\\frac{-4}{1} = 4$ 一致。"
                },
                {
                  "type": "p",
                  "en": "Product: $(2 + 3i)(2 - 3i) = 2^2 + 3^2 = 4 + 9 = 13$. This matches $\\frac{c}{a} = \\frac{13}{1} = 13$.",
                  "zh": "积：$(2 + 3i)(2 - 3i) = 2^2 + 3^2 = 4 + 9 = 13$。这与 $\\frac{c}{a} = \\frac{13}{1} = 13$ 一致。"
                },
                {
                  "type": "p",
                  "en": "Both come out real and match the coefficients, confirming the roots.",
                  "zh": "两者都是实数且与系数吻合，从而确认了这两个根。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The discriminant of a quadratic with real coefficients is $-16$. What kind of solutions does it have?",
                "zh": "一个实系数二次方程的判别式是 $-16$。它有什么样的解？"
              },
              "choices": [
                "Two distinct real solutions",
                "One repeated real solution",
                "Two complex solutions that are conjugates of each other",
                "No solutions of any kind"
              ],
              "answer": 2,
              "explanation": {
                "en": "A negative discriminant gives a pair of complex conjugate solutions $p \\pm qi$. There are still exactly two solutions — they are simply not real. Saying \"no solutions\" is the old real-number-only view.",
                "zh": "判别式为负给出一对共轭复数解 $p \\pm qi$。仍恰好有两个解——只是它们不是实数。说\"没有解\"是旧的只看实数的观点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $x^2 + 25 = 0$.",
                "zh": "解 $x^2 + 25 = 0$。"
              },
              "choices": [
                "$x = \\pm 5$",
                "$x = \\pm 5i$",
                "$x = 5i$ only",
                "$x = \\pm 25i$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Isolate: $x^2 = -25$, so $x = \\pm\\sqrt{-25} = \\pm 5i$. Answering $\\pm 5$ ignores the negative sign, which requires $i$; keeping only $5i$ drops the second conjugate root $-5i$.",
                "zh": "整理：$x^2 = -25$，所以 $x = \\pm\\sqrt{-25} = \\pm 5i$。答 $\\pm 5$ 忽略了负号，而负号需要 $i$；只保留 $5i$ 则丢掉了第二个共轭根 $-5i$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A quadratic with real coefficients has $4 - 7i$ as one root. What is its other root? Write in the form a+bi (e.g. 4+7i).",
                "zh": "一个实系数二次方程有一个根 $4 - 7i$。它的另一个根是什么？以 a+bi 形式作答（例如 4+7i）。"
              },
              "answer": "4+7i",
              "accept": [
                "4 + 7i",
                "4+7i",
                "7i+4"
              ],
              "explanation": {
                "en": "Complex roots of a real-coefficient polynomial occur in conjugate pairs, so the partner of $4 - 7i$ is its conjugate $4 + 7i$ (same real part, opposite imaginary sign).",
                "zh": "实系数多项式的复数根成共轭对出现，所以 $4 - 7i$ 的伙伴是它的共轭 $4 + 7i$（实部相同，虚部符号相反）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solving $x^2 - 2x + 5 = 0$ with the quadratic formula gives which solutions?",
                "zh": "用求根公式解 $x^2 - 2x + 5 = 0$ 得到哪些解？"
              },
              "choices": [
                "$x = 1 \\pm 2i$",
                "$x = -1 \\pm 2i$",
                "$x = 2 \\pm 4i$",
                "$x = 1 \\pm 4i$"
              ],
              "answer": 0,
              "explanation": {
                "en": "With $a=1$, $b=-2$, $c=5$: $\\Delta = 4 - 20 = -16$, so $x = \\frac{2 \\pm \\sqrt{-16}}{2} = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i$. Forgetting to divide the imaginary part by 2 gives the tempting but wrong $1 \\pm 4i$.",
                "zh": "取 $a=1$，$b=-2$，$c=5$：$\\Delta = 4 - 20 = -16$，所以 $x = \\frac{2 \\pm \\sqrt{-16}}{2} = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i$。忘记把虚部也除以 2 会得到诱人但错误的 $1 \\pm 4i$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the roots $3 \\pm 2i$, find their sum. Give an integer.",
                "zh": "对于根 $3 \\pm 2i$，求它们的和。请给出整数。"
              },
              "answer": "6",
              "accept": [
                "+6"
              ],
              "explanation": {
                "en": "Add the conjugates: $(3 + 2i) + (3 - 2i) = 6$. The imaginary parts $+2i$ and $-2i$ cancel, leaving a real sum $2p = 6$.",
                "zh": "把共轭相加：$(3 + 2i) + (3 - 2i) = 6$。虚部 $+2i$ 与 $-2i$ 相消，剩下实数和 $2p = 6$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For the roots $3 \\pm 2i$, find their product. Give an integer.",
                "zh": "对于根 $3 \\pm 2i$，求它们的积。请给出整数。"
              },
              "answer": "13",
              "accept": [
                "+13"
              ],
              "explanation": {
                "en": "Multiply the conjugates: $(3 + 2i)(3 - 2i) = 3^2 + 2^2 = 9 + 4 = 13$. The product of a conjugate pair is $p^2 + q^2$, always a positive real number.",
                "zh": "把共轭相乘：$(3 + 2i)(3 - 2i) = 3^2 + 2^2 = 9 + 4 = 13$。共轭对之积为 $p^2 + q^2$，总是正实数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A quadratic with real coefficients and leading coefficient 1 has roots $3 \\pm 2i$. Using sum and product of roots, what is the equation?",
                "zh": "一个首项系数为 1 的实系数二次方程的根是 $3 \\pm 2i$。用根与系数的关系，方程是什么？"
              },
              "choices": [
                "$x^2 + 6x + 13 = 0$",
                "$x^2 - 6x - 13 = 0$",
                "$x^2 - 6x + 13 = 0$",
                "$x^2 - 5x + 6 = 0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The sum of roots is $6$ and the product is $13$, so $x^2 - (\\text{sum})x + (\\text{product}) = x^2 - 6x + 13 = 0$. The middle term takes the negative of the sum, so a $+6x$ has the wrong sign.",
                "zh": "根之和为 $6$，根之积为 $13$，所以 $x^2 - (\\text{和})x + (\\text{积}) = x^2 - 6x + 13 = 0$。中间项取和的相反数，所以 $+6x$ 符号错了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: For which values of $k$ does $x^2 + kx + 10 = 0$ have two non-real complex solutions?",
                "zh": "荣誉挑战：$k$ 取何值时 $x^2 + kx + 10 = 0$ 有两个非实数的复数解？"
              },
              "choices": [
                "$k > 2\\sqrt{10}$",
                "$k = \\pm 2\\sqrt{10}$",
                "$k < -2\\sqrt{10}$ or $k > 2\\sqrt{10}$",
                "$-2\\sqrt{10} < k < 2\\sqrt{10}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Non-real solutions require $\\Delta < 0$: $k^2 - 40 < 0$, i.e. $k^2 < 40$, which holds when $-2\\sqrt{10} < k < 2\\sqrt{10}$ (since $\\sqrt{40} = 2\\sqrt{10}$). The reversed inequality $k^2 > 40$ instead gives two real roots.",
                "zh": "非实数解需要 $\\Delta < 0$：$k^2 - 40 < 0$，即 $k^2 < 40$，当 $-2\\sqrt{10} < k < 2\\sqrt{10}$ 时成立（因为 $\\sqrt{40} = 2\\sqrt{10}$）。相反的不等式 $k^2 > 40$ 给出的是两个实根。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "more-functions-features",
      "title": "Unit 6: More Functions and Features",
      "titleZh": "第六单元：更多函数与特征",
      "lessons": [
        {
          "id": "piecewise-and-absolute-value-functions",
          "title": "Piecewise and Absolute Value Functions",
          "titleZh": "分段函数与绝对值函数",
          "content": [
            {
              "type": "h2",
              "en": "When One Rule Is Not Enough",
              "zh": "当一条规则不够用时"
            },
            {
              "type": "p",
              "en": "Many real situations in Utah follow different rules over different ranges of input. A parking garage in downtown Salt Lake City might charge a flat $3 for the first hour and $2 for each additional hour; a shipping company charges one rate for packages under 1 lb and another above it; income tax uses brackets that change the rate as income rises. A single formula like $y = mx + b$ cannot capture this. A piecewise-defined function solves the problem by gluing several rules together, each one active only on its own interval of the domain.",
              "zh": "犹他州的许多真实情境在不同的输入范围内遵循不同的规则。盐湖城市中心的停车场可能第一小时收固定的 $3 元、之后每小时收 $2 元；快递公司对不足 1 磅和超过 1 磅的包裹收取不同费率；个人所得税采用随收入上升而变化的税率档次。像 $y = mx + b$ 这样单一的公式无法描述这些情况。分段函数通过把多条规则拼接在一起来解决问题，每条规则只在自己那一段定义域上生效。"
            },
            {
              "type": "h3",
              "en": "Reading and Evaluating a Piecewise Function",
              "zh": "读取与求值分段函数"
            },
            {
              "type": "p",
              "en": "A piecewise function lists each rule next to the condition on $x$ that turns it on. To evaluate the function at a value, first decide which interval that value falls in, then use only that rule. Consider:",
              "zh": "分段函数把每条规则与使其生效的 $x$ 条件并列写出。给某个值求值时，先判断这个值落在哪一段，再只用那一段的规则。请看："
            },
            {
              "type": "math",
              "tex": "f(x) = \\begin{cases} 2x + 1, & x < 1 \\\\ x^2, & 1 \\le x \\le 3 \\\\ 5, & x > 3 \\end{cases}"
            },
            {
              "type": "p",
              "en": "To find $f(0)$, note $0 < 1$, so use the top rule: $f(0) = 2(0) + 1 = 1$. To find $f(2)$, note $1 \\le 2 \\le 3$, so use the middle rule: $f(2) = 2^2 = 4$. To find $f(3)$, note $3$ satisfies $1 \\le x \\le 3$ (not $x > 3$), so $f(3) = 3^2 = 9$. The condition tells you which door to walk through.",
              "zh": "求 $f(0)$：因为 $0 < 1$，用第一条规则：$f(0) = 2(0) + 1 = 1$。求 $f(2)$：因为 $1 \\le 2 \\le 3$，用中间那条规则：$f(2) = 2^2 = 4$。求 $f(3)$：$3$ 满足 $1 \\le x \\le 3$（而非 $x > 3$），所以 $f(3) = 3^2 = 9$。条件告诉你该走哪扇门。"
            },
            {
              "type": "note",
              "en": "Common mistake: using the wrong branch at a boundary. At $x = 3$ above, the value $3$ belongs to the middle rule because that rule uses $\\le 3$ (closed) while the last rule uses $> 3$ (strict). Always check which side of the boundary carries the \"or equal to.\"",
              "zh": "常见错误：在分界点上用错分支。在上面 $x = 3$ 处，$3$ 属于中间规则，因为该规则用的是 $\\le 3$（闭），而最后一条用的是 $> 3$（严格大于）。一定要看清\"等于\"归在分界点的哪一侧。"
            },
            {
              "type": "h3",
              "en": "Graphing Branch by Branch: Open and Closed Endpoints",
              "zh": "逐段作图：空心与实心端点"
            },
            {
              "type": "p",
              "en": "To graph a piecewise function, draw each rule only across its own interval, as if you cut the full graph and kept just that piece. At an endpoint, a closed (filled) dot means the point is included ($\\le$ or $\\ge$); an open (hollow) dot means it is excluded ($<$ or $>$). For the $f$ above, the table of key points is:",
              "zh": "作分段函数图时，每条规则只画在自己那一段上，就像把整条图剪开、只保留那一片。在端点处，实心点表示该点包含在内（$\\le$ 或 $\\ge$）；空心点表示不包含（$<$ 或 $>$）。对上面的 $f$，关键点列表如下："
            },
            {
              "type": "p",
              "en": "Branch 1 ($y = 2x+1$, for $x<1$): points $(-1, -1)$ and $(0, 1)$ lie on it, ending in an OPEN dot at $(1, 3)$ since $x=1$ is excluded. Branch 2 ($y = x^2$, for $1 \\le x \\le 3$): a CLOSED dot at $(1, 1)$, through $(2, 4)$, to a CLOSED dot at $(3, 9)$. Branch 3 ($y = 5$, for $x>3$): a horizontal ray starting with an OPEN dot at $(3, 5)$ and continuing right, e.g. through $(5, 5)$.",
              "zh": "第一段（$y = 2x+1$，当 $x<1$）：经过点 $(-1, -1)$ 与 $(0, 1)$，在 $(1, 3)$ 处以空心点结束，因为 $x=1$ 不含。第二段（$y = x^2$，当 $1 \\le x \\le 3$）：在 $(1, 1)$ 处为实心点，经过 $(2, 4)$，到 $(3, 9)$ 处为实心点。第三段（$y = 5$，当 $x>3$）：一条水平射线，从 $(3, 5)$ 处的空心点开始向右延伸，例如经过 $(5, 5)$。"
            },
            {
              "type": "h3",
              "en": "The Absolute Value Function",
              "zh": "绝对值函数"
            },
            {
              "type": "p",
              "en": "The absolute value function is itself a piecewise function in disguise. Because $|x|$ means distance from zero, it equals $x$ when $x \\ge 0$ and $-x$ when $x < 0$:",
              "zh": "绝对值函数本身就是一个\"伪装\"的分段函数。因为 $|x|$ 表示到零的距离，所以当 $x \\ge 0$ 时它等于 $x$，当 $x < 0$ 时它等于 $-x$："
            },
            {
              "type": "math",
              "tex": "|x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}"
            },
            {
              "type": "p",
              "en": "Its graph is the famous V shape. The parent function $y = |x|$ has its corner, called the vertex, at the origin $(0,0)$. A short table shows the symmetry: $(-2, 2)$, $(-1, 1)$, $(0, 0)$, $(1, 1)$, $(2, 2)$. The two arms each have slope $1$ and $-1$, meeting at the vertex.",
              "zh": "它的图象就是著名的 V 形。母函数 $y = |x|$ 的拐角（称为顶点）在原点 $(0,0)$。一张简短的表显示出它的对称性：$(-2, 2)$、$(-1, 1)$、$(0, 0)$、$(1, 1)$、$(2, 2)$。两条臂的斜率分别为 $1$ 和 $-1$，在顶点相交。"
            },
            {
              "type": "h3",
              "en": "Transforming the V: $y = a|x-h|+k$",
              "zh": "变换 V 形：$y = a|x-h|+k$"
            },
            {
              "type": "p",
              "en": "Every absolute value graph can be written as $y = a|x-h|+k$, and each letter controls one feature of the V:",
              "zh": "每个绝对值图象都可写成 $y = a|x-h|+k$，其中每个字母控制 V 形的一个特征："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "The vertex sits at $(h, k)$. Note the sign flip: $|x-3|$ moves the corner to $x = 3$ (right), while $|x+3| = |x-(-3)|$ moves it to $x = -3$ (left).",
                  "zh": "顶点位于 $(h, k)$。注意符号取反：$|x-3|$ 把拐角移到 $x = 3$（右移），而 $|x+3| = |x-(-3)|$ 把它移到 $x = -3$（左移）。"
                },
                {
                  "en": "If $a > 0$ the V opens upward; if $a < 0$ it opens downward (reflected).",
                  "zh": "若 $a > 0$，V 形开口向上；若 $a < 0$，则开口向下（翻转）。"
                },
                {
                  "en": "The size of $a$ is the slope of the right arm. If $|a| > 1$ the V is narrower (steeper); if $0 < |a| < 1$ it is wider (a vertical shrink).",
                  "zh": "$a$ 的大小是右臂的斜率。若 $|a| > 1$，V 形更窄（更陡）；若 $0 < |a| < 1$，则更宽（竖直方向被压缩）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: the transformations here match the vertex form of a quadratic, $y = a(x-h)^2 + k$, which you met with parabolas. Same $(h,k)$ vertex, same \"$h$ moves opposite its sign,\" same $a$ for opening direction and stretch. Learning one reinforces the other.",
              "zh": "考试提示：这里的变换与你在抛物线中学过的二次函数顶点式 $y = a(x-h)^2 + k$ 完全一致。相同的 $(h,k)$ 顶点，相同的\"$h$ 与其符号相反地移动\"，相同的 $a$ 控制开口方向与伸缩。学会一个就巩固了另一个。"
            },
            {
              "type": "h3",
              "en": "Step Functions",
              "zh": "阶梯函数"
            },
            {
              "type": "p",
              "en": "A step function is a piecewise function whose pieces are all horizontal, so its graph looks like a staircase of flat segments with jumps between them. The greatest-integer (floor) function $\\lfloor x \\rfloor$ rounds down to the nearest integer: $\\lfloor 2.7 \\rfloor = 2$, $\\lfloor 2 \\rfloor = 2$, and $\\lfloor -1.3 \\rfloor = -2$. Real step functions appear in postage (price by whole ounces) and parking (price by whole hours).",
              "zh": "阶梯函数是各段都为水平线的分段函数，因此其图象像一段段平台加上中间的跳跃，形似楼梯。取整（向下取整）函数 $\\lfloor x \\rfloor$ 向下取到最近的整数：$\\lfloor 2.7 \\rfloor = 2$，$\\lfloor 2 \\rfloor = 2$，$\\lfloor -1.3 \\rfloor = -2$。真实的阶梯函数出现在邮资（按整盎司计价）和停车（按整小时计价）中。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating a piecewise model",
                "zh": "例题 1：分段模型求值"
              },
              "problem": {
                "en": "A parking garage charges $C(t) = 3$ dollars for $0 < t \\le 1$ hour, and $C(t) = 1 + 2t$ dollars for $t > 1$. Find the cost for parking $0.5$ hours and for parking $4$ hours.",
                "zh": "某停车场收费为：当 $0 < t \\le 1$ 小时时 $C(t) = 3$；当 $t > 1$ 时 $C(t) = 1 + 2t$。求停车 $0.5$ 小时和停车 $4$ 小时的费用。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For $t = 0.5$: since $0 < 0.5 \\le 1$, use the first rule, so $C(0.5) = 3$ dollars.",
                  "zh": "当 $t = 0.5$：因为 $0 < 0.5 \\le 1$，用第一条规则，所以 $C(0.5) = 3$ 元。"
                },
                {
                  "type": "p",
                  "en": "For $t = 4$: since $4 > 1$, use the second rule.",
                  "zh": "当 $t = 4$：因为 $4 > 1$，用第二条规则。"
                },
                {
                  "type": "math",
                  "tex": "C(4) = 1 + 2(4) = 1 + 8 = 9"
                },
                {
                  "type": "p",
                  "en": "Parking four hours costs $9. Notice the two rules agree at the boundary $t=1$ ($3$ and $1+2(1)=3$), so the graph connects smoothly there.",
                  "zh": "停车四小时费用为 $9 元。注意两条规则在分界点 $t=1$ 处一致（$3$ 与 $1+2(1)=3$），因此图象在此处平滑相连。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Finding the vertex and graphing an absolute value function",
                "zh": "例题 2：求绝对值函数的顶点并作图"
              },
              "problem": {
                "en": "Describe the graph of $y = -2|x-1| + 5$: its vertex, opening direction, and whether it is narrower or wider than $y=|x|$. Give two points besides the vertex.",
                "zh": "描述 $y = -2|x-1| + 5$ 的图象：顶点、开口方向，以及它比 $y=|x|$ 更窄还是更宽。除顶点外再给出两个点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Match to $y = a|x-h|+k$: here $a = -2$, $h = 1$, $k = 5$. The vertex is $(h, k) = (1, 5)$.",
                  "zh": "对照 $y = a|x-h|+k$：这里 $a = -2$、$h = 1$、$k = 5$。顶点为 $(h, k) = (1, 5)$。"
                },
                {
                  "type": "p",
                  "en": "Since $a = -2 < 0$, the V opens downward. Since $|a| = 2 > 1$, it is narrower (steeper) than the parent. To get points, step $1$ right of the vertex: at $x = 2$, $y = -2|2-1|+5 = -2(1)+5 = 3$, giving $(2, 3)$. By symmetry, $(0, 3)$ is also on the graph.",
                  "zh": "因为 $a = -2 < 0$，V 形开口向下。因为 $|a| = 2 > 1$，它比母函数更窄（更陡）。取点时从顶点向右移 $1$：当 $x = 2$，$y = -2|2-1|+5 = -2(1)+5 = 3$，得 $(2, 3)$。由对称性，$(0, 3)$ 也在图象上。"
                },
                {
                  "type": "p",
                  "en": "Summary table around the vertex: $(0, 3)$, $(1, 5)$ vertex, $(2, 3)$ — the arms fall away from the peak on both sides.",
                  "zh": "顶点附近汇总表：$(0, 3)$、$(1, 5)$ 顶点、$(2, 3)$——两臂从峰顶向两侧下降。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Writing absolute value as a piecewise function",
                "zh": "例题 3：把绝对值写成分段函数"
              },
              "problem": {
                "en": "Rewrite $y = |x - 4|$ without absolute value bars, as a piecewise function.",
                "zh": "把 $y = |x - 4|$ 去掉绝对值符号，写成分段函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The expression inside, $x - 4$, is nonnegative when $x \\ge 4$ and negative when $x < 4$. Where the inside is nonnegative, the bars do nothing; where it is negative, the bars flip the sign.",
                  "zh": "内部表达式 $x - 4$ 在 $x \\ge 4$ 时非负，在 $x < 4$ 时为负。内部非负处，绝对值符号不改变它；内部为负处，绝对值符号将其变号。"
                },
                {
                  "type": "math",
                  "tex": "|x-4| = \\begin{cases} x - 4, & x \\ge 4 \\\\ -(x-4) = 4 - x, & x < 4 \\end{cases}"
                },
                {
                  "type": "p",
                  "en": "Check at $x = 1$: $|1-4| = 3$, and the lower rule gives $4 - 1 = 3$. It matches. The vertex, where the inside is $0$, is at $(4, 0)$.",
                  "zh": "在 $x = 1$ 处验证：$|1-4| = 3$，下面那条规则给出 $4 - 1 = 3$。一致。顶点（内部为 $0$ 处）在 $(4, 0)$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For $f(x) = \\begin{cases} 3x, & x < 2 \\\\ x + 4, & x \\ge 2 \\end{cases}$, what is $f(2)$?",
                "zh": "对 $f(x) = \\begin{cases} 3x, & x < 2 \\\\ x + 4, & x \\ge 2 \\end{cases}$，$f(2)$ 是多少？"
              },
              "choices": [
                "$6$",
                "$5$",
                "$8$",
                "$2$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Since $2$ satisfies $x \\ge 2$ (the condition includes \"or equal to\"), use the second rule: $f(2) = 2 + 4 = 6$. Using the first rule would give $3(2)=6$ here by coincidence of value but is the wrong branch; the boundary belongs to whichever rule carries the $\\ge$.",
                "zh": "因为 $2$ 满足 $x \\ge 2$（条件含\"或等于\"），用第二条规则：$f(2) = 2 + 4 = 6$。此处用第一条规则数值上碰巧也得 $3(2)=6$，但那是错误的分支；分界点归属于带 $\\ge$ 的那条规则。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What are the coordinates of the vertex of $y = |x + 6| - 2$?",
                "zh": "$y = |x + 6| - 2$ 的顶点坐标是什么？"
              },
              "choices": [
                "$(6, -2)$",
                "$(6, 2)$",
                "$(-6, -2)$",
                "$(-6, 2)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Write it as $y = |x-(-6)| + (-2)$, so $h = -6$ and $k = -2$, giving vertex $(-6, -2)$. The trap is reading $h = 6$ from the $+6$; because the form subtracts $h$, a plus sign inside means $h$ is negative.",
                "zh": "把它写成 $y = |x-(-6)| + (-2)$，则 $h = -6$、$k = -2$，顶点为 $(-6, -2)$。陷阱是从 $+6$ 读成 $h = 6$；由于该式是减去 $h$，内部为加号意味着 $h$ 为负。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about the graph of $y = \\tfrac{1}{2}|x| + 3$ is true?",
                "zh": "关于 $y = \\tfrac{1}{2}|x| + 3$ 的图象，哪个说法正确？"
              },
              "choices": [
                "It opens downward and is narrower than $y=|x|$",
                "It opens upward and is narrower than $y=|x|$",
                "It opens downward and is wider than $y=|x|$",
                "It opens upward and is wider than $y=|x|$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Here $a = \\tfrac{1}{2}$, which is positive, so the V opens upward; and $0 < |a| < 1$, so the arms are less steep, making the V wider than the parent. A common error is thinking any fraction shrinks the graph vertically into a \"narrower\" look, but a smaller slope spreads the V out.",
                "zh": "这里 $a = \\tfrac{1}{2}$ 为正，所以 V 形开口向上；且 $0 < |a| < 1$，所以两臂更缓，使 V 形比母函数更宽。常见错误是以为分数会把图象竖直压缩成\"更窄\"，但斜率更小会使 V 形张得更开。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A step function gives shipping cost as $\\$5$ for weight $0 < w \\le 1$ lb, $\\$8$ for $1 < w \\le 2$ lb, and $\\$11$ for $2 < w \\le 3$ lb. What does a package weighing exactly $2$ lb cost?",
                "zh": "某阶梯函数给出运费：$0 < w \\le 1$ 磅为 $\\$5$，$1 < w \\le 2$ 磅为 $\\$8$，$2 < w \\le 3$ 磅为 $\\$11$。恰好重 $2$ 磅的包裹运费是多少？"
              },
              "choices": [
                "$\\$5$",
                "$\\$11$",
                "$\\$8$",
                "$\\$14$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The value $w = 2$ satisfies $1 < w \\le 2$ (closed on the right), so it falls in the $\\$8$ step. The tempting error is to push $2$ into the next step ($\\$11$), but that step starts strictly above $2$ ($w > 2$).",
                "zh": "$w = 2$ 满足 $1 < w \\le 2$（右端为闭），所以落在 $\\$8$ 这一档。诱人的错误是把 $2$ 归入下一档（$\\$11$），但那一档从严格大于 $2$（$w > 2$）才开始。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $g(x) = \\begin{cases} x^2 - 1, & x \\le 0 \\\\ 2x + 3, & x > 0 \\end{cases}$, find $g(-3)$. Give an integer.",
                "zh": "对 $g(x) = \\begin{cases} x^2 - 1, & x \\le 0 \\\\ 2x + 3, & x > 0 \\end{cases}$，求 $g(-3)$。请填整数。"
              },
              "answer": "8",
              "accept": [
                "8",
                "+8"
              ],
              "explanation": {
                "en": "Since $-3 \\le 0$, use the first rule: $g(-3) = (-3)^2 - 1 = 9 - 1 = 8$. Do not use the second rule, whose condition $x > 0$ excludes $-3$.",
                "zh": "因为 $-3 \\le 0$，用第一条规则：$g(-3) = (-3)^2 - 1 = 9 - 1 = 8$。不要用第二条规则，其条件 $x > 0$ 不含 $-3$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The graph of $y = a|x - h| + k$ has vertex $(2, -3)$ and passes through $(3, 1)$. Find the value of $a$. Give an integer.",
                "zh": "$y = a|x - h| + k$ 的图象顶点为 $(2, -3)$ 且过点 $(3, 1)$。求 $a$ 的值。请填整数。"
              },
              "answer": "4",
              "accept": [
                "4",
                "+4"
              ],
              "explanation": {
                "en": "From the vertex, $h = 2$ and $k = -3$, so $y = a|x-2| - 3$. Substitute $(3, 1)$: $1 = a|3-2| - 3 = a(1) - 3$, so $a - 3 = 1$ and $a = 4$. The V opens upward and is steeper than the parent.",
                "zh": "由顶点得 $h = 2$、$k = -3$，故 $y = a|x-2| - 3$。代入 $(3, 1)$：$1 = a|3-2| - 3 = a(1) - 3$，所以 $a - 3 = 1$，$a = 4$。该 V 形开口向上且比母函数更陡。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Real-world model: A tax scheme charges $10\\%$ on the first $\\$1000$ of income and $20\\%$ on every dollar above $\\$1000$. Written as $T(x)$ for income $x > 1000$, the rule is $T(x) = 100 + 0.20(x - 1000)$. Find the tax on an income of $\\$3000$. Give a number in dollars.",
                "zh": "实际模型：某税制对收入前 $\\$1000$ 征 $10\\%$，对超过 $\\$1000$ 的每一元征 $20\\%$。对收入 $x > 1000$，规则写作 $T(x) = 100 + 0.20(x - 1000)$。求收入 $\\$3000$ 的税额。请以元数作答。"
              },
              "answer": "500",
              "accept": [
                "500",
                "$500",
                "500.00"
              ],
              "explanation": {
                "en": "Substitute $x = 3000$: $T(3000) = 100 + 0.20(3000 - 1000) = 100 + 0.20(2000) = 100 + 400 = 500$. A common error is taking $20\\%$ of the whole $\\$3000$ ($\\$600$); brackets tax only the portion above $\\$1000$ at the higher rate.",
                "zh": "代入 $x = 3000$：$T(3000) = 100 + 0.20(3000 - 1000) = 100 + 0.20(2000) = 100 + 400 = 500$。常见错误是对全部 $\\$3000$ 取 $20\\%$（得 $\\$600$）；累进税只对超过 $\\$1000$ 的部分按更高税率征收。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: For how many values of $x$ does $|x - 2| + |x + 1| = 3$ hold true?",
                "zh": "荣誉挑战：使 $|x - 2| + |x + 1| = 3$ 成立的 $x$ 有多少个？"
              },
              "choices": [
                "Exactly one value",
                "Exactly two values",
                "No values",
                "Infinitely many values"
              ],
              "answer": 3,
              "explanation": {
                "en": "The expression $|x-2| + |x+1|$ is the total distance from $x$ to $2$ and to $-1$. The distance between $2$ and $-1$ is $3$, so any $x$ between them (that is, $-1 \\le x \\le 2$) has distances summing to exactly $3$ — an entire interval of solutions, infinitely many. Outside that interval the sum exceeds $3$. Solving branch by branch only in the outer regions and missing the middle interval is the usual trap.",
                "zh": "表达式 $|x-2| + |x+1|$ 表示 $x$ 到 $2$ 与到 $-1$ 的距离之和。$2$ 与 $-1$ 相距 $3$，所以位于两者之间的任意 $x$（即 $-1 \\le x \\le 2$）距离之和恰为 $3$——这是一整段解，有无穷多个。在该区间之外，和会超过 $3$。只在外侧区域逐段求解、漏掉中间区间是常见陷阱。"
              }
            }
          ]
        },
        {
          "id": "inverse-and-radical-functions",
          "title": "Square Root, Cube Root, and Inverse Functions",
          "titleZh": "根式函数与反函数",
          "content": [
            {
              "type": "h2",
              "en": "Undoing an Operation",
              "zh": "把一个运算\"撤销\""
            },
            {
              "type": "p",
              "en": "Every operation in math has a partner that undoes it: addition and subtraction, multiplication and division. Squaring has a partner too — the square root. If you know a square patio in a Provo backyard has area $A = 49$ square feet, you find its side by asking \"what number squared gives $49$?\" That is $\\sqrt{49} = 7$ feet. This idea of reversing a function is one of the most powerful in algebra, and it leads to radical functions and to inverse functions in general.",
              "zh": "数学中每个运算都有一个把它撤销的搭档：加法与减法、乘法与除法。平方也有搭档——那就是平方根。如果你知道普罗沃一个后院里的方形露台面积 $A = 49$ 平方英尺，你求边长时会问\"什么数的平方是 $49$？\"答案是 $\\sqrt{49} = 7$ 英尺。这种把函数逆转的思想是代数中最有力的思想之一，它引出根式函数以及一般的反函数。"
            },
            {
              "type": "h3",
              "en": "The Square Root Parent Function",
              "zh": "平方根母函数"
            },
            {
              "type": "p",
              "en": "The function $y = \\sqrt{x}$ takes a number and returns its principal (nonnegative) square root. Because you cannot take the square root of a negative number and stay in the real numbers, its domain is $x \\ge 0$; and because the result is never negative, its range is $y \\ge 0$. A table of perfect squares makes the shape clear:",
              "zh": "函数 $y = \\sqrt{x}$ 把一个数变成它的主（非负）平方根。因为在实数范围内不能对负数开平方，所以它的定义域是 $x \\ge 0$；又因为结果永不为负，所以值域是 $y \\ge 0$。一张完全平方数表能清楚地显示其形状："
            },
            {
              "type": "p",
              "en": "Points on $y=\\sqrt{x}$: $(0, 0)$, $(1, 1)$, $(4, 2)$, $(9, 3)$, $(16, 4)$. The curve starts at the origin and rises to the right, but ever more slowly — it grows fast at first, then flattens, the mirror image of how a parabola grows.",
              "zh": "$y=\\sqrt{x}$ 上的点：$(0, 0)$、$(1, 1)$、$(4, 2)$、$(9, 3)$、$(16, 4)$。曲线从原点出发向右上升，但越来越慢——开始上升快，随后变平，恰是抛物线增长方式的镜像。"
            },
            {
              "type": "note",
              "en": "Common mistake: writing $\\sqrt{25} = \\pm 5$. The radical symbol $\\sqrt{\\phantom{x}}$ means only the principal (nonnegative) root, so $\\sqrt{25} = 5$. The $\\pm$ appears only when YOU take a square root of both sides of an equation, as in solving $x^2 = 25 \\Rightarrow x = \\pm 5$.",
              "zh": "常见错误：写成 $\\sqrt{25} = \\pm 5$。根号 $\\sqrt{\\phantom{x}}$ 只表示主（非负）根，所以 $\\sqrt{25} = 5$。$\\pm$ 只在你对方程两边开平方时出现，例如解 $x^2 = 25 \\Rightarrow x = \\pm 5$。"
            },
            {
              "type": "h3",
              "en": "The Cube Root Parent Function",
              "zh": "立方根母函数"
            },
            {
              "type": "p",
              "en": "The function $y = \\sqrt[3]{x}$ undoes cubing. Unlike the square root, a cube root of a negative number IS a real number, because a negative times a negative times a negative is negative: $\\sqrt[3]{-8} = -2$ since $(-2)^3 = -8$. So its domain is all real numbers and its range is all real numbers. A table of perfect cubes:",
              "zh": "函数 $y = \\sqrt[3]{x}$ 撤销立方。与平方根不同，负数的立方根是实数，因为负负负得负：$\\sqrt[3]{-8} = -2$，因为 $(-2)^3 = -8$。所以它的定义域是全体实数，值域也是全体实数。一张完全立方数表："
            },
            {
              "type": "p",
              "en": "Points on $y=\\sqrt[3]{x}$: $(-8, -2)$, $(-1, -1)$, $(0, 0)$, $(1, 1)$, $(8, 2)$. The graph passes through the origin and rises from left to right through the third and first quadrants, with point symmetry about the origin (an odd function).",
              "zh": "$y=\\sqrt[3]{x}$ 上的点：$(-8, -2)$、$(-1, -1)$、$(0, 0)$、$(1, 1)$、$(8, 2)$。图象过原点，从左向右穿过第三与第一象限，关于原点呈中心对称（奇函数）。"
            },
            {
              "type": "h3",
              "en": "Transforming Radical Functions",
              "zh": "根式函数的变换"
            },
            {
              "type": "p",
              "en": "Radical functions transform by the same rules as every other parent graph. In $y = a\\sqrt{x - h} + k$, the starting point (the endpoint of the square root) moves from the origin to $(h, k)$; $a$ stretches vertically and, if negative, flips the curve to point downward. For example, $y = \\sqrt{x - 3} + 1$ is the square root curve starting at $(3, 1)$ instead of $(0,0)$, so its domain becomes $x \\ge 3$.",
              "zh": "根式函数遵循与其他母函数相同的变换规则。在 $y = a\\sqrt{x - h} + k$ 中，起点（平方根的端点）从原点移到 $(h, k)$；$a$ 进行竖直伸缩，若为负则把曲线翻转朝下。例如 $y = \\sqrt{x - 3} + 1$ 是从 $(3, 1)$ 而非 $(0,0)$ 出发的平方根曲线，所以定义域变为 $x \\ge 3$。"
            },
            {
              "type": "h3",
              "en": "Inverse Functions",
              "zh": "反函数"
            },
            {
              "type": "p",
              "en": "An inverse function, written $f^{-1}(x)$, reverses what $f$ does: if $f$ turns $3$ into $10$, then $f^{-1}$ turns $10$ back into $3$. Because a function swaps inputs and outputs when inverted, the domain and range trade places. To find an inverse from an equation, follow three steps:",
              "zh": "反函数记作 $f^{-1}(x)$，它把 $f$ 所做的事逆转：若 $f$ 把 $3$ 变成 $10$，则 $f^{-1}$ 把 $10$ 变回 $3$。因为求反函数时函数交换了输入与输出，定义域与值域互换。从方程求反函数，按三步进行："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Replace $f(x)$ with $y$.",
                  "zh": "把 $f(x)$ 换成 $y$。"
                },
                {
                  "en": "Swap $x$ and $y$ everywhere.",
                  "zh": "把式中所有 $x$ 与 $y$ 互换。"
                },
                {
                  "en": "Solve the new equation for $y$; this $y$ is $f^{-1}(x)$.",
                  "zh": "解出新方程中的 $y$；这个 $y$ 就是 $f^{-1}(x)$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: the notation $f^{-1}(x)$ does NOT mean $\\frac{1}{f(x)}$. The $-1$ here is not an exponent; it is the symbol for \"inverse function.\" For instance, if $f(x) = x + 4$ then $f^{-1}(x) = x - 4$, not $\\frac{1}{x+4}$.",
              "zh": "常见错误：记号 $f^{-1}(x)$ 并不表示 $\\frac{1}{f(x)}$。这里的 $-1$ 不是指数，而是\"反函数\"的符号。例如若 $f(x) = x + 4$，则 $f^{-1}(x) = x - 4$，而非 $\\frac{1}{x+4}$。"
            },
            {
              "type": "h3",
              "en": "Verifying and Visualizing Inverses",
              "zh": "验证与可视化反函数"
            },
            {
              "type": "p",
              "en": "Two functions are truly inverses when composing them in either order returns the input: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$. This composition test is the definitive check. Geometrically, the graph of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$. That is exactly why swapping $x$ and $y$ works: reflecting over $y=x$ interchanges the horizontal and vertical axes, so every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$.",
              "zh": "当两个函数以任意顺序复合都返回原输入时，它们才真正互为反函数：$f(f^{-1}(x)) = x$ 且 $f^{-1}(f(x)) = x$。这个复合检验是最终判据。从几何上看，$f^{-1}$ 的图象是 $f$ 的图象关于直线 $y = x$ 的反射。这正是交换 $x$ 与 $y$ 有效的原因：关于 $y=x$ 反射会互换横轴与纵轴，所以 $f$ 上的每个点 $(a, b)$ 变成 $f^{-1}$ 上的 $(b, a)$。"
            },
            {
              "type": "p",
              "en": "The squaring and square-root functions show this beautifully. For $x \\ge 0$, $f(x) = x^2$ and $f^{-1}(x) = \\sqrt{x}$ are reflections across $y=x$: $f$ contains $(2, 4)$ while $f^{-1}$ contains $(4, 2)$; $f$ contains $(3, 9)$ while $f^{-1}$ contains $(9, 3)$. Squaring and rooting undo each other.",
              "zh": "平方函数与平方根函数完美地展示了这一点。当 $x \\ge 0$ 时，$f(x) = x^2$ 与 $f^{-1}(x) = \\sqrt{x}$ 关于 $y=x$ 互为反射：$f$ 含点 $(2, 4)$，而 $f^{-1}$ 含点 $(4, 2)$；$f$ 含点 $(3, 9)$，而 $f^{-1}$ 含点 $(9, 3)$。平方与开方彼此撤销。"
            },
            {
              "type": "note",
              "en": "Test tip: $f(x) = x^2$ on all real numbers is not one-to-one (both $2$ and $-2$ map to $4$), so it has no inverse until you restrict the domain to $x \\ge 0$. A function has an inverse function only if it passes the horizontal line test — every output comes from exactly one input.",
              "zh": "考试提示：在全体实数上的 $f(x) = x^2$ 不是一一对应（$2$ 与 $-2$ 都映到 $4$），所以要把定义域限制到 $x \\ge 0$ 才有反函数。一个函数有反函数当且仅当它通过水平线检验——每个输出都恰好来自一个输入。"
            },
            {
              "type": "h3",
              "en": "Comparing Functions Across Representations",
              "zh": "跨表示比较函数"
            },
            {
              "type": "p",
              "en": "Functions arrive in three forms — a graph, a table, or an equation — and honors work means comparing them even when they wear different clothes. To compare a growth rate or a specific value, read what each representation gives you: from an equation, substitute; from a table, look up or find the change between rows; from a graph, read named points. The key is to put them on equal footing at the same input.",
              "zh": "函数以三种形式出现——图象、表格或方程——而荣誉水平的学习意味着即使它们\"穿着不同的衣服\"也要能比较。要比较增长率或某个具体值，就读取每种表示能给你的信息：由方程代入求值；由表格查表或求相邻行之间的变化；由图象读取命名点。关键是在相同的输入下把它们放在同等基础上比较。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Finding an inverse function",
                "zh": "例题 1：求反函数"
              },
              "problem": {
                "en": "Find the inverse of $f(x) = 2x - 6$.",
                "zh": "求 $f(x) = 2x - 6$ 的反函数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1, write $y = 2x - 6$. Step 2, swap $x$ and $y$: $x = 2y - 6$.",
                  "zh": "第一步，写成 $y = 2x - 6$。第二步，交换 $x$ 与 $y$：$x = 2y - 6$。"
                },
                {
                  "type": "p",
                  "en": "Step 3, solve for $y$: add $6$, then divide by $2$.",
                  "zh": "第三步，解出 $y$：加 $6$，再除以 $2$。"
                },
                {
                  "type": "math",
                  "tex": "x + 6 = 2y \\quad\\Rightarrow\\quad y = \\frac{x + 6}{2}"
                },
                {
                  "type": "p",
                  "en": "So $f^{-1}(x) = \\frac{x+6}{2}$. Check by composition: $f(f^{-1}(x)) = 2\\left(\\frac{x+6}{2}\\right) - 6 = (x + 6) - 6 = x$. It returns the input, confirming the inverse.",
                  "zh": "所以 $f^{-1}(x) = \\frac{x+6}{2}$。用复合验证：$f(f^{-1}(x)) = 2\\left(\\frac{x+6}{2}\\right) - 6 = (x + 6) - 6 = x$。它返回原输入，确认互为反函数。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Domain of a transformed square root",
                "zh": "例题 2：变换后平方根的定义域"
              },
              "problem": {
                "en": "State the domain and the starting point of $y = \\sqrt{2x - 8} + 1$.",
                "zh": "写出 $y = \\sqrt{2x - 8} + 1$ 的定义域与起点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The expression under the radical must be nonnegative: $2x - 8 \\ge 0$.",
                  "zh": "根号下的表达式必须非负：$2x - 8 \\ge 0$。"
                },
                {
                  "type": "math",
                  "tex": "2x - 8 \\ge 0 \\quad\\Rightarrow\\quad 2x \\ge 8 \\quad\\Rightarrow\\quad x \\ge 4"
                },
                {
                  "type": "p",
                  "en": "The domain is $x \\ge 4$. The curve starts where the radicand is $0$, at $x = 4$; there $y = \\sqrt{0} + 1 = 1$, so the starting point is $(4, 1)$, and the graph rises to the right from there.",
                  "zh": "定义域是 $x \\ge 4$。曲线从根号内为 $0$ 处开始，即 $x = 4$；此时 $y = \\sqrt{0} + 1 = 1$，所以起点是 $(4, 1)$，图象由此向右上升。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Comparing functions across representations",
                "zh": "例题 3：跨表示比较函数"
              },
              "problem": {
                "en": "Function $A$ is given by the equation $A(x) = 3x + 2$. Function $B$ is given by the table $(0, 5), (1, 7), (2, 9), (3, 11)$. Which function has the greater rate of change, and which has the greater value at $x = 4$?",
                "zh": "函数 $A$ 由方程 $A(x) = 3x + 2$ 给出。函数 $B$ 由表格 $(0, 5), (1, 7), (2, 9), (3, 11)$ 给出。哪个函数变化率更大？在 $x = 4$ 处哪个函数值更大？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Rate of change: $A$ has slope $3$ (the coefficient of $x$). For $B$, each step of $1$ in $x$ raises $y$ by $2$ (from $5$ to $7$ to $9$...), so its rate is $2$. Function $A$ changes faster.",
                  "zh": "变化率：$A$ 的斜率为 $3$（$x$ 的系数）。对 $B$，$x$ 每增加 $1$，$y$ 上升 $2$（从 $5$ 到 $7$ 到 $9$……），所以其变化率为 $2$。函数 $A$ 变化更快。"
                },
                {
                  "type": "p",
                  "en": "Value at $x = 4$: $A(4) = 3(4) + 2 = 14$. For $B$, extend the pattern: $B(x) = 2x + 5$, so $B(4) = 2(4) + 5 = 13$. Function $A$ is greater at $x = 4$ ($14 > 13$). Even though $B$ starts higher, $A$ overtakes it because of its steeper rate.",
                  "zh": "在 $x = 4$ 处的值：$A(4) = 3(4) + 2 = 14$。对 $B$，延续规律：$B(x) = 2x + 5$，所以 $B(4) = 2(4) + 5 = 13$。函数 $A$ 在 $x = 4$ 处更大（$14 > 13$）。尽管 $B$ 起点更高，$A$ 因变化率更陡而反超。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the domain of $y = \\sqrt{x - 5}$?",
                "zh": "$y = \\sqrt{x - 5}$ 的定义域是什么？"
              },
              "choices": [
                "$x \\ge -5$",
                "$x \\ge 5$",
                "all real numbers",
                "$x \\le 5$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The radicand must be nonnegative: $x - 5 \\ge 0$, so $x \\ge 5$. The trap $x \\ge -5$ comes from mishandling the sign — you add $5$ to both sides, you do not use $-5$.",
                "zh": "根号内必须非负：$x - 5 \\ge 0$，所以 $x \\ge 5$。陷阱 $x \\ge -5$ 源于符号处理错误——应给两边加 $5$，而非取 $-5$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Evaluate $\\sqrt[3]{-27}$.",
                "zh": "求 $\\sqrt[3]{-27}$。"
              },
              "choices": [
                "It is not a real number",
                "$27$",
                "$-3$",
                "$3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A cube root of a negative number is real because $(-3)^3 = -27$, so $\\sqrt[3]{-27} = -3$. Unlike a square root, an odd root of a negative number exists in the reals; assuming \"not real\" copies the rule for square roots by mistake.",
                "zh": "负数的立方根是实数，因为 $(-3)^3 = -27$，所以 $\\sqrt[3]{-27} = -3$。与平方根不同，负数的奇次根在实数范围内存在；误以为\"非实数\"是把平方根的规则套用了过来。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "If $f(x) = x^3$, which is the inverse function $f^{-1}(x)$?",
                "zh": "若 $f(x) = x^3$，反函数 $f^{-1}(x)$ 是哪个？"
              },
              "choices": [
                "$\\frac{1}{x^3}$",
                "$-x^3$",
                "$3x$",
                "$\\sqrt[3]{x}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Cubing is undone by the cube root, so $f^{-1}(x) = \\sqrt[3]{x}$; check: $f(f^{-1}(x)) = (\\sqrt[3]{x})^3 = x$. The choice $\\frac{1}{x^3}$ misreads the $-1$ as an exponent (a reciprocal) rather than the inverse-function symbol.",
                "zh": "立方由立方根撤销，所以 $f^{-1}(x) = \\sqrt[3]{x}$；验证：$f(f^{-1}(x)) = (\\sqrt[3]{x})^3 = x$。$\\frac{1}{x^3}$ 把 $-1$ 误当作指数（倒数），而非反函数符号。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The point $(2, 8)$ lies on the graph of $f$. Which point must lie on the graph of $f^{-1}$?",
                "zh": "点 $(2, 8)$ 在 $f$ 的图象上。哪个点一定在 $f^{-1}$ 的图象上？"
              },
              "choices": [
                "$(8, 2)$",
                "$(2, 8)$",
                "$(-2, -8)$",
                "$(\\tfrac{1}{2}, \\tfrac{1}{8})$"
              ],
              "answer": 0,
              "explanation": {
                "en": "An inverse swaps inputs and outputs (reflection over $y=x$), so $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$: $(2, 8)$ becomes $(8, 2)$. Keeping the point the same confuses $f^{-1}$ with the reciprocal or with $f$ itself.",
                "zh": "反函数互换输入与输出（关于 $y=x$ 反射），所以 $f$ 上的 $(a, b)$ 变为 $f^{-1}$ 上的 $(b, a)$：$(2, 8)$ 变为 $(8, 2)$。保持点不变是把 $f^{-1}$ 与倒数或与 $f$ 本身混淆了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the inverse of $f(x) = x + 7$, then evaluate $f^{-1}(10)$. Give an integer.",
                "zh": "求 $f(x) = x + 7$ 的反函数，再求 $f^{-1}(10)$。请填整数。"
              },
              "answer": "3",
              "accept": [
                "3",
                "+3"
              ],
              "explanation": {
                "en": "Swapping and solving gives $f^{-1}(x) = x - 7$, so $f^{-1}(10) = 10 - 7 = 3$. The inverse of \"add 7\" is \"subtract 7,\" not $\\frac{1}{x+7}$.",
                "zh": "交换并求解得 $f^{-1}(x) = x - 7$，所以 $f^{-1}(10) = 10 - 7 = 3$。\"加 7\"的逆运算是\"减 7\"，而非 $\\frac{1}{x+7}$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A square field on a Utah farm has area $A = s^2$ square meters. If the area is $\\$196$ square meters, use the inverse relationship $s = \\sqrt{A}$ to find the side length $s$ in meters. Give an integer.",
                "zh": "犹他一农场的方形田地面积为 $A = s^2$ 平方米。若面积为 $196$ 平方米，用反关系 $s = \\sqrt{A}$ 求边长 $s$（米）。请填整数。"
              },
              "answer": "14",
              "accept": [
                "14",
                "+14"
              ],
              "explanation": {
                "en": "Since squaring and square-rooting are inverses, $s = \\sqrt{196} = 14$ meters because $14^2 = 196$. A side length is a positive distance, so only the principal root is used here.",
                "zh": "因为平方与开方互为逆运算，$s = \\sqrt{196} = 14$ 米，因为 $14^2 = 196$。边长是正的距离，所以这里只取主根。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = \\sqrt{x + 1} - 2$, find $f(15)$. Give an integer.",
                "zh": "对 $f(x) = \\sqrt{x + 1} - 2$，求 $f(15)$。请填整数。"
              },
              "answer": "2",
              "accept": [
                "2",
                "+2"
              ],
              "explanation": {
                "en": "Work inside out: $f(15) = \\sqrt{15 + 1} - 2 = \\sqrt{16} - 2 = 4 - 2 = 2$. Subtract only after taking the root; doing $\\sqrt{15} + 1 - 2$ ignores the grouping under the radical.",
                "zh": "由内而外计算：$f(15) = \\sqrt{15 + 1} - 2 = \\sqrt{16} - 2 = 4 - 2 = 2$。要在开方之后再减；写成 $\\sqrt{15} + 1 - 2$ 忽略了根号下的分组。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A function is defined by $f(x) = \\frac{x - 1}{2}$. What is $f^{-1}(f^{-1}(x))$?",
                "zh": "荣誉挑战：函数定义为 $f(x) = \\frac{x - 1}{2}$。$f^{-1}(f^{-1}(x))$ 是多少？"
              },
              "choices": [
                "$x$",
                "$2x + 1$",
                "$4x + 3$",
                "$\\frac{x-1}{4}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "First find $f^{-1}$: swap and solve $x = \\frac{y-1}{2}$ to get $y = 2x + 1$, so $f^{-1}(x) = 2x + 1$. Now apply it twice: $f^{-1}(f^{-1}(x)) = 2(2x + 1) + 1 = 4x + 2 + 1 = 4x + 3$. Answering $x$ is the trap of assuming any repeated inverse returns the input — that only happens when you compose $f$ with $f^{-1}$, not $f^{-1}$ with itself.",
                "zh": "先求 $f^{-1}$：交换并解 $x = \\frac{y-1}{2}$ 得 $y = 2x + 1$，所以 $f^{-1}(x) = 2x + 1$。再套用两次：$f^{-1}(f^{-1}(x)) = 2(2x + 1) + 1 = 4x + 2 + 1 = 4x + 3$。答 $x$ 是陷阱，误以为任何重复的反函数都会返回输入——只有把 $f$ 与 $f^{-1}$ 复合才如此，而非 $f^{-1}$ 与自身复合。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "congruence-proof",
      "title": "Unit 7: Congruence and Geometric Proof",
      "titleZh": "第七单元：全等与几何证明",
      "lessons": [
        {
          "id": "triangle-congruence-proofs",
          "title": "Triangle Congruence and Proof",
          "titleZh": "三角形全等与证明",
          "content": [
            {
              "type": "h2",
              "en": "Why Triangles Hold Bridges Up",
              "zh": "为什么三角形能撑起桥梁"
            },
            {
              "type": "p",
              "en": "Look at any steel truss bridge crossing a Utah canyon, or the roof trusses in a new house in Provo: the metal is arranged in triangles, not squares. A four-sided frame can flex and collapse into a parallelogram, but a triangle whose three side lengths are fixed cannot change shape at all. This rigidity is exactly what congruence captures. Two triangles are congruent when one can be moved onto the other by a rigid motion (a translation, rotation, or reflection) so that every pair of corresponding sides and angles matches.",
              "zh": "看看任何一座横跨犹他峡谷的钢桁架桥，或者普罗沃新房子里的屋顶桁架：金属都排成三角形，而不是正方形。四边形框架会晃动并塌成平行四边形，但三条边长固定的三角形完全无法改变形状。这种刚性正是全等所刻画的性质。当一个三角形能通过刚体变换（平移、旋转或反射）叠合到另一个三角形上，使每一对对应边和对应角都相等时，这两个三角形就全等。"
            },
            {
              "type": "p",
              "en": "We write $\\triangle ABC \\cong \\triangle DEF$ to mean the two triangles are congruent. The order of the letters is a promise: $A$ corresponds to $D$, $B$ to $E$, and $C$ to $F$. That single statement packs in six facts — three pairs of equal sides and three pairs of equal angles. The remarkable discovery of geometry is that we never need all six to prove congruence; a well-chosen three are enough.",
              "zh": "我们用 $\\triangle ABC \\cong \\triangle DEF$ 表示两个三角形全等。字母的顺序是一种承诺：$A$ 对应 $D$，$B$ 对应 $E$，$C$ 对应 $F$。这一句话就包含六个事实——三对相等的边和三对相等的角。几何中一个了不起的发现是：我们从不需要全部六个条件来证明全等；恰当选取三个就足够了。"
            },
            {
              "type": "h3",
              "en": "The Five Congruence Criteria",
              "zh": "五条全等判定"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "SSS (Side-Side-Side): if all three pairs of sides are congruent, the triangles are congruent.",
                  "zh": "SSS（边边边）：如果三对边都对应相等，则两三角形全等。"
                },
                {
                  "en": "SAS (Side-Angle-Side): two pairs of sides and the pair of angles BETWEEN them (the included angle) are congruent.",
                  "zh": "SAS（边角边）：两对边以及它们之间的那个角（夹角）对应相等。"
                },
                {
                  "en": "ASA (Angle-Side-Angle): two pairs of angles and the pair of sides BETWEEN them (the included side) are congruent.",
                  "zh": "ASA（角边角）：两对角以及它们之间的那条边（夹边）对应相等。"
                },
                {
                  "en": "AAS (Angle-Angle-Side): two pairs of angles and a pair of non-included sides are congruent.",
                  "zh": "AAS（角角边）：两对角以及一对非夹边对应相等。"
                },
                {
                  "en": "HL (Hypotenuse-Leg): for RIGHT triangles only, the hypotenuses are congruent and one pair of legs is congruent.",
                  "zh": "HL（斜边直角边）：仅适用于直角三角形，斜边相等且一对直角边相等。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Two combinations do NOT prove congruence. SSA (two sides and a non-included angle) can produce two different triangles — this is the famous \"ambiguous case.\" AAA (all three angles) forces the same shape but not the same size: a triangle with angles $40^\\circ, 60^\\circ, 80^\\circ$ can be tiny or huge. AAA gives similarity, never congruence.",
              "zh": "有两种组合不能证明全等。SSA（两边和一个非夹角）可能产生两个不同的三角形——这就是著名的\"模糊情形\"。AAA（三个角）只能确定形状而非大小：一个角为 $40^\\circ, 60^\\circ, 80^\\circ$ 的三角形可以很小也可以很大。AAA 只给出相似，绝不给出全等。"
            },
            {
              "type": "p",
              "en": "To see why SSA fails, fix segment $AB$ of length $6$ with a $30^\\circ$ angle at $A$. Now swing a side of length $4$ from $B$. Because $4$ is shorter than the perpendicular reach in some positions, that swinging side can touch the ray from $A$ at two different points, giving two non-congruent triangles. The angle was not \"locked\" between the two sides, so nothing pins the triangle down.",
              "zh": "要理解 SSA 为何失效，固定长度为 $6$ 的线段 $AB$，在 $A$ 处有 $30^\\circ$ 的角。现在从 $B$ 摆动一条长为 $4$ 的边。因为 $4$ 比某些位置上的垂直距离更短，这条摆动的边可以与从 $A$ 出发的射线在两个不同的点相交，得到两个不全等的三角形。这个角没有被\"锁\"在两边之间，所以没有条件把三角形固定下来。"
            },
            {
              "type": "h3",
              "en": "CPCTC: The Payoff After a Proof",
              "zh": "CPCTC：证明之后的回报"
            },
            {
              "type": "p",
              "en": "Once you have proven two triangles congruent, you may conclude that any remaining pair of corresponding parts is congruent too. This reason is abbreviated CPCTC: Corresponding Parts of Congruent Triangles are Congruent. It is a two-step strategy — first prove the triangles congruent using one of the five criteria, then use CPCTC to get the specific side or angle you actually wanted. You cannot use CPCTC until AFTER the congruence line appears in your proof.",
              "zh": "一旦你证明了两个三角形全等，就可以断定其余任何一对对应部分也相等。这个理由缩写为 CPCTC：全等三角形的对应部分相等。这是一个两步策略——先用五条判定之一证明三角形全等，再用 CPCTC 得到你真正想要的那条边或那个角。在证明中出现全等结论之前，你不能使用 CPCTC。"
            },
            {
              "type": "h3",
              "en": "Tools That Show Up in Almost Every Proof",
              "zh": "几乎每个证明都会用到的工具"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Reflexive property: a side or angle shared by both triangles is congruent to itself, e.g. $\\overline{BD} \\cong \\overline{BD}$.",
                  "zh": "自反性：两个三角形共用的边或角与自身相等，例如 $\\overline{BD} \\cong \\overline{BD}$。"
                },
                {
                  "en": "Vertical angles: when two lines cross, the opposite angles are congruent.",
                  "zh": "对顶角：两直线相交时，相对的角相等。"
                },
                {
                  "en": "Parallel-line angles: parallel lines cut by a transversal give congruent alternate-interior angles and congruent corresponding angles.",
                  "zh": "平行线的角：被一条截线所截的平行线，产生相等的内错角和相等的同位角。"
                },
                {
                  "en": "Midpoint / bisector: a midpoint splits a segment into two congruent pieces; an angle bisector splits an angle into two congruent angles.",
                  "zh": "中点／平分线：中点把一条线段分成两条相等的部分；角平分线把一个角分成两个相等的角。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A two-column SAS proof",
                "zh": "例题 1：一个 SAS 两栏证明"
              },
              "problem": {
                "en": "Point $M$ is the midpoint of both $\\overline{AC}$ and $\\overline{BD}$ (the two segments cross at $M$). Prove $\\triangle AMB \\cong \\triangle CMD$.",
                "zh": "点 $M$ 是 $\\overline{AC}$ 和 $\\overline{BD}$ 的公共中点（两条线段在 $M$ 处相交）。证明 $\\triangle AMB \\cong \\triangle CMD$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Statement 1: $\\overline{AM} \\cong \\overline{CM}$. Reason: $M$ is the midpoint of $\\overline{AC}$.",
                  "zh": "陈述 1：$\\overline{AM} \\cong \\overline{CM}$。理由：$M$ 是 $\\overline{AC}$ 的中点。"
                },
                {
                  "type": "p",
                  "en": "Statement 2: $\\overline{BM} \\cong \\overline{DM}$. Reason: $M$ is the midpoint of $\\overline{BD}$.",
                  "zh": "陈述 2：$\\overline{BM} \\cong \\overline{DM}$。理由：$M$ 是 $\\overline{BD}$ 的中点。"
                },
                {
                  "type": "p",
                  "en": "Statement 3: $\\angle AMB \\cong \\angle CMD$. Reason: vertical angles are congruent.",
                  "zh": "陈述 3：$\\angle AMB \\cong \\angle CMD$。理由：对顶角相等。"
                },
                {
                  "type": "p",
                  "en": "Statement 4: $\\triangle AMB \\cong \\triangle CMD$. Reason: SAS. The congruent angle sits BETWEEN the two pairs of congruent sides, so SAS applies exactly.",
                  "zh": "陈述 4：$\\triangle AMB \\cong \\triangle CMD$。理由：SAS。相等的角恰好位于两对相等边之间，所以 SAS 正好适用。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Parallel lines, ASA, and CPCTC in a paragraph proof",
                "zh": "例题 2：平行线、ASA 与 CPCTC 的段落证明"
              },
              "problem": {
                "en": "Segments $\\overline{AB}$ and $\\overline{CD}$ cross at point $E$, with $\\overline{AB} \\parallel \\overline{CD}$ and $E$ the midpoint of $\\overline{AD}$. Prove that $E$ is also the midpoint of $\\overline{BC}$.",
                "zh": "线段 $\\overline{AB}$ 与 $\\overline{CD}$ 在点 $E$ 相交，$\\overline{AB} \\parallel \\overline{CD}$，且 $E$ 是 $\\overline{AD}$ 的中点。证明 $E$ 也是 $\\overline{BC}$ 的中点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Because $\\overline{AB} \\parallel \\overline{CD}$ and $\\overline{AD}$ is a transversal, the alternate interior angles are congruent: $\\angle BAE \\cong \\angle CDE$. Since $E$ is the midpoint of $\\overline{AD}$, we have $\\overline{AE} \\cong \\overline{DE}$. At $E$ the two segments cross, so the vertical angles give $\\angle AEB \\cong \\angle DEC$.",
                  "zh": "因为 $\\overline{AB} \\parallel \\overline{CD}$ 且 $\\overline{AD}$ 是截线，内错角相等：$\\angle BAE \\cong \\angle CDE$。由于 $E$ 是 $\\overline{AD}$ 的中点，有 $\\overline{AE} \\cong \\overline{DE}$。两线段在 $E$ 相交，对顶角给出 $\\angle AEB \\cong \\angle DEC$。"
                },
                {
                  "type": "p",
                  "en": "Now the angle $\\angle BAE$, the side $\\overline{AE}$, and the angle $\\angle AEB$ match the angle $\\angle CDE$, the side $\\overline{DE}$, and the angle $\\angle DEC$ — an angle, the included side, and an angle. By ASA, $\\triangle ABE \\cong \\triangle DCE$.",
                  "zh": "现在角 $\\angle BAE$、边 $\\overline{AE}$ 和角 $\\angle AEB$ 分别与角 $\\angle CDE$、边 $\\overline{DE}$ 和角 $\\angle DEC$ 对应——角、夹边、角。由 ASA，$\\triangle ABE \\cong \\triangle DCE$。"
                },
                {
                  "type": "p",
                  "en": "By CPCTC, $\\overline{BE} \\cong \\overline{CE}$. Since $E$ lies on $\\overline{BC}$ and splits it into two congruent pieces, $E$ is the midpoint of $\\overline{BC}$, as required.",
                  "zh": "由 CPCTC，$\\overline{BE} \\cong \\overline{CE}$。由于 $E$ 在 $\\overline{BC}$ 上并把它分成两条相等的部分，所以 $E$ 是 $\\overline{BC}$ 的中点，命题得证。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Choosing HL",
                "zh": "例题 3：选择 HL"
              },
              "problem": {
                "en": "In triangles $ABC$ and $DEF$, angles $B$ and $E$ are both right angles. The hypotenuses satisfy $\\overline{AC} \\cong \\overline{DF}$ and the legs satisfy $\\overline{BC} \\cong \\overline{EF}$. Which criterion proves $\\triangle ABC \\cong \\triangle DEF$, and why not SSA?",
                "zh": "在三角形 $ABC$ 与 $DEF$ 中，角 $B$ 与角 $E$ 都是直角。斜边满足 $\\overline{AC} \\cong \\overline{DF}$，直角边满足 $\\overline{BC} \\cong \\overline{EF}$。哪条判定证明 $\\triangle ABC \\cong \\triangle DEF$？为什么不是 SSA？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "We are given a right angle in each triangle, a pair of congruent hypotenuses, and a pair of congruent legs — this is exactly the Hypotenuse-Leg pattern, so HL applies.",
                  "zh": "我们已知每个三角形中有一个直角、一对相等的斜边和一对相等的直角边——这正是斜边直角边的模式，所以 HL 适用。"
                },
                {
                  "type": "p",
                  "en": "The given angle is not between the two given sides, so on the surface this looks like SSA, which normally fails. But the right angle removes the ambiguity: with a fixed hypotenuse and one fixed leg, the Pythagorean theorem forces the second leg to a single length, $\\sqrt{AC^2 - BC^2}$. HL is really the special case of SSA that is safe because the angle is $90^\\circ$.",
                  "zh": "已知的角不在两条已知边之间，表面上看这像 SSA，而 SSA 通常失效。但直角消除了模糊性：斜边固定、一条直角边固定时，勾股定理迫使另一条直角边只有一个长度 $\\sqrt{AC^2 - BC^2}$。HL 实际上是 SSA 中安全的特例，因为那个角是 $90^\\circ$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: before naming a criterion, mark the diagram and read the angle position. If the congruent angle sits between the two congruent sides, it is SAS; if it is off to the side, you need AAS (with another angle) — do NOT force it into SAS. Mislabeling SSA as SAS is the single most common proof error.",
              "zh": "考试提示：在写出判定之前，先在图上做标记并判断角的位置。如果相等的角在两条相等边之间，就是 SAS；如果它在旁边，你需要 AAS（配另一个角）——不要硬套成 SAS。把 SSA 误标为 SAS 是最常见的证明错误。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In $\\triangle ABC$ and $\\triangle DEF$ you know $\\overline{AB} \\cong \\overline{DE}$, $\\angle A \\cong \\angle D$, and $\\overline{AC} \\cong \\overline{DF}$. Which criterion proves the triangles congruent?",
                "zh": "在 $\\triangle ABC$ 与 $\\triangle DEF$ 中，已知 $\\overline{AB} \\cong \\overline{DE}$、$\\angle A \\cong \\angle D$、$\\overline{AC} \\cong \\overline{DF}$。哪条判定证明两三角形全等？"
              },
              "choices": [
                "SSS",
                "SAS",
                "ASA",
                "AAS"
              ],
              "answer": 1,
              "explanation": {
                "en": "The congruent angle $\\angle A$ sits between the two congruent sides $\\overline{AB}$ and $\\overline{AC}$, so it is the included angle — that is Side-Angle-Side. Reading it as ASA is wrong because ASA needs two angles with the side between them, but only one angle is given here.",
                "zh": "相等的角 $\\angle A$ 位于两条相等边 $\\overline{AB}$ 与 $\\overline{AC}$ 之间，所以它是夹角——这就是边角边。读成 ASA 是错的，因为 ASA 需要两个角夹一条边，而这里只给了一个角。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which pair of conditions does NOT guarantee that two triangles are congruent?",
                "zh": "下列哪一组条件不能保证两个三角形全等？"
              },
              "choices": [
                "Three pairs of congruent sides",
                "Two pairs of congruent angles and a pair of non-included congruent sides",
                "Three pairs of congruent angles",
                "Two pairs of congruent sides and the included congruent angle"
              ],
              "answer": 2,
              "explanation": {
                "en": "Three pairs of congruent angles (AAA) fixes the shape but not the size, so it only proves similarity — two triangles with the same angles can be scaled copies. The other three are SSS, AAS, and SAS, all valid congruence criteria.",
                "zh": "三对相等的角（AAA）确定形状但不确定大小，所以只能证明相似——两个同角的三角形可以是放大或缩小的复本。其余三项分别是 SSS、AAS、SAS，都是有效的全等判定。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two segments $\\overline{PR}$ and $\\overline{QS}$ intersect at point $T$. To prove $\\triangle PTQ \\cong \\triangle RTS$ by SAS given $\\overline{PT} \\cong \\overline{RT}$ and $\\overline{QT} \\cong \\overline{ST}$, what supplies the angle?",
                "zh": "两条线段 $\\overline{PR}$ 与 $\\overline{QS}$ 在点 $T$ 相交。已知 $\\overline{PT} \\cong \\overline{RT}$ 和 $\\overline{QT} \\cong \\overline{ST}$，要用 SAS 证明 $\\triangle PTQ \\cong \\triangle RTS$，角由什么提供？"
              },
              "choices": [
                "The reflexive property",
                "Alternate interior angles",
                "A midpoint",
                "Vertical angles at $T$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The two segments cross at $T$, so $\\angle PTQ$ and $\\angle RTS$ are opposite each other — vertical angles, which are congruent, and they sit between the two given side pairs. The reflexive property is for a shared side, and no parallel lines are given, so alternate interior angles do not apply here.",
                "zh": "两线段在 $T$ 相交，所以 $\\angle PTQ$ 与 $\\angle RTS$ 相对——是对顶角，相等，且位于两对已知边之间。自反性用于共用边，而题中没有平行线，所以内错角在此不适用。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A triangle has angles measuring $52^\\circ$ and $61^\\circ$. What is the measure, in degrees, of its third angle? Give a number only.",
                "zh": "一个三角形有两个角为 $52^\\circ$ 和 $61^\\circ$。它第三个角是多少度？只填数字。"
              },
              "answer": "67",
              "accept": [
                "67 degrees",
                "67°",
                "67度"
              ],
              "explanation": {
                "en": "The angles of a triangle sum to $180^\\circ$, so the third angle is $180 - 52 - 61 = 67^\\circ$. Knowing two angles determines the third, which is why AAS and ASA are logically the same amount of information.",
                "zh": "三角形内角和为 $180^\\circ$，所以第三个角是 $180 - 52 - 61 = 67^\\circ$。知道两个角就确定了第三个角，这正是 AAS 与 ASA 在逻辑上信息量相同的原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "After proving $\\triangle ABC \\cong \\triangle DEF$, a student wants to conclude $\\angle C \\cong \\angle F$. What reason should they cite?",
                "zh": "证明了 $\\triangle ABC \\cong \\triangle DEF$ 之后，一名学生想得出 $\\angle C \\cong \\angle F$。他应引用什么理由？"
              },
              "choices": [
                "CPCTC",
                "The reflexive property",
                "SAS",
                "Vertical angles"
              ],
              "answer": 0,
              "explanation": {
                "en": "Once the triangles are proven congruent, every remaining corresponding part is congruent — that reason is CPCTC. SAS is a way to prove the congruence, not a way to extract a part afterward, and $\\angle C, \\angle F$ are not vertical angles.",
                "zh": "一旦证明三角形全等，其余每一对对应部分都相等——这个理由就是 CPCTC。SAS 是用来证明全等的方法，而不是事后取出某部分的方法，而且 $\\angle C, \\angle F$ 不是对顶角。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In $\\triangle ABC \\cong \\triangle DEF$, side $\\overline{AB} = 9$, $\\overline{BC} = 12$, and $\\overline{AC} = 15$. By CPCTC, what is the length of side $\\overline{EF}$? Give a number only.",
                "zh": "在 $\\triangle ABC \\cong \\triangle DEF$ 中，$\\overline{AB} = 9$、$\\overline{BC} = 12$、$\\overline{AC} = 15$。由 CPCTC，边 $\\overline{EF}$ 的长度是多少？只填数字。"
              },
              "answer": "12",
              "accept": [
                "12.0"
              ],
              "explanation": {
                "en": "The correspondence $\\triangle ABC \\cong \\triangle DEF$ pairs $B$ with $E$ and $C$ with $F$, so $\\overline{EF}$ corresponds to $\\overline{BC} = 12$. Matching $\\overline{EF}$ to $\\overline{AC}=15$ ignores the letter order, which is the usual slip.",
                "zh": "对应关系 $\\triangle ABC \\cong \\triangle DEF$ 把 $B$ 与 $E$、$C$ 与 $F$ 配对，所以 $\\overline{EF}$ 对应 $\\overline{BC} = 12$。把 $\\overline{EF}$ 配成 $\\overline{AC}=15$ 是忽略了字母顺序，这是常见的失误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A carpenter braces a rectangular gate by nailing a diagonal board across it, forming two triangles that share the diagonal. If the two triangles have their three pairs of sides equal, why does the brace stop the gate from sagging?",
                "zh": "一名木匠在矩形门上钉一根对角木条来加固，形成两个共用对角线的三角形。如果这两个三角形三对边都相等，为什么这根木条能防止门下垂？"
              },
              "choices": [
                "Because AAA makes the triangles the same size",
                "Because the shared diagonal is congruent to itself by the reflexive property, and with SSS each triangle is rigid",
                "Because vertical angles hold the corners fixed",
                "Because HL applies to every rectangle"
              ],
              "answer": 1,
              "explanation": {
                "en": "The diagonal is shared, so it is congruent to itself (reflexive); with all three sides fixed, SSS makes each triangle rigid and unable to flex, unlike the original four-sided frame. AAA only fixes shape, vertical angles are not what locks the frame, and HL needs a right-angle/hypotenuse setup that is not the reasoning here.",
                "zh": "对角线是共用的，所以它与自身相等（自反）；三边都固定后，SSS 使每个三角形刚性、无法变形，而原来的四边形框架会变形。AAA 只固定形状，对顶角并非锁死框架的原因，HL 需要直角与斜边的设置，不是这里的推理。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: In $\\triangle ABC$, $\\overline{AB} \\cong \\overline{AC}$ (isosceles) and $D$ is the midpoint of $\\overline{BC}$. After proving $\\triangle ABD \\cong \\triangle ACD$, CPCTC shows $\\angle ADB \\cong \\angle ADC$. Since these two angles form a straight line along $\\overline{BC}$, what is the measure of $\\angle ADB$ in degrees? Give a number only.",
                "zh": "荣誉挑战：在 $\\triangle ABC$ 中，$\\overline{AB} \\cong \\overline{AC}$（等腰），$D$ 是 $\\overline{BC}$ 的中点。证明 $\\triangle ABD \\cong \\triangle ACD$ 后，CPCTC 得 $\\angle ADB \\cong \\angle ADC$。由于这两个角沿 $\\overline{BC}$ 构成一条直线，$\\angle ADB$ 是多少度？只填数字。"
              },
              "answer": "90",
              "accept": [
                "90 degrees",
                "90°",
                "90度"
              ],
              "explanation": {
                "en": "The triangles are congruent by SSS ($\\overline{AB}\\cong\\overline{AC}$, $\\overline{BD}\\cong\\overline{CD}$ from the midpoint, and shared $\\overline{AD}$). CPCTC makes $\\angle ADB \\cong \\angle ADC$, and since they are a linear pair summing to $180^\\circ$, each is $90^\\circ$. This proves the median from the apex of an isosceles triangle is also the altitude.",
                "zh": "由 SSS 全等（$\\overline{AB}\\cong\\overline{AC}$，中点给出 $\\overline{BD}\\cong\\overline{CD}$，共用 $\\overline{AD}$）。CPCTC 使 $\\angle ADB \\cong \\angle ADC$，它们是和为 $180^\\circ$ 的邻补角，所以各为 $90^\\circ$。这就证明了等腰三角形顶角引出的中线也是高。"
              }
            }
          ]
        },
        {
          "id": "parallelograms-and-proofs",
          "title": "Parallelograms and Their Proofs",
          "titleZh": "平行四边形及其证明",
          "content": [
            {
              "type": "h2",
              "en": "The Shape Behind Sliding Gates and Pantographs",
              "zh": "推拉门与缩放仪背后的形状"
            },
            {
              "type": "p",
              "en": "A scissor-lift at a construction site in Salt Lake, an expanding baby gate, and the pantograph arm on a drafting table all rely on parallelograms. A parallelogram is a quadrilateral with both pairs of opposite sides parallel. That one definition forces a whole family of consequences, and in this lesson we prove them rather than just memorize them — using the triangle-congruence tools from the previous lesson.",
              "zh": "盐湖城工地上的剪叉式升降机、可伸缩的婴儿护栏、绘图桌上的缩放仪臂，都依赖平行四边形。平行四边形是两组对边都平行的四边形。仅凭这一个定义就迫使出一整套推论，而本课我们要证明它们，而不仅仅是记住它们——用到上一课的三角形全等工具。"
            },
            {
              "type": "p",
              "en": "Throughout, take parallelogram $ABCD$ with vertices named in order around the figure, so the sides are $\\overline{AB}$, $\\overline{BC}$, $\\overline{CD}$, $\\overline{DA}$, and the diagonals are $\\overline{AC}$ and $\\overline{BD}$. The two pairs of opposite sides are $\\overline{AB} \\parallel \\overline{DC}$ and $\\overline{AD} \\parallel \\overline{BC}$.",
              "zh": "以下都取平行四边形 $ABCD$，顶点按图形一周顺序命名，所以各边为 $\\overline{AB}$、$\\overline{BC}$、$\\overline{CD}$、$\\overline{DA}$，对角线为 $\\overline{AC}$ 与 $\\overline{BD}$。两组对边为 $\\overline{AB} \\parallel \\overline{DC}$ 与 $\\overline{AD} \\parallel \\overline{BC}$。"
            },
            {
              "type": "h3",
              "en": "Properties of Every Parallelogram",
              "zh": "每个平行四边形的性质"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Opposite sides are congruent: $\\overline{AB} \\cong \\overline{CD}$ and $\\overline{BC} \\cong \\overline{DA}$.",
                  "zh": "对边相等：$\\overline{AB} \\cong \\overline{CD}$ 且 $\\overline{BC} \\cong \\overline{DA}$。"
                },
                {
                  "en": "Opposite angles are congruent: $\\angle A \\cong \\angle C$ and $\\angle B \\cong \\angle D$.",
                  "zh": "对角相等：$\\angle A \\cong \\angle C$ 且 $\\angle B \\cong \\angle D$。"
                },
                {
                  "en": "Consecutive angles are supplementary: $\\angle A + \\angle B = 180^\\circ$, and so on around the figure.",
                  "zh": "邻角互补：$\\angle A + \\angle B = 180^\\circ$，沿图形一周依此类推。"
                },
                {
                  "en": "The diagonals bisect each other: they cross at a point $M$ with $\\overline{AM} \\cong \\overline{CM}$ and $\\overline{BM} \\cong \\overline{DM}$.",
                  "zh": "对角线互相平分：它们相交于点 $M$，且 $\\overline{AM} \\cong \\overline{CM}$，$\\overline{BM} \\cong \\overline{DM}$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Proving opposite sides congruent",
                "zh": "例题 1：证明对边相等"
              },
              "problem": {
                "en": "In parallelogram $ABCD$, draw diagonal $\\overline{AC}$. Prove $\\overline{AB} \\cong \\overline{CD}$.",
                "zh": "在平行四边形 $ABCD$ 中，作对角线 $\\overline{AC}$。证明 $\\overline{AB} \\cong \\overline{CD}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The diagonal $\\overline{AC}$ is a transversal for both pairs of parallel sides. Since $\\overline{AB} \\parallel \\overline{DC}$, the alternate interior angles give $\\angle BAC \\cong \\angle DCA$. Since $\\overline{AD} \\parallel \\overline{BC}$, they give $\\angle DAC \\cong \\angle BCA$.",
                  "zh": "对角线 $\\overline{AC}$ 是两组平行边的截线。由 $\\overline{AB} \\parallel \\overline{DC}$，内错角给出 $\\angle BAC \\cong \\angle DCA$。由 $\\overline{AD} \\parallel \\overline{BC}$，给出 $\\angle DAC \\cong \\angle BCA$。"
                },
                {
                  "type": "p",
                  "en": "The diagonal $\\overline{AC}$ is shared, so $\\overline{AC} \\cong \\overline{AC}$ by the reflexive property. Now $\\triangle BAC$ and $\\triangle DCA$ have angle $\\angle BAC$, the included side $\\overline{AC}$, and angle $\\angle BCA$ matching angle $\\angle DCA$, side $\\overline{CA}$, and angle $\\angle DAC$. By ASA, $\\triangle BAC \\cong \\triangle DCA$.",
                  "zh": "对角线 $\\overline{AC}$ 是共用的，由自反性 $\\overline{AC} \\cong \\overline{AC}$。现在 $\\triangle BAC$ 与 $\\triangle DCA$ 有角 $\\angle BAC$、夹边 $\\overline{AC}$、角 $\\angle BCA$，分别对应角 $\\angle DCA$、边 $\\overline{CA}$、角 $\\angle DAC$。由 ASA，$\\triangle BAC \\cong \\triangle DCA$。"
                },
                {
                  "type": "p",
                  "en": "By CPCTC, $\\overline{AB} \\cong \\overline{CD}$. The same diagonal argument gives $\\overline{BC} \\cong \\overline{DA}$, so both pairs of opposite sides are congruent.",
                  "zh": "由 CPCTC，$\\overline{AB} \\cong \\overline{CD}$。同一条对角线的论证给出 $\\overline{BC} \\cong \\overline{DA}$，所以两组对边都相等。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: consecutive angles of a parallelogram are supplementary (add to $180^\\circ$), not congruent. Only OPPOSITE angles are congruent. If $\\angle A = 70^\\circ$, then $\\angle C = 70^\\circ$ but $\\angle B = \\angle D = 110^\\circ$.",
              "zh": "常见错误：平行四边形的邻角互补（和为 $180^\\circ$），而不是相等。只有对角相等。如果 $\\angle A = 70^\\circ$，则 $\\angle C = 70^\\circ$，但 $\\angle B = \\angle D = 110^\\circ$。"
            },
            {
              "type": "h3",
              "en": "Tests: How to Prove a Quadrilateral IS a Parallelogram",
              "zh": "判定：如何证明一个四边形是平行四边形"
            },
            {
              "type": "p",
              "en": "The properties above run one direction (parallelogram implies the fact). The tests run the other direction: any ONE of these conditions is enough to conclude a quadrilateral is a parallelogram.",
              "zh": "上面的性质是一个方向（平行四边形推出结论）。判定则是另一个方向：下列条件中任何一个成立，就能断定四边形是平行四边形。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Both pairs of opposite sides parallel (the definition).",
                  "zh": "两组对边都平行（定义）。"
                },
                {
                  "en": "Both pairs of opposite sides congruent.",
                  "zh": "两组对边都相等。"
                },
                {
                  "en": "Both pairs of opposite angles congruent.",
                  "zh": "两组对角都相等。"
                },
                {
                  "en": "The diagonals bisect each other.",
                  "zh": "对角线互相平分。"
                },
                {
                  "en": "One pair of opposite sides is BOTH parallel AND congruent.",
                  "zh": "有一组对边既平行又相等。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: the last condition is a shortcut worth memorizing. One pair of sides that is parallel AND congruent is enough — you do NOT have to check the other pair. But \"one pair parallel and a different pair congruent\" does NOT work; it can produce an isosceles trapezoid.",
              "zh": "考试提示：最后一个条件是值得记住的捷径。有一组边既平行又相等就足够——不必检查另一组。但\"一组边平行、另一组边相等\"不成立；它可能产生等腰梯形。"
            },
            {
              "type": "h3",
              "en": "The Special Parallelograms",
              "zh": "特殊平行四边形"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Rectangle: a parallelogram with four right angles. Extra property: the diagonals are congruent ($\\overline{AC} \\cong \\overline{BD}$).",
                  "zh": "矩形：四个角都是直角的平行四边形。额外性质：对角线相等（$\\overline{AC} \\cong \\overline{BD}$）。"
                },
                {
                  "en": "Rhombus: a parallelogram with four congruent sides. Extra property: the diagonals are perpendicular and each bisects a pair of opposite angles.",
                  "zh": "菱形：四条边都相等的平行四边形。额外性质：对角线互相垂直，且每条对角线平分一组对角。"
                },
                {
                  "en": "Square: a parallelogram that is both a rectangle and a rhombus — four right angles AND four congruent sides, so it has congruent, perpendicular, bisecting diagonals.",
                  "zh": "正方形：既是矩形又是菱形的平行四边形——四个直角且四边相等，所以对角线相等、垂直且互相平分。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Coordinate Proof: Slope and Distance",
              "zh": "坐标证明：斜率与距离"
            },
            {
              "type": "p",
              "en": "When a figure is placed on the coordinate plane, we can prove what it is using algebra. Two tools do all the work. Parallel sides have equal slope, computed with $m = \\frac{y_2 - y_1}{x_2 - x_1}$, and perpendicular sides have slopes whose product is $-1$. Side lengths come from the distance formula:",
              "zh": "当图形放在坐标平面上时，我们可以用代数来证明它是什么。两个工具就能完成全部工作。平行边斜率相等，斜率用 $m = \\frac{y_2 - y_1}{x_2 - x_1}$ 计算；垂直边的斜率之积为 $-1$。边长由距离公式给出："
            },
            {
              "type": "math",
              "tex": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"
            },
            {
              "type": "p",
              "en": "A midpoint, useful for checking that diagonals bisect each other, is the average of the endpoints: $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$. The strategy of a coordinate proof is to translate a geometric claim (parallel, congruent, right angle) into an algebraic one (equal slopes, equal distances, slope product $-1$) and then compute.",
              "zh": "中点用于检验对角线是否互相平分，它是两端点的平均：$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$。坐标证明的策略是把几何命题（平行、相等、直角）翻译成代数命题（斜率相等、距离相等、斜率之积为 $-1$），然后计算。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Proving a figure is a parallelogram by coordinates",
                "zh": "例题 2：用坐标证明图形是平行四边形"
              },
              "problem": {
                "en": "A quadrilateral has vertices $A(1, 1)$, $B(5, 2)$, $C(6, 5)$, and $D(2, 4)$, named in order. Prove $ABCD$ is a parallelogram.",
                "zh": "一个四边形的顶点按顺序为 $A(1, 1)$、$B(5, 2)$、$C(6, 5)$、$D(2, 4)$。证明 $ABCD$ 是平行四边形。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Use the shortcut: show one pair of opposite sides is both parallel and congruent. Take $\\overline{AB}$ and $\\overline{DC}$.",
                  "zh": "用捷径：证明一组对边既平行又相等。取 $\\overline{AB}$ 与 $\\overline{DC}$。"
                },
                {
                  "type": "p",
                  "en": "Slope of $\\overline{AB}$: $\\frac{2 - 1}{5 - 1} = \\frac{1}{4}$. Slope of $\\overline{DC}$: $\\frac{5 - 4}{6 - 2} = \\frac{1}{4}$. Equal slopes means $\\overline{AB} \\parallel \\overline{DC}$.",
                  "zh": "$\\overline{AB}$ 的斜率：$\\frac{2 - 1}{5 - 1} = \\frac{1}{4}$。$\\overline{DC}$ 的斜率：$\\frac{5 - 4}{6 - 2} = \\frac{1}{4}$。斜率相等说明 $\\overline{AB} \\parallel \\overline{DC}$。"
                },
                {
                  "type": "p",
                  "en": "Length of $\\overline{AB}$: $\\sqrt{(5-1)^2 + (2-1)^2} = \\sqrt{16 + 1} = \\sqrt{17}$. Length of $\\overline{DC}$: $\\sqrt{(6-2)^2 + (5-4)^2} = \\sqrt{16 + 1} = \\sqrt{17}$. Equal lengths means $\\overline{AB} \\cong \\overline{DC}$.",
                  "zh": "$\\overline{AB}$ 的长度：$\\sqrt{(5-1)^2 + (2-1)^2} = \\sqrt{16 + 1} = \\sqrt{17}$。$\\overline{DC}$ 的长度：$\\sqrt{(6-2)^2 + (5-4)^2} = \\sqrt{16 + 1} = \\sqrt{17}$。长度相等说明 $\\overline{AB} \\cong \\overline{DC}$。"
                },
                {
                  "type": "p",
                  "en": "One pair of opposite sides is both parallel and congruent, so by the shortcut test $ABCD$ is a parallelogram.",
                  "zh": "有一组对边既平行又相等，所以由捷径判定，$ABCD$ 是平行四边形。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Rectangle or rhombus?",
                "zh": "例题 3：矩形还是菱形？"
              },
              "problem": {
                "en": "The parallelogram from Example 2 has diagonals $\\overline{AC}$ from $A(1,1)$ to $C(6,5)$ and $\\overline{BD}$ from $B(5,2)$ to $D(2,4)$. Determine whether $ABCD$ is a rectangle.",
                "zh": "例题 2 中的平行四边形有对角线 $\\overline{AC}$ 从 $A(1,1)$ 到 $C(6,5)$，$\\overline{BD}$ 从 $B(5,2)$ 到 $D(2,4)$。判断 $ABCD$ 是否为矩形。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A parallelogram is a rectangle exactly when its diagonals are congruent. Length of $\\overline{AC}$: $\\sqrt{(6-1)^2 + (5-1)^2} = \\sqrt{25 + 16} = \\sqrt{41}$.",
                  "zh": "平行四边形是矩形当且仅当它的对角线相等。$\\overline{AC}$ 的长度：$\\sqrt{(6-1)^2 + (5-1)^2} = \\sqrt{25 + 16} = \\sqrt{41}$。"
                },
                {
                  "type": "p",
                  "en": "Length of $\\overline{BD}$: $\\sqrt{(2-5)^2 + (4-2)^2} = \\sqrt{9 + 4} = \\sqrt{13}$. Since $\\sqrt{41} \\ne \\sqrt{13}$, the diagonals are not congruent, so $ABCD$ is NOT a rectangle — it is a slanted (oblique) parallelogram.",
                  "zh": "$\\overline{BD}$ 的长度：$\\sqrt{(2-5)^2 + (4-2)^2} = \\sqrt{9 + 4} = \\sqrt{13}$。由于 $\\sqrt{41} \\ne \\sqrt{13}$，对角线不相等，所以 $ABCD$ 不是矩形——它是一个倾斜的平行四边形。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip for coordinate proofs: match the tool to the claim. Parallel or \"is a parallelogram\" -> slopes. Congruent sides or \"is a rhombus\" -> distances. Right angle or \"is a rectangle\" -> slopes multiply to $-1$, or congruent diagonals. State which property you are testing before you compute, so the grader sees your logic.",
              "zh": "坐标证明的考试提示：让工具与命题相匹配。平行或\"是平行四边形\"→斜率。边相等或\"是菱形\"→距离。直角或\"是矩形\"→斜率之积为 $-1$，或对角线相等。计算前先说明你在检验哪条性质，好让评分者看到你的逻辑。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In parallelogram $ABCD$, $\\angle A = 65^\\circ$. What is $\\angle B$?",
                "zh": "在平行四边形 $ABCD$ 中，$\\angle A = 65^\\circ$。$\\angle B$ 是多少？"
              },
              "choices": [
                "$65^\\circ$",
                "$115^\\circ$",
                "$130^\\circ$",
                "$25^\\circ$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$\\angle A$ and $\\angle B$ are consecutive angles, which are supplementary, so $\\angle B = 180^\\circ - 65^\\circ = 115^\\circ$. Answering $65^\\circ$ treats them as opposite angles, but $\\angle A$ and $\\angle C$ are the opposite pair.",
                "zh": "$\\angle A$ 与 $\\angle B$ 是邻角，互补，所以 $\\angle B = 180^\\circ - 65^\\circ = 115^\\circ$。答 $65^\\circ$ 是把它们当作对角，但对角是 $\\angle A$ 与 $\\angle C$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which single condition is enough to prove a quadrilateral is a parallelogram?",
                "zh": "下列哪一个条件足以证明一个四边形是平行四边形？"
              },
              "choices": [
                "One pair of opposite sides is parallel and a different pair is congruent",
                "The diagonals are congruent",
                "One pair of opposite sides is both parallel and congruent",
                "One pair of opposite angles is congruent"
              ],
              "answer": 2,
              "explanation": {
                "en": "A single pair of opposite sides that is both parallel and congruent forces the figure to be a parallelogram. Making one pair parallel and a different pair congruent can give an isosceles trapezoid; congruent diagonals describe a rectangle only once you already know it is a parallelogram; and just one pair of opposite angles is not enough.",
                "zh": "一组对边既平行又相等就迫使图形成为平行四边形。让一组边平行、另一组边相等可能得到等腰梯形；对角线相等只有在已知是平行四边形后才描述矩形；而仅一组对角相等并不够。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A parallelogram has diagonals that are perpendicular to each other but not congruent. What special type must it be?",
                "zh": "一个平行四边形的对角线互相垂直但不相等。它一定是哪种特殊类型？"
              },
              "choices": [
                "Rectangle",
                "Square",
                "It cannot be determined",
                "Rhombus"
              ],
              "answer": 3,
              "explanation": {
                "en": "Perpendicular diagonals are the signature of a rhombus. It is not a square because a square would also have congruent diagonals, and it is not a rectangle because a rectangle needs congruent (not necessarily perpendicular) diagonals.",
                "zh": "对角线互相垂直是菱形的标志。它不是正方形，因为正方形的对角线还要相等；它不是矩形，因为矩形需要相等（不一定垂直）的对角线。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In parallelogram $ABCD$, side $\\overline{AB} = 3x + 4$ and its opposite side $\\overline{CD} = 5x - 2$. Solve for $x$. Give a number only.",
                "zh": "在平行四边形 $ABCD$ 中，边 $\\overline{AB} = 3x + 4$，其对边 $\\overline{CD} = 5x - 2$。求 $x$。只填数字。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "x=3"
              ],
              "explanation": {
                "en": "Opposite sides of a parallelogram are congruent, so $3x + 4 = 5x - 2$. Then $6 = 2x$, giving $x = 3$. Setting the sides supplementary instead of equal is the usual error here — that rule is for angles, not sides.",
                "zh": "平行四边形的对边相等，所以 $3x + 4 = 5x - 2$。于是 $6 = 2x$，得 $x = 3$。把边设成互补而非相等是这里常见的错误——互补规则用于角，不用于边。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The diagonals of parallelogram $ABCD$ meet at $M$. If $\\overline{AM} = 7$, what is the full length of diagonal $\\overline{AC}$? Give a number only.",
                "zh": "平行四边形 $ABCD$ 的对角线相交于 $M$。若 $\\overline{AM} = 7$，对角线 $\\overline{AC}$ 的全长是多少？只填数字。"
              },
              "answer": "14",
              "accept": [
                "14.0"
              ],
              "explanation": {
                "en": "The diagonals of a parallelogram bisect each other, so $M$ is the midpoint of $\\overline{AC}$ and $\\overline{AC} = 2 \\cdot \\overline{AM} = 14$. Leaving the answer as $7$ forgets that $M$ splits the diagonal into two equal halves.",
                "zh": "平行四边形的对角线互相平分，所以 $M$ 是 $\\overline{AC}$ 的中点，$\\overline{AC} = 2 \\cdot \\overline{AM} = 14$。答 $7$ 是忘了 $M$ 把对角线分成两个相等的一半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A quadrilateral has vertices $P(0,0)$, $Q(4,0)$, $R(5,3)$, $S(1,3)$. Using slopes, which statement is true?",
                "zh": "一个四边形的顶点为 $P(0,0)$、$Q(4,0)$、$R(5,3)$、$S(1,3)$。用斜率判断，下列哪句正确？"
              },
              "choices": [
                "$\\overline{PQ} \\parallel \\overline{SR}$ because both have slope $0$",
                "It is a rectangle because all angles are right angles",
                "$\\overline{PS} \\parallel \\overline{QR}$ because both have slope $0$",
                "It is not a parallelogram"
              ],
              "answer": 0,
              "explanation": {
                "en": "Slope of $\\overline{PQ}$ is $\\frac{0-0}{4-0}=0$ and slope of $\\overline{SR}$ is $\\frac{3-3}{5-1}=0$, so those opposite sides are parallel (both horizontal). It is not a rectangle since $\\overline{PS}$ has slope $\\frac{3-0}{1-0}=3$, not vertical, so the corners are not right angles; and $\\overline{PS}$ and $\\overline{QR}$ are the slanted sides, not slope $0$.",
                "zh": "$\\overline{PQ}$ 的斜率是 $\\frac{0-0}{4-0}=0$，$\\overline{SR}$ 的斜率是 $\\frac{3-3}{5-1}=0$，所以这组对边平行（都水平）。它不是矩形，因为 $\\overline{PS}$ 的斜率是 $\\frac{3-0}{1-0}=3$，不竖直，角不是直角；而 $\\overline{PS}$ 与 $\\overline{QR}$ 是倾斜的边，斜率不是 $0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The pantograph arm of a scissor lift keeps its platform level because each cell stays a parallelogram as it extends. Which property guarantees the top bar stays parallel to the ground bar?",
                "zh": "剪叉式升降机的缩放臂在伸展时每个单元保持平行四边形，从而使平台保持水平。哪条性质保证顶杆始终平行于底杆？"
              },
              "choices": [
                "Diagonals bisect each other",
                "Opposite sides of a parallelogram stay parallel by definition",
                "Opposite angles are congruent",
                "Consecutive angles are supplementary"
              ],
              "answer": 1,
              "explanation": {
                "en": "The defining feature of a parallelogram is that opposite sides are parallel, so the top bar (opposite the ground bar) must remain parallel to it no matter how far the lift extends. The other statements are true properties but they describe angles or diagonals, not why the top and bottom bars stay parallel.",
                "zh": "平行四边形的定义特征就是对边平行，所以顶杆（与底杆相对）无论升降机伸展多远都必须与底杆保持平行。其他说法虽是正确性质，但描述的是角或对角线，而不是顶杆与底杆为何保持平行。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: A quadrilateral has vertices $W(0,0)$, $X(a,0)$, $Y(a+b,c)$, $Z(b,c)$. It is always a parallelogram. For it to be a rhombus, side $\\overline{WX}$ (length $a$) must equal side $\\overline{WZ}$ (length $\\sqrt{b^2+c^2}$). If $b = 3$ and $c = 4$, what value of $a$ makes $WXYZ$ a rhombus? Give a number only.",
                "zh": "荣誉挑战：一个四边形的顶点为 $W(0,0)$、$X(a,0)$、$Y(a+b,c)$、$Z(b,c)$。它总是平行四边形。要成为菱形，边 $\\overline{WX}$（长 $a$）必须等于边 $\\overline{WZ}$（长 $\\sqrt{b^2+c^2}$）。若 $b = 3$、$c = 4$，$a$ 取何值使 $WXYZ$ 成为菱形？只填数字。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "A rhombus needs all sides congruent, and here that reduces to $a = \\sqrt{b^2 + c^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. This general-coordinate setup shows any such $WXYZ$ is a parallelogram, and choosing $a=5$ makes adjacent sides equal, forcing a rhombus.",
                "zh": "菱形需要所有边相等，这里归结为 $a = \\sqrt{b^2 + c^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$。这个一般坐标设置表明任何这样的 $WXYZ$ 都是平行四边形，取 $a=5$ 使相邻边相等，从而成为菱形。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "similarity-trigonometry",
      "title": "Unit 8: Similarity and Right Triangle Trigonometry",
      "titleZh": "第八单元：相似与直角三角形三角学",
      "lessons": [
        {
          "id": "dilations-and-similarity",
          "title": "Dilations and Similarity",
          "titleZh": "位似与相似",
          "content": [
            {
              "type": "h2",
              "en": "Scaling Shapes: From Blueprints to the Wasatch Front",
              "zh": "图形的缩放：从建筑蓝图到瓦萨奇山脉前沿"
            },
            {
              "type": "p",
              "en": "A blueprint of a Salt Lake City house, a scaled-down 3D-printed model of the Utah Capitol, and a photo enlarged on your phone all do the same mathematical thing: they change a figure's size without changing its shape. This size-change is called a dilation, and figures related by a dilation (possibly combined with rigid motions) are called similar. In Secondary Math I you studied rigid motions — translations, rotations, reflections — that preserve BOTH size and shape (congruence). A dilation preserves shape but scales size, and it is the one new ingredient that turns congruence into similarity.",
              "zh": "盐湖城房屋的蓝图、犹他州议会大厦缩小的 3D 打印模型、以及手机上放大的照片，做的都是同一件数学上的事：改变图形的大小而不改变其形状。这种大小的改变叫做位似（放缩），而通过一个位似（可能还结合刚体变换）相关联的图形叫做相似。在中学数学一中，你学过刚体变换——平移、旋转、反射——它们同时保持大小和形状（全等）。位似保持形状但缩放大小，它正是把全等推广为相似所需的那一个新要素。"
            },
            {
              "type": "h3",
              "en": "Dilations: Center and Scale Factor",
              "zh": "位似：位似中心与比例因子"
            },
            {
              "type": "p",
              "en": "A dilation is defined by two things: a fixed point called the center of dilation, and a positive number called the scale factor $k$. Each point $P$ is moved along the ray from the center through $P$ to a new point $P'$ so that the distance from the center is multiplied by $k$. If $k > 1$ the figure grows (an enlargement); if $0 < k < 1$ it shrinks (a reduction); if $k = 1$ nothing moves at all.",
              "zh": "一个位似由两样东西确定：一个固定点，称为位似中心；以及一个正数，称为比例因子 $k$。每个点 $P$ 沿着从中心经过 $P$ 的射线移动到新点 $P'$，使得它到中心的距离乘以 $k$。若 $k > 1$，图形放大（放大变换）；若 $0 < k < 1$，图形缩小（缩小变换）；若 $k = 1$，则一切都不动。"
            },
            {
              "type": "p",
              "en": "When the center is the origin, the coordinate rule is beautifully simple — just multiply each coordinate by $k$:",
              "zh": "当位似中心是原点时，坐标法则非常简洁——只需把每个坐标都乘以 $k$："
            },
            {
              "type": "math",
              "tex": "(x, y) \\;\\longrightarrow\\; (kx, ky)"
            },
            {
              "type": "p",
              "en": "For example, take triangle $ABC$ with $A(0,0)$, $B(4,0)$, $C(0,6)$ and dilate it from the origin with scale factor $k = 2$. The images are $A'(0,0)$, $B'(8,0)$, $C'(0,12)$. Notice $A$ did not move because it IS the center. The legs, originally $4$ and $6$, become $8$ and $12$ — each doubled — while the right angle at $A$ stays exactly $90^\\circ$.",
              "zh": "例如，取三角形 $ABC$，顶点为 $A(0,0)$、$B(4,0)$、$C(0,6)$，以原点为中心、比例因子 $k = 2$ 作位似。像是 $A'(0,0)$、$B'(8,0)$、$C'(0,12)$。注意 $A$ 没有移动，因为它就是位似中心。原本为 $4$ 和 $6$ 的两条直角边变成了 $8$ 和 $12$——各自加倍——而 $A$ 处的直角仍精确地保持 $90^\\circ$。"
            },
            {
              "type": "note",
              "en": "Common mistake: a dilation multiplies DISTANCES by $k$, not by adding $k$. Under $k = 3$ a point $6$ units from the center moves to $18$ units away, not $9$. And angles never change under a dilation — only lengths scale.",
              "zh": "常见错误：位似是把距离乘以 $k$，而不是加上 $k$。当 $k = 3$ 时，距中心 $6$ 个单位的点移到 $18$ 个单位远处，而不是 $9$。而且位似绝不改变角度——只有长度被缩放。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Dilating from the origin",
                "zh": "例题 1：以原点为中心的位似"
              },
              "problem": {
                "en": "Rectangle $PQRS$ has vertices $P(2,1)$, $Q(6,1)$, $R(6,4)$, $S(2,4)$. Find the image after a dilation centered at the origin with scale factor $k = \\tfrac{1}{2}$, and compare the perimeters.",
                "zh": "矩形 $PQRS$ 的顶点为 $P(2,1)$、$Q(6,1)$、$R(6,4)$、$S(2,4)$。求以原点为中心、比例因子 $k = \\tfrac{1}{2}$ 作位似后的像，并比较周长。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply every coordinate by $\\tfrac{1}{2}$:",
                  "zh": "把每个坐标都乘以 $\\tfrac{1}{2}$："
                },
                {
                  "type": "math",
                  "tex": "P'(1,\\,0.5),\\quad Q'(3,\\,0.5),\\quad R'(3,\\,2),\\quad S'(1,\\,2)"
                },
                {
                  "type": "p",
                  "en": "The original rectangle is $4$ wide and $3$ tall, so its perimeter is $2(4+3) = 14$. The image is $2$ wide and $1.5$ tall, with perimeter $2(2+1.5) = 7$. The perimeter scaled by exactly $k = \\tfrac{1}{2}$, as expected.",
                  "zh": "原矩形宽 $4$、高 $3$，故周长为 $2(4+3) = 14$。像宽 $2$、高 $1.5$，周长为 $2(2+1.5) = 7$。周长恰好按 $k = \\tfrac{1}{2}$ 缩放，符合预期。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Similarity as Rigid Motions Plus a Dilation",
              "zh": "相似即刚体变换加位似"
            },
            {
              "type": "p",
              "en": "Two figures are similar (written $\\sim$) if one can be mapped exactly onto the other by a sequence of rigid motions and a dilation. This is the transformation definition of similarity, and it generalizes congruence: congruent figures are the special case where the dilation has scale factor $k = 1$. Because rigid motions preserve angles and dilations preserve angles, similar figures always have congruent corresponding angles; because dilations scale all lengths by the same $k$, corresponding sides are proportional.",
              "zh": "若一个图形能通过一系列刚体变换和一个位似精确地映射到另一个图形上，则这两个图形相似（记作 $\\sim$）。这是相似的变换定义，它推广了全等：全等图形正是位似比例因子 $k = 1$ 的特殊情形。因为刚体变换保持角度、位似也保持角度，所以相似图形的对应角总是相等；又因为位似把所有长度按同一个 $k$ 缩放，所以对应边成比例。"
            },
            {
              "type": "p",
              "en": "The two defining properties of similar polygons are therefore:",
              "zh": "因此，相似多边形的两条定义性质是："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Corresponding angles are congruent (equal in measure).",
                  "zh": "对应角相等（度数相同）。"
                },
                {
                  "en": "Corresponding sides are proportional — their ratios all equal the same scale factor $k$.",
                  "zh": "对应边成比例——它们的比都等于同一个比例因子 $k$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Order matters when you name similar figures. Writing $\\triangle ABC \\sim \\triangle DEF$ claims $A$ corresponds to $D$, $B$ to $E$, and $C$ to $F$. That tells you $\\angle A = \\angle D$ and $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}$. Scramble the letters and the proportions become wrong.",
              "zh": "给相似图形命名时，字母顺序很重要。写 $\\triangle ABC \\sim \\triangle DEF$ 就是断言 $A$ 对应 $D$、$B$ 对应 $E$、$C$ 对应 $F$。这告诉你 $\\angle A = \\angle D$ 且 $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}$。若字母顺序打乱，比例就会写错。"
            },
            {
              "type": "h3",
              "en": "Triangle Similarity Criteria: AA, SAS~, SSS~",
              "zh": "三角形相似判定：AA、SAS~、SSS~"
            },
            {
              "type": "p",
              "en": "Just as congruence has shortcuts (SSS, SAS, ASA), similarity has three efficient tests. You do not need to check all angles and all sides — any one of these guarantees similarity:",
              "zh": "正如全等有捷径判定（SSS、SAS、ASA），相似也有三种高效的判定方法。你不必检验所有的角和所有的边——下面任何一条都能保证相似："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "AA (Angle-Angle): if two angles of one triangle equal two angles of another, the triangles are similar. Since angles sum to $180^\\circ$, the third pair matches automatically. This is the most-used test.",
                  "zh": "AA（角-角）：若一个三角形的两个角分别等于另一个三角形的两个角，则两三角形相似。由于内角和为 $180^\\circ$，第三对角自动相等。这是最常用的判定。"
                },
                {
                  "en": "SAS~ (Side-Angle-Side): if two pairs of corresponding sides are proportional AND the included angles (between those sides) are equal, the triangles are similar.",
                  "zh": "SAS~（边-角-边）：若两对对应边成比例，且它们的夹角相等，则两三角形相似。"
                },
                {
                  "en": "SSS~ (Side-Side-Side): if all three pairs of corresponding sides are proportional (same ratio), the triangles are similar.",
                  "zh": "SSS~（边-边-边）：若三对对应边都成比例（比值相同），则两三角形相似。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Proving similarity with AA",
                "zh": "例题 2：用 AA 证明相似"
              },
              "problem": {
                "en": "In $\\triangle ABC$, $\\angle A = 52^\\circ$ and $\\angle B = 71^\\circ$. In $\\triangle DEF$, $\\angle D = 52^\\circ$ and $\\angle F = 57^\\circ$. Are the triangles similar? Explain.",
                "zh": "在 $\\triangle ABC$ 中，$\\angle A = 52^\\circ$，$\\angle B = 71^\\circ$。在 $\\triangle DEF$ 中，$\\angle D = 52^\\circ$，$\\angle F = 57^\\circ$。这两个三角形相似吗？请说明理由。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First find the missing angles. In $\\triangle ABC$: $\\angle C = 180^\\circ - 52^\\circ - 71^\\circ = 57^\\circ$. In $\\triangle DEF$: $\\angle E = 180^\\circ - 52^\\circ - 57^\\circ = 71^\\circ$.",
                  "zh": "先求出未知角。在 $\\triangle ABC$ 中：$\\angle C = 180^\\circ - 52^\\circ - 71^\\circ = 57^\\circ$。在 $\\triangle DEF$ 中：$\\angle E = 180^\\circ - 52^\\circ - 57^\\circ = 71^\\circ$。"
                },
                {
                  "type": "p",
                  "en": "Now match: $\\angle A = \\angle D = 52^\\circ$, $\\angle B = \\angle E = 71^\\circ$, $\\angle C = \\angle F = 57^\\circ$. Two pairs of equal angles are enough, so by AA, $\\triangle ABC \\sim \\triangle DEF$.",
                  "zh": "现在配对：$\\angle A = \\angle D = 52^\\circ$，$\\angle B = \\angle E = 71^\\circ$，$\\angle C = \\angle F = 57^\\circ$。两对角相等就足够了，所以由 AA 判定，$\\triangle ABC \\sim \\triangle DEF$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Using Similarity to Find Missing Lengths",
              "zh": "利用相似求未知长度"
            },
            {
              "type": "p",
              "en": "Once two triangles are known to be similar, set corresponding sides in a proportion and solve. Suppose $\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$, $BC = 9$, and the corresponding side $DE = 10$. To find $EF$, write $\\frac{AB}{DE} = \\frac{BC}{EF}$, that is $\\frac{6}{10} = \\frac{9}{EF}$. Cross-multiplying gives $6\\,EF = 90$, so $EF = 15$.",
              "zh": "一旦知道两个三角形相似，就把对应边写成比例并求解。设 $\\triangle ABC \\sim \\triangle DEF$，$AB = 6$，$BC = 9$，对应边 $DE = 10$。要求 $EF$，写出 $\\frac{AB}{DE} = \\frac{BC}{EF}$，即 $\\frac{6}{10} = \\frac{9}{EF}$。交叉相乘得 $6\\,EF = 90$，所以 $EF = 15$。"
            },
            {
              "type": "p",
              "en": "This is exactly how surveyors measure heights they cannot reach. On a sunny day near Provo, a $6$-foot person casts a $4$-foot shadow while a flagpole casts a $30$-foot shadow at the same moment. The sun's rays make equal angles, so the two right triangles are similar by AA: $\\frac{6}{4} = \\frac{h}{30}$, giving $h = 45$ feet.",
              "zh": "这正是测量员测量无法直接够到的高度的方法。在普若佛附近一个晴天，一个 $6$ 英尺高的人投下 $4$ 英尺的影子，与此同时一根旗杆投下 $30$ 英尺的影子。阳光的光线成相等的角，所以两个直角三角形由 AA 相似：$\\frac{6}{4} = \\frac{h}{30}$，得 $h = 45$ 英尺。"
            },
            {
              "type": "h3",
              "en": "The Triangle Proportionality (Side-Splitter) Theorem",
              "zh": "三角形比例（分边）定理"
            },
            {
              "type": "p",
              "en": "A line drawn parallel to one side of a triangle, cutting the other two sides, divides those two sides proportionally. Concretely, in $\\triangle ABC$ let a line meet side $AB$ at $D$ and side $AC$ at $E$ with $DE \\parallel BC$. Then:",
              "zh": "一条平行于三角形某一边、并与另外两边相交的直线，把这两边按比例分割。具体地说，在 $\\triangle ABC$ 中，一条直线在 $D$ 处与边 $AB$ 相交、在 $E$ 处与边 $AC$ 相交，且 $DE \\parallel BC$。那么："
            },
            {
              "type": "math",
              "tex": "\\frac{AD}{DB} = \\frac{AE}{EC}"
            },
            {
              "type": "p",
              "en": "The reason is similarity: because $DE \\parallel BC$, the corresponding angles $\\angle ADE = \\angle ABC$ and $\\angle AED = \\angle ACB$ are equal, so $\\triangle ADE \\sim \\triangle ABC$ by AA. For instance, if $AD = 4$, $DB = 6$, and $AE = 6$, then $\\frac{4}{6} = \\frac{6}{EC}$ gives $EC = 9$.",
              "zh": "其原因正是相似：因为 $DE \\parallel BC$，同位角 $\\angle ADE = \\angle ABC$、$\\angle AED = \\angle ACB$ 相等，所以由 AA 得 $\\triangle ADE \\sim \\triangle ABC$。例如，若 $AD = 4$、$DB = 6$、$AE = 6$，则 $\\frac{4}{6} = \\frac{6}{EC}$ 给出 $EC = 9$。"
            },
            {
              "type": "note",
              "en": "Test tip: the side-splitter theorem compares the two PIECES of each split side ($\\frac{AD}{DB} = \\frac{AE}{EC}$). A common error is to mix a piece with the whole side. If you prefer whole sides, use $\\frac{AD}{AB} = \\frac{AE}{AC}$ instead — but never combine a piece from one ratio with a whole from the other.",
              "zh": "考试提示：分边定理比较的是每条被分割边的两段（$\\frac{AD}{DB} = \\frac{AE}{EC}$）。常见错误是把一段和整条边混用。若你更喜欢用整条边，可改用 $\\frac{AD}{AB} = \\frac{AE}{AC}$——但绝不能把一个比中的“一段”和另一个比中的“整条边”混在一起。"
            },
            {
              "type": "h3",
              "en": "How Scale Factor Affects Perimeter and Area",
              "zh": "比例因子如何影响周长与面积"
            },
            {
              "type": "p",
              "en": "When you dilate a figure by scale factor $k$, every length is multiplied by $k$. Perimeter is a sum of lengths, so perimeter is multiplied by $k$. But area is a product of two lengths (length $\\times$ width, or $\\tfrac12 \\times$ base $\\times$ height), so area is multiplied by $k \\times k = k^2$.",
              "zh": "当你以比例因子 $k$ 位似一个图形时，每条长度都乘以 $k$。周长是长度之和，所以周长乘以 $k$。但面积是两个长度的乘积（长 $\\times$ 宽，或 $\\tfrac12 \\times$ 底 $\\times$ 高），所以面积乘以 $k \\times k = k^2$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Perimeter (and any length) scales by $k$.",
                  "zh": "周长（以及任何长度）按 $k$ 缩放。"
                },
                {
                  "en": "Area scales by $k^2$.",
                  "zh": "面积按 $k^2$ 缩放。"
                },
                {
                  "en": "Looking ahead: volume of a similar solid scales by $k^3$.",
                  "zh": "展望：相似立体的体积按 $k^3$ 缩放。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Scaling area",
                "zh": "例题 3：面积的缩放"
              },
              "problem": {
                "en": "A triangular garden plot has area $40$ square feet. A landscaper builds a similar plot using a scale factor of $k = 3$. What are the perimeter ratio and the new area?",
                "zh": "一块三角形花圃的面积为 $40$ 平方英尺。园艺师按比例因子 $k = 3$ 建造一块相似的花圃。周长之比是多少？新面积是多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The perimeter scales by $k = 3$, so the new perimeter is $3$ times the original. The area scales by $k^2 = 9$:",
                  "zh": "周长按 $k = 3$ 缩放，故新周长是原来的 $3$ 倍。面积按 $k^2 = 9$ 缩放："
                },
                {
                  "type": "math",
                  "tex": "40 \\times k^2 = 40 \\times 9 = 360 \\text{ square feet}"
                },
                {
                  "type": "p",
                  "en": "The new plot needs $360$ square feet — nine times the area even though the sides only tripled. This is why tripling a recipe's pan dimensions overflows the oven.",
                  "zh": "新花圃需要 $360$ 平方英尺——尽管边长只增大到 $3$ 倍，面积却是原来的 $9$ 倍。这也是为什么把烤盘的边长扩大 $3$ 倍会让烤箱装不下。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Point $P(3, -5)$ is dilated from the origin with scale factor $k = 4$. What is the image $P'$?",
                "zh": "点 $P(3, -5)$ 以原点为中心、比例因子 $k = 4$ 作位似。像 $P'$ 是什么？"
              },
              "choices": [
                "$(7, -1)$",
                "$(12, -20)$",
                "$(0.75, -1.25)$",
                "$(-12, 20)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "For a dilation centered at the origin, multiply each coordinate by $k$: $(4 \\cdot 3,\\; 4 \\cdot (-5)) = (12, -20)$. Adding $4$ to each coordinate (which would give $(7,-1)$) confuses scaling with a translation; dilation multiplies distances, it does not shift them.",
                "zh": "以原点为中心的位似，把每个坐标乘以 $k$：$(4 \\cdot 3,\\; 4 \\cdot (-5)) = (12, -20)$。把每个坐标加 $4$（会得到 $(7,-1)$）是把缩放误当成平移；位似是把距离相乘，而不是平移。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which single piece of information is enough, by itself, to conclude two triangles are similar?",
                "zh": "下列哪一条信息本身就足以断定两个三角形相似？"
              },
              "choices": [
                "Two pairs of corresponding angles are congruent",
                "One pair of corresponding sides is proportional",
                "The triangles have the same perimeter",
                "Two pairs of corresponding sides are proportional (angle not specified)"
              ],
              "answer": 0,
              "explanation": {
                "en": "Two pairs of equal angles (AA) forces the third pair equal and guarantees similarity. A single proportional side, or two proportional sides with no information about the angle between them, does not fix the shape; equal perimeter says nothing about shape at all.",
                "zh": "两对角相等（AA）会迫使第三对角也相等，从而保证相似。仅一对成比例的边，或两对成比例的边却不知道其夹角，都无法确定形状；周长相等则完全不能说明形状。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Given $\\triangle ABC \\sim \\triangle DEF$ with $AB = 8$, $DE = 12$, and $BC = 10$, find $EF$.",
                "zh": "已知 $\\triangle ABC \\sim \\triangle DEF$，$AB = 8$，$DE = 12$，$BC = 10$，求 $EF$。"
              },
              "choices": [
                "$6$",
                "$14$",
                "$15$",
                "$13.3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Corresponding sides are proportional: $\\frac{AB}{DE} = \\frac{BC}{EF}$, so $\\frac{8}{12} = \\frac{10}{EF}$, giving $8\\,EF = 120$ and $EF = 15$. Getting $6$ comes from shrinking instead of enlarging — here $DE > AB$, so the second triangle is larger and $EF$ must exceed $BC$.",
                "zh": "对应边成比例：$\\frac{AB}{DE} = \\frac{BC}{EF}$，故 $\\frac{8}{12} = \\frac{10}{EF}$，得 $8\\,EF = 120$，$EF = 15$。得到 $6$ 是把放大误算成缩小——这里 $DE > AB$，所以第二个三角形更大，$EF$ 必须大于 $BC$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In $\\triangle ABC$, point $D$ is on $AB$ and $E$ is on $AC$ with $DE \\parallel BC$. If $AD = 5$, $DB = 8$, and $AE = 7.5$, find $EC$. Give a number.",
                "zh": "在 $\\triangle ABC$ 中，$D$ 在 $AB$ 上，$E$ 在 $AC$ 上，且 $DE \\parallel BC$。若 $AD = 5$，$DB = 8$，$AE = 7.5$，求 $EC$。请填一个数。"
              },
              "answer": "12",
              "accept": [
                "12.0",
                "12 units"
              ],
              "explanation": {
                "en": "By the triangle proportionality theorem, $\\frac{AD}{DB} = \\frac{AE}{EC}$, so $\\frac{5}{8} = \\frac{7.5}{EC}$. Cross-multiplying: $5\\,EC = 60$, thus $EC = 12$.",
                "zh": "由三角形比例定理，$\\frac{AD}{DB} = \\frac{AE}{EC}$，故 $\\frac{5}{8} = \\frac{7.5}{EC}$。交叉相乘：$5\\,EC = 60$，因此 $EC = 12$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A rectangle is dilated by scale factor $k = 5$. How does its AREA change?",
                "zh": "一个矩形以比例因子 $k = 5$ 作位似。它的面积如何变化？"
              },
              "choices": [
                "Multiplied by $5$",
                "Multiplied by $10$",
                "Multiplied by $125$",
                "Multiplied by $25$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Area involves two dimensions, so it scales by $k^2 = 5^2 = 25$. Multiplying by $5$ only scales a single length (like the perimeter); $125 = 5^3$ would be the volume scale factor for a solid, not an area.",
                "zh": "面积涉及两个维度，所以按 $k^2 = 5^2 = 25$ 缩放。乘以 $5$ 只是缩放单个长度（如周长）；$125 = 5^3$ 是立体的体积缩放因子，而非面积。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A 6 ft tall student casts a 4 ft shadow at the same time a tree casts a 26 ft shadow. Using similar triangles, how tall is the tree, in feet? Give a number.",
                "zh": "一名身高 6 英尺的学生投下 4 英尺的影子，与此同时一棵树投下 26 英尺的影子。用相似三角形求树高（英尺）。请填一个数。"
              },
              "answer": "39",
              "accept": [
                "39.0",
                "39 ft",
                "39 feet"
              ],
              "explanation": {
                "en": "The sun's rays make equal angles, so the two right triangles are similar (AA): $\\frac{6}{4} = \\frac{h}{26}$. Then $4h = 156$, so $h = 39$ feet. The ratio of height to shadow is the same for both.",
                "zh": "阳光光线成相等的角，所以两个直角三角形相似（AA）：$\\frac{6}{4} = \\frac{h}{26}$。则 $4h = 156$，故 $h = 39$ 英尺。高度与影长之比对两者相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Triangle $A$ has sides $6, 9, 12$. Triangle $B$ has sides $8, 12, 16$. Which statement is correct?",
                "zh": "三角形 $A$ 的边长为 $6, 9, 12$。三角形 $B$ 的边长为 $8, 12, 16$。哪个说法正确？"
              },
              "choices": [
                "They are congruent",
                "They are similar by SSS~ with ratio $\\tfrac{3}{4}$",
                "They are not similar because the sides are different",
                "They are similar only if an angle is also given"
              ],
              "answer": 1,
              "explanation": {
                "en": "Compare corresponding sides: $\\frac{6}{8} = \\frac{9}{12} = \\frac{12}{16} = \\frac{3}{4}$. All three ratios match, so SSS~ applies and the triangles are similar with scale factor $\\tfrac{3}{4}$. They are not congruent because the sides are not equal, and SSS~ needs no angle information.",
                "zh": "比较对应边：$\\frac{6}{8} = \\frac{9}{12} = \\frac{12}{16} = \\frac{3}{4}$。三个比都相等，所以适用 SSS~，两三角形相似，比例因子为 $\\tfrac{3}{4}$。它们不全等，因为边长不相等；而 SSS~ 不需要任何角的信息。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: $\\triangle ABC \\sim \\triangle DEF$ with scale factor $\\frac{DEF}{ABC} = k$. The area of $\\triangle ABC$ is $28$ and the area of $\\triangle DEF$ is $252$. Find the scale factor $k$ (the ratio of a side of $DEF$ to the corresponding side of $ABC$). Give a number.",
                "zh": "荣誉挑战：$\\triangle ABC \\sim \\triangle DEF$，比例因子 $\\frac{DEF}{ABC} = k$。$\\triangle ABC$ 的面积为 $28$，$\\triangle DEF$ 的面积为 $252$。求比例因子 $k$（$DEF$ 的边与 $ABC$ 对应边之比）。请填一个数。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "k=3"
              ],
              "explanation": {
                "en": "Area scales by $k^2$, so $k^2 = \\frac{252}{28} = 9$. Taking the positive square root, $k = 3$. A common slip is to report the area ratio $9$ as the scale factor, but the side ratio is the square root of the area ratio.",
                "zh": "面积按 $k^2$ 缩放，所以 $k^2 = \\frac{252}{28} = 9$。取正平方根，$k = 3$。常见失误是把面积之比 $9$ 当作比例因子，但边之比是面积之比的平方根。"
              }
            }
          ]
        },
        {
          "id": "right-triangle-trigonometry",
          "title": "Right Triangle Trigonometry",
          "titleZh": "直角三角形三角学",
          "content": [
            {
              "type": "h2",
              "en": "Measuring the Unreachable: Angles, Ratios, and Right Triangles",
              "zh": "测量够不到的距离：角、比与直角三角形"
            },
            {
              "type": "p",
              "en": "How steep is the Snowbird ski run? How tall is the antenna on Ensign Peak? How far is a boat from shore? Each answer comes from a right triangle and a single powerful idea: in a right triangle, the ratios of the sides depend only on the angles. That is a direct consequence of similarity from the last lesson — all right triangles sharing a given acute angle are similar, so their side ratios are identical. Naming those fixed ratios gives us trigonometry.",
              "zh": "雪鸟滑雪道有多陡？埃岑峰上的天线有多高？一艘船离岸有多远？每个答案都来自一个直角三角形和一个强有力的想法：在直角三角形中，各边之比只取决于角度。这是上一课相似性的直接推论——所有共享某个给定锐角的直角三角形都相似，所以它们的边之比完全相同。给这些固定的比命名，就得到了三角学。"
            },
            {
              "type": "h3",
              "en": "The Pythagorean Theorem and Its Converse",
              "zh": "勾股定理及其逆定理"
            },
            {
              "type": "p",
              "en": "In any right triangle with legs $a$ and $b$ and hypotenuse $c$ (the side opposite the right angle, always the longest side), the areas of the squares on the legs add up to the area of the square on the hypotenuse:",
              "zh": "在任意直角三角形中，两条直角边为 $a$、$b$，斜边为 $c$（直角所对的边，总是最长的边），两直角边上正方形的面积之和等于斜边上正方形的面积："
            },
            {
              "type": "math",
              "tex": "a^2 + b^2 = c^2"
            },
            {
              "type": "p",
              "en": "For example, a triangle with legs $9$ and $12$ has hypotenuse $c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$. The converse is just as useful: if the three sides of a triangle satisfy $a^2 + b^2 = c^2$, then the triangle MUST be a right triangle, with the right angle opposite the longest side. This is how carpenters check for square corners using a 3-4-5 measurement.",
              "zh": "例如，直角边为 $9$ 和 $12$ 的三角形，斜边 $c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$。逆定理同样有用：若三角形的三边满足 $a^2 + b^2 = c^2$，则该三角形一定是直角三角形，直角与最长边相对。这正是木匠用 3-4-5 测量来检查直角的方法。"
            },
            {
              "type": "note",
              "en": "Common mistake: the hypotenuse is ALWAYS the longest side and always sits opposite the right angle. When using the converse, test whether (longest side)$^2$ equals the sum of the squares of the other two — plugging a leg in for $c$ will give a wrong verdict.",
              "zh": "常见错误：斜边总是最长的边，且总与直角相对。使用逆定理时，检验（最长边）$^2$ 是否等于另外两边平方之和——若把直角边当作 $c$ 代入，会得出错误的判断。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Using the converse",
                "zh": "例题 1：使用逆定理"
              },
              "problem": {
                "en": "Is a triangle with sides $7$, $24$, and $25$ a right triangle?",
                "zh": "边长为 $7$、$24$、$25$ 的三角形是直角三角形吗？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The longest side is $25$, so test whether $7^2 + 24^2 = 25^2$:",
                  "zh": "最长边是 $25$，所以检验 $7^2 + 24^2 = 25^2$ 是否成立："
                },
                {
                  "type": "math",
                  "tex": "49 + 576 = 625 = 25^2 \\;\\checkmark"
                },
                {
                  "type": "p",
                  "en": "The equation holds, so by the converse of the Pythagorean theorem the triangle is a right triangle, with the right angle opposite the side of length $25$.",
                  "zh": "等式成立，所以由勾股定理的逆定理，该三角形是直角三角形，直角与长为 $25$ 的边相对。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Special Right Triangles: 45-45-90 and 30-60-90",
              "zh": "特殊直角三角形：45-45-90 与 30-60-90"
            },
            {
              "type": "p",
              "en": "Two triangles appear so often that their exact side ratios are worth memorizing. Because they are fixed shapes, the ratios never change no matter the size.",
              "zh": "有两种三角形出现得如此频繁，值得记住它们精确的边之比。因为它们是固定的形状，无论大小，比值都不变。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "45-45-90 (isosceles right triangle): the two legs are equal, and the hypotenuse is a leg times $\\sqrt{2}$. Side ratio leg : leg : hypotenuse $= 1 : 1 : \\sqrt{2}$.",
                  "zh": "45-45-90（等腰直角三角形）：两条直角边相等，斜边等于直角边的 $\\sqrt{2}$ 倍。边之比 直角边 : 直角边 : 斜边 $= 1 : 1 : \\sqrt{2}$。"
                },
                {
                  "en": "30-60-90: the side opposite $30^\\circ$ is the shortest; the side opposite $60^\\circ$ is that short side times $\\sqrt{3}$; the hypotenuse is twice the short side. Ratio (opp $30^\\circ$) : (opp $60^\\circ$) : hyp $= 1 : \\sqrt{3} : 2$.",
                  "zh": "30-60-90：$30^\\circ$ 所对的边最短；$60^\\circ$ 所对的边是最短边的 $\\sqrt{3}$ 倍；斜边是最短边的 $2$ 倍。比值（$30^\\circ$ 对边）:（$60^\\circ$ 对边）: 斜边 $= 1 : \\sqrt{3} : 2$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "So a 45-45-90 triangle with legs $5$ has hypotenuse $5\\sqrt{2}$. A 30-60-90 triangle whose shortest side is $6$ has the other leg $6\\sqrt{3}$ and hypotenuse $12$.",
              "zh": "所以，直角边为 $5$ 的 45-45-90 三角形，斜边为 $5\\sqrt{2}$。最短边为 $6$ 的 30-60-90 三角形，另一直角边为 $6\\sqrt{3}$，斜边为 $12$。"
            },
            {
              "type": "note",
              "en": "Test tip: in a 30-60-90 triangle the $\\sqrt{3}$ goes with the LONGER leg (opposite $60^\\circ$), and the hypotenuse is exactly double the short side — never $\\sqrt{3}$ times it. Mixing up which leg carries the $\\sqrt{3}$ is the most common error on these.",
              "zh": "考试提示：在 30-60-90 三角形中，$\\sqrt{3}$ 配的是较长的直角边（$60^\\circ$ 所对），而斜边恰好是最短边的 $2$ 倍——绝不是 $\\sqrt{3}$ 倍。搞混哪条直角边带 $\\sqrt{3}$ 是这类题最常见的错误。"
            },
            {
              "type": "h3",
              "en": "The Trig Ratios: SOH-CAH-TOA",
              "zh": "三角比：SOH-CAH-TOA"
            },
            {
              "type": "p",
              "en": "For an acute angle $\\theta$ in a right triangle, label the three sides relative to $\\theta$: the opposite side (across from $\\theta$), the adjacent side (next to $\\theta$, not the hypotenuse), and the hypotenuse. The three primary trig ratios are:",
              "zh": "对于直角三角形中的锐角 $\\theta$，把三条边相对于 $\\theta$ 标记：对边（$\\theta$ 正对的边）、邻边（$\\theta$ 旁边、不是斜边的那条）、斜边。三个基本三角比是："
            },
            {
              "type": "math",
              "tex": "\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}, \\quad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}, \\quad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}"
            },
            {
              "type": "p",
              "en": "The mnemonic SOH-CAH-TOA records these: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. These ratios are well-defined precisely because all right triangles with the same angle $\\theta$ are similar — the ratio does not depend on the triangle's size, only on $\\theta$.",
              "zh": "口诀 SOH-CAH-TOA 记录了这些：正弦 = 对边/斜边，余弦 = 邻边/斜边，正切 = 对边/邻边。这些比之所以有确定的意义，正是因为所有具有相同角 $\\theta$ 的直角三角形都相似——比值不取决于三角形的大小，只取决于 $\\theta$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Solving for a missing side",
                "zh": "例题 2：求未知边"
              },
              "problem": {
                "en": "A right triangle has an acute angle of $37^\\circ$, and the hypotenuse is $20$. Find the length of the side opposite the $37^\\circ$ angle. (Use $\\sin 37^\\circ \\approx 0.602$.)",
                "zh": "一个直角三角形有一个 $37^\\circ$ 的锐角，斜边为 $20$。求 $37^\\circ$ 角所对边的长度。（用 $\\sin 37^\\circ \\approx 0.602$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "We know the hypotenuse and want the opposite side, so use sine (Opposite/Hypotenuse):",
                  "zh": "我们已知斜边、要求对边，所以用正弦（对边/斜边）："
                },
                {
                  "type": "math",
                  "tex": "\\sin 37^\\circ = \\frac{\\text{opp}}{20} \\;\\Rightarrow\\; \\text{opp} = 20 \\sin 37^\\circ \\approx 20(0.602) = 12.04"
                },
                {
                  "type": "p",
                  "en": "The opposite side is about $12.0$ units. Choosing sine (not cosine) is the key step: the side we want is across from the given angle.",
                  "zh": "对边约为 $12.0$ 个单位。选正弦（而非余弦）是关键一步：我们要求的边正对着给定的角。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Inverse Trig: Finding a Missing Angle",
              "zh": "反三角函数：求未知角"
            },
            {
              "type": "p",
              "en": "When you know two sides and want the angle, use an inverse trig function. If $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, then $\\theta = \\sin^{-1}\\!\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right)$. The functions $\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ (also written arcsin, arccos, arctan) take a ratio and return the angle that produces it.",
              "zh": "当你知道两条边、要求角时，使用反三角函数。若 $\\sin\\theta = \\frac{\\text{对边}}{\\text{斜边}}$，则 $\\theta = \\sin^{-1}\\!\\left(\\frac{\\text{对边}}{\\text{斜边}}\\right)$。函数 $\\sin^{-1}$、$\\cos^{-1}$、$\\tan^{-1}$（也写作 arcsin、arccos、arctan）输入一个比值，返回产生该比值的角。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Finding an angle",
                "zh": "例题 3：求角"
              },
              "problem": {
                "en": "A ramp rises $3$ feet over a horizontal run of $20$ feet. What angle does the ramp make with the ground? (Use $\\tan^{-1}(0.15) \\approx 8.5^\\circ$.)",
                "zh": "一条坡道在 $20$ 英尺的水平距离内上升 $3$ 英尺。坡道与地面所成的角是多少？（用 $\\tan^{-1}(0.15) \\approx 8.5^\\circ$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The rise ($3$) is opposite the angle and the run ($20$) is adjacent, so tangent is the right ratio:",
                  "zh": "上升量（$3$）是角的对边，水平距离（$20$）是邻边，所以正切是合适的比："
                },
                {
                  "type": "math",
                  "tex": "\\tan\\theta = \\frac{3}{20} = 0.15 \\;\\Rightarrow\\; \\theta = \\tan^{-1}(0.15) \\approx 8.5^\\circ"
                },
                {
                  "type": "p",
                  "en": "The ramp rises at about $8.5^\\circ$. For comparison, the ADA accessibility limit is about $4.8^\\circ$ (a 1:12 slope), so this ramp would be too steep for a wheelchair.",
                  "zh": "坡道以约 $8.5^\\circ$ 上升。作为对比，美国无障碍标准（ADA）的上限约为 $4.8^\\circ$（1:12 的坡度），所以这条坡道对轮椅来说太陡了。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: use a regular trig function when you know the ANGLE and want a side; use an INVERSE function ($\\sin^{-1}$, etc.) when you know two SIDES and want the angle. Also, $\\sin^{-1}$ means arcsine, not $\\frac{1}{\\sin}$.",
              "zh": "常见错误：当你知道角、要求边时，用普通三角函数；当你知道两条边、要求角时，用反函数（$\\sin^{-1}$ 等）。另外，$\\sin^{-1}$ 表示反正弦，而不是 $\\frac{1}{\\sin}$。"
            },
            {
              "type": "h3",
              "en": "The Cofunction Relationship",
              "zh": "余函数关系"
            },
            {
              "type": "p",
              "en": "In a right triangle the two acute angles $A$ and $B$ add to $90^\\circ$ (they are complementary), because the three angles sum to $180^\\circ$ and one is the right angle. The side opposite $A$ is the side adjacent to $B$, which leads to a lovely identity:",
              "zh": "在直角三角形中，两个锐角 $A$ 和 $B$ 之和为 $90^\\circ$（它们互余），因为三个角之和为 $180^\\circ$ 且其中一个是直角。$A$ 的对边正是 $B$ 的邻边，这引出一个优美的恒等式："
            },
            {
              "type": "math",
              "tex": "\\sin A = \\cos(90^\\circ - A) \\quad\\text{and}\\quad \\cos A = \\sin(90^\\circ - A)"
            },
            {
              "type": "p",
              "en": "This is why sine and cosine are called cofunctions — the \"co\" in cosine literally means \"complement.\" For instance, $\\sin 30^\\circ = \\cos 60^\\circ = \\tfrac{1}{2}$, and $\\sin 70^\\circ = \\cos 20^\\circ$.",
              "zh": "这正是正弦和余弦被称为余函数的原因——余弦中的“余（co）”字面意思就是“互余”。例如，$\\sin 30^\\circ = \\cos 60^\\circ = \\tfrac{1}{2}$，且 $\\sin 70^\\circ = \\cos 20^\\circ$。"
            },
            {
              "type": "h3",
              "en": "Angles of Elevation and Depression",
              "zh": "仰角与俯角"
            },
            {
              "type": "p",
              "en": "An angle of elevation is measured UP from the horizontal to a line of sight (looking up at a peak); an angle of depression is measured DOWN from the horizontal (looking down from a cliff to a boat). Because the horizontal lines at the observer and the object are parallel, the angle of elevation from the ground equals the angle of depression from above — they are alternate interior angles.",
              "zh": "仰角是从水平线向上量到视线的角（抬头看山峰）；俯角是从水平线向下量的角（从悬崖俯视一艘船）。由于观察者处和物体处的水平线互相平行，从地面测得的仰角等于从上方测得的俯角——它们是内错角。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 4: Angle of elevation",
                "zh": "例题 4：仰角"
              },
              "problem": {
                "en": "Standing $50$ feet from the base of a climbing wall, you measure the angle of elevation to the top as $58^\\circ$. How tall is the wall? (Use $\\tan 58^\\circ \\approx 1.600$.)",
                "zh": "站在攀岩墙底部 $50$ 英尺外，你测得到墙顶的仰角为 $58^\\circ$。墙有多高？（用 $\\tan 58^\\circ \\approx 1.600$。）"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The height is opposite the $58^\\circ$ angle and the $50$ ft distance is adjacent, so use tangent:",
                  "zh": "高度是 $58^\\circ$ 角的对边，$50$ 英尺的距离是邻边，所以用正切："
                },
                {
                  "type": "math",
                  "tex": "\\tan 58^\\circ = \\frac{h}{50} \\;\\Rightarrow\\; h = 50 \\tan 58^\\circ \\approx 50(1.600) = 80 \\text{ ft}"
                },
                {
                  "type": "p",
                  "en": "The wall is about $80$ feet tall. If your eye height above the ground matters, you would add it, but here we measure from eye level.",
                  "zh": "墙约 $80$ 英尺高。若需要考虑你眼睛离地面的高度，则应加上它，但这里我们从视线高度测量。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A right triangle has legs $8$ and $15$. What is the length of the hypotenuse?",
                "zh": "一个直角三角形的两条直角边为 $8$ 和 $15$。斜边长是多少？"
              },
              "choices": [
                "$17$",
                "$23$",
                "$\\sqrt{23}$",
                "$13$"
              ],
              "answer": 0,
              "explanation": {
                "en": "By the Pythagorean theorem, $c = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$. Adding the legs to get $23$ ignores that you must add the SQUARES and then take a square root, not add the sides directly.",
                "zh": "由勾股定理，$c = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$。把两直角边相加得 $23$ 忽略了必须先把平方相加再开方，而不是直接把边长相加。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a 30-60-90 triangle, the shortest side (opposite the $30^\\circ$ angle) is $7$. What is the hypotenuse?",
                "zh": "在一个 30-60-90 三角形中，最短边（$30^\\circ$ 角所对）为 $7$。斜边是多少？"
              },
              "choices": [
                "$7\\sqrt{3}$",
                "$7\\sqrt{2}$",
                "$14$",
                "$3.5$"
              ],
              "answer": 2,
              "explanation": {
                "en": "In a 30-60-90 triangle the ratio is $1 : \\sqrt{3} : 2$, so the hypotenuse is twice the short side: $2 \\times 7 = 14$. The value $7\\sqrt{3}$ is the LONGER leg (opposite $60^\\circ$), not the hypotenuse.",
                "zh": "在 30-60-90 三角形中比值为 $1 : \\sqrt{3} : 2$，所以斜边是最短边的 $2$ 倍：$2 \\times 7 = 14$。$7\\sqrt{3}$ 是较长的直角边（$60^\\circ$ 所对），不是斜边。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "In a right triangle, angle $\\theta$ has opposite side $9$, adjacent side $12$, and hypotenuse $15$. What is $\\cos\\theta$?",
                "zh": "在一个直角三角形中，角 $\\theta$ 的对边为 $9$，邻边为 $12$，斜边为 $15$。$\\cos\\theta$ 是多少？"
              },
              "choices": [
                "$\\frac{9}{15}$",
                "$\\frac{9}{12}$",
                "$\\frac{15}{12}$",
                "$\\frac{12}{15}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Cosine is Adjacent/Hypotenuse (CAH): $\\cos\\theta = \\frac{12}{15} = \\frac{4}{5}$. Using $\\frac{9}{15}$ gives sine (Opposite/Hypotenuse) by mistake, and $\\frac{9}{12}$ gives tangent.",
                "zh": "余弦是 邻边/斜边（CAH）：$\\cos\\theta = \\frac{12}{15} = \\frac{4}{5}$。用 $\\frac{9}{15}$ 是误算成正弦（对边/斜边），$\\frac{9}{12}$ 则是正切。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A right triangle has an acute angle of $40^\\circ$ and the side adjacent to it is $10$. Find the length of the side opposite the $40^\\circ$ angle. Use $\\tan 40^\\circ \\approx 0.839$ and round to the nearest tenth.",
                "zh": "一个直角三角形有一个 $40^\\circ$ 的锐角，它的邻边为 $10$。求 $40^\\circ$ 角所对边的长度。用 $\\tan 40^\\circ \\approx 0.839$，四舍五入到十分位。"
              },
              "answer": "8.4",
              "accept": [
                "8.39",
                "8.390",
                "8.4 units"
              ],
              "explanation": {
                "en": "Opposite and adjacent are involved, so use tangent: $\\tan 40^\\circ = \\frac{\\text{opp}}{10}$, so opp $= 10 \\tan 40^\\circ \\approx 10(0.839) = 8.39 \\approx 8.4$.",
                "zh": "涉及对边和邻边，所以用正切：$\\tan 40^\\circ = \\frac{\\text{对边}}{10}$，故对边 $= 10 \\tan 40^\\circ \\approx 10(0.839) = 8.39 \\approx 8.4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression is equal to $\\sin 25^\\circ$?",
                "zh": "下列哪个表达式等于 $\\sin 25^\\circ$？"
              },
              "choices": [
                "$\\cos 25^\\circ$",
                "$\\tan 25^\\circ$",
                "$\\cos 65^\\circ$",
                "$\\sin 65^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the cofunction relationship $\\sin A = \\cos(90^\\circ - A)$, so $\\sin 25^\\circ = \\cos(90^\\circ - 25^\\circ) = \\cos 65^\\circ$. Sine and cosine of the SAME angle are generally not equal, so $\\cos 25^\\circ$ is wrong.",
                "zh": "由余函数关系 $\\sin A = \\cos(90^\\circ - A)$，所以 $\\sin 25^\\circ = \\cos(90^\\circ - 25^\\circ) = \\cos 65^\\circ$。同一个角的正弦和余弦一般不相等，所以 $\\cos 25^\\circ$ 是错的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "From the top of a $60$-foot lighthouse, the angle of depression to a boat is $35^\\circ$. How far is the boat from the base of the lighthouse (horizontal distance), in feet? Use $\\tan 35^\\circ \\approx 0.700$ and round to the nearest whole foot.",
                "zh": "从一座 $60$ 英尺高的灯塔顶部，看一艘船的俯角为 $35^\\circ$。船离灯塔底部有多远（水平距离，英尺）？用 $\\tan 35^\\circ \\approx 0.700$，四舍五入到整英尺。"
              },
              "answer": "86",
              "accept": [
                "86 ft",
                "85.7",
                "86 feet"
              ],
              "explanation": {
                "en": "The angle of depression from the top equals the angle of elevation from the boat, $35^\\circ$. The $60$ ft height is opposite that angle and the horizontal distance $d$ is adjacent, so $\\tan 35^\\circ = \\frac{60}{d}$, giving $d = \\frac{60}{0.700} \\approx 85.7 \\approx 86$ ft.",
                "zh": "从顶部测得的俯角等于从船处测得的仰角，$35^\\circ$。$60$ 英尺的高度是该角的对边，水平距离 $d$ 是邻边，所以 $\\tan 35^\\circ = \\frac{60}{d}$，得 $d = \\frac{60}{0.700} \\approx 85.7 \\approx 86$ 英尺。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "You know a right triangle's opposite side is $5$ and its hypotenuse is $13$, and you want the angle $\\theta$. Which computation gives it?",
                "zh": "你知道一个直角三角形的对边为 $5$、斜边为 $13$，想求角 $\\theta$。下列哪个计算能得到它？"
              },
              "choices": [
                "$\\sin(5/13)$",
                "$\\cos^{-1}(5/13)$",
                "$\\tan^{-1}(5/13)$",
                "$\\sin^{-1}(5/13)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Opposite over hypotenuse is sine, and to recover the angle from a ratio you use the inverse: $\\theta = \\sin^{-1}(5/13)$. Writing $\\sin(5/13)$ applies sine to a ratio instead of inverting, and $\\cos^{-1}(5/13)$ would treat $5$ as the adjacent side.",
                "zh": "对边比斜边是正弦，而要从比值反求角，要用反函数：$\\theta = \\sin^{-1}(5/13)$。写 $\\sin(5/13)$ 是把正弦作用在比值上而非求反，$\\cos^{-1}(5/13)$ 则会把 $5$ 当作邻边。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: a square has side length $10$. Find the exact length of its diagonal. Give your answer in the form $a\\sqrt{b}$ (for example, 10sqrt(2)).",
                "zh": "荣誉挑战：一个正方形的边长为 $10$。求其对角线的精确长度。请以 $a\\sqrt{b}$ 的形式作答（例如 10sqrt(2)）。"
              },
              "answer": "10sqrt(2)",
              "accept": [
                "10\\sqrt{2}",
                "10√2",
                "10 sqrt 2",
                "10*sqrt(2)",
                "10root2"
              ],
              "explanation": {
                "en": "A diagonal splits the square into two 45-45-90 triangles whose legs are the sides of length $10$. The hypotenuse (the diagonal) is leg $\\times \\sqrt{2} = 10\\sqrt{2}$. Equivalently, $\\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}$.",
                "zh": "对角线把正方形分成两个 45-45-90 三角形，其直角边就是长为 $10$ 的边。斜边（对角线）等于直角边 $\\times \\sqrt{2} = 10\\sqrt{2}$。等价地，$\\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "circles",
      "title": "Unit 9: Circles",
      "titleZh": "第九单元：圆",
      "lessons": [
        {
          "id": "angles-and-segments-in-circles",
          "title": "Angles, Arcs, and Segments in Circles",
          "titleZh": "圆中的角、弧与线段",
          "content": [
            {
              "type": "h2",
              "en": "The Geometry Hidden in a Circle",
              "zh": "圆中隐藏的几何"
            },
            {
              "type": "p",
              "en": "Look at the round window of the Salt Lake Temple, the face of a clock, or the wheel of a mountain bike on a trail near Moab. Every one of these is a circle: the set of all points in a plane at a fixed distance (the radius) from a center point. A circle looks simple, but it hides a rich web of relationships between its angles, its arcs, and the line segments drawn inside and around it. In this lesson we build the vocabulary and the theorems that let us find unknown angles and lengths without measuring — using pure reasoning.",
              "zh": "看看盐湖城圣殿的圆形窗户、时钟的表面，或摩押附近山道上的一辆山地车轮。这些都是圆：平面内到某个中心点距离固定（这个距离叫半径）的所有点的集合。圆看起来简单，却隐藏着角、弧和圆内外所画线段之间丰富的关系网。本节课我们将建立词汇和定理，让我们无需测量、仅凭推理就能求出未知的角和长度。"
            },
            {
              "type": "h3",
              "en": "Circle Vocabulary",
              "zh": "圆的基本词汇"
            },
            {
              "type": "p",
              "en": "Fix a center point $O$. Every important part of a circle is named relative to $O$ and to the circle itself:",
              "zh": "固定一个圆心 $O$。圆中每个重要部分都是相对于 $O$ 和圆本身来命名的："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "A radius is a segment from the center $O$ to any point on the circle. Every radius of one circle has the same length $r$.",
                  "zh": "半径是从圆心 $O$ 到圆上任一点的线段。同一个圆的每条半径长度都相等，记作 $r$。"
                },
                {
                  "en": "A chord is a segment joining two points on the circle. If $A$ and $B$ are on the circle, then $\\overline{AB}$ is a chord.",
                  "zh": "弦是连接圆上两点的线段。若 $A$、$B$ 在圆上，则 $\\overline{AB}$ 是一条弦。"
                },
                {
                  "en": "A diameter is a chord that passes through the center. Its length is $2r$, the longest chord possible.",
                  "zh": "直径是经过圆心的弦。它的长度是 $2r$，是所有弦中最长的。"
                },
                {
                  "en": "An arc is a portion of the circle itself (a curved piece), named by its endpoints, such as arc $AB$.",
                  "zh": "弧是圆本身的一部分（一段曲线），用它的端点命名，例如弧 $AB$。"
                },
                {
                  "en": "A central angle is an angle whose vertex is the center $O$ and whose sides are two radii, such as $\\angle AOB$.",
                  "zh": "圆心角是顶点在圆心 $O$、两边为两条半径的角，例如 $\\angle AOB$。"
                },
                {
                  "en": "A secant is a line that crosses the circle at two points; a tangent is a line that touches the circle at exactly one point, called the point of tangency.",
                  "zh": "割线是与圆相交于两点的直线；切线是与圆恰好相切于一点的直线，这个点叫切点。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Arc Measure and the Central Angle",
              "zh": "弧的度数与圆心角"
            },
            {
              "type": "p",
              "en": "We measure an arc in degrees, not in length. The measure of a minor arc (the shorter one) equals the measure of its central angle. If central angle $\\angle AOB = 70^\\circ$, then the minor arc $AB$ measures $70^\\circ$. The whole circle is $360^\\circ$, so the major arc $AB$ (the long way around) measures $360^\\circ - 70^\\circ = 290^\\circ$. A semicircle — the arc cut off by a diameter — always measures $180^\\circ$.",
              "zh": "我们用度数而不是长度来度量弧。劣弧（较短的那条）的度数等于它所对圆心角的度数。若圆心角 $\\angle AOB = 70^\\circ$，则劣弧 $AB$ 的度数为 $70^\\circ$。整个圆是 $360^\\circ$，所以优弧 $AB$（绕远的那条）的度数为 $360^\\circ - 70^\\circ = 290^\\circ$。半圆——由直径截出的弧——总是 $180^\\circ$。"
            },
            {
              "type": "note",
              "en": "Do not confuse arc MEASURE (in degrees, tied to the central angle) with arc LENGTH (an actual distance, in units). Two circles can share an arc of $60^\\circ$ yet have very different arc lengths if their radii differ. We compute arc length in the next lesson.",
              "zh": "不要混淆弧的度数（以度为单位，与圆心角相关）和弧长（真实的距离，以长度单位计）。两个圆可以都有一段 $60^\\circ$ 的弧，但若半径不同，弧长会大不相同。弧长将在下一节计算。"
            },
            {
              "type": "h3",
              "en": "The Inscribed Angle Theorem",
              "zh": "圆周角定理"
            },
            {
              "type": "p",
              "en": "An inscribed angle has its vertex ON the circle and its two sides are chords. The arc lying in the interior of the angle is the intercepted arc. The Inscribed Angle Theorem says an inscribed angle is half of its intercepted arc. So if points $A$, $B$, $C$ lie on a circle and the arc $AC$ not containing $B$ measures $100^\\circ$, then the inscribed angle $\\angle ABC = 50^\\circ$.",
              "zh": "圆周角的顶点在圆上，两边都是弦。位于角内部的那段弧叫做所对弧（截取的弧）。圆周角定理说：圆周角等于它所对弧的一半。所以若 $A$、$B$、$C$ 在圆上，且不含 $B$ 的弧 $AC$ 度数为 $100^\\circ$，则圆周角 $\\angle ABC = 50^\\circ$。"
            },
            {
              "type": "math",
              "tex": "\\text{inscribed angle} = \\tfrac{1}{2}\\,(\\text{intercepted arc})"
            },
            {
              "type": "p",
              "en": "Two powerful consequences follow immediately. First, any inscribed angle that intercepts a semicircle (that is, an angle standing on a diameter) is a right angle, because it is half of $180^\\circ$. Second, two or more inscribed angles that intercept the SAME arc are equal to each other — they all equal half of that one arc.",
              "zh": "由此立刻得到两个有力的推论。第一，任何所对弧为半圆的圆周角（即以直径为一边所对的角）都是直角，因为它是 $180^\\circ$ 的一半。第二，所对同一条弧的两个或多个圆周角彼此相等——它们都等于那条弧的一半。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Angle in a semicircle",
                "zh": "例题 1：半圆所对的角"
              },
              "problem": {
                "en": "Points $A$, $B$, $C$ lie on a circle. $\\overline{AC}$ is a diameter, and inscribed angle $\\angle BAC = 34^\\circ$. Find $\\angle ABC$ and $\\angle BCA$.",
                "zh": "点 $A$、$B$、$C$ 在同一个圆上。$\\overline{AC}$ 是直径，圆周角 $\\angle BAC = 34^\\circ$。求 $\\angle ABC$ 和 $\\angle BCA$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Since $\\overline{AC}$ is a diameter, the inscribed angle $\\angle ABC$ intercepts the semicircle from $A$ to $C$, which measures $180^\\circ$. Therefore:",
                  "zh": "因为 $\\overline{AC}$ 是直径，圆周角 $\\angle ABC$ 所对的是从 $A$ 到 $C$ 的半圆，度数为 $180^\\circ$。因此："
                },
                {
                  "type": "math",
                  "tex": "\\angle ABC = \\tfrac{1}{2}(180^\\circ) = 90^\\circ"
                },
                {
                  "type": "p",
                  "en": "Triangle $ABC$ has angles summing to $180^\\circ$, so $\\angle BCA = 180^\\circ - 90^\\circ - 34^\\circ = 56^\\circ$.",
                  "zh": "三角形 $ABC$ 的内角和为 $180^\\circ$，所以 $\\angle BCA = 180^\\circ - 90^\\circ - 34^\\circ = 56^\\circ$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Inscribed Quadrilaterals",
              "zh": "圆内接四边形"
            },
            {
              "type": "p",
              "en": "If all four vertices of a quadrilateral lie on a circle, it is a cyclic (inscribed) quadrilateral. Its opposite angles are supplementary — they add to $180^\\circ$. The reason is elegant: each pair of opposite angles together intercepts the entire circle ($360^\\circ$), and each angle is half its arc, so together they are half of $360^\\circ$. For inscribed quadrilateral $ABCD$, $\\angle A + \\angle C = 180^\\circ$ and $\\angle B + \\angle D = 180^\\circ$.",
              "zh": "若四边形的四个顶点都在一个圆上，它就是圆内接四边形。它的对角互补——相加等于 $180^\\circ$。原因很优雅：每一对对角合起来所对的是整个圆（$360^\\circ$），而每个角是其所对弧的一半，所以两者之和是 $360^\\circ$ 的一半。对于圆内接四边形 $ABCD$，$\\angle A + \\angle C = 180^\\circ$，$\\angle B + \\angle D = 180^\\circ$。"
            },
            {
              "type": "h3",
              "en": "Congruent Chords and Tangent Lines",
              "zh": "相等的弦与切线"
            },
            {
              "type": "p",
              "en": "In one circle (or in congruent circles), two chords are congruent if and only if their arcs are congruent. Equal chords cut off equal arcs, and equal arcs are cut off by equal chords. A related fact: a chord is bisected by the radius (or diameter) that is perpendicular to it.",
              "zh": "在同一个圆（或全等的圆）中，两条弦相等当且仅当它们所对的弧相等。相等的弦截出相等的弧，相等的弧由相等的弦截出。相关的事实是：垂直于某条弦的半径（或直径）会平分这条弦。"
            },
            {
              "type": "p",
              "en": "A tangent line is perpendicular to the radius drawn to the point of tangency. If line $\\ell$ touches the circle only at point $T$ and $O$ is the center, then $\\overline{OT} \\perp \\ell$, so the angle between the radius and the tangent is exactly $90^\\circ$. This is the key to many right-triangle problems involving circles.",
              "zh": "切线垂直于过切点所作的半径。若直线 $\\ell$ 只与圆相切于点 $T$，$O$ 是圆心，则 $\\overline{OT} \\perp \\ell$，即半径与切线之间的夹角恰为 $90^\\circ$。这是许多与圆相关的直角三角形问题的关键。"
            },
            {
              "type": "note",
              "en": "Common mistake: assuming an inscribed angle equals its intercepted arc. It equals HALF the arc. Equally, a central angle equals its arc (not half). Always ask first: is the vertex at the center (central angle = arc) or on the circle (inscribed angle = half the arc)?",
              "zh": "常见错误：以为圆周角等于它所对的弧。它等于弧的一半。同样地，圆心角等于它所对的弧（不是一半）。先问自己：顶点在圆心（圆心角 = 弧）还是在圆上（圆周角 = 弧的一半）？"
            },
            {
              "type": "h3",
              "en": "Angles Formed by Chords, Secants, and Tangents",
              "zh": "由弦、割线、切线形成的角"
            },
            {
              "type": "p",
              "en": "Where the vertex sits determines the rule. There are three cases, all built from the same idea of averaging or differencing intercepted arcs:",
              "zh": "顶点的位置决定了用哪条规则。共有三种情形，都源于对所对弧求平均或求差的同一思想："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Vertex INSIDE the circle (two chords crossing): the angle equals HALF the SUM of the two intercepted arcs (the arc it faces and the arc its vertical angle faces).",
                  "zh": "顶点在圆内（两弦相交）：该角等于它所对的弧与它对顶角所对的弧之和的一半。"
                },
                {
                  "en": "Vertex ON the circle (a chord and a tangent meeting at the point of tangency): the angle equals HALF the intercepted arc — the same rule as an inscribed angle.",
                  "zh": "顶点在圆上（弦与切线在切点相交）：该角等于所对弧的一半——与圆周角规则相同。"
                },
                {
                  "en": "Vertex OUTSIDE the circle (two secants, two tangents, or a secant and a tangent): the angle equals HALF the DIFFERENCE of the two intercepted arcs (far arc minus near arc).",
                  "zh": "顶点在圆外（两条割线、两条切线，或一割线一切线）：该角等于两段所对弧之差的一半（远弧减近弧）。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Two chords crossing inside",
                "zh": "例题 2：圆内两弦相交"
              },
              "problem": {
                "en": "Chords $\\overline{AC}$ and $\\overline{BD}$ of a circle intersect at point $P$ inside the circle. Arc $AB = 40^\\circ$ and arc $CD = 96^\\circ$. Find the measure of $\\angle APB$.",
                "zh": "圆的两条弦 $\\overline{AC}$ 和 $\\overline{BD}$ 在圆内一点 $P$ 相交。弧 $AB = 40^\\circ$，弧 $CD = 96^\\circ$。求 $\\angle APB$ 的度数。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The vertex $P$ is inside the circle, so the angle is half the sum of the arc it intercepts ($AB$) and the arc intercepted by its vertical angle ($CD$).",
                  "zh": "顶点 $P$ 在圆内，所以该角等于它所对弧（$AB$）与其对顶角所对弧（$CD$）之和的一半。"
                },
                {
                  "type": "math",
                  "tex": "\\angle APB = \\tfrac{1}{2}(40^\\circ + 96^\\circ) = \\tfrac{1}{2}(136^\\circ) = 68^\\circ"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Two secants from an outside point",
                "zh": "例题 3：从圆外一点引出的两条割线"
              },
              "problem": {
                "en": "From an external point $P$, two secants are drawn. One passes through the circle at $A$ (near) then $B$ (far); the other passes through $C$ (near) then $D$ (far). The far arc $BD = 130^\\circ$ and the near arc $AC = 46^\\circ$. Find $\\angle P$.",
                "zh": "从圆外一点 $P$ 引出两条割线。一条依次交圆于 $A$（近）和 $B$（远）；另一条依次交圆于 $C$（近）和 $D$（远）。远弧 $BD = 130^\\circ$，近弧 $AC = 46^\\circ$。求 $\\angle P$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The vertex is outside the circle, so the angle is half the difference of the far arc and the near arc.",
                  "zh": "顶点在圆外，所以该角等于远弧与近弧之差的一半。"
                },
                {
                  "type": "math",
                  "tex": "\\angle P = \\tfrac{1}{2}(130^\\circ - 46^\\circ) = \\tfrac{1}{2}(84^\\circ) = 42^\\circ"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: label the vertex first (inside / on / outside), then choose sum, half-arc, or difference. A quick sanity check — an outside angle must be smaller than either intercepted arc, and an inside angle must be larger than either single arc it lies between.",
              "zh": "应试提示：先判断顶点位置（圆内 / 圆上 / 圆外），再决定用求和、半弧还是求差。快速检验——圆外角必定小于任一所对弧，圆内角必定大于它所夹的任一单条弧。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "In a circle with center $O$, the central angle $\\angle AOB = 88^\\circ$. What is the measure of the minor arc $AB$?",
                "zh": "在圆心为 $O$ 的圆中，圆心角 $\\angle AOB = 88^\\circ$。劣弧 $AB$ 的度数是多少？"
              },
              "choices": [
                "$44^\\circ$",
                "$88^\\circ$",
                "$176^\\circ$",
                "$272^\\circ$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A minor arc has the same measure as its central angle, so the arc is $88^\\circ$. Halving to $44^\\circ$ is the inscribed-angle rule, which does not apply to a central angle; $272^\\circ$ would be the major arc.",
                "zh": "劣弧的度数与它所对的圆心角相同，所以弧为 $88^\\circ$。取一半得 $44^\\circ$ 是圆周角的规则，不适用于圆心角；$272^\\circ$ 是优弧。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Points $A$, $B$, $C$ are on a circle. The intercepted arc $AC$ (not containing $B$) measures $130^\\circ$. What is the inscribed angle $\\angle ABC$?",
                "zh": "点 $A$、$B$、$C$ 在圆上。所对的弧 $AC$（不含 $B$）度数为 $130^\\circ$。圆周角 $\\angle ABC$ 是多少？"
              },
              "choices": [
                "$130^\\circ$",
                "$260^\\circ$",
                "$65^\\circ$",
                "$50^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "An inscribed angle is half its intercepted arc: $\\tfrac{1}{2}(130^\\circ) = 65^\\circ$. Using the full $130^\\circ$ treats it like a central angle; $50^\\circ$ would be half of the wrong arc.",
                "zh": "圆周角是所对弧的一半：$\\tfrac{1}{2}(130^\\circ) = 65^\\circ$。用整个 $130^\\circ$ 是把它当成圆心角；$50^\\circ$ 是取错弧的一半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Quadrilateral $ABCD$ is inscribed in a circle. If $\\angle A = 95^\\circ$, what is $\\angle C$?",
                "zh": "四边形 $ABCD$ 内接于一个圆。若 $\\angle A = 95^\\circ$，则 $\\angle C$ 是多少？"
              },
              "choices": [
                "$95^\\circ$",
                "$190^\\circ$",
                "$105^\\circ$",
                "$85^\\circ$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Opposite angles of a cyclic quadrilateral are supplementary: $\\angle C = 180^\\circ - 95^\\circ = 85^\\circ$. Assuming opposite angles are equal ($95^\\circ$) is the common error; supplementary means they sum to $180^\\circ$, not that they match.",
                "zh": "圆内接四边形的对角互补：$\\angle C = 180^\\circ - 95^\\circ = 85^\\circ$。以为对角相等（$95^\\circ$）是常见错误；互补是指相加为 $180^\\circ$，而非相等。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A line is tangent to a circle at point $T$, and $O$ is the center. What is the measure of the angle between radius $\\overline{OT}$ and the tangent line?",
                "zh": "一条直线与圆相切于点 $T$，$O$ 是圆心。半径 $\\overline{OT}$ 与切线之间的夹角是多少？"
              },
              "choices": [
                "$90^\\circ$",
                "$45^\\circ$",
                "$180^\\circ$",
                "It depends on the radius"
              ],
              "answer": 0,
              "explanation": {
                "en": "A tangent is always perpendicular to the radius at the point of tangency, so the angle is exactly $90^\\circ$, regardless of the radius length. This is why the answer cannot \"depend on the radius.\"",
                "zh": "切线在切点处总是垂直于半径，所以夹角恰为 $90^\\circ$，与半径长度无关。因此答案不会\"取决于半径\"。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Chords $\\overline{AC}$ and $\\overline{BD}$ intersect inside a circle at point $P$. If arc $AB = 54^\\circ$ and arc $CD = 110^\\circ$, find $\\angle APB$ in degrees (number only).",
                "zh": "弦 $\\overline{AC}$ 与 $\\overline{BD}$ 在圆内一点 $P$ 相交。若弧 $AB = 54^\\circ$，弧 $CD = 110^\\circ$，求 $\\angle APB$（只填数字，单位为度）。"
              },
              "answer": "82",
              "accept": [
                "82",
                "82.0",
                "82°",
                "82 degrees"
              ],
              "explanation": {
                "en": "A vertex inside the circle gives half the sum of the two intercepted arcs: $\\tfrac{1}{2}(54^\\circ + 110^\\circ) = \\tfrac{1}{2}(164^\\circ) = 82^\\circ$.",
                "zh": "顶点在圆内，等于两段所对弧之和的一半：$\\tfrac{1}{2}(54^\\circ + 110^\\circ) = \\tfrac{1}{2}(164^\\circ) = 82^\\circ$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "From an external point $P$, two secants intercept a far arc of $150^\\circ$ and a near arc of $58^\\circ$. Find $\\angle P$ in degrees (number only).",
                "zh": "从圆外一点 $P$ 引出的两条割线，所对远弧为 $150^\\circ$，近弧为 $58^\\circ$。求 $\\angle P$（只填数字，单位为度）。"
              },
              "answer": "46",
              "accept": [
                "46",
                "46.0",
                "46°",
                "46 degrees"
              ],
              "explanation": {
                "en": "A vertex outside the circle gives half the difference: $\\tfrac{1}{2}(150^\\circ - 58^\\circ) = \\tfrac{1}{2}(92^\\circ) = 46^\\circ$. Adding instead of subtracting would wrongly treat the vertex as inside.",
                "zh": "顶点在圆外，等于两弧之差的一半：$\\tfrac{1}{2}(150^\\circ - 58^\\circ) = \\tfrac{1}{2}(92^\\circ) = 46^\\circ$。若相加则错误地把顶点当成在圆内。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A Ferris wheel at the Utah State Fair has its center at point $O$. Two support cars sit at points $A$ and $B$ on the rim, with a rider at point $C$ also on the rim. The central angle $\\angle AOB = 120^\\circ$. If a rider at $C$ looks at $A$ and $B$, what is the inscribed angle $\\angle ACB$ (with $C$ on the major arc)?",
                "zh": "犹他州州博览会的摩天轮圆心在点 $O$。两个支撑吊舱位于轮缘上的点 $A$ 和 $B$，一名乘客在轮缘上的点 $C$。圆心角 $\\angle AOB = 120^\\circ$。若在 $C$ 的乘客望向 $A$ 和 $B$，圆周角 $\\angle ACB$（$C$ 在优弧上）是多少？"
              },
              "choices": [
                "$120^\\circ$",
                "$240^\\circ$",
                "$60^\\circ$",
                "$30^\\circ$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Arc $AB$ (the minor arc facing $C$) equals the central angle, $120^\\circ$. The inscribed angle at $C$ intercepts that arc, so $\\angle ACB = \\tfrac{1}{2}(120^\\circ) = 60^\\circ$. Using $120^\\circ$ forgets to halve; $30^\\circ$ halves twice.",
                "zh": "弧 $AB$（面向 $C$ 的劣弧）等于圆心角 $120^\\circ$。$C$ 处的圆周角所对该弧，所以 $\\angle ACB = \\tfrac{1}{2}(120^\\circ) = 60^\\circ$。用 $120^\\circ$ 是忘了取一半；$30^\\circ$ 是取了两次一半。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: In a circle, $\\overline{AB}$ is a diameter and $C$ is another point on the circle. A tangent line at $B$ makes an angle with chord $\\overline{BC}$. If arc $BC$ (not containing $A$) measures $76^\\circ$, find the angle between the tangent at $B$ and chord $\\overline{BC}$, in degrees (number only).",
                "zh": "荣誉挑战：在一个圆中，$\\overline{AB}$ 是直径，$C$ 是圆上另一点。$B$ 处的切线与弦 $\\overline{BC}$ 形成一个角。若弧 $BC$（不含 $A$）度数为 $76^\\circ$，求 $B$ 处切线与弦 $\\overline{BC}$ 之间的夹角（只填数字，单位为度）。"
              },
              "answer": "38",
              "accept": [
                "38",
                "38.0",
                "38°",
                "38 degrees"
              ],
              "explanation": {
                "en": "A tangent-chord angle (vertex on the circle) equals half its intercepted arc: $\\tfrac{1}{2}(76^\\circ) = 38^\\circ$. The diameter detail confirms the setup but the tangent-chord rule alone gives the answer; using the full $76^\\circ$ forgets to halve.",
                "zh": "切线-弦角（顶点在圆上）等于所对弧的一半：$\\tfrac{1}{2}(76^\\circ) = 38^\\circ$。直径信息用于确认图形，但仅凭切线-弦规则即可得出答案；用整个 $76^\\circ$ 是忘了取一半。"
              }
            }
          ]
        },
        {
          "id": "arc-length-sector-area-and-equations",
          "title": "Arc Length, Sector Area, and Equations of Circles",
          "titleZh": "弧长、扇形面积与圆的方程",
          "content": [
            {
              "type": "h2",
              "en": "From a Slice of Pizza to a Circle on the Coordinate Plane",
              "zh": "从一块披萨到坐标平面上的圆"
            },
            {
              "type": "p",
              "en": "When you cut a slice from a round pizza, you are cutting a sector — a pie-shaped region bounded by two radii and an arc. The crust along that slice is an arc, and its length depends on how wide you cut. In this lesson we turn the degree measures from the last lesson into real distances and areas, meet radians for the first time, and then place the circle onto the coordinate plane so we can describe it with an equation. This ties geometry directly back to the algebra of Secondary Math I.",
              "zh": "当你从圆形披萨上切下一块时，你切下的是一个扇形——由两条半径和一段弧围成的、像饼一样的区域。这块披萨边上的脆皮就是一段弧，它的长度取决于你切得多宽。本节课我们把上一节的度数转化为真实的距离和面积，首次认识弧度，然后把圆放到坐标平面上，用方程来描述它。这直接把几何与中学数学一（Secondary Math I）中的代数联系起来。"
            },
            {
              "type": "h3",
              "en": "Circumference and Arc Length",
              "zh": "周长与弧长"
            },
            {
              "type": "p",
              "en": "The distance around an entire circle is its circumference, $C = 2\\pi r$ (equivalently $\\pi d$). An arc is just a fraction of that whole trip around. If a central angle of $\\theta$ degrees cuts off an arc, the arc covers $\\tfrac{\\theta}{360}$ of the full circle, so its length is that fraction of the circumference:",
              "zh": "绕整个圆一周的距离叫周长，$C = 2\\pi r$（也等于 $\\pi d$）。弧只是这整整一圈的一部分。若一个 $\\theta$ 度的圆心角截出一段弧，这段弧占整圆的 $\\tfrac{\\theta}{360}$，所以它的长度就是周长的这个比例："
            },
            {
              "type": "math",
              "tex": "\\text{arc length} = \\frac{\\theta}{360} \\cdot 2\\pi r"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Length of an arc",
                "zh": "例题 1：弧长"
              },
              "problem": {
                "en": "A circle has radius $r = 9$ cm. Find the length of an arc cut off by a central angle of $80^\\circ$. Give an exact answer in terms of $\\pi$.",
                "zh": "一个圆半径 $r = 9$ 厘米。求由 $80^\\circ$ 圆心角截出的弧长。请用含 $\\pi$ 的精确形式作答。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The arc is $\\tfrac{80}{360} = \\tfrac{2}{9}$ of the whole circle. Multiply that fraction by the circumference $2\\pi(9) = 18\\pi$:",
                  "zh": "这段弧是整圆的 $\\tfrac{80}{360} = \\tfrac{2}{9}$。用这个比例乘以周长 $2\\pi(9) = 18\\pi$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{80}{360} \\cdot 18\\pi = \\frac{2}{9} \\cdot 18\\pi = 4\\pi \\text{ cm}"
                },
                {
                  "type": "p",
                  "en": "The arc length is $4\\pi$ cm, about $12.57$ cm.",
                  "zh": "弧长为 $4\\pi$ 厘米，约 $12.57$ 厘米。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Sector Area",
              "zh": "扇形面积"
            },
            {
              "type": "p",
              "en": "A sector is the region bounded by two radii and their arc — the pizza slice itself, not just its crust. By exactly the same fraction reasoning, a sector is $\\tfrac{\\theta}{360}$ of the whole circle's area $\\pi r^2$:",
              "zh": "扇形是由两条半径和它们之间的弧围成的区域——也就是那块披萨本身，而不只是边上的脆皮。用完全相同的比例推理，扇形是整圆面积 $\\pi r^2$ 的 $\\tfrac{\\theta}{360}$："
            },
            {
              "type": "math",
              "tex": "\\text{sector area} = \\frac{\\theta}{360} \\cdot \\pi r^2"
            },
            {
              "type": "note",
              "en": "Common mistake: mixing up the two formulas. Arc length uses the circumference $2\\pi r$ (units of length) and sector area uses $\\pi r^2$ (square units). Check your units: an answer in cm should come from a length formula, an answer in cm² from an area formula.",
              "zh": "常见错误：把两个公式弄混。弧长用周长 $2\\pi r$（长度单位），扇形面积用 $\\pi r^2$（平方单位）。检查单位：以厘米为单位的答案应来自长度公式，以平方厘米为单位的答案应来自面积公式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Area of a sector (a garden sprinkler)",
                "zh": "例题 2：扇形面积（花园洒水器）"
              },
              "problem": {
                "en": "A rotating sprinkler in a Provo backyard sprays water a distance of $12$ ft and sweeps through an angle of $150^\\circ$. What area of lawn does it water? Give an exact answer in terms of $\\pi$.",
                "zh": "普罗沃某后院的一个旋转洒水器可以喷水 $12$ 英尺远，扫过 $150^\\circ$ 的角。它浇灌的草坪面积是多少？请用含 $\\pi$ 的精确形式作答。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The watered region is a sector with $r = 12$ and $\\theta = 150^\\circ$. It is $\\tfrac{150}{360} = \\tfrac{5}{12}$ of the full circle of area $\\pi(12)^2 = 144\\pi$:",
                  "zh": "浇灌区域是一个 $r = 12$、$\\theta = 150^\\circ$ 的扇形。它是整圆面积 $\\pi(12)^2 = 144\\pi$ 的 $\\tfrac{150}{360} = \\tfrac{5}{12}$："
                },
                {
                  "type": "math",
                  "tex": "\\frac{150}{360} \\cdot 144\\pi = \\frac{5}{12} \\cdot 144\\pi = 60\\pi \\text{ ft}^2"
                },
                {
                  "type": "p",
                  "en": "The sprinkler waters $60\\pi \\approx 188.5$ square feet.",
                  "zh": "洒水器浇灌 $60\\pi \\approx 188.5$ 平方英尺。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "A First Look at Radian Measure (Honors)",
              "zh": "初识弧度（荣誉）"
            },
            {
              "type": "p",
              "en": "Degrees are a human invention — dividing a circle into $360$ parts is arbitrary. A more natural angle unit ties the angle directly to arc length. A radian is the angle whose arc length equals the radius. Since the full circumference $2\\pi r$ wraps $2\\pi$ radii around the circle, a full turn is $2\\pi$ radians, which means $360^\\circ = 2\\pi$ radians, or $180^\\circ = \\pi$ radians.",
              "zh": "度是人为的发明——把圆分成 $360$ 份是任意选的。有一种更自然的角度单位，把角直接与弧长联系起来。一弧度是弧长等于半径时所对的角。由于整条周长 $2\\pi r$ 能把 $2\\pi$ 个半径绕在圆上，所以一整圈是 $2\\pi$ 弧度，即 $360^\\circ = 2\\pi$ 弧度，或 $180^\\circ = \\pi$ 弧度。"
            },
            {
              "type": "p",
              "en": "This gives the defining relationship: the radian measure of a central angle equals its arc length divided by the radius, $\\theta = \\tfrac{s}{r}$, where $s$ is arc length. Rearranged, $s = r\\theta$ — a beautifully simple arc-length formula that works only when $\\theta$ is in radians. To convert, multiply degrees by $\\tfrac{\\pi}{180}$ to get radians, or multiply radians by $\\tfrac{180}{\\pi}$ to get degrees.",
              "zh": "这给出了定义关系：一个圆心角的弧度数等于它的弧长除以半径，$\\theta = \\tfrac{s}{r}$，其中 $s$ 是弧长。变形得 $s = r\\theta$——一个极其简洁的弧长公式，但只在 $\\theta$ 用弧度时成立。换算时，度乘以 $\\tfrac{\\pi}{180}$ 得弧度，弧度乘以 $\\tfrac{180}{\\pi}$ 得度。"
            },
            {
              "type": "note",
              "en": "Test tip: the formula $s = r\\theta$ requires $\\theta$ in radians. If you are given degrees, either convert to radians first, or use the fraction form $\\tfrac{\\theta}{360}\\cdot 2\\pi r$ instead. Plugging degrees straight into $r\\theta$ is a classic error.",
              "zh": "应试提示：公式 $s = r\\theta$ 要求 $\\theta$ 用弧度。若给的是度，要么先换算成弧度，要么改用比例形式 $\\tfrac{\\theta}{360}\\cdot 2\\pi r$。把度直接代入 $r\\theta$ 是典型错误。"
            },
            {
              "type": "h3",
              "en": "The Standard Equation of a Circle",
              "zh": "圆的标准方程"
            },
            {
              "type": "p",
              "en": "Now place a circle on the coordinate plane with center $(h, k)$ and radius $r$. A point $(x, y)$ lies on the circle exactly when its distance from the center equals $r$. The distance formula (itself the Pythagorean theorem) says $\\sqrt{(x-h)^2 + (y-k)^2} = r$. Squaring both sides removes the radical and gives the standard equation of a circle:",
              "zh": "现在把一个圆放在坐标平面上，圆心为 $(h, k)$，半径为 $r$。点 $(x, y)$ 在圆上，当且仅当它到圆心的距离等于 $r$。距离公式（本身就是勾股定理）给出 $\\sqrt{(x-h)^2 + (y-k)^2} = r$。两边平方去掉根号，得到圆的标准方程："
            },
            {
              "type": "math",
              "tex": "(x-h)^2 + (y-k)^2 = r^2"
            },
            {
              "type": "p",
              "en": "For example, $(x-3)^2 + (y+2)^2 = 25$ is a circle with center $(3, -2)$ and radius $\\sqrt{25} = 5$. Watch the signs: the center coordinate is the number that makes each parenthesis zero, so $(y+2)^2 = (y-(-2))^2$ gives $k = -2$.",
              "zh": "例如，$(x-3)^2 + (y+2)^2 = 25$ 是圆心为 $(3, -2)$、半径为 $\\sqrt{25} = 5$ 的圆。注意符号：圆心坐标是使每个括号为零的数，所以 $(y+2)^2 = (y-(-2))^2$ 给出 $k = -2$。"
            },
            {
              "type": "note",
              "en": "Common mistake: sign and square errors. In $(x-h)^2 + (y-k)^2 = r^2$, the center is $(+h, +k)$ but the equation shows MINUS signs, so $(x+5)^2$ means $h = -5$. Also, the right side is $r^2$, not $r$: if it equals $49$, the radius is $7$, not $49$.",
              "zh": "常见错误：符号与平方错误。在 $(x-h)^2 + (y-k)^2 = r^2$ 中，圆心是 $(+h, +k)$，但方程里是减号，所以 $(x+5)^2$ 表示 $h = -5$。另外，右边是 $r^2$，不是 $r$：若它等于 $49$，则半径是 $7$，不是 $49$。"
            },
            {
              "type": "h3",
              "en": "From General Form: Completing the Square",
              "zh": "从一般式：配方法"
            },
            {
              "type": "p",
              "en": "A circle is often written in general form, like $x^2 + y^2 - 6x + 8y - 11 = 0$, where the center and radius are hidden. To reveal them, complete the square separately for the $x$-terms and the $y$-terms. Group them, then add the square of half each linear coefficient to both sides.",
              "zh": "圆常写成一般式，例如 $x^2 + y^2 - 6x + 8y - 11 = 0$，其中圆心和半径被隐藏了。要把它们找出来，就分别对 $x$ 项和 $y$ 项配方。先把它们分组，再把每个一次项系数一半的平方加到方程两边。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Completing the square to find center and radius",
                "zh": "例题 3：用配方法求圆心与半径"
              },
              "problem": {
                "en": "Find the center and radius of the circle $x^2 + y^2 - 6x + 8y - 11 = 0$.",
                "zh": "求圆 $x^2 + y^2 - 6x + 8y - 11 = 0$ 的圆心与半径。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Group the $x$-terms and $y$-terms, and move the constant to the right:",
                  "zh": "把 $x$ 项和 $y$ 项分组，并把常数移到右边："
                },
                {
                  "type": "math",
                  "tex": "(x^2 - 6x) + (y^2 + 8y) = 11"
                },
                {
                  "type": "p",
                  "en": "Half of $-6$ is $-3$, squared is $9$; half of $8$ is $4$, squared is $16$. Add $9$ and $16$ to both sides:",
                  "zh": "$-6$ 的一半是 $-3$，平方是 $9$；$8$ 的一半是 $4$，平方是 $16$。把 $9$ 和 $16$ 加到两边："
                },
                {
                  "type": "math",
                  "tex": "(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16"
                },
                {
                  "type": "p",
                  "en": "Each group is now a perfect square, and the right side is $36$:",
                  "zh": "现在每一组都是完全平方，右边是 $36$："
                },
                {
                  "type": "math",
                  "tex": "(x - 3)^2 + (y + 4)^2 = 36"
                },
                {
                  "type": "p",
                  "en": "The center is $(3, -4)$ and the radius is $\\sqrt{36} = 6$.",
                  "zh": "圆心是 $(3, -4)$，半径是 $\\sqrt{36} = 6$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A circle has radius $10$ in. What is the length of an arc cut off by a central angle of $36^\\circ$?",
                "zh": "一个圆半径为 $10$ 英寸。$36^\\circ$ 圆心角截出的弧长是多少？"
              },
              "choices": [
                "$2\\pi$ in",
                "$20\\pi$ in",
                "$\\pi$ in",
                "$36\\pi$ in"
              ],
              "answer": 0,
              "explanation": {
                "en": "Arc length is $\\tfrac{36}{360}\\cdot 2\\pi(10) = \\tfrac{1}{10}\\cdot 20\\pi = 2\\pi$ in. Using $\\pi r^2$ instead of $2\\pi r$ would give an area, and forgetting the $\\tfrac{36}{360}$ fraction gives the full circumference $20\\pi$.",
                "zh": "弧长是 $\\tfrac{36}{360}\\cdot 2\\pi(10) = \\tfrac{1}{10}\\cdot 20\\pi = 2\\pi$ 英寸。用 $\\pi r^2$ 代替 $2\\pi r$ 会得到面积，忘记 $\\tfrac{36}{360}$ 这个比例则得到整条周长 $20\\pi$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What are the center and radius of the circle $(x+4)^2 + (y-7)^2 = 81$?",
                "zh": "圆 $(x+4)^2 + (y-7)^2 = 81$ 的圆心和半径是什么？"
              },
              "choices": [
                "Center $(4, -7)$, radius $81$",
                "Center $(-4, 7)$, radius $9$",
                "Center $(4, 7)$, radius $9$",
                "Center $(-4, -7)$, radius $81$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The minus signs in the standard form mean $(x+4)^2 = (x-(-4))^2$, so $h = -4$, and $(y-7)^2$ gives $k = 7$. The radius is $\\sqrt{81} = 9$, not $81$. Reading the signs directly off the parentheses is the common trap.",
                "zh": "标准式中的减号意味着 $(x+4)^2 = (x-(-4))^2$，所以 $h = -4$，而 $(y-7)^2$ 给出 $k = 7$。半径是 $\\sqrt{81} = 9$，不是 $81$。直接照括号里的符号读圆心是常见陷阱。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Convert $135^\\circ$ to radians.",
                "zh": "把 $135^\\circ$ 换算成弧度。"
              },
              "choices": [
                "$\\dfrac{3\\pi}{4}$",
                "$\\dfrac{4\\pi}{3}$",
                "$\\dfrac{3\\pi}{2}$",
                "$\\dfrac{\\pi}{135}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Multiply by $\\tfrac{\\pi}{180}$: $135\\cdot\\tfrac{\\pi}{180} = \\tfrac{135\\pi}{180} = \\tfrac{3\\pi}{4}$. Flipping the fraction to $\\tfrac{4\\pi}{3}$ comes from multiplying by $\\tfrac{180}{\\pi}$ by mistake, which converts the wrong direction.",
                "zh": "乘以 $\\tfrac{\\pi}{180}$：$135\\cdot\\tfrac{\\pi}{180} = \\tfrac{135\\pi}{180} = \\tfrac{3\\pi}{4}$。写成 $\\tfrac{4\\pi}{3}$ 是误乘了 $\\tfrac{180}{\\pi}$，方向弄反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A circle has radius $6$ m. Find the area of a sector with central angle $120^\\circ$. Give an exact answer in terms of $\\pi$ (for example, 5\\pi), in square meters.",
                "zh": "一个圆半径为 $6$ 米。求圆心角为 $120^\\circ$ 的扇形面积。请用含 $\\pi$ 的精确形式作答（例如 5\\pi），单位为平方米。"
              },
              "answer": "12\\pi",
              "accept": [
                "12\\pi",
                "12π",
                "12 pi",
                "12pi"
              ],
              "explanation": {
                "en": "Sector area is $\\tfrac{120}{360}\\cdot\\pi(6)^2 = \\tfrac{1}{3}\\cdot 36\\pi = 12\\pi$ m². Using $2\\pi r$ instead of $\\pi r^2$ would find an arc length, not an area.",
                "zh": "扇形面积是 $\\tfrac{120}{360}\\cdot\\pi(6)^2 = \\tfrac{1}{3}\\cdot 36\\pi = 12\\pi$ 平方米。用 $2\\pi r$ 代替 $\\pi r^2$ 会算出弧长而不是面积。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write the standard equation of the circle with center $(-1, 5)$ and radius $4$. Use the form (x-h)^2+(y-k)^2=r^2 with numbers filled in.",
                "zh": "写出圆心为 $(-1, 5)$、半径为 $4$ 的圆的标准方程。用填好数字的 (x-h)^2+(y-k)^2=r^2 形式。"
              },
              "answer": "(x+1)^2+(y-5)^2=16",
              "accept": [
                "(x+1)^2+(y-5)^2=16",
                "(x+1)^2 + (y-5)^2 = 16",
                "(y-5)^2+(x+1)^2=16"
              ],
              "explanation": {
                "en": "With $h = -1$, $x - h = x - (-1) = x + 1$; with $k = 5$, $y - k = y - 5$; and $r^2 = 4^2 = 16$. A frequent slip is writing $(x-1)^2$ from the center $-1$ or leaving the right side as $4$ instead of $16$.",
                "zh": "当 $h = -1$ 时，$x - h = x - (-1) = x + 1$；当 $k = 5$ 时，$y - k = y - 5$；且 $r^2 = 4^2 = 16$。常见失误是由圆心 $-1$ 写成 $(x-1)^2$，或把右边写成 $4$ 而不是 $16$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "After completing the square, the circle $x^2 + y^2 + 10x - 4y + 20 = 0$ becomes $(x+5)^2 + (y-2)^2 = 9$. What is its radius?",
                "zh": "配方后，圆 $x^2 + y^2 + 10x - 4y + 20 = 0$ 变为 $(x+5)^2 + (y-2)^2 = 9$。它的半径是多少？"
              },
              "choices": [
                "$9$",
                "$81$",
                "$3$",
                "$4.5$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The right side is $r^2 = 9$, so $r = \\sqrt{9} = 3$. Reporting $9$ forgets to take the square root, and $81$ mistakenly squares again.",
                "zh": "右边是 $r^2 = 9$，所以 $r = \\sqrt{9} = 3$。答 $9$ 是忘了开方，$81$ 是又错误地平方了一次。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A bicycle wheel has radius $0.35$ m. Using $s = r\\theta$ with $\\theta$ in radians, how far does the bike travel when the wheel turns through exactly $4$ radians? Give the answer in meters (decimal is fine).",
                "zh": "一个自行车轮半径为 $0.35$ 米。用 $s = r\\theta$（$\\theta$ 为弧度），当车轮恰好转过 $4$ 弧度时，自行车前进多远？请以米作答（可用小数）。"
              },
              "answer": "1.4",
              "accept": [
                "1.4",
                "1.40",
                "1.4 m",
                "1.4 meters"
              ],
              "explanation": {
                "en": "Arc length $s = r\\theta = 0.35 \\times 4 = 1.4$ m. The formula $s = r\\theta$ works directly here because $\\theta$ is already in radians — no degree conversion needed.",
                "zh": "弧长 $s = r\\theta = 0.35 \\times 4 = 1.4$ 米。这里 $s = r\\theta$ 可直接使用，因为 $\\theta$ 已是弧度——无需换算度数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: The equation $x^2 + y^2 - 8x + 6y + 25 = 0$ is claimed to be a circle. After completing the square you get $(x-4)^2 + (y+3)^2 = 0$. What does this represent?",
                "zh": "荣誉挑战：有人说方程 $x^2 + y^2 - 8x + 6y + 25 = 0$ 是一个圆。配方后你得到 $(x-4)^2 + (y+3)^2 = 0$。这代表什么？"
              },
              "choices": [
                "A circle of radius $5$",
                "A circle of radius $25$",
                "No graph at all (empty set)",
                "A single point, $(4, -3)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Since $r^2 = 0$, the radius is $0$: the only point whose distance from $(4,-3)$ is zero is $(4,-3)$ itself — a degenerate \"point circle.\" If the right side were negative there would be no graph; a positive value would give a true circle.",
                "zh": "因为 $r^2 = 0$，半径为 $0$：到 $(4,-3)$ 距离为零的点只有 $(4,-3)$ 本身——这是退化的\"点圆\"。若右边为负则无图像；若为正才是真正的圆。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "probability",
      "title": "Unit 10: Probability",
      "titleZh": "第十单元：概率",
      "lessons": [
        {
          "id": "probability-and-conditional-probability",
          "title": "Probability, Two-Way Tables, and Conditional Probability",
          "titleZh": "概率、双向表与条件概率",
          "content": [
            {
              "type": "h2",
              "en": "Measuring How Likely Things Are",
              "zh": "衡量事情发生的可能性"
            },
            {
              "type": "p",
              "en": "Every time a weather app says \"40% chance of rain over the Wasatch Front\" or a coach estimates a free-throw shooter's success, someone is using probability — a number between $0$ and $1$ that measures how likely an event is. A probability of $0$ means impossible, $1$ means certain, and $0.5$ means equally likely to happen or not. In this lesson we build the language of sample spaces and events, learn to combine and condition probabilities, and read them directly out of the two-way tables you meet in statistics.",
              "zh": "每当天气应用说\"沃萨奇前沿地区有 40% 的降雨概率\"，或教练估计一名球员的罚球命中率时，都是在使用概率——一个介于 $0$ 与 $1$ 之间、用来衡量事件可能性大小的数。概率为 $0$ 表示不可能，为 $1$ 表示必然，为 $0.5$ 表示发生与不发生的可能性相等。本节课我们将建立样本空间与事件的语言，学习如何组合概率、如何求条件概率，并直接从统计中常见的双向表里读出这些概率。"
            },
            {
              "type": "h3",
              "en": "Sample Spaces and Events",
              "zh": "样本空间与事件"
            },
            {
              "type": "p",
              "en": "The sample space $S$ is the set of all possible outcomes of an experiment. An event is any subset of the sample space. When every outcome is equally likely, the probability of an event $A$ is the ratio",
              "zh": "样本空间 $S$ 是一次试验所有可能结果构成的集合。事件是样本空间的任意子集。当每个结果都等可能时，事件 $A$ 的概率就是下面这个比值："
            },
            {
              "type": "math",
              "tex": "P(A) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}} = \\frac{n(A)}{n(S)}"
            },
            {
              "type": "p",
              "en": "For example, rolling one fair die has sample space $S = \\{1,2,3,4,5,6\\}$. The event \"roll an even number\" is $A = \\{2,4,6\\}$, so $P(A) = \\frac{3}{6} = \\frac{1}{2}$. The complement of $A$, written $A^{c}$ or \"not $A$\", contains every outcome not in $A$, and $P(A^{c}) = 1 - P(A)$.",
              "zh": "例如，掷一枚均匀骰子，样本空间为 $S = \\{1,2,3,4,5,6\\}$。事件\"掷出偶数\"是 $A = \\{2,4,6\\}$，所以 $P(A) = \\frac{3}{6} = \\frac{1}{2}$。$A$ 的补集，记作 $A^{c}$ 或\"非 $A$\"，包含所有不属于 $A$ 的结果，且 $P(A^{c}) = 1 - P(A)$。"
            },
            {
              "type": "note",
              "en": "A probability can never be negative or greater than $1$. If you compute a \"probability\" of $\\frac{7}{6}$ or $-0.2$, you have made an arithmetic error — most often by counting an outcome twice or dividing by the wrong total.",
              "zh": "概率永远不会是负数，也不会大于 $1$。如果你算出的\"概率\"是 $\\frac{7}{6}$ 或 $-0.2$，那一定是算错了——最常见的原因是把某个结果数了两次，或者除以了错误的总数。"
            },
            {
              "type": "h3",
              "en": "The Addition Rule: P(A or B)",
              "zh": "加法法则：P(A 或 B)"
            },
            {
              "type": "p",
              "en": "The event \"$A$ or $B$\" happens when at least one of the two occurs. If we simply add $P(A)$ and $P(B)$, any outcome that is in BOTH events gets counted twice, so we subtract the overlap:",
              "zh": "事件\"$A$ 或 $B$\"表示两者中至少有一个发生。如果我们直接把 $P(A)$ 与 $P(B)$ 相加，那么同时属于两个事件的结果就会被数两次，因此要减去重叠的部分："
            },
            {
              "type": "math",
              "tex": "P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)"
            },
            {
              "type": "p",
              "en": "Two events are mutually exclusive (disjoint) if they cannot happen at the same time — their overlap is empty, so $P(A \\text{ and } B) = 0$ and the rule simplifies to $P(A \\text{ or } B) = P(A) + P(B)$. Drawing a single card that is \"a king or a queen\" is mutually exclusive; \"a king or a heart\" is not, because the king of hearts belongs to both.",
              "zh": "如果两个事件不可能同时发生，就称它们互斥（不相交）——它们的重叠为空，所以 $P(A \\text{ and } B) = 0$，法则简化为 $P(A \\text{ or } B) = P(A) + P(B)$。抽一张牌\"是 K 或是 Q\"是互斥的；\"是 K 或是红心\"则不是，因为红心 K 同时属于这两个事件。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Overlapping events",
                "zh": "例题 1：有重叠的事件"
              },
              "problem": {
                "en": "One card is drawn from a standard 52-card deck. Find the probability that it is a heart or a face card (J, Q, K).",
                "zh": "从一副标准的 52 张牌中抽出一张。求它是红心或是花牌（J、Q、K）的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "There are $13$ hearts, so $P(\\text{heart}) = \\frac{13}{52}$. There are $12$ face cards, so $P(\\text{face}) = \\frac{12}{52}$. The overlap is the face cards that are also hearts — J, Q, K of hearts — which is $3$ cards, so $P(\\text{heart and face}) = \\frac{3}{52}$.",
                  "zh": "共有 $13$ 张红心，所以 $P(\\text{红心}) = \\frac{13}{52}$。共有 $12$ 张花牌，所以 $P(\\text{花牌}) = \\frac{12}{52}$。重叠部分是既是花牌又是红心的牌——红心的 J、Q、K——共 $3$ 张，所以 $P(\\text{红心且花牌}) = \\frac{3}{52}$。"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{heart or face}) = \\frac{13}{52} + \\frac{12}{52} - \\frac{3}{52} = \\frac{22}{52} = \\frac{11}{26}"
                },
                {
                  "type": "p",
                  "en": "The probability is $\\frac{11}{26} \\approx 0.42$. Forgetting to subtract the $3$ overlapping cards would wrongly give $\\frac{25}{52}$.",
                  "zh": "概率为 $\\frac{11}{26} \\approx 0.42$。如果忘了减去重叠的 $3$ 张牌，就会错误地得到 $\\frac{25}{52}$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Two-Way Frequency Tables",
              "zh": "双向频数表"
            },
            {
              "type": "p",
              "en": "A two-way table sorts data by two categorical variables at once. Suppose a survey of $200$ students at a Salt Lake City high school records whether each student rides the bus and whether each plays a sport:",
              "zh": "双向表同时按两个分类变量整理数据。假设对盐湖城一所高中 $200$ 名学生的调查记录了每名学生是否乘校车、是否参加体育运动："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Plays a sport AND rides the bus: $40$; plays a sport, no bus: $60$.",
                  "zh": "参加运动且乘校车：$40$ 人；参加运动、不乘校车：$60$ 人。"
                },
                {
                  "en": "No sport AND rides the bus: $50$; no sport, no bus: $50$.",
                  "zh": "不参加运动且乘校车：$50$ 人；不参加运动、不乘校车：$50$ 人。"
                },
                {
                  "en": "Row and column totals: $100$ play a sport, $100$ do not; $90$ ride the bus, $110$ do not; grand total $200$.",
                  "zh": "行列合计：$100$ 人参加运动，$100$ 人不参加；$90$ 人乘校车，$110$ 人不乘；总计 $200$ 人。"
                }
              ]
            },
            {
              "type": "p",
              "en": "To find the probability that a randomly chosen student both plays a sport and rides the bus, divide the cell count by the grand total: $P(\\text{sport and bus}) = \\frac{40}{200} = 0.20$. A \"joint\" probability comes from one cell; a \"marginal\" probability comes from a row or column total, such as $P(\\text{sport}) = \\frac{100}{200} = 0.50$.",
              "zh": "要求随机选到的学生既参加运动又乘校车的概率，用该单元格的人数除以总人数：$P(\\text{运动且乘车}) = \\frac{40}{200} = 0.20$。\"联合\"概率来自某一个单元格；\"边际\"概率来自某一行或某一列的合计，例如 $P(\\text{运动}) = \\frac{100}{200} = 0.50$。"
            },
            {
              "type": "h3",
              "en": "Conditional Probability: P(A | B)",
              "zh": "条件概率：P(A | B)"
            },
            {
              "type": "p",
              "en": "Conditional probability answers \"given that $B$ has happened, how likely is $A$?\" The vertical bar is read \"given.\" We restrict attention to only the outcomes where $B$ is true, then ask what fraction of those also have $A$:",
              "zh": "条件概率回答的是\"已知 $B$ 已经发生，$A$ 有多大可能？\"竖线读作\"在……条件下\"。我们把注意力限制在 $B$ 为真的那些结果上，再问其中有多大比例同时满足 $A$："
            },
            {
              "type": "math",
              "tex": "P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)} = \\frac{n(A \\text{ and } B)}{n(B)}"
            },
            {
              "type": "p",
              "en": "In a two-way table this is wonderfully direct: the condition $B$ tells you which row or column to look in, and that total becomes your new denominator. Using the table above, \"given a student rides the bus, the probability they play a sport\" restricts to the $90$ bus riders, of whom $40$ play a sport: $P(\\text{sport} \\mid \\text{bus}) = \\frac{40}{90} \\approx 0.44$.",
              "zh": "在双向表中这一点非常直接：条件 $B$ 告诉你该看哪一行或哪一列，那个合计就成了新的分母。用上面的表，\"已知学生乘校车，他参加运动的概率\"就限制在 $90$ 名乘车学生中，其中 $40$ 人参加运动：$P(\\text{运动} \\mid \\text{乘车}) = \\frac{40}{90} \\approx 0.44$。"
            },
            {
              "type": "note",
              "en": "Order matters: $P(A \\mid B)$ and $P(B \\mid A)$ are usually different because they use different denominators. From the table, $P(\\text{sport} \\mid \\text{bus}) = \\frac{40}{90}$ but $P(\\text{bus} \\mid \\text{sport}) = \\frac{40}{100}$. Confusing these two is one of the most common exam mistakes — always identify the condition first and use its total as the denominator.",
              "zh": "顺序很重要：$P(A \\mid B)$ 与 $P(B \\mid A)$ 通常不相等，因为它们用的分母不同。由表可知，$P(\\text{运动} \\mid \\text{乘车}) = \\frac{40}{90}$，而 $P(\\text{乘车} \\mid \\text{运动}) = \\frac{40}{100}$。混淆这两者是考试中最常见的错误之一——一定要先找出条件，并把它的合计作为分母。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading a condition from the table",
                "zh": "例题 2：从表中读取条件概率"
              },
              "problem": {
                "en": "Using the survey table above, find the probability that a student does NOT play a sport, given that they do NOT ride the bus.",
                "zh": "用上面的调查表，求在学生不乘校车的条件下，他不参加运动的概率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The condition is \"does not ride the bus,\" so restrict to the $110$ non-riders. Among them, the number who also do not play a sport is $50$.",
                  "zh": "条件是\"不乘校车\"，所以限制在 $110$ 名不乘车的学生中。其中同时不参加运动的有 $50$ 人。"
                },
                {
                  "type": "math",
                  "tex": "P(\\text{no sport} \\mid \\text{no bus}) = \\frac{50}{110} = \\frac{5}{11} \\approx 0.45"
                },
                {
                  "type": "p",
                  "en": "The probability is about $0.45$. Dividing by the grand total $200$ instead of the condition total $110$ would be the classic error.",
                  "zh": "概率约为 $0.45$。如果误用总人数 $200$ 而不是条件合计 $110$ 作分母，就是那种经典的错误。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Testing Independence",
              "zh": "检验独立性"
            },
            {
              "type": "p",
              "en": "Two events are independent when knowing that one happened does not change the probability of the other. Formally, $A$ and $B$ are independent exactly when",
              "zh": "当已知一个事件发生并不改变另一个事件的概率时，这两个事件相互独立。严格地说，$A$ 与 $B$ 独立当且仅当"
            },
            {
              "type": "math",
              "tex": "P(A \\mid B) = P(A) \\quad\\Longleftrightarrow\\quad P(A \\text{ and } B) = P(A)\\cdot P(B)"
            },
            {
              "type": "p",
              "en": "In our survey, $P(\\text{sport}) = 0.50$ but $P(\\text{sport} \\mid \\text{bus}) \\approx 0.44$. Because these differ, playing a sport and riding the bus are NOT independent — bus riders are slightly less likely to play a sport than students overall. When the conditional equals the unconditional probability, the two variables are unrelated in the data.",
              "zh": "在我们的调查中，$P(\\text{运动}) = 0.50$，但 $P(\\text{运动} \\mid \\text{乘车}) \\approx 0.44$。由于二者不相等，参加运动与乘校车并不独立——乘车的学生比全体学生略微更不倾向于参加运动。当条件概率等于无条件概率时，两个变量在数据中就是不相关的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: Checking independence",
                "zh": "例题 3：检验独立性"
              },
              "problem": {
                "en": "A bag holds tiles that are either red or blue and either dotted or plain. $P(\\text{red}) = 0.6$, $P(\\text{dotted}) = 0.5$, and $P(\\text{red and dotted}) = 0.3$. Are color and pattern independent?",
                "zh": "一个袋子里的瓷砖或红或蓝、或有点或无点。$P(\\text{红}) = 0.6$，$P(\\text{有点}) = 0.5$，$P(\\text{红且有点}) = 0.3$。颜色与图案是否独立？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Test whether $P(\\text{red and dotted})$ equals $P(\\text{red})\\cdot P(\\text{dotted})$:",
                  "zh": "检验 $P(\\text{红且有点})$ 是否等于 $P(\\text{红})\\cdot P(\\text{有点})$："
                },
                {
                  "type": "math",
                  "tex": "P(\\text{red})\\cdot P(\\text{dotted}) = 0.6 \\times 0.5 = 0.30 = P(\\text{red and dotted})"
                },
                {
                  "type": "p",
                  "en": "Because the product of the separate probabilities equals the joint probability, color and pattern ARE independent — knowing a tile is red tells you nothing new about whether it is dotted.",
                  "zh": "由于两个单独概率的乘积等于联合概率，颜色与图案是独立的——知道一块瓷砖是红色，对它是否有点没有提供任何新信息。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Interpreting probabilities in context is a habit worth building: a $0.44$ conditional is not \"wrong\" or \"unfair,\" it simply describes a tendency in this particular group. Real decisions — insurance rates, medical screening, sports analytics — all rest on carefully separating joint, marginal, and conditional probabilities.",
              "zh": "在具体情境中解读概率是一个值得培养的习惯：$0.44$ 的条件概率并不\"错误\"或\"不公平\"，它只是描述了这一特定群体中的一种倾向。现实中的决策——保险费率、医学筛查、体育数据分析——都建立在仔细区分联合概率、边际概率与条件概率的基础上。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A fair die is rolled once. What is the probability of rolling a number less than $3$?",
                "zh": "掷一枚均匀骰子一次。掷出小于 $3$ 的数的概率是多少？"
              },
              "choices": [
                "$\\frac{1}{6}$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{2}$",
                "$\\frac{2}{3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The outcomes less than $3$ are $\\{1, 2\\}$, which is $2$ of the $6$ equally likely outcomes, giving $\\frac{2}{6} = \\frac{1}{3}$. Thinking \"less than 3\" includes the $3$ itself would wrongly count three outcomes and give $\\frac{1}{2}$.",
                "zh": "小于 $3$ 的结果是 $\\{1, 2\\}$，即 $6$ 个等可能结果中的 $2$ 个，得 $\\frac{2}{6} = \\frac{1}{3}$。若把\"小于 3\"误认为包含 $3$ 本身，就会数成三个结果而错得 $\\frac{1}{2}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "For events $A$ and $B$, $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \\text{ and } B) = 0.2$. Find $P(A \\text{ or } B)$.",
                "zh": "对事件 $A$ 与 $B$，$P(A) = 0.5$，$P(B) = 0.4$，$P(A \\text{ and } B) = 0.2$。求 $P(A \\text{ or } B)$。"
              },
              "choices": [
                "$0.9$",
                "$1.1$",
                "$0.7$",
                "$0.2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "By the addition rule, $P(A \\text{ or } B) = 0.5 + 0.4 - 0.2 = 0.7$. Adding without subtracting the overlap gives $0.9$, and would even be impossible in cases where it exceeds $1$.",
                "zh": "由加法法则，$P(A \\text{ or } B) = 0.5 + 0.4 - 0.2 = 0.7$。若相加时不减去重叠部分，会得到 $0.9$，在某些情形下甚至会超过 $1$ 而变得不可能。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Two events are mutually exclusive. Which statement must be true?",
                "zh": "两个事件互斥。下列哪项一定成立？"
              },
              "choices": [
                "$P(A \\text{ and } B) = P(A)\\cdot P(B)$",
                "$P(A \\mid B) = P(A)$",
                "$P(A) + P(B) = 1$",
                "$P(A \\text{ and } B) = 0$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Mutually exclusive means the events cannot occur together, so their joint probability is $0$. The multiplication and independence statements describe independent events (a different idea), and there is no rule forcing the two probabilities to sum to $1$.",
                "zh": "互斥意味着两个事件不能同时发生，所以它们的联合概率为 $0$。乘法与独立性的说法描述的是独立事件（另一个概念），也没有任何法则要求两概率之和为 $1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The probability that it snows in Park City on a given January day is $0.35$. What is the probability that it does NOT snow that day? Give a decimal.",
                "zh": "一月某天帕克城下雪的概率是 $0.35$。当天不下雪的概率是多少？请用小数作答。"
              },
              "answer": "0.65",
              "accept": [
                ".65",
                "0.650",
                "13/20"
              ],
              "explanation": {
                "en": "The complement rule gives $P(\\text{no snow}) = 1 - 0.35 = 0.65$. The event and its complement together must account for all possibilities, so their probabilities sum to $1$.",
                "zh": "由补集法则，$P(\\text{不下雪}) = 1 - 0.35 = 0.65$。事件与它的补集合起来涵盖所有可能，所以两者概率之和为 $1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "In a class of $30$ students, $18$ take Spanish and, of those, $12$ also play an instrument. Given a student takes Spanish, what is the probability they play an instrument? Give a fraction in lowest terms.",
                "zh": "在 $30$ 名学生的班级中，$18$ 人学西班牙语，其中 $12$ 人同时会演奏乐器。已知某学生学西班牙语，他会演奏乐器的概率是多少？请用最简分数作答。"
              },
              "answer": "2/3",
              "accept": [
                "0.667",
                "0.67",
                "12/18",
                "4/6"
              ],
              "explanation": {
                "en": "The condition \"takes Spanish\" restricts to the $18$ Spanish students; $12$ of them play an instrument, so $P = \\frac{12}{18} = \\frac{2}{3}$. Dividing by the whole class of $30$ ignores the condition and is the error to avoid.",
                "zh": "条件\"学西班牙语\"把范围限制在 $18$ 名西班牙语学生中；其中 $12$ 人会演奏乐器，所以 $P = \\frac{12}{18} = \\frac{2}{3}$。若除以全班 $30$ 人，就忽略了条件，这正是要避免的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A two-way table records $200$ people by gym membership and daily exercise. $80$ have a membership; $60$ of those exercise daily. Overall, $90$ people exercise daily. Are \"has a membership\" and \"exercises daily\" independent?",
                "zh": "一张双向表按健身房会员身份与每日锻炼记录了 $200$ 人。$80$ 人有会员；其中 $60$ 人每日锻炼。总体上有 $90$ 人每日锻炼。\"有会员\"与\"每日锻炼\"是否独立？"
              },
              "choices": [
                "Yes, because $P(\\text{exercise} \\mid \\text{member}) = P(\\text{exercise})$",
                "No, because $P(\\text{exercise} \\mid \\text{member}) = 0.75$ but $P(\\text{exercise}) = 0.45$",
                "Yes, because both probabilities are less than $1$",
                "Cannot be determined from the table"
              ],
              "answer": 1,
              "explanation": {
                "en": "Among members, $P(\\text{exercise} \\mid \\text{member}) = \\frac{60}{80} = 0.75$, while overall $P(\\text{exercise}) = \\frac{90}{200} = 0.45$. Since these differ, the events are not independent — being a member raises the chance of daily exercise. Claiming they are equal misreads the two totals.",
                "zh": "在会员中，$P(\\text{锻炼} \\mid \\text{会员}) = \\frac{60}{80} = 0.75$，而总体 $P(\\text{锻炼}) = \\frac{90}{200} = 0.45$。二者不相等，所以事件不独立——成为会员提高了每日锻炼的可能性。认为两者相等是误读了两个合计。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A survey of $150$ people asks about coffee and tea drinking: $90$ drink coffee, $70$ drink tea, and $40$ drink both. How many drink coffee or tea (at least one)? Give a whole number.",
                "zh": "对 $150$ 人的调查询问喝咖啡与喝茶的情况：$90$ 人喝咖啡，$70$ 人喝茶，$40$ 人两者都喝。喝咖啡或喝茶（至少一种）的有多少人？请用整数作答。"
              },
              "answer": "120",
              "accept": [
                "120 people"
              ],
              "explanation": {
                "en": "By the addition rule with counts, $90 + 70 - 40 = 120$. Subtracting the $40$ who were counted in both groups prevents double counting; adding $90 + 70 = 160$ would exceed even the survey size.",
                "zh": "用计数形式的加法法则，$90 + 70 - 40 = 120$。减去被两组都数进去的 $40$ 人可避免重复计数；若相加得 $90 + 70 = 160$，甚至会超过被调查的总人数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A medical test is given to $1000$ people. $100$ actually have the disease; of those, $90$ test positive. Of the $900$ healthy people, $90$ also test positive. Given a person tests positive, what is the probability they actually have the disease?",
                "zh": "荣誉挑战：对 $1000$ 人做一项医学检测。$100$ 人确实患病，其中 $90$ 人检测呈阳性。在 $900$ 名健康者中，也有 $90$ 人检测呈阳性。已知某人检测呈阳性，他确实患病的概率是多少？"
              },
              "choices": [
                "$0.90$",
                "$0.09$",
                "$0.50$",
                "$0.18$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Positives total $90 + 90 = 180$, of whom $90$ truly have the disease, so $P(\\text{disease} \\mid \\text{positive}) = \\frac{90}{180} = 0.50$. The tempting $0.90$ is actually $P(\\text{positive} \\mid \\text{disease})$ — reversing the condition. Because the disease is rare, half of all positives are false alarms.",
                "zh": "阳性者共 $90 + 90 = 180$ 人，其中真正患病的有 $90$ 人，所以 $P(\\text{患病} \\mid \\text{阳性}) = \\frac{90}{180} = 0.50$。诱人的 $0.90$ 其实是 $P(\\text{阳性} \\mid \\text{患病})$——把条件弄反了。由于疾病罕见，所有阳性者中有一半是假阳性。"
              }
            }
          ]
        },
        {
          "id": "counting-and-compound-probability",
          "title": "Counting, Combinations, and Compound Probability",
          "titleZh": "计数、组合与复合事件概率",
          "content": [
            {
              "type": "h2",
              "en": "When Listing Every Outcome Is Impossible",
              "zh": "当无法逐一列出所有结果时"
            },
            {
              "type": "p",
              "en": "How many different ways can a Utah high-school ASB set up a slate of officers, or a coach choose $5$ starters from $12$ players, or a phone unlock code be formed? These counts are far too large to list by hand, yet probability demands them: to find $P(A) = \\frac{n(A)}{n(S)}$ we must count outcomes efficiently. This lesson develops the fundamental counting principle, distinguishes permutations from combinations, and uses them to compute the probability of compound events — then closes with an honors look at expected value.",
              "zh": "犹他州一所高中的学生会能排出多少种不同的干部名单？教练从 $12$ 名球员中挑选 $5$ 名首发有多少种方式？一个手机解锁密码可以有多少种组成方式？这些数目太大，无法手工一一列出，但概率却离不开它们：要求 $P(A) = \\frac{n(A)}{n(S)}$，我们必须高效地计数。本节课将建立基本计数原理，区分排列与组合，用它们计算复合事件的概率，最后以对期望值的荣誉级介绍收尾。"
            },
            {
              "type": "h3",
              "en": "The Fundamental Counting Principle",
              "zh": "基本计数原理"
            },
            {
              "type": "p",
              "en": "If a first choice can be made in $m$ ways and, for each of those, a second choice can be made in $n$ ways, then the two choices together can be made in $m \\times n$ ways. This extends to any number of stages — just multiply the number of options at each stage.",
              "zh": "如果第一步有 $m$ 种选择方式，而对其中每一种，第二步都有 $n$ 种选择方式，那么两步一起就有 $m \\times n$ 种方式。这可推广到任意多步——只要把每一步的选项数相乘即可。"
            },
            {
              "type": "p",
              "en": "For example, a lunch special with $4$ sandwiches, $3$ sides, and $2$ drinks offers $4 \\times 3 \\times 2 = 24$ different meals. A $4$-digit PIN where digits may repeat has $10 \\times 10 \\times 10 \\times 10 = 10^4 = 10{,}000$ possibilities.",
              "zh": "例如，一份午餐套餐有 $4$ 种三明治、$3$ 种配菜、$2$ 种饮料，共提供 $4 \\times 3 \\times 2 = 24$ 种不同的搭配。一个允许数字重复的 $4$ 位密码有 $10 \\times 10 \\times 10 \\times 10 = 10^4 = 10{,}000$ 种可能。"
            },
            {
              "type": "h3",
              "en": "Permutations: Order Matters",
              "zh": "排列：顺序有关"
            },
            {
              "type": "p",
              "en": "A permutation is an arrangement in which order matters — first, second, and third place are all different. The number of ways to arrange $r$ items chosen from $n$ distinct items is",
              "zh": "排列是一种顺序有关的安排——第一名、第二名、第三名各不相同。从 $n$ 个不同的元素中取出 $r$ 个进行排列的方式数为"
            },
            {
              "type": "math",
              "tex": "_nP_r = \\frac{n!}{(n-r)!}"
            },
            {
              "type": "p",
              "en": "Here $n!$ (\"$n$ factorial\") means $n \\times (n-1) \\times \\cdots \\times 2 \\times 1$, and by definition $0! = 1$. For example, the number of ways to award gold, silver, and bronze among $8$ sprinters is $_8P_3 = \\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336$.",
              "zh": "这里 $n!$（读作\"$n$ 的阶乘\"）表示 $n \\times (n-1) \\times \\cdots \\times 2 \\times 1$，并规定 $0! = 1$。例如，在 $8$ 名短跑选手中颁发金、银、铜牌的方式数为 $_8P_3 = \\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336$。"
            },
            {
              "type": "h3",
              "en": "Combinations: Order Does Not Matter",
              "zh": "组合：顺序无关"
            },
            {
              "type": "p",
              "en": "A combination is a selection in which order does NOT matter — a committee of Ann, Ben, Carla is the same group no matter the order named. The count is the permutation count divided by the $r!$ orderings of the chosen group:",
              "zh": "组合是一种顺序无关的选取——由 Ann、Ben、Carla 组成的委员会，无论以什么顺序念出，都是同一组人。其数目等于排列数除以所选组的 $r!$ 种排序方式："
            },
            {
              "type": "math",
              "tex": "_nC_r = \\frac{n!}{r!\\,(n-r)!} = \\frac{_nP_r}{r!}"
            },
            {
              "type": "p",
              "en": "For example, the number of $5$-player starting lineups from $12$ players is $_{12}C_5 = \\frac{12!}{5!\\,7!} = 792$. Because the five starters form an unordered group, we use a combination, not a permutation.",
              "zh": "例如，从 $12$ 名球员中选出 $5$ 人首发阵容的方式数为 $_{12}C_5 = \\frac{12!}{5!\\,7!} = 792$。因为五名首发是一个无序的组，所以用组合而非排列。"
            },
            {
              "type": "note",
              "en": "Decision guide: ask \"if I swap the order of the chosen items, is it a different outcome?\" If yes (rankings, seatings, passwords, awarding distinct offices), use a PERMUTATION. If no (committees, teams, hands of cards, pizza toppings), use a COMBINATION. Because we divide by $r!$, a combination count is always $\\le$ the matching permutation count.",
              "zh": "判断方法：问自己\"如果把所选元素的顺序调换，会得到不同的结果吗？\"如果会（名次、座位、密码、担任不同职务），用排列；如果不会（委员会、球队、一手牌、比萨配料），用组合。由于要除以 $r!$，组合数总是 $\\le$ 相应的排列数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Permutation vs combination",
                "zh": "例题 1：排列与组合的区别"
              },
              "problem": {
                "en": "From $10$ club members, (a) how many ways can a president, vice-president, and treasurer be chosen? (b) How many ways can a $3$-person social committee be chosen?",
                "zh": "在 $10$ 名社团成员中，（a）选出主席、副主席和司库共有多少种方式？（b）选出一个 $3$ 人社交委员会有多少种方式？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) The three offices are distinct, so order matters — use a permutation:",
                  "zh": "（a）三个职务各不相同，所以顺序有关——用排列："
                },
                {
                  "type": "math",
                  "tex": "_{10}P_3 = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720"
                },
                {
                  "type": "p",
                  "en": "(b) A committee is an unordered group, so order does not matter — use a combination:",
                  "zh": "（b）委员会是一个无序的组，所以顺序无关——用组合："
                },
                {
                  "type": "math",
                  "tex": "_{10}C_3 = \\frac{10!}{3!\\,7!} = \\frac{720}{6} = 120"
                },
                {
                  "type": "p",
                  "en": "The same three people can fill the offices in $3! = 6$ orders, which is exactly why the committee count is $6$ times smaller.",
                  "zh": "同样的三个人可以按 $3! = 6$ 种顺序担任这些职务，这正是委员会数目小 $6$ 倍的原因。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Multiplication Rule for Independent Events",
              "zh": "独立事件的乘法法则"
            },
            {
              "type": "p",
              "en": "When two events are independent — one outcome does not affect the other — the probability that both happen is the product of their probabilities:",
              "zh": "当两个事件独立时——一个结果不影响另一个——两者都发生的概率等于它们概率的乘积："
            },
            {
              "type": "math",
              "tex": "P(A \\text{ and } B) = P(A) \\cdot P(B)"
            },
            {
              "type": "p",
              "en": "For example, flipping heads twice on a fair coin has probability $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$. The general rule, valid even when events are dependent, replaces $P(B)$ with the conditional $P(B \\mid A)$: $P(A \\text{ and } B) = P(A)\\cdot P(B \\mid A)$.",
              "zh": "例如，用均匀硬币连续掷出两次正面的概率是 $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$。即使事件相关，也成立的一般法则是把 $P(B)$ 换成条件概率 $P(B \\mid A)$：$P(A \\text{ and } B) = P(A)\\cdot P(B \\mid A)$。"
            },
            {
              "type": "h3",
              "en": "Compound Events: With and Without Replacement",
              "zh": "复合事件：有放回与无放回"
            },
            {
              "type": "p",
              "en": "A compound event involves more than one stage, such as drawing several items in a row. The key question is whether each draw is replaced. WITH replacement, the item goes back and the probabilities stay the same, so the draws are independent. WITHOUT replacement, the pool shrinks and the second probability is conditional on the first.",
              "zh": "复合事件涉及不止一个阶段，例如连续抽取多个物品。关键问题是每次抽取后是否放回。有放回时，物品放回，概率保持不变，因此各次抽取相互独立。无放回时，总体减少，第二次的概率是在第一次条件下的条件概率。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: With vs without replacement",
                "zh": "例题 2：有放回与无放回"
              },
              "problem": {
                "en": "A jar has $5$ red and $3$ green marbles. Two marbles are drawn. Find $P(\\text{both red})$ (a) with replacement, (b) without replacement.",
                "zh": "一个罐子里有 $5$ 个红球和 $3$ 个绿球。抽取两个球。求 $P(\\text{两个都红})$：（a）有放回，（b）无放回。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) With replacement, each draw has $5$ red out of $8$, and the draws are independent:",
                  "zh": "（a）有放回时，每次抽取都是 $8$ 个中有 $5$ 个红，且各次独立："
                },
                {
                  "type": "math",
                  "tex": "P = \\frac{5}{8} \\cdot \\frac{5}{8} = \\frac{25}{64} \\approx 0.39"
                },
                {
                  "type": "p",
                  "en": "(b) Without replacement, after a red is removed there are $4$ red left out of $7$ total:",
                  "zh": "（b）无放回时，取走一个红球后，剩下 $7$ 个中有 $4$ 个红："
                },
                {
                  "type": "math",
                  "tex": "P = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 0.36"
                },
                {
                  "type": "p",
                  "en": "The without-replacement probability is smaller because removing a red marble lowers the chance of a second red.",
                  "zh": "无放回的概率更小，因为取走一个红球降低了第二次再取到红球的可能性。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Watch the word \"at least.\" $P(\\text{at least one})$ is almost always fastest through the complement: $P(\\text{at least one}) = 1 - P(\\text{none})$. Trying to add up every \"exactly one,\" \"exactly two,\" ... case wastes time and invites double counting.",
              "zh": "注意\"至少\"一词。$P(\\text{至少一个})$ 几乎总是用补集最快：$P(\\text{至少一个}) = 1 - P(\\text{一个都没有})$。若试图把\"恰好一个\"\"恰好两个\"……各种情况逐一相加，既浪费时间又容易重复计数。"
            },
            {
              "type": "h3",
              "en": "Honors Introduction to Expected Value",
              "zh": "荣誉级引入：期望值"
            },
            {
              "type": "p",
              "en": "The expected value of a situation with numerical outcomes is the long-run average value per trial. Multiply each outcome by its probability and add:",
              "zh": "当结果为数值时，某情境的期望值是每次试验在长期中的平均取值。把每个结果乘以它的概率再相加："
            },
            {
              "type": "math",
              "tex": "E = \\sum x_i \\cdot P(x_i) = x_1 P(x_1) + x_2 P(x_2) + \\cdots + x_n P(x_n)"
            },
            {
              "type": "p",
              "en": "Expected value need not be a possible outcome itself; it is the balance point you would approach by averaging over many repetitions. It is the core idea behind pricing games, insurance, and any decision under uncertainty.",
              "zh": "期望值本身不一定是某个可能出现的结果；它是当你重复很多次并取平均时会逐渐逼近的\"平衡点\"。它是游戏定价、保险以及一切不确定情境下决策的核心思想。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 3: A carnival game",
                "zh": "例题 3：一个嘉年华游戏"
              },
              "problem": {
                "en": "A game costs nothing to describe: you win $\\$10$ with probability $0.2$, win $\\$2$ with probability $0.5$, and win $\\$0$ with probability $0.3$. What is the expected winning?",
                "zh": "一个游戏：你以 $0.2$ 的概率赢 $\\$10$，以 $0.5$ 的概率赢 $\\$2$，以 $0.3$ 的概率赢 $\\$0$。期望赢得多少？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply each prize by its probability and add:",
                  "zh": "把每个奖金乘以它的概率再相加："
                },
                {
                  "type": "math",
                  "tex": "E = 10(0.2) + 2(0.5) + 0(0.3) = 2 + 1 + 0 = 3"
                },
                {
                  "type": "p",
                  "en": "The expected winning is $\\$3$ per play. If the game charged a $\\$3$ ticket, it would be \"fair\"; charging more than $\\$3$ favors the carnival in the long run.",
                  "zh": "每次游戏的期望赢得为 $\\$3$。如果门票收 $\\$3$，游戏就是\"公平\"的；若收费高于 $\\$3$，长期来看对嘉年华有利。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A deli offers $6$ breads, $4$ meats, and $3$ cheeses. How many different single-meat, single-cheese sandwiches are possible?",
                "zh": "一家熟食店有 $6$ 种面包、$4$ 种肉、$3$ 种奶酪。可做出多少种单肉单奶酪的不同三明治？"
              },
              "choices": [
                "$13$",
                "$72$",
                "$18$",
                "$24$"
              ],
              "answer": 1,
              "explanation": {
                "en": "By the fundamental counting principle, multiply the options at each stage: $6 \\times 4 \\times 3 = 72$. Adding the choices to get $13$ treats independent stages as if you pick only one category.",
                "zh": "由基本计数原理，把每一步的选项相乘：$6 \\times 4 \\times 3 = 72$。若相加得 $13$，则错误地把相互独立的各步当成只选一类。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A committee of $4$ is chosen from $9$ people. Which expression correctly counts the possibilities?",
                "zh": "从 $9$ 人中选出 $4$ 人组成委员会。下列哪个表达式正确地计数了可能性？"
              },
              "choices": [
                "$_9P_4$",
                "$9^4$",
                "$_9C_4$",
                "$4!$"
              ],
              "answer": 2,
              "explanation": {
                "en": "A committee is unordered, so order does not matter and we use the combination $_9C_4$. Using $_9P_4$ would count each identical group $4! = 24$ times because it treats rearrangements as different.",
                "zh": "委员会是无序的，顺序无关，所以用组合 $_9C_4$。若用 $_9P_4$，会把同一组人重复计数 $4! = 24$ 次，因为它把重新排列当作不同结果。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "How many ways can a president, secretary, and treasurer be selected from $7$ students (no one holds two offices)? Give a whole number.",
                "zh": "从 $7$ 名学生中选出主席、秘书和司库（没有人兼任两职）有多少种方式？请用整数作答。"
              },
              "answer": "210",
              "accept": [
                "210 ways"
              ],
              "explanation": {
                "en": "The offices are distinct, so order matters: $_7P_3 = 7 \\times 6 \\times 5 = 210$. Using a combination $_7C_3 = 35$ would wrongly ignore that the three roles are different.",
                "zh": "各职务不同，顺序有关：$_7P_3 = 7 \\times 6 \\times 5 = 210$。若用组合 $_7C_3 = 35$，则错误地忽视了三个角色互不相同。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A fair coin is flipped and a fair die is rolled. What is the probability of getting heads AND a $6$?",
                "zh": "掷一枚均匀硬币并掷一枚均匀骰子。得到正面且掷出 $6$ 的概率是多少？"
              },
              "choices": [
                "$\\frac{1}{12}$",
                "$\\frac{7}{12}$",
                "$\\frac{1}{8}$",
                "$\\frac{2}{12}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The two actions are independent, so multiply: $\\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$. Adding the probabilities to get $\\frac{7}{12}$ answers \"heads OR a six,\" a different (union) question.",
                "zh": "两个动作独立，所以相乘：$\\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$。若相加得 $\\frac{7}{12}$，回答的是\"正面或 6\"这一不同的（并集）问题。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A drawer has $4$ black and $6$ white socks. You pull two socks without replacement. What is the probability both are black? Give a fraction in lowest terms.",
                "zh": "抽屉里有 $4$ 只黑袜和 $6$ 只白袜。你不放回地取出两只袜子。两只都是黑色的概率是多少？请用最简分数作答。"
              },
              "answer": "2/15",
              "accept": [
                "0.133",
                "0.13",
                "12/90",
                "2/15 "
              ],
              "explanation": {
                "en": "Without replacement, $P = \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$. Using $\\frac{4}{10} \\cdot \\frac{4}{10}$ would treat the draws as with replacement and ignore that one black sock is already gone.",
                "zh": "无放回时，$P = \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$。若用 $\\frac{4}{10} \\cdot \\frac{4}{10}$，则当作有放回，忽略了已经取走一只黑袜。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A spinner lands on red with probability $0.3$ on each spin. In $3$ independent spins, what is the probability of AT LEAST one red? (Round to two decimals.)",
                "zh": "一个转盘每次转到红色的概率为 $0.3$。在 $3$ 次独立旋转中，至少一次红色的概率是多少？（保留两位小数。）"
              },
              "choices": [
                "$0.90$",
                "$0.66$",
                "$0.34$",
                "$0.027$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Use the complement: $P(\\text{no red}) = 0.7^3 = 0.343$, so $P(\\text{at least one}) = 1 - 0.343 \\approx 0.66$. Multiplying $0.3 \\times 3 = 0.9$ wrongly adds overlapping cases and can even exceed $1$ in other problems.",
                "zh": "用补集：$P(\\text{没有红}) = 0.7^3 = 0.343$，所以 $P(\\text{至少一次}) = 1 - 0.343 \\approx 0.66$。若用 $0.3 \\times 3 = 0.9$，则错误地把重叠情况相加，在别的题目中甚至可能超过 $1$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A game gives $\\$5$ with probability $0.4$ and $\\$0$ with probability $0.6$. What is the expected value in dollars? Give a decimal.",
                "zh": "一个游戏以 $0.4$ 的概率给 $\\$5$，以 $0.6$ 的概率给 $\\$0$。期望值是多少美元？请用小数作答。"
              },
              "answer": "2",
              "accept": [
                "2.0",
                "2.00",
                "$2",
                "2 dollars"
              ],
              "explanation": {
                "en": "Multiply each outcome by its probability and add: $5(0.4) + 0(0.6) = 2$. The expected value $\\$2$ is a long-run average, not a prize you can actually win on a single play.",
                "zh": "把每个结果乘以其概率再相加：$5(0.4) + 0(0.6) = 2$。期望值 $\\$2$ 是长期平均，而不是单次游戏能真正赢到的奖金。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: A raffle sells $200$ tickets at $\\$5$ each. One ticket wins a $\\$400$ prize. What is the expected net value (prize minus cost) of buying one ticket?",
                "zh": "荣誉挑战：一场抽奖售出 $200$ 张彩票，每张 $\\$5$。一张中奖，奖金 $\\$400$。买一张彩票的期望净收益（奖金减成本）是多少？"
              },
              "choices": [
                "$\\$2.00$",
                "$-\\$5.00$",
                "$-\\$3.00$",
                "$\\$395$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The net gain is $\\$395$ with probability $\\frac{1}{200}$ and $-\\$5$ with probability $\\frac{199}{200}$: $395(\\frac{1}{200}) + (-5)(\\frac{199}{200}) = \\frac{395 - 995}{200} = -3$. On average you lose $\\$3$ per ticket. Using the $\\$400$ prize without subtracting the $\\$5$ cost, or ignoring the odds, misses the true expectation.",
                "zh": "净收益为 $\\$395$ 的概率是 $\\frac{1}{200}$，为 $-\\$5$ 的概率是 $\\frac{199}{200}$：$395(\\frac{1}{200}) + (-5)(\\frac{199}{200}) = \\frac{395 - 995}{200} = -3$。平均每张彩票亏 $\\$3$。若只用 $\\$400$ 奖金而不减 $\\$5$ 成本，或忽略中奖几率，都会算错真实的期望。"
              }
            }
          ]
        }
      ]
    }
  ]
}
