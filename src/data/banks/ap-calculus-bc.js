export default {
  "unit-1-limits-and-continuity/limits-and-limit-laws": [
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 2} \\frac{x^2 + x - 6}{x - 2}$.",
        "zh": "求 $\\lim_{x \\to 2} \\frac{x^2 + x - 6}{x - 2}$。"
      },
      "choices": [
        "$5$",
        "$1$",
        "$0$",
        "The limit does not exist"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor the numerator: $x^2 + x - 6 = (x + 3)(x - 2)$. Cancel $x - 2$ to get $x + 3$, which tends to $5$ as $x \\to 2$. Thinking the limit fails to exist ignores that the removable factor cancels cleanly.",
        "zh": "分子因式分解：$x^2 + x - 6 = (x + 3)(x - 2)$。约去 $x - 2$ 得 $x + 3$，当 $x \\to 2$ 时趋于 $5$。认为极限不存在的想法忽略了可约去的因子能干净地消掉。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(7x)}{x}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(7x)}{x}$。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Rewrite as $7 \\cdot \\frac{\\sin(7x)}{7x}$. As $x \\to 0$, $7x \\to 0$, so the fraction tends to $1$ and the limit is $7$. The denominator must match the argument of sine.",
        "zh": "改写为 $7 \\cdot \\frac{\\sin(7x)}{7x}$。当 $x \\to 0$ 时 $7x \\to 0$，分式趋于 $1$，故极限为 $7$。分母必须与正弦的自变量一致。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to -3} \\frac{x^2 - 9}{x + 3}$.",
        "zh": "求 $\\lim_{x \\to -3} \\frac{x^2 - 9}{x + 3}$。"
      },
      "choices": [
        "$6$",
        "$-6$",
        "$0$",
        "The limit does not exist"
      ],
      "answer": 1,
      "explanation": {
        "en": "Factor: $\\frac{(x-3)(x+3)}{x+3} = x - 3$ for $x \\neq -3$, which tends to $-3 - 3 = -6$. Answering $6$ drops the sign of $x - 3$ evaluated at $-3$.",
        "zh": "因式分解：当 $x \\neq -3$ 时 $\\frac{(x-3)(x+3)}{x+3} = x - 3$，趋于 $-3 - 3 = -6$。答 $6$ 是把 $x - 3$ 在 $-3$ 处的符号弄错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(4x)}{2x}$.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(4x)}{2x}$。"
      },
      "choices": [
        "$1$",
        "$4$",
        "$\\frac{1}{2}$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Rewrite as $\\frac{4}{2} \\cdot \\frac{\\sin(4x)}{4x} = 2 \\cdot \\frac{\\sin(4x)}{4x} \\to 2 \\cdot 1 = 2$. Match the sine argument $4x$ in the denominator before taking the limit; answering $1$ ignores the coefficients.",
        "zh": "改写为 $\\frac{4}{2} \\cdot \\frac{\\sin(4x)}{4x} = 2 \\cdot \\frac{\\sin(4x)}{4x} \\to 2 \\cdot 1 = 2$。取极限前先让分母与正弦自变量 $4x$ 匹配；答 $1$ 是忽略了系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$。"
      },
      "choices": [
        "$0$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{4}$",
        "The limit does not exist"
      ],
      "answer": 2,
      "explanation": {
        "en": "Substitution gives $\\frac{0}{0}$. Multiply by the conjugate $\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$ to get $\\frac{x}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2} \\to \\frac{1}{4}$. Reading $\\frac{0}{0}$ as $0$ skips the required algebra.",
        "zh": "直接代入得 $\\frac{0}{0}$。乘以共轭式 $\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$ 得 $\\frac{x}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2} \\to \\frac{1}{4}$。把 $\\frac{0}{0}$ 直接当成 $0$ 就跳过了必要的代数步骤。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$.",
        "zh": "求 $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$。"
      },
      "choices": [
        "$5$",
        "$0$",
        "$10$",
        "The limit does not exist"
      ],
      "answer": 2,
      "explanation": {
        "en": "Factor: $\\frac{(x-5)(x+5)}{x-5} = x + 5$ for $x \\neq 5$, which tends to $10$ as $x \\to 5$. The limit ignores that $f(5)$ itself is undefined.",
        "zh": "因式分解：当 $x \\neq 5$ 时 $\\frac{(x-5)(x+5)}{x-5} = x + 5$，当 $x \\to 5$ 时趋于 $10$。极限不关心 $f(5)$ 本身无定义这一事实。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Suppose $\\lim_{x \\to a} f(x) = 4$ and $\\lim_{x \\to a} g(x) = -1$. Evaluate $\\lim_{x \\to a} \\frac{2f(x) - g(x)}{f(x) + g(x)}$.",
        "zh": "设 $\\lim_{x \\to a} f(x) = 4$，$\\lim_{x \\to a} g(x) = -1$。求 $\\lim_{x \\to a} \\frac{2f(x) - g(x)}{f(x) + g(x)}$。"
      },
      "choices": [
        "$\\frac{9}{5}$",
        "$\\frac{7}{3}$",
        "$9$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "By the limit laws the numerator tends to $2(4) - (-1) = 9$ and the denominator to $4 + (-1) = 3$, so the limit is $\\frac{9}{3} = 3$. Errors come from mishandling the signs of $g$.",
        "zh": "由极限法则，分子趋于 $2(4) - (-1) = 9$，分母趋于 $4 + (-1) = 3$，故极限为 $\\frac{9}{3} = 3$。出错往往是 $g$ 的符号处理不当。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\tan x}{x}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\tan x}{x}$。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "Write $\\frac{\\tan x}{x} = \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x}$. As $x \\to 0$, $\\frac{\\sin x}{x} \\to 1$ and $\\frac{1}{\\cos x} \\to 1$, so the limit is $1$.",
        "zh": "写成 $\\frac{\\tan x}{x} = \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x}$。当 $x \\to 0$ 时 $\\frac{\\sin x}{x} \\to 1$，$\\frac{1}{\\cos x} \\to 1$，故极限为 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = \\begin{cases} x + 2 & x < 1 \\\\ 4x & x \\geq 1 \\end{cases}$. Evaluate $\\lim_{x \\to 1} f(x)$.",
        "zh": "设 $f(x) = \\begin{cases} x + 2 & x < 1 \\\\ 4x & x \\geq 1 \\end{cases}$。求 $\\lim_{x \\to 1} f(x)$。"
      },
      "choices": [
        "The limit does not exist",
        "$3$",
        "$4$",
        "$\\frac{7}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The left-hand limit is $1 + 2 = 3$; the right-hand limit is $4(1) = 4$. The one-sided limits disagree, so the two-sided limit does not exist. Averaging them to $\\frac{7}{2}$ is never valid.",
        "zh": "左极限为 $1 + 2 = 3$；右极限为 $4(1) = 4$。两个单侧极限不相等，故双侧极限不存在。取平均得 $\\frac{7}{2}$ 从来都不成立。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(2x)}{3x}$. Give your answer as a fraction.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(2x)}{3x}$。请以分数形式作答。"
      },
      "answer": "2/3",
      "accept": [
        "0.667",
        "0.6667",
        "0.66667"
      ],
      "explanation": {
        "en": "Rewrite as $\\frac{2}{3} \\cdot \\frac{\\sin(2x)}{2x} \\to \\frac{2}{3} \\cdot 1 = \\frac{2}{3}$. The factor $\\frac{2}{3}$ comes from matching the sine argument $2x$ against the $3x$ in the denominator.",
        "zh": "改写为 $\\frac{2}{3} \\cdot \\frac{\\sin(2x)}{2x} \\to \\frac{2}{3} \\cdot 1 = \\frac{2}{3}$。系数 $\\frac{2}{3}$ 来自把正弦自变量 $2x$ 与分母 $3x$ 匹配。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$.",
        "zh": "求 $\\lim_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$。"
      },
      "choices": [
        "$\\frac{1}{4}$",
        "$4$",
        "$0$",
        "$2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply by the conjugate $\\frac{\\sqrt{x}+2}{\\sqrt{x}+2}$: $\\frac{(x-4)(\\sqrt{x}+2)}{x - 4} = \\sqrt{x} + 2 \\to \\sqrt{4} + 2 = 4$. Getting $\\frac{1}{4}$ inverts the expression from the more common $\\frac{\\sqrt{x}-2}{x-4}$ form.",
        "zh": "乘以共轭式 $\\frac{\\sqrt{x}+2}{\\sqrt{x}+2}$：$\\frac{(x-4)(\\sqrt{x}+2)}{x - 4} = \\sqrt{x} + 2 \\to \\sqrt{4} + 2 = 4$。答 $\\frac{1}{4}$ 是把式子与更常见的 $\\frac{\\sqrt{x}-2}{x-4}$ 形式取了倒数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\frac{1}{x + 2} - \\frac{1}{2}}{x}$. Give your answer as a fraction.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\frac{1}{x + 2} - \\frac{1}{2}}{x}$。请以分数形式作答。"
      },
      "answer": "-1/4",
      "accept": [
        "-0.25",
        "-.25"
      ],
      "explanation": {
        "en": "Combine the top over a common denominator: $\\frac{1}{x+2} - \\frac{1}{2} = \\frac{2 - (x+2)}{2(x+2)} = \\frac{-x}{2(x+2)}$. Divide by $x$: $\\frac{-1}{2(x+2)} \\to \\frac{-1}{4}$.",
        "zh": "分子通分：$\\frac{1}{x+2} - \\frac{1}{2} = \\frac{2 - (x+2)}{2(x+2)} = \\frac{-x}{2(x+2)}$。再除以 $x$：$\\frac{-1}{2(x+2)} \\to \\frac{-1}{4}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Suppose $\\lim_{x \\to a} f(x) = 2$. Evaluate $\\lim_{x \\to a} \\left([f(x)]^3 - 4\\right)$.",
        "zh": "设 $\\lim_{x \\to a} f(x) = 2$。求 $\\lim_{x \\to a} \\left([f(x)]^3 - 4\\right)$。"
      },
      "choices": [
        "$-4$",
        "$2$",
        "$4$",
        "$8$"
      ],
      "answer": 2,
      "explanation": {
        "en": "By the power law, $[f(x)]^3 \\to 2^3 = 8$, then subtract $4$ to get $8 - 4 = 4$. Answering $8$ forgets the $-4$; answering $2$ forgets to cube.",
        "zh": "由幂法则，$[f(x)]^3 \\to 2^3 = 8$，再减 $4$ 得 $8 - 4 = 4$。答 $8$ 是忘了减 $4$；答 $2$ 是忘了立方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x - 3}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x - 3}$。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Factor the numerator: $x^2 - 2x - 3 = (x - 3)(x + 1)$. Cancel $x - 3$ to get $x + 1$, which tends to $4$ as $x \\to 3$.",
        "zh": "分子因式分解：$x^2 - 2x - 3 = (x - 3)(x + 1)$。约去 $x - 3$ 得 $x + 1$，当 $x \\to 3$ 时趋于 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which limit is correctly evaluated by the squeeze theorem?",
        "zh": "下列哪个极限可以用夹逼定理正确求出？"
      },
      "choices": [
        "$\\lim_{x \\to 0} x^2 \\sin\\frac{1}{x} = 0$",
        "$\\lim_{x \\to 0} \\cos\\frac{1}{x} = 0$",
        "$\\lim_{x \\to 0} \\frac{\\sin x}{x^3} = 1$",
        "$\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = 1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $-x^2 \\leq x^2 \\sin\\frac{1}{x} \\leq x^2$ and both bounds tend to $0$, the squeeze theorem gives $0$. The bounded oscillation of $\\cos\\frac{1}{x}$ alone has no limit; $\\frac{\\sin x}{x}$ tends to $0$ (not $1$) as $x \\to \\infty$.",
        "zh": "因为 $-x^2 \\leq x^2 \\sin\\frac{1}{x} \\leq x^2$ 且两边都趋于 $0$，由夹逼定理极限为 $0$。仅靠 $\\cos\\frac{1}{x}$ 的有界振荡没有极限；当 $x \\to \\infty$ 时 $\\frac{\\sin x}{x}$ 趋于 $0$ 而非 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x}$。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "-0"
      ],
      "explanation": {
        "en": "Rewrite as $2 \\cdot \\frac{1 - \\cos(2x)}{2x}$. Since $\\lim_{u \\to 0} \\frac{1 - \\cos u}{u} = 0$ with $u = 2x$, the limit is $2 \\cdot 0 = 0$.",
        "zh": "改写为 $2 \\cdot \\frac{1 - \\cos(2x)}{2x}$。因为令 $u = 2x$ 时 $\\lim_{u \\to 0} \\frac{1 - \\cos u}{u} = 0$，故极限为 $2 \\cdot 0 = 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A table gives values of $f$: $f(2.9) = 6.99$, $f(2.99) = 6.999$, $f(3.01) = 7.001$, $f(3.1) = 7.01$. Which is the best conclusion about $\\lim_{x \\to 3} f(x)$?",
        "zh": "数表给出 $f$ 的取值：$f(2.9) = 6.99$，$f(2.99) = 6.999$，$f(3.01) = 7.001$，$f(3.1) = 7.01$。关于 $\\lim_{x \\to 3} f(x)$ 最合理的结论是哪一个？"
      },
      "choices": [
        "$6$",
        "$7$",
        "$7.5$",
        "The limit appears not to exist"
      ],
      "answer": 1,
      "explanation": {
        "en": "From both sides the values close in on $7$: from the left $6.99, 6.999$ and from the right $7.001, 7.01$. The one-sided limits agree, so the limit appears to be $7$.",
        "zh": "从两侧看函数值都逼近 $7$：左侧为 $6.99, 6.999$，右侧为 $7.001, 7.01$。两个单侧极限一致，故极限看来为 $7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Use the factorization $x^3 - 1 = (x - 1)(x^2 + x + 1)$. Cancel $x - 1$ to get $x^2 + x + 1$, which tends to $1 + 1 + 1 = 3$.",
        "zh": "利用因式分解 $x^3 - 1 = (x - 1)(x^2 + x + 1)$。约去 $x - 1$ 得 $x^2 + x + 1$，趋于 $1 + 1 + 1 = 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 2} \\frac{x - 2}{|x - 2|}$.",
        "zh": "求 $\\lim_{x \\to 2} \\frac{x - 2}{|x - 2|}$。"
      },
      "choices": [
        "$1$",
        "$-1$",
        "$0$",
        "The limit does not exist"
      ],
      "answer": 3,
      "explanation": {
        "en": "For $x > 2$ the ratio is $\\frac{x-2}{x-2} = 1$; for $x < 2$ it is $\\frac{x-2}{-(x-2)} = -1$. The one-sided limits are $1$ and $-1$, so the two-sided limit does not exist.",
        "zh": "当 $x > 2$ 时比值为 $\\frac{x-2}{x-2} = 1$；当 $x < 2$ 时为 $\\frac{x-2}{-(x-2)} = -1$。两个单侧极限为 $1$ 和 $-1$，故双侧极限不存在。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(8x)}{\\sin(2x)}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(8x)}{\\sin(2x)}$。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Divide top and bottom by $x$: $\\frac{\\sin(8x)/x}{\\sin(2x)/x} \\to \\frac{8}{2} = 4$, since $\\frac{\\sin(8x)}{x} \\to 8$ and $\\frac{\\sin(2x)}{x} \\to 2$.",
        "zh": "分子分母同除以 $x$：$\\frac{\\sin(8x)/x}{\\sin(2x)/x} \\to \\frac{8}{2} = 4$，因为 $\\frac{\\sin(8x)}{x} \\to 8$，$\\frac{\\sin(2x)}{x} \\to 2$。"
      }
    }
  ],
  "unit-1-limits-and-continuity/continuity-and-ivt": [
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = \\frac{x^2 - 9}{x - 3}$ for $x \\neq 3$ and $f(3) = 5$. The discontinuity of $f$ at $x = 3$ is",
        "zh": "设 $x \\neq 3$ 时 $f(x) = \\frac{x^2 - 9}{x - 3}$，且 $f(3) = 5$。则 $f$ 在 $x = 3$ 处的间断点是"
      },
      "choices": [
        "a jump discontinuity 跳跃间断点",
        "a removable discontinuity 可去间断点",
        "an infinite discontinuity 无穷间断点",
        "not a discontinuity 不是间断点"
      ],
      "answer": 1,
      "explanation": {
        "en": "The limit exists: $\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = 6$. But $f(3) = 5 \\neq 6$, so the third continuity condition fails in a repairable way — redefining $f(3) = 6$ would fix it.",
        "zh": "极限存在：$\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = 6$。但 $f(3) = 5 \\neq 6$，第三个连续条件不成立且可以修复——把 $f(3)$ 重新定义为 $6$ 即可。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\begin{cases} 2x + k & x < 2 \\\\ x^2 + 1 & x \\geq 2 \\end{cases}$. Find the value of $k$ that makes $f$ continuous at $x = 2$. Give an integer.",
        "zh": "设 $f(x) = \\begin{cases} 2x + k & x < 2 \\\\ x^2 + 1 & x \\geq 2 \\end{cases}$。求使 $f$ 在 $x = 2$ 处连续的 $k$ 值。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "Match the one-sided limits at the seam: left gives $2(2) + k = 4 + k$, right gives $2^2 + 1 = 5$. Setting $4 + k = 5$ yields $k = 1$.",
        "zh": "在分段点处令单侧极限相等：左侧为 $2(2) + k = 4 + k$，右侧为 $2^2 + 1 = 5$。由 $4 + k = 5$ 解得 $k = 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Consider $g(x) = \\frac{x - 2}{x^2 - 4}$. Which statement is correct?",
        "zh": "考虑 $g(x) = \\frac{x - 2}{x^2 - 4}$。下列哪个说法正确？"
      },
      "choices": [
        "Removable discontinuity at $x = 2$, infinite at $x = -2$ 在 $x = 2$ 可去，在 $x = -2$ 无穷",
        "Infinite discontinuities at both $x = 2$ and $x = -2$ 两处都是无穷间断点",
        "Removable discontinuity at $x = -2$, infinite at $x = 2$ 在 $x = -2$ 可去，在 $x = 2$ 无穷",
        "Jump discontinuities at $x = \\pm 2$ 在 $x = \\pm 2$ 处是跳跃间断点"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor: $g(x) = \\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2}$ for $x \\neq 2$. The factor $x - 2$ cancels, so $x = 2$ is a hole (limit $= \\frac{1}{4}$), while $x = -2$ leaves a zero denominator with nonzero numerator — a vertical asymptote.",
        "zh": "因式分解：当 $x \\neq 2$ 时 $g(x) = \\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2}$。因子 $x - 2$ 被约去，故 $x = 2$ 是一个洞（极限为 $\\frac{1}{4}$）；而 $x = -2$ 处分母为零、分子不为零——是垂直渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On which interval is $F(x) = \\frac{\\sqrt{x + 2}}{x - 1}$ continuous?",
        "zh": "$F(x) = \\frac{\\sqrt{x + 2}}{x - 1}$ 在下列哪个区间上连续？"
      },
      "choices": [
        "$(-\\infty, 1) \\cup (1, \\infty)$",
        "$[-2, \\infty)$",
        "$(-2, 1)$",
        "$[-2, 1) \\cup (1, \\infty)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The square root requires $x \\geq -2$ and the denominator forbids $x = 1$, so $F$ is continuous exactly on $[-2, 1) \\cup (1, \\infty)$. Dropping the domain of the root or the excluded point $x = 1$ gives the wrong set.",
        "zh": "根号要求 $x \\geq -2$，分母排除 $x = 1$，因此 $F$ 恰在 $[-2, 1) \\cup (1, \\infty)$ 上连续。忽略根号定义域或漏掉排除点 $x = 1$ 都会得到错误的集合。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = \\frac{\\sin x}{x}$ for $x \\neq 0$ and $f(0) = 1$. At $x = 0$, $f$ is",
        "zh": "设 $x \\neq 0$ 时 $f(x) = \\frac{\\sin x}{x}$，且 $f(0) = 1$。在 $x = 0$ 处，$f$ 是"
      },
      "choices": [
        "continuous 连续的",
        "a removable discontinuity 可去间断点",
        "a jump discontinuity 跳跃间断点",
        "an infinite discontinuity 无穷间断点"
      ],
      "answer": 0,
      "explanation": {
        "en": "The limit is $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, and $f(0) = 1$ matches it. All three continuity conditions hold, so $f$ is continuous at $0$ — the definition at $0$ was chosen precisely to fill the hole.",
        "zh": "极限为 $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$，而 $f(0) = 1$ 与之相等。连续性的三个条件全部成立，故 $f$ 在 $0$ 处连续——$0$ 处的定义正是为了补上那个洞。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\frac{x^2 - 5x + 6}{x - 2}$ for $x \\neq 2$. What value should $f(2)$ be defined as so that $f$ becomes continuous at $x = 2$? Give an integer.",
        "zh": "设 $x \\neq 2$ 时 $f(x) = \\frac{x^2 - 5x + 6}{x - 2}$。应将 $f(2)$ 定义为何值才能使 $f$ 在 $x = 2$ 处连续？请填一个整数。"
      },
      "answer": "-1",
      "accept": [
        "-1.0"
      ],
      "explanation": {
        "en": "For $x \\neq 2$, $f(x) = \\frac{(x-2)(x-3)}{x-2} = x - 3$, so $\\lim_{x \\to 2} f(x) = 2 - 3 = -1$. Defining $f(2) = -1$ removes the discontinuity.",
        "zh": "当 $x \\neq 2$ 时 $f(x) = \\frac{(x-2)(x-3)}{x-2} = x - 3$，故 $\\lim_{x \\to 2} f(x) = 2 - 3 = -1$。定义 $f(2) = -1$ 就消除了间断。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $h(x) = \\begin{cases} 2x - 1 & x < 3 \\\\ x + 1 & x \\geq 3 \\end{cases}$. At $x = 3$, $h$ has",
        "zh": "设 $h(x) = \\begin{cases} 2x - 1 & x < 3 \\\\ x + 1 & x \\geq 3 \\end{cases}$。在 $x = 3$ 处，$h$ 有"
      },
      "choices": [
        "a removable discontinuity 一个可去间断点",
        "an infinite discontinuity 一个无穷间断点",
        "no discontinuity 没有间断点",
        "a jump discontinuity 一个跳跃间断点"
      ],
      "answer": 3,
      "explanation": {
        "en": "The left-hand limit is $2(3) - 1 = 5$; the right-hand limit is $3 + 1 = 4$. Both one-sided limits exist but disagree, which is exactly a jump. No single redefinition can reconcile two different one-sided limits.",
        "zh": "左极限为 $2(3) - 1 = 5$；右极限为 $3 + 1 = 4$。两个单侧极限都存在但不相等，这正是跳跃间断点。无论怎样重新定义一个函数值，都无法让两个不同的单侧极限一致。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$f$ is continuous on $[1, 6]$ with $f(1) = 4$, $f(3) = -1$, and $f(6) = 2$. What is the minimum number of solutions to $f(x) = 0$ on $(1, 6)$ guaranteed by the IVT? Give an integer.",
        "zh": "$f$ 在 $[1, 6]$ 上连续，$f(1) = 4$，$f(3) = -1$，$f(6) = 2$。由介值定理，方程 $f(x) = 0$ 在 $(1, 6)$ 内保证至少有几个解？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "The sign changes twice: $f(1) = 4 > 0$ to $f(3) = -1 < 0$ forces a zero in $(1, 3)$, and $f(3) < 0$ to $f(6) = 2 > 0$ forces another in $(3, 6)$. So at least $2$ zeros are guaranteed.",
        "zh": "符号变化两次：从 $f(1) = 4 > 0$ 到 $f(3) = -1 < 0$ 保证 $(1, 3)$ 内有一个零点；从 $f(3) < 0$ 到 $f(6) = 2 > 0$ 又保证 $(3, 6)$ 内有一个。因此至少保证 $2$ 个零点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$f$ is continuous on $[2, 6]$ with $f(2) = -3$ and $f(6) = 4$. Which conclusion is guaranteed by the Intermediate Value Theorem?",
        "zh": "$f$ 在 $[2, 6]$ 上连续，$f(2) = -3$，$f(6) = 4$。下列哪个结论由介值定理保证成立？"
      },
      "choices": [
        "$f(c) = 5$ for some $c$ in $(2, 6)$ 存在 $c \\in (2, 6)$ 使 $f(c) = 5$",
        "$f(c) = -4$ for some $c$ in $(2, 6)$ 存在 $c \\in (2, 6)$ 使 $f(c) = -4$",
        "$f(c) = 0$ for some $c$ in $(2, 6)$ 存在 $c \\in (2, 6)$ 使 $f(c) = 0$",
        "$f$ has exactly one zero in $(2, 6)$ $f$ 在 $(2, 6)$ 内恰有一个零点"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $0$ lies between $-3$ and $4$ and $f$ is continuous, the IVT guarantees some $c$ with $f(c) = 0$. The values $5$ and $-4$ lie outside $[-3, 4]$, and the IVT never asserts uniqueness.",
        "zh": "因为 $0$ 介于 $-3$ 与 $4$ 之间且 $f$ 连续，介值定理保证存在 $c$ 使 $f(c) = 0$。$5$ 和 $-4$ 都不在 $[-3, 4]$ 内，且介值定理从不断言唯一性。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\frac{x^2 - 9}{x - 3}$ for $x \\neq 3$. What value should $f(3)$ be defined as so that $f$ is continuous at $x = 3$? Give an integer.",
        "zh": "设 $x \\neq 3$ 时 $f(x) = \\frac{x^2 - 9}{x - 3}$。应将 $f(3)$ 定义为何值才能使 $f$ 在 $x = 3$ 处连续？请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "For $x \\neq 3$, $f(x) = \\frac{(x-3)(x+3)}{x-3} = x + 3$, so $\\lim_{x \\to 3} f(x) = 6$. Defining $f(3) = 6$ removes the removable discontinuity.",
        "zh": "当 $x \\neq 3$ 时 $f(x) = \\frac{(x-3)(x+3)}{x-3} = x + 3$，故 $\\lim_{x \\to 3} f(x) = 6$。定义 $f(3) = 6$ 消除了可去间断点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Consider $g(x) = \\frac{x^2 - 1}{x^2 - 3x + 2}$. Classify the behavior at its two problem points.",
        "zh": "考虑 $g(x) = \\frac{x^2 - 1}{x^2 - 3x + 2}$。判断其两个问题点处的情形。"
      },
      "choices": [
        "Hole at $x = 1$, vertical asymptote at $x = 2$ 在 $x = 1$ 处是洞，$x = 2$ 处是垂直渐近线",
        "Holes at both $x = 1$ and $x = 2$ 两处都是洞",
        "Vertical asymptotes at both 两处都是垂直渐近线",
        "Hole at $x = 2$, vertical asymptote at $x = 1$ 在 $x = 2$ 处是洞，$x = 1$ 处是垂直渐近线"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor: $g(x) = \\frac{(x-1)(x+1)}{(x-1)(x-2)} = \\frac{x+1}{x-2}$ for $x \\neq 1$. The factor $x - 1$ cancels, so $x = 1$ is a hole; $x = 2$ leaves a zero denominator with nonzero numerator, a vertical asymptote.",
        "zh": "因式分解：当 $x \\neq 1$ 时 $g(x) = \\frac{(x-1)(x+1)}{(x-1)(x-2)} = \\frac{x+1}{x-2}$。因子 $x - 1$ 被约去，故 $x = 1$ 是洞；$x = 2$ 处分母为零、分子不为零，是垂直渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$f$ is continuous with $f(0) = 3$, $f(1) = -2$, $f(3) = 1$, and $f(5) = -4$. What is the minimum number of zeros of $f$ on $(0, 5)$ guaranteed by the IVT?",
        "zh": "$f$ 连续，$f(0) = 3$，$f(1) = -2$，$f(3) = 1$，$f(5) = -4$。由介值定理，$f$ 在 $(0, 5)$ 内保证至少有几个零点？"
      },
      "choices": [
        "$1$",
        "$2$",
        "$3$",
        "$4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The signs run $+, -, +, -$, changing three times: on $(0,1)$, $(1,3)$, and $(3,5)$. Each sign change forces a zero, so at least $3$ zeros are guaranteed.",
        "zh": "符号依次为 $+, -, +, -$，共变化三次：在 $(0,1)$、$(1,3)$、$(3,5)$ 上各变一次。每次变号都保证一个零点，故至少保证 $3$ 个零点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which function is continuous for every real number $x$?",
        "zh": "下列哪个函数对每一个实数 $x$ 都连续？"
      },
      "choices": [
        "$\\ln x$",
        "$\\tan x$",
        "$\\frac{1}{x}$",
        "$\\frac{e^x}{x^2 + 1}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The denominator $x^2 + 1$ is never zero, and $e^x$ is continuous everywhere, so $\\frac{e^x}{x^2+1}$ is continuous for all $x$. The others fail: $\\ln x$ needs $x > 0$, $\\tan x$ breaks at odd multiples of $\\frac{\\pi}{2}$, and $\\frac{1}{x}$ breaks at $x = 0$.",
        "zh": "分母 $x^2 + 1$ 恒不为零，且 $e^x$ 处处连续，故 $\\frac{e^x}{x^2+1}$ 对所有 $x$ 连续。其余都不行：$\\ln x$ 要求 $x > 0$，$\\tan x$ 在 $\\frac{\\pi}{2}$ 的奇数倍处间断，$\\frac{1}{x}$ 在 $x = 0$ 处间断。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = \\frac{|x|}{x}$ for $x \\neq 0$ (undefined at $x = 0$). At $x = 0$, $f$ has",
        "zh": "设 $x \\neq 0$ 时 $f(x) = \\frac{|x|}{x}$（在 $x = 0$ 处无定义）。在 $x = 0$ 处，$f$ 有"
      },
      "choices": [
        "a removable discontinuity 一个可去间断点",
        "a jump discontinuity 一个跳跃间断点",
        "an infinite discontinuity 一个无穷间断点",
        "no discontinuity 没有间断点"
      ],
      "answer": 1,
      "explanation": {
        "en": "For $x > 0$, $f(x) = 1$; for $x < 0$, $f(x) = -1$. The one-sided limits are $1$ and $-1$, which disagree — a jump. It is not removable because no single value can bridge two different one-sided limits.",
        "zh": "当 $x > 0$ 时 $f(x) = 1$；当 $x < 0$ 时 $f(x) = -1$。两个单侧极限为 $1$ 与 $-1$，不相等——是跳跃间断点。它不可去，因为没有单一数值能连接两个不同的单侧极限。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\begin{cases} ax - 1 & x < 2 \\\\ 3x + 1 & x \\geq 2 \\end{cases}$. Find the value of $a$ that makes $f$ continuous at $x = 2$. Give an integer.",
        "zh": "设 $f(x) = \\begin{cases} ax - 1 & x < 2 \\\\ 3x + 1 & x \\geq 2 \\end{cases}$。求使 $f$ 在 $x = 2$ 处连续的 $a$ 值。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Match the one-sided limits at $x = 2$: left gives $2a - 1$, right gives $3(2) + 1 = 7$. Setting $2a - 1 = 7$ yields $a = 4$.",
        "zh": "在 $x = 2$ 处令单侧极限相等：左侧为 $2a - 1$，右侧为 $3(2) + 1 = 7$。由 $2a - 1 = 7$ 解得 $a = 4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To conclude by the IVT that $f$ has a root in $[a, b]$, which hypothesis must hold?",
        "zh": "要用介值定理断定 $f$ 在 $[a, b]$ 内有一个根，必须满足下列哪个条件？"
      },
      "choices": [
        "$f$ is differentiable on $(a, b)$ $f$ 在 $(a, b)$ 上可导",
        "$f$ is continuous on $[a, b]$ and $f(a)f(b) < 0$ $f$ 在 $[a, b]$ 上连续且 $f(a)f(b) < 0$",
        "$f(a) = f(b)$",
        "$f$ is increasing on $[a, b]$ $f$ 在 $[a, b]$ 上递增"
      ],
      "answer": 1,
      "explanation": {
        "en": "The IVT needs continuity on the closed interval, and $f(a)f(b) < 0$ means the endpoints have opposite signs so $0$ lies between them. Differentiability, equal endpoints, or monotonicity are neither required nor sufficient here.",
        "zh": "介值定理需要在闭区间上连续，而 $f(a)f(b) < 0$ 意味着端点异号，故 $0$ 介于两者之间。可导、端点相等或单调既非必要也不充分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $g(x) = \\frac{x - 4}{x^2 - 16}$ for $x \\neq 4$. What value should $g(4)$ be defined as so that $g$ is continuous at $x = 4$? Give your answer as a fraction.",
        "zh": "设 $x \\neq 4$ 时 $g(x) = \\frac{x - 4}{x^2 - 16}$。应将 $g(4)$ 定义为何值才能使 $g$ 在 $x = 4$ 处连续？请以分数形式作答。"
      },
      "answer": "1/8",
      "accept": [
        "0.125",
        ".125"
      ],
      "explanation": {
        "en": "Factor: $g(x) = \\frac{x-4}{(x-4)(x+4)} = \\frac{1}{x+4}$ for $x \\neq 4$, so $\\lim_{x \\to 4} g(x) = \\frac{1}{8}$. Defining $g(4) = \\frac{1}{8}$ removes the hole.",
        "zh": "因式分解：当 $x \\neq 4$ 时 $g(x) = \\frac{x-4}{(x-4)(x+4)} = \\frac{1}{x+4}$，故 $\\lim_{x \\to 4} g(x) = \\frac{1}{8}$。定义 $g(4) = \\frac{1}{8}$ 消除了那个洞。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many points of discontinuity does $f(x) = \\frac{x + 1}{x^2 - x - 6}$ have? Give an integer.",
        "zh": "$f(x) = \\frac{x + 1}{x^2 - x - 6}$ 有几个间断点？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Factor the denominator: $x^2 - x - 6 = (x - 3)(x + 2)$. Neither factor cancels with the numerator $x + 1$, so both $x = 3$ and $x = -2$ are (infinite) discontinuities — $2$ in total.",
        "zh": "分母因式分解：$x^2 - x - 6 = (x - 3)(x + 2)$。两个因子都无法与分子 $x + 1$ 约去，故 $x = 3$ 与 $x = -2$ 都是（无穷）间断点——共 $2$ 个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $g(x) = \\frac{x^2 - 16}{x - 4}$ for $x \\neq 4$. What value should $g(4)$ be defined as so that $g$ is continuous at $x = 4$? Give an integer.",
        "zh": "设 $x \\neq 4$ 时 $g(x) = \\frac{x^2 - 16}{x - 4}$。应将 $g(4)$ 定义为何值才能使 $g$ 在 $x = 4$ 处连续？请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "For $x \\neq 4$, $g(x) = \\frac{(x-4)(x+4)}{x-4} = x + 4$, so $\\lim_{x \\to 4} g(x) = 8$. Defining $g(4) = 8$ removes the removable discontinuity.",
        "zh": "当 $x \\neq 4$ 时 $g(x) = \\frac{(x-4)(x+4)}{x-4} = x + 4$，故 $\\lim_{x \\to 4} g(x) = 8$。定义 $g(4) = 8$ 消除了可去间断点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A function $f$ is continuous on $[0, 4]$ with $f(0) = 1$ and $f(4) = 9$. Which value is NOT guaranteed to be attained by $f$ on $(0, 4)$?",
        "zh": "函数 $f$ 在 $[0, 4]$ 上连续，$f(0) = 1$，$f(4) = 9$。下列哪个值不保证被 $f$ 在 $(0, 4)$ 上取到？"
      },
      "choices": [
        "$3$",
        "$5$",
        "$8$",
        "$10$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The IVT guarantees every value strictly between $f(0) = 1$ and $f(4) = 9$ is attained, so $3$, $5$, and $8$ are all reached. The value $10$ lies outside $[1, 9]$, so it is not guaranteed.",
        "zh": "介值定理保证严格介于 $f(0) = 1$ 与 $f(4) = 9$ 之间的每个值都被取到，故 $3$、$5$、$8$ 都能取到。$10$ 在 $[1, 9]$ 之外，因此不被保证。"
      }
    }
  ],
  "unit-1-limits-and-continuity/limits-at-infinity-and-asymptotes": [
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{4x^3 - x}{2x^3 + 5}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{4x^3 - x}{2x^3 + 5}$。"
      },
      "choices": [
        "$0$",
        "$2$",
        "$\\infty$",
        "$\\frac{4}{5}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The degrees are equal, so the limit is the ratio of leading coefficients, $\\frac{4}{2} = 2$. Only the highest-degree terms matter as $x \\to \\infty$; using the other coefficients gives a wrong value.",
        "zh": "分子分母次数相等，极限等于首项系数之比 $\\frac{4}{2} = 2$。当 $x \\to \\infty$ 时只有最高次项起作用；用其余系数会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{6x - 1}{2x + 3}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{6x - 1}{2x + 3}$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Equal degrees: divide top and bottom by $x$ to get $\\frac{6 - \\frac{1}{x}}{2 + \\frac{3}{x}} \\to \\frac{6}{2} = 3$.",
        "zh": "次数相等：分子分母同除以 $x$ 得 $\\frac{6 - \\frac{1}{x}}{2 + \\frac{3}{x}} \\to \\frac{6}{2} = 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{x^2 - 3}{x^3 + 1}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{x^2 - 3}{x^3 + 1}$。"
      },
      "choices": [
        "$0$",
        "$1$",
        "$\\infty$",
        "$-3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The numerator has lower degree than the denominator, so the quotient shrinks to $0$ and the horizontal asymptote is $y = 0$. Divide by $x^3$ to confirm: $\\frac{\\frac{1}{x} - \\frac{3}{x^3}}{1 + \\frac{1}{x^3}} \\to 0$.",
        "zh": "分子次数低于分母，商趋于 $0$，水平渐近线为 $y = 0$。除以 $x^3$ 验证：$\\frac{\\frac{1}{x} - \\frac{3}{x^3}}{1 + \\frac{1}{x^3}} \\to 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$。"
      },
      "choices": [
        "$\\infty$",
        "$1$",
        "$0$",
        "The limit does not exist"
      ],
      "answer": 2,
      "explanation": {
        "en": "Every positive power of $x$ grows faster than $\\ln x$, so $\\frac{\\ln x}{x} \\to 0$. Reading it as $1$ or $\\infty$ misorders the growth-rate hierarchy.",
        "zh": "任何正次幂的 $x$ 都比 $\\ln x$ 增长得快，故 $\\frac{\\ln x}{x} \\to 0$。答 $1$ 或 $\\infty$ 都是把增长速率排序弄错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y = \\frac{x + 2}{x^2 - 4}$ has a vertical asymptote at",
        "zh": "$y = \\frac{x + 2}{x^2 - 4}$ 的图象在下列哪处有垂直渐近线？"
      },
      "choices": [
        "$x = 2$ and $x = -2$ $x = 2$ 与 $x = -2$",
        "$x = -2$ only 仅 $x = -2$",
        "$x = 0$",
        "$x = 2$ only 仅 $x = 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor: $\\frac{x+2}{(x-2)(x+2)} = \\frac{1}{x-2}$ for $x \\neq -2$. The cancelled factor makes $x = -2$ a hole; only $x = 2$ leaves an unbounded limit. Reading asymptotes straight off the denominator without factoring gives the wrong set.",
        "zh": "因式分解：当 $x \\neq -2$ 时 $\\frac{x+2}{(x-2)(x+2)} = \\frac{1}{x-2}$。被约去的因子使 $x = -2$ 成为洞；只有 $x = 2$ 处极限无界。不先分解、直接从分母读渐近线会得到错误结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to -\\infty} \\frac{3x}{\\sqrt{x^2 + 2}}$.",
        "zh": "求 $\\lim_{x \\to -\\infty} \\frac{3x}{\\sqrt{x^2 + 2}}$。"
      },
      "choices": [
        "$3$",
        "$-3$",
        "$0$",
        "The limit does not exist"
      ],
      "answer": 1,
      "explanation": {
        "en": "Divide by $\\sqrt{x^2} = |x|$. For $x < 0$, $|x| = -x$, so $\\frac{3x}{|x|\\sqrt{1 + 2/x^2}} \\to \\frac{3x}{-x} = -3$. Forgetting the sign flip from the square root gives $3$.",
        "zh": "除以 $\\sqrt{x^2} = |x|$。当 $x < 0$ 时 $|x| = -x$，故 $\\frac{3x}{|x|\\sqrt{1 + 2/x^2}} \\to \\frac{3x}{-x} = -3$。忘记根号带来的符号翻转就会得到 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to -\\infty} \\frac{2x + 5}{x - 1}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to -\\infty} \\frac{2x + 5}{x - 1}$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Equal degrees: divide by $x$ to get $\\frac{2 + \\frac{5}{x}}{1 - \\frac{1}{x}} \\to \\frac{2}{1} = 2$. With no square roots, the direction $-\\infty$ versus $\\infty$ does not change the answer.",
        "zh": "次数相等：除以 $x$ 得 $\\frac{2 + \\frac{5}{x}}{1 - \\frac{1}{x}} \\to \\frac{2}{1} = 2$。没有根号时，方向是 $-\\infty$ 还是 $\\infty$ 都不影响答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{x^2 + 2x}{x - 1}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{x^2 + 2x}{x - 1}$。"
      },
      "choices": [
        "$1$",
        "$0$",
        "$\\infty$",
        "$2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The numerator has higher degree, so the quotient grows without bound: the limit is $\\infty$ and there is no horizontal asymptote (a slant asymptote appears instead). Matching leading coefficients only applies when degrees are equal.",
        "zh": "分子次数更高，商无限增大：极限为 $\\infty$，没有水平渐近线（而是有一条斜渐近线）。首项系数之比只在次数相等时适用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The horizontal asymptote of $f(x) = \\frac{4x^2}{x^2 + 9}$ is the line $y = c$. Find $c$. Give an integer.",
        "zh": "$f(x) = \\frac{4x^2}{x^2 + 9}$ 的水平渐近线为直线 $y = c$。求 $c$。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Numerator and denominator both have degree $2$, so $c$ is the ratio of leading coefficients, $\\frac{4}{1} = 4$. The same value holds as $x \\to \\infty$ and $x \\to -\\infty$.",
        "zh": "分子分母都是二次，$c$ 等于首项系数之比 $\\frac{4}{1} = 4$。当 $x \\to \\infty$ 与 $x \\to -\\infty$ 时相同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{e^x}{x^5}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{e^x}{x^5}$。"
      },
      "choices": [
        "$0$",
        "$1$",
        "$5$",
        "$\\infty$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Exponential growth beats every power of $x$, so $e^x$ eventually dwarfs $x^5$ and the ratio grows to $\\infty$. Answering $0$ reverses the growth-rate hierarchy — that would be $\\frac{x^5}{e^x}$.",
        "zh": "指数增长胜过任何幂函数，故 $e^x$ 最终远超 $x^5$，比值趋于 $\\infty$。答 $0$ 是把增长速率排序弄反了——那是 $\\frac{x^5}{e^x}$ 的答案。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many vertical asymptotes does $f(x) = \\frac{x - 1}{x^2 - x}$ have? Give an integer.",
        "zh": "$f(x) = \\frac{x - 1}{x^2 - x}$ 有几条垂直渐近线？请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "Factor: $\\frac{x-1}{x(x-1)} = \\frac{1}{x}$ for $x \\neq 1$. The factor $x - 1$ cancels (a hole at $x = 1$), leaving only $x = 0$ as a vertical asymptote — $1$ in total.",
        "zh": "因式分解：当 $x \\neq 1$ 时 $\\frac{x-1}{x(x-1)} = \\frac{1}{x}$。因子 $x - 1$ 被约去（在 $x = 1$ 处是洞），只剩 $x = 0$ 为垂直渐近线——共 $1$ 条。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{\\sin x}{x}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{\\sin x}{x}$。"
      },
      "choices": [
        "The limit does not exist 极限不存在",
        "$1$",
        "$0$",
        "$\\infty$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $-\\frac{1}{x} \\leq \\frac{\\sin x}{x} \\leq \\frac{1}{x}$ and both bounds tend to $0$, the squeeze theorem gives $0$. The bounded oscillation of $\\sin x$ is divided by a growing $x$, so it cannot fail to exist.",
        "zh": "因为 $-\\frac{1}{x} \\leq \\frac{\\sin x}{x} \\leq \\frac{1}{x}$ 且两边都趋于 $0$，由夹逼定理极限为 $0$。$\\sin x$ 的有界振荡被不断增大的 $x$ 除，因此极限存在。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{x^3}{e^x}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{x^3}{e^x}$。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "-0"
      ],
      "explanation": {
        "en": "Exponential growth beats polynomial growth: $e^x$ eventually dominates $x^3$, so the ratio tends to $0$.",
        "zh": "指数增长胜过多项式增长：$e^x$ 最终远超 $x^3$，故比值趋于 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement describes a horizontal asymptote of the graph of $f$?",
        "zh": "下列哪个说法描述了 $f$ 图象的一条水平渐近线？"
      },
      "choices": [
        "$\\lim_{x \\to \\infty} f(x) = 3$",
        "$\\lim_{x \\to 2} f(x) = \\infty$",
        "$\\lim_{x \\to 2^+} f(x) = -\\infty$",
        "$f(2)$ is undefined $f(2)$ 无定义"
      ],
      "answer": 0,
      "explanation": {
        "en": "A finite limit at infinity, $\\lim_{x \\to \\infty} f(x) = 3$, means the graph settles toward $y = 3$ — a horizontal asymptote. The infinite limits near $x = 2$ describe vertical asymptotes, a different phenomenon.",
        "zh": "无穷远处的有限极限 $\\lim_{x \\to \\infty} f(x) = 3$ 表示图象趋于 $y = 3$——即水平渐近线。$x = 2$ 附近的无穷极限描述的是垂直渐近线，是不同的现象。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The horizontal asymptote of $f(x) = \\frac{7x^2 - 3x}{x^2 + 5}$ is the line $y = c$. Find $c$. Give an integer.",
        "zh": "$f(x) = \\frac{7x^2 - 3x}{x^2 + 5}$ 的水平渐近线为直线 $y = c$。求 $c$。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Both numerator and denominator have degree $2$, so $c$ is the ratio of leading coefficients, $\\frac{7}{1} = 7$.",
        "zh": "分子分母都是二次，$c$ 等于首项系数之比 $\\frac{7}{1} = 7$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many horizontal asymptotes does $f(x) = \\frac{3x}{\\sqrt{4x^2 + 1}}$ have?",
        "zh": "$f(x) = \\frac{3x}{\\sqrt{4x^2 + 1}}$ 有几条水平渐近线？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$4$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "As $x \\to \\infty$, $\\frac{3x}{2|x|} = \\frac{3}{2}$; as $x \\to -\\infty$, $|x| = -x$ flips the sign to $-\\frac{3}{2}$. Two different finite limits mean two horizontal asymptotes, $y = \\frac{3}{2}$ and $y = -\\frac{3}{2}$.",
        "zh": "当 $x \\to \\infty$ 时 $\\frac{3x}{2|x|} = \\frac{3}{2}$；当 $x \\to -\\infty$ 时 $|x| = -x$ 使符号翻转为 $-\\frac{3}{2}$。两个不同的有限极限对应两条水平渐近线 $y = \\frac{3}{2}$ 和 $y = -\\frac{3}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to -\\infty} \\frac{5x}{\\sqrt{x^2 + 1}}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to -\\infty} \\frac{5x}{\\sqrt{x^2 + 1}}$。请填一个整数。"
      },
      "answer": "-5",
      "accept": [
        "-5.0"
      ],
      "explanation": {
        "en": "Divide by $\\sqrt{x^2} = |x|$. For $x < 0$, $|x| = -x$, so $\\frac{5x}{-x\\sqrt{1 + 1/x^2}} \\to \\frac{5x}{-x} = -5$.",
        "zh": "除以 $\\sqrt{x^2} = |x|$。当 $x < 0$ 时 $|x| = -x$，故 $\\frac{5x}{-x\\sqrt{1 + 1/x^2}} \\to \\frac{5x}{-x} = -5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{2x^2 - 8}{x^2 - 3x + 2}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{2x^2 - 8}{x^2 - 3x + 2}$。"
      },
      "choices": [
        "$2$",
        "$1$",
        "$0$",
        "$\\infty$"
      ],
      "answer": 0,
      "explanation": {
        "en": "End behavior depends only on the leading terms. Both have degree $2$, so the limit is $\\frac{2}{1} = 2$. Any holes from cancelled factors do not affect the limit at infinity.",
        "zh": "端点行为只取决于最高次项。两者都是二次，故极限为 $\\frac{2}{1} = 2$。可约因子产生的洞不影响无穷远处的极限。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{5x^2 + 1}{2x^2 - x}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{5x^2 + 1}{2x^2 - x}$。"
      },
      "choices": [
        "$0$",
        "$\\frac{5}{2}$",
        "$\\frac{1}{2}$",
        "$\\infty$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The degrees are equal, so the limit is the ratio of leading coefficients, $\\frac{5}{2}$. The lower-order terms $+1$ and $-x$ vanish relative to the $x^2$ terms as $x \\to \\infty$.",
        "zh": "分子分母次数相等，极限等于首项系数之比 $\\frac{5}{2}$。当 $x \\to \\infty$ 时，低次项 $+1$ 与 $-x$ 相对于 $x^2$ 项可以忽略。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many horizontal asymptotes does $f(x) = \\frac{x}{\\sqrt{9x^2 + 1}}$ have? Give an integer.",
        "zh": "$f(x) = \\frac{x}{\\sqrt{9x^2 + 1}}$ 有几条水平渐近线？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "As $x \\to \\infty$, $\\frac{x}{3|x|} = \\frac{1}{3}$; as $x \\to -\\infty$, the sign flips to $-\\frac{1}{3}$. Two different finite limits give two horizontal asymptotes.",
        "zh": "当 $x \\to \\infty$ 时 $\\frac{x}{3|x|} = \\frac{1}{3}$；当 $x \\to -\\infty$ 时符号翻转为 $-\\frac{1}{3}$。两个不同的有限极限给出两条水平渐近线。"
      }
    }
  ],
  "unit-2-differentiation-definition/definition-of-the-derivative": [
    {
      "type": "mc",
      "question": {
        "en": "The limit $\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h}$ equals",
        "zh": "极限 $\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h}$ 等于"
      },
      "choices": [
        "$6$",
        "$9$",
        "$0$",
        "$3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "This is the limit definition of $f'(3)$ for $f(x) = x^2$, since $9 = 3^2 = f(3)$. So the value is $f'(3) = 2(3) = 6$. Treating $9$ as the answer confuses the function value $f(3)$ with the derivative.",
        "zh": "这是 $f(x) = x^2$ 在 $x = 3$ 处导数的极限定义，因为 $9 = 3^2 = f(3)$。所以极限值为 $f'(3) = 2(3) = 6$。把 $9$ 当成答案是混淆了函数值 $f(3)$ 与导数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The average rate of change of $f(x) = x^3$ on the interval $[0, 2]$ is",
        "zh": "$f(x) = x^3$ 在区间 $[0, 2]$ 上的平均变化率是"
      },
      "choices": [
        "$8$",
        "$4$",
        "$2$",
        "$12$"
      ],
      "answer": 1,
      "explanation": {
        "en": "AROC $= \\frac{f(2) - f(0)}{2 - 0} = \\frac{8 - 0}{2} = 4$. This is a secant slope, not the instantaneous rate $f'(2) = 12$; reporting $12$ confuses the two.",
        "zh": "平均变化率 $= \\frac{f(2) - f(0)}{2 - 0} = \\frac{8 - 0}{2} = 4$。这是割线斜率，而不是瞬时变化率 $f'(2) = 12$；答成 $12$ 就是把两者混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The limit $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$ equals",
        "zh": "极限 $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$ 等于"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$4$",
        "$\\frac{1}{4}$",
        "$2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "This is the alternate-form definition of $f'(4)$ for $f(x) = \\sqrt{x}$, since $\\sqrt{4} = 2 = f(4)$. Because $f'(x) = \\frac{1}{2\\sqrt{x}}$, the value is $f'(4) = \\frac{1}{2 \\cdot 2} = \\frac{1}{4}$. Reading it as $2 = f(4)$ mistakes the function value for the derivative.",
        "zh": "这是 $f(x) = \\sqrt{x}$ 在 $x = 4$ 处导数的另一种定义形式，因为 $\\sqrt{4} = 2 = f(4)$。由于 $f'(x) = \\frac{1}{2\\sqrt{x}}$，值为 $f'(4) = \\frac{1}{2 \\cdot 2} = \\frac{1}{4}$。把它读成 $2 = f(4)$ 是把函数值当成了导数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these functions is continuous but NOT differentiable at $x = 0$?",
        "zh": "下列哪个函数在 $x = 0$ 处连续但不可导？"
      },
      "choices": [
        "$x^2$",
        "$x^3$",
        "$3x - 1$",
        "$|x|$"
      ],
      "answer": 3,
      "explanation": {
        "en": "All four are continuous at $x = 0$, but only $|x|$ has a corner there: its left slope is $-1$ and its right slope is $+1$, so the derivative does not exist. Polynomials are smooth everywhere, so they are differentiable.",
        "zh": "四个函数在 $x = 0$ 处都连续，但只有 $|x|$ 在那里有折角：左斜率为 $-1$，右斜率为 $+1$，故导数不存在。多项式处处光滑，所以都可导。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The limit $\\lim_{h \\to 0} \\frac{\\sin\\left(\\frac{\\pi}{6} + h\\right) - \\sin\\frac{\\pi}{6}}{h}$ equals",
        "zh": "极限 $\\lim_{h \\to 0} \\frac{\\sin\\left(\\frac{\\pi}{6} + h\\right) - \\sin\\frac{\\pi}{6}}{h}$ 等于"
      },
      "choices": [
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{1}{2}$",
        "$-\\frac{\\sqrt{3}}{2}$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Recognize this as $f'\\left(\\frac{\\pi}{6}\\right)$ for $f(x) = \\sin x$, whose derivative is $\\cos x$. So the value is $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$. Answering $\\frac{1}{2}$ evaluates $\\sin\\frac{\\pi}{6}$ instead of its derivative.",
        "zh": "把它识别为 $f(x) = \\sin x$ 在 $\\frac{\\pi}{6}$ 处的导数 $f'\\left(\\frac{\\pi}{6}\\right)$，其导数为 $\\cos x$。所以值为 $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$。答成 $\\frac{1}{2}$ 是算了 $\\sin\\frac{\\pi}{6}$ 而不是它的导数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the equation of the line tangent to $f(x) = x^2 - x$ at $x = 1$?",
        "zh": "$f(x) = x^2 - x$ 在 $x = 1$ 处的切线方程是什么？"
      },
      "choices": [
        "$y = x + 1$",
        "$y = x - 1$",
        "$y = 2x - 1$",
        "$y = x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Here $f(1) = 0$ and $f'(x) = 2x - 1$, so $f'(1) = 1$. The tangent line is $y = 0 + 1(x - 1) = x - 1$. Using $2x - 1$ as the line mistakes the derivative formula for the tangent equation.",
        "zh": "这里 $f(1) = 0$，$f'(x) = 2x - 1$，故 $f'(1) = 1$。切线为 $y = 0 + 1(x - 1) = x - 1$。把 $2x - 1$ 当成切线是把导数公式误当成了切线方程。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At $x = 0$, the function $f(x) = x^{2/3}$ has",
        "zh": "在 $x = 0$ 处，函数 $f(x) = x^{2/3}$ 具有"
      },
      "choices": [
        "a corner",
        "a jump discontinuity",
        "a cusp",
        "a horizontal tangent"
      ],
      "answer": 2,
      "explanation": {
        "en": "$f'(x) = \\frac{2}{3}x^{-1/3}$ tends to $-\\infty$ as $x \\to 0^-$ and $+\\infty$ as $x \\to 0^+$: the two-sided slopes blow up in opposite directions, which is a cusp, so $f'(0)$ does not exist. Expecting a horizontal tangent assumes the smooth-looking bottom has slope $0$.",
        "zh": "$f'(x) = \\frac{2}{3}x^{-1/3}$ 在 $x \\to 0^-$ 时趋于 $-\\infty$，在 $x \\to 0^+$ 时趋于 $+\\infty$：两侧斜率朝相反方向发散，这就是尖点，所以 $f'(0)$ 不存在。期望水平切线是误以为看着光滑的底部斜率为 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f$ is differentiable at $x = a$, which statement MUST be true?",
        "zh": "若 $f$ 在 $x = a$ 处可导，下列哪个说法一定成立？"
      },
      "choices": [
        "$f'(a) = 0$",
        "$f$ has a corner at $a$",
        "$f(a) = 0$",
        "$f$ is continuous at $a$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Differentiability is stronger than continuity: differentiable at $a$ guarantees continuous at $a$. The derivative need not be zero, the point need not lie on the axis, and a corner would actually destroy differentiability.",
        "zh": "可导比连续更强：在 $a$ 处可导就保证在 $a$ 处连续。导数不一定为零，函数值也不一定为零，而折角反而会破坏可导性。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = x^2$, which limit equals $f'(2)$?",
        "zh": "对 $f(x) = x^2$，下列哪个极限等于 $f'(2)$？"
      },
      "choices": [
        "$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
        "$\\lim_{x \\to 2} \\frac{x^2 - 4}{x + 2}$",
        "$\\lim_{x \\to 2} \\frac{x^2 + 4}{x - 2}$",
        "$\\lim_{x \\to 2} \\frac{x^2 - 4}{2 - x}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The alternate form is $f'(2) = \\lim_{x \\to 2} \\frac{f(x) - f(2)}{x - 2} = \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$, with subtraction in both numerator and denominator. Dividing by $x + 2$, adding $f(2)$, or flipping to $2 - x$ each corrupts one piece and changes the value.",
        "zh": "另一种形式是 $f'(2) = \\lim_{x \\to 2} \\frac{f(x) - f(2)}{x - 2} = \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$，分子分母都是相减。除以 $x + 2$、把 $f(2)$ 写成加、或改成 $2 - x$，都会破坏其中一处并改变数值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A function $f$ has a jump discontinuity at $x = 5$. At that point $f$ is",
        "zh": "函数 $f$ 在 $x = 5$ 处有跳跃间断。在该点，$f$"
      },
      "choices": [
        "differentiable with $f'(5) = 0$",
        "not differentiable",
        "differentiable with a vertical tangent",
        "differentiable with a corner"
      ],
      "answer": 1,
      "explanation": {
        "en": "The contrapositive of \"differentiable implies continuous\" says a function that is not continuous cannot be differentiable. A jump breaks continuity at $x = 5$, so $f'(5)$ automatically does not exist — no further checking is needed.",
        "zh": "\"可导必连续\"的逆否命题是：不连续的函数不可能可导。跳跃在 $x = 5$ 处破坏了连续性，所以 $f'(5)$ 自动不存在——无需再检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A table gives $f(2.9) = 5.02$ and $f(3.1) = 5.66$ for a differentiable function $f$. The best estimate of $f'(3)$ is",
        "zh": "表格给出可导函数 $f$ 的值：$f(2.9) = 5.02$，$f(3.1) = 5.66$。$f'(3)$ 的最佳估计是"
      },
      "choices": [
        "$6.4$",
        "$0.64$",
        "$3.2$",
        "$1.6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Use the difference quotient across the surrounding points: $\\frac{5.66 - 5.02}{3.1 - 2.9} = \\frac{0.64}{0.2} = 3.2$. Dividing by $0.1$ instead of the full width $0.2$ gives the wrong estimate $6.4$.",
        "zh": "用夹住 $x = 3$ 的两点作差商：$\\frac{5.66 - 5.02}{3.1 - 2.9} = \\frac{0.64}{0.2} = 3.2$。若除以 $0.1$ 而不是整个宽度 $0.2$，就会得到错误估计 $6.4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The limit $\\lim_{h \\to 0} \\frac{e^h - 1}{h}$ equals",
        "zh": "极限 $\\lim_{h \\to 0} \\frac{e^h - 1}{h}$ 等于"
      },
      "choices": [
        "$0$",
        "$e$",
        "$\\infty$",
        "$1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "This is $f'(0)$ for $f(x) = e^x$, since $e^0 = 1 = f(0)$. Because $f'(x) = e^x$, the value is $f'(0) = e^0 = 1$. Reporting $e$ evaluates $f'(1)$ instead of $f'(0)$.",
        "zh": "这是 $f(x) = e^x$ 在 $x = 0$ 处的导数 $f'(0)$，因为 $e^0 = 1 = f(0)$。由于 $f'(x) = e^x$，值为 $f'(0) = e^0 = 1$。答成 $e$ 是算了 $f'(1)$ 而不是 $f'(0)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the average rate of change of $f(x) = x^2 + 1$ on the interval $[2, 5]$. Give an integer.",
        "zh": "求 $f(x) = x^2 + 1$ 在区间 $[2, 5]$ 上的平均变化率。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "AROC $= \\frac{f(5) - f(2)}{5 - 2} = \\frac{26 - 5}{3} = \\frac{21}{3} = 7$. The constant $+1$ cancels in the subtraction, so only the $x^2$ change matters.",
        "zh": "平均变化率 $= \\frac{f(5) - f(2)}{5 - 2} = \\frac{26 - 5}{3} = \\frac{21}{3} = 7$。相减时常数 $+1$ 抵消，所以只有 $x^2$ 的变化起作用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{h \\to 0} \\frac{(4+h)^2 - 16}{h}$. Give an integer.",
        "zh": "求 $\\lim_{h \\to 0} \\frac{(4+h)^2 - 16}{h}$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "This is $f'(4)$ for $f(x) = x^2$, since $16 = 4^2$. So the value is $f'(4) = 2(4) = 8$. Alternatively, expand to get $\\frac{8h + h^2}{h} = 8 + h \\to 8$.",
        "zh": "这是 $f(x) = x^2$ 在 $x = 4$ 处的导数 $f'(4)$，因为 $16 = 4^2$。所以值为 $f'(4) = 2(4) = 8$。或展开得 $\\frac{8h + h^2}{h} = 8 + h \\to 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the limit definition to find $f'(-1)$ for $f(x) = x^2 - 2x$. Give an integer.",
        "zh": "用极限定义求 $f(x) = x^2 - 2x$ 在 $x = -1$ 处的导数 $f'(-1)$。请填一个整数。"
      },
      "answer": "-4",
      "accept": [
        "-4.0"
      ],
      "explanation": {
        "en": "The limit definition gives $f'(x) = 2x - 2$. At $x = -1$: $f'(-1) = 2(-1) - 2 = -4$. Forgetting the $-2$ from the linear term is the usual slip.",
        "zh": "极限定义得 $f'(x) = 2x - 2$。代入 $x = -1$：$f'(-1) = 2(-1) - 2 = -4$。漏掉一次项带来的 $-2$ 是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A differentiable function satisfies $f(0.8) = 3.1$ and $f(1.2) = 3.9$. Estimate $f'(1)$. Give an integer.",
        "zh": "可导函数满足 $f(0.8) = 3.1$，$f(1.2) = 3.9$。估计 $f'(1)$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Use the symmetric difference quotient: $\\frac{3.9 - 3.1}{1.2 - 0.8} = \\frac{0.8}{0.4} = 2$. The denominator is the full interval width $0.4$, not $0.2$.",
        "zh": "用对称差商：$\\frac{3.9 - 3.1}{1.2 - 0.8} = \\frac{0.8}{0.4} = 2$。分母是整个区间宽度 $0.4$，而不是 $0.2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = \\sqrt{x}$, find $f'(9)$. Give your answer as a fraction a/b.",
        "zh": "设 $f(x) = \\sqrt{x}$，求 $f'(9)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/6",
      "accept": [
        "0.1667",
        "1/6.0"
      ],
      "explanation": {
        "en": "Rewrite $f(x) = x^{1/2}$, so $f'(x) = \\frac{1}{2\\sqrt{x}}$. At $x = 9$: $\\frac{1}{2 \\cdot 3} = \\frac{1}{6}$. The square root of $9$ is $3$, not $9$.",
        "zh": "改写 $f(x) = x^{1/2}$，故 $f'(x) = \\frac{1}{2\\sqrt{x}}$。代入 $x = 9$：$\\frac{1}{2 \\cdot 3} = \\frac{1}{6}$。$9$ 的平方根是 $3$，不是 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has position $s(t) = t^2$ meters at time $t$ seconds. Find its average velocity on $[1, 3]$, in m/s. Give an integer.",
        "zh": "质点在时刻 $t$ 秒的位置为 $s(t) = t^2$ 米。求它在 $[1, 3]$ 上的平均速度，单位米/秒。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Average velocity $= \\frac{s(3) - s(1)}{3 - 1} = \\frac{9 - 1}{2} = 4$ m/s. This secant slope differs from the instantaneous velocity $s'(t) = 2t$ at either endpoint.",
        "zh": "平均速度 $= \\frac{s(3) - s(1)}{3 - 1} = \\frac{9 - 1}{2} = 4$ 米/秒。这个割线斜率与端点处的瞬时速度 $s'(t) = 2t$ 不同。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3 \\to 6$. Equivalently this is $f'(3)$ for $f(x) = x^2$, which is $2(3) = 6$.",
        "zh": "因式分解：$\\frac{(x-3)(x+3)}{x-3} = x + 3 \\to 6$。等价地，这是 $f(x) = x^2$ 在 $x = 3$ 处的导数 $2(3) = 6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The tangent line to $f(x) = x^2 - 4x$ at $x = 3$ can be written $y = mx + b$. Find $b$ (the y-intercept). Give an integer.",
        "zh": "$f(x) = x^2 - 4x$ 在 $x = 3$ 处的切线可写成 $y = mx + b$。求 $b$（y 轴截距）。请填一个整数。"
      },
      "answer": "-9",
      "accept": [
        "-9.0"
      ],
      "explanation": {
        "en": "Here $f(3) = 9 - 12 = -3$ and $f'(x) = 2x - 4$, so $f'(3) = 2$. The tangent is $y = -3 + 2(x - 3) = 2x - 9$, giving $b = -9$.",
        "zh": "这里 $f(3) = 9 - 12 = -3$，$f'(x) = 2x - 4$，故 $f'(3) = 2$。切线为 $y = -3 + 2(x - 3) = 2x - 9$，所以 $b = -9$。"
      }
    }
  ],
  "unit-2-differentiation-definition/basic-differentiation-rules": [
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( x^4 - 3x^2 + 7 \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( x^4 - 3x^2 + 7 \\right)$ 等于多少？"
      },
      "choices": [
        "$4x^3 - 6x$",
        "$4x^3 - 6x + 7$",
        "$4x^3 - 3x$",
        "$x^3 - 6x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Differentiate term by term: $4x^3 - 6x + 0$. The constant $7$ has derivative $0$, so keeping it in the answer is the common mistake.",
        "zh": "逐项求导：$4x^3 - 6x + 0$。常数 $7$ 的导数为 $0$，所以把它留在答案里是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( x \\cos x \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( x \\cos x \\right)$ 等于多少？"
      },
      "choices": [
        "$-\\sin x$",
        "$\\cos x - x \\sin x$",
        "$\\cos x + x \\sin x$",
        "$-x \\sin x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Product rule: $(1)\\cos x + x(-\\sin x) = \\cos x - x \\sin x$. The sign comes from $\\frac{d}{dx}\\cos x = -\\sin x$; using $+x\\sin x$ drops that minus sign.",
        "zh": "乘积法则：$(1)\\cos x + x(-\\sin x) = \\cos x - x \\sin x$。负号来自 $\\frac{d}{dx}\\cos x = -\\sin x$；写成 $+x\\sin x$ 就丢了这个负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( x^3 e^x \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( x^3 e^x \\right)$ 等于多少？"
      },
      "choices": [
        "$3x^2 e^x$",
        "$x^3 e^x$",
        "$x^2 e^x (3 + x)$",
        "$3x^2 e^x - x^3 e^x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Product rule: $3x^2 e^x + x^3 e^x = x^2 e^x(3 + x)$. Multiplying the two derivatives instead (giving $3x^2 e^x$) ignores the product rule entirely.",
        "zh": "乘积法则：$3x^2 e^x + x^3 e^x = x^2 e^x(3 + x)$。若只把两个导数相乘（得 $3x^2 e^x$），就完全忽略了乘积法则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\frac{\\sin x}{x} \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\frac{\\sin x}{x} \\right)$ 等于多少？"
      },
      "choices": [
        "$\\cos x$",
        "$\\frac{\\cos x}{x}$",
        "$\\frac{x \\cos x + \\sin x}{x^2}$",
        "$\\frac{x \\cos x - \\sin x}{x^2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Quotient rule: $\\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x \\cos x - \\sin x}{x^2}$. Reversing the subtraction order gives $x\\cos x + \\sin x$, the most common quotient-rule slip.",
        "zh": "商法则：$\\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x \\cos x - \\sin x}{x^2}$。把相减顺序颠倒会得到 $x\\cos x + \\sin x$，这是商法则最常见的失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( 3\\ln x + 2e^x \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( 3\\ln x + 2e^x \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{3}{x} + 2e^x$",
        "$\\frac{3}{x} + 2xe^{x-1}$",
        "$3x + 2e^x$",
        "$\\frac{1}{x} + 2e^x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{d}{dx}\\ln x = \\frac{1}{x}$ so the first term is $\\frac{3}{x}$, and $\\frac{d}{dx}e^x = e^x$ so the second is $2e^x$. Applying the power rule to $e^x$ (as $2xe^{x-1}$) is wrong — the exponent is the variable, not the base.",
        "zh": "$\\frac{d}{dx}\\ln x = \\frac{1}{x}$，所以第一项是 $\\frac{3}{x}$；$\\frac{d}{dx}e^x = e^x$，所以第二项是 $2e^x$。对 $e^x$ 用幂法则（写成 $2xe^{x-1}$）是错的——指数是变量，而不是底数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The value of $\\frac{d}{dx}(\\cos x)$ at $x = \\frac{\\pi}{3}$ is",
        "zh": "$\\frac{d}{dx}(\\cos x)$ 在 $x = \\frac{\\pi}{3}$ 处的值为"
      },
      "choices": [
        "$-\\frac{1}{2}$",
        "$-\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$\\frac{1}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $\\frac{d}{dx}\\cos x = -\\sin x$, the value is $-\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$. Dropping the minus sign gives $\\frac{\\sqrt{3}}{2}$, and using $-\\cos$ gives $-\\frac{1}{2}$ — both frequent unit-circle slips.",
        "zh": "因为 $\\frac{d}{dx}\\cos x = -\\sin x$，值为 $-\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$。丢掉负号得 $\\frac{\\sqrt{3}}{2}$，误用 $-\\cos$ 得 $-\\frac{1}{2}$——都是常见的单位圆失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x) = x^4$, then the second derivative $f''(x) =$",
        "zh": "若 $f(x) = x^4$，则二阶导数 $f''(x) =$"
      },
      "choices": [
        "$4x^3$",
        "$24x$",
        "$12x^2$",
        "$12x^3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "First derivative $f'(x) = 4x^3$; differentiating again gives $f''(x) = 12x^2$. Stopping after one differentiation and reporting $4x^3$ is the standard second-derivative error.",
        "zh": "一阶导数 $f'(x) = 4x^3$；再求一次导得 $f''(x) = 12x^2$。只求一次导就答 $4x^3$ 是二阶导数的典型错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\frac{2x^2 - x}{x} \\right)$? (Hint: rewrite first.)",
        "zh": "$\\frac{d}{dx}\\left( \\frac{2x^2 - x}{x} \\right)$ 等于多少？（提示：先改写。）"
      },
      "choices": [
        "$4x - 1$",
        "$\\frac{4x - 1}{x}$",
        "$0$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Rewrite as $2x - 1$, then differentiate to get $2$. Applying the quotient rule without simplifying, and forgetting the constant $-1$ has derivative $0$, leads to the wrong answers.",
        "zh": "改写为 $2x - 1$ 再求导得 $2$。不化简就用商法则、或忘记常数 $-1$ 的导数为 $0$，都会导致错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has position $s(t) = t^3 - 3t^2$. What is its velocity at $t = 1$?",
        "zh": "质点的位置为 $s(t) = t^3 - 3t^2$。它在 $t = 1$ 时的速度是多少？"
      },
      "choices": [
        "$-3$",
        "$3$",
        "$0$",
        "$-6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Velocity is $v(t) = s'(t) = 3t^2 - 6t$, so $v(1) = 3 - 6 = -3$. Using the acceleration $s''(t) = 6t - 6$ (which is $0$ at $t=1$) answers the wrong quantity.",
        "zh": "速度是 $v(t) = s'(t) = 3t^2 - 6t$，故 $v(1) = 3 - 6 = -3$。用加速度 $s''(t) = 6t - 6$（在 $t=1$ 时为 $0$）就答错了量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( e^x \\sin x \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( e^x \\sin x \\right)$ 等于多少？"
      },
      "choices": [
        "$e^x \\cos x$",
        "$e^x (\\sin x + \\cos x)$",
        "$e^x (\\cos x - \\sin x)$",
        "$e^x \\sin x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Product rule: $e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x)$. Multiplying the derivatives alone (giving $e^x \\cos x$) skips one of the two product-rule terms.",
        "zh": "乘积法则：$e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x)$。只把导数相乘（得 $e^x \\cos x$）就漏掉了乘积法则的一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\frac{5}{x^2} \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\frac{5}{x^2} \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{10}{x^3}$",
        "$-\\frac{5}{x^3}$",
        "$-\\frac{10}{x^3}$",
        "$-\\frac{10}{x}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rewrite as $5x^{-2}$; the power rule gives $-10x^{-3} = -\\frac{10}{x^3}$. Missing the minus sign from the negative exponent gives $\\frac{10}{x^3}$.",
        "zh": "改写为 $5x^{-2}$；幂法则得 $-10x^{-3} = -\\frac{10}{x^3}$。漏掉负指数带来的负号会得 $\\frac{10}{x^3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $u$ and $v$ be differentiable with $u(2) = 3$, $u'(2) = 1$, $v(2) = -1$, $v'(2) = 4$. Find $(uv)'(2)$.",
        "zh": "设 $u$、$v$ 可导，且 $u(2) = 3$，$u'(2) = 1$，$v(2) = -1$，$v'(2) = 4$。求 $(uv)'(2)$。"
      },
      "choices": [
        "$4$",
        "$-11$",
        "$12$",
        "$11$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Product rule: $(uv)'(2) = u'(2)v(2) + u(2)v'(2) = (1)(-1) + (3)(4) = -1 + 12 = 11$. Multiplying only the derivatives $u'(2)v'(2) = 4$ ignores the rule.",
        "zh": "乘积法则：$(uv)'(2) = u'(2)v(2) + u(2)v'(2) = (1)(-1) + (3)(4) = -1 + 12 = 11$。只把导数相乘 $u'(2)v'(2) = 4$ 就忽略了法则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^5$. Find $f''(1)$. Give an integer.",
        "zh": "设 $f(x) = x^5$，求 $f''(1)$。请填一个整数。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "+20"
      ],
      "explanation": {
        "en": "First derivative $f'(x) = 5x^4$; second derivative $f''(x) = 20x^3$, so $f''(1) = 20$. Stopping at $f'(1) = 5$ is the common one-step error.",
        "zh": "一阶导数 $f'(x) = 5x^4$；二阶导数 $f''(x) = 20x^3$，故 $f''(1) = 20$。停在 $f'(1) = 5$ 是常见的少求一步的错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = 2x^3 + x$. Find $f'(2)$. Give an integer.",
        "zh": "设 $f(x) = 2x^3 + x$，求 $f'(2)$。请填一个整数。"
      },
      "answer": "25",
      "accept": [
        "25.0",
        "+25"
      ],
      "explanation": {
        "en": "$f'(x) = 6x^2 + 1$, so $f'(2) = 6(4) + 1 = 25$. The $+1$ comes from differentiating the linear term $x$.",
        "zh": "$f'(x) = 6x^2 + 1$，故 $f'(2) = 6(4) + 1 = 25$。$+1$ 来自对一次项 $x$ 求导。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^2 e^x$. Find $f'(0)$. Give an integer.",
        "zh": "设 $f(x) = x^2 e^x$，求 $f'(0)$。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "Product rule: $f'(x) = 2x e^x + x^2 e^x$. At $x = 0$ both terms have a factor of $x$, so $f'(0) = 0 + 0 = 0$.",
        "zh": "乘积法则：$f'(x) = 2x e^x + x^2 e^x$。在 $x = 0$ 处两项都含因子 $x$，所以 $f'(0) = 0 + 0 = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x \\ln x$. Find $f'(e)$. Give an integer.",
        "zh": "设 $f(x) = x \\ln x$，求 $f'(e)$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Product rule: $f'(x) = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$. At $x = e$: $\\ln e = 1$, so $f'(e) = 1 + 1 = 2$.",
        "zh": "乘积法则：$f'(x) = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$。代入 $x = e$：$\\ln e = 1$，故 $f'(e) = 1 + 1 = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\frac{x - 1}{x + 1}$. Find $f'(1)$. Give your answer as a fraction a/b.",
        "zh": "设 $f(x) = \\frac{x - 1}{x + 1}$，求 $f'(1)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/2",
      "accept": [
        "0.5"
      ],
      "explanation": {
        "en": "Quotient rule: $f'(x) = \\frac{(1)(x+1) - (x-1)(1)}{(x+1)^2} = \\frac{2}{(x+1)^2}$. At $x = 1$: $\\frac{2}{4} = \\frac{1}{2}$.",
        "zh": "商法则：$f'(x) = \\frac{(1)(x+1) - (x-1)(1)}{(x+1)^2} = \\frac{2}{(x+1)^2}$。代入 $x = 1$：$\\frac{2}{4} = \\frac{1}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has position $s(t) = t^3$ meters. Find its acceleration at $t = 2$, in m/s$^2$. Give an integer.",
        "zh": "质点的位置为 $s(t) = t^3$ 米。求它在 $t = 2$ 时的加速度，单位米/秒$^2$。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "Velocity $v(t) = 3t^2$, acceleration $a(t) = v'(t) = 6t$, so $a(2) = 12$ m/s$^2$. Acceleration is the second derivative of position.",
        "zh": "速度 $v(t) = 3t^2$，加速度 $a(t) = v'(t) = 6t$，故 $a(2) = 12$ 米/秒$^2$。加速度是位置的二阶导数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\ln x$. Find $f'(4)$. Give your answer as a fraction a/b.",
        "zh": "设 $f(x) = \\ln x$，求 $f'(4)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/4",
      "accept": [
        "0.25"
      ],
      "explanation": {
        "en": "$\\frac{d}{dx}\\ln x = \\frac{1}{x}$, so $f'(4) = \\frac{1}{4}$. There is no chain-rule factor here because the inside is just $x$.",
        "zh": "$\\frac{d}{dx}\\ln x = \\frac{1}{x}$，故 $f'(4) = \\frac{1}{4}$。这里没有链式法则因子，因为内层就是 $x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^4 - 2x^2$. Find $f''(1)$. Give an integer.",
        "zh": "设 $f(x) = x^4 - 2x^2$，求 $f''(1)$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "First derivative $f'(x) = 4x^3 - 4x$; second derivative $f''(x) = 12x^2 - 4$, so $f''(1) = 12 - 4 = 8$.",
        "zh": "一阶导数 $f'(x) = 4x^3 - 4x$；二阶导数 $f''(x) = 12x^2 - 4$，故 $f''(1) = 12 - 4 = 8$。"
      }
    }
  ],
  "unit-3-composite-implicit-inverse/derivative-rules-recap": [
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\cos(3x) \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\cos(3x) \\right)$ 等于多少？"
      },
      "choices": [
        "$-3\\sin(3x)$",
        "$3\\sin(3x)$",
        "$-\\sin(3x)$",
        "$-3\\cos(3x)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Chain rule: $\\frac{d}{dx}\\cos(u) = -\\sin(u) \\cdot u'$ with $u = 3x$, giving $-3\\sin(3x)$. Forgetting the inside derivative $3$ gives $-\\sin(3x)$.",
        "zh": "链式法则：$\\frac{d}{dx}\\cos(u) = -\\sin(u) \\cdot u'$，取 $u = 3x$，得 $-3\\sin(3x)$。漏掉内层导数 $3$ 会得 $-\\sin(3x)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( e^{2x} \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( e^{2x} \\right)$ 等于多少？"
      },
      "choices": [
        "$e^{2x}$",
        "$2e^{2x}$",
        "$2xe^{2x-1}$",
        "$e^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Chain rule: $\\frac{d}{dx}e^{u} = e^{u} \\cdot u'$ with $u = 2x$, giving $2e^{2x}$. The exponent is a variable, so the power rule (as $2xe^{2x-1}$) does not apply.",
        "zh": "链式法则：$\\frac{d}{dx}e^{u} = e^{u} \\cdot u'$，取 $u = 2x$，得 $2e^{2x}$。指数是变量，所以不能用幂法则（写成 $2xe^{2x-1}$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( (3x - 1)^4 \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( (3x - 1)^4 \\right)$ 等于多少？"
      },
      "choices": [
        "$4(3x - 1)^3$",
        "$3(3x - 1)^3$",
        "$12(3x - 1)^3$",
        "$12(3x - 1)^4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Chain rule: $4(3x-1)^3 \\cdot 3 = 12(3x-1)^3$. Omitting the inside derivative $3$ leaves $4(3x-1)^3$.",
        "zh": "链式法则：$4(3x-1)^3 \\cdot 3 = 12(3x-1)^3$。漏掉内层导数 $3$ 会剩下 $4(3x-1)^3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\tan(x^2) \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\tan(x^2) \\right)$ 等于多少？"
      },
      "choices": [
        "$\\sec^2(x^2)$",
        "$2x\\tan(x^2)$",
        "$\\sec^2(2x)$",
        "$2x\\sec^2(x^2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Chain rule: $\\frac{d}{dx}\\tan(u) = \\sec^2(u) \\cdot u'$ with $u = x^2$, giving $2x\\sec^2(x^2)$. Forgetting the factor $2x$ leaves $\\sec^2(x^2)$.",
        "zh": "链式法则：$\\frac{d}{dx}\\tan(u) = \\sec^2(u) \\cdot u'$，取 $u = x^2$，得 $2x\\sec^2(x^2)$。漏掉因子 $2x$ 会剩下 $\\sec^2(x^2)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\ln(5x) \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\ln(5x) \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{x}$",
        "$\\frac{5}{x}$",
        "$\\frac{1}{5x}$",
        "$5\\ln x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{d}{dx}\\ln(u) = \\frac{u'}{u}$ with $u = 5x$: $\\frac{5}{5x} = \\frac{1}{x}$. The $5$ cancels — equivalently $\\ln(5x) = \\ln 5 + \\ln x$, whose derivative is $\\frac{1}{x}$.",
        "zh": "$\\frac{d}{dx}\\ln(u) = \\frac{u'}{u}$，取 $u = 5x$：$\\frac{5}{5x} = \\frac{1}{x}$。$5$ 约去了——等价地 $\\ln(5x) = \\ln 5 + \\ln x$，其导数为 $\\frac{1}{x}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the circle $x^2 + y^2 = 25$, implicit differentiation gives $\\frac{dy}{dx} =$",
        "zh": "对圆 $x^2 + y^2 = 25$，隐函数求导给出 $\\frac{dy}{dx} =$"
      },
      "choices": [
        "$\\frac{x}{y}$",
        "$-\\frac{x}{y}$",
        "$-\\frac{y}{x}$",
        "$-\\frac{2x}{y}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Differentiate: $2x + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{y}$. The factor $2$ cancels; keeping it (as $-\\frac{2x}{y}$) forgets to divide it out.",
        "zh": "求导：$2x + 2y\\frac{dy}{dx} = 0$，故 $\\frac{dy}{dx} = -\\frac{x}{y}$。因子 $2$ 约去；保留它（写成 $-\\frac{2x}{y}$）是忘了消去。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\sin^2 x \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\sin^2 x \\right)$ 等于多少？"
      },
      "choices": [
        "$2\\sin x$",
        "$\\cos^2 x$",
        "$2\\sin x \\cos x$",
        "$-2\\sin x \\cos x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Write $\\sin^2 x = (\\sin x)^2$ and apply the chain rule: $2\\sin x \\cdot \\cos x$. Forgetting the inside derivative $\\cos x$ leaves $2\\sin x$.",
        "zh": "把 $\\sin^2 x$ 写成 $(\\sin x)^2$ 再用链式法则：$2\\sin x \\cdot \\cos x$。漏掉内层导数 $\\cos x$ 会剩下 $2\\sin x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\sqrt{x^2 + 1} \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\sqrt{x^2 + 1} \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{2\\sqrt{x^2 + 1}}$",
        "$2x\\sqrt{x^2 + 1}$",
        "$\\frac{2x}{\\sqrt{x^2 + 1}}$",
        "$\\frac{x}{\\sqrt{x^2 + 1}}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Chain rule on $(x^2+1)^{1/2}$: $\\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$. The inside derivative $2x$ cancels the $\\frac{1}{2}$; keeping both gives $\\frac{2x}{\\sqrt{x^2+1}}$.",
        "zh": "对 $(x^2+1)^{1/2}$ 用链式法则：$\\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$。内层导数 $2x$ 与 $\\frac{1}{2}$ 约掉；两者都保留会得 $\\frac{2x}{\\sqrt{x^2+1}}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( e^{x^2} \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( e^{x^2} \\right)$ 等于多少？"
      },
      "choices": [
        "$2xe^{x^2}$",
        "$e^{x^2}$",
        "$2xe^{2x}$",
        "$x^2 e^{x^2 - 1}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Chain rule: $\\frac{d}{dx}e^{u} = e^{u} \\cdot u'$ with $u = x^2$, giving $2xe^{x^2}$. Forgetting the inside derivative $2x$ leaves $e^{x^2}$.",
        "zh": "链式法则：$\\frac{d}{dx}e^{u} = e^{u} \\cdot u'$，取 $u = x^2$，得 $2xe^{x^2}$。漏掉内层导数 $2x$ 会剩下 $e^{x^2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $xy = 1$, then implicit differentiation gives $\\frac{dy}{dx} =$",
        "zh": "若 $xy = 1$，则隐函数求导给出 $\\frac{dy}{dx} =$"
      },
      "choices": [
        "$\\frac{y}{x}$",
        "$-\\frac{y}{x}$",
        "$-\\frac{1}{x}$",
        "$-x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Product rule on $xy$: $y + x\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{y}{x}$. Differentiating $xy$ as just $\\frac{dy}{dx}$ misses the product rule.",
        "zh": "对 $xy$ 用乘积法则：$y + x\\frac{dy}{dx} = 0$，故 $\\frac{dy}{dx} = -\\frac{y}{x}$。把 $xy$ 只求成 $\\frac{dy}{dx}$ 就漏了乘积法则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\ln(\\cos x) \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\ln(\\cos x) \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{\\cos x}$",
        "$\\tan x$",
        "$-\\tan x$",
        "$-\\sin x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\frac{d}{dx}\\ln(u) = \\frac{u'}{u}$ with $u = \\cos x$: $\\frac{-\\sin x}{\\cos x} = -\\tan x$. Forgetting the inside derivative $-\\sin x$ leaves $\\frac{1}{\\cos x}$.",
        "zh": "$\\frac{d}{dx}\\ln(u) = \\frac{u'}{u}$，取 $u = \\cos x$：$\\frac{-\\sin x}{\\cos x} = -\\tan x$。漏掉内层导数 $-\\sin x$ 会剩下 $\\frac{1}{\\cos x}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\arcsin x \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\arcsin x \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{1 + x^2}$",
        "$-\\frac{1}{\\sqrt{1 - x^2}}$",
        "$\\frac{1}{\\sqrt{1 + x^2}}$",
        "$\\frac{1}{\\sqrt{1 - x^2}}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The memorized derivative is $\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1 - x^2}}$. The $\\frac{1}{1+x^2}$ form belongs to arctan, and the minus sign belongs to arccos.",
        "zh": "熟记的导数是 $\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1 - x^2}}$。$\\frac{1}{1+x^2}$ 属于 arctan，负号属于 arccos。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\cos(2x)$. Find $f'\\left(\\frac{\\pi}{4}\\right)$. Give an integer.",
        "zh": "设 $f(x) = \\cos(2x)$，求 $f'\\left(\\frac{\\pi}{4}\\right)$。请填一个整数。"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "Chain rule: $f'(x) = -2\\sin(2x)$, so $f'\\left(\\frac{\\pi}{4}\\right) = -2\\sin\\frac{\\pi}{2} = -2(1) = -2$. The factor $2$ comes from the inside function $2x$.",
        "zh": "链式法则：$f'(x) = -2\\sin(2x)$，故 $f'\\left(\\frac{\\pi}{4}\\right) = -2\\sin\\frac{\\pi}{2} = -2(1) = -2$。因子 $2$ 来自内层函数 $2x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = (2x + 1)^3$. Find $f'(0)$. Give an integer.",
        "zh": "设 $f(x) = (2x + 1)^3$，求 $f'(0)$。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Chain rule: $f'(x) = 3(2x+1)^2 \\cdot 2 = 6(2x+1)^2$. At $x = 0$: $6(1)^2 = 6$. The inside derivative is $2$.",
        "zh": "链式法则：$f'(x) = 3(2x+1)^2 \\cdot 2 = 6(2x+1)^2$。代入 $x = 0$：$6(1)^2 = 6$。内层导数是 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = e^{3x}$. Find $f'(0)$. Give an integer.",
        "zh": "设 $f(x) = e^{3x}$，求 $f'(0)$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Chain rule: $f'(x) = 3e^{3x}$, so $f'(0) = 3e^0 = 3$. Forgetting the factor $3$ would give $1$.",
        "zh": "链式法则：$f'(x) = 3e^{3x}$，故 $f'(0) = 3e^0 = 3$。漏掉因子 $3$ 会得 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x^2 + y^2 = 169$, find $\\frac{dy}{dx}$ at the point $(5, 12)$. Give your answer as a fraction a/b.",
        "zh": "对 $x^2 + y^2 = 169$，求曲线在点 $(5, 12)$ 处的 $\\frac{dy}{dx}$。答案写成分数 a/b 的形式。"
      },
      "answer": "-5/12",
      "accept": [
        "-0.4167"
      ],
      "explanation": {
        "en": "Implicit differentiation gives $\\frac{dy}{dx} = -\\frac{x}{y}$. At $(5, 12)$: $-\\frac{5}{12}$. This is the tangent slope on the circle of radius $13$.",
        "zh": "隐函数求导得 $\\frac{dy}{dx} = -\\frac{x}{y}$。在 $(5, 12)$ 处为 $-\\frac{5}{12}$。这是半径为 $13$ 的圆上该点的切线斜率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\ln(x^3)$. Find $f'(2)$. Give your answer as a fraction a/b.",
        "zh": "设 $f(x) = \\ln(x^3)$，求 $f'(2)$。答案写成分数 a/b 的形式。"
      },
      "answer": "3/2",
      "accept": [
        "1.5"
      ],
      "explanation": {
        "en": "Use $\\ln(x^3) = 3\\ln x$, so $f'(x) = \\frac{3}{x}$ and $f'(2) = \\frac{3}{2}$. Alternatively the chain rule gives $\\frac{3x^2}{x^3} = \\frac{3}{x}$.",
        "zh": "利用 $\\ln(x^3) = 3\\ln x$，故 $f'(x) = \\frac{3}{x}$，$f'(2) = \\frac{3}{2}$。或用链式法则得 $\\frac{3x^2}{x^3} = \\frac{3}{x}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\tan x$. Find $f'(0)$. Give an integer.",
        "zh": "设 $f(x) = \\tan x$，求 $f'(0)$。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "$\\frac{d}{dx}\\tan x = \\sec^2 x$, so $f'(0) = \\sec^2 0 = \\frac{1}{\\cos^2 0} = 1$.",
        "zh": "$\\frac{d}{dx}\\tan x = \\sec^2 x$，故 $f'(0) = \\sec^2 0 = \\frac{1}{\\cos^2 0} = 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $h(x) = (x^2 + 1)^4$. Find $h'(1)$. Give an integer.",
        "zh": "设 $h(x) = (x^2 + 1)^4$，求 $h'(1)$。请填一个整数。"
      },
      "answer": "64",
      "accept": [
        "64.0",
        "+64"
      ],
      "explanation": {
        "en": "Chain rule: $h'(x) = 4(x^2+1)^3 \\cdot 2x = 8x(x^2+1)^3$. At $x = 1$: $8(1)(2)^3 = 8 \\cdot 8 = 64$.",
        "zh": "链式法则：$h'(x) = 4(x^2+1)^3 \\cdot 2x = 8x(x^2+1)^3$。代入 $x = 1$：$8(1)(2)^3 = 8 \\cdot 8 = 64$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x^2 - y^2 = 7$, find $\\frac{dy}{dx}$ at the point $(4, 3)$. Give your answer as a fraction a/b.",
        "zh": "对 $x^2 - y^2 = 7$，求曲线在点 $(4, 3)$ 处的 $\\frac{dy}{dx}$。答案写成分数 a/b 的形式。"
      },
      "answer": "4/3",
      "accept": [
        "1.3333"
      ],
      "explanation": {
        "en": "Differentiate: $2x - 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = \\frac{x}{y}$. At $(4, 3)$: $\\frac{4}{3}$. Note the minus sign on $y^2$ flips the usual circle result.",
        "zh": "求导：$2x - 2y\\frac{dy}{dx} = 0$，故 $\\frac{dy}{dx} = \\frac{x}{y}$。在 $(4, 3)$ 处为 $\\frac{4}{3}$。注意 $y^2$ 前的负号使结果与圆的情形符号相反。"
      }
    }
  ],
  "unit-3-composite-implicit-inverse/inverse-function-derivatives": [
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = x^3 + 2x$ and let $g$ be the inverse of $f$. Then $g'(3) =$",
        "zh": "设 $f(x) = x^3 + 2x$，$g$ 为 $f$ 的反函数。则 $g'(3) =$"
      },
      "choices": [
        "$\\frac{1}{5}$",
        "$\\frac{1}{29}$",
        "$5$",
        "$\\frac{1}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Solve $f(b) = 3$: $f(1) = 1 + 2 = 3$, so $g(3) = 1$. Then $f'(x) = 3x^2 + 2$ gives $f'(1) = 5$, so $g'(3) = \\frac{1}{5}$. Evaluating $f'$ at $3$ instead of at $g(3) = 1$ gives the trap $\\frac{1}{29}$.",
        "zh": "解 $f(b) = 3$：$f(1) = 1 + 2 = 3$，所以 $g(3) = 1$。再由 $f'(x) = 3x^2 + 2$ 得 $f'(1) = 5$，故 $g'(3) = \\frac{1}{5}$。把 $f'$ 在 $3$ 处而不是在 $g(3) = 1$ 处取值会得到陷阱 $\\frac{1}{29}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\arccos x \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\arccos x \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{\\sqrt{1 - x^2}}$",
        "$-\\frac{1}{\\sqrt{1 - x^2}}$",
        "$\\frac{1}{1 + x^2}$",
        "$-\\frac{1}{1 + x^2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Arccos is the negative of arcsin's derivative: $-\\frac{1}{\\sqrt{1 - x^2}}$, because $\\arccos x = \\frac{\\pi}{2} - \\arcsin x$. Dropping the minus sign gives the arcsin derivative instead.",
        "zh": "arccos 的导数是 arcsin 导数的相反数：$-\\frac{1}{\\sqrt{1 - x^2}}$，因为 $\\arccos x = \\frac{\\pi}{2} - \\arcsin x$。丢掉负号就变成了 arcsin 的导数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\arctan(x^2) \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\arctan(x^2) \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{1 + x^4}$",
        "$\\frac{2x}{1 + x^2}$",
        "$\\frac{2x}{1 + x^4}$",
        "$\\frac{2x}{\\sqrt{1 - x^4}}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\frac{d}{dx}\\arctan(u) = \\frac{u'}{1 + u^2}$ with $u = x^2$: numerator $2x$, denominator $1 + (x^2)^2 = 1 + x^4$. Forgetting to square the inside gives $1 + x^2$, and the root form belongs to arcsin.",
        "zh": "$\\frac{d}{dx}\\arctan(u) = \\frac{u'}{1 + u^2}$，取 $u = x^2$：分子为 $2x$，分母为 $1 + (x^2)^2 = 1 + x^4$。忘记对内层平方会得 $1 + x^2$，带根号的形式属于 arcsin。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A table gives $f(2) = 5$, $f'(2) = 3$, $f(5) = 8$, $f'(5) = 6$. If $g = f^{-1}$, then $g'(5) =$",
        "zh": "表格给出 $f(2) = 5$，$f'(2) = 3$，$f(5) = 8$，$f'(5) = 6$。若 $g = f^{-1}$，则 $g'(5) =$"
      },
      "choices": [
        "$\\frac{1}{6}$",
        "$3$",
        "$\\frac{1}{8}$",
        "$\\frac{1}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Find the row whose OUTPUT is $5$: $f(2) = 5$, so $g(5) = 2$ and $g'(5) = \\frac{1}{f'(2)} = \\frac{1}{3}$. Using $f'(5) = 6$ takes the row where the input is $5$ — the wrong-row trap.",
        "zh": "找到输出为 $5$ 的那一行：$f(2) = 5$，所以 $g(5) = 2$，$g'(5) = \\frac{1}{f'(2)} = \\frac{1}{3}$。用 $f'(5) = 6$ 取的是输入为 $5$ 的那一行——查错行的陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $g = f^{-1}$, which formula is correct?",
        "zh": "若 $g = f^{-1}$，下列哪个公式正确？"
      },
      "choices": [
        "$g'(x) = \\frac{1}{f'(g(x))}$",
        "$g'(x) = \\frac{1}{f'(x)}$",
        "$g'(x) = f'(g(x))$",
        "$g'(x) = -\\frac{1}{f'(g(x))}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Differentiating $f(g(x)) = x$ by the chain rule gives $f'(g(x)) \\cdot g'(x) = 1$, so $g'(x) = \\frac{1}{f'(g(x))}$. The derivative of $f$ must be evaluated at $g(x)$, not at $x$, and there is no minus sign.",
        "zh": "对 $f(g(x)) = x$ 用链式法则求导得 $f'(g(x)) \\cdot g'(x) = 1$，故 $g'(x) = \\frac{1}{f'(g(x))}$。$f$ 的导数必须在 $g(x)$ 处取值，而不是在 $x$ 处，且没有负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\arcsin\\frac{x}{2} \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\arcsin\\frac{x}{2} \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{2}{\\sqrt{4 - x^2}}$",
        "$\\frac{1}{\\sqrt{4 - x^2}}$",
        "$\\frac{1}{2\\sqrt{4 - x^2}}$",
        "$\\frac{1}{\\sqrt{1 - x^2}}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{d}{dx}\\arcsin(u) = \\frac{u'}{\\sqrt{1 - u^2}}$ with $u = \\frac{x}{2}$: numerator $\\frac{1}{2}$, denominator $\\sqrt{1 - \\frac{x^2}{4}} = \\frac{\\sqrt{4 - x^2}}{2}$. The two $2$s cancel, giving $\\frac{1}{\\sqrt{4 - x^2}}$.",
        "zh": "$\\frac{d}{dx}\\arcsin(u) = \\frac{u'}{\\sqrt{1 - u^2}}$，取 $u = \\frac{x}{2}$：分子为 $\\frac{1}{2}$，分母为 $\\sqrt{1 - \\frac{x^2}{4}} = \\frac{\\sqrt{4 - x^2}}{2}$。两个 $2$ 约去，得 $\\frac{1}{\\sqrt{4 - x^2}}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $f$ passes through $(2, 7)$ with $f'(2) = 4$. If $g = f^{-1}$, then $g'(7) =$",
        "zh": "$f$ 的图象过点 $(2, 7)$ 且 $f'(2) = 4$。若 $g = f^{-1}$，则 $g'(7) =$"
      },
      "choices": [
        "$4$",
        "$\\frac{1}{7}$",
        "$\\frac{1}{4}$",
        "$7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $f(2) = 7$, we have $g(7) = 2$, so $g'(7) = \\frac{1}{f'(2)} = \\frac{1}{4}$. Reflecting across $y = x$ turns the slope $4$ into its reciprocal $\\frac{1}{4}$; forgetting to take the reciprocal leaves $4$.",
        "zh": "因为 $f(2) = 7$，所以 $g(7) = 2$，故 $g'(7) = \\frac{1}{f'(2)} = \\frac{1}{4}$。关于 $y = x$ 反射把斜率 $4$ 变成其倒数 $\\frac{1}{4}$；忘了取倒数就会剩下 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\arctan(3x)$ evaluated at $x = 0$?",
        "zh": "$\\frac{d}{dx}\\arctan(3x)$ 在 $x = 0$ 处的值是多少？"
      },
      "choices": [
        "$1$",
        "$\\frac{1}{3}$",
        "$0$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\frac{d}{dx}\\arctan(3x) = \\frac{3}{1 + 9x^2}$; at $x = 0$ this is $\\frac{3}{1} = 3$. Answering $1$ drops the chain-rule factor $3$ from the inside function.",
        "zh": "$\\frac{d}{dx}\\arctan(3x) = \\frac{3}{1 + 9x^2}$；在 $x = 0$ 处为 $\\frac{3}{1} = 3$。答成 $1$ 是漏掉了内层函数带来的链式法则因子 $3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = x^3 + x + 1$ and let $g$ be the inverse of $f$. Then $g'(1) =$",
        "zh": "设 $f(x) = x^3 + x + 1$，$g$ 为 $f$ 的反函数。则 $g'(1) =$"
      },
      "choices": [
        "$1$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Solve $f(b) = 1$: $f(0) = 0 + 0 + 1 = 1$, so $g(1) = 0$. Then $f'(x) = 3x^2 + 1$ gives $f'(0) = 1$, so $g'(1) = \\frac{1}{1} = 1$. The easy input here is $b = 0$.",
        "zh": "解 $f(b) = 1$：$f(0) = 0 + 0 + 1 = 1$，所以 $g(1) = 0$。再由 $f'(x) = 3x^2 + 1$ 得 $f'(0) = 1$，故 $g'(1) = \\frac{1}{1} = 1$。这里合适的输入是 $b = 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To compute $(f^{-1})'(a)$, you evaluate $f'$ at which value?",
        "zh": "计算 $(f^{-1})'(a)$ 时，应在哪个值处对 $f'$ 取值？"
      },
      "choices": [
        "$a$",
        "$f^{-1}(a)$",
        "$f(a)$",
        "$f'(a)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The formula is $(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$: you must first find $f^{-1}(a) = b$, the input where $f(b) = a$, then evaluate $f'$ there. Evaluating $f'$ at $a$ directly is the classic mistake.",
        "zh": "公式是 $(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$：必须先求出 $f^{-1}(a) = b$，即满足 $f(b) = a$ 的输入，再在那里对 $f'$ 取值。直接在 $a$ 处对 $f'$ 取值是经典错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\frac{d}{dx}\\left( \\arccos(2x) \\right)$?",
        "zh": "$\\frac{d}{dx}\\left( \\arccos(2x) \\right)$ 等于多少？"
      },
      "choices": [
        "$\\frac{2}{\\sqrt{1 - 4x^2}}$",
        "$-\\frac{1}{\\sqrt{1 - 4x^2}}$",
        "$-\\frac{2}{\\sqrt{1 - 4x^2}}$",
        "$-\\frac{2}{\\sqrt{1 - 2x^2}}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\frac{d}{dx}\\arccos(u) = -\\frac{u'}{\\sqrt{1 - u^2}}$ with $u = 2x$: numerator $-2$, denominator $\\sqrt{1 - (2x)^2} = \\sqrt{1 - 4x^2}$. Dropping the minus sign, or forgetting to square the $2$, gives the other choices.",
        "zh": "$\\frac{d}{dx}\\arccos(u) = -\\frac{u'}{\\sqrt{1 - u^2}}$，取 $u = 2x$：分子为 $-2$，分母为 $\\sqrt{1 - (2x)^2} = \\sqrt{1 - 4x^2}$。丢掉负号、或忘记对 $2$ 平方，就会得到其他选项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $f^{-1}$ is the reflection of the graph of $f$ across which line?",
        "zh": "$f^{-1}$ 的图象是 $f$ 的图象关于哪条直线的镜像？"
      },
      "choices": [
        "$x = 0$",
        "$y = 0$",
        "$y = -x$",
        "$y = x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "An inverse function reflects the original across the line $y = x$, which swaps each point $(a, b)$ into $(b, a)$. This reflection is exactly why the slopes are reciprocals.",
        "zh": "反函数是原函数关于直线 $y = x$ 的镜像，它把每个点 $(a, b)$ 变成 $(b, a)$。正是这种反射使得斜率互为倒数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^3 + 4x$ and let $g$ be the inverse of $f$. Find $g'(5)$. Give your answer as a fraction a/b.",
        "zh": "设 $f(x) = x^3 + 4x$，$g$ 为 $f$ 的反函数。求 $g'(5)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/7",
      "accept": [
        "0.1429"
      ],
      "explanation": {
        "en": "Solve $f(b) = 5$: $f(1) = 1 + 4 = 5$, so $g(5) = 1$. Then $f'(x) = 3x^2 + 4$ gives $f'(1) = 7$, so $g'(5) = \\frac{1}{7}$.",
        "zh": "解 $f(b) = 5$：$f(1) = 1 + 4 = 5$，所以 $g(5) = 1$。再由 $f'(x) = 3x^2 + 4$ 得 $f'(1) = 7$，故 $g'(5) = \\frac{1}{7}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $h(x) = \\arcsin x$. Find $h'(0)$. Give an integer.",
        "zh": "设 $h(x) = \\arcsin x$，求 $h'(0)$。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "$h'(x) = \\frac{1}{\\sqrt{1 - x^2}}$, so $h'(0) = \\frac{1}{\\sqrt{1}} = 1$. The arcsine curve has slope $1$ at the origin.",
        "zh": "$h'(x) = \\frac{1}{\\sqrt{1 - x^2}}$，故 $h'(0) = \\frac{1}{\\sqrt{1}} = 1$。反正弦曲线在原点的斜率为 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $h(x) = \\arctan x$. Find $h'(1)$. Give your answer as a fraction a/b.",
        "zh": "设 $h(x) = \\arctan x$，求 $h'(1)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/2",
      "accept": [
        "0.5"
      ],
      "explanation": {
        "en": "$h'(x) = \\frac{1}{1 + x^2}$, so $h'(1) = \\frac{1}{1 + 1} = \\frac{1}{2}$. There is no chain-rule factor since the inside is just $x$.",
        "zh": "$h'(x) = \\frac{1}{1 + x^2}$，故 $h'(1) = \\frac{1}{1 + 1} = \\frac{1}{2}$。内层就是 $x$，所以没有链式法则因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A table gives $f(0) = 2$, $f'(0) = 5$, $f(2) = 6$, $f'(2) = 8$. If $g = f^{-1}$, find $g'(2)$. Give your answer as a fraction a/b.",
        "zh": "表格给出 $f(0) = 2$，$f'(0) = 5$，$f(2) = 6$，$f'(2) = 8$。若 $g = f^{-1}$，求 $g'(2)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/5",
      "accept": [
        "0.2"
      ],
      "explanation": {
        "en": "Find the row whose OUTPUT is $2$: $f(0) = 2$, so $g(2) = 0$ and $g'(2) = \\frac{1}{f'(0)} = \\frac{1}{5}$. The row $f(2) = 6$ is bait — its input, not its output, equals $2$.",
        "zh": "找到输出为 $2$ 的那一行：$f(0) = 2$，所以 $g(2) = 0$，$g'(2) = \\frac{1}{f'(0)} = \\frac{1}{5}$。$f(2) = 6$ 那一行是诱饵——它的输入而非输出等于 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^3 + 5x$ and let $g$ be the inverse of $f$. Find $g'(6)$. Give your answer as a fraction a/b.",
        "zh": "设 $f(x) = x^3 + 5x$，$g$ 为 $f$ 的反函数。求 $g'(6)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/8",
      "accept": [
        "0.125"
      ],
      "explanation": {
        "en": "Solve $f(b) = 6$: $f(1) = 1 + 5 = 6$, so $g(6) = 1$. Then $f'(x) = 3x^2 + 5$ gives $f'(1) = 8$, so $g'(6) = \\frac{1}{8}$.",
        "zh": "解 $f(b) = 6$：$f(1) = 1 + 5 = 6$，所以 $g(6) = 1$。再由 $f'(x) = 3x^2 + 5$ 得 $f'(1) = 8$，故 $g'(6) = \\frac{1}{8}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $h(x) = \\arccos x$. Find $h'(0)$. Give an integer.",
        "zh": "设 $h(x) = \\arccos x$，求 $h'(0)$。请填一个整数。"
      },
      "answer": "-1",
      "accept": [
        "-1.0"
      ],
      "explanation": {
        "en": "$h'(x) = -\\frac{1}{\\sqrt{1 - x^2}}$, so $h'(0) = -\\frac{1}{\\sqrt{1}} = -1$. The minus sign distinguishes arccos from arcsin, which gives $+1$ here.",
        "zh": "$h'(x) = -\\frac{1}{\\sqrt{1 - x^2}}$，故 $h'(0) = -\\frac{1}{\\sqrt{1}} = -1$。负号使 arccos 区别于 arcsin——arcsin 在此处为 $+1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^7 + 2x$ and let $g$ be the inverse of $f$. Find $g'(3)$. Give your answer as a fraction a/b.",
        "zh": "设 $f(x) = x^7 + 2x$，$g$ 为 $f$ 的反函数。求 $g'(3)$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/9",
      "accept": [
        "0.1111"
      ],
      "explanation": {
        "en": "Solve $f(b) = 3$: $f(1) = 1 + 2 = 3$, so $g(3) = 1$. Then $f'(x) = 7x^6 + 2$ gives $f'(1) = 9$, so $g'(3) = \\frac{1}{9}$.",
        "zh": "解 $f(b) = 3$：$f(1) = 1 + 2 = 3$，所以 $g(3) = 1$。再由 $f'(x) = 7x^6 + 2$ 得 $f'(1) = 9$，故 $g'(3) = \\frac{1}{9}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $h(x) = \\arctan(5x)$. Find $h'(0)$. Give an integer.",
        "zh": "设 $h(x) = \\arctan(5x)$，求 $h'(0)$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$h'(x) = \\frac{5}{1 + (5x)^2} = \\frac{5}{1 + 25x^2}$, so $h'(0) = \\frac{5}{1} = 5$. The factor $5$ is the chain-rule contribution from the inside function $5x$.",
        "zh": "$h'(x) = \\frac{5}{1 + (5x)^2} = \\frac{5}{1 + 25x^2}$，故 $h'(0) = \\frac{5}{1} = 5$。因子 $5$ 来自内层函数 $5x$ 的链式法则贡献。"
      }
    }
  ],
  "unit-4-contextual-applications/motion-and-related-rates": [
    {
      "type": "mc",
      "question": {
        "en": "A particle moves along the $x$-axis with position $x(t) = t^3 - 3t^2 - 9t + 5$ for $t \\ge 0$. At which time(s) is the particle at rest?",
        "zh": "质点沿 $x$ 轴运动，位置为 $x(t) = t^3 - 3t^2 - 9t + 5$（$t \\ge 0$）。质点在哪些时刻静止？"
      },
      "choices": [
        "$t = 3$ only",
        "$t = 1$ and $t = 3$",
        "$t = -1$ and $t = 3$",
        "$t = 0$ and $t = 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "At rest means $v(t) = 0$. Here $v(t) = 3t^2 - 6t - 9 = 3(t-3)(t+1)$, which is zero at $t = 3$ and $t = -1$; only $t = 3$ lies in $t \\ge 0$. Including $t = -1$ ignores the domain restriction.",
        "zh": "静止意味着 $v(t) = 0$。这里 $v(t) = 3t^2 - 6t - 9 = 3(t-3)(t+1)$，在 $t = 3$ 与 $t = -1$ 处为零；只有 $t = 3$ 落在 $t \\ge 0$ 内。把 $t = -1$ 也算上就忽略了定义域限制。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has velocity $v(t) = t^2 - 6t + 8$ for $t \\ge 0$. On which interval(s) is the particle speeding up?",
        "zh": "质点的速度为 $v(t) = t^2 - 6t + 8$（$t \\ge 0$）。质点在哪些区间上加速？"
      },
      "choices": [
        "$(2,4)$",
        "$(2,3)\\cup(4,\\infty)$",
        "$(4,\\infty)$ only",
        "$(0,2)\\cup(3,4)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Speeding up needs $v$ and $a$ to share a sign. $v = (t-2)(t-4)$ is negative on $(2,4)$, positive outside; $a = 2t - 6$ is negative for $t < 3$, positive for $t > 3$. Both negative on $(2,3)$; both positive on $(4,\\infty)$. Reporting only $(4,\\infty)$ forgets that a particle moving in the negative direction with negative acceleration also gains speed.",
        "zh": "加速要求 $v$ 与 $a$ 同号。$v = (t-2)(t-4)$ 在 $(2,4)$ 上为负，其余为正；$a = 2t - 6$ 在 $t < 3$ 时为负，$t > 3$ 时为正。二者在 $(2,3)$ 上同为负，在 $(4,\\infty)$ 上同为正。只写 $(4,\\infty)$ 就忽略了：沿负方向运动且加速度为负时速率同样在增大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An object moves with velocity $v(t)$ in meters per second. Which is the best interpretation of $v'(5) = 3$?",
        "zh": "物体以速度 $v(t)$（单位：米/秒）运动。下列哪项是对 $v'(5) = 3$ 的最佳解释？"
      },
      "choices": [
        "At $t = 5$ s the object is $3$ meters past the start",
        "At $t = 5$ s the object moves forward at $3$ m/s",
        "At $t = 5$ s the velocity is increasing at $3$ m/s per second",
        "Over the first $5$ seconds the velocity rose by $3$ m/s"
      ],
      "answer": 2,
      "explanation": {
        "en": "$v'(5)$ is the instantaneous rate of change of velocity at $t = 5$, i.e. acceleration, with units (m/s)/s $=$ m/s$^2$. Confusing $v'(5)$ with $v(5)$ describes a speed, and reading it as a total change over $[0,5]$ swaps an instantaneous rate for an average change.",
        "zh": "$v'(5)$ 是 $t = 5$ 时速度的瞬时变化率，即加速度，单位为（米/秒）/秒即米/秒$^2$。把 $v'(5)$ 当成 $v(5)$ 就变成了描述速率；把它读成 $[0,5]$ 上的总变化，则是把瞬时变化率与平均变化混淆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $25$-ft ladder leans against a wall. The bottom slides away from the wall at $3$ ft/s. When the bottom is $7$ ft from the wall, how fast is the top sliding down?",
        "zh": "一架 $25$ 英尺长的梯子靠在墙上，底端以 $3$ 英尺/秒的速率滑离墙壁。当底端距墙 $7$ 英尺时，顶端下滑的速率是多少？"
      },
      "choices": [
        "$\\frac{24}{7}$ ft/s",
        "$\\frac{7}{24}$ ft/s",
        "$\\frac{3}{7}$ ft/s",
        "$\\frac{7}{8}$ ft/s"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $x^2 + y^2 = 625$: differentiating gives $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$. When $x = 7$, $y = 24$, so $7(3) + 24\\frac{dy}{dt} = 0$ and $\\frac{dy}{dt} = -\\frac{21}{24} = -\\frac{7}{8}$ ft/s — the top slides down at $\\frac{7}{8}$ ft/s. Swapping $x$ and $y$ in the final substitution produces $\\frac{24}{7}$.",
        "zh": "由 $x^2 + y^2 = 625$ 求导得 $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$。当 $x = 7$ 时 $y = 24$，故 $7(3) + 24\\frac{dy}{dt} = 0$，$\\frac{dy}{dt} = -\\frac{21}{24} = -\\frac{7}{8}$ 英尺/秒——顶端以 $\\frac{7}{8}$ 英尺/秒下滑。最后代入时把 $x$ 与 $y$ 弄反就会得到 $\\frac{24}{7}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spherical balloon is inflated so its radius grows at $2$ cm/s. When the radius is $3$ cm, how fast is the volume increasing? (Use $V = \\frac{4}{3}\\pi r^3$.)",
        "zh": "一个球形气球被充气，半径以 $2$ 厘米/秒的速率增大。当半径为 $3$ 厘米时，体积增大的速率是多少？（用 $V = \\frac{4}{3}\\pi r^3$。）"
      },
      "choices": [
        "$72\\pi$ cm$^3$/s",
        "$36\\pi$ cm$^3$/s",
        "$24\\pi$ cm$^3$/s",
        "$18\\pi$ cm$^3$/s"
      ],
      "answer": 0,
      "explanation": {
        "en": "From $V = \\frac{4}{3}\\pi r^3$, $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = 4\\pi(9)(2) = 72\\pi$ cm$^3$/s. Using $\\frac{dV}{dt} = \\frac{4}{3}\\pi r^2\\frac{dr}{dt}$ (keeping the $\\frac{4}{3}$) is the classic slip — the power rule cancels the $3$.",
        "zh": "由 $V = \\frac{4}{3}\\pi r^3$ 得 $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = 4\\pi(9)(2) = 72\\pi$ 立方厘米/秒。若保留 $\\frac{4}{3}$ 写成 $\\frac{dV}{dt} = \\frac{4}{3}\\pi r^2\\frac{dr}{dt}$ 就是经典失误——幂法则会把 $3$ 约掉。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Water pours into an inverted cone of height $12$ m and top radius $3$ m at $4$ m$^3$/min. How fast is the depth rising when the water is $6$ m deep?",
        "zh": "水以 $4$ 立方米/分钟的速率注入一个高 $12$ 米、顶部半径 $3$ 米的倒置圆锥。当水深 $6$ 米时，水深上升的速率是多少？"
      },
      "choices": [
        "$\\frac{4}{9\\pi}$ m/min",
        "$\\frac{16}{9\\pi}$ m/min",
        "$\\frac{16}{3\\pi}$ m/min",
        "$\\frac{1}{9\\pi}$ m/min"
      ],
      "answer": 1,
      "explanation": {
        "en": "Similar triangles give $r = \\frac{h}{4}$, so $V = \\frac{1}{3}\\pi\\left(\\frac{h}{4}\\right)^2 h = \\frac{\\pi}{48}h^3$ and $\\frac{dV}{dt} = \\frac{\\pi}{16}h^2\\frac{dh}{dt}$. With $h = 6$: $4 = \\frac{\\pi}{16}(36)\\frac{dh}{dt} = \\frac{9\\pi}{4}\\frac{dh}{dt}$, so $\\frac{dh}{dt} = \\frac{16}{9\\pi}$. Treating $r$ as the constant $3$ instead of eliminating it gives the wrong denominator.",
        "zh": "由相似三角形得 $r = \\frac{h}{4}$，故 $V = \\frac{1}{3}\\pi\\left(\\frac{h}{4}\\right)^2 h = \\frac{\\pi}{48}h^3$，$\\frac{dV}{dt} = \\frac{\\pi}{16}h^2\\frac{dh}{dt}$。当 $h = 6$ 时：$4 = \\frac{\\pi}{16}(36)\\frac{dh}{dt} = \\frac{9\\pi}{4}\\frac{dh}{dt}$，即 $\\frac{dh}{dt} = \\frac{16}{9\\pi}$。若不消去 $r$ 而把它当作常数 $3$，分母就会算错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At $t = 4$ s a particle has velocity $v(4) = -5$ m/s and acceleration $a(4) = 2$ m/s$^2$. Which statement is correct?",
        "zh": "在 $t = 4$ 秒时，某质点的速度 $v(4) = -5$ 米/秒，加速度 $a(4) = 2$ 米/秒$^2$。下列哪项正确？"
      },
      "choices": [
        "Speeding up, because the speed is $5$ m/s",
        "The particle is at rest at $t = 4$",
        "Slowing down, because $v(4)$ and $a(4)$ have opposite signs",
        "Speeding up, because $a(4) > 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Compare signs: $v(4) < 0$ and $a(4) > 0$ are opposite, so the particle is slowing down. Judging by the sign of $a$ alone (\"$a > 0$ so speeding up\") ignores the direction of motion — the required test is whether $v$ and $a$ agree in sign.",
        "zh": "比较符号：$v(4) < 0$ 与 $a(4) > 0$ 异号，故质点在减速。仅凭 $a$ 的符号（\"$a > 0$ 故加速\"）忽略了运动方向——正确的判别法是看 $v$ 与 $a$ 是否同号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $5$-ft person walks away from a $20$-ft streetlight at $6$ ft/s. How fast is the tip of the shadow moving along the ground?",
        "zh": "一个身高 $5$ 英尺的人以 $6$ 英尺/秒的速度走离一盏 $20$ 英尺高的路灯。影子顶端沿地面移动的速率是多少？"
      },
      "choices": [
        "$6$ ft/s",
        "$\\frac{18}{5}$ ft/s",
        "$2$ ft/s",
        "$8$ ft/s"
      ],
      "answer": 3,
      "explanation": {
        "en": "Let $x$ be the person's distance from the light and $\\ell$ the tip's distance. Similar triangles: $\\frac{20}{\\ell} = \\frac{5}{\\ell - x}$, so $20\\ell - 20x = 5\\ell$, giving $\\ell = \\frac{4}{3}x$ and $\\frac{d\\ell}{dt} = \\frac{4}{3}(6) = 8$ ft/s. The tip moves faster than the person; answering $2$ ft/s finds only how fast the shadow's length grows.",
        "zh": "设人距灯 $x$，影子顶端距灯 $\\ell$。相似三角形：$\\frac{20}{\\ell} = \\frac{5}{\\ell - x}$，得 $20\\ell - 20x = 5\\ell$，即 $\\ell = \\frac{4}{3}x$，故 $\\frac{d\\ell}{dt} = \\frac{4}{3}(6) = 8$ 英尺/秒。顶端比人移动得更快；若答 $2$ 英尺/秒，求的只是影子长度增长的速率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two cars leave an intersection at the same time; one heads east, the other north. At a moment the eastbound car is $40$ mi from the intersection going $40$ mph, and the northbound car is $30$ mi out going $30$ mph. How fast is the distance between them changing?",
        "zh": "两辆车同时从十字路口出发，一辆向东，一辆向北。某时刻向东的车距路口 $40$ 英里、时速 $40$ 英里，向北的车距路口 $30$ 英里、时速 $30$ 英里。两车之间的距离变化有多快？"
      },
      "choices": [
        "$50$ mph",
        "$70$ mph",
        "$35$ mph",
        "$25$ mph"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $z^2 = x^2 + y^2$, differentiate: $z\\frac{dz}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}$. Here $z = \\sqrt{40^2 + 30^2} = 50$, so $50\\frac{dz}{dt} = 40(40) + 30(30) = 2500$ and $\\frac{dz}{dt} = 50$ mph. Simply adding the two speeds ($40 + 30 = 70$) ignores that the motions are perpendicular.",
        "zh": "由 $z^2 = x^2 + y^2$ 求导：$z\\frac{dz}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}$。这里 $z = \\sqrt{40^2 + 30^2} = 50$，故 $50\\frac{dz}{dt} = 40(40) + 30(30) = 2500$，$\\frac{dz}{dt} = 50$ 英里/时。直接把两个速率相加（$40 + 30 = 70$）忽略了两个运动相互垂直。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has position $x(t) = 2t^3 - 9t^2 + 12t$ for $t \\ge 0$. On which interval is the particle moving in the negative direction?",
        "zh": "质点的位置为 $x(t) = 2t^3 - 9t^2 + 12t$（$t \\ge 0$）。质点在哪个区间上沿负方向运动？"
      },
      "choices": [
        "$(0,1)$",
        "$(1,2)$",
        "$(2,\\infty)$",
        "$(0,1)\\cup(2,\\infty)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Moving in the negative direction means $v(t) < 0$. Here $v(t) = 6t^2 - 18t + 12 = 6(t-1)(t-2)$, which is negative only between its roots, on $(1,2)$. Outside that interval $v > 0$ (positive direction).",
        "zh": "沿负方向运动意味着 $v(t) < 0$。这里 $v(t) = 6t^2 - 18t + 12 = 6(t-1)(t-2)$，只在两根之间即 $(1,2)$ 上为负。区间之外 $v > 0$（正方向）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spherical snowball melts so its volume decreases at $8$ cm$^3$/min. When the radius is $2$ cm, how fast is the radius decreasing? (Use $V = \\frac{4}{3}\\pi r^3$.)",
        "zh": "一个球形雪球融化，体积以 $8$ 立方厘米/分钟的速率减小。当半径为 $2$ 厘米时，半径减小的速率是多少？（用 $V = \\frac{4}{3}\\pi r^3$。）"
      },
      "choices": [
        "$\\frac{1}{8\\pi}$ cm/min",
        "$\\frac{1}{4\\pi}$ cm/min",
        "$\\frac{1}{2\\pi}$ cm/min",
        "$\\frac{1}{\\pi}$ cm/min"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Melting gives $\\frac{dV}{dt} = -8$, so $-8 = 4\\pi(4)\\frac{dr}{dt} = 16\\pi\\frac{dr}{dt}$ and $\\frac{dr}{dt} = -\\frac{1}{2\\pi}$ — the radius shrinks at $\\frac{1}{2\\pi}$ cm/min. Dropping the factor from $r^2 = 4$ leads to the wrong denominator.",
        "zh": "$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$。融化使 $\\frac{dV}{dt} = -8$，故 $-8 = 4\\pi(4)\\frac{dr}{dt} = 16\\pi\\frac{dr}{dt}$，$\\frac{dr}{dt} = -\\frac{1}{2\\pi}$——半径以 $\\frac{1}{2\\pi}$ 厘米/分钟减小。漏掉 $r^2 = 4$ 带来的因子就会使分母算错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The side of a square increases at $3$ cm/s. When the side is $10$ cm, how fast is the area increasing?",
        "zh": "正方形的边长以 $3$ 厘米/秒的速率增大。当边长为 $10$ 厘米时，面积增大的速率是多少？"
      },
      "choices": [
        "$30$ cm$^2$/s",
        "$100$ cm$^2$/s",
        "$20$ cm$^2$/s",
        "$60$ cm$^2$/s"
      ],
      "answer": 3,
      "explanation": {
        "en": "From $A = s^2$, $\\frac{dA}{dt} = 2s\\frac{ds}{dt} = 2(10)(3) = 60$ cm$^2$/s. Answering $30$ forgets the factor of $2$ from the power rule; $100$ comes from plugging $s = 10$ in before differentiating.",
        "zh": "由 $A = s^2$ 得 $\\frac{dA}{dt} = 2s\\frac{ds}{dt} = 2(10)(3) = 60$ 平方厘米/秒。答 $30$ 是漏了幂法则的因子 $2$；$100$ 则来自求导前就代入 $s = 10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with position $x(t) = t^3 - 6t^2 + 9t - 4$ (meters, seconds). Find its acceleration at $t = 3$. Give an integer (in m/s$^2$).",
        "zh": "质点的位置为 $x(t) = t^3 - 6t^2 + 9t - 4$（单位：米、秒）。求 $t = 3$ 时的加速度。请填一个整数（单位为米/秒$^2$）。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Differentiate twice: $v(t) = 3t^2 - 12t + 9$, $a(t) = 6t - 12$. At $t = 3$: $a(3) = 18 - 12 = 6$ m/s$^2$. Stopping at $v(3) = 0$ mistakes momentary rest for zero acceleration.",
        "zh": "求两次导：$v(t) = 3t^2 - 12t + 9$，$a(t) = 6t - 12$。当 $t = 3$ 时：$a(3) = 18 - 12 = 6$ 米/秒$^2$。算到 $v(3) = 0$ 就停，会把瞬时静止误认为加速度为零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The radius of a circle increases at $3$ cm/s. When the radius is $4$ cm, the area increases at $k\\pi$ cm$^2$/s. Find $k$. Give an integer.",
        "zh": "圆的半径以 $3$ 厘米/秒的速率增大。当半径为 $4$ 厘米时，面积以 $k\\pi$ 平方厘米/秒的速率增大。求 $k$。请填一个整数。"
      },
      "answer": "24",
      "accept": [
        "24.0",
        "+24"
      ],
      "explanation": {
        "en": "From $A = \\pi r^2$, $\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt} = 2\\pi(4)(3) = 24\\pi$, so $k = 24$. Substituting $r = 4$ before differentiating (giving the constant $16\\pi$) is the classic related-rates blunder.",
        "zh": "由 $A = \\pi r^2$ 得 $\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt} = 2\\pi(4)(3) = 24\\pi$，故 $k = 24$。在求导之前就代入 $r = 4$（得到常数 $16\\pi$）是相关变化率最经典的错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $17$-ft ladder leans against a wall. The bottom slides away at $5$ ft/s. When the bottom is $8$ ft from the wall, the top slides down at what rate (ft/s)? Give your answer as a fraction a/b.",
        "zh": "一架 $17$ 英尺长的梯子靠在墙上，底端以 $5$ 英尺/秒的速率滑离墙壁。当底端距墙 $8$ 英尺时，顶端下滑的速率是多少（英尺/秒）？答案写成分数 a/b 的形式。"
      },
      "answer": "8/3",
      "accept": [
        "2.67",
        "2.667"
      ],
      "explanation": {
        "en": "With $x^2 + y^2 = 289$: $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$. When $x = 8$, $y = 15$, so $8(5) + 15\\frac{dy}{dt} = 0$ and $\\frac{dy}{dt} = -\\frac{40}{15} = -\\frac{8}{3}$ ft/s. The top slides down at $\\frac{8}{3}$ ft/s.",
        "zh": "由 $x^2 + y^2 = 289$ 得 $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$。当 $x = 8$ 时 $y = 15$，故 $8(5) + 15\\frac{dy}{dt} = 0$，$\\frac{dy}{dt} = -\\frac{40}{15} = -\\frac{8}{3}$ 英尺/秒。顶端以 $\\frac{8}{3}$ 英尺/秒下滑。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spherical balloon has radius increasing at $2$ cm/s. When the radius is $5$ cm, the volume increases at $k\\pi$ cm$^3$/s. Find $k$. Give an integer. (Use $V = \\frac{4}{3}\\pi r^3$.)",
        "zh": "球形气球的半径以 $2$ 厘米/秒的速率增大。当半径为 $5$ 厘米时，体积以 $k\\pi$ 立方厘米/秒的速率增大。求 $k$。请填一个整数。（用 $V = \\frac{4}{3}\\pi r^3$。）"
      },
      "answer": "200",
      "accept": [
        "200.0",
        "+200"
      ],
      "explanation": {
        "en": "$\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt} = 4\\pi(25)(2) = 200\\pi$, so $k = 200$. The power rule turns $\\frac{4}{3}\\pi r^3$ into $4\\pi r^2$ — keeping the $\\frac{4}{3}$ would give the wrong coefficient.",
        "zh": "$\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt} = 4\\pi(25)(2) = 200\\pi$，故 $k = 200$。幂法则把 $\\frac{4}{3}\\pi r^3$ 化为 $4\\pi r^2$——保留 $\\frac{4}{3}$ 会得到错误系数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The edge of a cube increases at $2$ cm/s. When the edge is $3$ cm, find the rate the volume is increasing. Give an integer (in cm$^3$/s).",
        "zh": "正方体的棱长以 $2$ 厘米/秒的速率增大。当棱长为 $3$ 厘米时，求体积增大的速率。请填一个整数（单位为立方厘米/秒）。"
      },
      "answer": "54",
      "accept": [
        "54.0",
        "+54"
      ],
      "explanation": {
        "en": "From $V = s^3$, $\\frac{dV}{dt} = 3s^2\\frac{ds}{dt} = 3(9)(2) = 54$ cm$^3$/s. Forgetting the factor $3s^2$ from the power rule is the usual error.",
        "zh": "由 $V = s^3$ 得 $\\frac{dV}{dt} = 3s^2\\frac{ds}{dt} = 3(9)(2) = 54$ 立方厘米/秒。漏掉幂法则给出的因子 $3s^2$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with position $x(t) = t^4 - 4t^3$ (meters, seconds). Find its acceleration at $t = 1$. Give an integer (in m/s$^2$).",
        "zh": "质点的位置为 $x(t) = t^4 - 4t^3$（单位：米、秒）。求 $t = 1$ 时的加速度。请填一个整数（单位为米/秒$^2$）。"
      },
      "answer": "-12",
      "accept": [
        "-12.0"
      ],
      "explanation": {
        "en": "Differentiate twice: $v(t) = 4t^3 - 12t^2$, $a(t) = 12t^2 - 24t$. At $t = 1$: $a(1) = 12 - 24 = -12$ m/s$^2$. A negative acceleration here means the velocity is decreasing.",
        "zh": "求两次导：$v(t) = 4t^3 - 12t^2$，$a(t) = 12t^2 - 24t$。当 $t = 1$ 时：$a(1) = 12 - 24 = -12$ 米/秒$^2$。这里加速度为负，表示速度在减小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $6$-ft person walks away from a $24$-ft streetlight at $5$ ft/s. How fast is the length of the shadow increasing (in ft/s)? Give your answer as a fraction a/b.",
        "zh": "一个身高 $6$ 英尺的人以 $5$ 英尺/秒的速度走离一盏 $24$ 英尺高的路灯。影子的长度增大的速率是多少（英尺/秒）？答案写成分数 a/b 的形式。"
      },
      "answer": "5/3",
      "accept": [
        "1.67",
        "1.667"
      ],
      "explanation": {
        "en": "Let $x$ be the person's distance from the light and $\\ell$ the tip's distance. Similar triangles: $\\frac{24}{\\ell} = \\frac{6}{\\ell - x}$, so $24\\ell - 24x = 6\\ell$, giving $\\ell = \\frac{4}{3}x$. The shadow length is $s = \\ell - x = \\frac{1}{3}x$, so $\\frac{ds}{dt} = \\frac{1}{3}(5) = \\frac{5}{3}$ ft/s. This is the length rate, not the faster tip rate $\\frac{20}{3}$.",
        "zh": "设人距灯 $x$，影子顶端距灯 $\\ell$。相似三角形：$\\frac{24}{\\ell} = \\frac{6}{\\ell - x}$，得 $24\\ell - 24x = 6\\ell$，即 $\\ell = \\frac{4}{3}x$。影子长度为 $s = \\ell - x = \\frac{1}{3}x$，故 $\\frac{ds}{dt} = \\frac{1}{3}(5) = \\frac{5}{3}$ 英尺/秒。这是长度的变化率，而非更快的顶端速率 $\\frac{20}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circular oil spill grows so its area increases at $12\\pi$ m$^2$/s. When the radius is $3$ m, how fast is the radius increasing? Give an integer (in m/s).",
        "zh": "一片圆形油污扩散，面积以 $12\\pi$ 平方米/秒的速率增大。当半径为 $3$ 米时，半径增大的速率是多少？请填一个整数（单位为米/秒）。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "From $A = \\pi r^2$, $\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt}$. So $12\\pi = 2\\pi(3)\\frac{dr}{dt} = 6\\pi\\frac{dr}{dt}$, giving $\\frac{dr}{dt} = 2$ m/s. Cancel the $\\pi$ on both sides before solving.",
        "zh": "由 $A = \\pi r^2$ 得 $\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt}$。故 $12\\pi = 2\\pi(3)\\frac{dr}{dt} = 6\\pi\\frac{dr}{dt}$，得 $\\frac{dr}{dt} = 2$ 米/秒。求解前先把两边的 $\\pi$ 约掉。"
      }
    }
  ],
  "unit-4-contextual-applications/linearization-and-lhospital": [
    {
      "type": "mc",
      "question": {
        "en": "Using the linearization of $f(x) = \\sqrt{x}$ at $x = 100$, which value approximates $\\sqrt{102}$?",
        "zh": "利用 $f(x) = \\sqrt{x}$ 在 $x = 100$ 处的线性化，下列哪个值是 $\\sqrt{102}$ 的近似？"
      },
      "choices": [
        "$10.1$",
        "$10.2$",
        "$10.05$",
        "$10.02$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f(100) = 10$ and $f'(x) = \\frac{1}{2\\sqrt{x}}$ gives $f'(100) = \\frac{1}{20}$, so $L(102) = 10 + \\frac{1}{20}(2) = 10.1$. Using $f'(100) = \\frac{1}{10}$ by mistake would double the correction to $10.2$.",
        "zh": "$f(100) = 10$，由 $f'(x) = \\frac{1}{2\\sqrt{x}}$ 得 $f'(100) = \\frac{1}{20}$，故 $L(102) = 10 + \\frac{1}{20}(2) = 10.1$。若误将 $f'(100)$ 算成 $\\frac{1}{10}$，修正量会翻倍成 $10.2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Use the linearization of $f(x) = \\ln x$ at $x = 1$ to approximate $\\ln(1.2)$, and state whether it is an over- or underestimate.",
        "zh": "用 $f(x) = \\ln x$ 在 $x = 1$ 处的线性化近似 $\\ln(1.2)$，并说明是高估还是低估。"
      },
      "choices": [
        "$0.2$, an underestimate",
        "$0.2$, an overestimate",
        "$0.18$, an overestimate",
        "$0$, an overestimate"
      ],
      "answer": 1,
      "explanation": {
        "en": "$f(1) = 0$ and $f'(1) = \\frac{1}{1} = 1$, so $L(1.2) = 0 + 1(0.2) = 0.2$. Since $f''(x) = -\\frac{1}{x^2} < 0$, the graph is concave down and the tangent lies above the curve, making $0.2$ an overestimate (true value $\\approx 0.182$). Calling it an underestimate reverses the concavity conclusion.",
        "zh": "$f(1) = 0$，$f'(1) = \\frac{1}{1} = 1$，故 $L(1.2) = 0 + 1(0.2) = 0.2$。由于 $f''(x) = -\\frac{1}{x^2} < 0$，图象上凸（凹向下），切线在曲线上方，故 $0.2$ 为高估（真实值约 $0.182$）。说成低估就把凹凸性结论弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)}$.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)}$。"
      },
      "choices": [
        "$1$",
        "$\\frac{5}{3}$",
        "$\\frac{3}{5}$",
        "$0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Both numerator and denominator approach $0$, so L'Hospital applies: $\\lim_{x\\to 0} \\frac{3\\cos(3x)}{5\\cos(5x)} = \\frac{3(1)}{5(1)} = \\frac{3}{5}$. Answering $1$ ignores that the two chain-rule factors ($3$ and $5$) differ.",
        "zh": "分子分母都趋于 $0$，可用洛必达法则：$\\lim_{x\\to 0} \\frac{3\\cos(3x)}{5\\cos(5x)} = \\frac{3(1)}{5(1)} = \\frac{3}{5}$。答 $1$ 是忽略了链式法则产生的两个因子（$3$ 与 $5$）不相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$。"
      },
      "choices": [
        "$1$",
        "$0$",
        "$\\infty$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "As $x \\to 0$, $e^{2x} - 1 \\to 0$ and $x \\to 0$: form $\\frac{0}{0}$. L'Hospital gives $\\lim_{x\\to 0} \\frac{2e^{2x}}{1} = 2$. Dropping the chain-rule factor $2$ from $\\frac{d}{dx}e^{2x}$ yields the wrong value $1$.",
        "zh": "当 $x \\to 0$ 时 $e^{2x} - 1 \\to 0$ 且 $x \\to 0$，为 $\\frac{0}{0}$ 型。洛必达法则给出 $\\lim_{x\\to 0} \\frac{2e^{2x}}{1} = 2$。若漏掉 $\\frac{d}{dx}e^{2x}$ 的链式法则因子 $2$，就会得到错误值 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2 + 2x}{x^2 - 5}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{3x^2 + 2x}{x^2 - 5}$。"
      },
      "choices": [
        "$3$",
        "$0$",
        "$\\infty$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The form is $\\frac{\\infty}{\\infty}$. Applying L'Hospital twice: $\\lim \\frac{6x + 2}{2x} = \\lim \\frac{6}{2} = 3$ (or compare leading coefficients $\\frac{3}{1}$). Concluding $\\infty$ ignores that numerator and denominator have the same degree.",
        "zh": "形式为 $\\frac{\\infty}{\\infty}$。两次使用洛必达法则：$\\lim \\frac{6x + 2}{2x} = \\lim \\frac{6}{2} = 3$（或比较最高次项系数 $\\frac{3}{1}$）。得出 $\\infty$ 是忽略了分子分母次数相同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A student writes $\\lim_{x \\to 0} \\frac{\\cos x}{x + 1} = \\lim_{x \\to 0} \\frac{-\\sin x}{1} = 0$. What is the correct value of the limit?",
        "zh": "某学生写道 $\\lim_{x \\to 0} \\frac{\\cos x}{x + 1} = \\lim_{x \\to 0} \\frac{-\\sin x}{1} = 0$。该极限的正确值是多少？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$-1$",
        "The limit does not exist"
      ],
      "answer": 1,
      "explanation": {
        "en": "As $x \\to 0$, $\\cos x \\to 1$ and $x + 1 \\to 1$: the form is $\\frac{1}{1}$, which is NOT indeterminate, so the limit is simply $\\frac{1}{1} = 1$ by direct substitution. Applying L'Hospital to a non-indeterminate form here produces the wrong answer $0$.",
        "zh": "当 $x \\to 0$ 时 $\\cos x \\to 1$ 且 $x + 1 \\to 1$：形式为 $\\frac{1}{1}$，不是不定式，直接代入即得 $\\frac{1}{1} = 1$。对非不定式使用洛必达法则在此得到了错误答案 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2}$.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2}$。"
      },
      "choices": [
        "$1$",
        "$\\frac{1}{2}$",
        "$2$",
        "$4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Form $\\frac{0}{0}$. L'Hospital: $\\lim \\frac{2\\sin(2x)}{2x} = \\lim \\frac{\\sin(2x)}{x}$, still $\\frac{0}{0}$; apply again: $\\lim \\frac{2\\cos(2x)}{1} = 2$. Forgetting a chain-rule factor of $2$ produces the too-small answer $\\frac{1}{2}$.",
        "zh": "$\\frac{0}{0}$ 型。洛必达法则：$\\lim \\frac{2\\sin(2x)}{2x} = \\lim \\frac{\\sin(2x)}{x}$，仍是 $\\frac{0}{0}$；再用一次：$\\lim \\frac{2\\cos(2x)}{1} = 2$。漏掉一个链式法则因子 $2$，会得到偏小的答案 $\\frac{1}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{x^3}{e^x}$.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{x^3}{e^x}$。"
      },
      "choices": [
        "$\\infty$",
        "$6$",
        "$1$",
        "$0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Form $\\frac{\\infty}{\\infty}$. Three applications: $\\lim \\frac{x^3}{e^x} = \\lim \\frac{3x^2}{e^x} = \\lim \\frac{6x}{e^x} = \\lim \\frac{6}{e^x} = 0$. Stopping at the numerator $6$ ignores that $e^x \\to \\infty$; exponentials dominate every power of $x$.",
        "zh": "$\\frac{\\infty}{\\infty}$ 型。三次使用：$\\lim \\frac{x^3}{e^x} = \\lim \\frac{3x^2}{e^x} = \\lim \\frac{6x}{e^x} = \\lim \\frac{6}{e^x} = 0$。停在分子的 $6$ 就忽略了 $e^x \\to \\infty$；指数函数增长快于 $x$ 的任何幂。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A function satisfies $f(2) = 5$, $f'(2) = 3$, and $f''(x) > 0$ for all $x$ near $2$. The tangent-line approximation of $f(2.1)$ is:",
        "zh": "函数满足 $f(2) = 5$，$f'(2) = 3$，且在 $2$ 附近 $f''(x) > 0$。用切线近似 $f(2.1)$ 的结果是："
      },
      "choices": [
        "$5.3$, an underestimate",
        "$5.3$, an overestimate",
        "$4.7$, an underestimate",
        "$5.3$, exact"
      ],
      "answer": 0,
      "explanation": {
        "en": "$L(2.1) = 5 + 3(0.1) = 5.3$. Concave up ($f'' > 0$) means the tangent line lies below the curve, so $5.3$ is an underestimate. Calling it an overestimate reverses the concavity rule.",
        "zh": "$L(2.1) = 5 + 3(0.1) = 5.3$。下凸（$f'' > 0$）意味着切线在曲线下方，故 $5.3$ 是低估值。说成高估就把凹凸性规则弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\tan x}{x}$.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\tan x}{x}$。"
      },
      "choices": [
        "$0$",
        "$1$",
        "$\\infty$",
        "$\\frac{1}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Form $\\frac{0}{0}$. L'Hospital gives $\\lim_{x\\to 0} \\frac{\\sec^2 x}{1} = \\sec^2 0 = 1$. This matches the standard small-angle fact $\\tan x \\approx x$ near $0$.",
        "zh": "$\\frac{0}{0}$ 型。洛必达法则给出 $\\lim_{x\\to 0} \\frac{\\sec^2 x}{1} = \\sec^2 0 = 1$。这与小角近似 $\\tan x \\approx x$（$x$ 接近 $0$ 时）一致。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 1} \\frac{\\ln x}{x - 1}$.",
        "zh": "求 $\\lim_{x \\to 1} \\frac{\\ln x}{x - 1}$。"
      },
      "choices": [
        "$0$",
        "$e$",
        "$1$",
        "does not exist"
      ],
      "answer": 2,
      "explanation": {
        "en": "As $x \\to 1$, $\\ln x \\to 0$ and $x - 1 \\to 0$: form $\\frac{0}{0}$. L'Hospital gives $\\lim_{x\\to 1} \\frac{1/x}{1} = \\frac{1}{1} = 1$. This is exactly the derivative of $\\ln x$ at $x = 1$.",
        "zh": "当 $x \\to 1$ 时 $\\ln x \\to 0$ 且 $x - 1 \\to 0$，为 $\\frac{0}{0}$ 型。洛必达法则给出 $\\lim_{x\\to 1} \\frac{1/x}{1} = \\frac{1}{1} = 1$。这正是 $\\ln x$ 在 $x = 1$ 处的导数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the linearization $L(x)$ of $f(x) = \\frac{1}{x}$ at $x = 2$?",
        "zh": "$f(x) = \\frac{1}{x}$ 在 $x = 2$ 处的线性化 $L(x)$ 是什么？"
      },
      "choices": [
        "$\\frac{1}{2} + \\frac{1}{4}(x - 2)$",
        "$2 - \\frac{1}{4}(x - 2)$",
        "$\\frac{1}{2} - \\frac{1}{2}(x - 2)$",
        "$\\frac{1}{2} - \\frac{1}{4}(x - 2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$f(2) = \\frac{1}{2}$ and $f'(x) = -\\frac{1}{x^2}$ gives $f'(2) = -\\frac{1}{4}$, so $L(x) = \\frac{1}{2} - \\frac{1}{4}(x - 2)$. Using $+\\frac{1}{4}$ drops the minus sign from the derivative of $\\frac{1}{x}$.",
        "zh": "$f(2) = \\frac{1}{2}$，由 $f'(x) = -\\frac{1}{x^2}$ 得 $f'(2) = -\\frac{1}{4}$，故 $L(x) = \\frac{1}{2} - \\frac{1}{4}(x - 2)$。用 $+\\frac{1}{4}$ 是漏掉了 $\\frac{1}{x}$ 导数中的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^3$. Use the tangent line at $x = 3$ to approximate $f(3.1)$. Give a decimal.",
        "zh": "设 $f(x) = x^3$。用 $x = 3$ 处的切线近似 $f(3.1)$。请填一个小数。"
      },
      "answer": "29.7",
      "accept": [
        "29.70"
      ],
      "explanation": {
        "en": "$f(3) = 27$ and $f'(x) = 3x^2$ gives $f'(3) = 27$, so $L(3.1) = 27 + 27(0.1) = 29.7$. Since $f''(3) = 18 > 0$ the curve is concave up, so this underestimates the true $29.791$.",
        "zh": "$f(3) = 27$，由 $f'(x) = 3x^2$ 得 $f'(3) = 27$，故 $L(3.1) = 27 + 27(0.1) = 29.7$。由于 $f''(3) = 18 > 0$，曲线下凸（凹向上），因此这是对真实值 $29.791$ 的低估。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{\\sin(7x)}{2x}$. Give your answer as a fraction a/b.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{\\sin(7x)}{2x}$。答案写成分数 a/b 的形式。"
      },
      "answer": "7/2",
      "accept": [
        "3.5",
        "3.50"
      ],
      "explanation": {
        "en": "Form $\\frac{0}{0}$. L'Hospital gives $\\lim_{x\\to 0} \\frac{7\\cos(7x)}{2} = \\frac{7}{2}$. The chain-rule factor $7$ in the numerator is easy to drop.",
        "zh": "$\\frac{0}{0}$ 型。洛必达法则给出 $\\lim_{x\\to 0} \\frac{7\\cos(7x)}{2} = \\frac{7}{2}$。分子中链式法则产生的因子 $7$ 容易被漏掉。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the linearization of $f(x) = \\sqrt{x}$ at $x = 16$ to approximate $\\sqrt{16.8}$. Give a decimal.",
        "zh": "用 $f(x) = \\sqrt{x}$ 在 $x = 16$ 处的线性化近似 $\\sqrt{16.8}$。请填一个小数。"
      },
      "answer": "4.1",
      "accept": [
        "4.10",
        "41/10"
      ],
      "explanation": {
        "en": "$f(16) = 4$ and $f'(x) = \\frac{1}{2\\sqrt{x}}$ gives $f'(16) = \\frac{1}{8}$, so $L(16.8) = 4 + \\frac{1}{8}(0.8) = 4.1$. Since $f''< 0$, $\\sqrt{x}$ is concave down and $4.1$ slightly overestimates the true $4.0987$.",
        "zh": "$f(16) = 4$，由 $f'(x) = \\frac{1}{2\\sqrt{x}}$ 得 $f'(16) = \\frac{1}{8}$，故 $L(16.8) = 4 + \\frac{1}{8}(0.8) = 4.1$。由于 $f'' < 0$，$\\sqrt{x}$ 上凸（凹向下），$4.1$ 略高估了真实值 $4.0987$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{e^{4x} - 1}{2x}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{e^{4x} - 1}{2x}$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Form $\\frac{0}{0}$. L'Hospital gives $\\lim_{x\\to 0} \\frac{4e^{4x}}{2} = \\frac{4}{2} = 2$. The chain rule contributes the factor $4$ in the numerator.",
        "zh": "$\\frac{0}{0}$ 型。洛必达法则给出 $\\lim_{x\\to 0} \\frac{4e^{4x}}{2} = \\frac{4}{2} = 2$。链式法则在分子中贡献了因子 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to 0} \\frac{6x}{\\sin(2x)}$. Give an integer.",
        "zh": "求 $\\lim_{x \\to 0} \\frac{6x}{\\sin(2x)}$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Form $\\frac{0}{0}$. L'Hospital gives $\\lim_{x\\to 0} \\frac{6}{2\\cos(2x)} = \\frac{6}{2(1)} = 3$. The denominator's derivative $2\\cos(2x)$ carries the chain-rule factor $2$.",
        "zh": "$\\frac{0}{0}$ 型。洛必达法则给出 $\\lim_{x\\to 0} \\frac{6}{2\\cos(2x)} = \\frac{6}{2(1)} = 3$。分母的导数 $2\\cos(2x)$ 带有链式法则因子 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the linearization of $f(x) = e^x$ at $x = 0$ to approximate $e^{0.2}$. Give a decimal.",
        "zh": "用 $f(x) = e^x$ 在 $x = 0$ 处的线性化近似 $e^{0.2}$。请填一个小数。"
      },
      "answer": "1.2",
      "accept": [
        "1.20",
        "6/5"
      ],
      "explanation": {
        "en": "$f(0) = 1$ and $f'(0) = e^0 = 1$, so $L(x) = 1 + x$ and $L(0.2) = 1.2$. Because $f''(x) = e^x > 0$, the curve is concave up and $1.2$ underestimates the true value $1.221\\ldots$",
        "zh": "$f(0) = 1$，$f'(0) = e^0 = 1$，故 $L(x) = 1 + x$，$L(0.2) = 1.2$。由于 $f''(x) = e^x > 0$，曲线下凸（凹向上），$1.2$ 低估了真实值 $1.221\\ldots$"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{x \\to \\infty} \\frac{5x^2 - 3}{2x^2 + x}$. Give your answer as a fraction a/b.",
        "zh": "求 $\\lim_{x \\to \\infty} \\frac{5x^2 - 3}{2x^2 + x}$。答案写成分数 a/b 的形式。"
      },
      "answer": "5/2",
      "accept": [
        "2.5",
        "2.50"
      ],
      "explanation": {
        "en": "Form $\\frac{\\infty}{\\infty}$. Two applications of L'Hospital: $\\lim \\frac{10x}{4x + 1} = \\lim \\frac{10}{4} = \\frac{5}{2}$ — equivalently the ratio of leading coefficients $\\frac{5}{2}$.",
        "zh": "$\\frac{\\infty}{\\infty}$ 型。两次使用洛必达法则：$\\lim \\frac{10x}{4x + 1} = \\lim \\frac{10}{4} = \\frac{5}{2}$——即最高次项系数之比 $\\frac{5}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^4$. Use the tangent line at $x = 2$ to approximate $f(1.9)$. Give a decimal.",
        "zh": "设 $f(x) = x^4$。用 $x = 2$ 处的切线近似 $f(1.9)$。请填一个小数。"
      },
      "answer": "12.8",
      "accept": [
        "12.80",
        "64/5"
      ],
      "explanation": {
        "en": "$f(2) = 16$ and $f'(x) = 4x^3$ gives $f'(2) = 32$, so $L(1.9) = 16 + 32(-0.1) = 12.8$. Since $f''(2) = 48 > 0$ the curve is concave up, so $12.8$ underestimates the true $13.0321$.",
        "zh": "$f(2) = 16$，由 $f'(x) = 4x^3$ 得 $f'(2) = 32$，故 $L(1.9) = 16 + 32(-0.1) = 12.8$。由于 $f''(2) = 48 > 0$，曲线下凸（凹向上），$12.8$ 低估了真实值 $13.0321$。"
      }
    }
  ],
  "unit-5-analytical-applications/mvt-and-extrema": [
    {
      "type": "mc",
      "question": {
        "en": "The Mean Value Theorem is applied to $f(x) = x^2$ on $[2, 6]$. Find the value of $c$ it guarantees.",
        "zh": "对 $f(x) = x^2$ 在 $[2, 6]$ 上应用中值定理，求定理保证存在的 $c$ 值。"
      },
      "choices": [
        "$c = 4$",
        "$c = 8$",
        "$c = 3$",
        "$c = 2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The average rate of change is $\\frac{36 - 4}{6 - 2} = 8$. Setting $f'(c) = 2c = 8$ gives $c = 4$, which lies in $(2, 6)$. A common error is to report the slope $8$ itself as the value of $c$.",
        "zh": "平均变化率为 $\\frac{36 - 4}{6 - 2} = 8$。令 $f'(c) = 2c = 8$ 得 $c = 4$，且 $4$ 在 $(2, 6)$ 内。常见错误是把斜率 $8$ 本身当成 $c$ 的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Mean Value Theorem is applied to $f(x) = x^3$ on $[0, 3]$. Find the value of $c$ it guarantees.",
        "zh": "对 $f(x) = x^3$ 在 $[0, 3]$ 上应用中值定理，求定理保证存在的 $c$ 值。"
      },
      "choices": [
        "$c = 3$",
        "$c = \\sqrt{3}$",
        "$c = \\frac{3}{2}$",
        "$c = 9$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The average rate of change is $\\frac{27 - 0}{3 - 0} = 9$. Setting $f'(c) = 3c^2 = 9$ gives $c^2 = 3$, so $c = \\sqrt{3} \\approx 1.73$ (the negative root falls outside the interval). Taking $c = 9$ mistakes the slope for the location, and $c = \\frac{3}{2}$ wrongly assumes $c$ is the midpoint.",
        "zh": "平均变化率为 $\\frac{27 - 0}{3 - 0} = 9$。令 $f'(c) = 3c^2 = 9$ 得 $c^2 = 3$，故 $c = \\sqrt{3} \\approx 1.73$（负根落在区间外舍去）。取 $c = 9$ 是把斜率误当成位置，取 $c = \\frac{3}{2}$ 则错误地假设 $c$ 一定是中点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rolle's Theorem applies to $f(x) = x^2 - 4x$ on $[0, 4]$. Find the value of $c$ with $f'(c) = 0$.",
        "zh": "罗尔定理适用于 $f(x) = x^2 - 4x$ 在 $[0, 4]$ 上的情形。求满足 $f'(c) = 0$ 的 $c$ 值。"
      },
      "choices": [
        "$c = 1$",
        "$c = 4$",
        "$c = 2$",
        "$c = 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $f(0) = 0$ and $f(4) = 16 - 16 = 0$, the endpoint values are equal and Rolle's Theorem applies. $f'(x) = 2x - 4 = 0$ gives $c = 2$, strictly inside $(0, 4)$. The endpoints $0$ and $4$ are where $f$ vanishes, not where $f'$ vanishes.",
        "zh": "因为 $f(0) = 0$，$f(4) = 16 - 16 = 0$，两端点函数值相等，罗尔定理适用。$f'(x) = 2x - 4 = 0$ 得 $c = 2$，严格位于 $(0, 4)$ 内。端点 $0$ 和 $4$ 是 $f$ 的零点，而不是 $f'$ 的零点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does the Mean Value Theorem NOT apply to $f(x) = x^{2/3}$ on $[-1, 1]$?",
        "zh": "为什么中值定理不适用于 $f(x) = x^{2/3}$ 在 $[-1, 1]$ 上的情形？"
      },
      "choices": [
        "$f$ is discontinuous at $x = 0$",
        "$f(-1) \\ne f(1)$, violating a required hypothesis",
        "The theorem does apply to this function",
        "$f$ is not differentiable at $x = 0$, an interior point"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x^{2/3}$ is continuous everywhere, but its graph has a cusp at $x = 0$ where the derivative blows up, so it is not differentiable on all of $(-1, 1)$. Equal endpoint values are a hypothesis of Rolle's Theorem, not of the MVT, so that condition is irrelevant here.",
        "zh": "$x^{2/3}$ 处处连续，但其图像在 $x = 0$ 处有一个尖点，导数在此发散，因此在 $(-1, 1)$ 内并非处处可导。两端点函数值相等是罗尔定理的条件而非中值定理的条件，故与此无关。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $f'(x) = (x + 2)(x - 4)$, on which interval is $f$ decreasing?",
        "zh": "已知 $f'(x) = (x + 2)(x - 4)$，$f$ 在哪个区间上递减？"
      },
      "choices": [
        "$(-2, 4)$",
        "$(-\\infty, -2) \\cup (4, \\infty)$",
        "$(4, \\infty)$",
        "$(-\\infty, -2)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The product $(x + 2)(x - 4)$ is negative exactly between its roots, so $f' < 0$ on $(-2, 4)$ and $f$ decreases there. The complement is where $f$ increases — reading the sign chart backward is the usual slip.",
        "zh": "乘积 $(x + 2)(x - 4)$ 恰在两根之间为负，故 $f' < 0$ 于 $(-2, 4)$，$f$ 在此递减。其补集是 $f$ 的递增区间——把符号表读反是常见的失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f'(x) = x^2 - 9$, on which set is $f$ increasing?",
        "zh": "对 $f'(x) = x^2 - 9$，$f$ 在哪个集合上递增？"
      },
      "choices": [
        "$(-3, 3)$",
        "$(-\\infty, -3) \\cup (3, \\infty)$",
        "$(3, \\infty)$ only",
        "$(0, \\infty)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$x^2 - 9 = (x - 3)(x + 3)$ is positive when $x < -3$ or $x > 3$, so $f$ increases on both outer branches. The interval $(-3, 3)$ is where $f' < 0$, giving the decreasing part, and keeping only $(3, \\infty)$ forgets the left branch.",
        "zh": "$x^2 - 9 = (x - 3)(x + 3)$ 在 $x < -3$ 或 $x > 3$ 时为正，故 $f$ 在两侧外支上都递增。区间 $(-3, 3)$ 是 $f' < 0$ 的递减部分，而只保留 $(3, \\infty)$ 则漏掉了左支。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Suppose $f'(x) = (x + 1)(x - 2)^2$. Which statement about $f$ is true?",
        "zh": "设 $f'(x) = (x + 1)(x - 2)^2$。下列关于 $f$ 的说法哪一项正确？"
      },
      "choices": [
        "$f$ has a local maximum at $x = 2$",
        "$f$ has a local minimum at $x = 2$",
        "$f$ has a local minimum at $x = -1$",
        "$f$ has a local maximum at $x = -1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The factor $(x - 2)^2$ never goes negative, so the sign of $f'$ matches the sign of $x + 1$: it changes from negative to positive at $x = -1$, a local minimum. At $x = 2$ there is no sign change, so no extremum occurs there even though it is a critical point.",
        "zh": "因子 $(x - 2)^2$ 永不为负，故 $f'$ 的符号与 $x + 1$ 相同：它在 $x = -1$ 处由负变正，是局部极小值点。在 $x = 2$ 处符号不变，尽管它是临界点，却没有极值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Extreme Value Theorem guarantees that $f$ attains both an absolute maximum and an absolute minimum. Which single hypothesis guarantees this?",
        "zh": "最值定理保证 $f$ 同时取得绝对最大值和绝对最小值。下列哪一个条件足以保证这一点？"
      },
      "choices": [
        "$f$ is differentiable on $(a, b)$",
        "$f$ has at least one critical point",
        "$f$ is increasing on $[a, b]$",
        "$f$ is continuous on a closed interval $[a, b]$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The EVT requires continuity on a closed, bounded interval — then both extrema are guaranteed to exist. Differentiability is stronger than needed and is not what the theorem assumes, and having a critical point neither guarantees nor is required for the extrema to exist.",
        "zh": "最值定理要求函数在闭且有界的区间上连续——这时两个最值一定存在。可导是比所需更强的条件，并非定理的假设；而拥有临界点既不能保证也不是最值存在的必要条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = x^3$, which statement about $x = 0$ is correct?",
        "zh": "对 $f(x) = x^3$，关于 $x = 0$ 的哪种说法是正确的？"
      },
      "choices": [
        "$x = 0$ is a critical point but not a local extremum",
        "$f$ has a local minimum at $x = 0$",
        "$f$ has a local maximum at $x = 0$",
        "$x = 0$ is not a critical point"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f'(x) = 3x^2$, so $f'(0) = 0$ makes $x = 0$ a critical point. But $3x^2 \\ge 0$ everywhere, so $f'$ does not change sign at $0$; a critical point without a sign change is not an extremum.",
        "zh": "$f'(x) = 3x^2$，故 $f'(0) = 0$ 使 $x = 0$ 成为临界点。但 $3x^2 \\ge 0$ 恒成立，$f'$ 在 $0$ 处不变号；不变号的临界点不是极值点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f'(x) = 0$ for every $x$ in an interval, what must $f$ be on that interval?",
        "zh": "若对某区间内的每个 $x$ 都有 $f'(x) = 0$，则 $f$ 在该区间上必定是什么？"
      },
      "choices": [
        "increasing",
        "constant",
        "concave up",
        "equal to zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "A zero derivative everywhere means the slope is always $0$, so $f$ has a constant value on the interval (a consequence of the MVT). Note this does not force the value to be $0$ — a horizontal line at any height also has $f' = 0$.",
        "zh": "导数处处为零意味着切线斜率恒为 $0$，故 $f$ 在该区间上取常值（这是中值定理的推论）。注意这并不要求函数值为 $0$——任意高度的水平直线同样满足 $f' = 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The Mean Value Theorem is applied to $f(x) = \\frac{1}{x}$ on $[1, 4]$. Find the value of $c$ it guarantees.",
        "zh": "对 $f(x) = \\frac{1}{x}$ 在 $[1, 4]$ 上应用中值定理，求定理保证存在的 $c$ 值。"
      },
      "choices": [
        "$c = \\frac{5}{2}$",
        "$c = 4$",
        "$c = 2$",
        "$c = \\frac{1}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The average rate of change is $\\frac{\\frac{1}{4} - 1}{4 - 1} = \\frac{-3/4}{3} = -\\frac{1}{4}$. Setting $f'(c) = -\\frac{1}{c^2} = -\\frac{1}{4}$ gives $c^2 = 4$, so $c = 2$ (the positive root in $(1, 4)$). Choosing the midpoint $\\frac{5}{2}$ assumes MVT always lands at the center, which it does not.",
        "zh": "平均变化率为 $\\frac{\\frac{1}{4} - 1}{4 - 1} = \\frac{-3/4}{3} = -\\frac{1}{4}$。令 $f'(c) = -\\frac{1}{c^2} = -\\frac{1}{4}$ 得 $c^2 = 4$，故 $c = 2$（取 $(1, 4)$ 内的正根）。选中点 $\\frac{5}{2}$ 是误以为中值定理总落在正中央，其实不然。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many values of $c$ does the Mean Value Theorem guarantee for $f(x) = x^3 - 3x$ on $[-2, 2]$?",
        "zh": "对 $f(x) = x^3 - 3x$ 在 $[-2, 2]$ 上，中值定理保证存在多少个 $c$ 值？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$3$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The average rate of change is $\\frac{f(2) - f(-2)}{2 - (-2)} = \\frac{2 - (-2)}{4} = 1$. Solving $f'(c) = 3c^2 - 3 = 1$ gives $c^2 = \\frac{4}{3}$, so $c = \\pm\\frac{2}{\\sqrt{3}} \\approx \\pm 1.15$, and both lie in $(-2, 2)$. The theorem guarantees at least one, but here there happen to be two.",
        "zh": "平均变化率为 $\\frac{f(2) - f(-2)}{2 - (-2)} = \\frac{2 - (-2)}{4} = 1$。解 $f'(c) = 3c^2 - 3 = 1$ 得 $c^2 = \\frac{4}{3}$，故 $c = \\pm\\frac{2}{\\sqrt{3}} \\approx \\pm 1.15$，两者都在 $(-2, 2)$ 内。定理只保证至少一个，但此处恰有两个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^3 - 3x^2 - 9x + 5$. Find the $x$-coordinate of the local minimum of $f$. Give an integer.",
        "zh": "设 $f(x) = x^3 - 3x^2 - 9x + 5$。求 $f$ 局部极小值点的 $x$ 坐标。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$, so the critical points are $x = -1$ and $x = 3$. The sign of $f'$ is positive, negative, positive across them, so $f'$ changes from negative to positive at $x = 3$: a local minimum by the First Derivative Test.",
        "zh": "$f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$，临界点为 $x = -1$ 和 $x = 3$。$f'$ 的符号依次为正、负、正，故在 $x = 3$ 处由负变正：由一阶导数判别法可知这是局部极小值点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By the Extreme Value Theorem, $f(x) = x^2 - 6x + 4$ attains an absolute minimum on $[0, 5]$. Find that minimum value. Give an integer.",
        "zh": "由最值定理，$f(x) = x^2 - 6x + 4$ 在 $[0, 5]$ 上必有绝对最小值。求这个最小值。请填一个整数。"
      },
      "answer": "-5",
      "accept": [
        "-5.0"
      ],
      "explanation": {
        "en": "$f'(x) = 2x - 6 = 0$ at $x = 3$, inside the interval. Compare candidates: $f(0) = 4$, $f(3) = 9 - 18 + 4 = -5$, $f(5) = 25 - 30 + 4 = -1$. The smallest is $-5$, at the critical point $x = 3$.",
        "zh": "$f'(x) = 2x - 6 = 0$ 得 $x = 3$，在区间内。比较候选值：$f(0) = 4$，$f(3) = 9 - 18 + 4 = -5$，$f(5) = 25 - 30 + 4 = -1$。最小的是 $-5$，出现在临界点 $x = 3$ 处。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The Mean Value Theorem is applied to $f(x) = x^2$ on $[1, 5]$. Find the value of $c$ it guarantees. Give an integer.",
        "zh": "对 $f(x) = x^2$ 在 $[1, 5]$ 上应用中值定理，求定理保证存在的 $c$ 值。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The average rate of change is $\\frac{25 - 1}{5 - 1} = 6$. Setting $f'(c) = 2c = 6$ gives $c = 3$, which lies in $(1, 5)$.",
        "zh": "平均变化率为 $\\frac{25 - 1}{5 - 1} = 6$。令 $f'(c) = 2c = 6$ 得 $c = 3$，且 $3$ 在 $(1, 5)$ 内。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = 2x^3 - 3x^2 - 12x$. Find the $x$-coordinate of the local maximum of $f$. Give an integer.",
        "zh": "设 $f(x) = 2x^3 - 3x^2 - 12x$。求 $f$ 局部极大值点的 $x$ 坐标。请填一个整数。"
      },
      "answer": "-1",
      "accept": [
        "-1.0"
      ],
      "explanation": {
        "en": "$f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1)$, so the critical points are $x = -1$ and $x = 2$. Across them the sign of $f'$ is positive, negative, positive, so $f'$ changes from positive to negative at $x = -1$: a local maximum.",
        "zh": "$f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1)$，临界点为 $x = -1$ 和 $x = 2$。$f'$ 的符号依次为正、负、正，故在 $x = -1$ 处由正变负：局部极大值点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By the Extreme Value Theorem, $f(x) = x^3 - 27x$ attains an absolute minimum on $[0, 4]$. Find that minimum value. Give an integer.",
        "zh": "由最值定理，$f(x) = x^3 - 27x$ 在 $[0, 4]$ 上必有绝对最小值。求这个最小值。请填一个整数。"
      },
      "answer": "-54",
      "accept": [
        "-54.0"
      ],
      "explanation": {
        "en": "$f'(x) = 3x^2 - 27 = 3(x^2 - 9) = 0$ at $x = 3$ (only $x = 3$ lies in $[0, 4]$). Compare $f(0) = 0$, $f(3) = 27 - 81 = -54$, $f(4) = 64 - 108 = -44$. The absolute minimum value is $-54$.",
        "zh": "$f'(x) = 3x^2 - 27 = 3(x^2 - 9) = 0$ 得 $x = 3$（只有 $x = 3$ 落在 $[0, 4]$ 内）。比较 $f(0) = 0$，$f(3) = 27 - 81 = -54$，$f(4) = 64 - 108 = -44$，绝对最小值为 $-54$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Rolle's Theorem applies to $f(x) = x^2 - 6x$ on $[0, 6]$. Find the value of $c$ with $f'(c) = 0$. Give an integer.",
        "zh": "罗尔定理适用于 $f(x) = x^2 - 6x$ 在 $[0, 6]$ 上的情形。求满足 $f'(c) = 0$ 的 $c$ 值。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$f(0) = 0$ and $f(6) = 36 - 36 = 0$, so the endpoint values match and Rolle's Theorem applies. $f'(x) = 2x - 6 = 0$ gives $c = 3$, the interior point where the tangent is horizontal.",
        "zh": "$f(0) = 0$，$f(6) = 36 - 36 = 0$，两端点函数值相等，罗尔定理适用。$f'(x) = 2x - 6 = 0$ 得 $c = 3$，即切线水平的内点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The Mean Value Theorem is applied to $f(x) = \\sqrt{x}$ on $[0, 9]$. Find the value of $c$ it guarantees. Give a fraction a/b.",
        "zh": "对 $f(x) = \\sqrt{x}$ 在 $[0, 9]$ 上应用中值定理，求定理保证存在的 $c$ 值。答案写成分数 a/b 的形式。"
      },
      "answer": "9/4",
      "accept": [
        "2.25"
      ],
      "explanation": {
        "en": "The average rate of change is $\\frac{3 - 0}{9 - 0} = \\frac{1}{3}$. Setting $f'(c) = \\frac{1}{2\\sqrt{c}} = \\frac{1}{3}$ gives $2\\sqrt{c} = 3$, so $\\sqrt{c} = \\frac{3}{2}$ and $c = \\frac{9}{4}$. Though $f$ is not differentiable at $x = 0$, the MVT only needs differentiability on the open interval.",
        "zh": "平均变化率为 $\\frac{3 - 0}{9 - 0} = \\frac{1}{3}$。令 $f'(c) = \\frac{1}{2\\sqrt{c}} = \\frac{1}{3}$ 得 $2\\sqrt{c} = 3$，即 $\\sqrt{c} = \\frac{3}{2}$，$c = \\frac{9}{4}$。虽然 $f$ 在 $x = 0$ 处不可导，但中值定理只要求在开区间内可导。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^4 - 2x^2$. Find the local minimum value of $f$ (the smallest local value it attains). Give an integer.",
        "zh": "设 $f(x) = x^4 - 2x^2$。求 $f$ 的局部极小值。请填一个整数。"
      },
      "answer": "-1",
      "accept": [
        "-1.0"
      ],
      "explanation": {
        "en": "$f'(x) = 4x^3 - 4x = 4x(x - 1)(x + 1)$, so the critical points are $x = -1, 0, 1$. At $x = \\pm 1$, $f'$ changes from negative to positive (local minima), giving $f(\\pm 1) = 1 - 2 = -1$. The point $x = 0$ is a local maximum with $f(0) = 0$.",
        "zh": "$f'(x) = 4x^3 - 4x = 4x(x - 1)(x + 1)$，临界点为 $x = -1, 0, 1$。在 $x = \\pm 1$ 处 $f'$ 由负变正（局部极小值），$f(\\pm 1) = 1 - 2 = -1$。$x = 0$ 是局部极大值点，$f(0) = 0$。"
      }
    }
  ],
  "unit-5-analytical-applications/concavity-and-curve-analysis": [
    {
      "type": "mc",
      "question": {
        "en": "On which interval is $f(x) = x^3 - 6x^2 + 5$ concave up?",
        "zh": "函数 $f(x) = x^3 - 6x^2 + 5$ 在哪个区间上凹（开口向上）？"
      },
      "choices": [
        "$(2, \\infty)$",
        "$(-\\infty, 2)$",
        "$(0, \\infty)$",
        "$(-\\infty, \\infty)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f''(x) = 6x - 12 = 6(x - 2)$, which is positive when $x > 2$. Concavity is governed by the sign of $f''$, not $f'$, so the answer is $(2, \\infty)$. On $(-\\infty, 2)$ the graph is concave down.",
        "zh": "$f''(x) = 6x - 12 = 6(x - 2)$，当 $x > 2$ 时为正。凹凸性由 $f''$ 的符号决定，而非 $f'$，故答案是 $(2, \\infty)$。在 $(-\\infty, 2)$ 上图像下凹。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Suppose $f'(c) = 0$ and $f''(c) > 0$. By the Second Derivative Test, what happens at $x = c$?",
        "zh": "设 $f'(c) = 0$ 且 $f''(c) > 0$。根据二阶导数判别法，$x = c$ 处会发生什么？"
      },
      "choices": [
        "local maximum",
        "local minimum",
        "inflection point",
        "the test is inconclusive"
      ],
      "answer": 1,
      "explanation": {
        "en": "A horizontal tangent on a concave-up arc sits at the bottom of a valley: a local minimum. An inflection point would require $f''$ to change sign, not merely to be positive.",
        "zh": "在上凹的弧上出现水平切线，说明该点位于谷底：局部极小值。拐点要求 $f''$ 变号，而不仅仅是取正值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $f''(x) = x^2(x - 3)$, at which value(s) of $x$ does the graph of $f$ have an inflection point?",
        "zh": "已知 $f''(x) = x^2(x - 3)$，$f$ 的图像在哪些 $x$ 值处有拐点？"
      },
      "choices": [
        "$x = 0$ and $x = 3$",
        "$x = 0$ only",
        "$x = 3$ only",
        "no inflection points"
      ],
      "answer": 2,
      "explanation": {
        "en": "The factor $x^2$ never changes sign, so $f''$ changes sign only at $x = 3$ (from negative to positive). Although $f''(0) = 0$, a zero of $f''$ without a sign change is not an inflection point.",
        "zh": "因子 $x^2$ 永不变号，故 $f''$ 只在 $x = 3$ 处变号（由负变正）。虽然 $f''(0) = 0$，但 $f''$ 不变号的零点不是拐点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f'$ is increasing on an interval, what must be true of $f$ there?",
        "zh": "若 $f'$ 在某区间上递增，则 $f$ 在该区间上必定满足什么？"
      },
      "choices": [
        "$f$ is increasing",
        "$f$ is decreasing",
        "$f$ is concave down",
        "$f$ is concave up"
      ],
      "answer": 3,
      "explanation": {
        "en": "A rising derivative means the slopes of $f$ are increasing, which is exactly concave up. Note this says nothing about whether $f$ itself rises or falls — an increasing derivative can still be negative.",
        "zh": "导数递增意味着 $f$ 的切线斜率不断增大，这正是上凹的含义。注意这与 $f$ 本身是升是降无关——递增的导数仍可能为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = x^3 - 3x^2 - 9x$, use the Second Derivative Test to classify the critical point at $x = -1$.",
        "zh": "对 $f(x) = x^3 - 3x^2 - 9x$，用二阶导数判别法判断临界点 $x = -1$ 的类型。"
      },
      "choices": [
        "local maximum",
        "local minimum",
        "inflection point",
        "neither maximum nor minimum"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$ confirms $x = -1$ is critical. $f''(x) = 6x - 6$, so $f''(-1) = -12 < 0$: the graph is concave down there, giving a local maximum.",
        "zh": "$f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$，可见 $x = -1$ 是临界点。$f''(x) = 6x - 6$，故 $f''(-1) = -12 < 0$：此处图像下凹，为局部极大值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the Candidates Test, what is the absolute maximum value of $f(x) = x^3 - 3x$ on $[-2, 2]$?",
        "zh": "用候选点检验法，求 $f(x) = x^3 - 3x$ 在 $[-2, 2]$ 上的绝对最大值。"
      },
      "choices": [
        "$-2$",
        "$2$",
        "$18$",
        "$0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$f'(x) = 3x^2 - 3 = 0$ gives $x = \\pm 1$, both inside the interval. Candidates: $f(-2) = -2$, $f(-1) = 2$, $f(1) = -2$, $f(2) = 2$. The largest value is $2$.",
        "zh": "$f'(x) = 3x^2 - 3 = 0$ 得 $x = \\pm 1$，都在区间内。候选值：$f(-2) = -2$，$f(-1) = 2$，$f(1) = -2$，$f(2) = 2$，最大值为 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f''(x) < 0$ on an interval, the graph of $f$ on that interval is:",
        "zh": "若在某区间上 $f''(x) < 0$，则 $f$ 在该区间上的图像是："
      },
      "choices": [
        "concave up",
        "increasing",
        "concave down",
        "decreasing"
      ],
      "answer": 2,
      "explanation": {
        "en": "A negative second derivative means the graph bends downward — concave down — with tangent lines lying above the curve. The sign of $f''$ controls bending, not the direction of $f$.",
        "zh": "二阶导数为负意味着图像向下弯曲——下凹——切线位于曲线上方。$f''$ 的符号控制弯曲方向，而非 $f$ 的增减。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At which value(s) of $x$ does $f(x) = x^4 - 6x^2$ change concavity?",
        "zh": "函数 $f(x) = x^4 - 6x^2$ 在哪些 $x$ 值处凹凸性发生改变？"
      },
      "choices": [
        "$x = 0$ only",
        "$x = \\pm\\sqrt{6}$",
        "$x = 0$ and $x = 1$",
        "$x = 1$ and $x = -1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$f''(x) = 12x^2 - 12 = 12(x^2 - 1)$, which changes sign at $x = 1$ and $x = -1$. The point $x = 0$ is where $f'$ vanishes, a critical point of $f$, not an inflection point.",
        "zh": "$f''(x) = 12x^2 - 12 = 12(x^2 - 1)$，在 $x = 1$ 和 $x = -1$ 处变号。$x = 0$ 是 $f'$ 的零点，是 $f$ 的临界点，而非拐点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On the interval $(0, 2\\pi)$, at which value of $x$ does the graph of $f(x) = \\sin x$ have an inflection point?",
        "zh": "在区间 $(0, 2\\pi)$ 上，$f(x) = \\sin x$ 的图像在哪个 $x$ 值处有拐点？"
      },
      "choices": [
        "$x = \\pi$",
        "$x = \\frac{\\pi}{2}$",
        "$x = \\frac{3\\pi}{2}$",
        "$x = 2\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f''(x) = -\\sin x$, which is zero at $x = \\pi$ and changes sign there (from negative to positive). The points $\\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$ are where $f'' = -\\sin x$ reaches its extreme magnitude, not where it changes sign.",
        "zh": "$f''(x) = -\\sin x$，在 $x = \\pi$ 处为零且变号（由负变正）。$\\frac{\\pi}{2}$ 与 $\\frac{3\\pi}{2}$ 是 $f'' = -\\sin x$ 取极值的地方，而不是变号的地方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Suppose $f''(x) > 0$ for all $x$ and $f'(2) = 0$. What happens at $x = 2$?",
        "zh": "设对所有 $x$ 都有 $f''(x) > 0$，且 $f'(2) = 0$。$x = 2$ 处会发生什么？"
      },
      "choices": [
        "inflection point",
        "local (and absolute) minimum",
        "local maximum",
        "nothing determinable"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $f''(2) > 0$, the Second Derivative Test gives a local minimum. Because the graph is concave up on the entire real line, that single valley is also the absolute minimum.",
        "zh": "因为 $f''(2) > 0$，二阶导数判别法给出局部极小值。又因为图像在整条实轴上都上凹，这唯一的谷同时也是绝对最小值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many inflection points does the graph of $f(x) = x^5 - 5x^4$ have?",
        "zh": "函数 $f(x) = x^5 - 5x^4$ 的图像有多少个拐点？"
      },
      "choices": [
        "$0$",
        "$3$",
        "$1$",
        "$2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$f''(x) = 20x^3 - 60x^2 = 20x^2(x - 3)$. The factor $x^2$ prevents a sign change at $x = 0$, so $f''$ changes sign only at $x = 3$ — exactly one inflection point.",
        "zh": "$f''(x) = 20x^3 - 60x^2 = 20x^2(x - 3)$。因子 $x^2$ 使 $x = 0$ 处不变号，故 $f''$ 只在 $x = 3$ 处变号——恰好一个拐点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $f'$ has a local minimum at $x = 3$. What does $f$ have at $x = 3$?",
        "zh": "$f'$ 的图像在 $x = 3$ 处有局部极小值。那么 $f$ 在 $x = 3$ 处有什么？"
      },
      "choices": [
        "local maximum",
        "local minimum",
        "critical point",
        "inflection point"
      ],
      "answer": 3,
      "explanation": {
        "en": "A local minimum of $f'$ is where $f'$ stops decreasing and starts increasing, so $f'' = (f')'$ changes from negative to positive: the concavity of $f$ switches, giving an inflection point. A local extremum of $f$ would instead require $f'$ to cross zero, which is not stated.",
        "zh": "$f'$ 的局部极小值是 $f'$ 由减转增之处，故 $f'' = (f')'$ 由负变正：$f$ 的凹凸性改变，为拐点。而 $f$ 的局部极值则要求 $f'$ 穿过零点，题目并未给出这一点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-coordinate of the inflection point of $f(x) = x^3 - 9x^2 + 24x$. Give an integer.",
        "zh": "求 $f(x) = x^3 - 9x^2 + 24x$ 的拐点的 $x$ 坐标。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$f''(x) = 6x - 18 = 0$ at $x = 3$. Since $6x - 18$ is negative for $x < 3$ and positive for $x > 3$, the concavity genuinely changes, confirming an inflection point.",
        "zh": "$f''(x) = 6x - 18 = 0$ 得 $x = 3$。由于 $6x - 18$ 在 $x < 3$ 时为负、$x > 3$ 时为正，凹凸性确实改变，故确为拐点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $f(x) = x^4 - 24x^2$ has two inflection points. Find the smaller of their $x$-coordinates. Give an integer.",
        "zh": "$f(x) = x^4 - 24x^2$ 的图像有两个拐点。求较小的那个拐点的 $x$ 坐标。请填一个整数。"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "$f''(x) = 12x^2 - 48 = 12(x^2 - 4) = 0$ at $x = \\pm 2$, and $f''$ changes sign at each. The smaller $x$-coordinate is $x = -2$.",
        "zh": "$f''(x) = 12x^2 - 48 = 12(x^2 - 4) = 0$ 得 $x = \\pm 2$，$f''$ 在两处都变号。较小的 $x$ 坐标是 $x = -2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the absolute minimum value of $f(x) = x^3 + 3x^2 - 24x$ on $[-5, 3]$. Give an integer.",
        "zh": "求 $f(x) = x^3 + 3x^2 - 24x$ 在 $[-5, 3]$ 上的绝对最小值。请填一个整数。"
      },
      "answer": "-28",
      "accept": [
        "-28.0"
      ],
      "explanation": {
        "en": "$f'(x) = 3x^2 + 6x - 24 = 3(x + 4)(x - 2)$, so the critical points are $x = -4$ and $x = 2$, both in $[-5, 3]$. Candidates: $f(-5) = 70$, $f(-4) = 80$, $f(2) = -28$, $f(3) = -18$. The absolute minimum value is $-28$.",
        "zh": "$f'(x) = 3x^2 + 6x - 24 = 3(x + 4)(x - 2)$，临界点为 $x = -4$ 和 $x = 2$，都在 $[-5, 3]$ 内。候选值：$f(-5) = 70$，$f(-4) = 80$，$f(2) = -28$，$f(3) = -18$，绝对最小值为 $-28$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = x^3 - 3x^2$. Use the Second Derivative Test to find the local maximum value of $f$. Give an integer.",
        "zh": "设 $f(x) = x^3 - 3x^2$。用二阶导数判别法求 $f$ 的局部极大值。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "$f'(x) = 3x^2 - 6x = 3x(x - 2)$, so the critical points are $x = 0$ and $x = 2$. $f''(x) = 6x - 6$, and $f''(0) = -6 < 0$ marks a local maximum with value $f(0) = 0$.",
        "zh": "$f'(x) = 3x^2 - 6x = 3x(x - 2)$，临界点为 $x = 0$ 和 $x = 2$。$f''(x) = 6x - 6$，$f''(0) = -6 < 0$ 说明是局部极大值，其值 $f(0) = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $f(x) = x^4 - 4x^3 + 10$ has two inflection points. Find the larger of their $x$-coordinates. Give an integer.",
        "zh": "$f(x) = x^4 - 4x^3 + 10$ 的图像有两个拐点。求较大的那个拐点的 $x$ 坐标。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$f''(x) = 12x^2 - 24x = 12x(x - 2) = 0$ at $x = 0$ and $x = 2$, and $f''$ changes sign at each. The larger $x$-coordinate is $x = 2$.",
        "zh": "$f''(x) = 12x^2 - 24x = 12x(x - 2) = 0$ 得 $x = 0$ 和 $x = 2$，$f''$ 在两处都变号。较大的 $x$ 坐标是 $x = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the absolute maximum value of $f(x) = 2x^3 - 9x^2 + 12x$ on $[0, 3]$. Give an integer.",
        "zh": "求 $f(x) = 2x^3 - 9x^2 + 12x$ 在 $[0, 3]$ 上的绝对最大值。请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "$f'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$, so the critical points are $x = 1$ and $x = 2$. Candidates: $f(0) = 0$, $f(1) = 5$, $f(2) = 4$, $f(3) = 9$. The absolute maximum value is $9$, at the endpoint $x = 3$.",
        "zh": "$f'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$，临界点为 $x = 1$ 和 $x = 2$。候选值：$f(0) = 0$，$f(1) = 5$，$f(2) = 4$，$f(3) = 9$，绝对最大值为 $9$，出现在端点 $x = 3$ 处。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the absolute maximum value of $f(x) = x^2 - 2x$ on $[0, 3]$. Give an integer.",
        "zh": "求 $f(x) = x^2 - 2x$ 在 $[0, 3]$ 上的绝对最大值。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$f'(x) = 2x - 2 = 0$ at $x = 1$. Candidates: $f(0) = 0$, $f(1) = -1$, $f(3) = 9 - 6 = 3$. The absolute maximum value is $3$, at the endpoint $x = 3$ — the interior critical point is actually the minimum.",
        "zh": "$f'(x) = 2x - 2 = 0$ 得 $x = 1$。候选值：$f(0) = 0$，$f(1) = -1$，$f(3) = 9 - 6 = 3$。绝对最大值为 $3$，出现在端点 $x = 3$ 处——内部临界点反而是最小值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the absolute minimum value of $f(x) = x^3 - 3x^2 - 45x$ on $[-4, 6]$. Give an integer.",
        "zh": "求 $f(x) = x^3 - 3x^2 - 45x$ 在 $[-4, 6]$ 上的绝对最小值。请填一个整数。"
      },
      "answer": "-175",
      "accept": [
        "-175.0"
      ],
      "explanation": {
        "en": "$f'(x) = 3x^2 - 6x - 45 = 3(x - 5)(x + 3)$, so the critical points are $x = -3$ and $x = 5$, both in $[-4, 6]$. Candidates: $f(-4) = 68$, $f(-3) = 81$, $f(5) = -175$, $f(6) = -162$. The absolute minimum value is $-175$.",
        "zh": "$f'(x) = 3x^2 - 6x - 45 = 3(x - 5)(x + 3)$，临界点为 $x = -3$ 和 $x = 5$，都在 $[-4, 6]$ 内。候选值：$f(-4) = 68$，$f(-3) = 81$，$f(5) = -175$，$f(6) = -162$，绝对最小值为 $-175$。"
      }
    }
  ],
  "unit-5-analytical-applications/optimization": [
    {
      "type": "mc",
      "question": {
        "en": "Two positive numbers have sum $30$. What is the maximum possible value of their product?",
        "zh": "两个正数之和为 $30$。它们乘积的最大可能值是多少？"
      },
      "choices": [
        "$225$",
        "$900$",
        "$150$",
        "$450$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Let the numbers be $x$ and $30 - x$, so $P(x) = 30x - x^2$. Then $P'(x) = 30 - 2x = 0$ at $x = 15$, and $P'$ changes from positive to negative there, so the maximum product is $15 \\cdot 15 = 225$. The value $900 = 30^2$ ignores the constraint entirely.",
        "zh": "设两数为 $x$ 与 $30 - x$，则 $P(x) = 30x - x^2$。$P'(x) = 30 - 2x = 0$ 得 $x = 15$，且 $P'$ 在此由正变负，故最大乘积为 $15 \\cdot 15 = 225$。$900 = 30^2$ 完全忽略了约束条件。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle has perimeter $40$. What is its maximum possible area?",
        "zh": "一个矩形的周长为 $40$。它的最大可能面积是多少？"
      },
      "choices": [
        "$400$",
        "$100$",
        "$160$",
        "$40$"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $l + w = 20$, the area $A(l) = l(20 - l)$ has $A'(l) = 20 - 2l = 0$ at $l = 10$, so the optimal rectangle is a $10 \\times 10$ square with area $100$. The value $400 = 20^2$ forgets that $20$ is the half-perimeter shared by length and width.",
        "zh": "由 $l + w = 20$，面积 $A(l) = l(20 - l)$，$A'(l) = 20 - 2l = 0$ 得 $l = 10$，最优矩形是 $10 \\times 10$ 的正方形，面积 $100$。$400 = 20^2$ 忘了 $20$ 是长与宽共享的半周长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangular pen is built against a straight wall (no fence needed along the wall) using $60$ meters of fencing for the other three sides. What is the maximum area, in square meters?",
        "zh": "一个矩形围栏一边靠直墙（靠墙一侧不需要篱笆），其余三边共用 $60$ 米篱笆。能围出的最大面积是多少平方米？"
      },
      "choices": [
        "$225$",
        "$900$",
        "$450$",
        "$300$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Let $x$ be each side perpendicular to the wall, so $A(x) = x(60 - 2x)$. Then $A'(x) = 60 - 4x = 0$ at $x = 15$, giving $A = 15 \\cdot 30 = 450$. The value $225$ comes from wrongly fencing all four sides as a $15 \\times 15$ square.",
        "zh": "设垂直于墙的两边各长 $x$，则 $A(x) = x(60 - 2x)$。$A'(x) = 60 - 4x = 0$ 得 $x = 15$，面积为 $15 \\cdot 30 = 450$。$225$ 是误按四边都围篱笆、边长 $15$ 的正方形算出的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An open-top box is made from an $18 \\times 18$ inch sheet by cutting equal squares of side $x$ from each corner and folding up the sides. What value of $x$ maximizes the volume?",
        "zh": "从一张 $18 \\times 18$ 英寸的纸板四角各剪去边长为 $x$ 的正方形并折起四边，做成一个无盖盒子。$x$ 取何值时体积最大？"
      },
      "choices": [
        "$x = 9$",
        "$x = 6$",
        "$x = 4$",
        "$x = 3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$V(x) = x(18 - 2x)^2$ on $(0, 9)$. Then $V'(x) = (18 - 2x)(18 - 6x)$, which is zero at $x = 3$ and $x = 9$. Since $x = 9$ gives zero volume (an endpoint), the maximum is at $x = 3$. The root $x = 9$ is extraneous.",
        "zh": "$V(x) = x(18 - 2x)^2$，定义域 $(0, 9)$。$V'(x) = (18 - 2x)(18 - 6x)$，零点为 $x = 3$ 和 $x = 9$。$x = 9$ 时体积为零（端点），故最大值在 $x = 3$ 处。$x = 9$ 是应当舍去的增根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $x > 0$, what is the minimum value of $f(x) = x + \\frac{9}{x}$?",
        "zh": "当 $x > 0$ 时，$f(x) = x + \\frac{9}{x}$ 的最小值是多少？"
      },
      "choices": [
        "$6$",
        "$3$",
        "$9$",
        "$18$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f'(x) = 1 - \\frac{9}{x^2} = 0$ gives $x = 3$ (rejecting $-3$ since $x > 0$). Because $f''(x) = \\frac{18}{x^3} > 0$ on the whole domain, $x = 3$ is the absolute minimum, with value $f(3) = 3 + 3 = 6$. The value $3$ is the location $x = 3$, not the minimum value.",
        "zh": "$f'(x) = 1 - \\frac{9}{x^2} = 0$ 得 $x = 3$（因 $x > 0$ 舍去 $-3$）。因为整个定义域上 $f''(x) = \\frac{18}{x^3} > 0$，故 $x = 3$ 是绝对最小值点，最小值为 $f(3) = 3 + 3 = 6$。$3$ 是位置 $x = 3$，不是最小值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On an open interval, a quantity $A(x)$ has exactly one critical point at $x = c$, and $A''(x) < 0$ for every $x$ in the domain. What can you conclude?",
        "zh": "在一个开区间上，量 $A(x)$ 只有一个临界点 $x = c$，且对定义域内每个 $x$ 都有 $A''(x) < 0$。可以得出什么结论？"
      },
      "choices": [
        "$A(c)$ is the absolute minimum",
        "$A(c)$ is the absolute maximum",
        "$A(c)$ is an inflection point",
        "nothing can be concluded"
      ],
      "answer": 1,
      "explanation": {
        "en": "A function that is concave down on its whole domain and has a single critical point attains its absolute maximum there — the graph is one concave-down hill. Global concavity upgrades the local result to an absolute one, so no endpoints need checking.",
        "zh": "在整个定义域上下凹且只有一个临界点的函数，在该点取得绝对最大值——图像就是一座下凹的单峰。全域凹凸性把局部结论升级为绝对结论，因此无需检查端点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two positive numbers have product $16$. What is the minimum possible value of their sum?",
        "zh": "两个正数的乘积为 $16$。它们之和的最小可能值是多少？"
      },
      "choices": [
        "$16$",
        "$4$",
        "$8$",
        "$32$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Let the numbers be $x$ and $\\frac{16}{x}$, so $S(x) = x + \\frac{16}{x}$. Then $S'(x) = 1 - \\frac{16}{x^2} = 0$ at $x = 4$, and $S'' > 0$ confirms a minimum, giving $S = 4 + 4 = 8$. The value $4$ is the location, not the sum.",
        "zh": "设两数为 $x$ 与 $\\frac{16}{x}$，则 $S(x) = x + \\frac{16}{x}$。$S'(x) = 1 - \\frac{16}{x^2} = 0$ 得 $x = 4$，且 $S'' > 0$ 确认为最小值，故 $S = 4 + 4 = 8$。$4$ 是位置，不是和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quantity $A(x)$ is defined on $(0, \\infty)$ with a single critical point at $x = c$. Which statement, by itself, is a complete justification that $A(c)$ is the absolute maximum?",
        "zh": "量 $A(x)$ 定义在 $(0, \\infty)$ 上，只有一个临界点 $x = c$。下列哪一项本身就足以构成 $A(c)$ 是绝对最大值的完整理由？"
      },
      "choices": [
        "$A'(c) = 0$",
        "$A(c) > A(1)$",
        "$A(c)$ exceeds the values at the endpoints",
        "$A'(x) > 0$ for $x < c$ and $A'(x) < 0$ for $x > c$"
      ],
      "answer": 3,
      "explanation": {
        "en": "If $A$ increases everywhere before $c$ and decreases everywhere after, then $A(c)$ beats every other value on the domain — a complete global argument. Merely stating $A'(c) = 0$ only identifies a candidate, and an open interval has no endpoints to evaluate.",
        "zh": "若 $A$ 在 $c$ 之前处处递增、之后处处递减，则 $A(c)$ 大于定义域上所有其他值——这是完整的全局论证。仅写 $A'(c) = 0$ 只找到候选点，而开区间没有端点可以代入。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle must enclose an area of $100$. What is the minimum possible perimeter?",
        "zh": "一个矩形须围出 $100$ 的面积。它的最小可能周长是多少？"
      },
      "choices": [
        "$40$",
        "$100$",
        "$20$",
        "$400$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $xy = 100$, the perimeter is $P(x) = 2x + \\frac{200}{x}$. Then $P'(x) = 2 - \\frac{200}{x^2} = 0$ gives $x^2 = 100$, so $x = 10$ and the optimal shape is a $10 \\times 10$ square with $P = 40$. Minimizing area-related perimeter always drives toward a square.",
        "zh": "由 $xy = 100$，周长为 $P(x) = 2x + \\frac{200}{x}$。$P'(x) = 2 - \\frac{200}{x^2} = 0$ 得 $x^2 = 100$，故 $x = 10$，最优形状是 $10 \\times 10$ 的正方形，$P = 40$。固定面积下周长最小总是趋向正方形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To find the point on a curve closest to a given point, which quantity is easiest to minimize?",
        "zh": "要找曲线上离给定点最近的点，最容易最小化的量是哪一个？"
      },
      "choices": [
        "the distance $D$ directly",
        "the squared distance $D^2$, since it has the same minimizer",
        "the $x$-coordinate of the point",
        "the slope of the curve"
      ],
      "answer": 1,
      "explanation": {
        "en": "Minimizing $D^2$ avoids differentiating a square root, and because $D \\ge 0$, the value of $x$ that minimizes $D^2$ also minimizes $D$. Minimizing the coordinate or the slope solves a different problem entirely.",
        "zh": "最小化 $D^2$ 可避免对根式求导；又因为 $D \\ge 0$，使 $D^2$ 最小的 $x$ 同样使 $D$ 最小。最小化坐标或斜率解决的是完全不同的问题。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An open-top box with a square base must have volume $32$. If the base side is $x$, the surface area is $S(x) = x^2 + \\frac{128}{x}$. What base side $x$ minimizes the surface area?",
        "zh": "一个方底无盖盒子体积须为 $32$。若底边为 $x$，则表面积为 $S(x) = x^2 + \\frac{128}{x}$。底边 $x$ 取何值时表面积最小？"
      },
      "choices": [
        "$x = 2$",
        "$x = 8$",
        "$x = 4$",
        "$x = 16$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$S'(x) = 2x - \\frac{128}{x^2} = 0$ gives $2x^3 = 128$, so $x^3 = 64$ and $x = 4$. Since $S''(x) = 2 + \\frac{256}{x^3} > 0$ for $x > 0$, this is the absolute minimum.",
        "zh": "$S'(x) = 2x - \\frac{128}{x^2} = 0$ 得 $2x^3 = 128$，故 $x^3 = 64$，$x = 4$。因为 $x > 0$ 时 $S''(x) = 2 + \\frac{256}{x^3} > 0$，故为绝对最小值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangular field is enclosed with $400$ meters of fencing on all four sides. What is the maximum area, in square meters?",
        "zh": "用 $400$ 米篱笆围一块四边都有篱笆的矩形田地。能围出的最大面积是多少平方米？"
      },
      "choices": [
        "$40000$",
        "$2500$",
        "$5000$",
        "$10000$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $l + w = 200$, the area $A(l) = l(200 - l)$ has $A'(l) = 200 - 2l = 0$ at $l = 100$, so the optimal shape is a $100 \\times 100$ square with area $10000$. The value $40000 = 200^2$ ignores that $200$ is the half-perimeter.",
        "zh": "由 $l + w = 200$，面积 $A(l) = l(200 - l)$，$A'(l) = 200 - 2l = 0$ 得 $l = 100$，最优形状是 $100 \\times 100$ 的正方形，面积 $10000$。$40000 = 200^2$ 忽略了 $200$ 是半周长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two positive numbers have sum $24$. Find the maximum possible value of their product. Give an integer.",
        "zh": "两个正数之和为 $24$。求它们乘积的最大可能值。请填一个整数。"
      },
      "answer": "144",
      "accept": [
        "144.0"
      ],
      "explanation": {
        "en": "Let the numbers be $x$ and $24 - x$, so $P(x) = 24x - x^2$ on $(0, 24)$. $P'(x) = 24 - 2x = 0$ at $x = 12$, where $P'$ changes from positive to negative, so the maximum product is $12 \\cdot 12 = 144$.",
        "zh": "设两数为 $x$ 与 $24 - x$，则 $P(x) = 24x - x^2$，定义域 $(0, 24)$。$P'(x) = 24 - 2x = 0$ 得 $x = 12$，$P'$ 在此由正变负，故最大乘积为 $12 \\cdot 12 = 144$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle has perimeter $24$. Find its maximum possible area. Give an integer.",
        "zh": "一个矩形的周长为 $24$。求它的最大可能面积。请填一个整数。"
      },
      "answer": "36",
      "accept": [
        "36.0"
      ],
      "explanation": {
        "en": "With $l + w = 12$, the area $A(l) = l(12 - l)$ has $A'(l) = 12 - 2l = 0$ at $l = 6$, so the optimal rectangle is a $6 \\times 6$ square with area $36$.",
        "zh": "由 $l + w = 12$，面积 $A(l) = l(12 - l)$，$A'(l) = 12 - 2l = 0$ 得 $l = 6$，最优矩形是 $6 \\times 6$ 的正方形，面积 $36$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An open-top box is made from a $6 \\times 6$ inch sheet by cutting equal squares of side $x$ from each corner and folding up the sides. Find the value of $x$ that maximizes the volume. Give an integer.",
        "zh": "从一张 $6 \\times 6$ 英寸的纸板四角各剪去边长为 $x$ 的正方形并折起四边，做成无盖盒子。求使体积最大的 $x$ 值。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "$V(x) = x(6 - 2x)^2$ on $(0, 3)$. Then $V'(x) = (6 - 2x)(6 - 6x)$, which is zero at $x = 1$ and $x = 3$. Since $x = 3$ gives zero volume (an endpoint), the maximum is at $x = 1$.",
        "zh": "$V(x) = x(6 - 2x)^2$，定义域 $(0, 3)$。$V'(x) = (6 - 2x)(6 - 6x)$，零点为 $x = 1$ 和 $x = 3$。$x = 3$ 时体积为零（端点），故最大值在 $x = 1$ 处。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x > 0$, find the minimum value of $f(x) = x + \\frac{16}{x}$. Give an integer.",
        "zh": "当 $x > 0$ 时，求 $f(x) = x + \\frac{16}{x}$ 的最小值。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$f'(x) = 1 - \\frac{16}{x^2} = 0$ gives $x = 4$ (rejecting $-4$). Since $f''(x) = \\frac{32}{x^3} > 0$ on the domain, $x = 4$ is the absolute minimum, with value $f(4) = 4 + 4 = 8$.",
        "zh": "$f'(x) = 1 - \\frac{16}{x^2} = 0$ 得 $x = 4$（舍去 $-4$）。因为定义域上 $f''(x) = \\frac{32}{x^3} > 0$，故 $x = 4$ 是绝对最小值点，最小值为 $f(4) = 4 + 4 = 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangular pen is built against a river (no fence needed along the river) using $80$ meters of fencing for the other three sides. Find the maximum area, in square meters. Give an integer.",
        "zh": "一个矩形围栏一边靠河（靠河一侧不需要篱笆），其余三边共用 $80$ 米篱笆。求最大面积，单位平方米。请填一个整数。"
      },
      "answer": "800",
      "accept": [
        "800.0"
      ],
      "explanation": {
        "en": "Let $x$ be each side perpendicular to the river, so $A(x) = x(80 - 2x)$. $A'(x) = 80 - 4x = 0$ at $x = 20$, giving $A = 20 \\cdot 40 = 800$ square meters.",
        "zh": "设垂直于河的两边各长 $x$，则 $A(x) = x(80 - 2x)$。$A'(x) = 80 - 4x = 0$ 得 $x = 20$，面积为 $20 \\cdot 40 = 800$ 平方米。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the minimum SQUARED distance from the point $(0, 1)$ to the parabola $y = x^2$. Give a fraction a/b.",
        "zh": "求点 $(0, 1)$ 到抛物线 $y = x^2$ 的最短距离的平方。答案写成分数 a/b 的形式。"
      },
      "answer": "3/4",
      "accept": [
        "0.75"
      ],
      "explanation": {
        "en": "For a point $(x, x^2)$, $D(x) = x^2 + (x^2 - 1)^2$. Then $D'(x) = 2x + 2(x^2 - 1)(2x) = 2x(2x^2 - 1)$, with critical points $x = 0$ and $x = \\pm\\frac{1}{\\sqrt{2}}$. At $x = 0$, $D = 1$ is a local max; at $x^2 = \\frac{1}{2}$, $D = \\frac{1}{2} + \\left(\\frac{1}{2} - 1\\right)^2 = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$, the minimum.",
        "zh": "对点 $(x, x^2)$，$D(x) = x^2 + (x^2 - 1)^2$。$D'(x) = 2x + 2(x^2 - 1)(2x) = 2x(2x^2 - 1)$，临界点为 $x = 0$ 和 $x = \\pm\\frac{1}{\\sqrt{2}}$。在 $x = 0$ 处 $D = 1$ 为局部极大；在 $x^2 = \\frac{1}{2}$ 处 $D = \\frac{1}{2} + \\left(\\frac{1}{2} - 1\\right)^2 = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$，为最小值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Positive numbers $x$ and $y$ satisfy $x + 2y = 12$. Find the maximum possible value of the product $xy$. Give an integer.",
        "zh": "正数 $x$ 与 $y$ 满足 $x + 2y = 12$。求乘积 $xy$ 的最大可能值。请填一个整数。"
      },
      "answer": "18",
      "accept": [
        "18.0"
      ],
      "explanation": {
        "en": "From the constraint, $y = \\frac{12 - x}{2}$, so $P(x) = x \\cdot \\frac{12 - x}{2} = \\frac{12x - x^2}{2}$. $P'(x) = \\frac{12 - 2x}{2} = 0$ at $x = 6$, giving $y = 3$ and $xy = 6 \\cdot 3 = 18$.",
        "zh": "由约束 $y = \\frac{12 - x}{2}$，故 $P(x) = x \\cdot \\frac{12 - x}{2} = \\frac{12x - x^2}{2}$。$P'(x) = \\frac{12 - 2x}{2} = 0$ 得 $x = 6$，则 $y = 3$，$xy = 6 \\cdot 3 = 18$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle must enclose an area of $36$. Find the minimum possible perimeter. Give an integer.",
        "zh": "一个矩形须围出 $36$ 的面积。求它的最小可能周长。请填一个整数。"
      },
      "answer": "24",
      "accept": [
        "24.0"
      ],
      "explanation": {
        "en": "With $xy = 36$, the perimeter is $P(x) = 2x + \\frac{72}{x}$. $P'(x) = 2 - \\frac{72}{x^2} = 0$ gives $x^2 = 36$, so $x = 6$ and the optimal shape is a $6 \\times 6$ square with $P = 24$.",
        "zh": "由 $xy = 36$，周长为 $P(x) = 2x + \\frac{72}{x}$。$P'(x) = 2 - \\frac{72}{x^2} = 0$ 得 $x^2 = 36$，故 $x = 6$，最优形状是 $6 \\times 6$ 的正方形，$P = 24$。"
      }
    }
  ],
  "unit-6-integration/riemann-sums-and-accumulation": [
    {
      "type": "mc",
      "question": {
        "en": "A table gives $f(0)=4$, $f(3)=7$, $f(6)=9$, $f(9)=12$. Using three equal subintervals, the RIGHT Riemann sum for $\\int_0^9 f(x)\\,dx$ is",
        "zh": "表格给出 $f(0)=4$、$f(3)=7$、$f(6)=9$、$f(9)=12$。用三个等宽子区间，$\\int_0^9 f(x)\\,dx$ 的右黎曼和是"
      },
      "choices": [
        "$60$",
        "$72$",
        "$84$",
        "$96$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Right endpoints are $x=3,6,9$ with $\\Delta x=3$: $3(7+9+12)=84$. Using the left endpoints instead gives $60$; averaging the two gives the trapezoidal value $72$.",
        "zh": "右端点为 $x=3,6,9$，$\\Delta x=3$：$3(7+9+12)=84$。改用左端点得 $60$；两者取平均得梯形值 $72$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the same table ($f(0)=4$, $f(3)=7$, $f(6)=9$, $f(9)=12$) and three equal subintervals, find the LEFT Riemann sum for $\\int_0^9 f(x)\\,dx$. Give an integer.",
        "zh": "仍用同一表格（$f(0)=4$、$f(3)=7$、$f(6)=9$、$f(9)=12$）和三个等宽子区间，求 $\\int_0^9 f(x)\\,dx$ 的左黎曼和。请填一个整数。"
      },
      "answer": "60",
      "accept": [
        "60.0"
      ],
      "explanation": {
        "en": "Left endpoints are $x=0,3,6$ with $\\Delta x=3$: $3(4+7+9)=3(20)=60$. The left sum drops the last value $f(9)$ and includes the first value $f(0)$.",
        "zh": "左端点为 $x=0,3,6$，$\\Delta x=3$：$3(4+7+9)=3(20)=60$。左和丢掉最后一个值 $f(9)$，而包含第一个值 $f(0)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The values $f(1)=3$, $f(3)=5$, $f(5)=9$ are the function values at the MIDPOINTS of the subintervals $[0,2]$, $[2,4]$, $[4,6]$. The midpoint approximation of $\\int_0^6 f(x)\\,dx$ is",
        "zh": "值 $f(1)=3$、$f(3)=5$、$f(5)=9$ 是子区间 $[0,2]$、$[2,4]$、$[4,6]$ 中点处的函数值。$\\int_0^6 f(x)\\,dx$ 的中点近似值是"
      },
      "choices": [
        "$34$",
        "$17$",
        "$30$",
        "$36$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each rectangle has width $\\Delta x=2$ and height equal to the midpoint value: $2(3+5+9)=2(17)=34$. Forgetting to multiply by the width $2$ leaves the bare sum $17$.",
        "zh": "每个矩形宽 $\\Delta x=2$，高为中点值：$2(3+5+9)=2(17)=34$。忘记乘宽度 $2$ 就只剩裸和 $17$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Water enters a tank at rate $R(t)$ L/min with $R(0)=6$, $R(2)=10$, $R(5)=16$, $R(9)=20$. Use a trapezoidal sum over the three subintervals shown to approximate $\\int_0^9 R(t)\\,dt$. Give an integer.",
        "zh": "水以 $R(t)$ 升/分钟流入水箱，$R(0)=6$、$R(2)=10$、$R(5)=16$、$R(9)=20$。用表格给出的三个子区间构造梯形和，近似 $\\int_0^9 R(t)\\,dt$。请填一个整数。"
      },
      "answer": "127",
      "accept": [
        "127.0"
      ],
      "explanation": {
        "en": "The widths $2,3,4$ are unequal, so add trapezoids separately: $\\frac{6+10}{2}(2)+\\frac{10+16}{2}(3)+\\frac{16+20}{2}(4)=16+39+72=127$. Using one common $\\Delta x$ here would be an error.",
        "zh": "宽度 $2,3,4$ 不相等，应逐段累加梯形：$\\frac{6+10}{2}(2)+\\frac{10+16}{2}(3)+\\frac{16+20}{2}(4)=16+39+72=127$。在此用统一的 $\\Delta x$ 会出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f$ is positive and DECREASING on $[a,b]$, then the right Riemann sum for $\\int_a^b f(x)\\,dx$ is",
        "zh": "若 $f$ 在 $[a,b]$ 上为正且递减，则 $\\int_a^b f(x)\\,dx$ 的右黎曼和是"
      },
      "choices": [
        "an overestimate",
        "an underestimate",
        "exactly equal to the integral",
        "impossible to determine"
      ],
      "answer": 1,
      "explanation": {
        "en": "For a decreasing function the right endpoint is the lowest point of each subinterval, so every rectangle lies below the curve and the right sum underestimates. For an increasing function this reverses.",
        "zh": "对递减函数，右端点是每个子区间上的最低点，所以每个矩形都在曲线下方，右和低估。对递增函数则相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f$ is CONCAVE DOWN on $[a,b]$, then the trapezoidal approximation of $\\int_a^b f(x)\\,dx$ is",
        "zh": "若 $f$ 在 $[a,b]$ 上下凹（凹向下），则 $\\int_a^b f(x)\\,dx$ 的梯形近似值是"
      },
      "choices": [
        "an overestimate",
        "exactly equal to the integral",
        "the same as the midpoint sum",
        "an underestimate"
      ],
      "answer": 3,
      "explanation": {
        "en": "When $f$ is concave down the connecting chords lie below the curve, so each trapezoid sits under the graph and the trapezoidal sum underestimates. Concave up would make it an overestimate.",
        "zh": "当 $f$ 下凹时，连接弦位于曲线下方，故每个梯形都在图象之下，梯形和低估。若上凹则会高估。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which definite integral equals $\\displaystyle \\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{2}{n}\\left(1+\\frac{2k}{n}\\right)^3$?",
        "zh": "下列哪个定积分等于 $\\displaystyle \\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{2}{n}\\left(1+\\frac{2k}{n}\\right)^3$？"
      },
      "choices": [
        "$\\int_0^2 x^3\\,dx$",
        "$\\int_1^3 x^3\\,dx$",
        "$\\int_1^3 2x^3\\,dx$",
        "$\\int_0^3 x^3\\,dx$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Read $\\Delta x=\\frac{2}{n}$, so $b-a=2$. Inside, $1+k\\,\\Delta x$ matches $a+k\\,\\Delta x$ with $a=1$, giving $b=3$ and $f(x)=x^3$. The factor $2$ is already inside $\\Delta x$; do not write it again.",
        "zh": "读出 $\\Delta x=\\frac{2}{n}$，故 $b-a=2$。内部 $1+k\\,\\Delta x$ 与 $a+k\\,\\Delta x$ 对照得 $a=1$，于是 $b=3$，$f(x)=x^3$。因子 $2$ 已包含在 $\\Delta x$ 中，不要重复写。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which definite integral equals $\\displaystyle \\lim_{n\\to\\infty}\\frac{1}{n}\\sum_{k=1}^{n}\\left(\\frac{k}{n}\\right)^2$?",
        "zh": "下列哪个定积分等于 $\\displaystyle \\lim_{n\\to\\infty}\\frac{1}{n}\\sum_{k=1}^{n}\\left(\\frac{k}{n}\\right)^2$？"
      },
      "choices": [
        "$\\int_0^1 x^3\\,dx$",
        "$\\int_1^2 x^2\\,dx$",
        "$\\int_0^1 x^2\\,dx$",
        "$\\int_0^n x^2\\,dx$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $\\Delta x=\\frac{1}{n}$ so $b-a=1$, and $\\frac{k}{n}=0+k\\,\\Delta x$ gives $a=0$, $b=1$. The integrand is $x^2$, so the limit is $\\int_0^1 x^2\\,dx$.",
        "zh": "此处 $\\Delta x=\\frac{1}{n}$，故 $b-a=1$，而 $\\frac{k}{n}=0+k\\,\\Delta x$ 给出 $a=0$、$b=1$。被积函数为 $x^2$，故极限为 $\\int_0^1 x^2\\,dx$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $g(x)=\\int_1^x (2t+1)\\,dt$. Find $g'(4)$. Give an integer.",
        "zh": "设 $g(x)=\\int_1^x (2t+1)\\,dt$。求 $g'(4)$。请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "By FTC Part 2, $g'(x)=2x+1$ — just substitute the upper limit into the integrand. So $g'(4)=2(4)+1=9$. The constant lower limit $1$ has no effect on the derivative.",
        "zh": "由微积分基本定理第二部分，$g'(x)=2x+1$——直接把上限代入被积函数即可。所以 $g'(4)=2(4)+1=9$。常数下限 $1$ 对导数没有影响。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\displaystyle \\frac{d}{dx}\\int_0^{x^2}\\sin t\\,dt$?",
        "zh": "$\\displaystyle \\frac{d}{dx}\\int_0^{x^2}\\sin t\\,dt$ 等于多少？"
      },
      "choices": [
        "$\\sin(x^2)$",
        "$\\sin(2x)$",
        "$2x\\cos(x^2)$",
        "$2x\\sin(x^2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "FTC with the chain rule: substitute the upper limit into $\\sin t$ to get $\\sin(x^2)$, then multiply by $\\frac{d}{dx}(x^2)=2x$, giving $2x\\sin(x^2)$. Omitting the factor $2x$ from the upper limit is the common slip.",
        "zh": "基本定理加链式法则：把上限代入 $\\sin t$ 得 $\\sin(x^2)$，再乘以 $\\frac{d}{dx}(x^2)=2x$，得 $2x\\sin(x^2)$。漏掉来自上限的因子 $2x$ 是常见失误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $F(x)=\\int_2^{x^2}\\sqrt{t}\\,dt$. Find $F'(3)$. Give an integer.",
        "zh": "设 $F(x)=\\int_2^{x^2}\\sqrt{t}\\,dt$。求 $F'(3)$。请填一个整数。"
      },
      "answer": "18",
      "accept": [
        "18.0"
      ],
      "explanation": {
        "en": "FTC with the chain rule: $F'(x)=\\sqrt{x^2}\\cdot 2x$. For $x=3$, $\\sqrt{9}=3$ and $2x=6$, so $F'(3)=3\\cdot 6=18$. Substitute the upper limit into the integrand — do not integrate first.",
        "zh": "基本定理加链式法则：$F'(x)=\\sqrt{x^2}\\cdot 2x$。当 $x=3$ 时 $\\sqrt{9}=3$、$2x=6$，故 $F'(3)=3\\cdot 6=18$。把上限代入被积函数即可，不要先积分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\int_0^7 f(x)\\,dx = 18$ and $\\int_0^4 f(x)\\,dx = 10$, find $\\int_4^7 f(x)\\,dx$. Give an integer.",
        "zh": "已知 $\\int_0^7 f(x)\\,dx = 18$ 和 $\\int_0^4 f(x)\\,dx = 10$，求 $\\int_4^7 f(x)\\,dx$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "By additivity, $\\int_4^7 f = \\int_0^7 f - \\int_0^4 f = 18 - 10 = 8$. Subtracting in the wrong order would give $-8$.",
        "zh": "由区间可加性，$\\int_4^7 f = \\int_0^7 f - \\int_0^4 f = 18 - 10 = 8$。若相减顺序颠倒则会得到 $-8$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $\\int_2^5 f(x)\\,dx = 6$, evaluate $\\int_5^2 3f(x)\\,dx$.",
        "zh": "已知 $\\int_2^5 f(x)\\,dx = 6$，求 $\\int_5^2 3f(x)\\,dx$。"
      },
      "choices": [
        "$18$",
        "$-18$",
        "$-6$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Reversing the limits flips the sign: $\\int_5^2 f = -6$. Then linearity pulls out the constant: $3(-6)=-18$. Forgetting the sign flip from the reversed limits gives $+18$.",
        "zh": "交换上下限改变符号：$\\int_5^2 f = -6$。再由线性性提出常数：$3(-6)=-18$。忘记交换上下限带来的变号就会得到 $+18$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $\\int_1^4 f(x)\\,dx = 5$, evaluate $\\int_1^4 [3f(x)-2]\\,dx$. Give an integer.",
        "zh": "已知 $\\int_1^4 f(x)\\,dx = 5$，求 $\\int_1^4 [3f(x)-2]\\,dx$。请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0"
      ],
      "explanation": {
        "en": "Linearity: $3\\int_1^4 f - \\int_1^4 2\\,dx = 3(5) - 2(4-1) = 15 - 6 = 9$. Note $\\int_1^4 2\\,dx$ is the constant $2$ times the interval length $3$, not just $2$.",
        "zh": "线性性：$3\\int_1^4 f - \\int_1^4 2\\,dx = 3(5) - 2(4-1) = 15 - 6 = 9$。注意 $\\int_1^4 2\\,dx$ 是常数 $2$ 乘区间长度 $3$，而不是只等于 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $g(x)=\\int_0^x (t^2-9)\\,dt$. On which set is $g$ increasing?",
        "zh": "设 $g(x)=\\int_0^x (t^2-9)\\,dt$。$g$ 在下列哪个集合上递增？"
      },
      "choices": [
        "$(-3,3)$",
        "$(0,3)$ only",
        "$(-\\infty,-3)\\cup(3,\\infty)$",
        "$(3,\\infty)$ only"
      ],
      "answer": 2,
      "explanation": {
        "en": "$g'(x)=x^2-9=(x-3)(x+3)$, which is positive exactly when $|x|>3$, so $g$ increases on $(-\\infty,-3)\\cup(3,\\infty)$. The interval $(-3,3)$ is where $g$ decreases.",
        "zh": "$g'(x)=x^2-9=(x-3)(x+3)$，恰在 $|x|>3$ 时为正，故 $g$ 在 $(-\\infty,-3)\\cup(3,\\infty)$ 上递增。区间 $(-3,3)$ 是 $g$ 递减的区间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $g(x)=\\int_0^x f(t)\\,dt$ where $f(t)=(t-1)(t-4)$. At which $x$ does $g$ have a LOCAL MAXIMUM?",
        "zh": "设 $g(x)=\\int_0^x f(t)\\,dt$，其中 $f(t)=(t-1)(t-4)$。$g$ 在哪个 $x$ 处取得局部最大值？"
      },
      "choices": [
        "$x=1$",
        "$x=4$",
        "$x=0$",
        "both $x=1$ and $x=4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $g'=f$, a local max occurs where $f$ changes from positive to negative. $f(t)=(t-1)(t-4)$ is positive for $t<1$ and negative on $(1,4)$, so the sign changes $+$ to $-$ at $x=1$. At $x=4$, $f$ goes $-$ to $+$, giving a local minimum.",
        "zh": "因为 $g'=f$，局部最大值出现在 $f$ 由正变负处。$f(t)=(t-1)(t-4)$ 在 $t<1$ 时为正、在 $(1,4)$ 上为负，故符号在 $x=1$ 处由正变负。在 $x=4$ 处 $f$ 由负变正，给出局部最小值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_2^7 5\\,dx$. Give an integer.",
        "zh": "计算 $\\int_2^7 5\\,dx$。请填一个整数。"
      },
      "answer": "25",
      "accept": [
        "25.0"
      ],
      "explanation": {
        "en": "The integral of a constant is the constant times the interval length: $\\int_2^7 5\\,dx = 5(7-2)=25$. Writing just $5$ ignores the width of the interval.",
        "zh": "常数的积分等于该常数乘区间长度：$\\int_2^7 5\\,dx = 5(7-2)=25$。只写 $5$ 就忽略了区间的宽度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which definite integral equals $\\displaystyle \\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{5}{n}\\,e^{\\,2+\\frac{5k}{n}}$?",
        "zh": "下列哪个定积分等于 $\\displaystyle \\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{5}{n}\\,e^{\\,2+\\frac{5k}{n}}$？"
      },
      "choices": [
        "$\\int_0^5 e^x\\,dx$",
        "$\\int_2^7 e^x\\,dx$",
        "$\\int_2^7 5e^x\\,dx$",
        "$\\int_0^7 e^x\\,dx$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Here $\\Delta x=\\frac{5}{n}$ so $b-a=5$, and $2+k\\,\\Delta x$ gives $a=2$, hence $b=7$ with $f(x)=e^x$. The factor $5$ belongs to $\\Delta x$ and must not be multiplied in again.",
        "zh": "此处 $\\Delta x=\\frac{5}{n}$，故 $b-a=5$，而 $2+k\\,\\Delta x$ 给出 $a=2$，于是 $b=7$，$f(x)=e^x$。因子 $5$ 属于 $\\Delta x$，不能再乘一次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A table gives $f(0)=1$, $f(2)=4$, $f(4)=5$, $f(6)=6$, $f(8)=8$. Using four equal subintervals, find the trapezoidal approximation of $\\int_0^8 f(x)\\,dx$. Give an integer.",
        "zh": "表格给出 $f(0)=1$、$f(2)=4$、$f(4)=5$、$f(6)=6$、$f(8)=8$。用四个等宽子区间，求 $\\int_0^8 f(x)\\,dx$ 的梯形近似值。请填一个整数。"
      },
      "answer": "39",
      "accept": [
        "39.0"
      ],
      "explanation": {
        "en": "With $\\Delta x=2$: $T=\\frac{2}{2}[1+2(4)+2(5)+2(6)+8]=1+8+10+12+8=39$. The interior values are doubled and the two endpoints counted once.",
        "zh": "取 $\\Delta x=2$：$T=\\frac{2}{2}[1+2(4)+2(5)+2(6)+8]=1+8+10+12+8=39$。内部各值乘 $2$，两个端点各计一次。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $g(x)=\\int_0^x f(t)\\,dt$. The graph of $g$ has an INFLECTION POINT at a value of $x$ where $f$ has",
        "zh": "设 $g(x)=\\int_0^x f(t)\\,dt$。$g$ 的图象在某个 $x$ 处有拐点，当且仅当 $f$ 在该处"
      },
      "choices": [
        "a local maximum or minimum (where $f$ changes direction)",
        "a zero",
        "a positive value",
        "a vertical asymptote"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $g'=f$, we have $g''=f'$. An inflection point of $g$ requires $g''=f'$ to change sign, which happens exactly where $f$ turns around — a local extremum of $f$. A mere zero of $f$ marks an extremum of $g$, not an inflection point.",
        "zh": "因为 $g'=f$，所以 $g''=f'$。$g$ 的拐点要求 $g''=f'$ 变号，这恰好发生在 $f$ 改变增减方向处——即 $f$ 的局部极值处。$f$ 的零点只标记 $g$ 的极值，而不是拐点。"
      }
    }
  ],
  "unit-6-integration/ftc-u-substitution-recap": [
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_1^2 3x^2\\,dx$. Give an integer.",
        "zh": "计算 $\\int_1^2 3x^2\\,dx$。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0"
      ],
      "explanation": {
        "en": "An antiderivative of $3x^2$ is $x^3$, so by FTC Part 1 the value is $2^3-1^3=8-1=7$.",
        "zh": "$3x^2$ 的一个原函数是 $x^3$，由基本定理第一部分，积分值为 $2^3-1^3=8-1=7$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int_0^3 (2x+1)\\,dx$.",
        "zh": "计算 $\\int_0^3 (2x+1)\\,dx$。"
      },
      "choices": [
        "$9$",
        "$15$",
        "$6$",
        "$12$"
      ],
      "answer": 3,
      "explanation": {
        "en": "An antiderivative is $x^2+x$, so the value is $(9+3)-(0+0)=12$. Forgetting the $+x$ term from the constant $1$ gives $9$.",
        "zh": "一个原函数是 $x^2+x$，故积分值为 $(9+3)-(0+0)=12$。漏掉来自常数 $1$ 的 $+x$ 项就得 $9$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $F(x)=\\int_0^x \\sqrt{t^3+1}\\,dt$, then $F'(2)=$",
        "zh": "若 $F(x)=\\int_0^x \\sqrt{t^3+1}\\,dt$，则 $F'(2)=$"
      },
      "choices": [
        "$3$",
        "$9$",
        "$\\sqrt{5}$",
        "$\\sqrt{8}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "FTC Part 2: $F'(x)=\\sqrt{x^3+1}$, so $F'(2)=\\sqrt{8+1}=\\sqrt{9}=3$. Just substitute into the integrand — no integration required.",
        "zh": "基本定理第二部分：$F'(x)=\\sqrt{x^3+1}$，故 $F'(2)=\\sqrt{8+1}=\\sqrt{9}=3$。直接代入被积函数即可，无需积分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\displaystyle \\frac{d}{dx}\\int_1^{x^2}\\cos t\\,dt =$",
        "zh": "$\\displaystyle \\frac{d}{dx}\\int_1^{x^2}\\cos t\\,dt =$"
      },
      "choices": [
        "$\\cos(x^2)$",
        "$\\cos(2x)$",
        "$2x\\cos(x^2)$",
        "$2x\\sin(x^2)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "FTC Part 2 with the chain rule: substitute the upper limit into $\\cos t$ to get $\\cos(x^2)$, then multiply by $\\frac{d}{dx}(x^2)=2x$. Omitting that factor leaves $\\cos(x^2)$.",
        "zh": "基本定理第二部分加链式法则：把上限代入 $\\cos t$ 得 $\\cos(x^2)$，再乘以 $\\frac{d}{dx}(x^2)=2x$。漏掉该因子就只剩 $\\cos(x^2)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $F(x)=\\int_0^{x^3} e^t\\,dt$, find $F'(0)$. Give an integer.",
        "zh": "若 $F(x)=\\int_0^{x^3} e^t\\,dt$，求 $F'(0)$。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "By FTC Part 2 with the chain rule, $F'(x)=e^{x^3}\\cdot 3x^2$. At $x=0$ the factor $3x^2=0$, so $F'(0)=e^0\\cdot 0=0$.",
        "zh": "由基本定理第二部分加链式法则，$F'(x)=e^{x^3}\\cdot 3x^2$。当 $x=0$ 时因子 $3x^2=0$，故 $F'(0)=e^0\\cdot 0=0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which substitution best evaluates $\\int x^3(x^4+2)^5\\,dx$?",
        "zh": "计算 $\\int x^3(x^4+2)^5\\,dx$ 时最合适的换元是哪一个？"
      },
      "choices": [
        "$u=x^4+2$",
        "$u=x^3$",
        "$u=x^4$",
        "$u=(x^4+2)^5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $u=x^4+2$, $du=4x^3\\,dx$, so the leftover $x^3\\,dx=\\frac{1}{4}du$ is absorbed exactly. Choose $u$ so that $du$ matches the remaining factor.",
        "zh": "取 $u=x^4+2$，则 $du=4x^3\\,dx$，剩下的 $x^3\\,dx=\\frac{1}{4}du$ 恰好被吸收。要选 $u$ 使 $du$ 与剩余因子匹配。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After the substitution $u=x^2+1$, the definite integral $\\int_0^2 2x(x^2+1)^3\\,dx$ becomes",
        "zh": "经换元 $u=x^2+1$ 后，定积分 $\\int_0^2 2x(x^2+1)^3\\,dx$ 变为"
      },
      "choices": [
        "$\\int_0^2 u^3\\,du$",
        "$\\int_0^4 u^3\\,du$",
        "$\\int_1^5 2u^3\\,du$",
        "$\\int_1^5 u^3\\,du$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $u=x^2+1$, $du=2x\\,dx$ absorbs the factor $2x$ exactly. Convert the limits: $x=0\\Rightarrow u=1$ and $x=2\\Rightarrow u=5$. Keeping the old $x$-limits is a classic error.",
        "zh": "取 $u=x^2+1$，$du=2x\\,dx$ 恰好吸收因子 $2x$。换限：$x=0\\Rightarrow u=1$，$x=2\\Rightarrow u=5$。保留原来的 $x$ 上下限是典型错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^2 2x(x^2+1)^3\\,dx$. Give an integer.",
        "zh": "计算 $\\int_0^2 2x(x^2+1)^3\\,dx$。请填一个整数。"
      },
      "answer": "156",
      "accept": [
        "156.0"
      ],
      "explanation": {
        "en": "Let $u=x^2+1$ ($u:1\\to5$): $\\int_1^5 u^3\\,du=\\left[\\frac{u^4}{4}\\right]_1^5=\\frac{625-1}{4}=\\frac{624}{4}=156$.",
        "zh": "令 $u=x^2+1$（$u:1\\to5$）：$\\int_1^5 u^3\\,du=\\left[\\frac{u^4}{4}\\right]_1^5=\\frac{625-1}{4}=\\frac{624}{4}=156$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^1 x^2(x^3+1)^2\\,dx$. Give your answer as a fraction a/b.",
        "zh": "计算 $\\int_0^1 x^2(x^3+1)^2\\,dx$。答案写成分数 a/b 的形式。"
      },
      "answer": "7/9",
      "accept": [
        "7 / 9"
      ],
      "explanation": {
        "en": "Let $u=x^3+1$, $du=3x^2\\,dx$ ($u:1\\to2$): $\\frac{1}{3}\\int_1^2 u^2\\,du=\\frac{1}{3}\\left[\\frac{u^3}{3}\\right]_1^2=\\frac{1}{9}(8-1)=\\frac{7}{9}$.",
        "zh": "令 $u=x^3+1$，$du=3x^2\\,dx$（$u:1\\to2$）：$\\frac{1}{3}\\int_1^2 u^2\\,du=\\frac{1}{3}\\left[\\frac{u^3}{3}\\right]_1^2=\\frac{1}{9}(8-1)=\\frac{7}{9}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int \\sin^3 x\\cos x\\,dx$.",
        "zh": "计算 $\\int \\sin^3 x\\cos x\\,dx$。"
      },
      "choices": [
        "$\\frac{\\cos^4 x}{4}+C$",
        "$\\frac{\\sin^4 x}{4}+C$",
        "$-\\frac{\\sin^4 x}{4}+C$",
        "$\\frac{\\sin^2 x}{2}+C$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Let $u=\\sin x$, $du=\\cos x\\,dx$: $\\int u^3\\,du=\\frac{u^4}{4}=\\frac{\\sin^4 x}{4}+C$. Differentiating the exponent incorrectly gives the $\\sin^2 x$ form.",
        "zh": "令 $u=\\sin x$，$du=\\cos x\\,dx$：$\\int u^3\\,du=\\frac{u^4}{4}=\\frac{\\sin^4 x}{4}+C$。把指数处理错就会得到 $\\sin^2 x$ 那种形式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^{\\pi/2}\\sin x\\cos x\\,dx$. Give your answer as a fraction a/b.",
        "zh": "计算 $\\int_0^{\\pi/2}\\sin x\\cos x\\,dx$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/2",
      "accept": [
        "0.5",
        "1 / 2"
      ],
      "explanation": {
        "en": "Let $u=\\sin x$, $du=\\cos x\\,dx$. Limits become $u=0$ to $u=1$: $\\int_0^1 u\\,du=\\left[\\frac{u^2}{2}\\right]_0^1=\\frac{1}{2}$.",
        "zh": "令 $u=\\sin x$，$du=\\cos x\\,dx$，上下限变为 $u=0$ 到 $u=1$：$\\int_0^1 u\\,du=\\left[\\frac{u^2}{2}\\right]_0^1=\\frac{1}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int_1^e \\frac{1}{x}\\,dx$.",
        "zh": "计算 $\\int_1^e \\frac{1}{x}\\,dx$。"
      },
      "choices": [
        "$e$",
        "$0$",
        "$1$",
        "$e-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "An antiderivative of $\\frac{1}{x}$ is $\\ln x$, so the value is $\\ln e-\\ln 1=1-0=1$. Treating $\\frac{1}{x}$ like a power and getting $e-1$ is a common mistake.",
        "zh": "$\\frac{1}{x}$ 的一个原函数是 $\\ln x$，故积分值为 $\\ln e-\\ln 1=1-0=1$。把 $\\frac{1}{x}$ 当作幂函数处理得到 $e-1$ 是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int_0^{\\ln 2} e^x\\,dx$.",
        "zh": "计算 $\\int_0^{\\ln 2} e^x\\,dx$。"
      },
      "choices": [
        "$2$",
        "$1$",
        "$\\ln 2$",
        "$e$"
      ],
      "answer": 1,
      "explanation": {
        "en": "An antiderivative of $e^x$ is $e^x$, so the value is $e^{\\ln 2}-e^0=2-1=1$. Recall $e^{\\ln 2}=2$.",
        "zh": "$e^x$ 的一个原函数是 $e^x$，故积分值为 $e^{\\ln 2}-e^0=2-1=1$。注意 $e^{\\ln 2}=2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int e^{2x}\\,dx$.",
        "zh": "计算 $\\int e^{2x}\\,dx$。"
      },
      "choices": [
        "$e^{2x}+C$",
        "$2e^{2x}+C$",
        "$\\frac{1}{x}e^{2x}+C$",
        "$\\frac{1}{2}e^{2x}+C$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Let $u=2x$, $du=2\\,dx$: $\\int e^{2x}\\,dx=\\frac{1}{2}\\int e^u\\,du=\\frac{1}{2}e^{2x}+C$. The inner derivative $2$ divides the result, not multiplies it.",
        "zh": "令 $u=2x$，$du=2\\,dx$：$\\int e^{2x}\\,dx=\\frac{1}{2}\\int e^u\\,du=\\frac{1}{2}e^{2x}+C$。内层导数 $2$ 是除到结果上，而不是乘上去。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_1^4 \\frac{1}{\\sqrt{x}}\\,dx$. Give an integer.",
        "zh": "计算 $\\int_1^4 \\frac{1}{\\sqrt{x}}\\,dx$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "Write $\\frac{1}{\\sqrt{x}}=x^{-1/2}$; an antiderivative is $2x^{1/2}=2\\sqrt{x}$. So the value is $2\\sqrt{4}-2\\sqrt{1}=4-2=2$.",
        "zh": "把 $\\frac{1}{\\sqrt{x}}=x^{-1/2}$；一个原函数是 $2x^{1/2}=2\\sqrt{x}$。故积分值为 $2\\sqrt{4}-2\\sqrt{1}=4-2=2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\displaystyle \\frac{d}{dx}\\int_x^3 \\sin t\\,dt =$",
        "zh": "$\\displaystyle \\frac{d}{dx}\\int_x^3 \\sin t\\,dt =$"
      },
      "choices": [
        "$\\sin x$",
        "$-\\sin x$",
        "$\\cos x$",
        "$-\\cos x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The variable is the LOWER limit. Flip the limits first: $\\int_x^3=-\\int_3^x$, so the derivative is $-\\sin x$. Missing the sign from the reversed limit is the usual error.",
        "zh": "变量在下限。先交换上下限：$\\int_x^3=-\\int_3^x$，故导数为 $-\\sin x$。漏掉交换上下限带来的负号是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^{\\pi/2}\\cos x\\,e^{\\sin x}\\,dx$. Write your answer as an expression in e (for example: e-1).",
        "zh": "计算 $\\int_0^{\\pi/2}\\cos x\\,e^{\\sin x}\\,dx$。答案写成含 e 的表达式（例如 e-1）。"
      },
      "answer": "e-1",
      "accept": [
        "e - 1",
        "e-1.0"
      ],
      "explanation": {
        "en": "Let $u=\\sin x$, $du=\\cos x\\,dx$. Limits become $u=0$ to $u=1$: $\\int_0^1 e^u\\,du=e^1-e^0=e-1$.",
        "zh": "令 $u=\\sin x$，$du=\\cos x\\,dx$，上下限变为 $u=0$ 到 $u=1$：$\\int_0^1 e^u\\,du=e^1-e^0=e-1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int \\frac{2x}{x^2+1}\\,dx$.",
        "zh": "计算 $\\int \\frac{2x}{x^2+1}\\,dx$。"
      },
      "choices": [
        "$2\\ln(x^2+1)+C$",
        "$\\arctan x+C$",
        "$\\ln(x^2+1)+C$",
        "$(x^2+1)^{-1}+C$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Let $u=x^2+1$, $du=2x\\,dx$: $\\int\\frac{du}{u}=\\ln|u|=\\ln(x^2+1)+C$. The $2x$ in the numerator is exactly $du$, so no extra factor of $2$ remains.",
        "zh": "令 $u=x^2+1$，$du=2x\\,dx$：$\\int\\frac{du}{u}=\\ln|u|=\\ln(x^2+1)+C$。分子的 $2x$ 恰是 $du$，故不会多出因子 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $F(x)=\\int_{\\pi}^{3x}\\cos t\\,dt$, find $F'(0)$. Give an integer.",
        "zh": "若 $F(x)=\\int_{\\pi}^{3x}\\cos t\\,dt$，求 $F'(0)$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0"
      ],
      "explanation": {
        "en": "FTC Part 2 with the chain rule: $F'(x)=\\cos(3x)\\cdot 3$. At $x=0$, $\\cos 0=1$, so $F'(0)=3$. The constant lower limit $\\pi$ contributes nothing.",
        "zh": "基本定理第二部分加链式法则：$F'(x)=\\cos(3x)\\cdot 3$。当 $x=0$ 时 $\\cos 0=1$，故 $F'(0)=3$。常数下限 $\\pi$ 不产生贡献。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int_0^{\\pi}\\sin x\\,dx$.",
        "zh": "计算 $\\int_0^{\\pi}\\sin x\\,dx$。"
      },
      "choices": [
        "$0$",
        "$2$",
        "$1$",
        "$-2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "An antiderivative of $\\sin x$ is $-\\cos x$, so the value is $-\\cos\\pi-(-\\cos 0)=-(-1)+1=2$. Dropping a sign gives $0$.",
        "zh": "$\\sin x$ 的一个原函数是 $-\\cos x$，故积分值为 $-\\cos\\pi-(-\\cos 0)=-(-1)+1=2$。少算一个负号就会得到 $0$。"
      }
    }
  ],
  "unit-6-integration/integration-by-parts": [
    {
      "type": "mc",
      "question": {
        "en": "To evaluate $\\int x\\ln x\\,dx$ by parts, the best choice is",
        "zh": "用分部积分法计算 $\\int x\\ln x\\,dx$ 时，最佳选择是"
      },
      "choices": [
        "$u=\\ln x$, $dv=x\\,dx$",
        "$u=x$, $dv=\\ln x\\,dx$",
        "$u=x\\ln x$, $dv=dx$",
        "$u=1$, $dv=x\\ln x\\,dx$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By LIATE, logarithmic beats algebraic, so let $u=\\ln x$ (which simplifies to $du=\\frac{1}{x}dx$) and $dv=x\\,dx$ (which integrates to $v=\\frac{x^2}{2}$). Choosing $u=x$ leaves the harder $\\int\\frac{x^2}{2}\\cdot\\frac{1}{x}$ path unavailable since $\\ln x$ has no easy $dv$ role here.",
        "zh": "按 LIATE，对数函数优先于代数函数，故取 $u=\\ln x$（求导简化为 $du=\\frac{1}{x}dx$），$dv=x\\,dx$（积分得 $v=\\frac{x^2}{2}$）。若取 $u=x$，则 $\\ln x$ 难以作为 $dv$，行不通。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int x\\cos x\\,dx$.",
        "zh": "计算 $\\int x\\cos x\\,dx$。"
      },
      "choices": [
        "$x\\sin x-\\cos x+C$",
        "$x\\sin x+\\cos x+C$",
        "$-x\\sin x-\\cos x+C$",
        "$\\frac{x^2}{2}\\sin x+C$"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $u=x$, $dv=\\cos x\\,dx$: $v=\\sin x$, so $x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+C$. Watch the sign: $\\int\\sin x\\,dx=-\\cos x$, and subtracting it adds $\\cos x$.",
        "zh": "取 $u=x$，$dv=\\cos x\\,dx$：$v=\\sin x$，故 $x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+C$。注意符号：$\\int\\sin x\\,dx=-\\cos x$，减去它就加上 $\\cos x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int x e^{2x}\\,dx$.",
        "zh": "计算 $\\int x e^{2x}\\,dx$。"
      },
      "choices": [
        "$\\frac{x}{2}e^{2x}-\\frac{1}{2}e^{2x}+C$",
        "$xe^{2x}-e^{2x}+C$",
        "$\\frac{x}{2}e^{2x}-\\frac{1}{4}e^{2x}+C$",
        "$\\frac{x^2}{2}e^{2x}+C$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Take $u=x$, $dv=e^{2x}dx$, so $v=\\frac{1}{2}e^{2x}$: $\\frac{x}{2}e^{2x}-\\frac{1}{2}\\int e^{2x}dx=\\frac{x}{2}e^{2x}-\\frac{1}{4}e^{2x}+C$. Forgetting to divide by $2$ again when integrating $e^{2x}$ gives the $\\frac{1}{2}$ form.",
        "zh": "取 $u=x$，$dv=e^{2x}dx$，则 $v=\\frac{1}{2}e^{2x}$：$\\frac{x}{2}e^{2x}-\\frac{1}{2}\\int e^{2x}dx=\\frac{x}{2}e^{2x}-\\frac{1}{4}e^{2x}+C$。第二次积分 $e^{2x}$ 时忘记再除以 $2$ 就会得到 $\\frac{1}{2}$ 那种形式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^{\\pi} x\\cos x\\,dx$. Give an integer.",
        "zh": "计算 $\\int_0^{\\pi} x\\cos x\\,dx$。请填一个整数。"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "An antiderivative is $x\\sin x+\\cos x$. Evaluate: $(\\pi\\sin\\pi+\\cos\\pi)-(0+\\cos 0)=(0-1)-(1)=-2$.",
        "zh": "一个原函数是 $x\\sin x+\\cos x$。代入：$(\\pi\\sin\\pi+\\cos\\pi)-(0+\\cos 0)=(0-1)-(1)=-2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many applications of integration by parts are needed to evaluate $\\int x^3 e^x\\,dx$?",
        "zh": "计算 $\\int x^3 e^x\\,dx$ 需要做几次分部积分？"
      },
      "choices": [
        "$2$",
        "$1$",
        "$4$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Each round lowers the power of $x$ by one: $x^3\\to x^2\\to x\\to 1$. Three applications are required, giving $e^x(x^3-3x^2+6x-6)+C$.",
        "zh": "每做一次分部积分，$x$ 的幂降一次：$x^3\\to x^2\\to x\\to 1$。需要三次，结果为 $e^x(x^3-3x^2+6x-6)+C$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int \\ln x\\,dx$.",
        "zh": "计算 $\\int \\ln x\\,dx$。"
      },
      "choices": [
        "$x\\ln x+x+C$",
        "$x\\ln x-x+C$",
        "$\\frac{(\\ln x)^2}{2}+C$",
        "$\\frac{1}{x}+C$"
      ],
      "answer": 1,
      "explanation": {
        "en": "There is no visible product, so take $u=\\ln x$, $dv=dx$: $v=x$, giving $x\\ln x-\\int x\\cdot\\frac{1}{x}\\,dx=x\\ln x-x+C$. The remaining integral $\\int 1\\,dx=x$ is subtracted.",
        "zh": "看不出乘积，取 $u=\\ln x$，$dv=dx$：$v=x$，得 $x\\ln x-\\int x\\cdot\\frac{1}{x}\\,dx=x\\ln x-x+C$。剩下的 $\\int 1\\,dx=x$ 是被减去的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^{\\pi/2} x\\sin x\\,dx$. Give an integer.",
        "zh": "计算 $\\int_0^{\\pi/2} x\\sin x\\,dx$。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0"
      ],
      "explanation": {
        "en": "An antiderivative is $-x\\cos x+\\sin x$. Evaluate: $\\left(-\\tfrac{\\pi}{2}\\cos\\tfrac{\\pi}{2}+\\sin\\tfrac{\\pi}{2}\\right)-(0+0)=(0+1)-0=1$.",
        "zh": "一个原函数是 $-x\\cos x+\\sin x$。代入：$\\left(-\\tfrac{\\pi}{2}\\cos\\tfrac{\\pi}{2}+\\sin\\tfrac{\\pi}{2}\\right)-(0+0)=(0+1)-0=1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int e^x\\sin x\\,dx$.",
        "zh": "计算 $\\int e^x\\sin x\\,dx$。"
      },
      "choices": [
        "$\\frac{e^x(\\sin x-\\cos x)}{2}+C$",
        "$\\frac{e^x(\\sin x+\\cos x)}{2}+C$",
        "$\\frac{e^x(\\cos x-\\sin x)}{2}+C$",
        "$e^x\\sin x-e^x\\cos x+C$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Applying parts twice reproduces the original integral: $I=-e^x\\cos x+e^x\\sin x-I$, so $2I=e^x(\\sin x-\\cos x)$ and $I=\\frac{e^x(\\sin x-\\cos x)}{2}+C$. Differentiating this back gives $e^x\\sin x$.",
        "zh": "连做两次分部积分后原积分重现：$I=-e^x\\cos x+e^x\\sin x-I$，故 $2I=e^x(\\sin x-\\cos x)$，$I=\\frac{e^x(\\sin x-\\cos x)}{2}+C$。对它求导即得 $e^x\\sin x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_1^2 \\ln x\\,dx$. Write your answer as an expression in ln (for example: 2ln2-1).",
        "zh": "计算 $\\int_1^2 \\ln x\\,dx$。答案写成含 ln 的表达式（例如 2ln2-1）。"
      },
      "answer": "2ln2-1",
      "accept": [
        "2ln(2)-1",
        "2 ln 2 - 1",
        "2*ln(2)-1"
      ],
      "explanation": {
        "en": "Using $\\int\\ln x\\,dx=x\\ln x-x$: $(2\\ln 2-2)-(1\\cdot\\ln 1-1)=(2\\ln 2-2)-(-1)=2\\ln 2-1$.",
        "zh": "用 $\\int\\ln x\\,dx=x\\ln x-x$：$(2\\ln 2-2)-(1\\cdot\\ln 1-1)=(2\\ln 2-2)-(-1)=2\\ln 2-1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int x^2\\sin x\\,dx$.",
        "zh": "计算 $\\int x^2\\sin x\\,dx$。"
      },
      "choices": [
        "$-x^2\\cos x-2x\\sin x-2\\cos x+C$",
        "$-x^2\\cos x+2x\\sin x+2\\cos x+C$",
        "$x^2\\cos x+2x\\sin x+2\\cos x+C$",
        "$-x^2\\cos x+2x\\sin x-2\\cos x+C$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Two rounds of parts give $-x^2\\cos x+2x\\sin x+2\\cos x+C$. Check by differentiating: the cross terms cancel and leave $x^2\\sin x$. Sign slips in the repeated steps produce the other forms.",
        "zh": "两次分部积分得 $-x^2\\cos x+2x\\sin x+2\\cos x+C$。求导验证：交叉项相消，只剩 $x^2\\sin x$。重复步骤中的符号失误会产生其他形式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^1 x^2 e^x\\,dx$. Write your answer as an expression in e (for example: e-2).",
        "zh": "计算 $\\int_0^1 x^2 e^x\\,dx$。答案写成含 e 的表达式（例如 e-2）。"
      },
      "answer": "e-2",
      "accept": [
        "e - 2",
        "e-2.0"
      ],
      "explanation": {
        "en": "Two rounds of parts give the antiderivative $e^x(x^2-2x+2)$. Evaluate: $e^1(1-2+2)-e^0(0-0+2)=e(1)-2=e-2$.",
        "zh": "两次分部积分得原函数 $e^x(x^2-2x+2)$。代入：$e^1(1-2+2)-e^0(0-0+2)=e(1)-2=e-2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which integral is best done by u-substitution rather than integration by parts?",
        "zh": "下列哪个积分适合用换元法而不是分部积分？"
      },
      "choices": [
        "$\\int x e^x\\,dx$",
        "$\\int x\\cos x\\,dx$",
        "$\\int x e^{x^2}\\,dx$",
        "$\\int x^2\\sin x\\,dx$"
      ],
      "answer": 2,
      "explanation": {
        "en": "In $\\int x e^{x^2}\\,dx$, setting $u=x^2$ gives $du=2x\\,dx$, so the leftover $x\\,dx$ is absorbed — a clean substitution. The others have unrelated factors, so parts is needed.",
        "zh": "在 $\\int x e^{x^2}\\,dx$ 中，令 $u=x^2$ 得 $du=2x\\,dx$，剩下的 $x\\,dx$ 被吸收——是干净的换元。其余各式的因子互不相关，需要分部积分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_1^e x\\ln x\\,dx$. Write your answer as an expression in e (for example: (e^2+1)/4).",
        "zh": "计算 $\\int_1^e x\\ln x\\,dx$。答案写成含 e 的表达式（例如 (e^2+1)/4）。"
      },
      "answer": "(e^2+1)/4",
      "accept": [
        "(e^2 + 1)/4",
        "(e**2+1)/4"
      ],
      "explanation": {
        "en": "With $u=\\ln x$, $dv=x\\,dx$, $v=\\frac{x^2}{2}$: $\\left[\\frac{x^2}{2}\\ln x\\right]_1^e-\\frac{1}{2}\\int_1^e x\\,dx=\\frac{e^2}{2}-\\frac{1}{2}\\cdot\\frac{e^2-1}{2}=\\frac{e^2}{4}+\\frac{1}{4}=\\frac{e^2+1}{4}$.",
        "zh": "取 $u=\\ln x$，$dv=x\\,dx$，$v=\\frac{x^2}{2}$：$\\left[\\frac{x^2}{2}\\ln x\\right]_1^e-\\frac{1}{2}\\int_1^e x\\,dx=\\frac{e^2}{2}-\\frac{1}{2}\\cdot\\frac{e^2-1}{2}=\\frac{e^2}{4}+\\frac{1}{4}=\\frac{e^2+1}{4}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^{\\pi/2} x\\cos x\\,dx$. Write your answer using pi (for example: pi/2-1).",
        "zh": "计算 $\\int_0^{\\pi/2} x\\cos x\\,dx$。答案用 pi 表示（例如 pi/2-1）。"
      },
      "answer": "pi/2-1",
      "accept": [
        "pi/2 - 1",
        "π/2-1",
        "(pi-2)/2"
      ],
      "explanation": {
        "en": "An antiderivative of $x\\cos x$ is $x\\sin x+\\cos x$. Evaluate: $\\left(\\tfrac{\\pi}{2}\\sin\\tfrac{\\pi}{2}+\\cos\\tfrac{\\pi}{2}\\right)-(0+\\cos 0)=\\tfrac{\\pi}{2}-1$.",
        "zh": "$x\\cos x$ 的一个原函数是 $x\\sin x+\\cos x$。代入：$\\left(\\tfrac{\\pi}{2}\\sin\\tfrac{\\pi}{2}+\\cos\\tfrac{\\pi}{2}\\right)-(0+\\cos 0)=\\tfrac{\\pi}{2}-1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To evaluate $\\int x\\arctan x\\,dx$ by parts, the best choice is",
        "zh": "用分部积分法计算 $\\int x\\arctan x\\,dx$ 时，最佳选择是"
      },
      "choices": [
        "$u=x$, $dv=\\arctan x\\,dx$",
        "$u=x\\arctan x$, $dv=dx$",
        "$u=1$, $dv=x\\arctan x\\,dx$",
        "$u=\\arctan x$, $dv=x\\,dx$"
      ],
      "answer": 3,
      "explanation": {
        "en": "By LIATE, inverse trig beats algebraic, so let $u=\\arctan x$ (with $du=\\frac{1}{1+x^2}dx$) and $dv=x\\,dx$ ($v=\\frac{x^2}{2}$). There is no simple antiderivative of $\\arctan x$ to use as $dv$.",
        "zh": "按 LIATE，反三角函数优先于代数函数，故取 $u=\\arctan x$（$du=\\frac{1}{1+x^2}dx$），$dv=x\\,dx$（$v=\\frac{x^2}{2}$）。$\\arctan x$ 没有简单原函数可用作 $dv$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why does u-substitution fail for $\\int x\\cos x\\,dx$, forcing integration by parts?",
        "zh": "为什么 $\\int x\\cos x\\,dx$ 无法用换元法，只能用分部积分？"
      },
      "choices": [
        "because $\\cos x$ has no antiderivative",
        "because $x$ is not continuous",
        "because the integral diverges",
        "no substitution makes $du$ match a leftover factor, so parts is required"
      ],
      "answer": 3,
      "explanation": {
        "en": "For u-substitution, $du$ must match a leftover factor of the integrand. Here $x$ and $\\cos x$ are unrelated: differentiating either does not produce the other, so no $u$ works and integration by parts is the right tool.",
        "zh": "换元法要求 $du$ 与被积式中剩余的因子相匹配。这里 $x$ 与 $\\cos x$ 互不相关：对任一者求导都得不到另一者，故没有合适的 $u$，应改用分部积分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\int x^2\\cos x\\,dx = x^2\\sin x + A\\,x\\cos x - 2\\sin x + C$, find the integer $A$.",
        "zh": "在 $\\int x^2\\cos x\\,dx = x^2\\sin x + A\\,x\\cos x - 2\\sin x + C$ 中，求整数 $A$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Two rounds of parts give $\\int x^2\\cos x\\,dx=x^2\\sin x+2x\\cos x-2\\sin x+C$, so the coefficient of $x\\cos x$ is $A=2$. Differentiating confirms the cross terms cancel to leave $x^2\\cos x$.",
        "zh": "两次分部积分得 $\\int x^2\\cos x\\,dx=x^2\\sin x+2x\\cos x-2\\sin x+C$，故 $x\\cos x$ 的系数 $A=2$。求导验证交叉项相消，只剩 $x^2\\cos x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_1^3 \\ln x\\,dx$. Write your answer as an expression in ln (for example: 3ln3-2).",
        "zh": "计算 $\\int_1^3 \\ln x\\,dx$。答案写成含 ln 的表达式（例如 3ln3-2）。"
      },
      "answer": "3ln3-2",
      "accept": [
        "3ln(3)-2",
        "3 ln 3 - 2",
        "3*ln(3)-2"
      ],
      "explanation": {
        "en": "Using $\\int\\ln x\\,dx=x\\ln x-x$: $(3\\ln 3-3)-(1\\cdot\\ln 1-1)=(3\\ln 3-3)-(-1)=3\\ln 3-2$.",
        "zh": "用 $\\int\\ln x\\,dx=x\\ln x-x$：$(3\\ln 3-3)-(1\\cdot\\ln 1-1)=(3\\ln 3-3)-(-1)=3\\ln 3-2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To evaluate $\\int x^5\\ln x\\,dx$ by parts, which factor should be $u$?",
        "zh": "用分部积分法计算 $\\int x^5\\ln x\\,dx$ 时，应取哪个因子作为 $u$？"
      },
      "choices": [
        "$u=x^5$",
        "$u=x$",
        "$u=\\ln x$",
        "$u=x^5\\ln x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "By LIATE the logarithm is chosen as $u$ because it simplifies when differentiated ($du=\\frac{1}{x}dx$), while $dv=x^5\\,dx$ integrates easily to $v=\\frac{x^6}{6}$.",
        "zh": "按 LIATE，对数函数选作 $u$，因为它求导后变简单（$du=\\frac{1}{x}dx$），而 $dv=x^5\\,dx$ 容易积分得 $v=\\frac{x^6}{6}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\int e^x\\cos x\\,dx$.",
        "zh": "计算 $\\int e^x\\cos x\\,dx$。"
      },
      "choices": [
        "$\\frac{e^x(\\cos x-\\sin x)}{2}+C$",
        "$\\frac{e^x(\\sin x-\\cos x)}{2}+C$",
        "$e^x\\cos x+C$",
        "$\\frac{e^x(\\sin x+\\cos x)}{2}+C$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Applying parts twice gives $I=e^x\\sin x+e^x\\cos x-I$, so $2I=e^x(\\sin x+\\cos x)$ and $I=\\frac{e^x(\\sin x+\\cos x)}{2}+C$. Differentiating this back returns $e^x\\cos x$.",
        "zh": "连做两次分部积分得 $I=e^x\\sin x+e^x\\cos x-I$，故 $2I=e^x(\\sin x+\\cos x)$，$I=\\frac{e^x(\\sin x+\\cos x)}{2}+C$。对它求导即得 $e^x\\cos x$。"
      }
    }
  ],
  "unit-6-integration/partial-fractions": [
    {
      "type": "mc",
      "question": {
        "en": "$\\int \\frac{dx}{(x-1)(x-3)} =$",
        "zh": "$\\int \\frac{dx}{(x-1)(x-3)} =$"
      },
      "choices": [
        "$\\frac{1}{2}\\ln\\left|\\frac{x-3}{x-1}\\right| + C$",
        "$\\frac{1}{2}\\ln\\left|\\frac{x-1}{x-3}\\right| + C$",
        "$\\ln|(x-1)(x-3)| + C$",
        "$-\\frac{1}{2}\\ln|(x-1)(x-3)| + C$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Decompose $\\frac{1}{(x-1)(x-3)} = \\frac{-1/2}{x-1} + \\frac{1/2}{x-3}$ (at $x=1$, $1=-2A$; at $x=3$, $1=2B$). Integrating gives $-\\frac{1}{2}\\ln|x-1| + \\frac{1}{2}\\ln|x-3| + C = \\frac{1}{2}\\ln\\left|\\frac{x-3}{x-1}\\right| + C$. Inverting the fraction inside the log flips the sign.",
        "zh": "分解 $\\frac{1}{(x-1)(x-3)} = \\frac{-1/2}{x-1} + \\frac{1/2}{x-3}$（代入 $x=1$ 得 $1=-2A$；代入 $x=3$ 得 $1=2B$）。积分得 $-\\frac{1}{2}\\ln|x-1| + \\frac{1}{2}\\ln|x-3| + C = \\frac{1}{2}\\ln\\left|\\frac{x-3}{x-1}\\right| + C$。把对数里的分式上下颠倒会改变符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the correct partial-fraction decomposition of $\\frac{x+4}{x(x+2)}$?",
        "zh": "$\\frac{x+4}{x(x+2)}$ 的正确部分分式分解是哪一个？"
      },
      "choices": [
        "$\\frac{1}{x} + \\frac{3}{x+2}$",
        "$\\frac{2}{x} - \\frac{1}{x+2}$",
        "$\\frac{2}{x} + \\frac{1}{x+2}$",
        "$\\frac{-2}{x} + \\frac{3}{x+2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $x+4 = A(x+2) + Bx$: at $x=0$, $4 = 2A$ so $A = 2$; at $x=-2$, $2 = -2B$ so $B = -1$. Thus $\\frac{2}{x} - \\frac{1}{x+2}$. Forgetting that $B$ is negative is the common slip.",
        "zh": "由 $x+4 = A(x+2) + Bx$：代入 $x=0$ 得 $4 = 2A$，$A = 2$；代入 $x=-2$ 得 $2 = -2B$，$B = -1$。因此为 $\\frac{2}{x} - \\frac{1}{x+2}$。常见错误是忘记 $B$ 为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which rational function must first be reduced by polynomial long division before partial fractions can be applied?",
        "zh": "下列哪个有理函数必须先做多项式长除法，才能使用部分分式分解？"
      },
      "choices": [
        "$\\frac{2x+1}{x^2-9}$",
        "$\\frac{5}{(x-1)(x+4)}$",
        "$\\frac{x^2-3}{x^2+x-2}$",
        "$\\frac{x-4}{x^2-x}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Partial fractions requires a proper fraction (numerator degree < denominator degree). Only $\\frac{x^2-3}{x^2+x-2}$ has equal degrees (2 and 2), so divide first: $\\frac{x^2-3}{x^2+x-2} = 1 + \\frac{-x-1}{x^2+x-2}$. The others are already proper.",
        "zh": "部分分式要求真分式（分子次数小于分母次数）。只有 $\\frac{x^2-3}{x^2+x-2}$ 分子分母同为 2 次，所以先做长除法：$\\frac{x^2-3}{x^2+x-2} = 1 + \\frac{-x-1}{x^2+x-2}$。其余都已是真分式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int \\frac{dx}{x^2 - 4} =$",
        "zh": "$\\int \\frac{dx}{x^2 - 4} =$"
      },
      "choices": [
        "$\\frac{1}{2}\\ln\\left|\\frac{x-2}{x+2}\\right| + C$",
        "$\\ln\\left|\\frac{x-2}{x+2}\\right| + C$",
        "$\\frac{1}{4}\\ln\\left|\\frac{x+2}{x-2}\\right| + C$",
        "$\\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right| + C$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor $x^2-4=(x-2)(x+2)$ and set $\\frac{1}{(x-2)(x+2)} = \\frac{A}{x-2}+\\frac{B}{x+2}$. At $x=2$: $A=\\frac{1}{4}$; at $x=-2$: $B=-\\frac{1}{4}$. Integrating: $\\frac{1}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2| + C = \\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right| + C$.",
        "zh": "因式分解 $x^2-4=(x-2)(x+2)$，设 $\\frac{1}{(x-2)(x+2)} = \\frac{A}{x-2}+\\frac{B}{x+2}$。代入 $x=2$ 得 $A=\\frac{1}{4}$；代入 $x=-2$ 得 $B=-\\frac{1}{4}$。积分：$\\frac{1}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2| + C = \\frac{1}{4}\\ln\\left|\\frac{x-2}{x+2}\\right| + C$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\frac{1}{x(x-5)} = \\frac{A}{x} + \\frac{B}{x-5}$, the value of $A$ is",
        "zh": "在 $\\frac{1}{x(x-5)} = \\frac{A}{x} + \\frac{B}{x-5}$ 中，$A$ 的值是"
      },
      "choices": [
        "$-\\frac{1}{5}$",
        "$\\frac{1}{5}$",
        "$\\frac{1}{25}$",
        "$5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "From $1 = A(x-5) + Bx$, substitute $x=0$: $1 = -5A$, so $A = -\\frac{1}{5}$. Forgetting the minus sign from $x-5$ evaluated at $0$ is the usual error.",
        "zh": "由 $1 = A(x-5) + Bx$，代入 $x=0$：$1 = -5A$，得 $A = -\\frac{1}{5}$。常见错误是忽略 $x-5$ 在 $0$ 处产生的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A logistic model requires $\\int \\frac{dP}{P(4-P)}$. Which decomposition is correct?",
        "zh": "某逻辑斯谛模型需要计算 $\\int \\frac{dP}{P(4-P)}$。下列哪个分解正确？"
      },
      "choices": [
        "$\\frac{1}{4}\\left(\\frac{1}{P} - \\frac{1}{4-P}\\right)$",
        "$\\frac{1}{4}\\left(\\frac{1}{P} + \\frac{1}{4-P}\\right)$",
        "$\\frac{1}{P} + \\frac{1}{4-P}$",
        "$\\frac{1}{4}\\left(\\frac{1}{4-P} - \\frac{1}{P}\\right)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $\\frac{1}{P(4-P)} = \\frac{A}{P} + \\frac{B}{4-P}$, so $1 = A(4-P) + BP$. At $P=0$: $A = \\frac{1}{4}$; at $P=4$: $B = \\frac{1}{4}$. Both terms are positive because the denominator is $4-P$, giving $\\frac{1}{4}\\left(\\frac{1}{P} + \\frac{1}{4-P}\\right)$.",
        "zh": "设 $\\frac{1}{P(4-P)} = \\frac{A}{P} + \\frac{B}{4-P}$，则 $1 = A(4-P) + BP$。代入 $P=0$ 得 $A = \\frac{1}{4}$；代入 $P=4$ 得 $B = \\frac{1}{4}$。因分母为 $4-P$，两项皆为正号，得 $\\frac{1}{4}\\left(\\frac{1}{P} + \\frac{1}{4-P}\\right)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_0^1 \\frac{dx}{(x+1)(x+2)} =$",
        "zh": "$\\int_0^1 \\frac{dx}{(x+1)(x+2)} =$"
      },
      "choices": [
        "$\\ln\\frac{3}{2}$",
        "$\\ln 2$",
        "$\\ln\\frac{4}{3}$",
        "$\\ln\\frac{2}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $\\frac{1}{(x+1)(x+2)} = \\frac{1}{x+1} - \\frac{1}{x+2}$, the integral is $[\\ln|x+1| - \\ln|x+2|]_0^1 = (\\ln 2 - \\ln 3) - (\\ln 1 - \\ln 2) = 2\\ln 2 - \\ln 3 = \\ln\\frac{4}{3}$.",
        "zh": "由 $\\frac{1}{(x+1)(x+2)} = \\frac{1}{x+1} - \\frac{1}{x+2}$，积分为 $[\\ln|x+1| - \\ln|x+2|]_0^1 = (\\ln 2 - \\ln 3) - (\\ln 1 - \\ln 2) = 2\\ln 2 - \\ln 3 = \\ln\\frac{4}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int \\frac{3}{x^2 + x}\\, dx =$",
        "zh": "$\\int \\frac{3}{x^2 + x}\\, dx =$"
      },
      "choices": [
        "$3\\ln|x^2 + x| + C$",
        "$\\ln\\left|\\frac{x}{x+1}\\right| + C$",
        "$3\\ln\\left|\\frac{x+1}{x}\\right| + C$",
        "$3\\ln\\left|\\frac{x}{x+1}\\right| + C$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor $x^2+x = x(x+1)$ and use $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$. Then $3\\int\\left(\\frac{1}{x}-\\frac{1}{x+1}\\right)dx = 3\\ln|x| - 3\\ln|x+1| + C = 3\\ln\\left|\\frac{x}{x+1}\\right| + C$.",
        "zh": "分解 $x^2+x = x(x+1)$，用 $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$。则 $3\\int\\left(\\frac{1}{x}-\\frac{1}{x+1}\\right)dx = 3\\ln|x| - 3\\ln|x+1| + C = 3\\ln\\left|\\frac{x}{x+1}\\right| + C$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the correct partial-fraction setup for $\\frac{2x-5}{(x-3)(x+1)(x-4)}$?",
        "zh": "$\\frac{2x-5}{(x-3)(x+1)(x-4)}$ 的正确部分分式待定形式是"
      },
      "choices": [
        "$\\frac{A}{x-3} + \\frac{B}{x+1} + \\frac{C}{x-4}$",
        "$\\frac{A}{x-3} + \\frac{B}{x+1}$",
        "$\\frac{Ax+B}{(x-3)(x+1)} + \\frac{C}{x-4}$",
        "$\\frac{A}{(x-3)(x+1)(x-4)}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each distinct linear factor contributes one term with a constant numerator, so the setup is $\\frac{A}{x-3} + \\frac{B}{x+1} + \\frac{C}{x-4}$. Combining factors or using a linear numerator over a linear factor is incorrect.",
        "zh": "每个互不相同的一次因式各贡献一个分子为常数的项，故待定形式为 $\\frac{A}{x-3} + \\frac{B}{x+1} + \\frac{C}{x-4}$。把因式合并、或在一次因式上放一次分子都是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In $\\frac{4x+1}{(x+1)(x-2)} = \\frac{A}{x+1} + \\frac{B}{x-2}$, the value of $B$ is",
        "zh": "在 $\\frac{4x+1}{(x+1)(x-2)} = \\frac{A}{x+1} + \\frac{B}{x-2}$ 中，$B$ 的值是"
      },
      "choices": [
        "$-1$",
        "$3$",
        "$\\frac{9}{2}$",
        "$1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "From $4x+1 = A(x-2) + B(x+1)$, substitute $x=2$: $9 = 3B$, so $B = 3$. (Substituting $x=-1$ gives $-3 = -3A$, so $A = 1$.)",
        "zh": "由 $4x+1 = A(x-2) + B(x+1)$，代入 $x=2$：$9 = 3B$，得 $B = 3$。（代入 $x=-1$ 得 $-3 = -3A$，即 $A = 1$。）"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the cover-up method on $\\frac{6}{x(x-3)} = \\frac{A}{x} + \\frac{B}{x-3}$, the coefficient $B$ over $(x-3)$ equals",
        "zh": "对 $\\frac{6}{x(x-3)} = \\frac{A}{x} + \\frac{B}{x-3}$ 使用遮盖法，$(x-3)$ 上方的系数 $B$ 等于"
      },
      "choices": [
        "$-2$",
        "$6$",
        "$2$",
        "$\\frac{1}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Cover $(x-3)$ and evaluate the rest at $x=3$: $\\frac{6}{x}\\big|_{x=3} = \\frac{6}{3} = 2$, so $B = 2$. (Covering $x$ and setting $x=0$ gives $A = -2$.)",
        "zh": "遮住 $(x-3)$，把剩余部分在 $x=3$ 求值：$\\frac{6}{x}\\big|_{x=3} = \\frac{6}{3} = 2$，故 $B = 2$。（遮住 $x$ 并令 $x=0$ 得 $A = -2$。）"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int \\frac{5x-7}{(x-1)(x-2)}\\, dx =$",
        "zh": "$\\int \\frac{5x-7}{(x-1)(x-2)}\\, dx =$"
      },
      "choices": [
        "$2\\ln|x-2| + 3\\ln|x-1| + C$",
        "$\\ln|(x-1)(x-2)| + C$",
        "$5\\ln|(x-1)(x-2)| + C$",
        "$2\\ln|x-1| + 3\\ln|x-2| + C$"
      ],
      "answer": 3,
      "explanation": {
        "en": "From $5x-7 = A(x-2) + B(x-1)$: at $x=1$, $-2 = -A$ so $A = 2$; at $x=2$, $3 = B$. Integrating $\\frac{2}{x-1} + \\frac{3}{x-2}$ gives $2\\ln|x-1| + 3\\ln|x-2| + C$. The coefficients must stay attached to their own factors.",
        "zh": "由 $5x-7 = A(x-2) + B(x-1)$：代入 $x=1$ 得 $-2 = -A$，$A = 2$；代入 $x=2$ 得 $3 = B$。对 $\\frac{2}{x-1} + \\frac{3}{x-2}$ 积分得 $2\\ln|x-1| + 3\\ln|x-2| + C$。系数必须与各自的因式对应，不能互换。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{1}{(x-2)(x+3)} = \\frac{A}{x-2} + \\frac{B}{x+3}$, find $A$. Give a fraction a/b.",
        "zh": "在 $\\frac{1}{(x-2)(x+3)} = \\frac{A}{x-2} + \\frac{B}{x+3}$ 中求 $A$。请填分数 a/b。"
      },
      "answer": "1/5",
      "accept": [
        "0.2",
        "0.20"
      ],
      "explanation": {
        "en": "From $1 = A(x+3) + B(x-2)$, substitute $x=2$: $1 = 5A$, so $A = \\frac{1}{5}$. (At $x=-3$: $1 = -5B$, so $B = -\\frac{1}{5}$.)",
        "zh": "由 $1 = A(x+3) + B(x-2)$，代入 $x=2$：$1 = 5A$，得 $A = \\frac{1}{5}$。（代入 $x=-3$：$1 = -5B$，得 $B = -\\frac{1}{5}$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{x+6}{x(x-3)} = \\frac{A}{x} + \\frac{B}{x-3}$, find $A$. Give an integer.",
        "zh": "在 $\\frac{x+6}{x(x-3)} = \\frac{A}{x} + \\frac{B}{x-3}$ 中求 $A$。请填一个整数。"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "From $x+6 = A(x-3) + Bx$, substitute $x=0$: $6 = -3A$, so $A = -2$. (At $x=3$: $9 = 3B$, so $B = 3$.)",
        "zh": "由 $x+6 = A(x-3) + Bx$，代入 $x=0$：$6 = -3A$，得 $A = -2$。（代入 $x=3$：$9 = 3B$，得 $B = 3$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{3x+2}{x(x-1)} = \\frac{A}{x} + \\frac{B}{x-1}$, find $B$. Give an integer.",
        "zh": "在 $\\frac{3x+2}{x(x-1)} = \\frac{A}{x} + \\frac{B}{x-1}$ 中求 $B$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "From $3x+2 = A(x-1) + Bx$, substitute $x=1$: $5 = B$. (At $x=0$: $2 = -A$, so $A = -2$.)",
        "zh": "由 $3x+2 = A(x-1) + Bx$，代入 $x=1$：$5 = B$。（代入 $x=0$：$2 = -A$，得 $A = -2$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_2^4 \\frac{dx}{x(x+1)}$ and write it as $\\ln(a/b)$ — enter just a/b as a fraction. Hint: $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$.",
        "zh": "计算 $\\int_2^4 \\frac{dx}{x(x+1)}$，写成 $\\ln(a/b)$ 的形式——只需填分数 a/b。提示：$\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$。"
      },
      "answer": "6/5",
      "accept": [
        "1.2",
        "1.20"
      ],
      "explanation": {
        "en": "The antiderivative is $\\ln\\left|\\frac{x}{x+1}\\right|$. Evaluating: $\\ln\\frac{4}{5} - \\ln\\frac{2}{3} = \\ln\\left(\\frac{4}{5}\\cdot\\frac{3}{2}\\right) = \\ln\\frac{6}{5}$.",
        "zh": "原函数为 $\\ln\\left|\\frac{x}{x+1}\\right|$。代入上下限：$\\ln\\frac{4}{5} - \\ln\\frac{2}{3} = \\ln\\left(\\frac{4}{5}\\cdot\\frac{3}{2}\\right) = \\ln\\frac{6}{5}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{1}{x^2-9} = \\frac{A}{x-3} + \\frac{B}{x+3}$, find $A$. Give a fraction a/b.",
        "zh": "在 $\\frac{1}{x^2-9} = \\frac{A}{x-3} + \\frac{B}{x+3}$ 中求 $A$。请填分数 a/b。"
      },
      "answer": "1/6",
      "accept": [
        "0.1667",
        "0.167"
      ],
      "explanation": {
        "en": "Factor $x^2-9=(x-3)(x+3)$. From $1 = A(x+3) + B(x-3)$, substitute $x=3$: $1 = 6A$, so $A = \\frac{1}{6}$. (At $x=-3$: $B = -\\frac{1}{6}$.)",
        "zh": "因式分解 $x^2-9=(x-3)(x+3)$。由 $1 = A(x+3) + B(x-3)$，代入 $x=3$：$1 = 6A$，得 $A = \\frac{1}{6}$。（代入 $x=-3$ 得 $B = -\\frac{1}{6}$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{10x}{(x-1)(x-6)} = \\frac{A}{x-1} + \\frac{B}{x-6}$, find $B$. Give an integer.",
        "zh": "在 $\\frac{10x}{(x-1)(x-6)} = \\frac{A}{x-1} + \\frac{B}{x-6}$ 中求 $B$。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0"
      ],
      "explanation": {
        "en": "From $10x = A(x-6) + B(x-1)$, substitute $x=6$: $60 = 5B$, so $B = 12$. (At $x=1$: $10 = -5A$, so $A = -2$.)",
        "zh": "由 $10x = A(x-6) + B(x-1)$，代入 $x=6$：$60 = 5B$，得 $B = 12$。（代入 $x=1$：$10 = -5A$，得 $A = -2$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In $\\frac{7}{(x+2)(x-5)} = \\frac{A}{x+2} + \\frac{B}{x-5}$, find $B$. Give an integer.",
        "zh": "在 $\\frac{7}{(x+2)(x-5)} = \\frac{A}{x+2} + \\frac{B}{x-5}$ 中求 $B$。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0"
      ],
      "explanation": {
        "en": "From $7 = A(x-5) + B(x+2)$, substitute $x=5$: $7 = 7B$, so $B = 1$. (At $x=-2$: $7 = -7A$, so $A = -1$.)",
        "zh": "由 $7 = A(x-5) + B(x+2)$，代入 $x=5$：$7 = 7B$，得 $B = 1$。（代入 $x=-2$：$7 = -7A$，得 $A = -1$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^1 \\frac{2\\,dx}{(x+1)(x+3)}$ and write it as $\\ln(a/b)$ — enter just a/b as a fraction.",
        "zh": "计算 $\\int_0^1 \\frac{2\\,dx}{(x+1)(x+3)}$，写成 $\\ln(a/b)$ 的形式——只需填分数 a/b。"
      },
      "answer": "3/2",
      "accept": [
        "1.5",
        "1.50"
      ],
      "explanation": {
        "en": "Decompose $\\frac{2}{(x+1)(x+3)} = \\frac{1}{x+1} - \\frac{1}{x+3}$ (at $x=-1$, $A=1$; at $x=-3$, $B=-1$). Then $[\\ln|x+1|-\\ln|x+3|]_0^1 = (\\ln 2 - \\ln 4) - (\\ln 1 - \\ln 3) = \\ln\\frac{1}{2} + \\ln 3 = \\ln\\frac{3}{2}$.",
        "zh": "分解 $\\frac{2}{(x+1)(x+3)} = \\frac{1}{x+1} - \\frac{1}{x+3}$（代入 $x=-1$ 得 $A=1$；代入 $x=-3$ 得 $B=-1$）。则 $[\\ln|x+1|-\\ln|x+3|]_0^1 = (\\ln 2 - \\ln 4) - (\\ln 1 - \\ln 3) = \\ln\\frac{1}{2} + \\ln 3 = \\ln\\frac{3}{2}$。"
      }
    }
  ],
  "unit-6-integration/improper-integrals": [
    {
      "type": "mc",
      "question": {
        "en": "$\\int_1^{\\infty} \\frac{dx}{x^4}$ is",
        "zh": "$\\int_1^{\\infty} \\frac{dx}{x^4}$ 是"
      },
      "choices": [
        "convergent, with value $\\frac{1}{3}$",
        "convergent, with value $\\frac{1}{4}$",
        "convergent, with value $1$",
        "divergent"
      ],
      "answer": 0,
      "explanation": {
        "en": "This is a p-integral with $p = 4 > 1$, so it converges: $\\lim_{b\\to\\infty}\\left[-\\frac{1}{3x^3}\\right]_1^b = 0 + \\frac{1}{3} = \\frac{1}{3}$.",
        "zh": "这是 $p = 4 > 1$ 的 p 积分，故收敛：$\\lim_{b\\to\\infty}\\left[-\\frac{1}{3x^3}\\right]_1^b = 0 + \\frac{1}{3} = \\frac{1}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_1^{\\infty} \\frac{dx}{x^{2/3}}$ is",
        "zh": "$\\int_1^{\\infty} \\frac{dx}{x^{2/3}}$ 是"
      },
      "choices": [
        "convergent, with value $3$",
        "divergent",
        "convergent, with value $\\frac{2}{3}$",
        "convergent, with value $1$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Here $p = \\frac{2}{3} \\le 1$, so the p-integral diverges. The antiderivative $3x^{1/3}$ grows without bound as $x \\to \\infty$.",
        "zh": "这里 $p = \\frac{2}{3} \\le 1$，故 p 积分发散。原函数 $3x^{1/3}$ 在 $x \\to \\infty$ 时无限增大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_0^{\\infty} e^{-x}\\, dx =$",
        "zh": "$\\int_0^{\\infty} e^{-x}\\, dx =$"
      },
      "choices": [
        "$0$",
        "diverges",
        "$1$",
        "$\\frac{1}{e}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\lim_{b\\to\\infty}[-e^{-x}]_0^b = \\lim_{b\\to\\infty}(-e^{-b} + 1) = 0 + 1 = 1$. Exponential decay gives a finite area over an infinite interval.",
        "zh": "$\\lim_{b\\to\\infty}[-e^{-x}]_0^b = \\lim_{b\\to\\infty}(-e^{-b} + 1) = 0 + 1 = 1$。指数衰减在无限区间上给出有限面积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following integrals converges?",
        "zh": "下列哪个积分收敛？"
      },
      "choices": [
        "$\\int_1^{\\infty} \\frac{dx}{x}$",
        "$\\int_1^{\\infty} \\frac{dx}{x^{0.5}}$",
        "$\\int_1^{\\infty} \\frac{dx}{x^{0.9}}$",
        "$\\int_1^{\\infty} \\frac{dx}{x^{1.5}}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A p-integral $\\int_1^{\\infty} x^{-p}\\,dx$ converges exactly when $p > 1$. Only $p = 1.5 > 1$ qualifies; the others have $p = 1$, $0.5$, and $0.9$, all $\\le 1$, so they diverge.",
        "zh": "p 积分 $\\int_1^{\\infty} x^{-p}\\,dx$ 恰当 $p > 1$ 时收敛。只有 $p = 1.5 > 1$ 满足；其余的 $p = 1$、$0.5$、$0.9$ 都 $\\le 1$，故发散。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_0^1 \\frac{dx}{x^{1/3}}$ is",
        "zh": "$\\int_0^1 \\frac{dx}{x^{1/3}}$ 是"
      },
      "choices": [
        "convergent, with value $\\frac{3}{2}$",
        "divergent",
        "convergent, with value $3$",
        "convergent, with value $\\frac{1}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The integrand blows up at $x=0$, but $p = \\frac{1}{3} < 1$, so near zero it converges: $\\lim_{a\\to 0^+}\\left[\\frac{3}{2}x^{2/3}\\right]_a^1 = \\frac{3}{2} - 0 = \\frac{3}{2}$.",
        "zh": "被积函数在 $x=0$ 处趋于无穷，但 $p = \\frac{1}{3} < 1$，故在零点附近收敛：$\\lim_{a\\to 0^+}\\left[\\frac{3}{2}x^{2/3}\\right]_a^1 = \\frac{3}{2} - 0 = \\frac{3}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_0^1 \\frac{dx}{x}$ is",
        "zh": "$\\int_0^1 \\frac{dx}{x}$ 是"
      },
      "choices": [
        "convergent, with value $1$",
        "divergent",
        "convergent, with value $0$",
        "convergent, with value $\\ln 2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The integrand is unbounded at $x=0$ and $p = 1$, the borderline case. $\\lim_{a\\to 0^+}[\\ln x]_a^1 = \\lim_{a\\to 0^+}(-\\ln a) = \\infty$, so it diverges.",
        "zh": "被积函数在 $x=0$ 处无界且 $p = 1$，属临界情形。$\\lim_{a\\to 0^+}[\\ln x]_a^1 = \\lim_{a\\to 0^+}(-\\ln a) = \\infty$，故发散。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The AP-correct way to write $\\int_2^{\\infty} f(x)\\, dx$ before evaluating is",
        "zh": "在求值前，按 AP 规范书写 $\\int_2^{\\infty} f(x)\\, dx$ 的方式是"
      },
      "choices": [
        "$F(\\infty) - F(2)$",
        "$\\lim_{a\\to 2} \\int_a^{\\infty} f(x)\\, dx$",
        "$\\lim_{b\\to\\infty} \\int_2^b f(x)\\, dx$",
        "$\\int_2^b f(x)\\, dx$ for large $b$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Replace the infinite endpoint with a variable and take a limit: $\\lim_{b\\to\\infty}\\int_2^b f(x)\\,dx$. Plugging in $\\infty$ directly, or leaving $b$ finite, omits the required limit justification.",
        "zh": "把无穷端点换成变量再取极限：$\\lim_{b\\to\\infty}\\int_2^b f(x)\\,dx$。直接代入 $\\infty$、或让 $b$ 保持有限，都缺少必需的极限论证。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_0^{\\infty} \\frac{dx}{1+x^2} =$",
        "zh": "$\\int_0^{\\infty} \\frac{dx}{1+x^2} =$"
      },
      "choices": [
        "$0$",
        "$1$",
        "diverges",
        "$\\frac{\\pi}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The antiderivative is $\\arctan x$: $\\lim_{b\\to\\infty}[\\arctan x]_0^b = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$.",
        "zh": "原函数为 $\\arctan x$：$\\lim_{b\\to\\infty}[\\arctan x]_0^b = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_{-\\infty}^{0} e^{x}\\, dx =$",
        "zh": "$\\int_{-\\infty}^{0} e^{x}\\, dx =$"
      },
      "choices": [
        "$1$",
        "$0$",
        "diverges",
        "$-1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\lim_{a\\to -\\infty}[e^x]_a^0 = e^0 - \\lim_{a\\to-\\infty}e^a = 1 - 0 = 1$. As $x \\to -\\infty$, $e^x \\to 0$.",
        "zh": "$\\lim_{a\\to -\\infty}[e^x]_a^0 = e^0 - \\lim_{a\\to-\\infty}e^a = 1 - 0 = 1$。当 $x \\to -\\infty$ 时 $e^x \\to 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_1^{\\infty} \\frac{dx}{x^{1.1}}$ is",
        "zh": "$\\int_1^{\\infty} \\frac{dx}{x^{1.1}}$ 是"
      },
      "choices": [
        "divergent",
        "convergent, with value $10$",
        "convergent, with value $1.1$",
        "convergent, with value $\\frac{1}{1.1}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $p = 1.1 > 1$ it converges. The antiderivative is $\\frac{x^{-0.1}}{-0.1}$; evaluating $\\lim_{b\\to\\infty}\\left[\\frac{x^{-0.1}}{-0.1}\\right]_1^b = 0 - \\frac{1}{-0.1} = 10$.",
        "zh": "由 $p = 1.1 > 1$ 知收敛。原函数为 $\\frac{x^{-0.1}}{-0.1}$；求值 $\\lim_{b\\to\\infty}\\left[\\frac{x^{-0.1}}{-0.1}\\right]_1^b = 0 - \\frac{1}{-0.1} = 10$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why is $\\int_{-1}^{1} \\frac{dx}{x^2}$ improper, and does it converge?",
        "zh": "$\\int_{-1}^{1} \\frac{dx}{x^2}$ 为何是反常积分，它是否收敛？"
      },
      "choices": [
        "the interval is infinite; it converges",
        "it is a proper integral equal to $2$",
        "the integrand is unbounded at $x=0$, and it diverges",
        "the integrand is negative, and it converges"
      ],
      "answer": 2,
      "explanation": {
        "en": "The integrand $\\frac{1}{x^2}$ blows up at $x=0$, which lies inside $[-1,1]$. Split at $0$; but $\\int_0^1 \\frac{dx}{x^2}$ has $p=2 > 1$ near zero, so it diverges — hence the whole integral diverges.",
        "zh": "被积函数 $\\frac{1}{x^2}$ 在 $x=0$ 处趋于无穷，而 $0$ 位于 $[-1,1]$ 内。在 $0$ 处拆分；但 $\\int_0^1 \\frac{dx}{x^2}$ 在零点附近 $p=2 > 1$，故发散——因此整个积分发散。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "$\\int_e^{\\infty} \\frac{dx}{x(\\ln x)^2} =$",
        "zh": "$\\int_e^{\\infty} \\frac{dx}{x(\\ln x)^2} =$"
      },
      "choices": [
        "diverges",
        "converges to $e$",
        "converges to $\\frac{1}{2}$",
        "converges to $1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Let $u = \\ln x$, $du = \\frac{dx}{x}$. When $x=e$, $u=1$; as $x\\to\\infty$, $u\\to\\infty$. The integral becomes $\\int_1^{\\infty} \\frac{du}{u^2} = 1$ (a $p=2$ integral).",
        "zh": "令 $u = \\ln x$，$du = \\frac{dx}{x}$。当 $x=e$ 时 $u=1$；当 $x\\to\\infty$ 时 $u\\to\\infty$。积分化为 $\\int_1^{\\infty} \\frac{du}{u^2} = 1$（$p=2$ 的积分）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_1^{\\infty} \\frac{dx}{x^5}$. Give a fraction a/b.",
        "zh": "计算 $\\int_1^{\\infty} \\frac{dx}{x^5}$。请填分数 a/b。"
      },
      "answer": "1/4",
      "accept": [
        "0.25",
        "0.250"
      ],
      "explanation": {
        "en": "$\\lim_{b\\to\\infty}\\left[-\\frac{1}{4x^4}\\right]_1^b = 0 - \\left(-\\frac{1}{4}\\right) = \\frac{1}{4}$. Here $p = 5 > 1$, so it converges.",
        "zh": "$\\lim_{b\\to\\infty}\\left[-\\frac{1}{4x^4}\\right]_1^b = 0 - \\left(-\\frac{1}{4}\\right) = \\frac{1}{4}$。这里 $p = 5 > 1$，故收敛。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^{\\infty} e^{-3x}\\, dx$. Give a fraction a/b.",
        "zh": "计算 $\\int_0^{\\infty} e^{-3x}\\, dx$。请填分数 a/b。"
      },
      "answer": "1/3",
      "accept": [
        "0.3333",
        "0.333"
      ],
      "explanation": {
        "en": "$\\lim_{b\\to\\infty}\\left[-\\frac{1}{3}e^{-3x}\\right]_0^b = 0 - \\left(-\\frac{1}{3}\\right) = \\frac{1}{3}$.",
        "zh": "$\\lim_{b\\to\\infty}\\left[-\\frac{1}{3}e^{-3x}\\right]_0^b = 0 - \\left(-\\frac{1}{3}\\right) = \\frac{1}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^1 \\frac{dx}{x^{1/4}}$. Give a fraction a/b.",
        "zh": "计算 $\\int_0^1 \\frac{dx}{x^{1/4}}$。请填分数 a/b。"
      },
      "answer": "4/3",
      "accept": [
        "1.333",
        "1.33"
      ],
      "explanation": {
        "en": "With $p = \\frac{1}{4} < 1$ near zero it converges: $\\lim_{a\\to 0^+}\\left[\\frac{4}{3}x^{3/4}\\right]_a^1 = \\frac{4}{3} - 0 = \\frac{4}{3}$.",
        "zh": "在零点附近 $p = \\frac{1}{4} < 1$，故收敛：$\\lim_{a\\to 0^+}\\left[\\frac{4}{3}x^{3/4}\\right]_a^1 = \\frac{4}{3} - 0 = \\frac{4}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_3^{\\infty} \\frac{dx}{(x-2)^2}$. Give an integer.",
        "zh": "计算 $\\int_3^{\\infty} \\frac{dx}{(x-2)^2}$。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0"
      ],
      "explanation": {
        "en": "With $u = x-2$: $\\lim_{b\\to\\infty}\\left[-\\frac{1}{x-2}\\right]_3^b = 0 - (-1) = 1$. The shift does not change the $p=2$ convergence.",
        "zh": "令 $u = x-2$：$\\lim_{b\\to\\infty}\\left[-\\frac{1}{x-2}\\right]_3^b = 0 - (-1) = 1$。平移不改变 $p=2$ 的收敛性。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_1^{\\infty} \\frac{4}{x^3}\\, dx$. Give an integer.",
        "zh": "计算 $\\int_1^{\\infty} \\frac{4}{x^3}\\, dx$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "$4\\lim_{b\\to\\infty}\\left[-\\frac{1}{2x^2}\\right]_1^b = 4\\left(0 + \\frac{1}{2}\\right) = 2$. The constant $4$ just scales the $p=3$ result $\\frac{1}{2}$.",
        "zh": "$4\\lim_{b\\to\\infty}\\left[-\\frac{1}{2x^2}\\right]_1^b = 4\\left(0 + \\frac{1}{2}\\right) = 2$。常数 $4$ 只是把 $p=3$ 的结果 $\\frac{1}{2}$ 放大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_0^{\\infty} 6\\,e^{-2x}\\, dx$. Give an integer.",
        "zh": "计算 $\\int_0^{\\infty} 6\\,e^{-2x}\\, dx$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0"
      ],
      "explanation": {
        "en": "$6\\lim_{b\\to\\infty}\\left[-\\frac{1}{2}e^{-2x}\\right]_0^b = 6\\left(0 + \\frac{1}{2}\\right) = 3$.",
        "zh": "$6\\lim_{b\\to\\infty}\\left[-\\frac{1}{2}e^{-2x}\\right]_0^b = 6\\left(0 + \\frac{1}{2}\\right) = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\int_9^{\\infty} \\frac{dx}{x^{3/2}}$. Give a fraction a/b.",
        "zh": "计算 $\\int_9^{\\infty} \\frac{dx}{x^{3/2}}$。请填分数 a/b。"
      },
      "answer": "2/3",
      "accept": [
        "0.6667",
        "0.667"
      ],
      "explanation": {
        "en": "With $p = \\frac{3}{2} > 1$ it converges. The antiderivative is $-\\frac{2}{\\sqrt{x}}$: $\\lim_{b\\to\\infty}\\left[-\\frac{2}{\\sqrt{x}}\\right]_9^b = 0 - \\left(-\\frac{2}{3}\\right) = \\frac{2}{3}$.",
        "zh": "由 $p = \\frac{3}{2} > 1$ 知收敛。原函数为 $-\\frac{2}{\\sqrt{x}}$：$\\lim_{b\\to\\infty}\\left[-\\frac{2}{\\sqrt{x}}\\right]_9^b = 0 - \\left(-\\frac{2}{3}\\right) = \\frac{2}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\int_1^{\\infty} \\frac{dx}{x^p}$, what is the boundary value of $p$ that separates convergence ($p$ above it) from divergence ($p$ at or below it)? Give an integer.",
        "zh": "对于 $\\int_1^{\\infty} \\frac{dx}{x^p}$，区分收敛（$p$ 大于它）与发散（$p$ 等于或小于它）的临界 $p$ 值是多少？请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0"
      ],
      "explanation": {
        "en": "The p-integral converges for $p > 1$ and diverges for $p \\le 1$. The dividing line is $p = 1$, where the antiderivative is $\\ln x \\to \\infty$.",
        "zh": "p 积分在 $p > 1$ 时收敛，在 $p \\le 1$ 时发散。分界线是 $p = 1$，此时原函数 $\\ln x \\to \\infty$。"
      }
    }
  ],
  "unit-7-differential-equations/slope-fields-and-separation": [
    {
      "type": "mc",
      "question": {
        "en": "In a slope field, all segments within any horizontal row (fixed $y$) are parallel. Which equation could produce this field?",
        "zh": "某斜率场中，任意一条横行（固定 $y$）内的所有线段都互相平行。下列哪个方程可能产生这个斜率场？"
      },
      "choices": [
        "$\\frac{dy}{dx} = 2y$",
        "$\\frac{dy}{dx} = 2x$",
        "$\\frac{dy}{dx} = x + y$",
        "$\\frac{dy}{dx} = x - y$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Parallel segments along each horizontal row mean the slope is the same for every $x$ at a fixed $y$ — the slope depends on $y$ alone, so $\\frac{dy}{dx} = 2y$. An equation in $x$ only would make vertical columns parallel instead, and one in both variables makes neither.",
        "zh": "每条横行内线段平行，说明在固定的 $y$ 处斜率与 $x$ 无关——斜率只依赖 $y$，故选 $\\frac{dy}{dx} = 2y$。只含 $x$ 的方程会使竖列平行；同时含两个变量的方程两者都不平行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For which differential equation are the segments horizontal exactly along the line $y = -x$?",
        "zh": "下列哪个微分方程的线段恰好在直线 $y = -x$ 上为水平？"
      },
      "choices": [
        "$\\frac{dy}{dx} = xy$",
        "$\\frac{dy}{dx} = x + y$",
        "$\\frac{dy}{dx} = x - y$",
        "$\\frac{dy}{dx} = \\frac{x}{y}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Horizontal segments occur where the slope is zero. Setting $x + y = 0$ gives the line $y = -x$, so $\\frac{dy}{dx} = x + y$ matches. The equation $x - y$ is zero along $y = x$, and $xy$ is zero along the two axes.",
        "zh": "水平线段出现在斜率为零处。令 $x + y = 0$ 得直线 $y = -x$，故 $\\frac{dy}{dx} = x + y$ 吻合。$x - y$ 在 $y = x$ 上为零，$xy$ 在两条坐标轴上为零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $y = f(x)$ solve $\\frac{dy}{dx} = \\frac{4x}{y}$ with $f(0) = 3$. Find $f(2)$. Give an integer.",
        "zh": "设 $y = f(x)$ 是满足 $f(0) = 3$ 的 $\\frac{dy}{dx} = \\frac{4x}{y}$ 的解。求 $f(2)$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Separate: $y\\,dy = 4x\\,dx$, so $\\frac{y^2}{2} = 2x^2 + C$, i.e. $y^2 = 4x^2 + C_1$. From $(0, 3)$: $C_1 = 9$. Take the positive branch since $f(0) > 0$: $f(2) = \\sqrt{16 + 9} = \\sqrt{25} = 5$.",
        "zh": "分离变量：$y\\,dy = 4x\\,dx$，得 $\\frac{y^2}{2} = 2x^2 + C$，即 $y^2 = 4x^2 + C_1$。代入 $(0, 3)$：$C_1 = 9$。因 $f(0) > 0$ 取正支：$f(2) = \\sqrt{16 + 9} = \\sqrt{25} = 5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which function is a solution of $\\frac{dy}{dx} = 4y$ satisfying $y(0) = 3$?",
        "zh": "下列哪个函数是满足 $y(0) = 3$ 的微分方程 $\\frac{dy}{dx} = 4y$ 的解？"
      },
      "choices": [
        "$y = 3e^{-4x}$",
        "$y = 4e^{3x}$",
        "$y = 3e^{4x}$",
        "$y = e^{4x} + 2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For $y = 3e^{4x}$: $\\frac{dy}{dx} = 12e^{4x} = 4(3e^{4x}) = 4y$, and $y(0) = 3$. The function $e^{4x} + 2$ also passes through $(0, 3)$, but its derivative $4e^{4x}$ does not equal $4y = 4e^{4x} + 8$ — checking only the initial condition is not enough.",
        "zh": "对 $y = 3e^{4x}$：$\\frac{dy}{dx} = 12e^{4x} = 4(3e^{4x}) = 4y$，且 $y(0) = 3$。$e^{4x} + 2$ 也过点 $(0, 3)$，但其导数 $4e^{4x}$ 不等于 $4y = 4e^{4x} + 8$——只验证初始条件是不够的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the general solution of $\\frac{dy}{dx} = 2xy$?",
        "zh": "微分方程 $\\frac{dy}{dx} = 2xy$ 的通解是什么？"
      },
      "choices": [
        "$y = x^2 + C$",
        "$y = Ce^{2x}$",
        "$y = e^{x^2} + C$",
        "$y = Ce^{x^2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Separate: $\\frac{dy}{y} = 2x\\,dx$, integrate to get $\\ln|y| = x^2 + C$, and exponentiate to $y = Ce^{x^2}$. The constant must multiply the exponential (it comes from $e^C$), not add to it.",
        "zh": "分离变量：$\\frac{dy}{y} = 2x\\,dx$，积分得 $\\ln|y| = x^2 + C$，取指数得 $y = Ce^{x^2}$。常数应与指数相乘（来自 $e^C$），而不是相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A substance decays as $y = 80\\left(\\frac{1}{2}\\right)^{t/5}$ (with $t$ in years). Find $y$ when $t = 15$. Give an integer.",
        "zh": "某物质按 $y = 80\\left(\\frac{1}{2}\\right)^{t/5}$ 衰变（$t$ 以年为单位）。求 $t = 15$ 时的 $y$。请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "The half-life is $5$ years, and $15$ years is three half-lives: $80 \\to 40 \\to 20 \\to 10$. Directly, $\\left(\\frac{1}{2}\\right)^{15/5} = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$, and $80 \\cdot \\frac{1}{8} = 10$.",
        "zh": "半衰期为 $5$ 年，$15$ 年即三个半衰期：$80 \\to 40 \\to 20 \\to 10$。直接计算：$\\left(\\frac{1}{2}\\right)^{15/5} = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$，$80 \\cdot \\frac{1}{8} = 10$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A radioactive sample decays according to $\\frac{dy}{dt} = ky$ and has a half-life of $8$ years. What is $k$?",
        "zh": "某放射性样品按 $\\frac{dy}{dt} = ky$ 衰变，半衰期为 $8$ 年。$k$ 等于多少？"
      },
      "choices": [
        "$-\\frac{\\ln 2}{8}$",
        "$\\frac{\\ln 2}{8}$",
        "$-\\frac{8}{\\ln 2}$",
        "$-\\frac{\\ln 2}{4}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The solution is $y = y_0 e^{kt}$. Halving in $8$ years means $e^{8k} = \\frac{1}{2}$, so $8k = \\ln\\frac{1}{2} = -\\ln 2$ and $k = -\\frac{\\ln 2}{8}$. Decay requires $k < 0$.",
        "zh": "解为 $y = y_0 e^{kt}$。$8$ 年减半意味着 $e^{8k} = \\frac{1}{2}$，故 $8k = \\ln\\frac{1}{2} = -\\ln 2$，即 $k = -\\frac{\\ln 2}{8}$。衰变要求 $k < 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A bacteria culture grows at a rate proportional to its size and triples every $3$ hours. If there are $20$ grams at $t = 0$, how many grams are there after $6$ hours? Give an integer.",
        "zh": "某细菌培养物的增长率与其总量成正比，每 $3$ 小时增至 $3$ 倍。若 $t = 0$ 时有 $20$ 克，$6$ 小时后有多少克？请填一个整数。"
      },
      "answer": "180",
      "accept": [
        "180.0"
      ],
      "explanation": {
        "en": "Six hours is two tripling periods, so the amount is multiplied by $3^2 = 9$: $20 \\cdot 9 = 180$ grams. No logarithms are needed once you count the tripling periods.",
        "zh": "$6$ 小时是两个三倍周期，总量乘以 $3^2 = 9$：$20 \\cdot 9 = 180$ 克。数清三倍周期后无需对数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the general solution of $\\frac{dy}{dx} = \\frac{y}{x}$ for $x > 0$?",
        "zh": "当 $x > 0$ 时，微分方程 $\\frac{dy}{dx} = \\frac{y}{x}$ 的通解是什么？"
      },
      "choices": [
        "$y = x + C$",
        "$y = Cx$",
        "$y = Ce^x$",
        "$y = \\frac{x^2}{2} + C$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Separate: $\\frac{dy}{y} = \\frac{dx}{x}$, integrate to $\\ln|y| = \\ln|x| + C$, exponentiate to $|y| = e^C|x|$, so $y = Cx$. The solution curves are straight lines through the origin.",
        "zh": "分离变量：$\\frac{dy}{y} = \\frac{dx}{x}$，积分得 $\\ln|y| = \\ln|x| + C$，取指数得 $|y| = e^C|x|$，故 $y = Cx$。解曲线是过原点的直线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the slope field of $\\frac{dy}{dx} = x + 2y$, what slope is drawn at the point $(1, 3)$? Give an integer.",
        "zh": "在 $\\frac{dy}{dx} = x + 2y$ 的斜率场中，点 $(1, 3)$ 处画出的斜率是多少？请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Substitute directly: $\\frac{dy}{dx} = 1 + 2(3) = 7$. Reading a slope from a slope field is just plugging the point into the right-hand side.",
        "zh": "直接代入：$\\frac{dy}{dx} = 1 + 2(3) = 7$。从斜率场读斜率就是把点代入方程右端。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the slope field of $\\frac{dy}{dx} = y - 1$, all segments are horizontal along which line?",
        "zh": "在微分方程 $\\frac{dy}{dx} = y - 1$ 的斜率场中，线段沿哪条直线全部水平？"
      },
      "choices": [
        "$y = 0$",
        "$x = 1$",
        "$y = 1$",
        "$x = 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Segments are horizontal where the slope is zero: $y - 1 = 0$ gives $y = 1$. Because the slope depends only on $y$, every segment in a given horizontal row is parallel.",
        "zh": "线段在斜率为零处水平：$y - 1 = 0$ 得 $y = 1$。由于斜率只依赖 $y$，同一横行内的每条线段都平行。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $y = f(x)$ solve $\\frac{dy}{dx} = y^2$ with $f(0) = 1$. Find $f\\left(\\frac{1}{2}\\right)$. Give an integer.",
        "zh": "设 $y = f(x)$ 是满足 $f(0) = 1$ 的 $\\frac{dy}{dx} = y^2$ 的解。求 $f\\left(\\frac{1}{2}\\right)$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "Separate: $y^{-2}\\,dy = dx$, so $-\\frac{1}{y} = x + C$. From $(0, 1)$: $C = -1$, giving $-\\frac{1}{y} = x - 1$, so $y = \\frac{1}{1 - x}$. Then $f\\left(\\frac{1}{2}\\right) = \\frac{1}{1 - 1/2} = 2$.",
        "zh": "分离变量：$y^{-2}\\,dy = dx$，得 $-\\frac{1}{y} = x + C$。代入 $(0, 1)$：$C = -1$，即 $-\\frac{1}{y} = x - 1$，故 $y = \\frac{1}{1 - x}$。于是 $f\\left(\\frac{1}{2}\\right) = \\frac{1}{1 - 1/2} = 2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the general solution of $\\frac{dy}{dx} = e^{x - y}$?",
        "zh": "微分方程 $\\frac{dy}{dx} = e^{x - y}$ 的通解是什么？"
      },
      "choices": [
        "$y = e^x + C$",
        "$y = \\ln(e^x) + C$",
        "$y = e^x - e^{-y}$",
        "$y = \\ln(e^x + C)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Write $e^{x-y} = e^x e^{-y}$ and separate: $e^y\\,dy = e^x\\,dx$. Integrating gives $e^y = e^x + C$, so $y = \\ln(e^x + C)$. The key step is splitting the exponential before separating.",
        "zh": "把 $e^{x-y} = e^x e^{-y}$ 分离变量：$e^y\\,dy = e^x\\,dx$。积分得 $e^y = e^x + C$，故 $y = \\ln(e^x + C)$。关键一步是先拆开指数再分离。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity is modeled by $y = 100 \\cdot 2^{t/6}$. At what time $t$ does $y$ reach $800$? Give an integer.",
        "zh": "某量由 $y = 100 \\cdot 2^{t/6}$ 刻画。$y$ 在何时 $t$ 达到 $800$？请填一个整数。"
      },
      "answer": "18",
      "accept": [
        "18.0"
      ],
      "explanation": {
        "en": "Set $100 \\cdot 2^{t/6} = 800$, so $2^{t/6} = 8 = 2^3$. Then $\\frac{t}{6} = 3$ and $t = 18$.",
        "zh": "令 $100 \\cdot 2^{t/6} = 800$，得 $2^{t/6} = 8 = 2^3$。故 $\\frac{t}{6} = 3$，$t = 18$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The rate of change of a quantity $Q$ is proportional to $Q$ itself. Which differential equation models this?",
        "zh": "某量 $Q$ 的变化率与 $Q$ 本身成正比。下列哪个微分方程刻画了这一点？"
      },
      "choices": [
        "$\\frac{dQ}{dt} = kQ$",
        "$\\frac{dQ}{dt} = kt$",
        "$\\frac{dQ}{dt} = Q + k$",
        "$\\frac{dQ}{dt} = \\frac{k}{Q}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Proportionality to $Q$ means the rate equals a constant times $Q$: $\\frac{dQ}{dt} = kQ$. This is the exponential model with solution $Q = Q_0 e^{kt}$.",
        "zh": "与 $Q$ 成正比意味着变化率等于常数乘以 $Q$：$\\frac{dQ}{dt} = kQ$。这就是指数模型，解为 $Q = Q_0 e^{kt}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the slope field of $\\frac{dy}{dx} = x^2 - y$, what slope is drawn at the point $(2, 4)$? Give an integer.",
        "zh": "在 $\\frac{dy}{dx} = x^2 - y$ 的斜率场中，点 $(2, 4)$ 处画出的斜率是多少？请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "Substitute: $\\frac{dy}{dx} = 2^2 - 4 = 0$. The segment there is horizontal — these zero-slope points lie along the parabola $y = x^2$.",
        "zh": "代入：$\\frac{dy}{dx} = 2^2 - 4 = 0$。该处线段水平——这些零斜率点位于抛物线 $y = x^2$ 上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The solution curves of $\\frac{dy}{dx} = \\frac{x}{y}$ are",
        "zh": "微分方程 $\\frac{dy}{dx} = \\frac{x}{y}$ 的解曲线是"
      },
      "choices": [
        "circles centered at the origin",
        "hyperbolas $y^2 - x^2 = C$",
        "lines through the origin $y = Cx$",
        "parabolas $y = x^2 + C$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Separate: $y\\,dy = x\\,dx$, so $\\frac{y^2}{2} = \\frac{x^2}{2} + C$, giving $y^2 - x^2 = C_1$ — a family of hyperbolas. The sign of the $x$-term distinguishes these from the circles produced by $\\frac{dy}{dx} = -\\frac{x}{y}$.",
        "zh": "分离变量：$y\\,dy = x\\,dx$，得 $\\frac{y^2}{2} = \\frac{x^2}{2} + C$，即 $y^2 - x^2 = C_1$——一族双曲线。$x$ 项的符号使它们区别于 $\\frac{dy}{dx} = -\\frac{x}{y}$ 所产生的圆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The solution curves of $\\frac{dy}{dx} = -\\frac{x}{y}$ are",
        "zh": "微分方程 $\\frac{dy}{dx} = -\\frac{x}{y}$ 的解曲线是"
      },
      "choices": [
        "lines through the origin",
        "parabolas opening upward",
        "circles centered at the origin",
        "vertical lines"
      ],
      "answer": 2,
      "explanation": {
        "en": "Separate: $y\\,dy = -x\\,dx$, so $\\frac{y^2}{2} = -\\frac{x^2}{2} + C$, giving $x^2 + y^2 = C_1$ — concentric circles. Each segment is perpendicular to the radius at its point.",
        "zh": "分离变量：$y\\,dy = -x\\,dx$，得 $\\frac{y^2}{2} = -\\frac{x^2}{2} + C$，即 $x^2 + y^2 = C_1$——一族同心圆。每条线段都垂直于该点处的半径。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity satisfies $\\frac{dy}{dt} = (\\ln 5)\\,y$ with $y(0) = 6$. At what time $t$ does $y$ reach $150$? Give an integer.",
        "zh": "某量满足 $\\frac{dy}{dt} = (\\ln 5)\\,y$，$y(0) = 6$。$y$ 在何时 $t$ 达到 $150$？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "The solution is $y = 6e^{(\\ln 5)t} = 6 \\cdot 5^t$. Setting $6 \\cdot 5^t = 150$ gives $5^t = 25 = 5^2$, so $t = 2$. Recognizing $e^{(\\ln 5)t} = 5^t$ avoids logarithm tables.",
        "zh": "解为 $y = 6e^{(\\ln 5)t} = 6 \\cdot 5^t$。令 $6 \\cdot 5^t = 150$ 得 $5^t = 25 = 5^2$，故 $t = 2$。看出 $e^{(\\ln 5)t} = 5^t$ 即可免去查对数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A population grows so that $P = P_0 e^{0.05t}$. What is its doubling time?",
        "zh": "某种群按 $P = P_0 e^{0.05t}$ 增长。它的倍增时间是多少？"
      },
      "choices": [
        "$0.05\\ln 2$",
        "$\\frac{2}{0.05}$",
        "$\\ln(0.1)$",
        "$20\\ln 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Doubling requires $e^{0.05t} = 2$, so $0.05t = \\ln 2$ and $t = \\frac{\\ln 2}{0.05} = 20\\ln 2 \\approx 13.9$. Dividing $\\ln 2$ by the rate constant (not the reverse) gives the doubling time.",
        "zh": "翻倍要求 $e^{0.05t} = 2$，故 $0.05t = \\ln 2$，$t = \\frac{\\ln 2}{0.05} = 20\\ln 2 \\approx 13.9$。用 $\\ln 2$ 除以速率常数（而非相反）即得倍增时间。"
      }
    }
  ],
  "unit-7-differential-equations/eulers-method": [
    {
      "type": "mc",
      "question": {
        "en": "If the solution curve of a differential equation is concave up, an Euler's method approximation of a future $y$-value will be",
        "zh": "若某微分方程的解曲线上凹，用欧拉方法估算未来的 $y$ 值时结果会"
      },
      "choices": [
        "an underestimate",
        "an overestimate",
        "exact",
        "impossible to determine"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a concave-up curve the tangent lines lie below the curve, so each Euler step lands below the true solution, making the approximation an underestimate.",
        "zh": "上凹曲线的切线位于曲线下方，故每一步欧拉方法都落在真实解下方，使估计值偏低。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dy}{dx} = x + y$ with $y(0) = 1$, one Euler step with $\\Delta x = 0.2$ arrives at which point?",
        "zh": "对 $\\frac{dy}{dx} = x + y$，$y(0) = 1$，用一步 $\\Delta x = 0.2$ 的欧拉方法到达哪个点？"
      },
      "choices": [
        "$(0.2, 1.0)$",
        "$(0.2, 1.2)$",
        "$(0.2, 1.4)$",
        "$(0, 1.2)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Slope at $(0, 1)$ is $0 + 1 = 1$. The new point is $x = 0 + 0.2 = 0.2$ and $y = 1 + 1(0.2) = 1.2$. Both coordinates advance.",
        "zh": "$(0, 1)$ 处斜率为 $0 + 1 = 1$。新点为 $x = 0 + 0.2 = 0.2$，$y = 1 + 1(0.2) = 1.2$。两个坐标都要前进。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = x + y$ with $y(0) = 1$, use one Euler step with $\\Delta x = 1$ to approximate $y(1)$. Give an integer.",
        "zh": "对 $\\frac{dy}{dx} = x + y$，$y(0) = 1$，用一步 $\\Delta x = 1$ 的欧拉方法估算 $y(1)$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "Slope at $(0, 1)$ is $0 + 1 = 1$, so $y(1) \\approx 1 + 1(1) = 2$. A single large step is crude — the true value is $2e - 2 \\approx 3.44$.",
        "zh": "$(0, 1)$ 处斜率为 $0 + 1 = 1$，故 $y(1) \\approx 1 + 1(1) = 2$。单个大步很粗糙——真实值为 $2e - 2 \\approx 3.44$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Euler's method produces the exact solution value when the solution curve is",
        "zh": "当解曲线为何种形状时，欧拉方法给出精确的解值？"
      },
      "choices": [
        "a parabola",
        "an exponential curve",
        "a straight line",
        "concave up"
      ],
      "answer": 2,
      "explanation": {
        "en": "Euler's method follows tangent lines. If the solution is itself a straight line, the tangent coincides with the curve at every step, so there is no error. Any curvature introduces error.",
        "zh": "欧拉方法沿切线前进。若解本身是直线，切线在每一步都与曲线重合，故无误差。任何弯曲都会带来误差。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = 2x$ with $y(0) = 1$, use two Euler steps with $\\Delta x = 0.5$ to approximate $y(1)$. Give a decimal.",
        "zh": "对 $\\frac{dy}{dx} = 2x$，$y(0) = 1$，用两步 $\\Delta x = 0.5$ 的欧拉方法估算 $y(1)$。请填一个小数。"
      },
      "answer": "1.5",
      "accept": [
        "1.50",
        "3/2"
      ],
      "explanation": {
        "en": "Step 1: slope at $x = 0$ is $0$, so $y(0.5) \\approx 1 + 0(0.5) = 1$. Step 2: slope at $x = 0.5$ is $1$, so $y(1) \\approx 1 + 1(0.5) = 1.5$. (Exact $y = x^2 + 1$ gives $2$, so this underestimates.)",
        "zh": "第一步：$x = 0$ 处斜率为 $0$，$y(0.5) \\approx 1 + 0(0.5) = 1$。第二步：$x = 0.5$ 处斜率为 $1$，$y(1) \\approx 1 + 1(0.5) = 1.5$。（精确解 $y = x^2 + 1$ 给出 $2$，故偏低。）"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using a smaller step size in Euler's method generally",
        "zh": "在欧拉方法中使用更小的步长通常会"
      },
      "choices": [
        "increases the error",
        "has no effect on accuracy",
        "makes the method exact",
        "decreases the error but requires more computation"
      ],
      "answer": 3,
      "explanation": {
        "en": "Smaller steps make the constant-slope assumption more accurate on each interval, reducing error — but more steps are needed to cover the same interval. The method stays approximate for any curved solution.",
        "zh": "步长越小，每个区间上斜率不变的假设越准确，误差越小——但覆盖同一区间需要更多步。对任何弯曲的解，该方法始终是近似的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dy}{dx} = 2x - 1$ with $y(1) = 4$, one Euler step with $\\Delta x = 0.5$ arrives at which point?",
        "zh": "对 $\\frac{dy}{dx} = 2x - 1$，$y(1) = 4$，用一步 $\\Delta x = 0.5$ 的欧拉方法到达哪个点？"
      },
      "choices": [
        "$(1.5, 4.5)$",
        "$(1.5, 5)$",
        "$(1.5, 4)$",
        "$(2, 4.5)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Slope at $(1, 4)$ is $2(1) - 1 = 1$. New point: $x = 1 + 0.5 = 1.5$, $y = 4 + 1(0.5) = 4.5$.",
        "zh": "$(1, 4)$ 处斜率为 $2(1) - 1 = 1$。新点：$x = 1 + 0.5 = 1.5$，$y = 4 + 1(0.5) = 4.5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = y - x$ with $y(0) = 2$, use two Euler steps with $\\Delta x = 0.5$ to approximate $y(1)$. Give a decimal.",
        "zh": "对 $\\frac{dy}{dx} = y - x$，$y(0) = 2$，用两步 $\\Delta x = 0.5$ 的欧拉方法估算 $y(1)$。请填一个小数。"
      },
      "answer": "4.25",
      "accept": [
        "4.250",
        "17/4"
      ],
      "explanation": {
        "en": "Step 1: slope at $(0, 2)$ is $2 - 0 = 2$, so $y(0.5) \\approx 2 + 2(0.5) = 3$. Step 2: slope at $(0.5, 3)$ is $3 - 0.5 = 2.5$, so $y(1) \\approx 3 + 2.5(0.5) = 4.25$.",
        "zh": "第一步：$(0, 2)$ 处斜率为 $2 - 0 = 2$，$y(0.5) \\approx 2 + 2(0.5) = 3$。第二步：$(0.5, 3)$ 处斜率为 $3 - 0.5 = 2.5$，$y(1) \\approx 3 + 2.5(0.5) = 4.25$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dy}{dx} = y$ with $y(0) = 1$, use two Euler steps with $\\Delta x = 1$ to approximate $y(2)$.",
        "zh": "对 $\\frac{dy}{dx} = y$，$y(0) = 1$，用两步 $\\Delta x = 1$ 的欧拉方法估算 $y(2)$。"
      },
      "choices": [
        "$2$",
        "$4$",
        "$7.39$",
        "$3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Step 1: slope at $(0, 1)$ is $1$, so $y(1) \\approx 1 + 1(1) = 2$. Step 2: slope at $(1, 2)$ is $2$, so $y(2) \\approx 2 + 2(1) = 4$. (The exact value $e^2 \\approx 7.39$ is much larger — a big step size underestimates badly here.)",
        "zh": "第一步：$(0, 1)$ 处斜率为 $1$，$y(1) \\approx 1 + 1(1) = 2$。第二步：$(1, 2)$ 处斜率为 $2$，$y(2) \\approx 2 + 2(1) = 4$。（精确值 $e^2 \\approx 7.39$ 大得多——这里步长太大导致严重低估。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = 6x^2$ with $y(1) = 1$, use two Euler steps with $\\Delta x = 1$ to approximate $y(3)$. Give an integer.",
        "zh": "对 $\\frac{dy}{dx} = 6x^2$，$y(1) = 1$，用两步 $\\Delta x = 1$ 的欧拉方法估算 $y(3)$。请填一个整数。"
      },
      "answer": "31",
      "accept": [
        "31.0"
      ],
      "explanation": {
        "en": "Step 1: slope at $x = 1$ is $6(1)^2 = 6$, so $y(2) \\approx 1 + 6(1) = 7$. Step 2: slope at $x = 2$ is $6(4) = 24$, so $y(3) \\approx 7 + 24(1) = 31$.",
        "zh": "第一步：$x = 1$ 处斜率为 $6(1)^2 = 6$，$y(2) \\approx 1 + 6(1) = 7$。第二步：$x = 2$ 处斜率为 $6(4) = 24$，$y(3) \\approx 7 + 24(1) = 31$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The error in Euler's method arises mainly because the method",
        "zh": "欧拉方法产生误差的主要原因是该方法"
      },
      "choices": [
        "rounds numbers too early",
        "uses the wrong slope formula",
        "assumes the slope is constant across each step",
        "takes too many steps"
      ],
      "answer": 2,
      "explanation": {
        "en": "Each Euler step replaces the curving solution with a straight tangent line, holding the slope fixed across the interval. Because the true slope actually changes, error accumulates step by step.",
        "zh": "欧拉方法每一步都用直的切线代替弯曲的解，在整个区间上把斜率固定。由于真实斜率其实在变化，误差逐步累积。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = x - 2y$ with $y(0) = 1$, use one Euler step with $\\Delta x = 0.5$ to approximate $y(0.5)$. Give an integer.",
        "zh": "对 $\\frac{dy}{dx} = x - 2y$，$y(0) = 1$，用一步 $\\Delta x = 0.5$ 的欧拉方法估算 $y(0.5)$。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "Slope at $(0, 1)$ is $0 - 2(1) = -2$, so $y(0.5) \\approx 1 + (-2)(0.5) = 0$.",
        "zh": "$(0, 1)$ 处斜率为 $0 - 2(1) = -2$，故 $y(0.5) \\approx 1 + (-2)(0.5) = 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dy}{dx} = x + y$ with $y(0) = 2$, one Euler step with $\\Delta x = 0.1$ arrives at which point?",
        "zh": "对 $\\frac{dy}{dx} = x + y$，$y(0) = 2$，用一步 $\\Delta x = 0.1$ 的欧拉方法到达哪个点？"
      },
      "choices": [
        "$(0.1, 2.0)$",
        "$(0.1, 2.1)$",
        "$(0, 2.2)$",
        "$(0.1, 2.2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Slope at $(0, 2)$ is $0 + 2 = 2$. New point: $x = 0.1$, $y = 2 + 2(0.1) = 2.2$. Remember to advance $x$ as well as $y$.",
        "zh": "$(0, 2)$ 处斜率为 $0 + 2 = 2$。新点：$x = 0.1$，$y = 2 + 2(0.1) = 2.2$。记住 $x$ 和 $y$ 都要前进。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = xy$ with $y(1) = 2$, use one Euler step with $\\Delta x = 0.5$ to approximate $y(1.5)$. Give an integer.",
        "zh": "对 $\\frac{dy}{dx} = xy$，$y(1) = 2$，用一步 $\\Delta x = 0.5$ 的欧拉方法估算 $y(1.5)$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0"
      ],
      "explanation": {
        "en": "Slope at $(1, 2)$ is $1 \\cdot 2 = 2$, so $y(1.5) \\approx 2 + 2(0.5) = 3$.",
        "zh": "$(1, 2)$ 处斜率为 $1 \\cdot 2 = 2$，故 $y(1.5) \\approx 2 + 2(0.5) = 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The solution of a differential equation is concave down on $[0, 2]$. An Euler approximation of $y(2)$ starting at $x = 0$ will be",
        "zh": "某微分方程的解在 $[0, 2]$ 上下凹。从 $x = 0$ 出发用欧拉方法估算 $y(2)$，结果会"
      },
      "choices": [
        "too large",
        "too small",
        "exact",
        "unrelated to the true value"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a concave-down curve the tangent lines lie above the curve, so each Euler step overshoots and the final estimate is too large.",
        "zh": "下凹曲线的切线位于曲线上方，故每一步欧拉方法都偏高，最终估计值过大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = 10 - y$ with $y(0) = 0$, use two Euler steps with $\\Delta x = 1$ to approximate $y(2)$. Give an integer.",
        "zh": "对 $\\frac{dy}{dx} = 10 - y$，$y(0) = 0$，用两步 $\\Delta x = 1$ 的欧拉方法估算 $y(2)$。请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "Step 1: slope at $(0, 0)$ is $10 - 0 = 10$, so $y(1) \\approx 0 + 10(1) = 10$. Step 2: slope at $(1, 10)$ is $10 - 10 = 0$, so $y(2) \\approx 10 + 0(1) = 10$.",
        "zh": "第一步：$(0, 0)$ 处斜率为 $10 - 0 = 10$，$y(1) \\approx 0 + 10(1) = 10$。第二步：$(1, 10)$ 处斜率为 $10 - 10 = 0$，$y(2) \\approx 10 + 0(1) = 10$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dy}{dx} = x^2$ with $y(0) = 0$, one Euler step with $\\Delta x = 0.5$ gives $y(0.5) \\approx$",
        "zh": "对 $\\frac{dy}{dx} = x^2$，$y(0) = 0$，用一步 $\\Delta x = 0.5$ 的欧拉方法得 $y(0.5) \\approx$"
      },
      "choices": [
        "$0.25$",
        "$0$",
        "$0.5$",
        "$0.125$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Slope at $(0, 0)$ is $0^2 = 0$, so $y(0.5) \\approx 0 + 0(0.5) = 0$. The starting slope of zero means the first step does not move $y$ at all, even though the true solution does rise.",
        "zh": "$(0, 0)$ 处斜率为 $0^2 = 0$，故 $y(0.5) \\approx 0 + 0(0.5) = 0$。起点斜率为零意味着第一步完全不改变 $y$，尽管真实解确实上升。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dy}{dx} = x + 4$ with $y(2) = 5$, use one Euler step with $\\Delta x = 0.5$ to approximate $y(2.5)$. Give an integer.",
        "zh": "对 $\\frac{dy}{dx} = x + 4$，$y(2) = 5$，用一步 $\\Delta x = 0.5$ 的欧拉方法估算 $y(2.5)$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "Slope at $(2, 5)$ is $2 + 4 = 6$, so $y(2.5) \\approx 5 + 6(0.5) = 8$.",
        "zh": "$(2, 5)$ 处斜率为 $2 + 4 = 6$，故 $y(2.5) \\approx 5 + 6(0.5) = 8$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In one step of Euler's method, the change $\\Delta y$ equals",
        "zh": "欧拉方法每走一步，$y$ 的变化量 $\\Delta y$ 等于"
      },
      "choices": [
        "the step size",
        "old $y$ times the slope",
        "slope × step size",
        "slope ÷ step size"
      ],
      "answer": 2,
      "explanation": {
        "en": "From $y_{n+1} = y_n + f(x_n, y_n)\\,\\Delta x$, the increment is $\\Delta y = \\text{slope} \\times \\Delta x$. It is a product, not a quotient.",
        "zh": "由 $y_{n+1} = y_n + f(x_n, y_n)\\,\\Delta x$，增量为 $\\Delta y = \\text{斜率} \\times \\Delta x$。它是乘积，而非商。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dy}{dx} = 2y$ with $y(0) = 1$, one Euler step with $\\Delta x = 0.5$ gives $y(0.5) \\approx 2$. Compared with the exact value $e \\approx 2.72$, this estimate is",
        "zh": "对 $\\frac{dy}{dx} = 2y$，$y(0) = 1$，用一步 $\\Delta x = 0.5$ 的欧拉方法得 $y(0.5) \\approx 2$。与精确值 $e \\approx 2.72$ 相比，这个估计"
      },
      "choices": [
        "exact",
        "an overestimate",
        "equal to $e$",
        "an underestimate"
      ],
      "answer": 3,
      "explanation": {
        "en": "Slope at $(0, 1)$ is $2$, so $y(0.5) \\approx 1 + 2(0.5) = 2$. Since the solution $y = e^{2x}$ is concave up, the tangent step falls below the true value $e \\approx 2.72$ — an underestimate.",
        "zh": "$(0, 1)$ 处斜率为 $2$，故 $y(0.5) \\approx 1 + 2(0.5) = 2$。由于解 $y = e^{2x}$ 上凹，切线步落在真实值 $e \\approx 2.72$ 下方——是低估。"
      }
    }
  ],
  "unit-7-differential-equations/logistic-growth": [
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.2P\\left(1 - \\frac{P}{750}\\right)$, the carrying capacity is",
        "zh": "对 $\\frac{dP}{dt} = 0.2P\\left(1 - \\frac{P}{750}\\right)$，承载力是"
      },
      "choices": [
        "$750$",
        "$375$",
        "$0.2$",
        "$1500$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The carrying capacity is the value of $P$ making the factor $1 - \\frac{P}{L}$ zero, read directly from the denominator: $L = 750$.",
        "zh": "承载力是使因子 $1 - \\frac{P}{L}$ 为零的 $P$ 值，直接从分母读出：$L = 750$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.4P\\left(1 - \\frac{P}{900}\\right)$, the growth rate is greatest when $P =$",
        "zh": "对 $\\frac{dP}{dt} = 0.4P\\left(1 - \\frac{P}{900}\\right)$，增长速率在 $P$ 等于多少时最大？"
      },
      "choices": [
        "$900$",
        "$450$",
        "$225$",
        "$0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Logistic growth is fastest at half the carrying capacity: $P = \\frac{900}{2} = 450$. As a parabola in $P$ with roots $0$ and $900$, $\\frac{dP}{dt}$ peaks at the midpoint.",
        "zh": "逻辑斯谛增长在承载力一半处最快：$P = \\frac{900}{2} = 450$。作为关于 $P$、根为 $0$ 和 $900$ 的抛物线，$\\frac{dP}{dt}$ 在中点取最大值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.6P\\left(1 - \\frac{P}{1500}\\right)$ with $P(0) = 200$, find $\\lim_{t\\to\\infty} P(t)$. Give an integer.",
        "zh": "对 $\\frac{dP}{dt} = 0.6P\\left(1 - \\frac{P}{1500}\\right)$，$P(0) = 200$，求 $\\lim_{t\\to\\infty} P(t)$。请填一个整数。"
      },
      "answer": "1500",
      "accept": [
        "1500.0"
      ],
      "explanation": {
        "en": "With $0 < P_0 < L$, the population approaches the carrying capacity $L = 1500$ as $t \\to \\infty$.",
        "zh": "当 $0 < P_0 < L$ 时，种群在 $t \\to \\infty$ 时趋近承载力 $L = 1500$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a logistic model with $0 < P_0 < \\frac{L}{2}$, the solution curve $P(t)$ initially is",
        "zh": "对满足 $0 < P_0 < \\frac{L}{2}$ 的逻辑斯谛模型，解曲线 $P(t)$ 起初是"
      },
      "choices": [
        "concave down",
        "linear",
        "concave up",
        "constant"
      ],
      "answer": 2,
      "explanation": {
        "en": "Below $\\frac{L}{2}$ the growth rate is still increasing, so $P(t)$ is concave up; it switches to concave down at the inflection point $P = \\frac{L}{2}$.",
        "zh": "在 $\\frac{L}{2}$ 以下增长速率仍在上升，故 $P(t)$ 上凹；到拐点 $P = \\frac{L}{2}$ 时转为下凹。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{900}\\right)$, at what population $P$ is the growth rate greatest? Give an integer.",
        "zh": "对 $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{900}\\right)$，种群 $P$ 为多少时增长速率最大？请填一个整数。"
      },
      "answer": "450",
      "accept": [
        "450.0"
      ],
      "explanation": {
        "en": "Growth is fastest at half the carrying capacity: $P = \\frac{900}{2} = 450$.",
        "zh": "增长在承载力一半处最快：$P = \\frac{900}{2} = 450$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the logistic equation $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$, the equilibrium solutions are",
        "zh": "对逻辑斯谛方程 $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$，平衡解是"
      },
      "choices": [
        "$P = \\frac{L}{2}$ only",
        "$P = k$",
        "$P = 0$ only",
        "$P = 0$ and $P = L$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Equilibria are the constant solutions where $\\frac{dP}{dt} = 0$. The product $kP(1 - \\frac{P}{L})$ vanishes at $P = 0$ and $P = L$.",
        "zh": "平衡解是使 $\\frac{dP}{dt} = 0$ 的常数解。乘积 $kP(1 - \\frac{P}{L})$ 在 $P = 0$ 和 $P = L$ 处为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A population follows $\\frac{dP}{dt} = 5P - 0.02P^2$. What is the carrying capacity?",
        "zh": "某种群满足 $\\frac{dP}{dt} = 5P - 0.02P^2$。承载力是多少？"
      },
      "choices": [
        "$250$",
        "$100$",
        "$500$",
        "$0.4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor: $5P - 0.02P^2 = 5P\\left(1 - \\frac{P}{250}\\right)$, so $L = 250$. Equivalently, the nonzero root of $P(5 - 0.02P) = 0$ is $P = \\frac{5}{0.02} = 250$.",
        "zh": "因式分解：$5P - 0.02P^2 = 5P\\left(1 - \\frac{P}{250}\\right)$，故 $L = 250$。等价地，$P(5 - 0.02P) = 0$ 的非零根为 $P = \\frac{5}{0.02} = 250$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population follows $\\frac{dP}{dt} = 2P - 0.004P^2$. Find the carrying capacity. Give an integer.",
        "zh": "某种群满足 $\\frac{dP}{dt} = 2P - 0.004P^2$。求承载力。请填一个整数。"
      },
      "answer": "500",
      "accept": [
        "500.0"
      ],
      "explanation": {
        "en": "Set $\\frac{dP}{dt} = 0$: $P(2 - 0.004P) = 0$ gives the nonzero equilibrium $P = \\frac{2}{0.004} = 500$.",
        "zh": "令 $\\frac{dP}{dt} = 0$：$P(2 - 0.004P) = 0$，非零平衡点为 $P = \\frac{2}{0.004} = 500$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.5P\\left(1 - \\frac{P}{800}\\right)$ with $P(0) = 1200$, the population will",
        "zh": "对 $\\frac{dP}{dt} = 0.5P\\left(1 - \\frac{P}{800}\\right)$，$P(0) = 1200$，种群会"
      },
      "choices": [
        "increase toward 800",
        "decrease toward 800",
        "decrease toward 0",
        "stay constant at 1200"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $P = 1200 > L = 800$, the factor $1 - \\frac{P}{L}$ is negative and $\\frac{dP}{dt} < 0$: the population falls toward the carrying capacity from above.",
        "zh": "因为 $P = 1200 > L = 800$，因子 $1 - \\frac{P}{L}$ 为负，$\\frac{dP}{dt} < 0$：种群从上方向承载力递减。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.05P\\left(1 - \\frac{P}{400}\\right)$, compute $\\frac{dP}{dt}$ when $P = 200$. Give an integer.",
        "zh": "对 $\\frac{dP}{dt} = 0.05P\\left(1 - \\frac{P}{400}\\right)$，求 $P = 200$ 时的 $\\frac{dP}{dt}$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "$\\frac{dP}{dt} = 0.05(200)\\left(1 - \\frac{200}{400}\\right) = 10 \\cdot \\frac{1}{2} = 5$. Since $200 = \\frac{L}{2}$, this is also the maximum growth rate.",
        "zh": "$\\frac{dP}{dt} = 0.05(200)\\left(1 - \\frac{200}{400}\\right) = 10 \\cdot \\frac{1}{2} = 5$。因为 $200 = \\frac{L}{2}$，这也是最大增长速率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When $P$ is much smaller than the carrying capacity $L$, logistic growth behaves approximately like",
        "zh": "当 $P$ 远小于承载力 $L$ 时，逻辑斯谛增长近似表现为"
      },
      "choices": [
        "linear growth",
        "constant population",
        "exponential growth",
        "decay"
      ],
      "answer": 2,
      "explanation": {
        "en": "For small $P$ the factor $1 - \\frac{P}{L} \\approx 1$, so $\\frac{dP}{dt} \\approx kP$ — the exponential-growth model.",
        "zh": "当 $P$ 很小时，因子 $1 - \\frac{P}{L} \\approx 1$，故 $\\frac{dP}{dt} \\approx kP$——即指数增长模型。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.02P\\left(1 - \\frac{P}{600}\\right)$, compute $\\frac{dP}{dt}$ when $P = 300$. Give an integer.",
        "zh": "对 $\\frac{dP}{dt} = 0.02P\\left(1 - \\frac{P}{600}\\right)$，求 $P = 300$ 时的 $\\frac{dP}{dt}$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0"
      ],
      "explanation": {
        "en": "$\\frac{dP}{dt} = 0.02(300)\\left(1 - \\frac{300}{600}\\right) = 6 \\cdot \\frac{1}{2} = 3$.",
        "zh": "$\\frac{dP}{dt} = 0.02(300)\\left(1 - \\frac{300}{600}\\right) = 6 \\cdot \\frac{1}{2} = 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.2P\\left(1 - \\frac{P}{400}\\right)$, what is the maximum value of $\\frac{dP}{dt}$?",
        "zh": "对 $\\frac{dP}{dt} = 0.2P\\left(1 - \\frac{P}{400}\\right)$，$\\frac{dP}{dt}$ 的最大值是多少？"
      },
      "choices": [
        "$40$",
        "$80$",
        "$10$",
        "$20$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The maximum occurs at $P = \\frac{L}{2} = 200$: $\\frac{dP}{dt} = 0.2(200)\\left(1 - \\frac{200}{400}\\right) = 40 \\cdot \\frac{1}{2} = 20$. (Equivalently, the peak rate is $\\frac{kL}{4} = \\frac{0.2 \\cdot 400}{4} = 20$.)",
        "zh": "最大值在 $P = \\frac{L}{2} = 200$ 处：$\\frac{dP}{dt} = 0.2(200)\\left(1 - \\frac{200}{400}\\right) = 40 \\cdot \\frac{1}{2} = 20$。（等价地，峰值速率为 $\\frac{kL}{4} = \\frac{0.2 \\cdot 400}{4} = 20$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.4P\\left(1 - \\frac{P}{100}\\right)$, find the maximum possible value of $\\frac{dP}{dt}$. Give an integer.",
        "zh": "对 $\\frac{dP}{dt} = 0.4P\\left(1 - \\frac{P}{100}\\right)$，求 $\\frac{dP}{dt}$ 可能的最大值。请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "The peak rate is $\\frac{kL}{4} = \\frac{0.4 \\cdot 100}{4} = 10$, attained at $P = \\frac{L}{2} = 50$: $0.4(50)\\left(1 - \\frac{50}{100}\\right) = 20 \\cdot \\frac{1}{2} = 10$.",
        "zh": "峰值速率为 $\\frac{kL}{4} = \\frac{0.4 \\cdot 100}{4} = 10$，在 $P = \\frac{L}{2} = 50$ 处取得：$0.4(50)\\left(1 - \\frac{50}{100}\\right) = 20 \\cdot \\frac{1}{2} = 10$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a logistic model with carrying capacity $L = 1000$, the graph of $P(t)$ has an inflection point when $P =$",
        "zh": "对承载力 $L = 1000$ 的逻辑斯谛模型，$P(t)$ 的图像在 $P$ 等于多少时有拐点？"
      },
      "choices": [
        "$500$",
        "$1000$",
        "$250$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The inflection point of a logistic curve is at half the carrying capacity, $P = \\frac{L}{2} = 500$, where growth is fastest and concavity switches.",
        "zh": "逻辑斯谛曲线的拐点位于承载力的一半 $P = \\frac{L}{2} = 500$，此处增长最快、凹凸性改变。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.1P\\left(1 - \\frac{P}{1000}\\right)$, compute $\\frac{dP}{dt}$ when $P = 500$. Give an integer.",
        "zh": "对 $\\frac{dP}{dt} = 0.1P\\left(1 - \\frac{P}{1000}\\right)$，求 $P = 500$ 时的 $\\frac{dP}{dt}$。请填一个整数。"
      },
      "answer": "25",
      "accept": [
        "25.0"
      ],
      "explanation": {
        "en": "$\\frac{dP}{dt} = 0.1(500)\\left(1 - \\frac{500}{1000}\\right) = 50 \\cdot \\frac{1}{2} = 25$.",
        "zh": "$\\frac{dP}{dt} = 0.1(500)\\left(1 - \\frac{500}{1000}\\right) = 50 \\cdot \\frac{1}{2} = 25$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{600}\\right)$, at which nonzero value of $P$ does $\\frac{dP}{dt} = 0$?",
        "zh": "对 $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{600}\\right)$，$\\frac{dP}{dt}$ 在哪个非零的 $P$ 值处等于 $0$？"
      },
      "choices": [
        "$300$",
        "$600$",
        "$0.3$",
        "$1200$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The rate is zero when $1 - \\frac{P}{600} = 0$, i.e. $P = 600$ — the carrying capacity and an equilibrium.",
        "zh": "当 $1 - \\frac{P}{600} = 0$ 即 $P = 600$ 时速率为零——这正是承载力，也是平衡点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population follows $\\frac{dP}{dt} = 0.9P - 0.003P^2$. Find the carrying capacity. Give an integer.",
        "zh": "某种群满足 $\\frac{dP}{dt} = 0.9P - 0.003P^2$。求承载力。请填一个整数。"
      },
      "answer": "300",
      "accept": [
        "300.0"
      ],
      "explanation": {
        "en": "Set $\\frac{dP}{dt} = 0$: $P(0.9 - 0.003P) = 0$ gives $P = \\frac{0.9}{0.003} = 300$. Equivalently, factor as $0.9P\\left(1 - \\frac{P}{300}\\right)$.",
        "zh": "令 $\\frac{dP}{dt} = 0$：$P(0.9 - 0.003P) = 0$，得 $P = \\frac{0.9}{0.003} = 300$。等价地可因式分解为 $0.9P\\left(1 - \\frac{P}{300}\\right)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In logistic growth, as $P$ increases from $\\frac{L}{2}$ up toward $L$, the growth rate $\\frac{dP}{dt}$",
        "zh": "在逻辑斯谛增长中，当 $P$ 从 $\\frac{L}{2}$ 增大趋向 $L$ 时，增长速率 $\\frac{dP}{dt}$"
      },
      "choices": [
        "increases",
        "stays constant",
        "decreases toward 0",
        "becomes negative"
      ],
      "answer": 2,
      "explanation": {
        "en": "Past $\\frac{L}{2}$ the parabola $\\frac{dP}{dt}$ falls back toward zero, so the rate decreases toward $0$ as $P \\to L$. It stays positive throughout (for $P < L$).",
        "zh": "越过 $\\frac{L}{2}$ 后，抛物线 $\\frac{dP}{dt}$ 回落到零，故当 $P \\to L$ 时速率递减趋于 $0$。在 $P < L$ 期间它始终为正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is a logistic differential equation?",
        "zh": "下列哪个是逻辑斯谛微分方程？"
      },
      "choices": [
        "$\\frac{dP}{dt} = kP$",
        "$\\frac{dP}{dt} = k\\left(1 - \\frac{P}{L}\\right)$",
        "$\\frac{dP}{dt} = kP - L$",
        "$\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The logistic model multiplies the exponential rate $kP$ by the limiting factor $\\left(1 - \\frac{P}{L}\\right)$: $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$. The first choice is pure exponential growth without a ceiling.",
        "zh": "逻辑斯谛模型把指数速率 $kP$ 乘以限制因子 $\\left(1 - \\frac{P}{L}\\right)$：$\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$。第一个选项是没有上限的纯指数增长。"
      }
    }
  ],
  "unit-8-applications-of-integration/average-value-and-motion": [
    {
      "type": "mc",
      "question": {
        "en": "What is the average value of $f(x) = \\cos x$ on the interval $\\left[0, \\frac{\\pi}{2}\\right]$?",
        "zh": "$f(x) = \\cos x$ 在区间 $\\left[0, \\frac{\\pi}{2}\\right]$ 上的平均值是多少？"
      },
      "choices": [
        "$\\frac{2}{\\pi}$",
        "$\\frac{1}{\\pi}$",
        "$\\frac{\\pi}{2}$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f_{\\text{avg}} = \\frac{1}{\\pi/2} \\int_0^{\\pi/2} \\cos x\\,dx = \\frac{2}{\\pi} \\bigl[ \\sin x \\bigr]_0^{\\pi/2} = \\frac{2}{\\pi}(1 - 0) = \\frac{2}{\\pi}$. Forgetting the $\\frac{1}{b-a}$ factor and reporting just the integral $1$ is the usual slip.",
        "zh": "$f_{\\text{avg}} = \\frac{1}{\\pi/2} \\int_0^{\\pi/2} \\cos x\\,dx = \\frac{2}{\\pi} \\bigl[ \\sin x \\bigr]_0^{\\pi/2} = \\frac{2}{\\pi}(1 - 0) = \\frac{2}{\\pi}$。忘记乘 $\\frac{1}{b-a}$ 因子、直接报出积分值 $1$ 是常见的失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the average value of $f(x) = 6x$ on the interval $[2, 4]$?",
        "zh": "$f(x) = 6x$ 在区间 $[2, 4]$ 上的平均值是多少？"
      },
      "choices": [
        "$12$",
        "$18$",
        "$36$",
        "$9$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$f_{\\text{avg}} = \\frac{1}{4-2} \\int_2^4 6x\\,dx = \\frac{1}{2} \\bigl[ 3x^2 \\bigr]_2^4 = \\frac{1}{2}(48 - 12) = 18$. Because $6x$ is linear, this also equals $f$ at the midpoint $x = 3$: $6(3) = 18$.",
        "zh": "$f_{\\text{avg}} = \\frac{1}{4-2} \\int_2^4 6x\\,dx = \\frac{1}{2} \\bigl[ 3x^2 \\bigr]_2^4 = \\frac{1}{2}(48 - 12) = 18$。由于 $6x$ 是线性函数，平均值也等于区间中点 $x = 3$ 处的函数值：$6(3) = 18$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves along a line with velocity $v(t) = t^2 - 4$ for $0 \\le t \\le 3$. On which interval is the particle moving in the negative direction?",
        "zh": "质点沿直线运动，速度为 $v(t) = t^2 - 4$，$0 \\le t \\le 3$。质点在哪个区间内沿负方向运动？"
      },
      "choices": [
        "$0 < t < 2$",
        "$t > 2$",
        "$2 < t < 3$",
        "it never moves in the negative direction"
      ],
      "answer": 0,
      "explanation": {
        "en": "The particle moves in the negative direction when $v(t) < 0$. Since $v(t) = t^2 - 4 < 0$ exactly when $t^2 < 4$, i.e. $t < 2$, the answer on $[0,3]$ is $0 < t < 2$. Confusing where $v < 0$ with where $v$ is decreasing is the common error.",
        "zh": "当 $v(t) < 0$ 时质点沿负方向运动。$v(t) = t^2 - 4 < 0$ 当且仅当 $t^2 < 4$，即 $t < 2$，故在 $[0,3]$ 上答案为 $0 < t < 2$。把 $v < 0$ 的区间与 $v$ 递减的区间混淆是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves with velocity $v(t) = t^2 - 6t + 5$ for $0 \\le t \\le 5$. On which interval is the particle speeding up?",
        "zh": "质点的速度为 $v(t) = t^2 - 6t + 5$，$0 \\le t \\le 5$。质点在哪个区间内速率增大（加速）？"
      },
      "choices": [
        "$0 < t < 1$",
        "$1 < t < 3$",
        "$3 < t < 5$",
        "$0 < t < 5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Speed increases when $v$ and $a = v' = 2t - 6$ share a sign. Here $v = (t-1)(t-5) < 0$ on $(1,5)$ and $a < 0$ on $(0,3)$, so both are negative on $(1,3)$ — the particle speeds up there. On $(0,1)$ and $(3,5)$ the two have opposite signs (slowing down).",
        "zh": "当 $v$ 与 $a = v' = 2t - 6$ 同号时速率增大。这里 $v = (t-1)(t-5)$ 在 $(1,5)$ 上为负，$a$ 在 $(0,3)$ 上为负，故在 $(1,3)$ 上二者同为负——质点在此加速。在 $(0,1)$ 和 $(3,5)$ 上二者异号（减速）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Water flows into a tank at rate $R(t) = 8 - 2t$ liters/hour and out at a constant rate $D(t) = 2$ liters/hour, for $0 \\le t \\le 5$. At what time does the tank hold the most water?",
        "zh": "在 $0 \\le t \\le 5$ 内，水以 $R(t) = 8 - 2t$ 升/小时的速率流入水箱，并以恒定速率 $D(t) = 2$ 升/小时流出。水箱在什么时刻含水最多？"
      },
      "choices": [
        "$t = 3$",
        "$t = 0$",
        "$t = 5$",
        "$t = 2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The amount increases while $R > D$ and decreases while $R < D$; the maximum occurs where the net rate $R - D$ changes from positive to negative. Setting $8 - 2t = 2$ gives $t = 3$, and $R - D$ switches sign there, so the tank is fullest at $t = 3$.",
        "zh": "当 $R > D$ 时水量增加，$R < D$ 时水量减少；最大值出现在净速率 $R - D$ 由正变负处。令 $8 - 2t = 2$ 得 $t = 3$，且 $R - D$ 在此变号，故 $t = 3$ 时水箱含水最多。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves with velocity $v(t) = t - 3$ for $0 \\le t \\le 5$. What is the total distance it travels?",
        "zh": "质点的速度为 $v(t) = t - 3$，$0 \\le t \\le 5$。它经过的总路程是多少？"
      },
      "choices": [
        "$\\frac{5}{2}$",
        "$6$",
        "$\\frac{13}{2}$",
        "$\\frac{17}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$v$ changes sign at $t = 3$. $\\int_0^3 (t-3)\\,dt = -\\frac{9}{2}$ and $\\int_3^5 (t-3)\\,dt = 2$, so total distance $= \\frac{9}{2} + 2 = \\frac{13}{2}$. The displacement $-\\frac{5}{2}$ is a trap for those who skip the sign split.",
        "zh": "$v$ 在 $t = 3$ 处变号。$\\int_0^3 (t-3)\\,dt = -\\frac{9}{2}$，$\\int_3^5 (t-3)\\,dt = 2$，故总路程 $= \\frac{9}{2} + 2 = \\frac{13}{2}$。位移 $-\\frac{5}{2}$ 是没有按变号拆分者的陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the average value of $f(x) = x - 3$ on the interval $[0, 4]$?",
        "zh": "$f(x) = x - 3$ 在区间 $[0, 4]$ 上的平均值是多少？"
      },
      "choices": [
        "$1$",
        "$-1$",
        "$2$",
        "$-2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$f_{\\text{avg}} = \\frac{1}{4} \\int_0^4 (x - 3)\\,dx = \\frac{1}{4} \\bigl[ \\frac{x^2}{2} - 3x \\bigr]_0^4 = \\frac{1}{4}(8 - 12) = -1$. A negative average is perfectly fine — the function is below zero over most of the interval.",
        "zh": "$f_{\\text{avg}} = \\frac{1}{4} \\int_0^4 (x - 3)\\,dx = \\frac{1}{4} \\bigl[ \\frac{x^2}{2} - 3x \\bigr]_0^4 = \\frac{1}{4}(8 - 12) = -1$。平均值为负完全正常——函数在区间大部分范围内都小于零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = 2x$ on $[0, 4]$. By the Mean Value Theorem for integrals, there is a $c$ in $(0,4)$ with $f(c) = f_{\\text{avg}}$. What is $c$?",
        "zh": "设 $f(x) = 2x$，$x \\in [0, 4]$。由积分中值定理，存在 $c \\in (0,4)$ 使 $f(c) = f_{\\text{avg}}$。求 $c$。"
      },
      "choices": [
        "$8$",
        "$1$",
        "$4$",
        "$2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "First $f_{\\text{avg}} = \\frac{1}{4} \\int_0^4 2x\\,dx = \\frac{1}{4}\\bigl[ x^2 \\bigr]_0^4 = 4$. Then solve $f(c) = 2c = 4$, giving $c = 2$. The average value $4$ is not itself the answer — you still must solve $f(c) = 4$.",
        "zh": "先求 $f_{\\text{avg}} = \\frac{1}{4} \\int_0^4 2x\\,dx = \\frac{1}{4}\\bigl[ x^2 \\bigr]_0^4 = 4$。再解 $f(c) = 2c = 4$，得 $c = 2$。平均值 $4$ 本身不是答案——还必须解方程 $f(c) = 4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $R(t)$ is the rate (people per minute) at which visitors enter a museum, what does $\\int_0^{30} R(t)\\,dt$ represent?",
        "zh": "若 $R(t)$ 是游客进入博物馆的速率（人/分钟），那么 $\\int_0^{30} R(t)\\,dt$ 表示什么？"
      },
      "choices": [
        "the rate of entry at $t = 30$",
        "the average rate of entry",
        "the total number of visitors who entered during the first 30 minutes",
        "the number of visitors present at $t = 30$"
      ],
      "answer": 2,
      "explanation": {
        "en": "By the net change theorem, integrating a rate over $[0,30]$ gives the total accumulated quantity — here the number of people who entered in the first 30 minutes. It is not the rate at an instant, nor the number present (which would also subtract those who left).",
        "zh": "由净变化定理，把速率在 $[0,30]$ 上积分得到总的累积量——这里是前 30 分钟内进入的人数。它既不是某一瞬间的速率，也不是当前在场人数（后者还要减去离开的人）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has acceleration $a(t) = 6t$ and velocity $v(0) = -9$. At what time $t > 0$ is the particle momentarily at rest?",
        "zh": "质点的加速度为 $a(t) = 6t$，且 $v(0) = -9$。在什么时刻 $t > 0$ 质点瞬时静止？"
      },
      "choices": [
        "$3$",
        "$9$",
        "$\\sqrt{3}$",
        "$\\sqrt{6}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$v(t) = v(0) + \\int_0^t 6s\\,ds = -9 + 3t^2$. Setting $v = 0$ gives $3t^2 = 9$, so $t^2 = 3$ and $t = \\sqrt{3}$. Solving $3t^2 = 9$ as $t = 3$ forgets to take the square root.",
        "zh": "$v(t) = v(0) + \\int_0^t 6s\\,ds = -9 + 3t^2$。令 $v = 0$ 得 $3t^2 = 9$，即 $t^2 = 3$，$t = \\sqrt{3}$。把 $3t^2 = 9$ 直接当成 $t = 3$ 是忘了开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves with velocity $v(t)$ on $[0, 4]$, with $v > 0$ on $(0, 2)$ and $v < 0$ on $(2, 4)$. Which expression gives the total distance traveled?",
        "zh": "质点在 $[0, 4]$ 上以速度 $v(t)$ 运动，$v$ 在 $(0, 2)$ 上为正、在 $(2, 4)$ 上为负。下列哪个表达式表示总路程？"
      },
      "choices": [
        "$\\int_0^4 v(t)\\,dt$",
        "$\\int_0^2 v(t)\\,dt - \\int_2^4 v(t)\\,dt$",
        "$\\left| \\int_0^4 v(t)\\,dt \\right|$",
        "$\\int_0^2 v(t)\\,dt + \\int_2^4 v(t)\\,dt$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Total distance is $\\int_0^4 |v|\\,dt$. Since $v > 0$ on $(0,2)$ and $v < 0$ on $(2,4)$, this equals $\\int_0^2 v\\,dt - \\int_2^4 v\\,dt$ (the second piece is negated to make it positive). The plain integral $\\int_0^4 v\\,dt$ gives displacement, letting the pieces cancel.",
        "zh": "总路程为 $\\int_0^4 |v|\\,dt$。由于 $v$ 在 $(0,2)$ 上为正、在 $(2,4)$ 上为负，它等于 $\\int_0^2 v\\,dt - \\int_2^4 v\\,dt$（第二段取相反数以变正）。直接写 $\\int_0^4 v\\,dt$ 得到的是位移，正负会相互抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has displacement $24$ meters over the time interval $[0, 8]$ seconds. What is its average velocity over this interval?",
        "zh": "质点在时间区间 $[0, 8]$ 秒内的位移为 $24$ 米。它在该区间上的平均速度是多少？"
      },
      "choices": [
        "$24$",
        "$12$",
        "$4$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Average velocity is displacement divided by elapsed time: $\\frac{24}{8} = 3$ meters per second. This is the average value of $v(t)$, equal to $\\frac{1}{8}\\int_0^8 v\\,dt = \\frac{1}{8}(24)$.",
        "zh": "平均速度等于位移除以经过的时间：$\\frac{24}{8} = 3$ 米每秒。它就是 $v(t)$ 的平均值，等于 $\\frac{1}{8}\\int_0^8 v\\,dt = \\frac{1}{8}(24)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the average value of $f(x) = 4x^3$ on the interval $[0, 2]$. Give an integer.",
        "zh": "求 $f(x) = 4x^3$ 在区间 $[0, 2]$ 上的平均值。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$f_{\\text{avg}} = \\frac{1}{2} \\int_0^2 4x^3\\,dx = \\frac{1}{2} \\bigl[ x^4 \\bigr]_0^2 = \\frac{1}{2}(16) = 8$.",
        "zh": "$f_{\\text{avg}} = \\frac{1}{2} \\int_0^2 4x^3\\,dx = \\frac{1}{2} \\bigl[ x^4 \\bigr]_0^2 = \\frac{1}{2}(16) = 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the average value of $f(x) = 12x^2$ on the interval $[0, 1]$. Give an integer.",
        "zh": "求 $f(x) = 12x^2$ 在区间 $[0, 1]$ 上的平均值。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$f_{\\text{avg}} = \\frac{1}{1-0} \\int_0^1 12x^2\\,dx = \\bigl[ 4x^3 \\bigr]_0^1 = 4$. On an interval of length 1 the average value equals the integral itself.",
        "zh": "$f_{\\text{avg}} = \\frac{1}{1-0} \\int_0^1 12x^2\\,dx = \\bigl[ 4x^3 \\bigr]_0^1 = 4$。区间长度为 1 时，平均值恰等于积分值本身。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with velocity $v(t) = 3t^2 - 12$ for $0 \\le t \\le 3$. Find its displacement over this interval. Give an integer.",
        "zh": "质点的速度为 $v(t) = 3t^2 - 12$，$0 \\le t \\le 3$。求它在这段时间内的位移。请填一个整数。"
      },
      "answer": "-9",
      "accept": [
        "-9.0",
        "−9"
      ],
      "explanation": {
        "en": "Displacement $= \\int_0^3 (3t^2 - 12)\\,dt = \\bigl[ t^3 - 12t \\bigr]_0^3 = 27 - 36 = -9$. The negative sign means the particle ends up $9$ units in the negative direction from its start.",
        "zh": "位移 $= \\int_0^3 (3t^2 - 12)\\,dt = \\bigl[ t^3 - 12t \\bigr]_0^3 = 27 - 36 = -9$。负号表示质点最终位于出发点负方向 $9$ 个单位处。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with velocity $v(t) = 2t - 4$ for $0 \\le t \\le 3$. Find the total distance it travels. Give an integer.",
        "zh": "质点的速度为 $v(t) = 2t - 4$，$0 \\le t \\le 3$。求它经过的总路程。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$v = 0$ at $t = 2$. $\\int_0^2 (2t-4)\\,dt = [t^2 - 4t]_0^2 = -4$, and $\\int_2^3 (2t-4)\\,dt = [t^2-4t]_2^3 = 1$. Total distance $= |-4| + |1| = 5$.",
        "zh": "$v = 0$ 于 $t = 2$。$\\int_0^2 (2t-4)\\,dt = [t^2 - 4t]_0^2 = -4$，$\\int_2^3 (2t-4)\\,dt = [t^2-4t]_2^3 = 1$。总路程 $= |-4| + |1| = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tank initially holds 20 liters. Water enters at rate $R(t) = 6t$ liters/hour and drains at rate $D(t) = 3t^2$ liters/hour, for $0 \\le t \\le 2$. How many liters are in the tank at $t = 2$? Give an integer.",
        "zh": "水箱最初有 20 升水。在 $0 \\le t \\le 2$ 内水以 $R(t) = 6t$ 升/小时的速率流入、以 $D(t) = 3t^2$ 升/小时的速率流出。求 $t = 2$ 时箱中的水量（升）。请填一个整数。"
      },
      "answer": "24",
      "accept": [
        "24.0",
        "+24"
      ],
      "explanation": {
        "en": "$A(2) = 20 + \\int_0^2 (6t - 3t^2)\\,dt = 20 + \\bigl[ 3t^2 - t^3 \\bigr]_0^2 = 20 + (12 - 8) = 24$ liters.",
        "zh": "$A(2) = 20 + \\int_0^2 (6t - 3t^2)\\,dt = 20 + \\bigl[ 3t^2 - t^3 \\bigr]_0^2 = 20 + (12 - 8) = 24$ 升。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has position $s(0) = 5$ and velocity $v(t) = 3t^2$. Find its position at $t = 2$. Give an integer.",
        "zh": "质点的初始位置为 $s(0) = 5$，速度为 $v(t) = 3t^2$。求 $t = 2$ 时的位置。请填一个整数。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "$s(2) = s(0) + \\int_0^2 3t^2\\,dt = 5 + \\bigl[ t^3 \\bigr]_0^2 = 5 + 8 = 13$. Position is the initial position plus the accumulated displacement.",
        "zh": "$s(2) = s(0) + \\int_0^2 3t^2\\,dt = 5 + \\bigl[ t^3 \\bigr]_0^2 = 5 + 8 = 13$。位置等于初始位置加上累积位移。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the average value of $f(x) = \\frac{1}{x^2}$ on the interval $[1, 2]$. Give a fraction a/b.",
        "zh": "求 $f(x) = \\frac{1}{x^2}$ 在区间 $[1, 2]$ 上的平均值。答案写成分数 a/b 的形式。"
      },
      "answer": "1/2",
      "accept": [
        "0.5",
        ".5"
      ],
      "explanation": {
        "en": "$f_{\\text{avg}} = \\frac{1}{2-1} \\int_1^2 x^{-2}\\,dx = \\bigl[ -\\frac{1}{x} \\bigr]_1^2 = -\\frac{1}{2} - (-1) = \\frac{1}{2}$.",
        "zh": "$f_{\\text{avg}} = \\frac{1}{2-1} \\int_1^2 x^{-2}\\,dx = \\bigl[ -\\frac{1}{x} \\bigr]_1^2 = -\\frac{1}{2} - (-1) = \\frac{1}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with velocity $v(t) = \\cos t$ for $0 \\le t \\le \\pi$. Find the total distance it travels. Give an integer.",
        "zh": "质点的速度为 $v(t) = \\cos t$，$0 \\le t \\le \\pi$。求它经过的总路程。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$\\cos t$ changes sign at $t = \\frac{\\pi}{2}$. $\\int_0^{\\pi/2} \\cos t\\,dt = 1$ and $\\int_{\\pi/2}^{\\pi} \\cos t\\,dt = -1$, so total distance $= |1| + |-1| = 2$. The displacement $\\int_0^\\pi \\cos t\\,dt = 0$ is the trap.",
        "zh": "$\\cos t$ 在 $t = \\frac{\\pi}{2}$ 处变号。$\\int_0^{\\pi/2} \\cos t\\,dt = 1$，$\\int_{\\pi/2}^{\\pi} \\cos t\\,dt = -1$，故总路程 $= |1| + |-1| = 2$。位移 $\\int_0^\\pi \\cos t\\,dt = 0$ 是陷阱。"
      }
    }
  ],
  "unit-8-applications-of-integration/area-between-curves": [
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = x^2$ and $y = x + 6$?",
        "zh": "由 $y = x^2$ 与 $y = x + 6$ 所围区域的面积是多少？"
      },
      "choices": [
        "$\\frac{125}{6}$",
        "$\\frac{25}{6}$",
        "$\\frac{125}{3}$",
        "$20$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Intersections: $x^2 = x + 6 \\Rightarrow (x-3)(x+2) = 0$, so $x = -2, 3$, with the line on top. $A = \\int_{-2}^{3} (x + 6 - x^2)\\,dx = \\bigl[ \\frac{x^2}{2} + 6x - \\frac{x^3}{3} \\bigr]_{-2}^{3} = \\frac{27}{2} - \\left(-\\frac{22}{3}\\right) = \\frac{125}{6}$.",
        "zh": "交点：$x^2 = x + 6 \\Rightarrow (x-3)(x+2) = 0$，得 $x = -2, 3$，直线在上方。$A = \\int_{-2}^{3} (x + 6 - x^2)\\,dx = \\bigl[ \\frac{x^2}{2} + 6x - \\frac{x^3}{3} \\bigr]_{-2}^{3} = \\frac{27}{2} - \\left(-\\frac{22}{3}\\right) = \\frac{125}{6}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = x^2$ and $y = 2x + 3$?",
        "zh": "由 $y = x^2$ 与 $y = 2x + 3$ 所围区域的面积是多少？"
      },
      "choices": [
        "$\\frac{16}{3}$",
        "$\\frac{32}{3}$",
        "$9$",
        "$10$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Intersections: $x^2 = 2x + 3 \\Rightarrow (x-3)(x+1) = 0$, so $x = -1, 3$, with the line on top. $A = \\int_{-1}^{3} (2x + 3 - x^2)\\,dx = \\bigl[ x^2 + 3x - \\frac{x^3}{3} \\bigr]_{-1}^{3} = 9 - \\left(-\\frac{5}{3}\\right) = \\frac{32}{3}$.",
        "zh": "交点：$x^2 = 2x + 3 \\Rightarrow (x-3)(x+1) = 0$，得 $x = -1, 3$，直线在上方。$A = \\int_{-1}^{3} (2x + 3 - x^2)\\,dx = \\bigl[ x^2 + 3x - \\frac{x^3}{3} \\bigr]_{-1}^{3} = 9 - \\left(-\\frac{5}{3}\\right) = \\frac{32}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = x^2$ and $y = x^3$ for $0 \\le x \\le 1$?",
        "zh": "在 $0 \\le x \\le 1$ 上由 $y = x^2$ 与 $y = x^3$ 所围区域的面积是多少？"
      },
      "choices": [
        "$\\frac{1}{12}$",
        "$\\frac{1}{6}$",
        "$\\frac{1}{2}$",
        "$\\frac{7}{12}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "On $(0,1)$, $x^2 > x^3$, so $A = \\int_0^1 (x^2 - x^3)\\,dx = \\frac{1}{3} - \\frac{1}{4} = \\frac{1}{12}$. Getting the order of subtraction backward gives a negative value here.",
        "zh": "在 $(0,1)$ 上 $x^2 > x^3$，故 $A = \\int_0^1 (x^2 - x^3)\\,dx = \\frac{1}{3} - \\frac{1}{4} = \\frac{1}{12}$。若相减顺序写反，这里会得到负值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = 4 - x^2$ and $y = x^2 - 4$?",
        "zh": "由 $y = 4 - x^2$ 与 $y = x^2 - 4$ 所围区域的面积是多少？"
      },
      "choices": [
        "$\\frac{32}{3}$",
        "$32$",
        "$\\frac{64}{3}$",
        "$\\frac{128}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Intersections: $4 - x^2 = x^2 - 4 \\Rightarrow x^2 = 4$, so $x = \\pm 2$, with $4 - x^2$ on top. $A = \\int_{-2}^{2} \\bigl( (4 - x^2) - (x^2 - 4) \\bigr)\\,dx = \\int_{-2}^{2} (8 - 2x^2)\\,dx = \\bigl[ 8x - \\frac{2x^3}{3} \\bigr]_{-2}^{2} = \\frac{64}{3}$.",
        "zh": "交点：$4 - x^2 = x^2 - 4 \\Rightarrow x^2 = 4$，得 $x = \\pm 2$，$4 - x^2$ 在上方。$A = \\int_{-2}^{2} \\bigl( (4 - x^2) - (x^2 - 4) \\bigr)\\,dx = \\int_{-2}^{2} (8 - 2x^2)\\,dx = \\bigl[ 8x - \\frac{2x^3}{3} \\bigr]_{-2}^{2} = \\frac{64}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $R$ be the region enclosed by $y = \\sqrt{x}$ and $y = x$. Which integral in $x$ gives the area of $R$?",
        "zh": "设 $R$ 是由 $y = \\sqrt{x}$ 与 $y = x$ 所围的区域。下列哪个关于 $x$ 的积分表示 $R$ 的面积？"
      },
      "choices": [
        "$\\int_0^1 \\bigl( \\sqrt{x} - x \\bigr)\\,dx$",
        "$\\int_0^1 \\bigl( x - \\sqrt{x} \\bigr)\\,dx$",
        "$\\int_0^1 \\bigl( \\sqrt{x} - x^2 \\bigr)\\,dx$",
        "$\\int_0^1 \\bigl( x^2 - \\sqrt{x} \\bigr)\\,dx$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The curves meet at $x = 0$ and $x = 1$, and on $(0,1)$, $\\sqrt{x} > x$ (test $x = \\frac{1}{4}$: $\\frac{1}{2} > \\frac{1}{4}$). So area $= \\int_0^1 (\\sqrt{x} - x)\\,dx$ with the top curve first.",
        "zh": "两曲线交于 $x = 0$ 和 $x = 1$，在 $(0,1)$ 上 $\\sqrt{x} > x$（代入 $x = \\frac{1}{4}$：$\\frac{1}{2} > \\frac{1}{4}$）。故面积 $= \\int_0^1 (\\sqrt{x} - x)\\,dx$，上方曲线作被减式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = \\sqrt{x}$ and $y = x$?",
        "zh": "由 $y = \\sqrt{x}$ 与 $y = x$ 所围区域的面积是多少？"
      },
      "choices": [
        "$\\frac{1}{3}$",
        "$\\frac{1}{6}$",
        "$\\frac{1}{2}$",
        "$\\frac{5}{6}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$A = \\int_0^1 (\\sqrt{x} - x)\\,dx = \\bigl[ \\frac{2}{3} x^{3/2} - \\frac{x^2}{2} \\bigr]_0^1 = \\frac{2}{3} - \\frac{1}{2} = \\frac{1}{6}$.",
        "zh": "$A = \\int_0^1 (\\sqrt{x} - x)\\,dx = \\bigl[ \\frac{2}{3} x^{3/2} - \\frac{x^2}{2} \\bigr]_0^1 = \\frac{2}{3} - \\frac{1}{2} = \\frac{1}{6}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area between $y = \\cos x$ and $y = \\sin x$ from $x = 0$ to $x = \\frac{\\pi}{4}$?",
        "zh": "在 $x = 0$ 到 $x = \\frac{\\pi}{4}$ 之间，$y = \\cos x$ 与 $y = \\sin x$ 所夹区域的面积是多少？"
      },
      "choices": [
        "$\\sqrt{2}$",
        "$1 - \\sqrt{2}$",
        "$\\sqrt{2} - 1$",
        "$2 - \\sqrt{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "On $\\left[0, \\frac{\\pi}{4}\\right]$, $\\cos x \\ge \\sin x$. $A = \\int_0^{\\pi/4} (\\cos x - \\sin x)\\,dx = \\bigl[ \\sin x + \\cos x \\bigr]_0^{\\pi/4} = \\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\right) - 1 = \\sqrt{2} - 1$.",
        "zh": "在 $\\left[0, \\frac{\\pi}{4}\\right]$ 上 $\\cos x \\ge \\sin x$。$A = \\int_0^{\\pi/4} (\\cos x - \\sin x)\\,dx = \\bigl[ \\sin x + \\cos x \\bigr]_0^{\\pi/4} = \\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\right) - 1 = \\sqrt{2} - 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the total area between $y = \\sin x$ and the $x$-axis from $x = 0$ to $x = 2\\pi$?",
        "zh": "在 $x = 0$ 到 $x = 2\\pi$ 之间，$y = \\sin x$ 与 $x$ 轴所夹的总面积是多少？"
      },
      "choices": [
        "$0$",
        "$2$",
        "$4$",
        "$2\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\sin x$ is positive on $(0,\\pi)$ and negative on $(\\pi, 2\\pi)$. Total area $= \\int_0^{2\\pi} |\\sin x|\\,dx = \\int_0^{\\pi} \\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx = 2 + 2 = 4$. The value $0$ is the net signed integral — wrong for area.",
        "zh": "$\\sin x$ 在 $(0,\\pi)$ 上为正、在 $(\\pi, 2\\pi)$ 上为负。总面积 $= \\int_0^{2\\pi} |\\sin x|\\,dx = \\int_0^{\\pi} \\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx = 2 + 2 = 4$。$0$ 是带符号的净积分——对求面积而言是错的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = e^x$ and $y = e^{-x}$ from $x = 0$ to $x = 1$?",
        "zh": "在 $x = 0$ 到 $x = 1$ 之间，由 $y = e^x$ 与 $y = e^{-x}$ 所夹区域的面积是多少？"
      },
      "choices": [
        "$e - \\frac{1}{e}$",
        "$e + \\frac{1}{e}$",
        "$e - 2$",
        "$e + \\frac{1}{e} - 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "On $(0,1)$, $e^x > e^{-x}$. $A = \\int_0^1 (e^x - e^{-x})\\,dx = \\bigl[ e^x + e^{-x} \\bigr]_0^1 = \\left(e + \\frac{1}{e}\\right) - (1 + 1) = e + \\frac{1}{e} - 2$. Forgetting the lower-limit value $2$ is the common slip.",
        "zh": "在 $(0,1)$ 上 $e^x > e^{-x}$。$A = \\int_0^1 (e^x - e^{-x})\\,dx = \\bigl[ e^x + e^{-x} \\bigr]_0^1 = \\left(e + \\frac{1}{e}\\right) - (1 + 1) = e + \\frac{1}{e} - 2$。忘记减去下限处的值 $2$ 是常见失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = x^2 - 2x$ and the $x$-axis?",
        "zh": "由 $y = x^2 - 2x$ 与 $x$ 轴所围区域的面积是多少？"
      },
      "choices": [
        "$-\\frac{4}{3}$",
        "$\\frac{8}{3}$",
        "$\\frac{2}{3}$",
        "$\\frac{4}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The parabola crosses the axis at $x = 0$ and $x = 2$, and lies below the axis between them. Area $= \\int_0^2 (0 - (x^2 - 2x))\\,dx = \\int_0^2 (2x - x^2)\\,dx = \\bigl[ x^2 - \\frac{x^3}{3} \\bigr]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$. Area is never negative.",
        "zh": "抛物线在 $x = 0$ 和 $x = 2$ 处与 $x$ 轴相交，两点之间位于轴下方。面积 $= \\int_0^2 (0 - (x^2 - 2x))\\,dx = \\int_0^2 (2x - x^2)\\,dx = \\bigl[ x^2 - \\frac{x^3}{3} \\bigr]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$。面积绝不为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $y = |x|$ and $y = 2$?",
        "zh": "由 $y = |x|$ 与 $y = 2$ 所围区域的面积是多少？"
      },
      "choices": [
        "$8$",
        "$4$",
        "$2$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The lines $y = |x|$ and $y = 2$ meet at $x = \\pm 2$, with $y = 2$ on top. By symmetry $A = 2\\int_0^2 (2 - x)\\,dx = 2\\bigl[ 2x - \\frac{x^2}{2} \\bigr]_0^2 = 2(4 - 2) = 4$. (This is just a triangle of base $4$ and height $2$.)",
        "zh": "直线 $y = |x|$ 与 $y = 2$ 交于 $x = \\pm 2$，$y = 2$ 在上方。由对称性 $A = 2\\int_0^2 (2 - x)\\,dx = 2\\bigl[ 2x - \\frac{x^2}{2} \\bigr]_0^2 = 2(4 - 2) = 4$。（这正是底为 $4$、高为 $2$ 的三角形。）"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $R$ be the region enclosed by $x = y^2$ and $x = y + 2$. Which integral in $y$ gives the area of $R$?",
        "zh": "设 $R$ 是由 $x = y^2$ 与 $x = y + 2$ 所围的区域。下列哪个关于 $y$ 的积分表示 $R$ 的面积？"
      },
      "choices": [
        "$\\int_{-1}^{2} \\bigl( y^2 - (y + 2) \\bigr)\\,dy$",
        "$\\int_{-1}^{2} \\bigl( (y + 2) - y^2 \\bigr)\\,dy$",
        "$\\int_{-1}^{2} \\bigl( (y + 2) - y^2 \\bigr)\\,dx$",
        "$\\int_{0}^{2} \\bigl( (y + 2) - y^2 \\bigr)\\,dy$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use horizontal strips. $y^2 = y + 2 \\Rightarrow (y-2)(y+1) = 0$, so $y = -1, 2$; the line $x = y + 2$ is the right boundary. Area $= \\int_{-1}^{2} \\bigl( (y+2) - y^2 \\bigr)\\,dy$. A $y$-integral must use $dy$ and the $y$-limits $-1$ and $2$.",
        "zh": "用水平条。$y^2 = y + 2 \\Rightarrow (y-2)(y+1) = 0$，得 $y = -1, 2$；直线 $x = y + 2$ 为右边界。面积 $= \\int_{-1}^{2} \\bigl( (y+2) - y^2 \\bigr)\\,dy$。关于 $y$ 的积分必须用 $dy$ 及 $y$ 的上下限 $-1$ 和 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of the region enclosed by $y = x^2$ and $y = 4$. Give a fraction a/b.",
        "zh": "求由 $y = x^2$ 与 $y = 4$ 所围区域的面积。答案写成分数 a/b 的形式。"
      },
      "answer": "32/3",
      "accept": [
        "10.667",
        "10.67"
      ],
      "explanation": {
        "en": "Intersections: $x^2 = 4 \\Rightarrow x = \\pm 2$, with $y = 4$ on top. $A = \\int_{-2}^{2} (4 - x^2)\\,dx = \\bigl[ 4x - \\frac{x^3}{3} \\bigr]_{-2}^{2} = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}$.",
        "zh": "交点：$x^2 = 4 \\Rightarrow x = \\pm 2$，$y = 4$ 在上方。$A = \\int_{-2}^{2} (4 - x^2)\\,dx = \\bigl[ 4x - \\frac{x^3}{3} \\bigr]_{-2}^{2} = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of the region enclosed by $y = x^2$ and $y = x$ for $0 \\le x \\le 1$. Give a fraction a/b.",
        "zh": "求在 $0 \\le x \\le 1$ 上由 $y = x^2$ 与 $y = x$ 所围区域的面积。答案写成分数 a/b 的形式。"
      },
      "answer": "1/6",
      "accept": [
        "0.167",
        "0.1667"
      ],
      "explanation": {
        "en": "On $(0,1)$, $x > x^2$. $A = \\int_0^1 (x - x^2)\\,dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
        "zh": "在 $(0,1)$ 上 $x > x^2$。$A = \\int_0^1 (x - x^2)\\,dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of the region enclosed by $y = 9 - x^2$ and the $x$-axis. Give an integer.",
        "zh": "求由 $y = 9 - x^2$ 与 $x$ 轴所围区域的面积。请填一个整数。"
      },
      "answer": "36",
      "accept": [
        "36.0",
        "+36"
      ],
      "explanation": {
        "en": "The parabola meets the axis at $x = \\pm 3$. $A = \\int_{-3}^{3} (9 - x^2)\\,dx = \\bigl[ 9x - \\frac{x^3}{3} \\bigr]_{-3}^{3} = 2(27 - 9) = 36$.",
        "zh": "抛物线与 $x$ 轴交于 $x = \\pm 3$。$A = \\int_{-3}^{3} (9 - x^2)\\,dx = \\bigl[ 9x - \\frac{x^3}{3} \\bigr]_{-3}^{3} = 2(27 - 9) = 36$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the total area enclosed between $y = x^3$ and $y = x$ for $-1 \\le x \\le 1$. Give a fraction a/b.",
        "zh": "求在 $-1 \\le x \\le 1$ 上 $y = x^3$ 与 $y = x$ 之间所夹的总面积。答案写成分数 a/b 的形式。"
      },
      "answer": "1/2",
      "accept": [
        "0.5",
        ".5"
      ],
      "explanation": {
        "en": "The curves cross at $x = -1, 0, 1$. By symmetry the total area is $2\\int_0^1 (x - x^3)\\,dx = 2\\left(\\frac{1}{2} - \\frac{1}{4}\\right) = \\frac{1}{2}$. Integrating $x - x^3$ straight across $[-1,1]$ would cancel to $0$.",
        "zh": "两曲线在 $x = -1, 0, 1$ 处相交。由对称性，总面积为 $2\\int_0^1 (x - x^3)\\,dx = 2\\left(\\frac{1}{2} - \\frac{1}{4}\\right) = \\frac{1}{2}$。若直接在 $[-1,1]$ 上积分 $x - x^3$ 会抵消为 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of the region bounded by $y = \\sqrt{x}$, the $x$-axis, and $x = 9$. Give an integer.",
        "zh": "求由 $y = \\sqrt{x}$、$x$ 轴和 $x = 9$ 所围区域的面积。请填一个整数。"
      },
      "answer": "18",
      "accept": [
        "18.0",
        "+18"
      ],
      "explanation": {
        "en": "$A = \\int_0^9 \\sqrt{x}\\,dx = \\bigl[ \\frac{2}{3} x^{3/2} \\bigr]_0^9 = \\frac{2}{3}(27) = 18$.",
        "zh": "$A = \\int_0^9 \\sqrt{x}\\,dx = \\bigl[ \\frac{2}{3} x^{3/2} \\bigr]_0^9 = \\frac{2}{3}(27) = 18$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of the region enclosed by $x = y^2$ and $x = 2y$. Give a fraction a/b.",
        "zh": "求由 $x = y^2$ 与 $x = 2y$ 所围区域的面积。答案写成分数 a/b 的形式。"
      },
      "answer": "4/3",
      "accept": [
        "1.333",
        "1.33"
      ],
      "explanation": {
        "en": "Horizontal strips: $y^2 = 2y \\Rightarrow y = 0, 2$, with $x = 2y$ the right boundary (test $y = 1$: $2 > 1$). $A = \\int_0^2 (2y - y^2)\\,dy = \\bigl[ y^2 - \\frac{y^3}{3} \\bigr]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
        "zh": "水平条：$y^2 = 2y \\Rightarrow y = 0, 2$，$x = 2y$ 为右边界（代入 $y = 1$：$2 > 1$）。$A = \\int_0^2 (2y - y^2)\\,dy = \\bigl[ y^2 - \\frac{y^3}{3} \\bigr]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of the region bounded by $y = \\frac{1}{x}$, the $x$-axis, $x = 1$, and $x = e$. Give an integer.",
        "zh": "求由 $y = \\frac{1}{x}$、$x$ 轴、$x = 1$ 和 $x = e$ 所围区域的面积。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "$A = \\int_1^e \\frac{1}{x}\\,dx = \\bigl[ \\ln x \\bigr]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$.",
        "zh": "$A = \\int_1^e \\frac{1}{x}\\,dx = \\bigl[ \\ln x \\bigr]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the area of the region bounded by $y = \\sin x$ and the $x$-axis from $x = 0$ to $x = \\pi$. Give an integer.",
        "zh": "求在 $x = 0$ 到 $x = \\pi$ 之间由 $y = \\sin x$ 与 $x$ 轴所围区域的面积。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$\\sin x \\ge 0$ on $[0, \\pi]$, so $A = \\int_0^{\\pi} \\sin x\\,dx = \\bigl[ -\\cos x \\bigr]_0^{\\pi} = -(-1) - (-1) = 2$.",
        "zh": "在 $[0, \\pi]$ 上 $\\sin x \\ge 0$，故 $A = \\int_0^{\\pi} \\sin x\\,dx = \\bigl[ -\\cos x \\bigr]_0^{\\pi} = -(-1) - (-1) = 2$。"
      }
    }
  ],
  "unit-8-applications-of-integration/volumes-and-arc-length": [
    {
      "type": "mc",
      "question": {
        "en": "The region in the first quadrant bounded by $y = x^2$, $y = 4$, and the $y$-axis is rotated about the $y$-axis. What is the volume?",
        "zh": "第一象限内由 $y = x^2$、$y = 4$ 和 $y$ 轴围成的区域绕 $y$ 轴旋转，体积是多少？"
      },
      "choices": [
        "$8\\pi$",
        "$16\\pi$",
        "$4\\pi$",
        "$\\frac{64\\pi}{5}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Slice horizontally into discs of radius $x = \\sqrt{y}$: $V = \\pi \\int_0^4 (\\sqrt{y})^2\\,dy = \\pi \\int_0^4 y\\,dy = \\pi \\cdot \\frac{16}{2} = 8\\pi$. The radius must be measured horizontally to the $y$-axis, which is $x = \\sqrt{y}$.",
        "zh": "沿水平方向切成半径为 $x = \\sqrt{y}$ 的圆盘：$V = \\pi \\int_0^4 (\\sqrt{y})^2\\,dy = \\pi \\int_0^4 y\\,dy = \\pi \\cdot \\frac{16}{2} = 8\\pi$。半径要沿水平方向量到 $y$ 轴，即 $x = \\sqrt{y}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The region bounded by $y = x$, $y = 2$, and the $y$-axis is rotated about the $x$-axis. What is the volume?",
        "zh": "由 $y = x$、$y = 2$ 和 $y$ 轴围成的区域绕 $x$ 轴旋转，体积是多少？"
      },
      "choices": [
        "$\\frac{8\\pi}{3}$",
        "$\\frac{16\\pi}{3}$",
        "$4\\pi$",
        "$8\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For $0 \\le x \\le 2$, each washer has outer radius $2$ and inner radius $x$. $V = \\pi \\int_0^2 (2^2 - x^2)\\,dx = \\pi \\bigl[ 4x - \\frac{x^3}{3} \\bigr]_0^2 = \\pi\\left(8 - \\frac{8}{3}\\right) = \\frac{16\\pi}{3}$.",
        "zh": "对 $0 \\le x \\le 2$，每个垫圈的外半径为 $2$、内半径为 $x$。$V = \\pi \\int_0^2 (2^2 - x^2)\\,dx = \\pi \\bigl[ 4x - \\frac{x^3}{3} \\bigr]_0^2 = \\pi\\left(8 - \\frac{8}{3}\\right) = \\frac{16\\pi}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The region bounded by $y = x$, the $x$-axis, and $x = 2$ is rotated about the line $y = -1$. What is the volume?",
        "zh": "由 $y = x$、$x$ 轴和 $x = 2$ 围成的区域绕直线 $y = -1$ 旋转，体积是多少？"
      },
      "choices": [
        "$\\frac{8\\pi}{3}$",
        "$\\frac{14\\pi}{3}$",
        "$\\frac{20\\pi}{3}$",
        "$4\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Measuring from $y = -1$: outer radius $x + 1$, inner radius $1$. $V = \\pi \\int_0^2 \\bigl( (x+1)^2 - 1^2 \\bigr)\\,dx = \\pi \\int_0^2 (x^2 + 2x)\\,dx = \\pi \\bigl[ \\frac{x^3}{3} + x^2 \\bigr]_0^2 = \\pi\\left(\\frac{8}{3} + 4\\right) = \\frac{20\\pi}{3}$.",
        "zh": "从 $y = -1$ 量起：外半径 $x + 1$，内半径 $1$。$V = \\pi \\int_0^2 \\bigl( (x+1)^2 - 1^2 \\bigr)\\,dx = \\pi \\int_0^2 (x^2 + 2x)\\,dx = \\pi \\bigl[ \\frac{x^3}{3} + x^2 \\bigr]_0^2 = \\pi\\left(\\frac{8}{3} + 4\\right) = \\frac{20\\pi}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid has as its base the region bounded by $y = \\sqrt{x}$, the $x$-axis, and $x = 4$. Cross-sections perpendicular to the $x$-axis are semicircles with diameter in the base. What is the volume?",
        "zh": "一个立体以由 $y = \\sqrt{x}$、$x$ 轴和 $x = 4$ 围成的区域为底，垂直于 $x$ 轴的截面是直径落在底面内的半圆。体积是多少？"
      },
      "choices": [
        "$\\pi$",
        "$\\frac{\\pi}{2}$",
        "$2\\pi$",
        "$4\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Diameter $s(x) = \\sqrt{x}$, so each semicircle has area $\\frac{\\pi}{8} s^2 = \\frac{\\pi}{8} x$. $V = \\frac{\\pi}{8} \\int_0^4 x\\,dx = \\frac{\\pi}{8} \\cdot 8 = \\pi$. Using the diameter as the radius (forgetting to halve) is the standard semicircle error.",
        "zh": "直径 $s(x) = \\sqrt{x}$，故每个半圆面积为 $\\frac{\\pi}{8} s^2 = \\frac{\\pi}{8} x$。$V = \\frac{\\pi}{8} \\int_0^4 x\\,dx = \\frac{\\pi}{8} \\cdot 8 = \\pi$。把直径当半径用（忘记除以 2）是半圆截面的标准错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid has as its base the region bounded by $y = \\sqrt{x}$, the $x$-axis, and $x = 3$. Cross-sections perpendicular to the $x$-axis are equilateral triangles with one side in the base. What is the volume?",
        "zh": "一个立体以由 $y = \\sqrt{x}$、$x$ 轴和 $x = 3$ 围成的区域为底，垂直于 $x$ 轴的截面是一边落在底面内的等边三角形。体积是多少？"
      },
      "choices": [
        "$\\frac{9\\sqrt{3}}{4}$",
        "$\\frac{9}{8}$",
        "$\\frac{9\\sqrt{3}}{8}$",
        "$\\frac{3\\sqrt{3}}{4}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Side $s(x) = \\sqrt{x}$, so each triangle has area $\\frac{\\sqrt{3}}{4} s^2 = \\frac{\\sqrt{3}}{4} x$. $V = \\frac{\\sqrt{3}}{4} \\int_0^3 x\\,dx = \\frac{\\sqrt{3}}{4} \\cdot \\frac{9}{2} = \\frac{9\\sqrt{3}}{8}$. No $\\pi$ appears — nothing is being rotated.",
        "zh": "边长 $s(x) = \\sqrt{x}$，故每个三角形面积为 $\\frac{\\sqrt{3}}{4} s^2 = \\frac{\\sqrt{3}}{4} x$。$V = \\frac{\\sqrt{3}}{4} \\int_0^3 x\\,dx = \\frac{\\sqrt{3}}{4} \\cdot \\frac{9}{2} = \\frac{9\\sqrt{3}}{8}$。不出现 $\\pi$——因为没有旋转。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which integral gives the length of the curve $y = e^x$ from $x = 0$ to $x = 1$?",
        "zh": "下列哪个积分表示曲线 $y = e^x$ 从 $x = 0$ 到 $x = 1$ 的弧长？"
      },
      "choices": [
        "$\\int_0^1 \\sqrt{1 + e^x}\\,dx$",
        "$\\int_0^1 (1 + e^{2x})\\,dx$",
        "$\\int_0^1 \\sqrt{1 + 2e^x}\\,dx$",
        "$\\int_0^1 \\sqrt{1 + e^{2x}}\\,dx$"
      ],
      "answer": 3,
      "explanation": {
        "en": "With $f'(x) = e^x$, $L = \\int_0^1 \\sqrt{1 + (e^x)^2}\\,dx = \\int_0^1 \\sqrt{1 + e^{2x}}\\,dx$. Note $(e^x)^2 = e^{2x}$, not $e^x$; and the square root must not be dropped.",
        "zh": "由 $f'(x) = e^x$，$L = \\int_0^1 \\sqrt{1 + (e^x)^2}\\,dx = \\int_0^1 \\sqrt{1 + e^{2x}}\\,dx$。注意 $(e^x)^2 = e^{2x}$，而不是 $e^x$；且根号不能省去。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the length of the curve $y = \\frac{2}{3} x^{3/2}$ from $x = 0$ to $x = 8$.",
        "zh": "求曲线 $y = \\frac{2}{3} x^{3/2}$ 从 $x = 0$ 到 $x = 8$ 的弧长。"
      },
      "choices": [
        "$\\frac{52}{3}$",
        "$\\frac{26}{3}$",
        "$\\frac{14}{3}$",
        "$18$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$f'(x) = x^{1/2}$, so $1 + [f'(x)]^2 = 1 + x$. $L = \\int_0^8 \\sqrt{1 + x}\\,dx = \\bigl[ \\frac{2}{3}(1+x)^{3/2} \\bigr]_0^8 = \\frac{2}{3}(27 - 1) = \\frac{52}{3}$.",
        "zh": "$f'(x) = x^{1/2}$，故 $1 + [f'(x)]^2 = 1 + x$。$L = \\int_0^8 \\sqrt{1 + x}\\,dx = \\bigl[ \\frac{2}{3}(1+x)^{3/2} \\bigr]_0^8 = \\frac{2}{3}(27 - 1) = \\frac{52}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The region bounded by $y = x^2$ and $y = 4$ is rotated about the $x$-axis. What is the volume?",
        "zh": "由 $y = x^2$ 与 $y = 4$ 围成的区域绕 $x$ 轴旋转，体积是多少？"
      },
      "choices": [
        "$\\frac{128\\pi}{5}$",
        "$\\frac{64\\pi}{5}$",
        "$\\frac{256\\pi}{5}$",
        "$\\frac{512\\pi}{15}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Curves meet at $x = \\pm 2$. Washers with outer radius $4$ and inner radius $x^2$: $V = \\pi \\int_{-2}^{2} (16 - x^4)\\,dx = \\pi \\bigl[ 16x - \\frac{x^5}{5} \\bigr]_{-2}^{2} = \\pi \\cdot 2\\left(32 - \\frac{32}{5}\\right) = \\frac{256\\pi}{5}$.",
        "zh": "两曲线交于 $x = \\pm 2$。垫圈外半径 $4$、内半径 $x^2$：$V = \\pi \\int_{-2}^{2} (16 - x^4)\\,dx = \\pi \\bigl[ 16x - \\frac{x^5}{5} \\bigr]_{-2}^{2} = \\pi \\cdot 2\\left(32 - \\frac{32}{5}\\right) = \\frac{256\\pi}{5}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The region under $y = \\sin x$ from $x = 0$ to $x = \\pi$ is rotated about the $x$-axis. What is the volume?",
        "zh": "$y = \\sin x$ 在 $x = 0$ 到 $x = \\pi$ 之间下方的区域绕 $x$ 轴旋转，体积是多少？"
      },
      "choices": [
        "$\\frac{\\pi}{2}$",
        "$\\pi^2$",
        "$2\\pi$",
        "$\\frac{\\pi^2}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Discs: $V = \\pi \\int_0^{\\pi} \\sin^2 x\\,dx$. Using $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$, $\\int_0^\\pi \\sin^2 x\\,dx = \\frac{\\pi}{2}$, so $V = \\pi \\cdot \\frac{\\pi}{2} = \\frac{\\pi^2}{2}$.",
        "zh": "圆盘法：$V = \\pi \\int_0^{\\pi} \\sin^2 x\\,dx$。用 $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$，得 $\\int_0^\\pi \\sin^2 x\\,dx = \\frac{\\pi}{2}$，故 $V = \\pi \\cdot \\frac{\\pi}{2} = \\frac{\\pi^2}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A washer has outer radius $R = 3$ and inner radius $r = 1$. What is its area?",
        "zh": "一个垫圈的外半径 $R = 3$、内半径 $r = 1$。它的面积是多少？"
      },
      "choices": [
        "$4\\pi$",
        "$8\\pi$",
        "$2\\pi$",
        "$16\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The washer area is $\\pi(R^2 - r^2) = \\pi(9 - 1) = 8\\pi$. The tempting wrong move is $\\pi(R - r)^2 = \\pi(2)^2 = 4\\pi$: you must square the radii separately, since $R^2 - r^2 \\ne (R - r)^2$.",
        "zh": "垫圈面积为 $\\pi(R^2 - r^2) = \\pi(9 - 1) = 8\\pi$。诱人的错误是 $\\pi(R - r)^2 = \\pi(2)^2 = 4\\pi$：必须分别对半径平方，因为 $R^2 - r^2 \\ne (R - r)^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A solid has as its base the region bounded by $y = x$ and $y = x^2$ for $0 \\le x \\le 1$. Cross-sections perpendicular to the $x$-axis are squares. What is the volume?",
        "zh": "一个立体以 $0 \\le x \\le 1$ 上由 $y = x$ 与 $y = x^2$ 围成的区域为底，垂直于 $x$ 轴的截面是正方形。体积是多少？"
      },
      "choices": [
        "$\\frac{1}{6}$",
        "$\\frac{1}{30}$",
        "$\\frac{2}{15}$",
        "$\\frac{1}{12}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The side of each square is the vertical gap $s(x) = x - x^2$. $V = \\int_0^1 (x - x^2)^2\\,dx = \\int_0^1 (x^2 - 2x^3 + x^4)\\,dx = \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} = \\frac{1}{30}$.",
        "zh": "每个正方形的边长是竖直间距 $s(x) = x - x^2$。$V = \\int_0^1 (x - x^2)^2\\,dx = \\int_0^1 (x^2 - 2x^3 + x^4)\\,dx = \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} = \\frac{1}{30}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which integral gives the length of the curve $y = \\ln(\\sec x)$ from $x = 0$ to $x = \\frac{\\pi}{4}$?",
        "zh": "下列哪个积分表示曲线 $y = \\ln(\\sec x)$ 从 $x = 0$ 到 $x = \\frac{\\pi}{4}$ 的弧长？"
      },
      "choices": [
        "$\\int_0^{\\pi/4} \\sec^2 x\\,dx$",
        "$\\int_0^{\\pi/4} \\sqrt{1 + \\sec^2 x}\\,dx$",
        "$\\int_0^{\\pi/4} \\tan x\\,dx$",
        "$\\int_0^{\\pi/4} \\sec x\\,dx$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Here $f'(x) = \\frac{\\sec x \\tan x}{\\sec x} = \\tan x$, so $1 + [f'(x)]^2 = 1 + \\tan^2 x = \\sec^2 x$, and $\\sqrt{\\sec^2 x} = \\sec x$. Thus $L = \\int_0^{\\pi/4} \\sec x\\,dx$. The identity $1 + \\tan^2 x = \\sec^2 x$ is the whole trick.",
        "zh": "这里 $f'(x) = \\frac{\\sec x \\tan x}{\\sec x} = \\tan x$，故 $1 + [f'(x)]^2 = 1 + \\tan^2 x = \\sec^2 x$，且 $\\sqrt{\\sec^2 x} = \\sec x$。于是 $L = \\int_0^{\\pi/4} \\sec x\\,dx$。恒等式 $1 + \\tan^2 x = \\sec^2 x$ 是全部关键。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The region bounded by $y = 2x$, the $x$-axis, and $x = 3$ is rotated about the $x$-axis. The volume is $k\\pi$. Find $k$. Give an integer.",
        "zh": "由 $y = 2x$、$x$ 轴和 $x = 3$ 围成的区域绕 $x$ 轴旋转，体积为 $k\\pi$。求 $k$。请填一个整数。"
      },
      "answer": "36",
      "accept": [
        "36.0",
        "+36"
      ],
      "explanation": {
        "en": "Discs: $V = \\pi \\int_0^3 (2x)^2\\,dx = \\pi \\int_0^3 4x^2\\,dx = \\pi \\bigl[ \\frac{4x^3}{3} \\bigr]_0^3 = \\pi(36)$, so $k = 36$.",
        "zh": "圆盘法：$V = \\pi \\int_0^3 (2x)^2\\,dx = \\pi \\int_0^3 4x^2\\,dx = \\pi \\bigl[ \\frac{4x^3}{3} \\bigr]_0^3 = \\pi(36)$，故 $k = 36$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid has as its base the region bounded by $y = x$, the $x$-axis, and $x = 2$. Cross-sections perpendicular to the $x$-axis are squares with one side in the base. Find the volume. Give a fraction a/b.",
        "zh": "一个立体以由 $y = x$、$x$ 轴和 $x = 2$ 围成的区域为底，垂直于 $x$ 轴的截面是一边落在底面内的正方形。求体积。答案写成分数 a/b 的形式。"
      },
      "answer": "8/3",
      "accept": [
        "2.667",
        "2.67"
      ],
      "explanation": {
        "en": "Side $s(x) = x$, so $A(x) = x^2$ and $V = \\int_0^2 x^2\\,dx = \\frac{8}{3}$. No $\\pi$ — the cross-sections are squares, not circles.",
        "zh": "边长 $s(x) = x$，故 $A(x) = x^2$，$V = \\int_0^2 x^2\\,dx = \\frac{8}{3}$。没有 $\\pi$——截面是正方形而非圆。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid has as its base the region bounded by $y = \\sqrt{x}$, the $x$-axis, and $x = 4$. Cross-sections perpendicular to the $x$-axis are equilateral triangles with side in the base. The volume is $k\\sqrt{3}$. Find $k$. Give an integer.",
        "zh": "一个立体以由 $y = \\sqrt{x}$、$x$ 轴和 $x = 4$ 围成的区域为底，垂直于 $x$ 轴的截面是一边落在底面内的等边三角形。体积为 $k\\sqrt{3}$，求 $k$。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Side $s(x) = \\sqrt{x}$, area $\\frac{\\sqrt{3}}{4} x$. $V = \\frac{\\sqrt{3}}{4} \\int_0^4 x\\,dx = \\frac{\\sqrt{3}}{4} \\cdot 8 = 2\\sqrt{3}$, so $k = 2$.",
        "zh": "边长 $s(x) = \\sqrt{x}$，面积 $\\frac{\\sqrt{3}}{4} x$。$V = \\frac{\\sqrt{3}}{4} \\int_0^4 x\\,dx = \\frac{\\sqrt{3}}{4} \\cdot 8 = 2\\sqrt{3}$，故 $k = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid has as its base the triangular region bounded by $y = 2 - x$ and the coordinate axes. Cross-sections perpendicular to the $x$-axis are isosceles right triangles with a leg in the base. Find the volume. Give a fraction a/b.",
        "zh": "一个立体以由 $y = 2 - x$ 与两条坐标轴围成的三角形区域为底，垂直于 $x$ 轴的截面是一条直角边落在底面内的等腰直角三角形。求体积。答案写成分数 a/b 的形式。"
      },
      "answer": "4/3",
      "accept": [
        "1.333",
        "1.33"
      ],
      "explanation": {
        "en": "Leg $s(x) = 2 - x$, so area $\\frac{1}{2} s^2 = \\frac{1}{2}(2-x)^2$. $V = \\frac{1}{2}\\int_0^2 (2-x)^2\\,dx = \\frac{1}{2}\\bigl[ -\\frac{(2-x)^3}{3} \\bigr]_0^2 = \\frac{1}{2} \\cdot \\frac{8}{3} = \\frac{4}{3}$.",
        "zh": "直角边 $s(x) = 2 - x$，面积 $\\frac{1}{2} s^2 = \\frac{1}{2}(2-x)^2$。$V = \\frac{1}{2}\\int_0^2 (2-x)^2\\,dx = \\frac{1}{2}\\bigl[ -\\frac{(2-x)^3}{3} \\bigr]_0^2 = \\frac{1}{2} \\cdot \\frac{8}{3} = \\frac{4}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the length of the curve $y = \\frac{1}{3}(x^2 + 2)^{3/2}$ from $x = 0$ to $x = 3$. Give an integer.",
        "zh": "求曲线 $y = \\frac{1}{3}(x^2 + 2)^{3/2}$ 从 $x = 0$ 到 $x = 3$ 的弧长。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "$f'(x) = x(x^2+2)^{1/2}$, so $[f'(x)]^2 = x^2(x^2+2) = x^4 + 2x^2$ and $1 + [f'(x)]^2 = x^4 + 2x^2 + 1 = (x^2+1)^2$. Then $L = \\int_0^3 (x^2 + 1)\\,dx = \\bigl[ \\frac{x^3}{3} + x \\bigr]_0^3 = 9 + 3 = 12$.",
        "zh": "$f'(x) = x(x^2+2)^{1/2}$，故 $[f'(x)]^2 = x^2(x^2+2) = x^4 + 2x^2$，$1 + [f'(x)]^2 = x^4 + 2x^2 + 1 = (x^2+1)^2$。于是 $L = \\int_0^3 (x^2 + 1)\\,dx = \\bigl[ \\frac{x^3}{3} + x \\bigr]_0^3 = 9 + 3 = 12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the length of the curve $y = \\frac{x^3}{6} + \\frac{1}{2x}$ from $x = 1$ to $x = 2$. Give a fraction a/b.",
        "zh": "求曲线 $y = \\frac{x^3}{6} + \\frac{1}{2x}$ 从 $x = 1$ 到 $x = 2$ 的弧长。答案写成分数 a/b 的形式。"
      },
      "answer": "17/12",
      "accept": [
        "1.417",
        "1.4167"
      ],
      "explanation": {
        "en": "$f'(x) = \\frac{x^2}{2} - \\frac{1}{2x^2}$, so $1 + [f'(x)]^2 = \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)^2$. Then $L = \\int_1^2 \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)dx = \\bigl[ \\frac{x^3}{6} - \\frac{1}{2x} \\bigr]_1^2 = \\frac{13}{12} - \\left(-\\frac{1}{3}\\right) = \\frac{17}{12}$.",
        "zh": "$f'(x) = \\frac{x^2}{2} - \\frac{1}{2x^2}$，故 $1 + [f'(x)]^2 = \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)^2$。于是 $L = \\int_1^2 \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)dx = \\bigl[ \\frac{x^3}{6} - \\frac{1}{2x} \\bigr]_1^2 = \\frac{13}{12} - \\left(-\\frac{1}{3}\\right) = \\frac{17}{12}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The region enclosed by $y = \\sqrt{x}$ and $y = x$ is rotated about the $x$-axis. The volume is $k\\pi$. Find $k$. Give a fraction a/b.",
        "zh": "由 $y = \\sqrt{x}$ 与 $y = x$ 所围区域绕 $x$ 轴旋转，体积为 $k\\pi$。求 $k$。答案写成分数 a/b 的形式。"
      },
      "answer": "1/6",
      "accept": [
        "0.167",
        "0.1667"
      ],
      "explanation": {
        "en": "The curves meet at $x = 0, 1$, with $\\sqrt{x}$ the outer radius and $x$ the inner. $V = \\pi \\int_0^1 \\bigl( (\\sqrt{x})^2 - x^2 \\bigr)\\,dx = \\pi \\int_0^1 (x - x^2)\\,dx = \\pi\\left(\\frac{1}{2} - \\frac{1}{3}\\right) = \\frac{\\pi}{6}$, so $k = \\frac{1}{6}$.",
        "zh": "两曲线交于 $x = 0, 1$，$\\sqrt{x}$ 为外半径、$x$ 为内半径。$V = \\pi \\int_0^1 \\bigl( (\\sqrt{x})^2 - x^2 \\bigr)\\,dx = \\pi \\int_0^1 (x - x^2)\\,dx = \\pi\\left(\\frac{1}{2} - \\frac{1}{3}\\right) = \\frac{\\pi}{6}$，故 $k = \\frac{1}{6}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A solid has as its base the region bounded by $y = 1 - x^2$ and the $x$-axis. Cross-sections perpendicular to the $x$-axis are squares with one side in the base. Find the volume. Give a fraction a/b.",
        "zh": "一个立体以由 $y = 1 - x^2$ 与 $x$ 轴围成的区域为底，垂直于 $x$ 轴的截面是一边落在底面内的正方形。求体积。答案写成分数 a/b 的形式。"
      },
      "answer": "16/15",
      "accept": [
        "1.067",
        "1.0667"
      ],
      "explanation": {
        "en": "Side $s(x) = 1 - x^2$ for $-1 \\le x \\le 1$. $V = \\int_{-1}^{1} (1 - x^2)^2\\,dx = 2\\int_0^1 (1 - 2x^2 + x^4)\\,dx = 2\\left(1 - \\frac{2}{3} + \\frac{1}{5}\\right) = 2 \\cdot \\frac{8}{15} = \\frac{16}{15}$.",
        "zh": "边长 $s(x) = 1 - x^2$，$-1 \\le x \\le 1$。$V = \\int_{-1}^{1} (1 - x^2)^2\\,dx = 2\\int_0^1 (1 - 2x^2 + x^4)\\,dx = 2\\left(1 - \\frac{2}{3} + \\frac{1}{5}\\right) = 2 \\cdot \\frac{8}{15} = \\frac{16}{15}$。"
      }
    }
  ],
  "unit-9-parametric-polar-vector/parametric-calculus": [
    {
      "type": "mc",
      "question": {
        "en": "A curve is given by $x = t^3 - t$, $y = t^2 + 1$. What is $\\frac{dy}{dx}$ at $t = 2$?",
        "zh": "曲线由 $x = t^3 - t$，$y = t^2 + 1$ 给出。当 $t = 2$ 时 $\\frac{dy}{dx}$ 等于多少？"
      },
      "choices": [
        "$\\frac{4}{11}$",
        "$\\frac{11}{4}$",
        "$4$",
        "$\\frac{1}{11}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2t}{3t^2 - 1}$. At $t = 2$: $\\frac{4}{11}$. Inverting the ratio (using $\\frac{dx/dt}{dy/dt}$) gives $\\frac{11}{4}$, and using $\\frac{dy}{dt}$ alone gives $4$.",
        "zh": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2t}{3t^2 - 1}$。当 $t = 2$ 时为 $\\frac{4}{11}$。把比值倒过来（用 $\\frac{dx/dt}{dy/dt}$）会得到 $\\frac{11}{4}$，只用 $\\frac{dy}{dt}$ 则得到 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the curve $x = e^t$, $y = e^{2t}$, which expression equals $\\frac{dy}{dx}$?",
        "zh": "对曲线 $x = e^t$，$y = e^{2t}$，下列哪个表达式等于 $\\frac{dy}{dx}$？"
      },
      "choices": [
        "$e^t$",
        "$2e^t$",
        "$2e^{2t}$",
        "$\\frac{1}{2}e^t$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2e^{2t}}{e^t} = 2e^t$. Reporting $2e^{2t}$ forgets to divide by $\\frac{dx}{dt} = e^t$.",
        "zh": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2e^{2t}}{e^t} = 2e^t$。写成 $2e^{2t}$ 是忘记除以 $\\frac{dx}{dt} = e^t$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The curve $x = t^2 + t$, $y = t^3 - 12t$ has horizontal tangents at which values of $t$?",
        "zh": "曲线 $x = t^2 + t$，$y = t^3 - 12t$ 在哪些 $t$ 值处有水平切线？"
      },
      "choices": [
        "$t = 0$",
        "$t = 2$ only",
        "$t = \\pm 2$",
        "$t = \\pm\\sqrt{12}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Horizontal tangents need $\\frac{dy}{dt} = 3t^2 - 12 = 0$, so $t = \\pm 2$; at both, $\\frac{dx}{dt} = 2t + 1 \\neq 0$, so the test applies. Solving $y = 0$ instead of $\\frac{dy}{dt} = 0$ is a common confusion between the curve and its derivative.",
        "zh": "水平切线需要 $\\frac{dy}{dt} = 3t^2 - 12 = 0$，即 $t = \\pm 2$；此时 $\\frac{dx}{dt} = 2t + 1 \\neq 0$，判别法适用。解 $y = 0$ 而不是 $\\frac{dy}{dt} = 0$ 是把曲线本身与其导数弄混的常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The curve $x = t^2 - 4t$, $y = t^3 + 1$ has a vertical tangent at exactly one point. Which point is it?",
        "zh": "曲线 $x = t^2 - 4t$，$y = t^3 + 1$ 恰在一点处有竖直切线。是哪个点？"
      },
      "choices": [
        "$(4, 9)$",
        "$(0, 1)$",
        "$(-4, -9)$",
        "$(-4, 9)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Vertical tangent: $\\frac{dx}{dt} = 2t - 4 = 0$ gives $t = 2$, and there $\\frac{dy}{dt} = 3t^2 = 12 \\neq 0$. The point is $(4 - 8,\\ 8 + 1) = (-4, 9)$. Using the wrong sign on $x = t^2 - 4t$ produces $(4, 9)$.",
        "zh": "竖直切线：$\\frac{dx}{dt} = 2t - 4 = 0$ 得 $t = 2$，此时 $\\frac{dy}{dt} = 3t^2 = 12 \\neq 0$。对应点为 $(4 - 8,\\ 8 + 1) = (-4, 9)$。$x = t^2 - 4t$ 算错符号会得到 $(4, 9)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the curve $x = t^2$, $y = t^3 + t$ (with $t > 0$), what is $\\frac{d^2y}{dx^2}$ at $t = 1$?",
        "zh": "对曲线 $x = t^2$，$y = t^3 + t$（$t > 0$），当 $t = 1$ 时 $\\frac{d^2y}{dx^2}$ 等于多少？"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$1$",
        "$2$",
        "$\\frac{1}{4}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "First $\\frac{dy}{dx} = \\frac{3t^2 + 1}{2t}$; differentiating with respect to $t$ gives $\\frac{3t^2 - 1}{2t^2}$, which is $1$ at $t = 1$. Then divide by $\\frac{dx}{dt} = 2t = 2$ to get $\\frac{1}{2}$. Stopping before the last division leaves $1$.",
        "zh": "先求 $\\frac{dy}{dx} = \\frac{3t^2 + 1}{2t}$；对 $t$ 求导得 $\\frac{3t^2 - 1}{2t^2}$，在 $t = 1$ 处为 $1$。再除以 $\\frac{dx}{dt} = 2t = 2$ 得 $\\frac{1}{2}$。少除最后一步会停在 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the curve $x = t^2$, $y = t^3 - 3t$ (with $t > 0$), what is $\\frac{d^2y}{dx^2}$ at $t = 1$?",
        "zh": "对曲线 $x = t^2$，$y = t^3 - 3t$（$t > 0$），当 $t = 1$ 时 $\\frac{d^2y}{dx^2}$ 等于多少？"
      },
      "choices": [
        "$3$",
        "$\\frac{3}{2}$",
        "$\\frac{3}{4}$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t}$; differentiating with respect to $t$ gives $\\frac{3t^2 + 3}{2t^2}$, which is $3$ at $t = 1$. Dividing by $\\frac{dx}{dt} = 2$ gives $\\frac{3}{2}$. The value $3$ skips the final division by $\\frac{dx}{dt}$.",
        "zh": "$\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t}$；对 $t$ 求导得 $\\frac{3t^2 + 3}{2t^2}$，在 $t = 1$ 处为 $3$。再除以 $\\frac{dx}{dt} = 2$ 得 $\\frac{3}{2}$。答 $3$ 是漏了最后除以 $\\frac{dx}{dt}$ 这一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which integral gives the length of the curve $x = 3t$, $y = t^2$ for $0 \\le t \\le 2$?",
        "zh": "下列哪个积分给出曲线 $x = 3t$，$y = t^2$ 在 $0 \\le t \\le 2$ 上的弧长？"
      },
      "choices": [
        "$\\int_0^2 \\sqrt{9t^2 + 4t^4}\\,dt$",
        "$\\int_0^2 \\sqrt{3 + 2t}\\,dt$",
        "$\\int_0^2 \\sqrt{9 + 4t^2}\\,dt$",
        "$\\int_0^2 \\sqrt{9 + 2t}\\,dt$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Arc length uses the derivatives: $\\frac{dx}{dt} = 3$, $\\frac{dy}{dt} = 2t$, so $\\sqrt{9 + 4t^2}$. Using the functions $x, y$ themselves instead of their derivatives produces $\\sqrt{9t^2 + 4t^4}$.",
        "zh": "弧长用的是导数：$\\frac{dx}{dt} = 3$，$\\frac{dy}{dt} = 2t$，故被积函数为 $\\sqrt{9 + 4t^2}$。用原函数 $x, y$ 而不是它们的导数会得到 $\\sqrt{9t^2 + 4t^4}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A curve is given by $x = t + 1$, $y = t^2$. Find the equation of the tangent line at $t = 2$.",
        "zh": "曲线由 $x = t + 1$，$y = t^2$ 给出。求 $t = 2$ 处切线的方程。"
      },
      "choices": [
        "$y = 4x + 8$",
        "$y = 4x - 12$",
        "$y = 2x - 2$",
        "$y = 4x - 8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "At $t = 2$ the point is $(3, 4)$ and the slope is $\\frac{dy}{dx} = \\frac{2t}{1} = 4$. Then $y - 4 = 4(x - 3)$, so $y = 4x - 8$. Using the point-slope form with a sign error gives $y = 4x + 8$.",
        "zh": "当 $t = 2$ 时点为 $(3, 4)$，斜率为 $\\frac{dy}{dx} = \\frac{2t}{1} = 4$。于是 $y - 4 = 4(x - 3)$，即 $y = 4x - 8$。点斜式中符号出错会得到 $y = 4x + 8$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle traces the ellipse $x = 4\\cos t$, $y = 3\\sin t$. What is the slope of the tangent line at $t = \\frac{\\pi}{6}$?",
        "zh": "质点沿椭圆 $x = 4\\cos t$，$y = 3\\sin t$ 运动。$t = \\frac{\\pi}{6}$ 处切线的斜率是多少？"
      },
      "choices": [
        "$-\\frac{3\\sqrt{3}}{4}$",
        "$\\frac{3\\sqrt{3}}{4}$",
        "$-\\frac{3}{4}$",
        "$-\\frac{4\\sqrt{3}}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{dy}{dx} = \\frac{3\\cos t}{-4\\sin t}$. At $t = \\frac{\\pi}{6}$: $\\frac{3 \\cdot \\frac{\\sqrt{3}}{2}}{-4 \\cdot \\frac{1}{2}} = \\frac{3\\sqrt{3}/2}{-2} = -\\frac{3\\sqrt{3}}{4}$. Dropping the sine and cosine factors leaves the incorrect $-\\frac{3}{4}$.",
        "zh": "$\\frac{dy}{dx} = \\frac{3\\cos t}{-4\\sin t}$。当 $t = \\frac{\\pi}{6}$ 时：$\\frac{3 \\cdot \\frac{\\sqrt{3}}{2}}{-4 \\cdot \\frac{1}{2}} = \\frac{3\\sqrt{3}/2}{-2} = -\\frac{3\\sqrt{3}}{4}$。漏掉正弦、余弦因子会得到错误的 $-\\frac{3}{4}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the length of the quarter-circle $x = 3\\cos t$, $y = 3\\sin t$ for $0 \\le t \\le \\frac{\\pi}{2}$.",
        "zh": "求四分之一圆 $x = 3\\cos t$，$y = 3\\sin t$ 在 $0 \\le t \\le \\frac{\\pi}{2}$ 上的弧长。"
      },
      "choices": [
        "$3\\pi$",
        "$\\frac{3\\pi}{2}$",
        "$\\frac{\\pi}{2}$",
        "$\\frac{9\\pi}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The integrand is $\\sqrt{(-3\\sin t)^2 + (3\\cos t)^2} = \\sqrt{9} = 3$, so $L = \\int_0^{\\pi/2} 3\\,dt = \\frac{3\\pi}{2}$. This matches the arc of a radius-3 circle: $\\frac{1}{4}(2\\pi \\cdot 3) = \\frac{3\\pi}{2}$.",
        "zh": "被积函数为 $\\sqrt{(-3\\sin t)^2 + (3\\cos t)^2} = \\sqrt{9} = 3$，故 $L = \\int_0^{\\pi/2} 3\\,dt = \\frac{3\\pi}{2}$。这与半径为 3 的圆弧一致：$\\frac{1}{4}(2\\pi \\cdot 3) = \\frac{3\\pi}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The curve $x = t^2 - 2t$, $y = t^2 + 1$ has a vertical tangent at which point?",
        "zh": "曲线 $x = t^2 - 2t$，$y = t^2 + 1$ 在哪个点处有竖直切线？"
      },
      "choices": [
        "$(1, 2)$",
        "$(-1, -2)$",
        "$(-1, 2)$",
        "$(0, 1)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Vertical tangent: $\\frac{dx}{dt} = 2t - 2 = 0$ gives $t = 1$, where $\\frac{dy}{dt} = 2t = 2 \\neq 0$. The point is $(1 - 2,\\ 1 + 1) = (-1, 2)$. Reading off $(x, y)$ at $t = 0$ instead gives the wrong point $(0, 1)$.",
        "zh": "竖直切线：$\\frac{dx}{dt} = 2t - 2 = 0$ 得 $t = 1$，此时 $\\frac{dy}{dt} = 2t = 2 \\neq 0$。对应点为 $(1 - 2,\\ 1 + 1) = (-1, 2)$。误在 $t = 0$ 处读取 $(x, y)$ 会得到错误的 $(0, 1)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At $t = c$ a parametric curve has $\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} \\neq 0$. What does the curve have there?",
        "zh": "某参数曲线在 $t = c$ 处满足 $\\frac{dx}{dt} = 0$ 且 $\\frac{dy}{dt} \\neq 0$。此处曲线有什么特征？"
      },
      "choices": [
        "A horizontal tangent",
        "A point of inflection",
        "No tangent line at that point",
        "A vertical tangent"
      ],
      "answer": 3,
      "explanation": {
        "en": "The slope $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ has a nonzero numerator over a zero denominator, so the slope is undefined — a vertical tangent. A horizontal tangent is the opposite case, where $\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\neq 0$.",
        "zh": "斜率 $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ 分子非零、分母为零，故斜率无定义——即竖直切线。水平切线是相反情形，即 $\\frac{dy}{dt} = 0$ 且 $\\frac{dx}{dt} \\neq 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The curve $x = t^2 + 1$, $y = t^3 - 3t$ has horizontal tangents at two points, both with the same $x$-coordinate. Find that $x$-coordinate. Give an integer.",
        "zh": "曲线 $x = t^2 + 1$，$y = t^3 - 3t$ 有两个具有水平切线的点，它们的 $x$ 坐标相同。求该 $x$ 坐标。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Horizontal tangent: $\\frac{dy}{dt} = 3t^2 - 3 = 0$ gives $t = \\pm 1$, and $\\frac{dx}{dt} = 2t \\neq 0$ there. Both values give $x = t^2 + 1 = 2$.",
        "zh": "水平切线：$\\frac{dy}{dt} = 3t^2 - 3 = 0$ 得 $t = \\pm 1$，此处 $\\frac{dx}{dt} = 2t \\neq 0$。两个值都给出 $x = t^2 + 1 = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the curve $x = t^3 + t$, $y = t^2 - t$, find $\\frac{dy}{dx}$ at $t = 2$. Give your answer as a fraction a/b.",
        "zh": "对曲线 $x = t^3 + t$，$y = t^2 - t$，求 $t = 2$ 处的 $\\frac{dy}{dx}$。答案写成分数 a/b 的形式。"
      },
      "answer": "3/13",
      "accept": [
        "0.231",
        "0.2308",
        "0.23"
      ],
      "explanation": {
        "en": "$\\frac{dy}{dx} = \\frac{2t - 1}{3t^2 + 1}$. At $t = 2$: $\\frac{3}{13}$.",
        "zh": "$\\frac{dy}{dx} = \\frac{2t - 1}{3t^2 + 1}$。当 $t = 2$ 时为 $\\frac{3}{13}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the curve $x = t^2$, $y = t^4$ (with $t > 0$), $\\frac{d^2y}{dx^2}$ is constant. Find its value. Give an integer.",
        "zh": "对曲线 $x = t^2$，$y = t^4$（$t > 0$），$\\frac{d^2y}{dx^2}$ 是常数。求它的值。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$\\frac{dy}{dx} = \\frac{4t^3}{2t} = 2t^2$; differentiating with respect to $t$ gives $4t$, and dividing by $\\frac{dx}{dt} = 2t$ gives $\\frac{d^2y}{dx^2} = 2$ for all $t$. (Indeed $y = x^2$, whose second derivative is $2$.)",
        "zh": "$\\frac{dy}{dx} = \\frac{4t^3}{2t} = 2t^2$；对 $t$ 求导得 $4t$，再除以 $\\frac{dx}{dt} = 2t$ 得 $\\frac{d^2y}{dx^2} = 2$，对所有 $t$ 成立。（其实 $y = x^2$，二阶导数为 $2$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the length of the curve $x = \\frac{1}{3}t^3 - t$, $y = t^2$ from $t = 0$ to $t = 3$. Give an integer.",
        "zh": "求曲线 $x = \\frac{1}{3}t^3 - t$，$y = t^2$ 从 $t = 0$ 到 $t = 3$ 的弧长。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "$\\frac{dx}{dt} = t^2 - 1$, $\\frac{dy}{dt} = 2t$, so $(t^2 - 1)^2 + (2t)^2 = t^4 + 2t^2 + 1 = (t^2 + 1)^2$. Thus $L = \\int_0^3 (t^2 + 1)\\,dt = 9 + 3 = 12$.",
        "zh": "$\\frac{dx}{dt} = t^2 - 1$，$\\frac{dy}{dt} = 2t$，故 $(t^2 - 1)^2 + (2t)^2 = t^4 + 2t^2 + 1 = (t^2 + 1)^2$。于是 $L = \\int_0^3 (t^2 + 1)\\,dt = 9 + 3 = 12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle traces the circle $x = 5\\cos t$, $y = 5\\sin t$. Find the slope of the tangent line at $t = \\frac{3\\pi}{4}$. Give an integer.",
        "zh": "质点沿圆 $x = 5\\cos t$，$y = 5\\sin t$ 运动。求 $t = \\frac{3\\pi}{4}$ 处切线的斜率。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "$\\frac{dy}{dx} = \\frac{5\\cos t}{-5\\sin t} = -\\cot t$. At $t = \\frac{3\\pi}{4}$, $\\cot\\frac{3\\pi}{4} = -1$, so the slope is $-(-1) = 1$.",
        "zh": "$\\frac{dy}{dx} = \\frac{5\\cos t}{-5\\sin t} = -\\cot t$。当 $t = \\frac{3\\pi}{4}$ 时 $\\cot\\frac{3\\pi}{4} = -1$，故斜率为 $-(-1) = 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The curve $x = t^3$, $y = t^2 - 6t$ has exactly one horizontal tangent. Find the value of $t$ where it occurs. Give an integer.",
        "zh": "曲线 $x = t^3$，$y = t^2 - 6t$ 恰有一条水平切线。求它出现处的 $t$ 值。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Horizontal tangent: $\\frac{dy}{dt} = 2t - 6 = 0$ gives $t = 3$, and there $\\frac{dx}{dt} = 3t^2 = 27 \\neq 0$, so the test applies.",
        "zh": "水平切线：$\\frac{dy}{dt} = 2t - 6 = 0$ 得 $t = 3$，此时 $\\frac{dx}{dt} = 3t^2 = 27 \\neq 0$，判别法适用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many distinct points does the curve $x = t^3 - 3t^2$, $y = t + 5$ have with a vertical tangent? Give an integer.",
        "zh": "曲线 $x = t^3 - 3t^2$，$y = t + 5$ 有多少个具有竖直切线的不同点？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Vertical tangent: $\\frac{dx}{dt} = 3t^2 - 6t = 3t(t - 2) = 0$ gives $t = 0$ and $t = 2$; at both, $\\frac{dy}{dt} = 1 \\neq 0$. They give the distinct points $(0, 5)$ and $(-4, 7)$, so there are $2$.",
        "zh": "竖直切线：$\\frac{dx}{dt} = 3t^2 - 6t = 3t(t - 2) = 0$ 得 $t = 0$ 和 $t = 2$；此时 $\\frac{dy}{dt} = 1 \\neq 0$。它们对应不同的点 $(0, 5)$ 和 $(-4, 7)$，故共有 $2$ 个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the length of the line segment traced by $x = 3t$, $y = 4t$ from $t = 0$ to $t = 2$. Give an integer.",
        "zh": "求由 $x = 3t$，$y = 4t$ 从 $t = 0$ 到 $t = 2$ 描出的线段长度。请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "The integrand is $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$, so $L = \\int_0^2 5\\,dt = 10$. Geometrically the point moves from $(0,0)$ to $(6,8)$, a distance of $10$.",
        "zh": "被积函数为 $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$，故 $L = \\int_0^2 5\\,dt = 10$。几何上，点从 $(0,0)$ 移到 $(6,8)$，距离为 $10$。"
      }
    }
  ],
  "unit-9-parametric-polar-vector/vector-valued-motion": [
    {
      "type": "mc",
      "question": {
        "en": "A particle has position $\\vec{r}(t) = \\langle t^3,\\ t^2 - 4t \\rangle$. What is its velocity vector at $t = 2$?",
        "zh": "质点位置为 $\\vec{r}(t) = \\langle t^3,\\ t^2 - 4t \\rangle$。它在 $t = 2$ 时的速度向量是什么？"
      },
      "choices": [
        "$\\langle 12, 0 \\rangle$",
        "$\\langle 8, 0 \\rangle$",
        "$\\langle 12, -4 \\rangle$",
        "$\\langle 6, 0 \\rangle$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Differentiate componentwise: $\\vec{v}(t) = \\langle 3t^2,\\ 2t - 4 \\rangle$, so $\\vec{v}(2) = \\langle 12,\\ 0 \\rangle$. Evaluating the position components at $t = 2$ instead gives $\\langle 8, -4 \\rangle$.",
        "zh": "逐分量求导：$\\vec{v}(t) = \\langle 3t^2,\\ 2t - 4 \\rangle$，故 $\\vec{v}(2) = \\langle 12,\\ 0 \\rangle$。误把位置分量代入 $t = 2$ 会得到 $\\langle 8, -4 \\rangle$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves with $x'(t) = 3t$ and $y'(t) = 4t$. What is its speed at $t = 2$?",
        "zh": "质点运动满足 $x'(t) = 3t$，$y'(t) = 4t$。它在 $t = 2$ 时的速率是多少？"
      },
      "choices": [
        "$14$",
        "$10$",
        "$2\\sqrt{7}$",
        "$100$"
      ],
      "answer": 1,
      "explanation": {
        "en": "At $t = 2$, $\\vec{v}(2) = \\langle 6, 8 \\rangle$, so speed $= \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. Adding the components ($6 + 8 = 14$) instead of taking the magnitude is a common slip.",
        "zh": "当 $t = 2$ 时 $\\vec{v}(2) = \\langle 6, 8 \\rangle$，速率 $= \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$。把两个分量直接相加（$6 + 8 = 14$）而不是求模是常见失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has position $\\vec{r}(t) = \\langle \\sin(2t),\\ t^3 \\rangle$. What is its acceleration vector?",
        "zh": "质点位置为 $\\vec{r}(t) = \\langle \\sin(2t),\\ t^3 \\rangle$。它的加速度向量是什么？"
      },
      "choices": [
        "$\\langle 2\\cos(2t),\\ 3t^2 \\rangle$",
        "$\\langle 4\\sin(2t),\\ 6t \\rangle$",
        "$\\langle -4\\sin(2t),\\ 6t \\rangle$",
        "$\\langle -4\\sin(2t),\\ 6 \\rangle$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Differentiate twice: $\\vec{v}(t) = \\langle 2\\cos(2t),\\ 3t^2 \\rangle$ and $\\vec{a}(t) = \\langle -4\\sin(2t),\\ 6t \\rangle$. The chain rule on $\\sin(2t)$ brings down two factors of $2$ and the negative sign; dropping the sign gives $\\langle 4\\sin(2t),\\ 6t \\rangle$.",
        "zh": "求两次导：$\\vec{v}(t) = \\langle 2\\cos(2t),\\ 3t^2 \\rangle$，$\\vec{a}(t) = \\langle -4\\sin(2t),\\ 6t \\rangle$。对 $\\sin(2t)$ 用链式法则会带来两个因子 $2$ 和一个负号；丢掉负号会得到 $\\langle 4\\sin(2t),\\ 6t \\rangle$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has position $\\vec{r}(t) = \\langle t^4,\\ \\cos t \\rangle$. What is its acceleration vector?",
        "zh": "质点位置为 $\\vec{r}(t) = \\langle t^4,\\ \\cos t \\rangle$。它的加速度向量是什么？"
      },
      "choices": [
        "$\\langle 4t^3,\\ -\\sin t \\rangle$",
        "$\\langle 12t^2,\\ \\cos t \\rangle$",
        "$\\langle 12t^3,\\ -\\cos t \\rangle$",
        "$\\langle 12t^2,\\ -\\cos t \\rangle$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Differentiate twice: $\\vec{v}(t) = \\langle 4t^3,\\ -\\sin t \\rangle$ and $\\vec{a}(t) = \\langle 12t^2,\\ -\\cos t \\rangle$. The first derivative $\\langle 4t^3, -\\sin t \\rangle$ is the velocity, not the acceleration.",
        "zh": "求两次导：$\\vec{v}(t) = \\langle 4t^3,\\ -\\sin t \\rangle$，$\\vec{a}(t) = \\langle 12t^2,\\ -\\cos t \\rangle$。$\\langle 4t^3, -\\sin t \\rangle$ 是速度而不是加速度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle moves with velocity $\\vec{v}(t) = \\langle 4t,\\ 6t^2 \\rangle$ and is at $(2, 1)$ when $t = 0$. What is its position at $t = 1$?",
        "zh": "质点以速度 $\\vec{v}(t) = \\langle 4t,\\ 6t^2 \\rangle$ 运动，且 $t = 0$ 时位于 $(2, 1)$。求 $t = 1$ 时的位置。"
      },
      "choices": [
        "$(4, 3)$",
        "$(2, 2)$",
        "$(4, 2)$",
        "$(6, 3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Apply the Fundamental Theorem componentwise: $x(1) = 2 + \\int_0^1 4t\\,dt = 2 + 2 = 4$ and $y(1) = 1 + \\int_0^1 6t^2\\,dt = 1 + 2 = 3$. So the position is $(4, 3)$. Forgetting the initial values gives $(2, 2)$.",
        "zh": "对每个分量应用微积分基本定理：$x(1) = 2 + \\int_0^1 4t\\,dt = 2 + 2 = 4$，$y(1) = 1 + \\int_0^1 6t^2\\,dt = 1 + 2 = 3$。故位置为 $(4, 3)$。忘记初始值会得到 $(2, 2)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle \\cos t,\\ \\sin t \\rangle$. What is the total distance it travels for $0 \\le t \\le 2\\pi$?",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle \\cos t,\\ \\sin t \\rangle$。它在 $0 \\le t \\le 2\\pi$ 上经过的总路程是多少？"
      },
      "choices": [
        "$0$",
        "$2\\pi$",
        "$\\pi$",
        "$4\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Speed $= \\sqrt{\\cos^2 t + \\sin^2 t} = 1$, so distance $= \\int_0^{2\\pi} 1\\,dt = 2\\pi$. The displacement $\\int_0^{2\\pi}\\vec{v}\\,dt = \\langle 0, 0 \\rangle$ has magnitude $0$, but distance measures the whole path traveled.",
        "zh": "速率 $= \\sqrt{\\cos^2 t + \\sin^2 t} = 1$，故路程 $= \\int_0^{2\\pi} 1\\,dt = 2\\pi$。位移 $\\int_0^{2\\pi}\\vec{v}\\,dt = \\langle 0, 0 \\rangle$ 的模为 $0$，但路程度量的是走过的整条路径。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle x'(t),\\ y'(t) \\rangle$. Which expression gives its speed?",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle x'(t),\\ y'(t) \\rangle$。下列哪个表达式给出它的速率？"
      },
      "choices": [
        "$x'(t) + y'(t)$",
        "$\\left( x'(t) \\right)^2 + \\left( y'(t) \\right)^2$",
        "$\\sqrt{\\left( x'(t) \\right)^2 + \\left( y'(t) \\right)^2}$",
        "$\\sqrt{\\left( x'(t) + y'(t) \\right)^2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Speed is the magnitude of velocity: $|\\vec{v}(t)| = \\sqrt{(x')^2 + (y')^2}$. The form $\\sqrt{(x' + y')^2} = |x' + y'|$ adds the components before squaring and is wrong.",
        "zh": "速率是速度的模：$|\\vec{v}(t)| = \\sqrt{(x')^2 + (y')^2}$。而 $\\sqrt{(x' + y')^2} = |x' + y'|$ 是先把分量相加再平方，是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle 2,\\ 2t \\rangle$. What is the magnitude of its displacement from $t = 0$ to $t = 2$?",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle 2,\\ 2t \\rangle$。求它从 $t = 0$ 到 $t = 2$ 的位移的模。"
      },
      "choices": [
        "$8$",
        "$4$",
        "$2\\sqrt{2}$",
        "$4\\sqrt{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Displacement $= \\left\\langle \\int_0^2 2\\,dt,\\ \\int_0^2 2t\\,dt \\right\\rangle = \\langle 4, 4 \\rangle$, whose magnitude is $\\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$. Adding the components gives $8$, which is not the magnitude.",
        "zh": "位移 $= \\left\\langle \\int_0^2 2\\,dt,\\ \\int_0^2 2t\\,dt \\right\\rangle = \\langle 4, 4 \\rangle$，其模为 $\\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$。把分量相加得 $8$，不是模。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has acceleration $\\vec{a}(t) = \\langle 6t,\\ 4 \\rangle$ and velocity $\\vec{v}(0) = \\langle 1,\\ 2 \\rangle$. What is $\\vec{v}(1)$?",
        "zh": "质点加速度为 $\\vec{a}(t) = \\langle 6t,\\ 4 \\rangle$，且 $\\vec{v}(0) = \\langle 1,\\ 2 \\rangle$。求 $\\vec{v}(1)$。"
      },
      "choices": [
        "$\\langle 4, 6 \\rangle$",
        "$\\langle 6, 4 \\rangle$",
        "$\\langle 3, 4 \\rangle$",
        "$\\langle 4, 2 \\rangle$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Integrate componentwise with the initial velocity: $\\vec{v}(t) = \\langle 1 + 3t^2,\\ 2 + 4t \\rangle$, so $\\vec{v}(1) = \\langle 4,\\ 6 \\rangle$. Forgetting to add $\\vec{v}(0)$ gives $\\langle 3, 4 \\rangle$.",
        "zh": "带初速度逐分量积分：$\\vec{v}(t) = \\langle 1 + 3t^2,\\ 2 + 4t \\rangle$，故 $\\vec{v}(1) = \\langle 4,\\ 6 \\rangle$。忘记加上 $\\vec{v}(0)$ 会得到 $\\langle 3, 4 \\rangle$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle t^2 - 1,\\ 2t \\rangle$. What is its speed at $t = 2$?",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle t^2 - 1,\\ 2t \\rangle$。它在 $t = 2$ 时的速率是多少？"
      },
      "choices": [
        "$3$",
        "$5$",
        "$\\sqrt{21}$",
        "$4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Speed $= \\sqrt{(t^2 - 1)^2 + (2t)^2} = \\sqrt{t^4 + 2t^2 + 1} = t^2 + 1$. At $t = 2$: $5$. The perfect square $(t^2 - 1)^2 + (2t)^2 = (t^2 + 1)^2$ is the clean-answer setup the exam favors.",
        "zh": "速率 $= \\sqrt{(t^2 - 1)^2 + (2t)^2} = \\sqrt{t^4 + 2t^2 + 1} = t^2 + 1$。当 $t = 2$ 时为 $5$。完全平方 $(t^2 - 1)^2 + (2t)^2 = (t^2 + 1)^2$ 正是考试偏爱的凑整设计。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle 2t - 4,\\ t^2 - 4 \\rangle$. At what time is the particle at rest?",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle 2t - 4,\\ t^2 - 4 \\rangle$。质点在何时处于静止？"
      },
      "choices": [
        "$t = -2$",
        "$t = 0$",
        "$t = 2$",
        "The particle is never at rest"
      ],
      "answer": 2,
      "explanation": {
        "en": "The particle is at rest only when both components of $\\vec{v}$ vanish. $2t - 4 = 0$ gives $t = 2$; $t^2 - 4 = 0$ gives $t = \\pm 2$. The common solution is $t = 2$. At $t = -2$ only the second component is zero, so the particle is still moving.",
        "zh": "质点静止仅当 $\\vec{v}$ 的两个分量同时为零。$2t - 4 = 0$ 得 $t = 2$；$t^2 - 4 = 0$ 得 $t = \\pm 2$。公共解为 $t = 2$。在 $t = -2$ 处只有第二个分量为零，质点仍在运动。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about a moving particle is correct?",
        "zh": "关于运动质点，下列哪种说法正确？"
      },
      "choices": [
        "Speed is a vector pointing in the direction of motion.",
        "Total distance equals the magnitude of the displacement.",
        "Acceleration always points in the direction of motion.",
        "Speed is the magnitude of velocity and is never negative."
      ],
      "answer": 3,
      "explanation": {
        "en": "Speed $= |\\vec{v}(t)|$ is a nonnegative scalar. Velocity (not speed) is the vector that points along the motion. Total distance $\\int|\\vec{v}|\\,dt$ is at least the magnitude of the displacement, and equals it only for straight-line motion without backtracking.",
        "zh": "速率 $= |\\vec{v}(t)|$ 是一个非负标量。指向运动方向的向量是速度（而非速率）。总路程 $\\int|\\vec{v}|\\,dt$ 不小于位移的模，仅在不折返的直线运动时相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with $x'(t) = 3t^2$ and $x(0) = 2$. Find $x(2)$. Give an integer.",
        "zh": "质点运动满足 $x'(t) = 3t^2$，且 $x(0) = 2$。求 $x(2)$。请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "$x(2) = x(0) + \\int_0^2 3t^2\\,dt = 2 + \\left[ t^3 \\right]_0^2 = 2 + 8 = 10$. Forgetting the initial condition $x(0) = 2$ gives $8$.",
        "zh": "$x(2) = x(0) + \\int_0^2 3t^2\\,dt = 2 + \\left[ t^3 \\right]_0^2 = 2 + 8 = 10$。忘记初始条件 $x(0) = 2$ 会得到 $8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with velocity $\\vec{v}(t) = \\langle 5t,\\ 12t \\rangle$. Find its speed at $t = 1$. Give an integer.",
        "zh": "质点以速度 $\\vec{v}(t) = \\langle 5t,\\ 12t \\rangle$ 运动。求它在 $t = 1$ 时的速率。请填一个整数。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "At $t = 1$, $\\vec{v}(1) = \\langle 5, 12 \\rangle$, so speed $= \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$. The 5-12-13 triple keeps the arithmetic clean.",
        "zh": "当 $t = 1$ 时 $\\vec{v}(1) = \\langle 5, 12 \\rangle$，速率 $= \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$。5-12-13 勾股数使计算保持整洁。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle 5t,\\ 12t \\rangle$. Find the total distance it travels from $t = 0$ to $t = 2$. Give an integer.",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle 5t,\\ 12t \\rangle$。求它从 $t = 0$ 到 $t = 2$ 经过的总路程。请填一个整数。"
      },
      "answer": "26",
      "accept": [
        "26.0",
        "+26"
      ],
      "explanation": {
        "en": "Speed $= \\sqrt{25t^2 + 144t^2} = \\sqrt{169t^2} = 13t$ (for $t \\ge 0$). Distance $= \\int_0^2 13t\\,dt = \\frac{13t^2}{2}\\Big|_0^2 = 26$.",
        "zh": "速率 $= \\sqrt{25t^2 + 144t^2} = \\sqrt{169t^2} = 13t$（$t \\ge 0$）。路程 $= \\int_0^2 13t\\,dt = \\frac{13t^2}{2}\\Big|_0^2 = 26$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The $y$-coordinate of a particle satisfies $y'(t) = 3t^2 + 2$ and $y(1) = 4$. Find $y(2)$. Give an integer.",
        "zh": "质点的 $y$ 坐标满足 $y'(t) = 3t^2 + 2$，且 $y(1) = 4$。求 $y(2)$。请填一个整数。"
      },
      "answer": "13",
      "accept": [
        "13.0",
        "+13"
      ],
      "explanation": {
        "en": "$y(2) = y(1) + \\int_1^2 (3t^2 + 2)\\,dt = 4 + \\left[ t^3 + 2t \\right]_1^2 = 4 + (12 - 3) = 13$. Dropping the initial value $y(1) = 4$ gives $9$.",
        "zh": "$y(2) = y(1) + \\int_1^2 (3t^2 + 2)\\,dt = 4 + \\left[ t^3 + 2t \\right]_1^2 = 4 + (12 - 3) = 13$。丢掉初始值 $y(1) = 4$ 会得到 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle 4t,\\ 3 \\rangle$. Find the magnitude of its displacement from $t = 0$ to $t = 2$. Give an integer.",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle 4t,\\ 3 \\rangle$。求它从 $t = 0$ 到 $t = 2$ 的位移的模。请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "Displacement $= \\left\\langle \\int_0^2 4t\\,dt,\\ \\int_0^2 3\\,dt \\right\\rangle = \\langle 8, 6 \\rangle$, magnitude $= \\sqrt{64 + 36} = \\sqrt{100} = 10$.",
        "zh": "位移 $= \\left\\langle \\int_0^2 4t\\,dt,\\ \\int_0^2 3\\,dt \\right\\rangle = \\langle 8, 6 \\rangle$，模 $= \\sqrt{64 + 36} = \\sqrt{100} = 10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle has velocity $\\vec{v}(t) = \\langle t^2 - 1,\\ 2t \\rangle$. Find the total distance it travels from $t = 0$ to $t = 3$. Give an integer.",
        "zh": "质点速度为 $\\vec{v}(t) = \\langle t^2 - 1,\\ 2t \\rangle$。求它从 $t = 0$ 到 $t = 3$ 经过的总路程。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "Speed $= \\sqrt{(t^2 - 1)^2 + (2t)^2} = \\sqrt{(t^2 + 1)^2} = t^2 + 1$. Distance $= \\int_0^3 (t^2 + 1)\\,dt = 9 + 3 = 12$.",
        "zh": "速率 $= \\sqrt{(t^2 - 1)^2 + (2t)^2} = \\sqrt{(t^2 + 1)^2} = t^2 + 1$。路程 $= \\int_0^3 (t^2 + 1)\\,dt = 9 + 3 = 12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with $x'(t) = 4t$ and $x(0) = -3$. Find $x(2)$. Give an integer.",
        "zh": "质点运动满足 $x'(t) = 4t$，且 $x(0) = -3$。求 $x(2)$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$x(2) = x(0) + \\int_0^2 4t\\,dt = -3 + \\left[ 2t^2 \\right]_0^2 = -3 + 8 = 5$. A negative initial position must be carried through the sum.",
        "zh": "$x(2) = x(0) + \\int_0^2 4t\\,dt = -3 + \\left[ 2t^2 \\right]_0^2 = -3 + 8 = 5$。负的初始位置必须带入求和。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A particle moves with velocity $\\vec{v}(t) = \\langle 8t,\\ 15t \\rangle$. Find its speed at $t = 1$. Give an integer.",
        "zh": "质点以速度 $\\vec{v}(t) = \\langle 8t,\\ 15t \\rangle$ 运动。求它在 $t = 1$ 时的速率。请填一个整数。"
      },
      "answer": "17",
      "accept": [
        "17.0",
        "+17"
      ],
      "explanation": {
        "en": "At $t = 1$, $\\vec{v}(1) = \\langle 8, 15 \\rangle$, so speed $= \\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$. The 8-15-17 Pythagorean triple gives a clean value.",
        "zh": "当 $t = 1$ 时 $\\vec{v}(1) = \\langle 8, 15 \\rangle$，速率 $= \\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$。8-15-17 勾股数给出整洁的结果。"
      }
    }
  ],
  "unit-9-parametric-polar-vector/polar-calculus": [
    {
      "type": "mc",
      "question": {
        "en": "The polar point $(r, \\theta) = \\left( 6, \\frac{\\pi}{6} \\right)$ has which rectangular coordinates?",
        "zh": "极坐标点 $(r, \\theta) = \\left( 6, \\frac{\\pi}{6} \\right)$ 的直角坐标是什么？"
      },
      "choices": [
        "$(3\\sqrt{3},\\ 3)$",
        "$(3,\\ 3\\sqrt{3})$",
        "$(6,\\ \\frac{\\pi}{6})$",
        "$(3\\sqrt{3},\\ -3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$x = r\\cos\\theta = 6\\cos\\frac{\\pi}{6} = 6 \\cdot \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}$ and $y = r\\sin\\theta = 6\\sin\\frac{\\pi}{6} = 6 \\cdot \\frac{1}{2} = 3$. Swapping sine and cosine gives $(3, 3\\sqrt{3})$.",
        "zh": "$x = r\\cos\\theta = 6\\cos\\frac{\\pi}{6} = 6 \\cdot \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}$，$y = r\\sin\\theta = 6\\sin\\frac{\\pi}{6} = 6 \\cdot \\frac{1}{2} = 3$。把正弦、余弦对调会得到 $(3, 3\\sqrt{3})$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The rectangular point $(3, 4)$ has what distance $r$ from the pole?",
        "zh": "直角坐标点 $(3, 4)$ 到极点的距离 $r$ 是多少？"
      },
      "choices": [
        "$7$",
        "$5$",
        "$\\sqrt{7}$",
        "$25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$r = \\sqrt{x^2 + y^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Adding the coordinates ($3 + 4 = 7$) instead of using the Pythagorean formula is the classic error.",
        "zh": "$r = \\sqrt{x^2 + y^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$。把坐标相加（$3 + 4 = 7$）而不是用勾股公式是典型错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by $r = 4\\sin\\theta$?",
        "zh": "曲线 $r = 4\\sin\\theta$ 所围区域的面积是多少？"
      },
      "choices": [
        "$8\\pi$",
        "$2\\pi$",
        "$4\\pi$",
        "$16\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$r = 4\\sin\\theta$ is a circle of radius $2$ (through the pole), traced once for $0 \\le \\theta \\le \\pi$, so its area is $\\pi(2)^2 = 4\\pi$. Integrating over $[0, 2\\pi]$ traces the circle twice and doubles the area to $8\\pi$.",
        "zh": "$r = 4\\sin\\theta$ 是半径为 $2$ 的圆（经过极点），当 $0 \\le \\theta \\le \\pi$ 时恰好描一次，面积为 $\\pi(2)^2 = 4\\pi$。在 $[0, 2\\pi]$ 上积分会把圆描两次，面积翻倍成 $8\\pi$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of the region enclosed by the cardioid $r = 1 + \\cos\\theta$?",
        "zh": "心形线 $r = 1 + \\cos\\theta$ 所围区域的面积是多少？"
      },
      "choices": [
        "$3\\pi$",
        "$\\pi$",
        "$2\\pi$",
        "$\\frac{3\\pi}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$A = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi} (1 + 2\\cos\\theta + \\cos^2\\theta)\\,d\\theta = \\frac{1}{2}(2\\pi + 0 + \\pi) = \\frac{3\\pi}{2}$. Forgetting the $\\frac{1}{2}$ doubles this to $3\\pi$.",
        "zh": "$A = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi} (1 + 2\\cos\\theta + \\cos^2\\theta)\\,d\\theta = \\frac{1}{2}(2\\pi + 0 + \\pi) = \\frac{3\\pi}{2}$。忘记 $\\frac{1}{2}$ 会翻倍成 $3\\pi$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the area of the region that lies inside the circle $r = 2$ and outside the circle $r = 1$.",
        "zh": "求在圆 $r = 2$ 内部且在圆 $r = 1$ 外部的区域面积。"
      },
      "choices": [
        "$3\\pi$",
        "$6\\pi$",
        "$\\frac{3\\pi}{2}$",
        "$9\\pi$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$A = \\frac{1}{2}\\int_0^{2\\pi} (2^2 - 1^2)\\,d\\theta = \\frac{1}{2}(3)(2\\pi) = 3\\pi$. Geometry check: $\\pi(2)^2 - \\pi(1)^2 = 4\\pi - \\pi = 3\\pi$. Using $(R - r)^2$ instead of $R^2 - r^2$ gives the wrong value $\\frac{1}{2}\\int_0^{2\\pi} (1)^2\\,d\\theta = \\pi$.",
        "zh": "$A = \\frac{1}{2}\\int_0^{2\\pi} (2^2 - 1^2)\\,d\\theta = \\frac{1}{2}(3)(2\\pi) = 3\\pi$。几何验证：$\\pi(2)^2 - \\pi(1)^2 = 4\\pi - \\pi = 3\\pi$。用 $(R - r)^2$ 代替 $R^2 - r^2$ 会得到错误的 $\\frac{1}{2}\\int_0^{2\\pi} (1)^2\\,d\\theta = \\pi$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the cardioid $r = 1 + \\cos\\theta$, what is $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{2}$?",
        "zh": "对心形线 $r = 1 + \\cos\\theta$，当 $\\theta = \\frac{\\pi}{2}$ 时 $\\frac{dy}{dx}$ 等于多少？"
      },
      "choices": [
        "$-1$",
        "$1$",
        "$0$",
        "undefined"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $\\frac{dr}{d\\theta} = -\\sin\\theta$: numerator $= \\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta = -\\sin^2\\theta + (1 + \\cos\\theta)\\cos\\theta$, which at $\\frac{\\pi}{2}$ is $-1 + 0 = -1$; denominator $= \\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta = -\\sin\\theta\\cos\\theta - (1 + \\cos\\theta)\\sin\\theta$, which is $0 - 1 = -1$. So $\\frac{dy}{dx} = \\frac{-1}{-1} = 1$.",
        "zh": "由 $\\frac{dr}{d\\theta} = -\\sin\\theta$：分子 $= \\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta = -\\sin^2\\theta + (1 + \\cos\\theta)\\cos\\theta$，在 $\\frac{\\pi}{2}$ 处为 $-1 + 0 = -1$；分母 $= \\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta = -\\sin\\theta\\cos\\theta - (1 + \\cos\\theta)\\sin\\theta$，为 $0 - 1 = -1$。故 $\\frac{dy}{dx} = \\frac{-1}{-1} = 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many petals does the rose curve $r = 5\\sin(4\\theta)$ have?",
        "zh": "玫瑰线 $r = 5\\sin(4\\theta)$ 有几片花瓣？"
      },
      "choices": [
        "$4$",
        "$16$",
        "$8$",
        "$5$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For $r = a\\sin(n\\theta)$, an even $n$ gives $2n$ petals and an odd $n$ gives $n$. Here $n = 4$ is even, so there are $2(4) = 8$ petals. Answering $4$ applies the odd-$n$ rule to an even $n$.",
        "zh": "对 $r = a\\sin(n\\theta)$：$n$ 为偶数时有 $2n$ 片花瓣，$n$ 为奇数时有 $n$ 片。这里 $n = 4$ 是偶数，故有 $2(4) = 8$ 片。答 $4$ 是把奇数规则用到了偶数上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The polar equation $r = 4\\cos\\theta$ is equivalent to which rectangular equation?",
        "zh": "极坐标方程 $r = 4\\cos\\theta$ 等价于下列哪个直角坐标方程？"
      },
      "choices": [
        "$x^2 + (y - 2)^2 = 4$",
        "$x^2 + y^2 = 16$",
        "$(x - 4)^2 + y^2 = 16$",
        "$(x - 2)^2 + y^2 = 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply both sides by $r$: $r^2 = 4r\\cos\\theta$, so $x^2 + y^2 = 4x$. Completing the square: $(x - 2)^2 + y^2 = 4$ — a circle of radius $2$ centered at $(2, 0)$. The sine version $r = 4\\sin\\theta$ would instead shift along the $y$-axis.",
        "zh": "两边同乘 $r$：$r^2 = 4r\\cos\\theta$，即 $x^2 + y^2 = 4x$。配方得 $(x - 2)^2 + y^2 = 4$——以 $(2, 0)$ 为圆心、半径为 $2$ 的圆。正弦形式 $r = 4\\sin\\theta$ 则沿 $y$ 轴平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the area of one petal of the rose curve $r = 2\\cos(3\\theta)$?",
        "zh": "玫瑰线 $r = 2\\cos(3\\theta)$ 一片花瓣的面积是多少？"
      },
      "choices": [
        "$\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{2}$",
        "$\\frac{\\pi}{6}$",
        "$\\frac{2\\pi}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "One petal is traced for $-\\frac{\\pi}{6} \\le \\theta \\le \\frac{\\pi}{6}$. $A = \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6} 4\\cos^2(3\\theta)\\,d\\theta = 2 \\cdot \\frac{\\pi}{6} = \\frac{\\pi}{3}$, using $\\int_{-\\pi/6}^{\\pi/6}\\cos^2(3\\theta)\\,d\\theta = \\frac{\\pi}{6}$. Forgetting the $\\frac{1}{2}$ gives $\\frac{2\\pi}{3}$.",
        "zh": "一片花瓣对应 $-\\frac{\\pi}{6} \\le \\theta \\le \\frac{\\pi}{6}$。$A = \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6} 4\\cos^2(3\\theta)\\,d\\theta = 2 \\cdot \\frac{\\pi}{6} = \\frac{\\pi}{3}$，其中 $\\int_{-\\pi/6}^{\\pi/6}\\cos^2(3\\theta)\\,d\\theta = \\frac{\\pi}{6}$。忘记 $\\frac{1}{2}$ 会得到 $\\frac{2\\pi}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a polar curve $r = f(\\theta)$, what does $\\frac{dr}{d\\theta}$ measure?",
        "zh": "对极坐标曲线 $r = f(\\theta)$，$\\frac{dr}{d\\theta}$ 度量的是什么？"
      },
      "choices": [
        "The slope $\\frac{dy}{dx}$ of the curve",
        "How fast the curve moves toward or away from the pole",
        "The area swept out by the curve",
        "The curvature of the curve"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{dr}{d\\theta}$ is the rate at which the distance from the pole changes as $\\theta$ increases — not the slope. The slope is the parametric ratio $\\frac{dy/d\\theta}{dx/d\\theta}$, which mixes $r$, $\\frac{dr}{d\\theta}$, and trig factors.",
        "zh": "$\\frac{dr}{d\\theta}$ 是随 $\\theta$ 增大、到极点距离的变化率——并不是斜率。斜率是参数比 $\\frac{dy/d\\theta}{dx/d\\theta}$，其中混有 $r$、$\\frac{dr}{d\\theta}$ 和三角因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following polar equations is a cardioid?",
        "zh": "下列哪个极坐标方程是心形线？"
      },
      "choices": [
        "$r = 2\\sin\\theta$",
        "$r = 2\\cos(3\\theta)$",
        "$r = 2 + 2\\sin\\theta$",
        "$r = 4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A cardioid has the form $r = a(1 \\pm \\cos\\theta)$ or $r = a(1 \\pm \\sin\\theta)$; $r = 2 + 2\\sin\\theta = 2(1 + \\sin\\theta)$ matches. $r = 2\\sin\\theta$ is a circle, $r = 2\\cos(3\\theta)$ is a rose, and $r = 4$ is a circle centered at the pole.",
        "zh": "心形线的形式是 $r = a(1 \\pm \\cos\\theta)$ 或 $r = a(1 \\pm \\sin\\theta)$；$r = 2 + 2\\sin\\theta = 2(1 + \\sin\\theta)$ 符合。$r = 2\\sin\\theta$ 是圆，$r = 2\\cos(3\\theta)$ 是玫瑰线，$r = 4$ 是以极点为圆心的圆。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the area swept out by the spiral $r = 2\\theta$ from $\\theta = 0$ to $\\theta = \\pi$.",
        "zh": "求螺线 $r = 2\\theta$ 从 $\\theta = 0$ 到 $\\theta = \\pi$ 扫过的面积。"
      },
      "choices": [
        "$\\frac{\\pi^3}{3}$",
        "$\\frac{4\\pi^3}{3}$",
        "$2\\pi^3$",
        "$\\frac{2\\pi^3}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$A = \\frac{1}{2}\\int_0^{\\pi} (2\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{\\pi} 4\\theta^2\\,d\\theta = 2 \\cdot \\frac{\\theta^3}{3}\\Big|_0^{\\pi} = \\frac{2\\pi^3}{3}$. Forgetting to square the $2$ in $r = 2\\theta$ gives $\\frac{\\pi^3}{3}$.",
        "zh": "$A = \\frac{1}{2}\\int_0^{\\pi} (2\\theta)^2\\,d\\theta = \\frac{1}{2}\\int_0^{\\pi} 4\\theta^2\\,d\\theta = 2 \\cdot \\frac{\\theta^3}{3}\\Big|_0^{\\pi} = \\frac{2\\pi^3}{3}$。忘记把 $r = 2\\theta$ 中的 $2$ 平方会得到 $\\frac{\\pi^3}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-coordinate of the polar point $(r, \\theta) = \\left( 2, \\frac{2\\pi}{3} \\right)$. Give an integer.",
        "zh": "求极坐标点 $(r, \\theta) = \\left( 2, \\frac{2\\pi}{3} \\right)$ 的 $x$ 坐标。请填一个整数。"
      },
      "answer": "-1",
      "accept": [
        "-1.0"
      ],
      "explanation": {
        "en": "$x = r\\cos\\theta = 2\\cos\\frac{2\\pi}{3} = 2 \\cdot \\left( -\\frac{1}{2} \\right) = -1$. The angle $\\frac{2\\pi}{3}$ is in the second quadrant, where cosine is negative.",
        "zh": "$x = r\\cos\\theta = 2\\cos\\frac{2\\pi}{3} = 2 \\cdot \\left( -\\frac{1}{2} \\right) = -1$。角 $\\frac{2\\pi}{3}$ 位于第二象限，余弦为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The area enclosed by $r = 6\\cos\\theta$ equals $k\\pi$. Find $k$. Give an integer.",
        "zh": "曲线 $r = 6\\cos\\theta$ 所围区域的面积等于 $k\\pi$。求 $k$。请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "$r = 6\\cos\\theta$ is a circle of radius $3$, so its area is $\\pi(3)^2 = 9\\pi$, giving $k = 9$. (Check: $\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} 36\\cos^2\\theta\\,d\\theta = 9\\pi$.)",
        "zh": "$r = 6\\cos\\theta$ 是半径为 $3$ 的圆，面积为 $\\pi(3)^2 = 9\\pi$，故 $k = 9$。（验证：$\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} 36\\cos^2\\theta\\,d\\theta = 9\\pi$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many petals does the rose curve $r = 7\\sin(6\\theta)$ have? Give an integer.",
        "zh": "玫瑰线 $r = 7\\sin(6\\theta)$ 有几片花瓣？请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "For $r = a\\sin(n\\theta)$ with even $n$, there are $2n$ petals. Here $n = 6$ is even, so $2(6) = 12$ petals.",
        "zh": "对 $r = a\\sin(n\\theta)$，$n$ 为偶数时有 $2n$ 片花瓣。这里 $n = 6$ 是偶数，故有 $2(6) = 12$ 片。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many petals does the rose curve $r = 2\\cos(5\\theta)$ have? Give an integer.",
        "zh": "玫瑰线 $r = 2\\cos(5\\theta)$ 有几片花瓣？请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "For $r = a\\cos(n\\theta)$ with odd $n$, there are $n$ petals (the curve retraces itself over $[0, 2\\pi]$). Here $n = 5$ is odd, so there are $5$ petals; applying the even rule would wrongly give $10$.",
        "zh": "对 $r = a\\cos(n\\theta)$，$n$ 为奇数时有 $n$ 片花瓣（曲线在 $[0, 2\\pi]$ 上会重描一遍）。这里 $n = 5$ 是奇数，故有 $5$ 片；错用偶数规则会得到 $10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The curves $r = 2\\sin\\theta$ and $r = 1$ intersect in the first quadrant at $\\theta = \\frac{\\pi}{k}$. Find $k$. Give an integer.",
        "zh": "曲线 $r = 2\\sin\\theta$ 与 $r = 1$ 在第一象限交于 $\\theta = \\frac{\\pi}{k}$。求 $k$。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Set the curves equal: $2\\sin\\theta = 1$ gives $\\sin\\theta = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{6}$ in the first quadrant, meaning $k = 6$.",
        "zh": "令两曲线相等：$2\\sin\\theta = 1$ 得 $\\sin\\theta = \\frac{1}{2}$，第一象限中 $\\theta = \\frac{\\pi}{6}$，故 $k = 6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The area inside the circle $r = 3$ and outside the circle $r = 2$ equals $k\\pi$. Find $k$. Give an integer.",
        "zh": "在圆 $r = 3$ 内部且在圆 $r = 2$ 外部的面积等于 $k\\pi$。求 $k$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$A = \\frac{1}{2}\\int_0^{2\\pi} (3^2 - 2^2)\\,d\\theta = \\frac{1}{2}(5)(2\\pi) = 5\\pi$, so $k = 5$. Subtract the squares of the radii, not the radii themselves.",
        "zh": "$A = \\frac{1}{2}\\int_0^{2\\pi} (3^2 - 2^2)\\,d\\theta = \\frac{1}{2}(5)(2\\pi) = 5\\pi$，故 $k = 5$。要相减的是半径的平方，而不是半径本身。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The polar curve $r = 8\\sin\\theta$ is a circle. What is its radius? Give an integer.",
        "zh": "极坐标曲线 $r = 8\\sin\\theta$ 是一个圆。它的半径是多少？请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Multiply by $r$: $r^2 = 8r\\sin\\theta$, so $x^2 + y^2 = 8y$, i.e. $x^2 + (y - 4)^2 = 16$ — a circle of radius $4$. In general $r = 2a\\sin\\theta$ has radius $a$, so here $a = 4$.",
        "zh": "两边乘 $r$：$r^2 = 8r\\sin\\theta$，即 $x^2 + y^2 = 8y$，也就是 $x^2 + (y - 4)^2 = 16$——半径为 $4$ 的圆。一般地 $r = 2a\\sin\\theta$ 的半径为 $a$，故这里 $a = 4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the maximum value of $r$ on the limaçon $r = 3 + 2\\cos\\theta$. Give an integer.",
        "zh": "求蜗牛线 $r = 3 + 2\\cos\\theta$ 上 $r$ 的最大值。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$r = 3 + 2\\cos\\theta$ is largest when $\\cos\\theta = 1$ (at $\\theta = 0$), giving $r = 3 + 2 = 5$. The minimum, at $\\cos\\theta = -1$, is $r = 1$.",
        "zh": "$r = 3 + 2\\cos\\theta$ 在 $\\cos\\theta = 1$（即 $\\theta = 0$）时最大，为 $r = 3 + 2 = 5$。最小值在 $\\cos\\theta = -1$ 时，为 $r = 1$。"
      }
    }
  ],
  "unit-10-infinite-series/sequences-and-geometric-series": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following series diverges by the nth-term test for divergence?",
        "zh": "下列哪个级数可由第 $n$ 项发散判别法判定发散？"
      },
      "choices": [
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$",
        "$\\sum_{n=1}^{\\infty} \\frac{3n-1}{2n+5}$",
        "$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$",
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n \\ln n}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For $\\frac{3n-1}{2n+5}$ the terms tend to $\\frac{3}{2} \\neq 0$, so the series diverges by the nth-term test. The other three all have terms tending to $0$, so this test says nothing about them — the test can only ever prove divergence.",
        "zh": "$\\frac{3n-1}{2n+5}$ 的通项趋于 $\\frac{3}{2} \\neq 0$，故由第 $n$ 项判别法发散。其余三个的通项都趋于 $0$，此判别法对它们无法下结论——它只能证明发散。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is $\\lim_{n \\to \\infty} \\frac{\\ln n}{n}$?",
        "zh": "$\\lim_{n \\to \\infty} \\frac{\\ln n}{n}$ 等于多少？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$\\infty$",
        "The limit does not exist / 极限不存在"
      ],
      "answer": 0,
      "explanation": {
        "en": "The denominator $n$ grows faster than the numerator $\\ln n$, so the ratio tends to $0$ (this is a standard limit; L'Hospital on $\\frac{\\ln x}{x}$ gives $\\frac{1/x}{1} \\to 0$). Treating $\\ln n$ as if it grew like $n$ would wrongly suggest a limit of $1$.",
        "zh": "分母 $n$ 增长快于分子 $\\ln n$，故比值趋于 $0$（这是标准极限；对 $\\frac{\\ln x}{x}$ 用洛必达得 $\\frac{1/x}{1} \\to 0$）。若误以为 $\\ln n$ 与 $n$ 同阶增长，会错得极限为 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The repeating decimal $0.\\overline{5} = 0.555\\ldots$ equals which exact value?",
        "zh": "循环小数 $0.\\overline{5} = 0.555\\ldots$ 的精确值是多少？"
      },
      "choices": [
        "$\\frac{1}{2}$",
        "$\\frac{5}{10}$",
        "$\\frac{5}{11}$",
        "$\\frac{5}{9}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Write it as a geometric series $\\sum_{n=1}^{\\infty} \\frac{5}{10^n}$ with first term $\\frac{5}{10}$ and ratio $\\frac{1}{10}$: the sum is $\\frac{5/10}{1 - 1/10} = \\frac{5/10}{9/10} = \\frac{5}{9}$. Stopping at the first term $\\frac{5}{10} = \\frac{1}{2}$ ignores the rest of the tail.",
        "zh": "写成几何级数 $\\sum_{n=1}^{\\infty} \\frac{5}{10^n}$，首项 $\\frac{5}{10}$，公比 $\\frac{1}{10}$：和为 $\\frac{5/10}{1 - 1/10} = \\frac{5/10}{9/10} = \\frac{5}{9}$。停在首项 $\\frac{5}{10} = \\frac{1}{2}$ 就漏掉了后面所有项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sum_{n=0}^{\\infty} \\left(-\\frac{2}{5}\\right)^n$.",
        "zh": "求 $\\sum_{n=0}^{\\infty} \\left(-\\frac{2}{5}\\right)^n$ 的值。"
      },
      "choices": [
        "$\\frac{5}{3}$",
        "$-\\frac{5}{7}$",
        "$\\frac{5}{7}$",
        "$\\frac{2}{7}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Geometric with $a = 1$, $r = -\\frac{2}{5}$, and $|r| < 1$: the sum is $\\frac{1}{1 - (-2/5)} = \\frac{1}{7/5} = \\frac{5}{7}$. The sign trap is using $1 - \\frac{2}{5} = \\frac{3}{5}$ in the denominator instead of $1 + \\frac{2}{5}$.",
        "zh": "几何级数，$a = 1$，$r = -\\frac{2}{5}$，$|r| < 1$：和为 $\\frac{1}{1 - (-2/5)} = \\frac{1}{7/5} = \\frac{5}{7}$。符号陷阱是把分母写成 $1 - \\frac{2}{5} = \\frac{3}{5}$，而不是 $1 + \\frac{2}{5}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For which values of $x$ does $\\sum_{n=0}^{\\infty} \\left(\\frac{x}{4}\\right)^n$ converge?",
        "zh": "当 $x$ 取何值时，级数 $\\sum_{n=0}^{\\infty} \\left(\\frac{x}{4}\\right)^n$ 收敛？"
      },
      "choices": [
        "$-1 < x < 1$",
        "$-4 < x < 4$",
        "$-4 \\le x \\le 4$",
        "$x < 4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Geometric with $r = \\frac{x}{4}$; it converges when $\\left|\\frac{x}{4}\\right| < 1$, i.e. $|x| < 4$. At $x = \\pm 4$ the ratio has absolute value $1$, so the endpoints diverge — a geometric series never includes its endpoints.",
        "zh": "公比 $r = \\frac{x}{4}$ 的几何级数；当 $\\left|\\frac{x}{4}\\right| < 1$ 即 $|x| < 4$ 时收敛。在 $x = \\pm 4$ 处公比绝对值为 $1$，端点发散——几何级数从不包含端点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The partial sums of $\\sum_{n=1}^{\\infty} a_n$ satisfy $S_n = \\frac{3n - 1}{n + 2}$. What can you conclude?",
        "zh": "级数 $\\sum_{n=1}^{\\infty} a_n$ 的部分和满足 $S_n = \\frac{3n - 1}{n + 2}$。可以得出什么结论？"
      },
      "choices": [
        "The series converges to $3$ / 级数收敛于 $3$",
        "The series diverges / 级数发散",
        "The series converges to $0$ / 级数收敛于 $0$",
        "The series converges to $1$ / 级数收敛于 $1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By definition the sum of the series is $\\lim_{n\\to\\infty} S_n = \\lim_{n\\to\\infty} \\frac{3n-1}{n+2} = 3$. Answering $0$ confuses the limit of the terms $a_n$ (which is $0$ for any convergent series) with the limit of the partial sums.",
        "zh": "根据定义，级数的和为 $\\lim_{n\\to\\infty} S_n = \\lim_{n\\to\\infty} \\frac{3n-1}{n+2} = 3$。答 $0$ 是把通项 $a_n$ 的极限（任何收敛级数都为 $0$）与部分和的极限混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following series must diverge by the nth-term test?",
        "zh": "下列哪个级数必由第 $n$ 项判别法发散？"
      },
      "choices": [
        "$\\sum_{n=1}^{\\infty} \\sin\\!\\left(\\frac{1}{n}\\right)$",
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n}$",
        "$\\sum_{n=1}^{\\infty} \\cos\\!\\left(\\frac{1}{n}\\right)$",
        "$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For $\\cos\\!\\left(\\frac{1}{n}\\right)$ the terms tend to $\\cos 0 = 1 \\neq 0$, so the series diverges by the nth-term test. The other three have terms tending to $0$, so the test cannot decide them.",
        "zh": "$\\cos\\!\\left(\\frac{1}{n}\\right)$ 的通项趋于 $\\cos 0 = 1 \\neq 0$，故由第 $n$ 项判别法发散。其余三个通项都趋于 $0$，判别法无法判定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following geometric series converges?",
        "zh": "下列哪个几何级数收敛？"
      },
      "choices": [
        "$\\sum_{n=0}^{\\infty} \\left(\\frac{4}{3}\\right)^n$",
        "$\\sum_{n=0}^{\\infty} 3(-1)^n$",
        "$\\sum_{n=0}^{\\infty} \\left(\\frac{9}{8}\\right)^n$",
        "$\\sum_{n=0}^{\\infty} \\left(\\frac{7}{8}\\right)^n$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A geometric series converges exactly when $|r| < 1$; only $r = \\frac{7}{8}$ qualifies. The ratios $\\frac{4}{3}$ and $\\frac{9}{8}$ exceed $1$, and $r = -1$ gives terms that do not tend to $0$.",
        "zh": "几何级数当且仅当 $|r| < 1$ 时收敛；只有 $r = \\frac{7}{8}$ 满足。$\\frac{4}{3}$ 和 $\\frac{9}{8}$ 都大于 $1$，而 $r = -1$ 时通项不趋于 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\sum_{n=1}^{\\infty} \\frac{3^{n+1}}{4^n}$.",
        "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{3^{n+1}}{4^n}$ 的值。"
      },
      "choices": [
        "$9$",
        "$3$",
        "$12$",
        "$4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rewrite $\\frac{3^{n+1}}{4^n} = 3\\left(\\frac{3}{4}\\right)^n$. This is geometric with $r = \\frac{3}{4}$; the first term (at $n = 1$) is $3 \\cdot \\frac{3}{4} = \\frac{9}{4}$, so the sum is $\\frac{9/4}{1 - 3/4} = \\frac{9/4}{1/4} = 9$. Plugging $a = 3$ ignores that the sum starts at $n = 1$.",
        "zh": "改写 $\\frac{3^{n+1}}{4^n} = 3\\left(\\frac{3}{4}\\right)^n$。这是公比 $r = \\frac{3}{4}$ 的几何级数；首项（$n = 1$ 时）为 $3 \\cdot \\frac{3}{4} = \\frac{9}{4}$，和为 $\\frac{9/4}{1 - 3/4} = \\frac{9/4}{1/4} = 9$。直接代 $a = 3$ 忽略了求和从 $n = 1$ 开始。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the sum of the telescoping series $\\sum_{n=1}^{\\infty} \\frac{1}{(2n-1)(2n+1)}$.",
        "zh": "求裂项相消级数 $\\sum_{n=1}^{\\infty} \\frac{1}{(2n-1)(2n+1)}$ 的和。"
      },
      "choices": [
        "$1$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Partial fractions: $\\frac{1}{(2n-1)(2n+1)} = \\frac{1}{2}\\left(\\frac{1}{2n-1} - \\frac{1}{2n+1}\\right)$. The partial sum telescopes to $\\frac{1}{2}\\left(1 - \\frac{1}{2n+1}\\right) \\to \\frac{1}{2}$. Forgetting the factor $\\frac{1}{2}$ from the decomposition gives $1$.",
        "zh": "部分分式：$\\frac{1}{(2n-1)(2n+1)} = \\frac{1}{2}\\left(\\frac{1}{2n-1} - \\frac{1}{2n+1}\\right)$。部分和裂项相消为 $\\frac{1}{2}\\left(1 - \\frac{1}{2n+1}\\right) \\to \\frac{1}{2}$。漏掉分解出的因子 $\\frac{1}{2}$ 会得到 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric series has first term $8$ and common ratio $-\\frac{1}{2}$. What is its sum?",
        "zh": "某几何级数首项为 $8$，公比为 $-\\frac{1}{2}$。求它的和。"
      },
      "choices": [
        "$16$",
        "$\\frac{8}{3}$",
        "$\\frac{16}{3}$",
        "$4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $|r| = \\frac{1}{2} < 1$, the sum is $\\frac{a}{1-r} = \\frac{8}{1 - (-1/2)} = \\frac{8}{3/2} = \\frac{16}{3}$. Using $1 - \\frac{1}{2} = \\frac{1}{2}$ (dropping the negative sign) would give the wrong answer $16$.",
        "zh": "因为 $|r| = \\frac{1}{2} < 1$，和为 $\\frac{a}{1-r} = \\frac{8}{1 - (-1/2)} = \\frac{8}{3/2} = \\frac{16}{3}$。若用 $1 - \\frac{1}{2} = \\frac{1}{2}$（丢掉负号）会错得 $16$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If a series $\\sum_{n=1}^{\\infty} a_n$ converges, which statement must be true?",
        "zh": "若级数 $\\sum_{n=1}^{\\infty} a_n$ 收敛，下列哪句话一定成立？"
      },
      "choices": [
        "$a_n$ tends to a nonzero limit / $a_n$趋于一个非零极限",
        "The partial sums diverge / 部分和发散",
        "$\\sum a_n = \\lim_{n\\to\\infty} a_n$",
        "$\\lim_{n\\to\\infty} a_n = 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "If a series converges, its terms must tend to $0$ (since $a_n = S_n - S_{n-1} \\to S - S = 0$). The converse is false, but this direction always holds. Confusing the sum of the series with $\\lim a_n$ (which is $0$) is a classic error.",
        "zh": "若级数收敛，其通项必趋于 $0$（因为 $a_n = S_n - S_{n-1} \\to S - S = 0$）。逆命题不成立，但这个方向永远成立。把级数的和与 $\\lim a_n$（其值为 $0$）混淆是经典错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\lim_{n \\to \\infty} \\frac{5n^3 - 2n}{2n^3 + 7}$. Give your answer as a fraction a/b or a decimal.",
        "zh": "求 $\\lim_{n \\to \\infty} \\frac{5n^3 - 2n}{2n^3 + 7}$。答案写成分数 a/b 或小数。"
      },
      "answer": "5/2",
      "accept": [
        "2.5",
        "2.50"
      ],
      "explanation": {
        "en": "Divide numerator and denominator by $n^3$: the limit equals the ratio of leading coefficients, $\\frac{5}{2}$. The lower-order terms $-2n$ and $+7$ vanish in the limit.",
        "zh": "分子分母同除以 $n^3$：极限等于最高次项系数之比 $\\frac{5}{2}$。低次项 $-2n$ 与 $+7$ 在极限中消失。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sum_{n=0}^{\\infty} 3\\left(\\frac{2}{3}\\right)^n$. Give an integer.",
        "zh": "求 $\\sum_{n=0}^{\\infty} 3\\left(\\frac{2}{3}\\right)^n$。请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "Geometric with $a = 3$, $r = \\frac{2}{3}$, $|r| < 1$: the sum is $\\frac{3}{1 - 2/3} = \\frac{3}{1/3} = 9$. The starting index is $n = 0$, so $a = 3$ really is the first term.",
        "zh": "几何级数，$a = 3$，$r = \\frac{2}{3}$，$|r| < 1$：和为 $\\frac{3}{1 - 2/3} = \\frac{3}{1/3} = 9$。求和从 $n = 0$ 开始，故 $a = 3$ 确为首项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum $\\sum_{n=1}^{\\infty} \\frac{1}{(n+1)(n+2)}$. Give your answer as a fraction a/b or a decimal.",
        "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{1}{(n+1)(n+2)}$ 的和。答案写成分数 a/b 或小数。"
      },
      "answer": "1/2",
      "accept": [
        "0.5",
        ".5"
      ],
      "explanation": {
        "en": "Telescoping: $\\frac{1}{(n+1)(n+2)} = \\frac{1}{n+1} - \\frac{1}{n+2}$, so $S_n = \\frac{1}{2} - \\frac{1}{n+2} \\to \\frac{1}{2}$. The first surviving term is $\\frac{1}{2}$ (from $n = 1$), not $1$.",
        "zh": "裂项相消：$\\frac{1}{(n+1)(n+2)} = \\frac{1}{n+1} - \\frac{1}{n+2}$，故 $S_n = \\frac{1}{2} - \\frac{1}{n+2} \\to \\frac{1}{2}$。第一个留下的项是 $\\frac{1}{2}$（来自 $n = 1$），不是 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric series has first term $4$ and common ratio $\\frac{1}{3}$. Find its sum. Give an integer.",
        "zh": "某几何级数首项为 $4$，公比为 $\\frac{1}{3}$。求它的和。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Sum $= \\frac{a}{1-r} = \\frac{4}{1 - 1/3} = \\frac{4}{2/3} = 6$. Since $|r| < 1$, the series really converges to this value.",
        "zh": "和 $= \\frac{a}{1-r} = \\frac{4}{1 - 1/3} = \\frac{4}{2/3} = 6$。因为 $|r| < 1$，级数确实收敛于此值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sum_{n=2}^{\\infty} 3\\left(\\frac{1}{2}\\right)^n$. Give your answer as a fraction a/b or a decimal.",
        "zh": "求 $\\sum_{n=2}^{\\infty} 3\\left(\\frac{1}{2}\\right)^n$。答案写成分数 a/b 或小数。"
      },
      "answer": "3/2",
      "accept": [
        "1.5",
        "1.50"
      ],
      "explanation": {
        "en": "The ratio is $r = \\frac{1}{2}$ and the first term (at $n = 2$) is $3 \\cdot \\frac{1}{4} = \\frac{3}{4}$: the sum is $\\frac{3/4}{1 - 1/2} = \\frac{3/4}{1/2} = \\frac{3}{2}$. Identify the actual first term, since the sum does not start at $n = 0$.",
        "zh": "公比 $r = \\frac{1}{2}$，首项（$n = 2$ 时）为 $3 \\cdot \\frac{1}{4} = \\frac{3}{4}$：和为 $\\frac{3/4}{1 - 1/2} = \\frac{3/4}{1/2} = \\frac{3}{2}$。由于求和不是从 $n = 0$ 开始，要找出真正的首项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A convergent geometric series has sum $12$ and common ratio $\\frac{1}{4}$. Find its first term. Give an integer.",
        "zh": "某收敛几何级数的和为 $12$，公比为 $\\frac{1}{4}$。求它的首项。请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "From $\\frac{a}{1-r} = 12$ with $r = \\frac{1}{4}$: $a = 12\\left(1 - \\frac{1}{4}\\right) = 12 \\cdot \\frac{3}{4} = 9$.",
        "zh": "由 $\\frac{a}{1-r} = 12$ 且 $r = \\frac{1}{4}$：$a = 12\\left(1 - \\frac{1}{4}\\right) = 12 \\cdot \\frac{3}{4} = 9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sum_{n=1}^{\\infty} \\frac{2^n}{3^{n+1}}$. Give your answer as a fraction a/b or a decimal.",
        "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{2^n}{3^{n+1}}$。答案写成分数 a/b 或小数。"
      },
      "answer": "2/3",
      "accept": [
        "0.6667",
        "0.667"
      ],
      "explanation": {
        "en": "Rewrite $\\frac{2^n}{3^{n+1}} = \\frac{1}{3}\\left(\\frac{2}{3}\\right)^n$. The first term (at $n = 1$) is $\\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{2}{9}$ and $r = \\frac{2}{3}$: the sum is $\\frac{2/9}{1 - 2/3} = \\frac{2/9}{1/3} = \\frac{2}{3}$.",
        "zh": "改写 $\\frac{2^n}{3^{n+1}} = \\frac{1}{3}\\left(\\frac{2}{3}\\right)^n$。首项（$n = 1$ 时）为 $\\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{2}{9}$，$r = \\frac{2}{3}$：和为 $\\frac{2/9}{1 - 2/3} = \\frac{2/9}{1/3} = \\frac{2}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric series has first term $10$ and second term $5$. Find its sum. Give an integer.",
        "zh": "某几何级数首项为 $10$，第二项为 $5$。求它的和。请填一个整数。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "+20"
      ],
      "explanation": {
        "en": "The ratio is $r = \\frac{5}{10} = \\frac{1}{2}$, so the sum is $\\frac{10}{1 - 1/2} = \\frac{10}{1/2} = 20$. First recover $r$ from the ratio of consecutive terms, then apply $\\frac{a}{1-r}$.",
        "zh": "公比 $r = \\frac{5}{10} = \\frac{1}{2}$，故和为 $\\frac{10}{1 - 1/2} = \\frac{10}{1/2} = 20$。先由相邻两项之比求出 $r$，再用 $\\frac{a}{1-r}$。"
      }
    }
  ],
  "unit-10-infinite-series/convergence-tests": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following p-series converges?",
        "zh": "下列哪个 p-级数收敛？"
      },
      "choices": [
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n^{3/2}}$",
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n^{2/3}}$",
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n}$",
        "$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A p-series converges exactly when $p > 1$. Only $p = \\frac{3}{2} > 1$ qualifies; $p = \\frac{2}{3}$, $p = 1$, and $p = \\frac{1}{2}$ all satisfy $p \\le 1$ and diverge.",
        "zh": "p-级数当且仅当 $p > 1$ 时收敛。只有 $p = \\frac{3}{2} > 1$ 满足；$p = \\frac{2}{3}$、$p = 1$、$p = \\frac{1}{2}$ 都满足 $p \\le 1$，发散。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about $\\sum_{n=1}^{\\infty} \\frac{n}{n^2 + 1}$ is correct?",
        "zh": "关于级数 $\\sum_{n=1}^{\\infty} \\frac{n}{n^2 + 1}$，下列哪句话正确？"
      },
      "choices": [
        "Converges by comparison with $\\sum \\frac{1}{n^2}$ / 与 $\\sum \\frac{1}{n^2}$ 比较收敛",
        "Diverges by limit comparison with $\\sum \\frac{1}{n}$ / 与 $\\sum \\frac{1}{n}$ 极限比较发散",
        "Converges by the ratio test / 由比值判别法收敛",
        "Diverges by the nth-term test / 由第 $n$ 项判别法发散"
      ],
      "answer": 1,
      "explanation": {
        "en": "Keep dominant terms: $\\frac{n}{n^2+1} \\approx \\frac{1}{n}$. Limit comparison with $\\frac{1}{n}$ gives $\\lim \\frac{n^2}{n^2+1} = 1$, a finite positive number, so the series shares the fate of the divergent harmonic series. The terms do tend to $0$, so the nth-term test is silent.",
        "zh": "保留主导项：$\\frac{n}{n^2+1} \\approx \\frac{1}{n}$。与 $\\frac{1}{n}$ 作极限比较，$\\lim \\frac{n^2}{n^2+1} = 1$ 为有限正数，故与发散的调和级数同命运。通项确实趋于 $0$，第 $n$ 项判别法无法判定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Applying the ratio test to $\\sum_{n=1}^{\\infty} \\frac{n!}{10^n}$ shows the series",
        "zh": "对 $\\sum_{n=1}^{\\infty} \\frac{n!}{10^n}$ 用比值判别法，可知级数"
      },
      "choices": [
        "converges, $L = 0$ / 收敛，$L = 0$",
        "is inconclusive, $L = 1$ / 无法判断，$L = 1$",
        "diverges, $L = \\infty$ / 发散，$L = \\infty$",
        "converges, $L = \\frac{1}{10}$ / 收敛，$L = \\frac{1}{10}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!}{10^{n+1}} \\cdot \\frac{10^n}{n!} = \\frac{n+1}{10} \\to \\infty > 1$, so the series diverges. Factorials outgrow every fixed exponential, so the ratio blows up rather than settling at $\\frac{1}{10}$.",
        "zh": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!}{10^{n+1}} \\cdot \\frac{10^n}{n!} = \\frac{n+1}{10} \\to \\infty > 1$，故发散。阶乘增长快于任何固定指数式，所以比值趋于无穷，而不是稳定在 $\\frac{1}{10}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{1/3}}$ is",
        "zh": "级数 $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{1/3}}$ 是"
      },
      "choices": [
        "divergent / 发散",
        "absolutely convergent / 绝对收敛",
        "convergent to $0$ / 收敛于 $0$",
        "conditionally convergent / 条件收敛"
      ],
      "answer": 3,
      "explanation": {
        "en": "The absolute-value series $\\sum \\frac{1}{n^{1/3}}$ is a p-series with $p = \\frac{1}{3} \\le 1$, so it diverges — not absolutely convergent. But $\\frac{1}{n^{1/3}}$ is positive, decreasing, and tends to $0$, so the alternating series test gives convergence: it converges conditionally.",
        "zh": "绝对值级数 $\\sum \\frac{1}{n^{1/3}}$ 是 $p = \\frac{1}{3} \\le 1$ 的 p-级数，发散——故不绝对收敛。但 $\\frac{1}{n^{1/3}}$ 为正、递减且趋于 $0$，由交错级数判别法收敛：故条件收敛。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which test gives the cleanest proof that $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 5}$ converges?",
        "zh": "哪种判别法最简洁地证明 $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 5}$ 收敛？"
      },
      "choices": [
        "Direct comparison with $\\sum \\frac{1}{n^2}$ / 与 $\\sum \\frac{1}{n^2}$ 直接比较",
        "nth-term test / 第 $n$ 项判别法",
        "Ratio test / 比值判别法",
        "Comparison with $\\sum \\frac{1}{n}$ / 与 $\\sum \\frac{1}{n}$ 比较"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $0 < \\frac{1}{n^2+5} < \\frac{1}{n^2}$ and $\\sum \\frac{1}{n^2}$ converges ($p = 2$), direct comparison gives convergence immediately. The ratio test yields $L = 1$ (inconclusive), and comparing with the divergent $\\sum \\frac{1}{n}$ from the smaller side proves nothing.",
        "zh": "由于 $0 < \\frac{1}{n^2+5} < \\frac{1}{n^2}$ 且 $\\sum \\frac{1}{n^2}$ 收敛（$p = 2$），直接比较立即给出收敛。比值判别法给出 $L = 1$（失效），从较小一侧与发散的 $\\sum \\frac{1}{n}$ 比较也说明不了问题。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By the integral test, what can you say about $\\sum_{n=1}^{\\infty} n e^{-n^2}$?",
        "zh": "由积分判别法，关于 $\\sum_{n=1}^{\\infty} n e^{-n^2}$ 可以说什么？"
      },
      "choices": [
        "It diverges / 发散",
        "It converges / 收敛",
        "The test is inconclusive / 判别法失效",
        "It converges, and the sum equals $\\frac{1}{2e}$ / 收敛，且和等于 $\\frac{1}{2e}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\int_1^{\\infty} x e^{-x^2}\\,dx = \\left[-\\tfrac{1}{2}e^{-x^2}\\right]_1^{\\infty} = \\frac{1}{2e}$, a finite value, so the series converges. Note the integral test proves convergence only — it does not claim the sum equals the integral.",
        "zh": "$\\int_1^{\\infty} x e^{-x^2}\\,dx = \\left[-\\tfrac{1}{2}e^{-x^2}\\right]_1^{\\infty} = \\frac{1}{2e}$ 为有限值，故级数收敛。注意积分判别法只判断收敛性——并不是说级数的和等于该积分值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^3}$, the alternating series error bound gives $|S - S_3| \\le$ ?",
        "zh": "对 $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^3}$，交错级数误差界给出 $|S - S_3| \\le$ ？"
      },
      "choices": [
        "$\\frac{1}{27}$",
        "$\\frac{1}{81}$",
        "$\\frac{1}{64}$",
        "$\\frac{1}{216}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The error after $S_k$ is at most the first omitted term $b_{k+1}$. Here $b_4 = \\frac{1}{4^3} = \\frac{1}{64}$. Using $b_3 = \\frac{1}{27}$, the last included term, instead of the first omitted one is the usual slip.",
        "zh": "截断到 $S_k$ 后的误差不超过第一个被舍去的项 $b_{k+1}$。这里 $b_4 = \\frac{1}{4^3} = \\frac{1}{64}$。常见错误是用最后保留的项 $b_3 = \\frac{1}{27}$，而不是第一个被舍去的项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Applying the ratio test to $\\sum_{n=1}^{\\infty} \\frac{5^n}{n!}$ shows the series",
        "zh": "对 $\\sum_{n=1}^{\\infty} \\frac{5^n}{n!}$ 用比值判别法，可知级数"
      },
      "choices": [
        "diverges, $L = 5$ / 发散，$L = 5$",
        "is inconclusive / 无法判断",
        "diverges because $5^n \\to \\infty$ / 发散，因为 $5^n \\to \\infty$",
        "converges absolutely, $L = 0$ / 绝对收敛，$L = 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{5^{n+1}}{(n+1)!} \\cdot \\frac{n!}{5^n} = \\frac{5}{n+1} \\to 0 < 1$, so the series converges absolutely. The factorial in the denominator eventually overwhelms the exponential, so the limit is $0$, not $5$.",
        "zh": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{5^{n+1}}{(n+1)!} \\cdot \\frac{n!}{5^n} = \\frac{5}{n+1} \\to 0 < 1$，故绝对收敛。分母的阶乘最终压过指数，所以极限为 $0$，不是 $5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following series is conditionally convergent?",
        "zh": "下列哪个级数是条件收敛的？"
      },
      "choices": [
        "$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$",
        "$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}$",
        "$\\sum_{n=1}^{\\infty} (-1)^n$",
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges by the alternating series test, but $\\sum \\frac{1}{\\sqrt{n}}$ (its absolute-value series) is a divergent p-series, so convergence is conditional. Choice with $n^2$ is absolutely convergent; $\\sum(-1)^n$ diverges; $\\sum\\frac{1}{n}$ diverges.",
        "zh": "$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ 由交错级数判别法收敛，但其绝对值级数 $\\sum \\frac{1}{\\sqrt{n}}$ 是发散的 p-级数，故条件收敛。含 $n^2$ 的绝对收敛；$\\sum(-1)^n$ 发散；$\\sum\\frac{1}{n}$ 发散。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which comparison shows that $\\sum_{n=1}^{\\infty} \\frac{2 + \\sin n}{n^2}$ converges?",
        "zh": "哪种比较说明 $\\sum_{n=1}^{\\infty} \\frac{2 + \\sin n}{n^2}$ 收敛？"
      },
      "choices": [
        "$\\frac{2+\\sin n}{n^2} \\ge \\frac{1}{n^2}$, and $\\sum \\frac{1}{n^2}$ converges",
        "$\\frac{2+\\sin n}{n^2} \\le \\frac{3}{n^2}$, and $\\sum \\frac{3}{n^2}$ converges",
        "compare with $\\sum \\frac{1}{n}$ / 与 $\\sum \\frac{1}{n}$ 比较",
        "nth-term test / 第 $n$ 项判别法"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because $-1 \\le \\sin n \\le 1$, we have $2 + \\sin n \\le 3$, so $\\frac{2+\\sin n}{n^2} \\le \\frac{3}{n^2}$, and $\\sum \\frac{3}{n^2}$ converges ($p = 2$). Bounding a positive series above by a convergent series is the correct direction for direct comparison.",
        "zh": "因为 $-1 \\le \\sin n \\le 1$，有 $2 + \\sin n \\le 3$，故 $\\frac{2+\\sin n}{n^2} \\le \\frac{3}{n^2}$，而 $\\sum \\frac{3}{n^2}$ 收敛（$p = 2$）。把正项级数从上方用收敛级数控制，正是直接比较的正确方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which conclusion about $\\sum_{n=2}^{\\infty} \\frac{1}{n (\\ln n)^2}$ is correct?",
        "zh": "关于 $\\sum_{n=2}^{\\infty} \\frac{1}{n (\\ln n)^2}$，下列哪个结论正确？"
      },
      "choices": [
        "Diverges by comparison with $\\sum \\frac{1}{n}$ / 与 $\\sum \\frac{1}{n}$ 比较发散",
        "Diverges like the harmonic series / 与调和级数一样发散",
        "Converges by the integral test / 由积分判别法收敛",
        "Diverges by the nth-term test / 由第 $n$ 项判别法发散"
      ],
      "answer": 2,
      "explanation": {
        "en": "With $u = \\ln x$, $\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^2} = \\left[-\\frac{1}{\\ln x}\\right]_2^{\\infty} = \\frac{1}{\\ln 2}$, a finite value, so the series converges by the integral test. The extra $(\\ln n)^2$ in the denominator is exactly enough to secure convergence, unlike $\\frac{1}{n \\ln n}$.",
        "zh": "令 $u = \\ln x$，$\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^2} = \\left[-\\frac{1}{\\ln x}\\right]_2^{\\infty} = \\frac{1}{\\ln 2}$ 为有限值，故由积分判别法收敛。分母多出的 $(\\ln n)^2$ 恰好足以保证收敛，与 $\\frac{1}{n \\ln n}$ 不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For which of the following series does the ratio test give $L = 1$ (inconclusive)?",
        "zh": "对下列哪个级数，比值判别法给出 $L = 1$（无法判断）？"
      },
      "choices": [
        "$\\sum_{n=1}^{\\infty} \\frac{3^n}{n!}$",
        "$\\sum_{n=1}^{\\infty} \\frac{n!}{2^n}$",
        "$\\sum_{n=1}^{\\infty} \\frac{2^n}{n^2}$",
        "$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "For $\\frac{1}{n^2}$, $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n^2}{(n+1)^2} \\to 1$, so the ratio test is inconclusive (you finish with the p-series result). The other three contain factorials or exponentials, whose ratios tend to $0$ or $\\infty$.",
        "zh": "对 $\\frac{1}{n^2}$，$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n^2}{(n+1)^2} \\to 1$，故比值判别法失效（需改用 p-级数结论）。其余三个含阶乘或指数式，比值趋于 $0$ 或 $\\infty$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}$, the alternating series error bound gives $|S - S_5| \\le$ ? Give your answer as a fraction a/b.",
        "zh": "对 $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}$，交错级数误差界给出 $|S - S_5| \\le$ ？答案写成分数 a/b。"
      },
      "answer": "1/36",
      "accept": [
        "0.0278",
        "0.028"
      ],
      "explanation": {
        "en": "The error after $S_k$ is at most $b_{k+1}$. Here $b_6 = \\frac{1}{6^2} = \\frac{1}{36}$ — the first omitted term, not the last included term $b_5 = \\frac{1}{25}$.",
        "zh": "截断到 $S_k$ 后的误差不超过 $b_{k+1}$。这里 $b_6 = \\frac{1}{6^2} = \\frac{1}{36}$——是第一个被舍去的项，而不是最后保留的项 $b_5 = \\frac{1}{25}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$, compute the ratio test limit $L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$. Give your answer as a fraction a/b.",
        "zh": "对 $\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$，计算比值判别法极限 $L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$。答案写成分数 a/b。"
      },
      "answer": "1/3",
      "accept": [
        "0.3333",
        "0.333"
      ],
      "explanation": {
        "en": "$\\frac{a_{n+1}}{a_n} = \\frac{n+1}{3^{n+1}} \\cdot \\frac{3^n}{n} = \\frac{1}{3} \\cdot \\frac{n+1}{n} \\to \\frac{1}{3}$. Since $L = \\frac{1}{3} < 1$, the series converges absolutely; the polynomial factor $\\frac{n+1}{n} \\to 1$ does not affect the limit.",
        "zh": "$\\frac{a_{n+1}}{a_n} = \\frac{n+1}{3^{n+1}} \\cdot \\frac{3^n}{n} = \\frac{1}{3} \\cdot \\frac{n+1}{n} \\to \\frac{1}{3}$。因 $L = \\frac{1}{3} < 1$，级数绝对收敛；多项式因子 $\\frac{n+1}{n} \\to 1$ 不影响极限。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the smallest integer $p$ for which the p-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ converges? Give an integer.",
        "zh": "使 p-级数 $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ 收敛的最小整数 $p$ 是多少？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "A p-series converges exactly when $p > 1$. The smallest integer strictly greater than $1$ is $2$; note $p = 1$ gives the divergent harmonic series.",
        "zh": "p-级数当且仅当 $p > 1$ 时收敛。严格大于 $1$ 的最小整数是 $2$；注意 $p = 1$ 是发散的调和级数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the alternating harmonic series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$, what is the smallest number of terms $k$ that guarantees $|S - S_k| \\le \\frac{1}{1000}$ by the alternating series error bound? Give an integer.",
        "zh": "对交错调和级数 $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$，根据交错级数误差界，要保证 $|S - S_k| \\le \\frac{1}{1000}$，最少需取多少项 $k$？请填一个整数。"
      },
      "answer": "999",
      "accept": [
        "999.0"
      ],
      "explanation": {
        "en": "The bound is $|S - S_k| \\le b_{k+1} = \\frac{1}{k+1}$. Require $\\frac{1}{k+1} \\le \\frac{1}{1000}$, i.e. $k + 1 \\ge 1000$, so $k = 999$ terms suffice. Answering $1000$ forgets the bound uses the $(k+1)$st term.",
        "zh": "误差界为 $|S - S_k| \\le b_{k+1} = \\frac{1}{k+1}$。要求 $\\frac{1}{k+1} \\le \\frac{1}{1000}$，即 $k + 1 \\ge 1000$，故取 $k = 999$ 项即可。答 $1000$ 是忘了误差界用的是第 $k+1$ 项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\sum_{n=1}^{\\infty} \\frac{n^3}{4^n}$, compute the ratio test limit $L$. Give your answer as a fraction a/b or a decimal.",
        "zh": "对 $\\sum_{n=1}^{\\infty} \\frac{n^3}{4^n}$，计算比值判别法极限 $L$。答案写成分数 a/b 或小数。"
      },
      "answer": "1/4",
      "accept": [
        "0.25"
      ],
      "explanation": {
        "en": "$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^3}{4^{n+1}} \\cdot \\frac{4^n}{n^3} = \\frac{1}{4}\\left(\\frac{n+1}{n}\\right)^3 \\to \\frac{1}{4}$. Only the exponential base $4$ determines $L$; the polynomial factor tends to $1$.",
        "zh": "$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^3}{4^{n+1}} \\cdot \\frac{4^n}{n^3} = \\frac{1}{4}\\left(\\frac{n+1}{n}\\right)^3 \\to \\frac{1}{4}$。只有指数的底 $4$ 决定 $L$；多项式因子趋于 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{2n-1}$ (which sums to $\\frac{\\pi}{4}$), what is the smallest number of terms $k$ that guarantees $|S - S_k| \\le \\frac{1}{9}$ by the alternating series error bound? Give an integer.",
        "zh": "对级数 $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{2n-1}$（其和为 $\\frac{\\pi}{4}$），根据交错级数误差界，要保证 $|S - S_k| \\le \\frac{1}{9}$，最少需取多少项 $k$？请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Here $b_n = \\frac{1}{2n-1}$, so the bound is $b_{k+1} = \\frac{1}{2(k+1)-1} = \\frac{1}{2k+1}$. Require $\\frac{1}{2k+1} \\le \\frac{1}{9}$, i.e. $2k+1 \\ge 9$, so $k \\ge 4$: four terms suffice.",
        "zh": "这里 $b_n = \\frac{1}{2n-1}$，故误差界为 $b_{k+1} = \\frac{1}{2(k+1)-1} = \\frac{1}{2k+1}$。要求 $\\frac{1}{2k+1} \\le \\frac{1}{9}$，即 $2k+1 \\ge 9$，故 $k \\ge 4$：取四项即可。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$, compute the ratio test limit $L$. Give an integer.",
        "zh": "对 $\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$，计算比值判别法极限 $L$。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "$\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n} = \\frac{2}{n+1} \\to 0$. Since $L = 0 < 1$, the series converges absolutely — the factorial dominates the exponential.",
        "zh": "$\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n} = \\frac{2}{n+1} \\to 0$。因 $L = 0 < 1$，级数绝对收敛——阶乘压过指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "To test $\\sum_{n=1}^{\\infty} \\frac{3n^2 + 1}{n^4 + 2n}$ by limit comparison with $b_n = \\frac{1}{n^2}$, compute $\\lim_{n\\to\\infty} \\frac{a_n}{b_n}$. Give an integer.",
        "zh": "用 $b_n = \\frac{1}{n^2}$ 对 $\\sum_{n=1}^{\\infty} \\frac{3n^2 + 1}{n^4 + 2n}$ 作极限比较，计算 $\\lim_{n\\to\\infty} \\frac{a_n}{b_n}$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$\\frac{a_n}{b_n} = \\frac{3n^2+1}{n^4+2n} \\cdot n^2 = \\frac{3n^4 + n^2}{n^4 + 2n} \\to 3$. The limit is finite and positive, so the given series converges together with the convergent p-series $\\sum \\frac{1}{n^2}$.",
        "zh": "$\\frac{a_n}{b_n} = \\frac{3n^2+1}{n^4+2n} \\cdot n^2 = \\frac{3n^4 + n^2}{n^4 + 2n} \\to 3$。极限为有限正数，故原级数与收敛的 p-级数 $\\sum \\frac{1}{n^2}$ 同收敛。"
      }
    }
  ],
  "unit-10-infinite-series/power-series": [
    {
      "type": "mc",
      "question": {
        "en": "Which power series represents $f(x) = \\frac{1}{1 + 3x}$, and where is it valid?",
        "zh": "哪个幂级数表示 $f(x) = \\frac{1}{1 + 3x}$？在何处成立？"
      },
      "choices": [
        "$\\sum_{n=0}^{\\infty} (-1)^n 3^n x^n$, valid for $|x| < \\frac{1}{3}$",
        "$\\sum_{n=0}^{\\infty} 3^n x^n$, valid for $|x| < \\frac{1}{3}$",
        "$\\sum_{n=0}^{\\infty} (-1)^n 3^n x^n$, valid for $|x| < 3$",
        "$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^n}{3^n}$, valid for $|x| < 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Write $\\frac{1}{1+3x} = \\frac{1}{1 - (-3x)} = \\sum (-3x)^n = \\sum (-1)^n 3^n x^n$, valid when $|-3x| < 1$, i.e. $|x| < \\frac{1}{3}$. The convergence condition applies to the ratio $-3x$, not to $x$ alone, so the interval shrinks to $\\frac{1}{3}$.",
        "zh": "写成 $\\frac{1}{1+3x} = \\frac{1}{1 - (-3x)} = \\sum (-3x)^n = \\sum (-1)^n 3^n x^n$，成立条件是 $|-3x| < 1$，即 $|x| < \\frac{1}{3}$。收敛条件针对公比 $-3x$ 而非 $x$，故区间缩到 $\\frac{1}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x-1)^n}{n \\cdot 4^n}$?",
        "zh": "$\\sum_{n=1}^{\\infty} \\frac{(x-1)^n}{n \\cdot 4^n}$ 的收敛区间是什么？"
      },
      "choices": [
        "$(-3, 5)$",
        "$[-3, 5)$",
        "$(-3, 5]$",
        "$[-3, 5]$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The ratio test gives $\\frac{|x-1|}{4} < 1$, so $|x-1| < 4$ and $-3 < x < 5$. At $x = 5$ the series is $\\sum \\frac{1}{n}$ (diverges); at $x = -3$ it is $\\sum \\frac{(-1)^n}{n}$ (converges). Interval: $[-3, 5)$.",
        "zh": "比值判别法给出 $\\frac{|x-1|}{4} < 1$，即 $|x-1| < 4$，$-3 < x < 5$。在 $x = 5$ 处为 $\\sum \\frac{1}{n}$（发散）；在 $x = -3$ 处为 $\\sum \\frac{(-1)^n}{n}$（收敛）。区间为 $[-3, 5)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the radius of convergence of $\\sum_{n=1}^{\\infty} n^2 x^n$?",
        "zh": "$\\sum_{n=1}^{\\infty} n^2 x^n$ 的收敛半径是多少？"
      },
      "choices": [
        "$R = 0$",
        "$R = \\infty$",
        "$R = 1$",
        "$R = 2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The ratio test gives $\\lim \\frac{(n+1)^2}{n^2}|x| = |x| < 1$, so $R = 1$. The polynomial coefficient $n^2$ tends to leave the ratio at $|x|$; it affects the endpoints (where the series diverges by the nth-term test), not the radius.",
        "zh": "比值判别法给出 $\\lim \\frac{(n+1)^2}{n^2}|x| = |x| < 1$，故 $R = 1$。多项式系数 $n^2$ 使比值仍为 $|x|$；它影响端点（那里由第 $n$ 项判别法发散），不影响半径。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the radius of convergence of $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$?",
        "zh": "$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ 的收敛半径是多少？"
      },
      "choices": [
        "$R = 0$",
        "$R = 1$",
        "$R = e$",
        "$R = \\infty$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The ratio test gives $\\lim \\frac{|x|}{n+1} = 0 < 1$ for every $x$, so the series converges for all reals: $R = \\infty$. This is the Maclaurin series for $e^x$, valid everywhere.",
        "zh": "比值判别法给出 $\\lim \\frac{|x|}{n+1} = 0 < 1$ 对每个 $x$ 成立，故对所有实数收敛：$R = \\infty$。这是 $e^x$ 的麦克劳林级数，处处成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Inside $|x| < 1$, which function equals $\\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{n+1}$?",
        "zh": "在 $|x| < 1$ 内，$\\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{n+1}$ 等于哪个函数？"
      },
      "choices": [
        "$-\\ln(1-x)$",
        "$\\ln(1-x)$",
        "$\\frac{1}{(1-x)^2}$",
        "$\\ln(1+x)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "This is the term-by-term integral of $\\sum x^n = \\frac{1}{1-x}$: $\\int_0^x \\frac{dt}{1-t} = -\\ln(1-x)$, with constant $0$ since the sum is $0$ at $x = 0$. Dropping the minus sign gives $\\ln(1-x)$, which is negative for $0 < x < 1$ and cannot equal a sum of positive terms.",
        "zh": "这是 $\\sum x^n = \\frac{1}{1-x}$ 的逐项积分：$\\int_0^x \\frac{dt}{1-t} = -\\ln(1-x)$，常数为 $0$（因 $x = 0$ 时和为 $0$）。丢掉负号得 $\\ln(1-x)$，它在 $0 < x < 1$ 上为负，不可能等于正项之和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the center of the power series $\\sum_{n=1}^{\\infty} \\frac{(3x - 12)^n}{n^2}$?",
        "zh": "幂级数 $\\sum_{n=1}^{\\infty} \\frac{(3x - 12)^n}{n^2}$ 的中心是多少？"
      },
      "choices": [
        "$12$",
        "$4$",
        "$-4$",
        "$3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Factor: $3x - 12 = 3(x - 4)$, so the series has the form $\\sum \\frac{3^n (x-4)^n}{n^2}$, centered at $a = 4$. Reading the center directly off the constant $-12$ ignores the factor of $3$ multiplying $x$.",
        "zh": "提取公因子：$3x - 12 = 3(x - 4)$，故级数形如 $\\sum \\frac{3^n (x-4)^n}{n^2}$，中心 $a = 4$。直接把常数 $-12$ 当中心，就忽略了 $x$ 前的系数 $3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $\\sum_{n=0}^{\\infty} c_n x^n$ has radius of convergence $R = 5$, what is the radius of convergence of its term-by-term derivative $\\sum_{n=1}^{\\infty} n c_n x^{n-1}$?",
        "zh": "若 $\\sum_{n=0}^{\\infty} c_n x^n$ 的收敛半径 $R = 5$，则其逐项导数 $\\sum_{n=1}^{\\infty} n c_n x^{n-1}$ 的收敛半径是多少？"
      },
      "choices": [
        "$4$",
        "$\\infty$",
        "$5$",
        "$25$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Term-by-term differentiation (and integration) never changes the radius of convergence; only the behavior at the endpoints may change. So the derivative series also has $R = 5$.",
        "zh": "逐项求导（和积分）绝不改变收敛半径；只有端点处的收敛性可能变化。故导数级数的收敛半径仍为 $R = 5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which power series represents $\\frac{x}{1 - x^2}$, and on what interval?",
        "zh": "哪个幂级数表示 $\\frac{x}{1 - x^2}$？在什么区间上成立？"
      },
      "choices": [
        "$\\sum_{n=0}^{\\infty} x^{2n}$, for $|x| < 1$",
        "$\\sum_{n=0}^{\\infty} x^{n+1}$, for $|x| < 1$",
        "$\\sum_{n=0}^{\\infty} x^{2n+1}$, for $|x| < 2$",
        "$\\sum_{n=0}^{\\infty} x^{2n+1}$, for $|x| < 1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Start from $\\frac{1}{1-x^2} = \\sum (x^2)^n = \\sum x^{2n}$ (valid $|x^2| < 1$, i.e. $|x| < 1$), then multiply by $x$: $\\frac{x}{1-x^2} = \\sum x^{2n+1}$. Multiplying by $x$ does not change the interval $|x| < 1$.",
        "zh": "从 $\\frac{1}{1-x^2} = \\sum (x^2)^n = \\sum x^{2n}$（成立于 $|x^2| < 1$，即 $|x| < 1$）出发，再乘以 $x$：$\\frac{x}{1-x^2} = \\sum x^{2n+1}$。乘以 $x$ 不改变区间 $|x| < 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x+3)^n}{2^n \\sqrt{n}}$?",
        "zh": "$\\sum_{n=1}^{\\infty} \\frac{(x+3)^n}{2^n \\sqrt{n}}$ 的收敛半径是多少？"
      },
      "choices": [
        "$R = 2$",
        "$R = \\frac{1}{2}$",
        "$R = 3$",
        "$R = \\infty$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The ratio test gives $\\lim \\frac{|x+3|}{2} \\cdot \\frac{\\sqrt{n}}{\\sqrt{n+1}} = \\frac{|x+3|}{2} < 1$, so $|x+3| < 2$ and $R = 2$. The $\\sqrt{n}$ factor affects only the endpoints.",
        "zh": "比值判别法给出 $\\lim \\frac{|x+3|}{2} \\cdot \\frac{\\sqrt{n}}{\\sqrt{n+1}} = \\frac{|x+3|}{2} < 1$，即 $|x+3| < 2$，故 $R = 2$。因子 $\\sqrt{n}$ 只影响端点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following power series converges only at its center (radius $R = 0$)?",
        "zh": "下列哪个幂级数只在其中心处收敛（半径 $R = 0$）？"
      },
      "choices": [
        "$\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$",
        "$\\sum_{n=0}^{\\infty} n! \\, x^n$",
        "$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$",
        "$\\sum_{n=0}^{\\infty} x^n$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For $\\sum n! \\, x^n$ the ratio test gives $\\lim (n+1)|x| = \\infty$ for every $x \\ne 0$, so it converges only at $x = 0$: $R = 0$. Having the factorial in the numerator is what forces the radius to $0$.",
        "zh": "对 $\\sum n! \\, x^n$，比值判别法给出 $\\lim (n+1)|x| = \\infty$（对每个 $x \\ne 0$），故只在 $x = 0$ 处收敛：$R = 0$。阶乘在分子上正是把半径逼到 $0$ 的原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which power series represents $\\frac{2}{3 - x}$, and on what interval?",
        "zh": "哪个幂级数表示 $\\frac{2}{3 - x}$？在什么区间上成立？"
      },
      "choices": [
        "$\\sum_{n=0}^{\\infty} \\frac{2 x^n}{3^n}$, for $|x| < 3$",
        "$\\frac{2}{3}\\sum_{n=0}^{\\infty} \\left(\\frac{x}{3}\\right)^n$, for $|x| < 1$",
        "$\\sum_{n=0}^{\\infty} \\frac{2}{3^{n+1}} x^n$, for $|x| < 3$",
        "$\\sum_{n=0}^{\\infty} 2^n x^n$, for $|x| < \\frac{1}{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Factor out the $3$: $\\frac{2}{3-x} = \\frac{2}{3} \\cdot \\frac{1}{1 - x/3} = \\frac{2}{3}\\sum \\left(\\frac{x}{3}\\right)^n = \\sum \\frac{2}{3^{n+1}} x^n$, valid when $\\left|\\frac{x}{3}\\right| < 1$, i.e. $|x| < 3$. The condition is on the ratio $\\frac{x}{3}$, giving $|x| < 3$, not $|x| < 1$.",
        "zh": "提出 $3$：$\\frac{2}{3-x} = \\frac{2}{3} \\cdot \\frac{1}{1 - x/3} = \\frac{2}{3}\\sum \\left(\\frac{x}{3}\\right)^n = \\sum \\frac{2}{3^{n+1}} x^n$，成立于 $\\left|\\frac{x}{3}\\right| < 1$ 即 $|x| < 3$。条件针对公比 $\\frac{x}{3}$，得 $|x| < 3$，不是 $|x| < 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$?",
        "zh": "$\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$ 的收敛区间是什么？"
      },
      "choices": [
        "$(-1, 1)$",
        "$[-1, 1)$",
        "$(-1, 1]$",
        "$[-1, 1]$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The ratio test gives $|x| < 1$, so $R = 1$. At $x = 1$ the series is $\\sum \\frac{1}{n^2}$ (convergent p-series), and at $x = -1$ it is $\\sum \\frac{(-1)^n}{n^2}$ (absolutely convergent). Both endpoints converge, so the interval is $[-1, 1]$.",
        "zh": "比值判别法给出 $|x| < 1$，故 $R = 1$。在 $x = 1$ 处为 $\\sum \\frac{1}{n^2}$（收敛 p-级数），在 $x = -1$ 处为 $\\sum \\frac{(-1)^n}{n^2}$（绝对收敛）。两端点都收敛，故区间为 $[-1, 1]$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 5^n}$. Give an integer.",
        "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 5^n}$ 的收敛半径。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "The ratio test gives $\\lim \\frac{|x|}{5} \\cdot \\frac{n}{n+1} = \\frac{|x|}{5} < 1$, so $|x| < 5$ and $R = 5$. The $\\frac{1}{n}$ factor affects the endpoints, not the radius.",
        "zh": "比值判别法给出 $\\lim \\frac{|x|}{5} \\cdot \\frac{n}{n+1} = \\frac{|x|}{5} < 1$，即 $|x| < 5$，故 $R = 5$。因子 $\\frac{1}{n}$ 只影响端点，不影响半径。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{3^n x^n}{n}$. Give your answer as a fraction a/b or a decimal.",
        "zh": "求 $\\sum_{n=1}^{\\infty} \\frac{3^n x^n}{n}$ 的收敛半径。答案写成分数 a/b 或小数。"
      },
      "answer": "1/3",
      "accept": [
        "0.3333",
        "0.333"
      ],
      "explanation": {
        "en": "The ratio test gives $\\lim 3|x| \\cdot \\frac{n}{n+1} = 3|x| < 1$, so $|x| < \\frac{1}{3}$ and $R = \\frac{1}{3}$. The base $3$ in the numerator makes the radius the reciprocal $\\frac{1}{3}$.",
        "zh": "比值判别法给出 $\\lim 3|x| \\cdot \\frac{n}{n+1} = 3|x| < 1$，即 $|x| < \\frac{1}{3}$，故 $R = \\frac{1}{3}$。分子中的底 $3$ 使半径为其倒数 $\\frac{1}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the center of the power series $\\sum_{n=1}^{\\infty} \\frac{(x - 7)^n}{n \\cdot 2^n}$? Give an integer.",
        "zh": "幂级数 $\\sum_{n=1}^{\\infty} \\frac{(x - 7)^n}{n \\cdot 2^n}$ 的中心是多少？请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "The series has the form $\\sum c_n (x - a)^n$ with $a = 7$, so the center is $7$. The center is the value of $x$ that makes the base $(x - 7)$ equal to $0$.",
        "zh": "级数形如 $\\sum c_n (x - a)^n$，$a = 7$，故中心为 $7$。中心是使底 $(x - 7)$ 为 $0$ 的 $x$ 值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sum_{n=0}^{\\infty} \\left(\\frac{2}{7}\\right)^n$. Give your answer as a fraction a/b or a decimal.",
        "zh": "计算 $\\sum_{n=0}^{\\infty} \\left(\\frac{2}{7}\\right)^n$。答案写成分数 a/b 或小数。"
      },
      "answer": "7/5",
      "accept": [
        "1.4",
        "1.40"
      ],
      "explanation": {
        "en": "This is the geometric power series $\\sum x^n = \\frac{1}{1-x}$ at $x = \\frac{2}{7}$, inside $|x| < 1$: the sum is $\\frac{1}{1 - 2/7} = \\frac{1}{5/7} = \\frac{7}{5}$.",
        "zh": "这是几何幂级数 $\\sum x^n = \\frac{1}{1-x}$ 在 $x = \\frac{2}{7}$ 处的值，位于 $|x| < 1$ 内：和为 $\\frac{1}{1 - 2/7} = \\frac{1}{5/7} = \\frac{7}{5}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the radius of convergence of $\\sum_{n=1}^{\\infty} n! \\, x^n$. Give an integer.",
        "zh": "求 $\\sum_{n=1}^{\\infty} n! \\, x^n$ 的收敛半径。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "The ratio test gives $\\lim (n+1)|x| = \\infty$ for every $x \\ne 0$, so the series converges only at its center: $R = 0$. A factorial in the numerator forces the radius to $0$.",
        "zh": "比值判别法给出 $\\lim (n+1)|x| = \\infty$（对每个 $x \\ne 0$），故只在中心处收敛：$R = 0$。分子上的阶乘把半径逼到 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $\\frac{1}{1+x^2} = \\sum_{n=0}^{\\infty} (-1)^n x^{2n}$, evaluate this function at $x = \\frac{1}{2}$. Give your answer as a fraction a/b or a decimal.",
        "zh": "利用 $\\frac{1}{1+x^2} = \\sum_{n=0}^{\\infty} (-1)^n x^{2n}$，求该函数在 $x = \\frac{1}{2}$ 处的值。答案写成分数 a/b 或小数。"
      },
      "answer": "4/5",
      "accept": [
        "0.8",
        "0.80"
      ],
      "explanation": {
        "en": "Since $x = \\frac{1}{2}$ is inside $|x| < 1$, the series sums to the closed form: $\\frac{1}{1 + (1/2)^2} = \\frac{1}{1 + 1/4} = \\frac{1}{5/4} = \\frac{4}{5}$.",
        "zh": "因 $x = \\frac{1}{2}$ 在 $|x| < 1$ 内，级数收敛于闭形式：$\\frac{1}{1 + (1/2)^2} = \\frac{1}{1 + 1/4} = \\frac{1}{5/4} = \\frac{4}{5}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the radius of convergence of $\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{4^n}$. Give an integer.",
        "zh": "求 $\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{4^n}$ 的收敛半径。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "This is geometric in $\\frac{x^2}{4}$: it converges when $\\left|\\frac{x^2}{4}\\right| < 1$, i.e. $x^2 < 4$, so $|x| < 2$ and $R = 2$. The even powers mean you solve for $x$ from $x^2 < 4$.",
        "zh": "这是以 $\\frac{x^2}{4}$ 为公比的几何级数：当 $\\left|\\frac{x^2}{4}\\right| < 1$ 即 $x^2 < 4$ 时收敛，故 $|x| < 2$，$R = 2$。偶次幂意味着由 $x^2 < 4$ 解出 $x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n}$ has a left endpoint. What is that endpoint? Give an integer.",
        "zh": "$\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n}$ 的收敛区间有一个左端点。这个端点是多少？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "The ratio test gives $|x - 3| < 1$, so $2 < x < 4$; the left endpoint is $x = 2$ (there the series is the convergent $\\sum \\frac{(-1)^n}{n}$). The center $3$ minus the radius $1$ gives $2$.",
        "zh": "比值判别法给出 $|x - 3| < 1$，即 $2 < x < 4$；左端点为 $x = 2$（在此处级数是收敛的 $\\sum \\frac{(-1)^n}{n}$）。中心 $3$ 减去半径 $1$ 得 $2$。"
      }
    }
  ],
  "unit-10-infinite-series/taylor-and-maclaurin-series": [
    {
      "type": "mc",
      "question": {
        "en": "What is the coefficient of $x^2$ in the Maclaurin series for $\\cos x$?",
        "zh": "$\\cos x$ 的麦克劳林级数中 $x^2$ 的系数是多少？"
      },
      "choices": [
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$",
        "$-\\frac{1}{24}$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The series is $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$, so the $x^2$ coefficient is $-\\frac{1}{2!} = -\\frac{1}{2}$. Dropping the negative sign gives $\\frac{1}{2}$; the cosine series alternates starting with $+1$.",
        "zh": "级数为 $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$，故 $x^2$ 的系数为 $-\\frac{1}{2!} = -\\frac{1}{2}$。丢掉负号会得 $\\frac{1}{2}$；余弦级数从 $+1$ 开始交错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the first three nonzero terms of the Maclaurin series for $\\cos(2x)$?",
        "zh": "$\\cos(2x)$ 的麦克劳林级数的前三个非零项是什么？"
      },
      "choices": [
        "$1 - 4x^2 + \\frac{2x^4}{3}$",
        "$1 - 2x^2 + \\frac{2x^4}{3}$",
        "$1 - 2x^2 + \\frac{x^4}{6}$",
        "$1 - x^2 + \\frac{x^4}{24}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substitute $2x$ into $\\cos u = 1 - \\frac{u^2}{2!} + \\frac{u^4}{4!} - \\cdots$: $\\frac{(2x)^2}{2} = 2x^2$ and $\\frac{(2x)^4}{24} = \\frac{16x^4}{24} = \\frac{2x^4}{3}$, giving $1 - 2x^2 + \\frac{2x^4}{3}$. The error of writing $-4x^2$ squares the $2$ but forgets to divide by $2!$.",
        "zh": "将 $2x$ 代入 $\\cos u = 1 - \\frac{u^2}{2!} + \\frac{u^4}{4!} - \\cdots$：$\\frac{(2x)^2}{2} = 2x^2$，$\\frac{(2x)^4}{24} = \\frac{16x^4}{24} = \\frac{2x^4}{3}$，得 $1 - 2x^2 + \\frac{2x^4}{3}$。写 $-4x^2$ 是把 $2$ 平方却忘了除以 $2!$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the first three nonzero terms of the Maclaurin series for $x e^x$?",
        "zh": "$x e^x$ 的麦克劳林级数的前三个非零项是什么？"
      },
      "choices": [
        "$1 + x + \\frac{x^2}{2}$",
        "$x + \\frac{x^2}{2} + \\frac{x^3}{6}$",
        "$x + x^2 + \\frac{x^3}{2}$",
        "$x + x^2 + \\frac{x^3}{6}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply $e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$ by $x$: every power shifts up one, giving $x + x^2 + \\frac{x^3}{2} + \\cdots$. Just distributing the $x$ leaves the coefficients unchanged but raises each exponent.",
        "zh": "把 $e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$ 乘以 $x$：每个幂次升高一位，得 $x + x^2 + \\frac{x^3}{2} + \\cdots$。分配 $x$ 时系数不变，但每个指数加一。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which function has Maclaurin series $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$?",
        "zh": "哪个函数的麦克劳林级数是 $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$？"
      },
      "choices": [
        "$\\frac{1}{1-x}$",
        "$\\ln(1+x)$",
        "$\\cos x$",
        "$e^x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The series $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$ with factorial denominators and all-positive coefficients is exactly $e^x$, valid for all $x$. The geometric series $\\frac{1}{1-x}$ has denominators of $1$, not factorials.",
        "zh": "级数 $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$，分母为阶乘且系数全正，正是 $e^x$，对所有 $x$ 成立。几何级数 $\\frac{1}{1-x}$ 的分母是 $1$，不是阶乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using series, evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2}$.",
        "zh": "用级数计算 $\\lim_{x \\to 0} \\frac{1 - \\cos(2x)}{x^2}$。"
      },
      "choices": [
        "$2$",
        "$\\frac{1}{2}$",
        "$4$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $\\cos(2x) = 1 - 2x^2 + \\cdots$, the numerator is $1 - \\cos(2x) = 2x^2 - \\cdots$. Dividing by $x^2$ leaves $2 - \\cdots \\to 2$. Using $\\cos x$ instead of $\\cos(2x)$ would give $\\frac{1}{2}$.",
        "zh": "因 $\\cos(2x) = 1 - 2x^2 + \\cdots$，分子 $1 - \\cos(2x) = 2x^2 - \\cdots$。除以 $x^2$ 得 $2 - \\cdots \\to 2$。若误用 $\\cos x$ 而非 $\\cos(2x)$ 会得 $\\frac{1}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the first three nonzero terms of the Maclaurin series for $\\frac{1}{1+x}$?",
        "zh": "$\\frac{1}{1+x}$ 的麦克劳林级数的前三个非零项是什么？"
      },
      "choices": [
        "$1 + x + x^2$",
        "$1 - x + x^2$",
        "$1 - x + \\frac{x^2}{2}$",
        "$x - \\frac{x^2}{2} + \\frac{x^3}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substitute $-x$ into $\\frac{1}{1-u} = \\sum u^n$: $\\frac{1}{1+x} = \\sum (-x)^n = 1 - x + x^2 - \\cdots$. The signs alternate; forgetting the $-x^2$ substitution gives all-positive terms.",
        "zh": "将 $-x$ 代入 $\\frac{1}{1-u} = \\sum u^n$：$\\frac{1}{1+x} = \\sum (-x)^n = 1 - x + x^2 - \\cdots$。符号交错；若忘了代入负号会得到全正项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A function satisfies $|f^{(4)}(t)| \\le 6$ for all $t$ in $[0, 2]$. Using the third-degree Taylor polynomial about $0$, what is the Lagrange bound on $|R_3(2)|$?",
        "zh": "函数满足对 $[0, 2]$ 上所有 $t$ 有 $|f^{(4)}(t)| \\le 6$。用关于 $0$ 的三次泰勒多项式，$|R_3(2)|$ 的拉格朗日界是多少？"
      },
      "choices": [
        "$8$",
        "$12$",
        "$4$",
        "$16$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The Lagrange bound is $|R_3(2)| \\le \\frac{M |x-a|^{n+1}}{(n+1)!} = \\frac{6 \\cdot 2^4}{4!} = \\frac{6 \\cdot 16}{24} = 4$. Use the $(n+1) = 4$th derivative bound and the factorial $4!$, not $3!$.",
        "zh": "拉格朗日界为 $|R_3(2)| \\le \\frac{M |x-a|^{n+1}}{(n+1)!} = \\frac{6 \\cdot 2^4}{4!} = \\frac{6 \\cdot 16}{24} = 4$。要用第 $(n+1) = 4$ 阶导数的界和阶乘 $4!$，不是 $3!$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Differentiating the Maclaurin series for $\\sin x$ term by term gives the series for which function?",
        "zh": "对 $\\sin x$ 的麦克劳林级数逐项求导，得到哪个函数的级数？"
      },
      "choices": [
        "$-\\sin x$",
        "$-\\cos x$",
        "$\\sin x$",
        "$\\cos x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Differentiating $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ term by term gives $\\sum \\frac{(-1)^n x^{2n}}{(2n)!} = \\cos x$, matching $\\frac{d}{dx}\\sin x = \\cos x$. Term-by-term differentiation is valid inside the interval of convergence (here all of $\\mathbb{R}$).",
        "zh": "对 $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ 逐项求导，得 $\\sum \\frac{(-1)^n x^{2n}}{(2n)!} = \\cos x$，与 $\\frac{d}{dx}\\sin x = \\cos x$ 一致。逐项求导在收敛区间内（这里是全体实数）成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The series $1 + 2x + 3x^2 + 4x^3 + \\cdots$ converges (for $|x| < 1$) to which function?",
        "zh": "级数 $1 + 2x + 3x^2 + 4x^3 + \\cdots$（$|x| < 1$）收敛到哪个函数？"
      },
      "choices": [
        "$\\frac{1}{(1-x)^2}$",
        "$\\frac{1}{1-x}$",
        "$-\\ln(1-x)$",
        "$\\frac{x}{1-x}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "This is the term-by-term derivative of $\\frac{1}{1-x} = \\sum x^n$: differentiating gives $\\sum n x^{n-1} = 1 + 2x + 3x^2 + \\cdots = \\frac{1}{(1-x)^2}$. Recognizing the coefficients $1,2,3,\\dots$ as coming from a derivative is the key.",
        "zh": "这是 $\\frac{1}{1-x} = \\sum x^n$ 的逐项导数：求导得 $\\sum n x^{n-1} = 1 + 2x + 3x^2 + \\cdots = \\frac{1}{(1-x)^2}$。看出系数 $1,2,3,\\dots$ 来自求导是关键。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the coefficient of $x^5$ in the Maclaurin series for $\\sin x$?",
        "zh": "$\\sin x$ 的麦克劳林级数中 $x^5$ 的系数是多少？"
      },
      "choices": [
        "$-\\frac{1}{120}$",
        "$\\frac{1}{120}$",
        "$\\frac{1}{24}$",
        "$\\frac{1}{720}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$, so the $x^5$ coefficient is $\\frac{1}{5!} = \\frac{1}{120}$ (positive, since the pattern is $+, -, +$). Using $4!$ instead of $5!$ gives the wrong $\\frac{1}{24}$.",
        "zh": "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$，故 $x^5$ 的系数为 $\\frac{1}{5!} = \\frac{1}{120}$（为正，因为符号规律是 $+, -, +$）。用 $4!$ 而非 $5!$ 会错得 $\\frac{1}{24}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the first four terms of the Maclaurin series for $e^{-x}$?",
        "zh": "$e^{-x}$ 的麦克劳林级数的前四项是什么？"
      },
      "choices": [
        "$1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$",
        "$1 - x + \\frac{x^2}{2} + \\frac{x^3}{6}$",
        "$1 - x + \\frac{x^2}{2} - \\frac{x^3}{6}$",
        "$1 - x - \\frac{x^2}{2} - \\frac{x^3}{6}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Substitute $-x$ into $e^u = \\sum \\frac{u^n}{n!}$: $e^{-x} = \\sum \\frac{(-x)^n}{n!} = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + \\cdots$. The signs alternate because $(-x)^n = (-1)^n x^n$.",
        "zh": "将 $-x$ 代入 $e^u = \\sum \\frac{u^n}{n!}$：$e^{-x} = \\sum \\frac{(-x)^n}{n!} = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + \\cdots$。符号交错是因为 $(-x)^n = (-1)^n x^n$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using series, evaluate $\\lim_{x \\to 0} \\frac{\\cos x - 1 + \\frac{x^2}{2}}{x^4}$.",
        "zh": "用级数计算 $\\lim_{x \\to 0} \\frac{\\cos x - 1 + \\frac{x^2}{2}}{x^4}$。"
      },
      "choices": [
        "$0$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{12}$",
        "$\\frac{1}{24}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Since $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\cdots$, the numerator is $\\frac{x^4}{24} - \\cdots$. Dividing by $x^4$ gives $\\frac{1}{24} - \\cdots \\to \\frac{1}{24}$, which is exactly the $x^4$ coefficient of $\\cos x$.",
        "zh": "因 $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\cdots$，分子为 $\\frac{x^4}{24} - \\cdots$。除以 $x^4$ 得 $\\frac{1}{24} - \\cdots \\to \\frac{1}{24}$，恰为 $\\cos x$ 中 $x^4$ 的系数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the coefficient of $x^4$ in the Maclaurin series for $\\cos x$? Give your answer as a fraction a/b.",
        "zh": "$\\cos x$ 的麦克劳林级数中 $x^4$ 的系数是多少？答案写成分数 a/b。"
      },
      "answer": "1/24",
      "accept": [
        "0.0417",
        "0.042"
      ],
      "explanation": {
        "en": "$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$, so the $x^4$ coefficient is $\\frac{1}{4!} = \\frac{1}{24}$ (positive, following the $+,-,+$ pattern).",
        "zh": "$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$，故 $x^4$ 的系数为 $\\frac{1}{4!} = \\frac{1}{24}$（为正，符合 $+,-,+$ 的规律）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The coefficient of $x^3$ in the Maclaurin series for $f$ is $2$. Find $f^{(3)}(0)$. Give an integer.",
        "zh": "函数 $f$ 的麦克劳林级数中 $x^3$ 的系数是 $2$。求 $f^{(3)}(0)$。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "The coefficient of $x^n$ is $\\frac{f^{(n)}(0)}{n!}$, so $f^{(3)}(0) = 2 \\cdot 3! = 2 \\cdot 6 = 12$. Forgetting the factorial $3!$ would leave the answer at $2$.",
        "zh": "$x^n$ 的系数是 $\\frac{f^{(n)}(0)}{n!}$，故 $f^{(3)}(0) = 2 \\cdot 3! = 2 \\cdot 6 = 12$。忘记乘阶乘 $3!$ 会停在 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using series, evaluate $\\lim_{x \\to 0} \\frac{e^{x^2} - 1}{x^2}$. Give an integer.",
        "zh": "用级数计算 $\\lim_{x \\to 0} \\frac{e^{x^2} - 1}{x^2}$。请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "Substitute $x^2$ into $e^u = 1 + u + \\cdots$: $e^{x^2} = 1 + x^2 + \\frac{x^4}{2} + \\cdots$, so the numerator is $x^2 + \\frac{x^4}{2} + \\cdots$. Dividing by $x^2$ gives $1 + \\frac{x^2}{2} + \\cdots \\to 1$.",
        "zh": "将 $x^2$ 代入 $e^u = 1 + u + \\cdots$：$e^{x^2} = 1 + x^2 + \\frac{x^4}{2} + \\cdots$，分子为 $x^2 + \\frac{x^4}{2} + \\cdots$。除以 $x^2$ 得 $1 + \\frac{x^2}{2} + \\cdots \\to 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the coefficient of $x^2$ in the Maclaurin series for $e^{-2x}$. Give an integer.",
        "zh": "求 $e^{-2x}$ 的麦克劳林级数中 $x^2$ 的系数。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Substitute $-2x$ into $e^u$: the $x^2$ term is $\\frac{(-2x)^2}{2!} = \\frac{4x^2}{2} = 2x^2$, so the coefficient is $2$. Squaring $-2$ removes the sign, then dividing by $2! = 2$ gives $2$.",
        "zh": "将 $-2x$ 代入 $e^u$：$x^2$ 项为 $\\frac{(-2x)^2}{2!} = \\frac{4x^2}{2} = 2x^2$，系数为 $2$。$-2$ 平方后去掉符号，再除以 $2! = 2$ 得 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the coefficient of $x^6$ in the Maclaurin series for $\\cos x$? Give your answer as a fraction a/b.",
        "zh": "$\\cos x$ 的麦克劳林级数中 $x^6$ 的系数是多少？答案写成分数 a/b。"
      },
      "answer": "-1/720",
      "accept": [
        "-0.00139",
        "-0.0014"
      ],
      "explanation": {
        "en": "$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots$, so the $x^6$ coefficient is $-\\frac{1}{6!} = -\\frac{1}{720}$ (negative, following the alternating pattern).",
        "zh": "$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots$，故 $x^6$ 的系数为 $-\\frac{1}{6!} = -\\frac{1}{720}$（为负，符合交错规律）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $f^{(5)}(0) = 60$, what is the coefficient of $x^5$ in the Maclaurin series for $f$? Give your answer as a fraction a/b or a decimal.",
        "zh": "若 $f^{(5)}(0) = 60$，则 $f$ 的麦克劳林级数中 $x^5$ 的系数是多少？答案写成分数 a/b 或小数。"
      },
      "answer": "1/2",
      "accept": [
        "0.5",
        ".5"
      ],
      "explanation": {
        "en": "The coefficient of $x^n$ is $\\frac{f^{(n)}(0)}{n!}$, so the $x^5$ coefficient is $\\frac{60}{5!} = \\frac{60}{120} = \\frac{1}{2}$. Divide the derivative value by $5!$, not by $5$.",
        "zh": "$x^n$ 的系数是 $\\frac{f^{(n)}(0)}{n!}$，故 $x^5$ 的系数为 $\\frac{60}{5!} = \\frac{60}{120} = \\frac{1}{2}$。要除以 $5!$，不是 $5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using series, evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x) - 3x}{x^3}$. Give your answer as a fraction a/b or a decimal.",
        "zh": "用级数计算 $\\lim_{x \\to 0} \\frac{\\sin(3x) - 3x}{x^3}$。答案写成分数 a/b 或小数。"
      },
      "answer": "-9/2",
      "accept": [
        "-4.5",
        "-4.50"
      ],
      "explanation": {
        "en": "Substitute $3x$ into $\\sin u = u - \\frac{u^3}{6} + \\cdots$: $\\sin(3x) = 3x - \\frac{27x^3}{6} + \\cdots = 3x - \\frac{9x^3}{2} + \\cdots$. So $\\sin(3x) - 3x = -\\frac{9x^3}{2} + \\cdots$, and dividing by $x^3$ gives $-\\frac{9}{2}$. Note $(3x)^3 = 27x^3$, not $3x^3$.",
        "zh": "将 $3x$ 代入 $\\sin u = u - \\frac{u^3}{6} + \\cdots$：$\\sin(3x) = 3x - \\frac{27x^3}{6} + \\cdots = 3x - \\frac{9x^3}{2} + \\cdots$。故 $\\sin(3x) - 3x = -\\frac{9x^3}{2} + \\cdots$，除以 $x^3$ 得 $-\\frac{9}{2}$。注意 $(3x)^3 = 27x^3$，不是 $3x^3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A function satisfies $|f^{(4)}(t)| \\le 10$ for all $t$ in $[0, 1]$. Using the third-degree Taylor polynomial about $0$, find the Lagrange bound on $|R_3(1)|$. Give your answer as a fraction a/b.",
        "zh": "函数满足对 $[0, 1]$ 上所有 $t$ 有 $|f^{(4)}(t)| \\le 10$。用关于 $0$ 的三次泰勒多项式，求 $|R_3(1)|$ 的拉格朗日界。答案写成分数 a/b。"
      },
      "answer": "5/12",
      "accept": [
        "0.4167",
        "0.417"
      ],
      "explanation": {
        "en": "The Lagrange bound is $|R_3(1)| \\le \\frac{M |x-a|^{n+1}}{(n+1)!} = \\frac{10 \\cdot 1^4}{4!} = \\frac{10}{24} = \\frac{5}{12}$. Use the $(n+1) = 4$th derivative bound $M = 10$ and the factorial $4!$.",
        "zh": "拉格朗日界为 $|R_3(1)| \\le \\frac{M |x-a|^{n+1}}{(n+1)!} = \\frac{10 \\cdot 1^4}{4!} = \\frac{10}{24} = \\frac{5}{12}$。要用第 $(n+1) = 4$ 阶导数的界 $M = 10$ 和阶乘 $4!$。"
      }
    }
  ]
}
