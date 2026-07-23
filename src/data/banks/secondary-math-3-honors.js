export default {
  "unit-1-functions-inverses/combining-and-composing-functions": [
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=2x+1$ and $g(x)=x-3$, find $(f+g)(x)$.",
        "zh": "若 $f(x)=2x+1$，$g(x)=x-3$，求 $(f+g)(x)$。"
      },
      "choices": [
        "$3x-2$",
        "$3x+4$",
        "$x+4$",
        "$2x-2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add the two rules: $(2x+1)+(x-3)=3x-2$. Combine like terms carefully; a common slip is adding the $x$ terms but forgetting that $1+(-3)=-2$, not $+4$.",
        "zh": "把两个表达式相加：$(2x+1)+(x-3)=3x-2$。合并同类项时要小心；常见错误是把 $x$ 项相加却误以为 $1+(-3)=+4$，其实是 $-2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2$ and $g(x)=x+2$, find $(f\\cdot g)(x)$.",
        "zh": "若 $f(x)=x^2$，$g(x)=x+2$，求 $(f\\cdot g)(x)$。"
      },
      "choices": [
        "$x^2+2$",
        "$x^3+2x^2$",
        "$x^2+2x$",
        "$2x^3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply the rules: $x^2\\cdot(x+2)=x^3+2x^2$. Distribute $x^2$ to BOTH terms; only distributing to the first term gives the wrong $x^2+2x$ type of answer.",
        "zh": "把两个表达式相乘：$x^2\\cdot(x+2)=x^3+2x^2$。要把 $x^2$ 分配给括号里的每一项；只乘第一项会得到错误的 $x^2+2x$ 形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x)=3x$ and $g(x)=x+4$. Find the composition $(f\\circ g)(x)$.",
        "zh": "设 $f(x)=3x$，$g(x)=x+4$，求复合函数 $(f\\circ g)(x)$。"
      },
      "choices": [
        "$3x+4$",
        "$x+12$",
        "$3x+12$",
        "$3x^2+4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(f\\circ g)(x)=f(g(x))=3(x+4)=3x+12$. Substitute $g$ into $f$ FIRST, then multiply by 3; multiplying only the $x$ and leaving $+4$ alone gives the wrong $3x+4$.",
        "zh": "$(f\\circ g)(x)=f(g(x))=3(x+4)=3x+12$。先把 $g$ 代入 $f$，再整体乘以 3；只乘 $x$ 而不乘 $+4$ 会得到错误的 $3x+4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using $f(x)=3x$ and $g(x)=x+4$, find $(g\\circ f)(x)$.",
        "zh": "用 $f(x)=3x$ 和 $g(x)=x+4$，求 $(g\\circ f)(x)$。"
      },
      "choices": [
        "$3x+12$",
        "$4x$",
        "$x+4$",
        "$3x+4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(g\\circ f)(x)=g(f(x))=(3x)+4=3x+4$. Order matters: here $f$ acts first, then $g$ adds 4. Reversing the order (as in $f\\circ g$) wrongly gives $3x+12$.",
        "zh": "$(g\\circ f)(x)=g(f(x))=(3x)+4=3x+4$。顺序很重要：这里先作用 $f$，再由 $g$ 加 4。若把顺序弄反（当成 $f\\circ g$）会错得 $3x+12$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=\\sqrt{x}$ and $g(x)=x-5$, what is the domain of $(f\\circ g)(x)$?",
        "zh": "若 $f(x)=\\sqrt{x}$，$g(x)=x-5$，则 $(f\\circ g)(x)$ 的定义域是什么？"
      },
      "choices": [
        "$x\\ge 5$",
        "$x\\le 5$",
        "all real numbers",
        "$x\\ge 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$(f\\circ g)(x)=\\sqrt{x-5}$, which needs $x-5\\ge 0$, so $x\\ge 5$. Applying the outer square-root's requirement to $x$ alone (getting $x\\ge 0$) ignores that $g$ shifts the input.",
        "zh": "$(f\\circ g)(x)=\\sqrt{x-5}$，需要 $x-5\\ge 0$，即 $x\\ge 5$。若只对 $x$ 套用根号的要求（得 $x\\ge 0$），就忽略了 $g$ 对输入的平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which decomposition expresses $h(x)=(x+1)^3$ as $f(g(x))$?",
        "zh": "下列哪种分解把 $h(x)=(x+1)^3$ 写成 $f(g(x))$？"
      },
      "choices": [
        "$f(x)=x+1,\\ g(x)=x^3$",
        "$f(x)=x^3,\\ g(x)=x+1$",
        "$f(x)=3x,\\ g(x)=x+1$",
        "$f(x)=x^3+1,\\ g(x)=x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The inner function is what you do first, $g(x)=x+1$, and the outer is the cubing, $f(x)=x^3$, so $f(g(x))=(x+1)^3$. Swapping inner and outer (cubing first, then adding 1) would give $x^3+1$, a different function.",
        "zh": "先做的是内函数 $g(x)=x+1$，外层是立方 $f(x)=x^3$，于是 $f(g(x))=(x+1)^3$。若把内外互换（先立方再加 1）会得到 $x^3+1$，是另一个函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2+3$ and $g(x)=2x-1$, find $(f-g)(x)$.",
        "zh": "若 $f(x)=x^2+3$，$g(x)=2x-1$，求 $(f-g)(x)$。"
      },
      "choices": [
        "$x^2+2x+2$",
        "$x^2-2x+2$",
        "$x^2-2x+4$",
        "$x^2+2x-4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(f-g)(x)=(x^2+3)-(2x-1)=x^2-2x+4$. Distribute the subtraction to BOTH terms of $g$: $-(-1)=+1$, giving $3+1=4$. Forgetting to flip the sign of $-1$ yields the wrong $+2$ constant.",
        "zh": "$(f-g)(x)=(x^2+3)-(2x-1)=x^2-2x+4$。减号要分配给 $g$ 的每一项：$-(-1)=+1$，所以 $3+1=4$。忘记给 $-1$ 变号就会错得常数项 $+2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x)=x^2-9$ and $g(x)=x+3$, simplify $(f/g)(x)$ (with $x\\neq -3$).",
        "zh": "对 $f(x)=x^2-9$，$g(x)=x+3$，化简 $(f/g)(x)$（$x\\neq -3$）。"
      },
      "choices": [
        "$x^2-6$",
        "$x+3$",
        "$x-9$",
        "$x-3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\frac{x^2-9}{x+3}=\\frac{(x-3)(x+3)}{x+3}=x-3$. Factor the difference of squares first; trying to cancel term-by-term without factoring (e.g. treating it as $x-3$ from $-9$ and $+3$ separately) is not valid algebra even though the result matches here.",
        "zh": "$\\frac{x^2-9}{x+3}=\\frac{(x-3)(x+3)}{x+3}=x-3$。先用平方差公式分解；不分解就逐项相消（例如把 $-9$ 与 $+3$ 单独处理）在代数上是不成立的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2$ and $g(x)=x+1$, evaluate $(f\\circ g)(2)$.",
        "zh": "若 $f(x)=x^2$，$g(x)=x+1$，求 $(f\\circ g)(2)$。"
      },
      "choices": [
        "$9$",
        "$7$",
        "$5$",
        "$4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "First $g(2)=3$, then $f(3)=3^2=9$. Do the inner function first; squaring the input 2 before adding 1 (getting $4+1=5$) applies the functions in the wrong order.",
        "zh": "先算 $g(2)=3$，再算 $f(3)=3^2=9$。要先做内函数；若先把 2 平方再加 1（得 $4+1=5$）就把函数顺序弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=\\frac{1}{x}$ and $g(x)=x-2$, what is the domain of $(f\\circ g)(x)$?",
        "zh": "若 $f(x)=\\frac{1}{x}$，$g(x)=x-2$，则 $(f\\circ g)(x)$ 的定义域是什么？"
      },
      "choices": [
        "all real numbers",
        "$x\\neq 2$",
        "$x\\neq 0$",
        "$x\\neq -2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$(f\\circ g)(x)=\\frac{1}{x-2}$, undefined when $x-2=0$, i.e. $x=2$. The excluded value comes from the shifted input, not from $x=0$ (which would apply to $f$ alone).",
        "zh": "$(f\\circ g)(x)=\\frac{1}{x-2}$，当 $x-2=0$ 即 $x=2$ 时无定义。被排除的值来自平移后的输入，而不是只对 $f$ 才成立的 $x=0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x+2$ and $g(x)=x-1$, find $(f\\cdot g)(3)$.",
        "zh": "若 $f(x)=x+2$，$g(x)=x-1$，求 $(f\\cdot g)(3)$。"
      },
      "choices": [
        "$4$",
        "$7$",
        "$10$",
        "$6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$f(3)=5$ and $g(3)=2$, so $(f\\cdot g)(3)=5\\cdot 2=10$. Evaluate each function at 3 and multiply the outputs; adding them instead (getting $5+2=7$) is the wrong operation.",
        "zh": "$f(3)=5$，$g(3)=2$，所以 $(f\\cdot g)(3)=5\\cdot 2=10$。要分别在 3 处求值再把输出相乘；若改为相加（得 $5+2=7$）就用错了运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2+1$ and $g(x)=\\sqrt{x}$, simplify $(f\\circ g)(x)$ and give its domain.",
        "zh": "若 $f(x)=x^2+1$，$g(x)=\\sqrt{x}$，化简 $(f\\circ g)(x)$ 并给出定义域。"
      },
      "choices": [
        "$x+1$, all real numbers",
        "$\\sqrt{x^2+1}$, all real numbers",
        "$x^2+1$, $x\\ge 0$",
        "$x+1$, $x\\ge 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(f\\circ g)(x)=(\\sqrt{x})^2+1=x+1$, but the inner $\\sqrt{x}$ still requires $x\\ge 0$. The rule simplifies to $x+1$, yet you must keep the domain restriction from $g$; dropping it (claiming all reals) is the common error.",
        "zh": "$(f\\circ g)(x)=(\\sqrt{x})^2+1=x+1$，但内层 $\\sqrt{x}$ 仍要求 $x\\ge 0$。表达式虽化简为 $x+1$，却必须保留 $g$ 带来的定义域限制；丢掉它（说成全体实数）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=2x+3$ and $g(x)=x^2$, find $(f+g)(1)$.",
        "zh": "若 $f(x)=2x+3$，$g(x)=x^2$，求 $(f+g)(1)$。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "$f(1)=5$ and $g(1)=1$, so $(f+g)(1)=5+1=6$. Add the two outputs at $x=1$.",
        "zh": "$f(1)=5$，$g(1)=1$，所以 $(f+g)(1)=5+1=6$。在 $x=1$ 处把两个输出相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x)=x+7$ and $g(x)=2x$. Evaluate $(f\\circ g)(4)$.",
        "zh": "设 $f(x)=x+7$，$g(x)=2x$，求 $(f\\circ g)(4)$。"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "+15"
      ],
      "explanation": {
        "en": "$(f\\circ g)(x)=2x+7$; at $x=4$ this is $8+7=15$. Inner first: $g(4)=8$, then $f(8)=15$.",
        "zh": "$(f\\circ g)(x)=2x+7$；当 $x=4$ 时为 $8+7=15$。先算内层 $g(4)=8$，再算 $f(8)=15$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x-4$ and $g(x)=3x$, find $(g\\circ f)(5)$.",
        "zh": "若 $f(x)=x-4$，$g(x)=3x$，求 $(g\\circ f)(5)$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$f(5)=1$, then $g(1)=3\\cdot 1=3$. Apply $f$ first (inner), then $g$.",
        "zh": "$f(5)=1$，再算 $g(1)=3\\cdot 1=3$。先作用内层 $f$，再作用 $g$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x^2$ and $g(x)=x+3$, find $(f\\cdot g)(2)$.",
        "zh": "若 $f(x)=x^2$，$g(x)=x+3$，求 $(f\\cdot g)(2)$。"
      },
      "answer": "20",
      "accept": [
        "20",
        "20.0",
        "+20"
      ],
      "explanation": {
        "en": "$f(2)=4$ and $g(2)=5$, so the product is $4\\cdot 5=20$.",
        "zh": "$f(2)=4$，$g(2)=5$，乘积为 $4\\cdot 5=20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=\\sqrt{x}$ and $g(x)=x-9$, what is the smallest $x$ in the domain of $(f\\circ g)(x)$?",
        "zh": "若 $f(x)=\\sqrt{x}$，$g(x)=x-9$，$(f\\circ g)(x)$ 定义域中最小的 $x$ 是多少？"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "$(f\\circ g)(x)=\\sqrt{x-9}$ needs $x-9\\ge 0$, so the smallest allowed $x$ is $9$.",
        "zh": "$(f\\circ g)(x)=\\sqrt{x-9}$ 需要 $x-9\\ge 0$，所以允许的最小 $x$ 是 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=\\frac{1}{x-3}$ and $g(x)=x+3$, which single value of $x$ must be excluded from $(f\\circ g)(x)$?",
        "zh": "若 $f(x)=\\frac{1}{x-3}$，$g(x)=x+3$，$(f\\circ g)(x)$ 中必须排除哪个 $x$ 值？"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0",
        "x=0"
      ],
      "explanation": {
        "en": "$(f\\circ g)(x)=\\frac{1}{(x+3)-3}=\\frac{1}{x}$, undefined at $x=0$.",
        "zh": "$(f\\circ g)(x)=\\frac{1}{(x+3)-3}=\\frac{1}{x}$，在 $x=0$ 处无定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=5x$ and $g(x)=x-2$, find $(f-g)(4)$.",
        "zh": "若 $f(x)=5x$，$g(x)=x-2$，求 $(f-g)(4)$。"
      },
      "answer": "18",
      "accept": [
        "18",
        "18.0",
        "+18"
      ],
      "explanation": {
        "en": "$f(4)=20$ and $g(4)=2$, so $(f-g)(4)=20-2=18$.",
        "zh": "$f(4)=20$，$g(4)=2$，所以 $(f-g)(4)=20-2=18$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=2x$, find $(f\\circ f)(3)$.",
        "zh": "若 $f(x)=2x$，求 $(f\\circ f)(3)$。"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "$f(3)=6$, then $f(6)=12$. Applying $f$ twice doubles twice: $3\\to 6\\to 12$.",
        "zh": "$f(3)=6$，再算 $f(6)=12$。两次作用 $f$ 就是翻倍两次：$3\\to 6\\to 12$。"
      }
    }
  ],
  "unit-1-functions-inverses/inverse-functions": [
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=x+5$?",
        "zh": "$f(x)=x+5$ 的反函数是什么？"
      },
      "choices": [
        "$f^{-1}(x)=x-5$",
        "$f^{-1}(x)=5-x$",
        "$f^{-1}(x)=\\frac{x}{5}$",
        "$f^{-1}(x)=x+5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Swap $x$ and $y$ in $y=x+5$ to get $x=y+5$, then solve: $y=x-5$. The inverse undoes the operation, so adding 5 is reversed by subtracting 5; negating to $5-x$ instead of subtracting is the common mistake.",
        "zh": "在 $y=x+5$ 中交换 $x$ 与 $y$ 得 $x=y+5$，解得 $y=x-5$。反函数抵消原运算，所以加 5 的逆是减 5；写成取负 $5-x$ 而不是减法是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the inverse of $f(x)=2x$.",
        "zh": "求 $f(x)=2x$ 的反函数。"
      },
      "choices": [
        "$f^{-1}(x)=2x$",
        "$f^{-1}(x)=\\frac{x}{2}$",
        "$f^{-1}(x)=x-2$",
        "$f^{-1}(x)=\\frac{2}{x}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $y=2x$, swap to $x=2y$ and solve $y=\\frac{x}{2}$. Multiplying by 2 is undone by dividing by 2, not by taking a reciprocal $\\frac{2}{x}$.",
        "zh": "由 $y=2x$ 交换得 $x=2y$，解得 $y=\\frac{x}{2}$。乘以 2 的逆是除以 2，而不是取倒数 $\\frac{2}{x}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=3x-6$?",
        "zh": "$f(x)=3x-6$ 的反函数是什么？"
      },
      "choices": [
        "$f^{-1}(x)=\\frac{x-6}{3}$",
        "$f^{-1}(x)=3x+6$",
        "$f^{-1}(x)=\\frac{x+6}{3}$",
        "$f^{-1}(x)=\\frac{x}{3}-6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Swap: $x=3y-6$, so $x+6=3y$ and $y=\\frac{x+6}{3}$. Add 6 to BOTH sides before dividing by 3; dividing first or keeping the $-6$ gives $\\frac{x-6}{3}$, which is wrong.",
        "zh": "交换得 $x=3y-6$，则 $x+6=3y$，$y=\\frac{x+6}{3}$。要先两边加 6 再除以 3；先除或保留 $-6$ 会得到错误的 $\\frac{x-6}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $f^{-1}$ is the reflection of the graph of $f$ across which line?",
        "zh": "$f^{-1}$ 的图像是 $f$ 的图像关于哪条直线的反射？"
      },
      "choices": [
        "the $x$-axis",
        "the $y$-axis",
        "$y=-x$",
        "$y=x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Because inverses swap the roles of $x$ and $y$, the graphs are mirror images across the line $y=x$. Reflecting across an axis instead only negates one coordinate and does not produce the inverse.",
        "zh": "因为反函数把 $x$ 与 $y$ 的角色互换，所以两图像关于直线 $y=x$ 互为镜像。若关于某条坐标轴反射，只会把一个坐标取负，得不到反函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which test tells you whether a function is one-to-one (and therefore has an inverse function)?",
        "zh": "哪种检验能判断一个函数是否一一对应（因而有反函数）？"
      },
      "choices": [
        "the horizontal line test",
        "the vertical line test",
        "the slope test",
        "the discriminant test"
      ],
      "answer": 0,
      "explanation": {
        "en": "A function is one-to-one if no horizontal line crosses its graph more than once — the horizontal line test. The vertical line test only checks whether a relation is a function at all, not whether it is one-to-one.",
        "zh": "若没有任何水平线与图像相交超过一次，则函数是一一对应的——这就是水平线检验。垂直线检验只判断一个关系是否为函数，而非是否一一对应。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f$ has an inverse $f^{-1}$, what does $(f\\circ f^{-1})(x)$ equal?",
        "zh": "若 $f$ 有反函数 $f^{-1}$，则 $(f\\circ f^{-1})(x)$ 等于什么？"
      },
      "choices": [
        "$1$",
        "$x$",
        "$0$",
        "$\\frac{1}{x}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Composing a function with its inverse returns the input unchanged: $(f\\circ f^{-1})(x)=x$. Treating $f^{-1}$ as a reciprocal $\\frac{1}{f}$ would wrongly suggest $1$ or $\\frac{1}{x}$; the $-1$ here means inverse, not exponent.",
        "zh": "把函数与其反函数复合会原样返回输入：$(f\\circ f^{-1})(x)=x$。把 $f^{-1}$ 当作倒数 $\\frac{1}{f}$ 会错误地得到 $1$ 或 $\\frac{1}{x}$；这里的 $-1$ 表示反函数，不是指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the inverse of $f(x)=x^3$.",
        "zh": "求 $f(x)=x^3$ 的反函数。"
      },
      "choices": [
        "$f^{-1}(x)=\\frac{1}{x^3}$",
        "$f^{-1}(x)=3x$",
        "$f^{-1}(x)=\\sqrt[3]{x}$",
        "$f^{-1}(x)=x^{-3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Swap $y=x^3$ to $x=y^3$ and solve $y=\\sqrt[3]{x}$. The inverse of cubing is the cube root, not the reciprocal $x^{-3}$; a negative exponent means reciprocal, which is a different operation.",
        "zh": "把 $y=x^3$ 交换为 $x=y^3$，解得 $y=\\sqrt[3]{x}$。立方的逆是立方根，而不是倒数 $x^{-3}$；负指数表示倒数，是另一种运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=\\frac{x-1}{2}$?",
        "zh": "$f(x)=\\frac{x-1}{2}$ 的反函数是什么？"
      },
      "choices": [
        "$f^{-1}(x)=\\frac{2}{x-1}$",
        "$f^{-1}(x)=2x-1$",
        "$f^{-1}(x)=\\frac{x+1}{2}$",
        "$f^{-1}(x)=2x+1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Swap: $x=\\frac{y-1}{2}$, so $2x=y-1$ and $y=2x+1$. Undo in reverse order — multiply by 2 first, then add 1. Forgetting to multiply the $+1$ correction by nothing (keeping $2x-1$) flips the sign wrongly.",
        "zh": "交换得 $x=\\frac{y-1}{2}$，则 $2x=y-1$，$y=2x+1$。按相反顺序抵消——先乘 2 再加 1。把常数写成 $2x-1$ 就把符号弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The point $(3,7)$ lies on the graph of $f$. Which point must lie on the graph of $f^{-1}$?",
        "zh": "点 $(3,7)$ 在 $f$ 的图像上，则 $f^{-1}$ 的图像上一定有哪个点？"
      },
      "choices": [
        "$(7,3)$",
        "$(-3,-7)$",
        "$(3,7)$",
        "$(-7,-3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The inverse swaps each input and output, so $(3,7)$ becomes $(7,3)$. Negating the coordinates instead reflects across the origin, which is not how inverses work.",
        "zh": "反函数把每个输入与输出互换，所以 $(3,7)$ 变为 $(7,3)$。若把坐标取负，则是关于原点反射，这不是反函数的规则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$f(x)=x^2$ is not one-to-one over all reals. Restricting the domain to which set makes it invertible?",
        "zh": "$f(x)=x^2$ 在全体实数上不是一一对应。把定义域限制到哪个集合能使其可逆？"
      },
      "choices": [
        "$x\\neq 0$",
        "$x\\ge 0$",
        "all real numbers",
        "$-1\\le x\\le 1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Restricting to $x\\ge 0$ keeps only one side of the parabola, passing the horizontal line test so an inverse ($\\sqrt{x}$) exists. Merely removing $x=0$ still leaves matching outputs like $f(2)=f(-2)=4$, so it stays non-invertible.",
        "zh": "限制到 $x\\ge 0$ 只保留抛物线的一侧，通过水平线检验，故存在反函数 $\\sqrt{x}$。仅去掉 $x=0$ 仍有 $f(2)=f(-2)=4$ 这类重复输出，依旧不可逆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To verify that $g$ is the inverse of $f$, which condition must hold?",
        "zh": "要验证 $g$ 是 $f$ 的反函数，必须满足哪个条件？"
      },
      "choices": [
        "$f(x)\\cdot g(x)=1$",
        "$f(x)+g(x)=0$",
        "$f(g(x))=x$ and $g(f(x))=x$",
        "$f(x)=g(x)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Inverses undo each other in both orders, so both compositions must return $x$. The condition $f(x)\\cdot g(x)=1$ describes reciprocals, not inverse functions, which is the tempting confusion here.",
        "zh": "反函数在两个方向上互相抵消，所以两个复合都必须返回 $x$。条件 $f(x)\\cdot g(x)=1$ 描述的是倒数，而非反函数，这正是容易混淆之处。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=\\frac{1}{x}$ (for $x\\neq 0$)?",
        "zh": "$f(x)=\\frac{1}{x}$（$x\\neq 0$）的反函数是什么？"
      },
      "choices": [
        "$f^{-1}(x)=x$",
        "$f^{-1}(x)=-x$",
        "$f^{-1}(x)=x^2$",
        "$f^{-1}(x)=\\frac{1}{x}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Swap $y=\\frac{1}{x}$ to $x=\\frac{1}{y}$, giving $y=\\frac{1}{x}$ — the function is its own inverse. Assuming the inverse must look different (like $x$) misses that some functions are self-inverse.",
        "zh": "把 $y=\\frac{1}{x}$ 交换为 $x=\\frac{1}{y}$，解得 $y=\\frac{1}{x}$——该函数是自身的反函数。以为反函数一定长得不同（如 $x$）就忽略了有些函数是自反的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x+8$, find $f^{-1}(2)$.",
        "zh": "若 $f(x)=x+8$，求 $f^{-1}(2)$。"
      },
      "answer": "-6",
      "accept": [
        "-6",
        "-6.0"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=x-8$, so $f^{-1}(2)=2-8=-6$.",
        "zh": "反函数为 $f^{-1}(x)=x-8$，所以 $f^{-1}(2)=2-8=-6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=4x$, find $f^{-1}(20)$.",
        "zh": "若 $f(x)=4x$，求 $f^{-1}(20)$。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=\\frac{x}{4}$, so $f^{-1}(20)=\\frac{20}{4}=5$.",
        "zh": "反函数为 $f^{-1}(x)=\\frac{x}{4}$，所以 $f^{-1}(20)=\\frac{20}{4}=5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=2x-3$, find $f^{-1}(5)$.",
        "zh": "若 $f(x)=2x-3$，求 $f^{-1}(5)$。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=\\frac{x+3}{2}$, so $f^{-1}(5)=\\frac{8}{2}=4$.",
        "zh": "反函数为 $f^{-1}(x)=\\frac{x+3}{2}$，所以 $f^{-1}(5)=\\frac{8}{2}=4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(5,9)$ is on the graph of $f$. What is the $x$-coordinate of the corresponding point on $f^{-1}$?",
        "zh": "点 $(5,9)$ 在 $f$ 的图像上。$f^{-1}$ 上对应点的 $x$ 坐标是多少？"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "Inverses swap coordinates, so $(5,9)$ becomes $(9,5)$; its $x$-coordinate is $9$.",
        "zh": "反函数交换坐标，$(5,9)$ 变为 $(9,5)$；其 $x$ 坐标为 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=x^3$, find $f^{-1}(27)$.",
        "zh": "若 $f(x)=x^3$，求 $f^{-1}(27)$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The inverse is the cube root, so $f^{-1}(27)=\\sqrt[3]{27}=3$.",
        "zh": "反函数是立方根，所以 $f^{-1}(27)=\\sqrt[3]{27}=3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f$ and $f^{-1}$ are inverses, what is $(f\\circ f^{-1})(100)$?",
        "zh": "若 $f$ 与 $f^{-1}$ 互为反函数，$(f\\circ f^{-1})(100)$ 等于多少？"
      },
      "answer": "100",
      "accept": [
        "100",
        "100.0",
        "+100"
      ],
      "explanation": {
        "en": "A function composed with its inverse returns the input unchanged, so the value is $100$.",
        "zh": "函数与其反函数复合会原样返回输入，所以值为 $100$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f(x)=\\frac{x}{3}+2$, find $f^{-1}(6)$.",
        "zh": "若 $f(x)=\\frac{x}{3}+2$，求 $f^{-1}(6)$。"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x)=3(x-2)$, so $f^{-1}(6)=3(6-2)=3\\cdot 4=12$.",
        "zh": "反函数为 $f^{-1}(x)=3(x-2)$，所以 $f^{-1}(6)=3(6-2)=3\\cdot 4=12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Fill in the blank: the graphical check for one-to-one is the ______ line test. (Give the missing word.)",
        "zh": "填空：判断一一对应的图形检验叫做____线检验。（写出所缺的词。）"
      },
      "answer": "horizontal",
      "accept": [
        "horizontal",
        "Horizontal",
        "HORIZONTAL",
        "水平",
        "水平线"
      ],
      "explanation": {
        "en": "A function is one-to-one exactly when no horizontal line meets its graph more than once, so it is the horizontal line test.",
        "zh": "当且仅当没有任何水平线与图像相交超过一次时，函数才是一一对应的，所以叫水平线检验。"
      }
    }
  ],
  "unit-2-polynomial-functions/graphs-end-behavior-zeros": [
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = 3x^4 - 2x^2 + 5$, what is the end behavior?",
        "zh": "对于 $f(x) = 3x^4 - 2x^2 + 5$，其两端行为是什么？"
      },
      "choices": [
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow +\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow +\\infty$",
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow -\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow +\\infty$",
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow +\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow -\\infty$",
        "As $x \\rightarrow -\\infty$, $f(x) \\rightarrow -\\infty$; as $x \\rightarrow +\\infty$, $f(x) \\rightarrow -\\infty$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The degree (4) is even and the leading coefficient (3) is positive, so both ends rise. A frequent error is treating this like an odd-degree function whose ends go in opposite directions.",
        "zh": "次数 (4) 为偶数且首项系数 (3) 为正，所以两端都向上。常见错误是把它当作奇次函数，认为两端方向相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the end behavior of $f(x) = -2x^3 + 4x - 1$?",
        "zh": "$f(x) = -2x^3 + 4x - 1$ 的两端行为是什么？"
      },
      "choices": [
        "Both ends go up",
        "Left end up, right end down",
        "Both ends go down",
        "Left end down, right end up"
      ],
      "answer": 1,
      "explanation": {
        "en": "Odd degree (3) with a negative leading coefficient gives a falling function overall: left up, right down. Ignoring the negative sign would flip these directions.",
        "zh": "奇次 (3) 且首项系数为负，整体下降：左端向上，右端向下。忽略负号会使方向反过来。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of a polynomial touches the x-axis at $x = 2$ but does not cross it. What does this tell you about the factor $(x-2)$?",
        "zh": "某多项式的图像在 $x = 2$ 处与 x 轴相切但不穿过。这说明因式 $(x-2)$ 有什么特点？"
      },
      "choices": [
        "It has multiplicity 3",
        "It has multiplicity 1",
        "It has even multiplicity",
        "It is not a factor"
      ],
      "answer": 2,
      "explanation": {
        "en": "A zero where the graph touches (bounces) rather than crosses has even multiplicity (2, 4, ...). Assuming any repeated root touches ignores that odd multiplicities greater than 1 still cross.",
        "zh": "图像相切（反弹）而非穿过的零点具有偶数重数 (2, 4, ...)。以为任何重根都相切是错的，大于1的奇数重数仍会穿过。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many real zeros (counting multiplicity) does $f(x) = (x+1)^2(x-3)$ have?",
        "zh": "$f(x) = (x+1)^2(x-3)$ 有多少个实零点（计重数）？"
      },
      "choices": [
        "4",
        "2",
        "1",
        "3"
      ],
      "answer": 3,
      "explanation": {
        "en": "The factor $(x+1)^2$ contributes 2 (a double root) and $(x-3)$ contributes 1, totaling 3. Counting distinct roots only would give 2, which ignores multiplicity.",
        "zh": "因式 $(x+1)^2$ 贡献 2（二重根），$(x-3)$ 贡献 1，共 3 个。只数不同的根会得到 2，忽略了重数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At $x = -4$, the factor $(x+4)^3$ appears. How does the graph behave there?",
        "zh": "在 $x = -4$ 处出现因式 $(x+4)^3$。图像在该处如何表现？"
      },
      "choices": [
        "Crosses, flattening as it passes through",
        "Touches and bounces off",
        "Has a vertical asymptote",
        "Jumps discontinuously"
      ],
      "answer": 0,
      "explanation": {
        "en": "Odd multiplicity (3) means the graph crosses; multiplicity above 1 makes it flatten near the intercept. Expecting it to bounce confuses odd with even multiplicity.",
        "zh": "奇数重数 (3) 表示图像穿过；重数大于1会使其在截距附近变平。以为它会反弹是把奇数重数与偶数重数混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A polynomial has degree 5. What is the maximum number of turning points its graph can have?",
        "zh": "某多项式的次数为 5。其图像最多能有多少个转折点？"
      },
      "choices": [
        "6",
        "4",
        "5",
        "3"
      ],
      "answer": 1,
      "explanation": {
        "en": "A degree-$n$ polynomial has at most $n-1$ turning points, so $5-1 = 4$. Using $n$ itself as the count forgets to subtract one.",
        "zh": "$n$ 次多项式最多有 $n-1$ 个转折点，即 $5-1 = 4$。直接用 $n$ 作为个数忘了减一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of a polynomial crosses the x-axis at exactly 3 points and has both ends pointing up. What is the least possible degree?",
        "zh": "某多项式的图像恰好在 3 个点穿过 x 轴，且两端都向上。最小可能的次数是多少？"
      },
      "choices": [
        "3",
        "5",
        "4",
        "6"
      ],
      "answer": 2,
      "explanation": {
        "en": "Both ends up means even degree; three x-axis crossings need odd-multiplicity zeros. The smallest even degree that allows three crossings is 4 (e.g. one double-cross pattern). A degree of 3 is odd, so its ends could not both point up.",
        "zh": "两端都向上意味着偶次；三个穿过点需要奇数重数的零点。允许三次穿过的最小偶次是 4。次数 3 是奇数，两端不可能都向上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about $f(x) = x^2(x-1)(x+2)$ is TRUE?",
        "zh": "关于 $f(x) = x^2(x-1)(x+2)$ 的哪项陈述是正确的？"
      },
      "choices": [
        "The graph crosses the x-axis at $x = 0$",
        "The graph crosses at $x = 0$ and touches at $x = 1$",
        "The graph never reaches the x-axis",
        "The graph touches the x-axis at $x = 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The factor $x^2$ has even multiplicity, so the graph touches (bounces) at $x = 0$. Assuming every zero is a crossing overlooks the even multiplicity of the squared factor.",
        "zh": "因式 $x^2$ 具有偶数重数，所以图像在 $x = 0$ 处相切（反弹）。以为每个零点都是穿过点忽略了平方因式的偶数重数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As $x \\rightarrow +\\infty$, $f(x) \\rightarrow -\\infty$, and as $x \\rightarrow -\\infty$, $f(x) \\rightarrow -\\infty$. What can you conclude about the leading term?",
        "zh": "当 $x \\rightarrow +\\infty$ 时 $f(x) \\rightarrow -\\infty$，当 $x \\rightarrow -\\infty$ 时 $f(x) \\rightarrow -\\infty$。关于首项能得出什么结论？"
      },
      "choices": [
        "Even degree, negative leading coefficient",
        "Odd degree, negative leading coefficient",
        "Even degree, positive leading coefficient",
        "Odd degree, positive leading coefficient"
      ],
      "answer": 0,
      "explanation": {
        "en": "Both ends falling means even degree (same direction) with a negative leading coefficient (downward). A positive coefficient with even degree would send both ends up instead.",
        "zh": "两端都下降意味着偶次（方向相同）且首项系数为负（向下）。偶次且系数为正会使两端都向上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many x-intercepts does $f(x) = (x-1)^2(x+3)^2$ have?",
        "zh": "$f(x) = (x-1)^2(x+3)^2$ 有多少个 x 截距？"
      },
      "choices": [
        "4",
        "2",
        "1",
        "0"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distinct x-intercepts come from distinct zeros: $x = 1$ and $x = -3$, so 2 intercepts. Adding up the multiplicities (2 + 2 = 4) counts locations that coincide.",
        "zh": "不同的 x 截距来自不同的零点：$x = 1$ 和 $x = -3$，共 2 个。把重数相加 (2 + 2 = 4) 数了重合的位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A polynomial function of degree 4 has how many complex zeros total (counting multiplicity, including real ones)?",
        "zh": "一个 4 次多项式函数共有多少个复零点（计重数，含实零点）？"
      },
      "choices": [
        "2",
        "3",
        "4",
        "It varies"
      ],
      "answer": 2,
      "explanation": {
        "en": "By the Fundamental Theorem of Algebra a degree-$n$ polynomial has exactly $n$ zeros in the complex numbers counting multiplicity, so 4. Counting only real zeros would give a smaller, variable number.",
        "zh": "根据代数基本定理，$n$ 次多项式在复数范围内恰有 $n$ 个零点（计重数），即 4 个。只数实零点会得到更小且不定的数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which polynomial has a graph that rises to the left and falls to the right?",
        "zh": "哪个多项式的图像左端向上、右端向下？"
      },
      "choices": [
        "$f(x) = 2x^4 + x$",
        "$f(x) = x^3 - x$",
        "$f(x) = 4x^2 - 3$",
        "$f(x) = -x^5 + x^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Left up and right down requires odd degree with a negative leading coefficient, matching $-x^5$. The odd-degree option with a positive lead would instead fall left and rise right.",
        "zh": "左上右下需要奇次且首项系数为负，符合 $-x^5$。首项为正的奇次会变成左下右上。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the maximum number of turning points for a polynomial of degree 7?",
        "zh": "7 次多项式最多有多少个转折点？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "six",
        "六"
      ],
      "explanation": {
        "en": "A degree-$n$ polynomial has at most $n-1$ turning points: $7 - 1 = 6$. Using 7 forgets to subtract one.",
        "zh": "$n$ 次多项式最多有 $n-1$ 个转折点：$7 - 1 = 6$。用 7 忘了减一。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = (x-5)^4$, what is the multiplicity of the zero at $x = 5$?",
        "zh": "对于 $f(x) = (x-5)^4$，零点 $x = 5$ 的重数是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "The exponent on the factor $(x-5)$ is the multiplicity, which is 4. The value 5 is the root itself, not its multiplicity.",
        "zh": "因式 $(x-5)$ 的指数就是重数，即 4。数值 5 是根本身，不是重数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many real x-intercepts does $f(x) = x(x-2)(x+7)$ have?",
        "zh": "$f(x) = x(x-2)(x+7)$ 有多少个实 x 截距？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "three",
        "三"
      ],
      "explanation": {
        "en": "The three distinct linear factors give zeros at $x = 0, 2, -7$, so 3 intercepts. Overlooking $x = 0$ as a zero would undercount.",
        "zh": "三个不同的一次因式给出零点 $x = 0, 2, -7$，共 3 个截距。忽略 $x = 0$ 为零点会少数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the leading coefficient of $f(x) = 4 - 3x + 6x^3 - x^5$.",
        "zh": "求 $f(x) = 4 - 3x + 6x^3 - x^5$ 的首项系数。"
      },
      "answer": "-1",
      "accept": [
        "-1.0",
        "−1",
        "negative one"
      ],
      "explanation": {
        "en": "Write in descending order: the highest-degree term is $-x^5$, so the leading coefficient is $-1$. Reading the constant 4 as the leading coefficient ignores the degree of each term.",
        "zh": "按降幂排列：最高次项是 $-x^5$，所以首项系数为 $-1$。把常数 4 当作首项系数忽略了各项的次数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A polynomial of degree 6 has a graph with both ends going up. If it has 5 turning points, how many real zeros (counting multiplicity) is possible at most for this degree?",
        "zh": "一个 6 次多项式的图像两端都向上。若它有 5 个转折点，此次数下最多可能有多少个实零点（计重数）？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "six",
        "六"
      ],
      "explanation": {
        "en": "A degree-6 polynomial has at most 6 real zeros counting multiplicity, equal to its degree. Using the turning-point count (5) confuses turning points with zeros.",
        "zh": "6 次多项式最多有 6 个实零点（计重数），等于其次数。用转折点数 (5) 是把转折点与零点混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = -2x^6 + \\ldots$, as $x \\rightarrow -\\infty$, does $f(x)$ go to $+\\infty$ or $-\\infty$? Answer with the sign of infinity (+ or -).",
        "zh": "对于 $f(x) = -2x^6 + \\ldots$，当 $x \\rightarrow -\\infty$ 时，$f(x)$ 趋向 $+\\infty$ 还是 $-\\infty$？用无穷的符号回答（+ 或 -）。"
      },
      "answer": "-",
      "accept": [
        "negative",
        "minus",
        "-infinity",
        "-inf",
        "负",
        "负无穷",
        "−"
      ],
      "explanation": {
        "en": "Even degree with a negative leading coefficient sends both ends down, so $f(x) \\rightarrow -\\infty$. Forgetting the negative sign would wrongly send it up.",
        "zh": "偶次且首项系数为负使两端都向下，所以 $f(x) \\rightarrow -\\infty$。忘记负号会错误地使其向上。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "At how many points does the graph of $f(x) = (x+1)^3(x-4)$ CROSS (not just touch) the x-axis?",
        "zh": "$f(x) = (x+1)^3(x-4)$ 的图像在多少个点穿过（而非仅相切）x 轴？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "two",
        "二"
      ],
      "explanation": {
        "en": "Both zeros have odd multiplicity ($(x+1)^3$ is 3, $(x-4)$ is 1), so the graph crosses at both, giving 2. Treating the triple root as a bounce would miss one crossing.",
        "zh": "两个零点都是奇数重数（$(x+1)^3$ 为 3，$(x-4)$ 为 1），所以图像在两处都穿过，共 2 个。把三重根当作反弹会漏掉一个穿过点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the degree of the polynomial $f(x) = (x^2-1)(x+3)^2$?",
        "zh": "多项式 $f(x) = (x^2-1)(x+3)^2$ 的次数是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "Add the degrees of the factors: $2 + 2 = 4$. Counting the number of factors (2) instead of summing their degrees undercounts.",
        "zh": "把各因式的次数相加：$2 + 2 = 4$。数因式个数 (2) 而不是把次数相加会少算。"
      }
    }
  ],
  "unit-2-polynomial-functions/polynomial-arithmetic-remainder-theorem": [
    {
      "type": "mc",
      "question": {
        "en": "Simplify $(3x^2 - 2x + 5) + (x^2 + 4x - 1)$.",
        "zh": "化简 $(3x^2 - 2x + 5) + (x^2 + 4x - 1)$。"
      },
      "choices": [
        "$4x^2 + 2x + 4$",
        "$4x^2 - 2x + 4$",
        "$3x^2 + 2x + 4$",
        "$4x^2 + 6x + 6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Combine like terms: $3x^2 + x^2 = 4x^2$, $-2x + 4x = 2x$, $5 - 1 = 4$. Subtracting the coefficients instead of adding produces the wrong middle term.",
        "zh": "合并同类项：$3x^2 + x^2 = 4x^2$，$-2x + 4x = 2x$，$5 - 1 = 4$。把系数相减而非相加会得到错误的中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $(5x^2 + 3x - 7) - (2x^2 - x + 4)$.",
        "zh": "化简 $(5x^2 + 3x - 7) - (2x^2 - x + 4)$。"
      },
      "choices": [
        "$3x^2 + 2x - 3$",
        "$3x^2 + 4x - 11$",
        "$3x^2 + 4x - 3$",
        "$7x^2 + 2x - 11$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distribute the negative to every term: $5x^2 - 2x^2 = 3x^2$, $3x - (-x) = 4x$, $-7 - 4 = -11$. Forgetting to distribute the minus to the $-x$ or the $+4$ gives a wrong sign.",
        "zh": "把负号分配到每一项：$5x^2 - 2x^2 = 3x^2$，$3x - (-x) = 4x$，$-7 - 4 = -11$。忘记把负号分配到 $-x$ 或 $+4$ 会得到错误符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply $(x + 3)(x - 5)$.",
        "zh": "展开 $(x + 3)(x - 5)$。"
      },
      "choices": [
        "$x^2 - 15$",
        "$x^2 + 2x - 15$",
        "$x^2 - 2x - 15$",
        "$x^2 - 8x - 15$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Using FOIL: $x^2 - 5x + 3x - 15 = x^2 - 2x - 15$. Dropping the middle terms and only multiplying first and last omits the $-2x$.",
        "zh": "用 FOIL：$x^2 - 5x + 3x - 15 = x^2 - 2x - 15$。只乘首项和末项、漏掉中间项会丢失 $-2x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(2x - 1)^2$.",
        "zh": "展开 $(2x - 1)^2$。"
      },
      "choices": [
        "$4x^2 - 2x + 1$",
        "$4x^2 + 1$",
        "$2x^2 - 4x + 1$",
        "$4x^2 - 4x + 1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(a-b)^2 = a^2 - 2ab + b^2 = 4x^2 - 4x + 1$. Squaring each term separately to get $4x^2 + 1$ omits the middle cross term.",
        "zh": "$(a-b)^2 = a^2 - 2ab + b^2 = 4x^2 - 4x + 1$。分别平方每项得到 $4x^2 + 1$ 漏掉了中间交叉项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Remainder Theorem, what is the remainder when $f(x) = x^3 - 2x + 4$ is divided by $(x - 2)$?",
        "zh": "根据余数定理，$f(x) = x^3 - 2x + 4$ 除以 $(x - 2)$ 的余数是多少？"
      },
      "choices": [
        "$f(2) = 8$",
        "4",
        "8",
        "0"
      ],
      "answer": 0,
      "explanation": {
        "en": "The remainder equals $f(2) = 8 - 4 + 4 = 8$. Using $x = -2$ instead of $x = 2$ (wrong sign from the divisor) would give a different value.",
        "zh": "余数等于 $f(2) = 8 - 4 + 4 = 8$。用 $x = -2$ 而非 $x = 2$（除式符号弄反）会得到不同的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Remainder Theorem, evaluate the remainder when $f(x) = 2x^2 + 3x - 1$ is divided by $(x + 1)$.",
        "zh": "根据余数定理，$f(x) = 2x^2 + 3x - 1$ 除以 $(x + 1)$ 的余数是多少？"
      },
      "choices": [
        "4",
        "$-2$",
        "$-4$",
        "6"
      ],
      "answer": 1,
      "explanation": {
        "en": "The divisor $(x+1)$ means evaluate at $x = -1$: $2(1) + 3(-1) - 1 = 2 - 3 - 1 = -2$. Using $x = +1$ mistakes the sign of the root.",
        "zh": "除式 $(x+1)$ 表示在 $x = -1$ 处求值：$2(1) + 3(-1) - 1 = 2 - 3 - 1 = -2$。用 $x = +1$ 弄错了根的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Factor Theorem, which of these is a factor of $f(x) = x^3 - 7x + 6$?",
        "zh": "根据因式定理，下列哪个是 $f(x) = x^3 - 7x + 6$ 的因式？"
      },
      "choices": [
        "$(x + 3)$",
        "$(x - 4)$",
        "$(x - 1)$",
        "$(x + 2)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(x - c)$ is a factor when $f(c) = 0$. Here $f(1) = 1 - 7 + 6 = 0$, so $(x-1)$ works. Testing $f(3)$ or $f(4)$ gives nonzero remainders, so those are not factors.",
        "zh": "当 $f(c) = 0$ 时 $(x - c)$ 是因式。这里 $f(1) = 1 - 7 + 6 = 0$，所以 $(x-1)$ 成立。检验 $f(3)$ 或 $f(4)$ 余数非零，故不是因式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When $f(x) = x^2 + kx + 6$ is divided by $(x - 2)$ the remainder is 0. What is $k$?",
        "zh": "当 $f(x) = x^2 + kx + 6$ 除以 $(x - 2)$ 余数为 0 时，$k$ 等于多少？"
      },
      "choices": [
        "$-6$",
        "5",
        "$-2$",
        "$-5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Remainder 0 means $f(2) = 0$: $4 + 2k + 6 = 0 \\Rightarrow 2k = -10 \\Rightarrow k = -5$. Solving $2k = 10$ (dropping a sign) would give the opposite value.",
        "zh": "余数为 0 表示 $f(2) = 0$：$4 + 2k + 6 = 0 \\Rightarrow 2k = -10 \\Rightarrow k = -5$。解成 $2k = 10$（丢符号）会得到相反的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Divide $x^2 + 5x + 6$ by $(x + 2)$. What is the quotient?",
        "zh": "用 $(x + 2)$ 除 $x^2 + 5x + 6$。商是多少？"
      },
      "choices": [
        "$x + 3$",
        "$x + 4$",
        "$x + 2$",
        "$x - 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$x^2 + 5x + 6 = (x+2)(x+3)$, so dividing by $(x+2)$ gives $x + 3$ with remainder 0. Choosing $x+2$ repeats the divisor instead of finding the other factor.",
        "zh": "$x^2 + 5x + 6 = (x+2)(x+3)$，所以除以 $(x+2)$ 得 $x + 3$，余数为 0。选 $x+2$ 是重复了除式而非找出另一个因式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using synthetic division of $2x^3 - 3x^2 + 0x + 4$ by $(x - 1)$, what is the remainder?",
        "zh": "用综合除法计算 $2x^3 - 3x^2 + 0x + 4$ 除以 $(x - 1)$ 的余数。"
      },
      "choices": [
        "1",
        "3",
        "5",
        "9"
      ],
      "answer": 1,
      "explanation": {
        "en": "The remainder is $f(1) = 2 - 3 + 0 + 4 = 3$. Forgetting the missing $x$ term (treating it as absent rather than 0) can throw off the running total.",
        "zh": "余数为 $f(1) = 2 - 3 + 0 + 4 = 3$。忘记缺失的 $x$ 项（当作没有而非 0）会打乱累加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply $(x - 2)(x^2 + 2x + 4)$.",
        "zh": "展开 $(x - 2)(x^2 + 2x + 4)$。"
      },
      "choices": [
        "$x^3 + 8$",
        "$x^3 - 4x - 8$",
        "$x^3 - 8$",
        "$x^3 + 4x + 8$"
      ],
      "answer": 2,
      "explanation": {
        "en": "This is the difference-of-cubes pattern $(a-b)(a^2+ab+b^2) = a^3 - b^3 = x^3 - 8$. The middle terms cancel; keeping them would leave extra $x$ terms.",
        "zh": "这是立方差公式 $(a-b)(a^2+ab+b^2) = a^3 - b^3 = x^3 - 8$。中间项相消；保留它们会多出 $x$ 项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When a cubic polynomial is divided by a linear divisor $(x - c)$, the degree of the quotient is:",
        "zh": "当三次多项式除以一次除式 $(x - c)$ 时，商的次数是："
      },
      "choices": [
        "3",
        "1",
        "0",
        "2"
      ],
      "answer": 3,
      "explanation": {
        "en": "Dividing degree 3 by degree 1 lowers the degree by 1, giving a quotient of degree 2. Keeping the degree at 3 forgets that division by a linear term reduces it.",
        "zh": "用 3 次除以 1 次使次数降低 1，商为 2 次。保持次数为 3 忘了除以一次项会降次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By the Remainder Theorem, find the remainder when $f(x) = x^3 + 2x^2 - x + 5$ is divided by $(x - 1)$.",
        "zh": "根据余数定理，求 $f(x) = x^3 + 2x^2 - x + 5$ 除以 $(x - 1)$ 的余数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7",
        "seven",
        "七"
      ],
      "explanation": {
        "en": "Evaluate $f(1) = 1 + 2 - 1 + 5 = 7$. Substituting $x = -1$ (wrong sign from the divisor) would give a different result.",
        "zh": "求 $f(1) = 1 + 2 - 1 + 5 = 7$。代入 $x = -1$（除式符号弄反）会得到不同结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the constant term of the product $(x + 4)(x - 3)$.",
        "zh": "求乘积 $(x + 4)(x - 3)$ 的常数项。"
      },
      "answer": "-12",
      "accept": [
        "-12.0",
        "−12",
        "negative twelve"
      ],
      "explanation": {
        "en": "Multiply the last terms: $4 \\times (-3) = -12$. Dropping the negative sign from the second factor gives the wrong sign.",
        "zh": "把末项相乘：$4 \\times (-3) = -12$。丢掉第二个因式的负号会得到错误符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute $f(-3)$ for $f(x) = x^2 + 4x - 2$ (this is the remainder when dividing by $(x + 3)$).",
        "zh": "对 $f(x) = x^2 + 4x - 2$ 计算 $f(-3)$（即除以 $(x + 3)$ 的余数）。"
      },
      "answer": "-5",
      "accept": [
        "-5.0",
        "−5",
        "negative five"
      ],
      "explanation": {
        "en": "$f(-3) = 9 - 12 - 2 = -5$. Squaring $-3$ to $-9$ instead of $9$ (sign error) would change the result.",
        "zh": "$f(-3) = 9 - 12 - 2 = -5$。把 $-3$ 平方误算成 $-9$ 而非 $9$（符号错误）会改变结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Divide $x^2 - 9$ by $(x - 3)$. What is the quotient? (Write it as a linear expression.)",
        "zh": "用 $(x - 3)$ 除 $x^2 - 9$。商是多少？（写成一次式。）"
      },
      "answer": "x+3",
      "accept": [
        "x + 3",
        "3+x",
        "x+3.0",
        "(x+3)"
      ],
      "explanation": {
        "en": "$x^2 - 9 = (x-3)(x+3)$, so the quotient is $x + 3$ with remainder 0. Writing $x - 3$ repeats the divisor rather than the paired factor.",
        "zh": "$x^2 - 9 = (x-3)(x+3)$，所以商为 $x + 3$，余数为 0。写成 $x - 3$ 是重复除式而非配对因式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the product $(2x + 5)(3x - 1)$, what is the coefficient of the $x$ term?",
        "zh": "在乘积 $(2x + 5)(3x - 1)$ 中，$x$ 项的系数是多少？"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13",
        "thirteen"
      ],
      "explanation": {
        "en": "Outer plus inner: $2x(-1) + 5(3x) = -2x + 15x = 13x$, coefficient 13. Adding only one of the cross products would miss part of the middle term.",
        "zh": "外项加内项：$2x(-1) + 5(3x) = -2x + 15x = 13x$，系数为 13。只加一个交叉积会漏掉中间项的一部分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $(x - 4)$ is a factor of $f(x) = x^2 - x + c$, find $c$.",
        "zh": "若 $(x - 4)$ 是 $f(x) = x^2 - x + c$ 的因式，求 $c$。"
      },
      "answer": "-12",
      "accept": [
        "-12.0",
        "−12",
        "negative twelve"
      ],
      "explanation": {
        "en": "The Factor Theorem gives $f(4) = 0$: $16 - 4 + c = 0 \\Rightarrow c = -12$. Using $x = -4$ instead of $4$ mistakes the root's sign.",
        "zh": "因式定理给出 $f(4) = 0$：$16 - 4 + c = 0 \\Rightarrow c = -12$。用 $x = -4$ 而非 $4$ 弄错了根的符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using synthetic division of $x^3 - 6x^2 + 11x - 6$ by $(x - 2)$, state the remainder.",
        "zh": "用综合除法计算 $x^3 - 6x^2 + 11x - 6$ 除以 $(x - 2)$ 的余数。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "zero",
        "零"
      ],
      "explanation": {
        "en": "$f(2) = 8 - 24 + 22 - 6 = 0$, so the remainder is 0 and $(x-2)$ is a factor. A single arithmetic slip in the running sum would hide that it divides evenly.",
        "zh": "$f(2) = 8 - 24 + 22 - 6 = 0$，所以余数为 0，$(x-2)$ 是因式。累加中的一处算术失误会掩盖它能整除。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the degree of the product $(x^2 + 1)(x^3 - 2x)$?",
        "zh": "乘积 $(x^2 + 1)(x^3 - 2x)$ 的次数是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "five",
        "五"
      ],
      "explanation": {
        "en": "The degree of a product is the sum of the degrees: $2 + 3 = 5$. Multiplying the degrees instead of adding them would give a larger, incorrect degree.",
        "zh": "乘积的次数是各次数之和：$2 + 3 = 5$。把次数相乘而非相加会得到更大且错误的次数。"
      }
    }
  ],
  "unit-3-polynomial-equations/solving-polynomial-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Factor by grouping: $x^3 + 2x^2 + 3x + 6$.",
        "zh": "用分组分解法分解：$x^3 + 2x^2 + 3x + 6$。"
      },
      "choices": [
        "$(x+2)(x^2+3)$",
        "$(x+3)(x^2+2)$",
        "$(x^2+2)(x+3)$",
        "$(x-2)(x^2+3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Group as $x^2(x+2) + 3(x+2) = (x+2)(x^2+3)$. Pairing the wrong terms gives $(x+3)$ as the common factor, which does not check when expanded.",
        "zh": "分组为 $x^2(x+2) + 3(x+2) = (x+2)(x^2+3)$。若配对错误会得到公因式 $(x+3)$，展开验证不成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct factorization of the sum of cubes $x^3 + 8$?",
        "zh": "立方和 $x^3 + 8$ 的正确分解是哪一个？"
      },
      "choices": [
        "$(x+2)(x^2+2x+4)$",
        "$(x+2)(x^2-2x+4)$",
        "$(x-2)(x^2+2x+4)$",
        "$(x+2)(x^2-4x+4)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Sum of cubes: $a^3+b^3=(a+b)(a^2-ab+b^2)$ with $a=x,b=2$, giving $(x+2)(x^2-2x+4)$. Using $+2x$ in the middle confuses it with the difference-of-cubes sign pattern.",
        "zh": "立方和公式 $a^3+b^3=(a+b)(a^2-ab+b^2)$，取 $a=x,b=2$，得 $(x+2)(x^2-2x+4)$。中间用 $+2x$ 是把符号与立方差混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor the difference of cubes $27x^3 - 1$.",
        "zh": "分解立方差 $27x^3 - 1$。"
      },
      "choices": [
        "$(3x+1)(9x^2-3x+1)$",
        "$(3x-1)(9x^2-3x+1)$",
        "$(3x-1)(9x^2+3x+1)$",
        "$(3x-1)(3x^2+3x+1)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$a^3-b^3=(a-b)(a^2+ab+b^2)$ with $a=3x,b=1$: $(3x-1)(9x^2+3x+1)$. A $-3x$ middle term wrongly imports the sum-of-cubes sign.",
        "zh": "$a^3-b^3=(a-b)(a^2+ab+b^2)$，取 $a=3x,b=1$：$(3x-1)(9x^2+3x+1)$。中间取 $-3x$ 错误地套用了立方和的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the Rational Root Theorem, which is NOT a possible rational root of $2x^3 - 3x^2 + 4x - 6$?",
        "zh": "根据有理根定理，下列哪个不是 $2x^3 - 3x^2 + 4x - 6$ 的可能有理根？"
      },
      "choices": [
        "$3$",
        "$\\frac{3}{2}$",
        "$-2$",
        "$\\frac{1}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Possible roots are $\\pm\\frac{p}{q}$ where $p\\mid 6$ and $q\\mid 2$. Since $3$ is not a factor of the leading coefficient $2$, $\\frac{1}{3}$ is impossible. Treating $3$ as an allowed denominator is the mistake.",
        "zh": "可能的根为 $\\pm\\frac{p}{q}$，其中 $p\\mid 6$，$q\\mid 2$。因为 $3$ 不是首项系数 $2$ 的因数，$\\frac{1}{3}$ 不可能。把 $3$ 当作允许的分母就是错误所在。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $(x-4)(2x+1)(x+3)=0$. Which is a solution?",
        "zh": "解 $(x-4)(2x+1)(x+3)=0$。哪个是解？"
      },
      "choices": [
        "$x=-\\frac{1}{2}$",
        "$x=4$ only",
        "$x=1$",
        "$x=3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the zero-product property each factor is set to $0$: $x=4,\\ x=-\\frac{1}{2},\\ x=-3$. Reading $2x+1=0$ as $x=\\frac{1}{2}$ forgets the negative sign.",
        "zh": "由零积性质，令每个因式为 $0$：$x=4,\\ x=-\\frac{1}{2},\\ x=-3$。把 $2x+1=0$ 解成 $x=\\frac{1}{2}$ 是漏了负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many real solutions (counting multiplicity) does $x^2(x-5)^3=0$ have?",
        "zh": "$x^2(x-5)^3=0$ 有多少个实数解（计重数）？"
      },
      "choices": [
        "$2$",
        "$5$",
        "$3$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiplicity from $x^2$ is $2$ and from $(x-5)^3$ is $3$, total $5$, matching the degree. Counting only the two distinct values $0$ and $5$ ignores multiplicity.",
        "zh": "$x^2$ 提供重数 $2$，$(x-5)^3$ 提供重数 $3$，共 $5$，与次数相符。只数 $0$ 和 $5$ 两个不同值就忽略了重数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given that $x=2$ is a root of $x^3 - 7x + 6$, dividing out $(x-2)$ leaves which quadratic?",
        "zh": "已知 $x=2$ 是 $x^3 - 7x + 6$ 的根，除以 $(x-2)$ 后余下哪个二次式？"
      },
      "choices": [
        "$x^2+2x+3$",
        "$x^2-2x-3$",
        "$x^2+2x-3$",
        "$x^2-2x+3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Synthetic division by $2$ gives quotient $x^2+2x-3$. A common slip is dropping the $+2x$ term because the original cubic has no $x^2$ term (its coefficient is $0$).",
        "zh": "用 $2$ 做综合除法得商 $x^2+2x-3$。常见错误是因原三次式缺 $x^2$ 项（系数为 $0$）而漏掉 $+2x$ 项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor completely: $x^4 - 16$.",
        "zh": "彻底分解：$x^4 - 16$。"
      },
      "choices": [
        "$(x^2-4)(x^2+4)$",
        "$(x^2-4)^2$",
        "$(x-2)^2(x+2)^2$",
        "$(x-2)(x+2)(x^2+4)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Difference of squares twice: $x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$. Stopping at $(x^2-4)(x^2+4)$ leaves a factorable term, so it is not complete.",
        "zh": "两次平方差：$x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$。停在 $(x^2-4)(x^2+4)$ 时仍有可分解项，未彻底。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The polynomial $x^3 - x^2 - 4x + 4$ factors by grouping as:",
        "zh": "多项式 $x^3 - x^2 - 4x + 4$ 用分组分解为："
      },
      "choices": [
        "$(x-1)(x^2-4)$",
        "$(x+1)(x^2-4)$",
        "$(x-1)(x^2+4)$",
        "$(x-1)(x-4)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$x^2(x-1)-4(x-1)=(x-1)(x^2-4)$. Mishandling the sign when factoring $-4x+4$ produces a $(x+1)$ factor that fails when expanded.",
        "zh": "$x^2(x-1)-4(x-1)=(x-1)(x^2-4)$。分解 $-4x+4$ 时符号处理错会得到 $(x+1)$，展开验证不成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is a real solution of $x^3 = 27$?",
        "zh": "$x^3 = 27$ 的一个实数解是哪一个？"
      },
      "choices": [
        "$x=9$",
        "$x=3$",
        "$x=-3$",
        "$x=\\sqrt{27}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The real cube root of $27$ is $3$ since $3^3=27$. Taking $\\sqrt{27}$ or $9$ confuses cube roots with square roots or with dividing by $3$.",
        "zh": "$27$ 的实立方根是 $3$，因为 $3^3=27$。取 $\\sqrt{27}$ 或 $9$ 是把立方根与平方根或与除以 $3$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cubic has zeros $x=0,\\ x=2,\\ x=-5$. Which polynomial (leading coefficient $1$) has exactly these zeros?",
        "zh": "一个三次式的零点为 $x=0,\\ x=2,\\ x=-5$。哪个多项式（首项系数为 $1$）恰有这些零点？"
      },
      "choices": [
        "$(x-2)(x+5)$",
        "$x(x+2)(x-5)$",
        "$x(x-2)(x+5)$",
        "$x(x-2)(x-5)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Each zero $r$ gives factor $(x-r)$: $x(x-2)(x+5)$. Flipping the signs to $(x+2)(x-5)$ would instead give zeros $-2$ and $5$.",
        "zh": "每个零点 $r$ 对应因式 $(x-r)$：$x(x-2)(x+5)$。把符号写成 $(x+2)(x-5)$ 得到的零点是 $-2$ 和 $5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^4 - 5x^2 + 4 = 0$ (a quadratic in $x^2$). The full solution set is:",
        "zh": "解 $x^4 - 5x^2 + 4 = 0$（关于 $x^2$ 的二次式）。完整解集为："
      },
      "choices": [
        "$\\{1,4\\}$",
        "$\\{\\pm1\\}$",
        "$\\{\\pm2\\}$",
        "$\\{\\pm1,\\pm2\\}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Let $u=x^2$: $u^2-5u+4=0\\Rightarrow u=1,4$, so $x^2=1$ or $x^2=4$, giving $x=\\pm1,\\pm2$. Stopping at $u=1,4$ forgets to solve back for $x$.",
        "zh": "令 $u=x^2$：$u^2-5u+4=0\\Rightarrow u=1,4$，故 $x^2=1$ 或 $x^2=4$，得 $x=\\pm1,\\pm2$。停在 $u=1,4$ 忘了求回 $x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $2x+1=0$ from the equation $(x-3)(2x+1)=0$. Give the non-integer solution as a fraction or decimal.",
        "zh": "由方程 $(x-3)(2x+1)=0$ 解 $2x+1=0$。以分数或小数给出非整数解。"
      },
      "answer": "-1/2",
      "accept": [
        "-0.5",
        "-.5",
        "-1/2",
        "-2/4"
      ],
      "explanation": {
        "en": "Set $2x+1=0\\Rightarrow x=-\\frac{1}{2}$. Forgetting the sign gives $\\frac{1}{2}$, which does not satisfy the factor.",
        "zh": "令 $2x+1=0\\Rightarrow x=-\\frac{1}{2}$。漏掉负号会得到 $\\frac{1}{2}$，代入因式不成立。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the real solution of $x^3 + 64 = 0$?",
        "zh": "$x^3 + 64 = 0$ 的实数解是多少？"
      },
      "answer": "-4",
      "accept": [
        "-4",
        "-4.0",
        "-4.00"
      ],
      "explanation": {
        "en": "$x^3=-64\\Rightarrow x=-4$ since $(-4)^3=-64$. Answering $4$ ignores that a negative cubed stays negative.",
        "zh": "$x^3=-64\\Rightarrow x=-4$，因为 $(-4)^3=-64$。答 $4$ 忽略了负数立方仍为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x^3 - 2x^2 - 5x + 6$, verify whether $x=1$ is a root: enter the value of the polynomial at $x=1$.",
        "zh": "对 $x^3 - 2x^2 - 5x + 6$，检验 $x=1$ 是否为根：输入多项式在 $x=1$ 处的值。"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0",
        "+0"
      ],
      "explanation": {
        "en": "$1-2-5+6=0$, so $x=1$ is a root. A sign error on the $-5$ or $-2$ term is what leads to a nonzero value.",
        "zh": "$1-2-5+6=0$，故 $x=1$ 是根。对 $-5$ 或 $-2$ 项符号出错才会得到非零值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The Rational Root Theorem lists $\\pm\\frac{p}{q}$ for $2x^2 - 7x + 3$. How many DISTINCT possible rational roots are there (count both signs)?",
        "zh": "对 $2x^2 - 7x + 3$，有理根定理列出 $\\pm\\frac{p}{q}$。共有多少个不同的可能有理根（正负都算）？"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "eight",
        "八"
      ],
      "explanation": {
        "en": "$p\\in\\{1,3\\},\\ q\\in\\{1,2\\}$ gives $\\frac{p}{q}\\in\\{1,3,\\frac{1}{2},\\frac{3}{2}\\}$: $4$ values, doubled by $\\pm$ to $8$. Forgetting the $\\pm$ halves the count to $4$.",
        "zh": "$p\\in\\{1,3\\},\\ q\\in\\{1,2\\}$ 得 $\\frac{p}{q}\\in\\{1,3,\\frac{1}{2},\\frac{3}{2}\\}$：$4$ 个值，含正负共 $8$ 个。漏掉 $\\pm$ 只得 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2(x+7)=0$. Enter the smallest solution.",
        "zh": "解 $x^2(x+7)=0$。输入最小的解。"
      },
      "answer": "-7",
      "accept": [
        "-7",
        "-7.0",
        "-7.00"
      ],
      "explanation": {
        "en": "Zeros are $x=0$ (double) and $x=-7$; the smallest is $-7$. Choosing $0$ overlooks the $(x+7)$ factor.",
        "zh": "零点为 $x=0$（二重）和 $x=-7$；最小的是 $-7$。选 $0$ 忽略了 $(x+7)$ 因式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "After factoring $x^3 - 3x^2 - 4x + 12 = (x-3)(x-2)(x+2)$, what is the SUM of all real roots?",
        "zh": "将 $x^3 - 3x^2 - 4x + 12$ 分解为 $(x-3)(x-2)(x+2)$ 后，所有实根之和是多少？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3",
        "三"
      ],
      "explanation": {
        "en": "Roots $3,2,-2$ sum to $3$, which also equals $-\\frac{\\text{(coeff of }x^2)}{1}=-(-3)$. Adding magnitudes without signs would wrongly give $7$.",
        "zh": "根 $3,2,-2$ 之和为 $3$，也等于 $-\\frac{x^2\\text{系数}}{1}=-(-3)$。不带符号相加会错得 $7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The sum of cubes $x^3 + 125$ factors as $(x+5)(x^2 - 5x + c)$. What is $c$?",
        "zh": "立方和 $x^3 + 125$ 分解为 $(x+5)(x^2 - 5x + c)$。$c$ 是多少？"
      },
      "answer": "25",
      "accept": [
        "25",
        "25.0",
        "+25"
      ],
      "explanation": {
        "en": "With $b=5$, the trinomial is $x^2-5x+25$, so $c=b^2=25$. Using $b=5$ as $c$ (i.e. $5$) forgets to square it.",
        "zh": "取 $b=5$，三项式为 $x^2-5x+25$，故 $c=b^2=25$。直接用 $b=5$ 作 $c$ 是忘了平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A degree-$5$ polynomial equation. Counting multiplicity, how many complex roots (real included) must it have?",
        "zh": "一个五次多项式方程。计重数时，它必有多少个复数根（含实数）？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "five",
        "五"
      ],
      "explanation": {
        "en": "The number of roots (with multiplicity) equals the degree, so $5$. Counting only real roots can undercount when complex roots are present.",
        "zh": "根的个数（计重数）等于次数，故为 $5$。只数实根会在存在复根时少算。"
      }
    }
  ],
  "unit-3-polynomial-equations/complex-zeros-fundamental-theorem": [
    {
      "type": "mc",
      "question": {
        "en": "By the Fundamental Theorem of Algebra, how many zeros (counting multiplicity) does a degree-$4$ polynomial have in the complex numbers?",
        "zh": "根据代数基本定理，一个四次多项式在复数范围内有多少个零点（计重数）？"
      },
      "choices": [
        "$4$",
        "$3$",
        "$2$",
        "at most $4$, possibly fewer"
      ],
      "answer": 0,
      "explanation": {
        "en": "Over the complex numbers a degree-$n$ polynomial has exactly $n$ zeros counting multiplicity, so $4$. The phrase \"possibly fewer\" only applies to distinct real zeros, not to the full count with multiplicity.",
        "zh": "在复数范围内，$n$ 次多项式恰有 $n$ 个零点（计重数），故为 $4$。“可能更少”只适用于不同的实零点，而非计重数的总数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A polynomial with real coefficients has $3+2i$ as a zero. Which number must also be a zero?",
        "zh": "一个实系数多项式以 $3+2i$ 为零点。哪个数也必是零点？"
      },
      "choices": [
        "$-3+2i$",
        "$3-2i$",
        "$-3-2i$",
        "$2+3i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Complex zeros of real-coefficient polynomials occur in conjugate pairs, so $3-2i$ is forced. Negating the real part instead of the imaginary part gives the wrong partner.",
        "zh": "实系数多项式的复零点成共轭对出现，故 $3-2i$ 必为零点。取实部相反而非虚部相反会得到错误的配对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many complex zeros (counting multiplicity) does $p(x)=(x-1)^2(x^2+9)$ have, and how many are non-real?",
        "zh": "$p(x)=(x-1)^2(x^2+9)$ 有多少个复零点（计重数），其中有多少个非实数？"
      },
      "choices": [
        "$4$ total, $0$ non-real",
        "$3$ total, $2$ non-real",
        "$4$ total, $2$ non-real",
        "$2$ total, $2$ non-real"
      ],
      "answer": 2,
      "explanation": {
        "en": "Degree $4$ means $4$ zeros: $x=1$ (double) and $x=\\pm3i$, so $2$ are non-real. Counting $x=1$ once instead of twice undercounts the total.",
        "zh": "四次意味着 $4$ 个零点：$x=1$（二重）和 $x=\\pm3i$，其中 $2$ 个为非实数。把 $x=1$ 只算一次会少算总数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The zeros of a polynomial with real coefficients are $2i$ and $-2i$. The monic quadratic with these zeros is:",
        "zh": "某实系数多项式的零点为 $2i$ 与 $-2i$。以这两个零点为根的首一二次式是："
      },
      "choices": [
        "$x^2-4$",
        "$x^2+2$",
        "$x^2-4i$",
        "$x^2+4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(x-2i)(x+2i)=x^2-(2i)^2=x^2+4$ since $(2i)^2=-4$. Treating $(2i)^2$ as $+4$ produces $x^2-4$ by mistake.",
        "zh": "$(x-2i)(x+2i)=x^2-(2i)^2=x^2+4$，因为 $(2i)^2=-4$。把 $(2i)^2$ 当作 $+4$ 会错得 $x^2-4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A degree-$3$ polynomial with real coefficients has exactly one real zero. How many non-real zeros does it have?",
        "zh": "一个实系数三次多项式恰有一个实零点。它有多少个非实零点？"
      },
      "choices": [
        "$2$",
        "$1$",
        "$0$",
        "$3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Non-real zeros come in conjugate pairs, so with $3$ total and $1$ real there must be exactly $2$ non-real. A single non-real zero is impossible because its conjugate would be missing.",
        "zh": "非实零点成共轭对出现，故总数 $3$、实数 $1$ 时非实数恰为 $2$。只有一个非实零点不可能，因为其共轭会缺失。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Build a monic polynomial of least degree with real coefficients having zeros $x=0$ and $x=1-i$.",
        "zh": "构造一个次数最小、以 $x=0$ 与 $x=1-i$ 为零点的实系数首一多项式。"
      },
      "choices": [
        "$x(x^2+2x+2)$",
        "$x(x^2-2x+2)$",
        "$x(x-1+i)$",
        "$x(x^2-2x-2)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Real coefficients force the conjugate $1+i$, so $(x-(1-i))(x-(1+i))=x^2-2x+2$, times $x$. The constant is $(1-i)(1+i)=2$; getting $-2$ mishandles $i^2=-1$.",
        "zh": "实系数要求共轭 $1+i$，故 $(x-(1-i))(x-(1+i))=x^2-2x+2$，再乘 $x$。常数项为 $(1-i)(1+i)=2$；得 $-2$ 是把 $i^2=-1$ 处理错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The polynomial $x^2 + 6x + 13$ has which zeros?",
        "zh": "多项式 $x^2 + 6x + 13$ 的零点是哪些？"
      },
      "choices": [
        "$-3\\pm4i$",
        "$3\\pm2i$",
        "$-3\\pm2i$",
        "$-6\\pm2i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$x=\\frac{-6\\pm\\sqrt{36-52}}{2}=\\frac{-6\\pm\\sqrt{-16}}{2}=-3\\pm2i$. Dropping the negative sign on the real part gives $3\\pm2i$.",
        "zh": "$x=\\frac{-6\\pm\\sqrt{36-52}}{2}=\\frac{-6\\pm\\sqrt{-16}}{2}=-3\\pm2i$。实部漏掉负号会得到 $3\\pm2i$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A polynomial has zeros $x=4$ with multiplicity $2$ and $x=-1$ with multiplicity $1$. What is its minimum degree?",
        "zh": "某多项式在 $x=4$ 处零点重数为 $2$，在 $x=-1$ 处重数为 $1$。其最小次数是多少？"
      },
      "choices": [
        "$2$",
        "$1$",
        "$4$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Total degree is the sum of multiplicities: $2+1=3$. Counting the two distinct zero values gives $2$, which ignores the multiplicity of $x=4$.",
        "zh": "总次数为各重数之和：$2+1=3$。只数两个不同零点值得 $2$，忽略了 $x=4$ 的重数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about a degree-$5$ polynomial with real coefficients is always true?",
        "zh": "关于一个实系数五次多项式，下列哪句话总成立？"
      },
      "choices": [
        "It has at least one real zero.",
        "It has no real zeros.",
        "It has $5$ real zeros.",
        "It has an even number of real zeros."
      ],
      "answer": 0,
      "explanation": {
        "en": "Non-real zeros pair up, so an odd degree leaves at least one real zero unpaired. Claiming all $5$ are real ignores that some may be complex conjugate pairs.",
        "zh": "非实零点成对出现，故奇数次必留下至少一个实零点未配对。说 $5$ 个全为实数忽略了可能存在复共轭对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $x=i$ is a zero of a real-coefficient polynomial, which quadratic factor with real coefficients must divide it?",
        "zh": "若 $x=i$ 是某实系数多项式的零点，哪个实系数二次因式必整除它？"
      },
      "choices": [
        "$x^2-1$",
        "$x^2+1$",
        "$x^2-i$",
        "$x^2+i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The conjugate $-i$ is also a zero, and $(x-i)(x+i)=x^2+1$. Writing $x^2-1$ treats $i^2$ as $+1$ instead of $-1$.",
        "zh": "共轭 $-i$ 也是零点，且 $(x-i)(x+i)=x^2+1$。写成 $x^2-1$ 是把 $i^2$ 当作 $+1$ 而非 $-1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A monic degree-$3$ polynomial has zeros $1, i, -i$. Expanded, it equals:",
        "zh": "一个首一三次多项式的零点为 $1, i, -i$。展开后等于："
      },
      "choices": [
        "$x^3-x^2-x-1$",
        "$x^3+x^2+x+1$",
        "$x^3-x^2+x-1$",
        "$x^3+x-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(x-1)(x^2+1)=x^3+x-x^2-1=x^3-x^2+x-1$. Forgetting to distribute the $-1$ across $x^2+1$ drops the $-x^2$ and $+x$ pairing.",
        "zh": "$(x-1)(x^2+1)=x^3+x-x^2-1=x^3-x^2+x-1$。忘记把 $-1$ 分配到 $x^2+1$ 会漏掉 $-x^2$ 与 $+x$ 的配对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The zeros of $x^2 - 4x + 5$ are:",
        "zh": "$x^2 - 4x + 5$ 的零点是："
      },
      "choices": [
        "$4\\pm i$",
        "$-2\\pm i$",
        "$2\\pm 5i$",
        "$2\\pm i$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x=\\frac{4\\pm\\sqrt{16-20}}{2}=\\frac{4\\pm\\sqrt{-4}}{2}=2\\pm i$. Forgetting to divide the whole numerator by $2$ leaves $4\\pm i$.",
        "zh": "$x=\\frac{4\\pm\\sqrt{16-20}}{2}=\\frac{4\\pm\\sqrt{-4}}{2}=2\\pm i$。忘记把整个分子除以 $2$ 会剩下 $4\\pm i$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A polynomial with real coefficients has zeros $5,\\ 2+3i,\\ 2-3i$. What is its minimum degree?",
        "zh": "某实系数多项式的零点为 $5,\\ 2+3i,\\ 2-3i$。其最小次数是多少？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "three",
        "三"
      ],
      "explanation": {
        "en": "Three zeros (already a conjugate pair plus one real) give degree $3$. No extra conjugate is needed since the pair is already complete.",
        "zh": "三个零点（已含一对共轭加一个实数）给出三次。无需额外共轭，因该对已完整。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $4-7i$ is a zero of a real-coefficient polynomial, write the conjugate zero that must also appear.",
        "zh": "若 $4-7i$ 是某实系数多项式的零点，写出必然同时出现的共轭零点。"
      },
      "answer": "4+7i",
      "accept": [
        "4+7i",
        "4 + 7i",
        "4+7*i",
        "7i+4"
      ],
      "explanation": {
        "en": "Conjugate pairs flip only the imaginary sign: $4+7i$. Negating the real part instead would give $-4+7i$, which is not the conjugate.",
        "zh": "共轭对仅改变虚部符号：$4+7i$。改变实部符号会得到 $-4+7i$，那不是共轭。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the monic polynomial with zeros $3i$ and $-3i$, the product $(x-3i)(x+3i)$ equals $x^2 + k$. Find $k$.",
        "zh": "对以 $3i$ 与 $-3i$ 为零点的首一多项式，乘积 $(x-3i)(x+3i)$ 等于 $x^2 + k$。求 $k$。"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "+9",
        "九"
      ],
      "explanation": {
        "en": "$(x-3i)(x+3i)=x^2-(3i)^2=x^2-(-9)=x^2+9$, so $k=9$. Treating $(3i)^2$ as $+9$ would give $k=-9$.",
        "zh": "$(x-3i)(x+3i)=x^2-(3i)^2=x^2-(-9)=x^2+9$，故 $k=9$。把 $(3i)^2$ 当作 $+9$ 会得 $k=-9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A degree-$6$ polynomial with real coefficients has exactly $2$ real zeros (each simple). How many non-real zeros does it have (counting multiplicity)?",
        "zh": "一个实系数六次多项式恰有 $2$ 个实零点（均为单根）。它有多少个非实零点（计重数）？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "Total $6$ minus $2$ real leaves $4$ non-real, which is even as required for conjugate pairs. Answering an odd number would violate the conjugate-pair rule.",
        "zh": "总数 $6$ 减去实数 $2$ 剩 $4$ 个非实数，为偶数，符合共轭成对的要求。答奇数会违反共轭配对规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The product of the two zeros $1+i$ and $1-i$ equals what real number?",
        "zh": "两个零点 $1+i$ 与 $1-i$ 的乘积等于哪个实数？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "+2",
        "二"
      ],
      "explanation": {
        "en": "$(1+i)(1-i)=1-i^2=1-(-1)=2$. Treating $i^2$ as $+1$ would wrongly give $0$.",
        "zh": "$(1+i)(1-i)=1-i^2=1-(-1)=2$。把 $i^2$ 当作 $+1$ 会错得 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The sum of the two conjugate zeros $-5+2i$ and $-5-2i$ equals what real number?",
        "zh": "两个共轭零点 $-5+2i$ 与 $-5-2i$ 之和等于哪个实数？"
      },
      "answer": "-10",
      "accept": [
        "-10",
        "-10.0",
        "-10.00"
      ],
      "explanation": {
        "en": "The imaginary parts cancel, leaving $-5+(-5)=-10$. Adding the imaginary parts too would incorrectly keep an $i$ term.",
        "zh": "虚部相消，余 $-5+(-5)=-10$。若把虚部也相加会错误地保留 $i$ 项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A monic real polynomial of least degree has zeros $0$ (multiplicity $2$) and $i$. What is its degree?",
        "zh": "一个次数最小的首一实系数多项式，零点为 $0$（重数 $2$）与 $i$。其次数是多少？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "four",
        "四"
      ],
      "explanation": {
        "en": "Multiplicities: $0$ contributes $2$, and $i$ forces its conjugate $-i$ for $2$ more, total $4$. Forgetting the required conjugate of $i$ gives $3$.",
        "zh": "重数：$0$ 贡献 $2$，$i$ 需其共轭 $-i$ 再加 $2$，共 $4$。忘记 $i$ 必需的共轭会得 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $i^2$. Enter the real number.",
        "zh": "计算 $i^2$。输入该实数。"
      },
      "answer": "-1",
      "accept": [
        "-1",
        "-1.0",
        "-1.00"
      ],
      "explanation": {
        "en": "By definition $i=\\sqrt{-1}$, so $i^2=-1$. Writing $1$ forgets the defining property that makes complex conjugate factoring work.",
        "zh": "由定义 $i=\\sqrt{-1}$，故 $i^2=-1$。写成 $1$ 忘了使复共轭分解成立的定义性质。"
      }
    }
  ],
  "unit-4-rational-functions/simplifying-rational-expressions": [
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{x^2-9}{x+3}$.",
        "zh": "化简 $\\frac{x^2-9}{x+3}$。"
      },
      "choices": [
        "$x-3$",
        "$x+3$",
        "$x-9$",
        "$\\frac{1}{x-3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor the numerator as $(x-3)(x+3)$, then cancel the common factor $(x+3)$ to get $x-3$. A common error is to cancel the $3$ inside $x+3$ with the $9$; you may only cancel whole factors, not pieces of a sum.",
        "zh": "分子分解为 $(x-3)(x+3)$，约去公因式 $(x+3)$ 得 $x-3$。常见错误是把 $x+3$ 中的 $3$ 与 $9$ 相约；只能约整体因式，不能约和式中的一部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{x^2-4}{x^2+5x+6}$.",
        "zh": "化简 $\\frac{x^2-4}{x^2+5x+6}$。"
      },
      "choices": [
        "$\\frac{x-2}{x+2}$",
        "$\\frac{x-2}{x+3}$",
        "$\\frac{x+2}{x+3}$",
        "$\\frac{x-4}{x+6}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Factor: $\\frac{(x-2)(x+2)}{(x+2)(x+3)}$, cancel $(x+2)$ to get $\\frac{x-2}{x+3}$. Canceling the $x^2$ terms directly (treating a sum like a product) is invalid and leads to a wrong result.",
        "zh": "分解为 $\\frac{(x-2)(x+2)}{(x+2)(x+3)}$，约去 $(x+2)$ 得 $\\frac{x-2}{x+3}$。把 $x^2$ 项直接相消（把和当成积）是错误的做法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply $\\frac{2x}{3} \\cdot \\frac{9}{4x^2}$.",
        "zh": "计算 $\\frac{2x}{3} \\cdot \\frac{9}{4x^2}$。"
      },
      "choices": [
        "$\\frac{2x}{3}$",
        "$\\frac{3x}{2}$",
        "$\\frac{3}{2x}$",
        "$\\frac{2}{3x}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply straight across: $\\frac{18x}{12x^2}=\\frac{3}{2x}$ after reducing by $6x$. Leaving an $x$ in the numerator forgets that one factor of $x$ cancels with $x^2$.",
        "zh": "分子分母分别相乘：$\\frac{18x}{12x^2}$，约去 $6x$ 得 $\\frac{3}{2x}$。若分子仍留 $x$，是忘了一个 $x$ 与 $x^2$ 约去。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Divide $\\frac{x}{x+1} \\div \\frac{x^2}{x+1}$.",
        "zh": "计算 $\\frac{x}{x+1} \\div \\frac{x^2}{x+1}$。"
      },
      "choices": [
        "$x$",
        "$\\frac{x}{x+1}$",
        "$\\frac{1}{x+1}$",
        "$\\frac{1}{x}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply by the reciprocal: $\\frac{x}{x+1}\\cdot\\frac{x+1}{x^2}=\\frac{1}{x}$. Multiplying without flipping the second fraction (skipping the reciprocal step) gives the wrong answer.",
        "zh": "乘以倒数：$\\frac{x}{x+1}\\cdot\\frac{x+1}{x^2}=\\frac{1}{x}$。若不把第二个分数取倒数就相乘，会得到错误结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Add $\\frac{3}{x} + \\frac{2}{x}$.",
        "zh": "计算 $\\frac{3}{x} + \\frac{2}{x}$。"
      },
      "choices": [
        "$\\frac{5}{x}$",
        "$\\frac{5}{2x}$",
        "$\\frac{6}{x^2}$",
        "$\\frac{5}{x^2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With a common denominator, add only the numerators: $\\frac{3+2}{x}=\\frac{5}{x}$. Adding the denominators too (making $2x$ or $x^2$) is a common mistake.",
        "zh": "同分母时只把分子相加：$\\frac{3+2}{x}=\\frac{5}{x}$。把分母也相加（得 $2x$ 或 $x^2$）是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Add $\\frac{1}{x} + \\frac{1}{y}$.",
        "zh": "计算 $\\frac{1}{x} + \\frac{1}{y}$。"
      },
      "choices": [
        "$\\frac{1}{x+y}$",
        "$\\frac{x+y}{xy}$",
        "$\\frac{2}{xy}$",
        "$\\frac{2}{x+y}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use common denominator $xy$: $\\frac{y}{xy}+\\frac{x}{xy}=\\frac{x+y}{xy}$. Adding straight across to get $\\frac{1}{x+y}$ ignores that fractions cannot be combined by adding denominators.",
        "zh": "通分为 $xy$：$\\frac{y}{xy}+\\frac{x}{xy}=\\frac{x+y}{xy}$。直接相加得 $\\frac{1}{x+y}$ 忽略了分数不能通过相加分母来合并。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Subtract $\\frac{5}{x-2} - \\frac{3}{x-2}$.",
        "zh": "计算 $\\frac{5}{x-2} - \\frac{3}{x-2}$。"
      },
      "choices": [
        "$\\frac{8}{x-2}$",
        "$\\frac{2}{x^2-4}$",
        "$\\frac{2}{x-2}$",
        "$2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Same denominator: subtract numerators, $\\frac{5-3}{x-2}=\\frac{2}{x-2}$. The denominator stays $x-2$; squaring or adding it is incorrect.",
        "zh": "同分母：分子相减，$\\frac{5-3}{x-2}=\\frac{2}{x-2}$。分母保持 $x-2$，不应平方或相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Add $\\frac{1}{x} + \\frac{1}{x+1}$.",
        "zh": "计算 $\\frac{1}{x} + \\frac{1}{x+1}$。"
      },
      "choices": [
        "$\\frac{2}{2x+1}$",
        "$\\frac{2}{x^2+x}$",
        "$\\frac{1}{2x+1}$",
        "$\\frac{2x+1}{x^2+x}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Common denominator $x(x+1)=x^2+x$: $\\frac{(x+1)+x}{x(x+1)}=\\frac{2x+1}{x^2+x}$. Dropping the numerator terms and just writing $2$ over the denominator forgets to add $x+1$ and $x$.",
        "zh": "通分为 $x(x+1)=x^2+x$：$\\frac{(x+1)+x}{x(x+1)}=\\frac{2x+1}{x^2+x}$。若分子只写 $2$，是忘了把 $x+1$ 与 $x$ 相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify the complex fraction $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$.",
        "zh": "化简繁分数 $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$。"
      },
      "choices": [
        "$\\frac{2}{3}$",
        "$\\frac{3}{8}$",
        "$\\frac{3}{2}$",
        "$\\frac{1}{6}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Dividing means multiplying by the reciprocal: $\\frac{1}{2}\\cdot\\frac{4}{3}=\\frac{4}{6}=\\frac{2}{3}$. Multiplying the two fractions directly (without flipping) gives $\\frac{3}{8}$, which is wrong.",
        "zh": "除以等于乘以倒数：$\\frac{1}{2}\\cdot\\frac{4}{3}=\\frac{4}{6}=\\frac{2}{3}$。若不取倒数直接相乘得 $\\frac{3}{8}$，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which values are excluded from the domain of $\\frac{x+1}{x^2-4}$?",
        "zh": "$\\frac{x+1}{x^2-4}$ 的定义域应排除哪些值？"
      },
      "choices": [
        "$x \\ne -1$",
        "$x \\ne 2$ and $x \\ne -2$",
        "$x \\ne 4$",
        "$x \\ne 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set the denominator $x^2-4=(x-2)(x+2)=0$, giving $x=2$ and $x=-2$. Using the numerator's zero ($x=-1$) instead confuses where the function is undefined with where it equals zero.",
        "zh": "令分母 $x^2-4=(x-2)(x+2)=0$，得 $x=2$ 与 $x=-2$。若用分子的零点 $x=-1$，是把函数无定义之处与函数为零之处混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "State the domain restrictions of $\\frac{x-3}{x^2-9}$ (before simplifying).",
        "zh": "写出 $\\frac{x-3}{x^2-9}$ 的定义域限制（化简前）。"
      },
      "choices": [
        "$x \\ne 3$ only",
        "$x \\ne -3$ only",
        "$x \\ne 3$ and $x \\ne -3$",
        "no restrictions"
      ],
      "answer": 2,
      "explanation": {
        "en": "The original denominator $x^2-9=(x-3)(x+3)$ is zero at $x=3$ and $x=-3$, so both are excluded even though the expression simplifies to $\\frac{1}{x+3}$. Keeping only the surviving restriction forgets the hole created at $x=3$.",
        "zh": "原分母 $x^2-9=(x-3)(x+3)$ 在 $x=3$ 与 $x=-3$ 处为零，即使化简为 $\\frac{1}{x+3}$，两者都要排除。若只保留化简后的限制，就漏掉了 $x=3$ 处产生的空心点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{5-x}{x-5}$.",
        "zh": "化简 $\\frac{5-x}{x-5}$。"
      },
      "choices": [
        "$1$",
        "$x-5$",
        "$5-x$",
        "$-1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor $-1$ from the numerator: $\\frac{-(x-5)}{x-5}=-1$. Canceling to $1$ ignores that $5-x$ and $x-5$ are opposites, not equal.",
        "zh": "从分子提出 $-1$：$\\frac{-(x-5)}{x-5}=-1$。约成 $1$ 忽略了 $5-x$ 与 $x-5$ 互为相反数，并不相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\frac{x^2-16}{x-4}$.",
        "zh": "化简 $\\frac{x^2-16}{x-4}$。"
      },
      "answer": "x+4",
      "accept": [
        "x + 4",
        "4+x",
        "4 + x"
      ],
      "explanation": {
        "en": "Factor the difference of squares: $\\frac{(x-4)(x+4)}{x-4}=x+4$.",
        "zh": "利用平方差公式分解：$\\frac{(x-4)(x+4)}{x-4}=x+4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Multiply $\\frac{x+2}{x} \\cdot \\frac{x}{x+2}$.",
        "zh": "计算 $\\frac{x+2}{x} \\cdot \\frac{x}{x+2}$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "1.00"
      ],
      "explanation": {
        "en": "Both $(x+2)$ and $x$ cancel, leaving $1$.",
        "zh": "$(x+2)$ 与 $x$ 都约去，结果为 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What value must be excluded from the domain of $\\frac{7}{x-5}$?",
        "zh": "$\\frac{7}{x-5}$ 的定义域必须排除哪个值？"
      },
      "answer": "5",
      "accept": [
        "x=5",
        "x = 5",
        "5.0"
      ],
      "explanation": {
        "en": "The denominator $x-5=0$ at $x=5$, where the expression is undefined.",
        "zh": "分母 $x-5=0$ 时 $x=5$，此处表达式无定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify the complex fraction $\\frac{\\frac{2}{3}}{\\frac{4}{9}}$.",
        "zh": "化简繁分数 $\\frac{\\frac{2}{3}}{\\frac{4}{9}}$。"
      },
      "answer": "3/2",
      "accept": [
        "1.5",
        "3 / 2",
        "1.50"
      ],
      "explanation": {
        "en": "Multiply by the reciprocal: $\\frac{2}{3}\\cdot\\frac{9}{4}=\\frac{18}{12}=\\frac{3}{2}$.",
        "zh": "乘以倒数：$\\frac{2}{3}\\cdot\\frac{9}{4}=\\frac{18}{12}=\\frac{3}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Add $\\frac{4}{x} + \\frac{3}{x}$.",
        "zh": "计算 $\\frac{4}{x} + \\frac{3}{x}$。"
      },
      "answer": "7/x",
      "accept": [
        "7 / x",
        "(7)/(x)",
        "7x^-1"
      ],
      "explanation": {
        "en": "Same denominator, so add numerators: $\\frac{4+3}{x}=\\frac{7}{x}$.",
        "zh": "同分母，分子相加：$\\frac{4+3}{x}=\\frac{7}{x}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Add $\\frac{x}{6} + \\frac{x}{3}$.",
        "zh": "计算 $\\frac{x}{6} + \\frac{x}{3}$。"
      },
      "answer": "x/2",
      "accept": [
        "x / 2",
        "0.5x",
        "0.5*x",
        "(1/2)x"
      ],
      "explanation": {
        "en": "Common denominator $6$: $\\frac{x}{6}+\\frac{2x}{6}=\\frac{3x}{6}=\\frac{x}{2}$.",
        "zh": "通分为 $6$：$\\frac{x}{6}+\\frac{2x}{6}=\\frac{3x}{6}=\\frac{x}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Divide $\\frac{6}{x^2} \\div \\frac{3}{x}$.",
        "zh": "计算 $\\frac{6}{x^2} \\div \\frac{3}{x}$。"
      },
      "answer": "2/x",
      "accept": [
        "2 / x",
        "(2)/(x)",
        "2x^-1"
      ],
      "explanation": {
        "en": "Multiply by the reciprocal: $\\frac{6}{x^2}\\cdot\\frac{x}{3}=\\frac{6x}{3x^2}=\\frac{2}{x}$.",
        "zh": "乘以倒数：$\\frac{6}{x^2}\\cdot\\frac{x}{3}=\\frac{6x}{3x^2}=\\frac{2}{x}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many values are excluded from the domain of $\\frac{x+1}{x(x-2)(x+5)}$?",
        "zh": "$\\frac{x+1}{x(x-2)(x+5)}$ 的定义域排除了多少个值？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "three",
        "三"
      ],
      "explanation": {
        "en": "The denominator is zero at $x=0$, $x=2$, and $x=-5$ — three excluded values.",
        "zh": "分母在 $x=0$、$x=2$、$x=-5$ 处为零，共排除三个值。"
      }
    }
  ],
  "unit-4-rational-functions/graphing-rational-functions-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Find the vertical asymptote of $\\frac{1}{x-3}$.",
        "zh": "求 $\\frac{1}{x-3}$ 的竖直渐近线。"
      },
      "choices": [
        "$x=3$",
        "$x=-3$",
        "$x=0$",
        "$y=3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A vertical asymptote occurs where the denominator is zero and the numerator is not: $x-3=0$ gives $x=3$. Using $x=-3$ flips the sign of the root incorrectly.",
        "zh": "竖直渐近线出现在分母为零而分子不为零处：$x-3=0$ 得 $x=3$。取 $x=-3$ 是错误地改变了根的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the horizontal asymptote of $\\frac{2x}{x+1}$.",
        "zh": "求 $\\frac{2x}{x+1}$ 的水平渐近线。"
      },
      "choices": [
        "$y=0$",
        "$y=2$",
        "$y=1$",
        "$y=-1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The degrees are equal, so the horizontal asymptote is the ratio of leading coefficients: $\\frac{2}{1}=2$, i.e. $y=2$. Answering $y=0$ wrongly assumes the denominator degree is higher.",
        "zh": "分子分母次数相同，水平渐近线为首项系数之比：$\\frac{2}{1}=2$，即 $y=2$。答 $y=0$ 错误地假设分母次数更高。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the horizontal asymptote of $\\frac{3}{x^2+1}$.",
        "zh": "求 $\\frac{3}{x^2+1}$ 的水平渐近线。"
      },
      "choices": [
        "$y=3$",
        "$y=1$",
        "$y=0$",
        "no horizontal asymptote"
      ],
      "answer": 2,
      "explanation": {
        "en": "The denominator degree ($2$) exceeds the numerator degree ($0$), so the horizontal asymptote is $y=0$. Using the constant $3$ ignores that the denominator grows without bound.",
        "zh": "分母次数（$2$）高于分子次数（$0$），故水平渐近线为 $y=0$。用常数 $3$ 忽略了分母无限增大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the slant asymptote of $\\frac{x^2}{x+1}$.",
        "zh": "求 $\\frac{x^2}{x+1}$ 的斜渐近线。"
      },
      "choices": [
        "$y=x$",
        "$y=x+1$",
        "$y=0$",
        "$y=x-1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Long division gives $x^2=(x+1)(x-1)+1$, so $\\frac{x^2}{x+1}=x-1+\\frac{1}{x+1}$ and the slant asymptote is $y=x-1$. Answering $y=x+1$ mistakenly uses the divisor instead of the quotient.",
        "zh": "长除法得 $x^2=(x+1)(x-1)+1$，即 $\\frac{x^2}{x+1}=x-1+\\frac{1}{x+1}$，斜渐近线为 $y=x-1$。答 $y=x+1$ 是误用了除式而非商式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Where is the hole of $\\frac{(x-2)(x+1)}{(x-2)(x-5)}$?",
        "zh": "$\\frac{(x-2)(x+1)}{(x-2)(x-5)}$ 的空心点在哪里？"
      },
      "choices": [
        "$x=2$",
        "$x=5$",
        "$x=-1$",
        "$x=-2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The common factor $(x-2)$ cancels, creating a hole at $x=2$. The factor $(x-5)$ that does not cancel gives a vertical asymptote, not a hole.",
        "zh": "公因式 $(x-2)$ 约去，在 $x=2$ 处产生空心点。未约去的 $(x-5)$ 给出竖直渐近线，而非空心点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the y-intercept of $\\frac{x+4}{x-2}$.",
        "zh": "求 $\\frac{x+4}{x-2}$ 的 y 轴截距。"
      },
      "choices": [
        "$2$",
        "$-2$",
        "$-4$",
        "$4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $x=0$: $\\frac{0+4}{0-2}=\\frac{4}{-2}=-2$. Forgetting the negative denominator gives $+2$.",
        "zh": "令 $x=0$：$\\frac{0+4}{0-2}=\\frac{4}{-2}=-2$。忽略分母为负会得到 $+2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the x-intercept of $\\frac{x-3}{x+5}$.",
        "zh": "求 $\\frac{x-3}{x+5}$ 的 x 轴截距。"
      },
      "choices": [
        "$x=-5$",
        "$x=-3$",
        "$x=3$",
        "$x=5$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The x-intercept is where the numerator is zero: $x-3=0$ gives $x=3$. Using the denominator's zero ($x=-5$) locates a vertical asymptote instead.",
        "zh": "x 轴截距在分子为零处：$x-3=0$ 得 $x=3$。用分母的零点 $x=-5$ 找到的是竖直渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\frac{2}{x}=\\frac{1}{3}$.",
        "zh": "解方程 $\\frac{2}{x}=\\frac{1}{3}$。"
      },
      "choices": [
        "$x=\\frac{2}{3}$",
        "$x=\\frac{1}{6}$",
        "$x=3$",
        "$x=6$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Cross-multiply: $2\\cdot 3 = 1\\cdot x$, so $x=6$. Multiplying the wrong pair of terms gives $\\frac{2}{3}$.",
        "zh": "交叉相乘：$2\\cdot 3 = 1\\cdot x$，得 $x=6$。乘错项会得到 $\\frac{2}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\frac{x}{x-2}=\\frac{2}{x-2}$.",
        "zh": "解方程 $\\frac{x}{x-2}=\\frac{2}{x-2}$。"
      },
      "choices": [
        "no solution",
        "$x=2$",
        "$x=0$",
        "$x=-2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Equating numerators gives $x=2$, but that makes the denominator $x-2=0$, so it is extraneous and must be rejected — there is no solution. Accepting $x=2$ skips checking the domain.",
        "zh": "令分子相等得 $x=2$，但此时分母 $x-2=0$，故为增根须舍去——方程无解。若接受 $x=2$，是漏了定义域检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the numerator's degree is exactly one more than the denominator's degree, the graph has a:",
        "zh": "若分子次数恰好比分母次数大 1，则图象有："
      },
      "choices": [
        "horizontal asymptote",
        "slant (oblique) asymptote",
        "hole",
        "no asymptote"
      ],
      "answer": 1,
      "explanation": {
        "en": "A degree difference of exactly one produces a slant (oblique) asymptote, found by polynomial division. A horizontal asymptote requires the numerator degree to be less than or equal to the denominator degree.",
        "zh": "次数相差恰为 1 会产生斜渐近线，通过多项式除法求得。水平渐近线要求分子次数不超过分母次数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{x-1}{(x-1)(x+4)}$, the vertical asymptote is at:",
        "zh": "对于 $\\frac{x-1}{(x-1)(x+4)}$，竖直渐近线位于："
      },
      "choices": [
        "$x=1$",
        "$x=0$",
        "$x=-4$",
        "$x=4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The factor $(x-1)$ cancels, leaving a hole at $x=1$; the remaining factor $(x+4)$ gives the vertical asymptote $x=-4$. Choosing $x=1$ confuses the hole with the asymptote.",
        "zh": "$(x-1)$ 约去，在 $x=1$ 处为空心点；剩下的 $(x+4)$ 给出竖直渐近线 $x=-4$。选 $x=1$ 是把空心点与渐近线混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the horizontal asymptote of $\\frac{5x^2+1}{2x^2-3}$.",
        "zh": "求 $\\frac{5x^2+1}{2x^2-3}$ 的水平渐近线。"
      },
      "choices": [
        "$y=0$",
        "$y=2$",
        "$y=5$",
        "$y=\\frac{5}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Equal degrees, so the horizontal asymptote is the ratio of leading coefficients: $\\frac{5}{2}$, i.e. $y=\\frac{5}{2}$. Using just the numerator's leading coefficient gives $y=5$.",
        "zh": "次数相同，水平渐近线为首项系数之比：$\\frac{5}{2}$，即 $y=\\frac{5}{2}$。只用分子首项系数会得到 $y=5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the vertical asymptote of $\\frac{1}{x+7}$ (give the x-value).",
        "zh": "求 $\\frac{1}{x+7}$ 的竖直渐近线（写出 x 值）。"
      },
      "answer": "-7",
      "accept": [
        "x=-7",
        "x = -7",
        "-7.0"
      ],
      "explanation": {
        "en": "Set $x+7=0$, so $x=-7$.",
        "zh": "令 $x+7=0$，得 $x=-7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the horizontal asymptote of $\\frac{4x+1}{2x-5}$ (give the y-value).",
        "zh": "求 $\\frac{4x+1}{2x-5}$ 的水平渐近线（写出 y 值）。"
      },
      "answer": "2",
      "accept": [
        "y=2",
        "y = 2",
        "2.0"
      ],
      "explanation": {
        "en": "Equal degrees: ratio of leading coefficients $\\frac{4}{2}=2$, so $y=2$.",
        "zh": "次数相同：首项系数之比 $\\frac{4}{2}=2$，故 $y=2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{3}{x}=\\frac{1}{2}$.",
        "zh": "解方程 $\\frac{3}{x}=\\frac{1}{2}$。"
      },
      "answer": "6",
      "accept": [
        "x=6",
        "x = 6",
        "6.0"
      ],
      "explanation": {
        "en": "Cross-multiply: $3\\cdot 2 = x$, so $x=6$.",
        "zh": "交叉相乘：$3\\cdot 2 = x$，得 $x=6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{x+1}{x}=2$.",
        "zh": "解方程 $\\frac{x+1}{x}=2$。"
      },
      "answer": "1",
      "accept": [
        "x=1",
        "x = 1",
        "1.0"
      ],
      "explanation": {
        "en": "Multiply both sides by $x$: $x+1=2x$, so $1=x$, giving $x=1$ (and $x\\ne 0$ is satisfied).",
        "zh": "两边乘 $x$：$x+1=2x$，得 $1=x$，即 $x=1$（满足 $x\\ne 0$）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the x-intercept of $\\frac{2x-8}{x+3}$ (give the x-value).",
        "zh": "求 $\\frac{2x-8}{x+3}$ 的 x 轴截距（写出 x 值）。"
      },
      "answer": "4",
      "accept": [
        "x=4",
        "x = 4",
        "4.0"
      ],
      "explanation": {
        "en": "The numerator is zero when $2x-8=0$, so $x=4$.",
        "zh": "分子为零时 $2x-8=0$，得 $x=4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the y-intercept of $\\frac{x-6}{x+2}$ (give the y-value).",
        "zh": "求 $\\frac{x-6}{x+2}$ 的 y 轴截距（写出 y 值）。"
      },
      "answer": "-3",
      "accept": [
        "y=-3",
        "y = -3",
        "-3.0"
      ],
      "explanation": {
        "en": "Set $x=0$: $\\frac{0-6}{0+2}=\\frac{-6}{2}=-3$.",
        "zh": "令 $x=0$：$\\frac{0-6}{0+2}=\\frac{-6}{2}=-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the x-coordinate of the hole of $\\frac{(x+3)(x-1)}{(x+3)(x+5)}$.",
        "zh": "求 $\\frac{(x+3)(x-1)}{(x+3)(x+5)}$ 空心点的 x 坐标。"
      },
      "answer": "-3",
      "accept": [
        "x=-3",
        "x = -3",
        "-3.0"
      ],
      "explanation": {
        "en": "The common factor $(x+3)$ cancels, producing a hole at $x=-3$.",
        "zh": "公因式 $(x+3)$ 约去，在 $x=-3$ 处产生空心点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{5}{x}=\\frac{2}{x-3}$.",
        "zh": "解方程 $\\frac{5}{x}=\\frac{2}{x-3}$。"
      },
      "answer": "5",
      "accept": [
        "x=5",
        "x = 5",
        "5.0"
      ],
      "explanation": {
        "en": "Cross-multiply: $5(x-3)=2x$, so $5x-15=2x$, $3x=15$, $x=5$ (neither denominator is zero there).",
        "zh": "交叉相乘：$5(x-3)=2x$，即 $5x-15=2x$，$3x=15$，$x=5$（分母均不为零）。"
      }
    }
  ],
  "unit-5-radical-functions/square-root-cube-root-functions": [
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of the parent function $f(x)=\\sqrt{x}$?",
        "zh": "母函数 $f(x)=\\sqrt{x}$ 的定义域是什么？"
      },
      "choices": [
        "$x \\ge 0$",
        "all real numbers",
        "$x > 0$",
        "$x \\le 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A real square root requires a non-negative radicand, so $x \\ge 0$. Excluding $x=0$ is a mistake, since $\\sqrt{0}=0$ is defined, so the domain includes 0.",
        "zh": "实数平方根要求被开方数非负，所以 $x \\ge 0$。把 $x=0$ 排除是错误的，因为 $\\sqrt{0}=0$ 有定义，定义域应包含 0。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $f(x)=\\sqrt{x}$?",
        "zh": "$f(x)=\\sqrt{x}$ 的值域是什么？"
      },
      "choices": [
        "$y \\le 0$",
        "$y \\ge 0$",
        "all real numbers",
        "$y > 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The principal square root is never negative and reaches 0 at $x=0$, so outputs satisfy $y \\ge 0$. Assuming both a positive and negative branch (like $\\pm\\sqrt{x}$) is the common error, but the function only gives the non-negative branch.",
        "zh": "主平方根永不为负，且在 $x=0$ 时取到 0，所以输出满足 $y \\ge 0$。误以为有正负两支（如 $\\pm\\sqrt{x}$）是常见错误，但该函数只取非负那一支。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $g(x)=\\sqrt[3]{x}$?",
        "zh": "$g(x)=\\sqrt[3]{x}$ 的定义域是什么？"
      },
      "choices": [
        "$x \\ge 0$",
        "$x > 0$",
        "all real numbers",
        "$x \\ne 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A cube root is defined for negative, zero, and positive inputs (e.g. $\\sqrt[3]{-8}=-2$), so the domain is all real numbers. Restricting to non-negative inputs wrongly applies the square-root rule to a cube root.",
        "zh": "立方根对负数、零和正数都有定义（例如 $\\sqrt[3]{-8}=-2$），所以定义域是全体实数。把输入限制为非负是错误地把平方根的规则套用到立方根上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $g(x)=\\sqrt[3]{x}$?",
        "zh": "$g(x)=\\sqrt[3]{x}$ 的值域是什么？"
      },
      "choices": [
        "$y > 0$",
        "$y \\ge 0$",
        "$y \\le 0$",
        "all real numbers"
      ],
      "answer": 3,
      "explanation": {
        "en": "Cube roots produce every real output as $x$ ranges over all reals, so the range is all real numbers. Limiting outputs to non-negative values mistakenly copies the range of the square-root function.",
        "zh": "当 $x$ 取遍所有实数时，立方根能产生每一个实数输出，所以值域是全体实数。把输出限制为非负是错误地照搬了平方根函数的值域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=\\sqrt{x-5}$ is the graph of $\\sqrt{x}$ transformed how?",
        "zh": "$g(x)=\\sqrt{x-5}$ 的图像是 $\\sqrt{x}$ 经过怎样的变换得到的？"
      },
      "choices": [
        "shifted right 5",
        "shifted left 5",
        "shifted up 5",
        "shifted down 5"
      ],
      "answer": 0,
      "explanation": {
        "en": "Replacing $x$ with $x-5$ shifts the graph right 5 (the starting point moves from $x=0$ to $x=5$). Reading the minus sign as a leftward shift is the classic sign-direction error.",
        "zh": "把 $x$ 换成 $x-5$ 使图像向右平移 5（起点从 $x=0$ 移到 $x=5$）。把减号读成向左平移是典型的方向符号错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $g(x)=\\sqrt{x-5}$?",
        "zh": "$g(x)=\\sqrt{x-5}$ 的定义域是什么？"
      },
      "choices": [
        "$x \\ge -5$",
        "$x \\ge 5$",
        "$x \\ge 0$",
        "all real numbers"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set the radicand $\\ge 0$: $x-5 \\ge 0$ gives $x \\ge 5$. Using $x \\ge -5$ comes from mishandling the sign when solving the inequality.",
        "zh": "令被开方数 $\\ge 0$：$x-5 \\ge 0$ 得 $x \\ge 5$。写成 $x \\ge -5$ 是解不等式时符号处理出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $g(x)=\\sqrt{x}-4$ is the graph of $\\sqrt{x}$ transformed how?",
        "zh": "$g(x)=\\sqrt{x}-4$ 的图像是 $\\sqrt{x}$ 经过怎样的变换得到的？"
      },
      "choices": [
        "shifted right 4",
        "shifted up 4",
        "shifted down 4",
        "shifted left 4"
      ],
      "answer": 2,
      "explanation": {
        "en": "Subtracting 4 outside the radical lowers every output by 4, a downward shift. Treating it as a horizontal shift confuses a change outside the function (vertical) with one inside (horizontal).",
        "zh": "在根号外减 4 会把每个输出降低 4，是向下平移。把它当作水平平移是混淆了函数外的变化（竖直）与函数内的变化（水平）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best describes the graph of $g(x)=-\\sqrt{x}$ compared to $\\sqrt{x}$?",
        "zh": "与 $\\sqrt{x}$ 相比，$g(x)=-\\sqrt{x}$ 的图像该如何描述？"
      },
      "choices": [
        "reflection over the y-axis",
        "vertical stretch",
        "shifted down",
        "reflection over the x-axis"
      ],
      "answer": 3,
      "explanation": {
        "en": "The negative outside the radical negates each $y$-value, reflecting the graph across the x-axis. A reflection across the y-axis would instead require negating the input, $\\sqrt{-x}$.",
        "zh": "根号外的负号使每个 $y$ 值取相反数，图像沿 x 轴翻折。而沿 y 轴翻折需要对输入取负，即 $\\sqrt{-x}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=x^2$ restricted to $x \\ge 0$?",
        "zh": "$f(x)=x^2$（限定 $x \\ge 0$）的反函数是什么？"
      },
      "choices": [
        "$\\sqrt{x}$",
        "$-\\sqrt{x}$",
        "$\\sqrt[3]{x}$",
        "$x^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Undoing squaring on the non-negative branch gives $f^{-1}(x)=\\sqrt{x}$. Choosing the negative root would invert the branch $x \\le 0$ instead, not the restricted domain given here.",
        "zh": "在非负分支上撤销平方得到 $f^{-1}(x)=\\sqrt{x}$。取负根反的是 $x \\le 0$ 那一支，而不是这里限定的定义域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the inverse of $f(x)=x^3$?",
        "zh": "$f(x)=x^3$ 的反函数是什么？"
      },
      "choices": [
        "$\\sqrt{x}$",
        "$\\sqrt[3]{x}$",
        "$3x$",
        "$\\dfrac{1}{x^3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The inverse undoes cubing, so $f^{-1}(x)=\\sqrt[3]{x}$. Writing $\\frac{1}{x^3}$ confuses the inverse function with the reciprocal.",
        "zh": "反函数撤销立方，所以 $f^{-1}(x)=\\sqrt[3]{x}$。写成 $\\frac{1}{x^3}$ 是把反函数与倒数混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $g(x)=3\\sqrt{x}$, what is $g(4)$?",
        "zh": "对于 $g(x)=3\\sqrt{x}$，$g(4)$ 等于多少？"
      },
      "choices": [
        "9",
        "12",
        "6",
        "3"
      ],
      "answer": 2,
      "explanation": {
        "en": "Compute $\\sqrt{4}=2$ first, then multiply: $3 \\times 2 = 6$. Getting 12 comes from multiplying before taking the root ($\\sqrt{3\\cdot 4}$ style) rather than after.",
        "zh": "先算 $\\sqrt{4}=2$，再相乘：$3 \\times 2 = 6$。得到 12 是在开方之前就相乘（类似 $\\sqrt{3\\cdot 4}$），而不是开方之后。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $g(x)=\\sqrt{2x-8}$?",
        "zh": "$g(x)=\\sqrt{2x-8}$ 的定义域是什么？"
      },
      "choices": [
        "$x \\ge 8$",
        "$x \\ge -4$",
        "$x \\ge 0$",
        "$x \\ge 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Solve $2x-8 \\ge 0$: $2x \\ge 8$, so $x \\ge 4$. Answering $x \\ge 8$ forgets to divide by 2 after isolating the term.",
        "zh": "解 $2x-8 \\ge 0$：$2x \\ge 8$，所以 $x \\ge 4$。答成 $x \\ge 8$ 是移项后忘了除以 2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(49)$ for $f(x)=\\sqrt{x}$.",
        "zh": "已知 $f(x)=\\sqrt{x}$，求 $f(49)$。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "$\\sqrt{49}=7$ because $7^2=49$. Only the non-negative principal root is used, so the answer is 7 (not $\\pm 7$).",
        "zh": "$\\sqrt{49}=7$，因为 $7^2=49$。只取非负的主平方根，所以答案是 7（不是 $\\pm 7$）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $g(x)=\\sqrt{x-3}$, the domain is $x \\ge$ ___ . Enter the number.",
        "zh": "对于 $g(x)=\\sqrt{x-3}$，其定义域为 $x \\ge$ ___ 。请填数字。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Require $x-3 \\ge 0$, so $x \\ge 3$. The boundary is $+3$, not $-3$; the sign flips when you move the constant.",
        "zh": "要求 $x-3 \\ge 0$，所以 $x \\ge 3$。边界是 $+3$ 而非 $-3$；移动常数时符号会改变。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt[3]{-27}$.",
        "zh": "求 $\\sqrt[3]{-27}$。"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "$(-3)^3=-27$, so $\\sqrt[3]{-27}=-3$. Cube roots of negatives are defined, so 'no solution' would be wrong here.",
        "zh": "$(-3)^3=-27$，所以 $\\sqrt[3]{-27}=-3$。负数的立方根有定义，因此答成“无解”是错的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the inverse of $f(x)=x^3$, evaluate $f^{-1}(64)$.",
        "zh": "利用 $f(x)=x^3$ 的反函数，求 $f^{-1}(64)$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$f^{-1}(x)=\\sqrt[3]{x}$ and $\\sqrt[3]{64}=4$ since $4^3=64$. Answering 8 confuses the cube root with the square root.",
        "zh": "$f^{-1}(x)=\\sqrt[3]{x}$，且 $\\sqrt[3]{64}=4$，因为 $4^3=64$。答成 8 是把立方根与平方根混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $g(x)=\\sqrt{x+7}-2$, the domain is $x \\ge$ ___ . Enter the number.",
        "zh": "对于 $g(x)=\\sqrt{x+7}-2$，其定义域为 $x \\ge$ ___ 。请填数字。"
      },
      "answer": "-7",
      "accept": [
        "-7.0"
      ],
      "explanation": {
        "en": "Only the radicand controls the domain: $x+7 \\ge 0$ gives $x \\ge -7$. The '$-2$' outside shifts the graph vertically and does not affect the domain.",
        "zh": "只有被开方数决定定义域：$x+7 \\ge 0$ 得 $x \\ge -7$。根号外的 “$-2$” 只是竖直平移，不影响定义域。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=2\\sqrt{x}+1$, evaluate $f(9)$.",
        "zh": "对于 $f(x)=2\\sqrt{x}+1$，求 $f(9)$。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "$\\sqrt{9}=3$, then $2(3)+1=7$. Order matters: take the root, multiply, then add. Adding before multiplying gives the wrong value.",
        "zh": "$\\sqrt{9}=3$，再算 $2(3)+1=7$。运算顺序要点：先开方、再乘、后加。先加后乘会得到错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The range of $f(x)=\\sqrt{x}+5$ is $y \\ge$ ___ . Enter the number.",
        "zh": "$f(x)=\\sqrt{x}+5$ 的值域为 $y \\ge$ ___ 。请填数字。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The smallest value of $\\sqrt{x}$ is 0, so the smallest output is $0+5=5$, giving $y \\ge 5$. Answering 0 ignores the vertical shift of $+5$.",
        "zh": "$\\sqrt{x}$ 的最小值是 0，所以最小输出为 $0+5=5$，即 $y \\ge 5$。答成 0 是忽略了 $+5$ 的竖直平移。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt[3]{125}$.",
        "zh": "求 $\\sqrt[3]{125}$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$5^3=125$, so $\\sqrt[3]{125}=5$. Answering 25 mistakenly takes a square-type root instead of the cube root.",
        "zh": "$5^3=125$，所以 $\\sqrt[3]{125}=5$。答成 25 是错误地当成平方类的根，而不是立方根。"
      }
    }
  ],
  "unit-5-radical-functions/solving-radical-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x}=5$.",
        "zh": "解 $\\sqrt{x}=5$。"
      },
      "choices": [
        "25",
        "5",
        "10",
        "50"
      ],
      "answer": 0,
      "explanation": {
        "en": "Square both sides: $(\\sqrt{x})^2=5^2$ gives $x=25$. Check: $\\sqrt{25}=5$. Answering 5 leaves the equation with the radical still in place.",
        "zh": "两边平方：$(\\sqrt{x})^2=5^2$ 得 $x=25$。检验：$\\sqrt{25}=5$。答成 5 是没有真正解出被根号包住的 $x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x+3}=4$.",
        "zh": "解 $\\sqrt{x+3}=4$。"
      },
      "choices": [
        "16",
        "13",
        "1",
        "19"
      ],
      "answer": 1,
      "explanation": {
        "en": "Square both sides: $x+3=16$, so $x=13$. Check: $\\sqrt{16}=4$. Stopping at 16 forgets to subtract the 3 after squaring.",
        "zh": "两边平方：$x+3=16$，所以 $x=13$。检验：$\\sqrt{16}=4$。停在 16 是平方之后忘了减去 3。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the correct FIRST step to solve $\\sqrt{x-2}+3=7$?",
        "zh": "解 $\\sqrt{x-2}+3=7$ 的正确第一步是什么？"
      },
      "choices": [
        "square both sides right away",
        "add 3 to both sides",
        "subtract 3 to isolate the radical",
        "divide both sides by 3"
      ],
      "answer": 2,
      "explanation": {
        "en": "Isolate the radical first by subtracting 3, giving $\\sqrt{x-2}=4$, then square. Squaring before isolating forces you to expand $(\\sqrt{x-2}+3)^2$, which reintroduces a radical.",
        "zh": "先减 3 把根号单独留下，得到 $\\sqrt{x-2}=4$，再平方。若先平方就要展开 $(\\sqrt{x-2}+3)^2$，反而又冒出根号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{2x+1}=3$.",
        "zh": "解 $\\sqrt{2x+1}=3$。"
      },
      "choices": [
        "3",
        "1",
        "5",
        "4"
      ],
      "answer": 3,
      "explanation": {
        "en": "Square: $2x+1=9$, so $2x=8$ and $x=4$. Check: $\\sqrt{9}=3$. Answering 5 comes from computing $9-... $ incorrectly and skipping the division by 2.",
        "zh": "平方：$2x+1=9$，所以 $2x=8$，$x=4$。检验：$\\sqrt{9}=3$。答成 5 是计算出错并漏了除以 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why must you check solutions when solving radical equations?",
        "zh": "解无理方程时为什么必须检验解？"
      },
      "choices": [
        "squaring both sides can create extraneous solutions",
        "radical equations always have two solutions",
        "to find the domain first",
        "because square roots are negative"
      ],
      "answer": 0,
      "explanation": {
        "en": "Raising both sides to an even power can introduce extraneous solutions that don't satisfy the original equation, so each answer must be checked. Radical equations do not automatically have two solutions.",
        "zh": "两边乘方（尤其偶次方）可能引入不满足原方程的增根，所以每个解都要代回检验。无理方程并不会自动有两个解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^{1/2}=6$.",
        "zh": "解 $x^{1/2}=6$。"
      },
      "choices": [
        "6",
        "36",
        "3",
        "12"
      ],
      "answer": 1,
      "explanation": {
        "en": "$x^{1/2}=\\sqrt{x}$, so squaring gives $x=36$. Answering 3 comes from dividing 6 by 2 rather than squaring to undo the one-half power.",
        "zh": "$x^{1/2}=\\sqrt{x}$，平方得 $x=36$。答成 3 是把 6 除以 2，而不是通过平方来撤销 1/2 次幂。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^{2/3}=4$ for the positive solution.",
        "zh": "求 $x^{2/3}=4$ 的正数解。"
      },
      "choices": [
        "16",
        "2",
        "8",
        "64"
      ],
      "answer": 2,
      "explanation": {
        "en": "Raise both sides to the $3/2$ power: $x=4^{3/2}=(\\sqrt{4})^3=2^3=8$. Answering 2 stops after the square root and never applies the cube.",
        "zh": "两边取 $3/2$ 次幂：$x=4^{3/2}=(\\sqrt{4})^3=2^3=8$。答成 2 是只开了平方却没有再取立方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x}=-4$.",
        "zh": "解 $\\sqrt{x}=-4$。"
      },
      "choices": [
        "16",
        "-16",
        "4",
        "no real solution"
      ],
      "answer": 3,
      "explanation": {
        "en": "The principal square root is never negative, so no real $x$ works. If you square carelessly you get $x=16$, but checking $\\sqrt{16}=4 \\ne -4$ shows it is extraneous.",
        "zh": "主平方根永不为负，所以没有实数 $x$ 满足。若草率平方会得到 $x=16$，但检验 $\\sqrt{16}=4 \\ne -4$ 说明它是增根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt[3]{x}=2$.",
        "zh": "解 $\\sqrt[3]{x}=2$。"
      },
      "choices": [
        "8",
        "6",
        "4",
        "0.5"
      ],
      "answer": 0,
      "explanation": {
        "en": "Cube both sides: $x=2^3=8$. Answering 4 cubes only partway (squares instead of cubes) to undo the cube root.",
        "zh": "两边立方：$x=2^3=8$。答成 4 是只做了平方而非立方来撤销立方根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\sqrt{x+5}=\\sqrt{2x-1}$.",
        "zh": "解 $\\sqrt{x+5}=\\sqrt{2x-1}$。"
      },
      "choices": [
        "4",
        "6",
        "-6",
        "2"
      ],
      "answer": 1,
      "explanation": {
        "en": "Square both sides: $x+5=2x-1$, so $x=6$. Check: $\\sqrt{11}=\\sqrt{11}$, valid. Answering $-6$ mishandles the sign when isolating $x$.",
        "zh": "两边平方：$x+5=2x-1$，所以 $x=6$。检验：$\\sqrt{11}=\\sqrt{11}$，成立。答成 $-6$ 是移项求 $x$ 时符号出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2\\sqrt{x}=10$.",
        "zh": "解 $2\\sqrt{x}=10$。"
      },
      "choices": [
        "5",
        "20",
        "25",
        "100"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide first: $\\sqrt{x}=5$, then square to get $x=25$. Squaring before dividing by 2 (getting 100) skips isolating the radical.",
        "zh": "先除：$\\sqrt{x}=5$，再平方得 $x=25$。在除以 2 之前就平方（得到 100）是没有先把根号单独留出。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^{1/3}=-3$.",
        "zh": "解 $x^{1/3}=-3$。"
      },
      "choices": [
        "27",
        "-9",
        "-1",
        "-27"
      ],
      "answer": 3,
      "explanation": {
        "en": "Cube both sides: $x=(-3)^3=-27$. Answering 27 drops the negative sign; an odd power keeps the sign, so the result stays negative.",
        "zh": "两边立方：$x=(-3)^3=-27$。答成 27 是丢掉了负号；奇次方保留符号，所以结果仍为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{x}=9$.",
        "zh": "解 $\\sqrt{x}=9$。"
      },
      "answer": "81",
      "accept": [
        "81.0",
        "+81"
      ],
      "explanation": {
        "en": "Square both sides: $x=9^2=81$. Check: $\\sqrt{81}=9$. Answering 3 takes a root of 9 instead of squaring it.",
        "zh": "两边平方：$x=9^2=81$。检验：$\\sqrt{81}=9$。答成 3 是对 9 开方，而不是平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{x-4}=5$.",
        "zh": "解 $\\sqrt{x-4}=5$。"
      },
      "answer": "29",
      "accept": [
        "29.0",
        "+29"
      ],
      "explanation": {
        "en": "Square: $x-4=25$, so $x=29$. Check: $\\sqrt{25}=5$. Answering 25 forgets to add the 4 back after squaring.",
        "zh": "平方：$x-4=25$，所以 $x=29$。检验：$\\sqrt{25}=5$。答成 25 是平方后忘了把 4 加回来。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^{1/2}=10$.",
        "zh": "解 $x^{1/2}=10$。"
      },
      "answer": "100",
      "accept": [
        "100.0",
        "+100"
      ],
      "explanation": {
        "en": "$x^{1/2}=\\sqrt{x}$, so squaring gives $x=100$. Answering 5 divides 10 by 2 instead of squaring to undo the half power.",
        "zh": "$x^{1/2}=\\sqrt{x}$，平方得 $x=100$。答成 5 是把 10 除以 2，而不是平方来撤销 1/2 次幂。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt[3]{x}=4$.",
        "zh": "解 $\\sqrt[3]{x}=4$。"
      },
      "answer": "64",
      "accept": [
        "64.0",
        "+64"
      ],
      "explanation": {
        "en": "Cube both sides: $x=4^3=64$. Answering 16 squares instead of cubing, which does not fully undo the cube root.",
        "zh": "两边立方：$x=4^3=64$。答成 16 是做了平方而非立方，不能完全撤销立方根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{2x}=6$.",
        "zh": "解 $\\sqrt{2x}=6$。"
      },
      "answer": "18",
      "accept": [
        "18.0",
        "+18"
      ],
      "explanation": {
        "en": "Square: $2x=36$, so $x=18$. Check: $\\sqrt{36}=6$. Answering 36 forgets to divide by 2 after squaring.",
        "zh": "平方：$2x=36$，所以 $x=18$。检验：$\\sqrt{36}=6$。答成 36 是平方后忘了除以 2。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many real solutions does $\\sqrt{x}=-2$ have? Enter a number.",
        "zh": "$\\sqrt{x}=-2$ 有多少个实数解？请填数字。"
      },
      "answer": "0",
      "accept": [
        "zero",
        "none",
        "0.0"
      ],
      "explanation": {
        "en": "The principal square root is never negative, so there is no real solution: 0 solutions. Squaring to get $x=4$ produces an extraneous value, since $\\sqrt{4}=2 \\ne -2$.",
        "zh": "主平方根永不为负，所以没有实数解：0 个解。平方得到 $x=4$ 是增根，因为 $\\sqrt{4}=2 \\ne -2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\sqrt{x+1}=\\sqrt{3x-7}$.",
        "zh": "解 $\\sqrt{x+1}=\\sqrt{3x-7}$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Square both sides: $x+1=3x-7$, so $8=2x$ and $x=4$. Check: $\\sqrt{5}=\\sqrt{5}$, valid. Combining like terms incorrectly can lead to a wrong value, so verifying matters.",
        "zh": "两边平方：$x+1=3x-7$，所以 $8=2x$，$x=4$。检验：$\\sqrt{5}=\\sqrt{5}$，成立。合并同类项出错会得到错误值，所以检验很重要。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^{2/3}=9$ for the positive solution.",
        "zh": "求 $x^{2/3}=9$ 的正数解。"
      },
      "answer": "27",
      "accept": [
        "27.0",
        "+27"
      ],
      "explanation": {
        "en": "Raise both sides to the $3/2$ power: $x=9^{3/2}=(\\sqrt{9})^3=3^3=27$. Answering 3 stops after the square root and never applies the cube.",
        "zh": "两边取 $3/2$ 次幂：$x=9^{3/2}=(\\sqrt{9})^3=3^3=27$。答成 3 是只开了平方，没有再取立方。"
      }
    }
  ],
  "unit-6-logarithmic-functions/logarithms-and-properties": [
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\log_3 81$.",
        "zh": "求 $\\log_3 81$ 的值。"
      },
      "choices": [
        "4",
        "3",
        "5",
        "27"
      ],
      "answer": 0,
      "explanation": {
        "en": "We ask: to what power must $3$ be raised to get $81$? Since $3^4 = 81$, the value is $4$. A common mistake is to answer $3$ because that is the base, or $27$ because $81/3 = 27$ — but a logarithm returns the exponent, not the base or a quotient.",
        "zh": "我们要问：$3$ 的几次方等于 $81$？因为 $3^4 = 81$，所以答案是 $4$。常见错误是答 $3$（那是底数）或 $27$（因为 $81/3 = 27$）——但对数给出的是指数，而不是底数或商。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation is equivalent to $\\log_b x = y$?",
        "zh": "下列哪个方程与 $\\log_b x = y$ 等价？"
      },
      "choices": [
        "$x^y = b$",
        "$b^y = x$",
        "$b^x = y$",
        "$y^b = x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A logarithm is the inverse of an exponential: $\\log_b x = y$ means the base $b$ raised to the output $y$ gives the input $x$, i.e. $b^y = x$. A frequent error is putting $x$ in the exponent ($b^x = y$), which swaps the roles of the argument and the result.",
        "zh": "对数是指数的反函数：$\\log_b x = y$ 表示底数 $b$ 的 $y$ 次方等于 $x$，即 $b^y = x$。常见错误是把 $x$ 放到指数上（写成 $b^x = y$），这样就把自变量和结果的角色弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\log_5 1$.",
        "zh": "求 $\\log_5 1$ 的值。"
      },
      "choices": [
        "1",
        "5",
        "0",
        "undefined"
      ],
      "answer": 2,
      "explanation": {
        "en": "For any valid base, $\\log_b 1 = 0$ because $b^0 = 1$. A tempting wrong answer is $1$ (confusing the argument $1$ with the result) or $5$ (confusing it with the base). The exponent that produces $1$ is always $0$.",
        "zh": "对任何合法的底数，$\\log_b 1 = 0$，因为 $b^0 = 1$。诱人的错误答案是 $1$（把自变量 $1$ 当成结果）或 $5$（把它当成底数）。使结果为 $1$ 的指数永远是 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the common logarithm $\\log 100000$.",
        "zh": "求常用对数 $\\log 100000$ 的值。"
      },
      "choices": [
        "4",
        "6",
        "10",
        "5"
      ],
      "answer": 3,
      "explanation": {
        "en": "The common log has base $10$, so $\\log 100000 = \\log 10^5 = 5$. A common slip is to count the zeros wrong or to answer $6$ by counting digits; you must count the power of $10$, and $100000 = 10^5$.",
        "zh": "常用对数以 $10$ 为底，所以 $\\log 100000 = \\log 10^5 = 5$。常见失误是数错零的个数，或按位数答成 $6$；应当数 $10$ 的幂，而 $100000 = 10^5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the natural logarithm $\\ln e^7$.",
        "zh": "求自然对数 $\\ln e^7$ 的值。"
      },
      "choices": [
        "7",
        "1",
        "0",
        "$e^7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The natural log has base $e$, and $\\ln e^x = x$ because they are inverses, so $\\ln e^7 = 7$. Answering $1$ mistakes this for $\\ln e$, and leaving $e^7$ ignores that the log undoes the exponential entirely.",
        "zh": "自然对数以 $e$ 为底，且 $\\ln e^x = x$，因为它们互为反函数，所以 $\\ln e^7 = 7$。答 $1$ 是把它误当成 $\\ln e$，而保留 $e^7$ 则忽略了对数会把指数运算完全抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\log_b (MN)$ by the product property?",
        "zh": "根据乘积法则，$\\log_b (MN)$ 等于下列哪个表达式？"
      },
      "choices": [
        "$\\log_b M \\cdot \\log_b N$",
        "$\\log_b M + \\log_b N$",
        "$\\log_b M - \\log_b N$",
        "$\\log_b (M+N)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The log of a product is the SUM of the logs: $\\log_b(MN) = \\log_b M + \\log_b N$. A frequent error is to multiply the two logs together, but the property converts multiplication inside the log into addition outside it.",
        "zh": "乘积的对数等于各对数之和：$\\log_b(MN) = \\log_b M + \\log_b N$。常见错误是把两个对数相乘，但该法则是把对数里面的乘法变成外面的加法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\log_b \\left(\\frac{M}{N}\\right)$ by the quotient property?",
        "zh": "根据商法则，$\\log_b \\left(\\frac{M}{N}\\right)$ 等于下列哪个表达式？"
      },
      "choices": [
        "$\\log_b M + \\log_b N$",
        "$\\frac{\\log_b M}{\\log_b N}$",
        "$\\log_b M - \\log_b N$",
        "$\\log_b (M-N)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The log of a quotient is the DIFFERENCE of the logs: $\\log_b(M/N) = \\log_b M - \\log_b N$. A tempting mistake is to divide one log by the other, but division inside the log becomes subtraction outside it.",
        "zh": "商的对数等于各对数之差：$\\log_b(M/N) = \\log_b M - \\log_b N$。诱人的错误是把一个对数除以另一个，但对数里面的除法要变成外面的减法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $\\log_b (M^p)$ by the power property?",
        "zh": "根据幂法则，$\\log_b (M^p)$ 等于下列哪个表达式？"
      },
      "choices": [
        "$(\\log_b M)^p$",
        "$p + \\log_b M$",
        "$\\log_b (pM)$",
        "$p \\log_b M$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The power property brings the exponent out front as a factor: $\\log_b(M^p) = p\\log_b M$. A common error is raising the whole log to the power $p$; the exponent multiplies the log, it does not become an outside exponent.",
        "zh": "幂法则把指数提到前面作为系数：$\\log_b(M^p) = p\\log_b M$。常见错误是把整个对数取 $p$ 次方；指数应当与对数相乘，而不是变成外面的指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the change-of-base formula, $\\log_2 7$ equals which of the following?",
        "zh": "利用换底公式，$\\log_2 7$ 等于下列哪一项？"
      },
      "choices": [
        "$\\frac{\\ln 7}{\\ln 2}$",
        "$\\frac{\\ln 2}{\\ln 7}$",
        "$\\ln 7 - \\ln 2$",
        "$\\ln 7 \\cdot \\ln 2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Change of base gives $\\log_2 7 = \\frac{\\ln 7}{\\ln 2}$: the argument goes on top, the base on the bottom. A frequent slip is flipping the fraction to $\\frac{\\ln 2}{\\ln 7}$, but the original argument $7$ must be the numerator.",
        "zh": "换底公式给出 $\\log_2 7 = \\frac{\\ln 7}{\\ln 2}$：自变量在上，底数在下。常见失误是把分式颠倒成 $\\frac{\\ln 2}{\\ln 7}$，但原来的自变量 $7$ 必须放在分子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\log_4 \\left(\\frac{1}{16}\\right)$.",
        "zh": "求 $\\log_4 \\left(\\frac{1}{16}\\right)$ 的值。"
      },
      "choices": [
        "2",
        "-2",
        "-4",
        "$\\frac{1}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "We need the power of $4$ that gives $\\frac{1}{16}$. Since $4^{-2} = \\frac{1}{16}$, the value is $-2$. A common mistake is answering $2$ and forgetting that a reciprocal argument forces a negative exponent.",
        "zh": "我们要找 $4$ 的几次方等于 $\\frac{1}{16}$。因为 $4^{-2} = \\frac{1}{16}$，所以答案是 $-2$。常见错误是答 $2$，忘记了倒数形式的自变量会使指数为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Condense $2\\log x + \\log y$ into a single logarithm.",
        "zh": "把 $2\\log x + \\log y$ 合并成单个对数。"
      },
      "choices": [
        "$\\log (2xy)$",
        "$\\log (x^2 + y)$",
        "$\\log (x^2 y)$",
        "$\\log (2x + y)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "First the power rule turns $2\\log x$ into $\\log x^2$, then the product rule combines the sum into $\\log(x^2 y)$. A tempting error is treating the coefficient $2$ as a multiplier of $x$, giving $2x$, but the $2$ becomes an exponent, not a factor.",
        "zh": "先用幂法则把 $2\\log x$ 变成 $\\log x^2$，再用乘积法则把和合并成 $\\log(x^2 y)$。诱人的错误是把系数 $2$ 当成 $x$ 的乘数写成 $2x$，但这个 $2$ 应当成为指数，而不是系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the function $f(x) = \\log_b x$, what is its domain?",
        "zh": "对于函数 $f(x) = \\log_b x$，它的定义域是什么？"
      },
      "choices": [
        "$x \\ge 0$",
        "all real numbers",
        "$x \\ne 0$",
        "$x > 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A logarithm is only defined for positive inputs, so the domain is $x > 0$. Including $0$ (as in $x \\ge 0$) is wrong because $\\log_b 0$ is undefined — no power of a positive base ever equals $0$.",
        "zh": "对数只对正数有定义，所以定义域是 $x > 0$。把 $0$ 也包含进来（如 $x \\ge 0$）是错误的，因为 $\\log_b 0$ 无定义——正底数的任何次幂都不会等于 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log_2 64$.",
        "zh": "求 $\\log_2 64$ 的值。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "We ask what power of $2$ gives $64$. Since $2^6 = 64$, the answer is $6$. Answering $32$ would mean confusing the logarithm with $64/2$; the log returns the exponent.",
        "zh": "我们要问 $2$ 的几次方等于 $64$。因为 $2^6 = 64$，所以答案是 $6$。若答 $32$，就是把对数误当成 $64/2$；对数给出的是指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the common logarithm $\\log 0.001$.",
        "zh": "求常用对数 $\\log 0.001$ 的值。"
      },
      "answer": "-3",
      "accept": [
        "-3",
        "-3.0",
        "−3"
      ],
      "explanation": {
        "en": "Since $0.001 = 10^{-3}$ and the common log has base $10$, $\\log 0.001 = -3$. A common error is answering $3$ and dropping the negative sign, but a value less than $1$ has a negative log.",
        "zh": "因为 $0.001 = 10^{-3}$，而常用对数以 $10$ 为底，所以 $\\log 0.001 = -3$。常见错误是答 $3$ 而漏掉负号，但小于 $1$ 的数其对数为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\ln 1$.",
        "zh": "求 $\\ln 1$ 的值。"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0"
      ],
      "explanation": {
        "en": "For any base, the log of $1$ is $0$ because $e^0 = 1$. A tempting wrong answer is $1$ (confusing the argument with the result) or $e$ (confusing it with the base).",
        "zh": "对任何底数，$1$ 的对数都是 $0$，因为 $e^0 = 1$。诱人的错误答案是 $1$（把自变量当成结果）或 $e$（把它当成底数）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve for the base $x$: $\\log_x 27 = 3$.",
        "zh": "求底数 $x$：$\\log_x 27 = 3$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Rewrite in exponential form: $x^3 = 27$, so $x = 3$. A mistake is dividing $27$ by $3$ to get $9$, but the equation says $x$ cubed equals $27$, and $3^3 = 27$.",
        "zh": "改写成指数形式：$x^3 = 27$，所以 $x = 3$。一个错误是把 $27$ 除以 $3$ 得 $9$，但方程说的是 $x$ 的三次方等于 $27$，而 $3^3 = 27$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the product property to evaluate $\\log_6 4 + \\log_6 9$.",
        "zh": "利用乘积法则求 $\\log_6 4 + \\log_6 9$ 的值。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Combine into $\\log_6 (4 \\cdot 9) = \\log_6 36 = 2$ because $6^2 = 36$. A common error is multiplying the logs instead of adding the arguments; the sum of logs merges into one log of the product.",
        "zh": "合并成 $\\log_6 (4 \\cdot 9) = \\log_6 36 = 2$，因为 $6^2 = 36$。常见错误是把对数相乘，而不是把自变量相乘；对数之和应合并为乘积的对数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the quotient property to evaluate $\\log_2 40 - \\log_2 5$.",
        "zh": "利用商法则求 $\\log_2 40 - \\log_2 5$ 的值。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Combine into $\\log_2 (40/5) = \\log_2 8 = 3$ because $2^3 = 8$. A tempting error is dividing the logs directly, but a difference of logs becomes one log of the quotient.",
        "zh": "合并成 $\\log_2 (40/5) = \\log_2 8 = 3$，因为 $2^3 = 8$。诱人的错误是直接把对数相除，但对数之差应变成商的对数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log_9 27$. Give a decimal or fraction.",
        "zh": "求 $\\log_9 27$ 的值。用小数或分数表示。"
      },
      "answer": "1.5",
      "accept": [
        "1.5",
        "3/2",
        "1.50",
        "1 1/2"
      ],
      "explanation": {
        "en": "Write both as powers of $3$: $\\log_9 27 = \\frac{\\ln 27}{\\ln 9} = \\frac{3\\ln 3}{2\\ln 3} = \\frac{3}{2} = 1.5$. Answering $3$ ignores that the base $9$ is itself $3^2$, so the exponent is halved.",
        "zh": "把两者都写成 $3$ 的幂：$\\log_9 27 = \\frac{\\ln 27}{\\ln 9} = \\frac{3\\ln 3}{2\\ln 3} = \\frac{3}{2} = 1.5$。答 $3$ 忽略了底数 $9$ 本身是 $3^2$，因此指数要减半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\log_3 \\left(\\frac{1}{9}\\right)$.",
        "zh": "求 $\\log_3 \\left(\\frac{1}{9}\\right)$ 的值。"
      },
      "answer": "-2",
      "accept": [
        "-2",
        "-2.0",
        "−2"
      ],
      "explanation": {
        "en": "Since $\\frac{1}{9} = 3^{-2}$, the log equals $-2$. A common mistake is answering $2$ and forgetting the negative sign that a reciprocal argument produces.",
        "zh": "因为 $\\frac{1}{9} = 3^{-2}$，所以对数等于 $-2$。常见错误是答 $2$，忘记了倒数形式的自变量会带来负号。"
      }
    }
  ],
  "unit-6-logarithmic-functions/solving-exp-log-equations-modeling": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $2^x = 16$.",
        "zh": "解方程 $2^x = 16$。"
      },
      "choices": [
        "4",
        "8",
        "3",
        "2"
      ],
      "answer": 0,
      "explanation": {
        "en": "Write $16$ as a power of $2$: $16 = 2^4$, so $x = 4$. A frequent error is answering $8$ because $16/2 = 8$, but the equation asks for the exponent that produces $16$, not a quotient.",
        "zh": "把 $16$ 写成 $2$ 的幂：$16 = 2^4$，所以 $x = 4$。常见错误是答 $8$（因为 $16/2 = 8$），但方程要求的是使结果为 $16$ 的指数，而不是商。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To solve $b^x = a$ for $x$ (with $b > 0$, $b \\ne 1$), the solution is:",
        "zh": "为解出 $b^x = a$ 中的 $x$（其中 $b > 0$，$b \\ne 1$），其解为："
      },
      "choices": [
        "$x = a^b$",
        "$x = \\log_b a$",
        "$x = \\log_a b$",
        "$x = b^a$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Taking the log base $b$ of both sides undoes the exponential: $x = \\log_b a$. A tempting error is $\\log_a b$, which reverses base and argument; the unknown exponent equals the log of $a$ taken in the original base $b$.",
        "zh": "对两边取以 $b$ 为底的对数即可抵消指数：$x = \\log_b a$。诱人的错误是 $\\log_a b$，它把底数和自变量弄反了；未知指数等于以原底数 $b$ 求 $a$ 的对数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $10^x = 1000$.",
        "zh": "解方程 $10^x = 1000$。"
      },
      "choices": [
        "1",
        "2",
        "3",
        "30"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $1000 = 10^3$, we get $x = 3$. Answering $30$ comes from dividing $1000$ by $10$ improperly; instead take the common log, and $\\log 1000 = 3$.",
        "zh": "因为 $1000 = 10^3$，所以 $x = 3$。答 $30$ 是错误地把 $1000$ 除以 $10$；正确做法是取常用对数，而 $\\log 1000 = 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $e^x = 1$.",
        "zh": "解方程 $e^x = 1$。"
      },
      "choices": [
        "1",
        "$e$",
        "-1",
        "0"
      ],
      "answer": 3,
      "explanation": {
        "en": "Any nonzero base raised to $0$ equals $1$, so $x = 0$ since $e^0 = 1$. A common mistake is answering $1$, confusing the input value with the exponent that produces it.",
        "zh": "任何非零底数的 $0$ 次方都等于 $1$，所以 $x = 0$，因为 $e^0 = 1$。常见错误是答 $1$，把输入值和产生它的指数混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\log_2 x = 5$.",
        "zh": "解方程 $\\log_2 x = 5$。"
      },
      "choices": [
        "32",
        "10",
        "25",
        "7"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rewrite in exponential form: $x = 2^5 = 32$. Answering $10$ comes from multiplying $2 \\cdot 5$, but the base must be raised to the power $5$, giving $32$.",
        "zh": "改写成指数形式：$x = 2^5 = 32$。答 $10$ 是把 $2 \\cdot 5$ 相乘，但应把底数取 $5$ 次方，得 $32$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the common-log equation $\\log x = 2$.",
        "zh": "解常用对数方程 $\\log x = 2$。"
      },
      "choices": [
        "20",
        "100",
        "1000",
        "$e^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The common log has base $10$, so $x = 10^2 = 100$. A tempting error is $e^2$, which would apply to a natural log; here the base is $10$, not $e$.",
        "zh": "常用对数以 $10$ 为底，所以 $x = 10^2 = 100$。诱人的错误是 $e^2$，那是自然对数的情形；这里底数是 $10$，不是 $e$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula models continuous exponential growth?",
        "zh": "下列哪个公式描述连续指数增长？"
      },
      "choices": [
        "$A = P(1 + r)^t$",
        "$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$",
        "$A = Pe^{rt}$",
        "$A = Prt$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Continuous compounding uses the base $e$: $A = Pe^{rt}$. The form $A = P(1+r/n)^{nt}$ is for a finite number of compoundings per year, not the continuous limit where $n \\to \\infty$.",
        "zh": "连续复利使用以 $e$ 为底的公式：$A = Pe^{rt}$。而 $A = P(1+r/n)^{nt}$ 用于每年有限次复利，不是 $n \\to \\infty$ 的连续极限情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A substance halves every $h$ years. Which model gives the amount remaining after $t$ years?",
        "zh": "某物质每 $h$ 年减半。下列哪个模型给出 $t$ 年后剩余的量？"
      },
      "choices": [
        "$A = A_0 (2)^{t/h}$",
        "$A = A_0 \\left(\\frac{1}{2}\\right)^{ht}$",
        "$A = A_0 - \\frac{t}{h}$",
        "$A = A_0 \\left(\\frac{1}{2}\\right)^{t/h}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Half-life decay is $A = A_0 (1/2)^{t/h}$: each block of $h$ years multiplies the amount by $\\frac{1}{2}$. Using base $2$ instead of $\\frac{1}{2}$ would describe growth, and subtracting linearly ignores that decay is exponential.",
        "zh": "半衰期衰减为 $A = A_0 (1/2)^{t/h}$：每经过 $h$ 年，量乘以 $\\frac{1}{2}$。若用底数 $2$ 而不是 $\\frac{1}{2}$ 则描述的是增长，而线性相减则忽略了衰减是指数型的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When solving a logarithmic equation, why must you check each proposed solution?",
        "zh": "在解对数方程时，为什么必须检验每个候选解？"
      },
      "choices": [
        "A proposed solution can make the argument of a log $\\le 0$, which is undefined",
        "Logarithmic equations always have exactly two solutions",
        "The base of the logarithm changes while solving",
        "You must convert the answer from degrees to radians"
      ],
      "answer": 0,
      "explanation": {
        "en": "Solving can introduce extraneous roots that force a log's argument to be zero or negative, where the log is undefined, so each candidate must be substituted back. It is not true that such equations always have two solutions, nor does the base change during valid algebra.",
        "zh": "求解过程可能引入增根，使某个对数的自变量为零或负数，而此时对数无定义，因此每个候选解都必须代回验证。这类方程并非总有两个解，合法的代数运算中底数也不会改变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $3^x = 20$ exactly.",
        "zh": "精确求解 $3^x = 20$。"
      },
      "choices": [
        "$x = \\frac{\\ln 3}{\\ln 20}$",
        "$x = \\frac{\\ln 20}{\\ln 3}$",
        "$x = \\ln 20 - \\ln 3$",
        "$x = \\frac{20}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Take the natural log of both sides: $x \\ln 3 = \\ln 20$, so $x = \\frac{\\ln 20}{\\ln 3}$. A common slip is flipping the fraction; the log of the target $20$ belongs on top, and the log of the base $3$ on the bottom.",
        "zh": "对两边取自然对数：$x \\ln 3 = \\ln 20$，所以 $x = \\frac{\\ln 20}{\\ln 3}$。常见失误是把分式颠倒；目标值 $20$ 的对数应在上，底数 $3$ 的对数应在下。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which formula gives the amount when interest is compounded $n$ times per year?",
        "zh": "当利息每年复利 $n$ 次时，下列哪个公式给出本利和？"
      },
      "choices": [
        "$A = Pe^{rt}$",
        "$A = P(1 + r)^{nt}$",
        "$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$",
        "$A = P(1 + rn)^{t}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With $n$ compoundings per year the rate per period is $r/n$ and the number of periods is $nt$: $A = P(1 + r/n)^{nt}$. Forgetting to divide $r$ by $n$ overstates each period's rate; the $e$-based form is only for continuous compounding.",
        "zh": "每年复利 $n$ 次时，每期利率为 $r/n$，期数为 $nt$：$A = P(1 + r/n)^{nt}$。忘记把 $r$ 除以 $n$ 会夸大每期利率；以 $e$ 为底的公式只用于连续复利。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the model $A = A_0 e^{kt}$, exponential decay occurs when:",
        "zh": "在模型 $A = A_0 e^{kt}$ 中，指数衰减发生的条件是："
      },
      "choices": [
        "$k > 0$",
        "$k = 0$",
        "$k = 1$",
        "$k < 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Decay means the amount shrinks over time, which requires a negative rate constant, $k < 0$. A positive $k$ produces growth, and $k = 0$ leaves the amount constant.",
        "zh": "衰减意味着量随时间减少，这需要负的速率常数，即 $k < 0$。正的 $k$ 会产生增长，而 $k = 0$ 会使量保持不变。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $5^x = 125$.",
        "zh": "解方程 $5^x = 125$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Write $125$ as a power of $5$: $125 = 5^3$, so $x = 3$. Answering $25$ mistakes this for $125/5$; the exponent that yields $125$ is $3$.",
        "zh": "把 $125$ 写成 $5$ 的幂：$125 = 5^3$，所以 $x = 3$。答 $25$ 是把它误当成 $125/5$；使结果为 $125$ 的指数是 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\log_3 x = 4$.",
        "zh": "解方程 $\\log_3 x = 4$。"
      },
      "answer": "81",
      "accept": [
        "81",
        "81.0"
      ],
      "explanation": {
        "en": "Rewrite in exponential form: $x = 3^4 = 81$. A mistake is multiplying $3 \\cdot 4 = 12$, but the base must be raised to the fourth power.",
        "zh": "改写成指数形式：$x = 3^4 = 81$。一个错误是把 $3 \\cdot 4 = 12$ 相乘，但应把底数取 $4$ 次方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $10^x = 0.01$.",
        "zh": "解方程 $10^x = 0.01$。"
      },
      "answer": "-2",
      "accept": [
        "-2",
        "-2.0",
        "−2"
      ],
      "explanation": {
        "en": "Since $0.01 = 10^{-2}$, we get $x = -2$. A common error is dropping the negative sign; a result less than $1$ requires a negative exponent.",
        "zh": "因为 $0.01 = 10^{-2}$，所以 $x = -2$。常见错误是漏掉负号；小于 $1$ 的结果需要负指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population is modeled by $P = 200 e^{0.05 t}$, where $t$ is in years. What is the initial population (at $t = 0$)?",
        "zh": "某种群用 $P = 200 e^{0.05 t}$ 建模，其中 $t$ 以年为单位。初始种群数量（$t = 0$ 时）是多少？"
      },
      "answer": "200",
      "accept": [
        "200",
        "200.0"
      ],
      "explanation": {
        "en": "At $t = 0$, $e^{0.05 \\cdot 0} = e^0 = 1$, so $P = 200$. A tempting error is including the growth rate $0.05$, but at time zero the exponential factor is exactly $1$.",
        "zh": "当 $t = 0$ 时，$e^{0.05 \\cdot 0} = e^0 = 1$，所以 $P = 200$。诱人的错误是把增长率 $0.05$ 也算进去，但在初始时刻指数因子恰好为 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A radioactive sample has a half-life of $8$ years. What fraction of the original amount remains after $24$ years? Give a decimal.",
        "zh": "某放射性样品的半衰期为 $8$ 年。$24$ 年后剩下原量的几分之几？用小数表示。"
      },
      "answer": "0.125",
      "accept": [
        "0.125",
        "1/8",
        ".125",
        "0.13"
      ],
      "explanation": {
        "en": "In $24$ years there are $24/8 = 3$ half-lives, so the fraction is $(1/2)^3 = 1/8 = 0.125$. A common mistake is multiplying by $3 \\cdot \\frac{1}{2}$; each half-life multiplies the amount again, so the halvings are exponential.",
        "zh": "$24$ 年内经历 $24/8 = 3$ 个半衰期，所以剩余比例为 $(1/2)^3 = 1/8 = 0.125$。常见错误是用 $3 \\cdot \\frac{1}{2}$ 相乘；每个半衰期都会再乘一次，因此减半是指数型的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $A = A_0 (1/2)^{t/h}$ with half-life $h = 5$ years, what fraction remains after $10$ years? Give a decimal.",
        "zh": "利用 $A = A_0 (1/2)^{t/h}$，半衰期 $h = 5$ 年，$10$ 年后剩下几分之几？用小数表示。"
      },
      "answer": "0.25",
      "accept": [
        "0.25",
        "1/4",
        ".25"
      ],
      "explanation": {
        "en": "The exponent is $t/h = 10/5 = 2$, so the fraction is $(1/2)^2 = 1/4 = 0.25$. Answering $0.5$ counts only one half-life, but $10$ years spans two.",
        "zh": "指数为 $t/h = 10/5 = 2$，所以剩余比例为 $(1/2)^2 = 1/4 = 0.25$。答 $0.5$ 只算了一个半衰期，但 $10$ 年跨越了两个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\log_2 x = -3$. Give a decimal or fraction.",
        "zh": "解方程 $\\log_2 x = -3$。用小数或分数表示。"
      },
      "answer": "0.125",
      "accept": [
        "0.125",
        "1/8",
        ".125"
      ],
      "explanation": {
        "en": "Rewrite as $x = 2^{-3} = \\frac{1}{8} = 0.125$. A common error is answering $-8$ or $-6$; a negative log makes the input a small positive reciprocal, not a negative number.",
        "zh": "改写成 $x = 2^{-3} = \\frac{1}{8} = 0.125$。常见错误是答 $-8$ 或 $-6$；负的对数值使输入成为一个较小的正倒数，而不是负数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity grows continuously by $A = A_0 e^{0.1 t}$. To the nearest hundredth, how many years $t$ does it take to double? Use $\\ln 2 \\approx 0.6931$.",
        "zh": "某量按 $A = A_0 e^{0.1 t}$ 连续增长。精确到百分位，需多少年 $t$ 才能翻倍？取 $\\ln 2 \\approx 0.6931$。"
      },
      "answer": "6.93",
      "accept": [
        "6.93",
        "6.9",
        "6.931",
        "6.9315"
      ],
      "explanation": {
        "en": "Set $2 = e^{0.1 t}$, take the natural log: $0.1 t = \\ln 2$, so $t = \\frac{\\ln 2}{0.1} \\approx 6.93$ years. A mistake is dividing $\\ln 2$ by $0.1$ incorrectly or forgetting the log entirely; you must undo $e$ with $\\ln$.",
        "zh": "令 $2 = e^{0.1 t}$，取自然对数：$0.1 t = \\ln 2$，所以 $t = \\frac{\\ln 2}{0.1} \\approx 6.93$ 年。一个错误是把 $\\ln 2$ 除以 $0.1$ 时算错，或完全忘记取对数；必须用 $\\ln$ 来抵消 $e$。"
      }
    }
  ],
  "unit-7-trig-unit-circle/radian-measure-unit-circle": [
    {
      "type": "mc",
      "question": {
        "en": "Convert $180^\\circ$ to radians.",
        "zh": "将 $180^\\circ$ 转换为弧度。"
      },
      "choices": [
        "$\\pi$",
        "$\\frac{\\pi}{2}$",
        "$2\\pi$",
        "$\\frac{3\\pi}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply degrees by $\\frac{\\pi}{180}$: $180 \\times \\frac{\\pi}{180} = \\pi$. A half-turn is $\\pi$ radians. Using $2\\pi$ mistakes a half-turn for a full turn.",
        "zh": "用角度乘以 $\\frac{\\pi}{180}$：$180 \\times \\frac{\\pi}{180} = \\pi$。半圈是 $\\pi$ 弧度。用 $2\\pi$ 是把半圈误当成整圈。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $45^\\circ$ to radians.",
        "zh": "将 $45^\\circ$ 转换为弧度。"
      },
      "choices": [
        "$\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{4}$",
        "$\\frac{\\pi}{6}$",
        "$\\frac{\\pi}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$45 \\times \\frac{\\pi}{180} = \\frac{\\pi}{4}$. Reducing $\\frac{45}{180}$ gives $\\frac{1}{4}$. Getting $\\frac{\\pi}{6}$ comes from confusing $45^\\circ$ with $30^\\circ$.",
        "zh": "$45 \\times \\frac{\\pi}{180} = \\frac{\\pi}{4}$。约分 $\\frac{45}{180}$ 得 $\\frac{1}{4}$。得到 $\\frac{\\pi}{6}$ 是把 $45^\\circ$ 与 $30^\\circ$ 混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $\\frac{3\\pi}{4}$ radians to degrees.",
        "zh": "将 $\\frac{3\\pi}{4}$ 弧度转换为角度。"
      },
      "choices": [
        "$45^\\circ$",
        "$120^\\circ$",
        "$135^\\circ$",
        "$150^\\circ$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply radians by $\\frac{180}{\\pi}$: $\\frac{3\\pi}{4} \\times \\frac{180}{\\pi} = 135^\\circ$. Forgetting the factor of 3 in the numerator gives $45^\\circ$.",
        "zh": "用弧度乘以 $\\frac{180}{\\pi}$：$\\frac{3\\pi}{4} \\times \\frac{180}{\\pi} = 135^\\circ$。忘记分子的 3 会得到 $45^\\circ$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $6$. Find the arc length subtended by a central angle of $\\frac{\\pi}{3}$ radians.",
        "zh": "一个圆的半径为 $6$。求圆心角 $\\frac{\\pi}{3}$ 弧度所对的弧长。"
      },
      "choices": [
        "$\\pi$",
        "$3\\pi$",
        "$6\\pi$",
        "$2\\pi$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Use $s = r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi$. The angle must be in radians. Getting $6\\pi$ comes from multiplying by the whole $\\pi$ instead of $\\frac{\\pi}{3}$.",
        "zh": "用 $s = r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi$。角必须是弧度。得到 $6\\pi$ 是用整个 $\\pi$ 而不是 $\\frac{\\pi}{3}$ 去乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the reference angle for $210^\\circ$.",
        "zh": "求 $210^\\circ$ 的参考角。"
      },
      "choices": [
        "$30^\\circ$",
        "$60^\\circ$",
        "$210^\\circ$",
        "$150^\\circ$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$210^\\circ$ is in Quadrant III, so the reference angle is $210 - 180 = 30^\\circ$. Using $360 - 210 = 150^\\circ$ is the rule for Quadrant IV, not III.",
        "zh": "$210^\\circ$ 在第三象限，所以参考角是 $210 - 180 = 30^\\circ$。用 $360 - 210 = 150^\\circ$ 是第四象限的规则，不是第三象限。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the unit-circle coordinates at $\\frac{\\pi}{6}$?",
        "zh": "在 $\\frac{\\pi}{6}$ 处的单位圆坐标是多少？"
      },
      "choices": [
        "$(\\frac{1}{2},\\frac{\\sqrt{3}}{2})$",
        "$(\\frac{\\sqrt{3}}{2},\\frac{1}{2})$",
        "$(\\frac{\\sqrt{2}}{2},\\frac{\\sqrt{2}}{2})$",
        "$(\\frac{1}{2},\\frac{1}{2})$"
      ],
      "answer": 1,
      "explanation": {
        "en": "At $\\frac{\\pi}{6}$ ($30^\\circ$): $x=\\cos=\\frac{\\sqrt{3}}{2}$, $y=\\sin=\\frac{1}{2}$. Swapping to $(\\frac{1}{2},\\frac{\\sqrt{3}}{2})$ is the coordinate for $\\frac{\\pi}{3}$ ($60^\\circ$).",
        "zh": "在 $\\frac{\\pi}{6}$（$30^\\circ$）：$x=\\cos=\\frac{\\sqrt{3}}{2}$，$y=\\sin=\\frac{1}{2}$。交换成 $(\\frac{1}{2},\\frac{\\sqrt{3}}{2})$ 是 $\\frac{\\pi}{3}$（$60^\\circ$）的坐标。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the sign of $\\sin\\theta$ when $\\theta$ lies in Quadrant III?",
        "zh": "当 $\\theta$ 位于第三象限时，$\\sin\\theta$ 的符号是什么？"
      },
      "choices": [
        "positive (正)",
        "zero (零)",
        "negative (负)",
        "undefined (无定义)"
      ],
      "answer": 2,
      "explanation": {
        "en": "In Quadrant III both $x$ and $y$ are negative, and $\\sin\\theta = y$, so sine is negative. Only in Quadrants I and II is $\\sin\\theta$ positive.",
        "zh": "在第三象限 $x$ 与 $y$ 都为负，而 $\\sin\\theta = y$，所以正弦为负。只有第一、二象限的 $\\sin\\theta$ 才为正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the exact value of $\\cos\\frac{\\pi}{4}$.",
        "zh": "求 $\\cos\\frac{\\pi}{4}$ 的精确值。"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$1$",
        "$\\frac{\\sqrt{2}}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "At $\\frac{\\pi}{4}$ ($45^\\circ$), $\\cos = \\sin = \\frac{\\sqrt{2}}{2}$. Choosing $\\frac{\\sqrt{3}}{2}$ confuses the $45^\\circ$ value with the $30^\\circ$ cosine.",
        "zh": "在 $\\frac{\\pi}{4}$（$45^\\circ$），$\\cos = \\sin = \\frac{\\sqrt{2}}{2}$。选 $\\frac{\\sqrt{3}}{2}$ 是把 $45^\\circ$ 的值与 $30^\\circ$ 的余弦混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $270^\\circ$ to radians.",
        "zh": "将 $270^\\circ$ 转换为弧度。"
      },
      "choices": [
        "$\\frac{3\\pi}{2}$",
        "$\\pi$",
        "$\\frac{2\\pi}{3}$",
        "$2\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$270 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{2}$. Reducing $\\frac{270}{180}$ gives $\\frac{3}{2}$. Getting $\\frac{2\\pi}{3}$ comes from inverting the fraction.",
        "zh": "$270 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{2}$。约分 $\\frac{270}{180}$ 得 $\\frac{3}{2}$。得到 $\\frac{2\\pi}{3}$ 是把分数倒过来了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the reference angle for $\\frac{5\\pi}{6}$.",
        "zh": "求 $\\frac{5\\pi}{6}$ 的参考角。"
      },
      "choices": [
        "$\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{6}$",
        "$\\frac{5\\pi}{6}$",
        "$\\frac{\\pi}{4}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{5\\pi}{6}$ ($150^\\circ$) is in Quadrant II, so the reference angle is $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$. Treating the angle as its own reference angle ignores that it is past $\\frac{\\pi}{2}$.",
        "zh": "$\\frac{5\\pi}{6}$（$150^\\circ$）在第二象限，所以参考角是 $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$。把该角当作自身的参考角是忽略了它已超过 $\\frac{\\pi}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the exact value of $\\tan\\frac{\\pi}{3}$.",
        "zh": "求 $\\tan\\frac{\\pi}{3}$ 的精确值。"
      },
      "choices": [
        "$\\frac{1}{\\sqrt{3}}$",
        "$1$",
        "$\\sqrt{3}$",
        "$\\frac{\\sqrt{3}}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\tan\\frac{\\pi}{3} = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/3)} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$. Getting $\\frac{1}{\\sqrt{3}}$ swaps sine and cosine, which is $\\tan\\frac{\\pi}{6}$.",
        "zh": "$\\tan\\frac{\\pi}{3} = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/3)} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$。得到 $\\frac{1}{\\sqrt{3}}$ 是把正弦和余弦交换了，那是 $\\tan\\frac{\\pi}{6}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In which quadrant does the angle $\\frac{7\\pi}{6}$ terminate?",
        "zh": "角 $\\frac{7\\pi}{6}$ 的终边落在哪个象限？"
      },
      "choices": [
        "Quadrant I (第一象限)",
        "Quadrant II (第二象限)",
        "Quadrant IV (第四象限)",
        "Quadrant III (第三象限)"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\frac{7\\pi}{6} = 210^\\circ$, which is between $180^\\circ$ and $270^\\circ$, so it is in Quadrant III. Reading it as just past $\\pi$ but stopping before $\\frac{3\\pi}{2}$ confirms Quadrant III, not II.",
        "zh": "$\\frac{7\\pi}{6} = 210^\\circ$，介于 $180^\\circ$ 与 $270^\\circ$ 之间，所以在第三象限。它刚超过 $\\pi$ 但不到 $\\frac{3\\pi}{2}$，确认为第三象限而非第二象限。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $10$ and a central angle of $1.5$ radians. Find the arc length $s$.",
        "zh": "一个圆半径为 $10$，圆心角为 $1.5$ 弧度。求弧长 $s$。"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "15 units",
        "s=15"
      ],
      "explanation": {
        "en": "Use $s = r\\theta = 10 \\times 1.5 = 15$. Because the angle is already in radians, no degree conversion is needed.",
        "zh": "用 $s = r\\theta = 10 \\times 1.5 = 15$。因为角已是弧度，不需要角度换算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the reference angle (in degrees) for $300^\\circ$.",
        "zh": "求 $300^\\circ$ 的参考角（以度为单位）。"
      },
      "answer": "60",
      "accept": [
        "60.0",
        "60 degrees",
        "60°",
        "60 deg"
      ],
      "explanation": {
        "en": "$300^\\circ$ is in Quadrant IV, so the reference angle is $360 - 300 = 60^\\circ$. Subtracting $180$ instead would incorrectly give $120^\\circ$.",
        "zh": "$300^\\circ$ 在第四象限，所以参考角是 $360 - 300 = 60^\\circ$。若改减 $180$ 会错误地得到 $120^\\circ$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $210^\\circ$ to radians, written as a fraction of $\\pi$. Enter the fraction that multiplies $\\pi$ (for example, for $90^\\circ$ enter 1/2).",
        "zh": "将 $210^\\circ$ 转换为弧度，写成 $\\pi$ 的分数形式。输入乘以 $\\pi$ 的那个分数（例如 $90^\\circ$ 输入 1/2）。"
      },
      "answer": "7/6",
      "accept": [
        "7/6",
        "(7/6)",
        "7 over 6"
      ],
      "explanation": {
        "en": "$210 \\times \\frac{\\pi}{180} = \\frac{210}{180}\\pi = \\frac{7}{6}\\pi$, so the coefficient is $\\frac{7}{6}$. Reducing $\\frac{210}{180}$ by 30 gives $\\frac{7}{6}$.",
        "zh": "$210 \\times \\frac{\\pi}{180} = \\frac{210}{180}\\pi = \\frac{7}{6}\\pi$，所以系数是 $\\frac{7}{6}$。把 $\\frac{210}{180}$ 同除以 30 得 $\\frac{7}{6}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the exact decimal value of $\\sin\\frac{\\pi}{6}$.",
        "zh": "求 $\\sin\\frac{\\pi}{6}$ 的精确小数值。"
      },
      "answer": "0.5",
      "accept": [
        "1/2",
        ".5",
        "0.50",
        "0.500"
      ],
      "explanation": {
        "en": "$\\frac{\\pi}{6} = 30^\\circ$ and $\\sin 30^\\circ = \\frac{1}{2} = 0.5$. Using $\\frac{\\sqrt{3}}{2}$ would be the sine of $60^\\circ$ instead.",
        "zh": "$\\frac{\\pi}{6} = 30^\\circ$，$\\sin 30^\\circ = \\frac{1}{2} = 0.5$。用 $\\frac{\\sqrt{3}}{2}$ 则是 $60^\\circ$ 的正弦。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many radians are in one full revolution? Give a decimal rounded to 2 places.",
        "zh": "一整圈有多少弧度？请给出保留两位小数的结果。"
      },
      "answer": "6.28",
      "accept": [
        "2pi",
        "2π",
        "6.283",
        "6.2832",
        "6.28 rad",
        "6.28 radians"
      ],
      "explanation": {
        "en": "One full circle is $2\\pi \\approx 6.28$ radians. Using $\\pi \\approx 3.14$ would only be a half revolution.",
        "zh": "一整圈是 $2\\pi \\approx 6.28$ 弧度。用 $\\pi \\approx 3.14$ 只是半圈。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $4$ and an arc of length $8$. Find the central angle $\\theta$ in radians.",
        "zh": "一个圆半径为 $4$，弧长为 $8$。求圆心角 $\\theta$（弧度）。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2 rad",
        "2 radians",
        "θ=2"
      ],
      "explanation": {
        "en": "Rearrange $s = r\\theta$ to $\\theta = \\frac{s}{r} = \\frac{8}{4} = 2$ radians. Multiplying instead of dividing would give $32$, which is not an angle.",
        "zh": "将 $s = r\\theta$ 变形为 $\\theta = \\frac{s}{r} = \\frac{8}{4} = 2$ 弧度。用乘而不是除会得到 $32$，那不是一个角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the exact decimal value of $\\cos\\frac{\\pi}{3}$.",
        "zh": "求 $\\cos\\frac{\\pi}{3}$ 的精确小数值。"
      },
      "answer": "0.5",
      "accept": [
        "1/2",
        ".5",
        "0.50",
        "0.500"
      ],
      "explanation": {
        "en": "$\\frac{\\pi}{3} = 60^\\circ$ and $\\cos 60^\\circ = \\frac{1}{2} = 0.5$. Confusing it with $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ is the common error.",
        "zh": "$\\frac{\\pi}{3} = 60^\\circ$，$\\cos 60^\\circ = \\frac{1}{2} = 0.5$。与 $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ 混淆是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the reference angle for $\\frac{5\\pi}{4}$, written as a fraction of $\\pi$. Enter the fraction that multiplies $\\pi$.",
        "zh": "求 $\\frac{5\\pi}{4}$ 的参考角，写成 $\\pi$ 的分数形式。输入乘以 $\\pi$ 的那个分数。"
      },
      "answer": "1/4",
      "accept": [
        "1/4",
        "0.25",
        ".25",
        "(1/4)"
      ],
      "explanation": {
        "en": "$\\frac{5\\pi}{4}$ ($225^\\circ$) is in Quadrant III, so the reference angle is $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$, coefficient $\\frac{1}{4}$. Subtracting from $2\\pi$ instead would be the Quadrant IV rule.",
        "zh": "$\\frac{5\\pi}{4}$（$225^\\circ$）在第三象限，所以参考角是 $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$，系数为 $\\frac{1}{4}$。改用 $2\\pi$ 去减是第四象限的规则。"
      }
    }
  ],
  "unit-7-trig-unit-circle/graphs-of-sine-and-cosine": [
    {
      "type": "mc",
      "question": {
        "en": "What is the amplitude of $y = 3\\sin x$?",
        "zh": "$y = 3\\sin x$ 的振幅是多少？"
      },
      "choices": [
        "$3$",
        "$2$",
        "$1$",
        "$6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The amplitude is $|a|$, the coefficient in front of $\\sin$, so it is $3$. Getting $6$ comes from doubling, but the full peak-to-trough distance is $2|a|$, not the amplitude.",
        "zh": "振幅是 $|a|$，即 $\\sin$ 前的系数，所以是 $3$。得到 $6$ 是把它翻倍了，但峰谷总距离是 $2|a|$，不是振幅。"
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
        "en": "Period $= \\frac{2\\pi}{b} = \\frac{2\\pi}{2} = \\pi$. A larger $b$ compresses the graph. Answering $4\\pi$ multiplies by $b$ instead of dividing.",
        "zh": "周期 $= \\frac{2\\pi}{b} = \\frac{2\\pi}{2} = \\pi$。$b$ 越大图像越压缩。回答 $4\\pi$ 是用 $b$ 去乘而不是除。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the midline of $y = \\sin x + 4$?",
        "zh": "$y = \\sin x + 4$ 的中线是什么？"
      },
      "choices": [
        "$y = 0$",
        "$y = 1$",
        "$y = 4$",
        "$y = -4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The vertical shift $k = 4$ raises the midline to $y = 4$. The sign of $k$ gives the direction; $y = -4$ shifts the wrong way.",
        "zh": "竖直平移 $k = 4$ 把中线抬到 $y = 4$。$k$ 的符号决定方向；$y = -4$ 移错了方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the period of $y = \\cos\\left(\\frac{1}{2}x\\right)$?",
        "zh": "$y = \\cos\\left(\\frac{1}{2}x\\right)$ 的周期是多少？"
      },
      "choices": [
        "$2\\pi$",
        "$\\frac{\\pi}{2}$",
        "$\\pi$",
        "$4\\pi$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{b} = \\frac{2\\pi}{1/2} = 4\\pi$. A fractional $b$ stretches the graph. Answering $\\pi$ divides by 2 instead of by $\\frac{1}{2}$.",
        "zh": "周期 $= \\frac{2\\pi}{b} = \\frac{2\\pi}{1/2} = 4\\pi$。分数 $b$ 使图像拉伸。回答 $\\pi$ 是除以 2 而不是除以 $\\frac{1}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Describe the phase shift of $y = \\sin\\left(x - \\frac{\\pi}{3}\\right)$.",
        "zh": "描述 $y = \\sin\\left(x - \\frac{\\pi}{3}\\right)$ 的相移。"
      },
      "choices": [
        "$\\frac{\\pi}{3}$ right (右)",
        "$\\pi$ right (右)",
        "$\\frac{\\pi}{3}$ left (左)",
        "no shift (无相移)"
      ],
      "answer": 0,
      "explanation": {
        "en": "In $\\sin(x - h)$ the shift is $h = \\frac{\\pi}{3}$ to the right because $x - \\frac{\\pi}{3}$ subtracts. Reading the minus sign as a left shift reverses the true direction.",
        "zh": "在 $\\sin(x - h)$ 中，相移为 $h = \\frac{\\pi}{3}$ 向右，因为 $x - \\frac{\\pi}{3}$ 是减。把减号读成向左会把真实方向弄反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the amplitude of $y = -5\\cos x$?",
        "zh": "$y = -5\\cos x$ 的振幅是多少？"
      },
      "choices": [
        "$-5$",
        "$5$",
        "$10$",
        "$25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Amplitude is $|a| = |-5| = 5$; it is always positive. Answering $-5$ forgets that amplitude uses the absolute value.",
        "zh": "振幅是 $|a| = |-5| = 5$，始终为正。回答 $-5$ 是忘了振幅取绝对值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the maximum value of $y = 2\\sin(3x) - 1$?",
        "zh": "$y = 2\\sin(3x) - 1$ 的最大值是多少？"
      },
      "choices": [
        "$2$",
        "$3$",
        "$1$",
        "$-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Maximum $= k + |a| = -1 + 2 = 1$. The value of $b$ does not affect the maximum. Answering $2$ uses only the amplitude and ignores the vertical shift.",
        "zh": "最大值 $= k + |a| = -1 + 2 = 1$。$b$ 不影响最大值。回答 $2$ 只用了振幅而忽略了竖直平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $y = 4\\sin x + 2$, what is the vertical shift $k$?",
        "zh": "在 $y = 4\\sin x + 2$ 中，竖直平移 $k$ 是多少？"
      },
      "choices": [
        "$4$",
        "$0$",
        "$-2$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The constant added outside the sine is $k = 2$. Choosing $4$ confuses the amplitude coefficient with the vertical shift.",
        "zh": "加在正弦外的常数是 $k = 2$。选 $4$ 是把振幅系数与竖直平移混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $y = a\\sin(bx)$, which formula gives the period?",
        "zh": "对于 $y = a\\sin(bx)$，哪个公式给出周期？"
      },
      "choices": [
        "$\\frac{2\\pi}{b}$",
        "$\\frac{2\\pi}{a}$",
        "$\\frac{b}{2\\pi}$",
        "$2\\pi b$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The period is $\\frac{2\\pi}{b}$, set by the horizontal stretch factor $b$. Using $a$ confuses amplitude with period.",
        "zh": "周期是 $\\frac{2\\pi}{b}$，由水平伸缩因子 $b$ 决定。用 $a$ 是把振幅与周期混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sinusoidal graph oscillates between a maximum of $7$ and a minimum of $1$. What is the amplitude?",
        "zh": "一条正弦曲线在最大值 $7$ 与最小值 $1$ 之间振荡。振幅是多少？"
      },
      "choices": [
        "$7$",
        "$3$",
        "$4$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Amplitude $= \\frac{\\text{max} - \\text{min}}{2} = \\frac{7 - 1}{2} = 3$. Answering $6$ forgets to divide by 2; $4$ is the midline, not the amplitude.",
        "zh": "振幅 $= \\frac{\\text{最大} - \\text{最小}}{2} = \\frac{7 - 1}{2} = 3$。回答 $6$ 是忘了除以 2；$4$ 是中线而非振幅。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sinusoidal graph oscillates between a maximum of $7$ and a minimum of $1$. What is the midline value $k$?",
        "zh": "一条正弦曲线在最大值 $7$ 与最小值 $1$ 之间振荡。中线值 $k$ 是多少？"
      },
      "choices": [
        "$3$",
        "$8$",
        "$4$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Midline $= \\frac{\\text{max} + \\text{min}}{2} = \\frac{7 + 1}{2} = 4$. Answering $8$ forgets to divide by 2; $3$ is the amplitude, not the midline.",
        "zh": "中线 $= \\frac{\\text{最大} + \\text{最小}}{2} = \\frac{7 + 1}{2} = 4$。回答 $8$ 是忘了除以 2；$3$ 是振幅而非中线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation has amplitude $2$ and period $\\pi$?",
        "zh": "哪个方程的振幅为 $2$、周期为 $\\pi$？"
      },
      "choices": [
        "$y = \\sin(2x)$",
        "$y = 2\\sin x$",
        "$y = 2\\sin\\left(\\frac{1}{2}x\\right)$",
        "$y = 2\\sin(2x)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Amplitude $2$ needs $|a| = 2$, and period $\\pi$ needs $\\frac{2\\pi}{b} = \\pi$, so $b = 2$; that gives $y = 2\\sin(2x)$. The option with $a = 1$ has the wrong amplitude even though its period is $\\pi$.",
        "zh": "振幅 $2$ 需要 $|a| = 2$，周期 $\\pi$ 需要 $\\frac{2\\pi}{b} = \\pi$，即 $b = 2$；因此是 $y = 2\\sin(2x)$。振幅系数为 $1$ 的那个虽周期为 $\\pi$，但振幅不对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the amplitude of $y = -7\\cos(4x) + 3$?",
        "zh": "$y = -7\\cos(4x) + 3$ 的振幅是多少？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "|-7|",
        "+7"
      ],
      "explanation": {
        "en": "Amplitude is $|a| = |-7| = 7$. The $b = 4$ and $k = 3$ do not affect amplitude.",
        "zh": "振幅是 $|a| = |-7| = 7$。$b = 4$ 与 $k = 3$ 不影响振幅。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the period of $y = \\sin(4x)$? Give the answer as a fraction of $\\pi$ (for example pi/2).",
        "zh": "$y = \\sin(4x)$ 的周期是多少？请用 $\\pi$ 的分数形式作答（例如 pi/2）。"
      },
      "answer": "pi/2",
      "accept": [
        "π/2",
        "1.57",
        "1.5708",
        "(1/2)pi",
        "0.5pi"
      ],
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{b} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. A larger $b$ shortens the period.",
        "zh": "周期 $= \\frac{2\\pi}{b} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。$b$ 越大周期越短。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the maximum value of $y = 3\\sin x + 5$.",
        "zh": "求 $y = 3\\sin x + 5$ 的最大值。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "Maximum $= k + |a| = 5 + 3 = 8$. Using only the amplitude and ignoring the $+5$ would give $3$.",
        "zh": "最大值 $= k + |a| = 5 + 3 = 8$。只用振幅而忽略 $+5$ 会得到 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the minimum value of $y = 3\\sin x + 5$.",
        "zh": "求 $y = 3\\sin x + 5$ 的最小值。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Minimum $= k - |a| = 5 - 3 = 2$. Adding instead of subtracting the amplitude would give the maximum, $8$.",
        "zh": "最小值 $= k - |a| = 5 - 3 = 2$。把振幅加而不是减会得到最大值 $8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $y = \\sin x$ is shifted to produce $y = \\sin\\left(x - \\frac{\\pi}{4}\\right)$. Enter the horizontal shift as a signed value (in radians, as a fraction of $\\pi$), where positive means to the right.",
        "zh": "把 $y = \\sin x$ 的图像平移得到 $y = \\sin\\left(x - \\frac{\\pi}{4}\\right)$。以带符号的值输入水平相移（弧度，用 $\\pi$ 的分数），正表示向右。"
      },
      "answer": "pi/4",
      "accept": [
        "π/4",
        "0.785",
        "0.7854",
        "(1/4)pi",
        "0.25pi",
        "+pi/4"
      ],
      "explanation": {
        "en": "In $\\sin(x - h)$, $h = \\frac{\\pi}{4}$, a shift of $\\frac{\\pi}{4}$ to the right (positive). Reading the minus as a left shift would give a negative answer.",
        "zh": "在 $\\sin(x - h)$ 中，$h = \\frac{\\pi}{4}$，即向右（正）平移 $\\frac{\\pi}{4}$。把减号读作向左会得到负值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the period of $y = 2\\cos(\\pi x)$?",
        "zh": "$y = 2\\cos(\\pi x)$ 的周期是多少？"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "2 units"
      ],
      "explanation": {
        "en": "Period $= \\frac{2\\pi}{b} = \\frac{2\\pi}{\\pi} = 2$. The $\\pi$ in the argument cancels with the $\\pi$ in the formula, leaving $2$.",
        "zh": "周期 $= \\frac{2\\pi}{b} = \\frac{2\\pi}{\\pi} = 2$。参数中的 $\\pi$ 与公式中的 $\\pi$ 相消，剩下 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sinusoid has a maximum of $10$ and a minimum of $-2$. Find its amplitude.",
        "zh": "一条正弦曲线的最大值为 $10$，最小值为 $-2$。求其振幅。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Amplitude $= \\frac{\\text{max} - \\text{min}}{2} = \\frac{10 - (-2)}{2} = \\frac{12}{2} = 6$. Forgetting the double negative and using $10 - 2$ would give $4$.",
        "zh": "振幅 $= \\frac{\\text{最大} - \\text{最小}}{2} = \\frac{10 - (-2)}{2} = \\frac{12}{2} = 6$。忘了负负得正、用 $10 - 2$ 会得到 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sinusoid has a maximum of $10$ and a minimum of $-2$. Find its midline value $k$.",
        "zh": "一条正弦曲线的最大值为 $10$，最小值为 $-2$。求其中线值 $k$。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4",
        "y=4"
      ],
      "explanation": {
        "en": "Midline $= \\frac{\\text{max} + \\text{min}}{2} = \\frac{10 + (-2)}{2} = \\frac{8}{2} = 4$. Averaging the extremes gives the vertical shift.",
        "zh": "中线 $= \\frac{\\text{最大} + \\text{最小}}{2} = \\frac{10 + (-2)}{2} = \\frac{8}{2} = 4$。取极值的平均即为竖直平移。"
      }
    }
  ],
  "unit-8-trig-modeling-identities/modeling-periodic-phenomena": [
    {
      "type": "mc",
      "question": {
        "en": "A Ferris wheel has a maximum height of 50 m and a minimum height of 4 m. What is the amplitude of a sinusoidal model of a rider's height?",
        "zh": "一个摩天轮最高点为 50 米，最低点为 4 米。乘客高度的正弦模型的振幅是多少？"
      },
      "choices": [
        "$23$ m",
        "$27$ m",
        "$46$ m",
        "$25$ m"
      ],
      "answer": 0,
      "explanation": {
        "en": "Amplitude is half the total swing: $(50-4)/2 = 23$ m. A common mistake is using the midline value $(50+4)/2 = 27$ or the full range $50-4 = 46$ instead of half of it.",
        "zh": "振幅是总摆幅的一半：$(50-4)/2 = 23$ 米。常见错误是用了中线值 $(50+4)/2 = 27$，或用了整个范围 $50-4 = 46$ 而没有取一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A Ferris wheel reaches a maximum height of 50 m and a minimum of 4 m. What is the midline of the height model?",
        "zh": "一个摩天轮最高 50 米、最低 4 米。高度模型的中线是多少？"
      },
      "choices": [
        "$y = 23$",
        "$y = 27$",
        "$y = 46$",
        "$y = 25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The midline is the average of max and min: $(50+4)/2 = 27$. A common error is confusing this with the amplitude $(50-4)/2 = 23$.",
        "zh": "中线是最大值与最小值的平均：$(50+4)/2 = 27$。常见错误是与振幅 $(50-4)/2 = 23$ 混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "One full rotation of a Ferris wheel takes 40 seconds. What is the period of the sinusoidal height model?",
        "zh": "摩天轮转一整圈需要 40 秒。正弦高度模型的周期是多少？"
      },
      "choices": [
        "$80$ s",
        "$20$ s",
        "$40$ s",
        "$\\frac{\\pi}{20}$ s"
      ],
      "answer": 2,
      "explanation": {
        "en": "The period is the time for one complete cycle, which equals one full rotation: 40 s. A common mistake is halving it to 20 or confusing period with the angular frequency $b = 2\\pi/40 = \\pi/20$.",
        "zh": "周期是完成一个完整循环所需的时间，即转一整圈：40 秒。常见错误是取一半得到 20，或把周期与角频率 $b = 2\\pi/40 = \\pi/20$ 混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a sinusoid with period $P$, the coefficient $b$ in $y = a\\sin(bt)+d$ is given by which formula?",
        "zh": "对于周期为 $P$ 的正弦函数，$y = a\\sin(bt)+d$ 中的系数 $b$ 由哪个公式给出？"
      },
      "choices": [
        "$b = \\frac{P}{2\\pi}$",
        "$b = 2\\pi P$",
        "$b = \\frac{\\pi}{P}$",
        "$b = \\frac{2\\pi}{P}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since the period is $P = 2\\pi/b$, solving gives $b = 2\\pi/P$. A frequent error is inverting the relationship and writing $P/(2\\pi)$.",
        "zh": "由于周期 $P = 2\\pi/b$，解得 $b = 2\\pi/P$。常见错误是把关系倒过来写成 $P/(2\\pi)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "High tide is 6 m and low tide is 2 m, and the cycle repeats every 12 hours. Which model gives water depth $y$ (in m) at time $t$ hours, starting at high tide when $t=0$?",
        "zh": "涨潮时水深 6 米，退潮时 2 米，每 12 小时循环一次。哪个模型给出时刻 $t$（小时）的水深 $y$（米），且 $t=0$ 时为高潮？"
      },
      "choices": [
        "$y = 2\\cos\\left(\\frac{\\pi}{6}t\\right) + 4$",
        "$y = 4\\cos\\left(\\frac{\\pi}{6}t\\right) + 2$",
        "$y = 2\\sin\\left(\\frac{\\pi}{6}t\\right) + 4$",
        "$y = 4\\sin\\left(\\frac{\\pi}{6}t\\right) + 2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Amplitude $= (6-2)/2 = 2$, midline $= (6+2)/2 = 4$, and $b = 2\\pi/12 = \\pi/6$. Cosine starts at its maximum, matching high tide at $t=0$. A common error is swapping amplitude and midline, or using sine (which starts at the midline) instead of cosine.",
        "zh": "振幅 $= (6-2)/2 = 2$，中线 $= (6+2)/2 = 4$，$b = 2\\pi/12 = \\pi/6$。余弦从最大值开始，符合 $t=0$ 为高潮。常见错误是把振幅和中线互换，或用了从中线开始的正弦而非余弦。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Daylight hours in a city are modeled by $y = 3\\sin\\left(\\frac{2\\pi}{365}(t-80)\\right) + 12$, where $t$ is the day of the year. How many hours of daylight occur on the longest day?",
        "zh": "某城市的日照时数由 $y = 3\\sin\\left(\\frac{2\\pi}{365}(t-80)\\right) + 12$ 建模，$t$ 为一年中的第几天。最长的一天日照多少小时？"
      },
      "choices": [
        "$9$ h",
        "$15$ h",
        "$12$ h",
        "$18$ h"
      ],
      "answer": 1,
      "explanation": {
        "en": "The maximum equals midline plus amplitude: $12 + 3 = 15$ hours. A common mistake is reporting the midline 12 (the average) or doubling the amplitude to get 18.",
        "zh": "最大值等于中线加振幅：$12 + 3 = 15$ 小时。常见错误是报告中线 12（平均值），或把振幅翻倍得到 18。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sinusoidal temperature model has a maximum at 2:00 PM and its next minimum at 2:00 AM. What is the period?",
        "zh": "一个正弦温度模型在下午 2:00 达到最大值，下一次最小值在凌晨 2:00。周期是多少？"
      },
      "choices": [
        "$12$ h",
        "$6$ h",
        "$24$ h",
        "$48$ h"
      ],
      "answer": 2,
      "explanation": {
        "en": "The gap from a maximum to the next minimum is half a period: 12 hours. So the full period is $2 \\times 12 = 24$ hours. A common error is taking the 12-hour max-to-min gap as the whole period.",
        "zh": "从最大值到下一个最小值是半个周期：12 小时。所以整个周期是 $2 \\times 12 = 24$ 小时。常见错误是把 12 小时的最大到最小间隔当成整个周期。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the model $y = a\\cos(b(t-c)) + d$, the constant $c$ represents which feature?",
        "zh": "在模型 $y = a\\cos(b(t-c)) + d$ 中，常数 $c$ 表示哪个特征？"
      },
      "choices": [
        "The vertical shift (midline)",
        "The period",
        "The amplitude",
        "The horizontal (phase) shift"
      ],
      "answer": 3,
      "explanation": {
        "en": "The value $c$ shifts the graph horizontally, so it is the phase shift. The vertical shift is $d$ and the amplitude is $|a|$; mixing these roles is the usual error.",
        "zh": "$c$ 使图像水平平移，因此是相移。竖直平移是 $d$，振幅是 $|a|$；混淆这些角色是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A tide model is $y = 3\\cos\\left(\\frac{\\pi}{6}t\\right) + 5$ (in m). What is the water depth at $t = 3$ hours?",
        "zh": "潮汐模型为 $y = 3\\cos\\left(\\frac{\\pi}{6}t\\right) + 5$（米）。$t = 3$ 小时时水深是多少？"
      },
      "choices": [
        "$5$ m",
        "$2$ m",
        "$8$ m",
        "$3$ m"
      ],
      "answer": 0,
      "explanation": {
        "en": "At $t=3$, the argument is $\\frac{\\pi}{6}(3) = \\frac{\\pi}{2}$, and $\\cos(\\pi/2) = 0$, so $y = 3(0) + 5 = 5$. A common error is forgetting that cosine is zero here and instead using its maximum value 1, which would give 8.",
        "zh": "当 $t=3$ 时，自变量为 $\\frac{\\pi}{6}(3) = \\frac{\\pi}{2}$，而 $\\cos(\\pi/2) = 0$，所以 $y = 3(0) + 5 = 5$。常见错误是忘记此处余弦为零，误用最大值 1，得到 8。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The number of daylight hours over a year is periodic. Which type of function best models it?",
        "zh": "一年中的日照时数是周期性的。哪类函数最适合建模？"
      },
      "choices": [
        "A linear function",
        "A sinusoidal function",
        "An exponential function",
        "A quadratic function"
      ],
      "answer": 1,
      "explanation": {
        "en": "Daylight rises and falls in a smooth repeating yearly cycle, which is exactly the behavior of a sine or cosine (sinusoidal) function. Linear, exponential, and quadratic functions are not periodic, so they cannot repeat the cycle.",
        "zh": "日照时数以平滑的年度周期起伏重复，这正是正弦或余弦（正弦型）函数的行为。线性、指数和二次函数都不是周期性的，无法重复该循环。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rider boards a Ferris wheel at the bottom (the minimum height). Which function shape most naturally models the height starting at $t=0$?",
        "zh": "乘客在摩天轮最低点（最小高度）上车。从 $t=0$ 开始，哪种函数形式最自然地建模高度？"
      },
      "choices": [
        "$+\\cos$ (starts at maximum)",
        "$+\\sin$ (starts at midline going up)",
        "$-\\cos$ (starts at minimum)",
        "$-\\sin$ (starts at midline going down)"
      ],
      "answer": 2,
      "explanation": {
        "en": "A negative cosine starts at its minimum and rises, matching a rider who boards at the bottom. Positive cosine would start at the top, and sine forms start at the midline, so none of those match a start at the minimum.",
        "zh": "负余弦从最小值开始上升，符合乘客在最低点上车。正余弦从顶部开始，正弦形式从中线开始，因此都不符合从最小值起步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A temperature model is $y = 10\\sin\\left(\\frac{\\pi}{12}(t-6)\\right) + 60$ (in °F), with $t$ in hours after midnight. At what hour does the temperature first reach its maximum?",
        "zh": "温度模型为 $y = 10\\sin\\left(\\frac{\\pi}{12}(t-6)\\right) + 60$（华氏度），$t$ 为午夜后的小时数。温度第一次达到最大值在几点？"
      },
      "choices": [
        "$t = 6$",
        "$t = 18$",
        "$t = 0$",
        "$t = 12$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A sine reaches its maximum when its argument equals $\\pi/2$: $\\frac{\\pi}{12}(t-6) = \\frac{\\pi}{2}$ gives $t-6 = 6$, so $t = 12$. A common error is stopping at the phase shift $t=6$, which is where the sine is only at the midline going up, not the maximum.",
        "zh": "正弦在其自变量等于 $\\pi/2$ 时达到最大值：$\\frac{\\pi}{12}(t-6) = \\frac{\\pi}{2}$ 得 $t-6 = 6$，所以 $t = 12$。常见错误是停在相移 $t=6$，但那里正弦只是处于中线向上，并非最大值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A Ferris wheel has a maximum height of 62 m and a minimum height of 2 m. What is the amplitude (in m)?",
        "zh": "一个摩天轮最高 62 米、最低 2 米。振幅是多少（米）？"
      },
      "answer": "30",
      "accept": [
        "30",
        "30.0",
        "30 m",
        "30m",
        "+30"
      ],
      "explanation": {
        "en": "Amplitude is half the difference of max and min: $(62-2)/2 = 30$ m. Using the full range 60 or the midline 32 would be incorrect.",
        "zh": "振幅是最大值与最小值之差的一半：$(62-2)/2 = 30$ 米。用整个范围 60 或中线 32 都不对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tide cycle repeats every 12.4 hours. In the model $y=a\\cos(bt)+d$, find $b$. Give your answer in terms of $\\pi$ as a decimal coefficient rounded to 3 decimal places, i.e. as the number multiplying $\\pi$.",
        "zh": "潮汐每 12.4 小时循环一次。在模型 $y=a\\cos(bt)+d$ 中求 $b$。以 $\\pi$ 的小数系数形式（即乘以 $\\pi$ 的那个数）作答，保留 3 位小数。"
      },
      "answer": "0.161",
      "accept": [
        "0.161",
        ".161",
        "0.1613",
        "0.16"
      ],
      "explanation": {
        "en": "Since $b = 2\\pi/P = 2\\pi/12.4$, the coefficient of $\\pi$ is $2/12.4 \\approx 0.161$. Forgetting the factor of 2 (using $1/12.4$) is a common error.",
        "zh": "由于 $b = 2\\pi/P = 2\\pi/12.4$，$\\pi$ 的系数为 $2/12.4 \\approx 0.161$。忘记因子 2（用 $1/12.4$）是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Daylight hours are modeled by $y = 2.5\\sin\\left(\\frac{2\\pi}{365}(t-80)\\right) + 12$. How many hours of daylight occur on the shortest day (in hours)?",
        "zh": "日照时数由 $y = 2.5\\sin\\left(\\frac{2\\pi}{365}(t-80)\\right) + 12$ 建模。最短的一天日照多少小时？"
      },
      "answer": "9.5",
      "accept": [
        "9.5",
        "9.50",
        "9.5 h",
        "9.5 hours",
        "19/2"
      ],
      "explanation": {
        "en": "The minimum equals midline minus amplitude: $12 - 2.5 = 9.5$ hours. Adding instead of subtracting gives the maximum 14.5, which is the wrong extreme.",
        "zh": "最小值等于中线减振幅：$12 - 2.5 = 9.5$ 小时。若相加则得到最大值 14.5，取错了极值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A temperature model is $y = 15\\cos\\left(\\frac{\\pi}{12}t\\right) + 68$ (°F). What is the temperature (in °F) at $t = 12$ hours?",
        "zh": "温度模型为 $y = 15\\cos\\left(\\frac{\\pi}{12}t\\right) + 68$（华氏度）。$t = 12$ 小时时温度是多少（华氏度）？"
      },
      "answer": "53",
      "accept": [
        "53",
        "53.0",
        "53 F",
        "53°F",
        "53 degrees"
      ],
      "explanation": {
        "en": "At $t=12$ the argument is $\\frac{\\pi}{12}(12) = \\pi$, and $\\cos(\\pi) = -1$, so $y = 15(-1) + 68 = 53$. Treating $\\cos(\\pi)$ as $+1$ would wrongly give 83.",
        "zh": "当 $t=12$ 时自变量为 $\\frac{\\pi}{12}(12) = \\pi$，而 $\\cos(\\pi) = -1$，所以 $y = 15(-1) + 68 = 53$。若把 $\\cos(\\pi)$ 当作 $+1$ 会错误地得到 83。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A Ferris wheel's height is $y = 20\\sin\\left(\\frac{\\pi}{15}t\\right) + 25$ (m). What is the maximum height (in m) a rider reaches?",
        "zh": "摩天轮高度为 $y = 20\\sin\\left(\\frac{\\pi}{15}t\\right) + 25$（米）。乘客达到的最大高度是多少（米）？"
      },
      "answer": "45",
      "accept": [
        "45",
        "45.0",
        "45 m",
        "45m"
      ],
      "explanation": {
        "en": "Maximum $=$ midline $+$ amplitude $= 25 + 20 = 45$ m. Using only the midline 25 or only the amplitude 20 misses the sum.",
        "zh": "最大值 $=$ 中线 $+$ 振幅 $= 25 + 20 = 45$ 米。只用中线 25 或只用振幅 20 都遗漏了求和。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sinusoidal model has a maximum value of 18 and a minimum value of 6. What is the midline value $d$?",
        "zh": "一个正弦模型的最大值为 18，最小值为 6。中线值 $d$ 是多少？"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "y=12",
        "d=12"
      ],
      "explanation": {
        "en": "The midline is the average of max and min: $(18+6)/2 = 12$. Taking the difference over 2 gives the amplitude 6, not the midline.",
        "zh": "中线是最大值与最小值的平均：$(18+6)/2 = 12$。取差再除以 2 得到的是振幅 6，而非中线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A Ferris wheel completes one revolution every 30 seconds. How many seconds does it take to go from the bottom to the top?",
        "zh": "摩天轮每 30 秒转一圈。从最低点到最高点需要多少秒？"
      },
      "answer": "15",
      "accept": [
        "15",
        "15.0",
        "15 s",
        "15 sec",
        "15 seconds"
      ],
      "explanation": {
        "en": "Going from the minimum to the maximum is half a full cycle: $30/2 = 15$ s. Using the full period 30 forgets that top-to-bottom is only half a revolution.",
        "zh": "从最低点到最高点是半个循环：$30/2 = 15$ 秒。用整个周期 30 忽略了顶到底只是半圈。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The tide model $y = 4\\cos\\left(\\frac{\\pi}{6}t\\right) + 9$ (m) is given. What is the water depth (in m) at low tide?",
        "zh": "给定潮汐模型 $y = 4\\cos\\left(\\frac{\\pi}{6}t\\right) + 9$（米）。退潮时水深是多少（米）？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "5 m",
        "5m"
      ],
      "explanation": {
        "en": "Low tide is the minimum $=$ midline $-$ amplitude $= 9 - 4 = 5$ m. Adding the amplitude instead gives the high-tide value 13.",
        "zh": "退潮是最小值 $=$ 中线 $-$ 振幅 $= 9 - 4 = 5$ 米。若相加则得到涨潮值 13。"
      }
    }
  ],
  "unit-8-trig-modeling-identities/trigonometric-identities": [
    {
      "type": "mc",
      "question": {
        "en": "Which equation is the Pythagorean identity?",
        "zh": "下列哪个方程是毕达哥拉斯恒等式（勾股恒等式）？"
      },
      "choices": [
        "$\\sin^2\\theta + \\cos^2\\theta = 1$",
        "$\\sin^2\\theta - \\cos^2\\theta = 1$",
        "$\\sin\\theta + \\cos\\theta = 1$",
        "$\\sin^2\\theta + \\cos^2\\theta = 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The Pythagorean identity is $\\sin^2\\theta + \\cos^2\\theta = 1$. Dropping the squares or using a minus sign or a right side of 0 breaks the identity, which comes directly from the unit circle.",
        "zh": "毕达哥拉斯恒等式是 $\\sin^2\\theta + \\cos^2\\theta = 1$。去掉平方、改成减号或右边写成 0 都会破坏这个来自单位圆的恒等式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rearranging the Pythagorean identity, $\\sin^2\\theta$ equals which expression?",
        "zh": "将毕达哥拉斯恒等式变形，$\\sin^2\\theta$ 等于哪个表达式？"
      },
      "choices": [
        "$1 + \\cos^2\\theta$",
        "$1 - \\cos^2\\theta$",
        "$\\cos^2\\theta - 1$",
        "$\\cos^2\\theta$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Subtracting $\\cos^2\\theta$ from both sides of $\\sin^2\\theta + \\cos^2\\theta = 1$ gives $\\sin^2\\theta = 1 - \\cos^2\\theta$. Flipping the subtraction to $\\cos^2\\theta - 1$ gives a negative (wrong-sign) result.",
        "zh": "在 $\\sin^2\\theta + \\cos^2\\theta = 1$ 两边减去 $\\cos^2\\theta$ 得 $\\sin^2\\theta = 1 - \\cos^2\\theta$。把减法反过来写成 $\\cos^2\\theta - 1$ 会得到符号相反的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression is equal to $\\tan\\theta$?",
        "zh": "下列哪个表达式等于 $\\tan\\theta$？"
      },
      "choices": [
        "$\\frac{\\cos\\theta}{\\sin\\theta}$",
        "$\\sin\\theta \\cdot \\cos\\theta$",
        "$\\frac{\\sin\\theta}{\\cos\\theta}$",
        "$\\frac{1}{\\sin\\theta}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "By definition $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$. Inverting it to $\\frac{\\cos\\theta}{\\sin\\theta}$ gives cotangent instead.",
        "zh": "根据定义 $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$。把它倒过来写成 $\\frac{\\cos\\theta}{\\sin\\theta}$ 得到的是余切。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant I, what is $\\cos\\theta$?",
        "zh": "若 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 在第一象限，$\\cos\\theta$ 是多少？"
      },
      "choices": [
        "$-\\frac{4}{5}$",
        "$\\frac{2}{5}$",
        "$\\frac{4}{3}$",
        "$\\frac{4}{5}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\cos^2\\theta = 1 - (3/5)^2 = 1 - 9/25 = 16/25$, so $\\cos\\theta = \\pm 4/5$. In Quadrant I cosine is positive, giving $4/5$. Choosing the negative root ignores the quadrant sign.",
        "zh": "$\\cos^2\\theta = 1 - (3/5)^2 = 1 - 9/25 = 16/25$，所以 $\\cos\\theta = \\pm 4/5$。第一象限余弦为正，取 $4/5$。取负根忽略了象限符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\cos\\theta = \\frac{5}{13}$ and $\\theta$ is in Quadrant IV, what is $\\sin\\theta$?",
        "zh": "若 $\\cos\\theta = \\frac{5}{13}$ 且 $\\theta$ 在第四象限，$\\sin\\theta$ 是多少？"
      },
      "choices": [
        "$-\\frac{12}{13}$",
        "$\\frac{8}{13}$",
        "$\\frac{12}{13}$",
        "$-\\frac{5}{13}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sin^2\\theta = 1 - (5/13)^2 = 1 - 25/169 = 144/169$, so $\\sin\\theta = \\pm 12/13$. In Quadrant IV sine is negative, giving $-12/13$. Taking the positive root ignores that sine is negative below the axis.",
        "zh": "$\\sin^2\\theta = 1 - (5/13)^2 = 1 - 25/169 = 144/169$，所以 $\\sin\\theta = \\pm 12/13$。第四象限正弦为负，取 $-12/13$。取正根忽略了轴下方正弦为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $1 - \\sin^2\\theta$.",
        "zh": "化简 $1 - \\sin^2\\theta$。"
      },
      "choices": [
        "$\\tan^2\\theta$",
        "$\\cos^2\\theta$",
        "$1$",
        "$\\sin^2\\theta$"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $\\sin^2\\theta + \\cos^2\\theta = 1$, we get $1 - \\sin^2\\theta = \\cos^2\\theta$. Leaving it as $\\sin^2\\theta$ confuses which term the 1 removes.",
        "zh": "由 $\\sin^2\\theta + \\cos^2\\theta = 1$ 得 $1 - \\sin^2\\theta = \\cos^2\\theta$。写成 $\\sin^2\\theta$ 是搞混了 1 减去的是哪一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In which two quadrants is $\\cos\\theta$ negative?",
        "zh": "$\\cos\\theta$ 在哪两个象限为负？"
      },
      "choices": [
        "Quadrants III and IV",
        "Quadrants I and II",
        "Quadrants II and III",
        "Quadrants I and IV"
      ],
      "answer": 2,
      "explanation": {
        "en": "Cosine corresponds to the x-coordinate on the unit circle, which is negative on the left side: Quadrants II and III. The quadrants where the x-coordinate is positive (I and IV) give positive cosine.",
        "zh": "余弦对应单位圆上的 x 坐标，在左侧为负：第二和第三象限。x 坐标为正的象限（第一和第四）余弦为正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is equal to $\\frac{\\sin^2\\theta}{\\cos^2\\theta}$?",
        "zh": "下列哪个等于 $\\frac{\\sin^2\\theta}{\\cos^2\\theta}$？"
      },
      "choices": [
        "$1$",
        "$\\cot^2\\theta$",
        "$\\sec^2\\theta$",
        "$\\tan^2\\theta$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $\\tan\\theta = \\sin\\theta/\\cos\\theta$, squaring gives $\\tan^2\\theta = \\sin^2\\theta/\\cos^2\\theta$. The reciprocal ratio $\\cos^2/\\sin^2$ would be cotangent squared instead.",
        "zh": "由于 $\\tan\\theta = \\sin\\theta/\\cos\\theta$，平方得 $\\tan^2\\theta = \\sin^2\\theta/\\cos^2\\theta$。倒数比 $\\cos^2/\\sin^2$ 才是余切平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\sin\\theta = -\\frac{1}{2}$ and $\\theta$ is in Quadrant III, what is $\\cos\\theta$?",
        "zh": "若 $\\sin\\theta = -\\frac{1}{2}$ 且 $\\theta$ 在第三象限，$\\cos\\theta$ 是多少？"
      },
      "choices": [
        "$-\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\cos^2\\theta = 1 - (1/2)^2 = 3/4$, so $\\cos\\theta = \\pm\\frac{\\sqrt{3}}{2}$. In Quadrant III cosine is negative, giving $-\\frac{\\sqrt{3}}{2}$. Taking the positive root ignores that both coordinates are negative there.",
        "zh": "$\\cos^2\\theta = 1 - (1/2)^2 = 3/4$，所以 $\\cos\\theta = \\pm\\frac{\\sqrt{3}}{2}$。第三象限余弦为负，取 $-\\frac{\\sqrt{3}}{2}$。取正根忽略了该象限两个坐标都为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression correctly completes the identity $\\cos^2\\theta = \\underline{\\phantom{xx}}$?",
        "zh": "哪个表达式正确补全恒等式 $\\cos^2\\theta = \\underline{\\phantom{xx}}$？"
      },
      "choices": [
        "$1 + \\sin^2\\theta$",
        "$1 - \\sin^2\\theta$",
        "$\\sin^2\\theta - 1$",
        "$\\sin^2\\theta$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rearranging $\\sin^2\\theta + \\cos^2\\theta = 1$ gives $\\cos^2\\theta = 1 - \\sin^2\\theta$. Reversing the order to $\\sin^2\\theta - 1$ produces a negative value, which cannot equal a square.",
        "zh": "将 $\\sin^2\\theta + \\cos^2\\theta = 1$ 变形得 $\\cos^2\\theta = 1 - \\sin^2\\theta$。写成 $\\sin^2\\theta - 1$ 会得到负值，不可能等于一个平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To verify the identity $\\sin\\theta\\,\\tan\\theta = \\frac{\\sin^2\\theta}{\\cos\\theta}$, what is the best first step?",
        "zh": "要验证恒等式 $\\sin\\theta\\,\\tan\\theta = \\frac{\\sin^2\\theta}{\\cos\\theta}$，最好的第一步是什么？"
      },
      "choices": [
        "Square both sides of the equation",
        "Replace $\\sin^2\\theta$ with $1 - \\cos^2\\theta$",
        "Rewrite $\\tan\\theta$ as $\\frac{\\sin\\theta}{\\cos\\theta}$ on the left",
        "Divide both sides by $\\sin\\theta$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rewriting $\\tan\\theta$ as $\\frac{\\sin\\theta}{\\cos\\theta}$ turns the left side into $\\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}$, matching the right. Squaring both sides is invalid when proving an identity because it can introduce false solutions.",
        "zh": "把 $\\tan\\theta$ 写成 $\\frac{\\sin\\theta}{\\cos\\theta}$ 后，左边变为 $\\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}$，与右边一致。证明恒等式时两边平方是无效的，因为可能引入假解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify the expression $\\cos\\theta\\,\\tan\\theta$.",
        "zh": "化简表达式 $\\cos\\theta\\,\\tan\\theta$。"
      },
      "choices": [
        "$\\cos^2\\theta$",
        "$1$",
        "$\\frac{1}{\\sin\\theta}$",
        "$\\sin\\theta$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\cos\\theta\\,\\tan\\theta = \\cos\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta$ after the cosines cancel. Forgetting that $\\tan\\theta$ contains $\\cos\\theta$ in its denominator prevents the cancellation.",
        "zh": "$\\cos\\theta\\,\\tan\\theta = \\cos\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta$，余弦相消。忘记 $\\tan\\theta$ 的分母含 $\\cos\\theta$ 就无法约分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\cos\\theta = 0.6$ and $\\theta$ is in Quadrant I, what is $\\sin\\theta$ (as a decimal)?",
        "zh": "若 $\\cos\\theta = 0.6$ 且 $\\theta$ 在第一象限，$\\sin\\theta$ 是多少（小数）？"
      },
      "answer": "0.8",
      "accept": [
        "0.8",
        ".8",
        "0.80",
        "4/5",
        "+0.8"
      ],
      "explanation": {
        "en": "$\\sin^2\\theta = 1 - 0.6^2 = 1 - 0.36 = 0.64$, so $\\sin\\theta = \\sqrt{0.64} = 0.8$ (positive in Quadrant I). Forgetting to square 0.6 first is a common slip.",
        "zh": "$\\sin^2\\theta = 1 - 0.6^2 = 1 - 0.36 = 0.64$，所以 $\\sin\\theta = \\sqrt{0.64} = 0.8$（第一象限为正）。常见错误是忘记先把 0.6 平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Compute $\\sin^2(35^\\circ) + \\cos^2(35^\\circ)$.",
        "zh": "计算 $\\sin^2(35^\\circ) + \\cos^2(35^\\circ)$。"
      },
      "answer": "1",
      "accept": [
        "1",
        "1.0",
        "1.00"
      ],
      "explanation": {
        "en": "By the Pythagorean identity, $\\sin^2\\theta + \\cos^2\\theta = 1$ for any angle, so the value is 1 regardless of the $35^\\circ$. There is no need to evaluate the individual sines and cosines.",
        "zh": "根据毕达哥拉斯恒等式，对任意角 $\\sin^2\\theta + \\cos^2\\theta = 1$，所以无论 $35^\\circ$ 是多少，结果都是 1。无需分别计算正弦和余弦。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\sin\\theta = \\frac{7}{25}$ and $\\theta$ is in Quadrant I, find $\\cos\\theta$ as a fraction.",
        "zh": "若 $\\sin\\theta = \\frac{7}{25}$ 且 $\\theta$ 在第一象限，求 $\\cos\\theta$（用分数表示）。"
      },
      "answer": "24/25",
      "accept": [
        "24/25",
        "0.96",
        ".96",
        "0.960"
      ],
      "explanation": {
        "en": "$\\cos^2\\theta = 1 - (7/25)^2 = 1 - 49/625 = 576/625$, so $\\cos\\theta = 24/25$ (positive in Quadrant I). Note $24^2 = 576$, confirming the numerator.",
        "zh": "$\\cos^2\\theta = 1 - (7/25)^2 = 1 - 49/625 = 576/625$，所以 $\\cos\\theta = 24/25$（第一象限为正）。注意 $24^2 = 576$，验证分子正确。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\sin\\theta = 0.28$ and $\\cos\\theta = 0.96$, compute $\\tan\\theta$ (round to 3 decimal places).",
        "zh": "已知 $\\sin\\theta = 0.28$，$\\cos\\theta = 0.96$，计算 $\\tan\\theta$（保留 3 位小数）。"
      },
      "answer": "0.292",
      "accept": [
        "0.292",
        ".292",
        "0.29",
        "7/24",
        "0.2917"
      ],
      "explanation": {
        "en": "$\\tan\\theta = \\sin\\theta/\\cos\\theta = 0.28/0.96 = 0.291\\overline{6} \\approx 0.292$. Multiplying sine and cosine instead of dividing is a common mistake.",
        "zh": "$\\tan\\theta = \\sin\\theta/\\cos\\theta = 0.28/0.96 = 0.291\\overline{6} \\approx 0.292$。把正弦和余弦相乘而非相除是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\frac{1 - \\cos^2\\theta}{\\sin\\theta}$ (assume $\\sin\\theta \\neq 0$). Write your answer as a single trig function of $\\theta$.",
        "zh": "化简 $\\frac{1 - \\cos^2\\theta}{\\sin\\theta}$（设 $\\sin\\theta \\neq 0$）。将答案写成 $\\theta$ 的单个三角函数。"
      },
      "answer": "sin(theta)",
      "accept": [
        "sin(theta)",
        "sintheta",
        "sin theta",
        "sinθ",
        "sin(θ)",
        "\\sin\\theta",
        "sin(x)",
        "sinx"
      ],
      "explanation": {
        "en": "Since $1 - \\cos^2\\theta = \\sin^2\\theta$, the expression is $\\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$. Failing to replace $1 - \\cos^2\\theta$ with $\\sin^2\\theta$ blocks the cancellation.",
        "zh": "由于 $1 - \\cos^2\\theta = \\sin^2\\theta$，表达式为 $\\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$。不把 $1 - \\cos^2\\theta$ 换成 $\\sin^2\\theta$ 就无法约分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\cos\\theta = -\\frac{8}{17}$ and $\\theta$ is in Quadrant II, find $\\sin\\theta$ as a fraction.",
        "zh": "若 $\\cos\\theta = -\\frac{8}{17}$ 且 $\\theta$ 在第二象限，求 $\\sin\\theta$（用分数表示）。"
      },
      "answer": "15/17",
      "accept": [
        "15/17",
        "0.882",
        ".882",
        "0.8824"
      ],
      "explanation": {
        "en": "$\\sin^2\\theta = 1 - (8/17)^2 = 1 - 64/289 = 225/289$, so $\\sin\\theta = \\pm 15/17$. In Quadrant II sine is positive, giving $15/17$. Squaring $-8/17$ makes the sign irrelevant at that step, but the final quadrant choice must stay positive.",
        "zh": "$\\sin^2\\theta = 1 - (8/17)^2 = 1 - 64/289 = 225/289$，所以 $\\sin\\theta = \\pm 15/17$。第二象限正弦为正，取 $15/17$。把 $-8/17$ 平方后该步符号无关，但最后按象限须取正。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\cos^2(50^\\circ) - 1 + \\sin^2(50^\\circ)$.",
        "zh": "计算 $\\cos^2(50^\\circ) - 1 + \\sin^2(50^\\circ)$。"
      },
      "answer": "0",
      "accept": [
        "0",
        "0.0",
        "0.00"
      ],
      "explanation": {
        "en": "Group $\\sin^2(50^\\circ) + \\cos^2(50^\\circ) = 1$, so the expression is $1 - 1 = 0$. There is no need to compute the individual squared terms.",
        "zh": "把 $\\sin^2(50^\\circ) + \\cos^2(50^\\circ) = 1$ 合并，所以表达式为 $1 - 1 = 0$。无需分别计算各平方项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ and $\\sin\\theta = 0.5$, $\\cos\\theta = 0.5$, what is $\\tan\\theta$?",
        "zh": "若 $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$，且 $\\sin\\theta = 0.5$，$\\cos\\theta = 0.5$，$\\tan\\theta$ 是多少？"
      },
      "answer": "1",
      "accept": [
        "1",
        "1.0",
        "1.00",
        "+1"
      ],
      "explanation": {
        "en": "$\\tan\\theta = 0.5/0.5 = 1$. When sine and cosine are equal (and nonzero), their ratio is always 1; multiplying them instead would give 0.25, which is not the tangent.",
        "zh": "$\\tan\\theta = 0.5/0.5 = 1$。当正弦与余弦相等（且非零）时，其比值恒为 1；若相乘则得 0.25，那不是正切。"
      }
    }
  ],
  "unit-9-modeling-with-geometry/geometric-modeling-and-density": [
    {
      "type": "mc",
      "question": {
        "en": "A city has a population of 45,000 people spread over 15 square miles. What is its population density?",
        "zh": "一座城市有 45,000 人，分布在 15 平方英里内。它的人口密度是多少？"
      },
      "choices": [
        "3,000 people/mi$^2$",
        "300 people/mi$^2$",
        "6,750 people/mi$^2$",
        "675,000 people/mi$^2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Population density = people $\\div$ area $= 45{,}000 \\div 15 = 3{,}000$ people/mi$^2$. Multiplying $45{,}000 \\times 15$ instead of dividing gives the far-too-large value.",
        "zh": "人口密度 = 人口 $\\div$ 面积 $= 45{,}000 \\div 15 = 3{,}000$ 人/平方英里。用乘法 $45{,}000 \\times 15$ 会得到过大的错误值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A gold bar has a volume of 20 cm$^3$. Gold has a density of 19.3 g/cm$^3$. What is the bar's mass?",
        "zh": "一块金条的体积为 20 cm$^3$，黄金的密度为 19.3 g/cm$^3$。金条的质量是多少？"
      },
      "choices": [
        "1.03 g",
        "386 g",
        "39.3 g",
        "965 g"
      ],
      "answer": 1,
      "explanation": {
        "en": "Mass $=$ density $\\times$ volume $= 19.3 \\times 20 = 386$ g. Dividing volume by density ($20 \\div 19.3 \\approx 1.03$) inverts the relationship and is wrong.",
        "zh": "质量 $=$ 密度 $\\times$ 体积 $= 19.3 \\times 20 = 386$ g。用体积除以密度（$20 \\div 19.3 \\approx 1.03$）颠倒了关系，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many cubic centimeters are in 2 cubic meters?",
        "zh": "2 立方米等于多少立方厘米？"
      },
      "choices": [
        "200 cm$^3$",
        "20,000 cm$^3$",
        "2,000,000 cm$^3$",
        "200,000 cm$^3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $1$ m $= 100$ cm, $1$ m$^3 = 100^3 = 1{,}000{,}000$ cm$^3$, so $2$ m$^3 = 2{,}000{,}000$ cm$^3$. Using only one factor of 100 (treating it like a length conversion) gives the wrong answer.",
        "zh": "因为 $1$ 米 $= 100$ 厘米，所以 $1$ m$^3 = 100^3 = 1{,}000{,}000$ cm$^3$，因此 $2$ m$^3 = 2{,}000{,}000$ cm$^3$。只乘一次 100（当作长度换算）会得到错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cylindrical water tank has radius 3 m and height 5 m. What is its volume? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆柱形水箱半径为 3 米，高为 5 米。它的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "47.12 m$^3$",
        "94.25 m$^3$",
        "706.86 m$^3$",
        "141.37 m$^3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Volume of a cylinder $= \\pi r^2 h = \\pi (3)^2 (5) = 45\\pi \\approx 141.37$ m$^3$. Forgetting to square the radius (using $\\pi \\cdot 3 \\cdot 5$) gives about 47.12 and is too small.",
        "zh": "圆柱体积 $= \\pi r^2 h = \\pi (3)^2 (5) = 45\\pi \\approx 141.37$ m$^3$。忘记把半径平方（用 $\\pi \\cdot 3 \\cdot 5$）会得到约 47.12，太小了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object has a mass of 250 g and a volume of 100 cm$^3$. What is its density?",
        "zh": "一个物体质量为 250 g，体积为 100 cm$^3$。它的密度是多少？"
      },
      "choices": [
        "2.5 g/cm$^3$",
        "0.4 g/cm$^3$",
        "150 g/cm$^3$",
        "25,000 g/cm$^3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Density $=$ mass $\\div$ volume $= 250 \\div 100 = 2.5$ g/cm$^3$. Dividing volume by mass gives 0.4 and inverts the definition of density.",
        "zh": "密度 $=$ 质量 $\\div$ 体积 $= 250 \\div 100 = 2.5$ g/cm$^3$。用体积除以质量得 0.4，颠倒了密度的定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangular pen is built with 40 m of fencing. What dimensions give the maximum enclosed area?",
        "zh": "用 40 米的围栏建一个矩形围栏。什么尺寸能围出最大面积？"
      },
      "choices": [
        "5 m $\\times$ 15 m",
        "10 m $\\times$ 10 m",
        "8 m $\\times$ 12 m",
        "2 m $\\times$ 18 m"
      ],
      "answer": 1,
      "explanation": {
        "en": "For a fixed perimeter, a rectangle's area is largest when it is a square. With perimeter 40 m each side is $40 \\div 4 = 10$ m, giving area $100$ m$^2$. Long thin shapes like $2 \\times 18$ satisfy the perimeter but enclose far less area.",
        "zh": "在周长固定时，矩形在成为正方形时面积最大。周长 40 米时每边为 $40 \\div 4 = 10$ 米，面积 $100$ m$^2$。像 $2 \\times 18$ 这样细长的形状满足周长，但围出的面积小得多。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A region has a population density of 500 people per km$^2$ and covers 12 km$^2$. About how many people live there?",
        "zh": "某地区人口密度为每平方千米 500 人，面积为 12 km$^2$。大约有多少人居住？"
      },
      "choices": [
        "42 people",
        "512 people",
        "6,000 people",
        "60,000 people"
      ],
      "answer": 2,
      "explanation": {
        "en": "Population $=$ density $\\times$ area $= 500 \\times 12 = 6{,}000$ people. Dividing density by area ($500 \\div 12 \\approx 42$) misuses the relationship.",
        "zh": "人口 $=$ 密度 $\\times$ 面积 $= 500 \\times 12 = 6{,}000$ 人。用密度除以面积（$500 \\div 12 \\approx 42$）误用了关系式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sphere has radius 6 cm. What is its volume? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个球半径为 6 cm。它的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "150.80 cm$^3$",
        "452.39 cm$^3$",
        "7,238.23 cm$^3$",
        "904.78 cm$^3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Volume of a sphere $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (6)^3 = 288\\pi \\approx 904.78$ cm$^3$. Using surface-area style $4\\pi r^2 \\approx 452.39$ instead of the volume formula is a common error.",
        "zh": "球体积 $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (6)^3 = 288\\pi \\approx 904.78$ cm$^3$。误用表面积式 $4\\pi r^2 \\approx 452.39$ 而不是体积公式是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert a speed of 5 km/h into meters per second.",
        "zh": "把速度 5 km/h 换算成米每秒。"
      },
      "choices": [
        "1.39 m/s",
        "0.72 m/s",
        "18 m/s",
        "83.3 m/s"
      ],
      "answer": 0,
      "explanation": {
        "en": "$5 \\text{ km/h} = 5 \\times \\frac{1000 \\text{ m}}{3600 \\text{ s}} \\approx 1.39$ m/s. Multiplying by 3.6 instead of dividing (getting 18) reverses the correct conversion.",
        "zh": "$5 \\text{ km/h} = 5 \\times \\frac{1000 \\text{ m}}{3600 \\text{ s}} \\approx 1.39$ m/s。用乘以 3.6 代替除以 3.6（得 18）方向搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ceramic floor tile costs $3 per square foot. A rectangular room measures 12 ft by 10 ft. What is the total tiling cost?",
        "zh": "陶瓷地砖每平方英尺 3 美元。一个矩形房间为 12 英尺 $\\times$ 10 英尺。铺砖总费用是多少？"
      },
      "choices": [
        "$66",
        "$360",
        "$120",
        "$1,080"
      ],
      "answer": 1,
      "explanation": {
        "en": "Area $= 12 \\times 10 = 120$ ft$^2$; cost $= 120 \\times 3 = \\$360$. Multiplying the perimeter ($44$ ft) by the price instead of the area gives too small a cost.",
        "zh": "面积 $= 12 \\times 10 = 120$ ft$^2$；费用 $= 120 \\times 3 = \\$360$。用周长（$44$ 英尺）乘单价而不是面积，费用会偏小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which quantity is measured in units of grams per cubic centimeter (g/cm$^3$)?",
        "zh": "哪个量的单位是克每立方厘米（g/cm$^3$）？"
      },
      "choices": [
        "Volume",
        "Area density",
        "Density",
        "Mass"
      ],
      "answer": 2,
      "explanation": {
        "en": "g/cm$^3$ is mass per unit volume, which is (mass) density. Area density would be mass per unit area (g/cm$^2$), a different quantity.",
        "zh": "g/cm$^3$ 是单位体积的质量，即（质量）密度。面密度是单位面积的质量（g/cm$^2$），是不同的量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangular box with a square base must have a volume of 64 cm$^3$. Which base side length uses the least material (minimum surface area)?",
        "zh": "一个正方形底面的长方体体积必须为 64 cm$^3$。哪个底边长使用的材料最少（表面积最小）？"
      },
      "choices": [
        "2 cm",
        "16 cm",
        "8 cm",
        "4 cm"
      ],
      "answer": 3,
      "explanation": {
        "en": "Surface area of a closed box with fixed volume is minimized when it is a cube. Here $\\sqrt[3]{64} = 4$ cm on every edge. Very tall or very flat boxes (like a 2 cm base) satisfy the volume but need more surface material.",
        "zh": "在体积固定时，封闭长方体的表面积在其为正方体时最小。这里每条棱为 $\\sqrt[3]{64} = 4$ cm。很高或很扁的盒子（如底边 2 cm）虽满足体积，但需要更多表面材料。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Aluminum has a density of 2.7 g/cm$^3$. What is the mass of an aluminum block with volume 50 cm$^3$? (Give grams.)",
        "zh": "铝的密度为 2.7 g/cm$^3$。体积为 50 cm$^3$ 的铝块质量是多少？（以克为单位。）"
      },
      "answer": "135",
      "accept": [
        "135 g",
        "135.0",
        "135g",
        "135 grams"
      ],
      "explanation": {
        "en": "Mass $=$ density $\\times$ volume $= 2.7 \\times 50 = 135$ g. Dividing instead of multiplying would give a tiny, incorrect value.",
        "zh": "质量 $=$ 密度 $\\times$ 体积 $= 2.7 \\times 50 = 135$ g。用除法代替乘法会得到很小的错误值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A neighborhood has 8,400 residents living on 24 acres. What is the population density in people per acre?",
        "zh": "一个社区有 8,400 名居民，住在 24 英亩土地上。以每英亩人数计的人口密度是多少？"
      },
      "answer": "350",
      "accept": [
        "350 people/acre",
        "350.0",
        "350 per acre",
        "350 ppl/acre"
      ],
      "explanation": {
        "en": "Density $=$ people $\\div$ area $= 8{,}400 \\div 24 = 350$ people per acre. Multiplying the two numbers instead of dividing would be far too large.",
        "zh": "密度 $=$ 人数 $\\div$ 面积 $= 8{,}400 \\div 24 = 350$ 人每英亩。把两数相乘而不是相除会大得离谱。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert 3.5 liters to milliliters. (Give the number of mL.)",
        "zh": "把 3.5 升换算成毫升。（给出毫升数。）"
      },
      "answer": "3500",
      "accept": [
        "3500 mL",
        "3500.0",
        "3,500",
        "3500ml",
        "3500 ml"
      ],
      "explanation": {
        "en": "Since $1$ L $= 1000$ mL, $3.5 \\times 1000 = 3500$ mL. Dividing by 1000 instead (getting 0.0035) reverses the conversion.",
        "zh": "因为 $1$ 升 $= 1000$ 毫升，$3.5 \\times 1000 = 3500$ 毫升。改用除以 1000（得 0.0035）会把换算方向弄反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cylinder has radius 2 m and height 10 m. Find its volume in cubic meters, rounded to two decimals. (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆柱半径为 2 米，高为 10 米。求其体积（立方米），保留两位小数。（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "125.66",
      "accept": [
        "125.66 m^3",
        "125.7",
        "40pi",
        "40\\pi",
        "125.664"
      ],
      "explanation": {
        "en": "Volume $= \\pi r^2 h = \\pi (2)^2 (10) = 40\\pi \\approx 125.66$ m$^3$. Forgetting to square the radius (using $\\pi \\cdot 2 \\cdot 10 \\approx 62.83$) gives a value that is too small.",
        "zh": "体积 $= \\pi r^2 h = \\pi (2)^2 (10) = 40\\pi \\approx 125.66$ m$^3$。忘记把半径平方（用 $\\pi \\cdot 2 \\cdot 10 \\approx 62.83$）会得到偏小的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangular garden must have an area of 200 m$^2$. If one side is 10 m long, how long is the other side? (Give meters.)",
        "zh": "一个矩形花园面积必须为 200 m$^2$。如果一条边长 10 米，另一条边长多少米？（以米为单位。）"
      },
      "answer": "20",
      "accept": [
        "20 m",
        "20.0",
        "20m",
        "20 meters"
      ],
      "explanation": {
        "en": "Area $=$ length $\\times$ width, so the other side $= 200 \\div 10 = 20$ m. Subtracting ($200 - 10$) treats area like a perimeter and is wrong.",
        "zh": "面积 $=$ 长 $\\times$ 宽，所以另一边 $= 200 \\div 10 = 20$ 米。用减法（$200 - 10$）把面积当成周长处理，是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An object has mass 60 g and volume 80 cm$^3$. What is its density in g/cm$^3$? (Decimal.)",
        "zh": "一个物体质量为 60 g，体积为 80 cm$^3$。它的密度是多少 g/cm$^3$？（小数。）"
      },
      "answer": "0.75",
      "accept": [
        "0.75 g/cm^3",
        ".75",
        "3/4",
        "0.750"
      ],
      "explanation": {
        "en": "Density $=$ mass $\\div$ volume $= 60 \\div 80 = 0.75$ g/cm$^3$. Since this is below the density of water (1 g/cm$^3$), such an object would float. Dividing volume by mass ($80 \\div 60 \\approx 1.33$) inverts the definition.",
        "zh": "密度 $=$ 质量 $\\div$ 体积 $= 60 \\div 80 = 0.75$ g/cm$^3$。由于小于水的密度（1 g/cm$^3$），这样的物体会漂浮。用体积除以质量（$80 \\div 60 \\approx 1.33$）颠倒了定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert 1.5 square meters to square centimeters. (Give the number of cm$^2$.)",
        "zh": "把 1.5 平方米换算成平方厘米。（给出 cm$^2$ 数。）"
      },
      "answer": "15000",
      "accept": [
        "15000 cm^2",
        "15,000",
        "15000.0",
        "1.5e4"
      ],
      "explanation": {
        "en": "Since $1$ m $= 100$ cm, $1$ m$^2 = 100^2 = 10{,}000$ cm$^2$, so $1.5 \\times 10{,}000 = 15{,}000$ cm$^2$. Using only one factor of 100 (getting 150) forgets that area scales by the square.",
        "zh": "因为 $1$ 米 $= 100$ 厘米，$1$ m$^2 = 100^2 = 10{,}000$ cm$^2$，所以 $1.5 \\times 10{,}000 = 15{,}000$ cm$^2$。只乘一次 100（得 150）忽略了面积按平方缩放。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cone has radius 3 cm and height 4 cm. Find its volume in cubic centimeters, rounded to two decimals. (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆锥半径为 3 cm，高为 4 cm。求其体积（立方厘米），保留两位小数。（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "37.70",
      "accept": [
        "37.7",
        "12pi",
        "12\\pi",
        "37.699",
        "37.70 cm^3"
      ],
      "explanation": {
        "en": "Volume of a cone $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (3)^2 (4) = 12\\pi \\approx 37.70$ cm$^3$. Forgetting the $\\frac{1}{3}$ factor (getting the full cylinder $\\approx 113.10$) triples the correct volume.",
        "zh": "圆锥体积 $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (3)^2 (4) = 12\\pi \\approx 37.70$ cm$^3$。忘记 $\\frac{1}{3}$ 系数（得到整个圆柱 $\\approx 113.10$）会使正确体积扩大三倍。"
      }
    }
  ],
  "unit-9-modeling-with-geometry/volume-cross-sections-solids": [
    {
      "type": "mc",
      "question": {
        "en": "A rectangular prism has dimensions 4 cm by 5 cm by 6 cm. What is its volume?",
        "zh": "一个长方体的尺寸为 4 cm $\\times$ 5 cm $\\times$ 6 cm。它的体积是多少？"
      },
      "choices": [
        "120 cm$^3$",
        "74 cm$^3$",
        "15 cm$^3$",
        "148 cm$^3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Volume of a prism $=$ length $\\times$ width $\\times$ height $= 4 \\times 5 \\times 6 = 120$ cm$^3$. Adding the dimensions ($4+5+6=15$) instead of multiplying is a common slip.",
        "zh": "长方体体积 $=$ 长 $\\times$ 宽 $\\times$ 高 $= 4 \\times 5 \\times 6 = 120$ cm$^3$。把尺寸相加（$4+5+6=15$）而不是相乘是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cylinder is sliced by a plane perpendicular to its central axis. What shape is the cross-section?",
        "zh": "用一个垂直于中心轴的平面切割一个圆柱。截面是什么形状？"
      },
      "choices": [
        "A rectangle",
        "A circle",
        "An ellipse",
        "A triangle"
      ],
      "answer": 1,
      "explanation": {
        "en": "A cut perpendicular to a cylinder's axis produces a circle congruent to the base. A cut containing the axis (parallel to it) would instead give a rectangle.",
        "zh": "垂直于圆柱轴的切割产生一个与底面全等的圆。若切面包含轴（平行于轴），则得到矩形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A pyramid has a square base with side 6 cm and a height of 10 cm. What is its volume?",
        "zh": "一个金字塔有边长为 6 cm 的正方形底面，高为 10 cm。它的体积是多少？"
      },
      "choices": [
        "60 cm$^3$",
        "360 cm$^3$",
        "120 cm$^3$",
        "600 cm$^3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Volume of a pyramid $= \\frac{1}{3} \\times$ base area $\\times$ height $= \\frac{1}{3}(6^2)(10) = \\frac{1}{3}(360) = 120$ cm$^3$. Forgetting the $\\frac{1}{3}$ factor (getting 360) treats it like a prism.",
        "zh": "金字塔体积 $= \\frac{1}{3} \\times$ 底面积 $\\times$ 高 $= \\frac{1}{3}(6^2)(10) = \\frac{1}{3}(360) = 120$ cm$^3$。忘记 $\\frac{1}{3}$ 系数（得 360）就把它当成了棱柱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Cavalieri's principle states that two solids have equal volume if which condition holds?",
        "zh": "卡瓦列里原理指出：如果满足哪个条件，两个立体的体积相等？"
      },
      "choices": [
        "They have the same surface area",
        "They have the same base perimeter",
        "They are similar shapes",
        "They have the same height and equal cross-sectional areas at every level"
      ],
      "answer": 3,
      "explanation": {
        "en": "Cavalieri's principle: if two solids have the same height and every parallel cross-section at the same level has equal area, their volumes are equal. Equal surface area does not guarantee equal volume.",
        "zh": "卡瓦列里原理：若两个立体高度相同，且在每一相同高度处的平行截面面积相等，则它们体积相等。表面积相等并不能保证体积相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sphere is cut by any plane passing through it. What is the shape of every such cross-section?",
        "zh": "用任意穿过球体的平面切割球。每个这样的截面是什么形状？"
      },
      "choices": [
        "A circle",
        "An ellipse",
        "A square",
        "A parabola"
      ],
      "answer": 0,
      "explanation": {
        "en": "Every planar cross-section of a sphere is a circle (largest when the plane passes through the center, forming a great circle). A sphere never yields an elliptical cross-section.",
        "zh": "球的每个平面截面都是圆（当平面过球心时最大，形成大圆）。球绝不会产生椭圆截面。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle is rotated a full turn about one of its sides. What solid of revolution is formed?",
        "zh": "一个矩形绕它的一条边旋转一整圈。形成什么旋转体？"
      },
      "choices": [
        "A sphere",
        "A cylinder",
        "A cone",
        "A prism"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rotating a rectangle about one side sweeps out a cylinder, with that side as the axis and the perpendicular side as the radius. Rotating a right triangle about a leg would instead form a cone.",
        "zh": "矩形绕一条边旋转扫出一个圆柱，该边为轴，垂直边为半径。若绕直角三角形的一条直角边旋转，则形成圆锥。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cone has radius 5 cm and height 12 cm. What is its volume? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆锥半径为 5 cm，高为 12 cm。它的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "104.72 cm$^3$",
        "188.50 cm$^3$",
        "314.16 cm$^3$",
        "942.48 cm$^3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Volume of a cone $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (5)^2 (12) = 100\\pi \\approx 314.16$ cm$^3$. Forgetting the $\\frac{1}{3}$ (getting the cylinder $\\approx 942.48$) triples the correct value.",
        "zh": "圆锥体积 $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (5)^2 (12) = 100\\pi \\approx 314.16$ cm$^3$。忘记 $\\frac{1}{3}$（得到圆柱 $\\approx 942.48$）会使正确值扩大三倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A sphere has radius 3 cm. What is its volume? (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个球半径为 3 cm。它的体积是多少？（取 $\\pi \\approx 3.14159$。）"
      },
      "choices": [
        "28.27 cm$^3$",
        "84.82 cm$^3$",
        "339.29 cm$^3$",
        "113.10 cm$^3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Volume of a sphere $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3)^3 = 36\\pi \\approx 113.10$ cm$^3$. Using $\\frac{4}{3}\\pi r^2$ (forgetting to cube the radius) gives the wrong answer.",
        "zh": "球体积 $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3)^3 = 36\\pi \\approx 113.10$ cm$^3$。用 $\\frac{4}{3}\\pi r^2$（忘记把半径立方）会得到错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cylinder is sliced by a plane that contains its central axis. What shape is the cross-section?",
        "zh": "用一个包含圆柱中心轴的平面切割圆柱。截面是什么形状？"
      },
      "choices": [
        "A rectangle",
        "An ellipse",
        "A circle",
        "A trapezoid"
      ],
      "answer": 0,
      "explanation": {
        "en": "A cut through the axis of a cylinder exposes a rectangle whose width is the diameter and whose height is the cylinder's height. A cut perpendicular to the axis would instead give a circle.",
        "zh": "沿圆柱轴的切割露出一个矩形，其宽为直径，高为圆柱的高。若垂直于轴切割，则得到圆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A right triangle is rotated a full turn about one of its legs. What solid of revolution is formed?",
        "zh": "一个直角三角形绕它的一条直角边旋转一整圈。形成什么旋转体？"
      },
      "choices": [
        "A cylinder",
        "A cone",
        "A sphere",
        "A pyramid"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rotating a right triangle about a leg sweeps out a cone: that leg is the axis (height) and the other leg is the base radius. Rotating a full rectangle instead would give a cylinder.",
        "zh": "直角三角形绕一条直角边旋转扫出一个圆锥：该直角边为轴（高），另一条直角边为底半径。若旋转整个矩形则得到圆柱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangular prism has a triangular base of area 6 cm$^2$ and a length of 10 cm. What is its volume?",
        "zh": "一个三棱柱的三角形底面面积为 6 cm$^2$，长为 10 cm。它的体积是多少？"
      },
      "choices": [
        "16 cm$^3$",
        "20 cm$^3$",
        "60 cm$^3$",
        "30 cm$^3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Volume of any prism $=$ base area $\\times$ length $= 6 \\times 10 = 60$ cm$^3$. Applying a $\\frac{1}{3}$ factor (getting 20) wrongly treats the prism like a pyramid.",
        "zh": "任何棱柱的体积 $=$ 底面积 $\\times$ 长 $= 6 \\times 10 = 60$ cm$^3$。误用 $\\frac{1}{3}$ 系数（得 20）把棱柱当成了金字塔。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cone and a cylinder have the same radius and the same height. How does the cone's volume compare to the cylinder's?",
        "zh": "一个圆锥和一个圆柱有相同的半径和相同的高。圆锥的体积与圆柱相比如何？"
      },
      "choices": [
        "The cone's volume is three times the cylinder's",
        "They are equal",
        "The cone's volume is half of the cylinder's",
        "The cone's volume is one-third of the cylinder's"
      ],
      "answer": 3,
      "explanation": {
        "en": "With equal radius and height, cone volume $\\frac{1}{3}\\pi r^2 h$ is exactly one-third of cylinder volume $\\pi r^2 h$. Thinking they are equal ignores the $\\frac{1}{3}$ factor in the cone formula.",
        "zh": "在半径和高都相同时，圆锥体积 $\\frac{1}{3}\\pi r^2 h$ 恰好是圆柱体积 $\\pi r^2 h$ 的三分之一。认为二者相等就忽略了圆锥公式中的 $\\frac{1}{3}$ 系数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangular prism measures 3 cm by 4 cm by 5 cm. What is its volume in cubic centimeters?",
        "zh": "一个长方体尺寸为 3 cm $\\times$ 4 cm $\\times$ 5 cm。它的体积是多少立方厘米？"
      },
      "answer": "60",
      "accept": [
        "60 cm^3",
        "60.0",
        "60cm3",
        "60 cubic cm"
      ],
      "explanation": {
        "en": "Volume $= 3 \\times 4 \\times 5 = 60$ cm$^3$. Adding the edges ($3+4+5=12$) instead of multiplying gives the wrong result.",
        "zh": "体积 $= 3 \\times 4 \\times 5 = 60$ cm$^3$。把棱相加（$3+4+5=12$）而不是相乘会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A pyramid has a base area of 48 cm$^2$ and a height of 5 cm. What is its volume in cubic centimeters?",
        "zh": "一个金字塔底面积为 48 cm$^2$，高为 5 cm。它的体积是多少立方厘米？"
      },
      "answer": "80",
      "accept": [
        "80 cm^3",
        "80.0",
        "80cm3"
      ],
      "explanation": {
        "en": "Volume $= \\frac{1}{3} \\times$ base area $\\times$ height $= \\frac{1}{3}(48)(5) = 80$ cm$^3$. Omitting the $\\frac{1}{3}$ (getting 240) treats the pyramid like a prism.",
        "zh": "体积 $= \\frac{1}{3} \\times$ 底面积 $\\times$ 高 $= \\frac{1}{3}(48)(5) = 80$ cm$^3$。省去 $\\frac{1}{3}$（得 240）把金字塔当成了棱柱。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cone has radius 6 cm and height 10 cm. Find its volume in cubic centimeters, rounded to two decimals. (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆锥半径为 6 cm，高为 10 cm。求其体积（立方厘米），保留两位小数。（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "376.99",
      "accept": [
        "376.99 cm^3",
        "377.0",
        "120pi",
        "120\\pi",
        "376.991"
      ],
      "explanation": {
        "en": "Volume $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (6)^2 (10) = 120\\pi \\approx 376.99$ cm$^3$. Forgetting the $\\frac{1}{3}$ (getting $\\approx 1130.97$) triples the correct answer.",
        "zh": "体积 $= \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (6)^2 (10) = 120\\pi \\approx 376.99$ cm$^3$。忘记 $\\frac{1}{3}$（得 $\\approx 1130.97$）会使正确答案扩大三倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sphere has radius 2 cm. Find its volume in cubic centimeters, rounded to two decimals. (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个球半径为 2 cm。求其体积（立方厘米），保留两位小数。（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "33.51",
      "accept": [
        "33.51 cm^3",
        "33.5",
        "33.510",
        "33.49"
      ],
      "explanation": {
        "en": "Volume $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (2)^3 = \\frac{32}{3}\\pi \\approx 33.51$ cm$^3$. Squaring instead of cubing the radius (using $r^2$) gives a value that is too small.",
        "zh": "体积 $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (2)^3 = \\frac{32}{3}\\pi \\approx 33.51$ cm$^3$。把半径平方而不是立方（用 $r^2$）会得到偏小的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A cylinder has radius 4 cm and height 9 cm. Find its volume in cubic centimeters, rounded to two decimals. (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个圆柱半径为 4 cm，高为 9 cm。求其体积（立方厘米），保留两位小数。（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "452.39",
      "accept": [
        "452.39 cm^3",
        "452.4",
        "144pi",
        "144\\pi",
        "452.389"
      ],
      "explanation": {
        "en": "Volume $= \\pi r^2 h = \\pi (4)^2 (9) = 144\\pi \\approx 452.39$ cm$^3$. Forgetting to square the radius (using $\\pi \\cdot 4 \\cdot 9 \\approx 113.10$) makes the result too small.",
        "zh": "体积 $= \\pi r^2 h = \\pi (4)^2 (9) = 144\\pi \\approx 452.39$ cm$^3$。忘记把半径平方（用 $\\pi \\cdot 4 \\cdot 9 \\approx 113.10$）会使结果偏小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A semicircle is rotated a full turn about its straight diameter edge. Name the solid of revolution that is formed (one word).",
        "zh": "一个半圆绕它的直径边旋转一整圈。写出所形成的旋转体名称（一个词）。"
      },
      "answer": "sphere",
      "accept": [
        "Sphere",
        "a sphere",
        "球",
        "球体",
        "球形"
      ],
      "explanation": {
        "en": "Rotating a semicircle about its diameter sweeps out a full sphere. Rotating only a quarter circle about a leg would instead give a hemisphere.",
        "zh": "半圆绕其直径旋转扫出一个完整的球。仅将四分之一圆绕一条边旋转则得到半球。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A hemisphere (half a sphere) has radius 3 cm. Find its volume in cubic centimeters, rounded to two decimals. (Use $\\pi \\approx 3.14159$.)",
        "zh": "一个半球半径为 3 cm。求其体积（立方厘米），保留两位小数。（取 $\\pi \\approx 3.14159$。）"
      },
      "answer": "56.55",
      "accept": [
        "56.55 cm^3",
        "56.5",
        "18pi",
        "18\\pi",
        "56.549"
      ],
      "explanation": {
        "en": "A hemisphere is half a sphere: $\\frac{1}{2} \\cdot \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi (3)^3 = 18\\pi \\approx 56.55$ cm$^3$. Using the full-sphere volume (about 113.10) forgets to halve it.",
        "zh": "半球是球的一半：$\\frac{1}{2} \\cdot \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi (3)^3 = 18\\pi \\approx 56.55$ cm$^3$。用整个球的体积（约 113.10）忘了取一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A plane cuts through a cone parallel to its circular base. What shape is the cross-section (one word)?",
        "zh": "一个平面平行于圆锥的圆形底面切过圆锥。截面是什么形状（一个词）？"
      },
      "answer": "circle",
      "accept": [
        "Circle",
        "a circle",
        "圆",
        "圆形"
      ],
      "explanation": {
        "en": "A cut parallel to a cone's base produces a smaller circle similar to the base. A cut through the apex perpendicular to the base would instead reveal a triangle.",
        "zh": "平行于圆锥底面的切割产生一个与底面相似的较小的圆。若过顶点且垂直于底面切割，则露出三角形。"
      }
    }
  ],
  "unit-10-statistical-inferences/normal-distributions": [
    {
      "type": "mc",
      "question": {
        "en": "Which statement best describes the shape of a normal distribution?",
        "zh": "下列哪项最能描述正态分布的形状？"
      },
      "choices": [
        "Symmetric and bell-shaped about the mean",
        "Skewed to the right with a long tail",
        "Uniform, with all values equally likely",
        "Bimodal, with two separate peaks"
      ],
      "answer": 0,
      "explanation": {
        "en": "A normal curve is symmetric and bell-shaped, centered at its mean. Describing it as skewed confuses it with a distribution whose tail is longer on one side; a normal curve has equal tails.",
        "zh": "正态曲线关于均值对称，呈钟形。把它说成偏斜是把它与某一侧尾部更长的分布混淆了；正态曲线两侧尾部相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a normal distribution, the mean, median, and mode are located where?",
        "zh": "在正态分布中，均值、中位数和众数位于何处？"
      },
      "choices": [
        "The mode is left of the mean",
        "All three coincide at the center",
        "The median is right of the mean",
        "They are spread evenly across the range"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because a normal curve is perfectly symmetric, its center of balance (mean), its middle value (median), and its peak (mode) all fall at the same point. Placing them at different spots would describe a skewed distribution, not a normal one.",
        "zh": "由于正态曲线完全对称，其平衡中心（均值）、中间值（中位数）与峰值（众数）都落在同一点。把它们放在不同位置描述的是偏斜分布，而非正态分布。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "According to the empirical rule, about what percent of data in a normal distribution falls within one standard deviation of the mean?",
        "zh": "根据经验法则，正态分布中大约有百分之多少的数据落在均值一个标准差以内？"
      },
      "choices": [
        "50%",
        "95%",
        "68%",
        "99.7%"
      ],
      "answer": 2,
      "explanation": {
        "en": "The 68-95-99.7 rule states about 68% lies within 1 standard deviation. Choosing 95% mistakes the two-standard-deviation interval for the one-standard-deviation interval.",
        "zh": "68-95-99.7 法则指出约 68% 落在 1 个标准差以内。选 95% 是把两个标准差的区间误当成一个标准差的区间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "About what percent of a normal distribution lies within two standard deviations of the mean?",
        "zh": "正态分布中大约有百分之多少落在均值两个标准差以内？"
      },
      "choices": [
        "99.7%",
        "34%",
        "68%",
        "95%"
      ],
      "answer": 3,
      "explanation": {
        "en": "By the empirical rule, roughly 95% of data lies within 2 standard deviations. Answering 99.7% uses the three-standard-deviation figure instead of the two-standard-deviation one.",
        "zh": "根据经验法则，约 95% 的数据落在 2 个标准差以内。答 99.7% 是用了三个标准差的数值而非两个标准差的数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A z-score measures which of the following?",
        "zh": "z 分数衡量的是下列哪一项？"
      },
      "choices": [
        "How many standard deviations a value is from the mean",
        "The raw value of a data point",
        "The total number of data points",
        "The percent of data above the mean"
      ],
      "answer": 0,
      "explanation": {
        "en": "A z-score tells how many standard deviations a value sits above or below the mean. Confusing it with the raw value ignores that a z-score is standardized relative to the mean and spread.",
        "zh": "z 分数表示某个值高于或低于均值多少个标准差。把它与原始值混淆忽略了 z 分数是相对于均值与离散程度标准化后的结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A test has mean 70 and standard deviation 8. What is the z-score for a score of 86?",
        "zh": "某测验均值为 70，标准差为 8。得分 86 的 z 分数是多少？"
      },
      "choices": [
        "-2",
        "2",
        "16",
        "0.5"
      ],
      "answer": 1,
      "explanation": {
        "en": "z = (86 - 70)/8 = 16/8 = 2. Getting 16 stops at the difference 86 - 70 without dividing by the standard deviation.",
        "zh": "z = (86 - 70)/8 = 16/8 = 2。得 16 是只算了差 86 - 70 而没有除以标准差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Heights are normally distributed with mean 160 cm and standard deviation 10 cm. A height of 140 cm corresponds to which z-score?",
        "zh": "身高服从均值 160 cm、标准差 10 cm 的正态分布。身高 140 cm 对应的 z 分数是多少？"
      },
      "choices": [
        "2",
        "-1",
        "-2",
        "20"
      ],
      "answer": 2,
      "explanation": {
        "en": "z = (140 - 160)/10 = -20/10 = -2; the value is below the mean so the sign is negative. Answering 2 drops the negative sign that shows the value is below the mean.",
        "zh": "z = (140 - 160)/10 = -20/10 = -2；该值低于均值，故符号为负。答 2 是漏掉了表示低于均值的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a normal distribution, about what percent of data lies above the mean?",
        "zh": "在正态分布中，大约有百分之多少的数据高于均值？"
      },
      "choices": [
        "68%",
        "34%",
        "100%",
        "50%"
      ],
      "answer": 3,
      "explanation": {
        "en": "Symmetry splits the distribution exactly in half at the mean, so about 50% lies above it. Answering 68% confuses the within-one-standard-deviation total with the fraction above the mean.",
        "zh": "对称性使分布在均值处正好分为两半，故约 50% 高于均值。答 68% 是把一个标准差以内的总量与均值以上的比例混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the empirical rule, about what percent of data lies between the mean and one standard deviation above the mean?",
        "zh": "利用经验法则，大约有百分之多少的数据落在均值与均值以上一个标准差之间？"
      },
      "choices": [
        "34%",
        "68%",
        "16%",
        "50%"
      ],
      "answer": 0,
      "explanation": {
        "en": "The 68% within one standard deviation splits symmetrically, so half of it, about 34%, lies on each side. Answering 68% forgets that this figure covers both sides of the mean, not one.",
        "zh": "一个标准差以内的 68% 对称地分开，故每侧约为一半即 34%。答 68% 忘了该数值覆盖均值的两侧而非一侧。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "IQ scores are normal with mean 100 and standard deviation 15. Between which scores do about 95% of people fall?",
        "zh": "智商分数服从均值 100、标准差 15 的正态分布。约 95% 的人落在哪两个分数之间？"
      },
      "choices": [
        "85 and 115",
        "70 and 130",
        "55 and 145",
        "100 and 130"
      ],
      "answer": 1,
      "explanation": {
        "en": "95% lies within 2 standard deviations: 100 ± 2(15) = 70 to 130. Choosing 85 to 115 uses only one standard deviation, which corresponds to about 68%, not 95%.",
        "zh": "95% 落在 2 个标准差以内：100 ± 2(15) = 70 到 130。选 85 到 115 只用了一个标准差，对应约 68% 而非 95%。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two students take different exams. Ann scores z = 1.5; Ben scores z = 0.8. Who performed better relative to their class?",
        "zh": "两名学生参加不同考试。Ann 的 z = 1.5；Ben 的 z = 0.8。相对于各自班级，谁表现更好？"
      },
      "choices": [
        "Ben, because 0.8 is a smaller spread",
        "They performed equally",
        "Ann, because her z-score is higher",
        "Cannot be compared with z-scores"
      ],
      "answer": 2,
      "explanation": {
        "en": "A higher z-score means a value further above its own mean, so Ann's z = 1.5 is the stronger relative performance. Saying z-scores cannot compare across exams misses the fact that standardizing is exactly what makes them comparable.",
        "zh": "z 分数越高表示该值高出各自均值越多，故 Ann 的 z = 1.5 相对表现更强。说 z 分数无法跨考试比较忽略了标准化正是使它们可比的原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a standard normal distribution, what are the mean and standard deviation?",
        "zh": "对于标准正态分布，均值和标准差分别是多少？"
      },
      "choices": [
        "Mean 1, standard deviation 0",
        "Mean 100, standard deviation 15",
        "Mean 0, standard deviation 0",
        "Mean 0, standard deviation 1"
      ],
      "answer": 3,
      "explanation": {
        "en": "The standard normal distribution is defined to have mean 0 and standard deviation 1, which is why z-scores use it. Swapping the two values reverses the definition of the standardized curve.",
        "zh": "标准正态分布定义为均值 0、标准差 1，这正是 z 分数使用它的原因。把这两个值对调就颠倒了标准化曲线的定义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A distribution has mean 50 and standard deviation 6. Compute the z-score for a value of 62. (Enter a number.)",
        "zh": "某分布均值为 50，标准差为 6。计算值 62 的 z 分数。（填一个数字。）"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "2.00"
      ],
      "explanation": {
        "en": "z = (62 - 50)/6 = 12/6 = 2. A common error is stopping at the difference 12 without dividing by the standard deviation.",
        "zh": "z = (62 - 50)/6 = 12/6 = 2。常见错误是停在差 12 而未除以标准差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Scores are normal with mean 500 and standard deviation 100. What score has a z-score of -1.5? (Enter a number.)",
        "zh": "分数服从均值 500、标准差 100 的正态分布。z 分数为 -1.5 的分数是多少？（填一个数字。）"
      },
      "answer": "350",
      "accept": [
        "350.0",
        "350.00"
      ],
      "explanation": {
        "en": "value = mean + z·(std) = 500 + (-1.5)(100) = 500 - 150 = 350. Adding 150 instead of subtracting ignores the negative sign that places the value below the mean.",
        "zh": "值 = 均值 + z·标准差 = 500 + (-1.5)(100) = 500 - 150 = 350。加 150 而非减去，忽略了使该值低于均值的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By the empirical rule, what percent of a normal distribution lies within 3 standard deviations of the mean? (Enter the percent number, e.g. 68.)",
        "zh": "根据经验法则，正态分布中有百分之多少落在均值 3 个标准差以内？（填百分数数字，例如 68。）"
      },
      "answer": "99.7",
      "accept": [
        "99.7%",
        "99.70",
        "99.73",
        "99.73%",
        "约99.7",
        "接近100"
      ],
      "explanation": {
        "en": "The empirical rule gives about 99.7% within 3 standard deviations. Answering 95 stops one step early at the two-standard-deviation level.",
        "zh": "经验法则给出 3 个标准差以内约 99.7%。答 95 是提前一步停在了两个标准差的水平。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Weights are normal with mean 12 g and standard deviation 2 g. About what percent of items weigh between 10 g and 14 g? (Enter the percent number.)",
        "zh": "重量服从均值 12 g、标准差 2 g 的正态分布。大约有百分之多少的物品重量在 10 g 到 14 g 之间？（填百分数数字。）"
      },
      "answer": "68",
      "accept": [
        "68%",
        "68.0",
        "约68",
        "68.27",
        "68.3"
      ],
      "explanation": {
        "en": "10 g and 14 g are exactly one standard deviation (2 g) below and above the mean, so about 68% falls between them. Answering 95 mistakes this one-standard-deviation range for the two-standard-deviation range.",
        "zh": "10 g 与 14 g 正好是均值上下一个标准差（2 g），故约 68% 落在其间。答 95 是把这个一标准差区间误当成两标准差区间。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A normal distribution has mean 200 and standard deviation 25. What value is 2 standard deviations above the mean? (Enter a number.)",
        "zh": "某正态分布均值为 200，标准差为 25。均值以上 2 个标准差的值是多少？（填一个数字。）"
      },
      "answer": "250",
      "accept": [
        "250.0",
        "250.00"
      ],
      "explanation": {
        "en": "200 + 2(25) = 200 + 50 = 250. Answering 225 adds only one standard deviation instead of two.",
        "zh": "200 + 2(25) = 200 + 50 = 250。答 225 是只加了一个标准差而非两个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the empirical rule, what percent of a normal distribution lies below the mean? (Enter the percent number.)",
        "zh": "利用经验法则，正态分布中有百分之多少落在均值以下？（填百分数数字。）"
      },
      "answer": "50",
      "accept": [
        "50%",
        "50.0",
        "一半",
        "0.5"
      ],
      "explanation": {
        "en": "Symmetry places exactly half the data below the mean, so 50%. Answering 34 confuses the mean-to-one-standard-deviation region with the entire lower half.",
        "zh": "对称性使恰好一半数据位于均值以下，故为 50%。答 34 是把均值到一个标准差的区域与整个下半部分混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Delivery times are normal with mean 30 min and standard deviation 4 min. About what percent of deliveries take longer than 34 minutes? (Enter the percent number.)",
        "zh": "送达时间服从均值 30 分钟、标准差 4 分钟的正态分布。大约有百分之多少的送达超过 34 分钟？（填百分数数字。）"
      },
      "answer": "16",
      "accept": [
        "16%",
        "16.0",
        "约16",
        "15.9",
        "15.87"
      ],
      "explanation": {
        "en": "34 min is one standard deviation above the mean. Since 68% lies within one standard deviation, 32% lies outside, split evenly, leaving 16% in the upper tail. Answering 32 forgets to take only the upper half of the outside region.",
        "zh": "34 分钟是均值以上一个标准差。因 68% 落在一个标准差以内，故 32% 在其外，对半分开，上尾留 16%。答 32 是忘了只取外侧区域的上半部分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A value has z-score 0. What percent of a normal distribution lies below it? (Enter the percent number.)",
        "zh": "某值的 z 分数为 0。正态分布中有百分之多少落在它以下？（填百分数数字。）"
      },
      "answer": "50",
      "accept": [
        "50%",
        "50.0",
        "一半",
        "0.5"
      ],
      "explanation": {
        "en": "A z-score of 0 is exactly at the mean, and by symmetry 50% of the data lies below the center. Answering 0 mistakes the z-value itself for the proportion below it.",
        "zh": "z 分数为 0 恰好位于均值处，由对称性有 50% 数据在中心以下。答 0 是把 z 值本身误当成其下方的比例。"
      }
    }
  ],
  "unit-10-statistical-inferences/sampling-experiments-inferences": [
    {
      "type": "mc",
      "question": {
        "en": "What is the difference between a population and a sample?",
        "zh": "总体与样本之间有什么区别？"
      },
      "choices": [
        "A population is the entire group of interest; a sample is a subset of it",
        "A sample is the entire group; a population is part of it",
        "A population is a subset selected from a sample",
        "They mean the same thing"
      ],
      "answer": 0,
      "explanation": {
        "en": "The population is the whole group you want to learn about, and a sample is a smaller subset drawn from it. Swapping the two reverses which group is the complete one and which is selected from it.",
        "zh": "总体是你想了解的整个群体，样本是从中抽取的较小子集。把两者对调就颠倒了哪一个是完整群体、哪一个是从中抽取的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why do researchers use a sample instead of surveying the whole population?",
        "zh": "研究者为何使用样本而不是调查整个总体？"
      },
      "choices": [
        "Samples are always perfectly accurate",
        "A census is often too costly or time-consuming",
        "Populations cannot be measured at all",
        "Samples remove all possible bias"
      ],
      "answer": 1,
      "explanation": {
        "en": "Measuring an entire population (a census) is usually too expensive or slow, so a well-chosen sample gives a practical estimate. Claiming samples are always perfectly accurate ignores that any sample carries sampling variability.",
        "zh": "测量整个总体（普查）通常过于昂贵或耗时，故精心选取的样本能给出实用的估计。声称样本总是完全准确忽略了任何样本都带有抽样波动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which sampling method gives every member of the population an equal chance of being selected?",
        "zh": "哪种抽样方法使总体中每个成员被选中的机会均等？"
      },
      "choices": [
        "Convenience sampling",
        "Voluntary response sampling",
        "Simple random sampling",
        "Sampling only volunteers who reply first"
      ],
      "answer": 2,
      "explanation": {
        "en": "Simple random sampling gives every individual an equal, independent chance of selection, which limits bias. Convenience sampling instead picks whoever is easiest to reach, over-representing that group.",
        "zh": "简单随机抽样使每个个体被选中的机会均等且独立，从而限制偏差。便利抽样则挑选最容易接触到的人，会过度代表该群体。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A radio host asks listeners to call in and vote on a question. What is the main problem with this method?",
        "zh": "一位电台主持人请听众打电话就某问题投票。这种方法的主要问题是什么？"
      },
      "choices": [
        "It is a simple random sample",
        "It has no possible source of bias",
        "It surveys the entire population",
        "Only those with strong opinions respond, causing voluntary response bias"
      ],
      "answer": 3,
      "explanation": {
        "en": "People who choose to call in tend to have strong opinions, so the sample is not representative; this is voluntary response bias. Calling it a simple random sample ignores that respondents selected themselves rather than being chosen at random.",
        "zh": "选择打电话的人往往意见强烈，故样本不具代表性；这就是自愿应答偏差。称其为简单随机抽样忽略了应答者是自我选择而非被随机选中的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is an example of a biased sample?",
        "zh": "以下哪项是有偏样本的例子？"
      },
      "choices": [
        "Surveying only shoppers at one luxury store about average income",
        "Randomly selecting 100 students from a school roster",
        "Using a random number generator to pick households",
        "Drawing names blindly from a hat"
      ],
      "answer": 0,
      "explanation": {
        "en": "Surveying only luxury-store shoppers over-represents high earners, so the estimate of average income is biased upward. The random-roster and random-number methods each give the whole group a fair chance, avoiding that skew.",
        "zh": "只调查奢侈品店顾客会过度代表高收入者，故对平均收入的估计偏高。随机花名册与随机数方法都给整个群体公平机会，从而避免这种偏斜。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the key feature that distinguishes an experiment from an observational study?",
        "zh": "区分实验与观察性研究的关键特征是什么？"
      },
      "choices": [
        "An experiment never uses a control group",
        "In an experiment, researchers actively impose a treatment",
        "An observational study always has larger samples",
        "An experiment only records existing data without acting"
      ],
      "answer": 1,
      "explanation": {
        "en": "In an experiment the researcher deliberately imposes a treatment to see its effect, while an observational study only records what already happens. Saying an experiment merely records existing data describes an observational study, not an experiment.",
        "zh": "在实验中研究者主动施加处理以观察其效果，而观察性研究只记录已经发生的情况。说实验只是记录现有数据描述的是观察性研究而非实验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why is a control group used in an experiment?",
        "zh": "实验中为何要设置对照组？"
      },
      "choices": [
        "To guarantee the treatment works",
        "To increase the total sample size only",
        "To provide a baseline for comparison with the treatment group",
        "To remove the need for random assignment"
      ],
      "answer": 2,
      "explanation": {
        "en": "The control group provides a baseline, so any difference can be attributed to the treatment rather than to other factors. Thinking it guarantees the treatment works confuses having a comparison with proving an outcome.",
        "zh": "对照组提供基线，从而可将任何差异归因于处理而非其他因素。认为它能保证处理有效是把设置比较与证明结果混为一谈。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why is random assignment important in an experiment?",
        "zh": "为何随机分配在实验中很重要？"
      },
      "choices": [
        "It makes the sample larger",
        "It removes the need for a treatment group",
        "It guarantees the same result every time",
        "It balances confounding variables between groups"
      ],
      "answer": 3,
      "explanation": {
        "en": "Random assignment spreads other variables evenly across groups so a treatment effect is not confounded with them. Believing it guarantees identical results ignores the natural variability that remains between groups.",
        "zh": "随机分配使其他变量在各组间均匀分布，从而使处理效应不与之混淆。认为它能保证每次结果相同忽略了各组之间仍存在的自然波动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A simulation is best used to do which of the following?",
        "zh": "模拟最适合用来做下列哪项？"
      },
      "choices": [
        "Model random behavior to estimate probabilities",
        "Prove a claim is true with certainty",
        "Replace the need for any real data",
        "Guarantee an unbiased population"
      ],
      "answer": 0,
      "explanation": {
        "en": "A simulation imitates a random process many times to estimate how likely outcomes are. Expecting it to prove a claim with certainty misunderstands that simulations give estimates, not proofs.",
        "zh": "模拟多次仿真某随机过程以估计各结果的可能性。指望它确定地证明某结论是误解了模拟给出的是估计而非证明。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "As the sample size increases, what generally happens to the margin of error?",
        "zh": "随着样本量增大，误差幅度通常会怎样变化？"
      },
      "choices": [
        "It increases",
        "It decreases",
        "It becomes negative",
        "It stays exactly the same"
      ],
      "answer": 1,
      "explanation": {
        "en": "Larger samples give more precise estimates, so the margin of error shrinks. Expecting it to grow reverses the relationship between sample size and precision.",
        "zh": "更大的样本给出更精确的估计，故误差幅度缩小。认为它会增大颠倒了样本量与精确度之间的关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A poll reports 54% support with a margin of error of ±3%. What is the plausible range for true support?",
        "zh": "一项民调报告支持率为 54%，误差幅度为 ±3%。真实支持率的合理范围是多少？"
      },
      "choices": [
        "48% to 60%",
        "54% to 57%",
        "51% to 57%",
        "51% to 54%"
      ],
      "answer": 2,
      "explanation": {
        "en": "The interval is 54% ± 3%, giving 51% to 57%. Using only 54% to 57% adds the margin on one side but forgets to subtract it on the other.",
        "zh": "区间为 54% ± 3%，即 51% 到 57%。只取 54% 到 57% 是在一侧加了误差却忘了在另一侧减去。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An advertisement claims a product is 'preferred by most users' based on a survey of the company's own employees. What is the flaw?",
        "zh": "一则广告基于对该公司自己员工的调查声称产品「被多数用户偏爱」。其缺陷是什么？"
      },
      "choices": [
        "The sample size is too large",
        "It used random assignment incorrectly",
        "There is no possible flaw",
        "The sample is biased and not representative of all users"
      ],
      "answer": 3,
      "explanation": {
        "en": "Employees have an interest in the product, so they are not representative of typical users and the sample is biased. Claiming there is no flaw overlooks that the respondents were not drawn fairly from all users.",
        "zh": "员工对该产品有利益关系，故不能代表典型用户，样本存在偏差。声称没有缺陷忽视了应答者并非从所有用户中公平抽取。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a study, researchers record students' study hours and grades without intervening. What type of study is this? (Answer in one or two words.)",
        "zh": "在一项研究中，研究者记录学生的学习时间与成绩而不加干预。这属于哪种研究？（用一两个词回答。）"
      },
      "answer": "observational study",
      "accept": [
        "observational",
        "observational study",
        "Observational",
        "观察性研究",
        "观察研究",
        "观察性"
      ],
      "explanation": {
        "en": "No treatment is imposed; the researchers only observe and record, making it an observational study. Calling it an experiment would require actively assigning a treatment.",
        "zh": "没有施加任何处理，研究者只是观察和记录，因此是观察性研究。称其为实验则需要主动分配处理。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A poll of 400 voters finds 60% favor a measure, with margin of error ±4%. What is the lowest plausible support percent? (Enter the percent number.)",
        "zh": "对 400 名选民的民调发现 60% 支持某议案，误差幅度 ±4%。合理支持率的最低值是多少？（填百分数数字。）"
      },
      "answer": "56",
      "accept": [
        "56%",
        "56.0",
        "56 percent"
      ],
      "explanation": {
        "en": "60% - 4% = 56% is the low end of the interval. Answering 64 gives the high end instead of the lowest plausible value.",
        "zh": "60% - 4% = 56% 是区间的下端。答 64 给出的是上端而非合理的最低值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A survey question is: 'Don't you agree that our excellent park needs more funding?' What one word describes a question written to push a particular answer? (Answer in one word.)",
        "zh": "某调查问题是：「你难道不同意我们优秀的公园需要更多资金吗？」用一个词形容这种诱导特定答案的问题。（用一个词回答。）"
      },
      "answer": "leading",
      "accept": [
        "leading",
        "Leading",
        "biased",
        "loaded",
        "诱导性",
        "引导性",
        "诱导",
        "有偏"
      ],
      "explanation": {
        "en": "A leading (or loaded) question is worded to steer respondents toward a desired answer, which biases the results. A neutral question would present the issue without emotional or directive language.",
        "zh": "诱导性（或倾向性）问题的措辞会把应答者引向期望的答案，从而使结果产生偏差。中性问题应不带情绪或指向性语言地陈述议题。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In an experiment, the group that receives no active treatment (often a placebo) is called the what group? (Answer in one word.)",
        "zh": "在实验中，未接受主动处理（常给安慰剂）的那一组称为什么组？（用一个词回答。）"
      },
      "answer": "control",
      "accept": [
        "control",
        "Control",
        "control group",
        "对照",
        "对照组"
      ],
      "explanation": {
        "en": "The control group receives no active treatment and serves as the baseline for comparison. Confusing it with the treatment group reverses which group actually receives the intervention.",
        "zh": "对照组不接受主动处理，作为比较的基线。把它与处理组混淆就弄反了实际接受干预的是哪一组。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "To simulate a coin flip that lands heads with probability 0.5, you could assign digits 0-4 to heads and 5-9 to tails. How many of the ten digits 0-9 represent heads? (Enter a number.)",
        "zh": "为模拟正面概率为 0.5 的抛硬币，可将数字 0-4 分配给正面、5-9 分配给反面。0-9 这十个数字中有多少个代表正面？（填一个数字。）"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "five",
        "五"
      ],
      "explanation": {
        "en": "Digits 0, 1, 2, 3, 4 are five of the ten equally likely digits, matching the probability 0.5. Answering 4 miscounts by treating the labels as the last digit rather than counting all five.",
        "zh": "数字 0、1、2、3、4 是十个等可能数字中的五个，正好对应概率 0.5。答 4 是把标签当成末位数字而没有数全这五个，导致误数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A researcher wants to generalize results to all high school students in a state. What single word names the entire group of interest? (Answer in one word.)",
        "zh": "某研究者想把结果推广到某州所有高中生。用一个词命名这个感兴趣的整体群体。（用一个词回答。）"
      },
      "answer": "population",
      "accept": [
        "population",
        "Population",
        "总体",
        "母体",
        "群体"
      ],
      "explanation": {
        "en": "The entire group you want to draw conclusions about is the population. Calling it the sample instead names only the smaller subset actually surveyed.",
        "zh": "你想得出结论的整个群体是总体。称其为样本则只是指实际被调查的较小子集。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A claim states that a new drug 'cures' a disease based on one small non-random trial with no control group. Should this claim be trusted? (Answer yes or no.)",
        "zh": "某说法基于一项没有对照组的小型非随机试验声称一种新药能「治愈」某疾病。该说法可信吗？（回答是或否。）"
      },
      "answer": "no",
      "accept": [
        "no",
        "No",
        "NO",
        "否",
        "不",
        "不可信",
        "不能"
      ],
      "explanation": {
        "en": "Without random assignment, a control group, or adequate size, the study cannot rule out other explanations, so the strong claim is not justified. Answering yes overlooks that weak study design cannot support a causal cure claim.",
        "zh": "没有随机分配、对照组或足够样本量，该研究无法排除其他解释，故这一强烈说法缺乏依据。答是忽视了薄弱的研究设计无法支撑因果治愈的说法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample of 1000 people has a margin of error of about ±3%. To roughly halve the margin of error, the sample size must be increased to about how many people? (Enter a number.)",
        "zh": "1000 人的样本误差幅度约为 ±3%。要把误差幅度大致减半，样本量需增加到约多少人？（填一个数字。）"
      },
      "answer": "4000",
      "accept": [
        "4000",
        "4,000",
        "4000人",
        "约4000"
      ],
      "explanation": {
        "en": "Margin of error scales with 1 over the square root of the sample size, so halving it requires about four times the sample: 4 × 1000 = 4000. Answering 2000 assumes doubling the sample halves the error, but the square-root relationship requires quadrupling it.",
        "zh": "误差幅度与样本量平方根的倒数成比例，故要减半需约四倍样本：4 × 1000 = 4000。答 2000 是以为样本翻倍即可将误差减半，但平方根关系要求样本增至四倍。"
      }
    }
  ]
};
