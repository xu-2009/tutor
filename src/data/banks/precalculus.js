export default {
  "function-analysis/domain-range-behavior": [
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x)=\\sqrt{x-3}$?",
        "zh": "$f(x)=\\sqrt{x-3}$ 的定义域是什么？"
      },
      "choices": [
        "$x \\ge 3$",
        "all real numbers",
        "$x \\le 3$",
        "$x > 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The expression under a square root must be $\\ge 0$, so $x-3 \\ge 0$ gives $x \\ge 3$. Writing $x>3$ wrongly excludes $x=3$, where $\\sqrt{0}=0$ is perfectly defined.",
        "zh": "根号内必须 $\\ge 0$，所以 $x-3 \\ge 0$ 得 $x \\ge 3$。写成 $x>3$ 会错误地排除 $x=3$，而此时 $\\sqrt{0}=0$ 是有定义的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $f(x)=x^2+2$?",
        "zh": "$f(x)=x^2+2$ 的值域是什么？"
      },
      "choices": [
        "$[0,\\infty)$",
        "$[2,\\infty)$",
        "all real numbers",
        "$(2,\\infty)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $x^2 \\ge 0$, the smallest value of $x^2+2$ is $2$ (at $x=0$), giving range $[2,\\infty)$. Answering $[0,\\infty)$ ignores the vertical shift of $+2$.",
        "zh": "因为 $x^2 \\ge 0$，$x^2+2$ 的最小值是 $2$（当 $x=0$），值域为 $[2,\\infty)$。答 $[0,\\infty)$ 忽略了 $+2$ 的向上平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Is $f(x)=x^3-x$ even, odd, or neither?",
        "zh": "$f(x)=x^3-x$ 是偶函数、奇函数还是都不是？"
      },
      "choices": [
        "Even",
        "Neither",
        "Odd",
        "Both"
      ],
      "answer": 2,
      "explanation": {
        "en": "$f(-x)=(-x)^3-(-x)=-x^3+x=-(x^3-x)=-f(x)$, so the function is odd. Concluding it is even comes from mistakenly thinking every polynomial with an $x^3$ term is symmetric about the y-axis.",
        "zh": "$f(-x)=(-x)^3-(-x)=-x^3+x=-(x^3-x)=-f(x)$，所以是奇函数。误判为偶函数是因为错误地以为带 $x^3$ 项的多项式关于 y 轴对称。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a function is even, its graph is symmetric about which of the following?",
        "zh": "如果一个函数是偶函数，它的图像关于下列哪一项对称？"
      },
      "choices": [
        "the origin",
        "the line $y=x$",
        "the x-axis",
        "the y-axis"
      ],
      "answer": 3,
      "explanation": {
        "en": "Even means $f(-x)=f(x)$, so points $(x,y)$ and $(-x,y)$ both lie on the graph — that is symmetry about the y-axis. Symmetry about the origin describes an odd function instead.",
        "zh": "偶函数意味着 $f(-x)=f(x)$，所以 $(x,y)$ 和 $(-x,y)$ 都在图像上——即关于 y 轴对称。关于原点对称描述的是奇函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the average rate of change of $f(x)=x^2$ over the interval $[1,3]$?",
        "zh": "$f(x)=x^2$ 在区间 $[1,3]$ 上的平均变化率是多少？"
      },
      "choices": [
        "$4$",
        "$2$",
        "$8$",
        "$5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Average rate of change $=\\frac{f(3)-f(1)}{3-1}=\\frac{9-1}{2}=4$. Getting $8$ comes from forgetting to divide by the interval width $3-1=2$.",
        "zh": "平均变化率 $=\\frac{f(3)-f(1)}{3-1}=\\frac{9-1}{2}=4$。得到 $8$ 是因为忘记除以区间宽度 $3-1=2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x)=\\frac{1}{x-2}$?",
        "zh": "$f(x)=\\frac{1}{x-2}$ 的定义域是什么？"
      },
      "choices": [
        "all real numbers",
        "all real numbers except $x=2$",
        "$x > 2$",
        "$x \\ne 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The denominator cannot be zero, so $x-2 \\ne 0$ means $x \\ne 2$; every other real number is allowed. Excluding $x=0$ instead confuses the shift inside the denominator with the value $x=0$.",
        "zh": "分母不能为零，所以 $x-2 \\ne 0$ 即 $x \\ne 2$；其它实数都可以。改为排除 $x=0$ 是把分母内的平移误当成 $x=0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On which interval is $f(x)=x^2$ decreasing?",
        "zh": "$f(x)=x^2$ 在哪个区间上是递减的？"
      },
      "choices": [
        "$(0,\\infty)$",
        "$(-\\infty,\\infty)$",
        "$(-\\infty,0)$",
        "it is never decreasing"
      ],
      "answer": 2,
      "explanation": {
        "en": "Moving left to right, the parabola falls until the vertex at $x=0$, so it decreases on $(-\\infty,0)$. Choosing $(0,\\infty)$ describes where it increases, not decreases.",
        "zh": "从左到右看，抛物线在顶点 $x=0$ 之前一直下降，所以在 $(-\\infty,0)$ 上递减。选 $(0,\\infty)$ 描述的是递增区间，而非递减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which condition means that $f$ is an odd function?",
        "zh": "下列哪个条件表示 $f$ 是奇函数？"
      },
      "choices": [
        "$f(x)=x$",
        "$f(-x)=f(x)$",
        "$f(x)=0$",
        "$f(-x)=-f(x)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Odd functions satisfy $f(-x)=-f(x)$ (origin symmetry). The condition $f(-x)=f(x)$ is the definition of an even function.",
        "zh": "奇函数满足 $f(-x)=-f(x)$（关于原点对称）。$f(-x)=f(x)$ 是偶函数的定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the minimum value of $f(x)=(x-1)^2+3$?",
        "zh": "$f(x)=(x-1)^2+3$ 的最小值是多少？"
      },
      "choices": [
        "$3$",
        "$-3$",
        "$1$",
        "$4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The squared term is $\\ge 0$ and equals $0$ at $x=1$, so the least output is $3$. Answering $1$ gives the $x$-value of the vertex rather than the minimum output.",
        "zh": "平方项 $\\ge 0$，在 $x=1$ 时为 $0$，所以最小输出值是 $3$。答 $1$ 给出的是顶点的 $x$ 坐标，而不是最小函数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $f(x)=|x|-4$?",
        "zh": "$f(x)=|x|-4$ 的值域是什么？"
      },
      "choices": [
        "$[4,\\infty)$",
        "$[-4,\\infty)$",
        "all real numbers",
        "$(-\\infty,-4]$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $|x| \\ge 0$, the smallest value of $|x|-4$ is $-4$ (at $x=0$), so the range is $[-4,\\infty)$. Answering $[4,\\infty)$ ignores the downward shift of $4$.",
        "zh": "因为 $|x| \\ge 0$，$|x|-4$ 的最小值是 $-4$（当 $x=0$），值域为 $[-4,\\infty)$。答 $[4,\\infty)$ 忽略了向下平移 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the average rate of change of $f(x)=3x+1$ over $[0,5]$?",
        "zh": "$f(x)=3x+1$ 在 $[0,5]$ 上的平均变化率是多少？"
      },
      "choices": [
        "$16$",
        "$5$",
        "$3$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For a line the average rate of change equals its slope, $3$; directly $\\frac{f(5)-f(0)}{5-0}=\\frac{16-1}{5}=3$. Answering $16$ uses $f(5)$ alone without subtracting $f(0)$ or dividing.",
        "zh": "对于直线，平均变化率等于斜率 $3$；直接算 $\\frac{f(5)-f(0)}{5-0}=\\frac{16-1}{5}=3$。答 $16$ 是只用了 $f(5)$，没有减去 $f(0)$ 也没有相除。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a graph is symmetric about the origin, the function must be:",
        "zh": "如果图像关于原点对称，那么该函数一定是："
      },
      "choices": [
        "even",
        "constant",
        "linear",
        "odd"
      ],
      "answer": 3,
      "explanation": {
        "en": "Origin symmetry means $(x,y)$ and $(-x,-y)$ are both on the graph, i.e. $f(-x)=-f(x)$, which defines an odd function. Calling it even confuses origin symmetry with y-axis symmetry.",
        "zh": "关于原点对称意味着 $(x,y)$ 和 $(-x,-y)$ 都在图像上，即 $f(-x)=-f(x)$，这是奇函数的定义。称之为偶函数是把原点对称与 y 轴对称混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the average rate of change of $f(x)=x^2$ over the interval $[2,5]$.",
        "zh": "求 $f(x)=x^2$ 在区间 $[2,5]$ 上的平均变化率。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "$\\frac{f(5)-f(2)}{5-2}=\\frac{25-4}{3}=\\frac{21}{3}=7$. Dividing by $5$ or by $2$ instead of the width $5-2=3$ is the common slip.",
        "zh": "$\\frac{f(5)-f(2)}{5-2}=\\frac{25-4}{3}=\\frac{21}{3}=7$。常见错误是除以 $5$ 或 $2$ 而不是宽度 $5-2=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "State the domain of $f(x)=\\sqrt{5-x}$ as an inequality in $x$.",
        "zh": "用关于 $x$ 的不等式写出 $f(x)=\\sqrt{5-x}$ 的定义域。"
      },
      "answer": "x<=5",
      "accept": [
        "x <= 5",
        "x ≤ 5",
        "x≤5",
        "(-inf,5]",
        "(-∞,5]",
        "5>=x",
        "x<=5.0"
      ],
      "explanation": {
        "en": "Require $5-x \\ge 0$, so $5 \\ge x$, i.e. $x \\le 5$. Writing $x \\ge 5$ reverses the inequality when moving $x$ across.",
        "zh": "要求 $5-x \\ge 0$，所以 $5 \\ge x$，即 $x \\le 5$。写成 $x \\ge 5$ 是移项时把不等号方向弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the minimum value of $f(x)=x^2-6x+11$.",
        "zh": "求 $f(x)=x^2-6x+11$ 的最小值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Completing the square: $x^2-6x+11=(x-3)^2+2$, so the minimum output is $2$ at $x=3$. Reporting $3$ gives the vertex $x$-value, not the minimum $y$.",
        "zh": "配方：$x^2-6x+11=(x-3)^2+2$，所以最小值是 $2$（当 $x=3$）。答 $3$ 给出的是顶点 $x$ 坐标，而不是最小 $y$ 值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Is $f(x)=x^4-2x^2$ even, odd, or neither? Answer with one word.",
        "zh": "$f(x)=x^4-2x^2$ 是偶函数、奇函数还是都不是？用一个词回答。"
      },
      "answer": "even",
      "accept": [
        "Even",
        "EVEN",
        "偶",
        "偶函数"
      ],
      "explanation": {
        "en": "$f(-x)=(-x)^4-2(-x)^2=x^4-2x^2=f(x)$, so it is even. Every exponent on $x$ is even, which forces y-axis symmetry; calling it odd ignores that both terms are unchanged by $x \\to -x$.",
        "zh": "$f(-x)=(-x)^4-2(-x)^2=x^4-2x^2=f(x)$，所以是偶函数。$x$ 的指数都是偶数，强制 y 轴对称；判为奇函数忽略了两项在 $x \\to -x$ 下都不变。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the average rate of change of $f(x)=\\frac{1}{x}$ over $[1,4]$. Give a decimal.",
        "zh": "求 $f(x)=\\frac{1}{x}$ 在 $[1,4]$ 上的平均变化率，用小数表示。"
      },
      "answer": "-0.25",
      "accept": [
        "-1/4",
        "-.25",
        "-0.250",
        "-0.25000"
      ],
      "explanation": {
        "en": "$\\frac{f(4)-f(1)}{4-1}=\\frac{0.25-1}{3}=\\frac{-0.75}{3}=-0.25$. Dropping the negative sign forgets that the function is decreasing on this interval.",
        "zh": "$\\frac{f(4)-f(1)}{4-1}=\\frac{0.25-1}{3}=\\frac{-0.75}{3}=-0.25$。漏掉负号是忘了函数在此区间上是递减的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At what $x$-value does $f(x)=2x^2-8x+1$ attain its minimum?",
        "zh": "$f(x)=2x^2-8x+1$ 在哪个 $x$ 值处取得最小值？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "x=2",
        "+2"
      ],
      "explanation": {
        "en": "The vertex is at $x=-\\frac{b}{2a}=-\\frac{-8}{2(2)}=\\frac{8}{4}=2$. Using $x=-\\frac{b}{a}=4$ forgets the factor of $2$ in the denominator.",
        "zh": "顶点在 $x=-\\frac{b}{2a}=-\\frac{-8}{2(2)}=\\frac{8}{4}=2$。用 $x=-\\frac{b}{a}=4$ 是忘了分母中的因子 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the maximum value of $f(x)=-(x+2)^2+5$.",
        "zh": "求 $f(x)=-(x+2)^2+5$ 的最大值。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The term $-(x+2)^2 \\le 0$ and equals $0$ at $x=-2$, so the greatest output is $5$. Answering $-2$ gives the vertex $x$-value, not the maximum output.",
        "zh": "项 $-(x+2)^2 \\le 0$，在 $x=-2$ 时为 $0$，所以最大输出是 $5$。答 $-2$ 给出的是顶点 $x$ 坐标，而非最大函数值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the average rate of change of $f(x)=x^2+x$ over $[-1,2]$.",
        "zh": "求 $f(x)=x^2+x$ 在 $[-1,2]$ 上的平均变化率。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$f(2)=6$, $f(-1)=0$, so $\\frac{6-0}{2-(-1)}=\\frac{6}{3}=2$. Using width $2-1=1$ instead of $2-(-1)=3$ is the common mistake with a negative endpoint.",
        "zh": "$f(2)=6$，$f(-1)=0$，所以 $\\frac{6-0}{2-(-1)}=\\frac{6}{3}=2$。用宽度 $2-1=1$ 而非 $2-(-1)=3$ 是负端点时的常见错误。"
      }
    }
  ],
  "function-analysis/transformations-inverses": [
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $f(x)=(x-3)^2$ related to the parent graph $y=x^2$?",
        "zh": "$f(x)=(x-3)^2$ 的图像与母函数图像 $y=x^2$ 有什么关系？"
      },
      "choices": [
        "shift right 3 units",
        "shift left 3 units",
        "shift up 3 units",
        "shift down 3 units"
      ],
      "answer": 0,
      "explanation": {
        "en": "A change inside the function, $x-3$, shifts the graph horizontally in the opposite direction of the sign — to the right by $3$. Reading $x-3$ as a leftward shift misinterprets the sign of an inside change.",
        "zh": "函数内部的变化 $x-3$ 使图像沿水平方向移动，方向与符号相反——向右移 $3$。把 $x-3$ 读成向左移是把内部变化的符号理解反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $f(x)=x^2+4$ related to $y=x^2$?",
        "zh": "$f(x)=x^2+4$ 的图像与 $y=x^2$ 有什么关系？"
      },
      "choices": [
        "shift down 4 units",
        "shift up 4 units",
        "shift right 4 units",
        "shift left 4 units"
      ],
      "answer": 1,
      "explanation": {
        "en": "Adding $4$ outside the squaring moves every output up by $4$, a vertical shift up. Treating $+4$ as a horizontal shift confuses an outside change with an inside change.",
        "zh": "在平方之外加 $4$ 使每个输出值增加 $4$，是向上的竖直平移。把 $+4$ 当作水平平移是混淆了外部变化与内部变化。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What transformation of $y=x^2$ produces $f(x)=-x^2$?",
        "zh": "对 $y=x^2$ 做什么变换得到 $f(x)=-x^2$？"
      },
      "choices": [
        "shift down 1 unit",
        "vertical stretch by 2",
        "reflection over the x-axis",
        "reflection over the y-axis"
      ],
      "answer": 2,
      "explanation": {
        "en": "The negative sign multiplies every output by $-1$, flipping the graph over the x-axis. A reflection over the y-axis would replace $x$ with $-x$, which leaves $x^2$ unchanged.",
        "zh": "负号把每个输出乘以 $-1$，使图像关于 x 轴翻转。关于 y 轴的反射是把 $x$ 换成 $-x$，而这对 $x^2$ 没有影响。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=2x+6$?",
        "zh": "$f(x)=2x+6$ 的反函数是什么？"
      },
      "choices": [
        "$2x-6$",
        "$\\frac{x+6}{2}$",
        "$\\frac{1}{2x+6}$",
        "$\\frac{x-6}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Solve $y=2x+6$ for $x$: $x=\\frac{y-6}{2}$, so $f^{-1}(x)=\\frac{x-6}{2}$. Writing $\\frac{1}{2x+6}$ confuses the inverse function with the reciprocal.",
        "zh": "解 $y=2x+6$ 求 $x$：$x=\\frac{y-6}{2}$，所以 $f^{-1}(x)=\\frac{x-6}{2}$。写成 $\\frac{1}{2x+6}$ 是把反函数与倒数混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The horizontal line test on a graph determines:",
        "zh": "对图像做水平线检验可以判断："
      },
      "choices": [
        "whether the function is one-to-one",
        "whether the function is even",
        "the domain of the function",
        "the slope of the function"
      ],
      "answer": 0,
      "explanation": {
        "en": "If no horizontal line meets the graph more than once, the function is one-to-one and therefore has an inverse function. The vertical line test, not the horizontal one, checks whether a relation is a function at all.",
        "zh": "如果没有任何水平线与图像相交超过一次，函数就是一对一的，从而有反函数。判断一个关系是否为函数用的是垂直线检验，而不是水平线检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $f^{-1}$ is the reflection of the graph of $f$ over which line?",
        "zh": "$f^{-1}$ 的图像是 $f$ 的图像关于哪条直线的反射？"
      },
      "choices": [
        "the x-axis",
        "the line $y=x$",
        "the y-axis",
        "the line $y=-x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Inverting swaps each point $(a,b)$ with $(b,a)$, which reflects the graph across $y=x$. Reflecting over the x-axis would instead negate the outputs, not swap the coordinates.",
        "zh": "求反函数把每个点 $(a,b)$ 换成 $(b,a)$，这相当于关于 $y=x$ 反射。关于 x 轴反射只会把输出取负，而不是交换坐标。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $f(x)=(x+2)^3$ related to $y=x^3$?",
        "zh": "$f(x)=(x+2)^3$ 的图像与 $y=x^3$ 有什么关系？"
      },
      "choices": [
        "shift right 2 units",
        "shift up 2 units",
        "shift left 2 units",
        "reflect over the y-axis"
      ],
      "answer": 2,
      "explanation": {
        "en": "The inside change $x+2$ shifts the graph horizontally opposite to the sign — left by $2$. Reading $x+2$ as a rightward shift mistakes the direction of an inside change.",
        "zh": "内部变化 $x+2$ 使图像沿水平方向移动，方向与符号相反——向左移 $2$。把 $x+2$ 读成向右移是弄错了内部变化的方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these functions is one-to-one (and therefore invertible) on all real numbers?",
        "zh": "下列哪个函数在全体实数上是一对一的（因而可逆）？"
      },
      "choices": [
        "$f(x)=x^2$",
        "$f(x)=|x|$",
        "$f(x)=4$",
        "$f(x)=x^3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$f(x)=x^3$ passes the horizontal line test — each output comes from exactly one input. $f(x)=x^2$ fails because inputs like $2$ and $-2$ give the same output $4$.",
        "zh": "$f(x)=x^3$ 通过水平线检验——每个输出恰好对应一个输入。$f(x)=x^2$ 不行，因为像 $2$ 和 $-2$ 这样的输入会给出相同的输出 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To verify that $g$ is the inverse of $f$, you must show:",
        "zh": "要验证 $g$ 是 $f$ 的反函数，必须证明："
      },
      "choices": [
        "$f(g(x))=x$ and $g(f(x))=x$",
        "$f(x)\\cdot g(x)=1$",
        "$f(x)+g(x)=0$",
        "$f(x)=g(x)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Inverse functions undo each other, so both compositions must return the input $x$. The condition $f(x)\\cdot g(x)=1$ describes reciprocals, not inverse functions.",
        "zh": "反函数互相抵消，所以两个复合都必须返回输入 $x$。$f(x)\\cdot g(x)=1$ 描述的是倒数，而不是反函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $f(x)=2x^2$ related to $y=x^2$?",
        "zh": "$f(x)=2x^2$ 的图像与 $y=x^2$ 有什么关系？"
      },
      "choices": [
        "shift up 2 units",
        "vertical stretch by a factor of 2",
        "reflection over the x-axis",
        "shift right 2 units"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiplying the output by $2$ stretches the graph vertically by a factor of $2$. Treating the $2$ as a vertical shift would add $2$ to outputs rather than scale them.",
        "zh": "把输出乘以 $2$ 使图像沿竖直方向拉伸为原来的 $2$ 倍。把这个 $2$ 当作竖直平移是给输出加 $2$，而不是缩放。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=x^3$?",
        "zh": "$f(x)=x^3$ 的反函数是什么？"
      },
      "choices": [
        "$\\frac{1}{x^3}$",
        "$3x$",
        "$\\sqrt[3]{x}$",
        "$x^3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Solving $y=x^3$ gives $x=\\sqrt[3]{y}$, so $f^{-1}(x)=\\sqrt[3]{x}$. Writing $\\frac{1}{x^3}$ confuses the inverse function with the reciprocal of the output.",
        "zh": "解 $y=x^3$ 得 $x=\\sqrt[3]{y}$，所以 $f^{-1}(x)=\\sqrt[3]{x}$。写成 $\\frac{1}{x^3}$ 是把反函数与输出的倒数混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f$ has domain $[0,\\infty)$ and range $[2,\\infty)$, what is the domain of $f^{-1}$?",
        "zh": "如果 $f$ 的定义域是 $[0,\\infty)$，值域是 $[2,\\infty)$，那么 $f^{-1}$ 的定义域是什么？"
      },
      "choices": [
        "$[0,\\infty)$",
        "all real numbers",
        "$(-\\infty,2]$",
        "$[2,\\infty)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The domain of $f^{-1}$ equals the range of $f$, which is $[2,\\infty)$. Choosing $[0,\\infty)$ reuses the domain of $f$ instead of swapping domain and range.",
        "zh": "$f^{-1}$ 的定义域等于 $f$ 的值域，即 $[2,\\infty)$。选 $[0,\\infty)$ 是沿用了 $f$ 的定义域，而没有交换定义域和值域。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find $f^{-1}(x)$ for $f(x)=3x-9$. Write it as an expression in $x$.",
        "zh": "求 $f(x)=3x-9$ 的反函数 $f^{-1}(x)$，写成关于 $x$ 的表达式。"
      },
      "answer": "(x+9)/3",
      "accept": [
        "x/3+3",
        "x/3 + 3",
        "(9+x)/3",
        "(x + 9)/3"
      ],
      "explanation": {
        "en": "Solve $y=3x-9$: $x=\\frac{y+9}{3}$, so $f^{-1}(x)=\\frac{x+9}{3}$. Writing $\\frac{x-9}{3}$ subtracts instead of adds when undoing the $-9$.",
        "zh": "解 $y=3x-9$：$x=\\frac{y+9}{3}$，所以 $f^{-1}(x)=\\frac{x+9}{3}$。写成 $\\frac{x-9}{3}$ 是在抵消 $-9$ 时做了减法而不是加法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find $f^{-1}(x)$ for $f(x)=x+7$. Write it as an expression in $x$.",
        "zh": "求 $f(x)=x+7$ 的反函数 $f^{-1}(x)$，写成关于 $x$ 的表达式。"
      },
      "answer": "x-7",
      "accept": [
        "x - 7",
        "-7+x"
      ],
      "explanation": {
        "en": "Undo adding $7$ by subtracting $7$: $f^{-1}(x)=x-7$. Answering $x+7$ repeats the original function instead of reversing it.",
        "zh": "抵消加 $7$ 就是减 $7$：$f^{-1}(x)=x-7$。答 $x+7$ 是重复了原函数，而没有把它反过来。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The inverse of $f(x)=\\sqrt{x}$ (for $x \\ge 0$) is $f^{-1}(x)=$ ? Write an expression in $x$.",
        "zh": "$f(x)=\\sqrt{x}$（$x \\ge 0$）的反函数 $f^{-1}(x)=$ ？写成关于 $x$ 的表达式。"
      },
      "answer": "x^2",
      "accept": [
        "x²",
        "x*x",
        "x^{2}"
      ],
      "explanation": {
        "en": "Reflecting $y=\\sqrt{x}$ over $y=x$ gives $y=x^2$ (restricted to $x \\ge 0$). Writing $\\frac{1}{\\sqrt{x}}$ confuses the inverse with the reciprocal.",
        "zh": "把 $y=\\sqrt{x}$ 关于 $y=x$ 反射得到 $y=x^2$（限制在 $x \\ge 0$）。写成 $\\frac{1}{\\sqrt{x}}$ 是把反函数与倒数混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(3)=10$, what is $f^{-1}(10)$?",
        "zh": "如果 $f(3)=10$，那么 $f^{-1}(10)$ 是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The inverse swaps inputs and outputs, so $f(3)=10$ means $f^{-1}(10)=3$. Answering $10$ forgets that the inverse reverses the pairing.",
        "zh": "反函数交换输入和输出，所以 $f(3)=10$ 意味着 $f^{-1}(10)=3$。答 $10$ 是忘了反函数把配对反过来。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=5x$, find $f^{-1}(20)$.",
        "zh": "对 $f(x)=5x$，求 $f^{-1}(20)$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=\\frac{x}{5}$, so $f^{-1}(20)=\\frac{20}{5}=4$. Multiplying by $5$ to get $100$ applies $f$ itself instead of its inverse.",
        "zh": "反函数是 $f^{-1}(x)=\\frac{x}{5}$，所以 $f^{-1}(20)=\\frac{20}{5}=4$。乘以 $5$ 得 $100$ 是用了 $f$ 本身，而不是它的反函数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $g(x)=f(x)-5$ is the graph of $f$ shifted down by how many units?",
        "zh": "$g(x)=f(x)-5$ 的图像是 $f$ 的图像向下平移了多少个单位？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5 units",
        "down 5",
        "五"
      ],
      "explanation": {
        "en": "Subtracting $5$ outside the function lowers every output by $5$, a downward shift of $5$. Reading it as a horizontal shift confuses an outside change with an inside change.",
        "zh": "在函数外部减 $5$ 使每个输出降低 $5$，即向下平移 $5$。把它读作水平平移是混淆了外部变化与内部变化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=2x-1$, find $f^{-1}(5)$.",
        "zh": "对 $f(x)=2x-1$，求 $f^{-1}(5)$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=\\frac{x+1}{2}$, so $f^{-1}(5)=\\frac{6}{2}=3$. Plugging $5$ into $f$ to get $9$ evaluates the original function, not the inverse.",
        "zh": "反函数是 $f^{-1}(x)=\\frac{x+1}{2}$，所以 $f^{-1}(5)=\\frac{6}{2}=3$。把 $5$ 代入 $f$ 得 $9$ 是求了原函数，而不是反函数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(2,7)$ lies on the graph of $f$. What point must lie on the graph of $f^{-1}$? Write it as (a,b).",
        "zh": "点 $(2,7)$ 在 $f$ 的图像上。那么 $f^{-1}$ 的图像上一定有哪个点？写成 (a,b) 形式。"
      },
      "answer": "(7,2)",
      "accept": [
        "7,2",
        "(7, 2)",
        "7, 2"
      ],
      "explanation": {
        "en": "The inverse swaps coordinates, so $(2,7)$ becomes $(7,2)$. Keeping the order as $(2,7)$ forgets that inverting reflects points over $y=x$.",
        "zh": "反函数交换坐标，所以 $(2,7)$ 变成 $(7,2)$。保持 $(2,7)$ 的顺序是忘了求反函数会把点关于 $y=x$ 反射。"
      }
    }
  ],
  "function-analysis/composite-functions-and-operations": [
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x+2$ and $g(x)=3x$, find $(f+g)(x)$.",
        "zh": "若 $f(x)=x+2$，$g(x)=3x$，求 $(f+g)(x)$。"
      },
      "choices": [
        "$4x+2$",
        "$3x^2+6x$",
        "$4x-2$",
        "$3x+2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add the functions termwise: $(x+2)+3x=4x+2$. Getting $3x^2+6x$ multiplies the functions instead of adding them.",
        "zh": "逐项相加：$(x+2)+3x=4x+2$。得到 $3x^2+6x$ 是把两个函数相乘而不是相加了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x$ and $g(x)=x+1$, find $(f\\cdot g)(x)$.",
        "zh": "若 $f(x)=x$，$g(x)=x+1$，求 $(f\\cdot g)(x)$。"
      },
      "choices": [
        "$2x+1$",
        "$x^2+x$",
        "$x^2+1$",
        "$x+1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply: $x(x+1)=x^2+x$. Getting $2x+1$ adds the functions instead of multiplying them.",
        "zh": "相乘：$x(x+1)=x^2+x$。得到 $2x+1$ 是把两个函数相加而不是相乘了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The notation $(f\\circ g)(x)$ means:",
        "zh": "记号 $(f\\circ g)(x)$ 表示："
      },
      "choices": [
        "$f(x)\\cdot g(x)$",
        "$g(f(x))$",
        "$f(g(x))$",
        "$f(x)+g(x)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Composition applies the inner function first, so $(f\\circ g)(x)=f(g(x))$. Writing $g(f(x))$ reverses the order of composition.",
        "zh": "复合是先作用内层函数，所以 $(f\\circ g)(x)=f(g(x))$。写成 $g(f(x))$ 是把复合的顺序弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2$ and $g(x)=x+1$, find $(f\\circ g)(x)$.",
        "zh": "若 $f(x)=x^2$，$g(x)=x+1$，求 $(f\\circ g)(x)$。"
      },
      "choices": [
        "$x^2+1$",
        "$x^3+x^2$",
        "$2x^2+1$",
        "$x^2+2x+1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Substitute $g$ into $f$: $(x+1)^2=x^2+2x+1$. Getting $x^2+1$ adds $1$ after squaring instead of squaring the whole quantity $x+1$.",
        "zh": "把 $g$ 代入 $f$：$(x+1)^2=x^2+2x+1$。得到 $x^2+1$ 是先平方再加 $1$，而不是把整个 $x+1$ 平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=2x$ and $g(x)=x-3$, find $(g\\circ f)(x)$.",
        "zh": "若 $f(x)=2x$，$g(x)=x-3$，求 $(g\\circ f)(x)$。"
      },
      "choices": [
        "$2x-3$",
        "$2x-6$",
        "$x-3$",
        "$2x+3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Apply $f$ first: $g(2x)=2x-3$. Getting $2x-6$ computes $(f\\circ g)(x)=2(x-3)$ instead, reversing the order.",
        "zh": "先作用 $f$：$g(2x)=2x-3$。得到 $2x-6$ 是算成了 $(f\\circ g)(x)=2(x-3)$，把顺序弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $(f\\circ g)(x)$, the domain requires:",
        "zh": "对于 $(f\\circ g)(x)$，其定义域要求："
      },
      "choices": [
        "only that $x$ is in the domain of $f$",
        "that $x$ is in the domain of $g$ and $g(x)$ is in the domain of $f$",
        "only that $f(x)$ is defined",
        "all real numbers always"
      ],
      "answer": 1,
      "explanation": {
        "en": "First $g(x)$ must exist, then that output must be a legal input for $f$ — both conditions apply. Checking only the domain of $f$ overlooks inputs that break the inner function $g$.",
        "zh": "首先 $g(x)$ 必须存在，然后这个输出还要能作为 $f$ 的合法输入——两个条件都要满足。只检查 $f$ 的定义域会漏掉使内层函数 $g$ 无意义的输入。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To decompose $h(x)=\\sqrt{x+5}$ as $f(g(x))$ with $g(x)=x+5$, what is $f(x)$?",
        "zh": "把 $h(x)=\\sqrt{x+5}$ 分解为 $f(g(x))$，其中 $g(x)=x+5$，那么 $f(x)$ 是什么？"
      },
      "choices": [
        "$f(x)=x+5$",
        "$f(x)=\\sqrt{x}+5$",
        "$f(x)=\\sqrt{x}$",
        "$f(x)=x^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The outer operation applied to $g(x)$ is the square root, so $f(x)=\\sqrt{x}$; then $f(g(x))=\\sqrt{x+5}$. Choosing $\\sqrt{x}+5$ adds $5$ outside instead of putting it under the root.",
        "zh": "作用在 $g(x)$ 上的外层运算是平方根，所以 $f(x)=\\sqrt{x}$；于是 $f(g(x))=\\sqrt{x+5}$。选 $\\sqrt{x}+5$ 是把 $5$ 加在根号外面，而不是放在根号内。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=5x$ and $g(x)=2x+1$, find $(f-g)(x)$.",
        "zh": "若 $f(x)=5x$，$g(x)=2x+1$，求 $(f-g)(x)$。"
      },
      "choices": [
        "$3x+1$",
        "$7x+1$",
        "$3x$",
        "$3x-1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(f-g)(x)=5x-(2x+1)=3x-1$. Getting $3x+1$ forgets to distribute the minus sign to the $+1$ in $g$.",
        "zh": "$(f-g)(x)=5x-(2x+1)=3x-1$。得到 $3x+1$ 是忘了把减号分配到 $g$ 中的 $+1$ 上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2$ and $g(x)=\\sqrt{x}$, find $(f\\circ g)(4)$.",
        "zh": "若 $f(x)=x^2$，$g(x)=\\sqrt{x}$，求 $(f\\circ g)(4)$。"
      },
      "choices": [
        "$4$",
        "$16$",
        "$2$",
        "$8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Work inside out: $g(4)=2$, then $f(2)=4$. Getting $16$ applies $f$ to $4$ directly and skips the inner function $g$.",
        "zh": "由内到外：$g(4)=2$，再 $f(2)=4$。得到 $16$ 是直接把 $f$ 作用在 $4$ 上，跳过了内层函数 $g$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The domain of $\\left(\\frac{f}{g}\\right)(x)$ requires excluding:",
        "zh": "$\\left(\\frac{f}{g}\\right)(x)$ 的定义域需要排除："
      },
      "choices": [
        "nothing extra",
        "values where $g(x)=0$",
        "the value $x=0$",
        "values where $f(x)=0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A quotient is undefined when its denominator is zero, so exclude any $x$ with $g(x)=0$. Excluding where $f(x)=0$ instead targets the numerator, which only makes the value zero, not undefined.",
        "zh": "分式在分母为零时无定义，所以要排除任何使 $g(x)=0$ 的 $x$。改为排除 $f(x)=0$ 是针对分子，那只会使值为零，而不是无定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x+4$ and $g(x)=x^2$, find $(f\\circ g)(3)$.",
        "zh": "若 $f(x)=x+4$，$g(x)=x^2$，求 $(f\\circ g)(3)$。"
      },
      "choices": [
        "$49$",
        "$25$",
        "$13$",
        "$21$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Inner first: $g(3)=9$, then $f(9)=13$. Getting $49$ computes $(g\\circ f)(3)=g(7)$, reversing the order.",
        "zh": "先算内层：$g(3)=9$，再 $f(9)=13$。得到 $49$ 是算成了 $(g\\circ f)(3)=g(7)$，把顺序弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To decompose $h(x)=(3x-1)^4$ as $f(g(x))$ with $g(x)=3x-1$, what is $f(x)$?",
        "zh": "把 $h(x)=(3x-1)^4$ 分解为 $f(g(x))$，其中 $g(x)=3x-1$，那么 $f(x)$ 是什么？"
      },
      "choices": [
        "$f(x)=3x-1$",
        "$f(x)=4x$",
        "$f(x)=(x-1)^4$",
        "$f(x)=x^4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The outer operation raises the inner quantity to the 4th power, so $f(x)=x^4$; then $f(g(x))=(3x-1)^4$. Choosing $4x$ mistakes the exponent $4$ for multiplication by $4$.",
        "zh": "外层运算是把内层量取 4 次方，所以 $f(x)=x^4$；于是 $f(g(x))=(3x-1)^4$。选 $4x$ 是把指数 $4$ 误当成乘以 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=2x+1$ and $g(x)=x-4$, find $(f+g)(2)$.",
        "zh": "若 $f(x)=2x+1$，$g(x)=x-4$，求 $(f+g)(2)$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$f(2)=5$ and $g(2)=-2$, so $(f+g)(2)=5+(-2)=3$. Getting $7$ adds only $f(2)$ and ignores the negative value of $g(2)$.",
        "zh": "$f(2)=5$，$g(2)=-2$，所以 $(f+g)(2)=5+(-2)=3$。得到 $7$ 是只用了 $f(2)$，忽略了 $g(2)$ 的负值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x^2$ and $g(x)=x-3$, find $(f\\circ g)(5)$.",
        "zh": "若 $f(x)=x^2$，$g(x)=x-3$，求 $(f\\circ g)(5)$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Inner first: $g(5)=2$, then $f(2)=4$. Getting $22$ computes $(g\\circ f)(5)=g(25)$, reversing the order.",
        "zh": "先算内层：$g(5)=2$，再 $f(2)=4$。得到 $22$ 是算成了 $(g\\circ f)(5)=g(25)$，把顺序弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=3x$ and $g(x)=x+2$, find $(g\\circ f)(4)$.",
        "zh": "若 $f(x)=3x$，$g(x)=x+2$，求 $(g\\circ f)(4)$。"
      },
      "answer": "14",
      "accept": [
        "14.0",
        "+14"
      ],
      "explanation": {
        "en": "Apply $f$ first: $f(4)=12$, then $g(12)=14$. Getting $18$ computes $(f\\circ g)(4)=3(6)$, reversing the order.",
        "zh": "先作用 $f$：$f(4)=12$，再 $g(12)=14$。得到 $18$ 是算成了 $(f\\circ g)(4)=3(6)$，把顺序弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=\\sqrt{x}$ and $g(x)=x+7$, find $(f\\circ g)(9)$.",
        "zh": "若 $f(x)=\\sqrt{x}$，$g(x)=x+7$，求 $(f\\circ g)(9)$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Inner first: $g(9)=16$, then $f(16)=4$. Getting $10$ adds $7$ to $\\sqrt{9}=3$, applying the functions in the wrong order.",
        "zh": "先算内层：$g(9)=16$，再 $f(16)=4$。得到 $10$ 是把 $7$ 加到 $\\sqrt{9}=3$ 上，运算顺序反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x+1$ and $g(x)=2x$, find $(f\\cdot g)(3)$.",
        "zh": "若 $f(x)=x+1$，$g(x)=2x$，求 $(f\\cdot g)(3)$。"
      },
      "answer": "24",
      "accept": [
        "24.0",
        "+24"
      ],
      "explanation": {
        "en": "$f(3)=4$ and $g(3)=6$, so $(f\\cdot g)(3)=4\\times 6=24$. Getting $10$ adds the values instead of multiplying them.",
        "zh": "$f(3)=4$，$g(3)=6$，所以 $(f\\cdot g)(3)=4\\times 6=24$。得到 $10$ 是把两个值相加而不是相乘。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\left(\\frac{f}{g}\\right)(x)$ with $g(x)=x-5$, which value of $x$ must be excluded from the domain?",
        "zh": "对 $\\left(\\frac{f}{g}\\right)(x)$，其中 $g(x)=x-5$，定义域中必须排除哪个 $x$ 值？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "x=5",
        "+5"
      ],
      "explanation": {
        "en": "The denominator is zero when $x-5=0$, i.e. $x=5$, so that value is excluded. Answering $-5$ solves $x+5=0$ and misreads the sign in $g$.",
        "zh": "当 $x-5=0$ 即 $x=5$ 时分母为零，所以要排除这个值。答 $-5$ 是解了 $x+5=0$，把 $g$ 中的符号看错了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=\\frac{1}{x}$ and $g(x)=x-2$, which value of $x$ is excluded from the domain of $(f\\circ g)(x)$?",
        "zh": "若 $f(x)=\\frac{1}{x}$，$g(x)=x-2$，$(f\\circ g)(x)$ 的定义域中要排除哪个 $x$ 值？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "x=2",
        "+2"
      ],
      "explanation": {
        "en": "$(f\\circ g)(x)=\\frac{1}{x-2}$, undefined when $x-2=0$, i.e. $x=2$. Answering $0$ excludes where the inner input is zero rather than where the denominator is zero.",
        "zh": "$(f\\circ g)(x)=\\frac{1}{x-2}$，当 $x-2=0$ 即 $x=2$ 时无定义。答 $0$ 是排除了内层输入为零处，而不是分母为零处。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x^2+1$, find $(f\\circ f)(2)$.",
        "zh": "若 $f(x)=x^2+1$，求 $(f\\circ f)(2)$。"
      },
      "answer": "26",
      "accept": [
        "26.0",
        "+26"
      ],
      "explanation": {
        "en": "Inner first: $f(2)=5$, then $f(5)=25+1=26$. Getting $10$ doubles $f(2)$ instead of feeding it back into $f$.",
        "zh": "先算内层：$f(2)=5$，再 $f(5)=25+1=26$。得到 $10$ 是把 $f(2)$ 翻倍，而不是再代入 $f$。"
      }
    }
  ],
  "polynomial-rational/polynomial-zeros-multiplicity": [
    {
      "type": "mc",
      "question": {
        "en": "Describe the end behavior of $f(x) = 3x^{4} - 5x^{2} + 1$.",
        "zh": "描述 $f(x) = 3x^{4} - 5x^{2} + 1$ 的末端行为。"
      },
      "choices": [
        "Up on both ends",
        "Down on both ends",
        "Down on the left, up on the right",
        "Up on the left, down on the right"
      ],
      "answer": 0,
      "explanation": {
        "en": "The degree is even (4) and the leading coefficient is positive (3), so both ends rise toward $+\\infty$. Reading the end behavior from the $-5x^{2}$ term instead of the leading term is the usual mistake; only the highest-degree term controls the ends.",
        "zh": "次数为偶数（4）且首项系数为正（3），所以两端都趋向 $+\\infty$。常见错误是根据 $-5x^{2}$ 项而不是首项来判断末端行为；只有最高次项决定末端走向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Describe the end behavior of $f(x) = -x^{5} + 2x^{3}$.",
        "zh": "描述 $f(x) = -x^{5} + 2x^{3}$ 的末端行为。"
      },
      "choices": [
        "Up on both ends",
        "Up on the left, down on the right",
        "Down on the left, up on the right",
        "Down on both ends"
      ],
      "answer": 1,
      "explanation": {
        "en": "Odd degree (5) with a negative leading coefficient flips the standard odd shape: as $x \\rightarrow -\\infty$ the function rises and as $x \\rightarrow +\\infty$ it falls. Forgetting the negative sign gives the opposite (down-left, up-right) behavior.",
        "zh": "奇数次（5）配负首项系数会翻转标准的奇次形状：当 $x \\rightarrow -\\infty$ 时函数上升，当 $x \\rightarrow +\\infty$ 时函数下降。忽略负号会得到相反（左下右上）的行为。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of a polynomial has a zero at $x = 3$ with multiplicity 2. What does the graph do at $x = 3$?",
        "zh": "某多项式的图像在 $x = 3$ 处有一个重数为 2 的零点。图像在 $x = 3$ 处的行为是什么？"
      },
      "choices": [
        "Crosses the x-axis",
        "Has a vertical asymptote",
        "Touches the x-axis and turns around",
        "Has a hole"
      ],
      "answer": 2,
      "explanation": {
        "en": "An even multiplicity means the graph touches the x-axis and turns back without crossing. Assuming every zero crosses the axis ignores multiplicity; asymptotes and holes belong to rational functions, not to a polynomial zero.",
        "zh": "偶数重数意味着图像触及 x 轴并折返，而不穿过。认为每个零点都穿过 x 轴就忽略了重数；渐近线和空洞属于有理函数，而非多项式零点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of a polynomial has a zero at $x = -1$ with multiplicity 3. What does the graph do at $x = -1$?",
        "zh": "某多项式的图像在 $x = -1$ 处有一个重数为 3 的零点。图像在 $x = -1$ 处的行为是什么？"
      },
      "choices": [
        "Touches the x-axis and turns around",
        "Never reaches the x-axis",
        "Has a hole",
        "Crosses the x-axis, flattening near the zero"
      ],
      "answer": 3,
      "explanation": {
        "en": "Odd multiplicity (3) means the graph crosses the axis, but the higher power flattens it near the zero. Treating an odd multiplicity like an even one (touch-and-turn) is the common error; a multiplicity of 1 would cross without the flattening.",
        "zh": "奇数重数（3）意味着图像穿过 x 轴，但较高次幂使其在零点附近变平。把奇数重数当成偶数重数（触碰折返）是常见错误；重数为 1 会穿过但不会变平。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Counting multiplicity, how many zeros (real and complex) does a degree-4 polynomial have?",
        "zh": "计入重数，一个 4 次多项式有多少个零点（实数和复数）？"
      },
      "choices": [
        "4",
        "2",
        "3",
        "1"
      ],
      "answer": 0,
      "explanation": {
        "en": "The Fundamental Theorem of Algebra guarantees exactly $n$ zeros for a degree-$n$ polynomial when complex zeros and multiplicities are counted, so a degree-4 polynomial has 4. Counting only the visible x-intercepts undercounts because complex zeros never appear on the real graph.",
        "zh": "代数基本定理保证 $n$ 次多项式在计入复数零点和重数时恰好有 $n$ 个零点，所以 4 次多项式有 4 个。只数图像上可见的 x 截距会数少，因为复数零点不会出现在实数图像上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A polynomial with real coefficients has $3 + 2i$ as a zero. Which value must also be a zero?",
        "zh": "一个具有实系数的多项式以 $3 + 2i$ 为零点。下列哪个值也必定是零点？"
      },
      "choices": [
        "$-3 + 2i$",
        "$3 - 2i$",
        "$2 - 3i$",
        "$-3 - 2i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For real coefficients, non-real zeros occur in conjugate pairs, so the conjugate $3 - 2i$ must also be a zero. Negating both parts or swapping the real and imaginary parts does not produce the conjugate.",
        "zh": "对于实系数，非实数零点成共轭对出现，所以共轭 $3 - 2i$ 也必定是零点。把实部虚部都取负或者交换实部虚部都不能得到共轭。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Rational Root Theorem, which value could be a rational zero of $f(x) = 2x^{3} + 3x^{2} - 8x + 3$?",
        "zh": "根据有理根定理，下列哪个值可能是 $f(x) = 2x^{3} + 3x^{2} - 8x + 3$ 的有理零点？"
      },
      "choices": [
        "$\\frac{1}{4}$",
        "$5$",
        "$\\frac{1}{2}$",
        "$\\frac{2}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Candidates are $\\frac{p}{q}$ where $p$ divides the constant 3 ($\\pm 1, \\pm 3$) and $q$ divides the leading coefficient 2 ($\\pm 1, \\pm 2$); $\\frac{1}{2}$ fits. Using a denominator that divides the constant, or a numerator that divides the leading coefficient, reverses the roles of $p$ and $q$.",
        "zh": "候选值为 $\\frac{p}{q}$，其中 $p$ 整除常数项 3（$\\pm 1, \\pm 3$），$q$ 整除首项系数 2（$\\pm 1, \\pm 2$）；$\\frac{1}{2}$ 符合。用整除常数项的数作分母、或用整除首项系数的数作分子，就颠倒了 $p$ 与 $q$ 的角色。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(2) = 0$ for a polynomial $f$, which of the following must be a factor of $f(x)$?",
        "zh": "如果某多项式 $f$ 满足 $f(2) = 0$，下列哪一项必定是 $f(x)$ 的因式？"
      },
      "choices": [
        "$(x - \\frac{1}{2})$",
        "$(x + 2)$",
        "$(2x - 1)$",
        "$(x - 2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The Factor Theorem says $f(c) = 0$ if and only if $(x - c)$ is a factor, so $f(2) = 0$ gives the factor $(x - 2)$. The sign trap is writing $(x + 2)$; a zero at $x = 2$ makes $(x - 2)$, not $(x + 2)$, vanish.",
        "zh": "因式定理指出 $f(c) = 0$ 当且仅当 $(x - c)$ 是因式，所以 $f(2) = 0$ 给出因式 $(x - 2)$。符号陷阱是写成 $(x + 2)$；在 $x = 2$ 处为零的是 $(x - 2)$，而不是 $(x + 2)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At which zero does the graph of $f(x) = (x - 1)^{2}(x + 3)$ cross the x-axis?",
        "zh": "$f(x) = (x - 1)^{2}(x + 3)$ 的图像在哪个零点处穿过 x 轴？"
      },
      "choices": [
        "$x = -3$",
        "$x = 3$",
        "$x = -1$",
        "$x = 1$ only"
      ],
      "answer": 0,
      "explanation": {
        "en": "The zero $x = -3$ has odd multiplicity 1, so the graph crosses there; $x = 1$ has even multiplicity 2, so it only touches. Reading the factor $(x + 3)$ as a zero at $x = 3$ ignores the sign inside the factor.",
        "zh": "零点 $x = -3$ 的重数为奇数 1，所以图像在此穿过；$x = 1$ 的重数为偶数 2，所以只是触碰。把因式 $(x + 3)$ 读作 $x = 3$ 处的零点就忽略了因式内的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the degree of $f(x) = 2(x - 1)(x + 2)(x - 3)$?",
        "zh": "$f(x) = 2(x - 1)(x + 2)(x - 3)$ 的次数是多少？"
      },
      "choices": [
        "2",
        "3",
        "4",
        "6"
      ],
      "answer": 1,
      "explanation": {
        "en": "Each linear factor contributes degree 1, and there are three of them, so the degree is 3; the constant 2 does not change the degree. Counting the leading coefficient 2 as an extra factor, or multiplying the factor count, over-counts the degree.",
        "zh": "每个一次因式贡献次数 1，共有三个，所以次数为 3；常数 2 不改变次数。把首项系数 2 当作额外因式、或把因式个数相乘，都会数多次数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the minimum degree of a polynomial with zeros at $x = 0$, $x = 2$ (multiplicity 2), and $x = -1$?",
        "zh": "一个在 $x = 0$、$x = 2$（重数 2）和 $x = -1$ 处有零点的多项式，其最小次数是多少？"
      },
      "choices": [
        "3",
        "5",
        "4",
        "6"
      ],
      "answer": 2,
      "explanation": {
        "en": "Add the multiplicities: $1 + 2 + 1 = 4$, so the minimum degree is 4. Counting only the number of distinct zeros (three) forgets that the zero at $x = 2$ is repeated.",
        "zh": "把重数相加：$1 + 2 + 1 = 4$，所以最小次数为 4。只数不同零点的个数（三个）会漏掉 $x = 2$ 是重复零点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A degree-3 polynomial has real coefficients. How many non-real (complex) zeros can it have, counting multiplicity?",
        "zh": "一个 3 次多项式具有实系数。计入重数，它可以有多少个非实数（复数）零点？"
      },
      "choices": [
        "1 or 3",
        "exactly 3",
        "exactly 1",
        "0 or 2"
      ],
      "answer": 3,
      "explanation": {
        "en": "Non-real zeros of a real-coefficient polynomial come in conjugate pairs, so their count is even; within a degree-3 total that means 0 or 2. An odd number of non-real zeros is impossible because it would leave an unpaired conjugate.",
        "zh": "实系数多项式的非实数零点成共轭对出现，所以其数目为偶数；在总次数 3 之内即为 0 或 2 个。非实数零点为奇数个是不可能的，因为那会留下一个没有配对的共轭。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(2)$ for $f(x) = x^{3} - 4x + 1$.",
        "zh": "对于 $f(x) = x^{3} - 4x + 1$，求 $f(2)$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "Substitute $x = 2$: $2^{3} - 4(2) + 1 = 8 - 8 + 1 = 1$. A common slip is computing $2^{3}$ as $2 \\times 3 = 6$ instead of $8$.",
        "zh": "代入 $x = 2$：$2^{3} - 4(2) + 1 = 8 - 8 + 1 = 1$。常见错误是把 $2^{3}$ 算成 $2 \\times 3 = 6$ 而不是 $8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the multiplicity of the zero $x = 2$ in $f(x) = (x - 2)^{3}(x + 1)$?",
        "zh": "在 $f(x) = (x - 2)^{3}(x + 1)$ 中，零点 $x = 2$ 的重数是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0"
      ],
      "explanation": {
        "en": "The exponent on the factor $(x - 2)$ is 3, so the multiplicity is 3. Reading the exponent from the other factor $(x + 1)$, or counting the total degree 4, mislabels this particular zero.",
        "zh": "因式 $(x - 2)$ 的指数为 3，所以重数为 3。从另一个因式 $(x + 1)$ 读指数、或数总次数 4，都会误标这个特定零点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By the Factor Theorem, if $(x + 5)$ is a factor of $f(x)$, then $f(?) = 0$. Enter the value of $x$.",
        "zh": "根据因式定理，如果 $(x + 5)$ 是 $f(x)$ 的因式，那么 $f(?) = 0$。请填入 $x$ 的值。"
      },
      "answer": "-5",
      "accept": [
        "-5.0"
      ],
      "explanation": {
        "en": "A factor $(x - c)$ corresponds to a zero at $x = c$; here $(x + 5) = (x - (-5))$, so $f(-5) = 0$. Dropping the sign and answering $5$ is the usual mistake.",
        "zh": "因式 $(x - c)$ 对应 $x = c$ 处的零点；这里 $(x + 5) = (x - (-5))$，所以 $f(-5) = 0$。忘记符号答成 $5$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "One zero of $f(x) = x^{3} - 6x^{2} + 11x - 6$ is $x = 1$. The other two zeros are integers. What is their sum?",
        "zh": "$f(x) = x^{3} - 6x^{2} + 11x - 6$ 的一个零点是 $x = 1$。另外两个零点都是整数，它们的和是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "Factoring gives $(x - 1)(x - 2)(x - 3)$, so the other zeros are 2 and 3 and their sum is 5. Adding all three zeros (1 + 2 + 3 = 6) answers a different question than the one asked.",
        "zh": "因式分解得 $(x - 1)(x - 2)(x - 3)$，所以另外两个零点是 2 和 3，其和为 5。把三个零点全部相加（1 + 2 + 3 = 6）回答的是另一个问题。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The zeros of $f(x) = x^{2} + 16$ are $\\pm bi$. Find the positive value of $b$.",
        "zh": "$f(x) = x^{2} + 16$ 的零点为 $\\pm bi$。求 $b$ 的正值。"
      },
      "answer": "4",
      "accept": [
        "4.0"
      ],
      "explanation": {
        "en": "Set $x^{2} + 16 = 0$, so $x^{2} = -16$ and $x = \\pm 4i$, giving $b = 4$. Answering 16 skips taking the square root, and forgetting $i$ would wrongly claim there are no zeros.",
        "zh": "令 $x^{2} + 16 = 0$，则 $x^{2} = -16$，$x = \\pm 4i$，得 $b = 4$。答成 16 是漏了开平方根，而忘记 $i$ 会错误地认为没有零点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A degree-5 polynomial with real coefficients has 3 real zeros counting multiplicity. How many non-real zeros does it have, counting multiplicity?",
        "zh": "一个 5 次实系数多项式，计入重数有 3 个实数零点。计入重数，它有多少个非实数零点？"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "Total zeros equal the degree, 5; subtracting the 3 real zeros leaves $5 - 3 = 2$ non-real zeros, which correctly form one conjugate pair. Forgetting that every degree-5 polynomial has exactly 5 zeros leads to an undercount.",
        "zh": "零点总数等于次数 5；减去 3 个实数零点得 $5 - 3 = 2$ 个非实数零点，恰好构成一对共轭。忘记每个 5 次多项式恰有 5 个零点会导致数少。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the degree of a polynomial with zeros $x = 0$ (multiplicity 1), $x = 1$ (multiplicity 2), and $x = -2$ (multiplicity 2)?",
        "zh": "一个多项式的零点为 $x = 0$（重数 1）、$x = 1$（重数 2）和 $x = -2$（重数 2），其次数是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "Sum the multiplicities: $1 + 2 + 2 = 5$. Counting the three distinct zeros as degree 3 forgets that repeated zeros each add to the degree.",
        "zh": "把重数相加：$1 + 2 + 2 = 5$。把三个不同零点当作次数 3 会忽略重复零点各自都会增加次数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(3)$ for $f(x) = 2x^{3} - 3x^{2} - 11x + 6$.",
        "zh": "对于 $f(x) = 2x^{3} - 3x^{2} - 11x + 6$，求 $f(3)$。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "Substitute $x = 3$: $2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0$, confirming $x = 3$ is a zero. Mishandling the powers, such as using $3^{3} = 9$, throws off the total.",
        "zh": "代入 $x = 3$：$2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0$，确认 $x = 3$ 是零点。乘方算错，例如把 $3^{3}$ 当成 9，会使总和出错。"
      }
    }
  ],
  "polynomial-rational/rational-functions-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "What is the vertical asymptote of $f(x) = \\frac{x + 1}{x - 4}$?",
        "zh": "$f(x) = \\frac{x + 1}{x - 4}$ 的垂直渐近线是什么？"
      },
      "choices": [
        "$x = 4$",
        "$x = -4$",
        "$x = -1$",
        "$x = 1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set the denominator to zero: $x - 4 = 0$ gives $x = 4$, and the numerator is nonzero there, so it is a true vertical asymptote. Using the numerator's zero $x = -1$ finds an x-intercept, not an asymptote.",
        "zh": "令分母为零：$x - 4 = 0$ 得 $x = 4$，且分子在此不为零，所以这是真正的垂直渐近线。用分子的零点 $x = -1$ 求出的是 x 截距，而不是渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the horizontal asymptote of $f(x) = \\frac{3x^{2} + 1}{x^{2} - 5}$?",
        "zh": "$f(x) = \\frac{3x^{2} + 1}{x^{2} - 5}$ 的水平渐近线是什么？"
      },
      "choices": [
        "$y = 0$",
        "$y = 3$",
        "none",
        "$y = \\frac{1}{5}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "When numerator and denominator have equal degree, the horizontal asymptote is the ratio of leading coefficients, $\\frac{3}{1} = 3$. Concluding $y = 0$ applies only when the denominator has the higher degree.",
        "zh": "当分子与分母次数相等时，水平渐近线是首项系数之比 $\\frac{3}{1} = 3$。得出 $y = 0$ 只在分母次数更高时才成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the horizontal asymptote of $f(x) = \\frac{2x}{x^{2} + 1}$?",
        "zh": "$f(x) = \\frac{2x}{x^{2} + 1}$ 的水平渐近线是什么？"
      },
      "choices": [
        "$y = 2$",
        "none (there is a slant asymptote)",
        "$y = 0$",
        "$y = 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The denominator's degree (2) exceeds the numerator's (1), so the horizontal asymptote is $y = 0$. Taking the ratio of leading coefficients $\\frac{2}{1}$ only works when the degrees are equal.",
        "zh": "分母次数（2）大于分子次数（1），所以水平渐近线是 $y = 0$。取首项系数之比 $\\frac{2}{1}$ 只在次数相等时才有效。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slant (oblique) asymptote of $f(x) = \\frac{x^{2} + 1}{x - 1}$?",
        "zh": "$f(x) = \\frac{x^{2} + 1}{x - 1}$ 的斜渐近线是什么？"
      },
      "choices": [
        "$y = 0$",
        "$y = x$",
        "$y = x - 1$",
        "$y = x + 1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since the numerator's degree is exactly one more than the denominator's, divide: $x^{2} + 1 = (x - 1)(x + 1) + 2$, so the quotient $x + 1$ is the slant asymptote. Ignoring the division and guessing $y = x$ drops the constant term of the quotient.",
        "zh": "因为分子次数恰好比分母高一次，作除法：$x^{2} + 1 = (x - 1)(x + 1) + 2$，所以商 $x + 1$ 是斜渐近线。不作除法而猜 $y = x$ 会漏掉商的常数项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Where does $f(x) = \\frac{(x - 2)(x + 3)}{(x - 2)(x - 5)}$ have a hole?",
        "zh": "$f(x) = \\frac{(x - 2)(x + 3)}{(x - 2)(x - 5)}$ 在何处有一个空洞？"
      },
      "choices": [
        "$x = 2$",
        "$x = 5$",
        "$x = -3$",
        "$x = 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The factor $(x - 2)$ cancels from top and bottom, so there is a removable discontinuity (hole) at $x = 2$. The factor $(x - 5)$ does not cancel, so it produces a vertical asymptote rather than a hole.",
        "zh": "因式 $(x - 2)$ 在分子分母中约去，所以在 $x = 2$ 处有可去间断点（空洞）。因式 $(x - 5)$ 不能约去，所以它产生垂直渐近线而非空洞。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Where does $f(x) = \\frac{(x - 2)(x + 3)}{(x - 2)(x - 5)}$ have a vertical asymptote?",
        "zh": "$f(x) = \\frac{(x - 2)(x + 3)}{(x - 2)(x - 5)}$ 在何处有垂直渐近线？"
      },
      "choices": [
        "$x = 2$",
        "$x = 5$",
        "$x = -3$",
        "$x = -5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "After the $(x - 2)$ factor cancels, only $(x - 5)$ remains in the denominator, giving a vertical asymptote at $x = 5$. Choosing $x = 2$ mistakes the removable hole for an asymptote.",
        "zh": "在 $(x - 2)$ 约去之后，分母只剩 $(x - 5)$，所以在 $x = 5$ 处有垂直渐近线。选 $x = 2$ 是把可去空洞误当成渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the x-intercept of $f(x) = \\frac{x - 6}{x + 2}$?",
        "zh": "$f(x) = \\frac{x - 6}{x + 2}$ 的 x 截距是什么？"
      },
      "choices": [
        "$x = -2$",
        "$x = -6$",
        "$x = 6$",
        "$x = 2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "An x-intercept occurs where the numerator is zero (and the denominator is not): $x - 6 = 0$ gives $x = 6$. Setting the denominator to zero instead locates the vertical asymptote $x = -2$.",
        "zh": "x 截距出现在分子为零（且分母不为零）处：$x - 6 = 0$ 得 $x = 6$。改为令分母为零求出的是垂直渐近线 $x = -2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the y-intercept of $f(x) = \\frac{x - 6}{x + 2}$?",
        "zh": "$f(x) = \\frac{x - 6}{x + 2}$ 的 y 截距是什么？"
      },
      "choices": [
        "$-6$",
        "$-2$",
        "$3$",
        "$-3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Evaluate at $x = 0$: $f(0) = \\frac{-6}{2} = -3$. Reading off the numerator's constant $-6$ skips dividing by the denominator's value at $x = 0$.",
        "zh": "在 $x = 0$ 处求值：$f(0) = \\frac{-6}{2} = -3$。直接读分子常数 $-6$ 是漏了除以分母在 $x = 0$ 处的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^{2} - x - 6 > 0$.",
        "zh": "解 $x^{2} - x - 6 > 0$。"
      },
      "choices": [
        "$x < -2$ or $x > 3$",
        "$x < -3$ or $x > 2$",
        "$-2 < x < 3$",
        "all real numbers"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor to $(x - 3)(x + 2) > 0$ with critical points $-2$ and $3$; the product is positive outside the roots, so $x < -2$ or $x > 3$. Choosing the interval between the roots solves the opposite inequality ($< 0$).",
        "zh": "因式分解为 $(x - 3)(x + 2) > 0$，临界点为 $-2$ 和 $3$；乘积在根之外为正，所以 $x < -2$ 或 $x > 3$。选取两根之间的区间解的是相反的不等式（$< 0$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\frac{x - 1}{x + 2} < 0$.",
        "zh": "解 $\\frac{x - 1}{x + 2} < 0$。"
      },
      "choices": [
        "$x < -2$ or $x > 1$",
        "$-2 < x < 1$",
        "$-1 < x < 2$",
        "$x > 1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The critical points are $x = 1$ (numerator) and $x = -2$ (denominator); a sign chart shows the quotient is negative only between them, so $-2 < x < 1$. The endpoints are excluded because $x = -2$ is undefined and the inequality is strict.",
        "zh": "临界点是 $x = 1$（分子）和 $x = -2$（分母）；符号表显示商仅在两者之间为负，所以 $-2 < x < 1$。端点被排除，因为 $x = -2$ 无定义且不等式是严格的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^{2} \\le 4$.",
        "zh": "解 $x^{2} \\le 4$。"
      },
      "choices": [
        "$0 \\le x \\le 4$",
        "$x \\le -2$ or $x \\ge 2$",
        "$-2 \\le x \\le 2$",
        "$-4 \\le x \\le 4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rewrite as $x^{2} - 4 \\le 0$, i.e. $(x - 2)(x + 2) \\le 0$, which holds between the roots: $-2 \\le x \\le 2$. Taking the square root as just $x \\le 2$ forgets the negative solutions, and using 4 as a bound skips the square root entirely.",
        "zh": "改写为 $x^{2} - 4 \\le 0$，即 $(x - 2)(x + 2) \\le 0$，在两根之间成立：$-2 \\le x \\le 2$。只开成 $x \\le 2$ 会漏掉负数解，而用 4 作边界则完全没有开平方根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What kind of asymptote does $f(x) = \\frac{2x^{2} + 3}{x - 1}$ have for large $|x|$?",
        "zh": "当 $|x|$ 很大时，$f(x) = \\frac{2x^{2} + 3}{x - 1}$ 有哪种渐近线？"
      },
      "choices": [
        "Horizontal $y = 2$",
        "Horizontal $y = 0$",
        "No asymptote at all",
        "Slant (oblique)"
      ],
      "answer": 3,
      "explanation": {
        "en": "The numerator's degree (2) is exactly one more than the denominator's (1), which produces a slant asymptote, not a horizontal one. A horizontal asymptote would require the degrees to be equal or the denominator's to be larger.",
        "zh": "分子次数（2）恰好比分母次数（1）高一次，这会产生斜渐近线，而不是水平渐近线。水平渐近线需要次数相等或分母次数更高。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the vertical asymptote of $f(x) = \\frac{5}{x + 7}$. Enter the value of $x$.",
        "zh": "求 $f(x) = \\frac{5}{x + 7}$ 的垂直渐近线。请填入 $x$ 的值。"
      },
      "answer": "-7",
      "accept": [
        "-7.0",
        "x=-7",
        "x = -7"
      ],
      "explanation": {
        "en": "Set the denominator to zero: $x + 7 = 0$ gives $x = -7$. Dropping the sign and writing $7$ is the usual error.",
        "zh": "令分母为零：$x + 7 = 0$ 得 $x = -7$。忘记符号写成 $7$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the horizontal asymptote of $f(x) = \\frac{4x^{3} + 2}{2x^{3} - x}$. Enter the y-value.",
        "zh": "求 $f(x) = \\frac{4x^{3} + 2}{2x^{3} - x}$ 的水平渐近线。请填入 y 值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "y=2",
        "y = 2"
      ],
      "explanation": {
        "en": "Equal degrees (both 3) mean the horizontal asymptote is the ratio of leading coefficients, $\\frac{4}{2} = 2$. Concluding $y = 0$ would only apply if the denominator had the higher degree.",
        "zh": "次数相等（都是 3）意味着水平渐近线是首项系数之比 $\\frac{4}{2} = 2$。得出 $y = 0$ 只在分母次数更高时才成立。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the y-intercept of $f(x) = \\frac{3x - 9}{x + 3}$. Enter the y-value.",
        "zh": "求 $f(x) = \\frac{3x - 9}{x + 3}$ 的 y 截距。请填入 y 值。"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "Evaluate at $x = 0$: $f(0) = \\frac{-9}{3} = -3$. Reading only the numerator constant $-9$ skips dividing by the denominator at $x = 0$.",
        "zh": "在 $x = 0$ 处求值：$f(0) = \\frac{-9}{3} = -3$。只读分子常数 $-9$ 是漏了在 $x = 0$ 处除以分母。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the x-intercept of $f(x) = \\frac{2x + 8}{x - 1}$. Enter the value of $x$.",
        "zh": "求 $f(x) = \\frac{2x + 8}{x - 1}$ 的 x 截距。请填入 $x$ 的值。"
      },
      "answer": "-4",
      "accept": [
        "-4.0"
      ],
      "explanation": {
        "en": "Set the numerator to zero: $2x + 8 = 0$ gives $x = -4$. Using the denominator's zero $x = 1$ instead finds the vertical asymptote, not the x-intercept.",
        "zh": "令分子为零：$2x + 8 = 0$ 得 $x = -4$。改用分母的零点 $x = 1$ 求出的是垂直渐近线，而不是 x 截距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the x-coordinate of the hole in $f(x) = \\frac{x^{2} - 9}{x - 3}$.",
        "zh": "求 $f(x) = \\frac{x^{2} - 9}{x - 3}$ 中空洞的 x 坐标。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "x=3",
        "x = 3"
      ],
      "explanation": {
        "en": "Factor the numerator: $\\frac{(x - 3)(x + 3)}{x - 3}$; the $(x - 3)$ cancels, leaving a hole at $x = 3$. Without factoring, $x = 3$ looks like a vertical asymptote, but the cancellation makes it a removable hole.",
        "zh": "分解分子：$\\frac{(x - 3)(x + 3)}{x - 3}$；$(x - 3)$ 约去，在 $x = 3$ 处留下空洞。不作分解时 $x = 3$ 看似垂直渐近线，但约去使它成为可去空洞。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many vertical asymptotes does $f(x) = \\frac{x^{2} - 1}{x^{2} - 4}$ have?",
        "zh": "$f(x) = \\frac{x^{2} - 1}{x^{2} - 4}$ 有多少条垂直渐近线？"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "The denominator $x^{2} - 4$ is zero at $x = 2$ and $x = -2$, and neither cancels with the numerator $x^{2} - 1$, so there are 2 vertical asymptotes. Assuming a factor cancels here is the trap; the numerator factors to $(x - 1)(x + 1)$, sharing nothing with the denominator.",
        "zh": "分母 $x^{2} - 4$ 在 $x = 2$ 和 $x = -2$ 处为零，且都不与分子 $x^{2} - 1$ 约去，所以有 2 条垂直渐近线。误以为这里有因式约去是陷阱；分子分解为 $(x - 1)(x + 1)$，与分母没有公因式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The slant asymptote of $f(x) = \\frac{x^{2} + 3x}{x - 1}$ is $y = x + b$. Find $b$.",
        "zh": "$f(x) = \\frac{x^{2} + 3x}{x - 1}$ 的斜渐近线为 $y = x + b$。求 $b$。"
      },
      "answer": "4",
      "accept": [
        "4.0"
      ],
      "explanation": {
        "en": "Divide: $x^{2} + 3x = (x - 1)(x + 4) + 4$, so the quotient is $x + 4$ and $b = 4$. Stopping the division early and reporting $b = 3$ from the original $3x$ term skips the effect of dividing by $x - 1$.",
        "zh": "作除法：$x^{2} + 3x = (x - 1)(x + 4) + 4$，所以商为 $x + 4$，$b = 4$。过早停止除法、根据原式的 $3x$ 项报 $b = 3$，忽略了除以 $x - 1$ 的作用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^{2} - 5x + 6 < 0$. The solution is $a < x < b$. Find $a + b$.",
        "zh": "解 $x^{2} - 5x + 6 < 0$。解为 $a < x < b$。求 $a + b$。"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "Factor to $(x - 2)(x - 3) < 0$, so the solution is $2 < x < 3$ and $a + b = 2 + 3 = 5$. Choosing the exterior region would solve the $> 0$ inequality instead of the one asked.",
        "zh": "因式分解为 $(x - 2)(x - 3) < 0$，所以解为 $2 < x < 3$，$a + b = 2 + 3 = 5$。选取外部区间解的是 $> 0$ 的不等式，而非所问的不等式。"
      }
    }
  ],
  "exponential-logarithmic/exponential-functions-models": [
    {
      "type": "mc",
      "question": {
        "en": "A population of bacteria is modeled by $P(t) = 500 \\cdot 2^{t}$, where $t$ is in hours. What is the population after 3 hours?",
        "zh": "一个细菌种群由 $P(t) = 500 \\cdot 2^{t}$ 建模，其中 $t$ 以小时为单位。3 小时后种群数量是多少？"
      },
      "choices": [
        "4000",
        "3000",
        "1500",
        "5000"
      ],
      "answer": 0,
      "explanation": {
        "en": "Substitute $t = 3$: $P(3) = 500 \\cdot 2^{3} = 500 \\cdot 8 = 4000$. A common error is multiplying the base times the exponent ($2 \\cdot 3 = 6$, giving 3000) instead of raising 2 to the 3rd power.",
        "zh": "代入 $t = 3$：$P(3) = 500 \\cdot 2^{3} = 500 \\cdot 8 = 4000$。常见错误是把底数乘以指数（$2 \\cdot 3 = 6$，得到 3000），而不是求 2 的 3 次方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which function represents exponential decay?",
        "zh": "下列哪个函数表示指数衰减？"
      },
      "choices": [
        "$y = 3 \\cdot (1.2)^{x}$",
        "$y = 5 \\cdot (0.7)^{x}$",
        "$y = 2x^{3}$",
        "$y = 4 + 2x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Exponential decay has the form $y = a \\cdot b^{x}$ with $0 < b < 1$; here $b = 0.7$. A base greater than 1 (like 1.2) gives growth, and a power function or a linear function is not exponential at all.",
        "zh": "指数衰减的形式为 $y = a \\cdot b^{x}$，其中 $0 < b < 1$；这里 $b = 0.7$。底数大于 1（如 1.2）表示增长，而幂函数或线性函数根本不是指数函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The value $e$ is approximately equal to which of the following?",
        "zh": "常数 $e$ 大约等于下列哪个值？"
      },
      "choices": [
        "3.14",
        "1.62",
        "2.72",
        "1.41"
      ],
      "answer": 2,
      "explanation": {
        "en": "Euler's number $e \\approx 2.71828$. The value 3.14 is $\\pi$, 1.62 is the golden ratio, and 1.41 is $\\sqrt{2}$; confusing $e$ with $\\pi$ is the most common slip.",
        "zh": "欧拉数 $e \\approx 2.71828$。3.14 是 $\\pi$，1.62 是黄金比例，1.41 是 $\\sqrt{2}$；把 $e$ 与 $\\pi$ 混淆是最常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the horizontal asymptote of $y = 3^{x} + 2$?",
        "zh": "$y = 3^{x} + 2$ 的水平渐近线是什么？"
      },
      "choices": [
        "$y = -2$",
        "$y = 0$",
        "$y = 3$",
        "$y = 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The parent graph $y = 3^{x}$ has asymptote $y = 0$; adding 2 shifts the whole graph up 2 units, so the asymptote becomes $y = 2$. Forgetting the vertical shift leaves the wrong value of $y = 0$.",
        "zh": "母函数 $y = 3^{x}$ 的渐近线是 $y = 0$；加 2 使整个图象向上平移 2 个单位，所以渐近线变为 $y = 2$。忘记竖直平移会得到错误的 $y = 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\$1000$ is invested at 5% annual interest compounded annually. Using $A = P(1 + r)^{t}$, what is the value after 2 years?",
        "zh": "将 $\\$1000$ 以 5% 的年利率按年复利投资。用 $A = P(1 + r)^{t}$，2 年后的价值是多少？"
      },
      "choices": [
        "$\\$1102.50$",
        "$\\$1100.00$",
        "$\\$1050.00$",
        "$\\$1105.00$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$A = 1000(1.05)^{2} = 1000 \\cdot 1.1025 = \\$1102.50$. Treating the interest as simple ($1000 + 2 \\cdot 50 = \\$1100$) misses the interest earned on the first year's interest.",
        "zh": "$A = 1000(1.05)^{2} = 1000 \\cdot 1.1025 = \\$1102.50$。把利息当作单利计算（$1000 + 2 \\cdot 50 = \\$1100$）会漏掉第一年利息所产生的利息。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The formula for continuous compound growth is:",
        "zh": "连续复利增长的公式是："
      },
      "choices": [
        "$A = P(1 + r)^{t}$",
        "$A = Pe^{rt}$",
        "$A = Prt$",
        "$A = P + rt$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Continuous growth uses the base $e$: $A = Pe^{rt}$. The form $P(1 + r)^{t}$ is discrete annual compounding, and $Prt$ or $P + rt$ describe simple (linear) interest, not continuous growth.",
        "zh": "连续增长使用底数 $e$：$A = Pe^{rt}$。$P(1 + r)^{t}$ 是离散的按年复利，而 $Prt$ 或 $P + rt$ 描述的是单利（线性）利息，不是连续增长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For any exponential function $y = a \\cdot b^{x}$ with $a > 0$ and $b > 0$, what is the $y$-intercept?",
        "zh": "对于任意指数函数 $y = a \\cdot b^{x}$（$a > 0$，$b > 0$），其 $y$ 轴截距是多少？"
      },
      "choices": [
        "$b$",
        "$0$",
        "$a$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At $x = 0$, $b^{0} = 1$, so $y = a \\cdot 1 = a$. Answering $b$ confuses the base with the initial value, and answering 1 ignores the coefficient $a$.",
        "zh": "当 $x = 0$ 时，$b^{0} = 1$，所以 $y = a \\cdot 1 = a$。回答 $b$ 是把底数与初始值混淆，回答 1 则忽略了系数 $a$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car worth $\\$20{,}000$ loses value at 15% per year. Which model gives its value after $t$ years?",
        "zh": "一辆价值 $\\$20{,}000$ 的汽车每年贬值 15%。哪个模型给出 $t$ 年后的价值？"
      },
      "choices": [
        "$V = 20000(15)^{t}$",
        "$V = 20000(1.15)^{t}$",
        "$V = 20000(0.15)^{t}$",
        "$V = 20000(0.85)^{t}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Decreasing by 15% keeps 85% each year, so the base is $1 - 0.15 = 0.85$. Using 0.15 as the base drops 85% of the value every year, and 1.15 would model growth instead of decay.",
        "zh": "每年减少 15% 意味着保留 85%，所以底数是 $1 - 0.15 = 0.85$。用 0.15 作底数意味着每年只剩 15%，而 1.15 则表示增长而非衰减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As $x \\rightarrow -\\infty$, what happens to the graph of $y = 2^{x}$?",
        "zh": "当 $x \\rightarrow -\\infty$ 时，$y = 2^{x}$ 的图象会怎样？"
      },
      "choices": [
        "It approaches $y = 0$",
        "It increases without bound",
        "It approaches $y = 2$",
        "It becomes negative"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a growth function, moving left makes $2^{x}$ shrink toward the asymptote $y = 0$, never going negative. Thinking it turns negative confuses exponential outputs (always positive) with the sign of the exponent.",
        "zh": "对于增长函数，向左移动使 $2^{x}$ 趋向渐近线 $y = 0$，永远不会为负。认为它变负是把指数函数的输出（始终为正）与指数的符号混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The number of a certain type of atom triples every year, starting at 4. Which expression gives the amount after 5 years?",
        "zh": "某种原子的数量每年增至 3 倍，初始为 4。哪个表达式给出 5 年后的数量？"
      },
      "choices": [
        "$4 \\cdot 5^{3}$",
        "$4 \\cdot 3^{5}$",
        "$3 \\cdot 4^{5}$",
        "$4 \\cdot 3 \\cdot 5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "'Triples every year' means the base is 3 and the exponent is the number of years: $4 \\cdot 3^{5}$. Swapping base and exponent to $4 \\cdot 5^{3}$ mixes up the growth factor with the time.",
        "zh": "“每年增至 3 倍”意味着底数是 3，指数是年数：$4 \\cdot 3^{5}$。把底数与指数互换成 $4 \\cdot 5^{3}$ 是把增长因子与时间混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\$2000$ grows continuously at an annual rate of 4%. Using $A = Pe^{rt}$, which expression gives the value after 10 years?",
        "zh": "$\\$2000$ 以 4% 的年利率连续增长。用 $A = Pe^{rt}$，哪个表达式给出 10 年后的价值？"
      },
      "choices": [
        "$2000e^{40}$",
        "$2000(0.04)^{10}$",
        "$2000e^{0.4}$",
        "$2000 \\cdot 0.4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $r = 0.04$ and $t = 10$, so $rt = 0.4$ and $A = 2000e^{0.4}$. Writing $e^{40}$ forgets to convert the percent to a decimal before multiplying.",
        "zh": "这里 $r = 0.04$，$t = 10$，所以 $rt = 0.4$，$A = 2000e^{0.4}$。写成 $e^{40}$ 是在相乘前忘记把百分比化为小数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about the graph of $y = a \\cdot b^{x}$ (with $a > 0$, $b > 1$) is TRUE?",
        "zh": "关于图象 $y = a \\cdot b^{x}$（$a > 0$，$b > 1$）的哪种说法是正确的？"
      },
      "choices": [
        "The graph is a straight line",
        "The range includes negative numbers",
        "It has an $x$-intercept",
        "The domain is all real numbers"
      ],
      "answer": 3,
      "explanation": {
        "en": "An exponential function is defined for every real $x$, so the domain is all reals; its range is $y > 0$, so there is no $x$-intercept and no negative outputs. Expecting an $x$-intercept treats it like a line or polynomial.",
        "zh": "指数函数对每个实数 $x$ 都有定义，所以定义域是全体实数；其值域是 $y > 0$，因此没有 $x$ 轴截距，也没有负输出。期望有 $x$ 轴截距是把它当作直线或多项式了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $P(0)$ for $P(t) = 750 \\cdot (1.08)^{t}$.",
        "zh": "对 $P(t) = 750 \\cdot (1.08)^{t}$，求 $P(0)$。"
      },
      "answer": "750",
      "accept": [
        "750.0",
        "750.00",
        "$750"
      ],
      "explanation": {
        "en": "Any nonzero base raised to the 0 power is 1, so $P(0) = 750 \\cdot 1 = 750$. This is the initial amount; multiplying by 1.08 here would wrongly apply one year of growth.",
        "zh": "任何非零底数的 0 次方都是 1，所以 $P(0) = 750 \\cdot 1 = 750$。这是初始量；此处再乘以 1.08 会错误地多算一年的增长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample doubles every day. If it starts at 6 grams, how many grams are there after 4 days?",
        "zh": "一份样本每天翻倍。若初始为 6 克，4 天后有多少克？"
      },
      "answer": "96",
      "accept": [
        "96.0",
        "96 grams",
        "96 g",
        "96克"
      ],
      "explanation": {
        "en": "Doubling for 4 days multiplies by $2^{4} = 16$: $6 \\cdot 16 = 96$ grams. Multiplying $6 \\cdot 2 \\cdot 4 = 48$ treats the repeated doubling as a single multiplication by 8.",
        "zh": "翻倍 4 天相当于乘以 $2^{4} = 16$：$6 \\cdot 16 = 96$ 克。计算 $6 \\cdot 2 \\cdot 4 = 48$ 是把反复翻倍当成一次乘 8。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $y = 4^{x}$, what is the value of $y$ when $x = -1$? Give a fraction or decimal.",
        "zh": "对 $y = 4^{x}$，当 $x = -1$ 时 $y$ 的值是多少？用分数或小数表示。"
      },
      "answer": "0.25",
      "accept": [
        "1/4",
        ".25",
        "0.250",
        "0,25"
      ],
      "explanation": {
        "en": "A negative exponent means reciprocal: $4^{-1} = \\frac{1}{4} = 0.25$. Answering $-4$ misreads the negative exponent as multiplying by a negative sign.",
        "zh": "负指数表示取倒数：$4^{-1} = \\frac{1}{4} = 0.25$。回答 $-4$ 是把负指数误读为乘以负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$\\$500$ is invested at 6% compounded annually. Using $A = 500(1.06)^{3}$, find the value after 3 years. Round to the nearest cent.",
        "zh": "将 $\\$500$ 以 6% 按年复利投资。用 $A = 500(1.06)^{3}$，求 3 年后的价值，四舍五入到分。"
      },
      "answer": "595.51",
      "accept": [
        "595.51",
        "$595.51",
        "595.5",
        "595.508"
      ],
      "explanation": {
        "en": "$500(1.06)^{3} = 500 \\cdot 1.191016 = \\$595.51$. Using simple interest ($500 + 3 \\cdot 30 = \\$590$) understates the value because it ignores compounding.",
        "zh": "$500(1.06)^{3} = 500 \\cdot 1.191016 = \\$595.51$。用单利（$500 + 3 \\cdot 30 = \\$590$）会低估价值，因为它忽略了复利。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity decays so that each hour it keeps 90% of its amount. What is the decay base $b$ in $y = a \\cdot b^{x}$? Give a decimal.",
        "zh": "某量衰减，每小时保留其数量的 90%。在 $y = a \\cdot b^{x}$ 中衰减底数 $b$ 是多少？用小数表示。"
      },
      "answer": "0.9",
      "accept": [
        "0.90",
        ".9",
        "0.900",
        "0,9"
      ],
      "explanation": {
        "en": "Keeping 90% each hour means the base is $0.90$. Using 0.10 would model keeping only 10% (a 90% loss) instead of a 10% loss.",
        "zh": "每小时保留 90% 意味着底数是 $0.90$。用 0.10 会表示只保留 10%（损失 90%），而不是损失 10%。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $A = Pe^{rt}$ with $P = 1000$, $r = 0.05$, $t = 8$, compute $rt$ (the exponent). Give a decimal.",
        "zh": "用 $A = Pe^{rt}$，其中 $P = 1000$，$r = 0.05$，$t = 8$，计算 $rt$（指数）。用小数表示。"
      },
      "answer": "0.4",
      "accept": [
        "0.40",
        ".4",
        "0.400",
        "2/5",
        "0,4"
      ],
      "explanation": {
        "en": "$rt = 0.05 \\cdot 8 = 0.4$. Multiplying without converting the percent (using 5 instead of 0.05) would give 40, which is far too large.",
        "zh": "$rt = 0.05 \\cdot 8 = 0.4$。不把百分比化为小数就相乘（用 5 而不是 0.05）会得到 40，远远过大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $y = 5^{x} - 3$ has a horizontal asymptote at $y = \\underline{\\phantom{x}}$. Give the number.",
        "zh": "图象 $y = 5^{x} - 3$ 的水平渐近线在 $y = \\underline{\\phantom{x}}$。给出这个数。"
      },
      "answer": "-3",
      "accept": [
        "-3.0",
        "-3",
        "y=-3",
        "y = -3"
      ],
      "explanation": {
        "en": "Subtracting 3 shifts the parent asymptote $y = 0$ down by 3, giving $y = -3$. Leaving the answer at 0 ignores the vertical shift.",
        "zh": "减去 3 使母函数渐近线 $y = 0$ 向下平移 3，得到 $y = -3$。把答案留作 0 是忽略了竖直平移。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A colony starts at 200 and grows by a factor of 1.5 each week. Write its value after 2 weeks as a number.",
        "zh": "一个群落初始为 200，每周增长 1.5 倍。写出 2 周后的数值。"
      },
      "answer": "450",
      "accept": [
        "450.0",
        "450.00",
        "450个",
        "450 个"
      ],
      "explanation": {
        "en": "$200 \\cdot (1.5)^{2} = 200 \\cdot 2.25 = 450$. Multiplying $200 \\cdot 1.5 \\cdot 2 = 600$ turns the repeated growth factor into a single scaling and overshoots.",
        "zh": "$200 \\cdot (1.5)^{2} = 200 \\cdot 2.25 = 450$。计算 $200 \\cdot 1.5 \\cdot 2 = 600$ 是把反复的增长因子当成一次缩放，结果偏大。"
      }
    }
  ],
  "exponential-logarithmic/logarithms-solving-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\log_{2}(32)$.",
        "zh": "求 $\\log_{2}(32)$ 的值。"
      },
      "choices": [
        "5",
        "4",
        "6",
        "16"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\log_{2}(32)$ asks for the power of 2 that gives 32, and $2^{5} = 32$, so the answer is 5. Answering 16 divides 32 by 2 instead of finding the exponent.",
        "zh": "$\\log_{2}(32)$ 求的是使 2 得到 32 的幂，$2^{5} = 32$，所以答案是 5。回答 16 是把 32 除以 2，而不是求指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\log(x) + \\log(y)$?",
        "zh": "哪个表达式等于 $\\log(x) + \\log(y)$？"
      },
      "choices": [
        "$\\log(x + y)$",
        "$\\log(xy)$",
        "$\\log(x - y)$",
        "$\\log(x/y)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The product rule states $\\log(x) + \\log(y) = \\log(xy)$. Writing $\\log(x + y)$ incorrectly adds the arguments instead of multiplying them.",
        "zh": "乘积法则指出 $\\log(x) + \\log(y) = \\log(xy)$。写成 $\\log(x + y)$ 是错误地把自变量相加，而不是相乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rewrite $3^{x} = 20$ in logarithmic form.",
        "zh": "把 $3^{x} = 20$ 写成对数形式。"
      },
      "choices": [
        "$x = \\log_{3}(x)$",
        "$x = \\log_{20}(3)$",
        "$x = \\log_{3}(20)$",
        "$x = 20 \\log(3)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The equation $b^{x} = N$ becomes $x = \\log_{b}(N)$, so $x = \\log_{3}(20)$. Swapping to $\\log_{20}(3)$ reverses the base and the argument.",
        "zh": "方程 $b^{x} = N$ 变为 $x = \\log_{b}(N)$，所以 $x = \\log_{3}(20)$。写成 $\\log_{20}(3)$ 是把底数与自变量颠倒了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the change-of-base formula, $\\log_{5}(12)$ equals:",
        "zh": "用换底公式，$\\log_{5}(12)$ 等于："
      },
      "choices": [
        "$\\frac{\\ln 5}{\\ln 12}$",
        "$\\ln 12 - \\ln 5$",
        "$\\ln(12) \\cdot \\ln(5)$",
        "$\\frac{\\ln 12}{\\ln 5}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Change of base gives $\\log_{5}(12) = \\frac{\\ln 12}{\\ln 5}$ — the log of the argument over the log of the base. Flipping it to $\\frac{\\ln 5}{\\ln 12}$ puts the base on top by mistake.",
        "zh": "换底公式给出 $\\log_{5}(12) = \\frac{\\ln 12}{\\ln 5}$——自变量的对数除以底数的对数。把它倒成 $\\frac{\\ln 5}{\\ln 12}$ 是错误地把底数放在了分子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x) = \\log(x - 4)$?",
        "zh": "$f(x) = \\log(x - 4)$ 的定义域是什么？"
      },
      "choices": [
        "$x > 4$",
        "$x \\ge 4$",
        "$x > 0$",
        "$x < 4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A logarithm requires a positive argument, so $x - 4 > 0$ gives $x > 4$. Including equality ($x \\ge 4$) is wrong because $\\log(0)$ is undefined.",
        "zh": "对数要求自变量为正，所以 $x - 4 > 0$ 得到 $x > 4$。包含等号（$x \\ge 4$）是错误的，因为 $\\log(0)$ 无定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\log_{7}(7^{5})$.",
        "zh": "化简 $\\log_{7}(7^{5})$。"
      },
      "choices": [
        "7",
        "5",
        "$5^{7}$",
        "35"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because $\\log_{b}(b^{k}) = k$, the value is 5. Answering 35 multiplies the base by the exponent instead of using the inverse relationship between logs and exponents.",
        "zh": "由于 $\\log_{b}(b^{k}) = k$，值为 5。回答 35 是把底数乘以指数，而不是利用对数与指数的互逆关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $x$: $\\log_{2}(x) = 4$.",
        "zh": "解方程：$\\log_{2}(x) = 4$。"
      },
      "choices": [
        "8",
        "6",
        "16",
        "2"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rewrite in exponential form: $x = 2^{4} = 16$. Answering 8 computes $2 \\cdot 4$ instead of raising 2 to the 4th power.",
        "zh": "改写为指数形式：$x = 2^{4} = 16$。回答 8 是计算 $2 \\cdot 4$，而不是求 2 的 4 次方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The expression $\\log_{3}(x^{4})$ can be rewritten as:",
        "zh": "表达式 $\\log_{3}(x^{4})$ 可以改写为："
      },
      "choices": [
        "$3 \\log_{3}(x)$",
        "$(\\log_{3} x)^{4}$",
        "$\\log_{3}(4x)$",
        "$4 \\log_{3}(x)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The power rule moves the exponent to the front: $\\log_{3}(x^{4}) = 4 \\log_{3}(x)$. Writing $(\\log_{3} x)^{4}$ raises the whole log to the 4th power, which is a different quantity.",
        "zh": "幂法则把指数移到前面：$\\log_{3}(x^{4}) = 4 \\log_{3}(x)$。写成 $(\\log_{3} x)^{4}$ 是把整个对数取 4 次方，那是不同的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A substance has a half-life of 8 years. Which equation models the fraction remaining after $t$ years?",
        "zh": "某物质的半衰期为 8 年。哪个方程建模 $t$ 年后剩余的比例？"
      },
      "choices": [
        "$y = (0.5)^{t/8}$",
        "$y = (0.5)^{8t}$",
        "$y = 8(0.5)^{t}$",
        "$y = (2)^{t/8}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Half-life means multiplying by $\\frac{1}{2}$ every 8 years, so the exponent is $\\frac{t}{8}$: $y = (0.5)^{t/8}$. Using $8t$ as the exponent would halve the amount far too quickly.",
        "zh": "半衰期意味着每 8 年乘以 $\\frac{1}{2}$，所以指数是 $\\frac{t}{8}$：$y = (0.5)^{t/8}$。用 $8t$ 作指数会使数量减少得太快。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $e^{x} = 7$. Which is the exact solution?",
        "zh": "解 $e^{x} = 7$。哪个是精确解？"
      },
      "choices": [
        "$x = \\frac{7}{e}$",
        "$x = \\ln(7)$",
        "$x = \\log(7)$",
        "$x = e^{7}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Taking the natural log of both sides gives $x = \\ln(7)$, since $\\ln$ is the inverse of $e^{x}$. Using $\\log$ (base 10) instead of $\\ln$ would not cleanly undo base $e$.",
        "zh": "两边取自然对数得到 $x = \\ln(7)$，因为 $\\ln$ 是 $e^{x}$ 的反函数。用 $\\log$（以 10 为底）而不是 $\\ln$ 无法干净地抵消底数 $e$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\log(x) + \\log(x - 3) = 1$ (base 10). Which value must be rejected as extraneous?",
        "zh": "解 $\\log(x) + \\log(x - 3) = 1$（以 10 为底）。哪个值必须作为增根舍去？"
      },
      "choices": [
        "$x = 5$",
        "$x = 10$",
        "$x = -2$",
        "$x = 3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Combining gives $x(x-3) = 10$, so $x^{2} - 3x - 10 = 0$ and $x = 5$ or $x = -2$. Since $\\log(-2)$ is undefined, $x = -2$ is extraneous and only $x = 5$ works.",
        "zh": "合并得 $x(x-3) = 10$，即 $x^{2} - 3x - 10 = 0$，解得 $x = 5$ 或 $x = -2$。由于 $\\log(-2)$ 无定义，$x = -2$ 是增根，只有 $x = 5$ 成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the value of $\\ln(1)$?",
        "zh": "$\\ln(1)$ 的值是多少？"
      },
      "choices": [
        "$e$",
        "$1$",
        "undefined",
        "$0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $e^{0} = 1$, we have $\\ln(1) = 0$. Answering 1 confuses the input of the log with its output.",
        "zh": "由于 $e^{0} = 1$，所以 $\\ln(1) = 0$。回答 1 是把对数的输入与输出混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log_{10}(1000)$.",
        "zh": "求 $\\log_{10}(1000)$ 的值。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "3.00",
        "+3"
      ],
      "explanation": {
        "en": "$10^{3} = 1000$, so $\\log_{10}(1000) = 3$. Answering 100 divides 1000 by 10 instead of finding the exponent.",
        "zh": "$10^{3} = 1000$，所以 $\\log_{10}(1000) = 3$。回答 100 是把 1000 除以 10，而不是求指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\log_{4}(x) = 3$ for $x$.",
        "zh": "解 $\\log_{4}(x) = 3$，求 $x$。"
      },
      "answer": "64",
      "accept": [
        "64.0",
        "64.00",
        "x=64",
        "x = 64"
      ],
      "explanation": {
        "en": "Rewrite as $x = 4^{3} = 64$. Answering 12 computes $4 \\cdot 3$ instead of raising 4 to the 3rd power.",
        "zh": "改写为 $x = 4^{3} = 64$。回答 12 是计算 $4 \\cdot 3$，而不是求 4 的 3 次方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $2^{x} = 16$ for $x$.",
        "zh": "解 $2^{x} = 16$，求 $x$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4.00",
        "x=4",
        "x = 4"
      ],
      "explanation": {
        "en": "Since $2^{4} = 16$, $x = 4$. Answering 8 divides 16 by 2 rather than finding the exponent that produces 16.",
        "zh": "由于 $2^{4} = 16$，$x = 4$。回答 8 是把 16 除以 2，而不是求产生 16 的指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample decays with half-life 5 hours. After how many hours will $\\frac{1}{8}$ of it remain?",
        "zh": "一份样本的半衰期为 5 小时。经过多少小时后剩余 $\\frac{1}{8}$？"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "15 hours",
        "15 hrs",
        "15小时"
      ],
      "explanation": {
        "en": "$\\frac{1}{8} = (\\frac{1}{2})^{3}$ means 3 half-lives, and $3 \\cdot 5 = 15$ hours. Answering 40 mistakenly multiplies by 8 instead of counting 3 halvings.",
        "zh": "$\\frac{1}{8} = (\\frac{1}{2})^{3}$ 意味着 3 个半衰期，$3 \\cdot 5 = 15$ 小时。回答 40 是错误地乘以 8，而不是数 3 次减半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use change of base to evaluate $\\log_{2}(10)$. Round to two decimal places.",
        "zh": "用换底公式求 $\\log_{2}(10)$ 的值。四舍五入到两位小数。"
      },
      "answer": "3.32",
      "accept": [
        "3.32",
        "3.322",
        "3.3",
        "3.321928"
      ],
      "explanation": {
        "en": "$\\log_{2}(10) = \\frac{\\ln 10}{\\ln 2} = \\frac{2.3026}{0.6931} \\approx 3.32$. Dividing $\\ln 2$ by $\\ln 10$ instead would give about 0.30, the reciprocal.",
        "zh": "$\\log_{2}(10) = \\frac{\\ln 10}{\\ln 2} = \\frac{2.3026}{0.6931} \\approx 3.32$。反过来把 $\\ln 2$ 除以 $\\ln 10$ 会得到约 0.30，即其倒数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write $\\log_{6}(x) = 2$ in exponential form and solve for $x$.",
        "zh": "把 $\\log_{6}(x) = 2$ 写成指数形式并求 $x$。"
      },
      "answer": "36",
      "accept": [
        "36.0",
        "36.00",
        "x=36",
        "x = 36"
      ],
      "explanation": {
        "en": "The exponential form is $x = 6^{2} = 36$. Answering 12 computes $6 \\cdot 2$ rather than squaring the base.",
        "zh": "指数形式为 $x = 6^{2} = 36$。回答 12 是计算 $6 \\cdot 2$，而不是对底数求平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An investment doubles when $2 = (1.07)^{t}$. Solve for $t$ using $t = \\frac{\\ln 2}{\\ln 1.07}$. Round to one decimal place.",
        "zh": "当 $2 = (1.07)^{t}$ 时投资翻倍。用 $t = \\frac{\\ln 2}{\\ln 1.07}$ 求 $t$。四舍五入到一位小数。"
      },
      "answer": "10.2",
      "accept": [
        "10.2",
        "10.24",
        "10.245",
        "10.24485"
      ],
      "explanation": {
        "en": "$t = \\frac{\\ln 2}{\\ln 1.07} = \\frac{0.6931}{0.0677} \\approx 10.2$ years. Dividing 2 by 1.07 directly ignores that the exponent must be found with logarithms.",
        "zh": "$t = \\frac{\\ln 2}{\\ln 1.07} = \\frac{0.6931}{0.0677} \\approx 10.2$ 年。直接把 2 除以 1.07 忽略了指数必须用对数求出。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\log_{5}(2x + 3) = \\log_{5}(13)$ for $x$.",
        "zh": "解 $\\log_{5}(2x + 3) = \\log_{5}(13)$，求 $x$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "5.00",
        "x=5",
        "x = 5"
      ],
      "explanation": {
        "en": "Equal logs with the same base mean equal arguments: $2x + 3 = 13$, so $2x = 10$ and $x = 5$. Forgetting to subtract 3 before dividing would give the wrong value of 6.5.",
        "zh": "同底的对数相等意味着自变量相等：$2x + 3 = 13$，所以 $2x = 10$，$x = 5$。在相除前忘记减去 3 会得到错误的 6.5。"
      }
    }
  ],
  "trigonometric-functions/radians-unit-circle": [
    {
      "type": "mc",
      "question": {
        "en": "Convert $180^{\\circ}$ to radians.",
        "zh": "把 $180^{\\circ}$ 转换为弧度。"
      },
      "choices": [
        "$\\pi$",
        "$2\\pi$",
        "$\\frac{3\\pi}{2}$",
        "$\\frac{\\pi}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply degrees by $\\frac{\\pi}{180}$: $180 \\cdot \\frac{\\pi}{180} = \\pi$. A common slip is thinking $180^{\\circ}$ is a quarter turn ($\\frac{\\pi}{2}$); it is actually a half turn.",
        "zh": "用角度乘以 $\\frac{\\pi}{180}$：$180 \\cdot \\frac{\\pi}{180} = \\pi$。常见错误是把 $180^{\\circ}$ 当成四分之一圈（$\\frac{\\pi}{2}$），其实它是半圈。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $30^{\\circ}$ to radians.",
        "zh": "把 $30^{\\circ}$ 转换为弧度。"
      },
      "choices": [
        "$\\frac{\\pi}{4}$",
        "$\\frac{\\pi}{6}$",
        "$\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$30 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{6}$. Confusing $30^{\\circ}$ with $45^{\\circ}$ gives $\\frac{\\pi}{4}$, which is a different reference angle.",
        "zh": "$30 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{6}$。把 $30^{\\circ}$ 与 $45^{\\circ}$ 混淆会得到 $\\frac{\\pi}{4}$，那是另一个参考角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $\\frac{\\pi}{3}$ radians to degrees.",
        "zh": "把 $\\frac{\\pi}{3}$ 弧度转换为角度。"
      },
      "choices": [
        "$30^{\\circ}$",
        "$45^{\\circ}$",
        "$60^{\\circ}$",
        "$90^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply radians by $\\frac{180}{\\pi}$: $\\frac{\\pi}{3} \\cdot \\frac{180}{\\pi} = 60^{\\circ}$. Reading the denominator $3$ as the answer's tens digit ($30^{\\circ}$) mixes up $\\frac{\\pi}{3}$ with $\\frac{\\pi}{6}$.",
        "zh": "用弧度乘以 $\\frac{180}{\\pi}$：$\\frac{\\pi}{3} \\cdot \\frac{180}{\\pi} = 60^{\\circ}$。把分母 $3$ 直接当成 $30^{\\circ}$ 会把 $\\frac{\\pi}{3}$ 与 $\\frac{\\pi}{6}$ 弄混。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $270^{\\circ}$ to radians.",
        "zh": "把 $270^{\\circ}$ 转换为弧度。"
      },
      "choices": [
        "$\\pi$",
        "$\\frac{5\\pi}{4}$",
        "$2\\pi$",
        "$\\frac{3\\pi}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$270 \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{2}$. Treating $270^{\\circ}$ as a full turn gives $2\\pi$, but a full turn is $360^{\\circ}$.",
        "zh": "$270 \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{2}$。把 $270^{\\circ}$ 当成一整圈会得到 $2\\pi$，但一整圈是 $360^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $4$. Find the arc length of a sector with central angle $\\frac{\\pi}{2}$ radians.",
        "zh": "一个圆的半径为 $4$。求圆心角为 $\\frac{\\pi}{2}$ 弧度的扇形的弧长。"
      },
      "choices": [
        "$2\\pi$",
        "$4\\pi$",
        "$\\pi$",
        "$8\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Arc length is $s = r\\theta = 4 \\cdot \\frac{\\pi}{2} = 2\\pi$. Using the area formula $\\frac{1}{2}r^2\\theta$ instead of $r\\theta$ leads to the wrong figure.",
        "zh": "弧长为 $s = r\\theta = 4 \\cdot \\frac{\\pi}{2} = 2\\pi$。误用面积公式 $\\frac{1}{2}r^2\\theta$ 而不是 $r\\theta$ 会算错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sin\\left(\\frac{\\pi}{6}\\right)$.",
        "zh": "求 $\\sin\\left(\\frac{\\pi}{6}\\right)$ 的值。"
      },
      "choices": [
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$. Swapping sine and cosine at $\\frac{\\pi}{6}$ gives $\\frac{\\sqrt{3}}{2}$, which is actually $\\cos\\left(\\frac{\\pi}{6}\\right)$.",
        "zh": "$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$。在 $\\frac{\\pi}{6}$ 处把正弦和余弦搞反会得到 $\\frac{\\sqrt{3}}{2}$，那其实是 $\\cos\\left(\\frac{\\pi}{6}\\right)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\cos\\left(\\frac{\\pi}{4}\\right)$.",
        "zh": "求 $\\cos\\left(\\frac{\\pi}{4}\\right)$ 的值。"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{2}}{2}$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At $\\frac{\\pi}{4}$ sine and cosine are equal: $\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$. Picking $\\frac{1}{2}$ confuses the value with $\\sin\\left(\\frac{\\pi}{6}\\right)$.",
        "zh": "在 $\\frac{\\pi}{4}$ 处正弦与余弦相等：$\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$。选 $\\frac{1}{2}$ 是把它与 $\\sin\\left(\\frac{\\pi}{6}\\right)$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\tan\\left(\\frac{\\pi}{3}\\right)$.",
        "zh": "求 $\\tan\\left(\\frac{\\pi}{3}\\right)$ 的值。"
      },
      "choices": [
        "$1$",
        "$\\frac{\\sqrt{3}}{3}$",
        "$3$",
        "$\\sqrt{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\tan\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/3)} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$. Getting $\\frac{\\sqrt{3}}{3}$ means the reciprocal was taken, which is $\\tan\\left(\\frac{\\pi}{6}\\right)$.",
        "zh": "$\\tan\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/3)} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$。得到 $\\frac{\\sqrt{3}}{3}$ 说明取了倒数，那是 $\\tan\\left(\\frac{\\pi}{6}\\right)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the reference angle for $150^{\\circ}$.",
        "zh": "求 $150^{\\circ}$ 的参考角。"
      },
      "choices": [
        "$30^{\\circ}$",
        "$45^{\\circ}$",
        "$60^{\\circ}$",
        "$15^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$150^{\\circ}$ is in quadrant II, so the reference angle is $180^{\\circ} - 150^{\\circ} = 30^{\\circ}$. Subtracting from $90^{\\circ}$ instead would wrongly give $60^{\\circ}$.",
        "zh": "$150^{\\circ}$ 在第二象限，所以参考角为 $180^{\\circ} - 150^{\\circ} = 30^{\\circ}$。若从 $90^{\\circ}$ 相减则会错得 $60^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In which quadrant is $\\sin\\theta > 0$ while $\\cos\\theta < 0$?",
        "zh": "在哪个象限 $\\sin\\theta > 0$ 且 $\\cos\\theta < 0$？"
      },
      "choices": [
        "Quadrant I",
        "Quadrant II",
        "Quadrant III",
        "Quadrant IV"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sine is the $y$-coordinate (positive above the $x$-axis) and cosine is the $x$-coordinate (negative to the left). Both hold only in quadrant II. Quadrant III has sine negative too.",
        "zh": "正弦是 $y$ 坐标（在 $x$ 轴上方为正），余弦是 $x$ 坐标（在左侧为负）。只有第二象限同时满足。第三象限的正弦也是负的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\cos\\left(\\frac{2\\pi}{3}\\right)$.",
        "zh": "求 $\\cos\\left(\\frac{2\\pi}{3}\\right)$ 的值。"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$-\\frac{\\sqrt{3}}{2}$",
        "$-\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\frac{2\\pi}{3}$ is in quadrant II with reference angle $\\frac{\\pi}{3}$, so cosine is negative: $-\\cos\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2}$. Using the reference value of sine gives $-\\frac{\\sqrt{3}}{2}$.",
        "zh": "$\\frac{2\\pi}{3}$ 在第二象限，参考角为 $\\frac{\\pi}{3}$，所以余弦为负：$-\\cos\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2}$。若用了正弦的参考值会得到 $-\\frac{\\sqrt{3}}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\csc\\left(\\frac{\\pi}{6}\\right)$.",
        "zh": "求 $\\csc\\left(\\frac{\\pi}{6}\\right)$ 的值。"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$\\sqrt{3}$",
        "$\\frac{2\\sqrt{3}}{3}$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\csc\\theta = \\frac{1}{\\sin\\theta}$, and $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$, so $\\csc\\left(\\frac{\\pi}{6}\\right) = 2$. Forgetting to take the reciprocal leaves the answer at $\\frac{1}{2}$.",
        "zh": "$\\csc\\theta = \\frac{1}{\\sin\\theta}$，而 $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$，所以 $\\csc\\left(\\frac{\\pi}{6}\\right) = 2$。忘记取倒数就会停在 $\\frac{1}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $45^{\\circ}$ to radians. Answer in terms of $\\pi$.",
        "zh": "把 $45^{\\circ}$ 转换为弧度。用 $\\pi$ 表示答案。"
      },
      "answer": "π/4",
      "accept": [
        "pi/4",
        "\\pi/4",
        "π/4",
        "(1/4)π",
        "0.7854",
        "0.785"
      ],
      "explanation": {
        "en": "$45 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{4}$. Reducing $\\frac{45}{180}$ to $\\frac{1}{4}$ is the key step; leaving it unreduced as $\\frac{\\pi}{2}$ overshoots.",
        "zh": "$45 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{4}$。把 $\\frac{45}{180}$ 约成 $\\frac{1}{4}$ 是关键；不约分误写成 $\\frac{\\pi}{2}$ 就偏大了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sin\\left(\\frac{\\pi}{2}\\right)$.",
        "zh": "求 $\\sin\\left(\\frac{\\pi}{2}\\right)$ 的值。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1",
        "1.00"
      ],
      "explanation": {
        "en": "At $\\frac{\\pi}{2}$ (the top of the unit circle) the $y$-coordinate is $1$, so $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$. Confusing it with cosine, whose value here is $0$, is the usual mistake.",
        "zh": "在 $\\frac{\\pi}{2}$（单位圆顶端）处 $y$ 坐标为 $1$，所以 $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$。与此处值为 $0$ 的余弦混淆是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $6$. Find the arc length of a sector with central angle $\\frac{\\pi}{3}$ radians. Answer in terms of $\\pi$.",
        "zh": "一个圆的半径为 $6$。求圆心角为 $\\frac{\\pi}{3}$ 弧度的扇形的弧长。用 $\\pi$ 表示答案。"
      },
      "answer": "2π",
      "accept": [
        "2pi",
        "2\\pi",
        "2π",
        "6.283",
        "6.28",
        "2*pi"
      ],
      "explanation": {
        "en": "$s = r\\theta = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$. Multiplying by $\\frac{180}{\\pi}$ (a degree conversion) instead of just using $r\\theta$ is a frequent error.",
        "zh": "$s = r\\theta = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$。误乘 $\\frac{180}{\\pi}$（角度换算）而不是直接用 $r\\theta$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the reference angle (in degrees) for $210^{\\circ}$.",
        "zh": "求 $210^{\\circ}$ 的参考角（以度为单位）。"
      },
      "answer": "30",
      "accept": [
        "30°",
        "30 degrees",
        "30.0",
        "30deg"
      ],
      "explanation": {
        "en": "$210^{\\circ}$ is in quadrant III, so the reference angle is $210^{\\circ} - 180^{\\circ} = 30^{\\circ}$. Subtracting from $360^{\\circ}$ instead would wrongly give $150^{\\circ}$.",
        "zh": "$210^{\\circ}$ 在第三象限，所以参考角为 $210^{\\circ} - 180^{\\circ} = 30^{\\circ}$。若改从 $360^{\\circ}$ 相减则会错得 $150^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\cos(\\pi)$.",
        "zh": "求 $\\cos(\\pi)$ 的值。"
      },
      "answer": "-1",
      "accept": [
        "-1.0",
        "-1.00",
        "−1"
      ],
      "explanation": {
        "en": "At $\\pi$ (the far left of the unit circle) the $x$-coordinate is $-1$, so $\\cos(\\pi) = -1$. Dropping the sign gives $1$, which is $\\cos(0)$ instead.",
        "zh": "在 $\\pi$（单位圆最左端）处 $x$ 坐标为 $-1$，所以 $\\cos(\\pi) = -1$。丢掉负号得到 $1$，那其实是 $\\cos(0)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $\\frac{2\\pi}{3}$ radians to degrees.",
        "zh": "把 $\\frac{2\\pi}{3}$ 弧度转换为角度。"
      },
      "answer": "120",
      "accept": [
        "120°",
        "120 degrees",
        "120.0",
        "120deg"
      ],
      "explanation": {
        "en": "$\\frac{2\\pi}{3} \\cdot \\frac{180}{\\pi} = \\frac{360}{3} = 120^{\\circ}$. Multiplying by $\\frac{\\pi}{180}$ (the wrong direction) instead of $\\frac{180}{\\pi}$ is the common trap.",
        "zh": "$\\frac{2\\pi}{3} \\cdot \\frac{180}{\\pi} = \\frac{360}{3} = 120^{\\circ}$。误乘 $\\frac{\\pi}{180}$（方向反了）而不是 $\\frac{180}{\\pi}$ 是常见陷阱。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\tan\\left(\\frac{\\pi}{6}\\right)$.",
        "zh": "求 $\\tan\\left(\\frac{\\pi}{6}\\right)$ 的值。"
      },
      "answer": "√3/3",
      "accept": [
        "sqrt(3)/3",
        "\\sqrt{3}/3",
        "1/sqrt(3)",
        "1/√3",
        "0.577",
        "0.5774",
        "0.58"
      ],
      "explanation": {
        "en": "$\\tan\\left(\\frac{\\pi}{6}\\right) = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$. Flipping the ratio gives $\\sqrt{3}$, which is $\\tan\\left(\\frac{\\pi}{3}\\right)$.",
        "zh": "$\\tan\\left(\\frac{\\pi}{6}\\right) = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。把比值倒过来会得到 $\\sqrt{3}$，那是 $\\tan\\left(\\frac{\\pi}{3}\\right)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sec\\left(\\frac{\\pi}{3}\\right)$.",
        "zh": "求 $\\sec\\left(\\frac{\\pi}{3}\\right)$ 的值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "2.00"
      ],
      "explanation": {
        "en": "$\\sec\\theta = \\frac{1}{\\cos\\theta}$, and $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$, so $\\sec\\left(\\frac{\\pi}{3}\\right) = 2$. Forgetting the reciprocal leaves $\\frac{1}{2}$.",
        "zh": "$\\sec\\theta = \\frac{1}{\\cos\\theta}$，而 $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$，所以 $\\sec\\left(\\frac{\\pi}{3}\\right) = 2$。忘记取倒数就会停在 $\\frac{1}{2}$。"
      }
    }
  ],
  "trigonometric-functions/graphs-of-trig-functions": [
    {
      "type": "mc",
      "question": {
        "en": "What is the amplitude of $y = 3\\sin(x)$?",
        "zh": "$y = 3\\sin(x)$ 的振幅是多少？"
      },
      "choices": [
        "$3$",
        "$1$",
        "$6$",
        "$9$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Amplitude is the absolute value of the coefficient in front of sine, so it is $3$. Doubling it to $6$ confuses amplitude (half the range) with the full peak-to-trough distance.",
        "zh": "振幅是正弦前系数的绝对值，所以是 $3$。把它翻倍成 $6$ 是把振幅（幅度的一半）与最高到最低的整段距离弄混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the period of $y = \\sin(2x)$?",
        "zh": "$y = \\sin(2x)$ 的周期是多少？"
      },
      "choices": [
        "$2\\pi$",
        "$\\pi$",
        "$4\\pi$",
        "$\\frac{\\pi}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{2} = \\pi$. Multiplying by $b$ instead of dividing gives $4\\pi$ and reverses the compression.",
        "zh": "周期 $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{2} = \\pi$。用 $b$ 相乘而不是相除会得到 $4\\pi$，把压缩方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the period of $y = \\cos\\left(\\frac{x}{2}\\right)$?",
        "zh": "$y = \\cos\\left(\\frac{x}{2}\\right)$ 的周期是多少？"
      },
      "choices": [
        "$\\pi$",
        "$2\\pi$",
        "$4\\pi$",
        "$8\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $b = \\frac{1}{2}$, so period $= \\frac{2\\pi}{1/2} = 4\\pi$. Forgetting that dividing by a fraction enlarges the period leaves the answer stuck at $2\\pi$.",
        "zh": "这里 $b = \\frac{1}{2}$，所以周期 $= \\frac{2\\pi}{1/2} = 4\\pi$。忘记除以分数会使周期变大，就会误停在 $2\\pi$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the midline of $y = \\sin(x) + 2$?",
        "zh": "$y = \\sin(x) + 2$ 的中线是什么？"
      },
      "choices": [
        "$y = -2$",
        "$y = 1$",
        "$y = 0$",
        "$y = 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The added constant shifts the graph up, so the midline is $y = 2$. Reading the sign backwards gives $y = -2$, a downward shift.",
        "zh": "所加的常数使图像上移，所以中线是 $y = 2$。把符号看反会得到 $y = -2$，那是向下平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the amplitude of $y = -4\\cos(x)$?",
        "zh": "$y = -4\\cos(x)$ 的振幅是多少？"
      },
      "choices": [
        "$4$",
        "$-4$",
        "$8$",
        "$2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Amplitude is $|-4| = 4$; it is always non-negative. Keeping the negative sign as $-4$ mistakes the reflection for the amplitude.",
        "zh": "振幅是 $|-4| = 4$，总是非负的。保留负号写成 $-4$ 是把反射当成了振幅。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Describe the phase shift of $y = \\sin\\left(x - \\frac{\\pi}{3}\\right)$.",
        "zh": "描述 $y = \\sin\\left(x - \\frac{\\pi}{3}\\right)$ 的相位平移。"
      },
      "choices": [
        "$\\frac{\\pi}{3}$ up",
        "$\\frac{\\pi}{3}$ right",
        "$\\frac{\\pi}{3}$ left",
        "$\\frac{\\pi}{3}$ down"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because $x - \\frac{\\pi}{3}$ equals zero at $x = +\\frac{\\pi}{3}$, the graph shifts right by $\\frac{\\pi}{3}$. Reading the minus sign as a leftward move reverses the true direction.",
        "zh": "因为 $x - \\frac{\\pi}{3}$ 在 $x = +\\frac{\\pi}{3}$ 处为零，图像向右平移 $\\frac{\\pi}{3}$。把减号当成向左移动会把真实方向弄反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the period of $y = \\tan(x)$?",
        "zh": "$y = \\tan(x)$ 的周期是多少？"
      },
      "choices": [
        "$\\frac{\\pi}{2}$",
        "$2\\pi$",
        "$\\pi$",
        "$4\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Tangent repeats every $\\pi$, not every $2\\pi$. Assuming it shares sine's period of $2\\pi$ is the classic error.",
        "zh": "正切每隔 $\\pi$ 就重复一次，而不是每隔 $2\\pi$。误以为它与正弦一样周期为 $2\\pi$ 是典型错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Where are the vertical asymptotes of $y = \\tan(x)$ (with $k$ an integer)?",
        "zh": "$y = \\tan(x)$ 的垂直渐近线在哪里（$k$ 为整数）？"
      },
      "choices": [
        "$x = k\\pi$",
        "$x = 2k\\pi$",
        "$x = \\frac{\\pi}{4} + k\\pi$",
        "$x = \\frac{\\pi}{2} + k\\pi$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Tangent is $\\frac{\\sin x}{\\cos x}$, undefined where $\\cos x = 0$, i.e. $x = \\frac{\\pi}{2} + k\\pi$. Choosing $x = k\\pi$ marks the zeros of tangent, not its asymptotes.",
        "zh": "正切是 $\\frac{\\sin x}{\\cos x}$，在 $\\cos x = 0$ 处无定义，即 $x = \\frac{\\pi}{2} + k\\pi$。选 $x = k\\pi$ 标的是正切的零点，而不是渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the period of $y = \\sin(3x)$?",
        "zh": "$y = \\sin(3x)$ 的周期是多少？"
      },
      "choices": [
        "$\\frac{2\\pi}{3}$",
        "$6\\pi$",
        "$\\frac{\\pi}{3}$",
        "$3\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{3}$. Dropping the factor of $2$ in the numerator gives $\\frac{\\pi}{3}$, which halves the true period.",
        "zh": "周期 $= \\frac{2\\pi}{3}$。分子漏掉因子 $2$ 会得到 $\\frac{\\pi}{3}$，把真实周期减半了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $y = 2\\sin(x)$?",
        "zh": "$y = 2\\sin(x)$ 的值域是什么？"
      },
      "choices": [
        "$[-1, 1]$",
        "$[-2, 2]$",
        "$[0, 2]$",
        "$[-4, 4]$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sine ranges over $[-1,1]$, so multiplying by $2$ gives $[-2,2]$. Leaving the range as $[-1,1]$ ignores the amplitude factor.",
        "zh": "正弦的取值范围是 $[-1,1]$，乘以 $2$ 得到 $[-2,2]$。把值域仍写成 $[-1,1]$ 是忽略了振幅系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the period of $y = \\sec(x)$?",
        "zh": "$y = \\sec(x)$ 的周期是多少？"
      },
      "choices": [
        "$\\pi$",
        "$\\frac{\\pi}{2}$",
        "$2\\pi$",
        "$4\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Secant is $\\frac{1}{\\cos x}$, so it repeats with cosine's period of $2\\pi$. Assuming it matches tangent's period of $\\pi$ is a common mix-up.",
        "zh": "正割是 $\\frac{1}{\\cos x}$，所以与余弦一样周期为 $2\\pi$。误以为它与正切一样周期为 $\\pi$ 是常见混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the midline of $y = \\cos(x) - 3$?",
        "zh": "$y = \\cos(x) - 3$ 的中线是什么？"
      },
      "choices": [
        "$y = 3$",
        "$y = 0$",
        "$y = -1$",
        "$y = -3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The constant $-3$ shifts the graph down, so the midline is $y = -3$. Flipping the sign to $y = 3$ mistakes the downward shift for an upward one.",
        "zh": "常数 $-3$ 使图像下移，所以中线是 $y = -3$。把符号翻成 $y = 3$ 是把下移当成了上移。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the amplitude of $y = 5\\cos(x)$?",
        "zh": "$y = 5\\cos(x)$ 的振幅是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "5.00"
      ],
      "explanation": {
        "en": "Amplitude is the absolute value of the leading coefficient, so it is $5$. The vertical stretch, not the period, sets the amplitude here.",
        "zh": "振幅是首项系数的绝对值，所以是 $5$。决定这里振幅的是垂直伸缩，而不是周期。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the period of $y = \\cos(4x)$? Answer in terms of $\\pi$.",
        "zh": "$y = \\cos(4x)$ 的周期是多少？用 $\\pi$ 表示答案。"
      },
      "answer": "π/2",
      "accept": [
        "pi/2",
        "\\pi/2",
        "π/2",
        "1.571",
        "1.57"
      ],
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. Forgetting to divide by $b$ and leaving $2\\pi$ ignores the horizontal compression.",
        "zh": "周期 $= \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。忘记除以 $b$ 而留下 $2\\pi$ 是忽略了水平压缩。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the period of $y = \\tan(2x)$? Answer in terms of $\\pi$.",
        "zh": "$y = \\tan(2x)$ 的周期是多少？用 $\\pi$ 表示答案。"
      },
      "answer": "π/2",
      "accept": [
        "pi/2",
        "\\pi/2",
        "π/2",
        "1.571",
        "1.57"
      ],
      "explanation": {
        "en": "Tangent's base period is $\\pi$, so period $= \\frac{\\pi}{|b|} = \\frac{\\pi}{2}$. Using $\\frac{2\\pi}{2} = \\pi$ wrongly borrows sine's base period.",
        "zh": "正切的基本周期是 $\\pi$，所以周期 $= \\frac{\\pi}{|b|} = \\frac{\\pi}{2}$。用 $\\frac{2\\pi}{2} = \\pi$ 是错用了正弦的基本周期。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the midline of $y = 3\\sin(x) - 1$? Give the $y$-value.",
        "zh": "$y = 3\\sin(x) - 1$ 的中线是什么？给出 $y$ 值。"
      },
      "answer": "-1",
      "accept": [
        "y=-1",
        "y = -1",
        "-1.0",
        "−1"
      ],
      "explanation": {
        "en": "The vertical shift is the added constant $-1$, so the midline is $y = -1$; the amplitude $3$ does not affect it. Using $3$ or $-3$ confuses amplitude with the shift.",
        "zh": "垂直平移是所加常数 $-1$，所以中线是 $y = -1$；振幅 $3$ 不影响它。用 $3$ 或 $-3$ 是把振幅与平移混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $y = \\sin\\left(x - \\frac{\\pi}{2}\\right)$ is $y = \\sin x$ shifted right by how many units? Answer in terms of $\\pi$.",
        "zh": "$y = \\sin\\left(x - \\frac{\\pi}{2}\\right)$ 的图像是把 $y = \\sin x$ 向右平移了多少个单位？用 $\\pi$ 表示答案。"
      },
      "answer": "π/2",
      "accept": [
        "pi/2",
        "\\pi/2",
        "π/2",
        "1.571",
        "1.57"
      ],
      "explanation": {
        "en": "The inside becomes zero at $x = \\frac{\\pi}{2}$, so the rightward shift is $\\frac{\\pi}{2}$. Reading the minus sign as a leftward move would reverse the direction.",
        "zh": "括号内在 $x = \\frac{\\pi}{2}$ 处为零，所以向右平移 $\\frac{\\pi}{2}$。把减号当成向左移动会把方向弄反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the amplitude of $y = -2\\sin(x)$?",
        "zh": "$y = -2\\sin(x)$ 的振幅是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "2.00"
      ],
      "explanation": {
        "en": "Amplitude is $|-2| = 2$; it is never negative. Keeping the sign as $-2$ mistakes the reflection for the amplitude.",
        "zh": "振幅是 $|-2| = 2$，永不为负。保留符号写成 $-2$ 是把反射当成了振幅。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the period of $y = \\sin(\\pi x)$?",
        "zh": "$y = \\sin(\\pi x)$ 的周期是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "2.00"
      ],
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{\\pi} = 2$. The $\\pi$ cancels, so leaving the answer as $2\\pi$ forgets to divide out $b = \\pi$.",
        "zh": "周期 $= \\frac{2\\pi}{|b|} = \\frac{2\\pi}{\\pi} = 2$。$\\pi$ 约掉了，所以把答案留作 $2\\pi$ 是忘了除以 $b = \\pi$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the minimum value of $y = 2\\sin(x) - 3$?",
        "zh": "$y = 2\\sin(x) - 3$ 的最小值是多少？"
      },
      "answer": "-5",
      "accept": [
        "-5.0",
        "−5",
        "-5.00"
      ],
      "explanation": {
        "en": "Sine's minimum is $-1$, so $2(-1) - 3 = -5$. Ignoring the amplitude and just using the shift gives $-3$, which is only the midline.",
        "zh": "正弦的最小值是 $-1$，所以 $2(-1) - 3 = -5$。忽略振幅而只用平移会得到 $-3$，那只是中线。"
      }
    }
  ],
  "trigonometric-functions/inverse-trig-functions": [
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\arcsin\\left(\\frac{1}{2}\\right)$.",
        "zh": "求 $\\arcsin\\left(\\frac{1}{2}\\right)$ 的值。"
      },
      "choices": [
        "$\\frac{\\pi}{6}$",
        "$\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{4}$",
        "$\\frac{\\pi}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "We need the angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ whose sine is $\\frac{1}{2}$, which is $\\frac{\\pi}{6}$. Answering $\\frac{\\pi}{3}$ solves $\\arccos\\left(\\frac{1}{2}\\right)$ instead.",
        "zh": "我们要在 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 中找正弦为 $\\frac{1}{2}$ 的角，即 $\\frac{\\pi}{6}$。答 $\\frac{\\pi}{3}$ 解的是 $\\arccos\\left(\\frac{1}{2}\\right)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\arccos(0)$.",
        "zh": "求 $\\arccos(0)$ 的值。"
      },
      "choices": [
        "$0$",
        "$\\frac{\\pi}{2}$",
        "$\\pi$",
        "$\\frac{\\pi}{4}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The angle in $[0, \\pi]$ with cosine $0$ is $\\frac{\\pi}{2}$. Answering $0$ solves $\\arccos(1)$, where cosine equals $1$.",
        "zh": "在 $[0, \\pi]$ 中余弦为 $0$ 的角是 $\\frac{\\pi}{2}$。答 $0$ 解的是 $\\arccos(1)$，那里余弦为 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\arctan(1)$.",
        "zh": "求 $\\arctan(1)$ 的值。"
      },
      "choices": [
        "$\\frac{\\pi}{6}$",
        "$\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{4}$",
        "$\\frac{\\pi}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Tangent equals $1$ where sine and cosine are equal, at $\\frac{\\pi}{4}$. Answering $\\frac{\\pi}{2}$ ignores that tangent is undefined there.",
        "zh": "正切等于 $1$ 是在正弦与余弦相等处，即 $\\frac{\\pi}{4}$。答 $\\frac{\\pi}{2}$ 忽略了正切在那里无定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\arcsin\\left(-\\frac{1}{2}\\right)$.",
        "zh": "求 $\\arcsin\\left(-\\frac{1}{2}\\right)$ 的值。"
      },
      "choices": [
        "$-\\frac{\\pi}{3}$",
        "$\\frac{7\\pi}{6}$",
        "$\\frac{\\pi}{6}$",
        "$-\\frac{\\pi}{6}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Arcsine returns angles in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so a negative input gives a negative angle: $-\\frac{\\pi}{6}$. Choosing $\\frac{7\\pi}{6}$ leaves the restricted range entirely.",
        "zh": "反正弦返回 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 内的角，所以负输入给出负角：$-\\frac{\\pi}{6}$。选 $\\frac{7\\pi}{6}$ 完全超出了限定范围。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $y = \\arcsin(x)$?",
        "zh": "$y = \\arcsin(x)$ 的值域是什么？"
      },
      "choices": [
        "$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$",
        "$(0, \\pi)$",
        "$[0, 2\\pi]$",
        "$[0, \\pi]$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Arcsine is restricted to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ to be a function. Choosing $[0, \\pi]$ borrows the range of arccosine instead.",
        "zh": "为成为函数，反正弦被限定在 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$。选 $[0, \\pi]$ 是错用了反余弦的值域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $y = \\arccos(x)$?",
        "zh": "$y = \\arccos(x)$ 的值域是什么？"
      },
      "choices": [
        "$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$",
        "$[0, \\pi]$",
        "$[0, 2\\pi]$",
        "$(-\\pi, \\pi)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Arccosine is restricted to $[0, \\pi]$. Choosing $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ borrows the range of arcsine instead.",
        "zh": "反余弦被限定在 $[0, \\pi]$。选 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 是错用了反正弦的值域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\arccos(-1)$.",
        "zh": "求 $\\arccos(-1)$ 的值。"
      },
      "choices": [
        "$0$",
        "$\\frac{\\pi}{2}$",
        "$\\pi$",
        "$\\frac{3\\pi}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Within $[0, \\pi]$, cosine equals $-1$ at $\\pi$. Choosing $\\frac{3\\pi}{2}$ leaves the allowed range for arccosine.",
        "zh": "在 $[0, \\pi]$ 内，余弦在 $\\pi$ 处等于 $-1$。选 $\\frac{3\\pi}{2}$ 超出了反余弦允许的范围。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\arctan(\\sqrt{3})$.",
        "zh": "求 $\\arctan(\\sqrt{3})$ 的值。"
      },
      "choices": [
        "$\\frac{\\pi}{6}$",
        "$\\frac{\\pi}{4}$",
        "$\\frac{\\pi}{2}$",
        "$\\frac{\\pi}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Tangent equals $\\sqrt{3}$ at $\\frac{\\pi}{3}$ (since $\\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$). Answering $\\frac{\\pi}{6}$ solves $\\arctan\\left(\\frac{\\sqrt{3}}{3}\\right)$ instead.",
        "zh": "正切在 $\\frac{\\pi}{3}$ 处等于 $\\sqrt{3}$（因为 $\\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$）。答 $\\frac{\\pi}{6}$ 解的是 $\\arctan\\left(\\frac{\\sqrt{3}}{3}\\right)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sin\\left(\\arcsin(0.5)\\right)$.",
        "zh": "求 $\\sin\\left(\\arcsin(0.5)\\right)$ 的值。"
      },
      "choices": [
        "$0.5$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$1$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Sine and arcsine undo each other when the input is within $[-1,1]$, so the result is simply $0.5$. Reaching for $\\frac{\\sqrt{3}}{2}$ needlessly evaluates a special angle that the composition already cancels.",
        "zh": "当输入在 $[-1,1]$ 内时，正弦与反正弦相互抵消，所以结果就是 $0.5$。去算 $\\frac{\\sqrt{3}}{2}$ 是多算了一个本已被复合抵消的特殊角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\cos\\left(\\arccos\\left(-\\frac{1}{2}\\right)\\right)$.",
        "zh": "求 $\\cos\\left(\\arccos\\left(-\\frac{1}{2}\\right)\\right)$ 的值。"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$-\\frac{1}{2}$",
        "$-\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $-\\frac{1}{2}$ is in $[-1,1]$, cosine and arccosine cancel to give $-\\frac{1}{2}$. Dropping the negative sign to $\\frac{1}{2}$ mishandles the cancellation.",
        "zh": "由于 $-\\frac{1}{2}$ 在 $[-1,1]$ 内，余弦与反余弦抵消，得 $-\\frac{1}{2}$。丢掉负号变成 $\\frac{1}{2}$ 是抵消处理错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sin\\left(\\arccos\\left(\\frac{3}{5}\\right)\\right)$.",
        "zh": "求 $\\sin\\left(\\arccos\\left(\\frac{3}{5}\\right)\\right)$ 的值。"
      },
      "choices": [
        "$\\frac{3}{5}$",
        "$\\frac{5}{4}$",
        "$\\frac{4}{5}$",
        "$\\frac{5}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "If $\\cos\\theta = \\frac{3}{5}$ with $\\theta$ in $[0,\\pi]$, then $\\sin\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$ (positive). Reusing $\\frac{3}{5}$ forgets to convert cosine into the matching sine.",
        "zh": "若 $\\cos\\theta = \\frac{3}{5}$ 且 $\\theta$ 在 $[0,\\pi]$ 内，则 $\\sin\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$（为正）。直接沿用 $\\frac{3}{5}$ 是忘了把余弦换成对应的正弦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\tan\\left(\\arctan(2)\\right)$.",
        "zh": "求 $\\tan\\left(\\arctan(2)\\right)$ 的值。"
      },
      "choices": [
        "$\\sqrt{2}$",
        "$\\frac{1}{2}$",
        "$-2$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Tangent and arctangent undo each other for every real input, so the result is $2$. Taking a reciprocal to get $\\frac{1}{2}$ mistakes this for a cotangent step.",
        "zh": "对任意实数输入，正切与反正切相互抵消，所以结果是 $2$。取倒数得到 $\\frac{1}{2}$ 是误当成了余切步骤。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\arcsin(0)$.",
        "zh": "求 $\\arcsin(0)$ 的值。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "0.00",
        "+0"
      ],
      "explanation": {
        "en": "The angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ with sine $0$ is $0$. Choosing $\\pi$ (also a sine zero) leaves the arcsine range.",
        "zh": "在 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 中正弦为 $0$ 的角是 $0$。选 $\\pi$（正弦也为零）超出了反正弦的范围。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\arccos\\left(\\frac{1}{2}\\right)$. Answer in terms of $\\pi$.",
        "zh": "求 $\\arccos\\left(\\frac{1}{2}\\right)$ 的值。用 $\\pi$ 表示答案。"
      },
      "answer": "π/3",
      "accept": [
        "pi/3",
        "\\pi/3",
        "π/3",
        "1.047",
        "1.05"
      ],
      "explanation": {
        "en": "The angle in $[0, \\pi]$ with cosine $\\frac{1}{2}$ is $\\frac{\\pi}{3}$. Answering $\\frac{\\pi}{6}$ solves $\\arcsin\\left(\\frac{1}{2}\\right)$ instead.",
        "zh": "在 $[0, \\pi]$ 中余弦为 $\\frac{1}{2}$ 的角是 $\\frac{\\pi}{3}$。答 $\\frac{\\pi}{6}$ 解的是 $\\arcsin\\left(\\frac{1}{2}\\right)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\arctan\\left(\\frac{\\sqrt{3}}{3}\\right)$. Answer in terms of $\\pi$.",
        "zh": "求 $\\arctan\\left(\\frac{\\sqrt{3}}{3}\\right)$ 的值。用 $\\pi$ 表示答案。"
      },
      "answer": "π/6",
      "accept": [
        "pi/6",
        "\\pi/6",
        "π/6",
        "0.524",
        "0.5236",
        "0.52"
      ],
      "explanation": {
        "en": "Since $\\frac{\\sqrt{3}}{3} = \\frac{1}{\\sqrt{3}}$, tangent equals this at $\\frac{\\pi}{6}$. Answering $\\frac{\\pi}{3}$ confuses this input with $\\sqrt{3}$.",
        "zh": "由于 $\\frac{\\sqrt{3}}{3} = \\frac{1}{\\sqrt{3}}$，正切在 $\\frac{\\pi}{6}$ 处等于此值。答 $\\frac{\\pi}{3}$ 是把这个输入与 $\\sqrt{3}$ 混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\arcsin(1)$. Answer in terms of $\\pi$.",
        "zh": "求 $\\arcsin(1)$ 的值。用 $\\pi$ 表示答案。"
      },
      "answer": "π/2",
      "accept": [
        "pi/2",
        "\\pi/2",
        "π/2",
        "1.571",
        "1.57"
      ],
      "explanation": {
        "en": "The angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ with sine $1$ is $\\frac{\\pi}{2}$. Answering $0$ confuses the maximum of sine with its zero.",
        "zh": "在 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 中正弦为 $1$ 的角是 $\\frac{\\pi}{2}$。答 $0$ 是把正弦的最大值与其零点混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\cos\\left(\\arcsin\\left(\\frac{3}{5}\\right)\\right)$.",
        "zh": "求 $\\cos\\left(\\arcsin\\left(\\frac{3}{5}\\right)\\right)$ 的值。"
      },
      "answer": "4/5",
      "accept": [
        "0.8",
        "0.80",
        "4/5",
        "8/10",
        ".8"
      ],
      "explanation": {
        "en": "If $\\sin\\theta = \\frac{3}{5}$ with $\\theta$ in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, then $\\cos\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$ (positive). Reusing $\\frac{3}{5}$ skips converting sine into the matching cosine.",
        "zh": "若 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 在 $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ 内，则 $\\cos\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$（为正）。直接沿用 $\\frac{3}{5}$ 跳过了把正弦换成对应余弦。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right)$. Answer in terms of $\\pi$.",
        "zh": "求 $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right)$ 的值。用 $\\pi$ 表示答案。"
      },
      "answer": "3π/4",
      "accept": [
        "3pi/4",
        "3\\pi/4",
        "3π/4",
        "2.356",
        "2.36"
      ],
      "explanation": {
        "en": "The reference angle is $\\frac{\\pi}{4}$, and a negative cosine in $[0,\\pi]$ lands in the second quadrant: $\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. Answering $\\frac{\\pi}{4}$ ignores the negative sign.",
        "zh": "参考角是 $\\frac{\\pi}{4}$，在 $[0,\\pi]$ 内余弦为负落在第二象限：$\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$。答 $\\frac{\\pi}{4}$ 忽略了负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\tan\\left(\\arctan(-7)\\right)$.",
        "zh": "求 $\\tan\\left(\\arctan(-7)\\right)$ 的值。"
      },
      "answer": "-7",
      "accept": [
        "-7.0",
        "−7",
        "-7.00"
      ],
      "explanation": {
        "en": "Tangent and arctangent cancel for every real number, so the result is $-7$. Dropping the negative sign to $7$ mishandles the cancellation.",
        "zh": "对任意实数，正切与反正切相互抵消，所以结果是 $-7$。丢掉负号变成 $7$ 是抵消处理错了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sin\\left(\\arctan\\left(\\frac{3}{4}\\right)\\right)$.",
        "zh": "求 $\\sin\\left(\\arctan\\left(\\frac{3}{4}\\right)\\right)$ 的值。"
      },
      "answer": "3/5",
      "accept": [
        "0.6",
        "0.60",
        "3/5",
        "6/10",
        ".6"
      ],
      "explanation": {
        "en": "If $\\tan\\theta = \\frac{3}{4}$, a right triangle has opposite $3$, adjacent $4$, hypotenuse $5$, so $\\sin\\theta = \\frac{3}{5}$. Reusing $\\frac{3}{4}$ forgets to divide by the hypotenuse.",
        "zh": "若 $\\tan\\theta = \\frac{3}{4}$，直角三角形的对边为 $3$、邻边为 $4$、斜边为 $5$，所以 $\\sin\\theta = \\frac{3}{5}$。直接沿用 $\\frac{3}{4}$ 是忘了除以斜边。"
      }
    }
  ],
  "analytic-trigonometry/trig-identities-sum-difference": [
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\sec\\theta$?",
        "zh": "下列哪个表达式等于 $\\sec\\theta$？"
      },
      "choices": [
        "$\\dfrac{1}{\\cos\\theta}$",
        "$\\dfrac{\\cos\\theta}{\\sin\\theta}$",
        "$\\dfrac{1}{\\sin\\theta}$",
        "$\\dfrac{\\sin\\theta}{\\cos\\theta}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the reciprocal identity, $\\sec\\theta=\\dfrac{1}{\\cos\\theta}$. A common slip is to pair secant with sine; but $\\dfrac{1}{\\sin\\theta}$ is the cosecant, not the secant.",
        "zh": "根据倒数恒等式，$\\sec\\theta=\\dfrac{1}{\\cos\\theta}$。常见错误是把正割与正弦配对；但 $\\dfrac{1}{\\sin\\theta}$ 是余割，不是正割。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The quotient identity says $\\tan\\theta$ equals which of the following?",
        "zh": "商恒等式指出 $\\tan\\theta$ 等于下列哪一个？"
      },
      "choices": [
        "$\\dfrac{\\cos\\theta}{\\sin\\theta}$",
        "$\\dfrac{\\sin\\theta}{\\cos\\theta}$",
        "$\\dfrac{1}{\\cos\\theta}$",
        "$\\sin\\theta\\cos\\theta$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the quotient identity, $\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$. Flipping the ratio gives $\\dfrac{\\cos\\theta}{\\sin\\theta}$, which is the cotangent instead.",
        "zh": "根据商恒等式，$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$。把比值颠倒得到 $\\dfrac{\\cos\\theta}{\\sin\\theta}$，那是余切。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $1-\\sin^2\\theta$.",
        "zh": "化简 $1-\\sin^2\\theta$。"
      },
      "choices": [
        "$\\tan^2\\theta$",
        "$\\sec^2\\theta$",
        "$\\cos^2\\theta$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "From $\\sin^2\\theta+\\cos^2\\theta=1$ we get $1-\\sin^2\\theta=\\cos^2\\theta$. Treating the expression as still equal to $1$ ignores that $\\sin^2\\theta$ was subtracted.",
        "zh": "由 $\\sin^2\\theta+\\cos^2\\theta=1$ 得 $1-\\sin^2\\theta=\\cos^2\\theta$。把它当作仍等于 $1$，是忽略了减去了 $\\sin^2\\theta$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\sec^2\\theta-\\tan^2\\theta$?",
        "zh": "$\\sec^2\\theta-\\tan^2\\theta$ 等于多少？"
      },
      "choices": [
        "$0$",
        "$\\sec^2\\theta$",
        "$\\tan^2\\theta$",
        "$1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The Pythagorean identity $1+\\tan^2\\theta=\\sec^2\\theta$ rearranges to $\\sec^2\\theta-\\tan^2\\theta=1$. Answering $0$ mistakes it for a term minus itself.",
        "zh": "毕达哥拉斯恒等式 $1+\\tan^2\\theta=\\sec^2\\theta$ 变形为 $\\sec^2\\theta-\\tan^2\\theta=1$。答 $0$ 是误以为是同一项相减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct sum formula for $\\sin(A+B)$?",
        "zh": "$\\sin(A+B)$ 的和角公式哪个正确？"
      },
      "choices": [
        "$\\sin A\\cos B+\\cos A\\sin B$",
        "$\\sin A\\cos B-\\cos A\\sin B$",
        "$\\cos A\\cos B-\\sin A\\sin B$",
        "$\\cos A\\cos B+\\sin A\\sin B$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$. Using a minus sign gives $\\sin(A-B)$ instead, and the $\\cos A\\cos B$ forms belong to cosine.",
        "zh": "$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$。用减号得到的是 $\\sin(A-B)$，而含 $\\cos A\\cos B$ 的式子属于余弦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct formula for $\\cos(A+B)$?",
        "zh": "$\\cos(A+B)$ 的正确公式是哪个？"
      },
      "choices": [
        "$\\cos A\\cos B+\\sin A\\sin B$",
        "$\\cos A\\cos B-\\sin A\\sin B$",
        "$\\sin A\\cos B+\\cos A\\sin B$",
        "$\\sin A\\sin B-\\cos A\\cos B$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$: cosine flips the sign relative to the angle. Keeping a plus sign yields $\\cos(A-B)$ by mistake.",
        "zh": "$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$：余弦的符号与角内符号相反。保留加号会错成 $\\cos(A-B)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct formula for $\\cos(A-B)$?",
        "zh": "$\\cos(A-B)$ 的正确公式是哪个？"
      },
      "choices": [
        "$\\cos A\\cos B-\\sin A\\sin B$",
        "$\\sin A\\cos B-\\cos A\\sin B$",
        "$\\cos A\\cos B+\\sin A\\sin B$",
        "$\\sin A\\sin B-\\cos A\\cos B$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$: the difference angle uses a plus sign. Using a minus sign gives $\\cos(A+B)$ instead.",
        "zh": "$\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$：差角用加号。用减号得到的是 $\\cos(A+B)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the cofunction identity, $\\sin(90^\\circ-\\theta)$ equals:",
        "zh": "根据余函数恒等式，$\\sin(90^\\circ-\\theta)$ 等于："
      },
      "choices": [
        "$\\sin\\theta$",
        "$-\\cos\\theta$",
        "$\\tan\\theta$",
        "$\\cos\\theta$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Cofunctions of complementary angles are equal: $\\sin(90^\\circ-\\theta)=\\cos\\theta$. Leaving it as $\\sin\\theta$ ignores the complement shift.",
        "zh": "互余角的余函数相等：$\\sin(90^\\circ-\\theta)=\\cos\\theta$。写成 $\\sin\\theta$ 是忽略了余角的转换。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using a difference formula, $\\cos 75^\\circ=\\cos(45^\\circ+30^\\circ)$ equals which exact value?",
        "zh": "用公式计算，$\\cos 75^\\circ=\\cos(45^\\circ+30^\\circ)$ 的精确值是："
      },
      "choices": [
        "$\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$",
        "$\\dfrac{\\sqrt{2}-\\sqrt{6}}{4}$",
        "$\\dfrac{\\sqrt{6}-\\sqrt{2}}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\cos(45^\\circ+30^\\circ)=\\cos45^\\circ\\cos30^\\circ-\\sin45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6}{4}-\\dfrac{\\sqrt2}{4}=\\dfrac{\\sqrt6-\\sqrt2}{4}$. Adding instead of subtracting produces the value of $\\cos15^\\circ$.",
        "zh": "$\\cos(45^\\circ+30^\\circ)=\\cos45^\\circ\\cos30^\\circ-\\sin45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6}{4}-\\dfrac{\\sqrt2}{4}=\\dfrac{\\sqrt6-\\sqrt2}{4}$。若相加会得到 $\\cos15^\\circ$ 的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct sum formula for $\\tan(A+B)$?",
        "zh": "$\\tan(A+B)$ 的正确和角公式是哪个？"
      },
      "choices": [
        "$\\dfrac{\\tan A-\\tan B}{1+\\tan A\\tan B}$",
        "$\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}$",
        "$\\dfrac{\\tan A+\\tan B}{1+\\tan A\\tan B}$",
        "$\\dfrac{\\tan A-\\tan B}{1-\\tan A\\tan B}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\tan(A+B)=\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}$. The numerator adds and the denominator subtracts; swapping either sign gives $\\tan(A-B)$ or a wrong form.",
        "zh": "$\\tan(A+B)=\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}$。分子相加、分母相减；任一符号弄反都会得到 $\\tan(A-B)$ 或错误式子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sin\\theta\\cdot\\csc\\theta$.",
        "zh": "化简 $\\sin\\theta\\cdot\\csc\\theta$。"
      },
      "choices": [
        "$\\sin\\theta$",
        "$\\csc\\theta$",
        "$1$",
        "$0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $\\csc\\theta=\\dfrac{1}{\\sin\\theta}$, the product $\\sin\\theta\\cdot\\csc\\theta=1$. Leaving a lone $\\sin\\theta$ forgets that the two factors are reciprocals.",
        "zh": "因为 $\\csc\\theta=\\dfrac{1}{\\sin\\theta}$，所以乘积 $\\sin\\theta\\cdot\\csc\\theta=1$。留下一个 $\\sin\\theta$ 是忘了两个因子互为倒数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\dfrac{1-\\cos^2\\theta}{\\sin\\theta}$.",
        "zh": "化简 $\\dfrac{1-\\cos^2\\theta}{\\sin\\theta}$。"
      },
      "choices": [
        "$\\cos\\theta$",
        "$\\tan\\theta$",
        "$\\csc\\theta$",
        "$\\sin\\theta$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$1-\\cos^2\\theta=\\sin^2\\theta$, so $\\dfrac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta$. Reaching for $\\cos\\theta$ misapplies the Pythagorean identity to the wrong function.",
        "zh": "$1-\\cos^2\\theta=\\sin^2\\theta$，所以 $\\dfrac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta$。选 $\\cos\\theta$ 是把毕达哥拉斯恒等式用错了函数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\cos 75^\\circ$ as a decimal rounded to 4 places.",
        "zh": "把 $\\cos 75^\\circ$ 化为四位小数。"
      },
      "answer": "0.2588",
      "accept": [
        "0.259",
        "0.26",
        ".2588",
        "0.2588190"
      ],
      "explanation": {
        "en": "$\\cos75^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4}\\approx0.2588$. Using $\\cos45^\\circ+\\cos30^\\circ$ instead of the sum formula would give a far larger, wrong value.",
        "zh": "$\\cos75^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4}\\approx0.2588$。若用 $\\cos45^\\circ+\\cos30^\\circ$ 而不是和角公式，会得到大得多的错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\sin\\theta=\\dfrac{3}{5}$ and $\\theta$ is acute, find $\\cos\\theta$ as a decimal.",
        "zh": "若 $\\sin\\theta=\\dfrac{3}{5}$ 且 $\\theta$ 为锐角，求 $\\cos\\theta$（小数）。"
      },
      "answer": "0.8",
      "accept": [
        "4/5",
        "0.80",
        ".8",
        "0.800"
      ],
      "explanation": {
        "en": "From $\\sin^2\\theta+\\cos^2\\theta=1$, $\\cos\\theta=\\sqrt{1-\\tfrac{9}{25}}=\\sqrt{\\tfrac{16}{25}}=\\dfrac{4}{5}=0.8$ (positive since acute). Forgetting to square $\\tfrac{3}{5}$ before subtracting gives a wrong result.",
        "zh": "由 $\\sin^2\\theta+\\cos^2\\theta=1$，$\\cos\\theta=\\sqrt{1-\\tfrac{9}{25}}=\\sqrt{\\tfrac{16}{25}}=\\dfrac{4}{5}=0.8$（锐角取正）。相减前忘记先平方 $\\tfrac{3}{5}$ 会算错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sec^2\\theta-\\tan^2\\theta$.",
        "zh": "求 $\\sec^2\\theta-\\tan^2\\theta$ 的值。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1",
        "1.00"
      ],
      "explanation": {
        "en": "By $1+\\tan^2\\theta=\\sec^2\\theta$, the difference is exactly $1$ for every $\\theta$. Expecting an answer that depends on $\\theta$ overlooks that this is an identity.",
        "zh": "由 $1+\\tan^2\\theta=\\sec^2\\theta$，对任意 $\\theta$ 差都恰为 $1$。以为答案会随 $\\theta$ 变化，是忽略了这是恒等式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\sec\\theta=2$, find $1+\\tan^2\\theta$.",
        "zh": "若 $\\sec\\theta=2$，求 $1+\\tan^2\\theta$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4.00",
        "+4"
      ],
      "explanation": {
        "en": "$1+\\tan^2\\theta=\\sec^2\\theta=2^2=4$. Answering $2$ forgets to square the secant value.",
        "zh": "$1+\\tan^2\\theta=\\sec^2\\theta=2^2=4$。答 $2$ 是忘了把正割值平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sin(45^\\circ+45^\\circ)$.",
        "zh": "求 $\\sin(45^\\circ+45^\\circ)$ 的值。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00",
        "+1"
      ],
      "explanation": {
        "en": "$\\sin(45^\\circ+45^\\circ)=\\sin90^\\circ=1$. Adding $\\sin45^\\circ+\\sin45^\\circ=\\sqrt2\\approx1.41$ misuses the formula.",
        "zh": "$\\sin(45^\\circ+45^\\circ)=\\sin90^\\circ=1$。用 $\\sin45^\\circ+\\sin45^\\circ=\\sqrt2\\approx1.41$ 是误用了公式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\cos(60^\\circ-30^\\circ)$ as a decimal rounded to 4 places.",
        "zh": "把 $\\cos(60^\\circ-30^\\circ)$ 化为四位小数。"
      },
      "answer": "0.8660",
      "accept": [
        "0.866",
        "0.87",
        "√3/2",
        "0.8660254"
      ],
      "explanation": {
        "en": "$\\cos(60^\\circ-30^\\circ)=\\cos30^\\circ=\\dfrac{\\sqrt3}{2}\\approx0.8660$. Subtracting $\\cos60^\\circ-\\cos30^\\circ$ instead would give a negative, wrong value.",
        "zh": "$\\cos(60^\\circ-30^\\circ)=\\cos30^\\circ=\\dfrac{\\sqrt3}{2}\\approx0.8660$。若改用 $\\cos60^\\circ-\\cos30^\\circ$ 会得到一个负的错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The identity $\\sin^2\\theta+\\cos^2\\theta=1$ is called the ______ identity (one word).",
        "zh": "恒等式 $\\sin^2\\theta+\\cos^2\\theta=1$ 被称为 ______ 恒等式。"
      },
      "answer": "Pythagorean",
      "accept": [
        "pythagorean",
        "PYTHAGOREAN",
        "毕达哥拉斯",
        "勾股",
        "勾股定理",
        "毕氏"
      ],
      "explanation": {
        "en": "It is the Pythagorean identity, derived from the unit circle and the Pythagorean theorem. Calling it the reciprocal identity confuses it with $\\sec\\theta=1/\\cos\\theta$-type relations.",
        "zh": "这是毕达哥拉斯恒等式（勾股恒等式），由单位圆和勾股定理导出。称之为倒数恒等式是与 $\\sec\\theta=1/\\cos\\theta$ 之类关系混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\tan A=\\dfrac{1}{2}$ and $\\tan B=\\dfrac{1}{3}$, find $\\tan(A+B)$.",
        "zh": "若 $\\tan A=\\dfrac{1}{2}$，$\\tan B=\\dfrac{1}{3}$，求 $\\tan(A+B)$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00",
        "+1"
      ],
      "explanation": {
        "en": "$\\tan(A+B)=\\dfrac{\\tfrac12+\\tfrac13}{1-\\tfrac12\\cdot\\tfrac13}=\\dfrac{5/6}{5/6}=1$. Forgetting the $-\\tan A\\tan B$ term in the denominator changes the result.",
        "zh": "$\\tan(A+B)=\\dfrac{\\tfrac12+\\tfrac13}{1-\\tfrac12\\cdot\\tfrac13}=\\dfrac{5/6}{5/6}=1$。分母漏掉 $-\\tan A\\tan B$ 项会改变结果。"
      }
    }
  ],
  "analytic-trigonometry/multiple-angle-and-trig-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct double-angle formula for $\\sin 2\\theta$?",
        "zh": "$\\sin 2\\theta$ 的倍角公式哪个正确？"
      },
      "choices": [
        "$2\\sin\\theta\\cos\\theta$",
        "$\\sin^2\\theta-\\cos^2\\theta$",
        "$2\\cos\\theta$",
        "$\\sin\\theta\\cos\\theta$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$. Dropping the factor of $2$ leaves $\\sin\\theta\\cos\\theta$, which is only half of the correct expression.",
        "zh": "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$。漏掉系数 $2$ 就剩 $\\sin\\theta\\cos\\theta$，只有正确表达式的一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\cos 2\\theta$?",
        "zh": "下列哪个表达式等于 $\\cos 2\\theta$？"
      },
      "choices": [
        "$2\\sin\\theta\\cos\\theta$",
        "$\\cos^2\\theta-\\sin^2\\theta$",
        "$1-\\cos^2\\theta$",
        "$2\\cos^2\\theta$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$. The expression $2\\sin\\theta\\cos\\theta$ is $\\sin2\\theta$, not the cosine form.",
        "zh": "$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$。$2\\sin\\theta\\cos\\theta$ 是 $\\sin2\\theta$，不是余弦形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is a valid form of $\\cos 2\\theta$ written using only $\\sin\\theta$?",
        "zh": "只用 $\\sin\\theta$ 表示的 $\\cos 2\\theta$ 哪个正确？"
      },
      "choices": [
        "$1+2\\sin^2\\theta$",
        "$2\\cos^2\\theta+1$",
        "$1-2\\sin^2\\theta$",
        "$1-2\\cos^2\\theta$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\cos2\\theta=1-2\\sin^2\\theta$. The sign must be minus; $1+2\\sin^2\\theta$ comes from mishandling the substitution $\\cos^2\\theta=1-\\sin^2\\theta$.",
        "zh": "$\\cos2\\theta=1-2\\sin^2\\theta$。符号必须为减；$1+2\\sin^2\\theta$ 来自错误代入 $\\cos^2\\theta=1-\\sin^2\\theta$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is a valid form of $\\cos 2\\theta$ written using only $\\cos\\theta$?",
        "zh": "只用 $\\cos\\theta$ 表示的 $\\cos 2\\theta$ 哪个正确？"
      },
      "choices": [
        "$1-2\\cos^2\\theta$",
        "$2\\sin^2\\theta-1$",
        "$1-2\\sin^2\\theta$",
        "$2\\cos^2\\theta-1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\cos2\\theta=2\\cos^2\\theta-1$. Writing $1-2\\cos^2\\theta$ reverses the sign and gives the negative of the correct value.",
        "zh": "$\\cos2\\theta=2\\cos^2\\theta-1$。写成 $1-2\\cos^2\\theta$ 是符号弄反，得到正确值的相反数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct double-angle formula for $\\tan 2\\theta$?",
        "zh": "$\\tan 2\\theta$ 的倍角公式哪个正确？"
      },
      "choices": [
        "$\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}$",
        "$\\dfrac{2\\tan\\theta}{1+\\tan^2\\theta}$",
        "$\\dfrac{\\tan\\theta}{1-\\tan^2\\theta}$",
        "$\\dfrac{2\\tan^2\\theta}{1-\\tan\\theta}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\tan2\\theta=\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}$. Using a plus sign in the denominator mimics the Pythagorean form $1+\\tan^2\\theta$ and is incorrect here.",
        "zh": "$\\tan2\\theta=\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}$。分母用加号是套用了 $1+\\tan^2\\theta$，在此错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The half-angle formula for $\\sin\\dfrac{\\theta}{2}$ is:",
        "zh": "$\\sin\\dfrac{\\theta}{2}$ 的半角公式为："
      },
      "choices": [
        "$\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{2}}$",
        "$\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{2}}$",
        "$\\pm\\sqrt{1-\\cos\\theta}$",
        "$\\dfrac{1-\\cos\\theta}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\sin\\dfrac{\\theta}{2}=\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{2}}$. Using $1+\\cos\\theta$ under the root gives the cosine half-angle instead.",
        "zh": "$\\sin\\dfrac{\\theta}{2}=\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{2}}$。根号内用 $1+\\cos\\theta$ 得到的是余弦的半角公式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The half-angle formula for $\\cos\\dfrac{\\theta}{2}$ is:",
        "zh": "$\\cos\\dfrac{\\theta}{2}$ 的半角公式为："
      },
      "choices": [
        "$\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{2}}$",
        "$\\pm\\sqrt{1+\\cos\\theta}$",
        "$\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{2}}$",
        "$\\dfrac{1+\\cos\\theta}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\cos\\dfrac{\\theta}{2}=\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{2}}$. Using $1-\\cos\\theta$ under the root gives the sine half-angle by mistake.",
        "zh": "$\\cos\\dfrac{\\theta}{2}=\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{2}}$。根号内用 $1-\\cos\\theta$ 会错成正弦的半角公式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2\\sin\\theta-1=0$ on $[0,2\\pi)$.",
        "zh": "在 $[0,2\\pi)$ 上解 $2\\sin\\theta-1=0$。"
      },
      "choices": [
        "$\\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3}$",
        "$\\dfrac{\\pi}{6},\\ \\dfrac{7\\pi}{6}$",
        "$\\dfrac{\\pi}{6},\\ \\dfrac{11\\pi}{6}$",
        "$\\dfrac{\\pi}{6},\\ \\dfrac{5\\pi}{6}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\sin\\theta=\\dfrac12$ gives $\\theta=\\dfrac{\\pi}{6}$ and $\\dfrac{5\\pi}{6}$, both where sine is positive. Choosing $\\dfrac{7\\pi}{6}$ picks a third-quadrant angle where sine is negative.",
        "zh": "$\\sin\\theta=\\dfrac12$ 给出 $\\theta=\\dfrac{\\pi}{6}$ 和 $\\dfrac{5\\pi}{6}$，都在正弦为正处。选 $\\dfrac{7\\pi}{6}$ 是取了正弦为负的第三象限角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\cos\\theta=-1$ on $[0,2\\pi)$.",
        "zh": "在 $[0,2\\pi)$ 上解 $\\cos\\theta=-1$。"
      },
      "choices": [
        "$\\pi$",
        "$0$",
        "$\\dfrac{\\pi}{2}$",
        "$\\dfrac{3\\pi}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Cosine equals $-1$ only at $\\theta=\\pi$ on this interval. Choosing $0$ confuses it with $\\cos\\theta=1$.",
        "zh": "在此区间上余弦等于 $-1$ 只在 $\\theta=\\pi$ 处。选 $0$ 是与 $\\cos\\theta=1$ 混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the general solution of $\\sin\\theta=0$ (with $n$ an integer)?",
        "zh": "$\\sin\\theta=0$ 的通解是（$n$ 为整数）："
      },
      "choices": [
        "$\\theta=2n\\pi$",
        "$\\theta=n\\pi$",
        "$\\theta=\\dfrac{\\pi}{2}+n\\pi$",
        "$\\theta=\\dfrac{n\\pi}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sine is zero at every integer multiple of $\\pi$, so $\\theta=n\\pi$. Writing $2n\\pi$ captures only the even multiples and misses $\\pi,3\\pi,\\dots$",
        "zh": "正弦在 $\\pi$ 的每个整数倍处为零，所以 $\\theta=n\\pi$。写成 $2n\\pi$ 只含偶数倍，漏掉 $\\pi,3\\pi,\\dots$"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the general solution of $\\cos\\theta=1$ (with $n$ an integer)?",
        "zh": "$\\cos\\theta=1$ 的通解是（$n$ 为整数）："
      },
      "choices": [
        "$\\theta=n\\pi$",
        "$\\theta=\\pi+2n\\pi$",
        "$\\theta=2n\\pi$",
        "$\\theta=\\dfrac{\\pi}{2}+2n\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Cosine reaches $1$ only at even multiples of $\\pi$, so $\\theta=2n\\pi$. Using $n\\pi$ wrongly includes odd multiples where $\\cos\\theta=-1$.",
        "zh": "余弦只在 $\\pi$ 的偶数倍处达到 $1$，所以 $\\theta=2n\\pi$。用 $n\\pi$ 会错误地包含 $\\cos\\theta=-1$ 的奇数倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using $\\sin 2\\theta=2\\sin\\theta\\cos\\theta$, solve $\\sin 2\\theta=0$ on $[0,2\\pi)$.",
        "zh": "利用 $\\sin 2\\theta=2\\sin\\theta\\cos\\theta$，在 $[0,2\\pi)$ 上解 $\\sin 2\\theta=0$。"
      },
      "choices": [
        "$0,\\ \\pi$",
        "$0,\\ \\dfrac{\\pi}{2},\\ \\pi$",
        "$\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}$",
        "$0,\\ \\dfrac{\\pi}{2},\\ \\pi,\\ \\dfrac{3\\pi}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\sin2\\theta=0$ means $2\\theta=0,\\pi,2\\pi,3\\pi$, so $\\theta=0,\\dfrac{\\pi}{2},\\pi,\\dfrac{3\\pi}{2}$. Solving $\\sin\\theta=0$ directly (giving only $0,\\pi$) forgets that the argument is doubled.",
        "zh": "$\\sin2\\theta=0$ 意味着 $2\\theta=0,\\pi,2\\pi,3\\pi$，故 $\\theta=0,\\dfrac{\\pi}{2},\\pi,\\dfrac{3\\pi}{2}$。直接解 $\\sin\\theta=0$（只得 $0,\\pi$）忽略了自变量被加倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\sin\\theta=\\dfrac{3}{5}$ and $\\cos\\theta=\\dfrac{4}{5}$, find $\\sin 2\\theta$ as a decimal.",
        "zh": "若 $\\sin\\theta=\\dfrac{3}{5}$，$\\cos\\theta=\\dfrac{4}{5}$，求 $\\sin 2\\theta$（小数）。"
      },
      "answer": "0.96",
      "accept": [
        "24/25",
        "0.960",
        ".96"
      ],
      "explanation": {
        "en": "$\\sin2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\dfrac35\\cdot\\dfrac45=\\dfrac{24}{25}=0.96$. Dropping the factor of $2$ gives $0.48$, which is too small.",
        "zh": "$\\sin2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\dfrac35\\cdot\\dfrac45=\\dfrac{24}{25}=0.96$。漏掉系数 $2$ 得 $0.48$，太小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\sin\\theta=\\dfrac{3}{5}$, find $\\cos 2\\theta$ as a decimal.",
        "zh": "若 $\\sin\\theta=\\dfrac{3}{5}$，求 $\\cos 2\\theta$（小数）。"
      },
      "answer": "0.28",
      "accept": [
        "7/25",
        "0.280",
        ".28"
      ],
      "explanation": {
        "en": "$\\cos2\\theta=1-2\\sin^2\\theta=1-2\\cdot\\dfrac{9}{25}=1-\\dfrac{18}{25}=\\dfrac{7}{25}=0.28$. Forgetting to square $\\dfrac35$ gives a wrong subtraction.",
        "zh": "$\\cos2\\theta=1-2\\sin^2\\theta=1-2\\cdot\\dfrac{9}{25}=1-\\dfrac{18}{25}=\\dfrac{7}{25}=0.28$。忘记先平方 $\\dfrac35$ 会算错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many solutions does $\\cos\\theta=0$ have on $[0,2\\pi)$?",
        "zh": "$\\cos\\theta=0$ 在 $[0,2\\pi)$ 上有几个解？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "two",
        "两个",
        "2个",
        "二"
      ],
      "explanation": {
        "en": "Cosine is zero at $\\dfrac{\\pi}{2}$ and $\\dfrac{3\\pi}{2}$, so there are $2$ solutions. Counting $4$ would over-count by treating it like a doubled angle.",
        "zh": "余弦在 $\\dfrac{\\pi}{2}$ 和 $\\dfrac{3\\pi}{2}$ 处为零，共 $2$ 个解。数成 $4$ 是当作倍角而多算了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the smallest positive solution of $\\tan\\theta=1$ on $[0,2\\pi)$ as a decimal (radians, 4 places).",
        "zh": "求 $\\tan\\theta=1$ 在 $[0,2\\pi)$ 上的最小正解（弧度，四位小数）。"
      },
      "answer": "0.7854",
      "accept": [
        "π/4",
        "0.785",
        "0.79",
        "0.7853982"
      ],
      "explanation": {
        "en": "$\\tan\\theta=1$ first at $\\theta=\\dfrac{\\pi}{4}\\approx0.7854$. Reporting $45$ answers in degrees, not the requested radians.",
        "zh": "$\\tan\\theta=1$ 首先在 $\\theta=\\dfrac{\\pi}{4}\\approx0.7854$。答 $45$ 是用了角度，而不是要求的弧度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the half-angle formula, evaluate $\\cos 15^\\circ$ as a decimal rounded to 4 places.",
        "zh": "用半角公式求 $\\cos 15^\\circ$（四位小数）。"
      },
      "answer": "0.9659",
      "accept": [
        "0.966",
        "0.97",
        "0.9659258"
      ],
      "explanation": {
        "en": "$\\cos15^\\circ=\\sqrt{\\dfrac{1+\\cos30^\\circ}{2}}=\\sqrt{\\dfrac{1+0.8660}{2}}\\approx0.9659$. Using $1-\\cos30^\\circ$ under the root would compute $\\sin15^\\circ$ instead.",
        "zh": "$\\cos15^\\circ=\\sqrt{\\dfrac{1+\\cos30^\\circ}{2}}=\\sqrt{\\dfrac{1+0.8660}{2}}\\approx0.9659$。根号内用 $1-\\cos30^\\circ$ 算的是 $\\sin15^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\theta=30^\\circ$, evaluate $\\sin 2\\theta$ as a decimal rounded to 4 places.",
        "zh": "若 $\\theta=30^\\circ$，求 $\\sin 2\\theta$（四位小数）。"
      },
      "answer": "0.8660",
      "accept": [
        "0.866",
        "0.87",
        "√3/2",
        "0.8660254"
      ],
      "explanation": {
        "en": "$\\sin2\\theta=\\sin60^\\circ=\\dfrac{\\sqrt3}{2}\\approx0.8660$. Computing $2\\sin30^\\circ=1$ ignores the cosine factor in the double-angle formula.",
        "zh": "$\\sin2\\theta=\\sin60^\\circ=\\dfrac{\\sqrt3}{2}\\approx0.8660$。算成 $2\\sin30^\\circ=1$ 是忽略了倍角公式中的余弦因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the smallest positive solution of $2\\cos\\theta+1=0$ on $[0,2\\pi)$ as a decimal (radians, 4 places).",
        "zh": "求 $2\\cos\\theta+1=0$ 在 $[0,2\\pi)$ 上的最小正解（弧度，四位小数）。"
      },
      "answer": "2.0944",
      "accept": [
        "2π/3",
        "2.094",
        "2.09",
        "2.0943951"
      ],
      "explanation": {
        "en": "$\\cos\\theta=-\\dfrac12$ gives $\\theta=\\dfrac{2\\pi}{3}\\approx2.0944$ and $\\dfrac{4\\pi}{3}$; the smaller is $\\dfrac{2\\pi}{3}$. Using $\\dfrac{\\pi}{3}$ solves $\\cos\\theta=+\\dfrac12$, the wrong sign.",
        "zh": "$\\cos\\theta=-\\dfrac12$ 给出 $\\theta=\\dfrac{2\\pi}{3}\\approx2.0944$ 和 $\\dfrac{4\\pi}{3}$；较小的是 $\\dfrac{2\\pi}{3}$。用 $\\dfrac{\\pi}{3}$ 解的是 $\\cos\\theta=+\\dfrac12$，符号错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\cos\\theta=\\dfrac{1}{2}$, use $\\cos 2\\theta=2\\cos^2\\theta-1$ to find $\\cos 2\\theta$ as a decimal.",
        "zh": "若 $\\cos\\theta=\\dfrac{1}{2}$，用 $\\cos 2\\theta=2\\cos^2\\theta-1$ 求 $\\cos 2\\theta$（小数）。"
      },
      "answer": "-0.5",
      "accept": [
        "-0.50",
        "-1/2",
        "-.5",
        "−0.5"
      ],
      "explanation": {
        "en": "$\\cos2\\theta=2\\left(\\dfrac12\\right)^2-1=2\\cdot\\dfrac14-1=-\\dfrac12=-0.5$. Forgetting to square $\\dfrac12$ first gives $0$, which is wrong.",
        "zh": "$\\cos2\\theta=2\\left(\\dfrac12\\right)^2-1=2\\cdot\\dfrac14-1=-\\dfrac12=-0.5$。忘记先平方 $\\dfrac12$ 会得 $0$，错误。"
      }
    }
  ],
  "applications-of-trigonometry/law-of-sines-and-cosines": [
    {
      "type": "mc",
      "question": {
        "en": "Which equation states the Law of Sines for a triangle with sides $a, b, c$ opposite angles $A, B, C$?",
        "zh": "对于边 $a, b, c$ 分别对应角 $A, B, C$ 的三角形，哪个方程是正弦定理？"
      },
      "choices": [
        "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$",
        "$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c^2}$",
        "$a^2 = b^2 + c^2 - 2bc\\cos A$",
        "$\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The Law of Sines pairs each side with the sine of its opposite angle in equal ratios: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$. Using cosine instead is the Law of Cosines, a different relationship.",
        "zh": "正弦定理把每条边与其对角的正弦以相等的比值配对：$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$。用余弦代替是余弦定理，是另一种关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a triangle, $A = 30^\\circ$, $a = 8$, and $B = 45^\\circ$. Find side $b$.",
        "zh": "在三角形中，$A = 30^\\circ$，$a = 8$，$B = 45^\\circ$。求边 $b$。"
      },
      "choices": [
        "$5.7$",
        "$11.3$",
        "$8.0$",
        "$16.0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the Law of Sines, $b = \\frac{a\\sin B}{\\sin A} = \\frac{8\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{8(0.7071)}{0.5} \\approx 11.3$. Getting $5.7$ comes from flipping the ratio and dividing by $\\sin 45^\\circ$ instead.",
        "zh": "由正弦定理，$b = \\frac{a\\sin B}{\\sin A} = \\frac{8\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{8(0.7071)}{0.5} \\approx 11.3$。算成 $5.7$ 是把比值颠倒、误除以 $\\sin 45^\\circ$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation is the Law of Cosines for side $c$?",
        "zh": "关于边 $c$ 的余弦定理是哪个方程？"
      },
      "choices": [
        "$c^2 = a^2 + b^2$",
        "$c^2 = a^2 + b^2 + 2ab\\cos C$",
        "$c^2 = a^2 + b^2 - 2ab\\cos C$",
        "$c = a + b - 2ab\\cos C$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The Law of Cosines is $c^2 = a^2 + b^2 - 2ab\\cos C$; it reduces to the Pythagorean theorem only when $C = 90^\\circ$. Using a $+$ sign before the cosine term reverses the correction and gives wrong lengths.",
        "zh": "余弦定理是 $c^2 = a^2 + b^2 - 2ab\\cos C$；仅当 $C = 90^\\circ$ 时才退化为勾股定理。在余弦项前用 $+$ 号会把修正方向弄反，得到错误长度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has $a = 5$, $b = 7$, and included angle $C = 60^\\circ$. Find side $c$.",
        "zh": "三角形中 $a = 5$，$b = 7$，夹角 $C = 60^\\circ$。求边 $c$。"
      },
      "choices": [
        "$8.6$",
        "$10.4$",
        "$9.4$",
        "$6.2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$c^2 = 5^2 + 7^2 - 2(5)(7)\\cos 60^\\circ = 74 - 70(0.5) = 39$, so $c = \\sqrt{39} \\approx 6.2$. Getting $8.6$ ($\\sqrt{74}$) drops the $-2ab\\cos C$ term entirely.",
        "zh": "$c^2 = 5^2 + 7^2 - 2(5)(7)\\cos 60^\\circ = 74 - 70(0.5) = 39$，所以 $c = \\sqrt{39} \\approx 6.2$。算成 $8.6$（即 $\\sqrt{74}$）是完全漏掉了 $-2ab\\cos C$ 这一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the area of a triangle with $a = 6$, $b = 8$, and included angle $C = 30^\\circ$.",
        "zh": "求 $a = 6$，$b = 8$，夹角 $C = 30^\\circ$ 的三角形面积。"
      },
      "choices": [
        "$12$",
        "$24$",
        "$6$",
        "$20.8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Area $= \\frac{1}{2}ab\\sin C = \\frac{1}{2}(6)(8)\\sin 30^\\circ = 24(0.5) = 12$. Answering $24$ forgets the factor of $\\frac{1}{2}$.",
        "zh": "面积 $= \\frac{1}{2}ab\\sin C = \\frac{1}{2}(6)(8)\\sin 30^\\circ = 24(0.5) = 12$。回答 $24$ 是漏掉了 $\\frac{1}{2}$ 这个系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $a = 10$, $b = 16$, and $A = 30^\\circ$ (SSA), how many triangles are possible?",
        "zh": "已知 $a = 10$，$b = 16$，$A = 30^\\circ$（SSA），可以构成几个三角形？"
      },
      "choices": [
        "No triangle",
        "Exactly one triangle",
        "Two triangles",
        "Infinitely many triangles"
      ],
      "answer": 2,
      "explanation": {
        "en": "The height is $h = b\\sin A = 16\\sin 30^\\circ = 8$. Since $h < a < b$ (that is $8 < 10 < 16$), side $a$ can swing to two positions, giving two triangles. Assuming just one ignores the second (obtuse) solution.",
        "zh": "高为 $h = b\\sin A = 16\\sin 30^\\circ = 8$。由于 $h < a < b$（即 $8 < 10 < 16$），边 $a$ 可摆到两个位置，得到两个三角形。只认为一个是忽略了第二个（钝角）解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You know two sides and the angle between them (SAS). Which method finds the third side most directly?",
        "zh": "已知两边及其夹角（SAS）。哪种方法最直接地求出第三条边？"
      },
      "choices": [
        "Law of Sines",
        "Pythagorean theorem only",
        "Law of Cosines",
        "Neither law applies"
      ],
      "answer": 2,
      "explanation": {
        "en": "With SAS the third side is opposite the known angle, and the Law of Cosines uses exactly those two sides and the included angle. The Law of Sines needs a known side-opposite-angle pair, which SAS does not give.",
        "zh": "在 SAS 中，第三条边正对已知角，而余弦定理恰好用到这两条边和夹角。正弦定理需要一组已知的边与对角配对，而 SAS 并未直接给出。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle has sides $a = 7$, $b = 8$, $c = 9$. Find angle $C$ (opposite side $c$).",
        "zh": "三角形边长 $a = 7$，$b = 8$，$c = 9$。求角 $C$（$c$ 的对角）。"
      },
      "choices": [
        "$56.3^\\circ$",
        "$48.2^\\circ$",
        "$90^\\circ$",
        "$73.4^\\circ$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{49 + 64 - 81}{112} = 0.2857$, so $C = \\cos^{-1}(0.2857) \\approx 73.4^\\circ$. Assuming $90^\\circ$ would require $c^2 = a^2 + b^2$, but $81 \\ne 113$.",
        "zh": "$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{49 + 64 - 81}{112} = 0.2857$，所以 $C = \\cos^{-1}(0.2857) \\approx 73.4^\\circ$。若认为是 $90^\\circ$ 则需 $c^2 = a^2 + b^2$，但 $81 \\ne 113$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You know all three side lengths (SSS) and want the area. Which formula applies most directly?",
        "zh": "已知三条边长（SSS），想求面积。哪个公式最直接适用？"
      },
      "choices": [
        "Heron's formula",
        "$\\frac{1}{2}ab$",
        "$\\frac{1}{2}ab\\sin C$ with no further work",
        "Law of Sines"
      ],
      "answer": 0,
      "explanation": {
        "en": "Heron's formula, $\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}$ with $s = \\frac{a+b+c}{2}$, uses only the three sides. The formula $\\frac{1}{2}ab\\sin C$ needs an angle, which SSS does not hand you until you first solve for one.",
        "zh": "海伦公式 $\\text{面积} = \\sqrt{s(s-a)(s-b)(s-c)}$，其中 $s = \\frac{a+b+c}{2}$，只用到三条边。$\\frac{1}{2}ab\\sin C$ 需要一个角，而 SSS 需先求出角才能用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangular garden has two sides of $20$ m and $30$ m with a $50^\\circ$ angle between them. Its area is closest to:",
        "zh": "一块三角形花园的两条边分别为 $20$ 米和 $30$ 米，夹角为 $50^\\circ$。其面积最接近："
      },
      "choices": [
        "$300$ m²",
        "$230$ m²",
        "$459$ m²",
        "$193$ m²"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area $= \\frac{1}{2}(20)(30)\\sin 50^\\circ = 300(0.766) \\approx 230$ m². Getting $459$ drops the $\\frac{1}{2}$; getting $193$ uses $\\cos 50^\\circ$ instead of $\\sin 50^\\circ$.",
        "zh": "面积 $= \\frac{1}{2}(20)(30)\\sin 50^\\circ = 300(0.766) \\approx 230$ 平方米。算成 $459$ 是漏掉 $\\frac{1}{2}$；算成 $193$ 是误用 $\\cos 50^\\circ$ 而非 $\\sin 50^\\circ$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a triangle, $b = 10$, $B = 40^\\circ$, and $a = 8$. Find angle $A$ (acute solution).",
        "zh": "在三角形中，$b = 10$，$B = 40^\\circ$，$a = 8$。求角 $A$（锐角解）。"
      },
      "choices": [
        "$40^\\circ$",
        "$51.3^\\circ$",
        "$30.9^\\circ$",
        "$25.6^\\circ$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\sin A = \\frac{a\\sin B}{b} = \\frac{8\\sin 40^\\circ}{10} = 0.514$, so $A = \\sin^{-1}(0.514) \\approx 30.9^\\circ$. Since $a < b$, angle $A$ must be smaller than $B$, ruling out values above $40^\\circ$.",
        "zh": "$\\sin A = \\frac{a\\sin B}{b} = \\frac{8\\sin 40^\\circ}{10} = 0.514$，所以 $A = \\sin^{-1}(0.514) \\approx 30.9^\\circ$。由于 $a < b$，角 $A$ 必小于 $B$，故大于 $40^\\circ$ 的值不成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $a = 4$, $b = 10$, and $A = 30^\\circ$ (SSA), how many triangles are possible?",
        "zh": "已知 $a = 4$，$b = 10$，$A = 30^\\circ$（SSA），可以构成几个三角形？"
      },
      "choices": [
        "Two triangles",
        "One right triangle",
        "One triangle",
        "No triangle"
      ],
      "answer": 3,
      "explanation": {
        "en": "The height is $h = b\\sin A = 10\\sin 30^\\circ = 5$. Since $a = 4 < h = 5$, side $a$ is too short to reach the base, so no triangle forms. Concluding one triangle ignores that $a$ never touches the opposite side.",
        "zh": "高为 $h = b\\sin A = 10\\sin 30^\\circ = 5$。由于 $a = 4 < h = 5$，边 $a$ 太短够不到底边，因此无法构成三角形。认为有一个三角形是忽略了 $a$ 根本触及不到对边。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a triangle, $A = 35^\\circ$, $a = 12$, and $B = 65^\\circ$. Find side $b$ (round to the nearest tenth).",
        "zh": "在三角形中，$A = 35^\\circ$，$a = 12$，$B = 65^\\circ$。求边 $b$（保留一位小数）。"
      },
      "answer": "19.0",
      "accept": [
        "19",
        "18.96",
        "18.9",
        "19.0",
        "19.00"
      ],
      "explanation": {
        "en": "By the Law of Sines, $b = \\frac{a\\sin B}{\\sin A} = \\frac{12\\sin 65^\\circ}{\\sin 35^\\circ} = \\frac{12(0.9063)}{0.5736} \\approx 19.0$. Pair each side with its own opposite angle; do not divide by $\\sin B$.",
        "zh": "由正弦定理，$b = \\frac{a\\sin B}{\\sin A} = \\frac{12\\sin 65^\\circ}{\\sin 35^\\circ} = \\frac{12(0.9063)}{0.5736} \\approx 19.0$。每条边要与自身的对角配对，切勿误除以 $\\sin B$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has $a = 8$, $b = 6$, and included angle $C = 120^\\circ$. Find side $c$ (round to the nearest tenth).",
        "zh": "三角形中 $a = 8$，$b = 6$，夹角 $C = 120^\\circ$。求边 $c$（保留一位小数）。"
      },
      "answer": "12.2",
      "accept": [
        "12.2",
        "12.17",
        "12.166",
        "12",
        "12.16"
      ],
      "explanation": {
        "en": "$c^2 = 8^2 + 6^2 - 2(8)(6)\\cos 120^\\circ = 100 - 96(-0.5) = 148$, so $c = \\sqrt{148} \\approx 12.2$. Because $\\cos 120^\\circ$ is negative, the term adds to the total, making $c$ larger than either side.",
        "zh": "$c^2 = 8^2 + 6^2 - 2(8)(6)\\cos 120^\\circ = 100 - 96(-0.5) = 148$，所以 $c = \\sqrt{148} \\approx 12.2$。由于 $\\cos 120^\\circ$ 为负，该项使总和增大，故 $c$ 大于任一边。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of a triangle with $a = 10$, $b = 14$, and included angle $C = 45^\\circ$ (round to the nearest tenth).",
        "zh": "求 $a = 10$，$b = 14$，夹角 $C = 45^\\circ$ 的三角形面积（保留一位小数）。"
      },
      "answer": "49.5",
      "accept": [
        "49.5",
        "49.50",
        "49.497",
        "49.4",
        "49"
      ],
      "explanation": {
        "en": "Area $= \\frac{1}{2}ab\\sin C = \\frac{1}{2}(10)(14)\\sin 45^\\circ = 70(0.7071) \\approx 49.5$. Keep the factor of $\\frac{1}{2}$; dropping it doubles the result to about $99$.",
        "zh": "面积 $= \\frac{1}{2}ab\\sin C = \\frac{1}{2}(10)(14)\\sin 45^\\circ = 70(0.7071) \\approx 49.5$。要保留 $\\frac{1}{2}$；漏掉它会使结果翻倍到约 $99$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A triangle has sides $3$, $5$, and $7$. Find the largest angle in degrees.",
        "zh": "一个三角形的边长为 $3$、$5$、$7$。求最大的角（以度为单位）。"
      },
      "answer": "120",
      "accept": [
        "120",
        "120.0",
        "120 degrees",
        "120°",
        "120度"
      ],
      "explanation": {
        "en": "The largest angle is opposite the longest side ($7$). $\\cos\\theta = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{-15}{30} = -0.5$, so $\\theta = 120^\\circ$. A negative cosine signals an obtuse angle, not an acute one.",
        "zh": "最大角对着最长边（$7$）。$\\cos\\theta = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{-15}{30} = -0.5$，所以 $\\theta = 120^\\circ$。余弦为负说明是钝角，而非锐角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $a = 9$, $b = 12$, and $A = 35^\\circ$ (SSA), how many triangles are possible? Give a number.",
        "zh": "已知 $a = 9$，$b = 12$，$A = 35^\\circ$（SSA），可以构成几个三角形？请给出一个数字。"
      },
      "answer": "2",
      "accept": [
        "2",
        "two",
        "两个",
        "2个",
        "两"
      ],
      "explanation": {
        "en": "The height is $h = b\\sin A = 12\\sin 35^\\circ \\approx 6.88$. Since $h < a < b$ (about $6.88 < 9 < 12$), there are two triangles. Overlooking the obtuse case would wrongly give just one.",
        "zh": "高为 $h = b\\sin A = 12\\sin 35^\\circ \\approx 6.88$。由于 $h < a < b$（约 $6.88 < 9 < 12$），有两个三角形。忽略钝角情形会错误地只得一个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A surveyor measures a triangular plot with two sides of $50$ m and $65$ m meeting at a $55^\\circ$ angle. Find the area in square meters (round to the nearest whole number).",
        "zh": "一名测量员测得一块三角形地块的两条边为 $50$ 米和 $65$ 米，夹角为 $55^\\circ$。求面积（平方米，四舍五入到整数）。"
      },
      "answer": "1331",
      "accept": [
        "1331",
        "1330",
        "1331.1",
        "1331 m^2",
        "1331 square meters",
        "1332"
      ],
      "explanation": {
        "en": "Area $= \\frac{1}{2}(50)(65)\\sin 55^\\circ = 1625(0.8192) \\approx 1331$ m². The included angle goes inside the sine; using $\\cos 55^\\circ$ instead would understate the area.",
        "zh": "面积 $= \\frac{1}{2}(50)(65)\\sin 55^\\circ = 1625(0.8192) \\approx 1331$ 平方米。夹角要放进正弦；误用 $\\cos 55^\\circ$ 会低估面积。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a triangle, $a = 7$, $A = 40^\\circ$, and $b = 9$. Find angle $B$ in degrees (acute solution, round to the nearest tenth).",
        "zh": "在三角形中，$a = 7$，$A = 40^\\circ$，$b = 9$。求角 $B$（以度为单位，锐角解，保留一位小数）。"
      },
      "answer": "55.7",
      "accept": [
        "55.7",
        "55.6",
        "55.70",
        "55.73",
        "55.8"
      ],
      "explanation": {
        "en": "$\\sin B = \\frac{b\\sin A}{a} = \\frac{9\\sin 40^\\circ}{7} = 0.826$, so $B = \\sin^{-1}(0.826) \\approx 55.7^\\circ$. Because $b > a$, angle $B$ is larger than $A = 40^\\circ$, as expected.",
        "zh": "$\\sin B = \\frac{b\\sin A}{a} = \\frac{9\\sin 40^\\circ}{7} = 0.826$，所以 $B = \\sin^{-1}(0.826) \\approx 55.7^\\circ$。由于 $b > a$，角 $B$ 大于 $A = 40^\\circ$，符合预期。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two straight roads leave a town at a $70^\\circ$ angle. One car drives $4$ km along one road and another drives $6$ km along the other. How far apart are the cars, in km (round to the nearest tenth)?",
        "zh": "两条笔直的公路以 $70^\\circ$ 的夹角从一个镇子出发。一辆车沿一条路行驶 $4$ 千米，另一辆车沿另一条路行驶 $6$ 千米。两车相距多少千米（保留一位小数）？"
      },
      "answer": "6.0",
      "accept": [
        "6.0",
        "6",
        "5.97",
        "5.965",
        "6.00",
        "5.96"
      ],
      "explanation": {
        "en": "By the Law of Cosines, $d^2 = 4^2 + 6^2 - 2(4)(6)\\cos 70^\\circ = 52 - 48(0.342) = 35.6$, so $d = \\sqrt{35.6} \\approx 6.0$ km. Simply adding the distances ($10$ km) ignores the angle between the roads.",
        "zh": "由余弦定理，$d^2 = 4^2 + 6^2 - 2(4)(6)\\cos 70^\\circ = 52 - 48(0.342) = 35.6$，所以 $d = \\sqrt{35.6} \\approx 6.0$ 千米。直接把距离相加（$10$ 千米）忽略了两条路之间的夹角。"
      }
    }
  ],
  "applications-of-trigonometry/polar-coordinates-and-complex": [
    {
      "type": "mc",
      "question": {
        "en": "Convert the polar point $(r, \\theta) = (4, 60^\\circ)$ to rectangular coordinates $(x, y)$.",
        "zh": "把极坐标点 $(r, \\theta) = (4, 60^\\circ)$ 转换为直角坐标 $(x, y)$。"
      },
      "choices": [
        "$(2, 2\\sqrt{3})$",
        "$(2\\sqrt{3}, 2)$",
        "$(4, 4)$",
        "$(2, 4)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Use $x = r\\cos\\theta = 4\\cos 60^\\circ = 2$ and $y = r\\sin\\theta = 4\\sin 60^\\circ = 2\\sqrt{3}$, giving $(2, 2\\sqrt{3})$. Swapping to $(2\\sqrt{3}, 2)$ mixes up which coordinate uses cosine.",
        "zh": "用 $x = r\\cos\\theta = 4\\cos 60^\\circ = 2$ 和 $y = r\\sin\\theta = 4\\sin 60^\\circ = 2\\sqrt{3}$，得 $(2, 2\\sqrt{3})$。写成 $(2\\sqrt{3}, 2)$ 是把哪个坐标该用余弦搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert the rectangular point $(3, 3)$ to polar form with $r > 0$ and $0^\\circ \\le \\theta < 360^\\circ$.",
        "zh": "把直角坐标点 $(3, 3)$ 转换为极坐标形式（$r > 0$，$0^\\circ \\le \\theta < 360^\\circ$）。"
      },
      "choices": [
        "$r = 6,\\ \\theta = 45^\\circ$",
        "$r = 3\\sqrt{2},\\ \\theta = 45^\\circ$",
        "$r = 3\\sqrt{2},\\ \\theta = 135^\\circ$",
        "$r = 9,\\ \\theta = 45^\\circ$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$r = \\sqrt{3^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$ and $\\theta = \\tan^{-1}(3/3) = 45^\\circ$ (first quadrant). Using $r = 6$ mistakenly adds the coordinates instead of squaring, summing, and taking the root.",
        "zh": "$r = \\sqrt{3^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$，$\\theta = \\tan^{-1}(3/3) = 45^\\circ$（第一象限）。取 $r = 6$ 是错把坐标直接相加，而不是先平方求和再开方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the modulus $|z|$ of the complex number $z = 3 + 4i$.",
        "zh": "求复数 $z = 3 + 4i$ 的模 $|z|$。"
      },
      "choices": [
        "$7$",
        "$25$",
        "$5$",
        "$\\sqrt{7}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The modulus is $|z| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. Answering $7$ adds the real and imaginary parts instead of using the square-root-of-sum-of-squares.",
        "zh": "模为 $|z| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$。回答 $7$ 是把实部与虚部直接相加，而不是用平方和再开方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement is De Moivre's theorem?",
        "zh": "哪一句是棣莫弗定理（De Moivre's theorem）？"
      },
      "choices": [
        "$(\\cos\\theta + i\\sin\\theta)^n = \\cos\\theta + i\\sin(n\\theta)$",
        "$(\\cos\\theta + i\\sin\\theta)^n = n\\cos\\theta + ni\\sin\\theta$",
        "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(\\theta^n) + i\\sin(\\theta^n)$",
        "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "De Moivre's theorem raises a unit-modulus complex number to a power by multiplying the angle: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$. Multiplying $\\theta$ by $n$ only inside one function, or scaling the whole expression by $n$, are both incorrect.",
        "zh": "棣莫弗定理通过把角度乘以 $n$ 来对模为 $1$ 的复数求幂：$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$。只在一个函数里把 $\\theta$ 乘 $n$，或把整个表达式乘以 $n$，都是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To multiply two complex numbers in polar (trig) form, you should:",
        "zh": "要把两个极坐标（三角）形式的复数相乘，应当："
      },
      "choices": [
        "Multiply the moduli and add the arguments",
        "Add the moduli and multiply the arguments",
        "Multiply the moduli and multiply the arguments",
        "Add the moduli and add the arguments"
      ],
      "answer": 0,
      "explanation": {
        "en": "For $z_1 z_2 = r_1 r_2[\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)]$, you multiply the moduli but add the angles. Multiplying the angles too is a common slip that has no basis in the formula.",
        "zh": "由 $z_1 z_2 = r_1 r_2[\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)]$，模相乘而角相加。把角也相乘是常见错误，公式中并无此依据。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To divide two complex numbers in polar form, $\\frac{z_1}{z_2}$, you should:",
        "zh": "要把两个极坐标形式的复数相除 $\\frac{z_1}{z_2}$，应当："
      },
      "choices": [
        "Subtract the moduli and divide the arguments",
        "Divide the moduli and subtract the arguments",
        "Divide the moduli and add the arguments",
        "Divide both the moduli and the arguments"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{z_1}{z_2} = \\frac{r_1}{r_2}[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)]$: divide the moduli and subtract the angles. Dividing the angles has no basis; angles combine by subtraction under division.",
        "zh": "$\\frac{z_1}{z_2} = \\frac{r_1}{r_2}[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)]$：模相除，角相减。把角相除毫无依据；除法下角度用相减来合并。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert the rectangular point $(-1, \\sqrt{3})$ to polar form with $r > 0$ and $0^\\circ \\le \\theta < 360^\\circ$.",
        "zh": "把直角坐标点 $(-1, \\sqrt{3})$ 转换为极坐标形式（$r > 0$，$0^\\circ \\le \\theta < 360^\\circ$）。"
      },
      "choices": [
        "$r = 2,\\ \\theta = 60^\\circ$",
        "$r = 2,\\ \\theta = 240^\\circ$",
        "$r = 2,\\ \\theta = 120^\\circ$",
        "$r = 4,\\ \\theta = 120^\\circ$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{4} = 2$. The point is in the second quadrant ($x<0, y>0$), and the reference angle is $60^\\circ$, so $\\theta = 180^\\circ - 60^\\circ = 120^\\circ$. Taking $60^\\circ$ ignores the quadrant given by the signs.",
        "zh": "$r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{4} = 2$。该点在第二象限（$x<0, y>0$），参考角为 $60^\\circ$，故 $\\theta = 180^\\circ - 60^\\circ = 120^\\circ$。取 $60^\\circ$ 是忽略了符号所决定的象限。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the graph of the polar equation $r = 4$?",
        "zh": "极坐标方程 $r = 4$ 的图形是什么？"
      },
      "choices": [
        "A line through the origin",
        "A vertical line $x = 4$",
        "A spiral",
        "A circle of radius $4$ centered at the origin"
      ],
      "answer": 3,
      "explanation": {
        "en": "$r = 4$ means every point is distance $4$ from the origin regardless of angle, which is a circle of radius $4$ centered at the origin. A line comes from fixing $\\theta$, not $r$.",
        "zh": "$r = 4$ 表示无论角度如何，每个点到原点的距离都是 $4$，这是以原点为圆心、半径为 $4$ 的圆。固定 $\\theta$（而非 $r$）才得到直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the graph of the polar equation $\\theta = \\frac{\\pi}{4}$?",
        "zh": "极坐标方程 $\\theta = \\frac{\\pi}{4}$ 的图形是什么？"
      },
      "choices": [
        "A line through the origin at $45^\\circ$",
        "A circle of radius $\\frac{\\pi}{4}$",
        "A single point",
        "A horizontal line"
      ],
      "answer": 0,
      "explanation": {
        "en": "Fixing $\\theta = \\frac{\\pi}{4}$ while $r$ varies over all reals traces a straight line through the origin at $45^\\circ$. A circle would come from fixing $r$ instead of $\\theta$.",
        "zh": "固定 $\\theta = \\frac{\\pi}{4}$ 而让 $r$ 取遍所有实数，描出过原点、倾角 $45^\\circ$ 的直线。固定 $r$（而非 $\\theta$）才会得到圆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Use De Moivre's theorem to compute $[2(\\cos 30^\\circ + i\\sin 30^\\circ)]^3$.",
        "zh": "用棣莫弗定理计算 $[2(\\cos 30^\\circ + i\\sin 30^\\circ)]^3$。"
      },
      "choices": [
        "$6i$",
        "$8i$",
        "$8$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Cube the modulus and triple the angle: $2^3 = 8$ and $3(30^\\circ) = 90^\\circ$, giving $8(\\cos 90^\\circ + i\\sin 90^\\circ) = 8i$. Getting $6i$ multiplies the modulus by $3$ instead of raising it to the third power.",
        "zh": "把模求立方、角度乘三：$2^3 = 8$，$3(30^\\circ) = 90^\\circ$，得 $8(\\cos 90^\\circ + i\\sin 90^\\circ) = 8i$。算成 $6i$ 是把模乘以 $3$，而不是求它的三次幂。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the modulus of $z = 1 + i$.",
        "zh": "求 $z = 1 + i$ 的模。"
      },
      "choices": [
        "$1$",
        "$2$",
        "$\\sqrt{2}$",
        "$0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$|z| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Answering $2$ adds the squares but forgets to take the square root.",
        "zh": "$|z| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$。回答 $2$ 是把平方相加却忘了开方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the product $[2(\\cos 40^\\circ + i\\sin 40^\\circ)][3(\\cos 20^\\circ + i\\sin 20^\\circ)]$.",
        "zh": "求乘积 $[2(\\cos 40^\\circ + i\\sin 40^\\circ)][3(\\cos 20^\\circ + i\\sin 20^\\circ)]$。"
      },
      "choices": [
        "$5(\\cos 800^\\circ + i\\sin 800^\\circ)$",
        "$6(\\cos 20^\\circ + i\\sin 20^\\circ)$",
        "$5(\\cos 60^\\circ + i\\sin 60^\\circ)$",
        "$6(\\cos 60^\\circ + i\\sin 60^\\circ)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply the moduli ($2 \\times 3 = 6$) and add the angles ($40^\\circ + 20^\\circ = 60^\\circ$), giving $6(\\cos 60^\\circ + i\\sin 60^\\circ)$. Adding the moduli to $5$ or multiplying the angles to $800^\\circ$ both misapply the product rule.",
        "zh": "模相乘（$2 \\times 3 = 6$），角相加（$40^\\circ + 20^\\circ = 60^\\circ$），得 $6(\\cos 60^\\circ + i\\sin 60^\\circ)$。把模相加成 $5$，或把角相乘成 $800^\\circ$，都是错用了乘法法则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the modulus $|z|$ of the complex number $z = 5 - 12i$.",
        "zh": "求复数 $z = 5 - 12i$ 的模 $|z|$。"
      },
      "answer": "13",
      "accept": [
        "13",
        "13.0",
        "13.00",
        "+13"
      ],
      "explanation": {
        "en": "$|z| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. The sign of the imaginary part disappears once it is squared, so $-12$ contributes $144$.",
        "zh": "$|z| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$。虚部的符号在平方后消失，所以 $-12$ 贡献 $144$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert the polar point $(r, \\theta) = (2, 180^\\circ)$ to rectangular coordinates and give the $x$-coordinate.",
        "zh": "把极坐标点 $(r, \\theta) = (2, 180^\\circ)$ 转换为直角坐标，并给出 $x$ 坐标。"
      },
      "answer": "-2",
      "accept": [
        "-2",
        "-2.0",
        "-2.00",
        "−2"
      ],
      "explanation": {
        "en": "$x = r\\cos\\theta = 2\\cos 180^\\circ = 2(-1) = -2$. Because $\\cos 180^\\circ = -1$, the $x$-coordinate is negative; using $+1$ would drop the sign.",
        "zh": "$x = r\\cos\\theta = 2\\cos 180^\\circ = 2(-1) = -2$。因为 $\\cos 180^\\circ = -1$，所以 $x$ 坐标为负；用 $+1$ 会丢掉符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using De Moivre's theorem, $(\\cos 15^\\circ + i\\sin 15^\\circ)^6 = \\cos\\theta + i\\sin\\theta$. Find $\\theta$ in degrees.",
        "zh": "用棣莫弗定理，$(\\cos 15^\\circ + i\\sin 15^\\circ)^6 = \\cos\\theta + i\\sin\\theta$。求 $\\theta$（以度为单位）。"
      },
      "answer": "90",
      "accept": [
        "90",
        "90.0",
        "90 degrees",
        "90°",
        "90度"
      ],
      "explanation": {
        "en": "De Moivre's theorem multiplies the angle by the exponent: $\\theta = 6 \\times 15^\\circ = 90^\\circ$. The modulus stays $1$ because $1^6 = 1$.",
        "zh": "棣莫弗定理把角度乘以指数：$\\theta = 6 \\times 15^\\circ = 90^\\circ$。因为 $1^6 = 1$，模仍为 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $|z_1| = 3$ and $|z_2| = 4$, find $|z_1 z_2|$.",
        "zh": "若 $|z_1| = 3$，$|z_2| = 4$，求 $|z_1 z_2|$。"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "12.00",
        "+12"
      ],
      "explanation": {
        "en": "The modulus of a product is the product of the moduli: $|z_1 z_2| = |z_1|\\,|z_2| = 3 \\times 4 = 12$. Adding the moduli to get $7$ confuses the product rule with a sum.",
        "zh": "乘积的模等于各自模的乘积：$|z_1 z_2| = |z_1|\\,|z_2| = 3 \\times 4 = 12$。把模相加得 $7$ 是把乘法法则错当成加法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the argument (in degrees, with $0^\\circ \\le \\theta < 360^\\circ$) of $z = 1 + i$.",
        "zh": "求 $z = 1 + i$ 的辐角（以度为单位，$0^\\circ \\le \\theta < 360^\\circ$）。"
      },
      "answer": "45",
      "accept": [
        "45",
        "45.0",
        "45 degrees",
        "45°",
        "45度",
        "pi/4",
        "π/4"
      ],
      "explanation": {
        "en": "With $x = 1$ and $y = 1$ in the first quadrant, $\\theta = \\tan^{-1}(1/1) = 45^\\circ$. Both parts are positive, so no quadrant adjustment is needed.",
        "zh": "在第一象限中 $x = 1$，$y = 1$，$\\theta = \\tan^{-1}(1/1) = 45^\\circ$。两部分均为正，无需象限调整。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the modulus $r$ of the complex number $z = \\sqrt{3} + i$.",
        "zh": "求复数 $z = \\sqrt{3} + i$ 的模 $r$。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "2.00",
        "+2"
      ],
      "explanation": {
        "en": "$r = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = \\sqrt{4} = 2$. Remember $(\\sqrt{3})^2 = 3$, not $\\sqrt{3}$, when squaring the real part.",
        "zh": "$r = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = \\sqrt{4} = 2$。对实部平方时要记得 $(\\sqrt{3})^2 = 3$，而不是 $\\sqrt{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute $[\\sqrt{2}(\\cos 45^\\circ + i\\sin 45^\\circ)]^4$ and give its modulus.",
        "zh": "计算 $[\\sqrt{2}(\\cos 45^\\circ + i\\sin 45^\\circ)]^4$，并给出其模。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "4.00",
        "+4"
      ],
      "explanation": {
        "en": "By De Moivre's theorem the modulus is $(\\sqrt{2})^4 = 4$ (the angle becomes $4 \\times 45^\\circ = 180^\\circ$, but that does not change the modulus). Multiplying $\\sqrt{2}$ by $4$ instead of raising it to the fourth power would give the wrong value.",
        "zh": "由棣莫弗定理，模为 $(\\sqrt{2})^4 = 4$（角度变为 $4 \\times 45^\\circ = 180^\\circ$，但这不改变模）。把 $\\sqrt{2}$ 乘以 $4$ 而不是求四次幂会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using De Moivre's theorem, find the modulus of $[2(\\cos 30^\\circ + i\\sin 30^\\circ)]^5$.",
        "zh": "用棣莫弗定理，求 $[2(\\cos 30^\\circ + i\\sin 30^\\circ)]^5$ 的模。"
      },
      "answer": "32",
      "accept": [
        "32",
        "32.0",
        "32.00",
        "+32"
      ],
      "explanation": {
        "en": "Raise the modulus to the fifth power: $2^5 = 32$ (the angle becomes $5 \\times 30^\\circ = 150^\\circ$). Multiplying $2$ by $5$ to get $10$ mistakes exponentiation for scaling.",
        "zh": "把模求五次幂：$2^5 = 32$（角度变为 $5 \\times 30^\\circ = 150^\\circ$）。把 $2$ 乘以 $5$ 得 $10$ 是把乘方误当成倍数。"
      }
    }
  ],
  "vectors/vectors-and-operations": [
    {
      "type": "mc",
      "question": {
        "en": "A vector goes from point $P(-2, 3)$ to point $Q(4, -1)$. What is its component form?",
        "zh": "一个向量从点 $P(-2, 3)$ 指向点 $Q(4, -1)$。它的分量形式是什么？"
      },
      "choices": [
        "$\\langle 6, -4 \\rangle$",
        "$\\langle 2, 2 \\rangle$",
        "$\\langle -6, 4 \\rangle$",
        "$\\langle 6, 4 \\rangle$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Component form is (terminal minus initial): $\\langle 4-(-2),\\, -1-3 \\rangle = \\langle 6, -4 \\rangle$. Subtracting in the wrong order (initial minus terminal) reverses both signs and gives $\\langle -6, 4 \\rangle$.",
        "zh": "分量形式为（终点减起点）：$\\langle 4-(-2),\\, -1-3 \\rangle = \\langle 6, -4 \\rangle$。若顺序相反（起点减终点），两个符号都会反过来，得到 $\\langle -6, 4 \\rangle$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the magnitude of the vector $\\langle 3, -4 \\rangle$?",
        "zh": "向量 $\\langle 3, -4 \\rangle$ 的模是多少？"
      },
      "choices": [
        "$1$",
        "$5$",
        "$7$",
        "$25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Magnitude is $\\sqrt{3^2 + (-4)^2} = \\sqrt{9+16} = \\sqrt{25} = 5$. Adding the components as $3+(-4)=-1$ or leaving the value under the root as $25$ skips the final square root.",
        "zh": "模为 $\\sqrt{3^2 + (-4)^2} = \\sqrt{9+16} = \\sqrt{25} = 5$。把分量相加得 $3+(-4)=-1$，或停在根号内的 $25$，都漏掉了最后的开方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute the scalar multiple $3\\langle 2, -1 \\rangle$.",
        "zh": "计算数乘 $3\\langle 2, -1 \\rangle$。"
      },
      "choices": [
        "$\\langle 5, 2 \\rangle$",
        "$\\langle 6, 3 \\rangle$",
        "$\\langle 2, -3 \\rangle$",
        "$\\langle 6, -3 \\rangle$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply each component by the scalar: $\\langle 3\\cdot 2,\\, 3\\cdot(-1) \\rangle = \\langle 6, -3 \\rangle$. Dropping the negative sign on the second component gives $\\langle 6, 3 \\rangle$.",
        "zh": "每个分量都乘以标量：$\\langle 3\\cdot 2,\\, 3\\cdot(-1) \\rangle = \\langle 6, -3 \\rangle$。丢掉第二个分量的负号会得到 $\\langle 6, 3 \\rangle$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Add the vectors: $\\langle 1, 2 \\rangle + \\langle 3, -5 \\rangle$.",
        "zh": "计算向量之和：$\\langle 1, 2 \\rangle + \\langle 3, -5 \\rangle$。"
      },
      "choices": [
        "$\\langle 3, -10 \\rangle$",
        "$\\langle 4, 7 \\rangle$",
        "$\\langle -2, 7 \\rangle$",
        "$\\langle 4, -3 \\rangle$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Add component-wise: $\\langle 1+3,\\, 2+(-5) \\rangle = \\langle 4, -3 \\rangle$. Treating $2+(-5)$ as $2+5=7$ ignores the negative sign.",
        "zh": "按分量相加：$\\langle 1+3,\\, 2+(-5) \\rangle = \\langle 4, -3 \\rangle$。把 $2+(-5)$ 当成 $2+5=7$ 就忽略了负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Subtract the vectors: $\\langle 5, 3 \\rangle - \\langle 2, 7 \\rangle$.",
        "zh": "计算向量之差：$\\langle 5, 3 \\rangle - \\langle 2, 7 \\rangle$。"
      },
      "choices": [
        "$\\langle 3, -4 \\rangle$",
        "$\\langle 3, 4 \\rangle$",
        "$\\langle 7, 10 \\rangle$",
        "$\\langle -3, 4 \\rangle$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract component-wise: $\\langle 5-2,\\, 3-7 \\rangle = \\langle 3, -4 \\rangle$. Computing $3-7$ as $|3-7|=4$ (positive) drops the sign that shows the result points downward.",
        "zh": "按分量相减：$\\langle 5-2,\\, 3-7 \\rangle = \\langle 3, -4 \\rangle$。把 $3-7$ 取成绝对值 $4$（正数）会丢掉表示方向向下的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the unit vector in the direction of $\\langle 3, 4 \\rangle$.",
        "zh": "求与 $\\langle 3, 4 \\rangle$ 同方向的单位向量。"
      },
      "choices": [
        "$\\langle 3, 4 \\rangle$",
        "$\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$",
        "$\\langle \\frac{4}{5}, \\frac{3}{5} \\rangle$",
        "$\\langle \\frac{3}{25}, \\frac{4}{25} \\rangle$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Divide by the magnitude $|\\langle 3,4\\rangle| = 5$: $\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$. Dividing by $25$ (the value before the square root) instead of $5$ gives $\\langle \\frac{3}{25}, \\frac{4}{25} \\rangle$, which is not a unit vector.",
        "zh": "除以模 $|\\langle 3,4\\rangle| = 5$：$\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$。若除以 $25$（开方前的数）而不是 $5$，得到 $\\langle \\frac{3}{25}, \\frac{4}{25} \\rangle$，它并不是单位向量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write the vector $\\langle 2, -5 \\rangle$ using $\\mathbf{i}$-$\\mathbf{j}$ notation.",
        "zh": "用 $\\mathbf{i}$-$\\mathbf{j}$ 记法写出向量 $\\langle 2, -5 \\rangle$。"
      },
      "choices": [
        "$2\\mathbf{i} + 5\\mathbf{j}$",
        "$-2\\mathbf{i} + 5\\mathbf{j}$",
        "$5\\mathbf{i} - 2\\mathbf{j}$",
        "$2\\mathbf{i} - 5\\mathbf{j}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The first component multiplies $\\mathbf{i}$ and the second multiplies $\\mathbf{j}$: $2\\mathbf{i} - 5\\mathbf{j}$. Swapping the components gives $5\\mathbf{i} - 2\\mathbf{j}$, a different vector.",
        "zh": "第一个分量乘 $\\mathbf{i}$，第二个分量乘 $\\mathbf{j}$：$2\\mathbf{i} - 5\\mathbf{j}$。把两个分量交换会得到 $5\\mathbf{i} - 2\\mathbf{j}$，那是另一个向量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the direction angle (measured counterclockwise from the positive x-axis) of $\\langle -1, 1 \\rangle$?",
        "zh": "向量 $\\langle -1, 1 \\rangle$ 的方向角（从正 x 轴逆时针量）是多少？"
      },
      "choices": [
        "$-45^\\circ$",
        "$45^\\circ$",
        "$225^\\circ$",
        "$135^\\circ$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The reference angle is $\\tan^{-1}(1/1)=45^\\circ$, but the vector lies in the second quadrant (negative x, positive y), so the direction angle is $180^\\circ - 45^\\circ = 135^\\circ$. Using $45^\\circ$ directly ignores the quadrant.",
        "zh": "参考角为 $\\tan^{-1}(1/1)=45^\\circ$，但向量在第二象限（x 为负、y 为正），所以方向角为 $180^\\circ - 45^\\circ = 135^\\circ$。直接用 $45^\\circ$ 忽略了象限。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute $-2\\langle 3, -4 \\rangle$.",
        "zh": "计算 $-2\\langle 3, -4 \\rangle$。"
      },
      "choices": [
        "$\\langle -6, 8 \\rangle$",
        "$\\langle 6, -8 \\rangle$",
        "$\\langle -6, -8 \\rangle$",
        "$\\langle 1, -6 \\rangle$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply each component by $-2$: $\\langle -2\\cdot 3,\\, -2\\cdot(-4) \\rangle = \\langle -6, 8 \\rangle$. Forgetting that a negative times a negative is positive would give $\\langle -6, -8 \\rangle$.",
        "zh": "每个分量都乘 $-2$：$\\langle -2\\cdot 3,\\, -2\\cdot(-4) \\rangle = \\langle -6, 8 \\rangle$。忘记负负得正就会写成 $\\langle -6, -8 \\rangle$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A vector has magnitude $8$ and direction angle $60^\\circ$. What is its component form?",
        "zh": "一个向量的模为 $8$，方向角为 $60^\\circ$。它的分量形式是什么？"
      },
      "choices": [
        "$\\langle 4\\sqrt{3}, 4 \\rangle$",
        "$\\langle 4, 4\\sqrt{3} \\rangle$",
        "$\\langle 8, 8 \\rangle$",
        "$\\langle 4\\sqrt{3}, 4\\sqrt{3} \\rangle$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use $\\langle |v|\\cos\\theta,\\, |v|\\sin\\theta \\rangle = \\langle 8\\cos 60^\\circ,\\, 8\\sin 60^\\circ \\rangle = \\langle 4,\\, 4\\sqrt{3} \\rangle$. Swapping sine and cosine (putting the $\\cos$ result in the y-slot) gives $\\langle 4\\sqrt{3}, 4 \\rangle$.",
        "zh": "用 $\\langle |v|\\cos\\theta,\\, |v|\\sin\\theta \\rangle = \\langle 8\\cos 60^\\circ,\\, 8\\sin 60^\\circ \\rangle = \\langle 4,\\, 4\\sqrt{3} \\rangle$。把正弦和余弦弄反（把 $\\cos$ 的结果放进 y 分量）会得到 $\\langle 4\\sqrt{3}, 4 \\rangle$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two forces act on an object: $\\langle 3, 0 \\rangle$ and $\\langle 0, 4 \\rangle$ (in newtons). What is the magnitude of the resultant force?",
        "zh": "两个力作用在物体上：$\\langle 3, 0 \\rangle$ 和 $\\langle 0, 4 \\rangle$（单位牛顿）。合力的大小是多少？"
      },
      "choices": [
        "$3$",
        "$4$",
        "$5$",
        "$7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The resultant is $\\langle 3, 4 \\rangle$, with magnitude $\\sqrt{3^2+4^2} = 5$. Simply adding the magnitudes $3+4=7$ is wrong because the forces are perpendicular, not aligned.",
        "zh": "合力为 $\\langle 3, 4 \\rangle$，大小为 $\\sqrt{3^2+4^2} = 5$。直接把大小相加 $3+4=7$ 是错的，因为两个力互相垂直而非同向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a unit vector?",
        "zh": "下列哪一个是单位向量？"
      },
      "choices": [
        "$\\langle 0.5, 0.5 \\rangle$",
        "$\\langle 1, 1 \\rangle$",
        "$\\langle 3, 4 \\rangle$",
        "$\\langle 0.6, 0.8 \\rangle$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A unit vector has magnitude $1$: $\\sqrt{0.6^2+0.8^2}=\\sqrt{0.36+0.64}=\\sqrt{1}=1$. The vector $\\langle 1,1\\rangle$ looks like it should be a unit vector but has magnitude $\\sqrt{2}\\approx 1.41$.",
        "zh": "单位向量的模为 $1$：$\\sqrt{0.6^2+0.8^2}=\\sqrt{0.36+0.64}=\\sqrt{1}=1$。$\\langle 1,1\\rangle$ 看起来像单位向量，但它的模是 $\\sqrt{2}\\approx 1.41$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the magnitude of the vector $\\langle 5, 12 \\rangle$.",
        "zh": "求向量 $\\langle 5, 12 \\rangle$ 的模。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "Magnitude is $\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$. Adding the components ($5+12=17$) instead of using the Pythagorean formula is a common slip.",
        "zh": "模为 $\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$。用分量相加（$5+12=17$）而不是勾股公式是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the direction angle in degrees (counterclockwise from the positive x-axis, $0^\\circ$ to $360^\\circ$) of the vector $\\langle 0, -4 \\rangle$?",
        "zh": "向量 $\\langle 0, -4 \\rangle$ 的方向角是多少度（从正 x 轴逆时针量，$0^\\circ$ 到 $360^\\circ$）？"
      },
      "answer": "270",
      "accept": [
        "270.0",
        "-90",
        "270 degrees",
        "270度"
      ],
      "explanation": {
        "en": "The vector points straight down along the negative y-axis, which is $270^\\circ$ (equivalently $-90^\\circ$). Reading it as $90^\\circ$ would point straight up instead.",
        "zh": "该向量沿负 y 轴竖直向下，方向角为 $270^\\circ$（等价于 $-90^\\circ$）。若读成 $90^\\circ$ 则是竖直向上。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the x-component of $4\\langle 1.5, -2 \\rangle$?",
        "zh": "$4\\langle 1.5, -2 \\rangle$ 的 x 分量是多少？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Multiply the x-component by the scalar: $4 \\times 1.5 = 6$. (The full vector is $\\langle 6, -8 \\rangle$.) Forgetting to distribute the scalar to the x-component leaves the wrong value.",
        "zh": "把 x 分量乘以标量：$4 \\times 1.5 = 6$。（完整向量为 $\\langle 6, -8 \\rangle$。）忘记把标量分配到 x 分量会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the magnitude of the resultant of $\\langle 2, 3 \\rangle + \\langle -2, 1 \\rangle$.",
        "zh": "求 $\\langle 2, 3 \\rangle + \\langle -2, 1 \\rangle$ 的合向量的模。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "First add: $\\langle 2+(-2),\\, 3+1 \\rangle = \\langle 0, 4 \\rangle$, whose magnitude is $\\sqrt{0^2+4^2}=4$. Finding each magnitude first and adding them would not give the resultant's magnitude.",
        "zh": "先相加：$\\langle 2+(-2),\\, 3+1 \\rangle = \\langle 0, 4 \\rangle$，其模为 $\\sqrt{0^2+4^2}=4$。先分别求模再相加不会得到合向量的模。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The unit vector in the direction of $\\langle 6, 8 \\rangle$ is $\\langle a, b \\rangle$. What is $a$ (the x-component) as a decimal?",
        "zh": "与 $\\langle 6, 8 \\rangle$ 同方向的单位向量为 $\\langle a, b \\rangle$。$a$（x 分量）用小数表示是多少？"
      },
      "answer": "0.6",
      "accept": [
        "0.60",
        ".6",
        "3/5",
        "0.6000"
      ],
      "explanation": {
        "en": "The magnitude is $\\sqrt{6^2+8^2}=10$, so $a = 6/10 = 0.6$. Dividing by a wrong magnitude such as $14$ (from adding $6+8$) gives an incorrect component.",
        "zh": "模为 $\\sqrt{6^2+8^2}=10$，所以 $a = 6/10 = 0.6$。若除以错误的模，例如 $14$（由 $6+8$ 得来），就会得到错误的分量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the direction angle in degrees (counterclockwise from the positive x-axis, $0^\\circ$ to $360^\\circ$) of $\\langle -3, 3 \\rangle$?",
        "zh": "向量 $\\langle -3, 3 \\rangle$ 的方向角是多少度（从正 x 轴逆时针量，$0^\\circ$ 到 $360^\\circ$）？"
      },
      "answer": "135",
      "accept": [
        "135.0",
        "135 degrees",
        "135度"
      ],
      "explanation": {
        "en": "The reference angle is $\\tan^{-1}(3/3)=45^\\circ$; the vector is in the second quadrant, so the direction angle is $180^\\circ - 45^\\circ = 135^\\circ$. Using $45^\\circ$ ignores that the x-component is negative.",
        "zh": "参考角为 $\\tan^{-1}(3/3)=45^\\circ$；向量在第二象限，所以方向角为 $180^\\circ - 45^\\circ = 135^\\circ$。用 $45^\\circ$ 忽略了 x 分量为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the vector $7\\mathbf{i} - 2\\mathbf{j}$, what is the coefficient of $\\mathbf{j}$?",
        "zh": "在向量 $7\\mathbf{i} - 2\\mathbf{j}$ 中，$\\mathbf{j}$ 的系数是多少？"
      },
      "answer": "-2",
      "accept": [
        "-2.0",
        "−2"
      ],
      "explanation": {
        "en": "The coefficient of $\\mathbf{j}$ is the y-component including its sign: $-2$. Dropping the negative sign and answering $2$ loses the downward direction.",
        "zh": "$\\mathbf{j}$ 的系数就是带符号的 y 分量：$-2$。丢掉负号答成 $2$ 会失去向下的方向。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the magnitude of the vector $\\langle -9, 12 \\rangle$.",
        "zh": "求向量 $\\langle -9, 12 \\rangle$ 的模。"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "+15"
      ],
      "explanation": {
        "en": "Magnitude is $\\sqrt{(-9)^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$. Note $(-9)^2=81$ is positive; treating it as negative would make the value under the root wrong.",
        "zh": "模为 $\\sqrt{(-9)^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$。注意 $(-9)^2=81$ 为正；若当作负数会使根号内的值出错。"
      }
    }
  ],
  "vectors/dot-product-and-applications": [
    {
      "type": "mc",
      "question": {
        "en": "Compute the dot product $\\langle 2, 3 \\rangle \\cdot \\langle 4, -1 \\rangle$.",
        "zh": "计算点积 $\\langle 2, 3 \\rangle \\cdot \\langle 4, -1 \\rangle$。"
      },
      "choices": [
        "$11$",
        "$5$",
        "$-5$",
        "$8$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply matching components and add: $2\\cdot 4 + 3\\cdot(-1) = 8 - 3 = 5$. Ignoring the negative sign on the second product gives $8+3=11$.",
        "zh": "对应分量相乘再相加：$2\\cdot 4 + 3\\cdot(-1) = 8 - 3 = 5$。忽略第二个乘积的负号会得到 $8+3=11$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two nonzero vectors are orthogonal (perpendicular) exactly when which condition holds?",
        "zh": "两个非零向量正交（垂直）的充要条件是什么？"
      },
      "choices": [
        "their magnitudes are equal 两模相等",
        "their dot product is $0$ 点积为 $0$",
        "their sum is the zero vector 两者之和为零向量",
        "their components are equal 分量对应相等"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $u\\cdot v = |u||v|\\cos\\theta$, perpendicular vectors have $\\theta=90^\\circ$ and $\\cos 90^\\circ = 0$, so the dot product is $0$. Equal magnitudes only compare lengths, not direction, so that condition does not imply perpendicularity.",
        "zh": "由 $u\\cdot v = |u||v|\\cos\\theta$，垂直时 $\\theta=90^\\circ$，$\\cos 90^\\circ = 0$，所以点积为 $0$。模相等只比较长度而与方向无关，不能推出垂直。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the angle between $\\langle -3, 4 \\rangle$ and $\\langle 4, 3 \\rangle$?",
        "zh": "向量 $\\langle -3, 4 \\rangle$ 与 $\\langle 4, 3 \\rangle$ 之间的夹角是多少？"
      },
      "choices": [
        "$0^\\circ$",
        "$45^\\circ$",
        "$90^\\circ$",
        "$180^\\circ$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Their dot product is $(-3)(4)+(4)(3) = -12+12 = 0$, so the vectors are perpendicular: $90^\\circ$. A dot product of $0$ never means the vectors point the same way ($0^\\circ$).",
        "zh": "它们的点积为 $(-3)(4)+(4)(3) = -12+12 = 0$，所以两向量垂直：$90^\\circ$。点积为 $0$ 绝不表示两向量同向（$0^\\circ$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the angle between $\\langle 1, 0 \\rangle$ and $\\langle 1, 1 \\rangle$?",
        "zh": "向量 $\\langle 1, 0 \\rangle$ 与 $\\langle 1, 1 \\rangle$ 之间的夹角是多少？"
      },
      "choices": [
        "$60^\\circ$",
        "$90^\\circ$",
        "$30^\\circ$",
        "$45^\\circ$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\cos\\theta = \\frac{u\\cdot v}{|u||v|} = \\frac{1}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}}$, so $\\theta = 45^\\circ$. Forgetting to divide by the magnitudes would give a meaningless cosine value.",
        "zh": "$\\cos\\theta = \\frac{u\\cdot v}{|u||v|} = \\frac{1}{(1)(\\sqrt{2})} = \\frac{1}{\\sqrt{2}}$，所以 $\\theta = 45^\\circ$。忘记除以两向量的模会得到无意义的余弦值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula correctly expresses the dot product of vectors $u$ and $v$ with angle $\\theta$ between them?",
        "zh": "下列哪个公式正确表示向量 $u$ 与 $v$（夹角为 $\\theta$）的点积？"
      },
      "choices": [
        "$|u||v|\\cos\\theta$",
        "$|u| + |v|\\cos\\theta$",
        "$|u||v|\\sin\\theta$",
        "$\\frac{|u|}{|v|}\\cos\\theta$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The dot product is $u\\cdot v = |u||v|\\cos\\theta$. Using $\\sin\\theta$ instead describes the magnitude of the cross product, not the dot product.",
        "zh": "点积为 $u\\cdot v = |u||v|\\cos\\theta$。若用 $\\sin\\theta$ 则描述的是叉积的大小，而不是点积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A constant force $\\langle 5, 2 \\rangle$ (newtons) moves an object along displacement $\\langle 3, 4 \\rangle$ (meters). How much work is done (in joules)?",
        "zh": "恒力 $\\langle 5, 2 \\rangle$（牛顿）使物体沿位移 $\\langle 3, 4 \\rangle$（米）移动。做的功是多少（焦耳）？"
      },
      "choices": [
        "$21$",
        "$23$",
        "$7$",
        "$14$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Work is the dot product $W = F\\cdot d = 5\\cdot 3 + 2\\cdot 4 = 15 + 8 = 23$ J. Adding only the first products or the components separately misses part of the sum.",
        "zh": "功是点积 $W = F\\cdot d = 5\\cdot 3 + 2\\cdot 4 = 15 + 8 = 23$ 焦。只算第一项乘积或把分量单独相加会漏掉一部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute the dot product $\\langle -2, 5 \\rangle \\cdot \\langle 3, 1 \\rangle$.",
        "zh": "计算点积 $\\langle -2, 5 \\rangle \\cdot \\langle 3, 1 \\rangle$。"
      },
      "choices": [
        "$11$",
        "$16$",
        "$-11$",
        "$-1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(-2)(3) + (5)(1) = -6 + 5 = -1$. Treating the first product as positive $6$ would give $6+5=11$.",
        "zh": "$(-2)(3) + (5)(1) = -6 + 5 = -1$。把第一个乘积当成正的 $6$ 会得到 $6+5=11$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression gives the scalar projection (component) of vector $u$ onto vector $v$?",
        "zh": "下列哪个表达式给出向量 $u$ 在向量 $v$ 上的标量投影（分量）？"
      },
      "choices": [
        "$\\frac{|v|}{u\\cdot v}$",
        "$\\frac{u\\cdot v}{|u|}$",
        "$u\\cdot v$",
        "$\\frac{u\\cdot v}{|v|}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The scalar projection of $u$ onto $v$ is $\\frac{u\\cdot v}{|v|}$ — you divide by the magnitude of the vector you are projecting onto. Dividing by $|u|$ instead projects the wrong way.",
        "zh": "$u$ 在 $v$ 上的标量投影为 $\\frac{u\\cdot v}{|v|}$ —— 除以被投影到的那个向量的模。若改成除以 $|u|$ 则方向弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the dot product of two nonzero vectors is positive ($u\\cdot v > 0$), the angle between them is:",
        "zh": "若两个非零向量的点积为正（$u\\cdot v > 0$），则它们之间的夹角为："
      },
      "choices": [
        "acute 锐角",
        "right 直角",
        "obtuse 钝角",
        "straight 平角"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $u\\cdot v = |u||v|\\cos\\theta$ and the magnitudes are positive, a positive dot product forces $\\cos\\theta > 0$, i.e. an acute angle ($0^\\circ \\le \\theta < 90^\\circ$). A negative dot product would instead signal an obtuse angle.",
        "zh": "由 $u\\cdot v = |u||v|\\cos\\theta$ 且模为正，点积为正就要求 $\\cos\\theta > 0$，即锐角（$0^\\circ \\le \\theta < 90^\\circ$）。点积为负才对应钝角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vector projection of $\\langle 4, 0 \\rangle$ onto $\\langle 0, 1 \\rangle$?",
        "zh": "$\\langle 4, 0 \\rangle$ 在 $\\langle 0, 1 \\rangle$ 上的向量投影是什么？"
      },
      "choices": [
        "$\\langle 4, 0 \\rangle$",
        "$\\langle 0, 0 \\rangle$",
        "$\\langle 0, 4 \\rangle$",
        "$\\langle 0, 1 \\rangle$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The two vectors are perpendicular ($\\langle 4,0\\rangle\\cdot\\langle 0,1\\rangle = 0$), so the projection is the zero vector $\\langle 0, 0 \\rangle$. Assuming the projection equals the original vector ignores that none of it lies along the y-axis.",
        "zh": "两向量垂直（$\\langle 4,0\\rangle\\cdot\\langle 0,1\\rangle = 0$），所以投影是零向量 $\\langle 0, 0 \\rangle$。若以为投影等于原向量，就忽略了它在 y 轴方向上没有任何分量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute $\\langle 3, 4 \\rangle \\cdot \\langle 3, 4 \\rangle$ (a vector dotted with itself).",
        "zh": "计算 $\\langle 3, 4 \\rangle \\cdot \\langle 3, 4 \\rangle$（向量与自身的点积）。"
      },
      "choices": [
        "$7$",
        "$5$",
        "$25$",
        "$50$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$3\\cdot 3 + 4\\cdot 4 = 9 + 16 = 25$, which equals $|v|^2$. Answering $5$ gives the magnitude itself, but a vector dotted with itself equals the magnitude squared.",
        "zh": "$3\\cdot 3 + 4\\cdot 4 = 9 + 16 = 25$，即 $|v|^2$。答 $5$ 给出的是模本身，但向量与自身的点积等于模的平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the angle between $\\langle 1, 1 \\rangle$ and $\\langle -1, -1 \\rangle$?",
        "zh": "向量 $\\langle 1, 1 \\rangle$ 与 $\\langle -1, -1 \\rangle$ 之间的夹角是多少？"
      },
      "choices": [
        "$0^\\circ$",
        "$90^\\circ$",
        "$45^\\circ$",
        "$180^\\circ$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\cos\\theta = \\frac{(1)(-1)+(1)(-1)}{(\\sqrt{2})(\\sqrt{2})} = \\frac{-2}{2} = -1$, so $\\theta = 180^\\circ$ (the vectors point in opposite directions). A cosine of $-1$ can never correspond to $0^\\circ$.",
        "zh": "$\\cos\\theta = \\frac{(1)(-1)+(1)(-1)}{(\\sqrt{2})(\\sqrt{2})} = \\frac{-2}{2} = -1$，所以 $\\theta = 180^\\circ$（两向量方向相反）。余弦为 $-1$ 绝不可能对应 $0^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute the dot product $\\langle 3, 5 \\rangle \\cdot \\langle 2, 4 \\rangle$.",
        "zh": "计算点积 $\\langle 3, 5 \\rangle \\cdot \\langle 2, 4 \\rangle$。"
      },
      "answer": "26",
      "accept": [
        "26.0",
        "+26"
      ],
      "explanation": {
        "en": "$3\\cdot 2 + 5\\cdot 4 = 6 + 20 = 26$. Multiplying across (mismatched components) such as $3\\cdot 4 + 5\\cdot 2$ would give the wrong total.",
        "zh": "$3\\cdot 2 + 5\\cdot 4 = 6 + 20 = 26$。若交叉相乘（分量错配），例如 $3\\cdot 4 + 5\\cdot 2$，会得到错误的和。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute the dot product $\\langle 6, -2 \\rangle \\cdot \\langle 1, 3 \\rangle$.",
        "zh": "计算点积 $\\langle 6, -2 \\rangle \\cdot \\langle 1, 3 \\rangle$。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "-0",
        "+0"
      ],
      "explanation": {
        "en": "$6\\cdot 1 + (-2)\\cdot 3 = 6 - 6 = 0$. A dot product of $0$ tells you these two vectors are orthogonal. Dropping the negative sign would incorrectly give $12$.",
        "zh": "$6\\cdot 1 + (-2)\\cdot 3 = 6 - 6 = 0$。点积为 $0$ 说明这两个向量正交。丢掉负号会错误地得到 $12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A force $\\langle 10, 0 \\rangle$ (newtons) moves an object along displacement $\\langle 4, 3 \\rangle$ (meters). How much work is done, in joules?",
        "zh": "力 $\\langle 10, 0 \\rangle$（牛顿）使物体沿位移 $\\langle 4, 3 \\rangle$（米）移动。做的功是多少焦耳？"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "+40",
        "40 J",
        "40焦"
      ],
      "explanation": {
        "en": "$W = F\\cdot d = 10\\cdot 4 + 0\\cdot 3 = 40$ J. Only the component of displacement along the force contributes; the perpendicular part does no work.",
        "zh": "$W = F\\cdot d = 10\\cdot 4 + 0\\cdot 3 = 40$ 焦。只有沿力方向的位移分量做功；垂直分量不做功。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute $\\langle 5, 12 \\rangle \\cdot \\langle 5, 12 \\rangle$.",
        "zh": "计算 $\\langle 5, 12 \\rangle \\cdot \\langle 5, 12 \\rangle$。"
      },
      "answer": "169",
      "accept": [
        "169.0",
        "+169"
      ],
      "explanation": {
        "en": "$5\\cdot 5 + 12\\cdot 12 = 25 + 144 = 169$, which is $|v|^2$. Stopping at the magnitude $\\sqrt{169}=13$ answers a different question.",
        "zh": "$5\\cdot 5 + 12\\cdot 12 = 25 + 144 = 169$，即 $|v|^2$。停在模 $\\sqrt{169}=13$ 回答的是另一个问题。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the angle in degrees between $\\langle 1, 0 \\rangle$ and $\\langle 0, 1 \\rangle$?",
        "zh": "向量 $\\langle 1, 0 \\rangle$ 与 $\\langle 0, 1 \\rangle$ 之间的夹角是多少度？"
      },
      "answer": "90",
      "accept": [
        "90.0",
        "90 degrees",
        "90度",
        "+90"
      ],
      "explanation": {
        "en": "Their dot product is $1\\cdot 0 + 0\\cdot 1 = 0$, so the vectors are perpendicular: $90^\\circ$. These are the standard basis vectors along the two axes.",
        "zh": "它们的点积为 $1\\cdot 0 + 0\\cdot 1 = 0$，所以两向量垂直：$90^\\circ$。它们正是沿两条坐标轴的标准基向量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find $\\cos\\theta$ for the angle between $\\langle 3, 4 \\rangle$ and $\\langle 4, 3 \\rangle$. Give a decimal.",
        "zh": "求向量 $\\langle 3, 4 \\rangle$ 与 $\\langle 4, 3 \\rangle$ 夹角的 $\\cos\\theta$。用小数表示。"
      },
      "answer": "0.96",
      "accept": [
        "24/25",
        ".96",
        "0.960"
      ],
      "explanation": {
        "en": "$\\cos\\theta = \\frac{u\\cdot v}{|u||v|} = \\frac{3\\cdot 4 + 4\\cdot 3}{5\\cdot 5} = \\frac{24}{25} = 0.96$. Forgetting to divide by the product of magnitudes leaves just the dot product $24$.",
        "zh": "$\\cos\\theta = \\frac{u\\cdot v}{|u||v|} = \\frac{3\\cdot 4 + 4\\cdot 3}{5\\cdot 5} = \\frac{24}{25} = 0.96$。忘记除以两模之积会只剩下点积 $24$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the scalar projection of $\\langle 3, 4 \\rangle$ onto $\\langle 1, 0 \\rangle$.",
        "zh": "求 $\\langle 3, 4 \\rangle$ 在 $\\langle 1, 0 \\rangle$ 上的标量投影。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Scalar projection is $\\frac{u\\cdot v}{|v|} = \\frac{3\\cdot 1 + 4\\cdot 0}{1} = 3$. Since $\\langle 1,0\\rangle$ points along the x-axis, the projection is just the x-component. Using the full magnitude $5$ answers a different quantity.",
        "zh": "标量投影为 $\\frac{u\\cdot v}{|v|} = \\frac{3\\cdot 1 + 4\\cdot 0}{1} = 3$。因为 $\\langle 1,0\\rangle$ 沿 x 轴，投影就是 x 分量。用整个模 $5$ 回答的是别的量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute the dot product $\\langle -4, 7 \\rangle \\cdot \\langle 2, -1 \\rangle$.",
        "zh": "计算点积 $\\langle -4, 7 \\rangle \\cdot \\langle 2, -1 \\rangle$。"
      },
      "answer": "-15",
      "accept": [
        "-15.0",
        "−15"
      ],
      "explanation": {
        "en": "$(-4)(2) + (7)(-1) = -8 - 7 = -15$. The negative result signals an obtuse angle between the vectors. Mishandling either sign would flip the total.",
        "zh": "$(-4)(2) + (7)(-1) = -8 - 7 = -15$。负结果说明两向量夹角为钝角。处理错任一符号都会使结果反号。"
      }
    }
  ],
  "systems-matrices/systems-and-partial-fractions": [
    {
      "type": "mc",
      "question": {
        "en": "Find all solutions of the system $y = x^2$ and $y = 2x$.",
        "zh": "求方程组 $y = x^2$ 与 $y = 2x$ 的所有解。"
      },
      "choices": [
        "$(0,0)$ and $(2,4)$",
        "$(2,4)$ only",
        "$(0,0)$ only",
        "$(1,2)$ and $(2,4)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Substitute to get $x^2 = 2x$, so $x^2 - 2x = 0$ and $x(x-2) = 0$, giving $x = 0$ and $x = 2$; the points are $(0,0)$ and $(2,4)$. Dividing both sides by $x$ loses the $x = 0$ solution and reports only one intersection.",
        "zh": "代入得 $x^2 = 2x$，即 $x^2 - 2x = 0$，$x(x-2) = 0$，所以 $x = 0$ 和 $x = 2$；交点为 $(0,0)$ 和 $(2,4)$。两边同除以 $x$ 会丢掉 $x = 0$ 这个解，只得到一个交点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many real solutions does the system $x^2 + y^2 = 1$ and $y = 3$ have?",
        "zh": "方程组 $x^2 + y^2 = 1$ 与 $y = 3$ 有多少个实数解？"
      },
      "choices": [
        "1",
        "0",
        "2",
        "4"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substituting $y = 3$ gives $x^2 + 9 = 1$, so $x^2 = -8$, which has no real solution: the line lies entirely outside the unit circle. Assuming a line must always cross a circle leads to guessing two solutions.",
        "zh": "代入 $y = 3$ 得 $x^2 + 9 = 1$，即 $x^2 = -8$，无实数解：这条直线完全在单位圆之外。误以为直线一定与圆相交，就会错误地猜有两个解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the system $x^2 + y^2 = 25$ and $x = 3$.",
        "zh": "求方程组 $x^2 + y^2 = 25$ 与 $x = 3$ 的解。"
      },
      "choices": [
        "$(3,4)$ only",
        "$(3,5)$ only",
        "$(3,4)$ and $(3,-4)$",
        "no real solution"
      ],
      "answer": 2,
      "explanation": {
        "en": "With $x = 3$, $9 + y^2 = 25$ gives $y^2 = 16$, so $y = 4$ or $y = -4$; both $(3,4)$ and $(3,-4)$ satisfy the system. Taking only the positive square root forgets the negative branch of the circle.",
        "zh": "当 $x = 3$ 时，$9 + y^2 = 25$ 得 $y^2 = 16$，所以 $y = 4$ 或 $y = -4$；$(3,4)$ 和 $(3,-4)$ 都满足方程组。只取正平方根会漏掉圆的下半部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The system $y = x^2 - 4$ and $y = 2x - 1$ has two solutions. What are the $x$-values?",
        "zh": "方程组 $y = x^2 - 4$ 与 $y = 2x - 1$ 有两个解。求这两个 $x$ 值。"
      },
      "choices": [
        "$x = 1,\\ x = -3$",
        "$x = 2,\\ x = -2$",
        "$x = 0,\\ x = 4$",
        "$x = 3,\\ x = -1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Set $x^2 - 4 = 2x - 1$, so $x^2 - 2x - 3 = 0$ and $(x-3)(x+1) = 0$, giving $x = 3$ and $x = -1$. Moving terms to the wrong side (writing $x^2 + 2x + 3 = 0$) or mis-factoring produces the other pairs.",
        "zh": "令 $x^2 - 4 = 2x - 1$，得 $x^2 - 2x - 3 = 0$，$(x-3)(x+1) = 0$，所以 $x = 3$，$x = -1$。把项移错边（写成 $x^2 + 2x + 3 = 0$）或分解错误会得到其他答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the decomposition $\\frac{1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$, what is $A$?",
        "zh": "在分解 $\\frac{1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$ 中，$A$ 是多少？"
      },
      "choices": [
        "$\\frac{1}{3}$",
        "$-\\frac{1}{3}$",
        "$1$",
        "$3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Clearing denominators gives $1 = A(x+2) + B(x-1)$. Letting $x = 1$ gives $1 = 3A$, so $A = \\frac{1}{3}$. Substituting $x = -2$ instead solves for $B = -\\frac{1}{3}$, which is a different coefficient.",
        "zh": "去分母得 $1 = A(x+2) + B(x-1)$。令 $x = 1$ 得 $1 = 3A$，所以 $A = \\frac{1}{3}$。若代入 $x = -2$，求出的是 $B = -\\frac{1}{3}$，那是另一个系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct form of the partial fraction decomposition of $\\frac{5x}{(x-2)(x^2+1)}$?",
        "zh": "$\\frac{5x}{(x-2)(x^2+1)}$ 的部分分式分解的正确形式是哪个？"
      },
      "choices": [
        "$\\frac{A}{x-2} + \\frac{B}{x^2+1}$",
        "$\\frac{A}{x-2} + \\frac{Bx+C}{x^2+1}$",
        "$\\frac{A}{x-2} + \\frac{B}{x} + \\frac{C}{x^2+1}$",
        "$\\frac{Ax+B}{x-2} + \\frac{C}{x^2+1}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "An irreducible quadratic factor like $x^2+1$ requires a linear numerator $Bx + C$, while the linear factor $x-2$ needs only a constant $A$. Putting a constant over the quadratic gives too few unknowns to match a general numerator.",
        "zh": "像 $x^2+1$ 这样不可约的二次因式需要线性分子 $Bx + C$，而一次因式 $x-2$ 只需常数 $A$。在二次因式上只放常数，未知数太少，无法匹配一般的分子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct decomposition form for $\\frac{2x}{(x-3)^2}$?",
        "zh": "$\\frac{2x}{(x-3)^2}$ 的正确分解形式是哪个？"
      },
      "choices": [
        "$\\frac{Ax+B}{(x-3)^2}$",
        "$\\frac{A}{(x-3)^2}$",
        "$\\frac{A}{x-3} + \\frac{B}{(x-3)^2}$",
        "$\\frac{A}{x-3} + \\frac{Bx+C}{(x-3)^2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A repeated linear factor $(x-3)^2$ needs one term for each power: $\\frac{A}{x-3}$ and $\\frac{B}{(x-3)^2}$, both with constant numerators. Using only the highest power omits a term, and linear numerators over a linear-power factor are not needed.",
        "zh": "重复的一次因式 $(x-3)^2$ 需要每个幂次各一项：$\\frac{A}{x-3}$ 和 $\\frac{B}{(x-3)^2}$，分子都是常数。只用最高次幂会漏掉一项，而在一次幂因式上用线性分子是不必要的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve for $z$ in the system $x + y + z = 6$, $x - y + z = 2$, $x + y - z = 0$.",
        "zh": "解方程组 $x + y + z = 6$，$x - y + z = 2$，$x + y - z = 0$，求 $z$。"
      },
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ],
      "answer": 3,
      "explanation": {
        "en": "The first and third equations share $x + y$; subtracting gives $2z = 6$, so $z = 3$. (Then $y = 2$, $x = 1$.) Adding those two equations instead of subtracting cancels the wrong variable and misses $z$.",
        "zh": "第一个和第三个方程都含 $x + y$；相减得 $2z = 6$，所以 $z = 3$。（再得 $y = 2$，$x = 1$。）若把这两个方程相加而非相减，会消去错误的变量，求不出 $z$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "While solving a three-variable system by elimination, you arrive at the statement $0 = 5$. What does this mean?",
        "zh": "用消元法解三元方程组时，你得到 $0 = 5$。这说明什么？"
      },
      "choices": [
        "no solution",
        "infinitely many solutions",
        "exactly one solution",
        "exactly three solutions"
      ],
      "answer": 0,
      "explanation": {
        "en": "A false numeric statement such as $0 = 5$ signals an inconsistent system with no solution. A row that reduces to $0 = 0$ (a true statement) is what indicates infinitely many solutions, so the two outcomes are easy to swap.",
        "zh": "像 $0 = 5$ 这样的假等式表示方程组矛盾，无解。化简为 $0 = 0$（真等式）的那种情形才表示有无穷多解，所以这两种结果容易混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the nonlinear system $xy = 6$ and $x + y = 5$.",
        "zh": "解非线性方程组 $xy = 6$ 与 $x + y = 5$。"
      },
      "choices": [
        "$(1,6)$ and $(6,1)$",
        "$(2,3)$ and $(3,2)$",
        "$(2,4)$ and $(4,2)$",
        "$(1,5)$ and $(5,1)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substituting $y = 5 - x$ gives $x(5-x) = 6$, so $x^2 - 5x + 6 = 0$ and $(x-2)(x-3) = 0$; the solutions are $(2,3)$ and $(3,2)$. The pairs that sum to 5 but multiply to something other than 6 fail the product equation.",
        "zh": "代入 $y = 5 - x$ 得 $x(5-x) = 6$，即 $x^2 - 5x + 6 = 0$，$(x-2)(x-3) = 0$；解为 $(2,3)$ 和 $(3,2)$。那些和为 5 但乘积不等于 6 的数对不满足乘积方程。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\frac{7x-1}{(x-1)(x+3)} = \\frac{A}{x-1} + \\frac{B}{x+3}$, what is $A$?",
        "zh": "在 $\\frac{7x-1}{(x-1)(x+3)} = \\frac{A}{x-1} + \\frac{B}{x+3}$ 中，$A$ 是多少？"
      },
      "choices": [
        "$-\\frac{3}{2}$",
        "$\\frac{11}{2}$",
        "$\\frac{3}{2}$",
        "$6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "From $7x - 1 = A(x+3) + B(x-1)$, letting $x = 1$ gives $6 = 4A$, so $A = \\frac{3}{2}$. Substituting $x = -3$ instead yields $B = \\frac{11}{2}$, the coefficient for the other fraction.",
        "zh": "由 $7x - 1 = A(x+3) + B(x-1)$，令 $x = 1$ 得 $6 = 4A$，所以 $A = \\frac{3}{2}$。若代入 $x = -3$，得到的是 $B = \\frac{11}{2}$，即另一个分式的系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Before decomposing $\\frac{x^3 + 1}{x^2 - 1}$ into partial fractions, what must you do first?",
        "zh": "在把 $\\frac{x^3 + 1}{x^2 - 1}$ 分解为部分分式之前，必须先做什么？"
      },
      "choices": [
        "factor the numerator",
        "multiply by the conjugate",
        "nothing, it is already proper",
        "perform polynomial long division first"
      ],
      "answer": 3,
      "explanation": {
        "en": "The numerator degree (3) is at least the denominator degree (2), so the fraction is improper; you must divide first to get a polynomial plus a proper remainder before decomposing. Attempting partial fractions on an improper fraction gives an inconsistent system.",
        "zh": "分子的次数（3）不小于分母的次数（2），所以这是假分式；必须先做多项式除法，得到一个多项式加上一个真分式余项，再进行分解。直接对假分式做部分分式会导致方程组矛盾。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The system $y = x^2$ and $y = x + 6$ has two solutions. What is the larger $x$-value?",
        "zh": "方程组 $y = x^2$ 与 $y = x + 6$ 有两个解。求较大的 $x$ 值。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "x=3"
      ],
      "explanation": {
        "en": "Set $x^2 = x + 6$, so $x^2 - x - 6 = 0$ and $(x-3)(x+2) = 0$, giving $x = 3$ and $x = -2$; the larger is $x = 3$. Reporting $-2$ picks the smaller root by mistake.",
        "zh": "令 $x^2 = x + 6$，得 $x^2 - x - 6 = 0$，$(x-3)(x+2) = 0$，所以 $x = 3$，$x = -2$；较大的是 $x = 3$。回答 $-2$ 是误取了较小的根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The system $x^2 + y^2 = 8$ and $y = x$ has two solutions. What is the positive $x$-value?",
        "zh": "方程组 $x^2 + y^2 = 8$ 与 $y = x$ 有两个解。求正的 $x$ 值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "x=2"
      ],
      "explanation": {
        "en": "Substituting $y = x$ gives $2x^2 = 8$, so $x^2 = 4$ and $x = \\pm 2$; the positive value is $2$. Forgetting to double the $x^2$ term (using $x^2 = 8$) gives an incorrect $x = 2\\sqrt{2}$.",
        "zh": "代入 $y = x$ 得 $2x^2 = 8$，即 $x^2 = 4$，$x = \\pm 2$；正值为 $2$。忘记 $x^2$ 项要翻倍（误用 $x^2 = 8$）会得到错误的 $x = 2\\sqrt{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$ in the triangular system $x + y + z = 6$, $2y + z = 5$, $3z = 9$.",
        "zh": "在三角形方程组 $x + y + z = 6$，$2y + z = 5$，$3z = 9$ 中求 $x$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "x=2"
      ],
      "explanation": {
        "en": "Back-substitution: $3z = 9$ gives $z = 3$; then $2y + 3 = 5$ gives $y = 1$; then $x + 1 + 3 = 6$ gives $x = 2$. Skipping back-substitution order and solving the first equation prematurely gives a wrong value.",
        "zh": "回代：$3z = 9$ 得 $z = 3$；再由 $2y + 3 = 5$ 得 $y = 1$；再由 $x + 1 + 3 = 6$ 得 $x = 2$。不按回代顺序、过早解第一个方程会得到错误的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$, find $A$.",
        "zh": "在 $\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$ 中，求 $A$。"
      },
      "answer": "1/2",
      "accept": [
        "0.5",
        ".5",
        "1/2",
        "A=1/2"
      ],
      "explanation": {
        "en": "From $1 = A(x+1) + B(x-1)$, letting $x = 1$ gives $1 = 2A$, so $A = \\frac{1}{2}$. Substituting $x = -1$ instead solves for $B = -\\frac{1}{2}$.",
        "zh": "由 $1 = A(x+1) + B(x-1)$，令 $x = 1$ 得 $1 = 2A$，所以 $A = \\frac{1}{2}$。若代入 $x = -1$，求出的是 $B = -\\frac{1}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{x+7}{(x+3)(x-1)} = \\frac{A}{x+3} + \\frac{B}{x-1}$, find $A$.",
        "zh": "在 $\\frac{x+7}{(x+3)(x-1)} = \\frac{A}{x+3} + \\frac{B}{x-1}$ 中，求 $A$。"
      },
      "answer": "-1",
      "accept": [
        "-1.0",
        "A=-1",
        "−1"
      ],
      "explanation": {
        "en": "From $x + 7 = A(x-1) + B(x+3)$, letting $x = -3$ gives $4 = -4A$, so $A = -1$. Letting $x = 1$ instead gives $8 = 4B$, so $B = 2$, a different coefficient.",
        "zh": "由 $x + 7 = A(x-1) + B(x+3)$，令 $x = -3$ 得 $4 = -4A$，所以 $A = -1$。若令 $x = 1$，得 $8 = 4B$，所以 $B = 2$，那是另一个系数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The parabola $y = x^2$ and the line $y = 4x - 3$ intersect at two points. What is the sum of the two $x$-values?",
        "zh": "抛物线 $y = x^2$ 与直线 $y = 4x - 3$ 相交于两点。求这两个 $x$ 值之和。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Set $x^2 = 4x - 3$, so $x^2 - 4x + 3 = 0$; by Vieta the sum of the roots is $4$ (and the roots are $1$ and $3$). Confusing the sum of roots with the product gives $3$ instead.",
        "zh": "令 $x^2 = 4x - 3$，得 $x^2 - 4x + 3 = 0$；由韦达定理，根之和为 $4$（两根为 $1$ 和 $3$）。把根之和与根之积混淆会得到 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for $x$ in the system $x + y + z = 6$, $x + 2y + 3z = 14$, $x + 4y + 9z = 36$.",
        "zh": "解方程组 $x + y + z = 6$，$x + 2y + 3z = 14$，$x + 4y + 9z = 36$，求 $x$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1",
        "x=1"
      ],
      "explanation": {
        "en": "Subtracting equation 1 from 2 gives $y + 2z = 8$; subtracting 2 from 3 gives $2y + 6z = 22$, i.e. $y + 3z = 11$. Then $z = 3$, $y = 2$, and $x = 6 - 2 - 3 = 1$. An arithmetic slip in the subtraction step throws off every later variable.",
        "zh": "第二式减第一式得 $y + 2z = 8$；第三式减第二式得 $2y + 6z = 22$，即 $y + 3z = 11$。于是 $z = 3$，$y = 2$，$x = 6 - 2 - 3 = 1$。相减一步出算术错误会影响后面所有变量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{5}{x(x-5)} = \\frac{A}{x} + \\frac{B}{x-5}$, find $B$.",
        "zh": "在 $\\frac{5}{x(x-5)} = \\frac{A}{x} + \\frac{B}{x-5}$ 中，求 $B$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1",
        "B=1"
      ],
      "explanation": {
        "en": "From $5 = A(x-5) + Bx$, letting $x = 5$ gives $5 = 5B$, so $B = 1$. Letting $x = 0$ instead gives $5 = -5A$, so $A = -1$, the other coefficient.",
        "zh": "由 $5 = A(x-5) + Bx$，令 $x = 5$ 得 $5 = 5B$，所以 $B = 1$。若令 $x = 0$，得 $5 = -5A$，所以 $A = -1$，那是另一个系数。"
      }
    }
  ],
  "systems-matrices/matrices-operations-inverses": [
    {
      "type": "mc",
      "question": {
        "en": "Compute $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix} + \\begin{bmatrix}5 & 6\\\\7 & 8\\end{bmatrix}$.",
        "zh": "计算 $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix} + \\begin{bmatrix}5 & 6\\\\7 & 8\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}6 & 8\\\\10 & 12\\end{bmatrix}$",
        "$\\begin{bmatrix}5 & 12\\\\21 & 32\\end{bmatrix}$",
        "$\\begin{bmatrix}4 & 4\\\\4 & 4\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & 8\\\\10 & 11\\end{bmatrix}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Matrix addition adds corresponding entries: $1+5=6$, $2+6=8$, $3+7=10$, $4+8=12$. Multiplying the corresponding entries instead of adding them gives a completely different matrix.",
        "zh": "矩阵加法是对应元素相加：$1+5=6$，$2+6=8$，$3+7=10$，$4+8=12$。若把对应元素相乘而不是相加，会得到完全不同的矩阵。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute $3\\begin{bmatrix}2 & -1\\\\0 & 4\\end{bmatrix}$.",
        "zh": "计算 $3\\begin{bmatrix}2 & -1\\\\0 & 4\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}5 & 2\\\\3 & 7\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & -3\\\\0 & 12\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & -1\\\\0 & 4\\end{bmatrix}$",
        "$\\begin{bmatrix}6 & -3\\\\3 & 12\\end{bmatrix}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Scalar multiplication multiplies every entry by 3: $6, -3, 0, 12$. Adding 3 to each entry, or scaling only some entries, is a common mistake that leaves other entries unchanged.",
        "zh": "数乘是每个元素都乘以 3：$6, -3, 0, 12$。把每个元素加 3，或只缩放部分元素，是常见错误，会让其他元素保持不变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute $\\begin{bmatrix}4 & 5\\\\6 & 7\\end{bmatrix} - \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$.",
        "zh": "计算 $\\begin{bmatrix}4 & 5\\\\6 & 7\\end{bmatrix} - \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}5 & 7\\\\9 & 11\\end{bmatrix}$",
        "$\\begin{bmatrix}3 & 3\\\\3 & 4\\end{bmatrix}$",
        "$\\begin{bmatrix}3 & 3\\\\3 & 3\\end{bmatrix}$",
        "$\\begin{bmatrix}-3 & -3\\\\-3 & -3\\end{bmatrix}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Subtract corresponding entries: $4-1=3$, $5-2=3$, $6-3=3$, $7-4=3$. Reversing the order of subtraction flips every sign, and adding the matrices gives larger entries.",
        "zh": "对应元素相减：$4-1=3$，$5-2=3$，$6-3=3$，$7-4=3$。颠倒相减顺序会使每个符号翻转，而相加则会得到更大的元素。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compute the product $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}\\begin{bmatrix}2 & 0\\\\1 & 2\\end{bmatrix}$.",
        "zh": "计算乘积 $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}\\begin{bmatrix}2 & 0\\\\1 & 2\\end{bmatrix}$。"
      },
      "choices": [
        "$\\begin{bmatrix}2 & 0\\\\3 & 8\\end{bmatrix}$",
        "$\\begin{bmatrix}4 & 10\\\\4 & 8\\end{bmatrix}$",
        "$\\begin{bmatrix}2 & 4\\\\6 & 8\\end{bmatrix}$",
        "$\\begin{bmatrix}4 & 4\\\\10 & 8\\end{bmatrix}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Use row-by-column dot products: row 1 gives $[1\\cdot2+2\\cdot1,\\ 1\\cdot0+2\\cdot2]=[4,4]$; row 2 gives $[3\\cdot2+4\\cdot1,\\ 3\\cdot0+4\\cdot2]=[10,8]$. Multiplying entrywise instead of row-by-column is the usual error.",
        "zh": "用行乘列的点积：第一行为 $[1\\cdot2+2\\cdot1,\\ 1\\cdot0+2\\cdot2]=[4,4]$；第二行为 $[3\\cdot2+4\\cdot1,\\ 3\\cdot0+4\\cdot2]=[10,8]$。按对应元素相乘而不是行乘列是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which matrix is the $2\\times 2$ multiplicative identity?",
        "zh": "哪个矩阵是 $2\\times 2$ 的乘法单位矩阵？"
      },
      "choices": [
        "$\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix}$",
        "$\\begin{bmatrix}0 & 0\\\\0 & 0\\end{bmatrix}$",
        "$\\begin{bmatrix}1 & 1\\\\1 & 1\\end{bmatrix}$",
        "$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The identity matrix has 1's on the main diagonal and 0's elsewhere, so $AI = A$ for any $A$. A matrix of all 1's does not leave other matrices unchanged, and the all-zero matrix is the additive identity, not the multiplicative one.",
        "zh": "单位矩阵主对角线上为 1、其余为 0，对任意 $A$ 都有 $AI = A$。全为 1 的矩阵不能保持其他矩阵不变，而全零矩阵是加法单位元，不是乘法单位元。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\det\\begin{bmatrix}3 & 4\\\\2 & 5\\end{bmatrix}$?",
        "zh": "$\\det\\begin{bmatrix}3 & 4\\\\2 & 5\\end{bmatrix}$ 是多少？"
      },
      "choices": [
        "23",
        "7",
        "15",
        "-7"
      ],
      "answer": 1,
      "explanation": {
        "en": "For a $2\\times 2$ matrix the determinant is $ad - bc = 3\\cdot5 - 4\\cdot2 = 15 - 8 = 7$. Adding the products instead of subtracting gives 23, and reversing the subtraction gives $-7$.",
        "zh": "$2\\times 2$ 矩阵的行列式为 $ad - bc = 3\\cdot5 - 4\\cdot2 = 15 - 8 = 7$。把两个乘积相加而非相减会得到 23，颠倒相减顺序会得到 $-7$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $\\begin{bmatrix}2 & 0\\\\0 & 4\\end{bmatrix}$?",
        "zh": "$\\begin{bmatrix}2 & 0\\\\0 & 4\\end{bmatrix}$ 的逆矩阵是什么？"
      },
      "choices": [
        "$\\begin{bmatrix}4 & 0\\\\0 & 2\\end{bmatrix}$",
        "$\\begin{bmatrix}2 & 0\\\\0 & 4\\end{bmatrix}$",
        "$\\begin{bmatrix}\\frac{1}{2} & 0\\\\0 & \\frac{1}{4}\\end{bmatrix}$",
        "$\\begin{bmatrix}-2 & 0\\\\0 & -4\\end{bmatrix}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Using $A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix}d & -b\\\\-c & a\\end{bmatrix}$ with $\\det = 8$ gives $\\frac{1}{8}\\begin{bmatrix}4 & 0\\\\0 & 2\\end{bmatrix} = \\begin{bmatrix}\\frac{1}{2} & 0\\\\0 & \\frac{1}{4}\\end{bmatrix}$. Swapping the diagonal entries without taking reciprocals is a common slip.",
        "zh": "用 $A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix}d & -b\\\\-c & a\\end{bmatrix}$，其中 $\\det = 8$，得 $\\frac{1}{8}\\begin{bmatrix}4 & 0\\\\0 & 2\\end{bmatrix} = \\begin{bmatrix}\\frac{1}{2} & 0\\\\0 & \\frac{1}{4}\\end{bmatrix}$。只交换对角元素而不取倒数是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\det\\begin{bmatrix}1 & 2 & 3\\\\0 & 1 & 4\\\\0 & 0 & 2\\end{bmatrix}$?",
        "zh": "$\\det\\begin{bmatrix}1 & 2 & 3\\\\0 & 1 & 4\\\\0 & 0 & 2\\end{bmatrix}$ 是多少？"
      },
      "choices": [
        "0",
        "7",
        "6",
        "2"
      ],
      "answer": 3,
      "explanation": {
        "en": "For an upper-triangular matrix the determinant is the product of the diagonal entries: $1\\cdot1\\cdot2 = 2$. Adding the diagonal entries ($1+1+2=4$) or including off-diagonal terms is incorrect for a triangular matrix.",
        "zh": "上三角矩阵的行列式等于主对角线元素之积：$1\\cdot1\\cdot2 = 2$。把对角元素相加（$1+1+2=4$）或加入非对角项对三角矩阵都是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $2\\times 2$ matrix has an inverse if and only if",
        "zh": "$2\\times 2$ 矩阵可逆的充要条件是"
      },
      "choices": [
        "its determinant is not zero",
        "all of its entries are nonzero",
        "it is symmetric",
        "it equals the identity matrix"
      ],
      "answer": 0,
      "explanation": {
        "en": "The inverse formula divides by the determinant, so the matrix is invertible exactly when $\\det \\neq 0$. Entries can all be nonzero yet still give a zero determinant (as with proportional rows), so nonzero entries alone do not guarantee an inverse.",
        "zh": "逆矩阵公式要除以行列式，所以矩阵可逆当且仅当 $\\det \\neq 0$。即使所有元素都非零，行列式仍可能为零（例如两行成比例），所以元素非零并不能保证可逆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Use Cramer's rule to solve for $x$ in $x + y = 5$, $x - y = 1$.",
        "zh": "用克拉默法则解 $x + y = 5$，$x - y = 1$ 中的 $x$。"
      },
      "choices": [
        "1",
        "3",
        "-3",
        "2"
      ],
      "answer": 1,
      "explanation": {
        "en": "Here $D = \\det\\begin{bmatrix}1 & 1\\\\1 & -1\\end{bmatrix} = -2$ and $D_x = \\det\\begin{bmatrix}5 & 1\\\\1 & -1\\end{bmatrix} = -6$, so $x = \\frac{-6}{-2} = 3$. Forgetting the sign of $D$ (using $D = 2$) flips the sign of the answer.",
        "zh": "此处 $D = \\det\\begin{bmatrix}1 & 1\\\\1 & -1\\end{bmatrix} = -2$，$D_x = \\det\\begin{bmatrix}5 & 1\\\\1 & -1\\end{bmatrix} = -6$，所以 $x = \\frac{-6}{-2} = 3$。忘记 $D$ 的符号（误用 $D = 2$）会使答案符号翻转。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Writing the system $2x + 3y = 7$, $4x - y = 1$ as $AX = B$, what is the coefficient matrix $A$?",
        "zh": "把方程组 $2x + 3y = 7$，$4x - y = 1$ 写成 $AX = B$，系数矩阵 $A$ 是什么？"
      },
      "choices": [
        "$\\begin{bmatrix}7\\\\1\\end{bmatrix}$",
        "$\\begin{bmatrix}2 & 4\\\\3 & -1\\end{bmatrix}$",
        "$\\begin{bmatrix}2 & 3\\\\4 & -1\\end{bmatrix}$",
        "$\\begin{bmatrix}2 & 3 & 7\\\\4 & -1 & 1\\end{bmatrix}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The coefficient matrix takes the $x$- and $y$-coefficients row by row: $\\begin{bmatrix}2 & 3\\\\4 & -1\\end{bmatrix}$. Reading the coefficients down the columns transposes the matrix, and including the constants gives the augmented matrix, not $A$.",
        "zh": "系数矩阵按行取 $x$ 和 $y$ 的系数：$\\begin{bmatrix}2 & 3\\\\4 & -1\\end{bmatrix}$。沿列读系数会得到转置矩阵，而把常数也包含进来得到的是增广矩阵，不是 $A$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the dimensions of the product of a $2\\times 3$ matrix and a $3\\times 4$ matrix?",
        "zh": "一个 $2\\times 3$ 矩阵与一个 $3\\times 4$ 矩阵的乘积的维数是多少？"
      },
      "choices": [
        "$2\\times 3$",
        "$3\\times 4$",
        "undefined",
        "$2\\times 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The inner dimensions ($3$ and $3$) match, so the product is defined, and it takes the outer dimensions: $2\\times 4$. Reusing an input's dimensions instead of combining the outer ones is the typical error.",
        "zh": "内维数（$3$ 和 $3$）相等，所以乘积有定义，其维数取外维数：$2\\times 4$。直接沿用某个输入的维数而不是组合外维数是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute $\\det\\begin{bmatrix}5 & 3\\\\2 & 4\\end{bmatrix}$.",
        "zh": "计算 $\\det\\begin{bmatrix}5 & 3\\\\2 & 4\\end{bmatrix}$。"
      },
      "answer": "14",
      "accept": [
        "14.0",
        "+14"
      ],
      "explanation": {
        "en": "The determinant is $ad - bc = 5\\cdot4 - 3\\cdot2 = 20 - 6 = 14$. Adding the two products instead of subtracting them gives 26.",
        "zh": "行列式为 $ad - bc = 5\\cdot4 - 3\\cdot2 = 20 - 6 = 14$。把两个乘积相加而不是相减会得到 26。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the matrix $2\\begin{bmatrix}3 & 5\\\\-1 & 2\\end{bmatrix}$, what is the entry in row 2, column 1?",
        "zh": "在矩阵 $2\\begin{bmatrix}3 & 5\\\\-1 & 2\\end{bmatrix}$ 中，第 2 行第 1 列的元素是多少？"
      },
      "answer": "-2",
      "accept": [
        "-2.0",
        "−2"
      ],
      "explanation": {
        "en": "Scalar multiplication multiplies every entry by 2, so the entry $-1$ becomes $2\\cdot(-1) = -2$. Leaving the entry unscaled gives $-1$.",
        "zh": "数乘使每个元素乘以 2，所以元素 $-1$ 变为 $2\\cdot(-1) = -2$。若不缩放该元素会得到 $-1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the product $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}\\begin{bmatrix}5 & 6\\\\7 & 8\\end{bmatrix}$, what is the top-left entry (row 1, column 1)?",
        "zh": "对于乘积 $\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}\\begin{bmatrix}5 & 6\\\\7 & 8\\end{bmatrix}$，左上角元素（第 1 行第 1 列）是多少？"
      },
      "answer": "19",
      "accept": [
        "19.0",
        "+19"
      ],
      "explanation": {
        "en": "The top-left entry is row 1 of the first matrix dotted with column 1 of the second: $1\\cdot5 + 2\\cdot7 = 5 + 14 = 19$. Multiplying just the corresponding entries ($1\\cdot5 = 5$) misses the second product.",
        "zh": "左上角元素是第一个矩阵的第 1 行与第二个矩阵的第 1 列做点积：$1\\cdot5 + 2\\cdot7 = 5 + 14 = 19$。只乘对应元素（$1\\cdot5 = 5$）会漏掉第二个乘积。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For what value of $k$ does $\\begin{bmatrix}k & 2\\\\3 & 6\\end{bmatrix}$ have no inverse?",
        "zh": "当 $k$ 为何值时，$\\begin{bmatrix}k & 2\\\\3 & 6\\end{bmatrix}$ 没有逆矩阵？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1",
        "k=1"
      ],
      "explanation": {
        "en": "A matrix has no inverse when its determinant is zero: $6k - 6 = 0$, so $k = 1$. Setting only one entry to zero rather than the whole determinant leads to a wrong value.",
        "zh": "矩阵不可逆的条件是行列式为零：$6k - 6 = 0$，所以 $k = 1$。只令某个元素为零而不是整个行列式为零，会得到错误的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In Cramer's rule for a system with coefficient matrix $\\begin{bmatrix}3 & 2\\\\1 & 4\\end{bmatrix}$, what is the value of $D$ (the main determinant)?",
        "zh": "对系数矩阵为 $\\begin{bmatrix}3 & 2\\\\1 & 4\\end{bmatrix}$ 的方程组使用克拉默法则时，主行列式 $D$ 的值是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "$D = \\det\\begin{bmatrix}3 & 2\\\\1 & 4\\end{bmatrix} = 3\\cdot4 - 2\\cdot1 = 12 - 2 = 10$. Adding the products gives 14 instead.",
        "zh": "$D = \\det\\begin{bmatrix}3 & 2\\\\1 & 4\\end{bmatrix} = 3\\cdot4 - 2\\cdot1 = 12 - 2 = 10$。把两个乘积相加则会得到 14。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use Cramer's rule to solve for $y$ in $2x + y = 5$, $x + 3y = 10$.",
        "zh": "用克拉默法则解 $2x + y = 5$，$x + 3y = 10$ 中的 $y$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "y=3"
      ],
      "explanation": {
        "en": "$D = 2\\cdot3 - 1\\cdot1 = 5$ and $D_y = \\det\\begin{bmatrix}2 & 5\\\\1 & 10\\end{bmatrix} = 20 - 5 = 15$, so $y = \\frac{15}{5} = 3$. Replacing the wrong column when forming $D_y$ gives an incorrect value.",
        "zh": "$D = 2\\cdot3 - 1\\cdot1 = 5$，$D_y = \\det\\begin{bmatrix}2 & 5\\\\1 & 10\\end{bmatrix} = 20 - 5 = 15$，所以 $y = \\frac{15}{5} = 3$。构造 $D_y$ 时替换错误的列会得到错误的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many 1's are on the main diagonal of the $3\\times 3$ identity matrix?",
        "zh": "$3\\times 3$ 单位矩阵的主对角线上有多少个 1？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The $n\\times n$ identity matrix has $n$ ones along its main diagonal and 0's elsewhere, so a $3\\times 3$ identity has 3 ones. Counting every entry (all nine) instead of just the diagonal is the usual mistake.",
        "zh": "$n\\times n$ 单位矩阵主对角线上有 $n$ 个 1，其余为 0，所以 $3\\times 3$ 单位矩阵有 3 个 1。数所有元素（共九个）而不是只数对角线是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute $\\det\\begin{bmatrix}1 & 2 & 0\\\\3 & -1 & 2\\\\0 & 4 & 1\\end{bmatrix}$.",
        "zh": "计算 $\\det\\begin{bmatrix}1 & 2 & 0\\\\3 & -1 & 2\\\\0 & 4 & 1\\end{bmatrix}$。"
      },
      "answer": "-15",
      "accept": [
        "-15.0",
        "−15"
      ],
      "explanation": {
        "en": "Expanding along the first row: $1\\cdot\\det\\begin{bmatrix}-1 & 2\\\\4 & 1\\end{bmatrix} - 2\\cdot\\det\\begin{bmatrix}3 & 2\\\\0 & 1\\end{bmatrix} + 0 = 1(-9) - 2(3) = -15$. Forgetting the alternating minus sign on the second cofactor gives the wrong total.",
        "zh": "沿第一行展开：$1\\cdot\\det\\begin{bmatrix}-1 & 2\\\\4 & 1\\end{bmatrix} - 2\\cdot\\det\\begin{bmatrix}3 & 2\\\\0 & 1\\end{bmatrix} + 0 = 1(-9) - 2(3) = -15$。忘记第二个代数余子式前的交替负号会得到错误的总和。"
      }
    }
  ],
  "conics-parametric/conic-sections": [
    {
      "type": "mc",
      "question": {
        "en": "Find the focus of the parabola $y^2 = 8x$.",
        "zh": "求抛物线 $y^2 = 8x$ 的焦点。"
      },
      "choices": [
        "$(2,0)$",
        "$(4,0)$",
        "$(0,2)$",
        "$(8,0)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Compare with $y^2 = 4px$: $4p = 8$ so $p = 2$, giving focus $(2,0)$ on the axis of symmetry. A common error is to read the coefficient $8$ directly as the focal distance and place the focus at $(8,0)$.",
        "zh": "与 $y^2 = 4px$ 比较：$4p = 8$，故 $p = 2$，焦点为对称轴上的 $(2,0)$。常见错误是把系数 $8$ 直接当成焦距而把焦点放在 $(8,0)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the directrix of the parabola $x^2 = -12y$.",
        "zh": "求抛物线 $x^2 = -12y$ 的准线。"
      },
      "choices": [
        "$y = -3$",
        "$y = 3$",
        "$x = 3$",
        "$y = 12$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Here $4p = -12$ so $p = -3$; the parabola opens downward with vertex at the origin, so the directrix is the horizontal line $y = -p = 3$. Dropping the negative sign gives the wrong line $y = -3$ (which is actually through the focus side).",
        "zh": "由 $4p = -12$ 得 $p = -3$；抛物线开口向下、顶点在原点，故准线为水平线 $y = -p = 3$。漏掉负号会得到错误的 $y = -3$（那实际上靠近焦点一侧）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the foci of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
        "zh": "求椭圆 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 的焦点。"
      },
      "choices": [
        "$(\\pm 3, 0)$",
        "$(0, \\pm 4)$",
        "$(\\pm 4, 0)$",
        "$(\\pm 16, 0)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With $a^2 = 25$ and $b^2 = 9$, use $c^2 = a^2 - b^2 = 16$, so $c = 4$; the major axis is horizontal, giving foci $(\\pm 4, 0)$. Placing the foci on the $y$-axis ignores that the larger denominator sits under $x^2$.",
        "zh": "由 $a^2 = 25$，$b^2 = 9$，用 $c^2 = a^2 - b^2 = 16$，得 $c = 4$；长轴为水平方向，焦点为 $(\\pm 4, 0)$。把焦点放在 $y$ 轴上忽略了较大分母在 $x^2$ 下方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the eccentricity of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
        "zh": "求椭圆 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 的离心率。"
      },
      "choices": [
        "$0.6$",
        "$0.36$",
        "$1.25$",
        "$0.8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Eccentricity is $e = c/a = 4/5 = 0.8$, using $c = 4$ and $a = 5$. Using $b/a = 3/5 = 0.6$ confuses the semi-minor axis with the focal distance.",
        "zh": "离心率 $e = c/a = 4/5 = 0.8$，其中 $c = 4$，$a = 5$。用 $b/a = 3/5 = 0.6$ 是把半短轴和焦距混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the asymptotes of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
        "zh": "求双曲线 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的渐近线。"
      },
      "choices": [
        "$y = \\pm\\frac{3}{4}x$",
        "$y = \\pm\\frac{4}{3}x$",
        "$y = \\pm\\frac{9}{16}x$",
        "$y = \\pm\\frac{16}{9}x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ the asymptotes are $y = \\pm\\frac{b}{a}x$, here $\\pm\\frac{3}{4}x$ since $a = 4$, $b = 3$. Flipping the ratio to $\\frac{a}{b} = \\frac{4}{3}$ is the usual mistake.",
        "zh": "对于 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$，渐近线为 $y = \\pm\\frac{b}{a}x$，此处 $a = 4$，$b = 3$，即 $\\pm\\frac{3}{4}x$。把比值颠倒成 $\\frac{a}{b} = \\frac{4}{3}$ 是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the vertices of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
        "zh": "求双曲线 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的顶点。"
      },
      "choices": [
        "$(0, \\pm 4)$",
        "$(\\pm 4, 0)$",
        "$(\\pm 3, 0)$",
        "$(\\pm 5, 0)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The transverse axis is horizontal ($x^2$ term positive), so vertices are $(\\pm a, 0) = (\\pm 4, 0)$ since $a^2 = 16$. The points $(\\pm 5, 0)$ are the foci, not the vertices.",
        "zh": "实轴为水平方向（$x^2$ 项为正），故顶点为 $(\\pm a, 0) = (\\pm 4, 0)$，因 $a^2 = 16$。$(\\pm 5, 0)$ 是焦点而非顶点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What type of conic is $4x^2 + 9y^2 = 36$?",
        "zh": "$4x^2 + 9y^2 = 36$ 是哪种圆锥曲线？"
      },
      "choices": [
        "parabola / 抛物线",
        "hyperbola / 双曲线",
        "ellipse / 椭圆",
        "circle / 圆"
      ],
      "answer": 2,
      "explanation": {
        "en": "Both squared terms are present with the same sign but different coefficients, so it is an ellipse (dividing by 36 gives $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$). Equal coefficients would be needed for a circle.",
        "zh": "两个平方项同号但系数不同，因此是椭圆（两边除以 36 得 $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$）。系数相等才会是圆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the foci of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
        "zh": "求双曲线 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的焦点。"
      },
      "choices": [
        "$(\\pm 4, 0)$",
        "$(\\pm 7, 0)$",
        "$(0, \\pm 5)$",
        "$(\\pm 5, 0)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "For a hyperbola $c^2 = a^2 + b^2 = 16 + 9 = 25$, so $c = 5$ and the foci are $(\\pm 5, 0)$ on the horizontal transverse axis. Subtracting to get $c^2 = 16 - 9 = 7$ wrongly uses the ellipse relation.",
        "zh": "双曲线中 $c^2 = a^2 + b^2 = 16 + 9 = 25$，故 $c = 5$，焦点为水平实轴上的 $(\\pm 5, 0)$。用相减 $c^2 = 16 - 9 = 7$ 是错误地套用了椭圆的关系式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the vertex of the parabola $y = (x - 3)^2 + 2$.",
        "zh": "求抛物线 $y = (x - 3)^2 + 2$ 的顶点。"
      },
      "choices": [
        "$(3, 2)$",
        "$(-3, 2)$",
        "$(3, -2)$",
        "$(2, 3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In vertex form $y = (x - h)^2 + k$ the vertex is $(h, k) = (3, 2)$. The $x$-coordinate is $+3$ because the form contains $(x - 3)$; reading the sign inside the parenthesis literally as $-3$ is the common slip.",
        "zh": "顶点式 $y = (x - h)^2 + k$ 的顶点为 $(h, k) = (3, 2)$。$x$ 坐标为 $+3$，因为式中是 $(x - 3)$；直接把括号内符号读成 $-3$ 是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the vertices of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
        "zh": "求椭圆 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 的顶点。"
      },
      "choices": [
        "$(0, \\pm 5)$",
        "$(\\pm 5, 0)$",
        "$(\\pm 3, 0)$",
        "$(\\pm 25, 0)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The major axis is horizontal since $a^2 = 25 > 9$, so the vertices are $(\\pm a, 0) = (\\pm 5, 0)$. The points $(0, \\pm 3)$ are the co-vertices on the minor axis.",
        "zh": "因 $a^2 = 25 > 9$，长轴为水平方向，顶点为 $(\\pm a, 0) = (\\pm 5, 0)$。$(0, \\pm 3)$ 是短轴上的共顶点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the directrix of the parabola $y^2 = 8x$.",
        "zh": "求抛物线 $y^2 = 8x$ 的准线。"
      },
      "choices": [
        "$x = 2$",
        "$y = -2$",
        "$x = -2$",
        "$x = -8$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With $4p = 8$, $p = 2$; the parabola opens right so the directrix is the vertical line $x = -p = -2$. Writing $x = 2$ places the line on the focus side, and $x = -8$ misreads the coefficient as the distance.",
        "zh": "由 $4p = 8$ 得 $p = 2$；抛物线开口向右，故准线为垂直线 $x = -p = -2$。写成 $x = 2$ 会把线放在焦点一侧，而 $x = -8$ 则误把系数当成距离。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the eccentricity of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
        "zh": "求双曲线 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的离心率。"
      },
      "choices": [
        "$0.8$",
        "$1.0$",
        "$0.75$",
        "$1.25$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Eccentricity is $e = c/a = 5/4 = 1.25$, using $c = 5$ and $a = 4$; every hyperbola has $e > 1$. Taking the reciprocal $a/c = 0.8$ would incorrectly give a value below 1.",
        "zh": "离心率 $e = c/a = 5/4 = 1.25$，其中 $c = 5$，$a = 4$；任何双曲线的 $e > 1$。取倒数 $a/c = 0.8$ 会错误地得到小于 1 的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the parabola $y^2 = 20x$, the focus is $(p, 0)$. Find $p$.",
        "zh": "对于抛物线 $y^2 = 20x$，焦点为 $(p, 0)$。求 $p$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "5.00"
      ],
      "explanation": {
        "en": "From $y^2 = 4px$, $4p = 20$ so $p = 5$; the focus is $(5, 0)$. Using $4p = 20$ as $p = 20$ ignores the factor of 4.",
        "zh": "由 $y^2 = 4px$，$4p = 20$，故 $p = 5$；焦点为 $(5, 0)$。把 $4p = 20$ 当成 $p = 20$ 忽略了系数 4。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the eccentricity of the ellipse $\\frac{x^2}{100} + \\frac{y^2}{64} = 1$.",
        "zh": "求椭圆 $\\frac{x^2}{100} + \\frac{y^2}{64} = 1$ 的离心率。"
      },
      "answer": "0.6",
      "accept": [
        "0.60",
        "3/5",
        ".6",
        "0.600"
      ],
      "explanation": {
        "en": "Here $a = 10$, $b = 8$, so $c = \\sqrt{100 - 64} = 6$ and $e = c/a = 6/10 = 0.6$. Using $b/a = 0.8$ mistakes the semi-minor axis for the focal distance.",
        "zh": "此处 $a = 10$，$b = 8$，故 $c = \\sqrt{100 - 64} = 6$，$e = c/a = 6/10 = 0.6$。用 $b/a = 0.8$ 是把半短轴当成了焦距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, find $c$ (the distance from center to each focus).",
        "zh": "对于双曲线 $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$，求 $c$（中心到每个焦点的距离）。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "5.00"
      ],
      "explanation": {
        "en": "For a hyperbola $c^2 = a^2 + b^2 = 9 + 16 = 25$, so $c = 5$. Subtracting the denominators (as for an ellipse) would wrongly give $\\sqrt{9 - 16}$, which is not real.",
        "zh": "双曲线中 $c^2 = a^2 + b^2 = 9 + 16 = 25$，故 $c = 5$。像椭圆那样相减会得到 $\\sqrt{9 - 16}$，并非实数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What constant completes the square for $x^2 + 6x + \\underline{\\ \\ }$?",
        "zh": "为使 $x^2 + 6x + \\underline{\\ \\ }$ 配成完全平方，应填入的常数是多少？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9",
        "9.00"
      ],
      "explanation": {
        "en": "Take half the linear coefficient and square it: $(6/2)^2 = 3^2 = 9$, giving $(x + 3)^2$. Forgetting to halve first and using $6^2 = 36$ is the common error.",
        "zh": "取一次项系数的一半再平方：$(6/2)^2 = 3^2 = 9$，得 $(x + 3)^2$。忘记先取一半而用 $6^2 = 36$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the positive slope of the asymptotes of the hyperbola $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$.",
        "zh": "求双曲线 $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$ 渐近线的正斜率。"
      },
      "answer": "1.5",
      "accept": [
        "3/2",
        "1.50",
        "1.5"
      ],
      "explanation": {
        "en": "The asymptote slopes are $\\pm\\frac{b}{a} = \\pm\\frac{3}{2}$ since $a = 2$, $b = 3$; the positive one is $1.5$. Flipping to $\\frac{a}{b} = \\frac{2}{3}$ inverts the ratio.",
        "zh": "渐近线斜率为 $\\pm\\frac{b}{a} = \\pm\\frac{3}{2}$，因 $a = 2$，$b = 3$；正的为 $1.5$。颠倒为 $\\frac{a}{b} = \\frac{2}{3}$ 是把比值倒置了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the radius of the circle $x^2 + y^2 - 4x + 6y - 3 = 0$.",
        "zh": "求圆 $x^2 + y^2 - 4x + 6y - 3 = 0$ 的半径。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4",
        "4.00"
      ],
      "explanation": {
        "en": "Completing the square: $(x - 2)^2 + (y + 3)^2 = 3 + 4 + 9 = 16$, so $r = \\sqrt{16} = 4$. Forgetting to add the completing constants back to the right side would give a wrong radius.",
        "zh": "配方：$(x - 2)^2 + (y + 3)^2 = 3 + 4 + 9 = 16$，故 $r = \\sqrt{16} = 4$。忘记把配方常数加回右边会得到错误的半径。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the eccentricity of any parabola?",
        "zh": "任何抛物线的离心率是多少？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00",
        "+1"
      ],
      "explanation": {
        "en": "By definition every parabola has eccentricity exactly $e = 1$ (ellipses have $e < 1$, hyperbolas $e > 1$). It does not depend on the specific equation.",
        "zh": "按定义，任何抛物线的离心率恰为 $e = 1$（椭圆 $e < 1$，双曲线 $e > 1$）。它与具体方程无关。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the length of the semi-major axis $a$ of the ellipse $\\frac{x^2}{49} + \\frac{y^2}{25} = 1$.",
        "zh": "求椭圆 $\\frac{x^2}{49} + \\frac{y^2}{25} = 1$ 的半长轴长 $a$。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7",
        "7.00"
      ],
      "explanation": {
        "en": "The semi-major axis is $a = \\sqrt{49} = 7$ (the larger denominator). Using the denominator $49$ itself as the length forgets to take the square root.",
        "zh": "半长轴 $a = \\sqrt{49} = 7$（较大的分母）。直接把分母 $49$ 当作长度忘记了开平方。"
      }
    }
  ],
  "conics-parametric/parametric-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Eliminate the parameter for $x = t + 1$, $y = t^2$.",
        "zh": "消去 $x = t + 1$，$y = t^2$ 中的参数。"
      },
      "choices": [
        "$y = (x - 1)^2$",
        "$y = (x + 1)^2$",
        "$y = x^2 - 1$",
        "$y = x^2 + 1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Solve the first equation for $t = x - 1$ and substitute into $y = t^2$ to get $y = (x - 1)^2$. Using $t = x + 1$ reverses the sign and gives $(x + 1)^2$.",
        "zh": "由第一式解出 $t = x - 1$，代入 $y = t^2$ 得 $y = (x - 1)^2$。用 $t = x + 1$ 会弄错符号，得到 $(x + 1)^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Eliminate the parameter for $x = 2t$, $y = t - 3$.",
        "zh": "消去 $x = 2t$，$y = t - 3$ 中的参数。"
      },
      "choices": [
        "$y = 2x - 3$",
        "$y = \\frac{x}{2} - 3$",
        "$y = 2x + 3$",
        "$y = \\frac{x}{2} + 3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $x = 2t$ we get $t = \\frac{x}{2}$, so $y = \\frac{x}{2} - 3$. Writing $t = 2x$ instead of $\\frac{x}{2}$ leads to the wrong slope of 2.",
        "zh": "由 $x = 2t$ 得 $t = \\frac{x}{2}$，故 $y = \\frac{x}{2} - 3$。把 $t$ 写成 $2x$ 而非 $\\frac{x}{2}$ 会得到错误的斜率 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Eliminate the parameter for $x = \\cos t$, $y = \\sin t$.",
        "zh": "消去 $x = \\cos t$，$y = \\sin t$ 中的参数。"
      },
      "choices": [
        "$x + y = 1$",
        "$x^2 - y^2 = 1$",
        "$x^2 + y^2 = 1$",
        "$x^2 + y^2 = 2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Use the identity $\\cos^2 t + \\sin^2 t = 1$, so $x^2 + y^2 = 1$, the unit circle. Adding $x + y$ instead of squaring ignores the Pythagorean identity.",
        "zh": "利用恒等式 $\\cos^2 t + \\sin^2 t = 1$，故 $x^2 + y^2 = 1$，即单位圆。直接相加 $x + y$ 而不平方忽略了勾股恒等式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The curve $x = 3\\cos t$, $y = 3\\sin t$ is a circle. What is its radius?",
        "zh": "曲线 $x = 3\\cos t$，$y = 3\\sin t$ 是一个圆。它的半径是多少？"
      },
      "choices": [
        "$1$",
        "$6$",
        "$9$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Then $x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9 = 3^2$, so the radius is $3$. Reading $9$ as the radius forgets that $9 = r^2$, not $r$.",
        "zh": "此时 $x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9 = 3^2$，故半径为 $3$。把 $9$ 当作半径忘记了 $9 = r^2$ 而非 $r$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As $t$ increases from $0$, in which direction does $x = \\cos t$, $y = \\sin t$ trace the unit circle?",
        "zh": "当 $t$ 从 $0$ 增大时，$x = \\cos t$，$y = \\sin t$ 沿哪个方向描出单位圆？"
      },
      "choices": [
        "counterclockwise / 逆时针",
        "clockwise / 顺时针",
        "up then down / 先上后下",
        "left to right / 从左到右"
      ],
      "answer": 0,
      "explanation": {
        "en": "At $t = 0$ the point is $(1, 0)$; as $t$ grows to $\\pi/2$ it moves to $(0, 1)$, which is counterclockwise. Assuming clockwise misjudges how $\\sin t$ rises first.",
        "zh": "当 $t = 0$ 时点在 $(1, 0)$；$t$ 增至 $\\pi/2$ 时移到 $(0, 1)$，即逆时针方向。误认为顺时针是没看清 $\\sin t$ 先上升。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $x = t^2$, $y = 2t$, find the point at $t = 2$.",
        "zh": "对于 $x = t^2$，$y = 2t$，求 $t = 2$ 时的点。"
      },
      "choices": [
        "$(2, 2)$",
        "$(4, 4)$",
        "$(2, 4)$",
        "$(4, 2)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substitute $t = 2$: $x = 2^2 = 4$ and $y = 2(2) = 4$, giving $(4, 4)$. Swapping which formula gives $x$ versus $y$ produces the reversed point.",
        "zh": "代入 $t = 2$：$x = 2^2 = 4$，$y = 2(2) = 4$，得 $(4, 4)$。弄反哪个式子给 $x$、哪个给 $y$ 会得到坐标互换的点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Eliminate the parameter for $x = t^2$, $y = t$.",
        "zh": "消去 $x = t^2$，$y = t$ 中的参数。"
      },
      "choices": [
        "$y = x^2$",
        "$xy = 1$",
        "$x = y^2$",
        "$y = \\sqrt{x}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $y = t$, substitute into $x = t^2$ to get $x = y^2$, a parabola opening rightward. Writing $y = x^2$ mixes up which variable equals the parameter.",
        "zh": "由 $y = t$，代入 $x = t^2$ 得 $x = y^2$，是向右开口的抛物线。写成 $y = x^2$ 是弄错了哪个变量等于参数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the slope of the line $x = 1 + 2t$, $y = 3 + t$.",
        "zh": "求直线 $x = 1 + 2t$，$y = 3 + t$ 的斜率。"
      },
      "choices": [
        "$3$",
        "$2$",
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The slope is $\\frac{\\Delta y}{\\Delta x} = \\frac{dy/dt}{dx/dt} = \\frac{1}{2}$, the ratio of the $t$-coefficients. Taking $\\frac{dx/dt}{dy/dt} = 2$ inverts the ratio.",
        "zh": "斜率为 $\\frac{\\Delta y}{\\Delta x} = \\frac{dy/dt}{dx/dt} = \\frac{1}{2}$，即 $t$ 系数之比。取 $\\frac{dx/dt}{dy/dt} = 2$ 是把比值倒置了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Eliminate the parameter for $x = 4\\cos t$, $y = 2\\sin t$.",
        "zh": "消去 $x = 4\\cos t$，$y = 2\\sin t$ 中的参数。"
      },
      "choices": [
        "$\\frac{x^2}{16} + \\frac{y^2}{4} = 1$",
        "$x^2 + y^2 = 16$",
        "$\\frac{x^2}{4} + \\frac{y^2}{16} = 1$",
        "$\\frac{x^2}{16} + \\frac{y^2}{4} = 2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Write $\\cos t = \\frac{x}{4}$, $\\sin t = \\frac{y}{2}$, then $\\cos^2 t + \\sin^2 t = 1$ gives $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$, an ellipse. Putting $16$ under $y^2$ swaps the two denominators.",
        "zh": "令 $\\cos t = \\frac{x}{4}$，$\\sin t = \\frac{y}{2}$，则 $\\cos^2 t + \\sin^2 t = 1$ 得 $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$，是椭圆。把 $16$ 放到 $y^2$ 下方是把两个分母弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the slope of the line $x = 2 + 3t$, $y = 1 - t$.",
        "zh": "求直线 $x = 2 + 3t$，$y = 1 - t$ 的斜率。"
      },
      "choices": [
        "$3$",
        "$-\\frac{1}{3}$",
        "$-1$",
        "$\\frac{1}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The slope is $\\frac{dy/dt}{dx/dt} = \\frac{-1}{3} = -\\frac{1}{3}$. Dropping the negative sign from the $y$-coefficient gives the wrong positive value.",
        "zh": "斜率为 $\\frac{dy/dt}{dx/dt} = \\frac{-1}{3} = -\\frac{1}{3}$。漏掉 $y$ 系数的负号会得到错误的正值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the initial position (at $t = 0$) of $x = t - 1$, $y = 2t + 3$.",
        "zh": "求 $x = t - 1$，$y = 2t + 3$ 在 $t = 0$ 时的初始位置。"
      },
      "choices": [
        "$(0, 0)$",
        "$(1, 3)$",
        "$(-1, 3)$",
        "$(-1, -3)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "At $t = 0$: $x = 0 - 1 = -1$ and $y = 2(0) + 3 = 3$, so $(-1, 3)$. Applying the wrong sign to the constant in $y$ gives $-3$ instead of $3$.",
        "zh": "当 $t = 0$：$x = 0 - 1 = -1$，$y = 2(0) + 3 = 3$，故 $(-1, 3)$。对 $y$ 的常数项弄错符号会得到 $-3$ 而非 $3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball follows $x = t$, $y = -t^2 + 4t$. At what time $t > 0$ does it return to $y = 0$?",
        "zh": "一个球沿 $x = t$，$y = -t^2 + 4t$ 运动。它在什么时刻 $t > 0$ 回到 $y = 0$？"
      },
      "choices": [
        "$t = 8$",
        "$t = 2$",
        "$t = 0$",
        "$t = 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Set $-t^2 + 4t = 0 \\rightarrow t(4 - t) = 0$, so $t = 0$ or $t = 4$; the positive return time is $t = 4$. The value $t = 2$ is when the peak height occurs, not when it lands.",
        "zh": "令 $-t^2 + 4t = 0 \\rightarrow t(4 - t) = 0$，故 $t = 0$ 或 $t = 4$；正的落地时刻为 $t = 4$。$t = 2$ 是达到最高点的时刻，而非落地时刻。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x = 2t$, $y = t^2$, find the $x$-coordinate at $t = 3$.",
        "zh": "对于 $x = 2t$，$y = t^2$，求 $t = 3$ 时的 $x$ 坐标。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6",
        "6.00"
      ],
      "explanation": {
        "en": "Substitute $t = 3$ into $x = 2t$: $x = 2(3) = 6$. Using the $y$-formula $t^2 = 9$ answers the wrong coordinate.",
        "zh": "将 $t = 3$ 代入 $x = 2t$：$x = 2(3) = 6$。用 $y$ 的式子 $t^2 = 9$ 是回答了错误的坐标。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x = 2t$, $y = t^2$, find the $y$-coordinate at $t = 3$.",
        "zh": "对于 $x = 2t$，$y = t^2$，求 $t = 3$ 时的 $y$ 坐标。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9",
        "9.00"
      ],
      "explanation": {
        "en": "Substitute $t = 3$ into $y = t^2$: $y = 3^2 = 9$. Doubling instead of squaring (as in the $x$-formula) gives 6.",
        "zh": "将 $t = 3$ 代入 $y = t^2$：$y = 3^2 = 9$。像 $x$ 的式子那样翻倍而不是平方会得到 6。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x = \\cos t$, $y = \\sin t$, what is the value of $x^2 + y^2$?",
        "zh": "对于 $x = \\cos t$，$y = \\sin t$，$x^2 + y^2$ 的值是多少？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00",
        "+1"
      ],
      "explanation": {
        "en": "By the identity $\\cos^2 t + \\sin^2 t = 1$, the sum is always $1$ for every $t$. It does not depend on the particular value of $t$.",
        "zh": "由恒等式 $\\cos^2 t + \\sin^2 t = 1$，对任意 $t$ 该和恒为 $1$。它不依赖于 $t$ 的具体取值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object moves with horizontal position $x = 20t$ (meters). Find $x$ at $t = 3$ seconds.",
        "zh": "一物体的水平位置为 $x = 20t$（米）。求 $t = 3$ 秒时的 $x$。"
      },
      "answer": "60",
      "accept": [
        "60.0",
        "60 m",
        "60m",
        "60.00"
      ],
      "explanation": {
        "en": "Substitute $t = 3$: $x = 20(3) = 60$ meters. Adding instead of multiplying ($20 + 3$) misreads the model.",
        "zh": "代入 $t = 3$：$x = 20(3) = 60$ 米。用相加而非相乘（$20 + 3$）是误读了模型。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x = t^2 - 1$, find $x$ at $t = 0$.",
        "zh": "对于 $x = t^2 - 1$，求 $t = 0$ 时的 $x$。"
      },
      "answer": "-1",
      "accept": [
        "-1.0",
        "-1.00"
      ],
      "explanation": {
        "en": "At $t = 0$: $x = 0^2 - 1 = -1$. Forgetting the constant term $-1$ and answering $0$ is the common slip.",
        "zh": "当 $t = 0$：$x = 0^2 - 1 = -1$。忘记常数项 $-1$ 而回答 $0$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The curve $x = 5\\cos t$, $y = 5\\sin t$ is a circle. Find its radius.",
        "zh": "曲线 $x = 5\\cos t$，$y = 5\\sin t$ 是一个圆。求它的半径。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "5.00"
      ],
      "explanation": {
        "en": "Then $x^2 + y^2 = 25(\\cos^2 t + \\sin^2 t) = 25 = 5^2$, so the radius is $5$. Reporting $25$ confuses $r^2$ with $r$.",
        "zh": "此时 $x^2 + y^2 = 25(\\cos^2 t + \\sin^2 t) = 25 = 5^2$，故半径为 $5$。回答 $25$ 是把 $r^2$ 和 $r$ 混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x = 3 + t$, $y = 2t - 1$, find the $y$-coordinate at $t = 4$.",
        "zh": "对于 $x = 3 + t$，$y = 2t - 1$，求 $t = 4$ 时的 $y$ 坐标。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7",
        "7.00"
      ],
      "explanation": {
        "en": "Substitute $t = 4$ into $y = 2t - 1$: $y = 2(4) - 1 = 7$. Using the $x$-formula $3 + 4 = 7$ happens to match here only by coincidence, but the correct method evaluates $y$ directly.",
        "zh": "将 $t = 4$ 代入 $y = 2t - 1$：$y = 2(4) - 1 = 7$。虽然用 $x$ 的式子 $3 + 4 = 7$ 恰好相同，但正确方法是直接计算 $y$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A projectile has height $y = -16t^2 + 64t$ (feet). At what time $t > 0$ does it hit the ground ($y = 0$)?",
        "zh": "一个抛体的高度为 $y = -16t^2 + 64t$（英尺）。它在什么时刻 $t > 0$ 落地（$y = 0$）？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "4 s",
        "4s",
        "4.00"
      ],
      "explanation": {
        "en": "Solve $-16t^2 + 64t = 0 \\rightarrow -16t(t - 4) = 0$, so $t = 0$ or $t = 4$; it lands at $t = 4$ seconds. The value $t = 2$ is the time of maximum height, not landing.",
        "zh": "解 $-16t^2 + 64t = 0 \\rightarrow -16t(t - 4) = 0$，故 $t = 0$ 或 $t = 4$；在 $t = 4$ 秒落地。$t = 2$ 是最高点的时刻，而非落地时刻。"
      }
    }
  ],
  "sequences-series-combinatorics/sequences-series-induction": [
    {
      "type": "mc",
      "question": {
        "en": "An arithmetic sequence has first term $a_1 = 3$ and common difference $d = 5$. What is $a_{10}$?",
        "zh": "一个等差数列首项 $a_1 = 3$，公差 $d = 5$。求 $a_{10}$。"
      },
      "choices": [
        "48",
        "50",
        "45",
        "53"
      ],
      "answer": 0,
      "explanation": {
        "en": "Use $a_n = a_1 + (n-1)d = 3 + 9 \\times 5 = 48$. A common slip is using $nd$ instead of $(n-1)d$, giving $3 + 10 \\times 5 = 53$; the tenth term only adds the difference nine times.",
        "zh": "用 $a_n = a_1 + (n-1)d = 3 + 9 \\times 5 = 48$。常见错误是用 $nd$ 而非 $(n-1)d$，得到 $3 + 10 \\times 5 = 53$；第十项只加了九次公差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric sequence has $a_1 = 2$ and common ratio $r = 3$. Find $a_5$.",
        "zh": "一个等比数列 $a_1 = 2$，公比 $r = 3$。求 $a_5$。"
      },
      "choices": [
        "486",
        "162",
        "54",
        "243"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use $a_n = a_1 r^{n-1} = 2 \\times 3^4 = 2 \\times 81 = 162$. Using $r^n = 3^5$ instead of $r^{n-1}$ gives $486$; the fifth term uses the exponent $4$, not $5$.",
        "zh": "用 $a_n = a_1 r^{n-1} = 2 \\times 3^4 = 2 \\times 81 = 162$。若误用 $r^n = 3^5$ 而非 $r^{n-1}$ 会得到 $486$；第五项指数是 $4$，不是 $5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the first 20 terms of the arithmetic series $2 + 5 + 8 + \\cdots$",
        "zh": "求等差数列 $2 + 5 + 8 + \\cdots$ 前 20 项的和。"
      },
      "choices": [
        "590",
        "305",
        "610",
        "620"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $a_1 = 2$, $d = 3$, so $S_n = \\frac{n}{2}(2a_1 + (n-1)d) = 10(4 + 57) = 610$. Using $(n)d = 20 \\times 3$ instead of $(n-1)d$ overshoots to $620$.",
        "zh": "其中 $a_1 = 2$，$d = 3$，故 $S_n = \\frac{n}{2}(2a_1 + (n-1)d) = 10(4 + 57) = 610$。若用 $(n)d = 20 \\times 3$ 而非 $(n-1)d$ 会多算成 $620$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the first 5 terms of the geometric series $3 + 6 + 12 + \\cdots$",
        "zh": "求等比数列 $3 + 6 + 12 + \\cdots$ 前 5 项的和。"
      },
      "choices": [
        "96",
        "189",
        "48",
        "93"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $a_1 = 3$, $r = 2$: $S_n = a_1\\frac{r^n - 1}{r - 1} = 3 \\times \\frac{31}{1} = 93$. Forgetting the $-1$ in $r^n - 1$ and using $r^n = 32$ gives $96$.",
        "zh": "其中 $a_1 = 3$，$r = 2$：$S_n = a_1\\frac{r^n - 1}{r - 1} = 3 \\times \\frac{31}{1} = 93$。若漏掉 $r^n - 1$ 里的 $-1$、直接用 $r^n = 32$ 会得到 $96$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the infinite geometric series $8 + 4 + 2 + 1 + \\cdots$",
        "zh": "求无穷等比数列 $8 + 4 + 2 + 1 + \\cdots$ 的和。"
      },
      "choices": [
        "16",
        "8",
        "32",
        "24"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $|r| = \\tfrac{1}{2} < 1$, $S = \\frac{a_1}{1 - r} = \\frac{8}{1 - 1/2} = 16$. Dividing by $r$ instead of $1 - r$ gives $16$ only by luck here; the correct denominator is $1 - r = \\tfrac{1}{2}$.",
        "zh": "因 $|r| = \\tfrac{1}{2} < 1$，$S = \\frac{a_1}{1 - r} = \\frac{8}{1 - 1/2} = 16$。分母必须是 $1 - r = \\tfrac{1}{2}$，若误用 $1 - a_1$ 等会算错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sum_{k=1}^{4} k^2$.",
        "zh": "求 $\\sum_{k=1}^{4} k^2$ 的值。"
      },
      "choices": [
        "20",
        "30",
        "16",
        "54"
      ],
      "answer": 1,
      "explanation": {
        "en": "This is $1 + 4 + 9 + 16 = 30$. Squaring the sum $1+2+3+4 = 10$ instead of summing the squares gives the wrong idea; you must square each term first.",
        "zh": "即 $1 + 4 + 9 + 16 = 30$。若把和 $1+2+3+4 = 10$ 再平方就错了；应先对每一项平方再求和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In an arithmetic sequence $a_3 = 11$ and $a_7 = 27$. What is the common difference $d$?",
        "zh": "在等差数列中 $a_3 = 11$，$a_7 = 27$。公差 $d$ 是多少？"
      },
      "choices": [
        "5",
        "3",
        "4",
        "2"
      ],
      "answer": 2,
      "explanation": {
        "en": "There are $7 - 3 = 4$ steps between the terms, so $d = \\frac{27 - 11}{4} = 4$. Dividing by $7 - 3 - 1$ or by the term numbers themselves is the usual error; count the gaps, which is $4$.",
        "zh": "两项之间有 $7 - 3 = 4$ 个间隔，故 $d = \\frac{27 - 11}{4} = 4$。常见错误是除以 $7 - 3 - 1$ 或除以项数本身；应数间隔数 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the common ratio of the geometric sequence $3, -6, 12, -24, \\ldots$?",
        "zh": "等比数列 $3, -6, 12, -24, \\ldots$ 的公比是多少？"
      },
      "choices": [
        "2",
        "3",
        "-3",
        "-2"
      ],
      "answer": 3,
      "explanation": {
        "en": "Divide any term by the one before: $\\frac{-6}{3} = -2$. Taking the ratio as $+2$ ignores the alternating sign; the ratio must be negative to flip signs each step.",
        "zh": "用后一项除以前一项：$\\frac{-6}{3} = -2$。若取 $+2$ 就忽略了正负交替；公比必须为负才能每步变号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which infinite geometric series converges to a finite sum?",
        "zh": "下列哪个无穷等比数列收敛到有限的和？"
      },
      "choices": [
        "one with $r = 0.4$",
        "one with $r = -2$",
        "one with $r = 1.5$",
        "one with $r = 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "An infinite geometric series converges exactly when $|r| < 1$; only $r = 0.4$ satisfies this. Ratios with $|r| \\geq 1$ make the terms fail to shrink toward $0$, so the sum grows without bound.",
        "zh": "无穷等比数列收敛当且仅当 $|r| < 1$；只有 $r = 0.4$ 满足。$|r| \\geq 1$ 时各项不趋于 $0$，和会无限增大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a proof by mathematical induction, after verifying the base case you assume $P(k)$ is true. What must you then prove?",
        "zh": "在数学归纳法证明中，验证基础步骤后假设 $P(k)$ 成立。接下来必须证明什么？"
      },
      "choices": [
        "$P(k-1)$",
        "$P(k+1)$",
        "$P(1)$",
        "$P(n)$ for a random $n$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The inductive step shows that if $P(k)$ holds then $P(k+1)$ holds, chaining truth forward. Re-proving $P(1)$ is only the base case, not the inductive step, so it cannot complete the argument.",
        "zh": "归纳步骤要证明：若 $P(k)$ 成立则 $P(k+1)$ 成立，从而逐级传递。重新证明 $P(1)$ 只是基础步骤，不能完成归纳论证。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the arithmetic mean (the single term) inserted between 4 and 16 so that the three numbers form an arithmetic sequence?",
        "zh": "在 4 和 16 之间插入一个数，使三个数成等差数列，这个等差中项是多少？"
      },
      "choices": [
        "12",
        "8",
        "10",
        "20"
      ],
      "answer": 2,
      "explanation": {
        "en": "The arithmetic mean is $\\frac{4 + 16}{2} = 10$. Using the geometric mean $\\sqrt{4 \\times 16} = 8$ answers a different question; an arithmetic middle term averages the two endpoints.",
        "zh": "等差中项为 $\\frac{4 + 16}{2} = 10$。若用等比中项 $\\sqrt{4 \\times 16} = 8$ 就答错了题；等差中项是两端点的平均值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which sigma expression represents the sum $2 + 4 + 6 + \\cdots + 20$?",
        "zh": "下列哪个求和符号表示 $2 + 4 + 6 + \\cdots + 20$？"
      },
      "choices": [
        "$\\sum_{k=1}^{20} 2k$",
        "$\\sum_{k=1}^{10} k$",
        "$\\sum_{k=1}^{20} k$",
        "$\\sum_{k=1}^{10} 2k$"
      ],
      "answer": 3,
      "explanation": {
        "en": "There are 10 even numbers and each is $2k$, so $\\sum_{k=1}^{10} 2k$. Letting the index run to $20$ would add terms up to $40$; the last term $20$ corresponds to $k = 10$.",
        "zh": "共有 10 个偶数，每个为 $2k$，故为 $\\sum_{k=1}^{10} 2k$。若上标取到 $20$ 会加到 $40$；末项 $20$ 对应 $k = 10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence has $a_1 = 7$ and $d = 4$. Find $a_{15}$.",
        "zh": "等差数列 $a_1 = 7$，$d = 4$。求 $a_{15}$。"
      },
      "answer": "63",
      "accept": [
        "63.0",
        "+63"
      ],
      "explanation": {
        "en": "$a_{15} = 7 + (15 - 1)\\times 4 = 7 + 56 = 63$. Using $15 \\times 4$ instead of $14 \\times 4$ over-counts by one step.",
        "zh": "$a_{15} = 7 + (15 - 1)\\times 4 = 7 + 56 = 63$。若用 $15 \\times 4$ 而非 $14 \\times 4$ 会多算一步。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_1 = 5$ and $r = 2$. Find $a_6$.",
        "zh": "等比数列 $a_1 = 5$，$r = 2$。求 $a_6$。"
      },
      "answer": "160",
      "accept": [
        "160.0",
        "+160"
      ],
      "explanation": {
        "en": "$a_6 = 5 \\times 2^{5} = 5 \\times 32 = 160$. The exponent is $n - 1 = 5$, not $6$.",
        "zh": "$a_6 = 5 \\times 2^{5} = 5 \\times 32 = 160$。指数是 $n - 1 = 5$，不是 $6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the infinite geometric series $27 + 9 + 3 + \\cdots$",
        "zh": "求无穷等比数列 $27 + 9 + 3 + \\cdots$ 的和。"
      },
      "answer": "40.5",
      "accept": [
        "40.50",
        "81/2",
        "40.5000"
      ],
      "explanation": {
        "en": "Here $r = \\tfrac{1}{3}$ so $S = \\frac{27}{1 - 1/3} = \\frac{27}{2/3} = 40.5$. Dividing by $\\tfrac{1}{3}$ instead of $1 - \\tfrac{1}{3}$ gives $81$.",
        "zh": "此处 $r = \\tfrac{1}{3}$，故 $S = \\frac{27}{1 - 1/3} = \\frac{27}{2/3} = 40.5$。若除以 $\\tfrac{1}{3}$ 而非 $1 - \\tfrac{1}{3}$ 会得到 $81$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sum_{k=1}^{5} (2k + 1)$.",
        "zh": "求 $\\sum_{k=1}^{5} (2k + 1)$ 的值。"
      },
      "answer": "35",
      "accept": [
        "35.0",
        "+35"
      ],
      "explanation": {
        "en": "The terms are $3 + 5 + 7 + 9 + 11 = 35$. Forgetting the $+1$ on each term (summing just $2k$) gives $30$.",
        "zh": "各项为 $3 + 5 + 7 + 9 + 11 = 35$。若漏掉每项的 $+1$（只加 $2k$）会得到 $30$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find $\\sum_{k=1}^{100} k$, the sum of the first 100 positive integers.",
        "zh": "求 $\\sum_{k=1}^{100} k$，即前 100 个正整数之和。"
      },
      "answer": "5050",
      "accept": [
        "5050.0",
        "+5050"
      ],
      "explanation": {
        "en": "Use $\\frac{n(n+1)}{2} = \\frac{100 \\times 101}{2} = 5050$. Using $\\frac{n^2}{2} = 5000$ omits the $+1$ factor.",
        "zh": "用 $\\frac{n(n+1)}{2} = \\frac{100 \\times 101}{2} = 5050$。若用 $\\frac{n^2}{2} = 5000$ 就漏了 $+1$ 因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a geometric sequence $a_2 = 6$ and $a_5 = 48$. Find the common ratio $r$.",
        "zh": "等比数列中 $a_2 = 6$，$a_5 = 48$。求公比 $r$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$\\frac{a_5}{a_2} = r^3 = \\frac{48}{6} = 8$, so $r = \\sqrt[3]{8} = 2$. There are $5 - 2 = 3$ ratio steps, not $4$.",
        "zh": "$\\frac{a_5}{a_2} = r^3 = \\frac{48}{6} = 8$，故 $r = \\sqrt[3]{8} = 2$。中间有 $5 - 2 = 3$ 个公比步，不是 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the first 8 terms of the arithmetic series with $a_1 = 4$ and $d = 6$.",
        "zh": "求 $a_1 = 4$、$d = 6$ 的等差数列前 8 项之和。"
      },
      "answer": "200",
      "accept": [
        "200.0",
        "+200"
      ],
      "explanation": {
        "en": "$S_8 = \\frac{8}{2}(2 \\times 4 + 7 \\times 6) = 4(8 + 42) = 200$. Using $8 \\times 6$ instead of $7 \\times 6$ for the last step over-counts.",
        "zh": "$S_8 = \\frac{8}{2}(2 \\times 4 + 7 \\times 6) = 4(8 + 42) = 200$。若末步用 $8 \\times 6$ 而非 $7 \\times 6$ 会多算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the infinite geometric series $0.9 + 0.09 + 0.009 + \\cdots$",
        "zh": "求无穷等比数列 $0.9 + 0.09 + 0.009 + \\cdots$ 的和。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00",
        "+1"
      ],
      "explanation": {
        "en": "With $a_1 = 0.9$ and $r = 0.1$, $S = \\frac{0.9}{1 - 0.1} = \\frac{0.9}{0.9} = 1$. This is why $0.\\overline{9} = 1$; stopping at any finite term underestimates the true sum.",
        "zh": "其中 $a_1 = 0.9$，$r = 0.1$，$S = \\frac{0.9}{1 - 0.1} = \\frac{0.9}{0.9} = 1$。这正是 $0.\\overline{9} = 1$ 的原因；停在任何有限项都会低估真正的和。"
      }
    }
  ],
  "sequences-series-combinatorics/binomial-theorem-combinatorics": [
    {
      "type": "mc",
      "question": {
        "en": "A menu offers 3 shirts and 4 pairs of pants. How many different shirt-and-pants outfits are possible?",
        "zh": "有 3 件衬衫和 4 条裤子。可以搭配出多少种不同的“衬衫加裤子”组合？"
      },
      "choices": [
        "12",
        "7",
        "34",
        "81"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the fundamental counting principle, multiply the choices: $3 \\times 4 = 12$. Adding $3 + 4 = 7$ counts single items, not paired outfits.",
        "zh": "根据乘法计数原理，把选择数相乘：$3 \\times 4 = 12$。若相加 $3 + 4 = 7$，那是单件数量，不是搭配数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the permutation $P(5, 2)$ (arrangements of 2 items from 5).",
        "zh": "求排列数 $P(5, 2)$（从 5 个中取 2 个排列）。"
      },
      "choices": [
        "10",
        "20",
        "120",
        "25"
      ],
      "answer": 1,
      "explanation": {
        "en": "$P(5,2) = 5 \\times 4 = 20$. Getting $10$ comes from the combination $C(5,2)$, which ignores order; permutations count arrangements, so order matters.",
        "zh": "$P(5,2) = 5 \\times 4 = 20$。得到 $10$ 是算成了组合 $C(5,2)$，那忽略了顺序；排列要计顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the combination $C(6, 2)$ (ways to choose 2 from 6).",
        "zh": "求组合数 $C(6, 2)$（从 6 个中取 2 个）。"
      },
      "choices": [
        "36",
        "30",
        "15",
        "12"
      ],
      "answer": 2,
      "explanation": {
        "en": "$C(6,2) = \\frac{6 \\times 5}{2!} = \\frac{30}{2} = 15$. Forgetting to divide by $2!$ leaves $30$, which is the permutation $P(6,2)$ where order counts.",
        "zh": "$C(6,2) = \\frac{6 \\times 5}{2!} = \\frac{30}{2} = 15$。若忘记除以 $2!$ 会得到 $30$，那是计顺序的排列 $P(6,2)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the expansion of $(a + b)^3$, what is the coefficient of the $a^2 b$ term?",
        "zh": "在 $(a + b)^3$ 的展开式中，$a^2 b$ 项的系数是多少？"
      },
      "choices": [
        "1",
        "2",
        "6",
        "3"
      ],
      "answer": 3,
      "explanation": {
        "en": "The coefficient is $C(3,1) = 3$, since $(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$. The exponent on $b$ selects the binomial coefficient; using $3!$ overshoots to $6$.",
        "zh": "系数为 $C(3,1) = 3$，因为 $(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$。$b$ 的指数决定二项式系数；若用 $3!$ 会多算成 $6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many terms are in the expansion of $(x + y)^7$?",
        "zh": "$(x + y)^7$ 的展开式共有多少项？"
      },
      "choices": [
        "8",
        "7",
        "9",
        "6"
      ],
      "answer": 0,
      "explanation": {
        "en": "An expansion of $(x+y)^n$ has $n + 1$ terms, so $7 + 1 = 8$. Answering $7$ forgets the extra term that comes from the exponent starting at $0$.",
        "zh": "$(x+y)^n$ 的展开式有 $n + 1$ 项，故 $7 + 1 = 8$。若答 $7$ 就忘了指数从 $0$ 开始多出的那一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the value of $C(n, 0)$ for any positive integer $n$?",
        "zh": "对任意正整数 $n$，$C(n, 0)$ 的值是多少？"
      },
      "choices": [
        "0",
        "1",
        "$n$",
        "$n!$"
      ],
      "answer": 1,
      "explanation": {
        "en": "There is exactly one way to choose nothing, so $C(n,0) = 1$ (using $0! = 1$). Answering $0$ confuses 'choosing zero items' with 'zero ways'.",
        "zh": "选出“空集”只有一种方式，故 $C(n,0) = 1$（因 $0! = 1$）。若答 $0$，是把“取 0 个”误当成“0 种方法”。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $5!$ (five factorial).",
        "zh": "求 $5!$（5 的阶乘）。"
      },
      "choices": [
        "20",
        "25",
        "120",
        "60"
      ],
      "answer": 2,
      "explanation": {
        "en": "$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. Stopping at $5 \\times 4 = 20$ multiplies only the top two factors.",
        "zh": "$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$。若停在 $5 \\times 4 = 20$，只乘了前两个因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many distinct arrangements can be made from the 4 different letters M, A, T, H?",
        "zh": "用 4 个不同字母 M、A、T、H 能排出多少种不同的排列？"
      },
      "choices": [
        "12",
        "4",
        "16",
        "24"
      ],
      "answer": 3,
      "explanation": {
        "en": "All 4 letters are distinct, so $4! = 24$. Using $4^2 = 16$ or $4 \\times 3 = 12$ fails to arrange all four positions.",
        "zh": "4 个字母各不相同，故 $4! = 24$。若用 $4^2 = 16$ 或 $4 \\times 3 = 12$，都没有排满四个位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A fair six-sided die is rolled once. What is the probability of rolling an even number?",
        "zh": "掷一次公平的六面骰子。掷出偶数的概率是多少？"
      },
      "choices": [
        "1/2",
        "1/3",
        "1/6",
        "2/3"
      ],
      "answer": 0,
      "explanation": {
        "en": "There are 3 even outcomes ($2, 4, 6$) out of 6, so $\\frac{3}{6} = \\frac{1}{2}$. Counting only one even face gives $\\frac{1}{6}$; probability divides favorable outcomes by all outcomes.",
        "zh": "偶数结果有 3 个（$2, 4, 6$），共 6 个，故 $\\frac{3}{6} = \\frac{1}{2}$。若只数一个偶数面得 $\\frac{1}{6}$；概率是有利结果数除以总结果数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the binomial coefficient $C(8, 3)$.",
        "zh": "求二项式系数 $C(8, 3)$。"
      },
      "choices": [
        "24",
        "56",
        "336",
        "112"
      ],
      "answer": 1,
      "explanation": {
        "en": "$C(8,3) = \\frac{8 \\times 7 \\times 6}{3!} = \\frac{336}{6} = 56$. Leaving off the division by $3!$ gives $336$, the permutation $P(8,3)$.",
        "zh": "$C(8,3) = \\frac{8 \\times 7 \\times 6}{3!} = \\frac{336}{6} = 56$。若不除以 $3!$ 会得到 $336$，即排列 $P(8,3)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the expansion of $(x + 2)^4$, what is the coefficient of the $x^2$ term?",
        "zh": "在 $(x + 2)^4$ 的展开式中，$x^2$ 项的系数是多少？"
      },
      "choices": [
        "6",
        "12",
        "24",
        "4"
      ],
      "answer": 2,
      "explanation": {
        "en": "The term is $C(4,2)\\,x^2\\,2^2 = 6 \\times 4 = 24$. Using only $C(4,2) = 6$ forgets to raise the constant $2$ to the matching power $2$.",
        "zh": "该项为 $C(4,2)\\,x^2\\,2^2 = 6 \\times 4 = 24$。若只用 $C(4,2) = 6$，就忘了把常数 $2$ 乘方到对应的 $2$ 次。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation should be counted with combinations (where order does NOT matter)?",
        "zh": "下列哪种情形应当用组合来计数（顺序无关）？"
      },
      "choices": [
        "Awarding gold, silver, and bronze medals",
        "Forming a 4-digit PIN code",
        "Seating 5 people in a row",
        "Choosing a 3-person committee from 10 people"
      ],
      "answer": 3,
      "explanation": {
        "en": "A committee is an unordered selection, so combinations apply. Medals, PINs, and seating all depend on order or position, so those use permutations.",
        "zh": "委员会是无序选取，故用组合。奖牌、密码、座位都与顺序或位置有关，因此用排列。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In how many different orders can 4 distinct books be arranged on a shelf?",
        "zh": "4 本不同的书放在书架上，有多少种不同的排列顺序？"
      },
      "answer": "24",
      "accept": [
        "24.0",
        "+24"
      ],
      "explanation": {
        "en": "This is $4! = 4 \\times 3 \\times 2 \\times 1 = 24$. Every position is filled by a distinct book, so all four factors multiply.",
        "zh": "即 $4! = 4 \\times 3 \\times 2 \\times 1 = 24$。每个位置放一本不同的书，四个因子相乘。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the combination $C(10, 3)$.",
        "zh": "求组合数 $C(10, 3)$。"
      },
      "answer": "120",
      "accept": [
        "120.0",
        "+120"
      ],
      "explanation": {
        "en": "$C(10,3) = \\frac{10 \\times 9 \\times 8}{3!} = \\frac{720}{6} = 120$. Skipping the $3!$ divisor would give the permutation $720$.",
        "zh": "$C(10,3) = \\frac{10 \\times 9 \\times 8}{3!} = \\frac{720}{6} = 120$。若不除以 $3!$ 会得到排列数 $720$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the permutation $P(7, 3)$.",
        "zh": "求排列数 $P(7, 3)$。"
      },
      "answer": "210",
      "accept": [
        "210.0",
        "+210"
      ],
      "explanation": {
        "en": "$P(7,3) = 7 \\times 6 \\times 5 = 210$. Dividing by $3!$ here would instead give the combination $C(7,3) = 35$.",
        "zh": "$P(7,3) = 7 \\times 6 \\times 5 = 210$。若在此除以 $3!$ 则得到组合 $C(7,3) = 35$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x + 1)^5$, what is the coefficient of the $x^3$ term?",
        "zh": "在 $(x + 1)^5$ 的展开式中，$x^3$ 项的系数是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "The coefficient is $C(5,3) = C(5,2) = 10$, since the constant $1$ raised to any power stays $1$. The lower index equals the exponent on $x$.",
        "zh": "系数为 $C(5,3) = C(5,2) = 10$，因为常数 $1$ 的任意次幂仍是 $1$。下标等于 $x$ 的指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A bag has 3 red and 5 blue marbles. One marble is drawn at random. What is the probability it is red? Give a decimal.",
        "zh": "袋中有 3 个红球和 5 个蓝球。随机取一个，取到红球的概率是多少？用小数表示。"
      },
      "answer": "0.375",
      "accept": [
        "3/8",
        ".375",
        "0.3750"
      ],
      "explanation": {
        "en": "There are $3 + 5 = 8$ marbles total, so $P(\\text{red}) = \\frac{3}{8} = 0.375$. Using $\\frac{3}{5}$ compares red to blue instead of red to the whole bag.",
        "zh": "总共有 $3 + 5 = 8$ 个球，故 $P(\\text{红}) = \\frac{3}{8} = 0.375$。若用 $\\frac{3}{5}$，是把红球与蓝球相比，而非与全部相比。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many terms are in the expansion of $(2x - 3y)^9$?",
        "zh": "$(2x - 3y)^9$ 的展开式共有多少项？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "The number of terms is $n + 1 = 9 + 1 = 10$; the coefficients and signs do not change the count. Answering $9$ forgets the term where an exponent is $0$.",
        "zh": "项数为 $n + 1 = 9 + 1 = 10$；系数和正负号不影响项数。若答 $9$ 就忘了某个指数为 $0$ 的那一项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x + y)^6$, what is the coefficient of the $x^4 y^2$ term?",
        "zh": "在 $(x + y)^6$ 的展开式中，$x^4 y^2$ 项的系数是多少？"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "+15"
      ],
      "explanation": {
        "en": "The coefficient is $C(6,2) = 15$, chosen by the exponent on $y$ (or equivalently $C(6,4)$). The two exponents $4 + 2$ must add to $6$.",
        "zh": "系数为 $C(6,2) = 15$，由 $y$ 的指数决定（也等于 $C(6,4)$）。两个指数 $4 + 2$ 必须等于 $6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the sum of all the coefficients in the expansion of $(x + 1)^4$?",
        "zh": "$(x + 1)^4$ 展开式中所有系数之和是多少？"
      },
      "answer": "16",
      "accept": [
        "16.0",
        "+16"
      ],
      "explanation": {
        "en": "Substitute $x = 1$: $(1 + 1)^4 = 2^4 = 16$. This shortcut works because setting each variable to $1$ adds up every coefficient at once.",
        "zh": "代入 $x = 1$：$(1 + 1)^4 = 2^4 = 16$。此技巧成立是因为把变量都设为 $1$ 就一次性加起了所有系数。"
      }
    }
  ],
  "intro-to-limits/introduction-to-limits": [
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 3}(2x + 1)$ by direct substitution.",
        "zh": "用直接代入法求 $\\lim_{x \\to 3}(2x + 1)$。"
      },
      "choices": [
        "$7$",
        "$3$",
        "$9$",
        "$5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The polynomial $2x + 1$ is continuous everywhere, so substitute $x = 3$: $2(3) + 1 = 7$. A common slip is to substitute into only the coefficient and forget the $+1$, or to plug $x = 3$ into $2x$ alone.",
        "zh": "多项式 $2x + 1$ 处处连续，直接代入 $x = 3$：$2(3) + 1 = 7$。常见错误是只代入 $2x$ 而漏掉 $+1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 2}\\dfrac{x^2 - 4}{x - 2}$.",
        "zh": "求 $\\lim_{x \\to 2}\\dfrac{x^2 - 4}{x - 2}$。"
      },
      "choices": [
        "$0$",
        "$4$",
        "$2$",
        "Does not exist"
      ],
      "answer": 1,
      "explanation": {
        "en": "Direct substitution gives $\\frac{0}{0}$, so factor: $\\frac{(x-2)(x+2)}{x-2} = x + 2$, then substitute $x = 2$ to get $4$. It is tempting to declare the limit undefined because the denominator is $0$ at $x = 2$, but the removable factor cancels first.",
        "zh": "直接代入得 $\\frac{0}{0}$，先因式分解：$\\frac{(x-2)(x+2)}{x-2} = x + 2$，再代入 $x = 2$ 得 $4$。容易因分母为 $0$ 而误判极限不存在，但可约因子先消去了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 1}\\dfrac{x^2 - 1}{x - 1}$.",
        "zh": "求 $\\lim_{x \\to 1}\\dfrac{x^2 - 1}{x - 1}$。"
      },
      "choices": [
        "$0$",
        "$1$",
        "$2$",
        "Does not exist"
      ],
      "answer": 2,
      "explanation": {
        "en": "Factor the numerator: $\\frac{(x-1)(x+1)}{x-1} = x + 1$, then substitute $x = 1$ to get $2$. A frequent error is cancelling incorrectly and evaluating $x + 1$ at $x = 0$, or reading the answer as the numerator's value $0$.",
        "zh": "分子因式分解：$\\frac{(x-1)(x+1)}{x-1} = x + 1$，代入 $x = 1$ 得 $2$。常见错误是约分后误在 $x = 0$ 处求值，或误取分子值 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\lim_{x \\to 0}\\dfrac{1}{x}$?",
        "zh": "求 $\\lim_{x \\to 0}\\dfrac{1}{x}$。"
      },
      "choices": [
        "$0$",
        "$1$",
        "$\\infty$",
        "Does not exist"
      ],
      "answer": 3,
      "explanation": {
        "en": "As $x \\to 0^-$ the values go to $-\\infty$, but as $x \\to 0^+$ they go to $+\\infty$. Because the two one-sided limits disagree, the limit does not exist. Answering with a single infinity ignores that the left side heads the opposite direction.",
        "zh": "当 $x \\to 0^-$ 时趋于 $-\\infty$，而 $x \\to 0^+$ 时趋于 $+\\infty$。两个单侧极限不一致，故极限不存在。只写一个无穷大忽略了左侧方向相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\lim_{x \\to a} f(x) = 3$ and $\\lim_{x \\to a} g(x) = 5$, find $\\lim_{x \\to a}[f(x) + g(x)]$.",
        "zh": "若 $\\lim_{x \\to a} f(x) = 3$ 且 $\\lim_{x \\to a} g(x) = 5$，求 $\\lim_{x \\to a}[f(x) + g(x)]$。"
      },
      "choices": [
        "$8$",
        "$2$",
        "$-2$",
        "$15$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The sum law says the limit of a sum is the sum of the limits: $3 + 5 = 8$. Multiplying the two limits to get $15$ confuses the sum law with the product law.",
        "zh": "和的极限法则：和的极限等于极限之和，$3 + 5 = 8$。把两个极限相乘得 $15$ 是混淆了和法则与积法则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\lim_{x \\to a} f(x) = 3$ and $\\lim_{x \\to a} g(x) = 5$, find $\\lim_{x \\to a}[f(x)\\,g(x)]$.",
        "zh": "若 $\\lim_{x \\to a} f(x) = 3$ 且 $\\lim_{x \\to a} g(x) = 5$，求 $\\lim_{x \\to a}[f(x)\\,g(x)]$。"
      },
      "choices": [
        "$8$",
        "$15$",
        "$2$",
        "$\\frac{3}{5}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The product law gives the product of the limits: $3 \\times 5 = 15$. Adding them to get $8$ applies the sum law to a product instead.",
        "zh": "积的极限法则：极限之积，$3 \\times 5 = 15$。相加得 $8$ 是把和法则用在了乘积上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A function $f$ is continuous at $x = a$ when which condition holds?",
        "zh": "函数 $f$ 在 $x = a$ 处连续的条件是什么？"
      },
      "choices": [
        "$f(a)$ is defined only",
        "$\\lim_{x \\to a} f(x)$ exists only",
        "$\\lim_{x \\to a} f(x) = f(a)$",
        "$f(a) = 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Continuity at $a$ requires that $f(a)$ is defined, the limit exists, AND they are equal: $\\lim_{x \\to a} f(x) = f(a)$. Having only the function value or only the limit is not enough — a removable hole satisfies one but not both.",
        "zh": "在 $a$ 处连续要求 $f(a)$ 有定义、极限存在，且二者相等：$\\lim_{x \\to a} f(x) = f(a)$。只有函数值或只有极限都不够——可去间断点满足其一却不满足全部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = \\begin{cases} x + 1 & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases}$, find $\\lim_{x \\to 2^-} f(x)$.",
        "zh": "对 $f(x) = \\begin{cases} x + 1 & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases}$，求 $\\lim_{x \\to 2^-} f(x)$。"
      },
      "choices": [
        "Does not exist",
        "$4$",
        "$5$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The left-hand limit uses the piece for $x < 2$, namely $x + 1$, giving $2 + 1 = 3$. Using the $x^2$ piece to get $4$ mistakenly applies the rule for $x \\ge 2$ to the left side.",
        "zh": "左极限用 $x < 2$ 的分段式 $x + 1$，得 $2 + 1 = 3$。用 $x^2$ 得 $4$ 是错误地把 $x \\ge 2$ 的规则用在了左侧。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the table, estimate $\\lim_{x \\to 4} g(x)$: $g(3.9)=6.9,\\ g(3.99)=6.99,\\ g(4.01)=7.01,\\ g(4.1)=7.1$.",
        "zh": "根据表格估计 $\\lim_{x \\to 4} g(x)$：$g(3.9)=6.9,\\ g(3.99)=6.99,\\ g(4.01)=7.01,\\ g(4.1)=7.1$。"
      },
      "choices": [
        "$7$",
        "$6.99$",
        "$4$",
        "Does not exist"
      ],
      "answer": 0,
      "explanation": {
        "en": "From both sides the values close in on $7$ as $x$ approaches $4$, so the limit is $7$. Reading off a single nearby table value like $6.99$ instead of the value being approached gives a slightly off answer.",
        "zh": "两侧的值在 $x$ 趋于 $4$ 时都逼近 $7$，故极限为 $7$。直接抄某个邻近表值如 $6.99$ 而非逼近值会略有偏差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 4}\\sqrt{x}$.",
        "zh": "求 $\\lim_{x \\to 4}\\sqrt{x}$。"
      },
      "choices": [
        "$16$",
        "$2$",
        "$8$",
        "$\\sqrt{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The square-root function is continuous for $x > 0$, so substitute directly: $\\sqrt{4} = 2$. Squaring instead of taking the root gives $16$.",
        "zh": "平方根函数在 $x > 0$ 时连续，直接代入：$\\sqrt{4} = 2$。误取平方而非开方会得到 $16$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 2}\\dfrac{x - 2}{x^2 - 4}$.",
        "zh": "求 $\\lim_{x \\to 2}\\dfrac{x - 2}{x^2 - 4}$。"
      },
      "choices": [
        "$0$",
        "$4$",
        "$\\frac{1}{4}$",
        "Does not exist"
      ],
      "answer": 2,
      "explanation": {
        "en": "Factor the denominator: $\\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2}$, then substitute $x = 2$ to get $\\frac{1}{4}$. Treating the $\\frac{0}{0}$ form as automatically $0$ ignores the surviving $\\frac{1}{x+2}$.",
        "zh": "分母因式分解：$\\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2}$，代入 $x = 2$ 得 $\\frac{1}{4}$。把 $\\frac{0}{0}$ 当作自动为 $0$ 忽略了留下的 $\\frac{1}{x+2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which describes the behavior of $\\lim_{x \\to 3}\\dfrac{1}{(x-3)^2}$?",
        "zh": "$\\lim_{x \\to 3}\\dfrac{1}{(x-3)^2}$ 的行为是？"
      },
      "choices": [
        "$0$",
        "$\\frac{1}{3}$",
        "$-\\infty$",
        "$+\\infty$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Because $(x-3)^2$ is positive and shrinks toward $0$ from both sides, the fraction grows without bound to $+\\infty$. The squared denominator keeps both sides positive, so $-\\infty$ (which would need a sign change) is wrong.",
        "zh": "由于 $(x-3)^2$ 恒正且两侧都趋于 $0$，分式无界增大至 $+\\infty$。平方分母使两侧都为正，故需要变号的 $-\\infty$ 不对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 5}(3x - 2)$.",
        "zh": "求 $\\lim_{x \\to 5}(3x - 2)$。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "The linear function is continuous, so substitute $x = 5$: $3(5) - 2 = 13$.",
        "zh": "线性函数连续，代入 $x = 5$：$3(5) - 2 = 13$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 3}\\dfrac{x^2 - 9}{x - 3}$.",
        "zh": "求 $\\lim_{x \\to 3}\\dfrac{x^2 - 9}{x - 3}$。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$, then substitute $x = 3$ to get $6$. Do not stop at the $\\frac{0}{0}$ form — the removable factor cancels.",
        "zh": "因式分解：$\\frac{(x-3)(x+3)}{x-3} = x + 3$，代入 $x = 3$ 得 $6$。不要停在 $\\frac{0}{0}$——可去因子可约。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0}\\dfrac{x^2 + 3x}{x}$.",
        "zh": "求 $\\lim_{x \\to 0}\\dfrac{x^2 + 3x}{x}$。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Factor out $x$: $\\frac{x(x + 3)}{x} = x + 3$, then substitute $x = 0$ to get $3$. Cancelling $x$ leaves $x + 3$, not just $3x$.",
        "zh": "提取 $x$：$\\frac{x(x + 3)}{x} = x + 3$，代入 $x = 0$ 得 $3$。约去 $x$ 后是 $x + 3$，而非 $3x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 2}\\dfrac{x^3 - 8}{x - 2}$.",
        "zh": "求 $\\lim_{x \\to 2}\\dfrac{x^3 - 8}{x - 2}$。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "Use the difference of cubes: $\\frac{(x-2)(x^2 + 2x + 4)}{x-2} = x^2 + 2x + 4$, then substitute $x = 2$: $4 + 4 + 4 = 12$.",
        "zh": "用立方差公式：$\\frac{(x-2)(x^2 + 2x + 4)}{x-2} = x^2 + 2x + 4$，代入 $x = 2$：$4 + 4 + 4 = 12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 4}\\dfrac{\\sqrt{x} - 2}{x - 4}$. (Give a decimal or fraction.)",
        "zh": "求 $\\lim_{x \\to 4}\\dfrac{\\sqrt{x} - 2}{x - 4}$。（用小数或分数作答。）"
      },
      "answer": "1/4",
      "accept": [
        "0.25",
        ".25",
        "0.250"
      ],
      "explanation": {
        "en": "Rationalize or factor $x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$, leaving $\\frac{1}{\\sqrt{x} + 2}$, then substitute $x = 4$: $\\frac{1}{2 + 2} = \\frac{1}{4}$.",
        "zh": "分母有理化或分解 $x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$，剩 $\\frac{1}{\\sqrt{x} + 2}$，代入 $x = 4$：$\\frac{1}{2 + 2} = \\frac{1}{4}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = \\begin{cases} 2x & x < 1 \\\\ x + 5 & x \\ge 1 \\end{cases}$, find $\\lim_{x \\to 1^+} f(x)$.",
        "zh": "对 $f(x) = \\begin{cases} 2x & x < 1 \\\\ x + 5 & x \\ge 1 \\end{cases}$，求 $\\lim_{x \\to 1^+} f(x)$。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "The right-hand limit uses the piece for $x \\ge 1$, namely $x + 5$, giving $1 + 5 = 6$. The left piece $2x$ would give $2$, but that governs $x \\to 1^-$, not $1^+$.",
        "zh": "右极限用 $x \\ge 1$ 的分段式 $x + 5$，得 $1 + 5 = 6$。左段 $2x$ 给出 $2$，但那对应 $x \\to 1^-$，非 $1^+$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the term: A function is called ______ at a point if its graph has no break, jump, or hole there. (One word)",
        "zh": "填空：若函数图像在某点没有断裂、跳跃或空洞，则称函数在该点______。（一个词）"
      },
      "answer": "continuous",
      "accept": [
        "Continuous",
        "continuity",
        "连续",
        "连续的",
        "continua"
      ],
      "explanation": {
        "en": "A function with no break, jump, or hole at a point is continuous there, meaning $\\lim_{x \\to a} f(x) = f(a)$.",
        "zh": "在某点没有断裂、跳跃或空洞的函数在该点连续，即 $\\lim_{x \\to a} f(x) = f(a)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to -1}\\dfrac{x^2 + 2x + 1}{x + 1}$.",
        "zh": "求 $\\lim_{x \\to -1}\\dfrac{x^2 + 2x + 1}{x + 1}$。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "-0",
        "+0"
      ],
      "explanation": {
        "en": "The numerator is a perfect square: $\\frac{(x+1)^2}{x+1} = x + 1$, then substitute $x = -1$ to get $0$. The $\\frac{0}{0}$ form resolves after cancelling one factor of $x + 1$.",
        "zh": "分子是完全平方：$\\frac{(x+1)^2}{x+1} = x + 1$，代入 $x = -1$ 得 $0$。约去一个 $x + 1$ 后 $\\frac{0}{0}$ 即可求值。"
      }
    }
  ]
};
