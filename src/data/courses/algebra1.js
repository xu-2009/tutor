export default {
  "id": "algebra1",
  "title": "Algebra 1",
  "titleZh": "代数一",
  "subject": "math",
  "level": "Honors",
  "description": "A complete Algebra 1 course following the standard U.S. sequence (Khan Academy order): from algebra foundations and linear equations through systems, functions, sequences, exponentials, and quadratics.",
  "descriptionZh": "完整的代数一课程，按照美国学校标准顺序（Khan Academy 单元顺序）编排：从代数基础、一次方程，到方程组、函数、数列、指数函数与二次函数。",
  "units": [
    {
      "id": "unit-1-algebra-foundations",
      "title": "Unit 1: Algebra Foundations",
      "titleZh": "第一单元：代数基础",
      "lessons": [
        {
          "id": "expressions-and-order-of-operations",
          "title": "Expressions and the Order of Operations",
          "titleZh": "代数式与运算顺序",
          "content": [
            {
              "type": "h2",
              "en": "From Arithmetic to Algebra",
              "zh": "从算术到代数"
            },
            {
              "type": "p",
              "en": "Algebra begins when we use letters, called variables, to stand for numbers we do not know yet or numbers that can change. An expression like $3x + 7$ combines variables, numbers (constants), and operations. Unlike an equation, an expression has no equals sign — we cannot \"solve\" it, but we can evaluate it or simplify it.",
              "zh": "当我们用字母（称为变量）来表示尚未知道或可以变化的数时，代数就开始了。像 $3x + 7$ 这样的代数式由变量、数字（常数）和运算组成。与方程不同，代数式没有等号——我们不能\"解\"它，但可以求值或化简。"
            },
            {
              "type": "p",
              "en": "Each part of an expression that is added or subtracted is called a term. In $5x^2 - 3x + 8$, the terms are $5x^2$, $-3x$, and $8$. The number multiplying a variable is its coefficient: the coefficient of $-3x$ is $-3$.",
              "zh": "代数式中被加或被减的每一部分称为一个项。在 $5x^2 - 3x + 8$ 中，各项是 $5x^2$、$-3x$ 和 $8$。与变量相乘的数叫做系数：$-3x$ 的系数是 $-3$。"
            },
            {
              "type": "h3",
              "en": "The Order of Operations",
              "zh": "运算顺序"
            },
            {
              "type": "p",
              "en": "To make sure everyone gets the same value from an expression, mathematicians agree on an order of operations, often remembered as PEMDAS:",
              "zh": "为了让所有人对同一个式子算出相同的结果，数学家们约定了运算顺序，常用 PEMDAS 帮助记忆："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Parentheses (and other grouping symbols) first",
                  "zh": "先算括号（及其他分组符号）内的"
                },
                {
                  "en": "Exponents next",
                  "zh": "再算乘方（指数）"
                },
                {
                  "en": "Multiplication and Division, from left to right",
                  "zh": "然后从左到右做乘法和除法"
                },
                {
                  "en": "Addition and Subtraction, from left to right",
                  "zh": "最后从左到右做加法和减法"
                }
              ]
            },
            {
              "type": "note",
              "en": "Multiplication does NOT always come before division — they have equal priority and are done left to right. The same is true for addition and subtraction. For example, $12 \\div 3 \\times 2 = 4 \\times 2 = 8$, not $2$.",
              "zh": "乘法并不总是先于除法——它们优先级相同，按从左到右的顺序计算。加法和减法也是如此。例如 $12 \\div 3 \\times 2 = 4 \\times 2 = 8$，而不是 $2$。"
            },
            {
              "type": "h3",
              "en": "Evaluating Expressions",
              "zh": "代数式求值"
            },
            {
              "type": "p",
              "en": "To evaluate an expression, substitute the given value for each variable, then apply the order of operations. It is a good habit to put substituted values in parentheses, especially negative numbers.",
              "zh": "求代数式的值时，先把给定的值代入每个变量，再按运算顺序计算。一个好习惯是把代入的值加上括号，尤其是负数。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating with a negative value",
                "zh": "例题 1：代入负数求值"
              },
              "problem": {
                "en": "Evaluate $2x^2 - 5x + 1$ when $x = -3$.",
                "zh": "当 $x = -3$ 时，求 $2x^2 - 5x + 1$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Substitute $-3$ for $x$, using parentheses:",
                  "zh": "用括号把 $-3$ 代入 $x$："
                },
                {
                  "type": "math",
                  "tex": "2(-3)^2 - 5(-3) + 1"
                },
                {
                  "type": "p",
                  "en": "Exponents first: $(-3)^2 = 9$. Then multiply: $2(9) = 18$ and $-5(-3) = 15$.",
                  "zh": "先算乘方：$(-3)^2 = 9$。再做乘法：$2(9) = 18$，$-5(-3) = 15$。"
                },
                {
                  "type": "math",
                  "tex": "18 + 15 + 1 = 34"
                },
                {
                  "type": "p",
                  "en": "The value of the expression is $34$.",
                  "zh": "代数式的值为 $34$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Grouping symbols",
                "zh": "例题 2：分组符号"
              },
              "problem": {
                "en": "Simplify $\\frac{18 - 2 \\cdot 3}{4} + 5^2$.",
                "zh": "化简 $\\frac{18 - 2 \\cdot 3}{4} + 5^2$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "A fraction bar is a grouping symbol: simplify the numerator first. Inside it, multiplication comes before subtraction: $18 - 2 \\cdot 3 = 18 - 6 = 12$.",
                  "zh": "分数线是一种分组符号：先化简分子。分子内部先乘后减：$18 - 2 \\cdot 3 = 18 - 6 = 12$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{12}{4} + 5^2 = 3 + 25 = 28"
                },
                {
                  "type": "p",
                  "en": "The answer is $28$.",
                  "zh": "答案是 $28$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Translating Words into Symbols",
              "zh": "把文字翻译成符号"
            },
            {
              "type": "p",
              "en": "Honors algebra requires fluency in translating phrases: \"five less than a number\" is $n - 5$ (not $5 - n$), \"the quotient of a number and 4\" is $\\frac{n}{4}$, and \"twice the sum of $x$ and 3\" is $2(x + 3)$. Watch the order carefully with subtraction and division.",
              "zh": "荣誉代数要求熟练地翻译文字语句：\"比某数小 5\" 是 $n - 5$（不是 $5 - n$），\"某数与 4 的商\" 是 $\\frac{n}{4}$，\"$x$ 与 3 之和的两倍\" 是 $2(x + 3)$。做减法和除法时要特别注意顺序。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the coefficient of $x$ in the expression $7x^2 - 4x + 9$?",
                "zh": "代数式 $7x^2 - 4x + 9$ 中 $x$ 的系数是多少？"
              },
              "choices": [
                "$7$",
                "$-4$",
                "$4$",
                "$9$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The coefficient is the number multiplying the variable, including its sign. The term containing $x$ (to the first power) is $-4x$, so the coefficient is $-4$.",
                "zh": "系数是与变量相乘的数，要带上符号。含 $x$（一次方）的项是 $-4x$，所以系数是 $-4$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $24 \\div 4 \\cdot 2 - 3$. Give your answer as an integer.",
                "zh": "计算 $24 \\div 4 \\cdot 2 - 3$。请以整数作答。"
              },
              "answer": "9",
              "explanation": {
                "en": "Division and multiplication have equal priority, so work left to right: $24 \\div 4 = 6$, then $6 \\cdot 2 = 12$, then $12 - 3 = 9$. A common error is doing $4 \\cdot 2$ first, which gives the wrong answer $0$.",
                "zh": "除法与乘法优先级相同，从左到右计算：$24 \\div 4 = 6$，$6 \\cdot 2 = 12$，$12 - 3 = 9$。常见错误是先算 $4 \\cdot 2$，会得到错误答案 $0$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression represents \"eight less than three times a number $n$\"?",
                "zh": "哪个式子表示\"比 $n$ 的三倍小 8\"？"
              },
              "choices": [
                "$8 - 3n$",
                "$3n - 8$",
                "$3(n - 8)$",
                "$8 - \\frac{n}{3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "\"Three times a number\" is $3n$; \"eight less than\" that quantity means we subtract 8 FROM it: $3n - 8$. The phrase reverses the order you read it in, which is why $8 - 3n$ is a trap.",
                "zh": "\"$n$ 的三倍\"是 $3n$；\"比它小 8\"意味着从它减去 8：$3n - 8$。这个短语的顺序与阅读顺序相反，所以 $8 - 3n$ 是个陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $x^2 - 2x$ when $x = -4$. Give your answer as an integer.",
                "zh": "当 $x = -4$ 时，求 $x^2 - 2x$ 的值。请以整数作答。"
              },
              "answer": "24",
              "explanation": {
                "en": "Substitute with parentheses: $(-4)^2 - 2(-4) = 16 + 8 = 24$. Note that $(-4)^2 = 16$ (positive) and subtracting a negative gives addition.",
                "zh": "带括号代入：$(-4)^2 - 2(-4) = 16 + 8 = 24$。注意 $(-4)^2 = 16$（正数），减去负数等于加法。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $5 + 3(10 - 2^3)$.",
                "zh": "化简 $5 + 3(10 - 2^3)$。"
              },
              "choices": [
                "$11$",
                "$16$",
                "$21$",
                "$64$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Inside the parentheses, do the exponent first: $2^3 = 8$, so $10 - 8 = 2$. Then multiply: $3(2) = 6$. Finally add: $5 + 6 = 11$. Adding $5 + 3$ first is the classic PEMDAS mistake.",
                "zh": "括号内先算乘方：$2^3 = 8$，故 $10 - 8 = 2$。再乘：$3(2) = 6$。最后加：$5 + 6 = 11$。先算 $5 + 3$ 是典型的运算顺序错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\frac{a + b^2}{2a - b}$ when $a = 3$ and $b = -1$. Give your answer as a fraction a/b or an integer.",
                "zh": "当 $a = 3$，$b = -1$ 时，求 $\\frac{a + b^2}{2a - b}$ 的值。请以分数 a/b 或整数作答。"
              },
              "answer": "4/7",
              "explanation": {
                "en": "Numerator: $3 + (-1)^2 = 3 + 1 = 4$. Denominator: $2(3) - (-1) = 6 + 1 = 7$. The fraction bar groups top and bottom separately, giving $\\frac{4}{7}$.",
                "zh": "分子：$3 + (-1)^2 = 3 + 1 = 4$。分母：$2(3) - (-1) = 6 + 1 = 7$。分数线把分子和分母分别分组，结果为 $\\frac{4}{7}$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A phone plan costs \\$20 per month plus \\$0.10 per text. Which expression gives the total cost for a month with $t$ texts?",
                "zh": "某手机套餐每月收费 20 美元，每条短信另收 0.10 美元。哪个式子表示发送 $t$ 条短信的当月总费用？"
              },
              "choices": [
                "$20t + 0.10$",
                "$0.10t + 20$",
                "$20.10t$",
                "$\\frac{20}{t} + 0.10$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The \\$20 is a fixed cost paid once; the \\$0.10 is repeated $t$ times, giving $0.10t$. Total: $0.10t + 20$. The variable multiplies the per-unit rate, not the fixed fee.",
                "zh": "20 美元是一次性的固定费用；0.10 美元重复 $t$ 次，即 $0.10t$。总计 $0.10t + 20$。变量应乘以单价，而不是固定费用。"
              }
            }
          ]
        },
        {
          "id": "real-numbers-and-properties",
          "title": "Real Numbers and Their Properties",
          "titleZh": "实数及其性质",
          "content": [
            {
              "type": "h2",
              "en": "The Real Number System",
              "zh": "实数系统"
            },
            {
              "type": "p",
              "en": "The real numbers are all the numbers that can be placed on a number line. They are organized into nested families. The natural numbers $1, 2, 3, \\ldots$ sit inside the whole numbers (which add $0$), which sit inside the integers (which add negatives like $-5$).",
              "zh": "实数是所有能放在数轴上的数。它们组成层层嵌套的集合。自然数 $1, 2, 3, \\ldots$ 包含在非负整数（增加了 $0$）之中，非负整数又包含在整数（增加了 $-5$ 之类的负数）之中。"
            },
            {
              "type": "p",
              "en": "A rational number is any number that can be written as a ratio of two integers $\\frac{p}{q}$ with $q \\neq 0$. Rational numbers have decimal expansions that either terminate ($0.75$) or repeat ($0.\\overline{3}$). Numbers whose decimals never terminate and never repeat, such as $\\sqrt{2}$ and $\\pi$, are irrational. Together, the rationals and irrationals make up the real numbers.",
              "zh": "有理数是能写成两个整数之比 $\\frac{p}{q}$（$q \\neq 0$）的数。有理数的小数展开要么有限（$0.75$），要么循环（$0.\\overline{3}$）。小数既不终止也不循环的数，如 $\\sqrt{2}$ 和 $\\pi$，是无理数。有理数和无理数合起来构成实数。"
            },
            {
              "type": "note",
              "en": "A square root is not automatically irrational: $\\sqrt{25} = 5$ is rational because 25 is a perfect square. Only square roots of non-perfect squares, like $\\sqrt{7}$, are irrational.",
              "zh": "平方根不一定是无理数：$\\sqrt{25} = 5$ 是有理数，因为 25 是完全平方数。只有非完全平方数的平方根（如 $\\sqrt{7}$）才是无理数。"
            },
            {
              "type": "h3",
              "en": "Properties of Real Numbers",
              "zh": "实数的运算性质"
            },
            {
              "type": "p",
              "en": "A few properties govern how addition and multiplication behave. Knowing their names lets you justify every step of your algebra.",
              "zh": "几条基本性质决定了加法和乘法的运算规律。记住它们的名称，可以为代数推理的每一步提供依据。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Commutative: order does not matter. $a + b = b + a$ and $ab = ba$.",
                  "zh": "交换律：顺序不影响结果。$a + b = b + a$，$ab = ba$。"
                },
                {
                  "en": "Associative: grouping does not matter. $(a + b) + c = a + (b + c)$.",
                  "zh": "结合律：分组方式不影响结果。$(a + b) + c = a + (b + c)$。"
                },
                {
                  "en": "Distributive: multiplication spreads over addition. $a(b + c) = ab + ac$.",
                  "zh": "分配律：乘法对加法可分配。$a(b + c) = ab + ac$。"
                },
                {
                  "en": "Identities: $a + 0 = a$ and $a \\cdot 1 = a$.",
                  "zh": "单位元：$a + 0 = a$，$a \\cdot 1 = a$。"
                },
                {
                  "en": "Inverses: $a + (-a) = 0$ and $a \\cdot \\frac{1}{a} = 1$ for $a \\neq 0$.",
                  "zh": "逆元：$a + (-a) = 0$；当 $a \\neq 0$ 时 $a \\cdot \\frac{1}{a} = 1$。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Subtraction and division are NOT commutative: $5 - 3 \\neq 3 - 5$. When you rearrange terms, think of subtraction as adding a negative.",
              "zh": "减法和除法不满足交换律：$5 - 3 \\neq 3 - 5$。重排各项时，把减法看作加上一个负数。"
            },
            {
              "type": "h3",
              "en": "Combining Like Terms",
              "zh": "合并同类项"
            },
            {
              "type": "p",
              "en": "Like terms have exactly the same variable part: $3x^2$ and $-7x^2$ are like terms, but $3x^2$ and $3x$ are not. The distributive property, read in reverse, is what lets us combine them: $3x + 5x = (3 + 5)x = 8x$.",
              "zh": "同类项的字母部分完全相同：$3x^2$ 和 $-7x^2$ 是同类项，而 $3x^2$ 和 $3x$ 不是。反向使用分配律就能合并同类项：$3x + 5x = (3 + 5)x = 8x$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Simplifying with the distributive property",
                "zh": "例题 1：用分配律化简"
              },
              "problem": {
                "en": "Simplify $4(2x - 3) - (x - 7)$.",
                "zh": "化简 $4(2x - 3) - (x - 7)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute the 4, and distribute the minus sign (think of it as $-1$):",
                  "zh": "把 4 分配进去，并把负号（看作 $-1$）也分配进去："
                },
                {
                  "type": "math",
                  "tex": "8x - 12 - x + 7"
                },
                {
                  "type": "p",
                  "en": "Combine like terms: $8x - x = 7x$ and $-12 + 7 = -5$.",
                  "zh": "合并同类项：$8x - x = 7x$，$-12 + 7 = -5$。"
                },
                {
                  "type": "math",
                  "tex": "7x - 5"
                },
                {
                  "type": "p",
                  "en": "The most common error is forgetting to distribute the negative to $-7$, which would wrongly give $8x - 12 - x - 7$.",
                  "zh": "最常见的错误是忘记把负号分配给 $-7$，从而错误地写成 $8x - 12 - x - 7$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Classifying real numbers",
                "zh": "例题 2：给实数分类"
              },
              "problem": {
                "en": "Classify each number as rational or irrational: $-\\frac{2}{3}$, $\\sqrt{16}$, $0.121122111222\\ldots$, $0.\\overline{45}$.",
                "zh": "判断下列各数是有理数还是无理数：$-\\frac{2}{3}$、$\\sqrt{16}$、$0.121122111222\\ldots$、$0.\\overline{45}$。"
              },
              "solution": [
                {
                  "type": "list",
                  "items": [
                    {
                      "en": "$-\\frac{2}{3}$ is a ratio of integers: rational.",
                      "zh": "$-\\frac{2}{3}$ 是整数之比：有理数。"
                    },
                    {
                      "en": "$\\sqrt{16} = 4$: rational (in fact, an integer).",
                      "zh": "$\\sqrt{16} = 4$：有理数（实际上是整数）。"
                    },
                    {
                      "en": "$0.121122111222\\ldots$ has a pattern but never exactly repeats a block: irrational.",
                      "zh": "$0.121122111222\\ldots$ 虽有规律，但没有固定循环节：无理数。"
                    },
                    {
                      "en": "$0.\\overline{45}$ repeats the block 45 forever: rational (it equals $\\frac{45}{99} = \\frac{5}{11}$).",
                      "zh": "$0.\\overline{45}$ 无限循环 45：有理数（等于 $\\frac{45}{99} = \\frac{5}{11}$）。"
                    }
                  ]
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which number is irrational?",
                "zh": "下列哪个数是无理数？"
              },
              "choices": [
                "$\\sqrt{36}$",
                "$\\frac{7}{2}$",
                "$\\sqrt{10}$",
                "$0.\\overline{6}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\sqrt{36} = 6$ and $\\frac{7}{2}$ are rational; $0.\\overline{6} = \\frac{2}{3}$ repeats, so it is rational. $10$ is not a perfect square, so $\\sqrt{10}$ has a non-terminating, non-repeating decimal: irrational.",
                "zh": "$\\sqrt{36} = 6$ 和 $\\frac{7}{2}$ 是有理数；$0.\\overline{6} = \\frac{2}{3}$ 是循环小数，也是有理数。$10$ 不是完全平方数，所以 $\\sqrt{10}$ 的小数不终止也不循环：无理数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which property justifies the step $3(x + 5) = 3x + 15$?",
                "zh": "哪条性质说明 $3(x + 5) = 3x + 15$ 这一步成立？"
              },
              "choices": [
                "Commutative property (交换律)",
                "Associative property (结合律)",
                "Distributive property (分配律)",
                "Additive identity (加法单位元)"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiplying a sum by spreading the factor over each addend — $3 \\cdot x + 3 \\cdot 5$ — is exactly the distributive property.",
                "zh": "把因数 3 分配给和式中的每一项——$3 \\cdot x + 3 \\cdot 5$——正是分配律。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $5x + 2 - 3x + 9$. Write your answer in the form ax+b with no spaces (e.g. 4x+7).",
                "zh": "化简 $5x + 2 - 3x + 9$。请写成 ax+b 的形式，不含空格（例如 4x+7）。"
              },
              "answer": "2x+11",
              "explanation": {
                "en": "Group like terms: $(5x - 3x) + (2 + 9) = 2x + 11$. The commutative property of addition is what allows the rearranging.",
                "zh": "把同类项归组：$(5x - 3x) + (2 + 9) = 2x + 11$。加法交换律使这种重排成为可能。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation shows the associative property of addition?",
                "zh": "下列哪个等式体现了加法结合律？"
              },
              "choices": [
                "$2 + 7 = 7 + 2$",
                "$(2 + 7) + 3 = 2 + (7 + 3)$",
                "$2(7 + 3) = 14 + 6$",
                "$7 + 0 = 7$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Associativity changes the grouping (parentheses) while keeping the order of the numbers the same. Choice A changes order (commutative), C distributes, D uses the additive identity.",
                "zh": "结合律改变的是分组方式（括号位置），数的顺序不变。选项 A 改变了顺序（交换律），C 是分配律，D 是加法单位元。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $-2(3x - 4) + 6x$. Give your answer as a single integer or expression with no spaces.",
                "zh": "化简 $-2(3x - 4) + 6x$。请以不含空格的整数或表达式作答。"
              },
              "answer": "8",
              "explanation": {
                "en": "Distribute: $-6x + 8 + 6x$. The $-6x$ and $+6x$ are additive inverses and cancel, leaving just $8$. Watch the sign: $-2 \\cdot (-4) = +8$.",
                "zh": "分配：$-6x + 8 + 6x$。$-6x$ 与 $+6x$ 互为相反数，相互抵消，只剩 $8$。注意符号：$-2 \\cdot (-4) = +8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Every integer is also a ______.",
                "zh": "每个整数同时也是一个______。"
              },
              "choices": [
                "natural number (自然数)",
                "whole number (非负整数)",
                "rational number (有理数)",
                "irrational number (无理数)"
              ],
              "answer": 2,
              "explanation": {
                "en": "Any integer $n$ can be written as $\\frac{n}{1}$, a ratio of integers, so every integer is rational. Negative integers are not natural or whole numbers, and no integer is irrational.",
                "zh": "任何整数 $n$ 都能写成 $\\frac{n}{1}$，即整数之比，所以每个整数都是有理数。负整数不是自然数或非负整数，且没有整数是无理数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Simplify $\\frac{1}{2}(8x + 6) - (2x - 5)$. Write your answer in the form ax+b with no spaces.",
                "zh": "化简 $\\frac{1}{2}(8x + 6) - (2x - 5)$。请写成 ax+b 的形式，不含空格。"
              },
              "answer": "2x+8",
              "explanation": {
                "en": "Distribute $\\frac{1}{2}$: $4x + 3$. Distribute the negative: $-2x + 5$. Combine: $(4x - 2x) + (3 + 5) = 2x + 8$. Forgetting to flip $-5$ to $+5$ is the usual mistake.",
                "zh": "分配 $\\frac{1}{2}$ 得 $4x + 3$；分配负号得 $-2x + 5$。合并：$(4x - 2x) + (3 + 5) = 2x + 8$。常见错误是忘记把 $-5$ 变成 $+5$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2-solving-equations-inequalities",
      "title": "Unit 2: Solving Equations & Inequalities",
      "titleZh": "第二单元：解方程与不等式",
      "lessons": [
        {
          "id": "solving-multi-step-equations",
          "title": "Solving Multi-Step Equations",
          "titleZh": "解多步方程",
          "content": [
            {
              "type": "h2",
              "en": "The Balance Principle",
              "zh": "天平原理"
            },
            {
              "type": "p",
              "en": "An equation states that two expressions are equal. Solving it means finding every value of the variable that makes the statement true. The key idea is balance: whatever operation you perform on one side, you must perform on the other. Each legal move produces an equivalent equation — one with exactly the same solutions.",
              "zh": "方程表示两个代数式相等。解方程就是找出使等式成立的所有变量值。核心思想是平衡：对一边做什么运算，就必须对另一边做同样的运算。每一步合法变形都得到一个同解方程——解完全相同的方程。"
            },
            {
              "type": "h3",
              "en": "A Reliable Strategy",
              "zh": "可靠的解题步骤"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Distribute to clear parentheses.",
                  "zh": "第一步：用分配律去括号。"
                },
                {
                  "en": "Step 2: Combine like terms on each side.",
                  "zh": "第二步：在每一边分别合并同类项。"
                },
                {
                  "en": "Step 3: Collect variable terms on one side, constants on the other, using addition or subtraction.",
                  "zh": "第三步：用加减法把含变量的项移到一边，常数移到另一边。"
                },
                {
                  "en": "Step 4: Divide (or multiply) to isolate the variable.",
                  "zh": "第四步：用除法（或乘法）把变量单独分离出来。"
                },
                {
                  "en": "Step 5: Check by substituting your answer into the ORIGINAL equation.",
                  "zh": "第五步：把答案代回原方程检验。"
                }
              ]
            },
            {
              "type": "note",
              "en": "If both sides contain fractions, you can multiply every term by the least common denominator (LCD) first. This \"clears the fractions\" and usually prevents arithmetic mistakes.",
              "zh": "如果两边都含分数，可以先给每一项都乘以最小公分母（LCD）。这样\"消去分母\"，通常能避免计算错误。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Variables on both sides",
                "zh": "例题 1：两边都有变量"
              },
              "problem": {
                "en": "Solve $5x - 7 = 2x + 8$.",
                "zh": "解方程 $5x - 7 = 2x + 8$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Subtract $2x$ from both sides to collect the variable terms:",
                  "zh": "两边同减 $2x$，把含变量的项集中："
                },
                {
                  "type": "math",
                  "tex": "3x - 7 = 8"
                },
                {
                  "type": "p",
                  "en": "Add 7 to both sides, then divide by 3:",
                  "zh": "两边同加 7，再除以 3："
                },
                {
                  "type": "math",
                  "tex": "3x = 15 \\quad\\Rightarrow\\quad x = 5"
                },
                {
                  "type": "p",
                  "en": "Check: $5(5) - 7 = 18$ and $2(5) + 8 = 18$. Both sides match, so $x = 5$.",
                  "zh": "检验：$5(5) - 7 = 18$，$2(5) + 8 = 18$。两边相等，所以 $x = 5$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Parentheses and fractions",
                "zh": "例题 2：括号与分数"
              },
              "problem": {
                "en": "Solve $\\frac{2}{3}(6x - 9) = 4x - 10$.",
                "zh": "解方程 $\\frac{2}{3}(6x - 9) = 4x - 10$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Distribute $\\frac{2}{3}$: $\\frac{2}{3} \\cdot 6x = 4x$ and $\\frac{2}{3} \\cdot (-9) = -6$.",
                  "zh": "分配 $\\frac{2}{3}$：$\\frac{2}{3} \\cdot 6x = 4x$，$\\frac{2}{3} \\cdot (-9) = -6$。"
                },
                {
                  "type": "math",
                  "tex": "4x - 6 = 4x - 10"
                },
                {
                  "type": "p",
                  "en": "Subtracting $4x$ from both sides gives $-6 = -10$, which is false. No value of $x$ can fix a false statement, so the equation has NO solution.",
                  "zh": "两边同减 $4x$ 得 $-6 = -10$，这是假命题。任何 $x$ 都无法使假命题成立，所以方程无解。"
                },
                {
                  "type": "p",
                  "en": "If instead the variables vanish and you get a TRUE statement like $6 = 6$, then every real number is a solution (an identity).",
                  "zh": "反之，如果变量消失后得到真命题（如 $6 = 6$），那么所有实数都是解（恒等式）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Literal Equations",
              "zh": "字母方程（公式变形）"
            },
            {
              "type": "p",
              "en": "A literal equation, like the perimeter formula $P = 2l + 2w$, contains several variables. Solving for one of them uses exactly the same balance moves: to solve for $w$, subtract $2l$, then divide by 2, giving $w = \\frac{P - 2l}{2}$. This skill is essential in science classes.",
              "zh": "字母方程（如周长公式 $P = 2l + 2w$）含有多个变量。对其中某个变量求解使用完全相同的平衡法：要解出 $w$，先减去 $2l$，再除以 2，得 $w = \\frac{P - 2l}{2}$。这项技能在理科课程中至关重要。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Solve $3x + 4 = 19$. Give your answer as an integer.",
                "zh": "解方程 $3x + 4 = 19$。请以整数作答。"
              },
              "answer": "5",
              "explanation": {
                "en": "Subtract 4 from both sides: $3x = 15$. Divide by 3: $x = 5$. Always undo addition/subtraction before multiplication/division when isolating.",
                "zh": "两边同减 4：$3x = 15$。再除以 3：$x = 5$。分离变量时，先消去加减，再处理乘除。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the first helpful step to solve $4(x - 2) + 3 = 15$?",
                "zh": "解 $4(x - 2) + 3 = 15$ 的第一步最好是什么？"
              },
              "choices": [
                "Divide both sides by 4 (两边除以 4)",
                "Distribute the 4 (用分配律去括号)",
                "Subtract $x$ from both sides (两边减 $x$)",
                "Add 2 to both sides (两边加 2)"
              ],
              "answer": 1,
              "explanation": {
                "en": "Clearing parentheses first gives $4x - 8 + 3 = 15$, a standard two-step equation. Dividing by 4 immediately would force you to divide the $+3$ and $15$ as well, creating fractions.",
                "zh": "先去括号得 $4x - 8 + 3 = 15$，变成标准的两步方程。若直接除以 4，$+3$ 和 $15$ 也要除，会产生分数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $7x - 5 = 4x + 16$. Give your answer as an integer.",
                "zh": "解方程 $7x - 5 = 4x + 16$。请以整数作答。"
              },
              "answer": "7",
              "explanation": {
                "en": "Subtract $4x$: $3x - 5 = 16$. Add 5: $3x = 21$. Divide: $x = 7$. Check: $7(7) - 5 = 44$ and $4(7) + 16 = 44$.",
                "zh": "两边减 $4x$：$3x - 5 = 16$。加 5：$3x = 21$。除以 3：$x = 7$。检验：$7(7) - 5 = 44$，$4(7) + 16 = 44$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many solutions does $2(3x + 1) = 6x + 2$ have?",
                "zh": "方程 $2(3x + 1) = 6x + 2$ 有多少个解？"
              },
              "choices": [
                "Exactly one (恰好一个)",
                "No solution (无解)",
                "Infinitely many (无穷多个)",
                "Exactly two (恰好两个)"
              ],
              "answer": 2,
              "explanation": {
                "en": "Distributing gives $6x + 2 = 6x + 2$, which is true for every $x$. When both sides simplify to the identical expression, the equation is an identity with infinitely many solutions.",
                "zh": "去括号得 $6x + 2 = 6x + 2$，对任何 $x$ 都成立。当两边化简后完全相同时，方程是恒等式，有无穷多个解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $\\frac{x}{4} + 3 = \\frac{x}{2} - 1$. Give your answer as an integer.",
                "zh": "解方程 $\\frac{x}{4} + 3 = \\frac{x}{2} - 1$。请以整数作答。"
              },
              "answer": "16",
              "explanation": {
                "en": "Multiply every term by the LCD, 4: $x + 12 = 2x - 4$. Subtract $x$: $12 = x - 4$, so $x = 16$. Clearing fractions first keeps the arithmetic clean.",
                "zh": "每项乘以最小公分母 4：$x + 12 = 2x - 4$。减 $x$：$12 = x - 4$，得 $x = 16$。先消分母能让计算更简洁。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve the formula $A = \\frac{1}{2}bh$ for $h$.",
                "zh": "把公式 $A = \\frac{1}{2}bh$ 变形，解出 $h$。"
              },
              "choices": [
                "$h = \\frac{2A}{b}$",
                "$h = \\frac{A}{2b}$",
                "$h = 2Ab$",
                "$h = \\frac{b}{2A}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Multiply both sides by 2: $2A = bh$. Divide both sides by $b$: $h = \\frac{2A}{b}$. Treat the other letters exactly like numbers.",
                "zh": "两边乘 2：$2A = bh$。两边除以 $b$：$h = \\frac{2A}{b}$。把其他字母当作数字同样处理即可。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A number increased by 12 equals three times the number decreased by 4, i.e. $n + 12 = 3n - 4$. Find $n$. Give your answer as an integer.",
                "zh": "一个数加 12 等于这个数的三倍减 4，即 $n + 12 = 3n - 4$。求 $n$。请以整数作答。"
              },
              "answer": "8",
              "explanation": {
                "en": "Subtract $n$: $12 = 2n - 4$. Add 4: $16 = 2n$, so $n = 8$. Translating word problems into equations and solving them is the heart of algebra.",
                "zh": "两边减 $n$：$12 = 2n - 4$。加 4：$16 = 2n$，所以 $n = 8$。把应用题翻译成方程再求解是代数的核心。"
              }
            }
          ]
        },
        {
          "id": "solving-inequalities",
          "title": "Solving and Graphing Inequalities",
          "titleZh": "解不等式及其图示",
          "content": [
            {
              "type": "h2",
              "en": "Inequalities Describe Ranges",
              "zh": "不等式描述范围"
            },
            {
              "type": "p",
              "en": "An inequality compares two expressions using $<$, $>$, $\\leq$, or $\\geq$. Its solution is usually not a single number but a whole range of numbers. We show the solution on a number line: an open circle for $<$ or $>$ (the endpoint is not included) and a closed circle for $\\leq$ or $\\geq$ (the endpoint is included).",
              "zh": "不等式用 $<$、$>$、$\\leq$ 或 $\\geq$ 比较两个代数式。它的解通常不是一个数，而是一整段范围。我们在数轴上表示解集：$<$ 或 $>$ 用空心圆（端点不包含），$\\leq$ 或 $\\geq$ 用实心圆（端点包含）。"
            },
            {
              "type": "h3",
              "en": "Solving Works Like Equations — With One Big Exception",
              "zh": "解法与方程类似——但有一个重大例外"
            },
            {
              "type": "p",
              "en": "You may add or subtract any quantity on both sides, and multiply or divide by any POSITIVE number, just as with equations. But multiplying or dividing both sides by a NEGATIVE number reverses the inequality symbol.",
              "zh": "与方程一样，两边可以加减任何数，也可以乘或除以任何正数。但如果两边乘或除以负数，必须反转不等号方向。"
            },
            {
              "type": "note",
              "en": "Why does the symbol flip? Compare $2 < 5$. Multiply both sides by $-1$: we get $-2$ and $-5$, and on the number line $-2 > -5$. Negation reflects numbers across zero, which reverses their order.",
              "zh": "为什么要反转符号？看 $2 < 5$：两边乘 $-1$ 得 $-2$ 和 $-5$，在数轴上 $-2 > -5$。取相反数相当于把数关于零点翻转，大小顺序因此颠倒。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Dividing by a negative",
                "zh": "例题 1：除以负数"
              },
              "problem": {
                "en": "Solve $-3x + 4 > 13$ and graph the solution.",
                "zh": "解不等式 $-3x + 4 > 13$ 并在数轴上表示解集。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Subtract 4 from both sides:",
                  "zh": "两边同减 4："
                },
                {
                  "type": "math",
                  "tex": "-3x > 9"
                },
                {
                  "type": "p",
                  "en": "Divide by $-3$ and FLIP the symbol:",
                  "zh": "除以 $-3$，并反转不等号："
                },
                {
                  "type": "math",
                  "tex": "x < -3"
                },
                {
                  "type": "p",
                  "en": "Graph: open circle at $-3$, shading to the left. Check with $x = -4$: $-3(-4) + 4 = 16 > 13$. True.",
                  "zh": "图示：在 $-3$ 处画空心圆，向左阴影。用 $x = -4$ 检验：$-3(-4) + 4 = 16 > 13$，成立。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A compound inequality",
                "zh": "例题 2：复合不等式"
              },
              "problem": {
                "en": "Solve $-5 \\leq 2x + 1 < 9$.",
                "zh": "解不等式 $-5 \\leq 2x + 1 < 9$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "This \"and\" compound inequality traps $2x + 1$ between two values. Perform each step on all THREE parts. Subtract 1 everywhere:",
                  "zh": "这个\"且\"型复合不等式把 $2x + 1$ 夹在两个值之间。每一步要对三个部分同时进行。先都减 1："
                },
                {
                  "type": "math",
                  "tex": "-6 \\leq 2x < 8"
                },
                {
                  "type": "p",
                  "en": "Divide all parts by 2 (positive, so no flip):",
                  "zh": "三部分同除以 2（正数，不反转）："
                },
                {
                  "type": "math",
                  "tex": "-3 \\leq x < 4"
                },
                {
                  "type": "p",
                  "en": "The graph is a segment from $-3$ (closed circle) to $4$ (open circle).",
                  "zh": "图示为从 $-3$（实心圆）到 $4$（空心圆）的一段。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "\"Or\" Compound Inequalities",
              "zh": "\"或\"型复合不等式"
            },
            {
              "type": "p",
              "en": "A compound inequality joined by \"or\", such as $x < -2$ or $x \\geq 3$, is satisfied when EITHER part is true. Its graph is two separate rays pointing away from each other. In real life, \"and\" inequalities describe tolerances (a safe temperature range), while \"or\" inequalities describe extremes (temperatures that trigger an alarm).",
              "zh": "用\"或\"连接的复合不等式（如 $x < -2$ 或 $x \\geq 3$）只要有一部分成立即可。它的图象是两条方向相反的射线。现实中，\"且\"型描述容许范围（安全温度区间），\"或\"型描述极端情形（触发警报的温度）。"
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Solve $x + 6 < 11$. Give the boundary value of $x$ as an integer (the solution is $x <$ your answer).",
                "zh": "解 $x + 6 < 11$。请给出边界值（解为 $x <$ 你的答案），以整数作答。"
              },
              "answer": "5",
              "explanation": {
                "en": "Subtract 6 from both sides: $x < 5$. No sign flip is needed because we only subtracted.",
                "zh": "两边同减 6：$x < 5$。只做了减法，不需要反转不等号。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which value is in the solution set of $2x - 3 \\geq 7$?",
                "zh": "下列哪个值属于 $2x - 3 \\geq 7$ 的解集？"
              },
              "choices": [
                "$3$",
                "$4$",
                "$5$",
                "$0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Solving: $2x \\geq 10$, so $x \\geq 5$. Only $5$ satisfies this (the boundary is included because of $\\geq$). Testing: $2(5) - 3 = 7 \\geq 7$. True.",
                "zh": "解得 $2x \\geq 10$，即 $x \\geq 5$。只有 $5$ 满足（因为是 $\\geq$，边界值包含在内）。检验：$2(5) - 3 = 7 \\geq 7$，成立。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $-4x \\leq 20$.",
                "zh": "解不等式 $-4x \\leq 20$。"
              },
              "choices": [
                "$x \\leq -5$",
                "$x \\geq -5$",
                "$x \\leq 5$",
                "$x \\geq 5$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Divide both sides by $-4$ and reverse the symbol: $x \\geq -5$. Check with $x = 0$: $-4(0) = 0 \\leq 20$ is true, and $0$ is in $x \\geq -5$. Consistent.",
                "zh": "两边除以 $-4$ 并反转符号：$x \\geq -5$。用 $x = 0$ 检验：$-4(0) = 0 \\leq 20$ 成立，且 $0$ 在 $x \\geq -5$ 中，一致。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of a solution set has an OPEN circle at 2 with shading to the right. Which inequality does it represent?",
                "zh": "某解集的数轴图在 2 处为空心圆，向右阴影。它表示哪个不等式？"
              },
              "choices": [
                "$x \\geq 2$",
                "$x \\leq 2$",
                "$x > 2$",
                "$x < 2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "An open circle means 2 itself is excluded (strict inequality), and shading right means values greater than 2: $x > 2$.",
                "zh": "空心圆表示不包含 2（严格不等式），向右阴影表示大于 2 的值：$x > 2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $5 - 2x > 1$. Give the boundary value as an integer (the solution is $x <$ your answer).",
                "zh": "解 $5 - 2x > 1$。请给出边界值（解为 $x <$ 你的答案），以整数作答。"
              },
              "answer": "2",
              "explanation": {
                "en": "Subtract 5: $-2x > -4$. Divide by $-2$ and flip: $x < 2$. Forgetting to flip gives the wrong set $x > 2$; test $x = 0$: $5 - 0 = 5 > 1$ confirms $x < 2$.",
                "zh": "减 5：$-2x > -4$。除以 $-2$ 并反转：$x < 2$。忘记反转会得到错误的 $x > 2$；代入 $x = 0$：$5 - 0 = 5 > 1$ 证实解为 $x < 2$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which compound inequality matches the graph of a segment with closed circles at $-1$ and $4$?",
                "zh": "数轴上一条线段在 $-1$ 和 $4$ 处均为实心圆，对应哪个复合不等式？"
              },
              "choices": [
                "$-1 < x < 4$",
                "$-1 \\leq x \\leq 4$",
                "$x \\leq -1$ or $x \\geq 4$",
                "$-1 \\leq x < 4$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Closed circles mean both endpoints are included, so both symbols are $\\leq$: $-1 \\leq x \\leq 4$. An \"or\" inequality would show two rays, not one segment.",
                "zh": "实心圆表示两个端点都包含，故两处符号都是 $\\leq$：$-1 \\leq x \\leq 4$。\"或\"型不等式的图象是两条射线，不是一条线段。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "You have \\$50 and each ride ticket costs \\$6. Solving $6t \\leq 50$, what is the greatest whole number of tickets you can buy? Give an integer.",
                "zh": "你有 50 美元，每张游乐票 6 美元。由 $6t \\leq 50$ 可知你最多能买多少张票？请以整数作答。"
              },
              "answer": "8",
              "explanation": {
                "en": "Dividing gives $t \\leq \\frac{50}{6} \\approx 8.33$. Since tickets are whole items, round DOWN to 8. In context problems, always interpret the boundary sensibly rather than just reporting the fraction.",
                "zh": "除以 6 得 $t \\leq \\frac{50}{6} \\approx 8.33$。票必须是整数，所以向下取整为 8。应用题中要结合实际意义处理边界值，而不是直接写分数。"
              }
            }
          ]
        },
        {
          "id": "literal-equations-and-modeling",
          "title": "Literal Equations and Equation Word Problems",
          "titleZh": "字母方程与方程应用题",
          "content": [
            {
              "type": "h2",
              "en": "Formulas Are Equations Too",
              "zh": "公式也是方程"
            },
            {
              "type": "p",
              "en": "A literal equation is an equation that contains two or more letters, like the area formula $A = \\frac{1}{2}bh$ or the temperature formula $C = \\frac{5}{9}(F - 32)$. Solving a literal equation for one variable means rewriting it so that variable sits alone on one side. The steps are exactly the ones you already use to solve equations — the only difference is that your answer is an expression instead of a number.",
              "zh": "字母方程是含有两个或更多字母的方程，比如面积公式 $A = \\frac{1}{2}bh$ 或温度公式 $C = \\frac{5}{9}(F - 32)$。把字母方程对某个变量求解，就是把方程改写成该变量单独在一边的形式。步骤与解普通方程完全相同——唯一的区别是答案是一个式子而不是一个数。"
            },
            {
              "type": "p",
              "en": "Why bother rearranging? Suppose you need the height of 30 different triangles, each with a known area and base. Instead of solving $A = \\frac{1}{2}bh$ thirty times, rearrange it ONCE into $h = \\frac{2A}{b}$ and just plug in. Scientists, programmers, and engineers rearrange formulas constantly for exactly this reason.",
              "zh": "为什么要变形？假设你需要求 30 个不同三角形的高，每个三角形的面积和底都已知。与其把 $A = \\frac{1}{2}bh$ 解 30 次，不如一次性变形为 $h = \\frac{2A}{b}$，然后直接代入。科学家、程序员和工程师正是出于这个原因经常对公式进行变形。"
            },
            {
              "type": "h3",
              "en": "Solving a Formula for a Variable",
              "zh": "把公式对某个变量求解"
            },
            {
              "type": "p",
              "en": "Treat the variable you are solving for as \"the unknown,\" and treat every other letter as if it were a known number. Then undo operations in reverse order, doing the same thing to both sides.",
              "zh": "把要求解的变量看作\"未知数\"，把其他所有字母都当作已知数。然后按相反的顺序逐一撤销运算，并保持等式两边做同样的操作。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Clear fractions by multiplying both sides by the denominator.",
                  "zh": "两边同乘分母，去掉分数。"
                },
                {
                  "en": "Move terms that do not contain your target variable to the other side by adding or subtracting.",
                  "zh": "通过加减把不含目标变量的项移到另一边。"
                },
                {
                  "en": "Divide both sides by whatever is multiplying your target variable.",
                  "zh": "两边同除以与目标变量相乘的因子。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Solve $C = \\frac{5}{9}(F - 32)$ for $F$",
                "zh": "例题 1：把 $C = \\frac{5}{9}(F - 32)$ 对 $F$ 求解"
              },
              "problem": {
                "en": "The formula $C = \\frac{5}{9}(F - 32)$ converts Fahrenheit to Celsius. Solve it for $F$ so you can convert Celsius to Fahrenheit instead.",
                "zh": "公式 $C = \\frac{5}{9}(F - 32)$ 把华氏温度换算成摄氏温度。请把它对 $F$ 求解，得到由摄氏换算华氏的公式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First undo the multiplication by $\\frac{5}{9}$: multiply both sides by its reciprocal, $\\frac{9}{5}$.",
                  "zh": "先撤销乘以 $\\frac{5}{9}$ 这一步：两边同乘它的倒数 $\\frac{9}{5}$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{9}{5}C = F - 32"
                },
                {
                  "type": "p",
                  "en": "Then undo the subtraction of 32 by adding 32 to both sides.",
                  "zh": "再撤销减 32 这一步：两边同加 32。"
                },
                {
                  "type": "math",
                  "tex": "F = \\frac{9}{5}C + 32"
                },
                {
                  "type": "p",
                  "en": "Quick check with a value you know: water boils at $C = 100$, and $\\frac{9}{5}(100) + 32 = 212$ — the correct boiling point in Fahrenheit.",
                  "zh": "用已知数值快速验证：水在 $C = 100$ 时沸腾，而 $\\frac{9}{5}(100) + 32 = 212$——正是水沸腾的华氏温度。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: when you divide or multiply, it must apply to the ENTIRE side. Solving $P = 2l + 2w$ for $w$, dividing only the $2w$ term by 2 gives the wrong answer $w = P - 2l$. Divide the whole right side after subtracting: $w = \\frac{P - 2l}{2}$.",
              "zh": "常见错误：乘或除必须作用于等号一侧的整体。把 $P = 2l + 2w$ 对 $w$ 求解时，如果只把 $2w$ 这一项除以 2，会得到错误答案 $w = P - 2l$。正确做法是先减去 $2l$，再把整个右边除以 2：$w = \\frac{P - 2l}{2}$。"
            },
            {
              "type": "h3",
              "en": "Translating Sentences into Equations",
              "zh": "把文字语句翻译成方程"
            },
            {
              "type": "p",
              "en": "Word problems become equations once you (1) define a variable in words, (2) translate the sentence phrase by phrase, and (3) solve. Certain keywords signal operations:",
              "zh": "解应用题的步骤是：(1) 用文字明确设出变量，(2) 逐句把语句翻译成算式，(3) 解方程。一些关键词提示着运算："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "\"is,\" \"equals,\" \"gives\" $\\rightarrow$ the equals sign $=$",
                  "zh": "\"是\"、\"等于\"、\"得到\" $\\rightarrow$ 等号 $=$"
                },
                {
                  "en": "\"sum,\" \"more than,\" \"increased by\" $\\rightarrow$ addition; \"less than,\" \"decreased by\" $\\rightarrow$ subtraction (watch the order!)",
                  "zh": "\"和\"、\"多\"、\"增加\" $\\rightarrow$ 加法；\"少\"、\"减少\" $\\rightarrow$ 减法（注意顺序！）"
                },
                {
                  "en": "\"twice,\" \"of,\" \"product\" $\\rightarrow$ multiplication; \"per,\" \"quotient\" $\\rightarrow$ division",
                  "zh": "\"两倍\"、\"的\"、\"积\" $\\rightarrow$ 乘法；\"每\"、\"商\" $\\rightarrow$ 除法"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Classic Word Problems",
              "zh": "经典应用题"
            },
            {
              "type": "p",
              "en": "Consecutive integer problems: if the first integer is $n$, the next ones are $n + 1$, $n + 2$, and so on. For consecutive EVEN or ODD integers, the gap is 2, so use $n$, $n + 2$, $n + 4$. Age problems: pick one person's current age as $x$ and build everyone else's age from it; \"in 5 years\" means add 5 to every age. Perimeter problems: express length and width with one variable, then use $P = 2l + 2w$.",
              "zh": "连续整数问题：设第一个整数为 $n$，则后面依次是 $n + 1$、$n + 2$ 等。连续偶数或连续奇数相差 2，因此设为 $n$、$n + 2$、$n + 4$。年龄问题：设某个人现在的年龄为 $x$，其他人的年龄都用 $x$ 表示；\"5 年后\"意味着每个人的年龄都要加 5。周长问题：用一个变量表示长和宽，再代入 $P = 2l + 2w$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A perimeter word problem",
                "zh": "例题 2：周长应用题"
              },
              "problem": {
                "en": "The length of a rectangular garden is 7 meters more than twice its width. The perimeter is 68 meters. Find the dimensions.",
                "zh": "一个长方形花园的长比宽的两倍多 7 米，周长是 68 米。求花园的长和宽。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $w$ be the width in meters. \"7 more than twice the width\" makes the length $2w + 7$. Substitute into $P = 2l + 2w$:",
                  "zh": "设宽为 $w$ 米。\"比宽的两倍多 7\"说明长是 $2w + 7$。代入 $P = 2l + 2w$："
                },
                {
                  "type": "math",
                  "tex": "2(2w + 7) + 2w = 68"
                },
                {
                  "type": "p",
                  "en": "Distribute and combine: $4w + 14 + 2w = 68$, so $6w = 54$ and $w = 9$. Then the length is $2(9) + 7 = 25$.",
                  "zh": "展开并合并：$4w + 14 + 2w = 68$，即 $6w = 54$，所以 $w = 9$。于是长为 $2(9) + 7 = 25$。"
                },
                {
                  "type": "p",
                  "en": "Check in the original story, not your equation: is 25 seven more than twice 9? Yes, $2(9) + 7 = 25$. Is the perimeter $2(25) + 2(9) = 68$? Yes. The garden is 9 m by 25 m.",
                  "zh": "用题目原文（而不是你列的方程）验算：25 是否比 9 的两倍多 7？是，$2(9) + 7 = 25$。周长是否为 $2(25) + 2(9) = 68$？是。花园为 9 米 × 25 米。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Always Check Your Solution",
              "zh": "一定要验算"
            },
            {
              "type": "p",
              "en": "Substitute your answer back into the ORIGINAL sentence of the problem. This catches two kinds of errors at once: algebra slips, and setting up the wrong equation in the first place. Also ask whether the answer makes sense — a width of $-3$ meters or a person aged $250$ signals a setup error even if the algebra was flawless.",
              "zh": "把答案代回题目最初的文字叙述中检验。这样能同时发现两类错误：解方程时的计算失误，以及一开始就列错了方程。还要问问答案是否合理——宽是 $-3$ 米或某人 $250$ 岁，即使计算无误，也说明方程列错了。"
            },
            {
              "type": "note",
              "en": "Test tip: on a word problem, write a \"let\" statement (\"let $w$ = the width in meters\") before you write any equation. Graders award setup points for it, and it prevents the #1 error — solving correctly for $x$ but reporting the wrong quantity (the problem asked for the length, and $x$ was the width!).",
              "zh": "考试提示：做应用题时，先写出设句（\"设 $w$ 为宽，单位：米\"），再列方程。阅卷时这一步有过程分，而且它能防止最常见的错误——$x$ 解对了，却答错了量（题目问的是长，而 $x$ 设的是宽！）。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Solve the distance formula $d = rt$ for $t$.",
                "zh": "把路程公式 $d = rt$ 对 $t$ 求解。"
              },
              "choices": [
                "$t = dr$",
                "$t = \\frac{d}{r}$",
                "$t = \\frac{r}{d}$",
                "$t = d - r$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Since $t$ is multiplied by $r$, undo it by dividing both sides by $r$: $t = \\frac{d}{r}$. The distractor $t = \\frac{r}{d}$ flips the fraction — check with numbers: at 50 mph for 100 miles, time should be $\\frac{100}{50} = 2$ hours, not $\\frac{50}{100}$ hour.",
                "zh": "$t$ 与 $r$ 相乘，撤销它需要两边同除以 $r$：$t = \\frac{d}{r}$。干扰项 $t = \\frac{r}{d}$ 把分数写反了——用数字检验：以 50 英里/小时行驶 100 英里，时间应为 $\\frac{100}{50} = 2$ 小时，而不是 $\\frac{50}{100}$ 小时。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A triangle has area $A = 54$ square cm and base $b = 12$ cm. Use $A = \\frac{1}{2}bh$ to find the height $h$ in cm. Give an integer.",
                "zh": "一个三角形的面积 $A = 54$ 平方厘米，底 $b = 12$ 厘米。用 $A = \\frac{1}{2}bh$ 求高 $h$（厘米）。请填一个整数。"
              },
              "answer": "9",
              "accept": [
                "9.0"
              ],
              "explanation": {
                "en": "Solve the formula for $h$ first: $h = \\frac{2A}{b}$. Then $h = \\frac{2(54)}{12} = \\frac{108}{12} = 9$ cm. Check: $\\frac{1}{2}(12)(9) = 54$. ✓",
                "zh": "先把公式对 $h$ 求解：$h = \\frac{2A}{b}$。于是 $h = \\frac{2(54)}{12} = \\frac{108}{12} = 9$ 厘米。验算：$\\frac{1}{2}(12)(9) = 54$。✓"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve the perimeter formula $P = 2l + 2w$ for $w$.",
                "zh": "把周长公式 $P = 2l + 2w$ 对 $w$ 求解。"
              },
              "choices": [
                "$w = \\frac{P - 2l}{2}$",
                "$w = \\frac{P}{2} - 2l$",
                "$w = P - l$",
                "$w = \\frac{2l - P}{2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Subtract $2l$ from both sides to get $P - 2l = 2w$, then divide the ENTIRE side by 2: $w = \\frac{P - 2l}{2}$. The distractor $\\frac{P}{2} - 2l$ comes from dividing $P$ by 2 but forgetting to divide the $2l$ term as well.",
                "zh": "两边同减 $2l$ 得 $P - 2l = 2w$，再把整个一边除以 2：$w = \\frac{P - 2l}{2}$。干扰项 $\\frac{P}{2} - 2l$ 的错误在于只把 $P$ 除以 2，却忘了 $2l$ 这一项也要除以 2。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation represents the sentence \"seven less than twice a number is 15\"?",
                "zh": "哪个方程表示\"比某数的两倍少 7 的数是 15\"？"
              },
              "choices": [
                "$7 - 2n = 15$",
                "$2(n - 7) = 15$",
                "$2n - 7 = 15$",
                "$2n = 15 - 7$"
              ],
              "answer": 2,
              "explanation": {
                "en": "\"Twice a number\" is $2n$, and \"seven less than\" that quantity means subtracting 7 FROM it: $2n - 7 = 15$ (so $n = 11$). The trap $7 - 2n$ follows the reading order of the English words but reverses the actual subtraction.",
                "zh": "\"某数的两倍\"是 $2n$，\"比它少 7\"表示从它当中减去 7：$2n - 7 = 15$（解得 $n = 11$）。陷阱选项 $7 - 2n$ 按照文字的阅读顺序翻译，却把减法的方向弄反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Three consecutive even integers add up to 78. What is the smallest of the three? Give an integer.",
                "zh": "三个连续偶数的和是 78。这三个数中最小的是多少？请填一个整数。"
              },
              "answer": "24",
              "accept": [
                "24.0"
              ],
              "explanation": {
                "en": "Let the integers be $n$, $n + 2$, $n + 4$. Then $3n + 6 = 78$, so $3n = 72$ and $n = 24$. The three integers are 24, 26, 28, which do sum to 78. Using $n, n+1, n+2$ (a gap of 1 instead of 2) is the classic error here.",
                "zh": "设三个偶数为 $n$、$n + 2$、$n + 4$。则 $3n + 6 = 78$，即 $3n = 72$，$n = 24$。这三个数是 24、26、28，其和确为 78。这里的经典错误是设成 $n$、$n+1$、$n+2$（间隔用了 1 而不是 2）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Lena is 4 years older than her brother Marco. The sum of their ages is 30. If $x$ is Marco's age, which equation models this situation?",
                "zh": "莉娜比弟弟马可大 4 岁，两人年龄之和是 30。设马可的年龄为 $x$，哪个方程符合题意？"
              },
              "choices": [
                "$x + 4x = 30$",
                "$x + (x + 4) = 30$",
                "$x(x + 4) = 30$",
                "$x + (x - 4) = 30$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Marco is $x$, and Lena is 4 years OLDER, so she is $x + 4$. Their sum: $x + (x + 4) = 30$, giving $x = 13$. The distractor $x + 4x$ confuses \"4 years older\" (add 4) with \"4 times as old\" (multiply by 4).",
                "zh": "马可是 $x$ 岁，莉娜比他大 4 岁，所以是 $x + 4$ 岁。两人之和：$x + (x + 4) = 30$，解得 $x = 13$。干扰项 $x + 4x$ 把\"大 4 岁\"（加 4）和\"年龄是 4 倍\"（乘 4）弄混了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: using $F = \\frac{9}{5}C + 32$, there is exactly one temperature at which the Fahrenheit and Celsius readings are equal. Find it. Give an integer.",
                "zh": "挑战题：根据 $F = \\frac{9}{5}C + 32$，恰好存在一个温度，使华氏读数与摄氏读数相等。求这个温度。请填一个整数。"
              },
              "answer": "-40",
              "accept": [
                "-40.0"
              ],
              "explanation": {
                "en": "Set $F = C = x$ and solve $x = \\frac{9}{5}x + 32$. Subtract $\\frac{9}{5}x$: $-\\frac{4}{5}x = 32$, so $x = 32 \\cdot \\left(-\\frac{5}{4}\\right) = -40$. Check: $\\frac{9}{5}(-40) + 32 = -72 + 32 = -40$. ✓ At $-40$ degrees, both scales agree — a famous fact in science.",
                "zh": "令 $F = C = x$，解 $x = \\frac{9}{5}x + 32$。两边减去 $\\frac{9}{5}x$：$-\\frac{4}{5}x = 32$，所以 $x = 32 \\cdot \\left(-\\frac{5}{4}\\right) = -40$。验算：$\\frac{9}{5}(-40) + 32 = -72 + 32 = -40$。✓ 在 $-40$ 度时两种温标读数相同——这是科学中的著名事实。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-3-working-with-units",
      "title": "Unit 3: Working with Units",
      "titleZh": "第三单元：单位与量纲",
      "lessons": [
        {
          "id": "units-and-dimensional-analysis",
          "title": "Working with Units and Dimensional Analysis",
          "titleZh": "单位换算与量纲分析",
          "content": [
            {
              "type": "h2",
              "en": "Why Units Matter",
              "zh": "单位为什么重要"
            },
            {
              "type": "p",
              "en": "A number without a unit is only half an answer. \"The trip takes 3\" means nothing until you say 3 hours or 3 days. In 1999, NASA lost the \\$125 million Mars Climate Orbiter because one engineering team worked in pounds of force while another assumed newtons — the numbers were right, but the units did not match. Algebra gives us a reliable system, called dimensional analysis, for converting units and for checking that our formulas make sense.",
              "zh": "没有单位的数只是半个答案。\"这段路程需要 3\"毫无意义，除非你说明是 3 小时还是 3 天。1999 年，NASA 价值 1.25 亿美元的火星气候探测器坠毁，原因是一个工程团队使用磅力，而另一个团队默认使用牛顿——数字都对，但单位不匹配。代数为我们提供了一套可靠的方法，叫做量纲分析，用来换算单位并检查公式是否合理。"
            },
            {
              "type": "h3",
              "en": "Conversion Factors: Multiplying by 1",
              "zh": "换算因子：乘以 1"
            },
            {
              "type": "p",
              "en": "A conversion factor is a fraction whose numerator and denominator are EQUAL quantities written in different units, such as $\\frac{60 \\text{ min}}{1 \\text{ h}}$ or $\\frac{1 \\text{ km}}{1000 \\text{ m}}$. Because top and bottom are equal, every conversion factor equals 1 — so multiplying by it changes the units without changing the actual quantity. The key move: write the factor so the unit you want to REMOVE cancels diagonally, just like canceling a common factor in a fraction.",
              "zh": "换算因子是一个分数，其分子和分母是用不同单位表示的相等的量，例如 $\\frac{60 \\text{ min}}{1 \\text{ h}}$ 或 $\\frac{1 \\text{ km}}{1000 \\text{ m}}$。由于分子分母相等，每个换算因子都等于 1——乘以它只改变单位，不改变量的实际大小。关键技巧：把因子写成能让想消去的单位对角相消的形式，就像约分时消去公因数一样。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Write the given quantity as a fraction with its units.",
                  "zh": "第一步：把已知量连同单位写成分数形式。"
                },
                {
                  "en": "Step 2: Multiply by conversion factors, arranged so unwanted units cancel (one on top, one on bottom).",
                  "zh": "第二步：乘以换算因子，让不需要的单位一上一下相互消去。"
                },
                {
                  "en": "Step 3: Multiply the numbers, and confirm that only the units you want are left.",
                  "zh": "第三步：计算数字，并确认剩下的恰好是想要的单位。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Chaining several factors handles multi-step conversions in one line. For example, 60 miles per hour to meters per second (using $1 \\text{ mi} \\approx 1609$ m):",
              "zh": "把几个换算因子连乘，就能一行完成多步换算。例如把 60 英里/小时换算为米/秒（取 $1 \\text{ mi} \\approx 1609$ 米）："
            },
            {
              "type": "math",
              "tex": "\\frac{60 \\text{ mi}}{1 \\text{ h}} \\times \\frac{1609 \\text{ m}}{1 \\text{ mi}} \\times \\frac{1 \\text{ h}}{3600 \\text{ s}} \\approx 26.8 \\text{ m/s}"
            },
            {
              "type": "note",
              "en": "Common mistake: flipping a conversion factor. Both $\\frac{60 \\text{ min}}{1 \\text{ h}}$ and $\\frac{1 \\text{ h}}{60 \\text{ min}}$ equal 1, but only one of them cancels the unit you are trying to remove. If your units do not cancel — or your answer's size makes no sense (a walking speed of 10,000 m/s!) — you used the upside-down factor.",
              "zh": "常见错误：把换算因子写倒了。$\\frac{60 \\text{ min}}{1 \\text{ h}}$ 和 $\\frac{1 \\text{ h}}{60 \\text{ min}}$ 都等于 1，但只有一个能消去你想去掉的单位。如果单位消不掉，或者答案的大小明显不合理（步行速度 10000 米/秒！），说明你把因子用反了。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A multi-step speed conversion",
                "zh": "例题 1：多步速度换算"
              },
              "problem": {
                "en": "A high-speed train travels at 90 kilometers per hour. Convert this speed to meters per second.",
                "zh": "一列高速列车的速度是 90 千米/小时。把这个速度换算成米/秒。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Two units must change: kilometers to meters (top) and hours to seconds (bottom). Chain both factors:",
                  "zh": "需要换算两个单位：千米换成米（分子），小时换成秒（分母）。把两个因子连乘："
                },
                {
                  "type": "math",
                  "tex": "\\frac{90 \\text{ km}}{1 \\text{ h}} \\times \\frac{1000 \\text{ m}}{1 \\text{ km}} \\times \\frac{1 \\text{ h}}{3600 \\text{ s}} = \\frac{90{,}000 \\text{ m}}{3600 \\text{ s}} = 25 \\text{ m/s}"
                },
                {
                  "type": "p",
                  "en": "The km units cancel, the h units cancel, and only m/s remains. Sanity check: 25 m/s means covering a 25-meter pool length every second — fast but believable for a train.",
                  "zh": "千米消去，小时消去，只剩下米/秒。合理性检验：25 米/秒相当于每秒游过一条 25 米泳道的长度——对火车来说很快但可信。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Rates: Unit Price and Speed",
              "zh": "比率：单价与速度"
            },
            {
              "type": "p",
              "en": "A rate compares two quantities with different units: dollars per ounce, miles per hour, points per game. A unit rate has denominator 1 and makes comparisons instant. To find it, divide: $\\frac{\\$2.88}{12 \\text{ oz}} = \\$0.24$ per ounce. The word \"per\" always signals division.",
              "zh": "比率是两个不同单位的量之比：美元每盎司、英里每小时、每场得分。单位比率的分母为 1，便于直接比较。求法就是相除：$\\frac{\\$2.88}{12 \\text{ oz}} = 0.24$ 美元/盎司。\"每\"这个字总是表示除法。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Which is the better buy?",
                "zh": "例题 2：哪个更划算？"
              },
              "problem": {
                "en": "A 12-ounce jar of peanut butter costs \\$2.88, and a 20-ounce jar costs \\$4.60. Which jar is the better buy?",
                "zh": "一罐 12 盎司的花生酱售价 2.88 美元，一罐 20 盎司的售价 4.60 美元。哪一罐更划算？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compute each unit price in dollars per ounce:",
                  "zh": "分别计算两罐的单价（美元/盎司）："
                },
                {
                  "type": "math",
                  "tex": "\\frac{2.88}{12} = 0.24 \\qquad \\frac{4.60}{20} = 0.23"
                },
                {
                  "type": "p",
                  "en": "The 20-ounce jar costs \\$0.23 per ounce, one cent per ounce cheaper, so it is the better buy. Note that comparing total prices (\\$4.60 vs. \\$2.88) tells you nothing by itself — only the RATE makes the comparison fair.",
                  "zh": "20 盎司那罐每盎司 0.23 美元，每盎司便宜 1 美分，所以更划算。注意，只比较总价（4.60 美元和 2.88 美元）说明不了问题——只有比较比率才公平。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Units Inside Formulas",
              "zh": "公式中的单位"
            },
            {
              "type": "p",
              "en": "Units obey the same algebra as variables: they multiply, divide, and cancel. In $d = rt$, if $r$ is in $\\frac{\\text{mi}}{\\text{h}}$ and $t$ is in hours, then the product carries units $\\frac{\\text{mi}}{\\text{h}} \\times \\text{h} = \\text{mi}$ — the hours cancel, which is exactly why the formula outputs a distance in miles. If the units of a computation do not simplify to the units your answer should have, the setup is wrong, no matter what the calculator says.",
              "zh": "单位遵循与变量相同的代数规则：可以相乘、相除、相消。在 $d = rt$ 中，若 $r$ 的单位是 $\\frac{\\text{mi}}{\\text{h}}$，$t$ 的单位是小时，那么乘积的单位是 $\\frac{\\text{mi}}{\\text{h}} \\times \\text{h} = \\text{mi}$——小时相消，这正是这个公式算出的是英里数的原因。如果计算结果的单位化简后不是答案应有的单位，那么无论计算器显示什么，列式一定有错。"
            },
            {
              "type": "h3",
              "en": "Choosing Units and Reporting Sensible Precision",
              "zh": "选择合适的单位与合理的精确度"
            },
            {
              "type": "p",
              "en": "When you model a real situation, choose units that keep numbers readable: a road trip in miles (not inches), a pill's mass in milligrams (not kilograms). Precision matters too: measurements are only approximations, so an answer should not pretend to be more precise than the data that produced it. If you measure a room as 4.2 m by 3.86 m, reporting the area as $16.212$ m$^2$ suggests an accuracy you never had — round to about $16.2$ m$^2$, matching your least precise measurement.",
              "zh": "为实际情境建模时，要选择让数字易读的单位：公路旅行用英里（而不是英寸），药片质量用毫克（而不是千克）。精确度同样重要：测量值只是近似值，答案不应显得比原始数据更精确。如果你测得房间为 4.2 米 × 3.86 米，把面积报告为 $16.212$ 平方米就夸大了精确度——应四舍五入到约 $16.2$ 平方米，与精度最低的测量值保持一致。"
            },
            {
              "type": "note",
              "en": "Test tip: always write units in your final answer, and use them as a free error-check. Before solving, predict roughly what a sensible answer looks like (\"a bit less than 30 m/s\", \"a few dollars\"). If your computed answer is off by a factor of 60 or 1000, you almost certainly flipped a conversion factor — a 10-second units check can rescue the whole problem.",
              "zh": "考试提示：最终答案一定要带单位，并把单位当作免费的检错工具。解题前先估计合理答案的大致范围（\"略小于 30 米/秒\"、\"几美元\"）。如果算出的答案差了 60 倍或 1000 倍，几乎可以肯定是换算因子用反了——花 10 秒检查单位就能挽救整道题。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Given $1$ m $\\approx 3.28$ ft, which multiplication correctly converts 12 feet to meters?",
                "zh": "已知 $1$ 米 $\\approx 3.28$ 英尺，下列哪个乘法能正确地把 12 英尺换算成米？"
              },
              "choices": [
                "$12 \\text{ ft} \\times \\frac{3.28 \\text{ ft}}{1 \\text{ m}}$",
                "$12 \\text{ ft} \\times \\frac{1 \\text{ m}}{3.28 \\text{ ft}}$",
                "$12 \\text{ ft} \\times \\frac{3.28 \\text{ m}}{1 \\text{ ft}}$",
                "$\\frac{3.28}{12} \\text{ m}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "To cancel feet, the factor needs ft in the DENOMINATOR: $12 \\text{ ft} \\times \\frac{1 \\text{ m}}{3.28 \\text{ ft}} \\approx 3.66$ m. The first choice is tempting because it uses the same two numbers, but its units come out as $\\frac{\\text{ft}^2}{\\text{m}}$, which is meaningless — and its value, 39.4, is absurdly large for 12 feet.",
                "zh": "要消去英尺，因子的分母必须是英尺：$12 \\text{ ft} \\times \\frac{1 \\text{ m}}{3.28 \\text{ ft}} \\approx 3.66$ 米。第一个选项很有迷惑性，因为它用了同样的两个数，但它的单位是 $\\frac{\\text{ft}^2}{\\text{m}}$，毫无意义——而且结果 39.4 对 12 英尺来说大得离谱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Convert 72 kilometers per hour to meters per second. Give an integer.",
                "zh": "把 72 千米/小时换算成米/秒。请填一个整数。"
              },
              "answer": "20",
              "accept": [
                "20.0"
              ],
              "explanation": {
                "en": "Chain the factors: $\\frac{72 \\text{ km}}{1 \\text{ h}} \\times \\frac{1000 \\text{ m}}{1 \\text{ km}} \\times \\frac{1 \\text{ h}}{3600 \\text{ s}} = \\frac{72{,}000}{3600} = 20$ m/s. A handy shortcut: km/h $\\div 3.6 =$ m/s.",
                "zh": "连乘换算因子：$\\frac{72 \\text{ km}}{1 \\text{ h}} \\times \\frac{1000 \\text{ m}}{1 \\text{ km}} \\times \\frac{1 \\text{ h}}{3600 \\text{ s}} = \\frac{72{,}000}{3600} = 20$ 米/秒。实用捷径：千米/小时 $\\div 3.6 =$ 米/秒。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A car travels 150 miles in 2.5 hours. What is its average speed in miles per hour? Give an integer.",
                "zh": "一辆汽车 2.5 小时行驶了 150 英里。它的平均速度是多少英里/小时？请填一个整数。"
              },
              "answer": "60",
              "accept": [
                "60.0"
              ],
              "explanation": {
                "en": "Speed is a rate: $\\frac{150 \\text{ mi}}{2.5 \\text{ h}} = 60$ mi/h. The units tell you the operation — \"miles PER hour\" means miles divided by hours, never hours divided by miles.",
                "zh": "速度是一种比率：$\\frac{150 \\text{ mi}}{2.5 \\text{ h}} = 60$ 英里/小时。单位提示了运算——\"英里每小时\"表示英里除以小时，而不能反过来。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A car's gas tank holds $g$ gallons, and the car gets $m$ miles per gallon. What are the units of the product $g \\cdot m$, and what does it represent?",
                "zh": "一辆汽车的油箱容量为 $g$ 加仑，油耗为每加仑行驶 $m$ 英里。乘积 $g \\cdot m$ 的单位是什么？它表示什么？"
              },
              "choices": [
                "$\\text{miles}$ — the distance one full tank can cover",
                "$\\frac{\\text{gallons}}{\\text{mile}}$ — the fuel used per mile",
                "$\\frac{\\text{miles}}{\\text{gallon}^2}$ — the fuel efficiency rate",
                "$\\text{gallons}$ — the fuel needed for the trip"
              ],
              "answer": 0,
              "explanation": {
                "en": "Multiply the units: $\\text{gal} \\times \\frac{\\text{mi}}{\\text{gal}} = \\text{mi}$, since gallons cancel. So $g \\cdot m$ is the range in miles on a full tank. Distractor B describes $\\frac{1}{m}$, the reciprocal rate — dividing instead of multiplying is the common mix-up.",
                "zh": "把单位相乘：$\\text{gal} \\times \\frac{\\text{mi}}{\\text{gal}} = \\text{mi}$，加仑相消。所以 $g \\cdot m$ 是加满一箱油能行驶的英里数。干扰项 B 描述的是倒数比率 $\\frac{1}{m}$——把乘法误当成除法是常见的混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Brand A sells 16 oz of cereal for \\$3.68; Brand B sells 24 oz for \\$5.28. Which statement is true?",
                "zh": "品牌 A 的麦片 16 盎司售价 3.68 美元；品牌 B 的 24 盎司售价 5.28 美元。下列哪个说法正确？"
              },
              "choices": [
                "Brand A is cheaper per ounce, at \\$0.22/oz",
                "They cost the same per ounce",
                "Brand B is cheaper per ounce, at \\$0.22/oz",
                "Brand B is cheaper per ounce, at \\$0.32/oz"
              ],
              "answer": 2,
              "explanation": {
                "en": "Unit prices: Brand A is $\\frac{3.68}{16} = \\$0.23$ per oz; Brand B is $\\frac{5.28}{24} = \\$0.22$ per oz, so B is the better buy. Choosing A just because \\$3.68 is the smaller total price ignores that you also get less cereal — rates, not totals, make the comparison fair.",
                "zh": "单价：品牌 A 为 $\\frac{3.68}{16} = 0.23$ 美元/盎司；品牌 B 为 $\\frac{5.28}{24} = 0.22$ 美元/盎司，所以 B 更划算。只因为总价 3.68 美元更低就选 A，忽略了分量也更少——公平的比较靠比率，而不是总价。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "You measure a rectangular room as 4.2 m by 3.86 m, and a calculator gives the area as $16.212$ m$^2$. Which is the most appropriate way to report the area?",
                "zh": "你测得一个矩形房间为 4.2 米 × 3.86 米，计算器显示面积为 $16.212$ 平方米。报告这个面积最合适的方式是哪种？"
              },
              "choices": [
                "$16.212$ m$^2$, because the calculator is exact",
                "$16$ m$^2$, because whole numbers are always safest",
                "$16.21$ m$^2$, keeping two decimal places",
                "about $16.2$ m$^2$, matching the least precise measurement"
              ],
              "answer": 3,
              "explanation": {
                "en": "The measurement 4.2 m is only known to the nearest tenth, so the area cannot honestly be more precise than that: report about $16.2$ m$^2$. Writing all five calculator digits (choice A) claims precision the tape measure never had; rounding all the way to 16 throws away precision you DO have.",
                "zh": "测量值 4.2 米只精确到十分位，所以面积的精确度不能超过它：应报告约 $16.2$ 平方米。写出计算器的全部五位数字（选项 A）夸大了卷尺不具备的精确度；而一路舍入到 16 又丢掉了确实具有的精确度。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: a car travels at 60 miles per hour. Using $1$ mile $= 5280$ feet, convert this speed to feet per second. Give an integer.",
                "zh": "挑战题：一辆汽车以 60 英里/小时行驶。已知 $1$ 英里 $= 5280$ 英尺，把这个速度换算成英尺/秒。请填一个整数。"
              },
              "answer": "88",
              "accept": [
                "88.0"
              ],
              "explanation": {
                "en": "Chain the factors: $\\frac{60 \\text{ mi}}{1 \\text{ h}} \\times \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\times \\frac{1 \\text{ h}}{3600 \\text{ s}} = \\frac{316{,}800}{3600} = 88$ ft/s. This famous equivalence (60 mph = 88 ft/s) is used in driver safety calculations. If you got 316,800 or a tiny decimal, one factor was flipped or skipped.",
                "zh": "连乘换算因子：$\\frac{60 \\text{ mi}}{1 \\text{ h}} \\times \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\times \\frac{1 \\text{ h}}{3600 \\text{ s}} = \\frac{316{,}800}{3600} = 88$ 英尺/秒。这一著名等式（60 英里/小时 = 88 英尺/秒）常用于行车安全计算。如果你得到 316800 或一个很小的小数，说明某个因子被写反或漏乘了。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-4-linear-equations-graphs",
      "title": "Unit 4: Linear Equations & Graphs",
      "titleZh": "第四单元：一次方程与图象",
      "lessons": [
        {
          "id": "slope-and-rate-of-change",
          "title": "Slope and Rate of Change",
          "titleZh": "斜率与变化率",
          "content": [
            {
              "type": "h2",
              "en": "Measuring Steepness",
              "zh": "度量倾斜程度"
            },
            {
              "type": "p",
              "en": "The coordinate plane is built from two perpendicular number lines: the horizontal $x$-axis and the vertical $y$-axis, crossing at the origin $(0, 0)$. Every point is named by an ordered pair $(x, y)$ — first how far right or left, then how far up or down. Lines drawn on this plane can be flat, gently tilted, or very steep, and slope is the number that measures exactly how steep.",
              "zh": "坐标平面由两条互相垂直的数轴构成：水平的 $x$ 轴和竖直的 $y$ 轴，它们相交于原点 $(0, 0)$。每个点用有序数对 $(x, y)$ 表示——先看向右或向左多远，再看向上或向下多远。画在坐标平面上的直线可以平缓、微斜或陡峭，而斜率正是精确度量倾斜程度的那个数。"
            },
            {
              "type": "p",
              "en": "Slope compares vertical change to horizontal change as you move along a line. We often say slope is \"rise over run\": the rise is how much $y$ changes, and the run is how much $x$ changes.",
              "zh": "斜率比较的是沿直线移动时竖直方向的变化与水平方向的变化。我们常说斜率是\"竖直变化比水平变化\"（rise over run）：rise 指 $y$ 改变了多少，run 指 $x$ 改变了多少。"
            },
            {
              "type": "math",
              "tex": "\\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{\\text{change in } y}{\\text{change in } x}"
            },
            {
              "type": "h3",
              "en": "The Slope Formula",
              "zh": "斜率公式"
            },
            {
              "type": "p",
              "en": "If a line passes through two points $(x_1, y_1)$ and $(x_2, y_2)$, we can compute the slope, usually written $m$, without drawing anything:",
              "zh": "如果一条直线经过两点 $(x_1, y_1)$ 和 $(x_2, y_2)$，我们不用画图就能计算斜率（通常记作 $m$）："
            },
            {
              "type": "math",
              "tex": "m = \\frac{y_2 - y_1}{x_2 - x_1}"
            },
            {
              "type": "p",
              "en": "It does not matter which point you call \"point 1\" — as long as you subtract in the same order on top and bottom. Subtracting $y$-values in one order and $x$-values in the other order is the single most common slope mistake.",
              "zh": "哪个点当作\"第一个点\"并不重要——只要分子和分母按同样的顺序相减即可。$y$ 值按一种顺序相减而 $x$ 值按另一种顺序相减，是求斜率时最常见的错误。"
            },
            {
              "type": "h3",
              "en": "Four Kinds of Slope",
              "zh": "斜率的四种情形"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Positive slope: the line rises from left to right, like walking uphill.",
                  "zh": "正斜率：直线从左到右上升，就像上坡。"
                },
                {
                  "en": "Negative slope: the line falls from left to right, like walking downhill.",
                  "zh": "负斜率：直线从左到右下降，就像下坡。"
                },
                {
                  "en": "Zero slope: a horizontal line — the rise is $0$, so $m = 0$.",
                  "zh": "零斜率：水平直线——竖直变化为 $0$，所以 $m = 0$。"
                },
                {
                  "en": "Undefined slope: a vertical line — the run is $0$, and dividing by $0$ is undefined.",
                  "zh": "斜率不存在（无定义）：竖直直线——水平变化为 $0$，除以 $0$ 没有意义。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: \"zero slope\" and \"undefined slope\" are NOT the same thing. A horizontal line has slope $0$ (a real number); a vertical line has no slope at all. On a test, if your slope calculation gives $\\frac{0}{5}$ that is just $0$, but $\\frac{5}{0}$ means the slope is undefined.",
              "zh": "常见错误：\"斜率为零\"和\"斜率不存在\"不是一回事。水平直线的斜率是 $0$（一个实数）；竖直直线根本没有斜率。考试中，如果算出 $\\frac{0}{5}$，结果就是 $0$；但算出 $\\frac{5}{0}$ 则说明斜率不存在。"
            },
            {
              "type": "h3",
              "en": "Slope as a Rate of Change",
              "zh": "斜率作为变化率"
            },
            {
              "type": "p",
              "en": "In real situations, slope is a rate of change: it tells how much one quantity changes for each unit of another. If a taxi graph shows cost (dollars) versus distance (miles) and the line has slope $2.5$, the ride costs \\$2.50 more for each additional mile. If a tank-draining graph has slope $-3$ (gallons per minute), the tank loses 3 gallons every minute. Always read the units: slope units are $y$-units per $x$-unit.",
              "zh": "在实际情境中，斜率就是变化率：它告诉我们一个量每变化一个单位，另一个量变化多少。如果出租车费用（美元）关于路程（英里）的图象是一条斜率为 $2.5$ 的直线，那么每多行驶一英里，车费就多 2.50 美元。如果水箱排水图象的斜率是 $-3$（加仑每分钟），水箱每分钟流失 3 加仑水。一定要看清单位：斜率的单位是\"$y$ 的单位每 $x$ 的单位\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Slope from two points",
                "zh": "例题 1：由两点求斜率"
              },
              "problem": {
                "en": "Find the slope of the line through $(-2, 7)$ and $(4, -5)$.",
                "zh": "求经过 $(-2, 7)$ 和 $(4, -5)$ 的直线的斜率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Label the points: $(x_1, y_1) = (-2, 7)$ and $(x_2, y_2) = (4, -5)$. Apply the formula, keeping the subtraction order consistent:",
                  "zh": "标记两点：$(x_1, y_1) = (-2, 7)$，$(x_2, y_2) = (4, -5)$。代入公式，注意上下相减顺序一致："
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{-5 - 7}{4 - (-2)} = \\frac{-12}{6} = -2"
                },
                {
                  "type": "p",
                  "en": "The slope is $-2$: the line falls 2 units for every 1 unit it moves right. Check with the other order: $\\frac{7 - (-5)}{-2 - 4} = \\frac{12}{-6} = -2$ — same answer, as it must be.",
                  "zh": "斜率是 $-2$：直线每向右 1 个单位就下降 2 个单位。换一种顺序检验：$\\frac{7 - (-5)}{-2 - 4} = \\frac{12}{-6} = -2$——结果相同，本该如此。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Interpreting slope in context",
                "zh": "例题 2：在情境中解释斜率"
              },
              "problem": {
                "en": "A pool is being drained. After 5 minutes it holds 460 gallons; after 20 minutes it holds 280 gallons. Assuming the water level changes linearly, find the slope and explain what it means.",
                "zh": "一个泳池正在排水。5 分钟后还剩 460 加仑；20 分钟后还剩 280 加仑。假设水量随时间线性变化，求斜率并解释其含义。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The data give two points with time as $x$ and gallons as $y$: $(5, 460)$ and $(20, 280)$.",
                  "zh": "数据给出两个点，横坐标为时间，纵坐标为加仑数：$(5, 460)$ 和 $(20, 280)$。"
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{280 - 460}{20 - 5} = \\frac{-180}{15} = -12"
                },
                {
                  "type": "p",
                  "en": "The slope is $-12$ gallons per minute: the pool loses 12 gallons of water each minute. The negative sign means the amount of water is decreasing.",
                  "zh": "斜率是 $-12$ 加仑每分钟：泳池每分钟流失 12 加仑水。负号表示水量在减少。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A line goes through $(1, 2)$ and $(4, 11)$. What is its slope?",
                "zh": "一条直线经过 $(1, 2)$ 和 $(4, 11)$。它的斜率是多少？"
              },
              "choices": [
                "$\\frac{1}{3}$",
                "$3$",
                "$-3$",
                "$9$"
              ],
              "answer": 1,
              "explanation": {
                "en": "$m = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$. Choosing $\\frac{1}{3}$ comes from putting the change in $x$ on top — remember rise (change in $y$) goes in the numerator.",
                "zh": "$m = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$。选 $\\frac{1}{3}$ 的同学是把 $x$ 的变化放在了分子上——记住竖直变化（$y$ 的变化）才是分子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the slope of the line through $(-3, 4)$ and $(5, 4)$. Give an integer.",
                "zh": "求经过 $(-3, 4)$ 和 $(5, 4)$ 的直线的斜率。请填一个整数。"
              },
              "answer": "0",
              "accept": [
                "0.0",
                "-0"
              ],
              "explanation": {
                "en": "Both points have $y = 4$, so the rise is $4 - 4 = 0$ and $m = \\frac{0}{8} = 0$. The line is horizontal. Zero slope is a real answer — do not confuse it with an undefined slope.",
                "zh": "两点的纵坐标都是 $4$，所以竖直变化为 $4 - 4 = 0$，$m = \\frac{0}{8} = 0$。这条直线是水平的。斜率为零是一个实实在在的答案——不要与斜率不存在混淆。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which line has an undefined slope?",
                "zh": "哪条直线的斜率不存在？"
              },
              "choices": [
                "A line through $(2, 1)$ and $(5, 1)$",
                "A line through $(3, -2)$ and $(3, 6)$",
                "A line through $(0, 0)$ and $(1, 1)$",
                "A line through $(-1, 4)$ and $(2, -5)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The points $(3, -2)$ and $(3, 6)$ have the same $x$-coordinate, so the run is $0$ and the slope $\\frac{8}{0}$ is undefined — a vertical line. The first choice is tempting, but equal $y$-coordinates give a horizontal line with slope $0$, which is defined.",
                "zh": "点 $(3, -2)$ 和 $(3, 6)$ 的横坐标相同，水平变化为 $0$，斜率 $\\frac{8}{0}$ 不存在——这是竖直直线。第一个选项很有迷惑性，但纵坐标相同给出的是斜率为 $0$ 的水平直线，斜率是存在的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A line has slope $-\\frac{3}{4}$. Starting at a point on the line and moving 8 units to the right, how does $y$ change?",
                "zh": "一条直线的斜率是 $-\\frac{3}{4}$。从直线上一点向右移动 8 个单位，$y$ 如何变化？"
              },
              "choices": [
                "It increases by 6",
                "It decreases by 6",
                "It decreases by 3",
                "It increases by 8"
              ],
              "answer": 1,
              "explanation": {
                "en": "Slope $-\\frac{3}{4}$ means $y$ drops 3 for every 4 units right. Moving 8 units right is two \"runs,\" so $y$ drops $2 \\times 3 = 6$. Answer choice \"decreases by 3\" forgets to scale the rise when the run doubles.",
                "zh": "斜率 $-\\frac{3}{4}$ 表示每向右 4 个单位，$y$ 下降 3。向右 8 个单位相当于两个\"run\"，所以 $y$ 下降 $2 \\times 3 = 6$。选\"下降 3\"的同学忘记了当水平变化加倍时竖直变化也要按比例加倍。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ride-share trip costs \\$8.50 for 3 miles and \\$13.50 for 5 miles, with cost changing linearly with distance. What is the cost per mile in dollars? Give a decimal like 2.50.",
                "zh": "某网约车行程 3 英里收费 8.50 美元，5 英里收费 13.50 美元，费用随里程线性变化。每英里的费用是多少美元？请填类似 2.50 的小数。"
              },
              "answer": "2.50",
              "accept": [
                "2.5",
                "$2.50",
                "2.50 dollars"
              ],
              "explanation": {
                "en": "The cost per mile is the slope of the cost-versus-miles line: $m = \\frac{13.50 - 8.50}{5 - 3} = \\frac{5}{2} = 2.50$ dollars per mile. In context, the slope is the rate: dollars per mile.",
                "zh": "每英里费用就是\"费用—里程\"直线的斜率：$m = \\frac{13.50 - 8.50}{5 - 3} = \\frac{5}{2} = 2.50$ 美元每英里。在情境中，斜率就是变化率：美元每英里。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A bathtub drains so that the water volume $V$ (liters) after $t$ minutes lies on a line of slope $-6$. Which statement is correct?",
                "zh": "浴缸排水时，$t$ 分钟后的水量 $V$（升）落在一条斜率为 $-6$ 的直线上。哪个说法正确？"
              },
              "choices": [
                "The tub gains 6 liters each minute",
                "The tub loses 6 liters each minute",
                "The tub empties completely in 6 minutes",
                "The tub started with 6 liters"
              ],
              "answer": 1,
              "explanation": {
                "en": "Slope is the rate of change of $V$ with respect to $t$: $-6$ liters per minute means the volume decreases by 6 liters each minute. \"Empties in 6 minutes\" confuses the rate with the total time, which also depends on the starting amount.",
                "zh": "斜率是 $V$ 关于 $t$ 的变化率：$-6$ 升每分钟表示水量每分钟减少 6 升。\"6 分钟排空\"把变化率和总时间混淆了——总时间还取决于初始水量。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: the line through $(2, k)$ and $(6, 3k)$ has slope $5$. Find $k$. Give an integer.",
                "zh": "挑战题：经过 $(2, k)$ 和 $(6, 3k)$ 的直线斜率为 $5$。求 $k$。请填一个整数。"
              },
              "answer": "10",
              "accept": [
                "10.0"
              ],
              "explanation": {
                "en": "Set up the slope equation: $\\frac{3k - k}{6 - 2} = \\frac{2k}{4} = \\frac{k}{2}$. Setting $\\frac{k}{2} = 5$ gives $k = 10$. Check: the points $(2, 10)$ and $(6, 30)$ give slope $\\frac{20}{4} = 5$. ✓",
                "zh": "列斜率方程：$\\frac{3k - k}{6 - 2} = \\frac{2k}{4} = \\frac{k}{2}$。令 $\\frac{k}{2} = 5$，得 $k = 10$。检验：点 $(2, 10)$ 和 $(6, 30)$ 的斜率为 $\\frac{20}{4} = 5$。✓"
              }
            }
          ]
        },
        {
          "id": "graphing-linear-equations-intercepts",
          "title": "Graphing Lines and Intercepts",
          "titleZh": "直线图象与截距",
          "content": [
            {
              "type": "h2",
              "en": "Where a Line Crosses the Axes",
              "zh": "直线与坐标轴的交点"
            },
            {
              "type": "p",
              "en": "The graph of a linear equation such as $2x + 3y = 12$ is a straight line — every point $(x, y)$ on the line makes the equation true, and every solution of the equation is a point on the line. Two points on that line are special: the places where it crosses the axes, called the intercepts.",
              "zh": "像 $2x + 3y = 12$ 这样的一次方程的图象是一条直线——直线上的每个点 $(x, y)$ 都使方程成立，方程的每个解也都是直线上的一个点。直线上有两个特殊的点：它与坐标轴相交的位置，称为截距（截点）。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "The $x$-intercept is the point where the line crosses the $x$-axis. There, $y = 0$.",
                  "zh": "$x$ 截距是直线与 $x$ 轴的交点。在那里 $y = 0$。"
                },
                {
                  "en": "The $y$-intercept is the point where the line crosses the $y$-axis. There, $x = 0$.",
                  "zh": "$y$ 截距是直线与 $y$ 轴的交点。在那里 $x = 0$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: mixing up which variable to set to zero. To find the $x$-intercept, set $y = 0$ (not $x$!) — you are looking for the point on the $x$-axis, and every point on the $x$-axis has $y = 0$. On a graph, read the intercepts as coordinates: an $x$-intercept of $6$ means the point $(6, 0)$.",
              "zh": "常见错误：搞混该令哪个变量为零。求 $x$ 截距时要令 $y = 0$（不是 $x$！）——因为要找的是 $x$ 轴上的点，而 $x$ 轴上每个点的 $y$ 坐标都是 $0$。在图上读截距时要写成坐标：$x$ 截距为 $6$ 表示点 $(6, 0)$。"
            },
            {
              "type": "h3",
              "en": "Graphing from a Table",
              "zh": "用列表法画图"
            },
            {
              "type": "p",
              "en": "One reliable way to graph any equation is to build a table of values: choose several $x$-values, compute each matching $y$, plot the points, and draw the line through them. For $y = 2x - 1$, choosing $x = -1, 0, 1, 2$ gives the points $(-1, -3)$, $(0, -1)$, $(1, 1)$, and $(2, 3)$. Two points determine a line, but plotting a third is a built-in check: if the three points do not line up, one of them has an arithmetic error.",
              "zh": "画任何方程图象的一个可靠方法是列值表：选取几个 $x$ 值，算出对应的 $y$ 值，描点后连线。对 $y = 2x - 1$，取 $x = -1, 0, 1, 2$ 得到点 $(-1, -3)$、$(0, -1)$、$(1, 1)$ 和 $(2, 3)$。两点确定一条直线，但多描一个第三点相当于自带检验：如果三点不共线，说明某个点算错了。"
            },
            {
              "type": "h3",
              "en": "Graphing Using Intercepts",
              "zh": "用截距法画图"
            },
            {
              "type": "p",
              "en": "For equations in standard form like $2x + 3y = 12$, the two intercepts are usually the fastest points to find, because substituting $0$ kills one term:",
              "zh": "对于 $2x + 3y = 12$ 这样的标准式方程，两个截距通常是最容易求的点，因为代入 $0$ 会消去一项："
            },
            {
              "type": "math",
              "tex": "y = 0: \\quad 2x = 12 \\;\\Rightarrow\\; x = 6 \\qquad\\qquad x = 0: \\quad 3y = 12 \\;\\Rightarrow\\; y = 4"
            },
            {
              "type": "p",
              "en": "Plot $(6, 0)$ and $(0, 4)$ and draw the line through them. In real contexts the intercepts have meanings of their own: if $y$ is the money left on a gift card after buying $x$ snacks, the $y$-intercept is the starting balance and the $x$-intercept is how many snacks empty the card.",
              "zh": "描出 $(6, 0)$ 和 $(0, 4)$，再过这两点画直线。在实际情境中，截距各有含义：如果 $y$ 表示买了 $x$ 份零食后礼品卡上剩余的钱，那么 $y$ 截距是初始余额，$x$ 截距是把卡刷空所需的零食份数。"
            },
            {
              "type": "h3",
              "en": "Horizontal and Vertical Lines",
              "zh": "水平直线与竖直直线"
            },
            {
              "type": "p",
              "en": "An equation with only one variable still graphs as a line in the plane. The equation $y = k$ says \"the $y$-coordinate is always $k$, no matter what $x$ is\" — a horizontal line through $(0, k)$ with slope $0$. The equation $x = k$ says \"the $x$-coordinate is always $k$\" — a vertical line through $(k, 0)$ whose slope is undefined.",
              "zh": "只含一个变量的方程在平面上仍然表示一条直线。方程 $y = k$ 的意思是\"无论 $x$ 取什么值，$y$ 坐标恒为 $k$\"——这是过 $(0, k)$、斜率为 $0$ 的水平直线。方程 $x = k$ 的意思是\"$x$ 坐标恒为 $k$\"——这是过 $(k, 0)$ 的竖直直线，其斜率不存在。"
            },
            {
              "type": "note",
              "en": "Test tip: students often reverse these. Remember: $y = 3$ contains points like $(0, 3), (1, 3), (-5, 3)$ — the $x$ can be anything, so the line runs horizontally. $x = 3$ contains $(3, 0), (3, 1), (3, -5)$ — it runs vertically. Say the points out loud before you draw.",
              "zh": "考试提示：学生常把两者弄反。记住：$y = 3$ 包含 $(0, 3)$、$(1, 3)$、$(-5, 3)$ 这样的点——$x$ 可以任取，所以直线是水平的。$x = 3$ 包含 $(3, 0)$、$(3, 1)$、$(3, -5)$——直线是竖直的。画图前先把几个点念出来。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Graphing with intercepts",
                "zh": "例题 1：用截距画图"
              },
              "problem": {
                "en": "Find the intercepts of $4x - 5y = 20$ and describe how to graph the line.",
                "zh": "求 $4x - 5y = 20$ 的两个截距，并说明如何画出这条直线。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For the $x$-intercept, set $y = 0$: $4x = 20$, so $x = 5$. The line crosses the $x$-axis at $(5, 0)$.",
                  "zh": "求 $x$ 截距，令 $y = 0$：$4x = 20$，得 $x = 5$。直线与 $x$ 轴交于 $(5, 0)$。"
                },
                {
                  "type": "p",
                  "en": "For the $y$-intercept, set $x = 0$: $-5y = 20$, so $y = -4$. The line crosses the $y$-axis at $(0, -4)$.",
                  "zh": "求 $y$ 截距，令 $x = 0$：$-5y = 20$，得 $y = -4$。直线与 $y$ 轴交于 $(0, -4)$。"
                },
                {
                  "type": "p",
                  "en": "Plot $(5, 0)$ and $(0, -4)$ and draw the straight line through them. As a check, the point $(10, 4)$ should also satisfy the equation: $4(10) - 5(4) = 40 - 20 = 20$. ✓",
                  "zh": "描出 $(5, 0)$ 和 $(0, -4)$，过这两点画直线。检验：点 $(10, 4)$ 也应满足方程：$4(10) - 5(4) = 40 - 20 = 20$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Intercepts in context",
                "zh": "例题 2：截距的实际意义"
              },
              "problem": {
                "en": "A candle burns so that its height in centimeters after $t$ hours is $h = 18 - 2t$. Find both intercepts and explain what each means.",
                "zh": "一支蜡烛燃烧 $t$ 小时后的高度（厘米）为 $h = 18 - 2t$。求两个截距并解释各自的含义。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The $h$-intercept (vertical intercept) is found by setting $t = 0$: $h = 18$. This is the starting height — the candle began 18 cm tall.",
                  "zh": "令 $t = 0$ 求纵截距：$h = 18$。这是初始高度——蜡烛一开始高 18 厘米。"
                },
                {
                  "type": "p",
                  "en": "The $t$-intercept (horizontal intercept) is found by setting $h = 0$:",
                  "zh": "令 $h = 0$ 求横截距："
                },
                {
                  "type": "math",
                  "tex": "0 = 18 - 2t \\;\\Rightarrow\\; 2t = 18 \\;\\Rightarrow\\; t = 9"
                },
                {
                  "type": "p",
                  "en": "The candle burns out after 9 hours. Notice how each intercept answers a natural question: \"How tall was it at the start?\" and \"When is it gone?\"",
                  "zh": "蜡烛在 9 小时后燃尽。注意每个截距都回答了一个自然的问题：\"开始时有多高？\"和\"什么时候烧完？\""
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the $x$-intercept of the line $3x + 2y = 18$?",
                "zh": "直线 $3x + 2y = 18$ 的 $x$ 截距是什么？"
              },
              "choices": [
                "$(0, 9)$",
                "$(9, 0)$",
                "$(6, 0)$",
                "$(0, 6)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Set $y = 0$: $3x = 18$, so $x = 6$, giving the point $(6, 0)$. The choice $(0, 9)$ is the $y$-intercept (setting $x = 0$ gives $2y = 18$, $y = 9$) — a tempting mix-up of which variable to zero out.",
                "zh": "令 $y = 0$：$3x = 18$，得 $x = 6$，即点 $(6, 0)$。选项 $(0, 9)$ 是 $y$ 截距（令 $x = 0$ 得 $2y = 18$，$y = 9$）——这是搞混了该令哪个变量为零的典型陷阱。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the $y$-intercept of the line $5x - 4y = 24$. Give your answer as a coordinate like (2,5).",
                "zh": "求直线 $5x - 4y = 24$ 的 $y$ 截距。请以坐标形式作答，如 (2,5)。"
              },
              "answer": "(0,-6)",
              "accept": [
                "(0, -6)",
                "0,-6",
                "(0,-6.0)"
              ],
              "explanation": {
                "en": "Set $x = 0$: $-4y = 24$, so $y = -6$. The $y$-intercept is the point $(0, -6)$. Watch the sign — dividing $24$ by $-4$ gives a negative answer.",
                "zh": "令 $x = 0$：$-4y = 24$，得 $y = -6$。$y$ 截距是点 $(0, -6)$。注意符号——$24$ 除以 $-4$ 结果是负数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which is a correct table of values for $y = -2x + 5$?",
                "zh": "哪一个是 $y = -2x + 5$ 的正确取值表？"
              },
              "choices": [
                "$(0, 5), (1, 3), (2, 1)$",
                "$(0, 5), (1, 7), (2, 9)$",
                "$(0, -2), (1, 3), (2, 8)$",
                "$(5, 0), (3, 1), (1, 2)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Substitute each $x$: $y = -2(0) + 5 = 5$, $y = -2(1) + 5 = 3$, $y = -2(2) + 5 = 1$. The second choice uses slope $+2$ instead of $-2$; the last choice swaps the roles of $x$ and $y$.",
                "zh": "逐个代入 $x$：$y = -2(0) + 5 = 5$，$y = -2(1) + 5 = 3$，$y = -2(2) + 5 = 1$。第二个选项把斜率 $-2$ 用成了 $+2$；最后一个选项把 $x$ 和 $y$ 的位置弄反了。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement about the line $x = -3$ is true?",
                "zh": "关于直线 $x = -3$ 的说法哪个正确？"
              },
              "choices": [
                "It is horizontal with slope $0$",
                "It passes through $(0, -3)$",
                "It is vertical and its slope is undefined",
                "It is vertical with slope $-3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Every point on $x = -3$ has $x$-coordinate $-3$, such as $(-3, 0)$ and $(-3, 5)$, so the line is vertical, and vertical lines have undefined slope. The point $(0, -3)$ lies on the line $y = -3$, not $x = -3$ — the classic reversal.",
                "zh": "$x = -3$ 上每个点的横坐标都是 $-3$，例如 $(-3, 0)$ 和 $(-3, 5)$，所以它是竖直直线，而竖直直线的斜率不存在。点 $(0, -3)$ 在直线 $y = -3$ 上，而不在 $x = -3$ 上——这是经典的混淆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What is the slope of the line $y = 7$? Give an integer.",
                "zh": "直线 $y = 7$ 的斜率是多少？请填一个整数。"
              },
              "answer": "0",
              "accept": [
                "0.0",
                "-0"
              ],
              "explanation": {
                "en": "$y = 7$ is a horizontal line through points like $(0, 7)$ and $(4, 7)$. The rise between any two of its points is $0$, so the slope is $0$. Only vertical lines ($x = k$) have undefined slope.",
                "zh": "$y = 7$ 是经过 $(0, 7)$、$(4, 7)$ 等点的水平直线。任意两点间的竖直变化都是 $0$，所以斜率是 $0$。只有竖直直线（$x = k$）的斜率才不存在。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Malia has \\$60 on a bus card, and each ride costs \\$2.50, so her balance is $y = 60 - 2.5x$ after $x$ rides. What does the $x$-intercept represent?",
                "zh": "Malia 的公交卡里有 60 美元，每次乘车花费 2.50 美元，乘坐 $x$ 次后余额为 $y = 60 - 2.5x$。$x$ 截距表示什么？"
              },
              "choices": [
                "Her starting balance of \\$60",
                "The cost of one ride",
                "The number of rides that uses up the whole card: 24",
                "The number of rides she takes per week"
              ],
              "answer": 2,
              "explanation": {
                "en": "The $x$-intercept is where $y = 0$ — where the balance runs out: $0 = 60 - 2.5x$ gives $x = 24$ rides. The starting balance \\$60 is the $y$-intercept, not the $x$-intercept, which makes the first choice a tempting mix-up.",
                "zh": "$x$ 截距是 $y = 0$ 的位置——即余额用完的时刻：$0 = 60 - 2.5x$ 解得 $x = 24$ 次。初始余额 60 美元是 $y$ 截距而不是 $x$ 截距，所以第一个选项很有迷惑性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: the line $ax + 3y = 12$ has $x$-intercept $(2, 0)$. Find $a$. Give an integer.",
                "zh": "挑战题：直线 $ax + 3y = 12$ 的 $x$ 截距为 $(2, 0)$。求 $a$。请填一个整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "The $x$-intercept $(2, 0)$ must satisfy the equation: $a(2) + 3(0) = 12$, so $2a = 12$ and $a = 6$. Check: $6x + 3y = 12$ with $y = 0$ gives $x = 2$. ✓ Any point named as an intercept is still just a point on the line — plug it in.",
                "zh": "$x$ 截距 $(2, 0)$ 必须满足方程：$a(2) + 3(0) = 12$，即 $2a = 12$，$a = 6$。检验：$6x + 3y = 12$ 中令 $y = 0$ 得 $x = 2$。✓ 截距说到底也只是直线上的一个点——代入即可。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-5-forms-of-linear-equations",
      "title": "Unit 5: Forms of Linear Equations",
      "titleZh": "第五单元：直线方程的形式",
      "lessons": [
        {
          "id": "slope-intercept-and-point-slope",
          "title": "Slope-Intercept and Point-Slope Form",
          "titleZh": "斜截式与点斜式",
          "content": [
            {
              "type": "h2",
              "en": "Two Ways to Write a Line",
              "zh": "直线方程的两种写法"
            },
            {
              "type": "p",
              "en": "A line is completely determined by two pieces of information: how steep it is (the slope $m$) and one point it passes through. Different forms of a linear equation package this information in different ways. In this lesson we master the two most useful forms: slope-intercept form and point-slope form.",
              "zh": "一条直线由两条信息完全确定：它有多陡（斜率 $m$）以及它经过的一个点。线性方程的不同形式以不同方式包装这些信息。本课我们将掌握最常用的两种形式：斜截式和点斜式。"
            },
            {
              "type": "h3",
              "en": "Slope-Intercept Form: $y = mx + b$",
              "zh": "斜截式：$y = mx + b$"
            },
            {
              "type": "p",
              "en": "When an equation is solved for $y$, it takes the form:",
              "zh": "当方程关于 $y$ 解出时，它的形式是："
            },
            {
              "type": "math",
              "tex": "y = mx + b"
            },
            {
              "type": "p",
              "en": "Here $m$ is the slope and $b$ is the $y$-intercept — the $y$-coordinate of the point $(0, b)$ where the line crosses the $y$-axis. For example, $y = -2x + 5$ has slope $-2$ and crosses the $y$-axis at $(0, 5)$.",
              "zh": "这里 $m$ 是斜率，$b$ 是 $y$ 轴截距——直线与 $y$ 轴交点 $(0, b)$ 的纵坐标。例如，$y = -2x + 5$ 的斜率是 $-2$，与 $y$ 轴交于 $(0, 5)$。"
            },
            {
              "type": "p",
              "en": "Slope-intercept form makes graphing fast: plot the $y$-intercept first, then use the slope as $\\frac{\\text{rise}}{\\text{run}}$ to find a second point. For $y = \\frac{3}{4}x - 2$, start at $(0, -2)$, then go up 3 and right 4 to reach $(4, 1)$.",
              "zh": "斜截式使画图变得很快：先描出 $y$ 轴截距，再把斜率当作 $\\frac{\\text{上升}}{\\text{水平移动}}$ 找到第二个点。对于 $y = \\frac{3}{4}x - 2$，从 $(0, -2)$ 出发，向上 3、向右 4，到达 $(4, 1)$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Positive slope: the line rises from left to right. Negative slope: it falls.",
                  "zh": "斜率为正：直线从左到右上升。斜率为负：直线下降。"
                },
                {
                  "en": "Slope $0$ gives a horizontal line $y = b$.",
                  "zh": "斜率为 $0$ 得到水平线 $y = b$。"
                },
                {
                  "en": "A vertical line $x = a$ has undefined slope and CANNOT be written in slope-intercept form.",
                  "zh": "竖直线 $x = a$ 的斜率不存在，不能写成斜截式。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: reading the slope before the equation is solved for $y$. In $2y = 6x + 4$, the slope is NOT $6$ — divide both sides by 2 first to get $y = 3x + 2$, so the slope is $3$ and the $y$-intercept is $2$.",
              "zh": "常见错误：在方程尚未关于 $y$ 解出时就去读斜率。在 $2y = 6x + 4$ 中，斜率不是 $6$——先两边除以 2 得 $y = 3x + 2$，斜率是 $3$，$y$ 轴截距是 $2$。"
            },
            {
              "type": "h3",
              "en": "Point-Slope Form: $y - y_1 = m(x - x_1)$",
              "zh": "点斜式：$y - y_1 = m(x - x_1)$"
            },
            {
              "type": "p",
              "en": "Often you know the slope and a point that is NOT the $y$-intercept. Point-slope form is built for exactly this situation. If a line has slope $m$ and passes through $(x_1, y_1)$, then:",
              "zh": "很多时候你知道斜率和一个不在 $y$ 轴上的点。点斜式正是为这种情况设计的。若直线斜率为 $m$ 且经过 $(x_1, y_1)$，则："
            },
            {
              "type": "math",
              "tex": "y - y_1 = m(x - x_1)"
            },
            {
              "type": "p",
              "en": "This form comes straight from the slope formula: any other point $(x, y)$ on the line satisfies $\\frac{y - y_1}{x - x_1} = m$; multiplying both sides by $(x - x_1)$ gives point-slope form. To write it, just plug in — no solving needed. A line through $(4, -1)$ with slope $2$ is $y - (-1) = 2(x - 4)$, that is, $y + 1 = 2(x - 4)$.",
              "zh": "这个形式直接来自斜率公式：直线上任意其他点 $(x, y)$ 满足 $\\frac{y - y_1}{x - x_1} = m$；两边同乘 $(x - x_1)$ 就得到点斜式。写方程时只需代入，无需求解。过 $(4, -1)$、斜率为 $2$ 的直线是 $y - (-1) = 2(x - 4)$，即 $y + 1 = 2(x - 4)$。"
            },
            {
              "type": "note",
              "en": "Watch the signs! The form subtracts the coordinates, so a point with negative coordinates produces plus signs: through $(-3, 2)$ the equation starts $y - 2 = m(x + 3)$. Writing $x - 3$ here is one of the most common test errors.",
              "zh": "注意符号！点斜式中减去的是点的坐标，所以负坐标会变成加号：过 $(-3, 2)$ 的方程应写成 $y - 2 = m(x + 3)$。在这里写成 $x - 3$ 是考试中最常见的错误之一。"
            },
            {
              "type": "h3",
              "en": "From Two Points, and Converting Between Forms",
              "zh": "由两点求方程与形式互化"
            },
            {
              "type": "p",
              "en": "Given two points, first compute the slope with $m = \\frac{y_2 - y_1}{x_2 - x_1}$, then use either point in point-slope form. To convert point-slope form to slope-intercept form, distribute the slope and solve for $y$. Both forms describe the same line — they are just different outfits for the same equation.",
              "zh": "已知两点时，先用 $m = \\frac{y_2 - y_1}{x_2 - x_1}$ 求斜率，再任取一点代入点斜式。要把点斜式化为斜截式，先把斜率乘进括号，再解出 $y$。两种形式描述的是同一条直线——只是同一个方程的不同\"外衣\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Writing an equation from two points",
                "zh": "例题 1：由两点写出直线方程"
              },
              "problem": {
                "en": "Write the equation of the line through $(2, 7)$ and $(6, -1)$ in slope-intercept form.",
                "zh": "求经过 $(2, 7)$ 和 $(6, -1)$ 的直线方程，用斜截式表示。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1: Find the slope.",
                  "zh": "第一步：求斜率。"
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{-1 - 7}{6 - 2} = \\frac{-8}{4} = -2"
                },
                {
                  "type": "p",
                  "en": "Step 2: Use point-slope form with the point $(2, 7)$:",
                  "zh": "第二步：用点 $(2, 7)$ 代入点斜式："
                },
                {
                  "type": "math",
                  "tex": "y - 7 = -2(x - 2)"
                },
                {
                  "type": "p",
                  "en": "Step 3: Distribute and solve for $y$: $y - 7 = -2x + 4$, so $y = -2x + 11$. Check with the other point: $-2(6) + 11 = -1$. ✓",
                  "zh": "第三步：展开并解出 $y$：$y - 7 = -2x + 4$，所以 $y = -2x + 11$。用另一点检验：$-2(6) + 11 = -1$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading an equation from a graph",
                "zh": "例题 2：从图象读出方程"
              },
              "problem": {
                "en": "A line crosses the $y$-axis at $(0, -3)$ and passes through $(5, -1)$. Write its equation in slope-intercept form.",
                "zh": "一条直线与 $y$ 轴交于 $(0, -3)$，并经过 $(5, -1)$。写出它的斜截式方程。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The $y$-intercept is given directly: $b = -3$. Find the slope from the two points:",
                  "zh": "$y$ 轴截距直接可得：$b = -3$。再由两点求斜率："
                },
                {
                  "type": "math",
                  "tex": "m = \\frac{-1 - (-3)}{5 - 0} = \\frac{2}{5}"
                },
                {
                  "type": "p",
                  "en": "So the equation is $y = \\frac{2}{5}x - 3$. When the graph clearly shows the $y$-intercept, slope-intercept form is the fastest route — no algebra required.",
                  "zh": "所以方程为 $y = \\frac{2}{5}x - 3$。当图象清楚地显示出 $y$ 轴截距时，斜截式是最快的方法——不需要任何代数运算。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the slope of the line $y = -\\frac{4}{3}x + 6$?",
                "zh": "直线 $y = -\\frac{4}{3}x + 6$ 的斜率是多少？"
              },
              "choices": [
                "$6$",
                "$\\frac{4}{3}$",
                "$-\\frac{4}{3}$",
                "$-\\frac{3}{4}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "In $y = mx + b$, the slope is the coefficient of $x$, including its sign: $-\\frac{4}{3}$. Choosing $6$ confuses the slope with the $y$-intercept, and $-\\frac{3}{4}$ flips the fraction.",
                "zh": "在 $y = mx + b$ 中，斜率是 $x$ 的系数，包括符号：$-\\frac{4}{3}$。选 $6$ 是把斜率和 $y$ 轴截距弄混了，$-\\frac{3}{4}$ 则是把分数颠倒了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A line has the equation $y = 5x - 8$. What is the $y$-coordinate of its $y$-intercept? Give an integer.",
                "zh": "直线方程为 $y = 5x - 8$。它的 $y$ 轴截距的纵坐标是多少？请填一个整数。"
              },
              "answer": "-8",
              "accept": [
                "-8.0"
              ],
              "explanation": {
                "en": "In $y = mx + b$, the constant $b$ is the $y$-intercept: here $b = -8$, so the line crosses the $y$-axis at $(0, -8)$. You can confirm by substituting $x = 0$.",
                "zh": "在 $y = mx + b$ 中，常数 $b$ 就是 $y$ 轴截距：这里 $b = -8$，直线与 $y$ 轴交于 $(0, -8)$。代入 $x = 0$ 即可验证。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation represents a line with slope $-3$ that passes through the point $(-2, 5)$?",
                "zh": "下列哪个方程表示斜率为 $-3$ 且经过点 $(-2, 5)$ 的直线？"
              },
              "choices": [
                "$y - 5 = -3(x - 2)$",
                "$y + 5 = -3(x - 2)$",
                "$y - 5 = -3(x + 2)$",
                "$y + 2 = -3(x - 5)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Point-slope form is $y - y_1 = m(x - x_1)$ with $(x_1, y_1) = (-2, 5)$: $y - 5 = -3(x - (-2)) = -3(x + 2)$. The trap answer $y - 5 = -3(x - 2)$ forgets that subtracting $-2$ produces a plus sign.",
                "zh": "点斜式为 $y - y_1 = m(x - x_1)$，其中 $(x_1, y_1) = (-2, 5)$：$y - 5 = -3(x - (-2)) = -3(x + 2)$。陷阱选项 $y - 5 = -3(x - 2)$ 忘记了减去 $-2$ 会变成加号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the slope of the line through $(1, -4)$ and $(5, 6)$. Give an integer or a simple fraction like 3/4.",
                "zh": "求经过 $(1, -4)$ 和 $(5, 6)$ 的直线的斜率。请填一个整数或简单分数（如 3/4）。"
              },
              "answer": "5/2",
              "accept": [
                "2.5"
              ],
              "explanation": {
                "en": "$m = \\frac{6 - (-4)}{5 - 1} = \\frac{10}{4} = \\frac{5}{2}$. Be careful to subtract the coordinates in the same order in the numerator and the denominator, and remember that subtracting $-4$ gives $+4$.",
                "zh": "$m = \\frac{6 - (-4)}{5 - 1} = \\frac{10}{4} = \\frac{5}{2}$。分子和分母必须按相同顺序相减，并注意减去 $-4$ 等于加 $4$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The equation $y + 1 = \\frac{1}{2}(x - 6)$ is rewritten in slope-intercept form. What is the result?",
                "zh": "把方程 $y + 1 = \\frac{1}{2}(x - 6)$ 化为斜截式，结果是什么？"
              },
              "choices": [
                "$y = \\frac{1}{2}x - 4$",
                "$y = \\frac{1}{2}x - 2$",
                "$y = \\frac{1}{2}x + 2$",
                "$y = \\frac{1}{2}x - 7$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Distribute: $y + 1 = \\frac{1}{2}x - 3$. Then subtract 1 from both sides: $y = \\frac{1}{2}x - 4$. The tempting answer $y = \\frac{1}{2}x - 2$ comes from adding 1 instead of subtracting it.",
                "zh": "先展开：$y + 1 = \\frac{1}{2}x - 3$。再两边减 1：$y = \\frac{1}{2}x - 4$。诱人的选项 $y = \\frac{1}{2}x - 2$ 是错误地加 1 而不是减 1 得到的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A gym charges a one-time sign-up fee plus a fixed monthly rate. After 3 months, a member has paid \\$95 in total; after 7 months, \\$175 in total. What is the monthly rate?",
                "zh": "某健身房收取一次性入会费和固定月费。某会员 3 个月后共付了 95 美元，7 个月后共付了 175 美元。月费是多少？"
              },
              "choices": [
                "$\\$15$",
                "$\\$25$",
                "$\\$20$",
                "$\\$35$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The total cost is linear in the number of months, and the monthly rate is the slope: $m = \\frac{175 - 95}{7 - 3} = \\frac{80}{4} = 20$ dollars per month. (The sign-up fee is the $y$-intercept: $95 - 3(20) = 35$ — that is the trap answer.)",
                "zh": "总费用是月数的线性函数，月费就是斜率：$m = \\frac{175 - 95}{7 - 3} = \\frac{80}{4} = 20$ 美元/月。（入会费是 $y$ 轴截距：$95 - 3(20) = 35$——这正是陷阱选项。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: A line passes through $(-4, 10)$ and $(2, -2)$. Find the coordinates of its $x$-intercept. Give your answer as coordinates like (2,5).",
                "zh": "挑战题：一条直线经过 $(-4, 10)$ 和 $(2, -2)$。求它与 $x$ 轴交点的坐标。请以坐标形式作答，如 (2,5)。"
              },
              "answer": "(1,0)",
              "accept": [
                "(1, 0)"
              ],
              "explanation": {
                "en": "Slope: $m = \\frac{-2 - 10}{2 - (-4)} = \\frac{-12}{6} = -2$. Point-slope with $(2, -2)$: $y + 2 = -2(x - 2)$, so $y = -2x + 2$. The $x$-intercept has $y = 0$: $0 = -2x + 2$ gives $x = 1$, so the intercept is $(1, 0)$. Remember an intercept is a point — write both coordinates.",
                "zh": "斜率：$m = \\frac{-2 - 10}{2 - (-4)} = \\frac{-12}{6} = -2$。用 $(2, -2)$ 代入点斜式：$y + 2 = -2(x - 2)$，即 $y = -2x + 2$。令 $y = 0$：$0 = -2x + 2$，得 $x = 1$，交点为 $(1, 0)$。注意截距对应的是一个点——要写出两个坐标。"
              }
            }
          ]
        },
        {
          "id": "standard-form-and-parallel-perpendicular",
          "title": "Standard Form, Parallel and Perpendicular Lines",
          "titleZh": "一般式与平行垂直直线",
          "content": [
            {
              "type": "h2",
              "en": "A Third Form, and How Lines Relate",
              "zh": "第三种形式与直线间的关系"
            },
            {
              "type": "p",
              "en": "Slope-intercept and point-slope form both display the slope. A third form, standard form, hides the slope but reveals something else: the intercepts. In this lesson we learn when standard form is the convenient choice, how to move among all three forms, and how slopes tell us when two lines are parallel or perpendicular.",
              "zh": "斜截式和点斜式都直接显示斜率。第三种形式——一般式——虽然隐藏了斜率，却揭示了另一样东西：截距。本课我们将学习何时一般式最方便、如何在三种形式之间转换，以及如何用斜率判断两条直线平行或垂直。"
            },
            {
              "type": "h3",
              "en": "Standard Form: $Ax + By = C$",
              "zh": "一般式：$Ax + By = C$"
            },
            {
              "type": "math",
              "tex": "Ax + By = C"
            },
            {
              "type": "p",
              "en": "Here $A$, $B$, and $C$ are integers, usually with $A \\geq 0$ and no common factor. For example, $3x + 4y = 12$. The great shortcut of standard form is finding intercepts: set $y = 0$ to get the $x$-intercept, and $x = 0$ to get the $y$-intercept. For $3x + 4y = 12$: the $x$-intercept is $(4, 0)$ and the $y$-intercept is $(0, 3)$ — two points, and the graph is done.",
              "zh": "这里 $A$、$B$、$C$ 是整数，通常约定 $A \\geq 0$ 且三者没有公因数。例如 $3x + 4y = 12$。一般式的最大捷径是求截距：令 $y = 0$ 得 $x$ 轴截距，令 $x = 0$ 得 $y$ 轴截距。对于 $3x + 4y = 12$：$x$ 轴截距是 $(4, 0)$，$y$ 轴截距是 $(0, 3)$——有了两个点，图象就画好了。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Standard form is convenient for graphing by intercepts and for \"mixture\" word problems like $2x + 5y = 40$ (two prices, one total).",
                  "zh": "一般式适合用截距法画图，也适合\"混合\"应用题，如 $2x + 5y = 40$（两种单价，一个总额）。"
                },
                {
                  "en": "It is the only form that can describe a vertical line: $x = 4$ is $1x + 0y = 4$.",
                  "zh": "它是唯一能表示竖直线的形式：$x = 4$ 即 $1x + 0y = 4$。"
                },
                {
                  "en": "To read the slope, solve for $y$: from $Ax + By = C$ the slope is $-\\frac{A}{B}$ (when $B \\neq 0$).",
                  "zh": "要读出斜率需关于 $y$ 求解：由 $Ax + By = C$ 得斜率为 $-\\frac{A}{B}$（当 $B \\neq 0$ 时）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Converting is routine algebra. From slope-intercept to standard form, move the $x$-term to the left and clear fractions: $y = \\frac{2}{3}x - 4$ becomes $-\\frac{2}{3}x + y = -4$, then multiply by $-3$ to get $2x - 3y = 12$.",
              "zh": "形式转换只是常规代数。从斜截式到一般式：把含 $x$ 的项移到左边并去分母：$y = \\frac{2}{3}x - 4$ 变为 $-\\frac{2}{3}x + y = -4$，再乘 $-3$ 得 $2x - 3y = 12$。"
            },
            {
              "type": "h3",
              "en": "Parallel Lines: Same Slope",
              "zh": "平行线：斜率相等"
            },
            {
              "type": "p",
              "en": "Two distinct non-vertical lines are parallel exactly when they have the same slope (and different $y$-intercepts). The lines $y = 2x + 1$ and $y = 2x - 7$ never meet: they rise at the same rate, always the same vertical distance apart. All vertical lines are parallel to each other.",
              "zh": "两条不同的非竖直直线平行，当且仅当它们斜率相等（且 $y$ 轴截距不同）。直线 $y = 2x + 1$ 与 $y = 2x - 7$ 永不相交：它们以相同的速率上升，竖直距离始终不变。所有竖直线互相平行。"
            },
            {
              "type": "h3",
              "en": "Perpendicular Lines: Negative Reciprocal Slopes",
              "zh": "垂直线：斜率互为负倒数"
            },
            {
              "type": "p",
              "en": "Two non-vertical lines are perpendicular exactly when their slopes are negative reciprocals — flip the fraction and switch the sign. If one slope is $\\frac{3}{4}$, a perpendicular line has slope $-\\frac{4}{3}$. Equivalently, the product of the slopes is $-1$:",
              "zh": "两条非竖直直线垂直，当且仅当它们的斜率互为负倒数——把分数颠倒并改变符号。若一条直线斜率为 $\\frac{3}{4}$，与它垂直的直线斜率为 $-\\frac{4}{3}$。等价地说，两斜率之积为 $-1$："
            },
            {
              "type": "math",
              "tex": "m_1 \\cdot m_2 = -1"
            },
            {
              "type": "p",
              "en": "The exception: a horizontal line (slope $0$) is perpendicular to a vertical line (undefined slope), even though the product rule cannot be applied.",
              "zh": "例外情况：水平线（斜率为 $0$）与竖直线（斜率不存在）互相垂直，尽管乘积法则在此不适用。"
            },
            {
              "type": "note",
              "en": "Common mistake: taking only the opposite sign, or only the reciprocal. Perpendicular to slope $-2$ is $+\\frac{1}{2}$ — you must BOTH flip and switch. Also, a test favorite: $y = 3x + 5$ and $y = 3x - 2$ are parallel, not \"the same line,\" because their $y$-intercepts differ.",
              "zh": "常见错误：只变号或只取倒数。与斜率 $-2$ 垂直的斜率是 $+\\frac{1}{2}$——必须既取倒数又变号。另一个考试高频点：$y = 3x + 5$ 与 $y = 3x - 2$ 是平行线，而不是\"同一条直线\"，因为它们的 $y$ 轴截距不同。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Graphing from standard form by intercepts",
                "zh": "例题 1：用截距法画一般式的图象"
              },
              "problem": {
                "en": "Find the intercepts of $5x - 2y = 10$ and state the slope of the line.",
                "zh": "求 $5x - 2y = 10$ 的两个截距，并求这条直线的斜率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For the $x$-intercept, set $y = 0$: $5x = 10$, so $x = 2$. The point is $(2, 0)$. For the $y$-intercept, set $x = 0$: $-2y = 10$, so $y = -5$. The point is $(0, -5)$.",
                  "zh": "求 $x$ 轴截距：令 $y = 0$，$5x = 10$，$x = 2$，得点 $(2, 0)$。求 $y$ 轴截距：令 $x = 0$，$-2y = 10$，$y = -5$，得点 $(0, -5)$。"
                },
                {
                  "type": "p",
                  "en": "To find the slope, solve for $y$: $-2y = -5x + 10$, so $y = \\frac{5}{2}x - 5$. The slope is $\\frac{5}{2}$. (Shortcut: $m = -\\frac{A}{B} = -\\frac{5}{-2} = \\frac{5}{2}$.)",
                  "zh": "求斜率时关于 $y$ 解方程：$-2y = -5x + 10$，即 $y = \\frac{5}{2}x - 5$，斜率为 $\\frac{5}{2}$。（捷径：$m = -\\frac{A}{B} = -\\frac{5}{-2} = \\frac{5}{2}$。）"
                },
                {
                  "type": "math",
                  "tex": "m = -\\frac{A}{B} = \\frac{5}{2}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A line through a point, perpendicular to a given line",
                "zh": "例题 2：过一点且与已知直线垂直的直线"
              },
              "problem": {
                "en": "Write the equation of the line through $(6, -1)$ that is perpendicular to $y = \\frac{3}{2}x + 4$. Give the answer in slope-intercept form.",
                "zh": "求经过 $(6, -1)$ 且与 $y = \\frac{3}{2}x + 4$ 垂直的直线方程，用斜截式表示。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The given slope is $\\frac{3}{2}$, so the perpendicular slope is its negative reciprocal, $-\\frac{2}{3}$.",
                  "zh": "已知斜率为 $\\frac{3}{2}$，所以垂直方向的斜率是它的负倒数 $-\\frac{2}{3}$。"
                },
                {
                  "type": "math",
                  "tex": "y - (-1) = -\\frac{2}{3}(x - 6)"
                },
                {
                  "type": "p",
                  "en": "Distribute: $y + 1 = -\\frac{2}{3}x + 4$, so $y = -\\frac{2}{3}x + 3$. Check: the slopes multiply to $\\frac{3}{2} \\cdot (-\\frac{2}{3}) = -1$. ✓ And $-\\frac{2}{3}(6) + 3 = -1$, so the line passes through $(6, -1)$. ✓",
                  "zh": "展开：$y + 1 = -\\frac{2}{3}x + 4$，所以 $y = -\\frac{2}{3}x + 3$。检验：两斜率之积 $\\frac{3}{2} \\cdot (-\\frac{2}{3}) = -1$。✓ 且 $-\\frac{2}{3}(6) + 3 = -1$，直线确实经过 $(6, -1)$。✓"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "What is the $x$-coordinate of the $x$-intercept of the line $4x + 3y = 24$? Give an integer.",
                "zh": "直线 $4x + 3y = 24$ 与 $x$ 轴交点的横坐标是多少？请填一个整数。"
              },
              "answer": "6",
              "accept": [
                "6.0"
              ],
              "explanation": {
                "en": "At the $x$-intercept, $y = 0$: $4x = 24$, so $x = 6$. This intercept shortcut is the main reason standard form is convenient for graphing.",
                "zh": "在 $x$ 轴截距处 $y = 0$：$4x = 24$，所以 $x = 6$。这个截距捷径正是一般式便于画图的主要原因。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the slope of the line $2x - 5y = 15$?",
                "zh": "直线 $2x - 5y = 15$ 的斜率是多少？"
              },
              "choices": [
                "$-\\frac{2}{5}$",
                "$2$",
                "$\\frac{2}{5}$",
                "$-3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Solve for $y$: $-5y = -2x + 15$, so $y = \\frac{2}{5}x - 3$. The slope is $\\frac{2}{5}$. Choosing $-\\frac{2}{5}$ forgets that dividing by $-5$ flips the sign of the $x$-term; $-3$ is the $y$-intercept, not the slope.",
                "zh": "关于 $y$ 求解：$-5y = -2x + 15$，即 $y = \\frac{2}{5}x - 3$，斜率为 $\\frac{2}{5}$。选 $-\\frac{2}{5}$ 是忘了除以 $-5$ 会改变 $x$ 项的符号；$-3$ 是 $y$ 轴截距而不是斜率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which line is parallel to $y = -4x + 7$?",
                "zh": "下列哪条直线与 $y = -4x + 7$ 平行？"
              },
              "choices": [
                "$y = 4x + 7$",
                "$y = \\frac{1}{4}x - 2$",
                "$y = -\\frac{1}{4}x + 7$",
                "$y = -4x - 3$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Parallel lines have equal slopes. Only $y = -4x - 3$ also has slope $-4$; the $y$-intercept may differ. The choice $y = \\frac{1}{4}x - 2$ is the negative reciprocal — that would be perpendicular, not parallel.",
                "zh": "平行线斜率相等。只有 $y = -4x - 3$ 的斜率也是 $-4$；$y$ 轴截距可以不同。选项 $y = \\frac{1}{4}x - 2$ 的斜率是负倒数——那是垂直而不是平行。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A line has slope $\\frac{5}{6}$. What is the slope of a line perpendicular to it? Give a fraction like -3/4 or an integer.",
                "zh": "一条直线的斜率为 $\\frac{5}{6}$。与它垂直的直线的斜率是多少？请填一个分数（如 -3/4）或整数。"
              },
              "answer": "-6/5",
              "accept": [
                "-1.2"
              ],
              "explanation": {
                "en": "Perpendicular slopes are negative reciprocals: flip $\\frac{5}{6}$ to $\\frac{6}{5}$ and switch the sign, giving $-\\frac{6}{5}$. Check: $\\frac{5}{6} \\cdot (-\\frac{6}{5}) = -1$.",
                "zh": "垂直线的斜率互为负倒数：把 $\\frac{5}{6}$ 颠倒为 $\\frac{6}{5}$ 并变号，得 $-\\frac{6}{5}$。检验：$\\frac{5}{6} \\cdot (-\\frac{6}{5}) = -1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which equation is $y = \\frac{3}{4}x - 2$ written in standard form with integer coefficients?",
                "zh": "把 $y = \\frac{3}{4}x - 2$ 写成整系数一般式，是下列哪个方程？"
              },
              "choices": [
                "$3x - 4y = 8$",
                "$3x + 4y = -8$",
                "$\\frac{3}{4}x - y = 2$",
                "$4x - 3y = 8$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Multiply both sides by 4: $4y = 3x - 8$, then rearrange: $3x - 4y = 8$. The choice $\\frac{3}{4}x - y = 2$ is a correct equation but not standard form, since standard form requires integer coefficients.",
                "zh": "两边乘 4：$4y = 3x - 8$，移项得 $3x - 4y = 8$。选项 $\\frac{3}{4}x - y = 2$ 虽然是正确的方程，但不是一般式，因为一般式要求整数系数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Tickets to a school play cost \\$3 for students and \\$5 for adults, and one show collected exactly \\$60. If $x$ is the number of student tickets and $y$ the number of adult tickets, which equation models this — and how many adult tickets were sold if no students came?",
                "zh": "学校话剧票价为学生 3 美元、成人 5 美元，某场演出共收入 60 美元。设学生票数为 $x$，成人票数为 $y$，哪个方程符合题意？若没有学生到场，卖出了多少张成人票？"
              },
              "choices": [
                "$3x + 5y = 60$; $20$ adults",
                "$3x + 5y = 60$; $12$ adults",
                "$5x + 3y = 60$; $12$ adults",
                "$3x + 5y = 60$; $15$ adults"
              ],
              "answer": 1,
              "explanation": {
                "en": "Revenue is (price)(count) summed: $3x + 5y = 60$. With no students, $x = 0$, so $5y = 60$ and $y = 12$ — that is the $y$-intercept of the graph. The answer \"20 adults\" mistakenly uses the student price, which actually gives the $x$-intercept.",
                "zh": "收入是各票价乘以数量再求和：$3x + 5y = 60$。没有学生时 $x = 0$，则 $5y = 60$，$y = 12$——这正是图象的 $y$ 轴截距。\"20 张成人票\"错误地用了学生票价，那其实是 $x$ 轴截距。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: The line through $(2, k)$ and $(6, 1)$ is parallel to the line $3x + 2y = 8$. Find $k$. Give an integer.",
                "zh": "挑战题：经过 $(2, k)$ 和 $(6, 1)$ 的直线与直线 $3x + 2y = 8$ 平行。求 $k$。请填一个整数。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "The slope of $3x + 2y = 8$ is $-\\frac{A}{B} = -\\frac{3}{2}$. Parallel means the same slope: $\\frac{1 - k}{6 - 2} = -\\frac{3}{2}$. So $1 - k = 4 \\cdot (-\\frac{3}{2}) = -6$, giving $k = 7$.",
                "zh": "$3x + 2y = 8$ 的斜率为 $-\\frac{A}{B} = -\\frac{3}{2}$。平行即斜率相等：$\\frac{1 - k}{6 - 2} = -\\frac{3}{2}$。所以 $1 - k = 4 \\cdot (-\\frac{3}{2}) = -6$，解得 $k = 7$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-6-systems-of-equations",
      "title": "Unit 6: Systems of Equations",
      "titleZh": "第六单元：方程组",
      "lessons": [
        {
          "id": "solving-systems-graphing-substitution",
          "title": "Solving Systems by Graphing and Substitution",
          "titleZh": "图象法与代入法解方程组",
          "content": [
            {
              "type": "h2",
              "en": "Two Equations, One Answer",
              "zh": "两个方程，一个答案"
            },
            {
              "type": "p",
              "en": "A system of equations is a set of two or more equations that use the same variables. A solution to a system is a pair of values — one for each variable — that makes EVERY equation true at the same time. For a system of two linear equations in $x$ and $y$, we write the solution as an ordered pair $(x, y)$.",
              "zh": "方程组是使用相同变量的两个或多个方程的组合。方程组的解是一组变量的取值——每个变量一个——它能同时使每一个方程都成立。对于含 $x$ 和 $y$ 的二元一次方程组，我们把解写成有序数对 $(x, y)$。"
            },
            {
              "type": "p",
              "en": "There is a beautiful picture behind this idea. Each linear equation graphs as a line, and every point on that line satisfies its equation. So a point that satisfies BOTH equations must lie on both lines — it is the point where the lines cross. Solving a system means finding that intersection point.",
              "zh": "这个概念背后有一幅漂亮的图象。每个一次方程的图象都是一条直线，直线上的每个点都满足对应的方程。因此同时满足两个方程的点必然落在两条直线上——也就是两线相交的那个点。解方程组就是求这个交点。"
            },
            {
              "type": "h3",
              "en": "Solving by Graphing",
              "zh": "图象法解方程组"
            },
            {
              "type": "p",
              "en": "The graphing method turns the picture into a strategy:",
              "zh": "图象法把这幅图象变成一种解题策略："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Graph both equations on the same coordinate plane (slope-intercept form $y = mx + b$ makes this fast).",
                  "zh": "在同一坐标平面上画出两个方程的图象（化成斜截式 $y = mx + b$ 画起来最快）。"
                },
                {
                  "en": "Read the coordinates of the intersection point.",
                  "zh": "读出交点的坐标。"
                },
                {
                  "en": "Check the point in BOTH original equations — a point that works in only one equation is not a solution.",
                  "zh": "把该点代入两个原方程检验——只满足其中一个方程的点不是方程组的解。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: graphing is great for seeing what is going on, but it has limits. If the lines cross at a point like $(\\frac{7}{5}, \\frac{11}{5})$, you cannot read exact fractions off a sketch. When an answer does not land neatly on grid lines, switch to an algebraic method — and always verify by substituting your answer back into both equations.",
              "zh": "考试提示：图象法有助于直观理解，但它有局限。如果两条直线相交于 $(\\frac{7}{5}, \\frac{11}{5})$ 这样的点，你无法从草图上读出精确的分数。当答案不恰好落在格点上时，应改用代数方法——并且一定要把答案代回两个方程验证。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Solving a system by graphing",
                "zh": "例题 1：用图象法解方程组"
              },
              "problem": {
                "en": "Solve the system $y = 2x - 1$ and $y = -x + 5$ by graphing.",
                "zh": "用图象法解方程组 $y = 2x - 1$ 与 $y = -x + 5$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first line has $y$-intercept $-1$ and slope $2$ (up 2, right 1). The second has $y$-intercept $5$ and slope $-1$ (down 1, right 1). Drawing both, the lines appear to cross at $(2, 3)$.",
                  "zh": "第一条直线的 $y$ 轴截距为 $-1$，斜率为 $2$（右移 1 上移 2）。第二条截距为 $5$，斜率为 $-1$（右移 1 下移 1）。画出两条直线后，它们看起来相交于 $(2, 3)$。"
                },
                {
                  "type": "p",
                  "en": "Check $(2, 3)$ in both equations:",
                  "zh": "把 $(2, 3)$ 代入两个方程检验："
                },
                {
                  "type": "math",
                  "tex": "3 = 2(2) - 1 = 3 \\quad \\checkmark \\qquad 3 = -(2) + 5 = 3 \\quad \\checkmark"
                },
                {
                  "type": "p",
                  "en": "Both equations are true, so the solution is $(2, 3)$.",
                  "zh": "两个方程都成立，所以方程组的解是 $(2, 3)$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "The Substitution Method",
              "zh": "代入法"
            },
            {
              "type": "p",
              "en": "Substitution replaces the picture with pure algebra. The key idea: if one equation tells you what $y$ equals, you may swap that expression in for $y$ in the other equation. That leaves one equation with one variable — something you already know how to solve.",
              "zh": "代入法用纯代数代替图象。核心思想是：如果一个方程告诉你 $y$ 等于什么，你就可以把这个式子替换到另一个方程中的 $y$。这样就得到只含一个变量的方程——这是你已经会解的。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Solve one equation for one variable (pick the variable with coefficient $1$ if you can).",
                  "zh": "第一步：从一个方程中解出一个变量（尽量选系数为 $1$ 的变量）。"
                },
                {
                  "en": "Step 2: Substitute that expression into the OTHER equation, using parentheses.",
                  "zh": "第二步：把该表达式代入另一个方程，代入时加上括号。"
                },
                {
                  "en": "Step 3: Solve the resulting one-variable equation.",
                  "zh": "第三步：解所得的一元一次方程。"
                },
                {
                  "en": "Step 4: Back-substitute to find the other variable, then check the pair in both original equations.",
                  "zh": "第四步：把结果回代求出另一个变量，再把这组解代入两个原方程检验。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Solving a system by substitution",
                "zh": "例题 2：用代入法解方程组"
              },
              "problem": {
                "en": "Solve the system $y = 3x - 5$ and $2x + y = 10$.",
                "zh": "解方程组 $y = 3x - 5$ 与 $2x + y = 10$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first equation already gives $y$ in terms of $x$, so substitute $3x - 5$ for $y$ in the second equation:",
                  "zh": "第一个方程已经用 $x$ 表示了 $y$，所以把 $3x - 5$ 代入第二个方程中的 $y$："
                },
                {
                  "type": "math",
                  "tex": "2x + (3x - 5) = 10"
                },
                {
                  "type": "p",
                  "en": "Combine like terms and solve: $5x - 5 = 10$, so $5x = 15$ and $x = 3$.",
                  "zh": "合并同类项并求解：$5x - 5 = 10$，故 $5x = 15$，$x = 3$。"
                },
                {
                  "type": "p",
                  "en": "Back-substitute into $y = 3x - 5$: $y = 3(3) - 5 = 4$. The solution is $(3, 4)$. Check in the second equation: $2(3) + 4 = 10$. It works.",
                  "zh": "回代到 $y = 3x - 5$：$y = 3(3) - 5 = 4$。所以解为 $(3, 4)$。代入第二个方程检验：$2(3) + 4 = 10$，成立。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "How Many Solutions Can a System Have?",
              "zh": "方程组可以有多少个解？"
            },
            {
              "type": "p",
              "en": "Two lines in a plane can cross once, never, or lie on top of each other — so a linear system has exactly one solution, no solution, or infinitely many solutions. You can recognize each case from the graphs or from the algebra.",
              "zh": "平面内的两条直线可能相交一次、永不相交，或完全重合——因此一次方程组恰好有一个解、无解，或有无穷多个解。每种情况都可以从图象或代数运算中识别出来。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "One solution: the lines have different slopes and cross exactly once. The algebra gives one value, like $x = 3$.",
                  "zh": "恰有一个解：两直线斜率不同，恰好相交一次。代数运算得到一个确定的值，如 $x = 3$。"
                },
                {
                  "en": "No solution: the lines are parallel — same slope, different $y$-intercepts. The variables vanish and the algebra leaves a FALSE statement, like $0 = 7$.",
                  "zh": "无解：两直线平行——斜率相同而 $y$ 轴截距不同。运算中变量全部消去，只剩一个错误的等式，如 $0 = 7$。"
                },
                {
                  "en": "Infinitely many solutions: both equations describe the SAME line (one is a multiple of the other). The variables vanish and the algebra leaves a TRUE statement, like $0 = 0$.",
                  "zh": "无穷多解：两个方程表示同一条直线（一个方程是另一个的倍数）。运算中变量全部消去，只剩一个恒成立的等式，如 $0 = 0$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: when substituting an expression, always wrap it in parentheses. Substituting $y = 3x - 5$ into $2x - y = 4$ gives $2x - (3x - 5) = 4$, which becomes $2x - 3x + 5 = 4$. Dropping the parentheses leads to the wrong equation $2x - 3x - 5 = 4$. Also, finding $x$ is only half the job — remember to back-substitute for the other variable.",
              "zh": "常见错误：代入表达式时一定要加括号。把 $y = 3x - 5$ 代入 $2x - y = 4$ 得 $2x - (3x - 5) = 4$，即 $2x - 3x + 5 = 4$。漏掉括号会得到错误的方程 $2x - 3x - 5 = 4$。另外，求出 $x$ 只完成了一半——别忘了回代求出另一个变量。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "The graphs of the two equations in a system intersect at the point $(-1, 6)$. What does this point represent?",
                "zh": "某方程组中两个方程的图象相交于点 $(-1, 6)$。这个点表示什么？"
              },
              "choices": [
                "The $y$-intercept of both lines",
                "A solution of the first equation only",
                "The solution of the system: $x = -1$, $y = 6$ makes both equations true",
                "The slope of the system"
              ],
              "answer": 2,
              "explanation": {
                "en": "The intersection point lies on both lines, so it satisfies both equations at once — that is exactly what a solution of a system means. It is tempting to call it a $y$-intercept, but a $y$-intercept must have $x = 0$, and here $x = -1$.",
                "zh": "交点同时落在两条直线上，因此它同时满足两个方程——这正是方程组的解的含义。有人会误以为它是 $y$ 轴截距，但 $y$ 轴截距必须满足 $x = 0$，而这里 $x = -1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which ordered pair is a solution of the system $x + y = 6$ and $x - y = 2$?",
                "zh": "哪个有序数对是方程组 $x + y = 6$ 与 $x - y = 2$ 的解？"
              },
              "choices": [
                "$(4, 2)$",
                "$(2, 4)$",
                "$(3, 3)$",
                "$(5, 1)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Test each pair in BOTH equations. For $(4, 2)$: $4 + 2 = 6$ and $4 - 2 = 2$, so both hold. The pair $(2, 4)$ is tempting because it also satisfies $x + y = 6$, but $2 - 4 = -2 \\neq 2$, so it fails the second equation.",
                "zh": "把每个数对代入两个方程检验。对 $(4, 2)$：$4 + 2 = 6$ 且 $4 - 2 = 2$，两个方程都成立。$(2, 4)$ 很有迷惑性，因为它也满足 $x + y = 6$，但 $2 - 4 = -2 \\neq 2$，不满足第二个方程。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve the system $y = x + 4$ and $2x + y = 13$ by substitution. Give your answer as a coordinate pair in the form (a,b).",
                "zh": "用代入法解方程组 $y = x + 4$ 与 $2x + y = 13$。请以坐标形式 (a,b) 作答。"
              },
              "answer": "(3,7)",
              "accept": [
                "(3, 7)",
                "3,7"
              ],
              "explanation": {
                "en": "Substitute $x + 4$ for $y$ in the second equation: $2x + (x + 4) = 13$, so $3x = 9$ and $x = 3$. Back-substitute: $y = 3 + 4 = 7$. Check: $2(3) + 7 = 13$. The solution is $(3, 7)$.",
                "zh": "把 $x + 4$ 代入第二个方程中的 $y$：$2x + (x + 4) = 13$，即 $3x = 9$，$x = 3$。回代得 $y = 3 + 4 = 7$。检验：$2(3) + 7 = 13$。所以解为 $(3, 7)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many solutions does the system $y = 2x + 3$ and $y = 2x - 1$ have?",
                "zh": "方程组 $y = 2x + 3$ 与 $y = 2x - 1$ 有多少个解？"
              },
              "choices": [
                "Exactly one",
                "No solution",
                "Infinitely many",
                "Exactly two"
              ],
              "answer": 1,
              "explanation": {
                "en": "Both lines have slope $2$ but different $y$-intercepts ($3$ and $-1$), so they are parallel and never intersect: no solution. Algebraically, setting $2x + 3 = 2x - 1$ gives $3 = -1$, a false statement. \"Infinitely many\" would require the SAME line, not just the same slope.",
                "zh": "两条直线的斜率都是 $2$，但 $y$ 轴截距不同（$3$ 和 $-1$），因此它们平行且永不相交：无解。用代数方法：令 $2x + 3 = 2x - 1$ 得 $3 = -1$，是错误等式。\"无穷多解\"要求两方程是同一条直线，而不仅仅是斜率相同。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve the system $x = 2y - 1$ and $3x + y = 18$. What is the value of $x$? Give an integer.",
                "zh": "解方程组 $x = 2y - 1$ 与 $3x + y = 18$。$x$ 的值是多少？请填一个整数。"
              },
              "answer": "5",
              "explanation": {
                "en": "Substitute $2y - 1$ for $x$: $3(2y - 1) + y = 18$, so $6y - 3 + y = 18$, giving $7y = 21$ and $y = 3$. Then $x = 2(3) - 1 = 5$. A common slip is forgetting to distribute the $3$ to the $-1$.",
                "zh": "把 $2y - 1$ 代入 $x$：$3(2y - 1) + y = 18$，即 $6y - 3 + y = 18$，得 $7y = 21$，$y = 3$。于是 $x = 2(3) - 1 = 5$。常见疏漏是忘记把 $3$ 分配给 $-1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Gym A charges a \\$25 sign-up fee plus \\$10 per month. Gym B charges a \\$5 sign-up fee plus \\$15 per month. Let $y$ be the total cost after $m$ months. Which system models when the two gyms cost the same?",
                "zh": "A 健身房收 25 美元入会费，每月另收 10 美元。B 健身房收 5 美元入会费，每月另收 15 美元。设 $m$ 个月后的总费用为 $y$。哪个方程组可用来求两家健身房费用相同的时间？"
              },
              "choices": [
                "$y = 25m + 10, \\; y = 5m + 15$",
                "$y = 10m - 25, \\; y = 15m - 5$",
                "$y = 35m, \\; y = 20m$",
                "$y = 10m + 25, \\; y = 15m + 5$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The monthly rate multiplies $m$ and the one-time fee is the constant: Gym A is $y = 10m + 25$ and Gym B is $y = 15m + 5$. The first choice is tempting because it uses the same numbers, but it swaps the roles of the fee and the rate. (Solving gives $m = 4$ months.)",
                "zh": "月费乘以 $m$，一次性入会费是常数项：A 健身房为 $y = 10m + 25$，B 健身房为 $y = 15m + 5$。第一个选项数字相同因而具有迷惑性，但它把入会费和月费的位置弄反了。（解方程组可得 $m = 4$ 个月。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: the lines $y = 3x - 2$ and $y = -2x + 5$ intersect at a point that does not land on grid lines. Find the $x$-coordinate of the intersection point. Give a fraction in the form a/b.",
                "zh": "挑战题：直线 $y = 3x - 2$ 与 $y = -2x + 5$ 的交点不落在格点上。求交点的横坐标 $x$。请以分数 a/b 的形式作答。"
              },
              "answer": "7/5",
              "accept": [
                "1.4"
              ],
              "explanation": {
                "en": "At the intersection the $y$-values are equal, so $3x - 2 = -2x + 5$. Adding $2x$ to both sides gives $5x - 2 = 5$, so $5x = 7$ and $x = \\frac{7}{5}$. This is exactly the kind of answer you could never read exactly off a graph — which is why the algebraic methods matter.",
                "zh": "交点处两条直线的 $y$ 值相等，故 $3x - 2 = -2x + 5$。两边加 $2x$ 得 $5x - 2 = 5$，即 $5x = 7$，$x = \\frac{7}{5}$。这种答案正是无法从图象上精确读出的——这也正是需要代数方法的原因。"
              }
            }
          ]
        },
        {
          "id": "elimination-and-system-word-problems",
          "title": "Elimination and System Word Problems",
          "titleZh": "消元法与方程组应用题",
          "content": [
            {
              "type": "h2",
              "en": "Elimination: Making a Variable Disappear",
              "zh": "消元法：让一个变量消失"
            },
            {
              "type": "p",
              "en": "The elimination method solves a system by ADDING the two equations together. Why is that allowed? Each equation says two quantities are equal, and adding equals to equals gives equals. The trick is to arrange things so that one variable cancels when we add — leaving a single equation in a single variable.",
              "zh": "消元法通过把两个方程相加来解方程组。为什么可以这样做？每个方程都表示两个量相等，而\"等量加等量，其和仍相等\"。技巧在于安排好式子，使相加时其中一个变量正好抵消——只剩下一个一元一次方程。"
            },
            {
              "type": "h3",
              "en": "Elimination by Adding",
              "zh": "直接相加消元"
            },
            {
              "type": "p",
              "en": "Elimination works instantly when a variable has opposite coefficients in the two equations. In the system below, the $y$-terms are $+2y$ and $-2y$:",
              "zh": "当某个变量在两个方程中的系数互为相反数时，直接相加即可消元。在下面的方程组中，含 $y$ 的项分别是 $+2y$ 和 $-2y$："
            },
            {
              "type": "math",
              "tex": "\\begin{aligned} 3x + 2y &= 19 \\\\ 5x - 2y &= 5 \\end{aligned}"
            },
            {
              "type": "p",
              "en": "Adding the left sides and the right sides: $8x = 24$, so $x = 3$. Back-substitute into either original equation: $3(3) + 2y = 19$ gives $2y = 10$, so $y = 5$. The solution is $(3, 5)$ — and it checks in both equations.",
              "zh": "左边加左边、右边加右边：$8x = 24$，所以 $x = 3$。回代到任意一个原方程：$3(3) + 2y = 19$ 得 $2y = 10$，故 $y = 5$。解为 $(3, 5)$——代入两个方程都成立。"
            },
            {
              "type": "h3",
              "en": "Multiplying First",
              "zh": "先乘再消"
            },
            {
              "type": "p",
              "en": "Most systems do not come with opposite coefficients ready-made. No problem: multiplying an entire equation by a nonzero number does not change its solutions, so we can manufacture opposites. Multiply one equation (or both) so that one variable gets coefficients like $+3$ and $-3$, then add.",
              "zh": "大多数方程组并不会自带互为相反数的系数。没关系：把整个方程乘以一个非零数不会改变它的解，所以我们可以人为制造相反数。把一个方程（或两个方程）分别乘以适当的数，使某个变量的系数变成 $+3$ 和 $-3$ 之类，再相加。"
            },
            {
              "type": "note",
              "en": "Common mistake: when you multiply an equation, multiply EVERY term — including the constant on the right side. Turning $3x - y = 7$ into $9x - 3y = 7$ (instead of $9x - 3y = 21$) is one of the most frequent errors on systems tests.",
              "zh": "常见错误：给方程乘一个数时，必须乘遍每一项——包括右边的常数。把 $3x - y = 7$ 错写成 $9x - 3y = 7$（而不是 $9x - 3y = 21$）是方程组测验中最常见的错误之一。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Elimination with multiplication",
                "zh": "例题 1：先乘再消元"
              },
              "problem": {
                "en": "Solve the system $2x + 3y = 12$ and $3x - y = 7$.",
                "zh": "解方程组 $2x + 3y = 12$ 与 $3x - y = 7$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "No coefficients are opposites yet. Multiply the second equation by $3$ so the $y$-terms become $+3y$ and $-3y$:",
                  "zh": "目前没有互为相反数的系数。把第二个方程乘以 $3$，使含 $y$ 的项变成 $+3y$ 和 $-3y$："
                },
                {
                  "type": "math",
                  "tex": "\\begin{aligned} 2x + 3y &= 12 \\\\ 9x - 3y &= 21 \\end{aligned}"
                },
                {
                  "type": "p",
                  "en": "Add the equations: $11x = 33$, so $x = 3$. Back-substitute into $3x - y = 7$: $9 - y = 7$, so $y = 2$.",
                  "zh": "两式相加：$11x = 33$，故 $x = 3$。回代到 $3x - y = 7$：$9 - y = 7$，得 $y = 2$。"
                },
                {
                  "type": "p",
                  "en": "The solution is $(3, 2)$. Check in the first equation: $2(3) + 3(2) = 12$. It works.",
                  "zh": "解为 $(3, 2)$。代入第一个方程检验：$2(3) + 3(2) = 12$，成立。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Choosing the Best Method",
              "zh": "选择最合适的方法"
            },
            {
              "type": "p",
              "en": "Graphing, substitution, and elimination all reach the same answer — but one is usually much faster for a given system.",
              "zh": "图象法、代入法和消元法殊途同归——但对具体的方程组，往往有一种方法明显更快。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Graphing: best for estimating or picturing a situation, not for exact fraction answers.",
                  "zh": "图象法：适合估算和直观理解，不适合求精确的分数答案。"
                },
                {
                  "en": "Substitution: best when a variable is already isolated (or has coefficient $1$), like $y = 4x - 7$.",
                  "zh": "代入法：当某个变量已被解出（或系数为 $1$）时最合适，例如 $y = 4x - 7$。"
                },
                {
                  "en": "Elimination: best when both equations are in standard form $Ax + By = C$ with terms lined up.",
                  "zh": "消元法：当两个方程都是标准形式 $Ax + By = C$ 且各项对齐时最合适。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Word Problems: Define, Write, Solve, Check",
              "zh": "应用题：设未知数、列方程、求解、检验"
            },
            {
              "type": "p",
              "en": "Systems shine on real-world problems with two unknown quantities. Use the same reliable workflow every time: (1) define two variables, with units; (2) write two equations — usually one about a COUNT or amount and one about a VALUE or total; (3) solve the system with your best method; (4) check the answer against the original story and answer the question that was actually asked.",
              "zh": "方程组最擅长处理含两个未知量的实际问题。每次都使用同一套可靠的流程：（1）设两个未知数，并注明单位；（2）列两个方程——通常一个关于数量，一个关于价值或总量；（3）用最合适的方法解方程组；（4）把答案放回原题情境中检验，并回答题目真正问的问题。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Ticket problems: (number of tickets) and (money collected) give the two equations.",
                  "zh": "门票问题：由\"票的张数\"和\"收到的钱数\"分别列出两个方程。"
                },
                {
                  "en": "Coin problems: (number of coins) and (total value in cents) — work in cents to avoid decimals.",
                  "zh": "硬币问题：由\"硬币枚数\"和\"总价值（以美分计）\"列方程——用美分可避免小数。"
                },
                {
                  "en": "Mixture problems: (total amount) and (amount of the pure ingredient) in each mix.",
                  "zh": "混合问题：由\"总量\"和\"纯成分的含量\"列方程。"
                },
                {
                  "en": "Two-rate motion: with and against a current or wind, use $d = rt$; the speeds are $b + c$ and $b - c$.",
                  "zh": "双速率行程问题：顺流（顺风）与逆流（逆风）用 $d = rt$；速度分别为 $b + c$ 和 $b - c$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A ticket word problem",
                "zh": "例题 2：门票应用题"
              },
              "problem": {
                "en": "A school play sells 120 tickets and collects \\$825. Adult tickets cost \\$8 and student tickets cost \\$5. How many of each kind were sold?",
                "zh": "学校话剧共售出 120 张票，收入 825 美元。成人票每张 8 美元，学生票每张 5 美元。两种票各售出多少张？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Define variables: let $a$ = number of adult tickets and $s$ = number of student tickets. The count equation is $a + s = 120$; the money equation is $8a + 5s = 825$.",
                  "zh": "设未知数：设 $a$ 为成人票张数，$s$ 为学生票张数。数量方程为 $a + s = 120$；金额方程为 $8a + 5s = 825$。"
                },
                {
                  "type": "p",
                  "en": "Eliminate $s$: multiply the count equation by $-5$ to get $-5a - 5s = -600$, then add it to the money equation:",
                  "zh": "消去 $s$：把数量方程乘以 $-5$ 得 $-5a - 5s = -600$，再与金额方程相加："
                },
                {
                  "type": "math",
                  "tex": "3a = 225 \\quad \\Rightarrow \\quad a = 75"
                },
                {
                  "type": "p",
                  "en": "Back-substitute: $s = 120 - 75 = 45$. Check the money: $8(75) + 5(45) = 600 + 225 = 825$. The school sold 75 adult tickets and 45 student tickets.",
                  "zh": "回代得 $s = 120 - 75 = 45$。检验金额：$8(75) + 5(45) = 600 + 225 = 825$。所以售出成人票 75 张、学生票 45 张。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: after solving, reread the question. If a problem asks \"how many student tickets were sold?\", the answer is $45$ — writing $75$ (the other variable) or the pair $(75, 45)$ without labels can cost points. Always check your pair in BOTH original equations, and make sure the answer is reasonable (a negative number of tickets means something went wrong).",
              "zh": "考试提示：解完后重读题目。如果题目问\"售出多少张学生票\"，答案是 $45$——写成 $75$（另一个未知数）或不加说明的数对 $(75, 45)$ 都可能被扣分。务必把解代入两个原方程检验，并确认答案合理（票数为负说明过程出了错）。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What equation results from ADDING the two equations $4x + 3y = 10$ and $2x - 3y = 8$?",
                "zh": "把方程 $4x + 3y = 10$ 与 $2x - 3y = 8$ 相加，得到什么方程？"
              },
              "choices": [
                "$6x = 18$",
                "$2x = 2$",
                "$6x + 6y = 18$",
                "$8x = 80$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Add matching parts: $4x + 2x = 6x$, $3y + (-3y) = 0$, and $10 + 8 = 18$, giving $6x = 18$. The choice $6x + 6y = 18$ is the classic sign error — it treats $-3y$ as $+3y$ instead of letting the opposites cancel.",
                "zh": "对应部分相加：$4x + 2x = 6x$，$3y + (-3y) = 0$，$10 + 8 = 18$，得 $6x = 18$。选项 $6x + 6y = 18$ 是典型的符号错误——把 $-3y$ 当成了 $+3y$，没有让相反数抵消。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve the system $x + y = 9$ and $x - y = 5$ by elimination. Give your answer as a coordinate pair in the form (a,b).",
                "zh": "用消元法解方程组 $x + y = 9$ 与 $x - y = 5$。请以坐标形式 (a,b) 作答。"
              },
              "answer": "(7,2)",
              "accept": [
                "(7, 2)",
                "7,2"
              ],
              "explanation": {
                "en": "Adding the equations cancels $y$: $2x = 14$, so $x = 7$. Back-substitute: $7 + y = 9$, so $y = 2$. Check the second equation: $7 - 2 = 5$. The solution is $(7, 2)$.",
                "zh": "两式相加消去 $y$：$2x = 14$，故 $x = 7$。回代：$7 + y = 9$，得 $y = 2$。检验第二个方程：$7 - 2 = 5$。解为 $(7, 2)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "To solve the system $2x + y = 11$ and $3x + 4y = 24$, what should you do so that ADDING the two equations eliminates $y$?",
                "zh": "解方程组 $2x + y = 11$ 与 $3x + 4y = 24$ 时，怎样处理才能使两式相加时消去 $y$？"
              },
              "choices": [
                "Multiply the second equation by $-2$",
                "Multiply the first equation by $4$",
                "Multiply the first equation by $-4$",
                "Multiply the second equation by $3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Multiplying the first equation by $-4$ gives $-8x - 4y = -44$; its $-4y$ is the opposite of the $+4y$ in the second equation, so adding cancels $y$ (leaving $-5x = -20$, so $x = 4$, $y = 3$). Multiplying by $+4$ is tempting, but that produces $+4y$ in both equations — adding would give $8y$, not zero.",
                "zh": "把第一个方程乘以 $-4$ 得 $-8x - 4y = -44$；其中的 $-4y$ 与第二个方程中的 $+4y$ 互为相反数，相加即可消去 $y$（得 $-5x = -20$，故 $x = 4$，$y = 3$）。乘以 $+4$ 看似可行，但那样两个方程中都是 $+4y$——相加会得到 $8y$ 而不是零。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve the system $4x + 3y = 1$ and $2x - y = 3$. Give your answer as a coordinate pair in the form (a,b).",
                "zh": "解方程组 $4x + 3y = 1$ 与 $2x - y = 3$。请以坐标形式 (a,b) 作答。"
              },
              "answer": "(1,-1)",
              "accept": [
                "(1, -1)",
                "1,-1"
              ],
              "explanation": {
                "en": "Multiply the second equation by $3$: $6x - 3y = 9$. Add to the first: $10x = 10$, so $x = 1$. Back-substitute: $2(1) - y = 3$, so $y = -1$. Check: $4(1) + 3(-1) = 1$. The solution is $(1, -1)$. Remember to multiply the right side ($3 \\cdot 3 = 9$), not just the left.",
                "zh": "把第二个方程乘以 $3$：$6x - 3y = 9$。与第一式相加：$10x = 10$，故 $x = 1$。回代：$2(1) - y = 3$，得 $y = -1$。检验：$4(1) + 3(-1) = 1$。解为 $(1, -1)$。注意右边也要乘（$3 \\cdot 3 = 9$），不能只乘左边。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Zoe has 18 coins, all nickels (5 cents) and dimes (10 cents), worth \\$1.20 in total. Let $n$ be the number of nickels and $d$ the number of dimes. Which system models this situation?",
                "zh": "Zoe 有 18 枚硬币，全部是 5 美分和 10 美分的硬币，总价值 1.20 美元。设 5 美分硬币有 $n$ 枚，10 美分硬币有 $d$ 枚。哪个方程组符合题意？"
              },
              "choices": [
                "$n + d = 120, \\; 5n + 10d = 18$",
                "$n + d = 18, \\; 5n + 10d = 120$",
                "$n + d = 18, \\; 10n + 5d = 120$",
                "$5n + 10d = 18, \\; n + d = 1.20$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The count equation is $n + d = 18$ coins. Working in cents, the value equation is $5n + 10d = 120$ (since \\$1.20 = 120 cents). The third choice swaps the coin values — a nickel is $5$ cents, so $5$ must multiply $n$. (Solving gives $n = 12$, $d = 6$.)",
                "zh": "数量方程为 $n + d = 18$ 枚。以美分计价，价值方程为 $5n + 10d = 120$（因为 1.20 美元 = 120 美分）。第三个选项把两种硬币的面值弄反了——5 美分硬币应由 $5$ 乘 $n$。（解得 $n = 12$，$d = 6$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which method is most efficient for solving the system $y = 4x - 7$ and $3x + 2y = 8$?",
                "zh": "解方程组 $y = 4x - 7$ 与 $3x + 2y = 8$，哪种方法最高效？"
              },
              "choices": [
                "Graphing, because the intersection can be read exactly from any sketch",
                "Elimination by adding the equations as written",
                "Guess and check with integer points",
                "Substitution, because $y$ is already isolated in the first equation"
              ],
              "answer": 3,
              "explanation": {
                "en": "Since the first equation already gives $y = 4x - 7$, substituting into the second gives $3x + 2(4x - 7) = 8$ in one step, so $11x = 22$ and $x = 2$, $y = 1$. Adding the equations as written eliminates nothing, because no coefficients are opposites — the equations are not even in matching form.",
                "zh": "第一个方程已给出 $y = 4x - 7$，直接代入第二个方程得 $3x + 2(4x - 7) = 8$，一步到位：$11x = 22$，$x = 2$，$y = 1$。按原样把两式相加什么也消不掉，因为没有互为相反数的系数——两个方程的形式甚至不一致。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: a riverboat travels 36 miles downstream (with the current) in 2 hours and makes the 36-mile return trip upstream in 3 hours. Let $b$ be the boat's speed in still water and $c$ the speed of the current, in miles per hour. Find the speed of the current. Give an integer.",
                "zh": "挑战题：一艘游船顺流航行 36 英里用了 2 小时，逆流返回 36 英里用了 3 小时。设船在静水中的速度为 $b$，水流速度为 $c$（单位：英里/小时）。求水流速度。请填一个整数。"
              },
              "answer": "3",
              "explanation": {
                "en": "Using $d = rt$: downstream speed is $\\frac{36}{2} = 18$ mph and upstream speed is $\\frac{36}{3} = 12$ mph. So $b + c = 18$ and $b - c = 12$. Adding gives $2b = 30$, so $b = 15$; then $c = 18 - 15 = 3$ mph. A common mistake is answering $b = 15$ — reread the question: it asks for the current.",
                "zh": "由 $d = rt$：顺流速度为 $\\frac{36}{2} = 18$ 英里/小时，逆流速度为 $\\frac{36}{3} = 12$ 英里/小时。因此 $b + c = 18$，$b - c = 12$。相加得 $2b = 30$，$b = 15$；于是 $c = 18 - 15 = 3$ 英里/小时。常见错误是回答 $b = 15$——重读题目：问的是水流速度。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-7-inequalities-systems-graphs",
      "title": "Unit 7: Inequalities (Systems & Graphs)",
      "titleZh": "第七单元：不等式（图象与不等式组）",
      "lessons": [
        {
          "id": "graphing-two-variable-inequalities",
          "title": "Graphing Linear Inequalities and Systems",
          "titleZh": "二元一次不等式与不等式组的图象",
          "content": [
            {
              "type": "h2",
              "en": "From a Line to a Region",
              "zh": "从一条直线到一个区域"
            },
            {
              "type": "p",
              "en": "The equation $y = 2x + 1$ describes a line — the set of points that make it true. Replace the equals sign with an inequality symbol, as in $y > 2x + 1$, and suddenly infinitely many points on one whole SIDE of the line make it true. The graph of a two-variable linear inequality is a region of the plane called a half-plane, bounded by the line you get from replacing the inequality with $=$.",
              "zh": "方程 $y = 2x + 1$ 描述一条直线——使它成立的所有点的集合。把等号换成不等号，例如 $y > 2x + 1$，直线一整侧的无穷多个点都会使它成立。二元一次不等式的图象是平面上的一个区域，称为半平面，它的边界就是把不等号换成 $=$ 后得到的直线。"
            },
            {
              "type": "h3",
              "en": "Dashed or Solid? Shade Which Side?",
              "zh": "虚线还是实线？往哪边涂色？"
            },
            {
              "type": "p",
              "en": "Graphing an inequality like $y \\leq -\\frac{1}{2}x + 3$ takes three decisions:",
              "zh": "画 $y \\leq -\\frac{1}{2}x + 3$ 这样的不等式图象需要做三个判断："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Draw the boundary line $y = -\\frac{1}{2}x + 3$ using its slope and intercept.",
                  "zh": "利用斜率和截距画出边界直线 $y = -\\frac{1}{2}x + 3$。"
                },
                {
                  "en": "Solid or dashed: use a SOLID line for $\\leq$ or $\\geq$ (points on the line are included) and a DASHED line for $<$ or $>$ (points on the line are excluded).",
                  "zh": "实线或虚线：$\\leq$ 或 $\\geq$ 用实线（边界上的点包含在内），$<$ 或 $>$ 用虚线（边界上的点不包含）。"
                },
                {
                  "en": "Shade the correct side: pick a test point not on the line — $(0, 0)$ is easiest — plug it in, and shade the side containing it if the inequality is true, the other side if false.",
                  "zh": "涂对一侧：选一个不在直线上的检验点——$(0, 0)$ 最方便——代入不等式；若成立，涂含该点的一侧，否则涂另一侧。"
                }
              ]
            },
            {
              "type": "p",
              "en": "For $y \\leq -\\frac{1}{2}x + 3$, testing $(0,0)$ gives $0 \\leq 3$, which is true, so we shade the side containing the origin (below the solid line). When the inequality is already solved for $y$, there is also a shortcut: $y >$ or $y \\geq$ shades ABOVE the line, and $y <$ or $y \\leq$ shades BELOW it.",
              "zh": "对 $y \\leq -\\frac{1}{2}x + 3$，检验 $(0,0)$ 得 $0 \\leq 3$，成立，所以涂含原点的一侧（实线下方）。当不等式已关于 $y$ 解出时，还有一个捷径：$y >$ 或 $y \\geq$ 涂直线上方，$y <$ 或 $y \\leq$ 涂直线下方。"
            },
            {
              "type": "note",
              "en": "Common mistake: the \"shade above for $>$\" shortcut only works when the inequality is solved for $y$ with a POSITIVE coefficient. For $-2y > 6x$, dividing by $-2$ flips the symbol to $y < -3x$. Also, never use a test point that lies ON the boundary line — it tells you nothing.",
              "zh": "常见错误：\"大于就涂上方\"的捷径只在不等式已关于 $y$ 解出且 $y$ 的系数为正时才成立。对 $-2y > 6x$，除以 $-2$ 时不等号要反向，得 $y < -3x$。另外，绝不要选边界直线上的点作检验点——那样得不到任何信息。"
            },
            {
              "type": "h3",
              "en": "Is a Point a Solution?",
              "zh": "某个点是解吗？"
            },
            {
              "type": "p",
              "en": "A point is a solution of an inequality if substituting its coordinates makes the inequality true. Is $(4, 1)$ a solution of $y > 2x - 5$? Substitute: $1 > 2(4) - 5 = 3$? No, $1 > 3$ is false, so $(4, 1)$ is not a solution. For a strict inequality ($<$ or $>$), points exactly on the boundary line are NOT solutions.",
              "zh": "把点的坐标代入不等式，若不等式成立，这个点就是不等式的解。$(4, 1)$ 是 $y > 2x - 5$ 的解吗？代入：$1 > 2(4) - 5 = 3$？不对，$1 > 3$ 不成立，所以 $(4, 1)$ 不是解。对严格不等式（$<$ 或 $>$），恰好落在边界直线上的点不是解。"
            },
            {
              "type": "h3",
              "en": "Systems of Inequalities: the Overlap",
              "zh": "不等式组：重叠区域"
            },
            {
              "type": "p",
              "en": "A system of two inequalities asks for points satisfying BOTH at once. Graph each inequality on the same axes; the solution set is the region where the shadings overlap. A point is a solution of the system only if it makes every inequality true.",
              "zh": "由两个不等式组成的不等式组要求同时满足两个条件的点。在同一坐标系中画出每个不等式的图象；解集就是两块阴影重叠的区域。只有使每个不等式都成立的点才是不等式组的解。"
            },
            {
              "type": "math",
              "tex": "\\begin{cases} y \\geq x - 2 \\\\ y < -2x + 4 \\end{cases}"
            },
            {
              "type": "p",
              "en": "For this system, shade above the solid line $y = x - 2$ and below the dashed line $y = -2x + 4$; the wedge where both shadings appear is the solution region. It is possible for a system to have NO solutions — for instance $y > x + 3$ and $y < x - 1$ shade opposite sides of two parallel lines that never overlap.",
              "zh": "对这个不等式组，在实线 $y = x - 2$ 上方和虚线 $y = -2x + 4$ 下方涂色；两块阴影同时出现的楔形区域就是解集。不等式组也可能无解——例如 $y > x + 3$ 与 $y < x - 1$ 分别涂两条平行线的相反两侧，永不重叠。"
            },
            {
              "type": "h3",
              "en": "Writing Inequalities from Real Constraints",
              "zh": "由实际约束列不等式"
            },
            {
              "type": "p",
              "en": "Real situations produce inequalities because resources are limited. Budget: if snacks cost \\$2 each and drinks \\$3 each with at most \\$24 to spend, then $2x + 3y \\leq 24$. Watch the key phrases: \"at most\" and \"no more than\" mean $\\leq$; \"at least\" means $\\geq$; \"fewer than\" means $<$. Counts of real objects usually also require $x \\geq 0$ and $y \\geq 0$, which restricts the graph to the first quadrant.",
              "zh": "现实情境常产生不等式，因为资源是有限的。预算问题：若零食每份 2 美元、饮料每份 3 美元，最多花 24 美元，则 $2x + 3y \\leq 24$。注意关键词：\"至多\"和\"不超过\"表示 $\\leq$；\"至少\"表示 $\\geq$；\"少于\"表示 $<$。表示实际物品数量时通常还需 $x \\geq 0$ 和 $y \\geq 0$，这把图象限制在第一象限。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Graphing one inequality",
                "zh": "例题 1：画一个不等式的图象"
              },
              "problem": {
                "en": "Describe the graph of $3x - 4y < 12$ and decide whether $(0, 0)$ and $(4, -2)$ are solutions.",
                "zh": "描述 $3x - 4y < 12$ 的图象，并判断 $(0, 0)$ 和 $(4, -2)$ 是否为它的解。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The boundary is $3x - 4y = 12$, a line with intercepts $(4, 0)$ and $(0, -3)$. Because the symbol is $<$ (strict), draw it DASHED.",
                  "zh": "边界是 $3x - 4y = 12$，其截距为 $(4, 0)$ 和 $(0, -3)$。因为符号是 $<$（严格不等），画成虚线。"
                },
                {
                  "type": "p",
                  "en": "Test $(0, 0)$: $3(0) - 4(0) = 0 < 12$ is true, so shade the side containing the origin — and $(0, 0)$ is a solution.",
                  "zh": "检验 $(0, 0)$：$3(0) - 4(0) = 0 < 12$ 成立，所以涂含原点的一侧——$(0, 0)$ 是解。"
                },
                {
                  "type": "p",
                  "en": "Test $(4, -2)$: $3(4) - 4(-2) = 12 + 8 = 20$, and $20 < 12$ is false, so $(4, -2)$ is not a solution. Note the sign care: $-4(-2) = +8$.",
                  "zh": "检验 $(4, -2)$：$3(4) - 4(-2) = 12 + 8 = 20$，而 $20 < 12$ 不成立，所以 $(4, -2)$ 不是解。注意符号：$-4(-2) = +8$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A budget system",
                "zh": "例题 2：预算不等式组"
              },
              "problem": {
                "en": "Maya is buying pizzas at \\$8 each and salads at \\$4 each for a club party. She can spend at most \\$48, and she needs at least 2 pizzas. Write a system of inequalities and give one possible purchase.",
                "zh": "Maya 为社团聚会购买披萨（每个 8 美元）和沙拉（每份 4 美元）。她最多能花 48 美元，且至少需要 2 个披萨。列出不等式组，并给出一种可行的购买方案。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Let $x$ = number of pizzas and $y$ = number of salads. \"At most \\$48\" caps the total cost, and \"at least 2 pizzas\" bounds $x$ from below:",
                  "zh": "设 $x$ 为披萨数，$y$ 为沙拉数。\"最多 48 美元\"限制总花费，\"至少 2 个披萨\"给 $x$ 一个下界："
                },
                {
                  "type": "math",
                  "tex": "\\begin{cases} 8x + 4y \\leq 48 \\\\ x \\geq 2 \\\\ y \\geq 0 \\end{cases}"
                },
                {
                  "type": "p",
                  "en": "The solution region is the overlap: on or below the line $8x + 4y = 48$, on or to the right of $x = 2$, and above the $x$-axis. One possible purchase is $(3, 5)$: check $8(3) + 4(5) = 44 \\leq 48$ and $3 \\geq 2$. ✓",
                  "zh": "解区域是三块的重叠：在直线 $8x + 4y = 48$ 上或下方、在 $x = 2$ 上或右侧、且在 $x$ 轴上方。一种可行方案是 $(3, 5)$：检验 $8(3) + 4(5) = 44 \\leq 48$ 且 $3 \\geq 2$。✓"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "When graphing $y \\geq 3x - 1$, which boundary line and shading are correct?",
                "zh": "画 $y \\geq 3x - 1$ 的图象时，边界线和涂色应当是哪种？"
              },
              "choices": [
                "Dashed line, shade above",
                "Solid line, shade above",
                "Solid line, shade below",
                "Dashed line, shade below"
              ],
              "answer": 1,
              "explanation": {
                "en": "The symbol $\\geq$ includes equality, so the boundary is solid, and since the inequality is solved for $y$ with \"greater than,\" shade above the line. A dashed line would be for the strict inequality $y > 3x - 1$.",
                "zh": "符号 $\\geq$ 包含等号，所以边界是实线；不等式已关于 $y$ 解出且是\"大于\"，故涂直线上方。虚线对应的是严格不等式 $y > 3x - 1$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which point is a solution of $y < -2x + 6$?",
                "zh": "下列哪个点是 $y < -2x + 6$ 的解？"
              },
              "choices": [
                "$(0, 6)$",
                "$(2, 2)$",
                "$(1, 3)$",
                "$(-1, 10)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Test $(1, 3)$: $-2(1) + 6 = 4$ and $3 < 4$ is true. The points $(0, 6)$ and $(2, 2)$ lie exactly ON the boundary line, and a strict inequality excludes the boundary — that is why they are tempting but wrong. For $(-1, 10)$: $10 < 8$ is false.",
                "zh": "检验 $(1, 3)$：$-2(1) + 6 = 4$，$3 < 4$ 成立。点 $(0, 6)$ 和 $(2, 2)$ 恰好在边界直线上，而严格不等式不包含边界——这正是它们诱人但错误的原因。对 $(-1, 10)$：$10 < 8$ 不成立。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Consider the inequality $5x + 2y \\leq 20$. What is the largest integer value of $y$ that makes $(2, y)$ a solution? Give an integer.",
                "zh": "考虑不等式 $5x + 2y \\leq 20$。使 $(2, y)$ 成为解的最大整数 $y$ 是多少？请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "Substitute $x = 2$: $10 + 2y \\leq 20$, so $2y \\leq 10$ and $y \\leq 5$. The largest integer is $y = 5$, and it works because the inequality is $\\leq$, which includes the boundary.",
                "zh": "代入 $x = 2$：$10 + 2y \\leq 20$，即 $2y \\leq 10$，$y \\leq 5$。最大整数是 $y = 5$；由于不等号是 $\\leq$，包含边界，所以取等号也可以。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "After solving $-3y < 6x - 9$ for $y$, which inequality do you graph?",
                "zh": "把 $-3y < 6x - 9$ 关于 $y$ 解出后，应画哪个不等式的图象？"
              },
              "choices": [
                "$y < -2x + 3$",
                "$y > 2x - 3$",
                "$y > -2x + 3$",
                "$y < 2x - 3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Divide both sides by $-3$ and FLIP the inequality symbol: $y > \\frac{6x - 9}{-3} = -2x + 3$. The trap answer $y < -2x + 3$ divides correctly but forgets to reverse the symbol when dividing by a negative.",
                "zh": "两边除以 $-3$ 并将不等号反向：$y > \\frac{6x - 9}{-3} = -2x + 3$。陷阱选项 $y < -2x + 3$ 除法算对了，却忘了除以负数时要把不等号反向。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Is the point $(3, 1)$ a solution of the system $y \\leq x + 1$ and $y > -x + 2$? Answer 1 for yes or 0 for no.",
                "zh": "点 $(3, 1)$ 是不等式组 $y \\leq x + 1$ 与 $y > -x + 2$ 的解吗？是填 1，否填 0。"
              },
              "answer": "1",
              "explanation": {
                "en": "Check both: $1 \\leq 3 + 1 = 4$ is true, and $1 > -3 + 2 = -1$ is true. Since the point satisfies BOTH inequalities, it lies in the overlapping region and is a solution of the system.",
                "zh": "逐一检验：$1 \\leq 3 + 1 = 4$ 成立，$1 > -3 + 2 = -1$ 也成立。这个点同时满足两个不等式，位于重叠区域内，所以是不等式组的解。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A bake sale sells cookies for \\$2 each and brownies for \\$3 each. The club wants to raise AT LEAST \\$30. With $x$ cookies and $y$ brownies sold, which inequality models the goal?",
                "zh": "义卖会上饼干每块 2 美元，布朗尼每块 3 美元。社团希望至少筹到 30 美元。设卖出 $x$ 块饼干和 $y$ 块布朗尼，哪个不等式符合目标？"
              },
              "choices": [
                "$2x + 3y \\leq 30$",
                "$3x + 2y \\geq 30$",
                "$2x + 3y > 30$",
                "$2x + 3y \\geq 30$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Revenue is $2x + 3y$, and \"at least \\$30\" means the revenue can equal or exceed 30: $2x + 3y \\geq 30$. The choice with $>$ wrongly excludes raising exactly \\$30, and $3x + 2y \\geq 30$ swaps the two prices.",
                "zh": "收入为 $2x + 3y$，\"至少 30 美元\"表示收入可以等于或超过 30：$2x + 3y \\geq 30$。带 $>$ 的选项错误地排除了恰好筹到 30 美元的情况，而 $3x + 2y \\geq 30$ 把两个单价弄反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: Tickets cost \\$4 for children and \\$6 for adults. A theater must earn MORE than \\$120 from a show, and it sold exactly 12 adult tickets. What is the minimum number of child tickets it must sell? Give an integer.",
                "zh": "挑战题：儿童票每张 4 美元，成人票每张 6 美元。剧院一场演出的收入必须超过 120 美元，已知恰好卖出 12 张成人票。至少还需卖出多少张儿童票？请填一个整数。"
              },
              "answer": "13",
              "accept": [
                "13.0"
              ],
              "explanation": {
                "en": "The constraint is $4x + 6y > 120$ with $y = 12$: $4x + 72 > 120$, so $4x > 48$ and $x > 12$. Because the inequality is STRICT, $x = 12$ (exactly \\$120) is not enough — the minimum whole number is $x = 13$. Forgetting the strict inequality and answering 12 is the classic error.",
                "zh": "约束为 $4x + 6y > 120$，代入 $y = 12$：$4x + 72 > 120$，即 $4x > 48$，$x > 12$。由于是严格不等式，$x = 12$（恰好 120 美元）不够——最小整数是 $x = 13$。忽略严格不等号而答 12 是典型错误。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-8-functions",
      "title": "Unit 8: Functions",
      "titleZh": "第八单元：函数",
      "lessons": [
        {
          "id": "what-is-a-function",
          "title": "What Is a Function? Notation and Evaluation",
          "titleZh": "什么是函数？记号与求值",
          "content": [
            {
              "type": "h2",
              "en": "A Machine with One Output per Input",
              "zh": "每个输入只有一个输出的机器"
            },
            {
              "type": "p",
              "en": "A relation is any set of input-output pairs. A function is a special relation in which every input has EXACTLY ONE output. Think of a function as a reliable machine: feed in the same input, and you always get the same single result. The set of inputs is the domain; the set of outputs is the range.",
              "zh": "关系是任意一组输入-输出对。函数是一种特殊的关系：每个输入恰好对应一个输出。可以把函数想象成一台可靠的机器：投入相同的输入，总能得到同一个唯一的结果。所有输入组成定义域，所有输出组成值域。"
            },
            {
              "type": "p",
              "en": "The pairs $(1, 4), (2, 5), (3, 4)$ form a function — repeating an OUTPUT is fine. But $(1, 4), (1, 7), (2, 5)$ do not, because the input 1 has two different outputs.",
              "zh": "数对 $(1, 4), (2, 5), (3, 4)$ 构成函数——输出重复没有问题。但 $(1, 4), (1, 7), (2, 5)$ 不是函数，因为输入 1 对应了两个不同的输出。"
            },
            {
              "type": "note",
              "en": "On a graph, use the vertical line test: if any vertical line crosses the graph more than once, some input has two outputs, so the graph is NOT a function. A circle fails the test; any non-vertical line passes.",
              "zh": "在图象上使用垂线检验法：如果某条竖直线与图象相交多于一次，说明某个输入有两个输出，图象就不是函数。圆不能通过检验；任何非竖直的直线都能通过。"
            },
            {
              "type": "h3",
              "en": "Function Notation",
              "zh": "函数记号"
            },
            {
              "type": "p",
              "en": "Instead of writing $y = 2x + 3$, we write $f(x) = 2x + 3$, read \"$f$ of $x$\". The symbol $f(x)$ does NOT mean $f$ times $x$ — it names the output of function $f$ at input $x$. Writing $f(4) = 11$ packs two facts into one statement: the input is 4 and the output is 11, i.e. the point $(4, 11)$ is on the graph.",
              "zh": "我们不写 $y = 2x + 3$，而写 $f(x) = 2x + 3$，读作\"$f$ 作用于 $x$\"。符号 $f(x)$ 并不表示 $f$ 乘以 $x$——它表示函数 $f$ 在输入 $x$ 处的输出。$f(4) = 11$ 一个式子包含两个信息：输入是 4，输出是 11，即点 $(4, 11)$ 在图象上。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Evaluating a function",
                "zh": "例题 1：函数求值"
              },
              "problem": {
                "en": "Given $f(x) = x^2 - 3x + 2$, find $f(-2)$ and $f(0)$.",
                "zh": "已知 $f(x) = x^2 - 3x + 2$，求 $f(-2)$ 和 $f(0)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Replace every $x$ with $-2$, using parentheses:",
                  "zh": "把每个 $x$ 都换成 $-2$，并加括号："
                },
                {
                  "type": "math",
                  "tex": "f(-2) = (-2)^2 - 3(-2) + 2 = 4 + 6 + 2 = 12"
                },
                {
                  "type": "p",
                  "en": "Similarly:",
                  "zh": "同理："
                },
                {
                  "type": "math",
                  "tex": "f(0) = 0^2 - 3(0) + 2 = 2"
                },
                {
                  "type": "p",
                  "en": "So the graph of $f$ passes through $(-2, 12)$ and $(0, 2)$.",
                  "zh": "所以 $f$ 的图象经过点 $(-2, 12)$ 和 $(0, 2)$。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Working backwards",
                "zh": "例题 2：由输出反求输入"
              },
              "problem": {
                "en": "Given $g(x) = 4x - 5$, find the value of $x$ for which $g(x) = 19$.",
                "zh": "已知 $g(x) = 4x - 5$，求使 $g(x) = 19$ 的 $x$ 值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here the OUTPUT is known and the input is not. Set the formula equal to 19 and solve:",
                  "zh": "这里已知的是输出，未知的是输入。令表达式等于 19 并求解："
                },
                {
                  "type": "math",
                  "tex": "4x - 5 = 19 \\quad\\Rightarrow\\quad 4x = 24 \\quad\\Rightarrow\\quad x = 6"
                },
                {
                  "type": "p",
                  "en": "Contrast this with finding $g(19) = 4(19) - 5 = 71$. \"Find $g(19)$\" and \"solve $g(x) = 19$\" are different questions — read carefully.",
                  "zh": "对比：$g(19) = 4(19) - 5 = 71$。\"求 $g(19)$\"和\"解 $g(x) = 19$\"是两个不同的问题——审题要仔细。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Functions in Context",
              "zh": "实际情境中的函数"
            },
            {
              "type": "p",
              "en": "Real situations are full of functions: the cost $C(g)$ of buying $g$ gallons of gas, the height $h(t)$ of a ball $t$ seconds after it is thrown. Naming the function after its meaning ($C$ for cost, $h$ for height) makes your work easier to read.",
              "zh": "现实生活充满函数：购买 $g$ 加仑汽油的费用 $C(g)$，小球抛出 $t$ 秒后的高度 $h(t)$。按含义给函数命名（费用用 $C$，高度用 $h$）能让解题过程更易读。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which set of ordered pairs is a function?",
                "zh": "哪一组有序数对构成函数？"
              },
              "choices": [
                "$(1,2), (2,3), (1,5)$",
                "$(0,1), (1,1), (2,1)$",
                "$(3,4), (3,5), (4,6)$",
                "$(5,0), (5,1), (5,2)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "A function may repeat outputs but never inputs. In choice B every input (0, 1, 2) appears once, even though the output 1 repeats — that is allowed. The others repeat an input with different outputs.",
                "zh": "函数的输出可以重复，输入不能重复。选项 B 中每个输入（0、1、2）只出现一次，输出 1 重复是允许的。其余选项都有同一输入对应不同输出。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $f(x) = 3x + 1$, find $f(5)$. Give your answer as an integer.",
                "zh": "若 $f(x) = 3x + 1$，求 $f(5)$。请以整数作答。"
              },
              "answer": "16",
              "explanation": {
                "en": "Substitute 5 for $x$: $f(5) = 3(5) + 1 = 16$. The notation $f(5)$ asks for the output when the input is 5.",
                "zh": "把 5 代入 $x$：$f(5) = 3(5) + 1 = 16$。记号 $f(5)$ 表示输入为 5 时的输出。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The statement $f(3) = 7$ means the graph of $f$ contains which point?",
                "zh": "$f(3) = 7$ 说明 $f$ 的图象经过哪个点？"
              },
              "choices": [
                "$(7, 3)$",
                "$(3, 7)$",
                "$(3, 3)$",
                "$(7, 7)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "In $f(\\text{input}) = \\text{output}$, the input is the $x$-coordinate and the output is the $y$-coordinate, so the point is $(3, 7)$. Reversing the order is the most common error.",
                "zh": "在 $f(\\text{输入}) = \\text{输出}$ 中，输入是横坐标，输出是纵坐标，所以点是 $(3, 7)$。最常见的错误就是把顺序颠倒。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $g(x) = x^2 - 4x$, find $g(-1)$. Give your answer as an integer.",
                "zh": "若 $g(x) = x^2 - 4x$，求 $g(-1)$。请以整数作答。"
              },
              "answer": "5",
              "explanation": {
                "en": "$g(-1) = (-1)^2 - 4(-1) = 1 + 4 = 5$. Parentheses matter: $(-1)^2 = 1$, and subtracting $4(-1)$ means adding 4.",
                "zh": "$g(-1) = (-1)^2 - 4(-1) = 1 + 4 = 5$。括号很重要：$(-1)^2 = 1$，减去 $4(-1)$ 等于加 4。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A graph fails the vertical line test. What can you conclude?",
                "zh": "某图象未通过垂线检验，可以得出什么结论？"
              },
              "choices": [
                "It is not a relation (它不是关系)",
                "It is not a function (它不是函数)",
                "Its domain is empty (定义域为空)",
                "It is a linear function (它是一次函数)"
              ],
              "answer": 1,
              "explanation": {
                "en": "A vertical line crossing the graph twice finds one input with two outputs, which violates the definition of a function. The graph is still a relation — just not a function.",
                "zh": "竖直线与图象相交两次，说明存在一个输入对应两个输出，违反函数定义。该图象仍是一个关系——只是不是函数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "If $h(x) = 2x - 9$, solve $h(x) = 3$ for $x$. Give your answer as an integer.",
                "zh": "若 $h(x) = 2x - 9$，解方程 $h(x) = 3$，求 $x$。请以整数作答。"
              },
              "answer": "6",
              "explanation": {
                "en": "Set the rule equal to the output: $2x - 9 = 3$, so $2x = 12$ and $x = 6$. This is the reverse of evaluating: we know the output and hunt for the input.",
                "zh": "令函数式等于输出：$2x - 9 = 3$，得 $2x = 12$，$x = 6$。这与求值相反：已知输出，反求输入。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A taxi charges a \\$3 flat fee plus \\$2 per mile: $C(m) = 2m + 3$. How much is a 7-mile ride in dollars? Give an integer.",
                "zh": "出租车起步费 3 美元，每英里 2 美元：$C(m) = 2m + 3$。乘坐 7 英里需多少美元？请以整数作答。"
              },
              "answer": "17",
              "explanation": {
                "en": "$C(7) = 2(7) + 3 = 17$. The input (miles) goes into the formula; the output is the cost. Function notation is just organized substitution.",
                "zh": "$C(7) = 2(7) + 3 = 17$。输入（英里数）代入公式，输出是费用。函数记号本质上就是有条理的代入。"
              }
            }
          ]
        },
        {
          "id": "domain-range-graphs",
          "title": "Domain, Range, and Reading Graphs",
          "titleZh": "定义域、值域与读图",
          "content": [
            {
              "type": "h2",
              "en": "Domain and Range",
              "zh": "定义域与值域"
            },
            {
              "type": "p",
              "en": "The domain of a function is the set of all allowed inputs ($x$-values); the range is the set of all outputs ($y$-values) that actually occur. For a finite list of points, just collect the coordinates: for $(1,2), (3,2), (5,8)$ the domain is $\\{1, 3, 5\\}$ and the range is $\\{2, 8\\}$ — repeated outputs are listed once.",
              "zh": "函数的定义域是所有允许的输入（$x$ 值）的集合；值域是实际出现的所有输出（$y$ 值）的集合。对于有限个点，直接收集坐标即可：对 $(1,2), (3,2), (5,8)$，定义域是 $\\{1, 3, 5\\}$，值域是 $\\{2, 8\\}$——重复的输出只写一次。"
            },
            {
              "type": "h3",
              "en": "Domains from Formulas",
              "zh": "由公式确定定义域"
            },
            {
              "type": "p",
              "en": "When a function is given by a formula, the domain is every real number that does not break the math. In Algebra 1 there are two main dangers: dividing by zero and taking the square root of a negative number. For $f(x) = \\frac{1}{x - 3}$, the domain is all real numbers except $x = 3$. For $g(x) = \\sqrt{x - 2}$, we need $x - 2 \\geq 0$, so the domain is $x \\geq 2$.",
              "zh": "当函数由公式给出时，定义域是所有不会破坏运算的实数。代数一中主要有两个禁忌：除以零和对负数开平方。对 $f(x) = \\frac{1}{x - 3}$，定义域是除 $x = 3$ 外的所有实数。对 $g(x) = \\sqrt{x - 2}$，需要 $x - 2 \\geq 0$，即定义域为 $x \\geq 2$。"
            },
            {
              "type": "note",
              "en": "In word problems, the context also restricts the domain. If $n$ counts people, the domain contains only whole numbers — a graph of the situation should be dots, not a connected line. Ask yourself: which inputs make sense here?",
              "zh": "在应用题中，实际情境也会限制定义域。如果 $n$ 表示人数，定义域只包含非负整数——此时图象应是离散的点，而不是连成的直线。问问自己：哪些输入在此情境中是合理的？"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Domain and range from a graph",
                "zh": "例题 1：从图象读定义域与值域"
              },
              "problem": {
                "en": "A graph is a solid segment from the point $(-2, 1)$ up to the point $(4, 5)$, endpoints included. State the domain and range.",
                "zh": "某函数图象是从点 $(-2, 1)$ 到点 $(4, 5)$ 的一条实线段（含端点）。写出定义域和值域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Domain: shadow the graph onto the $x$-axis. The segment runs from $x = -2$ to $x = 4$:",
                  "zh": "定义域：把图象投影到 $x$ 轴。线段从 $x = -2$ 延伸到 $x = 4$："
                },
                {
                  "type": "math",
                  "tex": "-2 \\leq x \\leq 4"
                },
                {
                  "type": "p",
                  "en": "Range: shadow onto the $y$-axis. The $y$-values run from 1 to 5:",
                  "zh": "值域：投影到 $y$ 轴。$y$ 值从 1 到 5："
                },
                {
                  "type": "math",
                  "tex": "1 \\leq y \\leq 5"
                },
                {
                  "type": "p",
                  "en": "The projection idea works for any graph: domain is its horizontal extent, range its vertical extent.",
                  "zh": "投影的思想适用于任何图象：定义域是其水平范围，值域是其竖直范围。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Domain from a formula",
                "zh": "例题 2：由公式求定义域"
              },
              "problem": {
                "en": "Find the domain of $f(x) = \\frac{x + 1}{2x - 8}$.",
                "zh": "求 $f(x) = \\frac{x + 1}{2x - 8}$ 的定义域。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The only danger is a zero denominator. Set it equal to zero and exclude that input:",
                  "zh": "唯一的风险是分母为零。令分母为零并排除该输入："
                },
                {
                  "type": "math",
                  "tex": "2x - 8 = 0 \\quad\\Rightarrow\\quad x = 4"
                },
                {
                  "type": "p",
                  "en": "Domain: all real numbers except $x = 4$. Note that the numerator being zero is harmless — $f(-1) = 0$ is a perfectly good output.",
                  "zh": "定义域：除 $x = 4$ 外的所有实数。注意分子为零无妨——$f(-1) = 0$ 是完全正常的输出。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Interpreting Graphs",
              "zh": "解读函数图象"
            },
            {
              "type": "p",
              "en": "A graph tells a story. Where it rises (left to right) the function is increasing; where it falls, decreasing. The $y$-intercept is the output at input 0 — often a starting value. Points where the graph crosses the $x$-axis are the zeros of the function, inputs where the output is 0. Learning to translate between the story, the table, the formula, and the graph is the central skill of this unit.",
              "zh": "图象讲述一个故事。从左到右上升的地方函数递增；下降的地方递减。$y$ 轴截距是输入为 0 时的输出——通常是初始值。图象与 $x$ 轴的交点是函数的零点，即输出为 0 的输入。在情境、表格、公式和图象之间自如转换，是本单元的核心能力。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For the function $\\{(2, 3), (4, 3), (6, 9)\\}$, what is the range?",
                "zh": "函数 $\\{(2, 3), (4, 3), (6, 9)\\}$ 的值域是什么？"
              },
              "choices": [
                "$\\{2, 4, 6\\}$",
                "$\\{3, 9\\}$",
                "$\\{3, 3, 9\\}$",
                "$\\{2, 3, 4, 6, 9\\}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The range is the set of outputs ($y$-values): 3, 3, and 9. As a set, the repeated 3 is written once: $\\{3, 9\\}$. The $x$-values form the domain, not the range.",
                "zh": "值域是输出（$y$ 值）的集合：3、3、9。作为集合，重复的 3 只写一次：$\\{3, 9\\}$。$x$ 值组成的是定义域，不是值域。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "What value of $x$ is excluded from the domain of $f(x) = \\frac{5}{x - 7}$? Give an integer.",
                "zh": "$f(x) = \\frac{5}{x - 7}$ 的定义域中排除了哪个 $x$ 值？请以整数作答。"
              },
              "answer": "7",
              "explanation": {
                "en": "Division by zero is undefined, so we need $x - 7 \\neq 0$, i.e. $x \\neq 7$. Every other real number is allowed.",
                "zh": "除以零无意义，所以要求 $x - 7 \\neq 0$，即 $x \\neq 7$。其余所有实数都允许。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the domain of $g(x) = \\sqrt{x + 5}$?",
                "zh": "$g(x) = \\sqrt{x + 5}$ 的定义域是什么？"
              },
              "choices": [
                "$x \\geq -5$",
                "$x > -5$",
                "$x \\geq 5$",
                "All real numbers (全体实数)"
              ],
              "answer": 0,
              "explanation": {
                "en": "The expression under a square root must be non-negative: $x + 5 \\geq 0$, so $x \\geq -5$. The endpoint is included because $\\sqrt{0} = 0$ is defined.",
                "zh": "根号下的式子必须非负：$x + 5 \\geq 0$，即 $x \\geq -5$。端点包含在内，因为 $\\sqrt{0} = 0$ 有意义。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A function graph is a segment from $(0, 2)$ to $(6, 8)$, endpoints included. What is its domain?",
                "zh": "某函数图象是从 $(0, 2)$ 到 $(6, 8)$ 的线段（含端点）。它的定义域是什么？"
              },
              "choices": [
                "$2 \\leq x \\leq 8$",
                "$0 \\leq x \\leq 6$",
                "$0 \\leq x \\leq 8$",
                "$2 \\leq x \\leq 6$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The domain is the horizontal extent — project the segment onto the $x$-axis: from 0 to 6. The interval from 2 to 8 is the vertical extent, which is the range.",
                "zh": "定义域是水平范围——把线段投影到 $x$ 轴：从 0 到 6。从 2 到 8 的区间是竖直范围，那是值域。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The function $f(x) = 2x - 10$ has one zero (where $f(x) = 0$). Find it. Give an integer.",
                "zh": "函数 $f(x) = 2x - 10$ 有一个零点（使 $f(x) = 0$ 的 $x$）。求这个零点。请以整数作答。"
              },
              "answer": "5",
              "explanation": {
                "en": "Set the output to zero: $2x - 10 = 0$, so $x = 5$. Graphically, this is where the line crosses the $x$-axis.",
                "zh": "令输出为零：$2x - 10 = 0$，得 $x = 5$。从图象看，这是直线与 $x$ 轴的交点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A gym charges \\$25 per month for $m$ months. Which is the most reasonable domain for the cost function $C(m) = 25m$?",
                "zh": "健身房每月收费 25 美元，共 $m$ 个月。费用函数 $C(m) = 25m$ 最合理的定义域是什么？"
              },
              "choices": [
                "All real numbers (全体实数)",
                "All integers (全体整数)",
                "Whole numbers $0, 1, 2, \\ldots$ (非负整数)",
                "$m \\leq 0$"
              ],
              "answer": 2,
              "explanation": {
                "en": "You cannot buy a negative or fractional number of months of membership, so only whole-number inputs make sense. Context can shrink a mathematical domain.",
                "zh": "会员月数不可能为负数或分数，所以只有非负整数输入才合理。实际情境会缩小数学上的定义域。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "For $f(x) = x^2$ with domain $-3 \\leq x \\leq 3$, what is the LARGEST value in the range? Give an integer.",
                "zh": "函数 $f(x) = x^2$ 的定义域为 $-3 \\leq x \\leq 3$，其值域中最大的值是多少？请以整数作答。"
              },
              "answer": "9",
              "explanation": {
                "en": "Squaring makes the extreme inputs $\\pm 3$ give the largest output: $(-3)^2 = 3^2 = 9$. The range is $0 \\leq y \\leq 9$ — note the minimum is 0 (at $x = 0$), not $-3$.",
                "zh": "平方使端点输入 $\\pm 3$ 产生最大输出：$(-3)^2 = 3^2 = 9$。值域是 $0 \\leq y \\leq 9$——注意最小值是 0（在 $x = 0$ 处），不是 $-3$。"
              }
            }
          ]
        },
        {
          "id": "function-behavior-and-rate-of-change",
          "title": "Function Behavior and Average Rate of Change",
          "titleZh": "函数的变化趋势与平均变化率",
          "content": [
            {
              "type": "h2",
              "en": "Reading the Story a Graph Tells",
              "zh": "读懂图象讲述的故事"
            },
            {
              "type": "p",
              "en": "A graph of a function is more than a picture — it is a story about how one quantity responds to another. As you scan a graph from left to right, the function may climb, fall, or stay flat, and it may reach high points and low points along the way. Learning to describe this behavior precisely, and to measure how fast it happens, is one of the most useful skills in algebra.",
              "zh": "函数图象不仅仅是一幅图——它讲述了一个量如何随另一个量变化的故事。从左向右看图象时，函数可能上升、下降或保持不变，途中还可能到达高点和低点。学会精确描述这些变化趋势，并度量变化的快慢，是代数中最有用的技能之一。"
            },
            {
              "type": "h3",
              "en": "Increasing, Decreasing, and Constant",
              "zh": "递增、递减与不变"
            },
            {
              "type": "p",
              "en": "Always read a graph from left to right, the direction in which $x$ grows. A function is increasing on an interval if its $y$-values go up as $x$ moves right, decreasing if its $y$-values go down, and constant if the graph is a flat horizontal piece.",
              "zh": "看图象时始终从左向右看，也就是 $x$ 增大的方向。如果 $x$ 向右移动时 $y$ 值上升，函数在该区间上递增；如果 $y$ 值下降，则递减；如果图象是一段水平线，则函数不变。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Increasing: the graph rises, like walking uphill. Example: $f(x) = x^2$ is increasing when $x > 0$.",
                  "zh": "递增：图象上升，就像上坡。例如 $f(x) = x^2$ 在 $x > 0$ 时递增。"
                },
                {
                  "en": "Decreasing: the graph falls, like walking downhill. Example: $f(x) = x^2$ is decreasing when $x < 0$.",
                  "zh": "递减：图象下降，就像下坡。例如 $f(x) = x^2$ 在 $x < 0$ 时递减。"
                },
                {
                  "en": "Constant: the graph is level — the output does not change on that stretch.",
                  "zh": "不变：图象是水平的——在这一段上输出值不发生变化。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: intervals of increase and decrease are always described using $x$-values, never $y$-values. If a graph rises from the point $(1, 3)$ to the point $(5, 9)$, we say it is increasing on the interval from $x = 1$ to $x = 5$ — not \"from 3 to 9.\"",
              "zh": "常见错误：描述递增、递减区间时必须用 $x$ 的取值，而不是 $y$ 的取值。如果图象从点 $(1, 3)$ 上升到点 $(5, 9)$，我们说函数在 $x = 1$ 到 $x = 5$ 的区间上递增——而不是\"从 3 到 9\"。"
            },
            {
              "type": "h3",
              "en": "Maximum and Minimum Points",
              "zh": "最大值点与最小值点"
            },
            {
              "type": "p",
              "en": "A maximum is a point where the graph switches from increasing to decreasing — the top of a hill. A minimum is where it switches from decreasing to increasing — the bottom of a valley. The maximum or minimum value of the function is the $y$-coordinate of that point; the location where it happens is the $x$-coordinate. So if a graph peaks at $(2, 7)$, the maximum value is $7$, and it occurs at $x = 2$.",
              "zh": "最大值点是图象由递增转为递减的地方——山峰的顶端。最小值点是由递减转为递增的地方——山谷的底部。函数的最大值或最小值是该点的 $y$ 坐标；取得该值的位置是 $x$ 坐标。所以若图象在 $(2, 7)$ 处达到峰值，最大值是 $7$，在 $x = 2$ 处取得。"
            },
            {
              "type": "p",
              "en": "Real-world graphs make these ideas concrete: on a graph of a ball's height over time, the maximum is the highest point of the throw; on a graph of temperature during a day, the minimum is the coldest moment.",
              "zh": "现实情境的图象能让这些概念更具体：在小球高度随时间变化的图象上，最大值就是抛出后的最高点；在一天气温变化的图象上，最小值就是最冷的时刻。"
            },
            {
              "type": "h3",
              "en": "Average Rate of Change",
              "zh": "平均变化率"
            },
            {
              "type": "p",
              "en": "Slope measures how fast a line rises or falls — but most graphs are not lines. The average rate of change extends the idea of slope to any function: over the interval from $x = a$ to $x = b$, it is the change in output divided by the change in input.",
              "zh": "斜率衡量一条直线上升或下降的快慢——但大多数图象并不是直线。平均变化率把斜率的概念推广到任意函数：在从 $x = a$ 到 $x = b$ 的区间上，它等于输出的变化量除以输入的变化量。"
            },
            {
              "type": "math",
              "tex": "\\text{average rate of change} = \\frac{f(b) - f(a)}{b - a}"
            },
            {
              "type": "p",
              "en": "Geometrically, this is the slope of the straight line connecting the two points $(a, f(a))$ and $(b, f(b))$ on the graph. In a real-world context it answers the question \"on average, how much did the output change per unit of input?\" — for example, average miles per hour over a trip, or average dollars earned per week.",
              "zh": "从几何上看，它就是连接图象上两点 $(a, f(a))$ 和 $(b, f(b))$ 的直线的斜率。在实际情境中，它回答的问题是\"平均而言，输入每增加一个单位，输出改变了多少？\"——比如一段旅程的平均时速，或每周平均赚多少钱。"
            },
            {
              "type": "note",
              "en": "Test tip: keep the subtraction in the same order on top and bottom. Writing $\\frac{f(b) - f(a)}{a - b}$ flips the sign of your answer. Also remember the sign has meaning: a negative average rate of change means the function decreased overall on that interval.",
              "zh": "考试提示：分子和分母的相减顺序必须一致。写成 $\\frac{f(b) - f(a)}{a - b}$ 会使答案变号。还要记住符号是有意义的：平均变化率为负，说明函数在该区间上整体是下降的。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Average rate of change from an equation",
                "zh": "例题 1：由解析式求平均变化率"
              },
              "problem": {
                "en": "Find the average rate of change of $f(x) = x^2 - 2x$ from $x = 1$ to $x = 4$.",
                "zh": "求 $f(x) = x^2 - 2x$ 从 $x = 1$ 到 $x = 4$ 的平均变化率。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First evaluate the function at both endpoints: $f(4) = 16 - 8 = 8$ and $f(1) = 1 - 2 = -1$.",
                  "zh": "先求出函数在两个端点的值：$f(4) = 16 - 8 = 8$，$f(1) = 1 - 2 = -1$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{f(4) - f(1)}{4 - 1} = \\frac{8 - (-1)}{3} = \\frac{9}{3} = 3"
                },
                {
                  "type": "p",
                  "en": "The average rate of change is $3$: between $x = 1$ and $x = 4$, the outputs rise 3 units for each 1-unit step in $x$, on average. Note the careful handling of $8 - (-1) = 9$ — subtracting a negative is a classic place to slip.",
                  "zh": "平均变化率是 $3$：在 $x = 1$ 与 $x = 4$ 之间，$x$ 每增加 1 个单位，输出平均上升 3 个单位。注意 $8 - (-1) = 9$ 的处理——减去负数是最容易出错的地方。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Comparing functions given in different forms",
                "zh": "例题 2：比较不同形式给出的函数"
              },
              "problem": {
                "en": "Two clubs are raising money. Club A's total is modeled by the equation $A(w) = 40w + 60$, where $w$ is the week number. Club B's totals are given by a table: week 1: \\$95, week 3: \\$185, week 5: \\$275. Which club is raising money at a faster rate?",
                "zh": "两个社团都在筹款。A 社团的总额由解析式 $A(w) = 40w + 60$ 给出，其中 $w$ 是周数。B 社团的总额由表格给出：第 1 周：95 美元，第 3 周：185 美元，第 5 周：275 美元。哪个社团筹款速度更快？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "From the equation, Club A's rate is the coefficient of $w$: \\$40 per week. For Club B, compute the average rate of change from the table:",
                  "zh": "由解析式可知，A 社团的速率就是 $w$ 的系数：每周 40 美元。对 B 社团，用表格计算平均变化率："
                },
                {
                  "type": "math",
                  "tex": "\\frac{185 - 95}{3 - 1} = \\frac{90}{2} = 45"
                },
                {
                  "type": "p",
                  "en": "Checking the next stretch gives the same rate: $\\frac{275 - 185}{5 - 3} = 45$, so Club B grows steadily at \\$45 per week. Since $45 > 40$, Club B is raising money faster — even though we cannot see its equation. To compare functions in different forms, translate each into the same measurement: a rate.",
                  "zh": "再验证下一段，速率相同：$\\frac{275 - 185}{5 - 3} = 45$，所以 B 社团稳定地以每周 45 美元的速度增长。因为 $45 > 40$，B 社团筹款更快——尽管我们看不到它的解析式。比较不同形式的函数时，要把它们转化成同一种度量：变化率。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A function has these values: $f(-2) = 5$, $f(-1) = 2$, $f(0) = 1$, $f(1) = 2$, $f(2) = 5$. Based on the table, on which interval does the function appear to be decreasing?",
                "zh": "某函数的取值如下：$f(-2) = 5$，$f(-1) = 2$，$f(0) = 1$，$f(1) = 2$，$f(2) = 5$。根据表格，函数在哪个区间上呈递减趋势？"
              },
              "choices": [
                "from $x = 0$ to $x = 2$",
                "from $x = -2$ to $x = 0$",
                "from $x = 1$ to $x = 5$",
                "from $x = -1$ to $x = 2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "As $x$ moves from $-2$ to $0$, the outputs fall: $5 \\to 2 \\to 1$. From $x = 0$ to $x = 2$ the outputs rise again, so that interval is increasing. The choice \"from $x = 1$ to $x = 5$\" is tempting because $1$ and $5$ are $y$-values in the table — but intervals must be described with $x$-values.",
                "zh": "当 $x$ 从 $-2$ 到 $0$ 时，输出下降：$5 \\to 2 \\to 1$。从 $x = 0$ 到 $x = 2$ 输出重新上升，所以那是递增区间。\"从 $x = 1$ 到 $x = 5$\"很有迷惑性，因为 $1$ 和 $5$ 是表中的 $y$ 值——但区间必须用 $x$ 值来描述。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the average rate of change of $f(x) = x^2$ from $x = 2$ to $x = 5$. Give your answer as an integer.",
                "zh": "求 $f(x) = x^2$ 从 $x = 2$ 到 $x = 5$ 的平均变化率。请以整数作答。"
              },
              "answer": "7",
              "accept": [
                "7.0"
              ],
              "explanation": {
                "en": "$f(5) = 25$ and $f(2) = 4$, so the average rate of change is $\\frac{25 - 4}{5 - 2} = \\frac{21}{3} = 7$. Even though $f(x) = x^2$ is curved, its average rate over this interval is the slope of the line through $(2, 4)$ and $(5, 25)$.",
                "zh": "$f(5) = 25$，$f(2) = 4$，所以平均变化率是 $\\frac{25 - 4}{5 - 2} = \\frac{21}{3} = 7$。虽然 $f(x) = x^2$ 是曲线，但它在此区间上的平均变化率就是过 $(2, 4)$ 和 $(5, 25)$ 两点直线的斜率。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of a ball's height reaches its highest point at $(3, 45)$, where $x$ is seconds and $y$ is feet. Which statement is correct?",
                "zh": "小球高度的图象在点 $(3, 45)$ 处达到最高，其中 $x$ 表示秒数，$y$ 表示英尺。下列哪个说法正确？"
              },
              "choices": [
                "The maximum value is $3$, occurring at $x = 45$",
                "The ball's maximum height is $48$ feet",
                "The maximum value is $45$ feet, occurring at $x = 3$ seconds",
                "The function is increasing at $x = 3$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The maximum value of a function is the $y$-coordinate of the highest point ($45$ feet), and it occurs at the $x$-coordinate ($3$ seconds). Swapping the roles of the coordinates — reading the maximum as $3$ — is the most common error on questions like this.",
                "zh": "函数的最大值是最高点的 $y$ 坐标（45 英尺），取得最大值的位置是 $x$ 坐标（3 秒）。把两个坐标的角色弄反——误把最大值读成 $3$——是这类题最常见的错误。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A table shows $g(0) = 4$ and $g(6) = 13$. Find the average rate of change of $g$ from $x = 0$ to $x = 6$. Give your answer as a fraction a/b or a decimal.",
                "zh": "表格给出 $g(0) = 4$，$g(6) = 13$。求 $g$ 从 $x = 0$ 到 $x = 6$ 的平均变化率。请以分数 a/b 或小数作答。"
              },
              "answer": "3/2",
              "accept": [
                "1.5",
                "9/6"
              ],
              "explanation": {
                "en": "Average rate of change $= \\frac{g(6) - g(0)}{6 - 0} = \\frac{13 - 4}{6} = \\frac{9}{6} = \\frac{3}{2}$. Only the two endpoint values matter — you do not need to know what the function does in between.",
                "zh": "平均变化率 $= \\frac{g(6) - g(0)}{6 - 0} = \\frac{13 - 4}{6} = \\frac{9}{6} = \\frac{3}{2}$。只有两个端点的值起作用——不需要知道函数在中间是如何变化的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A drone's height $h(t)$, in meters after $t$ seconds, has an average rate of change of $-8$ on the interval from $t = 1$ to $t = 3$. What does this mean?",
                "zh": "无人机的高度 $h(t)$（单位：米，$t$ 为秒数）在 $t = 1$ 到 $t = 3$ 的区间上平均变化率为 $-8$。这表示什么？"
              },
              "choices": [
                "The drone was $8$ meters high at $t = 3$",
                "The drone rose $8$ meters every second",
                "The drone landed after $8$ seconds",
                "On average, the drone descended $8$ meters per second during those 2 seconds"
              ],
              "answer": 3,
              "explanation": {
                "en": "An average rate of change of $-8$ meters per second means the height dropped by 8 meters for each second, on average, between $t = 1$ and $t = 3$. It says nothing about the actual height at any moment — a rate describes change, not position, which is why the first choice is a trap.",
                "zh": "平均变化率为每秒 $-8$ 米，表示在 $t = 1$ 到 $t = 3$ 之间，高度平均每秒下降 8 米。它并不能告诉我们任何时刻的实际高度——变化率描述的是\"变化\"而不是\"位置\"，这正是第一个选项的陷阱所在。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Function $f$ is given by $f(x) = 3x + 2$. Function $g$ is given by a table: $g(0) = 1$, $g(2) = 9$, $g(4) = 17$. Which statement correctly compares their rates of change?",
                "zh": "函数 $f$ 由 $f(x) = 3x + 2$ 给出。函数 $g$ 由表格给出：$g(0) = 1$，$g(2) = 9$，$g(4) = 17$。下列哪个说法正确地比较了它们的变化率？"
              },
              "choices": [
                "$g$ changes faster: its rate is $4$, while $f$'s rate is $3$",
                "$f$ changes faster: its rate is $3$, while $g$'s rate is $2$",
                "They change at the same rate",
                "$g$ changes faster: its rate is $8$, while $f$'s rate is $3$"
              ],
              "answer": 0,
              "explanation": {
                "en": "From the equation, $f$'s rate is its slope, $3$. From the table, $g$'s rate is $\\frac{9 - 1}{2 - 0} = \\frac{8}{2} = 4$. Since $4 > 3$, $g$ changes faster. The answer \"$8$\" comes from forgetting to divide by the change in $x$ — the table steps by 2, not 1.",
                "zh": "由解析式可知 $f$ 的变化率是斜率 $3$。由表格可得 $g$ 的变化率是 $\\frac{9 - 1}{2 - 0} = \\frac{8}{2} = 4$。因为 $4 > 3$，$g$ 变化更快。答案\"$8$\"的错误在于忘记除以 $x$ 的变化量——表格中 $x$ 每次增加 2 而不是 1。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Honors challenge: the average rate of change of $f(x) = x^2$ from $x = 1$ to $x = b$ (with $b > 1$) equals $9$. Find $b$. Give your answer as an integer.",
                "zh": "荣誉挑战：$f(x) = x^2$ 从 $x = 1$ 到 $x = b$（$b > 1$）的平均变化率等于 $9$。求 $b$。请以整数作答。"
              },
              "answer": "8",
              "accept": [
                "8.0"
              ],
              "explanation": {
                "en": "Set up the equation $\\frac{b^2 - 1}{b - 1} = 9$. Since $b^2 - 1 = (b - 1)(b + 1)$, the fraction simplifies to $b + 1$, so $b + 1 = 9$ and $b = 8$. Check: $\\frac{64 - 1}{8 - 1} = \\frac{63}{7} = 9$. Recognizing the difference of squares turns a messy equation into a one-step problem.",
                "zh": "列方程 $\\frac{b^2 - 1}{b - 1} = 9$。由于 $b^2 - 1 = (b - 1)(b + 1)$，分式化简为 $b + 1$，所以 $b + 1 = 9$，$b = 8$。验证：$\\frac{64 - 1}{8 - 1} = \\frac{63}{7} = 9$。识别平方差公式能把复杂的方程变成一步就能解决的问题。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-9-sequences",
      "title": "Unit 9: Sequences",
      "titleZh": "第九单元：数列",
      "lessons": [
        {
          "id": "arithmetic-sequences",
          "title": "Arithmetic Sequences",
          "titleZh": "等差数列",
          "content": [
            {
              "type": "h2",
              "en": "Sequences: Functions of Position",
              "zh": "数列：关于位置的函数"
            },
            {
              "type": "p",
              "en": "A sequence is an ordered list of numbers: $5, 8, 11, 14, \\ldots$ Each number is a term, and each term has a position. We write $a_1$ for the first term, $a_2$ for the second, and $a_n$ for the term in position $n$. This makes a sequence a function whose input is the position number: feed in $n = 3$ and the sequence above outputs $a_3 = 11$. The only difference from the functions you have graphed before is the domain — positions must be positive integers $1, 2, 3, \\ldots$, so the graph of a sequence is a set of separate dots, not a connected curve.",
              "zh": "数列是一列按顺序排好的数：$5, 8, 11, 14, \\ldots$ 其中每个数叫做一项，每一项都有自己的位置（序号）。我们用 $a_1$ 表示第一项，$a_2$ 表示第二项，$a_n$ 表示第 $n$ 项。这样，数列就是一个以位置序号为输入的函数：输入 $n = 3$，上面的数列就输出 $a_3 = 11$。它与你之前画过的函数唯一的区别在于定义域——位置必须是正整数 $1, 2, 3, \\ldots$，所以数列的图象是一个个分离的点，而不是连续的曲线。"
            },
            {
              "type": "h3",
              "en": "The Common Difference",
              "zh": "公差"
            },
            {
              "type": "p",
              "en": "A sequence is arithmetic when each term is found by adding the same fixed number to the previous term. That number is the common difference, written $d$. In $5, 8, 11, 14, \\ldots$ each jump adds $3$, so $d = 3$. The common difference can be negative: $20, 17, 14, 11, \\ldots$ has $d = -3$, and its terms steadily shrink. To find $d$, subtract any term from the term right after it: $d = a_2 - a_1$.",
              "zh": "如果每一项都是在前一项的基础上加同一个固定的数得到的，这个数列就是等差数列。这个固定的数叫做公差，记作 $d$。在 $5, 8, 11, 14, \\ldots$ 中，每次都加 $3$，所以 $d = 3$。公差可以为负：$20, 17, 14, 11, \\ldots$ 的公差 $d = -3$，各项不断减小。求 $d$ 时，用任意一项减去它前面紧邻的一项即可：$d = a_2 - a_1$。"
            },
            {
              "type": "note",
              "en": "Common mistake: to check that a sequence is really arithmetic, you must verify the difference is the same between EVERY pair of neighboring terms, not just the first pair. The sequence $2, 4, 8, 16$ starts by adding $2$, but the next jump adds $4$ — it is not arithmetic.",
              "zh": "常见错误：要确认一个数列是等差数列，必须验证每相邻两项之间的差都相同，而不能只看前两项。数列 $2, 4, 8, 16$ 开头加了 $2$，但下一步加了 $4$——它不是等差数列。"
            },
            {
              "type": "h3",
              "en": "Recursive Form and Explicit Form",
              "zh": "递推公式与通项公式"
            },
            {
              "type": "p",
              "en": "There are two standard ways to define an arithmetic sequence with a formula. The recursive form tells you where to start and how to get each term from the one before it:",
              "zh": "用公式定义等差数列有两种标准方式。递推公式告诉你从哪里开始，以及如何由前一项得到下一项："
            },
            {
              "type": "math",
              "tex": "a_1 = 5, \\qquad a_n = a_{n-1} + 3"
            },
            {
              "type": "p",
              "en": "The explicit form lets you jump straight to any term without computing all the terms before it. Starting from $a_1$ and taking $n - 1$ steps of size $d$ gives:",
              "zh": "通项公式则让你不必逐项计算，就能直接求出任意一项。从 $a_1$ 出发，走 $n - 1$ 步、每步为 $d$，得到："
            },
            {
              "type": "math",
              "tex": "a_n = a_1 + (n - 1)d"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Recursive form: easy to write, but to find $a_{50}$ you would need all 49 terms before it.",
                  "zh": "递推公式：写起来容易，但要求 $a_{50}$ 就得先算出前面的 49 项。"
                },
                {
                  "en": "Explicit form: one substitution gives any term. For $5, 8, 11, \\ldots$: $a_{50} = 5 + 49 \\cdot 3 = 152$.",
                  "zh": "通项公式：一次代入即可求出任意一项。对 $5, 8, 11, \\ldots$：$a_{50} = 5 + 49 \\cdot 3 = 152$。"
                },
                {
                  "en": "To convert between forms, identify $a_1$ and $d$ — both formulas are built from those two numbers.",
                  "zh": "两种形式互相转换时，只需找出 $a_1$ 和 $d$——两个公式都由这两个数构成。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: the explicit formula uses $(n - 1)d$, not $nd$. The first term has taken zero steps, so $a_1 = a_1 + (1-1)d$ checks out. Writing $a_n = a_1 + nd$ makes every answer one step too big — always test your formula with $n = 1$.",
              "zh": "常见错误：通项公式中是 $(n - 1)d$，不是 $nd$。第一项走了零步，所以 $a_1 = a_1 + (1-1)d$ 恰好成立。写成 $a_n = a_1 + nd$ 会让每个答案都多走一步——一定要用 $n = 1$ 检验你的公式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: From a sequence to both formulas",
                "zh": "例题 1：由数列写出两种公式"
              },
              "problem": {
                "en": "For the sequence $12, 7, 2, -3, \\ldots$, write the recursive form and the explicit form, then find $a_{20}$.",
                "zh": "对数列 $12, 7, 2, -3, \\ldots$，写出递推公式和通项公式，并求 $a_{20}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first term is $a_1 = 12$, and each term drops by 5, so $d = 7 - 12 = -5$. Recursive form:",
                  "zh": "首项 $a_1 = 12$，每项减少 5，所以 $d = 7 - 12 = -5$。递推公式："
                },
                {
                  "type": "math",
                  "tex": "a_1 = 12, \\qquad a_n = a_{n-1} - 5"
                },
                {
                  "type": "p",
                  "en": "Explicit form: $a_n = 12 + (n - 1)(-5)$, which simplifies to $a_n = -5n + 17$.",
                  "zh": "通项公式：$a_n = 12 + (n - 1)(-5)$，化简得 $a_n = -5n + 17$。"
                },
                {
                  "type": "math",
                  "tex": "a_{20} = 12 + (20 - 1)(-5) = 12 - 95 = -83"
                },
                {
                  "type": "p",
                  "en": "The explicit form found the 20th term in one step — no need to list 19 terms first.",
                  "zh": "通项公式一步就求出了第 20 项——不必先列出前 19 项。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A real-world arithmetic pattern",
                "zh": "例题 2：现实中的等差模式"
              },
              "problem": {
                "en": "A theater has 14 seats in row 1, and each row after that has 2 more seats than the row before. How many seats are in row 25?",
                "zh": "某剧院第 1 排有 14 个座位，此后每一排都比前一排多 2 个座位。第 25 排有多少个座位？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The seat counts form an arithmetic sequence with $a_1 = 14$ and $d = 2$. We need the 25th term:",
                  "zh": "各排座位数构成一个等差数列，$a_1 = 14$，$d = 2$。要求第 25 项："
                },
                {
                  "type": "math",
                  "tex": "a_{25} = 14 + (25 - 1)(2) = 14 + 48 = 62"
                },
                {
                  "type": "p",
                  "en": "Row 25 has $62$ seats. Notice the reasoning behind $(n-1)$: to get from row 1 to row 25 you move up 24 rows, gaining 2 seats each time. Situations with a fixed starting amount and a constant add-on — rows of seats, weekly savings, fence posts — are exactly where arithmetic sequences shine.",
                  "zh": "第 25 排有 $62$ 个座位。注意 $(n-1)$ 背后的道理：从第 1 排到第 25 排要往上走 24 排，每排多 2 个座位。有固定起点、每次增加相同数量的情境——座位排数、每周存钱、栅栏柱子——正是等差数列大显身手的地方。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the common difference of the arithmetic sequence $17, 13, 9, 5, \\ldots$?",
                "zh": "等差数列 $17, 13, 9, 5, \\ldots$ 的公差是多少？"
              },
              "choices": [
                "$4$",
                "$13$",
                "$-4$",
                "$-17$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The common difference is (any term) $-$ (the term before it): $13 - 17 = -4$. The terms are shrinking, so $d$ must be negative — choosing $4$ means you subtracted in the wrong order.",
                "zh": "公差等于（任意一项）$-$（它前面的一项）：$13 - 17 = -4$。各项在减小，所以 $d$ 必为负数——选 $4$ 说明相减的顺序反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An arithmetic sequence has explicit form $a_n = 7 + (n - 1) \\cdot 3$. Find $a_{12}$. Give your answer as an integer.",
                "zh": "某等差数列的通项公式为 $a_n = 7 + (n - 1) \\cdot 3$。求 $a_{12}$。请以整数作答。"
              },
              "answer": "40",
              "accept": [
                "40.0"
              ],
              "explanation": {
                "en": "Substitute $n = 12$: $a_{12} = 7 + 11 \\cdot 3 = 7 + 33 = 40$. Remember it is $(12 - 1) = 11$ steps from the first term, not 12.",
                "zh": "代入 $n = 12$：$a_{12} = 7 + 11 \\cdot 3 = 7 + 33 = 40$。记住从首项出发走了 $(12 - 1) = 11$ 步，而不是 12 步。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A sequence is defined recursively by $a_1 = 4$ and $a_n = a_{n-1} + 6$. Which explicit formula defines the same sequence?",
                "zh": "数列由递推公式 $a_1 = 4$，$a_n = a_{n-1} + 6$ 定义。下列哪个通项公式定义的是同一个数列？"
              },
              "choices": [
                "$a_n = 6 + (n - 1) \\cdot 4$",
                "$a_n = 4 + (n - 1) \\cdot 6$",
                "$a_n = 4 + 6n$",
                "$a_n = 4n + 6$"
              ],
              "answer": 1,
              "explanation": {
                "en": "The starting value is $a_1 = 4$ and each step adds $d = 6$, so $a_n = 4 + (n-1) \\cdot 6$. Test with $n = 1$: it gives $4$, correct. The formula $a_n = 4 + 6n$ gives $10$ at $n = 1$ — it forgot the $(n-1)$. The first choice swaps the roles of $a_1$ and $d$.",
                "zh": "首项 $a_1 = 4$，每步加 $d = 6$，所以 $a_n = 4 + (n-1) \\cdot 6$。用 $n = 1$ 检验：结果是 $4$，正确。公式 $a_n = 4 + 6n$ 在 $n = 1$ 时给出 $10$——它漏掉了 $(n-1)$。第一个选项则把 $a_1$ 和 $d$ 的位置弄反了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Mia opens a savings jar with \\$30 in week 1, and adds \\$12 at the start of each week after that. Following this arithmetic pattern, how many dollars are in the jar in week 8? Give your answer as an integer.",
                "zh": "米娅在第 1 周往储蓄罐里放入 30 美元，此后每周初再存入 12 美元。按照这个等差模式，第 8 周储蓄罐里有多少美元？请以整数作答。"
              },
              "answer": "114",
              "accept": [
                "114.0",
                "$114"
              ],
              "explanation": {
                "en": "The weekly totals form an arithmetic sequence with $a_1 = 30$ and $d = 12$. Week 8 is the 8th term: $a_8 = 30 + (8 - 1)(12) = 30 + 84 = 114$. A common error is computing $30 + 8 \\cdot 12 = 126$, which counts one extra deposit.",
                "zh": "每周的总额构成等差数列，$a_1 = 30$，$d = 12$。第 8 周是第 8 项：$a_8 = 30 + (8 - 1)(12) = 30 + 84 = 114$。常见错误是算成 $30 + 8 \\cdot 12 = 126$，多算了一次存款。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of these sequences is arithmetic?",
                "zh": "下列哪个数列是等差数列？"
              },
              "choices": [
                "$1, 2, 4, 8, 16$",
                "$10, 8, 5, 1, -4$",
                "$1, 4, 9, 16, 25$",
                "$3.5, 5, 6.5, 8, 9.5$"
              ],
              "answer": 3,
              "explanation": {
                "en": "In $3.5, 5, 6.5, 8, 9.5$ every gap is exactly $1.5$, so it is arithmetic (a common difference does not have to be a whole number). The first sequence multiplies by 2 each time, the second has gaps $-2, -3, -4, -5$ that keep changing, and the third is the perfect squares with growing gaps.",
                "zh": "在 $3.5, 5, 6.5, 8, 9.5$ 中，每个间隔恰好都是 $1.5$，所以它是等差数列（公差不一定是整数）。第一个数列每次乘 2；第二个的间隔为 $-2, -3, -4, -5$，不断变化；第三个是完全平方数，间隔越来越大。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An arithmetic sequence has $a_3 = 11$ and $a_7 = 27$. Find the common difference $d$. Give your answer as an integer.",
                "zh": "某等差数列满足 $a_3 = 11$，$a_7 = 27$。求公差 $d$。请以整数作答。"
              },
              "answer": "4",
              "accept": [
                "4.0"
              ],
              "explanation": {
                "en": "From term 3 to term 7 is $7 - 3 = 4$ steps, and the value grew by $27 - 11 = 16$. So $d = \\frac{16}{4} = 4$. This is really an average-rate-of-change calculation: change in value divided by change in position.",
                "zh": "从第 3 项到第 7 项走了 $7 - 3 = 4$ 步，数值增加了 $27 - 11 = 16$。所以 $d = \\frac{16}{4} = 4$。这本质上就是平均变化率的计算：数值的变化量除以位置的变化量。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: in the arithmetic sequence $2, 9, 16, 23, \\ldots$, which term equals $100$?",
                "zh": "荣誉挑战：在等差数列 $2, 9, 16, 23, \\ldots$ 中，哪一项等于 $100$？"
              },
              "choices": [
                "the 14th term",
                "the 16th term",
                "the 15th term",
                "$100$ is not a term of this sequence"
              ],
              "answer": 2,
              "explanation": {
                "en": "Here $a_1 = 2$ and $d = 7$, so set $2 + (n - 1)(7) = 100$. Then $(n-1) \\cdot 7 = 98$, so $n - 1 = 14$ and $n = 15$. Answering \"14\" comes from stopping at $n - 1 = 14$ and forgetting the final step of adding 1.",
                "zh": "这里 $a_1 = 2$，$d = 7$，列方程 $2 + (n - 1)(7) = 100$。于是 $(n-1) \\cdot 7 = 98$，$n - 1 = 14$，$n = 15$。答\"14\"的错误在于停在了 $n - 1 = 14$，忘记最后再加 1。"
              }
            }
          ]
        },
        {
          "id": "geometric-sequences",
          "title": "Geometric Sequences",
          "titleZh": "等比数列",
          "content": [
            {
              "type": "h2",
              "en": "Multiplying Instead of Adding",
              "zh": "从\"加\"到\"乘\""
            },
            {
              "type": "p",
              "en": "Some patterns grow by adding the same amount each step — but others grow by multiplying. The sequence $3, 6, 12, 24, \\ldots$ doubles at every step. A sequence like this, where each term is the previous term multiplied by the same fixed number, is called geometric, and the fixed multiplier is the common ratio, written $r$. To find $r$, divide any term by the term before it: $r = \\frac{a_2}{a_1}$. For $3, 6, 12, 24$ we get $r = \\frac{6}{3} = 2$.",
              "zh": "有些模式每一步增加相同的数量——但另一些模式是按倍数增长的。数列 $3, 6, 12, 24, \\ldots$ 每一步都翻倍。像这样每一项都等于前一项乘以同一个固定的数的数列，叫做等比数列，这个固定的乘数叫做公比，记作 $r$。求 $r$ 时，用任意一项除以它前面的一项：$r = \\frac{a_2}{a_1}$。对 $3, 6, 12, 24$，得 $r = \\frac{6}{3} = 2$。"
            },
            {
              "type": "p",
              "en": "The common ratio does not have to be a whole number, and it does not have to make the sequence grow. If $0 < r < 1$, the terms shrink: $80, 40, 20, 10, \\ldots$ has $r = \\frac{1}{2}$. If $r$ is negative, the terms alternate in sign: $2, -6, 18, -54, \\ldots$ has $r = -3$.",
              "zh": "公比不一定是整数，也不一定使数列增大。若 $0 < r < 1$，各项不断缩小：$80, 40, 20, 10, \\ldots$ 的公比 $r = \\frac{1}{2}$。若 $r$ 为负数，各项正负交替：$2, -6, 18, -54, \\ldots$ 的公比 $r = -3$。"
            },
            {
              "type": "h3",
              "en": "Recursive and Explicit Forms",
              "zh": "递推公式与通项公式"
            },
            {
              "type": "p",
              "en": "Just like arithmetic sequences, geometric sequences have two standard formulas. The recursive form gives the start and the rule; the explicit form jumps to any term directly. Starting at $a_1$ and multiplying by $r$ a total of $n - 1$ times gives:",
              "zh": "与等差数列一样，等比数列也有两种标准公式。递推公式给出起点和规则；通项公式则能直接求出任意一项。从 $a_1$ 出发，共乘以 $r$ 共 $n - 1$ 次，得到："
            },
            {
              "type": "math",
              "tex": "a_1 \\text{ given}, \\qquad a_n = r \\cdot a_{n-1} \\qquad \\text{(recursive)}"
            },
            {
              "type": "math",
              "tex": "a_n = a_1 \\cdot r^{\\,n-1} \\qquad \\text{(explicit)}"
            },
            {
              "type": "p",
              "en": "For $3, 6, 12, 24, \\ldots$ the explicit form is $a_n = 3 \\cdot 2^{n-1}$, so the 10th term is $a_{10} = 3 \\cdot 2^9 = 3 \\cdot 512 = 1536$ — no need to double nine times by hand.",
              "zh": "对 $3, 6, 12, 24, \\ldots$，通项公式是 $a_n = 3 \\cdot 2^{n-1}$，所以第 10 项是 $a_{10} = 3 \\cdot 2^9 = 3 \\cdot 512 = 1536$——不必手动翻倍九次。"
            },
            {
              "type": "note",
              "en": "Common mistake: in $a_n = a_1 \\cdot r^{n-1}$, the exponent applies ONLY to $r$, and it is $n - 1$, not $n$. Test with $n = 1$: $a_1 \\cdot r^0 = a_1$, correct. Also, do not multiply $a_1 \\cdot r$ first and then raise to a power — exponents come before multiplication.",
              "zh": "常见错误：在 $a_n = a_1 \\cdot r^{n-1}$ 中，指数只作用于 $r$，而且是 $n - 1$ 而不是 $n$。用 $n = 1$ 检验：$a_1 \\cdot r^0 = a_1$，正确。另外，不要先算 $a_1 \\cdot r$ 再乘方——乘方要先于乘法。"
            },
            {
              "type": "h3",
              "en": "Arithmetic vs. Geometric: Which Model Fits?",
              "zh": "等差还是等比：哪个模型合适？"
            },
            {
              "type": "p",
              "en": "Given a table of values, check the gaps between neighboring terms first. If the differences are constant, the pattern is arithmetic. If the differences change, divide instead: if the ratios are constant, the pattern is geometric.",
              "zh": "给定一张数值表，先检查相邻两项之间的差。若差恒定，模式是等差的。若差在变化，就改用除法：若比值恒定，模式就是等比的。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Arithmetic: equal differences — add the same amount each step (a savings plan adding \\$12 per week).",
                  "zh": "等差：差相等——每步加相同的量（每周多存 12 美元的储蓄计划）。"
                },
                {
                  "en": "Geometric: equal ratios — multiply by the same factor each step (a population doubling every hour).",
                  "zh": "等比：比相等——每步乘相同的倍数（每小时翻一倍的种群数量）。"
                },
                {
                  "en": "In the long run, a growing geometric sequence ($r > 1$) always overtakes any arithmetic sequence, no matter how large the common difference is.",
                  "zh": "从长远看，增长的等比数列（$r > 1$）终将超过任何等差数列，无论其公差有多大。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Writing and using the explicit form",
                "zh": "例题 1：写出并使用通项公式"
              },
              "problem": {
                "en": "A geometric sequence begins $5, 15, 45, 135, \\ldots$ Write its explicit form and find $a_7$.",
                "zh": "某等比数列开头为 $5, 15, 45, 135, \\ldots$ 写出它的通项公式并求 $a_7$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The first term is $a_1 = 5$, and the ratio is $r = \\frac{15}{5} = 3$ (check: $\\frac{45}{15} = 3$ too). So:",
                  "zh": "首项 $a_1 = 5$，公比 $r = \\frac{15}{5} = 3$（验证：$\\frac{45}{15} = 3$ 也成立）。所以："
                },
                {
                  "type": "math",
                  "tex": "a_n = 5 \\cdot 3^{\\,n-1}"
                },
                {
                  "type": "math",
                  "tex": "a_7 = 5 \\cdot 3^6 = 5 \\cdot 729 = 3645"
                },
                {
                  "type": "p",
                  "en": "Note that the exponent is $6$, not $7$: the seventh term sits six multiplications past the first term.",
                  "zh": "注意指数是 $6$ 而不是 $7$：第七项在第一项之后经过了六次乘法。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A bouncing ball",
                "zh": "例题 2：弹跳的小球"
              },
              "problem": {
                "en": "A ball is dropped from a height of 16 feet. After each bounce it rises to $\\frac{3}{4}$ of its previous height. How high does it rise after the 3rd bounce?",
                "zh": "一个小球从 16 英尺的高度落下。每次弹起的高度是前一次高度的 $\\frac{3}{4}$。第 3 次弹起后小球能达到多高？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The bounce heights form a geometric sequence with ratio $r = \\frac{3}{4}$. After the first bounce the ball reaches $16 \\cdot \\frac{3}{4} = 12$ feet, so the bounce heights are $12, 9, 6.75, \\ldots$ with $a_1 = 12$.",
                  "zh": "各次弹起的高度构成公比 $r = \\frac{3}{4}$ 的等比数列。第一次弹起后小球达到 $16 \\cdot \\frac{3}{4} = 12$ 英尺，所以弹起高度依次为 $12, 9, 6.75, \\ldots$，其中 $a_1 = 12$。"
                },
                {
                  "type": "math",
                  "tex": "a_3 = 12 \\cdot \\left(\\tfrac{3}{4}\\right)^{2} = 12 \\cdot \\tfrac{9}{16} = 6.75"
                },
                {
                  "type": "p",
                  "en": "After the 3rd bounce the ball rises $6.75$ feet. Setting up the problem carefully matters: the drop height of 16 feet is not itself a bounce, so the first bounce height, 12 feet, plays the role of $a_1$.",
                  "zh": "第 3 次弹起后小球升到 $6.75$ 英尺。仔细设定问题很重要：最初 16 英尺的下落本身不算一次弹起，所以第一次弹起的高度 12 英尺才是 $a_1$。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the common ratio of the geometric sequence $81, 27, 9, 3, \\ldots$?",
                "zh": "等比数列 $81, 27, 9, 3, \\ldots$ 的公比是多少？"
              },
              "choices": [
                "$3$",
                "$\\frac{1}{3}$",
                "$-3$",
                "$-54$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Divide any term by the previous term: $\\frac{27}{81} = \\frac{1}{3}$. The terms are shrinking, so the ratio must be between 0 and 1. Choosing $3$ means you divided in the wrong order, and $-54$ comes from subtracting instead of dividing.",
                "zh": "用任意一项除以前一项：$\\frac{27}{81} = \\frac{1}{3}$。各项在缩小，所以公比必在 0 与 1 之间。选 $3$ 说明相除的顺序反了；$-54$ 则是做了减法而不是除法。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A geometric sequence has explicit form $a_n = 2 \\cdot 3^{n-1}$. Find $a_6$. Give your answer as an integer.",
                "zh": "某等比数列的通项公式为 $a_n = 2 \\cdot 3^{n-1}$。求 $a_6$。请以整数作答。"
              },
              "answer": "486",
              "accept": [
                "486.0"
              ],
              "explanation": {
                "en": "Substitute $n = 6$: $a_6 = 2 \\cdot 3^5 = 2 \\cdot 243 = 486$. Do the exponent before multiplying — computing $(2 \\cdot 3)^5 = 7776$ is the classic order-of-operations slip.",
                "zh": "代入 $n = 6$：$a_6 = 2 \\cdot 3^5 = 2 \\cdot 243 = 486$。先乘方再乘系数——算成 $(2 \\cdot 3)^5 = 7776$ 是典型的运算顺序错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A table shows the terms $4, 12, 36, 108$. Which model fits, and why?",
                "zh": "表格给出各项 $4, 12, 36, 108$。哪个模型合适？为什么？"
              },
              "choices": [
                "Geometric, because each ratio equals $3$",
                "Arithmetic, because each difference equals $8$",
                "Arithmetic, because the terms increase",
                "Neither, because the differences are not constant"
              ],
              "answer": 0,
              "explanation": {
                "en": "The differences are $8, 24, 72$ — not constant, so it is not arithmetic. The ratios are $\\frac{12}{4} = \\frac{36}{12} = \\frac{108}{36} = 3$ — constant, so the sequence is geometric. \"Increasing\" alone tells you nothing about which model fits, and non-constant differences do not rule out a geometric pattern.",
                "zh": "各项之差为 $8, 24, 72$——不恒定，所以不是等差数列。各项之比为 $\\frac{12}{4} = \\frac{36}{12} = \\frac{108}{36} = 3$——恒定，所以是等比数列。仅凭\"递增\"无法判断模型；差不恒定也不能排除等比模式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A bacteria culture starts with 50 cells and doubles every hour. How many cells are there after 7 hours? Give your answer as an integer.",
                "zh": "某细菌培养开始时有 50 个细胞，每小时数量翻一倍。7 小时后有多少个细胞？请以整数作答。"
              },
              "answer": "6400",
              "accept": [
                "6400.0"
              ],
              "explanation": {
                "en": "After 7 hours the population has doubled 7 times: $50 \\cdot 2^7 = 50 \\cdot 128 = 6400$. (In sequence language, the starting count is $a_1 = 50$ and the count after 7 hours is the 8th term, $a_8 = 50 \\cdot 2^{8-1}$.) Doubling is the signature of geometric growth — adding $2$ each hour would give only $64$ cells.",
                "zh": "7 小时后数量翻了 7 次倍：$50 \\cdot 2^7 = 50 \\cdot 128 = 6400$。（用数列的语言，初始数量是 $a_1 = 50$，7 小时后是第 8 项，$a_8 = 50 \\cdot 2^{8-1}$。）翻倍是等比增长的标志——若每小时只加 $2$，只会有 $64$ 个细胞。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A sequence is defined recursively by $a_1 = 7$ and $a_n = 2 a_{n-1}$. Which explicit formula defines the same sequence?",
                "zh": "数列由递推公式 $a_1 = 7$，$a_n = 2 a_{n-1}$ 定义。下列哪个通项公式定义的是同一个数列？"
              },
              "choices": [
                "$a_n = 2 \\cdot 7^{n-1}$",
                "$a_n = 7 + 2(n-1)$",
                "$a_n = 7 \\cdot 2^{n}$",
                "$a_n = 7 \\cdot 2^{n-1}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Start at $7$ and multiply by $2$ a total of $n-1$ times: $a_n = 7 \\cdot 2^{n-1}$. Check $n = 1$: $7 \\cdot 2^0 = 7$, correct. The formula $7 \\cdot 2^n$ gives $14$ at $n = 1$ (off by one step), $2 \\cdot 7^{n-1}$ swaps the roles of $a_1$ and $r$, and $7 + 2(n-1)$ is an arithmetic formula.",
                "zh": "从 $7$ 出发共乘以 $2$ 共 $n-1$ 次：$a_n = 7 \\cdot 2^{n-1}$。检验 $n = 1$：$7 \\cdot 2^0 = 7$，正确。$7 \\cdot 2^n$ 在 $n = 1$ 时给出 $14$（多乘了一步）；$2 \\cdot 7^{n-1}$ 把 $a_1$ 与 $r$ 弄反了；$7 + 2(n-1)$ 是等差数列的公式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball is dropped from 20 meters, and each bounce reaches $\\frac{1}{2}$ of the previous height. What height, in meters, does the ball reach after the 4th bounce? Give your answer as a decimal or a fraction a/b.",
                "zh": "小球从 20 米高处落下，每次弹起的高度是前一次高度的 $\\frac{1}{2}$。第 4 次弹起后小球达到多少米？请以小数或分数 a/b 作答。"
              },
              "answer": "1.25",
              "accept": [
                "5/4",
                "1.250"
              ],
              "explanation": {
                "en": "Each bounce halves the height, so after 4 bounces the height is $20 \\cdot \\left(\\frac{1}{2}\\right)^4 = 20 \\cdot \\frac{1}{16} = 1.25$ meters. Equivalently, the bounce heights $10, 5, 2.5, 1.25$ form a geometric sequence with $a_1 = 10$ and $r = \\frac{1}{2}$.",
                "zh": "每次弹起高度减半，所以 4 次弹起后高度为 $20 \\cdot \\left(\\frac{1}{2}\\right)^4 = 20 \\cdot \\frac{1}{16} = 1.25$ 米。等价地，各次弹起高度 $10, 5, 2.5, 1.25$ 构成 $a_1 = 10$、$r = \\frac{1}{2}$ 的等比数列。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Honors challenge: a geometric sequence has $a_2 = 6$ and $a_5 = 48$. What is the common ratio $r$?",
                "zh": "荣誉挑战：某等比数列满足 $a_2 = 6$，$a_5 = 48$。公比 $r$ 是多少？"
              },
              "choices": [
                "$8$",
                "$2$",
                "$14$",
                "$4$"
              ],
              "answer": 1,
              "explanation": {
                "en": "From term 2 to term 5 the sequence is multiplied by $r$ three times, so $6 \\cdot r^3 = 48$, giving $r^3 = 8$ and $r = 2$. Choosing $8$ means you stopped at $r^3 = 8$ without taking the cube root; $14$ comes from treating the sequence as arithmetic ($\\frac{48-6}{3} = 14$).",
                "zh": "从第 2 项到第 5 项共乘了三次 $r$，所以 $6 \\cdot r^3 = 48$，得 $r^3 = 8$，$r = 2$。选 $8$ 说明停在了 $r^3 = 8$，没有开立方；$14$ 则是把数列当成了等差数列（$\\frac{48-6}{3} = 14$）。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-10-absolute-value-piecewise",
      "title": "Unit 10: Absolute Value & Piecewise Functions",
      "titleZh": "第十单元：绝对值与分段函数",
      "lessons": [
        {
          "id": "absolute-value-equations-inequalities",
          "title": "Absolute Value Equations and Inequalities",
          "titleZh": "绝对值方程与不等式",
          "content": [
            {
              "type": "h2",
              "en": "Absolute Value Means Distance",
              "zh": "绝对值即距离"
            },
            {
              "type": "p",
              "en": "The absolute value $|x|$ is the distance from $x$ to $0$ on the number line, so it is never negative: $|5| = 5$ and $|-5| = 5$. More generally, $|x - a|$ is the distance between $x$ and $a$. Thinking in terms of distance makes every absolute value problem easier to set up.",
              "zh": "绝对值 $|x|$ 是数轴上 $x$ 到 $0$ 的距离，因此永远非负：$|5| = 5$，$|-5| = 5$。更一般地，$|x - a|$ 是 $x$ 与 $a$ 之间的距离。用距离的观点思考，绝对值问题会更容易入手。"
            },
            {
              "type": "h3",
              "en": "Absolute Value Equations",
              "zh": "绝对值方程"
            },
            {
              "type": "p",
              "en": "The equation $|X| = c$ (with $c > 0$) asks: which quantities are at distance $c$ from zero? There are two: $X = c$ or $X = -c$. So an absolute value equation splits into two ordinary equations. Always isolate the absolute value expression FIRST, before splitting.",
              "zh": "方程 $|X| = c$（$c > 0$）问的是：哪些量到零的距离为 $c$？有两个：$X = c$ 或 $X = -c$。因此一个绝对值方程会拆成两个普通方程。拆分之前必须先把绝对值式子单独分离出来。"
            },
            {
              "type": "note",
              "en": "If, after isolating, you get $|X| = $ a NEGATIVE number, stop: there is no solution, because a distance can never be negative. Do not split into cases.",
              "zh": "如果分离后得到 $|X| =$ 负数，直接停止：方程无解，因为距离不可能为负。不要再分情况讨论。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Isolate, then split",
                "zh": "例题 1：先分离，再拆分"
              },
              "problem": {
                "en": "Solve $2|x - 3| + 1 = 9$.",
                "zh": "解方程 $2|x - 3| + 1 = 9$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Isolate the absolute value: subtract 1, divide by 2:",
                  "zh": "分离绝对值：先减 1，再除以 2："
                },
                {
                  "type": "math",
                  "tex": "|x - 3| = 4"
                },
                {
                  "type": "p",
                  "en": "Distance interpretation: $x$ is 4 units from 3. Split into two equations:",
                  "zh": "距离解释：$x$ 到 3 的距离为 4。拆成两个方程："
                },
                {
                  "type": "math",
                  "tex": "x - 3 = 4 \\quad\\text{or}\\quad x - 3 = -4"
                },
                {
                  "type": "p",
                  "en": "So $x = 7$ or $x = -1$. Both check in the original equation.",
                  "zh": "所以 $x = 7$ 或 $x = -1$。两个解代回原方程均成立。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Absolute Value Inequalities",
              "zh": "绝对值不等式"
            },
            {
              "type": "p",
              "en": "For $c > 0$: the inequality $|X| < c$ means $X$ is CLOSE to zero, so it becomes the \"and\" statement $-c < X < c$. The inequality $|X| > c$ means $X$ is FAR from zero, so it becomes the \"or\" statement $X < -c$ or $X > c$. A handy memory aid: less-than gives \"and\" (between), greater-than gives \"or\" (outside).",
              "zh": "当 $c > 0$ 时：$|X| < c$ 表示 $X$ 离零很近，化为\"且\"型 $-c < X < c$；$|X| > c$ 表示 $X$ 离零很远，化为\"或\"型 $X < -c$ 或 $X > c$。记忆口诀：小于化\"且\"（夹在中间），大于化\"或\"（分居两侧）。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A tolerance problem",
                "zh": "例题 2：容差问题"
              },
              "problem": {
                "en": "A machine fills bottles with 500 mL of juice, with an allowed error of at most 6 mL. Write and solve an inequality for acceptable volumes $v$.",
                "zh": "灌装机向瓶中注入 500 毫升果汁，允许误差不超过 6 毫升。写出并解出合格体积 $v$ 满足的不等式。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The distance between the actual volume and 500 must be at most 6:",
                  "zh": "实际体积与 500 的距离最多为 6："
                },
                {
                  "type": "math",
                  "tex": "|v - 500| \\leq 6"
                },
                {
                  "type": "p",
                  "en": "Less-than-or-equal becomes an \"and\" statement:",
                  "zh": "小于等于化为\"且\"型："
                },
                {
                  "type": "math",
                  "tex": "-6 \\leq v - 500 \\leq 6 \\quad\\Rightarrow\\quad 494 \\leq v \\leq 506"
                },
                {
                  "type": "p",
                  "en": "Acceptable volumes run from 494 mL to 506 mL inclusive.",
                  "zh": "合格体积为 494 毫升到 506 毫升（含端点）。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "input",
              "question": {
                "en": "Evaluate $|{-8}| + |3|$. Give your answer as an integer.",
                "zh": "计算 $|{-8}| + |3|$。请以整数作答。"
              },
              "answer": "11",
              "explanation": {
                "en": "$|-8| = 8$ (distance from $-8$ to 0) and $|3| = 3$, so the sum is $11$. Absolute value strips the sign, not the number.",
                "zh": "$|-8| = 8$（$-8$ 到 0 的距离），$|3| = 3$，和为 $11$。绝对值去掉的是符号，不是数本身。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many solutions does $|x| = -4$ have?",
                "zh": "方程 $|x| = -4$ 有多少个解？"
              },
              "choices": [
                "0",
                "1",
                "2",
                "Infinitely many (无穷多)"
              ],
              "answer": 0,
              "explanation": {
                "en": "Absolute value is a distance, which can never be negative. No number has distance $-4$ from zero, so there are no solutions. Splitting into $x = \\pm 4$ here would be wrong.",
                "zh": "绝对值是距离，永远不可能为负。没有任何数到零的距离是 $-4$，所以无解。此时拆成 $x = \\pm 4$ 是错误的。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The solutions of $|x - 5| = 3$ are:",
                "zh": "方程 $|x - 5| = 3$ 的解是："
              },
              "choices": [
                "$x = 8$ only",
                "$x = 2$ and $x = 8$",
                "$x = -2$ and $x = 8$",
                "$x = 3$ and $x = 5$"
              ],
              "answer": 1,
              "explanation": {
                "en": "We need numbers at distance 3 from 5: going right gives $8$, going left gives $2$. Algebraically: $x - 5 = 3$ gives $x = 8$; $x - 5 = -3$ gives $x = 2$.",
                "zh": "需要到 5 的距离为 3 的数：向右是 $8$，向左是 $2$。代数解法：$x - 5 = 3$ 得 $x = 8$；$x - 5 = -3$ 得 $x = 2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $3|x| - 2 = 13$. Give the POSITIVE solution as an integer.",
                "zh": "解方程 $3|x| - 2 = 13$。请给出正数解，以整数作答。"
              },
              "answer": "5",
              "explanation": {
                "en": "Isolate first: $3|x| = 15$, so $|x| = 5$. The solutions are $x = 5$ and $x = -5$; the positive one is $5$. Isolating before splitting avoids errors like $3x - 2 = \\pm 13$.",
                "zh": "先分离：$3|x| = 15$，即 $|x| = 5$。解为 $x = 5$ 和 $x = -5$；正数解是 $5$。先分离再拆分可避免 $3x - 2 = \\pm 13$ 之类的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement is equivalent to $|x| \\leq 2$?",
                "zh": "哪个命题与 $|x| \\leq 2$ 等价？"
              },
              "choices": [
                "$x \\leq 2$",
                "$x \\leq -2$ or $x \\geq 2$",
                "$-2 \\leq x \\leq 2$",
                "$x \\geq -2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$|x| \\leq 2$ means $x$ is within 2 units of zero — between $-2$ and $2$ inclusive. Less-than absolute value inequalities become \"and\" (between) statements.",
                "zh": "$|x| \\leq 2$ 表示 $x$ 与零的距离不超过 2——即在 $-2$ 与 $2$ 之间（含端点）。小于型绝对值不等式化为\"且\"（介于两者之间）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The solution of $|x + 1| > 4$ is:",
                "zh": "不等式 $|x + 1| > 4$ 的解集是："
              },
              "choices": [
                "$-5 < x < 3$",
                "$x < -5$ or $x > 3$",
                "$x > 3$ only",
                "$x < -3$ or $x > 5$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Greater-than splits into an \"or\": $x + 1 > 4$ gives $x > 3$; $x + 1 < -4$ gives $x < -5$. The solution is the two outside rays. (Distance view: $x$ is more than 4 units from $-1$.)",
                "zh": "大于型拆成\"或\"：$x + 1 > 4$ 得 $x > 3$；$x + 1 < -4$ 得 $x < -5$。解集是两条向外的射线。（距离观点：$x$ 到 $-1$ 的距离大于 4。）"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A part must measure 30 mm with tolerance 0.5 mm, so $|m - 30| \\leq 0.5$. What is the maximum acceptable measurement in mm? Give a decimal.",
                "zh": "某零件标准长度 30 毫米，容差 0.5 毫米，即 $|m - 30| \\leq 0.5$。合格测量值的最大值是多少毫米？请以小数作答。"
              },
              "answer": "30.5",
              "explanation": {
                "en": "The inequality becomes $29.5 \\leq m \\leq 30.5$, so the maximum acceptable measurement is $30.5$ mm — the center value plus the tolerance.",
                "zh": "不等式化为 $29.5 \\leq m \\leq 30.5$，故合格最大值为 $30.5$ 毫米——中心值加上容差。"
              }
            }
          ]
        },
        {
          "id": "graphing-absolute-value-piecewise",
          "title": "Graphing Absolute Value and Piecewise Functions",
          "titleZh": "绝对值函数与分段函数的图象",
          "content": [
            {
              "type": "h2",
              "en": "The V-Shape of Absolute Value",
              "zh": "绝对值函数的 V 形图象"
            },
            {
              "type": "p",
              "en": "The absolute value of a number is its distance from zero, so it is never negative: $|3| = 3$ and $|-3| = 3$. When we graph the function $y = |x|$, every negative input gets \"flipped\" to a positive output. The result is a V-shaped graph: the right half is the line $y = x$, the left half is the line $y = -x$, and the two halves meet at the origin, which is called the vertex.",
              "zh": "一个数的绝对值是它到零的距离，因此绝对值永远不为负：$|3| = 3$，$|-3| = 3$。画函数 $y = |x|$ 的图象时，每个负的输入都被\"翻转\"成正的输出。得到的图象呈 V 形：右半支是直线 $y = x$，左半支是直线 $y = -x$，两支在原点相交，这个点叫做顶点。"
            },
            {
              "type": "p",
              "en": "In fact, absolute value is our first important example of a function defined by two different rules on two different pieces of the number line:",
              "zh": "事实上，绝对值是我们遇到的第一个重要例子：它在数轴的两段上由两条不同的规则来定义："
            },
            {
              "type": "math",
              "tex": "|x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}"
            },
            {
              "type": "h3",
              "en": "Transformations: $y = a|x - h| + k$",
              "zh": "图象变换：$y = a|x - h| + k$"
            },
            {
              "type": "p",
              "en": "Every absolute value function of the form $y = a|x - h| + k$ is just the basic V, moved and reshaped. You can read the whole graph directly from the three numbers $a$, $h$, and $k$:",
              "zh": "形如 $y = a|x - h| + k$ 的绝对值函数都只是基本的 V 形经过平移和变形得到的。从 $a$、$h$、$k$ 这三个数就能直接读出整个图象的信息："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "The vertex is at $(h, k)$: the graph shifts $h$ units horizontally and $k$ units vertically.",
                  "zh": "顶点在 $(h, k)$：图象水平平移 $h$ 个单位，竖直平移 $k$ 个单位。"
                },
                {
                  "en": "If $a > 0$ the V opens upward (vertex is a minimum); if $a < 0$ it opens downward (vertex is a maximum).",
                  "zh": "若 $a > 0$，V 形开口向上（顶点是最低点）；若 $a < 0$，开口向下（顶点是最高点）。"
                },
                {
                  "en": "The size of $|a|$ controls the steepness: $|a| > 1$ makes the V narrower (a vertical stretch), $0 < |a| < 1$ makes it wider. From the vertex, the graph rises or falls $|a|$ units for each unit you move sideways.",
                  "zh": "$|a|$ 的大小决定陡峭程度：$|a| > 1$ 使 V 形变窄（竖直拉伸），$0 < |a| < 1$ 使它变宽。从顶点出发，每向旁边移动 1 个单位，图象上升或下降 $|a|$ 个单位。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: the sign of $h$ is the OPPOSITE of what you see. The graph of $y = |x + 3|$ is $y = |x - (-3)|$, so its vertex is at $(-3, 0)$ — it shifts 3 units LEFT, not right. Always rewrite the inside as $x - h$ before reading off the vertex.",
              "zh": "常见错误：$h$ 的符号与你看到的正好相反。$y = |x + 3|$ 即 $y = |x - (-3)|$，顶点在 $(-3, 0)$——图象向左平移 3 个单位，而不是向右。读顶点之前，先把括号内改写成 $x - h$ 的形式。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Graphing from vertex form",
                "zh": "例题 1：由顶点式画图"
              },
              "problem": {
                "en": "Describe and sketch the graph of $y = -2|x - 1| + 4$. Find the vertex, the direction it opens, and its $x$-intercepts.",
                "zh": "描述并画出 $y = -2|x - 1| + 4$ 的图象。求顶点、开口方向和 $x$ 轴交点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compare with $y = a|x - h| + k$: here $a = -2$, $h = 1$, $k = 4$. The vertex is $(1, 4)$, and since $a = -2 < 0$, the V opens downward. Because $|a| = 2$, the graph falls 2 units for every 1 unit you move away from the vertex.",
                  "zh": "与 $y = a|x - h| + k$ 对照：这里 $a = -2$，$h = 1$，$k = 4$。顶点是 $(1, 4)$；因为 $a = -2 < 0$，V 形开口向下。由于 $|a| = 2$，从顶点每向旁边移动 1 个单位，图象下降 2 个单位。"
                },
                {
                  "type": "p",
                  "en": "To sketch it, start at $(1, 4)$ and use the slope pattern: moving right, drop 2 per step to reach $(2, 2)$ and $(3, 0)$; moving left, drop 2 per step to reach $(0, 2)$ and $(-1, 0)$.",
                  "zh": "作图时从 $(1, 4)$ 出发，按斜率规律描点：向右每步下降 2，得到 $(2, 2)$ 和 $(3, 0)$；向左每步下降 2，得到 $(0, 2)$ 和 $(-1, 0)$。"
                },
                {
                  "type": "p",
                  "en": "From the sketch, the graph crosses the $x$-axis at $(-1, 0)$ and $(3, 0)$ — each intercept is 2 horizontal units from the vertex, because the graph must drop 4 units and it drops 2 per step.",
                  "zh": "由图可知，图象与 $x$ 轴交于 $(-1, 0)$ 和 $(3, 0)$——每个交点都与顶点水平相距 2 个单位，因为图象要下降 4 个单位，而每步下降 2。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Reading a Piecewise Function",
              "zh": "认识分段函数"
            },
            {
              "type": "p",
              "en": "A piecewise function uses different formulas on different parts of its domain. Each line of the definition has two parts: a formula, and the condition telling you which inputs that formula applies to. For example:",
              "zh": "分段函数在定义域的不同部分使用不同的公式。定义中的每一行包含两部分：一个公式，以及说明该公式适用于哪些输入的条件。例如："
            },
            {
              "type": "math",
              "tex": "f(x) = \\begin{cases} x + 5, & x < -1 \\\\ x^2, & -1 \\le x \\le 2 \\\\ 6, & x > 2 \\end{cases}"
            },
            {
              "type": "p",
              "en": "To evaluate a piecewise function, first find which condition your input satisfies, then use ONLY that branch. Here $f(-4) = -4 + 5 = 1$ (since $-4 < -1$), $f(2) = 2^2 = 4$ (since $-1 \\le 2 \\le 2$), and $f(10) = 6$ (since $10 > 2$). Notice that an input like $2$ satisfies exactly one condition — the conditions never overlap.",
              "zh": "求分段函数的值时，先判断输入满足哪个条件，然后只用那一支的公式。这里 $f(-4) = -4 + 5 = 1$（因为 $-4 < -1$），$f(2) = 2^2 = 4$（因为 $-1 \\le 2 \\le 2$），$f(10) = 6$（因为 $10 > 2$）。注意像 $2$ 这样的输入只满足一个条件——各条件之间不会重叠。"
            },
            {
              "type": "h3",
              "en": "Graphing Branch by Branch",
              "zh": "逐段作图"
            },
            {
              "type": "p",
              "en": "To graph a piecewise function, graph each branch separately, but only over the interval where its condition holds — then erase (or never draw) the rest of that line or curve. At each boundary point, mark a closed (filled) dot if the endpoint is included ($\\le$ or $\\ge$) and an open circle if it is not ($<$ or $>$).",
              "zh": "画分段函数的图象时，把每一支单独画出，但只画在其条件成立的区间上——区间之外的部分不画。在每个分界点处，若端点包含在内（$\\le$ 或 $\\ge$）画实心点，若不包含（$<$ 或 $>$）画空心圈。"
            },
            {
              "type": "note",
              "en": "Test tip: at any boundary $x$-value, a graph that is a function has AT MOST one filled dot. If your graph shows two filled dots stacked at the same $x$, one branch's inequality must be strict — check the definition again. Graders look at those dots first!",
              "zh": "考试提示：在任何分界的 $x$ 值处，函数图象最多只能有一个实心点。如果你的图在同一个 $x$ 处叠着两个实心点，说明某一支的不等号应当是严格的——请重新核对定义。阅卷老师最先看的就是这些端点！"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Graphing a piecewise function",
                "zh": "例题 2：画分段函数的图象"
              },
              "problem": {
                "en": "Graph $g(x) = \\begin{cases} -x + 1, & x < 2 \\\\ 2x - 5, & x \\ge 2 \\end{cases}$ and find $g(2)$.",
                "zh": "画出 $g(x) = \\begin{cases} -x + 1, & x < 2 \\\\ 2x - 5, & x \\ge 2 \\end{cases}$ 的图象，并求 $g(2)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First branch: the line $y = -x + 1$, drawn only for $x < 2$. It passes through $(0, 1)$ and $(1, 0)$ and approaches $(2, -1)$; since $x = 2$ is NOT included, put an open circle at $(2, -1)$.",
                  "zh": "第一支：直线 $y = -x + 1$，只画 $x < 2$ 的部分。它经过 $(0, 1)$ 和 $(1, 0)$，逼近 $(2, -1)$；由于不包含 $x = 2$，在 $(2, -1)$ 处画空心圈。"
                },
                {
                  "type": "p",
                  "en": "Second branch: the line $y = 2x - 5$, drawn only for $x \\ge 2$. It starts at $(2, -1)$ with a closed dot and rises through $(3, 1)$ and $(4, 3)$.",
                  "zh": "第二支：直线 $y = 2x - 5$，只画 $x \\ge 2$ 的部分。它从 $(2, -1)$ 处的实心点出发，经过 $(3, 1)$ 和 $(4, 3)$ 上升。"
                },
                {
                  "type": "p",
                  "en": "Since $x = 2$ satisfies the condition $x \\ge 2$, use the second branch: $g(2) = 2(2) - 5 = -1$. (Here the open circle and closed dot happen to land on the same point, so the graph has no break — but that is a coincidence, not a rule.)",
                  "zh": "因为 $x = 2$ 满足条件 $x \\ge 2$，用第二支：$g(2) = 2(2) - 5 = -1$。（这里空心圈与实心点恰好重合，所以图象没有断开——但这只是巧合，不是规律。）"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Piecewise Models in Real Life",
              "zh": "现实中的分段模型"
            },
            {
              "type": "p",
              "en": "Many real-world rules are naturally piecewise. Income tax uses brackets: you might pay $10\\%$ on your first $\\$10{,}000$ of income and $20\\%$ only on the part ABOVE $\\$10{,}000$. Shipping companies charge one flat rate up to a weight limit, then a higher rate beyond it. Parking garages charge one price for the first hour and another for each additional hour.",
              "zh": "现实中的许多规则天然就是分段的。所得税采用税级：你可能对收入的前 $\\$10{,}000$ 缴 $10\\%$ 的税，而只对超过 $\\$10{,}000$ 的部分缴 $20\\%$。快递公司在重量限额以内收固定费用，超出后按更高的费率收费。停车场对第一小时收一个价，之后每小时另收一个价。"
            },
            {
              "type": "p",
              "en": "For example, the tax owed on an income of $x$ dollars under those two brackets is $T(x) = 0.10x$ for $0 \\le x \\le 10{,}000$, and $T(x) = 1000 + 0.20(x - 10{,}000)$ for $x > 10{,}000$. The key honors-level insight: the higher rate applies only to the amount over the cutoff, which is why the second formula contains $(x - 10{,}000)$, not $x$.",
              "zh": "例如，在上述两个税级下，收入为 $x$ 美元时应缴的税为：当 $0 \\le x \\le 10{,}000$ 时 $T(x) = 0.10x$；当 $x > 10{,}000$ 时 $T(x) = 1000 + 0.20(x - 10{,}000)$。荣誉班要掌握的关键点是：较高的税率只作用于超过分界线的部分，所以第二个公式里是 $(x - 10{,}000)$ 而不是 $x$。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the vertex of the graph of $y = |x - 3| + 2$?",
                "zh": "函数 $y = |x - 3| + 2$ 图象的顶点是哪个点？"
              },
              "choices": [
                "$(-3, 2)$",
                "$(3, -2)$",
                "$(3, 2)$",
                "$(-3, -2)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "In $y = a|x - h| + k$ the vertex is $(h, k)$. Here the inside is already $x - 3$, so $h = 3$, and $k = 2$, giving $(3, 2)$. The trap answer $(-3, 2)$ comes from flipping the sign of $h$ the wrong way — the sign flips for $|x + 3|$, not $|x - 3|$.",
                "zh": "在 $y = a|x - h| + k$ 中顶点是 $(h, k)$。这里括号内已是 $x - 3$，所以 $h = 3$，$k = 2$，顶点为 $(3, 2)$。陷阱选项 $(-3, 2)$ 来自把 $h$ 的符号弄反——只有 $|x + 3|$ 才需要变号，$|x - 3|$ 不需要。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Compared with the graph of $y = |x|$, the graph of $y = -2|x + 1| + 5$ is:",
                "zh": "与 $y = |x|$ 的图象相比，$y = -2|x + 1| + 5$ 的图象是："
              },
              "choices": [
                "narrower, opening downward, vertex $(-1, 5)$",
                "wider, opening downward, vertex $(1, 5)$",
                "narrower, opening upward, vertex $(-1, 5)$",
                "narrower, opening downward, vertex $(1, -5)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Here $a = -2$: since $a < 0$ the V opens downward, and since $|a| = 2 > 1$ it is narrower (steeper). Rewriting $x + 1 = x - (-1)$ gives $h = -1$, so the vertex is $(-1, 5)$. The distractor with vertex $(1, 5)$ tempts anyone who reads $+1$ as a shift to the right.",
                "zh": "这里 $a = -2$：因为 $a < 0$，V 形开口向下；因为 $|a| = 2 > 1$，图象更窄（更陡）。把 $x + 1$ 写成 $x - (-1)$ 得 $h = -1$，顶点为 $(-1, 5)$。顶点为 $(1, 5)$ 的干扰项专门迷惑把 $+1$ 当作向右平移的同学。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Let $f(x) = \\begin{cases} x^2, & x < 1 \\\\ 2x + 3, & x \\ge 1 \\end{cases}$. Find $f(-2) + f(3)$. Give your answer as an integer.",
                "zh": "设 $f(x) = \\begin{cases} x^2, & x < 1 \\\\ 2x + 3, & x \\ge 1 \\end{cases}$。求 $f(-2) + f(3)$。请以整数作答。"
              },
              "answer": "13",
              "explanation": {
                "en": "Since $-2 < 1$, use the first branch: $f(-2) = (-2)^2 = 4$. Since $3 \\ge 1$, use the second branch: $f(3) = 2(3) + 3 = 9$. So $f(-2) + f(3) = 4 + 9 = 13$. A common error is plugging both inputs into the same branch.",
                "zh": "因为 $-2 < 1$，用第一支：$f(-2) = (-2)^2 = 4$。因为 $3 \\ge 1$，用第二支：$f(3) = 2(3) + 3 = 9$。所以 $f(-2) + f(3) = 4 + 9 = 13$。常见错误是把两个输入都代入同一支。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Consider $f(x) = \\begin{cases} -x, & x < 0 \\\\ x + 2, & x \\ge 0 \\end{cases}$. Which statement correctly describes the graph at $x = 0$?",
                "zh": "考虑 $f(x) = \\begin{cases} -x, & x < 0 \\\\ x + 2, & x \\ge 0 \\end{cases}$。关于图象在 $x = 0$ 处的情况，哪个说法正确？"
              },
              "choices": [
                "closed dots at both $(0, 0)$ and $(0, 2)$",
                "an open circle at $(0, 0)$ and a closed dot at $(0, 2)$",
                "a closed dot at $(0, 0)$ and an open circle at $(0, 2)$",
                "the two branches meet, so no dots are needed"
              ],
              "answer": 1,
              "explanation": {
                "en": "The first branch uses the strict inequality $x < 0$, so its endpoint $(0, 0)$ is NOT included: open circle. The second branch has $x \\ge 0$, so $(0, 2)$ is included: closed dot, and $f(0) = 2$. Two closed dots at $x = 0$ would give one input two outputs — not a function.",
                "zh": "第一支的条件是严格不等式 $x < 0$，端点 $(0, 0)$ 不包含在内：画空心圈。第二支是 $x \\ge 0$，$(0, 2)$ 包含在内：画实心点，且 $f(0) = 2$。若在 $x = 0$ 处有两个实心点，一个输入就对应两个输出——那就不是函数了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the vertex of the graph of $y = -3|x + 4| - 2$. Give your answer as coordinates in the form (h,k).",
                "zh": "求 $y = -3|x + 4| - 2$ 图象的顶点。请以坐标 (h,k) 的形式作答。"
              },
              "answer": "(-4,-2)",
              "accept": [
                "(-4, -2)"
              ],
              "explanation": {
                "en": "Rewrite $x + 4$ as $x - (-4)$, so $h = -4$ and $k = -2$: the vertex is $(-4, -2)$. The value $a = -3$ affects the direction and steepness, but not the vertex location.",
                "zh": "把 $x + 4$ 写成 $x - (-4)$，得 $h = -4$，$k = -2$：顶点为 $(-4, -2)$。$a = -3$ 只影响开口方向和陡峭程度，不影响顶点位置。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A parking garage charges $\\$3$ for the first hour (or any part of it) and $\\$2$ for each additional hour (or any part of it). Marco parks for 3.5 hours. Using the piecewise cost rule, how much does he pay?",
                "zh": "某停车场第一小时（不足一小时按一小时计）收费 $\\$3$，之后每小时（不足一小时按一小时计）收费 $\\$2$。Marco 停车 3.5 小时。按这个分段收费规则，他应付多少钱？"
              },
              "choices": [
                "$\\$7$",
                "$\\$8$",
                "$\\$9$",
                "$\\$10$"
              ],
              "answer": 2,
              "explanation": {
                "en": "3.5 hours means the first hour plus 2.5 additional hours, which rounds up to 3 additional (charged) hours: $3 + 2(3) = 9$ dollars. The distractor $\\$8$ comes from charging only 2.5 additional hours at $\\$2$ each, forgetting that \"any part of an hour\" counts as a whole hour.",
                "zh": "3.5 小时即第一小时加上 2.5 个额外小时，\"不足一小时按一小时计\"要向上取整为 3 个额外计费小时：$3 + 2(3) = 9$ 美元。干扰项 $\\$8$ 来自只按 2.5 小时、每小时 $\\$2$ 计费，忘了不足一小时也按整小时收费。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: the graph of $g(x) = a|x - 1| + 8$ has $x$-intercepts at $x = -3$ and $x = 5$. Find the value of $a$. Give your answer as an integer.",
                "zh": "挑战题：$g(x) = a|x - 1| + 8$ 的图象与 $x$ 轴交于 $x = -3$ 和 $x = 5$。求 $a$ 的值。请以整数作答。"
              },
              "answer": "-2",
              "accept": [
                "-2.0"
              ],
              "explanation": {
                "en": "The vertex is $(1, 8)$, which lies above the $x$-axis, so the V must open downward ($a < 0$). Each intercept is 4 horizontal units from $x = 1$, and the graph must drop 8 units over those 4 steps, so it falls 2 per step: $a = -2$. Check with $x = 5$: $g(5) = -2|5 - 1| + 8 = -8 + 8 = 0$. Answering $2$ ignores the direction the graph must open.",
                "zh": "顶点是 $(1, 8)$，位于 $x$ 轴上方，所以 V 形必须开口向下（$a < 0$）。每个交点与 $x = 1$ 水平相距 4 个单位，而图象要在这 4 步内下降 8 个单位，即每步下降 2：$a = -2$。用 $x = 5$ 验证：$g(5) = -2|5 - 1| + 8 = -8 + 8 = 0$。答 $2$ 就是忽略了图象必须开口向下。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-11-exponents-radicals",
      "title": "Unit 11: Exponents & Radicals",
      "titleZh": "第十一单元：指数与根式",
      "lessons": [
        {
          "id": "exponent-properties",
          "title": "Properties of Exponents",
          "titleZh": "指数运算法则",
          "content": [
            {
              "type": "h2",
              "en": "Exponents Are Repeated Multiplication",
              "zh": "指数就是重复相乘"
            },
            {
              "type": "p",
              "en": "An exponent counts how many copies of a base are multiplied together: $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Every rule in this lesson comes from that one idea. If a rule ever slips your mind, do not guess — expand the powers into their factors and count. The rules are shortcuts for counting factors, not magic formulas.",
              "zh": "指数表示把底数连乘多少次：$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$。本课的每一条法则都来自这一个想法。如果哪条法则记不清了，不要瞎猜——把幂展开成因数再数一数。法则只是\"数因数\"的捷径，不是魔法公式。"
            },
            {
              "type": "h3",
              "en": "The Product, Quotient, and Power Rules",
              "zh": "同底数幂相乘、相除与幂的乘方"
            },
            {
              "type": "p",
              "en": "Multiply powers with the same base by counting all the factors together. For example, $x^3 \\cdot x^4$ is $(x \\cdot x \\cdot x)(x \\cdot x \\cdot x \\cdot x)$ — seven $x$'s in a row — so the exponents add:",
              "zh": "同底数的幂相乘，就是把所有因数放在一起数。例如 $x^3 \\cdot x^4 = (x \\cdot x \\cdot x)(x \\cdot x \\cdot x \\cdot x)$——一共 7 个 $x$ 连乘——所以指数相加："
            },
            {
              "type": "math",
              "tex": "x^m \\cdot x^n = x^{m+n}"
            },
            {
              "type": "p",
              "en": "Dividing cancels matching factors from top and bottom, so the exponents subtract. Raising a power to a power repeats a whole group, so the exponents multiply: $(x^2)^3 = x^2 \\cdot x^2 \\cdot x^2 = x^6$.",
              "zh": "相除时分子分母中相同的因数约掉，所以指数相减。幂的乘方是把整组因数重复几遍，所以指数相乘：$(x^2)^3 = x^2 \\cdot x^2 \\cdot x^2 = x^6$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Product rule: $x^m \\cdot x^n = x^{m+n}$ (same base — add exponents).",
                  "zh": "同底数幂相乘：$x^m \\cdot x^n = x^{m+n}$（底数相同，指数相加）。"
                },
                {
                  "en": "Quotient rule: $\\frac{x^m}{x^n} = x^{m-n}$ for $x \\neq 0$ (subtract top minus bottom).",
                  "zh": "同底数幂相除：当 $x \\neq 0$ 时 $\\frac{x^m}{x^n} = x^{m-n}$（分子指数减分母指数）。"
                },
                {
                  "en": "Power rule: $(x^m)^n = x^{mn}$ (a power of a power — multiply exponents).",
                  "zh": "幂的乘方：$(x^m)^n = x^{mn}$（乘方再乘方，指数相乘）。"
                },
                {
                  "en": "Power of a product/quotient: $(xy)^n = x^n y^n$ and $\\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n}$.",
                  "zh": "积与商的乘方：$(xy)^n = x^n y^n$，$\\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n}$。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: $2^3 \\cdot 2^4 \\neq 4^7$. Adding exponents does NOT change the base: $2^3 \\cdot 2^4 = 2^7 = 128$. Also keep the rules straight: $(x^2)^3 = x^6$ (multiply exponents) but $x^2 \\cdot x^3 = x^5$ (add exponents). When in doubt, expand and count the factors.",
              "zh": "常见错误：$2^3 \\cdot 2^4 \\neq 4^7$。指数相加时底数不变：$2^3 \\cdot 2^4 = 2^7 = 128$。还要分清两条法则：$(x^2)^3 = x^6$（指数相乘），而 $x^2 \\cdot x^3 = x^5$（指数相加）。拿不准时，展开数因数。"
            },
            {
              "type": "h3",
              "en": "Zero and Negative Exponents",
              "zh": "零指数与负指数"
            },
            {
              "type": "p",
              "en": "What should $2^0$ mean? Follow the pattern: each time the exponent drops by 1, the value is divided by 2. So $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, and continuing the pattern, $2^0 = 1$. Keep going: $2^{-1} = \\frac{1}{2}$, $2^{-2} = \\frac{1}{4}$. Negative exponents are not negative numbers — they are reciprocals.",
              "zh": "$2^0$ 应该是什么？看规律：指数每减少 1，值就除以 2。于是 $2^3 = 8$，$2^2 = 4$，$2^1 = 2$，按规律继续，$2^0 = 1$。再往下：$2^{-1} = \\frac{1}{2}$，$2^{-2} = \\frac{1}{4}$。负指数不是负数——它表示倒数。"
            },
            {
              "type": "math",
              "tex": "x^0 = 1 \\quad (x \\neq 0), \\qquad x^{-n} = \\frac{1}{x^n}"
            },
            {
              "type": "p",
              "en": "This definition is forced on us if we want the quotient rule to keep working: $\\frac{x^3}{x^3} = x^{3-3} = x^0$, and any nonzero number divided by itself is 1, so $x^0$ must equal 1.",
              "zh": "如果想让同底数幂相除的法则继续成立，这个定义就是必然的：$\\frac{x^3}{x^3} = x^{3-3} = x^0$，而任何非零数除以自身都等于 1，所以 $x^0$ 必须等于 1。"
            },
            {
              "type": "note",
              "en": "Test tip: $-3^2$ and $(-3)^2$ are different! Without parentheses the exponent applies only to the 3, so $-3^2 = -9$, while $(-3)^2 = 9$. Likewise $2x^{-3}$ means $\\frac{2}{x^3}$ — the negative exponent moves only $x^3$, not the 2.",
              "zh": "考试提示：$-3^2$ 和 $(-3)^2$ 不一样！没有括号时指数只作用于 3，所以 $-3^2 = -9$，而 $(-3)^2 = 9$。同样，$2x^{-3}$ 表示 $\\frac{2}{x^3}$——负指数只把 $x^3$ 移到分母，2 不动。"
            },
            {
              "type": "h3",
              "en": "Scientific Notation",
              "zh": "科学记数法"
            },
            {
              "type": "p",
              "en": "Scientific notation writes a number as $a \\times 10^n$ with $1 \\le a < 10$. The exponent rules make big-number arithmetic fast: multiply the front numbers, and use the product rule on the powers of 10. If the front number ends up 10 or more (or less than 1), adjust: $48 \\times 10^5 = 4.8 \\times 10^6$.",
              "zh": "科学记数法把数写成 $a \\times 10^n$ 的形式，其中 $1 \\le a < 10$。指数法则让大数运算变得快捷：前面的数相乘，10 的幂用同底数幂相乘法则处理。如果前面的数达到 10 或小于 1，要调整：$48 \\times 10^5 = 4.8 \\times 10^6$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: A multi-step simplification",
                "zh": "例题 1：多步化简"
              },
              "problem": {
                "en": "Simplify $\\frac{(2x^3 y)^2 \\cdot x^{-4}}{4y^5}$. Write the answer with positive exponents.",
                "zh": "化简 $\\frac{(2x^3 y)^2 \\cdot x^{-4}}{4y^5}$，结果用正指数表示。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First apply the power of a product rule to the numerator: square each factor inside the parentheses.",
                  "zh": "先对分子用积的乘方法则：把括号内的每个因数分别平方。"
                },
                {
                  "type": "math",
                  "tex": "(2x^3 y)^2 = 2^2 (x^3)^2 y^2 = 4x^6 y^2"
                },
                {
                  "type": "p",
                  "en": "Multiply by $x^{-4}$ using the product rule: $x^6 \\cdot x^{-4} = x^{6+(-4)} = x^2$. The expression is now $\\frac{4x^2 y^2}{4y^5}$.",
                  "zh": "再用同底数幂相乘法则乘上 $x^{-4}$：$x^6 \\cdot x^{-4} = x^{6+(-4)} = x^2$。式子变为 $\\frac{4x^2 y^2}{4y^5}$。"
                },
                {
                  "type": "p",
                  "en": "Cancel the 4's and apply the quotient rule to $y$: $y^{2-5} = y^{-3}$, which becomes $\\frac{1}{y^3}$ with a positive exponent.",
                  "zh": "约去 4，对 $y$ 用同底数幂相除法则：$y^{2-5} = y^{-3}$，写成正指数就是 $\\frac{1}{y^3}$。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{(2x^3 y)^2 \\cdot x^{-4}}{4y^5} = \\frac{x^2}{y^3}"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Scientific notation in action",
                "zh": "例题 2：科学记数法的应用"
              },
              "problem": {
                "en": "Light travels about $3 \\times 10^5$ kilometers per second. The Sun is about $1.5 \\times 10^8$ kilometers from Earth. How many seconds does sunlight take to reach Earth?",
                "zh": "光速约为每秒 $3 \\times 10^5$ 千米。太阳距地球约 $1.5 \\times 10^8$ 千米。阳光到达地球需要多少秒？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Time equals distance divided by speed. Divide the front numbers and the powers of 10 separately, using the quotient rule.",
                  "zh": "时间等于路程除以速度。前面的数与 10 的幂分开相除，用同底数幂相除法则。"
                },
                {
                  "type": "math",
                  "tex": "\\frac{1.5 \\times 10^8}{3 \\times 10^5} = \\frac{1.5}{3} \\times 10^{8-5} = 0.5 \\times 10^3"
                },
                {
                  "type": "p",
                  "en": "Adjust to proper scientific notation: $0.5 \\times 10^3 = 5 \\times 10^2 = 500$. Sunlight takes about 500 seconds — a little over 8 minutes — to reach Earth.",
                  "zh": "调整为规范的科学记数法：$0.5 \\times 10^3 = 5 \\times 10^2 = 500$。阳光大约需要 500 秒——8 分钟多一点——才能到达地球。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Simplify $x^5 \\cdot x^3$.",
                "zh": "化简 $x^5 \\cdot x^3$。"
              },
              "choices": [
                "$x^{15}$",
                "$x^8$",
                "$2x^8$",
                "$x^2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Same base, so add the exponents: $x^{5+3} = x^8$. Choosing $x^{15}$ mixes this up with the power rule $(x^5)^3$, where the exponents multiply.",
                "zh": "底数相同，指数相加：$x^{5+3} = x^8$。选 $x^{15}$ 是把它和幂的乘方 $(x^5)^3$ 弄混了——那时指数才相乘。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\frac{2^7}{2^4}$. Give your answer as an integer.",
                "zh": "计算 $\\frac{2^7}{2^4}$。请以整数作答。"
              },
              "answer": "8",
              "explanation": {
                "en": "Subtract exponents: $2^{7-4} = 2^3 = 8$. You can check by expanding: three factors of 2 survive after canceling four matching pairs.",
                "zh": "指数相减：$2^{7-4} = 2^3 = 8$。可以展开验证：约去 4 对相同因数后剩下 3 个 2 相乘。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals $2^3 \\cdot 2^4$?",
                "zh": "下列哪个式子等于 $2^3 \\cdot 2^4$？"
              },
              "choices": [
                "$4^7$",
                "$4^{12}$",
                "$2^{12}$",
                "$2^7$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Adding exponents never changes the base: $2^3 \\cdot 2^4 = 2^7 = 128$. The trap answer $4^7$ wrongly \"adds the bases too\" — but $4^7 = 16384$, nowhere near 128.",
                "zh": "指数相加时底数不变：$2^3 \\cdot 2^4 = 2^7 = 128$。陷阱选项 $4^7$ 错误地\"把底数也加了\"——其实 $4^7 = 16384$，与 128 相差极远。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $5^0 + 3^{-2}$. Give your answer as a fraction a/b.",
                "zh": "计算 $5^0 + 3^{-2}$。请以分数 a/b 作答。"
              },
              "answer": "10/9",
              "accept": [
                "1 1/9"
              ],
              "explanation": {
                "en": "$5^0 = 1$ (any nonzero base to the zero power is 1), and $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$. So the sum is $1 + \\frac{1}{9} = \\frac{10}{9}$. Remember: a negative exponent means reciprocal, never a negative value.",
                "zh": "$5^0 = 1$（任何非零数的零次幂都是 1），$3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$。所以和为 $1 + \\frac{1}{9} = \\frac{10}{9}$。记住：负指数表示倒数，绝不是负数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\frac{(3a^2 b)^3}{9a^4 b^5}$ and write it with positive exponents.",
                "zh": "化简 $\\frac{(3a^2 b)^3}{9a^4 b^5}$，并用正指数表示。"
              },
              "choices": [
                "$\\frac{3a^2}{b^2}$",
                "$\\frac{a^2 b^2}{3}$",
                "$3a^2 b^2$",
                "$\\frac{27a^2}{b^2}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Cube every factor: $(3a^2 b)^3 = 27a^6 b^3$. Then divide: $\\frac{27}{9} = 3$, $a^{6-4} = a^2$, $b^{3-5} = b^{-2} = \\frac{1}{b^2}$. Result: $\\frac{3a^2}{b^2}$. The answer $\\frac{27a^2}{b^2}$ forgets to cube the 3 correctly and then divide by 9 — cubing the coefficient is the step most often skipped.",
                "zh": "每个因数都要立方：$(3a^2 b)^3 = 27a^6 b^3$。再相除：$\\frac{27}{9} = 3$，$a^{6-4} = a^2$，$b^{3-5} = b^{-2} = \\frac{1}{b^2}$。结果是 $\\frac{3a^2}{b^2}$。选 $\\frac{27a^2}{b^2}$ 是忘了把系数 27 除以 9——系数的立方与约分是最容易漏掉的一步。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A bacteria colony starts with $6 \\times 10^3$ cells and grows to $2^{10}$ times its original size. Which is the best estimate of the final population?",
                "zh": "某细菌群落初始有 $6 \\times 10^3$ 个细胞，之后增长到原来的 $2^{10}$ 倍。最终数量的最佳估计是哪个？"
              },
              "choices": [
                "$6 \\times 10^{13}$",
                "$1.2 \\times 10^5$",
                "$6 \\times 10^6$",
                "$2 \\times 10^{4}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$2^{10} = 1024 \\approx 10^3$, so the population is about $(6 \\times 10^3)(10^3) = 6 \\times 10^6$. The trap $6 \\times 10^{13}$ comes from writing $2^{10}$ as $10^{10}$ — changing the base 2 to base 10 is not allowed!",
                "zh": "$2^{10} = 1024 \\approx 10^3$，所以数量约为 $(6 \\times 10^3)(10^3) = 6 \\times 10^6$。陷阱选项 $6 \\times 10^{13}$ 是把 $2^{10}$ 当成了 $10^{10}$——底数 2 不能随便换成 10！"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: if $\\frac{4^x \\cdot 4^5}{4^2} = 4^9$, what is $x$? Give an integer.",
                "zh": "挑战题：若 $\\frac{4^x \\cdot 4^5}{4^2} = 4^9$，求 $x$。请填一个整数。"
              },
              "answer": "6",
              "explanation": {
                "en": "Combine the left side with the product and quotient rules: $4^{x+5-2} = 4^{x+3}$. Since the bases match, the exponents must be equal: $x + 3 = 9$, so $x = 6$. Turning an exponent equation into a plain equation like this is a key honors skill.",
                "zh": "先用同底数幂相乘、相除法则合并左边：$4^{x+5-2} = 4^{x+3}$。底数相同，指数必须相等：$x + 3 = 9$，故 $x = 6$。把指数方程化为普通方程是荣誉班的关键技能。"
              }
            }
          ]
        },
        {
          "id": "radicals-and-rational-exponents",
          "title": "Square Roots, Radicals, and Rational Exponents",
          "titleZh": "根式与分数指数",
          "content": [
            {
              "type": "h2",
              "en": "Undoing a Square",
              "zh": "平方的逆运算"
            },
            {
              "type": "p",
              "en": "The square root of a number is the nonnegative number that squares to it: $\\sqrt{49} = 7$ because $7^2 = 49$. The symbol $\\sqrt{\\ }$ is called a radical, and the number inside is the radicand. Perfect squares like $1, 4, 9, 16, 25, 36, \\ldots$ have whole-number square roots; roots like $\\sqrt{7}$ are irrational, and we usually leave them in exact radical form rather than rounding.",
              "zh": "一个数的算术平方根是平方后等于它的非负数：$\\sqrt{49} = 7$，因为 $7^2 = 49$。符号 $\\sqrt{\\ }$ 叫做根号，根号内的数叫被开方数。完全平方数 $1, 4, 9, 16, 25, 36, \\ldots$ 的平方根是整数；像 $\\sqrt{7}$ 这样的根是无理数，我们通常保留精确的根式形式而不取近似值。"
            },
            {
              "type": "h3",
              "en": "Simplifying Square Roots",
              "zh": "化简二次根式"
            },
            {
              "type": "p",
              "en": "The key property is that a root of a product splits into a product of roots:",
              "zh": "关键性质是：积的算术平方根等于算术平方根的积："
            },
            {
              "type": "math",
              "tex": "\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b} \\quad (a, b \\ge 0)"
            },
            {
              "type": "p",
              "en": "To simplify a square root, find the largest perfect square hiding inside the radicand and pull it out. For $\\sqrt{72}$: since $72 = 36 \\cdot 2$, we get $\\sqrt{72} = \\sqrt{36}\\,\\sqrt{2} = 6\\sqrt{2}$. If you only spot a smaller perfect square, keep going: $\\sqrt{72} = \\sqrt{4}\\,\\sqrt{18} = 2\\sqrt{18} = 2 \\cdot 3\\sqrt{2} = 6\\sqrt{2}$ — same answer, just more steps.",
              "zh": "化简二次根式时，找出被开方数中最大的完全平方因数并把它开出来。以 $\\sqrt{72}$ 为例：$72 = 36 \\cdot 2$，所以 $\\sqrt{72} = \\sqrt{36}\\,\\sqrt{2} = 6\\sqrt{2}$。如果一开始只发现较小的完全平方因数，就继续化简：$\\sqrt{72} = \\sqrt{4}\\,\\sqrt{18} = 2\\sqrt{18} = 2 \\cdot 3\\sqrt{2} = 6\\sqrt{2}$——答案相同，只是步骤多一些。"
            },
            {
              "type": "note",
              "en": "Common mistake: the root of a SUM does not split! $\\sqrt{9 + 16} = \\sqrt{25} = 5$, but $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$. The splitting property works only for multiplication and division, never for addition or subtraction.",
              "zh": "常见错误：和的平方根不能拆开！$\\sqrt{9 + 16} = \\sqrt{25} = 5$，而 $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$。拆分性质只对乘法和除法成立，对加减法绝不成立。"
            },
            {
              "type": "h3",
              "en": "Adding and Multiplying Radicals",
              "zh": "根式的加法与乘法"
            },
            {
              "type": "p",
              "en": "Radicals add just like variables: $3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$, the same way $3x + 2x = 5x$. But $3\\sqrt{5} + 2\\sqrt{3}$ cannot be combined — the radicands differ, just as $3x + 2y$ cannot be combined. Sometimes simplifying first reveals like radicals: $\\sqrt{8} + \\sqrt{18} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$.",
              "zh": "根式的加法和变量一样：$3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$，正如 $3x + 2x = 5x$。但 $3\\sqrt{5} + 2\\sqrt{3}$ 不能合并——被开方数不同，就像 $3x + 2y$ 不能合并一样。有时先化简才能看出同类根式：$\\sqrt{8} + \\sqrt{18} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$。"
            },
            {
              "type": "p",
              "en": "To multiply, use the product property in the other direction: $\\sqrt{6} \\cdot \\sqrt{10} = \\sqrt{60} = \\sqrt{4}\\,\\sqrt{15} = 2\\sqrt{15}$. Multiply coefficients with coefficients and radicands with radicands: $2\\sqrt{3} \\cdot 5\\sqrt{3} = 10 \\cdot 3 = 30$.",
              "zh": "相乘时反向使用积的性质：$\\sqrt{6} \\cdot \\sqrt{10} = \\sqrt{60} = \\sqrt{4}\\,\\sqrt{15} = 2\\sqrt{15}$。系数与系数相乘，被开方数与被开方数相乘：$2\\sqrt{3} \\cdot 5\\sqrt{3} = 10 \\cdot 3 = 30$。"
            },
            {
              "type": "h3",
              "en": "Cube Roots and Rational Exponents",
              "zh": "立方根与分数指数"
            },
            {
              "type": "p",
              "en": "A cube root undoes cubing: $\\sqrt[3]{64} = 4$ because $4^3 = 64$. Unlike square roots, cube roots of negative numbers are fine: $\\sqrt[3]{-27} = -3$ since $(-3)^3 = -27$.",
              "zh": "立方根是立方的逆运算：$\\sqrt[3]{64} = 4$，因为 $4^3 = 64$。与平方根不同，负数可以开立方：$\\sqrt[3]{-27} = -3$，因为 $(-3)^3 = -27$。"
            },
            {
              "type": "p",
              "en": "What could $9^{1/2}$ mean? If the product rule is to keep working, then $9^{1/2} \\cdot 9^{1/2} = 9^{1/2 + 1/2} = 9^1 = 9$. So $9^{1/2}$ is a number that multiplies by itself to give 9 — that is exactly $\\sqrt{9} = 3$. The definition of rational exponents is chosen precisely so the exponent rules never break:",
              "zh": "$9^{1/2}$ 该是什么意思？如果同底数幂相乘的法则要继续成立，那么 $9^{1/2} \\cdot 9^{1/2} = 9^{1/2 + 1/2} = 9^1 = 9$。所以 $9^{1/2}$ 是一个自乘等于 9 的数——这正是 $\\sqrt{9} = 3$。分数指数的定义正是为了让指数法则永不失效："
            },
            {
              "type": "math",
              "tex": "x^{1/n} = \\sqrt[n]{x}, \\qquad x^{m/n} = \\sqrt[n]{x^m} = \\left(\\sqrt[n]{x}\\right)^m"
            },
            {
              "type": "p",
              "en": "The denominator of the exponent is the root; the numerator is the power. For $8^{2/3}$, taking the root first keeps the numbers small: $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Every exponent rule from before — product, quotient, power — works with fractions in the exponents.",
              "zh": "指数的分母表示开几次方，分子表示乘几次方。计算 $8^{2/3}$ 时先开方能让数字保持较小：$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$。之前的每一条指数法则——相乘、相除、乘方——对分数指数照样成立。"
            },
            {
              "type": "note",
              "en": "Test tip: to convert between notations, read the fraction as \"power over root\": $\\sqrt[4]{x^3} = x^{3/4}$. A common slip is flipping the fraction and writing $x^{4/3}$ — remember, the root index always goes in the denominator, \"down in the basement.\"",
              "zh": "考试提示：在两种记法之间转换时，把分数读作\"分子是乘方、分母是开方\"：$\\sqrt[4]{x^3} = x^{3/4}$。常见失误是把分数写反成 $x^{4/3}$——记住，根指数永远在分母，\"住在地下室\"。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Simplify, then combine",
                "zh": "例题 1：先化简，再合并"
              },
              "problem": {
                "en": "Simplify $\\sqrt{50} + 3\\sqrt{2} - \\sqrt{32}$.",
                "zh": "化简 $\\sqrt{50} + 3\\sqrt{2} - \\sqrt{32}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Simplify each radical by factoring out the largest perfect square: $50 = 25 \\cdot 2$ and $32 = 16 \\cdot 2$.",
                  "zh": "把每个根式中最大的完全平方因数开出来：$50 = 25 \\cdot 2$，$32 = 16 \\cdot 2$。"
                },
                {
                  "type": "math",
                  "tex": "\\sqrt{50} = 5\\sqrt{2}, \\qquad \\sqrt{32} = 4\\sqrt{2}"
                },
                {
                  "type": "p",
                  "en": "Now all three terms are like radicals — each is a multiple of $\\sqrt{2}$ — so combine the coefficients: $5 + 3 - 4 = 4$.",
                  "zh": "现在三项都是同类根式——都是 $\\sqrt{2}$ 的倍数——把系数合并：$5 + 3 - 4 = 4$。"
                },
                {
                  "type": "math",
                  "tex": "5\\sqrt{2} + 3\\sqrt{2} - 4\\sqrt{2} = 4\\sqrt{2}"
                },
                {
                  "type": "p",
                  "en": "Before simplifying, the radicals looked unrelated; simplifying first is what made them combinable.",
                  "zh": "化简之前，这些根式看起来毫无关系；正是先化简才让它们变得可以合并。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Evaluating a rational exponent",
                "zh": "例题 2：计算分数指数幂"
              },
              "problem": {
                "en": "Evaluate $27^{2/3}$ and $16^{-3/4}$ without a calculator.",
                "zh": "不用计算器计算 $27^{2/3}$ 和 $16^{-3/4}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "For $27^{2/3}$: the denominator 3 says take a cube root, the numerator 2 says square. Root first: $\\sqrt[3]{27} = 3$, then $3^2 = 9$.",
                  "zh": "对 $27^{2/3}$：分母 3 表示开立方，分子 2 表示平方。先开方：$\\sqrt[3]{27} = 3$，再平方：$3^2 = 9$。"
                },
                {
                  "type": "math",
                  "tex": "27^{2/3} = \\left(\\sqrt[3]{27}\\right)^2 = 3^2 = 9"
                },
                {
                  "type": "p",
                  "en": "For $16^{-3/4}$: handle the negative sign first by taking a reciprocal, then apply the root and power: $\\sqrt[4]{16} = 2$ and $2^3 = 8$.",
                  "zh": "对 $16^{-3/4}$：先处理负号（取倒数），再开方、乘方：$\\sqrt[4]{16} = 2$，$2^3 = 8$。"
                },
                {
                  "type": "math",
                  "tex": "16^{-3/4} = \\frac{1}{16^{3/4}} = \\frac{1}{\\left(\\sqrt[4]{16}\\right)^3} = \\frac{1}{8}"
                },
                {
                  "type": "p",
                  "en": "Three separate meanings stack up neatly: the sign of the exponent (reciprocal), its denominator (root), and its numerator (power).",
                  "zh": "三层含义整齐地叠加在一起：指数的符号（倒数）、分母（开方）、分子（乘方）。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\sqrt{48}$.",
                "zh": "化简 $\\sqrt{48}$。"
              },
              "choices": [
                "$2\\sqrt{12}$",
                "$16\\sqrt{3}$",
                "$4\\sqrt{3}$",
                "$3\\sqrt{4}$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The largest perfect square in 48 is 16: $\\sqrt{48} = \\sqrt{16}\\,\\sqrt{3} = 4\\sqrt{3}$. The choice $2\\sqrt{12}$ uses the smaller factor 4 and is not fully simplified — $\\sqrt{12}$ still contains the perfect square 4.",
                "zh": "48 中最大的完全平方因数是 16：$\\sqrt{48} = \\sqrt{16}\\,\\sqrt{3} = 4\\sqrt{3}$。选项 $2\\sqrt{12}$ 只用了较小的因数 4，没有化简完全——$\\sqrt{12}$ 里还含有完全平方数 4。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $\\sqrt[3]{-125}$. Give your answer as an integer.",
                "zh": "计算 $\\sqrt[3]{-125}$。请以整数作答。"
              },
              "answer": "-5",
              "explanation": {
                "en": "We need a number whose cube is $-125$. Since $(-5)^3 = -125$, the cube root is $-5$. Cube roots of negative numbers exist because an odd number of negative factors stays negative.",
                "zh": "要找立方等于 $-125$ 的数。因为 $(-5)^3 = -125$，所以立方根是 $-5$。负数可以开立方，因为奇数个负因数相乘仍为负。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Simplify $\\sqrt{27} + 2\\sqrt{3}$.",
                "zh": "化简 $\\sqrt{27} + 2\\sqrt{3}$。"
              },
              "choices": [
                "$5\\sqrt{3}$",
                "$2\\sqrt{30}$",
                "$3\\sqrt{6}$",
                "$\\sqrt{33}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "First simplify: $\\sqrt{27} = 3\\sqrt{3}$. Then combine like radicals: $3\\sqrt{3} + 2\\sqrt{3} = 5\\sqrt{3}$. The trap $\\sqrt{33}$ comes from \"adding inside the radicals,\" which is never allowed — roots do not split over addition.",
                "zh": "先化简：$\\sqrt{27} = 3\\sqrt{3}$。再合并同类根式：$3\\sqrt{3} + 2\\sqrt{3} = 5\\sqrt{3}$。陷阱选项 $\\sqrt{33}$ 来自\"把根号里面直接相加\"——这绝不允许，根号对加法不能拆分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $3\\sqrt{2} \\cdot 4\\sqrt{8}$. Give your answer as an integer.",
                "zh": "计算 $3\\sqrt{2} \\cdot 4\\sqrt{8}$。请以整数作答。"
              },
              "answer": "48",
              "explanation": {
                "en": "Multiply coefficients and radicands separately: $3 \\cdot 4 = 12$ and $\\sqrt{2}\\,\\sqrt{8} = \\sqrt{16} = 4$. So the product is $12 \\cdot 4 = 48$.",
                "zh": "系数与被开方数分别相乘：$3 \\cdot 4 = 12$，$\\sqrt{2}\\,\\sqrt{8} = \\sqrt{16} = 4$。所以积为 $12 \\cdot 4 = 48$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression is equivalent to $\\sqrt[5]{x^2}$?",
                "zh": "下列哪个式子与 $\\sqrt[5]{x^2}$ 等价？"
              },
              "choices": [
                "$x^{5/2}$",
                "$x^{2/5}$",
                "$x^{10}$",
                "$x^{2} - x^{5}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Power over root: the power 2 goes in the numerator and the root index 5 goes in the denominator, giving $x^{2/5}$. The tempting $x^{5/2}$ flips the fraction — remember the root index lives in the denominator.",
                "zh": "\"分子是乘方、分母是开方\"：乘方次数 2 放分子，根指数 5 放分母，得 $x^{2/5}$。诱人的 $x^{5/2}$ 把分数写反了——记住根指数住在分母。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $32^{3/5}$. Give your answer as an integer.",
                "zh": "计算 $32^{3/5}$。请以整数作答。"
              },
              "answer": "8",
              "explanation": {
                "en": "Root first, then power: $\\sqrt[5]{32} = 2$ because $2^5 = 32$, and then $2^3 = 8$. Taking the root first keeps the arithmetic small; computing $32^3 = 32768$ first also works but is much harder without a calculator.",
                "zh": "先开方再乘方：$\\sqrt[5]{32} = 2$（因为 $2^5 = 32$），再 $2^3 = 8$。先开方能让计算量小；先算 $32^3 = 32768$ 也行，但不用计算器就困难得多。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Challenge: a square garden has an area of 128 square feet. Its exact side length, in feet, is:",
                "zh": "挑战题：一个正方形花园的面积为 128 平方英尺。它的边长（英尺）的精确值是："
              },
              "choices": [
                "$64\\sqrt{2}$",
                "$4\\sqrt{8}$",
                "$11.3$",
                "$8\\sqrt{2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The side of a square is the square root of its area: $\\sqrt{128} = \\sqrt{64}\\,\\sqrt{2} = 8\\sqrt{2}$ feet. Note that $4\\sqrt{8}$ equals the same number but is not fully simplified, and $11.3$ is only an approximation — the problem asks for the exact value.",
                "zh": "正方形的边长是面积的算术平方根：$\\sqrt{128} = \\sqrt{64}\\,\\sqrt{2} = 8\\sqrt{2}$ 英尺。注意 $4\\sqrt{8}$ 虽然数值相同，但没有化简完全；$11.3$ 只是近似值——题目要求精确值。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-12-exponential-growth-decay",
      "title": "Unit 12: Exponential Growth & Decay",
      "titleZh": "第十二单元：指数增长与衰减",
      "lessons": [
        {
          "id": "exponential-functions-and-graphs",
          "title": "Exponential Functions and Their Graphs",
          "titleZh": "指数函数及其图象",
          "content": [
            {
              "type": "h2",
              "en": "A New Kind of Growth",
              "zh": "一种新的增长方式"
            },
            {
              "type": "p",
              "en": "A linear function grows by ADDING the same amount at each step. An exponential function grows by MULTIPLYING by the same amount at each step. Doubling a number of bacteria every hour, or losing half the value of a phone every year — these are exponential patterns, and they need a new kind of function:",
              "zh": "一次函数每一步都加上相同的数，而指数函数每一步都乘以相同的数。细菌数量每小时翻一倍、手机价值每年减半——这些都是指数型变化，需要一种新的函数来描述："
            },
            {
              "type": "math",
              "tex": "y = a \\cdot b^x"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$a$ is the initial value — the value of $y$ when $x = 0$, because $b^0 = 1$. On the graph, it is the $y$-intercept.",
                  "zh": "$a$ 是初始值——当 $x = 0$ 时 $y$ 的值，因为 $b^0 = 1$。在图象上它就是 $y$ 轴截距。"
                },
                {
                  "en": "$b$ is the growth factor (or common ratio) — each time $x$ increases by 1, $y$ is multiplied by $b$. We require $b > 0$ and $b \\neq 1$.",
                  "zh": "$b$ 是增长因子（或公比）——$x$ 每增加 1，$y$ 就乘以一次 $b$。我们要求 $b > 0$ 且 $b \\neq 1$。"
                },
                {
                  "en": "If $b > 1$, the function shows exponential growth; if $0 < b < 1$, it shows exponential decay.",
                  "zh": "当 $b > 1$ 时，函数表现为指数增长；当 $0 < b < 1$ 时，表现为指数衰减。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: $y = 2 \\cdot 3^x$ is NOT the same as $y = 6^x$. The exponent applies only to the base $b = 3$; the initial value $a = 2$ is multiplied afterward. Check with $x = 2$: $2 \\cdot 3^2 = 18$, but $6^2 = 36$.",
              "zh": "常见错误：$y = 2 \\cdot 3^x$ 不等于 $y = 6^x$。指数只作用于底数 $b = 3$，初始值 $a = 2$ 是在乘方之后再相乘的。用 $x = 2$ 检验：$2 \\cdot 3^2 = 18$，而 $6^2 = 36$。"
            },
            {
              "type": "h3",
              "en": "Evaluating and Making a Table",
              "zh": "求值与列表"
            },
            {
              "type": "p",
              "en": "To evaluate an exponential function, apply the exponent first, then multiply by $a$. A table for $y = 4 \\cdot 2^x$ shows the multiplying pattern clearly: as $x$ goes $0, 1, 2, 3$, the $y$-values go $4, 8, 16, 32$ — each row is the previous row times 2. For negative inputs, use negative exponents: at $x = -1$, $y = 4 \\cdot 2^{-1} = 4 \\cdot \\frac{1}{2} = 2$.",
              "zh": "求指数函数的值时，先算乘方，再乘以 $a$。为 $y = 4 \\cdot 2^x$ 列表能清楚看出\"连乘\"规律：当 $x$ 取 $0, 1, 2, 3$ 时，$y$ 依次为 $4, 8, 16, 32$——每一行都是上一行乘 2。对于负的自变量，使用负指数：当 $x = -1$ 时，$y = 4 \\cdot 2^{-1} = 4 \\cdot \\frac{1}{2} = 2$。"
            },
            {
              "type": "h3",
              "en": "The Shape of the Graph",
              "zh": "图象的形状"
            },
            {
              "type": "p",
              "en": "An exponential graph is a smooth curve that lives entirely above the $x$-axis (when $a > 0$). A growth curve like $y = 2^x$ rises slowly on the left and shoots upward on the right. A decay curve like $y = \\left(\\frac{1}{2}\\right)^x$ is its mirror image: high on the left, sliding down toward zero on the right.",
              "zh": "指数函数的图象是一条光滑曲线，当 $a > 0$ 时整条曲线都在 $x$ 轴上方。像 $y = 2^x$ 这样的增长曲线，左侧上升缓慢，右侧急速上冲；像 $y = \\left(\\frac{1}{2}\\right)^x$ 这样的衰减曲线则是它的镜像：左侧很高，向右逐渐滑向零。"
            },
            {
              "type": "p",
              "en": "In both cases the curve gets closer and closer to the $x$-axis but never touches it. The line $y = 0$ is called the horizontal asymptote. The reason: no matter how many times you multiply a positive number by $b$, the result is still positive — $a \\cdot b^x$ can be tiny, but never zero.",
              "zh": "两种情形下，曲线都无限接近 $x$ 轴却永远不碰到它。直线 $y = 0$ 叫做水平渐近线。原因是：一个正数不管乘多少次 $b$，结果仍是正数——$a \\cdot b^x$ 可以非常小，但永远不为零。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Reading a function from its rule",
                "zh": "例题 1：从解析式读取信息"
              },
              "problem": {
                "en": "For $y = 80 \\cdot \\left(\\frac{1}{4}\\right)^x$, find the initial value, the growth factor, whether it is growth or decay, and the value of $y$ when $x = 3$.",
                "zh": "对于 $y = 80 \\cdot \\left(\\frac{1}{4}\\right)^x$，求初始值、增长因子、判断是增长还是衰减，并求 $x = 3$ 时 $y$ 的值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Compare with $y = a \\cdot b^x$: the initial value is $a = 80$ and the growth factor is $b = \\frac{1}{4}$. Since $0 < \\frac{1}{4} < 1$, this is exponential decay — each step, $y$ keeps only a quarter of its previous value.",
                  "zh": "与 $y = a \\cdot b^x$ 对照：初始值 $a = 80$，增长因子 $b = \\frac{1}{4}$。因为 $0 < \\frac{1}{4} < 1$，这是指数衰减——每一步 $y$ 只保留上一步的四分之一。"
                },
                {
                  "type": "math",
                  "tex": "y = 80 \\cdot \\left(\\tfrac{1}{4}\\right)^3 = 80 \\cdot \\tfrac{1}{64} = \\tfrac{80}{64} = \\tfrac{5}{4}"
                },
                {
                  "type": "p",
                  "en": "So $y = \\frac{5}{4} = 1.25$ when $x = 3$. You can also step through the table: $80 \\to 20 \\to 5 \\to 1.25$.",
                  "zh": "所以当 $x = 3$ 时 $y = \\frac{5}{4} = 1.25$。也可以按表逐步计算：$80 \\to 20 \\to 5 \\to 1.25$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Linear vs. Exponential: Constant Difference vs. Constant Ratio",
              "zh": "一次与指数：等差与等比"
            },
            {
              "type": "p",
              "en": "Given a table, how do you tell which type of function fits? Check consecutive $y$-values (for equally spaced $x$-values). If the DIFFERENCE is constant, the pattern is linear. If the RATIO is constant, the pattern is exponential.",
              "zh": "给定一张表，如何判断它是哪种函数？检查相邻的 $y$ 值（要求 $x$ 值等间距）。若差相同，是一次（线性）关系；若比相同，是指数关系。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Linear: $5, 8, 11, 14$ — each step adds 3 (constant difference).",
                  "zh": "线性：$5, 8, 11, 14$——每步加 3（公差不变）。"
                },
                {
                  "en": "Exponential: $5, 10, 20, 40$ — each step multiplies by 2 (constant ratio).",
                  "zh": "指数：$5, 10, 20, 40$——每步乘 2（公比不变）。"
                }
              ]
            },
            {
              "type": "p",
              "en": "Here is the honors-level punchline: any exponential growth function ($b > 1$) will EVENTUALLY overtake any linear function, no matter how steep the line or how small the exponential starts. Adding a fixed amount cannot keep up with repeated doubling forever.",
              "zh": "荣誉班要记住的结论是：任何指数增长函数（$b > 1$）最终一定会超过任何一次函数——无论直线多陡、指数函数起点多低。固定的加法永远追不上不断的翻倍。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Which offer wins?",
                "zh": "例题 2：哪种方案更划算？"
              },
              "problem": {
                "en": "Offer A pays \\$100 on day 1 and \\$100 more each day. Offer B pays \\$1 on day 1 and doubles each day. Which offer pays more on day 12?",
                "zh": "方案 A 第 1 天付 100 美元，以后每天多付 100 美元。方案 B 第 1 天付 1 美元，以后每天翻倍。第 12 天哪种方案付得更多？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Offer A is linear: on day $n$ it pays $100n$ dollars, so day 12 pays $100 \\cdot 12 = 1200$ dollars.",
                  "zh": "方案 A 是线性的：第 $n$ 天付 $100n$ 美元，所以第 12 天付 $100 \\cdot 12 = 1200$ 美元。"
                },
                {
                  "type": "p",
                  "en": "Offer B is exponential: on day $n$ it pays $1 \\cdot 2^{n-1}$ dollars, so day 12 pays $2^{11} = 2048$ dollars.",
                  "zh": "方案 B 是指数的：第 $n$ 天付 $1 \\cdot 2^{n-1}$ 美元，所以第 12 天付 $2^{11} = 2048$ 美元。"
                },
                {
                  "type": "math",
                  "tex": "2048 > 1200"
                },
                {
                  "type": "p",
                  "en": "Offer B wins by day 12, even though it was far behind for the first week. Doubling starts slow but overwhelms constant additions.",
                  "zh": "尽管方案 B 在第一周远远落后，但到第 12 天已经反超。翻倍起步慢，最终却会压倒固定的加法。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: to find $b$ from a table, divide a $y$-value by the one before it (with $x$-values 1 apart). Do not subtract — subtracting gives the difference, which is only useful for linear patterns.",
              "zh": "考试提示：从表格求 $b$ 时，用某个 $y$ 值除以它前一个 $y$ 值（要求 $x$ 相差 1）。不要相减——相减得到的是差，只对线性规律有用。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For the function $y = 7 \\cdot \\left(\\frac{1}{3}\\right)^x$, what are the initial value and the growth factor?",
                "zh": "对于函数 $y = 7 \\cdot \\left(\\frac{1}{3}\\right)^x$，初始值和增长因子分别是多少？"
              },
              "choices": [
                "$a = \\frac{1}{3},\\ b = 7$",
                "$a = 7,\\ b = \\frac{1}{3}$",
                "$a = 7,\\ b = 3$",
                "$a = \\frac{7}{3},\\ b = \\frac{1}{3}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Matching $y = a \\cdot b^x$: the number out front is the initial value $a = 7$, and the base of the exponent is the growth factor $b = \\frac{1}{3}$. Swapping the two roles (choice with $a = \\frac{1}{3}, b = 7$) is the classic mix-up.",
                "zh": "与 $y = a \\cdot b^x$ 对照：前面的数是初始值 $a = 7$，指数的底是增长因子 $b = \\frac{1}{3}$。把两者角色对调（选 $a = \\frac{1}{3}, b = 7$）是典型的混淆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Evaluate $y = 4 \\cdot 2^x$ when $x = 3$. Give your answer as an integer.",
                "zh": "当 $x = 3$ 时，求 $y = 4 \\cdot 2^x$ 的值。请以整数作答。"
              },
              "answer": "32",
              "explanation": {
                "en": "Exponent first: $2^3 = 8$. Then multiply: $4 \\cdot 8 = 32$. Computing $(4 \\cdot 2)^3 = 512$ is wrong — the exponent applies only to the base 2.",
                "zh": "先算乘方：$2^3 = 8$。再相乘：$4 \\cdot 8 = 32$。算成 $(4 \\cdot 2)^3 = 512$ 是错误的——指数只作用于底数 2。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A table has equally spaced $x$-values and $y$-values $3, 6, 12, 24$. Which function fits?",
                "zh": "一张表中 $x$ 值等间距，$y$ 值为 $3, 6, 12, 24$。哪个函数符合这组数据？"
              },
              "choices": [
                "$y = 3x + 3$",
                "$y = 6x$",
                "$y = 2 \\cdot 3^x$",
                "$y = 3 \\cdot 2^x$"
              ],
              "answer": 3,
              "explanation": {
                "en": "The differences ($3, 6, 12$) are not constant, so the pattern is not linear. The ratios are constant: $\\frac{6}{3} = \\frac{12}{6} = \\frac{24}{12} = 2$, so $b = 2$; the starting value is 3, giving $y = 3 \\cdot 2^x$. The choice $y = 2 \\cdot 3^x$ tempts by swapping $a$ and $b$.",
                "zh": "相邻差（$3, 6, 12$）不相等，所以不是线性关系。相邻比恒定：$\\frac{6}{3} = \\frac{12}{6} = \\frac{24}{12} = 2$，故 $b = 2$；起始值为 3，即 $y = 3 \\cdot 2^x$。选项 $y = 2 \\cdot 3^x$ 把 $a$ 和 $b$ 对调，很有迷惑性。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "An exponential function $y = a \\cdot b^x$ passes through $(0, 5)$ and $(1, 15)$. What is the growth factor $b$? Give an integer.",
                "zh": "指数函数 $y = a \\cdot b^x$ 经过点 $(0, 5)$ 和 $(1, 15)$。增长因子 $b$ 是多少？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "The point $(0, 5)$ gives the initial value $a = 5$. Moving from $x = 0$ to $x = 1$ multiplies $y$ by $b$, so $b = \\frac{15}{5} = 3$. Subtracting ($15 - 5 = 10$) would be the linear-thinking mistake.",
                "zh": "点 $(0, 5)$ 给出初始值 $a = 5$。从 $x = 0$ 到 $x = 1$，$y$ 被乘以 $b$，所以 $b = \\frac{15}{5} = 3$。相减（$15 - 5 = 10$）是用线性思维犯的错误。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the horizontal asymptote of the graph of $y = 6 \\cdot (0.8)^x$?",
                "zh": "函数 $y = 6 \\cdot (0.8)^x$ 的图象的水平渐近线是什么？"
              },
              "choices": [
                "$y = 0$",
                "$y = 6$",
                "$y = 0.8$",
                "There is no asymptote / 没有渐近线"
              ],
              "answer": 0,
              "explanation": {
                "en": "As $x$ grows, $(0.8)^x$ shrinks toward zero, so $y$ approaches — but never reaches — the line $y = 0$. The value 6 is the $y$-intercept, not the asymptote; that is the tempting wrong answer.",
                "zh": "当 $x$ 增大时，$(0.8)^x$ 不断缩小趋近于零，所以 $y$ 无限接近但永不到达直线 $y = 0$。6 是 $y$ 轴截距而不是渐近线，这是最有迷惑性的错误选项。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Town A has 500 people and gains 50 people per year. Town B has 500 people and grows 8\\% per year. Which statement is true?",
                "zh": "甲镇现有 500 人，每年增加 50 人。乙镇现有 500 人，每年增长 8\\%。下列哪个说法正确？"
              },
              "choices": [
                "Town A is always larger / 甲镇永远更大",
                "Town B is always larger / 乙镇永远更大",
                "Town A leads at first, but Town B eventually overtakes it / 起初甲镇领先，但乙镇最终反超",
                "They stay exactly equal / 两镇始终相等"
              ],
              "answer": 2,
              "explanation": {
                "en": "Town A grows linearly (+50 each year); Town B grows exponentially ($\\times 1.08$ each year). At first $8\\%$ of 500 is only 40, so Town A pulls ahead. But exponential growth compounds, and any growth factor above 1 eventually beats any constant addition.",
                "zh": "甲镇线性增长（每年 +50）；乙镇指数增长（每年 $\\times 1.08$）。起初 500 的 $8\\%$ 只有 40 人，所以甲镇领先。但指数增长会复利式累积，任何大于 1 的增长因子最终都会胜过固定的加法。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: an exponential function $f(x) = a \\cdot b^x$ satisfies $f(2) = 18$ and $f(3) = 54$. Find the initial value $a$. Give an integer.",
                "zh": "挑战题：指数函数 $f(x) = a \\cdot b^x$ 满足 $f(2) = 18$ 和 $f(3) = 54$。求初始值 $a$。请填一个整数。"
              },
              "answer": "2",
              "accept": [
                "2.0"
              ],
              "explanation": {
                "en": "Dividing consecutive outputs gives the factor: $b = \\frac{f(3)}{f(2)} = \\frac{54}{18} = 3$. Then $f(2) = a \\cdot 3^2 = 9a = 18$, so $a = 2$. Working backward from a non-zero $x$ is the honors twist — $a$ is NOT simply $f(2)$.",
                "zh": "相邻输出相除得到因子：$b = \\frac{f(3)}{f(2)} = \\frac{54}{18} = 3$。于是 $f(2) = a \\cdot 3^2 = 9a = 18$，得 $a = 2$。从非零的 $x$ 倒推是本题的荣誉级难点——$a$ 并不等于 $f(2)$。"
              }
            }
          ]
        },
        {
          "id": "modeling-growth-and-decay",
          "title": "Modeling Growth and Decay",
          "titleZh": "增长与衰减模型",
          "content": [
            {
              "type": "h2",
              "en": "From Percent Change to a Growth Factor",
              "zh": "从百分数变化到增长因子"
            },
            {
              "type": "p",
              "en": "Real situations rarely say \"multiply by 1.05 each year\" — they say \"grows 5\\% per year.\" Your first modeling skill is converting a percent change into a growth factor. Growing by 5\\% means keeping 100\\% of what you had AND adding 5\\% more, so you multiply by $1 + 0.05 = 1.05$. Decaying by 20\\% means keeping only $100\\% - 20\\% = 80\\%$, so you multiply by $1 - 0.20 = 0.80$.",
              "zh": "现实问题很少直接说\"每年乘以 1.05\"，而是说\"每年增长 5\\%\"。建模的第一项技能就是把百分数变化转换成增长因子。增长 5\\% 意味着保留原有的 100\\% 再加上 5\\%，所以乘以 $1 + 0.05 = 1.05$；衰减 20\\% 意味着只保留 $100\\% - 20\\% = 80\\%$，所以乘以 $1 - 0.20 = 0.80$。"
            },
            {
              "type": "math",
              "tex": "y = a(1 + r)^t \\quad \\text{(growth)} \\qquad y = a(1 - r)^t \\quad \\text{(decay)}"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "$a$ — the initial amount, at time $t = 0$.",
                  "zh": "$a$——初始量，即 $t = 0$ 时的量。"
                },
                {
                  "en": "$r$ — the percent rate of change, written as a decimal.",
                  "zh": "$r$——变化的百分率，写成小数。"
                },
                {
                  "en": "$b = 1 + r$ or $b = 1 - r$ — the growth (or decay) factor applied once per time period.",
                  "zh": "$b = 1 + r$ 或 $b = 1 - r$——每个时间周期乘一次的增长（或衰减）因子。"
                },
                {
                  "en": "$t$ — the number of time periods (years, months, hours...).",
                  "zh": "$t$——时间周期的个数（年、月、小时……）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: a 5\\% growth rate gives $b = 1.05$, NOT $b = 0.05$. Multiplying by 0.05 would shrink the amount to five percent of what it was! Likewise, 20\\% decay gives $b = 0.80$, not $0.20$. Always ask: \"what fraction remains after one period?\"",
              "zh": "常见错误：增长率 5\\% 对应 $b = 1.05$，而不是 $b = 0.05$。乘以 0.05 会把数量缩小到原来的百分之五！同样，衰减 20\\% 对应 $b = 0.80$，不是 $0.20$。始终问自己：\"一个周期后剩下的比例是多少？\""
            },
            {
              "type": "h3",
              "en": "Writing a Model from a Word Problem",
              "zh": "从应用题写出模型"
            },
            {
              "type": "p",
              "en": "Read the problem and identify three things: the starting amount $a$, the percent change per period, and whether it is growth or decay. Then assemble $y = a \\cdot b^t$. Typical settings: populations growing, cars and electronics depreciating (losing value), and savings accounts earning compound interest.",
              "zh": "读题时找出三样东西：初始量 $a$、每个周期的百分数变化、以及它是增长还是衰减，然后组装出 $y = a \\cdot b^t$。常见情境有：人口增长、汽车和电子产品折旧（贬值）、储蓄账户的复利利息。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Car depreciation",
                "zh": "例题 1：汽车折旧"
              },
              "problem": {
                "en": "A car is bought for \\$12{,}000 and loses 15\\% of its value each year. Write a model for its value $V$ after $t$ years, and find its value after 3 years.",
                "zh": "一辆汽车购入价为 12000 美元，其价值每年减少 15\\%。写出 $t$ 年后价值 $V$ 的模型，并求 3 年后的价值。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Losing 15\\% means keeping 85\\%, so the decay factor is $b = 1 - 0.15 = 0.85$ and the initial value is $a = 12000$:",
                  "zh": "减少 15\\% 意味着保留 85\\%，所以衰减因子为 $b = 1 - 0.15 = 0.85$，初始值 $a = 12000$："
                },
                {
                  "type": "math",
                  "tex": "V = 12000(0.85)^t"
                },
                {
                  "type": "p",
                  "en": "After 3 years: $V = 12000(0.85)^3 = 12000(0.614125) = 7369.50$. The car is worth \\$7{,}369.50.",
                  "zh": "3 年后：$V = 12000(0.85)^3 = 12000(0.614125) = 7369.50$。这辆车价值 7369.50 美元。"
                },
                {
                  "type": "p",
                  "en": "Note we do NOT subtract $15\\%$ three times ($12000 - 3 \\cdot 1800 = 6600$). Each year the car loses 15\\% of that year's value, not of the original price — that is why the model multiplies.",
                  "zh": "注意不能把 15\\% 连减三次（$12000 - 3 \\cdot 1800 = 6600$）。每年减少的是当年价值的 15\\%，而不是原价的 15\\%——这正是模型用乘法的原因。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Solving for a Missing Part",
              "zh": "求模型中的未知量"
            },
            {
              "type": "p",
              "en": "Sometimes you know the result and need to work backward. To find the amount after $n$ periods, substitute $t = n$ and evaluate. To find the initial value, substitute what you know and divide both sides by the power of $b$.",
              "zh": "有时已知结果需要倒推。要求 $n$ 个周期后的量，就代入 $t = n$ 直接计算；要求初始值，就把已知条件代入，再把两边同时除以 $b$ 的幂。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Finding the initial deposit",
                "zh": "例题 2：求最初的存款"
              },
              "problem": {
                "en": "A savings account earns 4\\% interest per year. After 2 years, the balance is \\$540.80. How much was deposited originally?",
                "zh": "某储蓄账户年利率为 4\\%。2 年后余额为 540.80 美元。最初存入了多少钱？"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "The model is $A = a(1.04)^t$. Substitute $t = 2$ and $A = 540.80$:",
                  "zh": "模型为 $A = a(1.04)^t$。代入 $t = 2$ 和 $A = 540.80$："
                },
                {
                  "type": "math",
                  "tex": "540.80 = a(1.04)^2 = 1.0816\\,a"
                },
                {
                  "type": "math",
                  "tex": "a = \\frac{540.80}{1.0816} = 500"
                },
                {
                  "type": "p",
                  "en": "The original deposit was \\$500. Check forward: $500 \\to 520 \\to 540.80$. ✓",
                  "zh": "最初存入 500 美元。正向检验：$500 \\to 520 \\to 540.80$。✓"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Interpreting a Model in Context",
              "zh": "在情境中解读模型"
            },
            {
              "type": "p",
              "en": "Tests love to hand you a finished model and ask what each number MEANS. Given $P = 3200(1.043)^t$ for a town's population: the 3200 is the population when $t = 0$; the 1.043 is the yearly growth factor; and $r = 1.043 - 1 = 0.043$, so the town grows 4.3\\% per year.",
              "zh": "考试很喜欢给出一个现成的模型，问其中每个数的含义。比如某镇人口 $P = 3200(1.043)^t$：3200 是 $t = 0$ 时的人口；1.043 是每年的增长因子；$r = 1.043 - 1 = 0.043$，即该镇每年增长 4.3\\%。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Factor $b > 1$: percent growth of $(b - 1) \\times 100\\%$. Example: $b = 1.15$ means 15\\% growth.",
                  "zh": "因子 $b > 1$：增长率为 $(b - 1) \\times 100\\%$。例如 $b = 1.15$ 表示增长 15\\%。"
                },
                {
                  "en": "Factor $b < 1$: percent decay of $(1 - b) \\times 100\\%$. Example: $b = 0.91$ means 9\\% decay.",
                  "zh": "因子 $b < 1$：衰减率为 $(1 - b) \\times 100\\%$。例如 $b = 0.91$ 表示衰减 9\\%。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: match the time units before you substitute. If a quantity grows 3\\% per MONTH and the question asks about 2 YEARS, then $t = 24$, not 2. Misreading the period is one of the most common point-losers on modeling questions.",
              "zh": "考试提示：代入之前先统一时间单位。如果某量每\"月\"增长 3\\%，而题目问的是 2\"年\"，那么 $t = 24$ 而不是 2。看错周期单位是建模题里最常见的失分点之一。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "A quantity grows 8\\% per year. What growth factor $b$ should appear in the model $y = a \\cdot b^t$?",
                "zh": "某量每年增长 8\\%。模型 $y = a \\cdot b^t$ 中的增长因子 $b$ 应该是多少？"
              },
              "choices": [
                "$0.08$",
                "$0.92$",
                "$1.08$",
                "$1.8$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Growing 8\\% means keeping 100\\% and adding 8\\%: $b = 1 + 0.08 = 1.08$. The distractor $0.08$ forgets to keep the original 100\\%; $0.92$ would model 8\\% DECAY; $1.8$ misplaces the decimal (that would be 80\\% growth).",
                "zh": "增长 8\\% 意味着保留 100\\% 再加 8\\%：$b = 1 + 0.08 = 1.08$。干扰项 $0.08$ 忘了保留原有的 100\\%；$0.92$ 描述的是衰减 8\\%；$1.8$ 则放错了小数点（那是增长 80\\%）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The model $y = 60(0.75)^t$ describes a quantity over time. What is happening to it?",
                "zh": "模型 $y = 60(0.75)^t$ 描述某个量随时间的变化。这个量在发生什么变化？"
              },
              "choices": [
                "It grows 75\\% per period / 每周期增长 75\\%",
                "It decays 75\\% per period / 每周期衰减 75\\%",
                "It grows 25\\% per period / 每周期增长 25\\%",
                "It decays 25\\% per period / 每周期衰减 25\\%"
              ],
              "answer": 3,
              "explanation": {
                "en": "Since $b = 0.75 < 1$, this is decay. The rate is $1 - 0.75 = 0.25$, so the quantity loses 25\\% each period — it KEEPS 75\\%. Reading 0.75 as \"decays 75\\%\" confuses what remains with what is lost.",
                "zh": "因为 $b = 0.75 < 1$，这是衰减。衰减率为 $1 - 0.75 = 0.25$，即每周期减少 25\\%——保留下来的才是 75\\%。把 0.75 读成\"衰减 75\\%\"是把\"剩下的\"和\"失去的\"弄混了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A town of 3000 people grows 10\\% per year. How many people will it have after 2 years? Give an integer.",
                "zh": "某镇现有 3000 人，每年增长 10\\%。2 年后有多少人？请填一个整数。"
              },
              "answer": "3630",
              "explanation": {
                "en": "The model is $P = 3000(1.10)^t$. After 2 years: $3000(1.1)^2 = 3000(1.21) = 3630$. Adding 10\\% of 3000 twice gives 3600 — that misses the growth ON the first year's growth (the extra 30 people).",
                "zh": "模型为 $P = 3000(1.10)^t$。2 年后：$3000(1.1)^2 = 3000(1.21) = 3630$。若把 3000 的 10\\% 加两次会得到 3600——漏掉了\"对第一年增量的再增长\"（多出的那 30 人）。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A \\$24{,}000 car loses 18\\% of its value each year. Which model gives its value after $t$ years?",
                "zh": "一辆 24000 美元的汽车每年贬值 18\\%。哪个模型表示 $t$ 年后的价值？"
              },
              "choices": [
                "$V = 24000(0.82)^t$",
                "$V = 24000(1.18)^t$",
                "$V = 24000(0.18)^t$",
                "$V = 24000 - 0.18t$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Losing 18\\% each year means keeping 82\\%, so multiply by $0.82$ each year: $V = 24000(0.82)^t$. The factor $0.18$ is what is LOST, not kept; $1.18$ would be growth; and the subtraction model is linear, not exponential.",
                "zh": "每年贬值 18\\% 意味着保留 82\\%，即每年乘以 $0.82$：$V = 24000(0.82)^t$。因子 $0.18$ 是失去的部分而非保留的部分；$1.18$ 表示增长；而减法模型是线性的，不是指数的。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A laptop bought for \\$800 loses 25\\% of its value each year. What is it worth after 3 years? Give your answer in dollars as a decimal (e.g. 123.45).",
                "zh": "一台购入价 800 美元的笔记本电脑每年贬值 25\\%。3 年后它值多少美元？请以小数作答（如 123.45）。"
              },
              "answer": "337.5",
              "accept": [
                "337.50",
                "337.5 dollars"
              ],
              "explanation": {
                "en": "Keep 75\\% each year: $V = 800(0.75)^3 = 800(0.421875) = 337.50$ dollars. Step by step: $800 \\to 600 \\to 450 \\to 337.50$. Subtracting \\$200 three times (giving \\$200) ignores that each year's loss shrinks with the value.",
                "zh": "每年保留 75\\%：$V = 800(0.75)^3 = 800(0.421875) = 337.50$ 美元。逐年计算：$800 \\to 600 \\to 450 \\to 337.50$。连减三次 200 美元（得 200 美元）忽略了每年的损失会随价值一起变小。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The value of a collectible card is modeled by $V = 500(1.06)^t$, with $t$ in years. Which interpretation is correct?",
                "zh": "某收藏卡的价值由 $V = 500(1.06)^t$ 描述，$t$ 以年为单位。下列哪种解读是正确的？"
              },
              "choices": [
                "It was worth \\$500 and grows \\$1.06 per year / 原值 500 美元，每年增值 1.06 美元",
                "It was worth \\$1.06 and grows 500\\% per year / 原值 1.06 美元，每年增长 500\\%",
                "It was worth \\$500 and grows 6\\% per year / 原值 500 美元，每年增长 6\\%",
                "It was worth \\$500 and grows 106\\% per year / 原值 500 美元，每年增长 106\\%"
              ],
              "answer": 2,
              "explanation": {
                "en": "The 500 is the value at $t = 0$; the factor 1.06 means the value is multiplied by 1.06 each year, a growth rate of $1.06 - 1 = 0.06 = 6\\%$. Reading 1.06 as \"\\$1.06 added\" treats an exponential model as linear, and 106\\% confuses the factor with the rate.",
                "zh": "500 是 $t = 0$ 时的价值；因子 1.06 表示价值每年乘以 1.06，即增长率为 $1.06 - 1 = 0.06 = 6\\%$。把 1.06 读作\"每年加 1.06 美元\"是把指数模型当成了线性模型；106\\% 则是把因子和增长率弄混了。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: a bacteria culture grows 20\\% per hour. After 2 hours there are 720 bacteria. How many bacteria were there at the start? Give an integer.",
                "zh": "挑战题：某细菌培养物每小时增长 20\\%。2 小时后有 720 个细菌。最初有多少个细菌？请填一个整数。"
              },
              "answer": "500",
              "accept": [
                "500.0"
              ],
              "explanation": {
                "en": "The model is $N = a(1.2)^t$. Substitute $t = 2$: $720 = a(1.2)^2 = 1.44a$, so $a = \\frac{720}{1.44} = 500$. A tempting shortcut is subtracting 20\\% twice from 720 ($720 \\to 576 \\to 460.8$), but undoing a 20\\% increase requires DIVIDING by 1.2, not taking 80\\%.",
                "zh": "模型为 $N = a(1.2)^t$。代入 $t = 2$：$720 = a(1.2)^2 = 1.44a$，所以 $a = \\frac{720}{1.44} = 500$。一个诱人的捷径是从 720 连减两次 20\\%（$720 \\to 576 \\to 460.8$），但撤销 20\\% 的增长必须除以 1.2，而不是乘 80\\%。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-13-quadratics-multiplying-factoring",
      "title": "Unit 13: Quadratics — Multiplying & Factoring",
      "titleZh": "第十三单元：二次式的乘法与因式分解",
      "lessons": [
        {
          "id": "multiplying-binomials-special-products",
          "title": "Multiplying Binomials and Special Products",
          "titleZh": "多项式乘法与乘法公式",
          "content": [
            {
              "type": "h2",
              "en": "Multiplying Polynomials",
              "zh": "多项式的乘法"
            },
            {
              "type": "p",
              "en": "Everything in this lesson comes from one idea: the distributive property. To multiply a monomial by a polynomial, distribute the monomial to every term. For example, $3x(2x - 5) = 6x^2 - 15x$. Multiply the coefficients, and add the exponents of matching variables since $x \\cdot x = x^2$.",
              "zh": "本课的一切都来自同一个思想：分配律。用单项式乘多项式时，把单项式分配到每一项。例如 $3x(2x - 5) = 6x^2 - 15x$。系数相乘，相同字母的指数相加，因为 $x \\cdot x = x^2$。"
            },
            {
              "type": "p",
              "en": "A binomial is a polynomial with two terms, like $x + 3$ or $2x - 5$. To multiply two binomials, we distribute twice: each term of the first binomial must multiply each term of the second.",
              "zh": "二项式是含两项的多项式，如 $x + 3$ 或 $2x - 5$。两个二项式相乘时要分配两次：第一个二项式的每一项都要乘以第二个二项式的每一项。"
            },
            {
              "type": "h3",
              "en": "The Area Model and FOIL",
              "zh": "面积模型与 FOIL"
            },
            {
              "type": "p",
              "en": "Picture $(x + 3)(x + 5)$ as the area of a rectangle with side lengths $x + 3$ and $x + 5$. Splitting each side into its two pieces cuts the rectangle into four smaller regions with areas $x^2$, $5x$, $3x$, and $15$. The total area is the sum:",
              "zh": "把 $(x + 3)(x + 5)$ 想象成边长为 $x + 3$ 和 $x + 5$ 的矩形的面积。把每条边分成两段，矩形就被切成四个小块，面积分别是 $x^2$、$5x$、$3x$ 和 $15$。总面积就是它们的和："
            },
            {
              "type": "math",
              "tex": "(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15"
            },
            {
              "type": "p",
              "en": "The shortcut FOIL lists the four products in order — First, Outer, Inner, Last. FOIL only works for binomial times binomial, but the underlying rule \"every term times every term\" works for polynomials of any size.",
              "zh": "口诀 FOIL 按顺序列出这四个乘积——首项（First）、外项（Outer）、内项（Inner）、末项（Last）。FOIL 只适用于二项式乘二项式，但它背后的规则\"每一项乘每一项\"适用于任意大小的多项式。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "First: multiply the first terms of each binomial.",
                  "zh": "首项：两个二项式的第一项相乘。"
                },
                {
                  "en": "Outer: multiply the two outermost terms.",
                  "zh": "外项：最外侧的两项相乘。"
                },
                {
                  "en": "Inner: multiply the two innermost terms.",
                  "zh": "内项：最内侧的两项相乘。"
                },
                {
                  "en": "Last: multiply the last terms, then combine the like middle terms.",
                  "zh": "末项：两个二项式的最后一项相乘，最后合并中间的同类项。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: sign errors on the Outer and Inner products. In $(x - 4)(x + 2)$, the middle terms are $+2x$ and $-4x$, which combine to $-2x$, and the Last product is $(-4)(2) = -8$, not $+8$. Carry each sign with its term.",
              "zh": "常见错误：外项和内项相乘时弄错符号。在 $(x - 4)(x + 2)$ 中，中间两项是 $+2x$ 和 $-4x$，合并得 $-2x$；末项乘积是 $(-4)(2) = -8$，而不是 $+8$。符号要始终跟着它的项走。"
            },
            {
              "type": "h3",
              "en": "Special Products Worth Memorizing",
              "zh": "值得记住的乘法公式"
            },
            {
              "type": "p",
              "en": "Three patterns appear so often that honors students should know them instantly, in both directions:",
              "zh": "有三个模式出现得非常频繁，荣誉班的同学应当正反两个方向都能脱口而出："
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
              "en": "The first two are perfect-square trinomials: the middle term is twice the product of the two terms being squared. The third is the difference of squares: the outer and inner products, $-ab$ and $+ab$, cancel, so no middle term survives. Recognizing these patterns in reverse is exactly what makes factoring fast later on.",
              "zh": "前两个是完全平方公式：中间项等于被平方的两项乘积的 2 倍。第三个是平方差公式：外项与内项的乘积 $-ab$ 与 $+ab$ 相互抵消，所以没有中间项。反过来识别这些模式，正是日后快速因式分解的关键。"
            },
            {
              "type": "note",
              "en": "Test tip: $(a + b)^2$ is NOT $a^2 + b^2$. Check with numbers: $(3 + 4)^2 = 49$, but $3^2 + 4^2 = 25$. If you ever forget a formula, write the square as a product, $(a+b)(a+b)$, and FOIL it out.",
              "zh": "考试提示：$(a + b)^2$ 不等于 $a^2 + b^2$。用数字验证：$(3 + 4)^2 = 49$，而 $3^2 + 4^2 = 25$。如果忘了公式，就把平方写成乘积 $(a+b)(a+b)$，再用 FOIL 展开。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Binomial times binomial",
                "zh": "例题 1：二项式乘二项式"
              },
              "problem": {
                "en": "Expand and simplify $(2x + 3)(x - 4)$.",
                "zh": "展开并化简 $(2x + 3)(x - 4)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Multiply every term by every term. First: $2x \\cdot x = 2x^2$. Outer: $2x \\cdot (-4) = -8x$. Inner: $3 \\cdot x = 3x$. Last: $3 \\cdot (-4) = -12$.",
                  "zh": "每一项乘每一项。首项：$2x \\cdot x = 2x^2$。外项：$2x \\cdot (-4) = -8x$。内项：$3 \\cdot x = 3x$。末项：$3 \\cdot (-4) = -12$。"
                },
                {
                  "type": "math",
                  "tex": "2x^2 - 8x + 3x - 12"
                },
                {
                  "type": "p",
                  "en": "Combine the like terms $-8x + 3x = -5x$:",
                  "zh": "合并同类项 $-8x + 3x = -5x$："
                },
                {
                  "type": "math",
                  "tex": "(2x + 3)(x - 4) = 2x^2 - 5x - 12"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: A larger product",
                "zh": "例题 2：更大的多项式乘法"
              },
              "problem": {
                "en": "Expand $(x + 2)(x^2 - 3x + 5)$.",
                "zh": "展开 $(x + 2)(x^2 - 3x + 5)$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "FOIL does not apply here — the second factor has three terms — but distribution still does. Multiply $x$ by each term, then $2$ by each term:",
                  "zh": "这里不能用 FOIL——第二个因式有三项——但分配律仍然适用。先用 $x$ 乘每一项，再用 $2$ 乘每一项："
                },
                {
                  "type": "math",
                  "tex": "x(x^2 - 3x + 5) = x^3 - 3x^2 + 5x"
                },
                {
                  "type": "math",
                  "tex": "2(x^2 - 3x + 5) = 2x^2 - 6x + 10"
                },
                {
                  "type": "p",
                  "en": "Add the results and combine like terms: $-3x^2 + 2x^2 = -x^2$ and $5x - 6x = -x$.",
                  "zh": "把两个结果相加并合并同类项：$-3x^2 + 2x^2 = -x^2$，$5x - 6x = -x$。"
                },
                {
                  "type": "math",
                  "tex": "(x + 2)(x^2 - 3x + 5) = x^3 - x^2 - x + 10"
                },
                {
                  "type": "p",
                  "en": "A quick check: a binomial times a trinomial gives $2 \\times 3 = 6$ products before combining. If you found fewer, you missed one.",
                  "zh": "快速检查：二项式乘三项式在合并前应有 $2 \\times 3 = 6$ 个乘积。如果少了，说明漏乘了。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Seeing the Patterns in Reverse",
              "zh": "反向识别模式"
            },
            {
              "type": "p",
              "en": "Multiplication and factoring are inverse skills. When you see $x^2 + 8x + 15$, you should already suspect it came from two binomials whose constants multiply to $15$ and add to $8$. When you see $x^2 - 49$ with no middle term, think difference of squares. Training your eye now pays off in every quadratics topic ahead.",
              "zh": "乘法与因式分解是互逆的技能。看到 $x^2 + 8x + 15$ 时，你就应该猜到它来自两个二项式，其常数乘积为 $15$、和为 $8$。看到没有中间项的 $x^2 - 49$，就要想到平方差。现在练出这双\"眼睛\"，之后学二次函数的每个专题都会受益。"
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Expand $3x(2x^2 - 5x + 4)$.",
                "zh": "展开 $3x(2x^2 - 5x + 4)$。"
              },
              "choices": [
                "$6x^3 - 5x + 4$",
                "$6x^2 - 15x + 12$",
                "$6x^3 - 15x^2 + 12x$",
                "$6x^3 + 15x^2 + 12x$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Distribute $3x$ to every term: $3x \\cdot 2x^2 = 6x^3$, $3x \\cdot (-5x) = -15x^2$, $3x \\cdot 4 = 12x$. The first distractor forgets to multiply the last two terms by $3x$; the second forgets to add exponents.",
                "zh": "把 $3x$ 分配到每一项：$3x \\cdot 2x^2 = 6x^3$，$3x \\cdot (-5x) = -15x^2$，$3x \\cdot 4 = 12x$。第一个干扰项忘了给后两项乘 $3x$；第二个忘了指数相加。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Expand and simplify $(x + 3)(x - 7)$.",
                "zh": "展开并化简 $(x + 3)(x - 7)$。"
              },
              "choices": [
                "$x^2 - 4x - 21$",
                "$x^2 + 4x - 21$",
                "$x^2 - 21$",
                "$x^2 - 10x - 21$"
              ],
              "answer": 0,
              "explanation": {
                "en": "FOIL: $x^2 - 7x + 3x - 21 = x^2 - 4x - 21$. The middle term is the SUM of the outer and inner products, $-7x + 3x = -4x$. Choosing $x^2 - 21$ means the middle terms were dropped instead of combined.",
                "zh": "FOIL 展开：$x^2 - 7x + 3x - 21 = x^2 - 4x - 21$。中间项是外项与内项乘积之和 $-7x + 3x = -4x$。选 $x^2 - 21$ 说明把中间项直接丢掉而没有合并。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Expand $(2x + 5)(3x - 2)$ and write it as $ax^2 + bx + c$. What is the coefficient $b$? Give an integer.",
                "zh": "展开 $(2x + 5)(3x - 2)$ 并写成 $ax^2 + bx + c$ 的形式。系数 $b$ 是多少？请填一个整数。"
              },
              "answer": "11",
              "explanation": {
                "en": "The outer product is $2x \\cdot (-2) = -4x$ and the inner product is $5 \\cdot 3x = 15x$. Combining: $-4x + 15x = 11x$, so $b = 11$. (Full expansion: $6x^2 + 11x - 10$.)",
                "zh": "外项乘积为 $2x \\cdot (-2) = -4x$，内项乘积为 $5 \\cdot 3x = 15x$。合并得 $-4x + 15x = 11x$，所以 $b = 11$。（完整展开为 $6x^2 + 11x - 10$。）"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which expression equals $(x - 6)^2$?",
                "zh": "下列哪个式子等于 $(x - 6)^2$？"
              },
              "choices": [
                "$x^2 - 36$",
                "$x^2 + 36$",
                "$x^2 - 6x + 36$",
                "$x^2 - 12x + 36$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Use $(a - b)^2 = a^2 - 2ab + b^2$: here $a = x$, $b = 6$, so $x^2 - 12x + 36$. The trap $x^2 - 36$ comes from squaring each term separately and forgetting the middle term $-2ab$.",
                "zh": "用完全平方公式 $(a - b)^2 = a^2 - 2ab + b^2$：这里 $a = x$，$b = 6$，得 $x^2 - 12x + 36$。陷阱选项 $x^2 - 36$ 来自把每项分别平方而忘掉中间项 $-2ab$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Expand $(3x + 4)(3x - 4)$.",
                "zh": "展开 $(3x + 4)(3x - 4)$。"
              },
              "choices": [
                "$9x^2 - 24x - 16$",
                "$9x^2 - 16$",
                "$9x^2 + 16$",
                "$3x^2 - 16$"
              ],
              "answer": 1,
              "explanation": {
                "en": "This is the difference-of-squares pattern $(a + b)(a - b) = a^2 - b^2$ with $a = 3x$ and $b = 4$: $(3x)^2 - 4^2 = 9x^2 - 16$. The outer and inner products, $-12x$ and $+12x$, cancel, so there is no middle term. Note $(3x)^2 = 9x^2$, not $3x^2$.",
                "zh": "这是平方差公式 $(a + b)(a - b) = a^2 - b^2$，其中 $a = 3x$，$b = 4$：$(3x)^2 - 4^2 = 9x^2 - 16$。外项与内项乘积 $-12x$ 和 $+12x$ 相互抵消，所以没有中间项。注意 $(3x)^2 = 9x^2$，不是 $3x^2$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A square patio has side length $s$ meters. It is enlarged into a rectangle by adding 3 m to one side and 5 m to the other. The new area minus the old area simplifies to $as + b$ square meters. Find the increase in area when $s = 10$. Give an integer.",
                "zh": "一个正方形露台边长为 $s$ 米。将一边加长 3 米、另一边加长 5 米后变成矩形。新面积减去原面积可化简为 $as + b$ 平方米。当 $s = 10$ 时，求面积增加了多少。请填一个整数。"
              },
              "answer": "95",
              "explanation": {
                "en": "New area: $(s + 3)(s + 5) = s^2 + 8s + 15$. Subtract the old area $s^2$ to get the increase $8s + 15$. At $s = 10$: $8(10) + 15 = 95$ square meters. Expanding first makes the subtraction easy because the $s^2$ terms cancel.",
                "zh": "新面积：$(s + 3)(s + 5) = s^2 + 8s + 15$。减去原面积 $s^2$，增加量为 $8s + 15$。当 $s = 10$ 时：$8(10) + 15 = 95$ 平方米。先展开再相减很方便，因为 $s^2$ 项会抵消。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: expand $(2x - 3)(x^2 + 4x - 5)$ and write it in standard form. What is the coefficient of $x^2$? Give an integer.",
                "zh": "挑战题：展开 $(2x - 3)(x^2 + 4x - 5)$ 并写成标准形式。$x^2$ 的系数是多少？请填一个整数。"
              },
              "answer": "5",
              "explanation": {
                "en": "Only two of the six products give $x^2$ terms: $2x \\cdot 4x = 8x^2$ and $(-3) \\cdot x^2 = -3x^2$. They combine to $5x^2$, so the coefficient is $5$. (Full expansion: $2x^3 + 5x^2 - 22x + 15$.) Tracking only the products you need is a real time-saver on tests.",
                "zh": "六个乘积中只有两个产生 $x^2$ 项：$2x \\cdot 4x = 8x^2$ 和 $(-3) \\cdot x^2 = -3x^2$。合并得 $5x^2$，系数为 $5$。（完整展开为 $2x^3 + 5x^2 - 22x + 15$。）考试时只追踪需要的乘积能节省大量时间。"
              }
            }
          ]
        },
        {
          "id": "factoring-quadratics",
          "title": "Factoring Quadratics",
          "titleZh": "因式分解",
          "content": [
            {
              "type": "h2",
              "en": "Factoring: Multiplication in Reverse",
              "zh": "因式分解：乘法的逆运算"
            },
            {
              "type": "p",
              "en": "To factor a polynomial means to write it as a product of simpler polynomials. Since $(x + 3)(x + 5) = x^2 + 8x + 15$, we say $x^2 + 8x + 15$ factors as $(x + 3)(x + 5)$. Factoring is the key that unlocks solving quadratic equations, so it deserves careful practice. You can always check a factorization by multiplying it back out.",
              "zh": "把一个多项式分解因式，就是把它写成若干个更简单的多项式的乘积。由于 $(x + 3)(x + 5) = x^2 + 8x + 15$，我们说 $x^2 + 8x + 15$ 可分解为 $(x + 3)(x + 5)$。因式分解是解一元二次方程的钥匙，值得认真练习。你随时可以把结果乘回去检验。"
            },
            {
              "type": "h3",
              "en": "Always Start with the GCF",
              "zh": "第一步永远是提公因式"
            },
            {
              "type": "p",
              "en": "The greatest common factor (GCF) of the terms should be pulled out first. In $12x^3 + 18x^2$, every term is divisible by $6x^2$, so $12x^3 + 18x^2 = 6x^2(2x + 3)$. Factoring out the GCF first often turns a hard problem into an easy one — and forgetting it is the number-one reason factorizations end up incomplete.",
              "zh": "首先要提出各项的最大公因式（GCF）。在 $12x^3 + 18x^2$ 中，每一项都能被 $6x^2$ 整除，所以 $12x^3 + 18x^2 = 6x^2(2x + 3)$。先提公因式常能把难题变简单——而忘记这一步是因式分解不彻底的头号原因。"
            },
            {
              "type": "h3",
              "en": "Factoring $x^2 + bx + c$: Sum and Product",
              "zh": "分解 $x^2 + bx + c$：找和与积"
            },
            {
              "type": "p",
              "en": "When the leading coefficient is 1, look for two numbers whose product is $c$ and whose sum is $b$. If they are $p$ and $q$, then:",
              "zh": "当二次项系数为 1 时，寻找两个数，使它们的积为 $c$、和为 $b$。若这两个数是 $p$ 和 $q$，则："
            },
            {
              "type": "math",
              "tex": "x^2 + bx + c = (x + p)(x + q) \\quad \\text{where } p + q = b,\\; pq = c"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $c > 0$, the two numbers have the SAME sign — the sign of $b$.",
                  "zh": "若 $c > 0$，两数同号——符号与 $b$ 相同。"
                },
                {
                  "en": "If $c < 0$, the two numbers have OPPOSITE signs, and the one with the larger absolute value takes the sign of $b$.",
                  "zh": "若 $c < 0$，两数异号，绝对值较大的那个取 $b$ 的符号。"
                },
                {
                  "en": "Example: $x^2 - 5x - 24$ needs product $-24$ and sum $-5$: the pair is $-8$ and $3$, so it factors as $(x - 8)(x + 3)$.",
                  "zh": "例：$x^2 - 5x - 24$ 需要积为 $-24$、和为 $-5$：这对数是 $-8$ 和 $3$，故分解为 $(x - 8)(x + 3)$。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Factoring $ax^2 + bx + c$: Grouping",
              "zh": "分解 $ax^2 + bx + c$：分组分解法"
            },
            {
              "type": "p",
              "en": "When $a \\neq 1$, find two numbers whose product is $ac$ and whose sum is $b$. Use them to split the middle term into two pieces, then factor by grouping: factor a GCF from each pair, and a common binomial appears.",
              "zh": "当 $a \\neq 1$ 时，寻找两个数，使它们的积为 $ac$、和为 $b$。用它们把中间项拆成两项，再分组分解：对每一组提公因式，就会出现公共的二项式因子。"
            },
            {
              "type": "math",
              "tex": "2x^2 + 7x + 3 \\;\\Rightarrow\\; ac = 6,\\; b = 7 \\;\\Rightarrow\\; 2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)"
            },
            {
              "type": "note",
              "en": "Common mistake: after grouping, the two parentheses MUST match exactly. If you get $2x(x + 3) + 1(x - 3)$, something went wrong — recheck the split of the middle term and the signs you factored out.",
              "zh": "常见错误：分组后两个括号必须完全相同。如果得到 $2x(x + 3) + 1(x - 3)$，说明出错了——重新检查中间项的拆分以及提出的符号。"
            },
            {
              "type": "h3",
              "en": "Special Patterns",
              "zh": "特殊模式"
            },
            {
              "type": "p",
              "en": "The special products from multiplication, read right to left, become factoring patterns:",
              "zh": "把乘法公式从右往左读，就得到因式分解的模式："
            },
            {
              "type": "math",
              "tex": "a^2 - b^2 = (a + b)(a - b)"
            },
            {
              "type": "math",
              "tex": "a^2 + 2ab + b^2 = (a + b)^2 \\qquad a^2 - 2ab + b^2 = (a - b)^2"
            },
            {
              "type": "p",
              "en": "Spot a difference of squares by its shape: two perfect squares separated by a minus sign and no middle term, like $9x^2 - 49 = (3x + 7)(3x - 7)$. Spot a perfect-square trinomial by checking whether the middle term is $2ab$: in $x^2 - 10x + 25$, we have $a = x$, $b = 5$, and indeed $2(x)(5) = 10x$, so it is $(x - 5)^2$.",
              "zh": "平方差要看\"外形\"：两个完全平方项之间是减号且没有中间项，如 $9x^2 - 49 = (3x + 7)(3x - 7)$。完全平方三项式则检验中间项是否为 $2ab$：在 $x^2 - 10x + 25$ 中，$a = x$，$b = 5$，而 $2(x)(5) = 10x$ 恰好吻合，故为 $(x - 5)^2$。"
            },
            {
              "type": "note",
              "en": "Test tip: a SUM of squares like $x^2 + 25$ does not factor with real numbers. If a test answer choice shows $(x + 5)(x + 5)$ for it, multiply back: you would get an extra $10x$. Multiplying back is the fastest way to catch any factoring error.",
              "zh": "考试提示：平方和（如 $x^2 + 25$）在实数范围内不能分解。如果选项对它给出 $(x + 5)(x + 5)$，乘回去看看：会多出一个 $10x$。把结果乘回去是发现因式分解错误最快的方法。"
            },
            {
              "type": "h3",
              "en": "A Complete Factoring Strategy",
              "zh": "完整的因式分解策略"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Factor out the GCF of all terms.",
                  "zh": "第一步：提出所有项的最大公因式。"
                },
                {
                  "en": "Step 2: Count the terms. Two terms: try difference of squares. Three terms: try a perfect-square trinomial, then sum-product or grouping. Four terms: try grouping.",
                  "zh": "第二步：数项数。两项：尝试平方差。三项：先看是否为完全平方三项式，再用\"找和与积\"或分组法。四项：尝试分组分解。"
                },
                {
                  "en": "Step 3: Look at each factor — can it be factored again? Keep going until every factor is prime.",
                  "zh": "第三步：检查每个因式——还能继续分解吗？直到每个因式都不能再分解为止。"
                },
                {
                  "en": "Step 4: Check by multiplying everything back out.",
                  "zh": "第四步：把所有因式乘回去检验。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Grouping with a negative middle term",
                "zh": "例题 1：中间项为负的分组分解"
              },
              "problem": {
                "en": "Factor $6x^2 - 7x - 3$.",
                "zh": "分解因式 $6x^2 - 7x - 3$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $ac = 6 \\cdot (-3) = -18$ and $b = -7$. We need two numbers with product $-18$ and sum $-7$: they are $-9$ and $2$. Split the middle term:",
                  "zh": "这里 $ac = 6 \\cdot (-3) = -18$，$b = -7$。需要两个数，积为 $-18$、和为 $-7$：即 $-9$ 和 $2$。拆开中间项："
                },
                {
                  "type": "math",
                  "tex": "6x^2 - 9x + 2x - 3"
                },
                {
                  "type": "p",
                  "en": "Group and factor each pair: $3x(2x - 3) + 1(2x - 3)$. The common binomial is $(2x - 3)$.",
                  "zh": "分组并对每组提公因式：$3x(2x - 3) + 1(2x - 3)$。公共二项式因子是 $(2x - 3)$。"
                },
                {
                  "type": "math",
                  "tex": "6x^2 - 7x - 3 = (3x + 1)(2x - 3)"
                },
                {
                  "type": "p",
                  "en": "Check with FOIL: $6x^2 - 9x + 2x - 3 = 6x^2 - 7x - 3$. Correct.",
                  "zh": "用 FOIL 检验：$6x^2 - 9x + 2x - 3 = 6x^2 - 7x - 3$。正确。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Factoring completely",
                "zh": "例题 2：分解到底"
              },
              "problem": {
                "en": "Factor $2x^3 - 18x$ completely.",
                "zh": "把 $2x^3 - 18x$ 分解彻底。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Step 1: the GCF of $2x^3$ and $-18x$ is $2x$.",
                  "zh": "第一步：$2x^3$ 与 $-18x$ 的最大公因式是 $2x$。"
                },
                {
                  "type": "math",
                  "tex": "2x^3 - 18x = 2x(x^2 - 9)"
                },
                {
                  "type": "p",
                  "en": "Step 2: the factor $x^2 - 9$ is a difference of squares, $x^2 - 3^2$.",
                  "zh": "第二步：因式 $x^2 - 9$ 是平方差，即 $x^2 - 3^2$。"
                },
                {
                  "type": "math",
                  "tex": "2x^3 - 18x = 2x(x + 3)(x - 3)"
                },
                {
                  "type": "p",
                  "en": "Step 3: none of the factors $2x$, $x + 3$, $x - 3$ can be factored further, so we are done. Stopping at $2x(x^2 - 9)$ would lose points for an incomplete factorization.",
                  "zh": "第三步：$2x$、$x + 3$、$x - 3$ 都不能再分解，完成。若停在 $2x(x^2 - 9)$，会因分解不彻底而丢分。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Factor out the greatest common factor: $12x^3 + 18x^2$.",
                "zh": "提出最大公因式：$12x^3 + 18x^2$。"
              },
              "choices": [
                "$6x^2(2x + 3)$",
                "$6x(2x^2 + 3x)$",
                "$2x^2(6x + 9)$",
                "$3x^2(4x + 6)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "The GCF of the coefficients 12 and 18 is 6, and the lowest power of $x$ is $x^2$, so the GCF is $6x^2$. The other choices factor out something smaller than the GCF, leaving a common factor still inside the parentheses.",
                "zh": "系数 12 和 18 的最大公因数是 6，$x$ 的最低次幂是 $x^2$，所以最大公因式是 $6x^2$。其他选项提出的因式比 GCF 小，括号里仍留有公因式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Factor $x^2 + 7x + 12$.",
                "zh": "分解因式 $x^2 + 7x + 12$。"
              },
              "choices": [
                "$(x + 2)(x + 6)$",
                "$(x + 1)(x + 12)$",
                "$(x + 3)(x + 4)$",
                "$(x - 3)(x - 4)$"
              ],
              "answer": 2,
              "explanation": {
                "en": "We need two numbers with product 12 and sum 7: they are 3 and 4, giving $(x + 3)(x + 4)$. The pair 2 and 6 also multiplies to 12 but sums to 8 — always check BOTH conditions. The pair $-3, -4$ has sum $-7$, not $+7$.",
                "zh": "需要两个数，积为 12、和为 7：即 3 和 4，得 $(x + 3)(x + 4)$。2 和 6 的积也是 12，但和是 8——两个条件都必须验证。而 $-3$ 与 $-4$ 的和是 $-7$，不是 $+7$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Factor $x^2 - 5x - 24$ as $(x + p)(x + q)$ where $p < q$. What is $p$? Give an integer.",
                "zh": "把 $x^2 - 5x - 24$ 分解为 $(x + p)(x + q)$，其中 $p < q$。$p$ 是多少？请填一个整数。"
              },
              "answer": "-8",
              "explanation": {
                "en": "We need product $-24$ and sum $-5$. Since the product is negative, the signs differ, and the larger absolute value is negative: $-8$ and $3$. So $x^2 - 5x - 24 = (x - 8)(x + 3)$, and $p = -8$.",
                "zh": "需要积为 $-24$、和为 $-5$。积为负说明两数异号，且绝对值较大者为负：即 $-8$ 和 $3$。所以 $x^2 - 5x - 24 = (x - 8)(x + 3)$，$p = -8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Factor $2x^2 + 7x + 3$.",
                "zh": "分解因式 $2x^2 + 7x + 3$。"
              },
              "choices": [
                "$(2x + 3)(x + 1)$",
                "$(2x + 1)(x + 3)$",
                "$(2x - 1)(x - 3)$",
                "$(x + 1)(x + 6)$"
              ],
              "answer": 1,
              "explanation": {
                "en": "With $ac = 6$ and $b = 7$, split $7x$ into $6x + x$: $2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$. The distractor $(2x + 3)(x + 1)$ uses the right numbers in the wrong spots — it expands to $2x^2 + 5x + 3$. Always FOIL your answer to check.",
                "zh": "由 $ac = 6$、$b = 7$，把 $7x$ 拆成 $6x + x$：$2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$。干扰项 $(2x + 3)(x + 1)$ 数字对但位置错——展开是 $2x^2 + 5x + 3$。务必用 FOIL 乘回去检验。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which of the following is the complete factorization of $9x^2 - 49$?",
                "zh": "下列哪项是 $9x^2 - 49$ 的完整因式分解？"
              },
              "choices": [
                "$(3x - 7)^2$",
                "$(9x + 7)(x - 7)$",
                "$9(x^2 - 49)$",
                "$(3x + 7)(3x - 7)$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Both terms are perfect squares, $(3x)^2$ and $7^2$, separated by a minus sign with no middle term: difference of squares, $(3x + 7)(3x - 7)$. The trap $(3x - 7)^2$ expands to $9x^2 - 42x + 49$, which has a middle term — a perfect square trinomial needs that $-42x$ present in the original.",
                "zh": "两项都是完全平方，$(3x)^2$ 和 $7^2$，中间是减号且没有一次项：平方差，得 $(3x + 7)(3x - 7)$。陷阱选项 $(3x - 7)^2$ 展开为 $9x^2 - 42x + 49$，含有中间项——只有原式中出现 $-42x$ 才是完全平方三项式。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A rectangular banner has area $x^2 + 11x + 28$ square feet and width $x + 4$ feet. Its length is $x + c$ feet for some constant $c$. Find the length in feet when $x = 6$. Give an integer.",
                "zh": "一条矩形横幅的面积为 $x^2 + 11x + 28$ 平方英尺，宽为 $x + 4$ 英尺。它的长为 $x + c$ 英尺（$c$ 为常数）。当 $x = 6$ 时，求长是多少英尺。请填一个整数。"
              },
              "answer": "13",
              "explanation": {
                "en": "Since area = length × width, factor the area: we need product 28 and sum 11, which gives 4 and 7, so $x^2 + 11x + 28 = (x + 4)(x + 7)$. The length is $x + 7$, and at $x = 6$ that is $13$ feet.",
                "zh": "因为面积 = 长 × 宽，先分解面积：需要积为 28、和为 11 的两个数，即 4 和 7，故 $x^2 + 11x + 28 = (x + 4)(x + 7)$。长为 $x + 7$，当 $x = 6$ 时为 $13$ 英尺。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Challenge: which of the following is the complete factorization of $3x^3 - 48x$?",
                "zh": "挑战题：下列哪项是 $3x^3 - 48x$ 的完整因式分解？"
              },
              "choices": [
                "$3x(x^2 - 16)$",
                "$x(3x^2 - 48)$",
                "$3x(x + 4)(x - 4)$",
                "$3x(x - 4)^2$"
              ],
              "answer": 2,
              "explanation": {
                "en": "First factor the GCF: $3x(x^2 - 16)$. But $x^2 - 16$ is a difference of squares and factors further into $(x + 4)(x - 4)$, so the complete factorization is $3x(x + 4)(x - 4)$. The first choice is correct but incomplete — \"factor completely\" means every factor must be prime. $(x - 4)^2$ would expand to $x^2 - 8x + 16$, not $x^2 - 16$.",
                "zh": "先提最大公因式：$3x(x^2 - 16)$。但 $x^2 - 16$ 是平方差，还能继续分解为 $(x + 4)(x - 4)$，所以完整分解是 $3x(x + 4)(x - 4)$。第一个选项没有错但不彻底——\"分解彻底\"要求每个因式都不能再分解。$(x - 4)^2$ 展开是 $x^2 - 8x + 16$，不是 $x^2 - 16$。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-14-quadratic-functions-equations",
      "title": "Unit 14: Quadratic Functions & Equations",
      "titleZh": "第十四单元：二次函数与一元二次方程",
      "lessons": [
        {
          "id": "graphing-quadratics",
          "title": "Graphing Quadratic Functions",
          "titleZh": "二次函数的图象",
          "content": [
            {
              "type": "h2",
              "en": "A New Shape: the Parabola",
              "zh": "一种新图形：抛物线"
            },
            {
              "type": "p",
              "en": "A quadratic function is a function whose highest power of $x$ is 2. In standard form it is written $y = ax^2 + bx + c$, where $a \\neq 0$. Its graph is a U-shaped curve called a parabola. If $a > 0$ the parabola opens upward (like a smile) and has a lowest point; if $a < 0$ it opens downward (like a frown) and has a highest point.",
              "zh": "二次函数是 $x$ 的最高次幂为 2 的函数。其一般式（标准形式）写作 $y = ax^2 + bx + c$，其中 $a \\neq 0$。它的图象是一条 U 形曲线，叫做抛物线。当 $a > 0$ 时，抛物线开口向上（像微笑），有最低点；当 $a < 0$ 时，开口向下（像皱眉），有最高点。"
            },
            {
              "type": "p",
              "en": "That lowest or highest point is the vertex. The vertical line through the vertex is the axis of symmetry: the parabola is a perfect mirror image across this line. The size of $a$ also matters — a larger $|a|$ makes a narrower parabola, while $|a| < 1$ makes a wider one.",
              "zh": "这个最低点或最高点叫做顶点。过顶点的竖直线是对称轴：抛物线关于这条直线完全镜像对称。$a$ 的大小也有影响——$|a|$ 越大，抛物线越窄；$|a| < 1$ 时抛物线更宽。"
            },
            {
              "type": "h3",
              "en": "Graphing from Standard Form",
              "zh": "由一般式画图"
            },
            {
              "type": "p",
              "en": "For $y = ax^2 + bx + c$, the axis of symmetry is the vertical line",
              "zh": "对于 $y = ax^2 + bx + c$，对称轴是竖直线"
            },
            {
              "type": "math",
              "tex": "x = \\frac{-b}{2a}"
            },
            {
              "type": "p",
              "en": "To find the vertex, compute this $x$-value, then substitute it back into the function to get the $y$-coordinate. The $y$-intercept is easy: when $x = 0$, $y = c$, so the graph crosses the $y$-axis at $(0, c)$.",
              "zh": "要求顶点，先算出这个 $x$ 值，再把它代回函数求出 $y$ 坐标。$y$ 截距很容易求：当 $x = 0$ 时 $y = c$，所以图象与 $y$ 轴交于 $(0, c)$。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Find the axis of symmetry $x = \\frac{-b}{2a}$.",
                  "zh": "第 1 步：求对称轴 $x = \\frac{-b}{2a}$。"
                },
                {
                  "en": "Step 2: Substitute to find the vertex $\\left(\\frac{-b}{2a},\\ f\\left(\\frac{-b}{2a}\\right)\\right)$.",
                  "zh": "第 2 步：代入求顶点 $\\left(\\frac{-b}{2a},\\ f\\left(\\frac{-b}{2a}\\right)\\right)$。"
                },
                {
                  "en": "Step 3: Plot the $y$-intercept $(0, c)$ and its mirror image across the axis of symmetry.",
                  "zh": "第 3 步：描出 $y$ 截距点 $(0, c)$ 及它关于对称轴的对称点。"
                },
                {
                  "en": "Step 4: Plot one or two more symmetric pairs of points and draw a smooth curve.",
                  "zh": "第 4 步：再描一两对对称点，用平滑曲线连接。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: sign errors in $x = \\frac{-b}{2a}$. If $y = x^2 - 6x + 5$, then $b = -6$, so the axis is $x = \\frac{-(-6)}{2(1)} = 3$, not $-3$. Always write out the negative of $b$ carefully before simplifying.",
              "zh": "常见错误：在 $x = \\frac{-b}{2a}$ 中弄错符号。若 $y = x^2 - 6x + 5$，则 $b = -6$，对称轴为 $x = \\frac{-(-6)}{2(1)} = 3$，而不是 $-3$。化简前一定要认真写出 $b$ 的相反数。"
            },
            {
              "type": "h3",
              "en": "Vertex Form and Transformations",
              "zh": "顶点式与图象变换"
            },
            {
              "type": "p",
              "en": "The vertex form of a quadratic is $y = a(x - h)^2 + k$, whose vertex is exactly $(h, k)$. You can read the graph as a transformation of the parent function $y = x^2$: shift right $h$ units (left if $h$ is negative), shift up $k$ units (down if negative), stretch or shrink vertically by $|a|$, and reflect over the $x$-axis if $a < 0$.",
              "zh": "二次函数的顶点式是 $y = a(x - h)^2 + k$，其顶点恰为 $(h, k)$。可以把图象看作母函数 $y = x^2$ 经过变换的结果：向右平移 $h$ 个单位（$h$ 为负则向左），向上平移 $k$ 个单位（为负则向下），再按 $|a|$ 竖直伸缩，若 $a < 0$ 则关于 $x$ 轴翻折。"
            },
            {
              "type": "note",
              "en": "Watch the sign of $h$: the form has $(x - h)$, so $y = (x + 4)^2 - 1$ means $h = -4$ — the vertex is $(-4, -1)$, not $(4, -1)$. The horizontal shift always feels \"backwards\" from what the equation shows.",
              "zh": "注意 $h$ 的符号：顶点式中是 $(x - h)$，所以 $y = (x + 4)^2 - 1$ 意味着 $h = -4$——顶点是 $(-4, -1)$，不是 $(4, -1)$。水平平移的方向总是与式子表面看起来\"相反\"。"
            },
            {
              "type": "h3",
              "en": "Intercept (Factored) Form",
              "zh": "交点式（因式分解式）"
            },
            {
              "type": "p",
              "en": "When a quadratic factors, we can write it as $y = a(x - p)(x - q)$. Setting $y = 0$ shows that the graph crosses the $x$-axis at $x = p$ and $x = q$ — these are the zeros (or roots) of the function. By symmetry, the axis of symmetry sits exactly halfway between the zeros, at $x = \\frac{p + q}{2}$.",
              "zh": "当二次式可以因式分解时，可写成 $y = a(x - p)(x - q)$。令 $y = 0$ 可知图象与 $x$ 轴交于 $x = p$ 和 $x = q$——它们是函数的零点（根）。由对称性，对称轴恰好位于两个零点的正中间，即 $x = \\frac{p + q}{2}$。"
            },
            {
              "type": "p",
              "en": "Each form makes something easy to read: standard form shows the $y$-intercept $c$, vertex form shows the vertex $(h, k)$, and intercept form shows the zeros $p$ and $q$. Choosing the right form for the question is a real honors-level skill.",
              "zh": "每种形式都让某个信息一目了然：一般式直接给出 $y$ 截距 $c$，顶点式给出顶点 $(h, k)$，交点式给出零点 $p$ 和 $q$。根据问题选择合适的形式，是真正的荣誉班技能。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Graphing from standard form",
                "zh": "例题 1：由一般式画图"
              },
              "problem": {
                "en": "Find the vertex, axis of symmetry, and $y$-intercept of $y = x^2 - 4x - 5$, and state whether the vertex is a maximum or a minimum.",
                "zh": "求 $y = x^2 - 4x - 5$ 的顶点、对称轴和 $y$ 截距，并说明顶点是最大值点还是最小值点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Here $a = 1$, $b = -4$, $c = -5$. The axis of symmetry is",
                  "zh": "这里 $a = 1$，$b = -4$，$c = -5$。对称轴为"
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{-(-4)}{2(1)} = 2"
                },
                {
                  "type": "p",
                  "en": "Substitute $x = 2$: $y = (2)^2 - 4(2) - 5 = 4 - 8 - 5 = -9$. The vertex is $(2, -9)$.",
                  "zh": "代入 $x = 2$：$y = (2)^2 - 4(2) - 5 = 4 - 8 - 5 = -9$。顶点是 $(2, -9)$。"
                },
                {
                  "type": "p",
                  "en": "Since $a = 1 > 0$, the parabola opens upward, so the vertex is a minimum. The $y$-intercept is $(0, -5)$; by symmetry, the point $(4, -5)$ is also on the graph.",
                  "zh": "因为 $a = 1 > 0$，抛物线开口向上，所以顶点是最小值点。$y$ 截距是 $(0, -5)$；由对称性，点 $(4, -5)$ 也在图象上。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Reading intercept form",
                "zh": "例题 2：解读交点式"
              },
              "problem": {
                "en": "A parabola has equation $y = -2(x + 1)(x - 3)$. Find its zeros, its axis of symmetry, and its vertex.",
                "zh": "抛物线的方程为 $y = -2(x + 1)(x - 3)$。求它的零点、对称轴和顶点。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set $y = 0$: the factors give $x = -1$ and $x = 3$, so the zeros are $-1$ and $3$.",
                  "zh": "令 $y = 0$：由两个因式得 $x = -1$ 和 $x = 3$，所以零点是 $-1$ 和 $3$。"
                },
                {
                  "type": "p",
                  "en": "The axis of symmetry is halfway between the zeros:",
                  "zh": "对称轴位于两个零点的正中间："
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{-1 + 3}{2} = 1"
                },
                {
                  "type": "p",
                  "en": "Substitute $x = 1$: $y = -2(1 + 1)(1 - 3) = -2(2)(-2) = 8$. The vertex is $(1, 8)$, and since $a = -2 < 0$, the parabola opens downward with a maximum of 8.",
                  "zh": "代入 $x = 1$：$y = -2(1 + 1)(1 - 3) = -2(2)(-2) = 8$。顶点是 $(1, 8)$；由于 $a = -2 < 0$，抛物线开口向下，最大值为 8。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What is the axis of symmetry of $y = x^2 + 8x + 3$?",
                "zh": "$y = x^2 + 8x + 3$ 的对称轴是什么？"
              },
              "choices": [
                "$x = 8$",
                "$x = 4$",
                "$x = -4$",
                "$x = -8$"
              ],
              "answer": 2,
              "explanation": {
                "en": "Use $x = \\frac{-b}{2a} = \\frac{-8}{2(1)} = -4$. Choosing $x = 4$ is the classic sign slip: the formula starts with $-b$, and here $b = +8$.",
                "zh": "用 $x = \\frac{-b}{2a} = \\frac{-8}{2(1)} = -4$。选 $x = 4$ 是典型的符号错误：公式以 $-b$ 开头，而这里 $b = +8$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "What is the vertex of the parabola $y = 3(x - 2)^2 + 5$?",
                "zh": "抛物线 $y = 3(x - 2)^2 + 5$ 的顶点是什么？"
              },
              "choices": [
                "$(2, 5)$",
                "$(-2, 5)$",
                "$(2, -5)$",
                "$(3, 5)$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Vertex form $y = a(x - h)^2 + k$ has vertex $(h, k)$. Matching $(x - 2)$ gives $h = 2$ and $k = 5$, so the vertex is $(2, 5)$. The distractor $(-2, 5)$ comes from misreading the sign inside the parentheses.",
                "zh": "顶点式 $y = a(x - h)^2 + k$ 的顶点是 $(h, k)$。对照 $(x - 2)$ 得 $h = 2$，$k = 5$，所以顶点是 $(2, 5)$。干扰项 $(-2, 5)$ 来自看错括号内的符号。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Find the vertex of $y = x^2 - 6x + 1$. Give your answer as a coordinate pair (a,b).",
                "zh": "求 $y = x^2 - 6x + 1$ 的顶点。请以坐标 (a,b) 的形式作答。"
              },
              "answer": "(3,-8)",
              "accept": [
                "(3, -8)",
                "3,-8"
              ],
              "explanation": {
                "en": "Axis of symmetry: $x = \\frac{-(-6)}{2(1)} = 3$. Then $y = 3^2 - 6(3) + 1 = 9 - 18 + 1 = -8$. The vertex is $(3, -8)$.",
                "zh": "对称轴：$x = \\frac{-(-6)}{2(1)} = 3$。再算 $y = 3^2 - 6(3) + 1 = 9 - 18 + 1 = -8$。顶点是 $(3, -8)$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Compared with the graph of $y = x^2$, the graph of $y = -\\frac{1}{2}(x + 3)^2$ is:",
                "zh": "与 $y = x^2$ 的图象相比，$y = -\\frac{1}{2}(x + 3)^2$ 的图象是："
              },
              "choices": [
                "reflected over the $x$-axis, wider, shifted left 3 / 关于 $x$ 轴翻折，更宽，向左平移 3",
                "reflected over the $x$-axis, narrower, shifted right 3 / 关于 $x$ 轴翻折，更窄，向右平移 3",
                "opening upward, wider, shifted left 3 / 开口向上，更宽，向左平移 3",
                "reflected over the $x$-axis, wider, shifted right 3 / 关于 $x$ 轴翻折，更宽，向右平移 3"
              ],
              "answer": 0,
              "explanation": {
                "en": "The negative $a$ reflects the parabola over the $x$-axis; $|a| = \\frac{1}{2} < 1$ makes it wider; and $(x + 3)$ means $h = -3$, a shift LEFT 3. Shift right is the tempting error — the sign of the horizontal shift is opposite to what appears in the parentheses.",
                "zh": "$a$ 为负使抛物线关于 $x$ 轴翻折；$|a| = \\frac{1}{2} < 1$ 使图象更宽；$(x + 3)$ 表示 $h = -3$，即向左平移 3。\"向右平移\"是诱人的错误——水平平移的方向与括号内看到的符号相反。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "The parabola $y = 2(x - 1)(x - 7)$ crosses the $x$-axis at two points. What is the $x$-coordinate of its axis of symmetry? Give an integer.",
                "zh": "抛物线 $y = 2(x - 1)(x - 7)$ 与 $x$ 轴交于两点。它的对称轴的 $x$ 坐标是多少？请填一个整数。"
              },
              "answer": "4",
              "accept": [
                "4.0",
                "x=4"
              ],
              "explanation": {
                "en": "The zeros are $x = 1$ and $x = 7$. The axis of symmetry is halfway between them: $x = \\frac{1 + 7}{2} = 4$. No need to multiply out — intercept form hands you the zeros directly.",
                "zh": "零点是 $x = 1$ 和 $x = 7$。对称轴在它们正中间：$x = \\frac{1 + 7}{2} = 4$。不必展开——交点式直接给出零点。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "A ball's height in feet after $t$ seconds is $h = -16t^2 + 64t + 5$. After how many seconds does the ball reach its maximum height?",
                "zh": "一个球在 $t$ 秒后的高度（英尺）为 $h = -16t^2 + 64t + 5$。球在多少秒后达到最大高度？"
              },
              "choices": [
                "$t = 4$",
                "$t = 5$",
                "$t = 2$",
                "$t = 64$"
              ],
              "answer": 2,
              "explanation": {
                "en": "The maximum occurs at the vertex: $t = \\frac{-b}{2a} = \\frac{-64}{2(-16)} = 2$ seconds. The answer $t = 4$ is when the ball comes back down to its starting height (twice the vertex time), a common mix-up.",
                "zh": "最大值出现在顶点处：$t = \\frac{-b}{2a} = \\frac{-64}{2(-16)} = 2$ 秒。答案 $t = 4$ 是球回落到出发高度的时刻（顶点时间的两倍），这是常见的混淆。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: A parabola with $a = 1$ has zeros at $x = -2$ and $x = 6$. What is the $y$-coordinate of its vertex? Give an integer.",
                "zh": "挑战题：某抛物线的 $a = 1$，零点为 $x = -2$ 和 $x = 6$。它顶点的 $y$ 坐标是多少？请填一个整数。"
              },
              "answer": "-16",
              "accept": [
                "-16.0"
              ],
              "explanation": {
                "en": "Write the intercept form $y = (x + 2)(x - 6)$. The axis of symmetry is $x = \\frac{-2 + 6}{2} = 2$. Substitute: $y = (2 + 2)(2 - 6) = (4)(-4) = -16$. Building the equation from the zeros first is the key honors move.",
                "zh": "写出交点式 $y = (x + 2)(x - 6)$。对称轴为 $x = \\frac{-2 + 6}{2} = 2$。代入得 $y = (2 + 2)(2 - 6) = (4)(-4) = -16$。先由零点构造方程是关键的荣誉班解法。"
              }
            }
          ]
        },
        {
          "id": "solving-quadratics-factoring-square-roots",
          "title": "Solving Quadratics by Factoring and Square Roots",
          "titleZh": "因式分解法与开平方法解一元二次方程",
          "content": [
            {
              "type": "h2",
              "en": "From Functions to Equations",
              "zh": "从函数到方程"
            },
            {
              "type": "p",
              "en": "A quadratic equation sets a quadratic expression equal to a number, usually zero: $ax^2 + bx + c = 0$. Solving it means finding every value of $x$ that makes the equation true. Graphically, the solutions of $ax^2 + bx + c = 0$ are exactly the $x$-intercepts of the parabola $y = ax^2 + bx + c$ — the places where the graph touches or crosses the $x$-axis.",
              "zh": "一元二次方程是让一个二次式等于某个数（通常是零）：$ax^2 + bx + c = 0$。解方程就是找出使等式成立的所有 $x$ 值。从图象上看，$ax^2 + bx + c = 0$ 的解恰好是抛物线 $y = ax^2 + bx + c$ 与 $x$ 轴的交点——图象接触或穿过 $x$ 轴的位置。"
            },
            {
              "type": "h3",
              "en": "The Zero Product Property",
              "zh": "零积性质"
            },
            {
              "type": "p",
              "en": "The whole factoring method rests on one fact: if a product of two numbers is zero, at least one of the factors must be zero. In symbols, if $AB = 0$, then $A = 0$ or $B = 0$. This works ONLY for zero — if $AB = 12$, we cannot conclude anything about $A$ or $B$ individually.",
              "zh": "整个因式分解法建立在一个事实上：若两个数的乘积为零，则至少有一个因数为零。用符号表示：若 $AB = 0$，则 $A = 0$ 或 $B = 0$。这只对零成立——若 $AB = 12$，我们无法对 $A$ 或 $B$ 单独下任何结论。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "Step 1: Move everything to one side so the equation equals 0.",
                  "zh": "第 1 步：把所有项移到一边，使方程等于 0。"
                },
                {
                  "en": "Step 2: Factor the quadratic completely.",
                  "zh": "第 2 步：把二次式完全因式分解。"
                },
                {
                  "en": "Step 3: Set each factor equal to 0 and solve each small equation.",
                  "zh": "第 3 步：令每个因式等于 0，分别解出小方程。"
                },
                {
                  "en": "Step 4: Check both solutions in the original equation.",
                  "zh": "第 4 步：把两个解都代回原方程检验。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Common mistake: solving $x^2 = 5x$ by dividing both sides by $x$. That throws away the solution $x = 0$! Instead move everything to one side: $x^2 - 5x = 0$, factor $x(x - 5) = 0$, so $x = 0$ or $x = 5$. Never divide by an expression that could be zero.",
              "zh": "常见错误：解 $x^2 = 5x$ 时两边同除以 $x$。这样会丢掉解 $x = 0$！正确做法是移项：$x^2 - 5x = 0$，分解为 $x(x - 5) = 0$，所以 $x = 0$ 或 $x = 5$。绝不要除以一个可能为零的式子。"
            },
            {
              "type": "h3",
              "en": "Solving by Square Roots",
              "zh": "开平方法"
            },
            {
              "type": "p",
              "en": "When there is no $x$-term, isolate the square and take the square root of both sides — remembering BOTH the positive and negative root. The equation $x^2 = k$ (with $k > 0$) has two solutions:",
              "zh": "当方程中没有一次项时，先把平方项孤立出来，再对两边开平方——记住正负两个平方根。方程 $x^2 = k$（$k > 0$）有两个解："
            },
            {
              "type": "math",
              "tex": "x = \\pm\\sqrt{k}"
            },
            {
              "type": "p",
              "en": "The same idea works for a perfect square of a binomial: if $a(x - h)^2 = k$, first divide by $a$, then take square roots to get $x - h = \\pm\\sqrt{\\frac{k}{a}}$, and finally add $h$. If the isolated square equals a negative number, there is no real solution — a square can never be negative.",
              "zh": "同样的思路适用于二项式的完全平方：若 $a(x - h)^2 = k$，先除以 $a$，再开平方得 $x - h = \\pm\\sqrt{\\frac{k}{a}}$，最后加上 $h$。如果孤立出的平方等于负数，则方程无实数解——平方永远不可能为负。"
            },
            {
              "type": "h3",
              "en": "Completing the Square",
              "zh": "配方法"
            },
            {
              "type": "p",
              "en": "Not every quadratic factors nicely, but every quadratic can be rewritten to contain a perfect square. Notice the pattern in perfect-square trinomials: $x^2 + 6x + 9 = (x + 3)^2$. The constant term, 9, is always the square of half the middle coefficient: $\\left(\\frac{6}{2}\\right)^2 = 9$. Completing the square means adding exactly the right constant to build this pattern on purpose.",
              "zh": "不是每个二次式都能顺利分解，但每个二次式都可以改写成含完全平方的形式。观察完全平方三项式的规律：$x^2 + 6x + 9 = (x + 3)^2$。常数项 9 总是中间项系数一半的平方：$\\left(\\frac{6}{2}\\right)^2 = 9$。配方就是有意加上恰好合适的常数来构造这个规律。"
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "To solve $x^2 + bx = d$: add $\\left(\\frac{b}{2}\\right)^2$ to BOTH sides.",
                  "zh": "解 $x^2 + bx = d$：在两边同时加上 $\\left(\\frac{b}{2}\\right)^2$。"
                },
                {
                  "en": "The left side becomes the perfect square $\\left(x + \\frac{b}{2}\\right)^2$.",
                  "zh": "左边变成完全平方 $\\left(x + \\frac{b}{2}\\right)^2$。"
                },
                {
                  "en": "Finish by taking square roots of both sides ($\\pm$!).",
                  "zh": "最后对两边开平方（别忘了 $\\pm$！）。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: forgetting the $\\pm$ when taking a square root costs you half the answers — and on a test, half the credit. Every time you write $\\sqrt{\\phantom{x}}$ while solving, write $\\pm$ in the same pen stroke.",
              "zh": "考试提示：开平方时忘记 $\\pm$ 会丢掉一半的解——考试中也会丢掉一半的分数。每次在解题中写根号时，同一笔就把 $\\pm$ 写上。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Solving by factoring",
                "zh": "例题 1：因式分解法"
              },
              "problem": {
                "en": "Solve $x^2 - 3x = 28$.",
                "zh": "解方程 $x^2 - 3x = 28$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "First make one side zero — do NOT use the zero product property while the right side is 28.",
                  "zh": "先把一边化为零——右边是 28 时不能使用零积性质。"
                },
                {
                  "type": "math",
                  "tex": "x^2 - 3x - 28 = 0"
                },
                {
                  "type": "p",
                  "en": "Look for two numbers that multiply to $-28$ and add to $-3$: they are $-7$ and $4$.",
                  "zh": "找两个数，乘积为 $-28$，和为 $-3$：它们是 $-7$ 和 $4$。"
                },
                {
                  "type": "math",
                  "tex": "(x - 7)(x + 4) = 0"
                },
                {
                  "type": "p",
                  "en": "By the zero product property, $x - 7 = 0$ or $x + 4 = 0$, so $x = 7$ or $x = -4$. Check: $7^2 - 3(7) = 49 - 21 = 28$. ✓",
                  "zh": "由零积性质，$x - 7 = 0$ 或 $x + 4 = 0$，所以 $x = 7$ 或 $x = -4$。检验：$7^2 - 3(7) = 49 - 21 = 28$。✓"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Completing the square",
                "zh": "例题 2：配方法"
              },
              "problem": {
                "en": "Solve $x^2 + 8x + 3 = 0$ by completing the square.",
                "zh": "用配方法解 $x^2 + 8x + 3 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Move the constant: $x^2 + 8x = -3$. Half of 8 is 4, and $4^2 = 16$, so add 16 to both sides:",
                  "zh": "移走常数项：$x^2 + 8x = -3$。8 的一半是 4，$4^2 = 16$，两边同加 16："
                },
                {
                  "type": "math",
                  "tex": "x^2 + 8x + 16 = 13 \\quad\\Longrightarrow\\quad (x + 4)^2 = 13"
                },
                {
                  "type": "p",
                  "en": "Take square roots of both sides, keeping both signs:",
                  "zh": "两边开平方，保留正负两个符号："
                },
                {
                  "type": "math",
                  "tex": "x + 4 = \\pm\\sqrt{13} \\quad\\Longrightarrow\\quad x = -4 \\pm \\sqrt{13}"
                },
                {
                  "type": "p",
                  "en": "This quadratic does not factor over the integers, yet completing the square solved it exactly. The two solutions are irrational and symmetric around $x = -4$ — the axis of symmetry of the matching parabola.",
                  "zh": "这个二次式在整数范围内无法分解，但配方法给出了精确解。两个解都是无理数，且关于 $x = -4$ 对称——这正是对应抛物线的对称轴。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "What are the solutions of $(x + 5)(x - 2) = 0$?",
                "zh": "$(x + 5)(x - 2) = 0$ 的解是什么？"
              },
              "choices": [
                "$x = 5$ or $x = -2$",
                "$x = -5$ or $x = 2$",
                "$x = -5$ or $x = -2$",
                "$x = 5$ or $x = 2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Set each factor to zero: $x + 5 = 0$ gives $x = -5$, and $x - 2 = 0$ gives $x = 2$. Reading the solutions with the same signs shown in the factors ($5$ and $-2$) is the classic trap — each solution is the OPPOSITE of the number in its factor.",
                "zh": "令每个因式为零：$x + 5 = 0$ 得 $x = -5$，$x - 2 = 0$ 得 $x = 2$。按因式中原样的符号（$5$ 和 $-2$）读出解是典型陷阱——每个解都是因式中数字的相反数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^2 = 49$. Enter the negative solution as an integer.",
                "zh": "解方程 $x^2 = 49$。请以整数填写其中的负数解。"
              },
              "answer": "-7",
              "accept": [
                "-7.0"
              ],
              "explanation": {
                "en": "Taking square roots of both sides gives $x = \\pm 7$. The equation has two solutions, $7$ and $-7$; the negative one is $-7$. Writing only $x = 7$ misses half the answer.",
                "zh": "两边开平方得 $x = \\pm 7$。方程有两个解：$7$ 和 $-7$；其中负数解是 $-7$。只写 $x = 7$ 会漏掉一半的答案。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which number must you add to both sides of $x^2 - 10x = 7$ to complete the square?",
                "zh": "要对 $x^2 - 10x = 7$ 配方，必须在两边同时加上哪个数？"
              },
              "choices": [
                "$100$",
                "$5$",
                "$-25$",
                "$25$"
              ],
              "answer": 3,
              "explanation": {
                "en": "Half of $-10$ is $-5$, and $(-5)^2 = 25$. Adding 25 gives $(x - 5)^2 = 32$. The distractor 100 comes from squaring the whole coefficient instead of half of it.",
                "zh": "$-10$ 的一半是 $-5$，$(-5)^2 = 25$。加上 25 后得 $(x - 5)^2 = 32$。干扰项 100 来自对整个系数平方，而不是先取一半。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $3(x - 2)^2 = 48$.",
                "zh": "解方程 $3(x - 2)^2 = 48$。"
              },
              "choices": [
                "$x = 6$ or $x = -2$",
                "$x = 6$ only",
                "$x = 4$ or $x = -4$",
                "$x = 2 \\pm \\sqrt{48}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "Divide by 3: $(x - 2)^2 = 16$. Square roots: $x - 2 = \\pm 4$, so $x = 6$ or $x = -2$. Choosing \"$x = 6$ only\" forgets the negative root; $x = \\pm 4$ forgets to add the 2 back.",
                "zh": "除以 3：$(x - 2)^2 = 16$。开平方：$x - 2 = \\pm 4$，所以 $x = 6$ 或 $x = -2$。只选 \"$x = 6$\" 是忘了负根；选 $x = \\pm 4$ 是忘了把 2 加回去。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Solve $x^2 + 2x - 15 = 0$. Enter the positive solution as an integer.",
                "zh": "解方程 $x^2 + 2x - 15 = 0$。请以整数填写其中的正数解。"
              },
              "answer": "3",
              "accept": [
                "3.0",
                "+3"
              ],
              "explanation": {
                "en": "Factor: two numbers with product $-15$ and sum $2$ are $5$ and $-3$, so $(x + 5)(x - 3) = 0$. The solutions are $x = -5$ and $x = 3$; the positive one is $3$.",
                "zh": "因式分解：乘积为 $-15$、和为 $2$ 的两个数是 $5$ 和 $-3$，所以 $(x + 5)(x - 3) = 0$。解为 $x = -5$ 和 $x = 3$；正数解是 $3$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The graph of $y = x^2 - 4x + 4$ touches the $x$-axis at exactly one point. Why?",
                "zh": "$y = x^2 - 4x + 4$ 的图象与 $x$ 轴只接触于一点。为什么？"
              },
              "choices": [
                "The equation $x^2 - 4x + 4 = 0$ has no real solutions / 方程 $x^2 - 4x + 4 = 0$ 无实数解",
                "It factors as $(x - 2)^2$, a repeated zero at $x = 2$ / 它可分解为 $(x - 2)^2$，在 $x = 2$ 处有重根",
                "The parabola opens downward / 抛物线开口向下",
                "The $y$-intercept is 4 / $y$ 截距是 4"
              ],
              "answer": 1,
              "explanation": {
                "en": "$x^2 - 4x + 4 = (x - 2)^2$ is a perfect square, so the only solution is $x = 2$ (a double root). The vertex of the parabola sits exactly ON the $x$-axis at $(2, 0)$ — touching, not crossing. \"No real solutions\" would mean the graph misses the axis entirely.",
                "zh": "$x^2 - 4x + 4 = (x - 2)^2$ 是完全平方，唯一的解是 $x = 2$（二重根）。抛物线的顶点恰好落在 $x$ 轴上的 $(2, 0)$——相切而不穿过。\"无实数解\"则意味着图象与 $x$ 轴完全不相交。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: A rectangular garden is 3 m longer than it is wide, and its area is 40 square meters. What is the width in meters? Give an integer.",
                "zh": "挑战题：一个长方形花园的长比宽多 3 米，面积为 40 平方米。宽是多少米？请填一个整数。"
              },
              "answer": "5",
              "accept": [
                "5.0"
              ],
              "explanation": {
                "en": "Let the width be $w$; the length is $w + 3$. Then $w(w + 3) = 40$, so $w^2 + 3w - 40 = 0$, which factors as $(w + 8)(w - 5) = 0$. The solutions are $w = -8$ and $w = 5$, but a width cannot be negative, so $w = 5$ m. Always reject solutions that make no sense in context.",
                "zh": "设宽为 $w$，则长为 $w + 3$。于是 $w(w + 3) = 40$，即 $w^2 + 3w - 40 = 0$，分解为 $(w + 8)(w - 5) = 0$。解为 $w = -8$ 和 $w = 5$，但宽不能为负，所以 $w = 5$ 米。一定要舍去不符合实际情境的解。"
              }
            }
          ]
        },
        {
          "id": "quadratic-formula-and-applications",
          "title": "The Quadratic Formula and Applications",
          "titleZh": "求根公式及其应用",
          "content": [
            {
              "type": "h2",
              "en": "One Formula to Solve Them All",
              "zh": "一个公式解所有二次方程"
            },
            {
              "type": "p",
              "en": "Factoring only works when the numbers cooperate, and completing the square can get messy. The quadratic formula solves ANY quadratic equation $ax^2 + bx + c = 0$ in one sweep:",
              "zh": "因式分解只有在数字\"配合\"时才好用，配方法有时又很繁琐。求根公式可以一步解出任何一元二次方程 $ax^2 + bx + c = 0$："
            },
            {
              "type": "math",
              "tex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
            },
            {
              "type": "h3",
              "en": "Where the Formula Comes From",
              "zh": "公式从何而来"
            },
            {
              "type": "p",
              "en": "In an honors class you should know that the formula is nothing more than completing the square done once and for all with letters. Start with $ax^2 + bx + c = 0$, divide by $a$, and move the constant:",
              "zh": "在荣誉班里，你应当知道这个公式不过是用字母把配方法一次性做完。从 $ax^2 + bx + c = 0$ 出发，除以 $a$ 并移走常数项："
            },
            {
              "type": "math",
              "tex": "x^2 + \\frac{b}{a}x = -\\frac{c}{a}"
            },
            {
              "type": "p",
              "en": "Add the square of half the middle coefficient, $\\left(\\frac{b}{2a}\\right)^2$, to both sides. The left side becomes a perfect square:",
              "zh": "在两边同加中间项系数一半的平方 $\\left(\\frac{b}{2a}\\right)^2$。左边变成完全平方："
            },
            {
              "type": "math",
              "tex": "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}"
            },
            {
              "type": "p",
              "en": "Take square roots of both sides ($\\pm$!) and subtract $\\frac{b}{2a}$ — and the quadratic formula appears. Notice the familiar landmark $\\frac{-b}{2a}$ inside it: the two solutions sit symmetrically on either side of the parabola's axis of symmetry.",
              "zh": "对两边开平方（记得 $\\pm$！），再减去 $\\frac{b}{2a}$——求根公式就出现了。注意公式中熟悉的 $\\frac{-b}{2a}$：两个解对称地分布在抛物线对称轴的两侧。"
            },
            {
              "type": "note",
              "en": "Common mistake: sign slips when identifying $a$, $b$, $c$. For $2x^2 - 5x - 3 = 0$, write $a = 2$, $b = -5$, $c = -3$ BEFORE substituting, and put negatives in parentheses: $-(-5) = 5$ and $(-5)^2 = 25$. Also, the fraction bar goes under the ENTIRE expression $-b \\pm \\sqrt{b^2 - 4ac}$, not just the square root.",
              "zh": "常见错误：确定 $a$、$b$、$c$ 时符号出错。对于 $2x^2 - 5x - 3 = 0$，应在代入前先写出 $a = 2$，$b = -5$，$c = -3$，并给负数加括号：$-(-5) = 5$，$(-5)^2 = 25$。另外，分数线要覆盖整个 $-b \\pm \\sqrt{b^2 - 4ac}$，而不是只覆盖根号。"
            },
            {
              "type": "h3",
              "en": "The Discriminant",
              "zh": "判别式"
            },
            {
              "type": "p",
              "en": "The expression under the square root, $b^2 - 4ac$, is called the discriminant. Its sign tells you how many real solutions the equation has — before you solve anything:",
              "zh": "根号下的式子 $b^2 - 4ac$ 叫做判别式。不用真正解方程，它的符号就能告诉你方程有几个实数解："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "If $b^2 - 4ac > 0$: two different real solutions (the parabola crosses the $x$-axis twice).",
                  "zh": "若 $b^2 - 4ac > 0$：有两个不同的实数解（抛物线与 $x$ 轴相交于两点）。"
                },
                {
                  "en": "If $b^2 - 4ac = 0$: exactly one real solution, a double root (the vertex touches the $x$-axis).",
                  "zh": "若 $b^2 - 4ac = 0$：恰有一个实数解，即二重根（顶点与 $x$ 轴相切）。"
                },
                {
                  "en": "If $b^2 - 4ac < 0$: no real solutions (the parabola never reaches the $x$-axis).",
                  "zh": "若 $b^2 - 4ac < 0$：无实数解（抛物线与 $x$ 轴不相交）。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Choosing a Method, and Word Problems",
              "zh": "选择解法与应用题"
            },
            {
              "type": "p",
              "en": "A good strategy: try square roots if there is no $x$-term; try factoring if the numbers are small and friendly; use the quadratic formula (or completing the square) for everything else. The formula always works — it is the safety net.",
              "zh": "好的策略是：没有一次项时用开平方法；数字小而友好时先试因式分解；其余情况用求根公式（或配方法）。求根公式永远有效——它是保底方法。"
            },
            {
              "type": "p",
              "en": "In applications, quadratics model projectile motion (heights follow $h = -16t^2 + v_0 t + h_0$ in feet, or $h = -4.9t^2 + v_0 t + h_0$ in meters) and area problems. The math often produces two solutions, but the situation usually accepts only one: a time cannot be negative, a length cannot be negative. Solving is only half the job — interpreting the answer is the other half.",
              "zh": "在应用中，二次函数可用来描述抛体运动（高度满足 $h = -16t^2 + v_0 t + h_0$（英尺）或 $h = -4.9t^2 + v_0 t + h_0$（米））以及面积问题。数学上常常解出两个解，但实际情境通常只接受一个：时间不能为负，长度不能为负。解出方程只是一半工作——解释答案是另一半。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Using the formula carefully",
                "zh": "例题 1：细心使用求根公式"
              },
              "problem": {
                "en": "Solve $2x^2 - 5x - 3 = 0$ using the quadratic formula.",
                "zh": "用求根公式解 $2x^2 - 5x - 3 = 0$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Identify $a = 2$, $b = -5$, $c = -3$. Substitute with parentheses:",
                  "zh": "确定 $a = 2$，$b = -5$，$c = -3$。带括号代入："
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4(2)(-3)}}{2(2)} = \\frac{5 \\pm \\sqrt{25 + 24}}{4}"
                },
                {
                  "type": "math",
                  "tex": "x = \\frac{5 \\pm \\sqrt{49}}{4} = \\frac{5 \\pm 7}{4}"
                },
                {
                  "type": "p",
                  "en": "So $x = \\frac{12}{4} = 3$ or $x = \\frac{-2}{4} = -\\frac{1}{2}$. Since the discriminant 49 is a perfect square, this equation would also have factored: $(2x + 1)(x - 3) = 0$. The formula and factoring must always agree.",
                  "zh": "所以 $x = \\frac{12}{4} = 3$ 或 $x = \\frac{-2}{4} = -\\frac{1}{2}$。由于判别式 49 是完全平方数，这个方程其实也能因式分解：$(2x + 1)(x - 3) = 0$。公式法与因式分解法的结果必然一致。"
                }
              ]
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Projectile motion",
                "zh": "例题 2：抛体运动"
              },
              "problem": {
                "en": "A diver jumps from a 32-foot platform. Her height in feet after $t$ seconds is $h = -16t^2 + 8t + 32$. When does she hit the water ($h = 0$)? Round to the nearest tenth of a second.",
                "zh": "一名跳水运动员从 32 英尺高的跳台起跳。$t$ 秒后她的高度（英尺）为 $h = -16t^2 + 8t + 32$。她何时入水（$h = 0$）？结果保留一位小数（秒）。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Set $h = 0$: $-16t^2 + 8t + 32 = 0$. Divide every term by $-8$ to simplify: $2t^2 - t - 4 = 0$. Now $a = 2$, $b = -1$, $c = -4$:",
                  "zh": "令 $h = 0$：$-16t^2 + 8t + 32 = 0$。每项除以 $-8$ 化简：$2t^2 - t - 4 = 0$。此时 $a = 2$，$b = -1$，$c = -4$："
                },
                {
                  "type": "math",
                  "tex": "t = \\frac{1 \\pm \\sqrt{1 + 32}}{4} = \\frac{1 \\pm \\sqrt{33}}{4}"
                },
                {
                  "type": "p",
                  "en": "The two solutions are $t \\approx \\frac{1 + 5.745}{4} \\approx 1.7$ and $t \\approx \\frac{1 - 5.745}{4} \\approx -1.2$. Time cannot be negative, so we reject $-1.2$: she hits the water after about $1.7$ seconds. The negative root is where the parabola would cross zero if the motion had started earlier — real math, but not part of the story.",
                  "zh": "两个解为 $t \\approx \\frac{1 + 5.745}{4} \\approx 1.7$ 和 $t \\approx \\frac{1 - 5.745}{4} \\approx -1.2$。时间不能为负，舍去 $-1.2$：她大约在 $1.7$ 秒后入水。负根是\"假如运动更早开始\"抛物线过零的位置——数学上真实存在，但不属于这个情境。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "For the equation $3x^2 - 7x + 2 = 0$, what are the correct values of $a$, $b$, and $c$ for the quadratic formula?",
                "zh": "对于方程 $3x^2 - 7x + 2 = 0$，代入求根公式时 $a$、$b$、$c$ 的正确值是什么？"
              },
              "choices": [
                "$a = 3,\\ b = 7,\\ c = 2$",
                "$a = 3,\\ b = -7,\\ c = 2$",
                "$a = -3,\\ b = 7,\\ c = -2$",
                "$a = 3,\\ b = -7,\\ c = -2$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Match against $ax^2 + bx + c = 0$ keeping every sign: $a = 3$, $b = -7$, $c = 2$. Dropping the negative on $b$ is the single most common quadratic-formula error, and it changes both solutions.",
                "zh": "与 $ax^2 + bx + c = 0$ 对照并保留所有符号：$a = 3$，$b = -7$，$c = 2$。丢掉 $b$ 的负号是使用求根公式时最常见的错误，而且会改变两个解。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Compute the discriminant of $x^2 + 6x + 9 = 0$. Give an integer.",
                "zh": "计算 $x^2 + 6x + 9 = 0$ 的判别式。请填一个整数。"
              },
              "answer": "0",
              "accept": [
                "0.0",
                "-0"
              ],
              "explanation": {
                "en": "$b^2 - 4ac = 6^2 - 4(1)(9) = 36 - 36 = 0$. A zero discriminant means exactly one real solution (a double root): indeed $x^2 + 6x + 9 = (x + 3)^2$, so $x = -3$ twice.",
                "zh": "$b^2 - 4ac = 6^2 - 4(1)(9) = 36 - 36 = 0$。判别式为零意味着恰有一个实数解（二重根）：事实上 $x^2 + 6x + 9 = (x + 3)^2$，所以 $x = -3$ 是二重根。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "How many real solutions does $2x^2 + 3x + 5 = 0$ have?",
                "zh": "方程 $2x^2 + 3x + 5 = 0$ 有几个实数解？"
              },
              "choices": [
                "Two / 两个",
                "One / 一个",
                "None / 没有",
                "Cannot be determined / 无法确定"
              ],
              "answer": 2,
              "explanation": {
                "en": "The discriminant is $3^2 - 4(2)(5) = 9 - 40 = -31 < 0$, so there are no real solutions — the parabola opens upward with its vertex above the $x$-axis. \"Two\" is tempting if you compute $9 + 40$ by mis-handling the subtraction.",
                "zh": "判别式为 $3^2 - 4(2)(5) = 9 - 40 = -31 < 0$，所以无实数解——抛物线开口向上且顶点在 $x$ 轴上方。如果把减法误算成 $9 + 40$，就会误选\"两个\"。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Solve $x^2 + 4x - 1 = 0$ using the quadratic formula.",
                "zh": "用求根公式解 $x^2 + 4x - 1 = 0$。"
              },
              "choices": [
                "$x = -2 \\pm \\sqrt{5}$",
                "$x = 2 \\pm \\sqrt{5}$",
                "$x = -4 \\pm \\sqrt{5}$",
                "$x = -2 \\pm \\sqrt{3}$"
              ],
              "answer": 0,
              "explanation": {
                "en": "$x = \\frac{-4 \\pm \\sqrt{16 + 4}}{2} = \\frac{-4 \\pm \\sqrt{20}}{2} = \\frac{-4 \\pm 2\\sqrt{5}}{2} = -2 \\pm \\sqrt{5}$. The distractor $-4 \\pm \\sqrt{5}$ comes from dividing only the radical by 2 — the fraction bar covers the entire numerator.",
                "zh": "$x = \\frac{-4 \\pm \\sqrt{16 + 4}}{2} = \\frac{-4 \\pm \\sqrt{20}}{2} = \\frac{-4 \\pm 2\\sqrt{5}}{2} = -2 \\pm \\sqrt{5}$。干扰项 $-4 \\pm \\sqrt{5}$ 来自只把根号部分除以 2——分数线其实覆盖整个分子。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A ball is thrown upward from the ground with initial speed 48 ft/s, so its height is $h = -16t^2 + 48t$. After how many seconds does it land back on the ground? Give an integer.",
                "zh": "一个球以 48 英尺/秒的初速度从地面上抛，高度为 $h = -16t^2 + 48t$。多少秒后球落回地面？请填一个整数。"
              },
              "answer": "3",
              "accept": [
                "3.0"
              ],
              "explanation": {
                "en": "Set $h = 0$: $-16t^2 + 48t = 0$, factor $-16t(t - 3) = 0$, so $t = 0$ or $t = 3$. The solution $t = 0$ is the launch moment; the ball lands at $t = 3$ seconds. Factoring beats the formula here — always scan for a common factor first.",
                "zh": "令 $h = 0$：$-16t^2 + 48t = 0$，分解为 $-16t(t - 3) = 0$，所以 $t = 0$ 或 $t = 3$。$t = 0$ 是出手时刻；球在 $t = 3$ 秒落地。这里因式分解比公式更快——先看看有没有公因式。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which method is most efficient for solving $x^2 - 81 = 0$?",
                "zh": "解方程 $x^2 - 81 = 0$ 最高效的方法是哪种？"
              },
              "choices": [
                "The quadratic formula / 求根公式",
                "Square roots: $x^2 = 81$, so $x = \\pm 9$ / 开平方：$x^2 = 81$，故 $x = \\pm 9$",
                "Completing the square / 配方法",
                "Graphing by hand / 手工画图"
              ],
              "answer": 1,
              "explanation": {
                "en": "With no $x$-term, isolate the square and take roots: $x = \\pm 9$ in two steps. The quadratic formula also works (it always does) but wastes time; on a timed test, matching the method to the equation is worth points.",
                "zh": "没有一次项时，孤立平方项直接开平方：两步得 $x = \\pm 9$。求根公式当然也可以（它永远可行），但浪费时间；在限时考试中，根据方程选择方法就是在挣分。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Challenge: A rectangular poster's length is 4 inches more than its width, and its area is 60 square inches. Use the quadratic formula to find the width, rounded to the nearest tenth of an inch. Give a decimal like 5.9.",
                "zh": "挑战题：一张长方形海报的长比宽多 4 英寸，面积为 60 平方英寸。用求根公式求宽，结果保留一位小数（英寸）。请填形如 5.9 的小数。"
              },
              "answer": "6.0",
              "accept": [
                "6",
                "6.00"
              ],
              "explanation": {
                "en": "Let width be $w$: $w(w + 4) = 60$, so $w^2 + 4w - 60 = 0$. Then $w = \\frac{-4 \\pm \\sqrt{16 + 240}}{2} = \\frac{-4 \\pm 16}{2}$, giving $w = 6$ or $w = -10$. Reject the negative: the width is $6.0$ inches. The discriminant $256 = 16^2$ being a perfect square signals the answer is exact.",
                "zh": "设宽为 $w$：$w(w + 4) = 60$，即 $w^2 + 4w - 60 = 0$。于是 $w = \\frac{-4 \\pm \\sqrt{16 + 240}}{2} = \\frac{-4 \\pm 16}{2}$，得 $w = 6$ 或 $w = -10$。舍去负值：宽为 $6.0$ 英寸。判别式 $256 = 16^2$ 是完全平方数，说明答案是精确值。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "unit-15-irrational-numbers",
      "title": "Unit 15: Irrational Numbers",
      "titleZh": "第十五单元：无理数",
      "lessons": [
        {
          "id": "rational-and-irrational-numbers",
          "title": "Rational and Irrational Numbers",
          "titleZh": "有理数与无理数",
          "content": [
            {
              "type": "h2",
              "en": "Two Kinds of Real Numbers",
              "zh": "实数的两大类"
            },
            {
              "type": "p",
              "en": "Every point on the number line is a real number, and every real number is exactly one of two kinds. A rational number is one that can be written as a ratio of two integers, $\\frac{p}{q}$ with $q \\neq 0$. All integers are rational ($7 = \\frac{7}{1}$), and so are fractions like $-\\frac{3}{5}$ and decimals like $2.25 = \\frac{9}{4}$. An irrational number is a real number that cannot be written this way — no matter how clever you are with the fraction.",
              "zh": "数轴上的每个点都是一个实数，而每个实数恰好属于两类中的一类。有理数是能写成两个整数之比 $\\frac{p}{q}$（$q \\neq 0$）的数。所有整数都是有理数（$7 = \\frac{7}{1}$），像 $-\\frac{3}{5}$ 这样的分数和 $2.25 = \\frac{9}{4}$ 这样的小数也是。无理数则是无论如何都写不成这种形式的实数——不管你把分数取得多巧妙。"
            },
            {
              "type": "p",
              "en": "Decimals give a practical test. A rational number's decimal expansion either terminates, like $0.75$, or eventually repeats a fixed block forever, like $0.333\\ldots = 0.\\overline{3}$. In fact $0.\\overline{3}$ is exactly $\\frac{1}{3}$, and we can prove it with a little algebra:",
              "zh": "小数展开提供了一个实用的判别方法。有理数的小数展开要么有限，如 $0.75$；要么从某一位起无限循环一个固定的数字块，如 $0.333\\ldots = 0.\\overline{3}$。事实上 $0.\\overline{3}$ 恰好等于 $\\frac{1}{3}$，用一点代数就能证明："
            },
            {
              "type": "math",
              "tex": "x = 0.333\\ldots \\;\\Rightarrow\\; 10x = 3.333\\ldots \\;\\Rightarrow\\; 10x - x = 3 \\;\\Rightarrow\\; x = \\tfrac{3}{9} = \\tfrac{1}{3}"
            },
            {
              "type": "p",
              "en": "This trick works for any repeating decimal, which is why \"repeating\" always means \"rational\". An irrational number's decimal goes on forever without ever settling into a repeating block.",
              "zh": "这个技巧对任何循环小数都适用，这就是\"循环\"必是\"有理\"的原因。无理数的小数则无限延伸，永远不会进入固定的循环节。"
            },
            {
              "type": "h3",
              "en": "Meeting the Irrationals",
              "zh": "认识无理数"
            },
            {
              "type": "p",
              "en": "The most famous irrational numbers are square roots of non-perfect squares and the circle constant $\\pi$. The ancient Greeks proved that $\\sqrt{2} = 1.41421356\\ldots$ cannot equal any fraction of integers — its decimal never repeats. Likewise $\\pi = 3.14159265\\ldots$ is irrational: the digits go on forever with no repeating pattern. But be careful: not every square root is irrational. $\\sqrt{36} = 6$ is rational, because $36$ is a perfect square; $\\sqrt{8}$ is irrational, because $8$ is not.",
              "zh": "最著名的无理数是非完全平方数的平方根和圆周率 $\\pi$。古希腊人证明了 $\\sqrt{2} = 1.41421356\\ldots$ 不可能等于任何整数之比——它的小数永不循环。同样，$\\pi = 3.14159265\\ldots$ 也是无理数：它的数字无限延伸且没有循环规律。但要小心：并非所有平方根都是无理数。$\\sqrt{36} = 6$ 是有理数，因为 $36$ 是完全平方数；而 $\\sqrt{8}$ 是无理数，因为 $8$ 不是。"
            },
            {
              "type": "note",
              "en": "Common mistake: $\\frac{22}{7}$ and $3.14$ are NOT equal to $\\pi$ — they are rational approximations of it. Writing \"$\\pi = \\frac{22}{7}$\" on a test will cost you points. The same goes for saying $\\sqrt{2} = 1.41$: the calculator display is a rounded rational number, not the irrational number itself.",
              "zh": "常见错误：$\\frac{22}{7}$ 和 $3.14$ 都不等于 $\\pi$——它们只是 $\\pi$ 的有理近似值。在考试中写\"$\\pi = \\frac{22}{7}$\"会被扣分。说 $\\sqrt{2} = 1.41$ 也一样：计算器显示的是四舍五入后的有理数，不是那个无理数本身。"
            },
            {
              "type": "h3",
              "en": "Locating Irrationals on a Number Line",
              "zh": "在数轴上确定无理数的位置"
            },
            {
              "type": "p",
              "en": "Even though we cannot write out all the digits of an irrational number, it still has an exact home on the number line. To place $\\sqrt{n}$, squeeze it between consecutive perfect squares: since $9 < 10 < 16$, we know $3 < \\sqrt{10} < 4$. Then narrow it down by squaring test values: $3.1^2 = 9.61$ and $3.2^2 = 10.24$, so $\\sqrt{10}$ lies between $3.1$ and $3.2$, much closer to $3.2$.",
              "zh": "虽然我们写不完无理数的所有数位，它在数轴上仍有一个确切的位置。要确定 $\\sqrt{n}$ 的位置，先把它夹在相邻的完全平方数之间：由 $9 < 10 < 16$ 可知 $3 < \\sqrt{10} < 4$。再用试验值平方来逐步缩小范围：$3.1^2 = 9.61$，$3.2^2 = 10.24$，所以 $\\sqrt{10}$ 介于 $3.1$ 与 $3.2$ 之间，且更靠近 $3.2$。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 1: Placing $\\sqrt{40}$ on a number line",
                "zh": "例题 1：在数轴上标出 $\\sqrt{40}$"
              },
              "problem": {
                "en": "Between which two consecutive integers does $\\sqrt{40}$ lie? Estimate it to one decimal place without a calculator.",
                "zh": "$\\sqrt{40}$ 位于哪两个相邻整数之间？不用计算器，把它估计到小数点后一位。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "Find the perfect squares around 40: $36 < 40 < 49$, so $6 < \\sqrt{40} < 7$.",
                  "zh": "找出 40 两侧的完全平方数：$36 < 40 < 49$，所以 $6 < \\sqrt{40} < 7$。"
                },
                {
                  "type": "p",
                  "en": "Since 40 is much closer to 36 than to 49, try values near 6: $6.3^2 = 39.69$ and $6.4^2 = 40.96$.",
                  "zh": "因为 40 离 36 比离 49 近得多，试靠近 6 的值：$6.3^2 = 39.69$，$6.4^2 = 40.96$。"
                },
                {
                  "type": "math",
                  "tex": "6.3 < \\sqrt{40} < 6.4"
                },
                {
                  "type": "p",
                  "en": "Since $39.69$ is closer to $40$ than $40.96$ is, $\\sqrt{40} \\approx 6.3$. On the number line, mark it just past $6.3$.",
                  "zh": "由于 $39.69$ 比 $40.96$ 更接近 $40$，$\\sqrt{40} \\approx 6.3$。在数轴上把它标在略超过 $6.3$ 的位置。"
                }
              ]
            },
            {
              "type": "h3",
              "en": "Sums and Products: What Is Guaranteed?",
              "zh": "和与积：哪些结论是必然的？"
            },
            {
              "type": "p",
              "en": "When you add or multiply numbers from these two families, some outcomes are guaranteed and some are not:",
              "zh": "把这两类数相加或相乘时，有些结果是必然的，有些则不然："
            },
            {
              "type": "list",
              "items": [
                {
                  "en": "rational $+$ rational $=$ rational, and rational $\\times$ rational $=$ rational. (Fractions added or multiplied give fractions: $\\frac{p}{q} + \\frac{r}{s} = \\frac{ps + qr}{qs}$.)",
                  "zh": "有理数 $+$ 有理数 $=$ 有理数，有理数 $\\times$ 有理数 $=$ 有理数。（分数相加或相乘仍是分数：$\\frac{p}{q} + \\frac{r}{s} = \\frac{ps + qr}{qs}$。）"
                },
                {
                  "en": "rational $+$ irrational $=$ irrational, always. For example, $5 + \\sqrt{2}$ is irrational.",
                  "zh": "有理数 $+$ 无理数 $=$ 无理数，永远成立。例如 $5 + \\sqrt{2}$ 是无理数。"
                },
                {
                  "en": "(nonzero rational) $\\times$ irrational $=$ irrational, always. For example, $3\\pi$ is irrational.",
                  "zh": "（非零有理数）$\\times$ 无理数 $=$ 无理数，永远成立。例如 $3\\pi$ 是无理数。"
                },
                {
                  "en": "irrational $+$ irrational: NO guarantee. $\\sqrt{2} + \\sqrt{3}$ is irrational, but $\\sqrt{2} + (-\\sqrt{2}) = 0$ is rational.",
                  "zh": "无理数 $+$ 无理数：没有必然结论。$\\sqrt{2} + \\sqrt{3}$ 是无理数，但 $\\sqrt{2} + (-\\sqrt{2}) = 0$ 是有理数。"
                },
                {
                  "en": "irrational $\\times$ irrational: NO guarantee. $\\sqrt{2} \\cdot \\sqrt{3} = \\sqrt{6}$ is irrational, but $\\sqrt{2} \\cdot \\sqrt{2} = 2$ is rational.",
                  "zh": "无理数 $\\times$ 无理数：没有必然结论。$\\sqrt{2} \\cdot \\sqrt{3} = \\sqrt{6}$ 是无理数，但 $\\sqrt{2} \\cdot \\sqrt{2} = 2$ 是有理数。"
                }
              ]
            },
            {
              "type": "note",
              "en": "Test tip: the word \"nonzero\" matters. $0 \\times \\sqrt{2} = 0$, which is rational — so \"rational times irrational is irrational\" is FALSE unless the rational factor is nonzero. When a test asks \"always, sometimes, or never,\" hunt for edge cases like $0$ and opposites like $\\sqrt{2}$ and $-\\sqrt{2}$.",
              "zh": "考试提示：\"非零\"二字很关键。$0 \\times \\sqrt{2} = 0$ 是有理数——所以\"有理数乘无理数是无理数\"只有在有理因数非零时才成立。遇到\"恒成立、有时成立还是不成立\"的题目时，要主动寻找 $0$ 以及 $\\sqrt{2}$ 与 $-\\sqrt{2}$ 这类相反数的特例。"
            },
            {
              "type": "h3",
              "en": "A Taste of Proof",
              "zh": "证明初体验"
            },
            {
              "type": "p",
              "en": "Why MUST a rational plus an irrational be irrational? We argue by contradiction: assume the opposite and show it leads to nonsense. Suppose $r$ is rational, $x$ is irrational, and their sum $s = r + x$ were rational. Then we could solve for $x$:",
              "zh": "为什么有理数加无理数必定是无理数？我们用反证法：先假设结论不成立，再推出矛盾。设 $r$ 是有理数，$x$ 是无理数，并假设它们的和 $s = r + x$ 是有理数。那么可以解出 $x$："
            },
            {
              "type": "math",
              "tex": "x = s - r"
            },
            {
              "type": "p",
              "en": "But $s$ and $r$ are both rational, and a rational minus a rational is rational — so $x$ would be rational. That contradicts the fact that $x$ is irrational. The assumption must be wrong, so $r + x$ is irrational. This style of reasoning, where a single clean contradiction settles the question for ALL cases at once, is what separates a proof from checking examples.",
              "zh": "但 $s$ 和 $r$ 都是有理数，有理数减有理数还是有理数——于是 $x$ 就成了有理数。这与 $x$ 是无理数矛盾。所以假设错误，$r + x$ 必为无理数。这种推理方式用一个干净的矛盾一次性解决所有情形，这正是\"证明\"与\"验证几个例子\"的本质区别。"
            },
            {
              "type": "example",
              "title": {
                "en": "Example 2: Rational or irrational?",
                "zh": "例题 2：有理还是无理？"
              },
              "problem": {
                "en": "Classify each number as rational or irrational, and justify: (a) $(3 - \\sqrt{5}) + \\sqrt{5}$, (b) $\\sqrt{12} \\cdot \\sqrt{3}$, (c) $\\frac{\\pi}{2}$.",
                "zh": "判断下列各数是有理数还是无理数，并说明理由：(a) $(3 - \\sqrt{5}) + \\sqrt{5}$；(b) $\\sqrt{12} \\cdot \\sqrt{3}$；(c) $\\frac{\\pi}{2}$。"
              },
              "solution": [
                {
                  "type": "p",
                  "en": "(a) The sum simplifies: $(3 - \\sqrt{5}) + \\sqrt{5} = 3$, which is rational. Both addends are irrational, so this is a live example of two irrationals with a rational sum.",
                  "zh": "(a) 化简这个和：$(3 - \\sqrt{5}) + \\sqrt{5} = 3$，是有理数。两个加数都是无理数，这正是\"两个无理数之和为有理数\"的实例。"
                },
                {
                  "type": "p",
                  "en": "(b) $\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6$: rational. Never assume a product of square roots is irrational before multiplying — the radicand may become a perfect square.",
                  "zh": "(b) $\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6$：有理数。在相乘之前不要断定平方根的乘积是无理数——被开方数可能变成完全平方数。"
                },
                {
                  "type": "p",
                  "en": "(c) $\\frac{\\pi}{2} = \\frac{1}{2} \\cdot \\pi$ is a nonzero rational times an irrational, so it is irrational. If it were rational, doubling it would make $\\pi$ rational — a contradiction.",
                  "zh": "(c) $\\frac{\\pi}{2} = \\frac{1}{2} \\cdot \\pi$ 是非零有理数乘无理数，因此是无理数。如果它是有理数，把它乘以 2 就会使 $\\pi$ 成为有理数——矛盾。"
                }
              ]
            }
          ],
          "problems": [
            {
              "type": "mc",
              "question": {
                "en": "Which of the following numbers is irrational?",
                "zh": "下列哪个数是无理数？"
              },
              "choices": [
                "$\\sqrt{36}$",
                "$0.\\overline{4}$",
                "$\\sqrt{8}$",
                "$0.75$"
              ],
              "answer": 2,
              "explanation": {
                "en": "$\\sqrt{8}$ is irrational because 8 is not a perfect square. $\\sqrt{36} = 6$ is a trap: a square root is only irrational when the number under it is NOT a perfect square. $0.\\overline{4}$ repeats (it equals $\\frac{4}{9}$) and $0.75$ terminates, so both are rational.",
                "zh": "$\\sqrt{8}$ 是无理数，因为 8 不是完全平方数。$\\sqrt{36} = 6$ 是陷阱：只有被开方数不是完全平方数时，平方根才是无理数。$0.\\overline{4}$ 循环（等于 $\\frac{4}{9}$），$0.75$ 有限，都是有理数。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write $0.35$ as a fraction in lowest terms. Give your answer as a fraction a/b.",
                "zh": "把 $0.35$ 写成最简分数。请以分数 a/b 的形式作答。"
              },
              "answer": "7/20",
              "explanation": {
                "en": "$0.35 = \\frac{35}{100}$. Divide top and bottom by their common factor 5: $\\frac{35}{100} = \\frac{7}{20}$. A terminating decimal is always rational because it is a fraction with a power of 10 in the denominator.",
                "zh": "$0.35 = \\frac{35}{100}$。分子分母同除以公因数 5：$\\frac{35}{100} = \\frac{7}{20}$。有限小数一定是有理数，因为它就是分母为 10 的幂的分数。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "The repeating decimal $0.\\overline{27} = 0.272727\\ldots$ is equal to which fraction?",
                "zh": "循环小数 $0.\\overline{27} = 0.272727\\ldots$ 等于下列哪个分数？"
              },
              "choices": [
                "$\\frac{27}{100}$",
                "$\\frac{3}{11}$",
                "$\\frac{27}{90}$",
                "$\\frac{2}{7}$"
              ],
              "answer": 1,
              "explanation": {
                "en": "Let $x = 0.\\overline{27}$. Then $100x = 27.\\overline{27}$, so $100x - x = 27$ and $x = \\frac{27}{99} = \\frac{3}{11}$. The distractor $\\frac{27}{100}$ is the value of the TERMINATING decimal $0.27$ — repeating decimals need the subtraction trick, not just a power of 10.",
                "zh": "设 $x = 0.\\overline{27}$，则 $100x = 27.\\overline{27}$，于是 $100x - x = 27$，$x = \\frac{27}{99} = \\frac{3}{11}$。干扰项 $\\frac{27}{100}$ 是有限小数 $0.27$ 的值——循环小数需要用相减技巧，不能只除以 10 的幂。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Which statement is true?",
                "zh": "下列哪个说法是正确的？"
              },
              "choices": [
                "The sum of two irrational numbers is always irrational.",
                "The product of two irrational numbers is always irrational.",
                "The sum of a rational number and an irrational number is always irrational.",
                "The product of a rational number and an irrational number is always irrational."
              ],
              "answer": 2,
              "explanation": {
                "en": "Rational + irrational is always irrational (if the sum were rational, subtracting the rational addend would make the irrational number rational). The others all fail: $\\sqrt{2} + (-\\sqrt{2}) = 0$ kills the first, $\\sqrt{2} \\cdot \\sqrt{2} = 2$ kills the second, and $0 \\cdot \\sqrt{2} = 0$ kills the last — the last one is tempting because it is true whenever the rational factor is nonzero.",
                "zh": "有理数加无理数必为无理数（若和是有理数，减去那个有理加数就会让无理数变成有理数）。其余说法都不成立：$\\sqrt{2} + (-\\sqrt{2}) = 0$ 推翻第一个，$\\sqrt{2} \\cdot \\sqrt{2} = 2$ 推翻第二个，$0 \\cdot \\sqrt{2} = 0$ 推翻最后一个——最后一个很有迷惑性，因为只要有理因数非零它就成立。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "A square vegetable garden has an area of $90$ square feet. Its side length is $\\sqrt{90}$ feet, an irrational number. Estimate the side length to one decimal place. Give your answer as a decimal.",
                "zh": "一个正方形菜园的面积是 $90$ 平方英尺，边长为 $\\sqrt{90}$ 英尺，是一个无理数。请把边长估计到小数点后一位，以小数作答。"
              },
              "answer": "9.5",
              "explanation": {
                "en": "Since $81 < 90 < 100$, the side is between 9 and 10. Testing tenths: $9.4^2 = 88.36$ and $9.5^2 = 90.25$, so $\\sqrt{90}$ is between 9.4 and 9.5, and $90.25$ is much closer to $90$ than $88.36$ is. To one decimal place, $\\sqrt{90} \\approx 9.5$.",
                "zh": "因为 $81 < 90 < 100$，边长介于 9 和 10 之间。逐个试十分位：$9.4^2 = 88.36$，$9.5^2 = 90.25$，所以 $\\sqrt{90}$ 介于 9.4 与 9.5 之间，且 $90.25$ 比 $88.36$ 更接近 $90$。精确到一位小数，$\\sqrt{90} \\approx 9.5$。"
              }
            },
            {
              "type": "input",
              "question": {
                "en": "Write the repeating decimal $0.\\overline{8} = 0.888\\ldots$ as a fraction in lowest terms. Give your answer as a fraction a/b.",
                "zh": "把循环小数 $0.\\overline{8} = 0.888\\ldots$ 写成最简分数。请以分数 a/b 的形式作答。"
              },
              "answer": "8/9",
              "explanation": {
                "en": "Let $x = 0.888\\ldots$. Then $10x = 8.888\\ldots$, so $10x - x = 8$, giving $9x = 8$ and $x = \\frac{8}{9}$. Writing $\\frac{8}{10}$ is the common error — that equals $0.8$ exactly, not $0.888\\ldots$.",
                "zh": "设 $x = 0.888\\ldots$，则 $10x = 8.888\\ldots$，相减得 $9x = 8$，$x = \\frac{8}{9}$。写成 $\\frac{8}{10}$ 是常见错误——那等于 $0.8$，而不是 $0.888\\ldots$。"
              }
            },
            {
              "type": "mc",
              "question": {
                "en": "Challenge: suppose $x$ is an irrational number. Which of the following MUST be irrational?",
                "zh": "挑战题：设 $x$ 是无理数。下列哪个数必定是无理数？"
              },
              "choices": [
                "$x^2$",
                "$x - x$",
                "$0 \\cdot x$",
                "$x + \\frac{1}{2}$"
              ],
              "answer": 3,
              "explanation": {
                "en": "$x + \\frac{1}{2}$ is rational plus irrational, which is always irrational: if $x + \\frac{1}{2} = s$ were rational, then $x = s - \\frac{1}{2}$ would be rational — a contradiction. The others can be rational: $x^2$ is tempting, but if $x = \\sqrt{2}$ then $x^2 = 2$; and $x - x = 0$ and $0 \\cdot x = 0$ are always rational.",
                "zh": "$x + \\frac{1}{2}$ 是有理数加无理数，必为无理数：若 $x + \\frac{1}{2} = s$ 是有理数，则 $x = s - \\frac{1}{2}$ 也是有理数——矛盾。其余选项都可能是有理数：$x^2$ 很有迷惑性，但当 $x = \\sqrt{2}$ 时 $x^2 = 2$；而 $x - x = 0$ 和 $0 \\cdot x = 0$ 永远是有理数。"
              }
            }
          ]
        }
      ]
    }
  ]
}
