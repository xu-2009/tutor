export default {
  "unit-1-algebra-foundations/expressions-and-order-of-operations": [
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $8 + 2 \\times 5$.",
        "zh": "求 $8 + 2 \\times 5$。"
      },
      "choices": [
        "$18$",
        "$50$",
        "$40$",
        "$20$"
      ],
      "answer": 0,
      "explanation": {
        "en": "By the order of operations, multiplication comes before addition: $2 \\times 5 = 10$, then $8 + 10 = 18$. Working strictly left to right ($8 + 2 = 10$, then $\\times 5 = 50$) ignores that multiplication has higher priority.",
        "zh": "按运算顺序，乘法先于加法：$2 \\times 5 = 10$，再 $8 + 10 = 18$。严格从左到右做（$8 + 2 = 10$，再 $\\times 5 = 50$）就忽略了乘法优先级更高。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $3 \\times 4^2$.",
        "zh": "求 $3 \\times 4^2$。"
      },
      "choices": [
        "$144$",
        "$48$",
        "$24$",
        "$96$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Exponents are done before multiplication: $4^2 = 16$, then $3 \\times 16 = 48$. Multiplying first to get $12$ and then squaring gives $144$, which wrongly applies the exponent to the whole product.",
        "zh": "指数先于乘法：$4^2 = 16$，再 $3 \\times 16 = 48$。先乘得 $12$ 再平方得 $144$，那是错误地把指数作用到整个乘积上。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $2 + 3 \\times (4 - 1)^2$. Give an integer.",
        "zh": "求 $2 + 3 \\times (4 - 1)^2$。请填一个整数。"
      },
      "answer": "29",
      "accept": [
        "29.0",
        "+29"
      ],
      "explanation": {
        "en": "Parentheses first: $4 - 1 = 3$. Then the exponent: $3^2 = 9$. Then multiply: $3 \\times 9 = 27$. Finally add: $2 + 27 = 29$.",
        "zh": "先算括号：$4 - 1 = 3$。再算指数：$3^2 = 9$。再乘：$3 \\times 9 = 27$。最后加：$2 + 27 = 29$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $16 \\div 4 \\times 2$.",
        "zh": "求 $16 \\div 4 \\times 2$。"
      },
      "choices": [
        "$2$",
        "$32$",
        "$8$",
        "$128$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplication and division share the same priority, so work left to right: $16 \\div 4 = 4$, then $4 \\times 2 = 8$. Doing the multiplication first ($4 \\times 2 = 8$, then $16 \\div 8 = 2$) breaks the left-to-right rule.",
        "zh": "乘法和除法优先级相同，从左到右做：$16 \\div 4 = 4$，再 $4 \\times 2 = 8$。先做乘法（$4 \\times 2 = 8$，再 $16 \\div 8 = 2$）违反了从左到右的规则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $10 - 4 - 3$.",
        "zh": "求 $10 - 4 - 3$。"
      },
      "choices": [
        "$9$",
        "$17$",
        "$-9$",
        "$3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Subtraction is done left to right: $10 - 4 = 6$, then $6 - 3 = 3$. Grouping the last two ($4 - 3 = 1$, then $10 - 1 = 9$) treats subtraction as if it were associative, which it is not.",
        "zh": "减法从左到右做：$10 - 4 = 6$，再 $6 - 3 = 3$。把后两个先算（$4 - 3 = 1$，再 $10 - 1 = 9$）是把减法当成可结合的，但它并不满足结合律。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $-3^2$. Give an integer.",
        "zh": "求 $-3^2$。请填一个整数。"
      },
      "answer": "-9",
      "accept": [
        "-9.0"
      ],
      "explanation": {
        "en": "The exponent applies only to $3$, and the negative sign is applied afterward: $-3^2 = -(3^2) = -(9) = -9$. Only $(-3)^2$ with parentheses would give $+9$.",
        "zh": "指数只作用于 $3$，负号在其后才起作用：$-3^2 = -(3^2) = -(9) = -9$。只有带括号的 $(-3)^2$ 才得 $+9$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $5x + 3 - 2x + 7$.",
        "zh": "化简 $5x + 3 - 2x + 7$。"
      },
      "choices": [
        "$3x + 10$",
        "$7x + 10$",
        "$3x + 4$",
        "$13x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Combine like terms: the $x$-terms give $5x - 2x = 3x$, and the constants give $3 + 7 = 10$, so $3x + 10$. You cannot add $3x$ and $10$ into one term because they are not like terms.",
        "zh": "合并同类项：$x$ 项为 $5x - 2x = 3x$，常数项为 $3 + 7 = 10$，故为 $3x + 10$。$3x$ 与 $10$ 不是同类项，不能合并成一项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $3(2x - 5)$.",
        "zh": "展开 $3(2x - 5)$。"
      },
      "choices": [
        "$6x - 5$",
        "$6x - 15$",
        "$5x - 15$",
        "$6x + 15$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distribute the $3$ to both terms: $3 \\times 2x = 6x$ and $3 \\times (-5) = -15$, giving $6x - 15$. Forgetting to multiply the second term gives the incorrect $6x - 5$.",
        "zh": "把 $3$ 分配到每一项：$3 \\times 2x = 6x$，$3 \\times (-5) = -15$，得 $6x - 15$。忘记乘第二项就会得到错误的 $6x - 5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $-(4x - 7)$.",
        "zh": "化简 $-(4x - 7)$。"
      },
      "choices": [
        "$-4x - 7$",
        "$4x - 7$",
        "$-4x + 7$",
        "$4x + 7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The leading negative multiplies every term inside by $-1$: $-1 \\times 4x = -4x$ and $-1 \\times (-7) = +7$, giving $-4x + 7$. A common error is $-4x - 7$, which forgets to flip the sign of the $-7$.",
        "zh": "前面的负号相当于把括号内每一项乘以 $-1$：$-1 \\times 4x = -4x$，$-1 \\times (-7) = +7$，得 $-4x + 7$。常见错误是 $-4x - 7$，忘记了把 $-7$ 变号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $3a - b$ when $a = 4$ and $b = 5$. Give an integer.",
        "zh": "当 $a = 4$、$b = 5$ 时，求 $3a - b$ 的值。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Substitute the values: $3(4) - 5 = 12 - 5 = 7$. Remember $3a$ means $3 \\times a$, not $34$.",
        "zh": "代入数值：$3(4) - 5 = 12 - 5 = 7$。注意 $3a$ 表示 $3 \\times a$，而不是 $34$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $-2(3x - 4)$.",
        "zh": "展开 $-2(3x - 4)$。"
      },
      "choices": [
        "$-6x - 8$",
        "$-6x - 4$",
        "$6x + 8$",
        "$-6x + 8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Distribute $-2$: $-2 \\times 3x = -6x$ and $-2 \\times (-4) = +8$, giving $-6x + 8$. A negative times a negative is positive, so the last term becomes $+8$, not $-8$.",
        "zh": "分配 $-2$：$-2 \\times 3x = -6x$，$-2 \\times (-4) = +8$，得 $-6x + 8$。负负得正，末项应为 $+8$，而非 $-8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $x^2 - 2y$ when $x = -2$ and $y = 3$. Give an integer.",
        "zh": "当 $x = -2$、$y = 3$ 时，求 $x^2 - 2y$ 的值。请填一个整数。"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "Substitute with parentheses: $(-2)^2 - 2(3) = 4 - 6 = -2$. Squaring $-2$ gives $+4$ because the whole quantity is inside the exponent when you substitute it as $(-2)^2$.",
        "zh": "代入时加括号：$(-2)^2 - 2(3) = 4 - 6 = -2$。$-2$ 的平方为 $+4$，因为代入时整个量都在指数之内，写作 $(-2)^2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression represents \"5 less than twice a number $n$\"?",
        "zh": "下列哪个表达式表示“比一个数 $n$ 的两倍少 5”？"
      },
      "choices": [
        "$2n - 5$",
        "$5 - 2n$",
        "$2(n - 5)$",
        "$5 - 2 - n$"
      ],
      "answer": 0,
      "explanation": {
        "en": "\"Twice a number\" is $2n$, and \"5 less than\" that quantity means subtract 5 from it: $2n - 5$. The order matters: \"5 less than X\" is $X - 5$, not $5 - X$.",
        "zh": "“一个数的两倍”是 $2n$，“比它少 5”表示从中减去 5：$2n - 5$。顺序很重要：“比 X 少 5”是 $X - 5$，而不是 $5 - X$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the expression $7 - 3x$, what is the coefficient of $x$?",
        "zh": "在表达式 $7 - 3x$ 中，$x$ 的系数是多少？"
      },
      "choices": [
        "$3$",
        "$-3$",
        "$7$",
        "$-7$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The coefficient is the number multiplying $x$, and it carries its sign. Since the term is $-3x$, the coefficient is $-3$. The $7$ is a constant, not a coefficient of $x$.",
        "zh": "系数是与 $x$ 相乘的数，并且带着它的符号。由于该项为 $-3x$，系数是 $-3$。$7$ 是常数项，不是 $x$ 的系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the expression $4x^2 - 3x + 9$, what is the constant term?",
        "zh": "在表达式 $4x^2 - 3x + 9$ 中，常数项是多少？"
      },
      "choices": [
        "$4$",
        "$-3$",
        "$9$",
        "$3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The constant term is the term with no variable, which is $9$. The $4$ and $-3$ are coefficients of $x^2$ and $x$ respectively.",
        "zh": "常数项是不含变量的那一项，即 $9$。$4$ 和 $-3$ 分别是 $x^2$ 和 $x$ 的系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $2x^2$ when $x = -3$.",
        "zh": "当 $x = -3$ 时，求 $2x^2$ 的值。"
      },
      "choices": [
        "$-18$",
        "$36$",
        "$-36$",
        "$18$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The exponent applies to $x$ only, so first square: $(-3)^2 = 9$, then multiply: $2 \\times 9 = 18$. Answering $36$ squares the whole $2x$ as $(2 \\cdot -3)^2$; answering $-18$ forgets that squaring a negative gives a positive.",
        "zh": "指数只作用于 $x$，先平方：$(-3)^2 = 9$，再乘：$2 \\times 9 = 18$。答 $36$ 是把整个 $2x$ 当作 $(2 \\cdot -3)^2$ 平方；答 $-18$ 是忘了负数平方得正。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\frac{5x - 3}{2}$ when $x = 5$. Give an integer.",
        "zh": "当 $x = 5$ 时，求 $\\frac{5x - 3}{2}$ 的值。请填一个整数。"
      },
      "answer": "11",
      "accept": [
        "11.0",
        "+11"
      ],
      "explanation": {
        "en": "The fraction bar groups the numerator, so evaluate it fully first: $5(5) - 3 = 25 - 3 = 22$, then divide: $22 \\div 2 = 11$. Dividing only the $-3$ by 2 would be wrong.",
        "zh": "分数线把分子作为一个整体，先把它算完：$5(5) - 3 = 25 - 3 = 22$，再除以 2：$22 \\div 2 = 11$。只把 $-3$ 除以 2 是错误的。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $7m + 4 - m - 9$ by combining like terms, then enter the coefficient of $m$. Give an integer.",
        "zh": "通过合并同类项化简 $7m + 4 - m - 9$，然后填写 $m$ 的系数。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Combine the $m$-terms: $7m - m = 6m$ (recall $-m$ means $-1m$). The constants give $4 - 9 = -5$, so the expression is $6m - 5$ and the coefficient of $m$ is $6$.",
        "zh": "合并 $m$ 项：$7m - m = 6m$（注意 $-m$ 表示 $-1m$）。常数项 $4 - 9 = -5$，故表达式为 $6m - 5$，$m$ 的系数为 $6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $20 - 2 \\times 3^2 + 5$. Give an integer.",
        "zh": "求 $20 - 2 \\times 3^2 + 5$。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "Exponent first: $3^2 = 9$. Then multiply: $2 \\times 9 = 18$. Then work the addition and subtraction left to right: $20 - 18 + 5 = 2 + 5 = 7$.",
        "zh": "先算指数：$3^2 = 9$。再乘：$2 \\times 9 = 18$。然后加减从左到右：$20 - 18 + 5 = 2 + 5 = 7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A taxi charges a $3 flat fee plus $2 per mile. Write and evaluate the cost, in dollars, for a 6-mile ride. Give the number of dollars.",
        "zh": "出租车收取 3 美元的固定费用，再加每英里 2 美元。写出并计算行驶 6 英里的费用（美元）。请填美元数。"
      },
      "answer": "15",
      "accept": [
        "15.0",
        "$15",
        "+15"
      ],
      "explanation": {
        "en": "The cost is $3 + 2m$ dollars for $m$ miles. Substitute $m = 6$: $3 + 2(6) = 3 + 12 = 15$ dollars. Multiplication ($2 \\times 6$) is done before adding the flat fee.",
        "zh": "行驶 $m$ 英里的费用为 $3 + 2m$ 美元。代入 $m = 6$：$3 + 2(6) = 3 + 12 = 15$ 美元。乘法（$2 \\times 6$）要在加上固定费用之前完成。"
      }
    }
  ],
  "unit-1-algebra-foundations/real-numbers-and-properties": [
    {
      "type": "mc",
      "question": {
        "en": "Which set does the number $\\sqrt{2}$ belong to?",
        "zh": "数 $\\sqrt{2}$ 属于哪个数集？"
      },
      "choices": [
        "Irrational numbers",
        "Rational numbers",
        "Integers",
        "Whole numbers"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sqrt{2} = 1.41421356\\ldots$ is a non-terminating, non-repeating decimal, so it cannot be written as a ratio of integers. It is irrational (and also real), but not rational, integer, or whole.",
        "zh": "$\\sqrt{2} = 1.41421356\\ldots$ 是无限不循环小数，无法写成两个整数之比，所以它是无理数（同时也是实数），但不是有理数、整数或自然数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is shown by $4 + 9 = 9 + 4$?",
        "zh": "$4 + 9 = 9 + 4$ 体现了哪条性质？"
      },
      "choices": [
        "Associative property of addition",
        "Commutative property of addition",
        "Distributive property",
        "Additive identity"
      ],
      "answer": 1,
      "explanation": {
        "en": "Only the order of the addends changed, not the grouping. Changing order is the commutative property. The associative property would regroup with parentheses, e.g. $(a+b)+c = a+(b+c)$.",
        "zh": "只交换了加数的顺序，而没有改变结合方式。交换顺序属于交换律。结合律则是用括号重新分组，如 $(a+b)+c = a+(b+c)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is shown by $(3 \\cdot 4) \\cdot 5 = 3 \\cdot (4 \\cdot 5)$?",
        "zh": "$(3 \\cdot 4) \\cdot 5 = 3 \\cdot (4 \\cdot 5)$ 体现了哪条性质？"
      },
      "choices": [
        "Commutative property of multiplication",
        "Distributive property",
        "Associative property of multiplication",
        "Multiplicative identity"
      ],
      "answer": 2,
      "explanation": {
        "en": "The factors stay in the same order $3, 4, 5$; only the grouping (parentheses) moved. Regrouping is the associative property. The commutative property would swap the order of factors instead.",
        "zh": "因数顺序仍是 $3, 4, 5$，只是分组（括号）发生了变化。重新分组属于结合律。交换律则是交换因数的顺序。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is shown by $-2(x - 5) = -2x + 10$?",
        "zh": "$-2(x - 5) = -2x + 10$ 体现了哪条性质？"
      },
      "choices": [
        "Commutative property",
        "Associative property",
        "Additive inverse",
        "Distributive property"
      ],
      "answer": 3,
      "explanation": {
        "en": "The factor $-2$ is multiplied across both terms inside the parentheses: $-2 \\cdot x$ and $-2 \\cdot (-5) = +10$. Multiplying over a sum is the distributive property. Note $-2 \\cdot (-5) = +10$, a common sign trap.",
        "zh": "把因数 $-2$ 分别乘到括号内的两项上：$-2 \\cdot x$ 与 $-2 \\cdot (-5) = +10$。乘法对加法的分配就是分配律。注意 $-2 \\cdot (-5) = +10$，这是常见的符号陷阱。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following numbers is irrational?",
        "zh": "下列哪个数是无理数？"
      },
      "choices": [
        "$\\sqrt{7}$",
        "$\\frac{4}{9}$",
        "$-3$",
        "$0.25$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\sqrt{7} = 2.6457\\ldots$ does not terminate or repeat, so it is irrational. In contrast $\\frac{4}{9}$, $-3$, and $0.25 = \\frac{1}{4}$ are all ratios of integers, hence rational.",
        "zh": "$\\sqrt{7} = 2.6457\\ldots$ 既不是有限小数也不是循环小数，所以是无理数。而 $\\frac{4}{9}$、$-3$ 和 $0.25 = \\frac{1}{4}$ 都能写成整数之比，因此都是有理数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is shown by $a + (-a) = 0$?",
        "zh": "$a + (-a) = 0$ 体现了哪条性质？"
      },
      "choices": [
        "Additive identity",
        "Additive inverse",
        "Commutative property",
        "Multiplicative inverse"
      ],
      "answer": 1,
      "explanation": {
        "en": "A number plus its opposite equals $0$ (the additive identity), so $-a$ is the additive inverse of $a$. The additive identity property is instead $a + 0 = a$.",
        "zh": "一个数加上它的相反数等于 $0$（加法单位元），所以 $-a$ 是 $a$ 的相反数（加法逆元）。加法单位元性质则是 $a + 0 = a$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which number is a whole number but NOT a natural number?",
        "zh": "哪个数是自然数集（含0）中的数（即非负整数），但不是正整数？"
      },
      "choices": [
        "$5$",
        "$\\frac{1}{2}$",
        "$0$",
        "$-1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Whole numbers are $0, 1, 2, 3, \\ldots$ while the natural (counting) numbers are $1, 2, 3, \\ldots$. The only value that is whole but not natural is $0$. $\\frac{1}{2}$ and $-1$ are not whole numbers at all.",
        "zh": "非负整数为 $0, 1, 2, 3, \\ldots$，而正整数（计数用的自然数）为 $1, 2, 3, \\ldots$。唯一属于前者但不属于后者的是 $0$。$\\frac{1}{2}$ 和 $-1$ 根本不是非负整数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is shown by $6 \\cdot 1 = 6$?",
        "zh": "$6 \\cdot 1 = 6$ 体现了哪条性质？"
      },
      "choices": [
        "Commutative property",
        "Multiplicative inverse",
        "Distributive property",
        "Multiplicative identity"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiplying by $1$ leaves the number unchanged, so $1$ is the multiplicative identity. The multiplicative inverse property is different: $6 \\cdot \\frac{1}{6} = 1$.",
        "zh": "乘以 $1$ 不改变原数，所以 $1$ 是乘法单位元。乘法逆元性质不同：$6 \\cdot \\frac{1}{6} = 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $|-3 - 4|$.",
        "zh": "求 $|-3 - 4|$ 的值。"
      },
      "choices": [
        "$7$",
        "$1$",
        "$-7$",
        "$-1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "First simplify inside: $-3 - 4 = -7$. Absolute value is the distance from $0$, so $|-7| = 7$. A common error is to take $|-3| - |4| = 3 - 4 = -1$; you must combine inside the bars first.",
        "zh": "先算绝对值内部：$-3 - 4 = -7$。绝对值表示到 $0$ 的距离，所以 $|-7| = 7$。常见错误是算成 $|-3| - |4| = 3 - 4 = -1$；必须先合并绝对值符号内部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Classify the number $0.\\overline{3}$ (that is, $0.333\\ldots$).",
        "zh": "对数 $0.\\overline{3}$（即 $0.333\\ldots$）进行分类。"
      },
      "choices": [
        "Irrational",
        "Rational",
        "Integer",
        "Natural number"
      ],
      "answer": 1,
      "explanation": {
        "en": "A repeating decimal can be written as a fraction: $0.\\overline{3} = \\frac{1}{3}$. Any repeating (or terminating) decimal is rational. Only non-terminating, non-repeating decimals are irrational.",
        "zh": "循环小数可以写成分数：$0.\\overline{3} = \\frac{1}{3}$。任何循环（或有限）小数都是有理数。只有无限不循环小数才是无理数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which property is shown by $\\frac{2}{3} \\cdot \\frac{3}{2} = 1$?",
        "zh": "$\\frac{2}{3} \\cdot \\frac{3}{2} = 1$ 体现了哪条性质？"
      },
      "choices": [
        "Additive inverse",
        "Multiplicative identity",
        "Multiplicative inverse",
        "Distributive property"
      ],
      "answer": 2,
      "explanation": {
        "en": "A nonzero number times its reciprocal equals $1$, so $\\frac{3}{2}$ is the multiplicative inverse (reciprocal) of $\\frac{2}{3}$. The multiplicative identity property is $a \\cdot 1 = a$.",
        "zh": "一个非零数乘以它的倒数等于 $1$，所以 $\\frac{3}{2}$ 是 $\\frac{2}{3}$ 的乘法逆元（倒数）。乘法单位元性质是 $a \\cdot 1 = a$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $-\\frac{1}{2} + \\frac{3}{4}$.",
        "zh": "求 $-\\frac{1}{2} + \\frac{3}{4}$ 的值。"
      },
      "choices": [
        "$-\\frac{5}{4}$",
        "$\\frac{5}{4}$",
        "$-\\frac{1}{4}$",
        "$\\frac{1}{4}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Use a common denominator of $4$: $-\\frac{1}{2} = -\\frac{2}{4}$, so $-\\frac{2}{4} + \\frac{3}{4} = \\frac{1}{4}$. Since $\\frac{3}{4}$ has the larger magnitude, the sum is positive.",
        "zh": "通分为分母 $4$：$-\\frac{1}{2} = -\\frac{2}{4}$，于是 $-\\frac{2}{4} + \\frac{3}{4} = \\frac{1}{4}$。因为 $\\frac{3}{4}$ 的绝对值更大，所以和为正。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $|-8|$. Give an integer.",
        "zh": "求 $|-8|$ 的值。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "+8",
        "8.0"
      ],
      "explanation": {
        "en": "Absolute value gives the distance from $0$, which is never negative, so $|-8| = 8$.",
        "zh": "绝对值表示到 $0$ 的距离，永远非负，所以 $|-8| = 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $-\\frac{2}{3} + \\frac{1}{6}$. Give a reduced fraction (e.g. $-1/2$).",
        "zh": "求 $-\\frac{2}{3} + \\frac{1}{6}$ 的值。请填最简分数（如 $-1/2$）。"
      },
      "answer": "-1/2",
      "accept": [
        "-0.5"
      ],
      "explanation": {
        "en": "Common denominator $6$: $-\\frac{2}{3} = -\\frac{4}{6}$, so $-\\frac{4}{6} + \\frac{1}{6} = -\\frac{3}{6} = -\\frac{1}{2}$.",
        "zh": "通分为分母 $6$：$-\\frac{2}{3} = -\\frac{4}{6}$，于是 $-\\frac{4}{6} + \\frac{1}{6} = -\\frac{3}{6} = -\\frac{1}{2}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $|5 - 12|$. Give an integer.",
        "zh": "求 $|5 - 12|$ 的值。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "+7",
        "7.0"
      ],
      "explanation": {
        "en": "Simplify inside first: $5 - 12 = -7$, then $|-7| = 7$.",
        "zh": "先算内部：$5 - 12 = -7$，再取绝对值 $|-7| = 7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $-7 - (-3)$. Give an integer.",
        "zh": "求 $-7 - (-3)$ 的值。请填一个整数。"
      },
      "answer": "-4",
      "accept": [
        "-4.0"
      ],
      "explanation": {
        "en": "Subtracting a negative is adding its opposite: $-7 - (-3) = -7 + 3 = -4$.",
        "zh": "减去一个负数等于加上它的相反数：$-7 - (-3) = -7 + 3 = -4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $-\\frac{1}{2} \\cdot \\frac{3}{5}$. Give a reduced fraction (e.g. $-3/10$).",
        "zh": "求 $-\\frac{1}{2} \\cdot \\frac{3}{5}$ 的值。请填最简分数（如 $-3/10$）。"
      },
      "answer": "-3/10",
      "accept": [
        "-0.3"
      ],
      "explanation": {
        "en": "Multiply numerators and denominators: $\\frac{1 \\cdot 3}{2 \\cdot 5} = \\frac{3}{10}$. A positive times a negative is negative, so the result is $-\\frac{3}{10}$.",
        "zh": "分子分母分别相乘：$\\frac{1 \\cdot 3}{2 \\cdot 5} = \\frac{3}{10}$。正数乘负数为负，所以结果是 $-\\frac{3}{10}$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $-15 \\div 3$. Give an integer.",
        "zh": "求 $-15 \\div 3$ 的值。请填一个整数。"
      },
      "answer": "-5",
      "accept": [
        "-5.0"
      ],
      "explanation": {
        "en": "A negative divided by a positive is negative: $-15 \\div 3 = -5$.",
        "zh": "负数除以正数为负：$-15 \\div 3 = -5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $|-10| - |-4|$. Give an integer.",
        "zh": "求 $|-10| - |-4|$ 的值。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "+6",
        "6.0"
      ],
      "explanation": {
        "en": "Take each absolute value first: $|-10| = 10$ and $|-4| = 4$, then $10 - 4 = 6$.",
        "zh": "先分别取绝对值：$|-10| = 10$，$|-4| = 4$，再相减 $10 - 4 = 6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\frac{5}{6} - \\frac{1}{3}$. Give a reduced fraction (e.g. $1/2$).",
        "zh": "求 $\\frac{5}{6} - \\frac{1}{3}$ 的值。请填最简分数（如 $1/2$）。"
      },
      "answer": "1/2",
      "accept": [
        "0.5"
      ],
      "explanation": {
        "en": "Common denominator $6$: $\\frac{1}{3} = \\frac{2}{6}$, so $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$.",
        "zh": "通分为分母 $6$：$\\frac{1}{3} = \\frac{2}{6}$，于是 $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$。"
      }
    }
  ],
  "unit-2-solving-equations-inequalities/solving-multi-step-equations": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $3x + 5 = 20$.",
        "zh": "解方程 $3x + 5 = 20$。"
      },
      "choices": [
        "$x = 5$",
        "$x = \\frac{25}{3}$",
        "$x = -5$",
        "$x = \\frac{15}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract $5$ from both sides: $3x = 15$, then divide by $3$ to get $x = 5$. Choosing $\\frac{25}{3}$ comes from adding $5$ instead of subtracting it.",
        "zh": "两边减去 $5$：$3x = 15$，再除以 $3$ 得 $x = 5$。选 $\\frac{25}{3}$ 是把减 $5$ 错做成加 $5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2(x - 4) = 10$.",
        "zh": "解方程 $2(x - 4) = 10$。"
      },
      "choices": [
        "$x = 7$",
        "$x = 9$",
        "$x = -9$",
        "$x = 3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Distribute first: $2x - 8 = 10$, so $2x = 18$ and $x = 9$. Answering $7$ comes from only adding $4$ without distributing the $2$ across the parenthesis.",
        "zh": "先展开：$2x - 8 = 10$，故 $2x = 18$，$x = 9$。答 $7$ 是没有把 $2$ 分配到括号里，只加了 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $5x - 3 = 2x + 9$.",
        "zh": "解方程 $5x - 3 = 2x + 9$。"
      },
      "choices": [
        "$x = 2$",
        "$x = -4$",
        "$x = 4$",
        "$x = 6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Subtract $2x$ from both sides: $3x - 3 = 9$. Add $3$: $3x = 12$, so $x = 4$. Check: $5(4) - 3 = 17$ and $2(4) + 9 = 17$.",
        "zh": "两边减去 $2x$：$3x - 3 = 9$。加 $3$：$3x = 12$，故 $x = 4$。验证：$5(4) - 3 = 17$，$2(4) + 9 = 17$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $4 - 2(x + 3) = 0$.",
        "zh": "解方程 $4 - 2(x + 3) = 0$。"
      },
      "choices": [
        "$x = -5$",
        "$x = 5$",
        "$x = 1$",
        "$x = -1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Distribute the $-2$: $4 - 2x - 6 = 0$, so $-2x - 2 = 0$, giving $-2x = 2$ and $x = -1$. Answering $5$ comes from writing $+6$ instead of $-6$ (failing to distribute the negative).",
        "zh": "把 $-2$ 分配进去：$4 - 2x - 6 = 0$，即 $-2x - 2 = 0$，得 $-2x = 2$，$x = -1$。答 $5$ 是把 $-6$ 错写成 $+6$（没有正确分配负号）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $3x + 2 - x + 6 = 12$.",
        "zh": "解方程 $3x + 2 - x + 6 = 12$。"
      },
      "choices": [
        "$x = 2$",
        "$x = 3$",
        "$x = -2$",
        "$x = 5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Combine like terms on the left: $2x + 8 = 12$, so $2x = 4$ and $x = 2$. Check: $3(2) + 2 - 2 + 6 = 12$.",
        "zh": "先合并左边的同类项：$2x + 8 = 12$，故 $2x = 4$，$x = 2$。验证：$3(2) + 2 - 2 + 6 = 12$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\frac{x}{2} + \\frac{x}{3} = 5$.",
        "zh": "解方程 $\\frac{x}{2} + \\frac{x}{3} = 5$。"
      },
      "choices": [
        "$x = 10$",
        "$x = 6$",
        "$x = 3$",
        "$x = 15$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply every term by the common denominator $6$: $3x + 2x = 30$, so $5x = 30$ and $x = 6$. Check: $\\frac{6}{2} + \\frac{6}{3} = 3 + 2 = 5$.",
        "zh": "每一项都乘以公分母 $6$：$3x + 2x = 30$，即 $5x = 30$，$x = 6$。验证：$\\frac{6}{2} + \\frac{6}{3} = 3 + 2 = 5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does $2x + 5 = 2x - 3$ have?",
        "zh": "方程 $2x + 5 = 2x - 3$ 有多少个解？"
      },
      "choices": [
        "$x = 0$",
        "$x = -4$",
        "No solution",
        "Infinitely many solutions"
      ],
      "answer": 2,
      "explanation": {
        "en": "Subtract $2x$ from both sides: $5 = -3$, which is false. The variable cancels and leaves a false statement, so there is no solution.",
        "zh": "两边减去 $2x$：$5 = -3$，这是假命题。变量被约去后得到一个矛盾式，故方程无解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does $3(x - 2) = 3x - 6$ have?",
        "zh": "方程 $3(x - 2) = 3x - 6$ 有多少个解？"
      },
      "choices": [
        "$x = 6$",
        "$x = 0$",
        "No solution",
        "Infinitely many solutions"
      ],
      "answer": 3,
      "explanation": {
        "en": "Distribute the left side: $3x - 6 = 3x - 6$. Both sides are identical, true for every $x$, so there are infinitely many solutions.",
        "zh": "展开左边：$3x - 6 = 3x - 6$。两边完全相同，对任意 $x$ 都成立，故有无穷多个解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2(x + 3) = 3(x - 1)$.",
        "zh": "解方程 $2(x + 3) = 3(x - 1)$。"
      },
      "choices": [
        "$x = 9$",
        "$x = -9$",
        "$x = 3$",
        "$x = 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Distribute both sides: $2x + 6 = 3x - 3$. Subtract $2x$ and add $3$: $9 = x$. Check: $2(12) = 24$ and $3(8) = 24$.",
        "zh": "两边都展开：$2x + 6 = 3x - 3$。减去 $2x$ 并加 $3$：$9 = x$。验证：$2(12) = 24$，$3(8) = 24$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $\\frac{x + 1}{3} = \\frac{x - 3}{2}$.",
        "zh": "解方程 $\\frac{x + 1}{3} = \\frac{x - 3}{2}$。"
      },
      "choices": [
        "$x = -11$",
        "$x = 11$",
        "$x = 2$",
        "$x = 4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Cross-multiply (clear denominators): $2(x + 1) = 3(x - 3)$, so $2x + 2 = 3x - 9$, giving $11 = x$. Check: $\\frac{12}{3} = 4$ and $\\frac{8}{2} = 4$.",
        "zh": "交叉相乘（去分母）：$2(x + 1) = 3(x - 3)$，即 $2x + 2 = 3x - 9$，得 $11 = x$。验证：$\\frac{12}{3} = 4$，$\\frac{8}{2} = 4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $-3(x - 4) = 15$.",
        "zh": "解方程 $-3(x - 4) = 15$。"
      },
      "choices": [
        "$x = 9$",
        "$x = -9$",
        "$x = -1$",
        "$x = 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Distribute the $-3$ carefully: $-3x + 12 = 15$, so $-3x = 3$ and $x = -1$. A common sign error writes $-3x - 12 = 15$, which wrongly gives $x = -9$.",
        "zh": "小心地分配 $-3$：$-3x + 12 = 15$，故 $-3x = 3$，$x = -1$。常见符号错误是写成 $-3x - 12 = 15$，会错误地得到 $x = -9$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does $4x - 2 = 4(x - 1) + 2$ have?",
        "zh": "方程 $4x - 2 = 4(x - 1) + 2$ 有多少个解？"
      },
      "choices": [
        "No solution",
        "$x = 2$",
        "$x = 0$",
        "Infinitely many solutions"
      ],
      "answer": 3,
      "explanation": {
        "en": "Simplify the right side: $4(x - 1) + 2 = 4x - 4 + 2 = 4x - 2$. The equation becomes $4x - 2 = 4x - 2$, true for every $x$, so there are infinitely many solutions.",
        "zh": "化简右边：$4(x - 1) + 2 = 4x - 4 + 2 = 4x - 2$。方程变为 $4x - 2 = 4x - 2$，对任意 $x$ 都成立，故有无穷多个解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $7x - 4 = 3x + 12$. Give the value of $x$ (an integer).",
        "zh": "解方程 $7x - 4 = 3x + 12$。请填 $x$ 的值（一个整数）。"
      },
      "answer": "4",
      "accept": [
        "x=4",
        "+4",
        "4.0"
      ],
      "explanation": {
        "en": "Subtract $3x$ from both sides: $4x - 4 = 12$. Add $4$: $4x = 16$, so $x = 4$. Check: $7(4) - 4 = 24$ and $3(4) + 12 = 24$.",
        "zh": "两边减去 $3x$：$4x - 4 = 12$。加 $4$：$4x = 16$，故 $x = 4$。验证：$7(4) - 4 = 24$，$3(4) + 12 = 24$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $5(x + 2) = 35$. Give the value of $x$ (an integer).",
        "zh": "解方程 $5(x + 2) = 35$。请填 $x$ 的值（一个整数）。"
      },
      "answer": "5",
      "accept": [
        "x=5",
        "+5",
        "5.0"
      ],
      "explanation": {
        "en": "Distribute: $5x + 10 = 35$, so $5x = 25$ and $x = 5$. Check: $5(5 + 2) = 5(7) = 35$.",
        "zh": "展开：$5x + 10 = 35$，故 $5x = 25$，$x = 5$。验证：$5(5 + 2) = 5(7) = 35$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{2x}{3} - 1 = 5$. Give the value of $x$ (an integer).",
        "zh": "解方程 $\\frac{2x}{3} - 1 = 5$。请填 $x$ 的值（一个整数）。"
      },
      "answer": "9",
      "accept": [
        "x=9",
        "+9",
        "9.0"
      ],
      "explanation": {
        "en": "Add $1$: $\\frac{2x}{3} = 6$. Multiply both sides by $3$: $2x = 18$, so $x = 9$. Check: $\\frac{2(9)}{3} - 1 = 6 - 1 = 5$.",
        "zh": "加 $1$：$\\frac{2x}{3} = 6$。两边乘以 $3$：$2x = 18$，故 $x = 9$。验证：$\\frac{2(9)}{3} - 1 = 6 - 1 = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $\\frac{x}{4} + \\frac{1}{2} = \\frac{x}{2}$. Give the value of $x$ (an integer).",
        "zh": "解方程 $\\frac{x}{4} + \\frac{1}{2} = \\frac{x}{2}$。请填 $x$ 的值（一个整数）。"
      },
      "answer": "2",
      "accept": [
        "x=2",
        "+2",
        "2.0"
      ],
      "explanation": {
        "en": "Multiply every term by the common denominator $4$: $x + 2 = 2x$, so $x = 2$. Check: $\\frac{2}{4} + \\frac{1}{2} = 1$ and $\\frac{2}{2} = 1$.",
        "zh": "每一项都乘以公分母 $4$：$x + 2 = 2x$，故 $x = 2$。验证：$\\frac{2}{4} + \\frac{1}{2} = 1$，$\\frac{2}{2} = 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $8 - 3(2x - 1) = 5$. Give the value of $x$ (an integer).",
        "zh": "解方程 $8 - 3(2x - 1) = 5$。请填 $x$ 的值（一个整数）。"
      },
      "answer": "1",
      "accept": [
        "x=1",
        "+1",
        "1.0"
      ],
      "explanation": {
        "en": "Distribute the $-3$: $8 - 6x + 3 = 5$, so $11 - 6x = 5$, giving $-6x = -6$ and $x = 1$. The $-3$ times $-1$ becomes $+3$; missing that sign is the common error. Check: $8 - 3(2 - 1) = 8 - 3 = 5$.",
        "zh": "分配 $-3$：$8 - 6x + 3 = 5$，即 $11 - 6x = 5$，得 $-6x = -6$，$x = 1$。$-3$ 乘 $-1$ 应为 $+3$，漏掉这个符号是常见错误。验证：$8 - 3(2 - 1) = 8 - 3 = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $3(2x - 1) = 4x + 7$. Give the value of $x$ (an integer).",
        "zh": "解方程 $3(2x - 1) = 4x + 7$。请填 $x$ 的值（一个整数）。"
      },
      "answer": "5",
      "accept": [
        "x=5",
        "+5",
        "5.0"
      ],
      "explanation": {
        "en": "Distribute the left side: $6x - 3 = 4x + 7$. Subtract $4x$ and add $3$: $2x = 10$, so $x = 5$. Check: $3(2 \\cdot 5 - 1) = 3(9) = 27$ and $4(5) + 7 = 27$.",
        "zh": "展开左边：$6x - 3 = 4x + 7$。减去 $4x$ 并加 $3$：$2x = 10$，故 $x = 5$。验证：$3(2 \\cdot 5 - 1) = 3(9) = 27$，$4(5) + 7 = 27$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $4x - 1 = 2$. Give $x$ as a fraction in lowest terms (e.g. $\\frac{3}{4}$ typed as 3/4).",
        "zh": "解方程 $4x - 1 = 2$。请把 $x$ 写成最简分数（例如 $\\frac{3}{4}$ 输入为 3/4）。"
      },
      "answer": "3/4",
      "accept": [
        "0.75",
        "x=3/4",
        ".75"
      ],
      "explanation": {
        "en": "Add $1$: $4x = 3$, then divide by $4$ to get $x = \\frac{3}{4}$. Check: $4 \\cdot \\frac{3}{4} - 1 = 3 - 1 = 2$.",
        "zh": "加 $1$：$4x = 3$，再除以 $4$ 得 $x = \\frac{3}{4}$。验证：$4 \\cdot \\frac{3}{4} - 1 = 3 - 1 = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $5x + 3 = 2x + 1$. Give $x$ as a fraction in lowest terms (e.g. -2/3).",
        "zh": "解方程 $5x + 3 = 2x + 1$。请把 $x$ 写成最简分数（例如 -2/3）。"
      },
      "answer": "-2/3",
      "accept": [
        "x=-2/3",
        "-2 / 3"
      ],
      "explanation": {
        "en": "Subtract $2x$ from both sides: $3x + 3 = 1$. Subtract $3$: $3x = -2$, so $x = -\\frac{2}{3}$. Watch the sign: subtracting $3$ from $1$ gives $-2$, not $2$. Check: $5(-\\frac{2}{3}) + 3 = -\\frac{1}{3}$ and $2(-\\frac{2}{3}) + 1 = -\\frac{1}{3}$.",
        "zh": "两边减去 $2x$：$3x + 3 = 1$。减 $3$：$3x = -2$，故 $x = -\\frac{2}{3}$。注意符号：$1$ 减 $3$ 得 $-2$，不是 $2$。验证：$5(-\\frac{2}{3}) + 3 = -\\frac{1}{3}$，$2(-\\frac{2}{3}) + 1 = -\\frac{1}{3}$。"
      }
    }
  ],
  "unit-2-solving-equations-inequalities/solving-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "Solve the inequality $x + 5 > 3$.",
        "zh": "解不等式 $x + 5 > 3$。"
      },
      "choices": [
        "$x > -2$",
        "$x < -2$",
        "$x > 8$",
        "$x < 8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract $5$ from both sides: $x > 3 - 5 = -2$. Because we only added/subtracted, the inequality direction does not change.",
        "zh": "两边同时减 $5$：$x > 3 - 5 = -2$。因为只做了加减运算，不等号方向不变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $-3x > 12$.",
        "zh": "解 $-3x > 12$。"
      },
      "choices": [
        "$x > -4$",
        "$x < -4$",
        "$x < 4$",
        "$x > 4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Divide both sides by $-3$. Dividing by a NEGATIVE number flips the inequality: $x < \\frac{12}{-3} = -4$, so $x < -4$. Leaving it as $x > -4$ forgets to flip the sign.",
        "zh": "两边同时除以 $-3$。除以负数时不等号方向必须翻转：$x < \\frac{12}{-3} = -4$，即 $x < -4$。写成 $x > -4$ 就是忘了翻转符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2x - 7 \\le 5$.",
        "zh": "解 $2x - 7 \\le 5$。"
      },
      "choices": [
        "$x \\ge 6$",
        "$x \\le -6$",
        "$x \\le 6$",
        "$x \\ge -6$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Add $7$: $2x \\le 12$. Divide by the POSITIVE number $2$: $x \\le 6$. Dividing by a positive keeps the direction of $\\le$.",
        "zh": "两边加 $7$：$2x \\le 12$。除以正数 $2$：$x \\le 6$。除以正数时 $\\le$ 方向保持不变。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $-2x < 8$.",
        "zh": "解 $-2x < 8$。"
      },
      "choices": [
        "$x < -4$",
        "$x > 4$",
        "$x < 4$",
        "$x > -4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Divide both sides by $-2$ and flip the inequality: $x > \\frac{8}{-2} = -4$, so $x > -4$. Dividing by a negative reverses $<$ into $>$.",
        "zh": "两边除以 $-2$ 并翻转不等号：$x > \\frac{8}{-2} = -4$，即 $x > -4$。除以负数会把 $<$ 变成 $>$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the compound inequality $-3 < x + 2 \\le 5$.",
        "zh": "解复合不等式 $-3 < x + 2 \\le 5$。"
      },
      "choices": [
        "$-5 < x \\le 3$",
        "$-1 < x \\le 7$",
        "$-5 \\le x < 3$",
        "$-3 < x \\le 5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract $2$ from all three parts: $-3 - 2 < x \\le 5 - 2$, giving $-5 < x \\le 3$. Whatever you do to the middle you do to both outer parts.",
        "zh": "三个部分同时减 $2$：$-3 - 2 < x \\le 5 - 2$，得 $-5 < x \\le 3$。对中间做的运算要对两侧同样进行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which number line represents $x \\ge 2$?",
        "zh": "哪条数轴表示 $x \\ge 2$？"
      },
      "choices": [
        "Open circle at $2$, arrow pointing right",
        "Closed circle at $2$, arrow pointing right",
        "Closed circle at $2$, arrow pointing left",
        "Open circle at $2$, arrow pointing left"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\ge$ includes $2$, so the endpoint is a CLOSED (filled) circle. 'Greater than or equal' means values to the right, so the arrow points right. An open circle would mean $2$ is excluded ($>$).",
        "zh": "$\\ge$ 包含 $2$，所以端点是实心圆。'大于等于' 表示取右边的数，箭头向右。空心圆表示不包含 $2$（即 $>$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A number line shows an OPEN circle at $-1$ with the arrow pointing left. Which inequality does it represent?",
        "zh": "数轴上 $-1$ 处是空心圆，箭头向左。它表示哪个不等式？"
      },
      "choices": [
        "$x \\le -1$",
        "$x > -1$",
        "$x < -1$",
        "$x \\ge -1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "An open circle means $-1$ is NOT included, so the relation is strict ($<$ or $>$), not $\\le$ or $\\ge$. The arrow points left (smaller values), so $x < -1$.",
        "zh": "空心圆表示不包含 $-1$，所以是严格不等号（$<$ 或 $>$），而非 $\\le$ 或 $\\ge$。箭头向左（更小的数），所以 $x < -1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $5 - 2x \\ge 11$.",
        "zh": "解 $5 - 2x \\ge 11$。"
      },
      "choices": [
        "$x \\ge -3$",
        "$x \\ge 3$",
        "$x \\le 3$",
        "$x \\le -3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Subtract $5$: $-2x \\ge 6$. Divide by $-2$ and FLIP: $x \\le \\frac{6}{-2} = -3$, so $x \\le -3$. Forgetting to flip gives the wrong $x \\ge -3$.",
        "zh": "两边减 $5$：$-2x \\ge 6$。除以 $-2$ 并翻转：$x \\le \\frac{6}{-2} = -3$，即 $x \\le -3$。忘记翻转就会错写成 $x \\ge -3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $-(x - 4) < 6$.",
        "zh": "解 $-(x - 4) < 6$。"
      },
      "choices": [
        "$x > -2$",
        "$x < 2$",
        "$x > 2$",
        "$x < -2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Distribute the negative: $-x + 4 < 6$. Subtract $4$: $-x < 2$. Divide by $-1$ and flip: $x > -2$. Watch both the distributed sign and the flip.",
        "zh": "先分配负号：$-x + 4 < 6$。两边减 $4$：$-x < 2$。除以 $-1$ 并翻转：$x > -2$。要同时注意分配负号和翻转不等号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The solution to a compound OR inequality is $x < -2$ or $x \\ge 4$. Which value is NOT a solution?",
        "zh": "某个 '或' 复合不等式的解为 $x < -2$ 或 $x \\ge 4$。下列哪个值不是解？"
      },
      "choices": [
        "$-3$",
        "$0$",
        "$4$",
        "$5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$0$ is not less than $-2$ and not $\\ge 4$, so it fails both parts and is not a solution. $-3$ satisfies $x < -2$; $4$ satisfies $x \\ge 4$ (closed); $5$ satisfies $x \\ge 4$.",
        "zh": "$0$ 既不小于 $-2$，也不 $\\ge 4$，两部分都不满足，所以不是解。$-3$ 满足 $x < -2$；$4$ 满足 $x \\ge 4$（闭）；$5$ 满足 $x \\ge 4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which value satisfies $-4 \\le 2x < 6$?",
        "zh": "哪个值满足 $-4 \\le 2x < 6$？"
      },
      "choices": [
        "$-3$",
        "$4$",
        "$2$",
        "$3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide all parts by $2$: $-2 \\le x < 3$. Only $2$ lies in this range ($-2 \\le 2 < 3$). Note $3$ is excluded because the right end is strict ($<$).",
        "zh": "三部分同时除以 $2$：$-2 \\le x < 3$。只有 $2$ 在此范围内（$-2 \\le 2 < 3$）。注意 $3$ 被排除，因为右端是严格不等号（$<$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A student needs an average of at least $90$ on two tests. The first score is $85$; let $s$ be the second. Which inequality models this?",
        "zh": "某学生两次考试平均分至少要 $90$。第一次 $85$ 分，设第二次为 $s$。哪个不等式表示这一情形？"
      },
      "choices": [
        "$\\frac{85 + s}{2} > 90$",
        "$\\frac{85 + s}{2} \\le 90$",
        "$85 + s \\ge 90$",
        "$\\frac{85 + s}{2} \\ge 90$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The average of the two tests is $\\frac{85 + s}{2}$, and 'at least $90$' means $\\ge 90$. So $\\frac{85 + s}{2} \\ge 90$. 'At least' includes equality, so use $\\ge$, not $>$.",
        "zh": "两次考试的平均分是 $\\frac{85 + s}{2}$，'至少 $90$' 表示 $\\ge 90$。故 $\\frac{85 + s}{2} \\ge 90$。'至少' 包含等于，应用 $\\ge$ 而非 $>$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $-5x \\le 35$. The solution has the form $x \\ge k$. Enter the integer $k$.",
        "zh": "解 $-5x \\le 35$。解的形式为 $x \\ge k$。请填整数 $k$。"
      },
      "answer": "-7",
      "accept": [
        "-7.0",
        "k=-7",
        "x=-7"
      ],
      "explanation": {
        "en": "Divide both sides by $-5$ and FLIP the inequality: $x \\ge \\frac{35}{-5} = -7$. So $k = -7$. Dividing by a negative turns $\\le$ into $\\ge$.",
        "zh": "两边除以 $-5$ 并翻转不等号：$x \\ge \\frac{35}{-5} = -7$，故 $k = -7$。除以负数把 $\\le$ 变成 $\\ge$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $3x + 4 < 19$. The solution has the form $x < k$. Enter the integer $k$.",
        "zh": "解 $3x + 4 < 19$。解的形式为 $x < k$。请填整数 $k$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "k=5",
        "x=5"
      ],
      "explanation": {
        "en": "Subtract $4$: $3x < 15$. Divide by the positive $3$: $x < 5$. Dividing by a positive keeps the direction, so $k = 5$.",
        "zh": "两边减 $4$：$3x < 15$。除以正数 $3$：$x < 5$。除以正数方向不变，故 $k = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $2(x - 3) \\ge 4$. The solution has the form $x \\ge k$. Enter the integer $k$.",
        "zh": "解 $2(x - 3) \\ge 4$。解的形式为 $x \\ge k$。请填整数 $k$。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "k=5",
        "x=5"
      ],
      "explanation": {
        "en": "Distribute: $2x - 6 \\ge 4$. Add $6$: $2x \\ge 10$. Divide by $2$: $x \\ge 5$. So $k = 5$.",
        "zh": "先分配：$2x - 6 \\ge 4$。加 $6$：$2x \\ge 10$。除以 $2$：$x \\ge 5$，故 $k = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A number line shows a CLOSED circle at $2$ with the arrow pointing left, representing $x \\le k$. Enter the integer $k$.",
        "zh": "数轴上 $2$ 处是实心圆，箭头向左，表示 $x \\le k$。请填整数 $k$。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "k=2",
        "x=2"
      ],
      "explanation": {
        "en": "The endpoint is at $2$ and the closed circle includes it, while the leftward arrow means 'less than'. Together this is $x \\le 2$, so $k = 2$. A closed circle matches $\\le$ (not $<$).",
        "zh": "端点在 $2$，实心圆表示包含它，箭头向左表示 '小于'。合起来是 $x \\le 2$，故 $k = 2$。实心圆对应 $\\le$（而非 $<$）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $-\\frac{x}{2} > 3$. The solution has the form $x < k$. Enter the integer $k$.",
        "zh": "解 $-\\frac{x}{2} > 3$。解的形式为 $x < k$。请填整数 $k$。"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "k=-6",
        "x=-6"
      ],
      "explanation": {
        "en": "Multiply both sides by $-2$ and FLIP: $x < 3 \\cdot (-2) = -6$. So $k = -6$. Multiplying by a negative reverses $>$ into $<$.",
        "zh": "两边乘以 $-2$ 并翻转：$x < 3 \\cdot (-2) = -6$，故 $k = -6$。乘以负数把 $>$ 变成 $<$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $-1 \\le 2x + 3 \\le 9$. The solution has the form $a \\le x \\le b$. Enter the value of $a$ (an integer).",
        "zh": "解 $-1 \\le 2x + 3 \\le 9$。解的形式为 $a \\le x \\le b$。请填 $a$ 的值（整数）。"
      },
      "answer": "-2",
      "accept": [
        "-2.0",
        "a=-2",
        "x=-2"
      ],
      "explanation": {
        "en": "Subtract $3$ from all parts: $-4 \\le 2x \\le 6$. Divide by $2$: $-2 \\le x \\le 3$. The lower bound is $a = -2$.",
        "zh": "三部分同时减 $3$：$-4 \\le 2x \\le 6$。除以 $2$：$-2 \\le x \\le 3$。下界为 $a = -2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $4 < 3x - 2 < 13$. The solution has the form $a < x < b$. Enter the value of $b$ (an integer).",
        "zh": "解 $4 < 3x - 2 < 13$。解的形式为 $a < x < b$。请填 $b$ 的值（整数）。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "b=5",
        "x=5"
      ],
      "explanation": {
        "en": "Add $2$ to all parts: $6 < 3x < 15$. Divide by $3$: $2 < x < 5$. The upper bound is $b = 5$.",
        "zh": "三部分同时加 $2$：$6 < 3x < 15$。除以 $3$：$2 < x < 5$。上界为 $b = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A taxi charges a $\\$3$ base fee plus $\\$2$ per mile. With $\\$15$, solve $3 + 2m \\le 15$ for the greatest whole number of miles $m$. Enter that number.",
        "zh": "出租车起步费 $\\$3$，每英里 $\\$2$。用 $\\$15$，解 $3 + 2m \\le 15$，求最多能坐的整数英里数 $m$。请填该数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "m=6",
        "6 miles"
      ],
      "explanation": {
        "en": "Subtract $3$: $2m \\le 12$. Divide by $2$: $m \\le 6$. The greatest whole number of miles is $6$.",
        "zh": "两边减 $3$：$2m \\le 12$。除以 $2$：$m \\le 6$。最多的整数英里数是 $6$。"
      }
    }
  ],
  "unit-2-solving-equations-inequalities/literal-equations-and-modeling": [
    {
      "type": "mc",
      "question": {
        "en": "Solve the area formula $A = lw$ for the width $w$.",
        "zh": "将面积公式 $A = lw$ 解出宽 $w$。"
      },
      "choices": [
        "$w = \\frac{A}{l}$",
        "$w = Al$",
        "$w = A - l$",
        "$w = \\frac{l}{A}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Since $A = lw$, divide both sides by $l$ to isolate $w$: $w = \\frac{A}{l}$. Dividing (not subtracting) undoes the multiplication by $l$.",
        "zh": "因为 $A = lw$，两边同除以 $l$ 便可解出 $w$：$w = \\frac{A}{l}$。要用除法（而非减法）来抵消乘以 $l$ 的运算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the perimeter formula $P = 2l + 2w$ for the length $l$.",
        "zh": "将周长公式 $P = 2l + 2w$ 解出长 $l$。"
      },
      "choices": [
        "$l = \\frac{P}{2} - 2w$",
        "$l = \\frac{P - 2w}{2}$",
        "$l = P - 2w$",
        "$l = \\frac{P - w}{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Subtract $2w$ from both sides: $2l = P - 2w$. Then divide the WHOLE right side by $2$: $l = \\frac{P - 2w}{2}$. A common error is dividing only $P$ by $2$.",
        "zh": "两边减去 $2w$：$2l = P - 2w$。再将右边整体除以 $2$：$l = \\frac{P - 2w}{2}$。常见错误是只把 $P$ 除以 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the circumference formula $C = 2\\pi r$ for the radius $r$.",
        "zh": "将周长公式 $C = 2\\pi r$ 解出半径 $r$。"
      },
      "choices": [
        "$r = 2\\pi C$",
        "$r = \\frac{2\\pi}{C}$",
        "$r = \\frac{C}{2\\pi}$",
        "$r = C - 2\\pi$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide both sides by the coefficient $2\\pi$: $r = \\frac{C}{2\\pi}$. The quantity $2\\pi$ is multiplying $r$, so division isolates $r$.",
        "zh": "两边同除以系数 $2\\pi$：$r = \\frac{C}{2\\pi}$。因为 $2\\pi$ 是乘在 $r$ 上的，所以用除法把 $r$ 分离出来。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the slope-intercept equation $y = mx + b$ for $x$.",
        "zh": "将斜截式方程 $y = mx + b$ 解出 $x$。"
      },
      "choices": [
        "$x = \\frac{y}{m} - b$",
        "$x = \\frac{y + b}{m}$",
        "$x = y - b - m$",
        "$x = \\frac{y - b}{m}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Subtract $b$ from both sides: $y - b = mx$. Then divide the entire left side by $m$: $x = \\frac{y - b}{m}$. Both terms $y$ and $-b$ must be divided by $m$.",
        "zh": "两边减去 $b$：$y - b = mx$。再将左边整体除以 $m$：$x = \\frac{y - b}{m}$。$y$ 和 $-b$ 两项都必须除以 $m$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the temperature formula $F = \\frac{9}{5}C + 32$ for $C$.",
        "zh": "将温度公式 $F = \\frac{9}{5}C + 32$ 解出 $C$。"
      },
      "choices": [
        "$C = \\frac{5}{9}(F - 32)$",
        "$C = \\frac{9}{5}(F - 32)$",
        "$C = \\frac{5}{9}F - 32$",
        "$C = \\frac{5}{9}F + 32$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract $32$ first: $F - 32 = \\frac{9}{5}C$. Then multiply both sides by the reciprocal $\\frac{5}{9}$: $C = \\frac{5}{9}(F - 32)$. The $-32$ must stay inside the parentheses because it was subtracted before dividing.",
        "zh": "先减去 $32$：$F - 32 = \\frac{9}{5}C$。再两边乘以倒数 $\\frac{5}{9}$：$C = \\frac{5}{9}(F - 32)$。因为 $-32$ 是在除法之前减去的，所以必须留在括号内。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the cone-volume formula $V = \\frac{1}{3}\\pi r^2 h$ for the height $h$.",
        "zh": "将圆锥体积公式 $V = \\frac{1}{3}\\pi r^2 h$ 解出高 $h$。"
      },
      "choices": [
        "$h = \\frac{V}{3\\pi r^2}$",
        "$h = \\frac{3V}{\\pi r^2}$",
        "$h = 3V\\pi r^2$",
        "$h = \\frac{3V}{\\pi r}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiply both sides by $3$: $3V = \\pi r^2 h$. Then divide by $\\pi r^2$: $h = \\frac{3V}{\\pi r^2}$. Multiplying by $3$ clears the fraction $\\frac{1}{3}$.",
        "zh": "两边乘以 $3$：$3V = \\pi r^2 h$。再除以 $\\pi r^2$：$h = \\frac{3V}{\\pi r^2}$。乘以 $3$ 是为了消去分数 $\\frac{1}{3}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation represents \"Seven more than three times a number is 25\"?",
        "zh": "哪个方程表示“一个数的三倍再加上七等于 25”？"
      },
      "choices": [
        "$3(x + 7) = 25$",
        "$7x + 3 = 25$",
        "$3x + 7 = 25$",
        "$3x - 7 = 25$"
      ],
      "answer": 2,
      "explanation": {
        "en": "\"Three times a number\" is $3x$, and \"seven more than\" that adds $7$: $3x + 7 = 25$. Note $3(x + 7)$ would mean \"three times (seven more than the number)\".",
        "zh": "“一个数的三倍”是 $3x$，“再加上七”即加 $7$：$3x + 7 = 25$。注意 $3(x + 7)$ 表示“（这个数加七）的三倍”，含义不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Three consecutive even integers add to 84. If $n$ is the smallest, which equation models this?",
        "zh": "三个连续偶数之和为 84。若最小的数是 $n$，哪个方程能表示此关系？"
      },
      "choices": [
        "$n + (n + 1) + (n + 2) = 84$",
        "$3n = 84$",
        "$n + 2n + 4n = 84$",
        "$n + (n + 2) + (n + 4) = 84$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Consecutive EVEN integers differ by $2$, so they are $n$, $n + 2$, $n + 4$: $n + (n + 2) + (n + 4) = 84$. Adding $1$ each time would model consecutive integers, not even ones.",
        "zh": "连续偶数彼此相差 $2$，所以是 $n$、$n + 2$、$n + 4$：$n + (n + 2) + (n + 4) = 84$。每次加 $1$ 表示的是连续整数，而非连续偶数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A train travels for 3 hours at a constant rate $r$ (in mph) and covers 195 miles. Using $d = rt$, which equation finds $r$?",
        "zh": "一列火车以恒定速率 $r$（英里/小时）行驶 3 小时，行程 195 英里。利用 $d = rt$，哪个方程可求出 $r$？"
      },
      "choices": [
        "$3r = 195$",
        "$\\frac{r}{3} = 195$",
        "$r + 3 = 195$",
        "$3 + 195 = r$"
      ],
      "answer": 0,
      "explanation": {
        "en": "With $d = rt$, substitute $d = 195$ and $t = 3$: $195 = r \\cdot 3$, i.e. $3r = 195$. Rate and time are multiplied, not added.",
        "zh": "由 $d = rt$，代入 $d = 195$、$t = 3$：$195 = r \\cdot 3$，即 $3r = 195$。速率与时间是相乘关系，而非相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Maria is 4 years older than Juan. The sum of their ages is 30. If Juan's age is $j$, which equation is correct?",
        "zh": "玛丽亚比胡安大 4 岁。他们年龄之和为 30。若胡安的年龄为 $j$，哪个方程正确？"
      },
      "choices": [
        "$j + 4 = 30$",
        "$j + (j + 4) = 30$",
        "$j + (j - 4) = 30$",
        "$4j = 30$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Juan is $j$ and Maria, being 4 years older, is $j + 4$. Their sum is $j + (j + 4) = 30$. Since Maria is OLDER, her age is $j + 4$, not $j - 4$.",
        "zh": "胡安为 $j$，玛丽亚大 4 岁即 $j + 4$。二者之和为 $j + (j + 4) = 30$。因为玛丽亚更年长，她的年龄是 $j + 4$，不是 $j - 4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A jar holds $x$ dimes ($\\$0.10$ each) and 5 more nickels ($\\$0.05$ each) than dimes, worth $\\$2.00$ total. Which equation (in dollars) models this?",
        "zh": "一个罐子里有 $x$ 枚一角硬币（每枚 $\\$0.10$），五分硬币（每枚 $\\$0.05$）比一角硬币多 5 枚，总价值 $\\$2.00$。哪个方程（以美元计）能表示此关系？"
      },
      "choices": [
        "$0.05x + 0.10(x + 5) = 2.00$",
        "$10x + 5(x + 5) = 2.00$",
        "$0.10x + 0.05(x + 5) = 2.00$",
        "$0.10x + 0.05x + 5 = 2.00$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Value = (count)(coin value). Dimes: $0.10x$; nickels number $x + 5$ worth $0.05(x + 5)$. Total: $0.10x + 0.05(x + 5) = 2.00$. Each coin's VALUE (not just its count) must be used.",
        "zh": "价值 = 数量 × 单枚面值。一角硬币：$0.10x$；五分硬币有 $x + 5$ 枚，价值 $0.05(x + 5)$。总计：$0.10x + 0.05(x + 5) = 2.00$。要使用每种硬币的面值，而非仅数量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve the linear equation $ax + b = c$ for $x$ (assume $a \\ne 0$).",
        "zh": "解线性方程 $ax + b = c$，求 $x$（设 $a \\ne 0$）。"
      },
      "choices": [
        "$x = \\frac{c + b}{a}$",
        "$x = c - b - a$",
        "$x = \\frac{c}{a} - b$",
        "$x = \\frac{c - b}{a}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Subtract $b$: $ax = c - b$. Then divide by $a$: $x = \\frac{c - b}{a}$. Both $c$ and $-b$ are divided by $a$, so you cannot write $\\frac{c}{a} - b$.",
        "zh": "两边减 $b$：$ax = c - b$。再除以 $a$：$x = \\frac{c - b}{a}$。$c$ 与 $-b$ 都要除以 $a$，因此不能写成 $\\frac{c}{a} - b$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Seven more than three times a number is 25. Find the number. Give an integer.",
        "zh": "一个数的三倍再加上七等于 25。求这个数。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "x=6",
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Set up $3x + 7 = 25$. Subtract $7$: $3x = 18$. Divide by $3$: $x = 6$. Check: $3(6) + 7 = 25$. ✓",
        "zh": "列出 $3x + 7 = 25$。两边减 $7$：$3x = 18$。再除以 $3$：$x = 6$。验证：$3(6) + 7 = 25$。✓"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Three consecutive even integers add to 84. Find the smallest one. Give an integer.",
        "zh": "三个连续偶数之和为 84。求其中最小的数。请填一个整数。"
      },
      "answer": "26",
      "accept": [
        "n=26",
        "26.0"
      ],
      "explanation": {
        "en": "Let the integers be $n$, $n + 2$, $n + 4$. Then $3n + 6 = 84$, so $3n = 78$ and $n = 26$. Check: $26 + 28 + 30 = 84$. ✓",
        "zh": "设三数为 $n$、$n + 2$、$n + 4$。则 $3n + 6 = 84$，故 $3n = 78$，$n = 26$。验证：$26 + 28 + 30 = 84$。✓"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Maria is 4 years older than Juan, and the sum of their ages is 30. How old is Juan? Give an integer.",
        "zh": "玛丽亚比胡安大 4 岁，两人年龄之和为 30。胡安多少岁？请填一个整数。"
      },
      "answer": "13",
      "accept": [
        "j=13",
        "13.0"
      ],
      "explanation": {
        "en": "Let Juan be $j$; Maria is $j + 4$. Then $j + (j + 4) = 30$, so $2j + 4 = 30$, $2j = 26$, $j = 13$. Check: $13 + 17 = 30$. ✓",
        "zh": "设胡安为 $j$，玛丽亚为 $j + 4$。则 $j + (j + 4) = 30$，即 $2j + 4 = 30$，$2j = 26$，$j = 13$。验证：$13 + 17 = 30$。✓"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using $d = rt$: a car travels 180 miles at a constant 60 mph. How many hours does the trip take? Give the number of hours.",
        "zh": "利用 $d = rt$：一辆车以恒定 60 英里/小时行驶 180 英里。这段行程需要多少小时？请填小时数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "t=3",
        "+3"
      ],
      "explanation": {
        "en": "Solve $d = rt$ for $t$: $t = \\frac{d}{r} = \\frac{180}{60} = 3$ hours. Check: $60 \\times 3 = 180$ miles. ✓",
        "zh": "将 $d = rt$ 解出 $t$：$t = \\frac{d}{r} = \\frac{180}{60} = 3$ 小时。验证：$60 \\times 3 = 180$ 英里。✓"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A jar has some dimes and 5 more nickels than dimes, worth $\\$1.75$ total. How many dimes are there? Give an integer.",
        "zh": "一个罐子里有若干一角硬币，五分硬币比一角硬币多 5 枚，总价值 $\\$1.75$。共有多少枚一角硬币？请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "x=10",
        "10.0"
      ],
      "explanation": {
        "en": "Let $x$ be dimes; nickels are $x + 5$. Value: $0.10x + 0.05(x + 5) = 1.75$, so $0.15x + 0.25 = 1.75$, $0.15x = 1.50$, $x = 10$. Check: 10 dimes ($\\$1.00$) + 15 nickels ($\\$0.75$) = $\\$1.75$. ✓",
        "zh": "设一角硬币为 $x$ 枚，五分硬币为 $x + 5$ 枚。价值：$0.10x + 0.05(x + 5) = 1.75$，即 $0.15x + 0.25 = 1.75$，$0.15x = 1.50$，$x = 10$。验证：10 枚一角（$\\$1.00$）+ 15 枚五分（$\\$0.75$）= $\\$1.75$。✓"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Tickets cost $\\$8$ for adults and $\\$5$ for children. A total of 200 tickets sold for $\\$1360$. How many adult tickets were sold? Give an integer.",
        "zh": "门票成人 $\\$8$、儿童 $\\$5$。共售出 200 张，总收入 $\\$1360$。售出多少张成人票？请填一个整数。"
      },
      "answer": "120",
      "accept": [
        "a=120",
        "120.0"
      ],
      "explanation": {
        "en": "Let $a$ be adult tickets, so children $= 200 - a$. Then $8a + 5(200 - a) = 1360$, so $3a + 1000 = 1360$, $3a = 360$, $a = 120$. Check: 120 adults ($\\$960$) + 80 children ($\\$400$) = $\\$1360$. ✓",
        "zh": "设成人票为 $a$ 张，则儿童票为 $200 - a$ 张。$8a + 5(200 - a) = 1360$，即 $3a + 1000 = 1360$，$3a = 360$，$a = 120$。验证：120 张成人（$\\$960$）+ 80 张儿童（$\\$400$）= $\\$1360$。✓"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A rectangle's length is 3 cm more than its width. The perimeter is 26 cm. Find the width in cm. Give a number.",
        "zh": "一个矩形的长比宽多 3 厘米，周长为 26 厘米。求宽（单位：厘米）。请填一个数。"
      },
      "answer": "5",
      "accept": [
        "w=5",
        "5.0",
        "5 cm"
      ],
      "explanation": {
        "en": "Let width $= w$, length $= w + 3$. Perimeter: $2(w + (w + 3)) = 26$, so $2(2w + 3) = 26$, $2w + 3 = 13$, $2w = 10$, $w = 5$. Check: width 5, length 8, perimeter $2(13) = 26$. ✓",
        "zh": "设宽为 $w$，长为 $w + 3$。周长：$2(w + (w + 3)) = 26$，即 $2(2w + 3) = 26$，$2w + 3 = 13$，$2w = 10$，$w = 5$。验证：宽 5、长 8，周长 $2(13) = 26$。✓"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Using the literal equation $d = rt$ solved for $r$, find the rate when $d = 150$ miles and $t = 2.5$ hours. Give the value of $r$ in mph.",
        "zh": "将文字方程 $d = rt$ 解出 $r$，当 $d = 150$ 英里、$t = 2.5$ 小时时求速率。请填 $r$ 的值（英里/小时）。"
      },
      "answer": "60",
      "accept": [
        "r=60",
        "60.0",
        "60 mph"
      ],
      "explanation": {
        "en": "Solving $d = rt$ for $r$ gives $r = \\frac{d}{t} = \\frac{150}{2.5} = 60$ mph. Check: $60 \\times 2.5 = 150$ miles. ✓",
        "zh": "将 $d = rt$ 解出 $r$ 得 $r = \\frac{d}{t} = \\frac{150}{2.5} = 60$ 英里/小时。验证：$60 \\times 2.5 = 150$ 英里。✓"
      }
    }
  ],
  "unit-3-working-with-units/units-and-dimensional-analysis": [
    {
      "type": "mc",
      "question": {
        "en": "Convert $5$ feet to inches, using $1\\text{ foot} = 12\\text{ inches}$.",
        "zh": "利用 $1\\text{ 英尺} = 12\\text{ 英寸}$，把 $5$ 英尺换算成英寸。"
      },
      "choices": [
        "$60\\text{ inches}$",
        "$17\\text{ inches}$",
        "$5\\text{ inches}$",
        "$0.42\\text{ inches}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply by the factor $\\frac{12\\text{ in}}{1\\text{ ft}}$ so feet cancel: $5\\text{ ft} \\times \\frac{12\\text{ in}}{1\\text{ ft}} = 60\\text{ in}$. Adding $12$ ($5+12=17$) confuses a conversion factor with a fixed offset.",
        "zh": "乘以因子 $\\frac{12\\text{ 英寸}}{1\\text{ 英尺}}$，让英尺约去：$5\\text{ 英尺} \\times \\frac{12\\text{ 英寸}}{1\\text{ 英尺}} = 60\\text{ 英寸}$。用加 $12$（$5+12=17$）就把换算因子误当成固定偏移量了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You want to convert $3$ miles to feet using $1\\text{ mile} = 5280\\text{ feet}$. Which factor should you multiply by so that \"miles\" cancels?",
        "zh": "你要用 $1\\text{ 英里} = 5280\\text{ 英尺}$ 把 $3$ 英里换算成英尺。应乘以哪个因子才能让\"英里\"约去？"
      },
      "choices": [
        "$\\frac{1\\text{ mile}}{5280\\text{ feet}}$",
        "$\\frac{5280\\text{ feet}}{1\\text{ mile}}$",
        "$\\frac{1\\text{ foot}}{5280\\text{ miles}}$",
        "$\\frac{5280\\text{ miles}}{1\\text{ foot}}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Put the unit you are getting rid of (miles) in the denominator so it cancels the miles you start with: $3\\text{ mi} \\times \\frac{5280\\text{ ft}}{1\\text{ mi}}$. Using $\\frac{1\\text{ mi}}{5280\\text{ ft}}$ instead would leave $\\text{mi}^2/\\text{ft}$, not feet.",
        "zh": "把要消去的单位（英里）放到分母，才能与开头的英里约去：$3\\text{ 英里} \\times \\frac{5280\\text{ 英尺}}{1\\text{ 英里}}$。若用 $\\frac{1\\text{ 英里}}{5280\\text{ 英尺}}$，结果单位会变成 $\\text{英里}^2/\\text{英尺}$，而不是英尺。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $2.5$ hours to minutes.",
        "zh": "把 $2.5$ 小时换算成分钟。"
      },
      "choices": [
        "$25\\text{ min}$",
        "$62.5\\text{ min}$",
        "$150\\text{ min}$",
        "$0.0417\\text{ min}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply by $\\frac{60\\text{ min}}{1\\text{ hr}}$: $2.5\\text{ hr} \\times \\frac{60\\text{ min}}{1\\text{ hr}} = 150\\text{ min}$. Dividing by $60$ would convert minutes to hours — the wrong direction.",
        "zh": "乘以 $\\frac{60\\text{ 分钟}}{1\\text{ 小时}}$：$2.5\\text{ 小时} \\times \\frac{60\\text{ 分钟}}{1\\text{ 小时}} = 150\\text{ 分钟}$。除以 $60$ 是把分钟换成小时——方向反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A $4$-pound bag of rice costs $\\$6.00$. What is the unit price per pound?",
        "zh": "一袋 $4$ 磅的米售价 $\\$6.00$。每磅的单价是多少？"
      },
      "choices": [
        "$\\$24.00\\text{ per lb}$",
        "$\\$2.00\\text{ per lb}$",
        "$\\$0.67\\text{ per lb}$",
        "$\\$1.50\\text{ per lb}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Unit price is dollars divided by pounds: $\\frac{\\$6.00}{4\\text{ lb}} = \\$1.50\\text{ per lb}$. Dividing pounds by dollars ($4/6 = 0.67$) inverts the rate you want.",
        "zh": "单价是钱数除以磅数：$\\frac{\\$6.00}{4\\text{ 磅}} = \\$1.50\\text{ 每磅}$。用磅数除以钱数（$4/6 = 0.67$）就把想要的比率倒过来了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $90$ km/h to meters per second. (Use $1\\text{ km}=1000\\text{ m}$, $1\\text{ hr}=3600\\text{ s}$.)",
        "zh": "把 $90$ 千米/小时换算成米每秒。（用 $1\\text{ 千米}=1000\\text{ 米}$，$1\\text{ 小时}=3600\\text{ 秒}$。）"
      },
      "choices": [
        "$25\\text{ m/s}$",
        "$324\\text{ m/s}$",
        "$1.5\\text{ m/s}$",
        "$90\\text{ m/s}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Chain the factors so km and hours cancel: $\\frac{90\\text{ km}}{1\\text{ hr}} \\times \\frac{1000\\text{ m}}{1\\text{ km}} \\times \\frac{1\\text{ hr}}{3600\\text{ s}} = \\frac{90000}{3600}\\text{ m/s} = 25\\text{ m/s}$. A shortcut is dividing by $3.6$.",
        "zh": "把因子串起来，让千米和小时都约去：$\\frac{90\\text{ 千米}}{1\\text{ 小时}} \\times \\frac{1000\\text{ 米}}{1\\text{ 千米}} \\times \\frac{1\\text{ 小时}}{3600\\text{ 秒}} = \\frac{90000}{3600}\\text{ 米/秒} = 25\\text{ 米/秒}$。捷径是除以 $3.6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car travels $150$ miles in $3$ hours. What is its average speed?",
        "zh": "一辆车 $3$ 小时行驶 $150$ 英里。它的平均速度是多少？"
      },
      "choices": [
        "$450\\text{ mph}$",
        "$50\\text{ mph}$",
        "$0.02\\text{ mph}$",
        "$153\\text{ mph}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Speed is distance over time: $\\frac{150\\text{ mi}}{3\\text{ hr}} = 50\\text{ mph}$. Multiplying distance by time ($150 \\times 3$) gives the wrong units (mile-hours), not miles per hour.",
        "zh": "速度是路程除以时间：$\\frac{150\\text{ 英里}}{3\\text{ 小时}} = 50\\text{ 英里/小时}$。把路程乘以时间（$150 \\times 3$）得到的单位（英里·小时）是错的，而不是英里每小时。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To convert $350$ centimeters to meters, which conversion factor makes \"cm\" cancel? (Use $1\\text{ m}=100\\text{ cm}$.)",
        "zh": "把 $350$ 厘米换算成米时，哪个换算因子能让\"厘米\"约去？（用 $1\\text{ 米}=100\\text{ 厘米}$。）"
      },
      "choices": [
        "$\\frac{100\\text{ cm}}{1\\text{ m}}$",
        "$\\frac{100\\text{ m}}{1\\text{ cm}}$",
        "$\\frac{1\\text{ m}}{100\\text{ cm}}$",
        "$\\frac{1\\text{ cm}}{100\\text{ m}}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since you start with cm, the factor needs cm in the denominator: $350\\text{ cm} \\times \\frac{1\\text{ m}}{100\\text{ cm}} = 3.5\\text{ m}$. Using $\\frac{100\\text{ cm}}{1\\text{ m}}$ would leave $\\text{cm}^2/\\text{m}$.",
        "zh": "因为从厘米出发，因子的分母必须是厘米：$350\\text{ 厘米} \\times \\frac{1\\text{ 米}}{100\\text{ 厘米}} = 3.5\\text{ 米}$。用 $\\frac{100\\text{ 厘米}}{1\\text{ 米}}$ 会剩下 $\\text{厘米}^2/\\text{米}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $500$ grams to kilograms. (Use $1\\text{ kg}=1000\\text{ g}$.)",
        "zh": "把 $500$ 克换算成千克。（用 $1\\text{ 千克}=1000\\text{ 克}$。）"
      },
      "choices": [
        "$500000\\text{ kg}$",
        "$5\\text{ kg}$",
        "$50\\text{ kg}$",
        "$0.5\\text{ kg}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply by $\\frac{1\\text{ kg}}{1000\\text{ g}}$: $500\\text{ g} \\times \\frac{1\\text{ kg}}{1000\\text{ g}} = 0.5\\text{ kg}$. Grams are smaller than kilograms, so the number should get smaller, not larger.",
        "zh": "乘以 $\\frac{1\\text{ 千克}}{1000\\text{ 克}}$：$500\\text{ 克} \\times \\frac{1\\text{ 千克}}{1000\\text{ 克}} = 0.5\\text{ 千克}$。克比千克小，所以数值应变小而不是变大。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $5$ m/s to kilometers per hour. (Use $1\\text{ km}=1000\\text{ m}$, $1\\text{ hr}=3600\\text{ s}$.)",
        "zh": "把 $5$ 米/秒换算成千米每小时。（用 $1\\text{ 千米}=1000\\text{ 米}$，$1\\text{ 小时}=3600\\text{ 秒}$。）"
      },
      "choices": [
        "$18\\text{ km/h}$",
        "$1.39\\text{ km/h}$",
        "$5\\text{ km/h}$",
        "$5000\\text{ km/h}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{5\\text{ m}}{1\\text{ s}} \\times \\frac{1\\text{ km}}{1000\\text{ m}} \\times \\frac{3600\\text{ s}}{1\\text{ hr}} = \\frac{5 \\times 3600}{1000}\\text{ km/h} = 18\\text{ km/h}$. A shortcut is multiplying m/s by $3.6$.",
        "zh": "$\\frac{5\\text{ 米}}{1\\text{ 秒}} \\times \\frac{1\\text{ 千米}}{1000\\text{ 米}} \\times \\frac{3600\\text{ 秒}}{1\\text{ 小时}} = \\frac{5 \\times 3600}{1000}\\text{ 千米/小时} = 18\\text{ 千米/小时}$。捷径是把米/秒乘以 $3.6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which unit is most appropriate for reporting the driving distance between two cities?",
        "zh": "报告两座城市之间的驾车距离，用哪个单位最合适？"
      },
      "choices": [
        "centimeters",
        "kilometers",
        "millimeters",
        "square meters"
      ],
      "answer": 1,
      "explanation": {
        "en": "City-to-city distances are large, so kilometers give a manageable number (e.g. $300\\text{ km}$). Centimeters or millimeters would produce huge, awkward figures, and square meters measure area, not distance.",
        "zh": "城市之间的距离很大，用千米能得到便于处理的数（如 $300\\text{ 千米}$）。用厘米或毫米会得到巨大又别扭的数字，而平方米度量的是面积而非距离。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is the better buy: $12$ oz of juice for $\\$3.00$, or $20$ oz for $\\$4.00$?",
        "zh": "哪个更划算：$12$ 盎司果汁售价 $\\$3.00$，还是 $20$ 盎司售价 $\\$4.00$？"
      },
      "choices": [
        "The $12$ oz bottle, at $\\$0.25$ per oz",
        "They cost the same per ounce",
        "The $20$ oz bottle, at $\\$0.20$ per oz",
        "The $20$ oz bottle, at $\\$0.25$ per oz"
      ],
      "answer": 2,
      "explanation": {
        "en": "Compare unit prices: $\\frac{\\$3.00}{12\\text{ oz}} = \\$0.25/\\text{oz}$ versus $\\frac{\\$4.00}{20\\text{ oz}} = \\$0.20/\\text{oz}$. The $20$ oz bottle is cheaper per ounce, so it is the better buy.",
        "zh": "比较单价：$\\frac{\\$3.00}{12\\text{ 盎司}} = \\$0.25/\\text{盎司}$，对比 $\\frac{\\$4.00}{20\\text{ 盎司}} = \\$0.20/\\text{盎司}$。$20$ 盎司那瓶每盎司更便宜，所以更划算。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $72$ inches to feet. (Use $1\\text{ foot}=12\\text{ inches}$.)",
        "zh": "把 $72$ 英寸换算成英尺。（用 $1\\text{ 英尺}=12\\text{ 英寸}$。）"
      },
      "choices": [
        "$864\\text{ ft}$",
        "$84\\text{ ft}$",
        "$60\\text{ ft}$",
        "$6\\text{ ft}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply by $\\frac{1\\text{ ft}}{12\\text{ in}}$ so inches cancel: $72\\text{ in} \\times \\frac{1\\text{ ft}}{12\\text{ in}} = 6\\text{ ft}$. Multiplying by $12$ instead of dividing goes the wrong direction.",
        "zh": "乘以 $\\frac{1\\text{ 英尺}}{12\\text{ 英寸}}$ 让英寸约去：$72\\text{ 英寸} \\times \\frac{1\\text{ 英尺}}{12\\text{ 英寸}} = 6\\text{ 英尺}$。用乘以 $12$ 而非除以 $12$ 方向就反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $3$ miles to feet, using $1\\text{ mile}=5280\\text{ feet}$. Give the number of feet as an integer.",
        "zh": "用 $1\\text{ 英里}=5280\\text{ 英尺}$，把 $3$ 英里换算成英尺。请以整数形式填写英尺数。"
      },
      "answer": "15840",
      "accept": [
        "15840 ft",
        "15840 feet",
        "15,840"
      ],
      "explanation": {
        "en": "$3\\text{ mi} \\times \\frac{5280\\text{ ft}}{1\\text{ mi}} = 15840\\text{ ft}$. The miles cancel, leaving feet.",
        "zh": "$3\\text{ 英里} \\times \\frac{5280\\text{ 英尺}}{1\\text{ 英里}} = 15840\\text{ 英尺}$。英里约去，只剩英尺。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $4.5$ kilograms to grams, using $1\\text{ kg}=1000\\text{ g}$. Give the number of grams as an integer.",
        "zh": "用 $1\\text{ 千克}=1000\\text{ 克}$，把 $4.5$ 千克换算成克。请以整数形式填写克数。"
      },
      "answer": "4500",
      "accept": [
        "4500 g",
        "4500 grams",
        "4,500"
      ],
      "explanation": {
        "en": "$4.5\\text{ kg} \\times \\frac{1000\\text{ g}}{1\\text{ kg}} = 4500\\text{ g}$. Kilograms are larger than grams, so the number gets bigger.",
        "zh": "$4.5\\text{ 千克} \\times \\frac{1000\\text{ 克}}{1\\text{ 千克}} = 4500\\text{ 克}$。千克比克大，所以数值变大。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $108$ km/h to meters per second. (Use $1\\text{ km}=1000\\text{ m}$, $1\\text{ hr}=3600\\text{ s}$.) Give an integer number of m/s.",
        "zh": "把 $108$ 千米/小时换算成米每秒。（用 $1\\text{ 千米}=1000\\text{ 米}$，$1\\text{ 小时}=3600\\text{ 秒}$。）请填一个整数（米/秒）。"
      },
      "answer": "30",
      "accept": [
        "30 m/s",
        "30.0"
      ],
      "explanation": {
        "en": "$\\frac{108\\text{ km}}{1\\text{ hr}} \\times \\frac{1000\\text{ m}}{1\\text{ km}} \\times \\frac{1\\text{ hr}}{3600\\text{ s}} = \\frac{108000}{3600}\\text{ m/s} = 30\\text{ m/s}$. Equivalently, divide $108$ by $3.6$.",
        "zh": "$\\frac{108\\text{ 千米}}{1\\text{ 小时}} \\times \\frac{1000\\text{ 米}}{1\\text{ 千米}} \\times \\frac{1\\text{ 小时}}{3600\\text{ 秒}} = \\frac{108000}{3600}\\text{ 米/秒} = 30\\text{ 米/秒}$。等价地，把 $108$ 除以 $3.6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A $6$-gallon jug of water costs $\\$12.60$. What is the price per gallon, in dollars? Give your answer in dollars rounded to the nearest cent (e.g. $2.05$).",
        "zh": "一桶 $6$ 加仑的水售价 $\\$12.60$。每加仑价格是多少美元？请以美元作答，四舍五入到分（如 $2.05$）。"
      },
      "answer": "2.10",
      "accept": [
        "2.1",
        "$2.10",
        "$2.1",
        "2.10 per gallon"
      ],
      "explanation": {
        "en": "$\\frac{\\$12.60}{6\\text{ gal}} = \\$2.10\\text{ per gallon}$. Divide dollars by gallons so the gallons cancel and dollars-per-gallon remain.",
        "zh": "$\\frac{\\$12.60}{6\\text{ 加仑}} = \\$2.10\\text{ 每加仑}$。用钱数除以加仑数，让加仑约去，剩下美元每加仑。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $15$ m/s to kilometers per hour. (Use $1\\text{ km}=1000\\text{ m}$, $1\\text{ hr}=3600\\text{ s}$.) Give an integer number of km/h.",
        "zh": "把 $15$ 米/秒换算成千米每小时。（用 $1\\text{ 千米}=1000\\text{ 米}$，$1\\text{ 小时}=3600\\text{ 秒}$。）请填一个整数（千米/小时）。"
      },
      "answer": "54",
      "accept": [
        "54 km/h",
        "54.0"
      ],
      "explanation": {
        "en": "$\\frac{15\\text{ m}}{1\\text{ s}} \\times \\frac{1\\text{ km}}{1000\\text{ m}} \\times \\frac{3600\\text{ s}}{1\\text{ hr}} = \\frac{15 \\times 3600}{1000}\\text{ km/h} = 54\\text{ km/h}$. Equivalently, multiply m/s by $3.6$.",
        "zh": "$\\frac{15\\text{ 米}}{1\\text{ 秒}} \\times \\frac{1\\text{ 千米}}{1000\\text{ 米}} \\times \\frac{3600\\text{ 秒}}{1\\text{ 小时}} = \\frac{15 \\times 3600}{1000}\\text{ 千米/小时} = 54\\text{ 千米/小时}$。等价地，把米/秒乘以 $3.6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $100$ km/h to meters per second, rounded to the nearest tenth. (Use $1\\text{ km}=1000\\text{ m}$, $1\\text{ hr}=3600\\text{ s}$.)",
        "zh": "把 $100$ 千米/小时换算成米每秒，四舍五入到十分位。（用 $1\\text{ 千米}=1000\\text{ 米}$，$1\\text{ 小时}=3600\\text{ 秒}$。）"
      },
      "answer": "27.8",
      "accept": [
        "27.8 m/s"
      ],
      "explanation": {
        "en": "$\\frac{100000}{3600}\\text{ m/s} = 27.7\\overline{7}\\text{ m/s} \\approx 27.8\\text{ m/s}$ to the nearest tenth. Because the answer is not exact, the rounding instruction makes it unique.",
        "zh": "$\\frac{100000}{3600}\\text{ 米/秒} = 27.7\\overline{7}\\text{ 米/秒} \\approx 27.8\\text{ 米/秒}$（四舍五入到十分位）。由于结果不是整数，取整要求使答案唯一。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Convert $5$ yards to inches, using $1\\text{ yard}=3\\text{ feet}$ and $1\\text{ foot}=12\\text{ inches}$. Give the number of inches as an integer.",
        "zh": "用 $1\\text{ 码}=3\\text{ 英尺}$ 和 $1\\text{ 英尺}=12\\text{ 英寸}$，把 $5$ 码换算成英寸。请以整数形式填写英寸数。"
      },
      "answer": "180",
      "accept": [
        "180 in",
        "180 inches"
      ],
      "explanation": {
        "en": "Chain two factors: $5\\text{ yd} \\times \\frac{3\\text{ ft}}{1\\text{ yd}} \\times \\frac{12\\text{ in}}{1\\text{ ft}} = 5 \\times 3 \\times 12 = 180\\text{ in}$. Yards and feet cancel in turn, leaving inches.",
        "zh": "串联两个因子：$5\\text{ 码} \\times \\frac{3\\text{ 英尺}}{1\\text{ 码}} \\times \\frac{12\\text{ 英寸}}{1\\text{ 英尺}} = 5 \\times 3 \\times 12 = 180\\text{ 英寸}$。码与英尺依次约去，剩下英寸。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car travels $240$ miles using $8$ gallons of gas. What is its fuel economy in miles per gallon? Give an integer.",
        "zh": "一辆车用 $8$ 加仑汽油行驶了 $240$ 英里。它的燃油经济性（英里每加仑）是多少？请填一个整数。"
      },
      "answer": "30",
      "accept": [
        "30 mpg",
        "30.0"
      ],
      "explanation": {
        "en": "Fuel economy is distance over fuel: $\\frac{240\\text{ mi}}{8\\text{ gal}} = 30\\text{ mpg}$. The gallons cancel, leaving miles per gallon.",
        "zh": "燃油经济性是路程除以油量：$\\frac{240\\text{ 英里}}{8\\text{ 加仑}} = 30\\text{ 英里/加仑}$。加仑约去，剩下英里每加仑。"
      }
    }
  ],
  "unit-4-linear-equations-graphs/slope-and-rate-of-change": [
    {
      "type": "mc",
      "question": {
        "en": "Find the slope of the line through $(2, 3)$ and $(5, 9)$.",
        "zh": "求经过 $(2, 3)$ 和 $(5, 9)$ 的直线的斜率。"
      },
      "choices": [
        "$2$",
        "$3$",
        "$\\frac{1}{2}$",
        "$-2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Slope $= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{5 - 2} = \\frac{6}{3} = 2$. Keep the $y$-differences on top and the $x$-differences on the bottom, in the same order.",
        "zh": "斜率 $= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{5 - 2} = \\frac{6}{3} = 2$。$y$ 的差放在分子，$x$ 的差放在分母，且顺序一致。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which expression correctly gives the slope of the line through $(x_1, y_1)$ and $(x_2, y_2)$?",
        "zh": "下列哪个表达式正确地给出了经过 $(x_1, y_1)$ 和 $(x_2, y_2)$ 的直线的斜率？"
      },
      "choices": [
        "$\\frac{x_2 - x_1}{y_2 - y_1}$",
        "$\\frac{y_2 - y_1}{x_2 - x_1}$",
        "$\\frac{y_2 - y_1}{x_1 - x_2}$",
        "$\\frac{y_1 - y_2}{x_2 - x_1}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Slope is $\\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$. The two subtractions must be in the SAME order. Choice 1 flips rise and run; choices 2 and 3 subtract in opposite orders top and bottom, which negates the result.",
        "zh": "斜率是 $\\frac{\\text{上升}}{\\text{水平位移}} = \\frac{y_2 - y_1}{x_2 - x_1}$。两个减法必须按相同顺序。选项 1 把分子分母颠倒了；选项 2、3 的分子和分母相减顺序相反，会使结果变号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the slope of the line through $(1, 5)$ and $(4, -1)$.",
        "zh": "求经过 $(1, 5)$ 和 $(4, -1)$ 的直线的斜率。"
      },
      "choices": [
        "$2$",
        "$-\\frac{1}{2}$",
        "$-2$",
        "$\\frac{1}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Slope $= \\frac{-1 - 5}{4 - 1} = \\frac{-6}{3} = -2$. The line falls as $x$ increases, so the slope is negative.",
        "zh": "斜率 $= \\frac{-1 - 5}{4 - 1} = \\frac{-6}{3} = -2$。随着 $x$ 增大直线下降，故斜率为负。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the line through $(2, 4)$ and $(7, 4)$?",
        "zh": "经过 $(2, 4)$ 和 $(7, 4)$ 的直线的斜率是多少？"
      },
      "choices": [
        "undefined",
        "$5$",
        "$1$",
        "$0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Slope $= \\frac{4 - 4}{7 - 2} = \\frac{0}{5} = 0$. Both points have the same $y$-value, so this is a horizontal line: zero rise means slope $0$ (not undefined).",
        "zh": "斜率 $= \\frac{4 - 4}{7 - 2} = \\frac{0}{5} = 0$。两点的 $y$ 值相同，所以这是一条水平线：上升为零意味着斜率为 $0$（不是不存在）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the line through $(3, 1)$ and $(3, 8)$?",
        "zh": "经过 $(3, 1)$ 和 $(3, 8)$ 的直线的斜率是多少？"
      },
      "choices": [
        "undefined",
        "$7$",
        "$\\frac{7}{0} = 0$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Slope $= \\frac{8 - 1}{3 - 3} = \\frac{7}{0}$, which is undefined. Both points share the same $x$-value, so this is a vertical line. Dividing by zero does not give $0$ — the slope simply does not exist.",
        "zh": "斜率 $= \\frac{8 - 1}{3 - 3} = \\frac{7}{0}$，是无定义的。两点的 $x$ 值相同，所以这是一条竖直线。除以零不等于 $0$——斜率根本不存在。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "On a graph, a line rises $3$ units for every $4$ units it moves to the right. What is its slope?",
        "zh": "在图上，一条直线每向右移动 $4$ 个单位就上升 $3$ 个单位。它的斜率是多少？"
      },
      "choices": [
        "$\\frac{4}{3}$",
        "$\\frac{3}{4}$",
        "$-\\frac{3}{4}$",
        "$7$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{3}{4}$. Rise goes on top, run on the bottom. Since the line goes up to the right, the slope is positive.",
        "zh": "斜率 $= \\frac{\\text{上升}}{\\text{水平位移}} = \\frac{3}{4}$。上升在分子，水平位移在分母。由于直线向右上升，斜率为正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A pool is being filled with water. The volume $V$ (in liters) after $t$ minutes forms a line with slope $8$. What does this slope mean?",
        "zh": "一个水池正在注水。$t$ 分钟后的水量 $V$（升）构成一条斜率为 $8$ 的直线。这个斜率表示什么？"
      },
      "choices": [
        "The pool starts with $8$ liters of water",
        "It takes $8$ minutes to fill the pool",
        "The volume increases by $8$ liters each minute",
        "The pool holds $8$ liters in total"
      ],
      "answer": 2,
      "explanation": {
        "en": "Slope is the rate of change of $V$ with respect to $t$: liters per minute. A slope of $8$ means the volume rises by $8$ liters for each additional minute. The starting amount is the $y$-intercept, not the slope.",
        "zh": "斜率是 $V$ 相对于 $t$ 的变化率：每分钟的升数。斜率为 $8$ 表示每多一分钟水量增加 $8$ 升。起始水量是 $y$ 截距，不是斜率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line goes downward from left to right. Its slope is:",
        "zh": "一条直线从左到右向下倾斜。它的斜率是："
      },
      "choices": [
        "zero",
        "positive",
        "undefined",
        "negative"
      ],
      "answer": 3,
      "explanation": {
        "en": "As $x$ increases, $y$ decreases, so the rise is negative while the run is positive, giving a negative slope. Positive slopes rise to the right; horizontal lines have slope $0$; vertical lines are undefined.",
        "zh": "随着 $x$ 增大，$y$ 减小，所以上升为负而水平位移为正，得到负斜率。正斜率向右上升；水平线斜率为 $0$；竖直线斜率不存在。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A table shows: $x = 0, 1, 2, 3$ and $y = 7, 4, 1, -2$. What is the slope of the line through these points?",
        "zh": "一个表格显示：$x = 0, 1, 2, 3$ 且 $y = 7, 4, 1, -2$。经过这些点的直线的斜率是多少？"
      },
      "choices": [
        "$-3$",
        "$3$",
        "$-\\frac{1}{3}$",
        "$7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each time $x$ increases by $1$, $y$ drops by $3$ ($7 \\to 4 \\to 1 \\to -2$). Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{-3}{1} = -3$. The constant drop confirms a straight line.",
        "zh": "每当 $x$ 增加 $1$，$y$ 就减少 $3$（$7 \\to 4 \\to 1 \\to -2$）。斜率 $= \\frac{\\Delta y}{\\Delta x} = \\frac{-3}{1} = -3$。恒定的减少量确认这是一条直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car travels at a constant rate, covering $150$ miles in $3$ hours. What is the rate of change of distance with respect to time?",
        "zh": "一辆车以恒定速率行驶，$3$ 小时行驶 $150$ 英里。距离相对于时间的变化率是多少？"
      },
      "choices": [
        "$150$ mph",
        "$50$ mph",
        "$3$ mph",
        "$450$ mph"
      ],
      "answer": 1,
      "explanation": {
        "en": "Rate of change (slope) $= \\frac{\\text{change in distance}}{\\text{change in time}} = \\frac{150}{3} = 50$ miles per hour.",
        "zh": "变化率（斜率）$= \\frac{\\text{距离变化}}{\\text{时间变化}} = \\frac{150}{3} = 50$ 英里每小时。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the slope of the line through $(7, 1)$ and $(2, 3)$.",
        "zh": "求经过 $(7, 1)$ 和 $(2, 3)$ 的直线的斜率。"
      },
      "choices": [
        "$\\frac{2}{5}$",
        "$\\frac{5}{2}$",
        "$-\\frac{2}{5}$",
        "$-\\frac{5}{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Slope $= \\frac{3 - 1}{2 - 7} = \\frac{2}{-5} = -\\frac{2}{5}$. Subtract the coordinates in the same order top and bottom. If you use the other point first you get $\\frac{1 - 3}{7 - 2} = \\frac{-2}{5}$ — the same value.",
        "zh": "斜率 $= \\frac{3 - 1}{2 - 7} = \\frac{2}{-5} = -\\frac{2}{5}$。分子分母按相同顺序相减。若先用另一个点则得 $\\frac{1 - 3}{7 - 2} = \\frac{-2}{5}$——结果相同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The vertical line $x = -2$ has what slope?",
        "zh": "竖直线 $x = -2$ 的斜率是多少？"
      },
      "choices": [
        "$0$",
        "$-2$",
        "$2$",
        "undefined"
      ],
      "answer": 3,
      "explanation": {
        "en": "Every point on $x = -2$ has the same $x$-value, so the run is $0$ and slope $= \\frac{\\text{rise}}{0}$ is undefined. A horizontal line like $y = -2$ would have slope $0$; don't confuse the two.",
        "zh": "$x = -2$ 上每个点的 $x$ 值都相同，所以水平位移为 $0$，斜率 $= \\frac{\\text{上升}}{0}$ 无定义。像 $y = -2$ 这样的水平线斜率才为 $0$；不要混淆两者。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(0, 1)$ and $(4, 9)$. Give an integer.",
        "zh": "求经过 $(0, 1)$ 和 $(4, 9)$ 的直线的斜率。请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Slope $= \\frac{9 - 1}{4 - 0} = \\frac{8}{4} = 2$.",
        "zh": "斜率 $= \\frac{9 - 1}{4 - 0} = \\frac{8}{4} = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(2, 1)$ and $(6, 4)$. Give a reduced fraction.",
        "zh": "求经过 $(2, 1)$ 和 $(6, 4)$ 的直线的斜率。请填一个最简分数。"
      },
      "answer": "3/4",
      "accept": [
        "0.75",
        ".75"
      ],
      "explanation": {
        "en": "Slope $= \\frac{4 - 1}{6 - 2} = \\frac{3}{4}$. This is already in lowest terms.",
        "zh": "斜率 $= \\frac{4 - 1}{6 - 2} = \\frac{3}{4}$。这已是最简形式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A table shows: $x = 1, 3, 5, 7$ and $y = 2, 8, 14, 20$. Find the slope. Give an integer.",
        "zh": "一个表格显示：$x = 1, 3, 5, 7$ 且 $y = 2, 8, 14, 20$。求斜率。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Between $(1, 2)$ and $(3, 8)$: slope $= \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$. Every step of $2$ in $x$ raises $y$ by $6$, confirming a constant slope of $3$.",
        "zh": "在 $(1, 2)$ 和 $(3, 8)$ 之间：斜率 $= \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$。$x$ 每增加 $2$，$y$ 就增加 $6$，确认斜率恒为 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A runner's distance $d$ (meters) fits a line: at $t = 2$ s, $d = 10$; at $t = 6$ s, $d = 30$. Find the rate of change in meters per second. Give an integer.",
        "zh": "一名跑步者的距离 $d$（米）符合一条直线：当 $t = 2$ 秒时 $d = 10$；当 $t = 6$ 秒时 $d = 30$。求以米每秒为单位的变化率。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Rate of change $= \\frac{30 - 10}{6 - 2} = \\frac{20}{4} = 5$ meters per second.",
        "zh": "变化率 $= \\frac{30 - 10}{6 - 2} = \\frac{20}{4} = 5$ 米每秒。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(-2, 5)$ and $(4, 1)$. Give a reduced fraction.",
        "zh": "求经过 $(-2, 5)$ 和 $(4, 1)$ 的直线的斜率。请填一个最简分数。"
      },
      "answer": "-2/3",
      "accept": [
        "-4/6"
      ],
      "explanation": {
        "en": "Slope $= \\frac{1 - 5}{4 - (-2)} = \\frac{-4}{6} = -\\frac{2}{3}$. Watch the sign: $4 - (-2) = 6$, and the negative rise makes the slope negative.",
        "zh": "斜率 $= \\frac{1 - 5}{4 - (-2)} = \\frac{-4}{6} = -\\frac{2}{3}$。注意符号：$4 - (-2) = 6$，负的上升使斜率为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "On a graph, a line drops $5$ units as it moves $2$ units to the right. Find the slope. Give a reduced fraction.",
        "zh": "在图上，一条直线每向右移动 $2$ 个单位就下降 $5$ 个单位。求斜率。请填一个最简分数。"
      },
      "answer": "-5/2",
      "accept": [
        "-2.5"
      ],
      "explanation": {
        "en": "Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{-5}{2} = -\\frac{5}{2}$. Dropping means a negative rise, so the slope is negative.",
        "zh": "斜率 $= \\frac{\\text{上升}}{\\text{水平位移}} = \\frac{-5}{2} = -\\frac{5}{2}$。下降意味着上升为负，所以斜率为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A horizontal line passes through $(3, 7)$ and $(10, 7)$. What is its slope? Give an integer.",
        "zh": "一条水平线经过 $(3, 7)$ 和 $(10, 7)$。它的斜率是多少？请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "Slope $= \\frac{7 - 7}{10 - 3} = \\frac{0}{7} = 0$. Equal $y$-values give zero rise, so a horizontal line has slope $0$ (it is defined, unlike a vertical line).",
        "zh": "斜率 $= \\frac{7 - 7}{10 - 3} = \\frac{0}{7} = 0$。相等的 $y$ 值使上升为零，所以水平线斜率为 $0$（与竖直线不同，它是有定义的）。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A phone plan costs $C = 0.10n + 20$ dollars for $n$ text messages. What is the rate of change of cost per text, in dollars? Give a decimal.",
        "zh": "一个电话套餐对 $n$ 条短信收费 $C = 0.10n + 20$ 美元。每条短信的费用变化率是多少（以美元计）？请填一个小数。"
      },
      "answer": "0.1",
      "accept": [
        "0.10",
        ".1",
        "1/10"
      ],
      "explanation": {
        "en": "In $C = 0.10n + 20$, the slope is the coefficient of $n$, which is $0.10$ dollars per text. The $20$ is the fixed starting cost (the $y$-intercept), not the rate.",
        "zh": "在 $C = 0.10n + 20$ 中，斜率是 $n$ 的系数，即每条短信 $0.10$ 美元。$20$ 是固定的起始费用（$y$ 截距），不是变化率。"
      }
    }
  ],
  "unit-4-linear-equations-graphs/graphing-linear-equations-intercepts": [
    {
      "type": "mc",
      "question": {
        "en": "Find the x-intercept of the line $2x + 3y = 12$.",
        "zh": "求直线 $2x + 3y = 12$ 的 x 轴截距。"
      },
      "choices": [
        "$(6, 0)$",
        "$(0, 6)$",
        "$(0, 4)$",
        "$(4, 0)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The x-intercept is where the line crosses the x-axis, so set $y = 0$: $2x = 12$, giving $x = 6$ and the point $(6, 0)$. Choosing $(0, 4)$ confuses the x-intercept with the y-intercept (which sets $x = 0$).",
        "zh": "x 轴截距是直线与 x 轴的交点，故令 $y = 0$：$2x = 12$，得 $x = 6$，即点 $(6, 0)$。选 $(0, 4)$ 是把 x 轴截距和 y 轴截距（令 $x = 0$）弄混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the y-intercept of the line $2x + 3y = 12$.",
        "zh": "求直线 $2x + 3y = 12$ 的 y 轴截距。"
      },
      "choices": [
        "$(4, 0)$",
        "$(0, 4)$",
        "$(0, 6)$",
        "$(6, 0)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The y-intercept sets $x = 0$: $3y = 12$, so $y = 4$ and the point is $(0, 4)$. Answering $(6, 0)$ is the x-intercept — remember the y-intercept always has an x-coordinate of $0$.",
        "zh": "求 y 轴截距令 $x = 0$：$3y = 12$，故 $y = 4$，点为 $(0, 4)$。答 $(6, 0)$ 是 x 轴截距——记住 y 轴截距的横坐标一定是 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the horizontal line $y = 4$?",
        "zh": "水平线 $y = 4$ 的斜率是多少？"
      },
      "choices": [
        "Undefined",
        "$4$",
        "$0$",
        "$1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A horizontal line has no rise for any run, so its slope is $0$. An undefined slope belongs to a vertical line ($x = k$), not a horizontal one.",
        "zh": "水平线在任意水平移动下都没有垂直变化，故斜率为 $0$。斜率不存在的是垂直线（$x = k$），而非水平线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does the graph of $x = -2$ look like?",
        "zh": "$x = -2$ 的图像是什么样的？"
      },
      "choices": [
        "A horizontal line through $y = -2$",
        "A line through the origin with slope $-2$",
        "A line with slope $1$ through the origin",
        "A vertical line through $x = -2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x = -2$ means every point has x-coordinate $-2$ regardless of $y$, forming a vertical line. Equations of the form $x = k$ are vertical; $y = k$ are horizontal.",
        "zh": "$x = -2$ 表示不论 $y$ 为何，每个点的横坐标都是 $-2$，构成一条垂直线。形如 $x = k$ 的方程是垂直线；$y = k$ 的是水平线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the vertical line $x = 7$?",
        "zh": "垂直线 $x = 7$ 的斜率是多少？"
      },
      "choices": [
        "Undefined",
        "$7$",
        "$0$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A vertical line has a run of $0$, so the slope $\\frac{\\text{rise}}{\\text{run}}$ divides by zero and is undefined. A slope of $0$ describes a horizontal line instead.",
        "zh": "垂直线的水平变化为 $0$，斜率 $\\frac{\\text{垂直变化}}{\\text{水平变化}}$ 是除以零，故斜率不存在。斜率为 $0$ 描述的是水平线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the x-intercept of $y = 3x - 9$.",
        "zh": "求 $y = 3x - 9$ 的 x 轴截距。"
      },
      "choices": [
        "$(0, -9)$",
        "$(3, 0)$",
        "$(-3, 0)$",
        "$(0, 3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $y = 0$: $0 = 3x - 9$, so $3x = 9$ and $x = 3$, giving $(3, 0)$. Choosing $(0, -9)$ reads off the y-intercept instead of solving for the x-intercept.",
        "zh": "令 $y = 0$：$0 = 3x - 9$，故 $3x = 9$，$x = 3$，得 $(3, 0)$。选 $(0, -9)$ 是读成了 y 轴截距，而非求 x 轴截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line's x-intercept is the point $(-5, 0)$. The x-intercept value is:",
        "zh": "一条直线的 x 轴截距是点 $(-5, 0)$。该 x 轴截距的值是："
      },
      "choices": [
        "$0$",
        "$5$",
        "$-5$",
        "$-10$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The x-intercept value is the x-coordinate where $y = 0$, which is $-5$. The y-coordinate of an x-intercept is always $0$, so $0$ is not the intercept value.",
        "zh": "x 轴截距的值是 $y = 0$ 时的横坐标，即 $-5$。x 轴截距的纵坐标恒为 $0$，故 $0$ 不是截距值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line crosses the y-axis at $2$ and the x-axis at $4$. What is its slope?",
        "zh": "一条直线在 y 轴上交于 $2$，在 x 轴上交于 $4$。它的斜率是多少？"
      },
      "choices": [
        "$2$",
        "$\\frac{1}{2}$",
        "$-2$",
        "$-\\frac{1}{2}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The intercepts are the points $(0, 2)$ and $(4, 0)$. Slope $= \\frac{0 - 2}{4 - 0} = \\frac{-2}{4} = -\\frac{1}{2}$. Keep the order of the points consistent in numerator and denominator to avoid a sign error.",
        "zh": "两个截距是点 $(0, 2)$ 和 $(4, 0)$。斜率 $= \\frac{0 - 2}{4 - 0} = \\frac{-2}{4} = -\\frac{1}{2}$。分子与分母中两点的顺序要一致，以免出现符号错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation represents a horizontal line passing through $(3, -6)$?",
        "zh": "哪个方程表示过点 $(3, -6)$ 的水平线？"
      },
      "choices": [
        "$y = -6$",
        "$x = 3$",
        "$x = -6$",
        "$y = 3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A horizontal line has the form $y = k$, and it must pass through $y = -6$, so $y = -6$. The equation $x = 3$ would be the vertical line through that point.",
        "zh": "水平线形如 $y = k$，且须经过 $y = -6$，故为 $y = -6$。而 $x = 3$ 是过该点的垂直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many x-intercepts does the horizontal line $y = 5$ have?",
        "zh": "水平线 $y = 5$ 有几个 x 轴截距？"
      },
      "choices": [
        "$1$",
        "$0$",
        "$2$",
        "Infinitely many"
      ],
      "answer": 1,
      "explanation": {
        "en": "The line $y = 5$ stays at height $5$ everywhere and never touches the x-axis (where $y = 0$), so it has no x-intercept. It does cross the y-axis once, at $(0, 5)$.",
        "zh": "直线 $y = 5$ 处处高度为 $5$，永远碰不到 x 轴（$y = 0$ 处），故没有 x 轴截距。它与 y 轴相交一次，交于 $(0, 5)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To find the y-intercept of a line, which variable do you set equal to $0$?",
        "zh": "求一条直线的 y 轴截距时，应把哪个变量设为 $0$？"
      },
      "choices": [
        "$y$",
        "The slope",
        "$x$",
        "Both $x$ and $y$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The y-intercept lies on the y-axis, where $x = 0$, so set $x = 0$ and solve for $y$. Setting $y = 0$ would instead give the x-intercept.",
        "zh": "y 轴截距位于 y 轴上，此处 $x = 0$，故令 $x = 0$ 再解出 $y$。若令 $y = 0$ 得到的反而是 x 轴截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Starting at the y-intercept of $y = \\frac{2}{3}x - 2$ and stepping once using the slope, which point do you reach?",
        "zh": "从 $y = \\frac{2}{3}x - 2$ 的 y 轴截距出发，按斜率走一步，会到达哪个点？"
      },
      "choices": [
        "$(2, 3)$",
        "$(3, -2)$",
        "$(-3, -4)$",
        "$(3, 0)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The y-intercept is $(0, -2)$. Slope $\\frac{2}{3}$ means rise $2$, run $3$: from $(0, -2)$ go right $3$ and up $2$ to $(3, 0)$. (This is also the x-intercept.)",
        "zh": "y 轴截距是 $(0, -2)$。斜率 $\\frac{2}{3}$ 表示上升 $2$、右移 $3$：从 $(0, -2)$ 向右 $3$、向上 $2$ 到 $(3, 0)$。（这同时也是 x 轴截距。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the x-intercept of $4x - y = 8$. Give your answer as a coordinate pair, e.g. $(2, 0)$.",
        "zh": "求 $4x - y = 8$ 的 x 轴截距。请以坐标对形式作答，如 $(2, 0)$。"
      },
      "answer": "(2,0)",
      "accept": [
        "2,0",
        "2, 0",
        "(2, 0)"
      ],
      "explanation": {
        "en": "Set $y = 0$: $4x = 8$, so $x = 2$, giving $(2, 0)$.",
        "zh": "令 $y = 0$：$4x = 8$，故 $x = 2$，得 $(2, 0)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the y-intercept of $4x - y = 8$. Give your answer as a coordinate pair.",
        "zh": "求 $4x - y = 8$ 的 y 轴截距。请以坐标对形式作答。"
      },
      "answer": "(0,-8)",
      "accept": [
        "0,-8",
        "0, -8",
        "(0, -8)"
      ],
      "explanation": {
        "en": "Set $x = 0$: $-y = 8$, so $y = -8$, giving $(0, -8)$. Watch the sign — dividing $-y = 8$ by $-1$ gives $y = -8$, not $8$.",
        "zh": "令 $x = 0$：$-y = 8$，故 $y = -8$，得 $(0, -8)$。注意符号——$-y = 8$ 两边除以 $-1$ 得 $y = -8$，而非 $8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the x-intercept of $y = -2x + 10$. Give your answer as a coordinate pair.",
        "zh": "求 $y = -2x + 10$ 的 x 轴截距。请以坐标对形式作答。"
      },
      "answer": "(5,0)",
      "accept": [
        "5,0",
        "5, 0",
        "(5, 0)"
      ],
      "explanation": {
        "en": "Set $y = 0$: $0 = -2x + 10$, so $2x = 10$ and $x = 5$, giving $(5, 0)$.",
        "zh": "令 $y = 0$：$0 = -2x + 10$，故 $2x = 10$，$x = 5$，得 $(5, 0)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write the equation of the horizontal line passing through $(2, -7)$. Answer in the form $y = k$.",
        "zh": "写出过点 $(2, -7)$ 的水平线方程。请写成 $y = k$ 的形式。"
      },
      "answer": "y=-7",
      "accept": [
        "y = -7",
        "-7"
      ],
      "explanation": {
        "en": "A horizontal line keeps $y$ constant at the point's y-coordinate, so $y = -7$. The x-coordinate $2$ does not appear in a horizontal-line equation.",
        "zh": "水平线的 $y$ 保持为该点的纵坐标，故 $y = -7$。横坐标 $2$ 不出现在水平线方程中。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write the equation of the vertical line passing through $(2, -7)$. Answer in the form $x = k$.",
        "zh": "写出过点 $(2, -7)$ 的垂直线方程。请写成 $x = k$ 的形式。"
      },
      "answer": "x=2",
      "accept": [
        "x = 2",
        "2"
      ],
      "explanation": {
        "en": "A vertical line keeps $x$ constant at the point's x-coordinate, so $x = 2$. Contrast with the horizontal line through the same point, which is $y = -7$.",
        "zh": "垂直线的 $x$ 保持为该点的横坐标，故 $x = 2$。与过同一点的水平线 $y = -7$ 相对照。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "On a graph, a line crosses the x-axis at $3$ and the y-axis at $-6$. Write its x-intercept as a coordinate pair.",
        "zh": "在图上，一条直线在 x 轴上交于 $3$，在 y 轴上交于 $-6$。将其 x 轴截距写成坐标对。"
      },
      "answer": "(3,0)",
      "accept": [
        "3,0",
        "3, 0",
        "(3, 0)"
      ],
      "explanation": {
        "en": "The x-intercept is where the line crosses the x-axis, so its y-coordinate is $0$: the point is $(3, 0)$. The value $-6$ is the y-intercept, not the x-intercept.",
        "zh": "x 轴截距是直线与 x 轴的交点，其纵坐标为 $0$：即点 $(3, 0)$。$-6$ 是 y 轴截距，而非 x 轴截距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the x-intercept of $5x + 2y = 20$. Give your answer as a coordinate pair.",
        "zh": "求 $5x + 2y = 20$ 的 x 轴截距。请以坐标对形式作答。"
      },
      "answer": "(4,0)",
      "accept": [
        "4,0",
        "4, 0",
        "(4, 0)"
      ],
      "explanation": {
        "en": "Set $y = 0$: $5x = 20$, so $x = 4$, giving $(4, 0)$.",
        "zh": "令 $y = 0$：$5x = 20$，故 $x = 4$，得 $(4, 0)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the y-intercept of $5x + 2y = 20$. Give your answer as a coordinate pair.",
        "zh": "求 $5x + 2y = 20$ 的 y 轴截距。请以坐标对形式作答。"
      },
      "answer": "(0,10)",
      "accept": [
        "0,10",
        "0, 10",
        "(0, 10)"
      ],
      "explanation": {
        "en": "Set $x = 0$: $2y = 20$, so $y = 10$, giving $(0, 10)$. Setting $y = 0$ instead would give the x-intercept $(4, 0)$.",
        "zh": "令 $x = 0$：$2y = 20$，故 $y = 10$，得 $(0, 10)$。若改令 $y = 0$，得到的是 x 轴截距 $(4, 0)$。"
      }
    }
  ],
  "unit-5-forms-of-linear-equations/slope-intercept-and-point-slope": [
    {
      "type": "mc",
      "question": {
        "en": "Identify the slope and y-intercept of $y = 3x - 5$.",
        "zh": "求 $y = 3x - 5$ 的斜率和 y 轴截距。"
      },
      "choices": [
        "slope $3$, y-intercept $-5$",
        "slope $-5$, y-intercept $3$",
        "slope $3$, y-intercept $5$",
        "slope $-3$, y-intercept $5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In slope-intercept form $y = mx + b$, $m$ is the coefficient of $x$ and $b$ is the constant. So $m = 3$ and $b = -5$. Reading $b = 5$ drops the negative sign.",
        "zh": "在斜截式 $y = mx + b$ 中，$m$ 是 $x$ 的系数，$b$ 是常数项。所以斜率 $m = 3$，y 轴截距 $b = -5$。若读成 $b = 5$ 则是漏掉了负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "At what point does the line $y = -2x + 7$ cross the y-axis?",
        "zh": "直线 $y = -2x + 7$ 与 y 轴的交点是哪个点？"
      },
      "choices": [
        "$(7, 0)$",
        "$(0, 7)$",
        "$(0, -2)$",
        "$(-2, 0)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The y-intercept occurs where $x = 0$: $y = -2(0) + 7 = 7$, giving $(0, 7)$. Choosing $(7, 0)$ confuses the y-intercept with an x-intercept; $(0, -2)$ mistakes the slope for the intercept.",
        "zh": "y 轴截距在 $x = 0$ 处：$y = -2(0) + 7 = 7$，即点 $(0, 7)$。选 $(7, 0)$ 是把 y 轴截距和 x 轴截距混淆了；选 $(0, -2)$ 是把斜率当成了截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the slope of the line through $(1, 2)$ and $(4, 11)$.",
        "zh": "求过点 $(1, 2)$ 和 $(4, 11)$ 的直线的斜率。"
      },
      "choices": [
        "$-3$",
        "$\\frac{1}{3}$",
        "$3$",
        "$9$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Slope $= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$. Answering $9$ forgets to divide by the run; $\\frac{1}{3}$ flips the order of rise and run.",
        "zh": "斜率 $= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$。答 $9$ 是忘了除以水平变化量；答 $\\frac{1}{3}$ 是把纵向和横向变化量的顺序颠倒了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write the point-slope equation of the line through $(2, -3)$ with slope $4$.",
        "zh": "写出过点 $(2, -3)$、斜率为 $4$ 的直线的点斜式方程。"
      },
      "choices": [
        "$y - 3 = 4(x + 2)$",
        "$y - 3 = 4(x - 2)$",
        "$y + 3 = 4(x + 2)$",
        "$y + 3 = 4(x - 2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Point-slope form is $y - y_1 = m(x - x_1)$ with $(x_1, y_1) = (2, -3)$: $y - (-3) = 4(x - 2)$, i.e. $y + 3 = 4(x - 2)$. Subtracting a negative $y_1$ becomes $+3$, and $x_1 = 2$ gives $(x - 2)$.",
        "zh": "点斜式为 $y - y_1 = m(x - x_1)$，其中 $(x_1, y_1) = (2, -3)$：$y - (-3) = 4(x - 2)$，即 $y + 3 = 4(x - 2)$。减去负的 $y_1$ 变成 $+3$，而 $x_1 = 2$ 给出 $(x - 2)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $y - 5 = 2(x - 3)$ to slope-intercept form.",
        "zh": "把 $y - 5 = 2(x - 3)$ 化为斜截式。"
      },
      "choices": [
        "$y = 2x - 1$",
        "$y = 2x + 1$",
        "$y = 2x - 11$",
        "$y = 2x + 11$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Distribute: $y - 5 = 2x - 6$. Add $5$ to both sides: $y = 2x - 6 + 5 = 2x - 1$. Getting $2x - 11$ subtracts $5$ instead of adding it.",
        "zh": "展开：$y - 5 = 2x - 6$。两边加 $5$：$y = 2x - 6 + 5 = 2x - 1$。得到 $2x - 11$ 是把加 $5$ 错做成了减 $5$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which equation has slope $-\\frac{1}{2}$ and passes through $(0, 4)$?",
        "zh": "哪个方程的斜率为 $-\\frac{1}{2}$ 且过点 $(0, 4)$？"
      },
      "choices": [
        "$y = \\frac{1}{2}x + 4$",
        "$y = -\\frac{1}{2}x + 4$",
        "$y = -\\frac{1}{2}x - 4$",
        "$y = 2x + 4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $(0, 4)$ is on the y-axis, $b = 4$, and the slope is $m = -\\frac{1}{2}$, so $y = -\\frac{1}{2}x + 4$. A positive slope or $b = -4$ does not match the given information.",
        "zh": "因为 $(0, 4)$ 在 y 轴上，所以 $b = 4$，斜率 $m = -\\frac{1}{2}$，故 $y = -\\frac{1}{2}x + 4$。正斜率或 $b = -4$ 都与所给条件不符。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a line written as $y = mx + b$, what does $b$ represent?",
        "zh": "对于写成 $y = mx + b$ 的直线，$b$ 代表什么？"
      },
      "choices": [
        "the slope of the line",
        "the x-intercept of the line",
        "the y-value of the line when $x = 0$",
        "how steep the line is"
      ],
      "answer": 2,
      "explanation": {
        "en": "Setting $x = 0$ gives $y = m(0) + b = b$, so $b$ is the y-value where the line meets the y-axis (the y-intercept). Steepness and slope are described by $m$, not $b$.",
        "zh": "令 $x = 0$ 得 $y = m(0) + b = b$，所以 $b$ 是直线与 y 轴相交处的 y 值（即 y 轴截距）。陡峭程度和斜率由 $m$ 描述，而不是 $b$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the line through $(3, 7)$ and $(3, -2)$?",
        "zh": "求过点 $(3, 7)$ 和 $(3, -2)$ 的直线的斜率。"
      },
      "choices": [
        "$0$",
        "$-9$",
        "$9$",
        "undefined (the line is vertical)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Slope $= \\frac{-2 - 7}{3 - 3} = \\frac{-9}{0}$, which is undefined because the run is $0$. Both points share $x = 3$, so the line is vertical. A slope of $0$ would describe a horizontal line instead.",
        "zh": "斜率 $= \\frac{-2 - 7}{3 - 3} = \\frac{-9}{0}$，因分母（水平变化量）为 $0$ 而无定义。两点的 $x$ 都是 $3$，所以直线是竖直的。斜率为 $0$ 描述的是水平线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write the slope-intercept equation of the line through $(0, -3)$ with slope $\\frac{2}{3}$.",
        "zh": "写出过点 $(0, -3)$、斜率为 $\\frac{2}{3}$ 的直线的斜截式方程。"
      },
      "choices": [
        "$y = \\frac{2}{3}x - 3$",
        "$y = \\frac{2}{3}x + 3$",
        "$y = -\\frac{2}{3}x - 3$",
        "$y = 3x - \\frac{2}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The point $(0, -3)$ is the y-intercept, so $b = -3$, and $m = \\frac{2}{3}$, giving $y = \\frac{2}{3}x - 3$. Swapping the slope and intercept produces the last choice.",
        "zh": "点 $(0, -3)$ 就是 y 轴截距，所以 $b = -3$，$m = \\frac{2}{3}$，得 $y = \\frac{2}{3}x - 3$。把斜率和截距对调就会得到最后一个选项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A gym charges a $20 sign-up fee plus $5 per class. Which equation gives the total cost $y$ for $x$ classes?",
        "zh": "健身房收取 $20 的注册费，外加每节课 $5。哪个方程给出上 $x$ 节课的总费用 $y$？"
      },
      "choices": [
        "$y = 20x + 5$",
        "$y = 5x + 20$",
        "$y = 25x$",
        "$y = 5x - 20$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The per-class cost $5 is the rate (slope) that multiplies $x$, and the one-time $20 fee is the fixed starting value (y-intercept): $y = 5x + 20$. Choice $y = 20x + 5$ swaps the slope and intercept.",
        "zh": "每节课 $5 是与 $x$ 相乘的变化率（斜率），一次性的 $20 注册费是固定的起始值（y 轴截距）：$y = 5x + 20$。选项 $y = 20x + 5$ 把斜率和截距弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A phone plan costs $C = 0.15m + 40$ dollars for $m$ minutes. What does the $40$ represent?",
        "zh": "某话费套餐用 $m$ 分钟的费用为 $C = 0.15m + 40$ 美元。其中的 $40$ 代表什么？"
      },
      "choices": [
        "the cost per minute",
        "the total number of minutes used",
        "the fixed monthly fee (cost when $m = 0$)",
        "the number of minutes included for $40"
      ],
      "answer": 2,
      "explanation": {
        "en": "The constant $40$ is the y-intercept: when $m = 0$, $C = 40$, the fixed monthly fee before any minutes are used. The cost per minute is the slope $0.15$.",
        "zh": "常数 $40$ 是 y 轴截距：当 $m = 0$ 时 $C = 40$，即还没用任何分钟前的固定月费。每分钟的费用是斜率 $0.15$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Convert $y - 1 = -3(x + 2)$ to slope-intercept form.",
        "zh": "把 $y - 1 = -3(x + 2)$ 化为斜截式。"
      },
      "choices": [
        "$y = -3x + 5$",
        "$y = -3x + 7$",
        "$y = -3x - 7$",
        "$y = -3x - 5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Distribute the $-3$: $y - 1 = -3x - 6$. Add $1$ to both sides: $y = -3x - 6 + 1 = -3x - 5$. Forgetting to distribute the negative to the $+2$ gives $-3x + 5$.",
        "zh": "把 $-3$ 分配进去：$y - 1 = -3x - 6$。两边加 $1$：$y = -3x - 6 + 1 = -3x - 5$。若忘了把负号分配给 $+2$ 就会得到 $-3x + 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(2, 5)$ and $(6, 13)$. Give an integer or reduced fraction.",
        "zh": "求过点 $(2, 5)$ 和 $(6, 13)$ 的直线的斜率。请填整数或最简分数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "Slope $= \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.",
        "zh": "斜率 $= \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the y-intercept $b$ of the line $y = -4x + 9$? Give the value of $b$.",
        "zh": "直线 $y = -4x + 9$ 的 y 轴截距 $b$ 是多少？请填 $b$ 的值。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9",
        "(0,9)"
      ],
      "explanation": {
        "en": "In $y = mx + b$, the constant term is $b = 9$; the line meets the y-axis at $(0, 9)$.",
        "zh": "在 $y = mx + b$ 中，常数项就是 $b = 9$；直线与 y 轴相交于 $(0, 9)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The line $y = 7x - 2$ crosses the y-axis at $(0, b)$. What is $b$?",
        "zh": "直线 $y = 7x - 2$ 在 $(0, b)$ 处穿过 y 轴。$b$ 是多少？"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "Setting $x = 0$: $y = 7(0) - 2 = -2$, so $b = -2$. Keep the negative sign from the constant term.",
        "zh": "令 $x = 0$：$y = 7(0) - 2 = -2$，所以 $b = -2$。要保留常数项的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line passes through $(4, 10)$ with slope $3$. After writing it in point-slope form and simplifying to $y = mx + b$, what is $b$?",
        "zh": "一条直线过点 $(4, 10)$，斜率为 $3$。将其写成点斜式并化简为 $y = mx + b$ 后，$b$ 是多少？"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "Point-slope: $y - 10 = 3(x - 4)$. Distribute and add $10$: $y = 3x - 12 + 10 = 3x - 2$, so $b = -2$.",
        "zh": "点斜式：$y - 10 = 3(x - 4)$。展开并加 $10$：$y = 3x - 12 + 10 = 3x - 2$，所以 $b = -2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line passes through $(-2, 5)$ with slope $-4$. Find the y-intercept $b$.",
        "zh": "一条直线过点 $(-2, 5)$，斜率为 $-4$。求 y 轴截距 $b$。"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "Use $y = mx + b$: $5 = -4(-2) + b = 8 + b$, so $b = 5 - 8 = -3$. Watch the sign: $-4 \\times -2 = +8$.",
        "zh": "用 $y = mx + b$：$5 = -4(-2) + b = 8 + b$，所以 $b = 5 - 8 = -3$。注意符号：$-4 \\times -2 = +8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line through $(-3, 4)$ and $(2, -6)$. Give an integer or reduced fraction.",
        "zh": "求过点 $(-3, 4)$ 和 $(2, -6)$ 的直线的斜率。请填整数或最简分数。"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "Slope $= \\frac{-6 - 4}{2 - (-3)} = \\frac{-10}{5} = -2$. Keep the order consistent in numerator and denominator.",
        "zh": "斜率 $= \\frac{-6 - 4}{2 - (-3)} = \\frac{-10}{5} = -2$。分子和分母中两点的顺序要保持一致。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A candle burns down so its height is $h = -2t + 15$ (cm) after $t$ hours. What is its height in cm after $4$ hours?",
        "zh": "一支蜡烛燃烧后，$t$ 小时后的高度为 $h = -2t + 15$（厘米）。$4$ 小时后它的高度是多少厘米？"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "7 cm"
      ],
      "explanation": {
        "en": "Substitute $t = 4$: $h = -2(4) + 15 = -8 + 15 = 7$ cm. The slope $-2$ means the candle loses 2 cm each hour.",
        "zh": "代入 $t = 4$：$h = -2(4) + 15 = -8 + 15 = 7$ 厘米。斜率 $-2$ 表示蜡烛每小时缩短 2 厘米。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line passes through $(1, -2)$ and $(5, 6)$. Written as $y = mx + b$, what is the y-intercept $b$?",
        "zh": "一条直线过点 $(1, -2)$ 和 $(5, 6)$。写成 $y = mx + b$ 后，y 轴截距 $b$ 是多少？"
      },
      "answer": "-4",
      "accept": [
        "-4.0"
      ],
      "explanation": {
        "en": "Slope $= \\frac{6 - (-2)}{5 - 1} = \\frac{8}{4} = 2$. Then $y = 2x + b$ with $(1, -2)$: $-2 = 2(1) + b$, so $b = -4$.",
        "zh": "斜率 $= \\frac{6 - (-2)}{5 - 1} = \\frac{8}{4} = 2$。再用 $y = 2x + b$ 代入 $(1, -2)$：$-2 = 2(1) + b$，所以 $b = -4$。"
      }
    }
  ],
  "unit-5-forms-of-linear-equations/standard-form-and-parallel-perpendicular": [
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the line $3x + 4y = 12$?",
        "zh": "直线 $3x + 4y = 12$ 的斜率是多少？"
      },
      "choices": [
        "$-\\frac{3}{4}$",
        "$\\frac{3}{4}$",
        "$-\\frac{4}{3}$",
        "$\\frac{4}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For a line in standard form $Ax + By = C$, the slope is $-\\frac{A}{B} = -\\frac{3}{4}$. Answering $\\frac{3}{4}$ forgets the negative sign in $-\\frac{A}{B}$.",
        "zh": "对于标准式 $Ax + By = C$，斜率为 $-\\frac{A}{B} = -\\frac{3}{4}$。答 $\\frac{3}{4}$ 是漏掉了 $-\\frac{A}{B}$ 中的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the slope of the line $2x - 5y = 10$. Give an exact fraction (e.g. $2/5$).",
        "zh": "求直线 $2x - 5y = 10$ 的斜率。请填精确分数（如 $2/5$）。"
      },
      "answer": "2/5",
      "accept": [
        "0.4",
        "+2/5"
      ],
      "explanation": {
        "en": "Slope $= -\\frac{A}{B} = -\\frac{2}{-5} = \\frac{2}{5}$. The two negatives cancel; treating $B = 5$ instead of $-5$ gives the wrong sign.",
        "zh": "斜率 $= -\\frac{A}{B} = -\\frac{2}{-5} = \\frac{2}{5}$。两个负号相消；若把 $B$ 当作 $5$ 而不是 $-5$，就会得到错误的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line has slope $\\frac{2}{3}$. What is the slope of any line perpendicular to it?",
        "zh": "一条直线的斜率是 $\\frac{2}{3}$。与它垂直的直线的斜率是多少？"
      },
      "choices": [
        "$\\frac{3}{2}$",
        "$-\\frac{3}{2}$",
        "$-\\frac{2}{3}$",
        "$\\frac{2}{3}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Perpendicular slopes are negative reciprocals: flip $\\frac{2}{3}$ to $\\frac{3}{2}$ and negate to get $-\\frac{3}{2}$. Their product is $\\frac{2}{3}\\cdot\\left(-\\frac{3}{2}\\right) = -1$. Choosing $\\frac{3}{2}$ flips but forgets the sign.",
        "zh": "垂直的斜率互为负倒数：把 $\\frac{2}{3}$ 取倒数得 $\\frac{3}{2}$，再取负得 $-\\frac{3}{2}$。两者乘积为 $\\frac{2}{3}\\cdot\\left(-\\frac{3}{2}\\right) = -1$。选 $\\frac{3}{2}$ 是取了倒数却漏了负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which line is parallel to $y = -2x + 5$?",
        "zh": "下列哪条直线与 $y = -2x + 5$ 平行？"
      },
      "choices": [
        "$y = \\frac{1}{2}x + 5$",
        "$y = 2x + 1$",
        "$y = -2x - 3$",
        "$y = -\\frac{1}{2}x$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Parallel lines have equal slopes. The given slope is $-2$, so the parallel line must also have slope $-2$: $y = -2x - 3$. A different $y$-intercept is fine; only the slope must match.",
        "zh": "平行线斜率相等。已知斜率为 $-2$，所以平行线的斜率也必须是 $-2$：$y = -2x - 3$。$y$ 截距不同没关系，只有斜率必须相同。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line has slope $-\\frac{4}{5}$. What is the slope of a line perpendicular to it? Give an exact fraction.",
        "zh": "一条直线的斜率是 $-\\frac{4}{5}$。与它垂直的直线的斜率是多少？请填精确分数。"
      },
      "answer": "5/4",
      "accept": [
        "1.25",
        "+5/4"
      ],
      "explanation": {
        "en": "The negative reciprocal of $-\\frac{4}{5}$ is $+\\frac{5}{4}$: flip to $-\\frac{5}{4}$, then negate. Check: $-\\frac{4}{5}\\cdot\\frac{5}{4} = -1$.",
        "zh": "$-\\frac{4}{5}$ 的负倒数是 $+\\frac{5}{4}$：取倒数得 $-\\frac{5}{4}$，再取负号。验证：$-\\frac{4}{5}\\cdot\\frac{5}{4} = -1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rewrite $2x + y = 7$ in slope-intercept form.",
        "zh": "把 $2x + y = 7$ 化为斜截式。"
      },
      "choices": [
        "$y = 2x + 7$",
        "$y = -2x - 7$",
        "$y = 2x - 7$",
        "$y = -2x + 7$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Solve for $y$: subtract $2x$ from both sides to get $y = -2x + 7$. Forgetting to move $2x$ across (keeping it positive) gives $y = 2x + 7$.",
        "zh": "解出 $y$：两边减去 $2x$，得 $y = -2x + 7$。忘记把 $2x$ 移到另一边（保留正号）会得到 $y = 2x + 7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $x$-intercept of $2x + 3y = 12$. Give only the $x$-coordinate as an integer.",
        "zh": "求 $2x + 3y = 12$ 的 $x$ 截距。只填 $x$ 坐标（整数）。"
      },
      "answer": "6",
      "accept": [
        "(6,0)",
        "6,0",
        "6, 0"
      ],
      "explanation": {
        "en": "The $x$-intercept is where $y = 0$: $2x = 12$, so $x = 6$. A common mistake is setting $x = 0$ instead, which gives the $y$-intercept.",
        "zh": "$x$ 截距是 $y = 0$ 的点：$2x = 12$，故 $x = 6$。常见错误是令 $x = 0$，那求出的是 $y$ 截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines are perpendicular exactly when the product of their slopes is $-1$. Which pair of slopes belongs to perpendicular lines?",
        "zh": "两条直线垂直当且仅当它们斜率之积为 $-1$。下列哪对斜率对应垂直的直线？"
      },
      "choices": [
        "slopes $3$ and $-\\frac{1}{3}$",
        "slopes $\\frac{1}{2}$ and $2$",
        "slopes $2$ and $2$",
        "slopes $-4$ and $4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Perpendicular slopes multiply to $-1$: $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$. Equal slopes ($2$ and $2$) are parallel; $\\frac{1}{2}\\cdot 2 = 1$ and $-4\\cdot 4 = -16$ are not $-1$.",
        "zh": "垂直斜率之积为 $-1$：$3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$。相等的斜率（$2$ 与 $2$）是平行；$\\frac{1}{2}\\cdot 2 = 1$、$-4\\cdot 4 = -16$ 都不是 $-1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line has slope $7$. What is the slope of a line perpendicular to it? Give an exact fraction.",
        "zh": "一条直线的斜率是 $7$。与它垂直的直线的斜率是多少？请填精确分数。"
      },
      "answer": "-1/7",
      "accept": [
        "-1/7 ",
        "−1/7"
      ],
      "explanation": {
        "en": "Write $7$ as $\\frac{7}{1}$. The negative reciprocal is $-\\frac{1}{7}$. Check: $7 \\cdot \\left(-\\frac{1}{7}\\right) = -1$.",
        "zh": "把 $7$ 写成 $\\frac{7}{1}$。其负倒数为 $-\\frac{1}{7}$。验证：$7 \\cdot \\left(-\\frac{1}{7}\\right) = -1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of the line $5x - 2y = 8$?",
        "zh": "直线 $5x - 2y = 8$ 的斜率是多少？"
      },
      "choices": [
        "$-\\frac{5}{2}$",
        "$\\frac{5}{2}$",
        "$-\\frac{2}{5}$",
        "$\\frac{2}{5}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Slope $= -\\frac{A}{B} = -\\frac{5}{-2} = \\frac{5}{2}$. Because $B = -2$ is negative, the two minus signs cancel. Answering $-\\frac{5}{2}$ ignores the sign of $B$.",
        "zh": "斜率 $= -\\frac{A}{B} = -\\frac{5}{-2} = \\frac{5}{2}$。因为 $B = -2$ 为负，两个负号相消。答 $-\\frac{5}{2}$ 是忽略了 $B$ 的符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of the line $8x + 2y = 5$? Give an integer.",
        "zh": "直线 $8x + 2y = 5$ 的斜率是多少？请填整数。"
      },
      "answer": "-4",
      "accept": [
        "-4.0",
        "−4"
      ],
      "explanation": {
        "en": "Slope $= -\\frac{A}{B} = -\\frac{8}{2} = -4$. The constant $5$ on the right never affects the slope; it only shifts the intercept.",
        "zh": "斜率 $= -\\frac{A}{B} = -\\frac{8}{2} = -4$。右边的常数 $5$ 不影响斜率，只改变截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the slope of any line perpendicular to $3x + 4y = 12$?",
        "zh": "与 $3x + 4y = 12$ 垂直的直线的斜率是多少？"
      },
      "choices": [
        "$-\\frac{4}{3}$",
        "$-\\frac{3}{4}$",
        "$\\frac{4}{3}$",
        "$\\frac{3}{4}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "First the given slope: $-\\frac{A}{B} = -\\frac{3}{4}$. The negative reciprocal of $-\\frac{3}{4}$ is $\\frac{4}{3}$. Check: $-\\frac{3}{4}\\cdot\\frac{4}{3} = -1$.",
        "zh": "先求已知斜率：$-\\frac{A}{B} = -\\frac{3}{4}$。$-\\frac{3}{4}$ 的负倒数是 $\\frac{4}{3}$。验证：$-\\frac{3}{4}\\cdot\\frac{4}{3} = -1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of a line perpendicular to $5x - 3y = 15$? Give an exact fraction.",
        "zh": "与 $5x - 3y = 15$ 垂直的直线的斜率是多少？请填精确分数。"
      },
      "answer": "-3/5",
      "accept": [
        "-0.6",
        "−3/5"
      ],
      "explanation": {
        "en": "The given slope is $-\\frac{5}{-3} = \\frac{5}{3}$. Its negative reciprocal is $-\\frac{3}{5}$. Check: $\\frac{5}{3}\\cdot\\left(-\\frac{3}{5}\\right) = -1$.",
        "zh": "已知斜率为 $-\\frac{5}{-3} = \\frac{5}{3}$。它的负倒数是 $-\\frac{3}{5}$。验证：$\\frac{5}{3}\\cdot\\left(-\\frac{3}{5}\\right) = -1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which line is parallel to $4x - 2y = 6$?",
        "zh": "下列哪条直线与 $4x - 2y = 6$ 平行？"
      },
      "choices": [
        "$y = -\\frac{1}{2}x + 3$",
        "$y = -2x$",
        "$y = \\frac{1}{2}x$",
        "$y = 2x + 1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The given slope is $-\\frac{4}{-2} = 2$. A parallel line must have slope $2$, so $y = 2x + 1$. The negative-reciprocal slope $-\\frac{1}{2}$ would be perpendicular, not parallel.",
        "zh": "已知斜率为 $-\\frac{4}{-2} = 2$。平行线的斜率必须是 $2$，所以是 $y = 2x + 1$。负倒数斜率 $-\\frac{1}{2}$ 对应的是垂直，而非平行。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the $y$-intercept of $3x + 5y = 20$. Give only the $y$-coordinate as an integer.",
        "zh": "求 $3x + 5y = 20$ 的 $y$ 截距。只填 $y$ 坐标（整数）。"
      },
      "answer": "4",
      "accept": [
        "(0,4)",
        "0,4",
        "0, 4"
      ],
      "explanation": {
        "en": "The $y$-intercept is where $x = 0$: $5y = 20$, so $y = 4$. Setting $y = 0$ instead would give the $x$-intercept.",
        "zh": "$y$ 截距是 $x = 0$ 的点：$5y = 20$，故 $y = 4$。若令 $y = 0$，求出的是 $x$ 截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which line is perpendicular to $6x + 3y = 9$?",
        "zh": "下列哪条直线与 $6x + 3y = 9$ 垂直？"
      },
      "choices": [
        "$y = \\frac{1}{2}x - 4$",
        "$y = 2x$",
        "$y = -2x$",
        "$y = -\\frac{1}{2}x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The given slope is $-\\frac{6}{3} = -2$. The negative reciprocal is $\\frac{1}{2}$, so the perpendicular line is $y = \\frac{1}{2}x - 4$. Slope $-2$ is parallel, not perpendicular.",
        "zh": "已知斜率为 $-\\frac{6}{3} = -2$。其负倒数是 $\\frac{1}{2}$，所以垂直的直线是 $y = \\frac{1}{2}x - 4$。斜率 $-2$ 是平行，不是垂直。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line has slope $\\frac{2}{9}$. What is the slope of a line perpendicular to it? Give an exact fraction.",
        "zh": "一条直线的斜率是 $\\frac{2}{9}$。与它垂直的直线的斜率是多少？请填精确分数。"
      },
      "answer": "-9/2",
      "accept": [
        "-4.5",
        "−9/2"
      ],
      "explanation": {
        "en": "Flip $\\frac{2}{9}$ to $\\frac{9}{2}$ and negate to get $-\\frac{9}{2}$. Check: $\\frac{2}{9}\\cdot\\left(-\\frac{9}{2}\\right) = -1$.",
        "zh": "把 $\\frac{2}{9}$ 取倒数得 $\\frac{9}{2}$，再取负得 $-\\frac{9}{2}$。验证：$\\frac{2}{9}\\cdot\\left(-\\frac{9}{2}\\right) = -1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which line is perpendicular to $y = 3$?",
        "zh": "下列哪条直线与 $y = 3$ 垂直？"
      },
      "choices": [
        "$y = -3$",
        "$x = 4$",
        "$y = 0$",
        "$y = x$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$y = 3$ is a horizontal line (slope $0$). A line perpendicular to a horizontal line must be vertical, and vertical lines have the form $x = $ constant, so $x = 4$. The negative-reciprocal rule does not apply because a vertical line has undefined slope.",
        "zh": "$y = 3$ 是水平线（斜率为 $0$）。与水平线垂直的直线必须是竖直线，竖直线形如 $x = $ 常数，故为 $x = 4$。此处不能用负倒数法则，因为竖直线斜率无定义。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which statement about parallel lines is true?",
        "zh": "关于平行线，下列哪种说法正确？"
      },
      "choices": [
        "Parallel lines have negative-reciprocal slopes.",
        "Parallel lines have opposite slopes.",
        "Parallel lines have equal slopes.",
        "Parallel lines always intersect."
      ],
      "answer": 2,
      "explanation": {
        "en": "Parallel lines never meet and have equal slopes (but different $y$-intercepts). Negative-reciprocal slopes describe perpendicular lines, and parallel lines by definition do not intersect.",
        "zh": "平行线永不相交，斜率相等（但 $y$ 截距不同）。负倒数斜率描述的是垂直线；平行线依定义不相交。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which line is perpendicular to $y = -\\frac{1}{6}x + 2$?",
        "zh": "下列哪条直线与 $y = -\\frac{1}{6}x + 2$ 垂直？"
      },
      "choices": [
        "$y = -6x$",
        "$y = -\\frac{1}{6}x - 3$",
        "$y = \\frac{1}{6}x$",
        "$y = 6x + 1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The given slope is $-\\frac{1}{6}$. The negative reciprocal is $6$, so the perpendicular line is $y = 6x + 1$. Choosing $-6$ flips the fraction but forgets to change the sign; $-\\frac{1}{6}$ again is parallel.",
        "zh": "已知斜率为 $-\\frac{1}{6}$。其负倒数是 $6$，所以垂直的直线是 $y = 6x + 1$。选 $-6$ 是取了倒数却没改符号；再取 $-\\frac{1}{6}$ 则是平行。"
      }
    }
  ],
  "unit-6-systems-of-equations/solving-systems-graphing-substitution": [
    {
      "type": "mc",
      "question": {
        "en": "The graphs of $y = x + 1$ and $y = -x + 3$ meet at exactly one point. What is the solution of the system?",
        "zh": "$y = x + 1$ 与 $y = -x + 3$ 的图像恰好相交于一点。该方程组的解是什么？"
      },
      "choices": [
        "$(1, 2)$",
        "$(2, 1)$",
        "$(-1, 2)$",
        "$(3, 0)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set the expressions equal: $x + 1 = -x + 3$, so $2x = 2$ and $x = 1$; then $y = 1 + 1 = 2$. Check: $y = -1 + 3 = 2$ works too. The solution is where BOTH lines pass, $(1, 2)$. Swapping to $(2, 1)$ reverses the coordinates.",
        "zh": "令两式相等：$x + 1 = -x + 3$，得 $2x = 2$，$x = 1$；则 $y = 1 + 1 = 2$。验证：$y = -1 + 3 = 2$ 也成立。解是两条直线共同经过的点 $(1, 2)$。写成 $(2, 1)$ 是把横纵坐标弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by substitution: $y = 2x - 1$ and $x + y = 5$. Give the answer as an ordered pair $(x, y)$.",
        "zh": "用代入法求解：$y = 2x - 1$ 且 $x + y = 5$。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(2,3)",
      "accept": [
        "2,3",
        "2, 3",
        "(2, 3)"
      ],
      "explanation": {
        "en": "Substitute $y = 2x - 1$ into $x + y = 5$: $x + (2x - 1) = 5$, so $3x - 1 = 5$, $3x = 6$, $x = 2$. Then $y = 2(2) - 1 = 3$. Check both: $x + y = 2 + 3 = 5$ and $y = 2(2) - 1 = 3$. Solution $(2, 3)$.",
        "zh": "把 $y = 2x - 1$ 代入 $x + y = 5$：$x + (2x - 1) = 5$，即 $3x - 1 = 5$，$3x = 6$，$x = 2$。则 $y = 2(2) - 1 = 3$。两式验证：$x + y = 2 + 3 = 5$ 且 $y = 2(2) - 1 = 3$。解为 $(2, 3)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does the system $y = 2x + 3$ and $y = 2x - 5$ have?",
        "zh": "方程组 $y = 2x + 3$ 与 $y = 2x - 5$ 有多少个解？"
      },
      "choices": [
        "Exactly one solution",
        "No solution (parallel lines)",
        "Infinitely many solutions",
        "Exactly two solutions"
      ],
      "answer": 1,
      "explanation": {
        "en": "Both lines have slope $2$ but different $y$-intercepts ($3$ and $-5$), so they are parallel and never cross. Setting $2x + 3 = 2x - 5$ gives $3 = -5$, which is false — no solution.",
        "zh": "两条直线斜率都是 $2$，但 $y$ 截距不同（$3$ 和 $-5$），所以互相平行、永不相交。令 $2x + 3 = 2x - 5$ 得 $3 = -5$，矛盾，故无解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by substitution: $y = x + 4$ and $y = 3x$. Give the answer as an ordered pair $(x, y)$.",
        "zh": "用代入法求解：$y = x + 4$ 且 $y = 3x$。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(2,6)",
      "accept": [
        "2,6",
        "2, 6",
        "(2, 6)"
      ],
      "explanation": {
        "en": "Since both equal $y$, set $3x = x + 4$, so $2x = 4$, $x = 2$. Then $y = 3(2) = 6$. Check both: $y = 2 + 4 = 6$ and $y = 3(2) = 6$. Solution $(2, 6)$.",
        "zh": "两式都等于 $y$，令 $3x = x + 4$，得 $2x = 4$，$x = 2$。则 $y = 3(2) = 6$。两式验证：$y = 2 + 4 = 6$ 且 $y = 3(2) = 6$。解为 $(2, 6)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does the system $2x + y = 4$ and $4x + 2y = 8$ have?",
        "zh": "方程组 $2x + y = 4$ 与 $4x + 2y = 8$ 有多少个解？"
      },
      "choices": [
        "Exactly one solution",
        "No solution",
        "Infinitely many solutions",
        "Exactly two solutions"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiplying the first equation by $2$ gives $4x + 2y = 8$, which is exactly the second equation. They are the same line, so every point on it is a solution — infinitely many.",
        "zh": "第一个方程两边同乘 $2$ 得 $4x + 2y = 8$，恰好就是第二个方程。二者是同一条直线，直线上每个点都是解，故有无穷多个解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by substitution: $2x + y = 7$ and $y = x - 2$. Give the answer as an ordered pair $(x, y)$.",
        "zh": "用代入法求解：$2x + y = 7$ 且 $y = x - 2$。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(3,1)",
      "accept": [
        "3,1",
        "3, 1",
        "(3, 1)"
      ],
      "explanation": {
        "en": "Substitute $y = x - 2$ into $2x + y = 7$: $2x + (x - 2) = 7$, so $3x - 2 = 7$, $3x = 9$, $x = 3$. Then $y = 3 - 2 = 1$. Check both: $2(3) + 1 = 7$ and $y = 3 - 2 = 1$. Solution $(3, 1)$.",
        "zh": "把 $y = x - 2$ 代入 $2x + y = 7$：$2x + (x - 2) = 7$，即 $3x - 2 = 7$，$3x = 9$，$x = 3$。则 $y = 3 - 2 = 1$。两式验证：$2(3) + 1 = 7$ 且 $y = 3 - 2 = 1$。解为 $(3, 1)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "To solve $2x + y = 9$ together with $y = 3x - 1$ by substitution, which single-variable equation results?",
        "zh": "用代入法联立求解 $2x + y = 9$ 与 $y = 3x - 1$ 时，得到的一元方程是哪一个？"
      },
      "choices": [
        "$2(3x - 1) = 9$",
        "$2x + 3x + 1 = 9$",
        "$2x + y = 3x - 1$",
        "$2x + 3x - 1 = 9$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Replace $y$ in $2x + y = 9$ with $3x - 1$: $2x + (3x - 1) = 9$, i.e. $2x + 3x - 1 = 9$. Option 1 wrongly multiplies the $2x$ term; option 2 flips the sign of $-1$.",
        "zh": "把 $2x + y = 9$ 中的 $y$ 换成 $3x - 1$：$2x + (3x - 1) = 9$，即 $2x + 3x - 1 = 9$。选项 1 错误地把 $2x$ 项相乘；选项 2 把 $-1$ 的符号弄反了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by substitution: $x = 2y - 1$ and $3x + y = 11$. Give the answer as an ordered pair $(x, y)$.",
        "zh": "用代入法求解：$x = 2y - 1$ 且 $3x + y = 11$。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(3,2)",
      "accept": [
        "3,2",
        "3, 2",
        "(3, 2)"
      ],
      "explanation": {
        "en": "Substitute $x = 2y - 1$ into $3x + y = 11$: $3(2y - 1) + y = 11$, so $6y - 3 + y = 11$, $7y = 14$, $y = 2$. Then $x = 2(2) - 1 = 3$. Check both: $3(3) + 2 = 11$ and $x = 2(2) - 1 = 3$. Solution $(3, 2)$.",
        "zh": "把 $x = 2y - 1$ 代入 $3x + y = 11$：$3(2y - 1) + y = 11$，即 $6y - 3 + y = 11$，$7y = 14$，$y = 2$。则 $x = 2(2) - 1 = 3$。两式验证：$3(3) + 2 = 11$ 且 $x = 2(2) - 1 = 3$。解为 $(3, 2)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Is $(2, 1)$ a solution of the system $x + y = 3$ and $2x - y = 3$?",
        "zh": "$(2, 1)$ 是方程组 $x + y = 3$ 与 $2x - y = 3$ 的解吗？"
      },
      "choices": [
        "Yes — it satisfies both equations",
        "No — it satisfies only the first",
        "No — it satisfies only the second",
        "No — it satisfies neither"
      ],
      "answer": 0,
      "explanation": {
        "en": "First: $2 + 1 = 3$ true. Second: $2(2) - 1 = 4 - 1 = 3$ true. A point is a solution of a system only when it satisfies EVERY equation, and $(2, 1)$ does.",
        "zh": "第一式：$2 + 1 = 3$ 成立。第二式：$2(2) - 1 = 4 - 1 = 3$ 成立。一个点是方程组的解，当且仅当它满足每一个方程，而 $(2, 1)$ 都满足。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by substitution: $y = -x + 6$ and $y = 2x - 3$. Give the answer as an ordered pair $(x, y)$.",
        "zh": "用代入法求解：$y = -x + 6$ 且 $y = 2x - 3$。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(3,3)",
      "accept": [
        "3,3",
        "3, 3",
        "(3, 3)"
      ],
      "explanation": {
        "en": "Both equal $y$, so $2x - 3 = -x + 6$, giving $3x = 9$, $x = 3$. Then $y = -3 + 6 = 3$. Check both: $y = -3 + 6 = 3$ and $y = 2(3) - 3 = 3$. Solution $(3, 3)$.",
        "zh": "两式都等于 $y$，故 $2x - 3 = -x + 6$，得 $3x = 9$，$x = 3$。则 $y = -3 + 6 = 3$。两式验证：$y = -3 + 6 = 3$ 且 $y = 2(3) - 3 = 3$。解为 $(3, 3)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which ordered pair is a solution of BOTH $y = 2x$ and $x + y = 9$?",
        "zh": "哪个有序对同时满足 $y = 2x$ 与 $x + y = 9$？"
      },
      "choices": [
        "$(2, 4)$",
        "$(3, 6)$",
        "$(6, 3)$",
        "$(1, 2)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substitute $y = 2x$ into $x + y = 9$: $x + 2x = 9$, so $3x = 9$, $x = 3$, $y = 6$. Check both: $y = 2(3) = 6$ and $3 + 6 = 9$. Only $(3, 6)$ works; $(2, 4)$ fits $y = 2x$ but $2 + 4 \\ne 9$.",
        "zh": "把 $y = 2x$ 代入 $x + y = 9$：$x + 2x = 9$，得 $3x = 9$，$x = 3$，$y = 6$。两式验证：$y = 2(3) = 6$ 且 $3 + 6 = 9$。只有 $(3, 6)$ 成立；$(2, 4)$ 满足 $y = 2x$ 但 $2 + 4 \\ne 9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve the system $x + y = 10$ and $x - y = 4$. Give the answer as an ordered pair $(x, y)$.",
        "zh": "求解方程组 $x + y = 10$ 与 $x - y = 4$。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(7,3)",
      "accept": [
        "7,3",
        "7, 3",
        "(7, 3)"
      ],
      "explanation": {
        "en": "From $x - y = 4$ we get $x = y + 4$. Substitute into $x + y = 10$: $(y + 4) + y = 10$, so $2y = 6$, $y = 3$, and $x = 7$. Check both: $7 + 3 = 10$ and $7 - 3 = 4$. Solution $(7, 3)$.",
        "zh": "由 $x - y = 4$ 得 $x = y + 4$。代入 $x + y = 10$：$(y + 4) + y = 10$，即 $2y = 6$，$y = 3$，$x = 7$。两式验证：$7 + 3 = 10$ 且 $7 - 3 = 4$。解为 $(7, 3)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two lines in a system have different slopes. How many solutions does the system have?",
        "zh": "方程组中两条直线的斜率不同。该方程组有多少个解？"
      },
      "choices": [
        "No solution",
        "Infinitely many solutions",
        "Exactly one solution",
        "It depends on the intercepts"
      ],
      "answer": 2,
      "explanation": {
        "en": "Lines with different slopes are not parallel and are not the same line, so they cross at exactly one point — exactly one solution. The intercepts do not change this fact.",
        "zh": "斜率不同的直线既不平行也不重合，因此恰好相交于一点——恰有一个解。截距不会改变这一结论。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by substitution: $y = 4x$ and $2x + y = 12$. Give the answer as an ordered pair $(x, y)$.",
        "zh": "用代入法求解：$y = 4x$ 且 $2x + y = 12$。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(2,8)",
      "accept": [
        "2,8",
        "2, 8",
        "(2, 8)"
      ],
      "explanation": {
        "en": "Substitute $y = 4x$ into $2x + y = 12$: $2x + 4x = 12$, so $6x = 12$, $x = 2$. Then $y = 4(2) = 8$. Check both: $y = 4(2) = 8$ and $2(2) + 8 = 12$. Solution $(2, 8)$.",
        "zh": "把 $y = 4x$ 代入 $2x + y = 12$：$2x + 4x = 12$，得 $6x = 12$，$x = 2$。则 $y = 4(2) = 8$。两式验证：$y = 4(2) = 8$ 且 $2(2) + 8 = 12$。解为 $(2, 8)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If two equations in a system describe the same line, the system has:",
        "zh": "若方程组中的两个方程描述同一条直线，则该方程组有："
      },
      "choices": [
        "no solution",
        "exactly one solution",
        "exactly two solutions",
        "infinitely many solutions"
      ],
      "answer": 3,
      "explanation": {
        "en": "Every point on a line satisfies both equations when they are the same line, so there are infinitely many solutions. This is the 'coincident lines' case, distinct from parallel lines (no solution).",
        "zh": "当两个方程是同一条直线时，直线上每个点都同时满足两式，故有无穷多个解。这是「重合直线」的情形，与平行直线（无解）不同。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve by substitution: $3x - y = 5$ and $y = x + 1$. What is the solution?",
        "zh": "用代入法求解：$3x - y = 5$ 且 $y = x + 1$。解是什么？"
      },
      "choices": [
        "$(3, 4)$",
        "$(4, 3)$",
        "$(3, 3)$",
        "$(1, 3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Substitute $y = x + 1$ into $3x - y = 5$: $3x - (x + 1) = 5$, so $3x - x - 1 = 5$, $2x = 6$, $x = 3$. Then $y = 3 + 1 = 4$. Check both: $3(3) - 4 = 5$ and $y = 3 + 1 = 4$. Solution $(3, 4)$. Watch the sign when expanding $-(x + 1)$.",
        "zh": "把 $y = x + 1$ 代入 $3x - y = 5$：$3x - (x + 1) = 5$，即 $3x - x - 1 = 5$，$2x = 6$，$x = 3$。则 $y = 3 + 1 = 4$。两式验证：$3(3) - 4 = 5$ 且 $y = 3 + 1 = 4$。解为 $(3, 4)$。注意展开 $-(x + 1)$ 时的符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does the system $x + 2y = 6$ and $x + 2y = 10$ have?",
        "zh": "方程组 $x + 2y = 6$ 与 $x + 2y = 10$ 有多少个解？"
      },
      "choices": [
        "Infinitely many solutions",
        "No solution",
        "Exactly one solution",
        "Exactly two solutions"
      ],
      "answer": 1,
      "explanation": {
        "en": "The left sides are identical, so $x + 2y$ cannot equal both $6$ and $10$ at once. Solved in slope-intercept form both give slope $-\\frac{1}{2}$ with different intercepts: parallel lines, no solution.",
        "zh": "两式左边完全相同，$x + 2y$ 不可能同时等于 $6$ 和 $10$。化成斜截式后斜率都是 $-\\frac{1}{2}$ 而截距不同：平行直线，无解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by graphing: the horizontal line $y = 3$ and the line $y = x - 1$ intersect at one point. Give it as an ordered pair $(x, y)$.",
        "zh": "用作图法求解：水平线 $y = 3$ 与直线 $y = x - 1$ 相交于一点。请以有序对 $(x, y)$ 形式作答。"
      },
      "answer": "(4,3)",
      "accept": [
        "4,3",
        "4, 3",
        "(4, 3)"
      ],
      "explanation": {
        "en": "On $y = 3$ the height is fixed at $3$, so set $x - 1 = 3$, giving $x = 4$. Check both: $y = 3$ and $y = 4 - 1 = 3$. Solution $(4, 3)$. Writing $(3, 4)$ reverses the coordinates.",
        "zh": "在 $y = 3$ 上高度固定为 $3$，故令 $x - 1 = 3$，得 $x = 4$。两式验证：$y = 3$ 且 $y = 4 - 1 = 3$。解为 $(4, 3)$。写成 $(3, 4)$ 是把坐标弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Substitute $y = 2x - 3$ into $x - y = 1$ and simplify. Which is correct?",
        "zh": "把 $y = 2x - 3$ 代入 $x - y = 1$ 并化简。哪一个是正确的？"
      },
      "choices": [
        "$x - 2x - 3 = 1$",
        "$2x - 3 - x = 1$",
        "$x - 2x + 3 = 1$",
        "$x + 2x - 3 = 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Replace $y$: $x - (2x - 3) = 1$. Distributing the negative sign to BOTH terms gives $x - 2x + 3 = 1$. Option 1 is the classic error of forgetting to flip the sign of $-3$.",
        "zh": "把 $y$ 换掉：$x - (2x - 3) = 1$。把负号分配到括号内每一项得 $x - 2x + 3 = 1$。选项 1 是忘记把 $-3$ 变号的经典错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve by substitution: $y = x - 4$ and $2x + y = 5$. What is the solution?",
        "zh": "用代入法求解：$y = x - 4$ 且 $2x + y = 5$。解是什么？"
      },
      "choices": [
        "$(1, -3)$",
        "$(3, 1)$",
        "$(-1, 3)$",
        "$(3, -1)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Substitute $y = x - 4$ into $2x + y = 5$: $2x + (x - 4) = 5$, so $3x - 4 = 5$, $3x = 9$, $x = 3$. Then $y = 3 - 4 = -1$. Check both: $y = 3 - 4 = -1$ and $2(3) + (-1) = 5$. Solution $(3, -1)$.",
        "zh": "把 $y = x - 4$ 代入 $2x + y = 5$：$2x + (x - 4) = 5$，即 $3x - 4 = 5$，$3x = 9$，$x = 3$。则 $y = 3 - 4 = -1$。两式验证：$y = 3 - 4 = -1$ 且 $2(3) + (-1) = 5$。解为 $(3, -1)$。"
      }
    }
  ],
  "unit-6-systems-of-equations/elimination-and-system-word-problems": [
    {
      "type": "mc",
      "question": {
        "en": "Solve by elimination: $3x + 2y = 12$ and $5x - 2y = 4$.",
        "zh": "用消元法解：$3x + 2y = 12$ 和 $5x - 2y = 4$。"
      },
      "choices": [
        "$(2, 3)$",
        "$(3, 2)$",
        "$(2, -3)$",
        "$(-2, 3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The $y$-terms are opposites, so add the equations: $8x = 16$, giving $x = 2$. Substitute back: $3(2) + 2y = 12$, so $2y = 6$ and $y = 3$. Swapping the coordinates comes from writing the pair as $(y, x)$ instead of $(x, y)$.",
        "zh": "两式的 $y$ 项互为相反数，相加得 $8x = 16$，故 $x = 2$。代回：$3(2) + 2y = 12$，得 $2y = 6$，$y = 3$。把坐标写反是因为按 $(y, x)$ 而非 $(x, y)$ 的顺序书写。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve by elimination: $x + y = 10$ and $x - y = 4$.",
        "zh": "用消元法解：$x + y = 10$ 和 $x - y = 4$。"
      },
      "choices": [
        "$(3, 7)$",
        "$(7, 3)$",
        "$(5, 5)$",
        "$(6, 4)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Add the equations to remove $y$: $2x = 14$, so $x = 7$; then $7 + y = 10$ gives $y = 3$. Getting $(3, 7)$ means the larger value was assigned to $y$ instead of $x$.",
        "zh": "两式相加消去 $y$：$2x = 14$，故 $x = 7$；再由 $7 + y = 10$ 得 $y = 3$。得到 $(3, 7)$ 是把较大的值错误地赋给了 $y$ 而非 $x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve by elimination: $2x + y = 8$ and $3x - y = 7$.",
        "zh": "用消元法解：$2x + y = 8$ 和 $3x - y = 7$。"
      },
      "choices": [
        "$(2, 4)$",
        "$(1, 6)$",
        "$(3, 2)$",
        "$(4, 0)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The $y$-terms are $+y$ and $-y$, so add: $5x = 15$, giving $x = 3$; then $2(3) + y = 8$ gives $y = 2$. Only opposite terms cancel when you add, which is why $y$ is eliminated here.",
        "zh": "两式的 $y$ 项为 $+y$ 与 $-y$，相加得 $5x = 15$，故 $x = 3$；再由 $2(3) + y = 8$ 得 $y = 2$。相加时只有相反的项才会抵消，所以这里消去的是 $y$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve by elimination: $5x + 2y = 1$ and $3x - 2y = 7$.",
        "zh": "用消元法解：$5x + 2y = 1$ 和 $3x - 2y = 7$。"
      },
      "choices": [
        "$(2, -2)$",
        "$(1, 2)$",
        "$(-1, 2)$",
        "$(1, -2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Add to cancel $y$: $8x = 8$, so $x = 1$; then $5(1) + 2y = 1$ gives $2y = -4$ and $y = -2$. Dropping the negative sign on $y$ is the common slip here.",
        "zh": "相加消去 $y$：$8x = 8$，故 $x = 1$；再由 $5(1) + 2y = 1$ 得 $2y = -4$，$y = -2$。这里常见的错误是漏掉 $y$ 的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve: $2x - 3y = -4$ and $4x + y = 6$. (Hint: multiply the first equation by 2.)",
        "zh": "解：$2x - 3y = -4$ 和 $4x + y = 6$。（提示：把第一式乘以 2。）"
      },
      "choices": [
        "$(1, 2)$",
        "$(2, 1)$",
        "$(-1, 2)$",
        "$(1, -2)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply the first equation by 2: $4x - 6y = -8$. Subtract from $4x + y = 6$: $7y = 14$, so $y = 2$; then $4x + 2 = 6$ gives $x = 1$. You must scale an equation so a variable's coefficients match before eliminating.",
        "zh": "把第一式乘以 2：$4x - 6y = -8$。用 $4x + y = 6$ 减去它：$7y = 14$，故 $y = 2$；再由 $4x + 2 = 6$ 得 $x = 1$。消元前必须先把某式放缩，使某个变量的系数一致。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the system $3x + 2y = 7$ and $4x - 2y = 14$, which single step eliminates a variable immediately?",
        "zh": "对于方程组 $3x + 2y = 7$ 和 $4x - 2y = 14$，下列哪一步可立即消去一个变量？"
      },
      "choices": [
        "Subtract the equations to eliminate $x$.",
        "Add the equations to eliminate $y$.",
        "Multiply the first equation by 2.",
        "Divide the second equation by $x$."
      ],
      "answer": 1,
      "explanation": {
        "en": "The $y$-terms are $+2y$ and $-2y$, already opposites, so adding gives $7x = 21$ and $y$ is gone. Subtracting would instead double the $y$-terms rather than cancel them.",
        "zh": "两式的 $y$ 项为 $+2y$ 与 $-2y$，已互为相反数，相加得 $7x = 21$，$y$ 被消去。相减反而会使 $y$ 项翻倍而无法抵消。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Three pens and two notebooks cost \\$13; two pens and five notebooks cost \\$16. What is the cost of one notebook?",
        "zh": "3 支笔和 2 本笔记本共 13 美元；2 支笔和 5 本笔记本共 16 美元。一本笔记本多少钱？"
      },
      "choices": [
        "\\$1",
        "\\$4",
        "\\$2",
        "\\$3"
      ],
      "answer": 2,
      "explanation": {
        "en": "Let $p$ and $n$ be the prices. $3p + 2n = 13$, $2p + 5n = 16$. Multiply the first by 2 and the second by 3: $6p + 4n = 26$ and $6p + 15n = 48$; subtract to get $11n = 22$, so $n = 2$. Forgetting to scale both equations to match the $p$-coefficient leads to a wrong value.",
        "zh": "设 $p$、$n$ 为价格。$3p + 2n = 13$，$2p + 5n = 16$。第一式乘 2、第二式乘 3：$6p + 4n = 26$、$6p + 15n = 48$；相减得 $11n = 22$，故 $n = 2$。忘记同时放缩两式以匹配 $p$ 的系数会导致错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Two numbers have a sum of 30 and a difference of 8. What is the larger number?",
        "zh": "两个数之和为 30，之差为 8。较大的数是多少？"
      },
      "choices": [
        "$22$",
        "$15$",
        "$11$",
        "$19$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Let the numbers be $x$ and $y$ with $x + y = 30$ and $x - y = 8$. Add: $2x = 38$, so $x = 19$ (and $y = 11$). Answering $11$ reports the smaller number instead of the larger one.",
        "zh": "设两数为 $x$、$y$，$x + y = 30$，$x - y = 8$。相加：$2x = 38$，故 $x = 19$（且 $y = 11$）。答 $11$ 是报了较小的数而非较大的数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does the system $2x + y = 5$ and $4x + 2y = 3$ have?",
        "zh": "方程组 $2x + y = 5$ 和 $4x + 2y = 3$ 有多少个解？"
      },
      "choices": [
        "No solution",
        "Exactly one solution",
        "Exactly two solutions",
        "Infinitely many solutions"
      ],
      "answer": 0,
      "explanation": {
        "en": "Multiply the first equation by 2: $4x + 2y = 10$. This contradicts $4x + 2y = 3$, since $10 \\neq 3$. The lines are parallel and never meet, so there is no solution. Equal left sides with unequal right sides signals no solution, not infinitely many.",
        "zh": "把第一式乘以 2：$4x + 2y = 10$。这与 $4x + 2y = 3$ 矛盾，因为 $10 \\neq 3$。两直线平行、永不相交，故无解。左边相同而右边不同意味着无解，而非无穷多解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does the system $x - 2y = 3$ and $2x - 4y = 6$ have?",
        "zh": "方程组 $x - 2y = 3$ 和 $2x - 4y = 6$ 有多少个解？"
      },
      "choices": [
        "No solution",
        "Infinitely many solutions",
        "Exactly one solution",
        "Exactly two solutions"
      ],
      "answer": 1,
      "explanation": {
        "en": "Multiplying the first equation by 2 gives exactly $2x - 4y = 6$, the second equation. The two equations describe the same line, so every point on it is a solution: infinitely many. Identical equations (after scaling) mean one line, not two distinct parallel lines.",
        "zh": "把第一式乘以 2 恰好得到 $2x - 4y = 6$，即第二式。两式表示同一条直线，其上每个点都是解：无穷多个。（放缩后）完全相同的方程表示同一条直线，而非两条不同的平行线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A plane flies 300 mi/h relative to the ground with a tailwind and 200 mi/h against the same wind. What is the wind's speed?",
        "zh": "一架飞机顺风时相对地面速度为 300 英里/小时，逆同样的风时为 200 英里/小时。风速是多少？"
      },
      "choices": [
        "$250$ mi/h",
        "$100$ mi/h",
        "$50$ mi/h",
        "$25$ mi/h"
      ],
      "answer": 2,
      "explanation": {
        "en": "Let $b$ be the plane's own speed and $w$ the wind. $b + w = 300$ and $b - w = 200$. Subtract: $2w = 100$, so $w = 50$. Getting $100$ forgets to divide by 2 after subtracting.",
        "zh": "设 $b$ 为飞机自身速度，$w$ 为风速。$b + w = 300$，$b - w = 200$。相减：$2w = 100$，故 $w = 50$。得到 $100$ 是相减后忘了除以 2。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A jar holds 20 coins, all nickels (5¢) and dimes (10¢), worth \\$1.60 total. How many dimes are there?",
        "zh": "一个罐子里有 20 枚硬币，全是 5 分币和 10 分币，共值 1.60 美元。有多少枚 10 分币？"
      },
      "choices": [
        "$8$",
        "$10$",
        "$16$",
        "$12$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Let $n$ nickels and $d$ dimes: $n + d = 20$ and $5n + 10d = 160$. Divide the second by 5: $n + 2d = 32$. Subtract the first: $d = 12$ (and $n = 8$). Answering $8$ counts the nickels instead of the dimes.",
        "zh": "设 $n$ 枚 5 分币、$d$ 枚 10 分币：$n + d = 20$，$5n + 10d = 160$。第二式除以 5：$n + 2d = 32$。减去第一式：$d = 12$（且 $n = 8$）。答 $8$ 是数了 5 分币而非 10 分币。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $5x + 2y = 16$ and $3x - 2y = 0$ by elimination. Give the value of $x$ (an integer).",
        "zh": "用消元法解 $5x + 2y = 16$ 和 $3x - 2y = 0$。给出 $x$ 的值（整数）。"
      },
      "answer": "2",
      "accept": [
        "x=2",
        "2.0"
      ],
      "explanation": {
        "en": "Add the equations to cancel $y$: $8x = 16$, so $x = 2$. (Then $y = 3$.) The $+2y$ and $-2y$ cancel cleanly when added.",
        "zh": "相加消去 $y$：$8x = 16$，故 $x = 2$。（再得 $y = 3$。）$+2y$ 与 $-2y$ 相加时干净抵消。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x + y = 9$ and $x - y = 1$ by elimination. Give the value of $y$ (an integer).",
        "zh": "用消元法解 $x + y = 9$ 和 $x - y = 1$。给出 $y$ 的值（整数）。"
      },
      "answer": "4",
      "accept": [
        "y=4",
        "4.0"
      ],
      "explanation": {
        "en": "Subtract the second equation from the first to cancel $x$: $2y = 8$, so $y = 4$ (and $x = 5$). Subtracting removes $x$ because $x - x = 0$.",
        "zh": "用第一式减去第二式以消去 $x$：$2y = 8$，故 $y = 4$（且 $x = 5$）。相减消去 $x$ 是因为 $x - x = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $2x + y = 5$ and $x - y = 1$. Give the solution as an ordered pair $(x, y)$.",
        "zh": "解 $2x + y = 5$ 和 $x - y = 1$。以有序对 $(x, y)$ 形式给出解。"
      },
      "answer": "(2,1)",
      "accept": [
        "2,1",
        "2, 1"
      ],
      "explanation": {
        "en": "Add the equations to cancel $y$: $3x = 6$, so $x = 2$; then $2 - y = 1$ gives $y = 1$. Write the pair as $(x, y) = (2, 1)$.",
        "zh": "相加消去 $y$：$3x = 6$，故 $x = 2$；再由 $2 - y = 1$ 得 $y = 1$。有序对写作 $(x, y) = (2, 1)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The sum of two numbers is 24, and one number is twice the other. What is the larger number? (integer)",
        "zh": "两个数之和为 24，其中一个是另一个的两倍。较大的数是多少？（整数）"
      },
      "answer": "16",
      "accept": [
        "16.0"
      ],
      "explanation": {
        "en": "Let the smaller be $y$ and larger $x = 2y$. Then $2y + y = 24$, so $y = 8$ and $x = 16$. The larger number is twice the smaller, giving $16$.",
        "zh": "设较小者为 $y$，较大者 $x = 2y$。则 $2y + y = 24$，故 $y = 8$，$x = 16$。较大的数是较小者的两倍，即 $16$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Adult tickets cost \\$9 and child tickets \\$6. A show sold 200 tickets for \\$1500. How many adult tickets were sold? (integer)",
        "zh": "成人票 9 美元，儿童票 6 美元。一场演出售出 200 张票，共 1500 美元。售出多少张成人票？（整数）"
      },
      "answer": "100",
      "accept": [
        "100.0"
      ],
      "explanation": {
        "en": "Let $a$ adult and $c$ child tickets: $a + c = 200$ and $9a + 6c = 1500$. Substitute $c = 200 - a$: $9a + 6(200 - a) = 1500$, so $3a + 1200 = 1500$ and $a = 100$. The value equation must use the two different prices, not one shared price.",
        "zh": "设 $a$ 张成人票、$c$ 张儿童票：$a + c = 200$，$9a + 6c = 1500$。代入 $c = 200 - a$：$9a + 6(200 - a) = 1500$，得 $3a + 1200 = 1500$，$a = 100$。金额方程必须用两种不同价格，而非同一价格。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $3x + 2y = 12$ and $3x + 5y = 21$ by elimination. Give the value of $y$ (an integer).",
        "zh": "用消元法解 $3x + 2y = 12$ 和 $3x + 5y = 21$。给出 $y$ 的值（整数）。"
      },
      "answer": "3",
      "accept": [
        "y=3",
        "3.0"
      ],
      "explanation": {
        "en": "The $3x$ terms match, so subtract the first from the second: $3y = 9$, giving $y = 3$. When coefficients are already equal, subtracting eliminates that variable directly.",
        "zh": "两式的 $3x$ 相同，用第二式减第一式：$3y = 9$，故 $y = 3$。当系数已相等时，相减即可直接消去该变量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $2x + y = 11$ and $x + y = 7$ by elimination. Give the value of $x$ (an integer).",
        "zh": "用消元法解 $2x + y = 11$ 和 $x + y = 7$。给出 $x$ 的值（整数）。"
      },
      "answer": "4",
      "accept": [
        "x=4",
        "4.0"
      ],
      "explanation": {
        "en": "Both have $+y$, so subtract the second from the first: $x = 4$ (and $y = 3$). Subtracting the equations cancels the matching $y$-terms.",
        "zh": "两式都含 $+y$，用第一式减第二式：$x = 4$（且 $y = 3$）。相减可抵消相同的 $y$ 项。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A boat travels 18 km/h downstream and 10 km/h upstream. What is the boat's speed in still water? (km/h, integer)",
        "zh": "一条船顺流速度为 18 千米/小时，逆流速度为 10 千米/小时。船在静水中的速度是多少？（千米/小时，整数）"
      },
      "answer": "14",
      "accept": [
        "14.0"
      ],
      "explanation": {
        "en": "Let $b$ be the boat's still-water speed and $c$ the current: $b + c = 18$ and $b - c = 10$. Add: $2b = 28$, so $b = 14$. Adding the equations cancels the current $c$ to isolate the boat's own speed.",
        "zh": "设 $b$ 为船在静水中的速度，$c$ 为水流速度：$b + c = 18$，$b - c = 10$。相加：$2b = 28$，故 $b = 14$。相加消去水流 $c$，从而分离出船本身的速度。"
      }
    }
  ],
  "unit-7-inequalities-systems-graphs/graphing-two-variable-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $y > 2x + 1$ drawn?",
        "zh": "$y > 2x + 1$ 的图像如何画？"
      },
      "choices": [
        "Dashed boundary line, shade the region above it.",
        "Solid boundary line, shade the region above it.",
        "Dashed boundary line, shade the region below it.",
        "Solid boundary line, shade the region below it."
      ],
      "answer": 0,
      "explanation": {
        "en": "The strict symbol $>$ means points on the line are not included, so the boundary is dashed. Since $y$ is greater than the line, shade above it. A solid line would wrongly include equality that $>$ excludes.",
        "zh": "严格符号 $>$ 表示直线上的点不包含在内，故边界为虚线。因为 $y$ 大于该直线，所以在其上方阴影。用实线会错误地把 $>$ 所排除的等号情形包含进来。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $y \\le -x + 3$ drawn?",
        "zh": "$y \\le -x + 3$ 的图像如何画？"
      },
      "choices": [
        "Dashed boundary line, shade above.",
        "Solid boundary line, shade below.",
        "Dashed boundary line, shade below.",
        "Solid boundary line, shade above."
      ],
      "answer": 1,
      "explanation": {
        "en": "The symbol $\\le$ includes points on the line, so the boundary is solid; because $y$ is less than or equal to the line, shade below. Using a dashed line would drop the equality that $\\le$ allows.",
        "zh": "符号 $\\le$ 包含直线上的点，故边界为实线；因为 $y$ 小于等于该直线，所以在其下方阴影。用虚线会漏掉 $\\le$ 所允许的等号情形。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Does the point $(0, 0)$ satisfy the inequality $3x - 2y < 6$?",
        "zh": "点 $(0, 0)$ 满足不等式 $3x - 2y < 6$ 吗？"
      },
      "choices": [
        "It cannot be tested without graphing first.",
        "No, because $(0,0)$ is on the boundary.",
        "Yes, because $0 < 6$ is true.",
        "No, because $3x - 2y$ is negative."
      ],
      "answer": 2,
      "explanation": {
        "en": "Substitute $x = 0$, $y = 0$: $3(0) - 2(0) = 0$, and $0 < 6$ is true, so $(0,0)$ is a solution. A test point that makes the inequality true lies in the shaded region.",
        "zh": "代入 $x = 0$，$y = 0$：$3(0) - 2(0) = 0$，而 $0 < 6$ 为真，故 $(0,0)$ 是解。使不等式成立的检验点位于阴影区域内。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which point is a solution to $y \\ge 2x - 1$?",
        "zh": "下列哪个点是 $y \\ge 2x - 1$ 的解？"
      },
      "choices": [
        "$(1, 0)$",
        "$(2, 1)$",
        "$(3, 0)$",
        "$(0, 0)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Test $(0,0)$: is $0 \\ge 2(0) - 1 = -1$? Yes. The others fail: $(1,0)$ needs $0 \\ge 1$, $(2,1)$ needs $1 \\ge 3$, $(3,0)$ needs $0 \\ge 5$ — all false. Always substitute both coordinates before deciding.",
        "zh": "检验 $(0,0)$：$0 \\ge 2(0) - 1 = -1$ 吗？成立。其余不满足：$(1,0)$ 需 $0 \\ge 1$，$(2,1)$ 需 $1 \\ge 3$，$(3,0)$ 需 $0 \\ge 5$——都不成立。判断前务必代入两个坐标。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $x > 4$ drawn on the coordinate plane?",
        "zh": "在坐标平面上，$x > 4$ 的图像如何画？"
      },
      "choices": [
        "A vertical dashed line at $x = 4$, shade to the right.",
        "A horizontal dashed line at $y = 4$, shade above.",
        "A vertical solid line at $x = 4$, shade to the left.",
        "A horizontal solid line at $y = 4$, shade below."
      ],
      "answer": 0,
      "explanation": {
        "en": "With no $y$, $x = 4$ is a vertical line; $>$ makes it dashed, and $x$ greater than 4 is the region to the right. Treating $x > 4$ as a horizontal line confuses the roles of $x$ and $y$.",
        "zh": "式中没有 $y$，$x = 4$ 是一条竖直线；$>$ 使其为虚线，$x$ 大于 4 的区域在右侧。把 $x > 4$ 当作水平线是混淆了 $x$ 与 $y$ 的角色。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How is the graph of $y \\le 2$ drawn on the coordinate plane?",
        "zh": "在坐标平面上，$y \\le 2$ 的图像如何画？"
      },
      "choices": [
        "A vertical solid line at $x = 2$, shade to the left.",
        "A horizontal solid line at $y = 2$, shade below.",
        "A horizontal dashed line at $y = 2$, shade above.",
        "A vertical dashed line at $x = 2$, shade to the right."
      ],
      "answer": 1,
      "explanation": {
        "en": "With no $x$, $y = 2$ is a horizontal line; $\\le$ makes it solid, and $y$ at most 2 is the region below. Reading $y \\le 2$ as a vertical line swaps the axes.",
        "zh": "式中没有 $x$，$y = 2$ 是一条水平线；$\\le$ 使其为实线，$y$ 至多为 2 的区域在下方。把 $y \\le 2$ 读作竖直线是把两坐标轴弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rewrite $-2y > 4x - 6$ with $y$ isolated.",
        "zh": "把 $-2y > 4x - 6$ 改写为 $y$ 单独在一边的形式。"
      },
      "choices": [
        "$y > -2x + 3$",
        "$y > 2x - 3$",
        "$y < -2x + 3$",
        "$y < 2x + 3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Divide every term by $-2$. Dividing an inequality by a negative flips the direction, so $>$ becomes $<$: $y < -2x + 3$. Keeping the $>$ is the classic error when dividing by a negative.",
        "zh": "每一项都除以 $-2$。不等式除以负数要变号，故 $>$ 变为 $<$：$y < -2x + 3$。除以负数时不变号是经典错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For a system of two linear inequalities, the solution set is:",
        "zh": "对于由两个线性不等式组成的方程组，其解集是："
      },
      "choices": [
        "the union of the two shaded regions.",
        "the region shaded by the first inequality only.",
        "everything outside both shaded regions.",
        "the overlap where both inequalities are satisfied."
      ],
      "answer": 3,
      "explanation": {
        "en": "A point solves a system only if it satisfies every inequality at once, so the solution is the overlap of the shaded regions. Taking the union would include points that satisfy just one inequality.",
        "zh": "只有同时满足每个不等式的点才是方程组的解，故解集是各阴影区域的重叠部分。取并集会包含只满足其中一个不等式的点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The boundary line of $y < 3x - 2$ passes through which point?",
        "zh": "$y < 3x - 2$ 的边界直线经过下列哪个点？"
      },
      "choices": [
        "$(0, -2)$",
        "$(0, 2)$",
        "$(2, 0)$",
        "$(-2, 0)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The boundary is $y = 3x - 2$. At $x = 0$, $y = -2$, so it passes through $(0, -2)$ — the $y$-intercept. Even though the line is dashed, points on it still satisfy the equation of the boundary.",
        "zh": "边界为 $y = 3x - 2$。当 $x = 0$ 时 $y = -2$，故经过 $(0, -2)$——即 $y$ 截距。尽管该线为虚线，其上的点仍满足边界的方程。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Is $(1, 1)$ a solution of the system $y \\ge x$ and $y \\le -x + 4$?",
        "zh": "$(1, 1)$ 是方程组 $y \\ge x$ 和 $y \\le -x + 4$ 的解吗？"
      },
      "choices": [
        "No, it satisfies neither inequality.",
        "Yes, it satisfies both inequalities.",
        "No, it satisfies only the first inequality.",
        "No, it satisfies only the second inequality."
      ],
      "answer": 1,
      "explanation": {
        "en": "Check both: $y \\ge x$ gives $1 \\ge 1$ (true), and $y \\le -x + 4$ gives $1 \\le 3$ (true). Since both hold, $(1,1)$ is in the overlap and solves the system. A point must pass every inequality, not just one.",
        "zh": "两个都检验：$y \\ge x$ 得 $1 \\ge 1$（成立），$y \\le -x + 4$ 得 $1 \\le 3$（成立）。两者都成立，故 $(1,1)$ 在重叠区内，是方程组的解。一个点必须通过每个不等式，而非只满足一个。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which inequality has a solution region that is above a dashed line through $(0, 1)$ with slope 2?",
        "zh": "下列哪个不等式的解区域位于经过 $(0, 1)$、斜率为 2 的虚线上方？"
      },
      "choices": [
        "$y < 2x + 1$",
        "$y \\ge 2x + 1$",
        "$y > 2x + 1$",
        "$y \\le 2x + 1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Slope 2 and $y$-intercept 1 give the boundary $y = 2x + 1$. A dashed line means strict inequality, and shading above means $y$ is greater: $y > 2x + 1$. The $\\ge$ option would require a solid line instead.",
        "zh": "斜率 2、$y$ 截距 1 给出边界 $y = 2x + 1$。虚线表示严格不等式，上方阴影表示 $y$ 更大：$y > 2x + 1$。选 $\\ge$ 则需要实线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You buy $x$ items at \\$2 each and $y$ items at \\$3 each, spending at most \\$12. Which inequality models this?",
        "zh": "你买 $x$ 件单价 2 美元的物品和 $y$ 件单价 3 美元的物品，花费最多 12 美元。哪个不等式描述此情形？"
      },
      "choices": [
        "$2x + 3y > 12$",
        "$3x + 2y \\le 12$",
        "$2x + 3y = 12$",
        "$2x + 3y \\le 12$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Total cost is $2x + 3y$, and \"at most \\$12\" means it can equal or be less than 12, so $2x + 3y \\le 12$. \"At most\" is $\\le$, not $>$, and each price multiplies its own quantity.",
        "zh": "总花费为 $2x + 3y$，“最多 12 美元”表示可以等于或小于 12，故 $2x + 3y \\le 12$。“最多”是 $\\le$ 而非 $>$，且每种价格乘以各自的数量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The boundary line of $y \\le 3x - 6$ is $y = 3x - 6$. What is its $y$-intercept? (give the $y$-value, an integer)",
        "zh": "$y \\le 3x - 6$ 的边界直线是 $y = 3x - 6$。它的 $y$ 截距是多少？（给出 $y$ 值，整数）"
      },
      "answer": "-6",
      "accept": [
        "-6.0",
        "(0,-6)"
      ],
      "explanation": {
        "en": "The $y$-intercept occurs at $x = 0$: $y = 3(0) - 6 = -6$. In $y = mx + b$ form, the constant $b = -6$ is the $y$-intercept.",
        "zh": "$y$ 截距在 $x = 0$ 处：$y = 3(0) - 6 = -6$。在 $y = mx + b$ 形式中，常数 $b = -6$ 即为 $y$ 截距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The boundary line of an inequality is $2x + y = 8$. What is its $x$-intercept? (give the $x$-value, an integer)",
        "zh": "某不等式的边界直线为 $2x + y = 8$。它的 $x$ 截距是多少？（给出 $x$ 值，整数）"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "(4,0)"
      ],
      "explanation": {
        "en": "The $x$-intercept occurs where $y = 0$: $2x + 0 = 8$, so $x = 4$. Set $y$ (not $x$) to zero to find the $x$-intercept.",
        "zh": "$x$ 截距在 $y = 0$ 处：$2x + 0 = 8$，故 $x = 4$。求 $x$ 截距时令 $y$（而非 $x$）为零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the slope of the boundary line for $y < -\\frac{2}{3}x + 5$? (give a fraction)",
        "zh": "$y < -\\frac{2}{3}x + 5$ 的边界直线的斜率是多少？（给出分数）"
      },
      "answer": "-2/3",
      "accept": [
        "-2 / 3"
      ],
      "explanation": {
        "en": "The boundary is $y = -\\frac{2}{3}x + 5$, already in $y = mx + b$ form, so the slope is the coefficient of $x$: $-\\frac{2}{3}$. Keep the negative sign with the slope.",
        "zh": "边界为 $y = -\\frac{2}{3}x + 5$，已是 $y = mx + b$ 形式，故斜率是 $x$ 的系数：$-\\frac{2}{3}$。斜率要带上负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Is $(0, 0)$ a solution of $4x + 3y \\ge 12$? Answer yes or no.",
        "zh": "$(0, 0)$ 是 $4x + 3y \\ge 12$ 的解吗？回答 yes 或 no。"
      },
      "answer": "no",
      "accept": [
        "n",
        "否"
      ],
      "explanation": {
        "en": "Substitute: $4(0) + 3(0) = 0$, and $0 \\ge 12$ is false, so $(0,0)$ is not a solution — it lies in the unshaded region. A test point that makes the inequality false is outside the solution set.",
        "zh": "代入：$4(0) + 3(0) = 0$，而 $0 \\ge 12$ 不成立，故 $(0,0)$ 不是解——它在未阴影区域内。使不等式不成立的检验点在解集之外。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the system $y > x + 1$ and $y < 5$, is $(2, 4)$ a solution? Answer yes or no.",
        "zh": "对于方程组 $y > x + 1$ 和 $y < 5$，$(2, 4)$ 是解吗？回答 yes 或 no。"
      },
      "answer": "yes",
      "accept": [
        "y",
        "是"
      ],
      "explanation": {
        "en": "Check both: $y > x + 1$ gives $4 > 3$ (true), and $y < 5$ gives $4 < 5$ (true). Both hold, so $(2,4)$ is in the overlap and solves the system.",
        "zh": "两个都检验：$y > x + 1$ 得 $4 > 3$（成立），$y < 5$ 得 $4 < 5$（成立）。两者都成立，故 $(2,4)$ 在重叠区内，是方程组的解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Rewrite $-3y < 6x - 9$ with $y$ isolated. What is the slope of the boundary line? (integer)",
        "zh": "把 $-3y < 6x - 9$ 改写为 $y$ 单独在一边的形式。边界直线的斜率是多少？（整数）"
      },
      "answer": "-2",
      "accept": [
        "-2.0"
      ],
      "explanation": {
        "en": "Divide by $-3$ and flip the inequality: $y > -2x + 3$. The boundary $y = -2x + 3$ has slope $-2$. Dividing by a negative both flips the sign and makes the slope negative.",
        "zh": "除以 $-3$ 并变号：$y > -2x + 3$。边界 $y = -2x + 3$ 的斜率为 $-2$。除以负数既要变号，斜率也变为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $5x - 2y > 10$, the boundary line is $5x - 2y = 10$. What is its $x$-intercept? (give the $x$-value, an integer)",
        "zh": "对于 $5x - 2y > 10$，边界直线为 $5x - 2y = 10$。它的 $x$ 截距是多少？（给出 $x$ 值，整数）"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "(2,0)"
      ],
      "explanation": {
        "en": "Set $y = 0$: $5x - 2(0) = 10$, so $5x = 10$ and $x = 2$. The $x$-intercept is found by making $y$ zero.",
        "zh": "令 $y = 0$：$5x - 2(0) = 10$，故 $5x = 10$，$x = 2$。求 $x$ 截距时令 $y$ 为零。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Is the boundary line of $y \\le \\frac{1}{2}x + 4$ solid or dashed? Answer 'solid' or 'dashed'.",
        "zh": "$y \\le \\frac{1}{2}x + 4$ 的边界直线是实线还是虚线？回答 'solid' 或 'dashed'。"
      },
      "answer": "solid",
      "accept": [
        "实线"
      ],
      "explanation": {
        "en": "The symbol $\\le$ includes points on the boundary, so the line is solid. Only strict inequalities ($<$ or $>$) use a dashed line.",
        "zh": "符号 $\\le$ 包含边界上的点，故为实线。只有严格不等式（$<$ 或 $>$）才用虚线。"
      }
    }
  ],
  "unit-8-functions/what-is-a-function": [
    {
      "type": "mc",
      "question": {
        "en": "Which relation is a function? (each input has exactly one output)",
        "zh": "下列哪个关系是函数？（每个输入恰好对应一个输出）"
      },
      "choices": [
        "$\\{(0,5),(1,5),(2,5)\\}$",
        "$\\{(1,2),(1,3),(2,4)\\}$",
        "$\\{(3,1),(3,2),(4,7)\\}$",
        "$\\{(2,8),(2,9),(5,1)\\}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A relation is a function when no input (x-value) repeats with different outputs. In $\\{(0,5),(1,5),(2,5)\\}$ every x is distinct, so it is a function even though the outputs are all $5$. The tempting idea that repeated outputs break a function is wrong; only repeated inputs with different outputs do.",
        "zh": "当没有一个输入（x 值）重复却对应不同输出时，该关系是函数。在 $\\{(0,5),(1,5),(2,5)\\}$ 中每个 x 都不同，所以它是函数，尽管输出都是 $5$。以为输出重复就不是函数是错误的；只有输入重复且输出不同才不是函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $f(x)=3x-4$, what is $f(2)$?",
        "zh": "已知 $f(x)=3x-4$，求 $f(2)$。"
      },
      "choices": [
        "$-4$",
        "$2$",
        "$10$",
        "$6$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Substitute $x=2$: $f(2)=3(2)-4=6-4=2$. Function notation means replace every $x$ with $2$, then simplify. Answering $6$ forgets to subtract the $4$.",
        "zh": "代入 $x=2$：$f(2)=3(2)-4=6-4=2$。函数记号的含义是把每个 $x$ 换成 $2$，再化简。答 $6$ 是忘了减去 $4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which graph represents a function? (use the vertical line test)",
        "zh": "哪个图象表示函数？（使用垂直线检验）"
      },
      "choices": [
        "A circle $x^2+y^2=9$",
        "A sideways parabola $x=y^2$",
        "The line $y=2x+1$",
        "A vertical line $x=4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A graph is a function if no vertical line crosses it more than once. The line $y=2x+1$ passes this test; the circle, the sideways parabola, and the vertical line all fail because some vertical line hits them twice (or infinitely often). The idea that any smooth curve is a function ignores the vertical line test.",
        "zh": "如果没有一条垂直线与图象相交超过一次，则该图象是函数。直线 $y=2x+1$ 通过检验；圆、横向抛物线和垂直线都不通过，因为某条垂直线与它们相交两次（或无穷多次）。以为任何光滑曲线都是函数忽略了垂直线检验。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $g(x)=x^2-5$, what is $g(-3)$?",
        "zh": "已知 $g(x)=x^2-5$，求 $g(-3)$。"
      },
      "choices": [
        "$-11$",
        "$1$",
        "$-14$",
        "$4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Substitute $x=-3$: $g(-3)=(-3)^2-5=9-5=4$. Squaring a negative gives a positive, so $(-3)^2=9$. Answering $-14$ comes from treating $(-3)^2$ as $-9$.",
        "zh": "代入 $x=-3$：$g(-3)=(-3)^2-5=9-5=4$。负数平方得正数，所以 $(-3)^2=9$。答 $-14$ 是把 $(-3)^2$ 当成了 $-9$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The mapping sends $1\\to a$, $2\\to b$, $3\\to a$, $4\\to c$. Is it a function, and why?",
        "zh": "映射为 $1\\to a$，$2\\to b$，$3\\to a$，$4\\to c$。它是函数吗？为什么？"
      },
      "choices": [
        "Yes, because every input maps to exactly one output",
        "No, because $a$ is used twice",
        "No, because there are four inputs",
        "Yes, because there are three outputs"
      ],
      "answer": 0,
      "explanation": {
        "en": "Each input $1,2,3,4$ has exactly one arrow leaving it, so it is a function. Outputs may repeat ($a$ appears for both $1$ and $3$). The idea that a repeated output disqualifies it confuses the roles of input and output.",
        "zh": "每个输入 $1,2,3,4$ 恰好有一条箭头离开，所以它是函数。输出可以重复（$a$ 同时对应 $1$ 和 $3$）。以为输出重复就不成立混淆了输入和输出的角色。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=\\frac{1}{2}x+3$ and $f(a)=7$, what is $a$?",
        "zh": "若 $f(x)=\\frac{1}{2}x+3$ 且 $f(a)=7$，求 $a$。"
      },
      "choices": [
        "$5$",
        "$8$",
        "$20$",
        "$2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $\\frac{1}{2}a+3=7$, so $\\frac{1}{2}a=4$ and $a=8$. Here we know the output and solve for the input. Answering $5$ solves $a+3=7$, forgetting the coefficient $\\frac{1}{2}$.",
        "zh": "令 $\\frac{1}{2}a+3=7$，则 $\\frac{1}{2}a=4$，$a=8$。这里已知输出，反解输入。答 $5$ 是解了 $a+3=7$，忽略了系数 $\\frac{1}{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A function machine outputs $y=2x+1$. Which statement is correct?",
        "zh": "一个函数机器输出 $y=2x+1$。哪个说法正确？"
      },
      "choices": [
        "$x$ is the output and $y$ is the input",
        "For each $y$ there can be many $x$ values",
        "For each input $x$ there is exactly one output $y$",
        "The rule is not a function"
      ],
      "answer": 2,
      "explanation": {
        "en": "In $y=2x+1$, $x$ is the input; plugging in one $x$ produces exactly one $y$, so it is a function. The idea that $x$ is the output reverses the standard convention that $x$ is independent and $y$ depends on it.",
        "zh": "在 $y=2x+1$ 中，$x$ 是输入；代入一个 $x$ 恰好产生一个 $y$，所以它是函数。以为 $x$ 是输出颠倒了标准约定：$x$ 是自变量，$y$ 依赖于它。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From the table, $f(0)=4,\\ f(1)=4,\\ f(2)=7,\\ f(3)=10$. What is $f(1)$?",
        "zh": "由表可知 $f(0)=4,\\ f(1)=4,\\ f(2)=7,\\ f(3)=10$。求 $f(1)$。"
      },
      "choices": [
        "$1$",
        "$0$",
        "$7$",
        "$4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Reading a table, $f(1)$ is the output paired with input $1$, which is $4$. The number $1$ is the input, not the answer. Answering $1$ reports the input instead of its output.",
        "zh": "读表时，$f(1)$ 是与输入 $1$ 配对的输出，即 $4$。数字 $1$ 是输入，不是答案。答 $1$ 是报告了输入而非其输出。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $h(x)=-2x+5$, which input makes $h(x)=5$?",
        "zh": "已知 $h(x)=-2x+5$，哪个输入使 $h(x)=5$？"
      },
      "choices": [
        "$x=0$",
        "$x=-5$",
        "$x=5$",
        "$x=\\frac{5}{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set $-2x+5=5$, so $-2x=0$ and $x=0$. Only the input $0$ gives output $5$ because it kills the $-2x$ term. Answering $x=5$ confuses the value of the output with the value of the input.",
        "zh": "令 $-2x+5=5$，则 $-2x=0$，$x=0$。只有输入 $0$ 给出输出 $5$，因为它使 $-2x$ 项为零。答 $x=5$ 混淆了输出值与输入值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which set of ordered pairs is NOT a function?",
        "zh": "下列哪组有序对不是函数？"
      },
      "choices": [
        "$\\{(-2,1),(0,1),(3,1)\\}$",
        "$\\{(4,2),(4,9),(6,1)\\}$",
        "$\\{(5,0),(6,0),(7,8)\\}$",
        "$\\{(1,4),(2,5),(3,6)\\}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In $\\{(4,2),(4,9),(6,1)\\}$ the input $4$ is paired with both $2$ and $9$, so one input has two outputs and it is not a function. The other sets never repeat an input. Repeated outputs (like all $1$'s) are fine.",
        "zh": "在 $\\{(4,2),(4,9),(6,1)\\}$ 中，输入 $4$ 同时对应 $2$ 和 $9$，一个输入有两个输出，所以不是函数。其他各组从不重复输入。输出重复（如全是 $1$）是允许的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If $f(x)=x^2$, which is true?",
        "zh": "若 $f(x)=x^2$，下列哪项正确？"
      },
      "choices": [
        "$f(-3)=-9$",
        "$f(3)=-f(3)$",
        "$f(3)=f(-3)$",
        "$f$ is not a function because $9$ has two square roots"
      ],
      "answer": 2,
      "explanation": {
        "en": "$f(3)=9$ and $f(-3)=(-3)^2=9$, so $f(3)=f(-3)$. Two different inputs may share an output and it is still a function. The idea that $f$ fails because $9$ has two square roots confuses the inverse direction with the function itself.",
        "zh": "$f(3)=9$，$f(-3)=(-3)^2=9$，所以 $f(3)=f(-3)$。两个不同的输入可以共用一个输出，仍然是函数。以为 $f$ 因 $9$ 有两个平方根而不成立，是把反方向和函数本身混淆了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Given $f(x)=4x-1$, what is $f(x+2)$?",
        "zh": "已知 $f(x)=4x-1$，求 $f(x+2)$。"
      },
      "choices": [
        "$4x+1$",
        "$4x-3$",
        "$6x-1$",
        "$4x+7$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Replace $x$ with $x+2$: $f(x+2)=4(x+2)-1=4x+8-1=4x+7$. Every $x$ in the rule becomes the whole expression $x+2$. Answering $6x-1$ mistakenly adds the $2$ to the coefficient instead of substituting.",
        "zh": "把 $x$ 换成 $x+2$：$f(x+2)=4(x+2)-1=4x+8-1=4x+7$。规则中的每个 $x$ 都变成整个表达式 $x+2$。答 $6x-1$ 是错误地把 $2$ 加到系数上而非代入。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $f(x)=5x-8$, find $f(4)$. Give an integer.",
        "zh": "已知 $f(x)=5x-8$，求 $f(4)$。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "Substitute $x=4$: $f(4)=5(4)-8=20-8=12$. Multiply before subtracting. Forgetting order of operations and doing $5\\cdot(4-8)$ would give $-20$.",
        "zh": "代入 $x=4$：$f(4)=5(4)-8=20-8=12$。先乘后减。若忽略运算顺序做成 $5\\cdot(4-8)$ 会得到 $-20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $g(x)=x^2+2x$, find $g(-4)$. Give an integer.",
        "zh": "已知 $g(x)=x^2+2x$，求 $g(-4)$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "Substitute $x=-4$: $g(-4)=(-4)^2+2(-4)=16-8=8$. The square is positive, the linear term is negative. Treating $(-4)^2$ as $-16$ would give the wrong sign.",
        "zh": "代入 $x=-4$：$g(-4)=(-4)^2+2(-4)=16-8=8$。平方项为正，一次项为负。把 $(-4)^2$ 当成 $-16$ 会得到错误符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $f(x)=2x+7$, solve $f(x)=15$ for $x$. Give an integer.",
        "zh": "已知 $f(x)=2x+7$，解 $f(x)=15$ 求 $x$。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "x=4",
        "+4"
      ],
      "explanation": {
        "en": "Set $2x+7=15$, so $2x=8$ and $x=4$. Here we know the output $15$ and reverse the rule to find the input. Subtract first, then divide.",
        "zh": "令 $2x+7=15$，则 $2x=8$，$x=4$。这里已知输出 $15$，反解规则求输入。先减后除。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The set $\\{(2,a),(5,7),(8,9)\\}$ must be a function. If instead $x=5$ appears twice, how many inputs can share one output value and still keep it a function? Give an integer for the max number of inputs allowed to map to the single output $7$.",
        "zh": "集合 $\\{(2,a),(5,7),(8,9)\\}$ 必须是函数。若允许多个输入映射到同一个输出值 $7$ 而仍是函数，最多可以有多少个输入映射到这个单一输出 $7$？在只有三个输入 $2,5,8$ 的情况下请填整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Many inputs may share the same output and it is still a function; only repeated inputs with different outputs break it. With three available inputs $2,5,8$, all $3$ could map to $7$. The limit here is the number of inputs, not any rule about outputs.",
        "zh": "多个输入可以共用同一个输出，仍然是函数；只有输入重复且输出不同才不成立。有三个可用输入 $2,5,8$，全部 $3$ 个都可映射到 $7$。限制来自输入的数量，而非任何关于输出的规则。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $f(x)=3x-2$, compute $f(1)+f(2)$. Give an integer.",
        "zh": "已知 $f(x)=3x-2$，计算 $f(1)+f(2)$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$f(1)=3(1)-2=1$ and $f(2)=3(2)-2=4$, so $f(1)+f(2)=1+4=5$. Evaluate each separately, then add. Note $f(1)+f(2)\\ne f(3)=7$, a common slip.",
        "zh": "$f(1)=3(1)-2=1$，$f(2)=3(2)-2=4$，所以 $f(1)+f(2)=1+4=5$。分别求值再相加。注意 $f(1)+f(2)\\ne f(3)=7$，这是常见错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $h(x)=\\frac{x+6}{2}$, find $h(10)$. Give an integer.",
        "zh": "已知 $h(x)=\\frac{x+6}{2}$，求 $h(10)$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "Substitute $x=10$: $h(10)=\\frac{10+6}{2}=\\frac{16}{2}=8$. Add inside the numerator first, then divide the whole thing by $2$.",
        "zh": "代入 $x=10$：$h(10)=\\frac{10+6}{2}=\\frac{16}{2}=8$。先算分子的加法，再把整体除以 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $f(x)=x^2-4x$, find $f(0)$. Give an integer.",
        "zh": "已知 $f(x)=x^2-4x$，求 $f(0)$。请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "0.0"
      ],
      "explanation": {
        "en": "Substitute $x=0$: $f(0)=0^2-4(0)=0-0=0$. Both terms contain $x$, so they vanish at $x=0$. There is no constant term to leave behind.",
        "zh": "代入 $x=0$：$f(0)=0^2-4(0)=0-0=0$。两项都含 $x$，在 $x=0$ 时都为零。没有常数项遗留。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Given $f(x)=6-x$, solve $f(x)=-2$ for $x$. Give an integer.",
        "zh": "已知 $f(x)=6-x$，解 $f(x)=-2$ 求 $x$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "x=8",
        "+8"
      ],
      "explanation": {
        "en": "Set $6-x=-2$, so $-x=-8$ and $x=8$. Watch the sign: subtracting $6$ from both sides gives $-x=-8$, then multiply by $-1$. Answering $-8$ forgets to flip the sign on $x$.",
        "zh": "令 $6-x=-2$，则 $-x=-8$，$x=8$。注意符号：两边减 $6$ 得 $-x=-8$，再乘以 $-1$。答 $-8$ 是忘了改变 $x$ 的符号。"
      }
    }
  ],
  "unit-8-functions/domain-range-graphs": [
    {
      "type": "mc",
      "question": {
        "en": "What is the domain of the relation $\\{(-3,1),(0,4),(2,4),(5,9)\\}$?",
        "zh": "关系 $\\{(-3,1),(0,4),(2,4),(5,9)\\}$ 的定义域是什么？"
      },
      "choices": [
        "$\\{-3,0,2,5\\}$",
        "$\\{1,4,9\\}$",
        "$\\{1,4,4,9\\}$",
        "$\\{-3,1,4,9\\}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The domain is the set of all inputs (x-values): $\\{-3,0,2,5\\}$. The range would be the outputs. Listing $\\{1,4,9\\}$ confuses range with domain.",
        "zh": "定义域是所有输入（x 值）的集合：$\\{-3,0,2,5\\}$。值域才是输出。写 $\\{1,4,9\\}$ 是把值域和定义域弄混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of the relation $\\{(-3,1),(0,4),(2,4),(5,9)\\}$?",
        "zh": "关系 $\\{(-3,1),(0,4),(2,4),(5,9)\\}$ 的值域是什么？"
      },
      "choices": [
        "$\\{-3,0,2,5\\}$",
        "$\\{1,4,9\\}$",
        "$\\{1,4,4,9\\}$",
        "$\\{0,4,9\\}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The range is the set of outputs (y-values), listed once each: $\\{1,4,9\\}$. Even though $4$ appears twice as an output, a set lists it once. Choosing the x-values gives the domain, not the range.",
        "zh": "值域是输出（y 值）的集合，每个只列一次：$\\{1,4,9\\}$。虽然 $4$ 作为输出出现两次，集合只列一次。选 x 值得到的是定义域而非值域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line graphed as $y=2x-1$ extends forever in both directions. What is its domain?",
        "zh": "图象为 $y=2x-1$ 的直线向两个方向无限延伸。它的定义域是什么？"
      },
      "choices": [
        "$x\\ge 0$",
        "$-1\\le x\\le 1$",
        "all real numbers",
        "$y\\ge -1$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A non-vertical line continues left and right without bound, so every x-value is allowed: the domain is all real numbers. The choice $y\\ge -1$ describes an output condition, which is not a domain.",
        "zh": "非垂直的直线向左右无限延伸，所以每个 x 值都允许：定义域是全体实数。选项 $y\\ge -1$ 描述的是输出条件，不是定义域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A graph is a solid curve starting at the point $(2,0)$ and rising to the right forever (like $y=\\sqrt{x-2}$). What is the domain?",
        "zh": "一条实心曲线从点 $(2,0)$ 开始并向右上方无限上升（类似 $y=\\sqrt{x-2}$）。定义域是什么？"
      },
      "choices": [
        "$y\\ge 0$",
        "$x\\ge 0$",
        "all real numbers",
        "$x\\ge 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The curve exists only for x-values from $2$ onward, so the domain is $x\\ge 2$. The output condition $y\\ge 0$ is the range. Starting the domain at $0$ ignores that the graph begins at $x=2$.",
        "zh": "曲线只在 $x$ 从 $2$ 开始及以后存在，所以定义域是 $x\\ge 2$。输出条件 $y\\ge 0$ 是值域。把定义域从 $0$ 开始忽略了图象从 $x=2$ 起始。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A parabola opens upward with vertex at $(1,-4)$ and continues up forever. What is its range?",
        "zh": "一条抛物线开口向上，顶点在 $(1,-4)$，向上无限延伸。它的值域是什么？"
      },
      "choices": [
        "$y\\ge -4$",
        "$x\\ge 1$",
        "$y\\le -4$",
        "all real numbers"
      ],
      "answer": 0,
      "explanation": {
        "en": "The lowest output is the vertex's y-value $-4$, and it rises from there, so the range is $y\\ge -4$. The domain (all real x) is separate. Using $x\\ge 1$ reports a fact about x, not the output values.",
        "zh": "最低输出是顶点的 y 值 $-4$，并由此上升，所以值域是 $y\\ge -4$。定义域（全体实数 x）是另一回事。用 $x\\ge 1$ 报告的是关于 x 的事实，不是输出值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From the table, inputs $t=0,1,2,3$ give heights $h=5,9,13,17$. What is the range shown?",
        "zh": "由表可知，输入 $t=0,1,2,3$ 对应高度 $h=5,9,13,17$。表中所示的值域是什么？"
      },
      "choices": [
        "$\\{0,1,2,3\\}$",
        "$\\{5,9,13,17\\}$",
        "$\\{5,9,13\\}$",
        "$\\{4,4,4\\}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The range is the set of output heights: $\\{5,9,13,17\\}$. The inputs $\\{0,1,2,3\\}$ form the domain. The value $4$ is the common difference between outputs, not an output itself.",
        "zh": "值域是输出高度的集合：$\\{5,9,13,17\\}$。输入 $\\{0,1,2,3\\}$ 构成定义域。数值 $4$ 是输出之间的公差，本身不是输出。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A mapping diagram sends $\\{2,4,6\\}$ on the left to $\\{10\\}$ on the right (all three arrows point to $10$). What is the range?",
        "zh": "映射图把左边的 $\\{2,4,6\\}$ 都映射到右边的 $\\{10\\}$（三条箭头都指向 $10$）。值域是什么？"
      },
      "choices": [
        "$\\{2,4,6\\}$",
        "$\\{2,4,6,10\\}$",
        "$\\{10\\}$",
        "empty set"
      ],
      "answer": 2,
      "explanation": {
        "en": "Only $10$ is ever an output, so the range is $\\{10\\}$, even though three inputs map to it. The left set $\\{2,4,6\\}$ is the domain. A single shared output is perfectly fine.",
        "zh": "唯一的输出是 $10$，所以值域是 $\\{10\\}$，尽管三个输入都映射到它。左边的集合 $\\{2,4,6\\}$ 是定义域。多个输入共用一个输出完全没问题。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y=x^2$ (a standard upward parabola with vertex at the origin) has what range?",
        "zh": "$y=x^2$ 的图象（顶点在原点、开口向上的标准抛物线）的值域是什么？"
      },
      "choices": [
        "all real numbers",
        "$x\\ge 0$",
        "$y>0$",
        "$y\\ge 0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Squaring never gives a negative result and equals $0$ at $x=0$, so outputs satisfy $y\\ge 0$. The domain is all real numbers. Using $y>0$ wrongly excludes the value $0$, which is achieved.",
        "zh": "平方永不为负，且在 $x=0$ 处等于 $0$，所以输出满足 $y\\ge 0$。定义域是全体实数。用 $y>0$ 错误地排除了能取到的 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A closed circle at $(-2,3)$ connects to an open circle at $(4,3)$ by a horizontal segment. What is the domain?",
        "zh": "一条水平线段连接实心圆点 $(-2,3)$ 和空心圆点 $(4,3)$。定义域是什么？"
      },
      "choices": [
        "$-2\\le x<4$",
        "$-2<x\\le 4$",
        "$y=3$",
        "$-2\\le x\\le 4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A closed dot includes its endpoint and an open dot excludes it, so x runs from $-2$ (included) up to $4$ (excluded): $-2\\le x<4$. The value $y=3$ is the constant range, not the domain. Mixing up which endpoint is open flips the inequalities.",
        "zh": "实心点包含端点，空心点不包含，所以 x 从 $-2$（含）到 $4$（不含）：$-2\\le x<4$。$y=3$ 是常数值域，不是定义域。弄反哪个端点是空心会颠倒不等号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which relation has range $\\{5\\}$ but domain with more than one element?",
        "zh": "哪个关系的值域是 $\\{5\\}$ 但定义域含多于一个元素？"
      },
      "choices": [
        "$\\{(5,1),(5,2),(5,3)\\}$",
        "$\\{(1,5),(2,5),(3,5)\\}$",
        "$\\{(1,2),(3,4),(5,6)\\}$",
        "$\\{(5,5)\\}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In $\\{(1,5),(2,5),(3,5)\\}$ the outputs are all $5$ (range $\\{5\\}$) while inputs are $1,2,3$ (domain has three elements). The set $\\{(5,1),(5,2),(5,3)\\}$ has domain $\\{5\\}$ instead and is not even a function.",
        "zh": "在 $\\{(1,5),(2,5),(3,5)\\}$ 中，输出都是 $5$（值域 $\\{5\\}$），而输入是 $1,2,3$（定义域有三个元素）。集合 $\\{(5,1),(5,2),(5,3)\\}$ 的定义域是 $\\{5\\}$，且它甚至不是函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A cost function $C(n)=3n$ gives the cost of $n$ apples, where $n$ is a whole number of apples up to $10$. What is a reasonable domain?",
        "zh": "成本函数 $C(n)=3n$ 表示 $n$ 个苹果的成本，其中 $n$ 是不超过 $10$ 的整数个苹果。合理的定义域是什么？"
      },
      "choices": [
        "all real numbers",
        "$0\\le C\\le 30$",
        "the whole numbers $0$ through $10$",
        "$n\\ge 0$ with $n$ any decimal"
      ],
      "answer": 2,
      "explanation": {
        "en": "You cannot buy a fractional or negative apple, and the cap is $10$, so the domain is the whole numbers $0,1,\\dots,10$. The interval $0\\le C\\le 30$ describes the cost (range), not the input count.",
        "zh": "不能买分数个或负数个苹果，上限是 $10$，所以定义域是整数 $0,1,\\dots,10$。区间 $0\\le C\\le 30$ 描述的是成本（值域），不是输入的数量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y=\\frac{1}{x}$ never touches the y-axis. Which value is excluded from the domain?",
        "zh": "$y=\\frac{1}{x}$ 的图象永不接触 y 轴。定义域中排除哪个值？"
      },
      "choices": [
        "$x=1$",
        "$x=-1$",
        "$y=0$",
        "$x=0$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Division by zero is undefined, so $x=0$ cannot be an input; every other real number works. The value $y=0$ concerns the range (it is never an output), not the domain restriction.",
        "zh": "除以零无意义，所以 $x=0$ 不能作为输入；其他实数都可以。$y=0$ 涉及的是值域（它永不是输出），不是定义域的限制。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the relation $\\{(1,3),(4,3),(7,8),(9,8)\\}$, how many distinct elements are in the range? Give an integer.",
        "zh": "对于关系 $\\{(1,3),(4,3),(7,8),(9,8)\\}$，值域中有多少个不同的元素？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "The outputs are $3,3,8,8$; the distinct values are $3$ and $8$, so the range has $2$ elements. Repeated outputs are counted once in a set. Counting all four pairs would wrongly give $4$.",
        "zh": "输出是 $3,3,8,8$；不同的值是 $3$ 和 $8$，所以值域有 $2$ 个元素。集合中重复的输出只计一次。数全部四对会错误地得到 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A parabola opens downward with vertex at $(3,10)$. What is the maximum output value (the largest number in its range)? Give an integer.",
        "zh": "一条抛物线开口向下，顶点在 $(3,10)$。最大的输出值（值域中的最大数）是多少？请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "For a downward parabola the vertex is the highest point, so the maximum output is its y-value, $10$. The x-coordinate $3$ tells where the max occurs, not the max value itself.",
        "zh": "开口向下的抛物线，顶点是最高点，所以最大输出是它的 y 值 $10$。x 坐标 $3$ 说明最大值出现的位置，不是最大值本身。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The domain of a graph is the interval $-4\\le x\\le 6$. What is the width (length) of this interval? Give an integer.",
        "zh": "某图象的定义域是区间 $-4\\le x\\le 6$。这个区间的宽度（长度）是多少？请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "The length is the right end minus the left end: $6-(-4)=6+4=10$. Subtracting a negative adds. Doing $6-4=2$ drops the sign on $-4$.",
        "zh": "长度是右端减左端：$6-(-4)=6+4=10$。减去负数相当于加。做成 $6-4=2$ 是漏掉了 $-4$ 的负号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A function's outputs are given by $f(x)=x^2$ for the domain $\\{-2,-1,0,1,2\\}$. How many distinct values are in the range? Give an integer.",
        "zh": "函数 $f(x)=x^2$ 在定义域 $\\{-2,-1,0,1,2\\}$ 上取值。值域中有多少个不同的值？请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The outputs are $4,1,0,1,4$; distinct values are $0,1,4$, so the range has $3$ elements. Because squaring pairs $-2$ with $2$ and $-1$ with $1$, five inputs give only three outputs. Counting all five inputs would wrongly give $5$.",
        "zh": "输出是 $4,1,0,1,4$；不同的值是 $0,1,4$，所以值域有 $3$ 个元素。因为平方使 $-2$ 与 $2$、$-1$ 与 $1$ 配对，五个输入只给出三个输出。数全部五个输入会错误地得到 $5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The range of a graph is $-3\\le y\\le 7$. What is the smallest value in the range (the minimum output)? Give an integer.",
        "zh": "某图象的值域是 $-3\\le y\\le 7$。值域中最小的值（最小输出）是多少？请填一个整数。"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "The range runs from $-3$ up to $7$, so the smallest output is $-3$. The minimum is the lower bound of the y-interval. Reporting $7$ gives the maximum instead.",
        "zh": "值域从 $-3$ 到 $7$，所以最小输出是 $-3$。最小值是 y 区间的下界。报告 $7$ 给出的是最大值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $\\{(0,2),(1,5),(2,8),(3,11)\\}$, what is the largest value in the domain? Give an integer.",
        "zh": "对于 $\\{(0,2),(1,5),(2,8),(3,11)\\}$，定义域中最大的值是多少？请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "The domain is the inputs $\\{0,1,2,3\\}$, whose largest value is $3$. The number $11$ is the largest output (in the range), not the domain. Keep inputs and outputs separate.",
        "zh": "定义域是输入 $\\{0,1,2,3\\}$，其中最大值是 $3$。数字 $11$ 是最大的输出（在值域中），不是定义域。要把输入和输出分开。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A graph covers all x from $-5$ to $5$ inclusive. How many integer values are in this domain? Give an integer.",
        "zh": "某图象覆盖从 $-5$ 到 $5$（含两端）的所有 x。这个定义域中有多少个整数值？请填一个整数。"
      },
      "answer": "11",
      "accept": [
        "11.0",
        "+11"
      ],
      "explanation": {
        "en": "Count $-5,-4,\\dots,4,5$: that is $5-(-5)+1=11$ integers. Remember to add $1$ to include both endpoints. Doing $5-(-5)=10$ forgets to count both ends.",
        "zh": "数 $-5,-4,\\dots,4,5$：即 $5-(-5)+1=11$ 个整数。记得加 $1$ 以包含两端。做成 $5-(-5)=10$ 是漏数了两个端点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A horizontal line $y=4$ is graphed across the whole plane. Its range contains how many distinct values? Give an integer.",
        "zh": "水平线 $y=4$ 画满整个平面。它的值域含多少个不同的值？请填一个整数。"
      },
      "answer": "1",
      "accept": [
        "1.0",
        "+1"
      ],
      "explanation": {
        "en": "Every point on $y=4$ has output $4$, so the range is the single value $\\{4\\}$: one element. The domain is all real numbers, but the range collapses to just $4$. Confusing the wide domain with the range would wrongly suggest many values.",
        "zh": "$y=4$ 上每个点的输出都是 $4$，所以值域是单一值 $\\{4\\}$：一个元素。定义域是全体实数，但值域只剩 $4$。把很宽的定义域与值域混淆会错误地以为有很多值。"
      }
    }
  ],
  "unit-8-functions/function-behavior-and-rate-of-change": [
    {
      "type": "mc",
      "question": {
        "en": "For $f(x)=3x+2$, what is the average rate of change from $x=1$ to $x=5$?",
        "zh": "对于 $f(x)=3x+2$，从 $x=1$ 到 $x=5$ 的平均变化率是多少？"
      },
      "choices": [
        "$3$",
        "$4$",
        "$14$",
        "$\\frac{1}{3}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Average rate of change is $\\frac{f(5)-f(1)}{5-1}=\\frac{17-5}{4}=\\frac{12}{4}=3$. For a line, this always equals the slope. Answering $4$ divides but forgets to compute the output difference correctly.",
        "zh": "平均变化率是 $\\frac{f(5)-f(1)}{5-1}=\\frac{17-5}{4}=\\frac{12}{4}=3$。对于直线，它总等于斜率。答 $4$ 是相除但没有正确计算输出的差。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x)=x^2$, what is the average rate of change from $x=2$ to $x=4$?",
        "zh": "对于 $f(x)=x^2$，从 $x=2$ 到 $x=4$ 的平均变化率是多少？"
      },
      "choices": [
        "$2$",
        "$6$",
        "$8$",
        "$12$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{f(4)-f(2)}{4-2}=\\frac{16-4}{2}=\\frac{12}{2}=6$. Even for a curve, average rate of change is rise over run between the two points. Answering $12$ forgets to divide by the run $4-2=2$.",
        "zh": "$\\frac{f(4)-f(2)}{4-2}=\\frac{16-4}{2}=\\frac{12}{2}=6$。即使是曲线，平均变化率也是两点间的纵向变化除以横向变化。答 $12$ 是忘了除以横向变化 $4-2=2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A graph rises from left up to a peak at $x=2$, then falls. On which interval is the function increasing?",
        "zh": "某图象从左上升到 $x=2$ 处的峰值，然后下降。函数在哪个区间上递增？"
      },
      "choices": [
        "$x>2$",
        "everywhere",
        "$x<2$",
        "nowhere"
      ],
      "answer": 2,
      "explanation": {
        "en": "The graph goes up as $x$ increases toward the peak, so it is increasing for $x<2$ and decreasing for $x>2$. Increasing means the y-values rise as you move right. Choosing $x>2$ describes where it falls, not rises.",
        "zh": "随着 $x$ 增大趋向峰值，图象上升，所以在 $x<2$ 时递增，$x>2$ 时递减。递增指向右移动时 y 值上升。选 $x>2$ 描述的是下降处，不是上升处。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line crosses the x-axis at $(4,0)$ and the y-axis at $(0,-8)$. What is its y-intercept?",
        "zh": "一条直线交 x 轴于 $(4,0)$，交 y 轴于 $(0,-8)$。它的 y 截距是多少？"
      },
      "choices": [
        "$4$",
        "$8$",
        "$0$",
        "$-8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The y-intercept is the y-value where the graph meets the y-axis (where $x=0$), which is $-8$. The point $(4,0)$ is the x-intercept. Choosing $4$ swaps the x-intercept for the y-intercept.",
        "zh": "y 截距是图象与 y 轴相交处（$x=0$）的 y 值，即 $-8$。点 $(4,0)$ 是 x 截距。选 $4$ 是把 x 截距和 y 截距弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x)=x^2-6x+5$, at which x-values does the graph cross the x-axis (its x-intercepts)?",
        "zh": "对于 $f(x)=x^2-6x+5$，图象在哪些 x 值处与 x 轴相交（其 x 截距）？"
      },
      "choices": [
        "$x=1$ and $x=5$",
        "$x=-1$ and $x=-5$",
        "$x=5$ only",
        "$x=0$ and $x=5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set $y=0$: $x^2-6x+5=(x-1)(x-5)=0$, so $x=1$ or $x=5$. X-intercepts are found by setting the output to zero. The negative roots would come from factoring $(x+1)(x+5)$, which multiplies to $+5$ but gives $+6x$, not $-6x$.",
        "zh": "令 $y=0$：$x^2-6x+5=(x-1)(x-5)=0$，所以 $x=1$ 或 $x=5$。x 截距通过令输出为零求得。负根来自 $(x+1)(x+5)$，它虽乘得 $+5$ 但给出 $+6x$，而非 $-6x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A downward parabola has vertex at $(3,12)$. What is the maximum value of the function?",
        "zh": "一条开口向下的抛物线顶点在 $(3,12)$。函数的最大值是多少？"
      },
      "choices": [
        "$3$",
        "$12$",
        "$0$",
        "$-12$"
      ],
      "answer": 1,
      "explanation": {
        "en": "For a downward parabola the vertex is the highest point, so the maximum function value is its y-coordinate $12$. The x-coordinate $3$ tells where the maximum occurs, not the maximum itself.",
        "zh": "开口向下的抛物线，顶点是最高点，所以函数最大值是它的 y 坐标 $12$。x 坐标 $3$ 说明最大值出现的位置，不是最大值本身。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car's distance (miles) is $d(t)=50t$ where $t$ is hours. What is the average rate of change of distance from $t=2$ to $t=6$, and what does it mean?",
        "zh": "汽车行驶距离（英里）为 $d(t)=50t$，其中 $t$ 是小时。距离从 $t=2$ 到 $t=6$ 的平均变化率是多少，它表示什么？"
      },
      "choices": [
        "$200$, total miles",
        "$4$, hours elapsed",
        "$50$, miles per hour (speed)",
        "$300$, miles per hour"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\frac{d(6)-d(2)}{6-2}=\\frac{300-100}{4}=\\frac{200}{4}=50$ miles per hour, which is the speed. Average rate of change of distance over time is speed. Answering $200$ gives the change in distance, not the rate.",
        "zh": "$\\frac{d(6)-d(2)}{6-2}=\\frac{300-100}{4}=\\frac{200}{4}=50$ 英里每小时，即速度。距离对时间的平均变化率就是速度。答 $200$ 给出的是距离的变化量，不是变化率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A graph is decreasing on $x<0$ and increasing on $x>0$. What happens at $x=0$?",
        "zh": "某图象在 $x<0$ 时递减，在 $x>0$ 时递增。在 $x=0$ 处发生什么？"
      },
      "choices": [
        "a maximum",
        "an x-intercept",
        "nothing special",
        "a minimum"
      ],
      "answer": 3,
      "explanation": {
        "en": "The function falls, then rises, so it turns around at a lowest point: a minimum at $x=0$. A maximum would occur where it rises then falls. Being a minimum does not require the point to be on the x-axis, so it is not necessarily an x-intercept.",
        "zh": "函数先降后升，所以在最低点转向：$x=0$ 处是极小值。极大值出现在先升后降处。极小值不要求该点在 x 轴上，所以不一定是 x 截距。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "From a table, $f(0)=10,\\ f(3)=4$. What is the average rate of change from $x=0$ to $x=3$?",
        "zh": "由表可知 $f(0)=10,\\ f(3)=4$。从 $x=0$ 到 $x=3$ 的平均变化率是多少？"
      },
      "choices": [
        "$-2$",
        "$-6$",
        "$6$",
        "$2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{f(3)-f(0)}{3-0}=\\frac{4-10}{3}=\\frac{-6}{3}=-2$. The rate is negative because the output decreases. Answering $2$ drops the sign; answering $-6$ forgets to divide by the run of $3$.",
        "zh": "$\\frac{f(3)-f(0)}{3-0}=\\frac{4-10}{3}=\\frac{-6}{3}=-2$。因输出减少，变化率为负。答 $2$ 是漏掉负号；答 $-6$ 是忘了除以横向变化 $3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which describes where a parabola $y=x^2-9$ is positive (above the x-axis)?",
        "zh": "抛物线 $y=x^2-9$ 在何处为正（在 x 轴上方）？"
      },
      "choices": [
        "$-3<x<3$",
        "$x<-3$ or $x>3$",
        "all $x$",
        "$x>0$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The x-intercepts are $x=\\pm 3$, and this upward parabola is below the axis between them and above outside them, so $y>0$ when $x<-3$ or $x>3$. Choosing $-3<x<3$ describes where it is negative, the opposite region.",
        "zh": "x 截距是 $x=\\pm 3$，这条开口向上的抛物线在两截距之间位于轴下方、在两侧位于轴上方，所以当 $x<-3$ 或 $x>3$ 时 $y>0$。选 $-3<x<3$ 描述的是它为负的区域，正好相反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $f(x)=2^x$, compare the average rate of change on $[0,1]$ versus $[1,2]$.",
        "zh": "对于 $f(x)=2^x$，比较在 $[0,1]$ 与 $[1,2]$ 上的平均变化率。"
      },
      "choices": [
        "They are equal",
        "The rate on $[0,1]$ is larger",
        "The rate on $[1,2]$ is larger",
        "Both are zero"
      ],
      "answer": 2,
      "explanation": {
        "en": "On $[0,1]$: $\\frac{2-1}{1}=1$; on $[1,2]$: $\\frac{4-2}{1}=2$. The exponential grows faster later, so $[1,2]$ has the larger rate. Assuming the rates are equal treats the curve as if it were a straight line.",
        "zh": "在 $[0,1]$：$\\frac{2-1}{1}=1$；在 $[1,2]$：$\\frac{4-2}{1}=2$。指数函数后段增长更快，所以 $[1,2]$ 的变化率更大。以为两者相等是把曲线当成了直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A line has a constant average rate of change of $-4$. What is true about the function?",
        "zh": "一条直线的平均变化率恒为 $-4$。关于该函数下列哪项正确？"
      },
      "choices": [
        "It is increasing",
        "Its slope is $4$",
        "It has a maximum",
        "Its slope is $-4$ and it is decreasing"
      ],
      "answer": 3,
      "explanation": {
        "en": "For a line the average rate of change equals the slope, so the slope is $-4$; a negative slope means the function decreases. A negative rate cannot describe an increasing function, and a straight line has no maximum.",
        "zh": "对于直线，平均变化率等于斜率，所以斜率是 $-4$；负斜率意味着函数递减。负的变化率不可能描述递增函数，而直线没有最大值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=4x-1$, find the average rate of change from $x=2$ to $x=7$. Give an integer.",
        "zh": "对于 $f(x)=4x-1$，求从 $x=2$ 到 $x=7$ 的平均变化率。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$\\frac{f(7)-f(2)}{7-2}=\\frac{27-7}{5}=\\frac{20}{5}=4$. For a line this always equals the slope $4$, no matter which interval you pick.",
        "zh": "$\\frac{f(7)-f(2)}{7-2}=\\frac{27-7}{5}=\\frac{20}{5}=4$。对于直线，无论取哪个区间，它总等于斜率 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=x^2+1$, find the average rate of change from $x=1$ to $x=3$. Give an integer.",
        "zh": "对于 $f(x)=x^2+1$，求从 $x=1$ 到 $x=3$ 的平均变化率。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$\\frac{f(3)-f(1)}{3-1}=\\frac{10-2}{2}=\\frac{8}{2}=4$. Compute the two outputs, subtract, then divide by the run of $2$. Forgetting to divide would give $8$.",
        "zh": "$\\frac{f(3)-f(1)}{3-1}=\\frac{10-2}{2}=\\frac{8}{2}=4$。算出两个输出，相减，再除以横向变化 $2$。忘记相除会得到 $8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A tank drains so that volume is $V(t)=100-8t$ liters after $t$ minutes. What is the average rate of change of volume per minute? Give an integer (include the sign).",
        "zh": "水箱排水，$t$ 分钟后体积为 $V(t)=100-8t$ 升。每分钟体积的平均变化率是多少？请填一个整数（含符号）。"
      },
      "answer": "-8",
      "accept": [
        "-8.0"
      ],
      "explanation": {
        "en": "The volume decreases by $8$ liters each minute, so the rate is $-8$ liters per minute; for this line the rate equals the coefficient of $t$. A positive $8$ would wrongly say the tank is filling.",
        "zh": "体积每分钟减少 $8$ 升，所以变化率是 $-8$ 升每分钟；对于这条直线，变化率等于 $t$ 的系数。正的 $8$ 会错误地表示水箱在注水。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A parabola opens upward with vertex at $(-2,-5)$. What is the minimum value of the function? Give an integer.",
        "zh": "一条抛物线开口向上，顶点在 $(-2,-5)$。函数的最小值是多少？请填一个整数。"
      },
      "answer": "-5",
      "accept": [
        "-5.0"
      ],
      "explanation": {
        "en": "For an upward parabola the vertex is the lowest point, so the minimum output is its y-value $-5$. The x-coordinate $-2$ says where the minimum occurs, not the minimum value.",
        "zh": "开口向上的抛物线，顶点是最低点，所以最小输出是它的 y 值 $-5$。x 坐标 $-2$ 说明最小值出现的位置，不是最小值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A line passes through $(0,6)$ and $(3,0)$. What is its y-intercept? Give an integer.",
        "zh": "一条直线过 $(0,6)$ 和 $(3,0)$。它的 y 截距是多少？请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "The y-intercept is the y-value where $x=0$, which is $6$ from the point $(0,6)$. The point $(3,0)$ is the x-intercept. Reporting $3$ would confuse the two intercepts.",
        "zh": "y 截距是 $x=0$ 处的 y 值，由点 $(0,6)$ 得 $6$。点 $(3,0)$ 是 x 截距。报告 $3$ 会混淆两个截距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "From a table, $f(1)=20$ and $f(6)=5$. What is the average rate of change from $x=1$ to $x=6$? Give an integer (include the sign).",
        "zh": "由表可知 $f(1)=20$，$f(6)=5$。从 $x=1$ 到 $x=6$ 的平均变化率是多少？请填一个整数（含符号）。"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "$\\frac{f(6)-f(1)}{6-1}=\\frac{5-20}{5}=\\frac{-15}{5}=-3$. Keep the order consistent: later output minus earlier output over the run. Reversing to $\\frac{20-5}{6-1}$ gives the wrong sign.",
        "zh": "$\\frac{f(6)-f(1)}{6-1}=\\frac{5-20}{5}=\\frac{-15}{5}=-3$。保持顺序一致：后输出减前输出，再除以横向变化。颠倒成 $\\frac{20-5}{6-1}$ 会得到错误符号。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $y=x^2-4x$ crosses the x-axis at two points. What is the larger x-intercept? Give an integer.",
        "zh": "$y=x^2-4x$ 的图象在两点处与 x 轴相交。较大的 x 截距是多少？请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Set $y=0$: $x^2-4x=x(x-4)=0$, so $x=0$ or $x=4$; the larger is $4$. Factor out the common $x$ rather than dividing it away, which would lose the root $x=0$.",
        "zh": "令 $y=0$：$x^2-4x=x(x-4)=0$，所以 $x=0$ 或 $x=4$；较大者是 $4$。要提取公因式 $x$，而不是把它约掉，否则会丢失根 $x=0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $f(x)=x^2$, the average rate of change on $[a,a]$ would divide by zero. Compute instead the average rate of change on $[3,5]$. Give an integer.",
        "zh": "对于 $f(x)=x^2$，在 $[a,a]$ 上的平均变化率会除以零。改为计算在 $[3,5]$ 上的平均变化率。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$\\frac{f(5)-f(3)}{5-3}=\\frac{25-9}{2}=\\frac{16}{2}=8$. The run must be nonzero, which is why a single point gives no rate. Forgetting to divide by the run $2$ would give $16$.",
        "zh": "$\\frac{f(5)-f(3)}{5-3}=\\frac{25-9}{2}=\\frac{16}{2}=8$。横向变化必须非零，这正是单点没有变化率的原因。忘记除以横向变化 $2$ 会得到 $16$。"
      }
    }
  ],
  "unit-9-sequences/arithmetic-sequences": [
    {
      "type": "mc",
      "question": {
        "en": "Find the common difference of the arithmetic sequence $3, 7, 11, 15, \\dots$",
        "zh": "求等差数列 $3, 7, 11, 15, \\dots$ 的公差。"
      },
      "choices": [
        "$4$",
        "$3$",
        "$-4$",
        "$7$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract any term from the next: $7 - 3 = 4$, $11 - 7 = 4$. The common difference is $4$. Reading off the first term instead of a difference gives the wrong value.",
        "zh": "用后一项减前一项：$7 - 3 = 4$，$11 - 7 = 4$。公差为 $4$。若误把首项当作公差就会出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An arithmetic sequence has first term $a_1 = 2$ and common difference $d = 5$. Find $a_{10}$.",
        "zh": "某等差数列首项 $a_1 = 2$，公差 $d = 5$。求 $a_{10}$。"
      },
      "choices": [
        "$52$",
        "$47$",
        "$50$",
        "$45$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use $a_n = a_1 + (n-1)d = 2 + (10-1)(5) = 2 + 45 = 47$. Multiplying by $n$ instead of $n-1$ overshoots by one step.",
        "zh": "用 $a_n = a_1 + (n-1)d = 2 + (10-1)(5) = 2 + 45 = 47$。若用 $n$ 而不是 $n-1$ 相乘就会多算一步。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which explicit formula generates the sequence $5, 8, 11, 14, \\dots$?",
        "zh": "下列哪个通项公式能生成数列 $5, 8, 11, 14, \\dots$？"
      },
      "choices": [
        "$a_n = 5n$",
        "$a_n = 3n + 5$",
        "$a_n = 3n + 2$",
        "$a_n = 5n + 3$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $a_1 = 5$, $d = 3$, so $a_n = 5 + 3(n-1) = 3n + 2$. Check: $a_1 = 5$, $a_2 = 8$. Forgetting to distribute $3(n-1)$ leaves the constant as $5$ instead of $2$.",
        "zh": "此处 $a_1 = 5$，$d = 3$，故 $a_n = 5 + 3(n-1) = 3n + 2$。验证：$a_1 = 5$，$a_2 = 8$。若忘记展开 $3(n-1)$，常数项会错写成 $5$ 而非 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is a recursive definition for $2, 6, 10, 14, \\dots$?",
        "zh": "下列哪个是数列 $2, 6, 10, 14, \\dots$ 的递推定义？"
      },
      "choices": [
        "$a_n = 4n - 2$",
        "$a_1 = 4,\\ a_n = a_{n-1} + 2$",
        "$a_1 = 2,\\ a_n = 4 a_{n-1}$",
        "$a_1 = 2,\\ a_n = a_{n-1} + 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A recursive rule states the first term and how to get each term from the previous one: start at $2$, add $4$. The explicit formula $4n-2$ is a valid rule but is not recursive.",
        "zh": "递推定义要给出首项以及由前一项得到后一项的方法：从 $2$ 开始，每次加 $4$。通项公式 $4n-2$ 虽正确，但不是递推形式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The $n$th term of a sequence is $a_n = 7n - 4$. What is the first term?",
        "zh": "某数列的通项为 $a_n = 7n - 4$。首项是多少？"
      },
      "choices": [
        "$3$",
        "$7$",
        "$-4$",
        "$11$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Substitute $n = 1$: $a_1 = 7(1) - 4 = 3$. Taking the constant $-4$ as the first term skips evaluating at $n = 1$.",
        "zh": "代入 $n = 1$：$a_1 = 7(1) - 4 = 3$。若直接把常数 $-4$ 当作首项，就是漏掉了在 $n = 1$ 处求值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the common difference of $20, 17, 14, 11, \\dots$",
        "zh": "求数列 $20, 17, 14, 11, \\dots$ 的公差。"
      },
      "choices": [
        "$3$",
        "$-3$",
        "$-17$",
        "$17$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$17 - 20 = -3$; each term drops by $3$, so $d = -3$. A decreasing sequence has a negative common difference; dropping the sign is the classic error.",
        "zh": "$17 - 20 = -3$；每项减少 $3$，故 $d = -3$。递减数列的公差为负，漏掉负号是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the sequence $4, 9, 14, 19, \\dots$, which term equals $44$?",
        "zh": "对于数列 $4, 9, 14, 19, \\dots$，哪一项等于 $44$？"
      },
      "choices": [
        "the 8th term",
        "the 10th term",
        "the 9th term",
        "the 11th term"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $a_1 = 4$, $d = 5$, so $44 = 4 + (n-1)(5)$ gives $40 = 5(n-1)$, $n-1 = 8$, $n = 9$. Forgetting the $-1$ and solving $44 = 4 + 5n$ wrongly gives $n = 8$.",
        "zh": "此处 $a_1 = 4$，$d = 5$，故 $44 = 4 + (n-1)(5)$，得 $40 = 5(n-1)$，$n-1 = 8$，$n = 9$。若忘掉 $-1$ 而解 $44 = 4 + 5n$ 会错得 $n = 8$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A theater has $18$ seats in row 1 and adds $3$ seats each following row. How many seats are in row 10?",
        "zh": "某剧院第 1 排有 $18$ 个座位，此后每排增加 $3$ 个。第 10 排有多少座位？"
      },
      "choices": [
        "$48$",
        "$51$",
        "$30$",
        "$45$"
      ],
      "answer": 3,
      "explanation": {
        "en": "This is arithmetic with $a_1 = 18$, $d = 3$: $a_{10} = 18 + (10-1)(3) = 18 + 27 = 45$. Using $10$ rather than $9$ increments adds one row too many.",
        "zh": "这是等差数列，$a_1 = 18$，$d = 3$：$a_{10} = 18 + (10-1)(3) = 18 + 27 = 45$。若用 $10$ 而非 $9$ 个增量，就多加了一排。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An arithmetic sequence has $a_2 = 11$ and $a_6 = 27$. Find the common difference.",
        "zh": "某等差数列 $a_2 = 11$，$a_6 = 27$。求公差。"
      },
      "choices": [
        "$4$",
        "$16$",
        "$8$",
        "$3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "From $a_2$ to $a_6$ is $4$ steps: $d = \\frac{27 - 11}{6 - 2} = \\frac{16}{4} = 4$. Dividing by the term values instead of the gap in indices gives a wrong number.",
        "zh": "从 $a_2$ 到 $a_6$ 相差 $4$ 步：$d = \\frac{27 - 11}{6 - 2} = \\frac{16}{4} = 4$。若不除以下标之差就会算错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which recursive rule matches the explicit formula $a_n = 6n + 1$?",
        "zh": "下列哪个递推规则与通项公式 $a_n = 6n + 1$ 一致？"
      },
      "choices": [
        "$a_1 = 6,\\ a_n = a_{n-1} + 1$",
        "$a_1 = 7,\\ a_n = a_{n-1} + 6$",
        "$a_1 = 1,\\ a_n = a_{n-1} + 6$",
        "$a_1 = 7,\\ a_n = 6 a_{n-1}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The common difference is the coefficient $6$, and $a_1 = 6(1) + 1 = 7$. So start at $7$ and add $6$. Reading $1$ as the first term ignores the $+1$ evaluated at $n=1$.",
        "zh": "公差是系数 $6$，且 $a_1 = 6(1) + 1 = 7$。故从 $7$ 开始，每次加 $6$。若把 $1$ 当首项，就忽略了在 $n=1$ 处的 $+1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these sequences is NOT arithmetic?",
        "zh": "下列哪个数列不是等差数列？"
      },
      "choices": [
        "$1, 4, 7, 10, \\dots$",
        "$10, 5, 0, -5, \\dots$",
        "$2, 4, 8, 16, \\dots$",
        "$-3, -1, 1, 3, \\dots$"
      ],
      "answer": 2,
      "explanation": {
        "en": "In $2, 4, 8, 16$ each term is doubled (a constant ratio, not a constant difference), so it is geometric, not arithmetic. The other three add a fixed amount each step.",
        "zh": "在 $2, 4, 8, 16$ 中每项翻倍（是固定的比而非固定的差），所以它是等比数列而非等差数列。其余三个都是每步加固定值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the sequence $6, \\_\\_, 20, \\dots$ (arithmetic), find the missing middle term.",
        "zh": "在等差数列 $6, \\_\\_, 20, \\dots$ 中，求中间缺失的项。"
      },
      "choices": [
        "$14$",
        "$12$",
        "$26$",
        "$13$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The missing term is the average of its neighbors: $\\frac{6 + 20}{2} = 13$. Guessing $14$ assumes a difference of $8$ without checking that $6, 14, 22$ would not end at $20$.",
        "zh": "中间项是两边的平均数：$\\frac{6 + 20}{2} = 13$。若猜 $14$ 就是假设公差为 $8$，但 $6, 14, 22$ 并不会终于 $20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence has $a_1 = 7$ and $d = 3$. Find $a_{20}$. Give an integer.",
        "zh": "某等差数列 $a_1 = 7$，$d = 3$。求 $a_{20}$。请填一个整数。"
      },
      "answer": "64",
      "accept": [
        "64.0",
        "+64"
      ],
      "explanation": {
        "en": "$a_{20} = 7 + (20-1)(3) = 7 + 57 = 64$. Use $n - 1 = 19$ steps, not $20$.",
        "zh": "$a_{20} = 7 + (20-1)(3) = 7 + 57 = 64$。要用 $n - 1 = 19$ 个步长，而不是 $20$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the common difference of $-1, -4, -7, -10, \\dots$ Give an integer.",
        "zh": "求数列 $-1, -4, -7, -10, \\dots$ 的公差。请填一个整数。"
      },
      "answer": "-3",
      "accept": [
        "-3.0"
      ],
      "explanation": {
        "en": "$-4 - (-1) = -3$. The terms decrease, so $d$ is negative.",
        "zh": "$-4 - (-1) = -3$。各项递减，故公差为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the sequence with $a_1 = 4$ and $d = 6$, which term number $n$ equals $58$? Give an integer.",
        "zh": "对于 $a_1 = 4$、$d = 6$ 的数列，第几项 $n$ 等于 $58$？请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "n=10"
      ],
      "explanation": {
        "en": "$58 = 4 + (n-1)(6)$ gives $54 = 6(n-1)$, so $n - 1 = 9$ and $n = 10$.",
        "zh": "$58 = 4 + (n-1)(6)$ 得 $54 = 6(n-1)$，故 $n - 1 = 9$，$n = 10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence has $a_1 = 100$ and $d = -7$. Find $a_8$. Give an integer.",
        "zh": "某等差数列 $a_1 = 100$，$d = -7$。求 $a_8$。请填一个整数。"
      },
      "answer": "51",
      "accept": [
        "51.0",
        "+51"
      ],
      "explanation": {
        "en": "$a_8 = 100 + (8-1)(-7) = 100 - 49 = 51$. Seven steps of $-7$ subtract $49$.",
        "zh": "$a_8 = 100 + (8-1)(-7) = 100 - 49 = 51$。七个 $-7$ 的步长共减去 $49$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sequence is defined by $a_1 = 3$ and $a_n = a_{n-1} + 5$. Find $a_4$. Give an integer.",
        "zh": "数列定义为 $a_1 = 3$，$a_n = a_{n-1} + 5$。求 $a_4$。请填一个整数。"
      },
      "answer": "18",
      "accept": [
        "18.0",
        "+18"
      ],
      "explanation": {
        "en": "Build up: $a_2 = 8$, $a_3 = 13$, $a_4 = 18$. Three additions of $5$ from $a_1$ give $3 + 15 = 18$.",
        "zh": "逐项推：$a_2 = 8$，$a_3 = 13$，$a_4 = 18$。从 $a_1$ 起加三次 $5$ 得 $3 + 15 = 18$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence has $a_1 = 3$ and $a_5 = 23$. Find the common difference $d$. Give an integer.",
        "zh": "某等差数列 $a_1 = 3$，$a_5 = 23$。求公差 $d$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "From $a_1$ to $a_5$ is $4$ steps: $d = \\frac{23 - 3}{5 - 1} = \\frac{20}{4} = 5$.",
        "zh": "从 $a_1$ 到 $a_5$ 共 $4$ 步：$d = \\frac{23 - 3}{5 - 1} = \\frac{20}{4} = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An arithmetic sequence has $a_{10} = 40$ and $d = 4$. Find the first term $a_1$. Give an integer.",
        "zh": "某等差数列 $a_{10} = 40$，$d = 4$。求首项 $a_1$。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "$a_{10} = a_1 + (10-1)(4)$, so $40 = a_1 + 36$ and $a_1 = 4$. Subtract the $9$ steps of $4$, not $10$.",
        "zh": "$a_{10} = a_1 + (10-1)(4)$，即 $40 = a_1 + 36$，故 $a_1 = 4$。要减去 $9$ 个（不是 $10$ 个）$4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The bottom row of a stack has $15$ logs and each row up has $2$ fewer. How many logs are in row 6 (counting from the bottom)? Give an integer.",
        "zh": "一堆木头最底排有 $15$ 根，每往上一排少 $2$ 根。从底往上数第 6 排有多少根？请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Arithmetic with $a_1 = 15$, $d = -2$: $a_6 = 15 + (6-1)(-2) = 15 - 10 = 5$.",
        "zh": "等差数列 $a_1 = 15$，$d = -2$：$a_6 = 15 + (6-1)(-2) = 15 - 10 = 5$。"
      }
    }
  ],
  "unit-9-sequences/geometric-sequences": [
    {
      "type": "mc",
      "question": {
        "en": "Find the common ratio of the geometric sequence $2, 6, 18, 54, \\dots$",
        "zh": "求等比数列 $2, 6, 18, 54, \\dots$ 的公比。"
      },
      "choices": [
        "$3$",
        "$4$",
        "$2$",
        "$6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Divide any term by the previous one: $\\frac{6}{2} = 3$, $\\frac{18}{6} = 3$. The common ratio is $3$. Subtracting terms ($6-2=4$) treats it as arithmetic by mistake.",
        "zh": "用后一项除以前一项：$\\frac{6}{2} = 3$，$\\frac{18}{6} = 3$。公比为 $3$。若用相减（$6-2=4$）就误当作等差数列了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric sequence has first term $a_1 = 5$ and common ratio $r = 2$. Find $a_4$.",
        "zh": "某等比数列首项 $a_1 = 5$，公比 $r = 2$。求 $a_4$。"
      },
      "choices": [
        "$80$",
        "$40$",
        "$20$",
        "$11$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use $a_n = a_1 r^{n-1} = 5 \\cdot 2^{4-1} = 5 \\cdot 8 = 40$. Using $r^n = 2^4 = 16$ instead of $r^{n-1}$ overshoots by one factor.",
        "zh": "用 $a_n = a_1 r^{n-1} = 5 \\cdot 2^{4-1} = 5 \\cdot 8 = 40$。若用 $r^n = 2^4 = 16$ 而不是 $r^{n-1}$，就多乘了一个因子。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which explicit formula generates the sequence $3, 6, 12, 24, \\dots$?",
        "zh": "下列哪个通项公式能生成数列 $3, 6, 12, 24, \\dots$？"
      },
      "choices": [
        "$a_n = 3n$",
        "$a_n = 2 \\cdot 3^{n-1}$",
        "$a_n = 3 \\cdot 2^{n-1}$",
        "$a_n = 3 \\cdot 2^{n}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $a_1 = 3$, $r = 2$, so $a_n = 3 \\cdot 2^{n-1}$. Check: $a_1 = 3 \\cdot 2^0 = 3$. Writing $2^n$ instead of $2^{n-1}$ gives $6$ at $n=1$, which is wrong.",
        "zh": "此处 $a_1 = 3$，$r = 2$，故 $a_n = 3 \\cdot 2^{n-1}$。验证：$a_1 = 3 \\cdot 2^0 = 3$。若写成 $2^n$，在 $n=1$ 时会得 $6$，是错的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is a recursive definition for $1, 3, 9, 27, \\dots$?",
        "zh": "下列哪个是数列 $1, 3, 9, 27, \\dots$ 的递推定义？"
      },
      "choices": [
        "$a_n = 3^{n-1}$",
        "$a_1 = 3,\\ a_n = 3 a_{n-1}$",
        "$a_1 = 1,\\ a_n = a_{n-1} + 3$",
        "$a_1 = 1,\\ a_n = 3 a_{n-1}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A recursive rule gives the first term and multiplies by the ratio each step: start at $1$, multiply by $3$. The formula $3^{n-1}$ is explicit, not recursive; adding $3$ would make it arithmetic.",
        "zh": "递推定义要给出首项，并每步乘以公比：从 $1$ 开始，每次乘 $3$。公式 $3^{n-1}$ 是通项而非递推；若改成加 $3$ 就变成等差数列了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The $n$th term of a sequence is $a_n = 2 \\cdot 3^{n-1}$. What is the first term?",
        "zh": "某数列的通项为 $a_n = 2 \\cdot 3^{n-1}$。首项是多少？"
      },
      "choices": [
        "$2$",
        "$6$",
        "$3$",
        "$1$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Substitute $n = 1$: $a_1 = 2 \\cdot 3^{0} = 2 \\cdot 1 = 2$. Remember $3^0 = 1$; treating $3^0$ as $3$ would wrongly give $6$.",
        "zh": "代入 $n = 1$：$a_1 = 2 \\cdot 3^{0} = 2 \\cdot 1 = 2$。注意 $3^0 = 1$；若把 $3^0$ 当作 $3$ 就会错得 $6$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the common ratio of $81, 27, 9, 3, \\dots$",
        "zh": "求数列 $81, 27, 9, 3, \\dots$ 的公比。"
      },
      "choices": [
        "$3$",
        "$\\frac{1}{3}$",
        "$-3$",
        "$-27$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\frac{27}{81} = \\frac{1}{3}$; each term is one third of the previous, so $r = \\frac{1}{3}$. A shrinking sequence has a ratio between $0$ and $1$, not a negative one.",
        "zh": "$\\frac{27}{81} = \\frac{1}{3}$；每项是前一项的三分之一，故 $r = \\frac{1}{3}$。递减数列的公比介于 $0$ 与 $1$ 之间，而非负数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the sequence $2, 8, 32, 128, \\dots$, which term equals $512$?",
        "zh": "对于数列 $2, 8, 32, 128, \\dots$，哪一项等于 $512$？"
      },
      "choices": [
        "the 4th term",
        "the 6th term",
        "the 5th term",
        "the 3rd term"
      ],
      "answer": 2,
      "explanation": {
        "en": "Here $a_1 = 2$, $r = 4$: $512 = 2 \\cdot 4^{n-1}$ gives $256 = 4^{n-1} = 4^4$, so $n - 1 = 4$ and $n = 5$. Forgetting the $-1$ in the exponent gives $n = 4$.",
        "zh": "此处 $a_1 = 2$，$r = 4$：$512 = 2 \\cdot 4^{n-1}$ 得 $256 = 4^{n-1} = 4^4$，故 $n - 1 = 4$，$n = 5$。若忘掉指数中的 $-1$ 会错得 $n = 4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A colony starts with $200$ bacteria and doubles every hour. How many bacteria are there after $3$ hours?",
        "zh": "一个菌落起初有 $200$ 个细菌，每小时翻一番。$3$ 小时后有多少个细菌？"
      },
      "choices": [
        "$800$",
        "$600$",
        "$3200$",
        "$1600$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Doubling gives $200 \\cdot 2^3 = 200 \\cdot 8 = 1600$. Multiplying by $2 \\cdot 3 = 6$ treats doubling as repeated addition instead of a geometric ratio.",
        "zh": "翻番得 $200 \\cdot 2^3 = 200 \\cdot 8 = 1600$。若乘以 $2 \\cdot 3 = 6$，就把翻番当成了反复相加而非等比。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A geometric sequence has $a_1 = 4$ and $a_3 = 36$ (with $r > 0$). Find the common ratio.",
        "zh": "某等比数列 $a_1 = 4$，$a_3 = 36$（其中 $r > 0$）。求公比。"
      },
      "choices": [
        "$3$",
        "$9$",
        "$6$",
        "$16$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$a_3 = a_1 r^2$, so $36 = 4 r^2$, $r^2 = 9$, and $r = 3$ (positive). Dividing $36$ by $4$ to get $9$ forgets to take the square root.",
        "zh": "$a_3 = a_1 r^2$，故 $36 = 4 r^2$，$r^2 = 9$，取正得 $r = 3$。若只把 $36$ 除以 $4$ 得 $9$，就忘了开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which recursive rule matches the explicit formula $a_n = 5 \\cdot 4^{n-1}$?",
        "zh": "下列哪个递推规则与通项公式 $a_n = 5 \\cdot 4^{n-1}$ 一致？"
      },
      "choices": [
        "$a_1 = 4,\\ a_n = 5 a_{n-1}$",
        "$a_1 = 5,\\ a_n = 4 a_{n-1}$",
        "$a_1 = 5,\\ a_n = a_{n-1} + 4$",
        "$a_1 = 20,\\ a_n = 4 a_{n-1}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The base $4$ is the common ratio and $a_1 = 5 \\cdot 4^0 = 5$. So start at $5$ and multiply by $4$. Adding $4$ each step would make it arithmetic.",
        "zh": "底数 $4$ 是公比，且 $a_1 = 5 \\cdot 4^0 = 5$。故从 $5$ 开始，每次乘 $4$。若每步加 $4$ 就变成等差数列了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these sequences is NOT geometric?",
        "zh": "下列哪个数列不是等比数列？"
      },
      "choices": [
        "$1, 2, 4, 8, \\dots$",
        "$100, 10, 1, 0.1, \\dots$",
        "$3, 6, 9, 12, \\dots$",
        "$5, -10, 20, -40, \\dots$"
      ],
      "answer": 2,
      "explanation": {
        "en": "In $3, 6, 9, 12$ each term adds $3$ (a constant difference, not a constant ratio), so it is arithmetic. The others multiply by a fixed ratio ($2$, $\\frac{1}{10}$, and $-2$).",
        "zh": "在 $3, 6, 9, 12$ 中每项加 $3$（是固定的差而非固定的比），所以它是等差数列。其余都是乘以固定公比（$2$、$\\frac{1}{10}$ 和 $-2$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "In the geometric sequence $4, \\_\\_, 16, \\dots$ with a positive ratio, find the missing middle term.",
        "zh": "在公比为正的等比数列 $4, \\_\\_, 16, \\dots$ 中，求中间缺失的项。"
      },
      "choices": [
        "$10$",
        "$12$",
        "$6$",
        "$8$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The middle term is the geometric mean: $\\sqrt{4 \\cdot 16} = \\sqrt{64} = 8$. Averaging the neighbors to get $10$ uses the arithmetic mean by mistake.",
        "zh": "中间项是几何平均数：$\\sqrt{4 \\cdot 16} = \\sqrt{64} = 8$。若取两边的算术平均得 $10$，就用错了平均方式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_1 = 3$ and $r = 2$. Find $a_5$. Give an integer.",
        "zh": "某等比数列 $a_1 = 3$，$r = 2$。求 $a_5$。请填一个整数。"
      },
      "answer": "48",
      "accept": [
        "48.0",
        "+48"
      ],
      "explanation": {
        "en": "$a_5 = 3 \\cdot 2^{5-1} = 3 \\cdot 16 = 48$. Use the exponent $n - 1 = 4$, not $5$.",
        "zh": "$a_5 = 3 \\cdot 2^{5-1} = 3 \\cdot 16 = 48$。指数用 $n - 1 = 4$，而不是 $5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the common ratio of $100, 20, 4, \\dots$ Give a fraction in lowest terms.",
        "zh": "求数列 $100, 20, 4, \\dots$ 的公比。请填最简分数。"
      },
      "answer": "1/5",
      "accept": [
        "0.2",
        "1/5.0"
      ],
      "explanation": {
        "en": "$\\frac{20}{100} = \\frac{1}{5}$, and $\\frac{4}{20} = \\frac{1}{5}$ confirms it. Each term is one fifth of the previous.",
        "zh": "$\\frac{20}{100} = \\frac{1}{5}$，且 $\\frac{4}{20} = \\frac{1}{5}$ 可验证。每项是前一项的五分之一。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For a geometric sequence with $a_1 = 2$ and $r = 3$, which term number $n$ equals $162$? Give an integer.",
        "zh": "对于 $a_1 = 2$、$r = 3$ 的等比数列，第几项 $n$ 等于 $162$？请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "n=5"
      ],
      "explanation": {
        "en": "$162 = 2 \\cdot 3^{n-1}$ gives $81 = 3^{n-1} = 3^4$, so $n - 1 = 4$ and $n = 5$.",
        "zh": "$162 = 2 \\cdot 3^{n-1}$ 得 $81 = 3^{n-1} = 3^4$，故 $n - 1 = 4$，$n = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_1 = 64$ and $r = \\frac{1}{2}$. Find $a_4$. Give an integer.",
        "zh": "某等比数列 $a_1 = 64$，$r = \\frac{1}{2}$。求 $a_4$。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "$a_4 = 64 \\cdot \\left(\\frac{1}{2}\\right)^{3} = 64 \\cdot \\frac{1}{8} = 8$. Three halvings divide by $8$.",
        "zh": "$a_4 = 64 \\cdot \\left(\\frac{1}{2}\\right)^{3} = 64 \\cdot \\frac{1}{8} = 8$。减半三次相当于除以 $8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sequence is defined by $a_1 = 5$ and $a_n = 2 a_{n-1}$. Find $a_4$. Give an integer.",
        "zh": "数列定义为 $a_1 = 5$，$a_n = 2 a_{n-1}$。求 $a_4$。请填一个整数。"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "+40"
      ],
      "explanation": {
        "en": "Build up: $a_2 = 10$, $a_3 = 20$, $a_4 = 40$. Multiplying by $2$ three times gives $5 \\cdot 8 = 40$.",
        "zh": "逐项推：$a_2 = 10$，$a_3 = 20$，$a_4 = 40$。乘 $2$ 三次得 $5 \\cdot 8 = 40$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_1 = 2$ and $a_4 = 54$. Find the common ratio $r$. Give an integer.",
        "zh": "某等比数列 $a_1 = 2$，$a_4 = 54$。求公比 $r$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$a_4 = a_1 r^3$, so $54 = 2 r^3$, $r^3 = 27$, and $r = 3$ (the cube root of $27$).",
        "zh": "$a_4 = a_1 r^3$，故 $54 = 2 r^3$，$r^3 = 27$，取立方根得 $r = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A geometric sequence has $a_4 = 40$ and $r = 2$. Find the first term $a_1$. Give an integer.",
        "zh": "某等比数列 $a_4 = 40$，$r = 2$。求首项 $a_1$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$a_4 = a_1 r^3 = a_1 \\cdot 8 = 40$, so $a_1 = \\frac{40}{8} = 5$. Divide by $r^3 = 8$, not by $r = 2$.",
        "zh": "$a_4 = a_1 r^3 = a_1 \\cdot 8 = 40$，故 $a_1 = \\frac{40}{8} = 5$。要除以 $r^3 = 8$，而不是 $r = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A car worth $\\$20000$ loses half its value each year. What is it worth after $3$ years? Give an integer number of dollars.",
        "zh": "一辆价值 $\\$20000$ 的汽车每年贬值一半。$3$ 年后价值多少？请填整数美元数。"
      },
      "answer": "2500",
      "accept": [
        "2500.0",
        "$2500"
      ],
      "explanation": {
        "en": "Halving each year: $20000 \\cdot \\left(\\frac{1}{2}\\right)^3 = 20000 \\cdot \\frac{1}{8} = 2500$. Three halvings divide by $8$, not by $6$.",
        "zh": "每年减半：$20000 \\cdot \\left(\\frac{1}{2}\\right)^3 = 20000 \\cdot \\frac{1}{8} = 2500$。减半三次是除以 $8$，而不是除以 $6$。"
      }
    }
  ],
  "unit-10-absolute-value-piecewise/absolute-value-equations-inequalities": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x| = 5$.",
        "zh": "解 $|x| = 5$。"
      },
      "choices": [
        "$x = \\pm 5$",
        "$x = 5$",
        "$x = -5$",
        "No solution"
      ],
      "answer": 0,
      "explanation": {
        "en": "The absolute value of $x$ is its distance from $0$, so $x$ can be $5$ or $-5$. Keeping only the positive value forgets the negative branch.",
        "zh": "$x$ 的绝对值是它到 $0$ 的距离，所以 $x$ 可以是 $5$ 或 $-5$。只保留正值就漏掉了负的那一支。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x - 3| = 7$.",
        "zh": "解 $|x - 3| = 7$。"
      },
      "choices": [
        "$x = 10$",
        "$x = 10$ or $x = -4$",
        "$x = 4$ or $x = -10$",
        "$x = -4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Split into two cases: $x - 3 = 7$ gives $x = 10$, and $x - 3 = -7$ gives $x = -4$. Adding $3$ in the wrong direction is what produces $x = 4$ or $-10$.",
        "zh": "分成两种情况：$x - 3 = 7$ 得 $x = 10$，$x - 3 = -7$ 得 $x = -4$。把 $3$ 移错方向就会得到 $x = 4$ 或 $-10$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|2x + 1| = 9$.",
        "zh": "解 $|2x + 1| = 9$。"
      },
      "choices": [
        "$x = 4$",
        "$x = 5$ or $x = -4$",
        "$x = 4$ or $x = -5$",
        "$x = -5$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Case 1: $2x + 1 = 9 \\Rightarrow x = 4$. Case 2: $2x + 1 = -9 \\Rightarrow 2x = -10 \\Rightarrow x = -5$. Both branches must be solved.",
        "zh": "情况一：$2x + 1 = 9 \\Rightarrow x = 4$。情况二：$2x + 1 = -9 \\Rightarrow 2x = -10 \\Rightarrow x = -5$。两支都要解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x + 2| = -3$.",
        "zh": "解 $|x + 2| = -3$。"
      },
      "choices": [
        "$x = -5$ or $x = 1$",
        "$x = 1$",
        "$x = -5$",
        "No solution"
      ],
      "answer": 3,
      "explanation": {
        "en": "An absolute value is never negative, so it can never equal $-3$. Setting up the usual two cases here is the trap; there is no solution.",
        "zh": "绝对值永远不为负，所以它不可能等于 $-3$。在这里照旧列两种情况就是陷阱；此方程无解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x| < 4$.",
        "zh": "解 $|x| < 4$。"
      },
      "choices": [
        "$-4 < x < 4$",
        "$x < 4$",
        "$x > 4$ or $x < -4$",
        "$x < -4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A 'less than' absolute value inequality becomes a single 'and' band: $-4 < x < 4$. Treating it as an 'or' statement describes the wrong region.",
        "zh": "小于型绝对值不等式化为一个 '且' 的区间：$-4 < x < 4$。把它当作 '或' 就描述成了错误的区域。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x| > 3$.",
        "zh": "解 $|x| > 3$。"
      },
      "choices": [
        "$-3 < x < 3$",
        "$x < -3$ or $x > 3$",
        "$x > 3$",
        "No solution"
      ],
      "answer": 1,
      "explanation": {
        "en": "A 'greater than' absolute value inequality becomes an 'or': $x < -3$ or $x > 3$. Writing it as a single band captures the inside instead of the outside.",
        "zh": "大于型绝对值不等式化为 '或'：$x < -3$ 或 $x > 3$。写成一个区间就取到了内部而不是外部。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x - 1| \\le 5$.",
        "zh": "解 $|x - 1| \\le 5$。"
      },
      "choices": [
        "$-6 \\le x \\le 4$",
        "$x \\le 6$",
        "$-4 \\le x \\le 6$",
        "$x \\ge -4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Write $-5 \\le x - 1 \\le 5$, then add $1$ to every part: $-4 \\le x \\le 6$. Forgetting to add $1$ to both ends leaves the band centered wrong.",
        "zh": "写成 $-5 \\le x - 1 \\le 5$，各部分都加 $1$：$-4 \\le x \\le 6$。忘记两端都加 $1$ 就会把区间中心放错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|2x - 4| \\ge 6$.",
        "zh": "解 $|2x - 4| \\ge 6$。"
      },
      "choices": [
        "$-1 \\le x \\le 5$",
        "$x \\ge 5$",
        "$1 \\le x \\le 5$",
        "$x \\le -1$ or $x \\ge 5$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Case 1: $2x - 4 \\ge 6 \\Rightarrow x \\ge 5$. Case 2: $2x - 4 \\le -6 \\Rightarrow 2x \\le -2 \\Rightarrow x \\le -1$. A '$\\ge$' gives an 'or', not a middle band.",
        "zh": "情况一：$2x - 4 \\ge 6 \\Rightarrow x \\ge 5$。情况二：$2x - 4 \\le -6 \\Rightarrow 2x \\le -2 \\Rightarrow x \\le -1$。'$\\ge$' 给出 '或'，而不是中间的区间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x + 3| > -2$.",
        "zh": "解 $|x + 3| > -2$。"
      },
      "choices": [
        "All real numbers",
        "No solution",
        "$x > -2$",
        "$x = -3$"
      ],
      "answer": 0,
      "explanation": {
        "en": "An absolute value is always at least $0$, which is already greater than $-2$, so every $x$ works. Splitting into cases misses this shortcut.",
        "zh": "绝对值总是至少为 $0$，而 $0$ 已经大于 $-2$，所以任何 $x$ 都成立。硬去分情况就错过了这个捷径。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|x - 2| < 0$.",
        "zh": "解 $|x - 2| < 0$。"
      },
      "choices": [
        "$x = 2$",
        "No solution",
        "All real numbers",
        "$x < 2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "An absolute value can never be strictly less than $0$. Note $x = 2$ makes it equal $0$, not less than $0$, so even that fails; there is no solution.",
        "zh": "绝对值永远不可能严格小于 $0$。注意 $x = 2$ 使它等于 $0$，而不是小于 $0$，所以连这个也不行；无解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $|3x| = 12$.",
        "zh": "解 $|3x| = 12$。"
      },
      "choices": [
        "$x = 12$",
        "$x = \\pm 12$",
        "$x = \\pm 4$",
        "$x = 4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "From $3x = 12$ or $3x = -12$ we get $x = 4$ or $x = -4$. Forgetting to divide by $3$ leaves the untouched $\\pm 12$.",
        "zh": "由 $3x = 12$ 或 $3x = -12$ 得 $x = 4$ 或 $x = -4$。忘记除以 $3$ 就会留下未处理的 $\\pm 12$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many solutions does $|x - 4| = 0$ have?",
        "zh": "$|x - 4| = 0$ 有多少个解？"
      },
      "choices": [
        "Zero",
        "Two",
        "Infinitely many",
        "One"
      ],
      "answer": 3,
      "explanation": {
        "en": "An absolute value equals $0$ only when its inside is $0$, so $x - 4 = 0$ gives the single solution $x = 4$. Assuming every absolute value equation has two solutions is the trap.",
        "zh": "绝对值等于 $0$ 只在其内部为 $0$ 时成立，故 $x - 4 = 0$ 给出唯一解 $x = 4$。以为每个绝对值方程都有两个解就是陷阱。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $|x - 5| = 0$. Give the value of $x$ as an integer.",
        "zh": "解 $|x - 5| = 0$。请以整数形式给出 $x$ 的值。"
      },
      "answer": "5",
      "accept": [
        "x=5",
        "5.0"
      ],
      "explanation": {
        "en": "The inside must be $0$: $x - 5 = 0$, so $x = 5$. This is the one case where the equation has a single solution.",
        "zh": "内部必须为 $0$：$x - 5 = 0$，故 $x = 5$。这是方程只有一个解的特殊情形。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $|2x + 3| = 3$. Give the smaller (more negative) solution for $x$ as an integer.",
        "zh": "解 $|2x + 3| = 3$。请以整数给出较小（更负）的 $x$ 解。"
      },
      "answer": "-3",
      "accept": [
        "x=-3",
        "-3.0"
      ],
      "explanation": {
        "en": "Case 1: $2x + 3 = 3 \\Rightarrow x = 0$. Case 2: $2x + 3 = -3 \\Rightarrow 2x = -6 \\Rightarrow x = -3$. The smaller value is $-3$.",
        "zh": "情况一：$2x + 3 = 3 \\Rightarrow x = 0$。情况二：$2x + 3 = -3 \\Rightarrow 2x = -6 \\Rightarrow x = -3$。较小的值为 $-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $|x + 7| = 10$. Give the larger solution for $x$ as an integer.",
        "zh": "解 $|x + 7| = 10$。请以整数给出较大的 $x$ 解。"
      },
      "answer": "3",
      "accept": [
        "x=3",
        "+3",
        "3.0"
      ],
      "explanation": {
        "en": "Case 1: $x + 7 = 10 \\Rightarrow x = 3$. Case 2: $x + 7 = -10 \\Rightarrow x = -17$. The larger value is $3$.",
        "zh": "情况一：$x + 7 = 10 \\Rightarrow x = 3$。情况二：$x + 7 = -10 \\Rightarrow x = -17$。较大的值为 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The inequality $|x - 10| \\le 2$ describes all numbers within a distance of $2$ from which number? Give an integer.",
        "zh": "不等式 $|x - 10| \\le 2$ 表示与哪个数的距离不超过 $2$ 的所有数？请填整数。"
      },
      "answer": "10",
      "accept": [
        "10.0"
      ],
      "explanation": {
        "en": "In $|x - a| \\le b$, the value $a$ is the center. Here $a = 10$, so the solution is all numbers within $2$ of $10$.",
        "zh": "在 $|x - a| \\le b$ 中，$a$ 是中心。这里 $a = 10$，所以解是与 $10$ 距离不超过 $2$ 的所有数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The solution set $-3 < x < 9$ can be written as $|x - a| < b$. Find the center $a$ as an integer.",
        "zh": "解集 $-3 < x < 9$ 可写成 $|x - a| < b$。求中心 $a$（整数）。"
      },
      "answer": "3",
      "accept": [
        "a=3",
        "3.0"
      ],
      "explanation": {
        "en": "The center is the midpoint of the endpoints: $a = \\frac{-3 + 9}{2} = 3$.",
        "zh": "中心是两端点的中点：$a = \\frac{-3 + 9}{2} = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the same set $-3 < x < 9$ written as $|x - a| < b$, find the radius $b$ as an integer.",
        "zh": "对同一解集 $-3 < x < 9$ 写成 $|x - a| < b$，求半径 $b$（整数）。"
      },
      "answer": "6",
      "accept": [
        "b=6",
        "6.0"
      ],
      "explanation": {
        "en": "The radius is half the width: $b = \\frac{9 - (-3)}{2} = 6$.",
        "zh": "半径是宽度的一半：$b = \\frac{9 - (-3)}{2} = 6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $|4x| = 20$. Give the positive solution for $x$ as an integer.",
        "zh": "解 $|4x| = 20$。请以整数给出 $x$ 的正解。"
      },
      "answer": "5",
      "accept": [
        "x=5",
        "+5",
        "5.0"
      ],
      "explanation": {
        "en": "From $4x = 20$ we get $x = 5$ (and $4x = -20$ gives $x = -5$). The positive solution is $5$.",
        "zh": "由 $4x = 20$ 得 $x = 5$（而 $4x = -20$ 得 $x = -5$）。正解为 $5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A thermostat keeps a room within $2^\\circ$F of $68^\\circ$F, modeled by $|T - 68| \\le 2$. What is the maximum temperature $T$ in $^\\circ$F? Give an integer.",
        "zh": "恒温器把房间温度控制在 $68^\\circ$F 上下 $2^\\circ$F 内，模型为 $|T - 68| \\le 2$。最高温度 $T$ 是多少 $^\\circ$F？请填整数。"
      },
      "answer": "70",
      "accept": [
        "70.0",
        "T=70"
      ],
      "explanation": {
        "en": "Solve $T - 68 \\le 2$ for the upper end: $T \\le 70$. The maximum temperature is $70^\\circ$F.",
        "zh": "对上界解 $T - 68 \\le 2$：$T \\le 70$。最高温度为 $70^\\circ$F。"
      }
    }
  ],
  "unit-10-absolute-value-piecewise/graphing-absolute-value-piecewise": [
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = |x - 3| + 2$?",
        "zh": "$y = |x - 3| + 2$ 的顶点是什么？"
      },
      "choices": [
        "$(3, 2)$",
        "$(-3, 2)$",
        "$(3, -2)$",
        "$(-3, -2)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "In vertex form $y = |x - h| + k$ the vertex is $(h, k)$. Here $x - 3$ gives $h = 3$ and $+2$ gives $k = 2$. Reading $h$ with the wrong sign flips it to $-3$.",
        "zh": "顶点式 $y = |x - h| + k$ 的顶点是 $(h, k)$。这里 $x - 3$ 给出 $h = 3$，$+2$ 给出 $k = 2$。把 $h$ 的符号读反就变成 $-3$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y = |x| + 4$ is the graph of $y = |x|$ shifted how?",
        "zh": "$y = |x| + 4$ 的图像是 $y = |x|$ 如何平移得到的？"
      },
      "choices": [
        "Down 4",
        "Up 4",
        "Right 4",
        "Left 4"
      ],
      "answer": 1,
      "explanation": {
        "en": "Adding $4$ outside the absolute value raises every output, shifting the graph up $4$. Changes inside the bars would shift left or right instead.",
        "zh": "在绝对值外面加 $4$ 使每个输出值升高，图像向上平移 $4$。绝对值里面的变化才会左右平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y = |x + 5|$ is the graph of $y = |x|$ shifted how?",
        "zh": "$y = |x + 5|$ 的图像是 $y = |x|$ 如何平移得到的？"
      },
      "choices": [
        "Right 5",
        "Up 5",
        "Left 5",
        "Down 5"
      ],
      "answer": 2,
      "explanation": {
        "en": "Write $x + 5 = x - (-5)$, so $h = -5$ and the graph shifts left $5$. The inside sign feels backward, which is why 'right' is tempting.",
        "zh": "写成 $x + 5 = x - (-5)$，故 $h = -5$，图像向左平移 $5$。括号内的符号看起来相反，所以容易误选 '向右'。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which way does the graph of $y = -|x|$ open?",
        "zh": "$y = -|x|$ 的图像开口朝哪个方向？"
      },
      "choices": [
        "Opens upward",
        "Opens right",
        "It is a straight line",
        "Opens downward"
      ],
      "answer": 3,
      "explanation": {
        "en": "The negative sign reflects the usual V across the x-axis, so it opens downward with a maximum at the vertex. It is still a V shape, not a straight line.",
        "zh": "负号把通常的 V 形沿 x 轴翻转，所以开口朝下，顶点是最高点。它仍是 V 形，而非直线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = |x + 1| - 6$?",
        "zh": "$y = |x + 1| - 6$ 的顶点是什么？"
      },
      "choices": [
        "$(-1, -6)$",
        "$(1, -6)$",
        "$(-1, 6)$",
        "$(1, 6)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Rewrite as $|x - (-1)| - 6$, so $h = -1$ and $k = -6$, giving vertex $(-1, -6)$. The inside sign is what trips people into $(1, -6)$.",
        "zh": "改写为 $|x - (-1)| - 6$，故 $h = -1$，$k = -6$，顶点为 $(-1, -6)$。括号内的符号常使人误得 $(1, -6)$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Let $f(x) = \\begin{cases} 2x & x < 0 \\\\ x + 3 & x \\ge 0 \\end{cases}$. Find $f(-2)$.",
        "zh": "设 $f(x) = \\begin{cases} 2x & x < 0 \\\\ x + 3 & x \\ge 0 \\end{cases}$。求 $f(-2)$。"
      },
      "choices": [
        "$1$",
        "$-4$",
        "$-2$",
        "$4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Since $-2 < 0$, use the first piece $2x$: $2(-2) = -4$. Using $x + 3$ by mistake would give $1$, but that piece only applies when $x \\ge 0$.",
        "zh": "因为 $-2 < 0$，用第一段 $2x$：$2(-2) = -4$。误用 $x + 3$ 会得 $1$，但那一段只在 $x \\ge 0$ 时才适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Using the same $f$ where $f(x) = 2x$ for $x < 0$ and $f(x) = x + 3$ for $x \\ge 0$, find $f(4)$.",
        "zh": "仍用上面的 $f$（当 $x < 0$ 时 $f(x) = 2x$，当 $x \\ge 0$ 时 $f(x) = x + 3$），求 $f(4)$。"
      },
      "choices": [
        "$8$",
        "$4$",
        "$7$",
        "$11$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Since $4 \\ge 0$, use $x + 3$: $4 + 3 = 7$. Using $2x$ would give $8$, but that piece is only for $x < 0$.",
        "zh": "因为 $4 \\ge 0$，用 $x + 3$：$4 + 3 = 7$。用 $2x$ 会得 $8$，但那一段只在 $x < 0$ 时适用。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compared with $y = |x|$, the graph of $y = 2|x|$ is?",
        "zh": "与 $y = |x|$ 相比，$y = 2|x|$ 的图像是？"
      },
      "choices": [
        "Wider",
        "Shifted up 2",
        "Shifted right 2",
        "Narrower (steeper)"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiplying by $2$ stretches every output vertically, making the V narrower and steeper. It is a stretch, not a shift.",
        "zh": "乘以 $2$ 使每个输出值纵向拉伸，V 形变窄变陡。这是拉伸，不是平移。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $y = |x|$?",
        "zh": "$y = |x|$ 的值域是什么？"
      },
      "choices": [
        "$y \\ge 0$",
        "$y \\le 0$",
        "All real numbers",
        "$y > 0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Absolute value outputs are never negative and reach $0$ at the vertex, so $y \\ge 0$. The domain is all reals, but the range is not.",
        "zh": "绝对值的输出永不为负，且在顶点处取到 $0$，故 $y \\ge 0$。定义域是全体实数，但值域不是。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the range of $y = -|x| + 5$?",
        "zh": "$y = -|x| + 5$ 的值域是什么？"
      },
      "choices": [
        "$y \\ge 5$",
        "$y \\le 5$",
        "$y \\le 0$",
        "All real numbers"
      ],
      "answer": 1,
      "explanation": {
        "en": "The graph opens downward with its maximum at the vertex $(0, 5)$, so outputs never exceed $5$: $y \\le 5$. Opening down makes $5$ the top, not the bottom.",
        "zh": "图像开口朝下，最大值在顶点 $(0, 5)$，故输出不超过 $5$：$y \\le 5$。开口朝下使 $5$ 成为上界而非下界。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The vertex of $y = |x|$ is a what?",
        "zh": "$y = |x|$ 的顶点是什么？"
      },
      "choices": [
        "Maximum point",
        "y-intercept only",
        "Minimum point",
        "There is no vertex"
      ],
      "answer": 2,
      "explanation": {
        "en": "The V opens upward, so its lowest point $(0, 0)$ is a minimum. It happens to also sit on the y-axis, but its defining role is the minimum.",
        "zh": "V 形开口朝上，所以最低点 $(0, 0)$ 是最小值点。它恰好也在 y 轴上，但其本质是最小值点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the axis of symmetry of $y = |x - 4| + 1$?",
        "zh": "$y = |x - 4| + 1$ 的对称轴是什么？"
      },
      "choices": [
        "$y = 1$",
        "$x = -4$",
        "$y = 4$",
        "$x = 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The axis of symmetry passes vertically through the vertex $(4, 1)$, so it is the line $x = 4$. The axis is an $x =$ line, not a $y =$ line.",
        "zh": "对称轴竖直穿过顶点 $(4, 1)$，所以是直线 $x = 4$。对称轴是 $x =$ 形式的竖线，而非 $y =$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $f(x) = \\begin{cases} x^2 & x \\le 1 \\\\ 5 & x > 1 \\end{cases}$. Find $f(1)$. Give an integer.",
        "zh": "设 $f(x) = \\begin{cases} x^2 & x \\le 1 \\\\ 5 & x > 1 \\end{cases}$。求 $f(1)$。请填整数。"
      },
      "answer": "1",
      "accept": [
        "1.0"
      ],
      "explanation": {
        "en": "Since $1 \\le 1$, use the first piece $x^2$: $1^2 = 1$. The boundary $x = 1$ belongs to the piece with the $\\le$ sign.",
        "zh": "因为 $1 \\le 1$，用第一段 $x^2$：$1^2 = 1$。边界 $x = 1$ 归入带 $\\le$ 号的那一段。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the same $f$ where $f(x) = x^2$ for $x \\le 1$ and $f(x) = 5$ for $x > 1$, find $f(3)$. Give an integer.",
        "zh": "仍用上面的 $f$（当 $x \\le 1$ 时 $f(x) = x^2$，当 $x > 1$ 时 $f(x) = 5$），求 $f(3)$。请填整数。"
      },
      "answer": "5",
      "accept": [
        "5.0"
      ],
      "explanation": {
        "en": "Since $3 > 1$, use the constant piece: $f(3) = 5$. The value does not depend on $x$ on that interval.",
        "zh": "因为 $3 > 1$，用常数段：$f(3) = 5$。在该区间上取值与 $x$ 无关。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Give the vertex of $y = |x - 7| - 3$ as a coordinate pair in the form $(x,y)$.",
        "zh": "以坐标对 $(x,y)$ 形式给出 $y = |x - 7| - 3$ 的顶点。"
      },
      "answer": "(7,-3)",
      "accept": [
        "7,-3",
        "7, -3",
        "(7, -3)"
      ],
      "explanation": {
        "en": "In $y = |x - h| + k$, the vertex is $(h, k)$. Here $h = 7$ and $k = -3$, so the vertex is $(7, -3)$.",
        "zh": "在 $y = |x - h| + k$ 中，顶点是 $(h, k)$。这里 $h = 7$，$k = -3$，故顶点为 $(7, -3)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $y = |x + 2| + 1$, give the x-coordinate of the vertex as an integer.",
        "zh": "对 $y = |x + 2| + 1$，以整数给出顶点的 x 坐标。"
      },
      "answer": "-2",
      "accept": [
        "x=-2",
        "-2.0"
      ],
      "explanation": {
        "en": "Rewrite as $|x - (-2)| + 1$, so $h = -2$. The x-coordinate of the vertex is $-2$.",
        "zh": "改写为 $|x - (-2)| + 1$，故 $h = -2$。顶点的 x 坐标为 $-2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $y = |x|$ is shifted right $6$ and down $2$. Give the new vertex as a coordinate pair $(x,y)$.",
        "zh": "$y = |x|$ 的图像向右平移 $6$、向下平移 $2$。以坐标对 $(x,y)$ 给出新顶点。"
      },
      "answer": "(6,-2)",
      "accept": [
        "6,-2",
        "6, -2",
        "(6, -2)"
      ],
      "explanation": {
        "en": "The original vertex $(0,0)$ moves right $6$ (x becomes $6$) and down $2$ (y becomes $-2$), giving $(6, -2)$.",
        "zh": "原顶点 $(0,0)$ 向右移 $6$（x 变为 $6$），向下移 $2$（y 变为 $-2$），得 $(6, -2)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $g(x) = |x|$, find $g(-9)$. Give an integer.",
        "zh": "对 $g(x) = |x|$，求 $g(-9)$。请填整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "Absolute value returns the non-negative size: $|-9| = 9$. The output cannot be negative.",
        "zh": "绝对值给出非负的大小：$|-9| = 9$。输出不可能为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the minimum value of $y = |x - 3| + 4$? Give an integer.",
        "zh": "$y = |x - 3| + 4$ 的最小值是多少？请填整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "y=4"
      ],
      "explanation": {
        "en": "The absolute value part is at least $0$, so the smallest $y$ occurs when it is $0$, giving $y = 4$ at the vertex.",
        "zh": "绝对值部分至少为 $0$，所以当它为 $0$ 时 $y$ 最小，在顶点处 $y = 4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Let $h(x) = \\begin{cases} -x & x < 0 \\\\ x & x \\ge 0 \\end{cases}$. Find $h(-6)$. Give an integer.",
        "zh": "设 $h(x) = \\begin{cases} -x & x < 0 \\\\ x & x \\ge 0 \\end{cases}$。求 $h(-6)$。请填整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Since $-6 < 0$, use the first piece $-x$: $-(-6) = 6$. This piecewise rule is exactly the definition of $|x|$.",
        "zh": "因为 $-6 < 0$，用第一段 $-x$：$-(-6) = 6$。这个分段规则正是 $|x|$ 的定义。"
      }
    }
  ],
  "unit-11-exponents-radicals/exponent-properties": [
    {
      "type": "mc",
      "question": {
        "en": "Simplify $x^{5} \\cdot x^{3}$.",
        "zh": "化简 $x^{5} \\cdot x^{3}$。"
      },
      "choices": [
        "$x^{8}$",
        "$x^{15}$",
        "$x^{2}$",
        "$x^{16}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The product rule adds exponents on the same base: $5 + 3 = 8$, so the result is $x^{8}$. Multiplying the exponents to get $x^{15}$ misapplies the power rule instead of the product rule.",
        "zh": "同底数相乘时指数相加：$5 + 3 = 8$，所以结果是 $x^{8}$。把指数相乘得到 $x^{15}$ 是错用了幂的乘方法则。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{y^{9}}{y^{4}}$.",
        "zh": "化简 $\\frac{y^{9}}{y^{4}}$。"
      },
      "choices": [
        "$y^{13}$",
        "$y^{5}$",
        "$y^{36}$",
        "$y^{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "The quotient rule subtracts exponents on the same base: $9 - 4 = 5$, giving $y^{5}$. Adding the exponents to get $y^{13}$ treats division as if it were multiplication.",
        "zh": "同底数相除时指数相减：$9 - 4 = 5$，得到 $y^{5}$。把指数相加得到 $y^{13}$ 是把除法当成了乘法。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $(a^{4})^{3}$.",
        "zh": "化简 $(a^{4})^{3}$。"
      },
      "choices": [
        "$a^{7}$",
        "$a^{64}$",
        "$a^{12}$",
        "$a^{1}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A power raised to a power multiplies the exponents: $4 \\times 3 = 12$, so the result is $a^{12}$. Adding to get $a^{7}$ confuses the power rule with the product rule.",
        "zh": "幂的乘方要把指数相乘：$4 \\times 3 = 12$，所以结果是 $a^{12}$。相加得到 $a^{7}$ 是把幂的乘方与同底相乘搞混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $3^{-2}$.",
        "zh": "求 $3^{-2}$ 的值。"
      },
      "choices": [
        "$-9$",
        "$-6$",
        "$6$",
        "$\\frac{1}{9}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A negative exponent means the reciprocal: $3^{-2} = \\frac{1}{3^{2}} = \\frac{1}{9}$. Reading it as $-9$ treats the negative exponent as if it made the value negative, which it does not.",
        "zh": "负指数表示取倒数：$3^{-2} = \\frac{1}{3^{2}} = \\frac{1}{9}$。把它当成 $-9$ 是误以为负指数会让数值变负，其实不会。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $(7x)^{0}$, where $x \\neq 0$.",
        "zh": "化简 $(7x)^{0}$，其中 $x \\neq 0$。"
      },
      "choices": [
        "$1$",
        "$0$",
        "$7$",
        "$7x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Any nonzero quantity raised to the zero power equals $1$, so $(7x)^{0} = 1$. Answering $0$ confuses the zero exponent with multiplying by zero.",
        "zh": "任何非零量的零次幂都等于 $1$，所以 $(7x)^{0} = 1$。答 $0$ 是把零指数与乘以零弄混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $(2x^{3})^{4}$.",
        "zh": "化简 $(2x^{3})^{4}$。"
      },
      "choices": [
        "$8x^{12}$",
        "$16x^{12}$",
        "$16x^{7}$",
        "$2x^{12}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Raise each factor to the 4th power: $2^{4} = 16$ and $(x^{3})^{4} = x^{12}$, giving $16x^{12}$. Writing $8x^{12}$ comes from computing $2 \\times 4$ instead of $2^{4}$.",
        "zh": "把每个因子都取 4 次方：$2^{4} = 16$，$(x^{3})^{4} = x^{12}$，得到 $16x^{12}$。写成 $8x^{12}$ 是算成了 $2 \\times 4$ 而不是 $2^{4}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write $45000$ in scientific notation.",
        "zh": "把 $45000$ 写成科学记数法。"
      },
      "choices": [
        "$45 \\times 10^{3}$",
        "$4.5 \\times 10^{3}$",
        "$4.5 \\times 10^{4}$",
        "$0.45 \\times 10^{5}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Scientific notation needs a coefficient $a$ with $1 \\le a < 10$; here $a = 4.5$ and the decimal moves 4 places, so $4.5 \\times 10^{4}$. Using $10^{3}$ miscounts the number of places the decimal shifts.",
        "zh": "科学记数法要求系数 $a$ 满足 $1 \\le a < 10$；这里 $a = 4.5$，小数点移动 4 位，所以是 $4.5 \\times 10^{4}$。用 $10^{3}$ 是数错了小数点移动的位数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Multiply $(3 \\times 10^{2})(2 \\times 10^{5})$.",
        "zh": "计算 $(3 \\times 10^{2})(2 \\times 10^{5})$。"
      },
      "choices": [
        "$6 \\times 10^{10}$",
        "$5 \\times 10^{7}$",
        "$6 \\times 10^{3}$",
        "$6 \\times 10^{7}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Multiply the coefficients ($3 \\times 2 = 6$) and add the exponents ($2 + 5 = 7$), giving $6 \\times 10^{7}$. Getting $10^{10}$ comes from multiplying the exponents instead of adding them.",
        "zh": "系数相乘（$3 \\times 2 = 6$），指数相加（$2 + 5 = 7$），得到 $6 \\times 10^{7}$。得到 $10^{10}$ 是把指数相乘而不是相加了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{x^{-3}}{x^{2}}$, writing the answer with a positive exponent.",
        "zh": "化简 $\\frac{x^{-3}}{x^{2}}$，答案用正指数表示。"
      },
      "choices": [
        "$\\frac{1}{x^{5}}$",
        "$x^{5}$",
        "$\\frac{1}{x}$",
        "$x^{-1}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Subtract exponents: $-3 - 2 = -5$, so $x^{-5} = \\frac{1}{x^{5}}$. Getting $\\frac{1}{x}$ comes from adding $-3 + 2$ instead of subtracting the denominator's exponent.",
        "zh": "指数相减：$-3 - 2 = -5$，所以 $x^{-5} = \\frac{1}{x^{5}}$。得到 $\\frac{1}{x}$ 是算成了 $-3 + 2$，没有正确减去分母的指数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $\\left(\\frac{2}{3}\\right)^{-2}$.",
        "zh": "求 $\\left(\\frac{2}{3}\\right)^{-2}$ 的值。"
      },
      "choices": [
        "$\\frac{4}{9}$",
        "$\\frac{9}{4}$",
        "$-\\frac{4}{9}$",
        "$\\frac{2}{9}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "A negative exponent flips the fraction first: $\\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}$. Answering $\\frac{4}{9}$ squares without flipping, ignoring the negative sign on the exponent.",
        "zh": "负指数要先把分数取倒数：$\\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}$。答 $\\frac{4}{9}$ 是直接平方而没有取倒数，忽略了指数上的负号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $5^{-1} + 5^{0}$.",
        "zh": "求 $5^{-1} + 5^{0}$ 的值。"
      },
      "choices": [
        "$0$",
        "$\\frac{1}{5}$",
        "$\\frac{6}{5}$",
        "$2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$5^{-1} = \\frac{1}{5}$ and $5^{0} = 1$, so the sum is $\\frac{1}{5} + 1 = \\frac{6}{5}$. Getting $\\frac{1}{5}$ comes from treating $5^{0}$ as $0$ rather than $1$.",
        "zh": "$5^{-1} = \\frac{1}{5}$，$5^{0} = 1$，所以和为 $\\frac{1}{5} + 1 = \\frac{6}{5}$。得到 $\\frac{1}{5}$ 是把 $5^{0}$ 当成了 $0$ 而不是 $1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which is larger, $3 \\times 10^{-4}$ or $5 \\times 10^{-5}$?",
        "zh": "$3 \\times 10^{-4}$ 和 $5 \\times 10^{-5}$ 哪个更大？"
      },
      "choices": [
        "$5 \\times 10^{-5}$",
        "They are equal",
        "Cannot be compared",
        "$3 \\times 10^{-4}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Compare the powers of ten first: $10^{-4}$ is ten times larger than $10^{-5}$, so $3 \\times 10^{-4} = 0.0003$ beats $5 \\times 10^{-5} = 0.00005$. Choosing the other value compares only the coefficients and ignores the exponents.",
        "zh": "先比较 10 的幂：$10^{-4}$ 是 $10^{-5}$ 的十倍，所以 $3 \\times 10^{-4} = 0.0003$ 大于 $5 \\times 10^{-5} = 0.00005$。选另一个是只比较了系数而忽略了指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $5^{-2}$. Give your answer as a fraction in the form $a/b$.",
        "zh": "求 $5^{-2}$ 的值。请以分数形式 $a/b$ 作答。"
      },
      "answer": "1/25",
      "accept": [
        "0.04"
      ],
      "explanation": {
        "en": "A negative exponent gives the reciprocal: $5^{-2} = \\frac{1}{5^{2}} = \\frac{1}{25}$. The sign of the exponent controls reciprocation, not the sign of the value.",
        "zh": "负指数表示取倒数：$5^{-2} = \\frac{1}{5^{2}} = \\frac{1}{25}$。指数的符号决定是否取倒数，而不是让数值变负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $(2^{3})^{2}$. Give an integer.",
        "zh": "求 $(2^{3})^{2}$ 的值。请填一个整数。"
      },
      "answer": "64",
      "accept": [
        "64.0",
        "+64"
      ],
      "explanation": {
        "en": "Multiply the exponents: $3 \\times 2 = 6$, so $2^{6} = 64$. You can also compute $2^{3} = 8$ then $8^{2} = 64$.",
        "zh": "指数相乘：$3 \\times 2 = 6$，所以 $2^{6} = 64$。也可以先算 $2^{3} = 8$，再算 $8^{2} = 64$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Writing $73000 = a \\times 10^{n}$ with $1 \\le a < 10$, what is $n$? Give an integer.",
        "zh": "把 $73000 = a \\times 10^{n}$ 写成科学记数法，其中 $1 \\le a < 10$，求 $n$。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "+4"
      ],
      "explanation": {
        "en": "Move the decimal so $a = 7.3$; it shifts 4 places, so $n = 4$ and $73000 = 7.3 \\times 10^{4}$. Count the places the decimal moves, not the number of zeros.",
        "zh": "移动小数点使 $a = 7.3$，共移动 4 位，所以 $n = 4$，即 $73000 = 7.3 \\times 10^{4}$。要数小数点移动的位数，而不是零的个数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Writing $0.0091 = a \\times 10^{n}$ with $1 \\le a < 10$, what is $n$? Give an integer.",
        "zh": "把 $0.0091 = a \\times 10^{n}$ 写成科学记数法，其中 $1 \\le a < 10$，求 $n$。请填一个整数。"
      },
      "answer": "-3",
      "accept": [
        "−3",
        "-3.0"
      ],
      "explanation": {
        "en": "For $a = 9.1$ the decimal moves 3 places to the right, so the exponent is negative: $n = -3$ and $0.0091 = 9.1 \\times 10^{-3}$. Numbers less than 1 give a negative power of ten.",
        "zh": "要使 $a = 9.1$，小数点向右移动 3 位，所以指数为负：$n = -3$，即 $0.0091 = 9.1 \\times 10^{-3}$。小于 1 的数对应负的 10 的幂。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $4^{0} + 4^{-1}$. Give your answer as a decimal.",
        "zh": "求 $4^{0} + 4^{-1}$ 的值。请以小数作答。"
      },
      "answer": "1.25",
      "accept": [
        "5/4",
        "1.250"
      ],
      "explanation": {
        "en": "$4^{0} = 1$ and $4^{-1} = \\frac{1}{4} = 0.25$, so the sum is $1.25$. Remember $4^{0}$ is $1$, not $0$.",
        "zh": "$4^{0} = 1$，$4^{-1} = \\frac{1}{4} = 0.25$，所以和为 $1.25$。记住 $4^{0}$ 是 $1$，不是 $0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The product $(3 \\times 10^{4})(2 \\times 10^{3})$ equals $a \\times 10^{n}$ with $1 \\le a < 10$. What is $n$? Give an integer.",
        "zh": "乘积 $(3 \\times 10^{4})(2 \\times 10^{3})$ 等于 $a \\times 10^{n}$，其中 $1 \\le a < 10$。求 $n$。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "The coefficients give $3 \\times 2 = 6$ (already between 1 and 10) and the exponents add: $4 + 3 = 7$, so the product is $6 \\times 10^{7}$ and $n = 7$. Add the exponents when multiplying powers of ten.",
        "zh": "系数相乘 $3 \\times 2 = 6$（已在 1 到 10 之间），指数相加：$4 + 3 = 7$，所以乘积为 $6 \\times 10^{7}$，$n = 7$。相乘 10 的幂时指数要相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\frac{a^{-2}}{a^{-5}}$ to the form $a^{n}$. What is $n$? Give an integer.",
        "zh": "把 $\\frac{a^{-2}}{a^{-5}}$ 化简为 $a^{n}$ 的形式。求 $n$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Subtract the exponents: $-2 - (-5) = -2 + 5 = 3$, so the result is $a^{3}$ and $n = 3$. Carefully subtracting a negative exponent flips it to addition.",
        "zh": "指数相减：$-2 - (-5) = -2 + 5 = 3$，所以结果是 $a^{3}$，$n = 3$。减去一个负指数相当于加上它。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\left(\\frac{1}{2}\\right)^{-3}$. Give an integer.",
        "zh": "求 $\\left(\\frac{1}{2}\\right)^{-3}$ 的值。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "A negative exponent flips the fraction: $\\left(\\frac{2}{1}\\right)^{3} = 2^{3} = 8$. The negative exponent means reciprocal, so the answer is positive.",
        "zh": "负指数把分数取倒数：$\\left(\\frac{2}{1}\\right)^{3} = 2^{3} = 8$。负指数表示取倒数，所以答案是正数。"
      }
    }
  ],
  "unit-11-exponents-radicals/radicals-and-rational-exponents": [
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt{50}$.",
        "zh": "化简 $\\sqrt{50}$。"
      },
      "choices": [
        "$5\\sqrt{2}$",
        "$25\\sqrt{2}$",
        "$2\\sqrt{5}$",
        "$10\\sqrt{5}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor out the largest perfect square: $50 = 25 \\cdot 2$, so $\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$. Writing $25\\sqrt{2}$ forgets to take the square root of the $25$.",
        "zh": "提出最大的完全平方因子：$50 = 25 \\cdot 2$，所以 $\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$。写成 $25\\sqrt{2}$ 是忘了对 $25$ 开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt{72}$ completely.",
        "zh": "把 $\\sqrt{72}$ 完全化简。"
      },
      "choices": [
        "$3\\sqrt{8}$",
        "$6\\sqrt{2}$",
        "$2\\sqrt{18}$",
        "$36\\sqrt{2}$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Use the largest perfect square factor: $72 = 36 \\cdot 2$, so $\\sqrt{72} = 6\\sqrt{2}$. Answers like $3\\sqrt{8}$ are not fully simplified because $\\sqrt{8}$ still contains a perfect square.",
        "zh": "使用最大的完全平方因子：$72 = 36 \\cdot 2$，所以 $\\sqrt{72} = 6\\sqrt{2}$。像 $3\\sqrt{8}$ 这样的答案没有完全化简，因为 $\\sqrt{8}$ 里还含有完全平方数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write $x^{1/2}$ in radical form.",
        "zh": "把 $x^{1/2}$ 写成根式形式。"
      },
      "choices": [
        "$\\frac{1}{x^{2}}$",
        "$2x$",
        "$\\sqrt{x}$",
        "$x^{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A fractional exponent of $\\frac{1}{2}$ means a square root: $x^{1/2} = \\sqrt{x}$. Writing $x^{2}$ confuses the exponent $\\frac{1}{2}$ with $2$.",
        "zh": "分数指数 $\\frac{1}{2}$ 表示平方根：$x^{1/2} = \\sqrt{x}$。写成 $x^{2}$ 是把指数 $\\frac{1}{2}$ 与 $2$ 弄混了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Write $\\sqrt[3]{x^{2}}$ using a rational exponent.",
        "zh": "用有理指数表示 $\\sqrt[3]{x^{2}}$。"
      },
      "choices": [
        "$x^{3/2}$",
        "$x^{6}$",
        "$x^{5}$",
        "$x^{2/3}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The radical index becomes the denominator and the inside power the numerator: $\\sqrt[3]{x^{2}} = x^{2/3}$. Writing $x^{3/2}$ swaps the root and the power.",
        "zh": "根指数作分母，被开方的幂作分子：$\\sqrt[3]{x^{2}} = x^{2/3}$。写成 $x^{3/2}$ 是把根指数与幂的位置颠倒了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt{9x^{4}}$, where $x \\ge 0$.",
        "zh": "化简 $\\sqrt{9x^{4}}$，其中 $x \\ge 0$。"
      },
      "choices": [
        "$3x^{2}$",
        "$9x^{2}$",
        "$3x^{4}$",
        "$81x^{2}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Take the square root of each factor: $\\sqrt{9} = 3$ and $\\sqrt{x^{4}} = x^{2}$, giving $3x^{2}$. Keeping $x^{4}$ forgets that the square root halves an even exponent.",
        "zh": "对每个因子开平方：$\\sqrt{9} = 3$，$\\sqrt{x^{4}} = x^{2}$，得到 $3x^{2}$。保留 $x^{4}$ 是忘了开平方会把偶数指数减半。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $2\\sqrt{3} + 5\\sqrt{3}$.",
        "zh": "化简 $2\\sqrt{3} + 5\\sqrt{3}$。"
      },
      "choices": [
        "$7\\sqrt{6}$",
        "$7\\sqrt{3}$",
        "$10\\sqrt{3}$",
        "$7$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Like radicals add like terms: $2 + 5 = 7$ copies of $\\sqrt{3}$, giving $7\\sqrt{3}$. Writing $7\\sqrt{6}$ wrongly adds the radicands $3 + 3$.",
        "zh": "同类根式像同类项一样相加：$2 + 5 = 7$ 个 $\\sqrt{3}$，得到 $7\\sqrt{3}$。写成 $7\\sqrt{6}$ 是错误地把根号内的 $3 + 3$ 相加了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\sqrt{2} \\cdot \\sqrt{8}$.",
        "zh": "化简 $\\sqrt{2} \\cdot \\sqrt{8}$。"
      },
      "choices": [
        "$\\sqrt{10}$",
        "$2\\sqrt{2}$",
        "$4$",
        "$16$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply under one radical: $\\sqrt{2 \\cdot 8} = \\sqrt{16} = 4$. Getting $\\sqrt{10}$ adds the radicands instead of multiplying them.",
        "zh": "在同一个根号下相乘：$\\sqrt{2 \\cdot 8} = \\sqrt{16} = 4$。得到 $\\sqrt{10}$ 是把根号内的数相加而不是相乘了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $8^{2/3}$.",
        "zh": "求 $8^{2/3}$ 的值。"
      },
      "choices": [
        "$16$",
        "$\\frac{16}{3}$",
        "$5.33$",
        "$4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Take the cube root first, then square: $\\sqrt[3]{8} = 2$ and $2^{2} = 4$. Getting $16$ squares first and forgets to take the cube root.",
        "zh": "先开立方再平方：$\\sqrt[3]{8} = 2$，$2^{2} = 4$。得到 $16$ 是先平方而忘了开立方根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Evaluate $16^{1/2}$.",
        "zh": "求 $16^{1/2}$ 的值。"
      },
      "choices": [
        "$4$",
        "$8$",
        "$256$",
        "$32$"
      ],
      "answer": 0,
      "explanation": {
        "en": "An exponent of $\\frac{1}{2}$ is a square root: $16^{1/2} = \\sqrt{16} = 4$. Answering $8$ divides $16$ by $2$ instead of taking the square root.",
        "zh": "指数 $\\frac{1}{2}$ 表示平方根：$16^{1/2} = \\sqrt{16} = 4$。答 $8$ 是把 $16$ 除以 $2$ 而不是开平方。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Simplify $\\frac{\\sqrt{20}}{\\sqrt{5}}$.",
        "zh": "化简 $\\frac{\\sqrt{20}}{\\sqrt{5}}$。"
      },
      "choices": [
        "$\\sqrt{15}$",
        "$2$",
        "$4$",
        "$15$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Divide under one radical: $\\sqrt{\\frac{20}{5}} = \\sqrt{4} = 2$. Getting $\\sqrt{15}$ subtracts the radicands instead of dividing them.",
        "zh": "在同一个根号下相除：$\\sqrt{\\frac{20}{5}} = \\sqrt{4} = 2$。得到 $\\sqrt{15}$ 是把根号内的数相减而不是相除了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Rationalize the denominator of $\\frac{1}{\\sqrt{3}}$.",
        "zh": "把 $\\frac{1}{\\sqrt{3}}$ 的分母有理化。"
      },
      "choices": [
        "$\\frac{1}{3}$",
        "$\\sqrt{3}$",
        "$\\frac{\\sqrt{3}}{3}$",
        "$3\\sqrt{3}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Multiply numerator and denominator by $\\sqrt{3}$: $\\frac{1}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$. Writing $\\frac{1}{3}$ drops the radical left in the numerator.",
        "zh": "分子分母同乘 $\\sqrt{3}$：$\\frac{1}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。写成 $\\frac{1}{3}$ 是漏掉了留在分子里的根号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is an irrational number?",
        "zh": "下列哪个数是无理数？"
      },
      "choices": [
        "$\\sqrt{25}$",
        "$\\frac{2}{3}$",
        "$0.75$",
        "$\\sqrt{7}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\sqrt{7}$ is not a perfect square, so its decimal never terminates or repeats, making it irrational. $\\sqrt{25} = 5$, $\\frac{2}{3}$, and $0.75$ are all rational.",
        "zh": "$7$ 不是完全平方数，所以 $\\sqrt{7}$ 的小数既不终止也不循环，是无理数。$\\sqrt{25} = 5$、$\\frac{2}{3}$ 和 $0.75$ 都是有理数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt{144}$. Give an integer.",
        "zh": "求 $\\sqrt{144}$ 的值。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "Find the number whose square is $144$: $12^{2} = 144$, so $\\sqrt{144} = 12$. The principal square root is the nonnegative value.",
        "zh": "找出平方等于 $144$ 的数：$12^{2} = 144$，所以 $\\sqrt{144} = 12$。算术平方根取非负值。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt[3]{27}$. Give an integer.",
        "zh": "求 $\\sqrt[3]{27}$ 的值。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "Find the number whose cube is $27$: $3^{3} = 27$, so $\\sqrt[3]{27} = 3$. A cube root asks for a factor used three times.",
        "zh": "找出立方等于 $27$ 的数：$3^{3} = 27$，所以 $\\sqrt[3]{27} = 3$。立方根就是找一个用三次的因子。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $25^{1/2}$. Give an integer.",
        "zh": "求 $25^{1/2}$ 的值。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "An exponent of $\\frac{1}{2}$ is a square root: $25^{1/2} = \\sqrt{25} = 5$. The fractional exponent is the same operation as the radical.",
        "zh": "指数 $\\frac{1}{2}$ 表示平方根：$25^{1/2} = \\sqrt{25} = 5$。分数指数与根号是同一种运算。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $27^{2/3}$. Give an integer.",
        "zh": "求 $27^{2/3}$ 的值。请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "+9"
      ],
      "explanation": {
        "en": "Take the cube root then square: $\\sqrt[3]{27} = 3$ and $3^{2} = 9$. The denominator $3$ is the root and the numerator $2$ is the power.",
        "zh": "先开立方再平方：$\\sqrt[3]{27} = 3$，$3^{2} = 9$。分母 $3$ 是根指数，分子 $2$ 是幂。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt{6} \\cdot \\sqrt{6}$. Give an integer.",
        "zh": "求 $\\sqrt{6} \\cdot \\sqrt{6}$ 的值。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "Multiplying a square root by itself removes the radical: $\\sqrt{6} \\cdot \\sqrt{6} = \\sqrt{36} = 6$. By definition $(\\sqrt{a})^{2} = a$.",
        "zh": "平方根自乘会消去根号：$\\sqrt{6} \\cdot \\sqrt{6} = \\sqrt{36} = 6$。根据定义 $(\\sqrt{a})^{2} = a$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $4^{3/2}$. Give an integer.",
        "zh": "求 $4^{3/2}$ 的值。请填一个整数。"
      },
      "answer": "8",
      "accept": [
        "8.0",
        "+8"
      ],
      "explanation": {
        "en": "Take the square root then cube: $\\sqrt{4} = 2$ and $2^{3} = 8$. The denominator $2$ gives the root and the numerator $3$ gives the power.",
        "zh": "先开平方再立方：$\\sqrt{4} = 2$，$2^{3} = 8$。分母 $2$ 给出根指数，分子 $3$ 给出幂。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Simplify $\\sqrt{50}$ to the form $a\\sqrt{2}$. What is $a$? Give an integer.",
        "zh": "把 $\\sqrt{50}$ 化简为 $a\\sqrt{2}$ 的形式。求 $a$。请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "Since $50 = 25 \\cdot 2$, $\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$, so $a = 5$. Pull out the square root of the perfect-square factor.",
        "zh": "因为 $50 = 25 \\cdot 2$，$\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$，所以 $a = 5$。把完全平方因子开方后提到根号外。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $16^{-1/2}$. Give your answer as a fraction in the form $a/b$.",
        "zh": "求 $16^{-1/2}$ 的值。请以分数形式 $a/b$ 作答。"
      },
      "answer": "1/4",
      "accept": [
        "0.25"
      ],
      "explanation": {
        "en": "The negative exponent takes the reciprocal and the $\\frac{1}{2}$ takes the square root: $16^{-1/2} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$. Combine the reciprocal and the root.",
        "zh": "负指数取倒数，$\\frac{1}{2}$ 表示开平方：$16^{-1/2} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$。把取倒数与开方结合起来。"
      }
    }
  ],
  "unit-12-exponential-growth-decay/exponential-functions-and-graphs": [
    {
      "type": "mc",
      "question": {
        "en": "For the exponential function $y = 4 \\cdot 2^x$, what is the $y$-intercept?",
        "zh": "对于指数函数 $y = 4 \\cdot 2^x$，其 $y$ 轴截距是多少？"
      },
      "choices": [
        "$4$",
        "$2$",
        "$8$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The $y$-intercept is the value at $x = 0$: $y = 4 \\cdot 2^0 = 4 \\cdot 1 = 4$. The tempting error is multiplying the base into the coefficient, but $2^0 = 1$, not $2$.",
        "zh": "$y$ 轴截距是 $x = 0$ 时的值：$y = 4 \\cdot 2^0 = 4 \\cdot 1 = 4$。容易犯的错误是把底数乘进系数里，但 $2^0 = 1$，不是 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Does $y = 6 \\cdot (0.5)^x$ represent exponential growth or decay?",
        "zh": "$y = 6 \\cdot (0.5)^x$ 表示指数增长还是指数衰减？"
      },
      "choices": [
        "Growth, because $a > 0$",
        "Decay, because $0 < b < 1$",
        "Growth, because $b > 1$",
        "Cannot be determined"
      ],
      "answer": 1,
      "explanation": {
        "en": "Growth vs. decay depends on the base $b$, not the coefficient $a$. Here $b = 0.5$ satisfies $0 < b < 1$, so the function decays. Judging by the positive coefficient $a = 6$ ignores that the base controls the direction.",
        "zh": "增长还是衰减取决于底数 $b$，而不是系数 $a$。这里 $b = 0.5$ 满足 $0 < b < 1$，所以函数衰减。用正系数 $a = 6$ 来判断，忽略了底数才决定方向。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the horizontal asymptote of $y = 3 \\cdot 2^x$?",
        "zh": "$y = 3 \\cdot 2^x$ 的水平渐近线是什么？"
      },
      "choices": [
        "$y = 3$",
        "$y = 2$",
        "$y = 0$",
        "$x = 0$"
      ],
      "answer": 2,
      "explanation": {
        "en": "As $x \\to -\\infty$, $2^x \\to 0$, so $y \\to 0$; the horizontal asymptote is $y = 0$. Choosing $y = 3$ confuses the $y$-intercept with the asymptote, and $x = 0$ names a vertical line, which this graph never has.",
        "zh": "当 $x \\to -\\infty$ 时，$2^x \\to 0$，故 $y \\to 0$；水平渐近线是 $y = 0$。选 $y = 3$ 是把 $y$ 轴截距误当成渐近线，而 $x = 0$ 是一条竖直线，本图从不具有竖直渐近线。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $y = a \\cdot b^x$ with $a = 2$ and $b = 3$, find the value when $x = 2$.",
        "zh": "对于 $y = a \\cdot b^x$，其中 $a = 2$，$b = 3$，求 $x = 2$ 时的值。"
      },
      "choices": [
        "$6$",
        "$12$",
        "$36$",
        "$18$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$y = 2 \\cdot 3^2 = 2 \\cdot 9 = 18$. A common slip is $(2 \\cdot 3)^2 = 36$, but only the base $3$ is raised to the power, then multiplied by $2$.",
        "zh": "$y = 2 \\cdot 3^2 = 2 \\cdot 9 = 18$。常见错误是算成 $(2 \\cdot 3)^2 = 36$，但只有底数 $3$ 被乘方，之后再乘以 $2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which function represents exponential growth?",
        "zh": "哪个函数表示指数增长？"
      },
      "choices": [
        "$y = 2 \\cdot 3^x$",
        "$y = 5 \\cdot (0.8)^x$",
        "$y = 4x + 1$",
        "$y = 7 \\cdot (1/2)^x$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Exponential growth needs the variable in the exponent and a base $b > 1$; $y = 2 \\cdot 3^x$ qualifies. Bases $0.8$ and $1/2$ give decay, and $4x + 1$ is linear, not exponential.",
        "zh": "指数增长要求变量在指数位置且底数 $b > 1$；$y = 2 \\cdot 3^x$ 符合。底数 $0.8$ 和 $1/2$ 给出衰减，而 $4x + 1$ 是线性函数，不是指数函数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A table shows $x = 0 \\to y = 5$, $x = 1 \\to y = 10$, $x = 2 \\to y = 20$. For $y = a \\cdot b^x$, what is the base $b$?",
        "zh": "一张表显示 $x = 0 \\to y = 5$，$x = 1 \\to y = 10$，$x = 2 \\to y = 20$。对于 $y = a \\cdot b^x$，底数 $b$ 是多少？"
      },
      "choices": [
        "$5$",
        "$2$",
        "$10$",
        "$1/2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In an exponential table the $y$-values multiply by a constant factor each step: $10/5 = 2$ and $20/10 = 2$, so $b = 2$. Using the difference $10 - 5 = 5$ would (wrongly) treat the pattern as linear.",
        "zh": "在指数表中，$y$ 值每一步乘以一个固定倍数：$10/5 = 2$，$20/10 = 2$，所以 $b = 2$。用差 $10 - 5 = 5$ 会（错误地）把规律当作线性。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compare $y = 100 + 10x$ (linear) and $y = 2^x$ (exponential) for large $x$. Which statement is true?",
        "zh": "对于较大的 $x$，比较 $y = 100 + 10x$（线性）与 $y = 2^x$（指数）。哪个说法正确？"
      },
      "choices": [
        "The linear function is always larger",
        "They are always equal",
        "The exponential eventually exceeds the linear",
        "The exponential is always larger"
      ],
      "answer": 2,
      "explanation": {
        "en": "For small $x$ the linear function is bigger (at $x = 0$, $100 > 1$), but exponential growth eventually overtakes any linear function and stays ahead. Saying the exponential is 'always' larger ignores the small-$x$ region where the line leads.",
        "zh": "当 $x$ 较小时线性函数更大（$x = 0$ 时 $100 > 1$），但指数增长最终会超过任何线性函数并保持领先。说指数'始终'更大，忽略了 $x$ 较小时直线领先的区间。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For an exponential decay function $y = a \\cdot b^x$ (with $a > 0$), what must be true of the base $b$?",
        "zh": "对于指数衰减函数 $y = a \\cdot b^x$（其中 $a > 0$），底数 $b$ 必须满足什么？"
      },
      "choices": [
        "$b < 0$",
        "$b > 1$",
        "$b = 1$",
        "$0 < b < 1$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Decay means each step multiplies by a factor between $0$ and $1$, so $0 < b < 1$. A base $b > 1$ gives growth, $b = 1$ gives a constant, and a negative base is not allowed for a standard exponential.",
        "zh": "衰减意味着每一步乘以介于 $0$ 与 $1$ 之间的倍数，所以 $0 < b < 1$。底数 $b > 1$ 给出增长，$b = 1$ 给出常数，而标准指数函数不允许负底数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y = a \\cdot b^x$ passes through the point $(0, 7)$. What is $a$?",
        "zh": "$y = a \\cdot b^x$ 的图象经过点 $(0, 7)$。$a$ 是多少？"
      },
      "choices": [
        "$7$",
        "$0$",
        "$1$",
        "$b$"
      ],
      "answer": 0,
      "explanation": {
        "en": "At $x = 0$, $y = a \\cdot b^0 = a \\cdot 1 = a$, so $a = 7$. The coefficient $a$ always equals the $y$-intercept because $b^0 = 1$ regardless of the base.",
        "zh": "当 $x = 0$ 时，$y = a \\cdot b^0 = a \\cdot 1 = a$，所以 $a = 7$。系数 $a$ 总等于 $y$ 轴截距，因为无论底数是多少 $b^0 = 1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Between $y = 2 \\cdot 3^x$ and $y = 2 \\cdot 5^x$, which grows faster as $x$ increases?",
        "zh": "在 $y = 2 \\cdot 3^x$ 与 $y = 2 \\cdot 5^x$ 之间，当 $x$ 增大时哪个增长更快？"
      },
      "choices": [
        "$y = 2 \\cdot 3^x$",
        "$y = 2 \\cdot 5^x$",
        "Neither grows",
        "Both grow at the same rate"
      ],
      "answer": 1,
      "explanation": {
        "en": "With equal coefficients, the larger base grows faster; since $5 > 3$, $y = 2 \\cdot 5^x$ grows faster. Thinking they grow the same ignores that a bigger base multiplies more each step.",
        "zh": "系数相同时，底数越大增长越快；因为 $5 > 3$，所以 $y = 2 \\cdot 5^x$ 增长更快。认为它们增长相同，忽略了底数越大每一步乘得越多。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the growth function $y = 3 \\cdot 2^x$, what value does $y$ approach as $x \\to -\\infty$?",
        "zh": "对于增长函数 $y = 3 \\cdot 2^x$，当 $x \\to -\\infty$ 时 $y$ 趋近于什么值？"
      },
      "choices": [
        "$-\\infty$",
        "$3$",
        "$0$",
        "$+\\infty$"
      ],
      "answer": 2,
      "explanation": {
        "en": "As $x \\to -\\infty$, $2^x$ becomes a tiny positive number approaching $0$, so $y \\to 0$ (the asymptote). It never becomes negative, because a positive base raised to any power stays positive.",
        "zh": "当 $x \\to -\\infty$ 时，$2^x$ 变成趋近于 $0$ 的极小正数，所以 $y \\to 0$（渐近线）。它永远不会变为负数，因为正底数的任何次幂都保持为正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The function $y = 100 \\cdot (0.9)^x$ models decay. Each step, the amount becomes what percent of the previous amount?",
        "zh": "函数 $y = 100 \\cdot (0.9)^x$ 表示衰减。每一步，数量变为前一步的百分之多少？"
      },
      "choices": [
        "$10\\%$",
        "$110\\%$",
        "$9\\%$",
        "$90\\%$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The base $0.9$ is the multiplier, so each step keeps $90\\%$ of the prior amount (losing $10\\%$). Reading $10\\%$ gives the amount lost, not the amount that remains.",
        "zh": "底数 $0.9$ 就是倍数，所以每一步保留前一步的 $90\\%$（损失 $10\\%$）。读成 $10\\%$ 得到的是损失量，而不是剩余量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $y = 5 \\cdot 2^x$, find $y$ when $x = 3$. Give an integer.",
        "zh": "对于 $y = 5 \\cdot 2^x$，求 $x = 3$ 时的 $y$。请填一个整数。"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "+40"
      ],
      "explanation": {
        "en": "$y = 5 \\cdot 2^3 = 5 \\cdot 8 = 40$. Compute the power first ($2^3 = 8$), then multiply by the coefficient $5$.",
        "zh": "$y = 5 \\cdot 2^3 = 5 \\cdot 8 = 40$。先算幂（$2^3 = 8$），再乘以系数 $5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-intercept of $y = 9 \\cdot 4^x$? Give an integer.",
        "zh": "$y = 9 \\cdot 4^x$ 的 $y$ 轴截距是多少？请填一个整数。"
      },
      "answer": "9",
      "accept": [
        "9.0",
        "(0,9)",
        "y=9"
      ],
      "explanation": {
        "en": "At $x = 0$, $y = 9 \\cdot 4^0 = 9 \\cdot 1 = 9$. The $y$-intercept equals the coefficient because $4^0 = 1$.",
        "zh": "当 $x = 0$ 时，$y = 9 \\cdot 4^0 = 9 \\cdot 1 = 9$。$y$ 轴截距等于系数，因为 $4^0 = 1$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "An exponential table shows $x = 0 \\to y = 3$ and $x = 1 \\to y = 12$. For $y = a \\cdot b^x$, find the base $b$. Give an integer.",
        "zh": "一张指数表显示 $x = 0 \\to y = 3$，$x = 1 \\to y = 12$。对于 $y = a \\cdot b^x$，求底数 $b$。请填一个整数。"
      },
      "answer": "4",
      "accept": [
        "4.0",
        "b=4"
      ],
      "explanation": {
        "en": "The base is the ratio of consecutive $y$-values: $12 / 3 = 4$, so $b = 4$. Using the difference $12 - 3 = 9$ would mistakenly treat the data as linear.",
        "zh": "底数是相邻 $y$ 值之比：$12 / 3 = 4$，所以 $b = 4$。用差 $12 - 3 = 9$ 会错误地把数据当作线性。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the horizontal asymptote of $y = 7 \\cdot 3^x$? Give the $y$-value.",
        "zh": "$y = 7 \\cdot 3^x$ 的水平渐近线是什么？请填该 $y$ 值。"
      },
      "answer": "0",
      "accept": [
        "y=0",
        "0.0"
      ],
      "explanation": {
        "en": "As $x \\to -\\infty$, $3^x \\to 0$, so the graph flattens toward $y = 0$. The coefficient $7$ affects the $y$-intercept, not the asymptote.",
        "zh": "当 $x \\to -\\infty$ 时，$3^x \\to 0$，所以图象趋平于 $y = 0$。系数 $7$ 影响 $y$ 轴截距，而不是渐近线。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For the decay function $y = 48 \\cdot (1/2)^x$, find $y$ when $x = 4$. Give an integer.",
        "zh": "对于衰减函数 $y = 48 \\cdot (1/2)^x$，求 $x = 4$ 时的 $y$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "+3"
      ],
      "explanation": {
        "en": "$(1/2)^4 = 1/16$, so $y = 48 \\cdot \\frac{1}{16} = 3$. Divide by the denominator $16$, not by $4$; the exponent counts halvings.",
        "zh": "$(1/2)^4 = 1/16$，所以 $y = 48 \\cdot \\frac{1}{16} = 3$。要除以分母 $16$，而不是除以 $4$；指数表示减半的次数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A population starts at 4 and triples each year, modeled by $y = a \\cdot b^x$. What is the base $b$? Give an integer.",
        "zh": "某种群初始为 4，每年变为三倍，用 $y = a \\cdot b^x$ 建模。底数 $b$ 是多少？请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "b=3"
      ],
      "explanation": {
        "en": "'Triples each year' means multiplying by $3$ every step, so the base is $b = 3$ (the coefficient $a = 4$ is the starting value). The word 'triple' names the multiplier, not the starting amount.",
        "zh": "'每年变为三倍'意味着每步乘以 $3$，所以底数 $b = 3$（系数 $a = 4$ 是初始值）。'三倍'一词指的是倍数，而不是初始量。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For $y = 250 \\cdot (0.5)^x$, find $y$ when $x = 2$. Give a decimal.",
        "zh": "对于 $y = 250 \\cdot (0.5)^x$，求 $x = 2$ 时的 $y$。请填小数。"
      },
      "answer": "62.5",
      "accept": [
        "62.50",
        "125/2"
      ],
      "explanation": {
        "en": "$(0.5)^2 = 0.25$, so $y = 250 \\cdot 0.25 = 62.5$. Square the base first; halving twice divides by $4$, not by $2$.",
        "zh": "$(0.5)^2 = 0.25$，所以 $y = 250 \\cdot 0.25 = 62.5$。先对底数平方；减半两次是除以 $4$，而不是除以 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The graph of $y = a \\cdot b^x$ passes through $(0, 8)$ and $(1, 24)$. Find the base $b$. Give an integer.",
        "zh": "$y = a \\cdot b^x$ 的图象经过 $(0, 8)$ 和 $(1, 24)$。求底数 $b$。请填一个整数。"
      },
      "answer": "3",
      "accept": [
        "3.0",
        "b=3"
      ],
      "explanation": {
        "en": "The point $(0, 8)$ gives $a = 8$. Then $24 = 8 \\cdot b^1$, so $b = 24 / 8 = 3$. Divide the two $y$-values to get the base; subtracting them would wrongly assume a linear pattern.",
        "zh": "点 $(0, 8)$ 给出 $a = 8$。再由 $24 = 8 \\cdot b^1$，得 $b = 24 / 8 = 3$。用两个 $y$ 值相除得到底数；相减则会错误地假设线性规律。"
      }
    }
  ],
  "unit-12-exponential-growth-decay/modeling-growth-and-decay": [
    {
      "type": "mc",
      "question": {
        "en": "A population grows $5\\%$ per year. What is the growth factor (base) $b$ in $y = a \\cdot b^x$?",
        "zh": "某种群每年增长 $5\\%$。在 $y = a \\cdot b^x$ 中增长因子（底数）$b$ 是多少？"
      },
      "choices": [
        "$1.05$",
        "$1.5$",
        "$0.05$",
        "$0.95$"
      ],
      "answer": 0,
      "explanation": {
        "en": "A $5\\%$ increase means multiplying by $1 + 0.05 = 1.05$. Using $0.05$ alone forgets the original $100\\%$ that is kept before adding the growth.",
        "zh": "增长 $5\\%$ 意味着乘以 $1 + 0.05 = 1.05$。只用 $0.05$ 忘记了在加上增长之前保留的原始 $100\\%$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car's value decays $8\\%$ per year. What is the decay factor (base) $b$?",
        "zh": "一辆车的价值每年衰减 $8\\%$。衰减因子（底数）$b$ 是多少？"
      },
      "choices": [
        "$1.08$",
        "$0.92$",
        "$0.08$",
        "$0.8$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Losing $8\\%$ means keeping $100\\% - 8\\% = 92\\%$, so $b = 0.92$. Choosing $1.08$ adds the rate (that would be growth); $0.08$ is only the part lost.",
        "zh": "损失 $8\\%$ 意味着保留 $100\\% - 8\\% = 92\\%$，所以 $b = 0.92$。选 $1.08$ 是加上了增长率（那是增长）；$0.08$ 只是损失的部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You deposit $\\$1000$ at $4\\%$ annual interest compounded yearly. What is the balance after 1 year?",
        "zh": "你存入 $\\$1000$，年利率 $4\\%$，按年复利。1 年后的余额是多少？"
      },
      "choices": [
        "$\\$1004$",
        "$\\$1044$",
        "$\\$1040$",
        "$\\$1400$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$1000 \\cdot 1.04 = 1040$. The interest is $4\\%$ of $\\$1000 = \\$40$, added to the principal. Getting $\\$1004$ mistakes $4\\%$ for $\\$4$.",
        "zh": "$1000 \\cdot 1.04 = 1040$。利息是 $\\$1000$ 的 $4\\% = \\$40$，加到本金上。得到 $\\$1004$ 是把 $4\\%$ 误当成 $\\$4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The model $y = 200 \\cdot (1.1)^x$ describes growth. What is the annual growth rate?",
        "zh": "模型 $y = 200 \\cdot (1.1)^x$ 描述增长。年增长率是多少？"
      },
      "choices": [
        "$110\\%$",
        "$0.1\\%$",
        "$1\\%$",
        "$10\\%$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The base $1.1 = 1 + 0.1$, so the rate is $0.1 = 10\\%$. Reading $110\\%$ reports the whole multiplier instead of the extra portion added each year.",
        "zh": "底数 $1.1 = 1 + 0.1$，所以增长率是 $0.1 = 10\\%$。读成 $110\\%$ 报告的是整个倍数，而不是每年新增的部分。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A substance halves every 3 hours. Starting from $80$ g, how much remains after 6 hours?",
        "zh": "某物质每 3 小时减半。从 $80$ 克开始，6 小时后剩下多少？"
      },
      "choices": [
        "$20$ g",
        "$40$ g",
        "$10$ g",
        "$26.7$ g"
      ],
      "answer": 0,
      "explanation": {
        "en": "6 hours is two half-lives, so the amount halves twice: $80 \\to 40 \\to 20$ g. Halving once (to $40$) counts only one of the two 3-hour periods.",
        "zh": "6 小时是两个半衰期，所以数量减半两次：$80 \\to 40 \\to 20$ 克。只减半一次（到 $40$）只算了两个 3 小时周期中的一个。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "You invest $\\$500$ at $6\\%$ interest compounded annually. Which model gives the balance after $t$ years?",
        "zh": "你投资 $\\$500$，年利率 $6\\%$，按年复利。哪个模型给出 $t$ 年后的余额？"
      },
      "choices": [
        "$500 \\cdot (0.06)^t$",
        "$500 \\cdot (1.06)^t$",
        "$500 \\cdot (1.6)^t$",
        "$500 + 0.06t$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Compound interest multiplies by $1 + 0.06 = 1.06$ each year, giving $500 \\cdot (1.06)^t$. The linear form $500 + 0.06t$ would model simple, non-compounding change.",
        "zh": "复利每年乘以 $1 + 0.06 = 1.06$，得到 $500 \\cdot (1.06)^t$。线性形式 $500 + 0.06t$ 表示的是单利、不复利的变化。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A car worth $\\$20000$ depreciates $15\\%$ per year. What is its value after 1 year?",
        "zh": "一辆价值 $\\$20000$ 的车每年贬值 $15\\%$。1 年后价值多少？"
      },
      "choices": [
        "$\\$23000$",
        "$\\$3000$",
        "$\\$17000$",
        "$\\$19985$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Keep $85\\%$: $20000 \\cdot 0.85 = 17000$. The value $\\$3000$ is only the amount lost ($15\\%$), not what remains.",
        "zh": "保留 $85\\%$：$20000 \\cdot 0.85 = 17000$。$\\$3000$ 只是损失的部分（$15\\%$），不是剩余量。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Bacteria double every hour, starting from $50$. Using $y = 50 \\cdot 2^t$, how many are there after 3 hours?",
        "zh": "细菌每小时翻倍，初始为 $50$。用 $y = 50 \\cdot 2^t$，3 小时后有多少？"
      },
      "choices": [
        "$300$",
        "$150$",
        "$350$",
        "$400$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$y = 50 \\cdot 2^3 = 50 \\cdot 8 = 400$. Doubling three times multiplies by $8$; using $50 \\cdot 3 = 150$ treats tripling-once as if it were the pattern.",
        "zh": "$y = 50 \\cdot 2^3 = 50 \\cdot 8 = 400$。翻倍三次是乘以 $8$；用 $50 \\cdot 3 = 150$ 把'乘以 3'当成了规律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A growth factor of $1.25$ corresponds to what percent increase per step?",
        "zh": "增长因子 $1.25$ 对应每步增长百分之多少？"
      },
      "choices": [
        "$25\\%$",
        "$125\\%$",
        "$2.5\\%$",
        "$1.25\\%$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$1.25 = 1 + 0.25$, so the increase is $25\\%$. Reporting $125\\%$ states the full multiplier rather than the added growth of $25\\%$.",
        "zh": "$1.25 = 1 + 0.25$，所以增长为 $25\\%$。报告 $125\\%$ 说的是整个倍数，而不是新增的 $25\\%$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A quantity is multiplied by $0.9$ each year. What is the annual decay rate?",
        "zh": "某数量每年乘以 $0.9$。年衰减率是多少？"
      },
      "choices": [
        "$90\\%$",
        "$10\\%$",
        "$9\\%$",
        "$0.9\\%$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Keeping $90\\%$ means losing $100\\% - 90\\% = 10\\%$ each year, so the decay rate is $10\\%$. The value $90\\%$ is the fraction that stays, not the rate lost.",
        "zh": "保留 $90\\%$ 意味着每年损失 $100\\% - 90\\% = 10\\%$，所以衰减率是 $10\\%$。$90\\%$ 是保留的比例，不是损失率。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "An investment doubles every 5 years. Which model gives its value after $t$ years?",
        "zh": "一笔投资每 5 年翻倍。哪个模型给出 $t$ 年后的价值？"
      },
      "choices": [
        "$P \\cdot 2^{5t}$",
        "$P \\cdot 5^t$",
        "$P \\cdot 2^{t/5}$",
        "$P \\cdot 2^{t}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "One doubling happens per 5 years, so the number of doublings is $t/5$, giving $P \\cdot 2^{t/5}$. Writing $2^{5t}$ would double every year five times over, far too fast.",
        "zh": "每 5 年翻倍一次，所以翻倍次数是 $t/5$，得到 $P \\cdot 2^{t/5}$。写成 $2^{5t}$ 会每年翻五倍，太快了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which situation is an example of exponential decay?",
        "zh": "以下哪种情况是指数衰减的例子？"
      },
      "choices": [
        "A savings account earning $3\\%$ interest yearly",
        "A phone plan costing $40$ dollars flat each month",
        "Water rising $2$ cm each hour",
        "A car losing $12\\%$ of its value yearly"
      ],
      "answer": 3,
      "explanation": {
        "en": "Losing a fixed percent each year multiplies by a constant factor below $1$, which is exponential decay. Earning interest is exponential growth, and the flat fee and steady rise are constant or linear, not exponential.",
        "zh": "每年损失固定百分比是乘以一个小于 $1$ 的固定倍数，这是指数衰减。赚利息是指数增长，而固定费用和匀速上升是常数或线性，不是指数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity grows $7\\%$ per year. What is the growth factor (base)? Give a decimal.",
        "zh": "某数量每年增长 $7\\%$。增长因子（底数）是多少？请填小数。"
      },
      "answer": "1.07",
      "accept": [
        "1.070",
        "107/100"
      ],
      "explanation": {
        "en": "A $7\\%$ increase multiplies by $1 + 0.07 = 1.07$. Keep the original $100\\%$ and add the $7\\%$ growth.",
        "zh": "增长 $7\\%$ 是乘以 $1 + 0.07 = 1.07$。保留原始 $100\\%$ 再加上 $7\\%$ 的增长。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A quantity decays $20\\%$ per year. What is the decay factor (base)? Give a decimal.",
        "zh": "某数量每年衰减 $20\\%$。衰减因子（底数）是多少？请填小数。"
      },
      "answer": "0.8",
      "accept": [
        "0.80",
        "4/5",
        ".8"
      ],
      "explanation": {
        "en": "Losing $20\\%$ leaves $100\\% - 20\\% = 80\\%$, so the factor is $0.8$. The rate $0.2$ is only the part removed, not the multiplier.",
        "zh": "损失 $20\\%$ 剩下 $100\\% - 20\\% = 80\\%$，所以因子是 $0.8$。$0.2$ 只是去掉的部分，不是倍数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "You deposit $\\$2000$ at $5\\%$ interest compounded annually. What is the balance after 2 years? Give the amount in dollars (integer).",
        "zh": "你存入 $\\$2000$，年利率 $5\\%$，按年复利。2 年后的余额是多少？请填美元金额（整数）。"
      },
      "answer": "2205",
      "accept": [
        "2205.0",
        "$2205",
        "2205.00"
      ],
      "explanation": {
        "en": "$2000 \\cdot (1.05)^2 = 2000 \\cdot 1.1025 = 2205$. Compound interest applies the factor twice; $2000 + 2 \\cdot 100 = 2200$ (simple interest) misses interest earned on the first year's interest.",
        "zh": "$2000 \\cdot (1.05)^2 = 2000 \\cdot 1.1025 = 2205$。复利要用两次因子；$2000 + 2 \\cdot 100 = 2200$（单利）漏掉了第一年利息再生的利息。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A radioactive sample has a half-life of 4 hours, starting at $160$ mg. How much remains after 8 hours? Give the amount in mg (integer).",
        "zh": "某放射性样品半衰期为 4 小时，初始为 $160$ 毫克。8 小时后剩下多少？请填毫克数（整数）。"
      },
      "answer": "40",
      "accept": [
        "40.0",
        "40mg"
      ],
      "explanation": {
        "en": "8 hours is two half-lives, so halve twice: $160 \\to 80 \\to 40$ mg. Halving only once (to $80$) counts a single 4-hour period instead of two.",
        "zh": "8 小时是两个半衰期，所以减半两次：$160 \\to 80 \\to 40$ 毫克。只减半一次（到 $80$）只算了一个 4 小时周期，而不是两个。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Bacteria double every hour, starting from $30$. How many are there after 4 hours? Give an integer.",
        "zh": "细菌每小时翻倍，初始为 $30$。4 小时后有多少？请填一个整数。"
      },
      "answer": "480",
      "accept": [
        "480.0",
        "+480"
      ],
      "explanation": {
        "en": "$30 \\cdot 2^4 = 30 \\cdot 16 = 480$. Doubling four times multiplies by $16$; $30 \\cdot 4 = 120$ mistakes repeated doubling for multiplying by the number of hours.",
        "zh": "$30 \\cdot 2^4 = 30 \\cdot 16 = 480$。翻倍四次是乘以 $16$；$30 \\cdot 4 = 120$ 把反复翻倍误当成乘以小时数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A town of $1000$ people grows $10\\%$ per year. What is the population after 1 year? Give an integer.",
        "zh": "一个 $1000$ 人的城镇每年增长 $10\\%$。1 年后人口是多少？请填一个整数。"
      },
      "answer": "1100",
      "accept": [
        "1100.0",
        "+1100"
      ],
      "explanation": {
        "en": "$1000 \\cdot 1.10 = 1100$. The growth is $10\\%$ of $1000 = 100$ people added. Getting $1010$ would treat $10\\%$ as if it were $10$ people.",
        "zh": "$1000 \\cdot 1.10 = 1100$。增长是 $1000$ 的 $10\\% = 100$ 人。得到 $1010$ 是把 $10\\%$ 误当成 $10$ 人。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A sample halves every day. What fraction of the original remains after 3 days? Give a fraction.",
        "zh": "某样品每天减半。3 天后剩下原量的几分之几？请填分数。"
      },
      "answer": "1/8",
      "accept": [
        "0.125",
        ".125",
        "1/8th"
      ],
      "explanation": {
        "en": "Each day multiplies by $\\frac{1}{2}$, so after 3 days the fraction is $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$. Writing $\\frac{1}{6}$ mistakenly multiplies $\\frac{1}{2}$ by $3$ instead of raising it to the 3rd power.",
        "zh": "每天乘以 $\\frac{1}{2}$，所以 3 天后比例是 $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$。写成 $\\frac{1}{6}$ 是把 $\\frac{1}{2}$ 乘以 $3$，而不是取 3 次方。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A laptop worth $\\$800$ depreciates $25\\%$ per year. What is its value after 1 year? Give the amount in dollars (integer).",
        "zh": "一台价值 $\\$800$ 的笔记本电脑每年贬值 $25\\%$。1 年后价值多少？请填美元金额（整数）。"
      },
      "answer": "600",
      "accept": [
        "600.0",
        "$600"
      ],
      "explanation": {
        "en": "Keep $75\\%$: $800 \\cdot 0.75 = 600$. The value $\\$200$ is only the amount lost ($25\\%$ of $800$), not what remains.",
        "zh": "保留 $75\\%$：$800 \\cdot 0.75 = 600$。$\\$200$ 只是损失的部分（$800$ 的 $25\\%$），不是剩余量。"
      }
    }
  ],
  "unit-13-quadratics-multiplying-factoring/multiplying-binomials-special-products": [
    {
      "type": "mc",
      "question": {
        "en": "Expand $(x + 3)(x + 5)$.",
        "zh": "展开 $(x + 3)(x + 5)$。"
      },
      "choices": [
        "$x^2 + 8x + 15$",
        "$x^2 + 15x + 8$",
        "$x^2 + 2x + 15$",
        "$x^2 + 8x + 8$"
      ],
      "answer": 0,
      "explanation": {
        "en": "FOIL: $x \\cdot x = x^2$, outer/inner give $5x + 3x = 8x$, last gives $15$. So $x^2 + 8x + 15$. A common slip is to add the constants for the middle term instead of adding the cross products.",
        "zh": "用 FOIL：$x \\cdot x = x^2$，外项与内项得 $5x + 3x = 8x$，末项得 $15$。故为 $x^2 + 8x + 15$。常见错误是把两个常数相加当作中间项，而不是把交叉乘积相加。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(x + 7)(x - 2)$.",
        "zh": "展开 $(x + 7)(x - 2)$。"
      },
      "choices": [
        "$x^2 - 5x - 14$",
        "$x^2 + 5x - 14$",
        "$x^2 + 5x + 14$",
        "$x^2 + 9x - 14$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Cross products: $-2x + 7x = 5x$; last term $7 \\cdot (-2) = -14$. So $x^2 + 5x - 14$. Losing track of the sign on $-2$ flips the middle term.",
        "zh": "交叉乘积：$-2x + 7x = 5x$；末项 $7 \\cdot (-2) = -14$。故为 $x^2 + 5x - 14$。若丢掉 $-2$ 的符号会使中间项正负颠倒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(2x + 3)(x + 4)$.",
        "zh": "展开 $(2x + 3)(x + 4)$。"
      },
      "choices": [
        "$2x^2 + 5x + 12$",
        "$2x^2 + 7x + 7$",
        "$2x^2 + 11x + 12$",
        "$2x^2 + 12x + 12$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$2x \\cdot x = 2x^2$; outer $8x$ plus inner $3x = 11x$; last $12$. So $2x^2 + 11x + 12$. Forgetting to multiply the $2x$ by the $4$ undercounts the middle term.",
        "zh": "$2x \\cdot x = 2x^2$；外项 $8x$ 加内项 $3x = 11x$；末项 $12$。故为 $2x^2 + 11x + 12$。忘记用 $2x$ 乘 $4$ 会使中间项偏小。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(x - 4)^2$.",
        "zh": "展开 $(x - 4)^2$。"
      },
      "choices": [
        "$x^2 - 16$",
        "$x^2 + 16$",
        "$x^2 - 8x - 16$",
        "$x^2 - 8x + 16$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(a - b)^2 = a^2 - 2ab + b^2 = x^2 - 8x + 16$. A frequent error is to square each term only and write $x^2 - 16$, dropping the $-2ab$ middle term.",
        "zh": "$(a - b)^2 = a^2 - 2ab + b^2 = x^2 - 8x + 16$。常见错误是只把每一项平方，写成 $x^2 - 16$，漏掉了 $-2ab$ 这个中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(x + 6)^2$.",
        "zh": "展开 $(x + 6)^2$。"
      },
      "choices": [
        "$x^2 + 12x + 36$",
        "$x^2 + 36$",
        "$x^2 + 6x + 36$",
        "$x^2 + 12x + 12$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$(a + b)^2 = a^2 + 2ab + b^2 = x^2 + 12x + 36$. The middle term is $2 \\cdot x \\cdot 6 = 12x$; omitting the factor of $2$ is the classic mistake.",
        "zh": "$(a + b)^2 = a^2 + 2ab + b^2 = x^2 + 12x + 36$。中间项为 $2 \\cdot x \\cdot 6 = 12x$；漏掉因子 $2$ 是经典错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(x + 5)(x - 5)$.",
        "zh": "展开 $(x + 5)(x - 5)$。"
      },
      "choices": [
        "$x^2 + 10x - 25$",
        "$x^2 - 25$",
        "$x^2 + 25$",
        "$x^2 - 10x - 25$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Difference of squares: $(a + b)(a - b) = a^2 - b^2 = x^2 - 25$. The cross products $-5x + 5x$ cancel, so there is no middle term.",
        "zh": "平方差公式：$(a + b)(a - b) = a^2 - b^2 = x^2 - 25$。交叉乘积 $-5x + 5x$ 相消，故没有中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(3x - 2)(3x + 2)$.",
        "zh": "展开 $(3x - 2)(3x + 2)$。"
      },
      "choices": [
        "$9x^2 + 4$",
        "$6x^2 - 4$",
        "$9x^2 - 4$",
        "$9x^2 - 12x - 4$"
      ],
      "answer": 2,
      "explanation": {
        "en": "This is $(a - b)(a + b)$ with $a = 3x$, $b = 2$: $a^2 - b^2 = 9x^2 - 4$. Note $(3x)^2 = 9x^2$, not $3x^2$; squaring only the $x$ is a common slip.",
        "zh": "这是 $(a - b)(a + b)$，其中 $a = 3x$，$b = 2$：$a^2 - b^2 = 9x^2 - 4$。注意 $(3x)^2 = 9x^2$，而非 $3x^2$；只对 $x$ 平方是常见错误。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(2x - 5)^2$.",
        "zh": "展开 $(2x - 5)^2$。"
      },
      "choices": [
        "$4x^2 - 25$",
        "$2x^2 - 20x + 25$",
        "$4x^2 + 20x + 25$",
        "$4x^2 - 20x + 25$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$(2x - 5)^2 = (2x)^2 - 2(2x)(5) + 5^2 = 4x^2 - 20x + 25$. Both squaring $2x$ to get $4x^2$ and keeping the $-20x$ middle term are needed.",
        "zh": "$(2x - 5)^2 = (2x)^2 - 2(2x)(5) + 5^2 = 4x^2 - 20x + 25$。既要把 $2x$ 平方得 $4x^2$，也要保留中间项 $-20x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(x - 3)(x - 8)$.",
        "zh": "展开 $(x - 3)(x - 8)$。"
      },
      "choices": [
        "$x^2 - 11x + 24$",
        "$x^2 + 11x + 24$",
        "$x^2 - 5x + 24$",
        "$x^2 - 11x - 24$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Middle term $-3x - 8x = -11x$; last term $(-3)(-8) = +24$. So $x^2 - 11x + 24$. Two negatives multiply to a positive constant, which trips up many students.",
        "zh": "中间项 $-3x - 8x = -11x$；末项 $(-3)(-8) = +24$。故为 $x^2 - 11x + 24$。两个负数相乘得正的常数项，这一点常令学生出错。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Expand $(4x + 1)(x - 3)$.",
        "zh": "展开 $(4x + 1)(x - 3)$。"
      },
      "choices": [
        "$4x^2 + 11x - 3$",
        "$4x^2 - 11x - 3$",
        "$4x^2 - 13x - 3$",
        "$4x^2 - 11x + 3$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Outer $4x \\cdot (-3) = -12x$; inner $1 \\cdot x = x$; sum $-11x$. Last $1 \\cdot (-3) = -3$. So $4x^2 - 11x - 3$. Mishandling the sign of $-12x$ is the usual error.",
        "zh": "外项 $4x \\cdot (-3) = -12x$；内项 $1 \\cdot x = x$；相加得 $-11x$。末项 $1 \\cdot (-3) = -3$。故为 $4x^2 - 11x - 3$。处理 $-12x$ 的符号出错是常见问题。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which product expands to a binomial with NO middle $x$-term?",
        "zh": "下列哪个乘积展开后是没有中间 $x$ 项的二项式？"
      },
      "choices": [
        "$(x + 4)(x + 4)$",
        "$(x + 4)(x - 3)$",
        "$(x + 4)(x - 4)$",
        "$(x - 4)(x - 4)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Only $(x + 4)(x - 4)$ has the form $(a + b)(a - b)$, whose cross products cancel, giving $x^2 - 16$. The squared forms produce a $\\pm 8x$ middle term.",
        "zh": "只有 $(x + 4)(x - 4)$ 具有 $(a + b)(a - b)$ 的形式，其交叉乘积相消，得 $x^2 - 16$。而完全平方形式会产生 $\\pm 8x$ 的中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the middle term of $(3x + 5)^2$?",
        "zh": "$(3x + 5)^2$ 的中间项是什么？"
      },
      "choices": [
        "$8x$",
        "$15x$",
        "$25x$",
        "$30x$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The middle term is $2ab = 2 \\cdot 3x \\cdot 5 = 30x$, so $(3x + 5)^2 = 9x^2 + 30x + 25$. Writing $15x$ forgets the factor of $2$ from the square-of-a-sum rule.",
        "zh": "中间项为 $2ab = 2 \\cdot 3x \\cdot 5 = 30x$，故 $(3x + 5)^2 = 9x^2 + 30x + 25$。写成 $15x$ 是忘记了和的平方公式中的因子 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x + 2)(x + 9)$, what is the coefficient of $x$? Give an integer.",
        "zh": "在 $(x + 2)(x + 9)$ 的展开式中，$x$ 的系数是多少？请填整数。"
      },
      "answer": "11",
      "accept": [
        "+11",
        "11.0"
      ],
      "explanation": {
        "en": "The coefficient of $x$ is the sum of the constants: $2 + 9 = 11$. (Full expansion: $x^2 + 11x + 18$.)",
        "zh": "$x$ 的系数是两个常数之和：$2 + 9 = 11$。（完整展开：$x^2 + 11x + 18$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x - 6)(x + 6)$, what is the constant term? Give an integer.",
        "zh": "在 $(x - 6)(x + 6)$ 的展开式中，常数项是多少？请填整数。"
      },
      "answer": "-36",
      "accept": [
        "−36",
        "-36.0"
      ],
      "explanation": {
        "en": "Difference of squares: $x^2 - 6^2 = x^2 - 36$, so the constant term is $-36$. The product of $-6$ and $+6$ is negative.",
        "zh": "平方差：$x^2 - 6^2 = x^2 - 36$，故常数项为 $-36$。$-6$ 与 $+6$ 的乘积为负。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(2x + 3)^2$, what is the coefficient of $x$? Give an integer.",
        "zh": "在 $(2x + 3)^2$ 的展开式中，$x$ 的系数是多少？请填整数。"
      },
      "answer": "12",
      "accept": [
        "+12",
        "12.0"
      ],
      "explanation": {
        "en": "The middle term is $2 \\cdot 2x \\cdot 3 = 12x$, so the coefficient is $12$. (Full: $4x^2 + 12x + 9$.)",
        "zh": "中间项为 $2 \\cdot 2x \\cdot 3 = 12x$，故系数为 $12$。（完整：$4x^2 + 12x + 9$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x + 5)^2$, what is the constant term? Give an integer.",
        "zh": "在 $(x + 5)^2$ 的展开式中，常数项是多少？请填整数。"
      },
      "answer": "25",
      "accept": [
        "+25",
        "25.0"
      ],
      "explanation": {
        "en": "The constant term is $5^2 = 25$, giving $x^2 + 10x + 25$. The last term is just $b^2$.",
        "zh": "常数项为 $5^2 = 25$，即 $x^2 + 10x + 25$。末项就是 $b^2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(5x - 1)(5x + 1)$, what is the coefficient of $x^2$? Give an integer.",
        "zh": "在 $(5x - 1)(5x + 1)$ 的展开式中，$x^2$ 的系数是多少？请填整数。"
      },
      "answer": "25",
      "accept": [
        "+25",
        "25.0"
      ],
      "explanation": {
        "en": "This is $(5x)^2 - 1^2 = 25x^2 - 1$, so the coefficient of $x^2$ is $25$. Remember $(5x)^2 = 25x^2$.",
        "zh": "这是 $(5x)^2 - 1^2 = 25x^2 - 1$，故 $x^2$ 的系数为 $25$。记住 $(5x)^2 = 25x^2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x - 7)^2$, what is the coefficient of $x$? Give an integer (include the sign).",
        "zh": "在 $(x - 7)^2$ 的展开式中，$x$ 的系数是多少？请填整数（含符号）。"
      },
      "answer": "-14",
      "accept": [
        "−14",
        "-14.0"
      ],
      "explanation": {
        "en": "The middle term is $-2 \\cdot x \\cdot 7 = -14x$, so the coefficient is $-14$. (Full: $x^2 - 14x + 49$.)",
        "zh": "中间项为 $-2 \\cdot x \\cdot 7 = -14x$，故系数为 $-14$。（完整：$x^2 - 14x + 49$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "In the expansion of $(x + 8)(x - 3)$, what is the coefficient of $x$? Give an integer (include the sign).",
        "zh": "在 $(x + 8)(x - 3)$ 的展开式中，$x$ 的系数是多少？请填整数（含符号）。"
      },
      "answer": "5",
      "accept": [
        "+5",
        "5.0"
      ],
      "explanation": {
        "en": "Cross products: $-3x + 8x = 5x$, so the coefficient is $5$. (Full: $x^2 + 5x - 24$.)",
        "zh": "交叉乘积：$-3x + 8x = 5x$，故系数为 $5$。（完整：$x^2 + 5x - 24$。）"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Use the special product $(a - b)^2$ to compute $99^2$. Give the integer value.",
        "zh": "利用完全平方公式 $(a - b)^2$ 计算 $99^2$。请填整数值。"
      },
      "answer": "9801",
      "accept": [
        "9801.0"
      ],
      "explanation": {
        "en": "$99^2 = (100 - 1)^2 = 100^2 - 2 \\cdot 100 \\cdot 1 + 1 = 10000 - 200 + 1 = 9801$. The special product turns a hard square into easy mental math.",
        "zh": "$99^2 = (100 - 1)^2 = 100^2 - 2 \\cdot 100 \\cdot 1 + 1 = 10000 - 200 + 1 = 9801$。完全平方公式把难算的平方变成简单的心算。"
      }
    }
  ],
  "unit-13-quadratics-multiplying-factoring/factoring-quadratics": [
    {
      "type": "mc",
      "question": {
        "en": "Factor $x^2 + 7x + 12$.",
        "zh": "因式分解 $x^2 + 7x + 12$。"
      },
      "choices": [
        "$(x + 3)(x + 4)$",
        "$(x + 2)(x + 6)$",
        "$(x + 1)(x + 12)$",
        "$(x - 3)(x - 4)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Find two numbers that multiply to $12$ and add to $7$: those are $3$ and $4$. So $x^2 + 7x + 12 = (x + 3)(x + 4)$. Checking $2$ and $6$ multiplies to $12$ but sums to $8$, not $7$.",
        "zh": "找两个数，乘积为 $12$、和为 $7$：即 $3$ 和 $4$。故 $x^2 + 7x + 12 = (x + 3)(x + 4)$。若取 $2$ 和 $6$，乘积虽为 $12$，但和为 $8$，不是 $7$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $x^2 - x - 12$.",
        "zh": "因式分解 $x^2 - x - 12$。"
      },
      "choices": [
        "$(x - 3)(x + 4)$",
        "$(x - 4)(x + 3)$",
        "$(x - 2)(x + 6)$",
        "$(x + 4)(x + 3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Need product $-12$ and sum $-1$: the numbers are $-4$ and $+3$. So $(x - 4)(x + 3)$. Swapping the signs to $-3$ and $+4$ would give a sum of $+1$, not $-1$.",
        "zh": "需乘积 $-12$、和 $-1$：即 $-4$ 与 $+3$。故 $(x - 4)(x + 3)$。若把符号换成 $-3$ 与 $+4$，其和为 $+1$，而非 $-1$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $x^2 - 9x + 20$.",
        "zh": "因式分解 $x^2 - 9x + 20$。"
      },
      "choices": [
        "$(x - 2)(x - 10)$",
        "$(x + 4)(x + 5)$",
        "$(x - 4)(x - 5)$",
        "$(x - 1)(x - 20)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Product $20$, sum $-9$: both factors negative, $-4$ and $-5$. So $(x - 4)(x - 5)$. A positive-sign pair gives sum $+9$, the wrong sign.",
        "zh": "乘积 $20$、和 $-9$：两个因数都为负，即 $-4$ 与 $-5$。故 $(x - 4)(x - 5)$。若取正号一对，和为 $+9$，符号不对。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $x^2 - 16$.",
        "zh": "因式分解 $x^2 - 16$。"
      },
      "choices": [
        "$(x - 8)(x - 2)$",
        "$(x - 4)^2$",
        "$(x + 4)^2$",
        "$(x - 4)(x + 4)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "This is a difference of squares $a^2 - b^2 = (a - b)(a + b)$ with $a = x$, $b = 4$: $(x - 4)(x + 4)$. Writing $(x - 4)^2$ would expand to $x^2 - 8x + 16$, which has an unwanted middle term.",
        "zh": "这是平方差 $a^2 - b^2 = (a - b)(a + b)$，其中 $a = x$，$b = 4$：$(x - 4)(x + 4)$。写成 $(x - 4)^2$ 会展开为 $x^2 - 8x + 16$，多出不该有的中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $2x^2 + 7x + 3$.",
        "zh": "因式分解 $2x^2 + 7x + 3$。"
      },
      "choices": [
        "$(2x + 1)(x + 3)$",
        "$(2x + 3)(x + 1)$",
        "$(2x + 3)(x + 3)$",
        "$(x + 1)(x + 3)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "For $ax^2 + bx + c$ with $a = 2$, split the middle using factors of $ac = 6$ that add to $7$: $1$ and $6$. This yields $(2x + 1)(x + 3)$; check the outer/inner: $6x + x = 7x$. The pair $(2x + 3)(x + 1)$ gives $2x + 3x = 5x$ instead.",
        "zh": "对 $ax^2 + bx + c$（$a = 2$），用 $ac = 6$ 的因数拆中项，使其和为 $7$：即 $1$ 与 $6$。得 $(2x + 1)(x + 3)$；验证外内项：$6x + x = 7x$。而 $(2x + 3)(x + 1)$ 给出 $2x + 3x = 5x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $3x^2 - 10x - 8$.",
        "zh": "因式分解 $3x^2 - 10x - 8$。"
      },
      "choices": [
        "$(3x + 4)(x - 2)$",
        "$(3x + 2)(x - 4)$",
        "$(3x - 2)(x + 4)$",
        "$(3x - 4)(x + 2)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "$ac = 3 \\cdot (-8) = -24$; need two numbers multiplying to $-24$ and adding to $-10$: $-12$ and $+2$. This gives $(3x + 2)(x - 4)$; check: outer $-12x$ plus inner $2x = -10x$. Sign swaps produce $+10x$.",
        "zh": "$ac = 3 \\cdot (-8) = -24$；需两数乘积 $-24$、和 $-10$：即 $-12$ 与 $+2$。得 $(3x + 2)(x - 4)$；验证：外项 $-12x$ 加内项 $2x = -10x$。符号交换会得到 $+10x$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $x^2 + 10x + 25$.",
        "zh": "因式分解 $x^2 + 10x + 25$。"
      },
      "choices": [
        "$(x + 25)(x + 1)$",
        "$(x - 5)^2$",
        "$(x + 5)^2$",
        "$(x + 5)(x - 5)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "This is a perfect-square trinomial: $25 = 5^2$ and $10x = 2 \\cdot 5x$, so it factors as $(x + 5)^2$. The $(x + 5)(x - 5)$ option is a difference of squares and would give $x^2 - 25$.",
        "zh": "这是完全平方三项式：$25 = 5^2$ 且 $10x = 2 \\cdot 5x$，故分解为 $(x + 5)^2$。选项 $(x + 5)(x - 5)$ 是平方差，会得到 $x^2 - 25$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $9x^2 - 4$.",
        "zh": "因式分解 $9x^2 - 4$。"
      },
      "choices": [
        "$(9x - 2)(x + 2)$",
        "$(3x - 4)(3x + 1)$",
        "$(3x - 2)^2$",
        "$(3x - 2)(3x + 2)$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Difference of squares with $a = 3x$, $b = 2$: $(3x)^2 - 2^2 = (3x - 2)(3x + 2)$. Recognizing $9x^2 = (3x)^2$ is the key step; $(3x - 2)^2$ would have a middle term.",
        "zh": "平方差，其中 $a = 3x$，$b = 2$：$(3x)^2 - 2^2 = (3x - 2)(3x + 2)$。关键是认出 $9x^2 = (3x)^2$；$(3x - 2)^2$ 会有中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor completely: $6x^2 + 9x$.",
        "zh": "完全因式分解：$6x^2 + 9x$。"
      },
      "choices": [
        "$3x(2x + 3)$",
        "$3(2x^2 + 3x)$",
        "$x(6x + 9)$",
        "$3x(2x + 9)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The greatest common factor of $6x^2$ and $9x$ is $3x$: $6x^2 + 9x = 3x(2x + 3)$. Pulling out only $3$ or only $x$ leaves a term that can still be factored, so it is not fully factored.",
        "zh": "$6x^2$ 与 $9x$ 的最大公因式是 $3x$：$6x^2 + 9x = 3x(2x + 3)$。只提出 $3$ 或只提出 $x$，剩下的还能再分解，故未完全分解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $x^2 + 2x - 15$.",
        "zh": "因式分解 $x^2 + 2x - 15$。"
      },
      "choices": [
        "$(x - 5)(x + 3)$",
        "$(x + 5)(x - 3)$",
        "$(x + 15)(x - 1)$",
        "$(x + 5)(x + 3)$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Product $-15$, sum $+2$: the numbers are $+5$ and $-3$. So $(x + 5)(x - 3)$. Reversing to $-5$ and $+3$ would give a sum of $-2$, the wrong sign on the middle term.",
        "zh": "乘积 $-15$、和 $+2$：即 $+5$ 与 $-3$。故 $(x + 5)(x - 3)$。若反过来取 $-5$ 与 $+3$，其和为 $-2$，中间项符号就错了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Factor $4x^2 - 12x + 9$.",
        "zh": "因式分解 $4x^2 - 12x + 9$。"
      },
      "choices": [
        "$(2x - 9)(2x - 1)$",
        "$(2x - 3)(2x + 3)$",
        "$(2x - 3)^2$",
        "$(4x - 3)(x - 3)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "A perfect square: $4x^2 = (2x)^2$, $9 = 3^2$, and $-12x = -2 \\cdot 2x \\cdot 3$, so it is $(2x - 3)^2$. Treating it as a difference of squares would drop the required middle term.",
        "zh": "完全平方：$4x^2 = (2x)^2$，$9 = 3^2$，且 $-12x = -2 \\cdot 2x \\cdot 3$，故为 $(2x - 3)^2$。若当作平方差处理，会漏掉必需的中间项。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which quadratic CANNOT be factored over the integers?",
        "zh": "下列哪个二次式在整数范围内无法因式分解？"
      },
      "choices": [
        "$x^2 - 9$",
        "$x^2 + 5x + 6$",
        "$x^2 - 4x + 4$",
        "$x^2 + 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "A sum of squares $x^2 + 4$ has no real linear factors over the integers. The others factor as $(x-3)(x+3)$, $(x+2)(x+3)$, and $(x-2)^2$. Only a difference of squares factors, not a sum.",
        "zh": "平方和 $x^2 + 4$ 在整数范围内没有实的一次因式。其余分别分解为 $(x-3)(x+3)$、$(x+2)(x+3)$ 和 $(x-2)^2$。只有平方差可分解，平方和不可以。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$x^2 + 8x + 15 = (x + a)(x + b)$ with $a < b$. What is $a$? Give an integer.",
        "zh": "$x^2 + 8x + 15 = (x + a)(x + b)$，其中 $a < b$。求 $a$。请填整数。"
      },
      "answer": "3",
      "accept": [
        "+3",
        "3.0"
      ],
      "explanation": {
        "en": "Two numbers multiply to $15$ and add to $8$: $3$ and $5$. The smaller is $a = 3$, so $(x + 3)(x + 5)$.",
        "zh": "两数乘积 $15$、和 $8$：即 $3$ 与 $5$。较小的是 $a = 3$，故 $(x + 3)(x + 5)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Factor out the greatest common factor of $12x^2 + 18x$. What is the GCF? Write it like $6x$.",
        "zh": "提出 $12x^2 + 18x$ 的最大公因式。这个最大公因式是什么？写成如 $6x$ 的形式。"
      },
      "answer": "6x",
      "accept": [
        "6*x"
      ],
      "explanation": {
        "en": "The numeric GCF of $12$ and $18$ is $6$, and both terms share one $x$, so the GCF is $6x$: $12x^2 + 18x = 6x(2x + 3)$.",
        "zh": "$12$ 与 $18$ 的最大公约数是 $6$，两项都含一个 $x$，故最大公因式为 $6x$：$12x^2 + 18x = 6x(2x + 3)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$x^2 - 49 = (x - a)(x + a)$. Find the positive value of $a$. Give an integer.",
        "zh": "$x^2 - 49 = (x - a)(x + a)$。求 $a$ 的正值。请填整数。"
      },
      "answer": "7",
      "accept": [
        "+7",
        "7.0"
      ],
      "explanation": {
        "en": "This is a difference of squares: $49 = 7^2$, so $a = 7$ and $x^2 - 49 = (x - 7)(x + 7)$.",
        "zh": "这是平方差：$49 = 7^2$，故 $a = 7$，且 $x^2 - 49 = (x - 7)(x + 7)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by factoring: $x^2 - 5x + 6 = 0$. Give the LARGER solution as an integer.",
        "zh": "用因式分解求解：$x^2 - 5x + 6 = 0$。将较大的解填为整数。"
      },
      "answer": "3",
      "accept": [
        "+3",
        "3.0",
        "x=3"
      ],
      "explanation": {
        "en": "$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$. The larger solution is $3$.",
        "zh": "$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$，故 $x = 2$ 或 $x = 3$。较大的解是 $3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$x^2 + bx + 9$ is a perfect-square trinomial equal to $(x + 3)^2$. Find the positive value of $b$. Give an integer.",
        "zh": "$x^2 + bx + 9$ 是完全平方三项式，等于 $(x + 3)^2$。求 $b$ 的正值。请填整数。"
      },
      "answer": "6",
      "accept": [
        "+6",
        "6.0"
      ],
      "explanation": {
        "en": "For a perfect square, $b = 2 \\cdot 3 = 6$, giving $x^2 + 6x + 9 = (x + 3)^2$. The middle coefficient is twice the square root of the constant.",
        "zh": "对完全平方，$b = 2 \\cdot 3 = 6$，即 $x^2 + 6x + 9 = (x + 3)^2$。中间系数是常数项平方根的两倍。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Completely factor $2x^2 - 8$; it equals $2(x - c)(x + c)$. Find the positive value of $c$. Give an integer.",
        "zh": "完全因式分解 $2x^2 - 8$；它等于 $2(x - c)(x + c)$。求 $c$ 的正值。请填整数。"
      },
      "answer": "2",
      "accept": [
        "+2",
        "2.0"
      ],
      "explanation": {
        "en": "First factor out the GCF $2$: $2x^2 - 8 = 2(x^2 - 4)$. Then $x^2 - 4 = (x - 2)(x + 2)$, so $c = 2$. Always pull the GCF before using difference of squares.",
        "zh": "先提出最大公因式 $2$：$2x^2 - 8 = 2(x^2 - 4)$。再有 $x^2 - 4 = (x - 2)(x + 2)$，故 $c = 2$。使用平方差前应先提取最大公因式。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve by factoring: $x^2 - x - 20 = 0$. Give the LARGER solution as an integer.",
        "zh": "用因式分解求解：$x^2 - x - 20 = 0$。将较大的解填为整数。"
      },
      "answer": "5",
      "accept": [
        "+5",
        "5.0",
        "x=5"
      ],
      "explanation": {
        "en": "$x^2 - x - 20 = (x - 5)(x + 4) = 0$, so $x = 5$ or $x = -4$. The larger solution is $5$.",
        "zh": "$x^2 - x - 20 = (x - 5)(x + 4) = 0$，故 $x = 5$ 或 $x = -4$。较大的解是 $5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "$4x^2 + 12x + 9 = (2x + 3)^2$. Solve $(2x + 3)^2 = 0$ for $x$. Give the answer as a fraction like $-3/2$.",
        "zh": "$4x^2 + 12x + 9 = (2x + 3)^2$。解 $(2x + 3)^2 = 0$。答案写成如 $-3/2$ 的分数。"
      },
      "answer": "-3/2",
      "accept": [
        "-1.5",
        "x=-3/2",
        "−3/2"
      ],
      "explanation": {
        "en": "The perfect square is zero only when $2x + 3 = 0$, so $x = -3/2$. There is a single (repeated) root because the factor is squared.",
        "zh": "完全平方仅当 $2x + 3 = 0$ 时为零，故 $x = -3/2$。由于因子是平方，故为一个（重）根。"
      }
    }
  ],
  "unit-14-quadratic-functions-equations/graphing-quadratics": [
    {
      "type": "mc",
      "question": {
        "en": "What is the axis of symmetry of $y = 2x^2 - 8x + 6$?",
        "zh": "$y = 2x^2 - 8x + 6$ 的对称轴是什么？"
      },
      "choices": [
        "$x = 2$",
        "$x = -2$",
        "$x = 4$",
        "$x = -4$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The axis of symmetry is $x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$. Forgetting the negative sign in the formula gives $-2$.",
        "zh": "对称轴为 $x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$。忘记公式中的负号会得到 $-2$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The graph of $y = (x-1)^2 + 4$ opens upward. What is its minimum $y$-value?",
        "zh": "$y = (x-1)^2 + 4$ 的图像开口向上，它的最小 $y$ 值是多少？"
      },
      "choices": [
        "$1$",
        "$4$",
        "$-1$",
        "$-4$"
      ],
      "answer": 1,
      "explanation": {
        "en": "In vertex form $y = a(x-h)^2 + k$, the vertex is $(1, 4)$. Since it opens upward, the minimum $y$-value is $k = 4$. Reporting $1$ mistakes the $x$-coordinate of the vertex for the minimum value.",
        "zh": "顶点式 $y = a(x-h)^2 + k$ 中，顶点为 $(1, 4)$。开口向上，故最小 $y$ 值为 $k = 4$。答 $1$ 是把顶点的 $x$ 坐标误当成最小值。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = (x+3)^2 - 5$?",
        "zh": "$y = (x+3)^2 - 5$ 的顶点是什么？"
      },
      "choices": [
        "$(3, -5)$",
        "$(-3, 5)$",
        "$(-3, -5)$",
        "$(3, 5)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "In $y = a(x-h)^2 + k$ the vertex is $(h, k)$. Here $x + 3 = x - (-3)$, so $h = -3$ and $k = -5$, giving $(-3, -5)$. Reading $h = 3$ ignores that the sign inside the parentheses flips.",
        "zh": "在 $y = a(x-h)^2 + k$ 中顶点为 $(h, k)$。这里 $x + 3 = x - (-3)$，故 $h = -3$，$k = -5$，得 $(-3, -5)$。把 $h$ 读成 $3$ 是忽略了括号内符号要取反。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Describe the graph of $y = -\\frac{1}{2}x^2 + 3x - 1$.",
        "zh": "描述 $y = -\\frac{1}{2}x^2 + 3x - 1$ 的图像。"
      },
      "choices": [
        "Opens upward and has a minimum",
        "It is a straight line",
        "Opens upward and has a maximum",
        "Opens downward and has a maximum"
      ],
      "answer": 3,
      "explanation": {
        "en": "The leading coefficient $a = -\\frac{1}{2} < 0$, so the parabola opens downward and therefore has a maximum, not a minimum. A negative $a$ never opens upward.",
        "zh": "首项系数 $a = -\\frac{1}{2} < 0$，故抛物线开口向下，因而有最大值而非最小值。$a$ 为负时绝不会开口向上。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $y$-intercept of $y = x^2 - 4x + 7$?",
        "zh": "$y = x^2 - 4x + 7$ 的 $y$ 轴截距是什么？"
      },
      "choices": [
        "$(0, 7)$",
        "$(7, 0)$",
        "$(0, -7)$",
        "$(4, 7)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Set $x = 0$: $y = 0 - 0 + 7 = 7$, so the $y$-intercept is $(0, 7)$. Writing $(7, 0)$ confuses the $y$-intercept with an $x$-intercept by swapping the coordinates.",
        "zh": "令 $x = 0$：$y = 0 - 0 + 7 = 7$，故 $y$ 轴截距为 $(0, 7)$。写成 $(7, 0)$ 是把 $y$ 轴截距与 $x$ 轴截距的坐标弄反了。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Find the $x$-intercepts of $y = x^2 - 9$.",
        "zh": "求 $y = x^2 - 9$ 的 $x$ 轴截距。"
      },
      "choices": [
        "$x = 9$ only",
        "$x = 3$ and $x = -3$",
        "$x = -3$ only",
        "$x = 3$ only"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $y = 0$: $x^2 - 9 = 0$, so $x^2 = 9$ and $x = \\pm 3$. Both roots are intercepts. Keeping only the positive root forgets that squaring loses the sign.",
        "zh": "令 $y = 0$：$x^2 - 9 = 0$，故 $x^2 = 9$，$x = \\pm 3$。两个根都是截距。只保留正根是忘了平方会丢掉符号。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Compared with $y = x^2$, the graph of $y = 3x^2$ is:",
        "zh": "与 $y = x^2$ 相比，$y = 3x^2$ 的图像："
      },
      "choices": [
        "Wider",
        "The same width",
        "Narrower",
        "Opening downward"
      ],
      "answer": 2,
      "explanation": {
        "en": "A larger $|a|$ stretches the parabola vertically, making it rise faster and appear narrower. Since $|3| > 1$, the graph is narrower than $y = x^2$. A larger coefficient does not widen the curve.",
        "zh": "$|a|$ 越大，抛物线纵向被拉伸，上升更快，看起来更窄。因 $|3| > 1$，图像比 $y = x^2$ 更窄。系数变大不会使曲线变宽。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the axis of symmetry of $y = (x-4)^2 + 2$?",
        "zh": "$y = (x-4)^2 + 2$ 的对称轴是什么？"
      },
      "choices": [
        "$x = 2$",
        "$x = -4$",
        "$x = -2$",
        "$x = 4$"
      ],
      "answer": 3,
      "explanation": {
        "en": "The axis of symmetry passes through the vertex's $x$-coordinate $h = 4$, so $x = 4$. Using $k = 2$ mistakes the vertical shift for the axis.",
        "zh": "对称轴经过顶点的 $x$ 坐标 $h = 4$，故 $x = 4$。用 $k = 2$ 是把纵向平移误当成对称轴。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the vertex of $y = x^2 + 6x + 5$?",
        "zh": "$y = x^2 + 6x + 5$ 的顶点是什么？"
      },
      "choices": [
        "$(-3, -4)$",
        "$(3, -4)$",
        "$(-3, 4)$",
        "$(-6, 5)$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The vertex $x$ is $-\\frac{b}{2a} = -\\frac{6}{2} = -3$; then $y = (-3)^2 + 6(-3) + 5 = 9 - 18 + 5 = -4$, giving $(-3, -4)$. Dropping the negative on $x$ gives the wrong point.",
        "zh": "顶点的 $x$ 为 $-\\frac{b}{2a} = -\\frac{6}{2} = -3$；再代入 $y = (-3)^2 + 6(-3) + 5 = 9 - 18 + 5 = -4$，得 $(-3, -4)$。把 $x$ 的负号丢掉会得到错误的点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A parabola opens upward and its vertex lies above the $x$-axis. How many $x$-intercepts does it have?",
        "zh": "一条抛物线开口向上，且顶点在 $x$ 轴上方。它有多少个 $x$ 轴截距？"
      },
      "choices": [
        "Two",
        "Zero",
        "Cannot be determined",
        "One"
      ],
      "answer": 1,
      "explanation": {
        "en": "If it opens upward with the lowest point above the $x$-axis, the whole curve stays above the axis and never crosses it, so there are zero $x$-intercepts. Assuming every parabola crosses twice ignores the vertex's position.",
        "zh": "若开口向上且最低点在 $x$ 轴上方，整条曲线都在轴上方，永不相交，故有零个 $x$ 轴截距。以为每条抛物线都相交两次是忽略了顶点位置。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What is the $y$-intercept of $y = 2x^2 - 3x - 4$?",
        "zh": "$y = 2x^2 - 3x - 4$ 的 $y$ 轴截距是什么？"
      },
      "choices": [
        "$(0, 4)$",
        "$(-4, 0)$",
        "$(0, -4)$",
        "$(0, -3)$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Set $x = 0$: $y = -4$, so the $y$-intercept is $(0, -4)$, which is just the constant term $c$. Dropping the negative sign or using the $b$-value both give wrong points.",
        "zh": "令 $x = 0$：$y = -4$，故 $y$ 轴截距为 $(0, -4)$，即常数项 $c$。丢掉负号或误用 $b$ 值都会得到错误的点。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which form of a quadratic immediately reveals the vertex?",
        "zh": "二次函数的哪种形式能直接显示顶点？"
      },
      "choices": [
        "Standard form $ax^2 + bx + c$",
        "Factored form $a(x-r)(x-s)$",
        "Slope-intercept form $y = mx + b$",
        "Vertex form $a(x-h)^2 + k$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Vertex form $a(x-h)^2 + k$ shows the vertex $(h, k)$ directly. Factored form reveals the $x$-intercepts, and standard form reveals the $y$-intercept, but neither shows the vertex without extra work.",
        "zh": "顶点式 $a(x-h)^2 + k$ 直接给出顶点 $(h, k)$。因式分解式显示 $x$ 轴截距，标准式显示 $y$ 轴截距，但两者都需额外计算才能得到顶点。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the axis of symmetry of $y = x^2 - 6x + 5$. Give the value of $x$ as a number.",
        "zh": "求 $y = x^2 - 6x + 5$ 的对称轴。请以数字给出 $x$ 的值。"
      },
      "answer": "3",
      "accept": [
        "x=3",
        "x = 3"
      ],
      "explanation": {
        "en": "The axis of symmetry is $x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$.",
        "zh": "对称轴为 $x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the vertex of $y = (x-2)^2 - 7$. Give it as an ordered pair $(x, y)$.",
        "zh": "求 $y = (x-2)^2 - 7$ 的顶点。请以有序数对 $(x, y)$ 形式作答。"
      },
      "answer": "(2,-7)",
      "accept": [
        "2,-7",
        "2, -7",
        "(2, -7)"
      ],
      "explanation": {
        "en": "In vertex form $a(x-h)^2 + k$, the vertex is $(h, k) = (2, -7)$.",
        "zh": "在顶点式 $a(x-h)^2 + k$ 中，顶点为 $(h, k) = (2, -7)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the $y$-value of the $y$-intercept of $y = x^2 + 3x - 10$? Give an integer.",
        "zh": "$y = x^2 + 3x - 10$ 的 $y$ 轴截距的 $y$ 值是多少？请填整数。"
      },
      "answer": "-10",
      "accept": [
        "(0,-10)",
        "0,-10"
      ],
      "explanation": {
        "en": "Set $x = 0$: $y = -10$. The $y$-intercept is the constant term $c = -10$.",
        "zh": "令 $x = 0$：$y = -10$。$y$ 轴截距即常数项 $c = -10$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "The parabola $y = x^2 - 5x + 6$ crosses the $x$-axis at two points. Give the smaller $x$-intercept as a number.",
        "zh": "抛物线 $y = x^2 - 5x + 6$ 与 $x$ 轴交于两点。请以数字给出较小的 $x$ 轴截距。"
      },
      "answer": "2",
      "accept": [
        "x=2",
        "x = 2"
      ],
      "explanation": {
        "en": "Factor: $x^2 - 5x + 6 = (x-2)(x-3) = 0$, so $x = 2$ or $x = 3$. The smaller intercept is $x = 2$.",
        "zh": "因式分解：$x^2 - 5x + 6 = (x-2)(x-3) = 0$，故 $x = 2$ 或 $x = 3$。较小的截距为 $x = 2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the minimum value of $y = x^2 - 8x + 18$. Give an integer.",
        "zh": "求 $y = x^2 - 8x + 18$ 的最小值。请填整数。"
      },
      "answer": "2",
      "accept": [
        "y=2",
        "y = 2"
      ],
      "explanation": {
        "en": "Vertex $x = -\\frac{-8}{2} = 4$; then $y = 16 - 32 + 18 = 2$. Since it opens upward, the minimum value is $2$.",
        "zh": "顶点 $x = -\\frac{-8}{2} = 4$；再代入 $y = 16 - 32 + 18 = 2$。开口向上，故最小值为 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the maximum value of $y = -(x-3)^2 + 5$. Give an integer.",
        "zh": "求 $y = -(x-3)^2 + 5$ 的最大值。请填整数。"
      },
      "answer": "5",
      "accept": [
        "y=5",
        "y = 5"
      ],
      "explanation": {
        "en": "The vertex is $(3, 5)$ and $a = -1 < 0$, so the parabola opens downward and its maximum value is $k = 5$.",
        "zh": "顶点为 $(3, 5)$，$a = -1 < 0$，故抛物线开口向下，最大值为 $k = 5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the vertex of $y = x^2 + 4x + 1$. Give it as an ordered pair $(x, y)$.",
        "zh": "求 $y = x^2 + 4x + 1$ 的顶点。请以有序数对 $(x, y)$ 形式作答。"
      },
      "answer": "(-2,-3)",
      "accept": [
        "-2,-3",
        "-2, -3",
        "(-2, -3)"
      ],
      "explanation": {
        "en": "Vertex $x = -\\frac{4}{2} = -2$; then $y = (-2)^2 + 4(-2) + 1 = 4 - 8 + 1 = -3$, so the vertex is $(-2, -3)$.",
        "zh": "顶点 $x = -\\frac{4}{2} = -2$；再代入 $y = (-2)^2 + 4(-2) + 1 = 4 - 8 + 1 = -3$，故顶点为 $(-2, -3)$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many $x$-intercepts does $y = x^2 + 1$ have? Give a whole number.",
        "zh": "$y = x^2 + 1$ 有多少个 $x$ 轴截距？请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "zero",
        "none"
      ],
      "explanation": {
        "en": "Setting $y = 0$ gives $x^2 = -1$, which has no real solution, so the graph never crosses the $x$-axis: zero intercepts.",
        "zh": "令 $y = 0$ 得 $x^2 = -1$，无实数解，故图像不与 $x$ 轴相交：零个截距。"
      }
    }
  ],
  "unit-14-quadratic-functions-equations/solving-quadratics-factoring-square-roots": [
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 = 49$.",
        "zh": "解方程 $x^2 = 49$。"
      },
      "choices": [
        "$x = \\pm 7$",
        "$x = -7$ only",
        "$x = 7$ only",
        "$x = \\pm\\sqrt{7}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Taking the square root of both sides gives $x = \\pm\\sqrt{49} = \\pm 7$. Keeping only $x = 7$ forgets the negative root that also squares to $49$.",
        "zh": "两边取平方根得 $x = \\pm\\sqrt{49} = \\pm 7$。只保留 $x = 7$ 是忘了负根平方后同样等于 $49$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $(x-2)(x+5) = 0$.",
        "zh": "解方程 $(x-2)(x+5) = 0$。"
      },
      "choices": [
        "$x = -2$ or $x = 5$",
        "$x = 2$ or $x = -5$",
        "$x = 2$ or $x = 5$",
        "$x = -2$ or $x = -5$"
      ],
      "answer": 1,
      "explanation": {
        "en": "By the zero-product property, set each factor to $0$: $x - 2 = 0$ gives $x = 2$, and $x + 5 = 0$ gives $x = -5$. Flipping the signs of the roots reverses the factors incorrectly.",
        "zh": "由零积性质，令每个因式为 $0$：$x - 2 = 0$ 得 $x = 2$，$x + 5 = 0$ 得 $x = -5$。把根的符号取反是错误地反转了因式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 - 7x = 0$.",
        "zh": "解方程 $x^2 - 7x = 0$。"
      },
      "choices": [
        "$x = 7$ only",
        "$x = -7$ or $x = 0$",
        "$x = 0$ or $x = 7$",
        "$x = 7$ or $x = -7$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Factor out $x$: $x(x - 7) = 0$, so $x = 0$ or $x = 7$. Dividing both sides by $x$ would drop the solution $x = 0$.",
        "zh": "提取公因式 $x$：$x(x - 7) = 0$，故 $x = 0$ 或 $x = 7$。两边同除以 $x$ 会丢掉解 $x = 0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 + 5x + 6 = 0$.",
        "zh": "解方程 $x^2 + 5x + 6 = 0$。"
      },
      "choices": [
        "$x = 2$ or $x = 3$",
        "$x = 2$ or $x = -3$",
        "$x = -2$ or $x = 3$",
        "$x = -2$ or $x = -3$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Factor: $(x+2)(x+3) = 0$, so $x = -2$ or $x = -3$. Both roots are negative because their sum $-5$ and product $6$ are both consistent with two negatives. Using positive roots ignores the sign pattern.",
        "zh": "因式分解：$(x+2)(x+3) = 0$，故 $x = -2$ 或 $x = -3$。两根皆负，因其和为 $-5$、积为 $6$。取正根忽略了符号规律。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 - 3x - 10 = 0$.",
        "zh": "解方程 $x^2 - 3x - 10 = 0$。"
      },
      "choices": [
        "$x = 5$ or $x = -2$",
        "$x = 5$ or $x = 2$",
        "$x = -5$ or $x = 2$",
        "$x = -5$ or $x = -2$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Factor: $(x-5)(x+2) = 0$, so $x = 5$ or $x = -2$. The two roots have opposite signs because the constant term $-10$ is negative. Getting both signs backward misreads the factors.",
        "zh": "因式分解：$(x-5)(x+2) = 0$，故 $x = 5$ 或 $x = -2$。因常数项 $-10$ 为负，两根异号。把两个符号都弄反是读错了因式。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $k > 0$, how many real solutions does $x^2 = k$ have?",
        "zh": "当 $k > 0$ 时，方程 $x^2 = k$ 有多少个实数解？"
      },
      "choices": [
        "One",
        "Two",
        "Zero",
        "Infinitely many"
      ],
      "answer": 1,
      "explanation": {
        "en": "For a positive $k$, $x = \\pm\\sqrt{k}$ gives two distinct real solutions. Reporting one solution forgets the negative square root.",
        "zh": "当 $k$ 为正时，$x = \\pm\\sqrt{k}$ 给出两个不同的实数解。答一个解是忘了负平方根。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $(x-4)^2 = 25$.",
        "zh": "解方程 $(x-4)^2 = 25$。"
      },
      "choices": [
        "$x = 9$ only",
        "$x = 1$ or $x = -1$",
        "$x = 9$ or $x = -1$",
        "$x = 21$ or $x = -21$"
      ],
      "answer": 2,
      "explanation": {
        "en": "Take the square root: $x - 4 = \\pm 5$, so $x = 4 + 5 = 9$ or $x = 4 - 5 = -1$. Forgetting the $\\pm$ keeps only $x = 9$.",
        "zh": "取平方根：$x - 4 = \\pm 5$，故 $x = 4 + 5 = 9$ 或 $x = 4 - 5 = -1$。忘记 $\\pm$ 只会保留 $x = 9$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $2x^2 - 8 = 0$.",
        "zh": "解方程 $2x^2 - 8 = 0$。"
      },
      "choices": [
        "$x = \\pm 4$",
        "$x = \\pm\\sqrt{2}$",
        "$x = 2$ only",
        "$x = \\pm 2$"
      ],
      "answer": 3,
      "explanation": {
        "en": "Add $8$ and divide by $2$: $x^2 = 4$, so $x = \\pm 2$. Solving $x^2 = 4$ (not $x = 4$) is the key step; taking $\\pm 4$ skips dividing by the leading coefficient.",
        "zh": "两边加 $8$ 再除以 $2$：$x^2 = 4$，故 $x = \\pm 2$。关键是解 $x^2 = 4$（而非 $x = 4$）；取 $\\pm 4$ 是漏了除以首项系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The zero-product property lets you set each factor to zero only when the product equals:",
        "zh": "只有当乘积等于以下哪个值时，零积性质才允许令每个因式为零："
      },
      "choices": [
        "$0$",
        "$1$",
        "any number",
        "the leading coefficient"
      ],
      "answer": 0,
      "explanation": {
        "en": "The zero-product property applies only when the product equals $0$: if $AB = 0$ then $A = 0$ or $B = 0$. It fails for other values, so the equation must be set equal to $0$ first.",
        "zh": "零积性质仅当乘积等于 $0$ 时成立：若 $AB = 0$，则 $A = 0$ 或 $B = 0$。对其他值不成立，故须先令方程等于 $0$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 - 6x + 9 = 0$.",
        "zh": "解方程 $x^2 - 6x + 9 = 0$。"
      },
      "choices": [
        "$x = -3$",
        "$x = 3$ (a double root)",
        "$x = 3$ or $x = -3$",
        "$x = 9$"
      ],
      "answer": 1,
      "explanation": {
        "en": "This is a perfect square: $(x-3)^2 = 0$, so $x = 3$ is a repeated (double) root. There is only one distinct solution, so listing $\\pm 3$ is incorrect.",
        "zh": "这是完全平方：$(x-3)^2 = 0$，故 $x = 3$ 为重根（二重根）。只有一个不同的解，故列出 $\\pm 3$ 是错的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 + 4 = 0$ over the real numbers.",
        "zh": "在实数范围内解方程 $x^2 + 4 = 0$。"
      },
      "choices": [
        "$x = \\pm 2$",
        "$x = 2$",
        "No real solution",
        "$x = -2$"
      ],
      "answer": 2,
      "explanation": {
        "en": "This gives $x^2 = -4$, but a real square is never negative, so there is no real solution. Answering $\\pm 2$ forgets that $2^2 = 4$, not $-4$.",
        "zh": "此式给出 $x^2 = -4$，但实数的平方绝不为负，故无实数解。答 $\\pm 2$ 是忘了 $2^2 = 4$ 而非 $-4$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Solve $x^2 = 20$, giving the exact answer.",
        "zh": "解方程 $x^2 = 20$，请给出精确答案。"
      },
      "choices": [
        "$x = \\pm 10$",
        "$x = \\pm 5\\sqrt{2}$",
        "$x = \\pm\\sqrt{10}$",
        "$x = \\pm 2\\sqrt{5}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$x = \\pm\\sqrt{20} = \\pm\\sqrt{4 \\cdot 5} = \\pm 2\\sqrt{5}$. Taking half of $20$ to get $\\pm 10$ confuses square roots with division.",
        "zh": "$x = \\pm\\sqrt{20} = \\pm\\sqrt{4 \\cdot 5} = \\pm 2\\sqrt{5}$。把 $20$ 取一半得到 $\\pm 10$ 是把平方根与除法混淆了。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 = 81$. Give the positive solution as an integer.",
        "zh": "解方程 $x^2 = 81$。请以整数给出正解。"
      },
      "answer": "9",
      "accept": [
        "x=9",
        "+9",
        "x = 9"
      ],
      "explanation": {
        "en": "$x = \\pm\\sqrt{81} = \\pm 9$; the positive solution is $9$.",
        "zh": "$x = \\pm\\sqrt{81} = \\pm 9$；正解为 $9$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 - x - 12 = 0$. Give the larger root as an integer.",
        "zh": "解方程 $x^2 - x - 12 = 0$。请以整数给出较大的根。"
      },
      "answer": "4",
      "accept": [
        "x=4",
        "x = 4"
      ],
      "explanation": {
        "en": "Factor: $(x-4)(x+3) = 0$, so $x = 4$ or $x = -3$. The larger root is $4$.",
        "zh": "因式分解：$(x-4)(x+3) = 0$，故 $x = 4$ 或 $x = -3$。较大的根为 $4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 - 2x - 15 = 0$. Give the negative root as an integer.",
        "zh": "解方程 $x^2 - 2x - 15 = 0$。请以整数给出负根。"
      },
      "answer": "-3",
      "accept": [
        "x=-3",
        "x = -3"
      ],
      "explanation": {
        "en": "Factor: $(x-5)(x+3) = 0$, so $x = 5$ or $x = -3$. The negative root is $-3$.",
        "zh": "因式分解：$(x-5)(x+3) = 0$，故 $x = 5$ 或 $x = -3$。负根为 $-3$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $(x+1)^2 = 9$. Give the larger solution as an integer.",
        "zh": "解方程 $(x+1)^2 = 9$。请以整数给出较大的解。"
      },
      "answer": "2",
      "accept": [
        "x=2",
        "x = 2"
      ],
      "explanation": {
        "en": "Take the square root: $x + 1 = \\pm 3$, so $x = 2$ or $x = -4$. The larger solution is $2$.",
        "zh": "取平方根：$x + 1 = \\pm 3$，故 $x = 2$ 或 $x = -4$。较大的解为 $2$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 + 10x + 25 = 0$. This has one repeated root; give it as an integer.",
        "zh": "解方程 $x^2 + 10x + 25 = 0$。它有一个重根；请以整数给出。"
      },
      "answer": "-5",
      "accept": [
        "x=-5",
        "x = -5"
      ],
      "explanation": {
        "en": "This is a perfect square: $(x+5)^2 = 0$, so the repeated root is $x = -5$.",
        "zh": "这是完全平方：$(x+5)^2 = 0$，故重根为 $x = -5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $3x^2 = 48$. Give the positive solution as an integer.",
        "zh": "解方程 $3x^2 = 48$。请以整数给出正解。"
      },
      "answer": "4",
      "accept": [
        "x=4",
        "x = 4"
      ],
      "explanation": {
        "en": "Divide by $3$: $x^2 = 16$, so $x = \\pm 4$; the positive solution is $4$. You must divide out the leading coefficient before taking the root.",
        "zh": "两边除以 $3$：$x^2 = 16$，故 $x = \\pm 4$；正解为 $4$。取平方根前须先除掉首项系数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 - 8x + 15 = 0$ and give the sum of its two solutions as an integer.",
        "zh": "解方程 $x^2 - 8x + 15 = 0$，并以整数给出两解之和。"
      },
      "answer": "8",
      "accept": [
        "+8"
      ],
      "explanation": {
        "en": "Factor: $(x-3)(x-5) = 0$, so $x = 3$ or $x = 5$; their sum is $3 + 5 = 8$.",
        "zh": "因式分解：$(x-3)(x-5) = 0$，故 $x = 3$ 或 $x = 5$；两解之和为 $3 + 5 = 8$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 = 0$. Give the solution as an integer.",
        "zh": "解方程 $x^2 = 0$。请以整数给出解。"
      },
      "answer": "0",
      "accept": [
        "x=0",
        "x = 0"
      ],
      "explanation": {
        "en": "$x^2 = 0$ has the single repeated solution $x = 0$.",
        "zh": "$x^2 = 0$ 只有唯一的重根 $x = 0$。"
      }
    }
  ],
  "unit-14-quadratic-functions-equations/quadratic-formula-and-applications": [
    {
      "type": "mc",
      "question": {
        "en": "What is the discriminant of $x^2 + 3x + 2 = 0$?",
        "zh": "$x^2 + 3x + 2 = 0$ 的判别式是多少？"
      },
      "choices": [
        "$1$",
        "$-1$",
        "$17$",
        "$5$"
      ],
      "answer": 0,
      "explanation": {
        "en": "The discriminant is $b^2 - 4ac = 3^2 - 4(1)(2) = 9 - 8 = 1$. Adding instead of subtracting $4ac$ gives $17$.",
        "zh": "判别式为 $b^2 - 4ac = 3^2 - 4(1)(2) = 9 - 8 = 1$。把减 $4ac$ 误作加会得到 $17$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the discriminant of a quadratic is positive, how many real solutions does it have?",
        "zh": "若一个二次方程的判别式为正，它有多少个实数解？"
      },
      "choices": [
        "Zero",
        "Two",
        "Cannot be determined",
        "One"
      ],
      "answer": 1,
      "explanation": {
        "en": "A positive discriminant means $\\pm\\sqrt{b^2-4ac}$ gives two different real values, so there are two distinct real solutions.",
        "zh": "判别式为正意味着 $\\pm\\sqrt{b^2-4ac}$ 给出两个不同的实数值，故有两个不同的实数解。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the discriminant equals $0$, the quadratic has:",
        "zh": "若判别式等于 $0$，该二次方程有："
      },
      "choices": [
        "No real solution",
        "Two distinct real solutions",
        "One repeated real solution",
        "Two complex solutions only"
      ],
      "answer": 2,
      "explanation": {
        "en": "When $b^2 - 4ac = 0$, the $\\pm\\sqrt{0}$ term vanishes, so both roots coincide into one repeated real solution.",
        "zh": "当 $b^2 - 4ac = 0$ 时，$\\pm\\sqrt{0}$ 项消失，两根重合为一个重根（实数解）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "If the discriminant is negative, how many real solutions does the quadratic have?",
        "zh": "若判别式为负，该二次方程有多少个实数解？"
      },
      "choices": [
        "Two",
        "One",
        "Infinitely many",
        "Zero"
      ],
      "answer": 3,
      "explanation": {
        "en": "A negative discriminant means $\\sqrt{b^2-4ac}$ is not a real number, so there are zero real solutions. The graph does not cross the $x$-axis.",
        "zh": "判别式为负意味着 $\\sqrt{b^2-4ac}$ 不是实数，故有零个实数解。图像不与 $x$ 轴相交。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Use the quadratic formula to solve $x^2 - 5x + 6 = 0$.",
        "zh": "用二次公式解 $x^2 - 5x + 6 = 0$。"
      },
      "choices": [
        "$x = 2, 3$",
        "$x = 1, 6$",
        "$x = -2, -3$",
        "$x = 5, 6$"
      ],
      "answer": 0,
      "explanation": {
        "en": "Discriminant $= 25 - 24 = 1$, so $x = \\frac{5 \\pm 1}{2} = 3$ or $2$. The roots must be positive because $-b = 5 > 0$ and $c = 6 > 0$.",
        "zh": "判别式 $= 25 - 24 = 1$，故 $x = \\frac{5 \\pm 1}{2} = 3$ 或 $2$。因 $-b = 5 > 0$ 且 $c = 6 > 0$，两根皆正。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Use the quadratic formula to solve $2x^2 + 3x - 2 = 0$.",
        "zh": "用二次公式解 $2x^2 + 3x - 2 = 0$。"
      },
      "choices": [
        "$x = 2, -\\frac{1}{2}$",
        "$x = \\frac{1}{2}, -2$",
        "$x = 1, -2$",
        "$x = -\\frac{1}{2}, 2$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Discriminant $= 9 - 4(2)(-2) = 9 + 16 = 25$, so $x = \\frac{-3 \\pm 5}{4}$, giving $\\frac{2}{4} = \\frac{1}{2}$ or $\\frac{-8}{4} = -2$. Dividing by $2a = 4$ (not $2$) is essential.",
        "zh": "判别式 $= 9 - 4(2)(-2) = 9 + 16 = 25$，故 $x = \\frac{-3 \\pm 5}{4}$，得 $\\frac{2}{4} = \\frac{1}{2}$ 或 $\\frac{-8}{4} = -2$。关键是除以 $2a = 4$（而非 $2$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For $ax^2 + bx + c = 0$, the quadratic formula is:",
        "zh": "对于 $ax^2 + bx + c = 0$，二次公式为："
      },
      "choices": [
        "$x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$",
        "$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{a}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "The correct formula is $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Common errors are dropping the negative on $b$, using $+4ac$, or dividing by $a$ instead of $2a$.",
        "zh": "正确公式为 $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$。常见错误是丢掉 $b$ 的负号、用 $+4ac$ 或除以 $a$ 而非 $2a$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "How many real solutions does $4x^2 - 4x + 1 = 0$ have?",
        "zh": "$4x^2 - 4x + 1 = 0$ 有多少个实数解？"
      },
      "choices": [
        "Two",
        "Zero",
        "Three",
        "One"
      ],
      "answer": 3,
      "explanation": {
        "en": "Discriminant $= (-4)^2 - 4(4)(1) = 16 - 16 = 0$, so there is exactly one repeated real solution.",
        "zh": "判别式 $= (-4)^2 - 4(4)(1) = 16 - 16 = 0$，故恰有一个重根（实数解）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A ball's height is $h = -16t^2 + 32t + 48$ (feet, $t$ in seconds). What is its height when it is launched?",
        "zh": "一个球的高度为 $h = -16t^2 + 32t + 48$（英尺，$t$ 以秒计）。发射时它的高度是多少？"
      },
      "choices": [
        "$48$",
        "$32$",
        "$16$",
        "$0$"
      ],
      "answer": 0,
      "explanation": {
        "en": "At launch $t = 0$, so $h = 48$ feet. The launch height is the constant term. Using $32$ takes the initial-velocity coefficient by mistake.",
        "zh": "发射时 $t = 0$，故 $h = 48$ 英尺。发射高度即常数项。用 $32$ 是误取了初速度系数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "For the ball $h = -16t^2 + 32t + 48$, at what time $t > 0$ does it hit the ground?",
        "zh": "对于球 $h = -16t^2 + 32t + 48$，在 $t > 0$ 时它何时落地？"
      },
      "choices": [
        "$t = 1$",
        "$t = 3$",
        "$t = -1$",
        "$t = 48$"
      ],
      "answer": 1,
      "explanation": {
        "en": "Set $h = 0$ and divide by $-16$: $t^2 - 2t - 3 = 0$, so $(t-3)(t+1) = 0$, giving $t = 3$ or $t = -1$. Time must be positive, so $t = 3$ seconds.",
        "zh": "令 $h = 0$ 并除以 $-16$：$t^2 - 2t - 3 = 0$，故 $(t-3)(t+1) = 0$，得 $t = 3$ 或 $t = -1$。时间须为正，故 $t = 3$ 秒。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "A rectangle has length $x$ and width $x - 3$, with area $40$. What is its length?",
        "zh": "一个矩形长为 $x$，宽为 $x - 3$，面积为 $40$。它的长是多少？"
      },
      "choices": [
        "$-5$",
        "$5$",
        "$8$",
        "$40$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$x(x-3) = 40$ gives $x^2 - 3x - 40 = 0$, so $(x-8)(x+5) = 0$ and $x = 8$ or $x = -5$. A length must be positive, so $x = 8$ (the width is $5$).",
        "zh": "$x(x-3) = 40$ 得 $x^2 - 3x - 40 = 0$，故 $(x-8)(x+5) = 0$，$x = 8$ 或 $x = -5$。长须为正，故 $x = 8$（宽为 $5$）。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What does the discriminant $b^2 - 4ac$ tell you about a quadratic?",
        "zh": "判别式 $b^2 - 4ac$ 能告诉你关于二次方程的什么信息？"
      },
      "choices": [
        "The vertex",
        "The axis of symmetry",
        "The $y$-intercept",
        "The number and type of solutions"
      ],
      "answer": 3,
      "explanation": {
        "en": "The discriminant reveals the number and type of solutions: positive gives two real, zero gives one repeated real, and negative gives no real solutions. It does not locate the vertex or intercepts.",
        "zh": "判别式揭示解的个数与类型：正得两实根，零得一重根，负则无实根。它不能确定顶点或截距。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the discriminant of $x^2 - 6x + 9 = 0$. Give an integer.",
        "zh": "求 $x^2 - 6x + 9 = 0$ 的判别式。请填整数。"
      },
      "answer": "0",
      "accept": [
        "zero"
      ],
      "explanation": {
        "en": "$b^2 - 4ac = (-6)^2 - 4(1)(9) = 36 - 36 = 0$.",
        "zh": "$b^2 - 4ac = (-6)^2 - 4(1)(9) = 36 - 36 = 0$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the discriminant of $2x^2 + 4x + 5 = 0$. Give an integer.",
        "zh": "求 $2x^2 + 4x + 5 = 0$ 的判别式。请填整数。"
      },
      "answer": "-24",
      "accept": [
        "−24"
      ],
      "explanation": {
        "en": "$b^2 - 4ac = 4^2 - 4(2)(5) = 16 - 40 = -24$. Since it is negative, there are no real solutions.",
        "zh": "$b^2 - 4ac = 4^2 - 4(2)(5) = 16 - 40 = -24$。因其为负，故无实数解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 - 4x - 5 = 0$. Give the positive solution as an integer.",
        "zh": "解方程 $x^2 - 4x - 5 = 0$。请以整数给出正解。"
      },
      "answer": "5",
      "accept": [
        "x=5",
        "x = 5"
      ],
      "explanation": {
        "en": "Discriminant $= 16 + 20 = 36$, so $x = \\frac{4 \\pm 6}{2} = 5$ or $-1$. The positive solution is $5$.",
        "zh": "判别式 $= 16 + 20 = 36$，故 $x = \\frac{4 \\pm 6}{2} = 5$ 或 $-1$。正解为 $5$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many real solutions does $x^2 + x + 1 = 0$ have? Give a whole number.",
        "zh": "$x^2 + x + 1 = 0$ 有多少个实数解？请填一个整数。"
      },
      "answer": "0",
      "accept": [
        "zero",
        "none"
      ],
      "explanation": {
        "en": "Discriminant $= 1 - 4 = -3 < 0$, so there are no real solutions.",
        "zh": "判别式 $= 1 - 4 = -3 < 0$，故无实数解。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "A ball follows $h = -16t^2 + 64t$. At what time $t > 0$ (in seconds) does it return to the ground? Give an integer.",
        "zh": "一个球的高度为 $h = -16t^2 + 64t$。它在 $t > 0$（秒）时何时回到地面？请填整数。"
      },
      "answer": "4",
      "accept": [
        "t=4",
        "t = 4",
        "4 seconds"
      ],
      "explanation": {
        "en": "Set $h = 0$: $-16t(t - 4) = 0$, so $t = 0$ or $t = 4$. It returns to the ground at $t = 4$ seconds.",
        "zh": "令 $h = 0$：$-16t(t - 4) = 0$，故 $t = 0$ 或 $t = 4$。它在 $t = 4$ 秒时回到地面。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Solve $x^2 + 2x - 8 = 0$. Give the smaller root as an integer.",
        "zh": "解方程 $x^2 + 2x - 8 = 0$。请以整数给出较小的根。"
      },
      "answer": "-4",
      "accept": [
        "x=-4",
        "x = -4"
      ],
      "explanation": {
        "en": "Factor: $(x+4)(x-2) = 0$, so $x = -4$ or $x = 2$. The smaller root is $-4$.",
        "zh": "因式分解：$(x+4)(x-2) = 0$，故 $x = -4$ 或 $x = 2$。较小的根为 $-4$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "For what positive value of $k$ does $x^2 + kx + 9 = 0$ have exactly one solution? Give an integer.",
        "zh": "当 $k$ 取何正值时，$x^2 + kx + 9 = 0$ 恰有一个解？请填整数。"
      },
      "answer": "6",
      "accept": [
        "k=6",
        "k = 6",
        "+6"
      ],
      "explanation": {
        "en": "One solution requires discriminant $= 0$: $k^2 - 4(1)(9) = k^2 - 36 = 0$, so $k = \\pm 6$. The positive value is $6$.",
        "zh": "有唯一解要求判别式 $= 0$：$k^2 - 4(1)(9) = k^2 - 36 = 0$，故 $k = \\pm 6$。正值为 $6$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Find the sum of the solutions of $2x^2 - 8x + 6 = 0$. Give an integer.",
        "zh": "求 $2x^2 - 8x + 6 = 0$ 两解之和。请填整数。"
      },
      "answer": "4",
      "accept": [
        "+4"
      ],
      "explanation": {
        "en": "Divide by $2$: $x^2 - 4x + 3 = 0$, so $(x-1)(x-3) = 0$ and $x = 1$ or $x = 3$; their sum is $4$. (Equivalently $-b/a = 8/2 = 4$.)",
        "zh": "两边除以 $2$：$x^2 - 4x + 3 = 0$，故 $(x-1)(x-3) = 0$，$x = 1$ 或 $x = 3$；两解之和为 $4$。（等价地 $-b/a = 8/2 = 4$。）"
      }
    }
  ],
  "unit-15-irrational-numbers/rational-and-irrational-numbers": [
    {
      "type": "mc",
      "question": {
        "en": "Which of the following numbers is irrational?",
        "zh": "下列哪个数是无理数？"
      },
      "choices": [
        "$\\sqrt{7}$",
        "$\\sqrt{16}$",
        "$0.25$",
        "$\\frac{3}{4}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$\\frac{3}{4}$ and $0.25$ are ratios of integers, and $\\sqrt{16}=4$ is a perfect square, so all three are rational. Only $\\sqrt{7}$ is irrational because $7$ is not a perfect square. The tempting idea that any number under a square-root sign is irrational is false — $\\sqrt{16}$ is a whole number.",
        "zh": "$\\frac{3}{4}$ 和 $0.25$ 都是整数之比，而 $\\sqrt{16}=4$ 是完全平方数，所以这三个都是有理数。只有 $\\sqrt{7}$ 是无理数，因为 $7$ 不是完全平方数。误以为凡是根号下的数都是无理数是错的——$\\sqrt{16}$ 是整数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The sum of a rational number and an irrational number is always:",
        "zh": "一个有理数与一个无理数之和一定是："
      },
      "choices": [
        "rational",
        "irrational",
        "an integer",
        "zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "If rational $r$ plus irrational $x$ equalled a rational $q$, then $x=q-r$ would be a difference of two rationals, hence rational — a contradiction. So the sum must be irrational. The idea that adding a 'nice' rational can cancel the irrational part is wrong.",
        "zh": "若有理数 $r$ 加无理数 $x$ 等于某有理数 $q$，则 $x=q-r$ 就是两个有理数之差，从而是有理数——矛盾。所以和一定是无理数。以为加上一个'好看'的有理数就能消去无理部分是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "What kind of number is the repeating decimal $0.\\overline{27}$?",
        "zh": "循环小数 $0.\\overline{27}$ 是哪一类数？"
      },
      "choices": [
        "undefined",
        "irrational",
        "rational",
        "not a real number"
      ],
      "answer": 2,
      "explanation": {
        "en": "Every repeating decimal equals a fraction of integers; here $0.\\overline{27}=\\frac{27}{99}=\\frac{3}{11}$, so it is rational. The idea that a decimal with infinitely many digits must be irrational is false — irrational decimals are the ones that never repeat.",
        "zh": "每个循环小数都等于一个整数分数；这里 $0.\\overline{27}=\\frac{27}{99}=\\frac{3}{11}$，所以是有理数。以为小数位无限就一定是无理数是错的——无理数的小数是永不循环的那种。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of these numbers is rational?",
        "zh": "下列哪个数是有理数？"
      },
      "choices": [
        "$\\sqrt{2}$",
        "$\\sqrt{3}$",
        "$\\pi$",
        "$\\sqrt{9}$"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\sqrt{9}=3$ is a perfect square, so it is rational. $\\sqrt{2}$, $\\pi$, and $\\sqrt{3}$ are all irrational. Assuming every square root is irrational overlooks perfect squares like $9$.",
        "zh": "$\\sqrt{9}=3$ 是完全平方数，所以是有理数。$\\sqrt{2}$、$\\pi$ 和 $\\sqrt{3}$ 都是无理数。以为所有平方根都是无理数就忽略了像 $9$ 这样的完全平方数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The product of a nonzero rational number and an irrational number is always:",
        "zh": "一个非零有理数与一个无理数之积一定是："
      },
      "choices": [
        "irrational",
        "rational",
        "zero",
        "undefined"
      ],
      "answer": 0,
      "explanation": {
        "en": "If nonzero rational $r$ times irrational $x$ were rational $q$, then $x=\\frac{q}{r}$ would be a quotient of rationals, hence rational — a contradiction. So the product is irrational. This fails only if $r=0$, which is why 'nonzero' is stated.",
        "zh": "若非零有理数 $r$ 乘无理数 $x$ 等于有理数 $q$，则 $x=\\frac{q}{r}$ 是有理数之商，从而有理——矛盾。所以积是无理数。只有当 $r=0$ 时才不成立，这正是要求'非零'的原因。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Since $\\sqrt{2}\\cdot\\sqrt{2}=2$, the product of two irrational numbers is:",
        "zh": "既然 $\\sqrt{2}\\cdot\\sqrt{2}=2$，两个无理数之积："
      },
      "choices": [
        "always irrational",
        "sometimes rational, sometimes irrational",
        "always rational",
        "always zero"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\sqrt{2}\\cdot\\sqrt{2}=2$ is rational, but $\\sqrt{2}\\cdot\\sqrt{3}=\\sqrt{6}$ is irrational, so no single rule holds — it depends on the numbers. The idea that irrationals are 'closed' under multiplication (always give an irrational) is false.",
        "zh": "$\\sqrt{2}\\cdot\\sqrt{2}=2$ 是有理数，但 $\\sqrt{2}\\cdot\\sqrt{3}=\\sqrt{6}$ 是无理数，所以没有统一的规则——取决于具体的数。以为无理数对乘法'封闭'（相乘总得无理数）是错的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which of the following is NOT irrational?",
        "zh": "下列哪个数不是无理数？"
      },
      "choices": [
        "$\\sqrt{5}$",
        "$\\sqrt{11}$",
        "$\\sqrt{36}$",
        "$\\sqrt{2}$"
      ],
      "answer": 2,
      "explanation": {
        "en": "$\\sqrt{36}=6$ is a perfect square, so it is rational (not irrational). The others have non-perfect-square radicands and are irrational. Treating every radical as irrational misses that $36$ is a perfect square.",
        "zh": "$\\sqrt{36}=6$ 是完全平方数，所以是有理数（不是无理数）。其余的根号下都不是完全平方数，因而是无理数。把每个根号都当成无理数就忽略了 $36$ 是完全平方数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The decimal $0.1010010001\\ldots$ (each block of zeros grows by one) is:",
        "zh": "小数 $0.1010010001\\ldots$（每段零依次增加一个）是："
      },
      "choices": [
        "a terminating decimal",
        "rational",
        "a whole number",
        "irrational"
      ],
      "answer": 3,
      "explanation": {
        "en": "The digits go on forever without ever settling into a repeating block, so the number cannot be written as a fraction — it is irrational. The idea that a visible pattern makes a decimal rational is wrong; only a truly repeating block does.",
        "zh": "小数位无限延续却始终没有固定的循环节，所以无法写成分数——它是无理数。以为看得出规律就是有理数是错的；只有真正循环的循环节才行。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Which number is irrational?",
        "zh": "哪个数是无理数？"
      },
      "choices": [
        "$\\sqrt{2}$",
        "$-\\frac{5}{2}$",
        "$0.\\overline{6}$",
        "$\\frac{22}{7}$"
      ],
      "answer": 0,
      "explanation": {
        "en": "$-\\frac{5}{2}$ and $\\frac{22}{7}$ are fractions of integers, and $0.\\overline{6}=\\frac{2}{3}$ repeats, so all three are rational. Only $\\sqrt{2}$ is irrational. Note $\\frac{22}{7}$ is just an approximation of $\\pi$, not $\\pi$ itself, so it is rational.",
        "zh": "$-\\frac{5}{2}$ 和 $\\frac{22}{7}$ 都是整数分数，$0.\\overline{6}=\\frac{2}{3}$ 是循环小数，所以这三个都是有理数。只有 $\\sqrt{2}$ 是无理数。注意 $\\frac{22}{7}$ 只是 $\\pi$ 的近似值，并非 $\\pi$ 本身，故它是有理数。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "Since $\\sqrt{2}+(-\\sqrt{2})=0$, the sum of two irrational numbers is:",
        "zh": "既然 $\\sqrt{2}+(-\\sqrt{2})=0$，两个无理数之和："
      },
      "choices": [
        "always irrational",
        "sometimes rational, sometimes irrational",
        "never zero",
        "always rational"
      ],
      "answer": 1,
      "explanation": {
        "en": "$\\sqrt{2}+(-\\sqrt{2})=0$ is rational, but $\\sqrt{2}+\\sqrt{2}=2\\sqrt{2}$ is irrational, so the sum can go either way. The belief that adding two irrationals always keeps the result irrational is false.",
        "zh": "$\\sqrt{2}+(-\\sqrt{2})=0$ 是有理数，但 $\\sqrt{2}+\\sqrt{2}=2\\sqrt{2}$ 是无理数，所以和可有理可无理。以为两个无理数相加总保持无理是错误的。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The number $\\sqrt{50}$ is:",
        "zh": "数 $\\sqrt{50}$ 是："
      },
      "choices": [
        "rational",
        "an integer",
        "irrational",
        "a perfect square"
      ],
      "answer": 2,
      "explanation": {
        "en": "$50=25\\cdot 2$, so $\\sqrt{50}=5\\sqrt{2}$; since $\\sqrt{2}$ is irrational and $5$ is a nonzero rational, the product is irrational. Simplifying the radical does not make it rational — a leftover $\\sqrt{2}$ remains.",
        "zh": "$50=25\\cdot 2$，所以 $\\sqrt{50}=5\\sqrt{2}$；由于 $\\sqrt{2}$ 无理而 $5$ 是非零有理数，其积为无理数。化简根号并不能使它变成有理数——仍留有一个 $\\sqrt{2}$。"
      }
    },
    {
      "type": "mc",
      "question": {
        "en": "The number $\\sqrt{16}$ is best classified as:",
        "zh": "数 $\\sqrt{16}$ 最恰当的归类是："
      },
      "choices": [
        "undefined",
        "an irrational number",
        "not a real number",
        "an integer"
      ],
      "answer": 3,
      "explanation": {
        "en": "$\\sqrt{16}=4$, which is an integer (and therefore also rational). The idea that a square root is automatically irrational ignores that $16$ is a perfect square.",
        "zh": "$\\sqrt{16}=4$，是一个整数（因而也是有理数）。以为平方根一定是无理数就忽略了 $16$ 是完全平方数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt{144}$. Give an integer.",
        "zh": "求 $\\sqrt{144}$。请填一个整数。"
      },
      "answer": "12",
      "accept": [
        "12.0",
        "+12"
      ],
      "explanation": {
        "en": "$12\\times 12=144$, so $\\sqrt{144}=12$, a rational number. Because $144$ is a perfect square, its root is a whole number, not irrational.",
        "zh": "$12\\times 12=144$，所以 $\\sqrt{144}=12$，是有理数。因为 $144$ 是完全平方数，其平方根是整数，而非无理数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt{2}\\cdot\\sqrt{18}$. Give an integer.",
        "zh": "求 $\\sqrt{2}\\cdot\\sqrt{18}$。请填一个整数。"
      },
      "answer": "6",
      "accept": [
        "6.0",
        "+6"
      ],
      "explanation": {
        "en": "$\\sqrt{2}\\cdot\\sqrt{18}=\\sqrt{2\\cdot 18}=\\sqrt{36}=6$. Two irrational factors multiply to a rational result here because their product under the root is a perfect square.",
        "zh": "$\\sqrt{2}\\cdot\\sqrt{18}=\\sqrt{2\\cdot 18}=\\sqrt{36}=6$。这里两个无理数相乘得到有理数，是因为根号下的乘积恰为完全平方数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $(\\sqrt{7})^2$. Give an integer.",
        "zh": "求 $(\\sqrt{7})^2$。请填一个整数。"
      },
      "answer": "7",
      "accept": [
        "7.0",
        "+7"
      ],
      "explanation": {
        "en": "By definition of a square root, $(\\sqrt{7})^2=7$. Squaring undoes the root, giving the rational number $7$ even though $\\sqrt{7}$ itself is irrational.",
        "zh": "根据平方根的定义，$(\\sqrt{7})^2=7$。平方抵消了开方，即使 $\\sqrt{7}$ 本身是无理数，结果也是有理数 $7$。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "How many of the following are irrational: $\\sqrt{2}$, $\\sqrt{9}$, $0.5$, $\\pi$, $\\frac{4}{7}$? Give an integer.",
        "zh": "下列各数中有几个是无理数：$\\sqrt{2}$、$\\sqrt{9}$、$0.5$、$\\pi$、$\\frac{4}{7}$？请填一个整数。"
      },
      "answer": "2",
      "accept": [
        "2.0",
        "+2"
      ],
      "explanation": {
        "en": "$\\sqrt{2}$ and $\\pi$ are irrational, giving $2$. The others are rational: $\\sqrt{9}=3$, $0.5=\\frac{1}{2}$, and $\\frac{4}{7}$ is already a fraction. Counting $\\sqrt{9}$ as irrational is the classic mistake here.",
        "zh": "$\\sqrt{2}$ 和 $\\pi$ 是无理数，共 $2$ 个。其余都是有理数：$\\sqrt{9}=3$，$0.5=\\frac{1}{2}$，$\\frac{4}{7}$ 本身就是分数。把 $\\sqrt{9}$ 当成无理数是这里最典型的错误。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt{49}+\\sqrt{16}$. Give an integer.",
        "zh": "求 $\\sqrt{49}+\\sqrt{16}$。请填一个整数。"
      },
      "answer": "11",
      "accept": [
        "11.0",
        "+11"
      ],
      "explanation": {
        "en": "$\\sqrt{49}=7$ and $\\sqrt{16}=4$, so the sum is $7+4=11$. Note $\\sqrt{49}+\\sqrt{16}$ is not $\\sqrt{65}$ — you cannot add the numbers under the roots.",
        "zh": "$\\sqrt{49}=7$，$\\sqrt{16}=4$，所以和为 $7+4=11$。注意 $\\sqrt{49}+\\sqrt{16}$ 不等于 $\\sqrt{65}$——不能把根号下的数直接相加。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Write the repeating decimal $0.\\overline{3}$ as a fraction in lowest terms (form a/b).",
        "zh": "将循环小数 $0.\\overline{3}$ 写成最简分数（形式 a/b）。"
      },
      "answer": "1/3",
      "accept": [
        "1 / 3"
      ],
      "explanation": {
        "en": "Let $x=0.\\overline{3}$; then $10x=3.\\overline{3}$, so $10x-x=3$, giving $9x=3$ and $x=\\frac{1}{3}$. Because it converts to a fraction, the repeating decimal is rational.",
        "zh": "设 $x=0.\\overline{3}$；则 $10x=3.\\overline{3}$，所以 $10x-x=3$，得 $9x=3$，$x=\\frac{1}{3}$。因为能化成分数，这个循环小数是有理数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "Evaluate $\\sqrt{50}\\cdot\\sqrt{2}$. Give an integer.",
        "zh": "求 $\\sqrt{50}\\cdot\\sqrt{2}$。请填一个整数。"
      },
      "answer": "10",
      "accept": [
        "10.0",
        "+10"
      ],
      "explanation": {
        "en": "$\\sqrt{50}\\cdot\\sqrt{2}=\\sqrt{100}=10$. Even though $\\sqrt{50}$ is irrational, multiplying by $\\sqrt{2}$ makes the radicand a perfect square, so the result is rational.",
        "zh": "$\\sqrt{50}\\cdot\\sqrt{2}=\\sqrt{100}=10$。尽管 $\\sqrt{50}$ 是无理数，乘以 $\\sqrt{2}$ 后根号下变成完全平方数，所以结果是有理数。"
      }
    },
    {
      "type": "input",
      "question": {
        "en": "What is the smallest integer greater than $\\sqrt{20}$? Give an integer.",
        "zh": "大于 $\\sqrt{20}$ 的最小整数是多少？请填一个整数。"
      },
      "answer": "5",
      "accept": [
        "5.0",
        "+5"
      ],
      "explanation": {
        "en": "$\\sqrt{16}=4$ and $\\sqrt{25}=5$, and $20$ lies between $16$ and $25$, so $\\sqrt{20}\\approx 4.47$ is irrational and sits between $4$ and $5$. The smallest integer greater than it is $5$.",
        "zh": "$\\sqrt{16}=4$，$\\sqrt{25}=5$，而 $20$ 在 $16$ 与 $25$ 之间，所以 $\\sqrt{20}\\approx 4.47$ 是无理数，介于 $4$ 与 $5$ 之间。大于它的最小整数是 $5$。"
      }
    }
  ]
}
