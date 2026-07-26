export default {
  "extending-number-system/rational-exponents-and-radicals": [
    {
      "type": "mc",
      "question": {
        "en": "Rewrite $x^{1/3}$ as a radical.",
        "zh": "把 $x^{1/3}$ 写成根式形式。"
      },
      "choices": [
        "$\\sqrt[3]{x}$",
        "$x^3$",
        "$\\sqrt{x^3}$",
        "$\\frac{1}{\\sqrt[3]{x}}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A denominator of 3 in the exponent is the index of the root, so $x^{1/3}=\\sqrt[3]{x}$. Reading the 3 as a power instead of a root gives $x^3$, which reverses the meaning of the fractional exponent.",
        "zh": "指数分母为 3 表示根的次数，所以 $x^{1/3}=\\sqrt[3]{x}$。若把 3 当作乘方而不是开方，就会得到 $x^3$，这颠倒了分数指数的含义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rewrite $\\sqrt[4]{x^3}$ using a rational exponent.",
        "zh": "用分数指数写出 $\\sqrt[4]{x^3}$。"
      },
      "choices": [
        "$x^{4/3}$",
        "$x^{3/4}$",
        "$x^{12}$",
        "$x^{7}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The power inside goes on top and the index goes on the bottom: $\\sqrt[4]{x^3}=x^{3/4}$. Flipping them to $x^{4/3}$ swaps the roles of the index and the inner power.",
        "zh": "内部的乘方作分子，根的次数作分母：$\\sqrt[4]{x^3}=x^{3/4}$。若写成 $x^{4/3}$，就把根次数与内部乘方的位置对调了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $27^{2/3}$.",
        "zh": "求 $27^{2/3}$ 的值。"
      },
      "choices": [
        "18",
        "6",
        "9",
        "$\\sqrt[3]{729}$ (leave unsimplified)"
      ],
      "answer": 2,
      "explanation": {
        "en": "Take the cube root first, then square: $\\sqrt[3]{27}=3$, and $3^2=9$. Multiplying $27\\times\\frac{2}{3}=18$ treats the fractional exponent as ordinary multiplication, which is not how exponents work.",
        "zh": "先开三次方再平方：$\\sqrt[3]{27}=3$，$3^2=9$。若用 $27\\times\\frac{2}{3}=18$，就把分数指数当作普通乘法了，指数运算并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt{50}$.",
        "zh": "化简 $\\sqrt{50}$。"
      },
      "choices": [
        "$25\\sqrt{2}$",
        "$2\\sqrt{5}$",
        "$10\\sqrt{5}$",
        "$5\\sqrt{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor out the largest perfect square: $50=25\\cdot 2$, so $\\sqrt{50}=5\\sqrt{2}$. Pulling out 25 without taking its square root leaves $25\\sqrt{2}$, forgetting that $\\sqrt{25}=5$.",
        "zh": "提取最大的完全平方因子：$50=25\\cdot 2$，所以 $\\sqrt{50}=5\\sqrt{2}$。若提出 25 却不开方，就会得到 $25\\sqrt{2}$，忘了 $\\sqrt{25}=5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt[3]{54}$.",
        "zh": "化简 $\\sqrt[3]{54}$。"
      },
      "choices": [
        "$3\\sqrt[3]{2}$",
        "$2\\sqrt[3]{3}$",
        "$6\\sqrt[3]{3}$",
        "$9\\sqrt[3]{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Find a perfect-cube factor: $54=27\\cdot 2$, and $\\sqrt[3]{27}=3$, so $\\sqrt[3]{54}=3\\sqrt[3]{2}$. Using $27=3^3$ but pulling out a factor of 2 by mistake gives $2\\sqrt[3]{3}$, matching the wrong perfect cube.",
        "zh": "找完全立方因子：$54=27\\cdot 2$，$\\sqrt[3]{27}=3$，所以 $\\sqrt[3]{54}=3\\sqrt[3]{2}$。若误把 2 提到根号外而留下 3，就得到 $2\\sqrt[3]{3}$，对应了错误的立方因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt{12}+\\sqrt{27}$.",
        "zh": "化简 $\\sqrt{12}+\\sqrt{27}$。"
      },
      "choices": [
        "$\\sqrt{39}$",
        "$5\\sqrt{3}$",
        "$6\\sqrt{3}$",
        "$39$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Simplify each first: $\\sqrt{12}=2\\sqrt{3}$ and $\\sqrt{27}=3\\sqrt{3}$, so the sum is $5\\sqrt{3}$. Adding the radicands to get $\\sqrt{39}$ is invalid because $\\sqrt{a}+\\sqrt{b}\\ne\\sqrt{a+b}$.",
        "zh": "先各自化简：$\\sqrt{12}=2\\sqrt{3}$，$\\sqrt{27}=3\\sqrt{3}$，相加得 $5\\sqrt{3}$。若把被开方数相加得 $\\sqrt{39}$ 是错误的，因为 $\\sqrt{a}+\\sqrt{b}\\ne\\sqrt{a+b}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply and simplify $\\sqrt{6}\\cdot\\sqrt{15}$.",
        "zh": "计算并化简 $\\sqrt{6}\\cdot\\sqrt{15}$。"
      },
      "choices": [
        "$\\sqrt{21}$",
        "$90$",
        "$3\\sqrt{10}$",
        "$9\\sqrt{10}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply under one radical: $\\sqrt{6\\cdot 15}=\\sqrt{90}=\\sqrt{9\\cdot 10}=3\\sqrt{10}$. Adding the radicands to get $\\sqrt{21}$ confuses the product rule with an addition that isn't allowed.",
        "zh": "合并到一个根号下：$\\sqrt{6\\cdot 15}=\\sqrt{90}=\\sqrt{9\\cdot 10}=3\\sqrt{10}$。若把被开方数相加得 $\\sqrt{21}$，就把乘法法则误当作不允许的加法了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\left(x^{1/2}\\right)^{4}$ (assume $x\\ge 0$).",
        "zh": "化简 $\\left(x^{1/2}\\right)^{4}$（设 $x\\ge 0$）。"
      },
      "choices": [
        "$x^{9/2}$",
        "$x^{1/8}$",
        "$x^{4}$",
        "$x^{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A power of a power multiplies exponents: $\\frac{1}{2}\\cdot 4=2$, so the result is $x^2$. Adding the exponents to get $x^{9/2}$ misapplies the rule for multiplying like bases instead of raising a power to a power.",
        "zh": "幂的乘方要把指数相乘：$\\frac{1}{2}\\cdot 4=2$，所以结果是 $x^2$。若把指数相加得 $x^{9/2}$，就误用了同底数相乘的法则，而非幂的乘方法则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $x^{3/4}\\cdot x^{1/4}$.",
        "zh": "化简 $x^{3/4}\\cdot x^{1/4}$。"
      },
      "choices": [
        "$x^{1}$",
        "$x^{3/16}$",
        "$x^{1/2}$",
        "$x^{4/8}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiplying like bases adds exponents: $\\frac{3}{4}+\\frac{1}{4}=1$, so the answer is $x$. Multiplying the exponents to get $x^{3/16}$ uses the power-of-a-power rule where the add rule belongs.",
        "zh": "同底数相乘要把指数相加：$\\frac{3}{4}+\\frac{1}{4}=1$，所以答案是 $x$。若把指数相乘得 $x^{3/16}$，就在该用加法的地方误用了幂的乘方法则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rationalize the denominator of $\\dfrac{6}{\\sqrt{3}}$.",
        "zh": "把 $\\dfrac{6}{\\sqrt{3}}$ 的分母有理化。"
      },
      "choices": [
        "$6\\sqrt{3}$",
        "$2\\sqrt{3}$",
        "$\\sqrt{3}$",
        "$\\dfrac{6\\sqrt{3}}{3}$ unsimplified only"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply top and bottom by $\\sqrt{3}$: $\\frac{6\\sqrt{3}}{3}=2\\sqrt{3}$. Forgetting to divide the 6 by the new denominator 3 leaves $6\\sqrt{3}$, skipping the final simplification.",
        "zh": "分子分母同乘 $\\sqrt{3}$：$\\frac{6\\sqrt{3}}{3}=2\\sqrt{3}$。若忘记用新分母 3 去除 6，就会停在 $6\\sqrt{3}$，漏掉了最后的化简。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\dfrac{x^{5/6}}{x^{1/3}}$.",
        "zh": "化简 $\\dfrac{x^{5/6}}{x^{1/3}}$。"
      },
      "choices": [
        "$x^{5/18}$",
        "$x^{7/6}$",
        "$x^{1/2}$",
        "$x^{4/6}$ unreduced"
      ],
      "answer": 2,
      "explanation": {
        "en": "Dividing like bases subtracts exponents: $\\frac{5}{6}-\\frac{1}{3}=\\frac{5}{6}-\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}$, so the answer is $x^{1/2}$. Adding the exponents to get $x^{7/6}$ uses the multiplication rule instead of the division rule.",
        "zh": "同底数相除要把指数相减：$\\frac{5}{6}-\\frac{1}{3}=\\frac{5}{6}-\\frac{2}{6}=\\frac{1}{2}$，所以答案是 $x^{1/2}$。若把指数相加得 $x^{7/6}$，就把乘法法则误用于除法了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $16^{-1/2}$.",
        "zh": "求 $16^{-1/2}$ 的值。"
      },
      "choices": [
        "$-4$",
        "$-8$",
        "$8$",
        "$\\dfrac{1}{4}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A negative exponent means reciprocal, and $1/2$ means square root: $16^{-1/2}=\\frac{1}{\\sqrt{16}}=\\frac{1}{4}$. Treating the negative sign as making the value negative gives $-4$, but a negative exponent never makes a positive base negative.",
        "zh": "负指数表示取倒数，$1/2$ 表示开平方：$16^{-1/2}=\\frac{1}{\\sqrt{16}}=\\frac{1}{4}$。若把负号理解为让结果变负得到 $-4$，那是错的，负指数不会让正底数变负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $8^{2/3}$.",
        "zh": "求 $8^{2/3}$ 的值。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Cube root then square: $\\sqrt[3]{8}=2$ and $2^2=4$. Multiplying $8\\times\\frac{2}{3}$ instead would wrongly treat the exponent as a factor.",
        "zh": "先开三次方再平方：$\\sqrt[3]{8}=2$，$2^2=4$。若改用 $8\\times\\frac{2}{3}$，就错误地把指数当成了乘数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\sqrt{72}$ to the form $a\\sqrt{b}$ and enter the value of $a$.",
        "zh": "把 $\\sqrt{72}$ 化为 $a\\sqrt{b}$ 的形式，填入 $a$ 的值。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Since $72=36\\cdot 2$, $\\sqrt{72}=6\\sqrt{2}$, so $a=6$. Using $9\\cdot 8$ instead of the largest perfect square would leave the radical not fully simplified.",
        "zh": "因为 $72=36\\cdot 2$，$\\sqrt{72}=6\\sqrt{2}$，所以 $a=6$。若用 $9\\cdot 8$ 而非最大的完全平方因子，根式就没有完全化简。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write $\\sqrt[5]{x^2}$ using a rational exponent (form $x^{a/b}$).",
        "zh": "用分数指数写出 $\\sqrt[5]{x^2}$（形式 $x^{a/b}$）。"
      },
      "answer": "x^(2/5)",
      "accept": [
        "x^(2/5)",
        "x^{2/5}",
        "x^2/5",
        "x^0.4",
        "x^.4"
      ],
      "explanation": {
        "en": "The inner power 2 is the numerator and the index 5 is the denominator, giving $x^{2/5}$. Swapping them to $x^{5/2}$ would confuse the root index with the power.",
        "zh": "内部乘方 2 作分子，根次数 5 作分母，得 $x^{2/5}$。若对调成 $x^{5/2}$，就混淆了根的次数与乘方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $5\\sqrt{3}+2\\sqrt{3}$. Give the coefficient of $\\sqrt{3}$.",
        "zh": "化简 $5\\sqrt{3}+2\\sqrt{3}$，填入 $\\sqrt{3}$ 前的系数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Like radicals add like terms: $5+2=7$, giving $7\\sqrt{3}$. The radical part stays $\\sqrt{3}$; you do not add the 3's under the root.",
        "zh": "同类根式像同类项一样相加：$5+2=7$，得 $7\\sqrt{3}$。根号部分仍是 $\\sqrt{3}$，不要把根号下的 3 相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Multiply $\\sqrt{8}\\cdot\\sqrt{2}$ and give the simplified whole-number result.",
        "zh": "计算 $\\sqrt{8}\\cdot\\sqrt{2}$，填入化简后的整数结果。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$\\sqrt{8}\\cdot\\sqrt{2}=\\sqrt{16}=4$. Simplifying $\\sqrt{8}$ to $2\\sqrt{2}$ first and then multiplying by $\\sqrt{2}$ also gives $2\\cdot 2=4$.",
        "zh": "$\\sqrt{8}\\cdot\\sqrt{2}=\\sqrt{16}=4$。也可先把 $\\sqrt{8}$ 化为 $2\\sqrt{2}$，再乘 $\\sqrt{2}$，得 $2\\cdot 2=4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\left(\\dfrac{1}{9}\\right)^{-1/2}$.",
        "zh": "求 $\\left(\\dfrac{1}{9}\\right)^{-1/2}$ 的值。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The negative exponent flips the fraction to $9$, and the $1/2$ takes the square root: $\\sqrt{9}=3$. Ignoring the sign would give $\\frac{1}{3}$ instead.",
        "zh": "负指数把分数翻转为 $9$，$1/2$ 表示开平方：$\\sqrt{9}=3$。若忽略负号，就会误得 $\\frac{1}{3}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $x^{2/3}\\cdot x^{2/3}$ (form $x^{a/b}$).",
        "zh": "化简 $x^{2/3}\\cdot x^{2/3}$（形式 $x^{a/b}$）。"
      },
      "answer": "x^(4/3)",
      "accept": [
        "x^(4/3)",
        "x^{4/3}",
        "x^4/3",
        "x^1.333",
        "x^1.33"
      ],
      "explanation": {
        "en": "Multiplying like bases adds exponents: $\\frac{2}{3}+\\frac{2}{3}=\\frac{4}{3}$, giving $x^{4/3}$. Multiplying the exponents to get $x^{4/9}$ would misuse the power-of-a-power rule.",
        "zh": "同底数相乘把指数相加：$\\frac{2}{3}+\\frac{2}{3}=\\frac{4}{3}$，得 $x^{4/3}$。若把指数相乘得 $x^{4/9}$，就误用了幂的乘方法则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Rationalize and simplify $\\dfrac{10}{\\sqrt{5}}$ to the form $a\\sqrt{5}$; give $a$.",
        "zh": "把 $\\dfrac{10}{\\sqrt{5}}$ 有理化并化简为 $a\\sqrt{5}$，填入 $a$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Multiply by $\\frac{\\sqrt{5}}{\\sqrt{5}}$: $\\frac{10\\sqrt{5}}{5}=2\\sqrt{5}$, so $a=2$. Forgetting to divide 10 by 5 would leave $10\\sqrt{5}$ unsimplified.",
        "zh": "乘以 $\\frac{\\sqrt{5}}{\\sqrt{5}}$：$\\frac{10\\sqrt{5}}{5}=2\\sqrt{5}$，所以 $a=2$。若忘记用 5 去除 10，就会停在未化简的 $10\\sqrt{5}$。"
      }
    }
  ],
  "extending-number-system/polynomial-operations-and-closure": [
    {
      "type": "mc",
      "question": {
        "en": "Add: $(3x^2+2x-5)+(x^2-4x+7)$.",
        "zh": "求和：$(3x^2+2x-5)+(x^2-4x+7)$。"
      },
      "choices": [
        "$4x^2-2x+2$",
        "$4x^2+6x+2$",
        "$3x^2-2x+2$",
        "$4x^2-2x-12$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Combine like terms: $3x^2+x^2=4x^2$, $2x-4x=-2x$, $-5+7=2$, giving $4x^2-2x+2$. Adding $2x+4x$ as if both were positive would wrongly give $6x$.",
        "zh": "合并同类项：$3x^2+x^2=4x^2$，$2x-4x=-2x$，$-5+7=2$，得 $4x^2-2x+2$。若把 $2x$ 与 $4x$ 当作都为正相加，会错得 $6x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Subtract: $(5x^2-3x+4)-(2x^2+x-6)$.",
        "zh": "求差：$(5x^2-3x+4)-(2x^2+x-6)$。"
      },
      "choices": [
        "$3x^2-2x-2$",
        "$3x^2-4x+10$",
        "$3x^2-2x+10$",
        "$7x^2-4x-2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distribute the minus to every term: $-2x^2-x+6$, then combine: $3x^2-4x+10$. Subtracting only the first term and keeping $+x-6$ unchanged would drop the sign changes and give $3x^2-2x-2$.",
        "zh": "把负号分配到每一项：$-2x^2-x+6$，再合并：$3x^2-4x+10$。若只对第一项变号而保留 $+x-6$，就漏掉变号，错得 $3x^2-2x-2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $3x^2(2x^3-4x+5)$.",
        "zh": "计算：$3x^2(2x^3-4x+5)$。"
      },
      "choices": [
        "$6x^5-12x^3+15x^2$",
        "$6x^6-12x^2+15x^2$",
        "$5x^5-12x^3+8x^2$",
        "$6x^5-4x+5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Distribute and add exponents: $3x^2\\cdot 2x^3=6x^5$, $3x^2\\cdot(-4x)=-12x^3$, $3x^2\\cdot 5=15x^2$. Multiplying the exponents instead of adding them would give $x^6$ from the first term, which is wrong.",
        "zh": "分配并把指数相加：$3x^2\\cdot 2x^3=6x^5$，$3x^2\\cdot(-4x)=-12x^3$，$3x^2\\cdot 5=15x^2$。若把指数相乘而非相加，第一项会错成 $x^6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand: $(x+4)(x-7)$.",
        "zh": "展开：$(x+4)(x-7)$。"
      },
      "choices": [
        "$x^2+11x-28$",
        "$x^2-28$",
        "$x^2-3x+28$",
        "$x^2-3x-28$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Using FOIL: $x^2-7x+4x-28=x^2-3x-28$. Forgetting the middle terms and writing only $x^2-28$ misses the sum of the outer and inner products.",
        "zh": "用 FOIL：$x^2-7x+4x-28=x^2-3x-28$。若漏掉中间项只写 $x^2-28$，就丢了外项与内项之和。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand: $(2x-3)^2$.",
        "zh": "展开：$(2x-3)^2$。"
      },
      "choices": [
        "$4x^2-12x+9$",
        "$4x^2-9$",
        "$2x^2-12x+9$",
        "$4x^2+9$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Square a binomial: $(2x)^2-2(2x)(3)+3^2=4x^2-12x+9$. Writing only $4x^2+9$ forgets the middle term $-2ab$, a common error when squaring a sum or difference.",
        "zh": "完全平方：$(2x)^2-2(2x)(3)+3^2=4x^2-12x+9$。若只写 $4x^2+9$，就漏了中间项 $-2ab$，这是平方时常见的错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand: $(x+5)(x-5)$.",
        "zh": "展开：$(x+5)(x-5)$。"
      },
      "choices": [
        "$x^2-10x-25$",
        "$x^2-25$",
        "$x^2+25$",
        "$x^2+10x+25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "This is a difference of squares: $x^2-25$. The middle terms $-5x+5x$ cancel, so keeping a middle term like $-10x$ overlooks that cancellation.",
        "zh": "这是平方差：$x^2-25$。中间项 $-5x+5x$ 抵消，所以若保留 $-10x$ 之类的中间项，就忽视了这一抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(x+2)(x^2-3x+1)$.",
        "zh": "计算：$(x+2)(x^2-3x+1)$。"
      },
      "choices": [
        "$x^3+2x^2-3x+2$",
        "$x^3-3x^2+x+2$",
        "$x^3-x^2-5x+2$",
        "$x^3-x^2-6x+2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Distribute each term: $x^3-3x^2+x+2x^2-6x+2=x^3-x^2-5x+2$. Forgetting to distribute the $+2$ across all three inner terms would drop the $-6x$ contribution.",
        "zh": "逐项分配：$x^3-3x^2+x+2x^2-6x+2=x^3-x^2-5x+2$。若忘记把 $+2$ 分配到括号内三项，就会漏掉 $-6x$ 这一贡献。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly describes closure of polynomials?",
        "zh": "下列关于多项式封闭性的说法哪个正确？"
      },
      "choices": [
        "Polynomials are closed under division",
        "Polynomials are never closed under any operation",
        "Polynomials are closed only under addition",
        "Polynomials are closed under addition, subtraction, and multiplication"
      ],
      "answer": 3,
      "explanation": {
        "en": "Adding, subtracting, or multiplying polynomials always yields another polynomial, so they are closed under those three. They are NOT closed under division, since a quotient like $\\frac{1}{x}$ is not a polynomial.",
        "zh": "多项式相加、相减或相乘结果仍是多项式，故对这三种运算封闭。它们对除法不封闭，因为像 $\\frac{1}{x}$ 这样的商不是多项式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The set of integers is closed under which operation?",
        "zh": "整数集合对下列哪种运算封闭？"
      },
      "choices": [
        "Multiplication",
        "Taking square roots",
        "Division",
        "None of these"
      ],
      "answer": 0,
      "explanation": {
        "en": "The product of any two integers is always an integer, so integers are closed under multiplication. They are not closed under division, since $3\\div 2$ is not an integer.",
        "zh": "任意两个整数之积仍是整数，故整数对乘法封闭。它们对除法不封闭，因为 $3\\div 2$ 不是整数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the degree of the product $(x^3+1)(2x^4-x)$?",
        "zh": "乘积 $(x^3+1)(2x^4-x)$ 的次数是多少？"
      },
      "choices": [
        "12",
        "7",
        "4",
        "3"
      ],
      "answer": 1,
      "explanation": {
        "en": "The degree of a product is the sum of the degrees: $3+4=7$. Multiplying the degrees to get 12 confuses adding exponents (correct for multiplication) with multiplying them.",
        "zh": "乘积的次数等于各因式次数之和：$3+4=7$。若把次数相乘得 12，就把（乘法应有的）指数相加误当成了相乘。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify: $(4x^3-2x^2+x)-(4x^3+x^2-x)$.",
        "zh": "化简：$(4x^3-2x^2+x)-(4x^3+x^2-x)$。"
      },
      "choices": [
        "$8x^3-3x^2+2x$",
        "$-x^2$",
        "$-3x^2+2x$",
        "$-3x^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Distribute the minus: $-4x^3-x^2+x$, then combine: the $x^3$ terms cancel, $-2x^2-x^2=-3x^2$, and $x+x=2x$, giving $-3x^2+2x$. Failing to change the sign of $-x$ would drop the $+2x$ term.",
        "zh": "分配负号：$-4x^3-x^2+x$，再合并：$x^3$ 项抵消，$-2x^2-x^2=-3x^2$，$x+x=2x$，得 $-3x^2+2x$。若不对 $-x$ 变号，就会丢掉 $+2x$ 项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand: $(x+3)(x+3)(x)$... first find $(x+3)^2$. Which is correct?",
        "zh": "展开：先求 $(x+3)^2$。下列哪个正确？"
      },
      "choices": [
        "$x^2+9$",
        "$x^2+3x+9$",
        "$x^2+6x+6$",
        "$x^2+6x+9$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(x+3)^2=x^2+2(3)x+9=x^2+6x+9$. Writing $x^2+9$ forgets the middle term $2\\cdot 3\\cdot x=6x$, the usual slip when squaring a binomial.",
        "zh": "$(x+3)^2=x^2+2(3)x+9=x^2+6x+9$。若写成 $x^2+9$，就漏了中间项 $2\\cdot 3\\cdot x=6x$，这是二项式平方时常见的疏漏。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Add $(x^2+5x-2)+(3x^2-x+8)$. Enter the coefficient of $x$ in the result.",
        "zh": "计算 $(x^2+5x-2)+(3x^2-x+8)$，填入结果中 $x$ 的系数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Combine the $x$ terms: $5x+(-x)=4x$, so the coefficient is 4. Ignoring the negative sign on $-x$ would give 6 instead.",
        "zh": "合并 $x$ 项：$5x+(-x)=4x$，故系数为 4。若忽略 $-x$ 的负号，会错得 6。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Subtract $(6x^2+2x-1)-(4x^2-3x+5)$. Enter the constant term.",
        "zh": "计算 $(6x^2+2x-1)-(4x^2-3x+5)$，填入常数项。"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "−6"
      ],
      "explanation": {
        "en": "The constant becomes $-1-5=-6$ after distributing the minus. Writing $-1+5=4$ would forget to change the sign of the subtracted constant.",
        "zh": "分配负号后常数项为 $-1-5=-6$。若写成 $-1+5=4$，就忘了对被减常数变号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Expand $(x-6)(x+2)$ and enter the constant term.",
        "zh": "展开 $(x-6)(x+2)$，填入常数项。"
      },
      "answer": "-12",
      "accept": [
        "-12.0",
        "−12"
      ],
      "explanation": {
        "en": "The constant is the product of the last terms: $(-6)(2)=-12$. Multiplying signs incorrectly to get $+12$ ignores that a negative times a positive is negative.",
        "zh": "常数项是末项之积：$(-6)(2)=-12$。若符号处理错误得 $+12$，就忽略了负数乘正数为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Multiply $2x(3x^2-5x+4)$ and enter the coefficient of $x^2$ in the result.",
        "zh": "计算 $2x(3x^2-5x+4)$，填入结果中 $x^2$ 的系数。"
      },
      "answer": "-10",
      "accept": [
        "-10.0",
        "−10"
      ],
      "explanation": {
        "en": "$2x\\cdot(-5x)=-10x^2$, so the coefficient is $-10$. The $x^2$ term comes only from multiplying $2x$ by $-5x$, not from the $3x^2$ term.",
        "zh": "$2x\\cdot(-5x)=-10x^2$，故系数为 $-10$。$x^2$ 项只由 $2x$ 与 $-5x$ 相乘产生，而非来自 $3x^2$ 项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the degree of the product $(3x^2+1)(x^5-2x)$?",
        "zh": "乘积 $(3x^2+1)(x^5-2x)$ 的次数是多少？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Add the degrees of the highest terms: $2+5=7$. Multiplying $2\\times 5=10$ would misapply the exponent rule (exponents add when multiplying like bases).",
        "zh": "把最高次项的次数相加：$2+5=7$。若算 $2\\times 5=10$，就误用了指数法则（同底数相乘时指数相加）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Expand $(3x+1)^2$ and enter the coefficient of the middle ($x$) term.",
        "zh": "展开 $(3x+1)^2$，填入中间项（$x$ 项）的系数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "The middle term is $2\\cdot(3x)\\cdot 1=6x$, so the coefficient is 6. Squaring only the first and last terms and skipping $2ab$ is the common mistake here.",
        "zh": "中间项是 $2\\cdot(3x)\\cdot 1=6x$，故系数为 6。这里常见的错误是只平方首末项而漏掉 $2ab$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Add $(x^2-4x+3)+(2x^2+4x-3)$ and enter the fully simplified result.",
        "zh": "计算 $(x^2-4x+3)+(2x^2+4x-3)$，填入完全化简后的结果。"
      },
      "answer": "3x^2",
      "accept": [
        "3x^2",
        "3x²",
        "3*x^2",
        "3x^{2}"
      ],
      "explanation": {
        "en": "Combine like terms: $x^2+2x^2=3x^2$, the $x$ terms $-4x+4x=0$, and the constants $3-3=0$, leaving $3x^2$. Overlooking that the $x$ and constant terms cancel would leave extra terms.",
        "zh": "合并同类项：$x^2+2x^2=3x^2$，$x$ 项 $-4x+4x=0$，常数 $3-3=0$，只剩 $3x^2$。若没看出 $x$ 项与常数项相互抵消，就会多留出项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Closure: is $\\dfrac{x^2+1}{x}$ a polynomial? Answer yes or no.",
        "zh": "封闭性：$\\dfrac{x^2+1}{x}$ 是多项式吗？回答 是 或 否。"
      },
      "answer": "no",
      "accept": [
        "no",
        "No",
        "NO",
        "否",
        "不是",
        "n"
      ],
      "explanation": {
        "en": "Dividing by $x$ produces a term $\\frac{1}{x}=x^{-1}$ with a negative exponent, which is not allowed in a polynomial, so the answer is no. This shows polynomials are not closed under division.",
        "zh": "除以 $x$ 会产生 $\\frac{1}{x}=x^{-1}$ 这样带负指数的项，多项式不允许出现，故答案是否。这说明多项式对除法不封闭。"
      }
    }
  ],
  "quadratic-expressions-factoring/multiplying-and-special-products": [
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(x+3)(x+5)$.",
        "zh": "展开：$(x+3)(x+5)$。"
      },
      "choices": [
        "$x^2+8x+15$",
        "$x^2+15x+8$",
        "$x^2+2x+15$",
        "$x^2+8x+8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "FOIL: $x\\cdot x + 5x + 3x + 15 = x^2+8x+15$. The middle term comes from adding the two products $5x$ and $3x$; multiplying $3\\times 5$ gives the constant $15$, not the middle coefficient.",
        "zh": "用 FOIL：$x\\cdot x + 5x + 3x + 15 = x^2+8x+15$。中间项来自 $5x$ 与 $3x$ 相加；$3\\times 5$ 得到的是常数项 $15$，不是中间系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(x-4)(x+6)$.",
        "zh": "展开：$(x-4)(x+6)$。"
      },
      "choices": [
        "$x^2-2x-24$",
        "$x^2+2x-24$",
        "$x^2+2x+24$",
        "$x^2-24$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The middle term is $6x + (-4x) = +2x$ and the last term is $(-4)(6) = -24$. Keeping the sign of the larger number gives $+2x$; dropping a sign on the product would wrongly give $+24$.",
        "zh": "中间项为 $6x + (-4x) = +2x$，末项为 $(-4)(6) = -24$。较大数的符号使中间项为 $+2x$；若忽略乘积的符号会错误地得到 $+24$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(2x+1)(x+3)$.",
        "zh": "展开：$(2x+1)(x+3)$。"
      },
      "choices": [
        "$2x^2+3x+3$",
        "$2x^2+6x+3$",
        "$2x^2+7x+3$",
        "$3x^2+7x+3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "FOIL: $2x\\cdot x + 2x\\cdot 3 + 1\\cdot x + 3 = 2x^2+6x+x+3 = 2x^2+7x+3$. Forgetting the inner product $1\\cdot x$ would leave only $6x$ in the middle.",
        "zh": "用 FOIL：$2x\\cdot x + 2x\\cdot 3 + 1\\cdot x + 3 = 2x^2+6x+x+3 = 2x^2+7x+3$。若漏掉内积 $1\\cdot x$，中间项就只剩 $6x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand the perfect square: $(x+7)^2$.",
        "zh": "展开完全平方：$(x+7)^2$。"
      },
      "choices": [
        "$x^2+49$",
        "$x^2+7x+49$",
        "$x^2+14x+7$",
        "$x^2+14x+49$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(a+b)^2 = a^2+2ab+b^2 = x^2+2(7)x+49 = x^2+14x+49$. The common error is squaring each term to get $x^2+49$ and dropping the $2ab$ middle term.",
        "zh": "$(a+b)^2 = a^2+2ab+b^2 = x^2+2(7)x+49 = x^2+14x+49$。常见错误是把每一项分别平方得到 $x^2+49$，漏掉了 $2ab$ 这一中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand: $(x-5)^2$.",
        "zh": "展开：$(x-5)^2$。"
      },
      "choices": [
        "$x^2-10x+25$",
        "$x^2+25$",
        "$x^2-25$",
        "$x^2-10x-25$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$(a-b)^2 = a^2-2ab+b^2 = x^2-10x+25$. The last term $(-5)^2=+25$ is positive; treating the square as a difference of squares would wrongly give $x^2-25$.",
        "zh": "$(a-b)^2 = a^2-2ab+b^2 = x^2-10x+25$。末项 $(-5)^2=+25$ 为正；若当成平方差会错误地得到 $x^2-25$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(x+8)(x-8)$.",
        "zh": "展开：$(x+8)(x-8)$。"
      },
      "choices": [
        "$x^2+64$",
        "$x^2-64$",
        "$x^2-16x-64$",
        "$x^2+16x-64$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Difference of squares: $(a+b)(a-b)=a^2-b^2 = x^2-64$. The middle terms $+8x$ and $-8x$ cancel, so any answer with an $x$ term ignored that cancellation.",
        "zh": "平方差：$(a+b)(a-b)=a^2-b^2 = x^2-64$。中间项 $+8x$ 与 $-8x$ 相互抵消，因此带有 $x$ 项的答案忽略了这一抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand: $(3x-2)^2$.",
        "zh": "展开：$(3x-2)^2$。"
      },
      "choices": [
        "$9x^2-4$",
        "$9x^2+12x+4$",
        "$9x^2-12x+4$",
        "$3x^2-12x+4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(3x-2)^2 = (3x)^2 - 2(3x)(2) + 2^2 = 9x^2-12x+4$. Note $(3x)^2=9x^2$, so writing $3x^2$ forgets to square the coefficient.",
        "zh": "$(3x-2)^2 = (3x)^2 - 2(3x)(2) + 2^2 = 9x^2-12x+4$。注意 $(3x)^2=9x^2$，写成 $3x^2$ 是忘了给系数也平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(2x+5)(2x-5)$.",
        "zh": "展开：$(2x+5)(2x-5)$。"
      },
      "choices": [
        "$2x^2-25$",
        "$4x^2+25$",
        "$4x^2-20x-25$",
        "$4x^2-25$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Difference of squares: $(2x)^2-(5)^2 = 4x^2-25$. Since $(2x)^2=4x^2$, keeping only $2x^2$ fails to square the coefficient $2$.",
        "zh": "平方差：$(2x)^2-(5)^2 = 4x^2-25$。因为 $(2x)^2=4x^2$，只写 $2x^2$ 是没有给系数 $2$ 平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(x+2)(x^2+3x+1)$.",
        "zh": "展开：$(x+2)(x^2+3x+1)$。"
      },
      "choices": [
        "$x^3+5x^2+7x+2$",
        "$x^3+3x^2+x+2$",
        "$x^3+5x^2+6x+2$",
        "$x^3+6x^2+7x+2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Distribute: $x(x^2+3x+1) + 2(x^2+3x+1) = x^3+3x^2+x + 2x^2+6x+2 = x^3+5x^2+7x+2$. Forgetting to multiply the trinomial by the $+2$ term leaves $x^3+3x^2+x+2$.",
        "zh": "分配律：$x(x^2+3x+1) + 2(x^2+3x+1) = x^3+3x^2+x + 2x^2+6x+2 = x^3+5x^2+7x+2$。若忘了用 $+2$ 去乘三项式，就会得到 $x^3+3x^2+x+2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Distribute: $-3x(2x^2-4x+5)$.",
        "zh": "分配：$-3x(2x^2-4x+5)$。"
      },
      "choices": [
        "$-6x^3-12x^2+15x$",
        "$-6x^3+12x^2-15x$",
        "$-6x^3+12x^2+15x$",
        "$6x^3+12x^2-15x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply each term by $-3x$: $-6x^3 + 12x^2 - 15x$. The middle sign flips to $+$ because a negative times a negative is positive; keeping it negative is the common slip.",
        "zh": "每一项都乘以 $-3x$：$-6x^3 + 12x^2 - 15x$。中间项变为 $+$，因为负负得正；保留为负号是常见失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression equals $(a+b)^2$?",
        "zh": "下列哪个等于 $(a+b)^2$？"
      },
      "choices": [
        "$a^2+b^2$",
        "$a^2-2ab+b^2$",
        "$a^2+2ab+b^2$",
        "$a^2+ab+b^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(a+b)^2 = a^2+2ab+b^2$. The square of a sum is not the sum of the squares, so $a^2+b^2$ omits the cross term $2ab$.",
        "zh": "$(a+b)^2 = a^2+2ab+b^2$。和的平方不等于平方的和，因此 $a^2+b^2$ 漏掉了交叉项 $2ab$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(x+4)(x-1)$.",
        "zh": "展开：$(x+4)(x-1)$。"
      },
      "choices": [
        "$x^2-3x-4$",
        "$x^2+3x+4$",
        "$x^2-4$",
        "$x^2+3x-4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Middle term: $-x+4x = +3x$; last term: $(4)(-1)=-4$. The larger coefficient is $+4$, so the middle term is positive $3x$; using $-3x$ reverses the signs.",
        "zh": "中间项：$-x+4x = +3x$；末项：$(4)(-1)=-4$。较大系数为 $+4$，所以中间项为正的 $3x$；用 $-3x$ 则弄反了符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x+6)(x+2)$, what is the coefficient of $x$?",
        "zh": "在 $(x+6)(x+2)$ 的展开式中，$x$ 的系数是多少？"
      },
      "answer": "8",
      "accept": [
        "8",
        "+8",
        "8.0"
      ],
      "explanation": {
        "en": "The product expands to $x^2+8x+12$; the middle coefficient is $6+2=8$, not the product $6\\times 2=12$.",
        "zh": "展开为 $x^2+8x+12$；中间系数为 $6+2=8$，而不是乘积 $6\\times 2=12$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Expand $(x-7)^2$. What is the constant term?",
        "zh": "展开 $(x-7)^2$，常数项是多少？"
      },
      "answer": "49",
      "accept": [
        "49",
        "49.0",
        "+49"
      ],
      "explanation": {
        "en": "$(x-7)^2 = x^2-14x+49$; the constant is $(-7)^2=49$, which is positive even though the binomial has a minus sign.",
        "zh": "$(x-7)^2 = x^2-14x+49$；常数项为 $(-7)^2=49$，尽管二项式中是减号，平方后仍为正。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$(x+9)(x-9) = x^2 - c$. What is $c$?",
        "zh": "$(x+9)(x-9) = x^2 - c$，求 $c$。"
      },
      "answer": "81",
      "accept": [
        "81",
        "81.0"
      ],
      "explanation": {
        "en": "Difference of squares gives $x^2-9^2 = x^2-81$, so $c=81$. Using $9$ instead of $9^2$ forgets to square the second term.",
        "zh": "平方差得到 $x^2-9^2 = x^2-81$，所以 $c=81$。用 $9$ 而不是 $9^2$ 是忘了给第二项平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Expand $(2x+3)^2$. What is the coefficient of $x$?",
        "zh": "展开 $(2x+3)^2$，$x$ 的系数是多少？"
      },
      "answer": "12",
      "accept": [
        "12",
        "+12",
        "12.0"
      ],
      "explanation": {
        "en": "$(2x+3)^2 = 4x^2+12x+9$; the middle term is $2(2x)(3)=12x$. Writing $6x$ forgets the factor of $2$ from the $2ab$ pattern.",
        "zh": "$(2x+3)^2 = 4x^2+12x+9$；中间项为 $2(2x)(3)=12x$。写成 $6x$ 是漏了 $2ab$ 公式中的因子 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Multiply $(x+5)(x-3)$. What is the constant term?",
        "zh": "展开 $(x+5)(x-3)$，常数项是多少？"
      },
      "answer": "-15",
      "accept": [
        "-15",
        "-15.0"
      ],
      "explanation": {
        "en": "The constant term is $(5)(-3) = -15$. A positive times a negative is negative, so $+15$ has the wrong sign.",
        "zh": "常数项为 $(5)(-3) = -15$。正数乘负数为负，因此 $+15$ 的符号错了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Distribute $4x(x^2-2x+7)$. What is the coefficient of $x^2$?",
        "zh": "分配 $4x(x^2-2x+7)$，$x^2$ 的系数是多少？"
      },
      "answer": "-8",
      "accept": [
        "-8",
        "-8.0"
      ],
      "explanation": {
        "en": "$4x \\cdot (-2x) = -8x^2$, so the coefficient is $-8$. Keeping it positive ignores the minus sign on $-2x$.",
        "zh": "$4x \\cdot (-2x) = -8x^2$，所以系数为 $-8$。保留为正是忽略了 $-2x$ 的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the difference of squares to compute $98 \\times 102$.",
        "zh": "用平方差计算 $98 \\times 102$。"
      },
      "answer": "9996",
      "accept": [
        "9996",
        "9996.0",
        "9,996"
      ],
      "explanation": {
        "en": "$98\\times 102 = (100-2)(100+2) = 100^2-2^2 = 10000-4 = 9996$. Rounding to $10000$ forgets to subtract $2^2$.",
        "zh": "$98\\times 102 = (100-2)(100+2) = 100^2-2^2 = 10000-4 = 9996$。直接取 $10000$ 是忘了减去 $2^2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use $(20+1)^2$ to compute $21^2$.",
        "zh": "用 $(20+1)^2$ 计算 $21^2$。"
      },
      "answer": "441",
      "accept": [
        "441",
        "441.0"
      ],
      "explanation": {
        "en": "$(20+1)^2 = 400 + 2(20)(1) + 1 = 400+40+1 = 441$. Squaring each part to get $400+1=401$ drops the middle term $2ab=40$.",
        "zh": "$(20+1)^2 = 400 + 2(20)(1) + 1 = 400+40+1 = 441$。只把每部分平方得到 $400+1=401$ 是漏了中间项 $2ab=40$。"
      }
    }
  ],
  "quadratic-expressions-factoring/factoring-quadratic-expressions": [
    {
      "type": "mc",
      "question": {
        "en": "Factor: $x^2+7x+12$.",
        "zh": "因式分解：$x^2+7x+12$。"
      },
      "choices": [
        "$(x+3)(x+4)$",
        "$(x+2)(x+6)$",
        "$(x+1)(x+12)$",
        "$(x-3)(x-4)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Find two numbers with product $12$ and sum $7$: those are $3$ and $4$. The pair $2$ and $6$ multiplies to $12$ but sums to $8$, so it fails the middle term.",
        "zh": "找乘积为 $12$、和为 $7$ 的两个数：即 $3$ 和 $4$。$2$ 与 $6$ 的乘积虽为 $12$，但和为 $8$，不满足中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $x^2-5x+6$.",
        "zh": "因式分解：$x^2-5x+6$。"
      },
      "choices": [
        "$(x+2)(x+3)$",
        "$(x-2)(x-3)$",
        "$(x-2)(x+3)$",
        "$(x-1)(x-6)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Product $+6$ with sum $-5$ means both numbers are negative: $-2$ and $-3$. Mixing signs as in $-2$ and $+3$ gives a product of $-6$, the wrong constant.",
        "zh": "乘积为 $+6$、和为 $-5$，说明两数都为负：$-2$ 和 $-3$。若符号一正一负如 $-2$ 与 $+3$，乘积为 $-6$，常数项错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor out the GCF: $6x^2+9x$.",
        "zh": "提取公因式：$6x^2+9x$。"
      },
      "choices": [
        "$x(6x+9)$",
        "$3(2x^2+3x)$",
        "$3x(2x+3)$",
        "$3x(2x+9)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The greatest common factor of $6x^2$ and $9x$ is $3x$, giving $3x(2x+3)$. Pulling out only $3$ or only $x$ leaves a common factor still inside, so it is not fully factored.",
        "zh": "$6x^2$ 与 $9x$ 的最大公因式是 $3x$，得 $3x(2x+3)$。若只提取 $3$ 或只提取 $x$，括号内仍有公因式，未完全分解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $x^2-49$.",
        "zh": "因式分解：$x^2-49$。"
      },
      "choices": [
        "$(x-7)^2$",
        "$(x+7)^2$",
        "$(x-7)(x-7)$",
        "$(x+7)(x-7)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "This is a difference of squares: $a^2-b^2=(a+b)(a-b)=(x+7)(x-7)$. A perfect-square form like $(x-7)^2$ would expand to $x^2-14x+49$, which has an extra middle term.",
        "zh": "这是平方差：$a^2-b^2=(a+b)(a-b)=(x+7)(x-7)$。完全平方形式如 $(x-7)^2$ 展开为 $x^2-14x+49$，多出一个中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $x^2+10x+25$.",
        "zh": "因式分解：$x^2+10x+25$。"
      },
      "choices": [
        "$(x+5)^2$",
        "$(x+5)(x-5)$",
        "$(x+10)^2$",
        "$(x+25)(x+1)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "This is a perfect-square trinomial: $x^2+2(5)x+5^2=(x+5)^2$. Treating it as a difference of squares $(x+5)(x-5)$ ignores the $+10x$ middle term.",
        "zh": "这是完全平方三项式：$x^2+2(5)x+5^2=(x+5)^2$。若当成平方差 $(x+5)(x-5)$，就忽略了 $+10x$ 中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $x^2+2x-15$.",
        "zh": "因式分解：$x^2+2x-15$。"
      },
      "choices": [
        "$(x-5)(x+3)$",
        "$(x+5)(x-3)$",
        "$(x-5)(x-3)$",
        "$(x+5)(x+3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Product $-15$ with sum $+2$: the numbers are $+5$ and $-3$. Reversing the signs to $-5$ and $+3$ would give a sum of $-2$, the wrong middle term.",
        "zh": "乘积为 $-15$、和为 $+2$：两数为 $+5$ 和 $-3$。若把符号反过来为 $-5$ 与 $+3$，和为 $-2$，中间项错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $2x^2+7x+3$.",
        "zh": "因式分解：$2x^2+7x+3$。"
      },
      "choices": [
        "$(2x-1)(x-3)$",
        "$(2x+3)(x+1)$",
        "$(2x+1)(x+3)$",
        "$(x+1)(x+3)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Check by expanding: $(2x+1)(x+3)=2x^2+6x+x+3=2x^2+7x+3$. The arrangement $(2x+3)(x+1)$ expands to $2x^2+5x+3$, giving the wrong middle term.",
        "zh": "展开验证：$(2x+1)(x+3)=2x^2+6x+x+3=2x^2+7x+3$。而 $(2x+3)(x+1)$ 展开为 $2x^2+5x+3$，中间项错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $3x^2-10x-8$.",
        "zh": "因式分解：$3x^2-10x-8$。"
      },
      "choices": [
        "$(3x-2)(x+4)$",
        "$(3x+4)(x-2)$",
        "$(x-4)(x+2)$",
        "$(3x+2)(x-4)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Split $-10x$ using factors of $3\\times(-8)=-24$ that sum to $-10$, namely $-12$ and $+2$: $3x^2-12x+2x-8=(3x+2)(x-4)$. The pair $(3x-2)(x+4)$ expands to $3x^2+10x-8$, the wrong sign on the middle term.",
        "zh": "用 $3\\times(-8)=-24$ 中和为 $-10$ 的因子 $-12$ 与 $+2$ 拆开 $-10x$：$3x^2-12x+2x-8=(3x+2)(x-4)$。而 $(3x-2)(x+4)$ 展开为 $3x^2+10x-8$，中间项符号错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $4x^2-9$.",
        "zh": "因式分解：$4x^2-9$。"
      },
      "choices": [
        "$(2x+3)(2x-3)$",
        "$(4x+3)(x-3)$",
        "$(2x-3)^2$",
        "$(2x+9)(2x-1)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Difference of squares: $(2x)^2-3^2=(2x+3)(2x-3)$. Writing $(2x-3)^2$ would produce a $-12x$ middle term instead of cancelling to zero.",
        "zh": "平方差：$(2x)^2-3^2=(2x+3)(2x-3)$。写成 $(2x-3)^2$ 会产生 $-12x$ 的中间项，而不是相互抵消为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor by grouping: $x^3+2x^2+3x+6$.",
        "zh": "分组分解：$x^3+2x^2+3x+6$。"
      },
      "choices": [
        "$(x+3)(x^2+2)$",
        "$(x+2)(x^2+3)$",
        "$x^2(x+2)+3$",
        "$(x+2)(x^2-3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Group: $x^2(x+2)+3(x+2)=(x+2)(x^2+3)$. Leaving $x^2(x+2)+3$ is not factored because the second group was not written as $3(x+2)$.",
        "zh": "分组：$x^2(x+2)+3(x+2)=(x+2)(x^2+3)$。写成 $x^2(x+2)+3$ 并未分解，因为第二组没有写成 $3(x+2)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor out the GCF: $12x^3-18x^2$.",
        "zh": "提取公因式：$12x^3-18x^2$。"
      },
      "choices": [
        "$3x^2(4x-6)$",
        "$6x(2x^2-3x)$",
        "$6x^2(2x-3)$",
        "$6x^2(2x-18)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The GCF of $12x^3$ and $18x^2$ is $6x^2$, leaving $6x^2(2x-3)$. Pulling out only $3x^2$ leaves $4x-6$, which still shares a factor of $2$, so it is not fully factored.",
        "zh": "$12x^3$ 与 $18x^2$ 的最大公因式是 $6x^2$，得 $6x^2(2x-3)$。若只提取 $3x^2$，剩下 $4x-6$ 仍有公因子 $2$，未完全分解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor: $9x^2-24x+16$.",
        "zh": "因式分解：$9x^2-24x+16$。"
      },
      "choices": [
        "$(3x+4)^2$",
        "$(9x-4)(x-4)$",
        "$(3x-4)(3x+4)$",
        "$(3x-4)^2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Perfect-square trinomial: $(3x)^2-2(3x)(4)+4^2=(3x-4)^2$. Using $(3x+4)^2$ gives a $+24x$ middle term, the wrong sign.",
        "zh": "完全平方三项式：$(3x)^2-2(3x)(4)+4^2=(3x-4)^2$。用 $(3x+4)^2$ 会得到 $+24x$ 中间项，符号错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factor $x^2+11x+24 = (x+a)(x+b)$ with $a<b$. What is $a$?",
        "zh": "将 $x^2+11x+24 = (x+a)(x+b)$ 分解，且 $a<b$。求 $a$。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Two numbers with product $24$ and sum $11$ are $3$ and $8$; the smaller is $3$. The pair $4$ and $6$ multiplies to $24$ but sums to $10$, not $11$.",
        "zh": "乘积为 $24$、和为 $11$ 的两数是 $3$ 和 $8$；较小者为 $3$。$4$ 与 $6$ 乘积为 $24$，但和为 $10$，不是 $11$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the greatest common factor of $15x^2+25x$? (Include the variable.)",
        "zh": "$15x^2+25x$ 的最大公因式是什么？（含变量。）"
      },
      "answer": "5x",
      "accept": [
        "5x",
        "5·x",
        "5*x",
        "5 x",
        "x5"
      ],
      "explanation": {
        "en": "The number GCF of $15$ and $25$ is $5$, and both terms contain $x$, so the GCF is $5x$, giving $5x(3x+5)$. Using just $5$ misses the shared variable factor.",
        "zh": "$15$ 与 $25$ 的数字最大公因数是 $5$，且两项都含 $x$，故最大公因式为 $5x$，得 $5x(3x+5)$。只用 $5$ 会漏掉共同的变量因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factor $x^2-64 = (x+b)(x-b)$. What is the positive value $b$?",
        "zh": "将 $x^2-64 = (x+b)(x-b)$ 分解。正值 $b$ 是多少？"
      },
      "answer": "8",
      "accept": [
        "8",
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "Since $64=8^2$, the difference of squares gives $(x+8)(x-8)$, so $b=8$. Using $64$ itself forgets to take the square root.",
        "zh": "因为 $64=8^2$，平方差得到 $(x+8)(x-8)$，所以 $b=8$。直接用 $64$ 是忘了开平方根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factor $x^2-12x+36 = (x-n)^2$. What is $n$?",
        "zh": "将 $x^2-12x+36 = (x-n)^2$ 分解。求 $n$。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Since $36=6^2$ and $2(6)=12$ matches the middle term, $n=6$. Using $12$ confuses the middle coefficient with the number being squared.",
        "zh": "因为 $36=6^2$ 且 $2(6)=12$ 与中间项吻合，所以 $n=6$。用 $12$ 是把中间系数与被平方的数混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factor completely: $4x^2-16 = 4(x+a)(x-a)$. What is $a$?",
        "zh": "完全分解：$4x^2-16 = 4(x+a)(x-a)$。求 $a$。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "First factor out $4$: $4(x^2-4)$, then the difference of squares gives $4(x+2)(x-2)$, so $a=2$. Skipping the GCF step would leave $(2x+4)(2x-4)$, not fully simplified.",
        "zh": "先提取 $4$：$4(x^2-4)$，再用平方差得 $4(x+2)(x-2)$，所以 $a=2$。若跳过提取公因式，会得到 $(2x+4)(2x-4)$，未完全化简。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What number makes $x^2+14x+\\underline{\\ \\ }$ a perfect-square trinomial?",
        "zh": "填什么数使 $x^2+14x+\\underline{\\ \\ }$ 成为完全平方三项式？"
      },
      "answer": "49",
      "accept": [
        "49",
        "49.0"
      ],
      "explanation": {
        "en": "Take half of $14$ to get $7$, then square it: $7^2=49$, giving $(x+7)^2$. Using half of $14$ directly ($7$) forgets the squaring step.",
        "zh": "取 $14$ 的一半得 $7$，再平方：$7^2=49$，得 $(x+7)^2$。直接用 $14$ 的一半（$7$）是忘了平方这一步。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factor $3x^2+12x = 3x(x+\\underline{\\ \\ })$. What number fills the blank?",
        "zh": "将 $3x^2+12x = 3x(x+\\underline{\\ \\ })$ 分解。空白处填什么数？"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Dividing $12x$ by the GCF $3x$ gives $4$, so the factor is $3x(x+4)$. Dividing only by $3$ would wrongly leave $4x$ inside.",
        "zh": "用公因式 $3x$ 去除 $12x$ 得 $4$，故为 $3x(x+4)$。若只除以 $3$，括号内会错误地剩下 $4x$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factor $25-x^2 = (5+x)(5-x)$ is built from which positive number squared to $25$?",
        "zh": "$25-x^2 = (5+x)(5-x)$ 中，哪个正数的平方等于 $25$？"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Since $25=5^2$, the difference of squares uses $5$: $(5+x)(5-x)$. Using $25$ itself forgets to take the square root of the constant.",
        "zh": "因为 $25=5^2$，平方差用的是 $5$：$(5+x)(5-x)$。直接用 $25$ 是忘了对常数开平方根。"
      }
    }
  ],
  "quadratic-functions/graphing-quadratic-functions": [
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = (x - 3)^2 + 2$?",
        "zh": "$y = (x - 3)^2 + 2$ 的顶点是什么？"
      },
      "choices": [
        "$(3, 2)$",
        "$(3, -2)$",
        "$(-3, 2)$",
        "$(-3, -2)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Here $h = 3$ and $k = 2$, so the vertex is $(3, 2)$. The most common error is not flipping the sign inside the parentheses and reading $h$ as $-3$.",
        "zh": "顶点式 $y = a(x - h)^2 + k$ 中，顶点为 $(h, k)$。这里 $h = 3$，$k = 2$，所以顶点是 $(3, 2)$。最常见的错误是没有把括号里的符号取反，把 $h$ 读成 $-3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the axis of symmetry of $y = x^2 - 6x + 5$?",
        "zh": "$y = x^2 - 6x + 5$ 的对称轴是什么？"
      },
      "choices": [
        "$x = 6$",
        "$x = 3$",
        "$x = -3$",
        "$x = -6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The axis of symmetry is $x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$. Forgetting the leading negative sign in the formula, or dividing by $a$ but not $2a$, gives a value like $x = 6$ or $x = -3$.",
        "zh": "对称轴为 $x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$。忘记公式前面的负号，或者只除以 $a$ 而不是 $2a$，会得到像 $x = 6$ 或 $x = -3$ 这样的值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Describe the graph of $y = -2x^2$ compared with the parent function $y = x^2$.",
        "zh": "与母函数 $y = x^2$ 相比，描述 $y = -2x^2$ 的图像。"
      },
      "choices": [
        "Opens up, narrower than $y = x^2$",
        "Opens down, wider than $y = x^2$",
        "Opens down, narrower than $y = x^2$",
        "Opens up, wider than $y = x^2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The negative sign on $a$ makes the parabola open downward, and $|a| = 2 > 1$ makes it narrower (a vertical stretch). Confusing $|a| > 1$ with 'wider' reverses the stretch/compression effect.",
        "zh": "$a$ 前面的负号使抛物线开口向下，而 $|a| = 2 > 1$ 使它更窄（竖直拉伸）。把 $|a| > 1$ 当成'更宽'就把拉伸和压缩的效果搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $y$-intercept of $y = x^2 - 4x + 7$?",
        "zh": "$y = x^2 - 4x + 7$ 的 $y$ 轴截距是什么？"
      },
      "choices": [
        "$(7, 0)$",
        "$(0, -7)$",
        "$(-7, 0)$",
        "$(0, 7)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The $y$-intercept happens when $x = 0$, giving $y = 7$, so the point is $(0, 7)$. It equals the constant term $c$. Swapping the coordinates to $(7, 0)$ confuses the $y$-intercept with an $x$-intercept.",
        "zh": "$y$ 轴截距出现在 $x = 0$ 时，得 $y = 7$，所以点是 $(0, 7)$，即常数项 $c$。把坐标写成 $(7, 0)$ 是把 $y$ 轴截距和 $x$ 轴截距搞混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which form of a quadratic most directly reveals the vertex?",
        "zh": "二次函数的哪种形式最直接地显示顶点？"
      },
      "choices": [
        "Vertex form $a(x - h)^2 + k$",
        "Factored form $a(x - r_1)(x - r_2)$",
        "Slope-intercept form",
        "Standard form $ax^2 + bx + c$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Vertex form $a(x - h)^2 + k$ shows the vertex $(h, k)$ immediately. Factored form reveals the $x$-intercepts, and standard form reveals the $y$-intercept, but neither hands you the vertex without extra work.",
        "zh": "顶点式 $a(x - h)^2 + k$ 直接显示顶点 $(h, k)$。因式分解式显示 $x$ 轴截距，标准式显示 $y$ 轴截距，但两者都需要额外计算才能得到顶点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What are the $x$-intercepts of $y = (x - 2)(x + 5)$?",
        "zh": "$y = (x - 2)(x + 5)$ 的 $x$ 轴截距是什么？"
      },
      "choices": [
        "$x = -2,\\; x = 5$",
        "$x = 2,\\; x = -5$",
        "$x = 2,\\; x = 5$",
        "$x = -2,\\; x = -5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set each factor to zero: $x - 2 = 0 \\rightarrow x = 2$ and $x + 5 = 0 \\rightarrow x = -5$. Forgetting to flip the sign of each root (reading the numbers straight from the factors) gives $x = -2, 5$.",
        "zh": "令每个因式为零：$x - 2 = 0 \\rightarrow x = 2$，$x + 5 = 0 \\rightarrow x = -5$。忘记把每个根的符号取反（直接照抄因式里的数字）会得到 $x = -2, 5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $y = (x + 4)^2$ shifted from the parent $y = x^2$?",
        "zh": "$y = (x + 4)^2$ 的图像相对于母函数 $y = x^2$ 如何平移？"
      },
      "choices": [
        "Right 4 units",
        "Up 4 units",
        "Left 4 units",
        "Down 4 units"
      ],
      "answer": 2,
      "explanation": {
        "en": "A $+4$ inside the parentheses shifts the graph LEFT 4 units, because the vertex moves to where $x + 4 = 0$, i.e. $x = -4$. Reading $+4$ as 'right' is the classic sign-inside-the-parentheses mistake.",
        "zh": "括号内的 $+4$ 使图像向左平移 4 个单位，因为顶点移到 $x + 4 = 0$ 处，即 $x = -4$。把 $+4$ 读作'向右'是典型的括号内符号错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = x^2 + 8x + 10$?",
        "zh": "$y = x^2 + 8x + 10$ 的顶点是什么？"
      },
      "choices": [
        "$(4, 6)$",
        "$(4, -6)$",
        "$(-4, 6)$",
        "$(-4, -6)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The vertex $x$-value is $-\\frac{b}{2a} = -\\frac{8}{2} = -4$; then $y = (-4)^2 + 8(-4) + 10 = 16 - 32 + 10 = -6$, giving $(-4, -6)$. Dropping the negative sign on $x$ leads to $(4, -6)$.",
        "zh": "顶点的 $x$ 值为 $-\\frac{b}{2a} = -\\frac{8}{2} = -4$；再代入 $y = (-4)^2 + 8(-4) + 10 = 16 - 32 + 10 = -6$，得 $(-4, -6)$。丢掉 $x$ 的负号会得到 $(4, -6)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many $x$-intercepts does $y = x^2 + 2x + 5$ have?",
        "zh": "$y = x^2 + 2x + 5$ 有多少个 $x$ 轴截距？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$2$",
        "$3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The discriminant is $b^2 - 4ac = 4 - 20 = -16 < 0$, so there are no real $x$-intercepts. Assuming every parabola must cross the $x$-axis (answering $2$) ignores that a graph can sit entirely above the axis.",
        "zh": "判别式为 $b^2 - 4ac = 4 - 20 = -16 < 0$，所以没有实数 $x$ 轴截距。以为每条抛物线都必须穿过 $x$ 轴（答 $2$）忽略了图像可能整体位于 $x$ 轴上方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which parabola is the widest?",
        "zh": "哪条抛物线最宽？"
      },
      "choices": [
        "$y = 3x^2$",
        "$y = 0.5x^2$",
        "$y = x^2$",
        "$y = -2x^2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Width depends on $|a|$: the SMALLER $|a|$ is, the wider the parabola. Here $|0.5|$ is smallest, so $y = 0.5x^2$ is widest. Picking $y = 3x^2$ reverses the rule; the sign in $-2x^2$ only affects direction, not width.",
        "zh": "宽度取决于 $|a|$：$|a|$ 越小，抛物线越宽。这里 $|0.5|$ 最小，所以 $y = 0.5x^2$ 最宽。选 $y = 3x^2$ 是把规则搞反了；$-2x^2$ 的符号只影响开口方向，不影响宽度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A parabola opens upward with vertex $(1, -4)$. What is its minimum value?",
        "zh": "一条抛物线开口向上，顶点为 $(1, -4)$。它的最小值是多少？"
      },
      "choices": [
        "$1$",
        "$4$",
        "$-4$",
        "$-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "For an upward parabola the minimum is the vertex's $y$-value, which is $-4$. Reporting the $x$-coordinate $1$ instead answers 'where' the minimum occurs, not the minimum value itself.",
        "zh": "对于开口向上的抛物线，最小值就是顶点的 $y$ 值，即 $-4$。报出 $x$ 坐标 $1$ 回答的是最小值出现在'哪里'，而不是最小值本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $y = x^2 + 2$ shifted from the parent $y = x^2$?",
        "zh": "$y = x^2 + 2$ 的图像相对于母函数 $y = x^2$ 如何平移？"
      },
      "choices": [
        "Down 2 units",
        "Left 2 units",
        "Right 2 units",
        "Up 2 units"
      ],
      "answer": 3,
      "explanation": {
        "en": "Adding $2$ outside the squared term shifts the whole graph UP 2 units. Treating the $+2$ as a horizontal (left/right) shift confuses an outside constant with a change inside the parentheses.",
        "zh": "在平方项外面加 $2$ 使整个图像向上平移 2 个单位。把 $+2$ 当作水平（左右）平移，是把外部常数和括号内的变化搞混了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the axis of symmetry of $y = 2x^2 - 8x + 1$. Enter the value of $x$.",
        "zh": "求 $y = 2x^2 - 8x + 1$ 的对称轴。输入 $x$ 的值。"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "+2",
        "x=2",
        "x = 2"
      ],
      "explanation": {
        "en": "The axis of symmetry is $x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$. Forgetting to multiply $a$ by 2 in the denominator would give $x = 4$.",
        "zh": "对称轴为 $x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$。忘记在分母里把 $a$ 乘以 2 会得到 $x = 4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-coordinate of the $y$-intercept of $y = 3x^2 - 2x - 9$?",
        "zh": "$y = 3x^2 - 2x - 9$ 的 $y$ 轴截距的 $y$ 坐标是多少？"
      },
      "answer": "-9",
      "accept": [
        "-9",
        "-9.0",
        "-9.00"
      ],
      "explanation": {
        "en": "Set $x = 0$: $y = 3(0) - 2(0) - 9 = -9$. The $y$-intercept is always the constant term $c$. Dropping the negative sign would wrongly give $9$.",
        "zh": "令 $x = 0$：$y = 3(0) - 2(0) - 9 = -9$。$y$ 轴截距总是常数项 $c$。丢掉负号会错误地得到 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-coordinate of the vertex of $y = x^2 - 10x + 3$.",
        "zh": "求 $y = x^2 - 10x + 3$ 顶点的 $x$ 坐标。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0",
        "+5",
        "x=5",
        "x = 5"
      ],
      "explanation": {
        "en": "The vertex $x$-value is $-\\frac{b}{2a} = -\\frac{-10}{2(1)} = 5$. Missing the negative sign in the formula would give $-5$.",
        "zh": "顶点的 $x$ 值为 $-\\frac{b}{2a} = -\\frac{-10}{2(1)} = 5$。漏掉公式里的负号会得到 $-5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $y$-coordinate of the vertex of $y = x^2 - 10x + 3$.",
        "zh": "求 $y = x^2 - 10x + 3$ 顶点的 $y$ 坐标。"
      },
      "answer": "-22",
      "accept": [
        "-22",
        "-22.0"
      ],
      "explanation": {
        "en": "Using $x = 5$: $y = 5^2 - 10(5) + 3 = 25 - 50 + 3 = -22$. Substituting the wrong $x$, or forgetting the $+3$, changes the result.",
        "zh": "代入 $x = 5$：$y = 5^2 - 10(5) + 3 = 25 - 50 + 3 = -22$。代错 $x$ 或忘记 $+3$ 都会改变结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the positive $x$-intercept of $y = x^2 - 9$.",
        "zh": "求 $y = x^2 - 9$ 的正 $x$ 轴截距。"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "+3",
        "x=3",
        "x = 3"
      ],
      "explanation": {
        "en": "Set $x^2 - 9 = 0$, so $x^2 = 9$ and $x = \\pm 3$; the positive intercept is $3$. Solving $x^2 = 9$ as $x = 9$ forgets to take the square root.",
        "zh": "令 $x^2 - 9 = 0$，则 $x^2 = 9$，$x = \\pm 3$；正截距为 $3$。把 $x^2 = 9$ 解成 $x = 9$ 是忘了开平方根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $y = -(x + 1)^2 + 9$, what is the maximum value of the function?",
        "zh": "对于 $y = -(x + 1)^2 + 9$，函数的最大值是多少？"
      },
      "answer": "9",
      "accept": [
        "9",
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "Because $a = -1 < 0$ the parabola opens down, so its maximum is the vertex's $k$-value, which is $9$. Reporting the $x$-coordinate $-1$ answers where the max occurs, not the max value.",
        "zh": "因为 $a = -1 < 0$，抛物线开口向下，所以最大值是顶点的 $k$ 值，即 $9$。报出 $x$ 坐标 $-1$ 回答的是最大值出现的位置，而不是最大值本身。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $y = (x - 7)^2 + 2$, what is the $x$-coordinate of the vertex?",
        "zh": "对于 $y = (x - 7)^2 + 2$，顶点的 $x$ 坐标是多少？"
      },
      "answer": "7",
      "accept": [
        "7",
        "7.0",
        "+7",
        "x=7",
        "x = 7"
      ],
      "explanation": {
        "en": "In vertex form the $x$-coordinate is $h$, where $x - h = x - 7$, so $h = 7$. Reading the $-7$ literally without flipping the sign would give $-7$.",
        "zh": "顶点式中 $x$ 坐标是 $h$，由 $x - h = x - 7$ 得 $h = 7$。直接照抄 $-7$ 而不取反符号会得到 $-7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many units to the RIGHT is $y = (x - 6)^2$ shifted from $y = x^2$?",
        "zh": "$y = (x - 6)^2$ 相对于 $y = x^2$ 向右平移了多少个单位？"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "6 units",
        "six"
      ],
      "explanation": {
        "en": "A $-6$ inside the parentheses shifts the graph RIGHT 6 units, since the vertex moves to $x = 6$. Reading $-6$ as a leftward shift reverses the inside-the-parentheses sign rule.",
        "zh": "括号内的 $-6$ 使图像向右平移 6 个单位，因为顶点移到 $x = 6$。把 $-6$ 读成向左平移就把括号内的符号规则搞反了。"
      }
    }
  ],
  "quadratic-functions/modeling-with-quadratic-functions": [
    {
      "type": "mc",
      "question": {
        "en": "A ball's height (feet) is $h = -16t^2 + 32t$, where $t$ is in seconds. When does the ball hit the ground?",
        "zh": "一个球的高度（英尺）为 $h = -16t^2 + 32t$，其中 $t$ 以秒为单位。球何时落地？"
      },
      "choices": [
        "$2$ s",
        "$1$ s",
        "$0$ s",
        "$32$ s"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set $h = 0$: $-16t^2 + 32t = 0 \\rightarrow -16t(t - 2) = 0$, giving $t = 0$ (launch) or $t = 2$. The ground-hit is $t = 2$. Choosing $t = 1$ mistakes the time of maximum height for the landing time.",
        "zh": "令 $h = 0$：$-16t^2 + 32t = 0 \\rightarrow -16t(t - 2) = 0$，得 $t = 0$（发射）或 $t = 2$。落地时间是 $t = 2$。选 $t = 1$ 是把最大高度的时刻误当成落地时刻。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $h = -16t^2 + 32t$, at what time does the ball reach its maximum height?",
        "zh": "对于 $h = -16t^2 + 32t$，球在什么时刻达到最大高度？"
      },
      "choices": [
        "$2$ s",
        "$1$ s",
        "$16$ s",
        "$0.5$ s"
      ],
      "answer": 1,
      "explanation": {
        "en": "Max height occurs at the vertex, $t = -\\frac{b}{2a} = -\\frac{32}{2(-16)} = 1$ s. Using $t = 2$ here confuses the landing time with the time of the peak.",
        "zh": "最大高度出现在顶点处，$t = -\\frac{b}{2a} = -\\frac{32}{2(-16)} = 1$ 秒。在这里用 $t = 2$ 是把落地时间和最高点时刻搞混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $h = -16t^2 + 32t$, what is the maximum height reached?",
        "zh": "对于 $h = -16t^2 + 32t$，达到的最大高度是多少？"
      },
      "choices": [
        "$32$ ft",
        "$8$ ft",
        "$16$ ft",
        "$1$ ft"
      ],
      "answer": 2,
      "explanation": {
        "en": "At the peak $t = 1$: $h = -16(1)^2 + 32(1) = -16 + 32 = 16$ ft. Reporting $t = 1$ as the height instead of substituting it back into $h$ is a common slip.",
        "zh": "在最高点 $t = 1$：$h = -16(1)^2 + 32(1) = -16 + 32 = 16$ 英尺。把 $t = 1$ 当作高度而不代回 $h$ 是常见的失误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A store's revenue is $R = -x^2 + 100x$, where $x$ is the price. What price maximizes revenue?",
        "zh": "某商店的收入为 $R = -x^2 + 100x$，其中 $x$ 为价格。什么价格使收入最大？"
      },
      "choices": [
        "$100$",
        "$25$",
        "$0$",
        "$50$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Maximum revenue is at the vertex, $x = -\\frac{b}{2a} = -\\frac{100}{2(-1)} = 50$. Choosing $100$ uses the coefficient of $x$ directly instead of applying the vertex formula.",
        "zh": "最大收入在顶点处，$x = -\\frac{b}{2a} = -\\frac{100}{2(-1)} = 50$。选 $100$ 是直接用了 $x$ 的系数，而没有应用顶点公式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a projectile's height function, what does a zero (root) of the function represent?",
        "zh": "对于抛体的高度函数，函数的零点（根）代表什么？"
      },
      "choices": [
        "The time when the object is at ground level (height $0$)",
        "The maximum height reached",
        "The starting height",
        "The time of maximum height"
      ],
      "answer": 0,
      "explanation": {
        "en": "A zero is where height $= 0$, i.e. the object is on the ground (launch or landing). Confusing a zero with the maximum height mixes up an $x$-axis crossing with the vertex.",
        "zh": "零点是高度 $= 0$ 的地方，即物体位于地面（发射或落地）。把零点和最大高度混淆，是把 $x$ 轴的交点和顶点搞混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle has area $A = x(20 - x)$, where $x$ is one side length. What is the maximum area?",
        "zh": "一个矩形的面积为 $A = x(20 - x)$，其中 $x$ 是一条边长。最大面积是多少？"
      },
      "choices": [
        "$40$",
        "$100$",
        "$20$",
        "$400$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Expand to $A = -x^2 + 20x$; the vertex is at $x = 10$, giving $A = 10(20 - 10) = 100$. Reporting $x = 10$ or the perimeter-like value $40$ instead of computing $A$ misses the actual area.",
        "zh": "展开为 $A = -x^2 + 20x$；顶点在 $x = 10$，得 $A = 10(20 - 10) = 100$。报出 $x = 10$ 或类似周长的值 $40$ 而不去计算 $A$，就得不到真正的面积。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a profit model, what does the vertex of the (downward) parabola represent?",
        "zh": "在利润模型中，（开口向下的）抛物线的顶点代表什么？"
      },
      "choices": [
        "The starting profit",
        "The break-even points",
        "The maximum profit and the number of units that achieve it",
        "The price when profit is zero"
      ],
      "answer": 2,
      "explanation": {
        "en": "The vertex of a downward parabola gives the maximum $y$-value (max profit) and the $x$-value that produces it. The break-even points are the zeros, where profit $= 0$, not the vertex.",
        "zh": "开口向下抛物线的顶点给出最大 $y$ 值（最大利润）以及产生它的 $x$ 值。盈亏平衡点是零点，即利润 $= 0$ 的地方，而不是顶点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rocket's height (meters) is $h = -5t^2 + 20t + 25$. What is its initial height?",
        "zh": "一枚火箭的高度（米）为 $h = -5t^2 + 20t + 25$。它的初始高度是多少？"
      },
      "choices": [
        "$5$ m",
        "$20$ m",
        "$45$ m",
        "$25$ m"
      ],
      "answer": 3,
      "explanation": {
        "en": "Initial height is $h$ at $t = 0$: $h = -5(0)^2 + 20(0) + 25 = 25$ m, the constant term. Using the coefficient $20$ of $t$ confuses initial velocity with initial height.",
        "zh": "初始高度是 $t = 0$ 时的 $h$：$h = -5(0)^2 + 20(0) + 25 = 25$ 米，即常数项。用 $t$ 的系数 $20$ 是把初速度和初始高度搞混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For revenue $R = -2x^2 + 40x$, what value of $x$ maximizes revenue?",
        "zh": "对于收入 $R = -2x^2 + 40x$，什么样的 $x$ 值使收入最大？"
      },
      "choices": [
        "$10$",
        "$40$",
        "$20$",
        "$5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The vertex is at $x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = \\frac{40}{4} = 10$. Forgetting to multiply $a$ by 2, giving $x = 20$, is a frequent error.",
        "zh": "顶点在 $x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = \\frac{40}{4} = 10$。忘记把 $a$ 乘以 2 而得到 $x = 20$ 是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A projectile's height has a negative leading coefficient. This tells us the graph has:",
        "zh": "某抛体的高度函数首项系数为负。这说明图像具有："
      },
      "choices": [
        "A minimum value",
        "A maximum value",
        "No vertex",
        "Two maxima"
      ],
      "answer": 1,
      "explanation": {
        "en": "A negative leading coefficient means the parabola opens downward, so its vertex is the highest point — a maximum. Expecting a minimum reverses the meaning of the sign of $a$.",
        "zh": "首项系数为负意味着抛物线开口向下，所以顶点是最高点——即最大值。以为是最小值就把 $a$ 的符号含义搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball is thrown from a cliff: $h = -16t^2 + 48t + 160$ (feet). When does it hit the ground?",
        "zh": "从悬崖上抛出一个球：$h = -16t^2 + 48t + 160$（英尺）。它何时落地？"
      },
      "choices": [
        "$10$ s",
        "$2$ s",
        "$5$ s",
        "$-2$ s"
      ],
      "answer": 2,
      "explanation": {
        "en": "Set $h = 0$ and divide by $-16$: $t^2 - 3t - 10 = 0 \\rightarrow (t - 5)(t + 2) = 0$, so $t = 5$ or $t = -2$. Time cannot be negative, so $t = 5$ s. Keeping $t = -2$ ignores that negative time is not physical.",
        "zh": "令 $h = 0$ 并除以 $-16$：$t^2 - 3t - 10 = 0 \\rightarrow (t - 5)(t + 2) = 0$，得 $t = 5$ 或 $t = -2$。时间不能为负，所以 $t = 5$ 秒。保留 $t = -2$ 是忽略了负时间没有物理意义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A profit model is $P = -(x - 30)^2 + 900$. What is the maximum profit?",
        "zh": "利润模型为 $P = -(x - 30)^2 + 900$。最大利润是多少？"
      },
      "choices": [
        "$30$",
        "$-900$",
        "$0$",
        "$900$"
      ],
      "answer": 3,
      "explanation": {
        "en": "In vertex form the maximum is the $k$-value, $900$ (achieved at $x = 30$). Reporting $x = 30$ answers how many units, not the profit itself.",
        "zh": "顶点式中最大值是 $k$ 值，即 $900$（在 $x = 30$ 时达到）。报出 $x = 30$ 回答的是多少件产品，而不是利润本身。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball's height is $h = -16t^2 + 64t$ (feet). At what time (seconds) does it reach maximum height?",
        "zh": "一个球的高度为 $h = -16t^2 + 64t$（英尺）。它在什么时刻（秒）达到最大高度？"
      },
      "answer": "2",
      "accept": [
        "2",
        "2.0",
        "2 s",
        "2 seconds",
        "+2"
      ],
      "explanation": {
        "en": "Max height is at the vertex $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ s. Using the landing time $t = 4$ instead would be incorrect for the peak.",
        "zh": "最大高度在顶点 $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ 秒。用落地时间 $t = 4$ 来表示最高点是错的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $h = -16t^2 + 64t$, what is the maximum height in feet?",
        "zh": "对于 $h = -16t^2 + 64t$，最大高度是多少英尺？"
      },
      "answer": "64",
      "accept": [
        "64",
        "64.0",
        "64 ft",
        "64 feet"
      ],
      "explanation": {
        "en": "At $t = 2$: $h = -16(2)^2 + 64(2) = -64 + 128 = 64$ ft. Reporting the time $2$ instead of substituting back into $h$ is a common mistake.",
        "zh": "在 $t = 2$：$h = -16(2)^2 + 64(2) = -64 + 128 = 64$ 英尺。报出时间 $2$ 而不代回 $h$ 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Revenue is $R = -x^2 + 80x$. What value of $x$ maximizes revenue?",
        "zh": "收入为 $R = -x^2 + 80x$。什么样的 $x$ 值使收入最大？"
      },
      "answer": "40",
      "accept": [
        "40",
        "40.0",
        "+40",
        "x=40",
        "x = 40"
      ],
      "explanation": {
        "en": "The vertex is at $x = -\\frac{b}{2a} = -\\frac{80}{2(-1)} = 40$. Using $80$ directly skips dividing by $2a$.",
        "zh": "顶点在 $x = -\\frac{b}{2a} = -\\frac{80}{2(-1)} = 40$。直接用 $80$ 是漏了除以 $2a$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $R = -x^2 + 80x$, what is the maximum revenue?",
        "zh": "对于 $R = -x^2 + 80x$，最大收入是多少？"
      },
      "answer": "1600",
      "accept": [
        "1600",
        "1600.0",
        "1,600"
      ],
      "explanation": {
        "en": "At $x = 40$: $R = -(40)^2 + 80(40) = -1600 + 3200 = 1600$. Reporting $x = 40$ gives the input, not the revenue value.",
        "zh": "在 $x = 40$：$R = -(40)^2 + 80(40) = -1600 + 3200 = 1600$。报出 $x = 40$ 给的是自变量，而不是收入值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A projectile's height is $h = -16t^2 + 96t$ (feet). At what time (seconds, $t > 0$) does it hit the ground?",
        "zh": "某抛体的高度为 $h = -16t^2 + 96t$（英尺）。它在什么时刻（秒，$t > 0$）落地？"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0",
        "6 s",
        "6 seconds",
        "+6"
      ],
      "explanation": {
        "en": "Set $h = 0$: $-16t(t - 6) = 0$, so $t = 0$ or $t = 6$. The nonzero landing time is $t = 6$ s. Choosing the peak time $t = 3$ answers a different question.",
        "zh": "令 $h = 0$：$-16t(t - 6) = 0$，得 $t = 0$ 或 $t = 6$。非零的落地时间是 $t = 6$ 秒。选最高点时刻 $t = 3$ 回答的是另一个问题。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle has area $A = x(30 - x)$. What is the maximum area?",
        "zh": "一个矩形的面积为 $A = x(30 - x)$。最大面积是多少？"
      },
      "answer": "225",
      "accept": [
        "225",
        "225.0"
      ],
      "explanation": {
        "en": "Expand to $A = -x^2 + 30x$; the vertex is at $x = 15$, so $A = 15(30 - 15) = 225$. Reporting $x = 15$ gives the side length, not the area.",
        "zh": "展开为 $A = -x^2 + 30x$；顶点在 $x = 15$，所以 $A = 15(30 - 15) = 225$。报出 $x = 15$ 给的是边长，而不是面积。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball's height is $h = -5t^2 + 30t$ (meters). At what time (seconds) is the height greatest?",
        "zh": "一个球的高度为 $h = -5t^2 + 30t$（米）。在什么时刻（秒）高度最大？"
      },
      "answer": "3",
      "accept": [
        "3",
        "3.0",
        "3 s",
        "3 seconds",
        "+3"
      ],
      "explanation": {
        "en": "The vertex is at $t = -\\frac{b}{2a} = -\\frac{30}{2(-5)} = 3$ s. Using the landing time $t = 6$ instead would answer when it hits the ground, not the peak.",
        "zh": "顶点在 $t = -\\frac{b}{2a} = -\\frac{30}{2(-5)} = 3$ 秒。用落地时间 $t = 6$ 回答的是何时落地，而不是最高点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A company's profit is $P = -(x - 12)^2 + 50$, where $x$ is the number of units (thousands). How many units (thousands) maximize profit?",
        "zh": "某公司的利润为 $P = -(x - 12)^2 + 50$，其中 $x$ 为产品数量（千件）。多少千件产品使利润最大？"
      },
      "answer": "12",
      "accept": [
        "12",
        "12.0",
        "+12",
        "x=12",
        "x = 12"
      ],
      "explanation": {
        "en": "In vertex form $P = -(x - h)^2 + k$, profit peaks at $x = h = 12$. Reporting the maximum profit $50$ answers how much, not how many units.",
        "zh": "顶点式 $P = -(x - h)^2 + k$ 中，利润在 $x = h = 12$ 处最大。报出最大利润 $50$ 回答的是多少利润，而不是多少件产品。"
      }
    }
  ],
  "solving-quadratic-equations/solving-by-factoring-and-square-roots": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $(x-3)(x+5)=0$ using the zero-product property.",
        "zh": "用零积性质求解 $(x-3)(x+5)=0$。"
      },
      "choices": [
        "$x=3$ or $x=-5$",
        "$x=-3$ or $x=5$",
        "$x=3$ or $x=5$",
        "$x=-3$ or $x=-5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The zero-product property says each factor may equal 0: $x-3=0$ gives $x=3$, and $x+5=0$ gives $x=-5$. A common error is flipping the signs and reading the roots straight off the factors ($-3$ and $5$); instead set each factor to zero and solve.",
        "zh": "零积性质表示每个因式都可能等于 0：$x-3=0$ 得 $x=3$，$x+5=0$ 得 $x=-5$。常见错误是直接把因式里的数当作根并弄反符号（$-3$ 和 $5$）；应把每个因式设为零再求解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2=49$ using the square-root method.",
        "zh": "用平方根法求解 $x^2=49$。"
      },
      "choices": [
        "$x=7$",
        "$x=\\pm7$",
        "$x=24.5$",
        "$x=\\pm24.5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Taking the square root of both sides gives $x=\\pm\\sqrt{49}=\\pm7$. Two mistakes to avoid: keeping only the positive root, and dividing 49 by 2 instead of taking a square root.",
        "zh": "两边开平方得 $x=\\pm\\sqrt{49}=\\pm7$。要避免两个错误：只保留正根，以及把 49 除以 2 而不是开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2-7x+12=0$ by factoring.",
        "zh": "用因式分解法求解 $x^2-7x+12=0$。"
      },
      "choices": [
        "$x=-3$ or $x=-4$",
        "$x=2$ or $x=6$",
        "$x=3$ or $x=4$",
        "$x=1$ or $x=12$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Find two numbers multiplying to $12$ and adding to $-7$: those are $-3$ and $-4$, so $(x-3)(x-4)=0$ and $x=3$ or $x=4$. Picking $-3,-4$ as the roots ignores that a factor $(x-3)$ makes $x$ positive. The pair $2,6$ multiplies to 12 but adds to 8, not $-7$.",
        "zh": "找两个数，乘积为 $12$、和为 $-7$：即 $-3$ 和 $-4$，所以 $(x-3)(x-4)=0$，$x=3$ 或 $x=4$。把 $-3,-4$ 当作根忽略了因式 $(x-3)$ 使 $x$ 为正。$2,6$ 乘积为 12 但和为 8，不是 $-7$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2+6x=0$ by factoring.",
        "zh": "用因式分解法求解 $x^2+6x=0$。"
      },
      "choices": [
        "$x=6$ only",
        "$x=-6$ only",
        "$x=0$ or $x=6$",
        "$x=0$ or $x=-6$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor out $x$: $x(x+6)=0$, so $x=0$ or $x+6=0$ giving $x=-6$. The most common slip is dividing both sides by $x$ and losing the solution $x=0$; never divide by a variable that could be zero.",
        "zh": "提取公因式 $x$：$x(x+6)=0$，所以 $x=0$ 或 $x+6=0$ 得 $x=-6$。最常见的失误是两边同除以 $x$，从而丢失解 $x=0$；绝不要除以可能为零的变量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2=20$, giving the exact answer.",
        "zh": "求解 $x^2=20$，给出精确答案。"
      },
      "choices": [
        "$x=\\pm2\\sqrt{5}$",
        "$x=\\pm4\\sqrt{5}$",
        "$x=\\pm10$",
        "$x=\\pm\\sqrt{10}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$x=\\pm\\sqrt{20}=\\pm\\sqrt{4\\cdot5}=\\pm2\\sqrt{5}$. Writing $\\pm10$ comes from halving 20 rather than taking a root, and $\\pm\\sqrt{10}$ comes from halving under the radical.",
        "zh": "$x=\\pm\\sqrt{20}=\\pm\\sqrt{4\\cdot5}=\\pm2\\sqrt{5}$。写成 $\\pm10$ 是把 20 减半而非开方，$\\pm\\sqrt{10}$ 是把根号内的数减半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What number completes the square for $x^2+8x+\\underline{\\ \\ }$?",
        "zh": "要对 $x^2+8x+\\underline{\\ \\ }$ 配方，应填入什么数？"
      },
      "choices": [
        "$4$",
        "$16$",
        "$8$",
        "$64$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Take half of the coefficient of $x$ and square it: $(8/2)^2=4^2=16$, giving $(x+4)^2$. Using $4$ stops after halving without squaring, and $64$ squares 8 without halving first.",
        "zh": "取 $x$ 系数的一半再平方：$(8/2)^2=4^2=16$，得到 $(x+4)^2$。填 $4$ 是只减半没平方，填 $64$ 是直接把 8 平方而没先减半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $(x-2)^2=9$.",
        "zh": "求解 $(x-2)^2=9$。"
      },
      "choices": [
        "$x=11$ or $x=-7$",
        "$x=5$ only",
        "$x=5$ or $x=-1$",
        "$x=3$ or $x=1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Take the square root: $x-2=\\pm3$, so $x=2+3=5$ or $x=2-3=-1$. Keeping only $+3$ loses $x=-1$, and adding 9 directly to 2 skips the square-root step.",
        "zh": "开平方：$x-2=\\pm3$，所以 $x=2+3=5$ 或 $x=2-3=-1$。只取 $+3$ 会丢掉 $x=-1$，而把 9 直接加到 2 上则跳过了开平方这一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2-5x-14=0$ by factoring.",
        "zh": "用因式分解法求解 $x^2-5x-14=0$。"
      },
      "choices": [
        "$x=-7$ or $x=2$",
        "$x=-7$ or $x=-2$",
        "$x=7$ or $x=2$",
        "$x=7$ or $x=-2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Two numbers multiplying to $-14$ and adding to $-5$ are $-7$ and $2$, so $(x-7)(x+2)=0$ and $x=7$ or $x=-2$. Swapping the signs of the roots ($-7,2$) reverses which factor is zero.",
        "zh": "两个数乘积为 $-14$、和为 $-5$：即 $-7$ 和 $2$，所以 $(x-7)(x+2)=0$，$x=7$ 或 $x=-2$。把根的符号互换（$-7,2$）会弄反哪个因式为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What number completes the square for $x^2-10x+\\underline{\\ \\ }$?",
        "zh": "要对 $x^2-10x+\\underline{\\ \\ }$ 配方，应填入什么数？"
      },
      "choices": [
        "$25$",
        "$5$",
        "$-25$",
        "$100$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Half of $-10$ is $-5$, and $(-5)^2=25$, giving $(x-5)^2$. The completing constant is always positive because it is a square, so $-25$ is impossible; $100$ forgets to halve first.",
        "zh": "$-10$ 的一半是 $-5$，$(-5)^2=25$，得到 $(x-5)^2$。配方常数是平方，永远为正，所以 $-25$ 不可能；填 $100$ 是忘了先减半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2x^2=50$.",
        "zh": "求解 $2x^2=50$。"
      },
      "choices": [
        "$x=\\pm25$",
        "$x=\\pm5$",
        "$x=5$ only",
        "$x=\\pm\\sqrt{50}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Divide by 2 first: $x^2=25$, then $x=\\pm5$. Taking the root before dividing gives $\\pm\\sqrt{50}$, and dividing 50 by 2 without rooting gives $\\pm25$.",
        "zh": "先除以 2：$x^2=25$，再得 $x=\\pm5$。先开方后除会得到 $\\pm\\sqrt{50}$，而把 50 除以 2 却不开方会得到 $\\pm25$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many real solutions does $x^2+4=0$ have?",
        "zh": "方程 $x^2+4=0$ 有多少个实数解？"
      },
      "choices": [
        "Two: $x=\\pm2$",
        "One: $x=2$",
        "None (no real solutions)",
        "One: $x=-2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Rearranging gives $x^2=-4$, but no real number squares to a negative, so there are no real solutions. Answering $\\pm2$ ignores the negative sign and treats it as $x^2=4$.",
        "zh": "整理得 $x^2=-4$，但没有实数的平方为负，所以没有实数解。答 $\\pm2$ 是忽略了负号，把它当成 $x^2=4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2+6x+5=0$ by completing the square.",
        "zh": "用配方法求解 $x^2+6x+5=0$。"
      },
      "choices": [
        "$x=1$ or $x=5$",
        "$x=-2$ or $x=-3$",
        "$x=1$ or $x=-5$",
        "$x=-1$ or $x=-5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Move the constant: $x^2+6x=-5$, add $(6/2)^2=9$ to both sides: $(x+3)^2=4$, so $x+3=\\pm2$ giving $x=-1$ or $x=-5$. Forgetting to add 9 to the right side too, or reading roots as positive, produces the wrong pair.",
        "zh": "移常数项：$x^2+6x=-5$，两边同加 $(6/2)^2=9$：$(x+3)^2=4$，所以 $x+3=\\pm2$，得 $x=-1$ 或 $x=-5$。忘了在右边也加 9，或把根当成正数，都会得到错误的一对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the larger solution of $x^2-9x+20=0$?",
        "zh": "方程 $x^2-9x+20=0$ 较大的解是多少？"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5",
        "x=5"
      ],
      "explanation": {
        "en": "Factor as $(x-4)(x-5)=0$, so $x=4$ or $x=5$; the larger is $5$. Check: $25-45+20=0$. A common slip is choosing 4, the smaller root.",
        "zh": "分解为 $(x-4)(x-5)=0$，所以 $x=4$ 或 $x=5$；较大的是 $5$。验证：$25-45+20=0$。常见失误是选较小的根 4。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2=0.25$. Give the positive solution.",
        "zh": "求解 $x^2=0.25$。写出正解。"
      },
      "answer": "0.5",
      "accept": [
        "0.50",
        ".5",
        "1/2",
        "+0.5"
      ],
      "explanation": {
        "en": "$x=\\pm\\sqrt{0.25}=\\pm0.5$; the positive solution is $0.5$. Dividing 0.25 by 2 (giving 0.125) instead of taking a square root is the usual error.",
        "zh": "$x=\\pm\\sqrt{0.25}=\\pm0.5$；正解是 $0.5$。常见错误是把 0.25 除以 2（得 0.125）而不是开平方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What constant completes the square for $x^2+12x+\\underline{\\ \\ }$?",
        "zh": "要对 $x^2+12x+\\underline{\\ \\ }$ 配方，常数应为多少？"
      },
      "answer": "36",
      "accept": [
        "36.0",
        "+36"
      ],
      "explanation": {
        "en": "Half of 12 is 6, and $6^2=36$, forming $(x+6)^2$. Squaring 12 without halving gives 144, a frequent mistake.",
        "zh": "12 的一半是 6，$6^2=36$，构成 $(x+6)^2$。不先减半就把 12 平方会得到 144，这是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $(x+1)^2=16$. Give the larger solution.",
        "zh": "求解 $(x+1)^2=16$。写出较大的解。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "x=3"
      ],
      "explanation": {
        "en": "$x+1=\\pm4$, so $x=3$ or $x=-5$; the larger is $3$. Adding 16 straight to $-1$ skips the square root and gives a wrong value.",
        "zh": "$x+1=\\pm4$，所以 $x=3$ 或 $x=-5$；较大的是 $3$。把 16 直接加到 $-1$ 上跳过了开平方，会得到错误的值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $3x^2=27$. Give the positive solution.",
        "zh": "求解 $3x^2=27$。写出正解。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "x=3"
      ],
      "explanation": {
        "en": "Divide by 3 to get $x^2=9$, then $x=\\pm3$; the positive solution is $3$. Taking the root of 27 before dividing by 3 is the common error.",
        "zh": "先除以 3 得 $x^2=9$，再得 $x=\\pm3$；正解是 $3$。先对 27 开方再除以 3 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the sum of the two solutions of $x^2-7x+12=0$?",
        "zh": "方程 $x^2-7x+12=0$ 两个解之和是多少？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "The roots are $3$ and $4$ (from $(x-3)(x-4)=0$), and $3+4=7$. This matches $-b/a$. Adding the roots as $-3$ and $-4$ to get $-7$ mistakes the factor signs for the roots.",
        "zh": "根为 $3$ 和 $4$（由 $(x-3)(x-4)=0$），$3+4=7$，与 $-b/a$ 一致。把根写成 $-3$、$-4$ 得 $-7$ 是把因式里的符号误当成根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2-2x-15=0$. Give the negative solution.",
        "zh": "求解 $x^2-2x-15=0$。写出负解。"
      },
      "answer": "-3",
      "accept": [
        "-3.0",
        "x=-3"
      ],
      "explanation": {
        "en": "Factor as $(x-5)(x+3)=0$, so $x=5$ or $x=-3$; the negative solution is $-3$. Check: $9+6-15=0$. Reversing signs to pick $+3$ misreads which factor is zero.",
        "zh": "分解为 $(x-5)(x+3)=0$，所以 $x=5$ 或 $x=-3$；负解是 $-3$。验证：$9+6-15=0$。把符号弄反选 $+3$ 是看错了哪个因式为零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2+10x+25=0$. (It is a perfect square.)",
        "zh": "求解 $x^2+10x+25=0$。（这是完全平方式。）"
      },
      "answer": "-5",
      "accept": [
        "-5.0",
        "x=-5"
      ],
      "explanation": {
        "en": "It factors as $(x+5)^2=0$, so $x=-5$ is the only (repeated) solution. Check: $25-50+25=0$. Expecting two different roots overlooks that a perfect square gives one repeated root.",
        "zh": "分解为 $(x+5)^2=0$，所以 $x=-5$ 是唯一（重）根。验证：$25-50+25=0$。期望两个不同的根忽略了完全平方式只有一个重根。"
      }
    }
  ],
  "solving-quadratic-equations/quadratic-formula-and-discriminant": [
    {
      "type": "mc",
      "question": {
        "en": "What is the quadratic formula for $ax^2+bx+c=0$?",
        "zh": "对于 $ax^2+bx+c=0$，求根公式是什么？"
      },
      "choices": [
        "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$",
        "$x=\\frac{b\\pm\\sqrt{b^2-4ac}}{2a}$",
        "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2c}$",
        "$x=\\frac{-b\\pm\\sqrt{4ac-b^2}}{2a}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The formula is $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$. Watch for using $+b$ instead of $-b$, dividing by $2c$ instead of $2a$, or flipping the discriminant to $4ac-b^2$.",
        "zh": "公式为 $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$。要注意别用 $+b$ 代替 $-b$、别除以 $2c$ 而非 $2a$，也别把判别式写反成 $4ac-b^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the discriminant of $x^2+4x+3=0$.",
        "zh": "求 $x^2+4x+3=0$ 的判别式。"
      },
      "choices": [
        "$28$",
        "$4$",
        "$-4$",
        "$16$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The discriminant is $b^2-4ac=4^2-4(1)(3)=16-12=4$. Getting 28 comes from adding instead of subtracting ($16+12$), and 16 ignores the $-4ac$ term entirely.",
        "zh": "判别式为 $b^2-4ac=4^2-4(1)(3)=16-12=4$。得 28 是把减号看成加号（$16+12$），得 16 是完全漏掉了 $-4ac$ 一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quadratic has discriminant equal to $0$. How many real solutions does it have?",
        "zh": "某二次方程判别式等于 $0$，它有多少个实数解？"
      },
      "choices": [
        "Zero",
        "Exactly two",
        "Exactly one (a repeated root)",
        "Infinitely many"
      ],
      "answer": 2,
      "explanation": {
        "en": "When $b^2-4ac=0$ the $\\pm\\sqrt{0}$ term vanishes, leaving one repeated real solution. A discriminant of 0 is the boundary case; positive gives two and negative gives none, so answering two confuses it with the positive case.",
        "zh": "当 $b^2-4ac=0$ 时，$\\pm\\sqrt{0}$ 一项消失，只剩一个重实根。判别式为 0 是临界情形；为正得两个、为负得零个，所以答两个是把它与判别式为正的情形混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $2x^2+3x+5=0$, what does the discriminant tell you?",
        "zh": "对于 $2x^2+3x+5=0$，判别式说明了什么？"
      },
      "choices": [
        "Two distinct real solutions",
        "One repeated real solution",
        "Exactly one positive solution",
        "No real solutions"
      ],
      "answer": 3,
      "explanation": {
        "en": "$b^2-4ac=9-40=-31<0$, so there are no real solutions. A negative discriminant means the square root is not real; concluding two real solutions ignores that $9-40$ is negative.",
        "zh": "$b^2-4ac=9-40=-31<0$，所以没有实数解。判别式为负意味着根号内为负、开方非实数；得出两个实数解是忽视了 $9-40$ 为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2-5x+6=0$ with the quadratic formula.",
        "zh": "用求根公式求解 $x^2-5x+6=0$。"
      },
      "choices": [
        "$x=2$ or $x=3$",
        "$x=1$ or $x=6$",
        "$x=-2$ or $x=-3$",
        "$x=5$ or $x=1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$x=\\frac{5\\pm\\sqrt{25-24}}{2}=\\frac{5\\pm1}{2}$, so $x=3$ or $x=2$. Using $+b=-5$ in the numerator instead of $-b=5$ would give the negative pair.",
        "zh": "$x=\\frac{5\\pm\\sqrt{25-24}}{2}=\\frac{5\\pm1}{2}$，所以 $x=3$ 或 $x=2$。若分子用 $+b=-5$ 而不是 $-b=5$，就会得到那对负值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many real solutions does $x^2+2x-8=0$ have?",
        "zh": "方程 $x^2+2x-8=0$ 有多少个实数解？"
      },
      "choices": [
        "None",
        "Two",
        "One",
        "Three"
      ],
      "answer": 1,
      "explanation": {
        "en": "The discriminant is $2^2-4(1)(-8)=4+32=36>0$, so there are two real solutions. Treating $-4ac$ as $-32$ (mishandling the negative $c$) would wrongly give $4-32<0$ and suggest none.",
        "zh": "判别式为 $2^2-4(1)(-8)=4+32=36>0$，所以有两个实数解。把 $-4ac$ 算成 $-32$（对负的 $c$ 处理出错）会错误地得到 $4-32<0$，从而误以为无解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which method is most efficient for solving $x^2=16$?",
        "zh": "求解 $x^2=16$ 最简便的方法是哪种？"
      },
      "choices": [
        "Completing the square",
        "The quadratic formula",
        "The square-root method",
        "Graphing by hand"
      ],
      "answer": 2,
      "explanation": {
        "en": "With no linear term, just take the square root: $x=\\pm4$. The quadratic formula also works but is far more steps; choosing it here overcomplicates a one-step problem.",
        "zh": "没有一次项时，直接开平方即可：$x=\\pm4$。求根公式虽然也行，但步骤多得多；在这里选它是把一步能解的问题复杂化了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2+2x-1=0$ with the quadratic formula.",
        "zh": "用求根公式求解 $x^2+2x-1=0$。"
      },
      "choices": [
        "$x=-1\\pm2\\sqrt{2}$",
        "$x=1\\pm\\sqrt{2}$",
        "$x=-2\\pm\\sqrt{2}$",
        "$x=-1\\pm\\sqrt{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x=\\frac{-2\\pm\\sqrt{4+4}}{2}=\\frac{-2\\pm2\\sqrt{2}}{2}=-1\\pm\\sqrt{2}$. The common error is forgetting to divide both terms of the numerator by 2, leaving $-1\\pm2\\sqrt{2}$.",
        "zh": "$x=\\frac{-2\\pm\\sqrt{4+4}}{2}=\\frac{-2\\pm2\\sqrt{2}}{2}=-1\\pm\\sqrt{2}$。常见错误是忘了把分子的两项都除以 2，从而留下 $-1\\pm2\\sqrt{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the discriminant of $3x^2-2x-1=0$.",
        "zh": "求 $3x^2-2x-1=0$ 的判别式。"
      },
      "choices": [
        "$16$",
        "$4$",
        "$-8$",
        "$-16$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$b^2-4ac=(-2)^2-4(3)(-1)=4+12=16$. Because $c=-1$, the term $-4ac$ becomes $+12$; treating it as $-12$ gives $4-12=-8$ and hides the two real solutions.",
        "zh": "$b^2-4ac=(-2)^2-4(3)(-1)=4+12=16$。因为 $c=-1$，$-4ac$ 一项变为 $+12$；若当成 $-12$ 则得 $4-12=-8$，从而掩盖了两个实数解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quadratic equation has a negative discriminant. What best describes its solutions?",
        "zh": "某二次方程的判别式为负，其解最恰当的描述是？"
      },
      "choices": [
        "Two distinct real solutions",
        "No real solutions (two non-real solutions)",
        "One real and one non-real",
        "One repeated real solution"
      ],
      "answer": 1,
      "explanation": {
        "en": "A negative discriminant means $\\sqrt{b^2-4ac}$ is not a real number, so there are no real solutions (the two solutions are non-real). Real solutions cannot come in a mixed real/non-real pair for a quadratic with real coefficients.",
        "zh": "判别式为负意味着 $\\sqrt{b^2-4ac}$ 不是实数，所以没有实数解（两个解都是非实数）。对于实系数二次方程，解不会是一实一非实的混合对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2x^2-4x-6=0$.",
        "zh": "求解 $2x^2-4x-6=0$。"
      },
      "choices": [
        "$x=1$ or $x=-3$",
        "$x=2$ or $x=-3$",
        "$x=3$ or $x=-1$",
        "$x=6$ or $x=-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide by 2 to get $x^2-2x-3=0=(x-3)(x+1)$, so $x=3$ or $x=-1$. Check: $2(9)-12-6=0$. Swapping the signs of the roots reverses which factor equals zero.",
        "zh": "先除以 2 得 $x^2-2x-3=0=(x-3)(x+1)$，所以 $x=3$ 或 $x=-1$。验证：$2(9)-12-6=0$。把根的符号互换会弄反哪个因式为零。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $x^2+x+1=0$, what is the discriminant, and what does it mean?",
        "zh": "对于 $x^2+x+1=0$，判别式是多少，说明什么？"
      },
      "choices": [
        "$1$; two real solutions",
        "$5$; two real solutions",
        "$-3$; one real solution",
        "$-3$; no real solutions"
      ],
      "answer": 3,
      "explanation": {
        "en": "$b^2-4ac=1-4=-3<0$, so there are no real solutions. Getting $5$ comes from adding ($1+4$) instead of subtracting the $4ac$ term.",
        "zh": "$b^2-4ac=1-4=-3<0$，所以没有实数解。得 $5$ 是把 $4ac$ 一项用加法（$1+4$）而不是减法。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the discriminant of $x^2-8x+16=0$.",
        "zh": "求 $x^2-8x+16=0$ 的判别式。"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "zero",
        "0.00"
      ],
      "explanation": {
        "en": "$b^2-4ac=(-8)^2-4(1)(16)=64-64=0$, which signals one repeated root ($x=4$). A nonzero answer usually means a subtraction or squaring slip.",
        "zh": "$b^2-4ac=(-8)^2-4(1)(16)=64-64=0$，表示有一个重根（$x=4$）。得到非零通常是减法或平方算错了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the larger solution of $x^2-x-6=0$?",
        "zh": "方程 $x^2-x-6=0$ 较大的解是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3",
        "x=3"
      ],
      "explanation": {
        "en": "Factor as $(x-3)(x+2)=0$, so $x=3$ or $x=-2$; the larger is $3$. Check: $9-3-6=0$. Choosing $-2$ picks the smaller root.",
        "zh": "分解为 $(x-3)(x+2)=0$，所以 $x=3$ 或 $x=-2$；较大的是 $3$。验证：$9-3-6=0$。选 $-2$ 是取了较小的根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the discriminant of $2x^2+5x-3=0$.",
        "zh": "求 $2x^2+5x-3=0$ 的判别式。"
      },
      "answer": "49",
      "accept": [
        "49.0",
        "+49"
      ],
      "explanation": {
        "en": "$b^2-4ac=5^2-4(2)(-3)=25+24=49$. Since $c=-3$, $-4ac=+24$; using $-24$ would wrongly give $1$.",
        "zh": "$b^2-4ac=5^2-4(2)(-3)=25+24=49$。因为 $c=-3$，$-4ac=+24$；若用 $-24$ 会错误地得到 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many real solutions does $x^2+x+1=0$ have?",
        "zh": "方程 $x^2+x+1=0$ 有多少个实数解？"
      },
      "answer": "0",
      "accept": [
        "0.0",
        "zero",
        "none",
        "0 (none)"
      ],
      "explanation": {
        "en": "The discriminant is $1-4=-3<0$, so there are no real solutions. Answering 2 assumes every quadratic has two real roots, which fails when the discriminant is negative.",
        "zh": "判别式为 $1-4=-3<0$，所以没有实数解。答 2 是假设每个二次方程都有两个实根，而判别式为负时并不成立。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $x^2-4x+1=0$, what is the sum of the two solutions?",
        "zh": "对于 $x^2-4x+1=0$，两个解之和是多少？"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "The sum of the roots equals $-b/a=-(-4)/1=4$. (The roots are $2\\pm\\sqrt{3}$, which add to 4.) Using $b/a$ without the negative sign gives $-4$.",
        "zh": "两根之和等于 $-b/a=-(-4)/1=4$。（两根为 $2\\pm\\sqrt{3}$，相加为 4。）若用 $b/a$ 而漏掉负号会得到 $-4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $3x^2=12$. Give the positive solution.",
        "zh": "求解 $3x^2=12$。写出正解。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2",
        "x=2"
      ],
      "explanation": {
        "en": "Divide by 3 to get $x^2=4$, then $x=\\pm2$; the positive solution is $2$. Taking $\\sqrt{12}$ before dividing by 3 is the common error.",
        "zh": "先除以 3 得 $x^2=4$，再得 $x=\\pm2$；正解是 $2$。先对 12 开方再除以 3 是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many real solutions does $x^2+6x+9=0$ have?",
        "zh": "方程 $x^2+6x+9=0$ 有多少个实数解？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "one",
        "+1"
      ],
      "explanation": {
        "en": "The discriminant is $36-36=0$, giving one repeated real solution ($x=-3$). Because it factors as $(x+3)^2$, expecting two distinct roots overlooks the repeated root.",
        "zh": "判别式为 $36-36=0$，得到一个重实根（$x=-3$）。因为它分解为 $(x+3)^2$，期望两个不同的根忽略了重根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the product of the two solutions of $x^2-7x+10=0$?",
        "zh": "方程 $x^2-7x+10=0$ 两个解的乘积是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "The product of the roots equals $c/a=10/1=10$. (The roots are $2$ and $5$, and $2\\times5=10$.) Using the sum instead of the product would give 7.",
        "zh": "两根之积等于 $c/a=10/1=10$。（两根为 $2$ 和 $5$，$2\\times5=10$。）若求和而非求积会得到 7。"
      }
    }
  ],
  "complex-numbers/imaginary-and-complex-numbers": [
    {
      "type": "mc",
      "question": {
        "en": "By definition, the imaginary unit $i$ satisfies $i^2 = $ ?",
        "zh": "根据定义，虚数单位 $i$ 满足 $i^2 = $ ？"
      },
      "choices": [
        "$-1$",
        "$1$",
        "$i$",
        "$-i$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $i = \\sqrt{-1}$, squaring gives $i^2 = -1$. A common mistake is to treat $i$ like a real number and get $1$, but the whole point of $i$ is that its square is negative.",
        "zh": "因为 $i = \\sqrt{-1}$，平方得到 $i^2 = -1$。常见错误是把 $i$ 当作普通实数从而得到 $1$，但 $i$ 的关键正是它的平方为负数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt{-16}$.",
        "zh": "化简 $\\sqrt{-16}$。"
      },
      "choices": [
        "$-4$",
        "$4i$",
        "$16i$",
        "$-4i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Write $\\sqrt{-16} = \\sqrt{16}\\cdot\\sqrt{-1} = 4i$. A frequent error is leaving the $16$ under the root as $16i$ instead of taking the square root of $16$ first.",
        "zh": "$\\sqrt{-16} = \\sqrt{16}\\cdot\\sqrt{-1} = 4i$。常见错误是没有先对 $16$ 开方，直接写成 $16i$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $i^3$.",
        "zh": "化简 $i^3$。"
      },
      "choices": [
        "$1$",
        "$i$",
        "$-i$",
        "$-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$i^3 = i^2\\cdot i = (-1)\\cdot i = -i$. A common slip is forgetting the sign from $i^2 = -1$ and leaving the answer as $i$.",
        "zh": "$i^3 = i^2\\cdot i = (-1)\\cdot i = -i$。常见错误是忘记 $i^2 = -1$ 带来的负号，把答案写成 $i$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $i^4$.",
        "zh": "化简 $i^4$。"
      },
      "choices": [
        "$i$",
        "$-i$",
        "$-1$",
        "$1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$i^4 = (i^2)^2 = (-1)^2 = 1$. Some students stop at $i^2 = -1$ and answer $-1$, forgetting that the fourth power squares that result back to positive $1$.",
        "zh": "$i^4 = (i^2)^2 = (-1)^2 = 1$。有些学生停在 $i^2 = -1$ 就回答 $-1$，忘了四次方是把这个结果再平方从而变回正 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Add: $(3+2i) + (5-4i)$.",
        "zh": "计算加法：$(3+2i) + (5-4i)$。"
      },
      "choices": [
        "$8-2i$",
        "$8+2i$",
        "$-2-2i$",
        "$8+6i$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Add real parts $3+5=8$ and imaginary parts $2+(-4)=-2$, giving $8-2i$. A common error is adding $2+4=6$ instead of respecting the minus sign on $4i$.",
        "zh": "实部相加 $3+5=8$，虚部相加 $2+(-4)=-2$，得到 $8-2i$。常见错误是忽略 $4i$ 的负号，算成 $2+4=6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Subtract: $(7+3i) - (2+5i)$.",
        "zh": "计算减法：$(7+3i) - (2+5i)$。"
      },
      "choices": [
        "$5+8i$",
        "$5-2i$",
        "$9-2i$",
        "$5+2i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distribute the minus: real $7-2=5$, imaginary $3-5=-2$, giving $5-2i$. A frequent mistake is failing to distribute the subtraction to the imaginary part and writing $5+2i$.",
        "zh": "把减号分配进去：实部 $7-2=5$，虚部 $3-5=-2$，得到 $5-2i$。常见错误是没有把减号分配到虚部，写成 $5+2i$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $(2+3i)(1-2i)$.",
        "zh": "计算乘法：$(2+3i)(1-2i)$。"
      },
      "choices": [
        "$-4-i$",
        "$8+7i$",
        "$8-i$",
        "$2-6i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "FOIL: $2 - 4i + 3i - 6i^2 = 2 - i - 6(-1) = 8 - i$. The key step some miss is replacing $i^2$ with $-1$; leaving $-6i^2$ unsimplified leads to a wrong real part.",
        "zh": "用 FOIL：$2 - 4i + 3i - 6i^2 = 2 - i - 6(-1) = 8 - i$。关键一步是把 $i^2$ 替换为 $-1$；若不化简 $-6i^2$ 就会得到错误的实部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the complex conjugate of $4-7i$?",
        "zh": "$4-7i$ 的共轭复数是什么？"
      },
      "choices": [
        "$7+4i$",
        "$-4+7i$",
        "$-4-7i$",
        "$4+7i$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The conjugate flips only the sign of the imaginary part: $4-7i \\rightarrow 4+7i$. A common error is also negating the real part, which is not what conjugation does.",
        "zh": "共轭只改变虚部的符号：$4-7i \\rightarrow 4+7i$。常见错误是把实部也变号，但共轭并不改变实部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $i^{10}$.",
        "zh": "化简 $i^{10}$。"
      },
      "choices": [
        "$-1$",
        "$1$",
        "$i$",
        "$-i$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Divide the exponent by 4: $10 = 4\\cdot 2 + 2$, so $i^{10} = i^2 = -1$. A common mistake is using the wrong remainder; only the remainder after dividing by 4 matters.",
        "zh": "把指数除以 4：$10 = 4\\cdot 2 + 2$，所以 $i^{10} = i^2 = -1$。常见错误是取错余数；只有除以 4 后的余数才决定结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply: $i(3+4i)$.",
        "zh": "计算乘法：$i(3+4i)$。"
      },
      "choices": [
        "$3+4i$",
        "$-4+3i$",
        "$4+3i$",
        "$3-4i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distribute: $3i + 4i^2 = 3i + 4(-1) = -4 + 3i$. A frequent error is treating $4i^2$ as $+4$ instead of $-4$, which puts the wrong sign on the real part.",
        "zh": "分配律：$3i + 4i^2 = 3i + 4(-1) = -4 + 3i$。常见错误是把 $4i^2$ 当作 $+4$ 而不是 $-4$，导致实部符号错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand: $(1+i)^2$.",
        "zh": "展开：$(1+i)^2$。"
      },
      "choices": [
        "$2$",
        "$1+2i$",
        "$2i$",
        "$2+2i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$. A common mistake is writing $1 + i^2 = 0$ and dropping the middle term $2i$, forgetting the square of a binomial has three terms.",
        "zh": "$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$。常见错误是漏掉中间项 $2i$，忘了二项式平方有三项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply the conjugates: $(3+2i)(3-2i)$.",
        "zh": "计算共轭相乘：$(3+2i)(3-2i)$。"
      },
      "choices": [
        "$5$",
        "$9-4i$",
        "$9+4i$",
        "$13$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Using $(a+bi)(a-bi) = a^2 + b^2$: $3^2 + 2^2 = 9 + 4 = 13$. A common error is writing $9 - 4 = 5$ by treating $-(2i)^2$ as $-4$ instead of $+4$.",
        "zh": "利用 $(a+bi)(a-bi) = a^2 + b^2$：$3^2 + 2^2 = 9 + 4 = 13$。常见错误是把 $-(2i)^2$ 当作 $-4$ 从而算成 $9 - 4 = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\sqrt{-49}$. Write your answer in the form $bi$.",
        "zh": "化简 $\\sqrt{-49}$，用 $bi$ 的形式作答。"
      },
      "answer": "7i",
      "accept": [
        "+7i",
        "7*i",
        "0+7i",
        "7 i"
      ],
      "explanation": {
        "en": "$\\sqrt{-49} = \\sqrt{49}\\cdot\\sqrt{-1} = 7i$. Remember to take the square root of $49$ first rather than leaving $49$ under the radical.",
        "zh": "$\\sqrt{-49} = \\sqrt{49}\\cdot\\sqrt{-1} = 7i$。记得先对 $49$ 开方，不要把 $49$ 留在根号里。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $i^7$.",
        "zh": "化简 $i^7$。"
      },
      "answer": "-i",
      "accept": [
        "-1i",
        "- i",
        "-i "
      ],
      "explanation": {
        "en": "$7 = 4\\cdot 1 + 3$, so $i^7 = i^3 = -i$. The remainder after dividing the exponent by 4 determines the value; here the remainder is $3$.",
        "zh": "$7 = 4\\cdot 1 + 3$，所以 $i^7 = i^3 = -i$。指数除以 4 的余数决定结果，这里余数是 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Add: $(6+i) + (-2+3i)$. Write your answer in $a+bi$ form.",
        "zh": "计算 $(6+i) + (-2+3i)$，用 $a+bi$ 形式作答。"
      },
      "answer": "4+4i",
      "accept": [
        "4 + 4i",
        "4+4*i",
        "4 +4i",
        "4+ 4i"
      ],
      "explanation": {
        "en": "Real parts: $6 + (-2) = 4$. Imaginary parts: $1 + 3 = 4$. So the sum is $4 + 4i$. Combine like parts separately rather than mixing real and imaginary terms.",
        "zh": "实部：$6 + (-2) = 4$。虚部：$1 + 3 = 4$。所以和为 $4 + 4i$。要分别合并同类项，不要把实部和虚部混在一起。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Subtract: $(5-2i) - (3-6i)$. Write your answer in $a+bi$ form.",
        "zh": "计算 $(5-2i) - (3-6i)$，用 $a+bi$ 形式作答。"
      },
      "answer": "2+4i",
      "accept": [
        "2 + 4i",
        "2+4*i",
        "2 +4i",
        "2+ 4i"
      ],
      "explanation": {
        "en": "Distribute the minus: real $5-3=2$, imaginary $-2-(-6) = -2+6 = 4$, giving $2+4i$. Watch the double negative on the imaginary part.",
        "zh": "把减号分配进去：实部 $5-3=2$，虚部 $-2-(-6) = -2+6 = 4$，得到 $2+4i$。注意虚部的双重负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Multiply: $(2i)(3i)$.",
        "zh": "计算 $(2i)(3i)$。"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "-6+0i",
        "- 6",
        "−6"
      ],
      "explanation": {
        "en": "$(2i)(3i) = 6i^2 = 6(-1) = -6$. A common mistake is stopping at $6i^2$ or writing $6$; you must replace $i^2$ with $-1$.",
        "zh": "$(2i)(3i) = 6i^2 = 6(-1) = -6$。常见错误是停在 $6i^2$ 或写成 $6$；必须把 $i^2$ 替换为 $-1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the complex conjugate of $-8+5i$. Write your answer in $a+bi$ form.",
        "zh": "求 $-8+5i$ 的共轭复数，用 $a+bi$ 形式作答。"
      },
      "answer": "-8-5i",
      "accept": [
        "-8 - 5i",
        "-8-5*i",
        "-8 -5i",
        "-8- 5i"
      ],
      "explanation": {
        "en": "Conjugation flips only the sign of the imaginary part: $-8+5i \\rightarrow -8-5i$. The real part $-8$ stays exactly the same.",
        "zh": "共轭只改变虚部的符号：$-8+5i \\rightarrow -8-5i$。实部 $-8$ 保持不变。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Multiply the conjugates: $(4+3i)(4-3i)$.",
        "zh": "计算共轭相乘：$(4+3i)(4-3i)$。"
      },
      "answer": "25",
      "accept": [
        "25.0",
        "25+0i",
        "+25"
      ],
      "explanation": {
        "en": "$(a+bi)(a-bi) = a^2 + b^2 = 4^2 + 3^2 = 16 + 9 = 25$. The imaginary terms cancel and $-(3i)^2$ becomes $+9$, so the result is a real number.",
        "zh": "$(a+bi)(a-bi) = a^2 + b^2 = 4^2 + 3^2 = 16 + 9 = 25$。虚部相互抵消，$-(3i)^2$ 变为 $+9$，结果是实数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $i^{20}$.",
        "zh": "化简 $i^{20}$。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1",
        "1+0i"
      ],
      "explanation": {
        "en": "$20 = 4\\cdot 5$ with remainder $0$, so $i^{20} = (i^4)^5 = 1^5 = 1$. When the exponent is a multiple of $4$, the power of $i$ equals $1$.",
        "zh": "$20 = 4\\cdot 5$，余数为 $0$，所以 $i^{20} = (i^4)^5 = 1^5 = 1$。当指数是 $4$ 的倍数时，$i$ 的幂等于 $1$。"
      }
    }
  ],
  "complex-numbers/complex-solutions-of-quadratics": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 = -49$.",
        "zh": "解方程 $x^2 = -49$。"
      },
      "choices": [
        "$\\pm 7i$",
        "$\\pm 49i$",
        "$7i$",
        "$\\pm 7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Take the square root of both sides: $x = \\pm\\sqrt{-49} = \\pm 7i$. A common mistake is dropping the $\\pm$ and giving only one root, or forgetting the $i$ and writing $\\pm 7$.",
        "zh": "两边开方：$x = \\pm\\sqrt{-49} = \\pm 7i$。常见错误是漏掉 $\\pm$ 只给一个根，或忘记 $i$ 写成 $\\pm 7$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the discriminant of $x^2 - 2x + 5 = 0$.",
        "zh": "求 $x^2 - 2x + 5 = 0$ 的判别式。"
      },
      "choices": [
        "$16$",
        "$-16$",
        "$24$",
        "$-24$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$b^2 - 4ac = (-2)^2 - 4(1)(5) = 4 - 20 = -16$. A common slip is computing $(-2)^2$ as $-4$; squaring always gives a positive $4$ here.",
        "zh": "$b^2 - 4ac = (-2)^2 - 4(1)(5) = 4 - 20 = -16$。常见错误是把 $(-2)^2$ 算成 $-4$；平方一定得到正的 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 - 2x + 5 = 0$ using the quadratic formula.",
        "zh": "用求根公式解 $x^2 - 2x + 5 = 0$。"
      },
      "choices": [
        "$2 \\pm 4i$",
        "$-1 \\pm 2i$",
        "$1 \\pm 2i$",
        "$1 \\pm 4i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$x = \\frac{2 \\pm \\sqrt{-16}}{2} = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i$. A common error is dividing only the real part by $2$ and leaving $\\pm 4i$; both terms of the numerator must be divided.",
        "zh": "$x = \\frac{2 \\pm \\sqrt{-16}}{2} = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i$。常见错误是只把实部除以 $2$ 而保留 $\\pm 4i$；分子的两项都要除以 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quadratic equation has a negative discriminant. How many real solutions does it have?",
        "zh": "一个二次方程的判别式为负。它有多少个实数解？"
      },
      "choices": [
        "$1$",
        "$3$",
        "$2$",
        "$0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A negative discriminant means the square root is imaginary, so there are zero real solutions (two non-real complex solutions instead). A common misconception is that every quadratic has two real roots.",
        "zh": "判别式为负意味着平方根是虚数，所以没有实数解（而是两个非实数的复数解）。常见误解是认为每个二次方程都有两个实数根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 + 6x + 13 = 0$.",
        "zh": "解方程 $x^2 + 6x + 13 = 0$。"
      },
      "choices": [
        "$-3 \\pm 2i$",
        "$3 \\pm 2i$",
        "$-6 \\pm 4i$",
        "$-3 \\pm 4i$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Discriminant $= 36 - 52 = -16$, so $x = \\frac{-6 \\pm 4i}{2} = -3 \\pm 2i$. A common mistake is forgetting the negative sign on $b$, giving $+3$ instead of $-3$ for the real part.",
        "zh": "判别式 $= 36 - 52 = -16$，所以 $x = \\frac{-6 \\pm 4i}{2} = -3 \\pm 2i$。常见错误是忘记 $b$ 前的负号，把实部写成 $+3$ 而不是 $-3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "One solution of a quadratic with real coefficients is $5 - i$. What is the other solution?",
        "zh": "某个实系数二次方程的一个解是 $5 - i$。另一个解是什么？"
      },
      "choices": [
        "$-5 + i$",
        "$5 + i$",
        "$-5 - i$",
        "$1 + 5i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Complex solutions of a real quadratic come in conjugate pairs, so the other root is $5 + i$. A common error is negating the real part too; only the imaginary part changes sign.",
        "zh": "实系数二次方程的复数解成共轭对出现，所以另一个根是 $5 + i$。常见错误是把实部也变号；只有虚部改变符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 + 9 = 0$.",
        "zh": "解方程 $x^2 + 9 = 0$。"
      },
      "choices": [
        "$\\pm 3$",
        "$\\pm 9i$",
        "$\\pm 3i$",
        "$3i$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$x^2 = -9$, so $x = \\pm\\sqrt{-9} = \\pm 3i$. A common mistake is leaving $9$ inside the root as $9i$ instead of taking $\\sqrt{9} = 3$ first.",
        "zh": "$x^2 = -9$，所以 $x = \\pm\\sqrt{-9} = \\pm 3i$。常见错误是把 $9$ 留在根号里写成 $9i$，而没有先算 $\\sqrt{9} = 3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 - 4x + 8 = 0$.",
        "zh": "解方程 $x^2 - 4x + 8 = 0$。"
      },
      "choices": [
        "$2 \\pm 4i$",
        "$-2 \\pm 2i$",
        "$4 \\pm 2i$",
        "$2 \\pm 2i$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Discriminant $= 16 - 32 = -16$, so $x = \\frac{4 \\pm 4i}{2} = 2 \\pm 2i$. A common error is not dividing the imaginary part by $2$, leaving $\\pm 4i$.",
        "zh": "判别式 $= 16 - 32 = -16$，所以 $x = \\frac{4 \\pm 4i}{2} = 2 \\pm 2i$。常见错误是没有把虚部除以 $2$，留下 $\\pm 4i$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $ax^2 + bx + c = 0$ to have two non-real complex solutions, the discriminant must satisfy:",
        "zh": "要使 $ax^2 + bx + c = 0$ 有两个非实数的复数解，判别式必须满足："
      },
      "choices": [
        "$b^2 - 4ac < 0$",
        "$b^2 - 4ac = 0$",
        "$b^2 - 4ac > 0$",
        "$b^2 - 4ac \\geq 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Non-real solutions require a negative value under the square root, i.e. $b^2 - 4ac < 0$. A positive discriminant gives two real roots and a zero discriminant gives one repeated real root.",
        "zh": "非实数解要求根号下为负，即 $b^2 - 4ac < 0$。判别式为正给出两个实根，判别式为零给出一个重实根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $4x^2 + 9 = 0$.",
        "zh": "解方程 $4x^2 + 9 = 0$。"
      },
      "choices": [
        "$\\pm \\frac{3}{2}$",
        "$\\pm \\frac{3}{2}i$",
        "$\\pm \\frac{9}{4}i$",
        "$\\pm 3i$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$x^2 = -\\frac{9}{4}$, so $x = \\pm\\sqrt{-\\frac{9}{4}} = \\pm\\frac{3}{2}i$. A common mistake is forgetting to take the square root of the fraction and leaving $\\frac{9}{4}$.",
        "zh": "$x^2 = -\\frac{9}{4}$，所以 $x = \\pm\\sqrt{-\\frac{9}{4}} = \\pm\\frac{3}{2}i$。常见错误是忘记对分数开方，留下 $\\frac{9}{4}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2x^2 + 8 = 0$.",
        "zh": "解方程 $2x^2 + 8 = 0$。"
      },
      "choices": [
        "$\\pm 4i$",
        "$\\pm 2$",
        "$\\pm 2i$",
        "$\\pm 4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide by $2$: $x^2 = -4$, so $x = \\pm 2i$. A common error is skipping the division by $2$ and solving $x^2 = -8$, or forgetting the $i$ and writing $\\pm 2$.",
        "zh": "两边除以 $2$：$x^2 = -4$，所以 $x = \\pm 2i$。常见错误是没有先除以 $2$ 就去解 $x^2 = -8$，或忘记 $i$ 写成 $\\pm 2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the discriminant of $x^2 + x + 1 = 0$.",
        "zh": "求 $x^2 + x + 1 = 0$ 的判别式。"
      },
      "choices": [
        "$-5$",
        "$3$",
        "$5$",
        "$-3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$b^2 - 4ac = 1^2 - 4(1)(1) = 1 - 4 = -3$. A common mistake is using $b = 0$ because $x$ has no visible coefficient; the coefficient of $x$ is $1$.",
        "zh": "$b^2 - 4ac = 1^2 - 4(1)(1) = 1 - 4 = -3$。常见错误是因为 $x$ 没有明显系数就取 $b = 0$；$x$ 的系数是 $1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 = -64$. Write the solution that has a positive imaginary part, in the form $bi$.",
        "zh": "解方程 $x^2 = -64$。写出虚部为正的那个解，用 $bi$ 形式作答。"
      },
      "answer": "8i",
      "accept": [
        "+8i",
        "8*i",
        "0+8i",
        "8 i"
      ],
      "explanation": {
        "en": "$x = \\pm\\sqrt{-64} = \\pm 8i$; the one with positive imaginary part is $8i$. Take $\\sqrt{64} = 8$ first rather than leaving $64$ under the radical.",
        "zh": "$x = \\pm\\sqrt{-64} = \\pm 8i$；虚部为正的是 $8i$。要先算 $\\sqrt{64} = 8$，不要把 $64$ 留在根号里。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the discriminant of $x^2 + 2x + 10 = 0$.",
        "zh": "求 $x^2 + 2x + 10 = 0$ 的判别式。"
      },
      "answer": "-36",
      "accept": [
        "-36.0",
        "− 36",
        "-36 ",
        "−36"
      ],
      "explanation": {
        "en": "$b^2 - 4ac = 2^2 - 4(1)(10) = 4 - 40 = -36$. The negative value signals two non-real complex solutions.",
        "zh": "$b^2 - 4ac = 2^2 - 4(1)(10) = 4 - 40 = -36$。负值表明有两个非实数的复数解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 + 2x + 10 = 0$. Write the solution with a positive imaginary part, in $a+bi$ form.",
        "zh": "解方程 $x^2 + 2x + 10 = 0$。写出虚部为正的解，用 $a+bi$ 形式作答。"
      },
      "answer": "-1+3i",
      "accept": [
        "-1 + 3i",
        "-1+3*i",
        "-1 +3i",
        "-1+ 3i"
      ],
      "explanation": {
        "en": "Discriminant $= -36$, so $x = \\frac{-2 \\pm 6i}{2} = -1 \\pm 3i$; the positive-imaginary root is $-1 + 3i$. Divide both the real and imaginary parts of the numerator by $2$.",
        "zh": "判别式 $= -36$，所以 $x = \\frac{-2 \\pm 6i}{2} = -1 \\pm 3i$；虚部为正的根是 $-1 + 3i$。分子的实部和虚部都要除以 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 - 6x + 10 = 0$. Write the solution with a positive imaginary part, in $a+bi$ form.",
        "zh": "解方程 $x^2 - 6x + 10 = 0$。写出虚部为正的解，用 $a+bi$ 形式作答。"
      },
      "answer": "3+i",
      "accept": [
        "3 + i",
        "3+1i",
        "3 +i",
        "3+ i",
        "3+1*i"
      ],
      "explanation": {
        "en": "Discriminant $= 36 - 40 = -4$, so $x = \\frac{6 \\pm 2i}{2} = 3 \\pm i$; the positive-imaginary root is $3 + i$. Note $\\frac{2i}{2} = i$, not $2i$.",
        "zh": "判别式 $= 36 - 40 = -4$，所以 $x = \\frac{6 \\pm 2i}{2} = 3 \\pm i$；虚部为正的根是 $3 + i$。注意 $\\frac{2i}{2} = i$，不是 $2i$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "One solution of a real-coefficient quadratic is $4 - 5i$. Write the other solution in $a+bi$ form.",
        "zh": "某个实系数二次方程的一个解是 $4 - 5i$。写出另一个解，用 $a+bi$ 形式作答。"
      },
      "answer": "4+5i",
      "accept": [
        "4 + 5i",
        "4+5*i",
        "4 +5i",
        "4+ 5i"
      ],
      "explanation": {
        "en": "Non-real roots occur in conjugate pairs, so the other solution is $4 + 5i$. Only the sign of the imaginary part changes; the real part $4$ is unchanged.",
        "zh": "非实数根成共轭对出现，所以另一个解是 $4 + 5i$。只有虚部的符号改变；实部 $4$ 保持不变。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 + 25 = 0$. Write the solution with a positive imaginary part, in the form $bi$.",
        "zh": "解方程 $x^2 + 25 = 0$。写出虚部为正的解，用 $bi$ 形式作答。"
      },
      "answer": "5i",
      "accept": [
        "+5i",
        "5*i",
        "0+5i",
        "5 i"
      ],
      "explanation": {
        "en": "$x^2 = -25$, so $x = \\pm 5i$; the positive-imaginary root is $5i$. Take $\\sqrt{25} = 5$ first instead of leaving $25i$.",
        "zh": "$x^2 = -25$，所以 $x = \\pm 5i$；虚部为正的根是 $5i$。要先算 $\\sqrt{25} = 5$，不要留下 $25i$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 - 4x + 13 = 0$. Write the solution with a positive imaginary part, in $a+bi$ form.",
        "zh": "解方程 $x^2 - 4x + 13 = 0$。写出虚部为正的解，用 $a+bi$ 形式作答。"
      },
      "answer": "2+3i",
      "accept": [
        "2 + 3i",
        "2+3*i",
        "2 +3i",
        "2+ 3i"
      ],
      "explanation": {
        "en": "Discriminant $= 16 - 52 = -36$, so $x = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$; the positive-imaginary root is $2 + 3i$. Divide the whole numerator, not just the real part, by $2$.",
        "zh": "判别式 $= 16 - 52 = -36$，所以 $x = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$；虚部为正的根是 $2 + 3i$。要把整个分子除以 $2$，而不只是实部。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the discriminant of $2x^2 - 3x + 5 = 0$.",
        "zh": "求 $2x^2 - 3x + 5 = 0$ 的判别式。"
      },
      "answer": "-31",
      "accept": [
        "-31.0",
        "− 31",
        "−31",
        "-31 "
      ],
      "explanation": {
        "en": "$b^2 - 4ac = (-3)^2 - 4(2)(5) = 9 - 40 = -31$. A common mistake is forgetting that $a = 2$ and computing $4(1)(5)$ instead of $4(2)(5)$.",
        "zh": "$b^2 - 4ac = (-3)^2 - 4(2)(5) = 9 - 40 = -31$。常见错误是忘了 $a = 2$，算成 $4(1)(5)$ 而不是 $4(2)(5)$。"
      }
    }
  ],
  "more-functions-features/piecewise-and-absolute-value-functions": [
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$, find $f(-3)$.",
        "zh": "已知 $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$，求 $f(-3)$。"
      },
      "choices": [
        "$-5$",
        "$9$",
        "$-6$",
        "$7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $-3<0$, use the top rule: $2(-3)+1 = -5$. Getting $9$ comes from squaring $-3$, but $x^2$ only applies when $x\\ge 0$; you must match the input to the correct interval first.",
        "zh": "因为 $-3<0$，使用上面的规则：$2(-3)+1 = -5$。得到 $9$ 是因为对 $-3$ 平方，但 $x^2$ 只在 $x\\ge 0$ 时使用；必须先把输入值对应到正确的区间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$, find $f(2)$.",
        "zh": "已知 $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$，求 $f(2)$。"
      },
      "choices": [
        "$5$",
        "$4$",
        "$-3$",
        "$2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $2\\ge 0$, use the bottom rule: $2^2 = 4$. Getting $5$ comes from using $2x+1$, but that rule only applies when $x<0$; check which interval the input falls in before substituting.",
        "zh": "因为 $2\\ge 0$，使用下面的规则：$2^2 = 4$。得到 $5$ 是因为用了 $2x+1$，但该规则只在 $x<0$ 时适用；代入前先判断输入值落在哪个区间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $g(x) = |x-4| + 2$ at $x = 1$.",
        "zh": "求 $g(x) = |x-4| + 2$ 在 $x = 1$ 处的值。"
      },
      "choices": [
        "$3$",
        "$-1$",
        "$5$",
        "$7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Inside first: $|1-4| = |-3| = 3$, then add $2$ to get $5$. Getting $-1$ comes from dropping the absolute value and computing $1-4+2$; absolute value makes the distance positive before adding.",
        "zh": "先算内部：$|1-4| = |-3| = 3$，再加 $2$ 得 $5$。得到 $-1$ 是因为忽略了绝对值直接算 $1-4+2$；绝对值先把距离变为正数再相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = |x+3| - 5$?",
        "zh": "$y = |x+3| - 5$ 的顶点是什么？"
      },
      "choices": [
        "$(3,-5)$",
        "$(3,5)$",
        "$(-3,5)$",
        "$(-3,-5)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "For $y = |x-h| + k$ the vertex is $(h,k)$. Here $x+3 = x-(-3)$, so $h=-3$ and $k=-5$, giving $(-3,-5)$. Reading the sign of $3$ directly as $+3$ flips the $x$-coordinate; the shift is opposite to the sign inside.",
        "zh": "对于 $y = |x-h| + k$，顶点为 $(h,k)$。这里 $x+3 = x-(-3)$，所以 $h=-3$，$k=-5$，顶点为 $(-3,-5)$。直接把 $3$ 当成 $+3$ 会弄反 $x$ 坐标；平移方向与括号内符号相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best describes the graph of $y = -|x| + 3$?",
        "zh": "下列哪项最能描述 $y = -|x| + 3$ 的图象？"
      },
      "choices": [
        "Opens down, vertex $(0,3)$",
        "Opens up, vertex $(0,-3)$",
        "Opens up, vertex $(0,3)$",
        "Opens down, vertex $(0,-3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The negative in front of $|x|$ reflects the V downward, and $+3$ raises the vertex to $(0,3)$. Concluding it opens up ignores the leading negative sign, which controls the direction of opening.",
        "zh": "$|x|$ 前的负号把 V 形向下翻转，$+3$ 把顶点抬到 $(0,3)$。认为它向上开口是忽略了前面的负号，而这个负号决定开口方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which piecewise definition matches $|x|$?",
        "zh": "下列哪个分段定义等于 $|x|$？"
      },
      "choices": [
        "$\\begin{cases} x & x<0 \\\\ -x & x\\ge 0 \\end{cases}$",
        "$\\begin{cases} x & x\\ge 0 \\\\ -x & x<0 \\end{cases}$",
        "$\\begin{cases} -x & x\\ge 0 \\\\ x & x<0 \\end{cases}$",
        "$\\begin{cases} x & x\\ge 0 \\\\ x & x<0 \\end{cases}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Absolute value keeps nonnegative inputs as-is and negates negative inputs: $x$ when $x\\ge 0$, $-x$ when $x<0$. Swapping the rules would negate positives and leave negatives, producing $-|x|$ instead.",
        "zh": "绝对值让非负输入保持不变，把负输入取相反数：$x\\ge 0$ 时为 $x$，$x<0$ 时为 $-x$。把两条规则调换会把正数取负、负数保留，得到的是 $-|x|$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate the greatest-integer (floor) function $\\lfloor 3.7 \\rfloor$.",
        "zh": "求最大整数（向下取整）函数 $\\lfloor 3.7 \\rfloor$。"
      },
      "choices": [
        "$4$",
        "$3.7$",
        "$3$",
        "$5$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The floor function gives the greatest integer $\\le 3.7$, which is $3$. Getting $4$ comes from rounding up; the floor never rounds up, it drops to the integer at or below the value.",
        "zh": "向下取整给出不超过 $3.7$ 的最大整数，即 $3$。得到 $4$ 是因为向上取整；向下取整从不进位，而是降到小于或等于该值的整数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A garage charges $\\$4$ for each hour or part of an hour. What is the cost for parking $2.3$ hours?",
        "zh": "某停车场每小时或不足一小时收费 $\\$4$。停车 $2.3$ 小时收费多少？"
      },
      "choices": [
        "$\\$16$",
        "$\\$8$",
        "$\\$9.20$",
        "$\\$12$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Any part of an hour rounds up (ceiling), so $2.3$ hours is billed as $3$ hours: $3 \\times \\$4 = \\$12$. Using $\\$8$ treats it as $2$ hours by rounding down, but part of an hour still counts as a full charge.",
        "zh": "不足一小时按整小时计（向上取整），所以 $2.3$ 小时按 $3$ 小时收费：$3 \\times \\$4 = \\$12$。用 $\\$8$ 是按 $2$ 小时向下取整，但不足一小时仍要按整小时收费。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compared to $y = |x|$, how does the graph of $y = 2|x|$ change?",
        "zh": "与 $y = |x|$ 相比，$y = 2|x|$ 的图象如何变化？"
      },
      "choices": [
        "Vertically stretched, narrower",
        "Shifted right 2 units",
        "Shifted up 2 units",
        "Vertically compressed, wider"
      ],
      "answer": 0,
      "explanation": {
        "en": "A factor of $2$ multiplies each output, stretching the V vertically so it rises twice as fast and looks narrower. Reading it as a shift up 2 confuses a multiplier with an added constant; multiplying changes steepness, not position.",
        "zh": "系数 $2$ 把每个输出值乘以 $2$，使 V 形垂直拉伸、上升快一倍、看起来更窄。把它当成向上平移 2 是把乘数误当成加常数；相乘改变陡峭程度，而非位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = \\begin{cases} x+1 & x\\le 2 \\\\ 3x & x>2 \\end{cases}$, find $f(2)$.",
        "zh": "已知 $f(x) = \\begin{cases} x+1 & x\\le 2 \\\\ 3x & x>2 \\end{cases}$，求 $f(2)$。"
      },
      "choices": [
        "$6$",
        "$3$",
        "$5$",
        "$7$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The top rule includes $x=2$ because of $\\le$, so $f(2) = 2+1 = 3$. Getting $6$ uses $3x$, but that rule is only for $x>2$ (strictly greater); the $\\le$ sign decides which piece owns the boundary point.",
        "zh": "上面的规则因含 $\\le$ 而包含 $x=2$，所以 $f(2) = 2+1 = 3$。得到 $6$ 是用了 $3x$，但该规则只适用于 $x>2$（严格大于）；$\\le$ 符号决定边界点属于哪一段。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does $|x-1| = 4$ have?",
        "zh": "方程 $|x-1| = 4$ 有多少个解？"
      },
      "choices": [
        "$0$",
        "$1$",
        "$2$",
        "$3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Set $x-1 = 4$ or $x-1 = -4$, giving $x=5$ or $x=-3$: two solutions. Finding only one solution comes from ignoring the negative case; a positive absolute value equation splits into two branches.",
        "zh": "令 $x-1 = 4$ 或 $x-1 = -4$，得 $x=5$ 或 $x=-3$：两个解。只找到一个解是因为忽略了负的情况；等于正数的绝对值方程会分成两个分支。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|2x| = 8$.",
        "zh": "解方程 $|2x| = 8$。"
      },
      "choices": [
        "$x = 4$ only",
        "$x = -4$ only",
        "No solution",
        "$x = 4$ or $x = -4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$|2x| = 8$ means $2x = 8$ or $2x = -8$, so $x = 4$ or $x = -4$. Keeping only $x=4$ drops the negative branch; absolute value equal to a positive number always yields both signs.",
        "zh": "$|2x| = 8$ 意味着 $2x = 8$ 或 $2x = -8$，所以 $x = 4$ 或 $x = -4$。只保留 $x=4$ 会漏掉负分支；绝对值等于正数时总有正负两个解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$, find $f(-4)$.",
        "zh": "已知 $f(x) = \\begin{cases} 2x+1 & x<0 \\\\ x^2 & x\\ge 0 \\end{cases}$，求 $f(-4)$。"
      },
      "answer": "-7",
      "accept": [
        "-7.0",
        "−7"
      ],
      "explanation": {
        "en": "Since $-4<0$, use $2x+1$: $2(-4)+1 = -8+1 = -7$. Squaring $-4$ to get $16$ would use the wrong piece, since $x^2$ only applies for $x\\ge 0$.",
        "zh": "因为 $-4<0$，使用 $2x+1$：$2(-4)+1 = -8+1 = -7$。把 $-4$ 平方得 $16$ 会用错分段，因为 $x^2$ 只在 $x\\ge 0$ 时适用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $g(x) = |x-4| + 2$ at $x = 4$.",
        "zh": "求 $g(x) = |x-4| + 2$ 在 $x = 4$ 处的值。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "$|4-4| = |0| = 0$, then $0+2 = 2$. This is the vertex, where the absolute-value part reaches its minimum of $0$.",
        "zh": "$|4-4| = |0| = 0$，再加 $2$ 得 $2$。这就是顶点，绝对值部分在此取得最小值 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $x$-coordinate of the vertex of $y = |x+6| - 1$?",
        "zh": "$y = |x+6| - 1$ 顶点的 $x$ 坐标是多少？"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "−6"
      ],
      "explanation": {
        "en": "The vertex is where the inside equals $0$: $x+6 = 0$, so $x = -6$. Reading it as $+6$ ignores that the horizontal shift is opposite the sign inside the bars.",
        "zh": "顶点在括号内为 $0$ 处：$x+6 = 0$，所以 $x = -6$。读成 $+6$ 是忽略了水平平移方向与绝对值内符号相反。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $|x+2| = 10$. Give the positive solution.",
        "zh": "解 $|x+2| = 10$。写出正的那个解。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$x+2 = 10$ gives $x = 8$ (the other branch $x+2=-10$ gives $x=-12$). The positive solution is $8$; forgetting to subtract $2$ would wrongly give $10$.",
        "zh": "$x+2 = 10$ 得 $x = 8$（另一分支 $x+2=-10$ 得 $x=-12$）。正解为 $8$；忘记减 $2$ 会错误地得到 $10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate the floor function $\\lfloor -2.4 \\rfloor$.",
        "zh": "求向下取整函数 $\\lfloor -2.4 \\rfloor$。"
      },
      "answer": "-3",
      "accept": [
        "-3.0",
        "−3"
      ],
      "explanation": {
        "en": "The floor is the greatest integer $\\le -2.4$, which is $-3$ (not $-2$). With negatives, dropping to the integer at or below the value moves you further from zero, not toward it.",
        "zh": "向下取整是不超过 $-2.4$ 的最大整数，即 $-3$（不是 $-2$）。对于负数，降到小于或等于该值的整数会离零更远，而非更近。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A lot charges $\\$3$ per hour or any part of an hour. What is the cost (in dollars) for $4.1$ hours?",
        "zh": "某停车场每小时或不足一小时收费 $\\$3$。停车 $4.1$ 小时收费多少美元？"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "$15",
        "15 dollars",
        "15美元"
      ],
      "explanation": {
        "en": "Round $4.1$ up to $5$ hours (any part counts as a full hour): $5 \\times 3 = 15$. Using $4$ hours for $\\$12$ rounds down, but the extra $0.1$ hour still triggers another full charge.",
        "zh": "把 $4.1$ 向上取整为 $5$ 小时（不足一小时按整小时计）：$5 \\times 3 = 15$。按 $4$ 小时算得 $\\$12$ 是向下取整，但多出的 $0.1$ 小时仍要多收一个整小时。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-intercept of $y = |x| - 7$?",
        "zh": "$y = |x| - 7$ 的 $y$ 轴截距是多少？"
      },
      "answer": "-7",
      "accept": [
        "-7.0",
        "−7"
      ],
      "explanation": {
        "en": "Set $x=0$: $|0| - 7 = -7$. The vertex sits at $(0,-7)$, so the graph crosses the $y$-axis there; forgetting the $-7$ shift would give $0$.",
        "zh": "令 $x=0$：$|0| - 7 = -7$。顶点在 $(0,-7)$，图象在此穿过 $y$ 轴；忘记 $-7$ 的平移会得到 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the step function $f(x) = \\begin{cases} 5 & x<0 \\\\ -3 & x\\ge 0 \\end{cases}$, find $f(-1) + f(0)$.",
        "zh": "对于阶梯函数 $f(x) = \\begin{cases} 5 & x<0 \\\\ -3 & x\\ge 0 \\end{cases}$，求 $f(-1) + f(0)$。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "$f(-1) = 5$ (since $-1<0$) and $f(0) = -3$ (since $0\\ge 0$), so the sum is $5 + (-3) = 2$. The boundary $x=0$ uses the second rule because of the $\\ge$ sign.",
        "zh": "$f(-1) = 5$（因为 $-1<0$），$f(0) = -3$（因为 $0\\ge 0$），所以和为 $5 + (-3) = 2$。边界 $x=0$ 因 $\\ge$ 符号而使用第二条规则。"
      }
    }
  ],
  "more-functions-features/inverse-and-radical-functions": [
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x) = \\sqrt{x-3}$?",
        "zh": "$f(x) = \\sqrt{x-3}$ 的定义域是什么？"
      },
      "choices": [
        "$x \\ge 3$",
        "$x \\ge 0$",
        "$x \\le 3$",
        "all real numbers"
      ],
      "answer": 0,
      "explanation": {
        "en": "A square root needs a nonnegative radicand: $x-3 \\ge 0$, so $x \\ge 3$. Answering $x\\ge 0$ forgets that the shift inside the root moves the starting point to $3$.",
        "zh": "平方根要求被开方数非负：$x-3 \\ge 0$，所以 $x \\ge 3$。答 $x\\ge 0$ 是忘了根号内的平移把起点移到了 $3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of $f(x) = \\sqrt[3]{x-5}$?",
        "zh": "$f(x) = \\sqrt[3]{x-5}$ 的定义域是什么？"
      },
      "choices": [
        "$x \\ge 5$",
        "all real numbers",
        "$x \\le 5$",
        "$x \\ge 0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A cube root is defined for every real number, including negatives, so the domain is all reals. Restricting to $x\\ge 5$ wrongly applies a square-root rule; odd roots have no radicand restriction.",
        "zh": "立方根对所有实数（包括负数）都有定义，所以定义域是全体实数。限制为 $x\\ge 5$ 是错误地套用了平方根的规则；奇次根对被开方数没有限制。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the inverse of $f(x) = x + 7$.",
        "zh": "求 $f(x) = x + 7$ 的反函数。"
      },
      "choices": [
        "$f^{-1}(x) = \\dfrac{x}{7}$",
        "$f^{-1}(x) = 7 - x$",
        "$f^{-1}(x) = x - 7$",
        "$f^{-1}(x) = -x - 7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Swap and solve: $x = y+7$ gives $y = x-7$. Adding $7$ is undone by subtracting $7$. Writing $\\frac{x}{7}$ treats addition as multiplication; you invert with the opposite operation.",
        "zh": "交换后求解：$x = y+7$ 得 $y = x-7$。加 $7$ 由减 $7$ 抵消。写成 $\\frac{x}{7}$ 是把加法当成乘法；反函数要用相反的运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the inverse of $f(x) = 3x$.",
        "zh": "求 $f(x) = 3x$ 的反函数。"
      },
      "choices": [
        "$f^{-1}(x) = 3x$",
        "$f^{-1}(x) = x - 3$",
        "$f^{-1}(x) = -3x$",
        "$f^{-1}(x) = \\dfrac{x}{3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Swap and solve: $x = 3y$ gives $y = \\frac{x}{3}$. Multiplying by $3$ is undone by dividing by $3$. Using $x-3$ subtracts instead of divides, mismatching the operation.",
        "zh": "交换后求解：$x = 3y$ 得 $y = \\frac{x}{3}$。乘 $3$ 由除以 $3$ 抵消。用 $x-3$ 是做减法而非除法，运算对应错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the inverse of $f(x) = 2x - 5$.",
        "zh": "求 $f(x) = 2x - 5$ 的反函数。"
      },
      "choices": [
        "$f^{-1}(x) = \\dfrac{x+5}{2}$",
        "$f^{-1}(x) = 2x + 5$",
        "$f^{-1}(x) = \\dfrac{x-5}{2}$",
        "$f^{-1}(x) = 5 - 2x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Swap: $x = 2y - 5$, add $5$ then divide by $2$: $y = \\frac{x+5}{2}$. Undo operations in reverse order. Using $\\frac{x-5}{2}$ subtracts when you should add, reversing the $-5$ incorrectly.",
        "zh": "交换：$x = 2y - 5$，先加 $5$ 再除以 $2$：$y = \\frac{x+5}{2}$。要按相反顺序抵消运算。用 $\\frac{x-5}{2}$ 是该加时做了减，错误地处理了 $-5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x) = x^2$ with $x \\ge 0$, what is $f^{-1}(x)$?",
        "zh": "对于 $f(x) = x^2$（$x \\ge 0$），$f^{-1}(x)$ 是什么？"
      },
      "choices": [
        "$x^2$",
        "$\\sqrt{x}$",
        "$\\dfrac{1}{x^2}$",
        "$-\\sqrt{x}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Squaring is undone by the (positive) square root, so $f^{-1}(x) = \\sqrt{x}$; the restriction $x\\ge 0$ keeps the positive branch. Choosing $\\frac{1}{x^2}$ confuses an inverse function with a reciprocal.",
        "zh": "平方由（正的）平方根抵消，所以 $f^{-1}(x) = \\sqrt{x}$；限制 $x\\ge 0$ 保留正分支。选 $\\frac{1}{x^2}$ 是把反函数与倒数混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $f(x) = \\sqrt{x}$?",
        "zh": "$f(x) = \\sqrt{x}$ 的值域是什么？"
      },
      "choices": [
        "$y \\le 0$",
        "all real numbers",
        "$y \\ge 0$",
        "$y > 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The principal square root is never negative and reaches $0$ at $x=0$, so the range is $y \\ge 0$. Saying $y>0$ wrongly excludes the value $0$, which does occur.",
        "zh": "算术平方根从不为负，且在 $x=0$ 时取到 $0$，所以值域是 $y \\ge 0$。答 $y>0$ 错误地排除了确实会取到的 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which condition confirms that $f$ and $g$ are inverse functions?",
        "zh": "下列哪个条件能确认 $f$ 与 $g$ 是互为反函数？"
      },
      "choices": [
        "$f(x)\\cdot g(x) = 1$",
        "$f(x) + g(x) = 0$",
        "$f(x) = g(x)$",
        "$f(g(x)) = x$ and $g(f(x)) = x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Inverses undo each other, so composing them both ways returns the input: $f(g(x))=x$ and $g(f(x))=x$. Requiring $f(x)\\cdot g(x)=1$ describes reciprocals, a different relationship.",
        "zh": "互为反函数会相互抵消，所以两种复合都返回输入值：$f(g(x))=x$ 且 $g(f(x))=x$。要求 $f(x)\\cdot g(x)=1$ 描述的是互为倒数，是另一种关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $f(x) = \\sqrt{x} + 2$ at $x = 9$.",
        "zh": "求 $f(x) = \\sqrt{x} + 2$ 在 $x = 9$ 处的值。"
      },
      "choices": [
        "$5$",
        "$11$",
        "$4$",
        "$7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sqrt{9} = 3$, then $3 + 2 = 5$. Getting $11$ comes from adding before taking the root or reading $\\sqrt{9}+2$ as $9+2$; evaluate the root first.",
        "zh": "$\\sqrt{9} = 3$，再算 $3 + 2 = 5$。得到 $11$ 是在开根前相加，或把 $\\sqrt{9}+2$ 当成 $9+2$；应先求根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $f(x) = \\sqrt[3]{x}$ at $x = -27$.",
        "zh": "求 $f(x) = \\sqrt[3]{x}$ 在 $x = -27$ 处的值。"
      },
      "choices": [
        "$3$",
        "$-3$",
        "$9$",
        "undefined"
      ],
      "answer": 1,
      "explanation": {
        "en": "$(-3)^3 = -27$, so $\\sqrt[3]{-27} = -3$. Calling it undefined applies square-root thinking; cube roots of negative numbers are real and negative.",
        "zh": "$(-3)^3 = -27$，所以 $\\sqrt[3]{-27} = -3$。说它无定义是套用了平方根的想法；负数的立方根是实数且为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which function has a domain of all real numbers?",
        "zh": "下列哪个函数的定义域是全体实数？"
      },
      "choices": [
        "$y = \\sqrt{x}$",
        "$y = \\sqrt{x-2}$",
        "$y = \\sqrt[3]{x}$",
        "$y = \\sqrt{x} + 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The cube root $\\sqrt[3]{x}$ accepts every real input, while each square-root option restricts to a nonnegative radicand. Assuming all roots limit the domain overlooks that odd roots do not.",
        "zh": "立方根 $\\sqrt[3]{x}$ 接受任意实数输入，而各个平方根选项都要求被开方数非负。以为所有根都限制定义域，是忽略了奇次根并不限制。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of a function and its inverse are reflections across which line?",
        "zh": "一个函数与其反函数的图象关于哪条直线对称？"
      },
      "choices": [
        "$y = -x$",
        "the $x$-axis",
        "the $y$-axis",
        "$y = x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Inverses swap $x$ and $y$, so their graphs are mirror images across the line $y = x$. Reflecting across the $x$-axis only negates $y$, which does not swap the coordinates.",
        "zh": "反函数交换 $x$ 与 $y$，所以它们的图象关于直线 $y = x$ 互为镜像。关于 $x$ 轴对称只是把 $y$ 取负，并不能交换坐标。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the smallest value in the domain of $f(x) = \\sqrt{x-8}$?",
        "zh": "$f(x) = \\sqrt{x-8}$ 定义域中的最小值是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "The radicand must satisfy $x-8 \\ge 0$, so $x \\ge 8$ and the smallest allowed input is $8$. Answering $0$ forgets the horizontal shift caused by the $-8$ inside the root.",
        "zh": "被开方数须满足 $x-8 \\ge 0$，所以 $x \\ge 8$，最小允许输入为 $8$。答 $0$ 是忘了根号内 $-8$ 造成的水平平移。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(x) = \\sqrt{x} + 1$ at $x = 16$.",
        "zh": "求 $f(x) = \\sqrt{x} + 1$ 在 $x = 16$ 处的值。"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "$\\sqrt{16} = 4$, then $4 + 1 = 5$. Take the square root before adding; treating it as $16+1$ skips the root entirely.",
        "zh": "$\\sqrt{16} = 4$，再算 $4 + 1 = 5$。要先开根再相加；当成 $16+1$ 是完全跳过了开根。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = x - 4$, compute $f^{-1}(10)$.",
        "zh": "对于 $f(x) = x - 4$，求 $f^{-1}(10)$。"
      },
      "answer": "14",
      "accept": [
        "14.0"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x) = x + 4$, so $f^{-1}(10) = 14$. Equivalently, ask what input makes $x-4=10$, giving $x=14$. Subtracting to get $6$ inverts the operation the wrong way.",
        "zh": "反函数为 $f^{-1}(x) = x + 4$，所以 $f^{-1}(10) = 14$。等价地问什么输入使 $x-4=10$，得 $x=14$。做减法得 $6$ 是把运算反向错了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(x) = \\sqrt[3]{x}$ at $x = 64$.",
        "zh": "求 $f(x) = \\sqrt[3]{x}$ 在 $x = 64$ 处的值。"
      },
      "answer": "4",
      "accept": [
        "4.0"
      ],
      "explanation": {
        "en": "$4^3 = 64$, so $\\sqrt[3]{64} = 4$. Answering $8$ takes a square root instead; a cube root asks which number cubed gives $64$.",
        "zh": "$4^3 = 64$，所以 $\\sqrt[3]{64} = 4$。答 $8$ 是取了平方根；立方根问的是哪个数的立方等于 $64$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x) = 2x + 6$, compute $f^{-1}(10)$.",
        "zh": "对于 $f(x) = 2x + 6$，求 $f^{-1}(10)$。"
      },
      "answer": "2",
      "accept": [
        "2.0"
      ],
      "explanation": {
        "en": "The inverse is $f^{-1}(x) = \\frac{x-6}{2}$, so $f^{-1}(10) = \\frac{4}{2} = 2$. Equivalently, solve $2x+6=10$ to get $x=2$. Dividing before subtracting the $6$ would give a wrong value.",
        "zh": "反函数为 $f^{-1}(x) = \\frac{x-6}{2}$，所以 $f^{-1}(10) = \\frac{4}{2} = 2$。等价地解 $2x+6=10$ 得 $x=2$。先除后减 $6$ 会得到错误结果。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $f(x) = \\sqrt[3]{x}$ at $x = -8$.",
        "zh": "求 $f(x) = \\sqrt[3]{x}$ 在 $x = -8$ 处的值。"
      },
      "answer": "-2",
      "accept": [
        "-2.0",
        "−2"
      ],
      "explanation": {
        "en": "$(-2)^3 = -8$, so $\\sqrt[3]{-8} = -2$. The cube root of a negative number is negative; treating it as undefined uses square-root reasoning.",
        "zh": "$(-2)^3 = -8$，所以 $\\sqrt[3]{-8} = -2$。负数的立方根为负；当成无定义是用了平方根的思路。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the minimum $y$-value (range minimum) of $f(x) = \\sqrt{x} + 3$?",
        "zh": "$f(x) = \\sqrt{x} + 3$ 的最小 $y$ 值（值域下限）是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0"
      ],
      "explanation": {
        "en": "$\\sqrt{x}$ has minimum $0$ at $x=0$, so $f$ has minimum $0+3 = 3$, giving range $y\\ge 3$. Forgetting the $+3$ shift would give $0$.",
        "zh": "$\\sqrt{x}$ 在 $x=0$ 时最小为 $0$，所以 $f$ 的最小值为 $0+3 = 3$，值域为 $y\\ge 3$。忘记 $+3$ 的平移会得到 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "If $g(x) = 5x$ is the inverse of $f(x) = \\dfrac{x}{5}$, compute $g(f(20))$.",
        "zh": "若 $g(x) = 5x$ 是 $f(x) = \\dfrac{x}{5}$ 的反函数，求 $g(f(20))$。"
      },
      "answer": "20",
      "accept": [
        "20.0"
      ],
      "explanation": {
        "en": "Because $f$ and $g$ are inverses, composing them returns the input: $g(f(20)) = 20$. Directly, $f(20) = 4$ and $g(4) = 20$, confirming they undo each other.",
        "zh": "因为 $f$ 与 $g$ 互为反函数，复合后返回输入值：$g(f(20)) = 20$。直接算，$f(20) = 4$，$g(4) = 20$，验证二者相互抵消。"
      }
    }
  ],
  "congruence-proof/triangle-congruence-proofs": [
    {
      "type": "mc",
      "question": {
        "en": "Two triangles have all three pairs of corresponding sides equal. Which congruence criterion proves them congruent?",
        "zh": "两个三角形的三组对应边分别相等。用哪个全等判定可以证明它们全等？"
      },
      "choices": [
        "SSS",
        "ASA",
        "AAS",
        "SAS"
      ],
      "answer": 0,
      "explanation": {
        "en": "Three pairs of equal sides is exactly the Side-Side-Side (SSS) criterion. Matching three sides does not require any angle information, so criteria that need a marked angle do not apply here.",
        "zh": "三组对应边相等正是边边边（SSS）判定。三边对应相等无需任何角的信息，因此需要标记角的判定在此不适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In two triangles, two pairs of sides are equal and the angle BETWEEN those two sides is equal in each. Which criterion applies?",
        "zh": "两个三角形中，两组对应边相等，且这两边所夹的角也分别相等。适用哪个判定？"
      },
      "choices": [
        "SSS",
        "SAS",
        "SSA",
        "AAA"
      ],
      "answer": 1,
      "explanation": {
        "en": "An angle located between the two known sides is an included angle, giving Side-Angle-Side (SAS). If the equal angle were not between the two sides, it would be the unreliable SSA arrangement, which is not a valid congruence criterion.",
        "zh": "位于两条已知边之间的角是夹角，因此是边角边（SAS）。若相等的角不在两边之间，就成了不可靠的 SSA 排列，那不是有效的全等判定。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these is NOT a valid triangle congruence criterion?",
        "zh": "下列哪一项不是有效的三角形全等判定？"
      },
      "choices": [
        "ASA",
        "AAS",
        "AAA",
        "HL"
      ],
      "answer": 2,
      "explanation": {
        "en": "AAA fixes only the shape, not the size, so triangles with three equal angles can be similar but different sizes. ASA, AAS, and HL each pin down actual side lengths, so they do guarantee congruence.",
        "zh": "AAA 只确定形状而不确定大小，因此三个角对应相等的三角形可能相似但大小不同。ASA、AAS 和 HL 都能确定实际边长，故都能保证全等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The HL congruence criterion can be used ONLY for what kind of triangles?",
        "zh": "HL（斜边-直角边）全等判定只能用于哪种三角形？"
      },
      "choices": [
        "Isosceles triangles",
        "Equilateral triangles",
        "Obtuse triangles",
        "Right triangles"
      ],
      "answer": 3,
      "explanation": {
        "en": "HL stands for Hypotenuse-Leg, and only right triangles have a hypotenuse and legs, so HL is restricted to right triangles. Applying it to a triangle with no right angle misuses the criterion, since there is no hypotenuse to match.",
        "zh": "HL 表示斜边-直角边，只有直角三角形才有斜边和直角边，因此 HL 仅限于直角三角形。把它用于没有直角的三角形是误用，因为没有斜边可对应。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "After proving two triangles congruent, you conclude that a specific pair of their sides are equal. This final step is justified by:",
        "zh": "在证明两个三角形全等之后，你得出它们某一对边相等的结论。这最后一步的依据是："
      },
      "choices": [
        "CPCTC",
        "The Reflexive Property",
        "The Triangle Inequality",
        "SAS"
      ],
      "answer": 0,
      "explanation": {
        "en": "Once triangles are congruent, Corresponding Parts of Congruent Triangles are Congruent (CPCTC) lets you claim any matching sides or angles are equal. A criterion like SAS is used to PROVE the triangles congruent first; it is not the reason individual parts match afterward.",
        "zh": "一旦三角形全等，全等三角形的对应部分相等（CPCTC）就允许你断言任意对应的边或角相等。像 SAS 这样的判定是先用来证明三角形全等的，而不是随后用来说明各对应部分相等的理由。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles share a common side. In a two-column proof, stating that this shared side equals itself uses which property?",
        "zh": "两个三角形共用一条边。在两栏证明中，指出这条公共边等于它自身，用的是哪条性质？"
      },
      "choices": [
        "Symmetric Property",
        "Reflexive Property",
        "Transitive Property",
        "Substitution"
      ],
      "answer": 1,
      "explanation": {
        "en": "A segment or angle being equal to itself is the Reflexive Property, the standard way to justify a shared side in a proof. The Transitive Property instead chains two separate equalities together and does not describe a quantity equal to itself.",
        "zh": "线段或角等于其自身是自反性（Reflexive），这是证明中处理公共边的标准依据。而传递性（Transitive）是把两个不同的等式连接起来，并不描述某量等于其自身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In two triangles, angle A = angle D, side AB = side DE, and angle B = angle E. Which criterion proves congruence?",
        "zh": "两个三角形中，角 A = 角 D，边 AB = 边 DE，角 B = 角 E。哪个判定可证明全等？"
      },
      "choices": [
        "AAS",
        "SAS",
        "ASA",
        "SSS"
      ],
      "answer": 2,
      "explanation": {
        "en": "Side AB lies between angles A and B, so the equal side is included between the two equal angles, which is Angle-Side-Angle (ASA). AAS would apply only if the equal side were NOT between the two angles.",
        "zh": "边 AB 位于角 A 与角 B 之间，故相等的边夹在两个相等的角之间，这是角边角（ASA）。只有当相等的边不在两角之间时才用 AAS。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Why is 'SSA' (two sides and a non-included angle) NOT accepted as a congruence criterion?",
        "zh": "为什么“SSA”（两边及一个非夹角）不能作为全等判定？"
      },
      "choices": [
        "It uses too many angles",
        "It requires all sides to be equal",
        "It only works for right triangles",
        "It can produce two different (ambiguous) triangles"
      ],
      "answer": 3,
      "explanation": {
        "en": "With two sides and a non-included angle, the third side can sometimes swing to two positions, creating two non-congruent triangles (the ambiguous case). Because the outcome is not unique, SSA cannot guarantee congruence. It is not that it needs all sides equal; the problem is ambiguity.",
        "zh": "已知两边和一个非夹角时，第三边有时可摆到两个位置，形成两个不全等的三角形（歧义情形）。由于结果不唯一，SSA 不能保证全等。问题不在于要求所有边相等，而在于结果的歧义性。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given a two-column proof where AB = DE, BC = EF, and AC = DF are established, the next line 'triangle ABC = triangle DEF' should cite:",
        "zh": "在一个两栏证明中已得出 AB = DE，BC = EF，AC = DF，下一行“三角形 ABC = 三角形 DEF”应引用："
      },
      "choices": [
        "SSS",
        "SAS",
        "CPCTC",
        "ASA"
      ],
      "answer": 0,
      "explanation": {
        "en": "Three pairs of equal sides justify the congruence by SSS. CPCTC works in the opposite direction: it is used AFTER a congruence is proven to conclude that remaining parts match.",
        "zh": "三组边相等，故用 SSS 判定全等。CPCTC 的方向相反：它在全等被证明之后使用，用来推出其余对应部分相等。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two right triangles each have a hypotenuse of 13 and one leg of 5. Which criterion shows they are congruent?",
        "zh": "两个直角三角形的斜边都是 13，且各有一条直角边为 5。哪个判定说明它们全等？"
      },
      "choices": [
        "SSA",
        "HL",
        "AAA",
        "ASA"
      ],
      "answer": 1,
      "explanation": {
        "en": "Equal hypotenuses and one equal leg in right triangles is exactly the Hypotenuse-Leg (HL) criterion. Although a hypotenuse plus a leg superficially resembles SSA, HL is valid specifically because the right angle removes the ambiguity.",
        "zh": "直角三角形中斜边相等且一条直角边相等，正是斜边-直角边（HL）判定。虽然“斜边加一条直角边”表面上像 SSA，但因为直角消除了歧义，HL 才成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In triangle ABC and triangle DEF, angle A = angle D, angle C = angle F, and side BC = side EF (BC is opposite angle A, EF is opposite angle D). Which criterion applies?",
        "zh": "三角形 ABC 与三角形 DEF 中，角 A = 角 D，角 C = 角 F，边 BC = 边 EF（BC 是角 A 的对边，EF 是角 D 的对边）。适用哪个判定？"
      },
      "choices": [
        "SSS",
        "SAS",
        "AAS",
        "ASA"
      ],
      "answer": 2,
      "explanation": {
        "en": "Two pairs of equal angles plus a pair of equal sides that is NOT between the two angles is Angle-Angle-Side (AAS). It would be ASA only if the equal side sat directly between the two equal angles.",
        "zh": "两组角相等加上一组不夹在这两角之间的边相等，是角角边（AAS）。只有当相等的边恰好夹在两个相等的角之间时才是 ASA。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about congruent triangles is TRUE?",
        "zh": "关于全等三角形，下列哪个说法是正确的？"
      },
      "choices": [
        "Congruent triangles must have the same orientation on the page",
        "Congruent triangles are the same as similar triangles",
        "Congruent triangles need only equal areas",
        "Congruent triangles have equal corresponding angles and equal corresponding sides"
      ],
      "answer": 3,
      "explanation": {
        "en": "Congruence means every pair of corresponding sides and angles is equal, so the triangles are identical in size and shape. Equal area alone is not enough (many differently shaped triangles share an area), and orientation on the page can differ through a flip or rotation.",
        "zh": "全等意味着每一对对应的边和角都相等，因此两三角形在大小和形状上完全相同。仅面积相等不够（许多形状不同的三角形面积相同），而在纸面上的朝向可以通过翻转或旋转而不同。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Triangle ABC is congruent to triangle DEF. If side AB = 7 and side BC = 10, what is the length of side DE?",
        "zh": "三角形 ABC 全等于三角形 DEF。若 AB = 7，BC = 10，则边 DE 的长度是多少？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "7 units",
        "AB",
        "seven"
      ],
      "explanation": {
        "en": "In the congruence ABC = DEF, vertex A matches D and B matches E, so side AB corresponds to side DE. By CPCTC, DE = AB = 7. Reading off BC = 10 would be matching the wrong pair of vertices.",
        "zh": "在全等 ABC = DEF 中，顶点 A 对应 D，B 对应 E，故边 AB 对应边 DE。由 CPCTC，DE = AB = 7。若取 BC = 10 则是对应了错误的顶点对。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Triangle PQR is congruent to triangle XYZ. Angle P = 50 degrees and angle Q = 60 degrees. What is the measure, in degrees, of angle Z?",
        "zh": "三角形 PQR 全等于三角形 XYZ。角 P = 50 度，角 Q = 60 度。角 Z 的度数是多少？"
      },
      "answer": "70",
      "accept": [
        "70.0",
        "70 degrees",
        "70°",
        "70 deg"
      ],
      "explanation": {
        "en": "Angle R corresponds to angle Z, and the angles of triangle PQR sum to 180, so angle R = 180 - 50 - 60 = 70; thus angle Z = 70. Copying 50 or 60 would mean matching Z to the wrong corresponding angle.",
        "zh": "角 R 对应角 Z，而三角形 PQR 内角和为 180，故角 R = 180 - 50 - 60 = 70，因此角 Z = 70。若照抄 50 或 60，则是把 Z 对应到了错误的角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many pairs of corresponding parts (sides plus angles) must match for two triangles to be fully congruent?",
        "zh": "两个三角形要完全全等，一共需要多少对对应部分（边加角）相等？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "six",
        "6 pairs"
      ],
      "explanation": {
        "en": "A triangle has 3 sides and 3 angles, giving 6 corresponding parts in all. The power of the congruence criteria is that matching just three well-chosen parts forces the other three, but full congruence still means all 6 parts are equal.",
        "zh": "三角形有 3 条边和 3 个角，共 6 对对应部分。全等判定的妙处在于只要选取合适的三对相等就能决定其余三对，但完全全等仍意味着全部 6 对都相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In two right triangles being compared with HL, the two matching sides used are the hypotenuse and one ___. Fill in the blank with the geometry term.",
        "zh": "用 HL 比较两个直角三角形时，所用的两条对应边是斜边和一条 ___。用几何术语填空。"
      },
      "answer": "leg",
      "accept": [
        "Leg",
        "legs",
        "直角边",
        "a leg",
        "one leg"
      ],
      "explanation": {
        "en": "HL stands for Hypotenuse-Leg, so besides the hypotenuse you match one leg (a side adjacent to the right angle). Naming the hypotenuse again would duplicate the H and ignore what the L represents.",
        "zh": "HL 表示斜边-直角边，因此除斜边外要对应一条直角边（与直角相邻的边）。若再说斜边就重复了 H，而忽略了 L 所代表的含义。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The abbreviation cited after a congruence to justify that a leftover pair of angles is equal is a 5-letter acronym. Write it.",
        "zh": "在全等之后，用来证明剩余一对角相等所引用的那个由 5 个字母组成的缩写是什么？请写出。"
      },
      "answer": "CPCTC",
      "accept": [
        "cpctc",
        "C.P.C.T.C.",
        "C.P.C.T.C"
      ],
      "explanation": {
        "en": "CPCTC (Corresponding Parts of Congruent Triangles are Congruent) is the reason cited to extract equal sides or angles after congruence is established. A criterion like ASA proves the congruence itself and is not used for this leftover-parts step.",
        "zh": "CPCTC（全等三角形的对应部分相等）是全等确立后用来提取相等边或角所引用的理由。像 ASA 这样的判定用于证明全等本身，而不用于这一提取剩余部分的步骤。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given triangle ABC = triangle DEF, side EF = 2x + 1, and its corresponding side BC = 9. Solve for x.",
        "zh": "已知三角形 ABC = 三角形 DEF，边 EF = 2x + 1，其对应边 BC = 9。求 x。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "x=4",
        "x = 4"
      ],
      "explanation": {
        "en": "Corresponding sides are equal, so 2x + 1 = 9, giving 2x = 8 and x = 4. Forgetting to subtract the 1 first (dividing 9 by 2) would give the wrong value 4.5.",
        "zh": "对应边相等，故 2x + 1 = 9，得 2x = 8，x = 4。若忘记先减去 1（直接用 9 除以 2），会得到错误的 4.5。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two triangles are known to have angles 40°, 65°, 75° each, and one pair of corresponding sides equal to 12. Are they congruent? Answer yes or no.",
        "zh": "两个三角形的角都是 40°、65°、75°，且有一对对应边都等于 12。它们全等吗？回答“是”或“否”。"
      },
      "answer": "yes",
      "accept": [
        "Yes",
        "YES",
        "是",
        "yes.",
        "是的"
      ],
      "explanation": {
        "en": "Two equal angles plus a pair of equal corresponding sides satisfies AAS (or ASA depending on the side's position), so the triangles are congruent. Equal angles alone (AAA) would not be enough, but here the shared side of length 12 fixes the size.",
        "zh": "两组角相等再加上一对相等的对应边，满足 AAS（依边的位置也可能是 ASA），故三角形全等。仅有角相等（AAA）并不足够，但此处长度为 12 的对应边确定了大小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a proof, the statement 'segment BD = segment BD' because a figure shares that segment is justified by the ___ Property. Give the one-word property name.",
        "zh": "在证明中，因图形共用线段 BD 而写“线段 BD = 线段 BD”，其依据是 ___ 性质。请给出这一性质的名称（一个词）。"
      },
      "answer": "Reflexive",
      "accept": [
        "reflexive",
        "自反",
        "自反性",
        "reflexive property"
      ],
      "explanation": {
        "en": "A quantity equal to itself is justified by the Reflexive Property, the standard reason for a shared side or angle. The Symmetric Property instead reverses an equality between two different quantities, which is not what a shared segment needs.",
        "zh": "某量等于其自身由自反性（Reflexive）保证，这是公共边或公共角的标准理由。对称性（Symmetric）是把两个不同量之间的等式反过来，这并非共用线段所需。"
      }
    }
  ],
  "congruence-proof/parallelograms-and-proofs": [
    {
      "type": "mc",
      "question": {
        "en": "In any parallelogram, opposite sides are always:",
        "zh": "在任意平行四边形中，对边总是："
      },
      "choices": [
        "Equal in length",
        "Perpendicular",
        "Unequal",
        "Curved"
      ],
      "answer": 0,
      "explanation": {
        "en": "A defining property of parallelograms is that opposite sides are both parallel and equal in length. Perpendicular sides would describe a rectangle's adjacent sides, not the opposite sides of a general parallelogram.",
        "zh": "平行四边形的一个基本性质是对边既平行又相等。垂直描述的是矩形相邻边的关系，而不是一般平行四边形对边的关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a parallelogram, consecutive (adjacent) angles are always:",
        "zh": "在平行四边形中，相邻的两个角总是："
      },
      "choices": [
        "Equal",
        "Supplementary",
        "Complementary",
        "Right angles"
      ],
      "answer": 1,
      "explanation": {
        "en": "Because opposite sides are parallel, each pair of consecutive angles are co-interior angles and sum to 180 degrees, making them supplementary. They are equal only in the special case of a rectangle, not in a general parallelogram.",
        "zh": "由于对边平行，每一对相邻角都是同旁内角，其和为 180 度，故互补。只有在矩形这一特殊情形下它们才相等，一般平行四边形并非如此。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is true for EVERY rectangle but NOT for every parallelogram?",
        "zh": "下列哪条性质对每个矩形都成立，但并非对每个平行四边形都成立？"
      },
      "choices": [
        "Opposite sides are parallel",
        "Opposite angles are equal",
        "The diagonals are equal in length",
        "Diagonals bisect each other"
      ],
      "answer": 2,
      "explanation": {
        "en": "A rectangle's diagonals are always equal in length, a property a slanted parallelogram lacks. Parallel opposite sides, equal opposite angles, and diagonals bisecting each other hold in every parallelogram, so they do not distinguish rectangles.",
        "zh": "矩形的对角线总是等长，而倾斜的平行四边形不具备这一点。对边平行、对角相等、对角线互相平分对每个平行四边形都成立，因此不能用来区分矩形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which special parallelogram is defined by having all four sides equal?",
        "zh": "哪种特殊平行四边形的定义是四条边都相等？"
      },
      "choices": [
        "Rectangle",
        "Kite",
        "Trapezoid",
        "Rhombus"
      ],
      "answer": 3,
      "explanation": {
        "en": "A rhombus is a parallelogram with all four sides equal. A rectangle instead guarantees four right angles, and a trapezoid is not a parallelogram at all, so neither fits the all-sides-equal definition.",
        "zh": "菱形是四条边都相等的平行四边形。矩形保证的是四个直角，而梯形根本不是平行四边形，所以都不符合“四边相等”的定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A square is best described as a quadrilateral that is:",
        "zh": "正方形最恰当的描述是它是一种同时具备哪些性质的四边形？"
      },
      "choices": [
        "Both a rectangle and a rhombus",
        "A rectangle but never a rhombus",
        "A rhombus but never a rectangle",
        "Neither a rectangle nor a rhombus"
      ],
      "answer": 0,
      "explanation": {
        "en": "A square has four right angles (rectangle property) and four equal sides (rhombus property), so it is both at once. Claiming it is only one of the two ignores that a square satisfies the full definition of each.",
        "zh": "正方形既有四个直角（矩形性质）又有四条相等的边（菱形性质），因此同时是两者。若说它只是其中之一，就忽略了正方形同时满足两者的完整定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The diagonals of a rhombus always intersect at what angle?",
        "zh": "菱形的对角线总是以多大的角度相交？"
      },
      "choices": [
        "45 degrees",
        "90 degrees",
        "60 degrees",
        "They do not intersect"
      ],
      "answer": 1,
      "explanation": {
        "en": "A rhombus's diagonals are perpendicular, meeting at 90 degrees, and they also bisect the vertex angles. Expecting 45 degrees confuses the angle a diagonal may make with a side for the angle between the two diagonals themselves.",
        "zh": "菱形的对角线互相垂直，相交成 90 度，并且平分顶角。若以为是 45 度，是把对角线与边所成的角误当成了两条对角线之间的夹角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which condition is SUFFICIENT to prove that a quadrilateral is a parallelogram?",
        "zh": "下列哪个条件足以证明一个四边形是平行四边形？"
      },
      "choices": [
        "One pair of opposite sides is parallel",
        "One pair of angles is equal",
        "The diagonals bisect each other",
        "All angles are acute"
      ],
      "answer": 2,
      "explanation": {
        "en": "If the diagonals bisect each other, the quadrilateral must be a parallelogram; this is a standard sufficient condition. A single pair of parallel sides only guarantees a trapezoid, since the other pair could be non-parallel.",
        "zh": "若对角线互相平分，则该四边形必为平行四边形，这是标准的充分条件。仅有一对边平行只能保证是梯形，因为另一对边可能不平行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To prove a quadrilateral is a parallelogram using the sides, it is enough to show that:",
        "zh": "用边来证明一个四边形是平行四边形，只需证明："
      },
      "choices": [
        "The perimeter is even",
        "All four sides are different lengths",
        "Only one side is longer than the others",
        "Both pairs of opposite sides are equal"
      ],
      "answer": 3,
      "explanation": {
        "en": "Showing both pairs of opposite sides are equal is a recognized sufficient condition for a parallelogram. Making just one side longer or comparing perimeters says nothing about the parallel structure and cannot establish the shape.",
        "zh": "证明两组对边分别相等是判定平行四边形的公认充分条件。仅让某一条边更长或比较周长，都无法说明平行结构，不能确定图形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In parallelogram ABCD, angle A measures 110 degrees. What is the measure of the opposite angle C?",
        "zh": "在平行四边形 ABCD 中，角 A 为 110 度。对角 C 的度数是多少？"
      },
      "choices": [
        "110 degrees",
        "70 degrees",
        "180 degrees",
        "55 degrees"
      ],
      "answer": 0,
      "explanation": {
        "en": "Opposite angles of a parallelogram are equal, so angle C equals angle A = 110 degrees. The value 70 is the supplementary angle B (a consecutive angle), not the opposite angle.",
        "zh": "平行四边形的对角相等，故角 C 等于角 A = 110 度。70 度是与之互补的相邻角 B，而不是对角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement correctly compares the diagonals of a rectangle and a rhombus?",
        "zh": "下列关于矩形和菱形对角线的比较，哪一项正确？"
      },
      "choices": [
        "A rectangle's diagonals are perpendicular; a rhombus's are equal",
        "A rectangle's diagonals are equal; a rhombus's are perpendicular",
        "Both have diagonals that are equal AND perpendicular",
        "Neither shape's diagonals bisect each other"
      ],
      "answer": 1,
      "explanation": {
        "en": "A rectangle's diagonals are equal in length, while a rhombus's diagonals are perpendicular; each shape has exactly one of these extra properties. Only a square (being both) has diagonals that are equal and perpendicular at the same time.",
        "zh": "矩形的对角线等长，而菱形的对角线互相垂直；每种图形恰好具备其中一条额外性质。只有正方形（兼具两者）的对角线才同时等长且垂直。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In parallelogram PQRS the diagonals meet at point M. If PM = 6, what is the length of the full diagonal PR?",
        "zh": "在平行四边形 PQRS 中，对角线相交于点 M。若 PM = 6，则整条对角线 PR 的长度是多少？"
      },
      "choices": [
        "3",
        "6",
        "12",
        "9"
      ],
      "answer": 2,
      "explanation": {
        "en": "The diagonals of a parallelogram bisect each other, so M is the midpoint of PR and PR = 2 times PM = 12. Leaving the answer as 6 forgets that PM is only half of the diagonal.",
        "zh": "平行四边形的对角线互相平分，故 M 是 PR 的中点，PR = 2 × PM = 12。若答 6，则忘了 PM 只是整条对角线的一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT necessarily a parallelogram?",
        "zh": "下列哪一种不一定是平行四边形？"
      },
      "choices": [
        "Rectangle",
        "Rhombus",
        "Square",
        "Trapezoid"
      ],
      "answer": 3,
      "explanation": {
        "en": "A trapezoid has only one pair of parallel sides, so it is not required to be a parallelogram. Rectangles, rhombi, and squares each have both pairs of opposite sides parallel and therefore always qualify.",
        "zh": "梯形只有一对边平行，因此不必是平行四边形。矩形、菱形和正方形都有两组对边平行，故总是平行四边形。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In parallelogram ABCD, angle A = 75 degrees. Find the measure, in degrees, of the consecutive angle B.",
        "zh": "在平行四边形 ABCD 中，角 A = 75 度。求相邻角 B 的度数。"
      },
      "answer": "105",
      "accept": [
        "105.0",
        "105 degrees",
        "105°",
        "105 deg"
      ],
      "explanation": {
        "en": "Consecutive angles of a parallelogram are supplementary, so angle B = 180 - 75 = 105 degrees. Answering 75 would treat B as an opposite (equal) angle instead of an adjacent one.",
        "zh": "平行四边形的相邻角互补，故角 B = 180 - 75 = 105 度。若答 75，则把 B 当成了对角（相等），而非相邻角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A parallelogram has one side of length 8 and an adjacent side of length 5. What is its perimeter?",
        "zh": "一个平行四边形有一条边长为 8，相邻边长为 5。它的周长是多少？"
      },
      "answer": "26",
      "accept": [
        "26.0",
        "26 units"
      ],
      "explanation": {
        "en": "Opposite sides are equal, so the perimeter is 2(8 + 5) = 26. Adding only 8 + 5 = 13 counts each pair of equal sides just once instead of twice.",
        "zh": "对边相等，故周长为 2(8 + 5) = 26。若只算 8 + 5 = 13，则把每对相等的边只算了一次而不是两次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In parallelogram ABCD, side AB = 3x and the opposite side DC = 21. Solve for x.",
        "zh": "在平行四边形 ABCD 中，边 AB = 3x，对边 DC = 21。求 x。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "x=7",
        "x = 7"
      ],
      "explanation": {
        "en": "Opposite sides of a parallelogram are equal, so 3x = 21 and x = 7. Dividing 21 by a wrong coefficient, or setting the sides supplementary, would misuse the equal-sides property.",
        "zh": "平行四边形对边相等，故 3x = 21，x = 7。若用错误的系数去除 21，或把两边当作互补，都误用了对边相等的性质。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The diagonals of parallelogram WXYZ bisect each other at M. If the whole diagonal WY = 18, what is WM?",
        "zh": "平行四边形 WXYZ 的对角线在 M 点互相平分。若整条对角线 WY = 18，则 WM 是多少？"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "9 units"
      ],
      "explanation": {
        "en": "Bisection means M is the midpoint, so WM is half of WY: WM = 18 / 2 = 9. Keeping 18 ignores that the diagonal is cut into two equal halves at M.",
        "zh": "互相平分意味着 M 是中点，故 WM 是 WY 的一半：WM = 18 / 2 = 9。若保留 18，则忽略了对角线在 M 处被分成相等的两半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A parallelogram in which all four sides are equal AND all four angles are right angles is called a ___. Give the shape's name.",
        "zh": "四条边都相等且四个角都是直角的平行四边形叫做 ___。请写出图形名称。"
      },
      "answer": "square",
      "accept": [
        "Square",
        "正方形",
        "a square"
      ],
      "explanation": {
        "en": "Four equal sides plus four right angles is exactly a square, which is both a rhombus and a rectangle. A rhombus alone would not require right angles, and a rectangle alone would not require equal sides.",
        "zh": "四边相等再加四个直角正是正方形，它既是菱形又是矩形。仅菱形不要求直角，仅矩形不要求四边相等。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a rhombus, one interior angle is 120 degrees. Because opposite angles are equal and consecutive angles are supplementary, what is the measure in degrees of an angle consecutive to it?",
        "zh": "在一个菱形中，一个内角为 120 度。由于对角相等、相邻角互补，与它相邻的角的度数是多少？"
      },
      "answer": "60",
      "accept": [
        "60.0",
        "60 degrees",
        "60°",
        "60 deg"
      ],
      "explanation": {
        "en": "A rhombus is a parallelogram, so consecutive angles add to 180: 180 - 120 = 60 degrees. Answering 120 again would confuse the equal opposite angle with the supplementary adjacent one.",
        "zh": "菱形是平行四边形，故相邻角之和为 180：180 - 120 = 60 度。若再答 120，则把相等的对角误当成了互补的相邻角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In parallelogram ABCD, angle A = (2x + 10) degrees and its opposite angle C = 50 degrees. Solve for x.",
        "zh": "在平行四边形 ABCD 中，角 A = (2x + 10) 度，其对角 C = 50 度。求 x。"
      },
      "answer": "20",
      "accept": [
        "20.0",
        "x=20",
        "x = 20"
      ],
      "explanation": {
        "en": "Opposite angles are equal, so 2x + 10 = 50, giving 2x = 40 and x = 20. Treating the angles as supplementary (setting the sum to 180) would misapply the property, since these are opposite, not consecutive, angles.",
        "zh": "对角相等，故 2x + 10 = 50，得 2x = 40，x = 20。若把两角当作互补（令其和为 180），则用错了性质，因为它们是对角而非相邻角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "True or false: every rectangle is also a parallelogram. Answer true or false.",
        "zh": "判断对错：每个矩形也是平行四边形。回答“对”或“错”。"
      },
      "answer": "true",
      "accept": [
        "True",
        "TRUE",
        "对",
        "yes",
        "Yes",
        "T"
      ],
      "explanation": {
        "en": "A rectangle has both pairs of opposite sides parallel, which is exactly the definition of a parallelogram, so the statement is true. The reverse is not always true, since a slanted parallelogram need not have right angles.",
        "zh": "矩形的两组对边都平行，这正是平行四边形的定义，故命题为真。反过来不一定成立，因为倾斜的平行四边形不必有直角。"
      }
    }
  ],
  "similarity-trigonometry/dilations-and-similarity": [
    {
      "type": "mc",
      "question": {
        "en": "The point $(4, -2)$ is dilated by a scale factor of $3$ centered at the origin. What is the image?",
        "zh": "点 $(4, -2)$ 以原点为中心、比例因子为 $3$ 进行位似变换。像是什么？"
      },
      "choices": [
        "$(12, -6)$",
        "$(7, 1)$",
        "$(12, -2)$",
        "$(\\frac{4}{3}, -\\frac{2}{3})$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a dilation centered at the origin, multiply each coordinate by the scale factor: $(4 \\times 3, -2 \\times 3) = (12, -6)$. Adding the scale factor to each coordinate instead of multiplying gives $(7, 1)$, which is not how dilations work.",
        "zh": "以原点为中心的位似变换，将每个坐标乘以比例因子：$(4 \\times 3, -2 \\times 3) = (12, -6)$。若把比例因子加到坐标上而不是相乘，会得到 $(7, 1)$，这是错误的方法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which best describes a dilation with a scale factor of $k = \\frac{1}{2}$?",
        "zh": "比例因子 $k = \\frac{1}{2}$ 的位似变换最恰当的描述是什么？"
      },
      "choices": [
        "An enlargement twice the original size",
        "A reduction to half the original size",
        "A rotation of $90^{\\circ}$",
        "A congruent figure the same size"
      ],
      "answer": 1,
      "explanation": {
        "en": "When $0 < k < 1$, the image shrinks, so $k = \\frac{1}{2}$ produces a reduction to half the size. Assuming every dilation enlarges the figure is a common mistake; the value of $k$ decides whether it grows or shrinks.",
        "zh": "当 $0 < k < 1$ 时，像会缩小，所以 $k = \\frac{1}{2}$ 会缩小到原来的一半。以为所有位似都是放大是常见错误；$k$ 的大小决定放大还是缩小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Triangle $ABC \\sim DEF$. Side $AB = 6$ corresponds to $DE = 9$, and $BC = 8$. What is $EF$?",
        "zh": "三角形 $ABC \\sim DEF$。边 $AB = 6$ 对应 $DE = 9$，且 $BC = 8$。求 $EF$。"
      },
      "choices": [
        "$5.33$",
        "$10$",
        "$12$",
        "$11$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The scale factor is $\\frac{9}{6} = 1.5$, so $EF = 8 \\times 1.5 = 12$. Adding the difference $9 - 6 = 3$ to $8$ to get $11$ ignores that similar sides are proportional, not related by a constant added amount.",
        "zh": "比例因子为 $\\frac{9}{6} = 1.5$，所以 $EF = 8 \\times 1.5 = 12$。把差 $9 - 6 = 3$ 加到 $8$ 上得 $11$，忽略了相似边是成比例的，而不是相差固定值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which condition is sufficient to prove two triangles are similar?",
        "zh": "以下哪个条件足以证明两个三角形相似？"
      },
      "choices": [
        "One pair of congruent angles",
        "Two pairs of congruent sides",
        "One pair of congruent sides",
        "Two pairs of congruent angles"
      ],
      "answer": 3,
      "explanation": {
        "en": "By the AA criterion, two pairs of congruent angles guarantee similarity (the third pair is then equal too). One pair of congruent angles alone is not enough to fix the shape.",
        "zh": "根据 AA 判定，两对角相等即可保证相似（此时第三对角也相等）。仅有一对角相等不足以确定形状。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $4 \\times 6$ rectangle is dilated to a $10 \\times 15$ rectangle. What is the scale factor?",
        "zh": "一个 $4 \\times 6$ 的矩形被位似放大为 $10 \\times 15$ 的矩形。比例因子是多少？"
      },
      "choices": [
        "$2.5$",
        "$1.5$",
        "$3$",
        "$2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Divide an image side by its original: $\\frac{10}{4} = 2.5$ (and $\\frac{15}{6} = 2.5$). Subtracting the sides instead of dividing does not give a scale factor.",
        "zh": "用像的边除以原边：$\\frac{10}{4} = 2.5$（且 $\\frac{15}{6} = 2.5$）。用减法而不是除法无法得到比例因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles are similar with a scale factor of $2$. The smaller triangle has a perimeter of $15$. What is the perimeter of the larger triangle?",
        "zh": "两个三角形相似，比例因子为 $2$。较小三角形的周长为 $15$。较大三角形的周长是多少？"
      },
      "choices": [
        "$7.5$",
        "$30$",
        "$60$",
        "$17$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Perimeter scales linearly with the scale factor: $15 \\times 2 = 30$. Squaring the scale factor to get $60$ applies the rule for area, not perimeter.",
        "zh": "周长按比例因子线性放大：$15 \\times 2 = 30$。把比例因子平方得 $60$ 用错了——那是面积的规律，不是周长。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A person $6$ ft tall casts a $4$ ft shadow. At the same time a tree casts a $20$ ft shadow. How tall is the tree?",
        "zh": "一个身高 $6$ 英尺的人投下 $4$ 英尺的影子。同时一棵树投下 $20$ 英尺的影子。树有多高？"
      },
      "choices": [
        "$13.3$ ft",
        "$18$ ft",
        "$30$ ft",
        "$22$ ft"
      ],
      "answer": 2,
      "explanation": {
        "en": "Set up proportional similar triangles: $\\frac{6}{4} = \\frac{h}{20}$, so $h = \\frac{6}{4} \\times 20 = 30$ ft. Matching height to shadow with the ratio flipped underestimates the height.",
        "zh": "建立成比例的相似三角形：$\\frac{6}{4} = \\frac{h}{20}$，所以 $h = \\frac{6}{4} \\times 20 = 30$ 英尺。把比例倒过来会低估树高。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For triangles to be similar by SSS, the three pairs of corresponding sides must be ___.",
        "zh": "要用 SSS 判定三角形相似，三对对应边必须是 ___。"
      },
      "choices": [
        "equal",
        "parallel",
        "perpendicular",
        "proportional"
      ],
      "answer": 3,
      "explanation": {
        "en": "SSS similarity requires all three pairs of corresponding sides to be proportional (a constant ratio). Requiring them to be equal is the condition for congruence, not similarity.",
        "zh": "SSS 相似要求三对对应边成比例（比值相同）。要求它们相等是全等的条件，而不是相似。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A segment of length $8$ is dilated by a scale factor of $\\frac{3}{4}$. What is the length of the image?",
        "zh": "一条长度为 $8$ 的线段以比例因子 $\\frac{3}{4}$ 进行位似变换。像的长度是多少？"
      },
      "choices": [
        "$6$",
        "$10.67$",
        "$\\frac{32}{3}$",
        "$8.75$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply the length by the scale factor: $8 \\times \\frac{3}{4} = 6$. Dividing by $\\frac{3}{4}$ instead gives $10.67$, which would enlarge a segment even though $k < 1$ should shrink it.",
        "zh": "把长度乘以比例因子：$8 \\times \\frac{3}{4} = 6$。若改为除以 $\\frac{3}{4}$ 会得 $10.67$，那样反而放大了线段，而 $k < 1$ 本应缩小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A figure with a side of length $12$ is dilated so the image side is $3$. What is the scale factor?",
        "zh": "一个边长为 $12$ 的图形经位似变换后像的对应边为 $3$。比例因子是多少？"
      },
      "choices": [
        "$4$",
        "$0.25$",
        "$0.5$",
        "$9$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Scale factor is image over original: $\\frac{3}{12} = 0.25$, a reduction. Using original over image gives $4$, which reverses the direction of the dilation.",
        "zh": "比例因子是像除以原：$\\frac{3}{12} = 0.25$，是缩小。用原除以像得 $4$，方向搞反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two triangles are similar. In the larger, two sides are $12$ and $20$. In the smaller, the side matching $12$ is $9$. What is the side matching $20$?",
        "zh": "两个三角形相似。较大三角形的两条边为 $12$ 和 $20$。较小三角形中对应 $12$ 的边为 $9$。对应 $20$ 的边是多少？"
      },
      "choices": [
        "$17$",
        "$23$",
        "$15$",
        "$16.7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The ratio is $\\frac{9}{12} = 0.75$, so the missing side is $20 \\times 0.75 = 15$. Subtracting the difference $12 - 9 = 3$ from $20$ to get $17$ treats the sides as differing by a constant rather than a ratio.",
        "zh": "比值为 $\\frac{9}{12} = 0.75$，所以缺失的边为 $20 \\times 0.75 = 15$。把差 $12 - 9 = 3$ 从 $20$ 减去得 $17$，错误地把边看作相差固定值而非成比例。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A triangle with a $50^{\\circ}$ angle is dilated by a scale factor of $2$. What is the measure of the corresponding angle in the image?",
        "zh": "一个含 $50^{\\circ}$ 角的三角形以比例因子 $2$ 进行位似变换。像中对应角的度数是多少？"
      },
      "choices": [
        "$25^{\\circ}$",
        "$100^{\\circ}$",
        "depends on the scale factor",
        "$50^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Dilations preserve angle measures, so the angle stays $50^{\\circ}$. Multiplying the angle by the scale factor to get $100^{\\circ}$ wrongly assumes angles scale like side lengths.",
        "zh": "位似变换保持角度不变，所以角仍是 $50^{\\circ}$。把角乘以比例因子得 $100^{\\circ}$，错误地以为角度像边长一样按比例变化。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A figure is dilated so a side of length $6$ becomes $18$. What is the scale factor?",
        "zh": "一个图形经位似变换，使长度为 $6$ 的边变为 $18$。比例因子是多少？"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Scale factor is image over original: $\\frac{18}{6} = 3$.",
        "zh": "比例因子是像除以原：$\\frac{18}{6} = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Triangle $ABC \\sim DEF$ with $\\frac{AB}{DE} = \\frac{8}{12}$. If $BC = 10$ corresponds to $EF$, find $EF$.",
        "zh": "三角形 $ABC \\sim DEF$，其中 $\\frac{AB}{DE} = \\frac{8}{12}$。若 $BC = 10$ 对应 $EF$，求 $EF$。"
      },
      "answer": "15",
      "accept": [
        "15.0"
      ],
      "explanation": {
        "en": "The scale factor from small to large is $\\frac{12}{8} = 1.5$, so $EF = 10 \\times 1.5 = 15$.",
        "zh": "从小到大的比例因子为 $\\frac{12}{8} = 1.5$，所以 $EF = 10 \\times 1.5 = 15$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The point $(5, -3)$ is dilated by a scale factor of $2$ about the origin. What is the $x$-coordinate of the image?",
        "zh": "点 $(5, -3)$ 以原点为中心、比例因子为 $2$ 进行位似变换。像的 $x$ 坐标是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "Multiply the $x$-coordinate by the scale factor: $5 \\times 2 = 10$.",
        "zh": "把 $x$ 坐标乘以比例因子：$5 \\times 2 = 10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $5$ ft stick casts a $3$ ft shadow. At the same time a flagpole casts a $24$ ft shadow. How tall is the flagpole, in feet?",
        "zh": "一根 $5$ 英尺长的竿子投下 $3$ 英尺的影子。同时一根旗杆投下 $24$ 英尺的影子。旗杆有多高（英尺）？"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "40 ft"
      ],
      "explanation": {
        "en": "Proportion: $\\frac{5}{3} = \\frac{h}{24}$, so $h = \\frac{5}{3} \\times 24 = 40$ ft.",
        "zh": "比例：$\\frac{5}{3} = \\frac{h}{24}$，所以 $h = \\frac{5}{3} \\times 24 = 40$ 英尺。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A figure is dilated so a side of length $20$ becomes $8$. What is the scale factor? (Give a decimal.)",
        "zh": "一个图形经位似变换，使长度为 $20$ 的边变为 $8$。比例因子是多少？（用小数表示。）"
      },
      "answer": "0.4",
      "accept": [
        "2/5",
        ".4",
        "0.40"
      ],
      "explanation": {
        "en": "Scale factor is image over original: $\\frac{8}{20} = 0.4$, a reduction.",
        "zh": "比例因子是像除以原：$\\frac{8}{20} = 0.4$，是缩小。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two similar polygons have a scale factor of $3$. The smaller has a perimeter of $14$. What is the perimeter of the larger?",
        "zh": "两个相似多边形的比例因子为 $3$。较小的周长为 $14$。较大的周长是多少？"
      },
      "answer": "42",
      "accept": [
        "42.0"
      ],
      "explanation": {
        "en": "Perimeter scales linearly: $14 \\times 3 = 42$.",
        "zh": "周长按比例线性放大：$14 \\times 3 = 42$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In similar triangles, $\\frac{3}{12} = \\frac{5}{x}$. Solve for $x$.",
        "zh": "在相似三角形中，$\\frac{3}{12} = \\frac{5}{x}$。求 $x$。"
      },
      "answer": "20",
      "accept": [
        "20.0"
      ],
      "explanation": {
        "en": "Cross-multiply: $3x = 12 \\times 5 = 60$, so $x = 20$.",
        "zh": "交叉相乘：$3x = 12 \\times 5 = 60$，所以 $x = 20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A scale model uses a scale factor of $\\frac{1}{50}$. If the real object is $300$ cm long, how long is the model, in cm?",
        "zh": "一个缩比模型使用 $\\frac{1}{50}$ 的比例因子。若实物长 $300$ 厘米，模型有多长（厘米）？"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "6 cm"
      ],
      "explanation": {
        "en": "Multiply by the scale factor: $300 \\times \\frac{1}{50} = 6$ cm.",
        "zh": "乘以比例因子：$300 \\times \\frac{1}{50} = 6$ 厘米。"
      }
    }
  ],
  "similarity-trigonometry/right-triangle-trigonometry": [
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle, the side opposite angle $\\theta$ is $3$ and the hypotenuse is $5$. What is $\\sin\\theta$?",
        "zh": "在一个直角三角形中，角 $\\theta$ 的对边为 $3$，斜边为 $5$。$\\sin\\theta$ 是多少？"
      },
      "choices": [
        "$0.6$",
        "$0.8$",
        "$0.75$",
        "$1.67$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Sine is opposite over hypotenuse: $\\frac{3}{5} = 0.6$. Using the adjacent side over the hypotenuse (that is cosine) would give $0.8$.",
        "zh": "正弦是对边比斜边：$\\frac{3}{5} = 0.6$。用邻边比斜边（那是余弦）会得 $0.8$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle, the side adjacent to angle $\\theta$ is $4$ and the hypotenuse is $5$. What is $\\cos\\theta$?",
        "zh": "在一个直角三角形中，角 $\\theta$ 的邻边为 $4$，斜边为 $5$。$\\cos\\theta$ 是多少？"
      },
      "choices": [
        "$0.6$",
        "$0.8$",
        "$0.75$",
        "$1.25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Cosine is adjacent over hypotenuse: $\\frac{4}{5} = 0.8$. Using the opposite side over the hypotenuse (that is sine) would give $0.6$.",
        "zh": "余弦是邻边比斜边：$\\frac{4}{5} = 0.8$。用对边比斜边（那是正弦）会得 $0.6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle, the side opposite angle $\\theta$ is $8$ and the adjacent side is $6$. What is $\\tan\\theta$?",
        "zh": "在一个直角三角形中，角 $\\theta$ 的对边为 $8$，邻边为 $6$。$\\tan\\theta$ 是多少？"
      },
      "choices": [
        "$0.6$",
        "$0.8$",
        "$1.33$",
        "$0.75$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Tangent is opposite over adjacent: $\\frac{8}{6} \\approx 1.33$. Flipping the ratio to adjacent over opposite gives $0.75$, which is $\\frac{1}{\\tan\\theta}$, not the tangent.",
        "zh": "正切是对边比邻边：$\\frac{8}{6} \\approx 1.33$。把比值倒为邻边比对边得 $0.75$，那是 $\\frac{1}{\\tan\\theta}$，不是正切。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A right triangle has a hypotenuse of $10$ and one angle of $30^{\\circ}$. What is the length of the side opposite the $30^{\\circ}$ angle?",
        "zh": "一个直角三角形斜边为 $10$，有一个 $30^{\\circ}$ 的角。$30^{\\circ}$ 角的对边长度是多少？"
      },
      "choices": [
        "$8.66$",
        "$10$",
        "$5.77$",
        "$5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Opposite $= \\text{hyp} \\times \\sin 30^{\\circ} = 10 \\times 0.5 = 5$. Using cosine instead of sine gives $8.66$, which is the adjacent side.",
        "zh": "对边 $= \\text{斜边} \\times \\sin 30^{\\circ} = 10 \\times 0.5 = 5$。用余弦代替正弦会得 $8.66$，那是邻边。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a right triangle, the side opposite angle $\\theta$ equals the side adjacent to it. What is $\\theta$?",
        "zh": "在一个直角三角形中，角 $\\theta$ 的对边等于它的邻边。$\\theta$ 是多少？"
      },
      "choices": [
        "$45^{\\circ}$",
        "$30^{\\circ}$",
        "$60^{\\circ}$",
        "$90^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "If opposite equals adjacent, then $\\tan\\theta = 1$, so $\\theta = \\tan^{-1}(1) = 45^{\\circ}$. Equal legs are the signature of a $45$-$45$-$90$ triangle.",
        "zh": "若对边等于邻边，则 $\\tan\\theta = 1$，所以 $\\theta = \\tan^{-1}(1) = 45^{\\circ}$。两直角边相等正是 $45$-$45$-$90$ 三角形的特征。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a $45$-$45$-$90$ triangle, each leg is $7$. What is the length of the hypotenuse?",
        "zh": "在一个 $45$-$45$-$90$ 三角形中，每条直角边为 $7$。斜边长度是多少？"
      },
      "choices": [
        "$7$",
        "$7\\sqrt{2}$",
        "$14$",
        "$3.5\\sqrt{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In a $45$-$45$-$90$ triangle the hypotenuse is leg $\\times \\sqrt{2}$, so it is $7\\sqrt{2}$. Doubling the leg to $14$ confuses this with a $30$-$60$-$90$ relationship.",
        "zh": "在 $45$-$45$-$90$ 三角形中，斜边是直角边 $\\times \\sqrt{2}$，所以是 $7\\sqrt{2}$。把直角边翻倍得 $14$ 是把它和 $30$-$60$-$90$ 的关系混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a $30$-$60$-$90$ triangle, the hypotenuse is $12$. What is the length of the shorter leg (opposite the $30^{\\circ}$ angle)?",
        "zh": "在一个 $30$-$60$-$90$ 三角形中，斜边为 $12$。较短直角边（$30^{\\circ}$ 角的对边）的长度是多少？"
      },
      "choices": [
        "$12\\sqrt{3}$",
        "$4$",
        "$6$",
        "$6\\sqrt{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The side opposite the $30^{\\circ}$ angle is half the hypotenuse: $\\frac{12}{2} = 6$. Multiplying by $\\sqrt{3}$ gives the longer leg, not the shorter one.",
        "zh": "$30^{\\circ}$ 角的对边是斜边的一半：$\\frac{12}{2} = 6$。乘以 $\\sqrt{3}$ 得到的是较长直角边，不是较短的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An observer on the ground is $40$ ft from the base of a building and the top is $30$ ft up. Which expression gives the angle of elevation?",
        "zh": "地面上的观察者距建筑底部 $40$ 英尺，顶部高 $30$ 英尺。哪个表达式给出仰角？"
      },
      "choices": [
        "$\\sin^{-1}(30/40)$",
        "$\\cos^{-1}(30/40)$",
        "$\\tan^{-1}(40/30)$",
        "$\\tan^{-1}(30/40)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The angle of elevation uses opposite over adjacent: $\\tan^{-1}\\left(\\frac{30}{40}\\right)$. Flipping the ratio to $\\frac{40}{30}$ would find the complementary angle instead.",
        "zh": "仰角用对边比邻边：$\\tan^{-1}\\left(\\frac{30}{40}\\right)$。把比值倒为 $\\frac{40}{30}$ 求出的是余角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "When you look up at a bird and it looks down at you, the bird's angle of depression is ___ your angle of elevation.",
        "zh": "当你抬头看鸟、鸟低头看你时，鸟的俯角与你的仰角的关系是 ___。"
      },
      "choices": [
        "equal to",
        "twice",
        "complementary to",
        "always $90^{\\circ}$ more than"
      ],
      "answer": 0,
      "explanation": {
        "en": "The angle of depression and the angle of elevation are equal because they are alternate interior angles formed by the horizontal parallel lines. They are not complementary.",
        "zh": "俯角与仰角相等，因为它们是水平平行线所形成的内错角。它们不是互余的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A right triangle has legs of $5$ and $12$. What is the length of the hypotenuse?",
        "zh": "一个直角三角形的两直角边为 $5$ 和 $12$。斜边的长度是多少？"
      },
      "choices": [
        "$17$",
        "$13$",
        "$11$",
        "$\\sqrt{119}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the Pythagorean theorem, hypotenuse $= \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$. Adding the legs directly to get $17$ skips the squaring step.",
        "zh": "由勾股定理，斜边 $= \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$。直接把两直角边相加得 $17$ 漏掉了平方这一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the exact value of $\\sin 30^{\\circ}$?",
        "zh": "$\\sin 30^{\\circ}$ 的精确值是多少？"
      },
      "choices": [
        "$0.866$",
        "$1$",
        "$0.5$",
        "$0.707$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\sin 30^{\\circ} = \\frac{1}{2} = 0.5$. The value $0.866$ is $\\cos 30^{\\circ}$, and $0.707$ is $\\sin 45^{\\circ}$.",
        "zh": "$\\sin 30^{\\circ} = \\frac{1}{2} = 0.5$。$0.866$ 是 $\\cos 30^{\\circ}$，$0.707$ 是 $\\sin 45^{\\circ}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A right triangle has an angle of $40^{\\circ}$ with an adjacent side of $10$. What is the length of the opposite side? (Round to two decimals.)",
        "zh": "一个直角三角形有一个 $40^{\\circ}$ 的角，邻边为 $10$。对边的长度是多少？（保留两位小数。）"
      },
      "choices": [
        "$7.66$",
        "$11.9$",
        "$6.43$",
        "$8.39$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Opposite $= \\text{adjacent} \\times \\tan 40^{\\circ} = 10 \\times 0.839 \\approx 8.39$. Using cosine gives $7.66$ (an adjacent-type ratio), not the opposite side.",
        "zh": "对边 $= \\text{邻边} \\times \\tan 40^{\\circ} = 10 \\times 0.839 \\approx 8.39$。用余弦得 $7.66$（属于邻边类的比值），不是对边。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a right triangle, the side opposite $\\theta$ is $7$ and the hypotenuse is $25$. What is $\\sin\\theta$? (Give a decimal.)",
        "zh": "在一个直角三角形中，$\\theta$ 的对边为 $7$，斜边为 $25$。$\\sin\\theta$ 是多少？（用小数表示。）"
      },
      "answer": "0.28",
      "accept": [
        "7/25",
        ".28",
        "0.280"
      ],
      "explanation": {
        "en": "Sine is opposite over hypotenuse: $\\frac{7}{25} = 0.28$.",
        "zh": "正弦是对边比斜边：$\\frac{7}{25} = 0.28$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has a hypotenuse of $20$ and an angle of $30^{\\circ}$. What is the length of the side opposite the $30^{\\circ}$ angle?",
        "zh": "一个直角三角形斜边为 $20$，有一个 $30^{\\circ}$ 的角。$30^{\\circ}$ 角对边的长度是多少？"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "Opposite $= 20 \\times \\sin 30^{\\circ} = 20 \\times 0.5 = 10$.",
        "zh": "对边 $= 20 \\times \\sin 30^{\\circ} = 20 \\times 0.5 = 10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the exact value of $\\tan 45^{\\circ}$?",
        "zh": "$\\tan 45^{\\circ}$ 的精确值是多少？"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "In a $45$-$45$-$90$ triangle the legs are equal, so $\\tan 45^{\\circ} = \\frac{\\text{opp}}{\\text{adj}} = 1$.",
        "zh": "在 $45$-$45$-$90$ 三角形中两直角边相等，所以 $\\tan 45^{\\circ} = \\frac{\\text{对边}}{\\text{邻边}} = 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a $45$-$45$-$90$ triangle the hypotenuse is $10$. What is the length of each leg? (Round to two decimals.)",
        "zh": "在一个 $45$-$45$-$90$ 三角形中斜边为 $10$。每条直角边的长度是多少？（保留两位小数。）"
      },
      "answer": "7.07",
      "accept": [
        "7.071",
        "7.1",
        "5sqrt2",
        "5\\sqrt{2}",
        "5√2"
      ],
      "explanation": {
        "en": "Leg $= \\frac{\\text{hyp}}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.07$.",
        "zh": "直角边 $= \\frac{\\text{斜边}}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.07$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In a $30$-$60$-$90$ triangle the shorter leg is $5$. What is the length of the longer leg? (Round to two decimals.)",
        "zh": "在一个 $30$-$60$-$90$ 三角形中较短直角边为 $5$。较长直角边的长度是多少？（保留两位小数。）"
      },
      "answer": "8.66",
      "accept": [
        "8.660",
        "8.7",
        "5sqrt3",
        "5\\sqrt{3}",
        "5√3"
      ],
      "explanation": {
        "en": "The longer leg is the shorter leg $\\times \\sqrt{3} = 5\\sqrt{3} \\approx 8.66$.",
        "zh": "较长直角边是较短直角边 $\\times \\sqrt{3} = 5\\sqrt{3} \\approx 8.66$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ramp rises $1$ ft for every $1$ ft it runs horizontally. What is the angle of elevation, in degrees?",
        "zh": "一个坡道每水平前进 $1$ 英尺就上升 $1$ 英尺。仰角是多少度？"
      },
      "answer": "45",
      "accept": [
        "45.0",
        "45°",
        "45 degrees"
      ],
      "explanation": {
        "en": "The angle of elevation is $\\tan^{-1}\\left(\\frac{1}{1}\\right) = \\tan^{-1}(1) = 45^{\\circ}$.",
        "zh": "仰角为 $\\tan^{-1}\\left(\\frac{1}{1}\\right) = \\tan^{-1}(1) = 45^{\\circ}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A right triangle has a hypotenuse of $10$ and one leg of $6$. What is the length of the other leg?",
        "zh": "一个直角三角形斜边为 $10$，一条直角边为 $6$。另一条直角边的长度是多少？"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "By the Pythagorean theorem, other leg $= \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$.",
        "zh": "由勾股定理，另一条直角边 $= \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the exact value of $\\cos 60^{\\circ}$? (Give a decimal.)",
        "zh": "$\\cos 60^{\\circ}$ 的精确值是多少？（用小数表示。）"
      },
      "answer": "0.5",
      "accept": [
        "1/2",
        ".5",
        "0.50"
      ],
      "explanation": {
        "en": "$\\cos 60^{\\circ} = \\frac{1}{2} = 0.5$.",
        "zh": "$\\cos 60^{\\circ} = \\frac{1}{2} = 0.5$。"
      }
    }
  ],
  "circles/angles-and-segments-in-circles": [
    {
      "type": "mc",
      "question": {
        "en": "A central angle of a circle measures $70^{\\circ}$. What is the measure of the arc it intercepts?",
        "zh": "圆的一个圆心角为 $70^{\\circ}$。它所截弧的度数是多少？"
      },
      "choices": [
        "$70^{\\circ}$",
        "$35^{\\circ}$",
        "$140^{\\circ}$",
        "$110^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A central angle has the SAME measure as its intercepted arc, so the arc is $70^{\\circ}$. Halving it to $35^{\\circ}$ confuses a central angle with an inscribed angle, and doubling to $140^{\\circ}$ reverses the inscribed-angle relationship.",
        "zh": "圆心角与其所截弧的度数相等，所以弧为 $70^{\\circ}$。把它减半得到 $35^{\\circ}$ 是把圆心角误当成圆周角，而加倍到 $140^{\\circ}$ 则用反了圆周角关系。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An inscribed angle intercepts an arc measuring $100^{\\circ}$. What is the measure of the inscribed angle?",
        "zh": "一个圆周角所截的弧为 $100^{\\circ}$。这个圆周角的度数是多少？"
      },
      "choices": [
        "$200^{\\circ}$",
        "$50^{\\circ}$",
        "$100^{\\circ}$",
        "$25^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the Inscribed Angle Theorem an inscribed angle is HALF its intercepted arc: $100/2 = 50^{\\circ}$. Using the full $100^{\\circ}$ treats it like a central angle, and doubling to $200^{\\circ}$ inverts the halving.",
        "zh": "根据圆周角定理，圆周角是所截弧的一半：$100/2 = 50^{\\circ}$。用整个 $100^{\\circ}$ 是把它当成了圆心角，而加倍到 $200^{\\circ}$ 则把减半用反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An angle is inscribed in a semicircle (its two sides pass through the endpoints of a diameter). What is its measure?",
        "zh": "一个角内接于半圆（它的两条边穿过一条直径的两端）。它的度数是多少？"
      },
      "choices": [
        "$180^{\\circ}$",
        "$45^{\\circ}$",
        "$90^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The arc of a semicircle is $180^{\\circ}$, and an inscribed angle is half its arc, giving $90^{\\circ}$ (a right angle). Answering $180^{\\circ}$ forgets to halve the arc.",
        "zh": "半圆的弧为 $180^{\\circ}$，圆周角是弧的一半，得到 $90^{\\circ}$（直角）。回答 $180^{\\circ}$ 是忘了把弧减半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two inscribed angles in the same circle intercept the SAME arc. One measures $40^{\\circ}$. What is the measure of the other?",
        "zh": "同一圆中，两个圆周角截同一条弧。其中一个为 $40^{\\circ}$。另一个的度数是多少？"
      },
      "choices": [
        "$20^{\\circ}$",
        "$80^{\\circ}$",
        "$140^{\\circ}$",
        "$40^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Inscribed angles that intercept the same arc are EQUAL, so the other is also $40^{\\circ}$. Halving or doubling wrongly assumes one is a central angle relative to the other.",
        "zh": "截同一条弧的圆周角相等，所以另一个也是 $40^{\\circ}$。减半或加倍是错误地假设其中一个相对于另一个是圆心角。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A tangent and a chord meet at the point of tangency, forming an angle that intercepts an arc of $120^{\\circ}$. What is the angle's measure?",
        "zh": "一条切线与一条弦在切点相交，所成的角截得 $120^{\\circ}$ 的弧。这个角的度数是多少？"
      },
      "choices": [
        "$60^{\\circ}$",
        "$30^{\\circ}$",
        "$240^{\\circ}$",
        "$120^{\\circ}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A tangent-chord angle equals HALF its intercepted arc: $120/2 = 60^{\\circ}$. Using the whole $120^{\\circ}$ ignores the one-half factor that all inscribed-type angles share.",
        "zh": "弦切角等于所截弧的一半：$120/2 = 60^{\\circ}$。用整个 $120^{\\circ}$ 忽略了这类角共有的二分之一系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two chords intersect INSIDE a circle. The two intercepted arcs measure $80^{\\circ}$ and $40^{\\circ}$. What is the measure of the angle formed?",
        "zh": "两条弦在圆内相交。两条被截的弧分别为 $80^{\\circ}$ 和 $40^{\\circ}$。所成角的度数是多少？"
      },
      "choices": [
        "$40^{\\circ}$",
        "$60^{\\circ}$",
        "$120^{\\circ}$",
        "$20^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "An angle formed by two chords meeting inside a circle is HALF the SUM of the two intercepted arcs: $(80+40)/2 = 60^{\\circ}$. Taking half the difference is the rule for a vertex OUTSIDE the circle, not inside.",
        "zh": "两弦在圆内相交所成的角，等于两条所截弧之和的一半：$(80+40)/2 = 60^{\\circ}$。取差的一半是顶点在圆外时的法则，不适用于圆内。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two secants meet at a point OUTSIDE a circle. The intercepted arcs measure $110^{\\circ}$ (far) and $30^{\\circ}$ (near). What is the measure of the angle at the external point?",
        "zh": "两条割线在圆外一点相交。所截的弧为 $110^{\\circ}$（远弧）和 $30^{\\circ}$（近弧）。外部点处角的度数是多少？"
      },
      "choices": [
        "$70^{\\circ}$",
        "$140^{\\circ}$",
        "$40^{\\circ}$",
        "$80^{\\circ}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "An external angle equals HALF the DIFFERENCE of the intercepted arcs: $(110-30)/2 = 40^{\\circ}$. Taking half the sum, $70^{\\circ}$, is the interior-intersection rule and does not apply outside the circle.",
        "zh": "外部角等于两截弧之差的一半：$(110-30)/2 = 40^{\\circ}$。取和的一半得 $70^{\\circ}$ 是圆内相交的法则，不适用于圆外。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A tangent and a secant meet at a point OUTSIDE a circle, intercepting arcs of $150^{\\circ}$ (far) and $50^{\\circ}$ (near). What is the measure of the external angle?",
        "zh": "一条切线与一条割线在圆外一点相交，所截的弧为 $150^{\\circ}$（远弧）和 $50^{\\circ}$（近弧）。外部角的度数是多少？"
      },
      "choices": [
        "$100^{\\circ}$",
        "$200^{\\circ}$",
        "$25^{\\circ}$",
        "$50^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The external angle is half the difference of the arcs: $(150-50)/2 = 50^{\\circ}$. Using the difference $100^{\\circ}$ without halving skips the one-half factor common to all these angle rules.",
        "zh": "外部角等于两弧之差的一半：$(150-50)/2 = 50^{\\circ}$。用差 $100^{\\circ}$ 而不减半，漏掉了这些角法则共有的二分之一系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two chords intersect inside a circle. One chord is split into segments of length $6$ and $4$; the other into segments $8$ and $x$. Find $x$.",
        "zh": "两条弦在圆内相交。一条弦被分成长度 $6$ 和 $4$ 的两段；另一条被分成 $8$ 和 $x$。求 $x$。"
      },
      "choices": [
        "$3$",
        "$4$",
        "$12$",
        "$2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the intersecting-chords product rule, $6 \\times 4 = 8 \\times x$, so $24 = 8x$ and $x = 3$. Adding the segments instead of multiplying, or matching $6+4=8+x$, gives the wrong value.",
        "zh": "根据相交弦的乘积法则，$6 \\times 4 = 8 \\times x$，所以 $24 = 8x$，$x = 3$。用相加而非相乘，或令 $6+4=8+x$，都会得到错误答案。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quadrilateral is inscribed in a circle (cyclic). One angle measures $85^{\\circ}$. What is the measure of the angle OPPOSITE to it?",
        "zh": "一个四边形内接于圆（圆内接四边形）。其中一个角为 $85^{\\circ}$。与它相对的角的度数是多少？"
      },
      "choices": [
        "$85^{\\circ}$",
        "$95^{\\circ}$",
        "$105^{\\circ}$",
        "$275^{\\circ}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Opposite angles of a cyclic quadrilateral are SUPPLEMENTARY (sum to $180^{\\circ}$): $180 - 85 = 95^{\\circ}$. Assuming they are equal ($85^{\\circ}$) confuses this with a parallelogram property.",
        "zh": "圆内接四边形的对角互补（和为 $180^{\\circ}$）：$180 - 85 = 95^{\\circ}$。假设它们相等（$85^{\\circ}$）是把它与平行四边形的性质混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line is tangent to a circle at point $P$. What is the relationship between the tangent line and the radius drawn to $P$?",
        "zh": "一条直线在点 $P$ 处与圆相切。这条切线与画到 $P$ 的半径之间是什么关系？"
      },
      "choices": [
        "parallel to it",
        "equal in length to it",
        "perpendicular to it",
        "bisecting it"
      ],
      "answer": 2,
      "explanation": {
        "en": "A tangent line is always PERPENDICULAR to the radius at the point of tangency, forming a $90^{\\circ}$ angle. Thinking it is parallel ignores that the radius points straight out to meet the tangent.",
        "zh": "切线在切点处始终与半径垂直，成 $90^{\\circ}$ 角。认为它平行忽略了半径正好指向外与切线相交。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From an external point, a tangent of length $6$ and a secant are drawn. The secant's external segment is $4$ and its total length is $x$. Find $x$.",
        "zh": "从一个外部点作一条长度为 $6$ 的切线和一条割线。割线的外段为 $4$，全长为 $x$。求 $x$。"
      },
      "choices": [
        "$6$",
        "$12$",
        "$8$",
        "$9$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The tangent-secant rule gives (tangent)$^2 =$ (external)$\\times$(whole): $6^2 = 4 \\times x$, so $36 = 4x$ and $x = 9$. Setting $6^2 = 4 + x$ or forgetting to square the tangent gives a wrong result.",
        "zh": "切线-割线法则给出（切线）$^2 =$（外段）$\\times$（全长）：$6^2 = 4 \\times x$，所以 $36 = 4x$，$x = 9$。令 $6^2 = 4 + x$ 或忘记平方切线都会出错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A central angle intercepts an arc measuring $130^{\\circ}$. What is the measure of the central angle, in degrees?",
        "zh": "一个圆心角截得 $130^{\\circ}$ 的弧。这个圆心角的度数是多少（度）？"
      },
      "answer": "130",
      "accept": [
        "130",
        "130.0",
        "130°",
        "130 degrees",
        "130度"
      ],
      "explanation": {
        "en": "A central angle equals its intercepted arc, so the angle is $130^{\\circ}$. Halving to $65^{\\circ}$ would apply the inscribed-angle rule, which is not used for a central angle.",
        "zh": "圆心角等于所截弧，所以角为 $130^{\\circ}$。减半到 $65^{\\circ}$ 会用圆周角法则，而圆心角不适用。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An inscribed angle intercepts an arc of $86^{\\circ}$. What is the measure of the inscribed angle, in degrees?",
        "zh": "一个圆周角截得 $86^{\\circ}$ 的弧。这个圆周角的度数是多少（度）？"
      },
      "answer": "43",
      "accept": [
        "43",
        "43.0",
        "43°",
        "43 degrees",
        "43度"
      ],
      "explanation": {
        "en": "An inscribed angle is half its intercepted arc: $86/2 = 43^{\\circ}$. Using the full $86^{\\circ}$ treats it as a central angle.",
        "zh": "圆周角是所截弧的一半：$86/2 = 43^{\\circ}$。用整个 $86^{\\circ}$ 是把它当成圆心角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two chords intersect inside a circle, intercepting arcs of $50^{\\circ}$ and $70^{\\circ}$. What is the measure of the angle formed, in degrees?",
        "zh": "两条弦在圆内相交，截得 $50^{\\circ}$ 和 $70^{\\circ}$ 的弧。所成角的度数是多少（度）？"
      },
      "answer": "60",
      "accept": [
        "60",
        "60.0",
        "60°",
        "60 degrees",
        "60度"
      ],
      "explanation": {
        "en": "The interior angle is half the SUM of the arcs: $(50+70)/2 = 60^{\\circ}$. Taking half the difference would be the external-point rule and gives the wrong angle.",
        "zh": "圆内角是两弧之和的一半：$(50+70)/2 = 60^{\\circ}$。取差的一半是圆外点的法则，会得到错误的角。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two secants meet outside a circle, intercepting arcs of $140^{\\circ}$ (far) and $40^{\\circ}$ (near). What is the measure of the external angle, in degrees?",
        "zh": "两条割线在圆外相交，截得 $140^{\\circ}$（远）和 $40^{\\circ}$（近）的弧。外部角的度数是多少（度）？"
      },
      "answer": "50",
      "accept": [
        "50",
        "50.0",
        "50°",
        "50 degrees",
        "50度"
      ],
      "explanation": {
        "en": "The external angle is half the DIFFERENCE of the arcs: $(140-40)/2 = 50^{\\circ}$. Taking half the sum, $90^{\\circ}$, is the interior rule and does not apply outside the circle.",
        "zh": "外部角是两弧之差的一半：$(140-40)/2 = 50^{\\circ}$。取和的一半得 $90^{\\circ}$ 是圆内法则，不适用于圆外。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Two chords intersect inside a circle. One chord is divided into segments $5$ and $6$. The other has one segment of length $3$; find the length of its other segment.",
        "zh": "两条弦在圆内相交。一条弦被分成 $5$ 和 $6$。另一条有一段长 $3$；求它另一段的长度。"
      },
      "answer": "10",
      "accept": [
        "10",
        "10.0"
      ],
      "explanation": {
        "en": "Products of the two parts of each chord are equal: $5 \\times 6 = 3 \\times x$, so $30 = 3x$ and $x = 10$. Subtracting or adding segments instead of using the product rule gives a wrong length.",
        "zh": "每条弦两段的乘积相等：$5 \\times 6 = 3 \\times x$，所以 $30 = 3x$，$x = 10$。用加减而非乘积法则会得到错误长度。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "From an external point a tangent of length $8$ and a secant with total length $16$ are drawn. What is the length of the secant's external segment?",
        "zh": "从一个外部点作一条长为 $8$ 的切线和一条全长为 $16$ 的割线。求割线外段的长度。"
      },
      "answer": "4",
      "accept": [
        "4",
        "4.0"
      ],
      "explanation": {
        "en": "(tangent)$^2 =$ (external)$\\times$(whole): $8^2 = x \\times 16$, so $64 = 16x$ and $x = 4$. Forgetting to square the tangent, using $8 = 16x$, gives a wrong value.",
        "zh": "（切线）$^2 =$（外段）$\\times$（全长）：$8^2 = x \\times 16$，所以 $64 = 16x$，$x = 4$。忘记平方切线（用 $8 = 16x$）会出错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An inscribed angle measures $35^{\\circ}$. What is the measure of the arc it intercepts, in degrees?",
        "zh": "一个圆周角为 $35^{\\circ}$。它所截弧的度数是多少（度）？"
      },
      "answer": "70",
      "accept": [
        "70",
        "70.0",
        "70°",
        "70 degrees",
        "70度"
      ],
      "explanation": {
        "en": "The arc is TWICE the inscribed angle: $2 \\times 35 = 70^{\\circ}$. Answering $35^{\\circ}$ or halving to $17.5^{\\circ}$ reverses the doubling that recovers the arc.",
        "zh": "弧是圆周角的两倍：$2 \\times 35 = 70^{\\circ}$。回答 $35^{\\circ}$ 或减半到 $17.5^{\\circ}$ 都用反了求弧所需的加倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tangent and a chord form an angle that intercepts an arc of $100^{\\circ}$. What is the measure of the tangent-chord angle, in degrees?",
        "zh": "一条切线与一条弦所成的角截得 $100^{\\circ}$ 的弧。求这个弦切角的度数（度）。"
      },
      "answer": "50",
      "accept": [
        "50",
        "50.0",
        "50°",
        "50 degrees",
        "50度"
      ],
      "explanation": {
        "en": "A tangent-chord angle is half its intercepted arc: $100/2 = 50^{\\circ}$. Using the whole $100^{\\circ}$ ignores the one-half factor these angles share with inscribed angles.",
        "zh": "弦切角是所截弧的一半：$100/2 = 50^{\\circ}$。用整个 $100^{\\circ}$ 忽略了这类角与圆周角共有的二分之一系数。"
      }
    }
  ],
  "circles/arc-length-sector-area-and-equations": [
    {
      "type": "mc",
      "question": {
        "en": "What is the center of the circle $(x-3)^2+(y+2)^2=25$?",
        "zh": "圆 $(x-3)^2+(y+2)^2=25$ 的圆心是什么？"
      },
      "choices": [
        "$(3, -2)$",
        "$(-3, 2)$",
        "$(3, 2)$",
        "$(-3, -2)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In $(x-h)^2+(y-k)^2=r^2$ the center is $(h,k)$. Here $x-3$ gives $h=3$ and $y+2 = y-(-2)$ gives $k=-2$, so the center is $(3,-2)$. Reading the signs straight off the equation as $(-3,2)$ forgets that the form subtracts the coordinates.",
        "zh": "在 $(x-h)^2+(y-k)^2=r^2$ 中，圆心为 $(h,k)$。这里 $x-3$ 给出 $h=3$，$y+2 = y-(-2)$ 给出 $k=-2$，所以圆心为 $(3,-2)$。直接照抄符号得 $(-3,2)$ 忘了该形式是减去坐标。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the radius of the circle $(x-3)^2+(y+2)^2=25$?",
        "zh": "圆 $(x-3)^2+(y+2)^2=25$ 的半径是多少？"
      },
      "choices": [
        "$25$",
        "$5$",
        "$12.5$",
        "$10$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The right side is $r^2$, so $r=\\sqrt{25}=5$. Using $25$ directly forgets that the constant is the square of the radius, not the radius itself.",
        "zh": "右边是 $r^2$，所以 $r=\\sqrt{25}=5$。直接用 $25$ 忘了这个常数是半径的平方，而非半径本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $10$. What is the length of an arc cut off by a central angle of $90^{\\circ}$?",
        "zh": "一个圆半径为 $10$。$90^{\\circ}$ 圆心角所截弧的长度是多少？"
      },
      "choices": [
        "$2.5\\pi$",
        "$10\\pi$",
        "$5\\pi$",
        "$20\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Arc length $= \\frac{\\theta}{360}\\cdot 2\\pi r = \\frac{90}{360}\\cdot 2\\pi(10) = \\frac{1}{4}\\cdot 20\\pi = 5\\pi$. Using the full circumference $20\\pi$ forgets to scale by the fraction of the circle the angle covers.",
        "zh": "弧长 $= \\frac{\\theta}{360}\\cdot 2\\pi r = \\frac{90}{360}\\cdot 2\\pi(10) = \\frac{1}{4}\\cdot 20\\pi = 5\\pi$。用整个周长 $20\\pi$ 忘了按角所占圆的比例缩放。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $6$. What is the area of a sector with central angle $60^{\\circ}$?",
        "zh": "一个圆半径为 $6$。圆心角为 $60^{\\circ}$ 的扇形面积是多少？"
      },
      "choices": [
        "$36\\pi$",
        "$12\\pi$",
        "$3\\pi$",
        "$6\\pi$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Sector area $= \\frac{\\theta}{360}\\cdot \\pi r^2 = \\frac{60}{360}\\cdot \\pi(36) = \\frac{1}{6}\\cdot 36\\pi = 6\\pi$. Using the whole area $36\\pi$ skips the fraction $\\frac{60}{360}$ of the circle.",
        "zh": "扇形面积 $= \\frac{\\theta}{360}\\cdot \\pi r^2 = \\frac{60}{360}\\cdot \\pi(36) = \\frac{1}{6}\\cdot 36\\pi = 6\\pi$。用整个面积 $36\\pi$ 漏掉了圆的比例 $\\frac{60}{360}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $180^{\\circ}$ to radians.",
        "zh": "把 $180^{\\circ}$ 转换为弧度。"
      },
      "choices": [
        "$\\pi$",
        "$2\\pi$",
        "$\\frac{\\pi}{2}$",
        "$\\frac{\\pi}{4}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply degrees by $\\frac{\\pi}{180}$: $180\\cdot\\frac{\\pi}{180}=\\pi$. Choosing $2\\pi$ confuses a half-turn with a full turn.",
        "zh": "度数乘以 $\\frac{\\pi}{180}$：$180\\cdot\\frac{\\pi}{180}=\\pi$。选 $2\\pi$ 是把半圈误当成整圈。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $90^{\\circ}$ to radians.",
        "zh": "把 $90^{\\circ}$ 转换为弧度。"
      },
      "choices": [
        "$\\pi$",
        "$\\frac{\\pi}{2}$",
        "$\\frac{\\pi}{4}$",
        "$2\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$90\\cdot\\frac{\\pi}{180}=\\frac{\\pi}{2}$. Answering $\\pi$ corresponds to $180^{\\circ}$, twice the given angle.",
        "zh": "$90\\cdot\\frac{\\pi}{180}=\\frac{\\pi}{2}$。回答 $\\pi$ 对应 $180^{\\circ}$，是所给角的两倍。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the equation of a circle centered at the origin with radius $7$?",
        "zh": "以原点为圆心、半径为 $7$ 的圆的方程是什么？"
      },
      "choices": [
        "$x^2+y^2=7$",
        "$x^2+y^2=14$",
        "$x^2+y^2=49$",
        "$(x-7)^2+(y-7)^2=49$"
      ],
      "answer": 2,
      "explanation": {
        "en": "With center $(0,0)$ the equation is $x^2+y^2=r^2 = 7^2 = 49$. Writing $x^2+y^2=7$ forgets to square the radius.",
        "zh": "圆心为 $(0,0)$ 时方程为 $x^2+y^2=r^2 = 7^2 = 49$。写成 $x^2+y^2=7$ 忘了把半径平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By completing the square, find the center of the circle $x^2+y^2-6x+8y+9=0$.",
        "zh": "通过配方，求圆 $x^2+y^2-6x+8y+9=0$ 的圆心。"
      },
      "choices": [
        "$(-3, 4)$",
        "$(6, -8)$",
        "$(3, 4)$",
        "$(3, -4)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Grouping gives $(x-3)^2+(y+4)^2=16$, so the center is $(3,-4)$. Taking the center as $(6,-8)$ uses the raw coefficients of $x$ and $y$ instead of halving them.",
        "zh": "配方得 $(x-3)^2+(y+4)^2=16$，所以圆心为 $(3,-4)$。把圆心取为 $(6,-8)$ 是直接用了 $x$、$y$ 的系数而没有取其一半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "By completing the square, find the radius of the circle $x^2+y^2+4x-2y-4=0$.",
        "zh": "通过配方，求圆 $x^2+y^2+4x-2y-4=0$ 的半径。"
      },
      "choices": [
        "$3$",
        "$9$",
        "$4.5$",
        "$6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Completing the square gives $(x+2)^2+(y-1)^2=9$, so $r=\\sqrt{9}=3$. Answering $9$ reports $r^2$ instead of taking the square root.",
        "zh": "配方得 $(x+2)^2+(y-1)^2=9$，所以 $r=\\sqrt{9}=3$。回答 $9$ 是报了 $r^2$ 而没有开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $8$. Using the radian formula, what is the arc length for a central angle of $\\frac{\\pi}{4}$ radians?",
        "zh": "一个圆半径为 $8$。用弧度公式，圆心角为 $\\frac{\\pi}{4}$ 弧度时弧长是多少？"
      },
      "choices": [
        "$4\\pi$",
        "$2\\pi$",
        "$\\pi$",
        "$8\\pi$"
      ],
      "answer": 1,
      "explanation": {
        "en": "With $\\theta$ in radians, arc length $= r\\theta = 8\\cdot\\frac{\\pi}{4} = 2\\pi$. Using the degree formula's $2\\pi r$ scaling by mistake, or dropping the radius, gives a wrong length.",
        "zh": "当 $\\theta$ 以弧度表示时，弧长 $= r\\theta = 8\\cdot\\frac{\\pi}{4} = 2\\pi$。误用度数公式的 $2\\pi r$ 缩放，或漏掉半径，都会得到错误长度。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A circle has radius $4$. Using the radian formula, what is the area of a sector with central angle $\\frac{\\pi}{2}$ radians?",
        "zh": "一个圆半径为 $4$。用弧度公式，圆心角为 $\\frac{\\pi}{2}$ 弧度的扇形面积是多少？"
      },
      "choices": [
        "$8\\pi$",
        "$16\\pi$",
        "$4\\pi$",
        "$2\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Sector area (radians) $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(16)\\frac{\\pi}{2} = 4\\pi$. Forgetting the factor of $\\frac{1}{2}$ gives $8\\pi$.",
        "zh": "扇形面积（弧度）$= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(16)\\frac{\\pi}{2} = 4\\pi$。忘记 $\\frac{1}{2}$ 系数会得到 $8\\pi$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $\\frac{\\pi}{3}$ radians to degrees.",
        "zh": "把 $\\frac{\\pi}{3}$ 弧度转换为度。"
      },
      "choices": [
        "$30^{\\circ}$",
        "$45^{\\circ}$",
        "$90^{\\circ}$",
        "$60^{\\circ}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply radians by $\\frac{180}{\\pi}$: $\\frac{\\pi}{3}\\cdot\\frac{180}{\\pi} = 60^{\\circ}$. Answering $30^{\\circ}$ divides by the wrong factor (as if the angle were $\\frac{\\pi}{6}$).",
        "zh": "弧度乘以 $\\frac{180}{\\pi}$：$\\frac{\\pi}{3}\\cdot\\frac{180}{\\pi} = 60^{\\circ}$。回答 $30^{\\circ}$ 用错了因子（好像角是 $\\frac{\\pi}{6}$）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the radius of the circle $(x-5)^2+(y-1)^2=36$?",
        "zh": "圆 $(x-5)^2+(y-1)^2=36$ 的半径是多少？"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0"
      ],
      "explanation": {
        "en": "The right side is $r^2=36$, so $r=\\sqrt{36}=6$. Reporting $36$ mistakes $r^2$ for the radius.",
        "zh": "右边是 $r^2=36$，所以 $r=\\sqrt{36}=6$。报 $36$ 是把 $r^2$ 误当成半径。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the center of the circle $(x+4)^2+(y-7)^2=10$? Write your answer as an ordered pair, e.g. $(a, b)$.",
        "zh": "圆 $(x+4)^2+(y-7)^2=10$ 的圆心是什么？请写成有序对，例如 $(a, b)$。"
      },
      "answer": "(-4, 7)",
      "accept": [
        "(-4, 7)",
        "(-4,7)",
        "-4, 7",
        "-4,7"
      ],
      "explanation": {
        "en": "Since $x+4 = x-(-4)$ and $y-7$, the center is $(-4,7)$. Copying signs directly to get $(4,-7)$ ignores that the standard form subtracts each coordinate.",
        "zh": "由于 $x+4 = x-(-4)$ 且 $y-7$，圆心为 $(-4,7)$。直接照抄符号得 $(4,-7)$ 忽略了标准式是减去每个坐标。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $12$. Find the arc length for a central angle of $30^{\\circ}$. Give the exact answer in terms of $\\pi$.",
        "zh": "一个圆半径为 $12$。求圆心角为 $30^{\\circ}$ 时的弧长。用含 $\\pi$ 的精确形式表示。"
      },
      "answer": "2π",
      "accept": [
        "2π",
        "2pi",
        "2*pi",
        "2 pi",
        "6.28",
        "6.283",
        "6.2832"
      ],
      "explanation": {
        "en": "Arc length $= \\frac{30}{360}\\cdot 2\\pi(12) = \\frac{1}{12}\\cdot 24\\pi = 2\\pi$. Using the full circumference $24\\pi$ forgets the fraction $\\frac{30}{360}$.",
        "zh": "弧长 $= \\frac{30}{360}\\cdot 2\\pi(12) = \\frac{1}{12}\\cdot 24\\pi = 2\\pi$。用整个周长 $24\\pi$ 忘了比例 $\\frac{30}{360}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $10$. Find the area of a sector with central angle $36^{\\circ}$. Give the exact answer in terms of $\\pi$.",
        "zh": "一个圆半径为 $10$。求圆心角为 $36^{\\circ}$ 的扇形面积。用含 $\\pi$ 的精确形式表示。"
      },
      "answer": "10π",
      "accept": [
        "10π",
        "10pi",
        "10*pi",
        "10 pi",
        "31.4",
        "31.42",
        "31.416"
      ],
      "explanation": {
        "en": "Sector area $= \\frac{36}{360}\\cdot \\pi(10)^2 = \\frac{1}{10}\\cdot 100\\pi = 10\\pi$. Using the whole area $100\\pi$ skips the fraction of the circle.",
        "zh": "扇形面积 $= \\frac{36}{360}\\cdot \\pi(10)^2 = \\frac{1}{10}\\cdot 100\\pi = 10\\pi$。用整个面积 $100\\pi$ 漏掉了圆的比例。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $270^{\\circ}$ to radians. Give the exact answer in terms of $\\pi$.",
        "zh": "把 $270^{\\circ}$ 转换为弧度。用含 $\\pi$ 的精确形式表示。"
      },
      "answer": "3π/2",
      "accept": [
        "3π/2",
        "3pi/2",
        "3*pi/2",
        "(3/2)π",
        "1.5π",
        "1.5pi",
        "4.71",
        "4.712",
        "4.7124"
      ],
      "explanation": {
        "en": "$270\\cdot\\frac{\\pi}{180} = \\frac{270\\pi}{180} = \\frac{3\\pi}{2}$. Answering $\\frac{2\\pi}{3}$ flips the fraction of the conversion.",
        "zh": "$270\\cdot\\frac{\\pi}{180} = \\frac{270\\pi}{180} = \\frac{3\\pi}{2}$。回答 $\\frac{2\\pi}{3}$ 是把转换的分数颠倒了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $\\frac{2\\pi}{3}$ radians to degrees.",
        "zh": "把 $\\frac{2\\pi}{3}$ 弧度转换为度。"
      },
      "answer": "120",
      "accept": [
        "120",
        "120.0",
        "120°",
        "120 degrees",
        "120度"
      ],
      "explanation": {
        "en": "$\\frac{2\\pi}{3}\\cdot\\frac{180}{\\pi} = \\frac{2\\cdot180}{3} = 120^{\\circ}$. Answering $60^{\\circ}$ uses only $\\frac{\\pi}{3}$, half the given angle.",
        "zh": "$\\frac{2\\pi}{3}\\cdot\\frac{180}{\\pi} = \\frac{2\\cdot180}{3} = 120^{\\circ}$。回答 $60^{\\circ}$ 只用了 $\\frac{\\pi}{3}$，是所给角的一半。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "By completing the square, find the radius of the circle $x^2+y^2-10x=0$.",
        "zh": "通过配方，求圆 $x^2+y^2-10x=0$ 的半径。"
      },
      "answer": "5",
      "accept": [
        "5",
        "5.0"
      ],
      "explanation": {
        "en": "Completing the square: $(x-5)^2+y^2=25$, so $r=\\sqrt{25}=5$. Reporting $25$ gives $r^2$ instead of the radius.",
        "zh": "配方：$(x-5)^2+y^2=25$，所以 $r=\\sqrt{25}=5$。报 $25$ 是给了 $r^2$ 而非半径。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A circle has radius $5$. Using the radian formula, find the arc length for a central angle of $1.2$ radians.",
        "zh": "一个圆半径为 $5$。用弧度公式，求圆心角为 $1.2$ 弧度时的弧长。"
      },
      "answer": "6",
      "accept": [
        "6",
        "6.0"
      ],
      "explanation": {
        "en": "With $\\theta$ in radians, arc length $= r\\theta = 5\\cdot 1.2 = 6$. There is no need to divide by $360$ or multiply by $2\\pi$ when the angle is already in radians.",
        "zh": "当 $\\theta$ 以弧度表示时，弧长 $= r\\theta = 5\\cdot 1.2 = 6$。角已是弧度时无需除以 $360$ 或乘以 $2\\pi$。"
      }
    }
  ],
  "probability/probability-and-conditional-probability": [
    {
      "type": "mc",
      "question": {
        "en": "A fair six-sided die is rolled once. What is the probability of rolling a number greater than 4?",
        "zh": "掷一个公平的六面骰子一次。掷出大于 4 的数字的概率是多少？"
      },
      "choices": [
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$",
        "$\\frac{2}{3}$",
        "$\\frac{1}{6}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Numbers greater than 4 are 5 and 6, so 2 of the 6 equally likely outcomes succeed: $\\frac{2}{6}=\\frac{1}{3}$. Counting only one favorable outcome (just 5 or just 6) forgets that 'greater than 4' includes two values.",
        "zh": "大于 4 的数字是 5 和 6，所以 6 个等可能结果中有 2 个成功：$\\frac{2}{6}=\\frac{1}{3}$。只数一个有利结果（只算 5 或只算 6）忽略了『大于 4』包含两个值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A bag holds 5 red, 3 blue, and 2 green marbles. One marble is drawn at random. What is P(blue)?",
        "zh": "袋子里有 5 颗红色、3 颗蓝色和 2 颗绿色弹珠。随机抽取一颗。P(蓝色) 是多少？"
      },
      "choices": [
        "$\\frac{3}{7}$",
        "$\\frac{3}{10}$",
        "$\\frac{7}{10}$",
        "$\\frac{1}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The total number of marbles is $5+3+2=10$, and 3 are blue, so $P(\\text{blue})=\\frac{3}{10}$. Using 7 (the non-blue count) as the denominator ignores that the denominator must be the whole sample space of 10.",
        "zh": "弹珠总数为 $5+3+2=10$，其中 3 颗是蓝色，所以 $P(\\text{蓝色})=\\frac{3}{10}$。用 7（非蓝色的数量）作分母忽略了分母必须是整个样本空间 10。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The probability that an event $A$ occurs is $P(A)=0.35$. What is the probability that $A$ does NOT occur?",
        "zh": "事件 $A$ 发生的概率为 $P(A)=0.35$。$A$ 不发生的概率是多少？"
      },
      "choices": [
        "0.35",
        "0.45",
        "0.65",
        "1.35"
      ],
      "answer": 2,
      "explanation": {
        "en": "The complement rule gives $P(\\text{not }A)=1-P(A)=1-0.35=0.65$. Adding to 1 instead of subtracting, or leaving the probability unchanged, ignores that an event and its complement must sum to 1.",
        "zh": "补事件法则给出 $P(\\text{非 }A)=1-P(A)=1-0.35=0.65$。用加法而不是减法，或让概率不变，忽略了事件与其补事件之和必须为 1。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a survey of 100 people, a two-way table shows 60 adults and 40 teens (60 chose coffee, 50 chose tea overall). What is P(the person is an adult)?",
        "zh": "在对 100 人的调查中，双向表显示 60 名成年人和 40 名青少年（总共 60 人选咖啡，50 人选茶）。P(此人是成年人) 是多少？"
      },
      "choices": [
        "0.4",
        "0.5",
        "0.24",
        "0.6"
      ],
      "answer": 3,
      "explanation": {
        "en": "There are 60 adults out of 100 total, so $P(\\text{adult})=\\frac{60}{100}=0.6$. Using the teen count of 40 answers a different question; the marginal probability of 'adult' uses the adult row total.",
        "zh": "100 人中有 60 名成年人，所以 $P(\\text{成年人})=\\frac{60}{100}=0.6$。用青少年数量 40 回答的是另一个问题；『成年人』的边缘概率要用成年人这一行的总数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From a two-way table, 60 people are adults and 40 of those adults chose coffee. What is P(coffee | adult)?",
        "zh": "在双向表中，60 人是成年人，其中 40 名成年人选了咖啡。P(咖啡 | 成年人) 是多少？"
      },
      "choices": [
        "$\\frac{2}{3}$",
        "$\\frac{2}{5}$",
        "$\\frac{4}{10}$",
        "$\\frac{3}{5}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A conditional probability restricts to the given group: among the 60 adults, 40 chose coffee, so $P(\\text{coffee}\\mid\\text{adult})=\\frac{40}{60}=\\frac{2}{3}$. Dividing 40 by the full total of 100 ignores that the condition 'adult' shrinks the sample space to 60.",
        "zh": "条件概率限定在给定的群体中：60 名成年人中有 40 人选咖啡，所以 $P(\\text{咖啡}\\mid\\text{成年人})=\\frac{40}{60}=\\frac{2}{3}$。用 40 除以总数 100 忽略了『成年人』这一条件把样本空间缩小到 60。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A two-way table shows 50 people chose coffee, and 40 of those coffee drinkers are adults. What is P(adult | coffee)?",
        "zh": "双向表显示 50 人选了咖啡，其中 40 名咖啡饮用者是成年人。P(成年人 | 咖啡) 是多少？"
      },
      "choices": [
        "0.667",
        "0.8",
        "0.5",
        "0.4"
      ],
      "answer": 1,
      "explanation": {
        "en": "Condition on coffee: among the 50 coffee drinkers, 40 are adults, so $P(\\text{adult}\\mid\\text{coffee})=\\frac{40}{50}=0.8$. Answering $\\frac{40}{60}\\approx0.667$ swaps the condition; $P(\\text{adult}\\mid\\text{coffee})$ and $P(\\text{coffee}\\mid\\text{adult})$ have different denominators.",
        "zh": "以咖啡为条件：50 名咖啡饮用者中有 40 人是成年人，所以 $P(\\text{成年人}\\mid\\text{咖啡})=\\frac{40}{50}=0.8$。回答 $\\frac{40}{60}\\approx0.667$ 是把条件弄反了；$P(\\text{成年人}\\mid\\text{咖啡})$ 与 $P(\\text{咖啡}\\mid\\text{成年人})$ 的分母不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For events $A$ and $B$, $P(A)=0.5$, $P(B)=0.4$, and $P(A\\cap B)=0.2$. Are $A$ and $B$ independent?",
        "zh": "对于事件 $A$ 和 $B$，$P(A)=0.5$，$P(B)=0.4$，$P(A\\cap B)=0.2$。$A$ 和 $B$ 独立吗？"
      },
      "choices": [
        "No, they are dependent",
        "They are mutually exclusive",
        "Yes, they are independent",
        "Cannot be determined"
      ],
      "answer": 2,
      "explanation": {
        "en": "Events are independent when $P(A\\cap B)=P(A)\\cdot P(B)$. Here $0.5\\times0.4=0.2$, which equals $P(A\\cap B)$, so they are independent. Assuming dependence without checking the product test overlooks that the equality holds exactly.",
        "zh": "当 $P(A\\cap B)=P(A)\\cdot P(B)$ 时事件独立。这里 $0.5\\times0.4=0.2$，恰好等于 $P(A\\cap B)$，所以它们独立。不做乘积检验就假设相关，忽略了这个等式正好成立。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $P(A\\cap B)=0.12$ and $P(B)=0.3$, find $P(A\\mid B)$.",
        "zh": "已知 $P(A\\cap B)=0.12$ 且 $P(B)=0.3$，求 $P(A\\mid B)$。"
      },
      "choices": [
        "0.036",
        "0.25",
        "0.42",
        "0.4"
      ],
      "answer": 3,
      "explanation": {
        "en": "The conditional probability formula is $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{0.12}{0.3}=0.4$. Multiplying the two values ($0.12\\times0.3$) uses the independence formula backwards; conditional probability divides by $P(B)$.",
        "zh": "条件概率公式为 $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{0.12}{0.3}=0.4$。把两个值相乘（$0.12\\times0.3$）是把独立公式用反了；条件概率要除以 $P(B)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ are mutually exclusive with $P(A)=0.3$ and $P(B)=0.45$. What is $P(A\\cup B)$?",
        "zh": "事件 $A$ 和 $B$ 互斥，$P(A)=0.3$，$P(B)=0.45$。$P(A\\cup B)$ 是多少？"
      },
      "choices": [
        "0.75",
        "0.15",
        "0.135",
        "0.85"
      ],
      "answer": 0,
      "explanation": {
        "en": "For mutually exclusive events $P(A\\cup B)=P(A)+P(B)=0.3+0.45=0.75$, because $P(A\\cap B)=0$. Multiplying the probabilities finds an intersection, not a union; 'or' events are added.",
        "zh": "对于互斥事件 $P(A\\cup B)=P(A)+P(B)=0.3+0.45=0.75$，因为 $P(A\\cap B)=0$。将概率相乘求的是交集而不是并集；『或』事件要用加法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A spinner has 8 equal sections numbered 1 through 8. What is the probability of landing on an even number?",
        "zh": "一个转盘有 8 个相等的扇区，编号 1 到 8。转到偶数的概率是多少？"
      },
      "choices": [
        "$\\frac{1}{8}$",
        "$\\frac{1}{2}$",
        "$\\frac{3}{8}$",
        "$\\frac{1}{4}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The even numbers are 2, 4, 6, 8 — that is 4 of the 8 sections, so $\\frac{4}{8}=\\frac{1}{2}$. Counting fewer than four evens undercounts the favorable outcomes in the range 1 to 8.",
        "zh": "偶数是 2、4、6、8——即 8 个扇区中的 4 个，所以 $\\frac{4}{8}=\\frac{1}{2}$。数出少于四个偶数会少算 1 到 8 中的有利结果。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In a two-way table of 100 people, 30 are teens who chose tea. What is P(teen AND tea)?",
        "zh": "在 100 人的双向表中，有 30 名选茶的青少年。P(青少年 且 茶) 是多少？"
      },
      "choices": [
        "0.4",
        "0.75",
        "0.3",
        "0.6"
      ],
      "answer": 2,
      "explanation": {
        "en": "A joint probability uses the whole group as the denominator: $\\frac{30}{100}=0.3$. Dividing 30 by a subgroup total (like the 40 teens) would give a conditional probability, not the joint probability 'teen AND tea'.",
        "zh": "联合概率用整个群体作分母：$\\frac{30}{100}=0.3$。用 30 除以某个子群总数（比如 40 名青少年）得到的是条件概率，而不是『青少年 且 茶』的联合概率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $P(A\\mid B)=P(A)$, what does this tell us about events $A$ and $B$?",
        "zh": "如果 $P(A\\mid B)=P(A)$，这说明事件 $A$ 和 $B$ 有什么关系？"
      },
      "choices": [
        "They are mutually exclusive",
        "One causes the other",
        "They are complementary",
        "They are independent"
      ],
      "answer": 3,
      "explanation": {
        "en": "When knowing $B$ does not change the probability of $A$ ($P(A\\mid B)=P(A)$), the events are independent. Mutually exclusive events actually make each other less likely, so equal conditional and unconditional probabilities point to independence, not exclusion.",
        "zh": "当知道 $B$ 不改变 $A$ 的概率（$P(A\\mid B)=P(A)$）时，事件是独立的。互斥事件实际上会使彼此更不可能发生，所以条件概率与无条件概率相等指向独立而非互斥。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A fair coin is flipped once. What is the probability of getting heads? (Give a decimal.)",
        "zh": "抛一枚公平的硬币一次。得到正面的概率是多少？（用小数表示。）"
      },
      "answer": "0.5",
      "accept": [
        "1/2",
        "0.50",
        ".5",
        "50%"
      ],
      "explanation": {
        "en": "A fair coin has 2 equally likely outcomes and 1 is heads, so $\\frac{1}{2}=0.5$. Treating the two sides as unequal would misjudge a fair coin.",
        "zh": "一枚公平硬币有 2 个等可能结果，其中 1 个是正面，所以 $\\frac{1}{2}=0.5$。把两面看作不等会误判公平硬币。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "One card is drawn from a standard 52-card deck. What is the probability it is a heart? (Give a decimal.)",
        "zh": "从标准的 52 张牌中抽取一张。它是红桃的概率是多少？（用小数表示。）"
      },
      "answer": "0.25",
      "accept": [
        "1/4",
        "13/52",
        "0.250",
        ".25",
        "25%"
      ],
      "explanation": {
        "en": "There are 13 hearts among 52 cards, so $\\frac{13}{52}=\\frac{1}{4}=0.25$. Forgetting that each suit has exactly 13 cards leads to the wrong count in the numerator.",
        "zh": "52 张牌中有 13 张红桃，所以 $\\frac{13}{52}=\\frac{1}{4}=0.25$。忘记每种花色正好有 13 张牌会使分子的计数出错。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A two-way table of 200 people shows 80 own a dog, and 30 of those dog owners also own a cat. Find P(cat | dog). (Give a decimal.)",
        "zh": "一份 200 人的双向表显示 80 人养狗，其中 30 名养狗的人也养猫。求 P(猫 | 狗)。（用小数表示。）"
      },
      "answer": "0.375",
      "accept": [
        "3/8",
        "30/80",
        "0.38",
        "37.5%"
      ],
      "explanation": {
        "en": "Condition on dog owners: $\\frac{30}{80}=0.375$. Dividing 30 by the full 200 ignores that the condition 'dog' restricts the sample space to the 80 dog owners.",
        "zh": "以养狗者为条件：$\\frac{30}{80}=0.375$。用 30 除以全部 200 忽略了『狗』这一条件把样本空间限定在 80 名养狗者。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $P(A\\cap B)=0.18$ and $P(B)=0.6$, find $P(A\\mid B)$. (Give a decimal.)",
        "zh": "已知 $P(A\\cap B)=0.18$ 且 $P(B)=0.6$，求 $P(A\\mid B)$。（用小数表示。）"
      },
      "answer": "0.3",
      "accept": [
        "0.30",
        "3/10",
        ".3",
        "30%"
      ],
      "explanation": {
        "en": "Use $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{0.18}{0.6}=0.3$. Multiplying the two numbers instead of dividing applies the independence rule where a conditional is required.",
        "zh": "用 $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{0.18}{0.6}=0.3$。用相乘而不是相除，是在需要条件概率的地方套用了独立法则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Events $A$ and $B$ are independent with $P(A)=0.5$ and $P(B)=0.2$. Find $P(A\\cap B)$. (Give a decimal.)",
        "zh": "事件 $A$ 和 $B$ 独立，$P(A)=0.5$，$P(B)=0.2$。求 $P(A\\cap B)$。（用小数表示。）"
      },
      "answer": "0.1",
      "accept": [
        "0.10",
        "1/10",
        ".1",
        "10%"
      ],
      "explanation": {
        "en": "For independent events multiply: $P(A\\cap B)=P(A)\\cdot P(B)=0.5\\times0.2=0.1$. Adding the probabilities would compute a union-like value, not the joint probability of both occurring.",
        "zh": "对于独立事件用乘法：$P(A\\cap B)=P(A)\\cdot P(B)=0.5\\times0.2=0.1$。将概率相加算的是类似并集的值，而不是两者同时发生的联合概率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A forecast says there is a 30% chance of rain. What is the probability that it does NOT rain? (Give a decimal.)",
        "zh": "天气预报说有 30% 的降雨概率。不下雨的概率是多少？（用小数表示。）"
      },
      "answer": "0.7",
      "accept": [
        "0.70",
        "7/10",
        ".7",
        "70%"
      ],
      "explanation": {
        "en": "By the complement rule $1-0.30=0.70$. Reporting 0.30 answers the event itself; the complement is what remains after subtracting from 1.",
        "zh": "由补事件法则 $1-0.30=0.70$。报告 0.30 回答的是事件本身；补事件是从 1 中减去后剩下的部分。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A bag has 4 red and 6 blue marbles. Two are drawn without replacement. What is P(both red)? (Give a fraction.)",
        "zh": "袋子里有 4 颗红色和 6 颗蓝色弹珠。不放回地抽取两颗。P(两颗都是红色) 是多少？（用分数表示。）"
      },
      "answer": "2/15",
      "accept": [
        "0.133",
        "0.1333",
        "12/90",
        "0.13"
      ],
      "explanation": {
        "en": "Without replacement the second draw depends on the first: $\\frac{4}{10}\\times\\frac{3}{9}=\\frac{12}{90}=\\frac{2}{15}$. Using $\\frac{4}{10}\\times\\frac{4}{10}$ treats the draws as independent, but removing a marble changes the second probability.",
        "zh": "不放回时第二次抽取依赖于第一次：$\\frac{4}{10}\\times\\frac{3}{9}=\\frac{12}{90}=\\frac{2}{15}$。用 $\\frac{4}{10}\\times\\frac{4}{10}$ 把两次抽取当作独立，但取走一颗弹珠会改变第二次的概率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A two-way table of 200 people shows 70 own a cat, and 30 of those cat owners also own a dog. Find P(dog | cat). (Give a fraction.)",
        "zh": "一份 200 人的双向表显示 70 人养猫，其中 30 名养猫的人也养狗。求 P(狗 | 猫)。（用分数表示。）"
      },
      "answer": "3/7",
      "accept": [
        "0.4286",
        "0.43",
        "30/70",
        "0.429"
      ],
      "explanation": {
        "en": "Condition on cat owners: $\\frac{30}{70}=\\frac{3}{7}\\approx0.429$. Note this differs from P(cat | dog) because the conditioning group (70 cat owners) sets a different denominator than the dog owners.",
        "zh": "以养猫者为条件：$\\frac{30}{70}=\\frac{3}{7}\\approx0.429$。注意这与 P(猫 | 狗) 不同，因为作条件的群体（70 名养猫者）给出的分母与养狗者不同。"
      }
    }
  ],
  "probability/counting-and-compound-probability": [
    {
      "type": "mc",
      "question": {
        "en": "A store offers 4 shirt colors and 3 pant colors. How many different shirt-and-pant outfits are possible?",
        "zh": "一家商店提供 4 种衬衫颜色和 3 种裤子颜色。可以搭配出多少种不同的衬衫加裤子的组合？"
      },
      "choices": [
        "12",
        "24",
        "7",
        "64"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the fundamental counting principle, multiply the choices: $4\\times3=12$. Adding $4+3=7$ counts individual items rather than the number of paired combinations.",
        "zh": "根据基本计数原理，将选择数相乘：$4\\times3=12$。用 $4+3=7$ 数的是单个物品，而不是配对组合的数量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In how many different orders can 5 distinct books be arranged on a shelf?",
        "zh": "5 本不同的书放在书架上，有多少种不同的排列顺序？"
      },
      "choices": [
        "25",
        "120",
        "720",
        "60"
      ],
      "answer": 1,
      "explanation": {
        "en": "Arrangements of all 5 books use $5!=5\\times4\\times3\\times2\\times1=120$. Computing $5^2=25$ or $6!=720$ misapplies the factorial; arranging exactly 5 items uses $5!$.",
        "zh": "把全部 5 本书排列用 $5!=5\\times4\\times3\\times2\\times1=120$。算成 $5^2=25$ 或 $6!=720$ 是误用了阶乘；排列恰好 5 个物品用 $5!$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many ways can a committee of 2 people be chosen from a group of 6 people?",
        "zh": "从 6 人中选出 2 人组成委员会，有多少种选法？"
      },
      "choices": [
        "36",
        "30",
        "15",
        "12"
      ],
      "answer": 2,
      "explanation": {
        "en": "Order does not matter, so use combinations: $\\binom{6}{2}=\\frac{6\\times5}{2\\times1}=15$. Answering 30 uses $6\\times5$ (a permutation) and forgets to divide out the $2!$ orderings of the same pair.",
        "zh": "顺序无关，所以用组合：$\\binom{6}{2}=\\frac{6\\times5}{2\\times1}=15$。回答 30 用的是 $6\\times5$（排列），忘了除掉同一对的 $2!$ 种顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many ways can a president and a vice-president be chosen from 5 candidates (order matters)?",
        "zh": "从 5 名候选人中选出一名主席和一名副主席（顺序有关），有多少种选法？"
      },
      "choices": [
        "10",
        "120",
        "25",
        "20"
      ],
      "answer": 3,
      "explanation": {
        "en": "Order matters, so use permutations: $P(5,2)=5\\times4=20$. Dividing by $2!$ to get 10 would treat the two roles as interchangeable, but president and vice-president are distinct.",
        "zh": "顺序有关，所以用排列：$P(5,2)=5\\times4=20$。除以 $2!$ 得到 10 会把两个职位当作可互换，但主席和副主席是不同的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Choosing a 3-person team from 10 people, where the order of selection does not matter, is an example of what?",
        "zh": "从 10 人中选出一支 3 人小队，选取顺序无关，这是什么的例子？"
      },
      "choices": [
        "a combination",
        "the complement rule",
        "a permutation",
        "the addition rule"
      ],
      "answer": 0,
      "explanation": {
        "en": "When order does not matter, selections are counted with combinations. Calling it a permutation would over-count by including every rearrangement of the same three people as different.",
        "zh": "当顺序无关时，用组合来计数。称之为排列会把同样三人的每种重新排列都算作不同，从而重复计数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many 3-digit codes can be made using digits 0-9 if digits may repeat?",
        "zh": "如果数字可以重复，用数字 0-9 能组成多少个 3 位密码？"
      },
      "choices": [
        "30",
        "1000",
        "720",
        "300"
      ],
      "answer": 1,
      "explanation": {
        "en": "Each of the 3 positions has 10 independent choices: $10\\times10\\times10=1000$. Using $10\\times9\\times8=720$ assumes digits cannot repeat, but here repetition is allowed.",
        "zh": "3 个位置每个都有 10 种独立选择：$10\\times10\\times10=1000$。用 $10\\times9\\times8=720$ 假设数字不能重复，但这里允许重复。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two independent events have $P(A)=0.4$ and $P(B)=0.5$. What is $P(A\\cap B)$?",
        "zh": "两个独立事件 $P(A)=0.4$，$P(B)=0.5$。$P(A\\cap B)$ 是多少？"
      },
      "choices": [
        "0.1",
        "0.9",
        "0.2",
        "0.45"
      ],
      "answer": 2,
      "explanation": {
        "en": "For independent events multiply: $0.4\\times0.5=0.2$. Adding to get 0.9 finds a union-type total, not the probability that both events happen together.",
        "zh": "对于独立事件用乘法：$0.4\\times0.5=0.2$。相加得到 0.9 求的是并集类的总和，而不是两个事件同时发生的概率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Events $A$ and $B$ overlap: $P(A)=0.5$, $P(B)=0.4$, $P(A\\cap B)=0.2$. What is $P(A\\cup B)$?",
        "zh": "事件 $A$ 和 $B$ 有重叠：$P(A)=0.5$，$P(B)=0.4$，$P(A\\cap B)=0.2$。$P(A\\cup B)$ 是多少？"
      },
      "choices": [
        "0.9",
        "1.1",
        "0.6",
        "0.7"
      ],
      "answer": 3,
      "explanation": {
        "en": "The general addition rule is $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=0.5+0.4-0.2=0.7$. Simply adding to 0.9 double-counts the overlap that belongs to both events.",
        "zh": "一般加法法则为 $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=0.5+0.4-0.2=0.7$。直接相加得 0.9 会把同时属于两个事件的重叠部分重复计算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A fair die is rolled once. What is P(rolling a 2 or a 5)?",
        "zh": "掷一个公平的骰子一次。P(掷出 2 或 5) 是多少？"
      },
      "choices": [
        "$\\frac{1}{3}$",
        "$\\frac{1}{36}$",
        "$\\frac{1}{6}$",
        "$\\frac{2}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rolling a 2 and rolling a 5 are mutually exclusive, so add: $\\frac{1}{6}+\\frac{1}{6}=\\frac{2}{6}=\\frac{1}{3}$. Multiplying to get $\\frac{1}{36}$ would be for both happening on separate rolls, not one roll giving either value.",
        "zh": "掷出 2 与掷出 5 互斥，所以相加：$\\frac{1}{6}+\\frac{1}{6}=\\frac{2}{6}=\\frac{1}{3}$。相乘得 $\\frac{1}{36}$ 表示的是两次分别发生，而不是一次掷出其中任一值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many different ways can the 3 distinct letters in the word CAT be arranged?",
        "zh": "单词 CAT 中的 3 个不同字母可以有多少种不同的排列方式？"
      },
      "choices": [
        "3",
        "6",
        "2",
        "9"
      ],
      "answer": 1,
      "explanation": {
        "en": "Arranging 3 distinct letters uses $3!=3\\times2\\times1=6$. Answering 3 counts only the letters themselves rather than their orderings.",
        "zh": "排列 3 个不同字母用 $3!=3\\times2\\times1=6$。回答 3 只数了字母本身，而不是它们的排列顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the value of $\\binom{8}{8}$ (the number of ways to choose all 8 from 8)?",
        "zh": "$\\binom{8}{8}$（从 8 个中选出全部 8 个的方法数）的值是多少？"
      },
      "choices": [
        "0",
        "8",
        "1",
        "40320"
      ],
      "answer": 2,
      "explanation": {
        "en": "There is exactly 1 way to choose all items: $\\binom{8}{8}=1$. Answering $8!=40320$ counts arrangements, but a combination that selects every item leaves only one possible group.",
        "zh": "选出全部物品只有 1 种方法：$\\binom{8}{8}=1$。回答 $8!=40320$ 数的是排列，但选取每个物品的组合只留下唯一一个可能的组。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two cards are drawn without replacement from a standard 52-card deck. What is P(both are aces)?",
        "zh": "从标准 52 张牌中不放回地抽取两张。P(两张都是 A) 是多少？"
      },
      "choices": [
        "$\\frac{1}{169}$",
        "$\\frac{1}{2652}$",
        "$\\frac{1}{13}$",
        "$\\frac{1}{221}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Draws are dependent: $\\frac{4}{52}\\times\\frac{3}{51}=\\frac{12}{2652}=\\frac{1}{221}$. Using $\\frac{4}{52}\\times\\frac{4}{52}=\\frac{1}{169}$ treats the draws as independent, but removing the first ace leaves only 3 aces in 51 cards.",
        "zh": "两次抽取相关：$\\frac{4}{52}\\times\\frac{3}{51}=\\frac{12}{2652}=\\frac{1}{221}$。用 $\\frac{4}{52}\\times\\frac{4}{52}=\\frac{1}{169}$ 把两次抽取当作独立，但取走第一张 A 后 51 张牌中只剩 3 张 A。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A meal has 3 appetizer choices, 4 main-course choices, and 2 dessert choices. How many different 3-course meals are possible?",
        "zh": "一份套餐有 3 种开胃菜、4 种主菜和 2 种甜点可选。共有多少种不同的三道菜套餐？"
      },
      "answer": "24",
      "accept": [
        "24.0"
      ],
      "explanation": {
        "en": "By the fundamental counting principle multiply: $3\\times4\\times2=24$. Adding $3+4+2=9$ counts single dishes instead of full meal combinations.",
        "zh": "根据基本计数原理相乘：$3\\times4\\times2=24$。用 $3+4+2=9$ 数的是单道菜，而不是完整的套餐组合。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In how many different orders can 6 people line up in a single row?",
        "zh": "6 个人排成一排，有多少种不同的排列顺序？"
      },
      "answer": "720",
      "accept": [
        "720.0"
      ],
      "explanation": {
        "en": "Arranging 6 distinct people uses $6!=6\\times5\\times4\\times3\\times2\\times1=720$. Using $6^2=36$ or $6\\times5=30$ stops short of multiplying down through every position.",
        "zh": "排列 6 个不同的人用 $6!=6\\times5\\times4\\times3\\times2\\times1=720$。用 $6^2=36$ 或 $6\\times5=30$ 没有把每个位置都乘下去。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many ways can 3 toppings be chosen from 5 available toppings (order does not matter)?",
        "zh": "从 5 种配料中选出 3 种（顺序无关），有多少种选法？"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "Order does not matter, so $\\binom{5}{3}=\\frac{5\\times4\\times3}{3\\times2\\times1}=10$. Using the permutation $5\\times4\\times3=60$ forgets to divide out the $3!$ orderings of the same set of toppings.",
        "zh": "顺序无关，所以 $\\binom{5}{3}=\\frac{5\\times4\\times3}{3\\times2\\times1}=10$。用排列 $5\\times4\\times3=60$ 忘了除掉同一组配料的 $3!$ 种顺序。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many ways can gold, silver, and bronze medals be awarded to 3 of 7 runners (order matters)?",
        "zh": "在 7 名选手中把金、银、铜牌颁给 3 人（顺序有关），有多少种颁法？"
      },
      "answer": "210",
      "accept": [
        "210.0"
      ],
      "explanation": {
        "en": "Order matters, so $P(7,3)=7\\times6\\times5=210$. Using the combination $\\binom{7}{3}=35$ ignores that gold, silver, and bronze are distinct positions.",
        "zh": "顺序有关，所以 $P(7,3)=7\\times6\\times5=210$。用组合 $\\binom{7}{3}=35$ 忽略了金、银、铜是不同的名次。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A coin is flipped 3 times. How many different sequences of heads and tails are possible?",
        "zh": "一枚硬币抛 3 次。正反面共有多少种不同的序列？"
      },
      "answer": "8",
      "accept": [
        "8.0"
      ],
      "explanation": {
        "en": "Each flip has 2 outcomes and flips are independent: $2^3=8$. Adding $2+2+2=6$ or using $2\\times3=6$ does not capture that every flip multiplies the count of sequences.",
        "zh": "每次抛掷有 2 种结果且相互独立：$2^3=8$。用 $2+2+2=6$ 或 $2\\times3=6$ 没能体现每次抛掷都使序列数翻倍相乘。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A spinner lands on blue with probability 0.25. It is spun twice. What is P(blue both times)? (Give a decimal.)",
        "zh": "一个转盘停在蓝色的概率是 0.25。转两次。P(两次都是蓝色) 是多少？（用小数表示。）"
      },
      "answer": "0.0625",
      "accept": [
        "1/16",
        ".0625",
        "0.06"
      ],
      "explanation": {
        "en": "The spins are independent, so multiply: $0.25\\times0.25=0.0625$. Adding to get 0.5 finds an 'or' probability, not the probability of both spins landing on blue.",
        "zh": "两次转动相互独立，所以相乘：$0.25\\times0.25=0.0625$。相加得 0.5 求的是『或』的概率，而不是两次都停在蓝色的概率。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "One card is drawn from a standard deck. What is P(king or queen)? (Give a fraction.)",
        "zh": "从标准牌中抽取一张。P(K 或 Q) 是多少？（用分数表示。）"
      },
      "answer": "2/13",
      "accept": [
        "0.1538",
        "0.154",
        "8/52",
        "0.15"
      ],
      "explanation": {
        "en": "King and queen are mutually exclusive, so add: $\\frac{4}{52}+\\frac{4}{52}=\\frac{8}{52}=\\frac{2}{13}$. Multiplying the two probabilities would model drawing both on separate draws, not one card being either rank.",
        "zh": "K 和 Q 互斥，所以相加：$\\frac{4}{52}+\\frac{4}{52}=\\frac{8}{52}=\\frac{2}{13}$。将两个概率相乘表示的是分两次都抽到，而不是一张牌是其中任一点数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A bag has 3 green and 5 yellow marbles. Two are drawn without replacement. What is P(both green)? (Give a fraction.)",
        "zh": "袋子里有 3 颗绿色和 5 颗黄色弹珠。不放回地抽取两颗。P(两颗都是绿色) 是多少？（用分数表示。）"
      },
      "answer": "3/28",
      "accept": [
        "0.107",
        "0.1071",
        "6/56",
        "0.11"
      ],
      "explanation": {
        "en": "Draws are dependent: $\\frac{3}{8}\\times\\frac{2}{7}=\\frac{6}{56}=\\frac{3}{28}$. Using $\\frac{3}{8}\\times\\frac{3}{8}$ treats the events as independent, but drawing one green marble leaves only 2 green in 7 marbles.",
        "zh": "两次抽取相关：$\\frac{3}{8}\\times\\frac{2}{7}=\\frac{6}{56}=\\frac{3}{28}$。用 $\\frac{3}{8}\\times\\frac{3}{8}$ 把事件当作独立，但抽出一颗绿色后 7 颗弹珠中只剩 2 颗绿色。"
      }
    }
  ]
};
